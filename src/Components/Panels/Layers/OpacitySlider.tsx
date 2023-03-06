import { CalciteSlider } from "@esri/calcite-components-react";
import React, { useEffect, useState } from "react";
interface Props {
  layer: __esri.Layer;
  value: number;
}
export const OpacitySlider = (props: Props) => {
  // const layer = useRef<__esri.Layer>();
  const [layer, setLayer] = useState<__esri.Layer>();
  useEffect(() => {
    if (props.layer) {
      setLayer(props.layer);
    }
  }, [props.layer]);
  return (
    <CalciteSlider
      value={props.value}
      max={1}
      min={0}
      step={0.05}
      onCalciteSliderInput={(e) => {
        requestAnimationFrame(() => {
          if (layer) {
            layer.opacity = e.target.value as number;
          }
        });
      }}
    ></CalciteSlider>
  );
};
export default OpacitySlider;
