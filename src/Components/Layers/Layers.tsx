/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useRef } from 'react';
import LayerList from '@arcgis/core/widgets/LayerList';
import { filterLayers, layerListItemCreated } from './utils/layers';
import './Layers.scss';
export const Layers = (props: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLCalciteInputElement>(null);
  useEffect(() => {
    const layerList = new LayerList({
      container: ref.current as HTMLDivElement,
      view: props.view,
      listItemCreatedFunction: layerListItemCreated,
    });
    input.current?.addEventListener('calciteInputInput', (event: any) => {
      filterLayers(event.target.value, layerList as LayerList);
    });
    return () => {
      input.current?.removeEventListener('calciteInputInput', (event: any) => {
        filterLayers(event.target.value, layerList as LayerList);
      });
      layerList && layerList.destroy();
    };
  }, [props.view]); // only after initial render
  return (
    <div className="panel">
      <div className="row sticky">
        <calcite-input
          ref={input}
          clearable
          placeholder="Filter by layer name"
          scale="m"
          id="layerSearch"
        ></calcite-input>
        <calcite-action icon="viewHide" scale="m"></calcite-action>
      </div>
      <div ref={ref}></div>
    </div>
  );
};

export default Layers;
