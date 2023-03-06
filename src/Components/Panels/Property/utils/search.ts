import MapView from "@arcgis/core/views/MapView";
import Search from "@arcgis/core/widgets/Search";
import LayerSearchSource from "@arcgis/core/widgets/Search/LayerSearchSource";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Collection from "@arcgis/core/core/Collection";
import Graphic from "@arcgis/core/Graphic";

let condos: FeatureLayer;
let addresses: FeatureLayer;
let search: Search;
let properties: FeatureLayer;
function getQueryParams(condosSelected: Function) {
  const url = new URL(window.location as any);
  const pins = url.searchParams.get("pin");
  if (pins !== "" && pins !== null) {
    searchCondos(`PIN_NUM in ('${pins?.replaceAll(",", "','")}')`, []).then(
      (result) => {
        condosSelected(result);
      }
    );
  }
}
export function initializeSearch(
  ref: HTMLDivElement,
  view: MapView,
  setCondos: Function
) {
  getTables(view);
  search = new Search({
    view: view,
    container: ref,
    allPlaceholder: "Address, owner, PIN, or REID",
    includeDefaultSources: false,
    popupEnabled: false,
    sources: [],
    locationEnabled: false,
  });
  search.sources = setSearchSources(addresses, condos, properties, search);
  search.on("search-complete", (event) => {
    searchComplete(event).then((result: any) => {
      result.forEach((feature: __esri.Graphic) => {
        feature.layer = condos;
      });
      setCondos(result);
    });
  });
  search.watch("searchTerm", (searchTerm) => {
    if (searchTerm !== checkPin(searchTerm)) {
      search.searchTerm = checkPin(searchTerm);
    }
  });

  getQueryParams(setCondos);
  window.addEventListener("popstate", (event) => {
    getQueryParams(setCondos);
  });

  return search;
}

function getTables(view: MapView) {
  condos = view.map.allTables.find((layer) => {
    return layer.title.includes("Condo") && layer.type === "feature";
  }) as __esri.FeatureLayer;
  addresses = view.map.allTables.find((layer) => {
    return layer.title.includes("Address") && layer.type === "feature";
  }) as __esri.FeatureLayer;
  properties = view.map.allLayers.find((layer) => {
    return layer.title.includes("Property") && layer.type === "feature";
  }) as __esri.FeatureLayer;
}
const sortSuggestions = (
  input: string,
  field: string,
  data: __esri.Graphic[]
): __esri.Graphic[] => {
  const first = [];
  const others = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].attributes[field].indexOf(input) === 0) {
      first.push(data[i]);
    } else {
      others.push(data[i]);
    }
  }
  first.sort();
  others.sort();
  return first.concat(others);
};
function getSuggestions(
  params: any,
  name: string,
  layer: FeatureLayer,
  outFields: string[],
  orderByFields: string[],
  searchFields: string[],
  startsWith: boolean,
  searchWidget: Search
) {
  const whereArray: string[] = [];
  const term: string = params.suggestTerm
    .toUpperCase()
    .replace(/'/g, "''")
    .replace(/[\u2018\u2019]/g, "''");
  searchFields.forEach((field) => {
    if (startsWith) {
      whereArray.push(`${field} LIKE '${term}%'`);
    } else {
      whereArray.push(`${field} LIKE '%${term}%'`);
    }
  });
  return layer
    .queryFeatures({
      returnDistinctValues: true,
      outFields: outFields,
      returnGeometry: false,
      orderByFields: orderByFields,
      num: searchWidget.activeSource ? 50 : 6,
      where: whereArray.join(" OR "),
    })
    .then((results) => {
      const features = sortSuggestions(
        params.suggestTerm.toUpperCase(),
        searchFields[0],
        results.features
      );
      return features.map((feature: Graphic) => {
        return {
          key: name,
          text: feature.getAttribute(outFields[0]),
          sourceIndex: params.sourceIndex,
        };
      });
    });
}
function getLayerSource(
  placeholder: string,
  name: string,
  table: FeatureLayer,
  outFields: string[],
  orderByFields: string[],
  searchFields: string[],
  startsWith: boolean,
  resultFields: string[],
  searchWidget: Search
) {
  return new LayerSearchSource({
    placeholder: placeholder,
    name: name,
    maxSuggestions: 6,
    getSuggestions: (params: any) => {
      return getSuggestions(
        params,
        name,
        table,
        outFields,
        orderByFields,
        searchFields,
        startsWith,
        searchWidget
      );
    },
    getResults: (params: any) => {
      const term: string = params.suggestResult.text
        .toUpperCase()
        .replace(/'/g, "''")
        .replace(/[\u2018\u2019]/g, "''");
      return table
        .queryFeatures({
          where: `${orderByFields[0]} = '${term}'`,
          outFields: resultFields,
        })
        .then((results) => {
          return results.features.map((feature: __esri.Graphic) => {
            return {
              feature: feature,
              name: name,
            };
          });
        }) as any;
    },
  });
}

function setSearchSources(
  addressTable: FeatureLayer,
  condoTable: FeatureLayer,
  propertyLayer: FeatureLayer,
  searchWidget: Search
): Collection<LayerSearchSource> {
  condos = condoTable;
  addresses = addressTable;
  properties = propertyLayer;
  search = searchWidget;
  return new Collection([
    getLayerSource(
      "example: 222 W HARGETT ST",
      "Site Address",
      addressTable,
      ["ADDRESS"],
      ["ADDRESS"],
      ["ADDRESS"],
      true,
      ["ADDRESS", "REA_REID", "OBJECTID"],
      searchWidget
    ),
    getLayerSource(
      "example: SMITH, JOHN",
      "Owner",
      condoTable,
      ["OWNER"],
      ["OWNER"],
      ["OWNER"],
      true,
      ["OWNER", "OBJECTID"],
      searchWidget
    ),
    getLayerSource(
      "PIN",
      "PIN",
      condoTable,
      ["PIN_NUM"],
      ["PIN_NUM"],
      ["PIN_NUM"],
      true,
      ["PIN_NUM", "OBJECTID"],
      searchWidget
    ),
    getLayerSource(
      "REID",
      "REID",
      condoTable,
      ["REID"],
      ["REID"],
      ["REID"],
      true,
      ["REID", "OBJECTID"],
      searchWidget
    ),
    getLayerSource(
      "example: W HARGETT ST",
      "Street Name",
      addressTable,
      ["STREET", "ADDR_LIST"],
      ["STREET"],
      ["STREET"],
      true,
      ["STREET", "REA_REID", "OBJECTID"],
      searchWidget
    ),
  ]);
}

function checkPin(searchTerm: string): string {
  const matches =
    searchTerm.length === 19 &&
    searchTerm[4] === "." &&
    [searchTerm[7], searchTerm[10], searchTerm[15]].every((p) => p === " ");
  if (matches) {
    searchTerm =
      searchTerm.substring(0, 4) +
      searchTerm.substring(8, 10) +
      searchTerm.substring(11, 15);
  }
  return searchTerm;
}

function searchComplete(event: __esri.SearchSearchCompleteEvent): Promise<any> {
  return new Promise((resolve, reject) => {
    if (!search.viewModel.selectedSuggestion) {
      let searchFields: string[] = [];
      if (search.activeSource) {
        searchFields = (search.activeSource as LayerSearchSource)?.searchFields;
      }
      const term: string = event.searchTerm
        .toUpperCase()
        .replace(/'/g, "''")
        .replace(/[\u2018\u2019]/g, "''");
      if (term.length > 2) {
        const where = getWildcardSearchWhere(searchFields, term);
        resolve(wildcardSearch(where, condos));
      } else {
        reject("search term must be 3 or more characters");
      }
    }
    if (event.numResults) {
      searchResultSelected(
        (event.results[0].source as LayerSearchSource).layer as FeatureLayer,
        event.results[0].source.name,
        event.results[0].results,
        event.searchTerm
      ).then((result) => {
        resolve(result);
      });
    }
  });
}

function getWildcardSearchWhere(searchFields: string[], term: string): string {
  let where = "";
  if (!searchFields?.length) {
    where = `SITE_ADDRESS like '%${term}%' OR FULL_STREET_NAME like '%${term}%' OR OWNER like '%${term}%' OR REID like '${term}%' OR PIN_NUM like '${term}%'`;
  } else {
    if (searchFields.includes("OWNER")) {
      where = `OWNER like '_%${term}%'`;
    }
    if (searchFields.includes("PIN_NUM")) {
      where = `PIN_NUM like '%${term}%'`;
    }
    if (searchFields.includes("REID")) {
      where = `REID like '%${term}%'`;
    }
  }
  return where;
}

const wildcardSearch = (
  where: string,
  condoTable: FeatureLayer
): Promise<any> => {
  return new Promise((resolve) => {
    document
      .querySelector(".esri-search__warning-menu")
      ?.setAttribute("style", "visibility: hidden");

    const oids: number[] = [];
    condoTable
      .queryFeatures({ where: where, outFields: ["*"] })
      .then((result) => {
        result.features.forEach((f) => {
          oids.push(f.getAttribute("OBJECTID"));
        });
        if (oids.length) {
          getProperty(oids).then((properties) => {
            //resolve({ features: result.features, properties: properties });
            result.features.forEach((feature) => {
              const geometry = properties.find((property) => {
                return (
                  property.getAttribute("PIN_NUM") ===
                  feature.getAttribute("PIN_NUM")
                );
              })?.geometry;
              if (geometry) {
                feature.geometry = geometry;
              }
            });
            resolve(result.features);
          });
        }
      });
  });
};

function searchResultSelected(
  layer: FeatureLayer,
  source: string,
  results: any,
  term: string
) {
  return new Promise((resolve) => {
    if (!layer && source === "Owner") {
      layer = condos;
    }
    if (!layer && ["Site Address", "Street Name"].includes(source)) {
      layer = addresses;
    }
    const oids: number[] = results.map((r: any) => {
      return r.feature.getAttribute("OBJECTID");
    });

    let where = "";

    if (layer?.layerId === 4) {
      where = `${
        source === "Street Name" ? "FULL_STREET_NAME" : "SITE_ADDRESS"
      } = '${term}'`;

      searchRelatedCondos(oids, layer).then((result) => {
        if (result) {
          resolve(result);
        } else {
          searchCondos(where, oids).then((result) => {
            resolve(result);
          });
        }
      });
    } else {
      searchCondos(where, oids).then((result) => {
        resolve(result);
      });
    }
  });
}

const searchCondos = (where: string, oids: number[]): Promise<any> => {
  return new Promise((resolve, reject) => {
    const params: any = { outFields: ["*"], returnDistinctValues: true };
    if (where !== "") {
      params.where = where;
    } else {
      params.objectIds = oids;
    }
    condos.queryFeatures(params).then((result) => {
      const oids: number[] = [];
      result.features.forEach((feature: Graphic) => {
        oids.push(feature.getAttribute("OBJECTID"));
      });
      getProperty(oids).then((properties: Graphic[]) => {
        result.features.forEach((feature) => {
          const geometry = properties.find((property) => {
            return (
              property.getAttribute("PIN_NUM") ===
              feature.getAttribute("PIN_NUM")
            );
          })?.geometry;
          if (geometry) {
            feature.geometry = geometry;
          }
        });
        resolve(result.features);
      });
    });
  });
};

const searchRelatedCondos = (oids: number[], layer: __esri.FeatureLayer) => {
  return new Promise((resolve) => {
    const relationship = layer.relationships.find((r) => {
      return r.name === "ADDRESSES_CONDO";
    });
    const params: any = {
      outFields: ["*"],
      objectIds: oids,
      relationshipId: relationship?.id,
    };

    layer.queryRelatedFeatures(params).then((result) => {
      const oids: number[] = [];
      const features: __esri.Graphic[] = [];
      const reids: string[] = [];
      for (const key in result) {
        result[key].features.forEach((feature: Graphic) => {
          if (!reids.includes(feature.getAttribute("REID"))) {
            oids.push(feature.getAttribute("OBJECTID"));
            reids.push(feature.getAttribute("REID"));
            features.push(feature);
          }
        });
      }
      getProperty(oids).then((properties: Graphic[]) => {
        features.forEach((feature: Graphic) => {
          const geometry = properties.find((property) => {
            return (
              property.getAttribute("PIN_NUM") ===
              feature.getAttribute("PIN_NUM")
            );
          })?.geometry;
          if (geometry) {
            feature.geometry = geometry;
          }
        });
        resolve(features);
      });
    });
  });
};
export const getProperty = (oids: number[]): Promise<__esri.Graphic[]> => {
  return new Promise((resolve) => {
    const relationship = condos.relationships.find((r) => {
      return r.name === "CONDO_PROPERTY";
    });
    condos
      .queryRelatedFeatures({
        relationshipId: relationship?.id,
        objectIds: oids,
        outFields: ["OBJECTID", "REID"],
        returnGeometry: false,
      })
      .then((result) => {
        const oids: number[] = [];
        for (const key in result) {
          result[key].features.forEach((feature: Graphic) => {
            oids.push(feature.getAttribute("OBJECTID"));
          });
        }
        properties
          .queryFeatures({
            objectIds: oids,
            outFields: ["*"],
            returnGeometry: true,
            outSpatialReference: { wkid: 102100 },
          })
          .then((result) => {
            search.view.goTo({ target: result.features });
            resolve(result.features);
          });
      });
  });
};
