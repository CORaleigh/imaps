import PortalBasemapsSource from "@arcgis/core/widgets/BasemapGallery/support/PortalBasemapsSource.js";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type RefObject,
} from "react";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils.js";
import * as intersectsOperator from "@arcgis/core/geometry/operators/intersectsOperator.js";
import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer";
import { raleighBoundary } from "./boundary";
import { useMap } from "../../../context/useMap";
import type Basemap from "@arcgis/core/Basemap";

export interface UseBasemapsProps {
  mapsSource: PortalBasemapsSource;
  imageSource: PortalBasemapsSource;
  mapsGallery: RefObject<HTMLArcgisBasemapGalleryElement | null>;
  imagesGallery: RefObject<HTMLArcgisBasemapGalleryElement | null>;
  esriGallery: RefObject<HTMLArcgisBasemapGalleryElement | null>;
  selectedTab: "basemap" | "images" | "esri";
  blendSlider: RefObject<HTMLCalciteSliderElement | null>;
  handleGalleryReady: (
    event: HTMLArcgisBasemapGalleryElement["arcgisReady"],
  ) => void;
  handleTabChange: (
    event: HTMLCalciteTabNavElement["calciteTabChange"],
  ) => void;
  handleBlendChange: (
    event: HTMLCalciteSwitchElement["calciteSwitchChange"],
  ) => void;
  handleSliderInput: (
    event: HTMLCalciteSliderElement["calciteSliderInput"],
  ) => void;
  handleGalleryChange: (
    event: HTMLArcgisBasemapGalleryElement["arcgisPropertyChange"],
  ) => void;
  blendEnabled: boolean;
  showBlendOption: boolean;
}

export const useBasemaps = (
  mapElement: React.RefObject<HTMLArcgisMapElement>,
): UseBasemapsProps => {
  const initializedRef = useRef(false);
  const mapsGallery = useRef<HTMLArcgisBasemapGalleryElement>(null);
  const imagesGallery = useRef<HTMLArcgisBasemapGalleryElement>(null);
  const esriGallery = useRef<HTMLArcgisBasemapGalleryElement>(null);
  const blendSlider = useRef<HTMLCalciteSliderElement>(null);
  const wasInRaleigh = useRef<boolean>(false);
  const blendLayer = useRef<VectorTileLayer | null>(null);

  const [selectedTab, setSelectedTab] = useState<"basemap" | "images" | "esri">(
    "basemap",
  );
  const { setAlert } = useMap();

  const [blendEnabled, setBlendEnabled] = useState(false);
  const [showBlendOption, setShowBlendOption] = useState(false);
  const mapsSource = useMemo(
    () =>
      new PortalBasemapsSource({
        portal: { url: "https://ral.maps.arcgis.com" },
        query: "id: f6329364e80c438a958ce74aadc3a89f",
      }),
    [],
  );
  const imageSource = useMemo(
    () =>
      new PortalBasemapsSource({
        portal: {
          url: "https://ral.maps.arcgis.com",
        },
        query: "id: 492386759d264d49948bf7f83957ddb9",
        filterFunction: async (item: Basemap) => {
          await item.load();
          if (item.portalItem?.tags?.includes("countywide")) return true;
          const inRaleigh = intersectsOperator.execute(
            raleighBoundary,
            mapElement.current.extent,
          );
          return inRaleigh;
        },
        updateBasemapsCallback: (items: Basemap[]) => {
          return items.reverse();
        },
      }),
    [mapElement],
  );

  const handleGalleryReady = async (
    event: HTMLArcgisBasemapGalleryElement["arcgisReady"],
  ) => {
    const gallery = event.target;
    await reactiveUtils.whenOnce(
      () => gallery.source.basemaps.length > 0,
    );

    const selected = gallery.source.basemaps.find(
      (basemap) =>
        basemap.portalItem?.title === mapElement.current.map?.basemap?.title,
    );
    
    if (selected) {
      gallery.activeBasemap = selected;
      if (gallery.source === imageSource) {
        setSelectedTab("images");
      }
      if (gallery.source === esriGallery.current?.source) {
        setSelectedTab("esri");
      }
    }
  };

  const refreshImageBasemaps = async () => {
    if (imagesGallery.current?.source instanceof PortalBasemapsSource) {
      await imagesGallery.current?.source.refresh();
    }
  };

  const imageBasemapSelected = (
    source: PortalBasemapsSource,
    activeBasemap: Basemap,
  ) => {
    return (
      source.basemaps.find(
        (b) => b.portalItem?.title === activeBasemap.portalItem?.title,
      ) !== undefined
    );
  };
  const handleTabChange = async (
    event: HTMLCalciteTabNavElement["calciteTabChange"],
  ) => {
    if (!imagesGallery.current) return;
    const active = imagesGallery.current?.activeBasemap;

    setShowBlendOption(
      !!active &&
        imagesGallery.current?.source?.basemaps?.some(
          (bm: Basemap) => bm.title === active,
        ),
    );
    setSelectedTab(
      event.target.selectedTitle.getAttribute("label") as
        | "basemap"
        | "images"
        | "esri",
    );
    if (
      event.target.selectedTitle.getAttribute("label") === "images" &&
      imagesGallery.current.source instanceof PortalBasemapsSource
    ) {
      await refreshImageBasemaps();
    }
  };
  const handleBlendChange = useCallback(
    (event: HTMLCalciteSwitchElement["calciteSwitchChange"]) => {
      if (!blendSlider.current) return;
      const checked = event.target.checked;
        setBlendEnabled(prev => !prev);
      

      const view = mapElement.current?.view;
      if (!view) return;

      // TURN BLEND ON
      if (checked) {
        if (!blendLayer.current) {
          blendLayer.current = new VectorTileLayer({
            portalItem: { id: "02d50d24991747538e218e0a5806e9b3" },
            opacity: ((blendSlider.current.value as number) / 100) as number,
          });
        }

        mapElement.current.view.map?.basemap?.baseLayers.add(
          blendLayer.current,
        );
      }

      // TURN BLEND OFF
      else {
        if (blendLayer.current) {
          mapElement.current.view.map?.basemap?.baseLayers.remove(
            blendLayer.current,
          );
        }
      }
    },
    [mapElement],
  );

  const handleGalleryChange = useCallback(
    () => {
      if (blendLayer.current) {
        mapElement.current.view.map?.basemap?.baseLayers.remove(
          blendLayer.current,
        );
        setBlendEnabled(prev => !prev);
      }
      setShowBlendOption(!!imagesGallery.current?.activeBasemap);
    },
    [mapElement],
  );
  const handleSliderInput = useCallback(
    (event: HTMLCalciteSliderElement["calciteSliderInput"]) => {
      if (blendLayer.current) {
        blendLayer.current.opacity =
          (event.currentTarget.value as number) / 100;
      }
    },
    [],
  );

  useEffect(() => {
    if (!mapElement.current || initializedRef.current) return;
    // Initialize basemap logic only once
    initializedRef.current = true;
    reactiveUtils.watch(
      () => mapElement.current.stationary,
      async (stationary) => {
        if (!imagesGallery.current) return;
        if (stationary) {
    
          const isImageSelected = imageBasemapSelected(
            imagesGallery.current.source as PortalBasemapsSource,
            mapElement.current.basemap as Basemap,
          );
          const inRaleigh = intersectsOperator.execute(
            raleighBoundary,
            mapElement.current.extent,
          );

          if (wasInRaleigh.current === inRaleigh) {
            wasInRaleigh.current = inRaleigh;
            return;
          }
          wasInRaleigh.current = inRaleigh;
          await refreshImageBasemaps();

          const countywide = (
            imagesGallery.current.activeBasemap as Basemap
          ).portalItem?.tags?.includes("countywide");
          if (!inRaleigh && !countywide && isImageSelected) {
            imagesGallery.current.activeBasemap =
              imagesGallery.current.source.basemaps.at(0);

            setAlert({
              show: true,
              message: `Map extent outside of Raleigh, switching to latest county imagery (${imagesGallery.current.activeBasemap?.portalItem?.title})`,
              id: Date.now(),
              title: "Basemap Not Available",
              autoCloseDuration: "fast",
              autoClose: true,
              kind: "warning",
              icon: "image-layer",
            });
          }
        }
      },
    );
    //return () => handle.remove(); // cleanup
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapElement]);

  return {
    mapsSource,
    imageSource,
    mapsGallery,
    imagesGallery,
    esriGallery,
    selectedTab,
    blendSlider,
    handleGalleryReady,
    handleTabChange,
    handleBlendChange,
    handleSliderInput,
    handleGalleryChange,
    blendEnabled,
    showBlendOption,
  };
};
