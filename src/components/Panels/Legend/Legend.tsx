import React from "react";

import {
  CalciteAction,
  CalcitePanel,
  CalciteTooltip,
} from "@esri/calcite-components-react";
import useLegend from "./utils/useLegend";
import { PanelProps } from "../utils/PanelProps";
export const Legend = (props: PanelProps) => {
  const { ref, isActive, panelDismissed, tipsClicked } = useLegend(props);

  return (
    <CalcitePanel
      id="layers-panel"
      heading="Legend"
      hidden={!isActive}
      closed={!isActive ? true : undefined}
      closable
      onCalcitePanelClose={panelDismissed}
    >
      <CalciteAction
        id="legendTip"
        icon="lightbulb"
        text="Tips"
        slot="header-actions-end"
        onClick={tipsClicked}
      ></CalciteAction>
      <CalciteTooltip referenceElement="legendTip" closeOnClick>
        Show Tip
      </CalciteTooltip>
      <div ref={ref}></div>
    </CalcitePanel>
  );
};
export default React.memo(Legend);
