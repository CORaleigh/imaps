/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useRef, useState } from 'react';
import FeatureTable from '@arcgis/core/widgets/FeatureTable';
import { createFeatureTable } from './utils/propertylist';
import './PropertyList.scss';
export const PropertyList = (props: any) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [table, setTable] = useState<FeatureTable>();
  useEffect(() => {
    if (table) {
      requestAnimationFrame(() => {
        const grid = (table?.container as HTMLElement).querySelector('vaadin-grid');
        //grid?.render();
        //grid?.recalculateColumnWidths();
        console.log(grid?.scrollHeight);
        grid?.notifyResize();
        grid?.focus();
        const items = grid?.selectedItems;
        if (items) {
          const item = items[0];
          if (item) {
            const index = table.viewModel.getObjectIdIndex((item as any).objectId);
            table.viewModel.scrollToIndex(index);
          }
        }
      });
    }
  }, [props.reloadTable]);
  useEffect(() => {
    if (!loaded) {
      createFeatureTable(listRef, props.view, props.layer).then((table) => {
        setTable(table);
        setLoaded(true);
        if (props.filter) {
          table.layer.definitionExpression = props.filter;
        } else {
          table.layer.definitionExpression = 'OBJECTID IS NOT NULL';
        }
        table.fieldConfigs.forEach((config) => {
          if (config.name.includes('PIN')) {
            config.direction = 'asc';
          }
        });
        setTimeout(() => {
          table.menu.items.reverse();
          const grid = (table.container as HTMLElement).querySelector('vaadin-grid');
          const title = (table.container as HTMLElement).querySelector('.esri-feature-table__title');
          if (title) {
            title.textContent = 'Selected Properties: ' + grid?.items?.length;
          }
          title?.setAttribute('style', 'visibility: visible');
          table.viewModel.watch('state', (state) => {
            if (state === 'ready') {
              requestAnimationFrame(() => {
                const title = (table.container as HTMLElement).querySelector('.esri-feature-table__title');
                if (title) {
                  if (grid?.items) {
                    title.textContent = 'Selected Properties: ' + grid?.items?.length;
                  } else {
                    title.textContent = 'Selected Properties: 0';
                  }
                }
              });
            }
          });
          grid?.addEventListener('click', (e) => {
            if ((e.target as HTMLElement).nodeName === 'VAADIN-GRID-CELL-CONTENT') {
              //grid.selectItem((grid.getEventContext(e) as any)?.item);
              table.clearSelection();
              const item = (grid.getEventContext(e) as any)?.item;
              const feature = item.feature;
              table.selectRows(feature);
              grid.scrollToIndex(item.index);
              requestAnimationFrame(() => {
                const title = (table.container as HTMLElement).querySelector('.esri-feature-table__title');
                if (title) {
                  title.textContent = 'Selected Properties: ' + grid?.items?.length;
                }
              });
              //grid.selectedItems = [(grid.getEventContext(e) as any)?.item];
            }
          });
        }, 2000);
        //   const grid = (table.container as HTMLElement).querySelector('vaadin-grid');

        //   if (state === 'ready' && grid) {

        //   }
        //   if (state === 'loading' && grid) {
        //     grid?.removeEventListener('click', (e) => {
        //       console.log((grid.getEventContext(e) as any)?.item);
        //       grid.selectedItems = [(grid.getEventContext(e) as any)?.item];
        //     });
        //   }
        // });

        table.on('selection-change', (event: __esri.FeatureTableSelectionChangeEvent) => {
          if (event.added.length) {
            //table.clearSelection();
            //
            props.featureSelected(event.added[0].feature);
          }
        });
      });
    }

    return () => {
      table && table.destroy();
    };
  }, []); // only after initial render
  useEffect(() => {
    if (table) {
      table.layer.definitionExpression = props.filter;
    }
  }, [props.filter]);
  return <div ref={listRef}></div>;
};

export default PropertyList;
