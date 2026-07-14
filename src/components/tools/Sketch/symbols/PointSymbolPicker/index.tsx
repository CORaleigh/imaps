// PointSymbolPicker.tsx
import React, { useCallback, useEffect, useRef } from "react";
import "@esri/calcite-components/components/calcite-panel";
import {
  usePointSymbolPicker,
  applySymbolProperties,
  type SymbolGroup,
  type SymbolItem,
} from "./usePointSymbolPicker";
import type SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import type SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol";
import type SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import type PictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol";
import type TextSymbol from "@arcgis/core/symbols/TextSymbol";
import "@esri/calcite-components/components/calcite-label";
import "@esri/calcite-components/components/calcite-input-number";
import "@esri/calcite-components/components/calcite-icon";
import "@esri/calcite-components/components/calcite-dropdown";
import "@esri/calcite-components/components/calcite-dropdown-group";
import "@esri/calcite-components/components/calcite-dropdown-item";
import "@esri/calcite-components/components/calcite-flow";
import "@esri/calcite-components/components/calcite-flow-item";
import "@esri/calcite-components/components/calcite-list";
import "@esri/calcite-components/components/calcite-list-item";
import "@esri/calcite-components/components/calcite-color-picker";
import "@esri/calcite-components/components/calcite-color-picker-swatch";
import "@esri/calcite-components/components/calcite-popover";
import * as symbolUtils from "@arcgis/core/symbols/support/symbolUtils";
import type WebStyleSymbol from "@arcgis/core/symbols/WebStyleSymbol";
import { useMap } from "../../../../../context/useMap";

interface PointSymbolPickerProps {
  symbol: SimpleMarkerSymbol;
  onSymbolChange: (
    symbol:
      | SimpleFillSymbol
      | SimpleLineSymbol
      | SimpleMarkerSymbol
      | PictureMarkerSymbol
      | TextSymbol,
  ) => void;
  selectedWebSymbol: WebStyleSymbol | undefined;
  setSelectedWebSymbol: React.Dispatch<
    React.SetStateAction<WebStyleSymbol | undefined>
  >;
  pointColor: string;
  setPointColor: React.Dispatch<React.SetStateAction<string>>;
  pointSize: number;
  setPointSize: React.Dispatch<React.SetStateAction<number>>;
  pointSymbolInitialized: boolean;
  setPointSymbolInitialized: React.Dispatch<React.SetStateAction<boolean>>;
}

const SymbolItemDisplay = ({
  webSymbol,
  title,
  previewCache,
  onSymbolSelect,
  color,
  size,
  setSelectedWebSymbol,
  onClose,
  webMapId,
}: {
  webSymbol: WebStyleSymbol;
  title: string;
  previewCache: React.RefObject<Map<string, string>>;
  onSymbolSelect: (
    symbol:
      | SimpleFillSymbol
      | SimpleLineSymbol
      | SimpleMarkerSymbol
      | PictureMarkerSymbol
      | TextSymbol,
  ) => void;
  color: string;
  size: number;
  setSelectedWebSymbol: React.Dispatch<
    React.SetStateAction<WebStyleSymbol | undefined>
  >;
  onClose: () => void;
  webMapId: string;
}) => {
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!previewRef.current) return;
    previewRef.current.innerHTML = "";

    const cached = previewCache.current.get(webSymbol.name ?? "");
    if (cached) {
      previewRef.current.innerHTML = cached;
      return;
    }

    symbolUtils.renderPreviewHTML(webSymbol).then((html) => {
      if (html && previewRef.current) {
        previewRef.current.innerHTML = "";
        previewRef.current.appendChild(html);
        previewCache.current.set(
          webSymbol.name ?? "",
          previewRef.current.innerHTML,
        );
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [webSymbol]);

  const handleSelect = useCallback(async () => {
    setSelectedWebSymbol(webSymbol);
    await applySymbolProperties(
      webSymbol,
      color,
      size,
      onSymbolSelect,
      webMapId,
    );
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [webSymbol, color, size, onSymbolSelect, onClose]);

  return (
    <calcite-list-item
      label={title}
      value={webSymbol.name ?? ""}
      oncalciteListItemSelect={handleSelect}
    >
      <div slot="content-start" ref={previewRef} />
    </calcite-list-item>
  );
};

const PointSymbolPicker: React.FC<PointSymbolPickerProps> = ({
  symbol,
  onSymbolChange,
  selectedWebSymbol: selectedWebSymbolProp,
  setSelectedWebSymbol: setSelectedWebSymbolProp,
  pointColor: pointColorProp,
  setPointColor: setPointColorProp,
  pointSize: pointSizeProp,
  setPointSize: setPointSizeProp,
  pointSymbolInitialized,
  setPointSymbolInitialized,
}) => {
  const {
    handleSizeInput,
    symbolGroups,
    handleShowFlow,
    showFlow,
    handleSymbolGroupChange,
    selectedGroup,
    previewCache,
    handlePointColorChange,
    selectedPreviewRef,
  } = usePointSymbolPicker(
    symbol,
    onSymbolChange,
    selectedWebSymbolProp,
    setSelectedWebSymbolProp,
    pointColorProp,
    setPointColorProp,
    pointSizeProp,
    setPointSizeProp,
    pointSymbolInitialized,
    setPointSymbolInitialized,
  );

  const selectedSymbolTitle = selectedGroup?.symbols.find(
    (item) => item.symbol.name === selectedWebSymbolProp?.name,
  )?.title;
  const { webMapId } = useMap();
  useEffect(() => {
    if (!selectedWebSymbolProp) return;
    applySymbolProperties(
      selectedWebSymbolProp,
      pointColorProp,
      pointSizeProp,
      onSymbolChange,
      webMapId.current,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pointColorProp]);

  return (
    <calcite-flow>
      {}
      <calcite-flow-item selected={!showFlow}>
        {pointColorProp !== "" && (
          <calcite-block expanded>
            <calcite-label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  outline: "solid 1px",
                  height: "32px",
                  padding: "0 8px",
                }}
                onClick={handleShowFlow}
              >
                {selectedWebSymbolProp ? (
                  <div ref={selectedPreviewRef} />
                ) : (
                  <div style={{ width: "50px" }}></div>
                )}
                <span style={{ flex: 1 }}>{selectedSymbolTitle ?? ""}</span>
                <calcite-icon icon="chevron-right" />
              </div>
            </calcite-label>
            <calcite-label>
              Size
              <calcite-input-number
                value={pointSizeProp.toString()}
                min={6}
                max={100}
                oncalciteInputNumberInput={handleSizeInput}
                suffixText="px"
              />
            </calcite-label>
            <calcite-label>
              Color
              <calcite-button
                width="half"
                iconEnd="pencil"
                appearance="outline"
                kind="neutral"
                id="web-symbol-color"
              >
                <calcite-color-picker-swatch
                  color={pointColorProp}
                  style={{ width: "82px" }}
                />
              </calcite-button>
            </calcite-label>
            <calcite-popover
              label="Symbol Color"
              referenceElement="web-symbol-color"
              pointerDisabled
              overlayPositioning="fixed"
              heading="Symbol Color"
              closable
            >
              <calcite-color-picker
                value={pointColorProp}
                oncalciteColorPickerChange={handlePointColorChange}
              />
            </calcite-popover>
          </calcite-block>
        )}
      </calcite-flow-item>
      <calcite-flow-item selected={showFlow} id="web-symbols" heading="Symbols">
        <calcite-action
          slot="actions-start"
          icon="chevron-left"
          text="Back"
          onClick={handleShowFlow}
        ></calcite-action>
        <calcite-block expanded>
          <calcite-dropdown
            label="Select"
            style={{ width: "100%" }}
            oncalciteDropdownSelect={handleSymbolGroupChange}
          >
            <calcite-button
              slot="trigger"
              id="web-symbols-dropdown"
              alignment="space-between"
              appearance="outline"
              width="full"
              iconEnd="chevron-down"
              kind="neutral"
            >
              {selectedGroup?.name ?? "Select"}
            </calcite-button>
            <calcite-dropdown-group
              selection-mode="single"
              group-title="Symbol Types"
            >
              {symbolGroups.map((group: SymbolGroup) => (
                <calcite-dropdown-item
                  key={group.name}
                  selected={group.name === selectedGroup?.name}
                >
                  {group.name}
                </calcite-dropdown-item>
              ))}
            </calcite-dropdown-group>
          </calcite-dropdown>
          <calcite-list
            selection-mode="single"
            selection-appearance="highlight"
            label={selectedGroup?.name || "Symbols"}
            style={{ maxHeight: "300px", overflowY: "auto", marginTop: "1em" }}
          >
            {selectedGroup?.symbols.map((item: SymbolItem) => (
              <SymbolItemDisplay
                key={item.symbol.name}
                webSymbol={item.symbol}
                title={item.title}
                previewCache={previewCache}
                onSymbolSelect={onSymbolChange}
                color={pointColorProp}
                size={pointSizeProp}
                setSelectedWebSymbol={setSelectedWebSymbolProp}
                onClose={handleShowFlow}
                webMapId={webMapId.current}
              />
            ))}
          </calcite-list>
        </calcite-block>
      </calcite-flow-item>
    </calcite-flow>
  );
};

export default PointSymbolPicker;
