import React from "react";
import "@esri/calcite-components/components/calcite-panel";
import "@esri/calcite-components/components/calcite-label";

import "@esri/calcite-components/components/calcite-input-number";
import "@esri/calcite-components/components/calcite-action-bar";
import "@esri/calcite-components/components/calcite-action-group";
import "@esri/calcite-components/components/calcite-action";
import "@esri/calcite-components/components/calcite-tooltip";

import { usePropertySelect } from "./usePropertySelect";

import styles from "./PropertySelect.module.css";
import TipManager from "../../TipsManager";
interface PropertySelectProps {
  mapElement: React.RefObject<HTMLArcgisMapElement>;
  closed: boolean;
  onToolClose: () => void;
  onHelpClick: (id: string) => void;
}

const PropertySelect: React.FC<PropertySelectProps> = ({
  mapElement,
  closed,
  onToolClose,
  onHelpClick,
}) => {
  const {
    mapMode,
    handleActionClick,
    bufferDistance,
    selectedCondo,
    handleBufferDistanceInput,
    handleClear,
    handleToolClose,
    handleBufferProperty,
  } = usePropertySelect(
    mapElement,
    // closed,
    onToolClose,
  );
  return (
    <>
      <calcite-panel
        heading="Property Select"
        closable
        oncalcitePanelClose={handleToolClose}
        closed={closed}
        collapsible
      >
        <calcite-action
          slot="header-actions-end"
          icon="question-mark"
          text="Help"
          onClick={() => onHelpClick("property-select")}
        ></calcite-action>
        <TipManager name="property-select"></TipManager>

        <calcite-action-bar layout="horizontal" expandDisabled>
          <calcite-action-group>
            <calcite-action
              id="select-point-action"
              text="Point"
              icon="pin"
              onClick={() => handleActionClick("point")}
              active={mapMode === "point"}
            ></calcite-action>

            <calcite-action
              id="select-line-action"
              text="Line"
              icon="line"
              onClick={() => handleActionClick("polyline")}
              active={mapMode === "polyline"}
            ></calcite-action>

            <calcite-action
              id="select-polygon-action"
              text="Polygon"
              icon="polygon"
              onClick={() => handleActionClick("polygon")}
              active={mapMode === "polygon"}
            ></calcite-action>

            <calcite-action
              id="select-rectangle-action"
              text="Rectangle"
              icon="rectangle"
              onClick={() => handleActionClick("rectangle")}
              active={mapMode === "rectangle"}
            ></calcite-action>

            <calcite-action
              id="select-circle-action"
              text="Circle"
              icon="circle"
              onClick={() => handleActionClick("circle")}
              active={mapMode === "circle"}
            ></calcite-action>

            <calcite-action
              id="select-multipoint-action"
              text="Multipoint"
              icon="pins"
              onClick={() => handleActionClick("multipoint")}
              active={mapMode === "multipoint"}
            ></calcite-action>
          </calcite-action-group>
          <calcite-action-group>
            <calcite-action
              id="select-clear-action"
              text="Clear"
              icon="trash"
              onClick={handleClear}
            ></calcite-action>
          </calcite-action-group>
        </calcite-action-bar>
        <div className={styles.panelContent}>
          <calcite-label>
            Buffer Distance
            <calcite-input-number
              min={0}
              max={5280}
              clearable
              suffixText="feet"
              value={bufferDistance.toString()}
              oncalciteInputNumberInput={handleBufferDistanceInput}
              step={100}
            ></calcite-input-number>
          </calcite-label>
          {selectedCondo && bufferDistance > 0 && (
            <calcite-button width="full" onClick={handleBufferProperty}>
              Buffer Property
            </calcite-button>
          )}
        </div>
      </calcite-panel>
      <calcite-tooltip
        reference-element="select-point-action"
        placement="bottom"
      >
        Point Select
      </calcite-tooltip>
      <calcite-tooltip
        closeOnClick
        reference-element="select-line-action"
        placement="top"
      >
        Line Select
      </calcite-tooltip>
      <calcite-tooltip
        closeOnClick
        reference-element="select-polygon-action"
        placement="top"
      >
        Polygon Select
      </calcite-tooltip>
      <calcite-tooltip
        closeOnClick
        reference-element="select-rectangle-action"
        placement="top"
      >
        Rectangle Select
      </calcite-tooltip>
      <calcite-tooltip
        closeOnClick
        reference-element="select-circle-action"
        placement="top"
      >
        Circle Select
      </calcite-tooltip>
      <calcite-tooltip
        closeOnClick
        reference-element="select-multipoint-action"
        placement="top"
      >
        Multipoint Select
      </calcite-tooltip>
      <calcite-tooltip
        closeOnClick
        reference-element="select-clear-action"
        placement="top"
      >
        Clear Selection
      </calcite-tooltip>
    </>
  );
};

export default PropertySelect;
