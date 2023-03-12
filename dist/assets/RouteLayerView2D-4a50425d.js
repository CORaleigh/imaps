import{D as l,o2 as m,I as a,B as u,as as _,x as c,e as n,y as d,a as w}from"./index-7753bab1.js";import{b as y,h as f,O as k,g as M,f as v,a as I,D as V}from"./Stop-fa77aed6.js";import{f as G}from"./LayerView2D-b33f1dd0.js";import{i as F}from"./GraphicContainer-5ad38b7e.js";import{a as H}from"./GraphicsView2D-ca6259e4.js";import{u as C}from"./LayerView-cbdf5e80.js";import"./Container-e3ecda87.js";import"./EffectView-9a9cc65b.js";import"./definitions-19bfb61c.js";import"./enums-64ab819c.js";import"./Texture-280a81f5.js";import"./color-12b7e170.js";import"./enums-55085e26.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-b10bd8f5.js";import"./BaseGraphicContainer-07fa04bd.js";import"./FeatureContainer-21cef038.js";import"./AttributeStoreView-f3aaf29c.js";import"./TiledDisplayObject-5d69f8c4.js";import"./visualVariablesUtils-12809f65.js";import"./visualVariablesUtils-adab3121.js";import"./VertexArrayObject-6236f727.js";import"./TileContainer-4fbb726d.js";import"./WGLContainer-96eaf2e6.js";import"./vec4f32-0d1b2306.js";import"./ProgramTemplate-2e0574b1.js";import"./MaterialKey-3f38180b.js";import"./alignmentUtils-ae955d28.js";import"./utils-4f0216af.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./earcut-61f7b102.js";import"./vec3f32-ad1dc57f.js";import"./cimAnalyzer-722d658f.js";import"./fontUtils-e3f547af.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./callExpressionWithFeature-7be86a04.js";import"./floatRGBA-bba05acf.js";import"./normalizeUtilsSync-cc2bb1e6.js";import"./Matcher-e9338b7e.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-4a50d17a.js";import"./ExpandedCIM-cef3d690.js";import"./schemaUtils-7a3def44.js";import"./util-64d9ac67.js";import"./ComputedAttributeStorage-a430cba7.js";import"./arcadeTimeUtils-4fcddf82.js";import"./centroid-dd07ec07.js";const b=Object.freeze({remove(){},pause(){},resume(){}}),U=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],o={graphic:null,property:null,oldValue:null,newValue:null};function g(t){return t instanceof y||t instanceof f||t instanceof k||t instanceof M||t instanceof v||t instanceof I||t instanceof V}function O(t){return l.isCollection(t)&&t.length&&g(t.getItemAt(0))}function A(t){return Array.isArray(t)&&t.length>0&&g(t[0])}let h=class extends G(C){constructor(){super(...arguments),this._graphics=new l,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map}get _routeItems(){return new m({getCollections:()=>a(this.layer)&&!this.destroyed?[a(this.layer.routeInfo)?new l([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]:[]})}initialize(){this.updatingHandles.addOnCollectionChange(()=>this._routeItems,t=>this._routeItemsChanged(t),u)}destroy(){var t;this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll(),(t=this._get("_routeItems"))==null||t.destroy()}attach(){this._createGraphicsView()}detach(){this._destroyGraphicsView()}async fetchPopupFeatures(t){return this._graphicsView.hitTest(t).filter(e=>!!e.popupTemplate)}highlight(t){let e;e=g(t)?[this._getNetworkFeatureUid(t)]:A(t)?t.map(r=>this._getNetworkFeatureUid(r)):O(t)?t.map(r=>this._getNetworkFeatureUid(r)).toArray():[t.uid];const i=e.filter(a);return i.length?(this._addHighlight(i),{remove:()=>this._removeHighlight(i)}):b}async hitTest(t,e){if(this.suspended)return null;const i=this._graphicsView.hitTest(t).filter(a).map(s=>this._networkGraphicMap.get(s));if(!i.length)return null;const{layer:r}=this;return i.reverse().map(s=>({type:"route",layer:r,mapPoint:t,networkFeature:s}))}isUpdating(){return this._graphicsView.updating}moveStart(){}moveEnd(){}update(t){this._graphicsView.processUpdate(t)}viewChange(){this._graphicsView.viewChange()}_addHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e);this._highlightIds.set(e,i+1)}else this._highlightIds.set(e,1);this._updateHighlight()}_createGraphic(t){const e=t.toGraphic();return e.layer=this.layer,e.sourceLayer=this.layer,e}_createGraphicsView(){const t=this.view,e=()=>this.requestUpdate(),i=new F(t.featuresTilingScheme);this._graphicsView=new H({container:i,graphics:this._graphics,requestUpdateCallback:e,view:t}),this.container.addChild(i),this._updateHighlight()}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy()}_getDrawOrder(t){const e=this._networkGraphicMap.get(t);return U.indexOf(e.type)}_getNetworkFeatureUid(t){return this._networkFeatureMap.has(t)?this._networkFeatureMap.get(t).uid:null}_removeHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e)-1;i===0?this._highlightIds.delete(e):this._highlightIds.set(e,i)}this._updateHighlight()}_routeItemsChanged(t){if(t.removed.length){this._graphics.removeMany(t.removed.map(e=>{const i=this._networkFeatureMap.get(e);return this._networkFeatureMap.delete(e),this._networkGraphicMap.delete(i),i}));for(const e of t.removed)this.removeHandles(e)}if(t.added.length){this._graphics.addMany(t.added.map(e=>{const i=this._createGraphic(e);return _(i.symbol)?null:(this._networkFeatureMap.set(e,i),this._networkGraphicMap.set(i,e),i)}).filter(a));for(const e of t.added)this.addHandles([c(()=>e.geometry,(i,r)=>{this._updateGraphic(e,"geometry",i,r)}),c(()=>e.symbol,(i,r)=>{this._updateGraphic(e,"symbol",i,r)})],e);this._graphics.sort((e,i)=>this._getDrawOrder(e)-this._getDrawOrder(i))}}_updateGraphic(t,e,i,r){if(!this._networkFeatureMap.has(t)){const p=this._createGraphic(t);return this._networkFeatureMap.set(t,p),this._networkGraphicMap.set(p,t),void this._graphics.add(p)}const s=this._networkFeatureMap.get(t);s[e]=i,o.graphic=s,o.property=e,o.oldValue=r,o.newValue=i,this._graphicsView.graphicUpdateHandler(o)}_updateHighlight(){const t=Array.from(this._highlightIds.keys());this._graphicsView.setHighlight(t)}};n([d()],h.prototype,"_graphics",void 0),n([d()],h.prototype,"_routeItems",null),h=n([w("esri.views.2d.layers.RouteLayerView2D")],h);const Ut=h;export{Ut as default};
