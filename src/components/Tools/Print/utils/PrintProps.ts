export interface PrintProps {
  view: __esri.MapView;
  exportUrl: string;
  selectedProperty: __esri.Graphic | undefined;
  isActive: boolean;
  toolDismissed: Function;
  showTips: Function;
}
