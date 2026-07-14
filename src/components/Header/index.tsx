import React from "react";
import "@esri/calcite-components/components/calcite-navigation";
import "@esri/calcite-components/components/calcite-navigation-logo";
import "@esri/calcite-components/components/calcite-dropdown";
import "@esri/calcite-components/components/calcite-dropdown-group";
import "@esri/calcite-components/components/calcite-dropdown-item";
import "@esri/calcite-components/components/calcite-tooltip";

import { useHeader } from "./useHeader";
import { useMap } from "../../context/useMap";

interface HeaderProps {
  theme: "dark" | "light";
  appSize: "small" | "medium" | "large";
  onOpenDisclaimer: () => void;
  onOpenHelp: () => void;
}

const Header: React.FC<HeaderProps> = ({
  theme,
  appSize,
  onOpenDisclaimer,
  onOpenHelp,
}) => {
  const { webMapId } = useMap();

  const { links, logo, handleDropdownOpen, handleClearStorage } = useHeader(
    webMapId.current,
  );
  return (
    <>
      <calcite-navigation slot="header">
        <calcite-navigation-logo
          slot="logo"
          thumbnail={theme === "light" ? logo.current + ".svg" : logo.current + "_dark.svg"}
          description={
            appSize !== "small" ? "Wake County and City of Raleigh" : ""
          }
          href="https://www.wake.gov/departments-government/geographic-information-services-gis/maps-apps-data/imaps-information"
        ></calcite-navigation-logo>

        <calcite-dropdown
          scale="m"
          label={"menu"}
          overlayPositioning="absolute"
          width="l"
          slot="content-end"
          oncalciteDropdownBeforeOpen={handleDropdownOpen}
        >
          <calcite-action
            id="menu-button"
            text="Menu"
            icon="hamburger"
            slot="trigger"
            scale="l"
          ></calcite-action>
          <calcite-dropdown-group groupTitle="About" selectionMode="none">
            <calcite-dropdown-item onClick={onOpenDisclaimer}>
              Disclaimer
            </calcite-dropdown-item>
          </calcite-dropdown-group>
          {links.current.map((group, i) => (
            <calcite-dropdown-group
              groupTitle={group.title}
              key={`header-group-${i}`}
              selectionMode="none"
            >
              {group.title === "Help" && (
                <calcite-dropdown-item onClick={onOpenHelp}>
                  User Guide
                </calcite-dropdown-item>
              )}

              {group.links.map((link, j) => (
                <calcite-dropdown-item
                  key={`header-link-${i}-${j}`}
                  href={link.href}
                  target="_blank"
                >
                  {link.title}
                </calcite-dropdown-item>
              ))}
            </calcite-dropdown-group>
          ))}
          <calcite-dropdown-group groupTitle="Settings" selectionMode="none">
            <calcite-dropdown-item
              iconStart="reset"
              onClick={handleClearStorage}
            >
              Clear Stored Settings
            </calcite-dropdown-item>
          </calcite-dropdown-group>
        </calcite-dropdown>
      </calcite-navigation>
      <calcite-tooltip
        closeOnClick
        referenceElement="menu-button"
        placement="left"
        overlayPositioning="fixed"
      >
        Menu
      </calcite-tooltip>
    </>
  );
};

export default Header;
