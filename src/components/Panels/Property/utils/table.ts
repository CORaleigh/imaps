import MapView from '@arcgis/core/views/MapView';
import FeatureTable from '@arcgis/core/widgets/FeatureTable';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import FieldColumnTemplate from '@arcgis/core/widgets/FeatureTable/support/FieldColumnTemplate';
import TableTemplate from '@arcgis/core/widgets/FeatureTable/support/TableTemplate';
import FeatureSet from '@arcgis/core/rest/support/FeatureSet';
import Graphic from '@arcgis/core/Graphic';
import { saveAs } from 'file-saver';

import '../PropertyTable/PropertyTable.css';
import { getProperty } from './search';
let featureTable: FeatureTable;

type CellActivateEvent = CustomEvent<{
  model: {
    item: {
      feature: Graphic; // Replace with the actual type of feature
      objectId: string | number; // Adjust based on your use case
      // Add any other properties you need here
    };
  };
}>;

export const initializeFeatureTable = async (
  ref: HTMLDivElement,
  view: MapView,
  featureSelected: (selectedFeature: Graphic) => void,
): Promise<FeatureTable> => {
  const table: __esri.FeatureLayer = (await getTableLayer(
    view,
  )) as __esri.FeatureLayer;
  featureTable = new FeatureTable({
    container: ref,
    view: view,
    editingEnabled: false,
    multiSortEnabled: true,
    visibleElements: {
      selectionColumn: false,
      menuItems: {
        refreshData: false,
        toggleColumns: true,
        clearSelection: false,
        deleteSelection: false,
        selectedRecordsShowAllToggle: false,
        selectedRecordsShowSelectedToggle: false,
        zoomToSelection: false,
      },
    },
    menuConfig: {
      items: [
        {
          label: 'Export',
          icon: 'export',
          clickFunction: () => {
            exportTable(featureTable);
          },
          hidden: () => {
            return false;
          },
        },
      ],
    },
    tableTemplate: getTableTemplate(table),
    layer: table,
  });
  document.addEventListener(
    'visibilitychange',
    () => {
      if (document.hidden) {
        const visibleFields = (featureTable.columns as __esri.Collection<__esri.FieldColumn>)
          .filter((column: __esri.FieldColumn) => {
            return !(column as any).hidden;
          })
          .map((column: __esri.FieldColumn) => {
            return column.field.name;
          });
        window.localStorage.setItem(
          'imaps_table_template',
          JSON.stringify(visibleFields),
        );
      }
    },
    { passive: true },
  );
  await featureTable?.when();
  //featureTable.menu.items = featureTable.menu.items.reverse();

  featureTable.highlightIds.on('change', async (e) => {
    if (e.added.length) {
      const fs: FeatureSet = await (
        featureTable.layer as __esri.FeatureLayer
      ).queryFeatures({
        where: `OBJECTID = ${e.added[0]}`,
        outFields: ['REID'],
        returnGeometry: false,
      });

      if (fs.features.length) {
        const condoTable = view.map.allTables.find((table: __esri.Layer) => {
          return table.title.includes('Condo');
        }) as __esri.FeatureLayer;
        featureTable.layer as __esri.FeatureLayer;
        const featureSet: FeatureSet = await condoTable.queryFeatures({
          where: `REID = '${fs.features[0].getAttribute('REID')}'`,
          outFields: ['*'],
          returnGeometry: false,
        });

        if (featureSet.features.length) {
          const oid = featureSet.features[0].getAttribute('OBJECTID');
          const properties = await getProperty([oid]);
          if (properties.length) {
            featureSet.features[0].geometry = properties[0].geometry;

            featureSelected(featureSet.features[0]);
          }
        }
      }
    }
  });
  initializeGrid(featureTable);

  return featureTable;
};
const initializeGrid = (featureTable: FeatureTable) => {
  (featureTable.findColumn('REID') as any).width = 110;
  (featureTable.findColumn('SITE_ADDRESS') as any).width = 140;
  (featureTable.findColumn('PIN_NUM') as any).width = 110;
  (featureTable.findColumn('OWNER') as any).width = 150;
  featureTable.refresh();

  requestAnimationFrame(() => {
    const grid = (featureTable.container as HTMLElement).querySelector(
      'vaadin-grid',
    ) as any;
    featureTable.title = '0 properties selected';
    //set tabpanel to 100% in shadowRoot
    (featureTable.container as HTMLElement).parentElement?.shadowRoot
      ?.querySelector('[role="tabpanel"]')
      ?.setAttribute('style', 'height: 100%');
    grid?.addEventListener(
      'cell-activate',
      (e: CellActivateEvent) => {
        featureTable.highlightIds.removeAll();
        const feature = e.detail.model.item.feature;

        featureTable.highlightIds.add(e.detail.model.item.objectId);
        //featureTable.highlightIds.add(e.detail.model.index);
      },
      { passive: true },
    );
  });
};

const getTableLayer = async (view: MapView) => {
  const table = view.map.allTables.find((table: __esri.Layer) => {
    return table.title.includes('Condo');
  }) as __esri.FeatureLayer;
  try {
    await table.load();

    const copyTable = new FeatureLayer({
      source: [],
      fields: table.fields,
      geometryType: 'polygon',
      spatialReference: view.spatialReference,
      popupTemplate: table.popupTemplate,
      objectIdField: table.objectIdField,
      displayField: table.displayField,
      id: 'feature-table',
    });
    // copyTable.fields.forEach((field) => {
    //   field.nullable = true;
    //   if (field.name === "DEED_DATE") {
    //     field.type = "string";
    //   }
    // });
    view.map.allTables.add(copyTable);

    await copyTable.load();
    return copyTable;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
const setSortPriority = (fieldName: string): number | null => {
  if (fieldName.includes('PIN')) {
    return 2;
  } else if (fieldName.includes('SITE_ADDRESS')) {
    return 0;
  } else if (fieldName.includes('OWNER')) {
    return 1;
  } else {
    return -1;
  }
};
const getTableTemplate = (layer: __esri.FeatureLayer): TableTemplate => {
  const tableTemplate: TableTemplate = new TableTemplate({
    columnTemplates: [],
  });
  const storedFields = JSON.parse(
    window.localStorage.getItem('imaps_table_template') as string,
  );
  const ignoreFields = ['OBJECTID', 'PARCELPK', 'GlobalID'];
  const showColumns = ['SITE_ADDRESS', 'OWNER', 'REID', 'PIN_NUM', 'PIN_EXT'];
  //const showColumns: string[] = storedFields ? storedFields : ["SITE_ADDRESS", "OWNER", "REID", "PIN_NUM", "PIN_EXT"];
  showColumns.forEach((columnName) => {
    const field = layer.popupTemplate.fieldInfos.find((column) => {
      return column.fieldName === columnName;
    }) as __esri.FieldInfo;
    if (field.fieldName === 'SITE_ADDRESS') {
      field.label = 'Address';
    }
    const columnTemplate = new FieldColumnTemplate({
      label: field.label,
      fieldName: field.fieldName,
      visible: storedFields
        ? storedFields.includes(field.fieldName)
        : showColumns.includes(field.fieldName),
      editable: false,
      initialSortPriority: setSortPriority(field.fieldName),
      direction: 'asc',
    } as any);
    tableTemplate.columnTemplates.push(columnTemplate);
  });
  layer.popupTemplate.fieldInfos.forEach((field) => {
    if (
      !ignoreFields.includes(field.fieldName) &&
      !showColumns.includes(field.fieldName)
    ) {
      tableTemplate.columnTemplates.push(
        new FieldColumnTemplate({
          label: field.label,
          fieldName: field.fieldName,
          visible: storedFields
            ? storedFields.includes(field.fieldName)
            : showColumns.includes(field.fieldName),
          editable: false,
        } as any),
      );
    }
  });
  return tableTemplate;
};

export const updateTable = async (
  features: Graphic[],
  featureTable: FeatureTable,
) => {
  if (featureTable) {
    try {
      const result: FeatureSet = await (
        featureTable.layer as __esri.FeatureLayer
      ).queryFeatures({
        where: '1=1',
        returnGeometry: true,
      });
      features.forEach((feature) => {
        let address = feature.getAttribute('SITE_ADDRESS');
        if (feature.getAttribute('STMISC') === '1/2') {
          address = address.replace(' ', ` 1/2 `);
        } else if (feature.getAttribute('STMISC')) {
          address = `${address} ${feature.getAttribute('STMISC')}`;
        }
        feature.setAttribute('SITE_ADDRESS', address);
      });
      await (featureTable.layer as __esri.FeatureLayer).applyEdits({
        deleteFeatures: result.features,
      });
      await (featureTable.layer as __esri.FeatureLayer).applyEdits({
        addFeatures: features,
      });

      requestAnimationFrame(() => {
        featureTable.refresh();
      });
      featureTable.title = `${features.length} ${features.length === 1 ? 'property' : 'properties'} selected`;
    } catch (error) {
      console.log(error);
    }
  }
};

const exportTable = async (table: FeatureTable) => {
  const result = await (table.layer as FeatureLayer).queryFeatures({
    where: '1=1',
    outFields: ['*'],
  });

  let csv = '';
  (table.tableTemplate.columnTemplates as __esri.FieldColumnTemplate[]).forEach(
    (field: __esri.FieldColumnTemplate) => {
      csv += `${field.label},`;
    },
  );
  csv += '\r\n';
  result.features.forEach((feature) => {
    (
      table.tableTemplate.columnTemplates as __esri.FieldColumnTemplate[]
    ).forEach((field: __esri.FieldColumnTemplate) => {
      if (feature.attributes[field.fieldName]) {
        if (field.fieldName.toLowerCase().includes('date')) {
          csv += `"${new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          }).format(new Date(feature.attributes[field.fieldName]))}",`;
        } else if (field.fieldName.toLowerCase().includes('acres')) {
          csv += `"${parseFloat(feature.attributes[field.fieldName]).toFixed(2)}",`;
        } else {
          csv += `"${feature.attributes[field.fieldName]}",`;
        }
      } else {
        csv += `"",`;
      }
    });
    csv += '\r\n';
  });
  let datestr = new Date().toISOString().split('.')[0];
  datestr = datestr.replaceAll(':', '').replaceAll('-', '');
  const exportedFilename = `imaps_export_${datestr}.csv`;

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  saveAs(blob, exportedFilename);
  table.menuConfig.open = false;
  //table.menu.open = false;
  // const link = document.createElement('a');
  // if (link.download !== undefined) {
  //   const url = URL.createObjectURL(blob);
  //   link.setAttribute('href', url);
  //   link.setAttribute('download', exportedFilenmae);
  //   link.style.visibility = 'hidden';
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // }
};
