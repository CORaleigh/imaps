import MapView from '@arcgis/core/views/MapView';
import Bookmarks from '@arcgis/core/widgets/Bookmarks';
import { saveMap } from '../../../WebMap/utils/map';
export const initializeBookmarks = (ref: HTMLDivElement, view: MapView) => {
  const bookmarks = new Bookmarks({
    view: view,
    container: ref,
    editingEnabled: true,
  });
  bookmarks.bookmarks.on('after-change', () => saveMap(view));
  bookmarks.bookmarks.on('after-add', () => saveMap(view));
  bookmarks.bookmarks.on('after-remove', () => saveMap(view));

  return bookmarks;
};
