/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useRef, useState } from 'react';

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
export const Print = (props: any) => {
  const [layouts, setLayouts] = useState<any[]>([]);
  const [formats, setFormats] = useState<any[]>([]);
  const [scales, setScales] = useState<any[]>([]);
  const [scaleType, setScaleType] = useState('current');
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
  const jobRef = useRef<any[]>([]);
  const [userScale, setUserScale] = useState<number>(NaN);
  const userInput = useRef<HTMLCalciteInputElement>(null);

  const customScaleChanged = (e: any) => {
    setUserDefined(e.target.selectedOption.value === 'custom');
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
  };

  useEffect(() => {
    setSelectedFeature(props.selectedFeature);
  }, [props.selectedFeature]); // only after initial render
  useEffect(() => {
    getLayouts(props.templateUrl).then((layouts) => setLayouts(layouts));
    getFormats(props.exportUrl).then((formats) => setFormats(formats));
    setScales(getScales(props.view));
    const mapScale = roundScale(props.view.scale);
    setCurrentScale(mapScale);
    props.view.watch('stationary', () => {
      const mapScale = roundScale(props.view.scale);
      setCurrentScale(mapScale);
    });

    setTimeout(() => {
      scaleRadio.current?.addEventListener('calciteRadioButtonGroupChange', (e: any) => {
        setScaleType(e.detail);
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
      <calcite-label>
        Include legend <calcite-checkbox checked ref={legendCheck}></calcite-checkbox>
      </calcite-label>

      {selectedFeature && (
        <calcite-label>
          Include attributes <calcite-checkbox ref={attributeCheck}></calcite-checkbox>
        </calcite-label>
      )}
      <calcite-button
        disabled={userDefined && isNaN(userScale as number) ? '' : null}
        onClick={() => {
          let mapScale =
            scaleType === 'current'
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
          exportMap(props.exportUrl, template, props.view)
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
              <div key={`printjob_${job.submitted}`} className="print-job">
                {job.loading && (
                  <div>
                    <calcite-loader scale="s" inline active></calcite-loader>
                    <span className="loader-text">{`${job.title != '' ? job.title : 'untitled'}.pdf`}</span>
                  </div>
                )}
                {job.url && !job.loading && (
                  <div>
                    <calcite-link target="_blank" icon-start="download" href={job.url}>{`${
                      job.title != '' ? job.title : 'untitled'
                    }.pdf`}</calcite-link>
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
