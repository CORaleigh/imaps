import {
  CalciteScrim,
  CalciteTab,
  CalciteTabNav,
  CalciteTabs,
  CalciteTabTitle,
  CalcitePanel,
  CalciteButton,
  CalciteAction,
  CalciteTooltip,
} from "@esri/calcite-components-react";
import React from "react";
import "./Property.css";
import PropertySearch from "./PropertySearch/PropertySearch";
import PropertyTable from "./PropertyTable/PropertyTable";
import PropertyInfo from "./PropertyInfo/PropertyInfo";
import useProperty from "./utils/useProperty";
import { PropertyProps } from "./utils/PropertyProps";
function Property(props: PropertyProps) {
  const {
    condos,
    feature,
    infoDisabled,
    searching,
    setSearching,
    activeTab,
    isActive,
    condosSelected,
    featureSelected,
    panelDismissed,
    clearSearch,
    tipsClicked,
    featureTable,
    setFeatureTable,
  } = useProperty(props);

  return (
    <CalcitePanel
      id="search-panel"
      heading="Property Search"
      hidden={!isActive}
      closed={!isActive ? true : undefined}
      closable
      onCalcitePanelClose={panelDismissed}
    >
      <CalciteAction
        id="propertyTip"
        icon="lightbulb"
        text="Tips"
        slot="header-actions-end"
        onClick={tipsClicked}
      ></CalciteAction>
      <CalciteTooltip referenceElement="propertyTip" closeOnClick>
        Show Tip
      </CalciteTooltip>
      <div className="property">
        {props.view && (
          <div className="row">
            <PropertySearch
              view={props.view}
              searchingChanged={(isSearching: boolean) =>
                setSearching(isSearching)
              }
              condosSelected={condosSelected}
            ></PropertySearch>
            <CalciteButton
              id="clearSelection"
              iconEnd="trash"
              appearance="transparent"
              scale="m"
              kind="neutral"
              onClick={() => {
                clearSearch(props.view);
              }}
            ></CalciteButton>
            <CalciteTooltip
              referenceElement="clearSelection"
              closeOnClick
            >
              Clear Selection
            </CalciteTooltip>
          </div>
        )}
        <CalciteTabs position="bottom" layout="center" scale="l">
          <CalciteTabNav slot="title-group">
            <CalciteTabTitle selected={activeTab === "list" ? true : undefined}>
              List
            </CalciteTabTitle>
            <CalciteTabTitle
              disabled={infoDisabled === true ? true : undefined}
              selected={activeTab === "info" ? true : undefined}
            >
              Info
            </CalciteTabTitle>
          </CalciteTabNav>
          <CalciteTab>
            {props.view && (
              <PropertyTable
                view={props.view}
                condos={condos}
                featureSelected={featureSelected}
                featureTableSet={(table: __esri.FeatureTable) =>
                  setFeatureTable(table)
                }
              ></PropertyTable>
            )}
          </CalciteTab>
          <CalciteTab>
            {props.view && (
              <PropertyInfo
                view={props.view}
                feature={feature}
                condos={condos}
                featureTable={featureTable}
              ></PropertyInfo>
            )}
          </CalciteTab>
          <CalciteScrim
            loading
            hidden={!searching ? true : undefined}
          ></CalciteScrim>
        </CalciteTabs>
      </div>
    </CalcitePanel>
  );
}

export default React.memo(Property);
