import { useCallback, useEffect, useRef, useState } from "react";
import { initializeSearch, searchHistory } from "./search";

import { PropertySearchProps } from "../PropertySearch/PropertySearchProps";

const usePropertySearch = (props: PropertySearchProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const loaded = useRef(false);
    const popover = useRef<HTMLCalcitePopoverElement>(null);

    //const [view, setView] = useState<__esri.MapView>();
  
    useEffect(() => {
      //setView(props.view);
      if (!loaded.current) {
        loaded.current = true;
        initializeSearch(
          ref.current as HTMLDivElement,
          props.view,
          props.condosSelected
        );
      }
    }, [props.view]);
    const historySelected = useCallback((term: string) => {
      debugger
      if (popover.current) {
        console.log(popover.current.open)
        popover.current.open = false;
      }
      searchHistory(term)
    }, []);    
    return {
        ref, historySelected, popover
      };
}

export default usePropertySearch;
