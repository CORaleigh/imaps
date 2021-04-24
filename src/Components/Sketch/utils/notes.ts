/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Graphic from '@arcgis/core/Graphic';
import MapNotesLayer from '@arcgis/core/layers/MapNotesLayer';
import SketchViewModel from '@arcgis/core/widgets/Sketch/SketchViewModel';
import TextSymbol from '@arcgis/core/symbols/TextSymbol';
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
import SimpleLineSymbol from '@arcgis/core/symbols/SimpleLineSymbol';

import Color from '@arcgis/core/Color';
export let pointSketchViewModel: SketchViewModel | null = null;

export let polylineSketchViewModel: SketchViewModel | null = null;

export let polygonSketchViewModel: SketchViewModel | null = null;

export let textSketchViewModel: SketchViewModel | null = null;
let count = 0;
const pointSymbol = new SimpleMarkerSymbol({
  size: 10,
  color: new Color([255, 255, 255, 1]),
  style: 'circle',
  outline: new SimpleLineSymbol({
    color: new Color([0, 0, 0, 1]),
    width: 1,
  }),
});
const lineSymbol = new SimpleLineSymbol({
  color: new Color([255, 0, 0, 1]),
  width: 2,
});

const fillSymbol = new SimpleFillSymbol({
  color: new Color([255, 0, 0, 0.5]),
  style: 'solid',
  outline: new SimpleLineSymbol({
    color: new Color([255, 0, 0, 1]),
    width: 2,
  }),
});

export const textSymbol = new TextSymbol({
  text: 'new text alert',
  color: [255, 255, 255],
  haloColor: [1, 68, 33],
  haloSize: 2,
  font: {
    family: 'Arial Unicode MS',
    size: 14,
  },
});
// use this counter for new map notes title purposes

const sketchLayer = new MapNotesLayer();

const pointLayer = sketchLayer.pointLayer;
const polylineLayer = sketchLayer.polylineLayer;
const polygonLayer = sketchLayer.polygonLayer;
const textLayer = sketchLayer.textLayer;

const updatePointRenderer = (settings: any) => {
  pointSymbol.color = Color.fromHex(settings.pointFillColor);
  if (!settings.pointFillEnabled) {
    pointSymbol.color.a = 0;
  } else {
    pointSymbol.color.a = settings.pointFillOpacity;
  }
  pointSymbol.outline.color = Color.fromHex(settings.pointOutlineColor);
  pointSymbol.outline.color.a = settings.pointOutlineOpacity;
  pointSymbol.outline.width = settings.pointOutlineWidth;
  pointSymbol.size = settings.pointSize;
};

const updatePolygonRenderer = (settings: any) => {
  if (settings.polygonFillEnabled) {
    fillSymbol.style = 'solid';
  } else {
    fillSymbol.style = 'none';
  }
  fillSymbol.color = Color.fromHex(settings.polygonFillColor);
  fillSymbol.color.a = settings.polygonFillOpacity;
  fillSymbol.outline.color = Color.fromHex(settings.polygonOutlineColor);
  fillSymbol.outline.color.a = settings.polygonOutlineOpacity;
  fillSymbol.outline.width = settings.polygonOutlineWidth;
};

const updateLineRenderer = (settings: any) => {
  lineSymbol.color = Color.fromHex(settings.lineColor);
  lineSymbol.color.a = settings.lineOutlineOpacity;
  lineSymbol.width = settings.lineWidth;
};

export const settingsChanged = (settings: any, geometryType: string): void => {
  if (geometryType === 'point') {
    updatePointRenderer(settings);
  }
  if (geometryType === 'polygon') {
    updatePolygonRenderer(settings);
  }
  if (geometryType === 'line') {
    updateLineRenderer(settings);
  }
};

const addGraphic = (event: any) => {
  if (event.state === 'complete') {
    switch (event.tool) {
      case 'point':
        count++;
        const elemental = document.querySelector('.sketchTools calcite-action[active]');
        if (elemental?.getAttribute('text') == 'Point') {
          pointLayer.remove(event.graphic);
          const newPointGraphic = new Graphic({
            geometry: event.graphic.geometry,
            symbol: pointSymbol.clone(),
            attributes: {
              title: 'point map note #' + count,
            },
          });
          pointLayer.add(newPointGraphic);
        } else if (elemental?.getAttribute('text') == 'Text') {
          count++;
          textLayer.remove(event.graphic);
          const newTextGraphic = new Graphic({
            geometry: event.graphic.geometry,
            symbol: textSymbol,
            attributes: {
              title: 'text map note #' + count,
            },
          });
          textLayer.add(newTextGraphic);
        } else {
          console.log('point logic error occurred');
          break;
        }
        break;

      case 'polyline':
        count++;
        polylineLayer.remove(event.graphic);
        const newPolylineGraphic = new Graphic({
          geometry: event.graphic.geometry,
          symbol: lineSymbol.clone(),
          attributes: {
            title: 'polyline map note #' + count,
          },
        });
        polylineLayer.add(newPolylineGraphic);
        break;

      case 'polygon':
        count++;
        polygonLayer.remove(event.graphic);
        const newPolygonGraphic = new Graphic({
          geometry: event.graphic.geometry,
          symbol: fillSymbol.clone(),
          attributes: {
            title: 'polygon map note #' + count,
          },
        });
        polygonLayer.add(newPolygonGraphic);
        break;

      default:
        console.log('geometry type not found: ', event);
    }
  }
};
export const setupViewModels = (view: __esri.MapView): void => {
  view.map.add(sketchLayer);
  pointSketchViewModel = createSketchViewModels(pointLayer, view);
  polylineSketchViewModel = createSketchViewModels(polylineLayer, view);
  polygonSketchViewModel = createSketchViewModels(polygonLayer, view);
  textSketchViewModel = createSketchViewModels(textLayer, view);
};
const createSketchViewModels = (layer: __esri.GraphicsLayer, view: __esri.MapView): SketchViewModel => {
  const sketchVM = new SketchViewModel({
    view,
    layer,
    updateOnGraphicClick: true,
    defaultCreateOptions: {
      mode: 'hybrid',
    },
  });
  sketchVM.on('create', addGraphic);
  return sketchVM;
};

export const textClicked = (): void => {
  // Listen to update event to modify a graphic to view
  textSketchViewModel?.on('update', function (event: any) {
    const currentGraphic = event.graphics[0];
    if (event.state === 'complete') {
      currentGraphic.symbol = textSymbol.clone();
    }
  });
};
