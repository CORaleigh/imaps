import request from '@arcgis/core/request';
import SpatialReference from '@arcgis/core/geometry/SpatialReference';
import * as print from '@arcgis/core/rest/print';
import PrintParameters from '@arcgis/core/rest/support/PrintParameters';
import PrintTemplate from '@arcgis/core/rest/support/PrintTemplate';

import TileInfo from '@arcgis/core/layers/support/TileInfo';
import Graphic from '@arcgis/core/Graphic';
import { printTemplates } from './templates';
import MapView from '@arcgis/core/views/MapView';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import Extent from '@arcgis/core/geometry/Extent';
import * as projection from '@arcgis/core/geometry/projection';
import LegendLayer from "@arcgis/core/rest/support/LegendLayer.js";


type MapScale = {
  scale: number;
  label: string;
};
type Layout = {
  label: string;
  template: string;
  size: number;
};
export const getFormats = async (url: string): Promise<string[]> => {
  try {
    const result = await request(url, { query: { f: 'json' } });
    const parameter = result.data.parameters.find((parameter: any) => parameter.name === 'Format');
    return parameter?.choiceList;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const roundScale = (mapScale: number): number => {
  debugger
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
  const scales = TileInfo.create()
    .lods.filter((lod: any) => {
      return lod.scale >= 300 && lod.scale < 614400;
    })
    .map((lod: any) => {
      const scale = roundScale(lod.scale);
      return {
        scale: scale,
        label: `1" = ${(scale / 12).toLocaleString('en')}'`,
      };
    })
    ?.reverse();
  scales.push({ scale: 'custom', label: 'User Defined' } as any);
  return scales;
};

export const getPrintScale = (
  scaleType: string,
  currentScale: number,
  customScale: string | number,
  userScale: number | undefined,
): number => {
  let mapScale: number = scaleType === 'current' ? roundScale(currentScale as number) : customScale as number;
  if (customScale === 'custom' && userScale) {
    mapScale = userScale * 12;
  }
  return mapScale;
}

export const getLayouts = async (): Promise<Layout[]> => {
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
  return layouts;
};
export const getTemplateName = (
  selectedLayout: any,
  showAttributes: boolean | undefined,
  showLegend: boolean | undefined,
) => {
  //const graphics = (props.view as __esri.MapView).map.findLayerById('print-graphic') as __esri.GraphicsLayer;
  //graphics.visible = false;
  let selectedTemplate = selectedLayout.template
    ? selectedLayout.template.replace('.', '')
    : JSON.parse(selectedLayout).template.replace('.', '');

  if (showAttributes) {
    selectedTemplate += '_attributes';
  }
  if (showLegend) {
    selectedTemplate += '_legend';
  }
  return selectedTemplate;
}

export const getPrintTemplate = (
  mapScale: number,
  format: any,
  title: string | undefined,
  customElements: any[],
  view: __esri.MapView,
  selectedTemplate: string,
): __esri.PrintTemplate => {
  const legendLayers = view.map.allLayers
  .filter((layer) => {
    return layer.type !== 'imagery' && layer.type !== 'imagery-tile' && layer.id !== 'selection-layer' && layer.type !== 'graphics' && layer.type !== 'vector-tile';
  })
  .map((layer) => {
    return new LegendLayer({ layerId: layer.id, title: layer.title });
  }) as any;
  return new PrintTemplate({
    attributionVisible: false,
    outScale: mapScale,
    showLabels: true,
    format: format,
    scalePreserved: true,
    exportOptions: {
      dpi: 200,
    },
    layoutOptions: {
      titleText: title,
      scalebarUnit: 'Feet',
      customTextElements: customElements,
      legendLayers: legendLayers,
    },
    layout: selectedTemplate as any,
  });
};

const formatAttributes = (selectedFeature: __esri.Graphic): string => {
  let text = '';
  (selectedFeature.layer as __esri.FeatureLayer).popupTemplate.fieldInfos.forEach((field) => {
    if (
      !['OBJECTID', 'PARCEL_PK', 'PARCEL_STATUS'].includes(field.fieldName) &&
      selectedFeature.getAttribute(field.fieldName)
    ) {
      if (selectedFeature.getAttribute(field.fieldName) !== null) {
        if (field.fieldName.includes('DATE')) {
          const date = new Date(selectedFeature.getAttribute(field.fieldName));
          text += `${field.label}: ${date.getUTCMonth() + 1}/${date.getUTCDate()}/${date.getUTCFullYear()}\n`;
        } else if (field.fieldName.includes('PRICE') || field.fieldName.includes('VAL')) {
          text += `${field.label}: $${selectedFeature.getAttribute(field.fieldName)}\n`;
        } else {
          text += `${field.label}: ${selectedFeature.getAttribute(field.fieldName)}\n`;
        }
      }
    }
  });
  return text;
};

export const getCustomElements = (
  size: number,
  mapScale: number,
  showAttributes: boolean | undefined,
  selectedFeature: Graphic | undefined,
): any[] => {
  const customElements = [];
  customElements.push({ Scale: (mapScale / 12).toLocaleString() });
  if (size < 24) {
    customElements.push({ HalfScale: (mapScale / 12 / 2).toLocaleString() });
    customElements.push({ '2xScale': ((mapScale / 12) * 2).toLocaleString() + ' ft' });
  } else if (size < 36) {
    customElements.push({ '2xScale': ((mapScale / 12) * 2).toLocaleString() });
    customElements.push({ '4xScale': ((mapScale / 12) * 4).toLocaleString() + ' ft' });
  } else {
    customElements.push({ '2xScale': ((mapScale / 12) * 2).toLocaleString() });
    customElements.push({ '4xScale': ((mapScale / 12) * 4).toLocaleString() });
    customElements.push({ '6xScale': ((mapScale / 12) * 6).toLocaleString() + ' ft' });
  }
  if (showAttributes) {
    const text = formatAttributes(selectedFeature as __esri.Graphic);
    customElements.push({ PropertyInfo: text });
  }
  return customElements;
};

export const exportClicked = (
  view: MapView,
  exportUrl: string,
  scaleType: string,
  customScale: string,
  userDefined: any,
  selectedLayout: any,
  selectedFormat: any,
  selectedProperty: __esri.Graphic | undefined,
  title: string | undefined,
  showAttributes: boolean | undefined,
  showLegend: boolean | undefined,
  jobRef: any,
  jobs: any[],
  setJobs: Function,
) => {
  if (view) {
    const scale: number = getPrintScale(
      scaleType,
      view?.scale,
      customScale,
      userDefined ? parseInt(userDefined) : undefined,
    );
    console.log(scale);
    const graphicsLayer: __esri.GraphicsLayer = view?.map.findLayerById('print-graphic') as __esri.GraphicsLayer;
    if (graphicsLayer) {
      graphicsLayer.visible = false;
    }
    const clusterLayer = view?.map.findLayerById('selection-cluster');
    if (clusterLayer) {
      clusterLayer.visible = false;
    }
    
    const customElements: any[] = getCustomElements(selectedLayout.size, scale, showAttributes, selectedProperty);
    const template = getTemplateName(selectedLayout, showAttributes, showLegend);

    const printTemplate = getPrintTemplate(scale, selectedFormat, title, customElements, view, template);
    const job = {
      title: title,
      loading: true,
      submitted: new Date().getTime().toString(),
      href: null,
    };
    setJobs([...jobs, job]);
    jobRef.current = [...jobRef.current, job];
    const oldScale = view.scale;
    // if (printTemplate.outScale !== view.scale) {
    //   view.scale = printTemplate.outScale;
    // }
    setTimeout(async () => {
      try {
        const result = await exportMap(exportUrl, printTemplate, view, oldScale, selectedFormat as string);
        setTimeout(() => {
          //graphics.visible = true;
          if (graphicsLayer) {
            graphicsLayer.visible = true;
          }
          if (clusterLayer) {
            clusterLayer.visible = true;
          }          
          const index = jobRef.current.indexOf(job);
          jobRef.current[index] = {
            ...jobRef.current[index],
            ...{ url: result?.url, loading: false },
          };
          setJobs([...jobRef.current]);
        });
      } catch (error) {
        console.log(error);
        //graphics.visible = true;
        if (graphicsLayer) {
          graphicsLayer.visible = true;
        }
        if (clusterLayer) {
          clusterLayer.visible = true;
        }
                
        const index = jobRef.current.indexOf(job);
        jobRef.current[index] = {
          ...jobRef.current[index],
          ...{ error: true, loading: false },
        };
        setJobs([...jobRef.current]);
      }
    }, 1000);
  }
};

const exportMap = async (
  url: string,
  template: PrintTemplate,
  view: __esri.MapView,
  oldScale: number,
  format: string,
): Promise<__esri.PrintResponse | undefined> => {
  try {
    console.log(JSON.stringify(view.map));
    template.format = format as any;
    const result = await print.execute(
      url,
      new PrintParameters({
        template: template,
        view: view,
        outSpatialReference: new SpatialReference({ wkid: 3632 }),
      }),
      {
        timeout: 120000,
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      },
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};
let mapViewStationary: any = null;
export const showFrame = (
  show: boolean,
  view: MapView,
  selectedLayout: any,
  scaleType: string,
  customScaleSelect: any,
) => {
  let graphics = view.map.findLayerById('print-graphic') as GraphicsLayer;
  if (!graphics) {
    graphics = new GraphicsLayer({ id: 'print-graphic', listMode: 'hide' });
    view.map.add(graphics);
  }
  graphics.removeAll();
  let customScale: any = null;
  // if (customScaleSelect.current) {
  //   customScale = customScaleSelect.current.value;
  // }
  if (show) {
    addPrintGraphic(graphics, view, selectedLayout, scaleType, customScale);

    mapViewStationary = view.watch('stationary', (stationary) => {
      graphics.removeAll();
      // if (customScaleSelect.current) {
      //   customScale = customScaleSelect.current.value;
      // }
      addPrintGraphic(graphics, view, selectedLayout, scaleType, customScale);
    });
  } else {
    if (mapViewStationary) {
      mapViewStationary.remove();
    }
  }
};

const addPrintGraphic = (
  graphics: GraphicsLayer,
  view: MapView,
  selectedLayout: any,
  scaleType: string,
  customScale: any,
) => {
  setTimeout(async () => {
    await projection.load();
    const center = projection.project(view.extent.center, {
      wkid: 2264,
    }) as __esri.Point;
    const layout = selectedLayout.template ? selectedLayout : JSON.parse(selectedLayout);
    const selectedTemplate = layout.template.replace('.', '');
    const template = printTemplates.results[0].value.filter((value) => {
      return value.layoutTemplate === selectedTemplate;
    });
    //        let mapScale = (props.view as __esri.MapView).scale / 12;

    let mapScale = scaleType === 'current' ? roundScale(view.scale) : parseInt(customScale);
    mapScale = mapScale / 12;
    const width = template[0]?.webMapFrameSize[0] * mapScale;
    const height = template[0]?.webMapFrameSize[1] * mapScale;
    const xmax = center.x + width / 2;
    const ymax = center.y + height / 2;
    const xmin = center.x - width / 2;
    const ymin = center.y - height / 2;
    graphics.removeAll();

    graphics.add(
      new Graphic({
        symbol: {
          type: 'simple-fill',
          style: 'cross',
          outline: { width: 2, color: [149, 149, 149, 1] },
        } as any,
        geometry: new Extent({
          xmax: xmax,
          xmin: xmin,
          ymax: ymax,
          ymin: ymin,
          spatialReference: { wkid: 2264 },
        }),
      }),
    );
  });
};
