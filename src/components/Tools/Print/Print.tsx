import {
  CalciteButton,
  CalciteCheckbox,
  CalciteInput,
  CalciteLabel,
  CalciteLink,
  CalciteLoader,
  CalciteOption,
  CalciteRadioButton,
  CalciteRadioButtonGroup,
  CalciteSelect,
  CalcitePanel,
  CalciteAction,
  CalciteTooltip,
} from "@esri/calcite-components-react";
import React, { useCallback } from "react";
import "./Print.css";
import { getScales, exportClicked, showFrame } from "./utils/print";

import { collapsePanel } from "../../Shell/utils/shell";
import usePrint from "./utils/usePrint";
import { PrintProps } from "./utils/PrintProps";
const Print = (props: PrintProps) => {
  const {
    isActive,
    title,
    setSelectedLayout,
    layouts,
    selectedFormat,
    setSelectedFormat,
    formats,
    setScaleType,
    scaleType,
    customScaleSelect,
    setCustomScale,
    customScale,
    userDefined,
    selectedProperty,
    selectedLayout,
    attributes,
    legend,
    setJobs,
    jobs,
    jobRef,
    tipsClicked,
    showFrameChanged,
    frame,
    scales
  } = usePrint(props);
  const toolDismissed = useCallback((e: any) => {
    props.toolDismissed();
  }, []);
  return (
    <CalcitePanel
      id="print-panel"
      heading="Print"
      data-panel="print"
      hidden={!isActive}
      closed={!isActive ? true : undefined}
      closable
      onCalcitePanelClose={toolDismissed}
    >
      <CalciteAction
        id="tip"
        icon="lightbulb"
        text="Tips"
        slot="header-actions-end"
        onClick={tipsClicked}
      ></CalciteAction>
      <CalciteAction
        id="collapseTool"
        icon="chevron-up"
        text=""
        slot="header-actions-end"
        onClick={collapsePanel}
      ></CalciteAction>
      <CalciteTooltip label="Show Tip" referenceElement="tip" closeOnClick>
        Show Tip
      </CalciteTooltip>
      <CalciteTooltip
        label="Collapse"
        referenceElement="collapseTool"
        closeOnClick
      >
        Collapse
      </CalciteTooltip>
      <div id="print-container">
        <CalciteLabel>
          Title
          <CalciteInput ref={title} maxLength={50}></CalciteInput>
        </CalciteLabel>
        <CalciteLabel>
          Page size
          <CalciteSelect
            label={""}
            onCalciteSelectChange={(e) => {
              setSelectedLayout(e.target.selectedOption.value);
              if (frame.current) {
                showFrame(
                  frame.current.checked,
                  props.view,
                  selectedLayout,
                  scaleType,
                  customScaleSelect
                );
              }
            }}
          >
            {layouts.map((layout, i) => {
              return (
                <CalciteOption
                  key={i}
                  label={layout.label}
                  value={JSON.stringify(layout)}
                ></CalciteOption>
              );
            })}
          </CalciteSelect>
        </CalciteLabel>
        <CalciteLabel>
          File format
          <CalciteSelect
            label={""}
            onCalciteSelectChange={(e) =>
              setSelectedFormat(e.target.selectedOption.value)
            }
          >
            {formats.map((format, i) => {
              return (
                <CalciteOption
                  key={i}
                  label={format}
                  value={format}
                ></CalciteOption>
              );
            })}
          </CalciteSelect>
        </CalciteLabel>
        <CalciteRadioButtonGroup name="scale-radio">
          <CalciteLabel layout="inline">
            <CalciteRadioButton
              checked={scaleType === "current" ? true : undefined}
              value="current"
              onCalciteRadioButtonChange={(e) => {
                setScaleType(e.target.value);
                if (frame.current) {
                  showFrame(
                    frame.current.checked,
                    props.view,
                    selectedLayout,
                    scaleType,
                    customScaleSelect
                  );
                }
              }}
            ></CalciteRadioButton>
            Current Scale
          </CalciteLabel>
          <CalciteLabel layout="inline">
            <CalciteRadioButton
              checked={scaleType === "custom" ? true : undefined}
              value="custom"
              onCalciteRadioButtonChange={(e) => {
                setScaleType(e.target.value);
                if (frame.current) {
                  showFrame(
                    frame.current.checked,
                    props.view,
                    selectedLayout,
                    scaleType,
                    customScaleSelect
                  );
                }
              }}
            ></CalciteRadioButton>
            Custom Scale
          </CalciteLabel>
        </CalciteRadioButtonGroup>
        {scaleType === "custom" && (
          <CalciteLabel>
            Scale {customScale}
            <CalciteSelect
              ref={customScaleSelect}
              label={""}
              value={customScale}
              onCalciteSelectChange={(e) => {
                setCustomScale(e.target.selectedOption.value);
                if (frame.current) {
                  showFrame(
                    frame.current.checked,
                    props.view,
                    selectedLayout,
                    scaleType,
                    customScaleSelect
                  );
                }
              }}
            >
              {props?.view &&
                scales.map((scale, i) => {
                  return (
                    <CalciteOption
                      key={i}
                      label={scale.label}
                      value={scale.scale}
                      selected={scale.scale === customScale}
                    ></CalciteOption>
                  );
                })}
            </CalciteSelect>
          </CalciteLabel>
        )}
        {scaleType === "custom" && customScale === "custom" && (
          <CalciteInput
            ref={userDefined}
            type="number"
            prefixText={`1" = `}
            suffixText={`'`}
            min={1}
            max={50000}
          ></CalciteInput>
        )}
        <br />
        {selectedProperty && (
          <CalciteLabel layout="inline">
            <CalciteCheckbox
              ref={attributes}
              value="attributes"
            ></CalciteCheckbox>
            Include attributes?
          </CalciteLabel>
        )}
        <CalciteLabel layout="inline">
          <CalciteCheckbox ref={legend} value="legend"></CalciteCheckbox>Include
          Legend?
        </CalciteLabel>
        <CalciteLabel layout="inline">
          <CalciteCheckbox
            ref={frame}
            value="frameChecked"
            onCalciteCheckboxChange={showFrameChanged}
          ></CalciteCheckbox>
          Show map frame?
        </CalciteLabel>
        <CalciteButton
          width="full"
          onClick={() => {
            exportClicked(
              props.view,
              props.exportUrl,
              scaleType,
              customScale,
              userDefined?.current?.value,
              selectedLayout,
              selectedFormat,
              selectedProperty,
              title.current?.value,
              attributes.current?.checked,
              legend.current?.checked,
              jobRef,
              jobs,
              setJobs
            );
          }}
        >
          Export
        </CalciteButton>
        <hr></hr>
        <h4>Exported files</h4>
        {jobs.length <= 0 && <p>Your exported files will appear here</p>}
        <div id="printJobs">
          {jobs.map((job: any) => {
            return (
              <div key={`printjob_${job.submitted}`} className="print-job">
                {job.loading && (
                  <div>
                    <CalciteLoader scale="s" inline label={""}></CalciteLoader>
                    <span className="loader-text">{`${
                      job.title !== "" ? job.title : "untitled"
                    }`}</span>
                  </div>
                )}
                {job.url && !job.loading && (
                  <div>
                    <CalciteLink
                      target="_blank"
                      icon-start="download"
                      href={job.url}
                    >{`${
                      job.title !== "" ? job.title : "untitled"
                    }`}</CalciteLink>
                    <CalciteButton
                      appearance="transparent"
                      icon-start="x"
                      scale="s"
                      onClick={() => {
                        jobRef.current = jobs.filter(
                          (item) => item.title !== job.title
                        );
                        setJobs(jobs.filter((item) => item !== job));
                      }}
                    ></CalciteButton>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </CalcitePanel>
  );
}

export default React.memo(Print);
