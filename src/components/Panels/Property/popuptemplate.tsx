import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import PopupTemplate from '@arcgis/core/PopupTemplate';
import FieldInfo from '@arcgis/core/popup/FieldInfo';
import Graphic from '@arcgis/core/Graphic';

import {
  createDeedButtons,
  createDurhamButton,
  createEnvironmentalButtons,
  createFeatureTitle,
  createLinkButtons,
  getAddressTable,
  getDurhamPhoto,
  getServiceAccordion,
} from './customContent';
import { arcadeExpressionInfos } from './utils/arcadeExpressions';

export const createTemplate = (
  view: __esri.MapView,
  condoTable: FeatureLayer,
  feature: Graphic,
  condos: Graphic[],
  featureTable: __esri.FeatureTable | undefined,
): PopupTemplate => {
  const popupTemplate = new PopupTemplate({
    expressionInfos: arcadeExpressionInfos,
    fieldInfos: getFieldInfos(condoTable).map((field) => {
      return {
        fieldName: field.fieldName,
        label: field.label,
        visible: [
          'SITE_ADDRESS',
          'OWNER',
          'PIN_NUM',
          'PIN_EXT',
          'REID',
        ].includes(field.fieldName),
      };
    }),
    content: [
      // {
      //   type: "text",
      //   text: "<h2>{expression/site-address}</h2>",
      // },
      createFeatureTitle(view as __esri.MapView, feature, condos, featureTable),
      createDurhamButton(),
      createLinkButtons(),
      createEnvironmentalButtons(view),
      {
        type: 'text',
        text: '<h2>General</h1>',
      },
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'expression/pin',
            label: 'PIN',
          },
          {
            fieldName: 'REID',
            label: 'REID',
          },
          {
            fieldName: 'expression/city',
            label: 'City',
          },
          {
            fieldName: 'expression/jurisdiction',
            label: 'Jurisdiction',
          },
          {
            fieldName: 'expression/township',
            label: 'Township',
          },
          {
            fieldName: 'MAP_NAME',
            label: 'Map Name',
          },
          {
            fieldName: 'LAND_CLASS_DECODE',
            label: 'Land Class',
          },
        ],
      },
      {
        type: 'text',
        text: '<h2>Owner</h1>',
      },
      {
        type: 'text',
        text: '{OWNER}<br/>{expression/mailing-address}',
      },
      {
        type: 'text',
        text: '<h2>Valuation</h1>',
      },
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'expression/build_val',
          },
          {
            fieldName: 'expression/land_val',
          },
          {
            fieldName: 'expression/total_val',
          },
          {
            fieldName: 'BILLING_CLASS_DECODE',
            label: 'Billing Class',
          },
        ],
      },
      {
        type: 'text',
        text: '<h2>Last Sale</h1>',
      },
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'SALE_DATE',
            format: {
              dateFormat: 'short-date',
            },
            label: 'Date Sold',
          },
          {
            fieldName: 'expression/sale_price',
          },
        ],
      },
      {
        type: 'text',
        text: '<h2>Deeds</h1>',
      },
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'DEED_BOOK',
            label: 'Book',
          },
          {
            fieldName: 'DEED_PAGE',
            label: 'Page',
          },
          {
            fieldName: 'DEED_DATE',
            format: {
              dateFormat: 'short-date',
            },
            label: 'Deed Date',
          },
          {
            fieldName: 'DEED_ACRES',
            format: {
              places: 2,
            },
            label: 'Deed Acres',
          },
          {
            fieldName: 'PROPDESC',
            label: 'Property Description',
          },
        ],
      },
      createDeedButtons(),
      feature.getAttribute('HEATEDAREA')
        ? {
            type: 'text',
            text: '<h2>Building</h1>',
          }
        : {
            type: 'text',
            text: '',
          },
      feature.getAttribute('HEATEDAREA')
        ? {
            type: 'fields',
            fieldInfos: [
              {
                fieldName: 'HEATEDAREA',
                format: {
                  digitSeparator: true,
                },
                label: 'Heated Area',
              },
              {
                fieldName: 'YEAR_BUILT',
                format: {
                  digitSeparator: false,
                },
                label: 'Year Built',
              },
              {
                fieldName: 'DESIGN_STYLE_DECODE',
                label: 'Design/Style',
              },
              {
                fieldName: 'TYPE_USE_DECODE',
                label: 'Use Type',
              },
              {
                fieldName: 'TOTSTRUCTS',
                label: 'Total Structures',
              },
              {
                fieldName: 'TOTUNITS',
                label: 'Total Units',
              },
            ],
          }
        : {
            type: 'text',
            text: '',
          },
      {
        type: 'media',
        mediaInfos: [],
      },
      {
        type: 'text',
        text: '<h2>Services</h1>',
      },
      getServiceAccordion(view),
      getAddressTable(view),
    ],
  });
  return popupTemplate;
};

const getFieldInfos = (condoTable: FeatureLayer): FieldInfo[] => {
  let fieldConfigs: FieldInfo[] = [];
  condoTable.fields.forEach((field) => {
    fieldConfigs.push(
      new FieldInfo({
        fieldName: field.name,
        label: field.alias,
        visible: [
          'SITE_ADDRESS',
          'OWNER',
          'PIN_NUM',
          'PIN_EXT',
          'REID',
        ].includes(field.name),
      }),
    );
  });
  const ext = fieldConfigs.find((fc) => {
    return fc.fieldName === 'PIN_EXT';
  }) as FieldInfo;
  const pin = fieldConfigs.find((fc) => {
    return fc.fieldName === 'PIN_NUM';
  }) as FieldInfo;
  const reid = fieldConfigs.find((fc) => {
    return fc.fieldName === 'REID';
  }) as FieldInfo;
  const owner = fieldConfigs.find((fc) => {
    return fc.fieldName === 'OWNER';
  }) as FieldInfo;
  const address = fieldConfigs.find((fc) => {
    return fc.fieldName === 'SITE_ADDRESS';
  }) as FieldInfo;
  fieldConfigs = fieldConfigs.filter((fc) => {
    return !['SITE_ADDRESS', 'OWNER', 'PIN_NUM', 'PIN_EXT', 'REID'].includes(
      fc.fieldName,
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
  feature: __esri.Graphic,
): Promise<__esri.MediaInfo[]> => {
  const relationship = (feature.layer as FeatureLayer)?.relationships.find(
    (r) => {
      return r.name === 'CONDO_PHOTOS';
    },
  );
  const mediaInfos: any[] = [];
  const layer: FeatureLayer = feature.layer as FeatureLayer;
  const result = await layer?.queryRelatedFeatures({
    relationshipId: relationship?.id,
    objectIds: [feature.getAttribute('OBJECTID')],
    outFields: ['*'],
    where: `STATUS = 'A'`,
  });
  for (const key in result) {
    feature.setAttribute('OBJECTID', key);
    result[key].features.reverse().forEach((feature: Graphic) => {
      mediaInfos.push({
        title: '',
        type: 'image',
        caption: '',
        value: {
          sourceURL: `https://services.wake.gov/realestate/photos/mvideo/${feature.getAttribute(
            'IMAGEDIR',
          )}/${feature.getAttribute('IMAGENAME')}`,
        },
      });
    });
  }
  if (feature.getAttribute('CITY_DECODE')?.includes('DURHAM COUNTY')) {
    const photo = await getDurhamPhoto(feature);

    mediaInfos.push({
      title: '',
      type: 'image',
      caption: '',
      value: {
        sourceURL: photo,
      },
    });
  }
  return mediaInfos;
};
