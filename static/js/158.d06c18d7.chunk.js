(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[158],{159:function(e,t,s){"use strict";class i{constructor(e=[],t=[],s=!1){this.lengths=null!=e?e:[],this.coords=null!=t?t:[],this.hasIndeterminateRingOrder=s}get isPoint(){return 0===this.lengths.length}forEachVertex(e){let t=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(let s=0;s<this.lengths.length;s++){const i=this.lengths[s];for(let s=0;s<i;s++)e(this.coords[2*(s+t)],this.coords[2*(s+t)+1]);t+=i}}clone(){return new i(this.lengths.slice(),this.coords.slice(),this.hasIndeterminateRingOrder)}}t.a=i},226:function(e,t,s){"use strict";s.d(t,"a",(function(){return r})),s.d(t,"b",(function(){return l}));var i=s(81),n=s(109),o=s(100);function r(e,t,s){if(Object(i.j)(t)||Object(i.j)(s)||s.vcsWkid||Object(o.c)(t,s))return null;const r=Object(n.g)(t)/Object(n.g)(s);if(1===r)return null;switch(e){case"point":case"esriGeometryPoint":return e=>function(e,t){e&&null!=e.z&&(e.z*=t)}(e,r);case"polyline":case"esriGeometryPolyline":return e=>function(e,t){if(e)for(const s of e.paths)for(const e of s)e.length>2&&(e[2]*=t)}(e,r);case"polygon":case"esriGeometryPolygon":return e=>function(e,t){if(e)for(const s of e.rings)for(const e of s)e.length>2&&(e[2]*=t)}(e,r);case"multipoint":case"esriGeometryMultipoint":return e=>function(e,t){if(e)for(const s of e.points)s.length>2&&(s[2]*=t)}(e,r);default:return null}}function h(e,t,s){if(null==e.hasM||e.hasZ)for(const i of t)for(const e of i)e.length>2&&(e[2]*=s)}function l(e,t,s){if(!e&&!t||!s)return;const i=Object(n.g)(s);c(e,s,i),c(t,s,i)}function c(e,t,s){if(e)for(const i of e)a(i.geometry,t,s)}function a(e,t,s){if(!e||!e.spatialReference||Object(o.c)(e.spatialReference,t))return;const i=Object(n.g)(e.spatialReference)/s;if(1!==i)if("x"in e)null!=e.z&&(e.z*=i);else if("rings"in e)h(e,e.rings,i);else if("paths"in e)h(e,e.paths,i);else if("points"in e&&(null==e.hasM||e.hasZ))for(const n of e.points)n.length>2&&(n[2]*=i)}},248:function(e,t,s){"use strict";class i{constructor(e=null,t={},s,i){this.displayId=0,this.geohashX=0,this.geohashY=0,this.geometry=e,t&&(this.attributes=t),s&&(this.centroid=s),null!=i&&(this.objectId=i)}get hasGeometry(){return!(!this.geometry||!this.geometry.coords||!this.geometry.coords.length)}weakClone(){const e=new i(this.geometry,this.attributes,this.centroid,this.objectId);return e.displayId=this.displayId,e.geohashX=this.geohashX,e.geohashY=this.geohashY,e}}t.a=i},253:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var i=s(226);function n(e,t,s){if(!s||!s.features||!s.hasZ)return;const n=Object(i.a)(s.geometryType,t,e.outSpatialReference);if(n)for(const i of s.features)n(i.geometry)}},273:function(e,t,s){"use strict";class i{constructor(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}weakClone(){const e=new i;return e.objectIdFieldName=this.objectIdFieldName,e.globalIdFieldName=this.globalIdFieldName,e.geohashFieldName=this.geohashFieldName,e.geometryProperties=this.geometryProperties,e.geometryType=this.geometryType,e.spatialReference=this.spatialReference,e.hasZ=this.hasZ,e.hasM=this.hasM,e.features=this.features,e.fields=this.fields,e.transform=this.transform,e.exceededTransferLimit=this.exceededTransferLimit,e.uniqueIdField=this.uniqueIdField,e.queryGeometry=this.queryGeometry,e.queryGeometryType=this.queryGeometryType,e}}t.a=i}}]);
//# sourceMappingURL=158.d06c18d7.chunk.js.map