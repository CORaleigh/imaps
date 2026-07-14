// hooks/useCoordinateConversion.ts
import { useRef, useEffect, useState, useCallback } from "react";
import * as coordinateFormatter from "@arcgis/core/geometry/coordinateFormatter.js";
import * as webMercatorUtils from "@arcgis/core/geometry/support/webMercatorUtils.js";
import * as projectOperator from "@arcgis/core/geometry/operators/projectOperator.js";
import SpatialReference from "@arcgis/core/geometry/SpatialReference";
import { useMap } from "../../../context/useMap";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import PictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol";
import Graphic from "@arcgis/core/Graphic";
import Point from "@arcgis/core/geometry/Point";

export interface ConversionFormat {
  id: string;
  label: string;
  placeholder: string;
  regex: string;
}

export interface Validity {
  valid: boolean;
  message: string;
}

export interface UseCoordinateConversionProps {
  display: string;
  expanded: boolean;
  showSearch: boolean;
  showSettings: boolean;
  mode: "move" | "click";
  formats: ConversionFormat[];
  selectedFormat: ConversionFormat;
  validity: Validity | undefined;
  inputRef?: React.RefObject<HTMLCalciteInputTextElement | null>;
  handleShowSearch: () => void;
  handleChangeMode: () => void;
  handleShowSettings: () => void;
  handleFormatChange: (
    event: HTMLCalciteSelectElement["calciteSelectChange"],
  ) => void;
  handleSearchInput: (
    event: HTMLCalciteInputTextElement["calciteInputTextInput"],
  ) => void;
  handleSearchClick: () => void;
  handleCopyToClipboard: () => void;
}

export const useCoordinateConversion = (
  mapElement: React.RefObject<HTMLArcgisMapElement>,
  isOpen: boolean,
): UseCoordinateConversionProps => {
  const formats: ConversionFormat[] = [
    {
      id: "dd",
      label: "Decimal Degrees",
      placeholder: "35.7582196 -78.8079653",
      regex:
        "^-?(?:90(?:.0+)?|[0-8]?\\d(?:.\\d+)?)\\s+-?(?:180(?:.0+)?|1[0-7]\\d(?:.\\d+)?|[0-9]?\\d(?:.\\d+)?)$",
    },
    {
      id: "dms",
      label: "Degrees Minutes Seconds",
      placeholder: "35 45 29.71N 78 48 31.52W",
      regex:
        "^\\s*" +
        "(\\d{1,3})\\s*(?:°|d|\\s)?\\s*" + // Degrees
        "(\\d{1,2})\\s*(?:'|m|\\s)?\\s*" + // Minutes
        '(\\d{1,2}(?:\\.\\d+)?)\\s*(?:"|s|\\s)?\\s*' + // Seconds (allow decimals)
        "([NnSs])?\\s*" + // Latitude hemisphere optional
        "(?:,?\\s*)?" +
        "(\\-?\\d{1,3})\\s*(?:°|d|\\s)?\\s*" + // Longitude degrees (allow negative)
        "(\\d{1,2})\\s*(?:'|m|\\s)?\\s*" + // Longitude minutes
        '(\\d{1,2}(?:\\.\\d+)?)\\s*(?:"|s|\\s)?\\s*' + // Longitude seconds
        "([EeWw])?\\s*$",
    },
    {
      id: "spft",
      label: "Stateplane Feet",
      placeholder: "2056872 731166",
      regex:
        "^\\d{7}(?:\\.\\d+)?\\s*[Ee]?\\s*[ ,]?\\s*\\d{6}(?:\\.\\d+)?\\s*[Nn]?\\s*$",
    },
    {
      id: "usng",
      label: "US National Grid",
      placeholder: "17S PV 98178 59368",
      regex:
        "^\\s*(\\d{1,2}[A-Za-z])[\\s\\u00A0]+([A-Za-z]{1,2})[\\s\\u00A0]+(\\d{1,8})[\\s\\u00A0]+(\\d{1,8})\\s*$",
    },
  ];

  const { setMapMode } = useMap();
  const initializedRef = useRef<boolean>(false);
  const graphicsLayer = useRef<GraphicsLayer>(undefined);
  const inputRef = useRef<HTMLCalciteInputTextElement>(null);
  const [display, setDisplay] = useState("- -");
  const [showSearch, setShowSearch] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [mode, setMode] = useState<"move" | "click">("move");
  const [selectedFormat, setSelectedFormat] = useState<ConversionFormat>(
    formats[0],
  );
  const [validity, setValidity] = useState<Validity | undefined>(undefined);

  const pointerMoveHandlerRef = useRef<
    ((event: HTMLArcgisMapElement["arcgisViewPointerMove"]) => void) | null
  >(null);
  const clickHandlerRef = useRef<
    ((event: HTMLArcgisMapElement["arcgisViewClick"]) => void) | null
  >(null);
  const selectedFormatRef = useRef<ConversionFormat>(selectedFormat);

  // Keep the ref updated so event handlers always use latest format
  useEffect(() => {
    selectedFormatRef.current = selectedFormat;
  }, [selectedFormat]);

  const handleShowSearch = useCallback(
    () => setShowSearch((prev) => !prev),
    [],
  );
  const handleShowSettings = useCallback(
    () => setShowSettings((prev) => !prev),
    [],
  );
  const handleChangeMode = useCallback(
    () => setMode((prev) => (prev === "move" ? "click" : "move")),
    [],
  );
  const handleFormatChange = useCallback(
    (event: HTMLCalciteSelectElement["calciteSelectChange"]) => {
      if (inputRef.current) {
        inputRef.current.value = "";
      }
      setValidity({ valid: true, message: "" });
      setSelectedFormat(event.target.selectedOption.value);
    },
    [],
  );

  const handleSearchInput = (
    event: HTMLCalciteInputTextElement["calciteInputTextInput"],
  ) => {
    const nativeInput = event.target.shadowRoot?.querySelector(
      "input",
    ) as HTMLInputElement;

    const valid = nativeInput?.checkValidity();
    setValidity({ valid: valid, message: valid ? "" : "Invalid format" });
  };
  const handleSearchClick = async () => {
    const mapEl = mapElement.current;
    if (!mapEl) return;

    const input = (
      document.querySelector(
        "#coord-conversion calcite-input-text",
      ) as HTMLCalciteInputTextElement
    ).value;

    const match = input.match(selectedFormatRef.current.regex);
    if (!match) {
      setValidity({ valid: false, message: "Input does not match format" });
      return;
    }

    // Process input based on selected format
    let mapPoint: Point | null = null;
    switch (selectedFormatRef.current.id) {
      case "dd": {
        const [latStr, lonStr] = input.trim().split(/\s+/);
        const lat = parseFloat(latStr);
        const lon = parseFloat(lonStr);
        mapPoint = new Point({
          latitude: lat,
          longitude: lon,
          spatialReference: { wkid: 4326 },
        });
        break;
      }
      case "dms": {
        mapPoint = coordinateFormatter.fromLatitudeLongitude(input)!;

        break;
      }
      case "spft": {
        const [xStr, yStr] = input.trim().split(/[ ,]+/);

        const x = parseFloat(xStr.replace(/[Ee]$/i, ""));
        const y = parseFloat(yStr.replace(/[Nn]$/i, ""));
        mapPoint = new Point({
          x: x,
          y: y,
          spatialReference: { wkid: 2264 },
        });
        await projectOperator.load();
        mapPoint = projectOperator.execute(
          mapPoint,
          new SpatialReference({ wkid: mapEl.spatialReference.wkid }),
        ) as Point;
        break;
      }
      case "usng": {
        const point = coordinateFormatter.fromUsng(input);
        if (point) {
          mapPoint = new Point({
            latitude: point.y,
            longitude: point.x,
            spatialReference: { wkid: 4326 },
          });
        }
        break;
      }
      default:
        break;
    }

    if (mapPoint) {
      const view = mapEl.view;
      if (!view) return;

      // Ensure point is within map extent (optional)
      if (!mapEl.constraints.geometry?.contains(mapPoint)) {
        setValidity({
          valid: false,
          message: "Input location is outside of map extent",
        });
        return;
      }

      // Remove any existing pins and add new one
      graphicsLayer.current?.removeAll();
      const marker = new PictureMarkerSymbol({
        url: "pin.svg",
        height: 20,
        width: 20,
      });
      graphicsLayer.current?.add(
        new Graphic({ geometry: mapPoint, symbol: marker }),
      );

      // Zoom to point
      view.goTo({ target: mapPoint, zoom: 16 });

      setValidity({ valid: true, message: "" });
    } else {
      setValidity({
        valid: false,
        message: "Could not convert input to map point",
      });
    }
  };
  useEffect(() => {
    setExpanded(showSearch || showSettings);
  }, [showSearch, showSettings]);

  // Conversion function used by both pointer move and click
  const convertMapPoint = useCallback(
    async (mapPoint: Point): Promise<string> => {
      switch (selectedFormatRef.current.id) {
        case "dd": {
          const dd = coordinateFormatter.toLatitudeLongitude(
            mapPoint,
            "dd",
            6,
          )!;
          const [latStr, lonStr] = dd.trim().split(/\s+/);
          const lat = parseFloat(latStr);
          const lon = parseFloat(lonStr);
          const value = `${lat.toFixed(6)} -${lon.toFixed(6)}`;
          return value;
        }
        case "dms": {
          const dms = coordinateFormatter.toLatitudeLongitude(
            mapPoint,
            "dms",
            3,
          )!;
          return formatDMSString(dms);
        }
        case "usng":
          return coordinateFormatter.toUsng(mapPoint, 5, true)!;
        case "spft": {
          await projectOperator.load();
          const sp = projectOperator.execute(
            mapPoint,
            new SpatialReference({ wkid: 2264 }),
          ) as Point;
          return `${sp.x.toFixed(0)}E ${sp.y.toFixed(0)}N`;
        }
        default:
          return "";
      }
    },
    [],
  );
  // Format DMS string from "35 50 44.618N 078 39 15.710W" → "35°50'44.618"N 78°39'15.710"W"
  const formatDMSString = (input: string): string => {
    // ex input: "35 50 44.618N 078 39 15.710W"
    const regex =
      /(\d+)\s+(\d+)\s+([\d.]+)([NS])\s+(\d+)\s+(\d+)\s+([\d.]+)([EW])/;
    const match = input.match(regex);

    if (!match) return input;

    const [, latDeg, latMin, latSec, latDir, lonDeg, lonMin, lonSec, lonDir] =
      match;

    // remove leading zeros
    const lonDegClean = String(Number(lonDeg));
    const latDegClean = String(Number(latDeg));

    return `${latDegClean}°${latMin}'${latSec}"${latDir} ${lonDegClean}°${lonMin}'${lonSec}"${lonDir}`;
  };

  const handleCopyToClipboard = async () => {
    if (display) {
      try {
        await navigator.clipboard.writeText(display);
      } catch (err) {
        console.error("Failed to copy coordinate: ", err);
      }
    }
  };
  useEffect(() => {
    const mapEl = mapElement.current;
    if (!mapEl || !isOpen) return;

    if (!pointerMoveHandlerRef.current) {
      pointerMoveHandlerRef.current = async (
        event: HTMLArcgisMapElement["arcgisViewPointerMove"],
      ) => {
        const mapPoint = webMercatorUtils.webMercatorToGeographic(
          mapEl.toMap({ x: event.detail.x, y: event.detail.y }),
        ) as Point;

        await coordinateFormatter.load();
        setDisplay(await convertMapPoint(mapPoint));
      };
    }

    if (!clickHandlerRef.current) {
      clickHandlerRef.current = async (
        event: HTMLArcgisMapElement["arcgisViewClick"],
      ) => {
        const mapPoint = webMercatorUtils.webMercatorToGeographic(
          mapEl.toMap({ x: event.detail.x, y: event.detail.y }),
        ) as Point;
        graphicsLayer.current?.removeAll();
        const marker: PictureMarkerSymbol = new PictureMarkerSymbol({
          url: "pin.svg",
          height: 20,
          width: 20,
        });

        graphicsLayer.current?.add(
          new Graphic({ geometry: mapPoint, symbol: marker }),
        );
        await coordinateFormatter.load();
        setDisplay(await convertMapPoint(mapPoint));
      };
    }

    // Remove old listeners
    mapEl.removeEventListener(
      "arcgisViewPointerMove",
      pointerMoveHandlerRef.current,
    );
    mapEl.removeEventListener("arcgisViewClick", clickHandlerRef.current);

    // Add appropriate listener
    if (mode === "move") {
      mapEl.addEventListener(
        "arcgisViewPointerMove",
        pointerMoveHandlerRef.current,
      );
      graphicsLayer.current?.removeAll();
      setMapMode("identify");
    }
    if (mode === "click") {
      mapEl.addEventListener("arcgisViewClick", clickHandlerRef.current);
      mapEl.popupDisabled = true;
      setMapMode("coordinate");
    }

    return () => {
      mapEl.removeEventListener(
        "arcgisViewPointerMove",
        pointerMoveHandlerRef.current!,
      );
      mapEl.removeEventListener("arcgisViewClick", clickHandlerRef.current!);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapElement, isOpen, mode, convertMapPoint]);

useEffect(() => {
  if (!mapElement.current || initializedRef.current) return;

  mapElement.current.view.when(() => {
    const map = mapElement.current?.map;
    if (!map || initializedRef.current) return;

    graphicsLayer.current = new GraphicsLayer({
      id: "coordinate-graphics",
      listMode: "hide",
    });

    map.add(graphicsLayer.current);
    initializedRef.current = true;
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  useEffect(() => {
    if (!isOpen) {
      graphicsLayer.current?.removeAll();
      setMapMode("identify");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return {
    display,
    expanded,
    showSearch,
    showSettings,
    mode,
    formats,
    selectedFormat,
    validity,
    inputRef,
    handleShowSearch,
    handleChangeMode,
    handleShowSettings,
    handleFormatChange,
    handleSearchInput,
    handleSearchClick,
    handleCopyToClipboard,
  };
};
