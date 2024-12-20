import { useCallback, useEffect, useRef, useState } from 'react';
import {
  addSearchEvents,
  intializeLocationFeature,
  intializeLocationSearch,
} from './location';
import { PanelProps } from '../../utils/PanelProps';
import { tips } from './tips';
import Graphic from '@arcgis/core/Graphic';

const useLocation = (props: PanelProps) => {
  const searchDiv = useRef(null);
  const featureDiv = useRef<HTMLDivElement>(null);

  const loaded = useRef(false);
  const search = useRef<__esri.widgetsSearch>();
  const feature = useRef<__esri.Feature>();

  const [isIntersection, setIsIntersection] = useState(false);
  const [intersections, setIntersections] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!loaded.current && searchDiv.current) {
      loaded.current = true;
      intializeLocationSearch(
        props.view,
        searchDiv.current,
        setIsIntersection,
      ).then((searchWidget: __esri.widgetsSearch) => {
        search.current = searchWidget;
        addSearchEvents(
          searchWidget,
          props.view,
          setIsIntersection,
          setIntersections,
          setSearchTerm,
          feature.current as __esri.Feature,
        );
      });
      feature.current = intializeLocationFeature(
        props.view,
        featureDiv.current as HTMLDivElement,
      );
    }
  });
  useEffect(() => {
    setIsActive(props.isActive);
  }, [props.isActive]);
  const panelDismissed = useCallback(() => {
    props.panelDismissed();
  }, []);
  const tipsClicked = useCallback(() => {
    props.showTips(tips);
  }, []);
  return {
    searchDiv,
    featureDiv,
    search,
    isIntersection,
    intersections,
    searchTerm,
    isActive,
    panelDismissed,
    tipsClicked,
  };
};
export default useLocation;
