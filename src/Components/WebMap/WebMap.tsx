import React from "react";
import "./WebMap.css";
import useWebMap from "./utils/useWebMap";
import { WebMapProps } from "./utils/WebMapProps";

function WebMap(args: WebMapProps) {
  const { ref } = useWebMap(args);
  return <div className="mapDiv" ref={ref}></div>;
}

export default React.memo(WebMap);
