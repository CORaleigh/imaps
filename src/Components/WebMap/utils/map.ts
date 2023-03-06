import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";

import { constraints } from "./constraints";
import Graphic from "@arcgis/core/Graphic";
import UniqueValueRenderer from "@arcgis/core/renderers/UniqueValueRenderer";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import FeatureSet from "@arcgis/core/rest/support/FeatureSet";
import { addWidgets } from "./widgets";
// import { handlePolygonLabels } from "./labeling";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils";
import Basemap from "@arcgis/core/Basemap";
import Color from "@arcgis/core/Color";
import IdentityManager from "@arcgis/core/identity/IdentityManager";
import Collection from "@arcgis/core/core/Collection";

export function initializeMap(
  ref: HTMLDivElement,
  mapId: string,
  geometrySet: Function,
  widgetActivated: Function
) {
  const view = new MapView({
    container: ref,
    constraints: constraints as any,
  });
  hideLogin();

  getWebMap(mapId).then((webmap: WebMap) => {
    view.map = webmap;
    addWidgets(view, widgetActivated);
    view.when(() => {
      removeGraphicsLayers(view);
      view.map.add(selectionLayer);
      view.map.add(selectionCluster);
      customizePopup(view);
      view.popup.on("trigger-action", (event) => {
        if (event.action.title === "Select") {
          geometrySet(view.popup.location);
        }
      });
      reactiveUtils
        .whenOnce(() => view.map.basemap.loaded)
        .then((loaded) => {
          getBackgroundColor(view.map.basemap).then((color) => {
            if (color) {
              view.background = { color: color } as __esri.ColorBackground;
            }
          });
        });
      // setTimeout(() => {
      //   handlePolygonLabels(view);
      // }, 5000);
    });
  });
  // window.addEventListener('pagehide', (e) => {

  //   if (e.persisted) {
  //     return;
  //   }

  //   saveMap(view);
  // });

  window.addEventListener("beforeunload", handleBeforeUnload);
  window.addEventListener("unload", handleUnload);
  document.addEventListener("visibilitychange", handleVisibilityChange);
  function handleBeforeUnload() {
    // Perform actions before the tab is reloaded or closed
    saveMap(view);
  }

  function handleUnload() {
    // Perform actions when the tab is reloaded or closed
    saveMap(view);
  }

  function handleVisibilityChange() {
    if (document.visibilityState === "hidden") {
      // Perform actions when the tab is hidden (e.g. when switching to another app)
      saveMap(view);
    }
  }

  view.on("hold", (event) => {
    geometrySet(event.mapPoint);
  });
  return view;
}
function isSearchable(layer: __esri.Layer, webmap: any) {
  const found = webmap.applicationProperties.viewing.search.layers
    .toArray()
    .find((searchLayer: __esri.SearchLayer) => {
      return searchLayer.id === layer.id;
    });
  return found;
}
function isInUrl(layer: __esri.Layer) {
  const url = new URL(window.location as any);
  const layers = url.searchParams.get("layers")?.split(",");
  if (!layers) {
    return false;
  }
  if (layer.title in layers) {
    layer.visible = true;
  }
  return layer.title in layers;
}
function getWebMap(mapId: string): Promise<WebMap> {
  return new Promise(async (resolve, reject) => {
    let webmap: any;

    if (
      window.localStorage.getItem("imaps_calcite") &&
      window.localStorage.getItem("imaps_reset") !== "true"
    ) {
      webmap = WebMap.fromJSON(
        JSON.parse(window?.localStorage?.getItem("imaps_calcite") as string)
      );
      const url = new URL(window.location as any);
      if (url.searchParams.get("layers")) {
        const layers = url.searchParams.get("layers")?.split(",");
        if (layers) {
          const sourceMap = new WebMap({
            portalItem: {
              id: mapId,
            },
          });
          await webmap.load();
          await sourceMap.load();
          const matches = sourceMap.allLayers.filter((layer: __esri.Layer) => {
            return layers.includes(layer.title);
          });

          matches.forEach((layer: any) => {
            if (layer.parent) {
              const parent = webmap.findLayerById(layer.parent.id);
              if (parent) {
                parent.add(layer);
                parent.visible = true;
                if (parent.parent) {
                  parent.parent.visible = true;
                }
                layer.visible = true;
              }
            }
          });
        }
      }
      resolve(webmap);
    } else {
      window.localStorage.removeItem("imaps_reset");
      webmap = new WebMap({
        portalItem: {
          id: mapId,
        },
      });
      webmap.load().then(() => {
        const groups = webmap.allLayers
          .filter((layer: __esri.Layer) => {
            return layer.type === "group";
          })
          .toArray();
        groups.forEach((group: __esri.Layer) => {
          (group as __esri.GroupLayer).removeMany(
            (group as __esri.GroupLayer).allLayers
              .filter((layer) => {
                return (
                  !layer.visible &&
                  !layer.title.includes("Property") &&
                  !isSearchable(layer, webmap)
                );
              })
              .toArray()
          );
        });
        resolve(webmap);
      });
    }
  });
}
function removeGraphicsLayers(view: MapView) {
  view.map.removeMany([
    view.map.findLayerById("selection-layer"),
    view.map.findLayerById("feature-table"),
  ]);
  view.map.removeMany(
    view.map.allLayers
      .filter((layer: any) => {
        return layer.type === "map-notes";
      })
      .toArray()
  );
}
export const saveMap = (view: MapView) => {
  if (view && view?.ready) {
    const groups = view.map.allLayers
      .filter((layer) => {
        return layer.type === "group";
      })
      .toArray();
    groups.forEach((group) => {
      (group as __esri.GroupLayer).removeMany(
        (group as __esri.GroupLayer).allLayers
          .filter((layer) => {
            return (
              !layer.visible &&
              !layer.title.includes("Property") &&
              !isSearchable(layer, view.map) &&
              layer.type !== "group"
            );
          })
          .toArray()
      );
    });
    // view.map.removeMany([
    //   view.map.findLayerById("selection-layer"),
    //   view.map.findLayerById("feature-table"),
    // ]);
    // view.map.removeMany(
    //   view.map.allLayers
    //     .filter((layer) => {
    //       return layer.type === "map-notes";
    //     })
    //     .toArray()
    // );
    const json = (view.map as any).toJSON();
    json.initialState.viewpoint.targetGeometry = view.extent;

    window.localStorage.setItem("imaps_calcite", JSON.stringify(json));
    //window.localStorage.removeItem('imaps_calcite');
  }
};
const clusterConfig = {
  type: "cluster",
  clusterRadius: "100px",
  clusterMinSize: "24px",
  clusterMaxSize: "60px",
  labelingInfo: [
    {
      deconflictionStrategy: "none",
      labelExpressionInfo: {
        expression: "Text($feature.cluster_count, '#,###')",
      },
      symbol: {
        type: "text",
        color: "#004a5d",
        font: {
          weight: "bold",
          family: "Noto Sans",
          size: "12px",
        },
      },
      labelPlacement: "center-center",
    },
  ],
};
const selectionLayer: FeatureLayer = new FeatureLayer({
  source: [],
  editingEnabled: true,
  listMode: "hide",
  legendEnabled: false,
  geometryType: "polygon",
  id: "selection-layer",
  objectIdField: "OBJECTID",
  spatialReference: { wkid: 102100 },
  orderBy: [{ field: "selected", order: "ascending" }],
  fields: [
    { name: "OBJECTID", type: "oid" },
    { name: "selected", type: "small-integer" },
    { name: "PIN_NUM", type: "string" },
  ],
  renderer: {
    type: "unique-value",
    field: "selected",
    uniqueValueInfos: [
      {
        value: 1,
        symbol: {
          type: "simple-fill",
          outline: {
            type: "simple-line",
            color: [217, 66, 70, 1],
            width: 2,
            style: "solid",
          },
          style: "none",
        },
      } as any,
      {
        value: 2,
        symbol: {
          type: "simple-fill",
          outline: {
            type: "simple-line",
            color: [255, 227, 76, 1],
            width: 2,
            style: "solid",
          },
          style: "none",
        },
      } as any,
    ],
  } as UniqueValueRenderer,
  minScale: 20000,
});

const selectionCluster: FeatureLayer = new FeatureLayer({
  source: [],
  editingEnabled: true,
  listMode: "hide",
  featureReduction: clusterConfig as any,
  legendEnabled: false,
  geometryType: "point",
  id: "selection-cluster",
  objectIdField: "OBJECTID",
  spatialReference: { wkid: 102100 },
  orderBy: [{ field: "selected", order: "ascending" }],
  fields: [
    { name: "OBJECTID", type: "oid" },
    { name: "selected", type: "small-integer" },
    { name: "PIN_NUM", type: "string" },
  ],
  effect: "drop-shadow(3px, 3px, 4px)",
  renderer: {
    type: "simple",
    symbol: {
      type: "simple-marker",
      size: 4,
      color: "#ffe34c",
      outline: {
        color: "rgba(153, 130, 0, 1)",
        width: 2,
      },
    },
  } as any,
  maxScale: 20000,
});
export function displayProperties(properties: Graphic[], view: MapView) {
  selectionLayer
    ?.queryFeatures({
      where: "1=1",
      returnGeometry: false,
      outFields: ["OBJECTID"],
    })
    .then((featureSet: FeatureSet) =>
      selectionLayer
        ?.applyEdits({
          deleteFeatures: featureSet.features,
        })
        .then((result) => {
          selectionLayer
            ?.applyEdits({
              addFeatures: properties,
            })
            .then((result) => {});
        })
    );
  updateClusters(properties);
}

function updateClusters(properties: Graphic[]) {
  const points: Graphic[] = [];

  properties.forEach((property) => {
    const geometry = property.geometry as __esri.Polygon;
    points.push(
      new Graphic({
        attributes: property.attributes,
        geometry: geometry ? geometry.centroid : undefined,
      })
    );
  });
  selectionCluster
    ?.queryFeatures({
      where: "1=1",
      returnGeometry: false,
      outFields: ["OBJECTID"],
    })
    .then((featureSet: FeatureSet) =>
      selectionCluster
        ?.applyEdits({
          deleteFeatures: featureSet.features,
        })
        .then((result) => {
          selectionCluster
            ?.applyEdits({
              addFeatures: points,
            })
            .then((result) => {});
        })
    );
}

const getBackgroundColor = (basemap: Basemap): Promise<Color | null> => {
  return new Promise((resolve, reject) => {
    const baseLayer = basemap.baseLayers.find((layer) => {
      return layer.type === "vector-tile";
    });
    if (baseLayer?.type === "vector-tile") {
      reactiveUtils
        .whenOnce(() => baseLayer.loaded)
        .then((loaded) => {
          const background = (
            baseLayer as __esri.VectorTileLayer
          ).getStyleLayer("background");
          if (background) {
            const color: Color = new Color(
              background.paint["background-color"]
            );
            resolve(color);
          } else {
            resolve(null);
          }
        });
    }
  });
};

function hideLogin() {
  IdentityManager.on("dialog-create", () => {
    const observer: MutationObserver = new MutationObserver((mutations) => {
      if (mutations.length) {
        (
          (mutations[0]?.target as HTMLElement)?.querySelector(
            ".esri-button--secondary"
          ) as HTMLElement
        )?.click();
        observer.disconnect();
      } else {
        observer.disconnect();
      }
    });

    const container = IdentityManager.dialog.container;

    observer.observe(container as Node, { childList: true });
  });
}

const customizePopup = (view: __esri.MapView) => {
  const propertyLayer = view.map.allLayers.find((layer) => {
    return layer.type === "feature" && layer.title.startsWith("Property");
  }) as __esri.FeatureLayer;
  view.whenLayerView(propertyLayer).then(() => {
    if (propertyLayer) {
      if (propertyLayer.popupTemplate) {
        propertyLayer.popupTemplate.actions = new Collection([
          {
            title: "Select",
            id: "property-select",
            className: "esri-icon-search",
          } as __esri.ActionButton,
        ]);
      }
    }
  });
};
