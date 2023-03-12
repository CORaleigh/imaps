import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";
import * as geometryEngine from "@arcgis/core/geometry/geometryEngine";
import Collection from "@arcgis/core/core/Collection";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils";
import * as arcade from "@arcgis/core/arcade";
export const getAllPolyLayers = (
  view: __esri.MapView
): Collection<__esri.FeatureLayer> => {
  return view.map.allLayers.filter((layer) => {
    return (
      (!layer.title?.includes("Property") &&
        layer.type === "feature" &&
        (layer as __esri.FeatureLayer).geometryType === "polygon") ||
      layer.type === "group"
    );
  }) as Collection<__esri.FeatureLayer>;
};
const addLabels = (
  layers: Collection<__esri.Layer>,
  group: __esri.GroupLayer,
  view: __esri.MapView
) => {
  layers.addMany(
    group.layers.filter((l: __esri.Layer) => {
      const labelingInfo = (l as __esri.FeatureLayer).labelingInfo;
      if (!labelingInfo) {
        return false;
      }
      if (labelingInfo.length) {
        return (
          l.visible &&
          l.type === "feature" &&
          (labelingInfo[0].minScale >= view.scale ||
            labelingInfo[0].minScale === 0)
        );
      } else {
        return false;
      }
    }) as Collection<__esri.FeatureLayer>
  );
};
export const getPolyLayers = (
  view: __esri.MapView
): Collection<__esri.FeatureLayer> => {
  const polyLayers: Collection<__esri.FeatureLayer> =
    new Collection<__esri.FeatureLayer>();
  view.map.layers.forEach((layer) => {
    if (layer.type === "group" && layer.visible) {
      const group: __esri.GroupLayer = layer as __esri.GroupLayer;
      const groups = group.layers.filter((l) => {
        return l.type === "group";
      }) as Collection<__esri.GroupLayer>;
      addLabels(polyLayers, group, view);
      groups.forEach((group: __esri.GroupLayer) => {
        if (group.visible) {
          addLabels(polyLayers, group, view);
        }
      });
    }
  });
  return polyLayers;
};
const hideLabels = (layer: __esri.FeatureLayer) => {
  if (layer.labelingInfo) {
    layer.labelsVisible = false;
  }
};
const updateLabels = (labels: GraphicsLayer, view: __esri.MapView) => {
  labels.removeAll();

  getPolyLayers(view).forEach((layer: __esri.Layer) => {
    hideLabels(layer as __esri.FeatureLayer);
    view.whenLayerView(layer).then((lv: __esri.LayerView) => {
      (lv as __esri.FeatureLayerView)
        .queryFeatures({
          geometry: view.extent,
          returnGeometry: true,
          outFields: ["*"],
        })
        .then((featureSet) => {
          featureSet.features.forEach((feature: __esri.Graphic) => {
            if ((layer as __esri.FeatureLayer).labelingInfo) {
              if (
                (layer as __esri.FeatureLayer).labelingInfo[0]
                  .labelExpressionInfo
              ) {
                const symbol = (
                  (layer as __esri.FeatureLayer).labelingInfo[0]
                    .symbol as __esri.TextSymbol
                ).clone();
                // symbol.text = feature.getAttribute(
                //   (layer as __esri.FeatureLayer).labelingInfo[0].labelExpression.replace('[', '').replace(']', ''),
                // );
                const profile = {
                  variables: [
                    {
                      name: "$feature",
                      type: "feature",
                    },
                  ],
                };
                const info = (layer as __esri.FeatureLayer).labelingInfo[0]
                  .labelExpressionInfo;
                arcade
                  .createArcadeExecutor(info.expression, profile as any)
                  .then((executor: any) => {
                    if (executor) {
                      symbol.text = executor.execute({ $feature: feature });
                    }
                    const clipGeom = geometryEngine.clip(
                      feature.geometry,
                      view.extent
                    ) as __esri.Polygon;
                    if (clipGeom) {
                      const dupes = labels.graphics.filter((graphic) => {
                        return (
                          geometryEngine.distance(
                            clipGeom.centroid,
                            graphic.geometry,
                            9002
                          ) <
                          view.scale / 20
                        );
                      });
                      if (
                        dupes.length === 0 &&
                        geometryEngine.within(clipGeom.centroid, clipGeom)
                      ) {
                        labels.graphics.add(
                          new Graphic({
                            symbol: symbol,
                            geometry: clipGeom.centroid,
                          })
                        );
                      }
                    }
                  });
              }
            }
          });
        });
    });
  });
};
export const handlePolygonLabels = (view: __esri.MapView): void => {
  const labels = new GraphicsLayer({
    id: "polygon-labels",
    listMode: "hide",
    title: "labels",
  });

  getAllPolyLayers(view).forEach((l) => {
    l.watch("visible", () => {
      labels.removeAll();

      requestAnimationFrame(() => {
        updateLabels(labels, view);
      });
    });
  });

  view.map.add(labels);

  reactiveUtils.when(
    () => view.stationary,
    () => {
      updateLabels(labels, view);
    }
  );
};
