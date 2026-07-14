// searchSources.ts
import Collection from "@arcgis/core/core/Collection";
import LayerSearchSource from "@arcgis/core/widgets/Search/LayerSearchSource";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils.js";

import type Graphic from "@arcgis/core/Graphic";
import type Layer from "@arcgis/core/layers/Layer";
import type FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import type Geometry from "@arcgis/core/geometry/Geometry";
import type {
  GetResultsParameters,
  GetSuggestionsParameters,
  SearchResult,
} from "@arcgis/core/widgets/Search/types";
import type GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";

const getTableByTitle = (
  mapElement: HTMLArcgisMapElement,
  name: string,
): FeatureLayer => {
  return mapElement.view.map?.allTables.find(
    (layer: Layer) => layer.title === name,
  ) as FeatureLayer;
};

const getLayerByTitle = (
  mapElement: HTMLArcgisMapElement,
  name: string,
): FeatureLayer => {
  return mapElement.view.map?.allLayers.find(
    (layer: Layer) => layer.title === name && layer.type === "feature",
  ) as FeatureLayer;
};

export const getSearchSources = async (
  mapElement: HTMLArcgisMapElement | null,
  arcgisSearch: HTMLArcgisSearchElement | null,
): Promise<Collection | null> => {
  if (!mapElement || !arcgisSearch) return null;

  const condoTable = getTableByTitle(mapElement, "Condos") as FeatureLayer;
  const addressTable = getTableByTitle(mapElement, "Addresses") as FeatureLayer;
  await reactiveUtils.whenOnce(() => condoTable?.loaded && addressTable?.loaded);
  const sources = new Collection<LayerSearchSource>([
    createLayerSource(
      "example: 222 W HARGETT ST",
      "Site Address",
      addressTable,
      arcgisSearch,
      {
        outFields: ["ADDRESS"],
        orderByFields: ["ADDRESS"],
        searchFields: ["ADDRESS"],
        resultFields: ["ADDRESS", "REA_REID", "OBJECTID"],
        startsWith: true,
      },
    ),
    
    createLayerSource(
      "example: SMITH, JOHN",
      "Owner",
      condoTable,
      arcgisSearch,
      {
        outFields: condoTable?.fields.find((f) => f.name === "OWNER1" || f.name === "OWNER2") ? ["OWNER", "OWNER1", "OWNER2"] : ["OWNER"],
        orderByFields: ["OWNER"],
        searchFields: condoTable?.fields.find((f) => f.name === "OWNER1" || f.name === "OWNER2") ? ["OWNER1", "OWNER2"] : ["OWNER"],
        resultFields: ["OWNER", "OBJECTID"],
        startsWith: true,
      },
    ),
    createLayerSource("PIN", "PIN", condoTable, arcgisSearch, {
      outFields: ["PIN_NUM"],
      orderByFields: ["PIN_NUM"],
      searchFields: ["PIN_NUM"],
      resultFields: ["PIN_NUM", "OBJECTID"],
      startsWith: true,
    }),
    createLayerSource("REID", "REID", condoTable, arcgisSearch, {
      outFields: ["REID"],
      orderByFields: ["REID"],
      searchFields: ["REID"],
      resultFields: ["REID", "OBJECTID"],
      startsWith: true,
    }),
    createLayerSource(
      "example: W HARGETT ST",
      "Street Name",
      addressTable,
      arcgisSearch,
      {
        outFields: ["STREET"],
        orderByFields: ["STREET"],
        searchFields: ["STREET"],
        resultFields: ["STREET", "REA_REID", "OBJECTID"],
        startsWith: true,
      },
    ),
  ]);

  return sources;
};

// Helper function to create a LayerSearchSource
interface LayerSourceOptions {
  outFields: string[];
  orderByFields: string[];
  searchFields: string[];
  resultFields: string[];
  startsWith: boolean;
}

const createLayerSource = (
  placeholder: string,
  name: string,
  layer: FeatureLayer,
  arcgisSearch: HTMLArcgisSearchElement,
  options: LayerSourceOptions,
): LayerSearchSource => {
  const { outFields, orderByFields, searchFields, resultFields } =
    options;

  const getResults = async (
    params: GetResultsParameters,
  ): Promise<SearchResult[] | null | undefined> => {
    if (!params?.suggestResult?.text) return Promise.resolve(null);
    const term = params.suggestResult.text
      .toUpperCase()
      .replace(/'/g, "''")
      .replace(/[\u2018\u2019]/g, "''");

    const results = await layer.queryFeatures({
      where: `${orderByFields[0]} = '${term}'`,
      outFields: resultFields,
    });

    return Promise.resolve(
      results.features.map((feature: Graphic) => ({
        feature,
        name,
      })) as unknown as SearchResult[],
    );
  };

const getSuggestions = async (params: GetSuggestionsParameters) => {
    if (!params?.suggestTerm) return [];

    const term = params.suggestTerm
        .toUpperCase()
        .replace(/'/g, "''")
        .replace(/[\u2018\u2019]/g, "''");

    const num = arcgisSearch?.activeSource ? 50 : 6;

    // If multiple search fields, run parallel queries instead of OR
    if (searchFields.length > 1) {
        const queries = await Promise.all(
            searchFields.map((field) =>
                layer.queryFeatures({
                    returnDistinctValues: true,
                    outFields,
                    returnGeometry: false,
                    orderByFields,
                    num,
                    where: `${field} LIKE '${term}%'`,
                })
            )
        );

        const seen = new Set<string>();
        return queries
            .flatMap((result) => result.features)
            .filter((feature) => {
                const key = feature.getAttribute(outFields[0]);
                if (seen.has(key)) return false;
                seen.add(key);
                return true;
            })
            .slice(0, num)
            .map((feature) => ({
                key: feature.getAttribute(outFields[0]),
                text: feature.getAttribute(outFields[0]),
                sourceIndex: params.sourceIndex,
            }));
    }

    // Single field — original path
    const results = await layer.queryFeatures({
        returnDistinctValues: true,
        outFields,
        returnGeometry: false,
        orderByFields,
        num,
        where: `${searchFields[0]} LIKE '${term}%'`,
    });

    return results.features.map((feature: Graphic) => ({
        key: feature.getAttribute(outFields[0]),
        text: feature.getAttribute(outFields[0]),
        sourceIndex: params.sourceIndex,
    }));
};
  return new LayerSearchSource({
    layer: layer,
    placeholder: placeholder,
    name: name,
    maxSuggestions: 6,
    getResults: getResults,
    getSuggestions: getSuggestions,
  });
};

export const searchForCondosFromSearch = async (
  event: HTMLArcgisSearchElement["arcgisSearchComplete"],
  search: HTMLArcgisSearchElement,
  mapElement: HTMLArcgisMapElement,
  webMapId: string,
): Promise<Graphic[]> => {
  search.blur();
  reactiveUtils
    .whenOnce(() => mapElement.view.popup?.visible)
    .then(() => mapElement.view.popup?.close());

  if (event.detail.numResults) {
    const selectedResult = event.detail.results.find(
      (result) => result.results?.length,
    );
    if (!selectedResult) return [];
    const result = await searchResultSelected(
      (selectedResult.source as LayerSearchSource).layer as FeatureLayer,
      selectedResult.source.name,
      selectedResult.results,
      event.detail.searchTerm,
      mapElement,
    );

    setSearchHistory(event.detail.searchTerm, webMapId);
    return result;
  } else {
    return [];
  }
};

const searchResultSelected = async (
  layer: FeatureLayer,
  source: string,
  results: SearchResult[] | undefined,
  term: string,
  mapElement: HTMLArcgisMapElement,
) => {
  const condoTable = getTableByTitle(mapElement, "Condos");
  const addressTable = getTableByTitle(mapElement, "Addresses");

  if (!layer && source === "Owner") {
    layer = condoTable;
  }
  if (!layer && ["Site Address", "Street Name"].includes(source)) {
    layer = addressTable;
  }

  if (!results) return [];
  const oids: number[] = results.map((result) => {
    return result.feature.getAttribute("OBJECTID") as number;
  });

  // const oids: number[] = results.results.map((r: Graphic) => {
  //   return r.feature.getAttribute("OBJECTID");
  // });

  let where = "";

  if (layer?.layerId === 4) {
    where = `${
      source === "Street Name" ? "FULL_STREET_NAME" : "SITE_ADDRESS"
    } = '${term}'`;

    const relatedCondos = await searchRelatedCondos(
      oids,
      layer,
      "ADDRESSES_CONDO",
      mapElement,
    );
    if (relatedCondos) {
      return relatedCondos;
    } else {
      const condoResult = searchCondos(where, mapElement, oids);
      return condoResult;
    }
  } else {
    const condoResult = await searchCondos(where, mapElement, oids);
    return condoResult;
  }
};

export const searchCondos = async (
  where: string,

  mapElement: HTMLArcgisMapElement,
  oids?: number[],
): Promise<Graphic[]> => {
  const params: {
    outFields: string[];
    returnDistinctValues: boolean;
    where?: string;
    objectIds?: number[];
  } = { outFields: ["*"], returnDistinctValues: true };
  if (where !== "") {
    params.where = where;
  } else {
    params.objectIds = oids;
  }
  const condoTable = getTableByTitle(mapElement, "Condos");

  const result = await condoTable.queryFeatures(params);
  oids = [];
  result.features.forEach((feature: Graphic) => {
    oids.push(feature.getAttribute("OBJECTID"));
  });

  const properties: Graphic[] = await getProperty(mapElement, oids);
  result.features.forEach((feature) => {
    const geometry = properties.find((property) => {
      return (
        property.getAttribute("PIN_NUM") === feature.getAttribute("PIN_NUM")
      );
    })?.geometry;
    if (geometry) {
      feature.geometry = geometry;
    }
  });
  return result.features;
};

export const searchRelatedCondos = async (
  oids: number[],
  layer: FeatureLayer,
  relationshipName: string,
  mapElement: HTMLArcgisMapElement,
) => {
  const condoTable = getTableByTitle(mapElement, "Condos");

  const relationship = layer.relationships?.find((r) => {
    return r.name === relationshipName;
  });
  if (relationship) {
    const params: {
      outFields: string[];
      objectIds: number[];
      relationshipId: number;
    } = {
      outFields: ["*"],
      objectIds: oids,
      relationshipId: relationship?.id,
    };

    const result = await layer.queryRelatedFeatures(params);
    oids = [];
    const features: Graphic[] = [];
    const reids: string[] = [];
    for (const key in result) {
      result[key]?.features.forEach((feature: Graphic) => {
        if (!reids.includes(feature.getAttribute("REID"))) {
          oids.push(feature.getAttribute("OBJECTID"));
          reids.push(feature.getAttribute("REID"));
          features.push(feature);
          feature.layer = condoTable;
        }
      });
    }
    const properties: Graphic[] = await getProperty(mapElement, oids);
    features.forEach((feature: Graphic) => {
      const geometry = properties.find((property) => {
        return (
          property.getAttribute("PIN_NUM") === feature.getAttribute("PIN_NUM")
        );
      })?.geometry;
      if (geometry) {
        feature.geometry = geometry;
      }
    });
    return features;
  } else {
    return [];
  }
};

export const getProperty = async (
  mapElement: HTMLArcgisMapElement,
  oids?: number[],
  geometry?: Geometry,
): Promise<Graphic[]> => {
  const condoTable = getTableByTitle(mapElement, "Condos");
  const propertyLayer = getLayerByTitle(mapElement, "Property");
  if (oids) {
    if (!condoTable || !propertyLayer) return [];
    

    const relationship = condoTable.relationships?.find((r) => {
      return r.name === "CONDO_PROPERTY";
    });
    const result = await condoTable.queryRelatedFeatures({
      relationshipId: relationship?.id,
      objectIds: oids,
      outFields: ["OBJECTID", "REID"],
      returnGeometry: false,
    });
    oids = [];

    for (const key in result) {
      result[key]?.features.forEach((feature: Graphic) => {
        oids?.push(feature.getAttribute("OBJECTID"));
      });
    }
    const propertiesResult = await propertyLayer.queryFeatures({
      objectIds: oids,
      outFields: ["*"],
      returnGeometry: true,
      outSpatialReference: { wkid: 102100 },
    });
    if (propertiesResult.features.length > 1) {
      mapElement.goTo(propertiesResult.features);
    }
    return propertiesResult.features;
  } else if (geometry) {
    const propertiesResult = await propertyLayer.queryFeatures({
      geometry: geometry,
      returnGeometry: true,
      outFields: ["*"],
      outSpatialReference: { wkid: 102100 },
    });
    return propertiesResult.features;
  }

  return [];
};

export const clearAddressPoints = (mapElement: HTMLArcgisMapElement) => {
  if (mapElement.map?.findLayerById("address-graphics")) {
    const addressGraphics = mapElement.map.findLayerById(
      "address-graphics",
    ) as GraphicsLayer;
    addressGraphics.removeAll();
  }
};

export const getSearchHistory = (webMapId: string): Array<string> => {
  const history = localStorage.getItem(`imaps_${webMapId}_history`);
  let historyItems: Array<string> = [];
  if (history) {
    historyItems = JSON.parse(history) as Array<string>;
  }
  return historyItems;
};

const setSearchHistory = (term: string, webMapId: string) => {
  const history = localStorage.getItem(`imaps_${webMapId}_history`);
  let historyItems: Array<string> = [];
  if (history) {
    historyItems = JSON.parse(history) as Array<string>;
  }
  historyItems = historyItems.filter((item) => {
    return item !== term;
  });
  if (term.length >= 3) {
    historyItems.unshift(term);
  }
  if (historyItems.length > 10) {
    historyItems.pop();
  }
  localStorage.setItem(
    `imaps_${webMapId}_history`,
    JSON.stringify(historyItems),
  );
};

const searchByField = async (
  mapElement: HTMLArcgisMapElement,
  field: string,
  condoTable: FeatureLayer,
  term: string,
): Promise<Graphic[]> => {
  const oids: number[] = [];
  const where = `${field} like '${field == "OWNER" ? "%" : ""}${term}%'`;
  const result = await condoTable.queryFeatures({
    where: where,
    outFields: ["*"],
  });
  result.features.forEach((f) => {
    oids.push(f.getAttribute("OBJECTID"));
  });
  if (oids.length) {
    const properties = await getProperty(mapElement, oids);
    result.features.forEach((feature) => {
      const geometry = properties.find((property) => {
        return (
          property.getAttribute("PIN_NUM") === feature.getAttribute("PIN_NUM")
        );
      })?.geometry;
      if (geometry) {
        feature.geometry = geometry;
      }
    });
    return result.features;
  } else {
    return [];
  }
};
export const wildcardSearch = async (
  mapElement: HTMLArcgisMapElement,
  searchElement: HTMLArcgisSearchElement,
  searchFields: string[],
  term: string,
): Promise<Graphic[]> => {
  requestAnimationFrame(() => {
    const notice = searchElement.shadowRoot?.querySelector("calcite-notice");

    if (notice) {
      notice.open = false;
    }
  });

  const condoTable = getTableByTitle(mapElement, "Condos");
  if (!condoTable) return [];
  const promises = searchFields.map(async (field) => {
    return await searchByField(
      mapElement,
      field,
      condoTable,
      term.toUpperCase(),
    );
  });
  const results = await Promise.all(promises);
  return results.flat(1);
};

export const checkPin = (searchTerm: string): string => {
  // remove any leading/trailing spaces
  searchTerm = searchTerm.trim();

  // match Wake County PIN: ####.## ## #### ###
  const wakePinPattern = /^(\d{4})\.(\d{2}) (\d{2}) (\d{4}) (\d{3})$/;

  const match = searchTerm.match(wakePinPattern);
  if (match) {
    // e.g., normalized as first 4 + next 2 + next 4 = 10 digits
    const normalized = match[1] + match[2] + match[4];
    return normalized; // 10-digit string
  }

  // fallback: remove all non-digits if already 10 digits
  const digits = searchTerm.replace(/\D/g, "");
  if (digits.length === 10) return digits;

  // otherwise return original
  return searchTerm;
};
