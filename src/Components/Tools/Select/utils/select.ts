import MapView from "@arcgis/core/views/MapView";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import SketchViewModel from "@arcgis/core/widgets/Sketch/SketchViewModel";
import Graphic from "@arcgis/core/Graphic";
import * as geometryEngine from "@arcgis/core/geometry/geometryEngine";
let distance = 0;
let propertyLayerView: __esri.FeatureLayerView;
let sketchVm: SketchViewModel;
let highlight: any;
let layer: GraphicsLayer;

export function cancelSelect() {
  sketchVm.cancel();
  if (highlight) {
    highlight.remove();
  }
  layer.removeAll();
}
export function initializeSelect(
  view: MapView,
  geometrySet: Function,
  setSelectedTool: Function
) {
  layer = new GraphicsLayer({
    listMode: "hide",
  });
  view.map.add(layer);
  sketchVm = new SketchViewModel({
    view: view,
    layer: layer,
    defaultCreateOptions: {
      mode: "hybrid",
    },
  });
  propertyLayerView = view.allLayerViews.find((lv) => {
    return lv.layer.title.includes("Property") && lv.layer.type === "feature";
  }) as __esri.FeatureLayerView;
  const propertyLayer = view.map.allLayers.find((layer) => {
    return layer.title.includes("Property") && layer.type === "feature";
  }) as __esri.FeatureLayer;
  view.whenLayerView(propertyLayer).then((lv) => {
    propertyLayerView = lv;
  });
  sketchVm.watch("activeTool", (activeTool) => {
    setSelectedTool(activeTool);
  });
  sketchVm.on("create" as any, (event: __esri.SketchViewModelCreateEvent) => {
    if (event.state === "start" || event.state === "cancel") {
      layer.graphics.removeAll();
      if (highlight) {
        highlight.remove();
      }
    }
    if (event.state === "complete") {
      if (distance > 0) {
        geometrySet(buffer(distance, event.graphic));
      } else {
        geometrySet(event.graphic.geometry);
      }
      sketchVm.create(event.tool);
      if (highlight) {
        highlight.remove();
      }
      layer.graphics.removeAll();
    }
    if (event.state === "active") {
      if (distance === 0) {
        highlightProperties(view, event.graphic.geometry).then(
          (newHighlight) => {
            if (highlight) {
              highlight.remove();
            }
            highlight = newHighlight;
          }
        );
      } else {
        const geom = buffer(distance, event.graphic) as __esri.Geometry;
        sketchVm.layer.removeAll();
        const symbol = {
          type: "simple-fill",
          color: [255, 255, 0, 0.2],
          style: "solid",
        };
        sketchVm.layer.add(new Graphic({ geometry: geom, symbol: symbol }));
        highlightProperties(view, geom).then((newHighlight) => {
          if (highlight) {
            highlight.remove();
          }
          highlight = newHighlight;
        });
      }
    }
  });
  return sketchVm;
}

function buffer(distance: number, graphic: Graphic) {
  return geometryEngine.buffer(graphic.geometry, distance, "feet");
}

function highlightProperties(view: MapView, geometry: __esri.Geometry) {
  return new Promise((resolve, reject) => {
    propertyLayerView
      .queryFeatures({
        geometry: geometry,
        outSpatialReference: view.spatialReference,
      })
      .then((result) => {
        const h = propertyLayerView.highlight(result.features);
        resolve(h);
      });
  });
}

export function bufferDistanceChanged(event: any, setDistance: Function) {
  if (event.target.value === "") {
    distance = 0;
  } else {
    distance = parseInt(event.target.value);
  }
  setDistance(distance);
}

export function createSketch(
  sketchVm: SketchViewModel,
  tool: "point" | "multipoint" | "polyline" | "polygon" | "rectangle" | "circle"
) {
  sketchVm.create(tool);
}

export function bufferProperty(
  property: Graphic,
  distance: number,
  geometrySet: Function
) {
  geometrySet(geometryEngine.buffer(property.geometry, distance, "feet"));
}
