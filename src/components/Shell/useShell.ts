// hooks/useShell.ts
import { useState, useCallback, useEffect } from "react";
import { useMap } from "../../context/useMap";
import { useAppSize, type AppSize } from "../../utils/useAppSize";
import type { MapMode } from "../../context/MapContext.types.ts";
import { useMapPanel } from "../MapPanel/useMapPanel";

export type PanelType =
  | "propertySearch"
  | "bookmarks"
  | "layerList"
  | "legend"
  | "basemap"
  | null;
export type ToolType =
  | "select"
  | "measure"
  | "location"
  | "print"
  | "sketch"
  | null;

export interface UseShellProps {
  mapElement: React.RefObject<HTMLArcgisMapElement>;
  theme: "light" | "dark";
  activePanel: PanelType;
  activeTool: ToolType;
  openedPanels: PanelType[];
  openedTools: ToolType[];
  mapMode: MapMode;
  appSize: AppSize;
  coordinateConversionOpen: boolean;
  overviewOpen: boolean;
  handleThemeClick: () => void;
  handlePanelClose: () => void;
  handleToolClose: () => void;
  handlePanelActionClick: (panel: PanelType) => void;
  handleToolActionClick: (panel: ToolType) => void;
  handleCustomActionClick: (action: "identify" | "streetview" | null) => void;
  handlePopupTriggerAction: (
    event: HTMLArcgisPopupElement["arcgisTriggerAction"],
  ) => void;
  handleViewReady: (
    event: HTMLArcgisMapElement["arcgisViewReadyChange"],
  ) => void;
  handleViewHold: (event: HTMLArcgisMapElement["arcgisViewHold"]) => void;
  handleGoToHome: NonNullable<HTMLArcgisHomeElement["goToOverride"]>;
  handleCoordinateExpandChange: (
    event: HTMLArcgisExpandElement["arcgisPropertyChange"],
  ) => void;
  handleOverviewExpandChange: (
    event: HTMLArcgisExpandElement["arcgisPropertyChange"],
  ) => void;
  handleHelpClosed: () => void;
  handleHelpOpened: () => void;
  handleHelpClick: (id: string) => void;

  showHelp: boolean;
  mapReady: boolean;
  helpId: string | undefined;
}

export const useShell = (): UseShellProps => {
  const appSize = useAppSize();

  const { mapElement, mapReady, selectedCondo, mapMode, handleCustomActionClick, setAlert } =
    useMap();

  const {
    handleViewReady,
    handleViewHold,
    handleGoToHome,
    handlePopupTriggerAction,
  } = useMapPanel();

  const [theme, setTheme] = useState<"light" | "dark">(
    localStorage.getItem("imaps_theme_mode") === "dark" ? "dark" : "light",
  );
  const [activePanel, setActivePanel] = useState<PanelType>("propertySearch");
  const [activeTool, setActiveTool] = useState<ToolType>(null);
  const [openedPanels, setOpenedPanels] = useState<PanelType[]>([
    "propertySearch",
  ]);
  const [openedTools, setOpenedTools] = useState<ToolType[]>([]);
  const [coordinateConversionOpen, setCoordinateConversionOpen] =
    useState<boolean>(false);
  const [overviewOpen, setOverviewOpen] = useState<boolean>(false);
  const [showHelp, setShowHelp] = useState<boolean>(false);

  const [helpId, setHelpId] = useState<string>();

  const handleThemeClick = useCallback(() => {
    setTheme((prev: "light" | "dark") => {
      const newTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("imaps_theme_mode", newTheme);
      return newTheme;
    });
  }, []);

  useEffect(() => {
    const body = document.querySelector("body");

    if (body) {
      body.classList.remove(
        theme === "light" ? "calcite-mode-dark" : "calcite-mode-light",
      );
      body.classList.add(
        theme === "light" ? "calcite-mode-light" : "calcite-mode-dark",
      );
    }
  }, [theme]);

  const handlePanelActionClick = useCallback(
    (panel: PanelType) => {
      setOpenedPanels((prev) =>
        prev.includes(panel) ? prev : [...prev, panel],
      );
      setActivePanel(panel === activePanel ? null : panel);
      if (appSize !== "large" && panel) {
        setActiveTool(null);
      }
    },
    [activePanel, appSize],
  );

  const handlePanelClose = useCallback(() => {
    setActivePanel(null);
  }, []);

  const handleToolActionClick = useCallback(
    (tool: ToolType) => {
      setOpenedTools((prev) => (prev.includes(tool) ? prev : [...prev, tool]));
      setActiveTool(tool === activeTool ? null : tool);

      if (appSize !== "large" && tool) {
        setActivePanel(null);
      }
    },
    [activeTool, appSize],
  );

  const handleToolClose = useCallback(() => {
    setActiveTool(null);
  }, []);

  const handleCoordinateExpandChange = (
    event: HTMLArcgisExpandElement["arcgisPropertyChange"],
  ) => {
    setCoordinateConversionOpen(event.target.expanded);
    requestAnimationFrame(() => {
      if (!event.target.ariaLabel) return;
      event.target.shadowRoot
        ?.querySelector("calcite-popover")
        ?.setAttribute("aria-label", event.target.ariaLabel);
    });
  };

  const handleOverviewExpandChange = (
    event: HTMLArcgisExpandElement["arcgisPropertyChange"],
  ) => {
    setOverviewOpen(event.target.expanded);
    requestAnimationFrame(() => {
      if (!event.target.ariaLabel) return;
      event.target.shadowRoot
        ?.querySelector("calcite-popover")
        ?.setAttribute("aria-label", event.target.ariaLabel);
    });
  };

  const handleHelpClosed = () => {
    setShowHelp(false);
    setHelpId(undefined);
  };
  const handleHelpOpened = () => {
    setShowHelp(true);
  };

  const handleHelpClick = (id: string) => {
    setShowHelp(true);
    setHelpId(id);
  };

  const checkForAlert = useCallback(async () => {
    try {
      const alertConfig = await fetch("./alert.json");
      const alertData = await alertConfig.json();
      if (alertData.show) {
        setAlert({
          show: true,
          message: alertData.message,
          id: Date.now(),
          title: alertData.title,
          autoCloseDuration: alertData.duration,
          autoClose: alertData.autoClose,
          kind: alertData.kind,
          icon: alertData.icon,
        });
      }
    } catch (err) {
      console.error("Failed to load alert.json:", err);
    }
  }, [setAlert]);

  // runs once on mount — checkForAlert is stable (memoized above),
  // so this intentionally only depends on it, not re-running per render
  useEffect(() => {
    checkForAlert();
  }, [checkForAlert]);

  useEffect(() => {
    if (appSize !== "large" && activePanel) {
      setActiveTool(null);
    }
  }, [activePanel, appSize]);

  useEffect(() => {
    setActivePanel("propertySearch");
  }, [selectedCondo]);

  return {
    mapElement,
    theme,
    activePanel,
    activeTool,
    openedPanels,
    openedTools,
    mapMode,
    appSize,
    coordinateConversionOpen,
    overviewOpen,
    showHelp,
    helpId,
    handleThemeClick,
    handlePanelActionClick,
    handlePanelClose,
    handleToolActionClick,
    handleCustomActionClick,
    handlePopupTriggerAction,
    handleToolClose,
    handleViewReady,
    handleViewHold,
    handleGoToHome,
    handleCoordinateExpandChange,
    handleOverviewExpandChange,
    handleHelpClosed,
    handleHelpOpened,
    handleHelpClick,
    mapReady,
  };
};