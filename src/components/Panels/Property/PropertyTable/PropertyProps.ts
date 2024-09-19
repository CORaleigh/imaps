export interface PropertyTableProps {
  view: __esri.MapView;
  condos: __esri.Graphic[];
  featureSelected: (selectedFeature: __esri.Graphic) => void;
  featureTableSet: (table: __esri.FeatureTable) => void;
}
