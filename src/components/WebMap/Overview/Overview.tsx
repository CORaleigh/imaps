import React from 'react';

import './Overview.css';
import useOverview from './utils/useOverview';
interface Props {
  id: string;
  view: __esri.MapView;
}
function Overview(props: Props) {
  const { ref } = useOverview(props);

  return <div id="overview-map" ref={ref}></div>;
}

export default React.memo(Overview);
