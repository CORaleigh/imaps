/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useRef, useState } from 'react';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import * as geometryEngine from '@arcgis/core/geometry/geometryEngine';
import SketchViewModel from '@arcgis/core/widgets/Sketch/SketchViewModel';
import './PropertySelect.scss';
export const PropertySelect = (props: any) => {
  const pointAction = useRef<HTMLCalciteActionElement>(null);
  const lineAction = useRef<HTMLCalciteActionElement>(null);
  const polygonAction = useRef<HTMLCalciteActionElement>(null);
  const rectangleAction = useRef<HTMLCalciteActionElement>(null);
  const circleAction = useRef<HTMLCalciteActionElement>(null);
  const multipointAction = useRef<HTMLCalciteActionElement>(null);

  const [selectedFeature, setSelectedFeature] = useState<__esri.Graphic>();
  const [pointSketchViewModel, setPointSketchViewModel] = useState<SketchViewModel>();
  const [polylineSketchViewModel, setPolylineSketchViewModel] = useState<SketchViewModel>();
  const [polygonSketchViewModel, setPolygonSketchViewModel] = useState<SketchViewModel>();
  const [geometryType, setGeometryType] = useState<string>();
  const [distance, setDistance] = useState(0);

  const bufferGraphic = (geometry: __esri.Geometry) => {
    geometry = geometryEngine.geodesicBuffer(geometry, distance, 'feet') as __esri.Geometry;
    props.geometrySet(geometry);
  };

  const disableAllActions = () => {
    [pointAction, lineAction, polygonAction, circleAction, rectangleAction, multipointAction].forEach((action) => {
      if (action.current) {
        action.current.active = false;
      }
    });
  };
  const addGraphic = (e: any) => {
    if (e.state === 'complete') {
      const geometry = e.graphic.geometry;
      if (distance > 0) {
        bufferGraphic(geometry);
      } else {
        props.geometrySet(geometry);
      }
      disableAllActions();
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

  const changeSketchViewModel = (
    geometryType: 'point' | 'multipoint' | 'polyline' | 'polygon' | 'rectangle' | 'circle',
    activeViewModel: SketchViewModel,
    inactiveViewModels: SketchViewModel[],
    activeSketchAction: HTMLCalciteActionElement,
    inactiveSketchActions: HTMLCalciteActionElement[],
  ) => {
    if (activeSketchAction) {
      activeSketchAction.active = true;
    }
    inactiveSketchActions.forEach((action) => {
      if (action) {
        action.active = false;
      }
    });
    if (activeViewModel) {
      setGeometryType(geometryType);
      activeViewModel.create(geometryType);
      props.toolActivated(activeViewModel);
      inactiveViewModels.forEach((vm) => {
        vm?.cancel();
        vm?.cancel();
      });
    }
  };
  useEffect(() => {
    setPointSketchViewModel(createSketchViewModels(new GraphicsLayer({ listMode: 'hide' }), props.view));
    setPolylineSketchViewModel(createSketchViewModels(new GraphicsLayer({ listMode: 'hide' }), props.view));
    setPolygonSketchViewModel(createSketchViewModels(new GraphicsLayer({ listMode: 'hide' }), props.view));

    return () => {
      console.log('cleanup');
    };
  }, []);
  useEffect(() => {
    if (props.selectedFeature?.geometry) {
      setSelectedFeature(props.selectedFeature);
    }
  }, [props.selectedFeature]);
  return (
    <div className="panel">
      <div className="selectTools">
        <calcite-action
          ref={pointAction}
          text="Point"
          icon="pin"
          id="pointAction"
          onClick={() => {
            changeSketchViewModel(
              'point',
              pointSketchViewModel as SketchViewModel,
              [polygonSketchViewModel, polylineSketchViewModel] as SketchViewModel[],
              pointAction.current as HTMLCalciteActionElement,
              [
                lineAction.current,
                polygonAction.current,
                circleAction.current,
                rectangleAction.current,
                multipointAction.current,
              ] as HTMLCalciteActionElement[],
            );
          }}
        ></calcite-action>
        <calcite-action
          ref={lineAction}
          text="Line"
          icon="line"
          id="lineAction"
          onClick={() => {
            changeSketchViewModel(
              'polyline',
              polylineSketchViewModel as SketchViewModel,
              [polygonSketchViewModel, pointSketchViewModel] as SketchViewModel[],
              lineAction.current as HTMLCalciteActionElement,
              [
                pointAction.current,
                polygonAction.current,
                circleAction.current,
                rectangleAction.current,
                multipointAction.current,
              ] as HTMLCalciteActionElement[],
            );
          }}
        ></calcite-action>
        <calcite-action
          ref={polygonAction}
          text="Polygon"
          icon="polygon-area"
          id="polygonAction"
          onClick={() => {
            changeSketchViewModel(
              'polygon',
              polygonSketchViewModel as SketchViewModel,
              [polylineSketchViewModel, pointSketchViewModel] as SketchViewModel[],
              polygonAction.current as HTMLCalciteActionElement,
              [
                pointAction.current,
                lineAction.current,
                circleAction.current,
                rectangleAction.current,
                multipointAction.current,
              ] as HTMLCalciteActionElement[],
            );
          }}
        ></calcite-action>
        <calcite-action
          ref={rectangleAction}
          text="Text"
          icon="rectangle-area"
          id="rectangleAction"
          onClick={() => {
            changeSketchViewModel(
              'rectangle',
              polygonSketchViewModel as SketchViewModel,
              [polylineSketchViewModel, pointSketchViewModel] as SketchViewModel[],
              rectangleAction.current as HTMLCalciteActionElement,
              [
                pointAction.current,
                lineAction.current,
                circleAction.current,
                polygonAction.current,
                multipointAction.current,
              ] as HTMLCalciteActionElement[],
            );
          }}
        ></calcite-action>
        <calcite-action
          ref={circleAction}
          text="Clear"
          icon="circle-area"
          id="circleAction"
          onClick={() => {
            changeSketchViewModel(
              'circle',
              polygonSketchViewModel as SketchViewModel,
              [polylineSketchViewModel, pointSketchViewModel] as SketchViewModel[],
              circleAction.current as HTMLCalciteActionElement,
              [
                pointAction.current,
                lineAction.current,
                rectangleAction.current,
                polygonAction.current,
                multipointAction.current,
              ] as HTMLCalciteActionElement[],
            );
          }}
        ></calcite-action>
        <calcite-action
          ref={multipointAction}
          text="Mulit-point"
          icon="pins"
          id="multipointAction"
          onClick={() => {
            changeSketchViewModel(
              'multipoint',
              pointSketchViewModel as SketchViewModel,
              [polygonSketchViewModel, polylineSketchViewModel] as SketchViewModel[],
              pointAction.current as HTMLCalciteActionElement,
              [
                lineAction.current,
                polygonAction.current,
                circleAction.current,
                rectangleAction.current,
                pointAction.current,
              ] as HTMLCalciteActionElement[],
            );
          }}
        ></calcite-action>
      </div>
      <div className="instructions esri-widget">
        {geometryType === 'point' ? 'Single click on the map' : ''}
        {geometryType === 'polyline'
          ? 'Draw a polygon on the map by clicking each point and double clicking to finish'
          : ''}
        {geometryType === 'polygon'
          ? 'Draw a polygon on the map by clicking each point and double clicking to finish'
          : ''}
        {geometryType === 'rectangle' ? 'Draw a rectangle on the map by right clicking and dragging' : ''}
        {geometryType === 'circle' ? 'Draw a circle on the map by right clicking and dragging' : ''}
        {geometryType === 'multipoint' ? 'Single click each point on the map, double click to finish' : ''}
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
          onBlur={(e: any) => {
            setDistance(parseInt(e.target.value));
          }}
        ></calcite-input>
      </calcite-label>
      {selectedFeature && distance > 0 && (
        <calcite-button
          onClick={() => {
            const geometry = geometryEngine.geodesicBuffer(
              selectedFeature?.geometry,
              distance,
              'feet',
            ) as __esri.Geometry;
            props.geometrySet(geometry);
            disableAllActions();
          }}
        >
          Buffer Selected
        </calcite-button>
      )}
    </div>
  );
};

export default PropertySelect;