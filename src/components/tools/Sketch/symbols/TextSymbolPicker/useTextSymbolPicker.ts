// hooks/useShell.ts
import { useState, useCallback, useEffect } from "react";

import Color from "@arcgis/core/Color";
import type SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import type SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol";
import type SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import type TextSymbol from "@arcgis/core/symbols/TextSymbol";

export interface UseTextSymbolPicker {
  color: string;
  size: number;
  text: string;

  haloEnabled: boolean;
  haloColor: string;
  haloSize: number;

  handleColorChange: (
    event: HTMLCalciteColorPickerElement["calciteColorPickerChange"],
  ) => void;

  handleSizeInput: (
    event: HTMLCalciteInputNumberElement["calciteInputNumberChange"],
  ) => void;
  handleTextInput: (
    event: HTMLCalciteTextAreaElement["calciteTextAreaChange"],
  ) => void;

  handleHaloToggle: (
    event: HTMLCalciteSwitchElement["calciteSwitchChange"],
  ) => void;
  handleHaloColorChange: (
    event: HTMLCalciteColorPickerElement["calciteColorPickerChange"],
  ) => void;
  handleHaloSizeInput: (
    event: HTMLCalciteInputNumberElement["calciteInputNumberChange"],
  ) => void;
}

export const useTextSymbolPicker = (
  symbol: SimpleFillSymbol | SimpleLineSymbol | SimpleMarkerSymbol | TextSymbol,
  onSymbolChange: (
    symbol:
      | SimpleFillSymbol
      | SimpleLineSymbol
      | SimpleMarkerSymbol
      | TextSymbol,
  ) => void,
): UseTextSymbolPicker => {
  const [color, setColor] = useState("#FF0000");
  const [size, setSize] = useState(12);
  const [text, setText] = useState("");

  const [haloEnabled, setHaloEnabled] = useState(true);
  const [haloColor, setHaloColor] = useState("#FFFFFF");
  const [haloSize, setHaloSize] = useState(0);

  const handleColorChange = useCallback(
    (event: HTMLCalciteColorPickerElement["calciteColorPickerChange"]) => {
      if (!event.target.value) return;
      const hexColor = event.target.value.toString();
      setColor(hexColor);
      const color = new Color(hexColor);

      (symbol as SimpleFillSymbol | SimpleMarkerSymbol).color = color;
      onSymbolChange(symbol);
    },
    [onSymbolChange, symbol],
  );

  const handleSizeInput = useCallback(
    (event: HTMLCalciteInputNumberElement["calciteInputNumberChange"]) => {
      if (symbol.type === "text") {
        const newSymbol = symbol.clone();
        newSymbol.font = {
          ...newSymbol.font,
          size: event.target.value,
        };
        onSymbolChange(newSymbol);
      }
    },
    [onSymbolChange, symbol],
  );

  const handleTextInput = useCallback(
    (event: HTMLCalciteTextAreaElement["calciteTextAreaChange"]) => {
      if (symbol.type === "text") {
        symbol.text = event.target.value;
        onSymbolChange(symbol);
      }
    },
    [onSymbolChange, symbol],
  );

  const handleHaloToggle = useCallback(
    (event: HTMLCalciteSwitchElement["calciteSwitchChange"]) => {
      const enabled = event.target.checked;
      setHaloEnabled(enabled);

      const newSymbol = symbol.clone() as TextSymbol;

      if (enabled) {
        newSymbol.haloColor = new Color(haloColor);
        newSymbol.haloSize = haloSize || 2;
      } else {
        newSymbol.haloSize = 0;
      }

      onSymbolChange(newSymbol);
    },
    [symbol, haloColor, haloSize, onSymbolChange],
  );

  const handleHaloColorChange = useCallback(
    (event: HTMLCalciteColorPickerElement["calciteColorPickerChange"]) => {
      if (!event.target.value) return;

      const hex = event.target.value.toString();
      setHaloColor(hex);

      if (symbol.type === "text") {
        const newSymbol = symbol.clone();
        newSymbol.haloColor = new Color(hex);
        onSymbolChange(newSymbol);
      }
    },
    [symbol, onSymbolChange],
  );

  const handleHaloSizeInput = useCallback(
    (event: HTMLCalciteInputNumberElement["calciteInputNumberChange"]) => {
      const value = Number(event.target.value);
      setHaloSize(value);

      if (symbol.type === "text") {
        const newSymbol = symbol.clone();
        newSymbol.haloSize = value;
        onSymbolChange(newSymbol);
      }
    },
    [symbol, onSymbolChange],
  );

  useEffect(() => {
    if (symbol.type === "text") {
      setColor(symbol.color?.toHex?.() ?? "#FF0000");
      setSize(symbol.font?.size ?? 12);
      setText(symbol.text ?? "");

      const hasHalo = (symbol.haloSize ?? 0) > 0;

      setHaloEnabled(hasHalo);
      setHaloSize(symbol.haloSize ?? 0);
      setHaloColor(symbol.haloColor?.toHex?.() ?? "#FFFFFF");
    }
  }, [symbol]);

  return {
    color,
    size,
    text,
    haloEnabled,
    haloColor,
    haloSize,
    handleColorChange,
    handleSizeInput,
    handleTextInput,
    handleHaloToggle,
    handleHaloColorChange,
    handleHaloSizeInput,
  };
};
