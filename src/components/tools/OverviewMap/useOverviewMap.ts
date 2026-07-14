// hooks/useShell.ts
import { useRef, useEffect, type RefObject } from "react";
import Graphic from "@arcgis/core/Graphic";
export type ToolType = "distance" | "area" | null;
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils.js";
import type Extent from "@arcgis/core/geometry/Extent";

export interface UseOverviewMapProps {
  overviewMapElement: RefObject<HTMLArcgisMapElement | null>;
  handleOverviewReady: (
    event: HTMLArcgisMapElement["arcgisViewReadyChange"],
  ) => void;
  isOpen: boolean;
}

const addGraphic = (overviewMap: HTMLArcgisMapElement, mapExtent: Extent) => {
  overviewMap.graphics.removeAll();
  overviewMap.graphics.add(
    new Graphic({
      geometry: mapExtent,
      symbol: {
        type: "simple-fill",
        color: [0, 0, 0, 0.25], // fully transparent fill
        outline: {
          type: "simple-line",
          color: [0, 0, 0, 0.5], // same blue as iOS highlight feel
          width: 2,
        },
      },
    }),
  );
};

export const useOverviewMap = (
  mapElement: React.RefObject<HTMLArcgisMapElement>,
  isOpen: boolean,
): UseOverviewMapProps => {
  const overviewMapElement = useRef<HTMLArcgisMapElement | null>(null);
  const initializedRef = useRef(false);
  const handleOverviewReady = async (
    event: HTMLArcgisMapElement["arcgisViewReadyChange"],
  ) => {
    event.target.basemap = mapElement.current.basemap;
    await event.target.goTo(mapElement.current.extent.clone().expand(4));
    addGraphic(event.target, mapElement.current.extent);
  };

  useEffect(() => {
    if (!isOpen) return;

    if (!mapElement.current) return;

    const handle = reactiveUtils.watch(
      () => mapElement.current?.view?.stationary,
      async (stationary: boolean) => {
        if (!overviewMapElement.current || !stationary) return;
        const mapExtent = mapElement.current.extent;
        await overviewMapElement.current.goTo(mapExtent.clone().expand(4));
        addGraphic(overviewMapElement.current, mapExtent);
      },
    );

    return () => {
      handle.remove();
    };
  }, [isOpen, mapElement]);
  useEffect(() => {
    if (
      !mapElement.current ||
      !overviewMapElement.current ||
      initializedRef.current
    )
      return;
    initializedRef.current = true;
  }, [mapElement]);

  return {
    overviewMapElement,
    handleOverviewReady,
    isOpen,
  };
};
