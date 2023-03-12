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
      heading="Layer List"
      hidden={!isActive}
      closed={!isActive ? true : undefined}
      closable 
      onCalcitePanelClose={panelDismissed}
    >
      <CalciteAction
        id="tip"
        icon="lightbulb"
        text="Tips"
        slot="header-actions-end"
        onClick={tipsClicked}
      ></CalciteAction>
      <CalciteTooltip label="Show Tip" referenceElement="tip" closeOnClick>
        Show Tip
      </CalciteTooltip>
      <div className="layers">
        {layerList && (
          <div className="row sticky">
            <CalciteInput
              clearable
              placeholder="Filter by layer name"
              scale="m"
              onCalciteInputInput={(e) => {
                if (layerList) {
                  filterLayers(e.target.value, layerList);
                }
              }}
            ></CalciteInput>
            <CalciteAction
              text="clear"
              icon="viewHide"
              scale="s"
              onClick={() => resetLayers(layerList)}
            ></CalciteAction>
          </div>
        )}
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
