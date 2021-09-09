/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-explicit-any

import * as promiseUtils from '@arcgis/core/core/promiseUtils';
import esriRequest from '@arcgis/core/request';
import PrintTask from '@arcgis/core/tasks/PrintTask';
import LegendLayer from '@arcgis/core/tasks/support/LegendLayer';
import PrintParameters from '@arcgis/core/tasks/support/PrintParameters';
import PrintTemplate from '@arcgis/core/tasks/support/PrintTemplate';
import { printTemplates } from './templates';
type Layout = {
  label: string;
  template: string;
  size: number;
};

type MapScale = {
  scale: number;
  label: string;
};
export const getFormats = (url: string): Promise<string[]> => {
  return promiseUtils.create((resolve, reject) =>
    esriRequest(url, { query: { f: 'json' } })
      .then((result) => {
        result.data.parameters.forEach((parameter: any) => {
          if (parameter.name === 'Format') {
            resolve(parameter.choiceList);
          }
        });
      })
      .catch((reason) => {
        reject(reason);
      }),
  );
};

export const getLayouts = (): Promise<Layout[]> => {
  return promiseUtils.create((resolve) => {
    //esriRequest(url, { query: { f: 'json' } })
    //.then((result) => {
    const layouts: Layout[] = [];
    const templates: string[] = [];
    printTemplates.results[0].value.forEach((value: any) => {
      const width = value.pageSize[0];
      const height = value.pageSize[1];
      let label = `${width}"x${height}"`;
      let orient = 'Portrait';
      let size: number = width;
      let template = `${width}x${height}_${orient.toLowerCase()}`;
      if (width > height) {
        label = `${height}"x${width}"`;
        orient = 'Landscape';
        template = `${height}x${width}_${orient.toLowerCase()}`;
        size = height;
      }
      label += ` ${orient}`;

      const layout = { label: label, template: template, size: size };
      if (!templates.includes(layout.template)) {
        layouts.push(layout);
        templates.push(layout.template);
      }
    });
    layouts.sort((a: Layout, b: Layout) => {
      return a.size - b.size;
    });
    resolve(layouts);
    //    })
    //   .catch((reason) => {
    //     reject(reason);
    //    });
  });
};
export const roundScale = (mapScale: number): number => {
  const newScale = Math.round((mapScale * 600) / 564.248588);
  if (newScale <= 75) {
    return 75;
  }
  if (newScale > 75 && newScale <= 150) {
    return 150;
  }
  if (newScale > 150 && newScale <= 300) {
    return 300;
  }
  if (newScale > 300 && newScale <= 600) {
    return 600;
  }
  if (newScale > 600 && newScale <= 1200) {
    return 1200;
  }
  if (newScale > 1200 && newScale <= 2400) {
    return 2400;
  }
  if (newScale > 2400 && newScale <= 4800) {
    return 4800;
  }
  if (newScale > 4800 && newScale <= 9600) {
    return 9600;
  }
  if (newScale > 9600 && newScale <= 19200) {
    return 19200;
  }
  if (newScale > 19200 && newScale <= 38400) {
    return 38400;
  }
  if (newScale > 38400 && newScale <= 76800) {
    return 76800;
  }
  if (newScale > 76800 && newScale <= 153600) {
    return 153600;
  }
  if (newScale > 153600 && newScale <= 307200) {
    return 307200;
  }
  if (newScale > 307200 && newScale <= 614400) {
    return 614400;
  }
  if (newScale > 614400 && newScale <= 1228800) {
    return 1228800;
  }
  return 0;
};

export const getScales = (view: __esri.MapView): MapScale[] => {
  const scales = (view.constraints as any)._defaultLODs
    .filter((lod: any) => {
      return lod.scale >= 300 && lod.scale < 614400;
    })
    .map((lod: any) => {
      const scale = roundScale(lod.scale);
      return { scale: scale, label: `1" = ${(scale / 12).toLocaleString('en')}'` };
    })
    ?.reverse();
  scales.push({ scale: 'custom', label: 'User Defined' });
  return scales;
};

export const getCustomElements = (size: number, mapScale: number): any[] => {
  const customElements = [];
  customElements.push({ Scale: (mapScale / 12).toString() });
  if (size < 24) {
    customElements.push({ HalfScale: (mapScale / 12 / 2).toString() });
    customElements.push({ '2xScale': (mapScale / 12) * 2 + ' ft' });
  } else if (size < 36) {
    customElements.push({ '2xScale': (mapScale / 12) * 2 });
    customElements.push({ '4xScale': (mapScale / 12) * 4 + ' ft' });
  } else {
    customElements.push({ '2xScale': (mapScale / 12) * 2 });
    customElements.push({ '4xScale': (mapScale / 12) * 4 });
    customElements.push({ '6xScale': (mapScale / 12) * 6 + ' ft' });
  }
  return customElements;
};

export const formatAttributes = (selectedFeature: __esri.Graphic): string => {
  let text = '';
  (selectedFeature.layer as __esri.FeatureLayer).fields.forEach((field) => {
    if (!['OBJECTID'].includes(field.name) && selectedFeature.getAttribute(field.name)) {
      if (field.type === 'date') {
        const date = new Date(selectedFeature.getAttribute(field.name));
        console.log(date);
        text += `${field.alias}: ${date.getUTCMonth() + 1}/${date.getUTCDate()}/${date.getUTCFullYear()}\n`;
      } else {
        text += `${field.alias}: ${selectedFeature.getAttribute(field.name)}\n`;
      }
    }
  });
  return text;
};

export const getTemplate = (
  mapScale: number,
  format: any,
  title: string | undefined,
  customElements: any[],
  view: __esri.MapView,
  selectedTemplate: string,
): __esri.PrintTemplate => {
  return new PrintTemplate({
    outScale: mapScale,
    showLabels: true,
    format: format,
    layoutOptions: {
      titleText: title,
      scalebarUnit: 'Feet',
      customTextElements: customElements,
      legendLayers: view.map.allLayers
        .filter((layer) => {
          return layer.type != 'imagery' && layer.id != 'selection-layer';
        })
        .map((layer) => {
          return new LegendLayer({ layerId: layer.id, title: layer.title });
        }) as any,
    },
    layout: selectedTemplate as any,
  });
};

export const exportMap = (
  url: string,
  template: __esri.PrintTemplate,
  view: __esri.MapView,
  oldScale: number,
): Promise<__esri.PrintResponse> => {
  return promiseUtils.create((resolve, reject) => {
    new PrintTask({ url: url })
      .execute(
        new PrintParameters({
          template: template,
          view: view,
        }),
      )
      .then((result: __esri.PrintResponse) => {
        resolve(result);
      })
      .catch((reason) => {
        reject(reason);
      });
    setTimeout(() => {
      view.scale = oldScale;
    }, 1000);
  });
};
