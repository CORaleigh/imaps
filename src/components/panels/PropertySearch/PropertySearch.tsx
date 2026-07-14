// PropertySearch.tsx
import "@esri/calcite-components/components/calcite-panel";
import "@esri/calcite-components/components/calcite-tabs";
import "@esri/calcite-components/components/calcite-tab";
import "@esri/calcite-components/components/calcite-tab-nav";
import "@esri/calcite-components/components/calcite-tab-title";
import "@esri/calcite-components/components/calcite-popover";
import "@esri/calcite-components/components/calcite-tooltip";

import "@arcgis/map-components/components/arcgis-search";
import "@arcgis/map-components/components/arcgis-feature";
import "@arcgis/map-components/components/arcgis-feature-table";
import React from "react";

import styles from "./PropertySearch.module.css";
import PropertyInfo from "./PropertyInfo";
import AddressTable from "./AddressTable";
import SearchInput from "./SearchInput";
import PropertyTable from "./PropertyTable";

import { usePropertySearch } from "./usePropertySearch";
import TipManager from "../../TipsManager";

interface PropertySearchProps {
  mapElement: React.RefObject<HTMLArcgisMapElement>;
  closed: boolean;
  onPanelClose: () => void;
  onHelpClick: (id: string) => void;
}

const PropertySearch: React.FC<PropertySearchProps> = ({
  mapElement,
  closed,
  onPanelClose,
  onHelpClick,
}) => {
  const {
    tableElement,
    addressTableElement,
    searchElement,
    siteAddress,
    selectedTab,
    selectedCondo,
    webMapId,
    condos,
    handleSearchReady,
    handleSearchComplete,
    handleTableReady,
    handleTableCellClick,
    handleTabChange,
    handleClearClick,
    handleHistoryClick,
    handleExport,
    handleExportAddresses,
    handleSuggestStart,
    handleNextPropertySelected,
    handleTabClick,
  } = usePropertySearch(mapElement);

  return (
    <>
      <calcite-panel
        heading="Property Search"
        closable
        oncalcitePanelClose={() => onPanelClose()}
        closed={closed}
        id={styles.propertySearch}
      >
        <calcite-action
          slot="header-actions-end"
          icon="question-mark"
          text="Help"
          onClick={() => onHelpClick("property-search")}
        ></calcite-action>
        <TipManager name="property-search"></TipManager>
        <div slot="content-top" className={styles.searchTop}>
          <SearchInput
            searchElement={searchElement}
            mapElement={mapElement}
            webMapId={webMapId}
            onSearchReady={handleSearchReady}
            onSearchComplete={handleSearchComplete}
            onSuggestStart={handleSuggestStart}
            onClear={handleClearClick}
            onHistoryClick={handleHistoryClick}
          ></SearchInput>
        </div>

        <calcite-tabs position="bottom" scale="l" layout="center">
          <calcite-tab-nav
            slot="title-group"
            oncalciteTabChange={handleTabChange}
          >
            <calcite-tab-title
              label="list"
              selected={selectedTab === "list"}
              onClick={handleTabClick}
            >
              List
            </calcite-tab-title>
            <calcite-tab-title
              disabled={!selectedCondo}
              label="info"
              selected={selectedTab === "info"}
            >
              Info
            </calcite-tab-title>
          </calcite-tab-nav>

          <calcite-tab selected={selectedTab === "list"}>
            <PropertyTable
              tableElement={tableElement}
              mapElement={mapElement}
              onReady={handleTableReady}
              onCellClick={handleTableCellClick}
              onExportClick={handleExport}
            ></PropertyTable>
          </calcite-tab>

          <calcite-tab selected={selectedTab === "info"}>
            {selectedCondo && (
              <>
                <PropertyInfo
                  feature={selectedCondo}
                  condos={condos}
                  mapElement={mapElement}
                  tableElement={tableElement}
                  title={siteAddress}
                  onNextProperty={handleNextPropertySelected}
                ></PropertyInfo>
                <AddressTable
                  addressTableElement={addressTableElement}
                  mapElement={mapElement}
                  feature={selectedCondo}
                  onExportClick={handleExportAddresses}
                ></AddressTable>
              </>
            )}
          </calcite-tab>
        </calcite-tabs>
      </calcite-panel>
    </>
  );
};

export default React.memo(
  PropertySearch,
  (prev, next) =>
    prev.mapElement === next.mapElement &&
    prev.closed === next.closed &&
    prev.onPanelClose === next.onPanelClose,
);
