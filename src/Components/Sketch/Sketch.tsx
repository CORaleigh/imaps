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
  const [selectedGraphics, setSelectedGraphics] = useState<__esri.Graphic[]>([]);
  const graphicsRef = useRef<any[]>([]);
  const handles = useRef<any[]>([]);
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
    handles.current.push(pointSketchViewModel?.on('create', sketchCreated));
    handles.current.push(polylineSketchViewModel?.on('create', sketchCreated));
    handles.current.push(polygonSketchViewModel?.on('create', sketchCreated));
    handles.current.push(textSketchViewModel?.on('create', sketchCreated));
    [pointSketchViewModel, polylineSketchViewModel, polygonSketchViewModel, textSketchViewModel].forEach((sketchVM) => {
      handles.current.push(sketchVM?.on('create', sketchCreated));
      // sketchVM?.watch('updateGraphics', (updateGraphics) => {
      //   debugger;
      //   setSelectedGraphics(updateGraphics);
      // });s
      handles.current.push(
        sketchVM?.on('update', (e) => {
          console.log(e.state, graphicsRef.current.length);

          if ((e.state === 'start' && graphicsRef.current.length === 0) || e.state === 'active') {
            console.log(e.graphics.length);
            setSelectedGraphics([...e.graphics]);
            graphicsRef.current = [...e.graphics];
          }

          if (e.state === 'complete') {
            e.graphics.forEach((graphic: __esri.Graphic) => {
              const i = graphicsRef.current.indexOf(graphic);
              setSelectedGraphics([...selectedGraphics, ...selectedGraphics.slice(i)]);
              graphicsRef.current = [...selectedGraphics, ...selectedGraphics.slice(i)];
            });
          }
        }),
      );
    });
    // const sketch: __esri.Sketch = createSketchWidget(ref, props.view);
    // sketchHandles.push(sketch.watch('activeTool', activeToolChanged));
    // sketchRef.current = sketch;
    // return () => {
    //   sketchHandles.forEach((handle) => {
    //     handle.remove();
    //   });
    // };
    return () => {
      handles.current.forEach((handle) => {
        handle.remove();
      });
    };
  }, []);

  return (
    <div className="panel">
      <calcite-tooltip-manager>
        <calcite-tooltip label="Tooltip label" reference-element="pointAction" placement="bottom">
          Sketch a point
        </calcite-tooltip>
        <calcite-tooltip label="Tooltip label" reference-element="lineAction" placement="bottom">
          Sketch a line
        </calcite-tooltip>
        <calcite-tooltip label="Tooltip label" reference-element="polygonAction" placement="bottom">
          Sketch a polygon
        </calcite-tooltip>
        <calcite-tooltip label="Tooltip label" reference-element="textAction" placement="bottom">
          Add text label
        </calcite-tooltip>
        <calcite-tooltip label="Tooltip label" reference-element="clearAction" placement="bottom">
          Clear all sketch graphics
        </calcite-tooltip>
        <div className="sketchTools">
          <calcite-action
            ref={pointAction}
            text="Point"
            icon="pins"
            id="pointAction"
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
            id="lineAction"
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
            id="polygonAction"
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
            id="textAction"
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
            id="clearAction"
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
      </calcite-tooltip-manager>

      {selectedGraphics?.length > 0 && (
        <calcite-action
          icon="trash"
          text-enabled
          text={`Delete ${selectedGraphics.length} selected graphic${selectedGraphics.length > 1 ? 's' : ''} `}
          onClick={() => {
            [pointSketchViewModel, polylineSketchViewModel, polygonSketchViewModel, textSketchViewModel].forEach(
              (sketchVM) => {
                // selectedGraphics.forEach((graphic: __esri.Graphic) => {
                //   const deleteGraphics = sketchVM?.updateGraphics.filter((updateGraphic: __esri.Graphic) => {
                //     return updateGraphic === graphic;
                //   });
                //   debugger;
                //   if (deleteGraphics) {
                sketchVM?.delete();
                //}
                //});
                setSelectedGraphics([...[]]);
              },
            );
          }}
        ></calcite-action>
      )}
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
