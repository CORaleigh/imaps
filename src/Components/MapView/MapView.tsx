/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import IdentityManager from '@arcgis/core/identity/IdentityManager';

import {
  checkLocalStorage,
  createMapView,
  createMapWidgets,
  createSelectionLayer,
  addOverviewMap,
  checkBasemapScheme,
  customizePopup,
  createAlert,
} from './utils/map';

import './MapView.scss';
import { whenTrueOnce } from '@arcgis/core/core/watchUtils';
import ReactDOM from 'react-dom';
export const MapView = (props: any) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [selectionLayer, setSelectionLayer] = useState<FeatureLayer>();

  const [view, setView] = useState<__esri.MapView>();
  const viewRef = useRef<__esri.MapView>();
  const widgets = useRef<any[]>([]);

  const saveMap = () => {
    // if (document.visibilityState === 'hidden' || document.hidden) {
    viewRef.current?.map.removeMany(
      viewRef.current?.map.allLayers
        .filter((layer) => {
          return layer.type === 'group' && !(layer as __esri.GroupLayer).layers.length;
        })
        .toArray(),
    );
    const json = (viewRef.current?.map as any).toJSON();
    json.initialState.viewpoint.targetGeometry = viewRef.current?.extent;
    window.localStorage.setItem('imaps', JSON.stringify(json));
    // }
  };
  const checkRequiredLayers = (mapView: __esri.MapView): boolean => {
    const condos = mapView.map.allTables.filter((layer) => {
      return layer.title.includes('Condo') && layer.type === 'feature';
    });

    const addresses = mapView.map.allTables.filter((layer) => {
      return layer.title.includes('Address') && layer.type === 'feature';
    });

    const property = mapView.map.allLayers.filter((layer) => {
      return layer.title.includes('Property') && layer.type === 'feature';
    });
    return property.length > 0 && condos.length > 0 && addresses.length > 0;
  };
  useEffect(() => {
    // read map and view properties from props
    const mapProperties = { id: props.id };
    const viewProperties = {};
    // create map and view

    IdentityManager.on('dialog-create', () => {
      const observer: MutationObserver = new MutationObserver((mutations) => {
        if (mutations.length) {
          ((mutations[0]?.target as HTMLElement)?.querySelector('.esri-button--secondary') as HTMLElement)?.click();
          observer.disconnect();
        } else {
          observer.disconnect();
        }
      });

      const container = IdentityManager.dialog.container;

      observer.observe(container as Node, { childList: true });
    });
    if (!loaded) {
      console.log('creating map view');
      createMapView(mapRef.current, mapProperties, viewProperties).when((mapView: __esri.MapView) => {
        if (checkRequiredLayers(mapView)) {
          setLoaded(true);
          props.initialized(mapView);
          widgets.current.push(createMapWidgets(mapView));

          const expand: __esri.Expand = addOverviewMap(mapView);
          whenTrueOnce(expand, 'expanded', () => {
            const Overview = lazy(() => import('../Overview/Overview'));
            ReactDOM.render(
              <Suspense fallback={''}>
                <Overview view={mapView} expand={expand} />
              </Suspense>,
              document.createElement('div'),
            );
          });
          setView(mapView);
          customizePopup(mapView);
          mapView.popup.on('trigger-action', (event) => {
            if (event.action.title === 'Select') {
              props.geometryChanged(mapView.popup.location);
            }
          });
          viewRef.current = mapView;
          const layer = createSelectionLayer(mapView);
          setSelectionLayer(layer);

          viewRef.current?.map.add(layer);

          viewRef.current?.on('hold', (event: any) => {
            props.geometryChanged(event.mapPoint);
          });

          checkLocalStorage(mapView);
          checkBasemapScheme(mapView.map.basemap, mapView);
        } else {
          createAlert();
          setLoaded(true);
          props.mapError();
        }
      });
    }

    window.addEventListener('pagehide', saveMap);
    return () => {
      window.removeEventListener('pagehide', saveMap);
      // view && view.destroy();
      // widgets.current.forEach((widget) => {
      //   widget && widget.destroy();
      // });
    };
  }, []); // only after initial render
  useEffect(() => {
    if (props.selectedProperties) {
      props.selectedProperties.forEach((feature: __esri.Graphic) => {
        feature?.setAttribute('selected', 0);
      });
      if (props.selectedFeature?.attributes) {
        props.selectedProperties
          .find((feature: __esri.Graphic) => {
            return feature.attributes.PIN_NUM === props.selectedFeature.attributes.PIN_NUM;
          })
          ?.setAttribute('selected', 1);
      }
      selectionLayer?.queryFeatures({ where: '1=1', returnGeometry: true }).then((featureSet) => {
        selectionLayer?.applyEdits({ deleteFeatures: featureSet.features }).then((result) => {
          selectionLayer?.applyEdits({ addFeatures: props.selectedProperties }).then((result) => {
            console.log(result);
          });
        });
      });
    }
  }, [props.selectedProperties]);

  return <div ref={mapRef} />;
};
export default MapView;
