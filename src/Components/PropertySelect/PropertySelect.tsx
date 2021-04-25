/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useRef } from 'react';
//import SketchWidget from '@arcgis/core/widgets/Sketch';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import * as geometryEngine from '@arcgis/core/geometry/geometryEngine';
import SketchViewModel from '@arcgis/core/widgets/Sketch/SketchViewModel';
import './PropertySelect.scss';
export const PropertySelect = (props: any) => {
  //const ref = useRef<HTMLDivElement>(null);
  const distanceInput = useRef<HTMLCalciteInputElement>(null);

  const pointAction = useRef<HTMLCalciteActionElement>(null);
  const lineAction = useRef<HTMLCalciteActionElement>(null);
  const polygonAction = useRef<HTMLCalciteActionElement>(null);
  const rectangleAction = useRef<HTMLCalciteActionElement>(null);
  const circleAction = useRef<HTMLCalciteActionElement>(null);
  let pointSketchViewModel: SketchViewModel | null = null;

  let polylineSketchViewModel: SketchViewModel | null = null;

  let polygonSketchViewModel: SketchViewModel | null = null;
  //const [distance, setDistance] = useState(0);
  const addGraphic = (e: any) => {
    if (e.state === 'complete') {
      let geometry = e.graphic.geometry;
      debugger;
      if (distanceInput.current) {
        if (parseInt(distanceInput.current.value as string) > 0) {
          geometry = geometryEngine.geodesicBuffer(
            e.graphic.geometry,
            parseInt(distanceInput.current.value as string),
            'feet',
          ) as __esri.Geometry;
        }
      }

      props.geometrySet(geometry);
      [pointAction, lineAction, polygonAction, circleAction, rectangleAction].forEach((action) => {
        if (action.current) {
          action.current.active = false;
        }
      });
    }
  };
  const createSketchViewModels = (layer: __esri.GraphicsLayer, view: __esri.MapView): SketchViewModel => {
    const sketchVM = new SketchViewModel({
      view,
      layer,
      updateOnGraphicClick: true,
      defaultCreateOptions: {
        mode: 'hybrid',
      },
    });
    sketchVM.on('create', addGraphic);
    return sketchVM;
  };
  useEffect(() => {
    pointSketchViewModel = createSketchViewModels(new GraphicsLayer({ listMode: 'hide' }), props.view);
    polylineSketchViewModel = createSketchViewModels(new GraphicsLayer({ listMode: 'hide' }), props.view);
    polygonSketchViewModel = createSketchViewModels(new GraphicsLayer({ listMode: 'hide' }), props.view);

    // const sketch = new SketchWidget({
    //   container: ref.current as HTMLDivElement,
    //   view: props.view,
    //   creationMode: 'single',
    //   defaultCreateOptions: {
    //     mode: 'hybrid',
    //   },
    //   visibleElements: {
    //     selectionTools: {
    //       'lasso-selection': false,
    //       'rectangle-selection': false,
    //     },
    //     undoRedoMenu: false,
    //   },
    //   layer: new GraphicsLayer({ listMode: 'hide' }),
    //   snappingOptions: {
    //     enabled: false,
    //   },
    // });
    // sketch.on('create', (e) => {
    //   if (e.state === 'complete') {
    //     let geometry = e.graphic.geometry;
    //     if (distance > 0) {
    //       geometry = geometryEngine.geodesicBuffer(e.graphic.geometry, distance, 'feet') as __esri.Geometry;
    //     }
    //     props.geometrySet(geometry);
    //   }
    // });
    return () => {
      console.log('cleanup');
    };
  }, [props.view, props.geometrySet]); // only after initial render
  return (
    <div className="panel">
      {/* <div ref={ref}></div> */}

      <div className="selectTools">
        <calcite-action
          ref={pointAction}
          text="Point"
          icon="pin"
          id="pointAction"
          onClick={() => {
            if (pointAction.current) {
              pointAction.current.active = true;
            }
            [lineAction, polygonAction, circleAction, rectangleAction].forEach((action) => {
              if (action.current) {
                action.current.active = false;
              }
            });
            if (pointSketchViewModel) {
              pointSketchViewModel.create('point');
            }
          }}
        ></calcite-action>
        <calcite-action
          ref={lineAction}
          text="Line"
          icon="line"
          id="lineAction"
          onClick={() => {
            if (lineAction.current) {
              lineAction.current.active = true;
            }
            [pointAction, polygonAction, rectangleAction, circleAction].forEach((action) => {
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
          icon="polygon-area"
          id="polygonAction"
          onClick={() => {
            if (polygonAction.current) {
              polygonAction.current.active = true;
            }
            [pointAction, lineAction, circleAction, rectangleAction].forEach((action) => {
              if (action.current) {
                action.current.active = false;
              }
            });
            polygonSketchViewModel?.create('polygon');
          }}
        ></calcite-action>
        <calcite-action
          ref={rectangleAction}
          text="Text"
          icon="rectangle-area"
          id="rectangleAction"
          onClick={() => {
            if (rectangleAction.current) {
              rectangleAction.current.active = true;
            }
            [pointAction, lineAction, polygonAction, circleAction].forEach((action) => {
              if (action.current) {
                action.current.active = false;
              }
            });
            polylineSketchViewModel?.create('rectangle');
          }}
        ></calcite-action>
        <calcite-action
          ref={circleAction}
          text="Clear"
          icon="circle-area"
          id="circleAction"
          onClick={() => {
            if (circleAction.current) {
              circleAction.current.active = true;
            }
            [pointAction, lineAction, polygonAction, rectangleAction].forEach((action) => {
              if (action.current) {
                action.current.active = false;
              }
            });
            polylineSketchViewModel?.create('circle');
          }}
        ></calcite-action>
      </div>
      <calcite-label>
        Buffer distance
        <calcite-input
          type="number"
          max="3000"
          min="0"
          step="50"
          placeholder="Distance"
          suffix-text="ft"
          value="0"
          ref={distanceInput}
        ></calcite-input>
      </calcite-label>
    </div>
  );
};

export default PropertySelect;
