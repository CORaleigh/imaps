import Feature from "@arcgis/core/widgets/Feature";
import React from "react";
import { useEffect, useRef } from "react";

export const ServiceLayer = (args: any) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (args.feature) {
      new Feature({
        container: ref.current as HTMLDivElement,
        graphic: args.feature,
      });
    }
  }, [args.feature]);
  return <div ref={ref}></div>;
};
export default ServiceLayer;
