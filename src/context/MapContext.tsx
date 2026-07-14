import { createContext } from "react";
import type { MapContextType } from "./MapContext.types";

const MapContext = createContext<MapContextType | undefined>(undefined);

export default MapContext;