import {
  CalciteAction,
  CalciteCombobox,
  CalciteComboboxItem,
  CalciteLabel,
  CalcitePanel,
  CalciteTooltip,
} from "@esri/calcite-components-react";
import React, {  } from "react";
import {
  intersectingStreetSelected,
} from "./utils/location";
import "./Location.css";
import useLocation from "./utils/useLocation";
import { PanelProps } from "../utils/PanelProps";
const Location = (props: PanelProps) => {
   
  const { 
    searchDiv,
    featureDiv,
    search,
    isIntersection,
    intersections,
    searchTerm,
    isActive,
    panelDismissed,
    tipsClicked    
  } = useLocation(props);

  return (
    <CalcitePanel
      id="location-panel"
      heading="Location Search"
      hidden={!isActive}
      closed={!isActive ? true : undefined}
      closable
      onCalcitePanelClose={panelDismissed}
    >
      <CalciteAction id="locationTip" icon="lightbulb"  text="Tips" slot="header-actions-end" onClick={tipsClicked}></CalciteAction>
      <CalciteTooltip referenceElement="locationTip" closeOnClick>Show Tip</CalciteTooltip>
      <div id="location-search">
        <div ref={searchDiv}></div>
        {isIntersection && (
          <div id="intersection-search">
            <CalciteLabel>
              Intersections
              <CalciteCombobox label={""} selectionMode="single" scale="l">
                {intersections.map((intersection, i) => {
                  return (
                    <CalciteComboboxItem
                      key={i}
                      textLabel={intersection}
                      value={intersection}
                      onCalciteComboboxItemChange={(e: any) => {
                        if (e.target.selected) {
                          intersectingStreetSelected(
                            intersection,
                            searchTerm,
                            search?.current?.view as __esri.MapView
                          );
                        }
                      }}
                    ></CalciteComboboxItem>
                  );
                })}
              </CalciteCombobox>
            </CalciteLabel>
          </div>
        )}
        <div id="location-feature" ref={featureDiv}></div>
      </div>
    </CalcitePanel>
  );
}

export default React.memo(Location);
