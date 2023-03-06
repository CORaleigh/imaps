import MapView from "@arcgis/core/views/MapView";
import Measurement from "@arcgis/core/widgets/Measurement";
export function initializeMeasure(ref: HTMLDivElement, view: MapView) {
  const measurement = new Measurement({
    view: view,
    container: ref,
    areaUnit: "imperial",
    linearUnit: "imperial",
  });

  return measurement;
}
