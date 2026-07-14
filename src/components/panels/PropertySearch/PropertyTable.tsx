// PropertyInfo.tsx

import "@arcgis/map-components/components/arcgis-feature-table";

import React, { type RefObject } from "react";

import styles from "./PropertySearch.module.css";

interface PropertyTableProps {
  tableElement: RefObject<HTMLArcgisFeatureTableElement>;
  mapElement: RefObject<HTMLArcgisMapElement>;
  onReady: (event: HTMLArcgisFeatureTableElement["arcgisReady"]) => void;

  onCellClick: (
    event: HTMLArcgisFeatureTableElement["arcgisCellClick"]
  ) => void;
  onExportClick: () => void;
}

const PropertyTable: React.FC<PropertyTableProps> = ({
  tableElement,
  mapElement,
  onReady,
  onCellClick,
  onExportClick,
}) => {
  return (
    <>
      <arcgis-feature-table
        className={styles.featureTable}
        ref={tableElement}
        referenceElement={mapElement.current}
        onarcgisReady={onReady}
        hideMenuItemsRefreshData
        hideSelectionColumn
        hideProgress
        onarcgisCellClick={onCellClick}
        noDataMessage={"No properties selected"}
        menuConfig={{
          items: [
            {
              label: "Export CSV",
              icon: "export",
              clickFunction: onExportClick,
            },
          ],
        }}
      ></arcgis-feature-table>
    </>
  );
};

export default PropertyTable;
