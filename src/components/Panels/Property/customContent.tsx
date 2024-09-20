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
const NextPropertyButton = lazy(
  () => import('./NextPropertyButton/NextPropertyButton'),
);

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
    creator: async (event?: __esri.PopupTemplateCreatorEvent): Promise<HTMLElement> => {
      const div = document.createElement('div');
      div.setAttribute(
        'style',
        'display: flex; flex-direction: row; justify-content: space-around;',
      );

      if (!event || !event.graphic) {
        // Return an empty div as a valid HTMLElement
        return div; // Returning an empty content structure
      }

      const durham = await executeArcade(
        `if (Find("DURHAM COUNTY", $feature.CITY_DECODE) > -1) { 
        return Concatenate("https://maps.durhamnc.gov/?pid=", $feature.REID);}`,
        event.graphic,
      );

      if (durham) {
        const durhamBtn = createButton('home', 'Durham County');
        durhamBtn.onclick = () => {
          window.open(durham, 'durham');
        };
        div.append(durhamBtn);
      }

      return div; // Return the div as HTMLElement
    },
  });
};

export const createDeedButtons = () => {
  return new CustomContent({
    outFields: ['OBJECTID', 'REID'],
    creator: deedCreator,
  });
};

// Explicitly typing deedCreator as PopupTemplateContentCreator
const deedCreator: __esri.PopupTemplateContentCreator = async (e) => {
  const div = document.createElement('div');
  div.setAttribute(
    'style',
    'display: flex; flex-direction: row; justify-content: space-around;',
  );

  let deed: string | null = null;
  let bom: string | null = null;

  const graphic = e?.graphic as __esri.Graphic;
  const layer = graphic.layer as FeatureLayer;
  const cityDecode = graphic.getAttribute('CITY_DECODE');
  const reid = graphic.getAttribute('REID');

  if (!cityDecode?.includes('DURHAM COUNTY')) {
    const objectids = await layer.queryObjectIds({
      where: `REID = '${reid}'`,
    });

    if (objectids.length) {
      const relationshipId = layer.relationships.find((r) => r.name === 'CONDO_BOOKS')?.id;
      if (relationshipId) {
        const relatedFeatures = await layer.queryRelatedFeatures({
          relationshipId,
          objectIds: [objectids[0]],
          outFields: ['BOM_DOC_NUM', 'DEED_DOC_NUM'],
        });

        const relatedFeature = relatedFeatures[objectids[0]].features[0];
        deed = relatedFeature.getAttribute('DEED_DOC_NUM');
        bom = relatedFeature.getAttribute('BOM_DOC_NUM');
      }
    }

    if (!cityDecode?.includes('DURHAM COUNTY') || !cityDecode) {
      if (deed) {
        const deedBtn = createButton('file-text', 'Deeds');
        deedBtn.onclick = () => {
          window.open(
            'https://rodcrpi.wakegov.com/booksweb/pdfview.aspx?docid=' + deed + '&RecordDate=',
            'deedwindow',
          );
        };
        div.append(deedBtn);
      }
      if (bom) {
        const bombtn = createButton('map', 'Book of Maps');
        bombtn.onclick = () => {
          window.open(
            'https://rodcrpi.wakegov.com/booksweb/pdfview.aspx?docid=' + bom + '&RecordDate=',
            'bomwindow',
          );
        };
        div.append(bombtn);
      }
    }

    return div; // Return the div directly
  } else {
    const deedBtn = createButton('file-text', 'Deeds');
    deedBtn.onclick = () => {
      window.open(
        `https://rodweb.dconc.gov/web/web/integration/search?field_BookPageID_DOT_Volume=${graphic.getAttribute(
          'DEED_BOOK',
        )}&field_BookPageID_DOT_Page=${graphic.getAttribute('DEED_PAGE')}`,
          'deedwindow',
      );
    };
    div.append(deedBtn);
    return div; // Return the div directly
  }
};




export const createEnvironmentalButtons = (view: __esri.MapView) => {
  return new CustomContent({
    outFields: ['PIN_NUM'],
    creator: async (event?: __esri.PopupTemplateCreatorEvent): Promise<HTMLElement> => {
      return wellCreator(event, view);
    },
  });
};

const wellCreator = async (event: __esri.PopupTemplateCreatorEvent | undefined, view: __esri.MapView): Promise<HTMLElement> => {
  let layer: __esri.Layer | undefined = view.map.allLayers.find((layer: __esri.Layer) => {
    return layer?.title?.includes('Wells');
  });

  if (!layer) {
    layer = new FeatureLayer({
      portalItem: {
        id: 'ef42e9e1d1eb4689bf90b592c2f6c419',
      },
    });
  }

  const featureSet: __esri.FeatureSet = await (layer as FeatureLayer).queryFeatures({
    where: `PIN_NUM = '${event?.graphic.attributes['PIN_NUM']}'`,
    returnGeometry: false,
  });

  const div = document.createElement('div');
  div.setAttribute(
    'style',
    'display: flex; flex-direction: row; justify-content: space-around;',
  );

  if (featureSet.features.length) {
    const pin = featureSet.features[0].getAttribute('PIN_NUM');
    const btn = createButton('link', 'Wells');
    btn.onclick = () => {
      window.open(
        'https://maps.wakegov.com/water-analysis/index.html#/?pin=' + pin,
        'wells',
      );
    };
    div.append(btn);
  }

  layer = new FeatureLayer({
    portalItem: {
      id: 'bb3eb1f6cc774bdda560554381a4c06f',
    },
  });

  const septicFeatureSet: __esri.FeatureSet = await (layer as FeatureLayer).queryFeatures({
    where: `PIN_NUM = '${event?.graphic.attributes['PIN_NUM']}'`,
    returnGeometry: false,
  });

  if (septicFeatureSet.features.length) {
    const pin = septicFeatureSet.features[0].getAttribute('PIN_NUM');
    const btn = createButton('link', 'Septic');
    btn.onclick = () => {
      window.open(
        'https://maps.wakegov.com/septic/index.html#/?pin=' + pin,
        'septic',
      );
    };
    div.append(btn);
  }

  return div; // Ensure to return the created div
};



export const createLinkButtons = () => {
  return new CustomContent({
    outFields: ['*'],
    creator: async (event?: __esri.PopupTemplateCreatorEvent): Promise<HTMLElement> => {
      const div = document.createElement('div');
      div.setAttribute(
        'style',
        'display: flex; flex-direction: row; justify-content: space-around;',
      );

      const graphic = event?.graphic as Graphic; // Cast to Graphic
      if (!graphic) {
        return div; // Return empty div if graphic is undefined
      }

      const btn = createButton('link', 'Google Maps');
      btn.onclick = () => {
        const latitude = (graphic.geometry as __esri.Polygon).centroid.latitude;
        const longitude = (graphic.geometry as __esri.Polygon).centroid.longitude;
        const url = `https://www.google.com/maps/@${latitude - 0.0006721930485},${longitude - 0.0000196467158},68a,35y,49.52t/data=!3m1!1e3`;
        window.open(url, 'googlewindow');
      };
      div.append(btn);

      const tax = createButton('home', 'Tax Page');

      const taxUrl = await executeArcade(
        `if ($feature.CITY_DECODE == "RALEIGH - DURHAM COUNTY") { 
          return Concatenate("https://taxcama.dconc.gov/camapwa/PropertySummary.aspx?REID=",$feature.REID);
        } else {
          return Concatenate("https://services.wake.gov/realestate/Account.asp?id=", $feature.REID);
        }`,
        graphic, // Use the defined graphic
      );
      tax.onclick = () => {
        window.open(taxUrl, 'taxwindow');
      };
      tax.textContent = 'Tax Page';
      div.append(tax);

      return div; // Ensure to return the created div
    },
  });
};


export const getDurhamPhoto = async (feature: Graphic) => {
  const photo = await executeArcade(
    `if ($feature.CITY_DECODE == "RALEIGH - DURHAM COUNTY") { 
      return Concatenate("https://image-cdn.spatialest.com/image/durham-images/lrg/",$feature.REID,".JPG");}`,
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
    creator: (event?: __esri.PopupTemplateCreatorEvent) => {
      const accordion = document.createElement('service-accordion');

      if (!accordion?.hasChildNodes()) {
        const graphic = event?.graphic;
        if (!graphic) {
          return accordion;
        }

        const root = createRoot(accordion as HTMLDivElement);
        root.render(
          <Suspense fallback={''}>
            <Services view={view} graphic={graphic} />
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
  featureTable?: FeatureTable, // Make it optional
) => {
  return new CustomContent({
    outFields: ['*'],
    creator: async (event?: __esri.PopupTemplateCreatorEvent) => {
      const div = document.createElement('div');
      const arcade = arcadeExpressionInfos.find((info) => {
        return info.title === 'site-address';
      })?.expression;

      if (arcade) {
        const title = await executeArcade(arcade, feature);
        const root = createRoot(div as HTMLDivElement);
        
        root.render(
          <div className="feature-title">
            {condos.length > 1 && featureTable && ( // Check if featureTable is defined
              <Suspense fallback={''}>
                <NextPropertyButton
                  view={view}
                  icon="caret-left"
                  text="Previous"
                  featureTable={featureTable} // Now safe to use
                />
              </Suspense>
            )}
            <h2>{title}</h2>
            {condos.length > 1 && featureTable && ( // Check again for featureTable
              <Suspense fallback={''}>
                <NextPropertyButton
                  view={view}
                  icon="caret-right"
                  text="Next"
                  featureTable={featureTable} // Now safe to use
                />
              </Suspense>
            )}
          </div>,
        );
      }

      return div;
    },
  });
};


export const getAddressTable = (view: __esri.MapView) => {
  return new CustomContent({
    outFields: ['*'],
    creator: (event?: __esri.PopupTemplateCreatorEvent) => {
      const container = document.createElement('div');
      container.setAttribute('style', 'max-height: 500px;min-height: 100px');
      const title = document.createElement('h2');
      title.textContent = 'Addresses';
      container.append(title);
      const tablediv = document.createElement('div');
      container.append(tablediv);

      // Remove existing address graphics
      view.graphics.removeMany(
        view.graphics.filter((graphic) => graphic.getAttribute('type') === 'address')
      );

      if (!tablediv.hasChildNodes() && event?.graphic) {
        const root = createRoot(tablediv as HTMLDivElement);
        root.render(
          <Suspense fallback={''}>
            <AddressTable view={view} property={event.graphic} /> {/* Now guaranteed to be defined */}
          </Suspense>
        );
      }

      return container;
    },
  });
};