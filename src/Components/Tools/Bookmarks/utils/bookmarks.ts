import MapView from "@arcgis/core/views/MapView";
import Bookmarks from "@arcgis/core/widgets/Bookmarks";
export function initializeBookmarks(ref: HTMLDivElement, view: MapView) {
  const bookmarks = new Bookmarks({
    view: view,
    container: ref,
    editingEnabled: true,
  });
  return bookmarks;
}
