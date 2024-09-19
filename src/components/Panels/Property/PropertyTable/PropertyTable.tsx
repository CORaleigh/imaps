import React, { useEffect, useRef, useState } from 'react';
import { initializeFeatureTable, updateTable } from '../utils/table';
import { PropertyTableProps } from './PropertyProps';

function PropertyTable(props: PropertyTableProps) {
  const ref = useRef() as any;
  const loaded = useRef(false);
  const [featureTable, setFeatureTable] = useState<__esri.FeatureTable>();

  useEffect(() => {
    if (!loaded.current) {
      loaded.current = true;

      initializeFeatureTable(
        ref.current,
        props.view,
        props.featureSelected,
      ).then((table: __esri.FeatureTable) => {
        setFeatureTable(table);
        props.featureTableSet(table);
      });
    }
    return () => {
      //featureTable && featureTable?.destroy();
    };
  }, []);
  useEffect(() => {
    console.log(featureTable);

    if (featureTable) {
      updateTable(props.condos, featureTable);
    }
  }, [props.condos, featureTable]);
  return <div ref={ref}></div>;
}

export default React.memo(PropertyTable);
