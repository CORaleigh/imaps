/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useRef, useState } from 'react';
import SearchWidget from '@arcgis/core/widgets/Search';
import './PropertySearch.scss';
import { checkPin, searchComplete, searchCondos, setSearchSources } from './utils/search';
import widgetsSearch from '@arcgis/core/widgets/Search';
export const PropertySearch = (props: any) => {
    const searchRef = useRef<HTMLDivElement>(null);
    const widgetRef = useRef<widgetsSearch>();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!loaded) {
            const search = new SearchWidget({
                container: searchRef.current as HTMLDivElement,
                view: props.view,
                allPlaceholder: 'Address, owner, PIN, or REID',
                includeDefaultSources: false,
                popupEnabled: false,
            });
            widgetRef.current = search;
            search.sources = setSearchSources(props.addressTable, props.condosTable, props.propertyLayer, search);
            search.on('search-complete', (event) => {
                searchComplete(event).then((result: any) => {
                    props.searchComplete(result);
                });
            });
            search.watch('searchTerm', (searchTerm) => {
                if (searchTerm != checkPin(searchTerm)) {
                    search.searchTerm = checkPin(searchTerm);
                }
            });
            setLoaded(true);
        }
        return () => {
            console.log('cleanup');
        };
    }, [props.view, props.addressTable, props.condosTable, props.propertyLayer, props.searchComplete]); // only after initial render
    useEffect(() => {
        searchCondos(props.where, []).then((result) => {
            props.searchComplete(result);
        });
    }, [props.where]);
    return <div ref={searchRef}></div>;
};
