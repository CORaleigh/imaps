"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[531],{47037:(e,t,i)=>{i.d(t,{G:()=>a});var s=i(64510),r=i(8548);class a extends s.Z{constructor(){super(...arguments),this.requiresDedicatedFBO=!1}dispose(){}doRender(e){const t=this.createRenderParams(e),{context:i,painter:s,profiler:a}=t;this._prevFBO=i.getBoundFramebufferObject(),a.recordContainerStart(this.name);const n=this._getFbo(t),l=s.getRenderTarget();i.bindFramebuffer(n),s.setRenderTarget(n),i.setDepthWriteEnabled(!0),i.setColorMask(!0,!0,!0,!0),i.setClearColor(0,0,0,0),i.setClearDepth(1),i.clear(i.gl.COLOR_BUFFER_BIT|i.gl.DEPTH_BUFFER_BIT),i.setDepthWriteEnabled(!1);for(const r of this.children)r.beforeRender(e);for(const r of this.children)r.processRender(t);for(const r of this.children)r.afterRender(e);s.setRenderTarget(l),s.releaseFbo(n),i.bindFramebuffer(this._prevFBO),s.beforeRenderLayer(t,this._clippingInfos?255:0,this.computedOpacity),i.setStencilTestEnabled(!1),i.setStencilWriteMask(0),s.blitTexture(i,n.colorTexture,r.cw.NEAREST),s.compositeLayer(t,this.computedOpacity),a.recordContainerEnd()}createRenderParams(e){return{...super.createRenderParams(e),blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:1}}_getFbo(e){const{context:t,painter:i}=e,{width:s,height:r}=t.getViewport();return i.acquireFbo(s,r)}}},60531:(e,t,i)=>{i.r(t),i.d(t,{default:()=>b});var s=i(27366),r=(i(32718),i(25243),i(63780),i(93169),i(75366),i(69912)),a=i(47037),n=i(95986),l=i(40281),o=i(60354),h=i(92026),p=i(94172),d=i(49861),y=i(67581);let u=class extends y.Z{constructor(e){super(e),this.type="group",this.layerViews=new l.Z}_allLayerViewVisibility(e){this.layerViews.forEach((t=>{t.visible=e}))}initialize(){this.handles.add([this.layerViews.on("change",(e=>this._layerViewsChangeHandler(e))),(0,p.YP)((()=>this.layer.visibilityMode),(()=>this._applyVisibility((()=>this._allLayerViewVisibility(this.visible)),(()=>this._applyExclusiveVisibility(null)))),p.Z_),(0,p.YP)((()=>this.visible),(e=>{this._applyVisibility((()=>this._allLayerViewVisibility(e)),(()=>{}))}),p.Z_)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}set layerViews(e){this._set("layerViews",(0,o.Z)(e,this._get("layerViews")))}get updatingProgress(){return 0===this.layerViews.length?1:this.layerViews.reduce(((e,t)=>e+t.updatingProgress),0)/this.layerViews.length}isUpdating(){return this.layerViews.some((e=>e.updating))}_hasLayerViewVisibleOverrides(){return this.layerViews.some((e=>e._isOverridden("visible")))}_findLayerViewForLayer(e){return e&&this.layerViews.find((t=>t.layer===e))}_firstVisibleOnLayerOrder(){const e=this.layer.layers.find((e=>this._findLayerViewForLayer(e)?.visible));return e&&this._findLayerViewForLayer(e)}_applyExclusiveVisibility(e){(0,h.Wi)(e)&&(e=this._firstVisibleOnLayerOrder(),(0,h.Wi)(e)&&this.layerViews.length>0&&(e=this._findLayerViewForLayer(this.layer.layers.getItemAt(0)))),this.layerViews.forEach((t=>{t.visible=t===e}))}_layerViewsChangeHandler(e){this.handles.remove("grouplayerview:visible"),this.handles.add(this.layerViews.map((e=>(0,p.YP)((()=>e.visible),(t=>this._applyVisibility((()=>{t!==this.visible&&(e.visible=this.visible)}),(()=>this._applyExclusiveVisibility(t?e:null)))),p.Z_))).toArray(),"grouplayerview:visible");const t=e.added[e.added.length-1];this._applyVisibility((()=>this._allLayerViewVisibility(this.visible)),(()=>this._applyExclusiveVisibility(t?.visible?t:null)))}_applyVisibility(e,t){this._hasLayerViewVisibleOverrides()&&("inherited"===this.layer?.visibilityMode?e():"exclusive"===this.layer?.visibilityMode&&t())}};(0,s._)([(0,d.Cb)({cast:o.R})],u.prototype,"layerViews",null),(0,s._)([(0,d.Cb)({readOnly:!0})],u.prototype,"updatingProgress",null),(0,s._)([(0,d.Cb)()],u.prototype,"view",void 0),u=(0,s._)([(0,r.j)("esri.views.layers.GroupLayerView")],u);const c=u;let v=class extends((0,n.y)(c)){constructor(){super(...arguments),this.container=new a.G}attach(){this._updateStageChildren(),this.handles.add(this.layerViews.on("after-changes",(()=>this._updateStageChildren())),"grouplayerview2d")}detach(){this.handles.remove("grouplayerview2d"),this.container.removeAllChildren()}update(e){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((e,t)=>this.container.addChildAt(e.container,t)))}};v=(0,s._)([(0,r.j)("esri.views.2d.layers.GroupLayerView2D")],v);const b=v},95986:(e,t,i)=>{i.d(t,{y:()=>P});var s=i(27366),r=i(40281),a=i(60354),n=i(10064),l=i(94172),o=i(49861),h=(i(63780),i(93169),i(25243),i(69912)),p=i(33624),d=i(46784);i(32718),i(75366);let y=class extends d.wq{};y=(0,s._)([(0,h.j)("esri.views.layers.support.ClipArea")],y);const u=y;var c;let v=c=class extends u{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new c({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}};(0,s._)([(0,o.Cb)({type:[Number,String],json:{write:!0}})],v.prototype,"left",void 0),(0,s._)([(0,o.Cb)({type:[Number,String],json:{write:!0}})],v.prototype,"right",void 0),(0,s._)([(0,o.Cb)({type:[Number,String],json:{write:!0}})],v.prototype,"top",void 0),(0,s._)([(0,o.Cb)({type:[Number,String],json:{write:!0}})],v.prototype,"bottom",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],v.prototype,"version",null),v=c=(0,s._)([(0,h.j)("esri.views.layers.support.ClipRect")],v);const b=v;i(59486);var g,w=i(32238),_=i(77981),f=i(53866),m=i(80885);const C={base:w.Z,key:"type",typeMap:{extent:f.Z,polygon:m.Z}};let V=g=class extends u{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new g({geometry:this.geometry.clone()})}};(0,s._)([(0,o.Cb)({types:C,json:{read:_.im,write:!0}})],V.prototype,"geometry",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],V.prototype,"version",null),V=g=(0,s._)([(0,h.j)("esri.views.layers.support.Geometry")],V);const R=V;let S=class extends u{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}};(0,s._)([(0,o.Cb)({type:[[[Number]]],json:{write:!0}})],S.prototype,"path",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],S.prototype,"version",null),S=(0,s._)([(0,h.j)("esri.views.layers.support.Path")],S);const O=S,L=r.Z.ofType({key:"type",base:u,typeMap:{rect:b,path:O,geometry:R}}),P=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new L,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1}initialize(){const e=this.view?.spatialReferenceLocked??!0,t=this.view?.spatialReference;t&&e&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new n.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new p.W),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([(0,l.YP)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),l.tX),(0,l.YP)((()=>this.layer?.opacity??1),(e=>{this.container&&(this.container.opacity=e)}),l.tX),(0,l.YP)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),l.tX),(0,l.YP)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),l.tX),(0,l.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}))]),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){const e=this.view?.spatialReference;return null==e||this.supportsSpatialReference(e)}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this.updatingHandles?.updating)}get visibleAtCurrentScale(){return this.isVisibleAtScale(this.view.scale)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;const{minScale:i,maxScale:s}=t;return(0===i||e<=i)&&(0===s||e>=s)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,i=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),i&&(e.outsideScaleRange=i),e}};return(0,s._)([(0,o.Cb)()],t.prototype,"attached",void 0),(0,s._)([(0,o.Cb)({type:L,set(e){const t=(0,a.Z)(e,this._get("clips"),L);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,s._)([(0,o.Cb)()],t.prototype,"container",void 0),(0,s._)([(0,o.Cb)()],t.prototype,"moving",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,s._)([(0,o.Cb)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,s._)([(0,o.Cb)()],t.prototype,"updateRequested",void 0),(0,s._)([(0,o.Cb)()],t.prototype,"updating",null),(0,s._)([(0,o.Cb)()],t.prototype,"view",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",null),t=(0,s._)([(0,h.j)("esri.views.2d.layers.LayerView2D")],t),t}},67581:(e,t,i)=>{i.d(t,{Z:()=>c});var s=i(27366),r=i(85015),a=i(91505),n=i(41691),l=i(79056),o=i(32718),h=i(92026),p=i(67426),d=i(49861),y=(i(63780),i(93169),i(25243),i(69912));let u=class extends((0,n.p)((0,l.IG)((0,p.v)(a.Z.EventedMixin(r.Z))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";o.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e)}}))}get fullOpacity(){return(0,h.Pt)(this.get("layer.opacity"),1)*(0,h.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this.updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,s._)([(0,d.Cb)()],u.prototype,"fullOpacity",null),(0,s._)([(0,d.Cb)()],u.prototype,"layer",void 0),(0,s._)([(0,d.Cb)()],u.prototype,"parent",void 0),(0,s._)([(0,d.Cb)({readOnly:!0})],u.prototype,"suspended",null),(0,s._)([(0,d.Cb)({readOnly:!0})],u.prototype,"suspendInfo",null),(0,s._)([(0,d.Cb)({readOnly:!0})],u.prototype,"legendEnabled",null),(0,s._)([(0,d.Cb)({type:Boolean,readOnly:!0})],u.prototype,"updating",null),(0,s._)([(0,d.Cb)({readOnly:!0})],u.prototype,"updatingProgress",null),(0,s._)([(0,d.Cb)()],u.prototype,"visible",null),(0,s._)([(0,d.Cb)()],u.prototype,"view",void 0),u=(0,s._)([(0,y.j)("esri.views.layers.LayerView")],u);const c=u}}]);
//# sourceMappingURL=531.189efa85.chunk.js.map