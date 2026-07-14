import type Graphic from "@arcgis/core/Graphic";
import type FeatureLayer from "@arcgis/core/layers/FeatureLayer";

export interface Service {
  title: string;
  graphics: Graphic[];
  layers: Layer[];
}

interface Layer {
  title: string;
  layer: FeatureLayer | undefined;
}



export const SERVICE_DEFS: Service[] = [
  {
    title: "Electoral",
    graphics: [],
    layers: [
      { title: "Precincts", layer: undefined },
      { title: "US House of Representatives Districts", layer: undefined },
      { title: "NC House of Representatives Districts", layer: undefined },
      { title: "NC Senate Districts", layer: undefined },
      { title: "School Board Districts", layer: undefined },
      { title: "Board of Commissioners Districts", layer: undefined },
      { title: "Superior Court Districts", layer: undefined },
      { title: "Raleigh City Council", layer: undefined },
    ],
  },
  {
    title: "Environmental",
    graphics: [],
    layers: [
      { title: "Floodplain", layer: undefined },
      { title: "Soils", layer: undefined },
      { title: "Critical Watersheds", layer: undefined },
      { title: "Water Supply Watersheds", layer: undefined },
    ],
  },
  {
    title: "Planning",
    graphics: [],
    layers: [
      { title: "Angier Zoning", layer: undefined },
      { title: "Apex Zoning", layer: undefined },
      { title: "Cary Zoning", layer: undefined },
      { title: "County Zoning", layer: undefined },
      { title: "Fuquay-Varina Zoning", layer: undefined },
      { title: "Holly Springs Zoning", layer: undefined },
      { title: "Morrisville Zoning", layer: undefined },
      { title: "Knightdale Zoning", layer: undefined },
      { title: "Rolesville Zoning", layer: undefined },
      { title: "Wake Forest Zoning", layer: undefined },
      { title: "Wendell Zoning", layer: undefined },
      { title: "Zebulon Zoning", layer: undefined },
      { title: "Corporate Limits", layer: undefined },
      { title: "Planning Jurisdictions", layer: undefined },
      { title: "Subdivisions", layer: undefined },
      { title: "Development Plans", layer: undefined },
    ],
  },
  {
    title: "Public Safety",
    graphics: [],
    layers: [
      { title: "Raleigh Police Districts", layer: undefined },
      { title: "Sheriff Zones", layer: undefined },
      { title: "Fire Insurance Districts", layer: undefined },
      { title: "Fire Response Zones", layer: undefined },
      { title: "EMS Franchise Districts", layer: undefined },
      { title: "EMS Response Zones", layer: undefined },
      { title: "Garner Police Beats", layer: undefined },
    ],
  },
  {
    title: "Solid Waste",
    graphics: [],
    layers: [
      { title: "Raleigh Solid Waste Collection Routes", layer: undefined },
    ],
  },
];
