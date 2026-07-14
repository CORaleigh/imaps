
import WebMap from "@arcgis/core/WebMap";
import type Graphic from "@arcgis/core/Graphic";
import type Geometry from "@arcgis/core/geometry/Geometry";

export type MapMode =
  | "identify"
  | "streetview"
  | "point"
  | "polyline"
  | "polygon"
  | "circle"
  | "rectangle"
  | "text"
  | "select"
  | "multipoint"
  | "coordinate"
  | null;

export interface Alert {
  show: boolean;
  message: string;
  title: string;
  id: number;
  kind: "brand" | "warning" | "danger";
  autoClose: boolean;
  autoCloseDuration: "fast" | "slow" | "medium";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any;
}
export interface MapContextType {
  mapElement: React.RefObject<HTMLArcgisMapElement>;
  webMap: WebMap | null;
  setWebMap: (webMap: WebMap) => void;
  mapReady: boolean;
  setMapReady: (ready: boolean) => void;
  searchReady: boolean;
  setSearchReady: (ready: boolean) => void;
  geometry: Geometry | null;
  setGeometry: (geom: Geometry | null) => void;
  condos: Graphic[];
  setCondos: (condos: Graphic[]) => void;
  selectedCondo: Graphic | null;
  setSelectedCondo: (condos: Graphic | null) => void;
  webMapId: React.RefObject<string>;
  mapMode: MapMode;
  setMapMode: (mode: MapMode) => void;
  handleCustomActionClick: (action: "identify" | "streetview" | null) => void;
  alert: Alert;
  setAlert: (alert: Alert) => void;
}