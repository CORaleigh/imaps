import React from "react";
import "@esri/calcite-components/components/calcite-panel";
import "@esri/calcite-components/components/calcite-alert";
import "@esri/calcite-components/components/calcite-slider";

import "@arcgis/map-components/components/arcgis-basemap-gallery";
import { useBasemaps } from "./useBasemaps";
import styles from "./Basemaps.module.css";
import TipManager from "../../TipsManager";

interface BasemapsProps {
  mapElement: React.RefObject<HTMLArcgisMapElement>;
  onPanelClose: () => void;
  onHelpClick: (id: string) => void;

  closed: boolean;
  style?: React.CSSProperties;
}

const Basemaps: React.FC<BasemapsProps> = ({
  mapElement,
  closed,
  onPanelClose,
  onHelpClick,
}) => {
  const {
    mapsSource,
    imageSource,
    mapsGallery,
    imagesGallery,
    esriGallery,
    selectedTab,
    blendSlider,
    handleGalleryReady,
    handleTabChange,
    handleBlendChange,
    handleSliderInput,
    handleGalleryChange,
    blendEnabled,
    showBlendOption,
  } = useBasemaps(mapElement);
  return (
    <>
      <calcite-panel
        heading="Basemaps"
        closable
        oncalcitePanelClose={() => onPanelClose()}
        closed={closed}
        className={styles.basemapsPanel}
      >
        <calcite-action
          slot="header-actions-end"
          icon="question-mark"
          text="Help"
          onClick={() => onHelpClick("basemaps")}
        ></calcite-action>
        <TipManager name="basemaps"></TipManager>
        {selectedTab === "images" && showBlendOption && (
          <div slot="content-top">
            <calcite-label layout="inline">
              <calcite-switch
                oncalciteSwitchChange={handleBlendChange}
                checked={blendEnabled}
              ></calcite-switch>
              Blend
            </calcite-label>

            <calcite-label
              style={{
                visibility: blendEnabled ? "visible" : "hidden",
                height: blendEnabled ? "auto" : 0,
              }}
            >
              
              <calcite-slider
                ref={blendSlider}
                oncalciteSliderInput={handleSliderInput}
                value={50}
                minLabel="Slider to control blend transparency"
              ></calcite-slider>
            </calcite-label>
          </div>
        )}
        <calcite-tabs
          position="bottom"
          scale="l"
          layout="center"
          style={{ height: "calc(100vh - 50px - 65px)" }}
        >
          <calcite-tab-nav
            slot="title-group"
            oncalciteTabChange={handleTabChange}
          >
            <calcite-tab-title
              selected={selectedTab === "basemap"}
              iconStart="basemap"
              label="basemap"
            >
              Maps
            </calcite-tab-title>
            <calcite-tab-title
              selected={selectedTab === "images"}
              iconStart="image-layer"
              label="images"
            >
              Images
            </calcite-tab-title>
            <calcite-tab-title
              selected={selectedTab === "esri"}
              iconStart="arcgis-online"
              label="esri"
            >
              Esri
            </calcite-tab-title>
          </calcite-tab-nav>
          <calcite-tab selected={selectedTab === "basemap"}>
            <arcgis-basemap-gallery
              ref={mapsGallery}
              className={styles.basemapGallery}
              referenceElement={mapElement.current}
              source={mapsSource}
              onarcgisReady={handleGalleryReady}
              onarcgisPropertyChange={handleGalleryChange}
            ></arcgis-basemap-gallery>
          </calcite-tab>
          <calcite-tab selected={selectedTab === "images"}>
            <arcgis-basemap-gallery
              ref={imagesGallery}
              className={styles.basemapGallery}
              referenceElement={mapElement.current}
              source={imageSource}
              onarcgisReady={handleGalleryReady}
              onarcgisPropertyChange={handleGalleryChange}
            ></arcgis-basemap-gallery>
          </calcite-tab>
          <calcite-tab>
            <arcgis-basemap-gallery
              selected={selectedTab === "esri"}
              ref={esriGallery}
              className={styles.basemapGallery}
              referenceElement={mapElement.current}
              onarcgisReady={handleGalleryReady}
              onarcgisPropertyChange={handleGalleryChange}
            ></arcgis-basemap-gallery>
          </calcite-tab>
        </calcite-tabs>
      </calcite-panel>
    </>
  );
};

export default React.memo(
  Basemaps,
  (prev, next) =>
    prev.mapElement === next.mapElement &&
    prev.closed === next.closed &&
    prev.onPanelClose === next.onPanelClose,
);
