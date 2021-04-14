/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useRef, useState } from 'react';
import Measurement from '@arcgis/core/widgets/Measurement';
import CoordinateConversion from '@arcgis/core/widgets/CoordinateConversion';
import './Measure.scss';
export const Measure = (props: any) => {
    const measureRef = useRef<HTMLDivElement>(null);
    const coordRef = useRef<HTMLDivElement>(null);

    const [widget, setWidget] = useState<string>();
    useEffect(() => {
        const measurement = new Measurement({
            container: measureRef.current as HTMLDivElement,
            view: props.view,
        });
        new CoordinateConversion({
            container: coordRef.current as HTMLDivElement,
            view: props.view,
        });
        document.querySelector('calcite-radio-group')?.addEventListener('calciteRadioGroupChange', (e: any) => {
            if (e.detail === 'distance') {
                measurement.activeTool = 'distance';
                setWidget('measurement');
            }
            if (e.detail === 'area') {
                measurement.activeTool = 'area';
                setWidget('measurement');
            }
            if (e.detail === 'coordinates') {
                setWidget('coordinates');
            }
            if (e.detail === 'clear') {
                measurement.clear();
            }
        });
        return () => {
            measurement && measurement.destroy();
        };
    }, [props.view]); // only after initial render
    return (
        <div className="panel">
            <calcite-radio-group layout="horizontal" appearance="solid" scale="m" width="auto">
                <calcite-radio-group-item value="distance" icon="measure-line">
                    Distance
                </calcite-radio-group-item>
                <calcite-radio-group-item value="area" icon="measure-area">
                    Area
                </calcite-radio-group-item>
                <calcite-radio-group-item value="coordinates" icon="pin">
                    Coordinates
                </calcite-radio-group-item>
                <calcite-radio-group-item value="clear" icon="trash">
                    Clear
                </calcite-radio-group-item>
            </calcite-radio-group>
            <div ref={measureRef} hidden={widget != 'measurement'}></div>
            <div ref={coordRef} hidden={widget != 'coordinates'}></div>
        </div>
    );
};
