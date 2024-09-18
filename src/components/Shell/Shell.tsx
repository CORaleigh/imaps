import React, { lazy, Suspense } from "react";
import {
  CalciteButton,
  CalciteCheckbox,
  CalciteLabel,
  CalciteModal,
  CalciteScrim,
  CalciteShell,
  CalciteShellPanel,
  CalciteDialog
} from "@esri/calcite-components-react";
// import WebMap from "../WebMap/WebMap";
import Header from "../Header/Header";
import "./Shell.css";

//import Property from "../Panels/Property/Property";

import Toolbar from "./Toolbar";
import useShell from "./utils/useShell";
import AppTips from "./AppTips";
import AppAlert from "./AppAlert";
const WebMap = lazy(() => import("../WebMap/WebMap"));
const Property = lazy(() => import("../Panels/Property/Property"));

const Location = lazy(() => import("../Panels/Location/Location"));
const Layers = lazy(() => import("../Panels/Layers/Layers"));
const Legend = lazy(() => import("../Panels/Legend/Legend"));
const Basemaps = lazy(() => import("../Panels/Basemaps/Basemaps"));
const Select = lazy(() => import("../Tools/Select/Select"));
const Measure = lazy(() => import("../Tools/Measure/Measure"));
const Sketch = lazy(() => import("../Tools/Sketch/Sketch"));
const Bookmarks = lazy(() => import("../Tools/Bookmarks/Bookmarks"));
const Print = lazy(() => import("../Tools/Print/Print"));

function Shell() {
  const {
    activePanel,
    activeTool,
    contentBehind,
    view,
    activePanelChanged,
    activeToolChanged,
    geometry,
    propertySelected,
    loadedPanels,
    panelDismissed,
    loadedTools,
    toolDismissed,
    loading,
    alertSet,
    selectedProperty,
    mapCallback,
    geometryCallback,
    properties,
    widgetCallback,
    alert,
    tipsCallback,
    tips,
    mapId,
    showDisclaimer, 
    setShowDisclaimer,
    logo,
    disclaimerOptedOut,
    setDisclaimerOptedOut
  } = useShell();
  return (
    <div>
    <CalciteShell contentBehind={contentBehind ? true : undefined}>
      <Header disclaimerClicked={() => setShowDisclaimer(true)} logo={logo}></Header>
      <CalciteShellPanel slot="panel-start" position="start" hidden></CalciteShellPanel>
      <CalciteShellPanel
        className="custom-width"
        slot="panel-end"
        position="end"
        resizable
        collapsed={activePanel === ""}
      >
        {view && (
          <Toolbar
            view={view}
            activePanelChanged={activePanelChanged}
            activeToolChanged={activeToolChanged}
            activePanel={activePanel}
            activeTool={activeTool}
            expandable={contentBehind ? true : undefined}
          ></Toolbar>
        )}
        {view && loadedPanels.includes("search") && (
          <Property
            view={view}
            geometry={geometry}
            selected={propertySelected}
            isActive={activePanel === "search"}
            panelDismissed={panelDismissed}
            showTips={tipsCallback}
            alertSet={alertSet}
          ></Property>
        )}
        {view && loadedPanels.includes("location") && (
          <Suspense fallback={null}>
            <Location
              view={view}
              panelDismissed={panelDismissed}
              isActive={activePanel === "location"}
              showTips={tipsCallback}
            ></Location>
          </Suspense>
        )}
        {view && loadedPanels.includes("layers") && (
          <Suspense fallback={null}>
            <Layers
              view={view}
              panelDismissed={panelDismissed}
              isActive={activePanel === "layers"}
              showTips={tipsCallback}
              mapId={mapId}
            ></Layers>
          </Suspense>
        )}
        {view && loadedPanels.includes("legend") && (
          <Suspense fallback={null}>
            <Legend
              view={view}
              panelDismissed={panelDismissed}
              isActive={activePanel === "legend"}
              showTips={tipsCallback}
            ></Legend>
          </Suspense>
        )}
        {view && loadedPanels.includes("basemaps") && (
          <Suspense fallback={null}>
            <Basemaps
              view={view}
              panelDismissed={panelDismissed}
              isActive={activePanel === "basemaps"}
              showTips={tipsCallback}
              alertSet={alertSet}
            ></Basemaps>
          </Suspense>
        )}
      </CalciteShellPanel>
      <div className={`tools esri-component`}>
        {view && loadedTools.includes("select") && (
          <Suspense fallback={null}>
            <Select
              view={view}
              selectedProperty={selectedProperty}
              geometrySet={geometryCallback}
              toolDismissed={toolDismissed}
              isActive={activeTool === "select"}
              showTips={tipsCallback}
            ></Select>
          </Suspense>
        )}
        {view && loadedTools.includes("measure") && (
          <Suspense fallback={null}>
            <Measure
              view={view}
              toolDismissed={toolDismissed}
              isActive={activeTool === "measure"}
              showTips={tipsCallback}
            ></Measure>
          </Suspense>
        )}
        {view && loadedTools.includes("sketch") && (
          <Suspense fallback={null}>
            <Sketch
              view={view}
              toolDismissed={toolDismissed}
              isActive={activeTool === "sketch"}
              showTips={tipsCallback}
            ></Sketch>
          </Suspense>
        )}
        {view && loadedTools.includes("bookmarks") && (
          <Suspense fallback={null}>
            <Bookmarks
              view={view}
              toolDismissed={toolDismissed}
              isActive={activeTool === "bookmarks"}
              showTips={tipsCallback}
            ></Bookmarks>
          </Suspense>
        )}
        {view && loadedTools.includes("print") && (
          <Suspense fallback={null}>
            <Print
              view={view}
              exportUrl="https://maps.raleighnc.gov/print/rest/services/Geoprocessing/ExportWebMapPro/GPServer/Export%20Web%20Map"
              selectedProperty={selectedProperty}
              toolDismissed={toolDismissed}
              isActive={activeTool === "print"}
              showTips={tipsCallback}
            ></Print>
          </Suspense>
        )}
      </div>
      <WebMap
        mapId={mapId}
        mapViewSet={mapCallback}
        geometrySet={geometryCallback}
        properties={properties}
        widgetActivated={widgetCallback}
        alertSet={alertSet}
      ></WebMap>
      <CalciteScrim loading hidden={!loading ? true : undefined}></CalciteScrim>
    </CalciteShell>
    <AppTips tips={tips}></AppTips>
    <AppAlert alert={alert} ></AppAlert>

    <CalciteDialog open={showDisclaimer}  width-scale="s" onCalciteDialogClose={() => setShowDisclaimer(false)} heading="Disclaimer" id="disclaimer-dialog" placement="center">
        <p>iMAPS makes every effort to produce and publish the most current and accurate information possible. However,
          the maps are productions for information purposed, and are NOT surveys. No warranties, expressed or implied,
          are provided for the data therein, its use, or its interpretation. Register of Deeds documents accessed
          through this site are unofficial. The official records are maintained at the Wake County Register of Deeds
          office. The Wake County Register of Deeds assumes no responsibility or liability associated with the use or
          misused of this data.</p>
   
        <CalciteLabel slot="footer-start" layout="inline-space-between">
          <CalciteCheckbox checked={disclaimerOptedOut ? true : undefined} onCalciteCheckboxChange={(e) => {
            if (e.target.checked) {
              localStorage.setItem('imaps_disclaimer_opted_out', '');
              setDisclaimerOptedOut(true);
            } else {
              localStorage.removeItem('imaps_disclaimer_opted_out');
              setDisclaimerOptedOut(false);
            }
          }}></CalciteCheckbox>Don't show again
        </CalciteLabel>        
        <CalciteButton
          slot="footer-end"
          kind="brand"
          onClick={() => {
            setShowDisclaimer(false)
          }}
        >
          Close
        </CalciteButton>
    </CalciteDialog>




    {/* <CalciteModal open={showDisclaimer} onCalciteModalClose={() => setShowDisclaimer(false)} aria-labelledby="disclaimer-title">
        <div slot="header" id="disclaimer-title">
          Disclaimer
        </div>
        <div slot="content">
          iMAPS makes every effort to produce and publish the most current and accurate information possible. However,
          the maps are productions for information purposed, and are NOT surveys. No warranties, expressed or implied,
          are provided for the data therein, its use, or its interpretation. Register of Deeds documents accessed
          through this site are unofficial. The official records are maintained at the Wake County Register of Deeds
          office. The Wake County Register of Deeds assumes no responsibility or liability associated with the use or
          misused of this data.
        </div>
        <CalciteLabel slot="back" layout="inline-space-between">
          <CalciteCheckbox checked={disclaimerOptedOut ? true : undefined} onCalciteCheckboxChange={(e) => {
            if (e.target.checked) {
              localStorage.setItem('imaps_disclaimer_opted_out', '');
              setDisclaimerOptedOut(true);
            } else {
              localStorage.removeItem('imaps_disclaimer_opted_out');
              setDisclaimerOptedOut(false);
            }
          }}></CalciteCheckbox>Don't show again
        </CalciteLabel>
        <CalciteButton
          slot="primary"
          width="full"
          onClick={() => {
            setShowDisclaimer(false)
          }}
        >
          Close
        </CalciteButton>
      </CalciteModal>     */}
    </div>
  );
}
export default Shell;
