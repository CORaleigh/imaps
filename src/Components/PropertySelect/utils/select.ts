/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import Graphic from '@arcgis/core/Graphic';
import * as geometryEngine from '@arcgis/core/geometry/geometryEngine';

export const removeBufferGraphic = (view: __esri.MapView): void => {
  const graphics = view.graphics.filter((graphic) => {
    return graphic.getAttribute('type') === 'buffer';
  });
  view.graphics.removeMany(graphics);
};

const addBufferGraphic = (geometry: __esri.Geometry, view: __esri.MapView): void => {
  removeBufferGraphic(view);
  const graphic: Graphic = new Graphic({
    attributes: { type: 'buffer' },
    geometry: geometry,
    symbol: {
      type: 'simple-fill',
      style: 'none',
      outline: {
        color: [0, 0, 0, 0.5],
        width: 3,
        style: 'short-dash',
      },
    } as any,
  });
  view.graphics.add(graphic);
};
export const bufferGraphic = (
  geometry: __esri.Geometry,
  bufferDistance: number,
  view: __esri.MapView,
): __esri.Geometry => {
  geometry = geometryEngine.geodesicBuffer(geometry, bufferDistance, 'feet') as __esri.Geometry;
  addBufferGraphic(geometry, view);
  return geometry;
};
export const addGraphic = (e: any, view: __esri.MapView, distance: number): Promise<__esri.Geometry> => {
  return new Promise((resolve) => {
    if (e.state === 'complete') {
      removeBufferGraphic(view);
      const geometry = e.graphic.geometry;
      if (distance > 0) {
        bufferGraphic(geometry, distance, view);
      }
      resolve(geometry);
    }
  });
};
