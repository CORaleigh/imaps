type ServiceGroup = {
  title: string;
  layers: string[];
};

export type PropertyService = {
  group: ServiceGroup;
};


export const services: PropertyService[] = [
  {
    group: {
      title: 'Electoral',
      layers: [
        'Precincts',
        'US House of Representatives Districts',
        'NC House of Representatives Districts',
        'NC Senate Districts',
        'School Board Districts',
        'Board of Commissioners Districts',
        'Superior Court Districts',
        'Raleigh City Council',
        'Morrisville Town Council Districts',
      ],
    },
  },
  {
    group: {
      title: 'Environmental',
      layers: [
        'Floodplain',
        'Soils',
        'Critical Watersheds',
        'Water Supply Watersheds',
      ],
    },
  },
  {
    group: {
      title: 'Planning',
      layers: [
        'Angier Zoning',
        'Apex Zoning',
        'Cary Zoning',
        'County Zoning',
        'Fuquay-Varina Zoning',
        'Holly Springs Zoning',
        'Morrisville Zoning',
        'Knightdale Zoning',
        'Rolesville Zoning',
        'Wake Forest Zoning',
        'Wendell Zoning',
        'Zebulon Zoning',
        'Corporate Limits',
        'Planning Jurisdictions',
        'Subdivisions',
        'Development Plans',
      ],
    },
  },
  {
    group: {
      title: 'Public Safety',
      layers: [
        'Raleigh Police Districts',
        'Sheriff Zones',
        'Fire Insurance Districts',
        'Fire Response Zones',
        'EMS Franchise Districts',
        'EMS Response Zones',
        'Garner Police Beats',
      ],
    },
  },
  {
    group: {
      title: 'Solid Waste',
      layers: [
        'Cary Collection Routes',
        'Raleigh Solid Waste Collection Routes',
      ],
    },
  },
];



export interface Link {
  title: string;
  links: Link[];
  href?: string;
}

type AlertLink = {
  text: string;
  url: string;
  show: boolean;
};

type Alert = {
  show: boolean;
  autoClose: boolean;
  duration: 'fast' | 'slow'; // Adjust if there are more options
  kind: 'info' | 'warning' | 'error'; // Adjust based on your use case
  icon: string;
  title: string;
  message: string;
  optOut: boolean;
  link: AlertLink;
};

type Logo = {
  light: string;
  dark: string;
};

type SubLink = {
  title: string;
  href: string;
};

type LinkGroup = {
  title: string;
  links: SubLink[];
};

export type AppConfig = {
  title: string;
  logo: Logo;
  mapId: string;
  alert: Alert;
  links: LinkGroup[];
};