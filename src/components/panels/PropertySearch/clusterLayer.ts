import type Polygon from "@arcgis/core/geometry/Polygon";
import Graphic from "@arcgis/core/Graphic";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import FeatureReductionCluster from "@arcgis/core/layers/support/FeatureReductionCluster.js";
import * as centroidOperator from "@arcgis/core/geometry/operators/centroidOperator.js";

export const addClusterLayer = (mapElement: HTMLArcgisMapElement) => {
  const layer = new FeatureLayer({
    source: [],
    editingEnabled: true,
    listMode: "hide",
    featureReduction: new FeatureReductionCluster({
      clusterRadius: "100px",
      clusterMinSize: "24px",
      clusterMaxSize: "60px",
      labelingInfo: [
        {
          deconflictionStrategy: "none",
          labelExpressionInfo: {
            expression: "Text($feature.cluster_count, '#,###')",
          },
          symbol: {
            type: "text",
            color: "#004a5d",
            font: {
              weight: "bold",
              family: "Noto Sans",
              size: "12px",
            },
          },
          labelPlacement: "center-center",
        },
      ],
    }),
    legendEnabled: false,
    geometryType: "point",
    id: "selection-cluster",
    objectIdField: "OBJECTID",
    spatialReference: { wkid: 102100 },
    orderBy: [{ field: "selected", order: "ascending" }],
    fields: [
      { name: "OBJECTID", type: "oid" },
      { name: "selected", type: "small-integer" },
      { name: "PIN_NUM", type: "string" },
    ],
    effect: "drop-shadow(1px, 1px, 1px)",
    renderer: {
      type: "simple",
      symbol: {
        type: "simple-marker",
        size: 8,
        color: "#ffe34c",
        outline: {
          color: "rgba(153, 130, 0, 1)",
          width: 2,
        },
      },
    },
    maxScale: 20000,
  });
  mapElement.map?.add(layer);
};

export const updateClusters = async (
  properties: Graphic[],
  mapElement: HTMLArcgisMapElement
) => {
  const selectionCluster = mapElement.map?.findLayerById("selection-cluster");
  if (!selectionCluster || !(selectionCluster instanceof FeatureLayer)) return;

  const points: Graphic[] = [];

  properties.forEach((property) => {
    const geometry = property.geometry as Polygon;
    const centroid = centroidOperator.execute(geometry);
    points.push(
      new Graphic({
        attributes: property.attributes,
        geometry: centroid,
      })
    );
  });
  const featureSet = await selectionCluster.queryFeatures({
    where: "1=1",
    returnGeometry: false,
    outFields: ["OBJECTID"],
  });
  await selectionCluster?.applyEdits({
    deleteFeatures: featureSet.features,
  });

  await selectionCluster?.applyEdits({
    addFeatures: points,
  });
};
