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
import Collection from '@arcgis/core/core/Collection';
import BasemapGalleryItem from '@arcgis/core/widgets/BasemapGallery/support/BasemapGalleryItem';
export const createAlert = () => {
  const alert = document.createElement('calcite-alert');
  alert.setAttribute('auto-dismiss', '');
  alert.setAttribute('auto-dismiss-duration', 'fast');
  alert.setAttribute('scale', 'm');
  alert.setAttribute('color', 'yellow');
  alert.id = 'basemapAlert';
  alert.classList.add(document.body.classList.contains('dark') ? 'calcite-theme-dark' : 'calcite-theme-light');
  const title = document.createElement('div');
  title.slot = 'title';
  title.textContent = 'Image basemap changed';
  const message = document.createElement('div');
  message.slot = 'message';
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
  if (
    scheme.basemapTheme === 'dark' ||
    selectedTab === 'imagery' ||
    activeBasemap.title.toLocaleLowerCase().includes('dark')
  ) {
    (renderer.symbol as __esri.SimpleFillSymbol).outline.color.r = 255;
    (renderer.symbol as __esri.SimpleFillSymbol).outline.color.g = 255;
    (renderer.symbol as __esri.SimpleFillSymbol).outline.color.b = 255;
  }
  propertyLayer.renderer = renderer;
  //propertyLayer.refresh();
};
export const addSnippet = (items: Collection<BasemapGalleryItem>) => {
  items.forEach((item, i) => {
    if (item.basemap.portalItem.snippet) {
      const listItem = document.querySelectorAll('.esri-basemap-gallery__item')[i];
      const title = listItem?.querySelector('.esri-basemap-gallery__item-title');
      if (title) {
        const div = document.createElement('div');
        div.append(title);
        const summary = document.createElement('div');
        summary.textContent = item.basemap.portalItem.snippet;
        summary.className = 'esri-basemap-gallery__item-snippet';
        div.append(summary);
        listItem.append(div);
        console.log(item.basemap.portalItem.snippet);
      }
    }
  });
};

export const basemapSelected = (
  value: string,
  view: __esri.MapView,
  basemapGallery: __esri.BasemapGallery,
  defaultId: string,
  imageryId: string,
): void => {
  const query: any = {};
  if (!boundary) {
    getBoundary(view).then((result) => {
      boundary = result;
      const inRaleigh = geometryEngine.contains(boundary, view.center);
      if (inRaleigh != lastInRaleigh) {
        lastInRaleigh = inRaleigh;
      }
      (basemapGallery.source as __esri.PortalBasemapsSource).refresh();
    });
  }
  const handle = view.watch('stationary', (stationary: boolean) => {
    if (stationary) {
      debugger;
      const inRaleigh = geometryEngine.contains(boundary, view.center);
      if (inRaleigh != lastInRaleigh) {
        lastInRaleigh = inRaleigh;
      }
      (basemapGallery.source as __esri.PortalBasemapsSource).refresh();
    }
  });
  //selected = value;
  if (value === 'imagery') {
    document.querySelector('.basemaps-base .esri-button-menu')?.removeAttribute('hidden');
    query.id = imageryId;
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
              const message = document.querySelector('#basemapAlert div[slot="message"]') as any;
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
  if (value === 'basemaps') {
    document.querySelector('.basemaps-base .esri-button-menu')?.removeAttribute('hidden');
    query.id = defaultId;
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
