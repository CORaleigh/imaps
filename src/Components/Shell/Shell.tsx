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
import { actionClicked, deactivate, initialized, updateTheme, windowResize } from './utils/shell';
import ThemeContext from '../ThemeContext';
import { basemaps, links } from '../../config/config';
import ActionContext from '../ActionContext';

export const Shell = () => {
  const [tips, setTips] = useState<any>([]);
  const [tipsTitle, setTipsTitle] = useState<string>();

  const [width, setWidth] = useState(window.innerWidth);
  const [view, setView] = useState<__esri.MapView | null>(null);
  const [viewCreated, setViewCreated] = useState(false);
  const [selectedProperties, setSelectedProperties] = useState<__esri.Graphic[]>([]);
  const [selectedFeature, setSelectedFeature] = useState<any>();
  const { theme, setTheme } = useContext(ThemeContext);
  //define sketch tools to handle deactivating other sketch tools
  const sketchVM = useRef<__esri.SketchViewModel>();
  const selectVM = useRef<__esri.SketchViewModel>();
  const measurement = useRef<__esri.Measurement>();
  const coordinates = useRef<__esri.CoordinateConversion>();

  const [activeTool, setActiveTool] = useState<string>();
  const { actions, setActions } = useContext(ActionContext);

  //when feature is selected update featureSelected state and render PropertySelect
  const featureSelected = (feature: __esri.Graphic | undefined) => {
    setSelectedFeature({ ...selectedFeature, ...{ attributes: feature?.attributes, geometry: feature?.geometry } });
    const action = actions.find((action) => {
      return action.title === 'Property Select';
    });
    if (action && view) {
      const container = document.getElementById(action?.container);
      if (container) {
        ReactDOM.render(
          <Suspense fallback={''}>
            <PropertySelect
              view={view}
              selectedFeature={feature}
              geometrySet={geometryChanged}
              toolActivated={selectActivated}
            />
          </Suspense>,
          container,
        );
      }
    }
  };
  //activate PropertySearch on load and on geometry updates
  const activatePropertySearch = (): HTMLElement => {
    const active = actions.find((action) => {
      return action.isActive;
    });
    if (active) {
      active.isActive = false;
    }
    const search = actions.find((action) => {
      return action.title === 'Property Search';
    });

    if (search) {
      search.isActive = true;
    }
    const container = document.getElementById(search?.container as string);
    if (container) {
      const panel: HTMLDivElement = container?.closest('.action-panel') as HTMLDivElement;
      panel.hidden = false;
      const shell = container?.closest('calcite-shell-panel');
      shell?.removeAttribute('collapsed');
    }
    return container as HTMLElement;
  };

  const propertiesSelected = (properties: __esri.Graphic[]) => {
    setSelectedProperties([...selectedProperties, ...properties]);
    if (properties.length > 1) {
      setSelectedFeature({ ...selectedFeature, ...{ attributes: null } });
    }
    const container = activatePropertySearch();

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

  //deactivate other sketch tools
  const sketchToolActivated = (sketchViewModel: __esri.SketchViewModel) => {
    sketchVM.current = sketchViewModel;
    selectVM.current?.cancel();
    measurement.current?.viewModel.activeViewModel?.clear();
    if (coordinates.current) {
      coordinates.current.viewModel.mode = 'live';
    }
    setActiveTool('sketch');
  };
  const measurementActivated = (measurementTool: __esri.Measurement, coordinatesTool: __esri.CoordinateConversion) => {
    measurement.current = measurementTool;
    coordinates.current = coordinatesTool;
    sketchVM.current?.cancel();
    selectVM.current?.cancel();
    setActiveTool('measure');
  };
  const selectActivated = (sketchViewModel: __esri.SketchViewModel) => {
    selectVM.current = sketchViewModel;
    sketchVM.current?.cancel();
    measurement.current?.viewModel.activeViewModel?.clear();
    if (coordinates.current) {
      coordinates.current.viewModel.mode = 'live';
    }
    setActiveTool('select');
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
      <calcite-action
        text="Action"
        label="Action"
        slot="header-actions-end"
        icon="lightbulb"
        appearance="solid"
        scale="m"
        calcite-hydrated=""
        onClick={() => {
          setTips([...tips, ...action.tips]);
          setTipsTitle(action.title);
        }}
      ></calcite-action>
    ) : (
      ''
    );
  };

  //after map has initiliazed
  const mapInitialized = async (mapView: __esri.MapView) => {
    if (!viewCreated) {
      setView(mapView);
      setViewCreated(true);
      const container = document.getElementById('propertySearch');
      if (mapView.map) {
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
    const container = activatePropertySearch();
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

  //render widgets as they become active
  const renderWidget = (action: any) => {
    if (action) {
      const container = document.getElementById(action.container);

      if (!container?.hasChildNodes()) {
        if (action.title === 'Property Search') {
          ReactDOM.render(
            <Suspense fallback={''}>
              <PropertyPanel
                view={view}
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
              <LocationSearch view={view} />
            </Suspense>,
            container,
          );
        }
        if (action.title === 'Layers') {
          ReactDOM.render(
            <Suspense fallback={''}>
              <Layers view={view} />
            </Suspense>,
            container,
          );
        }
        if (action.title === 'Basemaps') {
          ReactDOM.render(
            <Suspense fallback={''}>
              <Basemaps view={view} default={basemaps.default.id} imagery={basemaps.imagery.id} />
            </Suspense>,
            container,
          );
        }
        if (action.title === 'Legend') {
          ReactDOM.render(
            <Suspense fallback={''}>
              <Legend view={view} />
            </Suspense>,
            container,
          );
        }
        if (action.title === 'Property Select') {
          ReactDOM.render(
            <Suspense fallback={''}>
              <PropertySelect
                view={view}
                geometrySet={geometryChanged}
                selectedFeature={selectedFeature}
                toolActivated={selectActivated}
                activeTool={activeTool}
              />
            </Suspense>,
            container,
          );
        }
        if (action.title === 'Measure') {
          ReactDOM.render(
            <Suspense fallback={''}>
              <Measure view={view} measurementActivated={measurementActivated} activeTool={activeTool} />
            </Suspense>,
            container,
          );
        }
        if (action.title === 'Sketch') {
          ReactDOM.render(
            <Suspense fallback={''}>
              <Sketch view={view} toolActivated={sketchToolActivated} activeTool={activeTool} />{' '}
            </Suspense>,
            container,
          );
        }
        if (action.title === 'Bookmarks') {
          ReactDOM.render(
            <Suspense fallback={''}>
              <Bookmarks view={view} />{' '}
            </Suspense>,
            container,
          );
        }
        if (action.title === 'Print') {
          ReactDOM.render(
            <Suspense fallback={''}>
              <Print view={view} />{' '}
            </Suspense>,
            container,
          );
        }
      }
    }
  };

  useEffect(() => {
    initialized();
    const theme = window.localStorage.getItem('imaps_theme') as string;
    updateTheme(theme, setTheme);

    window.addEventListener('resize', () => {
      windowResize(actions, width, setWidth, setActions);
    });
    document
      .querySelector('calcite-shell-panel')
      ?.shadowRoot?.querySelector('.content')
      ?.setAttribute('style', 'width: calc(var(--calcite-panel-width-multiplier) * 100vw) !important;');

    return () => {
      window.removeEventListener('resize', () => {
        windowResize(actions, width, setWidth, setActions);
      });
      deactivate();
    };
  }, [actions]);
  return (
    <div>
      <calcite-shell theme={theme} className="shell">
        {width >= 1000 ? (
          <calcite-shell-panel slot="primary-panel" position="start" width-scale="l" collapsed>
            <calcite-action-bar expand-disabled slot="action-bar">
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
                console.log(action);
                return (
                  <div className="panel-header" key={`${action.icon}_header_primary`}>
                    <div className="panel-title">{action.title}</div>
                    <div className="header-actions">
                      {showTips(true)}
                      <calcite-action
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

        <calcite-shell-panel slot="contextual-panel" position="end" width-scale="l">
          <calcite-action-bar expand-disabled slot="action-bar">
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
                    {showTips(false)}
                    <calcite-action
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

        <div slot="shell-header">
          <Suspense fallback={''}>
            <Header links={links} />
          </Suspense>
        </div>
        <Suspense fallback={''}>
          <MapView
            id="95092428774c4b1fb6a3b6f5fed9fbc4"
            initialized={mapInitialized}
            geometryChanged={geometryChanged}
            selectedProperties={selectedProperties}
            selectedFeature={selectedFeature}
          />
        </Suspense>
      </calcite-shell>
      <Suspense fallback={''}>
        <TipManager tips={tips} title={tipsTitle} closed tipsDismissed={tipsDismissed} />
      </Suspense>
    </div>
  );
};
export default Shell;
