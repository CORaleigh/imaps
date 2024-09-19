import {
  CalciteAction,
  CalciteActionBar,
  CalciteActionGroup,
  CalciteTooltip,
} from "@esri/calcite-components-react";
import React, { useEffect, useState } from "react";
import { panelSelected, toolSelected } from "./utils/shell";
interface Props {
  view: __esri.MapView;
  expandable: boolean | undefined;
  activePanel: string;
  activeTool: string;
  activePanelChanged: (panel: string) => void;
  activeToolChanged: (tool: string) => void;
}
function Toolbar(props: Props) {
  const [activePanel, setActivePanel] = useState("search");
  const [activeTool, setActiveTool] = useState("");

  useEffect(() => {
    setActivePanel(props.activePanel);
  }, [props.activePanel]);
  useEffect(() => {
    setActiveTool(props.activeTool);
  }, [props.activeTool]);
  return (
    <CalciteActionBar
      slot="action-bar"
      position="end"
     
    >
      <CalciteActionGroup>
        <CalciteAction
          id="propertySearch"
          icon="search"
          text="Property Search"
          active={activePanel === "search" ? true : undefined}
          onClick={() =>
            panelSelected(
              "search",
              activePanel,
              setActiveTool,
              setActivePanel,
              props.activePanelChanged,
              props.activeToolChanged
            )
          }
        ></CalciteAction>
        <CalciteTooltip
          closeOnClick
          referenceElement="propertySearch"
        >
          Property Search
        </CalciteTooltip>
        <CalciteAction
          id="locationSearch"
          icon="pin"
          text="Location Search"
          active={activePanel === "location" ? true : undefined}
          onClick={() => {
            panelSelected(
              "location",
              activePanel,
              setActiveTool,
              setActivePanel,
              props.activePanelChanged,
              props.activeToolChanged
            );
          }}
        ></CalciteAction>
        <CalciteTooltip
          closeOnClick
          referenceElement="locationSearch"
        >
          Location Search
        </CalciteTooltip>
        <CalciteAction
          id="layerList"
          icon="layers"
          text="Layers"
          active={activePanel === "layers" ? true : undefined}
          onClick={() => {
            panelSelected(
              "layers",
              activePanel,
              setActiveTool,
              setActivePanel,
              props.activePanelChanged,
              props.activeToolChanged
            );
          }}
        ></CalciteAction>
        <CalciteTooltip
          closeOnClick
          referenceElement="layerList"
        >
          Layers
        </CalciteTooltip>
        <CalciteAction
          id="legend"
          icon="legend"
          text="Legend"
          active={activePanel === "legend" ? true : undefined}
          onClick={() => {
            panelSelected(
              "legend",
              activePanel,
              setActiveTool,
              setActivePanel,
              props.activePanelChanged,
              props.activeToolChanged
            );
          }}
        ></CalciteAction>
        <CalciteTooltip closeOnClick referenceElement="legend">
          Legend
        </CalciteTooltip>
        <CalciteAction
          id="basemaps"
          icon="basemap"
          text="Basemaps"
          active={activePanel === "basemaps" ? true : undefined}
          onClick={() => {
            panelSelected(
              "basemaps",
              activePanel,
              setActiveTool,
              setActivePanel,
              props.activePanelChanged,
              props.activeToolChanged
            );
          }}
        ></CalciteAction>
        <CalciteTooltip
          closeOnClick
          referenceElement="basemaps"
        >
          Basemaps
        </CalciteTooltip>
      </CalciteActionGroup>
      <CalciteActionGroup>
        <CalciteAction
          id="propertySelect"
          icon="select"
          text="Property Select"
          active={activeTool === "select" ? true : undefined}
          onClick={() =>
            toolSelected(
              "select",
              activeTool,
              setActiveTool,
              setActivePanel,
              props.activePanelChanged,
              props.activeToolChanged
            )
          }
        ></CalciteAction>
        <CalciteTooltip
          closeOnClick
          referenceElement="propertySelect"
        >
          Property Select
        </CalciteTooltip>
        <CalciteAction
          id="measure"
          icon="measure"
          text="Measure"
          active={activeTool === "measure" ? true : undefined}
          onClick={() => {
            toolSelected(
              "measure",
              activeTool,
              setActiveTool,
              setActivePanel,
              props.activePanelChanged,
              props.activeToolChanged
            );
          }}
        ></CalciteAction>
        <CalciteTooltip closeOnClick referenceElement="measure">
          Measure
        </CalciteTooltip>
        <CalciteAction
          id="sketch"
          icon="pencil"
          text="Sketch"
          active={activeTool === "sketch" ? true : undefined}
          onClick={() => {
            toolSelected(
              "sketch",
              activeTool,
              setActiveTool,
              setActivePanel,
              props.activePanelChanged,
              props.activeToolChanged
            );
          }}
        ></CalciteAction>
        <CalciteTooltip closeOnClick referenceElement="sketch">
          Sketch
        </CalciteTooltip>
        <CalciteAction
          id="bookmarks"
          icon="bookmark"
          text="Bookmarks"
          active={activeTool === "bookmarks" ? true : undefined}
          onClick={() => {
            toolSelected(
              "bookmarks",
              activeTool,
              setActiveTool,
              setActivePanel,
              props.activePanelChanged,
              props.activeToolChanged
            );
          }}
        ></CalciteAction>
        <CalciteTooltip
          closeOnClick
          referenceElement="bookmarks"
        >
          Bookmarks
        </CalciteTooltip>
        <CalciteAction
          id="print"
          icon="print"
          text="Print"
          active={activeTool === "print" ? true : undefined}
          onClick={() =>
            toolSelected(
              "print",
              activeTool,
              setActiveTool,
              setActivePanel,
              props.activePanelChanged,
              props.activeToolChanged
            )
          }
        ></CalciteAction>
        <CalciteTooltip closeOnClick referenceElement="print">
          Print
        </CalciteTooltip>
      </CalciteActionGroup>
    </CalciteActionBar>
  );
}
export default React.memo(Toolbar);
