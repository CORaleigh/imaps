/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useRef, useState } from 'react';
import SearchWidget from '@arcgis/core/widgets/Search';
import Feature from '@arcgis/core/widgets/Feature';
import './LocationSearch.scss';
import { addIntersectionSource, getIntersectingStreets, intersectionSelected } from './utils/location';
import Graphic from '@arcgis/core/Graphic';
export const LocationSearch = (props: any) => {
  const ref = useRef<HTMLDivElement>(null);
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

    addIntersectionSource().then((source) => {
      search.sources.add(source);
    });
    const feature = new Feature({ view: props.view, container: featureRef.current as HTMLDivElement });
    handles.push(
      search.on('search-complete', (results) => {
        setIntersections([]);
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
          });
        }
      }),
    );
    handles.push(
      search.allSources.on('after-add', (event: any) => {
        if ((event.item as any).layer) {
          event.item.name = (event.item as any).layer.title;
          event.item.placeholder = (event.item as any).layer.title;
        }
        if ((event.item as any).locator) {
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
      <div ref={ref}></div>
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
