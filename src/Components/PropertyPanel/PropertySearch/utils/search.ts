/* eslint-disable @typescript-eslint/no-explicit-any */
import Collection from '@arcgis/core/core/Collection';
import LayerSearchSource from '@arcgis/core/widgets/Search/LayerSearchSource';

import widgetsSearch from '@arcgis/core/widgets/Search';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import * as promiseUtils from '@arcgis/core/core/promiseUtils';
let condos: FeatureLayer;
let addresses: FeatureLayer;
let search: widgetsSearch;
let properties: FeatureLayer;
const getSuggestions = (
    params: any,
    name: string,
    layer: FeatureLayer,
    outFields: string[],
    orderByFields: string[],
    searchFields: string[],
    startsWith: boolean,
    searchWidget: widgetsSearch,
) => {
    const whereArray: string[] = [];
    searchFields.forEach((field) => {
        if (startsWith) {
            whereArray.push(`${field} LIKE '${params.suggestTerm.toUpperCase()}%'`);
        } else {
            whereArray.push(`${field} LIKE '%${params.suggestTerm.toUpperCase()}%'`);
        }
    });
    return layer
        .queryFeatures({
            returnDistinctValues: true,
            outFields: outFields,
            returnGeometry: false,
            orderByFields: orderByFields,
            num: searchWidget.activeSource ? 50 : 6,
            where: whereArray.join(' OR '),
        })
        .then((results) => {
            return results.features.map((feature) => {
                return {
                    key: name,
                    text: feature.getAttribute(outFields[0]),
                    sourceIndex: params.sourceIndex,
                };
            });
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
    searchWidget: widgetsSearch,
) => {
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
                searchWidget,
            );
        },
        getResults: (params: any) => {
            return table
                .queryFeatures({
                    where: `${orderByFields[0]} = '${params.suggestResult.text.toUpperCase()}'`,
                    outFields: resultFields,
                })
                .then((results) => {
                    return results.features.map((feature) => {
                        return {
                            feature: feature,
                            name: name,
                        };
                    });
                }) as any;
        },
    });
};

const getProperty = (oids: number[]): Promise<__esri.Graphic[]> => {
    return promiseUtils.create((resolve) => {
        const relationship = condos.relationships.find((r) => {
            return r.name === 'CONDO_PROPERTY';
        });
        condos
            .queryRelatedFeatures({
                relationshipId: relationship?.id,
                objectIds: oids,
                outFields: ['OBJECTID', 'REID'],
                returnGeometry: false,
            })
            .then((result) => {
                const oids: number[] = [];
                for (const key in result) {
                    result[key].features.forEach((feature: __esri.Graphic) => {
                        oids.push(feature.getAttribute('OBJECTID'));
                    });
                }
                properties
                    .queryFeatures({
                        objectIds: oids,
                        outFields: ['*'],
                        returnGeometry: true,
                        outSpatialReference: { wkid: 102100 },
                    })
                    .then((result) => {
                        search.view.goTo(result.features);
                        resolve(result.features);
                    });
            });
    });
};
const searchRelatedCondos = (oids: number[], layer: __esri.FeatureLayer) => {
    return promiseUtils.create((resolve) => {
        const relationship = layer.relationships.find((r) => {
            return r.name === 'ADDRESSES_CONDO';
        });
        const params: any = { outFields: ['*'], objectIds: oids, relationshipId: relationship?.id };

        layer.queryRelatedFeatures(params).then((result) => {
            const oids: number[] = [];
            const features: __esri.Graphic[] = [];
            for (const key in result) {
                result[key].features.forEach((feature: __esri.Graphic) => {
                    oids.push(feature.getAttribute('OBJECTID'));
                    features.push(feature);
                });
            }
            getProperty(oids).then((properties: __esri.Graphic[]) => {
                if (features.length > 1) {
                    //this.emit('features-selected', result.features);
                    resolve({ properties: properties, features: features });
                }
                if (features.length === 1) {
                    const feature = features[0];
                    feature.geometry = properties[0].geometry;
                    feature.layer = condos;
                    resolve({ properties: properties, features: features, feature: feature });
                    //this.emit('feature-selected', feature);
                }

                // this.emit('properties-selected', properties);
            });
        });
    });
};
// const whereDefined = (where: string) => {
//     searchCondos(where, []);
// };
export const searchCondos = (where: string, oids: number[]): Promise<any> => {
    return promiseUtils.create((resolve) => {
        const params: any = { outFields: ['*'] };
        if (where != '') {
            params.where = where;
        } else {
            params.objectIds = oids;
        }
        condos.queryFeatures(params).then((result) => {
            const oids: number[] = [];
            result.features.forEach((feature: __esri.Graphic) => {
                oids.push(feature.getAttribute('OBJECTID'));
            });
            getProperty(oids).then((properties: __esri.Graphic[]) => {
                if (result.features.length > 1) {
                    //this.emit('features-selected', result.features);
                    resolve({ properties: properties, features: result.features });
                }
                if (result.features.length === 1) {
                    const feature = result.features[0];
                    feature.geometry = properties[0].geometry;
                    feature.layer = condos;
                    resolve({ properties: properties, features: result.features, feature: feature });
                    //this.emit('feature-selected', feature);
                }

                // this.emit('properties-selected', properties);
            });
        });
    });
};
const searchResultSelected = (layer: FeatureLayer, source: string, results: any, term: string) => {
    return promiseUtils.create((resolve) => {
        if (!layer && source === 'Owner') {
            layer = condos;
        }
        if (!layer && ['Site Address', 'Street Name'].includes(source)) {
            layer = addresses;
        }
        const oids: number[] = [];
        results.forEach((r: any) => {
            oids.push(r.feature.getAttribute('OBJECTID'));
        });
        let where = '';

        if (layer?.layerId === 4) {
            where = `${source === 'Street Name' ? 'FULL_STREET_NAME' : 'SITE_ADDRESS'} = '${term}'`;
            searchRelatedCondos(oids, layer).then((result) => {
                resolve(result);
            });
        } else {
            searchCondos(where, oids).then((result) => {
                resolve(result);
            });
        }
    });
};
const wildcardSearch = (where: string, condoTable: FeatureLayer) => {
    const oids: number[] = [];
    condoTable.queryFeatures({ where: where, outFields: ['*'] }).then((result) => {
        result.features.forEach((f) => {
            oids.push(f.getAttribute('OBJECTID'));
        });
        getProperty(oids);
        if (result.features.length > 1) {
            //this.emit('features-selected', result.features);
        }
        if (result.features.length === 1) {
            //this.emit('feature-selected', result.features[0]);
        }
        document.querySelector('.esri-search--show-suggestions')?.classList.remove('esri-search--show-suggestions');
    });
};
const getWildcardSearchWhere = (searchFields: string[], term: string): string => {
    let where = '';
    if (!searchFields.length) {
        where = `OWNER like '%${term.toUpperCase()}%' OR REID like '${term.toUpperCase()}%' OR PIN_NUM like '${term.toUpperCase()}%'`;
    } else {
        if (searchFields.includes('OWNER')) {
            where = `OWNER like '_%${term.toUpperCase()}%'`;
        }
        if (searchFields.includes('PIN_NUM')) {
            where = `PIN_NUM like '%${term.toUpperCase()}%'`;
        }
        if (searchFields.includes('REID')) {
            where = `REID like '%${term.toUpperCase()}%'`;
        }
    }
    return where;
};

export const searchComplete = (event: __esri.SearchSearchCompleteEvent): Promise<any> => {
    return promiseUtils.create((resolve) => {
        if (!search.viewModel.selectedSuggestion) {
            let searchFields: string[] = [];
            if (search.activeSource) {
                searchFields = (search.activeSource as LayerSearchSource)?.searchFields;
            }
            const where = getWildcardSearchWhere(searchFields, event.searchTerm);
            wildcardSearch(where, condos);
        }
        if (event.numResults) {
            searchResultSelected(
                (event.results[0].source as LayerSearchSource).layer as FeatureLayer,
                event.results[0].source.name,
                event.results[0].results,
                event.searchTerm,
            ).then((result) => {
                resolve(result);
            });
        }
    });
};
export const checkPin = (searchTerm: string): string => {
    const matches =
        searchTerm.length === 19 &&
        searchTerm[4] === '.' &&
        [searchTerm[7], searchTerm[10], searchTerm[15]].every((p) => p === ' ');
    if (matches) {
        searchTerm = searchTerm.substring(0, 4) + searchTerm.substring(8, 10) + searchTerm.substring(11, 15);
    }
    return searchTerm;
};
export const setSearchSources = (
    addressTable: FeatureLayer,
    condoTable: FeatureLayer,
    propertyLayer: FeatureLayer,
    searchWidget: widgetsSearch,
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
            false,
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
        getLayerSource(
            'REID',
            'REID',
            condoTable,
            ['REID'],
            ['REID'],
            ['REID'],
            true,
            ['REID', 'OBJECTID'],
            searchWidget,
        ),
        getLayerSource(
            'example: W HARGETT ST',
            'Street Name',
            addressTable,
            ['STREET', 'ADDR_LIST'],
            ['STREET'],
            ['STREET', 'STREET_NODIR'],
            false,
            ['STREET', 'REA_REID', 'OBJECTID'],
            searchWidget,
        ),
    ]);
};
