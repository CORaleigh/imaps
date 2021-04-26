/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useRef, useState } from 'react';
import LayerList from '@arcgis/core/widgets/LayerList';
import { filterLayers, layerListItemCreated } from './utils/layers';
import './Layers.scss';
export const Layers = (props: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLCalciteInputElement>(null);
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    console.log(props.active);
  }, [props.active]);
  useEffect(() => {
    const layerList = new LayerList({
      container: ref.current as HTMLDivElement,
      view: props.view,
      listItemCreatedFunction: layerListItemCreated,
    });

    layerList.when(() => {
      const groups = layerList.view.map.allLayers.filter((layer) => {
        return layer.type === 'group';
      });
      groups.forEach((group) => {
        (group as __esri.GroupLayer).layers.forEach((layer) => {
          layer.watch('visible', (visible) => {
            if (visible) {
              group.visible = visible;
            }
          });
        });
      });
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
    <div className={`panel ${props.show ? '' : 'esri-hidden'}`}>
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
