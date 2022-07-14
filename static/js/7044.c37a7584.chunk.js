"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[7044],{82582:(e,t,r)=>{r.d(t,{D9:()=>a,dp:()=>n,yZ:()=>s});var i=r(68860);function s(e,t){const r=t||e.extent,s=e.width,n=(0,i.c9)(r&&r.spatialReference);return r&&s?r.width/s*n*i.hd*96:0}function n(e,t){return e/((0,i.c9)(t)*i.hd*96)}function a(e,t){const r=e.extent,i=e.width,s=n(t,r.spatialReference);return r.clone().expand(s*i/r.width)}},44041:(e,t,r)=>{r.d(t,{R:()=>h});var i=r(27366),s=r(85015),n=r(41691),a=r(92026),o=r(76672),l=r(49861),p=(r(63780),r(93169),r(25243),r(69912)),u=r(45948),y=r(87072),c=r(58132);const d={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let h=class extends((0,n.p)(s.Z)){constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const t=(0,y.f)(this.floors,e);return e.toExportImageJSON(t)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&(0,c.FN)(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(d[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){const e=!!this.floors?.length,t=this.visibleSublayers.filter((t=>null!=t.definitionExpression||e&&null!=t.floorInfo));return t.length?JSON.stringify(t.reduce(((e,t)=>{const r=(0,y.f)(this.floors,t),i=(0,o._)(r,t.definitionExpression);return(0,a.pC)(i)&&(e[t.id]=i),e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const t=this.layer.sublayers,r=t=>{const i=this.scale,s=0===i,n=0===t.minScale||i<=t.minScale,a=0===t.maxScale||i>=t.maxScale;t.visible&&(s||n&&a)&&(t.sublayers?t.sublayers.forEach(r):e.unshift(t))};t&&t.forEach(r);const i=this._get("visibleSublayers");return!i||i.length!==e.length||i.some(((t,r)=>e[r]!==t))?e:i}toJSON(){const e=this.layer;let t={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?t.dynamicLayers=this.dynamicLayers:t={...t,layers:this.layers,layerDefs:this.layerDefs},t}};(0,i._)([(0,l.Cb)({readOnly:!0})],h.prototype,"dynamicLayers",null),(0,i._)([(0,l.Cb)()],h.prototype,"floors",void 0),(0,i._)([(0,l.Cb)({readOnly:!0})],h.prototype,"hasDynamicLayers",null),(0,i._)([(0,l.Cb)()],h.prototype,"layer",null),(0,i._)([(0,l.Cb)({readOnly:!0})],h.prototype,"layers",null),(0,i._)([(0,l.Cb)({readOnly:!0})],h.prototype,"layerDefs",null),(0,i._)([(0,l.Cb)({type:Number})],h.prototype,"scale",void 0),(0,i._)([(0,l.Cb)(u.qG)],h.prototype,"timeExtent",void 0),(0,i._)([(0,l.Cb)({readOnly:!0})],h.prototype,"version",null),(0,i._)([(0,l.Cb)({readOnly:!0})],h.prototype,"visibleSublayers",null),h=(0,i._)([(0,p.j)("esri.layers.mixins.ExportImageParameters")],h)},87072:(e,t,r)=>{function i(e){const t=e.layer;return"floorInfo"in t&&t.floorInfo?.floorField&&"floors"in e.view?n(e.view.floors,t.floorInfo.floorField):null}function s(e,t){return"floorInfo"in t&&t.floorInfo?.floorField?n(e,t.floorInfo.floorField):null}function n(e,t){if(!e?.length)return null;const r=e.filter((e=>""!==e)).map((e=>`'${e}'`));return r.push("''"),`${t} IN (${r.join(",")}) OR ${t} IS NULL`}r.d(t,{c:()=>i,f:()=>s})},58132:(e,t,r)=>{r.d(t,{FN:()=>a,QV:()=>n,ac:()=>l});var i=r(92026),s=r(25265);function n(e,t,r){const i=t.flatten((e=>{let{sublayers:t}=e;return t})).length;return i!==e.length||(!!e.some((e=>e.originIdOf("minScale")>r||e.originIdOf("maxScale")>r||e.originIdOf("renderer")>r||e.originIdOf("labelingInfo")>r||e.originIdOf("opacity")>r||e.originIdOf("labelsVisible")>r||e.originIdOf("source")>r))||!o(e,t))}function a(e,t,r){return!!e.some((e=>{const t=e.source;return!(!t||"map-layer"===t.type&&t.mapLayerId===e.id&&((0,i.Wi)(t.gdbVersion)||t.gdbVersion===r))||e.originIdOf("renderer")>s.s3.SERVICE||e.originIdOf("labelingInfo")>s.s3.SERVICE||e.originIdOf("opacity")>s.s3.SERVICE||e.originIdOf("labelsVisible")>s.s3.SERVICE}))||!o(e,t)}function o(e,t){if(!e||!e.length||(0,i.Wi)(t))return!0;const r=t.slice().reverse().flatten((e=>{let{sublayers:t}=e;return t&&t.toArray().reverse()})).map((e=>e.id)).toArray();if(e.length>r.length)return!1;let s=0;const n=r.length;for(const{id:i}of e){for(;s<n&&r[s]!==i;)s++;if(s>=n)return!1}return!0}function l(e){return!!e&&e.some((e=>null!=e.minScale||e.layerDefinition&&null!=e.layerDefinition.minScale))}},96669:(e,t,r)=>{function i(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function s(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?function(e){let t=0,r=0;for(let i=0;i<e.length;i++){const s=e[i].size;"number"==typeof s&&(t+=s,r++)}return t/r}(e.stops):t}function n(e,t){if(!t)return e;const r=t.filter((e=>"size"===e.type)).map((t=>{const{maxSize:r,minSize:i}=t;return(s(r,e)+s(i,e))/2}));let i=0;const n=r.length;if(0===n)return e;for(let s=0;s<n;s++)i+=r[s];const a=Math.floor(i/n);return Math.max(a,e)}function a(e){const t=e&&e.renderer,r="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!t)return r;const s="visualVariables"in t?n(r,t.visualVariables):r;if("simple"===t.type)return i(s,t.symbol);if("unique-value"===t.type){let e=s;return t.uniqueValueInfos.forEach((t=>{e=i(e,t.symbol)})),e}if("class-breaks"===t.type){let e=s;return t.classBreakInfos.forEach((t=>{e=i(e,t.symbol)})),e}return"dot-density"===t.type||t.type,s}r.d(t,{k:()=>a})},87044:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ie});var i=r(27366),s=r(32718),n=r(66978),a=r(94172),o=r(49861),l=(r(63780),r(93169)),p=r(25243),u=r(69912),y=r(78983),c=r(90110),d=r(95986),h=r(34035),f=r(83978),m=r(9229),g=r(67581),b=r(10064),v=r(92026),w=r(53866),x=r(82582),I=r(45948),_=r(44041),C=r(87072),S=r(96669),E=r(76200),P=r(50689),O=r(23084),N=r(76672),F=r(77981),R=r(58132);const V=e=>e.spatialReference.wkid||JSON.stringify(e.spatialReference);function j(e,t){const{dpi:r,gdbVersion:i,geometry:s,geometryPrecision:n,height:a,layerOption:o,mapExtent:l,maxAllowableOffset:p,returnFieldName:u,returnGeometry:y,returnUnformattedValues:c,returnZ:d,spatialReference:h,timeExtent:f,tolerance:m,width:g}=e.toJSON(),{dynamicLayers:b,layerDefs:w,layerIds:x}=L(e),I=t&&(0,v.pC)(t.geometry)?t.geometry:null,_={geometryPrecision:n,maxAllowableOffset:p,returnFieldName:u,returnGeometry:y,returnUnformattedValues:c,returnZ:d,tolerance:m},C=I&&I.toJSON()||s;if(_.imageDisplay=`${g},${a},${r}`,i&&(_.gdbVersion=i),C&&(delete C.spatialReference,_.geometry=JSON.stringify(C),_.geometryType=(0,F.Ji)(C)),h?_.sr=h.wkid||JSON.stringify(h):C&&C.spatialReference?_.sr=V(C):l&&l.spatialReference&&(_.sr=V(l)),_.time=f?[f.start,f.end].join(","):null,l){const{xmin:e,ymin:t,xmax:r,ymax:i}=l;_.mapExtent=`${e},${t},${r},${i}`}return w&&(_.layerDefs=w),b&&!w&&(_.dynamicLayers=b),_.layers="popup"===o?"visible":o,x&&!b&&(_.layers+=`:${x.join(",")}`),_}function L(e){const{mapExtent:t,floors:r,width:i,sublayers:s,layerIds:n,layerOption:a,gdbVersion:o}=e,l=s?.find((e=>null!=e.layer))?.layer?.serviceSublayers,p="popup"===a,u={},y=(0,x.yZ)({extent:t,width:i,spatialReference:t?.spatialReference}),c=[],d=e=>{const t=0===y,r=0===e.minScale||y<=e.minScale,i=0===e.maxScale||y>=e.maxScale;if(e.visible&&(t||r&&i))if(e.sublayers)e.sublayers.forEach(d);else{if(!1===n?.includes(e.id)||p&&(!e.popupTemplate||!e.popupEnabled))return;c.unshift(e)}};if(s?.forEach(d),s&&!c.length)u.layerIds=[];else{const e=(0,R.FN)(c,l,o),t=c.map((e=>{const t=(0,C.f)(r,e);return e.toExportImageJSON(t)}));if(e)u.dynamicLayers=JSON.stringify(t);else{if(s){let e=c.map((e=>{let{id:t}=e;return t}));n&&(e=e.filter((e=>n.includes(e)))),u.layerIds=e}else n?.length&&(u.layerIds=n);const e=function(e,t){const r=!!e?.length,i=t.filter((e=>null!=e.definitionExpression||r&&null!=e.floorInfo));return i.length?i.map((t=>{const r=(0,C.f)(e,t),i=(0,N._)(r,t.definitionExpression);return{id:t.id,definitionExpression:i}})):null}(r,c);if((0,v.pC)(e)&&e.length){const t={};for(const r of e)r.definitionExpression&&(t[r.id]=r.definitionExpression);Object.keys(t).length&&(u.layerDefs=JSON.stringify(t))}}}return u}var M,D=r(59486),Z=r(62044),U=r(46784),T=r(78952);let q=M=class extends U.wq{constructor(e){super(e),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}static from(e){return(0,p.TJ)(M,e)}};(0,i._)([(0,o.Cb)({type:Number,json:{write:!0}})],q.prototype,"dpi",void 0),(0,i._)([(0,o.Cb)()],q.prototype,"floors",void 0),(0,i._)([(0,o.Cb)({type:String,json:{write:!0}})],q.prototype,"gdbVersion",void 0),(0,i._)([(0,o.Cb)({types:D.qM,json:{read:F.im,write:!0}})],q.prototype,"geometry",void 0),(0,i._)([(0,o.Cb)({type:Number,json:{write:!0}})],q.prototype,"geometryPrecision",void 0),(0,i._)([(0,o.Cb)({type:Number,json:{write:!0}})],q.prototype,"height",void 0),(0,i._)([(0,o.Cb)({type:[Number],json:{write:!0}})],q.prototype,"layerIds",void 0),(0,i._)([(0,o.Cb)({type:["top","visible","all","popup"],json:{write:!0}})],q.prototype,"layerOption",void 0),(0,i._)([(0,o.Cb)({type:w.Z,json:{write:!0}})],q.prototype,"mapExtent",void 0),(0,i._)([(0,o.Cb)({type:Number,json:{write:!0}})],q.prototype,"maxAllowableOffset",void 0),(0,i._)([(0,o.Cb)({type:Boolean,json:{write:!0}})],q.prototype,"returnFieldName",void 0),(0,i._)([(0,o.Cb)({type:Boolean,json:{write:!0}})],q.prototype,"returnGeometry",void 0),(0,i._)([(0,o.Cb)({type:Boolean,json:{write:!0}})],q.prototype,"returnM",void 0),(0,i._)([(0,o.Cb)({type:Boolean,json:{write:!0}})],q.prototype,"returnUnformattedValues",void 0),(0,i._)([(0,o.Cb)({type:Boolean,json:{write:!0}})],q.prototype,"returnZ",void 0),(0,i._)([(0,o.Cb)({type:T.Z,json:{write:!0}})],q.prototype,"spatialReference",void 0),(0,i._)([(0,o.Cb)()],q.prototype,"sublayers",void 0),(0,i._)([(0,o.Cb)({type:Z.Z,json:{write:!0}})],q.prototype,"timeExtent",void 0),(0,i._)([(0,o.Cb)({type:Number,json:{write:!0}})],q.prototype,"tolerance",void 0),(0,i._)([(0,o.Cb)({type:Number,json:{write:!0}})],q.prototype,"width",void 0),q=M=(0,i._)([(0,u.j)("esri.rest.support.IdentifyParameters")],q);const A=q;var G=r(52639),J=r(38511),k=r(31201),$=r(27823);let Q=class extends U.wq{constructor(e){super(e),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(e,t){return G.Z.fromJSON({attributes:{...t.attributes},geometry:{...t.geometry}})}writeFeature(e,t){if(!e)return;const{attributes:r,geometry:i}=e;r&&(t.attributes={...r}),(0,v.pC)(i)&&(t.geometry=i.toJSON(),t.geometryType=$.P$.toJSON(i.type))}};(0,i._)([(0,o.Cb)({type:String,json:{write:!0}})],Q.prototype,"displayFieldName",void 0),(0,i._)([(0,o.Cb)({type:G.Z})],Q.prototype,"feature",void 0),(0,i._)([(0,J.r)("feature",["attributes","geometry"])],Q.prototype,"readFeature",null),(0,i._)([(0,k.c)("feature")],Q.prototype,"writeFeature",null),(0,i._)([(0,o.Cb)({type:Number,json:{write:!0}})],Q.prototype,"layerId",void 0),(0,i._)([(0,o.Cb)({type:String,json:{write:!0}})],Q.prototype,"layerName",void 0),Q=(0,i._)([(0,u.j)("esri.rest.support.IdentifyResult")],Q);const B=Q;async function z(e,t,r){const i=(t=function(e){return A.from(e)}(t)).geometry?[t.geometry]:[],s=(0,O.en)(e);return s.path+="/identify",(0,P.aX)(i).then((e=>{const i=j(t,{geometry:e&&e[0]}),n=(0,O.cv)({...s.query,f:"json",...i}),a=(0,O.lA)(n,r);return(0,E.default)(s.path,a).then(H).then((e=>function(e,t){if(!t?.length)return e;const r=new Map;function i(e){r.set(e.id,e),e.sublayers&&e.sublayers.forEach(i)}t.forEach(i);for(const s of e.results)s.feature.sourceLayer=r.get(s.layerId);return e}(e,t.sublayers)))}))}function H(e){const t=e.data;t.results=t.results||[];const r={results:[]};return r.results=t.results.map((e=>B.fromJSON(e))),r}var W=r(819),K=r(24405);const Y=e=>{let t=class extends e{initialize(){this.exportImageParameters=new _.R({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(e,t){const{layer:r}=this;if(!e)throw new b.Z("mapimagelayer:fetchPopupFeatures","Nothing to fetch without area",{layer:r});const i=this.layer.capabilities?.operations?.supportsQuery??!0;if(!((this.layer.capabilities?.operations?.supportsIdentify??1)&&this.layer.version>=10.5)&&!i)throw new b.Z("mapimagelayer:fetchPopupFeatures-not-supported","query operation is disabled for this service",{layer:r});return i?this._fetchPopupFeaturesUsingQueries(e,t):this._fetchPopupFeaturesUsingIdentify(e,t)}canResume(){return!!super.canResume()&&!this.timeExtent?.isEmpty}async _fetchPopupFeaturesUsingIdentify(e,t){const r=await this._createIdentifyParameters(e,t);if((0,v.Wi)(r))return[];const{results:i}=await z(this.layer.parsedUrl,r);return i.map((e=>e.feature))}async _createIdentifyParameters(e,t){const{floors:r,spatialReference:i,scale:s}=this.view,n=(0,v.pC)(t)?t.event:null,a=await this._collectPopupProviders(this.layer.sublayers,s,t);if(!a.length)return null;await Promise.all(a.map((e=>{let{sublayer:t}=e;return t.load().catch((()=>{}))})));const o=Math.min((0,l.Z)("mapimagelayer-popup-identify-max-tolerance"),this.layer.allSublayers.reduce(((e,t)=>t.renderer?(0,S.k)({renderer:t.renderer,event:n}):e),2)),p=this.createFetchPopupFeaturesQueryGeometry(e,o),u=(0,x.dp)(s,i),y=Math.round(p.width/u),c=new w.Z({xmin:p.center.x-u*y,ymin:p.center.y-u*y,xmax:p.center.x+u*y,ymax:p.center.y+u*y,spatialReference:p.spatialReference}),d=!1===this.layer.capabilities?.operations?.supportsQuery||await new Promise((e=>{let t=!1;Promise.all(a.map((async r=>{let{popupTemplate:i}=r;if(i){const r=await this._loadArcadeModules(i);if(t)return;const s=r?.arcadeUtils.hasGeometryOperations(i);s&&(t=!0,e(!0))}}))).finally((()=>e(!1)))}));return new A({floors:r,gdbVersion:this.layer.gdbVersion,geometry:e,height:y,layerOption:"popup",mapExtent:c,maxAllowableOffset:d?0:u,returnGeometry:!0,spatialReference:i,sublayers:this.layer.sublayers,timeExtent:this.timeExtent,tolerance:o,width:y})}async _fetchPopupFeaturesUsingQueries(e,t){const r=await this._collectPopupProviders(this.layer.sublayers,this.view.scale,t),i=(0,v.pC)(t)?t.event:null,s=r.map((async t=>{let{sublayer:r,popupTemplate:s}=t;await r.load().catch((()=>{}));const n=r.createQuery(),a=(0,S.k)({renderer:r.renderer,event:i}),o=this.createFetchPopupFeaturesQueryGeometry(e,a);if(n.geometry=o,n.outFields=await(0,K.e)(r,s),"floors"in this.view){const e=this.view?.floors?.clone(),t=(0,C.f)(e,r);(0,v.pC)(t)&&(n.where=n.where?`(${n.where}) AND (${t})`:t)}const l=await this._loadArcadeModules(s);return l&&l.arcadeUtils.hasGeometryOperations(s)||(n.maxAllowableOffset=o.width/a),(await r.queryFeatures(n)).features}));return(await(0,n.as)(s)).reduce(((e,t)=>t.value?[...e,...t.value]:e),[]).filter((e=>null!=e))}async _collectPopupProviders(e,t,r){const i=[],s=async e=>{const n=0===e.minScale||t<=e.minScale,a=0===e.maxScale||t>=e.maxScale;if(e.visible&&n&&a)if(e.sublayers)e.sublayers.forEach(s);else if(e.popupEnabled){const t=(0,K.V)(e,{...r,defaultPopupTemplateEnabled:!1});(0,v.pC)(t)&&i.unshift({sublayer:e,popupTemplate:t})}},n=e.toArray().reverse().map(s);return await Promise.all(n),i}_loadArcadeModules(e){if(e.expressionInfos?.length||Array.isArray(e.content)&&e.content.some((e=>"expression"===e.type)))return(0,W.LC)()}};return(0,i._)([(0,o.Cb)()],t.prototype,"exportImageParameters",void 0),(0,i._)([(0,o.Cb)({readOnly:!0})],t.prototype,"exportImageVersion",null),(0,i._)([(0,o.Cb)()],t.prototype,"layer",void 0),(0,i._)([(0,o.Cb)()],t.prototype,"suspended",void 0),(0,i._)([(0,o.Cb)(I.qG)],t.prototype,"timeExtent",void 0),t=(0,i._)([(0,u.j)("esri.views.layers.MapImageLayerView")],t),t};var X=r(13107),ee=r(45008);const te=s.Z.getLogger("esri.views.2d.layers.MapImageLayerView2D");let re=class extends(Y((0,X.Z)((0,d.y)(g.Z)))){constructor(){super(...arguments),this._highlightGraphics=new y.J}update(e){this.strategy.update(e).catch((e=>{(0,n.D_)(e)||te.error(e)}))}attach(){const{imageMaxWidth:e,imageMaxHeight:t,version:r}=this.layer,i=r>=10.3,s=r>=10;this._bitmapContainer=new c.c,this.container.addChild(this._bitmapContainer);const n=new h.Z({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new f.Z(this.view.featuresTilingScheme)});this.container.addChild(n.container),this.strategy=new m.Z({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:e,imageMaxHeight:t,imageRotationSupported:i,imageNormalizationSupported:s,hidpi:!0}),this.handles.add((0,a.YP)((()=>this.exportImageVersion),(()=>this.requestUpdate())),"exportImageVersion"),this.handles.add((0,a.YP)((()=>this.view?.floors),(()=>this.requestUpdate())),"view.floors"),this.requestUpdate()}detach(){this.handles.remove("exportImageVersion"),this.handles.remove("view.floors"),this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e,t){return this._highlightGraphics.add(e),{remove:()=>{this._highlightGraphics.remove(e)}}}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}createFetchPopupFeaturesQueryGeometry(e,t){return(0,ee.K)(e,t,this.view)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,i){return this.layer.fetchImage(e,t,r,{timeExtent:this.timeExtent,floors:this.view.floors,...i})}};(0,i._)([(0,o.Cb)()],re.prototype,"strategy",void 0),(0,i._)([(0,o.Cb)()],re.prototype,"updating",void 0),re=(0,i._)([(0,u.j)("esri.views.2d.layers.MapImageLayerView2D")],re);const ie=re},83978:(e,t,r)=>{r.d(t,{Z:()=>p});var i=r(27366),s=(r(32718),r(25243),r(63780),r(93169),r(75366),r(69912)),n=r(80613),a=r(82022),o=r(8548);let l=class extends a.Z{doRender(e){e.drawPhase===n.jx.HIGHLIGHT&&super.doRender(e)}renderChildren(e){if(this.attributeView.bindTextures(e.context),!this.children.some((e=>e.hasData)))return;super.renderChildren(e);const{painter:t}=e,r=t.effects.highlight;r.bind(e),e.context.setColorMask(!0,!0,!0,!0),e.context.clear(o.lk.COLOR_BUFFER_BIT),this._renderChildren(e,r.defines.concat(["highlightAll"])),r.draw(e),r.unbind()}};l=(0,i._)([(0,s.j)("esri.views.2d.layers.support.HighlightGraphicContainer")],l);const p=l},24405:(e,t,r)=>{r.d(t,{V:()=>a,e:()=>n});var i=r(92026),s=r(37270);async function n(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.popupTemplate;if((0,i.Wi)(t))return[];const r=await t.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:n}=t,{objectIdField:a,typeIdField:o,globalIdField:l,relationships:p}=e;if(r.includes("*"))return["*"];const u=n?await(0,s.CH)(e):[],y=(0,s.Q0)(e.fieldsIndex,[...r,...u]);return o&&y.push(o),y&&a&&e.fieldsIndex.has(a)&&!y.includes(a)&&y.push(a),y&&l&&e.fieldsIndex.has(l)&&!y.includes(l)&&y.push(l),p&&p.forEach((t=>{const{keyField:r}=t;y&&r&&e.fieldsIndex.has(r)&&!y.includes(r)&&y.push(r)})),y}function a(e,t){return e.popupTemplate?e.popupTemplate:(0,i.pC)(t)&&t.defaultPopupTemplateEnabled&&(0,i.pC)(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}},45008:(e,t,r)=>{r.d(t,{D:()=>l,K:()=>o});r(59486);var i=r(92026),s=r(68860),n=r(96669),a=r(53866);function o(e,t,r){let n,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new a.Z;if("2d"===r.type)n=t*r.resolution;else if("3d"===r.type){const a=r.overlayPixelSizeInMapUnits(e),o=r.basemapSpatialReference;n=(0,i.pC)(o)&&!o.equals(r.spatialReference)?(0,s.c9)(o)/(0,s.c9)(r.spatialReference):t*a}const l=e.x-n,p=e.y-n,u=e.x+n,y=e.y+n,{spatialReference:c}=r;return o.xmin=Math.min(l,u),o.ymin=Math.min(p,y),o.xmax=Math.max(l,u),o.ymax=Math.max(p,y),o.spatialReference=c,o}function l(e,t,r){const s=r.toMap(e);return!(0,i.Wi)(s)&&o(s,(0,n.k)(),r,p).intersects(t)}const p=new a.Z}}]);
//# sourceMappingURL=7044.c37a7584.chunk.js.map