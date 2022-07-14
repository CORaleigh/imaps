"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[9818],{49818:(e,t,r)=>{r.r(t),r.d(t,{default:()=>x});var o,n=r(27366),i=r(59486),s=r(52639),a=r(43404),l=r(46784),p=r(84652),y=r(92026),u=r(49861),f=(r(25243),r(38511)),c=r(69912),h=r(31201),m=r(78952),d=r(77981),g=r(83040);const _=new a.X({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let w=o=class extends l.wq{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){const r=m.Z.fromJSON(t.spatialReference),o=[];for(let n=0;n<e.length;n++){const t=e[n],i=s.Z.fromJSON(t),a=t.geometry&&t.geometry.spatialReference;(0,y.pC)(i.geometry)&&!a&&(i.geometry.spatialReference=r);const l=t.aggregateGeometries,p=i.aggregateGeometries;if(l&&(0,y.pC)(p))for(const e in p){const t=p[e],o=l[e]?.spatialReference;(0,y.pC)(t)&&!o&&(t.spatialReference=r)}o.push(i)}return o}writeGeometryType(e,t,r,o){if(e)return void _.write(e,t,r,o);const{features:n}=this;if(n)for(const i of n)if(i&&(0,y.pC)(i.geometry))return void _.write(i.geometry.type,t,r,o)}readQueryGeometry(e,t){if(!e)return null;const r=!!e.spatialReference,o=(0,d.im)(e);return!r&&t.spatialReference&&(o.spatialReference=m.Z.fromJSON(t.spatialReference)),o}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:r}=this;if(r)for(const o of r)if(o&&(0,y.pC)(o.geometry)&&o.geometry.spatialReference)return void(t.spatialReference=o.geometry.spatialReference.toJSON())}clone(){return new o(this.cloneProperties())}cloneProperties(){return(0,p.d9)({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(e){const t=this.write();if(t.features&&Array.isArray(e)&&e.length>0)for(let r=0;r<t.features.length;r++){const o=t.features[r];if(o.geometry){const t=e&&e[r];o.geometry=t&&t.toJSON()||o.geometry}}return t}quantize(e){const{scale:[t,r],translate:[o,n]}=e,i=this.features,s=this._getQuantizationFunction(this.geometryType,(e=>Math.round((e-o)/t)),(e=>Math.round((n-e)/r)));for(let a=0,l=i.length;a<l;a++)s((0,y.Wg)(i[a].geometry))||(i.splice(a,1),a--,l--);return this.transform=e,this}unquantize(){const{geometryType:e,features:t,transform:r}=this;if(!r)return this;const{translate:[o,n],scale:[i,s]}=r,a=this._getHydrationFunction(e,(e=>e*i+o),(e=>n-e*s));for(const{geometry:l}of t)(0,y.pC)(l)&&a(l);return this.transform=null,this}_quantizePoints(e,t,r){let o,n;const i=[];for(let s=0,a=e.length;s<a;s++){const a=e[s];if(s>0){const e=t(a[0]),s=r(a[1]);e===o&&s===n||(i.push([e-o,s-n]),o=e,n=s)}else o=t(a[0]),n=r(a[1]),i.push([o,n])}return i.length>0?i:null}_getQuantizationFunction(e,t,r){return"point"===e?e=>(e.x=t(e.x),e.y=r(e.y),e):"polyline"===e||"polygon"===e?e=>{const o=(0,d.oU)(e)?e.rings:e.paths,n=[];for(let i=0,s=o.length;i<s;i++){const e=o[i],s=this._quantizePoints(e,t,r);s&&n.push(s)}return n.length>0?((0,d.oU)(e)?e.rings=n:e.paths=n,e):null}:"multipoint"===e?e=>{const o=this._quantizePoints(e.points,t,r);return o.length>0?(e.points=o,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,r){return"point"===e?e=>{e.x=t(e.x),e.y=r(e.y)}:"polyline"===e||"polygon"===e?e=>{const o=(0,d.oU)(e)?e.rings:e.paths;let n,i;for(let s=0,a=o.length;s<a;s++){const e=o[s];for(let o=0,s=e.length;o<s;o++){const s=e[o];o>0?(n+=s[0],i+=s[1]):(n=s[0],i=s[1]),s[0]=t(n),s[1]=r(i)}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax)}:"multipoint"===e?e=>{const o=e.points;let n,i;for(let s=0,a=o.length;s<a;s++){const e=o[s];s>0?(n+=e[0],i+=e[1]):(n=e[0],i=e[1]),e[0]=t(n),e[1]=r(i)}}:void 0}};(0,n._)([(0,u.Cb)({type:String,json:{write:!0}})],w.prototype,"displayFieldName",void 0),(0,n._)([(0,u.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],w.prototype,"exceededTransferLimit",void 0),(0,n._)([(0,u.Cb)({type:[s.Z],json:{write:!0}})],w.prototype,"features",void 0),(0,n._)([(0,f.r)("features")],w.prototype,"readFeatures",null),(0,n._)([(0,u.Cb)({type:[g.Z],json:{write:!0}})],w.prototype,"fields",void 0),(0,n._)([(0,u.Cb)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:_.read}}})],w.prototype,"geometryType",void 0),(0,n._)([(0,h.c)("geometryType")],w.prototype,"writeGeometryType",null),(0,n._)([(0,u.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],w.prototype,"hasM",void 0),(0,n._)([(0,u.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],w.prototype,"hasZ",void 0),(0,n._)([(0,u.Cb)({types:i.qM,json:{write:!0}})],w.prototype,"queryGeometry",void 0),(0,n._)([(0,f.r)("queryGeometry")],w.prototype,"readQueryGeometry",null),(0,n._)([(0,u.Cb)({type:m.Z,json:{write:!0}})],w.prototype,"spatialReference",void 0),(0,n._)([(0,h.c)("spatialReference")],w.prototype,"writeSpatialReference",null),(0,n._)([(0,u.Cb)({json:{write:!0}})],w.prototype,"transform",void 0),w=o=(0,n._)([(0,c.j)("esri.rest.support.FeatureSet")],w),w.prototype.toJSON.isDefaultToJSON=!0;const x=w}}]);
//# sourceMappingURL=9818.0367560b.chunk.js.map