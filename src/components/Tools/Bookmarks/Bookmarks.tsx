import React from "react";
import {
  CalcitePanel,
  CalciteAction,
  CalciteTooltip,
} from "@esri/calcite-components-react";
import "./Bookmarks.css";
import { collapsePanel } from "../../Shell/utils/shell";
import useBookmarks from "./utils/useBooksmarks";
import { ToolProps } from "../utils/ToolProps";
export const Bookmarks = (props: ToolProps) => {
  const { bookmarkRef, isActive, toolDismissed, tipsClicked } =
    useBookmarks(props);
  return (
    <CalcitePanel
      id="bookmarks-panel"
      heading="Bookmarks"
      data-panel="bookmarks"
      hidden={!isActive}
      closed={!isActive ? true : undefined}
      closable
      onCalcitePanelClose={toolDismissed}
    >
      <CalciteAction
        id="bookmarkTip"
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
      <CalciteTooltip referenceElement="bookmarkTip" closeOnClick>
        Show Tip
      </CalciteTooltip>
      <CalciteTooltip
        referenceElement="collapseTool"
        closeOnClick
      >
        Collapse
      </CalciteTooltip>
      <div ref={bookmarkRef}></div>
    </CalcitePanel>
  );
};

export default React.memo(Bookmarks);
