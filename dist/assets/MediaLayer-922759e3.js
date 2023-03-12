import{e as i,a as x,ri as Ee,at as c,iY as ee,aS as N,y as l,ai as h,qI as ge,f as Pe,cd as G,ae as K,J as S,aw as B,bS as F,f6 as Le,iP as Y,iO as re,jk as A,ct as pe,a$ as ie,ca as M,L as be,eS as q,ar as ae,c9 as Se,fv as je,rU as Ce,aP as ve,ag as te,mC as Oe,kF as ue,kt as xe,ks as we,kJ as Te,kG as Ve,ix as He,rV as Ue,kL as We,h2 as ke,E as ne,aQ as Ge,I as Ae,M as Ne,z as Be,ac as Fe,no as ze,c7 as Je,aT as Ke,bW as qe,aB as De,o1 as Ye,iD as Qe,iE as Xe,iG as Ze,iK as et,K as tt,fR as nt}from"./index-3baec1e8.js";import{h as j,j as ot,u as st}from"./perspectiveUtils-cfbf202d.js";import{t as rt,e as oe}from"./mat3f64-221ce671.js";import{t as it}from"./resourceExtension-199184c6.js";import{o as at}from"./BoundsStore-df3e3393.js";import"./normalizeUtilsSync-a7753d41.js";import"./PooledRBush-c34f55ce.js";let se=class extends Ee{projectOrWarn(t,n){if(c(t))return t;const{geometry:o,pending:s}=ee(t,n);return s?null:s||o?o:(N.getLogger(this.declaredClass).warn("geometry could not be projected to the spatial reference",{georeference:this,geometry:t,sourceSpatialReference:t.spatialReference,targetSpatialReference:n}),null)}};se=i([x("esri.layers.support.GeoreferenceBase")],se);const Q=se,X=oe(),u=M();let z=class extends be{constructor(){super(...arguments),this.sourcePoint=null,this.mapPoint=null}};i([l()],z.prototype,"sourcePoint",void 0),i([l({type:h})],z.prototype,"mapPoint",void 0),z=i([x("esri.layers.support.ControlPoint")],z);let y=class extends ge(Q){constructor(t){super(t),this.controlPoints=null,this.height=0,this.type="control-points",this.width=0}readControlPoints(t,n){const o=Pe.fromJSON(n.spatialReference),s=rt(...n.coefficients,1);return t.map(r=>(G(u,r.x,r.y),j(u,u,s),{sourcePoint:r,mapPoint:new h({x:u[0],y:u[1],spatialReference:o})}))}writeControlPoints(t,n,o,s){if(c(this.transform)){const r=new K("web-document-write:invalid-georeference","Invalid 'controlPoints', 'width', 'height' configuration.",{layer:s==null?void 0:s.layer,georeference:this});s!=null&&s.messages?s.messages.push(r):N.getLogger(this.declaredClass).error(r.name,r.message)}else S(t)&&m(t[0])&&(n.controlPoints=t.map(r=>{const a=B(r.sourcePoint);return{x:a.x,y:a.y}}),n.spatialReference=t[0].mapPoint.spatialReference.toJSON(),n.coefficients=this.transform.slice(0,8))}get coords(){if(c(this.controlPoints))return null;const t=this._updateTransform(X);if(c(t)||!m(this.controlPoints[0]))return null;const n=this.controlPoints[0].mapPoint.spatialReference;return dt(t,this.width,this.height,n)}set coords(t){if(c(this.controlPoints)||!m(this.controlPoints[0]))return;const n=this.controlPoints[0].mapPoint.spatialReference;if(t=this.projectOrWarn(t,n),c(t))return;const{width:o,height:s}=this,{rings:[[r,a,p,d]]}=t,g={sourcePoint:F(0,s),mapPoint:new h({x:r[0],y:r[1],spatialReference:n})},P={sourcePoint:F(0,0),mapPoint:new h({x:a[0],y:a[1],spatialReference:n})},v={sourcePoint:F(o,0),mapPoint:new h({x:p[0],y:p[1],spatialReference:n})},E={sourcePoint:F(o,s),mapPoint:new h({x:d[0],y:d[1],spatialReference:n})};m(g)&&m(P)&&m(v)&&m(E)&&(de(X,g,P,v,E),this.controlPoints=B(this.controlPoints).map(({sourcePoint:T})=>(G(u,T.x,T.y),j(u,u,X),{sourcePoint:T,mapPoint:new h({x:u[0],y:u[1],spatialReference:n})})))}get inverseTransform(){return c(this.transform)?null:Le(oe(),this.transform)}get transform(){return this._updateTransform()}toMap(t){if(c(t)||c(this.transform)||c(this.controlPoints)||!m(this.controlPoints[0]))return null;G(u,t.x,t.y);const n=this.controlPoints[0].mapPoint.spatialReference;return j(u,u,this.transform),new h({x:u[0],y:u[1],spatialReference:n})}toSource(t){if(c(t)||c(this.inverseTransform)||c(this.controlPoints)||!m(this.controlPoints[0]))return null;const n=this.controlPoints[0].mapPoint.spatialReference;return t=t.normalize(),t=ee(t,n).geometry,c(t)?null:(G(u,t.x,t.y),j(u,u,this.inverseTransform),F(u[0],u[1]))}_updateTransform(t){const{controlPoints:n,width:o,height:s}=this;if(c(n)||!(o>0)||!(s>0))return null;const[r,a,p,d]=n;if(!m(r))return null;const g=r.mapPoint.spatialReference,P=this._projectControlPoint(a,g),v=this._projectControlPoint(p,g),E=this._projectControlPoint(d,g);if(!P.valid||!v.valid||!E.valid||!m(P.controlPoint))return null;c(t)&&(t=oe());let T=null;return T=m(v.controlPoint)&&m(E.controlPoint)?de(t,r,P.controlPoint,v.controlPoint,E.controlPoint):m(v.controlPoint)?ct(t,r,P.controlPoint,v.controlPoint):lt(t,r,P.controlPoint),T.every(Me=>Me===0)?null:T}_projectControlPoint(t,n){if(!m(t))return{valid:!0,controlPoint:t};const{sourcePoint:o,mapPoint:s}=t,{geometry:r,pending:a}=ee(s,n);return a?{valid:!1,controlPoint:null}:a||r?{valid:!0,controlPoint:{sourcePoint:o,mapPoint:r}}:(N.getLogger(this.declaredClass).warn("map point could not be projected to the spatial reference",{georeference:this,controlPoint:t,sourceSpatialReference:s.spatialReference,targetSpatialReference:n}),{valid:!1,controlPoint:null})}};function m(e){return S(e)&&S(e.sourcePoint)&&S(e.mapPoint)}i([l({type:[z],json:{write:{allowNull:!1,isRequired:!0}}})],y.prototype,"controlPoints",void 0),i([Y("controlPoints")],y.prototype,"readControlPoints",null),i([re("controlPoints")],y.prototype,"writeControlPoints",null),i([l()],y.prototype,"coords",null),i([l({json:{write:!0}})],y.prototype,"height",void 0),i([l({readOnly:!0})],y.prototype,"inverseTransform",null),i([l({readOnly:!0})],y.prototype,"transform",null),i([l({json:{write:!0}})],y.prototype,"width",void 0),y=i([x("esri.layers.support.ControlPointsGeoreference")],y);const w=M(),R=M(),V=M(),C=M(),_=M(),$=M(),H=M(),O=M(),D=Math.PI/2;function I(e,t,n){G(e,n.sourcePoint.x,n.sourcePoint.y),G(t,n.mapPoint.x,n.mapPoint.y)}function lt(e,t,n){return I(w,_,t),I(R,$,n),A(V,R,w,D),A(C,w,R,D),A(H,$,_,-D),A(O,_,$,-D),le(e,w,R,V,C,_,$,H,O)}function ct(e,t,n,o){return I(w,_,t),I(R,$,n),I(V,H,o),pe(C,w,R,.5),A(C,V,C,Math.PI),pe(O,_,$,.5),A(O,H,O,Math.PI),le(e,w,R,V,C,_,$,H,O)}function de(e,t,n,o,s){return I(w,_,t),I(R,$,n),I(V,H,o),I(C,O,s),le(e,w,R,V,C,_,$,H,O)}const pt=new Array(8).fill(0),ut=new Array(8).fill(0);function he(e,t,n,o,s){return e[0]=t[0],e[1]=t[1],e[2]=n[0],e[3]=n[1],e[4]=o[0],e[5]=o[1],e[6]=s[0],e[7]=s[1],e}function le(e,t,n,o,s,r,a,p,d){return ot(e,he(pt,t,n,o,s),he(ut,r,a,p,d))}function dt(e,t,n,o){const s=q(0,n),r=q(0,0),a=q(t,0),p=q(t,n);return j(s,s,e),j(r,r,e),j(a,a,e),j(p,p,e),new ie({rings:[[s,r,a,p,s]],spatialReference:o})}const Re=y;let L=class extends Q{constructor(t){super(t),this.bottomLeft=null,this.bottomRight=null,this.topLeft=null,this.topRight=null,this.type="corners"}get coords(){let{topLeft:t,topRight:n,bottomLeft:o,bottomRight:s}=this;if(c(t)||c(n)||c(o)||c(s))return null;const r=t.spatialReference;return n=this.projectOrWarn(n,r),o=this.projectOrWarn(o,r),s=this.projectOrWarn(s,r),c(n)||c(o)||c(s)?null:new ie({rings:[[[o.x,o.y],[t.x,t.y],[n.x,n.y],[s.x,s.y],[o.x,o.y]]],spatialReference:r})}set coords(t){const{topLeft:n}=this;if(c(n))return;const o=n.spatialReference;if(t=this.projectOrWarn(t,o),c(t))return;const{rings:[[s,r,a,p]]}=t;this.bottomLeft=new h({x:s[0],y:s[1],spatialReference:o}),this.topLeft=new h({x:r[0],y:r[1],spatialReference:o}),this.topRight=new h({x:a[0],y:a[1],spatialReference:o}),this.bottomRight=new h({x:p[0],y:p[1],spatialReference:o})}};i([l()],L.prototype,"coords",null),i([l({type:h})],L.prototype,"bottomLeft",void 0),i([l({type:h})],L.prototype,"bottomRight",void 0),i([l({type:h})],L.prototype,"topLeft",void 0),i([l({type:h})],L.prototype,"topRight",void 0),L=i([x("esri.layers.support.CornersGeoreference")],L);const ht=L;let U=class extends Q{constructor(e){super(e),this.extent=null,this.rotation=0,this.type="extent-and-rotation"}get coords(){if(c(this.extent))return null;const{xmin:e,ymin:t,xmax:n,ymax:o,spatialReference:s}=this.extent;let r;if(this.rotation){const{x:a,y:p}=this.extent.center,d=me(a,p,this.rotation);r=[d(e,t),d(e,o),d(n,o),d(n,t)],r.push(r[0])}else r=[[e,t],[e,o],[n,o],[n,t],[e,t]];return new ie({rings:[r],spatialReference:s})}set coords(e){if(c(e)||c(this.extent))return;const t=this.extent.spatialReference;if(e=this.projectOrWarn(e,t),c(e)||c(e.extent))return;const{rings:[[n,o,s]],extent:{center:{x:r,y:a}}}=e,p=Se(Math.PI/2-Math.atan2(o[1]-n[1],o[0]-n[0])),d=me(r,a,-p),[g,P]=d(n[0],n[1]),[v,E]=d(s[0],s[1]);this.extent=new ae({xmin:g,ymin:P,xmax:v,ymax:E,spatialReference:t}),this.rotation=p}};function me(e,t,n){const o=je(n),s=Math.cos(o),r=Math.sin(o);return(a,p)=>[s*(a-e)+r*(p-t)+e,s*(p-t)-r*(a-e)+t]}i([l()],U.prototype,"coords",null),i([l({type:ae})],U.prototype,"extent",void 0),i([l({type:Number})],U.prototype,"rotation",void 0),U=i([x("esri.layers.support.ExtentAndRotationGeoreference")],U);const mt=U,ft={key:"type",base:Q,typeMap:{"control-points":Re,corners:ht,"extent-and-rotation":mt}};let W=class extends Ce(ge(ve)){constructor(){super(...arguments),this.georeference=null,this.opacity=1}readGeoreference(e){return Re.fromJSON(e)}};i([l({types:ft,json:{write:!0}})],W.prototype,"georeference",void 0),i([Y("georeference")],W.prototype,"readGeoreference",null),i([l()],W.prototype,"opacity",void 0),W=i([x("esri.layers.support.MediaElementBase")],W);const ce=W;let b=class extends ce{constructor(e){super(e),this.content=null,this.image=null,this.type="image",this.image=null}load(){const e=this.image;if(typeof e=="string"){const t=te(e,{responseType:"image"}).then(({data:n})=>{this._set("content",n)});this.addResolvingPromise(t)}else if(e instanceof HTMLImageElement){const t=e.decode().then(()=>{this._set("content",e)});this.addResolvingPromise(t)}else e?this._set("content",e):this.addResolvingPromise(Promise.reject(new K("image-element:invalid-image-type","Invalid image type",{image:e})));return Promise.resolve(this)}readImage(e,t,n){return Oe(t.url,n)}writeImage(e,t,n,o){if(c(e))return;const s=o==null?void 0:o.portalItem,r=o==null?void 0:o.resources;if(!s||!r)return void(typeof e=="string"&&(t[n]=ue(e,o)));const a=typeof e!="string"||xe(e)||we(e)?null:e;if(a){if(Te(a)==null)return void(t[n]=a);const p=ue(a,{...o,verifyItemRelativeUrls:o&&o.verifyItemRelativeUrls?{writtenUrls:o.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},Ve.NO);if(s&&p&&!He(p))return r.toKeep.push({resource:s.resourceFromPath(p),compress:!1}),void(t[n]=p)}t[n]="<pending>",r.pendingOperations.push($e(e).then(p=>{const d=gt(p,s);t[n]=d.itemRelativeUrl,r.toAdd.push({resource:d,content:p,compress:!1,finish:g=>{this.image=g.url}})}))}};i([l({readOnly:!0})],b.prototype,"content",void 0),i([l({json:{name:"url",type:String}})],b.prototype,"image",void 0),i([Y("image",["url"])],b.prototype,"readImage",null),i([re("image")],b.prototype,"writeImage",null),i([l({readOnly:!0,json:{name:"mediaType"}})],b.prototype,"type",void 0),b=i([x("esri.layers.support.ImageElement")],b);const _e=b;async function $e(e){if(typeof e=="string"){if(we(e)){const{data:t}=await te(e,{responseType:"blob"});return t}return xe(e)?Ue(e):$e((await te(e,{responseType:"image"})).data)}return new Promise(t=>yt(e).toBlob(t))}function yt(e){if(e instanceof HTMLCanvasElement)return e;const t=e instanceof HTMLImageElement?e.naturalWidth:e.width,n=e instanceof HTMLImageElement?e.naturalHeight:e.height,o=document.createElement("canvas"),s=o.getContext("2d");return o.width=t,o.height=n,e instanceof HTMLImageElement?s.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&s.putImageData(e,0,0),o}function gt(e,t){const n=We(),o=`${ke("media",n)}.${it(e)}`;return t.resourceFromPath(o)}let J=class extends ce{constructor(e){super(e),this.content=null,this.type="video"}load(){const e=this.video;if(typeof e=="string"){const t=document.createElement("video");t.src=e,t.crossOrigin="anonymous",t.autoplay=!0,t.muted=!0,t.loop=!0,this.addResolvingPromise(this._loadVideo(t).then(()=>{this._set("content",t)}))}else e instanceof HTMLVideoElement?this.addResolvingPromise(this._loadVideo(e).then(()=>{this._set("content",e)})):this.addResolvingPromise(Promise.reject(new K("video-element:invalid-video-type","Invalid video type",{video:e})));return Promise.resolve(this)}set video(e){this.loadStatus==="not-loaded"?this._set("video",e):N.getLogger(this.declaredClass).error("#video","video cannot be changed after the element is loaded.")}_loadVideo(e){return new Promise((t,n)=>{e.oncanplay=()=>{e.oncanplay=null,e.play().then(t,n)},e.crossOrigin!=="anonymous"&&(e.crossOrigin="anonymous",e.src=e.src)})}};i([l({readOnly:!0})],J.prototype,"content",void 0),i([l()],J.prototype,"video",null),J=i([x("esri.layers.support.VideoElement")],J);const Ie=J,Pt={key:"type",defaultKeyValue:"image",base:ce,typeMap:{image:_e,video:Ie}},fe=ne.ofType(Pt);let k=class extends ve.LoadableMixin(Ge(Ae(Ne.EventedAccessor))){constructor(e){super(e),this._index=new at,this._elementViewsMap=new Map,this._elementsIndexes=new Map,this._elementsChangedHandler=t=>{for(const o of t.removed){const s=this._elementViewsMap.get(o);this._elementViewsMap.delete(o),this._index.delete(s),this.handles.remove(s),s.destroy(),this.notifyChange("fullExtent")}const{spatialReference:n}=this;for(const o of t.added){if(this._elementViewsMap.get(o))continue;const s=new st({spatialReference:n,element:o});this._elementViewsMap.set(o,s);const r=Be(()=>s.coords,()=>this._updateIndexForElement(s,!1));this._updateIndexForElement(s,!0),this.handles.add(r,s)}this._elementsIndexes.clear(),this.elements.forEach((o,s)=>this._elementsIndexes.set(o,s)),this.emit("refresh")},this.elements=new fe}async load(e){if(Fe(e),!this.spatialReference){const t=this.elements.find(n=>S(n.georeference)&&S(n.georeference.coords));this._set("spatialReference",t?B(B(t.georeference).coords).spatialReference:Pe.WGS84)}return this._elementsChangedHandler({added:this.elements.items,removed:[]}),this.handles.add(this.elements.on("change",this._elementsChangedHandler)),this}destroy(){this._index.clear(),this._elementViewsMap.clear(),this._elementsIndexes.clear()}set elements(e){this._set("elements",ze(e,this._get("elements"),fe))}get fullExtent(){if(this.loadStatus==="not-loaded")return null;const e=this._index.fullBounds;return c(e)?null:new ae({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:this.spatialReference})}set spatialReference(e){this.loadStatus==="not-loaded"?this._set("spatialReference",e):N.getLogger(this.declaredClass).error("#spatialReference","spatialReference cannot be changed after the source is loaded.")}async queryElements(e,t){await this.load(),await Je(e.spatialReference,this.spatialReference,null,t);const n=Ke(e.spatialReference,this.spatialReference)?e:qe(e,this.spatialReference);if(!n)return[];const o=n.normalize(),s=[];for(const r of o)this._index.forEachInBounds(De(r),({normalizedCoords:a,element:p})=>{S(a)&&Ye(r,a)&&s.push(p)});return s.sort((r,a)=>this._elementsIndexes.get(r)-this._elementsIndexes.get(a)),s}_updateIndexForElement(e,t){const n=e.normalizedBounds,o=this._index.has(e),s=S(n);this._index.delete(e),s&&this._index.set(e,n),this.notifyChange("fullExtent"),t||(o!==s?this.emit("refresh"):this.emit("change",{element:e.element}))}};i([l()],k.prototype,"elements",null),i([l({readOnly:!0})],k.prototype,"fullExtent",null),i([l()],k.prototype,"spatialReference",null),k=i([x("esri.layers.support.LocalMediaElementSource")],k);const Z=k;function ye(e){return typeof e=="object"&&e!=null&&"type"in e}let f=class extends Qe(Xe(Ze(et(nt)))){constructor(e){super(e),this.effectiveSource=null,this.copyright=null,this.operationalLayerType="MediaLayer",this.spatialReference=null,this.type="media",this.source=new Z}load(e){const t=this.source;if(!t)return this.addResolvingPromise(Promise.reject(new K("media-layer:source-missing","Set 'MediaLayer.source' before loading the layer."))),Promise.resolve(this);const n=ye(t)?new Z({elements:new ne([t])}):t;this._set("effectiveSource",n),this.spatialReference&&(n.spatialReference=this.spatialReference);const o=n.load(e).then(()=>{this.spatialReference=n.spatialReference});return this.addResolvingPromise(o),Promise.resolve(this)}destroy(){var e,t;(e=B(this.effectiveSource))==null||e.destroy(),(t=B(this.source))==null||t.destroy()}get fullExtent(){return this.loaded?this.effectiveSource.fullExtent:null}set source(e){this.loadStatus==="not-loaded"?this._set("source",e):N.getLogger(this.declaredClass).error("#source","source cannot be changed after the layer is loaded.")}castSource(e){return e?Array.isArray(e)||e instanceof ne?new Z({elements:e}):e:null}readSource(e,t,n){const o=t.mediaType==="image"?new _e:t.mediaType==="video"?new Ie:null;return o==null||o.read(t,n),o}writeSource(e,t,n,o){var s;e&&ye(e)&&e.type==="image"?e.write(t,o):o!=null&&o.messages&&((s=o==null?void 0:o.messages)==null||s.push(new K("media-layer:unsupported-source","source must be an 'ImageElement'")))}};i([l({readOnly:!0})],f.prototype,"effectiveSource",void 0),i([l({type:String})],f.prototype,"copyright",void 0),i([l({readOnly:!0})],f.prototype,"fullExtent",null),i([l({type:["MediaLayer"]})],f.prototype,"operationalLayerType",void 0),i([l({type:["show","hide"]})],f.prototype,"listMode",void 0),i([l({nonNullable:!0,json:{write:{enabled:!0,allowNull:!1}}})],f.prototype,"source",null),i([tt("source")],f.prototype,"castSource",null),i([Y("source",["url"])],f.prototype,"readSource",null),i([re("source")],f.prototype,"writeSource",null),i([l()],f.prototype,"spatialReference",void 0),i([l({readOnly:!0})],f.prototype,"type",void 0),f=i([x("esri.layers.MediaLayer")],f);const bt=f;export{bt as default};
