import React, { useEffect, useRef } from "react";
import { initializeSearch } from "../utils/search";
import "./PropertySearch.css";
import { PropertySearchProps } from "./PropertySearchProps";
function PropertySearch(args: PropertySearchProps) {
  const ref = useRef<HTMLDivElement>(null);
  const loaded = useRef(false);
  //const [view, setView] = useState<__esri.MapView>();

  useEffect(() => {
    //setView(args.view);
    if (!loaded.current) {
      loaded.current = true;
      initializeSearch(
        ref.current as HTMLDivElement,
        args.view,
        args.condosSelected
      );
    }
  }, [args.view]);
  return <div ref={ref}></div>;
}

export default React.memo(PropertySearch);
