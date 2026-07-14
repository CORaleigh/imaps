import React from "react";
import "@esri/calcite-components/components/calcite-panel";
import { useFillSymbolPicker } from "./useFillSymbolPicker";
import type SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import type SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol";
import type SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";

interface FillSymbolPickerProps {
  symbol: SimpleFillSymbol | SimpleLineSymbol | SimpleMarkerSymbol;
  onSymbolChange: (
    symbol: SimpleFillSymbol | SimpleLineSymbol | SimpleMarkerSymbol,
  ) => void;
}

const FillSymbolPicker: React.FC<FillSymbolPickerProps> = ({
  symbol,
  onSymbolChange,
}) => {
  const {
    fillColor,
    fillTransparency,
    handleFillColorChange,
    handleFillTransparencySliderInput,
    handleFillTransparencyInput,
  } = useFillSymbolPicker(symbol, onSymbolChange);
  return (
    <>
      <calcite-label>
        Fill Color
        <calcite-button
          width="half"
          iconEnd="pencil"
          appearance="outline"
          kind="neutral"
          id="fill-color"
        >
          <calcite-color-picker-swatch
            color={fillColor}
            style={{ width: "82px", opacity: (100 - fillTransparency) / 100 }}
          ></calcite-color-picker-swatch>
        </calcite-button>
      </calcite-label>
      <calcite-label>
        Fill Transparency
        <div style={{ display: "flex" }}>
          <calcite-slider
            style={{ width: "90%" }}
            value={fillTransparency}
            min={0}
            max={100}
            step={1}
            oncalciteSliderInput={handleFillTransparencySliderInput}
          ></calcite-slider>
          <calcite-input-number
            value={fillTransparency.toString()}
            min={0}
            max={100}
            oncalciteInputNumberInput={handleFillTransparencyInput}
            suffixText="%"
          ></calcite-input-number>
        </div>
      </calcite-label>
      <calcite-popover
        label={"Fill Color"}
        referenceElement={"fill-color"}
        pointerDisabled
        overlayPositioning="fixed"
        heading="Fill Color"
        closable
      >
        <calcite-color-picker
          oncalciteColorPickerChange={handleFillColorChange}
          value={fillColor}
        ></calcite-color-picker>
      </calcite-popover>
    </>
  );
};

export default FillSymbolPicker;
