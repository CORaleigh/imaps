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
        document.body.classList.remove(theme === 'light' ? 'dark' : 'light');
        document.body.classList.add(theme === 'light' ? 'light' : 'dark');
        debugger;
        const link = Array.from(document.head.querySelectorAll('link')).find((link: HTMLLinkElement) => {
          return link.href.includes(`${theme}/main.css`);
        });
        if (link) {
          document.head.appendChild(link);
        }
        window.localStorage.setItem('imaps_theme', theme);

        // document.body.classList.remove(theme === 'dark' ? 'light' : 'dark');
        // document.body.classList.add(theme === 'dark' ? 'dark' : 'light');
        // const styles = document.querySelectorAll('style');
        // const styleArray = Array.from(styles);
        // styleArray.forEach((style, i) => {
        //   if (style.innerHTML.includes(`--esri-calcite-theme-name: "${theme}"`)) {
        //     document.head.appendChild(style);
        //   }
        // });
      });
    });
  }, []);
  return (
    <header>
      <h2>iMAPS</h2>
      <calcite-dropdown ref={ref} placement="bottom-trailing" scale="m" width="m" type="click">
        <calcite-button scale="s" slot="dropdown-trigger">
          <calcite-icon icon="hamburger"></calcite-icon>
        </calcite-button>
        {links.map((group: any) => {
          return (
            <calcite-dropdown-group selection-mode="none" group-title={group.title} key={group.title}>
              {group.links.map((link: any) => {
                return (
                  <calcite-dropdown-item rel="noreferrer" href={link.href} target="_blank" key={link.title}>
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
export default Header;
