import { useEffect, useRef } from "react";
import MapView from "@arcgis/core/views/MapView";

import { initializeOverview } from "./overview";
interface Props {
  id: string;
  view: __esri.MapView;
}
const useOverview = (props: Props) => {
  const ref = useRef() as any;
  const loaded = useRef(false);
  let overview: MapView;
  useEffect(() => {
    if (!loaded.current && props.view) {
      loaded.current = true;
      overview = initializeOverview(ref.current, props.view);
    }
    return () => {
      overview && overview.destroy();
    };
  }, []);
  return { ref };
};

export default useOverview;
