import { Tips } from './tips';

export interface PrintProps {
  view: __esri.MapView;
  exportUrl: string;
  selectedProperty: __esri.Graphic | undefined;
  isActive: boolean;
  toolDismissed: () => void;
  showTips: (newTips: Tips) => void;
}
