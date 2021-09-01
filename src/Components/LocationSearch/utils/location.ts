/* eslint-disable @typescript-eslint/no-explicit-any */
import * as promiseUtils from '@arcgis/core/core/promiseUtils';
import Locator from '@arcgis/core/tasks/Locator';
import LayerSearchSource from '@arcgis/core/widgets/Search/LayerSearchSource';
import LocatorSearchSource from '@arcgis/core/widgets/Search/LocatorSearchSource';
//import CIMSymbol from '@arcgis/core/symbols/CIMSymbol';
import PictureMarkerSymbol from '@arcgis/core/symbols/PictureMarkerSymbol';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
//import { pinSymbol } from '../../../config/config';
import Graphic from '@arcgis/core/Graphic';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
import Color from '@arcgis/core/Color';
export const addLocationSearch = (view: __esri.MapView): Promise<LayerSearchSource> => {
  return promiseUtils.create((resolve) => {
    const locator = new Locator({
      url: 'https://maps.raleighnc.gov/arcgis/rest/services/Locators/Locator/GeocodeServer',
      outSpatialReference: view.spatialReference,
    });

    const source = new LocatorSearchSource({
      name: 'Street Address',
      placeholder: 'Enter an address',
      locator: locator,
      autoNavigate: true,
      resultSymbol: new PictureMarkerSymbol({ url: 'assets/pin.svg', height: 36, width: 36 }), //new CIMSymbol(pinSymbol as any),
    });
    resolve(source);
  });
};
export const addIntersectionSource = (): Promise<LayerSearchSource> => {
  return promiseUtils.create((resolve) => {
    const layer = new FeatureLayer({
      portalItem: {
        id: 'edb2153e06c2477995f95b27e5c24661',
      },
      title: 'Intersection',
    });
    layer.load().then(() => {
      const source = new LayerSearchSource({
        name: 'Intersection',
        placeholder: 'Enter first street name',
        layer: layer,
        autoNavigate: false,
        resultGraphicEnabled: false,
      });
      resolve(source);
    });
  });
};

export const getIntersectingStreets = (layer: FeatureLayer, geometry: __esri.Geometry): Promise<__esri.Graphic[]> => {
  return promiseUtils.create((resolve) => {
    layer
      .queryFeatures({ geometry: geometry, outFields: ['OBJECTID', 'CARTONAME'], returnGeometry: true })
      .then((featureSet) => {
        resolve(featureSet.features);
      });
  });
};

export const removeGraphics = (view: __esri.MapView): void => {
  view.graphics.removeMany(
    view.graphics.filter((graphic: __esri.Graphic) => {
      return graphic.getAttribute('type') === 'location';
    }),
  );
};

export const addGraphics = (view: __esri.MapView, geometry: __esri.Geometry): void => {
  if (geometry.type === 'point') {
    view.graphics.add(
      new Graphic({
        geometry: geometry,
        attributes: { type: 'location' },
        symbol: new PictureMarkerSymbol({ url: 'assets/pin.svg', height: 36, width: 36 }), //new CIMSymbol(pinSymbol as any),
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

export const intersectionSelected = (
  objectId: number,
  intersections: __esri.Graphic[],
  street: __esri.Graphic,
  view: __esri.MapView,
): void => {
  const intersection = intersections.find((intersection) => {
    return intersection.getObjectId() === objectId;
  }) as __esri.Graphic;

  const locator = new Locator({
    url: 'https://maps.raleighnc.gov/arcgis/rest/services/Locators/CompositeLocator/GeocodeServer',
    outSpatialReference: view.spatialReference,
  });
  locator
    .addressToLocations({
      address: { street: `${street.getAttribute('CARTONAME')} & ${intersection.getAttribute('CARTONAME')}` },
    })
    .then((candidates) => {
      if (candidates.length) {
        view.goTo({ target: candidates[0].location, zoom: 17 }, { duration: 1000, easing: 'ease' });
        removeGraphics(view);
        addGraphics(view, candidates[0].location);
      }
    });
};
