(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[179],{188:function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));class i{constructor(e=[],t=[],s=!1){this.lengths=null!=e?e:[],this.coords=null!=t?t:[],this.hasIndeterminateRingOrder=s}get isPoint(){return 0===this.lengths.length}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce(((e,t)=>e+t))}forEachVertex(e){let t=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(let s=0;s<this.lengths.length;s++){const i=this.lengths[s];for(let s=0;s<i;s++)e(this.coords[2*(s+t)],this.coords[2*(s+t)+1]);t+=i}}clone(e){return e?(e.set(this.coords),new i(this.lengths.slice(),e,this.hasIndeterminateRingOrder)):new i(this.lengths.slice(),this.coords.slice(),this.hasIndeterminateRingOrder)}}},261:function(e,t,s){"use strict";s.d(t,"a",(function(){return o})),s.d(t,"b",(function(){return n})),s.d(t,"c",(function(){return r}));var i=s(85);class n{constructor(e=null,t={},s,i){this.geometry=e,this.attributes=t,this.centroid=s,this.objectId=i,this.displayId=0,this.geohashX=0,this.geohashY=0}weakClone(){const e=new n(this.geometry,this.attributes,this.centroid,this.objectId);return e.displayId=this.displayId,e.geohashX=this.geohashX,e.geohashY=this.geohashY,e}}function r(e){return!(Object(i.k)(e.geometry)||!e.geometry.coords||!e.geometry.coords.length)}class o extends n{}},269:function(e,t,s){"use strict";s.d(t,"a",(function(){return o}));var i=s(85),n=s(114),r=s(110);function o(e,t,s){if(Object(i.k)(t)||Object(i.k)(s)||s.vcsWkid||Object(r.d)(t,s))return null;const o=Object(n.f)(t)/Object(n.f)(s);if(1===o)return null;switch(e){case"point":case"esriGeometryPoint":return e=>function(e,t){e&&null!=e.z&&(e.z*=t)}(e,o);case"polyline":case"esriGeometryPolyline":return e=>function(e,t){if(e)for(const s of e.paths)for(const e of s)e.length>2&&(e[2]*=t)}(e,o);case"polygon":case"esriGeometryPolygon":return e=>function(e,t){if(e)for(const s of e.rings)for(const e of s)e.length>2&&(e[2]*=t)}(e,o);case"multipoint":case"esriGeometryMultipoint":return e=>function(e,t){if(e)for(const s of e.points)s.length>2&&(s[2]*=t)}(e,o);case"extent":case"esriGeometryExtent":return e=>function(e,t){e&&null!=e.zmin&&null!=e.zmax&&(e.zmin*=t,e.zmax*=t)}(e,o);default:return null}}},289:function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));var i=s(85),n=s(269);function r(e,t,s){if(!s||!s.features||!s.hasZ)return;const r=Object(n.a)(s.geometryType,t,e.outSpatialReference);if(!Object(i.k)(r))for(const i of s.features)r(i.geometry)}},334:function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));class i{constructor(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}weakClone(){const e=new i;return e.objectIdFieldName=this.objectIdFieldName,e.globalIdFieldName=this.globalIdFieldName,e.geohashFieldName=this.geohashFieldName,e.geometryProperties=this.geometryProperties,e.geometryType=this.geometryType,e.spatialReference=this.spatialReference,e.hasZ=this.hasZ,e.hasM=this.hasM,e.features=this.features,e.fields=this.fields,e.transform=this.transform,e.exceededTransferLimit=this.exceededTransferLimit,e.uniqueIdField=this.uniqueIdField,e.queryGeometry=this.queryGeometry,e.queryGeometryType=this.queryGeometryType,e}}}}]);
//# sourceMappingURL=179.ccb20e7e.chunk.js.map