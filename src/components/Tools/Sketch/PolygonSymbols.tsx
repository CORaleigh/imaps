import Color from "@arcgis/core/Color";
import React, { useEffect, useState } from "react";
import ColorButton from "./ColorButton";
import SizeSlider from "./SizeSlider";
interface Props {
  polygonSymbolUpdated: Function;
}
function PolygonSymbols(props: Props) {
  const [fillColor, setFillColor] = useState<Color>(
    new Color([255, 0, 0, 0.5])
  );
  const [outlineColor, setOutlineColor] = useState<Color>(
    new Color([255, 0, 0, 1])
  );
  const [width, setWidth] = useState(2);
  useEffect(() => {
    if (fillColor && outlineColor && width) {
      props.polygonSymbolUpdated(fillColor, outlineColor, width);
    }
  }, [fillColor, outlineColor, width]);
  return (
    <div id="polygon-symbols">
      <div id="polygon-preview" className="preview"></div>
      <ColorButton
        id="polygon-fill"
        color={fillColor.toRgba()}
        label="Fill"
        colorSet={(c: any) => {
          setFillColor(c);
          props.polygonSymbolUpdated(c, outlineColor, width);
        }}
      ></ColorButton>
      <ColorButton
        id="polygon-outline"
        color={outlineColor.toRgba()}
        label="Outline"
        colorSet={(c: any) => {
          setOutlineColor(c);
          props.polygonSymbolUpdated(fillColor, c, width);
        }}
      ></ColorButton>
      <SizeSlider
        label="Outline Width"
        min={0.1}
        max={18}
        value={width}
        sizeSet={(size: any) => {
          setWidth(size);
          props.polygonSymbolUpdated(fillColor, outlineColor, width);
        }}
      ></SizeSlider>
    </div>
  );
}

export default React.memo(PolygonSymbols);
