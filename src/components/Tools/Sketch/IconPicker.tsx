import { CalciteIcon, CalciteLabel } from "@esri/calcite-components-react";
import React from "react";
import "./Sketch.css";
interface Props {
  symbol: any;
  pickerClicked: () => void;
}
function IconPicker(props: Props) {
  return (
    <div id="icon-picker">
      <div id="icon-preview" className="preview"></div>
      <CalciteLabel alignment="start" scale="m" layout="default">
        <button
          className="change-symbol-trigger"
          type="button"
          onClick={() => {
            props.pickerClicked();
          }}
        >
          <div className="container">
            {props.symbol && (
              <div className="icon-symbol">
                <img
                  src={`${
                    props.symbol.url
                  }${props.symbol.thumbnail.href.replace(".", "")}`}
                  alt={props.symbol.title}
                  width={50}
                  height={50}
                />
              </div>
            )}

            <div className="icon-label">{props.symbol.title}</div>
            <CalciteIcon icon="chevron-right"></CalciteIcon>
          </div>
        </button>
      </CalciteLabel>
    </div>
  );
}

export default React.memo(IconPicker);
