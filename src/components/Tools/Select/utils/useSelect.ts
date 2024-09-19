import { useCallback, useEffect, useRef, useState } from 'react';
import { cancelSelect, initializeSelect } from '../utils/select';
import SketchViewModel from '@arcgis/core/widgets/Sketch/SketchViewModel';
import { tips } from './tips';
import { SelectProps } from './SelectProps';

const useSelect = (props: SelectProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const loaded = useRef(false);
  const [isActive, setIsActive] = useState(false);

  const [selectedTool, setSelectedTool] = useState('');
  const [distance, setDistance] = useState(0);

  const [sketchVm, setSketchVm] = useState<SketchViewModel>();
  const [selectedProperty, setSelectedProperty] = useState(undefined) as any;

  useEffect(() => {
    if (!loaded.current) {
      loaded.current = true;
      initializeSelect(props.view, props.geometrySet, setSelectedTool).then(
        (sketchVm) => setSketchVm(sketchVm),
      );
    }
    return () => {
      sketchVm && sketchVm.destroy();
    };
  }, []);
  useEffect(() => {
    setSelectedProperty(props.selectedProperty);
  }, [props.selectedProperty]);
  useEffect(() => {
    if (sketchVm && props.toolDismissed) {
      sketchVm.cancel();
      setSelectedTool('');
    }
  }, [props.toolDismissed]);
  useEffect(() => {
    setIsActive(props.isActive);
    if (!props.isActive) {
      cancelSelect();
    }
  }, [props.isActive]);
  const toolDismissed = useCallback((e: any) => {
    props.toolDismissed();
    cancelSelect();
  }, []);
  const tipsClicked = useCallback((e: any) => {
    props.showTips(tips);
  }, []);
  return {
    isActive,
    selectedTool,
    setSelectedTool,
    sketchVm,
    distance,
    setDistance,
    selectedProperty,
    toolDismissed,
    tipsClicked,
  };
};

export default useSelect;
