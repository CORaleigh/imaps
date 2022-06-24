export const geometryChanged = (
  view: __esri.MapView,
  layer: __esri.FeatureLayer,
  geometry: __esri.Geometry,
): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (geometry != undefined) {
      layer
        ?.queryFeatures({
          geometry: geometry,
          outFields: ['OBJECTID', 'REID', 'PIN_NUM'],
          returnGeometry: true,
          outSpatialReference: view?.spatialReference,
        })
        .then((featureSet) => {
          //view?.goTo(featureSet.features, { duration: 1000, easing: 'ease' });
          const oids = featureSet.features.map((feature) => {
            return feature.getObjectId();
          });
          layer.queryRelatedFeatures({ relationshipId: 0, objectIds: oids, outFields: ['*'] }).then((result) => {
            const reloids: number[] = [];
            const features: __esri.Graphic[] = [];
            oids.forEach((oid) => {
              result[oid]?.features.forEach((feature: __esri.Graphic) => {
                reloids.push(feature.getAttribute('OBJECTID'));
                features.push(feature);
              });
            });
            if (reloids.length) {
              resolve({
                where: `OBJECTID in (${reloids.toString()})`,
                features: features,
                properties: featureSet.features,
              });
            } else {
              reject();
            }
          });
        });
    }
  });
};

export const setSearchParams = (features: __esri.Graphic[]): void => {
  const pin: string[] = features.map((feature: __esri.Graphic) => {
    return feature.getAttribute('PIN_NUM');
  });
  const url = new URL(window.location.toString());
  //const searchParams = new URLSearchParams();
  if (pin) {
    url.searchParams.set('pin', pin.toString());
    const state = { pin: pin.toString() };
    if (history.state) {
      if (history.state.pin != state.pin) {
        history.pushState({ pin: pin.toString() }, '', url.href);
      }
    } else {
      history.pushState({ pin: pin.toString() }, '', url.href);
    }

    //url.searchParams
  } else {
    history.replaceState(history.state, '', url.href);
  }
};
