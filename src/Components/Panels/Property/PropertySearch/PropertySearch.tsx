import React, { useEffect, useRef } from "react";
import { initializeSearch } from "../utils/search";
import "./PropertySearch.css";
import { PropertySearchProps } from "./PropertySearchProps";
function PropertySearch(props: PropertySearchProps) {
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
  return <div ref={ref}></div>;
}

export default React.memo(PropertySearch);
