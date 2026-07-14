import React from "react";
import "@esri/calcite-components/components/calcite-slider";
import type Layer from "@arcgis/core/layers/Layer";
interface Props {
  layer: Layer;
  value: number;
}
export const OpacitySlider: React.FC<Props> = ({ layer, value }) => {
  return (
    <calcite-label scale="s">
      Transparency
    <calcite-slider
      value={value}
      max={1}
      min={0}
      step={0.05}
      oncalciteSliderInput={(
        event: HTMLCalciteSliderElement["calciteSliderInput"]
      ) => {
        layer.opacity = event.target.value as number;
      }}
      maxLabel="100%"
      minLabel="0%"
    ></calcite-slider>
    </calcite-label>
  );
};
export default OpacitySlider;
