import Graphic from "@arcgis/core/Graphic";
import MapView from "@arcgis/core/views/MapView";
import Feature from "@arcgis/core/widgets/Feature";
import FeatureTable from "@arcgis/core/widgets/FeatureTable";
import { createTemplate, getPhotos } from "../popuptemplate";

export function initializeFeature(ref: HTMLDivElement, view: MapView) {
  const feature = new Feature({
    container: ref,
    view: view,
  });
  return feature;
}

export function updateFeature(
  feature: Feature,
  graphic: Graphic,
  condos: Graphic[],
  featureTable: FeatureTable | undefined
) {
  getPhotos(graphic).then((mediaInfos: __esri.MediaInfo[]) => {
    graphic.popupTemplate = createTemplate(
      feature.view as __esri.MapView,
      graphic.layer as __esri.FeatureLayer,
      graphic,
      condos,
      featureTable
    );

    const media = (graphic.popupTemplate.content as __esri.Content[]).find(
      (content: __esri.Content) => {
        return content?.type === "media";
      }
    ) as __esri.MediaContent;
    media.mediaInfos = mediaInfos;
    if (feature) {
      feature.graphic = graphic;
    }
    requestAnimationFrame(() => {
      document
        .querySelector(".esri-feature")
        ?.parentElement?.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}
