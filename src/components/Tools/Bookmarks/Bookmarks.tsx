import React from 'react';
import {
  CalcitePanel,
  CalciteAction,
  CalciteTooltip,
} from '@esri/calcite-components-react';
import './Bookmarks.css';
import useBookmarks from './utils/useBooksmarks';
import { ToolProps } from '../utils/ToolProps';
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
      collapsible
      onCalcitePanelClose={toolDismissed}
    >
      <CalciteAction
        id="bookmarkTip"
        icon="lightbulb"
        text="Tips"
        slot="header-actions-end"
        onClick={tipsClicked}
      ></CalciteAction>
      <CalciteTooltip referenceElement="bookmarkTip" closeOnClick>
        Show Tip
      </CalciteTooltip>
      <div ref={bookmarkRef}></div>
    </CalcitePanel>
  );
};

export default React.memo(Bookmarks);
