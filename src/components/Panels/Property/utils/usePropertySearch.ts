import { useCallback, useEffect, useRef, useState } from "react";
import { initializeSearch, searchHistory } from "./search";

import { PropertySearchProps } from "../PropertySearch/PropertySearchProps";

const usePropertySearch = (props: PropertySearchProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const loaded = useRef(false);
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
      searchHistory(term)
    }, []);    
    return {
        ref, historySelected
      };
}

export default usePropertySearch;
