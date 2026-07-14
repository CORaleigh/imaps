import React, { useEffect, useRef } from "react";
import "@esri/calcite-components/components/calcite-panel";
import "@arcgis/map-components/components/arcgis-legend";
import styles from "./Legend.module.css";

interface LegendProps {
  mapElement: React.RefObject<HTMLArcgisMapElement>;
  onPanelClose: () => void;
  closed: boolean;
  style?: React.CSSProperties;
}

const Legend: React.FC<LegendProps> = ({ mapElement, closed, onPanelClose }) => {
  const initializedRef = useRef(false);

  useEffect(() => {
    if (!mapElement.current || initializedRef.current) return;
    initializedRef.current = true;
  }, [mapElement]);  
  return (
    <calcite-panel
      heading="Layers"
      closable
      oncalcitePanelClose={() => onPanelClose()}
      closed={closed}
    >
      <arcgis-legend className={styles.legend} referenceElement={mapElement.current} ></arcgis-legend>
    </calcite-panel>
  );
};

export default Legend;
