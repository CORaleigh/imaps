import { useCallback, useEffect, useRef, useState } from "react";
import { ToolProps } from "../../utils/ToolProps";
import {
  cancelSketch,
  initializeSketchViewModel,
  sketchActivated,
} from "./sketch";
import { tips } from "./tips";

const useSketch = (props: ToolProps) => {
  const loaded = useRef(false);
  const [activeSketchTool, setActiveSketchTool] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [selectedGraphics, setSelectedGraphics] = useState<__esri.Graphic[]>(
    []
  );

  useEffect(() => {
    if (!loaded.current) {
      initializeSketchViewModel(
        props.view,
        setActiveSketchTool,
        selectedGraphics,
        setSelectedGraphics
      );
    }
  }, []);
  useEffect(() => {
    setIsActive(props.isActive);
    if (!props.isActive) {
      props.toolDismissed();
      cancelSketch();
      setActiveSketchTool("");
      setSelectedGraphics([...[], ...[]]);
    } else {
      (props.view as __esri.MapView).popup.autoOpenEnabled = false;

    }
  }, [props.isActive]);
  const toolDismissed = useCallback(() => {
    props.toolDismissed();
    cancelSketch();
    setActiveSketchTool("");
    setSelectedGraphics([...[], ...[]]);
  }, []);
  const tipsClicked = useCallback((e: any) => {
    props.showTips(tips);
  }, []);
  const checkGeometryType = (
    selectedGraphics: __esri.Graphic[],
    geometryType: string
  ) => {
    const geometryTypes = selectedGraphics.map((graphic) => {
      let type: string = graphic.geometry.type;
      if (graphic.symbol.type === "text") {
        type = "text";
      }
      return type;
    });
    const uniqueTypes = geometryTypes.filter((t, index) => {
      return geometryTypes.indexOf(t) === index;
    });
    if (
      uniqueTypes.length > 1 ||
      uniqueTypes.length < 1 ||
      selectedGraphics.length !== 1
    ) {
      return false;
    }
    if (uniqueTypes.length === 1 && uniqueTypes[0] === geometryType) {
      return true;
    }
  };
  return {
    activeSketchTool,
    setActiveSketchTool,
    selectedGraphics,
    setSelectedGraphics,
    isActive,
    toolDismissed,
    tipsClicked,
    checkGeometryType,
  };
};

export default useSketch;
