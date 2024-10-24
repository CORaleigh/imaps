import '@esri/calcite-components/dist/components/calcite-input';
import '@esri/calcite-components/dist/components/calcite-label';
import '@esri/calcite-components/dist/components/calcite-panel';

import {
  CalciteInput,
  CalciteLabel,
  CalcitePanel,
} from '@esri/calcite-components-react';
import React, { useEffect, useState } from 'react';
import { getSymbols } from './utils/sketch';
import IconPicker from './IconPicker';
import IconSelectionPanel from './IconSelectionPanel';
import ColorButton from './ColorButton';
import Color from '@arcgis/core/Color';
import { CalciteInputCustomEvent } from '@esri/calcite-components';
interface Props {
  pointSymbolUpdated: (symbol: SymbolItem, c: Color, pointSize: number) => void;
}
export interface SymbolItem {
  name: string;
  title: string;
  itemType: string;
  dimensionality: string[];
  category: string;
  tags: string[]; // Array of strings for the tags
  formats: string[];
  cimRef: string;
  thumbnail: { href: string};
  url: string;
}

function PointSymbols(props: Props) {
  const [symbols, setSymbols] = useState<SymbolItem[]>([]);
  const [symbol, setSymbol] = useState<SymbolItem>(symbols[0]);
  const [pointSize, setPointSize] = useState(16);

  const url = 'https://www.arcgis.com/sharing/rest/content/items/';
  const ids = [
    'a63b3a4631ae41d4a1bc3ba6d9c85bfe',
    '70ccf6bcbd304773a164be896e76edd3',
  ];

  const [activeFlow, setActiveFlow] = useState('main');
  const [pointColor, setPointColor] = useState<Color>(
    new Color([255, 0, 0, 1]),
  );

  useEffect(() => {
    getSymbols(ids, url).then((items: SymbolItem[]) => {
      setSymbols(items as SymbolItem[]);
      if (items.length) {
        setSymbol(items[0]);
        props.pointSymbolUpdated(items[0], pointColor, pointSize);
      }
    });
  }, []);
  return (
    <div id="point-symbols">
      {symbols.length && (
        <div>
          {activeFlow === 'main' && (
            <CalcitePanel>
              <IconPicker
                pickerClicked={() => setActiveFlow('icon')}
                symbol={symbol}
              ></IconPicker>
              <ColorButton
                id="point"
                label="Point"
                color={pointColor.toRgba()}
                colorSet={(c: Color) => {
                  setPointColor(c);
                  props.pointSymbolUpdated(symbol, c, pointSize);
                }}
              ></ColorButton>
              <CalciteLabel>
                Size
                <CalciteInput
                  type="number"
                  min={6}
                  max={72}
                  value={pointSize.toString()}
                  onCalciteInputChange={(e: CalciteInputCustomEvent<void>) => {
                    setPointSize(parseFloat(e.target.value));
                    props.pointSymbolUpdated(
                      symbol,
                      pointColor,
                      parseFloat(e.target.value),
                    );
                  }}
                ></CalciteInput>
              </CalciteLabel>
            </CalcitePanel>
          )}
          {activeFlow === 'icon' && (
            <IconSelectionPanel
              iconSelected={(icon: SymbolItem) => {
                setSymbol(icon);
                props.pointSymbolUpdated(icon, pointColor, pointSize);
              }}
              backClicked={() => setActiveFlow('main')}
              symbols={symbols}
            ></IconSelectionPanel>
          )}
        </div>
      )}
    </div>
  );
}

export default React.memo(PointSymbols);
