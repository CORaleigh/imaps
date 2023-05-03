export interface PropertySearchProps {
  view: __esri.MapView;
  searchingChanged: Function;
  condosSelected: Function;
}

export interface SearchHistoryItem {
  term: string;
  field: string;
}