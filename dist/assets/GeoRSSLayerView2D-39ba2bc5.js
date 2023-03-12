import{z as l,D as h,bD as g,E as f,nP as w,hV as u,nQ as n,e as d,a as b}from"./index-3baec1e8.js";import{f as V}from"./LayerView2D-785741e8.js";import{i as S}from"./GraphicContainer-7930cee7.js";import{a as _}from"./GraphicsView2D-ec90bead.js";import{u as T}from"./LayerView-6dd1371b.js";import"./Container-4a91c2fe.js";import"./EffectView-afae9832.js";import"./definitions-19bfb61c.js";import"./enums-64ab819c.js";import"./Texture-fc8c3a1e.js";import"./color-c3cd82c3.js";import"./enums-55085e26.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-b10bd8f5.js";import"./BaseGraphicContainer-4dd74001.js";import"./FeatureContainer-0a70784b.js";import"./AttributeStoreView-8d3816f3.js";import"./TiledDisplayObject-d59cbd49.js";import"./visualVariablesUtils-d0905b43.js";import"./visualVariablesUtils-92509212.js";import"./VertexArrayObject-741e2cbe.js";import"./TileContainer-b4f1c910.js";import"./WGLContainer-0d718b65.js";import"./vec4f32-0d1b2306.js";import"./ProgramTemplate-e12d06ba.js";import"./MaterialKey-99779fbd.js";import"./alignmentUtils-ae955d28.js";import"./utils-a479217c.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./earcut-61f7b102.js";import"./vec3f32-ad1dc57f.js";import"./cimAnalyzer-90e30a1b.js";import"./fontUtils-900716a0.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./callExpressionWithFeature-995a07d3.js";import"./floatRGBA-8334d045.js";import"./normalizeUtilsSync-a7753d41.js";import"./Matcher-aa402022.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-c8e52ae4.js";import"./ExpandedCIM-da0c80f4.js";import"./schemaUtils-5dff1072.js";import"./util-5de54085.js";import"./ComputedAttributeStorage-45340486.js";import"./arcadeTimeUtils-acf15f72.js";import"./centroid-7a1ceecc.js";let y=class extends V(T){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(i,r){if(!this.graphicsViews.length)return null;const o=this.layer;return this.graphicsViews.reverse().map(e=>{const t=this._popupTemplates.get(e),s=e.hitTest(i);for(const p of s)p.layer=o,p.sourceLayer=o,p.popupTemplate=t;return s}).flat().map(e=>({type:"graphic",graphic:e,layer:o,mapPoint:i}))}update(i){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(i)}attach(){this.addAttachHandles([l(()=>{var i;return(i=this.layer)==null?void 0:i.featureCollections},i=>{this._clear();for(const{popupInfo:r,featureSet:o,layerDefinition:e}of i){const t=g.fromJSON(o),s=new f(t.features),p=e.drawingInfo,c=r?w.fromJSON(r):null,a=u(p.renderer),m=new _({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:s,renderer:a,container:new S(this.view.featuresTilingScheme)});this._graphicsViewMap[t.geometryType]=m,this._popupTemplates.set(m,c),t.geometryType!=="polygon"||this.layer.polygonSymbol?t.geometryType!=="polyline"||this.layer.lineSymbol?t.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(m),this.container.addChild(m.container)}},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.polygonSymbol},i=>{this._graphicsViewMap.polygon.renderer=new n({symbol:i})},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.lineSymbol},i=>{this._graphicsViewMap.polyline.renderer=new n({symbol:i})},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.pointSymbol},i=>{this._graphicsViewMap.point.renderer=new n({symbol:i})},h)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews)i.viewChange()}_clear(){this.container.removeAllChildren();for(const i of this.graphicsViews)i.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=d([b("esri.views.2d.layers.GeoRSSLayerView2D")],y);const Vi=y;export{Vi as default};
