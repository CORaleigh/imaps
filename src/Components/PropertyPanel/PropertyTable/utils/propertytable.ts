import { GridElement } from '@vaadin/vaadin-grid';
import { GridColumnElement } from '@vaadin/vaadin-grid/src/vaadin-grid-column';
import { GridSortColumnElement } from '@vaadin/vaadin-grid/vaadin-grid-sort-column';
import ButtonMenu from '@arcgis/core/widgets/FeatureTable/Grid/support/ButtonMenu';
let definitionExpression = '';
export const setColumnRenderer = (
  grid: GridElement,
  layer: __esri.FeatureLayer,
  menuButton: HTMLButtonElement,
): void => {
  const columns: NodeListOf<GridSortColumnElement> = grid.querySelectorAll(
    'vaadin-grid-sort-column',
  ) as NodeListOf<GridSortColumnElement>;

  configureMenuButton(layer, menuButton, columns);

  columns.forEach((col: GridSortColumnElement) => {
    col.renderer = (root: any, column: any, rowData: any) => {
      // Check if there is a container generated with the previous renderer call to update its content instead of recreation
      const field = layer.fields.find((f) => {
        return f.alias === column.header;
      }) as __esri.Field;

      if (!root.firstElementChild) {
        root.innerHTML = '<div style="white-space: normal"></div>';
      }
      if (field) {
        field.editable = false;
        root.firstElementChild.textContent = rowData.item.attributes[field.name];
        if (field.name.includes('DATE')) {
          if (rowData.item.attributes[field.name]) {
            root.firstElementChild.textContent = new Date(rowData.item.attributes[field.name]).toLocaleDateString();
          }
        }
        if (field.name.includes('VAL') || field.name.includes('PRICE')) {
          if (rowData.item.attributes[field.name]) {
            root.firstElementChild.textContent = `$${rowData.item.attributes[field.name].toLocaleString('en-US', {
              maximumFractionDigits: 0,
            })}`;
          }
        }
      }
    };
  });
};

const configureMenuButton = (
  layer: __esri.FeatureLayer,
  menuButton: HTMLButtonElement,
  columns: NodeListOf<GridSortColumnElement>,
) => {
  new ButtonMenu({
    iconClass: 'esri-icon-handle-horizontal',
    container: menuButton,
    items: [
      {
        label: 'Export',
        clickFunction: () => {
          exportTable(layer);
        },
      },
      {
        label: 'Show/Hide Columns',
        iconClass: 'esri-icon-right',
        autoCloseMenu: false,
        items: layer.popupTemplate.fieldInfos
          .filter((field: __esri.FieldInfo) => {
            return !['OBJECTID', 'GlobalID'].includes(field.fieldName);
          })
          .map((field: __esri.FieldInfo) => {
            return {
              label: field.label,
              selectionEnabled: true,
              selected: field.visible,
              iconClass: 'esri-icon-check-mark',
              clickFunction: (event: any) => {
                const fieldInfo = layer.popupTemplate.fieldInfos.find((field) => {
                  return field.label === event.item.label;
                }) as __esri.FieldInfo;
                fieldInfo.visible = event.item.selected;
                //this.createColumns();

                const column = Array.from(columns)?.find((column: GridColumnElement) => {
                  return column?.getAttribute('name') === fieldInfo.fieldName;
                }) as GridColumnElement;
                column.hidden = !event.item.selected;
              },
            };
          }),
        clickFunction: function (event) {
          event.item.iconClass = 'esri-icon-down';
        },
      },
    ],
  });
};

export const createFeatureTable = (layer: __esri.FeatureLayer): Promise<any[]> => {
  return new Promise((resolve) => {
    layer.load().then(() => {
      layer.popupTemplate.fieldInfos.forEach((field) => {
        if (['SITE_ADDRESS', 'OWNER', 'PIN_NUM', 'PIN_EXT', 'REID'].includes(field.fieldName)) {
          field.visible = true;
        } else {
          field.visible = false;
        }
      });
      customElements.whenDefined('vaadin-grid').then(() => {
        resolve(createColumns(layer));
      });
    });
  });
};
export const createColumns = (layer: __esri.FeatureLayer): any[] => {
  const columns: any[] = [];
  const ignoreFields = ['OBJECTID', 'PARCELPK', 'GlobalID'];
  const showColumns = ['SITE_ADDRESS', 'OWNER', 'REID', 'PIN_NUM', 'PIN_EXT'];
  showColumns.forEach((columnName) => {
    const field = layer.fields.find((column) => {
      return column.name === columnName;
    }) as __esri.Field;
    const column = {
      path: `attributes.${field.name}`,
      header: field.alias,
      width: '12em',
      name: field.name,
      key: `${field.name.toLowerCase()}_column`,
    };
    columns.push(column);
  });
  layer.fields.forEach((field) => {
    if (!ignoreFields.includes(field.name) && !showColumns.includes(field.name)) {
      const column = {
        path: `attributes.${field.name}`,
        header: field.alias,
        width: '12em',
        name: field.name,
        key: `${field.name.toLowerCase()}_column`,
        hidden: true,
      };
      columns.push(column);
    }
  });
  return columns;
};

export const getFeatures = (layer: __esri.FeatureLayer, filter: string, grid: GridElement): Promise<number> => {
  definitionExpression = filter;
  return new Promise((resolve) => {
    layer
      .queryFeatures({ where: filter, returnGeometry: true, outFields: ['*'] })
      .then((featureSet: __esri.FeatureSet) => {
        grid.items = featureSet.features;
        grid.scrollToIndex(0);
        resolve(featureSet.features.length);
      });
  });
};

const exportTable = (layer: __esri.FeatureLayer): void => {
  layer.queryFeatures({ where: definitionExpression, outFields: ['*'] }).then((result) => {
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
