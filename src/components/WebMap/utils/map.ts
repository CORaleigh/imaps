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
import Collection from '@arcgis/core/core/Collection';
import esriConfig from '@arcgis/core/config';
import * as geometryEngine from '@arcgis/core/geometry/geometryEngine';
import { Alert } from '../../Shell/utils/alert';
import Geometry from '@arcgis/core/geometry/Geometry';
import Extent from '@arcgis/core/geometry/Extent';

export const initializeMap = async (
  ref: HTMLDivElement,
  mapId: string,
  geometrySet: (geometry: Geometry | undefined) => void,
  widgetActivated: (
    view: MapView,
    setActiveTool?: (activeTool: string) => void,
  ) => void,
  alertSet?: (alert: Alert) => void,
): Promise<MapView> => {
  
  let view = new MapView({
    container: ref,
    constraints: constraints as any,
  });
  const config = getConfig();
  esriConfig.request.useIdentity = false;

  const webmap: WebMap = await getWebMap(mapId, alertSet);
  view.map = webmap;
  

  
  const lastModified = await getWebMapModifiedDate(mapId);
  if (modifiedSinceRefresh(lastModified, config) && alertSet) {
    //resetImaps(view);
    const visibleLayers = getVisibleLayers(view.map.allLayers);
    window.localStorage.setItem(`imaps_visible_layers_${config}`, JSON.stringify(visibleLayers));    
    view = new MapView({
      container: ref,
      constraints: constraints as any,
      map: await loadWebMapFromPortal(mapId, config)
    });
  }
  const storedExtent = window.localStorage.getItem(`imaps_extent_${config}`);
  if (storedExtent) {
    view.extent = Extent.fromJSON(JSON.parse(storedExtent));
    //window.localStorage.removeItem(`imaps_extent_${config}`)
  }  
  addWidgets(view, widgetActivated);
  await view.when().catch((error) => {
    const alert: Alert = {
      show: true,
      autoClose: false,
      duration: 'fast',
      kind: 'danger',
      icon: 'error',
      title: 'WebGL 2 Required',
      message: `Sorry, it appears that your graphics card doesn't support WebGL 2, which is required for this application. We recommend checking your browser settings or using a device with a more capable graphics card or updating your current hardware if possible. If you have any questions or need further assistance, please don't hesitate to contact us.  We have also made the previous version available, which does not have this requirement, however it will not receive any future updates.`,
      link: {
        text: 'Previous Version',
        url: 'https://maps.raleighnc.gov/imaps-legacy',
        show: true,
      },
    };
    if (alertSet) {
      alertSet(alert);
    }
  });



  removeGraphicsLayers(view);
  view.map.add(selectionLayer);
  view.map.add(selectionCluster);
  customizePopup(view);
  //in preparation for lazying loading of popups at 4.27
  reactiveUtils
    .whenOnce(() => view.popup.actions != null)
    .then(() => {
      view.popup.dockOptions.position = 'top-left';

      view.popup.on('trigger-action', (event) => {
        if (event.action.title === 'Select') {
          geometrySet(
            geometryEngine.geodesicBuffer(
              view.popup.selectedFeature.geometry,
              -2,
              'feet',
            ) as Geometry,
          );
        }
      });
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
  addStreets(view);
  saveMap(view);
  view.watch('extent', () => {
    const config = getConfig();
    const data = window.localStorage.getItem(`imaps_webmap_${config}`);
    if (data) {
      const json = JSON.parse(
        window?.localStorage?.getItem(`imaps_webmap_${config}`) as string,
      );
      if (view.extent) {
        json.initialState = {
          viewpoint: {
            targetGeometry: view.extent,
          },
        };
      } else {
        json.initialState = {};
      }

      window.localStorage.setItem(
        `imaps_webmap_${config}`,
        JSON.stringify(json),
      );
    }
    if (view.extent) {
      window.localStorage.setItem(`imaps_extent_${config}`, JSON.stringify(view.extent.toJSON()))
    }    
  });
  view.map.watch('basemap', () => {
    const config = getConfig();
    const data = window.localStorage.getItem(`imaps_webmap_${config}`);
    if (data) {
      const json = JSON.parse(
        window?.localStorage?.getItem(`imaps_webmap_${config}`) as string,
      );

      json.baseMap = view.map.basemap;
      window.localStorage.setItem(
        `imaps_webmap_${config}`,
        JSON.stringify(json),
      );
    }
  });

  return view;
};

const isSearchable = (layer: __esri.Layer, webmap: __esri.WebMap) => {
  const found = webmap.applicationProperties.viewing.search.layers.find(
    (searchLayer: __esri.SearchLayer) => {
      return searchLayer.id === layer.id;
    },
  );
  return found;
};

const getConfig = () => {
  const url = new URL(window.location as any);
  let config: string = '';
  if (url.searchParams.get('id')) {
    config += url.searchParams.get('id');
  } else if (url.searchParams.get('app')) {
    config += url.searchParams.get('app');
  }
  return config;
};

const modifiedSinceRefresh = (lastModified: Date, config: string) => {
  let lastRefresh = window.localStorage.getItem(`imaps_last_refresh_${config}`);
  if (!lastRefresh) {
    lastRefresh = new Date().toLocaleString();
    window.localStorage.setItem(`imaps_last_refresh_${config}`, lastRefresh);
  }
  return lastModified > new Date(lastRefresh);
}

const getWebMap = async (mapId: string, alertSet: ((alert: Alert) => void) | undefined): Promise<WebMap> => {
  let webmap: WebMap;
  const config = getConfig();
  if (
    window.localStorage.getItem(`imaps_webmap_${config}`) &&
    window.localStorage.getItem('imaps_reset') !== 'true'
  ) {
    try {
      
      webmap = WebMap.fromJSON(
        JSON.parse(
          window?.localStorage?.getItem(`imaps_webmap_${config}`) as string,
        ),
      );
      
      await webmap.load();

      //reload map from portal if layer ID not corret for Deed or Photos tables
      let reload = false;
      webmap.tables.forEach(table => {
        if (table.type === 'feature') {
          const featureLayer = table as __esri.FeatureLayer;
          if (featureLayer.url.includes('/Property/') && featureLayer.layerId === 3 && table.title !== 'Deeds' && table.title !== 'Books') {
            reload = true;
          }
          if (featureLayer.url.includes('/Property/') && featureLayer.layerId === 2 && table.title !== 'Photos') {
            reload = true;
          }  
        }
      
      });

      if (!webmap.basemap || reload) {
        console.log('reload')
        return loadWebMapFromPortal(mapId, config);
      }
    } catch (error) {
      console.log(error);
      return loadWebMapFromPortal(mapId, config);
    }
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

        matches.forEach((layer: __esri.Layer) => {
          if (layer.parent) {
            if (layer.parent instanceof __esri.Layer) {
              if (webmap.findLayerById(layer.parent.id).type === 'group') {
                const parent: __esri.GroupLayer = webmap.findLayerById(layer.parent.id) as __esri.GroupLayer;
                if (parent) {
                  parent.add(layer);
                  parent.visible = true;
                  if (parent.parent) {
                    (parent.parent as __esri.GroupLayer).visible = true;
                  }
                  layer.visible = true;
                }
              }
            }
          }
        });
      }
    }
    return webmap;
  } else {
    return loadWebMapFromPortal(mapId, config);
  }
};

const getWebMapModifiedDate = async (mapId: string) => {
  const webmap = new WebMap({
    portalItem: {
      id: mapId,
    },
  });
  await webmap.load();
  return webmap.portalItem.modified;
}

const loadWebMapFromPortal = async (mapId: string, config: string) => {
  window.localStorage.removeItem('imaps_reset');
  const webmap = new WebMap({
    portalItem: {
      id: mapId,
    },
  });
  await webmap.load();
  window.localStorage.setItem(`imaps_last_refresh_${config}`, new Date().toLocaleString());
  console.log(`iMAPS refreshed at ${new Date().toLocaleString()}`)
  await makeLayersVisibleAfterRefresh(webmap);
  const groups = webmap.allLayers
    .filter((layer: __esri.Layer) => {
      return layer.type === 'group';
    })
    .toArray();
  groups.forEach((group: __esri.Layer) => {
    (group as __esri.GroupLayer).removeMany(
      (group as __esri.GroupLayer).allLayers
        .filter((layer) => {
          return (
            !layer.visible &&
            !layer.title.includes('Property') &&
            !isSearchable(layer, webmap)
          );
        })
        .toArray(),
    );
  });
  webmap.layers.removeMany(
    webmap.layers.filter((layer: __esri.Layer) => {
      return layer.type !== 'group' && !layer.visible;
    }),
  );  
  return webmap;
};
const removeGraphicsLayers = (view: MapView) => {
  view.map.removeMany([
    view.map.findLayerById('selection-layer'),
    view.map.findLayerById('feature-table'),
  ]);
  view.map.removeMany(
    view.map.allLayers
      .filter((layer: __esri.Layer) => {
        return layer.type === 'map-notes';
      })
      .toArray(),
  );
};

const getAllGroups = (layers: __esri.Layer[]): __esri.GroupLayer[] => {
  return layers.reduce((acc: __esri.Layer[], layer: any) => {
    return acc.concat(
      layer.type === 'group' ? [layer, ...getAllGroups((layer as __esri.GroupLayer).layers.toArray())] : []
    );
  }, []) as __esri.GroupLayer[];
};
export const saveMap = async (view: MapView) => {
  if (view && view?.ready) {
    const map = WebMap.fromJSON((view.map as any).toJSON());
    await map.load();
    const groups = getAllGroups(map.allLayers.toArray());//map.operationalLayers);
    groups.forEach((group: __esri.GroupLayer) => {
      const layersArray = group.layers.toArray(); 
      const layersToKeep = layersArray.filter((layer: __esri.Layer) => {
        return (
          layer.visible || // Correct visibility property
          layer.title.includes('Property') ||
          isSearchable(layer, map) ||
          layer.type === 'group' && (layer.parent as __esri.Layer).visible
        );
      });
    
      // Remove the layers that should not be kept
      const layersToRemove = layersArray.filter(layer => !layersToKeep.includes(layer));
      
      group.layers.removeMany(layersToRemove); // Use removeMany to remove layers
    });
    if (view.extent) {
      map.initialState = {
        viewpoint: {
          targetGeometry: view.extent,
        },
      };
    } else {
      map.initialState = {};
    }

    const config = getConfig();

    window.localStorage.setItem(`imaps_webmap_${config}`, JSON.stringify(map));
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

    //window.localStorage.removeItem('imaps_webmap');
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
export const displayProperties = async (
  properties: Graphic[],
  view: MapView,
) => {
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
  const background = (baseLayer as __esri.VectorTileLayer).getStyleLayer(
    'background',
  );
  if (background) {
    const color: Color = new Color(background.paint['background-color']);
    return color;
  } else {
    return null;
  }
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

const addStreets = (view: MapView) => {
  try {
    let streets = view.map.findLayerById('streets-popup-layer');
    if (!streets) {
      streets = new FeatureLayer({
        portalItem: {
          id: '0dd28958f9a344dba14d1c4500b4842d',
        },
        id: 'streets-popup-layer',
        opacity: 0,
        visible: true,
        listMode: 'hide',
        legendEnabled: false,
      });
      view.map.add(streets);
    } else {
      streets.listMode = 'hide';
    }
  } catch {
    console.log('cannot add streets layer');
  }
};

const getVisibleLayers = (layers: __esri.Collection<__esri.Layer>) => {
  const visibleLayers: string[] = [];
  layers.forEach(layer => {
    if (layer.visible && layer.listMode !== 'hide') {
      console.log(layer.title, layer.type, layer.parent)
      // If the layer is a group layer, call the function recursively
      if (layer.type === "group") {
        getVisibleLayers((layer as __esri.GroupLayer).layers);
      } else {
        // If it's a non-group layer, add it to the visibleLayers array
        if (layer.parent) {
          
          if ((layer.parent as __esri.Layer).visible) {
            visibleLayers.push(layer.id);
          }
        } else {
          visibleLayers.push(layer.id);          
        }
      }
    }
  });
  return visibleLayers;
}

export const resetImaps = (view: MapView) => {
  const config = getConfig();
  const visibleLayers = getVisibleLayers(view.map.allLayers);
  window.localStorage.setItem(`imaps_visible_layers_${config}`, JSON.stringify(visibleLayers));
  if (view.extent) {
    window.localStorage.setItem(`imaps_extent_${config}`, JSON.stringify(view.extent.toJSON()))
  }
 // window.localStorage.setItem('imaps_reset', 'true');
  const url = new URL(window.location as any);
  let id: string = '';
  if (url.searchParams.get('id')) {
    id += url.searchParams.get('id');
  } else if (url.searchParams.get('app')) {
    id += url.searchParams.get('app');
  }
  window.localStorage.removeItem(`imaps_webmap_${id}`);
  window.localStorage.removeItem('imaps_alert_read');
  window.localStorage.removeItem('imaps_history');
  window.localStorage.removeItem('imaps_table_template');
  window.location.reload();
}  


const makeLayersVisibleAfterRefresh = (map: WebMap) => {
  return new Promise((resolve, reject) => {
    const config = getConfig();
    const storedLayers = window.localStorage.getItem(`imaps_visible_layers_${config}`);
    console.log(storedLayers);
    if (storedLayers) {
      window.localStorage.removeItem(`imaps_visible_layers_${config}`);
      const storedVisibleLayers = JSON.parse(storedLayers);
      if (Array.isArray(storedVisibleLayers) && storedVisibleLayers.every(item => typeof item === 'string')) {
        (storedVisibleLayers as string[]).forEach(storedLayer => { 
          map.allLayers.forEach(layer => {
            if (storedVisibleLayers.includes(layer.id)) {
              layer.visible = true;
              console.log(`Layer visible: ${layer.title}`);
              // Traverse up to all parent group layers
              let parentLayer = layer.parent as __esri.GroupLayer;
              while (parentLayer) {
                if (parentLayer.type === "group") {
                  (parentLayer as __esri.GroupLayer).visible = true; // Make parent group layer visible
                }
                parentLayer = parentLayer.parent as __esri.GroupLayer; // Move to the next parent layer
              }
            }
          });
        })
      }
    }
    resolve(true);
  });

}
