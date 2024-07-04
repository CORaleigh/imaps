import request from '@arcgis/core/request';
import { printTemplates } from './templates';
import TileInfo from '@arcgis/core/layers/support/TileInfo';
import MapView from '@arcgis/core/views/MapView';
import Graphic from '@arcgis/core/Graphic';
import PrintTemplate from '@arcgis/core/rest/support/PrintTemplate';
import LegendLayer from '@arcgis/core/rest/support/LegendLayer';
import * as print from '@arcgis/core/rest/print';
import PrintParameters from '@arcgis/core/rest/support/PrintParameters';
import SpatialReference from '@arcgis/core/geometry/SpatialReference';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import * as projection from '@arcgis/core/geometry/projection';
import Extent from '@arcgis/core/geometry/Extent';
import * as geometryEngine from '@arcgis/core/geometry/geometryEngine';

export type MapScale = {
    scale: string;
    label: string;
  };
export type Layout = {
label: string;
template: string;
size: number;
};
export type Exports = {
    loading: boolean;
    url: string | undefined;
    title: string;
    format: string;
    id: number;
    error: string | undefined;
};


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

  export const getScales = (view: __esri.MapView): MapScale[] => {
    const scales = TileInfo.create()
      .lods.filter((lod: any) => {
        return lod.scale >= 300 && lod.scale < 614400;
      })
      .map((lod: any) => {
        const scale = roundScale(lod.scale);
        return {
          scale: scale.toString(),
          label: `1" = ${(scale / 12).toLocaleString('en')}'`,
        };
      })
      ?.reverse();
    scales.push({ scale: 'custom', label: 'User Defined' } as any);
    return scales;
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

  export const prepareExport = (
    view: MapView,
    printScale: number, 
    selectedLayout: Layout | undefined,
    selectedFormat: string | undefined,
    title: string,
    showLegend: boolean,
    showAttributes: boolean,
    selectedProperty: Graphic | undefined,
    exportUrl: string,
    exports: Exports[],
    setExports: Function,
    selectedTab: string,
    imageWidth: number | undefined,
    imageHeight: number | undefined

  ) => {
    const exportId = exports.length === 0 ? 1 : exports[exports.length - 1].id + 1;
    const exportJob: Exports = { loading: true, url: undefined, title: `${title}.${selectedFormat?.toLowerCase()}`, format: selectedFormat ? selectedFormat : '', id: exportId, error: undefined }
    setExports((prevExports: Exports[]) => [
      ...prevExports,
      exportJob
    ]);
    const template = selectedTab === "layout" ? getTemplateName(
      selectedLayout,
      selectedProperty && showAttributes ? true : false,
      showLegend
    ) : "MAP_ONLY";
    if (selectedLayout && template) {
      const customElements: any[] = getCustomElements(selectedLayout.size, printScale, showAttributes, selectedProperty);

      const printTemplate = getPrintTemplate(view, printScale, selectedFormat, title, template, customElements, selectedTab, imageWidth, imageHeight);
      const graphicsLayer: __esri.GraphicsLayer = view?.map.findLayerById('print-graphic') as __esri.GraphicsLayer;
      if (graphicsLayer) {
        graphicsLayer.visible = false;
      }
      const clusterLayer = view?.map.findLayerById('selection-cluster');
      if (clusterLayer) {
        clusterLayer.visible = false;
      }
  
      setTimeout(async () => {
        try {
          const result = await exportMap(view, exportUrl, printTemplate, selectedFormat);
          setTimeout(() => {
            if (graphicsLayer) {
              graphicsLayer.visible = true;
            }
            if (clusterLayer) {
              clusterLayer.visible = true;
            }            
            
            if (isPrintResponse(result)) {
              setExports((prevExports: Exports[]) => 
                prevExports.map(item => 
                  item.id === exportId ? { ...item, loading: false, url: result.url } : item
                )
              );
            } else {
              setExports((prevExports: Exports[]) => 
            
                prevExports.map(item => 
                  item.id === exportId ? { ...item, loading: false, error: (result as any)?.message } : item
                )
              );
    
            }
          });
        } catch (error: any) {
          console.log(error);
        }
      }, 1000);   
    }
     
  }


  const getTemplateName = (
    selectedLayout: Layout | undefined,
    showAttributes: boolean,
    showLegend: boolean,
  ) => {
    let selectedTemplate = selectedLayout?.template.replace('.', '')

  
    if (showAttributes) {
      selectedTemplate += '_attributes';
    }
    if (showLegend) {
      selectedTemplate += '_legend';
    }
    return selectedTemplate;
  }

  const getPrintTemplate = (
    view: MapView,
    printScale: number,
    selectedFormat: any,
    title: string,
    selectedTemplate: string,
    customElements: any[],
    selectedTab: string,
    imageWidth: number | undefined,
    imageHeight: number | undefined

  ) : PrintTemplate => {
    const legendLayers = view.map.allLayers
    .filter((layer) => {
      return layer.type !== 'imagery' && layer.type !== 'imagery-tile' && layer.id !== 'selection-layer' && layer.type !== 'graphics' && layer.type !== 'vector-tile' && layer.listMode !== 'hide';
    })
    .map((layer) => {
      return new LegendLayer({ layerId: layer.id, title: layer.title });
    }) as any;
    return new PrintTemplate({
      attributionVisible: false,
      outScale: printScale,
      showLabels: true,
      format: selectedFormat,
      scalePreserved: true,
      exportOptions: {
        dpi: 200,
        height: selectedTab === "map" ? imageHeight : undefined,
        width: selectedTab === "map" ? imageWidth : undefined
      },
      layoutOptions: {
        titleText: title,
        scalebarUnit: 'Feet',
        customTextElements: customElements,
        legendLayers: legendLayers,
      },
      layout: selectedTemplate as any,
    });    
  }

  const getCustomElements = (
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


  const exportMap = async (
    view: MapView,
    exportUrl: string,
    template: PrintTemplate,
    selectedFormat: any
  ): Promise<__esri.PrintResponse | unknown | undefined > => {
    try {
      template.format = selectedFormat as any;
      const result = await print.execute(
        exportUrl,
        new PrintParameters({
          template: template,
          view: view,
          outSpatialReference: new SpatialReference({ wkid: 2264 }),
        }),
        {
          timeout: 120000,
          headers: { 'Content-Type': 'application/json;charset=UTF-8' },
        },
      );
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  let mapViewStationary: any = null;

  export const showPrintFrame = (
    view: MapView,
    selectedLayout: Layout,
    useCustomScale: boolean,
    printScale: number,
    showAttributes: boolean,
    showLegend: boolean

  ) => {
    let graphics = view.map.findLayerById('print-graphic') as GraphicsLayer;
    if (!graphics) {
      graphics = new GraphicsLayer({ id: 'print-graphic', listMode: 'hide' });
      view.map.add(graphics);
    }
    graphics.visible = true;
    graphics.removeAll();
    const templateName = getTemplateName(selectedLayout, showAttributes, showLegend)
    
    const printTemplate = printTemplates.results[0].value.find(result => {
      console.log(result.layoutTemplate)
      return result.layoutTemplate === templateName;
    });

    if (printTemplate) {
      addPrintGraphic(view, graphics, printTemplate, printScale);
      mapViewStationary = view.watch('stationary', (stationary) => {
        if (!stationary) {
          graphics.removeAll();
        }
        addPrintGraphic(view, graphics, printTemplate, useCustomScale ? printScale : roundScale(view.scale));
      });      
    }
  }

  const addPrintGraphic = async (view: MapView, graphics: GraphicsLayer, printTemplate: any, printScale: number) => {
    await projection.load();
    const extent = projection.project(view.extent.expand(3), {
      wkid: 2264,
    }) as Extent;      
    const center = extent.center;
  
    const width = printTemplate?.webMapFrameSize[0] * printScale / 12;
    const height = printTemplate?.webMapFrameSize[1] * printScale / 12;
    const xmax = center.x + width / 2;
    const ymax = center.y + height / 2;
    const xmin = center.x - width / 2;
    const ymin = center.y - height / 2;
    const printFrame = new Extent({
      xmax: xmax,
      xmin: xmin,
      ymax: ymax,
      ymin: ymin,
      spatialReference: { wkid: 2264 },
    });
    const geometry = geometryEngine.difference(extent, printFrame);
    graphics.removeAll();
    graphics.add(
      new Graphic({
        symbol: {
          type: 'simple-fill',
          style: 'solid',
          color: [0, 0, 0, 0.25],
          outline: { width: 3, color: [0, 122, 194, 1], style: 'short-dash'},
        } as any,
        geometry: geometry as __esri.Geometry,
      }),
    );
  }


  export const hidePrintFrame =  (view: MapView) => {
    let graphics = view.map.findLayerById('print-graphic') as GraphicsLayer;
    if (graphics) {
      graphics.visible = false;
      graphics.removeAll();
    }
    if (mapViewStationary){
      mapViewStationary.remove();
    }  
  }

  function isPrintResponse(value: any): value is __esri.PrintResponse {
    return typeof value === 'object' && value !== null && 'url' in value;
  }
