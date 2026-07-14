import { useEffect, useRef, useState, type RefObject } from "react";
import { SERVICE_DEFS, type Service } from "./config";
import { layerService } from "../../../../utils/mapLayerService";
import * as geodesicBufferOperator from "@arcgis/core/geometry/operators/geodesicBufferOperator.js";
import type Graphic from "@arcgis/core/Graphic";

export interface UseServicesProps {
  services: Service[];
  searching: Record<string, boolean>;
  accordionRef: RefObject<HTMLCalciteAccordionElement | null>;
  handleAccordionExpand: (
    event: HTMLCalciteAccordionItemElement["calciteAccordionItemExpand"]
  ) => void;
}

export const useServices = (
  mapElement: HTMLArcgisMapElement,
  selectedCondo: Graphic
): UseServicesProps => {
  const initializedRef = useRef(false);
  const queriedGraphicsCache = useRef<
    Record<string, Record<string, Graphic[]>>
  >({});
  // cache[propertyKey][serviceTitle] = graphics[]

  const [searching, setSearching] = useState<Record<string, boolean>>({});

  const [services, setServices] = useState<Service[]>(SERVICE_DEFS);
  const accordionRef = useRef<HTMLCalciteAccordionElement>(null);

  const handleAccordionExpand = async (
    event: HTMLCalciteAccordionItemElement["calciteAccordionItemExpand"]
  ) => {
    const title = event.target.heading;
    const svcIndex = services.findIndex((s) => s.title === title);
    if (svcIndex === -1 || !mapElement || !selectedCondo.geometry) return;

    const svc = services[svcIndex];
    const propertyKey = selectedCondo.getAttribute("REID") || "default";

    // check if we've already queried this property for this service
    if (queriedGraphicsCache.current[propertyKey]?.[svc.title]) {
      const cachedGraphics =
        queriedGraphicsCache.current[propertyKey][svc.title];
      setServices((prev) => {
        const updated = [...prev];
        updated[svcIndex] = { ...svc, graphics: cachedGraphics };
        return updated;
      });
      return;
    }

    setSearching((prev) => ({ ...prev, [svc.title]: true }));
    const newGraphics: Graphic[] = [];
    await geodesicBufferOperator.load();
    const buffered = geodesicBufferOperator.execute(selectedCondo.geometry, -5, {unit: "feet"});
    for (const serviceLayer of svc.layers) {
      // only load layer once
      if (!serviceLayer.layer) {
        const fl = layerService.getOrLoadLayer(serviceLayer.title);
        if (!fl) continue;
        serviceLayer.layer = fl;
      }

      const fl = serviceLayer.layer!;
      const result = await fl.queryFeatures({
        geometry: buffered,
        outFields: ["*"],
      });
      if (result.features.length > 0) {
        newGraphics.push(result.features[0]);
      }
    }

    // cache the results
    if (!queriedGraphicsCache.current[propertyKey]) {
      queriedGraphicsCache.current[propertyKey] = {};
    }
    queriedGraphicsCache.current[propertyKey][svc.title] = newGraphics;

    // update state
    setServices((prev) => {
      const updated = [...prev];
      updated[svcIndex] = { ...svc, graphics: newGraphics };
      return updated;
    });

    setSearching((prev) => ({ ...prev, [svc.title]: false }));
  };

  useEffect(() => {
    if (!mapElement || initializedRef.current || selectedCondo) return;
    // Initialize basemap logic only once
    initializedRef.current = true;
  }, [mapElement, selectedCondo]);

  useEffect(() => {
    if (!selectedCondo) return;

    // clear cached graphics for previous property
    queriedGraphicsCache.current = {};

    // clear all graphics in services state
    setServices((prev) => prev.map((s) => ({ ...s, graphics: [] })));
    accordionRef.current
      ?.querySelectorAll("calcite-accordion-item")
      .forEach(
        (item: HTMLCalciteAccordionItemElement) => (item.expanded = false)
      );
  }, [selectedCondo]);

  return { services, searching, accordionRef, handleAccordionExpand };
};
