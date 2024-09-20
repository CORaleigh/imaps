import Color from '@arcgis/core/Color';
import {
  CalciteInput,
  CalciteLabel,
  CalciteSwitch,
} from '@esri/calcite-components-react';
import React, { useState } from 'react';
import ColorButton from './ColorButton';
interface Props {
  textSymbolUpdated: (
    fontSize: number,
    fontColor: Color,
    haloSize: number,
    haloColor: Color,
    showHalo: boolean,
    text: string,
  ) => void;
}
function TextSymbols(props: Props) {
  const [fontColor, setFontColor] = useState<Color>(new Color([255, 0, 0, 1]));
  const [fontSize, setFontSize] = useState(10);
  const [showHalo, setShowHalo] = useState(false);
  const [haloSize, setHaloSize] = useState(1);
  const [haloColor, setHaloColor] = useState<Color>(
    new Color([255, 255, 255, 1]),
  );
  const [textContent, setTextContent] = useState('');

  return (
    <div id="text-symbols">
      <CalciteLabel>
        Text
        <CalciteInput
          type="textarea"
          scale="m"
          value={textContent}
          onCalciteInputInput={(e) => {
            setTextContent(e.target.value);
            requestAnimationFrame(() => {
              props.textSymbolUpdated(
                fontSize,
                fontColor,
                haloSize,
                haloColor,
                showHalo,
                e.target.value,
              );
            });
          }}
          onCalciteInputChange={(e) => {}}
        ></CalciteInput>
      </CalciteLabel>
      <ColorButton
        id="font"
        label="Font"
        color={fontColor.toRgba()}
        hideTransparency
        colorSet={(c: Color) => {
          setFontColor(c);
          props.textSymbolUpdated(
            fontSize,
            c,
            haloSize,
            haloColor,
            showHalo,
            textContent,
          );
        }}
      ></ColorButton>
      <CalciteLabel>
        Font Size
        <CalciteInput
          type="number"
          min={5}
          max={125}
          value={fontSize.toString()}
          onCalciteInputInput={(e) => {
            setFontSize(parseFloat(e.target.value));
            props.textSymbolUpdated(
              fontSize,
              fontColor,
              haloSize,
              haloColor,
              showHalo,
              textContent,
            );
          }}
        ></CalciteInput>
      </CalciteLabel>
      <CalciteLabel layout="inline">
        Halo
        <CalciteSwitch
          checked={showHalo ? true : undefined}
          onCalciteSwitchChange={(e) => {
            setShowHalo(e.target.checked);
            props.textSymbolUpdated(
              fontSize,
              fontColor,
              haloSize,
              haloColor,
              showHalo,
              textContent,
            );
          }}
        ></CalciteSwitch>
      </CalciteLabel>
      <div id="halo" hidden={showHalo ? undefined : true}>
        <ColorButton
          id="halo"
          label=""
          color={haloColor.toRgba()}
          hideTransparency
          colorSet={(c: Color) => {
            setHaloColor(c);
            props.textSymbolUpdated(
              fontSize,
              fontColor,
              haloSize,
              c,
              showHalo,
              textContent,
            );
          }}
        ></ColorButton>
        <CalciteLabel>
          Size
          <CalciteInput
            type="number"
            min={1}
            max={10}
            value={haloSize.toString()}
            onCalciteInputInput={(e) => {
              setHaloSize(parseFloat(e.target.value));
              props.textSymbolUpdated(
                fontSize,
                fontColor,
                haloSize,
                haloColor,
                showHalo,
                textContent,
              );
            }}
          ></CalciteInput>
        </CalciteLabel>
      </div>
    </div>
  );
}
export default React.memo(TextSymbols);
