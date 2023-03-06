import React from "react";

import "./WebMap.css";
import useOverview from "./utils/useOverview";
function Overview(args: any) {
  const { ref } = useOverview(args);

  return <div id="overview-map" ref={ref}></div>;
}

export default React.memo(Overview);
