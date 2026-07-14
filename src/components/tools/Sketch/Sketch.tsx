import React from "react";
import "@esri/calcite-components/components/calcite-panel";
import { useSketch } from "./useSketch";
import "@esri/calcite-components/components/calcite-action-bar";
import "@esri/calcite-components/components/calcite-action-group";
import "@esri/calcite-components/components/calcite-action";
import "@esri/calcite-components/components/calcite-label";
import "@esri/calcite-components/components/calcite-block";
import "@esri/calcite-components/components/calcite-color-picker";
import "@esri/calcite-components/components/calcite-color-picker-swatch";
import "@esri/calcite-components/components/calcite-icon";
import "@esri/calcite-components/components/calcite-button";
import "@esri/calcite-components/components/calcite-popover";
import "@esri/calcite-components/components/calcite-slider";
import "@esri/calcite-components/components/calcite-input-number";
import "@esri/calcite-components/components/calcite-tooltip";

import "@esri/calcite-components/components/calcite-text-area";
import LineSymbolPicker from "./symbols/LineSymbolPicker";
import FillSymbolPicker from "./symbols/FillSymbolPicker";
import TextSymbolPicker from "./symbols/TextSymbolPicker";
import PointSymbolPicker from "./symbols/PointSymbolPicker";

import styles from "./Sketch.module.css";
import TipManager from "../../TipsManager";

interface SketchProps {
  mapElement: React.RefObject<HTMLArcgisMapElement>;
  closed: boolean;
  onToolClose: () => void;
  onHelpClick: (id: string) => void;
}

const Sketch: React.FC<SketchProps> = ({
  mapElement,
  closed,
  onToolClose,
  onHelpClick,
}) => {
  const {
    mapMode,
    pointSymbol,
    polylineSymbol,
    polygonSymbol,
    textSymbol,
    selectedGraphicIds,
    selectedGraphicsType,
    handleActionClick,
    handleToolClose,
    handlePointSymbolChange,
    handlePolylineSymbolChange,
    handlePolygonSymbolChange,
    handleTextSymbolChange,
    clearSketches,
    handleDeleteSelectedGraphics,
    selectedWebSymbol,
    setSelectedWebSymbol,
    pointColor,
    setPointColor,
    pointSize,
    setPointSize,
    pointSymbolInitialized,
    setPointSymbolInitialized,
    snappingEnabled,
    handleSnappingChange,
    handleUndo
  } = useSketch(mapElement, closed);

  return (
    <>
      <div>
        <calcite-panel
          heading="Sketch"
          closable
          oncalcitePanelClose={() => {
            onToolClose();
            handleToolClose();
          }}
          closed={closed}
          collapsible
          style={{ marginRight: "1em" }}
        >
          <calcite-action
            slot="header-actions-end"
            icon="question-mark"
            text="Help"
            onClick={() => onHelpClick("sketch")}
          ></calcite-action>
          <TipManager name="sketch"></TipManager>

          <div className={styles.panelContent}>
            <calcite-action-bar layout="horizontal" expandDisabled>
              <calcite-action
                id="sketch-point-action"
                text="Point"
                icon="pin"
                onClick={() => handleActionClick("point")}
                active={mapMode === "point"}
              ></calcite-action>
              <calcite-action
                id="sketch-line-action"
                text="Line"
                icon="line"
                onClick={() => handleActionClick("polyline")}
                active={mapMode === "polyline"}
              ></calcite-action>
              <calcite-action
                id="sketch-polygon-action"
                text="Polygon"
                icon="polygon"
                onClick={() => handleActionClick("polygon")}
                active={mapMode === "polygon"}
              ></calcite-action>
              <calcite-action
                id="sketch-rectangle-action"
                text="Rectangle"
                icon="rectangle"
                onClick={() => handleActionClick("rectangle")}
                active={mapMode === "rectangle"}
              ></calcite-action>
              <calcite-action
                id="sketch-circle-action"
                text="Circle"
                icon="circle"
                onClick={() => handleActionClick("circle")}
                active={mapMode === "circle"}
              ></calcite-action>
              <calcite-action
                id="sketch-text-action"
                text="Text"
                icon="text"
                onClick={() => handleActionClick("text")}
                active={mapMode === "text"}
              ></calcite-action>
            </calcite-action-bar>
            <calcite-action-bar layout="horizontal" expandDisabled>
              <calcite-action
                id="sketch-select-action"
                text="Select"
                icon="select"
                onClick={() => handleActionClick("select")}
                active={mapMode === "select"}
              ></calcite-action>     
              <calcite-action
                id="sketch-undo-action"
                text="Undo"
                icon="undo"
                onClick={handleUndo}
              ></calcite-action>                    
              <calcite-action
                id="sketch-clear-action"
                text="Clear"
                icon="trash"
                onClick={clearSketches}
              ></calcite-action>
            </calcite-action-bar>
          </div>
          {(mapMode === "point" || selectedGraphicsType === "point") && (
            <calcite-block heading="Point Style" label="Point Style" expanded>
              <PointSymbolPicker
                symbol={pointSymbol!}
                onSymbolChange={handlePointSymbolChange}
                selectedWebSymbol={selectedWebSymbol}
                setSelectedWebSymbol={setSelectedWebSymbol}
                pointColor={pointColor}
                setPointColor={setPointColor}
                pointSize={pointSize}
                setPointSize={setPointSize}
                pointSymbolInitialized={pointSymbolInitialized}
                setPointSymbolInitialized={setPointSymbolInitialized}
              />
            </calcite-block>
          )}
          {(mapMode === "polyline" || selectedGraphicsType === "polyline") && (
            <calcite-block heading="Line Style" label="Line Style" expanded>
              <LineSymbolPicker
                symbol={polylineSymbol}
                onSymbolChange={handlePolylineSymbolChange}
              ></LineSymbolPicker>
            </calcite-block>
          )}
          {(["polygon", "rectangle", "circle"].includes(mapMode as string) ||
            selectedGraphicsType === "polygon") && (
            <calcite-block
              heading="Polygon Style"
              label="Polygon Style"
              expanded
            >
              <FillSymbolPicker
                symbol={polygonSymbol}
                onSymbolChange={handlePolygonSymbolChange}
              />
              <LineSymbolPicker
                symbol={polygonSymbol}
                onSymbolChange={handlePolygonSymbolChange}
              />
            </calcite-block>
          )}
          {(mapMode === "text" || selectedGraphicsType === "text") && (
            <calcite-block heading="Text Style" label="Text Style" expanded>
              <TextSymbolPicker
                symbol={textSymbol}
                onSymbolChange={handleTextSymbolChange}
              />
            </calcite-block>
          )}
          <div slot="content-bottom">
            <calcite-label layout="inline" scale="s">
              <calcite-switch scale="s" checked={snappingEnabled} oncalciteSwitchChange={handleSnappingChange}></calcite-switch>
              Snap to property
            </calcite-label>
            {mapMode === "select" && selectedGraphicIds.length > 0 && (
              <calcite-button
                iconStart="trash"
                round
                kind="danger"
                appearance="outline"
                onClick={handleDeleteSelectedGraphics}
              >
                Delete {selectedGraphicIds.length}{" "}
                {selectedGraphicIds.length === 1 ? "Graphic" : "Graphics"}
              </calcite-button>
            )}
          </div>
        </calcite-panel>
      </div>
      <calcite-tooltip
        reference-element="sketch-point-action"
        placement="bottom"
      >
        Point sketch
      </calcite-tooltip>
      <calcite-tooltip closeOnClick reference-element="sketch-line-action">
        Line sketch
      </calcite-tooltip>
      <calcite-tooltip closeOnClick reference-element="sketch-polygon-action">
        Polygon sketch
      </calcite-tooltip>
      <calcite-tooltip closeOnClick reference-element="sketch-rectangle-action">
        Rectangle sketch
      </calcite-tooltip>
      <calcite-tooltip closeOnClick reference-element="sketch-circle-action">
        Circle sketch
      </calcite-tooltip>
      <calcite-tooltip closeOnClick reference-element="sketch-text-action">
        Text sketch
      </calcite-tooltip>
      <calcite-tooltip closeOnClick reference-element="sketch-select-action">
        Select sketch
      </calcite-tooltip>
      <calcite-tooltip closeOnClick reference-element="sketch-undo-action">
        Undo
      </calcite-tooltip>      
      <calcite-tooltip closeOnClick reference-element="sketch-clear-action">
        Clear sketch
      </calcite-tooltip>
    </>
  );
};

export default Sketch;
