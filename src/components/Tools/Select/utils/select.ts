import MapView from '@arcgis/core/views/MapView';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import SketchViewModel from '@arcgis/core/widgets/Sketch/SketchViewModel';
import Graphic from '@arcgis/core/Graphic';
import * as geometryEngine from '@arcgis/core/geometry/geometryEngine';
import Geometry from '@arcgis/core/geometry/Geometry';
let distance = 0;
let propertyLayerView: __esri.FeatureLayerView;
let sketchVm: SketchViewModel;
let highlight: any;
let layer: GraphicsLayer;

export const cancelSelect = () => {
  sketchVm.cancel();
  if (highlight) {
    highlight.remove();
  }
  layer.removeAll();
};
export const initializeSelect = async (
  view: MapView,
  geometrySet: (geometry: Geometry) => void,
  setSelectedTool: (selectedTool: string) => void,
) => {
  layer = new GraphicsLayer({
    listMode: 'hide',
    id: 'select-graphics',
  });
  view.map.add(layer);
  sketchVm = new SketchViewModel({
    view: view,
    layer: layer,
    defaultCreateOptions: {
      mode: 'hybrid',
    },
  });
  propertyLayerView = view.allLayerViews.find((lv) => {
    return lv.layer.title.includes('Property') && lv.layer.type === 'feature';
  }) as __esri.FeatureLayerView;
  const propertyLayer = view.map.allLayers.find((layer) => {
    return layer.title.includes('Property') && layer.type === 'feature';
  }) as __esri.FeatureLayer;
  propertyLayerView = await view.whenLayerView(propertyLayer);
  sketchVm.watch('activeTool', (activeTool) => {
    setSelectedTool(activeTool);
  });
  sketchVm.on(
    'create' as any,
    async (event: __esri.SketchViewModelCreateEvent) => {
      if (event.state === 'start' || event.state === 'cancel') {
        layer.graphics.removeAll();
        if (highlight) {
          highlight.remove();
        }
      }
      if (event.state === 'complete') {
        if (distance > 0) {
          const geom = buffer(distance, event.graphic) as __esri.Geometry;
          geometrySet(geom);
          addBufferGraphic(geom);
          if (layer.graphics.length > 1) {
            layer.graphics.removeAt(1);
          }
        } else {
          geometrySet(event.graphic.geometry);
          layer.graphics.removeAll();
        }
        sketchVm.create(event.tool);
        if (highlight) {
          highlight.remove();
        }
      }
      if (event.state === 'active') {
        if (distance === 0) {
          const newHighlight = await highlightProperties(
            view,
            event.graphic.geometry,
          );

          if (highlight) {
            highlight.remove();
          }
          highlight = newHighlight;
        } else {
          const geom = buffer(distance, event.graphic) as __esri.Geometry;
          addBufferGraphic(geom);
          const newHighlight = await highlightProperties(view, geom);
          if (highlight) {
            highlight.remove();
          }
          highlight = newHighlight;
        }
      }
    },
  );
  return sketchVm;
};

const buffer = (distance: number, graphic: Graphic) => {
  return geometryEngine.geodesicBuffer(graphic.geometry, distance, 'feet');
};
const addBufferGraphic = (geom: __esri.Geometry) => {
  sketchVm.layer.removeAll();
  const symbol = {
    type: 'simple-fill',
    color: [255, 255, 0, 0],
    style: 'solid',
    outline: {
      type: 'simple-line',
      color: [0, 0, 0, 1],
      width: 2,
      style: 'dash',
    },
  };
  sketchVm.layer.add(new Graphic({ geometry: geom, symbol: symbol }));
};

const highlightProperties = async (
  view: MapView,
  geometry: __esri.Geometry,
): Promise<__esri.Handle> => {
  const result = await propertyLayerView.queryFeatures({
    geometry: geometry,
    outSpatialReference: view.spatialReference,
  });
  return propertyLayerView.highlight(result.features);
};

export const bufferDistanceChanged = (
  event: any,
  setDistance: (distance: number) => void,
) => {
  if (event.target.value === '') {
    distance = 0;
  } else {
    distance = parseInt(event.target.value);
  }
  if (parseInt(event.target.value) > 5280) {
    distance = 5280;
  }
  setDistance(distance);
};

export const createSketch = (
  sketchVm: SketchViewModel,
  tool:
    | 'point'
    | 'multipoint'
    | 'polyline'
    | 'polygon'
    | 'rectangle'
    | 'circle',
) => {
  sketchVm.create(tool);
};

export const bufferProperty = (
  property: Graphic,
  distance: number,
  geometrySet: (geometry: Geometry) => void,
  view: MapView,
) => {
  const geom = buffer(distance, property) as __esri.Geometry;
  geometrySet(geom);
  addBufferGraphic(geom);
  view.goTo(geom);
};
