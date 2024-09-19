import { Alert } from '../../Shell/utils/alert';

export interface PanelProps {
  view: __esri.MapView;
  isActive: boolean;
  panelDismissed: () => void;
  showTips: (newTips: any) => void;
  alertSet?: (message: Alert) => void;
  mapId?: String;
}
