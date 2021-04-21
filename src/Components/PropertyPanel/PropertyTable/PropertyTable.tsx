/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useRef, useState, useContext } from 'react';
import { createFeatureTable, getFeatures, setColumnRenderer } from './utils/propertytable';
import '@vaadin/vaadin-grid/vaadin-grid-sort-column';
import { GridElement } from '@vaadin/vaadin-grid';
import ThemeContext from '../../ThemeContext';

import './PropertyTable.scss';

export const PropertyTable = (props: any) => {
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);

  const [count, setCount] = useState(0);
  const [columns, setColumns] = useState<any[]>([]);
  const layer = useRef<__esri.FeatureLayer>();
  const grid = useRef<GridElement>();
  const menuButton = useRef<HTMLButtonElement>(null);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    setLoading(props.loading);
  }, [props.loading]);

  useEffect(() => {
    if (grid.current) {
      grid.current.render();
      grid.current.recalculateColumnWidths();
      grid.current.notifyResize();
    }
  }, [props.selectedTab]);

  useEffect(() => {
    if (!loaded) {
      if (props.layer) {
        createFeatureTable(props.layer).then((columns) => {
          setColumns([...[], ...columns]);
          setColumnRenderer(
            grid.current as GridElement,
            layer.current as __esri.FeatureLayer,
            menuButton.current as HTMLButtonElement,
          );
        });
        layer.current = props.layer;
        setLoaded(true);
        grid.current?.addEventListener('active-item-changed', (event: any) => {
          const item = event.detail.value;
          if (item) {
            grid.current?.selectedItems?.forEach((i) => {
              grid.current?.deselectItem(i);
            });
            grid.current?.selectItem(item);
            props.featureSelected(item);
          }
        });
      }
    }

    return () => {
      //table && table.destroy();
    };
  }, [props.layer]); // only after initial render
  useEffect(() => {
    if (layer.current) {
      if (props.filter) {
        setLoading(true);

        getFeatures(layer.current, props.filter, grid.current as GridElement).then((count) => {
          setLoading(false);
          setCount(count);
        });
      }
    }
  }, [props.filter]);
  return (
    <div className="panel">
      <div className="esri-feature-table__header">
        <div className="esri-feature-table__loader-container">
          <div className={`esri-feature-table__loader ${loading ? 'loading' : ''}`}></div>
        </div>
        <div className="esri-feature-table__title">Features: {count}</div>
        <div className="esri-feature-table__menu">
          <div data-node-ref="_rootNode" className="esri-button-menu esri-widget">
            <button
              aria-pressed="false"
              aria-controls="1783678efcd-widget-1-menu"
              aria-haspopup="true"
              aria-label="Options"
              className="esri-button-menu__button "
              ref={menuButton}
              title="Options"
              type="button"
            ></button>
          </div>
        </div>
      </div>

      <vaadin-grid aria-label="Sorting Example" theme={theme} className="esri-widget esri-grid" ref={grid}>
        {columns.map((column) => {
          return (
            <vaadin-grid-sort-column
              header={column.header}
              path={column.path}
              key={column.key}
              id={column.key}
              width={column.width}
              hidden={column.hidden ? '' : null}
              name={column.name}
            ></vaadin-grid-sort-column>
          );
        })}
      </vaadin-grid>
    </div>
  );
};

export default PropertyTable;
