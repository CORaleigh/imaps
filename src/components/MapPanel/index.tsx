import React, { Suspense } from "react";

import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-popup";
import "@arcgis/map-components/components/arcgis-expand";
import "@arcgis/map-components/components/arcgis-home";
import "@arcgis/map-components/components/arcgis-zoom";
import "@arcgis/map-components/components/arcgis-compass";
import "@arcgis/map-components/components/arcgis-track";
import "@arcgis/map-components/components/arcgis-scale-bar";

import { lazy } from "react";
import OverviewMap from "../tools/OverviewMap";
import CoordinateConversion from "../tools/CoordinateConversion";
import type { MapMode } from "../../context/MapContext.types.ts";
import type { ToolType } from "../Shell/useShell";

import styles from "./MapPanel.module.css";

interface MapPanelProps {
  mapElement: React.RefObject<HTMLArcgisMapElement>;
  activeTool: ToolType;
  openedTools: ToolType[];
  mapMode: MapMode;
  coordinateConversionOpen: boolean;
  overviewOpen: boolean;
  onMapReady: (event: HTMLArcgisMapElement["arcgisViewReadyChange"]) => void;
  onViewHold: (event: HTMLArcgisMapElement["arcgisViewHold"]) => void;
  onGoHome: HTMLArcgisHomeElement["goToOverride"];
  onCustomActionClick: (action: "identify" | "streetview" | null) => void;
  onCoordinateExpand: (
    event: HTMLArcgisExpandElement["arcgisPropertyChange"],
  ) => void;
  onOverviewExpand: (
    event: HTMLArcgisExpandElement["arcgisPropertyChange"],
  ) => void;
  onToolClose: () => void;
  onHelpClick: (id: string) => void;
  onPopupTriggerAction: (
    event: HTMLArcgisPopupElement["arcgisTriggerAction"],
  ) => void;
}

// Lazy-loaded tools with preload
const PropertySelect = lazy(() => import("../tools/PropertySelect"));
const LocationSearch = lazy(() => import("../tools/LocationSearch"));
const Measure = lazy(() => import("../tools/Measure"));
const Sketch = lazy(() => import("../tools/Sketch/Sketch"));
const Print = lazy(() => import("../tools/Print"));
const MapPanel: React.FC<MapPanelProps> = ({
  mapElement,
  activeTool,
  openedTools,
  mapMode,
  coordinateConversionOpen,
  overviewOpen,
  onMapReady,
  onViewHold,
  onGoHome,
  onCustomActionClick,
  onCoordinateExpand,
  onOverviewExpand,
  onToolClose,
  onHelpClick,
  onPopupTriggerAction,
}) => {
  // useEffect(() => {
  //   const tools = [PropertySelect, LocationSearch, Measure, Sketch, Print];
  //   tools.forEach((t) => t.preload?.());
  // }, []);

  return (
    <arcgis-map
      ref={mapElement}
      onarcgisViewReadyChange={onMapReady}
      onarcgisViewHold={onViewHold}
    >
      <arcgis-popup
        slot="popup"
        onarcgisTriggerAction={onPopupTriggerAction}
      ></arcgis-popup>
      <arcgis-zoom slot="top-left"></arcgis-zoom>
      <arcgis-home slot="top-left" goToOverride={onGoHome}></arcgis-home>
      <arcgis-compass slot="top-left"></arcgis-compass>
      <arcgis-track slot="top-left"></arcgis-track>
      {/* <div slot="top-left">
          <TipManager name="map" scale="s"></TipManager>
        </div> */}
      <div slot="top-left" className={styles.customActions}>
        <calcite-action-bar layout="vertical" expandDisabled>
          <calcite-action
            id="identify-action"
            label="identify"
            text={"identify"}
            icon="information"
            active={mapMode === "identify"}
            onClick={() => onCustomActionClick("identify")}
          ></calcite-action>

          <calcite-action
            id="streetview-action"
            label="streetview"
            text={"streetview"}
            icon="i360-view"
            active={mapMode === "streetview"}
            onClick={() => onCustomActionClick("streetview")}
          ></calcite-action>
        </calcite-action-bar>
        <calcite-tooltip reference-element="identify-action" placement="right">
          Identify
        </calcite-tooltip>
        <calcite-tooltip
          reference-element="streetview-action"
          placement="right"
        >
          Streetview
        </calcite-tooltip>
      </div>
      <arcgis-expand
        id="coordinate-action"
        slot="bottom-left"
        expandIcon="crosshair"
        onarcgisPropertyChange={onCoordinateExpand}
        mode="floating"
        aria-label="Coodinate Conversion"
      >
        <CoordinateConversion
          mapElement={mapElement}
          isOpen={coordinateConversionOpen}
        ></CoordinateConversion>
      </arcgis-expand>

      <arcgis-scale-bar slot="bottom-left"></arcgis-scale-bar>
      <arcgis-expand
        slot="bottom-right"
        expandIcon="arrow-up-left"
        collapseIcon="arrow-down-right"
        id="overview-action"
        mode="floating"
        onarcgisPropertyChange={onOverviewExpand}
        aria-label="Overview Map"
      >
        <OverviewMap
          mapElement={mapElement}
          isOpen={overviewOpen}
        ></OverviewMap>
      </arcgis-expand>

      <div slot="top-right">
        {openedTools.includes("select") && (
          <Suspense fallback={null}>
            <PropertySelect
              mapElement={mapElement}
              onToolClose={onToolClose}
              closed={activeTool !== "select"}
              onHelpClick={(id: string) => onHelpClick(id)}
            ></PropertySelect>
          </Suspense>
        )}
        {openedTools.includes("location") && (
          <Suspense fallback={null}>
            <LocationSearch
              mapElement={mapElement}
              onToolClose={onToolClose}
              closed={activeTool !== "location"}
              onHelpClick={(id: string) => onHelpClick(id)}
            />
          </Suspense>
        )}
        {openedTools.includes("measure") && (
          <Suspense fallback={null}>
            <Measure
              onToolClose={onToolClose}
              mapElement={mapElement}
              closed={activeTool !== "measure"}
              onHelpClick={(id: string) => onHelpClick(id)}
            ></Measure>
          </Suspense>
        )}
        {openedTools.includes("sketch") && (
          <Suspense fallback={null}>
            <Sketch
              onToolClose={onToolClose}
              closed={activeTool !== "sketch"}
              mapElement={mapElement}
              onHelpClick={(id: string) => onHelpClick(id)}
            ></Sketch>
          </Suspense>
        )}
        {openedTools.includes("print") && (
          <Suspense fallback={null}>
            <Print
              mapElement={mapElement}
              onToolClose={onToolClose}
              closed={activeTool !== "print"}
              onHelpClick={(id: string) => onHelpClick(id)}
            ></Print>
          </Suspense>
        )}
      </div>
    </arcgis-map>
  );
};

export default MapPanel;
