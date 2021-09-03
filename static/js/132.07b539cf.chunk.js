(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[132],{1024:function(e,t,r){"use strict";r.d(t,"a",(function(){return _})),r.d(t,"b",(function(){return f}));var i=r(676),n=r(120),s=(r(75),r(81)),a=r(429),o=r(232),u=r(989),c=r(962);function d(e,t){return e<<16|t}function l(e){return(4294901760&e)>>>16}function h(e){return 65535&e}const f={getObjectId:e=>e.getObjectId(),getAttributes:e=>e.readAttributes(),getAttribute:(e,t)=>e.readAttribute(t),cloneWithGeometry:(e,t)=>e,getGeometry:e=>e.readHydratedGeometry(),getCentroid:(e,t)=>e.readCentroid()};class _ extends u.a{constructor(e,t,r){super(e,t),this.featureAdapter=f,this.events=new n.a,this._featureSetsByInstance=new Map,this._objectIdToDisplayId=new Map,this._spatialIndexInvalid=!0,this._indexSearchCache=new i.a(50),this._index=Object(a.a)(9,(e=>({minX:this._storage.getXMin(e),minY:this._storage.getYMin(e),maxX:this._storage.getXMax(e),maxY:this._storage.getYMax(e)}))),this._storage=t,this.mode=r}get storage(){return this._storage}get storeStatistics(){return{featureCount:0,vertexCount:0}}hasInstance(e){return this._featureSetsByInstance.has(e)}onTileData(e,t){if(Object(s.j)(t.addOrUpdate))return t;if(t.addOrUpdate.attachStorage(this._storage),"snapshot"===this.mode){const r=t.addOrUpdate.getCursor();for(;r.next();){const t=r.getDisplayId();this.setComputedAttributes(this._storage,r,t,e.scale)}return t}this._featureSetsByInstance.set(t.addOrUpdate.instance,t.addOrUpdate);const r=t.addOrUpdate.getCursor();for(;r.next();)this._insertFeature(r,e.scale);return this._spatialIndexInvalid=!0,this.events.emit("changed"),t}search(e){this._rebuildIndex();const t=e.id,r=this._indexSearchCache.find((e=>e.tileId===t));if(Object(s.k)(r))return r.readers;const i=new Map,n=this._searchIndex(e.bounds),a=[];for(const s of n){const e=this._storage.getInstanceId(s),t=l(e),r=h(e);i.has(t)||i.set(t,[]),i.get(t).push(r)}return i.forEach(((e,t)=>{const r=this._featureSetsByInstance.get(t);a.push(c.a.from(r,e))})),this._indexSearchCache.enqueue({tileId:t,readers:a}),a}insert(e){const t=e.getCursor(),r=this._storage;for(;t.next();){var i;const e=d(t.instance,t.getIndex()),n=t.getObjectId(),s=null!=(i=this._objectIdToDisplayId.get(n))?i:this._storage.createDisplayId();t.setDisplayId(s),r.setInstanceId(s,e),this._objectIdToDisplayId.set(n,s)}this._featureSetsByInstance.set(e.instance,e),this._spatialIndexInvalid=!0}remove(e){const t=this._objectIdToDisplayId.get(e);if(!t)return;const r=this._storage.getInstanceId(t),i=h(r),n=l(r),s=this._featureSetsByInstance.get(n);this._objectIdToDisplayId.delete(e),this._storage.releaseDisplayId(t),s.removeAtIndex(i),s.isEmpty&&this._featureSetsByInstance.delete(n),this._spatialIndexInvalid=!0}forEach(e){this._objectIdToDisplayId.forEach((t=>{const r=this._storage.getInstanceId(t),i=this._lookupFeature(r);e(i)}))}forEachUnsafe(e){this._objectIdToDisplayId.forEach((t=>{const r=this._storage.getInstanceId(t),i=l(r),n=h(r),s=this._getFeatureSet(i);s.setIndex(n),e(s)}))}forEachInBounds(e,t){const r=this._searchIndex(e);for(const i of r){const e=this.lookupFeatureByDisplayId(i,this._storage);t(Object(s.s)(e))}}forEachBounds(e,t,r){this._rebuildIndex();const i=[0,0,0,0];for(const n of e){if(!n.readGeometry())continue;const e=n.getDisplayId();i[0]=this._storage.getXMin(e),i[1]=this._storage.getYMin(e),i[2]=this._storage.getXMax(e),i[3]=this._storage.getYMax(e),t(Object(o.o)(r,i))}}sweepFeatures(e,t,r){this._spatialIndexInvalid=!0,this._objectIdToDisplayId.forEach(((i,n)=>{e.has(i)||(t.releaseDisplayId(i),r&&r.unsetAttributeData(i),this._objectIdToDisplayId.delete(n))})),this.events.emit("changed")}sweepFeatureSets(e){this._spatialIndexInvalid=!0,this._featureSetsByInstance.forEach(((t,r)=>{e.has(r)||this._featureSetsByInstance.delete(r)}))}lookupObjectId(e,t){const r=this.lookupFeatureByDisplayId(e,t);return Object(s.j)(r)?null:r.getObjectId()}lookupDisplayId(e){return this._objectIdToDisplayId.get(e)}lookupFeatureByDisplayId(e,t){const r=t.getInstanceId(e);return this._lookupFeature(r)}lookupByDisplayIdUnsafe(e){const t=this._storage.getInstanceId(e),r=l(t),i=h(t),n=this._getFeatureSet(r);return n?(n.setIndex(i),n):null}_insertFeature(e,t){const r=this._storage,i=e.getObjectId(),n=d(e.instance,e.getIndex());r.getInstanceId(e.getDisplayId());let s=this._objectIdToDisplayId.get(i);s||(s=r.createDisplayId(),this._objectIdToDisplayId.set(i,s),this._spatialIndexInvalid=!0),e.setDisplayId(s),r.setInstanceId(s,n),this.setComputedAttributes(r,e,s,t)}_searchIndex(e){this._rebuildIndex();const t={minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]};return this._index.search(t)}_rebuildIndex(){if(!this._spatialIndexInvalid)return;const e=[];"snapshot"===this.mode?this._featureSetsByInstance.forEach((t=>{const r=t.getCursor();for(;r.next();){const t=r.getDisplayId();this._storage.setBounds(t,r)&&e.push(t)}})):this._objectIdToDisplayId.forEach((t=>{const r=this._storage.getInstanceId(t);this._storage.setBounds(t,this._lookupFeature(r))&&e.push(t)})),this._index.clear(),this._index.load(e),this._indexSearchCache.clear(),this._spatialIndexInvalid=!1}_lookupFeature(e){const t=l(e),r=h(e),i=this._getFeatureSet(t);if(!i)return null;const n=i.getCursor();return n.setIndex(r),n}_getFeatureSet(e){return this._featureSetsByInstance.get(e)}}},232:function(e,t,r){"use strict";r.d(t,"a",(function(){return G})),r.d(t,"b",(function(){return N})),r.d(t,"c",(function(){return h})),r.d(t,"d",(function(){return g})),r.d(t,"e",(function(){return b})),r.d(t,"f",(function(){return s})),r.d(t,"g",(function(){return m})),r.d(t,"h",(function(){return A})),r.d(t,"i",(function(){return E})),r.d(t,"j",(function(){return o})),r.d(t,"k",(function(){return d})),r.d(t,"l",(function(){return l})),r.d(t,"m",(function(){return u})),r.d(t,"n",(function(){return c})),r.d(t,"o",(function(){return T})),r.d(t,"p",(function(){return a})),r.d(t,"q",(function(){return O})),r.d(t,"r",(function(){return x})),r.d(t,"s",(function(){return C})),r.d(t,"t",(function(){return y})),r.d(t,"u",(function(){return S})),r.d(t,"v",(function(){return j})),r.d(t,"w",(function(){return v})),r.d(t,"x",(function(){return F})),r.d(t,"y",(function(){return w})),r.d(t,"z",(function(){return I})),r.d(t,"A",(function(){return M}));var i=r(81),n=(r(94),r(119));function s(e=N){return[e[0],e[1],e[2],e[3],e[4],e[5]]}function a(e,t,r,i,n,a,o=s()){return o[0]=e,o[1]=t,o[2]=r,o[3]=i,o[4]=n,o[5]=a,o}function o(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[3]),e[4]=Math.max(e[4],t[4]),e[5]=Math.max(e[5],t[5])}function u(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[3]=Math.max(e[3],t[2]),e[4]=Math.max(e[4],t[3])}function c(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[0]),e[4]=Math.max(e[4],t[1]),e[5]=Math.max(e[5],t[2])}function d(e,t,r=0,i=t.length/3){let n=e[0],s=e[1],a=e[2],o=e[3],u=e[4],c=e[5];for(let d=0;d<i;d++)n=Math.min(n,t[r+3*d]),s=Math.min(s,t[r+3*d+1]),a=Math.min(a,t[r+3*d+2]),o=Math.max(o,t[r+3*d]),u=Math.max(u,t[r+3*d+1]),c=Math.max(c,t[r+3*d+2]);e[0]=n,e[1]=s,e[2]=a,e[3]=o,e[4]=u,e[5]=c}function l(e,t,r){const i=t.length;let n=e[0],s=e[1],a=e[2],o=e[3],u=e[4],c=e[5];if(r)for(let d=0;d<i;d++){const e=t[d];n=Math.min(n,e[0]),s=Math.min(s,e[1]),a=Math.min(a,e[2]),o=Math.max(o,e[0]),u=Math.max(u,e[1]),c=Math.max(c,e[2])}else for(let d=0;d<i;d++){const e=t[d];n=Math.min(n,e[0]),s=Math.min(s,e[1]),o=Math.max(o,e[0]),u=Math.max(u,e[1])}e[0]=n,e[1]=s,e[2]=a,e[3]=o,e[4]=u,e[5]=c}function h(e){for(let t=0;t<6;t++)if(!isFinite(e[t]))return!1;return!0}function f(e){return e[0]>=e[3]?0:e[3]-e[0]}function _(e){return e[1]>=e[4]?0:e[4]-e[1]}function p(e){return e[2]>=e[5]?0:e[5]-e[2]}function m(e){const t=f(e),r=p(e),i=_(e);return Math.sqrt(t*t+r*r+i*i)}function g(e,t=[0,0,0]){return t[0]=e[0]+f(e)/2,t[1]=e[1]+_(e)/2,t[2]=e[2]+p(e)/2,t}function I(e,t=[0,0,0]){return t[0]=f(e),t[1]=_(e),t[2]=p(e),t}function y(e){return Math.max(f(e),p(e),_(e))}function b(e,t){return t[0]>=e[0]&&t[1]>=e[1]&&t[2]>=e[2]&&t[0]<=e[3]&&t[1]<=e[4]&&t[2]<=e[5]}function x(e,t){return!!Object(i.j)(t)||function(e,t){return Math.max(t[0],e[0])<=Math.min(t[3],e[3])&&Math.max(t[1],e[1])<=Math.min(t[4],e[4])&&Math.max(t[2],e[2])<=Math.min(t[5],e[5])}(e,t)}function S(e,t,r,i,n=e){return n[0]=e[0]+t,n[1]=e[1]+r,n[2]=e[2]+i,n[3]=e[3]+t,n[4]=e[4]+r,n[5]=e[5]+i,n}function j(e,t,r=e){const i=e[0]+f(e)/2,n=e[1]+_(e)/2,s=e[2]+p(e)/2;return r[0]=i+(e[0]-i)*t,r[1]=n+(e[1]-n)*t,r[2]=s+(e[2]-s)*t,r[3]=i+(e[3]-i)*t,r[4]=n+(e[4]-n)*t,r[5]=s+(e[5]-s)*t,r}function O(e,t){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function w(e,t,r=e){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r!==e&&(r[3]=e[3],r[4]=e[4],r[5]=e[5]),r}function F(e,t,r=e){return r[3]=t[0],r[4]=t[1],r[5]=t[2],r!==e&&(r[0]=e[0],r[1]=e[1],r[2]=e[2]),e}function v(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e}function A(e){return e?v(e,G):s(G)}function M(e,t){return t||(t=Object(n.k)()),t[0]=e[0],t[1]=e[1],t[2]=e[3],t[3]=e[4],t}function T(e,t){return e[0]=t[0],e[1]=t[1],e[2]=Number.NEGATIVE_INFINITY,e[3]=t[2],e[4]=t[3],e[5]=Number.POSITIVE_INFINITY,e}function R(e){return 6===e.length}function C(e){return 0===f(e)&&0===_(e)&&0===p(e)}function E(e,t,r){if(Object(i.j)(e)||Object(i.j)(t))return e===t;if(!R(e)||!R(t))return!1;if(r){for(let i=0;i<e.length;i++)if(!r(e[i],t[i]))return!1}else for(let i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}const G=[1/0,1/0,1/0,-1/0,-1/0,-1/0],N=[0,0,0,0,0,0];s()},676:function(e,t,r){"use strict";var i=r(81);t.a=class{constructor(e=Number.POSITIVE_INFINITY){this.size=0,this._start=0,this.maxSize=e,this._buffer=isFinite(e)?new Array(e):[]}get entries(){return this._buffer}enqueue(e){if(this.size===this.maxSize){const t=this._buffer[this._start];return this._buffer[this._start]=e,this._start=(this._start+1)%this.maxSize,t}return isFinite(this.maxSize)?this._buffer[(this._start+this.size++)%this.maxSize]=e:this._buffer[this._start+this.size++]=e,null}dequeue(){if(0===this.size)return null;const e=this._buffer[this._start];return this._buffer[this._start]=null,this.size--,this._start=(this._start+1)%this.maxSize,e}peek(){return 0===this.size?null:this._buffer[this._start]}find(e){if(0===this.size)return null;for(const t of this._buffer)if(Object(i.k)(t)&&e(t))return t;return null}clear(e){let t=this.dequeue();for(;Object(i.k)(t);)e&&e(t),t=this.dequeue()}}},678:function(e,t,r){"use strict";r.d(t,"a",(function(){return _})),r.d(t,"b",(function(){return j})),r.d(t,"c",(function(){return b})),r.d(t,"d",(function(){return x})),r.d(t,"e",(function(){return S})),r.d(t,"f",(function(){return y}));var i=r(86),n=r(81),s=r(109),a=r(328),o=r(95),u=r(215),c=r(100),d=(r(459),r(157)),l=r(159),h=r(391);const f=new i.a({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),_=Object.freeze({}),p=new l.a,m=new l.a,g=new l.a,I={esriGeometryPoint:d.m,esriGeometryPolyline:d.o,esriGeometryPolygon:d.n,esriGeometryMultipoint:d.l};function y(e,t,r,i=e.hasZ,n=e.hasM){const s=e.hasZ&&i,a=e.hasM&&n;if(r){const o=Object(d.u)(g,t,e.hasZ,e.hasM,"esriGeometryPoint",r,i,n);return Object(d.m)(o,s,a)}return Object(d.m)(t,s,a)}function b(e,t,r,i,n,s,a=t,o=r){const u=t&&a,c=r&&o,l=i?"coords"in i?i:i.geometry:null;if(!l)return null;if(n){let i=Object(d.q)(m,l,t,r,e,n,a,o);return s&&(i=Object(d.u)(g,i,u,c,e,s)),I[e](i,u,c)}if(s){const i=Object(d.u)(g,l,t,r,e,s,a,o);return I[e](i,u,c)}return Object(d.x)(p,l,t,r,a,o),I[e](p,u,c)}async function x(e,t,r){const{outFields:i,orderByFields:n,groupByFieldsForStatistics:s,outStatistics:a}=e;if(i)for(let o=0;o<i.length;o++)i[o]=i[o].trim();if(n)for(let o=0;o<n.length;o++)n[o]=n[o].trim();if(s)for(let o=0;o<s.length;o++)s[o]=s[o].trim();if(a)for(let o=0;o<a.length;o++)a[o].onStatisticField&&(a[o].onStatisticField=a[o].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),S(e,t,r)}async function S(e,t,i){if(!e)return null;let{where:d}=e;if(e.where=d=d&&d.trim(),(!d||/^1 *= *1$/.test(d)||t&&t===d)&&(e.where=null),!e.geometry)return e;let l=await async function(e){const{geometry:t,distance:i,units:n}=e;if(null==i||"vertexAttributes"in t)return t;const a=t.spatialReference,o=n?f.fromJSON(n):Object(s.h)(a),u=a&&(Object(c.g)(a)||Object(c.n)(a))?t:await Object(h.a)(a,c.a).then((()=>Object(h.b)(t,c.a)));return(await async function(){return(await Promise.all([r.e(8),r.e(29)]).then(r.bind(null,796))).geodesicBuffer}())(u.spatialReference,u,i,o)}(e);if(e.distance=0,e.units=null,"esriSpatialRelEnvelopeIntersects"===e.spatialRel){const{spatialReference:t}=e.geometry;l=Object(a.a)(l),l.spatialReference=t}e.geometry=l,await Object(h.a)(l.spatialReference,i);const p=(await Object(u.a)(Object(o.a)(l)))[0];if(Object(n.j)(p))throw _;const m=p.toJSON(),g=await Object(h.b)(m,m.spatialReference,i);if(!g)throw _;return g.spatialReference=i,e.geometry=g,e}function j(e){return e&&O in e?JSON.parse(JSON.stringify(e,w)):e}const O="_geVersion",w=(e,t)=>e!==O?t:void 0},729:function(e,t,r){"use strict";r.r(t);var i=r(83),n=r(76),s=r(81),a=r(119),o=r(280),u=r(923),c=r(785),d=r(678),l=r(130),h=r(1024);const f=n.a.getLogger("esri.views.2d.layers.features.support.whereUtils"),_={getAttribute:(e,t)=>e.field(t)};const p=n.a.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter");t.default=class{constructor(e){this._geometryBounds=Object(a.k)(),this._idToVisibility=new Map,this._serviceInfo=e}get hash(){return this._hash}check(e){return this._applyFilter(e)}clear(){const e=this._resetAllHiddenIds();return this.update(),{show:e,hide:[]}}invalidate(){this._idToVisibility.forEach(((e,t)=>{this._idToVisibility.set(t,0)}))}setKnownIds(e){for(const t of e)this._idToVisibility.set(t,1)}setTrue(e){const t=[],r=[],i=new Set(e);return this._idToVisibility.forEach(((e,n)=>{const s=!!(1&this._idToVisibility.get(n)),a=i.has(n);!s&&a?t.push(n):s&&!a&&r.push(n),this._idToVisibility.set(n,a?3:0)})),{show:t,hide:r}}createQuery(){const{geometry:e,spatialRel:t,where:r,timeExtent:i,objectIds:n}=this;return l.a.fromJSON({geometry:e,spatialRel:t,where:r,timeExtent:i,objectIds:n})}async update(e,t){this._hash=JSON.stringify(e);const r=await Object(d.e)(e,null,t);await Promise.all([this._setGeometryFilter(r),this._setIdFilter(r),this._setAttributeFilter(r),this._setTimeFilter(r)])}async _setAttributeFilter(e){if(!e||!e.where)return this._clause=null,void(this.where=null);this._clause=await async function(e,t){const n=await r.e(11).then(r.bind(null,358));try{const r=n.WhereClause.create(e,t);if(!r.isStandardized){const e=new i.a("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",r);f.error(e)}return e=>{const t=e.readArcadeFeature();return r.testFeature(t,_)}}catch(s){return f.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",e),e=>!0}}(e.where,this._serviceInfo.fieldsIndex),this.where=e.where}_setIdFilter(e){this._idsToShow=e&&e.objectIds&&new Set(e.objectIds),this._idsToHide=e&&e.hiddenIds&&new Set(e.hiddenIds),this.objectIds=e&&e.objectIds}async _setGeometryFilter(e){if(!e||!e.geometry)return this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null);const t=e.geometry,r=e.spatialRel||"esriSpatialRelIntersects",i=await Object(u.c)(r,t,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);Object(o.a)(this._geometryBounds,t),this._spatialQueryOperator=i,this.geometry=t,this.spatialRel=r}_setTimeFilter(e){if(this.timeExtent=this._timeOperator=null,e&&e.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=e.timeExtent,this._timeOperator=Object(c.b)(this._serviceInfo.timeInfo,e.timeExtent,h.b);else{const t=new i.a("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);p.error(t)}}_applyFilter(e){return this._filterByGeometry(e)&&this._filterById(e)&&this._filterByTime(e)&&this._filterByExpression(e)}_filterByExpression(e){return!this.where||this._clause(e)}_filterById(e){return(!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(e.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(e.getObjectId()))}_filterByGeometry(e){if(!this.geometry)return!0;const t=e.readHydratedGeometry();return!!t&&this._spatialQueryOperator(t)}_filterByTime(e){return!Object(s.k)(this._timeOperator)||this._timeOperator(e)}_resetAllHiddenIds(){const e=[];return this._idToVisibility.forEach(((t,r)=>{1&t||(this._idToVisibility.set(r,1),e.push(r))})),e}}},785:function(e,t,r){"use strict";function i(e,t){if(!e)return null;const r=t.featureAdapter,{startTimeField:i,endTimeField:n}=e;let s=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;if(i&&n)t.forEach((e=>{const t=r.getAttribute(e,i),o=r.getAttribute(e,n);null==t||isNaN(t)||(s=Math.min(s,t)),null==o||isNaN(o)||(a=Math.max(a,o))}));else{const e=i||n;t.forEach((t=>{const i=r.getAttribute(t,e);null==i||isNaN(i)||(s=Math.min(s,i),a=Math.max(a,i))}))}return{start:s,end:a}}function n(e,t,r){if(!t||!e)return null;const{startTimeField:i,endTimeField:n}=e;if(!i&&!n)return null;const{start:s,end:a}=t;return null===s&&null===a?null:void 0===s&&void 0===a?()=>!1:i&&n?function(e,t,r,i,n){return null!=i&&null!=n?s=>{const a=e.getAttribute(s,t),o=e.getAttribute(s,r);return(null==a||a<=n)&&(null==o||o>=i)}:null!=i?t=>{const n=e.getAttribute(t,r);return null==n||n>=i}:null!=n?r=>{const i=e.getAttribute(r,t);return null==i||i<=n}:void 0}(r,i,n,s,a):function(e,t,r,i){return null!=r&&null!=i&&r===i?i=>e.getAttribute(i,t)===r:null!=r&&null!=i?n=>{const s=e.getAttribute(n,t);return s>=r&&s<=i}:null!=r?i=>e.getAttribute(i,t)>=r:null!=i?r=>e.getAttribute(r,t)<=i:void 0}(r,i||n,s,a)}r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return n}))},923:function(e,t,r){"use strict";r.d(t,"a",(function(){return S})),r.d(t,"b",(function(){return x})),r.d(t,"c",(function(){return b}));var i=r(83),n=r(271),s=r(235);var a=r(95),o=r(100);function u(e,t){return e?t?4:3:t?3:2}function c(e,t,r,i,n){if(!e)return!1;const s=u(t,r),{coords:a,lengths:o}=e;let c=!1,l=0;for(const u of o)c=d(c,a,s,l,u,i,n),l+=u*s;return c}function d(e,t,r,i,n,s,a){let o=e,u=i;for(let c=i,d=i+n*r;c<d;c+=r){u=c+r,u===d&&(u=i);const e=t[c],n=t[c+1],l=t[u],h=t[u+1];(n<a&&h>=a||h<a&&n>=a)&&e+(a-n)/(h-n)*(l-e)<s&&(o=!o)}return o}var l=r(157),h=r(159),f=r(391),_=r(678);const p="feature-store:unsupported-query",m={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},g={esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},I={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},y={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1};function b(e,t,i,o,d){if(Object(a.g)(t)&&"esriGeometryPoint"===i&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){const e=Object(l.g)(new h.a,t,!1,!1);return Promise.resolve((t=>function(e,t,r,i){return c(e,t,r,i.coords[0],i.coords[1])}(e,!1,!1,t)))}if(Object(a.g)(t)&&"esriGeometryMultipoint"===i){const r=Object(l.g)(new h.a,t,!1,!1);if("esriSpatialRelContains"===e)return Promise.resolve((e=>function(e,t,r,i,n,s){const a=u(n,s),{coords:o,lengths:d}=i;if(!d)return!1;for(let u=0,l=0;u<d.length;u++,l+=a)if(!c(e,t,r,o[l],o[l+1]))return!1;return!0}(r,!1,!1,e,o,d)))}if(Object(a.d)(t)&&"esriGeometryPoint"===i&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return Promise.resolve((e=>Object(n.e)(t,Object(_.c)(i,o,d,e))));if(Object(a.d)(t)&&"esriGeometryMultipoint"===i&&"esriSpatialRelContains"===e)return Promise.resolve((e=>Object(n.d)(t,Object(_.c)(i,o,d,e))));if(Object(a.d)(t)&&"esriSpatialRelIntersects"===e){const e=function(e){return"mesh"===e?s.a:Object(s.c)(e)}(i);return Promise.resolve((r=>e(t,Object(_.c)(i,o,d,r))))}return Promise.all([r.e(8),r.e(29)]).then(r.bind(null,796)).then((r=>{const n=r[m[e]].bind(null,t.spatialReference,t);return e=>n(Object(_.c)(i,o,d,e))}))}async function x(e,t,r){const{spatialRel:n,geometry:s}=e;if(s){if(!0!==g[n])throw new i.a(p,"Unsupported query spatial relationship",{query:e});if(Object(o.j)(s.spatialReference)&&Object(o.j)(r)){if(!function(e){return!0===I[Object(a.c)(e)]}(s))throw new i.a(p,"Unsupported query geometry type",{query:e});if(!function(e){return!0===y[e]}(t))throw new i.a(p,"Unsupported layer geometry type",{query:e});if(e.outSR)return Object(f.a)(e.geometry&&e.geometry.spatialReference,e.outSR)}}}function S(e){if(Object(a.d)(e))return!0;if(Object(a.g)(e)){for(const t of e.rings){if(5!==t.length)return!1;if(t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1}return!0}return!1}},962:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(413);class n extends i.a{constructor(e,t){super(i.a.createInstance()),this._currentIndex=-1,this._reader=e,this._indices=t}static from(e,t){return new n(e.copy(),t)}get hasNext(){return this._currentIndex+1<this._indices.length}getSize(){return this._indices.length}getCursor(){return this.copy()}copy(){const e=new n(this._reader.copy(),this._indices);return e._currentIndex=this._currentIndex,e}next(){for(;this._nextIndex()&&!this._reader._getExists(););return this._currentIndex<this._indices.length}_nextIndex(){return++this._currentIndex<this._indices.length&&(this._reader.setIndex(this._indices[this._currentIndex]),!0)}setArcadeSpatialReference(e){this._reader.setArcadeSpatialReference(e)}attachStorage(e){this._reader.attachStorage(e)}get geometryType(){return this._reader.geometryType}get hasFeatures(){return this._reader.hasFeatures}get exceededTransferLimit(){return this._reader.exceededTransferLimit}get hasZ(){return this._reader.hasZ}get hasM(){return this._reader.hasM}getStorage(){return this._reader.getStorage()}getComputedNumeric(e){return this._reader.getComputedNumericAtIndex(0)}setComputedNumeric(e,t){return this._reader.setComputedNumericAtIndex(t,0)}getComputedString(e){return this._reader.getComputedStringAtIndex(0)}setComputedString(e,t){return this._reader.setComputedStringAtIndex(0,t)}getComputedNumericAtIndex(e){return this._reader.getComputedNumericAtIndex(e)}setComputedNumericAtIndex(e,t){this._reader.setComputedNumericAtIndex(e,t)}getComputedStringAtIndex(e){return this._reader.getComputedStringAtIndex(e)}setComputedStringAtIndex(e,t){return this._reader.setComputedStringAtIndex(e,t)}transform(e,t,r,i){const n=this.copy();return n._reader=this._reader.transform(e,t,r,i),n}readAttribute(e,t=!1){return this._reader.readAttribute(e,t)}readAttributes(){return this._reader.readAttributes()}joinAttributes(e){return this._reader.joinAttributes(e)}readArcadeFeature(){return this._reader.readArcadeFeature()}geometry(){return this._reader.geometry()}field(e){return this.readAttribute(e,!0)}hasField(e){return this._reader.hasField(e)}setField(e,t){return this._reader.setField(e,t)}keys(){return this._reader.keys()}castToText(){return this._reader.castToText()}getQuantizationTransform(){return this._reader.getQuantizationTransform()}getAttributeHash(){return this._reader.getAttributeHash()}getObjectId(){return this._reader.getObjectId()}getDisplayId(){return this._reader.getDisplayId()}setDisplayId(e){return this._reader.setDisplayId(e)}getGroupId(){return this._reader.getGroupId()}setGroupId(e){return this._reader.setGroupId(e)}getXHydrate(){return this._reader.getXHydrate()}getYHydrate(){return this._reader.getYHydrate()}getX(){return this._reader.getX()}getY(){return this._reader.getY()}setIndex(e){return this._reader.setIndex(e)}getIndex(){return this._reader.getIndex()}readLegacyFeature(){return this._reader.readLegacyFeature()}readOptimizedFeature(){return this._reader.readOptimizedFeature()}readLegacyPointGeometry(){return this._reader.readLegacyPointGeometry()}readLegacyGeometry(){return this._reader.readLegacyGeometry()}readLegacyCentroid(){return this._reader.readLegacyCentroid()}readGeometryArea(){return this._reader.readGeometryArea()}readUnquantizedGeometry(){return this._reader.readUnquantizedGeometry()}readHydratedGeometry(){return this._reader.readHydratedGeometry()}readGeometry(){return this._reader.readGeometry()}readCentroid(){return this._reader.readCentroid()}_readAttribute(e,t){throw new Error("Error: Should not be called. Underlying _reader should be used instead")}_readAttributes(){throw new Error("Error: Should not be called. Underlying _reader should be used instead")}}},989:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var i=r(75),n=r(81),s=r(314),a=r(147),o=r(76);var u=function(e,t,r){e.referencesGeometry();const i=t.readArcadeFeature();try{return e.evaluate({...r,$feature:i})}catch(n){return o.a.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",n),null}};const c=r.e(266).then(r.bind(null,1278));class d{constructor(e,t){this._canCacheExpressionValue=!1,this._sourceInfo=e,this._bitsets={computed:t.getBitset(t.createBitset())}}invalidate(){this._bitsets.computed.clear()}async updateSchema(e,t){const r=Object(s.a)(this._schema,t);if(this._schema=t,!t||Object(n.j)(r)||!Object(s.b)(r,"attributes"))return;Object(i.a)("esri-2d-update-debug")&&console.debug("Applying Update - Store:",r),this._bitsets.computed.clear(),e.targets[t.name]=!0;const a=t.attributes,o=[],u=[];for(const i in a){const e=a[i];switch(e.type){case"field":break;case"expression":o.push(this._createArcadeComputedField(e));break;case"label-expression":o.push(this._createLabelArcadeComputedField(e));break;case"statistic":u.push(e)}}this._computedFields=await Promise.all(o),this._canCacheExpressionValue=!this._computedFields.some((e=>"expression"===e.type&&e.expression.referencesScale())),this._statisticFields=u}setComputedAttributes(e,t,r,i){const n=this._bitsets.computed;if(!this._canCacheExpressionValue||!n.has(r)){n.set(r);for(const n of this._computedFields){const s=this._evaluateField(t,n,i);switch(n.resultType){case"numeric":e.setComputedNumericAtIndex(r,n.fieldIndex,s);break;case"string":e.setComputedStringAtIndex(r,n.fieldIndex,s)}}}}async _createArcadeComputedField(e){const t=this._sourceInfo.spatialReference,r=this._sourceInfo.fieldsIndex;return{...e,expression:await Object(a.d)(e.valueExpression,t,r)}}async _createLabelArcadeComputedField(e){const t=this._sourceInfo.spatialReference,r=this._sourceInfo.fieldsIndex,{createLabelFunction:i}=await c,n=await i(e.label,r,t);return{...e,builder:n}}_evaluateField(e,t,r){switch(t.type){case"label-expression":{const r=e.readArcadeFeature();return t.builder.evaluate(r)||""}case"expression":{const{expression:i}=t;return u(i,e,{$view:{scale:r}})}}}}}}]);
//# sourceMappingURL=132.07b539cf.chunk.js.map