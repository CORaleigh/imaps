import React from "react";
import "@esri/calcite-components/components/calcite-button";
import { getTableByTitle } from "../../../../utils/layerHelper";
import type FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import type Graphic from "@arcgis/core/Graphic";

interface NextPropertyButtonProps {
  mapElement: React.RefObject<HTMLArcgisMapElement>;
  tableElement: React.RefObject<HTMLArcgisFeatureTableElement>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  text: "Next" | "Previous";
  onNextProperty: (feature: Graphic) => void;
}

function NextPropertyButton(props: NextPropertyButtonProps) {
  return (
    <calcite-button
      appearance="transparent"
      kind="neutral"
      scale="s"
      iconEnd={props.icon}
      onClick={async () => {
        const ids = props.tableElement.current.highlightIds;
        if (ids.length) {
          const orderByFields = props.tableElement.current.activeSortOrders.map(
            (order) => {
              return order.fieldName + " " + order.direction;
            }
          );
          const fs = await (
            props.tableElement.current.layer as FeatureLayer
          ).queryFeatures({
            where: "1=1",
            orderByFields: orderByFields,
            outFields: ["OBJECTID","REID"],
          });
          const oids = fs.features.map((feature) => {
            return feature.getAttribute("OBJECTID");
          });
          const reids = fs.features.map((feature) => {
            return feature.getAttribute("REID");
          });          
          let index = oids.findIndex((i) => {
            return i === ids.getItemAt(0);
          });

          if (props.text === "Next") {
            index += 1;
            if (index === oids.length) {
              index = 0;
            }
          }
          if (props.text === "Previous") {
            if (index === 0) {
              index = oids.length - 1;
            } else {
              index -= 1;
            }
          }

          props.tableElement.current.highlightIds.removeAll();
          props.tableElement.current.highlightIds.add(oids[index]);
          const condoTable = getTableByTitle(
            props.mapElement.current,
            "Condos"
          );
          
          const results = await (
            condoTable as FeatureLayer
          ).queryFeatures({
            where: `REID = '${reids[index]}'`,
            outFields: ["*"],
            returnGeometry: true,
          });
          if (results.features.length) {
            const feature = results.features[0];
            props.onNextProperty(feature);
          }
        }
      }}
    ></calcite-button>
  );
}

export default React.memo(NextPropertyButton);
