import { Tip } from "@esri/calcite-components/dist/types/components/tip/tip";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  getDistinctProperties,
  mapViewSet,
  toolSelected,
  widgetActivated,
} from "../utils/shell";
import { Alert } from "./alert";
import { addShortcuts } from "./shortcuts";

const useShell = () => {
  const [mapId, setMapId] = useState("95092428774c4b1fb6a3b6f5fed9fbc4")
  const [logo, setLogo] = useState({dark: "logo_dark.svg", light: "logo.svg"})

  const [activePanel, setActivePanel] = useState("search");
  const [activeTool, setActiveTool] = useState("");
  const loaded = useRef(false);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState<Alert>();
  const [contentBehind, setContentBehind] = useState(false);
  const [loadedPanels, setLoadedPanels] = useState<string[]>(() => ["search"]);
  const [loadedTools, setLoadedTools] = useState<string[]>(() => []);

  const [view, setView] = useState<__esri.MapView>();

  const viewRef = useRef<__esri.MapView>();

  const [properties, setProperties] = useState<__esri.Graphic[]>([]);
  const [geometry, setGeometry] = useState<__esri.Geometry | undefined>(
    undefined
  );
  const [selectedProperty, setSelectedProperty] = useState<__esri.Graphic>();

  const [tips, setTips] = useState<any>();
  const [showDisclaimer, setShowDisclaimer] = useState<boolean>(checkDisclaimerOptOut());
  const [disclaimerOptedOut, setDisclaimerOptedOut] = useState<boolean>(!checkDisclaimerOptOut());

  useEffect(() => {
    if (properties) {
      setActivePanel("search");
      setLoadedPanels((loadedPanels) => [...loadedPanels, "search"]);
    }
  }, [properties]);
  useEffect(() => {
    if (!loaded.current) {   
      window.addEventListener("resize", () => {
        if (window.innerWidth < 700) {
          //setActivePanel("");
          setActiveTool("");
          setContentBehind(true);
        } else {
          setContentBehind(false);
        }
      }, {passive: true});
      if (window.innerWidth < 700) {
       // setActivePanel("");
       setActiveTool("");

        setContentBehind(true);
      }
      loaded.current = true;
      const loadConfig = async (file: string) => {
        try {
          const response = await fetch(file);
          const config = await response.json();
          setAlert(config.alert);
          setMapId(getMapId(config) as string);
          setLogo({dark: config.logo.dark, light: config.logo.light});
          document.title = config.title;
        } catch {
          loadConfig('./config.json');
        }

      }
      const url = new URL(window.location.href);
      if (url.searchParams.get('app')) {
        loadConfig(`./${url.searchParams.get('app')}.json`)
      } else {
        loadConfig('./config.json');
      }
    }
  }, []);

  const mapCallback = useCallback((mapView: __esri.MapView) => {
    viewRef.current = mapView;
   // addShortcuts(mapView, setGeometry);
    mapViewSet(mapView, setView, setLoading, setAlert);
  }, []);
  const geometryCallback = useCallback((geometry: __esri.Geometry) => {
    setGeometry(geometry);
  }, []);
  const widgetCallback = useCallback((mapView: __esri.MapView) => {
    if (mapView) {
      widgetActivated(mapView, setActiveTool);
      toolSelected(
        "",
        activeTool,
        setActiveTool,
        setActivePanel,
        activePanelChanged as any,
        activeToolChanged as any
      );
    }
  }, []);
  const activePanelChanged = useCallback(
    (panel: string) => {
      setTips(undefined);
      setActivePanel(panel);
      if (!loadedPanels.includes(panel)) {
        setLoadedPanels([...loadedPanels, panel]);
      }
    },
    [loadedPanels]
  );
  const activeToolChanged = useCallback(
    (tool: string) => {
      setTips(undefined);
      setActiveTool(tool);
      if (!loadedTools.includes(tool)) {
        setLoadedTools([...loadedTools, tool]);
      }
    },
    [loadedTools]
  );
  const panelDismissed = useCallback(() => {
    setActivePanel("");
  }, []);
  const toolDismissed = useCallback(() => {
    setActiveTool("");
  }, []);
  const propertySelected = useCallback(
    (feature: __esri.Graphic, condos: __esri.Graphic[]) => {
      setSelectedProperty(feature);
      setProperties(getDistinctProperties(feature, condos));
    },
    []
  );
  const tipsCallback = (newTips: any) => {

    setTips((oldTips: any) => {
      if (oldTips?.title === newTips?.title) {
        return undefined;
      }
      return {...tips, ...{title: newTips.title, tips: newTips.tips}}
    });

  };
  const alertSet = (alert: Alert) => {    
    setLoading(false);
    setAlert(alert);
  }
  const getMapId = (config: any) => {
    const url = new URL(window.location.href);
    const mapId = url.searchParams.get('id') ? url.searchParams.get('id') : config.mapId ? config.mapId : '95092428774c4b1fb6a3b6f5fed9fbc4';   
    return mapId;    
  }
  return {
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
  };
};

const checkDisclaimerOptOut = () => {
  return window.localStorage.getItem('imaps_disclaimer_opted_out') === null
}

export default useShell;
