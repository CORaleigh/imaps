export interface CoordinateProps {
  id: string;
  view: __esri.MapView;
  expand: __esri.Expand;
  clickActivated: Function;
}

export interface CoordinateFormats {
  label: string;
  value: string;
  placeholder: string;
}