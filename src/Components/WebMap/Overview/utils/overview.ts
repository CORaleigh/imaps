import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import Graphic from "@arcgis/core/Graphic";
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import * as geometryEngine from "@arcgis/core/geometry/geometryEngine";
let stationaryHandle: __esri.WatchHandle;
let extentHandle: __esri.WatchHandle;
export const initializeOverview = (ref: HTMLDivElement, view: MapView) => {
  const map = new Map({
    basemap: view.map.basemap,
  });
  const overview = new MapView({
    map: map,
    container: ref,
    navigation: {
      mouseWheelZoomEnabled: false,
      browserTouchPanEnabled: false,
      momentumEnabled: false,
    },
  });
  overview.ui.remove("zoom");
  overview.ui.remove("attribution");

  view.when(() => {
    overview.extent = view.extent.clone().expand(2);
    addWatches(view, overview);

    const expand = view.ui.find("overview");
    (expand as __esri.Expand).watch("expanded", (expanded: boolean) => {
      if (!expanded) {
        stationaryHandle?.remove();
        extentHandle?.remove();
      } else {
        addWatches(view, overview);
      }
    });
  });
  disableNavigation(overview);

  return overview;
}

const addWatches = (view: __esri.MapView, overview: __esri.MapView) => {
  stationaryHandle = view.watch("stationary", () => {
    if (view.stationary) {
      overview.goTo(
        { target: view.extent.center, zoom: view.zoom - 4 },
        { easing: "ease-out" }
      );
    }
  });

  view.map.watch("basemap", (basemap) => (overview.map.basemap = basemap));
  extentHandle = view.watch("extent", () => {
    overview.graphics.removeAll();
    overview.graphics.add(
      new Graphic({
        geometry: view.extent,
        symbol: new SimpleFillSymbol({
          color: [0, 0, 0, 0.25],
          style: "solid",
          outline: {
            width: 1,
            color: [255, 255, 255, 1],
          },
        }),
      })
    );
    if (!geometryEngine.intersects(overview.extent, view.extent)) {
      overview.goTo(
        { target: view.extent.center, zoom: view.zoom - 4 },
        { easing: "ease-out" }
      );
    }
  });
};

const disableNavigation = (overview: __esri.MapView) => {
  overview.on("key-down", (event) => {
    const prohibitedKeys = ["+", "-", "Shift", "_", "="];
    const keyPressed = event.key;
    if (prohibitedKeys.indexOf(keyPressed) !== -1) {
      event.stopPropagation();
    }
  });
  overview.on("mouse-wheel", (event) => {
    event.stopPropagation();
  });
  overview.on("double-click", (event) => {
    event.stopPropagation();
  });
  overview.on("double-click", ["Control"], (event) => {
    event.stopPropagation();
  });
  overview.on("drag", (event) => {
    event.stopPropagation();
  });
  overview.on("drag", ["Shift"], (event) => {
    event.stopPropagation();
  });

  overview.on("drag", ["Shift", "Control"], (event) => {
    event.stopPropagation();
  });
};
