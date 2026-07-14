import { useCallback, useEffect, useRef, useState } from "react";
import {
  checkPin,
  clearAddressPoints,
  getProperty,
  getSearchSources,
  searchForCondosFromSearch,
  searchRelatedCondos,
  wildcardSearch,
} from "./search";
import { createTableLayer, getTableTemplate } from "./table";
import { useMap } from "../../../context/useMap";
import { createTemplate, getPhotos } from "./popupTemplate/popupTemplate";
import Collection from "@arcgis/core/core/Collection";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils.js";
import { executeArcade } from "./popupTemplate/popupContent";
import { arcadeExpressionInfos } from "./popupTemplate/arcadeExpressions";
import { getTableByTitle } from "../../../utils/layerHelper";
import { updateClusters } from "./clusterLayer";
import type Graphic from "@arcgis/core/Graphic";

import type Layer from "@arcgis/core/layers/Layer";
import type { ObjectId } from "@arcgis/core/views/types";
import type { ResourceHandle } from "@arcgis/core/core/Handles";

export interface UsePropertySearchProps {
  mapElement: React.RefObject<HTMLArcgisMapElement>;
  tableElement: React.RefObject<HTMLArcgisFeatureTableElement>;
  addressTableElement: React.RefObject<HTMLArcgisFeatureTableElement>;
  searchElement: React.RefObject<HTMLArcgisSearchElement>;
  siteAddress: string;
  selectedTab: "list" | "info";
  selectedCondo: Graphic | null;
  condos: Graphic[];
  webMapId: React.RefObject<string>;
  handleSearchReady: (event: HTMLArcgisSearchElement["arcgisReady"]) => void;
  handleTableReady: (
    event: HTMLArcgisFeatureTableElement["arcgisReady"],
  ) => void;
  handleSearchComplete: (
    event: HTMLArcgisSearchElement["arcgisSearchComplete"],
  ) => void;
  handleTableCellClick: (
    event: HTMLArcgisFeatureTableElement["arcgisCellClick"],
  ) => void;
  handleTabChange: (
    event: HTMLCalciteTabNavElement["calciteTabChange"],
  ) => void;
  handleClearClick: () => void;
  handleHistoryClick: (
    event: React.MouseEvent<HTMLCalciteListItemElement>,
  ) => void;
  handleExport: () => void;
  handleExportAddresses: () => void;
  handleSuggestStart: (
    event: HTMLArcgisSearchElement["arcgisSuggestStart"],
  ) => void;
  handleNextPropertySelected: (feature: Graphic) => void;
  handleTabClick: () => void;
}

export const usePropertySearch = (
  mapElement: React.RefObject<HTMLArcgisMapElement>,
): UsePropertySearchProps => {
  const initializedRef = useRef(false);
  const tableElement = useRef<HTMLArcgisFeatureTableElement>(null!);
  const addressTableElement = useRef<HTMLArcgisFeatureTableElement>(null!);
  const searchElement = useRef<HTMLArcgisSearchElement>(null!);
  const tableLayerRef = useRef<FeatureLayer>(undefined);
  const highlightHandle = useRef<ResourceHandle | null>(null);

  const {
    condos,
    setCondos,
    selectedCondo,
    setSelectedCondo,
    geometry,
    webMapId,
    setGeometry,
    setSearchReady,
  } = useMap();

  const [siteAddress, setSiteAddress] = useState<string>("");

  const [selectedTab, setSelectedTab] = useState<"list" | "info">("list");
  const handleSearchReady = async (
    event: HTMLArcgisSearchElement["arcgisReady"],
  ) => {
    if (!mapElement.current) return;
    await mapElement.current.view.when();

    const sources = await getSearchSources(mapElement.current, event.target);
    if (!sources) return;
    event.target.sources = sources;
    const params = new URLSearchParams(window.location.search);
    const pin = params.get("pin");
    const search = params.get("search");
    if (!pin && search) {
      event.target.search(search);
    }

    setTimeout(() => {
      const input = searchElement.current.shadowRoot
        ?.querySelector("calcite-autocomplete")
        ?.shadowRoot?.querySelector("calcite-input")
        ?.shadowRoot?.querySelector("input");
      if (input) {
        input.style.fontSize = "16px";
        searchElement.current.allPlaceholder = "Address, owner, PIN or REID";
      }
    }, 500);
  };

  const handleTableReady = useCallback(
    async (event: HTMLArcgisFeatureTableElement["arcgisReady"]) => {
      await reactiveUtils.whenOnce(() => mapElement.current.view.ready);
      event.target.tableTitle = `0 properties selected`;
      event.target.highlightDisabled = true;
      event.target.noDataMessage = "";
      const layer = await createTableLayer(mapElement.current);
      if (!layer) return;
      event.target.layer = layer;
      tableLayerRef.current = layer;
      event.target.tableTemplate = getTableTemplate(layer, webMapId.current);
      const grid =
        event.target.shadowRoot?.querySelector(".esri-grid__grid")?.shadowRoot;
      const style = document.createElement("style");
      style.textContent = `
        [part~="body-cell"] {
          white-space: normal !important;
          overflow-wrap: anywhere !important;
          max-width: 150px;
        }

        [part~="header-cell"] {
          max-width: 150px;
        }         
      `;
      const layerView = await mapElement.current.whenLayerView(layer);
      event.target.highlightIds.on("change", () => {
        highlightHandle.current?.remove();

        if (event.target.highlightIds.length > 0) {
          highlightHandle.current = layerView.highlight(
            event.target.highlightIds.toArray(),
            { name: "property-highlight" }, // your custom color
          );
        }
      });
      if (grid) grid.appendChild(style);
      await mapElement.current.whenLayerView(tableLayerRef.current);
      setSearchReady(true);
      reactiveUtils.watch(
        () => tableElement.current?.visibleColumns,
        (columns) => {
          if (!columns) return;
          localStorage.setItem(
            `imaps_${webMapId.current}_visibleColumns`,
            JSON.stringify(columns.map((column) => column.fieldName)),
          );
        },
      );
    },
    [mapElement, setSearchReady, webMapId],
  );

  const handleTableCellClick = async (
    event: HTMLArcgisFeatureTableElement["arcgisCellClick"],
  ) => {
    if (event.detail.feature) {
      tableElement.current.highlightIds = new Collection([
        event.detail.feature.getObjectId() as ObjectId,
      ]);
      const feature = event.detail.feature.clone();
      const propertyLayer = mapElement.current.map?.allLayers.find(
        (layer: Layer) =>
          layer.title === "Property" && layer.type === "feature",
      ) as FeatureLayer;
      if (propertyLayer) {
        const results = await propertyLayer.queryFeatures({
          where: `PIN_NUM = '${feature.getAttribute("PIN_NUM")}'`,
          returnGeometry: true,
          outFields: ["*"],
        });
        if (results.features.length) {
          feature.geometry = results.features[0].geometry;
        }
        const condoTable = getTableByTitle(mapElement.current, "Condos");
        if (condoTable) {
          feature.layer = condoTable as FeatureLayer;
        }
        setSelectedTab("info");
        updateFeature(feature);
      }
    }
  };

  const handleSearchComplete = async (
    event: HTMLArcgisSearchElement["arcgisSearchComplete"],
  ) => {
    if (mapElement.current) {
      if (event.detail.numResults === 0) {
        if (event.detail.searchTerm.length > 2) {
          const searchFields: string[] = [
            "SITE_ADDRESS",
            "OWNER",
            "FULL_STREET_NAME",
            "PIN_NUM",
            "REID",
          ];
          const results = await wildcardSearch(
            mapElement.current,
            searchElement.current,
            searchFields,
            event.detail.searchTerm,
          );

          setCondos(results);
          return results;
        } 
      }
      const condos = await searchForCondosFromSearch(
        event,
        searchElement.current,
        mapElement.current,
        webMapId.current,
      );
      setCondos(condos);

      //addRecentSearch(arcgisSearch.current?.searchTerm);
    }
  };

  const handleTabClick = useCallback(() => {
    setSelectedTab("list");
  }, []);

  const handleTabChange = useCallback(
    (event: HTMLCalciteTabNavElement["calciteTabChange"]) => {
      setSelectedTab(
        event.target.selectedTitle?.getAttribute("label") === "list"
          ? "list"
          : "info",
      );
    },
    [],
  );

  const handleExport = async () => {
    tableElement.current.highlightIds = new Collection(
      await tableLayerRef.current?.queryObjectIds({ where: "1=1" }),
    );
    tableElement.current.exportSelectionToCSV(false);

    tableElement.current.highlightIds = new Collection([]);
  };

  const handleExportAddresses = async () => {
    addressTableElement.current.highlightIds = new Collection(
      await addressTableElement.current.layer?.queryObjectIds({
        geometry: addressTableElement.current.filterGeometry,
      }),
    );
    addressTableElement.current.exportSelectionToCSV(false);
    addressTableElement.current.highlightIds = new Collection([]);
  };

  const handleSuggestStart = (
    event: HTMLArcgisSearchElement["arcgisSuggestStart"],
  ) => {
    event.target.searchTerm = checkPin(event.target.searchTerm);
  };

  const updateFeature = useCallback(
    async (feature: Graphic) => {
      setSelectedTab("info");
      //check to see if the feature is coming from clicking on the list
      const tableLayer = tableLayerRef.current as FeatureLayer;
      const updates = await tableLayer.queryFeatures({
        where: `1=1`,
        outFields: ["*"],
        returnGeometry: true,
      });
      const selectedFeatures = updates?.features.filter(
        (selectedFeature: Graphic) =>
          selectedFeature.attributes["selected"] === "yes",
      );
      selectedFeatures?.forEach((selectedFeature: Graphic) => {
        selectedFeature.setAttribute("selected", "no");
      });

      await tableLayer?.applyEdits({ updateFeatures: selectedFeatures });

      feature.setAttribute("selected", "yes");
      feature.setAttribute("OID", feature.getObjectId());

      await tableLayer?.applyEdits({ updateFeatures: [feature] });
      await tableLayer?.refresh();

      if (!(feature.layer as FeatureLayer).isTable) {
        const condoTable = getTableByTitle(
          mapElement.current,
          "Condos",
        ) as FeatureLayer;
        const condos = await condoTable.queryFeatures({
          where: `REID = '${feature.getAttribute("REID")}'`,
          outFields: ["OBJECTID"],
          returnGeometry: true,
        });
        if (condos.features.length) {
          feature = condos.features[0];
          feature.geometry = geometry;
        }
      }
      const photos = await getPhotos(feature, mapElement.current);

      feature.popupTemplate = createTemplate(
        mapElement.current,
        feature,
        photos,
      );
      clearAddressPoints(mapElement.current);
      if (!feature.geometry) {
        const property = await getProperty(
          mapElement.current,
          [feature.getObjectId() as number],
          undefined,
        );
        tableLayerRef.current?.refresh();
        if (property.length) {
          feature.geometry = property[0].geometry;
        }
      }
      if (feature.geometry !== null && geometry === null) {
        mapElement.current?.goTo({
          target: feature.geometry?.extent?.clone()?.expand(2),
        });
      }

      setSelectedCondo(feature);
      setGeometry(null);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [geometry],
  );

  const handleClearClick = () => {
    setSelectedCondo(null);
    setCondos([]);
    setSelectedTab("list");
    const params = new URLSearchParams(window.location.search);
    params.delete("pin");
    const query = params.toString();
    window.history.replaceState(
      {},
      "",
      query ? `${window.location.pathname}?${query}` : window.location.pathname,
    );
  };

  const handleHistoryClick = (
    event: React.MouseEvent<HTMLCalciteListItemElement>,
  ) => {
    if (!searchElement.current) return;
    searchElement.current.search(event.currentTarget.label);
  };

  const handleNextPropertySelected = (feature: Graphic) => {
    updateFeature(feature);
  };
  useEffect(() => {
    if (!mapElement.current || initializedRef.current) return;
    initializedRef.current = true;
  }, [mapElement]);

  useEffect(() => {
    if (geometry && mapElement) {
      const getPropertyByGeometry = async () => {
        const results = await getProperty(
          mapElement.current,
          undefined,
          geometry,
        );

        if (results.length) {
          const oids = results.map((result) =>
            result.getObjectId(),
          ) as number[];
          const layer = results[0].layer as FeatureLayer;
          const data = await searchRelatedCondos(
            oids,
            layer,
            "PROPERTY_CONDO",
            mapElement.current,
          );
          setCondos(data);
        }
      };
      getPropertyByGeometry();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [geometry]);

  useEffect(() => {
    if (!condos || !tableLayerRef.current) return;

    //condosSelected(condos);
    const updateTableLayer = async () => {
      const deletes = await (
        tableLayerRef.current as FeatureLayer
      ).queryFeatures({ where: "1=1" });
      await (tableLayerRef.current as FeatureLayer).applyEdits({
        deleteFeatures: deletes.features,
      });
      (tableLayerRef.current as FeatureLayer).refresh();
      condos.forEach((condo: Graphic) => {
        condos[0].setAttribute("OID", condos[0].getObjectId());
        condo.setAttribute("selected", "no");
      });
      if (condos.length === 1) {
        condos[0].setAttribute("selected", "yes");
      }

      await (tableLayerRef.current as FeatureLayer).applyEdits({
        addFeatures: condos,
      });
      updateClusters(condos, mapElement.current);
      tableElement.current?.refresh();
    };
    updateTableLayer();
    if (condos.length === 1) {
      updateFeature(condos[0]);
      setSelectedTab("info");
    }
    if (condos.length > 1) {
      setSelectedCondo(null);
      clearAddressPoints(mapElement.current);
      setSelectedTab("list");
    }

    tableElement.current.tableTitle = `${
      condos.length
    } ${condos.length === 1 ? "property" : "properties"} selected`;

    //onPropertiesSelected(condos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [condos]);
  useEffect(() => {
    (async () => {
      if (!selectedCondo) return;
      const arcade = arcadeExpressionInfos.find((info) => {
        return info.title === "site-address";
      })?.expression;
      if (!arcade) return;
      const address = await executeArcade(arcade, selectedCondo);
      setSiteAddress(address as string);
    })();
  }, [mapElement, selectedCondo]);

  return {
    mapElement,
    tableElement,
    addressTableElement,
    searchElement,
    siteAddress,
    selectedTab,
    selectedCondo,
    condos,
    webMapId,
    handleSearchReady,
    handleSearchComplete,
    handleTableReady,
    handleTableCellClick,
    handleTabChange,
    handleClearClick,
    handleHistoryClick,
    handleExport,
    handleExportAddresses,
    handleSuggestStart,
    handleNextPropertySelected,
    handleTabClick,
  };
};
