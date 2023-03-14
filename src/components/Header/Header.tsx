import {
  CalciteButton,
  CalciteDropdown,
  CalciteDropdownGroup,
  CalciteDropdownItem,
  CalciteIcon,
  CalciteLabel,
  CalciteModal,
  CalciteSwitch,
  CalciteTooltip,
} from '@esri/calcite-components-react';
import React, { useEffect, useRef, useState } from 'react';
import './Header.css';
import { toggleTheme } from './utils/header';
function Header() {
  const logo = useRef<HTMLImageElement>(null);
  const ref = useRef<HTMLElement>();

  const disclaimer = useRef<HTMLCalciteModalElement>();
  // const shortcuts = useRef<HTMLCalciteModalElement>();

  const [links, setLinks] = useState<any[]>();
  const [theme, setTheme] = useState('light');
  //const altOptKey: string = navigator.userAgent.toUpperCase().includes('MAC') ? 'Option' : 'Alt';
  const isMobile: boolean =  window.matchMedia("(pointer:coarse)").matches;
  useEffect(() => {
    fetch('./config.json').then((response) => {
      response.json().then((config) => {
        setLinks(config.links);
      });
    });
    const theme = window.localStorage.getItem('calcite-imaps-theme');
    if (theme === 'dark') {
      requestAnimationFrame(() => {
        toggleTheme(true);
        setTheme('dark');
      });
    }
  }, []);
  return (
    <div slot="header" id="header">
      <div>
        <img ref={logo} alt="imaps" src={theme === 'dark' ? 'logo_dark.svg' : 'logo.svg'} className="logo" />
      </div>
      <div id="header-controls">
        <CalciteDropdown
          ref={ref as any}
          placement="bottom-end"
          scale="m"
          width="l"
          type="click"
          onCalciteDropdownOpen={(e: any) => {
            e.target.shadowRoot?.querySelector('.calcite-dropdown-content')?.setAttribute('style', `min-height: ${isMobile ? '590' : '590'}px`);
          }}
        >
          <CalciteButton id="menuButton" scale="m" slot="trigger" name="Menu" role="button" aria-label="Menu">
            <CalciteIcon icon="hamburger" scale="m"></CalciteIcon>
          </CalciteButton>
          <CalciteTooltip label="Menu" referenceElement="menuButton" closeOnClick>
            Menu
          </CalciteTooltip>
          <CalciteDropdownGroup selection-mode="none" group-title="About" key="disclaimer">
            <CalciteDropdownItem
              onClick={() => {
                if (disclaimer.current) {
                  disclaimer.current.open = !disclaimer.current.open;
                }
              }}
            >
              Disclaimer
            </CalciteDropdownItem>
          </CalciteDropdownGroup>
          {links &&
            links.map((group: any) => {
              return (
                <CalciteDropdownGroup selection-mode="none" group-title={group.title} key={group.title}>
                  {group.links.map((link: any) => {
                    return (
                      <CalciteDropdownItem rel="noreferrer" href={link.href} target="_blank" key={link.title}>
                        {link.title}
                      </CalciteDropdownItem>
                    );
                  })}
                </CalciteDropdownGroup>
              );
            })}
          <CalciteDropdownGroup selectionMode="none" group-title="Settings">
            <CalciteDropdownItem>
              <CalciteLabel layout="inline" className="label-wrapper">
                Light
                <CalciteIcon icon="brightness" scale="s"></CalciteIcon>
                <CalciteSwitch
                  checked={theme === 'dark' ? true : undefined}
                  onCalciteSwitchChange={(e: any) => {
                    const isDark = toggleTheme(e.currentTarget.checked);
                    setTheme(isDark ? 'dark' : 'light');
                    window.localStorage.setItem('calcite-imaps-theme', isDark ? 'dark' : 'light');
                  }}
                ></CalciteSwitch>
                <CalciteIcon icon="moon" scale="s"></CalciteIcon>
                Dark
              </CalciteLabel>
            </CalciteDropdownItem>
            {/* {!isMobile && <CalciteDropdownItem
              onClick={() => {
                if (shortcuts.current) {
                  shortcuts.current.open = !shortcuts.current.open;
                }
              }}
            >
              Keyboard Shortcuts
            </CalciteDropdownItem>} */}
            <CalciteDropdownItem
              iconStart="reset"
              onClick={() => {
                window.localStorage.setItem('imaps_reset', 'true');
                const url = new URL(window.location as any);
                let config: string = '';
                if (url.searchParams.get('config')) {
                  config += url.searchParams.get('config');
                }
                window.localStorage.removeItem(`imaps_calcite_${config}`);
                window.location.reload();
              }}
            >
              Reset To Default
            </CalciteDropdownItem>
          </CalciteDropdownGroup>
        </CalciteDropdown>
      </div>
      <CalciteModal ref={disclaimer as any} aria-labelledby="disclaimer-title">
        <div slot="header" id="disclaimer-title">
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
        <CalciteButton
          slot="primary"
          width="full"
          onClick={() => {
            if (disclaimer.current) {
              disclaimer.current.open = !disclaimer.current.open;
            }
          }}
        >
          Close
        </CalciteButton>
      </CalciteModal>
      {/* {!isMobile && <CalciteModal ref={shortcuts as any} aria-labelledby="shortcuts-title">
        <div slot="header" id="shortcuts-title">
          Keyboard Shortcuts
        </div>
        <div className="shortcuts-content " slot="content">
          <h3>Panels</h3>
          <table>
            <tbody>
              <tr>
                <td>Property Search</td>
                <td>{altOptKey}+P</td>
              </tr>
              <tr>
                <td>Location Search</td>
                <td>{altOptKey}+O</td>
              </tr>
              <tr>
                <td>Layer list</td>
                <td>{altOptKey}+L</td>
              </tr>
              <tr>
                <td>Legend</td>
                <td>{altOptKey}+G</td>
              </tr>
              <tr>
                <td>Basemap</td>
                <td>{altOptKey}+B</td>
              </tr>
            </tbody>
          </table>
          <h3>Tools</h3>
          <table>
            <tbody>
              <tr>
                <td>Property Select</td>
                <td>Shift+{altOptKey}+S</td>
              </tr>
              <tr>
                <td>Measure</td>
                <td>Shift+{altOptKey}+M</td>
              </tr>
              <tr>
                <td>Sketch</td>
                <td>Shift+{altOptKey}+K</td>
              </tr>
              <tr>
                <td>Bookmarks</td>
                <td>Shift+{altOptKey}+B</td>
              </tr>
              <tr>
                <td>Print</td>
                <td>Shift+{altOptKey}+P</td>
              </tr>
            </tbody>
          </table>
          <h3>Select Property</h3>
          <em>Hold keys without releasing to use these shortcuts</em>
          <br />
          <table>
            <tbody>
              <tr>
                <td>Select by Area</td>
                <td>Shift+{altOptKey}+A</td>
              </tr>
              <tr>
                <td>Select by Circle</td>
                <td>Shift+{altOptKey}+C</td>
              </tr>
              <tr>
                <td>Select by Rectangle</td>
                <td>Shift+{altOptKey}+R</td>
              </tr>
              <tr>
                <td>Select by Line</td>
                <td>Shift+{altOptKey}+L</td>
              </tr>
            </tbody>
          </table>
        </div>
        <CalciteButton
          slot="primary"
          width="full"
          onClick={() => {
            if (shortcuts.current) {
              shortcuts.current.open = !shortcuts.current.open;
            }
          }}
        >
          Close
        </CalciteButton>
      </CalciteModal>} */}
    </div>
  );
}
export default React.memo(Header);
