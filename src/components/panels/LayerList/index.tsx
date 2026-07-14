import "@esri/calcite-components/components/calcite-panel";
import "@esri/calcite-components/components/calcite-scrim";
import "@esri/calcite-components/components/calcite-tooltip";

import "@arcgis/map-components/components/arcgis-layer-list";
import { useLayerList } from "./useLayerList";
import React from "react";
import TipManager from "../../TipsManager";
import styles from "./LayerList.module.css";

interface LayerListProps {
  mapElement: React.RefObject<HTMLArcgisMapElement>;
  onPanelClose: () => void;
  onHelpClick: (id: string) => void;
  closed: boolean;
  style?: React.CSSProperties;
}

const LayerList: React.FC<LayerListProps> = ({
  mapElement,
  closed,
  onPanelClose,
  onHelpClick,
}) => {
  const {
    layerListElement,
    listItemCreatedFunction,
    handleTriggerAction,
    handleResetLayers,
    loaded,
    handleLayerListReady
  } = useLayerList(mapElement);
  return (
    <>
      <calcite-panel
        id={styles.layerList}
        heading="Layer List"
        closable
        oncalcitePanelClose={() => onPanelClose()}
        closed={closed}
      >
        <calcite-action
          slot="header-actions-end"
          icon="question-mark"
          text="Help"
          onClick={() => onHelpClick("layer-list")}
        ></calcite-action>
        <TipManager name="layer-list"></TipManager>

        <calcite-action
          text="Reset Layers"
          icon="reset"
          slot="header-actions-end"
          id="reset-layers-action"
          onClick={handleResetLayers}
        ></calcite-action>
        <calcite-tooltip closeOnClick reference-element="reset-layers-action">
          Reset Layers
        </calcite-tooltip>

        {loaded && (
          <arcgis-layer-list
            id={styles.layerList}
            ref={layerListElement}
            referenceElement={mapElement.current}
            showFilter
            filterPlaceholder="Search by layer title"
            visibilityAppearance="checkbox"
            listItemCreatedFunction={listItemCreatedFunction}
            onarcgisTriggerAction={handleTriggerAction}
            onarcgisReady={handleLayerListReady}
          ></arcgis-layer-list>
        )}
      </calcite-panel>
      {!loaded && (
        <calcite-scrim
          loading
          style={{ width: "100%", height: "100vh" }}
        ></calcite-scrim>
      )}
    </>
  );
};

export default React.memo(
  LayerList,
  (prev, next) =>
    prev.mapElement === next.mapElement &&
    prev.closed === next.closed &&
    prev.onPanelClose === next.onPanelClose,
);
