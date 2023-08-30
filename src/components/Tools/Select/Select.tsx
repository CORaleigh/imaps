import {
  CalcitePanel,
  CalciteAction,
  CalciteButton,
  CalciteInput,
  CalciteLabel,
  CalciteTooltip,
} from "@esri/calcite-components-react";
import React from "react";
import "./Select.css";
import { collapsePanel } from "../../Shell/utils/shell";

import {
  bufferDistanceChanged,
  bufferProperty,
  createSketch,
} from "./utils/select";
import useSelect from "./utils/useSelect";
import { SelectProps } from "./utils/SelectProps";
export const Select = (props: SelectProps) => {
  const {
    isActive,
    selectedTool,
    setSelectedTool,
    sketchVm,
    distance,
    setDistance,
    selectedProperty,
    toolDismissed,
    tipsClicked,
  } = useSelect(props);
  return (
    <CalcitePanel
      id="select-panel"
      heading="Select"
      data-panel="select"
      hidden={!isActive}
      closed={!isActive ? true : undefined}
      closable
      onCalcitePanelClose={toolDismissed}
    >
      <CalciteAction
        id="tip"
        icon="lightbulb"
        text="Tips"
        slot="header-actions-end"
        onClick={tipsClicked}
      ></CalciteAction>
      <CalciteAction
        id="collapseTool"
        icon="chevron-up"
        text=""
        slot="header-actions-end"
        onClick={collapsePanel}
      ></CalciteAction>
      <CalciteTooltip closeOnClick label="Show Tip" referenceElement="tip">
        Show Tip
      </CalciteTooltip>
      <CalciteTooltip
        closeOnClick
        label="Collapse"
        referenceElement="collapseTool"
      >
        Collapse
      </CalciteTooltip>
      <div id="select-tools">
        <div className="select-container">
          <CalciteAction
            id="selectPoint"
            scale="m"
            icon="pin"
            text="Point"
            active={selectedTool === "point" ? true : undefined}
            onClick={() => {
              setSelectedTool("point");
              if (sketchVm) {
                createSketch(sketchVm, "point");
              }
            }}
          ></CalciteAction>
          <CalciteTooltip
            closeOnClick
            label="Select by Point"
            referenceElement="selectPoint"
          >
            Select by Point
          </CalciteTooltip>
          <CalciteAction
            id="selectLine"
            scale="m"
            icon="line"
            text="Line"
            active={selectedTool === "line" ? true : undefined}
            onClick={() => {
              setSelectedTool("line");
              if (sketchVm) {
                createSketch(sketchVm, "polyline");
              }
            }}
          ></CalciteAction>
          <CalciteTooltip
            closeOnClick
            label="Select by Line"
            referenceElement="selectLine"
          >
            Select by Line
          </CalciteTooltip>
          <CalciteAction
            id="selectPolygon"
            scale="m"
            icon="polygon"
            text="Polygon"
            active={selectedTool === "polygon" ? true : undefined}
            onClick={() => {
              setSelectedTool("polygon");
              if (sketchVm) {
                createSketch(sketchVm, "polygon");
              }
            }}
          ></CalciteAction>
          <CalciteTooltip
            closeOnClick
            label="Select by Rectangle"
            referenceElement="selectRectangle"
          >
            Select by Rectangle
          </CalciteTooltip>
          <CalciteAction
            id="selectRectangle"
            scale="m"
            icon="rectangle"
            text="Rectangle"
            active={selectedTool === "rectangle" ? true : undefined}
            onClick={() => {
              setSelectedTool("rectangle");
              if (sketchVm) {
                createSketch(sketchVm, "rectangle");
              }
            }}
          ></CalciteAction>
          <CalciteTooltip
            closeOnClick
            label="Select by Circle"
            referenceElement="selectCircle"
          >
            Select by Circle
          </CalciteTooltip>
          <CalciteAction
            id="selectCircle"
            scale="m"
            icon="circle"
            text="Circle"
            active={selectedTool === "circle" ? true : undefined}
            onClick={() => {
              setSelectedTool("circle");
              if (sketchVm) {
                createSketch(sketchVm, "circle");
              }
            }}
          ></CalciteAction>
          <CalciteTooltip
            closeOnClick
            label="Select by Polygon"
            referenceElement="selectPolygon"
          >
            Select by Polygon
          </CalciteTooltip>
          <CalciteAction
            id="selectMultipoint"
            scale="m"
            icon="pins"
            text="Multi-Point"
            active={selectedTool === "multipoint" ? true : undefined}
            onClick={() => {
              setSelectedTool("multipoint");
              if (sketchVm) {
                createSketch(sketchVm, "multipoint");
              }
            }}
          ></CalciteAction>
          <CalciteTooltip
            closeOnClick
            label="Select by Multi-Point"
            referenceElement="selectMultipoint"
          >
            Select by Multi-point
          </CalciteTooltip>
          <CalciteAction
            id="clearSelection"
            scale="m"
            icon="trash"
            text="Clear"
            onClick={() => {
              props.geometrySet(undefined);
              const layer = props.view.map.findLayerById('select-graphics');
              if (layer) {
                (layer as __esri.GraphicsLayer).removeAll();
              }

            }}
          ></CalciteAction>
          <CalciteTooltip
            closeOnClick
            label="Clear Selection"
            referenceElement="clearSelection"
          >
            Clear selection
          </CalciteTooltip>
        </div>
        <div className="buffer-container">
          <CalciteLabel>
            Buffer Distance
            <CalciteInput
              type="number"
              suffixText="feet"
              step={50}
              min={0}
              max={5280}
              value={distance.toString()}
              clearable
              onCalciteInputChange={(event) =>
                bufferDistanceChanged(event, setDistance)
              }
            ></CalciteInput>
          </CalciteLabel>
          <CalciteButton
            disabled={selectedProperty === undefined ? true : undefined}
            hidden={distance <= 0}
            width="full"
            onClick={() =>
              bufferProperty(selectedProperty, distance, props.geometrySet)
            }
          >
            Buffer Property
          </CalciteButton>
        </div>
      </div>
    </CalcitePanel>
  );
};
export default React.memo(Select);
