import MapView from '@arcgis/core/views/MapView';
import WebMap from '@arcgis/core/WebMap';
import Collection from '@arcgis/core/core/Collection';
import ActionToggle from '@arcgis/core/support/actions/ActionToggle';
import LayerList from '@arcgis/core/widgets/LayerList';
import LabelClass from '@arcgis/core/layers/support/LabelClass';
import { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import DevPlanFilter from '../DevPlanFilter';
import { saveMap } from '../../../WebMap/utils/map';
const OpacitySlider = lazy(() => import('../OpacitySlider'));
let layers: LayerList;

interface LabelExpression {
  title: string;
  expression: string;
}

export const initializeLayers = async (
  ref: HTMLDivElement,
  view: MapView,
  mapId?: String,
): Promise<LayerList> => {
  await addLayersFromWebmap(view, mapId);
  const url = new URL(window.location as any);
  if (url.searchParams.get('app')) {
    if (url.searchParams.get('app') === 'puma') {
      //await addUtilitiesLayers(view, 'a07528d1d37542b79fade50370f2305f');
    }
  }
  layers = new LayerList({
    view: view,
    container: ref,
    listItemCreatedFunction: layerListItemCreated,
    visibleElements: {
      filter: true,
      statusIndicators: false,
    },
    filterPlaceholder: 'Search layers',
    visibilityAppearance: 'checkbox',
  });
  layers.on('trigger-action', (event: __esri.LayerListTriggerActionEvent) => {
    if (event.item.layer.title === 'Property') {
      togglePropertyLabels(event);
      requestAnimationFrame(() => (event.item.actionsOpen = true));
    }
  });

  return layers;
};

const addLayersFromWebmap = async (view: MapView, mapId?: String) => {
  console.log(mapId);
  const url = new URL(window.location.href);
  //const mapId = url.searchParams.get('id') ? url.searchParams.get('id') : '95092428774c4b1fb6a3b6f5fed9fbc4';
  const map = new WebMap({
    portalItem: {
      id: mapId ? (mapId as string) : '95092428774c4b1fb6a3b6f5fed9fbc4',
    },
  });

  await map
    .load()
    .catch((error) => {
      console.log(error);
    })
    .then(() => {
      const groups = view.map.allLayers
        .filter((layer) => layer.type === 'group')
        .toArray();

      groups.forEach((group) => {
        const match = map.allLayers.find((layer) => {
          return layer.type === 'group' && layer.title === group.title;
        }) as __esri.GroupLayer;

        if (match) {
          const matchlayers = match.layers.slice(); // Store a copy of the layers in match
          // Store existing layers in the group before adding new ones
          const existingLayers = (group as __esri.GroupLayer).layers.toArray();
          if ((match as __esri.GroupLayer).visibilityMode === 'exclusive') {
            matchlayers.forEach(layer => {
              const foundSublayer = view.map.findLayerById(layer.id);
              if (foundSublayer) {
                layer.visible = foundSublayer.visible;
              }
            })
          }
          // Iterate over matchlayers and add new layers if they don't exist yet
          matchlayers.forEach((layer) => {
            const found = (group as __esri.GroupLayer).findLayerById(layer.id);

            if (found === undefined) {
              // If the layer doesn't exist in the group, add it
              (group as __esri.GroupLayer).add(layer);
            } else {
              // If the layer exists, update properties like popupTemplate, renderer, etc.
              if ((layer as __esri.FeatureLayer).popupTemplate) {
                (found as __esri.FeatureLayer).popupTemplate = (layer as __esri.FeatureLayer).popupTemplate;
              }
              if ((layer as __esri.FeatureLayer).renderer) {
                (found as __esri.FeatureLayer).renderer = (layer as __esri.FeatureLayer).renderer;
              }
            }
          });

          // Now, sort layers in the group by matching their original order in matchlayers
          const layerOrder = matchlayers.map(layer => layer.id); // Get the order of layers by ID
          const sortedLayers = (group as __esri.GroupLayer).layers.toArray().sort((layerA, layerB) => {
            // Compare the index of each layer's ID in matchlayers to determine correct order
            return layerOrder.indexOf(layerA.id) - layerOrder.indexOf(layerB.id);
          });

          // Reorder the group layers based on sortedLayers
          sortedLayers.forEach((layer, index) => {
            (group as __esri.GroupLayer).reorder(layer, index);
          });

          matchlayers.destroy();
        }
      });
      const nongroup = map.layers.filter(
        (layer) =>
          layer.type !== 'group' &&
          !layer.visible &&
          !view.map.findLayerById(layer.id),
      );
      view.map.addMany(nongroup.toArray());
      return true;
    });
};
const setPropertyColor = (layer: FeatureLayer, light: boolean) => {
  const renderer = (layer.renderer as __esri.SimpleRenderer).clone();
  if (light) {
    (renderer.symbol as __esri.SimpleFillSymbol).outline.color.r = 0;
    (renderer.symbol as __esri.SimpleFillSymbol).outline.color.g = 0;
    (renderer.symbol as __esri.SimpleFillSymbol).outline.color.b = 0;
  } else {
    (renderer.symbol as __esri.SimpleFillSymbol).outline.color.r = 255;
    (renderer.symbol as __esri.SimpleFillSymbol).outline.color.g = 255;
    (renderer.symbol as __esri.SimpleFillSymbol).outline.color.b = 255;
  }
  layer.renderer = renderer;
};
const togglePropertyColor = (layer: FeatureLayer, sections: Collection<Collection<__esri.ActionButton | ActionToggle>>) => {
  if (sections.length > 1) {
    const section = sections.getItemAt(1).getItemAt(0) as ActionToggle;
    setPropertyColor(layer, !section.value);
    sections.getItemAt(1).getItemAt(0).icon = !section.value
      ? 'toggle-off'
      : 'toggle-on';
  }
};
export const togglePropertyLabels = (
  event: __esri.LayerListTriggerActionEvent,
) => {
  if (event.item.layer.title === 'Property') {
    togglePropertyColor(
      event.item.layer as FeatureLayer,
      event.item.actionsSections,
    );
    if (!(event.item.layer as __esri.FeatureLayer).labelsVisible) {
      (event.item.layer as __esri.FeatureLayer).labelsVisible = true;
    }

    const selected = event.item.actionsSections
      .getItemAt(0)
      .filter((section) => {
        section.icon = (section as ActionToggle).value
          ? 'toggle-on'
          : 'toggle-off';
        return (section as ActionToggle).value;
      });

    const selectedTitles = selected.map((section) => {
      return (section as ActionToggle).title;
    });

    const selectedExpressions = propertyLabelExpressions.filter(
      (expression) => {
        return selectedTitles.includes(expression.title);
      },
    );
    const expressions = selectedExpressions.map((expression) => {
      return expression.expression;
    });
    const expression = expressions.join('+ TextFormatting.NewLine+');
    (event.item.layer as __esri.FeatureLayer).labelingInfo = [];

    //if ((event.action as ActionToggle).value) {
    (event.item.layer as __esri.FeatureLayer).labelingInfo = [
      new LabelClass({
        symbol: {
          type: 'text',
          color: 'black',
          haloColor: 'white',
          haloSize: 1,
          font: {
            family: 'AvenirNext LT Pro Regular',
            style: 'normal',
            weight: 'bold',
          },
        },
        labelExpressionInfo: {
          expression: expression,
        },
        maxScale: 0,
        minScale: 5000,
      })
    ];
    // }
    // } else {
    //   (event.item.layer as __esri.FeatureLayer).labelingInfo = (
    //     event.item.layer as __esri.FeatureLayer
    //   ).labelingInfo.filter((info) => {
    //     return info.labelExpressionInfo.expression != expression.expression;
    //   });
    // }
  }
};
const propertyLabelExpressions: LabelExpression[] = [
  {
    expression: `First(Split($feature['SITE_ADDRESS'], ' ')) + ' ' + $feature.STMISC`,
    title: 'Address Labels',
  },
  {
    expression: `$feature['PIN_NUM']`,
    title: 'PIN Labels',
  },
  {
    expression: `$feature['REID']`,
    title: 'REID Labels',
  },
  {
    expression: `When(IsEmpty($feature["SALE_DATE"]),null, Concatenate(Month($feature["SALE_DATE"])+1, '/',Day($feature["SALE_DATE"]), '/',Year($feature["SALE_DATE"])))`,
    title: 'Sale Date Labels',
  },
  {
    expression: `Text($feature.TOTSALPRICE,'$#,###')`,
    title: 'Sale Price Labels',
  },
];

const addPropertyLabelToggles = (item: __esri.ListItem) => {
  // Check if the layer is a FeatureLayer (or a layer that supports labelingInfo)
  if (
    item.layer.title === 'Property' &&
    item.layer.type !== 'group' &&
    item.actionsSections.length === 0 &&
    'labelingInfo' in item.layer
  ) {
    const featureLayer = item.layer as __esri.FeatureLayer; // Cast to FeatureLayer

    let toggles: __esri.Collection<__esri.ActionToggle> = new Collection();

    // Add property label toggles
    toggles.addMany(
      propertyLabelExpressions.map((expression) => {
        const labelInfo = featureLayer.labelingInfo?.find(
          (info: __esri.LabelClass) =>
            info.labelExpressionInfo?.expression.includes(
              expression.expression,
            ) && featureLayer.labelsVisible
        );

        return new ActionToggle({
          value: !!labelInfo,
          title: expression.title,
          visible: true,
          icon: 'toggle-off',
        });
      }),
    );

    item.actionsSections.push(toggles);

    // Add outline color toggle only if the renderer has a symbol (e.g., SimpleRenderer or UniqueValueRenderer)
    const renderer = featureLayer.renderer;

    if (
      renderer.type === 'simple'
    ) {
      const symbolRenderer = renderer as __esri.SimpleRenderer;
      const symbol = symbolRenderer.symbol;

      if (symbol && 'outline' in symbol && symbol.outline) {
        const simpleSymbol = symbol as __esri.SimpleMarkerSymbol | __esri.SimpleFillSymbol;

        toggles = new Collection();
        toggles.add({
          value: (simpleSymbol.outline?.color as any).isBright ?? false,
          title: 'Light Outline',
          visible: true,
          type: 'toggle',
          icon: 'toggle-off',
        } as __esri.ActionToggle);

        item.actionsSections.push(toggles);
      }
    }

    item.actionsOpen = false;

    // Delay for adding title to actions
    setTimeout(() => {
      const title = document.createElement('h4');
      title.id = 'labels-actions-title';
      title.textContent = 'Labels';
      title.setAttribute('style', 'padding: 0.5em; margin: 0;');

      const actions = document.querySelector('.esri-layer-list__item-actions');
      if (actions?.parentElement && !document.getElementById('labels-actions-title')) {
        actions.prepend(title);
      }
    }, 1000);
  }
};



const createPanel = (item: __esri.ListItem) => {
  if (
    item.visible &&
    !item.panel &&
    item.layer.type !== 'group' &&
    item.layer.type !== undefined
  ) {
    const slider = document.createElement('slider-container');
    const root = createRoot(slider as HTMLDivElement);
    root.render(
      <Suspense fallback={''}>
        <OpacitySlider value={item.layer.opacity} layer={item.layer} />
      </Suspense>,
    );

    item.panel = {
      content: [slider, 'legend'],
      open: false,
    } as __esri.ListItemPanel;
    //addDevPlanFilters(item);
  }
};

const layerListItemCreated = async (event: { item: __esri.ListItem }) => {
  const { item } = event;
  await item.layer.when();
  createPanel(item);
  item.open = item.layer.visible;
  item.layer.watch('visible', (visible: boolean) => {
    saveMap(layers.view as __esri.MapView);
    item.open = visible;
    createPanel(item);
    if (visible) {
      let parentLayer = item.layer.parent as __esri.Layer;
      while (parentLayer) {
        if (parentLayer.type === 'group') {
          parentLayer.visible = true;
        }
        parentLayer = parentLayer.parent as __esri.Layer;
      }
    }
  });
  addPropertyLabelToggles(item);
};


export const filterLayers = (
  value: string,
  layerList: __esri.LayerList,
): void => {
  if (!value) {
    value = '';
  }
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
        //handle second level group layers
        if (layer.type === 'group') {
          (layer as __esri.GroupLayer).layers.forEach((sublayer) => {
            if (sublayer.title.toLowerCase().includes(value.toLowerCase())) {
              layer.listMode = 'show';
              sublayer.listMode = 'show';
              open = true;
            } else {
              sublayer.listMode = 'hide';
            }
          });
        }
      });
      item.open = value.length > 0 && open;
      if (!value.length || open) {
        document
          .getElementById(
            `${(layerList as any).id}_${(item as any).uid}__title`,
          )
          ?.parentElement?.parentElement?.parentElement?.removeAttribute(
            'hidden',
          );
      }
      if (!open) {
        document
          .getElementById(
            `${(layerList as any).id}_${(item as any).uid}__title`,
          )
          ?.parentElement?.parentElement?.parentElement?.setAttribute(
            'hidden',
            '',
          );
      }
    }
  });
};

export const resetLayers = (list: __esri.LayerList) => {
  const groups: Collection<__esri.GroupLayer> = list?.view.map.allLayers.filter(
    (layer) => {
      return layer.type === 'group';
    },
  ) as Collection<__esri.GroupLayer>;
  groups.forEach((group) => {
    group.visible = group.title === 'Property';
    group.layers.forEach((layer) => {
      layer.visible = layer.title === 'Property';
    });
  });
};
