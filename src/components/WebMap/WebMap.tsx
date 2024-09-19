import React from 'react';
import './WebMap.css';
import useWebMap from './utils/useWebMap';
import { WebMapProps } from './utils/WebMapProps';

function WebMap(props: WebMapProps) {
  const { ref } = useWebMap(props);
  return <div className="mapDiv" ref={ref}></div>;
}

export default React.memo(WebMap);
