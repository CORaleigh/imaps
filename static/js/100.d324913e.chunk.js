(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[100],{1252:function(e,t,i){"use strict";i.r(t);var a=i(2),r=i(3),n=i(4),s=i(5),l=i(0),c=(i(14),i(12),i(17),i(1)),o=i(8),u=(i(11),i(18),i(19),i(40)),d=i(171),h=function(e){Object(n.a)(i,e);var t=Object(s.a)(i);function i(e){var r;return Object(a.a)(this,i),(r=t.call(this,e)).layerViews=new u.a,r}return Object(r.a)(i,[{key:"initialize",value:function(){var e=this;this.handles.add([this.layerViews.on("change",(function(t){return e._layerViewsChangeHandler(t)})),this.layerViews.on("after-changes",(function(){return e._layerViewsAfterChangesHandler()})),this.layer.watch("visibilityMode",(function(){return e._visibilityModeHandler()}),!0),this.watch("visible",(function(){return e._visibleHandler()}),!0)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]}),this._layerViewsAfterChangesHandler()}},{key:"layerViews",set:function(e){this._set("layerViews",Object(d.b)(e,this._get("layerViews")))}},{key:"isUpdating",value:function(){return this.layerViews.some((function(e){return e.updating}))}},{key:"_hasLayerViewVisibleOverrides",value:function(){return this.layerViews.some((function(e){return e._isOverridden("visible")}))}},{key:"_findLayerViewForLayer",value:function(e){return e&&this.layerViews.find((function(t){return t.layer===e}))}},{key:"_firstVisibleOnLayerOrder",value:function(){var e=this,t=this.layer.layers.find((function(t){var i=e._findLayerViewForLayer(t);return i&&i.visible}));return t&&this._findLayerViewForLayer(t)}},{key:"_enforceExclusiveVisibility",value:function(e){this._hasLayerViewVisibleOverrides()&&(e||!(e=this._firstVisibleOnLayerOrder())&&this.layerViews.length>0&&(e=this._findLayerViewForLayer(this.layer.layers.getItemAt(0))),this.layerViews.forEach((function(t){t.visible=t===e})))}},{key:"_layerViewsChangeHandler",value:function(e){var t=this;this.handles.remove("grouplayerview:visible"),this.handles.add(this.layerViews.map((function(e){return e.watch("visible",(function(i){return t._layerViewVisibleHandler(i,e)}),!0)})).toArray(),"grouplayerview:visible");var i=e.added[e.added.length-1],a=null;i&&i.visible&&(a=i),this._enforceVisibility(a)}},{key:"_layerViewsAfterChangesHandler",value:function(){var e=this;this.handles.remove("grouplayerview:updating"),this.handles.add(this.layerViews.map((function(t){return t.watch("updating",(function(){return e._updateUpdating()}),!0)})).toArray(),"grouplayerview:updating"),this._updateUpdating()}},{key:"_enforceVisibility",value:function(e){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":var t=this.visible;this.layerViews.forEach((function(e){e.visible=t}));break;case"exclusive":this._enforceExclusiveVisibility(e)}}},{key:"_visibilityModeHandler",value:function(){this._enforceVisibility()}},{key:"_layerViewVisibleHandler",value:function(e,t){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":e!==this.visible&&(t.visible=this.visible);break;case"exclusive":this._enforceExclusiveVisibility(e&&t)}}},{key:"_visibleHandler",value:function(){var e;this._hasLayerViewVisibleOverrides()&&"inherited"===(null==(e=this.layer)?void 0:e.visibilityMode)&&this._enforceVisibility()}},{key:"_updateUpdating",value:function(){this.notifyChange("updating")}}]),i}(i(845).a);Object(l.a)([Object(c.b)({cast:d.a})],h.prototype,"layerViews",null),Object(l.a)([Object(c.b)()],h.prototype,"view",void 0);var y=h=Object(l.a)([Object(o.a)("esri.views.layers.GroupLayerView")],h),b=i(846),p=i(10),v=i(15),f=i(30),O=i(28),j=(i(46),i(292),i(512),i(352)),g=function(e){Object(n.a)(i,e);var t=Object(s.a)(i);function i(){var e;return Object(a.a)(this,i),(e=t.apply(this,arguments))._lastWidth=0,e._lastHeight=0,e.requiresDedicatedFBO=!1,e}return Object(r.a)(i,[{key:"dispose",value:function(){this._renderTarget&&(this._renderTarget.dispose(),this._renderTarget=null)}},{key:"doRender",value:function(e){var t=this.createRenderParams(e),i=t.context,a=t.painter,r=t.profiler;this._prevFBO=i.getBoundFramebufferObject(),r.recordContainerStart(this.name);var n=this._getFbo(t),s=a.getRenderTarget();i.bindFramebuffer(n),a.setRenderTarget(n),i.setDepthWriteEnabled(!0),i.setColorMask(!0,!0,!0,!0),i.setClearColor(0,0,0,0),i.setClearDepth(1),i.clear(i.gl.COLOR_BUFFER_BIT|i.gl.DEPTH_BUFFER_BIT),i.setDepthWriteEnabled(!1);var l,c=Object(v.a)(this.children);try{for(c.s();!(l=c.n()).done;){l.value.beforeRender(e)}}catch(y){c.e(y)}finally{c.f()}var o,u=Object(v.a)(this.children);try{for(u.s();!(o=u.n()).done;){o.value.processRender(t)}}catch(y){u.e(y)}finally{u.f()}var d,h=Object(v.a)(this.children);try{for(h.s();!(d=h.n()).done;){d.value.afterRender(e)}}catch(y){h.e(y)}finally{h.f()}a.setRenderTarget(s),i.bindFramebuffer(this._prevFBO),a.beforeRenderLayer(t,this._clippingInfos?255:0,this.computedOpacity),i.setStencilTestEnabled(!1),i.setStencilWriteMask(0),a.blitTexture(i,n.colorTexture,9728),a.compositeLayer(t,this.computedOpacity),r.recordContainerEnd()}},{key:"createRenderParams",value:function(e){return Object(p.a)(Object(p.a)({},Object(f.a)(Object(O.a)(i.prototype),"createRenderParams",this).call(this,e)),{},{blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:1})}},{key:"_getFbo",value:function(e){var t=e.context,i=e.painter,a=t.getViewport(),r=a.width,n=a.height;if(r!==this._lastWidth||n!==this._lastHeight)if(this._lastWidth=r,this._lastHeight=n,this._renderTarget)this._renderTarget.resize(r,n);else{var s={target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:r,height:n},l=i.getSharedStencilBuffer();this._renderTarget=new j.a(t,{colorTarget:0,depthStencilTarget:3},s,l)}return this._renderTarget}}]),i}(i(879).a),w=function(e){Object(n.a)(i,e);var t=Object(s.a)(i);function i(){var e;return Object(a.a)(this,i),(e=t.apply(this,arguments)).container=new g,e}return Object(r.a)(i,[{key:"attach",value:function(){var e=this;this._updateStageChildren(),this.handles.add(this.layerViews.on("after-changes",(function(){return e._updateStageChildren()})),"grouplayerview2d")}},{key:"detach",value:function(){this.handles.remove("grouplayerview2d"),this.container.removeAllChildren()}},{key:"hitTest",value:function(e,t){return null}},{key:"update",value:function(e){}},{key:"moveStart",value:function(){}},{key:"viewChange",value:function(){}},{key:"moveEnd",value:function(){}},{key:"_updateStageChildren",value:function(){var e=this;this.container.removeAllChildren(),this.layerViews.forEach((function(t,i){return e.container.addChildAt(t.container,i)}))}}]),i}(Object(b.a)(y)),_=w=Object(l.a)([Object(o.a)("esri.views.2d.layers.GroupLayerView2D")],w);t.default=_},845:function(e,t,i){"use strict";var a=i(2),r=i(3),n=i(4),s=i(5),l=i(0),c=(i(14),i(12)),o=(i(17),i(1)),u=i(8),d=(i(11),i(18),i(19),i(31)),h=i(70),y=i(179),b=i(181),p=i(99),v=function(e){Object(n.a)(i,e);var t=Object(s.a)(i);function i(e){var r;return Object(a.a)(this,i),(r=t.call(this,e)).layer=null,r.parent=null,r}return Object(r.a)(i,[{key:"initialize",value:function(){var e=this;this.when().catch((function(t){if("layerview:create-error"!==t.name){var i=e.layer&&e.layer.id||"no id",a=e.layer&&e.layer.title||"no title";throw c.a.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '".concat(a,"', id: '").concat(i,"')"),t),t}}))}},{key:"fullOpacity",get:function(){var e=function(e){return null==e?1:e};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))}},{key:"suspended",get:function(){return!this.canResume()}},{key:"suspendInfo",get:function(){return this.getSuspendInfo()}},{key:"legendEnabled",get:function(){return!this.suspended&&!0===this.layer.legendEnabled}},{key:"updating",get:function(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}},{key:"visible",get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}},{key:"canResume",value:function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}},{key:"getSuspendInfo",value:function(){var e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}},{key:"isUpdating",value:function(){return!1}}]),i}(Object(p.b)(Object(y.a)(Object(b.b)(h.a.EventedMixin(d.a)))));Object(l.a)([Object(o.b)()],v.prototype,"fullOpacity",null),Object(l.a)([Object(o.b)()],v.prototype,"layer",void 0),Object(l.a)([Object(o.b)()],v.prototype,"parent",void 0),Object(l.a)([Object(o.b)({readOnly:!0})],v.prototype,"suspended",null),Object(l.a)([Object(o.b)({readOnly:!0})],v.prototype,"suspendInfo",null),Object(l.a)([Object(o.b)({readOnly:!0})],v.prototype,"legendEnabled",null),Object(l.a)([Object(o.b)({type:Boolean,readOnly:!0})],v.prototype,"updating",null),Object(l.a)([Object(o.b)()],v.prototype,"visible",null);var f=v=Object(l.a)([Object(u.a)("esri.views.layers.LayerView")],v);t.a=f},846:function(e,t,i){"use strict";i.d(t,"a",(function(){return F}));var a,r=i(2),n=i(3),s=i(30),l=i(28),c=i(4),o=i(5),u=i(0),d=(i(14),i(12),i(17),i(1)),h=i(8),y=(i(11),i(18),i(19),i(40)),b=i(171),p=i(25),v=function(e){Object(c.a)(i,e);var t=Object(o.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return i}(i(22).a),f=v=Object(u.a)([Object(h.a)("esri.views.layers.support.ClipArea")],v),O=a=function(e){Object(c.a)(i,e);var t=Object(o.a)(i);function i(){var e;return Object(r.a)(this,i),(e=t.apply(this,arguments)).type="rect",e.left=null,e.right=null,e.top=null,e.bottom=null,e}return Object(n.a)(i,[{key:"clone",value:function(){return new a({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}},{key:"version",get:function(){return(this._get("version")||0)+1}}]),i}(f);Object(u.a)([Object(d.b)({type:[Number,String],json:{write:!0}})],O.prototype,"left",void 0),Object(u.a)([Object(d.b)({type:[Number,String],json:{write:!0}})],O.prototype,"right",void 0),Object(u.a)([Object(d.b)({type:[Number,String],json:{write:!0}})],O.prototype,"top",void 0),Object(u.a)([Object(d.b)({type:[Number,String],json:{write:!0}})],O.prototype,"bottom",void 0),Object(u.a)([Object(d.b)({readOnly:!0})],O.prototype,"version",null);var j,g=O=a=Object(u.a)([Object(h.a)("esri.views.layers.support.ClipRect")],O),w=i(881),_=i(136),V=i(57),k=i(95),m=i(67),R=(i(78),{base:_.a,key:"type",typeMap:{extent:V.a,polygon:k.a}}),L=j=function(e){Object(c.a)(i,e);var t=Object(o.a)(i);function i(){var e;return Object(r.a)(this,i),(e=t.apply(this,arguments)).type="geometry",e.geometry=null,e}return Object(n.a)(i,[{key:"version",get:function(){return(this._get("version")||0)+1}},{key:"clone",value:function(){return new j({geometry:this.geometry.clone()})}}]),i}(f);Object(u.a)([Object(d.b)({types:R,json:{read:m.a,write:!0}})],L.prototype,"geometry",void 0),Object(u.a)([Object(d.b)({readOnly:!0})],L.prototype,"version",null);var C=L=j=Object(u.a)([Object(h.a)("esri.views.layers.support.Geometry")],L),T=function(e){Object(c.a)(i,e);var t=Object(o.a)(i);function i(){var e;return Object(r.a)(this,i),(e=t.apply(this,arguments)).type="path",e.path=[],e}return Object(n.a)(i,[{key:"version",get:function(){return(this._get("version")||0)+1}}]),i}(f);Object(u.a)([Object(d.b)({type:[[[Number]]],json:{write:!0}})],T.prototype,"path",void 0),Object(u.a)([Object(d.b)({readOnly:!0})],T.prototype,"version",null);var E=T=Object(u.a)([Object(h.a)("esri.views.layers.support.Path")],T),S=y.a.ofType({key:"type",base:f,typeMap:{rect:g,path:E,geometry:C}}),F=function(e){var t=function(e){Object(c.a)(i,e);var t=Object(o.a)(i);function i(){var e;return Object(r.a)(this,i),(e=t.apply(this,arguments)).clips=new S,e.moving=!1,e.attached=!1,e.lastUpdateId=-1,e.updateRequested=!1,e}return Object(n.a)(i,[{key:"initialize",value:function(){var e,t=this;this.container||(this.container=new w.a),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([Object(p.a)(this,"suspended",(function(e){t.container&&(t.container.visible=!e),t.view&&!e&&t.updateRequested&&t.view.requestUpdate()}),!0),Object(p.a)(this,["layer.opacity","container"],(function(){var e,i;t.container&&(t.container.opacity=null!=(e=null==(i=t.layer)?void 0:i.opacity)?e:1)}),!0),Object(p.a)(this,["layer.blendMode"],(function(e){t.container&&(t.container.blendMode=e)}),!0),Object(p.a)(this,["layer.effect"],(function(e){t.container&&(t.container.effect=e)}),!0),this.clips.on("change",(function(){t.container.clips=t.clips,t.notifyChange("clips")}))]),null!=(e=this.view)&&e.whenLayerView?this.view.whenLayerView(this.layer).then((function(e){e!==t||t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){})):this.when().then((function(){t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){}))}},{key:"destroy",value:function(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1}},{key:"updating",get:function(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())}},{key:"isVisibleAtScale",value:function(e){var t=!0,i=this.layer,a=i.minScale,r=i.maxScale;if(null!=a&&null!=r){var n=!a,s=!r;!n&&e<=a&&(n=!0),!s&&e>=r&&(s=!0),t=n&&s}return t}},{key:"requestUpdate",value:function(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}},{key:"processUpdate",value:function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}},{key:"isUpdating",value:function(){return!1}},{key:"isRendering",value:function(){return!1}},{key:"canResume",value:function(){return!!Object(s.a)(Object(l.a)(i.prototype),"canResume",this).call(this)&&this.isVisibleAtScale(this.view.scale)}}]),i}(e);return Object(u.a)([Object(d.b)({type:S,set:function(e){var t=Object(b.b)(e,this._get("clips"),S);this._set("clips",t)}})],t.prototype,"clips",void 0),Object(u.a)([Object(d.b)()],t.prototype,"moving",void 0),Object(u.a)([Object(d.b)()],t.prototype,"attached",void 0),Object(u.a)([Object(d.b)()],t.prototype,"container",void 0),Object(u.a)([Object(d.b)()],t.prototype,"suspended",void 0),Object(u.a)([Object(d.b)({readOnly:!0})],t.prototype,"updateParameters",void 0),Object(u.a)([Object(d.b)()],t.prototype,"updateRequested",void 0),Object(u.a)([Object(d.b)()],t.prototype,"updating",null),Object(u.a)([Object(d.b)()],t.prototype,"view",void 0),t=Object(u.a)([Object(h.a)("esri.views.2d.layers.LayerView2D")],t)}}}]);
//# sourceMappingURL=100.d324913e.chunk.js.map