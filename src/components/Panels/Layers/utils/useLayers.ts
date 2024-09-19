import { useCallback, useEffect, useRef, useState } from 'react';
import { PanelProps } from '../../utils/PanelProps';
import { initializeLayers } from './layers';
import { tips } from './tips';

const useLayers = (props: PanelProps) => {
  const ref = useRef() as any;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const loaded = useRef(false);
  const [layerList, setLayerList] = useState<__esri.LayerList>();
  const [isLoading, setIsLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!loaded.current && props.mapId) {
      loaded.current = true;
      initializeLayers(ref.current, props.view, props.mapId).then(
        (layerList: __esri.LayerList) => {
          setLayerList(layerList);
          layerList.when(() => {
            setIsLoading(false);
          });
        },
      );
    }
    return () => {
      //layerList && layerList?.destroy();
    };
  }, []); // only after first render

  useEffect(() => {
    setIsActive(props.isActive);
  }, [props.isActive]);
  const panelDismissed = useCallback((e: any) => {
    props.panelDismissed();
  }, []);
  const tipsClicked = useCallback((e: any) => {
    props.showTips(tips);
  }, []);
  return {
    ref,
    layerList,
    isLoading,
    isActive,
    panelDismissed,
    tipsClicked,
  };
};
export default useLayers;
