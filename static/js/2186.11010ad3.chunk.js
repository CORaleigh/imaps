"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[2186],{39383:(e,t,s)=>{s.d(t,{T:()=>f});var i=s(66978),r=s(43e3),a=s(26885),n=s(55067),o=s(92026),l=s(17842),h=s(68860),d=s(49229),p=s(84319),c=s(10435),u=s(98029),g=s(90316);function v(e,t){const s=t.length;if(e<t[0].value||1===s)return t[0].size;for(let i=1;i<s;i++)if(e<t[i].value){const s=(e-t[i-1].value)/(t[i].value-t[i-1].value);return t[i-1].size+s*(t[i].size-t[i-1].size)}return t[s-1].size}class y{constructor(){this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this.outsideLabelsVisible=!1,this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1},this._technique=c.v}getSizeVVFieldStops(e){const t=this._vvSizeFieldStops;if(t)switch(t.type){case"static":return t;case"level-dependent":return(0,o.Pt)(t.levels[e],(()=>{let s=1/0,i=0;for(const o in t.levels){const t=parseFloat(o),r=Math.abs(e-t);r<s&&(s=r,i=t)}if(s===1/0)return{sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])};const r=2**((e-i)/2),a=(0,o.Wg)(t.levels[i]),n=new Float32Array(a.values);return n[2]*=r,n[3]*=r,{sizes:(0,o.Wg)(a.sizes),values:n}}));default:return}}get vvMaterialParameters(){return this._vvMaterialParameters}update(e){(0,o.pC)(this._vvInfo)&&this._updateVisualVariables(this._vvInfo.vvRanges,e)}setInfo(e,t,s){this._updateEffects(s),this._vvInfo=t,this._technique=(0,u.EJ)(e),this.rendererSchema=this._technique.createOrUpdateRendererSchema(this.rendererSchema,e)}getVariation(){return{...this._technique.getVariation(this.rendererSchema),outsideLabelsVisible:this.outsideLabelsVisible,supportsTextureFloat:(0,g.hc)("2d").supportsTextureFloat}}getVariationHash(){return this._technique.getVariationHash(this.rendererSchema)<<1|(this.outsideLabelsVisible?1:0)}_updateEffects(e){(0,o.pC)(e)?this.outsideLabelsVisible=e.excludedLabelsVisible:this.outsideLabelsVisible=!1}_updateVisualVariables(e,t){const s=this._vvMaterialParameters;if(s.vvOpacityEnabled=!1,s.vvSizeEnabled=!1,s.vvColorEnabled=!1,s.vvRotationEnabled=!1,!e)return;const i=e.size;if(i){if(s.vvSizeEnabled=!0,i.minMaxValue){const e=i.minMaxValue;let s,r;if((0,p.$K)(e.minSize)&&(0,p.$K)(e.maxSize))if((0,p.hj)(e.minSize)&&(0,p.hj)(e.maxSize))s=(0,l.F2)(e.minSize),r=(0,l.F2)(e.maxSize);else{const i=t.scale;s=(0,l.F2)(v(i,e.minSize.stops)),r=(0,l.F2)(v(i,e.maxSize.stops))}this.vvSizeMinMaxValue.set([e.minDataValue,e.maxDataValue,s,r])}if(i.scaleStops&&(this.vvSizeScaleStopsValue=(0,l.F2)(v(t.scale,i.scaleStops.stops))),i.unitValue){const e=(0,h.c9)(t.spatialReference)/d.a[i.unitValue.unit];this.vvSizeUnitValueToPixelsRatio=e/t.resolution}i.fieldStops&&(this._vvSizeFieldStops=i.fieldStops)}const r=e.color;r&&(s.vvColorEnabled=!0,this.vvColorValues.set(r.values),this.vvColors.set(r.colors));const a=e.opacity;a&&(s.vvOpacityEnabled=!0,this.vvOpacityValues.set(a.values),this.vvOpacities.set(a.opacities));const n=e.rotation;n&&(s.vvRotationEnabled=!0,s.vvRotationType=n.type)}}class f extends n.Z{constructor(e){super(e),this._rendererInfo=new y,this._materialItemsRequestQueue=new r.Z,this.attributeView=new a.H((()=>this.onAttributeStoreUpdate()))}destroy(){this.children.forEach((e=>e.destroy())),this.removeAllChildren(),this.attributeView.destroy(),this._materialItemsRequestQueue.clear()}setRendererInfo(e,t,s){this._rendererInfo.setInfo(e,t,s),this.requestRender()}async getMaterialItems(e,t){if(!e||0===e.length)return[];const s=(0,i.hh)();return this._materialItemsRequestQueue.push({items:e,abortOptions:t,resolver:s}),this.requestRender(),s.promise}doRender(e){if(e.context.capabilities.enable("textureFloat"),e.context.capabilities.enable("vao"),this._materialItemsRequestQueue.length>0){let t=this._materialItemsRequestQueue.pop();for(;t;)this._processMaterialItemRequest(e,t),t=this._materialItemsRequestQueue.pop()}super.doRender(e)}renderChildren(e){for(const t of this.children)t.commit(e);this._rendererInfo.update(e.state),super.renderChildren(e)}updateTransforms(e){if(this.children.some((e=>e.hasData)))for(const t of this.children)t.setTransform(e)}createRenderParams(e){const t=super.createRenderParams(e);return t.rendererInfo=this._rendererInfo,t.attributeView=this.attributeView,t}onAttributeStoreUpdate(){}_processMaterialItemRequest(e,t){let{items:s,abortOptions:i,resolver:r}=t;const{painter:a,pixelRatio:n}=e,o=s.map((e=>a.textureManager.rasterizeItem(e.symbol,n,e.glyphIds,i)));Promise.all(o).then((e=>{if(!this.stage)return void r.reject();const t=e.map(((e,t)=>({id:s[t].id,mosaicItem:e})));r.resolve(t)}),r.reject)}}},47037:(e,t,s)=>{s.d(t,{G:()=>a});var i=s(64510),r=s(8548);class a extends i.Z{constructor(){super(...arguments),this._prevFBO=void 0,this.requiresDedicatedFBO=!1}dispose(){}doRender(e){const t=this.createRenderParams(e),{context:s,painter:i,profiler:a}=t;this._prevFBO=s.getBoundFramebufferObject(),a.recordContainerStart(this.name);const n=this._getFbo(t),o=i.getRenderTarget();s.bindFramebuffer(n),i.setRenderTarget(n),s.setDepthWriteEnabled(!0),s.setColorMask(!0,!0,!0,!0),s.setClearColor(0,0,0,0),s.setClearDepth(1),s.clear(s.gl.COLOR_BUFFER_BIT|s.gl.DEPTH_BUFFER_BIT),s.setDepthWriteEnabled(!1);for(const r of this.children)r.beforeRender(e);for(const r of this.children)r.processRender(t);for(const r of this.children)r.afterRender(e);i.setRenderTarget(o),i.releaseFbo(n),s.bindFramebuffer(this._prevFBO),i.beforeRenderLayer(t,this._clippingInfos?255:0,this.computedOpacity),n.colorTexture&&(s.setStencilTestEnabled(!1),s.setStencilWriteMask(0),i.blitTexture(s,n.colorTexture,r.cw.NEAREST)),i.compositeLayer(t,this.computedOpacity),a.recordContainerEnd()}createRenderParams(e){return{...super.createRenderParams(e),blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:1}}_getFbo(e){const{context:t,painter:s}=e,{width:i,height:r}=t.getViewport();return s.acquireFbo(i,r)}}},55067:(e,t,s)=>{s.d(t,{Z:()=>h});var i=s(93169),r=s(80613),a=s(64510),n=s(52424),o=s(40655);const l=(e,t)=>e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col;class h extends a.Z{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(l),this.setStencilReference(e),super.renderChildren(e)}createRenderParams(e){const{state:t}=e,s=super.createRenderParams(e);return s.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,s.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(t.scale),s}prepareRenderPasses(e){const t=super.prepareRenderPasses(e);return t.push(e.registerRenderPass({name:"stencil",brushes:[o.Z],drawPhase:r.jx.DEBUG|r.jx.MAP|r.jx.HIGHLIGHT,target:()=>this.getStencilTarget()})),(0,i.Z)("esri-tiles-debug")&&t.push(e.registerRenderPass({name:"tileInfo",brushes:[n.Z],drawPhase:r.jx.DEBUG,target:()=>this.children})),t}getStencilTarget(){return this.children}setStencilReference(e){let t=1;for(const s of this.children)s.stencilRef=t++}}},95986:(e,t,s)=>{s.d(t,{y:()=>M});var i=s(27366),r=s(40281),a=s(60354),n=s(10064),o=s(94172),l=s(49861),h=(s(25243),s(63780),s(69912)),d=s(33624),p=s(64634),c=s(46784);let u=class extends c.wq{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,i._)([(0,l.Cb)({readOnly:!0})],u.prototype,"version",null),u=(0,i._)([(0,h.j)("esri.views.layers.support.ClipArea")],u);const g=u;var v;let y=v=class extends g{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new v({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,i._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],y.prototype,"left",void 0),(0,i._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],y.prototype,"right",void 0),(0,i._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],y.prototype,"top",void 0),(0,i._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],y.prototype,"bottom",void 0),y=v=(0,i._)([(0,h.j)("esri.views.layers.support.ClipRect")],y);const f=y;s(59486);var m,_=s(32238),b=s(77981),w=s(53866),R=s(80885);const C={base:_.Z,key:"type",typeMap:{extent:w.Z,polygon:R.Z}};let S=m=class extends g{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){return new m({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,i._)([(0,l.Cb)({types:C,json:{read:b.im,write:!0}})],S.prototype,"geometry",void 0),S=m=(0,i._)([(0,h.j)("esri.views.layers.support.Geometry")],S);const V=S;let x=class extends g{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,i._)([(0,l.Cb)({type:[[[Number]]],json:{write:!0}})],x.prototype,"path",void 0),x=(0,i._)([(0,h.j)("esri.views.layers.support.Path")],x);const I=x,P=r.Z.ofType({key:"type",base:null,typeMap:{rect:f,path:I,geometry:V}}),M=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new P,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){const e=this.view?.spatialReferenceLocked??!0,t=this.view?.spatialReference;t&&e&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new n.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new d.W),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,o.YP)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),o.tX),(0,o.YP)((()=>this.layer?.opacity??1),(e=>{this.container&&(this.container.opacity=e)}),o.tX),(0,o.YP)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),o.tX),(0,o.YP)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),o.tX),(0,o.YP)((()=>this.highlightOptions),(e=>this.container.highlightOptions=e),o.tX),(0,o.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),o.tX),(0,o.YP)((()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null})),(e=>{let{scale:t}=e;const s=null!=t&&this.isVisibleAtScale(t);s!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",s)}),o.tX)],"constructor"),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){const e=this.view?.spatialReference;return null==e||this.supportsSpatialReference(e)}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this.updatingHandles?.updating)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;const{minScale:s,maxScale:i}=t;return(0===s||e<=s)&&(0===i||e>=i)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,s=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),s&&(e.outsideScaleRange=s),e}addAttachHandles(e){this.addHandles(e,"attach")}};return(0,i._)([(0,l.Cb)()],t.prototype,"attached",void 0),(0,i._)([(0,l.Cb)({type:P,set(e){const t=(0,a.Z)(e,this._get("clips"),P);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,i._)([(0,l.Cb)()],t.prototype,"container",void 0),(0,i._)([(0,l.Cb)()],t.prototype,"moving",void 0),(0,i._)([(0,l.Cb)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,i._)([(0,l.Cb)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,i._)([(0,l.Cb)()],t.prototype,"updateRequested",void 0),(0,i._)([(0,l.Cb)()],t.prototype,"updating",null),(0,i._)([(0,l.Cb)()],t.prototype,"view",void 0),(0,i._)([(0,l.Cb)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",void 0),(0,i._)([(0,l.Cb)({type:p.Z})],t.prototype,"highlightOptions",void 0),t=(0,i._)([(0,h.j)("esri.views.2d.layers.LayerView2D")],t),t}},82186:(e,t,s)=>{s.r(t),s.d(t,{default:()=>_});var i=s(27366),r=s(52639),a=s(40281),n=s(92026),o=s(94172),l=(s(32718),s(25243),s(63780),s(10064),s(93169),s(69912)),h=s(33624),d=s(47037),p=s(95986),c=s(75391),u=s(34035),g=s(67581);const v="sublayers",y="layerView",f=Object.freeze({remove(){},pause(){},resume(){}});let m=class extends((0,p.y)(g.Z)){constructor(){super(...arguments),this._highlightIds=new Map,this.container=new d.G}async fetchPopupFeatures(e){return Array.from(this.graphicsViews(),(t=>t.hitTest(e).filter((e=>!!e.popupTemplate)))).flat()}*graphicsViews(){(0,n.pC)(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():(0,n.pC)(this._graphicsViews)?yield*this._graphicsViews:yield*[]}async hitTest(e,t){return Array.from(this.graphicsViews(),(t=>{const s=t.hitTest(e);if((0,n.pC)(this._graphicsViewsFeatureCollectionMap)){const e=this._graphicsViewsFeatureCollectionMap.get(t);for(const t of s)!t.popupTemplate&&e.popupTemplate&&(t.popupTemplate=e.popupTemplate),t.sourceLayer=t.layer=this.layer}return s})).flat().map((t=>({type:"graphic",graphic:t,layer:this.layer,mapPoint:e})))}highlight(e){let t;"number"==typeof e?t=[e]:e instanceof r.Z?t=[e.uid]:Array.isArray(e)&&e.length>0?t="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):a.Z.isCollection(e)&&(t=e.map((e=>e&&e.uid)).toArray());const s=t?.filter(n.pC);return s?.length?(this._addHighlight(s),{remove:()=>{this._removeHighlight(s)}}):f}update(e){for(const t of this.graphicsViews())t.processUpdate(e)}attach(){const e=this.view,t=()=>this.requestUpdate(),s=this.layer.featureCollections;if((0,n.pC)(s)&&s.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const i of s){const s=new c.Z(this.view.featuresTilingScheme),r=new u.Z({view:e,graphics:i.source,renderer:i.renderer,requestUpdateCallback:t,container:s});this._graphicsViewsFeatureCollectionMap.set(r,i),this.container.addChild(r.container),this.addHandles([(0,o.YP)((()=>i.visible),(e=>r.container.visible=e),o.nn),(0,o.YP)((()=>r.updating),(()=>this.notifyChange("updating")),o.nn)],y)}this._updateHighlight()}else(0,n.pC)(this.layer.sublayers)&&this.addHandles((0,o.on)((()=>this.layer.sublayers),"change",(()=>this._createGraphicsViews()),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),v)}detach(){this._destroyGraphicsViews(),this.removeHandles(v)}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews())e.viewChange()}isUpdating(){for(const e of this.graphicsViews())if(e.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(y);for(const e of this.graphicsViews())e.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),(0,n.Wi)(this.layer.sublayers))return;const e=[],t=this.view,s=()=>this.requestUpdate();for(const i of this.layer.sublayers){const r=new h.W,a=new c.Z(this.view.featuresTilingScheme);a.fadeTransitionEnabled=!0;const n=new u.Z({view:t,graphics:i.graphics,requestUpdateCallback:s,container:a});this.addHandles([i.on("graphic-update",n.graphicUpdateHandler),(0,o.YP)((()=>i.visible),(e=>n.container.visible=e),o.nn),(0,o.YP)((()=>n.updating),(()=>this.notifyChange("updating")),o.nn)],y),r.addChild(n.container),this.container.addChild(r),e.push(n)}this._graphicsViews=e,this._updateHighlight()}_addHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;0===e?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){const e=Array.from(this._highlightIds.keys());for(const t of this.graphicsViews())t.setHighlight(e)}};m=(0,i._)([(0,l.j)("esri.views.2d.layers.MapNotesLayerView2D")],m);const _=m},82022:(e,t,s)=>{s.d(t,{Z:()=>m});var i=s(92026),r=s(39383),a=s(22753),n=s(23588),o=s(15245),l=s(8229),h=s(91340),d=s(87422),p=s(84319),c=s(44070),u=s(8548),g=s(45412);const v=Math.PI/180;class y extends d.s{constructor(e){super(),this._program=null,this._vao=null,this._vertexBuffer=null,this._indexBuffer=null,this._dvsMat3=(0,n.c)(),this._localOrigin={x:0,y:0},this._getBounds=e}destroy(){this._vao&&(this._vao.dispose(!0),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=(0,i.M2)(this._program)}doRender(e){const{context:t}=e,s=this._getBounds();if(s.length<1)return;this._createShaderProgram(t),this._updateMatricesAndLocalOrigin(e),this._updateBufferData(t,s),t.setBlendingEnabled(!0),t.setDepthTestEnabled(!1),t.setStencilWriteMask(0),t.setStencilTestEnabled(!1),t.setBlendFunction(u.zi.ONE,u.zi.ONE_MINUS_SRC_ALPHA),t.setColorMask(!0,!0,!0,!0);const i=this._program;t.bindVAO(this._vao),t.useProgram(i),i.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),t.gl.lineWidth(1),t.drawElements(u.MX.LINES,8*s.length,u.g.UNSIGNED_INT,0),t.bindVAO()}_createTransforms(){return{dvs:(0,n.c)()}}_createShaderProgram(e){if(this._program)return;this._program=e.programCache.acquire("precision highp float;\n        uniform mat3 u_dvsMat3;\n\n        attribute vec2 a_position;\n\n        void main() {\n          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);\n          gl_Position = vec4(pos.xy, 0.0, 1.0);\n        }","precision mediump float;\n      void main() {\n        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);\n      }",f().attributes)}_updateMatricesAndLocalOrigin(e){const{state:t}=e,{displayMat3:s,size:i,resolution:r,pixelRatio:n,rotation:d,viewpoint:p}=t,c=v*d,{x:u,y:g}=p.targetGeometry,y=(0,h.or)(u,t.spatialReference);this._localOrigin.x=y,this._localOrigin.y=g;const f=n*i[0],m=n*i[1],_=r*f,b=r*m,w=(0,a.g)(this._dvsMat3);(0,a.m)(w,w,s),(0,a.h)(w,w,(0,o.f)(f/2,m/2)),(0,a.d)(w,w,(0,l.f)(i[0]/_,-m/b,1)),(0,a.r)(w,w,-c)}_updateBufferData(e,t){const{x:s,y:i}=this._localOrigin,r=8*t.length,a=new Float32Array(r),n=new Uint32Array(8*t.length);let o=0,l=0;for(const h of t)h&&(a[2*o+0]=h[0]-s,a[2*o+1]=h[1]-i,a[2*o+2]=h[0]-s,a[2*o+3]=h[3]-i,a[2*o+4]=h[2]-s,a[2*o+5]=h[3]-i,a[2*o+6]=h[2]-s,a[2*o+7]=h[1]-i,n[l+0]=o+0,n[l+1]=o+3,n[l+2]=o+3,n[l+3]=o+2,n[l+4]=o+2,n[l+5]=o+1,n[l+6]=o+1,n[l+7]=o+0,o+=4,l+=8);if(this._vertexBuffer?this._vertexBuffer.setData(a.buffer):this._vertexBuffer=c.f.createVertex(e,u.l1.DYNAMIC_DRAW,a.buffer),this._indexBuffer?this._indexBuffer.setData(n):this._indexBuffer=c.f.createIndex(e,u.l1.DYNAMIC_DRAW,n),!this._vao){const t=f();this._vao=new g.U(e,t.attributes,t.bufferLayouts,{geometry:this._vertexBuffer},this._indexBuffer)}}}const f=()=>(0,p.cM)("bounds",{geometry:[{location:0,name:"a_position",count:2,type:u.g.FLOAT}]});let m=class extends r.T{constructor(e){super(e),this.hasHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer=(0,i.SC)(this._boundsRenderer)}enableRenderingBounds(e){this._boundsRenderer=new y(e),this.requestRender()}get hasLabels(){return!1}onTileData(e,t){e.patch(t),this.contains(e)||this.addChild(e),this.requestRender()}onTileError(e){e.clear(),this.contains(e)||this.addChild(e)}_renderChildren(e,t){for(const s of this.children)s.isReady&&s.hasData&&(s.commit(e),e.context.setStencilFunction(u.wb.EQUAL,s.stencilRef,255),s.getDisplayList().replay(e,s,t))}}},75391:(e,t,s)=>{s.d(t,{Z:()=>a});var i=s(80613),r=s(82022);class a extends r.Z{renderChildren(e){this.attributeView.update(),this.children.some((e=>e.hasData))&&(this.attributeView.bindTextures(e.context,!1),super.renderChildren(e),e.drawPhase===i.jx.MAP&&this._renderChildren(e),this.hasHighlight()&&e.drawPhase===i.jx.HIGHLIGHT&&this._renderHighlight(e),this._boundsRenderer&&this._boundsRenderer.doRender(e))}_renderHighlight(e){const{painter:t}=e,s=t.effects.highlight;s.bind(e),this._renderChildren(e,s.defines),s.draw(e),s.unbind()}}},67581:(e,t,s)=>{s.d(t,{Z:()=>g});var i=s(27366),r=s(85015),a=s(91505),n=s(41691),o=s(79056),l=s(32718),h=s(92026),d=s(67426),p=s(49861),c=(s(25243),s(63780),s(69912));let u=class extends((0,n.p)((0,o.IG)((0,d.v)(a.Z.EventedMixin(r.Z))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",s=this.layer&&this.layer.title||"no title";l.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${s}', id: '${t}')`,e)}}))}get fullOpacity(){return(0,h.Pt)(this.get("layer.opacity"),1)*(0,h.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this.updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(e){this._overrideIfSome("visible",e)}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,i._)([(0,p.Cb)()],u.prototype,"fullOpacity",null),(0,i._)([(0,p.Cb)()],u.prototype,"layer",void 0),(0,i._)([(0,p.Cb)()],u.prototype,"parent",void 0),(0,i._)([(0,p.Cb)({readOnly:!0})],u.prototype,"suspended",null),(0,i._)([(0,p.Cb)({readOnly:!0})],u.prototype,"suspendInfo",null),(0,i._)([(0,p.Cb)({readOnly:!0})],u.prototype,"legendEnabled",null),(0,i._)([(0,p.Cb)({type:Boolean,readOnly:!0})],u.prototype,"updating",null),(0,i._)([(0,p.Cb)({readOnly:!0})],u.prototype,"updatingProgress",null),(0,i._)([(0,p.Cb)()],u.prototype,"visible",null),(0,i._)([(0,p.Cb)()],u.prototype,"view",void 0),u=(0,i._)([(0,c.j)("esri.views.layers.LayerView")],u);const g=u}}]);
//# sourceMappingURL=2186.11010ad3.chunk.js.map