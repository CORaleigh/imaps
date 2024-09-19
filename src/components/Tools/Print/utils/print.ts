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

export interface Job {
  title?: string; // Title is a string
  loading: boolean; // Loading is a boolean
  submitted: string; // Submitted is a string (timestamp in this case)
  href: string | null; // href can be a string or null
}

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
    console.log(result);
    const parameter = result.data.parameters.find(
      (parameter: any) => parameter.name === 'Format',
    );
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

const getFileExtension = (format: string) => {
  let extension = format;
  switch (extension) {
    case 'PNG32':
      extension = 'png';
      break;
    case 'PNG8':
      extension = 'png';
    case 'TIFF':
      extension = 'tiff';
  }

  extension = extension.toLowerCase();
  return extension;
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
  setExports: (updater: (prevExports: Exports[]) => Exports[]) => void,
  selectedTab: string,
  imageWidth: number | undefined,
  imageHeight: number | undefined,
) => {
  console.log(selectedFormat);
  const exportId =
    exports.length === 0 ? 1 : exports[exports.length - 1].id + 1;
  const exportJob: Exports = {
    loading: true,
    url: undefined,
    title: `${title}.${getFileExtension(selectedFormat ? selectedFormat : '')}`,
    format: selectedFormat ? selectedFormat : '',
    id: exportId,
    error: undefined,
  };
  setExports((prevExports: Exports[]) => [...prevExports, exportJob]);
  const template =
    selectedTab === 'layout'
      ? getTemplateName(
          selectedLayout,
          selectedProperty && showAttributes ? true : false,
          showLegend,
        )
      : 'MAP_ONLY';
  if (selectedLayout && template) {
    const customElements: any[] = getCustomElements(
      selectedLayout.size,
      printScale,
      showAttributes,
      selectedProperty,
    );

    const printTemplate = getPrintTemplate(
      view,
      printScale,
      selectedFormat,
      title,
      template,
      customElements,
      selectedTab,
      imageWidth,
      imageHeight,
    );
    const graphicsLayer: __esri.GraphicsLayer = view?.map.findLayerById(
      'print-graphic',
    ) as __esri.GraphicsLayer;
    if (graphicsLayer) {
      graphicsLayer.visible = false;
    }
    const clusterLayer = view?.map.findLayerById('selection-cluster');
    if (clusterLayer) {
      clusterLayer.visible = false;
    }

    setTimeout(async () => {
      try {
        const result = await exportMap(
          view,
          exportUrl,
          printTemplate,
          selectedFormat,
        );
        setTimeout(() => {
          if (graphicsLayer) {
            graphicsLayer.visible = true;
          }
          if (clusterLayer) {
            clusterLayer.visible = true;
          }

          if (isPrintResponse(result)) {
            setExports((prevExports: Exports[]) =>
              prevExports.map((item) =>
                item.id === exportId
                  ? { ...item, loading: false, url: result.url }
                  : item,
              ),
            );
          } else {
            setExports((prevExports: Exports[]) =>
              prevExports.map((item) =>
                item.id === exportId
                  ? { ...item, loading: false, error: (result as any)?.message }
                  : item,
              ),
            );
          }
        });
      } catch (error: any) {
        console.log(error);
      }
    }, 1000);
  }
};

const getTemplateName = (
  selectedLayout: Layout | undefined,
  showAttributes: boolean,
  showLegend: boolean,
) => {
  let selectedTemplate = selectedLayout?.template.replace('.', '');

  if (showAttributes) {
    selectedTemplate += '_attributes';
  }
  if (showLegend) {
    selectedTemplate += '_legend';
  }
  return selectedTemplate;
};

const getPrintTemplate = (
  view: MapView,
  printScale: number,
  selectedFormat: any,
  title: string,
  selectedTemplate: string,
  customElements: any[],
  selectedTab: string,
  imageWidth: number | undefined,
  imageHeight: number | undefined,
): PrintTemplate => {
  const legendLayers = view.map.allLayers
    .filter((layer) => {
      return (
        layer.type !== 'imagery' &&
        layer.type !== 'imagery-tile' &&
        layer.id !== 'selection-layer' &&
        layer.type !== 'graphics' &&
        layer.type !== 'vector-tile' &&
        layer.listMode !== 'hide'
      );
    })
    .map((layer) => {
      return new LegendLayer({ layerId: layer.id, title: layer.title });
    }) as any;
  return new PrintTemplate({
    attributionVisible: false,
    outScale: selectedTab === 'layout' ? printScale : view.scale,
    showLabels: true,
    format: selectedFormat,
    scalePreserved: true,
    exportOptions: {
      dpi: 200, //selectedTab === "layout" ? 200 : 96,
      height: selectedTab === 'map' ? imageHeight : undefined,
      width: selectedTab === 'map' ? imageWidth : undefined,
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
    customElements.push({
      '2xScale': ((mapScale / 12) * 2).toLocaleString() + ' ft',
    });
  } else if (size < 36) {
    customElements.push({ '2xScale': ((mapScale / 12) * 2).toLocaleString() });
    customElements.push({
      '4xScale': ((mapScale / 12) * 4).toLocaleString() + ' ft',
    });
  } else {
    customElements.push({ '2xScale': ((mapScale / 12) * 2).toLocaleString() });
    customElements.push({ '4xScale': ((mapScale / 12) * 4).toLocaleString() });
    customElements.push({
      '6xScale': ((mapScale / 12) * 6).toLocaleString() + ' ft',
    });
  }
  if (showAttributes) {
    const text = formatAttributes(selectedFeature as __esri.Graphic);
    customElements.push({ PropertyInfo: text });
  }
  return customElements;
};

const formatAttributes = (selectedFeature: __esri.Graphic): string => {
  let text = '';
  (
    selectedFeature.layer as __esri.FeatureLayer
  ).popupTemplate.fieldInfos.forEach((field) => {
    if (
      !['OBJECTID', 'PARCEL_PK', 'PARCEL_STATUS'].includes(field.fieldName) &&
      selectedFeature.getAttribute(field.fieldName)
    ) {
      if (selectedFeature.getAttribute(field.fieldName) !== null) {
        if (field.fieldName.includes('DATE')) {
          const date = new Date(selectedFeature.getAttribute(field.fieldName));
          text += `${field.label}: ${
            date.getUTCMonth() + 1
          }/${date.getUTCDate()}/${date.getUTCFullYear()}\n`;
        } else if (
          field.fieldName.includes('PRICE') ||
          field.fieldName.includes('VAL')
        ) {
          text += `${field.label}: $${selectedFeature.getAttribute(
            field.fieldName,
          )}\n`;
        } else {
          text += `${field.label}: ${selectedFeature.getAttribute(
            field.fieldName,
          )}\n`;
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
  selectedFormat: any,
): Promise<__esri.PrintResponse | unknown | undefined> => {
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
  showLegend: boolean,
  imageHeight: number,
  imageWidth: number,
  selectedTab: string,
) => {
  let graphics = view.map.findLayerById('print-graphic') as GraphicsLayer;
  if (!graphics) {
    graphics = new GraphicsLayer({ id: 'print-graphic', listMode: 'hide' });
    view.map.add(graphics);
  }
  graphics.visible = true;
  graphics.removeAll();
  const templateName = getTemplateName(
    selectedLayout,
    showAttributes,
    showLegend,
  );

  const printTemplate = printTemplates.results[0].value.find((result) => {
    console.log(result.layoutTemplate);
    return result.layoutTemplate === templateName;
  });

  if (printTemplate) {
    addPrintGraphic(
      view,
      graphics,
      printTemplate,
      printScale,
      imageHeight,
      imageWidth,
      selectedTab,
    );
    mapViewStationary = view.watch('stationary', (stationary) => {
      if (!stationary) {
        graphics.removeAll();
      } else {
        addPrintGraphic(
          view,
          graphics,
          printTemplate,
          useCustomScale ? printScale : roundScale(view.scale),
          imageHeight,
          imageWidth,
          selectedTab,
        );
      }
    });
  }
};

export function updatePrintFrame(
  view: MapView,
  width: number,
  height: number,
  dpi: number,
  mapOnly: boolean,
  scale: number,
) {
  const adjustmentFactor = mapOnly ? 1.19 : 1.23; // Factor to adjust for scaling

  // Convert print dimensions (pixels) to inches
  const printWidthInches = mapOnly ? width / dpi : width;
  const printHeightInches = mapOnly ? height / dpi : height;

  // Convert scale to map units per inch
  const mapUnitsPerInch = scale / 39.3701; // 1 meter ≈ 39.37 inches

  // Calculate width and height in map units
  const widthMapUnits = printWidthInches * mapUnitsPerInch * adjustmentFactor;
  const heightMapUnits = printHeightInches * mapUnitsPerInch * adjustmentFactor;

  // Calculate the frame size in pixels based on the view's resolution
  const resolution = view.resolution; // Map units per pixel
  const frameWidthPixels = widthMapUnits / resolution;
  const frameHeightPixels = heightMapUnits / resolution;

  // Calculate the center of the map view in pixels
  const centerX = view.width / 2;
  const centerY = view.height / 2;

  // Calculate the left, right, top, and bottom positions of the rectangle
  const left = centerX - frameWidthPixels / 2;
  const top = centerY - frameHeightPixels / 2;
  const right = centerX + frameWidthPixels / 2;
  const bottom = centerY + frameHeightPixels / 2;

  // Create or update the SVG element
  let svg = document.getElementById('printFrameSvg') as SVGElement | null;
  if (!svg) {
    svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.id = 'printFrameSvg';
    svg.style.position = 'absolute';
    svg.style.left = '0';
    svg.style.top = '0';
    svg.style.width = '100%';
    svg.style.height = '100%';
    view.container.querySelector('.esri-overlay-surface')?.appendChild(svg);
  }

  // Clear previous children
  while (svg.firstChild) {
    svg.removeChild(svg.firstChild);
  }

  // Create the mask for the hollow effect
  let defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');

  const mask = document.createElementNS('http://www.w3.org/2000/svg', 'mask');
  mask.id = 'printMask';

  // Outer rectangle (entire map area) filled with white (visible area)
  const outerRect = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'rect',
  );
  outerRect.setAttribute('x', '0');
  outerRect.setAttribute('y', '0');
  outerRect.setAttribute('width', '100%');
  outerRect.setAttribute('height', '100%');
  outerRect.setAttribute('fill', 'white'); // The outer area remains visible

  // Inner rectangle (print frame area) filled with black (cut-out area)
  const innerRect = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'rect',
  );
  innerRect.setAttribute('x', left.toString());
  innerRect.setAttribute('y', top.toString());
  innerRect.setAttribute('width', frameWidthPixels.toString());
  innerRect.setAttribute('height', frameHeightPixels.toString());
  innerRect.setAttribute('fill', 'black'); // The inner area will be cut out

  // Append rectangles to the mask
  mask.appendChild(outerRect);
  mask.appendChild(innerRect);

  // Append mask to defs
  defs.appendChild(mask);
  svg.appendChild(defs);

  // Create the gray background, using the mask to hollow out the print area
  const grayRect = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'rect',
  );
  grayRect.setAttribute('x', '0');
  grayRect.setAttribute('y', '0');
  grayRect.setAttribute('width', '100%');
  grayRect.setAttribute('height', '100%');
  grayRect.setAttribute('fill', 'rgba(0,0,0,0.5)'); // Gray background
  grayRect.setAttribute('mask', 'url(#printMask)'); // Apply the mask to cut out the hollow area
  svg.appendChild(grayRect);

  // Add dashed blue border for the frame
  const borderRect = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'rect',
  );
  borderRect.setAttribute('x', left.toString());
  borderRect.setAttribute('y', top.toString());
  borderRect.setAttribute('width', frameWidthPixels.toString());
  borderRect.setAttribute('height', frameHeightPixels.toString());
  borderRect.setAttribute('fill', 'none');
  borderRect.setAttribute('stroke', 'rgb(30,144,255)');
  borderRect.setAttribute('stroke-width', '2');
  borderRect.setAttribute('stroke-dasharray', '5');

  // Append the border rect
  svg.appendChild(borderRect);
}

const addPrintGraphic = async (
  view: MapView,
  graphics: GraphicsLayer,
  printTemplate: any,
  printScale: number,
  imageHeight: number,
  imageWidth: number,
  selectedTab: string,
) => {
  await projection.load();
  const extent = projection.project(view.extent, {
    wkid: 2264,
  }) as Extent;
  const center = extent.center;
  let xmax, ymax, xmin, ymin, printFrame, geometry;
  if (selectedTab === 'layout') {
    const width = printTemplate?.webMapFrameSize[0];
    const height = printTemplate?.webMapFrameSize[1];
    updatePrintFrame(view, width, height, 200, false, printScale);
  } else if (selectedTab === 'map') {
    updatePrintFrame(view, imageWidth, imageHeight, 200, true, printScale);
  }
};

export const hidePrintFrame = (view: MapView) => {
  const svg = document.getElementById('printFrameSvg');
  if (svg) {
    svg.remove();
  }
};

function isPrintResponse(value: any): value is __esri.PrintResponse {
  return typeof value === 'object' && value !== null && 'url' in value;
}
