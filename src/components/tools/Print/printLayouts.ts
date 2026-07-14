// src/print/printLayouts.ts
import request from "@arcgis/core/request";
import TileInfo from "@arcgis/core/layers/support/TileInfo";
import type { Template } from "./templates"; // adjust path if needed
import { printTemplates } from "./templates"; // same
import type LOD from "@arcgis/core/layers/support/LOD";

export type Layout = {
  label: string;
  template: string;
  size: number; // smallest page dimension (used for sorting)
};

export type MapScale = {
  scale: string;
  label: string;
};

export type Format =
  | "pdf"
  | "png32"
  | "png8"
  | "jpg"
  | "gif"
  | "eps"
  | "svg"
  | "svgz"
  | string; // keep string union-friendly for services that return other values

/**
 * Get unique layouts from your printTemplates object.
 * - dedupes by generated template string
 * - produces a friendly label and size for sorting
 */
export const getLayouts = async (): Promise<Layout[]> => {
  // Defensive: ensure printTemplates exists and has expected shape
  const templateValues: Template[] =
    (printTemplates &&
      Array.isArray(printTemplates.results) &&
      printTemplates.results[0] &&
      Array.isArray(printTemplates.results[0].value) &&
      (printTemplates.results[0].value as Template[])) ||
    [];

  const seen = new Set<string>();
  const layouts: Layout[] = templateValues
    .map((v) => {
      const [width, height] = v.pageSize ?? [0, 0];
      const portrait = width <= height;

      const displayW = portrait ? width : height;
      const displayH = portrait ? height : width;
      const orientation = portrait ? "Portrait" : "Landscape";

      const label = `${displayW}"x${displayH}" ${orientation}`;
      const template = `${displayW}x${displayH}_${orientation.toLowerCase()}`;

      return { label, template, size: Math.min(width, height) };
    })
    .filter((l) => {
      if (seen.has(l.template)) return false;
      seen.add(l.template);
      return true;
    })
    .sort((a, b) => a.size - b.size);
  return layouts;
};

/**
 * Query the print service for available output formats.
 * Returns an array of values (as strings). If error occurs, returns [].
 */
export const getFormats = async (
  printServiceUrl: string
): Promise<Format[]> => {
  try {
    const resp = await request(printServiceUrl, { query: { f: "json" } });
    const params = resp?.data?.parameters;
    if (!Array.isArray(params)) return [];

    const fmtParam = params.find(
      (p: { name: string }) => p.name && p.name.toLowerCase() === "format"
    );
    const choiceList = fmtParam?.choiceList ?? [];
    // normalize to lowercase common tokens
    return (choiceList as string[]).map((f) => f.toLowerCase()) as Format[];
  } catch (err) {
    console.error("getFormats error:", err);
    return [];
  }
};

/**
 * Round a numeric mapScale to the nearest allowed print scale bucket.
 * Uses the same set of canonical scales your previous function had, but
 * implemented compactly with a single sorted array and a 'first >= value' lookup.
 *
 * Returns 0 when value is out of range (matches previous behavior).
 */
export const roundScale = (mapScale: number): number => {
  // conversion used originally: Math.round((mapScale * 600) / 564.248588)
  const converted = Math.round((mapScale * 600) / 564.248588);

  // canonical scale buckets (sorted ascending)
  const buckets = [
    75, 150, 300, 600, 1200, 2400, 4800, 9600, 19200, 38400, 76800, 153600,
    307200, 614400, 1228800,
  ];

  if (converted <= buckets[0]) return buckets[0];

  for (const b of buckets) {
    if (converted <= b) return b;
  }

  // if beyond max allowed bucket, keep old behavior (0)
  return 0;
};

/**
 * Get map scales based on TileInfo LODs.
 * Filters LODs (>= 300 && < 614400) then maps to roundScale and returns
 * an array of MapScale objects reversed (largest first).
 *
 * Appends a 'custom' entry at the end.
 */
export const getScales = (): MapScale[] => {
  const lods = TileInfo.create().lods ?? [];
  const scales = lods
    .filter((lod: LOD) => lod.scale >= 300 && lod.scale < 614400)
    .map((lod: LOD) => {
      const s = roundScale(lod.scale);
      return {
        scale: s.toString(),
        label: `1" = ${(s / 12).toLocaleString("en")}'`,
      } as MapScale;
    });

  // dedupe by scale value (roundScale can map multiple lods to same bucket)
  const seen = new Set<string>();
  const deduped = scales
    .filter((m) => {
      if (seen.has(m.scale)) return false;
      seen.add(m.scale);
      return true;
    })
    .reverse(); // match previous reversed order

  deduped.push({ scale: "custom", label: "User Defined" });

  return deduped;
};

/**
 * Maps a print service format token to a sensible file extension.
 * Keeps mapping explicit for clarity.
 */
export const getFileExtension = (format: string): string => {
  const map: Record<string, string> = {
    PNG32: "png",
    PNG8: "png",
    TIFF: "tiff",
    JPG: "jpg",
    JPEG: "jpg",
    PDF: "pdf",
    GIF: "gif",
    EPS: "eps",
    SVG: "svg",
    SVGZ: "svgz",
  };

  const key = (format ?? "").toString().toUpperCase();
  return map[key] ?? key.toLowerCase();
};
