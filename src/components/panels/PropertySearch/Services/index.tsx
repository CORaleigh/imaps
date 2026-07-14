import React from "react";
import "@esri/calcite-components/components/calcite-accordion";
import "@esri/calcite-components/components/calcite-accordion-item";
import "@arcgis/map-components/components/arcgis-feature";
import { useServices } from "./useServices";
import type Graphic from "@arcgis/core/Graphic";

interface ServicesProps {
  mapElement: HTMLArcgisMapElement;
  selectedCondo: Graphic;
}

const Services: React.FC<ServicesProps> = ({ mapElement, selectedCondo }) => {
  const { services, searching, accordionRef, handleAccordionExpand } =
    useServices(mapElement, selectedCondo);
  return (
    <calcite-accordion ref={accordionRef}>
      {services.map((service) => (
        <calcite-accordion-item
          key={service.title}
          heading={service.title}
          oncalciteAccordionItemExpand={handleAccordionExpand}
        >
          {searching[service.title] && <calcite-scrim loading />}{" "}
          {service.graphics.length === 0 && <div>Service information not available</div>}
          {service.graphics.map((graphic, i) => (
            <arcgis-feature
              graphic={graphic}
              key={`${service.title}-graphic-${i}`}
            />
          ))}
        </calcite-accordion-item>
      ))}
    </calcite-accordion>
  );
};

export default Services;
