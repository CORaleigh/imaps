/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useRef, useState } from 'react';
import esriRequest from '@arcgis/core/request';
import PrintTask from '@arcgis/core/tasks/PrintTask';
import PrintParameters from '@arcgis/core/tasks/support/PrintParameters';
import PrintTemplate from '@arcgis/core/tasks/support/PrintTemplate';

import './Print.scss';
export const Print = (props: any) => {
  const [layouts, setLayouts] = useState<any[]>([]);
  const [formats, setFormats] = useState<any[]>([]);
  const [scales, setScales] = useState<any[]>([]);
  const [scaleType, setScaleType] = useState('current');
  const [selectedFeature, setSelectedFeature] = useState<__esri.Graphic>();

  const layout = useRef<HTMLCalciteSelectElement>(null);
  const scale = useRef<HTMLCalciteSelectElement>(null);
  const scaleRadio = useRef<HTMLCalciteRadioButtonGroupElement>(null);
  const [currentScale, setCurrentScale] = useState(Math.round((props.view.scale * 600) / 564.248588));
  const format = useRef<HTMLCalciteSelectElement>(null);
  const title = useRef<HTMLCalciteInputElement>(null);
  const [jobs, setJobs] = useState<any>([]);
  const jobRef = useRef<any[]>([]);
  const getTemplate = (url: string) => {
    esriRequest(url, { query: { f: 'json' } }).then((result) => {
      result.data.parameters.forEach((parameter: any) => {
        if (parameter.name === 'Layout_Template') {
          setLayouts(parameter.choiceList);
        }
      });
      result.data.parameters.forEach((parameter: any) => {
        if (parameter.name === 'Format') {
          setFormats(parameter.choiceList);
        }
      });
    });
  };

  const getScales = (view: __esri.MapView) => {
    const scales = (view.constraints as any)._defaultLODs
      .filter((lod: any) => {
        return lod.scale >= 300;
      })
      .map((lod: any) => {
        const scale = Math.round((lod.scale * 600) / 564.248588);
        return { scale: scale, label: `1" = ${(scale / 12).toLocaleString('en')}'` };
      })
      ?.reverse();
    setScales(scales);
  };
  useEffect(() => {
    setSelectedFeature(props.selectedFeature);
  }, [props.selectedFeature]); // only after initial render
  useEffect(() => {
    getTemplate(props.url);
    getScales(props.view);
    const scale = Math.round((props.view.scale * 600) / 564.248588);
    setCurrentScale(scale);
    props.view.watch('stationary', () => {
      const scale = Math.round((props.view.scale * 600) / 564.248588);
      setCurrentScale(scale);
    });
    setTimeout(() => {
      scaleRadio.current?.addEventListener('calciteRadioButtonGroupChange', (e: any) => {
        setScaleType(e.detail);
      });
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
        Page setup
        <calcite-select ref={layout}>
          {layouts.map((layout, i) => {
            return (
              <calcite-option value={layout} key={layout} selected={i === 0 ? '' : null}>
                {layout}
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
        <calcite-radio-button value="current" checked>
          Current Scale ({`1" = ${(currentScale / 12).toLocaleString('en')}'`})
        </calcite-radio-button>
        <calcite-radio-button value="custom">Custom Scale</calcite-radio-button>
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
      <calcite-label>
        Include legend <calcite-checkbox checked></calcite-checkbox>
      </calcite-label>

      <calcite-label>
        Include attributes <calcite-checkbox disabled={selectedFeature === undefined}></calcite-checkbox>
      </calcite-label>
      <calcite-button
        onClick={() => {
          const printTask = new PrintTask({ url: props.url });
          const mapScale =
            scaleType === 'current'
              ? currentScale
              : parseInt((scale.current?.querySelector('calcite-option[selected]') as any)?.value);
          const customElements: any[] = [];
          if (selectedFeature != undefined) {
            let text = '';
            (selectedFeature.layer as __esri.FeatureLayer).fields.forEach((field) => {
              if (!['OBJECTID'].includes(field.name)) {
                text += `${field.alias}: ${selectedFeature.getAttribute(field.name)}\n`;
              }
            });
            // for (const [key, value] of Object.entries(selectedFeature.attributes)) {
            //   console.log(`${key}: ${value}`);
            //   text += `${key}: ${value}\n`;
            // }
            customElements.push({ PropertyInfo: text });
          }

          const template = new PrintTemplate({
            outScale: mapScale,
            format: (format.current?.querySelector('calcite-option[selected]') as any)?.value,
            layoutOptions: {
              titleText: title.current?.value,
              scalebarUnit: 'Feet',
              customTextElements: customElements,
            },
            layout: (layout.current?.querySelector('calcite-option[selected]') as any)?.value,
          });
          const job = {
            title: title.current?.value,
            loading: true,
            submitted: new Date().getTime().toString(),
            href: null,
          };
          setJobs([...jobs, job]);
          jobRef.current = [...jobRef.current, job];
          debugger;
          printTask
            .execute(
              new PrintParameters({
                template: template,
                view: props.view,
              }),
            )
            .then((result) => {
              setTimeout(() => {
                const index = jobRef.current.indexOf(job);
                jobRef.current[index] = { ...jobRef.current[index], ...{ url: result.url, loading: false } };
                setJobs([...jobRef.current]);
              });
            })
            .catch((reason) => {
              const index = jobRef.current.indexOf(job);
              jobRef.current[index] = { ...jobRef.current[index], ...{ error: true, loading: false } };
              setJobs([...jobRef.current]);
            });
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
              <div key={`printjob_${job.submitted}`}>
                {job.loading && <calcite-loader scale="s" inline active>{`${job.title}.pdf`}</calcite-loader>}
                {job.url && !job.loading && (
                  <calcite-link target="_blank" icon-start="download" href={job.url}>{`${job.title}.pdf`}</calcite-link>
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
