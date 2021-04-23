/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { checkLocalStorage, createMapView, createMapWidgets, createSelectionLayer, addOverviewMap } from './utils/map';
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
    console.log(document.visibilityState);
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
  useEffect(() => {
    // read map and view properties from props
    const mapProperties = { id: props.id };
    const viewProperties = {};
    // create map and view
    if (!loaded) {
      createMapView(mapRef.current, mapProperties, viewProperties).when((mapView: __esri.MapView) => {
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
        viewRef.current = mapView;
        const layer = createSelectionLayer(mapView);
        setSelectionLayer(layer);

        viewRef.current?.map.add(layer);

        viewRef.current?.on('hold', (event: __esri.MapViewHoldEvent) => {
          props.geometryChanged(event.mapPoint);
        });
        checkLocalStorage(mapView);
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
        feature.setAttribute('selected', 0);
      });
      if (props.selectedFeature?.attributes) {
        props.selectedProperties
          .find((feature: __esri.Graphic) => {
            return feature.attributes.PIN_NUM === props.selectedFeature.attributes.PIN_NUM;
          })
          ?.setAttribute('selected', 1);
      }

      selectionLayer?.queryFeatures({ where: '1=1', returnGeometry: true }).then((featureSet) => {
        selectionLayer?.applyEdits({ deleteFeatures: featureSet.features }).then(() => {
          props.selectedProperties;

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
