/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import WebMap from '@arcgis/core/WebMap';
import MapView from '@arcgis/core/views/MapView';
import Compass from '@arcgis/core/widgets/Compass';
import Track from '@arcgis/core/widgets/Track';
import Home from '@arcgis/core/widgets/Home';
import ScaleBar from '@arcgis/core/widgets/ScaleBar';
import Expand from '@arcgis/core/widgets/Expand';

import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import UniqueValueRenderer from '@arcgis/core/renderers/UniqueValueRenderer';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';

export const createSelectionLayer = (view: __esri.MapView) => {
  const layer = new FeatureLayer({
    source: [],
    editingEnabled: true,
    listMode: 'hide',
    legendEnabled: false,
    geometryType: 'polygon',
    spatialReference: view.spatialReference,
    id: 'selection-layer',
    objectIdField: 'OBJECTID',
    fields: [
      { name: 'OBJECTID', type: 'oid' },
      { name: 'selected', type: 'small-integer' },
      { name: 'PIN_NUM', type: 'string' },
    ],
    renderer: new UniqueValueRenderer({
      field: 'selected',
      defaultSymbol: new SimpleFillSymbol({
        style: 'none',
        outline: {
          color: [255, 255, 0],
          width: 2,
        },
      }),
      uniqueValueInfos: [
        {
          value: 0,
          symbol: new SimpleFillSymbol({
            style: 'none',
            outline: {
              color: [0, 206, 209],
              width: 2,
            },
          }),
          label: 'multiple',
        },
        {
          value: 1,
          symbol: new SimpleFillSymbol({
            style: 'none',
            outline: {
              color: [255, 255, 0],
              width: 2,
            },
          }),
          label: 'single',
        },
      ],
    }),
  });

  return layer;
};

export const createMapView = (mapRef: any, mapProperties: any, viewProperties: any): MapView => {
  const map = new WebMap({ portalItem: mapProperties });
  viewProperties.map = map;
  viewProperties.container = mapRef;
  viewProperties.constraints = {
    minZoom: 9,
    geometry: {
      type: 'polygon',
      rings: [
        [
          [-78.757458636999957, 36.070027180000068],
          [-78.706070661999945, 36.08235327400007],
          [-78.499343823999936, 36.012638772000059],
          [-78.412423414999978, 35.970995647000052],
          [-78.391380921999939, 35.944141155000068],
          [-78.349012644999959, 35.93119994500006],
          [-78.339159479999978, 35.913731514000062],
          [-78.287870576999978, 35.891199952000079],
          [-78.245326746999979, 35.820179324000037],
          [-78.465650834999963, 35.70069565700004],
          [-78.708899327999973, 35.519481978000044],
          [-78.75843785699999, 35.53222101800003],
          [-78.995072509999943, 35.610178497000049],
          [-78.949385179999979, 35.753017484000054],
          [-78.949267660999965, 35.795162885000025],
          [-78.934367633999955, 35.834113977000072],
          [-78.906079037999973, 35.868106451000074],
          [-78.832520153999951, 35.868333760000041],
          [-78.811532427999964, 35.929404193000039],
          [-78.765480039999943, 35.921115857000075],
          [-78.75440329099996, 35.936258378000048],
          [-78.720010866999985, 35.962579521000066],
          [-78.700550740999972, 36.00774804200006],
          [-78.756361870999967, 36.027280124000072],
          [-78.757458636999957, 36.070027180000068],
        ],
      ],
    },
  };
  const view = new MapView(viewProperties);

  return view;
};

export const checkLocalStorage = (view: MapView): void => {
  if (window.localStorage.getItem('imaps')) {
    const webmap: WebMap = WebMap.fromJSON(JSON.parse(window.localStorage.getItem('imaps') as string));
    webmap.load().then(() => {
      view.map.allLayers.forEach((layer) => {
        const lyr = webmap.allLayers.find((l) => {
          return layer.id === l.id;
        });
        layer.visible = lyr?.visible;
        layer.opacity = lyr?.opacity;
      });
    });

    view.map.basemap = webmap.basemap;

    view.extent = webmap.initialViewProperties.viewpoint.targetGeometry.extent;
  }
};
export const addOverviewMap = (view: __esri.MapView): Expand => {
  const expand: Expand = new Expand({
    mode: 'floating',
    expandIconClass: 'esri-icon-overview-arrow-top-left',
    collapseIconClass: 'esri-icon-overview-arrow-bottom-right',
  });

  view.ui.add(expand, 'bottom-right');
  return expand;
};

export const createMapWidgets = (view: MapView): any[] => {
  const widgets = [];
  const home = new Home({ view: view });
  view.ui.add(home, 'top-left');
  widgets.push(home);
  const compass = new Compass({ view: view });
  view.ui.add(compass, 'top-left');
  widgets.push(compass);
  const track = new Track({ view: view });
  view.ui.add(track, 'top-left');
  widgets.push(track);
  const scalebar = new ScaleBar({ view: view });
  view.ui.add(scalebar, 'bottom-left');
  widgets.push(scalebar);
  return widgets;
};