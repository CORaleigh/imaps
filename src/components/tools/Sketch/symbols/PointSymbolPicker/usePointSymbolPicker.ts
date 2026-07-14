/* eslint-disable react-hooks/exhaustive-deps */
// usePointSymbolPicker.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback, useEffect, useRef } from "react";
import type React from "react";
import type SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import type SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol";
import type SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import type PictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol";
import type TextSymbol from "@arcgis/core/symbols/TextSymbol";
import Portal from "@arcgis/core/portal/Portal";
import PortalItem from "@arcgis/core/portal/PortalItem";
import WebStyleSymbol from "@arcgis/core/symbols/WebStyleSymbol";
import Color from "@arcgis/core/Color";
import CIMSymbol from "@arcgis/core/symbols/CIMSymbol";
import * as symbolUtils from "@arcgis/core/symbols/support/symbolUtils";
import { useMap } from "../../../../../context/useMap";
import { loadSketchSymbols, updateSketchSymbol } from "../../utils/symbolStore";
import * as cimSymbolUtils from "@arcgis/core/symbols/support/cimSymbolUtils";

export type OnSymbolChange = (
  symbol:
    | SimpleFillSymbol
    | SimpleLineSymbol
    | SimpleMarkerSymbol
    | PictureMarkerSymbol
    | TextSymbol,
) => void;

const replaceColors = (obj: any, colorArray: number[]) => {
  if (!obj || typeof obj !== "object") return;
  if (Array.isArray(obj.color) && obj.color.length === 4) {
    const [r, g, b] = obj.color;
    const isLight = r > 200 && g > 200 && b > 200;
    if (!isLight) obj.color = colorArray;
  }
  Object.values(obj).forEach((val) => {
    if (Array.isArray(val)) val.forEach((v) => replaceColors(v, colorArray));
    else if (typeof val === "object") replaceColors(val, colorArray);
  });
};

export const applySymbolProperties = async (
  webSymbol: WebStyleSymbol,
  color: string,
  size: number,
  onSymbolSelect: OnSymbolChange,
  webMapId: string,
) => {
  const fetchedSymbol = await webSymbol.fetchSymbol();
  const arcgisColor = new Color(color);
  const colorArray = [
    arcgisColor.r,
    arcgisColor.g,
    arcgisColor.b,
    Math.round(arcgisColor.a * 255),
  ];

  if (fetchedSymbol.type === "cim") {
    const json = fetchedSymbol.toJSON();

    const outerLayer =
      json.symbol?.symbolLayers?.[json.symbol.symbolLayers.length - 1];
    if (outerLayer) {
      replaceColors(outerLayer, colorArray);
    }

    const cimSymbol = CIMSymbol.fromJSON(json);
    cimSymbolUtils.scaleCIMSymbolTo(cimSymbol, size);
    updateSketchSymbol(webMapId, "point", {
      color: color,
      size: size,
      webSymbol: webSymbol.toJSON(),
    });
    onSymbolSelect(cimSymbol as unknown as SimpleMarkerSymbol);
  } else {
    const sym = fetchedSymbol as unknown as SimpleMarkerSymbol;
    sym.color = arcgisColor;
    sym.size = size;
    updateSketchSymbol(webMapId, "point", {
      color: color,
      size: size,
      webSymbol: webSymbol.toJSON(),
    });
    onSymbolSelect(sym);
  }
};

export interface UsePointSymbolPicker {
  handleSizeInput: (
    event: HTMLCalciteInputNumberElement["calciteInputNumberChange"],
  ) => void;
  symbolGroups: SymbolGroup[];
  handleShowFlow: () => void;
  showFlow: boolean;
  handleSymbolGroupChange: (
    event: HTMLCalciteDropdownElement["calciteDropdownSelect"],
  ) => void;
  selectedGroup: SymbolGroup | undefined;
  previewCache: React.RefObject<Map<string, string>>;
  handlePointColorChange: (
    event: HTMLCalciteColorPickerElement["calciteColorPickerChange"],
  ) => void;
  selectedPreviewRef: React.RefObject<HTMLDivElement | null>;
}

export const usePointSymbolPicker = (
  symbol: SimpleMarkerSymbol,
  onSymbolChange: OnSymbolChange,
  selectedWebSymbol: WebStyleSymbol | undefined,
  setSelectedWebSymbol: React.Dispatch<
    React.SetStateAction<WebStyleSymbol | undefined>
  >,
  pointColor: string,
  setPointColor: React.Dispatch<React.SetStateAction<string>>,
  size: number,
  setSize: React.Dispatch<React.SetStateAction<number>>,
  pointSymbolInitialized: boolean,
  setPointSymbolInitialized: React.Dispatch<React.SetStateAction<boolean>>,
): UsePointSymbolPicker => {
  const [symbolGroups, setSymbolGroups] = useState<SymbolGroup[]>([]);
  const [showFlow, setShowFlow] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState<SymbolGroup>();
  const previewCache = useRef<Map<string, string>>(new Map());
  const selectedPreviewRef = useRef<HTMLDivElement>(null);
  const { webMapId } = useMap();

  useEffect(() => {
    if (!selectedPreviewRef.current || !selectedWebSymbol) return;

    selectedWebSymbol.fetchSymbol().then(async (fetchedSymbol) => {
      const arcgisColor = new Color(pointColor);
      const colorArray = [
        arcgisColor.r,
        arcgisColor.g,
        arcgisColor.b,
        Math.round(arcgisColor.a * 255),
      ];

      let symbolToRender = fetchedSymbol;

      if (fetchedSymbol.type === "cim") {
        const json = fetchedSymbol.toJSON();
        const outerLayer =
          json.symbol?.symbolLayers?.[json.symbol.symbolLayers.length - 1];
        if (outerLayer) {
          replaceColors(outerLayer, colorArray);
        }
        const cimSymbol = CIMSymbol.fromJSON(json);
        cimSymbolUtils.scaleCIMSymbolTo(cimSymbol, 12);
        symbolToRender = cimSymbol;
      } else {
        (symbolToRender as unknown as SimpleMarkerSymbol).color = arcgisColor;
      }

      const html = await symbolUtils.renderPreviewHTML(symbolToRender, {
        size: 12,
      });
      if (html && selectedPreviewRef.current) {
        selectedPreviewRef.current.innerHTML = "";
        selectedPreviewRef.current.appendChild(html);
      }
    });
  }, [selectedWebSymbol, pointColor]);

  const handleShowFlow = useCallback(() => {
    setShowFlow((prev) => !prev);
  }, []);

  const handlePointColorChange = useCallback(
    (event: HTMLCalciteColorPickerElement["calciteColorPickerChange"]) => {
      setPointColor(event.target.value as string);
    },
    [],
  );

  const handleSymbolGroupChange = useCallback(
    (event: HTMLCalciteDropdownElement["calciteDropdownSelect"]) => {
      const group = symbolGroups.find(
        (group) => group.name === event.target.selectedItems[0].textContent,
      );
      if (group) {
        setSelectedGroup(group);
      }
    },
    [symbolGroups],
  );
  const handleSizeInput = useCallback(
    (event: HTMLCalciteInputNumberElement["calciteInputNumberChange"]) => {
      if (!symbol || !pointColor) return;
      const newSize = Number(event.target.value);
      setSize(newSize);
      if (selectedWebSymbol) {
        applySymbolProperties(
          selectedWebSymbol,
          pointColor,
          newSize,
          onSymbolChange,
          webMapId.current,
        );
      } else if (symbol.type === "simple-marker") {
        const newSymbol = symbol.clone();
        newSymbol.size = newSize;
        onSymbolChange(newSymbol);
      }
    },
    [symbol, selectedWebSymbol, pointColor],
  );

  useEffect(() => {
    if (selectedWebSymbol) return;
    if (symbol && symbol.type === "simple-marker" && symbol.size) {
      setSize(symbol.size);
    }
  }, [symbol, selectedWebSymbol]);

  useEffect(() => {
    if (!selectedWebSymbol) return;
    if (pointSymbolInitialized) return;
    setPointSymbolInitialized(true);
    applySymbolProperties(
      selectedWebSymbol,
      pointColor,
      size,
      onSymbolChange,
      webMapId.current,
    );
  }, [selectedWebSymbol]);

  const getSymbols = async () => {
    const ids = [
      "a63b3a4631ae41d4a1bc3ba6d9c85bfe",
      "70ccf6bcbd304773a164be896e76edd3",
    ];
    const portal = new Portal({ url: "https://www.arcgis.com" });

    const symbols: SymbolGroup[] = await Promise.all(
      ids.map(async (id: string) => {
        const item = new PortalItem({ portal, id });
        await item.load();
        const data = (await item.fetchData()) as PortalStyleData;

        const webSymbols: SymbolItem[] = data.items.map((symbol) => ({
          symbol: new WebStyleSymbol({
            styleUrl: `https://www.arcgis.com/sharing/rest/content/items/${item.id}/data`,
            name: symbol.name,
          }),
          title: symbol.title,
        }));

        return { name: item.title, symbols: webSymbols };
      }),
    );
    setSymbolGroups(symbols);
    setSelectedGroup(symbols[0]);

    if (!pointSymbolInitialized) {
      const stored = loadSketchSymbols(webMapId.current);

      if (stored.point) {
        const restoredSymbol = WebStyleSymbol.fromJSON(stored.point.webSymbol);
        setPointColor(stored.point.color);
        setSize(stored.point.size);
        setSelectedWebSymbol(restoredSymbol); // set last so useEffect fires with correct color/size
      } else {
        setPointColor("#FF0000");
        setSelectedWebSymbol(symbols[0]?.symbols[0]?.symbol);
      }
    }
  };

  useEffect(() => {
    if (symbolGroups.length > 0) return;
    getSymbols();
  }, []);

  return {
    handleSizeInput,
    symbolGroups,
    handleShowFlow,
    showFlow,
    handleSymbolGroupChange,
    selectedGroup,
    previewCache,
    handlePointColorChange,
    selectedPreviewRef,
  };
};

export interface SymbolItem {
  symbol: WebStyleSymbol;
  title: string;
}

export interface SymbolGroup {
  name: string | null | undefined;
  symbols: SymbolItem[];
}

interface PortalItemThumbnail {
  href: string;
}

interface PortalStyleItem {
  name: string;
  title: string;
  itemType: "pointSymbol" | "polygonSymbol" | "lineSymbol" | "textSymbol";
  dimensionality: "flat" | "volumetric";
  category: string;
  tags: string[];
  formats: ("web2d" | "cim")[];
  cimRef: string;
  thumbnail: PortalItemThumbnail;
}

interface PortalStyleData {
  cimVersion: string;
  items: PortalStyleItem[];
}
