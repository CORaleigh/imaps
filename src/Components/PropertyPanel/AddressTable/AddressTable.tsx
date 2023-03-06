/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useRef } from 'react';
import FeatureTable from '@arcgis/core/widgets/FeatureTable';
import './AddressTable.scss';
import PictureMarkerSymbol from '@arcgis/core/symbols/PictureMarkerSymbol';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
export const AddressTable = (props: any) => {
  const tableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (props.layer as __esri.FeatureLayer).definitionExpression = `OBJECTID IS NULL`;
    console.log(props.geometry);
    const layer = new FeatureLayer({
      source: [],
      fields: [
        {
          name: 'ObjectID',
          alias: 'ObjectID',
          type: 'oid',
        },
        {
          name: 'ADDRESS',
          alias: 'Address',
          type: 'string',
          length: 100,
        },
        {
          name: 'FEATURETYPE',
          alias: 'Feature Type',
          type: 'string',
          length: 100,
        },
      ],
      geometryType: 'point',
      spatialReference: props.view.spatialReference,
      objectIdField: 'OBJECTID',
    });
    const table = new FeatureTable({
      layer: layer,
      container: tableRef.current as HTMLDivElement,
      visibleElements: {
        header: false,
        selectionColumn: false,
      },
      tableTemplate: {
        columnTemplates: [
          { label: 'Address', fieldName: 'ADDRESS' } as __esri.FieldColumnTemplate,
          { label: 'Type', fieldName: 'FEATURETYPE' } as __esri.FieldColumnTemplate,
        ],
      },
    });

    setTimeout(async () => {
      const fs = await (props.layer as __esri.FeatureLayer).queryFeatures({
        where: `ADDRESS NOT LIKE 'EN%'`,
        geometry: props.geometry,
        returnGeometry: true,
        outFields: ['ADDRESS', 'FEATURETYPE'],
        outSpatialReference: props.view.spatialReference,
        orderByFields: ['ADDRESS'],
      });
      const edits = layer.applyEdits({ addFeatures: fs.features } as any).then((results) => {
        table.clearSelection();
        table.refresh();
      });
      // const addressColumn = table.findColumn('FEATURETYPE') as any;
      // addressColumn.width = 100;
    }, 500);

    setTimeout(() => {
      const grid = (table.container as HTMLElement).querySelector('vaadin-grid');
      grid?.addEventListener('click', (e) => {
        if ((e.target as HTMLElement).nodeName === 'VAADIN-GRID-CELL-CONTENT') {
          //grid.selectItem((grid.getEventContext(e) as any)?.item);
          const item = (grid.getEventContext(e) as any)?.item;
          const feature = item.feature as __esri.Graphic;
          layer
            .queryFeatures({
              objectIds: [feature.getObjectId()],
              returnGeometry: true,
              outFields: ['ADDRESS', 'FEATURETYPE'],
            })
            .then((fs) => {
              const selectedAddress = fs.features[0];
              selectedAddress.setAttribute('type', 'address');
              selectedAddress.symbol = new PictureMarkerSymbol({ url: 'assets/pin.svg', height: 36, width: 36 });
              (props.view as __esri.MapView).graphics.removeMany(
                (props.view as __esri.MapView).graphics.filter((selectedAddress) => {
                  return selectedAddress.getAttribute('type') === 'address';
                }),
              );
              (props.view as __esri.MapView).graphics.add(selectedAddress);
              (props.view as __esri.MapView).goTo(
                { target: selectedAddress, zoom: 17 },
                { duration: 1000, easing: 'ease' },
              );
            })
            .catch((reason) => {
              console.log(reason);
            });
          table.clearSelection();
          table.selectRows(feature);
          grid.scrollToIndex(item.index);
        }
      });
    }, 2000);
    return () => {
      table && table.destroy();
    };
  }, []); // only after initial render

  return <div id="addressTable" ref={tableRef}></div>;
};

export default AddressTable;
