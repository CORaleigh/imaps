"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[8348],{40237:(t,e,s)=>{s.d(e,{N:()=>r});const r={convertToGEGeometry:function(t,e){return null==e?null:t.convertJSONToGeometry(e)},exportPoint:function(t,e,s){const r=new i(t.getPointX(e),t.getPointY(e),s),n=t.hasZ(e),o=t.hasM(e);return n&&(r.z=t.getPointZ(e)),o&&(r.m=t.getPointM(e)),r},exportPolygon:function(t,e,s){return new n(t.exportPaths(e),s,t.hasZ(e),t.hasM(e))},exportPolyline:function(t,e,s){return new o(t.exportPaths(e),s,t.hasZ(e),t.hasM(e))},exportMultipoint:function(t,e,s){return new a(t.exportPoints(e),s,t.hasZ(e),t.hasM(e))},exportExtent:function(t,e,s){const r=t.hasZ(e),i=t.hasM(e),n=new h(t.getXMin(e),t.getYMin(e),t.getXMax(e),t.getYMax(e),s);if(r){const s=t.getZExtent(e);n.zmin=s.vmin,n.zmax=s.vmax}if(i){const s=t.getMExtent(e);n.mmin=s.vmin,n.mmax=s.vmax}return n}};class i{constructor(t,e,s){this.x=t,this.y=e,this.spatialReference=s,this.z=void 0,this.m=void 0}}class n{constructor(t,e,s,r){this.rings=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,s&&(this.hasZ=s),r&&(this.hasM=r)}}class o{constructor(t,e,s,r){this.paths=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,s&&(this.hasZ=s),r&&(this.hasM=r)}}class a{constructor(t,e,s,r){this.points=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,s&&(this.hasZ=s),r&&(this.hasM=r)}}class h{constructor(t,e,s,r,i){this.xmin=t,this.ymin=e,this.xmax=s,this.ymax=r,this.spatialReference=i,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},85403:(t,e,s)=>{s.d(e,{Y:()=>n});var r=s(92026);function i(t,e){return t?e?4:3:e?3:2}function n(t,e,s,n,h){if((0,r.Wi)(e)||!e.lengths.length)return null;const u="upperLeft"===h?.originPosition?-1:1;t.lengths.length&&(t.lengths.length=0),t.coords.length&&(t.coords.length=0);const l=t.coords,c=[],d=s?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:_,coords:f}=e,p=i(s,n);let g=0;for(const r of _){const t=o(d,f,g,r,s,n,u);t&&c.push(t),g+=r*p}if(c.sort(((t,e)=>{let r=u*t[2]-u*e[2];return 0===r&&s&&(r=t[4]-e[4]),r})),c.length){let t=6*c[0][2];l[0]=c[0][0]/t,l[1]=c[0][1]/t,s&&(t=6*c[0][4],l[2]=0!==t?c[0][3]/t:0),(l[0]<d[0]||l[0]>d[1]||l[1]<d[2]||l[1]>d[3]||s&&(l[2]<d[4]||l[2]>d[5]))&&(l.length=0)}if(!l.length){const t=e.lengths[0]?a(f,0,_[0],s,n):null;if(!t)return null;l[0]=t[0],l[1]=t[1],s&&t.length>2&&(l[2]=t[2])}return t}function o(t,e,s,r,n,o){let a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1;const h=i(n,o);let u=s,l=s+h,c=0,d=0,_=0,f=0,p=0;for(let i=0,m=r-1;i<m;i++,u+=h,l+=h){const s=e[u],r=e[u+1],i=e[u+2],o=e[l],a=e[l+1],h=e[l+2];let g=s*a-o*r;f+=g,c+=(s+o)*g,d+=(r+a)*g,n&&(g=s*h-o*i,_+=(i+h)*g,p+=g),s<t[0]&&(t[0]=s),s>t[1]&&(t[1]=s),r<t[2]&&(t[2]=r),r>t[3]&&(t[3]=r),n&&(i<t[4]&&(t[4]=i),i>t[5]&&(t[5]=i))}if(f*a>0&&(f*=-1),p*a>0&&(p*=-1),!f)return null;const g=[c,d,.5*f];return n&&(g[3]=_,g[4]=.5*p),g}function a(t,e,s,r,n){const o=i(r,n);let a=e,d=e+o,_=0,f=0,p=0,g=0;for(let i=0,m=s-1;i<m;i++,a+=o,d+=o){const e=t[a],s=t[a+1],i=t[a+2],n=t[d],o=t[d+1],m=t[d+2],y=r?u(e,s,i,n,o,m):h(e,s,n,o);if(y)if(_+=y,r){const t=c(e,s,i,n,o,m);f+=y*t[0],p+=y*t[1],g+=y*t[2]}else{const t=l(e,s,n,o);f+=y*t[0],p+=y*t[1]}}return _>0?r?[f/_,p/_,g/_]:[f/_,p/_]:s>0?r?[t[e],t[e+1],t[e+2]]:[t[e],t[e+1]]:null}function h(t,e,s,r){const i=s-t,n=r-e;return Math.sqrt(i*i+n*n)}function u(t,e,s,r,i,n){const o=r-t,a=i-e,h=n-s;return Math.sqrt(o*o+a*a+h*h)}function l(t,e,s,r){return[t+.5*(s-t),e+.5*(r-e)]}function c(t,e,s,r,i,n){return[t+.5*(r-t),e+.5*(i-e),s+.5*(n-s)]}},19995:(t,e,s)=>{s.d(e,{_W:()=>d,iV:()=>p,oj:()=>m});var r=s(92026),i=s(79803),n=s(40237),o=s(92975),a=s(81753);const h=[0,0];function u(t,e){if(!e)return null;if("x"in e){const s={x:0,y:0};return[s.x,s.y]=t(e.x,e.y,h),null!=e.z&&(s.z=e.z),null!=e.m&&(s.m=e.m),s}if("xmin"in e){const s={xmin:0,ymin:0,xmax:0,ymax:0};return[s.xmin,s.ymin]=t(e.xmin,e.ymin,h),[s.xmax,s.ymax]=t(e.xmax,e.ymax,h),e.hasZ&&(s.zmin=e.zmin,s.zmax=e.zmax,s.hasZ=!0),e.hasM&&(s.mmin=e.mmin,s.mmax=e.mmax,s.hasM=!0),s}return"rings"in e?{rings:l(e.rings,t),hasM:e.hasM,hasZ:e.hasZ}:"paths"in e?{paths:l(e.paths,t),hasM:e.hasM,hasZ:e.hasZ}:"points"in e?{points:c(e.points,t),hasM:e.hasM,hasZ:e.hasZ}:void 0}function l(t,e){const s=[];for(const r of t)s.push(c(r,e));return s}function c(t,e){const s=[];for(const r of t){const t=e(r[0],r[1],[0,0]);s.push(t),r.length>2&&t.push(r[2]),r.length>3&&t.push(r[3])}return s}async function d(t,e){if(!e)return;const s=Array.isArray(t)?t.map((t=>(0,r.pC)(t.geometry)&&t.geometry.spatialReference)):[t];await(0,i.iQ)(s.map((t=>({source:t,dest:e}))))}const _=u.bind(null,a.hG),f=u.bind(null,a.R6);function p(t,e,s,r){if(!t)return t;if(s||(s=e,e=t.spatialReference),!(0,o.JY)(e)||!(0,o.JY)(s)||(0,o.fS)(e,s))return t;if((0,a.Q8)(e,s)){const e=(0,o.sS)(s)?_(t):f(t);return e.spatialReference=s,e}return(0,i.oj)(n.N,[t],e,s,null,r)[0]}const g=new class{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(t,e,s){if(!t||!t.length||!e||!s||(0,o.fS)(e,s))return t;const r={geometries:t,inSpatialReference:e,outSpatialReference:s,resolve:null};return this._jobs.push(r),new Promise((t=>{r.resolve=t,null===this._timer&&(this._timer=setTimeout(this._process,10))}))}_process(){this._timer=null;const t=this._jobs.shift();if(!t)return;const{geometries:e,inSpatialReference:s,outSpatialReference:r,resolve:h}=t;(0,a.Q8)(s,r)?(0,o.sS)(r)?h(e.map(_)):h(e.map(f)):h((0,i.oj)(n.N,e,s,r,null,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}};function m(t,e,s){return g.push(t,e,s)}},84328:(t,e,s)=>{s.d(e,{KS:()=>u,PX:()=>n,QS:()=>c,_I:()=>r,jL:()=>h,nE:()=>l,vs:()=>a,xp:()=>o});const r=8388607,i=8388608,n=0,o=1,a=t=>(t&i)>>>23,h=t=>t&r,u=t=>a(t)===o?254:255;function l(t){return a(t)===o}function c(t,e){return((e?i:0)|t)>>>0}},64668:(t,e,s)=>{s.d(e,{J:()=>i,g:()=>r});const r=(t,e)=>t&&function(){for(var t=arguments.length,s=new Array(t),r=0;r<t;r++)s[r]=arguments[r];return e.warn("DEBUG:",...s)}||(()=>null),i=!1},45367:(t,e,s)=>{s.d(e,{Z:()=>S});var r=s(10064),i=s(93169),n=s(32718),o=s(16889),a=s(92026),h=s(66978),u=s(48732),l=s(52410),c=s(94109),d=s(84328),_=s(46640),f=s(64668),p=s(98290),g=s(8548);const m=n.Z.getLogger("esri.views.layers.2d.features.support.AttributeStore"),y=(0,f.g)(f.J,m),x={sharedArrayBuffer:(0,i.Z)("esri-shared-array-buffer"),atomics:(0,i.Z)("esri-atomics")};function I(t,e){return s=>e(t(s))}class b{constructor(t,e,s,r){this.size=0,this.texelSize=4;const{pixelType:i,layout:n,textureOnly:o}=r;this.textureOnly=o||!1,this.pixelType=i,this._ctype=e,this.layout=n,this._resetRange(),this._shared=t,this.size=s,o||(this.data=this._initData(i,s,t,e))}get buffer(){return(0,a.yw)(this.data,(t=>t.buffer))}unsetComponentAllTexels(t,e){const s=(0,a.Wg)(this.data);for(let r=0;r<this.size*this.size;r++)s[r*this.texelSize+t]&=~e;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponentAllTexels(t,e){const s=(0,a.Wg)(this.data);for(let r=0;r<this.size*this.size;r++)s[r*this.texelSize+t]|=255&e;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponent(t,e,s){const r=(0,a.Wg)(this.data);for(const i of s)r[i*this.texelSize+t]|=e,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i)}setComponentTexel(t,e,s){(0,a.Wg)(this.data)[s*this.texelSize+t]|=e,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s)}unsetComponentTexel(t,e,s){(0,a.Wg)(this.data)[s*this.texelSize+t]&=~e,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s)}getData(t,e){const s=(0,d.jL)(t);return(0,a.Wg)(this.data)[s*this.texelSize+e]}setData(t,e,s){const r=(0,d.jL)(t),i=1<<e;0!=(this.layout&i)?(this.data[r*this.texelSize+e]=s,this.dirtyStart=Math.min(this.dirtyStart,r),this.dirtyEnd=Math.max(this.dirtyEnd,r)):m.error("mapview-attributes-store","Tried to set a value for a texel's readonly component")}lock(){this.pixelType===g.Br.UNSIGNED_BYTE&&this._shared&&x.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,1)}unlock(){this.pixelType===g.Br.UNSIGNED_BYTE&&this._shared&&x.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,0)}expand(t){if(this.size=t,!this.textureOnly){const e=this._initData(this.pixelType,t,this._shared,this._ctype),s=(0,a.Wg)(this.data);e.set(s),this.data=e}}toMessage(){const t=this.dirtyStart,e=this.dirtyEnd,s=this.texelSize;if(t>e)return null;this._resetRange();const r=!(this._shared||"local"===this._ctype),i=this.pixelType,n=this.layout,o=(0,a.Wg)(this.data);return{start:t,end:e,data:r&&o.slice(t*s,(e+1)*s)||null,pixelType:i,layout:n}}_initData(t,e,s,r){const i=s&&"local"!==r?SharedArrayBuffer:ArrayBuffer,n=(0,_.UK)(t),o=new n(new i(e*e*4*n.BYTES_PER_ELEMENT));for(let a=0;a<o.length;a+=4)o[a+1]=255;return o}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}}class S{constructor(t,e){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>{};this._client=t,this.config=e,this._notifyChange=s,this._attributeComputeMap=new Map,this._blocks=new Array,this._filters=new Array(c.m4),this._targetType=0,this._abortController=new AbortController,this._hasScaleExpr=!1,this._size=32,this._idsToHighlight=new Set;const r=e.supportsTextureFloat?g.Br.FLOAT:g.Br.UNSIGNED_BYTE;y(`Creating AttributeStore ${x.sharedArrayBuffer?"with":"without"} shared memory`),this._blockDescriptors=[{pixelType:g.Br.UNSIGNED_BYTE,layout:1},{pixelType:g.Br.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:g.Br.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:r,layout:15},{pixelType:r,layout:15},{pixelType:r,layout:15},{pixelType:r,layout:15}],this._blocks=this._blockDescriptors.map((()=>null))}destroy(){this._abortController.abort()}get hasScaleExpr(){return this._hasScaleExpr}get _signal(){return this._abortController.signal}get hasHighlight(){return this._idsToHighlight.size>0}isUpdating(){return!!this._currUpdate||!!this._nextUpdate}update(t,e){this.config=e;const s=e.schema.processors[0].storage,r=(0,u.Hg)(this._schema,s);if((t.targets.feature||t.targets.aggregate)&&(t.storage.data=!0),r&&((0,i.Z)("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:",r),t.storage.data=!0,this._schema=s,this._attributeComputeMap.clear(),!(0,a.Wi)(s))){switch(s.target){case"feature":this._targetType=d.PX;break;case"aggregate":this._targetType=d.xp}if("subtype"===s.type)for(const t in s.mapping){const e=s.mapping[t];if((0,a.pC)(e)&&(0,a.pC)(e.vvMapping))for(const t of e.vvMapping)this._bindAttribute(t)}else{if((0,a.pC)(s.vvMapping))for(const t of s.vvMapping)this._bindAttribute(t);if((0,a.pC)(s.attributeMapping))for(const t of s.attributeMapping)this._bindAttribute(t)}}}onTileData(t,e){if((0,a.Wi)(e.addOrUpdate))return;const s=e.addOrUpdate.getCursor();for(;s.next();){const t=s.getDisplayId();this.setAttributeData(t,s)}}invalidateResources(){this._createResourcesPromise=null,this._abortController.abort(),this._abortController=new AbortController}async setHighlight(t,e){const s=this._getBlock(0),r=e.map((t=>(0,d.jL)(t)));s.lock(),s.unsetComponentAllTexels(0,1),s.setComponent(0,1,r),s.unlock(),this._idsToHighlight.clear();for(const i of t)this._idsToHighlight.add(i);await this.sendUpdates()}async updateFilters(t,e,s){const{service:r,spatialReference:n}=s,{filters:o}=e,a=o.map(((t,e)=>this._updateFilter(t,e,r,n)));(await Promise.all(a)).some((t=>t))&&(t.storage.filters=!0,(0,i.Z)("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:","Filters changed"))}setData(t,e,s,r){const i=(0,d.jL)(t);this._ensureSizeForTexel(i),this._getBlock(e).setData(t,s,r)}getData(t,e,s){return this._getBlock(e).getData(t,s)}getHighlightFlag(t){return this._idsToHighlight.has(t)?c.uG:0}unsetAttributeData(t){const e=(0,d.jL)(t);this._getBlock(0).setData(e,0,0)}setAttributeData(t,e){const s=(0,d.jL)(t);if(this._ensureSizeForTexel(s),this._getBlock(0).setData(s,0,this.getFilterFlags(e)),this._targetType!==(0,d.vs)(t))return;const r=this._attributeComputeMap,i=this.config.supportsTextureFloat?1:2;r.size&&r.forEach(((t,r)=>{const n=r*i%4,a=Math.floor(r*i/4),h=this._getBlock(a+c.aK),u=t(e);if(this.config.supportsTextureFloat)h.setData(s,n,u);else if(u===c.AI)h.setData(s,n,255),h.setData(s,n+1,255);else{const t=(0,o.uZ)(Math.round(u),-32767,32766)+32768,e=255&t,r=(65280&t)>>8;h.setData(s,n,e),h.setData(s,n+1,r)}}))}sendUpdates(){if((0,i.Z)("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate"),this._notifyChange(),this._nextUpdate)return this._nextUpdate.promise;if(this._currUpdate)return this._nextUpdate=(0,h.hh)(),this._nextUpdate.promise;const t={blocks:this._blocks.map((t=>(0,a.pC)(t)?t.toMessage():null))};return this._currUpdate=this._createResources().then((()=>{const e=()=>{if(this._currUpdate=null,this._nextUpdate){const t=this._nextUpdate;this._nextUpdate=null,this.sendUpdates().then((()=>t.resolve()))}else(0,i.Z)("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate::No additional updates queued");this._notifyChange()};(0,i.Z)("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate::client.update");const s=this._client.update(t,this._signal).then(e).catch(e);return this._client.render(this._signal),s})).catch((t=>{if((0,h.D_)(t))return this._createResourcesPromise=null,this._createResources();this._notifyChange(),m.error(new r.Z("mapview-attribute-store","Encountered an error during client update",t))})),this._currUpdate}_ensureSizeForTexel(t){for(;t>=this._size*this._size;)if(this._expand())return}_bindAttribute(t){let e;if(null!=t.fieldIndex)t.normalizationField&&m.warn("mapview-arcade","Ignoring normalizationField specified with an arcade expression which is not supported."),e=e=>e.getComputedNumericAtIndex(t.fieldIndex);else{if(!t.field)return;e=t.normalizationField?e=>{const s=e.readAttribute(t.normalizationField);return s?e.readAttribute(t.field)/s:null}:e=>e.readAttribute(t.field)}t.valueRepresentation&&(e=I(e,(e=>(0,p.qc)(e,t.valueRepresentation))));this._attributeComputeMap.set(t.binding,I(e,(t=>null===t||isNaN(t)||t===1/0?c.AI:t)))}_createResources(){if((0,a.pC)(this._createResourcesPromise))return this._createResourcesPromise;this._getBlock(c.xl),this._getBlock(c.pU),y("Initializing AttributeStore");const t={shared:x.sharedArrayBuffer&&!("local"===this._client.type),size:this._size,blocks:(0,a.Fd)(this._blocks,(t=>({textureOnly:t.textureOnly,buffer:t.buffer,pixelType:t.pixelType})))},e=this._client.initialize(t,this._signal).catch((t=>{(0,h.D_)(t)?this._createResourcesPromise=null:m.error(new r.Z("mapview-attribute-store","Encountered an error during client initialization",t))}));return this._createResourcesPromise=e,e.then((()=>(0,a.Wi)(this._createResourcesPromise)?this._createResources():void 0)),e}_getBlock(t){const e=this._blocks[t];if((0,a.pC)(e))return e;y(`Initializing AttributeBlock at index ${t}`);const s=x.sharedArrayBuffer,r=this._client.type,i=new b(s,r,this._size,this._blockDescriptors[t]);return this._blocks[t]=i,this._createResourcesPromise=null,i}_expand(){if(this._size<this.config.maxTextureSize){const t=this._size<<=1;return y("Expanding block size to",t,this._blocks),(0,a.JR)(this._blocks,(e=>e.expand(t))),this._createResourcesPromise=null,this._size=t,0}return m.error(new r.Z("mapview-limitations","Maximum number of onscreen features exceeded.")),-1}async _updateFilter(t,e,s,r){const i=this._filters[e],n=(0,a.pC)(i)&&i.hash;if(!i&&!t)return!1;if(n===JSON.stringify(t))return!1;if((0,a.Wi)(t)){if(!i)return!1;const t=1<<e+1,s=this._getBlock(0);return this._filters[e]=null,s.setComponentAllTexels(0,t),this.sendUpdates(),!0}const o=await this._getFilter(e,s);return await o.update(t,r),!0}async _getFilter(t,e){const r=this._filters[t];if((0,a.pC)(r))return r;const{default:i}=await s.e(7481).then(s.bind(s,37481)),n=new i({geometryType:e.geometryType,hasM:!1,hasZ:!1,timeInfo:e.timeInfo,fieldsIndex:new l.Z(e.fields)});return this._filters[t]=n,n}isVisible(t){return!!(2&this._getBlock(0).getData(t,0))}getFilterFlags(t){let e=0;const s=(0,d.KS)(t.getDisplayId());for(let i=0;i<this._filters.length;i++){const r=!!(s&1<<i),n=this._filters[i];e|=(!r||(0,a.Wi)(n)||n.check(t)?1:0)<<i}let r=0;if(this._idsToHighlight.size){const e=t.getObjectId();r=this.getHighlightFlag(e)}return e<<1|r}}},56078:(t,e,s)=>{s.d(e,{O:()=>a});var r=s(84328);class i{constructor(){this._freeIds=[],this._idCounter=1}createId(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(0,r.QS)(this._getFreeId(),t)}releaseId(t){this._freeIds.push(t)}_getFreeId(){return this._freeIds.length?this._freeIds.pop():this._idCounter++}}var n=s(44333);function o(t,e,s){if(!(t.length>e))for(;t.length<=e;)t.push(s)}class a{constructor(){this._numerics=[],this._strings=[],this._idGenerator=new i,this._allocatedSize=256,this._bitsets=[],this._instanceIds=[],this._bounds=[]}createBitset(){const t=this._bitsets.length;return this._bitsets.push(n.p.create(this._allocatedSize,r._I)),t+1}getBitset(t){return this._bitsets[t-1]}_expand(){this._allocatedSize<<=1;for(const t of this._bitsets)t.resize(this._allocatedSize)}_ensureNumeric(t,e){this._numerics[t]||(this._numerics[t]=[]),o(this._numerics[t],e,0)}_ensureInstanceId(t){o(this._instanceIds,t,0)}_ensureString(t,e){this._strings[t]||(this._strings[t]=[]),o(this._strings[t],e,null)}createDisplayId(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const e=this._idGenerator.createId();return e>this._allocatedSize&&this._expand(),(0,r.QS)(e,t)}releaseDisplayId(t){for(const e of this._bitsets)e.unset(t);return this._idGenerator.releaseId(t&r._I)}getComputedNumeric(t,e){return this.getComputedNumericAtIndex(t&r._I,0)}setComputedNumeric(t,e,s){return this.setComputedNumericAtIndex(t&r._I,s,0)}getComputedString(t,e){return this.getComputedStringAtIndex(t&r._I,0)}setComputedString(t,e,s){return this.setComputedStringAtIndex(t&r._I,0,s)}getComputedNumericAtIndex(t,e){const s=t&r._I;return this._ensureNumeric(e,s),this._numerics[e][s]}setComputedNumericAtIndex(t,e,s){const i=t&r._I;this._ensureNumeric(e,i),this._numerics[e][i]=s}getInstanceId(t){const e=t&r._I;return this._ensureInstanceId(e),this._instanceIds[e]}setInstanceId(t,e){const s=t&r._I;this._ensureInstanceId(s),this._instanceIds[s]=e}getComputedStringAtIndex(t,e){const s=t&r._I;return this._ensureString(e,s),this._strings[e][s]}setComputedStringAtIndex(t,e,s){const i=t&r._I;this._ensureString(e,i),this._strings[e][i]=s}getXMin(t){return this._bounds[4*(t&r._I)]}getYMin(t){return this._bounds[4*(t&r._I)+1]}getXMax(t){return this._bounds[4*(t&r._I)+2]}getYMax(t){return this._bounds[4*(t&r._I)+3]}setBounds(t,e){const s=e.readHydratedGeometry();if(!s||!s.coords.length)return!1;let i=1/0,n=1/0,a=-1/0,h=-1/0;s.forEachVertex(((t,e)=>{i=Math.min(i,t),n=Math.min(n,e),a=Math.max(a,t),h=Math.max(h,e)}));const u=t&r._I;return o(this._bounds,4*u+4,0),this._bounds[4*u]=i,this._bounds[4*u+1]=n,this._bounds[4*u+2]=a,this._bounds[4*u+3]=h,!0}}},92010:(t,e,s)=>{s.d(e,{s:()=>S});s(59486);var r=s(93169),i=s(92026),n=s(85403),o=s(83406),a=s(80457),h=s(44333),u=s(77981);let l=0;const c=(0,r.Z)("featurelayer-simplify-thresholds")??[.5,.5,.5,.5],d=c[0],_=c[1],f=c[2],p=c[3],g=(0,r.Z)("featurelayer-simplify-payload-size-factors")??[1,2,4],m=g[0],y=g[1],x=g[2],I=(0,r.Z)("featurelayer-simplify-mobile-factor")??2,b=(0,r.Z)("esri-mobile");class S{constructor(t,e){this.type="FeatureSetReader",this.arcadeDeclaredClass="esri.arcade.Feature",this.seen=!1,this.instance=0,this._tx=0,this._ty=0,this._sx=1,this._sy=1,this._deleted=null,this._joined=[],this._objectIdToIndex=null,this._level=0,this.instance=t,this._layerSchema=e}static createInstance(){return l++,l=l>65535?0:l,l}get isEmpty(){return(0,i.pC)(this._deleted)&&this._deleted.countSet()===this.getSize()}set level(t){this._level=t}getAreaSimplificationThreshold(t,e){let s=1;const r=b?I:1;e>4e6?s=x*r:e>1e6?s=y*r:e>5e5?s=m*r:e>1e5&&(s=r);let i=0;t>4e3?i=p*s:t>2e3?i=f*s:t>100?i=_:t>15&&(i=d);let n=8;return this._level<4?n=1:this._level<5?n=2:this._level<6&&(n=4),i*n}setArcadeSpatialReference(t){this._arcadeSpatialReference=t}attachStorage(t){this._storage=t}getQuantizationTransform(){throw new Error("Unable to find transform for featureSet")}getStorage(){return this._storage}getComputedNumeric(t){return this.getComputedNumericAtIndex(0)}setComputedNumeric(t,e){return this.setComputedNumericAtIndex(e,0)}getComputedString(t){return this.getComputedStringAtIndex(0)}setComputedString(t,e){return this.setComputedStringAtIndex(0,e)}getComputedNumericAtIndex(t){return this._storage.getComputedNumericAtIndex(this.getDisplayId(),t)}setComputedNumericAtIndex(t,e){this._storage.setComputedNumericAtIndex(this.getDisplayId(),t,e)}getComputedStringAtIndex(t){return this._storage.getComputedStringAtIndex(this.getDisplayId(),t)}setComputedStringAtIndex(t,e){return this._storage.setComputedStringAtIndex(this.getDisplayId(),t,e)}transform(t,e,s,r){const i=this.copy();return i._tx+=t,i._ty+=e,i._sx*=s,i._sy*=r,i}readAttribute(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const s=this._readAttribute(t,e);if(void 0!==s)return s;for(const r of this._joined){r.setIndex(this.getIndex());const s=r._readAttribute(t,e);if(void 0!==s)return s}}readAttributes(){const t=this._readAttributes();for(const e of this._joined){e.setIndex(this.getIndex());const s=e._readAttributes();for(const e of Object.keys(s))t[e]=s[e]}return t}joinAttributes(t){this._joined.push(t)}readArcadeFeature(){return this}geometry(){const t=this.readHydratedGeometry(),e=(0,o.di)(t,this.geometryType,this.hasZ,this.hasM),s=(0,u.im)(e);return s&&(s.spatialReference=this._arcadeSpatialReference),s}field(t){if(this.hasField(t))return this.readAttribute(t,!0);for(const e of this._joined)if(e.setIndex(this.getIndex()),e.hasField(t))return e._readAttribute(t,!0);throw new Error(`Field ${t} does not exist`)}setField(t,e){throw new Error("Unable to update feature attribute values, feature is readonly")}keys(){return this.getFieldNames()}castToText(){return JSON.stringify(this.readLegacyFeature())}gdbVersion(){return null}fullSchema(){return this._layerSchema}castAsJson(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return{attributes:this._readAttributes(),geometry:!0===t?.keepGeometryType?this.geometry():this.geometry().toJSON()}}castAsJsonAsync(){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return Promise.resolve(this.castAsJson(t))}removeIds(t){if((0,i.Wi)(this._objectIdToIndex)){const t=new Map,e=this.getCursor();for(;e.next();)t.set(e.getObjectId(),e.getIndex());this._objectIdToIndex=t}const e=this._objectIdToIndex;for(const s of t)e.has(s)&&this.removeAtIndex(e.get(s))}removeAtIndex(t){(0,i.Wi)(this._deleted)&&(this._deleted=h.p.create(this.getSize())),this._deleted.set(t)}readGeometryForDisplay(){return this.readUnquantizedGeometry(!0)}readLegacyGeometryForDisplay(){return this.readLegacyGeometry(!0)}*features(){const t=this.getCursor();for(;t.next();)yield t.readOptimizedFeature()}_getExists(){return(0,i.Wi)(this._deleted)||!this._deleted.has(this.getIndex())}_computeCentroid(){if("esriGeometryPolygon"!==this.geometryType)return null;const t=this.readUnquantizedGeometry();if(!t||t.hasIndeterminateRingOrder)return null;const e=(0,i.Pt)(this.getQuantizationTransform(),null);return(0,n.Y)(new a.Z,t,this.hasM,this.hasZ,e)}copyInto(t){t.seen=this.seen,t._storage=this._storage,t._arcadeSpatialReference=this._arcadeSpatialReference,t._joined=this._joined,t._tx=this._tx,t._ty=this._ty,t._sx=this._sx,t._sy=this._sy,t._deleted=this._deleted,t._objectIdToIndex=this._objectIdToIndex}}},28941:(t,e,s)=>{s.d(e,{i:()=>a});var r=s(92026),i=s(83406),n=s(3182),o=s(92010);class a extends o.s{constructor(t,e,s){super(t,s),this._featureIndex=-1,this._dateFields=new Set,this._geometryType=s?.geometryType,this._features=e}static fromFeatures(t,e){const{objectIdField:s,geometryType:r}=e,n=(0,i.Yn)([],t,r,!1,!1,s);for(let i=0;i<n.length;i++)n[i].displayId=t[i].displayId;return a.fromOptimizedFeatures(n,e)}static fromFeatureSet(t,e){const s=(0,i.h_)(t,e.objectIdField);return a.fromOptimizedFeatureSet(s,e)}static fromOptimizedFeatureSet(t,e){const{features:s}=t,r=a.fromOptimizedFeatures(s,e);r._exceededTransferLimit=t.exceededTransferLimit,r._transform=t.transform;for(const i of t.fields)"esriFieldTypeDate"===i.type&&r._dateFields.add(i.name);return r}static fromOptimizedFeatures(t,e,s){const r=o.s.createInstance(),i=new a(r,t,e);return i._transform=s,i}get _current(){return this._features[this._featureIndex]}get geometryType(){return this._geometryType}get hasFeatures(){return!!this._features.length}get hasNext(){return this._featureIndex+1<this._features.length}get exceededTransferLimit(){return this._exceededTransferLimit}get hasZ(){return!1}get hasM(){return!1}removeIds(t){const e=new Set(t);this._features=this._features.filter((t=>!e.has(t.objectId)))}append(t){for(const e of t)this._features.push(e)}getSize(){return this._features.length}getCursor(){return this.copy()}getQuantizationTransform(){return this._transform}getAttributeHash(){let t="";for(const e in this._current.attributes)t+=this._current.attributes[e];return t}getIndex(){return this._featureIndex}setIndex(t){this._featureIndex=t}getObjectId(){return this._current.objectId}getDisplayId(){return this._current.displayId}setDisplayId(t){this._current.displayId=t}getGroupId(){return this._current.groupId}setGroupId(t){this._current.groupId=t}copy(){const t=new a(this.instance,this._features,this.fullSchema());return this.copyInto(t),t}next(){for(;++this._featureIndex<this._features.length&&!this._getExists(););return this._featureIndex<this._features.length}readLegacyFeature(){return(0,i.EI)(this._current,this.geometryType,this.hasZ,this.hasM)}readOptimizedFeature(){return this._current}readLegacyPointGeometry(){return this.readGeometry()?{x:this.getX(),y:this.getY()}:null}readLegacyGeometry(){const t=this.readGeometry();return(0,i.di)(t,this.geometryType,this.hasZ,this.hasM)}readLegacyCentroid(){const t=this.readCentroid();return(0,r.Wi)(t)?null:{x:t.coords[0]*this._sx+this._tx,y:t.coords[1]*this._sy+this._ty}}readGeometryArea(){return(0,n.S6)(this._current)?(0,i.lz)(this._current.geometry,2):0}readUnquantizedGeometry(){const t=this.readGeometry();if("esriGeometryPoint"===this.geometryType||!t)return t;const e=t.clone();return function(t){let{coords:e,lengths:s}=t,r=0;for(const i of s){for(let t=1;t<i;t++)e[2*(r+t)]+=e[2*(r+t)-2],e[2*(r+t)+1]+=e[2*(r+t)-1];r+=i}}(e),e}readHydratedGeometry(){const t=this._current.geometry;if((0,r.Wi)(t))return null;const e=t.clone();return(0,r.pC)(this._transform)&&(0,i.$g)(e,e,this.hasZ,this.hasM,this._transform),e}getXHydrated(){if(!(0,n.S6)(this._current))return 0;const t=this._current.geometry.coords[0],e=this.getQuantizationTransform();return(0,r.Wi)(e)?t:t*e.scale[0]+e.translate[0]}getYHydrated(){if(!(0,n.S6)(this._current))return 0;const t=this._current.geometry.coords[1],e=this.getQuantizationTransform();return(0,r.Wi)(e)?t:e.translate[1]-t*e.scale[1]}getX(){return(0,n.S6)(this._current)?this._current.geometry.coords[0]*this._sx+this._tx:0}getY(){return(0,n.S6)(this._current)?this._current.geometry.coords[1]*this._sy+this._ty:0}readGeometry(){if(!(0,n.S6)(this._current))return null;const t=this._current.geometry.clone();if(t.isPoint)return t.coords[0]=t.coords[0]*this._sx+this._tx,t.coords[1]=t.coords[1]*this._sy+this._ty,t;let e=0;for(const s of t.lengths)t.coords[2*e]=t.coords[2*e]*this._sx+this._tx,t.coords[2*e+1]=t.coords[2*e+1]*this._sy+this._ty,e+=s;return t}readCentroid(){if(!(0,n.S6)(this._current))return null;if((0,r.Wi)(this._current.centroid)){const t=this._computeCentroid();if((0,r.Wi)(t))return null;t.coords[0]=(t.coords[0]-this._tx)/this._sx,t.coords[1]=(t.coords[1]-this._ty)/this._sy,this._current.centroid=t}const t=this._current.centroid.clone();return t.coords[0]=t.coords[0]*this._sx+this._tx,t.coords[1]=t.coords[1]*this._sx+this._ty,t}hasField(t){return t in this._current.attributes||this.getFieldNames().map((t=>t.toLowerCase())).includes(t.toLowerCase())}getFieldNames(){return Object.keys(this._current.attributes)}_readAttribute(t,e){const s=this._current.attributes[t];if(void 0!==s)return null!=s&&e&&this._dateFields.has(t)?new Date(s):s;const r=this.readAttributes(),i=t.toLocaleLowerCase().trim();for(const n in r)if(n.toLocaleLowerCase().trim()===i){const t=this._current.attributes[n];return null!=t&&e&&this._dateFields.has(n)?new Date(t):t}}copyInto(t){super.copyInto(t),t._featureIndex=this._featureIndex,t._transform=this._transform,t._dateFields=this._dateFields}_readAttributes(){return this._current.attributes}}},44333:(t,e,s)=>{s.d(e,{p:()=>r});class r{constructor(t,e){this._mask=0,this._buf=t,this._mask=e}static fromBuffer(t,e){return new r(t,e)}static create(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4294967295;const s=new Uint32Array(Math.ceil(t/32));return new r(s,e)}_getIndex(t){return Math.floor(t/32)}has(t){const e=this._mask&t;return!!(this._buf[this._getIndex(e)]&1<<e%32)}hasRange(t,e){let s=t,r=e;for(;s%32&&s!==r;){if(this.has(s))return!0;s++}for(;r%32&&s!==r;){if(this.has(s))return!0;r--}if(s===r)return!1;for(let i=s/32;i!==r/32;i++)if(this._buf[i])return!0;return!1}set(t){const e=this._mask&t,s=this._getIndex(e),r=1<<e%32;this._buf[s]|=r}setRange(t,e){let s=t,r=e;for(;s%32&&s!==r;)this.set(s++);for(;r%32&&s!==r;)this.set(r--);if(s!==r)for(let i=s/32;i!==r/32;i++)this._buf[i]=4294967295}unset(t){const e=this._mask&t,s=this._getIndex(e),r=1<<e%32;this._buf[s]&=4294967295^r}resize(t){const e=this._buf,s=new Uint32Array(Math.ceil(t/32));s.set(e),this._buf=s}or(t){for(let e=0;e<this._buf.length;e++)this._buf[e]|=t._buf[e];return this}and(t){for(let e=0;e<this._buf.length;e++)this._buf[e]&=t._buf[e];return this}xor(t){for(let e=0;e<this._buf.length;e++)this._buf[e]^=t._buf[e];return this}ior(t){for(let e=0;e<this._buf.length;e++)this._buf[e]|=~t._buf[e];return this}iand(t){for(let e=0;e<this._buf.length;e++)this._buf[e]&=~t._buf[e];return this}ixor(t){for(let e=0;e<this._buf.length;e++)this._buf[e]^=~t._buf[e];return this}any(){for(let t=0;t<this._buf.length;t++)if(this._buf[t])return!0;return!1}copy(t){for(let e=0;e<this._buf.length;e++)this._buf[e]=t._buf[e];return this}clone(){return new r(this._buf.slice(),this._mask)}clear(){for(let t=0;t<this._buf.length;t++)this._buf[t]=0}forEachSet(t){for(let e=0;e<this._buf.length;e++){let s=this._buf[e],r=32*e;if(s)for(;s;)1&s&&t(r),s>>>=1,r++}}countSet(){let t=0;return this.forEachSet((e=>{t++})),t}}},98290:(t,e,s)=>{s.d(e,{I:()=>_,qc:()=>u});var r=s(92026),i=s(17842),n=s(65800),o=s(94109),a=s(80613),h=s(18745);function u(t,e){if(!t||!e)return t;switch(e){case"radius":case"distance":return 2*t;case"diameter":case"width":return t;case"area":return Math.sqrt(t)}return t}function l(t){return t.map((t=>function(t){return{value:t.value,size:(0,i.t_)(t.size)}}(t)))}function c(t){if("string"==typeof t||"number"==typeof t)return(0,i.t_)(t);const e=t;return{type:"size",expression:e.expression,stops:l(e.stops)}}const d=t=>{const e=[],s=[],r=l(t),n=r.length;for(let a=0;a<6;a++){const t=r[Math.min(a,n-1)];e.push(t.value),s.push(null==t.size?o.AI:(0,i.F2)(t.size))}return{values:new Float32Array(e),sizes:new Float32Array(s)}};function _(t){const e=t&&t.length>0?{}:null,s=e?{}:null;if(!e)return{vvFields:e,vvRanges:s};for(const r of t)if(r.field&&(e[r.type]=r.field),"size"===r.type){s.size||(s.size={});const t=r;switch((0,h.a)(t)){case a.X.SIZE_MINMAX_VALUE:s.size.minMaxValue={minDataValue:t.minDataValue,maxDataValue:t.maxDataValue,minSize:c(t.minSize),maxSize:c(t.maxSize)};break;case a.X.SIZE_SCALE_STOPS:s.size.scaleStops={stops:l(t.stops)};break;case a.X.SIZE_FIELD_STOPS:if(t.levels){const e={};for(const s in t.levels)e[s]=d(t.levels[s]);s.size.fieldStops={type:"level-dependent",levels:e}}else s.size.fieldStops={type:"static",...d(t.stops)};break;case a.X.SIZE_UNIT_VALUE:s.size.unitValue={unit:t.valueUnit,valueRepresentation:t.valueRepresentation}}}else if("color"===r.type)s.color=g(r);else if("opacity"===r.type)s.opacity=f(r);else if("rotation"===r.type){const t=r;s.rotation={type:t.rotationType}}return{vvFields:e,vvRanges:s}}function f(t){const e={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if("string"==typeof t.field){if(!t.stops)return null;{if(t.stops.length>8)return null;const s=t.stops;for(let t=0;t<8;++t){const r=s[Math.min(t,s.length-1)];e.values[t]=r.value,e.opacities[t]=r.opacity}}}else{if(!(t.stops&&t.stops.length>=0))return null;{const s=t.stops&&t.stops.length>=0&&t.stops[0].opacity;for(let t=0;t<8;t++)e.values[t]=1/0,e.opacities[t]=s}}return e}function p(t,e,s){t[4*e+0]=s.r/255,t[4*e+1]=s.g/255,t[4*e+2]=s.b/255,t[4*e+3]=s.a}function g(t){if((0,r.Wi)(t))return null;if(t.normalizationField)return null;const e={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};if("string"==typeof t.field){if(!t.stops)return null;{if(t.stops.length>8)return null;e.field=t.field;const s=t.stops;for(let t=0;t<8;++t){const r=s[Math.min(t,s.length-1)];e.values[t]=r.value,p(e.colors,t,r.color)}}}else{if(!(t.stops&&t.stops.length>=0))return null;{const s=t.stops&&t.stops.length>=0&&t.stops[0].color;for(let t=0;t<8;t++)e.values[t]=1/0,p(e.colors,t,s)}}for(let s=0;s<32;s+=4)(0,n.pr)(e.colors,s,!0);return e}}}]);
//# sourceMappingURL=8348.875aa5d9.chunk.js.map