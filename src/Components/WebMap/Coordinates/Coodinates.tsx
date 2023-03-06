import {
  CalciteAction,
  CalciteTooltip,
  CalciteButton,
  CalciteInput,
  CalciteInputMessage,
  CalciteLabel,
  CalciteNotice,
  CalciteOption,
  CalciteSelect,
} from "@esri/calcite-components-react";
import React from "react";
import "./Coordinates.css";
import { CoordinateProps } from "./utils/CoordinateProps";
import useCoordinates from "./utils/useCoordinates";

function Coordinates(props: CoordinateProps) {
  const {
    loaded,
    settingsClicked,
    showSettings,
    formats,
    formatChanged,
    searchClicked,
    showSearch,
    selectedFormat,
    searchCoordinates,
    x,
    y,
    other,
    modeClicked,
    coordinateRef,
    modeActionRef,
    noticeRef,
  } = useCoordinates(props);
  return (
    <div id="coordinatesWidget">
      <CalciteNotice scale="s" ref={noticeRef} kind="danger" closable>
        <div slot="message">Location outside of county</div>
      </CalciteNotice>

      <div hidden={showSettings ? undefined : true}>
        <CalciteSelect
          scale="s"
          label="Coordinate Systems"
          onCalciteSelectChange={formatChanged}
        >
          {formats.map((format) => {
            return (
              <CalciteOption key={format.value} value={format.value}>
                {format.label}
              </CalciteOption>
            );
          })}
        </CalciteSelect>
      </div>
      <div hidden={showSearch ? undefined : true}>
        <CalciteLabel scale="s">
          {selectedFormat === "dd"
            ? "Latitude"
            : selectedFormat === "spft"
            ? "Northing"
            : selectedFormat === "dms"
            ? "Latitude"
            : ""}
          <CalciteInput
            scale="s"
            ref={y}
            hidden={
              ["dd", "spft", "dms"].includes(selectedFormat) ? undefined : true
            }
            id="ycoord"
            placeholder={
              selectedFormat === "dd"
                ? "35.7582196"
                : selectedFormat === "spft"
                ? "731166.165"
                : selectedFormat === "dms"
                ? `35° 45' 29.7116777"`
                : ""
            }
          ></CalciteInput>
          <CalciteInputMessage
            hidden={
              y.current?.getAttribute("status") === "invalid" ? undefined : true
            }
            status="invalid"
          >
            Value is not valid
          </CalciteInputMessage>
        </CalciteLabel>
        <CalciteLabel scale="s">
          {selectedFormat === "dd"
            ? "Longitude"
            : selectedFormat === "spft"
            ? "Easting"
            : selectedFormat === "dms"
            ? "Longitude"
            : ""}
          <CalciteInput
            scale="s"
            ref={x}
            hidden={
              ["dd", "spft", "dms"].includes(selectedFormat) ? undefined : true
            }
            id="xcoord"
            placeholder={
              selectedFormat === "dd"
                ? "-78.8079653"
                : selectedFormat === "spft"
                ? "2056872.973"
                : selectedFormat === "dms"
                ? `-78° 48' 31.524"`
                : ""
            }
          ></CalciteInput>
          <CalciteInputMessage
            hidden={
              x.current?.getAttribute("status") === "invalid" ? undefined : true
            }
            status="invalid"
          >
            Value is not valid
          </CalciteInputMessage>
        </CalciteLabel>
        <CalciteInput
          scale="s"
          ref={other}
          hidden={
            ["dd", "spft", "dms"].includes(selectedFormat) ? true : undefined
          }
          id="othercoord"
          placeholder={
            selectedFormat === "usng"
              ? "17S PV 98178 59368"
              : selectedFormat === "mrgs"
              ? "17S PV 98136 59346"
              : selectedFormat === "utm"
              ? "17S 698184 3959363"
              : ""
          }
        ></CalciteInput>
        <CalciteButton onClick={searchCoordinates} width="full" scale="s">
          Search
        </CalciteButton>
      </div>
      <div className="coordinates-row">
        <div ref={coordinateRef} className="coordinates-text"></div>
        <CalciteAction
          id="coordinateSearch"
          text=""
          icon="search"
          active={showSearch ? true : undefined}
          onClick={searchClicked}
        ></CalciteAction>
        <CalciteTooltip
          closeOnClick
          label="Search Coordinates"
          referenceElement="coordinateSearch"
        >
          Search Coordinates
        </CalciteTooltip>
        <CalciteAction
          id="coordinateUnits"
          text=""
          icon="gear"
          onClick={settingsClicked}
          active={showSettings ? true : undefined}
        ></CalciteAction>
        <CalciteTooltip
          closeOnClick
          label="Set Units"
          referenceElement="coordinateUnits"
        >
          Set Units
        </CalciteTooltip>
        <CalciteAction
          id="coordinateMode"
          ref={modeActionRef}
          text=""
          icon="pin"
          onClick={modeClicked}
        ></CalciteAction>
        <CalciteTooltip
          closeOnClick
          label="Set Mode"
          referenceElement="coordinateMode"
        >
          Set Mode
        </CalciteTooltip>
      </div>
    </div>
  );
}

export default React.memo(Coordinates);
