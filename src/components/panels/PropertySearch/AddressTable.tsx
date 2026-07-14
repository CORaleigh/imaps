// PropertyInfo.tsx

import "@arcgis/map-components/components/arcgis-feature";
import React, { useCallback, useEffect, useState, type RefObject } from "react";

import styles from "./PropertySearch.module.css";
import type Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import TableTemplate from "@arcgis/core/widgets/FeatureTable/support/TableTemplate";
import Collection from "@arcgis/core/core/Collection";
import type { ObjectId } from "@arcgis/core/views/types";
import PictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol";
import { clearAddressPoints } from "./search";

interface AddressTableProps {
  addressTableElement: RefObject<HTMLArcgisFeatureTableElement>;
  mapElement: RefObject<HTMLArcgisMapElement>;
  feature: Graphic;
  onExportClick: () => void;
}

const AddressTable: React.FC<AddressTableProps> = ({
  addressTableElement,
  feature,
  mapElement,
  onExportClick,
}) => {
  const [layer, setLayer] = useState<FeatureLayer | null>(null);

  const [filterIds, setFilterIds] = useState<Collection<ObjectId>>(
    new Collection([-1]),
  );
  const handleAddressTableReady = useCallback(
    async (event: HTMLArcgisFeatureTableElement["arcgisReady"]) => {
      event.target.tableTitle = `0 addresses`;

      const table = event.target;
      const tableTemplate: TableTemplate = new TableTemplate({
        columnTemplates: [
          {
            fieldName: "ADDRESS",
            label: "Address",
            type: "field",
            direction: "asc",
          },
          {
            fieldName: "FEATURETYPE",
            label: "Type",
            type: "field",
          },
        ],
      });
      table.tableTemplate = tableTemplate;

      const addresses = new FeatureLayer({
        portalItem: {
          id: "4d7f78186b0649d081ac56058b041fb7",
        },
        visible: false,
        listMode: "hide",
        outFields: ["ADDRESS", "FEATURETYPE"],
        definitionExpression: "1=1",
        title: "Addresses",
      });
      await addresses.load();
      setLayer(addresses);
      if (!mapElement.current.map?.findLayerById("address-graphics")) {
        mapElement.current.map?.add(
          new GraphicsLayer({
            id: "address-graphics",
            listMode: "hide",
          }),
        );
      }
      const grid =
        table.shadowRoot?.querySelector(".esri-grid__grid")?.shadowRoot;
      const style = document.createElement("style");
      style.textContent = `
        [part~="cell"] {
          white-space: normal !important;
          overflow-wrap: anywhere !important;
          line-height: 1.3 !important;
          padding: 4px !important;
          max-width: 50%;
        }
                  
      `;

      grid?.appendChild(style);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const handleAddressTableChange = (
    event: HTMLArcgisFeatureTableElement["arcgisPropertyChange"],
  ) => {
    if (event.detail.name === "size") {
      event.target.style.maxHeight = "500px";
      event.target.style.height = `${(event.target.size + 2) * 40 + 100}px`;
      event.target.tableTitle = `${event.target.size} ${
        event.target.size === 1 ? "address" : "addresses"
      }`;
    }
  };

  const handleAddressCellClick = async (
    event: HTMLArcgisFeatureTableElement["arcgisCellClick"],
  ) => {
    if (!event.detail.objectId) return;
    const oid = event.detail.objectId;
    const table = addressTableElement.current;
    if (table.highlightIds.includes(oid)) {
      table.highlightIds.removeAll();

      return;
    }
    table.highlightIds = new Collection([oid as number]);
  };

  const handleSelectionChange = async (
    event: HTMLArcgisFeatureTableElement["arcgisSelectionChange"],
  ) => {
    clearAddressPoints(mapElement.current);
    if (!event.detail.added.length || !layer) return;
    const oid = event.detail.added.at(0);
    const results = await layer.queryFeatures({
      objectIds: [oid as number],
      outFields: [],
      returnGeometry: true,
    });
    if (results.features.length) {
      const feature = results.features.at(0);
      if (feature) {
        feature.symbol = new PictureMarkerSymbol({
          url: "pin.svg",
          height: 24,
          width: 24,
        });
        (
          mapElement.current.map?.findLayerById(
            "address-graphics",
          ) as GraphicsLayer
        ).add(feature);
        mapElement.current.goTo({ target: feature });
      }
    }
  };

  useEffect(() => {
    if (!layer || !feature) return;
    let cancelled = false;
    setFilterIds(new Collection([-1]));
    const query = layer.createQuery();
    query.geometry = feature.geometry;
    query.spatialRelationship = "intersects";
    query.where = "1=1";

    layer.queryObjectIds(query).then((oids) => {
      if (!cancelled) {
        setFilterIds(
          oids.length > 0 ? new Collection(oids) : new Collection([-1]),
        );
      }
    });

    return () => {
      cancelled = true;
    };
  }, [feature, layer]);

  return (
    <>
      <arcgis-feature-table
        className={styles.featureTable}
        ref={addressTableElement}
        objectIds={filterIds}
        layer={layer}
        definitionExpression="ADDRESS IS NOT NULL"
        referenceElement={mapElement.current}
        onarcgisReady={handleAddressTableReady}
        onarcgisPropertyChange={handleAddressTableChange}
        hideSelectionColumn
        hideProgress
        onarcgisCellClick={handleAddressCellClick}
        onarcgisSelectionChange={handleSelectionChange}
        noDataMessage={"No addresses found"}
        hideMenuItemsRefreshData
        hideColumnVisibilityMenu
        style={{ marginBottom: "1em" }}
        hideColumnMenuItemsSortAscending
        hideColumnMenuItemsSortDescending
        hideMenuItemsSelectedRecordsShowAllToggle
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

export default React.memo(
  AddressTable,
  (prev, next) => prev.feature === next.feature,
);
