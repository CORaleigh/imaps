import { arcadeExpressionInfos } from "./arcadeExpressions";
import FieldInfo from "@arcgis/core/popup/FieldInfo";
import PopupTemplate from "@arcgis/core/PopupTemplate";
import ImageMediaInfo from "@arcgis/core/popup/content/ImageMediaInfo";
import * as arcade from "@arcgis/core/arcade";
import * as centroidOperator from "@arcgis/core/geometry/operators/centroidOperator.js";

import CustomContent from "@arcgis/core/popup/content/CustomContent";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { getPopupContent } from "./popupContent";
import { getTableByTitle } from "../../../../utils/layerHelper";
import type Graphic from "@arcgis/core/Graphic";
import type MediaInfo from "@arcgis/core/popup/content/mixins/MediaInfo";
import type Field from "@arcgis/core/layers/support/Field";
import type { PopupTemplateContentCreator, PopupTemplateCreatorEvent } from "@arcgis/core/popup/types";
import type Layer from "@arcgis/core/layers/Layer";
import type FeatureSet from "@arcgis/core/rest/support/FeatureSet";
import type Polygon from "@arcgis/core/geometry/Polygon";

export const createTemplate = (
  mapElement: HTMLArcgisMapElement | null,
  feature: Graphic,
  photos: MediaInfo[]
) => {
  if (!mapElement) return;
  const condoTable = getTableByTitle(
    mapElement,
    "Condos"
  ) as FeatureLayer;
  if (condoTable) {
    const popupTemplate = new PopupTemplate({
      expressionInfos: arcadeExpressionInfos,
      fieldInfos: getFieldInfos(condoTable).map((field) => {
        return {
          fieldName: field.fieldName,
          label: field.label,
          visible: [
            "SITE_ADDRESS",
            "OWNER",
            "PIN_NUM",
            "PIN_EXT",
            "REID",
          ].includes(field.fieldName as string),
        };
      }),

      content: getPopupContent(
        feature,
        photos,
        mapElement
      ),
    });
    return popupTemplate;
  }
};

const getFieldInfos = (condoTable: FeatureLayer): FieldInfo[] => {
  let fieldConfigs: FieldInfo[] = [];
  condoTable.fields.forEach((field: Field) => {
    fieldConfigs.push(
      new FieldInfo({
        fieldName: field.name,
        label: field.alias,
        visible: [
          "SITE_ADDRESS",
          "OWNER",
          "PIN_NUM",
          "PIN_EXT",
          "REID",
        ].includes(field.name),
      })
    );
  });
  const ext = fieldConfigs.find((fc) => {
    return fc.fieldName === "PIN_EXT";
  }) as FieldInfo;
  const pin = fieldConfigs.find((fc) => {
    return fc.fieldName === "PIN_NUM";
  }) as FieldInfo;
  const reid = fieldConfigs.find((fc) => {
    return fc.fieldName === "REID";
  }) as FieldInfo;
  const owner = fieldConfigs.find((fc) => {
    return fc.fieldName === "OWNER";
  }) as FieldInfo;
  const address = fieldConfigs.find((fc) => {
    return fc.fieldName === "SITE_ADDRESS";
  }) as FieldInfo;
  fieldConfigs = fieldConfigs.filter((fc) => {
    return !["SITE_ADDRESS", "OWNER", "PIN_NUM", "PIN_EXT", "REID"].includes(
      fc.fieldName as string
    );
  });
  fieldConfigs.unshift(ext);
  fieldConfigs.unshift(pin);
  fieldConfigs.unshift(reid);
  fieldConfigs.unshift(owner);
  fieldConfigs.unshift(address);
  return fieldConfigs;
};

export const getPhotos = async (
  feature: Graphic,
  mapElement: HTMLArcgisMapElement | null
): Promise<MediaInfo[]> => {
  if (!mapElement) return [];
  
  const photosTable = getTableByTitle(
    mapElement,
    "Photos"
  ) as FeatureLayer;
  // const relationship = (
  //   condosTable as FeatureLayer
  // )?.relationships?.find((r) => {
  //   return r.name === "CONDO_PHOTOS";
  // });

  const mediaInfos: ImageMediaInfo[] = [];
  const result = await photosTable?.queryFeatures({
    where: "STATUS = 'A' AND PARCEL = '" + feature.getAttribute("REID") + "'",
    outFields: ["*"]

  });

  //for (const key in result) {
    //feature.setAttribute("OBJECTID", key);
    result?.features.reverse().forEach((feature: Graphic) => {
      mediaInfos.push(
        new ImageMediaInfo({
          title: "",
          caption: "",
          value: {
            sourceURL: `https://services.wake.gov/realestate/photos/mvideo/${feature.getAttribute(
              "IMAGEDIR"
            )}/${feature.getAttribute("IMAGENAME")}`,
          },
        })
      );
    });
  //}
  if (feature.getAttribute("CITY_DECODE")?.includes("DURHAM COUNTY")) {
    const photo = await getDurhamPhoto(feature);

    mediaInfos.push(
      new ImageMediaInfo({
        title: "",
        caption: "",
        value: {
          sourceURL: photo as string,
        },
      })
    );
  }
  if (feature.getAttribute("CITY_DECODE")?.includes("CHATHAM COUNTY")) {
    const photo = await getChathamPhoto(feature);
  
    mediaInfos.push(
      new ImageMediaInfo({
        title: "",
        caption: "",
        value: {
          sourceURL: photo as string,
        },
      })
    );
  }  
  return mediaInfos;
};

export const getDurhamPhoto = async (feature: Graphic) => {
  const photo = await executeArcade(
    `if ($feature.CITY_DECODE == "RALEIGH - DURHAM COUNTY") { 
            return Concatenate("https://image-cdn.spatialest.com/image/durham-images/lrg/",$feature.REID,".JPG");}`,
    feature
  );
  const request = new Request(photo as string);
  try {
    const response = await fetch(request);
    if (response.ok) {
      return photo;
    }
  } catch {
    return;
  }
};

const checkPhoto = (url: string): Promise<string | null> => {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(url);
        img.onerror = () => resolve(null);
        img.src = url;
    });
}

export const getChathamPhoto = async (feature: Graphic) => {
  const photo = await executeArcade(
    `if ($feature.CITY_DECODE == "CARY - CHATHAM COUNTY") { 
        return Concatenate("https://gisservices.chathamcountync.gov/gisfiles/Tax%20Photos/",Replace($feature.REID, "C",""),"_unknown_1.jpg")}`,
    feature
  );
  const validPhoto = await checkPhoto(photo as string);
  if (validPhoto) {
      return photo;
  } 

};

const executeArcade = async (expression: string, feature: Graphic) => {
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

const createButton = (icon: string, text: string) => {
  const btn = document.createElement("calcite-button");
  btn.setAttribute("scale", "m");
  btn.setAttribute("width", "full");
  btn.setAttribute("style", "margin: 0 .5em;");
  btn.setAttribute("appearance", "outline");
  btn.setAttribute("icon-start", icon);
  btn.setAttribute("rel", "noreferrer");
  btn.textContent = text;
  return btn;
};

export const createEnvironmentalButtons = (
  mapElement: HTMLArcgisMapElement
) => {
  return new CustomContent({
    outFields: ["PIN_NUM"],
    creator: async (
      event?: PopupTemplateCreatorEvent
    ): Promise<HTMLElement> => {
      return wellCreator(event, mapElement);
    },
  });
};

const wellCreator = async (
  event: PopupTemplateCreatorEvent | undefined,
  mapElement: HTMLArcgisMapElement
): Promise<HTMLElement> => {
  let layer: Layer | undefined = mapElement?.map?.allLayers
    .toArray()
    .find((layer: Layer) => {
      return layer?.title?.includes("Wells");
    });

  if (!layer) {
    layer = new FeatureLayer({
      portalItem: {
        id: "ef42e9e1d1eb4689bf90b592c2f6c419",
      },
    });
  }

  const featureSet: FeatureSet = await (
    layer as FeatureLayer
  ).queryFeatures({
    where: `PIN_NUM = '${event?.graphic.attributes["PIN_NUM"]}'`,
    returnGeometry: false,
  });

  const div = document.createElement("div");
  div.setAttribute(
    "style",
    "display: flex; flex-direction: row; justify-content: space-around;"
  );

  if (featureSet.features.length) {
    const pin = featureSet.features[0].getAttribute("PIN_NUM");
    const btn = createButton("link", "Wells");
    btn.onclick = () => {
      window.open(
        `https://maps.wakegov.com/water-analysis/index.html#/?pin=${pin}`,
        "wells"
      );
    };
    div.append(btn);
  }

  layer = new FeatureLayer({
    portalItem: {
      id: "bb3eb1f6cc774bdda560554381a4c06f",
    },
  });

  const septicFeatureSet: FeatureSet = await (
    layer as FeatureLayer
  ).queryFeatures({
    where: `PIN_NUM = '${event?.graphic.attributes["PIN_NUM"]}'`,
    returnGeometry: false,
  });

  if (septicFeatureSet.features.length) {
    const pin = septicFeatureSet.features[0].getAttribute("PIN_NUM");
    const btn = createButton("link", "Septic");
    btn.onclick = () => {
      window.open(
        `https://maps.wakegov.com/septic/index.html#/?pin=${pin}`,
        "septic"
      );
    };
    div.append(btn);
  }

  return div; // Ensure to return the created div
};

export const createLinkButtons = () => {
  return new CustomContent({
    outFields: ["*"],
    creator: async (
      event?: PopupTemplateCreatorEvent
    ): Promise<HTMLElement> => {
      try {
        const div = document.createElement("div");
        div.setAttribute(
          "style",
          "display: flex; flex-direction: row; justify-content: space-around;"
        );

        const graphic = event?.graphic;
        if (!graphic) {
          return div; // Return empty div if graphic is undefined
        }

        const btn = createButton("link", "Google Maps");
        btn.onclick = () => {
          const latitude = centroidOperator.execute(graphic.geometry as Polygon)
            ?.latitude;
          const longitude = centroidOperator.execute(graphic.geometry as Polygon)
            ?.longitude;
          if (latitude && longitude) {
            const url = `https://www.google.com/maps/@${
              latitude - 0.0006721930485
            },${longitude - 0.0000196467158},68a,35y,49.52t/data=!3m1!1e3`;
            window.open(url, "googlewindow");
          }
        };
        div.append(btn);

        const tax = createButton("home", "Tax Page");

        const taxUrl = await executeArcade(
          `if ($feature.CITY_DECODE == "RALEIGH - DURHAM COUNTY") { 
                    return Concatenate("https://taxcama.dconc.gov/camapwa/PropertySummary.aspx?REID=",$feature.REID);
          } else if ($feature.CITY_DECODE == "CARY - CHATHAM COUNTY") {
            return Concatenate("https://chathamnc.devnetwedge.com/parcel/view/",Replace($feature.REID, 'C', ''));
          } else {
            return Concatenate("https://services.wake.gov/realestate/Account.asp?id=", $feature.REID);
          }`,
          graphic // Use the defined graphic
        );
        tax.onclick = () => {
          window.open(taxUrl as string, "taxwindow");
        };
        tax.textContent = "Tax Page";
        div.append(tax);

        return div; // Ensure to return the created div
      } catch (error) {
        console.error(error);
        const fallback = document.createElement("div");
        fallback.textContent = "Failed to load buttons.";
        return fallback;
      }
    },
  });
};

export const createDurhamButton = () => {
  return new CustomContent({
    outFields: ["*"],
    creator: async (
      event?: PopupTemplateCreatorEvent
    ): Promise<HTMLElement> => {
      const div = document.createElement("div");
      div.setAttribute(
        "style",
        "display: flex; flex-direction: row; justify-content: space-around;"
      );

      if (!event || !event.graphic) {
        // Return an empty div as a valid HTMLElement
        return div; // Returning an empty content structure
      }

      const durham = await executeArcade(
        `if (Find("DURHAM COUNTY", $feature.CITY_DECODE) > -1) { 
              return Concatenate("https://maps.durhamnc.gov/?pid=", $feature.REID);}`,
        event.graphic
      );
      const chatham = await executeArcade(
        `if (Find("CHATHAM COUNTY", $feature.CITY_DECODE) > -1) { 
              return Concatenate("https://chathamnc.devnetwedge.com/parcel/view/",Replace($feature.REID, 'C', ''));
        }`,
                            
        event.graphic
      );
      if (durham) {
        const durhamBtn = createButton("home", "Durham County");
        durhamBtn.onclick = () => {
          window.open(durham as string, "durham");
        };
        div.append(durhamBtn);
      }
      if (chatham) {
        const chathamBtn = createButton("home", "Chatham County");
        chathamBtn.onclick = () => {
          window.open(chatham as string, "chatham");
        };
        div.append(chathamBtn);
      }
      return div; // Return the div as HTMLElement
    },
  });
};

export const createDeedButtons = () => {
  return new CustomContent({
    outFields: ["OBJECTID", "REID"],
    creator: deedCreator,
  });
};

// Explicitly typing deedCreator as PopupTemplateContentCreator
const deedCreator: PopupTemplateContentCreator = async (e) => {
  const div = document.createElement("div");
  div.setAttribute(
    "style",
    "display: flex; flex-direction: row; justify-content: space-around;"
  );

  let deed: string | null = null;
  let bom: string | null = null;

  const graphic = e?.graphic as Graphic;
  const layer = graphic.layer as FeatureLayer;
  const cityDecode = graphic.getAttribute("CITY_DECODE");
  const reid = graphic.getAttribute("REID");

  if (!cityDecode?.includes("DURHAM COUNTY")) {
    const objectids = await layer.queryObjectIds({
      where: `REID = '${reid}'`,
    });

    if (objectids.length) {
      const relationshipId = layer.relationships?.find(
        (r) => r.name === "CONDO_BOOKS"
      )?.id;
      if (relationshipId) {
        const relatedFeatures = await layer.queryRelatedFeatures({
          relationshipId,
          objectIds: [objectids[0]],
          outFields: ["BOM_DOC_NUM", "DEED_DOC_NUM"],
        });
        if (relatedFeatures[objectids[0]]) {
          const relatedFeature = relatedFeatures[objectids[0]]?.features[0];
          deed = relatedFeature?.getAttribute("DEED_DOC_NUM");
          bom = relatedFeature?.getAttribute("BOM_DOC_NUM");
        }
      }
    }

    if (!cityDecode?.includes("DURHAM COUNTY") || !cityDecode) {
      if (deed) {
        const deedBtn = createButton("file-text", "Deeds");
        deedBtn.onclick = () => {
          window.open(
            `https://rodrecords.wake.gov/web/document/DOCC${deed}`, //`https://rodcrpi.wakegov.com/booksweb/pdfview.aspx?docid=${deed}&RecordDate=`,
            "deedwindow"
          );
        };
        div.append(deedBtn);
      }
      if (bom) {
        const bombtn = createButton("map", "Book of Maps");
        bombtn.onclick = () => {
          window.open(
            `https://rodrecords.wake.gov/web/document/DOCC${bom}`, //`https://rodcrpi.wakegov.com/booksweb/pdfview.aspx?docid=${bom}&RecordDate=`,
            "bomwindow"
          );
        };
        div.append(bombtn);
      }
    }

    return div; // Return the div directly
  } else {
    const deedBtn = createButton("file-text", "Deeds");
    deedBtn.onclick = () => {
      window.open(
        `https://rodweb.dconc.gov/web/web/integration/search?field_BookPageID_DOT_Volume=${graphic.getAttribute(
          "DEED_BOOK"
        )}&field_BookPageID_DOT_Page=${graphic.getAttribute("DEED_PAGE")}`,
        "deedwindow"
      );
    };
    div.append(deedBtn);
    return div; // Return the div directly
  }
};
