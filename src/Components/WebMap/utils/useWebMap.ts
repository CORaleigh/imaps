import MapView from "@arcgis/core/views/MapView";
import { useEffect, useRef } from "react";
import { displayProperties, initializeMap } from "../utils/map";
import { WebMapProps } from "./WebMapProps";

const useWebMap = (props: WebMapProps) => {
  const ref = useRef() as any;
  const loaded = useRef(false);
  const view = useRef<MapView | null>(null);

  useEffect(() => {
    

    if (!loaded.current) {
      debugger
      loaded.current = true;
      const mapView = initializeMap(
        ref.current,
        props.mapId,
        props.geometrySet,
        props.widgetActivated
      ).then(mapView => {
        view.current = mapView;
        props.mapViewSet(view.current);
      });
    }
    return () => {
      // clean up the map view
      // if (view.current) {
      //   console.log('destroy')
      //   view.current.destroy();
      //   view.current = null;
      // }
    };
  }, []);
  useEffect(() => {
    if (props.properties) {
      displayProperties(props.properties, view.current as __esri.MapView);
    }
  }, [props.properties]);
  return { ref, loaded, view };
};

export default useWebMap;
