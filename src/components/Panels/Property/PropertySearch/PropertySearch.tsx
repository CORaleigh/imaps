import React, { useEffect, useRef } from "react";
import "./PropertySearch.css";
import { PropertySearchProps } from "./PropertySearchProps";
import usePropertySearch from "../utils/usePropertySearch";
import { CalciteAction, CalciteButton, CalciteList, CalciteListItem, CalcitePopover } from "@esri/calcite-components-react";
import { getSearchHistory } from "../utils/search";
function PropertySearch(props: PropertySearchProps) {
  const {
    ref,
    historySelected
  } = usePropertySearch(props)
  return <div className="row">
    <div ref={ref}></div>
      <CalcitePopover scale="s" heading="Recent searches" label={"Recent searches"} referenceElement={"searchHistory"} closable>
        <CalciteList>
          {getSearchHistory().map((term, i) => {
            return <CalciteListItem key={`history_${i}`} label={term} onClick={() => historySelected(term)}>
              <CalciteAction slot="actions-end" text={"Search"} icon="search" scale="s"></CalciteAction>
            </CalciteListItem>
          })}

        </CalciteList>
      </CalcitePopover>
      <CalciteButton 
        scale="s"
        id="searchHistory"
        iconEnd="clock"
        appearance="transparent"
        kind="neutral"        
        >
      </CalciteButton>
    </div>;
}

export default React.memo(PropertySearch);
