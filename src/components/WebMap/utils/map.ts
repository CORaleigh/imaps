import MapView from '@arcgis/core/views/MapView';
import WebMap from '@arcgis/core/WebMap';

import { constraints } from './constraints';
import Graphic from '@arcgis/core/Graphic';
import UniqueValueRenderer from '@arcgis/core/renderers/UniqueValueRenderer';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import FeatureSet from '@arcgis/core/rest/support/FeatureSet';
import { addWidgets } from './widgets';
// import { handlePolygonLabels } from "./labeling";
import * as reactiveUtils from '@arcgis/core/core/reactiveUtils';
import Basemap from '@arcgis/core/Basemap';
import Color from '@arcgis/core/Color';
import IdentityManager from '@arcgis/core/identity/IdentityManager';
import Collection from '@arcgis/core/core/Collection';

export const initializeMap = async (
  ref: HTMLDivElement,
  mapId: string,
  geometrySet: Function,
  widgetActivated: Function,
): Promise<MapView> => {
  const view = new MapView({
    container: ref,
    constraints: constraints as any,
  });
  hideLogin();
  const webmap: WebMap = await getWebMap(mapId);
  view.map = webmap;
  addWidgets(view, widgetActivated);
  await view.when();

  removeGraphicsLayers(view);
  view.map.add(selectionLayer);
  view.map.add(selectionCluster);
  customizePopup(view);
  view.popup.on('trigger-action', (event) => {
    if (event.action.title === 'Select') {
      geometrySet(view.popup.location);
    }
  });
  await reactiveUtils.whenOnce(() => view.map.basemap.loaded);
  const color = await getBackgroundColor(view.map.basemap);
  if (color) {
    view.background = { color: color } as __esri.ColorBackground;
  }
  //addUnloadListeners(view);

  view.on('hold', (event) => {
    geometrySet(event.mapPoint);
  });
  await view.when();
  saveMap(view);
  view.watch('extent', () => {
    const config = getConfig();
    const data = window.localStorage.getItem(`imaps_calcite_${config}`);
    if (data) {
      const json = JSON.parse(window?.localStorage?.getItem(`imaps_calcite_${config}`) as string);

      json.initialState = {
        viewpoint: {
          targetGeometry: view.extent,
        },
      };
      window.localStorage.setItem(`imaps_calcite_${config}`, JSON.stringify(json));
    }
  });
  view.map.watch('basemap', () => {
    const config = getConfig();
    const data = window.localStorage.getItem(`imaps_calcite_${config}`);
    if (data) {
      const json = JSON.parse(window?.localStorage?.getItem(`imaps_calcite_${config}`) as string);

      json.baseMap = view.map.basemap;
      window.localStorage.setItem(`imaps_calcite_${config}`, JSON.stringify(json));
    }
  });

  return view;
};

const addUnloadListeners = (view: __esri.MapView) => {
  const handleBeforeUnload = () => {
    saveMap(view);
  };
  const handleUnload = () => {
    saveMap(view);
  };
  const handleVisibilityChange = () => {
    if (document.visibilityState === 'hidden') {
      saveMap(view);
    }
  };
  window.addEventListener('beforeunload', handleBeforeUnload, {passive: true});
  window.addEventListener('unload', handleUnload, {passive: true});
  document.addEventListener('visibilitychange', handleVisibilityChange, {passive: true});
};
const isSearchable = (layer: __esri.Layer, webmap: any) => {
  const found = webmap.applicationProperties.viewing.search.layers.find((searchLayer: __esri.SearchLayer) => {
    return searchLayer.id === layer.id;
  });
  return found;
};

const getConfig = () => {
  const url = new URL(window.location as any);
  let config: string = '';
  if (url.searchParams.get('config')) {
    config += url.searchParams.get('config');
  }
  return config;
};

const getWebMap = async (mapId: string): Promise<WebMap> => {
  //return new Promise(async (resolve, reject) => {
  let webmap: any;
  const config = getConfig();
  if (window.localStorage.getItem(`imaps_calcite_${config}`) && window.localStorage.getItem('imaps_reset') !== 'true') {
    webmap = WebMap.fromJSON(JSON.parse(window?.localStorage?.getItem(`imaps_calcite_${config}`) as string));
    const url = new URL(window.location as any);
    if (url.searchParams.get('layers')) {
      const layers = url.searchParams.get('layers')?.split(',');
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
    return webmap;
  } else {
    window.localStorage.removeItem('imaps_reset');
    webmap = new WebMap({
      portalItem: {
        id: mapId,
      },
    });
    await webmap.load();
    const groups = webmap.allLayers
      .filter((layer: __esri.Layer) => {
        return layer.type === 'group';
      })
      .toArray();
    groups.forEach((group: __esri.Layer) => {
      (group as __esri.GroupLayer).removeMany(
        (group as __esri.GroupLayer).allLayers
          .filter((layer) => {
            return !layer.visible && !layer.title.includes('Property') && !isSearchable(layer, webmap);
          })
          .toArray(),
      );
    });
    return webmap;
  }
  // });
};
const removeGraphicsLayers = (view: MapView) => {
  view.map.removeMany([view.map.findLayerById('selection-layer'), view.map.findLayerById('feature-table')]);
  view.map.removeMany(
    view.map.allLayers
      .filter((layer: any) => {
        return layer.type === 'map-notes';
      })
      .toArray(),
  );
};

const getAllGroups = (layers: any) => {
  return layers.reduce((acc: any, emp: any) => {
    return acc.concat(emp.layerType === 'GroupLayer' ? [emp, ...getAllGroups(emp.layers)] : []);
  }, []);
};
export const saveMap = async (view: MapView) => {
  if (view && view?.ready) {
    const map = (view.map as any).toJSON();
    const groups = getAllGroups(map.operationalLayers);

    groups.forEach((group: any) => {
      if (group.layerType !== 'ArcGISMapServiceLayer') {
        group.layers = group.layers.filter(function (layer: any) {
          return (
            layer.visibility || layer.title.includes('Property') || isSearchable(layer, map) || layer.type === 'group'
          );
        });
      }
    });
    map.initialState = {
      viewpoint: {
        targetGeometry: view.extent,
      },
    };
    const config = getConfig();

    window.localStorage.setItem(`imaps_calcite_${config}`, JSON.stringify(map));
    // const map = WebMap.fromJSON(JSON.parse(JSON.stringify(a)));
    // try {
    //   await map.loadAll();

    // } catch (error) {

    // }
    // const groups = map.allLayers
    //   .filter((layer: any) => {
    //     return layer.type === 'group';
    //   }).toArray();
    // groups.forEach((group: any) => {
    //   (group as __esri.GroupLayer).removeMany(
    //     (group as __esri.GroupLayer).allLayers
    //       .filter((layer) => {
    //         return (
    //           !layer.visible &&
    //           !layer.title.includes('Property') &&
    //           !isSearchable(layer, map) &&
    //           layer.type !== 'group'
    //         );
    //       })
    //       .toArray(),
    //   );
    // });
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
    // const json = (map as any).toJSON();
    // json.initialState.viewpoint.targetGeometry = view.extent;

    //window.localStorage.removeItem('imaps_calcite');
  }
};
const clusterConfig = {
  type: 'cluster',
  clusterRadius: '100px',
  clusterMinSize: '24px',
  clusterMaxSize: '60px',
  labelingInfo: [
    {
      deconflictionStrategy: 'none',
      labelExpressionInfo: {
        expression: "Text($feature.cluster_count, '#,###')",
      },
      symbol: {
        type: 'text',
        color: '#004a5d',
        font: {
          weight: 'bold',
          family: 'Noto Sans',
          size: '12px',
        },
      },
      labelPlacement: 'center-center',
    },
  ],
};
const selectionLayer: FeatureLayer = new FeatureLayer({
  source: [],
  editingEnabled: true,
  listMode: 'hide',
  legendEnabled: false,
  geometryType: 'polygon',
  id: 'selection-layer',
  objectIdField: 'OBJECTID',
  spatialReference: { wkid: 102100 },
  orderBy: [{ field: 'selected', order: 'ascending' }],
  fields: [
    { name: 'OBJECTID', type: 'oid' },
    { name: 'selected', type: 'small-integer' },
    { name: 'PIN_NUM', type: 'string' },
  ],
  renderer: {
    type: 'unique-value',
    field: 'selected',
    uniqueValueInfos: [
      {
        value: 1,
        symbol: {
          type: 'simple-fill',
          outline: {
            type: 'simple-line',
            color: [217, 66, 70, 1],
            width: 2,
            style: 'solid',
          },
          style: 'none',
        },
      } as any,
      {
        value: 2,
        symbol: {
          type: 'simple-fill',
          outline: {
            type: 'simple-line',
            color: [255, 227, 76, 1],
            width: 2,
            style: 'solid',
          },
          style: 'none',
        },
      } as any,
    ],
  } as UniqueValueRenderer,
  minScale: 20000,
});

const selectionCluster: FeatureLayer = new FeatureLayer({
  source: [],
  editingEnabled: true,
  listMode: 'hide',
  featureReduction: clusterConfig as any,
  legendEnabled: false,
  geometryType: 'point',
  id: 'selection-cluster',
  objectIdField: 'OBJECTID',
  spatialReference: { wkid: 102100 },
  orderBy: [{ field: 'selected', order: 'ascending' }],
  fields: [
    { name: 'OBJECTID', type: 'oid' },
    { name: 'selected', type: 'small-integer' },
    { name: 'PIN_NUM', type: 'string' },
  ],
  effect: 'drop-shadow(1px, 1px, 1px)',
  renderer: {
    type: 'simple',
    symbol: {
      type: 'simple-marker',
      size: 8,
      color: '#ffe34c',
      outline: {
        color: 'rgba(153, 130, 0, 1)',
        width: 2,
      },
    },
  } as any,
  maxScale: 20000,
});
export const displayProperties = async (properties: Graphic[], view: MapView) => {
  const featureSet: FeatureSet = await selectionLayer?.queryFeatures({
    where: '1=1',
    returnGeometry: false,
    outFields: ['OBJECTID'],
  });

  await selectionLayer?.applyEdits({
    deleteFeatures: featureSet.features,
  });
  await selectionLayer.applyEdits({ addFeatures: properties });
  updateClusters(properties);
};

const updateClusters = async (properties: Graphic[]) => {
  const points: Graphic[] = [];

  properties.forEach((property) => {
    const geometry = property.geometry as __esri.Polygon;
    points.push(
      new Graphic({
        attributes: property.attributes,
        geometry: geometry ? geometry.centroid : undefined,
      }),
    );
  });
  const featureSet: FeatureSet = await selectionCluster?.queryFeatures({
    where: '1=1',
    returnGeometry: false,
    outFields: ['OBJECTID'],
  });
  await selectionCluster?.applyEdits({
    deleteFeatures: featureSet.features,
  });

  await selectionCluster?.applyEdits({
    addFeatures: points,
  });
};

const getBackgroundColor = async (basemap: Basemap): Promise<Color | null> => {
  const baseLayer = basemap.baseLayers.find((layer) => {
    return layer.type === 'vector-tile';
  });
  if (!baseLayer) {
    return null;
  }

  await reactiveUtils.whenOnce(() => baseLayer?.loaded);
  const background = (baseLayer as __esri.VectorTileLayer).getStyleLayer('background');
  if (background) {
    const color: Color = new Color(background.paint['background-color']);
    return color;
  } else {
    return null;
  }
};

export const hideLogin = () => {
  IdentityManager.on('dialog-create', async (e) => {
    IdentityManager.dialog.visible = false;
    setTimeout(() => {
      (IdentityManager.dialog as any).content.emit('cancel', {});
    }, 250);
    // await IdentityManager.dialog.when();
    // const container: any = IdentityManager.dialog.container;
    // const cancelBtn: HTMLInputElement = container.querySelector('.esri-button--secondary');
    // cancelBtn.click();
  });
};

const customizePopup = async (view: __esri.MapView) => {
  const propertyLayer = view.map.allLayers.find((layer) => {
    return layer.type === 'feature' && layer.title.startsWith('Property');
  }) as __esri.FeatureLayer;
  await view.whenLayerView(propertyLayer);
  if (propertyLayer) {
    if (propertyLayer.popupTemplate) {
      propertyLayer.popupTemplate.actions = new Collection([
        {
          title: 'Select',
          id: 'property-select',
          className: 'esri-icon-search',
        } as __esri.ActionButton,
      ]);
    }
  }
};
