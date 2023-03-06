"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[5387],{35387:(e,t,i)=>{i.d(t,{Z:()=>Ie});var s,n=i(27366),l=i(40281),o=i(98928),r=i(100),a=i(93169),d=i(92026),c=i(94172),h=i(49861),u=i(89125),p=(i(63780),i(69912)),g=i(69407),m=i(91505),b=(i(25243),i(85015)),_=i(41691),y=i(79056),v=i(57976),I=i(6945);let C=s=class extends v.Z{constructor(e){super(e),this.displayValueEnabled=!1,this.max=1,this.min=0,this.step=.1,this.type="slider",this.value=null}clone(){return new s({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,displayValueEnabled:this.displayValueEnabled,max:this.max,min:this.min,step:this.step,value:this.value})}};(0,n._)([(0,h.Cb)()],C.prototype,"displayValueEnabled",void 0),(0,n._)([(0,h.Cb)()],C.prototype,"max",void 0),(0,n._)([(0,h.Cb)()],C.prototype,"min",void 0),(0,n._)([(0,h.Cb)()],C.prototype,"step",void 0),(0,n._)([(0,h.Cb)()],C.prototype,"value",void 0),C=s=(0,n._)([(0,p.j)("esri.support.Action.ActionSlider")],C);const f=C;var w=i(9676);const S="hide",A="hide-children";function L(e){if(e)return null!=e.listMode?e.listMode:void 0}function k(e){if(e&&(!("type"in e)||"wmts"!==e.type)&&e.listMode!==A)return"sublayers"in e?"sublayers":"layers"in e?"layers":void 0}function M(e,t){e&&e.sort(((e,i)=>{const s=t.indexOf(e.uid),n=t.indexOf(i.uid);return s>n?-1:s<n?1:0}))}function $(e){const t=e?.layer;return t&&"layers"in t?t.layers:null}function E(e,t){const i=e.layer?.uid;return i&&t.find((e=>e.layer?.uid===i))}function P(e){const t=function(e){return!!e?.layer}(e)?e:null,i=e?.parent,s="map-image"===i?.type&&t.source;return s&&i?{layer:i,title:"",sublayerIds:[s.mapLayerId]}:{layer:e,title:""}}var T=i(53963),O=i(67005);const x="esri-layer-list-panel",N=`${x}__content`,V={base:x,content:N,contentLegend:`${N}--legend`,contentString:`${N}--string`,contentElement:`${N}--html-element`,contentWidget:`${N}--widget`};let R=class extends((0,y.IG)(g.Z)){constructor(e,t){super(e,t),this._legend=null,this._handles=new r.Z,this.content=null,this.image=null,this.listItem=null,this.open=!1,this.visible=!0}initialize(){this.addHandles((0,c.YP)((()=>this.content),(e=>this._createLegend(e)),c.nn))}destroy(){const{_legend:e}=this;e&&e.destroy(),this._legend=null}get className(){const{image:e}=this,t=this._getFirstWidget();return this._get("className")||!e&&t?t.iconClass:""}set className(e){this._override("className",e)}get disabled(){const{listItem:e,_legend:t,content:i}=this;return!e||!(Array.isArray(i)&&i.length>1)&&!!t&&(!t.activeLayerInfos?.length||!e.visibleAtCurrentScale)}set disabled(e){this._overrideIfSome("disabled",e)}get title(){const e=this._getFirstWidget();return this._get("title")||e?e.label:""}set title(e){this._override("title",e)}render(){return(0,O.u)("div",{class:V.base},this._renderContents())}_renderContent(e){const{_legend:t,disabled:i}=this;return!e||i?null:"legend"===e&&t?(0,O.u)("div",{class:this.classes(V.content,V.contentLegend),key:t},t.render()):"string"==typeof e?(0,O.u)("div",{class:this.classes(V.content,V.contentString),key:e,innerHTML:e}):(0,T.Qd)(e)?(0,O.u)("div",{class:this.classes(V.content,V.contentWidget),key:e},e.render()):e instanceof HTMLElement?(0,O.u)("div",{class:this.classes(V.content,V.contentElement),key:e,bind:e,afterCreate:this._attachToNode}):null}_renderContents(){const{content:e}=this;return Array.isArray(e)?e.map((e=>this._renderContent(e))):this._renderContent(e)}_getLegendOptions(){const{listItem:e}=this;if(!e)return{};const{layer:t,view:i}=e;return t&&i?{view:i,layerInfos:[P(t)]}:{}}_createLegend(e){this._hasLegend(e)&&!this._legend&&i.e(8073).then(i.bind(i,28073)).then((e=>{let{default:t}=e;const{_handles:i,listItem:s}=this,n=new t(this._getLegendOptions());this._legend=n,this.notifyChange("className"),this.notifyChange("title");const l=(0,c.YP)((()=>[s?.view,s?.layer,s?.layer?.source,s?.layer?.parent]),(()=>this._updateLegend(n)),c.nn);i.add(l,"legends"),this.scheduleRender()}))}_hasLegend(e){const t="legend";return e===t||!!Array.isArray(e)&&e.includes(t)}_attachToNode(e){e.appendChild(this)}_updateLegend(e){e.set(this._getLegendOptions()),this.scheduleRender()}_getWidget(e){return"legend"===e?this._legend:(0,T.Qd)(e)?e:null}_getFirstWidget(){const{content:e}=this;if(Array.isArray(e)){let t=null;return e.some((e=>{const i=this._getWidget(e);return i&&(t=i),!!i})),t}return this._getWidget(e)}};(0,n._)([(0,h.Cb)()],R.prototype,"_legend",void 0),(0,n._)([(0,h.Cb)()],R.prototype,"className",null),(0,n._)([(0,h.Cb)()],R.prototype,"content",void 0),(0,n._)([(0,h.Cb)()],R.prototype,"disabled",null),(0,n._)([(0,h.Cb)()],R.prototype,"image",void 0),(0,n._)([(0,h.Cb)()],R.prototype,"listItem",void 0),(0,n._)([(0,h.Cb)()],R.prototype,"title",null),(0,n._)([(0,h.Cb)()],R.prototype,"open",void 0),(0,n._)([(0,h.Cb)()],R.prototype,"visible",void 0),R=(0,n._)([(0,p.j)("esri.widgets.LayerList.ListItemPanel")],R);const F=R;var U;const Y=l.Z.ofType({key:"type",defaultKeyValue:"button",base:v.Z,typeMap:{button:I.Z,toggle:w.Z,slider:f}}),Z=l.Z.ofType(Y),H="layer",D="child-list-mode";let W=U=class extends((0,y.IG)((0,_.p)(b.Z))){constructor(e){super(e),this.actionsSections=new Z,this.actionsOpen=!1,this.checkPublishStatusEnabled=!1,this.children=new(l.Z.ofType(U)),this.childrenSortable=!0,this.hidden=!1,this.layer=null,this.layerView=null,this.listItemCreatedFunction=null,this.open=!1,this.panel=null,this.parent=null,this.sortable=!0,this.view=null}initialize(){if(this.handles.add([(0,c.YP)((()=>this.layer),(e=>this._watchLayerProperties(e)),c.nn),(0,c.YP)((()=>this.checkPublishStatusEnabled),(e=>this._updateChildrenPublishing(e)),c.nn),(0,c.YP)((()=>this.view),(e=>this._updateChildrenView(e)),c.nn),(0,c.YP)((()=>this.panel),(e=>this._setListItemOnPanel(e)),c.nn),(0,c.YP)((()=>[this.layer,this.view]),(()=>this._getLayerView()),c.nn)]),"function"==typeof this.listItemCreatedFunction){const e={item:this};this.listItemCreatedFunction.call(null,e)}}destroy(){this.view=null}get connectionStatus(){const{layerView:e,publishing:t}=this;if(!t&&e&&"connectionStatus"in e)return e.connectionStatus}get error(){return this.layer?.loadError}get incompatible(){const{layerView:e}=this;return!(!e||!("spatialReferenceSupported"in e))&&!e.spatialReferenceSupported}castPanel(e){return this.get("panel.open")&&!e.hasOwnProperty("open")&&(e.open=!0),e?new F(e):null}get title(){const e=this.get("layer.layer");return(!e||e&&this.get("layer.layer.loaded"))&&this.get("layer.title")||this.get("layer.attributes.title")||""}set title(e){this._override("title",e)}get publishing(){const{layer:e,checkPublishStatusEnabled:t}=this;return t&&e&&"publishingInfo"in e&&"publishing"===e.publishingInfo?.status}get updating(){const{layerView:e,connectionStatus:t,layer:i,publishing:s}=this;return!s&&!t&&(e?e.updating:"loading"===i?.loadStatus||!1)}get visible(){return this.layer?.visible}set visible(e){const t=this.layer;t&&(t.visible=e)}get visibleAtCurrentScale(){return!function(e,t){if(!e||isNaN(t))return!1;const i=function(e){if(e)return null!=e.minScale?e.minScale:void 0}(e),s=function(e){if(e)return null!=e.maxScale?e.maxScale:void 0}(e),n=!isNaN(i)&&i>0&&t>i,l=!isNaN(s)&&s>0&&t<s;return n||l}(this.layer,this.get("view.scale"))}get visibilityMode(){return function(e){if(!e)return"inherited";const t=e.get("layer.capabilities.exportMap.supportsSublayerVisibility");if("boolean"==typeof t)return t?"independent":"inherited";const i=e.get("capabilities.exportMap.supportsSublayerVisibility");return"boolean"==typeof i?i?"independent":"inherited":null!=e.visibilityMode?e.visibilityMode:"independent"}(this.layer)}clone(){return new U({actionsSections:this.actionsSections.clone(),actionsOpen:this.actionsOpen,checkPublishStatusEnabled:this.checkPublishStatusEnabled,children:this.children.clone(),layer:this.layer,listItemCreatedFunction:this.listItemCreatedFunction,open:this.open,panel:this.panel,title:this.title,view:this.view,visible:this.visible})}_setListItemOnPanel(e){e&&(e.listItem=this)}_updateChildrenPublishing(e){const t=this.children;t&&t.forEach((t=>t.checkPublishStatusEnabled=e))}_updateChildrenView(e){const t=this.children;t&&t.forEach((t=>t.view=e))}_addChildren(e){if(this.handles.remove(D),this.children.removeAll(),!e)return;e.forEach((t=>{this.handles.add((0,c.YP)((()=>t.listMode),(()=>this._addChildren(e))),D)}));const t=e.filter((e=>"hide"!==L(e)));this.children.addMany(this._makeChildren(t))}_watchSublayerChanges(e){e&&this.handles.add(e.on("change",(()=>{this._addChildren(e)})),H)}_initializeChildLayers(e){this._addChildren(e),this._watchSublayerChanges(e)}_makeChildren(e){return e.map((e=>function(e){return L(e)!==S}(e)?new U({layer:e,checkPublishStatusEnabled:this.checkPublishStatusEnabled,listItemCreatedFunction:this.listItemCreatedFunction,parent:this,view:this.view}):null)).filter(d.pC).reverse()}_watchLayerProperties(e){if(!this.handles)return;if(this.handles.remove(H),this.handles.remove(D),!e)return;if(this.handles.add((0,c.YP)((()=>e.listMode),(()=>this._watchLayerProperties(e))),H),"hide-children"===L(e))return void this.children.removeAll();const t=k(e);t&&this.handles.add((0,c.YP)((()=>e[t]),(()=>{e.hasOwnProperty(t)&&this._initializeChildLayers(e[t])}),c.nn),H)}async _getLayerView(){const{layer:e,view:t}=this;if(e&&t)try{const i=await t.whenLayerView(e);if(i.layer!==this.layer)return;this._set("layerView",i)}catch{}}};(0,n._)([(0,h.Cb)({type:Z})],W.prototype,"actionsSections",void 0),(0,n._)([(0,h.Cb)()],W.prototype,"actionsOpen",void 0),(0,n._)([(0,h.Cb)()],W.prototype,"checkPublishStatusEnabled",void 0),(0,n._)([(0,h.Cb)({type:l.Z})],W.prototype,"children",void 0),(0,n._)([(0,h.Cb)()],W.prototype,"childrenSortable",void 0),(0,n._)([(0,h.Cb)({readOnly:!0})],W.prototype,"connectionStatus",null),(0,n._)([(0,h.Cb)({readOnly:!0})],W.prototype,"error",null),(0,n._)([(0,h.Cb)()],W.prototype,"hidden",void 0),(0,n._)([(0,h.Cb)({readOnly:!0})],W.prototype,"incompatible",null),(0,n._)([(0,h.Cb)()],W.prototype,"layer",void 0),(0,n._)([(0,h.Cb)({readOnly:!0})],W.prototype,"layerView",void 0),(0,n._)([(0,h.Cb)()],W.prototype,"listItemCreatedFunction",void 0),(0,n._)([(0,h.Cb)()],W.prototype,"open",void 0),(0,n._)([(0,h.Cb)({type:F})],W.prototype,"panel",void 0),(0,n._)([(0,u.p)("panel")],W.prototype,"castPanel",null),(0,n._)([(0,h.Cb)()],W.prototype,"parent",void 0),(0,n._)([(0,h.Cb)()],W.prototype,"sortable",void 0),(0,n._)([(0,h.Cb)()],W.prototype,"title",null),(0,n._)([(0,h.Cb)({readOnly:!0})],W.prototype,"publishing",null),(0,n._)([(0,h.Cb)({readOnly:!0})],W.prototype,"updating",null),(0,n._)([(0,h.Cb)()],W.prototype,"view",void 0),(0,n._)([(0,h.Cb)()],W.prototype,"visible",null),(0,n._)([(0,h.Cb)({readOnly:!0})],W.prototype,"visibleAtCurrentScale",null),(0,n._)([(0,h.Cb)({readOnly:!0})],W.prototype,"visibilityMode",null),W=U=(0,n._)([(0,p.j)("esri.widgets.LayerList.ListItem")],W);const z=W,B="view",j="view-layers",G="map-layers",K="layer-views",Q="layer-list-mode",X="children",q=l.Z.ofType(z);let J=class extends m.Z.EventedAccessor{constructor(e){super(e),this._handles=new r.Z,this.checkPublishStatusEnabled=!1,this.listItemCreatedFunction=null,this.operationalItems=new q,this.view=null}initialize(){this._handles.add([(0,c.YP)((()=>[this.view,this.view?.ready]),(()=>this._viewHandles()),c.nn),(0,c.YP)((()=>[this.listItemCreatedFunction,this.checkPublishStatusEnabled]),(()=>this._recompileList()))],B)}destroy(){this._handles.destroy(),this._handles=null,this.view=null,this.operationalItems.removeAll()}get state(){const e=this.get("view");return this.get("view.ready")?"ready":e?"loading":"disabled"}triggerAction(e,t){e&&!e.disabled&&this.emit("trigger-action",{action:e,item:t})}moveListItem(e,t,i,s){const n=e?.layer;if(!n)return;const l=this.view?.map?.layers,o=t?$(t):l,r=i?$(i):l;if(!o||!r)return;const{operationalItems:a}=this,d=t?.children||a,c=i?.children||a,h=r.length-s;e.parent=i||null,d.includes(e)&&d.remove(e),o.includes(n)&&o.remove(n),c.includes(e)||c.add(e,h),r.includes(n)||r.add(n,h)}_createLayerViewHandles(e){const{_handles:t}=this;t.remove(K),this._compileList(),e&&t.add(e.on("change",(()=>this._compileList())),K)}_createMapLayerHandles(e){const{_handles:t}=this;t.remove(G),this._compileList(),e&&t.add(e.on("change",(()=>this._compileList())),G)}_createListItem(e){const{view:t,listItemCreatedFunction:i,checkPublishStatusEnabled:s}=this;return new z({checkPublishStatusEnabled:s,layer:e,listItemCreatedFunction:i,view:t})}_removeAllItems(){const{_handles:e,operationalItems:t}=this;t.forEach((t=>{e.remove(`${X}-${t.uid}`)})),t.removeAll()}_getViewableLayers(e){if(e)return e.filter((e=>"hide"!==L(e)))}_watchLayersListMode(e){const{_handles:t}=this;t.remove(Q),e&&e.forEach((e=>{"listMode"in e&&t.add((0,c.YP)((()=>e.listMode),(()=>this._compileList())),Q)}))}_compileList(){const e=this.get("view.map.layers");this._watchLayersListMode(e);const t=this._getViewableLayers(e);t&&t.length?(this._createNewItems(t),this._removeItems(t),this._sortItems(t)):this._removeAllItems()}_createNewItems(e){const{operationalItems:t}=this;e.forEach((e=>{t.find((t=>t.layer===e))||t.add(this._createListItem(e))}))}_removeItems(e){const{_handles:t,operationalItems:i}=this,s=[];i.forEach((i=>{i&&e&&e.includes(i.layer)||(t.remove(`${X}-${i.uid}`),s.push(i))})),i.removeMany(s)}_sortItems(e){const{operationalItems:t}=this;t.sort(((t,i)=>{const s=e.indexOf(t.layer),n=e.indexOf(i.layer);return s>n?-1:s<n?1:0}))}_recompileList(){this._removeAllItems(),this._compileList()}_viewHandles(){const{_handles:e,view:t}=this;e.remove([G,K,j]),this._compileList(),t&&t.ready&&e.add([(0,c.YP)((()=>this.view?.map?.allLayers),(e=>this._createMapLayerHandles(e)),c.nn),(0,c.YP)((()=>this.view?.allLayerViews),(e=>this._createLayerViewHandles(e)),c.nn)],j)}};(0,n._)([(0,h.Cb)()],J.prototype,"checkPublishStatusEnabled",void 0),(0,n._)([(0,h.Cb)()],J.prototype,"listItemCreatedFunction",void 0),(0,n._)([(0,h.Cb)({type:q})],J.prototype,"operationalItems",void 0),(0,n._)([(0,h.Cb)({readOnly:!0})],J.prototype,"state",null),(0,n._)([(0,h.Cb)()],J.prototype,"view",void 0),J=(0,n._)([(0,p.j)("esri.widgets.LayerList.LayerListViewModel")],J);const ee=J;var te=i(78088),ie=i(80532),se=i(28907),ne=(i(80975),i(70281));function le(e,t,i){e.splice(i,0,e.splice(t,1)[0])}const oe=l.Z.ofType(z),re="data-sort-filter",ae="data-layer-uid",de="esri-layer-list",ce=`${de}__item`,he={base:`${de} esri-widget esri-widget--panel`,newUI:`${de}--new-ui`,noItems:`${de}__no-items`,list:`${de}__list`,listRoot:`${de}__list--root`,listExclusive:`${de}__list--exclusive`,listInherited:`${de}__list--inherited`,listIndependent:`${de}__list--independent`,item:ce,itemContent:`${ce}-content`,itemMessage:`${ce}--has-message`,itemInvisible:`${ce}--invisible`,itemInvisibleAtScale:`${ce}--invisible-at-scale`,itemChildren:`${ce}--has-children`,itemSelectable:`${ce}--selectable`,itemContainer:`${ce}-container`,actionsMenu:`${ce}-actions-menu`,actionsMenuItem:`${ce}-actions-menu-item`,actionsMenuItemActive:`${ce}-actions-menu-item--active`,actions:`${ce}-actions`,actionsList:`${ce}-actions-list`,action:`${ce}-action`,actionIcon:`${ce}-action-icon`,actionImage:`${ce}-action-image`,actionTitle:`${ce}-action-title`,actionToggle:`${de}__action-toggle`,actionToggleOn:`${de}__action-toggle--on`,label:`${ce}-label`,message:`${ce}-message`,title:`${ce}-title`,statusIndicator:`${de}__status-indicator`,publishing:`${de}__publishing`,updating:`${de}__updating`,connectionStatus:`${de}__connection-status`,connectionStatusConnected:`${de}__connection-status--connected`,toggleVisible:`${ce}-toggle`,toggleVisibleIcon:`${ce}-toggle-icon`,toggleIcon:`${ce}-toggle-icon`,radioIcon:`${ce}-radio-icon`,childToggle:`${de}__child-toggle`,childToggleOpen:`${de}__child-toggle--open`,childOpened:`${de}__child-toggle-icon--opened`,childClosed:`${de}__child-toggle-icon--closed`,childClosed_RTL:`${de}__child-toggle-icon--closed-rtl`,sortableChosen:`${de}--chosen`,disabled:"esri-disabled",disabledElement:"esri-disabled-element",hidden:"esri-hidden",rotating:"esri-rotating",iconEllipses:"esri-icon-handle-horizontal",iconVisible:"esri-icon-visible",iconInvisible:"esri-icon-non-visible",iconRadioSelected:"esri-icon-radio-checked",iconRadioUnselected:"esri-icon-radio-unchecked",iconNoticeTriangle:"esri-icon-notice-triangle",iconChildrenOpen:"esri-icon-down-arrow",iconDownArrow:"esri-icon-down-arrow",iconRightArrow:"esri-icon-right-triangle-arrow",iconLeftArrow:"esri-icon-left-triangle-arrow",iconLoading:"esri-icon-loading-indicator",iconDefaultAction:"esri-icon-default-action",widgetIcon:"esri-icon-layers"},ue="actions",pe="action-section",ge="items",me={exclusive:"exclusive",inherited:"inherited",independent:"independent"};function be(e){const{actionsOpen:t,children:i}=e;t&&(e.actionsOpen=!1),i.forEach((e=>be(e)))}const _e="root",ye={statusIndicators:!0,errors:!1};let ve=class extends g.Z{constructor(e,t){super(e,t),this._handles=new r.Z,this._sortableNodes=new Map,this._sortableMap=new Map,this._focusSortUid=null,this._newUI=(0,a.Z)("esri-layerlist-new-ui"),this._tooltipReferenceMap=new Map,this.visibleItems=null,this.iconClass=he.widgetIcon,this.listItemCanGiveFunction=null,this.listItemCanReceiveFunction=null,this.messages=null,this.messagesCommon=null,this.multipleSelectionEnabled=!1,this.selectionEnabled=!1,this.selectedItems=new oe,this.viewModel=new ee,this.visibleElements={...ye},this._onSortableSort=e=>{let{to:t,from:i,item:s,newIndex:n}=e;i&&t&&(i===t?this._sortLayers(this._sortableMap.get(i.dataset.group)):this._moveLayerFromChildList({to:t,from:i,item:s,newIndex:n}))},this._sortableCanSort=(e,t)=>!(!e.el.dataset.group||!t.el.dataset.group),this._sortableCanPull=(e,t,i)=>{const{listItemCanGiveFunction:s}=this,n={selected:i["data-item"],from:t.el["data-item"],to:e.el["data-item"]};return!this._sortableCanSort(e,t)||"function"!=typeof s||s.call(null,n)},this._sortableCanPut=(e,t,i)=>{const{listItemCanReceiveFunction:s}=this,n={selected:i["data-item"],from:t.el["data-item"],to:e.el["data-item"]};return!this._sortableCanSort(e,t)||"function"!=typeof s||s.call(null,n)},this._onSortableEnd=e=>{let{oldIndex:t,from:i,to:s,item:n}=e;i!==s&&i.insertBefore(n,i.children[t])}}initialize(){const e=this.operationalItems;this._setVisibleItems(e),this.addHandles([(0,c.on)((()=>this.operationalItems),"change",(()=>this._itemsChanged(e))),(0,c.YP)((()=>this.visibleElements),(()=>this._itemsChanged(e))),(0,c.YP)((()=>this.selectionEnabled),(()=>this._toggleAllSorting()),c.nn)])}loadDependencies(){return Promise.all([Promise.resolve().then(i.bind(i,87474)),Promise.resolve().then(i.bind(i,94730))])}destroy(){this._destroySortables(),this._tooltipReferenceMap.clear(),this._handles.destroy(),this._handles=null}get label(){return this.messages?.widgetLabel??""}set label(e){this._overrideIfSome("label",e)}get listItemCreatedFunction(){return this.viewModel.listItemCreatedFunction}set listItemCreatedFunction(e){this.viewModel.listItemCreatedFunction=e}get operationalItems(){return this.viewModel.operationalItems}set operationalItems(e){this.viewModel.operationalItems=e}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}castVisibleElements(e){return{...ye,...e}}triggerAction(e,t){return this.viewModel.triggerAction(e,t)}render(){const{visibleItems:e,_newUI:t}=this,i=this.viewModel?.state,s={[he.newUI]:t,[he.hidden]:"loading"===i,[he.disabled]:"disabled"===i},n=this.renderItemTooltips(),l=this.renderItems();return(0,O.u)("div",{class:this.classes(he.base,s)},e?.length?[n,l]:this.renderNoItems())}renderItemTooltip(e){const{_tooltipReferenceMap:t,messages:i}=this;return e?(0,O.u)("calcite-tooltip",{label:i.layerIncompatible,referenceElement:t.get(e.uid)},i.layerIncompatibleTooltip):null}renderItemTooltipNodes(e){const{incompatible:t,children:i}=e;return[t?this.renderItemTooltip(e):null,...t?[]:i?.toArray().map((e=>this.renderItemTooltipNodes(e)))]}renderItemTooltips(){return this.visibleItems.toArray().map((e=>this.renderItemTooltipNodes(e)))}renderNoItems(){return(0,O.u)("div",{class:he.noItems},this.messages.noItemsToDisplay)}renderItems(){const{visibleItems:e,selectionEnabled:t,messages:i}=this;return(0,O.u)("ul",{"aria-label":i.widgetLabel,role:t?"listbox":void 0,afterCreate:this._sortNodeCreated,afterUpdate:this._sortNodeCreated,afterRemoved:this._sortNodeRemoved,"data-group":_e,bind:this,class:this.classes(he.list,he.listRoot,he.listIndependent)},e?.map((e=>this.renderItem(e,null))).toArray())}renderActionsMenuIcon(e,t){const{messagesCommon:i}=this,s={[he.actionsMenuItemActive]:e.actionsOpen};return(0,O.u)("div",{key:"actions-menu-toggle","data-item":e,bind:this,onclick:this._toggleActionsOpen,onkeydown:this._toggleActionsOpen,class:this.classes(he.actionsMenuItem,s),tabindex:"0",role:"button","aria-controls":t,"aria-label":i.options,title:i.options},(0,O.u)("span",{"aria-hidden":"true",class:he.iconEllipses}))}renderActionsMenu(e,t,i,s){const{panel:n}=e,l=n&&n.visible?this.renderPanelButton(n):null,o=1===i&&this._getSingleActionButton(t),r=o?this.renderAction({item:e,action:o,singleAction:!0}):null,a=!o&&i?this.renderActionsMenuIcon(e,s):null;return a||l||o?(0,O.u)("div",{key:"actions-menu",class:he.actionsMenu},l,r,a):null}renderChildList(e,t){const{selectionEnabled:i}=this,{visibilityMode:s,children:n}=e,l=this._hasChildren(e),o=!l&&i&&"group"===e.layer?.type,{exclusive:r,inherited:a}=me,d={[he.listExclusive]:s===r,[he.listInherited]:s===a,[he.listIndependent]:s!==a&&s!==r};return l||o?(0,O.u)("ul",{bind:this,key:"list-items",id:t,"data-group":e.uid,"data-item":e,afterCreate:this._sortNodeCreated,afterUpdate:this._sortNodeCreated,afterRemoved:this._sortNodeRemoved,class:this.classes(he.list,d),"aria-expanded":e.open?"true":"false",role:i?"listbox":s===r?"radiogroup":"group",hidden:!e.open&&!o||null},n?.map((t=>this.renderItem(t,e))).toArray()):null}renderChildrenToggle(e,t){const{messagesCommon:i}=this,s=this._hasChildren(e),n={[he.childToggleOpen]:e.open},l=e.open?i.collapse:i.expand;return s?(0,O.u)("span",{onclick:this._toggleChildrenClick,onkeydown:this._toggleChildrenClick,"data-item":e,key:"toggle-children",class:this.classes(he.childToggle,n),tabindex:"0",role:"button","aria-controls":t,"aria-label":l,title:l},(0,O.u)("span",{"aria-hidden":"true",class:this.classes(he.childClosed,he.iconRightArrow)}),(0,O.u)("span",{"aria-hidden":"true",class:this.classes(he.childOpened,he.iconDownArrow)}),(0,O.u)("span",{"aria-hidden":"true",class:this.classes(he.childClosed_RTL,he.iconLeftArrow)})):null}renderItemMessage(e){return e.error?(0,O.u)("div",{key:"esri-layer-list__error",class:he.message,role:"alert"},(0,O.u)("span",{"aria-hidden":"true",class:he.iconNoticeTriangle}),this.messages.layerError):e.incompatible?(0,O.u)("div",{key:"esri-layer-list__incompatible",class:he.message,role:"alert"},(0,O.u)("span",{bind:this,tabIndex:0,"aria-hidden":"true",class:he.iconNoticeTriangle,afterCreate:t=>this._setTooltipReference(t,e)}),this.messages.layerIncompatible):null}renderItemContent(e,t,i){const{id:s}=this,n=`${s}_${e.uid}`,l=`${n}_actions`,o=`${n}__list`,{panel:r}=e,a=this._filterActions(e.actionsSections),d=this._countActions(a);return[(0,O.u)("div",{key:"list-item-container",class:he.itemContainer},this.renderChildrenToggle(e,o),this.renderLabel(e,t,i),this.renderActionsMenu(e,a,d,l)),this.renderItemMessage(e),d?this.renderActionsSections(e,a,l):null,r&&r.open&&!r.disabled?r.render():null,this.renderChildList(e,o)]}renderItem(e,t){const{_newUI:i,id:s,selectionEnabled:n,selectedItems:l}=this,o=`${s}_${e.uid}__title`,r=this._hasMessage(e),a=this._hasChildren(e),d={[he.itemChildren]:a,[he.itemMessage]:!!r,[he.itemInvisible]:i&&!e.visible,[he.itemInvisibleAtScale]:!e.visibleAtCurrentScale,[he.itemSelectable]:n};if(n){const i={[ae]:e.layer?.uid,[re]:(!e.sortable).toString()};return(0,O.u)("li",{key:`item-with-selection-${e.uid}`,bind:this,afterCreate:this._focusListItem,afterUpdate:this._focusListItem,class:this.classes(he.item,d),"aria-labelledby":o,onclick:this._toggleSelection,onkeydown:this._selectionKeydown,"data-item":e,"data-group":t?t.uid:_e,tabIndex:0,"aria-selected":E(e,l)?"true":"false",role:"option",...i},this.renderItemContent(e,t,o))}return(0,O.u)("li",{key:`item-no-selection-${e.uid}`,bind:this,afterCreate:this._focusListItem,afterUpdate:this._focusListItem,class:this.classes(he.item,d),"aria-labelledby":o},this.renderItemContent(e,t,o))}renderConnectionIcon(e){const{connectionStatus:t}=e;return(0,d.pC)(t)?(0,O.u)("calcite-icon",{icon:"connected"===t?"check-circle":"offline",scale:"s"}):null}renderItemStatus(e,t){const{visibleElements:i}=this;if(!i.statusIndicators)return null;const{connectionStatus:s,publishing:n,updating:l}=e,o=l&&!t,r=!!s;return(0,O.u)("span",{class:this.classes({[he.statusIndicator]:!0,[he.publishing]:n,[he.updating]:o,[he.connectionStatus]:r,[he.connectionStatusConnected]:r&&"connected"===s}),key:"layer-item-status"},this.renderConnectionIcon(e))}renderItemTitle(e,t){const{messages:i}=this;if(!e)return null;const s=e.title||i.untitledLayer,n=e.visibleAtCurrentScale?s:`${s} (${i.layerInvisibleAtScale})`;return(0,O.u)("span",{key:"layer-title-container",id:t,title:n,"aria-label":n,class:he.title},s)}renderItemToggleIcon(e,t){const{_newUI:i}=this,{exclusive:s}=me,n=t&&t.visibilityMode,l={[he.toggleVisibleIcon]:i,[he.toggleIcon]:i&&n!==s,[he.radioIcon]:i&&n===s,[he.iconRadioSelected]:n===s&&e.visible,[he.iconRadioUnselected]:n===s&&!e.visible,[he.iconVisible]:n!==s&&e.visible,[he.iconInvisible]:n!==s&&!e.visible};return(0,O.u)("span",{key:"item-toggle-icon",class:this.classes(l),"aria-hidden":"true"})}renderItemToggle(e,t,i){const{selectionEnabled:s,messages:n}=this,{exclusive:l}=me,o=t&&t.visibilityMode,r=o===l?"radio":"switch";return(0,O.u)("span",s?{key:"item-toggle-selection-enabled",class:he.toggleVisible,bind:this,onclick:this._toggleVisibility,onkeydown:this._toggleVisibility,"data-item":e,"data-parent-visibility":o,tabIndex:0,title:e.visible?n.hideLayer:n.showLayer,"aria-checked":e.visible?"true":"false",role:r,"aria-labelledby":i}:{key:"item-toggle",class:he.toggleVisible},this.renderItemToggleIcon(e,t))}renderLabel(e,t,i){const{selectionEnabled:s,_newUI:n,messages:l}=this,{inherited:o,exclusive:r}=me,a=t?.visibilityMode,d=a===r?"radio":"switch",c=n?[this.renderItemTitle(e,i),this.renderItemStatus(e,t),this.renderItemToggle(e,t,i)]:[this.renderItemToggle(e,t,i),this.renderItemTitle(e,i),this.renderItemStatus(e,t)],h=(0,O.u)("div",s?{key:`item-label-no-selection-${e.uid}`,class:he.label}:{key:`item-label-with-selection-${e.uid}`,class:he.label,bind:this,onclick:this._toggleVisibility,onkeydown:this._toggleVisibility,"data-item":e,"data-parent-visibility":a,tabIndex:0,"aria-checked":e.visible?"true":"false",title:e.visible?l.hideLayer:l.showLayer,role:d,"aria-labelledby":i},c);return a===o||e.error?(0,O.u)("div",{key:`item-label-container-${e.uid}`,class:he.label},this.renderItemTitle(e,i),this.renderItemStatus(e,t)):h}renderPanelButton(e){const{className:t,open:i,title:s,image:n}=e,l=n||t?t:he.iconDefaultAction,o=this._getIconImageStyles(e),r={[he.actionsMenuItemActive]:i},a={[he.actionImage]:!!o["background-image"],[he.disabledElement]:e.disabled};return l&&(a[l]=!!l),(0,O.u)("div",{"aria-disabled":e.disabled.toString(),key:`panel-${e.uid}`,bind:this,"data-panel":e,onclick:this._triggerPanel,onkeydown:this._triggerPanel,class:this.classes(he.actionsMenuItem,r),role:"button",tabindex:e.disabled?null:0,title:s,"aria-label":s},(0,O.u)("span",{class:this.classes(a),styles:o}))}renderActionsSections(e,t,i){const s=t.toArray().map(((t,i)=>(0,O.u)("ul",{key:`${e}-action-section-${i}`,class:he.actionsList},this.renderActionSection(e,t))));return(0,O.u)("div",{role:"group","aria-expanded":e.actionsOpen?"true":"false",key:"actions-section",id:i,class:he.actions,hidden:!e.actionsOpen||null},s)}renderActionSection(e,t){return(t&&t.toArray()).map((t=>this.renderAction({item:e,action:t})))}renderActionIcon(e){const{active:t,className:i}=e,s=this._getIconImageStyles(e),n="button"!==e.type||e.image||i?i:he.iconDefaultAction,l={[he.actionImage]:!t&&!!s["background-image"],[he.iconLoading]:t,[he.rotating]:t};return n&&!t&&(l[n]=!0),(0,O.u)("span",{key:"action-icon","aria-hidden":"true",class:this.classes(he.actionIcon,l),styles:s})}renderActionTitle(e,t){return t?null:(0,O.u)("span",{key:"action-title",class:he.actionTitle},e)}renderAction(e){const{item:t,action:i,singleAction:s}=e,{active:n,disabled:l,title:o}=i,r={[he.actionsMenuItem]:s&&"button"===i.type,[he.action]:n||!s&&"toggle"!==i.type,[he.actionToggle]:!n&&"toggle"===i.type,[he.actionToggleOn]:!n&&"toggle"===i.type&&i.value,[he.disabledElement]:l},a=[this.renderActionIcon(i),this.renderActionTitle(o,s)];return s?(0,O.u)("div",{bind:this,"data-item":t,"data-action":i,role:"button",key:`single-action-${i.uid}`,onclick:this._triggerAction,onkeydown:this._triggerAction,classes:r,tabindex:"0",title:o,"aria-label":o},a):(0,O.u)("li",{bind:this,"data-item":t,"data-action":i,key:`action-${i.uid}`,onclick:this._triggerAction,onkeydown:this._triggerAction,classes:r,tabindex:"0",role:"button",title:o,"aria-label":o},a)}_setTooltipReference(e,t){this._tooltipReferenceMap.set(t.uid,e),this.scheduleRender()}_hasMessage(e){return!!e.error||e.incompatible}_hasChildren(e){return!!e.children.length&&!this._hasMessage(e)}_sortNodeRemoved(e){const{_sortableMap:t}=this,i=e.dataset.group,s=t.get(i);s&&s.destroy(),t.delete(i)}_destroySortables(){const{_sortableMap:e,_sortableNodes:t}=this;e.forEach((e=>e&&e.destroy())),e.clear(),t.clear()}_moveLayerFromChildList(e){let{to:t,from:i,item:s,newIndex:n}=e;const l=s["data-item"],o=t["data-item"],r=i["data-item"];this.viewModel.moveListItem(l,r,o,n)}_sortLayers(e){if(!e)return;const t=e.el["data-item"],i=e.toArray();t?function(e,t){const i=e?.layer;if(!i)return;const s=k(i);s&&M(i.get(s),t)}(t,i):M(this.view?.map?.layers,i)}_toggleSorting(e,t){const{_sortableMap:i,selectionEnabled:s}=this,n=i.get(t),l=e["data-item"],o=(t===_e||l.childrenSortable&&function(e){const t=e&&(e.get("layer.layer")||e.layer);if(!t)return!1;const i=t.get("capabilities.exportMap.supportsDynamicLayers");return"boolean"!=typeof i||i}(l))&&s;if(n)n.option("disabled",!o);else if(o){const s=ne.ZP.create(e,{dataIdAttr:ae,group:{name:t,pull:this._sortableCanPull,put:this._sortableCanPut},filter:`[${re}="true"]`,fallbackTolerance:4,onSort:this._onSortableSort,onEnd:this._onSortableEnd,disabled:!o,chosenClass:he.sortableChosen});i.set(t,s)}}_toggleAllSorting(){this._sortableNodes.forEach(((e,t)=>this._toggleSorting(e,t)))}_sortNodeCreated(e){const t=e.dataset.group;t&&(this._sortableNodes.set(t,e),this._toggleSorting(e,t))}_setVisibleItems(e){this.visibleItems=e?.filter((e=>!e.hidden&&(this.visibleElements.errors||!e.error)))}_getSingleActionButton(e){return e.reduce((e=>e)).filter((e=>e&&"button"===e.type)).getItemAt(0)}_focusListItem(e){const{_focusSortUid:t}=this;e&&t&&e["data-item"].layer?.uid===t&&(e.focus(),this._focusSortUid=null)}_watchActionSectionChanges(e,t){const i=pe+t;this._handles.add(e.on("change",this.scheduleRender.bind(this)),i),e.forEach((e=>this._renderOnActionChanges(e,t)))}_renderOnActionChanges(e,t){const i=ue+t;"toggle"!==e.type?"slider"!==e.type?this._handles.add((0,c.YP)((()=>[e?.className,e?.image,e?.id,e?.title,e?.visible]),(()=>this.scheduleRender()),c.nn),i):this._handles.add((0,c.YP)((()=>[e?.className,e?.id,e?.title,e?.visible,e?.value,e?.displayValueEnabled,e?.max,e?.min,e?.step]),(()=>this.scheduleRender()),c.nn),i):this._handles.add((0,c.YP)((()=>[e?.className,e?.image,e?.id,e?.title,e?.visible,e?.value]),(()=>this.scheduleRender()),c.nn),i)}_renderOnItemChanges(e){const t=e.uid,i=ge+t;this._handles.add([(0,c.YP)((()=>[e?.actionsOpen,e?.visible,e?.open,e?.updating,e?.connectionStatus,e?.publishing,e?.title,e?.visibleAtCurrentScale,e?.error,e?.visibilityMode,e?.panel,e?.panel?.title,e?.panel?.content,e?.panel?.className,e?.sortable,e?.childrenSortable]),(()=>this.scheduleRender()),c.tX),(0,c.YP)((()=>[e?.hidden,e?.error]),(()=>this._setVisibleItems(this.operationalItems))),e.actionsSections.on("change",(()=>this.scheduleRender())),e.children.on("change",(()=>this.scheduleRender()))],i),e.children.forEach((e=>this._renderOnItemChanges(e))),e.actionsSections.forEach((e=>this._watchActionSectionChanges(e,t)))}_itemsChanged(e){this._handles.removeAll(),e.forEach((e=>this._renderOnItemChanges(e))),this._tooltipReferenceMap.clear(),this._setVisibleItems(e),this.scheduleRender()}_filterActions(e){return e.map((e=>e.filter((e=>e.visible))))}_countActions(e){return e.reduce(((e,t)=>e+t.length),0)}_getIconImageStyles(e){const t="esri.widgets.LayerList.ListItemPanel"===e.declaredClass||"esri.support.Action.ActionButton"===e.declaredClass||"esri.support.Action.ActionToggle"===e.declaredClass?e.image:null;return{"background-image":t?`url("${t}")`:null}}_selectionKeydown(e){const t=(0,o.kK)(e);if(!["ArrowDown","ArrowUp"].includes(t))return void this._toggleSelection(e);e.stopPropagation();const i=e.currentTarget,s=i["data-item"],{_sortableMap:n,selectedItems:l}=this,r=i.dataset.group,a=n.get(r);if(!a)return;const d=E(s,l),c=a.toArray(),h=e.target,u=c.indexOf(h.dataset.layerUid);if(-1!==u){if("ArrowDown"===t){const e=u+1;if(e>=c.length)return;d?(le(c,u,e),a.sort(c),this._sortLayers(a),this._focusSortUid=s.layer?.uid):(this._focusSortUid=s.layer?.uid,this.scheduleRender())}if("ArrowUp"===t){const e=u-1;if(e<=-1)return;d?(le(c,u,e),a.sort(c),this._sortLayers(a),this._focusSortUid=s.layer?.uid):(this._focusSortUid=s.layer?.uid,this.scheduleRender())}}}_toggleActionsOpen(e){const t=e.currentTarget["data-item"],{actionsOpen:i}=t,s=!i;s&&this.operationalItems.forEach((e=>be(e))),t.actionsOpen=s,e.stopPropagation()}_triggerPanel(e){const t=e.currentTarget["data-panel"];e.stopPropagation(),t&&!t.disabled&&(t.open=!t.open)}_triggerAction(e){const t=e.currentTarget,i=t["data-action"],s=t["data-item"];"toggle"===i.type&&(i.value=!i.value),this.triggerAction(i,s),e.stopPropagation()}_toggleVisibility(e){const t=e.currentTarget,i=t.getAttribute("data-parent-visibility"),s=t["data-item"];i===me.exclusive&&s.visible||(s.visible=!s.visible),e.stopPropagation()}_toggleChildrenClick(e){const t=e.currentTarget["data-item"];t.open=!t.open,e.stopPropagation()}_toggleSelection(e){e.stopPropagation();const{multipleSelectionEnabled:t,selectedItems:i}=this,s=e.currentTarget["data-item"],n=E(s,i),{length:l}=i;if(!t)return!l||n&&1===l?void(n?i.remove?.(n):i.add(s)):(i.removeAll(),void i.add(s));n?i.remove?.(n):i.add(s)}};(0,n._)([(0,h.Cb)()],ve.prototype,"visibleItems",void 0),(0,n._)([(0,h.Cb)()],ve.prototype,"iconClass",void 0),(0,n._)([(0,h.Cb)()],ve.prototype,"label",null),(0,n._)([(0,h.Cb)()],ve.prototype,"listItemCanGiveFunction",void 0),(0,n._)([(0,h.Cb)()],ve.prototype,"listItemCanReceiveFunction",void 0),(0,n._)([(0,h.Cb)()],ve.prototype,"listItemCreatedFunction",null),(0,n._)([(0,h.Cb)(),(0,ie.H)("esri/widgets/LayerList/t9n/LayerList")],ve.prototype,"messages",void 0),(0,n._)([(0,h.Cb)(),(0,ie.H)("esri/t9n/common")],ve.prototype,"messagesCommon",void 0),(0,n._)([(0,h.Cb)()],ve.prototype,"multipleSelectionEnabled",void 0),(0,n._)([(0,h.Cb)()],ve.prototype,"operationalItems",null),(0,n._)([(0,h.Cb)()],ve.prototype,"selectionEnabled",void 0),(0,n._)([(0,h.Cb)()],ve.prototype,"selectedItems",void 0),(0,n._)([(0,h.Cb)()],ve.prototype,"view",null),(0,n._)([(0,se.s)("trigger-action"),(0,h.Cb)({type:ee})],ve.prototype,"viewModel",void 0),(0,n._)([(0,h.Cb)()],ve.prototype,"visibleElements",void 0),(0,n._)([(0,u.p)("visibleElements")],ve.prototype,"castVisibleElements",null),(0,n._)([(0,te.h)()],ve.prototype,"_toggleActionsOpen",null),(0,n._)([(0,te.h)()],ve.prototype,"_triggerPanel",null),(0,n._)([(0,te.h)()],ve.prototype,"_triggerAction",null),(0,n._)([(0,te.h)()],ve.prototype,"_toggleVisibility",null),(0,n._)([(0,te.h)()],ve.prototype,"_toggleChildrenClick",null),(0,n._)([(0,te.h)()],ve.prototype,"_toggleSelection",null),ve=(0,n._)([(0,p.j)("esri.widgets.LayerList")],ve);const Ie=ve}}]);
//# sourceMappingURL=5387.1416d29b.chunk.js.map