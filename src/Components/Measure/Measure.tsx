/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useRef, useState } from 'react';
import Measurement from '@arcgis/core/widgets/Measurement';
import CoordinateConversion from '@arcgis/core/widgets/CoordinateConversion';
import Format from '@arcgis/core/widgets/CoordinateConversion/support/Format';
import Conversion from '@arcgis/core/widgets/CoordinateConversion/support/Conversion';

import Point from '@arcgis/core/geometry/Point';
import SpatialReference from '@arcgis/core/geometry/SpatialReference';

import './Measure.scss';
import CIMSymbol from '@arcgis/core/symbols/CIMSymbol';
import { pinSymbol } from '../../config/config';
export const Measure = (props: any) => {
  const measureRef = useRef<HTMLDivElement>(null);
  const coordRef = useRef<HTMLDivElement>(null);
  const measurement = useRef<Measurement>();
  const coordinates = useRef<CoordinateConversion>();

  const [widget, setWidget] = useState<string>();
  const actionClicked = (e: any) => {
    document.querySelectorAll('.measureTools calcite-action').forEach((element) => {
      if (element != e.target) {
        (element as HTMLCalciteActionElement).active = false;
      }
    });
    if (measurement.current) {
      if (e.target.getAttribute('value') === 'distance') {
        if (e.target.active) {
          e.target.active = false;
          setWidget(undefined);
          measurement.current.clear();
        } else {
          e.target.active = true;
          measurement.current.activeTool = 'distance';
          setWidget('measurement');
          props.measurementActivated(measurement.current, coordinates.current);
        }
      }
      if (e.target.getAttribute('value') === 'area') {
        if (e.target.active) {
          e.target.active = false;
          setWidget(undefined);
          measurement.current.clear();
        } else {
          e.target.active = true;
          measurement.current.activeTool = 'area';
          setWidget('measurement');
          props.measurementActivated(measurement.current);
        }
      }
      if (e.target.getAttribute('value') === 'coordinates') {
        if (e.target.active) {
          e.target.active = false;
          setWidget(undefined);
        } else {
          e.target.active = true;
          props.measurementActivated(measurement.current, coordinates.current);
          setWidget('coordinates');
        }
      }
      if (e.target.getAttribute('value') === 'clear') {
        measurement.current.clear();
        setWidget(undefined);
      }
    }
  };

  useEffect(() => {
    measurement.current = new Measurement({
      container: measureRef.current as HTMLDivElement,
      view: props.view,
      areaUnit: 'imperial',
      linearUnit: 'imperial',
    });
    measurement.current.viewModel.watch('state', (state) => {
      if (state === 'ready') {
        document.querySelectorAll('#measureTools calcite-action').forEach((action) => {
          (action as HTMLCalciteActionElement).active = false;
        });
      }
    });
    const conversion = new CoordinateConversion({
      container: coordRef.current as HTMLDivElement,
      view: props.view,
    });
    conversion.viewModel.locationSymbol = new CIMSymbol(pinSymbol as any) as any;
    coordinates.current = conversion;
    conversion.viewModel.watch('mode', (mode) => {
      (props.view as __esri.MapView).popup.autoOpenEnabled = mode === 'live';
    });
    const numberSearchPattern = /-?\d+[\.]?\d*/;

    const stateplane = new Format({
      name: 'Stateplane Feet',
      conversionInfo: {
        spatialReference: new SpatialReference({ wkid: 2264 }),
        reverseConvert: function (string: string) {
          const parts = string.split(',');
          return new Point({
            x: parseFloat(parts[0]),
            y: parseFloat(parts[1]),
            spatialReference: { wkid: 2264 },
          });
        },
      } as any,
      coordinateSegments: [
        {
          alias: 'X',
          description: 'easting',
          searchPattern: numberSearchPattern,
        },
        {
          alias: 'Y',
          description: 'northing',
          searchPattern: numberSearchPattern,
        },
      ],
      defaultPattern: 'X, Y',
    });

    // Add our new format to the widget's dropdown
    conversion.formats.add(stateplane);

    // Add the two custom formats to the top of the widget's display
    conversion.conversions.splice(
      0,
      0,
      new Conversion({
        format: stateplane,
      }),
    );

    return () => {
      measurement && measurement.current?.destroy();
    };
  }, [props.view]); // only after initial render
  return (
    <div className="panel">
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
