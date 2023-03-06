import React, { useEffect, useRef, useState } from "react";
import { initializeFeatureTable, updateTable } from "../utils/table";
import { PropertyTableProps } from "./PropertyProps";

function PropertyTable(args: PropertyTableProps) {
  const ref = useRef() as any;
  const loaded = useRef(false);
  const [featureTable, setFeatureTable] = useState<__esri.FeatureTable>();

  useEffect(() => {
    if (!loaded.current) {
      loaded.current = true;

      initializeFeatureTable(ref.current, args.view, args.featureSelected).then(
        (table: __esri.FeatureTable) => {
          setFeatureTable(table);
          args.featureTableSet(table);
        }
      );
    }
    return () => {
      //featureTable && featureTable?.destroy();
    };
  }, []);
  useEffect(() => {
    if (featureTable) {
      updateTable(args.condos, featureTable);
    }
  }, [args.condos]);
  return <div ref={ref}></div>;
}

export default React.memo(PropertyTable);
