import MapView from "@arcgis/core/views/MapView";
import Legend from "@arcgis/core/widgets/Legend";
export const initializeLegend = (ref: HTMLDivElement, view: MapView) => {
  const legend = new Legend({
    view: view,
    container: ref,
  });
  return legend;
}
