/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useRef } from 'react';
import SearchWidget from '@arcgis/core/widgets/Search';
import Feature from '@arcgis/core/widgets/Feature';

export const LocationSearch = (props: any) => {
    const ref = useRef<HTMLDivElement>(null);
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
        const feature = new Feature({ view: props.view, container: featureRef.current as HTMLDivElement });
        handles.push(
            search.on('search-complete', (results) => {
                results.results[0].results.forEach((result) => {
                    feature.graphic = result.feature;
                });
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
            <div ref={featureRef}></div>
        </div>
    );
};
