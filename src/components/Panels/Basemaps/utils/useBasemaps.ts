import MapView from "@arcgis/core/views/MapView";
import { useCallback, useEffect, useRef, useState } from "react";
import { PanelProps } from "../../utils/PanelProps";
import {
  blendBasemap,
  initializeBasemaps,
  initializeEsriMaps,
  initializeImageMaps,
  removeBlendBasemap,
  tabChanged,
  updateBlendOpacity
} from "./basemaps";
import { tips } from "./tips";

const useBasemaps = (props: PanelProps) => {
  const [view, setView] = useState<MapView>();
  const [isActive, setIsActive] = useState(false);
  const [blendActive, setBlendActive] = useState(false);
  const [showBlend, setShowBlend] = useState(false);
  const [selectedTab, setSelectedTab] = useState("maps");

  const loaded = useRef(false);
  const basemapRef = useRef(null);
  const imagesRef = useRef(null);
  const esriRef = useRef(null);
  //const opacity = useRef(0.5);
  const [opacity, setOpacity] = useState<number>(0.5);
  const mapGroup = "f6329364e80c438a958ce74aadc3a89f";
  const imageGroup = "492386759d264d49948bf7f83957ddb9";
  const streetMapId = "02d50d24991747538e218e0a5806e9b3";
  useEffect(() => {
    setView(props.view);
    if (!loaded.current) {
      loaded.current = true;
      initializeBasemaps(props.view, basemapRef.current as any, mapGroup, setSelectedTab, setBlendActive);
      initializeImageMaps(
        props.view,
        imagesRef.current as any,
        imageGroup,
        setShowBlend,
        setSelectedTab,
        props.alertSet        
      );
      initializeEsriMaps(props.view, esriRef.current as any, setSelectedTab, setBlendActive);
      setTimeout(() => {
        document
          .querySelector(".basemaps calcite-tab-nav")
          ?.shadowRoot?.querySelector(".tab-nav")
          ?.setAttribute("style", "overflow: hidden");
      }, 100);
    }
  }, [props.view]);
  useEffect(() => {
    setIsActive(props.isActive);
  }, [props.isActive]);
  useEffect(() => {
    tabChanged(selectedTab);
  }, [selectedTab]);
  const panelDismissed = useCallback(() => {
    props.panelDismissed();
  }, []);
  const tipsClicked = useCallback(() => {
    props.showTips(tips);
  }, []);
  const blendUpdated = useCallback((e: any) => {
    setBlendActive(e.currentTarget.checked);
    blendBasemap(
      e.currentTarget.checked,
      props.view,
      streetMapId,
      opacity
    );
  }, []);
  const blendOpacityChanged = useCallback((e: any) => {
    setOpacity(1 - e.target.value / 100);
    updateBlendOpacity(
      e.target.value / 100,
      props.view,
      streetMapId,
      1 - e.target.value / 100
    );
  }, []);
  return {
    basemapRef,
    imagesRef,
    esriRef,
    mapGroup,
    imageGroup,
    view,
    isActive,
    panelDismissed,
    tipsClicked,
    blendUpdated,
    blendOpacityChanged,
    blendActive,
    showBlend,
    selectedTab,
    setSelectedTab,
    opacity
  };
};
export default useBasemaps;
