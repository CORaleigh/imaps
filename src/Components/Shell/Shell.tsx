/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect, useState, lazy, Suspense } from 'react';
//import { MapView } from '../MapView/MapView';

const MapView = lazy(() => {
  return import('../MapView/MapView');
});
const Header = lazy(() => {
  return import('../Header/Header');
});
const TipManager = lazy(() => {
  return import('../TipManager/TipManager');
});

import { PropertyPanel } from '../PropertyPanel/PropertyPanel';

import './Shell.scss';
import { actionClicked, deactivate, initialized } from './utils/shell';

import ReactDOM from 'react-dom';
import ThemeContext from '../ThemeContext';

import { links } from '../../config/config';
import ActionContext from '../ActionContext';

export const Shell = () => {
  //const [actions, setActions] = useState(props.actions);
  const [tips, setTips] = useState<any>([]);
  const [tipsTitle, setTipsTitle] = useState<string>();

  const [width, setWidth] = useState(window.innerWidth);
  const [view, setView] = useState<__esri.MapView | null>(null);
  const [viewCreated, setViewCreated] = useState(false);
  const [selectedProperties, setSelectedProperties] = useState<__esri.Graphic[]>([]);
  const [selectedFeature, setSelectedFeature] = useState<any>();

  const { theme, setTheme } = useContext(ThemeContext);
  const { actions, setActions } = useContext(ActionContext);
  const featureSelected = (feature: __esri.Graphic | undefined) => {
    setSelectedFeature({ ...selectedFeature, ...{ attributes: feature?.attributes } });
  };
  const propertiesSelected = (properties: __esri.Graphic[]) => {
    setSelectedProperties([...selectedProperties, ...properties]);
    setSelectedFeature({ ...selectedFeature, ...{ attributes: null } });

    const active = actions.find((action) => {
      return action.isActive;
    });
    if (active) {
      active.isActive = false;
    }
    const search = actions.find((action) => {
      return action.title === 'Property Search';
    });

    // const panel = document.querySelector(
    //   'calcite-shell-panel[slot=contextual-panel] calcite-panel',
    // ) as HTMLCalcitePanelElement;
    // if (panel) {
    //   panel.dismissed = false;
    // }

    if (search) {
      search.isActive = true;
    }
    const container = document.getElementById('propertySearch');
    if (container) {
      const panel: HTMLDivElement = container?.closest('.action-panel') as HTMLDivElement;
      panel.hidden = false;
      const shell = container?.closest('calcite-shell-panel');
      shell?.removeAttribute('collapsed');
    }

    ReactDOM.render(
      <PropertyPanel
        propertiesSelected={propertiesSelected}
        featureSelected={featureSelected}
        selectedProperties={properties}
      />,
      container,
    );

    setActions([...[], ...actions]);
  };
  const windowResize = () => {
    setWidth(window.innerWidth);
    // if (window.innerWidth <= 500) {
    //   document
    //     .querySelector('calcite-shell-panel')
    //     ?.shadowRoot?.querySelector('.content')
    //     ?.setAttribute('style', 'width: 100vw');
    // }
    const activeActions = document.querySelectorAll('calcite-action[active]');
    activeActions.forEach((button) => {
      const action = actions.find((action) => {
        return action.title === button.getAttribute('text');
      });
      if (window.innerWidth >= 1000 && action?.isActive) {
        if (action.isTool) {
          // (document.getElementById(action.container)?.closest('.action-panel') as HTMLElement).hidden = true;
          (document.querySelector('calcite-shell-panel[slot=contextual-panel]') as HTMLElement)?.setAttribute(
            'collapsed',
            '',
          );
          action.isActive = false;
        }
      }
      if (window.innerWidth < 1000 && action?.isActive) {
        if (action.isTool) {
          (document.querySelector('calcite-shell-panel[slot=primary-panel]') as HTMLElement)?.removeAttribute(
            'collapsed',
          );
        } else {
          (document.querySelector('calcite-shell-panel[slot=contextual-panel]') as HTMLElement)?.removeAttribute(
            'collapsed',
          );
        }
      }
    });
    setActions([...actions]);
  };
  const setWidget = (action: any) => {
    console.log('setWidget', action.title);
    if (action) {
      const container = document.getElementById(action.container);

      if (!container?.hasChildNodes()) {
        if (action.title === 'Property Search') {
          const PropertyPanel = lazy(() => import('../PropertyPanel/PropertyPanel'));
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
          const LocationSearch = lazy(() => import('../LocationSearch/LocationSearch'));
          ReactDOM.render(
            <Suspense fallback={''}>
              <LocationSearch view={view} />
            </Suspense>,
            container,
          );
        }
        if (action.title === 'Layers') {
          const Layers = lazy(() => import('../Layers/Layers'));
          ReactDOM.render(
            <Suspense fallback={''}>
              <Layers view={view} />
            </Suspense>,
            container,
          );
        }
        if (action.title === 'Basemaps') {
          const Basemaps = lazy(() => import('../Basemaps/Basemaps'));
          ReactDOM.render(
            <Suspense fallback={''}>
              <Basemaps view={view} />
            </Suspense>,
            container,
          );
        }
        if (action.title === 'Legend') {
          const Legend = lazy(() => import('../Legend/Legend'));
          ReactDOM.render(
            <Suspense fallback={''}>
              <Legend view={view} />
            </Suspense>,
            container,
          );
        }
        if (action.title === 'Property Select') {
          const PropertySelect = lazy(() => import('../PropertySelect/PropertySelect'));
          ReactDOM.render(
            <Suspense fallback={''}>
              <PropertySelect view={view} geometrySet={geometryChanged} />
            </Suspense>,
            container,
          );
        }
        if (action.title === 'Measure') {
          const Measure = lazy(() => import('../Measure/Measure'));
          ReactDOM.render(
            <Suspense fallback={''}>
              <Measure view={view} />{' '}
            </Suspense>,
            container,
          );
        }
        if (action.title === 'Sketch') {
          const Sketch = lazy(() => import('../Sketch/Sketch'));
          ReactDOM.render(
            <Suspense fallback={''}>
              <Sketch view={view} />{' '}
            </Suspense>,
            container,
          );
        }
        if (action.title === 'Bookmarks') {
          const Bookmarks = lazy(() => import('../Bookmarks/Bookmarks'));
          ReactDOM.render(
            <Suspense fallback={''}>
              <Bookmarks view={view} />{' '}
            </Suspense>,
            container,
          );
        }
        if (action.title === 'Print') {
          const Print = lazy(() => import('../Print/Print'));
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
  const tipsDismissed = () => {
    setTips([]);
    setTipsTitle('');
  };
  const showTips = () => {
    const action = actions.find((action: any) => {
      return action.isActive;
    });
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

  const mapInitialized = async (mapView: __esri.MapView) => {
    if (!viewCreated) {
      setView(mapView);
      setViewCreated(true);

      const container = document.getElementById('propertySearch');
      if (mapView.map) {
        ReactDOM.render(
          <PropertyPanel
            view={mapView}
            propertiesSelected={propertiesSelected}
            featureSelected={featureSelected}
            selectedProperties={selectedProperties}
          />,
          container,
        );
      }
    }
  };

  const geometryChanged = (geometry: __esri.Geometry) => {
    const container = document.getElementById('propertySearch');
    debugger;
    ReactDOM.render(
      <PropertyPanel
        geometry={geometry}
        propertiesSelected={propertiesSelected}
        selectedProperties={selectedProperties}
        featureSelected={featureSelected}
        selectedFeature={selectedFeature}
      />,
      container,
    );
  };

  const updateTheme = (theme: string) => {
    if (theme) {
      if (theme === 'dark') {
        setTheme('dark');
      }
      if (theme === 'light') {
        setTheme('light');
      }
    } else {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        theme = 'dark';
        setTheme('dark');
      } else {
        theme = 'light';
        setTheme('light');
      }
    }
    document.body.classList.remove(theme === 'light' ? 'dark' : 'light');
    document.body.classList.add(theme === 'light' ? 'light' : 'dark');

    const link = Array.from(document.head.querySelectorAll('link')).find((link: HTMLLinkElement) => {
      return link.href.includes(`${theme}/main.css`);
    });
    if (link) {
      document.head.appendChild(link);
    }

    if (window.matchMedia != undefined) {
      window.matchMedia('(prefers-color-scheme: dark)')?.addEventListener('change', (e) => {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
        window.localStorage.setItem('imaps_theme', newTheme);
        document.body.classList.remove(newTheme === 'light' ? 'dark' : 'light');
        document.body.classList.add(newTheme === 'light' ? 'light' : 'dark');
        const link = Array.from(document.head.querySelectorAll('link')).find((link: HTMLLinkElement) => {
          return link.href.includes(`${newTheme}/main.css`);
        });
        if (link) {
          document.head.appendChild(link);
        }
      });
    }
  };

  useEffect(() => {
    initialized();

    const theme = window.localStorage.getItem('imaps_theme') as string;

    updateTheme(theme);

    window.addEventListener('resize', windowResize);
    document
      .querySelector('calcite-shell-panel')
      ?.shadowRoot?.querySelector('.content')
      ?.setAttribute('style', 'width: calc(var(--calcite-panel-width-multiplier) * 100vw) !important;');
    // if (root) {
    //   root.innerHTML +=
    //     '<style>{.content {width: calc(var(--calcite-panel-width-multiplier) * 100vw) !important;}</style>';
    // }

    // setTimeout(() => {
    //   document
    //     .querySelector('calcite-shell-panel')
    //     ?.shadowRoot?.querySelector('.content')
    //     ?.setAttribute('style', 'width: 100vw');
    // }, 500);

    return () => {
      window.removeEventListener('resize', windowResize);
      deactivate();
    };
  }, [actions]);
  return (
    <div>
      <calcite-shell theme={theme} className="shell">
        {width >= 1000 ? (
          <calcite-shell-panel slot="primary-panel" position="start" width-scale="l" collapsed>
            <calcite-action-bar slot="action-bar">
              {actions.map((action: any) => {
                if (action.isTool) {
                  return (
                    <calcite-action
                      key={action.icon}
                      name={action.container}
                      text={action.title}
                      icon={action.icon}
                      disabled={!viewCreated ? '' : null}
                      onClick={(e: any) => {
                        setActions([...actionClicked(e, action, actions)]);
                        requestAnimationFrame(() => {
                          setWidget(action);
                        });
                      }}
                      active={action.isActive === true ? '' : null}
                    ></calcite-action>
                  );
                }
              })}
            </calcite-action-bar>
            {actions.map((action: any) => {
              if (action.isTool && action.isActive) {
                return (
                  <div className="panel-header" key={`${action.icon}_header`}>
                    <div className="panel-title">{action.title}</div>
                    <div className="header-actions">
                      {showTips()}
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

                          setActions([...actions]);
                        }}
                      ></calcite-action>
                    </div>
                  </div>
                );
              }
            })}
            {actions.map((action: any) => {
              if (action.isTool && action.isActive) {
                return (
                  <div
                    id={action.container}
                    className="action-panel"
                    key={action.container}
                    hidden={!action.isActive}
                  ></div>
                );
              }
            })}
            ;
            {/* <calcite-panel dismissible dismissed>
              <div slot="header-content">
                {
                  actions.find((action: any) => {
                    return action.isActive && action.isTool;
                  })?.title
                }
              </div>
              <div slot="header-trailing-content">
                <calcite-action
                  label="Performs another custom action"
                  text="Perform Another Action!"
                  text-enabled
                  icon="blog"
                ></calcite-action>
              </div>
              {actions.map((action: any) => {
                if (action.isTool) {
                  return <div id={action.container} key={action.container} hidden={!action.isActive}></div>;
                }
              })}
            </calcite-panel> */}
          </calcite-shell-panel>
        ) : (
          ''
        )}

        <calcite-shell-panel slot="contextual-panel" position="end" width-scale="l">
          <calcite-action-bar slot="action-bar">
            {actions.map((action: any) => {
              if (!action.isTool || width < 1000) {
                return (
                  <calcite-action
                    key={action.icon}
                    text={action.title}
                    name={action.container}
                    icon={action.icon}
                    disabled={!viewCreated ? '' : null}
                    onClick={async (e: any) => {
                      setActions([...actionClicked(e, action, actions)]);
                      requestAnimationFrame(() => {
                        setWidget(action);
                      });
                    }}
                    active={action.isActive === true ? '' : null}
                  ></calcite-action>
                );
              }
            })}
          </calcite-action-bar>
          {actions.map((action: any) => {
            if ((!action.isTool || width < 1000) && action.isActive) {
              return (
                <div className="panel-header" key={`${action.icon}_header`}>
                  <div className="panel-title">{action.title}</div>
                  <div className="header-actions">
                    {showTips()}
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
                  key={action.container}
                  hidden={!action.isActive}
                ></div>
              );
            }
          })}

          {/* <calcite-panel dismissible>
            <div slot="header-content">
              {
                actions.find((action: any) => {
                  return action.isActive;
                })?.title
              }
            </div>
            {showTips()}

            {actions.map((action: any) => {
              if (!action.isTool || width < 1000) {
                return <div id={action.container} key={action.container} hidden={!action.isActive}></div>;
              }
            })}
          </calcite-panel> */}
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
