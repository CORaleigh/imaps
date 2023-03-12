import { useCallback, useEffect, useRef, useState } from "react";
import { tips } from "./tips";
import Measurement from "@arcgis/core/widgets/Measurement";
import { initializeMeasure } from "./measure";
import { ToolProps } from "../../utils/ToolProps";

const useMeasure = (props: ToolProps) => {
  const measureRef = useRef() as any;
  const loaded = useRef(false);
  const [selectedTool, setSelectedTool] = useState("");
  const [isActive, setIsActive] = useState(false);
  const measurement = useRef<Measurement>();
  useEffect(() => {
    if (!loaded.current) {
      loaded.current = true;
      const widget = initializeMeasure(measureRef.current, props.view);
      measurement.current = widget;
      widget.watch("activeTool", (activeTool) => {
        if (activeTool) {
          setSelectedTool(activeTool ? activeTool : "");
          //measurement.current?.clear();
        }
      });
    }
    return () => {
      //measurement.current && measurement.current?.destroy();
    };
  }, []);
  useEffect(() => {
    setIsActive(props.isActive);
    if (!props.isActive) {
      (measurement.current as any).activeTool = null;
      //measurement.current?.clear();
    }
    if (isActive && measurement.current) {
      measurement.current.activeTool = selectedTool as any;
    }
  }, [props.isActive]);
  const toolDismissed = useCallback((e: any) => {
    props.toolDismissed();

    (measurement.current as any).activeTool = null;
    //measurement.current?.clear();
  }, []);
  const tipsClicked = useCallback((e: any) => {
    props.showTips(tips);
  }, []);
  return {
    measureRef,
    measurement,
    selectedTool,
    setSelectedTool,
    isActive,
    toolDismissed,
    tipsClicked,
  };
};

export default useMeasure;
