/* eslint-disable @typescript-eslint/no-explicit-any */
import * as promiseUtils from '@arcgis/core/core/promiseUtils';
import { GridElement } from '@vaadin/vaadin-grid';
import { GridSortColumnElement } from '@vaadin/vaadin-grid/vaadin-grid-sort-column';
export const setColumnRenderer = (grid: GridElement, layer: __esri.FeatureLayer): void => {
  const columns: NodeListOf<GridSortColumnElement> = grid.querySelectorAll(
    'vaadin-grid-sort-column',
  ) as NodeListOf<GridSortColumnElement>;

  //configureMenuButton(layer, menuButton, columns);

  columns.forEach((col: GridSortColumnElement) => {
    col.renderer = (root: any, column: any, rowData: any) => {
      // Check if there is a container generated with the previous renderer call to update its content instead of recreation
      const field = layer.fields.find((f) => {
        return f.alias === column.header;
      }) as __esri.Field;
      if (!root.firstElementChild) {
        root.innerHTML = '<div style="white-space: normal;font-size: 14px;"></div>';
      }
      if (field) {
        root.firstElementChild.textContent = rowData.item.attributes[field.name];
      }
    };
  });
};
export const createColumns = (layer: __esri.FeatureLayer): any[] => {
  const columns: any[] = [];
  const ignoreFields = ['OBJECTID', 'PARCELPK', 'GlobalID'];
  const showColumns = ['ADDRESS', 'FEATURETYPE'];
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
export const createFeatureTable = (layer: __esri.FeatureLayer): Promise<any[]> => {
  return promiseUtils.create((resolve) => {
    layer.load().then(() => {
      //   layer.popupTemplate.fieldInfos.forEach((field) => {
      //     if (['SITE_ADDRESS', 'OWNER', 'PIN_NUM', 'PIN_EXT', 'REID'].includes(field.fieldName)) {
      //       field.visible = true;
      //     } else {
      //       field.visible = false;
      //     }
      //   });
      customElements.whenDefined('vaadin-grid').then(() => {
        resolve(createColumns(layer));
      });
    });
  });
};
