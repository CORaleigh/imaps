import{iD as w,qN as I,iE as $,iF as O,iG as T,iH as E,iK as R,qO as M,iJ as q,iI as P,I as F,J,eZ as L,kI as v,h_ as g,nq as N,ag as f,ar as j,h0 as U,qP as _,qQ as k,ae as b,ad as A,e as i,y as n,qR as x,iP as V,iO as z,o8 as D,a as G,fR as H,pM as K}from"./index-3baec1e8.js";import{E as B,y as C,Z as W}from"./SublayersOwner-399fa3d6.js";import{c as Z}from"./ExportImageParameters-702f066b.js";import{e as Q}from"./imageBitmapUtils-46e42cba.js";import{n as S}from"./sublayerUtils-c506d55f.js";import"./QueryTask-d40a405c.js";import"./executeForIds-adcb94fd.js";import"./floorFilterUtils-080a7cd2.js";let s=class extends w(I($(B(C(O(T(E(R(M(q(P(F(H))))))))))))){constructor(...e){super(...e),this.dateFieldsTimeReference=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeReference=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,a){return typeof e=="string"?{url:e,...a}:e}load(e){const a=J(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(L).then(()=>this._fetchService(a))),Promise.resolve(this)}readImageFormat(e,a){const l=a.supportedImageFormatTypes;return l&&l.includes("PNG32")?"png32":"png24"}writeSublayers(e,a,l,r){var m;if(!this.loaded||!e)return;const o=e.slice().reverse().flatten(({sublayers:t})=>t&&t.toArray().reverse()).toArray();let p=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&((m=this.capabilities.exportMap)!=null&&m.supportsDynamicLayers)){const t=v(r.origin);if(t===g.PORTAL_ITEM){const y=this.createSublayersForOrigin("service").sublayers;p=S(o,y,g.SERVICE)}else if(t>g.PORTAL_ITEM){const y=this.createSublayersForOrigin("portal-item");p=S(o,y.sublayers,v(y.origin))}}const c=[],d={writeSublayerStructure:p,...r};let h=p;o.forEach(t=>{const y=t.write({},d);c.push(y),h=h||t.originOf("visible")==="user"}),c.some(t=>Object.keys(t).length>1)&&(a.layers=c),h&&(a.visibleLayers=o.filter(t=>t.visible).map(t=>t.id))}createExportImageParameters(e,a,l,r){const o=r&&r.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const p=new Z({layer:this,floors:r==null?void 0:r.floors,scale:N({extent:e,width:a})*o}),c=p.toJSON();p.destroy();const d=!r||!r.rotation||this.version<10.3?{}:{rotation:-r.rotation},h=e&&e.spatialReference,m=h.wkid||JSON.stringify(h.toJSON());c.dpi*=o;const t={};if(r!=null&&r.timeExtent){const{start:y,end:u}=r.timeExtent.toJSON();t.time=y&&u&&y===u?""+y:`${y??"null"},${u??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(t.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:m,imageSR:m,size:a+","+l,...c,...d,...t}}async fetchImage(e,a,l,r){const{data:o}=await this._fetchImage("image",e,a,l,r);return o}async fetchImageBitmap(e,a,l,r){const{data:o,url:p}=await this._fetchImage("blob",e,a,l,r);return Q(o,p)}async fetchRecomputedExtents(e={}){const a={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:l}=await f(this.url,a),{extent:r,fullExtent:o,timeExtent:p}=l,c=r||o;return{fullExtent:c&&j.fromJSON(c),timeExtent:p&&U.fromJSON({start:p[0],end:p[1]})}}loadAll(){return _(this,e=>{e(this.allSublayers)})}serviceSupportsSpatialReference(e){return k(this,e)}async _fetchImage(e,a,l,r,o){var d,h,m;const p={responseType:e,signal:(o==null?void 0:o.signal)??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(a,l,r,o),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},c=this.parsedUrl.path+"/export";if(((d=p.query)==null?void 0:d.dynamicLayers)!=null&&!((m=(h=this.capabilities)==null?void 0:h.exportMap)!=null&&m.supportsDynamicLayers))throw new b("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:p.query});try{const{data:t}=await f(c,p);return{data:t,url:c}}catch(t){throw A(t)?t:new b("mapimagelayer:image-fetch-error",`Unable to load image: ${c}`,{error:t})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:a,ssl:l}=await f(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});l&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=a,this.read(a,{origin:"service",url:this.parsedUrl})}};i([n({type:x})],s.prototype,"dateFieldsTimeReference",void 0),i([n({type:Boolean})],s.prototype,"datesInUnknownTimezone",void 0),i([n()],s.prototype,"dpi",void 0),i([n()],s.prototype,"gdbVersion",void 0),i([n()],s.prototype,"imageFormat",void 0),i([V("imageFormat",["supportedImageFormatTypes"])],s.prototype,"readImageFormat",null),i([n({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],s.prototype,"imageMaxHeight",void 0),i([n({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],s.prototype,"imageMaxWidth",void 0),i([n()],s.prototype,"imageTransparency",void 0),i([n({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],s.prototype,"isReference",void 0),i([n({json:{read:!1,write:!1}})],s.prototype,"labelsVisible",void 0),i([n({type:["ArcGISMapServiceLayer"]})],s.prototype,"operationalLayerType",void 0),i([n({json:{read:!1,write:!1}})],s.prototype,"popupEnabled",void 0),i([n({type:x})],s.prototype,"preferredTimeReference",void 0),i([n()],s.prototype,"sourceJSON",void 0),i([n({json:{write:{ignoreOrigin:!0}}})],s.prototype,"sublayers",void 0),i([z("sublayers",{layers:{type:[W]},visibleLayers:{type:[K]}})],s.prototype,"writeSublayers",null),i([n({type:["show","hide","hide-children"]})],s.prototype,"listMode",void 0),i([n({json:{read:!1},readOnly:!0,value:"map-image"})],s.prototype,"type",void 0),i([n(D)],s.prototype,"url",void 0),s=i([G("esri.layers.MapImageLayer")],s);const oe=s;export{oe as default};
