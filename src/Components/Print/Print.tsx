/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useRef, useState } from 'react';
import { printTemplates } from './utils/templates';
import * as projection from '@arcgis/core/geometry/projection';

import './Print.scss';
import {
  exportMap,
  formatAttributes,
  getCustomElements,
  getFormats,
  getLayouts,
  getScales,
  getTemplate,
  roundScale,
} from './utils/print';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import Extent from '@arcgis/core/geometry/Extent';
import Graphic from '@arcgis/core/Graphic';
export const Print = (props: any) => {
  const [layouts, setLayouts] = useState<any[]>([]);
  const [formats, setFormats] = useState<any[]>([]);
  const [scales, setScales] = useState<any[]>([]);
  const [scaleType, setScaleType] = useState('current');
  const scaleTypeRef = useRef<string>('current');
  const [selectedFeature, setSelectedFeature] = useState<__esri.Graphic>();
  const [currentScale, setCurrentScale] = useState(Math.round((props.view.scale * 600) / 564.248588));
  const [jobs, setJobs] = useState<any[]>([]);
  const [userDefined, setUserDefined] = useState<boolean>(false);
  const layout = useRef<HTMLCalciteSelectElement>(null);
  const scale = useRef<HTMLCalciteSelectElement>(null);
  const scaleRadio = useRef<HTMLCalciteRadioButtonGroupElement>(null);
  const format = useRef<HTMLCalciteSelectElement>(null);
  const title = useRef<HTMLCalciteInputElement>(null);
  const attributeCheck = useRef<HTMLCalciteCheckboxElement>(null);
  const legendCheck = useRef<HTMLCalciteCheckboxElement>(null);
  const mapFrameCheck = useRef<HTMLCalciteCheckboxElement>(null);

  const jobRef = useRef<any[]>([]);
  const [userScale, setUserScale] = useState<number>(NaN);
  const userInput = useRef<HTMLCalciteInputElement>(null);

  const customScaleChanged = (e: any) => {
    setUserDefined(e.target.selectedOption.value === 'custom');
    if (mapFrameCheck.current?.hasAttribute('checked')) {
      addPrintGraphic();
    }

    if (e.target.selectedOption.value === 'custom') {
      if (userInput.current) {
        userInput.current.addEventListener('change', userScaleChanged);
      }
    } else {
      if (userInput.current) {
        userInput.current.removeEventListener('change', userScaleChanged);
      }
    }
  };
  const userScaleChanged = (e: any) => {
    setUserScale(parseInt(e.target.value));
    if (mapFrameCheck.current?.hasAttribute('checked')) {
      addPrintGraphic();
    }
  };
  const addPrintGraphic = () => {
    const graphics = (props.view as __esri.MapView).map.findLayerById('print-graphic') as __esri.GraphicsLayer;
    graphics.removeAll();
    setTimeout(() => {
      projection.load().then(() => {
        const center = projection.project((props.view as __esri.MapView).extent.center, {
          wkid: 2264,
        }) as __esri.Point;
        const selectedLayout = layout.current?.querySelector('calcite-option[selected]') as any;
        const selectedTemplate = JSON.parse(selectedLayout.value).template.replace('.', '');
        const template = printTemplates.results[0].value.filter((value) => {
          return value.layoutTemplate === selectedTemplate;
        });
        //        let mapScale = (props.view as __esri.MapView).scale / 12;
        let mapScale =
          scaleTypeRef.current === 'current'
            ? currentScale
            : parseInt((scale.current?.querySelector('calcite-option[selected]') as any)?.value);
        mapScale = mapScale / 12;
        const width = template[0]?.webMapFrameSize[0] * mapScale;
        const height = template[0]?.webMapFrameSize[1] * mapScale;
        const xmax = center.x + width / 2;
        const ymax = center.y + height / 2;
        const xmin = center.x - width / 2;
        const ymin = center.y - height / 2;
        graphics.add(
          new Graphic({
            symbol: {
              type: 'simple-fill',
              style: 'cross',
              outline: { width: 2, color: [149, 149, 149, 1] },
            } as any,
            geometry: new Extent({ xmax: xmax, xmin: xmin, ymax: ymax, ymin: ymin, spatialReference: { wkid: 2264 } }),
          }),
        );
      });
    });
  };
  const mapFrameCheckChanged = (e: any) => {
    const graphics = (props.view as __esri.MapView).map.findLayerById('print-graphic') as __esri.GraphicsLayer;
    graphics.removeAll();
    if (!e.target.hasAttribute('checked')) {
      addPrintGraphic();
    }
  };

  useEffect(() => {
    setSelectedFeature(props.selectedFeature);
  }, [props.selectedFeature]); // only after initial render
  useEffect(() => {
    const graphics = new GraphicsLayer({ id: 'print-graphic', listMode: 'hide' });

    (props.view as __esri.MapView).map.add(graphics);
    getLayouts().then((layouts) => setLayouts(layouts));
    getFormats(props.exportUrl).then((formats) => setFormats(formats));
    setScales(getScales(props.view));
    const mapScale = roundScale(props.view.scale);
    setCurrentScale(mapScale);
    props.view.watch('stationary', () => {
      const mapScale = roundScale(props.view.scale);
      setCurrentScale(mapScale);
      if (mapFrameCheck.current?.hasAttribute('checked')) {
        addPrintGraphic();
      }
    });

    setTimeout(() => {
      layout.current?.addEventListener('calciteSelectChange', () => {
        if (mapFrameCheck.current?.hasAttribute('checked')) {
          addPrintGraphic();
        }
      });
      scaleRadio.current?.addEventListener('calciteRadioButtonGroupChange', (e: any) => {
        setScaleType(e.detail);
        scaleTypeRef.current = e.detail;
        if (scale.current) {
          scale.current.removeEventListener('calciteSelectChange', customScaleChanged);
        }
        setUserDefined(false);
        if (e.detail === 'custom' && scale.current) {
          scale.current.addEventListener('calciteSelectChange', customScaleChanged);
        } else if (scale.current) {
          if (userInput.current) {
            userInput.current.removeEventListener('change', userScaleChanged);
          }
        }
      });
      mapFrameCheck.current?.addEventListener('calciteCheckboxChange', mapFrameCheckChanged);
    });
  }, []); // only after initial render
  return (
    // <calcite-tabs id="printTabs">
    //   <calcite-tab-nav slot="tab-nav">
    //     <calcite-tab-title active>Layout</calcite-tab-title>
    //     <calcite-tab-title>Map Only</calcite-tab-title>
    //   </calcite-tab-nav>
    //   <calcite-tab active>
    <div id="printPanel">
      <calcite-label>
        Title
        <calcite-input ref={title} placeholder="Title of file"></calcite-input>
      </calcite-label>
      <calcite-label>
        Page size
        <calcite-select ref={layout}>
          {layouts.map((layout, i) => {
            return (
              <calcite-option value={JSON.stringify(layout)} key={layout.template} selected={i === 0 ? '' : null}>
                {layout.label}
              </calcite-option>
            );
          })}
        </calcite-select>
      </calcite-label>
      <calcite-label>
        File format
        <calcite-select ref={format}>
          {formats.map((format, i) => {
            return (
              <calcite-option value={format} key={format} selected={i === 0 ? '' : null}>
                {format}
              </calcite-option>
            );
          })}
        </calcite-select>
      </calcite-label>
      <calcite-radio-button-group ref={scaleRadio} layout="vertical" name="Radio Group name">
        <calcite-label layout="inline">
          <calcite-radio-button value="current" checked></calcite-radio-button>Current Scale (
          {`1" = ${(currentScale / 12).toLocaleString('en')}'`})
        </calcite-label>
        <calcite-label layout="inline">
          <calcite-radio-button value="custom"></calcite-radio-button>Custom Scale
        </calcite-label>
      </calcite-radio-button-group>
      {scaleType === 'custom' && (
        <calcite-label>
          Scale
          <calcite-select ref={scale}>
            {scales.map((scale: any, i: number) => {
              return (
                <calcite-option value={scale.scale} key={scale.scale} selected={i === 0 ? '' : null}>
                  {scale.label}
                </calcite-option>
              );
            })}
          </calcite-select>
        </calcite-label>
      )}
      {scaleType === 'custom' && userDefined && (
        <calcite-input
          ref={userInput}
          placeholder="Placeholder"
          prefix-text="1 in ="
          required
          suffix-text="ft"
          type="number"
          value={userScale}
        ></calcite-input>
      )}
      <calcite-label layout="inline">
        <calcite-checkbox checked ref={legendCheck}></calcite-checkbox>Include legend
      </calcite-label>
      <calcite-label layout="inline">
        <calcite-checkbox ref={mapFrameCheck}></calcite-checkbox>Show Map Frame
      </calcite-label>
      {selectedFeature && (
        <calcite-label layout="inline">
          <calcite-checkbox ref={attributeCheck}></calcite-checkbox>Include attributes
        </calcite-label>
      )}
      <calcite-button
        disabled={userDefined && isNaN(userScale as number) ? '' : null}
        onClick={() => {
          const graphics = (props.view as __esri.MapView).map.findLayerById('print-graphic') as __esri.GraphicsLayer;
          graphics.visible = false;
          let mapScale =
            scaleTypeRef.current === 'current'
              ? currentScale
              : parseInt((scale.current?.querySelector('calcite-option[selected]') as any)?.value);
          if (userDefined && userScale) {
            mapScale = userScale * 12;
          }
          const selectedLayout = layout.current?.querySelector('calcite-option[selected]') as any;
          let selectedTemplate = JSON.parse(selectedLayout.value).template.replace('.', '');
          const customElements: any[] = getCustomElements(JSON.parse(selectedLayout.value).size, mapScale);
          const showAttributes =
            selectedFeature != undefined && !attributeCheck.current?.disabled && attributeCheck.current?.checked;
          if (showAttributes) {
            const text = formatAttributes(selectedFeature as __esri.Graphic);
            selectedTemplate += '_attributes';
            customElements.push({ PropertyInfo: text });
          }
          if (legendCheck.current?.checked) {
            selectedTemplate += '_legend';
          }
          const template = getTemplate(
            mapScale,
            (format.current?.querySelector('calcite-option[selected]') as any)?.value,
            title.current?.value,
            customElements,
            props.view,
            selectedTemplate,
          );
          const job = {
            title: title.current?.value,
            loading: true,
            submitted: new Date().getTime().toString(),
            href: null,
          };
          setJobs([...jobs, job]);
          jobRef.current = [...jobRef.current, job];
          const oldScale = props.view.scale;
          if (template.outScale != props.view.scale) {
            props.view.scale = template.outScale;
          }
          setTimeout(() => {
            exportMap(props.exportUrl, template, props.view, oldScale)
              .then((result) => {
                setTimeout(() => {
                  graphics.visible = true;
                  const index = jobRef.current.indexOf(job);
                  jobRef.current[index] = { ...jobRef.current[index], ...{ url: result.url, loading: false } };
                  setJobs([...jobRef.current]);
                });
              })
              .catch((reason) => {
                console.log(reason);
                graphics.visible = true;
                const index = jobRef.current.indexOf(job);
                jobRef.current[index] = { ...jobRef.current[index], ...{ error: true, loading: false } };
                setJobs([...jobRef.current]);
              });
          }, 1000);
        }}
      >
        Export
      </calcite-button>
      <div className="esri-print__export-panel-container">
        <h3 className="esri-print__export-title esri-widget__heading">Exported files</h3>
        <div>
          <div>Your exported files will appear here.</div>
        </div>
        <div id="printJobs">
          {jobs.map((job: any) => {
            return (
              <div key={`printjob_${job.submitted}`} className="print-job">
                {job.loading && (
                  <div>
                    <calcite-loader scale="s" inline active></calcite-loader>
                    <span className="loader-text">{`${job.title != '' ? job.title : 'untitled'}`}</span>
                  </div>
                )}
                {job.url && !job.loading && (
                  <div>
                    <calcite-link target="_blank" icon-start="download" href={job.url}>{`${
                      job.title != '' ? job.title : 'untitled'
                    }`}</calcite-link>
                    <calcite-button
                      appearance="transparent"
                      icon-start="x"
                      scale="s"
                      onClick={() => {
                        jobRef.current = jobs.filter((item) => item.title !== job.title);
                        setJobs(jobs.filter((item) => item !== job));
                      }}
                    ></calcite-button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Print;
//        </calcite-tab>
//       <calcite-tab>
//         <calcite-label>
//           Title
//           <calcite-input placeholder="Title of file"></calcite-input>
//         </calcite-label>
//       </calcite-tab>
//     </calcite-tabs>
//   );
// };
// export default Print;
