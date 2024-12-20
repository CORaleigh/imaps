import MapView from '@arcgis/core/views/MapView';
import FeatureTable from '@arcgis/core/widgets/FeatureTable';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';

import FieldColumnTemplate from '@arcgis/core/widgets/FeatureTable/support/FieldColumnTemplate';
import TableTemplate from '@arcgis/core/widgets/FeatureTable/support/TableTemplate';
import FeatureSet from '@arcgis/core/rest/support/FeatureSet';
import Graphic from '@arcgis/core/Graphic';
import ButtonMenuItem from '@arcgis/core/widgets/FeatureTable/Grid/support/ButtonMenuItem';

import PictureMarkerSymbol from '@arcgis/core/symbols/PictureMarkerSymbol';
import { saveAs } from 'file-saver';
import { clearAddressPoints } from './property';
let featureTable: FeatureTable;
let selectedProperty: Graphic;
export const initializeFeatureTable = async (
  ref: HTMLDivElement,
  view: MapView,
): Promise<FeatureTable> => {
  const table: FeatureLayer | undefined = await getTableLayer(view);
  featureTable = new FeatureTable({
    container: ref,
    view: view,
    editingEnabled: false,
    multiSortEnabled: false,
    title: '0 addresses on property',
    visibleElements: {
      selectionColumn: false,
      menuItems: {
        refreshData: false,
        toggleColumns: false,
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
          hidden: () => false,
        },
      ],
    },
    tableTemplate: getTableTemplate(),
    layer: table,
  });
  await featureTable?.when();
  featureTable.highlightIds.on('change', selectionChanged);
  initializeGrid(featureTable);
  if (!view.map.findLayerById('address-graphics')) {
    view.map.add(
      new GraphicsLayer({
        id: 'address-graphics',
        listMode: 'hide',
      }),
    );
  }
  return featureTable;
};

const selectionChanged = async (e: __esri.CollectionChangeEvent) => {
  if (e.added.length) {
    const featureSet: FeatureSet = await (
      featureTable.layer as __esri.FeatureLayer
    ).queryFeatures({
      objectIds: [e.added[0]],
      returnGeometry: true,
    });

    if (featureSet.features.length) {
      const feature = featureSet.features[0];
      feature.setAttribute('type', 'address');
      feature.symbol = new PictureMarkerSymbol({
        url: 'assets/pin.svg',
        height: 24,
        width: 24,
      });
      clearAddressPoints(featureTable.view as __esri.MapView);
      if (featureTable.view.map.findLayerById('address-graphics')) {
        const addressGraphics = featureTable.view.map.findLayerById(
          'address-graphics',
        ) as __esri.GraphicsLayer;
        addressGraphics.add(feature);
      }
      featureTable.view.goTo(
        { target: feature, zoom: 18 },
        { easing: 'ease-in-out' as any, duration: 1000 },
      );
    }
  }
};
const initializeGrid = (featureTable: FeatureTable) => {
  (featureTable.findColumn('ADDRESS') as any).width = 150;
  (featureTable.findColumn('FEATURETYPE') as any).width = 150;

  setTimeout(() => {
    const grid = (featureTable.container as HTMLElement).querySelector(
      'vaadin-grid',
    ) as any;
    grid?.addEventListener(
      'click',
      (e: MouseEvent) => {
        if ((e.target as HTMLElement).nodeName === 'VAADIN-GRID-CELL-CONTENT') {
          featureTable.highlightIds.removeAll();
          const item = (grid.getEventContext(e) as any)?.item;
          const feature = item.feature;
          //            featureTable.view.goTo(feature);
          featureTable.highlightIds.add(feature.getAttribute('OBJECTID'));
        }
      },
      { passive: true },
    );
  }, 2000);
};
let addressLayer: FeatureLayer;

const getTableLayer = async (view: MapView) => {
  const layer = new FeatureLayer({
    portalItem: {
      id: '318be24592ea4dcba042511b3125fd53',//'4d7f78186b0649d081ac56058b041fb7',
    },
    layerId: 2,//0,
  });
  addressLayer = layer;
  const table = await layer.load();
  const copyTable = new FeatureLayer({
    source: [],
    fields: table.fields,
    geometryType: 'point',
    spatialReference: view.spatialReference,
    popupTemplate: table.popupTemplate,
    objectIdField: table.objectIdField,
    displayField: table.displayField,
    id: 'feature-table',
  });
  copyTable.fields.forEach((field) => {
    field.nullable = true;
    if (field.name === 'DEED_DATE') {
      field.type = 'string';
    }
  });
  view.map.allTables.add(copyTable);
  try {
    await copyTable.load();
    return copyTable;
  } catch (error) {
    console.log(error);
  }
};
const getTableTemplate = (): TableTemplate => {
  const tableTemplate: TableTemplate = new TableTemplate({
    columnTemplates: [
      new FieldColumnTemplate({
        label: 'Address',
        fieldName: 'ADDRESS',
        editable: false,
        initialSortPriority: 0,
        direction: 'asc',
      }),
      new FieldColumnTemplate({
        label: 'Type',
        fieldName: 'FEATURETYPE',
        editable: false,
      }),
    ],
  });
  return tableTemplate;
};

export const updateTable = async (
  property: Graphic,
  featureTable: FeatureTable,
) => {
  if (featureTable) {
    try {
      selectedProperty = property;
      clearAddressPoints(featureTable.view as __esri.MapView);
      const featureSet: FeatureSet = await addressLayer?.queryFeatures({
        geometry: property.geometry,
        outFields: ['ADDRESS', 'FEATURETYPE'],
        returnGeometry: true,
        where: '1=1',
      });
      const result: FeatureSet = await (
        featureTable.layer as __esri.FeatureLayer
      ).queryFeatures({
        where: '1=1',
        returnGeometry: true,
      });

      await (featureTable.layer as __esri.FeatureLayer).applyEdits({
        deleteFeatures: result.features,
      });
      await (featureTable.layer as __esri.FeatureLayer).applyEdits({
        addFeatures: featureSet.features,
      });
      featureTable.title = `${featureSet.features.length} ${featureSet.features.length === 1 ? 'address' : 'addresses'}  on property`;
      featureTable.refresh();
    } catch (error) {
      console.log(error);
    }
  }
};

const exportTable = async (table: FeatureTable) => {
  const result = await (table.layer as FeatureLayer).queryFeatures({
    where: '1=1',
    outFields: ['*'],
    orderByFields: ['ADDRESS', 'FEATURETYPE'],
  });

  let csv = '';
  (table.tableTemplate.columnTemplates as __esri.FieldColumnTemplate[]).forEach(
    (field: __esri.FieldColumnTemplate) => {
      csv += `${field.label},`;
    },
  );
  csv += `PIN_NUM, REID,`;
  csv += '\r\n';
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
    csv += `="${selectedProperty.getAttribute('PIN_NUM')}",="${selectedProperty.getAttribute('REID')}",\r\n`;
  });
  let datestr = new Date().toISOString().split('.')[0];
  datestr = datestr.replaceAll(':', '').replaceAll('-', '');
  const exportedFilename = `imaps_addresses_export_${datestr}.csv`;

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  saveAs(blob, exportedFilename);
  table.menuConfig.open = false;
  //table.menu.open = false;
  // const link = document.createElement('a');
  // if (link.download !== undefined) {
  //   const url = URL.createObjectURL(blob);
  //   link.setAttribute('href', url);
  //   link.setAttribute('download', exportedFilename);
  //   link.style.visibility = 'hidden';
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // }
};
