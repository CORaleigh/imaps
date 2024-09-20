import MapView from '@arcgis/core/views/MapView';
import SketchViewModel from '@arcgis/core/widgets/Sketch/SketchViewModel';
import MapNotesLayer from '@arcgis/core/layers/MapNotesLayer';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import Color from '@arcgis/core/Color';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
import SimpleLineSymbol from '@arcgis/core/symbols/SimpleLineSymbol';
import TextSymbol from '@arcgis/core/symbols/TextSymbol';
import WebStyleSymbol from '@arcgis/core/symbols/WebStyleSymbol';
import request from '@arcgis/core/request';
import CIMSymbol from '@arcgis/core/symbols/CIMSymbol';
import * as cimSymbolUtils from '@arcgis/core/symbols/support/cimSymbolUtils';
import * as symbolUtils from '@arcgis/core/symbols/support/symbolUtils';
import Graphic from '@arcgis/core/Graphic';
import { SymbolItem } from '../PointSymbols';
let pointLayer: GraphicsLayer;
let polylineLayer: GraphicsLayer;
let polygonLayer: GraphicsLayer;
let textLayer: GraphicsLayer;
let sketchLayer: MapNotesLayer;
let selectedTool: string = '';
let fillSymbol = new SimpleFillSymbol({
  color: [255, 0, 0, 0.5],
  style: 'solid',
  outline: {
    width: 2,
    color: [255, 0, 0, 1],
  },
});
let lineSymbol = new SimpleLineSymbol({
  width: 1,
  color: [255, 0, 0, 1],
  style: 'solid',
  cap: 'round',
  join: 'round',
});
let textSymbol = new TextSymbol({
  color: [255, 0, 0, 1],
  haloColor: [255, 255, 255, 1],
  haloSize: '1px',
  text: '',
  xoffset: 3,
  yoffset: 3,
  font: {
    size: 10,
    family: 'Avenir Next LT Pro',
    style: 'normal',
    weight: 'bold',
  },
});
let pointSymbol: CIMSymbol;
let pointSketchViewModel: SketchViewModel;
let polylineSketchViewModel: SketchViewModel;

let polygonSketchViewModel: SketchViewModel;

let textSketchViewModel: SketchViewModel;
let sketchLayerView: __esri.GraphicsLayerView;


export const initializeSketchViewModel = async (
  view: MapView,
  setActiveSketchTool: (activeSketchTool: string) => void,
  selectedGraphics: Graphic[],
  setSelectedGraphics: (selectedGraphics: Graphic[]) => void,
) => {
  sketchLayer = new MapNotesLayer({
    listMode: 'hide',
    id: 'notes-layer',
  });
  view.map.add(sketchLayer);
  const layerView = await view.whenLayerView(sketchLayer);
  sketchLayerView = layerView as __esri.GraphicsLayerView;
  pointLayer = sketchLayer.pointLayer;
  polylineLayer = sketchLayer.polylineLayer;
  polygonLayer = sketchLayer.polygonLayer;

  textLayer = sketchLayer.textLayer;
  // create a new sketch view model for each different map note type
  // this allows both the creation and modification of each different map note
  pointSketchViewModel = createSketchViewModels(pointLayer, view, false);
  polylineSketchViewModel = createSketchViewModels(polylineLayer, view, false);
  polygonSketchViewModel = createSketchViewModels(polygonLayer, view, false);
  polygonSketchViewModel.activeFillSymbol = fillSymbol;
  (polylineSketchViewModel as any).activeLineSymbol = lineSymbol as any;

  textSketchViewModel = createSketchViewModels(textLayer, view, true);

  const viewModels = [
    pointSketchViewModel,
    polylineSketchViewModel,
    polygonSketchViewModel,
    textSketchViewModel,
  ];
  viewModels.forEach((viewModel) => {
    viewModel?.on('create', (e) => {
      if (e.state === 'cancel' && viewModel.activeTool !== null) {
        setActiveSketchTool('select');
        // if (highlights) {
        //   highlights.remove();
        // }
      }
    });
    viewModel?.on('update', (e) => {
      if (e.state === 'start' || e.state === 'active') {
        setSelectedGraphics([...e.graphics]);
      }
    });
  });
};

const createSketchViewModels = (
  layer: GraphicsLayer,
  view: MapView,
  isText: boolean,
) => {
  const sketchVM = new SketchViewModel({
    view,
    layer,
    updateOnGraphicClick: true,
  });
  sketchVM.on('create', addGraphic);
  return sketchVM;
};

const addGraphic = (e: __esri.SketchViewModelCreateEvent) => {
  if (e.state === 'complete') {
    if (e.graphic.geometry.type === 'polygon') {
      e.graphic.symbol = fillSymbol;
      sketchLayer.polygonLayer.add(e.graphic);
      polygonSketchViewModel.create(e.tool);
    }
    if (e.graphic.geometry.type === 'polyline') {
      e.graphic.symbol = lineSymbol;
      sketchLayer.polylineLayer.add(e.graphic);
      polylineSketchViewModel.create(e.tool);
    }
    if (selectedTool === 'text') {
      e.graphic.symbol = textSymbol;
      sketchLayer.textLayer.add(e.graphic);
      textSketchViewModel.create('point');
    }
    if (selectedTool === 'point') {
      e.graphic.symbol = pointSymbol;
      sketchLayer.pointLayer.add(e.graphic);
      pointSketchViewModel.create('point');
    }
  }
};

export const sketchActivated = () => {
  try {
    setUpdateOnGraphicClick(true);
  } catch (error) {}
};

export const toolSelected = (
  tool: string,
  activeSketchTool: string,
  setActiveSketchTool: (activeSketchTool: string) => void,
) => {
  sketchActivated();
  selectedTool = tool;
  tool === activeSketchTool
    ? setActiveSketchTool('')
    : setActiveSketchTool(tool);
  if (activeSketchTool === '') {
    cancelSketch();
  }
  if (['polygon', 'rectangle', 'circle'].includes(tool)) {
    polygonSketchViewModel.create(tool as any);
  }
  if (['polyline'].includes(tool)) {
    polylineSketchViewModel.create(tool as any);
  }
  if (tool === 'text') {
    polylineSketchViewModel.create('point');
  }
  if (tool === 'point') {
    polylineSketchViewModel.create('point');
  }
};
let updatingPolygonSymbol = false;
export const polygonSymbolUpdated = async (
  fillColor: Color,
  outlineColor: Color,
  width: number,
) => {
  const preview = document.getElementById('polygon-preview');
  if (preview && !updatingPolygonSymbol) {
    fillSymbol = fillSymbol.clone();
    fillSymbol.color = fillColor;
    fillSymbol.outline.color = outlineColor;
    fillSymbol.outline.width = width;
    if (polygonSketchViewModel) {
      polygonSketchViewModel.activeFillSymbol = fillSymbol;
      if (sketchLayer.polygonLayer) {
        updateHighlightedGraphicSymbol(
          sketchLayer.polygonLayer,
          fillSymbol,
          polygonSketchViewModel,
        );
      }
    }
    updatingPolygonSymbol = true;
    preview.innerHTML = '';
    await symbolUtils.renderPreviewHTML(fillSymbol, {
      node: preview as HTMLElement,
      size: 24,
    });
    updatingPolygonSymbol = false;
  }
};

const updateHighlightedGraphicSymbol = (
  layer: GraphicsLayer,
  symbol: __esri.Symbol,
  vm: __esri.SketchViewModel,
) => {
  if (vm.updateGraphics.length) {
    const graphic = vm.updateGraphics.getItemAt(0);
    layer.remove(graphic);
    graphic.symbol = symbol;
    const clone = graphic.clone();
    layer.add(clone);

    setTimeout(() => {
      vm.cancel();
      vm.update(clone);
    });
  }
};

export const pointSymbolUpdated = async (
  symbol: SymbolItem,
  color: Color,
  size: number,
) => {
  const ref = await request(`${symbol.url}${symbol.cimRef.replace('.', '')}`);
  pointSymbol = new CIMSymbol({
    data: {
      type: 'CIMSymbolReference',
      symbol: ref?.data,
    },
  });
  cimSymbolUtils.applyCIMSymbolColor(pointSymbol, color);
  cimSymbolUtils.scaleCIMSymbolTo(pointSymbol, size);
  if (sketchLayer.pointLayer) {
    updateHighlightedGraphicSymbol(
      sketchLayer.pointLayer,
      pointSymbol,
      pointSketchViewModel,
    );
  }
  pointSketchViewModel.pointSymbol = pointSymbol;
  const preview = document.getElementById('icon-preview');
  if (preview) {
    preview.innerHTML = '';
    symbolUtils.renderPreviewHTML(pointSymbol, {
      node: preview as HTMLElement,
      size: size,
    });
  }
};

export const polylineSymbolUpdated = (lineColor: Color, width: number) => {
  lineSymbol = lineSymbol.clone();
  lineSymbol.color = lineColor;
  lineSymbol.width = width;
  if (polylineSketchViewModel) {
    polylineSketchViewModel.polylineSymbol = lineSymbol as any;

    polylineSketchViewModel.updateGraphics.forEach((graphic) => {
      graphic.symbol = lineSymbol;
    });
    if (sketchLayer.polylineLayer) {
      updateHighlightedGraphicSymbol(
        sketchLayer.polylineLayer,
        lineSymbol,
        polylineSketchViewModel,
      );
    }
  }

  const preview = document.getElementById('line-preview');
  if (preview) {
    preview.innerHTML = '';
    symbolUtils.renderPreviewHTML(lineSymbol, {
      node: preview as HTMLElement,
      size: width,
    });
  }
};

export const textSymbolUpdated = (
  fontSize: number,
  fontColor: Color,
  haloSize: number,
  haloColor: Color,
  showHalo: boolean,
  textContent: string,
) => {
  textSymbol = textSymbol.clone();
  textSymbol.color = fontColor;
  textSymbol.font.size = fontSize;
  textSymbol.haloColor = haloColor;
  textSymbol.haloSize = showHalo ? haloSize : 0;
  textSymbol.text = textContent;
  textSketchViewModel.pointSymbol = textSymbol as any;
  if (sketchLayer.textLayer) {
    updateHighlightedGraphicSymbol(
      sketchLayer.textLayer,
      textSymbol,
      textSketchViewModel,
    );
  }
};

export const cancelSketch = () => {
  setUpdateOnGraphicClick(false);
  cancelAllViewModels();
};

export const clearSketch = (
  setActiveSketchTool: (activeSketchTool: string) => void,
  setSelectedGraphics: (selectedGraphics: Graphic[]) => void,
) => {
  setActiveSketchTool('');
  setSelectedGraphics([...[], ...[]]);
  cancelAllViewModels();
  removeAllGraphics();
};

export const getSymbols = (ids: string[], url: string): Promise<SymbolItem[]> => {
  return new Promise((resolve, reject) => {
    const promises: Promise<__esri.RequestResponse>[] = [];
    ids.forEach((id) => {
      const symbol: WebStyleSymbol = new WebStyleSymbol({
        styleUrl: `${url}/${id}/data`,
        name: 'Pins',
      });
      promises.push(request(symbol.styleUrl));
    });
    if (promises.length) {
    }
    const items: SymbolItem[] = [];

    Promise.all(promises).then((results: __esri.RequestResponse[]) => {
      console.log(results);
      results.forEach((result: __esri.RequestResponse) => {
        
        result.data.items.forEach((item: SymbolItem) => {
          if (result.url) {
            item.url = result.url.replace('data', '');
          }
          items.push(item);
        });
      });
      resolve(items);
    });
  });
};

const cancelAllViewModels = () => {
  [
    pointSketchViewModel,
    polylineSketchViewModel,
    polygonSketchViewModel,
    textSketchViewModel,
  ].forEach((vm) => {
    vm.cancel();
  });
};

const removeAllGraphics = () => {
  [
    sketchLayer.polygonLayer,
    sketchLayer.pointLayer,
    sketchLayer.polylineLayer,
    sketchLayer.textLayer,
  ].forEach((layer) => {
    layer.graphics.removeAll();
  });
};

const removeGraphics = (selectedGraphics: Graphic[]) => {
  [
    sketchLayer.polygonLayer,
    sketchLayer.pointLayer,
    sketchLayer.polylineLayer,
    sketchLayer.textLayer,
  ].forEach((layer) => {
    layer.graphics.removeAll();
  });
};

const setUpdateOnGraphicClick = (update: boolean) => {
  [
    pointSketchViewModel,
    polylineSketchViewModel,
    polygonSketchViewModel,
    textSketchViewModel,
  ].forEach((vm) => {
    vm.updateOnGraphicClick = update;
  });
};

export const stopSketching = () => {
  cancelAllViewModels();
};

export const deleteSelectedGraphics = (
  selectedGraphics: Graphic[],
  setSelectedGraphics: (updater: (current: Graphic[]) => Graphic[]) => void,
) => {
  removeGraphics(selectedGraphics);
  requestAnimationFrame(() => {
    setSelectedGraphics((current: Graphic[]) => {
      return [];
    });
  });
};
