/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useContext, useEffect, useRef, useState } from 'react';
import ThemeContext from '../ThemeContext';
import './Header.scss';
export const Header = (props: any) => {
    const ref = useRef<HTMLElement>();
    const [links, setLinks] = useState(props.links);
    const { theme, setTheme } = useContext(ThemeContext);
    useEffect(() => {
        ref.current?.addEventListener('calciteDropdownSelect', (event: any) => {
            requestAnimationFrame(() => {
                const theme = event.target.querySelector('calcite-dropdown-item[active]').getAttribute('value');
                setTheme(theme);
                const styles = document.querySelectorAll('style');
                const styleArray = Array.from(styles);
                styleArray.forEach((style, i) => {
                    if (style.innerHTML.includes(`--esri-calcite-theme-name: "${theme}"`)) {
                        document.head.appendChild(style);
                    }
                });
            });
        });
    }, []);
    return (
        <header>
            <h2>iMAPS</h2>
            <calcite-dropdown ref={ref} placement="bottom-trailing" scale="m" width="m" type="click">
                <calcite-button slot="dropdown-trigger">
                    <calcite-icon icon="hamburger"></calcite-icon>
                </calcite-button>
                {links.map((group: any) => {
                    return (
                        <calcite-dropdown-group selection-mode="none" group-title={group.title} key={group.title}>
                            {group.links.map((link: any) => {
                                return (
                                    <calcite-dropdown-item href={link.href} target="_blank" key={link.title}>
                                        {link.title}
                                    </calcite-dropdown-item>
                                );
                            })}
                        </calcite-dropdown-group>
                    );
                })}
                <calcite-dropdown-group selection-mode="single" group-title="Theme">
                    <calcite-dropdown-item value="light" active={theme === 'light' ? '' : null}>
                        Light
                    </calcite-dropdown-item>
                    <calcite-dropdown-item value="dark" active={theme === 'dark' ? '' : null}>
                        Dark
                    </calcite-dropdown-item>
                </calcite-dropdown-group>
            </calcite-dropdown>
        </header>
    );
};
