/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React, { useEffect, useRef, useState } from 'react';
import { SketchSettings } from './SketchSettings';
import { createSketchWidget, settingsChanged, sketchHandles } from './utils/sketch';
export const Sketch = (props: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const sketchRef = useRef<__esri.Sketch>();
  const [geometryType, setGeometryType] = useState<string | null>(null);
  const activeToolChanged = (activeTool: string) => {
    if (['rectangle', 'circle'].includes(activeTool)) {
      setGeometryType('polygon');
    } else if (activeTool) {
      setGeometryType(activeTool);
    }
  };
  useEffect(() => {
    const sketch: __esri.Sketch = createSketchWidget(ref, props.view);
    sketchHandles.push(sketch.watch('activeTool', activeToolChanged));
    sketchRef.current = sketch;
    return () => {
      sketchHandles.forEach((handle) => {
        handle.remove();
      });
    };
  }, []);

  return (
    <div className="panel">
      <div ref={ref}></div>

      <calcite-label>
        Text Label
        <calcite-input id="labelInput" placeholder="Label" type="textarea"></calcite-input>
      </calcite-label>
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
