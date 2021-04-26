/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useRef, useState } from 'react';
import Measurement from '@arcgis/core/widgets/Measurement';
import CoordinateConversion from '@arcgis/core/widgets/CoordinateConversion';
import './Measure.scss';
export const Measure = (props: any) => {
  const measureRef = useRef<HTMLDivElement>(null);
  const coordRef = useRef<HTMLDivElement>(null);
  const measurement = useRef<Measurement>();
  const [widget, setWidget] = useState<string>();
  const actionClicked = (e: any) => {
    document.querySelectorAll('.measureTools calcite-action').forEach((element) => {
      (element as HTMLCalciteActionElement).active = element === e.target;
      if (measurement.current) {
        if (e.target.getAttribute('value') === 'distance') {
          measurement.current.activeTool = 'distance';
          setWidget('measurement');
          props.measurementActivated(measurement.current);
        }
        if (e.target.getAttribute('value') === 'area') {
          measurement.current.activeTool = 'area';
          setWidget('measurement');
          props.measurementActivated(measurement.current);
        }
        if (e.target.getAttribute('value') === 'coordinates') {
          setWidget('coordinates');
        }
        if (e.target.getAttribute('value') === 'clear') {
          measurement.current.clear();
        }
      }
    });
  };
  useEffect(() => {
    measurement.current = new Measurement({
      container: measureRef.current as HTMLDivElement,
      view: props.view,
    });
    measurement.current.viewModel.watch('state', (state) => {
      if (state === 'ready') {
        document.querySelectorAll('#measureTools calcite-action').forEach((action) => {
          (action as HTMLCalciteActionElement).active = false;
        });
      }
    });
    new CoordinateConversion({
      container: coordRef.current as HTMLDivElement,
      view: props.view,
    });
    return () => {
      measurement && measurement.current?.destroy();
    };
  }, [props.view]); // only after initial render
  return (
    <div className={`panel ${props.show ? '' : 'esri-hidden'}`}>
      <div className="measureTools">
        <calcite-action
          text="Distance"
          appearance="outline"
          icon="measure-line"
          id="lineMeasure"
          value="distance"
          text-enabled
          onClick={actionClicked}
        ></calcite-action>
        <calcite-action
          text="Area"
          appearance="outline"
          icon="measure-area"
          id="areaMeasure"
          value="area"
          text-enabled
          onClick={actionClicked}
        ></calcite-action>
        <calcite-action
          text="Coordinates"
          appearance="outline"
          icon="pins"
          id="coordinates"
          value="coordinates"
          text-enabled
          onClick={actionClicked}
        ></calcite-action>
        <calcite-action
          text="Clear"
          appearance="outline"
          icon="trash"
          id="clearMeasure"
          value="clear"
          text-enabled
          onClick={actionClicked}
        ></calcite-action>
      </div>
      <div ref={measureRef} hidden={widget != 'measurement'}></div>
      <div ref={coordRef} hidden={widget != 'coordinates'}></div>
    </div>
  );
};
export default Measure;
