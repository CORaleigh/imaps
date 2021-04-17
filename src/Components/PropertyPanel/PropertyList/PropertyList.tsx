/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useRef, useState } from 'react';
import FeatureTable from '@arcgis/core/widgets/FeatureTable';
import { createFeatureTable } from './utils/propertylist';
export const PropertyList = (props: any) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [table, setTable] = useState<FeatureTable>();
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
        table.on('selection-change', (event: __esri.FeatureTableSelectionChangeEvent) => {
          if (event.added.length) {
            table.clearSelection();
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
