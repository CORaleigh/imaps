/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useRef, useState } from 'react';
import esriRequest from '@arcgis/core/request';
import PrintTask from '@arcgis/core/tasks/PrintTask';
import PrintParameters from '@arcgis/core/tasks/support/PrintParameters';
import PrintTemplate from '@arcgis/core/tasks/support/PrintTemplate';
import LegendLayer from '@arcgis/core/tasks/support/LegendLayer';
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
        return lod.scale >= 300 && lod.scale < 614400;
      })
      .map((lod: any) => {
        const scale = roundScale(lod.scale);
        return { scale: scale, label: `1" = ${(scale / 12).toLocaleString('en')}'` };
      })
      ?.reverse();
    setScales(scales);
  };
  const roundScale = (mapScale: number): number => {
    const newScale = Math.round((mapScale * 600) / 564.248588);
    if (newScale <= 75) {
      return 75;
    }
    if (newScale > 75 && newScale <= 150) {
      return 150;
    }
    if (newScale > 150 && newScale <= 300) {
      return 300;
    }
    if (newScale > 300 && newScale <= 600) {
      return 600;
    }
    if (newScale > 600 && newScale <= 1200) {
      return 1200;
    }
    if (newScale > 1200 && newScale <= 2400) {
      return 2400;
    }
    if (newScale > 2400 && newScale <= 4800) {
      return 4800;
    }
    if (newScale > 4800 && newScale <= 9600) {
      return 9600;
    }
    if (newScale > 9600 && newScale <= 19200) {
      return 19200;
    }
    if (newScale > 19200 && newScale <= 38400) {
      return 38400;
    }
    if (newScale > 38400 && newScale <= 76800) {
      return 76800;
    }
    if (newScale > 76800 && newScale <= 153600) {
      return 153600;
    }
    if (newScale > 153600 && newScale <= 307200) {
      return 307200;
    }
    if (newScale > 307200 && newScale <= 614400) {
      return 614400;
    }
    if (newScale > 614400 && newScale <= 1228800) {
      return 1228800;
    }
    return 0;
  };
  useEffect(() => {
    setSelectedFeature(props.selectedFeature);
  }, [props.selectedFeature]); // only after initial render
  useEffect(() => {
    getTemplate(props.url);
    getScales(props.view);
    const scale = roundScale(props.view.scale);
    setCurrentScale(scale);
    props.view.watch('stationary', () => {
      const scale = roundScale(props.view.scale);
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

      {selectedFeature && (
        <calcite-label>
          Include attributes <calcite-checkbox></calcite-checkbox>
        </calcite-label>
      )}
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
              if (!['OBJECTID'].includes(field.name) && selectedFeature.getAttribute(field.name)) {
                if (field.type === 'date') {
                  const date = new Date(selectedFeature.getAttribute(field.name));
                  console.log(date);
                  text += `${field.alias}: ${date.getUTCMonth() + 1}/${date.getUTCDate()}/${date.getUTCFullYear()}\n`;
                } else {
                  text += `${field.alias}: ${selectedFeature.getAttribute(field.name)}\n`;
                }
              }
            });
            // for (const [key, value] of Object.entries(selectedFeature.attributes)) {
            //   console.log(`${key}: ${value}`);
            //   text += `${key}: ${value}\n`;
            // }
            customElements.push({ PropertyInfo: text, HalfScale: mapScale / 2, DoubleScale: mapScale * 2 + ' Feet' });
          }

          const template = new PrintTemplate({
            outScale: mapScale,
            format: (format.current?.querySelector('calcite-option[selected]') as any)?.value,
            layoutOptions: {
              titleText: title.current?.value,
              scalebarUnit: 'Feet',
              customTextElements: customElements,
              legendLayers: (props.view as __esri.MapView).map.layers
                .filter((layer) => {
                  return layer.type != 'imagery' && layer.id != 'selection-layer';
                })
                .map((layer) => {
                  return new LegendLayer({ layerId: layer.id, title: layer.title });
                }) as any,
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
              console.log(reason);
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
