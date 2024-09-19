import { Tips } from "../../Print/utils/tips";

export interface SelectProps {
  view: __esri.MapView;
  selectedProperty: __esri.Graphic | undefined;
  isActive: boolean;
  geometrySet: (geometry: __esri.Geometry) => void;
  toolDismissed: () => void;
  showTips: (newTips: Tips) => void;
}
