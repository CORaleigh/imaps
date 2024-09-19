import Feature from '@arcgis/core/widgets/Feature';
import React from 'react';
import { useEffect, useRef } from 'react';
interface Props {
  key: number;
  feature: __esri.Graphic;
}
export const ServiceLayer = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (props.feature) {
      new Feature({
        container: ref.current as HTMLDivElement,
        graphic: props.feature,
      });
    }
  }, [props.feature]);
  return <div ref={ref}></div>;
};
export default ServiceLayer;
