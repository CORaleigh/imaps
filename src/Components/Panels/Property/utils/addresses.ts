import MapView from "@arcgis/core/views/MapView";
import FeatureTable from "@arcgis/core/widgets/FeatureTable";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import FieldColumnTemplate from "@arcgis/core/widgets/FeatureTable/support/FieldColumnTemplate";
import TableTemplate from "@arcgis/core/widgets/FeatureTable/support/TableTemplate";
import FeatureSet from "@arcgis/core/rest/support/FeatureSet";
import Graphic from "@arcgis/core/Graphic";
import ButtonMenuItem from "@arcgis/core/widgets/FeatureTable/Grid/support/ButtonMenuItem";

import PictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol";
import { clearAddressPoints } from "./property";
let featureTable: FeatureTable;
export function initializeFeatureTable(
  ref: HTMLDivElement,
  view: MapView
): Promise<FeatureTable> {
  return new Promise((resolve, reject) => {
    getTableLayer(view).then((table: any) => {
      featureTable = new FeatureTable({
        container: ref,
        view: view,
        editingEnabled: false,
        multiSortEnabled: true,
        visibleElements: {
          selectionColumn: false,
          menuItems: {
            refreshData: false,
            toggleColumns: false,
          },
        },
        menuConfig: {
          items: [
            new ButtonMenuItem({
              label: "Export",
              iconClass: "esri-icon-download",
              clickFunction: () => {
                exportTable(featureTable);
              },
            }),
          ],
        },
        tableTemplate: getTableTemplate(table),
        layer: table,
      });
      featureTable?.when(() => {
        resolve(featureTable);
        initializeGrid(featureTable);

        featureTable.on("selection-change", (e) => {
          if (e.added.length) {
            (featureTable.layer as __esri.FeatureLayer)
              .queryFeatures({
                objectIds: [e.added[0].feature.getObjectId()],
                returnGeometry: true,
              })
              .then((featureSet) => {
                if (featureSet.features.length) {
                  const feature = featureSet.features[0];
                  feature.setAttribute("type", "address");
                  feature.symbol = new PictureMarkerSymbol({
                    url: "assets/pin.svg",
                    height: 24,
                    width: 24,
                  });
                  clearAddressPoints(view);

                  view.graphics.add(feature);

                  view.goTo(
                    { target: feature, zoom: 18 },
                    { easing: "ease-in-out", duration: 1000 }
                  );
                }
              });
          }
        });
      });
    });
  });
}
function initializeGrid(featureTable: FeatureTable) {
  (featureTable.findColumn("ADDRESS") as any).width = 150;
  (featureTable.findColumn("FEATURETYPE") as any).width = 150;

  setTimeout(() => {
    const grid = (featureTable.container as HTMLElement).querySelector(
      "vaadin-grid"
    ) as any;
    grid?.addEventListener("click", (e: any) => {
      if ((e.target as HTMLElement).nodeName === "VAADIN-GRID-CELL-CONTENT") {
        featureTable.highlightIds.removeAll();
        const item = (grid.getEventContext(e) as any)?.item;
        const feature = item.feature;
        //            featureTable.view.goTo(feature);
        featureTable.highlightIds.add(feature.getAttribute("OBJECTID"));
      }
    });
  }, 2000);
}
let addressLayer: FeatureLayer;

function getTableLayer(view: MapView) {
  return new Promise((resolve, reject) => {
    const layer = new FeatureLayer({
      portalItem: {
        id: "318be24592ea4dcba042511b3125fd53",
      },
      layerId: 2,
    });
    addressLayer = layer;
    layer.load().then((table) => {
      const copyTable = new FeatureLayer({
        source: [],
        fields: table.fields,
        geometryType: "point",
        spatialReference: view.spatialReference,
        popupTemplate: table.popupTemplate,
        objectIdField: table.objectIdField,
        displayField: table.displayField,
        id: "feature-table",
      });
      copyTable.fields.forEach((field) => {
        field.nullable = true;
        if (field.name === "DEED_DATE") {
          field.type = "string";
        }
      });
      view.map.allTables.add(copyTable);

      copyTable
        .load()
        .then((copyTable: FeatureLayer) => {
          resolve(copyTable);
        })
        .catch((reason) => {
          console.log(reason);
        });
    });
  });
}
function getTableTemplate(layer: __esri.FeatureLayer): TableTemplate {
  const tableTemplate: TableTemplate = new TableTemplate({
    columnTemplates: [
      new FieldColumnTemplate({
        label: "Address",
        fieldName: "ADDRESS",
        editable: false,
        initialSortPriority: 0,
        direction: "asc",
      }),
      new FieldColumnTemplate({
        label: "Type",
        fieldName: "FEATURETYPE",
        editable: false,
        initialSortPriority: 1,
        direction: "asc",
      }),
    ],
  });
  return tableTemplate;
}

export function updateTable(property: Graphic, featureTable: FeatureTable) {
  if (featureTable) {
    clearAddressPoints(featureTable.view as __esri.MapView);
    addressLayer
      ?.queryFeatures({
        geometry: property.geometry,
        outFields: ["ADDRESS", "FEATURETYPE"],
        returnGeometry: true,
        where: "1=1",
      })
      .then((featureSet) => {
        (featureTable.layer as __esri.FeatureLayer)
          .queryFeatures({
            where: "1=1",
            returnGeometry: true,
          })
          .then((result: FeatureSet) => {
            (featureTable.layer as __esri.FeatureLayer)
              .applyEdits({ deleteFeatures: result.features })
              .then((result) => {
                (featureTable.layer as __esri.FeatureLayer)
                  .applyEdits({ addFeatures: featureSet.features })
                  .then((result) => {
                    featureTable.refresh();
                  })
                  .catch((reason) => {
                    console.log(reason);
                  });
              })
              .catch((reason) => {
                console.log(reason);
              });
          });
      });
  }
}

const exportTable = (table: FeatureTable): void => {
  (table.layer as FeatureLayer)
    .queryFeatures({
      where: "1=1",
      outFields: ["*"],
      orderByFields: ["ADDRESS", "FEATURETYPE"],
    })
    .then((result) => {
      let csv = "";
      (
        table.tableTemplate.columnTemplates as __esri.FieldColumnTemplate[]
      ).forEach((field: __esri.FieldColumnTemplate) => {
        csv += `${field.label},`;
      });
      csv += "\r\n";
      result.features.forEach((feature) => {
        (
          table.tableTemplate.columnTemplates as __esri.FieldColumnTemplate[]
        ).forEach((field: __esri.FieldColumnTemplate) => {
          if (feature.attributes[field.fieldName]) {
            csv += `"${feature.attributes[field.fieldName]}",`;
          } else {
            csv += `"",`;
          }
        });
        csv += "\r\n";
      });
      let datestr = new Date().toISOString();
      datestr = datestr.replaceAll(":", "").replaceAll("-", "");
      const exportedFilename = `imaps_addresses_export_${datestr}.csv`;

      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", exportedFilename);
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    });
};
