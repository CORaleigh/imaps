import { Alert } from "../../../Shell/utils/alert";
import { Tips } from "../../../Tools/Print/utils/tips";

export interface PropertyProps {
  view: __esri.MapView;
  geometry: __esri.Geometry | undefined;
  selected: (feature?: __esri.Graphic, condos?: __esri.Graphic[]) => void ;
  showTips: (newTips: Tips) => void;
  panelDismissed: () => void;
  isActive: boolean;
  alertSet?: (alert: Alert) => void;

}
