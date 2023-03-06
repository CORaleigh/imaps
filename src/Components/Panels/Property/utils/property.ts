import Geometry from "@arcgis/core/geometry/Geometry";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import FeatureSet from "@arcgis/core/rest/support/FeatureSet";
import MapView from "@arcgis/core/views/MapView";

export function getPropertyByGeometry(geometry: Geometry, view: MapView) {
  return new Promise((resolve, reject) => {
    const layer = view.map.allLayers.find((layer: __esri.Layer) => {
      return layer.title.includes("Property") && layer.type === "feature";
    }) as __esri.FeatureLayer;
    const condoTable = view.map.allTables.find((layer: __esri.Layer) => {
      return layer.title.includes("Condo") && layer.type === "feature";
    }) as __esri.FeatureLayer;
    layer.outFields = ["PIN_NUM", "OBJECTID"];
    //view.whenLayerView(layer).then((layerView: __esri.FeatureLayerView) => {
    layer
      ?.queryFeatures({
        geometry: geometry,
        returnGeometry: true,
        outFields: ["PIN_NUM", "OBJECTID"],
      })
      .then((result: __esri.FeatureSet) => {
        //propertiesSelected(result.features);
        if (result.features.length) {
          getRelatedCondos(view, result, layer, condoTable).then(
            (result: any) => {
              resolve(result);
            }
          );
        }
      });
    //});
  });
}

function getRelatedCondos(
  view: MapView,
  featureSet: __esri.FeatureSet,
  layer: FeatureLayer,
  condoTable: FeatureLayer
) {
  return new Promise((resolve, reject) => {
    queryRelatedCondos(layer, featureSet, condoTable).then((result: any) => {
      resolve(result);
    });
  });
}

function queryRelatedCondos(
  table: __esri.FeatureLayer,
  properties: __esri.FeatureSet,
  condoTable: __esri.FeatureLayer
) {
  return new Promise((resolve, reject) => {
    const oids = properties.features.map((feature: __esri.Graphic) => {
      return feature.getObjectId();
    });
    table
      .queryRelatedFeatures({
        objectIds: oids,
        relationshipId: getRelationshipId(table, "PROPERTY_CONDO"),
        outFields: ["*"],
      })
      .then((result: any) => {
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

        resolve(featureSet);
      })
      .catch((reason: any) => {
        console.log(reason);
      });
  });
}
function getRelationshipId(table: __esri.FeatureLayer, name: string) {
  return table.relationships.find((rel: __esri.Relationship) => {
    return rel.name === name;
  })?.id;
}

export function clearAddressPoints(view: MapView) {
  view.graphics.removeMany(
    view.graphics.filter((graphic) => {
      return graphic.getAttribute("type") === "address";
    })
  );
}
