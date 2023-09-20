export interface PropertyProps {
  view: __esri.MapView;
  geometry: __esri.Geometry | undefined;
  selected: Function;
  showTips: Function;
  panelDismissed: Function;
  isActive: boolean;
  alertSet?: Function;

}
