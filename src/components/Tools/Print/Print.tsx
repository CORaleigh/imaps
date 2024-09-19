import React from 'react';
import { PrintProps } from './utils/PrintProps';
import {
  CalcitePanel,
  CalciteAction,
  CalciteTooltip,
  CalciteTabs,
  CalciteTabTitle,
  CalciteTabNav,
  CalciteTab,
  CalciteLabel,
  CalciteInput,
  CalciteSelect,
  CalciteOption,
  CalciteRadioButtonGroup,
  CalciteRadioButton,
  CalciteSwitch,
  CalciteButton,
  CalciteList,
  CalciteListItem,
  CalciteLoader,
  CalciteIcon,
} from '@esri/calcite-components-react';
import usePrint from './usePrint';
import './Print.css';
import { roundScale } from './utils/print';

const Print = (props: PrintProps) => {
  const {
    isActive,
    toolDismissed,
    tipsClicked,
    selectedTab,
    tabChanged,
    layouts,
    layoutChanged,
    selectedLayout,
    formats,
    formatChanged,
    useCustomScale,
    scales,
    customScaleChanged,
    showFrameChanged,
    showLegendChanged,
    showFrame,
    showLegend,
    titleChanged,
    exports,
    exportClicked,
    selectedFormat,
    customScale,
    setExports,
    showAttributes,
    showAttributesChanged,
    fileNameChanged,
    selectedImageFormat,
    imageFormatChanged,
    imageHeight,
    imageWidth,
    imageHeightChanged,
    imageWidthChanged,
    scaleTypeChanged,
    userDefinedScaleChanged,
    swapWidthHeight,
  } = usePrint(props);
  return (
    <CalcitePanel
      id="print-panel"
      heading="Print"
      data-panel="print"
      hidden={!isActive}
      closed={!isActive ? true : undefined}
      closable
      onCalcitePanelClose={toolDismissed}
      collapsible
    >
      <CalciteAction
        id="printTip"
        icon="lightbulb"
        text="Tips"
        slot="header-actions-end"
        onClick={tipsClicked}
      ></CalciteAction>
      <CalciteTooltip referenceElement="printTip" closeOnClick>
        Show Tip
      </CalciteTooltip>
      <CalciteTabs layout="center" position="top">
        <CalciteTabNav slot="title-group">
          <CalciteTabTitle
            onCalciteTabsActivate={tabChanged}
            title="layout"
            selected={selectedTab === 'layout' ? true : undefined}
          >
            Layout
          </CalciteTabTitle>
          <CalciteTabTitle
            onCalciteTabsActivate={tabChanged}
            title="map"
            selected={selectedTab === 'map' ? true : undefined}
          >
            Map only
          </CalciteTabTitle>
          <CalciteTabTitle
            onCalciteTabsActivate={tabChanged}
            title="exports"
            selected={selectedTab === 'exports' ? true : undefined}
          >
            Exports
          </CalciteTabTitle>
        </CalciteTabNav>
        <CalciteTab>
          <div id="print-container">
            <CalciteLabel>
              Title
              <CalciteInput
                onCalciteInputInput={titleChanged}
                placeholder="Title of file"
              ></CalciteInput>
            </CalciteLabel>
            <CalciteLabel>
              Page Size
              <CalciteSelect label={''} onCalciteSelectChange={layoutChanged}>
                {layouts.map((layout, i) => {
                  return (
                    <CalciteOption
                      key={i}
                      label={layout.label}
                      value={layout}
                      selected={layout.template === selectedLayout?.template}
                    ></CalciteOption>
                  );
                })}
              </CalciteSelect>
            </CalciteLabel>
            <CalciteLabel>
              Format
              <CalciteSelect label={''} onCalciteSelectChange={formatChanged}>
                {formats.map((format, i) => {
                  return (
                    <CalciteOption
                      key={i}
                      label={format}
                      value={format}
                      selected={format === selectedFormat ? true : undefined}
                    ></CalciteOption>
                  );
                })}
              </CalciteSelect>
            </CalciteLabel>
            <CalciteRadioButtonGroup name={''} layout="horizontal">
              <CalciteLabel layout="inline">
                <CalciteRadioButton
                  checked={useCustomScale ? undefined : true}
                  onCalciteRadioButtonChange={scaleTypeChanged}
                  value="current"
                ></CalciteRadioButton>
                Current Scale
              </CalciteLabel>
              <CalciteLabel layout="inline">
                <CalciteRadioButton
                  checked={useCustomScale ? true : undefined}
                  value="custom"
                  onCalciteRadioButtonChange={scaleTypeChanged}
                ></CalciteRadioButton>
                Custom Scale
              </CalciteLabel>
            </CalciteRadioButtonGroup>
            {useCustomScale && (
              <CalciteLabel>
                Scale
                <CalciteSelect
                  label={''}
                  onCalciteSelectChange={customScaleChanged}
                >
                  {scales.map((scale, i) => {
                    return (
                      <CalciteOption
                        key={i}
                        label={scale.label}
                        value={scale}
                        selected={
                          scale.scale === customScale?.scale ? true : undefined
                        }
                      ></CalciteOption>
                    );
                  })}
                </CalciteSelect>
              </CalciteLabel>
            )}

            {customScale?.scale === 'custom' && (
              <div>
                <CalciteInput
                  type="number"
                  prefixText="1 in"
                  suffixText="ft"
                  onCalciteInputInput={userDefinedScaleChanged}
                ></CalciteInput>
                <br />
              </div>
            )}
            {props.selectedProperty && (
              <CalciteLabel layout="inline">
                <CalciteSwitch
                  checked={showAttributes ? true : undefined}
                  onCalciteSwitchChange={showAttributesChanged}
                ></CalciteSwitch>
                Show property attributes
              </CalciteLabel>
            )}
            <CalciteLabel layout="inline">
              <CalciteSwitch
                checked={showLegend ? true : undefined}
                onCalciteSwitchChange={showLegendChanged}
              ></CalciteSwitch>
              Show legend
            </CalciteLabel>

            <CalciteLabel layout="inline">
              <CalciteSwitch
                checked={showFrame ? true : undefined}
                onCalciteSwitchChange={showFrameChanged}
              ></CalciteSwitch>
              Show print area
            </CalciteLabel>

            <CalciteButton width="full" onClick={exportClicked}>
              Export
            </CalciteButton>
          </div>
        </CalciteTab>
        <CalciteTab>
          <div id="print-container">
            <CalciteLabel>
              File name
              <CalciteInput
                onCalciteInputInput={fileNameChanged}
                placeholder="File"
              ></CalciteInput>
            </CalciteLabel>
            <CalciteLabel>
              Format
              <CalciteSelect
                label={''}
                onCalciteSelectChange={imageFormatChanged}
              >
                {formats.map((format, i) => {
                  return (
                    <CalciteOption
                      key={i}
                      label={format}
                      value={format}
                      selected={
                        format === selectedImageFormat ? true : undefined
                      }
                    ></CalciteOption>
                  );
                })}
              </CalciteSelect>
            </CalciteLabel>
            <div className="map-only-size">
              <CalciteLabel>
                Width
                <CalciteInput
                  onCalciteInputChange={imageWidthChanged}
                  type="number"
                  value={imageWidth.toString()}
                ></CalciteInput>
              </CalciteLabel>
              <CalciteLabel>
                Height
                <CalciteInput
                  onCalciteInputChange={imageHeightChanged}
                  type="number"
                  value={imageHeight.toString()}
                ></CalciteInput>
              </CalciteLabel>

              <CalciteButton
                onClick={swapWidthHeight}
                iconStart="arrow-right-left"
                label="swap width/height"
                appearance="transparent"
                kind="neutral"
              ></CalciteButton>
            </div>
            <CalciteLabel layout="inline">
              <CalciteSwitch
                checked={showFrame ? true : undefined}
                onCalciteSwitchChange={showFrameChanged}
              ></CalciteSwitch>
              Show print area
            </CalciteLabel>
            <CalciteButton width="full" onClick={exportClicked}>
              Export
            </CalciteButton>
          </div>
        </CalciteTab>
        <CalciteTab>
          {exports.length > 0 && (
            <CalciteList>
              {exports.map((item, i) => {
                return (
                  <CalciteListItem
                    closable
                    label={item.title}
                    description={
                      item.loading
                        ? 'Generating export'
                        : item.url
                          ? 'Open in new window'
                          : item.error
                    }
                    key={item.id}
                    onCalciteListItemClose={(e) => {
                      setExports(
                        exports.filter(
                          (exportItem) => exportItem.id !== item.id,
                        ),
                      );
                    }}
                    disabled={item.loading && item.url == '' ? true : undefined}
                    onCalciteListItemSelect={(_) => {
                      if (item.url !== undefined) {
                        window.open(item.url, '_blank');
                      }
                    }}
                  >
                    <div slot="content-start">
                      {item.loading && (
                        <CalciteLoader
                          class="export-loader"
                          inline
                          label=""
                        ></CalciteLoader>
                      )}
                      {!item.loading && item.format === 'PDF' && (
                        <CalciteIcon
                          class="export-loader"
                          scale="s"
                          icon={
                            item.url !== undefined
                              ? 'file-pdf'
                              : 'exclamation-mark-circle'
                          }
                          className={`${
                            item.error !== undefined ? 'print-error' : ''
                          }`}
                        ></CalciteIcon>
                      )}
                      {!item.loading && item.format !== 'PDF' && (
                        <CalciteIcon
                          class="export-loader"
                          scale="s"
                          icon={
                            item.url !== undefined
                              ? 'file'
                              : 'exclamation-mark-circle'
                          }
                        ></CalciteIcon>
                      )}
                    </div>
                    <div slot="content-end">
                      {!item.loading && item.url && (
                        <CalciteIcon
                          class="export-loader"
                          scale="s"
                          icon="launch"
                        ></CalciteIcon>
                      )}
                    </div>
                  </CalciteListItem>
                );
              })}
            </CalciteList>
          )}
          {exports.length == 0 && (
            <div className="no-exports">
              <CalciteIcon scale="l" icon="file"></CalciteIcon>
              <h3>No exported files</h3>
              <div>
                When you export a file, it will be shown here. Exports are only
                stored for a short period of time. Download your export to
                ensure continued access.
              </div>
            </div>
          )}
        </CalciteTab>
      </CalciteTabs>
    </CalcitePanel>
  );
};
export default React.memo(Print);
