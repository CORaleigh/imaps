import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import PictureMarkerSymbol from '@arcgis/core/symbols/PictureMarkerSymbol';
import MapView from '@arcgis/core/views/MapView';
import widgetSearch from '@arcgis/core/widgets/Search';
import LayerSearchSource from '@arcgis/core/widgets/Search/LayerSearchSource';
import LocatorSearchSource from '@arcgis/core/widgets/Search/LocatorSearchSource';
import { addressToLocations } from '@arcgis/core/rest/locator';
import Graphic from '@arcgis/core/Graphic';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
import Color from '@arcgis/core/Color';
import Feature from '@arcgis/core/widgets/Feature';

const marker: PictureMarkerSymbol = new PictureMarkerSymbol({
  url: "assets/pin.svg",
  height: 36,
  width: 36,
});

export const intializeLocationSearch = async (view: MapView, container: HTMLDivElement): Promise<widgetSearch> => {
  const sources: any[] = [];
  const source = await addLocationSearch();
  sources.push(source);
  const intersectionSource = await addIntersectionSource();
  sources.push(intersectionSource);
  const search = new widgetSearch({
    view: view,
    maxSuggestions: 30,
    searchAllEnabled: true,
    popupEnabled: false,
    container: container,
    goToOverride: (view, params) => {
      view.goTo({ target: params.target.target, zoom: 17 }, { duration: 1000, easing: 'ease' as any });
    },
  });
  search.on('search-clear', () => {
    removeGraphics(search.view as MapView);
  });
  search.sources.addMany(sources);
  
  search.allSources.on('after-add', (event: any) => {
    if ((event.item as any).layer) {
      const item: __esri.LayerSearchSource = event.item as __esri.LayerSearchSource;
      item.name = (event.item as any).layer.title;
      item.placeholder = (event.item as any).layer.title;
    }
    if (event.item.name.includes('World Geocoding')) {
      search.allSources.remove(event.item);
    }
  });
  return search;
};

const addIntersectionSource = async (): Promise<LayerSearchSource> => {
  const layer = new FeatureLayer({
    portalItem: {
      id: 'edb2153e06c2477995f95b27e5c24661',
    },
    title: 'Intersection',
    layerId: 0,
  });
  await layer.load();
  const source = new LayerSearchSource({
    name: 'Intersection',
    placeholder: 'Enter first street name',
    layer: layer,
    autoNavigate: false,
    resultGraphicEnabled: false,
  });
  return source;
};

const addLocationSearch = (): LocatorSearchSource => {
  const source = new LocatorSearchSource({
    name: 'Street Address',
    placeholder: 'Enter an address',
    url: 'https://maps.raleighnc.gov/arcgis/rest/services/Locators/Locator/GeocodeServer',
    autoNavigate: true,
    resultSymbol: marker,
  });
  return source;
};

export const addSearchEvents = (
  search: widgetSearch,
  view: MapView,
  setIsIntersection: Function,
  setIntersections: Function,
  setSearchTerm: Function,
  feature: Feature,
) => {
  search.on('search-complete', async (result) => {
    search.blur();
    (feature as any).graphic = null;
    setSearchTerm(result.searchTerm);
    setIsIntersection(result.results[0].source.name === 'Intersection');
    if (result.results[0].source.name === 'Intersection') {
      const featureSet: __esri.FeatureSet = await result.results[0].source.layer.queryFeatures({
        geometry: result.results[0].results[0].feature.geometry,
        returnGeometry: false,
        outFields: ['CARTONAME'],
        orderByFields: ['CARTONAME'],
      });
      setIntersections(
        featureSet.features.map((feature) => {
          return feature.getAttribute('CARTONAME');
        }),
      );
    } else {
      removeGraphics(search.view as MapView);
      const graphics: Graphic[] = [];
      result.results[0].results.forEach((result) => {
        //feature.graphic = result.feature;
        addGraphics(search.view as MapView, result.feature.geometry);
        graphics.push(result.feature);
        feature.graphic = result.feature;
      });
    }
  });
}

export const intersectingStreetSelected = async (intersection: string, searchTerm: string, view: MapView) => {
  const value = `${intersection} & ${searchTerm}`;
  const candidates = await addressToLocations(
    'https://maps.raleighnc.gov/arcgis/rest/services/Locators/Locator/GeocodeServer',
    {
      address: {
        outSpatialReference: view.spatialReference,
        SingleLine: value,
      },
    },
  );
  if (candidates.length) {
    removeGraphics(view);
    addGraphics(view, candidates[0].location);
    view.goTo({ target: candidates[0].location, zoom: 17 }, { duration: 1000, easing: 'ease' as any });
  }
};

const addGraphics = (view: __esri.MapView, geometry: __esri.Geometry): void => {
  if (geometry.type === 'point') {
    view.graphics.add(
      new Graphic({
        geometry: geometry,
        attributes: { type: 'location' },
        symbol: marker
      }),
    );
  } else {
    view.graphics.add(
      new Graphic({
        geometry: geometry,
        attributes: { type: 'location' },
        symbol: new SimpleFillSymbol({
          color: new Color([0, 255, 255, 0.25]),
          outline: {
            color: new Color([0, 255, 255, 1]),
            width: 2,
          },
        }),
      }),
    );
  }
};
const removeGraphics = (view: __esri.MapView): void => {
  view.graphics.removeMany(
    view.graphics.filter((graphic: __esri.Graphic) => {
      return graphic.getAttribute('type') === 'location';
    }),
  );
};

export const intializeLocationFeature = (view: MapView, container: HTMLDivElement) => {
  return new Feature({ view: view, container: container });
}
