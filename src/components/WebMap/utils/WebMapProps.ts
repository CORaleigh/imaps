import { Alert } from "../../Shell/utils/alert";

export interface WebMapProps {
  mapId: string;
  properties?: __esri.Graphic[];
  mapViewSet: (mapView: __esri.MapView) => void;
  geometrySet: (geometry: __esri.Geometry) => void;
  widgetActivated: (view: __esri.MapView, setActiveTool: (activeTool: string) => void) => void;
  alertSet?: (alert: Alert) => void;
}
