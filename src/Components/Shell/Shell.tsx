/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect, useState } from 'react';
import { LocationSearch } from '../LocationSearch/LocationSearch';
import { MapView } from '../MapView/MapView';
import { PropertyPanel } from '../PropertyPanel/PropertyPanel';
import { Print } from '../Print/Print';

import './Shell.scss';
import { actionClicked, deactivate, initialized } from './utils/shell';
import { Sketch } from '../Sketch/Sketch';
import { Basemaps } from '../Basemaps/Basemaps';
import { Measure } from '../Measure/Measure';
import { PropertySelect } from '../PropertySelect/PropertySelect';
import { Legend } from '../Legend/Legend';
import { Bookmarks } from '../Bookmarks/Bookmarks';
import ReactDOM from 'react-dom';
import { Layers } from '../Layers/Layers';
import ThemeContext from '../ThemeContext';
import { Header } from '../Header/Header';
import { links } from '../../config/config';
import { TipManager } from '../TipManager/TipManager';
import ActionContext from '../ActionContext';

export const Shell = (props: any) => {
    //const [actions, setActions] = useState(props.actions);
    const [tips, setTips] = useState<any>([]);
    const [tipsTitle, setTipsTitle] = useState<string>();

    const [width, setWidth] = useState(window.innerWidth);
    const [view, setView] = useState<__esri.MapView | null>(null);
    const [viewCreated, setViewCreated] = useState(false);
    const [selectedProperties, setSelectedProperties] = useState<__esri.Graphic[]>([]);

    const { theme, setTheme } = useContext(ThemeContext);
    const { actions, setActions } = useContext(ActionContext);
    const propertiesSelected = (properties: __esri.Graphic[]) => {
        setSelectedProperties([...[], ...properties]);
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
        setActions([...[], ...actions]);
    };
    const windowResize = () => {
        setWidth(window.innerWidth);
    };
    const setWidget = (action: any) => {
        if (action) {
            const container = document.getElementById(action.container);
            if (!container?.hasChildNodes()) {
                if (action.title === 'Property Search') {
                    ReactDOM.render(<PropertyPanel view={view} propertiesSelected={propertiesSelected} />, container);
                }
                if (action.title === 'Location Search') {
                    ReactDOM.render(<LocationSearch view={view} />, container);
                }
                if (action.title === 'Layers') {
                    ReactDOM.render(<Layers view={view} />, container);
                }
                if (action.title === 'Basemaps') {
                    ReactDOM.render(<Basemaps view={view} />, container);
                }
                if (action.title === 'Legend') {
                    ReactDOM.render(<Legend view={view} />, container);
                }
                if (action.title === 'Property Select') {
                    ReactDOM.render(
                        <PropertySelect
                            view={view}
                            geometrySet={(g: any) => {
                                const container = document.getElementById('propertySearch');

                                ReactDOM.render(
                                    <PropertyPanel geometry={g} propertiesSelected={propertiesSelected} />,
                                    container,
                                );
                            }}
                        />,
                        container,
                    );
                }
                if (action.title === 'Measure') {
                    ReactDOM.render(<Measure view={view} />, container);
                }
                if (action.title === 'Sketch') {
                    ReactDOM.render(<Sketch view={view} />, container);
                }
                if (action.title === 'Bookmarks') {
                    ReactDOM.render(<Bookmarks view={view} />, container);
                }
                if (action.title === 'Print') {
                    ReactDOM.render(<Print view={view} />, container);
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
                ReactDOM.render(<PropertyPanel view={mapView} propertiesSelected={propertiesSelected} />, container);
            }
        }
    };

    const geometryChanged = (point: __esri.Point) => {
        const container = document.getElementById('propertySearch');

        ReactDOM.render(<PropertyPanel geometry={point} propertiesSelected={propertiesSelected} />, container);
    };

    const updateTheme = () => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
            require(`@arcgis/core/assets/esri/themes/light/main.css`);

            require(`@arcgis/core/assets/esri/themes/dark/main.css`);
        } else {
            setTheme('light');
            require(`@arcgis/core/assets/esri/themes/dark/main.css`);

            require(`@arcgis/core/assets/esri/themes/light/main.css`);
        }
        // if (window.matchMedia != undefined) {
        //     window.matchMedia('(prefers-color-scheme: dark)')?.addEventListener('change', (e) => {
        //         const newTheme = e.matches ? 'dark' : 'light';
        //         setTheme(newTheme);
        //         const styles = document.querySelectorAll('style');
        //         const styleArray = Array.from(styles);
        //         styleArray.forEach((style: any) => {
        //             if (style.innerHTML.includes(`--esri-calcite-theme-name: "${newTheme}"`)) {
        //                 document.head.appendChild(style);
        //             }
        //         });
        //     });
        // }
    };

    useEffect(() => {
        initialized();
        updateTheme();

        window.addEventListener('resize', windowResize);

        return () => {
            window.removeEventListener('resize', windowResize);
            deactivate();
        };
    }, [props.actions]);
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
                                            onClick={(e: any) => {
                                                setActions([...actionClicked(e, action, props.actions)]);
                                                setWidget(action);
                                            }}
                                            active={action.isActive === true ? '' : null}
                                        ></calcite-action>
                                    );
                                }
                            })}
                        </calcite-action-bar>
                        <calcite-panel dismissible dismissed>
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
                                    return (
                                        <div
                                            id={action.container}
                                            key={action.container}
                                            hidden={!action.isActive}
                                        ></div>
                                    );
                                }
                            })}
                        </calcite-panel>
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
                                        onClick={async (e: any) => {
                                            setActions([...actionClicked(e, action, props.actions)]);
                                            setWidget(action);
                                        }}
                                        active={action.isActive === true ? '' : null}
                                    ></calcite-action>
                                );
                            }
                        })}
                    </calcite-action-bar>
                    <calcite-panel dismissible>
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
                                return (
                                    <div id={action.container} key={action.container} hidden={!action.isActive}></div>
                                );
                            }
                        })}
                    </calcite-panel>
                </calcite-shell-panel>

                <div slot="shell-header">
                    <Header links={links} />
                </div>
                <MapView
                    id="95092428774c4b1fb6a3b6f5fed9fbc4"
                    zoom="10"
                    initialized={mapInitialized}
                    geometryChanged={geometryChanged}
                    selectedProperties={selectedProperties}
                />
            </calcite-shell>
            <TipManager tips={tips} title={tipsTitle} closed tipsDismissed={tipsDismissed} />
        </div>
    );
};
