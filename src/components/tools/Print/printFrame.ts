import type { ResourceHandle } from "@arcgis/core/core/Handles";
import type { Layout } from "./printLayouts";
import { printTemplates, type Template } from "./templates";

import { watch } from "@arcgis/core/core/reactiveUtils";
//Note, DPI is 200

let handle: ResourceHandle;
export const showPrintFrame = (
  mapElement: HTMLArcgisMapElement,
  selectedLayout: Layout,
  printScale: number,
  showAttributes: boolean,
  showLegend: boolean,
  scaleType: "current" | "custom",
) => {
  const printTemplate = getPrintTemplate(
    selectedLayout,
    showAttributes,
    showLegend,
  );

  if (!printTemplate) return;

  addPrintGraphic(mapElement, printTemplate, printScale);

  handle?.remove();
  if (scaleType === "custom") {
    handle = watch(
      () => mapElement.view.resolution,
      () => {
        addPrintGraphic(mapElement, printTemplate, printScale);
      },
    );
  }
};

export function updatePrintFrame(
  mapElement: HTMLArcgisMapElement,
  width: number,
  height: number,
  scale: number,
) {
  const adjustmentFactor = 1.23; // Factor to adjust for scaling

  // Convert print dimensions (pixels) to inches
  const printWidthInches = width;
  const printHeightInches = height;

  // Convert scale to map units per inch
  const mapUnitsPerInch = scale / 39.3701; // 1 meter ≈ 39.37 inches

  // Calculate width and height in map units
  const widthMapUnits = printWidthInches * mapUnitsPerInch * adjustmentFactor;
  const heightMapUnits = printHeightInches * mapUnitsPerInch * adjustmentFactor;

  // Calculate the frame size in pixels based on the view's resolution
  const resolution = mapElement.view.resolution; // Map units per pixel
  const frameWidthPixels = widthMapUnits / resolution;
  const frameHeightPixels = heightMapUnits / resolution;

  // Calculate the center of the map view in pixels
  const centerX = mapElement.view.width / 2;
  const centerY = mapElement.view.height / 2;

  // Calculate the left, right, top, and bottom positions of the rectangle
  const left = centerX - frameWidthPixels / 2;
  const top = centerY - frameHeightPixels / 2;
  //   const right = centerX + frameWidthPixels / 2;
  //   const bottom = centerY + frameHeightPixels / 2;

  // Create or update the SVG element
  let svg = mapElement.shadowRoot?.getElementById(
    "printFrameSvg",
  ) as SVGElement | null;
  if (!svg) {
    svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.id = "printFrameSvg";
    svg.style.position = "absolute";
    svg.style.left = "0";
    svg.style.top = "0";
    svg.style.width = "100%";
    svg.style.height = "100%";
    mapElement.shadowRoot
      ?.querySelector(".esri-overlay-surface")
      ?.appendChild(svg);
  }

  // Clear previous children
  while (svg.firstChild) {
    svg.removeChild(svg.firstChild);
  }

  // Create the mask for the hollow effect
  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");

  const mask = document.createElementNS("http://www.w3.org/2000/svg", "mask");
  mask.id = "printMask";

  // Outer rectangle (entire map area) filled with white (visible area)
  const outerRect = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "rect",
  );
  outerRect.setAttribute("x", "0");
  outerRect.setAttribute("y", "0");
  outerRect.setAttribute("width", "100%");
  outerRect.setAttribute("height", "100%");
  outerRect.setAttribute("fill", "white"); // The outer area remains visible

  // Inner rectangle (print frame area) filled with black (cut-out area)
  const innerRect = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "rect",
  );
  innerRect.setAttribute("x", left.toString());
  innerRect.setAttribute("y", top.toString());
  innerRect.setAttribute("width", frameWidthPixels.toString());
  innerRect.setAttribute("height", frameHeightPixels.toString());
  innerRect.setAttribute("fill", "black"); // The inner area will be cut out

  // Append rectangles to the mask
  mask.appendChild(outerRect);
  mask.appendChild(innerRect);

  // Append mask to defs
  defs.appendChild(mask);
  svg.appendChild(defs);

  // Create the gray background, using the mask to hollow out the print area
  const grayRect = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "rect",
  );
  grayRect.setAttribute("x", "0");
  grayRect.setAttribute("y", "0");
  grayRect.setAttribute("width", "100%");
  grayRect.setAttribute("height", "100%");
  grayRect.setAttribute("fill", "rgba(0,0,0,0.5)"); // Gray background
  grayRect.setAttribute("mask", "url(#printMask)"); // Apply the mask to cut out the hollow area
  svg.appendChild(grayRect);

  // Add dashed blue border for the frame
  const borderRect = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "rect",
  );
  borderRect.setAttribute("x", left.toString());
  borderRect.setAttribute("y", top.toString());
  borderRect.setAttribute("width", frameWidthPixels.toString());
  borderRect.setAttribute("height", frameHeightPixels.toString());
  borderRect.setAttribute("fill", "none");
  borderRect.setAttribute("stroke", "rgb(30,144,255)");
  borderRect.setAttribute("stroke-width", "2");
  borderRect.setAttribute("stroke-dasharray", "5");

  // Append the border rect
  svg.appendChild(borderRect);
}

const addPrintGraphic = async (
  mapElement: HTMLArcgisMapElement,
  printTemplate: Template,
  printScale: number,
) => {
  //await projection.load();
  //   const extent = projection.project(mapElement.extent, {
  //     wkid: 2264,
  //   }) as Extent;
  //const center = extent.center;
  //let xmax, ymax, xmin, ymin, printFrame, geometry;

  const width = printTemplate?.webMapFrameSize[0];
  const height = printTemplate?.webMapFrameSize[1];
  updatePrintFrame(mapElement, width, height, printScale);
};

const getTemplateName = (
  selectedLayout: Layout | undefined,
  showAttributes: boolean,
  showLegend: boolean,
) => {
  let selectedTemplate = selectedLayout?.template.replace(".", "");

  if (showAttributes) {
    selectedTemplate += "_attributes";
  }
  if (showLegend) {
    selectedTemplate += "_legend";
  }
  return selectedTemplate;
};

export const getPrintTemplate = (
  selectedLayout: Layout,
  showAttributes: boolean,
  showLegend: boolean,
) => {
  const templateName = getTemplateName(
    selectedLayout,
    showAttributes,
    showLegend,
  );

  const printTemplate = printTemplates.results[0].value.find((result) => {
    return result.layoutTemplate === templateName;
  });
  return printTemplate;
};

export const hidePrintFrame = (mapElement: HTMLArcgisMapElement) => {
  const svg = mapElement.shadowRoot?.getElementById("printFrameSvg");
  svg?.remove();
  handle?.remove();
};
