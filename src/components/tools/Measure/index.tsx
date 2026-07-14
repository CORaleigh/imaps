import React from "react";
import "@esri/calcite-components/components/calcite-panel";
import "@esri/calcite-components/components/calcite-label";
import "@esri/calcite-components/components/calcite-switch";

import "@arcgis/map-components/components/arcgis-distance-measurement-2d";
import "@arcgis/map-components/components/arcgis-area-measurement-2d";

import { useMeasure } from "./useMeasure";
import TipManager from "../../TipsManager";
import styles from "./Measure.module.css";

interface MeasureProps {
  mapElement: React.RefObject<HTMLArcgisMapElement>;
  closed: boolean;
  onToolClose: () => void;
  onHelpClick: (id: string) => void;
}

const Measure: React.FC<MeasureProps> = ({
  mapElement,
  closed,
  onToolClose,
  onHelpClick,
}) => {
  const { areaMeasure, distanceMeasure, activeTool, handleActionClick, snappingEnabled,
  handleSnappingChange } =
    useMeasure(mapElement);

  return (
    <calcite-panel
      heading="Measure"
      closable
      oncalcitePanelClose={() => onToolClose()}
      closed={closed}
      collapsible
      className={styles.measurePanel}
    >
      <calcite-action
        slot="header-actions-end"
        icon="question-mark"
        text="Help"
        onClick={() => onHelpClick("measure")}
      ></calcite-action>
      <TipManager name="measure"></TipManager>

      <calcite-action-bar layout="horizontal" expandDisabled>
        <calcite-action
          text="Distance"
          icon="measure-line"
          textEnabled
          active={activeTool === "distance"}
          onClick={() => handleActionClick("distance")}
        ></calcite-action>
        <calcite-action
          text="Area"
          icon="measure-area"
          textEnabled
          active={activeTool === "area"}
          onClick={() => handleActionClick("area")}
        ></calcite-action>
        <calcite-action
          text="Clear"
          icon="trash"
          textEnabled
          onClick={() => handleActionClick(null)}
        ></calcite-action>
      </calcite-action-bar>
      <div className={styles.measureContainer}>
        <arcgis-distance-measurement-2d
          ref={distanceMeasure}
          referenceElement={mapElement.current}
          style={{ display: activeTool === "distance" ? "block" : "none" }}
          unit="imperial"
        ></arcgis-distance-measurement-2d>

        <arcgis-area-measurement-2d
          ref={areaMeasure}
          referenceElement={mapElement.current}
          style={{ display: activeTool === "area" ? "block" : "none" }}
          unit="imperial"
        ></arcgis-area-measurement-2d>
      </div>
      <div slot="content-bottom">
        <calcite-label layout="inline" scale="s">
          <calcite-switch
            scale="s"
            checked={snappingEnabled}
            oncalciteSwitchChange={handleSnappingChange}
          ></calcite-switch>
          Snap to property
        </calcite-label>
      </div>
    </calcite-panel>
  );
};

export default Measure;
