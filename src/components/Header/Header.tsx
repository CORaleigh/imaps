import {
  CalciteButton,
  CalciteDropdown,
  CalciteDropdownGroup,
  CalciteDropdownItem,
  CalciteIcon,
  CalciteLabel,
  CalciteSwitch,
  CalciteTooltip,
  CalciteNavigation,
  CalciteNavigationLogo,
} from '@esri/calcite-components-react';
import React, { useEffect, useRef, useState } from 'react';
import './Header.css';
import { itemSelected, toggleTheme } from './utils/header';
import { CalciteDropdownCustomEvent, CalciteDropdownItemCustomEvent, CalciteSwitchCustomEvent } from '@esri/calcite-components';
import { Link } from '../../config/config';
import { resetImaps } from '../WebMap/utils/map';

interface HeaderProps {
  disclaimerClicked: () => void;
  logo: {
    dark: string;
    light: string;
  };
  reset: () => void;
}
function Header({ disclaimerClicked, logo, reset }: HeaderProps) {
  const ref = useRef<HTMLCalciteDropdownElement>();

  // const shortcuts = useRef<HTMLCalciteModalElement>();

  const [links, setLinks] = useState<Link[]>();
  const [theme, setTheme] = useState('light');
  //const altOptKey: string = navigator.userAgent.toUpperCase().includes('MAC') ? 'Option' : 'Alt';
  const isMobile: boolean = window.matchMedia('(pointer:coarse)').matches;
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
    <CalciteNavigation slot="header" label="header">
      {logo && (
        <CalciteNavigationLogo
          slot="logo"
          heading=""
          thumbnail={theme === 'dark' ? logo.dark : logo.light}
          target="_blank"
          href="https://www.wake.gov/departments-government/geographic-information-services-gis/maps-apps-data/imaps-information"
        ></CalciteNavigationLogo>
      )}
      <CalciteDropdown
        slot="content-end"
        ref={ref as any}
        placement="bottom-end"
        scale="m"
        type="click"
        onCalciteDropdownOpen={(e: CalciteDropdownCustomEvent<void>) => {
          e.target.shadowRoot
            ?.querySelector('.calcite-dropdown-content')
            ?.setAttribute(
              'style',
              `min-height: ${isMobile ? '590' : '590'}px`,
            );
        }}
        closeOnSelectDisabled
      >
        <CalciteButton
          id="menuButton"
          appearance="solid"
          scale="m"
          slot="trigger"
          name="Menu"
          role="button"
          aria-label="Menu"
          label="Menu"
        >
          <CalciteIcon icon="hamburger" scale="m"></CalciteIcon>
        </CalciteButton>
        <CalciteTooltip label="Menu" referenceElement="menuButton" closeOnClick>
          Menu
        </CalciteTooltip>
        <CalciteDropdownGroup
          selectionMode='single'
          group-title="About"
          key="disclaimer"
        >
          <CalciteDropdownItem 
            onCalciteDropdownItemSelect={(e: CalciteDropdownItemCustomEvent<void>) => {disclaimerClicked();itemSelected(e);}}>
            Disclaimer
          </CalciteDropdownItem>
        </CalciteDropdownGroup>
        {links &&
          links.map((group: Link) => {
            return (
              <CalciteDropdownGroup
                selection-mode="single"
                group-title={group.title}
                key={group.title}
              >
                {group.links.map((link: Link) => {
                  return (
                    <CalciteDropdownItem
                      rel="noreferrer"
                      href={link.href}
                      target="_blank"
                      key={link.title}
                      onCalciteDropdownItemSelect={itemSelected}
                    >
                      {link.title}
                    </CalciteDropdownItem>
                  );
                })}
              </CalciteDropdownGroup>
            );
          })}
        <CalciteDropdownGroup selectionMode="single" group-title="Settings">
          <CalciteDropdownItem onCalciteDropdownItemSelect={itemSelected}>
            <CalciteLabel layout="inline" className="label-wrapper">
              Light
              <CalciteIcon icon="brightness" scale="s"></CalciteIcon>
              <CalciteSwitch
                checked={theme === 'dark' ? true : undefined}
                onCalciteSwitchChange={(e: CalciteSwitchCustomEvent<void>) => {
                  const isDark = toggleTheme(e.target.checked);
                  setTheme(isDark ? 'dark' : 'light');
                  window.localStorage.setItem(
                    'calcite-imaps-theme',
                    isDark ? 'dark' : 'light',
                  );
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
            onCalciteDropdownItemSelect={itemSelected}
            onClick={reset}>
            Reset To Default
          </CalciteDropdownItem>
        </CalciteDropdownGroup>
      </CalciteDropdown>
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
    </CalciteNavigation>
  );
}
export default React.memo(Header);
