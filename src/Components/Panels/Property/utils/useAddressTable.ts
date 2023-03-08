import React, { useEffect, useRef } from "react";
import { initializeFeatureTable, updateTable } from "../utils/addresses";
interface Props {
  view: __esri.MapView;
  property: __esri.Graphic;
}
const useAddressTable = (props: Props) => {
  const ref = useRef() as any;
  const loaded = useRef(false);

  useEffect(() => {
    if (!loaded.current) {
      loaded.current = true;

      initializeFeatureTable(ref.current, props.view).then(
        (table: __esri.FeatureTable) => {
          updateTable(props.property, table);
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
