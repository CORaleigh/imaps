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
} from '@esri/calcite-components-react';
import React from 'react';
import { PanelProps } from '../utils/PanelProps';
// import Blend from "./Blend/Blend";

import './Basemaps.css';
import useBasemaps from './utils/useBasemaps';
function Basemaps(props: PanelProps) {
  const {
    basemapRef,
    imagesRef,
    esriRef,
    isActive,
    panelDismissed,
    tipsClicked,
    blendUpdated,
    blendOpacityChanged,
    blendActive,
    showBlend,
    selectedTab,
    setSelectedTab,
    opacity,
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
        id="basemapsTip"
        icon="lightbulb"
        text="Tips"
        slot="header-actions-end"
        onClick={tipsClicked}
      ></CalciteAction>
      <CalciteTooltip referenceElement="basemapsTip" closeOnClick>
        Show Tip
      </CalciteTooltip>
      <div className="basemaps">
        <CalciteTabs position="bottom" layout="center" scale="l">
          <CalciteTabNav slot="title-group">
            <CalciteTabTitle
              tab="map"
              selected={selectedTab === 'maps' ? true : undefined}
              onCalciteTabsActivate={(_) => setSelectedTab('maps')}
            >
              Maps
            </CalciteTabTitle>
            <CalciteTabTitle
              tab="images"
              selected={selectedTab === 'images' ? true : undefined}
              onCalciteTabsActivate={(_) => setSelectedTab('images')}
            >
              Images
            </CalciteTabTitle>
            <CalciteTabTitle
              tab="esri"
              selected={selectedTab === 'esri' ? true : undefined}
              onCalciteTabsActivate={(_) => setSelectedTab('esri')}
            >
              Esri
            </CalciteTabTitle>
            {/* <CalciteTabTitle>Blend</CalciteTabTitle> */}
          </CalciteTabNav>
          <CalciteTab
            tab="map"
            selected={selectedTab === 'maps' ? true : undefined}
          >
            <div ref={basemapRef}></div>
          </CalciteTab>
          <CalciteTab
            tab="images"
            selected={selectedTab === 'images' ? true : undefined}
          >
            <br />
            <CalciteLabel
              hidden={showBlend ? undefined : true}
              layout="inline"
              alignment="end"
            >
              <CalciteSwitch
                checked={blendActive ? true : undefined}
                onCalciteSwitchChange={blendUpdated}
              ></CalciteSwitch>
              Blend
            </CalciteLabel>
            <CalciteSlider
              hidden={blendActive && showBlend ? undefined : true}
              max={100}
              min={0}
              value={100 - opacity * 100}
              onCalciteSliderInput={blendOpacityChanged}
            ></CalciteSlider>
            <div ref={imagesRef}></div>
          </CalciteTab>
          <CalciteTab
            tab="esri"
            selected={selectedTab === 'esri' ? true : undefined}
          >
            <div ref={esriRef}></div>
          </CalciteTab>
        </CalciteTabs>
      </div>
    </CalcitePanel>
  );
}

export default React.memo(Basemaps);
