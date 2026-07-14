import React from "react";
import "@esri/calcite-components/components/calcite-panel";
import "@esri/calcite-components/components/calcite-tabs";
import "@esri/calcite-components/components/calcite-tab";
import "@esri/calcite-components/components/calcite-tab-nav";
import "@esri/calcite-components/components/calcite-tab-title";
import "@esri/calcite-components/components/calcite-select";
import "@esri/calcite-components/components/calcite-switch";
import "@esri/calcite-components/components/calcite-radio-button";
import "@esri/calcite-components/components/calcite-radio-button-group";
import "@esri/calcite-components/components/calcite-button";
import "@esri/calcite-components/components/calcite-label";
import "@esri/calcite-components/components/calcite-loader";

import { usePrint, type Format } from "./usePrint";
import type { Layout, MapScale } from "./printLayouts";

import styles from "./Print.module.css";
import TipManager from "../../TipsManager";

interface PrintProps {
  mapElement: React.RefObject<HTMLArcgisMapElement>;
  closed: boolean;
  onToolClose: () => void;
  onHelpClick: (id: string) => void;
}

const Print: React.FC<PrintProps> = ({ mapElement, closed, onToolClose, onHelpClick }) => {
  const {
    printOptions,
    exports,
    formats,
    scales,
    layouts,
    selectedTab,
    selectedCondo,
    handleTitleChange,
    handleScaleTypeChange,
    handleRemovePrintResult,
    handleLayoutSelected,
    handleFormatSelected,
    handleTabChange,
    handleExportClick,
    handleShowAttributesChange,
    handleShowLegendChange,
    handleShowPrintAreaChange,
    handleCustomScaleChange,
    handleUserDefinedInput,
  } = usePrint(mapElement, closed);
  return (
    <calcite-panel
      id={styles.printPanel}
      heading="Print"
      closable
      oncalcitePanelClose={() => onToolClose()}
      closed={closed}
      collapsible
    >
      <calcite-action
        slot="header-actions-end"
        icon="question-mark"
        text="Help"
        onClick={() => onHelpClick("print")}
      ></calcite-action>
      <TipManager name="print"></TipManager>
      <calcite-tabs bordered position="top">
        <calcite-tab-nav
          slot="title-group"
          oncalciteTabChange={handleTabChange}
        >
          <calcite-tab-title selected={selectedTab === "layout"}>
            Layout
          </calcite-tab-title>
          <calcite-tab-title selected={selectedTab === "exports"}>
            Exports
          </calcite-tab-title>
        </calcite-tab-nav>
        <calcite-tab selected={selectedTab === "layout"}>
          <div className={styles.tabContent}>
            <calcite-label>
              Title
              <calcite-input-text
                placeholder="Title of file"
                value={printOptions.title}
                oncalciteInputTextInput={handleTitleChange}
              ></calcite-input-text>
            </calcite-label>
            <calcite-label>
              Layouts
              <calcite-select
                label={"layouts"}
                oncalciteSelectChange={handleLayoutSelected}
              >
                {layouts.map((layout: Layout) => (
                  <calcite-option key={layout.template} value={layout}>
                    {layout.label}
                  </calcite-option>
                ))}
              </calcite-select>
            </calcite-label>
            <calcite-label>
              File Format
              <calcite-select
                label={"file format"}
                oncalciteSelectChange={handleFormatSelected}
              >
                {formats.current.map((format: Format) => (
                  <calcite-option key={format} value={format}>
                    {format}
                  </calcite-option>
                ))}
              </calcite-select>
            </calcite-label>
            <calcite-radio-button-group
              name="scale options"
              layout="horizontal"
              oncalciteRadioButtonGroupChange={handleScaleTypeChange}
            >
              <calcite-label layout="inline">
                <calcite-radio-button
                  value="current"
                  checked={printOptions.scaleType === "current"}
                ></calcite-radio-button>
                Current Scale
              </calcite-label>
              <calcite-label layout="inline">
                <calcite-radio-button
                  value="custom"
                  checked={printOptions.scaleType === "custom"}
                ></calcite-radio-button>
                Custom Scale
              </calcite-label>
            </calcite-radio-button-group>
            {printOptions.scaleType === "custom" && (
              <>
                <calcite-label>
                  Scale
                  <calcite-select
                    label={"custom scale"}
                    oncalciteSelectChange={handleCustomScaleChange}
                  >
                    {scales.map((scale: MapScale) => (
                      <calcite-option value={scale.scale}>
                        {scale.label}
                      </calcite-option>
                    ))}
                  </calcite-select>
                </calcite-label>
                {printOptions.userDefined && (
                  <calcite-label>
                    <calcite-input-number
                      prefixText="1 in ="
                      suffixText="ft"
                      min={1}
                      label={"custom scale"}
                      oncalciteInputNumberInput={handleUserDefinedInput}
                    ></calcite-input-number>
                  </calcite-label>
                )}
              </>
            )}
            {selectedCondo && (
              <calcite-label layout="inline">
                <calcite-switch
                  checked={printOptions.showAttributes}
                  oncalciteSwitchChange={handleShowAttributesChange}
                ></calcite-switch>
                Show attributes
              </calcite-label>
            )}
            <calcite-label layout="inline">
              <calcite-switch
                checked={printOptions.showLegend}
                oncalciteSwitchChange={handleShowLegendChange}
              ></calcite-switch>
              Show legend
            </calcite-label>
            <calcite-label layout="inline">
              <calcite-switch
                checked={printOptions.showPrintArea}
                oncalciteSwitchChange={handleShowPrintAreaChange}
              ></calcite-switch>
              Show print area
            </calcite-label>
            <calcite-button width="full" scale="l" onClick={handleExportClick}>
              Export Map
            </calcite-button>
          </div>
        </calcite-tab>
        <calcite-tab selected={selectedTab === "exports"}>
          {exports.length === 0 && (
            <section className="arcgis-print__export-section--centered">
              <div className="arcgis-print__panel-container">
                <div className="arcgis-print__exported-files-empty">
                  <calcite-icon icon="file" scale="l"></calcite-icon>
                  <div>
                    <p className="arcgis-print__export-title">
                      No exported files
                    </p>
                    <div>
                      When you export a file, it will be shown here. Exports are
                      only stored for a short period of time. Download your
                      export to ensure continued access.
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
          {exports.length > 0 && (
            <calcite-list label={"print results"}>
              {exports.map((result) => (
                <calcite-list-item
                  closable
                  key={result.id.toString()}
                  value={result.id.toString()}
                  oncalciteListItemClose={handleRemovePrintResult}
                  disabled={result.loading}
                >
                  <div
                    slot="content"
                    className="arcgis-print__exported-file"
                    onClick={() => window.open(result.url)}
                  >
                    {!result.loading && (
                      <calcite-icon
                        icon="file-pdf"
                        slot="content-start"
                        scale="s"
                      ></calcite-icon>
                    )}
                    {result.loading && (
                      <calcite-loader
                        inline
                        label={"loading"}
                        scale="m"
                        slot="content-start"
                      ></calcite-loader>
                    )}
                    <div>
                      <div className="arcgis-print__exported-file-link-title">
                        {result.title}
                      </div>
                      <div className="arcgis-print__exported-file-link-description">
                        Open in new window.
                      </div>
                    </div>
                    <div slot="content-end">
                      {!result.loading && (
                        <calcite-icon
                          scale="s"
                          aria-hidden="true"
                          icon="launch"
                          calcite-hydrated=""
                        ></calcite-icon>
                      )}
                      {result.loading && (
                        <calcite-icon
                          scale="s"
                          aria-hidden="true"
                          calcite-hydrated=""
                        ></calcite-icon>
                      )}
                    </div>
                  </div>
                </calcite-list-item>
              ))}
            </calcite-list>
          )}
        </calcite-tab>
      </calcite-tabs>
    </calcite-panel>
  );
};

export default Print;
