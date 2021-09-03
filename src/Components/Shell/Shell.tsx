/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect, useState, lazy, Suspense, useRef } from 'react';
import ReactDOM from 'react-dom';
const MapView = lazy(() => {
  return import('../MapView/MapView');
});
const Header = lazy(() => {
  return import('../Header/Header');
});
const TipManager = lazy(() => {
  return import('../TipManager/TipManager');
});
const PropertyPanel = lazy(() => import('../PropertyPanel/PropertyPanel'));
const LocationSearch = lazy(() => import('../LocationSearch/LocationSearch'));
const Layers = lazy(() => import('../Layers/Layers'));
const Basemaps = lazy(() => import('../Basemaps/Basemaps'));
const Legend = lazy(() => import('../Legend/Legend'));
const PropertySelect = lazy(() => import('../PropertySelect/PropertySelect'));
const Measure = lazy(() => import('../Measure/Measure'));
const Sketch = lazy(() => import('../Sketch/Sketch'));
const Bookmarks = lazy(() => import('../Bookmarks/Bookmarks'));
const Print = lazy(() => import('../Print/Print'));
import './Shell.scss';
import {
  actionClicked,
  deactivate,
  initialized,
  maximizePropertySearch,
  updateTheme,
  windowResize,
  activatePropertySearch,
  formatShellPanelContent,
} from './utils/shell';
import ThemeContext from '../ThemeContext';
import { basemaps, links } from '../../config/config';
import ActionContext from '../ActionContext';
import * as config from '../../config/config';

export const Shell = () => {
  const [mapId, setMapId] = useState<string>();
  const [tips, setTips] = useState<any>([]);
  const [tipsTitle, setTipsTitle] = useState<string>();
  //console.log('render shell');
  const [width, setWidth] = useState(window.innerWidth);
  const view = useRef<__esri.MapView>();
  const [viewCreated, setViewCreated] = useState(false);
  const [selectedProperties, setSelectedProperties] = useState<__esri.Graphic[]>([]);
  const [selectedFeature, setSelectedFeature] = useState<any>();
  const { theme, setTheme } = useContext(ThemeContext);
  const [updating, setUpdating] = useState(true);
  //define sketch tools to handle deactivating other sketch tools
  const sketchVM = useRef<__esri.SketchViewModel>();
  const selectVM = useRef<__esri.SketchViewModel>();
  const measurement = useRef<__esri.Measurement>();
  const coordinates = useRef<__esri.CoordinateConversion>();
  const maximize = useRef<HTMLCalciteActionElement>();
  const streetviewClick = useRef<IHandle>();

  const [activeTool, setActiveTool] = useState<string>();
  const { actions, setActions } = useContext(ActionContext);

  //when feature is selected update featureSelected state and render PropertySelect
  const featureSelected = (feature: __esri.Graphic | undefined) => {
    setSelectedFeature({ ...selectedFeature, ...{ attributes: feature?.attributes, geometry: feature?.geometry } });

    const action = actions.find((action) => {
      return action.title === 'Property Select';
    });
    if (action && view.current) {
      const container = document.getElementById(action?.container);
      if (container) {
        ReactDOM.render(
          <Suspense fallback={''}>
            <PropertySelect
              view={view.current}
              selectedFeature={feature}
              geometrySet={geometryChanged}
              toolActivated={selectActivated}
              clear={clearSelection}
            />
          </Suspense>,
          container,
        );
      }
    }

    const printAction = actions.find((action) => {
      return action.title === 'Print';
    });
    if (printAction) {
      const container = document.getElementById(printAction?.container);
      ReactDOM.render(
        <Suspense fallback={''}>
          <Print
            view={view.current}
            exportUrl="https://indoors.raleighnc.gov/arcgis/rest/services/ExportWebMap/GPServer/Export%20Web%20Map"
            templateUrl="https://indoors.raleighnc.gov/arcgis/rest/services/ExportWebMap/GPServer/Get%20Layout%20Templates%20Info/execute"
            selectedFeature={feature}
          />
        </Suspense>,
        container,
      );
    }
  };

  const propertiesSelected = (properties: __esri.Graphic[]) => {
    setSelectedProperties([...selectedProperties, ...properties]);
    if (properties.length > 1) {
      setSelectedFeature({ ...selectedFeature, ...{ attributes: null } });
    }
    const container = activatePropertySearch(actions);
    ReactDOM.render(
      <Suspense fallback={''}>
        <PropertyPanel
          propertiesSelected={propertiesSelected}
          featureSelected={featureSelected}
          selectedProperties={properties}
        />
      </Suspense>,
      container,
    );

    console.log('setActions');
    setActions([...[], ...actions]);
  };
  const deactiveAllTools = () => {
    selectVM.current?.cancel();
    measurement.current?.viewModel.activeViewModel?.clear();
    if (coordinates.current) {
      coordinates.current.viewModel.mode = 'live';
    }
    sketchVM.current?.cancel();

    setActiveTool('sketch');
  };
  const deactiveMapTools = () => {
    document.querySelector('.map-tool.active')?.classList.remove('active');
    if (view.current?.popup) {
      view.current.popup.autoOpenEnabled = false;
    }
    streetviewClick.current?.remove();
  };
  //deactivate other sketch tools
  const sketchToolActivated = (sketchViewModel: __esri.SketchViewModel) => {
    sketchVM.current = sketchViewModel;
    selectVM.current?.cancel();
    measurement.current?.viewModel.activeViewModel?.clear();
    if (coordinates.current) {
      coordinates.current.viewModel.mode = 'live';
    }
    setActiveTool('sketch');
    deactiveMapTools();
  };
  const measurementActivated = (measurementTool: __esri.Measurement, coordinatesTool: __esri.CoordinateConversion) => {
    measurement.current = measurementTool;
    coordinates.current = coordinatesTool;
    sketchVM.current?.cancel();
    selectVM.current?.cancel();
    setActiveTool('measure');
    deactiveMapTools();
  };
  const selectActivated = (sketchViewModel: __esri.SketchViewModel) => {
    selectVM.current = sketchViewModel;
    sketchVM.current?.cancel();
    measurement.current?.viewModel.activeViewModel?.clear();
    if (coordinates.current) {
      coordinates.current.viewModel.mode = 'live';
    }
    setActiveTool('select');
    deactiveMapTools();
  };

  //reset tips when dismissed
  const tipsDismissed = () => {
    setTips([]);
    setTipsTitle('');
  };
  //render Tips action
  const showTips = (isTool: boolean) => {
    let action: any;
    if (isTool) {
      action = actions.find((action: any) => {
        return action.isActive && action.isTool;
      });
    } else {
      action = actions.find((action: any) => {
        return action.isActive;
      });
    }

    return action?.tips?.length ? (
      <calcite-tooltip-manager>
        <calcite-tooltip
          label="Tooltip label"
          reference-element={`tipAction${isTool ? '_tool' : ''}`}
          placement="bottom-end"
        >
          Show tips
        </calcite-tooltip>
        <calcite-action
          id={`tipAction${isTool ? '_tool' : ''}`}
          text="Action"
          label="Action"
          slot="header-actions-end"
          icon="lightbulb"
          appearance="solid"
          scale="m"
          calcite-hydrated=""
          onClick={() => {
            setTips([...[], ...action.tips]);
            setTipsTitle(action.title);
          }}
        ></calcite-action>
      </calcite-tooltip-manager>
    ) : (
      ''
    );
  };

  const setMapTools = (mapView: __esri.MapView) => {
    requestAnimationFrame(() => {
      document.querySelector('.identify-widget')?.addEventListener('click', () => {
        deactiveAllTools();
        mapView.popup.autoOpenEnabled = true;
        document.querySelector('.map-tool.active')?.classList.remove('active');
        document.querySelector('.identify-widget')?.classList.add('active');
        streetviewClick.current?.remove();
      });
      document.querySelector('.streetview-widget')?.addEventListener('click', () => {
        deactiveAllTools();
        mapView.popup.autoOpenEnabled = false;
        document.querySelector('.map-tool.active')?.classList.remove('active');
        document.querySelector('.streetview-widget')?.classList.add('active');
        streetviewClick.current?.remove();
        streetviewClick.current = mapView.on('click', (e) => {
          document.querySelector('.map-tool.active')?.classList.remove('active');
          document.querySelector('.streetview-widget')?.classList.add('active');
          const cbll = e.mapPoint.latitude + ',' + e.mapPoint.longitude;
          'https://maps.google.com?layer=c&cbll=' + cbll + '&cbp=0,0,0,0,0';
          window.open('https://maps.google.com?layer=c&cbll=' + cbll + '&cbp=0,0,0,0,0');
        });
      });
    });
  };
  //after map has initiliazed
  const mapInitialized = async (mapView: __esri.MapView) => {
    mapView.watch('updating', (updating) => {
      if ((view.current as any).cursor === 'default') {
        setUpdating(updating);
      }
    });

    if (!viewCreated) {
      view.current = mapView;
      setViewCreated(true);

      const container = document.getElementById('propertySearch');
      if (mapView.map) {
        setMapTools(mapView);

        ReactDOM.render(
          <Suspense fallback={''}>
            <PropertyPanel
              view={mapView}
              propertiesSelected={propertiesSelected}
              featureSelected={featureSelected}
              selectedProperties={selectedProperties}
              toolActivated={selectActivated}
            />
          </Suspense>,
          container,
        );
      }
    }
  };

  //update PropertyPanel geometry when geometry is updated by MapView or PropertySelect
  const geometryChanged = (geometry: __esri.Geometry) => {
    const container = activatePropertySearch(actions);
    ReactDOM.render(
      <Suspense fallback={''}>
        <PropertyPanel
          geometry={geometry}
          propertiesSelected={propertiesSelected}
          selectedProperties={selectedProperties}
          featureSelected={featureSelected}
          selectedFeature={selectedFeature}
        />
      </Suspense>,
      container,
    );
  };

  const clearSelection = () => {
    const container = activatePropertySearch(actions);
    ReactDOM.render(
      <Suspense fallback={''}>
        <PropertyPanel
          geometry={undefined}
          propertiesSelected={propertiesSelected}
          selectedProperties={selectedProperties}
          featureSelected={featureSelected}
          selectedFeature={selectedFeature}
        />
      </Suspense>,
      container,
    );
  };

  const mapError = () => {
    setUpdating(false);
  };

  //render widgets as they become active
  const renderWidget = (action: any) => {
    if (action) {
      const container = document.getElementById(action.container);

      document
        .querySelector('calcite-shell-panel[slot=contextual-panel]')
        ?.shadowRoot?.querySelector('.content')
        ?.setAttribute(
          'style',
          `max-width: 350px; width: calc(var(--calcite-panel-width-multiplier) * 100vw) !important;`,
        );
      if (maximize.current) {
        maximize.current.icon = 'left-edge';
      }
      if (!container?.hasChildNodes()) {
        if (action.title === 'Property Search') {
          ReactDOM.render(
            <Suspense fallback={''}>
              <PropertyPanel
                view={view.current}
                propertiesSelected={propertiesSelected}
                featureSelected={featureSelected}
                selectedProperties={selectedProperties}
              />
            </Suspense>,
            container,
          );
        }
        if (action.title === 'Location Search') {
          ReactDOM.render(
            <Suspense fallback={''}>
              <LocationSearch view={view.current} />
            </Suspense>,
            container,
          );
        }
        if (action.title === 'Layers') {
          ReactDOM.render(
            <Suspense fallback={''}>
              <Layers view={view.current} />
            </Suspense>,
            container,
          );
        }
        if (action.title === 'Basemaps') {
          ReactDOM.render(
            <Suspense fallback={''}>
              <Basemaps view={view.current} default={basemaps.default.id} imagery={basemaps.imagery.id} />
            </Suspense>,
            container,
          );
        }
        if (action.title === 'Legend') {
          ReactDOM.render(
            <Suspense fallback={''}>
              <Legend view={view.current} />
            </Suspense>,
            container,
          );
        }
        if (action.title === 'Property Select') {
          ReactDOM.render(
            <Suspense fallback={''}>
              <PropertySelect
                view={view.current}
                geometrySet={geometryChanged}
                selectedFeature={selectedFeature}
                toolActivated={selectActivated}
                activeTool={activeTool}
                clear={clearSelection}
              />
            </Suspense>,
            container,
          );
        }
        if (action.title === 'Measure') {
          ReactDOM.render(
            <Suspense fallback={''}>
              <Measure view={view.current} measurementActivated={measurementActivated} activeTool={activeTool} />
            </Suspense>,
            container,
          );
        }
        if (action.title === 'Sketch') {
          ReactDOM.render(
            <Suspense fallback={''}>
              <Sketch view={view.current} toolActivated={sketchToolActivated} activeTool={activeTool} />{' '}
            </Suspense>,
            container,
          );
        }
        if (action.title === 'Bookmarks') {
          ReactDOM.render(
            <Suspense fallback={''}>
              <Bookmarks view={view.current} />{' '}
            </Suspense>,
            container,
          );
        }
        if (action.title === 'Print') {
          ReactDOM.render(
            <Suspense fallback={''}>
              <Print
                view={view.current}
                exportUrl="https://indoors.raleighnc.gov/arcgis/rest/services/ExportWebMap/GPServer/Export%20Web%20Map"
                templateUrl="https://indoors.raleighnc.gov/arcgis/rest/services/ExportWebMap/GPServer/Get%20Layout%20Templates%20Info/execute"
              />
            </Suspense>,
            container,
          );
        }
      }
    }
  };
  useEffect(() => {
    const theme = window.localStorage.getItem('imaps_theme') as string;
    const url = new URL(document.URL);
    const id = url.searchParams.get('id');
    if (id) {
      setMapId(id);
    } else {
      setMapId(config.mapId);
    }

    updateTheme(theme, setTheme);
  }, []);
  useEffect(() => {
    initialized();
    // const theme = window.localStorage.getItem('imaps_theme') as string;
    // updateTheme(theme, setTheme);
    let resizeTimer: NodeJS.Timeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if ((window.innerWidth < 1000 && width >= 1000) || (window.innerWidth >= 1000 && width < 1000)) {
          windowResize(actions, width, setWidth, setActions);
        }
      }, 250);
      document.querySelectorAll('calcite-shell-panel').forEach((panel) => {
        let width = '350px';
        if (maximize.current) {
          maximize.current.icon = 'left-edge';
        }
        const bar = panel.querySelector('calcite-action-bar');
        if (window.innerWidth <= 500) {
          width = `calc(90vw - ${bar?.clientWidth}px)`;
        }
        panel?.shadowRoot
          ?.querySelector('.content')
          ?.setAttribute(
            'style',
            `max-width: ${width}; width: calc(var(--calcite-panel-width-multiplier) * 100vw) !important;`,
          );
      });
    });
    formatShellPanelContent();

    return () => {
      window.removeEventListener('resize', () => {
        windowResize(actions, width, setWidth, setActions);
      });
      deactivate();
    };
  }, [actions]);
  return (
    <div>
      {updating && (
        <calcite-progress class={`shell calcite-theme-${theme}`} type="indeterminate" value="0.5"></calcite-progress>
      )}

      <calcite-shell class={`shell calcite-theme-${theme}`}>
        {width >= 1000 ? (
          <calcite-shell-panel slot="primary-panel" position="start" width-scale="l" collapsed>
            <calcite-action-bar
              slot="action-bar"
              expanded={/*!viewCreated && window.innerWidth > 500 ? '' : null*/ false}
            >
              {actions.map((action: any) => {
                if (action.isTool) {
                  return (
                    <div key={`${action.container}_action_primary`}>
                      <calcite-tooltip
                        placement="trailing"
                        label={action.title}
                        reference-element={`${action.container}_action`}
                      >
                        {action.title}
                      </calcite-tooltip>
                      <calcite-tooltip-manager>
                        <calcite-action
                          text={action.title}
                          name={action.container}
                          icon={action.icon}
                          id={`${action.container}_action`}
                          disabled={!viewCreated ? '' : null}
                          onClick={async (e: any) => {
                            console.log('setActions');
                            setActions([...actionClicked(e, action, actions)]);
                            requestAnimationFrame(() => {
                              renderWidget(action);
                            });
                          }}
                          active={action.isActive === true ? '' : null}
                        ></calcite-action>
                      </calcite-tooltip-manager>
                    </div>
                  );
                }
              })}
            </calcite-action-bar>
            {actions.map((action: any) => {
              if (action.isTool && action.isActive) {
                return (
                  <div className="panel-header" key={`${action.icon}_header_primary`}>
                    <div className="panel-title">{action.title}</div>
                    <div className="header-actions">
                      {showTips(true)}
                      <calcite-tooltip-manager>
                        <calcite-tooltip label="Tooltip label" reference-element="closeAction" placement="bottom-end">
                          Close panel
                        </calcite-tooltip>
                        <calcite-action
                          id="closeAction"
                          aria-label="Close"
                          appearance="solid"
                          scale="m"
                          calcite-hydrated=""
                          icon="x"
                          onClick={() => {
                            document
                              ?.querySelector('calcite-shell-panel[slot=primary-panel]')
                              ?.setAttribute('collapsed', '');
                            action.isActive = false;

                            console.log('setActions');
                            setActions([...actions]);
                          }}
                        ></calcite-action>
                      </calcite-tooltip-manager>
                    </div>
                  </div>
                );
              }
            })}
            {actions.map((action: any) => {
              if (action.isTool) {
                return (
                  <div
                    id={action.container}
                    className="action-panel"
                    key={`${action.container}_primary`}
                    hidden={!action.isActive}
                  ></div>
                );
              }
            })}
          </calcite-shell-panel>
        ) : (
          ''
        )}
        <Suspense fallback={''}>
          <MapView
            id={mapId}
            initialized={mapInitialized}
            geometryChanged={geometryChanged}
            selectedProperties={selectedProperties}
            selectedFeature={selectedFeature}
            mapError={mapError}
            identifyClicked={() => {
              deactiveAllTools();
            }}
          />
        </Suspense>

        <calcite-shell-panel slot="contextual-panel" position="end" width-scale="l">
          <calcite-action-bar
            slot="action-bar"
            expanded={/*!viewCreated && window.innerWidth > 500 ? '' : null*/ false}
          >
            {actions.map((action: any) => {
              if (!action.isTool || width < 1000) {
                return (
                  <div key={`${action.container}_action_contextual`}>
                    <calcite-tooltip
                      placement="leading"
                      label={action.title}
                      reference-element={`${action.container}_action`}
                    >
                      {action.title}
                    </calcite-tooltip>
                    <calcite-tooltip-manager>
                      <calcite-action
                        text={action.title}
                        name={action.container}
                        icon={action.icon}
                        id={`${action.container}_action`}
                        disabled={!viewCreated ? '' : null}
                        onClick={async (e: any) => {
                          console.log('setActions');
                          setActions([...actionClicked(e, action, actions)]);
                          requestAnimationFrame(() => {
                            renderWidget(action);
                          });
                        }}
                        active={action.isActive === true ? '' : null}
                      ></calcite-action>
                    </calcite-tooltip-manager>
                  </div>
                );
              }
            })}
          </calcite-action-bar>

          {actions.map((action: any) => {
            if ((!action.isTool || width < 1000) && action.isActive) {
              return (
                <div className="panel-header" key={`${action.icon}_header_contextual`}>
                  <div className="panel-title">{action.title}</div>
                  <div className="header-actions">
                    {action.title === 'Property Search' && width > 500 && (
                      <calcite-action
                        ref={maximize}
                        aria-label="Maximize"
                        appearance="solid"
                        scale="m"
                        calcite-hydrated=""
                        icon="left-edge"
                        onClick={(e: any) => {
                          maximizePropertySearch(e.target);
                        }}
                      ></calcite-action>
                    )}
                    {showTips(false)}
                    <calcite-tooltip-manager>
                      <calcite-tooltip label="Tooltip label" reference-element="closeAction" placement="bottom-end">
                        Close panel
                      </calcite-tooltip>
                      <calcite-action
                        id="closeAction"
                        aria-label="Close"
                        appearance="solid"
                        scale="m"
                        calcite-hydrated=""
                        icon="x"
                        onClick={() => {
                          document
                            ?.querySelector('calcite-shell-panel[slot=contextual-panel]')
                            ?.setAttribute('collapsed', '');
                          action.isActive = false;

                          console.log('setActions');
                          setActions([...actions]);
                        }}
                      ></calcite-action>
                    </calcite-tooltip-manager>
                  </div>
                </div>
              );
            }
          })}
          {actions.map((action: any) => {
            if (!action.isTool || width < 1000) {
              return (
                <div
                  className="action-panel"
                  id={action.container}
                  key={`${action.container}_contextual`}
                  hidden={!action.isActive}
                ></div>
              );
            }
          })}
        </calcite-shell-panel>

        <div slot="header">
          <Suspense fallback={''}>
            <Header links={links} />
          </Suspense>
        </div>
      </calcite-shell>
      <Suspense fallback={''}>
        <TipManager tips={tips} title={tipsTitle} closed tipsDismissed={tipsDismissed} />
      </Suspense>
    </div>
  );
};
export default Shell;
