import React from "react";
import "@arcgis/map-components/components/arcgis-map";
import { useOverviewMap } from "./useOverviewMap";
import styles from "./OverviewMap.module.css";

interface OverviewMapProps {
  mapElement: React.RefObject<HTMLArcgisMapElement>;
  isOpen: boolean;
}

const OverviewMap: React.FC<OverviewMapProps> = ({ mapElement, isOpen }) => {
  const { overviewMapElement, handleOverviewReady } =
    useOverviewMap(mapElement, isOpen);

  return (
    <>
      {mapElement.current && mapElement.current.basemap && (
        <arcgis-map
          className={styles.overviewMap}
          ref={overviewMapElement}
          style={{ height: "200px", width: "200px" }}
          onarcgisViewReadyChange={handleOverviewReady}
          basemap={mapElement.current?.basemap}
        ></arcgis-map>
      )}
    </>
  );
};

export default OverviewMap;
