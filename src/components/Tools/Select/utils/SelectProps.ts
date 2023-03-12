export interface SelectProps {
  view: __esri.MapView;
  selectedProperty: __esri.Graphic | undefined;
  isActive: boolean;
  geometrySet: Function;
  toolDismissed: Function;
  showTips: Function;
}
