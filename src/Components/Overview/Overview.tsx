/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React, { useEffect, useRef } from 'react';

import './Overview.scss';
import { configureOverview, createOverview } from './utils/overview';
export const Panel = (props: any) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (props.view && props.expand) {
      const overview = createOverview(props.view);
      overview.container = ref.current as HTMLDivElement;
      (props.expand as __esri.Expand).content = ref.current as HTMLDivElement;
      overview.when().then(() => {
        configureOverview(overview, props.view);
      });
    }

    return () => {
      console.log('clean up');
    };
  }, []); // only after initial render

  return <div className="overview-map" ref={ref}></div>;
};
export default Panel;
