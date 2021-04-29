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
