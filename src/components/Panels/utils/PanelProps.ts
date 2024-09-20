import { Alert } from '../../Shell/utils/alert';
import { Tips } from '../../Tools/Print/utils/tips';

export interface PanelProps {
  view: __esri.MapView;
  isActive: boolean;
  panelDismissed: () => void;
  showTips: (newTips: Tips) => void;
  alertSet?: (message: Alert) => void;
  mapId?: String;
}
