/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React, { useEffect, useRef, useState } from 'react';
import { SketchSettings } from './SketchSettings';
import './Sketch.scss';
import {
  pointSketchViewModel,
  polygonSketchViewModel,
  polylineSketchViewModel,
  settingsChanged,
  setupViewModels,
  textClicked,
  textSketchViewModel,
  textSymbol,
} from './utils/notes';
// import { createSketchWidget, settingsChanged, sketchHandles } from './utils/sketch';
export const Sketch = (props: any) => {
  // const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLCalciteInputElement>(null);
  const pointAction = useRef<HTMLCalciteActionElement>(null);
  const lineAction = useRef<HTMLCalciteActionElement>(null);
  const polygonAction = useRef<HTMLCalciteActionElement>(null);
  const textAction = useRef<HTMLCalciteActionElement>(null);
  //const sketchRef = useRef<__esri.Sketch>();
  const [geometryType, setGeometryType] = useState<string | null>(null);
  // const activeToolChanged = (activeTool: string) => {
  //   if (['rectangle', 'circle'].includes(activeTool)) {
  //     setGeometryType('polygon');
  //   } else if (activeTool) {
  //     setGeometryType(activeTool);
  //   }
  // };
  const sketchCreated = (e: any) => {
    if (e.state === 'complete') {
      setGeometryType(null);
      [pointAction, lineAction, polygonAction, textAction].forEach((action) => {
        if (action.current) {
          action.current.active = false;
        }
      });
    }
  };
  useEffect(() => {
    setupViewModels(props.view);
    pointSketchViewModel?.on('create', sketchCreated);
    polylineSketchViewModel?.on('create', sketchCreated);
    polygonSketchViewModel?.on('create', sketchCreated);
    textSketchViewModel?.on('create', sketchCreated);
    // const sketch: __esri.Sketch = createSketchWidget(ref, props.view);
    // sketchHandles.push(sketch.watch('activeTool', activeToolChanged));
    // sketchRef.current = sketch;
    // return () => {
    //   sketchHandles.forEach((handle) => {
    //     handle.remove();
    //   });
    // };
  }, []);

  return (
    <div className="panel">
      <div className="sketchTools">
        <calcite-action
          ref={pointAction}
          text="Point"
          icon="pins"
          onClick={() => {
            setGeometryType('point');
            if (pointAction.current) {
              pointAction.current.active = true;
            }
            [lineAction, polygonAction, textAction].forEach((action) => {
              if (action.current) {
                action.current.active = false;
              }
            });
            pointSketchViewModel?.create('point');
          }}
        ></calcite-action>
        <calcite-action
          ref={lineAction}
          text="Line"
          icon="line"
          onClick={() => {
            setGeometryType('polyline');

            if (lineAction.current) {
              lineAction.current.active = true;
            }
            [pointAction, polygonAction, textAction].forEach((action) => {
              if (action.current) {
                action.current.active = false;
              }
            });
            polylineSketchViewModel?.create('polyline');
          }}
        ></calcite-action>
        <calcite-action
          ref={polygonAction}
          text="Polygon"
          icon="freehand-area"
          onClick={() => {
            setGeometryType('polygon');
            if (polygonAction.current) {
              polygonAction.current.active = true;
            }
            [pointAction, lineAction, textAction].forEach((action) => {
              if (action.current) {
                action.current.active = false;
              }
            });
            polygonSketchViewModel?.create('polygon');
          }}
        ></calcite-action>
        <calcite-action
          ref={textAction}
          text="Text"
          icon="speech-bubble"
          onClick={() => {
            setGeometryType('text');

            if (textAction.current) {
              textAction.current.active = true;
            }
            [pointAction, lineAction, polygonAction].forEach((action) => {
              if (action.current) {
                action.current.active = false;
              }
            });
            textSketchViewModel?.create('point');
            textClicked();
          }}
        ></calcite-action>
        <calcite-action
          text="Clear"
          icon="trash"
          onClick={() => {
            setGeometryType(null);
            [pointAction, lineAction, polygonAction, textAction].forEach((action) => {
              if (action.current) {
                action.current.active = false;
              }
            });
            pointSketchViewModel?.layer.graphics.removeAll();
            polylineSketchViewModel?.layer.graphics.removeAll();
            polygonSketchViewModel?.layer.graphics.removeAll();
            textSketchViewModel?.layer.graphics.removeAll();
          }}
        ></calcite-action>
      </div>
      {/* <div ref={ref}></div> */}

      {geometryType === 'text' && (
        <calcite-label>
          Text Label
          <calcite-input
            ref={inputRef}
            id="labelInput"
            placeholder="Label"
            type="textarea"
            onInput={(e: any) => {
              textSymbol.text = e.target.value;
            }}
          ></calcite-input>
        </calcite-label>
      )}
      <SketchSettings
        settingsChanged={(settings: any) => {
          if (geometryType) {
            settingsChanged(settings, geometryType);
          }
        }}
        geometryType={geometryType}
      />
    </div>
  );
};
export default Sketch;
