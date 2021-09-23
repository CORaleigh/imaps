/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useRef } from 'react';
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery';
import { addSnippet, basemapChanged, basemapSelected, createAlert } from './utils/basemaps';
import './Basemaps.scss';
export const Basemaps = (props: any) => {
  const ref = useRef<HTMLDivElement>(null);
  let selectedTab = 'basemaps';
  let eventId = 0;
  useEffect(() => {
    const basemapGallery = new BasemapGallery({
      container: ref.current as HTMLDivElement,
      view: props.view,
      source: { query: { id: 'f6329364e80c438a958ce74aadc3a89f' } },
    });

    createAlert();
    document?.querySelector('calcite-combobox')?.addEventListener('calciteComboboxItemChange', (event: any) => {
      const tab = (event as any).detail.value;
      //setSelectedTab(tab);
      selectedTab = tab;
      basemapSelected(tab, props.view, basemapGallery, props.default, props.imagery);
      setTimeout(() => {
        console.log(eventId);
        if (eventId === 1) {
          addSnippet(basemapGallery.viewModel.items);
        }
        if (eventId === 0) {
          eventId += 1;
        } else {
          eventId = 0;
        }
      }, 1000);
    });
    basemapGallery.watch('activeBasemap', (activeBasemap: __esri.Basemap) => {
      basemapChanged(activeBasemap, props.view, selectedTab);
    });
    setTimeout(() => {
      console.log(basemapGallery.viewModel.items);
      addSnippet(basemapGallery.viewModel.items);
    }, 1000);
  }, []); // only after initial render
  return (
    <div className="panel">
      <calcite-combobox
        label="demo combobox"
        selection-mode="single"
        allow-custom-values="false"
        scale="m"
        max-items="0"
        dir="ltr"
        calcite-hydrated=""
      >
        <calcite-combobox-item
          icon="layer-basemap"
          value="basemaps"
          text-label="Basemaps"
          aria-hidden=""
          dir="ltr"
          scale="m"
          tabindex="-1"
          calcite-hydrated=""
          key="basemaps"
          selected
        ></calcite-combobox-item>
        <calcite-combobox-item
          icon="image-layer"
          value="imagery"
          key="imagery"
          text-label="Imagery"
          aria-hidden=""
          dir="ltr"
          scale="m"
          tabindex="-1"
          calcite-hydrated=""
        ></calcite-combobox-item>
        <calcite-combobox-item
          icon="layer-basemap"
          value="esri"
          text-label="Esri Basemaps"
          aria-hidden=""
          dir="ltr"
          scale="m"
          tabindex="-1"
          calcite-hydrated=""
          key="esri"
        ></calcite-combobox-item>
      </calcite-combobox>
      <div ref={ref}></div>
    </div>
  );
};
export default Basemaps;
