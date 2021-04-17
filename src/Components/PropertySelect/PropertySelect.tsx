/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useRef, useState } from 'react';
import SketchWidget from '@arcgis/core/widgets/Sketch';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import * as geometryEngine from '@arcgis/core/geometry/geometryEngine';

export const PropertySelect = (props: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const [distance] = useState(0);
  useEffect(() => {
    debugger;
    const sketch = new SketchWidget({
      container: ref.current as HTMLDivElement,
      view: props.view,
      creationMode: 'single',
      defaultCreateOptions: {
        mode: 'hybrid',
      },
      visibleElements: {
        selectionTools: {
          'lasso-selection': false,
          'rectangle-selection': false,
        },
        undoRedoMenu: false,
      },
      layer: new GraphicsLayer({ listMode: 'hide' }),
    });
    sketch.on('create', (e) => {
      if (e.state === 'complete') {
        let geometry = e.graphic.geometry;
        if (distance > 0) {
          geometry = geometryEngine.geodesicBuffer(e.graphic.geometry, distance, 'feet') as __esri.Geometry;
        }
        props.geometrySet(geometry);
      }
    });
    return () => {
      console.log('cleanup');
    };
  }, [props.view, props.geometrySet]); // only after initial render
  return (
    <div className="panel">
      <div ref={ref}></div>
      <calcite-label>
        Buffer distance
        <calcite-input
          type="number"
          max="3000"
          min="0"
          step="50"
          placeholder="Distance"
          suffix-text="ft"
          value={distance}
        ></calcite-input>
      </calcite-label>
    </div>
  );
};

export default PropertySelect;
