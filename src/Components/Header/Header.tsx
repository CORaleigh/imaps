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
} from "@esri/calcite-components-react";
import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import { toggleTheme } from "./utils/header";
function Header() {
  const logo = useRef<HTMLImageElement>(null);
  const ref = useRef<HTMLElement>();

  const disclaimer = useRef<HTMLCalciteModalElement>();
  const [links, setLinks] = useState<any[]>();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    fetch("./config.json").then((response) => {
      response.json().then((config) => {
        setLinks(config.links);
      });
    });
    const theme = window.localStorage.getItem("calcite-imaps-theme");
    if (theme === "dark") {
      requestAnimationFrame(() => {
        toggleTheme(true);
        setTheme("dark");
      });
    }
  }, []);
  return (
    <div slot="header" id="header">
      <div>
        <img
          ref={logo}
          alt="imaps"
          src={theme === "dark" ? "logo_dark.svg" : "logo.svg"}
          className="logo"
        />
      </div>
      <div id="header-controls">
        <CalciteDropdown
          ref={ref as any}
          placement="bottom-end"
          scale="m"
          width="l"
          type="click"
          onCalciteDropdownOpen={(e: any) => {
            e.target.shadowRoot
              ?.querySelector(".calcite-dropdown-content")
              ?.setAttribute("style", "min-height: 590px");
          }}
        >
          <CalciteButton
            id="menuButton"
            scale="m"
            slot="trigger"
            name="Menu"
            role="button"
            aria-label="Menu"
          >
            <CalciteIcon icon="hamburger" scale="m"></CalciteIcon>
          </CalciteButton>
          <CalciteTooltip
            label="Menu"
            referenceElement="menuButton"
            closeOnClick
          >
            Menu
          </CalciteTooltip>
          <CalciteDropdownGroup
            selection-mode="none"
            group-title="About"
            key="disclaimer"
          >
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
                <CalciteDropdownGroup
                  selection-mode="none"
                  group-title={group.title}
                  key={group.title}
                >
                  {group.links.map((link: any) => {
                    return (
                      <CalciteDropdownItem
                        rel="noreferrer"
                        href={link.href}
                        target="_blank"
                        key={link.title}
                      >
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
                  checked={theme === "dark" ? true : undefined}
                  onCalciteSwitchChange={(e: any) => {
                    const isDark = toggleTheme(e.currentTarget.checked);
                    setTheme(isDark ? "dark" : "light");
                    window.localStorage.setItem(
                      "calcite-imaps-theme",
                      isDark ? "dark" : "light"
                    );
                  }}
                ></CalciteSwitch>
                <CalciteIcon icon="moon" scale="s"></CalciteIcon>
                Dark
              </CalciteLabel>
            </CalciteDropdownItem>
            <CalciteDropdownItem
              iconStart="reset"
              onClick={() => {
                window.localStorage.setItem("imaps_reset", "true");
                window.localStorage.removeItem("imaps_calcite");
                window.location.reload();
              }}
            >
              Reset To Default
            </CalciteDropdownItem>
          </CalciteDropdownGroup>
        </CalciteDropdown>
      </div>
      <CalciteModal ref={disclaimer as any} aria-labelledby="modal-title">
        <div slot="header" id="modal-title">
          Disclaimer
        </div>
        <div slot="content">
          iMAPS makes every effort to produce and publish the most current and
          accurate information possible. However, the maps are productions for
          information purposed, and are NOT surveys. No warranties, expressed or
          implied, are provided for the data therein, its use, or its
          interpretation. Register of Deeds documents accessed through this site
          are unofficial. The official records are maintained at the Wake County
          Register of Deeds office. The Wake County Register of Deeds assumes no
          responsibility or liability associated with the use or misused of this
          data.
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
    </div>
  );
}
export default React.memo(Header);
