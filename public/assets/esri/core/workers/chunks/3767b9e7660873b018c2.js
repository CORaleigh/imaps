"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3215],{6570:(t,n,e)=>{e.d(n,{Z:()=>g});var i,r=e(43697),s=e(19153),a=e(5600),h=(e(75215),e(67676),e(80442),e(52011)),o=e(9361),l=e(94139),m=e(82971),u=e(54102),c=e(87416),x=e(8744),f=e(40488);function p(t,n,e){return null==n?e:null==e?n:t(n,e)}let y=i=class extends o.Z{constructor(...t){super(...t),this.type="extent",this.xmin=0,this.ymin=0,this.mmin=void 0,this.zmin=void 0,this.xmax=0,this.ymax=0,this.mmax=void 0,this.zmax=void 0}normalizeCtorArgs(t,n,e,i,r){return function(t){return t&&("esri.geometry.SpatialReference"===t.declaredClass||null!=t.wkid)}(t)?{spatialReference:t,xmin:0,ymin:0,xmax:0,ymax:0}:"object"==typeof t?(t.spatialReference=null==t.spatialReference?m.Z.WGS84:t.spatialReference,t):{xmin:t,ymin:n,xmax:e,ymax:i,spatialReference:r??m.Z.WGS84}}static fromBounds(t,n){return new i({xmin:t[0],ymin:t[1],xmax:t[2],ymax:t[3],spatialReference:n})}static fromPoint(t){return new i({xmin:t.x,ymin:t.y,zmin:t.z,xmax:t.x,ymax:t.y,zmax:t.z,spatialReference:t.spatialReference})}get cache(){return this.commitProperty("xmin"),this.commitProperty("ymin"),this.commitProperty("zmin"),this.commitProperty("mmin"),this.commitProperty("xmax"),this.commitProperty("ymax"),this.commitProperty("zmax"),this.commitProperty("mmax"),this.commitProperty("spatialReference"),{}}get center(){const t=new l.Z({x:.5*(this.xmin+this.xmax),y:.5*(this.ymin+this.ymax),spatialReference:this.spatialReference});return this.hasZ&&(t.z=.5*(this.zmin+this.zmax)),this.hasM&&(t.m=.5*(this.mmin+this.mmax)),t}get extent(){return this.clone()}get hasM(){return null!=this.mmin&&null!=this.mmax}get hasZ(){return null!=this.zmin&&null!=this.zmax}get height(){return Math.abs(this.ymax-this.ymin)}get width(){return Math.abs(this.xmax-this.xmin)}centerAt(t){const n=this.center;return null!=t.z&&this.hasZ?this.offset(t.x-n.x,t.y-n.y,t.z-n.z):this.offset(t.x-n.x,t.y-n.y)}clone(){const t=new i;return t.xmin=this.xmin,t.ymin=this.ymin,t.xmax=this.xmax,t.ymax=this.ymax,t.spatialReference=this.spatialReference,null!=this.zmin&&(t.zmin=this.zmin,t.zmax=this.zmax),null!=this.mmin&&(t.mmin=this.mmin,t.mmax=this.mmax),t}contains(t){if(!t)return!1;const n=this.spatialReference,e=t.spatialReference;return n&&e&&!n.equals(e)&&(0,f.Q8)(n,e)&&(t=n.isWebMercator?(0,f.$)(t):(0,f.Sx)(t,!0)),"point"===t.type?(0,u.aV)(this,t):"extent"===t.type&&(0,u.uP)(this,t)}equals(t){if(this===t)return!0;if(null==t)return!1;const n=this.spatialReference,e=t.spatialReference;return n&&e&&!n.equals(e)&&(0,f.Q8)(n,e)&&(t=n.isWebMercator?(0,f.$)(t):(0,f.Sx)(t,!0)),this.xmin===t.xmin&&this.ymin===t.ymin&&this.zmin===t.zmin&&this.mmin===t.mmin&&this.xmax===t.xmax&&this.ymax===t.ymax&&this.zmax===t.zmax&&this.mmax===t.mmax}expand(t){const n=.5*(1-t),e=this.width*n,i=this.height*n;if(this.xmin+=e,this.ymin+=i,this.xmax-=e,this.ymax-=i,this.hasZ){const t=(this.zmax-this.zmin)*n;this.zmin+=t,this.zmax-=t}if(this.hasM){const t=(this.mmax-this.mmin)*n;this.mmin+=t,this.mmax-=t}return this}intersects(t){if(null==t)return!1;"mesh"===t.type&&(t=t.extent);const n=this.spatialReference,e=t.spatialReference;return n&&e&&!(0,x.fS)(n,e)&&(0,f.Q8)(n,e)&&(t=n.isWebMercator?(0,f.$)(t):(0,f.Sx)(t,!0)),(0,c.IY)(t.type)(this,t)}normalize(){const t=this._normalize(!1,!0);return Array.isArray(t)?t:[t]}offset(t,n,e){return this.xmin+=t,this.ymin+=n,this.xmax+=t,this.ymax+=n,null!=e&&(this.zmin+=e,this.zmax+=e),this}shiftCentralMeridian(){return this._normalize(!0)}union(t){return this===t||(this.xmin=Math.min(this.xmin,t.xmin),this.ymin=Math.min(this.ymin,t.ymin),this.xmax=Math.max(this.xmax,t.xmax),this.ymax=Math.max(this.ymax,t.ymax),(this.hasZ||t.hasZ)&&(this.zmin=p(Math.min,this.zmin,t.zmin),this.zmax=p(Math.max,this.zmax,t.zmax)),(this.hasM||t.hasM)&&(this.mmin=p(Math.min,this.mmin,t.mmin),this.mmax=p(Math.max,this.mmax,t.mmax))),this}intersection(t){return this===t?this:null!=t&&this.intersects(t)?(this.xmin=Math.max(this.xmin,t.xmin),this.ymin=Math.max(this.ymin,t.ymin),this.xmax=Math.min(this.xmax,t.xmax),this.ymax=Math.min(this.ymax,t.ymax),(this.hasZ||t.hasZ)&&(this.zmin=p(Math.max,this.zmin,t.zmin),this.zmax=p(Math.min,this.zmax,t.zmax)),(this.hasM||t.hasM)&&(this.mmin=p(Math.max,this.mmin,t.mmin),this.mmax=p(Math.min,this.mmax,t.mmax)),this):null}toJSON(t){return this.write({},t)}_shiftCM(t=(0,x.C5)(this.spatialReference)){if(!t||!this.spatialReference)return this;const n=this.spatialReference,e=this._getCM(t);if(e){const i=n.isWebMercator?(0,f.Sx)(e):e;this.xmin-=e.x,this.xmax-=e.x,n.isWebMercator||(i.x=this._normalizeX(i.x,t).x),this.spatialReference=new m.Z((0,s.gx)((n.isWGS84?t.altTemplate:null)??t.wkTemplate,{Central_Meridian:i.x}))}return this}_getCM(t){let n=null;const[e,i]=t.valid,r=this.xmin,s=this.xmax;return r>=e&&r<=i&&s>=e&&s<=i||(n=this.center),n}_normalize(t,n,e){const i=this.spatialReference;if(!i)return this;const r=e??(0,x.C5)(i);if(null==r)return this;const s=this._getParts(r).map((t=>t.extent));if(s.length<2)return s[0]||this;if(s.length>2)return t?this._shiftCM(r):this.set({xmin:r.valid[0],xmax:r.valid[1]});if(t)return this._shiftCM(r);if(n)return s;let a=!0,h=!0;return s.forEach((t=>{t.hasZ||(a=!1),t.hasM||(h=!1)})),{rings:s.map((t=>{const n=[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]];if(a){const e=(t.zmax-t.zmin)/2;for(let t=0;t<n.length;t++)n[t].push(e)}if(h){const e=(t.mmax-t.mmin)/2;for(let t=0;t<n.length;t++)n[t].push(e)}return n})),hasZ:a,hasM:h,spatialReference:i}}_getParts(t){let n=this.cache._parts;if(!n){n=[];const{ymin:e,ymax:r,spatialReference:s}=this,a=this.width,h=this.xmin,o=this.xmax;let l;t=t||(0,x.C5)(s);const[m,u]=t.valid;l=this._normalizeX(this.xmin,t);const c=l.x,f=l.frameId;l=this._normalizeX(this.xmax,t);const p=l.x,y=l.frameId,g=c===p&&a>0;if(a>2*u){const t=new i(h<o?c:p,e,u,r,s),a=new i(m,e,h<o?p:c,r,s),l=new i(0,e,u,r,s),x=new i(m,e,0,r,s),g=[],d=[];t.contains(l)&&g.push(f),t.contains(x)&&d.push(f),a.contains(l)&&g.push(y),a.contains(x)&&d.push(y);for(let t=f+1;t<y;t++)g.push(t),d.push(t);n.push({extent:t,frameIds:[f]},{extent:a,frameIds:[y]},{extent:l,frameIds:g},{extent:x,frameIds:d})}else c>p||g?n.push({extent:new i(c,e,u,r,s),frameIds:[f]},{extent:new i(m,e,p,r,s),frameIds:[y]}):n.push({extent:new i(c,e,p,r,s),frameIds:[f]});this.cache._parts=n}const e=this.hasZ,r=this.hasM;if(e||r){const t={};e&&(t.zmin=this.zmin,t.zmax=this.zmax),r&&(t.mmin=this.mmin,t.mmax=this.mmax);for(let e=0;e<n.length;e++)n[e].extent.set(t)}return n}_normalizeX(t,n){const[e,i]=n.valid,r=2*i;let s,a=0;return t>i?(s=Math.ceil(Math.abs(t-i)/r),t-=s*r,a=s):t<e&&(s=Math.ceil(Math.abs(t-e)/r),t+=s*r,a=-s),{x:t,frameId:a}}};(0,r._)([(0,a.Cb)({readOnly:!0})],y.prototype,"cache",null),(0,r._)([(0,a.Cb)({readOnly:!0})],y.prototype,"center",null),(0,r._)([(0,a.Cb)({readOnly:!0})],y.prototype,"extent",null),(0,r._)([(0,a.Cb)({readOnly:!0,json:{write:{enabled:!1,overridePolicy:null}}})],y.prototype,"hasM",null),(0,r._)([(0,a.Cb)({readOnly:!0,json:{write:{enabled:!1,overridePolicy:null}}})],y.prototype,"hasZ",null),(0,r._)([(0,a.Cb)({readOnly:!0})],y.prototype,"height",null),(0,r._)([(0,a.Cb)({readOnly:!0})],y.prototype,"width",null),(0,r._)([(0,a.Cb)({type:Number,json:{type:[Number,String],write:{enabled:!0,allowNull:!0}}})],y.prototype,"xmin",void 0),(0,r._)([(0,a.Cb)({type:Number,json:{write:!0}})],y.prototype,"ymin",void 0),(0,r._)([(0,a.Cb)({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasM}}}}})],y.prototype,"mmin",void 0),(0,r._)([(0,a.Cb)({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasZ}}}}})],y.prototype,"zmin",void 0),(0,r._)([(0,a.Cb)({type:Number,json:{write:!0}})],y.prototype,"xmax",void 0),(0,r._)([(0,a.Cb)({type:Number,json:{write:!0}})],y.prototype,"ymax",void 0),(0,r._)([(0,a.Cb)({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasM}}}}})],y.prototype,"mmax",void 0),(0,r._)([(0,a.Cb)({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasZ}}}}})],y.prototype,"zmax",void 0),y=i=(0,r._)([(0,h.j)("esri.geometry.Extent")],y),y.prototype.toJSON.isDefaultToJSON=!0;const g=y},65091:(t,n,e)=>{e.d(n,{Z:()=>p});var i,r=e(43697),s=e(22974),a=e(5600),h=(e(75215),e(52011)),o=e(30556),l=e(6570),m=e(9361),u=e(94139),c=e(16238);function x(t){return(n,e)=>null==n?e:null==e?n:t(n,e)}let f=i=class extends m.Z{constructor(...t){super(...t),this.points=[],this.type="multipoint"}normalizeCtorArgs(t,n){if(!t&&!n)return{};const e={};Array.isArray(t)?(e.points=t,e.spatialReference=n):function(t){return t&&("esri.geometry.SpatialReference"===t.declaredClass||null!=t.wkid)}(t)?e.spatialReference=t:(t.points&&(e.points=t.points),t.spatialReference&&(e.spatialReference=t.spatialReference),t.hasZ&&(e.hasZ=t.hasZ),t.hasM&&(e.hasM=t.hasM));const i=e.points&&e.points[0];return i&&(void 0===e.hasZ&&void 0===e.hasM?(e.hasZ=i.length>2,e.hasM=!1):void 0===e.hasZ?e.hasZ=i.length>3:void 0===e.hasM&&(e.hasM=i.length>3)),e}get cache(){return this.commitProperty("points"),this.commitProperty("hasZ"),this.commitProperty("hasM"),this.commitProperty("spatialReference"),{}}get extent(){const t=this.points;if(!t.length)return null;const n=new l.Z,e=this.hasZ,i=this.hasM,r=e?3:2,s=t[0],a=x(Math.min),h=x(Math.max);let o,m,u,c,[f,p]=s,[y,g]=s;for(let n=0,s=t.length;n<s;n++){const s=t[n],[l,x]=s;if(f=a(f,l),p=a(p,x),y=h(y,l),g=h(g,x),e&&s.length>2){const t=s[2];o=a(o,t),u=h(u,t)}if(i&&s.length>r){const t=s[r];m=a(m,t),c=h(c,t)}}return n.xmin=f,n.ymin=p,n.xmax=y,n.ymax=g,n.spatialReference=this.spatialReference,e?(n.zmin=o,n.zmax=u):(n.zmin=void 0,n.zmax=void 0),i?(n.mmin=m,n.mmax=c):(n.mmin=void 0,n.mmax=void 0),n}writePoints(t,n){n.points=(0,s.d9)(this.points)}addPoint(t){return(0,c.l)(this,t),Array.isArray(t)?this.points.push(t):this.points.push(t.toArray()),this.notifyChange("points"),this}clone(){const t={points:(0,s.d9)(this.points),spatialReference:this.spatialReference};return this.hasZ&&(t.hasZ=!0),this.hasM&&(t.hasM=!0),new i(t)}getPoint(t){if(!this._validateInputs(t))return null;const n=this.points[t],e={x:n[0],y:n[1],spatialReference:this.spatialReference};let i=2;return this.hasZ&&(e.z=n[2],i=3),this.hasM&&(e.m=n[i]),new u.Z(e)}removePoint(t){if(!this._validateInputs(t))return null;const n=new u.Z(this.points.splice(t,1)[0],this.spatialReference);return this.notifyChange("points"),n}setPoint(t,n){return this._validateInputs(t)?((0,c.l)(this,n),Array.isArray(n)||(n=n.toArray()),this.points[t]=n,this.notifyChange("points"),this):this}toJSON(t){return this.write({},t)}_validateInputs(t){return null!=t&&t>=0&&t<this.points.length}};(0,r._)([(0,a.Cb)({readOnly:!0})],f.prototype,"cache",null),(0,r._)([(0,a.Cb)()],f.prototype,"extent",null),(0,r._)([(0,a.Cb)({type:[[Number]],json:{write:{isRequired:!0}}})],f.prototype,"points",void 0),(0,r._)([(0,o.c)("points")],f.prototype,"writePoints",null),f=i=(0,r._)([(0,h.j)("esri.geometry.Multipoint")],f),f.prototype.toJSON.isDefaultToJSON=!0;const p=f},38913:(t,n,e)=>{e.d(n,{Z:()=>P});var i,r=e(43697),s=e(67676),a=e(22974),h=e(5600),o=(e(75215),e(52011)),l=e(30556),m=e(6570),u=e(9361),c=e(94139),x=e(82971),f=e(35308),p=e(54102),y=e(86662),g=e(49600),d=e(87416),M=e(40488),z=e(16238);function Z(t){return!Array.isArray(t[0])}let v=i=class extends u.Z{static fromExtent(t){const n=t.clone().normalize(),e=t.spatialReference;let r=!1,s=!1;for(const t of n)t.hasZ&&(r=!0),t.hasM&&(s=!0);const a={rings:n.map((t=>{const n=[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]];if(r&&t.hasZ){const e=t.zmin+.5*(t.zmax-t.zmin);for(let t=0;t<n.length;t++)n[t].push(e)}if(s&&t.hasM){const e=t.mmin+.5*(t.mmax-t.mmin);for(let t=0;t<n.length;t++)n[t].push(e)}return n})),spatialReference:e};return r&&(a.hasZ=!0),s&&(a.hasM=!0),new i(a)}constructor(...t){super(...t),this.rings=[],this.type="polygon"}normalizeCtorArgs(t,n){let e,i,r=null,s=null;return t&&!Array.isArray(t)?(r=t.rings??null,n||(t.spatialReference?n=t.spatialReference:t.rings||(n=t)),e=t.hasZ,i=t.hasM):r=t,r=r||[],n=n||x.Z.WGS84,r.length&&r[0]&&null!=r[0][0]&&"number"==typeof r[0][0]&&(r=[r]),s=r[0]&&r[0][0],s&&(void 0===e&&void 0===i?(e=s.length>2,i=s.length>3):void 0===e?e=i?s.length>3:s.length>2:void 0===i&&(i=e?s.length>3:s.length>2)),{rings:r,spatialReference:n,hasZ:e,hasM:i}}get cache(){return this.commitProperty("rings"),this.commitProperty("hasZ"),this.commitProperty("hasM"),this.commitProperty("spatialReference"),{}}get centroid(){const t=(0,f.tO)(this);if(!t||isNaN(t[0])||isNaN(t[1])||this.hasZ&&isNaN(t[2]))return null;const n=new c.Z;return n.x=t[0],n.y=t[1],n.spatialReference=this.spatialReference,this.hasZ&&(n.z=t[2]),n}get extent(){const{spatialReference:t}=this,n=(0,g._w)(this);if(!n)return null;const e=new m.Z(n);return e.spatialReference=t,e}get isSelfIntersecting(){return(0,d.Ff)(this.rings)}writeRings(t,n){n.rings=(0,a.d9)(this.rings)}addRing(t){if(!t)return;const n=this.rings,e=n.length;if(Z(t)){const i=[];for(let n=0,e=t.length;n<e;n++)i[n]=t[n].toArray();n[e]=i}else n[e]=t.concat();return this.notifyChange("rings"),this}clone(){const t=new i;return t.spatialReference=this.spatialReference,t.rings=(0,a.d9)(this.rings),t.hasZ=this.hasZ,t.hasM=this.hasM,t}equals(t){if(this===t)return!0;if(null==t)return!1;const n=this.spatialReference,e=t.spatialReference;if(null!=n!=(null!=e))return!1;if(null!=n&&null!=e&&!n.equals(e))return!1;if(this.rings.length!==t.rings.length)return!1;const i=([t,n,e,i],[r,s,a,h])=>t===r&&n===s&&(null==e&&null==a||e===a)&&(null==i&&null==h||i===h);for(let n=0;n<this.rings.length;n++){const e=this.rings[n],r=t.rings[n];if(!(0,s.fS)(e,r,i))return!1}return!0}contains(t){if(!t)return!1;const n=(0,M.iV)(t,this.spatialReference);return(0,p.CI)(this,null!=n?n:t)}isClockwise(t){let n;return n=Z(t)?t.map((t=>this.hasZ?this.hasM?[t.x,t.y,t.z,t.m]:[t.x,t.y,t.z]:[t.x,t.y])):t,(0,y.bu)(n,this.hasM,this.hasZ)}getPoint(t,n){if(!this._validateInputs(t,n))return null;const e=this.rings[t][n],i=this.hasZ,r=this.hasM;return i&&!r?new c.Z(e[0],e[1],e[2],void 0,this.spatialReference):r&&!i?new c.Z(e[0],e[1],void 0,e[2],this.spatialReference):i&&r?new c.Z(e[0],e[1],e[2],e[3],this.spatialReference):new c.Z(e[0],e[1],this.spatialReference)}insertPoint(t,n,e){return this._validateInputs(t,n,!0)?((0,z.l)(this,e),Array.isArray(e)||(e=e.toArray()),this.rings[t].splice(n,0,e),this.notifyChange("rings"),this):this}removePoint(t,n){if(!this._validateInputs(t,n))return null;const e=new c.Z(this.rings[t].splice(n,1)[0],this.spatialReference);return this.notifyChange("rings"),e}removeRing(t){if(!this._validateInputs(t,null))return null;const n=this.rings.splice(t,1)[0],e=this.spatialReference,i=n.map((t=>new c.Z(t,e)));return this.notifyChange("rings"),i}setPoint(t,n,e){return this._validateInputs(t,n)?((0,z.l)(this,e),Array.isArray(e)||(e=e.toArray()),this.rings[t][n]=e,this.notifyChange("rings"),this):this}_validateInputs(t,n,e=!1){if(null==t||t<0||t>=this.rings.length)return!1;if(null!=n){const i=this.rings[t];if(e&&(n<0||n>i.length))return!1;if(!e&&(n<0||n>=i.length))return!1}return!0}toJSON(t){return this.write({},t)}};(0,r._)([(0,h.Cb)({readOnly:!0})],v.prototype,"cache",null),(0,r._)([(0,h.Cb)({readOnly:!0})],v.prototype,"centroid",null),(0,r._)([(0,h.Cb)({readOnly:!0})],v.prototype,"extent",null),(0,r._)([(0,h.Cb)({readOnly:!0})],v.prototype,"isSelfIntersecting",null),(0,r._)([(0,h.Cb)({type:[[[Number]]],json:{write:{isRequired:!0}}})],v.prototype,"rings",void 0),(0,r._)([(0,l.c)("rings")],v.prototype,"writeRings",null),v=i=(0,r._)([(0,o.j)("esri.geometry.Polygon")],v),v.prototype.toJSON.isDefaultToJSON=!0;const P=v},58901:(t,n,e)=>{e.d(n,{Z:()=>y});var i,r=e(43697),s=e(22974),a=e(5600),h=(e(75215),e(52011)),o=e(30556),l=e(6570),m=e(9361),u=e(94139),c=e(82971),x=e(49600),f=e(16238);let p=i=class extends m.Z{constructor(...t){super(...t),this.paths=[],this.type="polyline"}normalizeCtorArgs(t,n){let e,i,r=null,s=null;return t&&!Array.isArray(t)?(r=t.paths??null,n||(t.spatialReference?n=t.spatialReference:t.paths||(n=t)),e=t.hasZ,i=t.hasM):r=t,r=r||[],n=n||c.Z.WGS84,r.length&&r[0]&&null!=r[0][0]&&"number"==typeof r[0][0]&&(r=[r]),s=r[0]&&r[0][0],s&&(void 0===e&&void 0===i?(e=s.length>2,i=!1):void 0===e?e=!i&&s.length>3:void 0===i&&(i=!e&&s.length>3)),{paths:r,spatialReference:n,hasZ:e,hasM:i}}get cache(){return this.commitProperty("paths"),this.commitProperty("hasZ"),this.commitProperty("hasM"),this.commitProperty("spatialReference"),{}}get extent(){const{spatialReference:t}=this,n=(0,x.Wn)(this);if(!n)return null;const e=new l.Z(n);return e.spatialReference=t,e}writePaths(t,n){n.paths=(0,s.d9)(this.paths)}addPath(t){if(!t)return;const n=this.paths,e=n.length;if(function(t){return!Array.isArray(t[0])}(t)){const i=[];for(let n=0,e=t.length;n<e;n++)i[n]=t[n].toArray();n[e]=i}else n[e]=t.concat();return this.notifyChange("paths"),this}clone(){const t=new i;return t.spatialReference=this.spatialReference,t.paths=(0,s.d9)(this.paths),t.hasZ=this.hasZ,t.hasM=this.hasM,t}getPoint(t,n){if(!this._validateInputs(t,n))return null;const e=this.paths[t][n],i=this.hasZ,r=this.hasM;return i&&!r?new u.Z(e[0],e[1],e[2],void 0,this.spatialReference):r&&!i?new u.Z(e[0],e[1],void 0,e[2],this.spatialReference):i&&r?new u.Z(e[0],e[1],e[2],e[3],this.spatialReference):new u.Z(e[0],e[1],this.spatialReference)}insertPoint(t,n,e){return this._validateInputs(t,n,!0)?((0,f.l)(this,e),Array.isArray(e)||(e=e.toArray()),this.paths[t].splice(n,0,e),this.notifyChange("paths"),this):this}removePath(t){if(!this._validateInputs(t,null))return null;const n=this.paths.splice(t,1)[0],e=this.spatialReference,i=n.map((t=>new u.Z(t,e)));return this.notifyChange("paths"),i}removePoint(t,n){if(!this._validateInputs(t,n))return null;const e=new u.Z(this.paths[t].splice(n,1)[0],this.spatialReference);return this.notifyChange("paths"),e}setPoint(t,n,e){return this._validateInputs(t,n)?((0,f.l)(this,e),Array.isArray(e)||(e=e.toArray()),this.paths[t][n]=e,this.notifyChange("paths"),this):this}_validateInputs(t,n,e=!1){if(null==t||t<0||t>=this.paths.length)return!1;if(null!=n){const i=this.paths[t];if(e&&(n<0||n>i.length))return!1;if(!e&&(n<0||n>=i.length))return!1}return!0}toJSON(t){return this.write({},t)}};(0,r._)([(0,a.Cb)({readOnly:!0})],p.prototype,"cache",null),(0,r._)([(0,a.Cb)({readOnly:!0})],p.prototype,"extent",null),(0,r._)([(0,a.Cb)({type:[[[Number]]],json:{write:{isRequired:!0}}})],p.prototype,"paths",void 0),(0,r._)([(0,o.c)("paths")],p.prototype,"writePaths",null),p=i=(0,r._)([(0,h.j)("esri.geometry.Polyline")],p),p.prototype.toJSON.isDefaultToJSON=!0;const y=p},95961:(t,n,e)=>{function i(t){const n=[];for(t.reset();t.nextPath();){const e=[];for(;t.nextPoint();)e.push([t.x,t.y]);n.push(e)}return t.reset(),n}function r(t){const n=[];for(;t.nextPoint();)n.push([t.x,t.y]);return t.seekPathStart(),n}e.d(n,{M:()=>i,l:()=>r})},24470:(t,n,e)=>{e.d(n,{Gv:()=>g,HH:()=>o,SO:()=>m,Ue:()=>r,al:()=>a,cS:()=>f,fS:()=>y,jE:()=>u,jn:()=>l,kK:()=>c,oJ:()=>h,r3:()=>x}),e(80442),e(22021);var i=e(6570);function r(t=d){return[t[0],t[1],t[2],t[3]]}function s(t,n){return t!==n&&(t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3]),t}function a(t,n,e,i,s=r()){return s[0]=t,s[1]=n,s[2]=e,s[3]=i,s}function h(t,n=r()){return n[0]=t.xmin,n[1]=t.ymin,n[2]=t.xmax,n[3]=t.ymax,n}function o(t,n){return new i.Z({xmin:t[0],ymin:t[1],xmax:t[2],ymax:t[3],spatialReference:n})}function l(t,n,e){if(null!=n)if("length"in n)p(n)?(e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e[2]=Math.max(t[2],n[2]),e[3]=Math.max(t[3],n[3])):2!==n.length&&3!==n.length||(e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e[2]=Math.max(t[2],n[0]),e[3]=Math.max(t[3],n[1]));else switch(n.type){case"extent":e[0]=Math.min(t[0],n.xmin),e[1]=Math.min(t[1],n.ymin),e[2]=Math.max(t[2],n.xmax),e[3]=Math.max(t[3],n.ymax);break;case"point":e[0]=Math.min(t[0],n.x),e[1]=Math.min(t[1],n.y),e[2]=Math.max(t[2],n.x),e[3]=Math.max(t[3],n.y)}else s(e,t)}function m(t){return function(t){return null==t||t[0]>=t[2]?0:t[2]-t[0]}(t)*function(t){return t[1]>=t[3]?0:t[3]-t[1]}(t)}function u(t,n,e){return n>=t[0]&&e>=t[1]&&n<=t[2]&&e<=t[3]}function c(t,n){return Math.max(n[0],t[0])<=Math.min(n[2],t[2])&&Math.max(n[1],t[1])<=Math.min(n[3],t[3])}function x(t,n){return n[0]>=t[0]&&n[2]<=t[2]&&n[1]>=t[1]&&n[3]<=t[3]}function f(t){return t?s(t,g):r(g)}function p(t){return null!=t&&4===t.length}function y(t,n){return p(t)&&p(n)?t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]:t===n}const g=[1/0,1/0,-1/0,-1/0],d=[0,0,0,0]},20322:(t,n,e)=>{e.d(n,{$P:()=>c,C6:()=>y,Cs:()=>x,Yg:()=>p,l1:()=>f,lC:()=>d});var i=e(24470);function r(t){return void 0!==t.xmin&&void 0!==t.ymin&&void 0!==t.xmax&&void 0!==t.ymax}function s(t){return void 0!==t.points}function a(t){return void 0!==t.x&&void 0!==t.y}function h(t){return void 0!==t.paths}function o(t){return void 0!==t.rings}function l(t){return function(n,e){return null==n?e:null==e?n:t(n,e)}}const m=l(Math.min),u=l(Math.max);function c(t,n){return h(n)?y(t,n.paths,!1,!1):o(n)?y(t,n.rings,!1,!1):s(n)?d(t,n.points,!1,!1,!1,!1):r(n)?g(t,n):(a(n)&&(t[0]=n.x,t[1]=n.y,t[2]=n.x,t[3]=n.y),t)}function x(t){let n,e,r,s;for(t.reset(),n=r=1/0,e=s=-1/0;t.nextPath();){const i=f(t);n=Math.min(i[0],n),r=Math.min(i[1],r),e=Math.max(i[2],e),s=Math.max(i[3],s)}return(0,i.Ue)([n,r,e,s])}function f(t){let n,e,r,s;for(n=r=1/0,e=s=-1/0;t.nextPoint();)n=Math.min(t.x,n),r=Math.min(t.y,r),e=Math.max(t.x,e),s=Math.max(t.y,s);return(0,i.Ue)([n,r,e,s])}function p(t,n){return h(n)?y(t,n.paths,!0,!1):o(n)?y(t,n.rings,!0,!1):s(n)?d(t,n.points,!0,!1,!0,!1):r(n)?g(t,n,0,0,!0,!1):(a(n)&&(t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.x,t[4]=n.y,t[5]=n.z),t)}function y(t,n,e,i){const r=e?3:2;if(!n.length||!n[0].length)return null;let s,a,h,o,[l,c]=n[0][0],[x,f]=n[0][0];for(let t=0;t<n.length;t++){const p=n[t];for(let t=0;t<p.length;t++){const n=p[t],[y,g]=n;if(l=m(l,y),c=m(c,g),x=u(x,y),f=u(f,g),e&&n.length>2){const t=n[2];s=m(s,t),a=u(a,t)}if(i&&n.length>r){const t=n[r];h=m(s,t),o=u(a,t)}}}return e?i?(t[0]=l,t[1]=c,t[2]=s,t[3]=h,t[4]=x,t[5]=f,t[6]=a,t[7]=o,t.length=8,t):(t[0]=l,t[1]=c,t[2]=s,t[3]=x,t[4]=f,t[5]=a,t.length=6,t):i?(t[0]=l,t[1]=c,t[2]=h,t[3]=x,t[4]=f,t[5]=o,t.length=6,t):(t[0]=l,t[1]=c,t[2]=x,t[3]=f,t.length=4,t)}function g(t,n,e,i,r,s){const a=n.xmin,h=n.xmax,o=n.ymin,l=n.ymax;let m=n.zmin,u=n.zmax,c=n.mmin,x=n.mmax;return r?(m=m||0,u=u||0,s?(c=c||0,x=x||0,t[0]=a,t[1]=o,t[2]=m,t[3]=c,t[4]=h,t[5]=l,t[6]=u,t[7]=x,t):(t[0]=a,t[1]=o,t[2]=m,t[3]=h,t[4]=l,t[5]=u,t)):s?(c=c||0,x=x||0,t[0]=a,t[1]=o,t[2]=c,t[3]=h,t[4]=l,t[5]=x,t):(t[0]=a,t[1]=o,t[2]=h,t[3]=l,t)}function d(t,n,e,i,r,s){const a=e?3:2,h=i&&s,o=e&&r;if(!n.length||!n[0].length)return null;let l,c,x,f,[p,y]=n[0],[g,d]=n[0];for(let t=0;t<n.length;t++){const e=n[t],[i,r]=e;if(p=m(p,i),y=m(y,r),g=u(g,i),d=u(d,r),o&&e.length>2){const t=e[2];l=m(l,t),c=u(c,t)}if(h&&e.length>a){const t=e[a];x=m(l,t),f=u(c,t)}}return r?(l=l||0,c=c||0,s?(x=x||0,f=f||0,t[0]=p,t[1]=y,t[2]=l,t[3]=x,t[4]=g,t[5]=d,t[6]=c,t[7]=f,t):(t[0]=p,t[1]=y,t[2]=l,t[3]=g,t[4]=d,t[5]=c,t)):s?(x=x||0,f=f||0,t[0]=p,t[1]=y,t[2]=x,t[3]=g,t[4]=d,t[5]=f,t):(t[0]=p,t[1]=y,t[2]=g,t[3]=d,t)}},35308:(t,n,e)=>{e.d(n,{$G:()=>s,DS:()=>h,NA:()=>m,Vm:()=>o,tO:()=>a});var i=e(95961),r=e(86662);function s(t){return t?t.hasZ?[t.xmax-t.xmin/2,t.ymax-t.ymin/2,t.zmax-t.zmin/2]:[t.xmax-t.xmin/2,t.ymax-t.ymin/2]:null}function a(t){return t?function(t,n){if(!t||!t.length)return null;const e=[],i=[],s=n?[1/0,-1/0,1/0,-1/0,1/0,-1/0]:[1/0,-1/0,1/0,-1/0];for(let e=0,r=t.length;e<r;e++){const r=h(t[e],n,s);r&&i.push(r)}if(i.sort(((t,e)=>{let i=t[2]-e[2];return 0===i&&n&&(i=t[4]-e[4]),i})),i.length&&(e[0]=i[0][0],e[1]=i[0][1],n&&(e[2]=i[0][3]),(e[0]<s[0]||e[0]>s[1]||e[1]<s[2]||e[1]>s[3]||n&&(e[2]<s[4]||e[2]>s[5]))&&(e.length=0)),!e.length){const i=t[0]&&t[0].length?function(t,n){const e=n?[0,0,0]:[0,0],i=n?[0,0,0]:[0,0];let s=0,a=0,h=0,o=0;for(let l=0,m=t.length;l<m-1;l++){const m=t[l],u=t[l+1];if(m&&u){e[0]=m[0],e[1]=m[1],i[0]=u[0],i[1]=u[1],n&&m.length>2&&u.length>2&&(e[2]=m[2],i[2]=u[2]);const t=(0,r.xA)(e,i);if(t){s+=t;const e=(0,r.Gi)(m,u);a+=t*e[0],h+=t*e[1],n&&e.length>2&&(o+=t*e[2])}}}return s>0?n?[a/s,h/s,o/s]:[a/s,h/s]:t.length?t[0]:null}(t[0],n):null;if(!i)return null;e[0]=i[0],e[1]=i[1],n&&i.length>2&&(e[2]=i[2])}return e}(t.rings,t.hasZ??!1):null}function h(t,n,e){let i=0,r=0,s=0,a=0,h=0;const o=t.length?t[0][0]:0,l=t.length?t[0][1]:0,m=t.length&&n?t[0][2]:0;for(let u=0;u<t.length;u++){const c=t[u],x=t[(u+1)%t.length],[f,p,y]=c,g=f-o,d=p-l,[M,z,Z]=x,v=M-o,P=z-l,R=g*P-v*d;if(a+=R,i+=(g+v)*R,r+=(d+P)*R,n&&c.length>2&&x.length>2){const t=y-m,n=Z-m,e=g*n-v*t;s+=(t+n)*e,h+=e}f<e[0]&&(e[0]=f),f>e[1]&&(e[1]=f),p<e[2]&&(e[2]=p),p>e[3]&&(e[3]=p),n&&(y<e[4]&&(e[4]=y),y>e[5]&&(e[5]=y))}if(a>0&&(a*=-1),h>0&&(h*=-1),!a)return null;a*=.5,h*=.5;const u=[i/(6*a)+o,r/(6*a)+l,a];return n&&(e[4]===e[5]||0===h?(u[3]=(e[4]+e[5])/2,u[4]=0):(u[3]=s/(6*h)+m,u[4]=h)),u}function o(t){const{hasZ:n,numPaths:e}=t;if(0===e)return null;const s=[],a=[],o=n?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY];for(t.reset();t.nextPath();){const n=h((0,i.l)(t),t.hasZ,o);n&&a.push(n)}if(a.sort(((t,e)=>{let i=t[2]-e[2];return 0===i&&n&&(i=t[4]-e[4]),i})),a.length&&(s[0]=a[0][0],s[1]=a[0][1],n&&(s[2]=a[0][3]),(s[0]<o[0]||s[0]>o[1]||s[1]<o[2]||s[1]>o[3]||n&&(s[2]<o[4]||s[2]>o[5]))&&(s.length=0)),!s.length){t.reset(),t.nextPath();const e=t.numPoints?function(t){const{hasZ:n}=t,e=n?[0,0,0]:[0,0],i=n?[0,0,0]:[0,0];let s=0,a=0,h=0,o=0;if(t.nextPoint()){let l=t.x,m=t.y,u=t.z;for(;t.nextPoint();){const c=t.x,x=t.y,f=t.z;e[0]=l,e[1]=m,i[0]=c,i[1]=x,n&&(e[2]=u,i[2]=f);const p=(0,r.xA)(e,i);if(p){s+=p;const t=(0,r.Gi)(e,i);a+=p*t[0],h+=p*t[1],n&&t.length>2&&(o+=p*t[2])}l=c,m=x,u=f}}return s>0?n?[a/s,h/s,o/s]:[a/s,h/s]:t.numPoints?(t.seekPathStart(),t.nextPoint(),[t.x,t.y]):null}(t):null;if(!e)return null;s[0]=e[0],s[1]=e[1],n&&e.length>2&&(s[2]=e[2])}return s}const l=1e-6;function m(t){let n=0;for(t.reset();t.nextPath();)n+=(0,r.VK)(t);if(n<l){const n=o(t);return n?[n[0],n[1]]:null}const e=[0,0];if(t.reset(),!t.nextPath()||!t.nextPoint())return null;const i=[t.x,t.y];for(t.reset();t.nextPath();)c(e,i,t);return e[0]*=1/n,e[1]*=1/n,e[0]+=i[0],e[1]+=i[1],e}const u=1/3;function c(t,n,e){if(!t||!e||e.numPoints<3)return null;e.nextPoint();const i=e.x,s=e.y;e.nextPoint();let a,h=e.x-i,o=e.y-s,l=0,m=0;for(;e.nextPoint();)l=e.x-i,m=e.y-s,a=.5*u*(l*o-m*h),t[0]+=a*(h+l),t[1]+=a*(o+m),h=l,o=m;const c=(0,r.VK)(e),x=[i,s];return x[0]-=n[0],x[1]-=n[1],x[0]*=c,x[1]*=c,t[0]+=x[0],t[1]+=x[1],t}},54102:(t,n,e)=>{e.d(n,{CI:()=>m,OQ:()=>h,Qg:()=>o,aV:()=>r,lQ:()=>s,uP:()=>a,wP:()=>u});const i=[0,0];function r(t,n){return null!=n&&l(t,n.x,n.y,n.z)}function s(t,n){if(!n.points||n.points.length)return!1;for(const e of n.points)if(!h(t,e))return!1;return!0}function a(t,n){const{xmin:e,ymin:i,zmin:r,xmax:s,ymax:a,zmax:h}=n;return t.hasZ&&n.hasZ?l(t,e,i,r)&&l(t,e,a,r)&&l(t,s,a,r)&&l(t,s,i,r)&&l(t,e,i,h)&&l(t,e,a,h)&&l(t,s,a,h)&&l(t,s,i,h):l(t,e,i)&&l(t,e,a)&&l(t,s,a)&&l(t,s,i)}function h(t,n){return l(t,n[0],n[1])}function o(t,n){return l(t,n[0],n[1],n[2])}function l(t,n,e,i){return n>=t.xmin&&n<=t.xmax&&e>=t.ymin&&e<=t.ymax&&(null==i||!t.hasZ||i>=t.zmin&&i<=t.zmax)}function m(t,n){return i[1]=n.y,i[0]=n.x,function(t,n){return u(t.rings,n)}(t,i)}function u(t,n){if(!t)return!1;if(function(t){return!Array.isArray(t[0][0])}(t))return c(!1,t,n);let e=!1;for(let i=0,r=t.length;i<r;i++)e=c(e,t[i],n);return e}function c(t,n,e){const[i,r]=e;let s=t,a=0;for(let t=0,e=n.length;t<e;t++){a++,a===e&&(a=0);const[h,o]=n[t],[l,m]=n[a];(o<r&&m>=r||m<r&&o>=r)&&h+(r-o)/(m-o)*(l-h)<i&&(s=!s)}return s}},86662:(t,n,e)=>{e.d(n,{Gi:()=>o,Sm:()=>c,Tx:()=>s,VK:()=>x,Zy:()=>u,bu:()=>l,ko:()=>a,xA:()=>r});var i=e(67676);function r(t,n){const e=n[0]-t[0],i=n[1]-t[1];if(t.length>2&&n.length>2){const r=t[2]-n[2];return Math.sqrt(e*e+i*i+r*r)}return Math.sqrt(e*e+i*i)}function s(t,n,e,i){const[r,s]=n,[a,h]=e[i],[o,l]=e[i+1],m=o-a,u=l-h,c=m*m+u*u,x=(r-a)*m+(s-h)*u,f=Math.min(1,Math.max(0,x/c));return t[0]=a+m*f,t[1]=h+u*f,t}function a(t,n,e){let i,r,s,a,o=!1,l=1/0;for(e.reset();e.nextPath();)if(e.nextPoint())for(i=e.x,r=e.y;e.nextPoint();)s=e.x,a=e.y,r>n!=a>n&&t<(s-i)*(n-r)/(a-r)+i&&(o=!o),l=Math.min(l,h(t,n,i,r,s,a)),i=s,r=a;return 0===l?0:(o?1:-1)*Math.sqrt(l)}function h(t,n,e,i,r,s){let a=e,h=i,o=r-a,l=s-h;if(0!==o||0!==l){const e=((t-a)*o+(n-h)*l)/(o*o+l*l);e>1?(a=r,h=s):e>0&&(a+=o*e,h+=l*e)}return o=t-a,l=n-h,o*o+l*l}function o(t,n){return function(t,n,e){const i=t[0]+e*(n[0]-t[0]),r=t[1]+e*(n[1]-t[1]);return t.length>2&&n.length>2?[i,r,t[2]+e*(n[2]-t[2])]:[i,r]}(t,n,.5)}function l(t,n,e){const i=t.length;let r=0,s=0,a=0;for(let h=0;h<i;h++){const o=t[h],l=t[(h+1)%i];let m=2;r+=o[0]*l[1]-l[0]*o[1],o.length>2&&l.length>2&&e&&(s+=o[0]*l[2]-l[0]*o[2],m=3),o.length>m&&l.length>m&&n&&(a+=o[0]*l[m]-l[0]*o[m])}return r<=0&&s<=0&&a<=0}function m(t){const n=t.length;return n>2&&(0,i.fS)(t[0],t[n-1])}function u(t){if("rings"in t)for(const n of t.rings)m(n)||n.push(n[0].slice())}function c(t){if(!t||t.length<3)return 0;let n=0;const e=t.length-1;for(let i=0;i<e;i++)n+=(t[i][0]-t[i+1][0])*(t[i][1]+t[i+1][1]);return n+=(t[e][0]-t[0][0])*(t[e][1]+t[0][1]),-.5*n}function x(t){if(!t||t.numPoints<3)return 0;let n,e,i=0;if(t.seekPathStart(),!t.nextPoint())return 0;n=t.x,e=t.y;const r=n,s=e;for(;t.nextPoint();)i+=(n-t.x)*(e+t.y),n=t.x,e=t.y;return i+=(n-r)*(e+s),-.5*i}e(8744)},49600:(t,n,e)=>{e.d(n,{Wn:()=>c,_w:()=>u,aO:()=>m});var i=e(20322);const r=[];function s(t,n,e,i){return{xmin:t,ymin:n,xmax:e,ymax:i}}function a(t,n,e,i,r,s){return{xmin:t,ymin:n,zmin:e,xmax:i,ymax:r,zmax:s}}function h(t,n,e,i,r,s){return{xmin:t,ymin:n,mmin:e,xmax:i,ymax:r,mmax:s}}function o(t,n,e,i,r,s,a,h){return{xmin:t,ymin:n,zmin:e,mmin:i,xmax:r,ymax:s,zmax:a,mmax:h}}function l(t,n=!1,e=!1){return n?e?o(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7]):a(t[0],t[1],t[2],t[3],t[4],t[5]):e?h(t[0],t[1],t[2],t[3],t[4],t[5]):s(t[0],t[1],t[2],t[3])}function m(t){return t?function(t){return void 0!==t.xmin&&void 0!==t.ymin&&void 0!==t.xmax&&void 0!==t.ymax}(t)?t:function(t){return void 0!==t.x&&void 0!==t.y}(t)?function(t){const{x:n,y:e,z:i,m:r}=t,l=null!=r;return null!=i?l?o(n,e,i,r,n,e,i,r):a(n,e,i,n,e,i):l?h(n,e,r,n,e,r):s(n,e,n,e)}(t):function(t){return void 0!==t.rings}(t)?u(t):function(t){return void 0!==t.paths}(t)?c(t):function(t){return void 0!==t.points}(t)?function(t){const{hasZ:n,hasM:e,points:s}=t;return l((0,i.lC)(r,s,n??!1,e??!1),n,e)}(t):null:null}function u(t){const{hasZ:n,hasM:e,rings:s}=t,a=(0,i.C6)(r,s,n??!1,e??!1);return a?l(a,n,e):null}function c(t){const{hasZ:n,hasM:e,paths:s}=t,a=(0,i.C6)(r,s,n??!1,e??!1);return a?l(a,n,e):null}},87416:(t,n,e)=>{e.d(n,{Ff:()=>y,IY:()=>M,Nl:()=>x,UT:()=>d,h_:()=>s});var i=e(54102);function r(t,n){return(0,i.aV)(t,n)}function s(t,n){const e=t.hasZ&&n.hasZ;let i,r,s;if(t.xmin<=n.xmin){if(i=n.xmin,t.xmax<i)return!1}else if(i=t.xmin,n.xmax<i)return!1;if(t.ymin<=n.ymin){if(r=n.ymin,t.ymax<r)return!1}else if(r=t.ymin,n.ymax<r)return!1;if(e&&n.hasZ)if(t.zmin<=n.zmin){if(s=n.zmin,t.zmax<s)return!1}else if(s=t.zmin,n.zmax<s)return!1;return!0}function a(t,n){const{points:e,hasZ:r}=n,s=r?i.Qg:i.OQ;for(const n of e)if(s(t,n))return!0;return!1}const h=[0,0],o=[0,0],l=[0,0],m=[0,0],u=[h,o,l,m],c=[[l,h],[h,o],[o,m],[m,l]];function x(t,n){return function(t,n){h[0]=t.xmin,h[1]=t.ymax,o[0]=t.xmax,o[1]=t.ymax,l[0]=t.xmin,l[1]=t.ymin,m[0]=t.xmax,m[1]=t.ymin;for(const t of u)if((0,i.wP)(n,t))return!0;for(const e of n){if(!e.length)continue;let n=e[0];if((0,i.OQ)(t,n))return!0;for(let r=1;r<e.length;r++){const s=e[r];if((0,i.OQ)(t,s)||g(n,s,c))return!0;n=s}}return!1}(t,n.rings)}function f(t,n){h[0]=t.xmin,h[1]=t.ymax,o[0]=t.xmax,o[1]=t.ymax,l[0]=t.xmin,l[1]=t.ymin,m[0]=t.xmax,m[1]=t.ymin;const e=n.paths;for(const n of e){if(!e.length)continue;let r=n[0];if((0,i.OQ)(t,r))return!0;for(let e=1;e<n.length;e++){const s=n[e];if((0,i.OQ)(t,s)||g(r,s,c))return!0;r=s}}return!1}const p=[0,0];function y(t){for(let n=0;n<t.length;n++){const e=t[n];for(let i=0;i<e.length-1;i++){const r=e[i],s=e[i+1];for(let e=n+1;e<t.length;e++)for(let n=0;n<t[e].length-1;n++){const i=t[e][n],a=t[e][n+1];if(d(r,s,i,a,p)&&!(p[0]===r[0]&&p[1]===r[1]||p[0]===i[0]&&p[1]===i[1]||p[0]===s[0]&&p[1]===s[1]||p[0]===a[0]&&p[1]===a[1]))return!0}}const i=e.length;if(!(i<=4))for(let t=0;t<i-3;t++){let n=i-1;0===t&&(n=i-2);const r=e[t],s=e[t+1];for(let i=t+2;i<n;i++){const t=e[i],n=e[i+1];if(d(r,s,t,n,p)&&!(p[0]===r[0]&&p[1]===r[1]||p[0]===t[0]&&p[1]===t[1]||p[0]===s[0]&&p[1]===s[1]||p[0]===n[0]&&p[1]===n[1]))return!0}}}return!1}function g(t,n,e){for(let i=0;i<e.length;i++)if(d(t,n,e[i][0],e[i][1]))return!0;return!1}function d(t,n,e,i,r){const[s,a]=t,[h,o]=n,[l,m]=e,[u,c]=i,x=u-l,f=s-l,p=h-s,y=c-m,g=a-m,d=o-a,M=y*p-x*d;if(0===M)return!1;const z=(x*g-y*f)/M,Z=(p*g-d*f)/M;return z>=0&&z<=1&&Z>=0&&Z<=1&&(r&&(r[0]=s+z*(h-s),r[1]=a+z*(o-a)),!0)}function M(t){switch(t){case"esriGeometryEnvelope":case"extent":return s;case"esriGeometryMultipoint":case"multipoint":return a;case"esriGeometryPoint":case"point":return r;case"esriGeometryPolygon":case"polygon":return x;case"esriGeometryPolyline":case"polyline":return f}}},16238:(t,n,e)=>{function i(t,n,e=!1){let{hasM:i,hasZ:r}=t;Array.isArray(n)?4!==n.length||i||r?3===n.length&&e&&!i?(r=!0,i=!1):3===n.length&&i&&r&&(i=!1,r=!1):(i=!0,r=!0):(r=!r&&n.hasZ&&(!i||n.hasM),i=!i&&n.hasM&&(!r||n.hasZ)),t.hasZ=r,t.hasM=i}e.d(n,{l:()=>i})}}]);