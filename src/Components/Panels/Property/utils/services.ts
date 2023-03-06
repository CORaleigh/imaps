import Graphic from '@arcgis/core/Graphic';
import MapView from '@arcgis/core/views/MapView';
import * as geometryEngine from '@arcgis/core/geometry/geometryEngine';
import WebMap from '@arcgis/core/WebMap';
function loadWebmap(serviceLayers: any[]): Promise<__esri.Layer[]> {
  return new Promise(async (resolve, reject) => {
    const map = new WebMap({
      portalItem: {
        id: '95092428774c4b1fb6a3b6f5fed9fbc4',
      },
    });

    await map.load();
    const layers = map.allLayers.filter((layer: __esri.Layer) => {
      return serviceLayers.includes(layer.title);
    });
    resolve(layers.toArray());
  });
}
async function getServiceData(
  layers: any[],
  graphic: Graphic,
  setFeatures: Function,
  setSearching: Function,
  promises: Promise<__esri.FeatureSet>[],
) {
  layers?.forEach((layer) => {
    if (layer.type === 'feature') {
      promises.push(
        (layer as __esri.FeatureLayer).queryFeatures({
          geometry: geometryEngine.geodesicBuffer((graphic as __esri.Graphic).geometry, -5, 9002) as __esri.Geometry,
          outFields: ['*'],
          returnGeometry: true,
        }),
      );
    }
  });
  const list: Graphic[] = [];
  if (promises.length) {
    const results = await Promise.all(promises);
    results.forEach((result) => {
      if (result.features.length) {
        result.features.forEach((feature: __esri.Graphic) => {
          list.push(feature);
        });
      }
    });
    setSearching(false);
    setFeatures(list);
  }
}
export function getServices(
  e: any,
  services: any[],
  view: MapView,
  graphic: Graphic,
  setFeatures: Function,
  setSearching: Function,
) {
  requestAnimationFrame(async () => {
    if ((e.target as HTMLCalciteAccordionItemElement).hasAttribute('expanded')) {
      setSearching(true);
      setFeatures([]);
      const title = (e.target as HTMLCalciteAccordionItemElement).getAttribute('item-title');
      const service = services.find((s) => {
        return s.group.title === title;
      });
      const promises: Promise<__esri.FeatureSet>[] = [];

      if (service) {
        let layers = view?.map.allLayers.filter((layer) => {
          return service.group.layers.includes(layer.title);
        });

        if (layers.length !== service.group.layers.length) {
          const layers = await loadWebmap(service.group.layers);
          getServiceData(layers, graphic, setFeatures, setSearching, promises);
        } else {
          getServiceData(layers.toArray(), graphic, setFeatures, setSearching, promises);
        }
      }
    }
  });
}
