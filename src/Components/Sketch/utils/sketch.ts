/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Sketch from '@arcgis/core/widgets/Sketch';
import Color from '@arcgis/core/Color';

import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import LabelClass from '@arcgis/core/layers/support/LabelClass';
export const sketchHandles: any[] = [];
const labelClass = new LabelClass({
  labelExpressionInfo: { expression: '$feature.label' },
  symbol: {
    type: 'text',
    color: 'black',
    haloSize: 1,
    haloColor: 'white',
  } as any,
});
export const points = new FeatureLayer({
  source: [],
  fields: [
    { type: 'oid', name: 'OBJECTID' },
    { type: 'string', name: 'label' },
  ],
  objectIdField: 'OBJECTID',
  geometryType: 'point',
  listMode: 'hide',
  legendEnabled: false,
  id: 'sketch-points',
  renderer: { type: 'simple', symbol: { type: 'simple-marker', color: [255, 255, 255, 1] } } as any,
  labelingInfo: [labelClass],
});
export const lines = new FeatureLayer({
  source: [],
  fields: [
    { type: 'oid', name: 'OBJECTID' },
    { type: 'string', name: 'label' },
  ],
  objectIdField: 'OBJECTID',
  geometryType: 'polyline',
  legendEnabled: false,
  listMode: 'hide',
  id: 'sketch-lines',
  labelingInfo: [labelClass],
});
export const polygons = new FeatureLayer({
  source: [],
  fields: [
    { type: 'oid', name: 'OBJECTID' },
    { type: 'string', name: 'label' },
  ],
  objectIdField: 'OBJECTID',
  geometryType: 'polygon',
  listMode: 'hide',
  legendEnabled: false,
  id: 'sketch-polygons',
  renderer: {
    type: 'simple',
    symbol: {
      type: 'simple-fill',
      color: [255, 255, 255, 0.5],
      outline: {
        type: 'simple-line',
        color: [255, 255, 255, 1],
      },
    },
  } as any,

  labelingInfo: [labelClass],
});
const graphics = new GraphicsLayer({ listMode: 'hide', opacity: 0 });

const sketchOnCreate = (event: __esri.SketchCreateEvent, view: __esri.MapView) => {
  if (event.state === 'start') {
    view.popup.autoOpenEnabled = false;
  }
  if (event.state === 'complete') {
    const graphic: __esri.Graphic = event.graphic;
    const labelText = document.getElementById('labelInput')?.getAttribute('value');
    graphic.setAttribute('label', labelText);
    if (graphic.geometry.type === 'point') {
      points.applyEdits({ addFeatures: [graphic] }).then(() => {
        points.refresh();
      });
    }
    if (graphic.geometry.type === 'polyline') {
      lines.applyEdits({ addFeatures: [graphic] }).then(() => {
        lines.refresh();
      });
    }
    if (graphic.geometry.type === 'polygon') {
      polygons.applyEdits({ addFeatures: [graphic] }).then(() => {
        polygons.refresh();
      });
    }
    view.popup.autoOpenEnabled = true;
  }
};

const sketchOnUpdate = (event: __esri.SketchUpdateEvent) => {
  if (event.state === 'start') {
    graphics.opacity = 0.5;
  }
  if (event.state === 'complete') {
    graphics.opacity = 0;
    if (event.graphics[0].geometry.type === 'point') {
      points.applyEdits({ updateFeatures: event.graphics }).then(() => {
        points.refresh();
      });
    }
    if (event.graphics[0].geometry.type === 'polyline') {
      lines.applyEdits({ updateFeatures: event.graphics }).then(() => {
        lines.refresh();
      });
    }
    if (event.graphics[0].geometry.type === 'polygon') {
      polygons.applyEdits({ updateFeatures: event.graphics }).then(() => {
        polygons.refresh();
      });
    }
  }
};

const sketchOnDelete = (event: __esri.SketchDeleteEvent) => {
  const pointFeatures: __esri.Graphic[] = [];
  const lineFeatures: __esri.Graphic[] = [];
  const polygonFeatures: __esri.Graphic[] = [];
  event.graphics.forEach((graphic) => {
    if (graphic.geometry.type === 'point') {
      pointFeatures.push(graphic);
    }
    if (graphic.geometry.type === 'polyline') {
      lineFeatures.push(graphic);
    }
    if (graphic.geometry.type === 'polygon') {
      polygonFeatures.push(graphic);
    }
  });
  points.applyEdits({ deleteFeatures: pointFeatures }).then(() => {
    points.refresh();
  });
  lines.applyEdits({ deleteFeatures: lineFeatures }).then(() => {
    lines.refresh();
  });
  polygons.applyEdits({ deleteFeatures: polygonFeatures }).then(() => {
    polygons.refresh();
  });
};

export const getInitialSettings = (): any => {
  return {
    pointSize: 10,
    pointFillEnabled: true,
    pointFillColor: '#FF0000',
    pointOutlineColor: '#000000',
    pointFillOpacity: 0.5,
    pointOutlineOpacity: 1,
    pointOutlineWidth: 1,
    lineOutlineOpacity: 1,
    lineWidth: 2,
    lineColor: '#FF0000',

    polygonFillEnabled: true,
    polygonFillOpacity: 0.5,
    polygonOutlineOpacity: 1,
    polygonOutlineWidth: 2,
    polygonOutlineColor: '#000000',
    polygonFillColor: '#FF0000',
  };
};

const updatePointRenderer = (settings: any) => {
  const pointRenderer = (points.renderer as __esri.SimpleRenderer).clone();
  const symbol: __esri.SimpleMarkerSymbol = pointRenderer.symbol as __esri.SimpleMarkerSymbol;

  symbol.color = Color.fromHex(settings.pointFillColor);
  if (!settings.pointFillEnabled) {
    symbol.color.a = 0;
  } else {
    symbol.color.a = settings.pointFillOpacity;
  }
  symbol.outline.color = Color.fromHex(settings.pointOutlineColor);
  symbol.outline.color.a = settings.pointOutlineOpacity;
  symbol.outline.width = settings.pointOutlineWidth;
  symbol.size = settings.pointSize;
  points.renderer = pointRenderer;
};

const updatePolygonRenderer = (settings: any) => {
  const polygonRenderer = (polygons.renderer as __esri.SimpleRenderer).clone();
  const symbol: __esri.SimpleFillSymbol = polygonRenderer.symbol as __esri.SimpleFillSymbol;
  if (settings.polygonFillEnabled) {
    symbol.style = 'solid';
  } else {
    symbol.style = 'none';
  }
  symbol.color = Color.fromHex(settings.polygonFillColor);
  symbol.color.a = settings.polygonFillOpacity;
  symbol.outline.color = Color.fromHex(settings.polygonOutlineColor);
  symbol.outline.color.a = settings.polygonOutlineOpacity;
  symbol.outline.width = settings.polygonOutlineWidth;
  polygons.renderer = polygonRenderer;
};

const updateLineRenderer = (settings: any) => {
  const lineRenderer = (lines.renderer as __esri.SimpleRenderer).clone();
  const symbol: __esri.SimpleLineSymbol = lineRenderer.symbol as __esri.SimpleLineSymbol;
  symbol.color = Color.fromHex(settings.lineColor);
  symbol.color.a = settings.lineOutlineOpacity;
  symbol.width = settings.lineWidth;
  lines.renderer = lineRenderer;
};

export const settingsChanged = (settings: any, geometryType: string) => {
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
export const createSketchWidget = (ref: any, view: __esri.MapView): Sketch => {
  view.map.addMany([points, lines, polygons, graphics]);
  const sketch = new Sketch({
    container: ref.current as HTMLDivElement,
    view: view,
    layer: graphics,
  });
  sketch.on('create', (event: __esri.SketchCreateEvent) => {
    sketchOnCreate(event, view);
  });
  sketch.on('update', sketchOnUpdate);
  sketch.on('delete', sketchOnDelete);
  return sketch;
};
