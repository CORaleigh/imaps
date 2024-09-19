import MapView from '@arcgis/core/views/MapView';
import Search from '@arcgis/core/widgets/Search';
import LayerSearchSource from '@arcgis/core/widgets/Search/LayerSearchSource';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import Collection from '@arcgis/core/core/Collection';
import Graphic from '@arcgis/core/Graphic';
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils.js";

let condos: FeatureLayer;
let addresses: FeatureLayer;
let search: Search;
let properties: FeatureLayer;
const getQueryParams = async (condosSelected: (selectedCondos: Graphic[]) => void) => {
  const url = new URL(window.location as any);
  const pins = url.searchParams.get('pin');
  if (pins !== '' && pins !== null) {
    const result = await searchCondos(`PIN_NUM in ('${pins?.replaceAll(',', "','")}')`, []);
    condosSelected(result);
  }
};
export const initializeSearch = (ref: HTMLDivElement, view: MapView, setCondos: (condos: Graphic[]) => void) => {
  getTables(view);
  search = new Search({
    view: view,
    container: ref,
    allPlaceholder: 'Address, owner, PIN, or REID',
    includeDefaultSources: false,
    popupEnabled: false,
    sources: [],
    locationEnabled: false,
  });
  search.sources = setSearchSources(addresses, condos, properties, search);
  search.on('search-complete', async (event) => {
    const result = await searchComplete(event);
    result.forEach((feature: __esri.Graphic) => {
      feature.layer = condos;
    });
    setCondos(result);
  });
  search.watch('searchTerm', (searchTerm) => {
    if (searchTerm !== checkPin(searchTerm)) {
      search.searchTerm = checkPin(searchTerm);
    }
  });

  getQueryParams(setCondos);
  window.addEventListener('popstate', (event) => {
    getQueryParams(setCondos);
  }, {passive: true});

  return search;
};

const getTables = (view: MapView) => {
  condos = view.map.allTables.find((layer) => {
    return layer.title.includes('Condo') && layer.type === 'feature';
  }) as __esri.FeatureLayer;
  addresses = view.map.allTables.find((layer) => {
    return layer.title.includes('Address') && layer.type === 'feature';
  }) as __esri.FeatureLayer;
  properties = view.map.allLayers.find((layer) => {
    return layer.title.includes('Property') && layer.type === 'feature';
  }) as __esri.FeatureLayer;
};
const sortSuggestions = (input: string, field: string, data: __esri.Graphic[]): __esri.Graphic[] => {
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
const getSuggestions = async (
  params: any,
  name: string,
  layer: FeatureLayer,
  outFields: string[],
  orderByFields: string[],
  searchFields: string[],
  startsWith: boolean,
  searchWidget: Search,
) => {
  const whereArray: string[] = [];
  const term: string = params.suggestTerm
    .toUpperCase()
    .replace(/'/g, "''")
    .replace(/[\u2018\u2019]/g, "''");
  searchFields.forEach((field) => {
    if (startsWith) {
      whereArray.push(`${field} LIKE '${term}%'`);
    } else {
      whereArray.push(`${field} LIKE '${term}%'`);
    }
  });
  const results = await layer.queryFeatures({
    returnDistinctValues: true,
    outFields: outFields,
    returnGeometry: false,
    orderByFields: orderByFields,
    num: searchWidget.activeSource ? 50 : 6,
    where: whereArray.join(' OR '),
  });

  const features = sortSuggestions(params.suggestTerm.toUpperCase(), searchFields[0], results.features);
  return features.map((feature: Graphic) => {
    return {
      key: name,
      text: feature.getAttribute(outFields[0]),
      sourceIndex: params.sourceIndex,
    };
  });
};
const getLayerSource = (
  placeholder: string,
  name: string,
  table: FeatureLayer,
  outFields: string[],
  orderByFields: string[],
  searchFields: string[],
  startsWith: boolean,
  resultFields: string[],
  searchWidget: Search,
) => {
  const getResults = async (params: any): Promise<__esri.SearchResult[]> => {
    const term: string = params.suggestResult.text
      .toUpperCase()
      .replace(/'/g, "''")
      .replace(/[\u2018\u2019]/g, "''");
    const results = await table.queryFeatures({
      where: `${orderByFields[0]} = '${term}'`,
      outFields: resultFields,
    });

    return results.features.map((feature: __esri.Graphic) => {
      return {
        feature: feature,
        name: name,
      } as __esri.SearchResult;
    });
  };
  return new LayerSearchSource({
    placeholder: placeholder,
    name: name,
    maxSuggestions: 6,
    getSuggestions: (params: any) => {
      return getSuggestions(params, name, table, outFields, orderByFields, searchFields, startsWith, searchWidget);
    },
    getResults: getResults,
  });
};

const setSearchSources = (
  addressTable: FeatureLayer,
  condoTable: FeatureLayer,
  propertyLayer: FeatureLayer,
  searchWidget: Search,
): Collection<LayerSearchSource> => {
  condos = condoTable;
  addresses = addressTable;
  properties = propertyLayer;
  search = searchWidget;
  return new Collection([
    getLayerSource(
      'example: 222 W HARGETT ST',
      'Site Address',
      addressTable,
      ['ADDRESS'],
      ['ADDRESS'],
      ['ADDRESS'],
      true,
      ['ADDRESS', 'REA_REID', 'OBJECTID'],
      searchWidget,
    ),
    getLayerSource(
      'example: SMITH, JOHN',
      'Owner',
      condoTable,
      ['OWNER'],
      ['OWNER'],
      ['OWNER'],
      true,
      ['OWNER', 'OBJECTID'],
      searchWidget,
    ),
    getLayerSource(
      'PIN',
      'PIN',
      condoTable,
      ['PIN_NUM'],
      ['PIN_NUM'],
      ['PIN_NUM'],
      true,
      ['PIN_NUM', 'OBJECTID'],
      searchWidget,
    ),
    getLayerSource('REID', 'REID', condoTable, ['REID'], ['REID'], ['REID'], true, ['REID', 'OBJECTID'], searchWidget),
    getLayerSource(
      'example: W HARGETT ST',
      'Street Name',
      addressTable,
      ['STREET', 'ADDR_LIST'],
      ['STREET'],
      ['STREET'],
      true,
      ['STREET', 'REA_REID', 'OBJECTID'],
      searchWidget,
    ),
  ]);
};

const checkPin = (searchTerm: string): string => {
  const matches =
    searchTerm.length === 19 &&
    searchTerm[4] === '.' &&
    [searchTerm[7], searchTerm[10], searchTerm[15]].every((p) => p === ' ');
  if (matches) {
    searchTerm = searchTerm.substring(0, 4) + searchTerm.substring(8, 10) + searchTerm.substring(11, 15);
  }
  return searchTerm;
};

const searchComplete = async (event: __esri.SearchSearchCompleteEvent): Promise<any> => {
  search.blur();
  reactiveUtils.whenOnce(() => search?.view?.popup.visible).then(() => search?.view?.popup.close());
  requestAnimationFrame(() => search?.view?.popup.close());
  if (!search.viewModel.selectedSuggestion) {
    let searchFields: string[] = ['SITE_ADDRESS','OWNER','FULL_STREET_NAME','PIN_NUM', 'REID'];
    // if ((search.activeSource as LayerSearchSource)?.searchFields) {
    //   searchFields = (search.activeSource as LayerSearchSource)?.searchFields;
    // } else {
    //   search.allSources.forEach(source => {
    //     searchFields.concat((source as LayerSearchSource)?.searchFields);
    //   });
    // }
    const term: string = event.searchTerm
      .toUpperCase()
      .replace(/'/g, "''")
      .replace(/[\u2018\u2019]/g, "''");
      setSearchHistory(term);
    if (term.length > 2) {
      const where = getWildcardSearchWhere(searchFields, term);
      return wildcardSearch(searchFields, condos, term);
    } else {
      console.log('search term must be 3 or more characters');
    }
  }
  if (event.numResults) {
    const result = await searchResultSelected(
      (event.results[0].source as LayerSearchSource).layer as FeatureLayer,
      event.results[0].source.name,
      event.results[0].results,
      event.searchTerm,
    );
    
    setSearchHistory(event.searchTerm);
    return result;
  }
};

const getWildcardSearchWhere = (searchFields: string[], term: string): string => {
  let where = '';
  if (!searchFields?.length) {
    where = `SITE_ADDRESS like '${term}%' OR FULL_STREET_NAME like '${term}%' OR OWNER like '${term}%' OR REID like '${term}%' OR PIN_NUM like '${term}%'`;
  } else {
    if (searchFields.includes('OWNER')) {
      where = `OWNER like '_%${term}%'`;
    }
    if (searchFields.includes('PIN_NUM')) {
      where = `PIN_NUM like '%${term}%'`;
    }
    if (searchFields.includes('REID')) {
      where = `REID like '%${term}%'`;
    }
  }
  return where;
};

const searchByField = async (field: string, condoTable: FeatureLayer, term: string): Promise<Graphic[]> => {
  const oids: number[] = [];
  const where = `${field} like '${field == 'OWNER' ? '%' : ''}${term}%'`;
  const result = await condoTable.queryFeatures({ where: where, outFields: ['*'] });
  result.features.forEach((f) => {
    oids.push(f.getAttribute('OBJECTID'));
  });
  if (oids.length) {
    const properties = await getProperty(oids);
    //resolve({ features: result.features, properties: properties });
    result.features.forEach((feature) => {
      const geometry = properties.find((property) => {
        return property.getAttribute('PIN_NUM') === feature.getAttribute('PIN_NUM');
      })?.geometry;
      if (geometry) {
        feature.geometry = geometry;
      }
    });
    return result.features;
  } else {
    return []
  }
}

const wildcardSearch = async (searchFields: string[], condoTable: FeatureLayer, term: string): Promise<any> => {
  document.querySelector('.esri-search__warning-menu')?.setAttribute('style', 'visibility: hidden');
  const promises = searchFields.map(async field => {
    return await searchByField(field, condoTable, term);
  });
  const results = await Promise.all(promises);
  return results.flat(1);

};

const searchResultSelected = async (layer: FeatureLayer, source: string, results: any, term: string) => {
  if (!layer && source === 'Owner') {
    layer = condos;
  }
  if (!layer && ['Site Address', 'Street Name'].includes(source)) {
    layer = addresses;
  }
  const oids: number[] = results.map((r: any) => {
    return r.feature.getAttribute('OBJECTID');
  });

  let where = '';

  if (layer?.layerId === 4) {
    where = `${source === 'Street Name' ? 'FULL_STREET_NAME' : 'SITE_ADDRESS'} = '${term}'`;

    const relatedCondos = await searchRelatedCondos(oids, layer);
    if (relatedCondos) {
      return relatedCondos;
    } else {
      const condoResult = searchCondos(where, oids);
      return condoResult;
    }
  } else {
    const condoResult = await searchCondos(where, oids);
    return condoResult;
  }
};

const searchCondos = async (where: string, oids: number[]): Promise<any> => {
  const params: any = { outFields: ['*'], returnDistinctValues: true };
  if (where !== '') {
    params.where = where;
  } else {
    params.objectIds = oids;
  }
  const result = await condos.queryFeatures(params);
  oids = [];
  result.features.forEach((feature: Graphic) => {
    oids.push(feature.getAttribute('OBJECTID'));
  });
  const properties: Graphic[] = await getProperty(oids);
  result.features.forEach((feature) => {
    const geometry = properties.find((property) => {
      return property.getAttribute('PIN_NUM') === feature.getAttribute('PIN_NUM');
    })?.geometry;
    if (geometry) {
      feature.geometry = geometry;
    }
  });
  return result.features;
};

const searchRelatedCondos = async (oids: number[], layer: __esri.FeatureLayer) => {
  const relationship = layer.relationships.find((r) => {
    return r.name === 'ADDRESSES_CONDO';
  });
  const params: any = {
    outFields: ['*'],
    objectIds: oids,
    relationshipId: relationship?.id,
  };

  const result = await layer.queryRelatedFeatures(params);
  oids = [];
  const features: __esri.Graphic[] = [];
  const reids: string[] = [];
  for (const key in result) {
    result[key].features.forEach((feature: Graphic) => {
      if (!reids.includes(feature.getAttribute('REID'))) {
        oids.push(feature.getAttribute('OBJECTID'));
        reids.push(feature.getAttribute('REID'));
        features.push(feature);
      }
    });
  }
  const properties: Graphic[] = await getProperty(oids);
  features.forEach((feature: Graphic) => {
    const geometry = properties.find((property) => {
      return property.getAttribute('PIN_NUM') === feature.getAttribute('PIN_NUM');
    })?.geometry;
    if (geometry) {
      feature.geometry = geometry;
    }
  });
  return features;
};
export const getProperty = async (oids: number[]): Promise<__esri.Graphic[]> => {
  const relationship = condos.relationships.find((r) => {
    return r.name === 'CONDO_PROPERTY';
  });
  const result = await condos.queryRelatedFeatures({
    relationshipId: relationship?.id,
    objectIds: oids,
    outFields: ['OBJECTID', 'REID'],
    returnGeometry: false,
  });
  oids = [];
  for (const key in result) {
    result[key].features.forEach((feature: Graphic) => {
      oids.push(feature.getAttribute('OBJECTID'));
    });
  }
  const propertiesResult = await properties.queryFeatures({
    objectIds: oids,
    outFields: ['*'],
    returnGeometry: true,
    outSpatialReference: { wkid: 102100 },
  });
  search.view.goTo({ target: propertiesResult.features });
  return propertiesResult.features;
};

export const getSearchHistory = (): Array<string> => {
  const history = localStorage.getItem('imaps_history');
  let historyItems: Array<string> = [];
  if (history) {
    historyItems = JSON.parse(history) as Array<string>;
  }
  return historyItems;
}

export const setSearchHistory = (term: string, field?: string) => {
  const history = localStorage.getItem('imaps_history');
  let historyItems: Array<string> = [];
  if (history) {
    historyItems = JSON.parse(history) as Array<string>
  }
  historyItems = historyItems.filter(item => {
    return item !== term;
  })
  if (term.length >=3) {
    historyItems.unshift(term);
  }
  if (historyItems.length > 10) {
    historyItems.pop();
  }
  localStorage.setItem('imaps_history', JSON.stringify(historyItems));
}

export const searchHistory = (term: string, field?: string) => {
  search.search(term);
}