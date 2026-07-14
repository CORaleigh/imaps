import React, { useState, useRef, useEffect, useCallback } from "react";
import MapContext from "./MapContext";
import type { Alert, MapMode } from "./MapContext.types";

import WebMap from "@arcgis/core/WebMap";
import Basemap from "@arcgis/core/Basemap";
import { layerService } from "../utils/mapLayerService";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils.js";

import Collection from "@arcgis/core/core/Collection";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import * as centroidOperator from "@arcgis/core/geometry/operators/centroidOperator.js";

import { searchCondos } from "../components/panels/PropertySearch/search";
import { getLayerByTitle } from "../utils/layerHelper";
import { useCondoHistory } from "./useCondoHistory";
import { addClusterLayer } from "../components/panels/PropertySearch/clusterLayer";
import type Geometry from "@arcgis/core/geometry/Geometry";
import type Graphic from "@arcgis/core/Graphic";
import type ActionButton from "@arcgis/core/support/actions/ActionButton";
import type Polygon from "@arcgis/core/geometry/Polygon";
import { updatePropertyLabels } from "../components/panels/LayerList/layers";
import esriConfig from "@arcgis/core/config";
import Portal from "@arcgis/core/portal/Portal";

const MapProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  /** -------------------- Refs -------------------- **/
  const mapElement = useRef<HTMLArcgisMapElement>(null!);
  const DEFAULT_MAP_ID = "95092428774c4b1fb6a3b6f5fed9fbc4";
  const webMapId = useRef<string>(DEFAULT_MAP_ID);
  const initialized = useRef<boolean>(false);

  /** -------------------- State -------------------- **/
  const [webMap, setWebMap] = useState<WebMap | null>(null);
  const [mapReady, setMapReady] = useState(false);
  const [searchReady, setSearchReady] = useState(false);
  const [geometry, setGeometry] = useState<Geometry | null>(null);
  const [condos, setCondos] = useState<Graphic[]>([]);
  const [selectedCondo, setSelectedCondo] = useState<Graphic | null>(null);
  const [mapMode, setMapMode] = useState<MapMode>("identify");
  const [alert, setAlert] = useState<Alert>({
    id: Date.now(),
    show: false,
    title: "",
    message: "",
    autoClose: false,
    autoCloseDuration: "fast",
    kind: "brand",
  });
  useCondoHistory({
    selectedCondo,
    setSelectedCondo,
    setCondos,
    mapElementRef: mapElement,
    searchCondos,
    searchReady,
  });
  /** -------------------- Callbacks / Functions -------------------- **/

  // Persist basemap in localStorage
  const persistBasemap = useCallback(() => {
    const view = mapElement.current.view;
    if (!view.map) return;
    const storedBasemap = localStorage.getItem(
      `imaps_${webMapId.current}_basemap`,
    );
    if (storedBasemap) {
      const basemap = Basemap.fromJSON(JSON.parse(storedBasemap));
      view.map.basemap = basemap;
    }
    const handle = reactiveUtils.watch(
      () => view.map?.basemap ?? null,
      async (basemap: Basemap | null) => {
        if (!basemap) return;
        try {
          await reactiveUtils.whenOnce(() => basemap.loadStatus == "loaded");
          localStorage.setItem(
            `imaps_${webMapId.current}_basemap`,
            JSON.stringify(basemap.toJSON()),
          );
        } catch (err) {
          console.error("Failed to persist basemap:", err);
        }
      },
    );

    return handle;
  }, []);

  // Handle Google StreetView click
  const handleStreetViewMapClick = useCallback(
    (event: HTMLArcgisMapElement["arcgisViewClick"]) => {
      const cbll = `${event.detail.mapPoint.latitude},${event.detail.mapPoint.longitude}`;
      const url = `https://maps.google.com?layer=c&cbll=${cbll}&cbp=0,0,0,0,0`;
      window.open(url, "streetview");
    },
    [],
  );

  // Handle Identify to query streets always
  const addStreets = (mapElement: HTMLArcgisMapElement) => {
    try {
      let streets = mapElement.map?.findLayerById("streets-popup-layer");
      if (!streets) {
        streets = new FeatureLayer({
          portalItem: {
            id: "0dd28958f9a344dba14d1c4500b4842d",
          },
          id: "streets-popup-layer",
          opacity: 0,
          visible: true,
          listMode: "hide",
          legendEnabled: false,
        });
        mapElement.map?.add(streets);
      } else {
        streets.listMode = "hide";
      }
    } catch {
      return;
    }
  };

  const customizePopup = async () => {
    const propertyLayer = getLayerByTitle(mapElement.current, "Property");
    if (propertyLayer && propertyLayer instanceof FeatureLayer) {
      await mapElement.current.whenLayerView(propertyLayer);
      if (propertyLayer.popupTemplate) {
        propertyLayer.popupTemplate.actions = new Collection([
          ...(propertyLayer.popupTemplate.actions ?? []),
          {
            title: "Select",
            id: "property-select",
            icon: "search",
          } as ActionButton,
        ]);
      }

      const selectedTitles =
        localStorage
          .getItem(`imaps_${webMapId.current}_property_labels`)
          ?.split(",") ?? [];
      updatePropertyLabels(propertyLayer, selectedTitles, webMapId.current);
    }

    await reactiveUtils.whenOnce(() => mapElement.current.popup?.actions);

    mapElement.current.popup?.on("trigger-action", (event) => {
      const popup = mapElement.current.popup;

      if (event.action.title === "Select" && popup && popup.selectedFeature) {
        setGeometry(
          centroidOperator.execute(popup.selectedFeature.geometry as Polygon),
        );
        popup.close();
      }
    });
  };
  // Called once the map view is ready
  const viewReady = useCallback(async () => {
    const view = mapElement.current.view;
    if (!view) return;
    persistBasemap();

    await layerService.attachView(view);

    await layerService.restorePersistedState();
    layerService.applyUrlLayerVisibility();
    addStreets(mapElement.current);
    customizePopup();
    addClusterLayer(mapElement.current);
  }, [persistBasemap]);
  // Handle custom actions like identify / streetview
  const handleCustomActionClick = useCallback(
    (action: "identify" | "streetview" | null) => {
      setMapMode(action);
    },
    [],
  );

  /** -------------------- Effects -------------------- **/

  // Handle enabling/disabling popup and StreetView click listener
  useEffect(() => {
    const viewEl = mapElement.current;
    if (!viewEl) return;

    if (mapMode === "streetview") {
      viewEl.popupDisabled = true;
      viewEl.addEventListener("arcgisViewClick", handleStreetViewMapClick);
    } else {
      viewEl.removeEventListener("arcgisViewClick", handleStreetViewMapClick);
      viewEl.popupDisabled = mapMode === "identify" || !mapMode ? false : true;
    }

    if (!mapMode) {
      setMapMode("identify");
    }

    return () => {
      viewEl.removeEventListener("arcgisViewClick", handleStreetViewMapClick);
    };
  }, [mapMode, handleStreetViewMapClick]);

  // Initialize the map once
  useEffect(() => {
    if (!mapElement.current || initialized.current) return;
    initialized.current = true;

    async function initMap() {
      esriConfig.request.useIdentity = false;
      const params = new URLSearchParams(window.location.search);
      const app = params.get("app") ?? "config";
      const res = await fetch(`${app}.json`);
      const config = await res.json();

      const mapId = params.get("id") ?? config.mapId ?? DEFAULT_MAP_ID;

      const { webmap, webmapTemplate } =
        await layerService.createWebMapWithRequiredAndPersisted(mapId);

      webMapId.current = mapId;

      mapElement.current.map = webmap;
      setWebMap(webmapTemplate);

      await mapElement.current.view.when();
      viewReady();

      const storedExtent = localStorage.getItem(
        `imaps_${webMapId.current}_extent`,
      );
      if (storedExtent) {
        try {
          mapElement.current.view.extent = JSON.parse(storedExtent);
        } catch {
          localStorage.removeItem(`imaps_${webMapId.current}_extent`);
        }
      }
      //check for old storage keys and reset if found
      if (
        localStorage.getItem(`imaps_webmap_`) ||
        localStorage.getItem(`imaps_webmap_${webMapId.current}`)
      ) {
        //show alert to user
        setAlert({
          show: true,
          message: `Layer storage has been reset due to a change in the storage process in the latest 
          update to iMAPS.  Any layers visible in the previous session will need to be made visible again.`,
          id: Date.now(),
          title: "Layer Storage Reset",
          autoCloseDuration: "slow",
          autoClose: true,
          kind: "brand",
          icon: "information",
        });
        //remove old storage keys
        localStorage.removeItem(`imaps_webmap_`);
        localStorage.removeItem(`imaps_webmap_${webMapId.current}`);
      }

      setMapReady(true);
    }

    initMap();
  }, [viewReady]);

  useEffect(() => {
    console.log("MapProvider mounted");

    Portal.getDefault().units = "english";

    return () => {
      console.log("MapProvider unmounted");
    };
  }, []);

  /** -------------------- Provider -------------------- **/
  return (
    <MapContext.Provider
      value={{
        mapElement,
        webMap,
        setWebMap,
        mapReady,
        setMapReady,
        searchReady,
        setSearchReady,
        geometry,
        setGeometry,
        condos,
        setCondos,
        selectedCondo,
        setSelectedCondo,
        webMapId,
        mapMode,
        setMapMode,
        handleCustomActionClick,
        alert,
        setAlert,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

export default MapProvider;
