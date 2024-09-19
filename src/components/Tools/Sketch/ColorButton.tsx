import './Sketch.css';
import Color from '@arcgis/core/Color';
import {
  CalciteAction,
  CalciteButton,
  CalciteColorPicker,
  CalciteColorPickerSwatch,
  CalciteInput,
  CalciteLabel,
  CalcitePanel,
  CalcitePopover,
  CalciteSlider,
} from '@esri/calcite-components-react';
import React, { useEffect, useRef, useState } from 'react';

interface Props {
  id: string;
  label: string;
  color: number[];
  colorSet: (c: any) => void;
  hideTransparency?: boolean;
}
function ColorButton(props: Props) {
  const popover = useRef<HTMLCalcitePopoverElement>(null);
  const picker = useRef<HTMLCalciteColorPickerElement>(null);
  const [color, setColor] = useState<Color>();
  const [transparency, setTransparency] = useState<any>(0);
  useEffect(() => {
    if (!color && props.color) {
      setColor(new Color(props.color));
      setTransparency((1 - props.color[3]) * 100);
    }
  }, [props.color]);

  return (
    <div id={props.id}>
      <CalciteLabel>
        {props.label} Color
        <CalciteButton
          id={`${props.id}-popover-button`}
          width="half"
          iconEnd="pencil"
          kind="neutral"
          appearance="outline"
        >
          <CalciteColorPickerSwatch
            color={color?.toHex()}
          ></CalciteColorPickerSwatch>
        </CalciteButton>
      </CalciteLabel>
      <CalcitePopover
        ref={popover}
        overlayPositioning="fixed"
        placement="top-start"
        label={''}
        referenceElement={`${props.id}-popover-button`}
      >
        <CalcitePanel heading="Color">
          <CalciteAction
            icon="x"
            text=""
            slot="header-actions-end"
            onClick={() => {
              if (popover.current) {
                popover.current.open = !popover.current.open;
              }
              const c = new Color(color);
              c.a = 1 - transparency / 100;
              props.colorSet(c);
            }}
          ></CalciteAction>
          <CalciteColorPicker
            ref={picker}
            hideSaved
            hideHex
            hideChannels
            value={color ? color.toHex() : '#FF0000'}
            onCalciteColorPickerInput={(e) =>
              setColor(new Color(e.target.value))
            }
          ></CalciteColorPicker>
        </CalcitePanel>
        {/* <CalciteButton
          width="full"
          onClick={() => {
            popover.current?.toggle();
            const c = new Color(color);
            c.a = 1 - transparency / 100;
            props.colorSet(c);
          }}
        >
          Done
        </CalciteButton> */}
      </CalcitePopover>
      {!props.hideTransparency && (
        <CalciteLabel>
          {props.label} Transparency
          <div className="slider-input">
            <CalciteSlider
              max={100}
              min={0}
              value={transparency}
              onCalciteSliderInput={(e) => {
                let value: number = e.target.value as number;
                if (value > 100) {
                  value = 100;
                }
                if (value < 0) {
                  value = 0;
                }
                setTransparency(value);
                const c = new Color(color);
                c.a = 1 - transparency / 100;
                props.colorSet(c);
              }}
            ></CalciteSlider>
            <CalciteInput
              max={100}
              min={0}
              type="number"
              numberButtonType="none"
              suffixText="%"
              value={transparency}
              onCalciteInputInput={(e) => {
                let value: number = parseInt(e.target.value);
                if (value > 100) {
                  value = 100;
                }
                if (value < 0) {
                  value = 0;
                }

                setTransparency(value);
                const c = new Color(color);
                c.a = 1 - transparency / 100;
                props.colorSet(c);
              }}
            ></CalciteInput>
          </div>
        </CalciteLabel>
      )}
    </div>
  );
}

export default React.memo(ColorButton);
