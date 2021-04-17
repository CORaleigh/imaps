/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useRef } from 'react';
import BookmarksWidget from '@arcgis/core/widgets/Bookmarks';
import WebMap from '@arcgis/core/WebMap';
import * as promiseUtils from '@arcgis/core/core/promiseUtils';

const checkSavedBookmarks = (): Promise<any[]> => {
  return promiseUtils.create((resolve) => {
    if (window.localStorage.getItem('imaps')) {
      const webmap: WebMap = WebMap.fromJSON(JSON.parse(window.localStorage.getItem('imaps') as string));
      webmap.load().then(() => {
        resolve(webmap.bookmarks);
      });
    }
  });
};
export const Bookmarks = (props: any) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const bookmarks = new BookmarksWidget({
      container: ref.current as HTMLDivElement,
      view: props.view,
      editingEnabled: true,
    });
    checkSavedBookmarks().then((savedBookmarks) => {
      bookmarks.bookmarks.removeAll();
      bookmarks.bookmarks.addMany(savedBookmarks);
    });
    return () => {
      bookmarks && bookmarks.destroy();
    };
  }, [props.id]); // only after initial render
  return <div ref={ref}></div>;
};
export default Bookmarks;
