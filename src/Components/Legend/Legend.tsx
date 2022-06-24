/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useRef } from 'react';
import LegendWidget from '@arcgis/core/widgets/Legend';

export const Legend = (props: any) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const legend = new LegendWidget({
      container: ref.current as HTMLDivElement,
      view: props.view,
    });
    return () => {
      legend && legend.destroy();
    };
  }, [props.view]); // only after initial render
  return <div ref={ref}></div>;
};
export default Legend;
