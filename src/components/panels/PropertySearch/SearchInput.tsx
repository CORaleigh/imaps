// PropertyInfo.tsx

import "@arcgis/map-components/components/arcgis-search";

import "@esri/calcite-components/components/calcite-action";
import "@esri/calcite-components/components/calcite-popover";
import "@esri/calcite-components/components/calcite-list";
import "@esri/calcite-components/components/calcite-list-item";

import React, { type RefObject } from "react";

import styles from "./PropertySearch.module.css";
import { getSearchHistory } from "./search";

interface SearchInputProps {
  searchElement: RefObject<HTMLArcgisSearchElement>;
  mapElement: RefObject<HTMLArcgisMapElement>;
  webMapId: RefObject<string>;
  onSearchReady: (event: HTMLArcgisSearchElement["arcgisReady"]) => void;
  onSearchComplete: (event: HTMLArcgisSearchElement["arcgisSearchComplete"]) => void;
  onSuggestStart: (
    event: HTMLArcgisSearchElement["arcgisSuggestStart"],
  ) => void;
  onClear: () => void;
  onHistoryClick: (
    event: React.MouseEvent<HTMLCalciteListItemElement, MouseEvent>,
  ) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  searchElement,
  mapElement,
  webMapId,
  onSearchReady,
  onSearchComplete,
  onSuggestStart,
  onClear,
  onHistoryClick,
}) => {
  return (
    <>
      <arcgis-search
        className={styles.searchContainer}
        ref={searchElement}
        referenceElement={mapElement.current}
        includeDefaultSourcesDisabled
        locationDisabled
        onarcgisReady={onSearchReady}
        onarcgisSearchComplete={onSearchComplete}
        onarcgisSuggestStart={onSuggestStart}
        popupDisabled
        allPlaceholder=""
      ></arcgis-search>
      <calcite-action
        id="history-popover-button"
        icon="clock"
        text="History"
        scale="m"
      ></calcite-action>
      <calcite-tooltip closeOnClick referenceElement="history-popover-button">
        Search History
      </calcite-tooltip>
      <calcite-action
        id="search-clear-button"
        icon="trash"
        text="Clear"
        scale="m"
        onClick={onClear}
      ></calcite-action>
      <calcite-tooltip closeOnClick referenceElement="search-clear-button">
        Clear search
      </calcite-tooltip>

      <calcite-popover
        heading="Search History"
        scale="s"
        label="Search History"
        referenceElement="history-popover-button"
        closable
        autoClose
      >
        <calcite-list label={"search history list"}>
          {getSearchHistory(webMapId.current).map((term, i) => (
            <calcite-list-item
              key={`history_${i}`}
              label={term}
              onClick={onHistoryClick}
            >
              <calcite-action
                slot="actions-end"
                text="Search"
                icon="search"
                scale="s"
              ></calcite-action>
            </calcite-list-item>
          ))}
        </calcite-list>
      </calcite-popover>
    </>
  );
};

export default SearchInput;
