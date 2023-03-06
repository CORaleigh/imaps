import Expand from "@arcgis/core/widgets/Expand";
//import CoordinateConversion from "@arcgis/core/widgets/CoordinateConversion";
import Home from "@arcgis/core/widgets/Home";
import Compass from "@arcgis/core/widgets/Compass";
import ScaleBar from "@arcgis/core/widgets/ScaleBar";
import MapView from "@arcgis/core/views/MapView";
import Track from "@arcgis/core/widgets/Track";
import React, { lazy, Suspense } from "react";

import { createRoot } from "react-dom/client";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils";

const Overview = lazy(() => import("../Overview"));
const Coordinates = lazy(() => import("../Coordinates/Coodinates"));
let streetviewClick: IHandle | null = null;

export function addWidgets(view: MapView, widgetActivated: Function) {
  view.ui.add(
    new Home({
      view: view,
      goToOverride: (view, params) => {
        view.goTo(view.constraints);
      },
    }),
    "top-left"
  );
  view.ui.add(new Compass({ view: view }), "top-left");
  const track = new Track({ view: view });
  view.ui.add(track, "top-left");
  addCoordinates(view, widgetActivated);

  view.ui.add(new ScaleBar({ view: view }), "bottom-left");
  const streetview = createStreetviewButton(view, widgetActivated);
  const identify = createIdentifyButton(view, widgetActivated);
  view.ui.add(identify, "top-left");
  view.ui.add(streetview, "top-left");
  addOverview(view);

  view.watch("activeTool", (activeTool) => {
    if (activeTool) {
      view.popup.autoOpenEnabled = false;
      streetviewClick?.remove();
      document.querySelector(".identify-widget")?.classList.remove("active");
      document.querySelector(".streetview-widget")?.classList.remove("active");
    } else {
      view.popup.autoOpenEnabled = true;
      document.querySelector(".identify-widget")?.classList.add("active");
    }
  });
}
const addOverview = (view: __esri.MapView) => {
  const container = document.createElement("div");

  const overviewExpand = new Expand({
    content: container,
    expandIconClass: "esri-icon-overview-arrow-top-left",
    collapseIconClass: "esri-icon-overview-arrow-bottom-right",
    mode: "floating",
    label: "Overview Map",
    collapseTooltip: "Overview Map",
    expandTooltip: "Overview Map",
    id: "overview",
  });
  view.ui.add(overviewExpand, "bottom-right");
  reactiveUtils
    .whenOnce(() => overviewExpand.expanded)
    .then(() => {
      if (!container?.hasChildNodes()) {
        const root = createRoot(container as HTMLDivElement);
        root.render(
          <Suspense fallback={""}>
            <Overview id="overview-map" view={view} />
          </Suspense>
        );
      }
    });
};

const addCoordinates = (view: __esri.MapView, widgetActivated: Function) => {
  const container = document.createElement("div");

  const coordinateExpand = new Expand({
    content: container,
    expandIconClass: "esri-icon-pan",
    collapseIconClass: "esri-icon-pan",
    mode: "floating",
    label: "Coordinates",
    collapseTooltip: "Coordinates",
    expandTooltip: "Coordinates",
    id: "coordinates",
  });
  view.ui.add(coordinateExpand, "bottom-left");
  reactiveUtils
    .whenOnce(() => coordinateExpand.expanded)
    .then(() => {
      if (!container?.hasChildNodes()) {
        const root = createRoot(container as HTMLDivElement);
        root.render(
          <Suspense fallback={""}>
            <Coordinates
              id="coordinates"
              clickActivated={(view: __esri.MapView) => {
                widgetActivated(view);
              }}
              view={view}
              expand={coordinateExpand}
            />
          </Suspense>
        );
      }
    });
};

const createStreetviewButton = (
  view: MapView,
  widgetActivated: Function
): any => {
  const button = document.createElement("div");
  button.classList.add("streetview-widget");
  button.classList.add("esri-component");
  button.classList.add("esri-widget--button");
  button.classList.add("esri-widget");
  button.classList.add("map-tool");
  button.setAttribute("role", "button");
  button.setAttribute("aria-label", "Open streetview");
  button.setAttribute("title", "Open streetview");
  const icon = document.createElement("calcite-icon");

  //icon.classList.add('esri-icon');
  icon.setAttribute("icon", "360-view");
  //icon.setAttribute('aria-hidden', 'true');

  const text = document.createElement("span");
  text.classList.add("esri-icon-font-fallback-text");
  text.textContent = "Open streetview";
  button.appendChild(icon);
  button.appendChild(text);
  button.addEventListener("click", () => {
    widgetActivated(view);

    view.popup.autoOpenEnabled = false;
    if (
      document.querySelector(".streetview-widget")?.classList.contains("active")
    ) {
      document.querySelector(".streetview-widget")?.classList.remove("active");
      streetviewClick?.remove();
    } else {
      document.querySelector(".map-tool.active")?.classList.remove("active");
      document.querySelector(".streetview-widget")?.classList.add("active");
      streetviewClick?.remove();
      streetviewClick = view.on("click", (e) => {
        document.querySelector(".map-tool.active")?.classList.remove("active");
        document.querySelector(".streetview-widget")?.classList.add("active");
        const cbll = e.mapPoint.latitude + "," + e.mapPoint.longitude;
        window.open(
          "https://maps.google.com?layer=c&cbll=" + cbll + "&cbp=0,0,0,0,0",
          "streetview"
        );
      });
    }
  });
  return button;
};

export const createIdentifyButton = (
  view: MapView,
  widgetActivated: Function
): any => {
  const infoButton = document.createElement("div");
  infoButton.classList.add("identify-widget");
  infoButton.classList.add("esri-component");
  infoButton.classList.add("esri-widget--button");
  infoButton.classList.add("esri-widget");
  infoButton.classList.add("active");
  infoButton.classList.add("map-tool");

  infoButton.setAttribute("role", "button");
  infoButton.setAttribute("aria-label", "Identify features");
  infoButton.setAttribute("title", "Identify features");
  const icon = document.createElement("span");
  icon.classList.add("esri-icon");
  icon.classList.add("esri-icon-description");
  icon.setAttribute("aria-hidden", "true");

  const text = document.createElement("span");
  text.classList.add("esri-icon-font-fallback-text");
  text.textContent = "Idenfity features";
  infoButton.appendChild(icon);
  infoButton.appendChild(text);
  view.popup.autoOpenEnabled = true;
  infoButton.addEventListener("click", () => {
    view.popup.autoOpenEnabled = true;
    streetviewClick?.remove();
    document.querySelector(".identify-widget")?.classList.add("active");
    document.querySelector(".streetview-widget")?.classList.remove("active");

    widgetActivated(view);
  });
  return infoButton;
};

// const getStateplaneConversion = () => {
//   const numberSearchPattern = /-?\d+[.]?\d*/;
//   const stateplane = new Format({
//     name: 'Stateplane Feet',
//     conversionInfo: {
//       spatialReference: new SpatialReference({ wkid: 2264 }),
//       reverseConvert: function (string: string) {
//         const parts = string.split(',');
//         return new Point({
//           x: parseFloat(parts[0]),
//           y: parseFloat(parts[1]),
//           spatialReference: { wkid: 2264 },
//         });
//       },
//     } as any,
//     coordinateSegments: [
//       {
//         alias: 'X',
//         description: 'easting',
//         searchPattern: numberSearchPattern,
//       },
//       {
//         alias: 'Y',
//         description: 'northing',
//         searchPattern: numberSearchPattern,
//       },
//     ],
//     defaultPattern: 'X, Y',
//   });
//   return stateplane;
// }
