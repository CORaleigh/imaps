import React, { useEffect, useRef, useState } from "react";
import { createTemplate } from "../popuptemplate";
import { initializeFeature, updateFeature } from "../utils/info";
import "./PropertyInfo.css";
import { PropertyInfoProps } from "./PropertyInfoProps";
function PropertyInfo(props: PropertyInfoProps) {
  const loaded = useRef(false);
  const ref = useRef<any>(null);
  const [feature, setFeature] = useState<__esri.Feature>();
  useEffect(() => {
    if (!loaded.current) {
      loaded.current = true;
      setFeature(initializeFeature(ref.current, props.view));
    }
    return () => {
      feature && feature?.destroy();
    };
  }, []);

  useEffect(() => {
    let pin = "";
    if (feature && props.feature) {
      pin = props.feature.getAttribute("PIN_NUM");
      const table = feature?.view.map.allTables.find((table: __esri.Layer) => {
        return table.title.includes("Condo");
      }) as __esri.FeatureLayer;
      // props.feature.view = feature.view;
      props.feature.layer = table;
      props.feature.popupTemplate = createTemplate(
        feature?.view as __esri.MapView,
        table,
        props.feature,
        props.condos,
        props.featureTable
      );
      updateFeature(feature, props.feature, props.condos, props.featureTable);
    } else {
      if (feature) {
        (feature as any).graphic = null;
      }
    }
    const url = new URL(window.location as any);
    url.searchParams.delete("pin");

    if (pin !== "") {
      url.searchParams.set("pin", pin);
    }

    //only pushState when history state is different than parameters
    if (window.history.state?.pins !== pin) {
      window.history.pushState({ pins: pin }, "", url);
    }
  }, [props.feature]);//20240503 - removed props.featureTable
  return <div ref={ref}></div>;
}

export default React.memo(PropertyInfo);
