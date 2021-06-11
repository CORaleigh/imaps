/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

export const layerListItemCreated = (event: any): void => {
  const item = event.item;
  if (item.layer.type != 'group' && item.layer.type != undefined) {
    const slider = document.createElement('calcite-slider');
    slider.setAttribute('min', '0');
    slider.setAttribute('max', '100');
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
      open: false,
    };
  }
};
export const filterLayers = (value: string, layerList: __esri.LayerList): void => {
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
  debugger;
  list?.operationalItems.forEach((item) => {
    item.visible = item.title === 'Property';
  });
};
