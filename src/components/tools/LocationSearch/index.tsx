import React from "react";
import "@esri/calcite-components/components/calcite-panel";
import "@arcgis/map-components/components/arcgis-search";
import "@esri/calcite-components/components/calcite-combobox";
import "@esri/calcite-components/components/calcite-combobox-item";
import { useLocationSearch } from "./useLocationSearch";
import styles from "./LocationSearch.module.css";
import TipManager from "../../TipsManager";

interface LocationSearchProps {
  mapElement: React.RefObject<HTMLArcgisMapElement>;
  closed: boolean;
  onToolClose: () => void;
  onHelpClick: (id: string) => void;
  style?: React.CSSProperties;
}

const LocationSearch: React.FC<LocationSearchProps> = ({
  mapElement,
  closed,
  onToolClose,
  onHelpClick
}) => {
  const {
    showIntersection,
    intersectingStreets,
    handleSearchReady,
    handleSelectResult,
    handleSearchClear,
    handleIntersectingStreetChange,
    goToOverride
  } = useLocationSearch(mapElement, closed);

  return (
    <calcite-panel
      id={styles.locationSearch}
      heading="Location Search"
      closable
      oncalcitePanelClose={() => onToolClose()}
      closed={closed}
      collapsible
    >
      <calcite-action
        slot="header-actions-end"
        icon="question-mark"
        text="Help"
        onClick={() => onHelpClick("location-search")}
      ></calcite-action>
      <TipManager name="location-search"></TipManager>
      <div className={styles.locationContainer}>
        <arcgis-search
          className={styles.searchContainer}
          referenceElement={mapElement.current}
          onarcgisReady={handleSearchReady}
          onarcgisSelectResult={handleSelectResult}
          onarcgisSearchClear={handleSearchClear}
          goToOverride={goToOverride}
        ></arcgis-search>
        <br />
        {showIntersection && (
          <calcite-combobox
            scale="m"
            overlayPositioning="fixed"
            label={"intersecting street"}
            selectionMode="single"
            placeholder="Select intersecting street"
            oncalciteComboboxChange={handleIntersectingStreetChange}
          >
            {intersectingStreets.map((street) => (
              <calcite-combobox-item
                key={street.getAttribute("CARTONAME")}
                value={street}
                heading={street.getAttribute("CARTONAME")}
              ></calcite-combobox-item>
            ))}
          </calcite-combobox>
        )}
      </div>
    </calcite-panel>
  );
};

export default LocationSearch;
