export interface CoordinateProps {
  id: string;
  view: __esri.MapView;
  expand: __esri.Expand;
  clickActivated: (view: __esri.MapView) => void;
}

export interface CoordinateFormats {
  label: string;
  value: string;
  placeholder: string;
}