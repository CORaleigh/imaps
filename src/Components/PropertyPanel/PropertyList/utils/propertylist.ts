/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import FeatureTable from '@arcgis/core/widgets/FeatureTable';
import FieldColumnConfig from '@arcgis/core/widgets/FeatureTable/FieldColumnConfig';
import ButtonMenuItem from '@arcgis/core/widgets/FeatureTable/Grid/support/ButtonMenuItem';
const getColumns = (layer: __esri.FeatureLayer): FieldColumnConfig[] => {
  const columns: FieldColumnConfig[] = [];

  const ignoreFields = ['OBJECTID', 'PARCELPK', 'GlobalID'];
  const showColumns = ['SITE_ADDRESS', 'OWNER', 'REID', 'PIN_NUM', 'PIN_EXT'];
  showColumns.forEach((columnName) => {
    const field = layer.fields.find((column) => {
      return column.name === columnName;
    }) as __esri.Field;

    const config = new FieldColumnConfig({
      alias: field.alias,
      name: field.name,
      field: field,
      layer: layer,
      visible: showColumns.includes(field.name),
      editable: false,
    } as any);
    columns.push(config);
  });
  layer.fields.forEach((field) => {
    if (!ignoreFields.includes(field.name) && !showColumns.includes(field.name)) {
      columns.push(
        new FieldColumnConfig({
          alias: field.alias,
          name: field.name,
          field: field,
          layer: layer,
          visible: showColumns.includes(field.name),
        } as any),
      );
    }
  });
  return columns;
};

const exportTable = (layer: __esri.FeatureLayer): void => {
  layer.queryFeatures({ where: layer.definitionExpression, outFields: ['*'] }).then((result) => {
    let csv = '';
    result.fields.forEach((field) => {
      csv += `${field.alias},`;
    });
    csv += '\r\n';
    result.features.forEach((feature) => {
      for (const key in feature.attributes) {
        if (feature.attributes[key]) {
          if (key.toLowerCase().includes('date')) {
            csv += `"${new Date(feature.attributes[key]).toDateString()}",`;
          } else if (key.toLowerCase().includes('acres')) {
            csv += `"${parseFloat(feature.attributes[key]).toFixed(2)}",`;
          } else {
            csv += `"${feature.attributes[key]}",`;
          }
        } else {
          csv += `"",`;
        }
      }
      csv += '\r\n';
    });
    let datestr = new Date().toISOString();
    datestr = datestr.replaceAll(':', '').replaceAll('-', '');
    const exportedFilenmae = `imaps_export_${datestr}.csv`;

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', exportedFilenmae);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  });
};

export const createFeatureTable = async (
  ref: any,
  view: __esri.MapView,
  layer: __esri.FeatureLayer,
): Promise<FeatureTable> => {
  await layer.load();
  layer.customParameters = { maxRecordCountFactor: 2 };
  const table = new FeatureTable({
    layer: layer,
    container: ref.current as HTMLDivElement,
    fieldConfigs: getColumns(layer),
    view: view,
    editingEnabled: false,
    visibleElements: {
      header: true,
      menu: true,
      menuItems: {
        clearSelection: false,
        refreshData: true,
        toggleColumns: true,
      },
      selectionColumn: false,
    },
    menuConfig: {
      items: [
        new ButtonMenuItem({
          label: 'Export',
          iconClass: 'esri-icon-download',
          clickFunction: () => {
            exportTable(layer);
          },
        }),
      ],
    },
  });

  return table;
};
