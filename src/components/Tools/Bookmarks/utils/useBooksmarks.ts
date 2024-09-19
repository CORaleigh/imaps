import { useCallback, useEffect, useRef, useState } from 'react';
import { tips } from './tips';
import { initializeBookmarks } from './bookmarks';
import { ToolProps } from '../../utils/ToolProps';

const useBookmarks = (props: ToolProps) => {
  const bookmarkRef = useRef() as any;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const loaded = useRef(false);
  const [bookmarks, setBookmarks] = useState<__esri.Bookmarks>();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!loaded.current) {
      loaded.current = true;
      setBookmarks(initializeBookmarks(bookmarkRef.current, props.view));
    }
    return () => {
      bookmarks && bookmarks.destroy();
    };
  }, []); // only after first render
  useEffect(() => {
    setIsActive(props.isActive);
  }, [props.isActive]);
  const toolDismissed = useCallback((e: any) => {
    props.toolDismissed();
  }, []);
  const tipsClicked = useCallback((e: any) => {
    props.showTips(tips);
  }, []);
  return { bookmarkRef, isActive, toolDismissed, tipsClicked };
};

export default useBookmarks;
