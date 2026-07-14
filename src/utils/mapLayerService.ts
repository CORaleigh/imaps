// src/utils/mapLayerService.ts
import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
import Layer from "@arcgis/core/layers/Layer";
import GroupLayer from "@arcgis/core/layers/GroupLayer";
import MapImageLayer from "@arcgis/core/layers/MapImageLayer";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils.js";
import type FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import type SearchLayer from "@arcgis/core/webdoc/applicationProperties/SearchLayer";

export interface LayerPersist {
  id: string;
  visible: boolean;
  opacity: number;
  type: string;
  sublayers?: {
    id: number | string;
    visible: boolean;
    opacity?: number;
  }[];
}

export interface PersistState {
  layers: LayerPersist[];
}

class LayerService {
  view: MapView | null = null;
  map: WebMap | null = null;
  webmapTemplate: WebMap | null = null;
  persistKey = "imaps_<webmap id>_layerVisibility";

  REQUIRED_LAYER_TITLES = ["Property"]; // adjust as needed

  // Cache for persisted state to avoid repeated parsing
  private persistedStateCache: Map<string, boolean> | null = null;

  attachView(view: MapView) {
    this.view = view;
  }

  async loadWebMap(id: string) {
    const webmap = new WebMap({ portalItem: { id } });
    await webmap.load();
    this.map = webmap;
    return webmap;
  }

  // Helper to get/create persisted state cache
  private getPersistedStateCache(): Map<string, boolean> {
    if (this.persistedStateCache) return this.persistedStateCache;

    const raw = localStorage.getItem(this.persistKey);
    const persisted: PersistState = raw ? JSON.parse(raw) : { layers: [] };

    this.persistedStateCache = new Map(
      persisted.layers.map((l) => [l.id, l.visible]),
    );

    return this.persistedStateCache;
  }

  private clearPersistedCache() {
    this.persistedStateCache = null;
  }

  async createWebMapWithRequiredAndPersisted(
    id: string,
  ): Promise<{ webmap: WebMap; webmapTemplate: WebMap }> {
    this.persistKey = `imaps_${id}_layerVisibility`;
    this.clearPersistedCache();

    this.webmapTemplate = new WebMap({ portalItem: { id } });
    await this.webmapTemplate.load();

    const storedBookmarks = localStorage.getItem(`imaps_${id}_bookmarks`);
    const bookmarks = storedBookmarks
      ? JSON.parse(storedBookmarks)
      : this.webmapTemplate.bookmarks;

    const webmap = new WebMap({
      basemap: this.webmapTemplate.basemap,
      initialViewProperties: this.webmapTemplate.initialViewProperties,
      bookmarks: bookmarks,
      applicationProperties: this.webmapTemplate.applicationProperties,
    });
    this.map = webmap;

    const urlParams = new URLSearchParams(window.location.search);
    const layersParam = urlParams.get("layers");

    // Parse it into an array, trimming spaces from each layer
    const urlLayers = layersParam
      ? layersParam.split(",").map((layer) => layer.trim())
      : [];

    const inUrl = (title: string) => urlLayers.includes(title);
    const stateCache = this.getPersistedStateCache();
    const isVisibleLastSession = (title: string) =>
      stateCache.get(title) === true;
    const isRequired = (title: string) =>
      this.REQUIRED_LAYER_TITLES.includes(title);
    const searchIds =
      this.webmapTemplate.applicationProperties?.viewing?.search?.layers
        .toArray()
        .map((layer: SearchLayer) => layer.id);
    const isSearchable = (id: string) => searchIds?.includes(id);

    // Add top-level layers: required or persisted-visible only
    const addLayerRecursive = (
      layer: Layer,
      parent: WebMap | GroupLayer,
      parentVisible: boolean,
    ): boolean => {
      if (layer.type === "group") {
        const groupLayer = layer as GroupLayer;
        const newGroup = new GroupLayer({
          title: groupLayer.title,
          id: groupLayer.id,
          opacity: groupLayer.opacity,
          visible: groupLayer.visible,
        });

        let anyChildAdded = false;

        // Add children in template order if required or persisted-visible
        for (const child of groupLayer.layers.toArray()) {
          const title = child.title || "";
          // const shouldDisplay =
          //  isRequired(title) || isVisibleLastSession(title) || inUrl(title) || (layer.visible && parentVisible);
          const shouldAdd =
            isRequired(title) ||
            isVisibleLastSession(title) ||
            isSearchable(child.id) ||
            inUrl(title) ||
            (layer.visible && parentVisible);

          if (child.type === "group") {
            if (
              addLayerRecursive(
                child,
                newGroup,
                (child.parent as GroupLayer).visible,
              )
            ) {
              anyChildAdded = true;
            }
          } else if (shouldAdd) {
            newGroup.layers.add(child);
            ///child.visible = shouldDisplay;
            anyChildAdded = true;
          }
        }

        if (anyChildAdded) {
          parent.layers.add(newGroup);
          return true;
        }
        return false;
      }

      // Leaf layers outside groups
      const title = layer.title || "";
      const shouldAdd =
        isRequired(title) ||
        isVisibleLastSession(title) ||
        isSearchable(layer.id);

      if (shouldAdd) {
        parent.layers.add(layer);
        layer.visible = shouldAdd;
        return true;
      }

      return false;
    };

    // Use for loop instead of forEach for potential early exit
    for (const layer of this.webmapTemplate.layers.toArray()) {
      addLayerRecursive(layer, webmap, (layer.parent as GroupLayer).visible);
    }

    // Add tables - use Set for faster lookup
    const existingTableTitles = new Set(
      webmap.tables.toArray().map((t) => t.title),
    );
    for (const table of this.webmapTemplate.tables.toArray()) {
      if (!existingTableTitles.has(table.title)) {
        webmap.tables.add(table);
      }
    }

    if (urlLayers.length > 0) {
      const makeParentsVisible = (layer: Layer) => {
        let current = layer.parent as GroupLayer | null;
        while (current && current.type === "group") {
          current.visible = true;
          current = current.parent as GroupLayer | null;
        }
      };

      // Find all layers that match URL layers and make their parents visible
      webmap.allLayers.forEach((layer) => {
        if (layer.title && inUrl(layer.title)) {
          makeParentsVisible(layer);
        }
      });
    }

    return { webmap, webmapTemplate: this.webmapTemplate };
  }

  /** Adds all missing siblings after the layer list has loaded */
  async addAllMissingSiblingsAfterLayerList() {
    if (!this.map || !this.webmapTemplate) {
      return;
    }

    const stateCache = this.getPersistedStateCache();
    const isVisibleLastSession = (title: string) =>
      stateCache.get(title) === true;

    // Load all group layers in the template to access their children
    const loadAllGroups = async (
      parent: WebMap | GroupLayer,
    ): Promise<void> => {
      const layers = parent.layers.toArray();

      for (const layer of layers) {
        if (layer.type === "group") {
          const groupLayer = layer as GroupLayer;
          await loadAllGroups(groupLayer);
        }
      }
    };

    await loadAllGroups(this.webmapTemplate);

    // PHASE 1: Add all missing layers recursively
    const addMissingLayers = (
      templateLayer: Layer,
      parent: WebMap | GroupLayer,
    ) => {
      // Find existing layer/group in THIS parent
      let existingLayer = parent.layers.find(
        (l) => l.title === templateLayer.title,
      );

      if (!existingLayer) {
        if (templateLayer.type === "group") {
          existingLayer = new GroupLayer({
            title: templateLayer.title,
            id: templateLayer.id,
            opacity: templateLayer.opacity,
            visible: templateLayer.visible,
          });
          parent.layers.add(existingLayer);
        } else {
          // Check if this layer already exists ANYWHERE in the map
          const layerExistsInMap = this.map?.allLayers.find(
            (l) => l.title === templateLayer.title,
          );

          if (layerExistsInMap) {
            // Check if it's already in the correct parent
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const existingParent = (layerExistsInMap as any).parent;
            const targetParentTitle =
              parent instanceof WebMap
                ? "Map"
                : (parent as GroupLayer).title || "Map";
            const existingParentTitle =
              existingParent?.declaredClass === "esri.WebMap"
                ? "Map"
                : existingParent?.title || "Map";

            if (existingParentTitle !== targetParentTitle) {
              console.log(
                `Layer "${templateLayer.title}" exists in "${existingParentTitle}" but template wants it in "${targetParentTitle}", skipping to avoid duplicate`,
              );
              return;
            }

            // Layer exists in correct parent, use it
            existingLayer = layerExistsInMap;
          } else {
            // Layer doesn't exist yet - safe to add from template
            parent.layers.add(templateLayer);
            existingLayer = templateLayer;
          }
        }
      }

      // Handle group children recursively
      if (templateLayer.type === "group") {
        const templateGroup = templateLayer as GroupLayer;
        const existingGroup = existingLayer as GroupLayer;

        for (const childTemplate of templateGroup.layers.toArray()) {
          addMissingLayers(childTemplate, existingGroup);
        }
      }
    };

    // Execute Phase 1: Add all missing layers
    for (const layer of this.webmapTemplate.layers.toArray()) {
      addMissingLayers(layer, this.map);
    }

    // PHASE 2: Reorder from deepest level up to top level
    const reorderRecursive = (currentParent: WebMap | GroupLayer) => {
      const currentLayers = currentParent.layers.toArray();

      // First, recursively reorder all nested groups (depth-first)
      for (const currentLayer of currentLayers) {
        if (currentLayer.type === "group") {
          reorderRecursive(currentLayer as GroupLayer);
        }
      }

      // For top-level only, reorder based on original webmap structure
      if (currentParent instanceof WebMap && this.webmapTemplate) {
        // Get original order from webmapTemplate
        const templateOrder: string[] = [];
        this.webmapTemplate.allLayers.forEach((layer) => {
          // Only include top-level layers (those whose parent is the map)
          const parent = (layer as Layer).parent;
          if (parent && parent.declaredClass === "esri.WebMap") {
            if (!templateOrder.includes(layer.title || "")) {
              templateOrder.push(layer.title || "");
            }
          }
        });

        // Track which layers we've already added to avoid duplicates
        const addedLayers = new Set<Layer>();
        const layersWithoutTitle: Layer[] = [];

        currentLayers.forEach((layer) => {
          if (!layer.title) {
            // Graphics layers or other layers without titles
            layersWithoutTitle.push(layer);
          }
        });

        // Build ordered array following template order
        const orderedTemplateLayers: Layer[] = [];
        for (const templateTitle of templateOrder) {
          // Find ALL layers with this title that haven't been added yet
          const matchingLayers = currentLayers.filter(
            (l) => l.title === templateTitle && !addedLayers.has(l),
          );

          for (const existingLayer of matchingLayers) {
            // Apply visibility
            const persistedVisible = isVisibleLastSession(templateTitle);
            existingLayer.visible = persistedVisible || existingLayer.visible;

            orderedTemplateLayers.push(existingLayer);
            addedLayers.add(existingLayer);
          }
        }

        // Add any remaining layers with titles that aren't in template order
        const remainingLayers = currentLayers.filter(
          (l) => l.title && !addedLayers.has(l),
        );

        // Combine: template layers in order, then remaining layers, then layers without titles
        const finalLayerOrder = [
          ...orderedTemplateLayers,
          ...remainingLayers,
          ...layersWithoutTitle,
        ];

        // Remove all layers then re-add in correct order
        currentParent.layers.removeAll();
        finalLayerOrder.forEach((layer) => {
          currentParent.layers.add(layer);
        });
      }
    };

    // Execute Phase 2: Reorder everything from deepest to shallowest
    reorderRecursive(this.map);
  }

  async initLayersFromWebMap(webMap: WebMap) {
    if (!webMap || !this.view) return;

    // Use Set for faster lookup
    const existingLayerTitles = new Set(
      this.view.map?.layers.toArray().map((l) => l.title) || [],
    );

    const layersArray = webMap.layers.toArray();
    for (let i = 0; i < layersArray.length; i++) {
      const layer = layersArray[i];
      if (!existingLayerTitles.has(layer.title)) {
        this.view.map?.layers.add(layer, i);
      }
    }

    const existingTableTitles = new Set(
      this.view.map?.tables.toArray().map((t) => t.title) || [],
    );

    for (const table of webMap.tables.toArray()) {
      if (!existingTableTitles.has(table.title)) {
        this.view.map?.tables.add(table);
      }
    }

    const raw = localStorage.getItem(this.persistKey);
    if (!raw) return;

    const state: PersistState = JSON.parse(raw);
    // Use Promise.all for parallel async operations

    await Promise.all(state.layers.map((lp) => this.applyLayerSettings(lp)));
  }

  async persistState() {
    if (!this.view?.map) return;

    const layers: LayerPersist[] = [];
    const allLayers = this.view.map.allLayers.toArray();

    // Load all MapImageLayers in parallel
    const loadPromises = allLayers
      .filter((layer) => layer instanceof MapImageLayer && !layer.loaded)
      .map((layer) => (layer as MapImageLayer).load());

    if (loadPromises.length > 0) {
      await Promise.all(loadPromises);
    }

    for (const layer of allLayers) {
      layers.push(this.serializeLayer(layer));
    }

    localStorage.setItem(this.persistKey, JSON.stringify({ layers }));
    this.clearPersistedCache(); // Invalidate cache after persist
  }

  async restorePersistedState() {
    if (!this.view?.map) return;

    const raw = localStorage.getItem(this.persistKey);
    if (!raw) return;

    const state: PersistState = JSON.parse(raw);

    // Create lookup map for faster access
    const layerMap = new Map(
      this.view.map.allLayers.toArray().map((l) => [l.title, l]),
    );

    // First, set all group layer visibilities and opacities (top-down)
    for (const lp of state.layers) {
      const layer = layerMap.get(lp.id);
      if (!layer) continue;
      if (!layer.loaded) {
        await layer.load();
      }
      // Set group layer visibility and opacity first
      if (layer instanceof GroupLayer) {
        layer.visible = lp.visible;
        layer.opacity = lp.opacity;
      }
    }

    // Then, set all other layers and sublayers
    for (const lp of state.layers) {
      const layer = layerMap.get(lp.id);
      if (!layer) continue;
      if (!layer.loaded) {
        await layer.load();
      }

      // Only set non-group layer visibility here, group layers already set above
      if (!(layer instanceof GroupLayer)) {
        layer.visible = lp.visible;
        layer.opacity = lp.opacity;
      }

      // Now set sublayers for GroupLayer
      if (layer instanceof GroupLayer && layer.layers && lp.sublayers) {
        const sublayersArray = layer.layers.toArray();
        for (let idx = 0; idx < sublayersArray.length; idx++) {
          const sl = sublayersArray[idx];
          const slPersist = lp.sublayers[idx];
          if (slPersist) {
            sl.visible = slPersist.visible;
            if (slPersist.opacity != null) sl.opacity = slPersist.opacity;
          }
        }
      }
      // And for MapImageLayer
      if (layer instanceof MapImageLayer && layer.sublayers && lp.sublayers) {
        const sublayersArray = layer.sublayers.toArray();
        for (let idx = 0; idx < sublayersArray.length; idx++) {
          const sl = sublayersArray[idx];
          const slPersist = lp.sublayers[idx];
          if (!slPersist) continue;
          sl.visible = slPersist.visible;
          // MapImageLayer sublayers DO have opacity, but it's on the layer object
          if (slPersist.opacity != null) sl.opacity = slPersist.opacity;
        }
      }
    }
  }

/** Makes any layer whose title is in the URL "layers" param visible, along with its parent group layers */
  applyUrlLayerVisibility() {
    if (!this.view?.map) return;

    const urlParams = new URLSearchParams(window.location.search);
    const layersParam = urlParams.get("layers");
    if (!layersParam) return;
    const urlLayers = layersParam.split(",").map((layer) => layer.trim());
    const inUrl = (title: string) => urlLayers.includes(title);

    const makeParentsVisible = (layer: Layer) => {
      let current = layer.parent as GroupLayer | null;
      while (current && current.type === "group") {
        current.visible = true;
        current = current.parent as GroupLayer | null;
      }
    };

    this.view.map.allLayers.forEach((layer) => {
      if (layer.title && inUrl(layer.title)) {
        layer.visible = true;
        makeParentsVisible(layer);
      }
    });
  }  

  serializeLayer(layer: Layer): LayerPersist {
    const lp: LayerPersist = {
      id: layer.title!,
      visible: layer.visible,
      opacity: layer.opacity,
      type: layer.type,
    };

    if (layer instanceof MapImageLayer && layer.sublayers) {
      lp.sublayers = layer.sublayers.toArray().map((sl) => ({
        id: sl.id,
        visible: sl.visible,
        opacity: sl.opacity,
      }));
    } else if (layer instanceof GroupLayer && layer.layers) {
      lp.sublayers = layer.layers.toArray().map((sl) => ({
        id: sl.title || sl.id,
        visible: sl.visible,
        opacity: sl.opacity,
      }));
    }

    return lp;
  }

  async applyLayerSettings(lp: LayerPersist) {
    if (!this.view?.map) return;

    const layer = this.view.map.allLayers.find((l) => l.title === lp.id);
    if (!layer) return;

    layer.visible = lp.visible;
    layer.opacity = lp.opacity;

    if (layer instanceof MapImageLayer && lp.sublayers) {
      if (!layer.loaded) {
        try {
          await layer.load();
        } catch (err) {
          console.error(`Failed to load layer "${layer.title}":`, err);
          return;
        }
      }

      const sublayersArray = layer.sublayers?.toArray() || [];
      const supportsDynamicLayers =
        layer.capabilities.exportMap?.supportsDynamicLayers;

      for (const sl of sublayersArray) {
        const slPersist = lp.sublayers.find(
          (s) => String(s.id) === String(sl.id),
        );
        if (slPersist) {
          sl.visible = slPersist.visible;
          if (supportsDynamicLayers && slPersist.opacity != null) {
            sl.opacity = slPersist.opacity;
          }
        }
      }
    } else if (layer instanceof GroupLayer && layer.layers && lp.sublayers) {
      const sublayersArray = layer.layers.toArray();
      for (
        let idx = 0;
        idx < sublayersArray.length && idx < lp.sublayers.length;
        idx++
      ) {
        const sl = sublayersArray[idx];
        const slPersist = lp.sublayers[idx];
        if (slPersist) {
          sl.visible = slPersist.visible;
          if (slPersist.opacity != null) sl.opacity = slPersist.opacity;
        }
      }
    }
  }

  getOrLoadLayer(title: string): FeatureLayer | undefined {
    if (!this.map || !this.webmapTemplate) return undefined;

    const existing = this.map.allLayers.find((l) => l.title === title) as
      | FeatureLayer
      | undefined;
    if (existing) return existing;

    const templateLayer = this.webmapTemplate.allLayers.find(
      (l) => l.title === title,
    ) as FeatureLayer | undefined;

    if (!templateLayer) return undefined;

    //this.map.add(templateLayer);
    return templateLayer;
  }

  watchLayerChanges() {
    if (!this.view?.map) return;

    // Debounce persist calls to avoid excessive writes
    let persistTimeout: number | null = null;
    const debouncedPersist = () => {
      if (persistTimeout) clearTimeout(persistTimeout);
      persistTimeout = window.setTimeout(() => {
        this.persistState();
        persistTimeout = null;
      }, 300);
    };

    const watchLayer = (layer: Layer) => {
      reactiveUtils.watch(() => layer.visible, debouncedPersist);
      reactiveUtils.watch(() => layer.opacity, debouncedPersist);

      if (layer instanceof MapImageLayer && layer.sublayers) {
        for (const sl of layer.sublayers.toArray()) {
          reactiveUtils.watch(() => sl.visible, debouncedPersist);
          reactiveUtils.watch(() => sl.opacity, debouncedPersist);
        }
      }

      if (layer instanceof GroupLayer && layer.layers) {
        for (const sl of layer.layers.toArray()) {
          reactiveUtils.watch(() => sl.visible, debouncedPersist);
          reactiveUtils.watch(() => sl.opacity, debouncedPersist);
        }
      }
    };

    for (const layer of this.view.map.allLayers.toArray()) {
      watchLayer(layer);
    }

    this.view.map.layers.on("after-add", (event) => {
      watchLayer(event.item);
    });
  }
}

export const layerService = new LayerService();
