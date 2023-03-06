import { useEffect, useRef } from "react";
import MapView from "@arcgis/core/views/MapView";

import { initializeOverview } from "../utils/overview";

const useOverview = (args: any) => {
  const ref = useRef() as any;
  const loaded = useRef(false);
  let overview: MapView;
  useEffect(() => {
    if (!loaded.current && args.view) {
      loaded.current = true;
      overview = initializeOverview(ref.current, args.view);
    }
    return () => {
      overview && overview.destroy();
    };
  }, []);
  return { ref };
};

export default useOverview;
