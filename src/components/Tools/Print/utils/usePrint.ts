import { useCallback, useEffect, useRef, useState } from "react";
import { getFormats, getLayouts, showFrame } from "../utils/print";
import { PrintProps } from "./PrintProps";
import { tips } from "./tips";

const usePrint = (props: PrintProps) => {
  const loaded = useRef(false);
  const [isActive, setIsActive] = useState(false);

  const customScaleSelect = useRef(null);

  const attributes = useRef<HTMLCalciteCheckboxElement>(null);
  const legend = useRef<HTMLCalciteCheckboxElement>(null);

  const userDefined = useRef<HTMLCalciteInputElement>(null);
  const title = useRef<HTMLCalciteInputElement>(null);
  const jobRef = useRef<any[]>([]);
  const frame = useRef<HTMLCalciteCheckboxElement>(null);
  const scale = useRef<HTMLCalciteSelectElement>(null);

  const [layouts, setLayouts] = useState<any[]>([]);
  const [formats, setFormats] = useState<string[]>([]);
  const [scaleType, setScaleType] = useState<string>("current");
  const [customScale, setCustomScale] = useState<any>();
  const [selectedProperty, setSelectedProperty] = useState<__esri.Graphic>();
  const [selectedLayout, setSelectedLayout] = useState<any>();
  const [selectedFormat, setSelectedFormat] = useState<string>();
  const [jobs, setJobs] = useState<any[]>([]);
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
    }
  }, []);
  const tipsClicked = useCallback((e: any) => {
    props.showTips(tips);
  }, []);
  useEffect(() => {
    setSelectedProperty(props.selectedProperty);
  }, [props.selectedProperty]);
  useEffect(() => {
    setIsActive(props.isActive);
  }, [props.isActive]);
  const showFrameChanged = useCallback(
    (e: any) => {
      showFrame(
        e.target.checked,
        props.view,
        selectedLayout,
        scaleType,
        customScaleSelect
      );
    },
    [selectedLayout, scaleType, customScale]
  );
  return {
    isActive,
    title,
    setSelectedLayout,
    layouts,
    selectedFormat,
    setSelectedFormat,
    formats,
    setScaleType,
    scaleType,
    customScaleSelect,
    setCustomScale,
    customScale,
    userDefined,
    selectedProperty,
    selectedLayout,
    attributes,
    legend,
    setJobs,
    jobs,
    jobRef,
    tipsClicked,
    showFrameChanged,
    frame,
    scale,
  };
};

export default usePrint;
