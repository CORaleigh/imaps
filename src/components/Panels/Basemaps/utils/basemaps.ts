import * as geometryEngine from '@arcgis/core/geometry/geometryEngine';
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery';
import MapView from '@arcgis/core/views/MapView';
import PortalBasemapsSource from '@arcgis/core/widgets/BasemapGallery/support/PortalBasemapsSource';
import request from '@arcgis/core/request';
import Polygon from '@arcgis/core/geometry/Polygon';
import Basemap from '@arcgis/core/Basemap';
import Color from '@arcgis/core/Color';
import * as reactiveUtils from '@arcgis/core/core/reactiveUtils';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import VectorTileLayer from '@arcgis/core/layers/VectorTileLayer';
import { Alert } from '../../../Shell/utils/alert';

export const initializeBasemaps = async (view: MapView, ref: HTMLDivElement, id: string, setSelectedTab: Function, setBlendActive: Function) => {
  const gallery = new BasemapGallery({
    container: ref,
    view: view,
    source: {
      query: `id: ${id}`,
    },
  });
  await reactiveUtils.whenOnce(() => gallery.source.basemaps.length > 0);

  const basemap = gallery.source.basemaps.find((basemap) => {
    return basemap.portalItem.title === view.map.basemap.title;
  });
  if (basemap) {
    
    setSelectedTab('maps');
    
    gallery.activeBasemap = basemap;
  }
  debugger
  gallery?.watch('activeBasemap', () => {

    setBlendActive(false);
    removeBlendBasemap(view);
  });
};


let images: BasemapGallery;

export const initializeImageMaps = async (
  view: MapView,
  ref: HTMLDivElement,
  id: string,
  alertSet: Function | undefined,
  setShowBlend: Function, 
  setSelectedTab: Function
) => {
  images = new BasemapGallery({
    container: ref,
    view: view,
    source: new PortalBasemapsSource({
      query: `id: ${id}`,
      filterFunction: filterBasemaps,
      updateBasemapsCallback: (items: Basemap[]) => {
        return items.reverse();
      },
    }),
  });
  images.watch('activeBasemap', (activeBasemap) => {
    setShowBlend(activeBasemap.portalItem.tags.includes("imagery"));
    
  });
  await reactiveUtils.whenOnce(() => images.source.basemaps.length > 0);

  const basemap = images.source.basemaps.find((basemap) => {
    return basemap.portalItem.title === view.map.basemap.title;
  });

  if (basemap) {
    setSelectedTab('images');
    images.activeBasemap = basemap;
  }
  await images.when();



  if (!imageryBoundary) {
    const boundary = await getBoundary(view);
    imageryBoundary = boundary;
    inRaleigh = checkBoundary(view.extent);
    try {
      await (images.source as PortalBasemapsSource).refresh();
    } catch {

    } finally {

    }

  }
  view.watch('extent', (extent: __esri.Extent) => viewExtentChanged(extent, view, alertSet));

  view.map.watch('basemap', async (basemap: Basemap) => {
    const isLight = await checkBasemapTheme(basemap, view);
    setPropertyColor(view, isLight);
  });
};

export const initializeEsriMaps = async (view: MapView, ref: HTMLDivElement, setSelectedTab: Function, setBlendActive: Function) => {
  const esri = new BasemapGallery({
    container: ref,
    view: view,
  });
  await reactiveUtils.whenOnce(() => esri.source.basemaps.length > 0);

  const basemap = esri.source.basemaps.find((basemap) => {
    return basemap.portalItem.title === view.map.basemap.title;
  });
  if (basemap) {
    

    setSelectedTab('esri');
    esri.activeBasemap = basemap;
  }
  esri.watch('activeBasemap', activeBasemap => {

    setBlendActive(false);
    removeBlendBasemap(view);
  });
};

let imageryBoundary: Polygon;
let inRaleigh: Boolean;
let wasRaleigh: Boolean;
const checkBoundary = (extent: __esri.Extent): Boolean => {
  return geometryEngine.intersects(extent, imageryBoundary);
};

export const filterBasemaps = (item: __esri.Basemap): boolean => {
  if (inRaleigh) {
    return true;
  } else {
    return item.portalItem.tags.includes('countywide');
  }
};

const getBoundary = async (view: __esri.MapView): Promise<Polygon> => {
    const response = await request(
      'https://maps.raleighnc.gov/images/rest/services/Orthos2020/ImageServer/queryBoundary?outSR=102100&f=json',
      { responseType: 'json' });
      return Polygon.fromJSON(response.data.shape);
};

const viewExtentChanged = (extent: __esri.Extent, view: MapView, alertSet: Function | undefined) => {
  if (imageryBoundary && images.source.basemaps.find((basemap) => images.activeBasemap.title === basemap.title)) {
    wasRaleigh = inRaleigh;
    inRaleigh = checkBoundary(view.extent);
    if (wasRaleigh !== inRaleigh) {
      (images.source as PortalBasemapsSource).refresh();
      setTimeout(() => {
        const match = images.source.basemaps.find((basemap) => view.map.basemap.title === basemap.title);
        if (!match) {
          const from = images.activeBasemap.title;
          images.activeBasemap = images.source.basemaps.at(0);
          const to = images.activeBasemap.title;
          if (alertSet) {
            const alert: Alert = {
              show: true,
              autoClose: true,
              duration: 'medium',
              kind: 'warning',
              title: 'Imagery Year Changed',
              message: `Imagery for ${from} only available inside Raleigh, base map has changed to ${to}`,
            };
            alertSet(alert);
          }
        } else {
          images.activeBasemap = match;
        }
      }, 1000);
    }
  }
};

export const updateBlendOpacity = (
  opacityValue: number,
  view: __esri.MapView,
  streetMapId: string,
  opacity: number,
) => {
  const layer = view.map.basemap.baseLayers.find((layer) => {
    if (layer.type === 'vector-tile') {
      return (layer as VectorTileLayer).portalItem.id === streetMapId;
    } else {
      return false;
    }
  });

  if (layer) {
    layer.opacity = opacity;
  }
};

export const removeBlendBasemap = (view: MapView) => {
  const layer = view.map.findLayerById('blend-basemap');
  if (layer) {
    view.map.basemap.baseLayers.remove(layer);
  }
}
let imageActiveBasemapHandle: __esri.Handle

export const tabChanged = (tab: string) => {
  if (tab !== 'images') {
    imageActiveBasemapHandle?.remove();
  }
}
export const blendBasemap = (switched: boolean, view: __esri.MapView, streetMapId: string, opacity: number) => {
  const streetMap = new VectorTileLayer({ portalItem: { id: streetMapId }, id: 'blend-basemap'});
  if (switched) {
    streetMap.opacity = opacity;
    view.map.basemap.baseLayers.add(streetMap);
  } else {
    view.map.basemap.baseLayers.remove(streetMap);
    const layer = view.map.basemap.baseLayers.find((layer) => {
      if (layer.type === 'vector-tile') {
        return (layer as VectorTileLayer).portalItem.id === streetMap.portalItem.id;
      } else {
        return false;
      }
    });

    if (layer) {
      view.map.basemap.baseLayers.remove(layer);
    }
  }
  debugger
  imageActiveBasemapHandle = images?.watch('activeBasemap', (activeBasemap) => {

    if (switched) {
      const layer = activeBasemap.baseLayers.find((layer: __esri.Layer) => {
        if (layer.type === 'vector-tile') {
          return (layer as VectorTileLayer).portalItem?.id === streetMap.portalItem.id;
        } else {
          return false;
        }
      });
      if (!layer) {
        activeBasemap.baseLayers.add(streetMap);
      }
    }
  });
};

const checkBasemapTheme = async (basemap: Basemap, view: MapView): Promise<boolean> => {
    if (basemap.baseLayers.length) {
      const baseLayer = basemap.baseLayers.find((layer) => {
        return layer.type === 'vector-tile';
      });
      if (baseLayer?.type === 'vector-tile') {
        await reactiveUtils.whenOnce(() => baseLayer.loaded);

            const background = (baseLayer as __esri.VectorTileLayer).getStyleLayer('background');
            if (background) {
              const color: Color = new Color(background.paint['background-color']);
              view.background = { color: color } as __esri.ColorBackground;
              return (color as any).isBright;
            } else {
              return true;
            }

      } else if (!baseLayer && basemap.baseLayers.getItemAt(0).type === 'imagery') {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
};

const setPropertyColor = (view: MapView, isLight: boolean) => {
  const layer = view.map.allLayers.find((layer) => {
    return layer.title.includes('Property') && layer.type === 'feature';
  });
  if (layer) {
    const renderer = ((layer as FeatureLayer)?.renderer as __esri.SimpleRenderer).clone();
    if (isLight) {
      (renderer.symbol as __esri.SimpleFillSymbol).outline.color.r = 0;
      (renderer.symbol as __esri.SimpleFillSymbol).outline.color.g = 0;
      (renderer.symbol as __esri.SimpleFillSymbol).outline.color.b = 0;
    } else {
      (renderer.symbol as __esri.SimpleFillSymbol).outline.color.r = 255;
      (renderer.symbol as __esri.SimpleFillSymbol).outline.color.g = 255;
      (renderer.symbol as __esri.SimpleFillSymbol).outline.color.b = 255;
    }
    (layer as FeatureLayer).renderer = renderer;
  }
};
