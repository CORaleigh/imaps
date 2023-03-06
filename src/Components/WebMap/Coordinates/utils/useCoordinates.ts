import { useEffect, useRef, useState, useCallback } from "react";
import * as coordinateFormatter from "@arcgis/core/geometry/coordinateFormatter";
import * as projection from "@arcgis/core/geometry/projection";

import Point from "@arcgis/core/geometry/Point";
import PictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import { CoordinateProps } from "./CoordinateProps";
let moveHandler: IHandle;
let clickHandler: IHandle;
const marker: PictureMarkerSymbol = new PictureMarkerSymbol({
  url: "assets/pin.svg",
  height: 36,
  width: 36,
});
const layer: GraphicsLayer = new GraphicsLayer({ id: "coordinate-widget" });
const useCoordinates = (props: CoordinateProps) => {
  const loaded = useRef(false);
  const x = useRef<any>(null);
  const y = useRef<any>(null);
  const other = useRef<any>(null);
  const coordinateRef = useRef<any>(null);
  const [showSettings, setShowSettings] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const modeActionRef = useRef<any>(null);
  const noticeRef = useRef<any>(null);
  const formats = [
    { value: "dd", label: "Decimal Degrees" },
    { value: "dms", label: "Degrees Minutes Seconds" },
    { value: "spft", label: "Stateplane Feet" },
    { value: "usng", label: "US National Grid" },
    { value: "mgrs", label: "MGRS" },
    { value: "utm", label: "UTM" },
  ];

  const [selectedFormat, setSelectedFormat] = useState("dd");
  const formatRef = useRef("dd");
  const settingsClicked = useCallback((e: any) => {
    setShowSettings((prevSettings) => {
      return !prevSettings;
    });
  }, []);
  const searchClicked = useCallback((e: any) => {
    setShowSearch((prevSearch) => {
      return !prevSearch;
    });
  }, []);
  const modeClicked = useCallback((e: any) => {
    e.target.active = !e.target.active;
    if (e.target.active) {
      moveHandler?.remove();
      addClickHandler(props.view, props.clickActivated);
    } else {
      clickHandler?.remove();
      (props.view as __esri.MapView).popup.autoOpenEnabled = true;
      document.querySelector(".identify-widget")?.classList.add("active");
      addMoveHandler();
    }
  }, []);
  const formatChanged = useCallback(
    (e: any) => {
      console.log(e.target.value);
      setSelectedFormat(e.target.value);
      formatRef.current = e.target.value;
    },
    [formatRef]
  );
  const searchCoordinates = useCallback(async (e: any) => {
    if (!coordinateFormatter.isLoaded()) {
      await coordinateFormatter.load();
    }
    let point: __esri.Point = new Point();
    let valid = true;
    if (formatRef.current === "dd") {
      if (isFinite(y.current.value) && Math.abs(y.current.value) <= 90) {
        y.current.setAttribute("status", "valid");
      } else {
        valid = false;

        y.current.setAttribute("status", "invalid");
      }
      if (isFinite(x.current.value) && Math.abs(x.current.value) <= 180) {
        x.current.setAttribute("status", "valid");
      } else {
        valid = false;

        x.current.setAttribute("status", "invalid");
      }
      point = new Point({
        x: x.current.value,
        y: y.current.value,
        spatialReference: { wkid: 4326 },
      });
    }
    if (formatRef.current === "dms") {
      const statusX = validateDms(true, y.current.value);
      y.current.setAttribute("status", statusX);
      const statusY = validateDms(false, x.current.value);
      x.current.setAttribute("status", statusY);
      valid = statusX === "valid" && statusY === "valid";

      point = coordinateFormatter.fromLatitudeLongitude(
        `${y.current.value} ${x.current.value}`
      );
    }
    if (formatRef.current === "spft") {
      point = new Point({
        x: x.current.value,
        y: y.current.value,
        spatialReference: { wkid: 4326 },
      });
      point = projection.project(point, props.view.spatialReference) as Point;
    }
    if (formatRef.current === "usng") {
      point = coordinateFormatter.fromUsng(
        other.current.value,
        props.view.spatialReference
      );
    }
    if (formatRef.current === "mgrs") {
      point = coordinateFormatter.fromMgrs(
        other.current.value,
        props.view.spatialReference,
        "automatic"
      );
    }
    if (formatRef.current === "utm") {
      point = coordinateFormatter.fromUtm(
        other.current.value,
        props.view.spatialReference,
        "latitude-band-indicators"
      );
    }
    if (!(props.view.constraints.geometry as __esri.Polygon).contains(point)) {
      noticeRef.current?.setAttribute("open", true);
      setTimeout(() => {
        noticeRef.current?.removeAttribute("open");
      }, 3000);
    }
    if (valid) {
      if (!props.view.map.findLayerById("coordinate-widget")) {
        props.view.map.add(layer);
      }
      layer.removeAll();
      layer.add({
        geometry: point as __esri.Geometry,
        attributes: null,
        symbol: marker,
      } as any);
      props.view.goTo(point);
    }
  }, []);
  const validateDms = (latitude: boolean, value: string): string => {
    const regex = latitude
      ? /^((90[°|\s]\s*)(0{1,2}['|\s]\s*)(0{1,2}([.|,]0{1,20})?["|\s]\s*)|(([1-8]\d|\d)[°|\s]\s*)(([0-5]\d|\d)['|\s]\s*)(([0-5]\d|\d)([.|,]\d{1,20})?["|\s]\s*))$/gm
      : /^[-]((180[°|\s]\s*)(0{1,2}['|\s]\s*)(0{1,2}([.|,]0{1,20})?["|\s]\s*)|((1[0-7]\d|\d\d|\d)[°|\s]\s*)(([0-5]\d|\d)['|\s]\s*)(([0-5]\d|\d)([.|,]\d{1,20})?["|\s]\s*))/gm;
    return regex.test(`${value} `) ? "valid" : "invalid";
  };
  const displayCoordinates = (e: any) => {
    let point: __esri.Point;
    if (e.type === "point") {
      point = e;
    } else {
      point = props.view.toMap({ x: e.x, y: e.y });
    }

    const wgs84 = new Point({
      x: point.longitude,
      y: point.latitude,
      spatialReference: { wkid: 4326 },
    });
    if (formatRef.current === "dd") {
      let dd = coordinateFormatter
        .toLatitudeLongitude(wgs84, "dd", 7)
        .replaceAll("078.", "78.");
      let ddSplit = dd.split(" ");
      if (ddSplit[0].includes("S")) {
        ddSplit[0] = `-${ddSplit[0].replace("S", "")}`;
      }
      if (ddSplit[0].includes("N")) {
        ddSplit[0] = `${ddSplit[0].replace("N", "")}`;
      }
      if (ddSplit[1].includes("W")) {
        ddSplit[1] = `-${ddSplit[1].replace("W", "")}`;
      }
      if (ddSplit[1].includes("E")) {
        ddSplit[1] = `${ddSplit[1].replace("N", "")}`;
      }
      coordinateRef.current.innerHTML = ddSplit.join(" ");
    } else if (formatRef.current === "dms") {
      const dmsSplit = coordinateFormatter
        .toLatitudeLongitude(wgs84, "dms", 7)
        .split(" ");
      const dms = `${dmsSplit[0]}° ${dmsSplit[1]}' ${dmsSplit[2].replace(
        "N",
        '"'
      )} -${dmsSplit[3].substring(1)}° ${dmsSplit[4]}' ${dmsSplit[5].replace(
        "W",
        '"'
      )}`;

      coordinateRef.current.innerHTML = dms;
    } else if (formatRef.current === "usng") {
      coordinateRef.current.innerHTML = coordinateFormatter.toUsng(
        wgs84,
        5,
        true
      );
    } else if (formatRef.current === "mgrs") {
      coordinateRef.current.innerHTML = coordinateFormatter.toMgrs(
        wgs84,
        "automatic",
        5,
        true
      );
    } else if (formatRef.current === "utm") {
      coordinateRef.current.innerHTML = coordinateFormatter.toUtm(
        wgs84,
        "latitude-band-indicators",
        true
      );
    } else if (formatRef.current === "spft") {
      const spft = projection.project(point, { wkid: 2264 }) as Point;
      coordinateRef.current.innerHTML = `${spft.x.toString()} E, ${spft.y.toString()} N`;
    }
  };
  const addClickHandler = (view: __esri.MapView, clickActivated: Function) => {
    clickActivated(view);
    (props.view as __esri.MapView).popup.autoOpenEnabled = false;
    document.querySelector(".identify-widget")?.classList.remove("active");
    clickHandler = (props.view as __esri.MapView).on("click", (e: any) => {
      displayCoordinates(e);
    });
  };
  const addMoveHandler = async () => {
    if (!coordinateFormatter.isLoaded()) {
      await coordinateFormatter.load();
    }
    displayCoordinates(props.view.extent.center);
    moveHandler = (props.view as __esri.MapView).on(
      "pointer-move",
      (e: any) => {
        displayCoordinates(e);
      }
    );
  };

  useEffect(() => {
    if (!loaded.current && props.view) {
      loaded.current = true;
      if (props.expand) {
        if (!props.expand.hasHandles()) {
          (props.expand as __esri.Expand).watch("expanded", (expanded) => {
            if (!expanded) {
              moveHandler?.remove();
              clickHandler?.remove();
            } else {
              if (modeActionRef.current.getAttribute("active")) {
                addMoveHandler();
              } else {
                addClickHandler(props.view, props.clickActivated);
              }
            }
          });
        }
      }
      addMoveHandler();

      return () => {
        // clean up the map view
        // if (view.current) {
        //   console.log('destroy')
        //   view.current.destroy();
        //   view.current = null;
        // }
      };
    }
  }, []);

  return {
    loaded,
    settingsClicked,
    showSettings,
    formats,
    formatChanged,
    searchClicked,
    showSearch,
    selectedFormat,
    searchCoordinates,
    x,
    y,
    other,
    modeClicked,
    coordinateRef,
    modeActionRef,
    noticeRef,
  };
};

export default useCoordinates;
