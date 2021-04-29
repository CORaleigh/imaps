/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
let stateHandle: __esri.WatchHandle;
let lastInRaleigh = false;
let boundary: __esri.Geometry;
import esriRequest from '@arcgis/core/request';
import Polygon from '@arcgis/core/geometry/Polygon';
import * as geometryEngine from '@arcgis/core/geometry/geometryEngine';
import * as promiseUtils from '@arcgis/core/core/promiseUtils';
import * as type from '@arcgis/core/smartMapping/symbology/type';

export const createAlert = () => {
  const alert = document.createElement('calcite-alert');
  alert.setAttribute('auto-dismiss', '');
  alert.setAttribute('auto-dismiss-duration', 'fast');
  alert.setAttribute('scale', 'm');
  alert.setAttribute('color', 'yellow');
  alert.setAttribute('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  const title = document.createElement('div');
  title.slot = 'alert-title';
  title.textContent = 'Image basemap changed';
  const message = document.createElement('div');
  message.slot = 'alert-message';
  message.textContent = 'Image basemap changed';
  alert.appendChild(title);
  alert.appendChild(message);
  document.body.appendChild(alert);
};

export const basemapChanged = (activeBasemap: __esri.Basemap, view: __esri.MapView, selectedTab: string) => {
  const scheme = type.getSchemes({ basemap: activeBasemap, geometryType: 'polygon' });

  const propertyLayer = view.map.allLayers.find((layer) => {
    return layer.type === 'feature' && layer.title.startsWith('Property');
  }) as __esri.FeatureLayer;
  const renderer = (propertyLayer.renderer as __esri.SimpleRenderer).clone();
  if (scheme.basemapTheme === 'light') {
    (renderer.symbol as __esri.SimpleFillSymbol).outline.color.r = 0;
    (renderer.symbol as __esri.SimpleFillSymbol).outline.color.g = 0;
    (renderer.symbol as __esri.SimpleFillSymbol).outline.color.b = 0;
  }
  if (scheme.basemapTheme === 'dark' || selectedTab === 'imagery') {
    (renderer.symbol as __esri.SimpleFillSymbol).outline.color.r = 255;
    (renderer.symbol as __esri.SimpleFillSymbol).outline.color.g = 255;
    (renderer.symbol as __esri.SimpleFillSymbol).outline.color.b = 255;
  }
  propertyLayer.renderer = renderer;
  propertyLayer.refresh();
};
export const basemapSelected = (value: string, view: __esri.MapView, basemapGallery: __esri.BasemapGallery): void => {
  const query: any = {};
  if (!boundary) {
    getBoundary(view).then((result) => {
      boundary = result;
    });
  }
  const handle = view.watch('stationary', (stationary: boolean) => {
    if (stationary) {
      const inRaleigh = geometryEngine.contains(boundary, view.center);
      if (inRaleigh != lastInRaleigh) {
        lastInRaleigh = inRaleigh;

        (basemapGallery.source as __esri.PortalBasemapsSource).refresh();
      }
    }
  });
  //selected = value;
  if (value === 'imagery') {
    document.querySelector('.basemaps-base .esri-button-menu')?.removeAttribute('hidden');
    query.id = '492386759d264d49948bf7f83957ddb9';
    (basemapGallery.source as __esri.PortalBasemapsSource).filterFunction = filterBasemaps;
    (basemapGallery.source as __esri.PortalBasemapsSource).updateBasemapsCallback = (items: __esri.Basemap[]) => {
      return items.reverse();
    };
    setTimeout(() => {
      stateHandle = (basemapGallery.source as __esri.PortalBasemapsSource).watch('state', (state) => {
        if (state === 'ready' && value === 'imagery') {
          const basemap = basemapGallery.source.basemaps.find((basemap) => {
            return basemap.portalItem.title === view.map.basemap.title;
          });
          if (!basemap && !lastInRaleigh && view.map.basemap.portalItem) {
            setTimeout(() => {
              const message = document.querySelector('div[slot="alert-message"]') as any;
              message.textContent = `${
                view.map.basemap.portalItem.title
              } imagery not available outside Raleigh, switching to ${
                basemapGallery.source.basemaps.getItemAt(0).portalItem.title
              }`;
              view.map.basemap = basemapGallery.source.basemaps.getItemAt(0);
              document.querySelector('calcite-alert')?.setAttribute('active', '');
            });
          }
        }
      });
    }, 1000);
  } else if (value === 'basemaps') {
    document.querySelector('.basemaps-base .esri-button-menu')?.removeAttribute('hidden');
    query.id = 'f6329364e80c438a958ce74aadc3a89f';
  } else {
    document.querySelector('.basemaps-base .esri-button-menu')?.setAttribute('hidden', '');

    handle?.remove();
    stateHandle?.remove();
    (basemapGallery.source as __esri.PortalBasemapsSource).filterFunction = () => {
      return true;
    };
    (basemapGallery.source as __esri.PortalBasemapsSource).updateBasemapsCallback = (items: __esri.Basemap[]) => {
      return items;
    };
  }
  (basemapGallery.source as __esri.PortalBasemapsSource).query = query;
};

export const filterBasemaps = (item: __esri.Basemap): boolean => {
  if (lastInRaleigh) {
    return true;
  } else {
    return item.portalItem.tags.includes('countywide');
  }
};

export const getBoundary = (view: __esri.MapView): Promise<__esri.Geometry> => {
  return promiseUtils.create((resolve) => {
    esriRequest(
      'https://maps.raleighnc.gov/images/rest/services/Orthos2020/ImageServer/queryBoundary?outSR=102100&f=json',
      { responseType: 'json' },
    ).then((response) => {
      const geometry: Polygon = Polygon.fromJSON(response.data.shape);
      lastInRaleigh = geometryEngine.contains(geometry, view.center);
      resolve(geometry);
    });
  });
};
