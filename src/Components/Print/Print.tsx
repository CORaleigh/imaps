/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useRef } from 'react';
import PrintWidget from '@arcgis/core/widgets/Print';
export const Print = (props: any) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    new PrintWidget({
      container: ref.current as HTMLDivElement,
      view: props.view,
    });
    return () => {
      console.log('cleanup');
    };
  }, [props.view]); // only after initial render
  return <div ref={ref}></div>;
};
export default Print;
