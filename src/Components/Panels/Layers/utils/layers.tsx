import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
import Collection from "@arcgis/core/core/Collection";
import ActionToggle from "@arcgis/core/support/actions/ActionToggle";
import LayerList from "@arcgis/core/widgets/LayerList";
import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import DevPlanFilter from "../DevPlanFilter";
const OpacitySlider = lazy(() => import("../OpacitySlider"));

export function initializeLayers(
  ref: HTMLDivElement,
  view: MapView
): Promise<LayerList> {
  return new Promise((resolve, reject) => {
    addLayersFromWebmap(view).then(() => {
      const layers = new LayerList({
        view: view,
        container: ref,
        listItemCreatedFunction: layerListItemCreated,
      });
      layers.on(
        "trigger-action",
        (event: __esri.LayerListTriggerActionEvent) => {
          if (event.item.layer.title === "Property") {
            togglePropertyLabels(event);
          }
        }
      );
      resolve(layers);
    });
  });
}

function addLayersFromWebmap(view: MapView) {
  return new Promise((resolve, reject) => {
    const map = new WebMap({
      portalItem: {
        id: "95092428774c4b1fb6a3b6f5fed9fbc4",
      },
    });

    map.loadAll().then(() => {
      const groups = view.map.allLayers
        .filter((layer) => {
          return layer.type === "group";
        })
        .toArray();
      groups.forEach((group) => {
        const match = map.allLayers.find((layer) => {
          return layer.type === "group" && layer.title === group.title;
        }) as __esri.GroupLayer;

        // match.layers.forEach((layer,i) => {
        //   if ((group as __esri.GroupLayer).findLayerById(layer.id) ===
        //   undefined) {
        //     (group as __esri.GroupLayer).add(layer, i);
        //   }
        // });
        const matchlayers = match.layers.slice();
        const layers = match.layers.filter((layer) => {
          const found = (group as __esri.GroupLayer).findLayerById(layer.id);
          //attempting to update stored layer if updated in webmap (popup and renderer)
          if (found !== undefined) {
            if (found.type === "feature") {
              (found as __esri.FeatureLayer).popupTemplate = (
                layer as __esri.FeatureLayer
              ).popupTemplate;
              (found as __esri.FeatureLayer).renderer = (
                layer as __esri.FeatureLayer
              ).renderer;
            }
          }

          return (
            (group as __esri.GroupLayer).findLayerById(layer.id) === undefined
          );
        });
        (group as __esri.GroupLayer).addMany(layers.toArray());

        (group as __esri.GroupLayer).layers.forEach((layer1) => {
          let index = matchlayers.findIndex((layer2) => {
            return layer1.id === layer2.id;
          });
          (group as __esri.GroupLayer).reorder(layer1, index);
        });
        matchlayers.destroy();
      });
      resolve(true);
    });
  });
}
const setPropertyColor = (layer: FeatureLayer, light: boolean) => {
  const renderer = (layer.renderer as __esri.SimpleRenderer).clone();
  if (light) {
    (renderer.symbol as __esri.SimpleFillSymbol).outline.color.r = 0;
    (renderer.symbol as __esri.SimpleFillSymbol).outline.color.g = 0;
    (renderer.symbol as __esri.SimpleFillSymbol).outline.color.b = 0;
  } else {
    (renderer.symbol as __esri.SimpleFillSymbol).outline.color.r = 255;
    (renderer.symbol as __esri.SimpleFillSymbol).outline.color.g = 255;
    (renderer.symbol as __esri.SimpleFillSymbol).outline.color.b = 255;
  }
  layer.renderer = renderer;
};
const togglePropertyColor = (layer: FeatureLayer, sections: any) => {
  if (sections.length > 1) {
    setPropertyColor(layer, !sections.getItemAt(1).getItemAt(0).value);
  }
};
export const togglePropertyLabels = (
  event: __esri.LayerListTriggerActionEvent
) => {
  if (event.item.layer.title === "Property") {
    togglePropertyColor(
      event.item.layer as FeatureLayer,
      event.item.actionsSections
    );
    if (!(event.item.layer as __esri.FeatureLayer).labelsVisible) {
      (event.item.layer as __esri.FeatureLayer).labelsVisible = true;
    }
    const selected = event.item.actionsSections
      .getItemAt(0)
      .filter((section) => {
        return (section as ActionToggle).value;
      });

    const selectedTitles = selected.map((section) => {
      return (section as ActionToggle).title;
    });

    const selectedExpressions = propertyLabelExpressions.filter(
      (expression) => {
        return selectedTitles.includes(expression.title);
      }
    );
    const expressions = selectedExpressions.map((expression) => {
      return expression.expression;
    });
    const expression = expressions.join("+ TextFormatting.NewLine+");
    (event.item.layer as __esri.FeatureLayer).labelingInfo = [];

    //if ((event.action as ActionToggle).value) {
    (event.item.layer as __esri.FeatureLayer).labelingInfo = [
      {
        // autocasts as new LabelClass()
        symbol: {
          type: "text", // autocasts as new TextSymbol()
          color: "black",
          haloColor: "white",
          haloSize: 1,
          font: {
            family: "AvenirNext LT Pro Regular",
            style: "normal",
            weight: "bold",
          },
        },
        labelExpressionInfo: {
          expression: expression,
        },
        maxScale: 0,
        minScale: 5000,
      } as any,
    ];
    // }
    // } else {
    //   (event.item.layer as __esri.FeatureLayer).labelingInfo = (
    //     event.item.layer as __esri.FeatureLayer
    //   ).labelingInfo.filter((info) => {
    //     return info.labelExpressionInfo.expression != expression.expression;
    //   });
    // }
  }
};
const propertyLabelExpressions: any[] = [
  {
    expression: `First(Split($feature['SITE_ADDRESS'], ' '))`,
    title: "Address",
  },
  {
    expression: `$feature['PIN_NUM']`,
    title: "PIN",
  },
  {
    expression: `$feature['REID']`,
    title: "REID",
  },
  {
    expression: `When(IsEmpty($feature["SALE_DATE"]),null, Concatenate(Month($feature["SALE_DATE"])+1, '/',Day($feature["SALE_DATE"]), '/',Year($feature["SALE_DATE"])))`,
    title: "Sale Date",
  },
  {
    expression: `Text($feature.TOTSALPRICE,'$#,###')`,
    title: "Sale Price",
  },
];

const addPropertyLabelToggles = (item: any) => {
  if (
    item.layer.title === "Property" &&
    item.layer.type !== "group" &&
    item.actionsSections.length === 0
  ) {
    let toggles: Collection = new Collection();
    toggles.addMany(
      propertyLabelExpressions.map((expression) => {
        return new ActionToggle({
          value: item.layer.labelingInfo?.find((info: any) => {
            return (
              info.labelExpressionInfo?.expression.includes(
                expression.expression
              ) && item.layer.labelsVisible
            );
          }),
          title: expression.title,
          visible: true,
        });
      })
    );
    (item as __esri.ListItem).actionsSections.push(toggles);

    toggles = new Collection();
    toggles.add(
      new ActionToggle({
        value: item.layer.renderer.symbol.outline.color.isBright,
        title: "Light Outline",
        visible: true,
      }) as any
    );
    (item as __esri.ListItem).actionsSections.push(toggles);

    (item as __esri.ListItem).actionsOpen = true;
    setTimeout(() => {
      const title = document.createElement("h4");
      title.id = "labels-actions-title";
      title.textContent = "Labels";
      title.setAttribute("style", "padding: 0.5em;margin: 0;");
      const actions = document.querySelector(".esri-layer-list__item-actions");
      if (
        actions?.parentElement &&
        !document.getElementById("labels-actions-title")
      ) {
        actions.prepend(title);
      }
    }, 500);
  }
};

const addDevPlanFilters = (item: any) => {
  if (
    item.layer.title.includes("Development Plans") &&
    item.layer.type !== "group" &&
    item.actionsSections.length === 0
  ) {
    const filter = document.createElement("filter-container");
    const root = createRoot(filter as HTMLDivElement);
    root.render(
      <Suspense fallback={""}>
        <DevPlanFilter datefield={"apply_date"} layer={item.layer} />
      </Suspense>
    );
    ((item as __esri.ListItem).panel.content as any[]).push(filter);
  }
};

const createPanel = (item: __esri.ListItem) => {
  if (
    item.visible &&
    !item.panel &&
    item.layer.type !== "group" &&
    item.layer.type !== undefined
  ) {
    const slider = document.createElement("slider-container");
    const root = createRoot(slider as HTMLDivElement);
    root.render(
      <Suspense fallback={""}>
        <OpacitySlider value={item.layer.opacity} layer={item.layer} />
      </Suspense>
    );

    item.panel = {
      content: [slider, "legend"],
      open: false,
    } as __esri.ListItemPanel;
    addDevPlanFilters(item);
  }
};

const layerListItemCreated = (event: any): void => {
  const item = event.item;
  createPanel(item);
  item.open = item.layer.visible;
  item.layer.watch("visible", (visible: boolean) => {
    // if (item.panel) {
    //   item.panel.open = visible;
    // }
    item.open = visible;
    createPanel(item);

    if (visible) {
      if (item.layer.parent) {
        if (item.layer.parent.type === "group") {
          item.layer.parent.visible = true;
        }
      }
      if (item.layer.parent.parent) {
        if (item.layer.parent.parent.type === "group") {
          item.layer.parent.parent.visible = true;
        }
      }
    }
  });
  addPropertyLabelToggles(item);
};

export const filterLayers = (
  value: string,
  layerList: __esri.LayerList
): void => {
  if (!value) {
    value = "";
  }
  layerList.operationalItems.forEach((item: __esri.ListItem) => {
    if (item.layer.type === "group") {
      let open = false;
      (item.layer as __esri.GroupLayer).layers.forEach((layer) => {
        if (layer.title.toLowerCase().includes(value.toLowerCase())) {
          layer.listMode = "show";
          open = true;
        } else {
          layer.listMode = "hide";
        }
        //handle second level group layers
        if (layer.type === "group") {
          (layer as __esri.GroupLayer).layers.forEach((sublayer) => {
            if (sublayer.title.toLowerCase().includes(value.toLowerCase())) {
              layer.listMode = "show";
              sublayer.listMode = "show";
              open = true;
            } else {
              sublayer.listMode = "hide";
            }
          });
        }
      });
      item.open = value.length > 0 && open;
      if (!value.length || open) {
        document
          .getElementById(
            `${(layerList as any).id}_${(item as any).uid}__title`
          )
          ?.parentElement?.parentElement?.parentElement?.removeAttribute(
            "hidden"
          );
      }
      if (!open) {
        document
          .getElementById(
            `${(layerList as any).id}_${(item as any).uid}__title`
          )
          ?.parentElement?.parentElement?.parentElement?.setAttribute(
            "hidden",
            ""
          );
      }
    }
  });
};

export const resetLayers = (list: __esri.LayerList) => {
  const groups: Collection<__esri.GroupLayer> = list?.view.map.allLayers.filter(
    (layer) => {
      return layer.type === "group";
    }
  ) as Collection<__esri.GroupLayer>;
  groups.forEach((group) => {
    group.visible = group.title === "Property";
    group.layers.forEach((layer) => {
      layer.visible = layer.title === "Property";
    });
  });
};
