// PropertyInfo.tsx

import "@arcgis/map-components/components/arcgis-feature";
import React, { type RefObject } from "react";


import styles from "./PropertySearch.module.css";
import NextPropertyButton from "./NextPropertyButton";
import Services from "./Services";

import type Graphic from "@arcgis/core/Graphic";


interface PropertyInfoProps {
  feature: Graphic;
  condos: Graphic[];
  mapElement: RefObject<HTMLArcgisMapElement>;
  tableElement: RefObject<HTMLArcgisFeatureTableElement>;
  title: string;
  onNextProperty: (feature: Graphic) => void;
}

const PropertyInfo: React.FC<PropertyInfoProps> = ({
  feature,
  condos,
  mapElement,
  tableElement,
  title,
  onNextProperty,
}) => {
  return (
    <>
      <div className={styles.featureHeader}>
        {condos.length > 1 && (
          <NextPropertyButton
            mapElement={mapElement}
            tableElement={tableElement}
            icon="caret-left"
            text="Previous"
            onNextProperty={onNextProperty}
          ></NextPropertyButton>
        )}
        <h2 className={styles.featureTitle}>{title}</h2>
        {condos.length > 1 && (
          <NextPropertyButton
            mapElement={mapElement}
            tableElement={tableElement}
            icon="caret-right"
            text="Next"
            onNextProperty={onNextProperty}
          ></NextPropertyButton>
        )}
      </div>

      {feature && (
        <arcgis-feature graphic={feature}></arcgis-feature>
      )}
      <div className={styles.featureSubTitle}>
        <h2 className={styles.featureTitle}>Services</h2>
      </div>
      <Services
        mapElement={mapElement.current}
        selectedCondo={feature}
      ></Services>
      <div className={styles.featureSubTitle}>
        <h2 className={styles.featureTitle}>Addresses</h2>
      </div>
    </>
  );
};

export default React.memo(
  PropertyInfo,
  (prev, next) => prev.feature === next.feature && prev.title === next.title
);
