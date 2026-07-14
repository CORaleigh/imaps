import * as arcade from "@arcgis/core/arcade";

import {
  createDurhamButton,
  createLinkButtons,
  createEnvironmentalButtons,
  createDeedButtons,
} from "./popupTemplate";
import type Graphic from "@arcgis/core/Graphic";
import type MediaInfo from "@arcgis/core/popup/content/mixins/MediaInfo";

export const getPopupContent = (
  feature: Graphic,
  photos: MediaInfo[],
  mapElement: HTMLArcgisMapElement
) => {
  return [
    createDurhamButton(),
    createLinkButtons(),
    createEnvironmentalButtons(mapElement),
    {
      type: "text",
      text: "<h2>General</h2>",
    },
    {
      type: "fields",
      fieldInfos: [
        {
          fieldName: "expression/pin",
          label: "PIN",
        },
        {
          fieldName: "REID",
          label: "REID",
        },
        {
          fieldName: "expression/city",
          label: "City",
        },
        {
          fieldName: "expression/jurisdiction",
          label: "Jurisdiction",
        },
        {
          fieldName: "expression/township",
          label: "Township",
        },
        {
          fieldName: "MAP_NAME",
          label: "Map Name",
        },
        {
          fieldName: "LAND_CLASS_DECODE",
          label: "Land Class",
        },
      ],
    },
    {
      type: "text",
      text: "<h2>Owner</h1>",
    },
    {
      type: "text",
      text: "{OWNER}<br/>{expression/mailing-address}",
    },
    {
      type: "text",
      text: "<h2>Valuation</h1>",
    },
    {
      type: "fields",
      fieldInfos: [
        {
          fieldName: "expression/build_val",
        },
        {
          fieldName: "expression/land_val",
        },
        {
          fieldName: "expression/total_val",
        },
        {
          fieldName: "BILLING_CLASS_DECODE",
          label: "Billing Class",
        },
      ],
    },
    {
      type: "text",
      text: "<h2>Last Sale</h1>",
    },
    {
      type: "fields",
      fieldInfos: [
        {
          fieldName: "SALE_DATE",
          format: {
            dateFormat: "short-date",
          },
          label: "Date Sold",
        },
        {
          fieldName: "expression/sale_price",
        },
      ],
    },
    {
      type: "text",
      text: "<h2>Deeds</h1>",
    },
    {
      type: "fields",
      fieldInfos: [
        {
          fieldName: "DEED_BOOK",
          label: "Book",
        },
        {
          fieldName: "DEED_PAGE",
          label: "Page",
        },
        {
          fieldName: "DEED_DATE",
          format: {
            dateFormat: "short-date",
          },
          label: "Deed Date",
        },
        {
          fieldName: "DEED_ACRES",
          format: {
            places: 2,
          },
          label: "Deed Acres",
        },
        {
          fieldName: "PROPDESC",
          label: "Property Description",
        },
      ],
    },
    createDeedButtons(),
    feature.getAttribute("HEATEDAREA")
      ? {
          type: "text",
          text: "<h2>Building</h1>",
        }
      : {
          type: "text",
          text: "",
        },
    feature.getAttribute("HEATEDAREA")
      ? {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "HEATEDAREA",
              format: {
                digitSeparator: true,
              },
              label: "Heated Area",
            },
            {
              fieldName: "YEAR_BUILT",
              format: {
                digitSeparator: false,
              },
              label: "Year Built",
            },
            {
              fieldName: "DESIGN_STYLE_DECODE",
              label: "Design/Style",
            },
            {
              fieldName: "TYPE_USE_DECODE",
              label: "Use Type",
            },
            {
              fieldName: "TOTSTRUCTS",
              label: "Total Structures",
            },
            {
              fieldName: "TOTUNITS",
              label: "Total Units",
            },
          ],
        }
      : {
          type: "text",
          text: "",
        },
    {
      type: "media",
      mediaInfos: photos,
    },
    // createAddressTableContent(mapElement, feature)
  ];
};

export const executeArcade = async (
  expression: string,
  feature: Graphic
) => {
  const executor = await arcade.createArcadeExecutor(expression, {
    variables: [
      {
        name: "$feature",
        type: "feature",
      },
    ],
  });
  return await executor.executeAsync({ $feature: feature });
};
