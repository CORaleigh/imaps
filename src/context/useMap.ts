import { useContext } from "react";
import MapContext from "./MapContext";
import type { MapContextType } from "./MapContext.types";

export const useMap = (): MapContextType => {
  const context = useContext(MapContext);
  if (!context) {
    throw new Error("useMap must be used within a MapProvider");
  }
  return context;
};