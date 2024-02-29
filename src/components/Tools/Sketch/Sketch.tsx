import React from "react";

import {
  CalciteAction,
  CalciteActionGroup,
  CalciteButton,
  CalcitePanel,
  CalciteTooltip,
} from "@esri/calcite-components-react";
import "./Sketch.css";
import {
  clearSketch,
  deleteSelectedGraphics,
  pointSymbolUpdated,
  polygonSymbolUpdated,
  polylineSymbolUpdated,
  stopSketching,
  textSymbolUpdated,
  toolSelected,
} from "./utils/sketch";
import LineSymbols from "./LineSymbols";
import PolygonSymbols from "./PolygonSymbols";
import TextSymbols from "./TextSymbols";
import PointSymbols from "./PointSymbols";
import { collapsePanel } from "../../Shell/utils/shell";
import useSketch from "./utils/useSketch";
import { ToolProps } from "../utils/ToolProps";
function Sketch(props: ToolProps) {
  const {
    activeSketchTool,
    setActiveSketchTool,
    selectedGraphics,
    setSelectedGraphics,
    isActive,
    toolDismissed,
    tipsClicked,
    checkGeometryType,
  } = useSketch(props);
  return (
    <CalcitePanel
      id="sketch-panel"
      heading="Sketch"
      data-panel="sketch"
      hidden={!isActive}
      closed={!isActive ? true : undefined}
      closable
      onCalcitePanelClose={toolDismissed}
    >
      <CalciteAction
        id="sketchTip"
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
      <CalciteTooltip closeOnClick label="Show Tip" referenceElement="sketchTip">
        Show Tip
      </CalciteTooltip>
      <CalciteTooltip
        closeOnClick
        referenceElement="collapseTool"
      >
        Collapse
      </CalciteTooltip>
      <div id="sketch-tools">
        <div className="sticky">
          <CalciteActionGroup layout="horizontal">
            <CalciteAction
              id="sketchPointTip"
              active={activeSketchTool === "point" ? true : undefined}
              icon="pin"
              text={""}
              onClick={() =>
                toolSelected("point", activeSketchTool, setActiveSketchTool)
              }
            ></CalciteAction>
            <CalciteTooltip closeOnClick referenceElement="sketchPointTip">
              Point
            </CalciteTooltip>

            <CalciteAction
              id="sketchLineTip"
              active={activeSketchTool === "polyline" ? true : undefined}
              icon="line"
              text={""}
              onClick={() =>
                toolSelected("polyline", activeSketchTool, setActiveSketchTool)
              }
            ></CalciteAction>
            <CalciteTooltip closeOnClick referenceElement="sketchLineTip">
              Line
            </CalciteTooltip>
            <CalciteAction
              id="sketchPolygonTip"
              active={activeSketchTool === "polygon" ? true : undefined}
              icon="polygon"
              text={""}
              onClick={() =>
                toolSelected("polygon", activeSketchTool, setActiveSketchTool)
              }
            ></CalciteAction>
            <CalciteTooltip
              closeOnClick
              referenceElement="sketchPolygonTip"
            >
              Polygon
            </CalciteTooltip>
            <CalciteAction
              id="sketchRectangleTip"
              active={activeSketchTool === "rectangle" ? true : undefined}
              icon="rectangle"
              text={""}
              onClick={() =>
                toolSelected("rectangle", activeSketchTool, setActiveSketchTool)
              }
            ></CalciteAction>
            <CalciteTooltip
              closeOnClick
              referenceElement="sketchRectangleTip"
            >
              Rectangle
            </CalciteTooltip>
            <CalciteAction
              id="sketchCircleTip"
              active={activeSketchTool === "circle" ? true : undefined}
              icon="circle"
              text={""}
              onClick={() =>
                toolSelected("circle", activeSketchTool, setActiveSketchTool)
              }
            ></CalciteAction>
            <CalciteTooltip
              closeOnClick
              referenceElement="sketchCircleTip"
            >
              Circle
            </CalciteTooltip>
            <CalciteAction
              id="text"
              active={activeSketchTool === "text" ? true : undefined}
              icon="text"
              text={""}
              onClick={() =>
                toolSelected("text", activeSketchTool, setActiveSketchTool)
              }
            ></CalciteAction>
            <CalciteTooltip closeOnClick label="Text" referenceElement="text">
              Text
            </CalciteTooltip>
          </CalciteActionGroup>
          <CalciteActionGroup layout="horizontal">
            <CalciteAction
              id="selectSketch"
              icon="cursor"
              text={""}
              active={activeSketchTool === "select" ? true : undefined}
              onClick={() => {
                stopSketching();
                toolSelected("select", activeSketchTool, setActiveSketchTool);
                setTimeout(() => {
                  props.view.popupEnabled = false;
                }, 1000);
              }}
            ></CalciteAction>
            <CalciteTooltip
              closeOnClick
              label="Select Sketch"
              referenceElement="selectSketch"
            >
              Select Sketch
            </CalciteTooltip>
            <CalciteAction
              id="clearSketch"
              icon="trash"
              text={""}
              onClick={() =>
                clearSketch(setActiveSketchTool, setSelectedGraphics)
              }
            ></CalciteAction>
            <CalciteTooltip
              closeOnClick
              label="Clear Sketches"
              referenceElement="clearSketch"
            >
              Clear Sketches
            </CalciteTooltip>
          </CalciteActionGroup>
        </div>
        <div
          id="point-symbols"
          className="symbol"
          hidden={
            activeSketchTool === "point" ||
            (checkGeometryType(selectedGraphics, "point") &&
              activeSketchTool === "select")
              ? undefined
              : true
          }
        >
          <PointSymbols pointSymbolUpdated={pointSymbolUpdated}></PointSymbols>
        </div>
        <div
          id="line-symbols"
          className="symbol"
          hidden={
            activeSketchTool === "polyline" ||
            (checkGeometryType(selectedGraphics, "polyline") &&
              activeSketchTool === "select")
              ? undefined
              : true
          }
        >
          <LineSymbols
            polylineSymbolUpdated={polylineSymbolUpdated}
          ></LineSymbols>
        </div>
        <div
          id="polygon-symbols"
          className="symbol"
          hidden={
            ["polygon", "rectangle", "circle"].includes(activeSketchTool) ||
            (checkGeometryType(selectedGraphics, "polygon") &&
              activeSketchTool === "select")
              ? undefined
              : true
          }
        >
          <PolygonSymbols
            polygonSymbolUpdated={polygonSymbolUpdated}
          ></PolygonSymbols>
        </div>
        <div
          id="text-symbols"
          className="symbol"
          hidden={
            activeSketchTool === "text" ||
            (checkGeometryType(selectedGraphics, "text") &&
              activeSketchTool === "select")
              ? undefined
              : true
          }
        >
          <TextSymbols textSymbolUpdated={textSymbolUpdated}></TextSymbols>
        </div>
        {selectedGraphics.length > 0 && (
          <CalciteButton
            onClick={() =>
              deleteSelectedGraphics(selectedGraphics, setSelectedGraphics)
            }
            alignment="center"
            kind="danger"
            appearance="transparent"
            icon-end="trash"
          >
            {selectedGraphics.length}{" "}
            {selectedGraphics.length > 1 ? "features" : "feature"}
          </CalciteButton>
        )}
      </div>
    </CalcitePanel>
  );
}

export default React.memo(Sketch);
