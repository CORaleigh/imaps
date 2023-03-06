import { CalciteButton } from "@esri/calcite-components-react";
import React from "react";
interface Props {
  view: __esri.MapView;
  icon: string;
  text: string;
  featureTable: __esri.FeatureTable;
}

function NextPropertyButton(props: Props) {
  return (
    <CalciteButton
      appearance="transparent"
      kind="neutral"
      scale="s"
      iconEnd={props.icon}
      onClick={() => {
        const ids = (props.featureTable as __esri.FeatureTable).highlightIds;
        if (ids.length) {
          const orderByFields = (
            props.featureTable as __esri.FeatureTable
          ).activeSortOrders.map((order) => {
            return order.fieldName + " " + order.direction;
          });
          (
            (props.featureTable as __esri.FeatureTable)
              .layer as __esri.FeatureLayer
          )
            .queryFeatures({
              where: "1=1",
              orderByFields: orderByFields,
              outFields: ["OBJECTID"],
            })
            .then((fs) => {
              const oids = fs.features.map((feature) => {
                return feature.getAttribute("OBJECTID");
              });
              console.log(ids.getItemAt(0));
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

              (
                props.featureTable as __esri.FeatureTable
              ).highlightIds.removeAll();
              (props.featureTable as __esri.FeatureTable).highlightIds.add(
                oids[index]
              );
            });
        }
      }}
    ></CalciteButton>
  );
}

export default React.memo(NextPropertyButton);
