/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
const PropertySearch = lazy(() => import('./PropertySearch/PropertySearch'));
const PropertyInfo = lazy(() => import('./PropertyInfo/PropertyInfo'));
const PropertyTable = lazy(() => import('./PropertyTable/PropertyTable'));
// const PropertyList = lazy(() => import('./PropertyList/PropertyList'));
import { geometryChanged, setSearchParams } from './utils/property';
import './PropertyPanel.scss';
export const PropertyPanel = (props: any) => {
  const state = useRef({ pins: '' });
  const infoTab = useRef<HTMLCalciteTabTitleElement>(null);
  const listTab = useRef<HTMLCalciteTabTitleElement>(null);

  const [loaded, setLoaded] = useState(false);
  const [view, setView] = useState<__esri.MapView>();
  const [feature, setFeature] = useState<__esri.Graphic>();

  //const featureRef = useRef<__esri.Graphic>();
  const [filter, setFilter] = useState('OBJECTID IS NULL');
  const [where, setWhere] = useState('OBJECTID IS NULL');

  const [table, setTable] = useState<__esri.FeatureLayer>();

  const [selectedTab, setSelectedTab] = useState('list');
  const [reloadTable, setReloadTable] = useState(false);

  const [addressTable, setAddressTable] = useState<__esri.FeatureLayer>();
  //let properties: __esri.Graphic[] = [];
  const properties = useRef<__esri.Graphic[]>();
  const [layer, setLayer] = useState<__esri.FeatureLayer>();
  const [loading, setLoading] = useState(false);

  const mapViewLoaded = (mapView: __esri.MapView) => {
    setTable(
      mapView.map.allTables.find((layer) => {
        return layer.title.includes('Condo') && layer.type === 'feature';
      }) as __esri.FeatureLayer,
    );

    setAddressTable(
      mapView.map.allTables.find((layer) => {
        return layer.title.includes('Address') && layer.type === 'feature';
      }) as __esri.FeatureLayer,
    );
    setLayer(
      mapView.map.allLayers.find((layer) => {
        return layer.title.includes('Property') && layer.type === 'feature';
      }) as __esri.FeatureLayer,
    );
    setLoaded(true);
    setView(mapView);
    //new FeatureTable({ container: panelRef.current as HTMLDivElement, layer: layer, view: mapView });
  };
  const toggleTabs = (tabTitle: string) => {
    //setSelectedTab(tabTitle);
    // const tabnav: HTMLCalciteTabNavElement = document.querySelector('calcite-tab-nav') as HTMLCalciteTabNavElement;
    // tabnav?.dispatchEvent(new CustomEvent('calciteTabChange', { detail: { tab: 1 } }));
    const title: HTMLCalciteTabTitleElement = document.querySelector(
      `calcite-tab-title[tab=${tabTitle}]`,
    ) as HTMLCalciteTabTitleElement;
    title.click();
    // setTimeout(() => {
    //   const tab: HTMLElement = document.querySelector(
    //     `calcite-tab-title:${tabTitle === 'list' ? 'first' : 'last'}-child`,
    //   ) as HTMLElement;
    //   const indicator: HTMLCalciteTabNavElement = document
    //     ?.querySelector('calcite-tab-nav')
    //     ?.shadowRoot?.querySelector('.tab-nav-active-indicator') as HTMLCalciteTabNavElement;
    //   tab.focus();
    //   indicator.setAttribute(
    //     'style',
    //     `transition-duration: 0.3s; width: ${tab.clientWidth}px; left: ${tab.offsetLeft}px;`,
    //   );
    // }, 1000);

    setReloadTable(true);
  };
  const searchComplete = (result: any) => {
    if (result.feature) {
      setFeature(result.features[0]);
      props.featureSelected(result.features[0]);
      //featureRef.current = result.features[0];
      setSearchParams([result.features[0]]);
      toggleTabs('info');
    } else {
      setSearchParams([]);

      setFeature(undefined);
      toggleTabs('list');
    }

    const oids = result?.features.map((feature: __esri.Graphic) => {
      return feature.getAttribute('OBJECTID');
    });
    setFilter(`OBJECTID in (${oids.toString()})`);
    properties.current = result.properties;
    props.selectedProperties?.forEach((prop: __esri.Graphic) => {
      prop.setAttribute('selected', 0);
    });

    props.propertiesSelected(properties.current);
  };
  const tableFeatureSelected = (feature: __esri.Graphic) => {
    if (feature) {
      properties.current?.forEach((prop: __esri.Graphic) => {
        if (prop?.getAttribute('PIN_NUM') != feature?.getAttribute('PIN_NUM')) {
          prop?.setAttribute('selected', 0);
        }
      });
      const match: __esri.Graphic = properties.current?.find((prop: __esri.Graphic) => {
        return prop?.getAttribute('PIN_NUM') === feature?.getAttribute('PIN_NUM');
      }) as __esri.Graphic;
      match?.setAttribute('selected', 1);
      properties.current?.splice(properties.current?.indexOf(match), 1);
      properties.current?.push(match);

      feature.geometry = match?.geometry as __esri.Geometry;

      view?.goTo(feature.geometry);
      setFeature(feature);

      props.featureSelected(feature);
      props.propertiesSelected(properties.current);

      //featureRef.current = feature;
      setSearchParams([feature]);

      toggleTabs('info');
    }
  };

  useEffect(() => {
    if (!loaded) {
      const mapView = props.view as __esri.MapView;
      mapViewLoaded(mapView);
      document.querySelectorAll('calcite-tab-nav').forEach((tab) => {
        tab.addEventListener('calciteTabChange', (event) => {
          //setSelectedTab((event as any).detail.tab === 0 ? 'list' : 'info');
        });
      });
      window.addEventListener('popstate', (e) => {
        if (e.state?.pins === state.current?.pins) {
          history.back();
        } else {
          if (e.state?.pins) {
            setWhere(`PIN_NUM in ('${decodeURIComponent(history.state?.pins.split(',').join(`','`))}')`);
          }
        }
        state.current = e.state;
      });
      const url = new URL(document.URL);
      const pins = url.searchParams.get('pins');
      if (pins) {
        setWhere(`PIN_NUM in ('${decodeURIComponent(pins.split(',').join(`','`))}')`);
      }
    }
    return () => {
      console.log('cleanup');
    };
  }, []); // only after initial render
  useEffect(() => {
    geometryChanged(view as __esri.MapView, layer as __esri.FeatureLayer, props.geometry).then((data) => {
      if (props.geometry != undefined) {
        setLoading(true);
        setFilter(data.where);
        properties.current = data.properties;
        if (data.features.length === 1) {
          const f = data.features[0] as __esri.Graphic;
          f.layer = table as __esri.FeatureLayer;
          f.popupTemplate = table?.popupTemplate as __esri.PopupTemplate;
          const feature = data.features[0] as __esri.Graphic;
          feature.geometry = data.properties?.find((prop: __esri.Graphic) => {
            return prop.getAttribute('PIN_NUM') === feature.getAttribute('PIN_NUM');
          })?.geometry;
          setFeature(feature);
          props.featureSelected(feature);

          //featureRef.current = feature;
          setSearchParams([feature]);

          toggleTabs('info');
        } else {
          setSearchParams([]);

          setFeature(undefined);
          toggleTabs('list');
        }
        props.propertiesSelected(data.properties);
      }
    });
  }, [props.geometry, props.propertiesSelected, props.featureSelected, props.selectedProperties]);
  return (
    <div className="panel">
      {loaded && (
        <Suspense fallback={''}>
          <PropertySearch
            view={view}
            condosTable={table}
            addressTable={addressTable}
            propertyLayer={layer}
            where={where}
            searchComplete={searchComplete}
          ></PropertySearch>
        </Suspense>
      )}

      <calcite-tabs position="below" layout="center">
        <calcite-tab-nav slot="tab-nav">
          <calcite-tab-title tab="list" active ref={listTab}>
            List
          </calcite-tab-title>
          <calcite-tab-title tab="info" ref={{ infoTab }}>
            Info
          </calcite-tab-title>
        </calcite-tab-nav>

        <calcite-tab tab="list">
          {loaded && (
            // <Suspense fallback={''}>
            //   <PropertyList
            //     layer={table}
            //     view={view}
            //     filter={filter}
            //     featureSelected={tableFeatureSelected}
            //   ></PropertyList>
            // </Suspense>
            <Suspense fallback={''}>
              <PropertyTable
                view={view}
                layer={table}
                filter={filter}
                loading={loading}
                reloadTable={reloadTable}
                selectedTab={selectedTab}
                featureSelected={tableFeatureSelected}
              ></PropertyTable>
            </Suspense>
          )}
        </calcite-tab>

        <calcite-tab tab="info">
          {loaded && (
            <Suspense fallback={''}>
              <PropertyInfo view={view} feature={feature} />
            </Suspense>
          )}
        </calcite-tab>
      </calcite-tabs>
    </div>
  );
};

export default PropertyPanel;
