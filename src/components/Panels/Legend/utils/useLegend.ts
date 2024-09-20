import { useCallback, useEffect, useRef, useState } from 'react';
import { PanelProps } from '../../utils/PanelProps';
import { initializeLegend } from './legend';
import { tips } from './tips';

const useLegend = (props: PanelProps) => {
  const ref = useRef() as any;
  const loaded = useRef(false);
  const [legend, setLegend] = useState<__esri.Legend>();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!loaded.current) {
      loaded.current = true;
      setLegend(initializeLegend(ref.current, props.view));
    }
    return () => {
      legend && legend?.destroy();
    };
  }, []);
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
    ref,
    isActive,
    panelDismissed,
    tipsClicked,
  };
};
export default useLegend;
