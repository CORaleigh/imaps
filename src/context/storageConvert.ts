// ============================================================
// New (compact) format — what you store
// ============================================================
export type LayerType =
  | "feature" | "vector-tile" | "group" | "map-image"
  | "tile" | "imagery" | "graphics" | "csv" | "geojson" | "unknown";

export interface SublayerSummary {
  id: string | number | null;
  visible: boolean;
  opacity: number;
}

export interface CompactLayer {
  id: string | number | null;
  visible: boolean;
  opacity: number;
  type: LayerType;
  sublayers?: SublayerSummary[];
}

// ============================================================
// Old (ArcGIS Web Map spec) format — what you're migrating from
// ============================================================
interface OldLayer {
  id?: string | number | null;
  title?: string;
  name?: string;
  layerType?: string;
  type?: LayerType;
  visibility?: boolean;
  visible?: boolean;
  defaultVisibility?: boolean;
  opacity?: number;
  layers?: OldLayer[];
  sublayers?: OldLayer[];
  visibleLayers?: (string | number)[];
}

type OldState =
  | OldLayer[]
  | { operationalLayers?: OldLayer[]; layers?: OldLayer[] };

// ============================================================
// Field mapping helpers
// ============================================================
const LAYER_TYPE_MAP: Record<string, LayerType> = {
  ArcGISFeatureLayer: "feature",
  VectorTileLayer: "vector-tile",
  GroupLayer: "group",
  ArcGISMapServiceLayer: "map-image",
  ArcGISTiledMapServiceLayer: "tile",
  ArcGISImageServiceLayer: "imagery",
  GraphicsLayer: "graphics",
  CSV: "csv",
  GeoJSON: "geojson",
};

function toType(l: OldLayer): LayerType {
  if (l.type) return l.type;
  if (l.layerType && LAYER_TYPE_MAP[l.layerType]) return LAYER_TYPE_MAP[l.layerType];
  return "unknown";
}

function toId(l: OldLayer): string | number | null {
  if (l.title != null) return l.title;
  if (typeof l.id === "number") return l.id;
  return l.title ?? null;
}

// Does this layer carry an EXPLICIT boolean visibility? If not, it's skipped.
function hasVisibility(l: OldLayer): boolean {
  return (
    typeof l.visible === "boolean" ||
    typeof l.visibility === "boolean" ||
    typeof l.defaultVisibility === "boolean"
  );
}

function toVisible(l: OldLayer): boolean {
  if (typeof l.visible === "boolean") return l.visible;
  if (typeof l.visibility === "boolean") return l.visibility;
  if (typeof l.defaultVisibility === "boolean") return l.defaultVisibility;
  return false; // unreachable once hasVisibility gates the caller
}

function toOpacity(l: OldLayer): number {
  return typeof l.opacity === "number" ? l.opacity : 1;
}

function summarizeSublayers(children: OldLayer[]): SublayerSummary[] {
  return children
    .filter(hasVisibility) // drop children with no explicit visibility
    .map((c) => ({
      id: toId(c),
      visible: toVisible(c),
      opacity: toOpacity(c),
    }));
}

// ============================================================
// The function you call: old webmap JSON → CompactLayer[]
// ============================================================
export function convertToNewFormat(oldState: OldState): CompactLayer[] {
  const ops: OldLayer[] = Array.isArray(oldState)
    ? oldState
    : oldState.operationalLayers ?? oldState.layers ?? [];

  const layers: CompactLayer[] = [];

  const walk = (arr: OldLayer[]): void => {
    for (const l of arr) {
      const type = toType(l);
      const children: OldLayer[] = l.layers ?? l.sublayers ?? [];

      // Skip layers with no explicit visibility.
      if (hasVisibility(l)) {
        const entry: CompactLayer = {
          id: toId(l),
          visible: toVisible(l),
          opacity: toOpacity(l),
          type,
        };
        if (type === "group" || type === "map-image") {
          entry.sublayers = summarizeSublayers(children);
        }
        layers.push(entry);
      }

      // Still recurse into group children regardless, so a visible child
      // under a visibility-less group isn't lost.
      if (type === "group") walk(children);
    }
  };

  walk(ops);
  return layers;
}