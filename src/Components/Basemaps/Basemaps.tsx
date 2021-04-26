/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useRef } from 'react';
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery';
import { basemapChanged, basemapSelected, createAlert } from './utils/basemaps';
import './Basemaps.scss';
export const Basemaps = (props: any) => {
  const ref = useRef<HTMLDivElement>(null);
  let selectedTab = 'basemaps';
  useEffect(() => {
    const basemapGallery = new BasemapGallery({
      container: ref.current as HTMLDivElement,
      view: props.view,
    });

    createAlert();
    document?.querySelector('calcite-combobox')?.addEventListener('calciteComboboxItemChange', (event: any) => {
      const tab = (event as any).detail.value;
      //setSelectedTab(tab);
      selectedTab = tab;
      basemapSelected(tab, props.view, basemapGallery);
    });
    basemapGallery.watch('activeBasemap', (activeBasemap: __esri.Basemap) => {
      basemapChanged(activeBasemap, props.view, selectedTab);
    });

    return () => {
      console.log('cleanup');
    };
  }); // only after initial render
  return (
    <div className={`panel ${props.show ? '' : 'esri-hidden'}`}>
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
      </calcite-combobox>
      <div ref={ref}></div>
    </div>
  );
};
export default Basemaps;
