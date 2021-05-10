/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useRef, useState } from 'react';
import SearchWidget from '@arcgis/core/widgets/Search';
import Feature from '@arcgis/core/widgets/Feature';
import './LocationSearch.scss';
import {
  addGraphics,
  addIntersectionSource,
  addLocationSearch,
  getIntersectingStreets,
  intersectionSelected,
  removeGraphics,
} from './utils/location';
import Graphic from '@arcgis/core/Graphic';
import CIMSymbol from '@arcgis/core/symbols/CIMSymbol';
import { pinSymbol } from '../../config/config';
export const LocationSearch = (props: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const searchRef = useRef<SearchWidget>();
  const featureWidgetRef = useRef<Feature>();

  const combobox = useRef<HTMLCalciteComboboxElement>(null);

  const [intersections, setIntersections] = useState<__esri.Graphic[]>([]);
  const intersectionRef = useRef<__esri.Graphic[]>([]);
  const selectedStreet = useRef<__esri.Graphic>();

  const featureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handles: any[] = [];
    const search = new SearchWidget({
      view: props.view,
      maxSuggestions: 30,
      searchAllEnabled: true,
      popupEnabled: false,
      container: ref.current as HTMLDivElement,
    });
    searchRef.current = search;

    addIntersectionSource().then((source) => {
      search.sources.add(source);
    });

    addLocationSearch(props.view).then((source) => {
      search.sources.add(source);
    });
    const feature = new Feature({ view: props.view, container: featureRef.current as HTMLDivElement });
    featureWidgetRef.current = feature;
    handles.push(
      search.on('search-complete', (results) => {
        setIntersections([]);
        removeGraphics(props.view);
        feature.graphic = new Graphic();
        if (results.results[0].source.name === 'Intersection') {
          selectedStreet.current = results?.results[0]?.results[0]?.feature;
          getIntersectingStreets(
            (results?.results[0]?.source as __esri.LayerSearchSource).layer as __esri.FeatureLayer,
            results?.results[0]?.results[0]?.feature.geometry,
          ).then((graphics: __esri.Graphic[]) => {
            setIntersections(graphics);
            intersectionRef.current = graphics;
          });
        } else {
          results.results[0].results.forEach((result) => {
            feature.graphic = result.feature;
            addGraphics(props.view, result.feature.geometry);
          });
        }
      }),
    );
    handles.push(
      search.allSources.on('after-add', (event: any) => {
        if ((event.item as any).layer) {
          const item: __esri.LayerSearchSource = event.item as __esri.LayerSearchSource;
          item.name = (event.item as any).layer.title;
          item.placeholder = (event.item as any).layer.title;
        }
        if ((event.item as any).locator && event.item.name.includes('World Geocoding')) {
          search.allSources.remove(event.item);
        }
      }),
    );
    combobox.current?.addEventListener('calciteComboboxItemChange', (event: any) => {
      setTimeout(() => {
        intersectionSelected(
          parseInt(event.detail.value),
          intersectionRef.current,
          selectedStreet.current as __esri.Graphic,
          props.view,
        );
      });
    });
    return () => {
      handles.forEach((handle) => {
        handle.remove();
      });
      feature && feature.destroy();
      search && search.destroy();
    };
  }, [props.view]); // only after initial render
  return (
    <div className="panel">
      <div className="flex">
        <div ref={ref}></div>
        <calcite-action
          icon="trash"
          scale="s"
          onClick={() => {
            searchRef.current?.clear();
            removeGraphics(props.view);
            if (featureWidgetRef.current) {
              featureWidgetRef.current.graphic = new Graphic();
            }
          }}
        ></calcite-action>
      </div>

      <calcite-combobox
        id="intersections"
        ref={combobox}
        label="Intersections"
        placeholder="Select intersecting street"
        selection-mode="single"
        hidden={intersections.length === 0 ? '' : null}
        max-items="10"
      >
        {intersections.map((intersection: __esri.Graphic) => {
          return (
            <calcite-combobox-item
              key={intersection.getObjectId()}
              value={intersection.getObjectId()}
              text-label={intersection.getAttribute('CARTONAME')}
              afterCreate={(item: HTMLCalciteComboboxItemElement) => {
                item.addEventListener('calciteComboboxItemChange', (event) => {
                  console.log(event);
                });
              }}
            ></calcite-combobox-item>
          );
        })}
      </calcite-combobox>
      <div ref={featureRef}></div>
    </div>
  );
};

export default LocationSearch;
