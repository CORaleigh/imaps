export interface CustomTextElement {
  [key: string]: string;
}

export interface LayoutOptions {
  hasTitleText: boolean;
  hasAuthorText: boolean;
  hasCopyrightText: boolean;
  hasLegend: boolean;
  customTextElements: CustomTextElement[];
}

export interface Template {
  layoutTemplate: string;
  pageSize: [number, number];
  pageUnits: string;
  webMapFrameSize: [number, number];
  layoutOptions: LayoutOptions;
}

export interface PrintTemplates {
  results: {
    paramName: string;
    dataType: string;
    value: Template[];
  }[];
  messages: string[];
}




export const printTemplates: PrintTemplates  = {
  results: [
    {
      paramName: 'Output_JSON',
      dataType: 'GPString',
      value: [
        {
          layoutTemplate: '85x11_landscape',

          pageSize: [11.0, 8.5],

          pageUnits: 'INCH',

          webMapFrameSize: [10.0, 6.7],

          layoutOptions: {
            hasTitleText: true,

            hasAuthorText: false,

            hasCopyrightText: false,

            hasLegend: true,

            customTextElements: [
              {
                Scale: '800',
              },

              {
                '2xScale': '1,600',
              },

              {
                HalfScale: '400',
              },
            ],
          },
        },

        {
          layoutTemplate: '85x11_landscape_attributes',

          pageSize: [11.0, 8.5],

          pageUnits: 'INCH',

          webMapFrameSize: [7.5, 7.5],

          layoutOptions: {
            hasTitleText: true,

            hasAuthorText: false,

            hasCopyrightText: false,

            hasLegend: true,

            customTextElements: [
              {
                PropertyInfo: ' ',
              },

              {
                Scale: '100',
              },

              {
                '2xScale': '200',
              },

              {
                HalfScale: '50',
              },
            ],
          },
        },

        {
          layoutTemplate: '85x11_landscape_attributes_legend',

          pageSize: [11.0, 8.5],

          pageUnits: 'INCH',

          webMapFrameSize: [7.5, 7.5],

          layoutOptions: {
            hasTitleText: true,

            hasAuthorText: false,

            hasCopyrightText: false,

            hasLegend: true,

            customTextElements: [
              {
                PropertyInfo: ' ',
              },

              {
                Scale: '100',
              },

              {
                '2xScale': '200',
              },

              {
                HalfScale: '50',
              },
            ],
          },
        },

        {
          layoutTemplate: '85x11_landscape_legend',

          pageSize: [11.0, 8.5],

          pageUnits: 'INCH',

          webMapFrameSize: [10.0, 6.7],

          layoutOptions: {
            hasTitleText: true,

            hasAuthorText: false,

            hasCopyrightText: false,

            hasLegend: true,

            customTextElements: [
              {
                Scale: '800',
              },

              {
                '2xScale': '1,600',
              },

              {
                HalfScale: '400',
              },
            ],
          },
        },

        {
          layoutTemplate: '85x11_portrait',

          pageSize: [8.5, 11.0],

          pageUnits: 'INCH',

          webMapFrameSize: [7.5, 7.5],

          layoutOptions: {
            hasTitleText: true,

            hasAuthorText: false,

            hasCopyrightText: false,

            hasLegend: false,

            customTextElements: [
              {
                Scale: '100',
              },

              {
                '2xScale': '200',
              },

              {
                HalfScale: '50',
              },
            ],
          },
        },

        {
          layoutTemplate: '85x11_portrait_attributes',

          pageSize: [8.5, 11.0],

          pageUnits: 'INCH',

          webMapFrameSize: [7.5, 7.5],

          layoutOptions: {
            hasTitleText: true,

            hasAuthorText: false,

            hasCopyrightText: false,

            hasLegend: false,

            customTextElements: [
              {
                Scale: '100',
              },

              {
                '2xScale': '200',
              },

              {
                HalfScale: '50',
              },

              {
                PropertyInfo: '',
              },
            ],
          },
        },

        {
          layoutTemplate: '85x11_portrait_attributes_legend',

          pageSize: [8.5, 11.0],

          pageUnits: 'INCH',

          webMapFrameSize: [7.5, 7.5],

          layoutOptions: {
            hasTitleText: true,

            hasAuthorText: false,

            hasCopyrightText: false,

            hasLegend: true,

            customTextElements: [
              {
                Scale: '100',
              },

              {
                '2xScale': '200',
              },

              {
                HalfScale: '50',
              },

              {
                PropertyInfo: '',
              },
            ],
          },
        },

        {
          layoutTemplate: '85x11_portrait_legend',

          pageSize: [8.5, 11.0],

          pageUnits: 'INCH',

          webMapFrameSize: [7.5, 7.5],

          layoutOptions: {
            hasTitleText: true,

            hasAuthorText: false,

            hasCopyrightText: false,

            hasLegend: true,

            customTextElements: [
              {
                Scale: '100',
              },

              {
                '2xScale': '200',
              },

              {
                HalfScale: '50',
              },
            ],
          },
        },
        {
          layoutTemplate: '11x17_landscape',

          pageSize: [17.0, 11.0],

          pageUnits: 'INCH',

          webMapFrameSize: [16.0, 9.0],

          layoutOptions: {
            hasTitleText: true,

            hasAuthorText: false,

            hasCopyrightText: false,

            hasLegend: true,

            customTextElements: [
              {
                Scale: '800',
              },

              {
                '2xScale': '1,600',
              },

              {
                HalfScale: '400',
              },
            ],
          },
        },

        {
          layoutTemplate: '11x17_landscape_attributes',

          pageSize: [17.0, 11.0],

          pageUnits: 'INCH',

          webMapFrameSize: [13.0, 10.0],

          layoutOptions: {
            hasTitleText: true,

            hasAuthorText: false,

            hasCopyrightText: false,

            hasLegend: true,

            customTextElements: [
              {
                PropertyInfo: ' ',
              },

              {
                Scale: '800',
              },

              {
                '2xScale': '1,600',
              },

              {
                HalfScale: '400',
              },
            ],
          },
        },

        {
          layoutTemplate: '11x17_landscape_attributes_legend',

          pageSize: [17.0, 11.0],

          pageUnits: 'INCH',

          webMapFrameSize: [13.0, 10.0],

          layoutOptions: {
            hasTitleText: true,

            hasAuthorText: false,

            hasCopyrightText: false,

            hasLegend: true,

            customTextElements: [
              {
                PropertyInfo: ' ',
              },

              {
                Scale: '800',
              },

              {
                '2xScale': '1,600',
              },

              {
                HalfScale: '400',
              },
            ],
          },
        },

        {
          layoutTemplate: '11x17_landscape_legend',

          pageSize: [17.0, 11.0],

          pageUnits: 'INCH',

          webMapFrameSize: [16.0, 9.0],

          layoutOptions: {
            hasTitleText: true,

            hasAuthorText: false,

            hasCopyrightText: false,

            hasLegend: true,

            customTextElements: [
              {
                Scale: '800',
              },

              {
                '2xScale': '1,600',
              },

              {
                HalfScale: '400',
              },
            ],
          },
        },

        {
          layoutTemplate: '11x17_portrait',

          pageSize: [11.0, 17.0],

          pageUnits: 'INCH',

          webMapFrameSize: [10.0, 13.0],

          layoutOptions: {
            hasTitleText: true,

            hasAuthorText: false,

            hasCopyrightText: false,

            hasLegend: true,

            customTextElements: [
              {
                Scale: '800',
              },

              {
                '2xScale': '1,600',
              },

              {
                HalfScale: '400',
              },
            ],
          },
        },

        {
          layoutTemplate: '11x17_portrait_attributes',

          pageSize: [11.0, 17.0],

          pageUnits: 'INCH',

          webMapFrameSize: [10.0, 13.0],

          layoutOptions: {
            hasTitleText: true,

            hasAuthorText: false,

            hasCopyrightText: false,

            hasLegend: true,

            customTextElements: [
              {
                Scale: '800',
              },

              {
                '2xScale': '1,600',
              },

              {
                HalfScale: '400',
              },

              {
                PropertyInfo: ' ',
              },
            ],
          },
        },

        {
          layoutTemplate: '11x17_portrait_attributes_legend',

          pageSize: [11.0, 17.0],

          pageUnits: 'INCH',

          webMapFrameSize: [10.0, 13.0],

          layoutOptions: {
            hasTitleText: true,

            hasAuthorText: false,

            hasCopyrightText: false,

            hasLegend: true,

            customTextElements: [
              {
                Scale: '800',
              },

              {
                '2xScale': '1,600',
              },

              {
                HalfScale: '400',
              },

              {
                PropertyInfo: ' ',
              },
            ],
          },
        },

        {
          layoutTemplate: '11x17_portrait_legend',

          pageSize: [11.0, 17.0],

          pageUnits: 'INCH',

          webMapFrameSize: [10.0, 13.0],

          layoutOptions: {
            hasTitleText: true,

            hasAuthorText: false,

            hasCopyrightText: false,

            hasLegend: true,

            customTextElements: [
              {
                Scale: '800',
              },

              {
                '2xScale': '1,600',
              },

              {
                HalfScale: '400',
              },
            ],
          },
        },

        {
          layoutTemplate: '24x36_landscape',

          pageSize: [36.0, 24.0],

          pageUnits: 'INCH',

          webMapFrameSize: [35.0, 21.0],

          layoutOptions: {
            hasTitleText: true,

            hasAuthorText: false,

            hasCopyrightText: false,

            hasLegend: true,

            customTextElements: [
              {
                '2xScale': '200',
              },

              {
                '4xScale': '400',
              },

              {
                Scale: '100',
              },
            ],
          },
        },

        {
          layoutTemplate: '24x36_landscape_attributes',

          pageSize: [36.0, 24.0],

          pageUnits: 'INCH',

          webMapFrameSize: [28.0, 23.0],

          layoutOptions: {
            hasTitleText: true,

            hasAuthorText: false,

            hasCopyrightText: false,

            hasLegend: true,

            customTextElements: [
              {
                PropertyInfo: 'Text',
              },

              {
                '2xScale': '200',
              },

              {
                '4xScale': '400',
              },

              {
                Scale: '100',
              },
            ],
          },
        },

        {
          layoutTemplate: '24x36_landscape_attributes_legend',

          pageSize: [36.0, 24.0],

          pageUnits: 'INCH',

          webMapFrameSize: [28.0, 23.0],

          layoutOptions: {
            hasTitleText: true,

            hasAuthorText: false,

            hasCopyrightText: false,

            hasLegend: true,

            customTextElements: [
              {
                PropertyInfo: 'Text',
              },

              {
                '2xScale': '200',
              },

              {
                '4xScale': '400',
              },

              {
                Scale: '100',
              },
            ],
          },
        },

        {
          layoutTemplate: '24x36_landscape_legend',

          pageSize: [36.0, 24.0],

          pageUnits: 'INCH',

          webMapFrameSize: [35.0, 21.0],

          layoutOptions: {
            hasTitleText: true,

            hasAuthorText: false,

            hasCopyrightText: false,

            hasLegend: true,

            customTextElements: [
              {
                '2xScale': '200',
              },

              {
                '4xScale': '400',
              },

              {
                Scale: '100',
              },
            ],
          },
        },

        {
          layoutTemplate: '24x36_portrait',

          pageSize: [24.0, 36.0],

          pageUnits: 'INCH',

          webMapFrameSize: [23.0, 29.0],

          layoutOptions: {
            hasTitleText: true,

            hasAuthorText: false,

            hasCopyrightText: false,

            hasLegend: true,

            customTextElements: [
              {
                '2xScale': '200',
              },

              {
                '4xScale': '400',
              },

              {
                Scale: '100',
              },
            ],
          },
        },

        {
          layoutTemplate: '24x36_portrait_attributes',

          pageSize: [24.0, 36.0],

          pageUnits: 'INCH',

          webMapFrameSize: [23.0, 29.0],

          layoutOptions: {
            hasTitleText: true,

            hasAuthorText: false,

            hasCopyrightText: false,

            hasLegend: true,

            customTextElements: [
              {
                '2xScale': '200',
              },

              {
                '4xScale': '400',
              },

              {
                Scale: '100',
              },

              {
                PropertyInfo: ' ',
              },
            ],
          },
        },

        {
          layoutTemplate: '24x36_portrait_attributes_legend',

          pageSize: [24.0, 36.0],

          pageUnits: 'INCH',

          webMapFrameSize: [23.0, 29.0],

          layoutOptions: {
            hasTitleText: true,

            hasAuthorText: false,

            hasCopyrightText: false,

            hasLegend: true,

            customTextElements: [
              {
                '2xScale': '200',
              },

              {
                '4xScale': '400',
              },

              {
                Scale: '100',
              },

              {
                PropertyInfo: ' ',
              },
            ],
          },
        },

        {
          layoutTemplate: '24x36_portrait_legend',

          pageSize: [24.0, 36.0],

          pageUnits: 'INCH',

          webMapFrameSize: [23.0, 29.0],

          layoutOptions: {
            hasTitleText: true,

            hasAuthorText: false,

            hasCopyrightText: false,

            hasLegend: true,

            customTextElements: [
              {
                '2xScale': '200',
              },

              {
                '4xScale': '400',
              },

              {
                Scale: '100',
              },
            ],
          },
        },

        {
          layoutTemplate: '36x48_landscape',

          pageSize: [48.0, 36.0],

          pageUnits: 'INCH',

          webMapFrameSize: [47.0, 32.5],

          layoutOptions: {
            hasTitleText: true,

            hasAuthorText: false,

            hasCopyrightText: false,

            hasLegend: true,

            customTextElements: [
              {
                '2xScale': '200',
              },

              {
                '4xScale': '400',
              },

              {
                '6xScale': '600',
              },

              {
                Scale: '100',
              },
            ],
          },
        },

        {
          layoutTemplate: '36x48_landscape_attributes',

          pageSize: [48.0, 36.0],

          pageUnits: 'INCH',

          webMapFrameSize: [38.0, 35.0],

          layoutOptions: {
            hasTitleText: true,

            hasAuthorText: false,

            hasCopyrightText: false,

            hasLegend: true,

            customTextElements: [
              {
                PropertyInfo: ' ',
              },

              {
                '2xScale': '200',
              },

              {
                '4xScale': '400',
              },

              {
                '6xScale': '600',
              },

              {
                Scale: '100',
              },
            ],
          },
        },

        {
          layoutTemplate: '36x48_landscape_attributes_legend',

          pageSize: [48.0, 36.0],

          pageUnits: 'INCH',

          webMapFrameSize: [38.0, 35.0],

          layoutOptions: {
            hasTitleText: true,

            hasAuthorText: false,

            hasCopyrightText: false,

            hasLegend: true,

            customTextElements: [
              {
                PropertyInfo: ' ',
              },

              {
                '2xScale': '200',
              },

              {
                '4xScale': '400',
              },

              {
                '6xScale': '600',
              },

              {
                Scale: '100',
              },
            ],
          },
        },

        {
          layoutTemplate: '36x48_landscape_legend',

          pageSize: [48.0, 36.0],

          pageUnits: 'INCH',

          webMapFrameSize: [47.0, 32.5],

          layoutOptions: {
            hasTitleText: true,

            hasAuthorText: false,

            hasCopyrightText: false,

            hasLegend: true,

            customTextElements: [
              {
                '2xScale': '200',
              },

              {
                '4xScale': '400',
              },

              {
                '6xScale': '600',
              },

              {
                Scale: '100',
              },
            ],
          },
        },

        {
          layoutTemplate: '36x48_portrait',

          pageSize: [36.0, 48.0],

          pageUnits: 'INCH',

          webMapFrameSize: [35.0, 39.0],

          layoutOptions: {
            hasTitleText: true,

            hasAuthorText: false,

            hasCopyrightText: false,

            hasLegend: true,

            customTextElements: [
              {
                '2xScale': '200',
              },

              {
                '4xScale': '400',
              },

              {
                '6xScale': '600',
              },

              {
                Scale: '100',
              },
            ],
          },
        },

        {
          layoutTemplate: '36x48_portrait_attributes',

          pageSize: [36.0, 48.0],

          pageUnits: 'INCH',

          webMapFrameSize: [35.0, 39.0],

          layoutOptions: {
            hasTitleText: false,

            hasAuthorText: false,

            hasCopyrightText: false,

            hasLegend: false,

            customTextElements: [
              {
                '2xScale': '200',
              },

              {
                '4xScale': '400',
              },

              {
                '6xScale': '600',
              },

              {
                Scale: '100',
              },

              {
                PropertyInfo: ' ',
              },
            ],
          },
        },

        {
          layoutTemplate: '36x48_portrait_attributes_legend',

          pageSize: [36.0, 48.0],

          pageUnits: 'INCH',

          webMapFrameSize: [35.0, 39.0],

          layoutOptions: {
            hasTitleText: false,

            hasAuthorText: false,

            hasCopyrightText: false,

            hasLegend: false,

            customTextElements: [
              {
                '2xScale': '200',
              },

              {
                '4xScale': '400',
              },

              {
                '6xScale': '600',
              },

              {
                Scale: '100',
              },

              {
                PropertyInfo: ' ',
              },
            ],
          },
        },

        {
          layoutTemplate: '36x48_portrait_legend',

          pageSize: [36.0, 48.0],

          pageUnits: 'INCH',

          webMapFrameSize: [35.0, 39.0],

          layoutOptions: {
            hasTitleText: true,

            hasAuthorText: false,

            hasCopyrightText: false,

            hasLegend: true,

            customTextElements: [
              {
                '2xScale': '200',
              },

              {
                '4xScale': '400',
              },

              {
                '6xScale': '600',
              },

              {
                Scale: '100',
              },
            ],
          },
        },
      ],
    },
  ],
  messages: [],
};
