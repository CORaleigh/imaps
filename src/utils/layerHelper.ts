import type Layer from "@arcgis/core/layers/Layer";

export const getTableByTitle = (
  mapElement: HTMLArcgisMapElement,
  name: string
) => {
  return mapElement.view.map?.allTables.find(
    (layer: Layer) => layer.title === name
  );
};

export const getLayerByTitle = (mapElement: HTMLArcgisMapElement, name: string) => {
  return mapElement.view.map?.allLayers.find(
    (layer: Layer) => layer.title === name && layer.type !== "group"
  );
};