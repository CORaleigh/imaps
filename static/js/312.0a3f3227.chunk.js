(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[312],{142:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return O}));var r=o(79),n=o(97),i=o(122),s=o(90),a=o(86),l=o(85),p=o(81),c=(o(84),o(82),o(83),o(93)),y=o(80),u=o(92),f=o(94),m=o(98),h=o(153);const b=new s.a({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let j=class extends a.a{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){const o=f.a.fromJSON(t.spatialReference),r=[];for(let n=0;n<e.length;n++){const t=e[n],s=i.a.fromJSON(t),a=t.geometry&&t.geometry.spatialReference;Object(l.l)(s.geometry)&&!a&&(s.geometry.spatialReference=o),r.push(s)}return r}writeGeometryType(e,t,o,r){if(e)return void b.write(e,t,o,r);const{features:n}=this;if(n)for(const i of n)if(i&&Object(l.l)(i.geometry))return void b.write(i.geometry.type,t,o,r)}readQueryGeometry(e,t){if(!e)return null;const o=!!e.spatialReference,r=Object(m.a)(e);return!o&&t.spatialReference&&(r.spatialReference=f.a.fromJSON(t.spatialReference)),r}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:o}=this;if(o)for(const r of o)if(r&&Object(l.l)(r.geometry)&&r.geometry.spatialReference)return void(t.spatialReference=r.geometry.spatialReference.toJSON())}toJSON(e){const t=this.write();if(t.features&&Array.isArray(e)&&e.length>0)for(let o=0;o<t.features.length;o++){const r=t.features[o];if(r.geometry){const t=e&&e[o];r.geometry=t&&t.toJSON()||r.geometry}}return t}quantize(e){const{scale:[t,o],translate:[r,n]}=e,i=this.features,s=this._getQuantizationFunction(this.geometryType,(e=>Math.round((e-r)/t)),(e=>Math.round((n-e)/o)));for(let a=0,p=i.length;a<p;a++)s(Object(l.t)(i[a].geometry))||(i.splice(a,1),a--,p--);return this.transform=e,this}unquantize(){const{geometryType:e,features:t,transform:o}=this;if(!o)return this;const{translate:[r,n],scale:[i,s]}=o,a=this._getHydrationFunction(e,(e=>e*i+r),(e=>n-e*s));for(const{geometry:p}of t)Object(l.l)(p)&&a(p);return this.transform=null,this}_quantizePoints(e,t,o){let r,n;const i=[];for(let s=0,a=e.length;s<a;s++){const a=e[s];if(s>0){const e=t(a[0]),s=o(a[1]);e===r&&s===n||(i.push([e-r,s-n]),r=e,n=s)}else r=t(a[0]),n=o(a[1]),i.push([r,n])}return i.length>0?i:null}_getQuantizationFunction(e,t,o){return"point"===e?e=>(e.x=t(e.x),e.y=o(e.y),e):"polyline"===e||"polygon"===e?e=>{const r=Object(m.g)(e)?e.rings:e.paths,n=[];for(let i=0,s=r.length;i<s;i++){const e=r[i],s=this._quantizePoints(e,t,o);s&&n.push(s)}return n.length>0?(Object(m.g)(e)?e.rings=n:e.paths=n,e):null}:"multipoint"===e?e=>{const r=this._quantizePoints(e.points,t,o);return r.length>0?(e.points=r,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,o){return"point"===e?e=>{e.x=t(e.x),e.y=o(e.y)}:"polyline"===e||"polygon"===e?e=>{const r=Object(m.g)(e)?e.rings:e.paths;let n,i;for(let s=0,a=r.length;s<a;s++){const e=r[s];for(let r=0,s=e.length;r<s;r++){const s=e[r];r>0?(n+=s[0],i+=s[1]):(n=s[0],i=s[1]),s[0]=t(n),s[1]=o(i)}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=o(e.ymin),e.xmax=t(e.xmax),e.ymax=o(e.ymax)}:"multipoint"===e?e=>{const r=e.points;let n,i;for(let s=0,a=r.length;s<a;s++){const e=r[s];s>0?(n+=e[0],i+=e[1]):(n=e[0],i=e[1]),e[0]=t(n),e[1]=o(i)}}:void 0}};Object(r.a)([Object(p.b)({type:String,json:{write:!0}})],j.prototype,"displayFieldName",void 0),Object(r.a)([Object(p.b)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],j.prototype,"exceededTransferLimit",void 0),Object(r.a)([Object(p.b)({type:[i.a],json:{write:!0}})],j.prototype,"features",void 0),Object(r.a)([Object(c.a)("features")],j.prototype,"readFeatures",null),Object(r.a)([Object(p.b)({type:[h.a],json:{write:!0}})],j.prototype,"fields",void 0),Object(r.a)([Object(p.b)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:b.read}}})],j.prototype,"geometryType",void 0),Object(r.a)([Object(u.a)("geometryType")],j.prototype,"writeGeometryType",null),Object(r.a)([Object(p.b)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],j.prototype,"hasM",void 0),Object(r.a)([Object(p.b)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],j.prototype,"hasZ",void 0),Object(r.a)([Object(p.b)({types:n.a,json:{write:!0}})],j.prototype,"queryGeometry",void 0),Object(r.a)([Object(c.a)("queryGeometry")],j.prototype,"readQueryGeometry",null),Object(r.a)([Object(p.b)({type:f.a,json:{write:!0}})],j.prototype,"spatialReference",void 0),Object(r.a)([Object(u.a)("spatialReference")],j.prototype,"writeSpatialReference",null),Object(r.a)([Object(p.b)({json:{write:!0}})],j.prototype,"transform",void 0),j=Object(r.a)([Object(y.a)("esri.rest.support.FeatureSet")],j),j.prototype.toJSON.isDefaultToJSON=!0;const O=j}}]);
//# sourceMappingURL=312.0a3f3227.chunk.js.map