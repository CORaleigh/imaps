import {
  CalciteAction,
  CalciteInput,
  CalciteScrim,
  CalcitePanel,
  CalciteTooltip,
} from "@esri/calcite-components-react";
import React from "react";
import { filterLayers, resetLayers } from "./utils/layers";
import "./Layers.css";
import useLayers from "./utils/useLayers";
import { PanelProps } from "../utils/PanelProps";
export const Layers = (props: PanelProps) => {
  const { ref, layerList, isLoading, isActive, panelDismissed, tipsClicked } =
    useLayers(props);

  return (
    <CalcitePanel
      id="layers-panel"
      heading="Layers"
      hidden={!isActive}
      closed={!isActive ? true : undefined}
      closable 
      onCalcitePanelClose={panelDismissed}
    >
      {layerList && 
      (<><CalciteAction
        id="layerReset"
        text="Reset Layers"
        icon="reset"
        scale="s"
        slot="header-actions-end"
        onClick={() => resetLayers(layerList)}
      ></CalciteAction>
        <CalciteTooltip referenceElement="layerReset" closeOnClick>
          Reset Layers
        </CalciteTooltip></>   
      )
      }
      <CalciteAction
        id="layerTip"
        icon="lightbulb"
        text="Tips"
        slot="header-actions-end"
        onClick={tipsClicked}
      ></CalciteAction>
      <CalciteTooltip referenceElement="layerTip" closeOnClick>
        Show Tip
      </CalciteTooltip>
      <div className="layers">
        <div ref={ref}></div>
        <CalciteScrim
          loading
          hidden={isLoading ? undefined : true}
        ></CalciteScrim>
      </div>
    </CalcitePanel>
  );
};
export default Layers;
