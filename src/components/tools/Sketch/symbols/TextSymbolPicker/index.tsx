import React from "react";
import "@esri/calcite-components/components/calcite-panel";
import { useTextSymbolPicker } from "./useTextSymbolPicker";
import type SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import type SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol";
import type SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import type TextSymbol from "@arcgis/core/symbols/TextSymbol";

interface TextSymbolPickerProps {
  symbol: SimpleFillSymbol | SimpleLineSymbol | SimpleMarkerSymbol | TextSymbol;
  onSymbolChange: (
    symbol:
      | SimpleFillSymbol
      | SimpleLineSymbol
      | SimpleMarkerSymbol
      | TextSymbol,
  ) => void;
}

const TextSymbolPicker: React.FC<TextSymbolPickerProps> = ({
  symbol,
  onSymbolChange,
}) => {
  const {
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
  } = useTextSymbolPicker(symbol, onSymbolChange);
  return (
    <>
      <calcite-label>
        Text
        <calcite-text-area
          value={text}
          oncalciteTextAreaInput={handleTextInput}
        >
          {text}
        </calcite-text-area>
      </calcite-label>
      <calcite-label>
        Color
        <calcite-button
          width="half"
          iconEnd="pencil"
          appearance="outline"
          kind="neutral"
          id="text-color"
        >
          <calcite-color-picker-swatch
            color={color}
            style={{ width: "82px" }}
          ></calcite-color-picker-swatch>
        </calcite-button>
      </calcite-label>
      <calcite-label>
        Size
        <calcite-input-number
          value={size.toString()}
          min={6}
          max={100}
          oncalciteInputNumberInput={handleSizeInput}
          suffixText="px"
        ></calcite-input-number>
      </calcite-label>
      <calcite-popover
        label={"Color"}
        referenceElement={"text-color"}
        pointerDisabled
        overlayPositioning="fixed"
        heading="Color"
        closable
      >
        <calcite-color-picker
          oncalciteColorPickerChange={handleColorChange}
          value={color}
        ></calcite-color-picker>
      </calcite-popover>

      <calcite-label layout="inline">
        Halo
        <calcite-switch
          checked={haloEnabled}
          oncalciteSwitchChange={handleHaloToggle}
        />
      </calcite-label>
      {haloEnabled && (
        <>
          <calcite-label>
            Halo Color
            <calcite-button
              width="half"
              iconEnd="pencil"
              appearance="outline"
              kind="neutral"
              id="halo-color"
            >
              <calcite-color-picker-swatch
                color={haloColor}
                style={{ width: "82px" }}
              />
            </calcite-button>
          </calcite-label>

          <calcite-label>
            Halo Size
            <calcite-input-number
              value={haloSize.toString()}
              min={1}
              max={10}
              suffixText="px"
              oncalciteInputNumberInput={handleHaloSizeInput}
            />
          </calcite-label>

          <calcite-popover
            label="Halo Color"
            referenceElement="halo-color"
            pointerDisabled
            overlayPositioning="fixed"
            heading="Halo Color"
            closable
          >
            <calcite-color-picker
              value={haloColor}
              oncalciteColorPickerChange={handleHaloColorChange}
            />
          </calcite-popover>
        </>
      )}
    </>
  );
};

export default TextSymbolPicker;
