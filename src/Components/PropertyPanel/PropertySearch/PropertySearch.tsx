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
      //fix for Safari issue
      //document.querySelector('calcite-shell-panel[slot=contextual-panel')?.append(searchRef.current as HTMLDivElement);
      searchRef.current as HTMLDivElement;
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
          debugger;
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
  }, [props.view, props.addressTable, props.condosTable, props.propertyLayer, props.searchComplete]); // only after initial render
  useEffect(() => {
    if (props.where != 'OBJECTID IS NULL') {
      searchCondos(props.where, [])
        .then((result) => {
          props.searchComplete(result);
        })
        .catch((reason: any) => {
          console.log(reason);
        });
    }
  }, [props.where]);
  return (
    <div className="flex">
      <div ref={searchRef}></div>
      <calcite-tooltip-manager>
        <calcite-action
          id="propertyClear"
          icon="trash"
          scale="s"
          onClick={() => {
            widgetRef.current?.clear();
            props.clear();
          }}
        ></calcite-action>
        <calcite-tooltip label="Tooltip label" reference-element="propertyClear" placement="bottom">
          Clear selected properties
        </calcite-tooltip>
      </calcite-tooltip-manager>
    </div>
  );
};
export default PropertySearch;
