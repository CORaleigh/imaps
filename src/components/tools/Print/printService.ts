/* eslint-disable @typescript-eslint/no-explicit-any */
// -----------------------------
// Imports
// -----------------------------

import Graphic from "@arcgis/core/Graphic";
import PrintTemplate from "@arcgis/core/rest/support/PrintTemplate";
import LegendLayer from "@arcgis/core/rest/support/LegendLayer";
import * as print from "@arcgis/core/rest/print";
import PrintParameters from "@arcgis/core/rest/support/PrintParameters";
import SpatialReference from "@arcgis/core/geometry/SpatialReference";

import type { Layout } from "./printLayouts";
import type { Format } from "./usePrint";
import type { PrintResponse } from "@arcgis/core/rest/types";
import type GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import type FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import type FieldInfo from "@arcgis/core/popup/FieldInfo";

// -----------------------------
// Types
// -----------------------------
export interface Job {
  title?: string;
  loading: boolean;
  submitted: string;
  href: string | null;
}

export interface Export {
  id: string;
  title: string;
  format: string;
  loading: boolean;
  url?: string;
  error?: string;
}

type CustomElement = { [key: string]: string };

// -----------------------------
// Helper Functions
// -----------------------------
export const roundScale = (mapScale: number): number => {
  const thresholds = [
    75, 150, 300, 600, 1200, 2400, 4800, 9600, 19200, 38400, 76800, 153600,
    307200, 614400, 1228800,
  ];
  for (const t of thresholds) if (mapScale <= t) return t;
  return mapScale;
};

export const getFileExtension = (format: string) => {
  switch (format.toLowerCase()) {
    case "png32":
    case "png8":
      return "png";
    case "tiff":
      return "tiff";
    default:
      return format.toLowerCase();
  }
};

export const isPrintResponse = (
  value: unknown
): value is PrintResponse =>
  typeof value === "object" && value !== null && "url" in value;

// -----------------------------
// Printing Functions
// -----------------------------
export const prepareExport = async (
  mapElement: HTMLArcgisMapElement,
  printScale: number,
  selectedLayout: Layout | undefined,
  selectedFormat: Format | undefined,
  title: string,
  showLegend: boolean,
  showAttributes: boolean,
  selectedProperty: Graphic | null,
  exportUrl: string,
  setExports: (updater: (prev: Export[]) => Export[]) => void
) => {
  const exportId = crypto.randomUUID(); // unique id
  const exportJob: Export = {
    loading: true,
    url: undefined,
    title: `${title}.${getFileExtension(selectedFormat as any)}`,
    format: selectedFormat as any,
    id: exportId,
  };
  setExports((prev) => [...prev, exportJob]);

  const templateName = getTemplateName(selectedLayout, showAttributes, showLegend);


  if (!selectedLayout || !templateName) return;

  const customElements: CustomElement[] = getCustomElements(
    selectedLayout.size,
    printScale,
    showAttributes,
    selectedProperty
  );

  const printTemplate = getPrintTemplate(
    mapElement,
    printScale,
    selectedFormat,
    title,
    templateName,
    customElements
  );

  const graphicsLayer = mapElement.map?.findLayerById(
    "print-graphic"
  ) as GraphicsLayer;
  const clusterLayer = mapElement.map?.findLayerById("selection-cluster");

  if (graphicsLayer) graphicsLayer.visible = false;
  if (clusterLayer) clusterLayer.visible = false;

  try {
    const result = await exportMap(
      mapElement,
      exportUrl,
      printTemplate,
      selectedFormat
    );

    if (graphicsLayer) graphicsLayer.visible = true;
    if (clusterLayer) clusterLayer.visible = true;

    if (isPrintResponse(result)) {
      setExports((prev) =>
        prev.map((item) =>
          item.id === exportId
            ? { ...item, loading: false, url: result.url ?? undefined }
            : item
        )
      );
    } else {
      setExports((prev) =>
        prev.map((item) =>
          item.id === exportId
            ? { ...item, loading: false, error: (result as any)?.message }
            : item
        )
      );
    }
  } catch (err) {
    console.error(err);
  }
};

// -----------------------------
// Helper: Template / Custom Elements
// -----------------------------
const getTemplateName = (
  layout: Layout | undefined,
  showAttributes: boolean,
  showLegend: boolean
) => {
  let template = layout?.template.replace(".", "");
  if (showAttributes) template += "_attributes";
  if (showLegend) template += "_legend";
  return template;
};

const getCustomElements = (
  size: number,
  mapScale: number,
  showAttributes?: boolean,
  selectedFeature?: Graphic | null
): CustomElement[] => {
  const elements: CustomElement[] = [];
  elements.push({ Scale: (mapScale / 12).toLocaleString() });

  if (size < 24) {
    elements.push({ HalfScale: (mapScale / 24).toLocaleString() });
    elements.push({ "2xScale": ((mapScale / 12) * 2).toLocaleString() });
  } else if (size < 36) {
    elements.push({ "2xScale": ((mapScale / 12) * 2).toLocaleString() });
    elements.push({ "4xScale": ((mapScale / 12) * 4).toLocaleString() });
  } else {
    elements.push({ "2xScale": ((mapScale / 12) * 2).toLocaleString() });
    elements.push({ "4xScale": ((mapScale / 12) * 4).toLocaleString() });
    elements.push({ "6xScale": ((mapScale / 12) * 6).toLocaleString() });
  }

  if (showAttributes && selectedFeature) {
    elements.push({ PropertyInfo: formatAttributes(selectedFeature) });
  }

  return elements;
};

const formatAttributes = (graphic: Graphic): string => {
  let text = "";
  (graphic.layer as FeatureLayer)?.popupTemplate?.fieldInfos?.forEach(
    (field: FieldInfo) => {
      if (!field.fieldName) return;
      const value = graphic.getAttribute(field.fieldName);
      if (value == null) return;
      if (
        !["OBJECTID", "PARCEL_PK", "PARCEL_STATUS"].includes(field.fieldName)
      ) {
        if (field.fieldName.includes("DATE")) {
          const date = new Date(value);
          text += `${field.label}: ${
            date.getUTCMonth() + 1
          }/${date.getUTCDate()}/${date.getUTCFullYear()}\n`;
        } else if (
          field.fieldName.includes("PRICE") ||
          field.fieldName.includes("VAL")
        ) {
          text += `${field.label}: $${value}\n`;
        } else {
          text += `${field.label}: ${value}\n`;
        }
      }
    }
  );
  return text;
};

// -----------------------------
// Print Template and Export Map
// -----------------------------
const getPrintTemplate = (
  mapElement: HTMLArcgisMapElement,
  printScale: number,
  selectedFormat: Format | undefined,
  title: string,
  templateName: string,
  customElements: CustomElement[]
) =>
  new PrintTemplate({
    attributionVisible: false,
    outScale: printScale,
    showLabels: true,
    format: selectedFormat as any,
    scalePreserved: true,
    exportOptions: {
      dpi: 200
    },
    layoutOptions: {
      titleText: title,
      scalebarUnit: "Feet",
      customTextElements: customElements,
      legendLayers: mapElement.map?.allLayers
        .filter((l) => l.type !== "graphics" && l.listMode !== "hide")
        .map((l) => new LegendLayer({ layerId: l.id, title: l.title! })) as any,
    },
    layout: templateName as any,
  });

const exportMap = async (
  mapElement: HTMLArcgisMapElement,
  exportUrl: string,
  template: PrintTemplate,
  selectedFormat?: Format
) => {
  try {
    template.format = selectedFormat as any;
    return await print.execute(
      exportUrl,
      new PrintParameters({
        template,
        view: mapElement.view,
        outSpatialReference: new SpatialReference({ wkid: 2264 }),
      }),
      {
        timeout: 120000,
        headers: { "Content-Type": "application/json;charset=UTF-8" },
      }
    );
  } catch (err) {
    console.error(err);
    return err;
  }
};
