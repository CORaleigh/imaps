import MapView from "@arcgis/core/views/MapView";
import SketchViewModel from "@arcgis/core/widgets/Sketch/SketchViewModel";
import MapNotesLayer from "@arcgis/core/layers/MapNotesLayer";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Color from "@arcgis/core/Color";
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol";
import TextSymbol from "@arcgis/core/symbols/TextSymbol";
import WebStyleSymbol from "@arcgis/core/symbols/WebStyleSymbol";
import request from "@arcgis/core/request";
import CIMSymbol from "@arcgis/core/symbols/CIMSymbol";
import * as cimSymbolUtils from "@arcgis/core/symbols/support/cimSymbolUtils";
import * as symbolUtils from "@arcgis/core/symbols/support/symbolUtils";
import Graphic from "@arcgis/core/Graphic";
let pointLayer: GraphicsLayer;
let polylineLayer: GraphicsLayer;
let polygonLayer: GraphicsLayer;
let textLayer: GraphicsLayer;
let sketchLayer: MapNotesLayer;
let selectedTool: string = "";
let fillSymbol = new SimpleFillSymbol({
  color: [255, 0, 0, 0.5],
  style: "solid",
  outline: {
    width: 2,
    color: [255, 0, 0, 1],
  },
});
let lineSymbol = new SimpleLineSymbol({
  width: 1,
  color: [255, 0, 0, 1],
  style: "solid",
  cap: "round",
  join: "round",
});
let textSymbol = new TextSymbol({
  color: [255, 0, 0, 1],
  haloColor: [255, 255, 255, 1],
  haloSize: "1px",
  text: "",
  xoffset: 3,
  yoffset: 3,
  font: {
    // autocasts as new Font()
    size: 10,
    family: "Aerial",
    weight: "bold",
  },
});
let pointSymbol: CIMSymbol;
let pointSketchViewModel: SketchViewModel;
let polylineSketchViewModel: SketchViewModel;

let polygonSketchViewModel: SketchViewModel;

let textSketchViewModel: SketchViewModel;
let sketchLayerView: __esri.GraphicsLayerView;
// let highlights: any;
// let highlightedGraphic: Graphic;

export function initializeSketchViewModel(
  view: MapView,
  setActiveSketchTool: Function,
  selectedGraphics: Graphic[],
  setSelectedGraphics: Function
) {
  sketchLayer = new MapNotesLayer({
    listMode: "hide",
    id: "notes-layer",
  });
  view.map.add(sketchLayer);
  view.whenLayerView(sketchLayer).then((layerView) => {
    sketchLayerView = layerView as __esri.GraphicsLayerView;
  });
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
    viewModel?.on("create", (e) => {
      if (e.state === "cancel" && viewModel.activeTool !== null) {
        setActiveSketchTool("select");
        // if (highlights) {
        //   highlights.remove();
        // }
      }
    });
    viewModel?.on("update", (e) => {
      if (e.state === "start" || e.state === "active") {
        setSelectedGraphics([...e.graphics]);
      }
    });
  });
}

function createSketchViewModels(
  layer: GraphicsLayer,
  view: MapView,
  isText: boolean
) {
  const sketchVM = new SketchViewModel({
    view,
    layer,
    updateOnGraphicClick: true,
  });
  sketchVM.on("create", addGraphic);
  //view.highlightOptions = {fillOpacity: 0, color: '#00ffff', haloColor: '#00ffff', haloOpacity: 1} as any;
  if (!isText) {
    // sketchVM.on("update", updateMapNotes);
  }
  return sketchVM;
}

function addGraphic(e: any) {
  if (e.state === "complete") {
    if (e.graphic.geometry.type === "polygon") {
      e.graphic.symbol = fillSymbol;
      sketchLayer.polygonLayer.add(e.graphic);
      //   setTimeout(() => polygonSketchViewModel.updateGraphics.add(e.graphic));

      polygonSketchViewModel.create(e.tool);
      // polygonSketchViewModel.update(e.graphic, {});
    }
    if (e.graphic.geometry.type === "polyline") {
      e.graphic.symbol = lineSymbol;
      sketchLayer.polylineLayer.add(e.graphic);
      polylineSketchViewModel.create(e.tool);
      //polylineSketchViewModel.update(e.graphic, {});
    }
    if (selectedTool === "text") {
      e.graphic.symbol = textSymbol;
      sketchLayer.textLayer.add(e.graphic);
      textSketchViewModel.create("point");
      //textSketchViewModel.update(e.graphic, {});
    }
    if (selectedTool === "point") {
      e.graphic.symbol = pointSymbol;
      sketchLayer.pointLayer.add(e.graphic);
      pointSketchViewModel.create("point");
      // pointSketchViewModel.update(e.graphic, {});
    }
    // if (highlights) {
    //   highlights.remove();
    // }
    // highlights = sketchLayerView.highlight(e.graphic);

    // highlightedGraphic = e.graphic;
  }
}

export function sketchActivated() {
  pointSketchViewModel.updateOnGraphicClick = true;
  polygonSketchViewModel.updateOnGraphicClick = true;
  polylineSketchViewModel.updateOnGraphicClick = true;
  textSketchViewModel.updateOnGraphicClick = true;
}

export function toolSelected(
  tool: string,
  activeSketchTool: string,
  setActiveSketchTool: Function
) {
  sketchActivated();
  selectedTool = tool;
  tool === activeSketchTool
    ? setActiveSketchTool("")
    : setActiveSketchTool(tool);
  if (activeSketchTool === "") {
    cancelSketch();
  }
  if (["polygon", "rectangle", "circle"].includes(tool)) {
    polygonSketchViewModel.create(tool as any);
  }
  if (["polyline"].includes(tool)) {
    polylineSketchViewModel.create(tool as any);
  }
  if (tool === "text") {
    polylineSketchViewModel.create("point");
  }
  if (tool === "point") {
    polylineSketchViewModel.create("point");
  }
  //if (tool === "select") {
  // if(highlights) {
  //   highlights.remove();
  // }
  // }
}
let updatingPolygonSymbol = false;
export function polygonSymbolUpdated(
  fillColor: Color,
  outlineColor: Color,
  width: number
) {
  const preview = document.getElementById("polygon-preview");
  if (preview && !updatingPolygonSymbol) {
    fillSymbol.color = fillColor;
    fillSymbol.outline.color = outlineColor;
    fillSymbol.outline.width = width;
    if (polygonSketchViewModel) {
      polygonSketchViewModel.activeFillSymbol = fillSymbol;
      if (sketchLayer.polygonLayer) {
        updateHighlightedGraphicSymbol(
          sketchLayer.polygonLayer,
          fillSymbol,
          polygonSketchViewModel
        );
      }
    }
    updatingPolygonSymbol = true;
    preview.innerHTML = "";
    symbolUtils
      .renderPreviewHTML(fillSymbol, {
        node: preview as HTMLElement,
        size: 24,
      })
      .then(() => (updatingPolygonSymbol = false));
  }
}

function updateHighlightedGraphicSymbol(
  layer: GraphicsLayer,
  symbol: __esri.Symbol,
  vm: __esri.SketchViewModel
) {
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
  // vm.updateGraphics.forEach(highlightedGraphic => {
  //   let graphic = layer.graphics.find(g => {
  //     return JSON.stringify(g.geometry.toJSON()) === JSON.stringify(highlightedGraphic.geometry.toJSON());
  //   });
  //   if (graphic) {
  //     vm.updateGraphics.remove(graphic);
  //     graphic = graphic.clone();
  //     graphic.symbol = symbol;
  //     //layer.add(graphic);
  //     vm.updateGraphics.add(highlightedGraphic);

  //     highlights = sketchLayerView.highlight(highlightedGraphic);
  //   }

  // });
}

export function pointSymbolUpdated(symbol: any, color: Color, size: number) {
  request(`${symbol.url}${symbol.cimRef.replace(".", "")}`).then((ref) => {
    //new CIMSymbol({data: `${url}/${id}/${symbol.cimRef}`})
    pointSymbol = new CIMSymbol({
      data: {
        type: "CIMSymbolReference",
        symbol: ref?.data,
      },
    });
    cimSymbolUtils.applyCIMSymbolColor(pointSymbol, color);
    cimSymbolUtils.scaleCIMSymbolTo(pointSymbol, size);
    if (sketchLayer.pointLayer) {
      updateHighlightedGraphicSymbol(
        sketchLayer.pointLayer,
        pointSymbol,
        pointSketchViewModel
      );
    }
    pointSketchViewModel.pointSymbol = pointSymbol;
    const preview = document.getElementById("icon-preview");
    if (preview) {
      preview.innerHTML = "";
      symbolUtils.renderPreviewHTML(pointSymbol, {
        node: preview as HTMLElement,
        size: size,
      });
    }
  });
}

export function polylineSymbolUpdated(lineColor: Color, width: number) {
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
        polylineSketchViewModel
      );
    }
  }

  const preview = document.getElementById("line-preview");
  if (preview) {
    preview.innerHTML = "";
    symbolUtils.renderPreviewHTML(lineSymbol, {
      node: preview as HTMLElement,
      size: width,
    });
  }
}

export function textSymbolUpdated(
  fontSize: number,
  fontColor: Color,
  haloSize: number,
  haloColor: Color,
  showHalo: boolean,
  textContent: string
) {
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
      textSketchViewModel
    );
  }
}

export function cancelSketch() {
  pointSketchViewModel.cancel();
  polylineSketchViewModel.cancel();
  polygonSketchViewModel.cancel();
  textSketchViewModel.cancel();
  pointSketchViewModel.updateOnGraphicClick = false;
  polygonSketchViewModel.updateOnGraphicClick = false;
  polylineSketchViewModel.updateOnGraphicClick = false;
  textSketchViewModel.updateOnGraphicClick = false;
}

export function clearSketch(
  setActiveSketchTool: Function,
  setSelectedGraphics: Function
) {
  setActiveSketchTool("");
  setSelectedGraphics([...[], ...[]]);
  pointSketchViewModel.cancel();
  polygonSketchViewModel.cancel();
  polylineSketchViewModel.cancel();
  textSketchViewModel.cancel();
  sketchLayer.polygonLayer.graphics.removeAll();
  sketchLayer.pointLayer.graphics.removeAll();
  sketchLayer.polylineLayer.graphics.removeAll();
  sketchLayer.textLayer.graphics.removeAll();
}

export function getSymbols(ids: string[], url: string) {
  return new Promise((resolve, reject) => {
    const promises: Promise<any>[] = [];

    ids.forEach((id) => {
      const symbol: WebStyleSymbol = new WebStyleSymbol({
        styleUrl: `${url}/${id}/data`,
        name: "Pins",
      });
      promises.push(request(symbol.styleUrl));
    });
    if (promises.length) {
    }
    const items: any[] = [];

    Promise.all(promises).then((results: any) => {
      results.forEach((result: any) => {
        result.data.items.forEach((item: any) => {
          item.url = result.url.replace("data", "");
          items.push(item);
        });
      });
      // items.concat(result.data.items);

      resolve(items);
    });
  });
}

export function stopSketching() {
  pointSketchViewModel.cancel();
  polygonSketchViewModel.cancel();
  polylineSketchViewModel.cancel();
  textSketchViewModel.cancel();
}

export function deleteSelectedGraphics(
  selectedGraphics: Graphic[],
  setSelectedGraphics: Function
) {
  pointLayer.removeMany(selectedGraphics);
  polygonLayer.removeMany(selectedGraphics);
  polylineLayer.removeMany(selectedGraphics);
  textLayer.removeMany(selectedGraphics);
  requestAnimationFrame(() => {
    setSelectedGraphics((current: Graphic[]) => {
      return [];
    });
  });
}
