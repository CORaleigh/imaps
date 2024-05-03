export interface WebMapProps {
  mapId: string;
  properties: __esri.Graphic[];
  mapViewSet: Function;
  geometrySet: Function;
  widgetActivated: Function;
  alertSet?: Function | undefined;
}
