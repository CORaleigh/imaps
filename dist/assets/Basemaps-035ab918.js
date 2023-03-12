import{a2 as te,a3 as F,e as u,y as h,a as q,L as me,a4 as Ye,a5 as Xe,a6 as Ze,a7 as et,a8 as tt,J as R,a9 as st,aa as at,ab as $e,ac as P,ad as se,ae as d,af as it,ag as Y,ah as X,ai as Z,f as Te,aj as ee,ak as ie,al as de,am as Ae,an as Oe,ao as Re,ap as Se,aq as K,ar as rt,as as ne,at as O,au as nt,av as ot,aw as lt,ax as ct,ay as ut,az as ht,aA as pt,aB as mt,aC as re,aD as dt,aE as oe,aF as xe,aG as ft,aH as gt,aI as bt,E as H,aJ as yt,aK as Ce,aL as Ie,w as wt,I as We,z as W,aM as vt,aN as V,aO as fe,aP as he,aQ as _t,x as ze,aR as De,aS as kt,D as $t,T as Ge,aT as Le,aU as Tt,aV as Rt,aW as St,aX as xt,K as Ct,N as It,P as Lt,W as Bt,aY as Mt,_ as Et,A as x,aZ as At,a_ as Ot,a$ as Wt,c as zt,r as y,R as Dt,k as N,m as Gt,o as v,p as qt,q as Ft,b0 as Nt,b1 as Qt,b2 as le,b3 as ce,s as Pt,b4 as Ut,X as jt}from"./index-3baec1e8.js";import{intersects as Ht}from"./geometryEngine-29c8d8d1.js";import{s as qe}from"./Util-4c7aae16.js";import{O as z}from"./interfaces-736d93d7.js";import Vt from"./VectorTileLayer-0cb17c7b.js";import"./geometryEngineBase-e1a33b0a.js";import"./hydrated-aab91bce.js";import"./ArcGISCachedService-c337d644.js";import"./TilemapCache-2210c884.js";import"./jsonContext-db44f3e1.js";import"./StyleRepository-2a0a133c.js";import"./StyleDefinition-fbc907c2.js";import"./enums-55085e26.js";import"./enums-fb086c25.js";import"./enums-64ab819c.js";import"./VertexElementDescriptor-2925c6af.js";import"./GeometryUtils-53652037.js";import"./definitions-19bfb61c.js";function Kt(s,e){return s!=null&&(e==null||(e===te.Local?!s.isGeographic||s.isWGS84||s.wkid===F.CGCS2000:s.isWebMercator||s.isWGS84||s.wkid===F.CGCS2000||s.wkid===F.GCSMARS2000||s.wkid===F.GCSMARS2000_SPHERE||s.wkid===F.GCSMOON2000))}let Jt=class{constructor(e){this.client=e,this._cancelled=!1,this.size=0,this.duration=0}},Yt=class{constructor(e){this.typeWorkerQuota=e,this.tasks=new Array,this.numWorkers=0,this.statistics=new Xt}};class Xt{constructor(){this.requests=0,this.size=0,this.duration=0,this.speed=0}}let Zt=class{constructor(e,t,a,i){this._workerFunc=e,this._callbackFunc=t,this._maxTotalNumWorkers=a,this._totalNumWorkers=0,this._clients=i.map(r=>new Yt(r))}destroy(){this._clients.length=0}hasQuota(e){const t=this._clients[e];return!!t&&(this._totalNumWorkers<this._maxTotalNumWorkers||t.numWorkers+t.tasks.length<t.typeWorkerQuota)}push(e){const t=this._clients[e.client];t&&(this._totalNumWorkers<this._maxTotalNumWorkers?(t.numWorkers++,this._totalNumWorkers++,this._workerFunc(e,(a,i)=>this._taskCallback(a,i))):t.tasks.push(e))}cancel(e){this._taskFinished(e),e._cancelled=!0}_taskFinished(e){const t=this._clients[e.client];this._totalNumWorkers--,t.numWorkers--,t.statistics.requests++,t.statistics.size+=e.size||0,t.statistics.duration+=e.duration||0,t.statistics.speed=t.statistics.duration>0?t.statistics.size/t.statistics.duration:0,qe(t.numWorkers>=0),this._next()}_next(){for(const e of this._clients)if(e&&e.numWorkers<e.typeWorkerQuota&&this._processQueue(e))return;for(const e of this._clients)if(e&&this._processQueue(e))return}_processQueue(e){for(;e.tasks.length>0;)if(this._workerFunc(e.tasks.shift(),(t,a)=>this._taskCallback(t,a)))return e.numWorkers++,this._totalNumWorkers++,!0;return!1}_taskCallback(e,t){e._cancelled||(this._callbackFunc(e,t),this._taskFinished(e))}getStatsForType(e){const t=this._clients[e];return t?{quota:t.typeWorkerQuota,workers:t.numWorkers,queueSize:t.tasks.length,requestStats:t.statistics}:null}get test(){const e=this;return{set workerFunc(t){e._workerFunc=t}}}},ue=class extends me{constructor(){super(...arguments),this._tasks=new Map,this._onLoadQueue=new Array,this._doneQueue=new Array,this.updating=!1}setup(e,t,a){this._loadQueue=new Zt((i,r)=>this._startLoading(i,r),(i,r)=>this._doneLoadingCB(i,r),e,t),a&&(this._frameTask=a.registerTask(Ye.STREAM_DATA_LOADER,this))}destroy(){this._frameTask=Xe(this._frameTask),this._tasks.forEach(e=>Ze(e.abortController)),this._loadQueue=et(this._loadQueue),this._onLoadQueue=null,this._doneQueue=null,this._tasks=null}hasDownloadSlots(e){return this._loadQueue.hasQuota(e)}request(e,t,a,i={}){const r=tt();r.__signal=R(i)?i.signal:null;const n=this._createOrUpdateTask(e,t,a,i,r);return st(i,()=>this._cancelRequest(n,r)),r.promise}_createTask(e,t,a,i,r,n){const o=new as(e,t,a,i,r);return this._updateTask(o,n),this._tasks.set(r,o),this._tasks.size===1&&this._set("updating",!0),this._loadQueue.push(o),o}_cancelRequest(e,t){var a;at(e.resolvers,t),t.reject($e()),e.resolvers.length===0&&(e.status===T.DOWNLOADING&&(e.status=T.CANCELLED,this._loadQueue.cancel(e),(a=e.abortController)==null||a.abort(),e.request=null,e.abortController=null),e.status=T.CANCELLED,this._tasks.delete(e.key),this._tasks.size===0&&this._set("updating",!1))}_updateTask(e,t){e.resolvers.push(t)}_createOrUpdateTask(e,t,a,i,r){const n=is(R(i)&&i.uid||e,t,a),o=this._tasks.get(n);return o?(this._updateTask(o,r),o):this._createTask(e,i,t,a,n,r)}_doneLoadingCB(e,t){this._loadQueue&&(qe(e.status===T.DOWNLOADING),e.status=T.DOWNLOADED,this._frameTask?this._doneQueue.push({task:e,err:t}):this._doneLoading(e,t))}get running(){return this._doneQueue.length>0||this._onLoadQueue.length>0}runTask(e){for(;!e.done&&this._onLoadQueue.length>0;){const t=this._onLoadQueue.shift();P(t.task.abortController),t.task.abortController=null,t.callback(t.task),e.madeProgress()}for(;!e.done&&this._doneQueue.length>0;){const t=this._doneQueue.shift();t.task.status!==T.DOWNLOADED&&(t.err=t.err||$e()),this._doneLoading(t.task,t.err),e.madeProgress()}}_doneLoading(e,t){if(t&&!se(t)&&e.numRetries>0)return--e.numRetries,void this._loadQueue.push(e);let a=e.result instanceof HTMLImageElement?0:e.resolvers.length;for(const i of e.resolvers)if(t)se(t)?i.reject(t):i.reject(new d("stream-data-loader:request-error",`Failed to request resource at '${e.url}'. ${t}`,{url:e.url,error:t}));else{--a;const r=a<=0?e.result:it(e.result);i.resolve(r)}this._tasks.delete(e.key),this._tasks.size===0&&this._set("updating",!1)}_startLoading(e,t){if(e.status===T.CANCELLED)return!1;let a,i;switch(e.startTime=performance.now(),e.status=T.DOWNLOADING,e.docType){case"binary":i="array-buffer",a=0;break;case"image":i="image";break;case"image+type":i="array-buffer";break;default:i="json"}e.abortController=new AbortController;const r=e.abortController.signal;e.request=Y(e.url,{...e.options,responseType:i,timeout:a,signal:r});let n=()=>{};const o=l=>{e.duration=performance.now()-e.startTime,e.size=l instanceof ArrayBuffer?l.byteLength:e.size||0,e.result=l,this._frameTask?this._onLoadQueue.push({callback:t,task:e}):(e.abortController=null,t(e))},c=l=>{e.status===T.DOWNLOADING&&t(e,l),n()};return e.docType!=="image+type"?(e.request.then(l=>o(l.data),c),!0):(e.request.then(l=>{const p=l.data,m=ts(p);if(i="image",e.size=p.byteLength,m==="unknown")return e.request=Y(e.url,{responseType:i,timeout:a,signal:r}),void e.request.then(L=>o(L.data),c);const g=new Blob([p],{type:m}),w=window.URL.createObjectURL(g);n=()=>window.URL.revokeObjectURL(w),e.request=Y(w,{responseType:i,timeout:a,signal:r}),e.request.then(L=>o(new ss(L.data,m,n)),c)},c),!0)}get test(){return{loadQueue:this._loadQueue}}};u([h({readOnly:!0})],ue.prototype,"updating",void 0),ue=u([q("esri.views.3d.support.StreamDataLoader")],ue);const es={numRetries:0};function ts(s){if(s.byteLength<2)return"unknown";const e=new Uint8Array(s,0,s.byteLength);return e[0]===137&&e[1]===80?"image/png":e[0]===71&&e[1]===73?"image/gif":e[0]===66&&e[1]===77?"image/bmp":e[0]===255&&e[1]===216?"image/jpeg":"unknown"}class ss{constructor(e,t,a){this.image=e,this.type=t,this.release=a}get isOpaque(){return this.type==="image/jpeg"}}class as extends Jt{constructor(e,t,a,i,r){super(i),this.url=e,this.options=t,this.docType=a,this.key=r,this.result=null,this.status=T.QUEUED,this.request=null,this.abortController=null,this.resolvers=new Array,this.startTime=0,this.numRetries=es.numRetries}}function is(s,e,t){return`${s}:${e}:${t}`}var T;(function(s){s[s.QUEUED=1]="QUEUED",s[s.DOWNLOADING=2]="DOWNLOADING",s[s.DOWNLOADED=3]="DOWNLOADED",s[s.CANCELLED=4]="CANCELLED"})(T||(T={}));const rs=12;class f{constructor(e){const t=f.checkUnsupported(e);if(R(t))throw t;const a=lt(e);this.spatialReference=a.spatialReference,this._isWebMercator=this.spatialReference.isWebMercator,this._isGCS=de(this.spatialReference)||Ae(this.spatialReference)||Oe(this.spatialReference),this.origin=[a.origin.x,a.origin.y],this.pixelSize=a.size[0],this.dpi=a.dpi;const i=a.lods.reduce((l,p,m)=>(p.level<l.min&&(l.min=p.level,l.minIndex=m),l.max=Math.max(l.max,p.level),l),{min:1/0,minIndex:0,max:-1/0}),r=a.lods[i.minIndex],n=2**r.level;let o=r.resolution*n,c=r.scale*n;this.levels=new Array(i.max+1);for(let l=0;l<this.levels.length;l++)this.levels[l]={resolution:o,scale:c,tileSize:[o*a.size[0],o*a.size[1]]},o/=2,c/=2}clone(){return new f(this.toTileInfo())}toTileInfo(){return new X({dpi:this.dpi,origin:new Z({x:this.origin[0],y:this.origin[1],spatialReference:this.spatialReference}),size:[this.pixelSize,this.pixelSize],spatialReference:this.spatialReference,lods:this.levels.map((e,t)=>new ee({level:t,scale:e.scale,resolution:e.resolution}))})}getExtent(e,t,a,i){const r=this.levels[e],n=r.tileSize[0],o=r.tileSize[1];i[0]=this.origin[0]+a*n,i[2]=this.origin[0]+(a+1)*n,i[3]=this.origin[1]-t*o,i[1]=this.origin[1]-(t+1)*o}convertExtentToRadians(e,t){this._isWebMercator?(t[0]=Re(e[0]),t[1]=Se(e[1]),t[2]=Re(e[2]),t[3]=Se(e[3])):this._isGCS&&(t[0]=K(e[0]),t[1]=K(e[1]),t[2]=K(e[2]),t[3]=K(e[3]))}getExtentGeometry(e,t,a,i=new rt){return this.getExtent(e,t,a,C),i.spatialReference=this.spatialReference,i.xmin=C[0],i.ymin=C[1],i.xmax=C[2],i.ymax=C[3],i.zmin=void 0,i.zmax=void 0,i}ensureMaxLod(e){if(e==null)return!1;let t=!1;for(;this.levels.length<=e;){const a=this.levels[this.levels.length-1],i=a.resolution/2;this.levels.push({resolution:i,scale:a.scale/2,tileSize:[i*this.pixelSize,i*this.pixelSize]}),t=!0}return t}capMaxLod(e){this.levels.length>e+1&&(this.levels.length=e+1)}getMaxLod(){return this.levels.length-1}scaleAtLevel(e){return this.levels[0].scale/2**e}levelAtScale(e){const t=this.levels[0].scale;return e>=t?0:Math.log(t/e)*Math.LOG2E}resolutionAtLevel(e){return this.levels[0].resolution/2**e}compatibleWith(e){if(!(e instanceof f)){if(f.checkUnsupported(e))return!1;e=new f(e)}if(!e.spatialReference.equals(this.spatialReference)||e.pixelSize!==this.pixelSize)return!1;const t=Math.min(this.levels.length,e.levels.length)-1,a=this.levels[t].resolution;let i=.5*a;return!ne(e.origin[0],this.origin[0],i)||!ne(e.origin[1],this.origin[1],i)?!1:(i=.5*a/2**t/this.pixelSize*rs,ne(a,e.levels[t].resolution,i))}rootTilesInExtent(e,t=null,a=1/0){const i=new Array,r=this.levels[0].tileSize;if(O(e)||r[0]===0||r[1]===0)return i;f.computeRowColExtent(e,r,this.origin,C);let n=C[1],o=C[3],c=C[0],l=C[2];const p=l-c,m=o-n;if(p*m>a){const g=Math.floor(Math.sqrt(a));m>g&&(n=n+Math.floor(.5*m)-Math.floor(.5*g),o=n+g),p>g&&(c=c+Math.floor(.5*p)-Math.floor(.5*g),l=c+g)}for(let g=n;g<o;g++)for(let w=c;w<l;w++)i.push([0,g,w]);return R(t)&&(t[0]=this.origin[0]+c*r[0],t[1]=this.origin[1]-o*r[1],t[2]=this.origin[0]+l*r[0],t[3]=this.origin[1]-n*r[1]),i}static computeRowColExtent(e,t,a,i){const r=.001*(e[2]-e[0]+(e[3]-e[1]));i[0]=Math.max(0,Math.floor((e[0]+r-a[0])/t[0])),i[2]=Math.max(0,Math.ceil((e[2]-r-a[0])/t[0])),i[1]=Math.max(0,Math.floor((a[1]-e[3]+r)/t[1])),i[3]=Math.max(0,Math.ceil((a[1]-e[1]-r)/t[1]))}static isPowerOfTwo(e){const t=e.lods,a=t[0].resolution*2**t[0].level;return!t.some(i=>!nt(i.resolution,a/2**i.level))}static hasGapInLevels(e){const t=e.lods.map(a=>a.level);t.sort((a,i)=>a-i);for(let a=1;a<t.length;a++)if(t[a]!==t[0]+a)return!0;return!1}static tileSizeSupported(e){const t=e.size[1];return t===e.size[0]&&(t&t-1)==0&&t>=128&&t<=512}static hasOriginPerLODs(e){const t=e.origin;return e.lods.some(a=>a.origin!=null&&(a.origin[0]!==t.x||a.origin[1]!==t.y))}static getMissingTileInfoError(){return new d("tilingscheme:tile-info-missing","Tiling scheme must have tiling information")}static checkUnsupported(e){return O(e)?ge():e.lods.length<1?new d("tilingscheme:generic","Tiling scheme must have at least one level"):f.isPowerOfTwo(e)?f.hasGapInLevels(e)?new d("tilingscheme:gaps","Tiling scheme levels must not have gaps between min and max level"):f.tileSizeSupported(e)?f.hasOriginPerLODs(e)?new d("tilingscheme:multiple-origin","Tiling scheme levels must not have their own origin"):null:new d("tilingscheme:tile-size","Tiles must be square and size must be one of [128, 256, 512]"):new d("tilingscheme:power-of-two","Tiling scheme must be power of two")}static fromExtent(e,t){const a=e[2]-e[0],i=e[3]-e[1],r=ot(t),n=1.2*Math.max(a,i),o=256,c=96,l=.0254,p=new f(new X({size:[o,o],origin:new Z({x:e[0]-.5*(n-a),y:e[3]+.5*(n-i)}),lods:[new ee({level:0,resolution:n/o,scale:1/(o/c*l/(n*r))})],spatialReference:t}));return p.ensureMaxLod(20),p}static makeWebMercatorAuxiliarySphere(e){const t=new f(f.WebMercatorAuxiliarySphereTileInfo);return t.ensureMaxLod(e),t}static makeGCSWithTileSize(e,t=256,a=16){const i=256/t,r=new f(new X({size:[t,t],origin:new Z({x:-180,y:90,spatialReference:e}),spatialReference:e,lods:[new ee({level:0,resolution:.703125*i,scale:295497598570834e-6*i})]}));return r.ensureMaxLod(a),r}get test(){return{isWebMercator:this._isWebMercator,isGCS:this._isGCS}}}function ge(){return new d("tilingscheme:tile-info-missing","Tiling scheme must have tiling information")}f.WebMercatorAuxiliarySphereTileInfo=new X({size:[256,256],origin:new Z({x:-20037508342787e-6,y:20037508342787e-6,spatialReference:Te.WebMercator}),spatialReference:Te.WebMercator,lods:[new ee({level:0,resolution:156543.03392800014,scale:591657527591555e-6})]}),f.WebMercatorAuxiliarySphere=f.makeWebMercatorAuxiliarySphere(19);const C=ie(),Be=64;ct(ut/10);const ns=ie();f.WebMercatorAuxiliarySphere.getExtent(0,0,0,ns);ie([-180,-90,180,90]);const G=re(),os=re(),B=re(),M=re();function ls(s,e,t=0){const a=s.extent;if(O(a))return!1;if(t===0)return ht(a,e);const i=Math.min(a[2]-a[0],a[3]-a[1]);return pt(a,e,t*i)}function J(s,e,t,a){dt(G,t),G[a]=e[a];const i=oe(G,G,e),r=oe(os,s,e),n=xe(r,i),o=xe(i,i);let c;c=n<=0?e:o<=n?t:ft(G,e,gt(i,i,n/o));const l=oe(G,s,c);return Math.PI/2-Math.atan(l[2]/Math.sqrt(l[0]*l[0]+l[1]*l[1]))}function cs(s,e,t){const a=s.extent;if(O(a))return 0;B[0]=a[0],B[1]=a[1],B[2]=t,M[0]=a[2],M[1]=a[3],M[2]=t;let i=1/0,r=1/0;return e[0]<B[0]?i=J(e,B,M,0):e[0]>M[0]&&(i=J(e,M,B,0)),e[1]<B[1]?r=J(e,B,M,1):e[1]>M[1]&&(r=J(e,M,B,1)),Math.min(i,r)}function us(s,e,t){if(O(s))return ge();if(s.spatialReference.isGeographic&&!de(s.spatialReference))return new d("tilingscheme:local-unsupported-spatial-reference","The tiling scheme spatial reference is not supported in local scenes");const a=f.checkUnsupported(s);if(R(a))return a;if(O(t))return new d("tilingscheme:extent-not-exist","The layer does not provide a layer extent.");const i=hs(s,t);if(i)return i;const r=s.spatialReference;return R(e)&&!(r.equals(e)||e.isWGS84&&r.isWebMercator)?new d("tilingscheme:spatial-reference-mismatch","The tiling scheme does not match the spatial reference of the local scene"):null}function hs(s,e){const t=s.lods,a=t[0].resolution*2**t[0].level,i=[a*s.size[0],a*s.size[1]],r=[s.origin.x,s.origin.y],n=mt(e),o=ie();f.computeRowColExtent(n,i,r,o);const c=(o[2]-o[0])*(o[3]-o[1]);if(c>Be){const l=t[0].scale*2**t[0].level;let p=Math.max((n[3]-n[1])/s.size[1],(n[2]-n[0])/s.size[0])*l/a;const m=Math.floor(Math.log(p)/Math.log(10));return p=Math.ceil(p/10**m)*10**m,new d("tilingscheme:too-many-root-tiles","Scale of level 0 of the tiling scheme (1:"+Math.floor(l).toLocaleString()+") is too large for the layer's extent. Suggested scale: 1:"+p.toLocaleString()+".",{level0Scale:l,suggestedLevel0Scale:p,requiredNumRootTiles:c,allowedNumRootTiles:Be})}return null}const ps=Object.freeze(Object.defineProperty({__proto__:null,checkIfTileInfoSupportedForViewSR:us,isInsideExtent:ls,tiltToExtentEdge:cs},Symbol.toStringTag,{value:"Module"}));function ms(){return!0}function ds(){return 0}function fs(s,e){if(O(s))return ge();const t=s.lods.length-1,a=s.spatialReference,i=de(a)||Ae(a)||Oe(a);if(a.isWebMercator){if(!f.makeWebMercatorAuxiliarySphere(t).compatibleWith(s))return new d("tilingscheme:incompatible-global-web-mercator","The tiling scheme is not compatible with the ArcGIS Online Web Mercator tiling scheme")}else{if(!i)return new d("tilingscheme:global-unsupported-spatial-reference","The tiling scheme spatial reference is not supported in global scenes");if(!f.makeGCSWithTileSize(s.spatialReference,s.size[0],t).compatibleWith(s))return s.spatialReference.isWGS84?new d("tilingscheme:incompatible-global-wgs84","The tiling scheme is not compatible with the ArcGIS Online WGS84 tiling scheme"):new d("tilingscheme:incompatible-global","The tiling scheme is not compatible with the ArcGIS Online tiling scheme")}return R(e)&&!s.spatialReference.equals(e)?new d("tilingscheme:spatial-reference-mismatch","The tiling scheme does not match the spatial reference of the global scene"):void 0}const gs=Object.freeze(Object.defineProperty({__proto__:null,checkIfTileInfoSupportedForViewSR:fs,isInsideExtent:ms,tiltToExtentEdge:ds},Symbol.toStringTag,{value:"Module"})),bs={[te.Global]:gs,[te.Local]:ps};function pe(s,e,t,a){return bs[a].checkIfTileInfoSupportedForViewSR(s,t,e)}function ys(s,e,t){const a=bt(s);if(R(a)){if(!H.isCollection(a))return{tileInfo:a.tileInfo,fullExtent:a.fullExtent};{const i=a.find(r=>pe(r.tileInfo,r.fullExtent,e,t)==null);if(i)return{tileInfo:i.tileInfo,fullExtent:i.fullExtent}}}return{tileInfo:null,fullExtent:null}}z.NORTH,z.EAST,z.SOUTH,z.WEST;z.NORTH_EAST,z.SOUTH_EAST,z.SOUTH_WEST,z.NORTH_WEST;async function ws(s,e={}){await _s(s,e),P(e)}async function vs(s,e={}){var n;const{basemap:t,view:a}=s;if(P(e),"spatialReferenceLocked"in a&&!a.spatialReferenceLocked||(await t.load(e),P(e),t.baseLayers.length===0))return;const i=t.baseLayers.getItemAt(0);if(!yt(i))return;if(t.spatialReference){if(a.spatialReference.equals(t.spatialReference))return;Me()}await i.load(e),P(e);const r=(("supportedSpatialReferences"in i?i.supportedSpatialReferences:null)||["tileInfo"in i?(n=i.tileInfo)==null?void 0:n.spatialReference:null]).filter(R);r.length!==0&&r.every(o=>!a.spatialReference.equals(o))&&Me()}function Me(){throw new d("basemap-compatibility:incompatible-spatial-reference","Basemap spatial reference is not compatible with the view")}async function _s(s,e){const{basemap:t,view:a}=s;if(await t.load(e),t.baseLayers.length===0)return;const i=t.baseLayers.concat(t.referenceLayers).toArray().filter(n=>!Ce(n)).map(n=>new d("basemap-compatibility:unsupported-basemap-layer-type","Unsupported basemap layer type ${operationalLayerType}",{layer:n,operationalLayerType:n.operationalLayerType||"unknown"}));if(i.length)throw i[0];const r=t.baseLayers.getItemAt(0);if(Ce(r)){try{await r.load(e)}catch(n){const o="basemap-compatibility:unknown-error",c="Unknown basemap compatibility error",{name:l=o,message:p=c,details:m}=n;throw new d(l,p,m)}ks(r,a)}}function ks(s,e){const t=e.state.viewingMode;if(!t)return;let a,i;if((s==null?void 0:s.type)==="wmts"){const c=ys(s,e.spatialReference,t);if(O(c.tileInfo))throw new d("basemapgalleryitem:tiling-scheme-incompatible","Basemap tiling scheme is incompatible with the view");a=c.tileInfo,i=c.fullExtent}else a=s.tileInfo,i=s.fullExtent;if(O(a))return;if(!Kt(a.spatialReference,t))throw new d(`basemapgalleryitem:spatial-reference-unsupported-${Ie(t)}`,`Basemap spatial reference is unsupported in ${Ie(t)} mode`);const r=a.spatialReference.isGeographic,n=(s==null?void 0:s.type)==="vector-tile"?a.getOrCreateCompatible(256,r?1:2):null;if(t===te.Global){let c=pe(a,i,null,t);if(c&&(s==null?void 0:s.type)==="vector-tile"&&R(i)&&n&&!pe(n,i,null,t)&&(c=null),c){const l=a.spatialReference.isWebMercator?"web-mercator":"wgs84";throw new d(`basemapgalleryitem:tiling-scheme-unsupported-${l}-global`,"Basemap tiling scheme is unsupported in global mode",{error:c})}}else if(f.checkUnsupported(a))throw new d("basemapgalleryitem:tiling-scheme-unsupported-local","Basemap tiling scheme is unsupported in local mode");const o=e.get("basemapTerrain.tilingScheme");if(o&&!o.compatibleWith(a)&&((s==null?void 0:s.type)!=="vector-tile"||!n||!o.compatibleWith(n)))throw new d("basemapgalleryitem:tiling-scheme-incompatible","Basemap tiling scheme is incompatible with the view")}let I=class extends wt(We(me)){constructor(e){super(e),this.compatibilityFunction=null,this.error=null,this.state="loading",this.view=null}initialize(){const e=()=>this.refresh();this.handles.add([W(()=>{var t;return(t=this.basemap)==null?void 0:t.loadStatus},e),W(()=>this.compatibilityFunction,e),W(()=>{var t;return this.view&&"basemapTerrain"in this.view&&((t=this.view.basemapTerrain)==null?void 0:t.tilingScheme)},e),W(()=>{var t;return(t=this.view)==null?void 0:t.ready},e),W(()=>{var t;return(t=this.view)==null?void 0:t.spatialReference},e)]),this.refresh()}destroy(){this._cancelRefresh(),this.basemap=null,this.compatibilityFunction=null,this.view=null}get _spatialReferenceTask(){return vt(this.view,this.basemap)}set basemap(e){const t=this._get("basemap");t&&t.cancelLoad(),e&&e.load().catch(()=>{}),this._set("basemap",e)}get spatialReference(){return this._spatialReferenceTask.spatialReference}refresh(){var i;this._cancelRefresh(),this._set("state","loading");const e=(i=this.basemap)==null?void 0:i.loadStatus;if(e!=="loaded"&&e!=="failed")return;if(!this.compatibilityFunction)return void(e==="loaded"?(this._set("state","ready"),this._set("error",null)):(this._set("state","error"),this._set("error",this.basemap.loadError)));const t=new AbortController,{signal:a}=t;this.compatibilityFunction(this,{signal:a}).then(()=>V(()=>!this._spatialReferenceTask.updating,a)).then(()=>{this._set("state","ready"),this._set("error",null)}).catch(r=>{se(r)||(this._set("state","error"),this._set("error",r))}),this._refreshController=t}_cancelRefresh(){this._refreshController&&(this._refreshController.abort(),this._refreshController=null)}};u([h({readOnly:!0})],I.prototype,"_spatialReferenceTask",null),u([h()],I.prototype,"basemap",null),u([h()],I.prototype,"compatibilityFunction",void 0),u([h({readOnly:!0})],I.prototype,"error",void 0),u([h({readOnly:!0})],I.prototype,"spatialReference",null),u([h({readOnly:!0})],I.prototype,"state",void 0),u([h()],I.prototype,"view",void 0),I=u([q("esri.widgets.BasemapGallery.support.BasemapGalleryItem")],I);const Fe=I,Ne=H.ofType(fe);let Q=class extends me{constructor(s){super(s),this.basemaps=new Ne}get state(){return"ready"}refresh(){}};u([h({type:Ne})],Q.prototype,"basemaps",void 0),u([h({readOnly:!0})],Q.prototype,"state",null),Q=u([q("esri.widgets.BasemapGallery.support.LocalBasemapsSource")],Q);const Qe=Q,Pe=H.ofType(fe);let A=class extends he.LoadableMixin(_t(Qe)){constructor(s){super(s),this._handles=new ze,this.basemaps=new Pe,this.filterFunction=null,this.portal=De.getDefault(),this.query=null,this.updateBasemapsCallback=null}initialize(){this._handles.add([W(()=>{var s,e;return[this.filterFunction,this.loadStatus,(s=this.portal)==null?void 0:s.basemapGalleryGroupQuery,(e=this.portal)==null?void 0:e.user,this.query,this.updateBasemapsCallback]},()=>this.refresh(),$t)])}destroy(){this._handles.destroy(),this._handles=null,this.filterFunction=null,this.portal=null}get state(){return this.loadStatus==="not-loaded"?"not-loaded":this.loadStatus==="loading"||this._lastPortalBasemapFetchController?"loading":"ready"}load(s){return this.addResolvingPromise(this.portal.load(s)),this.notifyChange("state"),Promise.resolve(this)}async refresh(){if(this.state!=="ready")return;this._lastPortalBasemapFetchController&&(this._lastPortalBasemapFetchController.abort(),this._lastPortalBasemapFetchController=null);const s=this.portal,e=new AbortController;this._lastPortalBasemapFetchController=e,this.notifyChange("state");try{const t=await s.fetchBasemaps(this._toQueryString(this.query),e);this._updateBasemaps(t)}catch(t){if(se(t))throw t;kt.getLogger(this.declaredClass).warn(new d("basemap-source:fetch-basemaps-error","Could not fetch basemaps from portal.",{error:t})),this._updateBasemaps()}this._lastPortalBasemapFetchController=null,this.notifyChange("state")}_toQueryString(s){return s&&typeof s!="string"?Object.keys(s).map(e=>`${e}:${s[e]}`).join(" AND "):s}_updateBasemaps(s=[]){let e=this.filterFunction?s.filter(this.filterFunction):s;e=this.updateBasemapsCallback?this.updateBasemapsCallback(e):e,this.basemaps.removeAll(),this.basemaps.addMany(e)}};u([h({readOnly:!0,type:Pe})],A.prototype,"basemaps",void 0),u([h()],A.prototype,"filterFunction",void 0),u([h({type:De})],A.prototype,"portal",void 0),u([h()],A.prototype,"query",void 0),u([h({readOnly:!0})],A.prototype,"state",null),u([h()],A.prototype,"updateBasemapsCallback",void 0),A=u([q("esri.widgets.BasemapGallery.support.PortalBasemapsSource")],A);const U=A,Ue=H.ofType(Fe);function $s(s){return s&&s.declaredClass==="esri.portal.Portal"}function Ts(s){return s&&!(s instanceof U)&&(!!s.portal||!!s.query)}function Rs(s){return s&&"basemaps"in s&&"state"in s&&"refresh"in s}let $=class extends We(he){constructor(s){super(s),this._loadingProjectionEngine=!1,this.items=new Ue,this.source=new U,this.view=null}initialize(){const s=()=>this._recreateItems();this.handles.add([W(()=>this.state==="ready"?this.compatibilityFunction:null,()=>this._updateItems()),Ge(()=>{var e;return(e=this.source)==null?void 0:e.basemaps},"change",s,{onListenerAdd:s})])}get activeBasemap(){var s,e;return((e=(s=this.view)==null?void 0:s.map)==null?void 0:e.basemap)??null}set activeBasemap(s){var a,i;if(!this.view.map)return;const e=typeof s=="string"?fe.fromId(s):s;if(!e||!this.view.ready)return this.view.map.basemap=e,void this._clearOverride("activeBasemap");const t=e.spatialReference||((i=(a=this.items)==null?void 0:a.find(r=>this.basemapEquals(e,r.basemap)))==null?void 0:i.spatialReference);if(t&&"spatialReferenceLocked"in this.view&&!this.view.spatialReferenceLocked){const r=this.view.spatialReference;if(R(t)&&!Le(r,t)&&!Tt(this.view.spatialReference,t)&&!Rt())return this._override("activeBasemap",e),this._loadingProjectionEngine=!0,void St().then(()=>{this._get("activeBasemap")===s&&(this.view.map.basemap=s,this.view.spatialReference=t,this._clearOverride("activeBasemap"))},()=>{}).then(()=>{this._loadingProjectionEngine=!1});this.view.map.basemap=e,this._clearOverride("activeBasemap"),R(t)&&!Le(this.view.spatialReference,t)&&(this.view.spatialReference=t)}else this.view.map.basemap=e,this._clearOverride("activeBasemap")}get activeBasemapIndex(){const{state:s,items:e,activeBasemap:t}=this;if(s!=="ready")return-1;const a=e.findIndex(i=>i.basemap===t);return a===-1?e.findIndex(i=>this.basemapEquals(i.basemap,t)):a}get compatibilityFunction(){var s;return((s=this.view)==null?void 0:s.type)==="3d"?ws:vs}set compatibilityFunction(s){this._overrideIfSome("compatibilityFunction",s)}castSource(s){return Array.isArray(s)||H.isCollection(s)?new Qe({basemaps:s}):$s(s)?new U({portal:s}):Ts(s)?new U(s):Rs(s)?s:null}get state(){var s;return(s=this.view)!=null&&s.ready&&this.source?this._loadingProjectionEngine?"loading":"ready":"disabled"}basemapEquals(s,e){return xt(s,e)}refresh(){this._recreateItems()}load(s){return this.addResolvingPromise(he.isLoadable(this.source)?this.source.load(s):null),Promise.resolve(this)}_recreateItems(){var a;const s=(a=this.source)==null?void 0:a.basemaps,{view:e,compatibilityFunction:t}=this;this.items.removeAll().forEach(i=>i.destroy()),s&&this.items.addMany(s.map(i=>new Fe({basemap:i,compatibilityFunction:t,view:e})))}_updateItems(){for(const s of this.items)s.compatibilityFunction=this.compatibilityFunction,s.view=this.view}};u([h()],$.prototype,"_loadingProjectionEngine",void 0),u([h()],$.prototype,"activeBasemap",null),u([h({readOnly:!0})],$.prototype,"activeBasemapIndex",null),u([h()],$.prototype,"compatibilityFunction",null),u([h({readOnly:!0,type:Ue})],$.prototype,"items",void 0),u([h()],$.prototype,"source",void 0),u([Ct("source")],$.prototype,"castSource",null),u([h({readOnly:!0})],$.prototype,"state",null),u([h()],$.prototype,"view",void 0),$=u([q("esri.widgets.BasemapGallery.BasemapGalleryViewModel")],$);const Ss=$,E="esri-basemap-gallery",_={base:`${E} esri-widget esri-widget--panel-height-only`,sourceLoading:`${E}--source-loading`,loader:`${E}__loader`,item:`${E}__item`,itemContainer:`${E}__item-container`,itemTitle:`${E}__item-title`,itemThumbnail:`${E}__item-thumbnail`,selectedItem:`${E}__item--selected`,itemError:`${E}__item--error`,emptyMessage:"esri-widget__content--empty",widgetIcon:"esri-icon-basemap",disabled:"esri-disabled",loaderAnimation:"esri-widget__loader-animation"};let k=class extends Bt{constructor(s,e){super(s,e),this._handles=new ze,this._focusBasemapItemEnabled=!1,this.disabled=!1,this.headingLevel=2,this.iconClass=_.widgetIcon,this.messages=null,this.viewModel=new Ss}initialize(){const s=this._handles;this.addHandles([Ge(()=>this.viewModel.items,"change",e=>{const t="basemap-gallery-item-changes",{added:a,moved:i}=e;s.remove(t),s.add([...a,...i].map(r=>W(()=>r.state,()=>this.scheduleRender())),t),this.scheduleRender()}),Mt(()=>this.source,()=>this.viewModel.load(),{initial:!0,once:!0})])}destroy(){this._handles.destroy()}loadDependencies(){return Et(()=>import("./calcite-scrim-13e7e163.js"),["assets/calcite-scrim-13e7e163.js","assets/index-3baec1e8.js","assets/index-0be7f32f.css"])}get activeBasemap(){return this.viewModel.activeBasemap}set activeBasemap(s){this.viewModel.activeBasemap=s}get label(){var s;return((s=this.messages)==null?void 0:s.widgetLabel)??""}set label(s){this._overrideIfSome("label",s)}get source(){return this.viewModel.source}set source(s){this.viewModel.source=s}get view(){return this.viewModel.view}set view(s){this.viewModel.view=s}render(){const s=this.source.state==="loading",e=this.disabled||this.viewModel.state==="disabled",t=this.viewModel.items.map((n,o)=>this._renderBasemapGalleryItem(n,o)).toArray(),a={[_.sourceLoading]:s,[_.disabled]:e},i=s?x("div",{class:_.loader,key:"esri-basemap-gallery__loader"}):null,r=s?null:t.length>0?x("ul",{bind:this,"aria-disabled":this.disabled,"aria-label":this.label,class:_.itemContainer,key:"esri-basemap-gallery__item-container",onkeydown:this._handleKeyDown,role:"radiogroup"},t):x("div",{class:_.emptyMessage,key:"esri-basemap-gallery__empty-message"},x(At,{level:this.headingLevel},this.messages.noBasemaps));return x("div",{class:this.classes(_.base,a)},i,r)}_getRoundRobinIndex(s,e){return(s+e)%e}_handleKeyDown(s){const{key:e}=s;if(!["ArrowUp","ArrowDown","ArrowRight","ArrowLeft"].includes(e))return;s.preventDefault();const{items:t,activeBasemapIndex:a}=this.viewModel,i=e==="ArrowUp"||e==="ArrowLeft"?this._getRoundRobinIndex(Math.max(a-1,-1),t.length):this._getRoundRobinIndex(a+1,t.length),r=t.getItemAt(i);(r==null?void 0:r.state)==="ready"&&(this.viewModel.activeBasemap=r.basemap),this._focusBasemapItemEnabled=!0}_focusBasemapItem(s){this._focusBasemapItemEnabled&&s.tabIndex===0&&(s.focus(),this._focusBasemapItemEnabled=!1)}_handleClick(s){const e=s.currentTarget["data-item"];e.state==="ready"&&(this.viewModel.activeBasemap=e.basemap)}_renderBasemapGalleryItem(s,e){var L,D;const t=s.basemap.thumbnailUrl||Ot("esri/themes/base/images/basemap-toggle-64.svg"),a=s.basemap.title,i=(L=s.basemap.portalItem)==null?void 0:L.snippet,r=((D=s.error)==null?void 0:D.message)||i||a,{viewModel:{state:n,activeBasemapIndex:o}}=this,c=this.disabled||n==="disabled",l=o===e,p=l||o===-1&&e===0?0:-1,m=n==="loading",g={[_.selectedItem]:l,[_.itemError]:s.state==="error"},w=`basemapgallery-item-${s.uid}`;return x("li",{"aria-checked":l.toString(),"aria-disabled":c.toString(),"aria-labelledby":w,bind:this,class:this.classes(_.item,g),"data-item":s,onkeydown:this._handleClick,onclick:this._handleClick,role:"radio",tabIndex:p,afterUpdate:this._focusBasemapItem,title:r},x("img",{alt:"",class:_.itemThumbnail,src:t}),x("div",{id:w,class:_.itemTitle},a),s.state==="loading"||l&&m?x("calcite-scrim",null,x("span",{"aria-hidden":"true",role:"presentation",class:_.loaderAnimation})):null)}};u([h()],k.prototype,"activeBasemap",null),u([h()],k.prototype,"disabled",void 0),u([h()],k.prototype,"headingLevel",void 0),u([h()],k.prototype,"iconClass",void 0),u([h()],k.prototype,"label",null),u([h(),It("esri/widgets/BasemapGallery/t9n/BasemapGallery")],k.prototype,"messages",void 0),u([h()],k.prototype,"source",null),u([h()],k.prototype,"view",null),u([h()],k.prototype,"viewModel",void 0),u([Lt()],k.prototype,"_handleClick",null),k=u([q("esri.widgets.BasemapGallery")],k);const be=k,xs=async(s,e,t,a)=>{const i=new be({container:e,view:s,source:{query:`id: ${t}`}});await V(()=>i.source.basemaps.length>0);const r=i.source.basemaps.find(n=>n.portalItem.title===s.map.basemap.title);r&&(a("maps"),i.activeBasemap=r)};let b;const Cs=async(s,e,t,a,i,r)=>{b=new be({container:e,view:s,source:new U({query:`id: ${t}`,filterFunction:Ls,updateBasemapsCallback:o=>o.reverse()})}),b.watch("activeBasemap",o=>{i(o.portalItem.tags.includes("imagery"))}),await V(()=>b.source.basemaps.length>0);const n=b.source.basemaps.find(o=>(console.log(o.portalItem.title),o.portalItem.title===s.map.basemap.title));if(console.log(s.map.basemap.title),n&&(r("images"),b.activeBasemap=n),await b.when(),!ae){ae=await Bs(),j=je(s.extent);try{await b.source.refresh()}catch{}finally{}}s.watch("extent",o=>Ms(o,s,a)),s.map.watch("basemap",async o=>{const c=await Os(o,s);Ws(s,c)})},Is=async(s,e,t)=>{const a=new be({container:e,view:s});await V(()=>a.source.basemaps.length>0);const i=a.source.basemaps.find(r=>r.portalItem.title===s.map.basemap.title);i&&(t("esri"),a.activeBasemap=i)};let ae,j,Ee;const je=s=>Ht(s,ae),Ls=s=>j?!0:s.portalItem.tags.includes("countywide"),Bs=async s=>{const e=await Y("https://maps.raleighnc.gov/images/rest/services/Orthos2020/ImageServer/queryBoundary?outSR=102100&f=json",{responseType:"json"});return Wt.fromJSON(e.data.shape)},Ms=(s,e,t)=>{ae&&b.source.basemaps.find(a=>b.activeBasemap.title===a.title)&&(Ee=j,j=je(e.extent),Ee!==j&&(b.source.refresh(),setTimeout(()=>{const a=b.source.basemaps.find(i=>e.map.basemap.title===i.title);if(a)b.activeBasemap=a;else{const i=b.activeBasemap.title;b.activeBasemap=b.source.basemaps.at(0);const r=b.activeBasemap.title;if(t){const n={show:!0,autoClose:!0,duration:"medium",kind:"warning",title:"Imagery Year Changed",message:`Imagery for ${i} only available inside Raleigh, base map has changed to ${r}`};t(n)}}},1e3)))},Es=(s,e,t,a)=>{const i=e.map.basemap.baseLayers.find(r=>r.type==="vector-tile"?r.portalItem.id===t:!1);i&&(i.opacity=a)},As=(s,e,t,a)=>{const i=new Vt({portalItem:{id:t}});if(s)i.opacity=a,e.map.basemap.baseLayers.add(i);else{e.map.basemap.baseLayers.remove(i);const r=e.map.basemap.baseLayers.find(n=>n.type==="vector-tile"?n.portalItem.id===i.portalItem.id:!1);r&&e.map.basemap.baseLayers.remove(r)}b.watch("activeBasemap",r=>{s&&(r.baseLayers.find(o=>o.type==="vector-tile"?o.portalItem.id===i.portalItem.id:!1)||r.baseLayers.add(i))})},Os=async(s,e)=>{if(s.baseLayers.length){const t=s.baseLayers.find(a=>a.type==="vector-tile");if((t==null?void 0:t.type)==="vector-tile"){await V(()=>t.loaded);const a=t.getStyleLayer("background");if(a){const i=new zt(a.paint["background-color"]);return e.background={color:i},i.isBright}else return!0}else return!(!t&&s.baseLayers.getItemAt(0).type==="imagery")}else return!1},Ws=(s,e)=>{const t=s.map.allLayers.find(a=>a.title.includes("Property")&&a.type==="feature");if(t){const a=(t==null?void 0:t.renderer).clone();e?(a.symbol.outline.color.r=0,a.symbol.outline.color.g=0,a.symbol.outline.color.b=0):(a.symbol.outline.color.r=255,a.symbol.outline.color.g=255,a.symbol.outline.color.b=255),t.renderer=a}},zs={title:"Basemap Tips",tips:[{title:"Imagery Basemap",text:"The lastest years of imagery are available in the Imagery basemap under the base maps option.  We recommend using this base map for imagery, unless you need to access historic imagery."},{title:"Esri Basemaps",text:"You now have access to all basemaps created by Esri by select the Esri Basemaps option from the dropdown."},{title:"Property Color",text:"If you switch to a dark themed basemap or an imagery basemap, the property lines will change to white for better visibility.  They will change back to black when on a light themed basemap."},{title:"Available Imagery",text:"If you go to an area outside of Raleigh, the list of available imagery will change to show you what is available in your area.  Also it will switch to the latest year available and warn you the the imagery has changed."}]},Ds=s=>{const[e,t]=y.useState(),[a,i]=y.useState(!1),[r,n]=y.useState(!1),[o,c]=y.useState(!1),[l,p]=y.useState("maps"),m=y.useRef(!1),g=y.useRef(null),w=y.useRef(null),L=y.useRef(null),D=y.useRef(.5),ye="f6329364e80c438a958ce74aadc3a89f",we="492386759d264d49948bf7f83957ddb9",ve="02d50d24991747538e218e0a5806e9b3";y.useEffect(()=>{t(s.view),m.current||(m.current=!0,xs(s.view,g.current,ye,p),Cs(s.view,w.current,we,s.alertSet,c,p),Is(s.view,L.current,p),setTimeout(()=>{var S,_e,ke;(ke=(_e=(S=document.querySelector(".basemaps calcite-tab-nav"))==null?void 0:S.shadowRoot)==null?void 0:_e.querySelector(".tab-nav"))==null||ke.setAttribute("style","overflow: hidden")},100))},[s.view]),y.useEffect(()=>{i(s.isActive)},[s.isActive]);const He=y.useCallback(S=>{s.panelDismissed()},[]),Ve=y.useCallback(S=>{s.showTips(zs)},[]),Ke=y.useCallback(S=>{n(S.currentTarget.checked),As(S.currentTarget.checked,s.view,ve,D.current)},[]),Je=y.useCallback(S=>{D.current=1-S.target.value/100,Es(S.target.value/100,s.view,ve,D.current)},[]);return{basemapRef:g,imagesRef:w,esriRef:L,mapGroup:ye,imageGroup:we,view:e,isActive:a,panelDismissed:He,tipsClicked:Ve,blendUpdated:Ke,blendOpacityChanged:Je,blendActive:r,showBlend:o,selectedTab:l,setSelectedTab:p}};function Gs(s){const{basemapRef:e,imagesRef:t,esriRef:a,isActive:i,panelDismissed:r,tipsClicked:n,blendUpdated:o,blendOpacityChanged:c,blendActive:l,showBlend:p,selectedTab:m,setSelectedTab:g}=Ds(s);return N(Gt,{id:"basemaps-panel",heading:"Basemaps",hidden:!i,closed:i?void 0:!0,closable:!0,onCalcitePanelClose:r,children:[v(qt,{id:"tip",icon:"lightbulb",text:"Tips",slot:"header-actions-end",onClick:n}),v(Ft,{label:"Show Tip",referenceElement:"tip",closeOnClick:!0,children:"Show Tip"}),v("div",{className:"basemaps",children:N(Nt,{position:"bottom",layout:"center",scale:"l",children:[N(Qt,{slot:"title-group",children:[v(le,{tab:"map",selected:m==="maps"?!0:void 0,onCalciteTabsActivate:w=>g("maps"),children:"Maps"}),v(le,{tab:"images",selected:m==="images"?!0:void 0,onCalciteTabsActivate:w=>g("images"),children:"Images"}),v(le,{tab:"esri",selected:m==="esri"?!0:void 0,onCalciteTabsActivate:w=>g("esri"),children:"Esri"})]}),v(ce,{tab:"map",selected:m==="maps"?!0:void 0,children:v("div",{ref:e})}),N(ce,{tab:"images",selected:m==="images"?!0:void 0,children:[v("br",{}),N(Pt,{hidden:p?void 0:!0,layout:"inline",alignment:"end",children:[v(Ut,{onCalciteSwitchChange:o}),"Blend"]}),v(jt,{hidden:l&&p?void 0:!0,max:100,min:0,value:50,onCalciteSliderInput:c}),v("div",{ref:t})]}),v(ce,{tab:"esri",selected:m==="esri"?!0:void 0,children:v("div",{ref:a})})]})})]})}const ca=Dt.memo(Gs);export{ca as default};
