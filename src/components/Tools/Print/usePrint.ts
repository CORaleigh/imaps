import { useCallback, useEffect, useRef, useState } from "react";
import { PrintProps } from "./utils/PrintProps";
import { tips } from "./utils/tips";
import {
  Exports,
  Layout,
  MapScale,
  getFormats,
  getLayouts,
  getScales,
  hidePrintFrame,
  prepareExport,
  roundScale,
  showPrintFrame,
} from "./utils/print";

const usePrint = (props: PrintProps) => {
  const loaded = useRef(false);

  const [isActive, setIsActive] = useState(false);
  const [selectedTab, setSelectedTab] = useState("layout");
  const [layouts, setLayouts] = useState<Layout[]>([]);
  const [formats, setFormats] = useState<string[]>([]);

  const [title, setTitle] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");

  const [selectedLayout, setSelectedLayout] = useState<Layout>();
  const [selectedFormat, setSelectedFormat] = useState<string>();
  const [selectedImageFormat, setSelectedImageFormat] = useState<string>();

  const [useCustomScale, setUseCustomScale] = useState<boolean>(false);

  const [scales, setScales] = useState<MapScale[]>([]);
  const [customScale, setCustomScale] = useState<MapScale>();

  const [printScale, setPrintScale] = useState<number>(
    roundScale(props.view.scale)
  );

  const [userDefined, setUserDefined] = useState<boolean>(false);
  const [imageWidth, setImageWidth] = useState<number>(800);
  const [imageHeight, setImageHeight] = useState<number>(1100);

  const [showLegend, setShowLegend] = useState<boolean>(true);
  const [showFrame, setShowFrame] = useState<boolean>(false);
  const [showAttributes, setShowAttributes] = useState<boolean>(false);

  const [exports, setExports] = useState<Exports[]>([]);

  const toolDismissed = useCallback((e: any) => {
    props.toolDismissed();
    setShowFrame(false);
  }, []);
  const tipsClicked = useCallback((e: any) => {
    props.showTips(tips);
  }, []);
  const titleChanged = useCallback((e: any) => {
    setTitle(e.target.value);
  }, []);  
  const layoutChanged = useCallback((e: any) => {
    setSelectedLayout(e.target.selectedOption.value);
  }, []);    
  const formatChanged = useCallback((e: any) => {
    setSelectedFormat(e.target.selectedOption.value);
  }, []);    
  const showAttributesChanged = useCallback((e: any) => {
    setShowAttributes(e.target.checked);
  }, []);      
  const showLegendChanged = useCallback((e: any) => {
    setShowLegend(e.target.checked);
  }, []);     
  const showFrameChanged = useCallback((e: any) => {
    setShowFrame(e.target.checked);
  }, []);      

  const userDefinedScaleChanged = useCallback((e: any) => {
    setPrintScale(parseInt(e.target.value) * 12);
  }, []);  
  const fileNameChanged = useCallback((e: any) => {
    setFileName(e.target.value);
  }, []);    
  const imageFormatChanged = useCallback((e: any) => {
    setSelectedImageFormat(e.target.selectedOption.value);
  }, []); 
  const imageHeightChanged = useCallback((e: any) => {
    setImageHeight(parseInt(e.target.value));
  }, []);    
  const imageWidthChanged = useCallback((e: any) => {
    setImageWidth(parseInt(e.target.value));
  }, []);   

  const customScaleChanged = useCallback((e: any) => {
    setCustomScale(e.target.selectedOption.value);
    if (!userDefined) {
        setPrintScale(parseInt(e.target.selectedOption.value.scale));
    }
  }, []);    

  const swapWidthHeight = useCallback(() => {
    setImageWidth(imageHeight);
    setImageHeight(imageWidth);
  }, [imageWidth, imageHeight])

  const scaleTypeChanged = useCallback((e: any) => {
    setUseCustomScale(e.target.value === "custom");
    
    if (e.target.value === "custom" && customScale) {
      setPrintScale(parseInt(customScale.scale));
    } else {
      setPrintScale(roundScale(props.view.scale));
    }
  }, [props.view, customScale]);    

  const tabChanged = useCallback((e: any) => {
    setSelectedTab(e.target.title);
  }, []);      

  const exportClicked = useCallback(
    (e: any) => {
      prepareExport(
        props.view,
        useCustomScale ? printScale : roundScale(props.view.scale),
        selectedLayout,
        selectedTab === "layout" ? selectedFormat : selectedImageFormat,
        selectedTab === "layout" ? title : fileName,
        showLegend,
        showAttributes,
        props.selectedProperty,
        props.exportUrl,
        exports,
        setExports,
        selectedTab,
        imageWidth,
        imageHeight
      );      
      setSelectedTab("exports");

    },
    [
      title,
      selectedFormat,
      selectedLayout,
      showLegend,
      showAttributes,
      props.selectedProperty,
      printScale,
      useCustomScale,
      exports,
      selectedTab,
      imageHeight,
      imageWidth,
      fileName,
      selectedImageFormat
    ]
  );

  useEffect(() => {
    setIsActive(props.isActive);
  }, [props.isActive]);
  useEffect(() => {
    setUserDefined(customScale?.scale == "custom");
  }, [customScale]);

  useEffect(() => {
    if (showFrame && selectedLayout) {
      showPrintFrame(props.view, selectedLayout, useCustomScale,  useCustomScale ? printScale : roundScale(props.view.scale), showAttributes && props.selectedProperty != undefined, showLegend)
    } else {
      hidePrintFrame(props.view);
    }
  }, [showFrame, selectedLayout, useCustomScale, printScale, showLegend, showAttributes, props.selectedProperty]);

  useEffect(() => {
    if (!loaded.current) {
      loaded.current = true;
      getLayouts().then((layouts: any) => {
        setLayouts(layouts);
        setSelectedLayout(layouts[0]);
      });
      getFormats(props.exportUrl).then((formats) => {
        setFormats(formats);
        setSelectedFormat(formats[0]);
      });
      const scales = getScales(props.view);
      setScales(scales);
      setCustomScale(scales[0]);
    }
  }, []);

  return {
    isActive,
    toolDismissed,
    tipsClicked,
    selectedTab,
    tabChanged,
    layouts,
    layoutChanged,
    selectedLayout,
    formats,
    formatChanged,
    useCustomScale,
    scales,
    customScaleChanged,
    showFrameChanged,
    showLegendChanged,
    showFrame,
    showLegend,
    titleChanged,
    exports,
    exportClicked,
    selectedFormat,
    customScale,
    setExports,
    showAttributes,
    showAttributesChanged,
    fileNameChanged,
    selectedImageFormat,
    imageFormatChanged,
    imageHeight,
    imageWidth,
    imageHeightChanged,
    imageWidthChanged,
    scaleTypeChanged,
    userDefinedScaleChanged,
    swapWidthHeight
  };
};

export default usePrint;
