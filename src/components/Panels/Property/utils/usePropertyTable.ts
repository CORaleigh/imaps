import { useEffect, useRef, useState } from 'react';
import { PropertyTableProps } from '../PropertyTable/PropertyProps';
import { initializeFeatureTable, updateTable } from '../utils/table';

const usePropertyTable = (props: PropertyTableProps) => {
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
    if (featureTable) {
      updateTable(props.condos, featureTable);
    }
  }, [props.condos]);

  return {
    ref,
  };
};

export default usePropertyTable;
