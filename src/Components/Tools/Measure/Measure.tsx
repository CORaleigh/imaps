import {
  CalciteAction,
  CalcitePanel,
  CalciteTooltip,
} from "@esri/calcite-components-react";
import React from "react";
import "./Measure.css";
import { collapsePanel } from "../../Shell/utils/shell";
import useMeasure from "./utils/useMeasure";
import { ToolProps } from "../utils/ToolProps";
const Measure = (props: ToolProps) => {
  const {
    measureRef,
    measurement,
    selectedTool,
    setSelectedTool,
    isActive,
    toolDismissed,
    tipsClicked,
  } = useMeasure(props);
  return (
    <CalcitePanel
      id="measure-panel"
      heading="Measure"
      data-panel="measure"
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
      <CalciteTooltip label="Show Tip" referenceElement="tip" closeOnClick>
        Show Tip
      </CalciteTooltip>
      <CalciteTooltip
        label="Collapse"
        referenceElement="collapseTool"
        closeOnClick
      >
        Collapse
      </CalciteTooltip>
      <div id="measure-tools">
        <div className="measure-container">
          <CalciteTooltip
            closeOnClick
            label="Distance"
            referenceElement="measureDistance"
          >
            Distance
          </CalciteTooltip>
          <CalciteAction
            id="measureDistance"
            icon="measure-line"
            text="Distance"
            active={selectedTool === "distance" ? true : undefined}
            onClick={() => {
              setSelectedTool("distance");
              debugger
              if (measurement.current) {
                measurement.current.activeTool = "distance";
              }
            }}
          ></CalciteAction>
          <CalciteTooltip
            closeOnClick
            label="Area"
            referenceElement="measureArea"
          >
            Area
          </CalciteTooltip>
          <CalciteAction
            id="measureArea"
            icon="measure-area"
            text="Area"
            active={selectedTool === "area" ? true : undefined}
            onClick={() => {
              setSelectedTool("area");
              if (measurement.current) {
                measurement.current.activeTool = "area";
              }
            }}
          ></CalciteAction>
          <CalciteTooltip
            closeOnClick
            label="Clear"
            referenceElement="clearMeasure"
          >
            Clear
          </CalciteTooltip>
          <CalciteAction
            id="clearMeasure"
            icon="trash"
            text="Clear"
            onClick={() => {
              if (measurement.current) {
                measurement.current?.clear();
                setSelectedTool("");
              }
            }}
          ></CalciteAction>
        </div>
        <div ref={measureRef}></div>
        <section
          hidden={selectedTool !== "" ? true : undefined}
          className="measurement-hint"
        >
          <p>Select line or distance measurement tool</p>
        </section>
      </div>
    </CalcitePanel>
  );
};
export default React.memo(Measure);
