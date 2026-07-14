import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import FieldColumnTemplate from "@arcgis/core/widgets/FeatureTable/support/FieldColumnTemplate";
import TableTemplate from "@arcgis/core/widgets/FeatureTable/support/TableTemplate";
import Color from "@arcgis/core/Color";

import Field from "@arcgis/core/layers/support/Field";
import { getTableByTitle } from "../../../utils/layerHelper";
import type FieldInfo from "@arcgis/core/popup/FieldInfo";

export const createTableLayer = async (mapElement: HTMLArcgisMapElement) => {
  if (!mapElement || !mapElement.view.map) return;
  const table: FeatureLayer = getTableByTitle(
    mapElement,
    "Condos",
  ) as FeatureLayer;
  if (!table) {
    return;
  }

  try {
    await table.load();
  } catch {
    return;
  }

  const copyTable = new FeatureLayer({
    source: [],
    fields: table.fields,
    geometryType: "polygon",
    spatialReference: mapElement?.view.spatialReference,
    popupTemplate: table.popupTemplate,
    objectIdField: table.objectIdField,
    displayField: table.displayField,
    listMode: "hide",
    legendEnabled: false,
    // featureEffect: {
    //   includedEffect: "drop-shadow(2px, 2px, 2px, gray)",
    // },
    title: "Property",
    id: "feature-table",
    renderer: {
      type: "unique-value",
      field: "selected",
      orderByClassesEnabled: true,
      uniqueValueInfos: [
        {
          value: "yes",
          label: "Yes",
          symbol: {
            type: "simple-fill",
            style: "none",
            outline: {
              type: "simple-line",
              color: new Color("red"),
              width: 2,
              style: "solid",
            },
          },
        },
        {
          value: "no",
          label: "No",
          symbol: {
            type: "simple-fill",
            style: "none",
            outline: {
              type: "simple-line",
              color: new Color("#ffe44c"),
              width: 2,
              style: "solid",
            },
          },
        },
      ],
    },
  });
  copyTable.fields.push(
    new Field({
      type: "string",
      alias: "Selected",
      name: "selected",
      defaultValue: "no",
      length: 3,
    }),
  );
  mapElement.view.map.add(copyTable);

  await copyTable.load();
  mapElement?.map?.add(copyTable);
  return copyTable;
};

export const getTableTemplate = (
  layer: FeatureLayer,
  webMapId: string,
): TableTemplate => {
  const tableTemplate: TableTemplate = new TableTemplate({
    columnTemplates: [],
  });
  const storedFields = JSON.parse(
    window.localStorage.getItem(`imaps_${webMapId}_visibleColumns`) as string,
  );
  const ignoreFields = ["PARCELPK", "GlobalID", "OBJECTID"];
  const showColumns = ["SITE_ADDRESS", "OWNER", "REID", "PIN_NUM", "PIN_EXT"];
  showColumns.forEach((columnName) => {
    const field = layer?.popupTemplate?.fieldInfos?.find((column) => {
      return column.fieldName === columnName;
    }) as FieldInfo;
    if (field.fieldName === "SITE_ADDRESS") {
      field.label = "Address";
    }
    const columnTemplate = new FieldColumnTemplate({
      label: field.label,
      fieldName: field.fieldName as string,
      visible: field.fieldName
        ? storedFields
          ? storedFields.includes(field.fieldName)
          : showColumns.includes(field.fieldName)
        : false,
      editable: false,
      initialSortPriority: setSortPriority(field.fieldName as string),
      direction: "asc",
    });
    tableTemplate.columnTemplates.push(columnTemplate);
  });
  layer?.popupTemplate?.fieldInfos?.forEach((field) => {
    if (
      !ignoreFields.includes(field.fieldName as string) &&
      !showColumns.includes(field.fieldName as string)
    ) {
      tableTemplate.columnTemplates.push(
        new FieldColumnTemplate({
          label: field.label,
          fieldName: field.fieldName as string,
          visible: field.fieldName
            ? storedFields
              ? storedFields.includes(field.fieldName)
              : showColumns.includes(field.fieldName)
            : false,
          editable: false,
        }),
      );
    }
  });
  return tableTemplate;
};

const setSortPriority = (fieldName: string): number | null => {
  if (fieldName?.includes("PIN")) {
    return 2;
  } else if (fieldName?.includes("SITE_ADDRESS")) {
    return 0;
  } else if (fieldName?.includes("OWNER")) {
    return 1;
  } else {
    return -1;
  }
};
