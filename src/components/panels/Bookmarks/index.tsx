import React, { useEffect, useRef } from "react";
import "@esri/calcite-components/components/calcite-panel";
import "@arcgis/map-components/components/arcgis-bookmarks";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils.js";
import { useMap } from "../../../context/useMap";
import styles from "./Bookmarks.module.css";
import TipManager from "../../TipsManager";
import type Bookmark from "@arcgis/core/webmap/Bookmark";

interface BookmarksProps {
  mapElement: React.RefObject<HTMLArcgisMapElement>;
  closed: boolean;
  onPanelClose: () => void;
  onHelpClick: (id: string) => void;
}

const Bookmarks: React.FC<BookmarksProps> = ({
  mapElement,
  closed,
  onPanelClose,
  onHelpClick,
}) => {
  const initializedRef = useRef(false);
  const { webMapId } = useMap();
  useEffect(() => {
    if (!mapElement.current || initializedRef.current) return;
    initializedRef.current = true;
  }, [mapElement]);

  return (
    <calcite-panel
      heading="Bookmarks"
      closable
      oncalcitePanelClose={() => onPanelClose()}
      closed={closed}
      className={styles.bookmarksPanel}
    >
      <calcite-action
        slot="header-actions-end"
        icon="question-mark"
        text="Help"
        onClick={() => onHelpClick("bookmarks")}
      ></calcite-action>
      <TipManager name="bookmarks"></TipManager>

      <arcgis-bookmarks
        referenceElement={mapElement.current}
        showAddBookmarkButton
        showEditBookmarkButton
        defaultEditOptions={{ takeScreenshot: true }}
        onarcgisReady={(event) => {
          const bookmarks = event.target;
          if (!bookmarks) return;
          const flow = event.target.shadowRoot?.querySelector("calcite-flow");
          if (flow) {
            flow.style.height = "calc(100vh - 32px - 50px - 41px)";
          }
          reactiveUtils.watch(
            () => bookmarks.bookmarks.toArray().map((b: Bookmark) => b.name), // or id
            () => {
              localStorage.setItem(
                `imaps_${webMapId.current}_bookmarks`,
                JSON.stringify(bookmarks.bookmarks.toArray() ?? []),
              );
            },
          );
        }}
      ></arcgis-bookmarks>
    </calcite-panel>
  );
};

export default Bookmarks;
