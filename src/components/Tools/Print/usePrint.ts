import { useCallback, useEffect, useRef, useState } from 'react';
import { PrintProps } from './utils/PrintProps';
import { tips } from './utils/tips';
import {
  Exports,
  Format,
  Layout,
  MapScale,
  getFormats,
  getLayouts,
  getScales,
  hidePrintFrame,
  prepareExport,
  roundScale,
  showPrintFrame,
} from './utils/print';
import { CalciteInputCustomEvent, CalciteRadioButtonCustomEvent, CalciteSelectCustomEvent, CalciteSwitchCustomEvent, CalciteTabTitleCustomEvent } from '@esri/calcite-components';

const usePrint = (props: PrintProps) => {
  const loaded = useRef(false);

  const [isActive, setIsActive] = useState(false);
  const [selectedTab, setSelectedTab] = useState('layout');
  const [layouts, setLayouts] = useState<Layout[]>([]);
  const [formats, setFormats] = useState<Format[]>([]);

  const [title, setTitle] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');

  const [selectedLayout, setSelectedLayout] = useState<Layout>();
  const [selectedFormat, setSelectedFormat] = useState<Format | undefined>();
  const [selectedImageFormat, setSelectedImageFormat] = useState<Format | undefined>();

  const [useCustomScale, setUseCustomScale] = useState<boolean>(false);

  const [scales, setScales] = useState<MapScale[]>([]);
  const [customScale, setCustomScale] = useState<MapScale>();

  const [printScale, setPrintScale] = useState<number>(
    roundScale(props.view.scale),
  );

  const [userDefined, setUserDefined] = useState<boolean>(false);
  const [imageWidth, setImageWidth] = useState<number>(800);
  const [imageHeight, setImageHeight] = useState<number>(1100);

  const [showLegend, setShowLegend] = useState<boolean>(true);
  const [showFrame, setShowFrame] = useState<boolean>(false);
  const [showAttributes, setShowAttributes] = useState<boolean>(false);

  const [exports, setExports] = useState<Exports[]>([]);

  const toolDismissed = useCallback(() => {
    props.toolDismissed();
    setShowFrame(false);
    hidePrintFrame(props.view);
  }, []);
  const tipsClicked = useCallback(() => {
    props.showTips(tips);
  }, []);
  const titleChanged = useCallback((e: CalciteInputCustomEvent<void>) => {
    setTitle(e.target.value);
  }, []);
  const layoutChanged = useCallback((e: CalciteSelectCustomEvent<void>) => {
    setSelectedLayout(e.target.selectedOption.value);
  }, []);
  const formatChanged = useCallback((e: CalciteSelectCustomEvent<void>) => {
    setSelectedFormat(e.target.selectedOption.value);
  }, []);
  const showAttributesChanged = useCallback((e: CalciteSwitchCustomEvent<void>) => {
    setShowAttributes(e.target.checked);
  }, []);
  const showLegendChanged = useCallback((e: CalciteSwitchCustomEvent<void>) => {
    setShowLegend(e.target.checked);
  }, []);
  const showFrameChanged = useCallback((e: CalciteSwitchCustomEvent<void>) => {
    setShowFrame(e.target.checked);
  }, []);

  const userDefinedScaleChanged = useCallback((e: CalciteInputCustomEvent<void>) => {
    setPrintScale(parseInt(e.target.value) * 12);
  }, []);
  const fileNameChanged = useCallback((e: CalciteInputCustomEvent<void>) => {
    setFileName(e.target.value);
  }, []);
  const imageFormatChanged = useCallback((e: CalciteSelectCustomEvent<void>) => {
    setSelectedImageFormat(e.target.selectedOption.value);
  }, []);
  const imageHeightChanged = useCallback((e: CalciteInputCustomEvent<void>) => {
    setImageHeight(parseInt(e.target.value));
  }, []);
  const imageWidthChanged = useCallback((e: CalciteInputCustomEvent<void>) => {
    setImageWidth(parseInt(e.target.value));
  }, []);

  const customScaleChanged = useCallback((e: CalciteSelectCustomEvent<void>) => {
    setCustomScale(e.target.selectedOption.value);
    if (!userDefined) {
      setPrintScale(parseInt(e.target.selectedOption.value.scale));
    }
  }, []);

  const swapWidthHeight = useCallback(() => {
    setImageWidth(imageHeight);
    setImageHeight(imageWidth);
  }, [imageWidth, imageHeight]);

  const scaleTypeChanged = useCallback(
    (e: CalciteRadioButtonCustomEvent<void>) => {
      setUseCustomScale(e.target.value === 'custom');

      if (e.target.value === 'custom' && customScale) {
        setPrintScale(parseInt(customScale.scale));
      } else {
        setPrintScale(roundScale(props.view.scale));
      }
    },
    [props.view, customScale],
  );

  const tabChanged = useCallback((e: CalciteTabTitleCustomEvent<void>) => {
    setSelectedTab(e.target.title);
  }, []);

  const exportClicked = useCallback(
    () => {
      prepareExport(
        props.view,
        useCustomScale ? printScale : roundScale(props.view.scale),
        selectedLayout,
        selectedTab === 'layout' ? selectedFormat : selectedImageFormat,
        selectedTab === 'layout' ? title : fileName,
        showLegend,
        showAttributes,
        props.selectedProperty,
        props.exportUrl,
        exports,
        setExports,
        selectedTab,
        imageWidth,
        imageHeight,
      );
      setSelectedTab('exports');
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
      selectedImageFormat,
    ],
  );

  useEffect(() => {
    setIsActive(props.isActive);
    if (!props.isActive) {
      hidePrintFrame(props.view);
      setShowFrame(false);
    }
  }, [props.isActive]);
  useEffect(() => {
    setUserDefined(customScale?.scale == 'custom');
  }, [customScale]);

  useEffect(() => {
    if (showFrame && selectedLayout) {
      //updatePrintFrame(props.view, imageWidth, imageHeight, 200);
      showPrintFrame(
        props.view,
        selectedLayout,
        useCustomScale,
        useCustomScale ? printScale : roundScale(props.view.scale),
        showAttributes && props.selectedProperty != undefined,
        showLegend,
        imageHeight,
        imageWidth,
        selectedTab,
      );
    } else {
      hidePrintFrame(props.view);
    }
  }, [
    showFrame,
    selectedLayout,
    useCustomScale,
    printScale,
    showLegend,
    showAttributes,
    props.selectedProperty,
    imageHeight,
    imageWidth,
    selectedTab,
  ]);

  useEffect(() => {
    if (!loaded.current) {
      loaded.current = true;
      getLayouts().then((layouts: Layout[]) => {
        setLayouts(layouts);
        setSelectedLayout(layouts[0]);
      });
      getFormats(props.exportUrl).then((formats) => {
        setFormats(formats);
        setSelectedFormat(formats[0]);
        setSelectedImageFormat(formats[0]);
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
    swapWidthHeight,
  };
};

export default usePrint;
