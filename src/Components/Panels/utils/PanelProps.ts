export interface PanelProps {
    view: __esri.MapView;
    isActive: boolean;
    panelDismissed: Function;
    showTips: Function;
    alertSet?: Function | undefined;
}