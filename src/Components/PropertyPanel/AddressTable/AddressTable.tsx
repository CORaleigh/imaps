/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useRef } from 'react';
import FeatureTable from '@arcgis/core/widgets/FeatureTable';
import './AddressTable.scss';
import PictureMarkerSymbol from '@arcgis/core/symbols/PictureMarkerSymbol';
export const AddressTable = (props: any) => {
  const tableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (props.layer as __esri.FeatureLayer).definitionExpression = `OBJECTID IS NULL`;
    console.log(props.geometry);
    const table = new FeatureTable({
      layer: props.layer,
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

    setTimeout(() => {
      const addressColumn = table.findColumn('FEATURETYPE') as any;
      addressColumn.width = 100;
      table.clearSelection();
      table.filterGeometry = props.geometry;
      (props.layer as __esri.FeatureLayer).definitionExpression = `ADDRESS NOT LIKE 'EN%'`;
      table.refresh();
    }, 500);

    setTimeout(() => {
      const grid = (table.container as HTMLElement).querySelector('vaadin-grid');
      grid?.addEventListener('click', (e) => {
        if ((e.target as HTMLElement).nodeName === 'VAADIN-GRID-CELL-CONTENT') {
          //grid.selectItem((grid.getEventContext(e) as any)?.item);
          const item = (grid.getEventContext(e) as any)?.item;
          const feature = item.feature as __esri.Graphic;
          table.selectRows(feature);
          //grid.scrollToIndex(item.index);
          feature.setAttribute('type', 'address');
          feature.symbol = new PictureMarkerSymbol({ url: 'assets/pin.svg', height: 36, width: 36 });
          (props.view as __esri.MapView).graphics.removeMany(
            (props.view as __esri.MapView).graphics.filter((graphic) => {
              return graphic.getAttribute('type') === 'address';
            }),
          );
          (props.view as __esri.MapView).graphics.add(feature);
          (props.view as __esri.MapView).goTo({ target: feature, zoom: 17 }, { duration: 1000, easing: 'ease' });
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
