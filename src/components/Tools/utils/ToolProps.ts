import { Tips } from '../Print/utils/tips';

export interface ToolProps {
  view: __esri.MapView;
  isActive: boolean;
  toolDismissed: () => void;
  showTips: (newTips: Tips) => void;
}
