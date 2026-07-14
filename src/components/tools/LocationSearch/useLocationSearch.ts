// hooks/useShell.ts
import { useRef, useEffect, useState } from "react";
import LocatorSearchSource from "@arcgis/core/widgets/Search/LocatorSearchSource.js";
import PictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol";
import LayerSearchSource from "@arcgis/core/widgets/Search/LayerSearchSource";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import * as intersectionOperator from "@arcgis/core/geometry/operators/intersectionOperator.js";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import Color from "@arcgis/core/Color";
import type { GoToOverride } from "@arcgis/core/widgets/support/types";

export interface UseLocationSearchProps {
  showIntersection: boolean;
  intersectingStreets: Graphic[];
  handleSearchReady: (event: HTMLArcgisSearchElement["arcgisReady"]) => void;
  handleSelectResult: (
    event: HTMLArcgisSearchElement["arcgisSelectResult"],
  ) => void;
  handleSearchClear: (
    event: HTMLArcgisSearchElement["arcgisSearchClear"],
  ) => void;
  handleIntersectingStreetChange: (
    event: HTMLCalciteComboboxElement["calciteComboboxChange"],
  ) => void;
  goToOverride: GoToOverride;
}

export const useLocationSearch = (
  mapElement: React.RefObject<HTMLArcgisMapElement>,
  closed: boolean,
): UseLocationSearchProps => {
  const initializedRef = useRef(false);
  const [showIntersection, setShowIntersection] = useState<boolean>(false);
  const [intersectingStreets, setIntersectingStreets] = useState<Graphic[]>([]);
  const intersectionLayer = useRef<FeatureLayer>(undefined);
  const selectedStreet = useRef<Graphic>(undefined);
  const graphicsLayer = useRef<GraphicsLayer>(undefined);

  const marker: PictureMarkerSymbol = new PictureMarkerSymbol({
    url: "pin.svg",
    height: 20,
    width: 20,
  });
  const fill: SimpleFillSymbol = new SimpleFillSymbol({
    style: "solid",
    color: Color.fromArray([
      mapElement.current.highlights.at(0)!.color.r,
      mapElement.current.highlights.at(0)!.color.g,
      mapElement.current.highlights.at(0)!.color.b,
      mapElement.current.highlights.at(0)!.fillOpacity,
    ]),
    outline: {
      color: mapElement.current.highlights.at(0)?.color,
      width: 1,
    },
  });
  const addGeocodingSource = async (searchElement: HTMLArcgisSearchElement) => {
    const params = new URLSearchParams(window.location.search);
    const app = params.get("app") ?? "config";
    const config = await fetch(`${app}.json`);
    const data = await config.json();
    if (data.geocodeUrl) {
      const geocodeUrl = data.geocodeUrl;
      searchElement.sources.add(
        new LocatorSearchSource({
          name: "Street Address",
          placeholder: "Enter an address",
          url: geocodeUrl,
          autoNavigate: true,
          resultSymbol: marker,
        }),
      );
    }
  };

  const addIntersectionSource = async (
    searchElement: HTMLArcgisSearchElement,
  ) => {
    const params = new URLSearchParams(window.location.search);
    const app = params.get("app") ?? "config";
    const config = await fetch(`${app}.json`);
    const data = await config.json();
    if (data.intersectionItem) {
      intersectionLayer.current = new FeatureLayer({
        portalItem: {
          id: data.intersectionItem,
        },
        title: "Intersection",
        layerId: 0,
      });
      await intersectionLayer.current.load();
      const source = new LayerSearchSource({
        name: "Intersection",
        placeholder: "Enter first street name",
        layer: intersectionLayer.current,
        autoNavigate: false,
        resultGraphicEnabled: false,
        popupEnabled: false,
      });
      searchElement.sources.add(source);
    }
  };

  const handleSearchReady = (event: HTMLArcgisSearchElement["arcgisReady"]) => {
    event.target.sources = event.target.allSources.filter((source) => {
      source.name = source.name.split(":")[0];
      source.resultSymbol = marker;
      return source.name !== "ArcGIS World Geocoding Service";
    });
    event.target.includeDefaultSourcesDisabled = true;
    addGeocodingSource(event.target);
    addIntersectionSource(event.target);
  };

  const handleSelectResult = async (
    event: HTMLArcgisSearchElement["arcgisSelectResult"],
  ) => {
    const source = event.detail.source.name;
    setShowIntersection(source === "Intersection");
    if (!intersectionLayer.current) return;
    if (source === "Intersection") {
      selectedStreet.current = event.detail.result.feature;
      const result = await intersectionLayer.current.queryFeatures({
        where: `CARTONAME <> '${event.detail.result.feature.getAttribute(
          "CARTONAME",
        )}'`,
        geometry: event.detail.result.feature.geometry,
        outFields: ["CARTONAME"],
        returnGeometry: true,
        orderByFields: ["CARTONAME"],
      });
      setIntersectingStreets(() => [...result.features]);
    } else {
      graphicsLayer.current?.removeAll();
      const geometry = event.detail.result.feature.geometry;
      graphicsLayer.current?.add(
        new Graphic({
          geometry: event.detail.result.feature.geometry,
          symbol: geometry?.type === "point" ? marker : fill,
        }),
      );
    }
  };

  const handleIntersectingStreetChange = (
    event: HTMLCalciteComboboxElement["calciteComboboxChange"],
  ) => {
    if (
      !selectedStreet.current?.geometry ||
      event.target.selectedItems.length === 0
    )
      return;

    const intersection = intersectionOperator.executeMany(
      [event.target.selectedItems.at(0)?.value.geometry],
      selectedStreet.current.geometry,
    );
    if (intersection.length) {
      mapElement.current.goTo({ target: intersection.at(0), zoom: 18 });
      graphicsLayer.current?.removeAll();
      graphicsLayer.current?.add(
        new Graphic({ geometry: intersection.at(0), symbol: marker }),
      );
    }
  };

  const handleSearchClear = () => {
    setShowIntersection(false);
    selectedStreet.current = undefined;
    graphicsLayer.current?.removeAll();
  };
  const goToOverride: GoToOverride = (view, goToParams) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const target: Graphic = (goToParams.target as any).target as Graphic;
    const params = target.geometry?.type === "point" ? {target: target.geometry, zoom: 18} : {target: target.geometry?.extent?.expand(1.5)};
    
    return view.goTo(params);
  };
  useEffect(() => {
    if (!mapElement.current || initializedRef.current) return;
    initializedRef.current = true;
    graphicsLayer.current = new GraphicsLayer({
      id: "location-graphics",
      listMode: "hide",
    });
    mapElement.current.map?.add(graphicsLayer.current);
  }, [mapElement]);

  useEffect(() => {
    if (closed) {
      graphicsLayer.current?.removeAll();
    }
  }, [closed]);

  return {
    showIntersection,
    intersectingStreets,
    handleSearchReady,
    handleSelectResult,
    handleSearchClear,
    handleIntersectingStreetChange,
    goToOverride,
  };
};
