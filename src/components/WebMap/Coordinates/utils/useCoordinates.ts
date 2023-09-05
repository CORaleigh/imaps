import { useEffect, useRef, useState, useCallback } from "react";
import * as coordinateFormatter from "@arcgis/core/geometry/coordinateFormatter";
import * as projection from "@arcgis/core/geometry/projection";

import Point from "@arcgis/core/geometry/Point";
import PictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import { CoordinateFormats, CoordinateProps } from "./CoordinateProps";
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
  const coordInput = useRef<HTMLCalciteInputElement>(null);
  const coordinateRef = useRef<any>(null);
  const [showSettings, setShowSettings] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const modeActionRef = useRef<any>(null);
  const noticeRef = useRef<any>(null);
  const formats: CoordinateFormats[] = [
    { value: "dd", label: "Decimal Degrees", placeholder: '35.7582196 -78.8079653'},
    { value: "dms", label: "Degrees Minutes Seconds", placeholder: `35° 45' 29.7116777"N 78° 48' 31.524W`},
    { value: "spft", label: "Stateplane Feet", placeholder: '731166.165 2056872.973' },
    { value: "usng", label: "US National Grid", placeholder: '17S PV 98178 59368'}
  ];

  let currentPoint: Point | null = null;

  const [selectedFormat, setSelectedFormat] = useState<CoordinateFormats>(formats[0]);
  const formatRef = useRef<CoordinateFormats>(formats[0]);
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
    layer.removeAll();
    if (e.target.active) {
      moveHandler?.remove();
      addClickHandler(props.view, props.clickActivated);
    } else {
      clickHandler?.remove();
      props.view.popupEnabled = true;
      document.querySelector(".identify-widget")?.classList.add("active");
      addMoveHandler();
    }
  }, []);
  const formatChanged = useCallback(
    (e: any) => {
      if (coordInput.current) {
        coordInput.current.value = '';
      }
      const format = formats.find(format => {
        return format.value === e.target.value;
      });
      if (format) {
          setSelectedFormat(format);
          formatRef.current = format;
          console.log(formatRef.current.value);

      }
      displayCoordinates(currentPoint as any);
    },
    [formatRef]
  );
  const coordinateInputChanged = useCallback(
    (e: any) => {
      if (e.currentTarget.value === '') {
        const layer = props.view.map.findLayerById("coordinate-widget");
        if (layer) {
          (layer as GraphicsLayer).removeAll();
        }
      }
    },
    []
  );
  const searchCoordinates = useCallback(async (e: any) => {
    if (coordInput.current?.value === '') {
      coordInput.current?.setAttribute('status', 'invalid');   
      return;   
    }
    if (!coordinateFormatter.isLoaded()) {
      await coordinateFormatter.load();
    }
    if (!projection.isLoaded()) {
      await projection.load();
    }    
    let point: __esri.Point = new Point();
    console.log(formatRef.current.value);
    if (formatRef.current.value === "dd") {
      let coords = coordInput.current?.value.replace(',', ' ').split(' ');
      if (coords?.length !== 2) {
        coords = coordInput.current?.value.split(', ');
      } 
      if (coords?.length === 2) {
        let lon = !isNaN(parseFloat(coords[1])) && parseFloat(coords[1]) < 0 ? parseFloat(coords[1]) :  !isNaN(parseFloat(coords[0])) && parseFloat(coords[0]) < 0 ? parseFloat(coords[0]) : NaN;
        let lat = !isNaN(parseFloat(coords[0])) && parseFloat(coords[0]) > 0 ? parseFloat(coords[0]) :  !isNaN(parseFloat(coords[1])) && parseFloat(coords[1]) > 0 ? parseFloat(coords[1]) : NaN;
        if (isNaN(lon) || isNaN(lat)) {
          coordInput.current?.setAttribute('status', 'invalid');
        } else {
          point = new Point({
            x: lon,
            y: lat,
            spatialReference: { wkid: 4326 },
          });
          coordInput.current?.setAttribute('status', 'valid');
        }
      }
    }
    if (formatRef.current.value === "dms") {
      if (coordInput.current) {
        point = coordinateFormatter.fromLatitudeLongitude(
          coordInput.current?.value.replace(/\s\s+/g, ' ')
        );
        if (!point) {
          coordInput.current?.setAttribute('status', 'invalid');
        }
      }
    }
    if (formatRef.current.value === "spft") {
      const value = coordInput.current?.value.replace(/\s\s+/g, ' ');
      let coords = value?.split(' ');
      if (coords?.length !== 2) {
        coords = value?.split(',');
        if (coords?.length !== 2) {
          coordInput.current?.setAttribute('status', 'invalid');
          return;
        }
      }
      const x = parseFloat(coords[1]);
      const y = parseFloat(coords[2]);
      if (isNaN(x) || isNaN(y)) {
        coordInput.current?.setAttribute('status', 'invalid');
        return;
      }
      point = new Point({
        x: x,
        y: y,
        spatialReference: { wkid: 4326 },
      });
      point = projection.project(point, props.view.spatialReference) as Point;
    }
    if (coordInput.current) {
      if (formatRef.current.value === "usng") {
        point = coordinateFormatter.fromUsng(
          coordInput.current.value
        );
      }
    }
   
    if (!(props.view.constraints.geometry as __esri.Polygon).contains(point)) {
      noticeRef.current?.setAttribute("open", true);
      setTimeout(() => {
        noticeRef.current?.removeAttribute("open");
      }, 3000);
    }
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
    
    

  }, []);
  const validateDms = (latitude: boolean, value: string): string => {
    const regex = latitude
      ? /^((90[°|\s]\s*)(0{1,2}['|\s]\s*)(0{1,2}([.|,]0{1,20})?["|\s]\s*)|(([1-8]\d|\d)[°|\s]\s*)(([0-5]\d|\d)['|\s]\s*)(([0-5]\d|\d)([.|,]\d{1,20})?["|\s]\s*))$/gm
      : /^[-]((180[°|\s]\s*)(0{1,2}['|\s]\s*)(0{1,2}([.|,]0{1,20})?["|\s]\s*)|((1[0-7]\d|\d\d|\d)[°|\s]\s*)(([0-5]\d|\d)['|\s]\s*)(([0-5]\d|\d)([.|,]\d{1,20})?["|\s]\s*))/gm;
    return regex.test(`${value} `) ? "valid" : "invalid";
  };
  const displayCoordinates = async (e: any) => {
    if (!coordinateFormatter.isLoaded()) {
      await coordinateFormatter.load();
    }
    if (!projection.isLoaded()) {
      await projection.load();
    }        
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
    console.log(formatRef.current.value);

    if (formatRef.current.value === "dd") {
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
    } else if (formatRef.current.value === "dms") {
      const dmsSplit = coordinateFormatter
        .toLatitudeLongitude(wgs84, "dms", 7)
        .split(" ");
      const dms = `${dmsSplit[0]}° ${dmsSplit[1]}' ${dmsSplit[2].replace('N', `"N`)} ${dmsSplit[3].substring(1)}° ${dmsSplit[4]}' ${dmsSplit[5].replace('W', `"W`)}`;

      coordinateRef.current.innerHTML = dms;
    } else if (formatRef.current.value === "usng") {
      coordinateRef.current.innerHTML = coordinateFormatter.toUsng(
        wgs84,
        5,
        true
      );
    } else if (formatRef.current.value === "spft") {
      const spft = projection.project(point, { wkid: 2264 }) as Point;
      coordinateRef.current.innerHTML = `${spft.y.toFixed(3)}N ${spft.x.toFixed(3)}E`;
    }
  };
  const addClickHandler = (view: __esri.MapView, clickActivated: Function) => {
    clickActivated(view);
    props.view.popupEnabled = false;
    document.querySelector(".identify-widget")?.classList.remove("active");
    clickHandler = (props.view as __esri.MapView).on("click", (e: any) => {
      if (!props.view.map.findLayerById("coordinate-widget")) {
        props.view.map.add(layer);
      }      
      layer.removeAll();
      layer.add({
        geometry: e.mapPoint,
        attributes: null,
        symbol: marker,
      } as any);
      currentPoint = e;
      displayCoordinates(e);
    });
  };
  const addMoveHandler = async () => {
    if (!coordinateFormatter.isLoaded()) {
      await coordinateFormatter.load();
    }
    currentPoint = props.view.extent.center;
    displayCoordinates(props.view.extent.center);
    moveHandler = (props.view as __esri.MapView).on(
      "pointer-move",
      (e: any) => {
        currentPoint = e;
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
              layer.removeAll();
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
    coordInput,
    modeClicked,
    coordinateRef,
    modeActionRef,
    noticeRef,
    coordinateInputChanged
  };
};

export default useCoordinates;
