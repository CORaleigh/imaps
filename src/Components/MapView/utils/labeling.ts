import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import Graphic from '@arcgis/core/Graphic';
import * as geometryEngine from '@arcgis/core/geometry/geometryEngine';
import Collection from '@arcgis/core/core/Collection';
import * as watchUtils from '@arcgis/core/core/watchUtils';
export const getAllPolyLayers = (view: __esri.MapView): Collection<__esri.FeatureLayer> => {
  return view.map.allLayers.filter((layer) => {
    return (
      (layer.type === 'feature' && (layer as __esri.FeatureLayer).geometryType === 'polygon') || layer.type === 'group'
    );
  }) as Collection<__esri.FeatureLayer>;
};
export const getPolyLayers = (view: __esri.MapView): Collection<__esri.FeatureLayer> => {
  const polyLayers: Collection<__esri.FeatureLayer> = new Collection<__esri.FeatureLayer>();
  view.map.layers.forEach((layer) => {
    if (layer.type === 'group' && layer.visible) {
      const gl: __esri.GroupLayer = layer as __esri.GroupLayer;
      const groups = gl.layers.filter((l) => {
        return l.type === 'group';
      }) as Collection<__esri.GroupLayer>;
      polyLayers.addMany(
        gl.layers.filter((l) => {
          const labelingInfo = (l as __esri.FeatureLayer).labelingInfo;
          if (!labelingInfo) {
            return false;
          }
          if (labelingInfo.length) {
            return (
              l.visible &&
              l.type === 'feature' &&
              (labelingInfo[0].minScale >= view.scale || labelingInfo[0].minScale === 0)
            );
          } else {
            return false;
          }
        }) as Collection<__esri.FeatureLayer>,
      );
      groups.forEach((g: __esri.GroupLayer) => {
        if (g.visible) {
          polyLayers.addMany(
            g.layers.filter((l: __esri.Layer) => {
              const labelingInfo = (l as __esri.FeatureLayer).labelingInfo;
              if (!labelingInfo) {
                return false;
              }
              if (labelingInfo.length) {
                return (
                  l.visible &&
                  l.type === 'feature' &&
                  (labelingInfo[0].minScale >= view.scale || labelingInfo[0].minScale === 0)
                );
              } else {
                return false;
              }
            }) as Collection<__esri.FeatureLayer>,
          );
        }
      });
    }
  });
  return polyLayers;
};
const updateLabels = (labels: GraphicsLayer, view: __esri.MapView) => {
  labels.removeAll();

  getPolyLayers(view).forEach((layer: __esri.Layer) => {
    if ((layer as __esri.FeatureLayer).labelingInfo) {
      if ((layer as __esri.FeatureLayer).labelingInfo[0]?.labelExpression) {
        (layer as __esri.FeatureLayer).labelsVisible = false;
      }
    }
    view.whenLayerView(layer).then((lv: __esri.LayerView) => {
      (lv as __esri.FeatureLayerView)
        .queryFeatures({ geometry: view.extent, returnGeometry: true, outFields: ['*'] })
        .then((featureSet) => {
          featureSet.features.forEach((feature: __esri.Graphic) => {
            if ((layer as __esri.FeatureLayer).labelingInfo) {
              if ((layer as __esri.FeatureLayer).labelingInfo[0].labelExpression) {
                const symbol = ((layer as __esri.FeatureLayer).labelingInfo[0].symbol as __esri.TextSymbol).clone();
                symbol.text = feature.getAttribute(
                  (layer as __esri.FeatureLayer).labelingInfo[0].labelExpression.replace('[', '').replace(']', ''),
                );
                console.log(feature);
                console.log(symbol.text);
                labels.graphics.add(
                  new Graphic({
                    symbol: symbol,
                    geometry: (geometryEngine.clip(feature.geometry, view.extent) as __esri.Polygon).centroid,
                  }),
                );
              }
            }
          });
        });
    });
  });
};
export const handlePolygonLabels = (view: __esri.MapView): void => {
  getAllPolyLayers(view).forEach((l) => {
    l.watch('visible', () => {
      updateLabels(labels, view);
    });
  });
  const labels = new GraphicsLayer({ id: 'polygon-labels', listMode: 'hide', title: 'labels' });

  view.map.add(labels);
  watchUtils.whenTrue(view, 'stationary', () => {
    updateLabels(labels, view);
  });
};
