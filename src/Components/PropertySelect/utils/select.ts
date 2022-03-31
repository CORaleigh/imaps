/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Graphic from '@arcgis/core/Graphic';
import * as geometryEngine from '@arcgis/core/geometry/geometryEngine';
import * as promiseUtils from '@arcgis/core/core/promiseUtils';

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
  geometry: __esri.Geometry[] | __esri.Geometry,
  bufferDistance: number,
  view: __esri.MapView,
): __esri.Geometry => {
  debugger;
  let bufferGeometry = geometryEngine.geodesicBuffer(geometry, bufferDistance, 'feet', true) as
    | __esri.Geometry[]
    | __esri.Geometry;
  if ('length' in bufferGeometry) {
    bufferGeometry = (bufferGeometry as __esri.Geometry[])[0];
  }
  addBufferGraphic(bufferGeometry, view);
  return bufferGeometry;
};
export const addGraphic = (e: any, view: __esri.MapView, distance: number): Promise<__esri.Geometry> => {
  return promiseUtils.create((resolve) => {
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
