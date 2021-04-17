/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import FeatureTable from '@arcgis/core/widgets/FeatureTable';
import FieldColumnConfig from '@arcgis/core/widgets/FeatureTable/FieldColumnConfig';
const getColumns = (layer: __esri.FeatureLayer): FieldColumnConfig[] => {
  const columns: FieldColumnConfig[] = [];

  const ignoreFields = ['OBJECTID', 'PARCELPK', 'GlobalID'];
  const showColumns = ['SITE_ADDRESS', 'OWNER', 'REID', 'PIN_NUM', 'PIN_EXT'];
  showColumns.forEach((columnName) => {
    const field = layer.fields.find((column) => {
      return column.name === columnName;
    }) as __esri.Field;
    columns.push(
      new FieldColumnConfig({
        alias: field.alias,
        name: field.name,
        field: field,
        layer: layer,
        visible: showColumns.includes(field.name),
      } as any),
    );
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

export const createFeatureTable = async (
  ref: any,
  view: __esri.MapView,
  layer: __esri.FeatureLayer,
): Promise<FeatureTable> => {
  await layer.load();
  const table = new FeatureTable({
    layer: layer,
    container: ref.current as HTMLDivElement,
    fieldConfigs: getColumns(layer),
    view: view,
    editingEnabled: false,
  });
  return table;
};
