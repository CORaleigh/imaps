/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useContext, useEffect, useRef, useState } from 'react';
import ThemeContext from '../ThemeContext';
import './Header.scss';
export const Header = (props: any) => {
  const ref = useRef<HTMLElement>();
  const disclaimer = useRef<HTMLCalciteModalElement>();

  const [links, setLinks] = useState(props.links);
  const { theme, setTheme } = useContext(ThemeContext);
  useEffect(() => {
    ref.current?.addEventListener('calciteDropdownSelect', (event: any) => {
      requestAnimationFrame(() => {
        const theme = event.target.querySelector('calcite-dropdown-item[active]').getAttribute('value');
        setTheme(theme);
        document.body.classList.remove(theme === 'light' ? 'dark' : 'light');
        document.body.classList.add(theme === 'light' ? 'light' : 'dark');

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
    <div>
      <header>
        {/* <h2>iMAPS</h2> */}
        <img className="logo" src={theme === 'light' ? 'logo.svg' : 'logo_dark.svg'} />
        <calcite-dropdown ref={ref} placement="bottom-trailing" scale="m" width="m" type="click">
          <calcite-button scale="s" slot="dropdown-trigger">
            <calcite-icon icon="hamburger"></calcite-icon>
          </calcite-button>
          <calcite-dropdown-item
            class="menu-action"
            selection-mode="none"
            rel="noreferrer"
            onClick={() => {
              if (disclaimer.current) {
                disclaimer.current.active = true;
              }
            }}
          >
            Disclaimer
          </calcite-dropdown-item>
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

      <calcite-modal ref={disclaimer} aria-labelledby="modal-title">
        <div slot="header" id="modal-title">
          Disclaimer
        </div>
        <div slot="content">
          iMAPS makes every effort to produce and publish the most current and accurate information possible. However,
          the maps are productions for information purposed, and are NOT surveys. No warranties, expressed or implied,
          are provided for the data therein, its use, or its interpretation. Register of Deeds documents accessed
          through this site are unofficial. The official records are maintained at the Wake County Register of Deeds
          office. The Wake County Register of Deeds assumes no responsibility or liability associated with the use or
          misused of this data.
        </div>
        <calcite-button
          slot="primary"
          width="full"
          onClick={() => {
            if (disclaimer.current) {
              disclaimer.current.active = false;
            }
          }}
        >
          Close
        </calcite-button>
      </calcite-modal>
    </div>
  );
};
export default Header;
