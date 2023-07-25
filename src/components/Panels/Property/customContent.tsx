import CustomContent from '@arcgis/core/popup/content/CustomContent';
import * as arcade from '@arcgis/core/arcade';
import Graphic from '@arcgis/core/Graphic';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import { lazy, Suspense } from 'react';
import { services } from '../../../config/config';
import { createRoot } from 'react-dom/client';
import FeatureTable from '@arcgis/core/widgets/FeatureTable';
import { arcadeExpressionInfos } from './utils/arcadeExpressions';

const Services = lazy(() => import('./Services/Services'));
const AddressTable = lazy(() => import('./AddressTable/AddressTable'));
const NextPropertyButton = lazy(() => import('./NextPropertyButton/NextPropertyButton'));

export const executeArcade = async (expression: string, feature: Graphic) => {
  const executor = await arcade.createArcadeExecutor(expression, {
    variables: [
      {
        name: '$feature',
        type: 'feature',
      },
    ],
  });
  return await executor.executeAsync({ $feature: feature });
};
const createButton = (icon: string, text: string) => {
  const btn = document.createElement('calcite-button');
  btn.setAttribute('scale', 'm');
  btn.setAttribute('width', 'full');
  btn.setAttribute('appearance', 'outline');
  btn.setAttribute('icon-start', icon);
  btn.setAttribute('rel', 'noreferrer');
  btn.textContent = text;
  return btn;
};
export const createDurhamButton = () => {
  return new CustomContent({
    outFields: ['*'],
    creator: async (e: any) => {
      const div = document.createElement('div');
      div.setAttribute('style', 'display: flex;flex-direction: row;justify-content: space-around;');

      const durham = await executeArcade(
        `var portal = Portal("https://ral.maps.arcgis.com"); 
      if ($feature.CITY_DECODE == "RALEIGH - DURHAM COUNTY") { 
        var fs = FeatureSetByPortalItem(portal, "ed698c7ae43c4394b517990b1922aaba"); 
        var f= First(Filter(fs,"SITE_ADDRE = '" + $feature.SITE_ADDRESS + "'"));
        return Concatenate("https://maps.durhamnc.gov/?pid=",f.PARCEL_ID);}`,
        e.graphic,
      );
      if (durham) {
        const durhamBtn = createButton('home', 'Durham County');
        durhamBtn.onclick = () => {
          window.open(durham, 'durham');
        };
        durhamBtn.textContent = 'Durham County';
        div.append(durhamBtn);
      }

      return div;
    },
  });
};

export const createDeedButtons = () => {
  return new CustomContent({
    outFields: ['OBJECTID', 'REID'],
    creator: deedCreator,
  });
};
const deedCreator = async (e: any) => {
  console.log(e.graphic.attributes);
  const div = document.createElement('div');
  div.setAttribute('style', 'display: flex;flex-direction: row;justify-content: space-around;');
  let deed: string | null = null;
  let bom: string | null = null;

  if (!e.graphic.getAttribute('CITY_DECODE')?.includes('DURHAM COUNTY')) {
    const objectids = await (e.graphic.layer as FeatureLayer).queryObjectIds({where: `REID = '${e.graphic.getAttribute('REID')}'`});
    if (objectids.length) {
      const result = await (e.graphic.layer as FeatureLayer).queryRelatedFeatures({
        relationshipId: (e.graphic.layer as FeatureLayer).relationships.find((r) => {
          return r.name === 'CONDO_BOOKS';
        })?.id,
        objectIds: [objectids[0]],
        outFields: ['BOM_DOC_NUM', 'DEED_DOC_NUM'],
      });
  
      deed = result[objectids[0]].features[0].getAttribute('DEED_DOC_NUM');
      bom = result[objectids[0]].features[0].getAttribute('BOM_DOC_NUM');
    }


    if (!e.graphic.getAttribute('CITY_DECODE')?.includes('DURHAM COUNTY') || !e.graphic.getAttribute('CITY_DECODE')) {
      if (deed) {
        const deedBtn = createButton('file-text', 'Deeds');
        deedBtn.onclick = () => {
          window.open('https://rodcrpi.wakegov.com/booksweb/pdfview.aspx?docid=' + deed + '&RecordDate=', 'deedwindow');
        };
        div.append(deedBtn);
      }
      if (bom) {
        const bombtn = createButton('map', 'Book of Maps');
        bombtn.onclick = () => {
          window.open('https://rodcrpi.wakegov.com/booksweb/pdfview.aspx?docid=' + bom + '&RecordDate=', 'bomwindow');
        };
        div.append(bombtn);
      }
    }
    return div;
  } else {
    const deedBtn = createButton('file-text', 'Deeds');
    deedBtn.onclick = () => {
      window.open(
        `https://rodweb.dconc.gov/web/web/integration/search?field_BookPageID_DOT_Volume=${e.graphic.getAttribute(
          'DEED_BOOK',
        )}&field_BookPageID_DOT_Page=${e.graphic.getAttribute('DEED_PAGE')}`,
        'deedwindow',
      );
    };
    div.append(deedBtn);
    return div;
  }
};

export const createEnvironmentalButtons = (view: __esri.MapView) => {
  return new CustomContent({
    outFields: ['PIN_NUM'],
    creator: (e) => {
      return wellCreator(e, view as __esri.MapView);
    },
  });
};
const wellCreator = async (e: any, view: __esri.MapView) => {
  let layer = view.map.allLayers.find((layer: __esri.Layer) => {
    return layer?.title?.includes('Wells');
  });
  if (!layer) {
    layer = new FeatureLayer({
      portalItem: {
        id: 'ef42e9e1d1eb4689bf90b592c2f6c419',
      },
    });
  }
  let featureSet: __esri.FeatureSet = await (layer as FeatureLayer).queryFeatures({
    where: `PIN_NUM = '${e.graphic.attributes['PIN_NUM']}'`,
    returnGeometry: false,
  });
  const div = document.createElement('div');
  div.setAttribute('style', 'display: flex;flex-direction: row;justify-content: space-around;');

  if (featureSet.features.length) {
    const pin = featureSet.features[0].getAttribute('PIN_NUM');
    const btn = createButton('link', 'Wells');
    btn.onclick = () => {
      window.open('https://maps.wakegov.com/water-analysis/index.html#/?pin=' + pin, 'wells');
    };
    div.append(btn);
  }

  layer = new FeatureLayer({
    portalItem: {
      id: 'bb3eb1f6cc774bdda560554381a4c06f',
    },
  });

  featureSet = await (layer as FeatureLayer).queryFeatures({
    where: `PIN_NUM = '${e.graphic.attributes['PIN_NUM']}'`,
    returnGeometry: false,
  });
  if (featureSet.features.length) {
    const pin = featureSet.features[0].getAttribute('PIN_NUM');
    const btn = createButton('link', 'Septic');
    btn.onclick = () => {
      window.open('https://maps.wakegov.com/septic/index.html#/?pin=' + pin, 'septic');
    };
    div.append(btn);
  }

  return div;
};

export const createLinkButtons = () => {
  return new CustomContent({
    outFields: ['*'],
    creator: async (e: any) => {
      const div = document.createElement('div');
      div.setAttribute('style', 'display: flex;flex-direction: row;justify-content: space-around;');
      const btn = createButton('link', 'Google Maps');
      btn.onclick = () => {
        const latitude = ((e.graphic as __esri.Graphic).geometry as __esri.Polygon).centroid.latitude;
        const longitude = ((e.graphic as __esri.Graphic).geometry as __esri.Polygon).centroid.longitude;
        const url = `https://www.google.com/maps/@${latitude - 0.0006721930485},${
          longitude - 0.0000196467158
        },68a,35y,49.52t/data=!3m1!1e3`;
        window.open(url, 'googlewindow');
      };
      div.append(btn);
      const tax = createButton('home', 'Tax Page');

      const taxUrl = await executeArcade(
        `var portal = Portal("https://ral.maps.arcgis.com"); 
      if ($feature.CITY_DECODE == "RALEIGH - DURHAM COUNTY") { 
        var fs = FeatureSetByPortalItem(portal, "ed698c7ae43c4394b517990b1922aaba"); 
        var f= First(Filter(fs,"SITE_ADDRE = '" + $feature.SITE_ADDRESS + "'"));
        return Concatenate("https://property.spatialest.com/nc/durham/#/property/",f.PARCEL_ID);
      } else {
        return Concatenate("https://services.wake.gov/realestate/Account.asp?id=", $feature.REID);
      }`,
        e.graphic,
      );
      tax.onclick = () => {
        window.open(taxUrl, 'taxwindow');
      };
      tax.textContent = 'Tax Page';
      div.append(tax);

      return div;
    },
  });
};

export const getDurhamPhoto = async (feature: Graphic) => {
  const photo = await executeArcade(
    `var portal = Portal("https://ral.maps.arcgis.com"); 
    if ($feature.CITY_DECODE == "RALEIGH - DURHAM COUNTY") { 
      var fs = FeatureSetByPortalItem(portal, "ed698c7ae43c4394b517990b1922aaba"); 
      var f= First(Filter(fs,"SITE_ADDRE = '" + $feature.SITE_ADDRESS + "'"));
      return Concatenate("https://image-cdn.spatialest.com/image/durham-images/lrg/",f.PARCEL_ID,".JPG");}`,
    feature,
  );
  const request = new Request(photo);
  try {
    const response = await fetch(request);
    if (response.ok) {
      return photo;
    }
  } catch {
    console.log('no photo available');
  }
};

export const getServiceAccordion = (view: __esri.MapView) => {
  return new CustomContent({
    outFields: ['*'],
    creator: (e: any) => {
      const accordion = document.createElement('service-accordion');

      if (!accordion?.hasChildNodes()) {
        const root = createRoot(accordion as HTMLDivElement);
        root.render(
          <Suspense fallback={''}>
            <Services view={view} graphic={e.graphic} />
          </Suspense>,
        );
      }
      accordion.setAttribute('selection-mode', 'single');
      accordion.setAttribute('icon-type', 'chevron');
      services.forEach((service) => {
        const item = document.createElement('calcite-accordion-item');
        item.setAttribute('item-title', service.group.title);
        accordion.append(item);
      });
      return accordion;
    },
  });
};
export const createFeatureTitle = (
  view: __esri.MapView,
  feature: __esri.Graphic,
  condos: __esri.Graphic[],
  featureTable: FeatureTable | undefined,
) => {
  return new CustomContent({
    outFields: ['*'],
    creator: async (e: any) => {
      const div = document.createElement('div');
      const arcade = arcadeExpressionInfos.find((info) => {
        return info.title === 'site-address';
      })?.expression;
      if (arcade) {
        const title = await executeArcade(arcade, feature);
        const root = createRoot(div as HTMLDivElement);
        if (featureTable) {
          root.render(
            <div className="feature-title">
              {condos.length > 1 && (
                <Suspense fallback={''}>
                  <NextPropertyButton view={view} icon="caret-left" text="Previous" featureTable={featureTable} />
                </Suspense>
              )}
              <h2>{title}</h2>
              <Suspense fallback={''}>
                {condos.length > 1 && (
                  <NextPropertyButton view={view} icon="caret-right" text="Next" featureTable={featureTable} />
                )}
              </Suspense>
            </div>,
          );
        }
      }

      return div;
    },
  });
};

export const getAddressTable = (view: __esri.MapView) => {
  return new CustomContent({
    outFields: ['*'],
    creator: (e: any) => {
      const container = document.createElement('div');
      container.setAttribute('style', 'max-height: 500px;min-height: 100px');
      const title = document.createElement('h2');
      title.textContent = 'Addresses';
      container.append(title);
      const tablediv = document.createElement('div');
      container.append(tablediv);
      (view as __esri.MapView).graphics.removeMany(
        (view as __esri.MapView).graphics.filter((graphic) => {
          return graphic.getAttribute('type') === 'address';
        }),
      );
      if (!tablediv?.hasChildNodes()) {
        const root = createRoot(tablediv as HTMLDivElement);
        root.render(
          <Suspense fallback={''}>
            <AddressTable view={view} property={e.graphic} />
          </Suspense>,
        );
      }
      return container;
    },
  });
};
