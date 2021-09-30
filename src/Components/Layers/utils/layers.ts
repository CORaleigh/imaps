/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Collection from '@arcgis/core/core/Collection';
import ActionToggle from '@arcgis/core/support/actions/ActionToggle';
export const layerListItemCreated = (event: any): void => {
  const item = event.item;
  if (item.layer.type != 'group' && item.layer.type != undefined) {
    const slider = document.createElement('calcite-slider');
    slider.setAttribute('min', '0');
    slider.setAttribute('max', '100');
    slider.setAttribute('step', '1');
    slider.setAttribute('snap', '');
    slider.setAttribute('min-label', '0%');
    slider.setAttribute('max-label', '100%');
    slider.setAttribute('label-handles', '');
    slider.setAttribute('value', Math.round(item?.layer.opacity * 100).toString());
    slider.setAttribute('data', item.layer.id);
    slider.addEventListener(
      'calciteSliderUpdate',
      (event) => {
        item.layer.opacity = Math.round(parseInt((event?.target as any)?.getAttribute('value'))) / 100;
      },
      { passive: true },
    );
    item.panel = {
      content: [slider, 'legend'],
      open: item.layer.visible,
    };
    item.layer.watch('visible', (visible: boolean) => {
      item.panel.open = visible;
      if (visible) {
        if (item.layer.parent) {
          if (item.layer.parent.type === 'group') {
            item.layer.parent.visible = true;
          }
        }
        if (item.layer.parent.parent) {
          if (item.layer.parent.parent.type === 'group') {
            item.layer.parent.parent.visible = true;
          }
        }
      }
    });
  }
  addPropertyLabelToggles(item);
};
export const togglePropertyLabels = (event: __esri.LayerListTriggerActionEvent) => {
  if (event.item.layer.title === 'Property') {
    if (!(event.item.layer as __esri.FeatureLayer).labelsVisible) {
      (event.item.layer as __esri.FeatureLayer).labelsVisible = true;
    }
    const selected = event.item.actionsSections.getItemAt(0).filter((section) => {
      return (section as ActionToggle).value;
    });

    const selectedTitles = selected.map((section) => {
      return (section as ActionToggle).title;
    });

    const selectedExpressions = propertyLabelExpressions.filter((expression) => {
      return selectedTitles.includes(expression.title);
    });
    const expressions = selectedExpressions.map((expression) => {
      return expression.expression;
    });
    const expression = expressions.join('+ TextFormatting.NewLine+');
    (event.item.layer as __esri.FeatureLayer).labelingInfo = [];

    //if ((event.action as ActionToggle).value) {
    (event.item.layer as __esri.FeatureLayer).labelingInfo = [
      {
        // autocasts as new LabelClass()
        symbol: {
          type: 'text', // autocasts as new TextSymbol()
          color: 'black',
          haloColor: 'white',
          haloSize: 1,
          font: {
            family: 'AvenirNext LT Pro Regular',
            style: 'normal',
            weight: 'bold',
          },
        },
        labelExpressionInfo: {
          expression: expression,
        },
        maxScale: 0,
        minScale: 5000,
      } as any,
    ];
    // }
    // } else {
    //   (event.item.layer as __esri.FeatureLayer).labelingInfo = (
    //     event.item.layer as __esri.FeatureLayer
    //   ).labelingInfo.filter((info) => {
    //     return info.labelExpressionInfo.expression != expression.expression;
    //   });
    // }
  }
};
const propertyLabelExpressions: any[] = [
  {
    expression: `First(Split($feature['SITE_ADDRESS'], ' '))`,
    title: 'Address',
  },
  {
    expression: `$feature['PIN_NUM']`,
    title: 'PIN',
  },
  {
    expression: `$feature['REID']`,
    title: 'REID',
  },
  {
    expression: `When(IsEmpty($feature["SALE_DATE"]),null, Concatenate(Month($feature["SALE_DATE"])+1, '/',Day($feature["SALE_DATE"]), '/',Year($feature["SALE_DATE"])))`,
    title: 'Sale Date',
  },
  {
    expression: `Text($feature.TOTSALPRICE,'$#,###')`,
    title: 'Sale Price',
  },
];

const addPropertyLabelToggles = (item: any) => {
  if (item.layer.title === 'Property' && item.layer.type != 'group' && item.actionsSections.length === 0) {
    const toggles: Collection = new Collection();
    toggles.addMany(
      propertyLabelExpressions.map((expression) => {
        return new ActionToggle({
          active: false,
          title: expression.title,
          visible: true,
        });
      }),
    );
    (item as __esri.ListItem).actionsSections.push(toggles);
    (item as __esri.ListItem).actionsOpen = true;
    setTimeout(() => {
      const title = document.createElement('h4');
      title.textContent = 'Labels';
      title.setAttribute('style', 'padding: 0.5em;margin: 0;');
      const actions = document.querySelector('.esri-layer-list__item-actions');
      if (actions?.parentElement) {
        actions.prepend(title);
      }
    }, 500);
  }
};
export const filterLayers = (value: string, layerList: __esri.LayerList): void => {
  if (!value) {
    value = '';
  }
  layerList.operationalItems.forEach((item: __esri.ListItem) => {
    if (item.layer.type === 'group') {
      let open = false;
      (item.layer as __esri.GroupLayer).layers.forEach((layer) => {
        if (layer.title.toLowerCase().includes(value.toLowerCase())) {
          layer.listMode = 'show';
          open = true;
        } else {
          layer.listMode = 'hide';
        }
        //handle second level group layers
        if (layer.type === 'group') {
          (layer as __esri.GroupLayer).layers.forEach((sublayer) => {
            if (sublayer.title.toLowerCase().includes(value.toLowerCase())) {
              layer.listMode = 'show';
              sublayer.listMode = 'show';
              open = true;
            } else {
              sublayer.listMode = 'hide';
            }
          });
        }
      });
      if (!value.length) {
        item.open = false;
        document
          .querySelector(`#layerListDiv_${(item as any).uid}__title`)
          ?.parentElement?.parentElement?.parentElement?.removeAttribute('hidden');
      } else if (!open) {
        item.open = false;
        document
          .querySelector(`#layerListDiv_${(item as any).uid}__title`)
          ?.parentElement?.parentElement?.parentElement?.setAttribute('hidden', '');
      } else {
        item.open = true;
        document
          .querySelector(`#layerListDiv_${(item as any).uid}__title`)
          ?.parentElement?.parentElement?.parentElement?.removeAttribute('hidden');
      }
    }
  });
};

export const resetLayers = (list: __esri.LayerList) => {
  list?.operationalItems.forEach((item) => {
    item.visible = item.title === 'Property';
  });
};
