import { Alert } from '../../Shell/utils/alert';

export interface WebMapProps {
  mapId: string | undefined;
  properties?: __esri.Graphic[];
  mapViewSet: (mapView: __esri.MapView) => void;
  geometrySet: (geometry: __esri.Geometry | undefined) => void;
  widgetActivated: (
    view: __esri.MapView
  ) => void;
  alertSet?: (alert: Alert) => void;
  resetMap: boolean;
}
