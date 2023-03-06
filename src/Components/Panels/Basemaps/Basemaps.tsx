import {
  CalciteAlert,
  CalciteTab,
  CalciteTabNav,
  CalciteTabs,
  CalciteTabTitle,
  CalcitePanel,
  CalciteAction,
  CalciteTooltip,
  CalciteSwitch,
  CalciteLabel,
  CalciteSlider,
} from "@esri/calcite-components-react";
import React from "react";
import { PanelProps } from "../utils/PanelProps";
// import Blend from "./Blend/Blend";

import "./Basemaps.css";
import useBasemaps from "./utils/useBasemaps";
function Basemaps(props: PanelProps) {
  const {
    basemapRef,
    imagesRef,
    esriRef,
    showAlert,
    isActive,
    panelDismissed,
    tipsClicked,
    blendUpdated,
    blendOpacityChanged,
    blendActive,
  } = useBasemaps(props);
  return (
    <CalcitePanel
      id="basemaps-panel"
      heading="Basemaps"
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
      <div className="basemaps">
        <CalciteTabs position="bottom" layout="center" scale="l">
          <CalciteTabNav slot="title-group">
            <CalciteTabTitle>Maps</CalciteTabTitle>
            <CalciteTabTitle>Images</CalciteTabTitle>
            <CalciteTabTitle>Esri</CalciteTabTitle>
            {/* <CalciteTabTitle>Blend</CalciteTabTitle> */}
          </CalciteTabNav>
          <CalciteTab>
            <div ref={basemapRef}></div>
          </CalciteTab>
          <CalciteTab>
            <br />
            <CalciteLabel layout="inline" alignment="end">
              <CalciteSwitch
                onCalciteSwitchChange={blendUpdated}
              ></CalciteSwitch>
              Blend
            </CalciteLabel>
            <CalciteSlider
              hidden={blendActive ? undefined : true}
              max={100}
              min={0}
              value={50}
              onCalciteSliderInput={blendOpacityChanged}
            ></CalciteSlider>
            <div ref={imagesRef}></div>
          </CalciteTab>
          <CalciteTab>
            <div ref={esriRef}></div>
          </CalciteTab>
          {/* <CalciteTab>
            <Blend
              view={view}
              mapGroup={mapGroup}
              imageGroup={imageGroup}
            ></Blend>
          </CalciteTab> */}
        </CalciteTabs>
        {/* <CalciteAlert
          open={showAlert.show === true ? true : undefined}
          autoClose
          autoCloseDuration="medium"
          kind="warning"
          label="Imagery Year Changed"
        >
          <div slot="title">Imagery Not Available</div>
          <div slot="message">{`Imagery for ${showAlert.from} only available inside Raleigh, base map has changed to ${showAlert.to}`}</div>
        </CalciteAlert> */}
      </div>
    </CalcitePanel>
  );
}

export default React.memo(Basemaps);
