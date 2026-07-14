// hooks/useShell.ts
import { useState, useCallback, useRef, useEffect } from "react";
import { getLayerByTitle } from "../../../utils/layerHelper";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
export type ToolType = "distance" | "area" | null;

export interface UseMeasureProps {
  areaMeasure: React.RefObject<HTMLArcgisAreaMeasurement2dElement>;
  distanceMeasure: React.RefObject<HTMLArcgisDistanceMeasurement2dElement>;
  activeTool: ToolType;
  handleActionClick: (panel: ToolType) => void;
  snappingEnabled: boolean;
  handleSnappingChange: (
    event: HTMLCalciteSwitchElement["calciteSwitchChange"],
  ) => void;
}

export const useMeasure = (
  mapElement: React.RefObject<HTMLArcgisMapElement>,
): UseMeasureProps => {
  const [activeTool, setActiveTool] = useState<ToolType>(null);
  const [snappingEnabled, setSnappingEnabled] = useState<boolean>(false);
  const areaMeasure = useRef<HTMLArcgisAreaMeasurement2dElement>(null!);
  const distanceMeasure = useRef<HTMLArcgisDistanceMeasurement2dElement>(null!);

  const handleSnappingChange = useCallback(
    (event: HTMLCalciteSwitchElement["calciteSwitchChange"]) => {
      setSnappingEnabled((prev) => !prev);
      const propertyLayer = getLayerByTitle(mapElement.current, "Property");
      if (propertyLayer && propertyLayer.type === "feature") {
        [areaMeasure.current, distanceMeasure.current].forEach(
          (
            measure:
              | HTMLArcgisAreaMeasurement2dElement
              | HTMLArcgisDistanceMeasurement2dElement,
          ) => {
            measure.snappingOptions.enabled = event.target.checked;
            measure.snappingOptions.selfEnabled = true;
            measure.snappingOptions.featureSources = [
              {
                layer: propertyLayer as FeatureLayer,
                enabled: true,
              },
            ];
          },
        );
      }
    },
    [mapElement],
  );
  const handleActionClick = useCallback(
    (tool: ToolType) => {
      setActiveTool(tool === activeTool ? null : tool);
      if (!areaMeasure.current || !distanceMeasure.current) return;
      if (tool === "area") {
        areaMeasure.current.start();
        distanceMeasure.current.clear();
      }
      if (tool === "distance") {
        distanceMeasure.current.start();
        areaMeasure.current.clear();
      }
      if (!tool) {
        areaMeasure.current.clear();
        distanceMeasure.current.clear();
      }
    },
    [activeTool],
  );

  const initializedRef = useRef(false);

  useEffect(() => {
    if (!mapElement.current || initializedRef.current) return;
    initializedRef.current = true;
  }, [mapElement]);

  return {
    areaMeasure,
    distanceMeasure,
    activeTool,
    handleActionClick,
    snappingEnabled,
    handleSnappingChange,
  };
};
