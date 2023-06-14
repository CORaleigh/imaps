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
          setActivePanel("");
          setContentBehind(true);
        } else {
          setContentBehind(false);
        }
      }, {passive: true});
      if (window.innerWidth < 700) {
        setActivePanel("");
        setContentBehind(true);
      }
      loaded.current = true;
      const loadConfig = async (file: string) => {
        const response = await fetch(file);
        const config = await response.json();
        setAlert(config.alert);
      }
      loadConfig('./config.json');
      
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
  const panelDismissed = useCallback((e: any) => {
    setActivePanel("");
  }, []);
  const toolDismissed = useCallback((e: any) => {
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
    setAlert(alert);
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
  };
};

export default useShell;