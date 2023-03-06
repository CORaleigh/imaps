import React, { useEffect, useRef } from "react";
import { initializeFeatureTable, updateTable } from "../utils/addresses";

const useAddressTable = (args: any) => {
  const ref = useRef() as any;
  const loaded = useRef(false);

  useEffect(() => {
    if (!loaded.current) {
      loaded.current = true;

      initializeFeatureTable(ref.current, args.view).then(
        (table: __esri.FeatureTable) => {
          updateTable(args.property, table);
        }
      );
    }
    return () => {
      //featureTable && featureTable?.destroy();
    };
  }, []);
  return {
    ref,
  };
};

export default useAddressTable;
