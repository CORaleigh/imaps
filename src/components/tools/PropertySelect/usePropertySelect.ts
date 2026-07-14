/* eslint-disable react-hooks/exhaustive-deps */
// hooks/useShell.ts
import { useState, useRef, useEffect, useCallback } from "react";
import SketchViewModel from "@arcgis/core/widgets/Sketch/SketchViewModel.js";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";
import * as geodesicBufferOperator from "@arcgis/core/geometry/operators/geodesicBufferOperator.js";
import { useMap } from "../../../context/useMap";
import type { MapMode } from "../../../context/MapContext.types";
import type Layer from "@arcgis/core/layers/Layer";
import type FeatureLayerView from "@arcgis/core/views/layers/FeatureLayerView";
import type FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import type Geometry from "@arcgis/core/geometry/Geometry";
import type { ResourceHandle } from "@arcgis/core/core/Handles";
import type { CreateEvent } from "@arcgis/core/widgets/Sketch/types";

type SketchTool =
  | "point"
  | "polyline"
  | "polygon"
  | "circle"
  | "rectangle"
  | "text"
  | "multipoint";

const SKETCH_TOOLS: SketchTool[] = [
  "point",
  "polyline",
  "polygon",
  "circle",
  "rectangle",
  "text",
  "multipoint",
];

export interface UsePropertySelectProps {
  mapMode: MapMode;
  bufferDistance: number;
  selectedCondo: Graphic | null;
  handleActionClick: (tool: MapMode) => void;
  handleBufferDistanceInput: (
    event: HTMLCalciteInputNumberElement["calciteInputNumberChange"],
  ) => void;
  handleClear: () => void;
  handleToolClose: () => void;
  handleBufferProperty: () => void;
}

const getLayerByTitle = (mapElement: HTMLArcgisMapElement, name: string) => {
  return mapElement.view.map?.allLayers.find(
    (layer: Layer) => layer.title === name && layer.type === "feature",
  );
};

const getFeatureLayerView = async (
  mapElement: HTMLArcgisMapElement,
): Promise<FeatureLayerView> => {
  const layer = getLayerByTitle(mapElement, "Property") as FeatureLayer;
  if (!layer) throw new Error("Property layer not found");

  const layerView = (await mapElement.whenLayerView(layer)) as FeatureLayerView;

  if (!layerView) throw new Error("FeatureLayerView for Property not found");

  return layerView;
};

export const usePropertySelect = (
  mapElement: React.RefObject<HTMLArcgisMapElement>,
  // closed: boolean,
  onToolClose: () => void,
): UsePropertySelectProps => {
  const {
    setGeometry,
    setCondos,
    setSelectedCondo,
    mapMode,
    setMapMode,
    selectedCondo,
  } = useMap();
  const [bufferDistance, setBufferDistance] = useState(0);

  const bufferDistanceRef = useRef(0);
  const graphicsLayer = useRef<GraphicsLayer>(undefined);
  const sketchViewModel = useRef<SketchViewModel>(undefined);

  const highlight = useRef<ResourceHandle>(undefined);

  const cancelSelect = useCallback(() => {
    sketchViewModel.current?.cancel();
    highlight.current?.remove();

    graphicsLayer.current?.removeAll();
  }, []);

  // Handle sketch tool actions
  const handleActionClick = useCallback(
    (tool: MapMode) => {
      if (!mapElement.current || !sketchViewModel.current) return;

      if (tool === mapMode || !tool) {
        mapElement.current.popupDisabled = false;
        setMapMode(null);
        cancelSelect();
        return;
      }

      setMapMode(tool);

      if (tool && SKETCH_TOOLS.includes(tool as SketchTool)) {
        mapElement.current.popupDisabled = true;
        sketchViewModel.current.create(tool as SketchTool);
      } else {
        mapElement.current.popupDisabled = tool === "streetview";
      }
    },
    [mapElement, mapMode, setMapMode],
  );

  const highlightProperties = async (
    geometry: Geometry,
  ): Promise<ResourceHandle> => {
    const propertyLayerView = await getFeatureLayerView(mapElement.current);
    const result = await propertyLayerView.queryFeatures({
      geometry: geometry,
      outSpatialReference: mapElement.current.spatialReference,
    });
    return propertyLayerView.highlight(result.features);
  };

  const addBufferGraphic = (geometry: Geometry) => {
    sketchViewModel.current?.removeAllGraphics();
    sketchViewModel.current?.addGraphic(
      new Graphic({
        geometry,
        symbol: {
          type: "simple-fill",
          style: "none",
          outline: {
            type: "simple-line",
            width: 2,
            style: "dash",
          },
        },
      }),
    );
  };
  // Handle SketchViewModel create events
  const handleCreate = useCallback(
    async (event: CreateEvent) => {
      if (!event.graphic?.geometry) return;
      if (!geodesicBufferOperator.isLoaded())
        await geodesicBufferOperator.load();

      if (event.state === "start" || event.state === "cancel") {
        graphicsLayer.current?.removeAll();
        if (highlight) {
          highlight.current?.remove();
          highlight.current = undefined;
        }
      }
      if (event.state === "complete") {
        sketchViewModel.current?.removeAllGraphics();

        if (bufferDistanceRef.current > 0) {
          const buffer = geodesicBufferOperator.execute(
            event.graphic.geometry,
            bufferDistanceRef.current,
            { unit: "feet" },
          ) as Geometry;
          setGeometry(buffer);
          addBufferGraphic(buffer);
        } else {
          setGeometry(event.graphic.geometry);
        }
        setTimeout(() => {
          highlight.current?.remove();
          highlight.current = undefined;
        }, 100);
      }
      let highlightGeometry: Geometry = event.graphic.geometry;
      if (event.state === "active") {
        sketchViewModel.current?.removeAllGraphics();
        if (bufferDistanceRef.current > 0) {
          const buffer = geodesicBufferOperator.execute(
            event.graphic.geometry,
            bufferDistanceRef.current,
            { unit: "feet" },
          ) as Geometry;
          highlightGeometry = buffer;
          addBufferGraphic(buffer);
        }
        const newHighlight = await highlightProperties(highlightGeometry);
        highlight.current?.remove();
        highlight.current = newHighlight;
      }
    },
    [setGeometry],
  );

  // Handle buffer distance input
  const handleBufferDistanceInput = (
    event: HTMLCalciteInputNumberElement["calciteInputNumberChange"],
  ) => {
    const val = parseInt(event.target.value);
    setBufferDistance(val);
  };

  // Clear all graphics and reset
  const handleClear = useCallback(() => {
    cancelSelect();
    setMapMode(null);
    setCondos([]);
    setSelectedCondo(null);
  }, [setCondos, setSelectedCondo, setMapMode]);

  // Close tool
  const handleToolClose = useCallback(() => {
    cancelSelect();
    setMapMode(null);
    onToolClose();
  }, [setMapMode, onToolClose]);

  const handleBufferProperty = useCallback(async () => {
    if (bufferDistance > 0 && selectedCondo?.geometry) {
      if (!geodesicBufferOperator.isLoaded())
        await geodesicBufferOperator.load();
      const buffer = geodesicBufferOperator.execute(
        selectedCondo.geometry,
        bufferDistanceRef.current,
        { unit: "feet" },
      ) as Geometry;
      setGeometry(buffer);
      addBufferGraphic(buffer);
    }
  }, [bufferDistance, selectedCondo]);
  // -----------------------------
  // Initialize SketchViewModel after view is ready
  // -----------------------------
  useEffect(() => {
    const view = mapElement.current?.view;
    const mapRef = mapElement.current; // local copy for cleanup
    if (!view || !mapRef) return;

    // Add graphics layer
    const layer = new GraphicsLayer({id: 'select-graphics',listMode: 'hide'});
    mapRef.map?.add(layer);
    graphicsLayer.current = layer;

    const vm = new SketchViewModel({
      view,
      layer,
      creationMode: "continuous",
    });
    sketchViewModel.current = vm;

    // Attach create event
    const handle = vm.on("create", handleCreate);

    return () => {
      handle.remove();
      mapRef.map?.remove(layer);
    };
  }, [mapElement, handleCreate]);

  // Keep bufferDistanceRef in sync
  useEffect(() => {
    bufferDistanceRef.current = bufferDistance;
  }, [bufferDistance]);

  // Close tool when `closed` prop changes
  // useEffect(() => {
  //   if (closed) handleToolClose();
  // }, [closed, handleToolClose]);

  return {
    mapMode,
    bufferDistance,
    selectedCondo,
    handleActionClick,
    handleBufferDistanceInput,
    handleClear,
    handleToolClose,
    handleBufferProperty,
  };
};
