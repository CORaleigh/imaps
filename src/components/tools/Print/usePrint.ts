/* eslint-disable react-hooks/exhaustive-deps */
// hooks/useShell.ts
import { useState, useRef, useEffect, type RefObject } from "react";
import {
  getLayouts,
  getScales,
  type Layout,
  type MapScale,
} from "./printLayouts";
import { prepareExport, roundScale, type Export } from "./printService";
import { useMap } from "../../../context/useMap";
import { getPrintTemplate, hidePrintFrame, showPrintFrame } from "./printFrame";
import type Graphic from "@arcgis/core/Graphic";

interface PrintOptions {
  title: string;
  scale: number;
  scaleType: "current" | "custom";
  userDefined: boolean;
  showLegend: boolean;
  showAttributes: boolean;
  showPrintArea: boolean;
  format?: Format;
  layout?: Layout;
}

export type Format =
  | "PDF"
  | "PNG32"
  | "PNG8"
  | "JPG"
  | "GIF"
  | "EPS"
  | "SVG"
  | "SVGZ"
  | "AAIX"
  | "TIFF";

export interface UsePrintProps {
  printOptions: PrintOptions;
  exports: Export[];
  formats: RefObject<Format[]>;
  scales: MapScale[];
  layouts: Layout[];
  selectedTab: "layout" | "exports";
  selectedCondo: Graphic | null;
  handleTitleChange: (
    event: HTMLCalciteInputTextElement["calciteInputTextInput"],
  ) => void;
  handleScaleTypeChange: (
    event: HTMLCalciteRadioButtonGroupElement["calciteRadioButtonGroupChange"],
  ) => void;
  handleRemovePrintResult: (
    event: HTMLCalciteListItemElement["calciteListItemClose"],
  ) => void;
  handleLayoutSelected: (
    event: HTMLCalciteSelectElement["calciteSelectChange"],
  ) => void;
  handleFormatSelected: (
    event: HTMLCalciteSelectElement["calciteSelectChange"],
  ) => void;
  handleTabChange: (
    event: HTMLCalciteTabNavElement["calciteTabChange"],
  ) => void;
  handleExportClick: () => void;
  handleShowAttributesChange: (
    event: HTMLCalciteSwitchElement["calciteSwitchChange"],
  ) => void;
  handleShowLegendChange: (
    event: HTMLCalciteSwitchElement["calciteSwitchChange"],
  ) => void;
  handleShowPrintAreaChange: (
    event: HTMLCalciteSwitchElement["calciteSwitchChange"],
  ) => void;
  handleCustomScaleChange: (
    event: HTMLCalciteSelectElement["calciteSelectChange"],
  ) => void;
  handleUserDefinedInput: (
    event: HTMLCalciteInputNumberElement["calciteInputNumberChange"],
  ) => void;
}

export const usePrint = (
  mapElement: React.RefObject<HTMLArcgisMapElement>,
  closed: boolean,
): UsePrintProps => {
  const { selectedCondo } = useMap();
  const printUrl = useRef("");
  const initializedRef = useRef(false);
  const formats = useRef<Format[]>([
    "PDF",
    "PNG32",
    "PNG8",
    "JPG",
    "GIF",
    "EPS",
    "SVG",
    "SVGZ",
    "AAIX",
    "TIFF",
  ]);
  const [printOptions, setPrintOptions] = useState<PrintOptions>({
    title: "",
    scale: mapElement.current.scale,
    scaleType: "current",
    userDefined: false,
    showAttributes: false,
    showLegend: false,
    showPrintArea: false,
    format: formats.current.at(0),
  });

  const [layouts, setLayouts] = useState<Layout[]>([]);
  const [scales, setScales] = useState<MapScale[]>([]);
  const [exports, setExports] = useState<Export[]>([]);
  const [selectedTab, setSelectedTab] = useState<"layout" | "exports">(
    "layout",
  );

  const handleTitleChange = (
    event: HTMLCalciteInputTextElement["calciteInputTextInput"],
  ) => {
    setPrintOptions((prev) => ({
      ...prev,
      title: event.target.value,
    }));
  };

  const handleScaleTypeChange = (
    event: HTMLCalciteRadioButtonGroupElement["calciteRadioButtonGroupChange"],
  ) => {
    const scale =
      event.target.selectedItem.value === "current"
        ? mapElement.current.scale
        : scales.at(0)?.scale;
    setPrintOptions((prev) => ({
      ...prev,
      scaleType: event.target.selectedItem.value,
      scale: scale as number,
    }));
  };

  const handleLayoutSelected = (
    event: HTMLCalciteSelectElement["calciteSelectChange"],
  ) => {
    setPrintOptions((prev) => ({
      ...prev,
      layout: event.target.selectedOption.value,
    }));
  };
  const handleFormatSelected = (
    event: HTMLCalciteSelectElement["calciteSelectChange"],
  ) => {
    setPrintOptions((prev) => ({
      ...prev,
      format: event.target.selectedOption.value,
    }));
  };

  const handleShowAttributesChange = (
    event: HTMLCalciteSwitchElement["calciteSwitchChange"],
  ) => {
    setPrintOptions((prev) => ({
      ...prev,
      showAttributes: event.target.checked,
    }));
  };

  const handleShowLegendChange = (
    event: HTMLCalciteSwitchElement["calciteSwitchChange"],
  ) => {
    setPrintOptions((prev) => ({
      ...prev,
      showLegend: event.target.checked,
    }));
  };

  const handleCustomScaleChange = (
    event: HTMLCalciteSelectElement["calciteSelectChange"],
  ) => {
    const selected = event.target.selectedOption.value; // this is a string
    setPrintOptions((prev) => ({
      ...prev,
      userDefined: selected === "custom",
      scale: selected === "custom" ? prev.scale : selected, // keep previous scale if "custom"
    }));
  };

  const handleUserDefinedInput = (
    event: HTMLCalciteInputNumberElement["calciteInputNumberChange"],
  ) => {
    setPrintOptions((prev) => ({
      ...prev,
      scale: parseInt(event.target.value),
    }));
  };

  const handleShowPrintAreaChange = (
    event: HTMLCalciteSwitchElement["calciteSwitchChange"],
  ) => {
    setPrintOptions((prev) => ({
      ...prev,
      showPrintArea: event.target.checked,
    }));

    if (event.target.checked) {
      if (!printOptions.layout) return;
      showPrintFrame(
        mapElement.current,
        printOptions.layout,
        printOptions.scale,
        printOptions.showAttributes,
        printOptions.showLegend,
        printOptions.scaleType,
      );
    } else {
      hidePrintFrame(mapElement.current);
    }
  };

  const handleTabChange = (
    event: HTMLCalciteTabNavElement["calciteTabChange"],
  ) => {
    setSelectedTab(
      event.target.selectedTitle.textContent.toLowerCase() as
        | "layout"
        | "exports",
    );
  };

  const handleExportClick = () => {
    if (!printUrl.current) return;
    prepareExport(
      mapElement.current,
      printOptions.scaleType === "custom"
        ? printOptions.scale
        : roundScale(mapElement.current.scale),
      printOptions.layout,
      printOptions.format,
      printOptions.title,
      printOptions.showLegend,
      printOptions.showAttributes,
      selectedCondo,
      printUrl.current,
      setExports,
    );
    setSelectedTab("exports");
  };

  const handleRemovePrintResult = (
    event: HTMLCalciteListItemElement["calciteListItemClose"],
  ) => {
    setExports((prev) =>
      prev.filter((result) => result.id.toString() !== event.target.value),
    );
  };

  useEffect(() => {
    (async () => {
      const params = new URLSearchParams(window.location.search);
      const app = params.get("app") ?? "config";
      const config = await fetch(`${app}.json`);
      const data = await config.json();
      if (data.printUrl) {
        printUrl.current = data.printUrl;
      }
      setScales(getScales());
      const layoutsLoaded = await getLayouts();
      setLayouts(layoutsLoaded);

      if (layoutsLoaded.at(0)) {
        setPrintOptions((prev) => ({
          ...prev,
          layout: layoutsLoaded.at(0),
        }));
      }
    })();
  }, []);

  useEffect(() => {
    if (!printOptions.showPrintArea) {
      hidePrintFrame(mapElement.current);
      return;
    }

    const { layout, scale, showAttributes, showLegend } = printOptions;
    if (!layout) return;

    const template = getPrintTemplate(layout, showAttributes, showLegend);
    if (!template) return;

    showPrintFrame(
      mapElement.current,
      layout,
      printOptions.scaleType === "custom"
        ? scale
        : roundScale(mapElement.current.scale),
      showAttributes,
      showLegend,
      printOptions.scaleType,
    );
  }, [
    printOptions.showPrintArea,
    printOptions.layout,
    printOptions.scale,
    printOptions.showAttributes,
    printOptions.showLegend,
  ]);

  useEffect(() => {
    if (closed) {
      hidePrintFrame(mapElement.current);
      setPrintOptions((prev) => ({
        ...prev,
        showPrintArea: false,
      }));
    }
  }, [closed]);

  useEffect(() => {
    if (!mapElement.current || initializedRef.current) return;
    initializedRef.current = true;
  }, [mapElement]);

  return {
    printOptions,
    exports,
    formats,
    scales,
    layouts,
    selectedTab,
    selectedCondo,
    handleTitleChange,
    handleScaleTypeChange,
    handleRemovePrintResult,
    handleLayoutSelected,
    handleFormatSelected,
    handleTabChange,
    handleExportClick,
    handleShowAttributesChange,
    handleShowLegendChange,
    handleShowPrintAreaChange,
    handleCustomScaleChange,
    handleUserDefinedInput,
  };
};
