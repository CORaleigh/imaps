import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils";
import GroupLayer from "@arcgis/core/layers/GroupLayer";
import ActionToggle from "@arcgis/core/support/actions/ActionToggle.js";

import Collection from "@arcgis/core/core/Collection";
import type Layer from "@arcgis/core/layers/Layer";
import type ListItem from "@arcgis/core/widgets/LayerList/ListItem";
import type MapImageLayer from "@arcgis/core/layers/MapImageLayer";
import type FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import LabelClass from "@arcgis/core/layers/support/LabelClass";
import type SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";
export type LayerStorageInfo = {
  id: string | number;
  visible: boolean;
  title: string | null;
  opacity: number;
  visibleSublayerIds?: number[];
};
const OpacitySlider = lazy(() => import("./OpacitySlider"));
interface LabelExpression {
  title: string;
  expression: string;
}
export const propertyLabelExpressions: LabelExpression[] = [
  {
    expression: `First(Split($feature['SITE_ADDRESS'], ' ')) + ' ' + $feature.STMISC`,
    title: "Address Labels",
  },
  {
    expression: `$feature['PIN_NUM']`,
    title: "PIN Labels",
  },
  {
    expression: `$feature['REID']`,
    title: "REID Labels",
  },
  {
    expression: `$feature['OWNER']`,
    title: "Owner",
  },
  {
    expression: `When(IsEmpty($feature["SALE_DATE"]),null, Concatenate(Month($feature["SALE_DATE"])+1, '/',Day($feature["SALE_DATE"]), '/',Year($feature["SALE_DATE"])))`,
    title: "Sale Date Labels",
  },
  {
    expression: `Text($feature.TOTSALPRICE,'$#,###')`,
    title: "Sale Price Labels",
  },
];



export const createItemPanel = (item: ListItem) => {
  if (
    item.layer &&
    item.layer?.type !== "group" &&
    item.layer.type !== "map-image"
  ) {
    let addSlider = true;
    if (item.layer.type === "sublayer") {
      if (item.layer.parent?.type === "map-image") {
        const capabilities = (item.layer.parent as MapImageLayer).capabilities
          .exportMap;
        if (capabilities) {
          addSlider = capabilities.supportsDynamicLayers;
        }
      }
    }
    const slider = document.createElement("slider-container");
    const root = createRoot(slider as HTMLDivElement);
    root.render(
      <Suspense fallback={""}>
        <OpacitySlider value={item.layer.opacity} layer={item.layer as Layer} />
      </Suspense>,
    );

    const content: (string | HTMLElement)[] = ["legend"];
    if (addSlider) {
      content.push(slider);
    }
    item.panel = {
      content: content,
      open: false,
      visible: item.visible,
    };
  }
};

export const createPropertyOutlineToggle = (item: ListItem) => {
  if (
    !item.layer ||
    item.layer.title !== "Property" ||
    item.layer.type !== "feature"
  )
    return;
  const layer: FeatureLayer = item.layer as FeatureLayer;
  if (!layer.renderer || layer.renderer.type !== "simple") return;
  const renderer = layer.renderer as SimpleRenderer;
  if (
    !renderer.symbol ||
    renderer.symbol.type !== "simple-fill" ||
    !renderer.symbol.outline ||
    !renderer.symbol.outline.color
  )
    return;
  const isDark = renderer.symbol.outline.color.toHex() === "#000000";
  item.actionsSections.add(
    new Collection(
      new Collection([
        new ActionToggle({
          active: false,
          value: !isDark,
          title: "Light Outline",
          icon: !isDark
            ? "toggle-on"
            : "toggle-off",          
        }),
      ]),
    ),
  );
};

export const createLabelToggles = (item: ListItem, webMapId: string) => {
  if (!item.layer) return;
  if (item.layer.title === "Property" && item.layer.type === "feature") {
    item.actionsSections = new Collection([new Collection([])]);
    const selectedTitles =
      localStorage.getItem(`imaps_${webMapId}_property_labels`)?.split(",") ??
      [];

    propertyLabelExpressions.forEach((expression) =>
      item.actionsSections.at(0)?.add(
        new ActionToggle({
          active: false,
          value: selectedTitles?.includes(expression.title),
          title: expression.title,
          icon: selectedTitles?.includes(expression.title)
            ? "toggle-on"
            : "toggle-off",
        }),
      ),
    );
  }
};

export const updatePropertyLabels = (
  layer: FeatureLayer,
  selectedTitles: (string | null | undefined)[],
  webMapId: string,
) => {
  if (selectedTitles.length === 0) {
    layer.labelingInfo = [];
    localStorage.removeItem(`imaps_${webMapId}_property_labels`);
    return;
  }
  const selectedExpressions = propertyLabelExpressions.filter((expression) => {
    return selectedTitles?.includes(expression.title);
  });
  const expressions = selectedExpressions.map((expression) => {
    return expression.expression;
  });
  const expression = expressions.join("+ TextFormatting.NewLine+");
  layer.labelingInfo = [];

  localStorage.setItem(
    `imaps_${webMapId}_property_labels`,
    selectedTitles.toString(),
  );
  layer.labelsVisible = true;
  layer.labelingInfo = [
    new LabelClass({
      symbol: {
        type: "text",
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
    }),
  ];
};

export const watchLayerList = (item: ListItem) => {
  reactiveUtils.watch(
    () => item.layer?.visible === true,
    (visible: boolean) => {
      if (item.panel) {
        item.panel.visible = visible;
      }
      if (item.layer && item.layer.parent && item.parent) {
        if (item.layer.parent instanceof GroupLayer) {
          const parentVisible = visible
            ? true
            : !(item.layer.parent as GroupLayer).layers?.filter(
                  (sublayer) => sublayer.visible,
                ).length
              ? false
              : true;
          (item.layer.parent as GroupLayer).visible = parentVisible;
          //item.parent.open = parentVisible;
        }

        // const storage = JSON.parse(
        //   localStorage.getItem(`imaps_components_visible_layers_${id}`) || "[]"
        // );
        // const layer = storage.find(
        //   (l: LayerStorageInfo) => l.id === item.layer?.id
        // );

        // if (layer) {
        //   if (layer.visible && !visible) {
        //     storage.splice(storage.indexOf(layer), 1);
        //   }
        // } else {
        // if (visible && item.layer.type !== "sublayer") {
        //   const storageItem: LayerStorageInfo = {
        //     id: item.layer.id,
        //     visible: visible,
        //     title: item.layer.title,
        //     opacity: item.layer?.opacity || 1,
        //   };
        //   if (item.layer.type === "map-image") {
        //     const visibleSublayers = (
        //       item.layer as __esri.MapImageLayer
        //     ).sublayers?.filter((sublayer) => sublayer.visible);
        //     if (visibleSublayers) {
        //       storageItem.visibleSublayerIds = visibleSublayers
        //         .map((sublayer) => sublayer.id)
        //         .toArray();
        //     }
        //   }

        //   storage.push(storageItem);
        // }
        //   if (item.layer.type === "sublayer") {
        //     if (!(item.layer as __esri.Sublayer).parent) return;
        //     if ((item.layer as __esri.Sublayer).parent?.type === "map-image") {
        //       const storageItem = storage.find(
        //         (l: LayerStorageInfo) =>
        //           l.id === (item.layer?.parent as __esri.MapImageLayer).id
        //       );
        //       if (storageItem) {
        //         const visibleSublayers = (
        //           item.layer?.parent as __esri.MapImageLayer
        //         ).sublayers?.filter((sublayer) => sublayer.visible);
        //         if (visibleSublayers) {
        //           storageItem.visibleSublayerIds = visibleSublayers
        //             .map((sublayer) => sublayer.id)
        //             .toArray();
        //         }
        //       }
        //     }
        //   }
        // }

        // localStorage.setItem(
        //   `imaps_components_visible_layers_${id}`,
        //   JSON.stringify(storage)
        // );
      }
      // if (item.layer?.type === "group") {
      //   item.open = visible;
      // }
    },
  );
  if (!item.layer || !item.layer.opacity) return;
};
