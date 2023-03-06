import {
  CalciteInput,
  CalciteLabel,
  CalciteSlider,
} from "@esri/calcite-components-react";
import { useEffect, useState } from "react";
import React from "react";
interface Props {
  label: string;
  min: number;
  max: number;
  value: number;
  sizeSet: Function;
}
function SizeSlider(props: Props) {
  const [value, setValue] = useState<any>();
  useEffect(() => {
    setValue(props.value);
  }, [props.value]);
  return (
    <CalciteLabel>
      {props.label}
      <div className="slider-input">
        <CalciteSlider
          max={props.max}
          min={props.min}
          value={value}
          onCalciteSliderInput={(e) => {
            setValue(e.target.value);
            props.sizeSet(e.target.value);
          }}
        ></CalciteSlider>
        <CalciteInput
          type="number"
          numberButtonType="none"
          min={props.min}
          max={props.max}
          value={value}
          suffixText="px"
          onCalciteInputInput={(e) => {
            setValue(parseFloat(e.target.value));
            props.sizeSet(parseFloat(e.target.value));
          }}
        ></CalciteInput>
      </div>
    </CalciteLabel>
  );
}
export default React.memo(SizeSlider);
