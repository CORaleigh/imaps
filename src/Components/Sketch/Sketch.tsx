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
  textSketchViewModel,
  textSymbol,
} from './utils/notes';
import SketchViewModel from '@arcgis/core/widgets/Sketch/SketchViewModel';
import { getInitialSettings } from './utils/sketch';
export const Sketch = (props: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLCalciteInputElement>(null);
  const pointAction = useRef<HTMLCalciteActionElement>(null);
  const lineAction = useRef<HTMLCalciteActionElement>(null);
  const polygonAction = useRef<HTMLCalciteActionElement>(null);
  const textAction = useRef<HTMLCalciteActionElement>(null);
  const settings = useRef();
  const [selectedGraphics, setSelectedGraphics] = useState<__esri.Graphic[]>([]);
  const graphicsRef = useRef<any[]>([]);
  const handles = useRef<any[]>([]);

  const [geometryType, setGeometryType] = useState<string | null>(null);

  const sketchCreated = (e: any) => {
    if (e.state === 'cancel') {
      toolSelected('');
    }
    if (e.state === 'complete') {
      const action = [pointAction, lineAction, polygonAction, textAction].find((action) => {
        return action.current?.active;
      });
      if (action?.current === pointAction.current) {
        toolSelected('point');
        //settingsChanged(settings.current, 'point');
      }
      if (action?.current === lineAction.current) {
        toolSelected('polyline');
        //settingsChanged(settings.current, 'polyline');
      }
      if (action?.current === polygonAction.current) {
        toolSelected('polygon');
        //settingsChanged(settings.current, 'polygon');
      }
      if (action?.current === textAction.current) {
        toolSelected('text');
        //settingsChanged(settings.current, 'text');
      }
      //setGeometryType(null);
      // [pointAction, lineAction, polygonAction, textAction].forEach((action) => {
      //   if (action.current) {
      //     action.current.active = false;
      //   }
      // });
      // const action = [pointAction, lineAction, polygonAction, textAction].find((action) => {
      //   return action.current?.active;
      // });
      // if (action === pointAction.current)
    }
  };
  const stateChanged = (state: string) => {
    if (state === 'ready' && ref.current?.parentElement?.hidden) {
      [pointAction, lineAction, polygonAction, textAction].forEach((action) => {
        if (action.current) {
          action.current.active = false;
          setGeometryType(null);
        }
      });
    }
  };
  const activateViewModel = (
    geometryType: 'circle' | 'polygon' | 'polyline' | 'point' | 'multipoint' | 'rectangle',
    vm: SketchViewModel,
  ) => {
    [textSketchViewModel, pointSketchViewModel, polylineSketchViewModel, polygonSketchViewModel].forEach((vm) => {
      vm.cancel();
    });
    vm.create(geometryType);
    props.toolActivated(vm);
    handles.current.push(vm?.watch('state', stateChanged));
  };
  const toolSelected = (geometryType: string) => {
    let deactivateActions: React.RefObject<HTMLCalciteActionElement>[] = [];
    if (geometryType === 'point') {
      activateViewModel(geometryType, pointSketchViewModel);
      deactivateActions = [polygonAction, lineAction, textAction];
      if (pointAction.current) {
        pointAction.current.active = true;
      }
    }
    if (geometryType === 'polyline') {
      activateViewModel(geometryType, polylineSketchViewModel);

      deactivateActions = [pointAction, polygonAction, textAction];
      if (lineAction.current) {
        lineAction.current.active = true;
      }
    }
    if (geometryType === 'polygon') {
      activateViewModel(geometryType, polygonSketchViewModel);

      deactivateActions = [pointAction, lineAction, textAction];
      if (polygonAction.current) {
        polygonAction.current.active = true;
      }
    }
    if (geometryType === 'text') {
      activateViewModel('point', textSketchViewModel);
      deactivateActions = [pointAction, lineAction, polygonAction];
      if (textAction.current) {
        textAction.current.active = true;
      }
    }

    if (geometryType === '') {
      deactivateActions = [pointAction, lineAction, polygonAction, textAction];

      deactivateActions.forEach((action) => {
        if (action.current) {
          action.current.active = false;
        }
      });
    }
    setGeometryType(geometryType);
  };

  const disableTool = (vm: SketchViewModel, action: HTMLCalciteActionElement) => {
    vm.cancel();
    setGeometryType(null);
    action.active = false;
    action.blur();
  };

  useEffect(() => {
    setupViewModels(props.view);
    settings.current = { ...getInitialSettings() };
    [pointSketchViewModel, polylineSketchViewModel, polygonSketchViewModel, textSketchViewModel].forEach((sketchVM) => {
      handles.current.push(sketchVM?.on('create', sketchCreated));
      handles.current.push(sketchVM?.on('create', sketchCreated));
      handles.current.push(
        sketchVM?.watch('activeTool', (activeTool) => {
          if (!activeTool) {
            //setGeometryType(null);
          }
        }),
      );

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
    return () => {
      handles.current.forEach((handle) => {
        handle.remove();
      });
    };
  }, []);

  return (
    <div className="panel" ref={ref}>
      <calcite-tooltip-manager>
        <calcite-tooltip label="Tooltip label" reference-element="pointAction" placement="bottom">
          Select graphics
        </calcite-tooltip>
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
            text="Select"
            icon="cursor"
            id="selectAction"
            onClick={() => {
              setGeometryType(null);
              [pointAction, lineAction, polygonAction, textAction].forEach((action) => {
                setGeometryType(null);
                if (action.current) {
                  action.current.active = false;
                }
              });
              pointSketchViewModel?.cancel();
              polylineSketchViewModel?.cancel();
              polygonSketchViewModel?.cancel();
              textSketchViewModel?.cancel();
            }}
          ></calcite-action>
          <calcite-action
            ref={pointAction}
            text="Point"
            icon="pins"
            id="pointAction"
            onClick={(event: any) => {
              if (event.target.active) {
                disableTool(pointSketchViewModel, event.target);
              } else {
                toolSelected('point');
              }
            }}
          ></calcite-action>
          <calcite-action
            ref={lineAction}
            text="Line"
            icon="line"
            id="lineAction"
            onClick={(event: any) => {
              if (event.target.active) {
                disableTool(polylineSketchViewModel, event.target);
              } else {
                toolSelected('polyline');
              }
            }}
          ></calcite-action>
          <calcite-action
            ref={polygonAction}
            text="Polygon"
            icon="freehand-area"
            id="polygonAction"
            onClick={(event: any) => {
              if (event.target.active) {
                disableTool(polygonSketchViewModel, event.target);
              } else {
                toolSelected('polygon');
              }
            }}
          ></calcite-action>
          <calcite-action
            ref={textAction}
            text="Text"
            icon="speech-bubble"
            id="textAction"
            onClick={(event: any) => {
              if (event.target.active) {
                disableTool(polygonSketchViewModel, event.target);
              } else {
                toolSelected('text');
              }
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
          <calcite-action
            text="Undo"
            icon="undo"
            id="undoAction"
            onClick={() => {
              if (pointAction.current?.active) {
                pointSketchViewModel.undo();
              }
              if (lineAction.current?.active) {
                polylineSketchViewModel.undo();
              }
              if (polygonAction.current?.active) {
                polygonSketchViewModel.undo();
              }
              if (textAction.current?.active) {
                textSketchViewModel.undo();
              }
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
                sketchVM?.delete();
                setSelectedGraphics([...[]]);
              },
            );
          }}
        ></calcite-action>
      )}

      {geometryType === 'text' && (
        <calcite-label>
          Text Label
          <calcite-input
            ref={inputRef}
            id="labelInput"
            placeholder="Label"
            type="textarea"
            value={textSymbol.text}
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
            settings.current = { ...settings };
          }
        }}
        geometryType={geometryType}
      />
    </div>
  );
};
export default Sketch;
