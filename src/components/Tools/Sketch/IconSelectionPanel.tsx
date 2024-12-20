import {
  CalciteBlock,
  CalciteFlow,
  CalciteFlowItem,
} from '@esri/calcite-components-react';
import React, { useEffect, useState } from 'react';
import './Sketch.css';
import { SymbolItem } from './PointSymbols';
interface Props {
  symbols: SymbolItem[];
  backClicked: () => void;
  iconSelected: (icon: SymbolItem) => void;
}
function IconSelectionPanel(props: Props) {
  const [symbols, setSymbols] = useState<any[]>([]);
  useEffect(() => {
    if (symbols && props.symbols) {
      setSymbols(props.symbols);
    }
  }, []);

  return (
    <div id="icon-selection">
      <CalciteFlow>
        <CalciteFlowItem></CalciteFlowItem>
        <CalciteFlowItem
          heading="Change Symbol"
          onCalciteFlowItemBack={() => {
            props.backClicked();
          }}
        >
          <CalciteBlock heading={''}>
            <div className="palette">
              {symbols &&
                symbols.map((symbol: SymbolItem, i: number) => {
                  return (
                    <img
                      onClick={() => {
                        props.iconSelected(symbol);
                        props.backClicked();
                      }}
                      className="item"
                      key={`icon-${i}`}
                      alt={symbol.title}
                      src={`${symbol.url}${symbol.thumbnail.href.replace(
                        '.',
                        '',
                      )}`}
                    ></img>
                  );
                })}
            </div>
          </CalciteBlock>
        </CalciteFlowItem>
      </CalciteFlow>
    </div>
  );
}

export default React.memo(IconSelectionPanel);
