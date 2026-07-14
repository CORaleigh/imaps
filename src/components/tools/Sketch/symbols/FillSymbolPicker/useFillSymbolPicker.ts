// hooks/useShell.ts
import { useState, useCallback, useEffect } from "react";

import Color from "@arcgis/core/Color";
import type SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import type SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol";
import type SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";

export interface UseFillSymbolPicker {
  fillColor: string;
  fillTransparency: number;
  handleFillColorChange: (
    event: HTMLCalciteColorPickerElement["calciteColorPickerChange"],
  ) => void;

  handleFillTransparencySliderInput: (
    event: HTMLCalciteSliderElement["calciteSliderChange"],
  ) => void;
  handleFillTransparencyInput: (
    event: HTMLCalciteInputNumberElement["calciteInputNumberChange"],
  ) => void;
}

export const useFillSymbolPicker = (
  symbol: SimpleFillSymbol | SimpleLineSymbol | SimpleMarkerSymbol,
  onSymbolChange: (
    symbol: SimpleFillSymbol | SimpleLineSymbol | SimpleMarkerSymbol,
  ) => void,
): UseFillSymbolPicker => {
  const [fillColor, setFillColor] = useState("#FF0000");
  const [fillTransparency, setFillTransparency] = useState(50);

  const handleFillColorChange = useCallback(
    (event: HTMLCalciteColorPickerElement["calciteColorPickerChange"]) => {
      if (!event.target.value) return;
      const hexColor = event.target.value.toString();
      setFillColor(hexColor);
      const color = new Color(hexColor);
      color.a = (100 - fillTransparency) / 100;

      (symbol as SimpleFillSymbol | SimpleMarkerSymbol).color = color;
      onSymbolChange(symbol);
    },
    [fillTransparency, onSymbolChange, symbol],
  );

  const handleFillTransparencySliderInput = useCallback(
    (event: HTMLCalciteSliderElement["calciteSliderChange"]) => {
      let v = event.target.value;
      if (Array.isArray(v)) v = v[0];

      if (v == null) return;

      setFillTransparency(v);
      const color = symbol.color?.clone();
      color!.a = (100 - v) / 100;

      symbol.color = color;
      onSymbolChange(symbol);
    },
    [onSymbolChange, symbol],
  );

  const handleFillTransparencyInput = useCallback(
    (event: HTMLCalciteInputNumberElement["calciteInputNumberChange"]) => {
      const v = event.target.value;
      if (v == null) return;

      setFillTransparency(parseInt(v));
      const color = symbol.color?.clone();
      color!.a = (100 - parseInt(v)) / 100;

      symbol.color = color!;
      onSymbolChange(symbol);
    },
    [onSymbolChange, symbol],
  );

  useEffect(() => {
    if (symbol && symbol.color) {
      setFillColor(symbol.color.toHex());
      setFillTransparency(Math.round(100 - symbol.color.a * 100));
    }
  }, [symbol]);

  return {
    fillColor,
    fillTransparency,
    handleFillColorChange,
    handleFillTransparencySliderInput,
    handleFillTransparencyInput,
  };
};
