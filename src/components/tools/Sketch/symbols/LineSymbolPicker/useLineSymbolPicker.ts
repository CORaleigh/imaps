// hooks/useShell.ts
import { useState, useCallback, useEffect } from "react";

import Color from "@arcgis/core/Color";
import type SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import type SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol";
import type SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";

export interface UseLineSymbolPicker {
  lineColor: string;
  lineWidth: number;
  lineTransparency: number;
  handleLineColorChange: (
    event: HTMLCalciteColorPickerElement["calciteColorPickerChange"],
  ) => void;
  handleLineSliderInput: (
    event: HTMLCalciteSliderElement["calciteSliderChange"],
  ) => void;
  handleLineWidthInput: (
    event: HTMLCalciteInputNumberElement["calciteInputNumberChange"],
  ) => void;
  handleLineTransparencySliderInput: (
    event: HTMLCalciteSliderElement["calciteSliderChange"],
  ) => void;
  handleLineTransparencyInput: (
    event: HTMLCalciteInputNumberElement["calciteInputNumberChange"],
  ) => void;
}

export const useLineSymbolPicker = (
  symbol: SimpleFillSymbol | SimpleLineSymbol | SimpleMarkerSymbol,
  onSymbolChange: (
    symbol: SimpleFillSymbol | SimpleLineSymbol | SimpleMarkerSymbol,
  ) => void,
): UseLineSymbolPicker => {
  const [lineColor, setLineColor] = useState("#FF0000");
  const [lineWidth, setLineWidth] = useState(2);
  const [lineTransparency, setLineTransparency] = useState(0);

  const handleLineColorChange = useCallback(
    (event: HTMLCalciteColorPickerElement["calciteColorPickerChange"]) => {
      if (!event.target.value) return;
      const hexColor = event.target.value.toString();
      setLineColor(hexColor);
      const color = new Color(hexColor);
      color.a = (100 - lineTransparency) / 100;

      if (symbol.type === "simple-line") {
        symbol.color = color;
      }

      if (symbol.type === "simple-fill" || symbol.type === "simple-marker") {
        if (
          (symbol as SimpleFillSymbol | SimpleMarkerSymbol).outline !== null
        ) {
          (symbol as SimpleFillSymbol | SimpleMarkerSymbol).outline!.color =
            color;
        }
      }
      onSymbolChange(symbol);
    },
    [lineTransparency, onSymbolChange, symbol],
  );

  const handleLineSliderInput = (
    event: HTMLCalciteSliderElement["calciteSliderChange"],
  ) => {
    if (!event.target.value) return;
    const width = parseFloat(event.target.value.toString());
    setLineWidth(width);

    if (symbol.type === "simple-line") {
      symbol.width = width;
    }

    if (symbol.type === "simple-fill" || symbol.type === "simple-marker") {
      if ((symbol as SimpleFillSymbol | SimpleMarkerSymbol).outline !== null) {
        symbol.outline!.width = width;
      }
    }
    onSymbolChange(symbol);
  };

  const handleLineWidthInput = (
    event: HTMLCalciteInputNumberElement["calciteInputNumberChange"],
  ) => {
    if (!event.target.value) return;
    const width = parseFloat(event.target.value.toString());
    setLineWidth(width);

    if (!event.target.value) return;
    setLineWidth(parseFloat(event.target.value.toString()));

    if (symbol.type === "simple-line") {
      symbol.width = width;
    }

    if (symbol.type === "simple-fill" || symbol.type === "simple-marker") {
      if ((symbol as SimpleFillSymbol | SimpleMarkerSymbol).outline !== null) {
        symbol.outline!.width = width;
      }
    }
    onSymbolChange(symbol);
  };

  const handleLineTransparencySliderInput = useCallback(
    (event: HTMLCalciteSliderElement["calciteSliderChange"]) => {
      let v = event.target.value;
      if (Array.isArray(v)) v = v[0];

      if (v == null) return;

      setLineTransparency(v);

      const color =
        symbol.type === "simple-line"
          ? symbol.color?.clone()
          : (
              symbol as SimpleFillSymbol | SimpleMarkerSymbol
            ).outline?.color?.clone();

      color!.a = (100 - v) / 100;

      if (symbol.type === "simple-line") {
        symbol.color = color;
      }

      if (symbol.type === "simple-fill" || symbol.type === "simple-marker") {
        if (
          (symbol as SimpleFillSymbol | SimpleMarkerSymbol).outline !== null
        ) {
          (symbol as SimpleFillSymbol | SimpleMarkerSymbol).outline!.color =
            color;
        }
      }
      onSymbolChange(symbol);
    },
    [onSymbolChange, symbol],
  );

  const handleLineTransparencyInput = useCallback(
    (event: HTMLCalciteInputNumberElement["calciteInputNumberChange"]) => {
      const v = event.target.value;
      if (v == null) return;

      setLineTransparency(parseInt(v));
      const color =
        symbol.type === "simple-line"
          ? symbol.color?.clone()
          : (
              symbol as SimpleFillSymbol | SimpleMarkerSymbol
            ).outline?.color?.clone();

      color!.a = (100 - parseInt(v)) / 100;
      if (symbol.type === "simple-line") {
        symbol.color = color;
      }

      if (symbol.type === "simple-fill" || symbol.type === "simple-marker") {
        if (
          (symbol as SimpleFillSymbol | SimpleMarkerSymbol).outline !== null
        ) {
          (symbol as SimpleFillSymbol | SimpleMarkerSymbol).outline!.color =
            color;
        }
      }
      onSymbolChange(symbol);
    },
    [onSymbolChange, symbol],
  );
  useEffect(() => {
    if (symbol.type === "simple-line" && symbol.color) {
      setLineColor(symbol.color.toHex());
      setLineTransparency(Math.round(100 - symbol.color.a * 100));
      setLineWidth(symbol.width);
    }
    if (
      symbol.type !== "simple-line" &&
      symbol.outline &&
      symbol.outline.color
    ) {
      setLineColor(symbol.outline.color.toHex());
      setLineTransparency(Math.round(100 - symbol.outline.color.a * 100));
      setLineWidth(symbol.outline.width);
    }
  }, [symbol]);

  return {
    lineColor,
    lineWidth,
    lineTransparency,
    handleLineColorChange,
    handleLineSliderInput,
    handleLineWidthInput,
    handleLineTransparencySliderInput,
    handleLineTransparencyInput,
  };
};
