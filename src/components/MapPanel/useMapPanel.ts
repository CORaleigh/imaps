// hooks/useMapPanel.ts
import { useCallback, useRef } from "react";
import { useMap } from "../../context/useMap";
import Extent from "@arcgis/core/geometry/Extent";
import { constraints } from "../../utils/constraints";
import * as centroidOperator from "@arcgis/core/geometry/operators/centroidOperator.js";
import MapViewConstraints from "@arcgis/core/views/2d/MapViewConstraints.js";
import Color from "@arcgis/core/Color";
import HighlightOptions from "@arcgis/core/views/support/HighlightOptions";
import type Polygon from "@arcgis/core/geometry/Polygon";

export interface UseMapPanelProps {
  handleViewReady: (
    event: HTMLArcgisMapElement["arcgisViewReadyChange"],
  ) => void;
  handleViewHold: (event: HTMLArcgisMapElement["arcgisViewHold"]) => void;
  handleGoToHome: NonNullable<HTMLArcgisHomeElement["goToOverride"]>;
  handlePopupTriggerAction: (
    event: HTMLArcgisPopupElement["arcgisTriggerAction"],
  ) => void;
}

const getStoredExtent = (webMapId: string): unknown | null => {
  const raw = localStorage.getItem(`imaps_${webMapId}_extent`);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    // corrupted/stale entry — clear it so it doesn't keep failing
    localStorage.removeItem(`imaps_${webMapId}_extent`);
    return null;
  }
};

export const useMapPanel = (): UseMapPanelProps => {
  const { webMapId, setGeometry } = useMap();

  // track the element + listener we attached so we can clean it up
  // if handleViewReady ever fires again for a new view element
  const viewChangeCleanup = useRef<(() => void) | null>(null);

  const handleViewChange = useCallback(
    (event: HTMLArcgisMapElement["arcgisViewChange"]) => {
      if (!event.target.extent) return;
      localStorage.setItem(
        `imaps_${webMapId.current}_extent`,
        JSON.stringify(event.target.extent.toJSON()),
      );
    },
    [webMapId],
  );

  const handleViewReady = useCallback(
    async (event: HTMLArcgisMapElement["arcgisViewReadyChange"]) => {
      event.target.constraints = constraints as MapViewConstraints;

      const storedExtent = getStoredExtent(webMapId.current);
      if (storedExtent) {
        event.target.view.extent = storedExtent as Extent;
      }

      await event.target.view.when();

      event.target.highlights.push(
        new HighlightOptions({
          color: new Color("red"),
          name: "property-highlight",
        }),
      );

      // clean up any previous listener before attaching a new one
      // (defensive — guards against handleViewReady firing more than once)
      viewChangeCleanup.current?.();

      const target = event.target;
      target.addEventListener("arcgisViewChange", handleViewChange);
      viewChangeCleanup.current = () => {
        target.removeEventListener("arcgisViewChange", handleViewChange);
      };
    },
    [handleViewChange, webMapId],
  );

  const handleViewHold = useCallback(
    async (event: HTMLArcgisMapElement["arcgisViewHold"]) => {
      setGeometry(event.detail.mapPoint);
    },
    [setGeometry],
  );

  const handleGoToHome: NonNullable<HTMLArcgisHomeElement["goToOverride"]> =
    useCallback((view) => {
      return view.goTo(
        new Extent({
          xmin: -8810106.471332055,
          ymin: 4207611.929668259,
          xmax: -8689947.462867815,
          ymax: 4333580.152282169,
          spatialReference: {
            wkid: 102100,
          },
        }),
      );
    }, []);

  const handlePopupTriggerAction = useCallback(
    (event: HTMLArcgisPopupElement["arcgisTriggerAction"]) => {
      const popup = event.target;
      const action = event.detail.action;
      if (action.title === "Select" && popup && popup.selectedFeature) {
        setGeometry(
          centroidOperator.execute(popup.selectedFeature.geometry as Polygon),
        );
        popup.clear();
      }
    },
    [setGeometry],
  );

  return {
    handleViewReady,
    handleViewHold,
    handleGoToHome,
    handlePopupTriggerAction,
  };
};
