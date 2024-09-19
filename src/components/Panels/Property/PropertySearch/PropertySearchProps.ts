export interface PropertySearchProps {
  view: __esri.MapView;
  searchingChanged: (isSearching: boolean) => void;
  condosSelected: (selectedCondos: __esri.Graphic[]) => void;
}
