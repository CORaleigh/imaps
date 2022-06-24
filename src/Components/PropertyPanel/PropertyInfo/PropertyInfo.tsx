/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useRef, useState } from 'react';
import Feature from '@arcgis/core/widgets/Feature';
import { createTemplate, getPhotos } from '../utils/propertytemplate';
import './PropertyInfo.scss';
export const PropertyInfo = (props: any) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const featureWidget = useRef<Feature>();
  const [view, setView] = useState<__esri.MapView>();
  useEffect(() => {
    if (!loaded && props.view) {
      setView(props.view);
      featureWidget.current = new Feature({
        container: listRef.current as HTMLDivElement,
        view: view,
      });
      setLoaded(true);
    }
  }); // only after initial render
  useEffect(() => {
    if (featureWidget.current) {
      if (props.feature) {
        getPhotos(props.feature).then((mediaInfos: __esri.MediaInfo[]) => {
          props.feature.popupTemplate = createTemplate(
            view as __esri.MapView,
            props.feature.layer as __esri.FeatureLayer,
          );
          const media = (props.feature.popupTemplate.content as __esri.Content[]).find((content: __esri.Content) => {
            return content?.type === 'media';
          }) as __esri.MediaContent;
          media.mediaInfos = mediaInfos;
          if (featureWidget.current) {
            featureWidget.current.graphic = props.feature;
          }
          requestAnimationFrame(() => {
            document.querySelector('.esri-feature')?.parentElement?.scrollTo({ top: 0, behavior: 'smooth' });
          });
        });
      } else {
        featureWidget.current.graphic = props.feature;
      }
    }
  }, [props.feature]);
  return <div id="featureWidget" ref={listRef}></div>;
};
export default PropertyInfo;
