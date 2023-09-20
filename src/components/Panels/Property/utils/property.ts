import Geometry from '@arcgis/core/geometry/Geometry';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import FeatureSet from '@arcgis/core/rest/support/FeatureSet';
import MapView from '@arcgis/core/views/MapView';
import { Alert } from '../../../Shell/utils/alert';
import Graphic from '@arcgis/core/Graphic';

export const getPropertyByGeometry = async (geometry: Geometry, view: MapView) => {
  const layer = view.map.allLayers.find((layer: __esri.Layer) => {
    return layer.title.includes('Property') && layer.type === 'feature';
  }) as __esri.FeatureLayer;
  const condoTable = view.map.allTables.find((layer: __esri.Layer) => {
    return layer.title.includes('Condo') && layer.type === 'feature';
  }) as __esri.FeatureLayer;
  layer.outFields = ['PIN_NUM', 'OBJECTID'];
  const result: FeatureSet = await layer?.queryFeatures({
    geometry: geometry,
    returnGeometry: true,
    outFields: ['PIN_NUM', 'OBJECTID'],
  });

  if (result.features.length) {
    const relatedCondos = await getRelatedCondos(view, result, layer, condoTable);
    return relatedCondos;
  }
};

const getRelatedCondos = async (
  view: MapView,
  featureSet: __esri.FeatureSet,
  layer: FeatureLayer,
  condoTable: FeatureLayer,
) => {
  const result = await queryRelatedCondos(layer, featureSet, condoTable);
  return result;
};

const queryRelatedCondos = async (
  table: __esri.FeatureLayer,
  properties: __esri.FeatureSet,
  condoTable: __esri.FeatureLayer,
) => {
  try {
    const oids = properties.features.map((feature: __esri.Graphic) => {
      return feature.getObjectId();
    });
    const result = await table.queryRelatedFeatures({
      objectIds: oids,
      relationshipId: getRelationshipId(table, 'PROPERTY_CONDO'),
      outFields: ['*'],
    });
    const featureSet: FeatureSet = new FeatureSet({
      features: [],
    });
    for (let [key] of Object.entries(result)) {
      result[key].features.forEach((feature: any) => {
        feature.geometry = properties.features.find((property) => {
          return property.getObjectId().toString() === key;
        })?.geometry;
        feature.layer = condoTable;
        featureSet.features.push(feature);
      });
    }
    return featureSet;
  } catch (error) {
    console.log(error);
  }
};
const getRelationshipId = (table: __esri.FeatureLayer, name: string) => {
  return table.relationships.find((rel: __esri.Relationship) => {
    return rel.name === name;
  })?.id;
};

export const clearAddressPoints = (view: MapView) => {
  view.graphics.removeMany(
    view.graphics.filter((graphic) => {
      return graphic.getAttribute('type') === 'address';
    }),
  );
};

export const clearSelectionGraphics = (view: MapView) => {
  const layer = view.map.findLayerById('select-graphics');
  if (layer) {
    (layer as __esri.GraphicsLayer).removeAll();
  }
}

export const checkMaximumRecordCount = (features: Graphic[], alertSet: Function) => {
  if (features.length >= 2000) {
    const alert: Alert = {
      show: true,
      autoClose: true,
      duration: 'fast',
      kind: 'warning',
      title: 'Maximum Records Returned',
      message: `The maximum number of records have been returned.  Not all records may be returned, please limit your search.`,
    };
    alertSet(alert);
  }    
}