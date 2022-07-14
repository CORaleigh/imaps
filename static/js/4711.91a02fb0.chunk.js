"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[4711,4397,3091],{62044:(e,t,r)=>{r.d(t,{Z:()=>y});var n,i=r(27366),l=r(46784),o=r(92026),a=r(86710),s=r(49861),u=(r(63780),r(93169),r(25243),r(38511)),c=r(69912),d=r(31201);let p=n=class extends l.wq{constructor(e){super(e),this.end=null,this.start=null}static get allTime(){return m}static get empty(){return f}readEnd(e,t){return null!=t.end?new Date(t.end):null}writeEnd(e,t){t.end=e?e.getTime():null}get isAllTime(){return this.equals(n.allTime)}get isEmpty(){return this.equals(n.empty)}readStart(e,t){return null!=t.start?new Date(t.start):null}writeStart(e,t){t.start=e?e.getTime():null}clone(){return new n({end:this.end,start:this.start})}equals(e){if(!e)return!1;const t=(0,o.pC)(this.start)?this.start.getTime():this.start,r=(0,o.pC)(this.end)?this.end.getTime():this.end,n=(0,o.pC)(e.start)?e.start.getTime():e.start,i=(0,o.pC)(e.end)?e.end.getTime():e.end;return t===n&&r===i}expandTo(e){if(this.isEmpty||this.isAllTime)return this.clone();const t=(0,o.yw)(this.start,(t=>(0,a.JE)(t,e))),r=(0,o.yw)(this.end,(t=>(0,a.Nm)((0,a.JE)(t,e),1,e)));return new n({start:t,end:r})}intersection(e){if(!e)return this.clone();if(this.isEmpty||e.isEmpty)return n.empty;if(this.isAllTime)return e.clone();if(e.isAllTime)return this.clone();const t=(0,o.R2)(this.start,-1/0,(e=>e.getTime())),r=(0,o.R2)(this.end,1/0,(e=>e.getTime())),i=(0,o.R2)(e.start,-1/0,(e=>e.getTime())),l=(0,o.R2)(e.end,1/0,(e=>e.getTime()));let a,s;if(i>=t&&i<=r?a=i:t>=i&&t<=l&&(a=t),r>=i&&r<=l?s=r:l>=t&&l<=r&&(s=l),!isNaN(a)&&!isNaN(s)){const e=new n;return e.start=a===-1/0?null:new Date(a),e.end=s===1/0?null:new Date(s),e}return n.empty}offset(e,t){if(this.isEmpty||this.isAllTime)return this.clone();const r=new n,{start:i,end:l}=this;return(0,o.pC)(i)&&(r.start=(0,a.Nm)(i,e,t)),(0,o.pC)(l)&&(r.end=(0,a.Nm)(l,e,t)),r}union(e){if(!e||e.isEmpty)return this.clone();if(this.isEmpty)return e.clone();if(this.isAllTime||e.isAllTime)return m.clone();const t=(0,o.pC)(this.start)&&(0,o.pC)(e.start)?new Date(Math.min(this.start.getTime(),e.start.getTime())):null,r=(0,o.pC)(this.end)&&(0,o.pC)(e.end)?new Date(Math.max(this.end.getTime(),e.end.getTime())):null;return new n({start:t,end:r})}};(0,i._)([(0,s.Cb)({type:Date,json:{write:{allowNull:!0}}})],p.prototype,"end",void 0),(0,i._)([(0,u.r)("end")],p.prototype,"readEnd",null),(0,i._)([(0,d.c)("end")],p.prototype,"writeEnd",null),(0,i._)([(0,s.Cb)({readOnly:!0,json:{read:!1}})],p.prototype,"isAllTime",null),(0,i._)([(0,s.Cb)({readOnly:!0,json:{read:!1}})],p.prototype,"isEmpty",null),(0,i._)([(0,s.Cb)({type:Date,json:{write:{allowNull:!0}}})],p.prototype,"start",void 0),(0,i._)([(0,u.r)("start")],p.prototype,"readStart",null),(0,i._)([(0,d.c)("start")],p.prototype,"writeStart",null),p=n=(0,i._)([(0,c.j)("esri.TimeExtent")],p);const m=new p,f=new p({start:void 0,end:void 0}),y=p},84397:(e,t,r)=>{r.d(t,{a:()=>l,c:()=>n,g:()=>i});var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function i(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function l(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}},53283:(e,t,r)=>{r.d(t,{M:()=>f,e:()=>p,f:()=>l,i:()=>d,p:()=>y,r:()=>a,t:()=>o,w:()=>s});var n=r(92026),i=r(35995);function l(e,t){const r=t&&t.url&&t.url.path;if(e&&r&&(e=(0,i.hF)(e,r,{preserveProtocolRelative:!0}),t.portalItem&&t.readResourcePaths)){const r=(0,i.PF)(e,t.portalItem.itemUrl);c.test(r)&&t.readResourcePaths.push(t.portalItem.resourceFromPath(r).path)}return m(e,t&&t.portal)}function o(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f.YES;if(!e)return e;!(0,i.YP)(e)&&t&&t.blockedRelativeUrls&&t.blockedRelativeUrls.push(e);let n=(0,i.hF)(e);if(t){const r=t.verifyItemRelativeUrls&&t.verifyItemRelativeUrls.rootPath||t.url&&t.url.path;if(r){const l=m(r,t.portal);n=(0,i.PF)(m(n,t.portal),l,l),n!==e&&t.verifyItemRelativeUrls&&t.verifyItemRelativeUrls.writtenUrls.push(n)}}return n=p(n,t&&t.portal),(0,i.YP)(n)&&(n=(0,i.Fv)(n)),t?.resources&&t?.portalItem&&!(0,i.YP)(n)&&!(0,i.HK)(n)&&r===f.YES&&t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(n)}),n}function a(e,t,r){return l(e,r)}function s(e,t,r,n){const i=o(e,n);void 0!==i&&(t[r]=i)}const u=/\/items\/([^\/]+)\/resources\//,c=/^\.\/resources\//;function d(e){const t=(0,n.pC)(e)?e.match(u):null;return(0,n.pC)(t)?t[1]:null}function p(e,t){return t&&!t.isPortal&&t.urlKey&&t.customBaseUrl?(0,i.Ie)(e,`${t.urlKey}.${t.customBaseUrl}`,t.portalHostname):e}function m(e,t){if(!t||t.isPortal||!t.urlKey||!t.customBaseUrl)return e;const r=`${t.urlKey}.${t.customBaseUrl}`,n=(0,i.TI)();return(0,i.D6)(n,`${n.scheme}://${r}`)?(0,i.Ie)(e,t.portalHostname,r):(0,i.Ie)(e,r,t.portalHostname)}var f;!function(e){e[e.YES=0]="YES",e[e.NO=1]="NO"}(f||(f={}));const y=Object.freeze(Object.defineProperty({__proto__:null,fromJSON:l,toJSON:o,read:a,write:s,itemIdFromResourceUrl:d,ensureMainOnlineDomain:p,get MarkKeep(){return f}},Symbol.toStringTag,{value:"Module"}))},79056:(e,t,r)=>{r.d(t,{IG:()=>o});var n=r(27366),i=r(69912);let l=0;const o=e=>{let t=class extends e{constructor(){super(...arguments),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+l++})}};return t=(0,n._)([(0,i.j)("esri.core.Identifiable")],t),t};let a=class extends(o(class{})){};a=(0,n._)([(0,i.j)("esri.core.Identifiable")],a)},27135:(e,t,r)=>{r.d(t,{J:()=>l});var n=r(43404),i=r(49861);function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=e instanceof n.X?e:new n.X(e,t),l={type:t?.ignoreUnknown??1?r.apiValues:String,json:{type:r.jsonValues,read:!t?.readOnly&&{reader:r.read},write:{writer:r.write}}};return void 0!==t?.readOnly&&(l.readOnly=!!t.readOnly),void 0!==t?.default&&(l.json.default=t.default),void 0!==t?.name&&(l.json.name=t.name),(0,i.Cb)(l)}},14921:(e,t,r)=>{r.d(t,{Ed:()=>l,UI:()=>o,mt:()=>s,q6:()=>a});var n=r(92026),i=r(66978);function l(e,t,r){return(0,i.as)(e.map(((e,n)=>t.apply(r,[e,n]))))}async function o(e,t,r){return(await(0,i.as)(e.map(((e,n)=>t.apply(r,[e,n]))))).map((e=>e.value))}async function a(e){if((0,n.Wi)(e))return{ok:!1,error:new Error("no promise provided")};try{return{ok:!0,value:await e}}catch(t){return{ok:!1,error:t}}}async function s(e){try{return{ok:!0,value:await e}}catch(t){return(0,i.r9)(t),{ok:!1,error:t}}}},86710:(e,t,r)=>{r.d(t,{JE:()=>o,Nm:()=>l,rJ:()=>a});r(93169);const n={milliseconds:1,seconds:1e3,minutes:6e4,hours:36e5,days:864e5,weeks:6048e5,months:26784e5,years:31536e6,decades:31536e7,centuries:31536e8},i={milliseconds:{getter:"getMilliseconds",setter:"setMilliseconds",multiplier:1},seconds:{getter:"getSeconds",setter:"setSeconds",multiplier:1},minutes:{getter:"getMinutes",setter:"setMinutes",multiplier:1},hours:{getter:"getHours",setter:"setHours",multiplier:1},days:{getter:"getDate",setter:"setDate",multiplier:1},weeks:{getter:"getDate",setter:"setDate",multiplier:7},months:{getter:"getMonth",setter:"setMonth",multiplier:1},years:{getter:"getFullYear",setter:"setFullYear",multiplier:1},decades:{getter:"getFullYear",setter:"setFullYear",multiplier:10},centuries:{getter:"getFullYear",setter:"setFullYear",multiplier:100}};function l(e,t,r){const n=new Date(e.getTime());if(t&&r){const e=i[r],{getter:l,setter:o,multiplier:a}=e;if("months"===r){const e=function(e,t){const r=new Date(e,t+1,1);return r.setDate(0),r.getDate()}(n.getFullYear(),n.getMonth()+t);n.getDate()>e&&n.setDate(e)}n[o](n[l]()+t*a)}return n}function o(e,t){switch(t){case"milliseconds":return new Date(e.getTime());case"seconds":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds());case"minutes":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes());case"hours":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours());case"days":return new Date(e.getFullYear(),e.getMonth(),e.getDate());case"weeks":return new Date(e.getFullYear(),e.getMonth(),e.getDate()-e.getDay());case"months":return new Date(e.getFullYear(),e.getMonth(),1);case"years":return new Date(e.getFullYear(),0,1);case"decades":return new Date(e.getFullYear()-e.getFullYear()%10,0,1);case"centuries":return new Date(e.getFullYear()-e.getFullYear()%100,0,1);default:return new Date}}function a(e,t,r){return 0===e?0:e*n[t]/n[r]}},41414:(e,t,r)=>{r.d(t,{BD:()=>I,G1:()=>p,Gv:()=>A,HH:()=>s,JR:()=>P,KE:()=>C,TC:()=>u,Tn:()=>M,Ue:()=>o,VK:()=>c,Wi:()=>m,Zp:()=>x,aO:()=>S,al:()=>a,bA:()=>F,be:()=>v,cS:()=>E,cv:()=>_,dp:()=>w,fS:()=>R,op:()=>T,pp:()=>d,sU:()=>f,t8:()=>D,wp:()=>O,wz:()=>b,xE:()=>L,y8:()=>N});var n=r(92026),i=r(53866),l=r(65156);function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L;return[e[0],e[1],e[2],e[3],e[4],e[5]]}function a(e,t,r,n,i,l){let a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:o();return a[0]=e,a[1]=t,a[2]=r,a[3]=n,a[4]=i,a[5]=l,a}function s(e,t){const r=isFinite(e[2])||isFinite(e[5]);return new i.Z(r?{xmin:e[0],xmax:e[3],ymin:e[1],ymax:e[4],zmin:e[2],zmax:e[5],spatialReference:t}:{xmin:e[0],xmax:e[3],ymin:e[1],ymax:e[4],spatialReference:t})}function u(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[3]),e[4]=Math.max(e[4],t[4]),e[5]=Math.max(e[5],t[5])}function c(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[3]=Math.max(e[3],t[2]),e[4]=Math.max(e[4],t[3])}function d(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[0]),e[4]=Math.max(e[4],t[1]),e[5]=Math.max(e[5],t[2])}function p(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.length/3,i=e[0],l=e[1],o=e[2],a=e[3],s=e[4],u=e[5];for(let c=0;c<n;c++)i=Math.min(i,t[r+3*c]),l=Math.min(l,t[r+3*c+1]),o=Math.min(o,t[r+3*c+2]),a=Math.max(a,t[r+3*c]),s=Math.max(s,t[r+3*c+1]),u=Math.max(u,t[r+3*c+2]);e[0]=i,e[1]=l,e[2]=o,e[3]=a,e[4]=s,e[5]=u}function m(e,t,r){const n=t.length;let i=e[0],l=e[1],o=e[2],a=e[3],s=e[4],u=e[5];if(r)for(let c=0;c<n;c++){const e=t[c];i=Math.min(i,e[0]),l=Math.min(l,e[1]),o=Math.min(o,e[2]),a=Math.max(a,e[0]),s=Math.max(s,e[1]),u=Math.max(u,e[2])}else for(let c=0;c<n;c++){const e=t[c];i=Math.min(i,e[0]),l=Math.min(l,e[1]),a=Math.max(a,e[0]),s=Math.max(s,e[1])}e[0]=i,e[1]=l,e[2]=o,e[3]=a,e[4]=s,e[5]=u}function f(e){for(let t=0;t<6;t++)if(!isFinite(e[t]))return!1;return!0}function y(e){return e[0]>=e[3]?0:e[3]-e[0]}function h(e){return e[1]>=e[4]?0:e[4]-e[1]}function g(e){return e[2]>=e[5]?0:e[5]-e[2]}function b(e){const t=y(e),r=g(e),n=h(e);return Math.sqrt(t*t+r*r+n*n)}function v(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0,0];return t[0]=e[0]+y(e)/2,t[1]=e[1]+h(e)/2,t[2]=e[2]+g(e)/2,t}function w(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0,0];return t[0]=y(e),t[1]=h(e),t[2]=g(e),t}function S(e){return Math.max(y(e),g(e),h(e))}function I(e,t){return t[0]>=e[0]&&t[1]>=e[1]&&t[2]>=e[2]&&t[0]<=e[3]&&t[1]<=e[4]&&t[2]<=e[5]}function x(e,t){return!!(0,n.Wi)(t)||function(e,t){return Math.max(t[0],e[0])<=Math.min(t[3],e[3])&&Math.max(t[1],e[1])<=Math.min(t[4],e[4])&&Math.max(t[2],e[2])<=Math.min(t[5],e[5])}(e,t)}function _(e,t,r,n){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e;return i[0]=e[0]+t,i[1]=e[1]+r,i[2]=e[2]+n,i[3]=e[3]+t,i[4]=e[4]+r,i[5]=e[5]+n,i}function F(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e;const n=e[0]+y(e)/2,i=e[1]+h(e)/2,l=e[2]+g(e)/2;return r[0]=n+(e[0]-n)*t,r[1]=i+(e[1]-i)*t,r[2]=l+(e[2]-l)*t,r[3]=n+(e[3]-n)*t,r[4]=i+(e[4]-i)*t,r[5]=l+(e[5]-l)*t,r}function C(e,t){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function T(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e;return r[0]=t[0],r[1]=t[1],r[2]=t[2],r!==e&&(r[3]=e[3],r[4]=e[4],r[5]=e[5]),r}function M(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e;return r[3]=t[0],r[4]=t[1],r[5]=t[2],r!==e&&(r[0]=e[0],r[1]=e[1],r[2]=e[2]),e}function D(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e}function E(e){return e?D(e,A):o(A)}function N(e,t){return t||(t=(0,l.Ue)()),t[0]=e[0],t[1]=e[1],t[2]=e[3],t[3]=e[4],t}function P(e,t){return e[0]=t[0],e[1]=t[1],e[2]=Number.NEGATIVE_INFINITY,e[3]=t[2],e[4]=t[3],e[5]=Number.POSITIVE_INFINITY,e}function U(e){return 6===e.length}function O(e){return 0===y(e)&&0===h(e)&&0===g(e)}function R(e,t,r){if((0,n.Wi)(e)||(0,n.Wi)(t))return e===t;if(!U(e)||!U(t))return!1;if(r){for(let n=0;n<e.length;n++)if(!r(e[n],t[n]))return!1}else for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}const A=[1/0,1/0,1/0,-1/0,-1/0,-1/0],L=[0,0,0,0,0,0];o()},70054:(e,t,r)=>{r.r(t),r.d(t,{default:()=>P});var n=r(27366),i=r(42265),l=r(76200),o=(r(51508),r(92026)),a=r(97642),s=r(66978),u=r(35995),c=r(49861),d=(r(63780),r(93169),r(25243),r(38511)),p=r(69912),m=r(53866),f=r(92975),y=r(30651),h=r(6693),g=r(6061),b=r(29598),v=r(71684),w=r(56811),S=r(45948),I=r(22061),x=r(16851),_=r(91946),F=r(16072),C=r(61459);const T=["atom","xml"],M={base:I.Z,key:"type",typeMap:{"simple-line":x.Z},errorContext:"symbol"},D={base:I.Z,key:"type",typeMap:{"picture-marker":_.Z,"simple-marker":F.Z},errorContext:"symbol"},E={base:I.Z,key:"type",typeMap:{"simple-fill":C.Z},errorContext:"symbol"};let N=class extends((0,h.h)((0,v.Q)((0,g.q)((0,b.I)((0,w.M)((0,a.R)(y.Z))))))){constructor(){super(...arguments),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readFeatureCollections(e,t){return t.featureCollection.layers.forEach((e=>{const t=e.layerDefinition.drawingInfo.renderer.symbol;t&&"esriSFS"===t.type&&t.outline?.style.includes("esriSFS")&&(t.outline.style="esriSLSSolid")})),t.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?(0,u.vt)(this.url,T)||"GeoRSS":e||""}set title(e){this._set("title",e)}load(e){const t=(0,o.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(s.r9).then((()=>this._fetchService(t))).then((e=>{this.read(e,{origin:"service"})}))),Promise.resolve(this)}async hasDataChanged(){const e=await this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(e){const t=this.spatialReference,{data:r}=await(0,l.default)(i.Z.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:(0,f.oR)(t)?void 0:t.wkid??JSON.stringify(t)},signal:e});return r}_hasGeometry(e){return this.featureCollections?.some((t=>t.featureSet?.geometryType===e&&t.featureSet.features?.length>0))??!1}};(0,n._)([(0,c.Cb)()],N.prototype,"description",void 0),(0,n._)([(0,c.Cb)()],N.prototype,"featureCollections",void 0),(0,n._)([(0,d.r)("service","featureCollections",["featureCollection.layers"])],N.prototype,"readFeatureCollections",null),(0,n._)([(0,c.Cb)({type:m.Z,json:{name:"lookAtExtent"}})],N.prototype,"fullExtent",void 0),(0,n._)([(0,c.Cb)(S.id)],N.prototype,"id",void 0),(0,n._)([(0,c.Cb)(S.rn)],N.prototype,"legendEnabled",void 0),(0,n._)([(0,c.Cb)({types:M,json:{write:!0}})],N.prototype,"lineSymbol",void 0),(0,n._)([(0,c.Cb)({type:["show","hide"]})],N.prototype,"listMode",void 0),(0,n._)([(0,c.Cb)({types:D,json:{write:!0}})],N.prototype,"pointSymbol",void 0),(0,n._)([(0,c.Cb)({types:E,json:{write:!0}})],N.prototype,"polygonSymbol",void 0),(0,n._)([(0,c.Cb)({type:["GeoRSS"]})],N.prototype,"operationalLayerType",void 0),(0,n._)([(0,c.Cb)(S.HQ)],N.prototype,"url",void 0),(0,n._)([(0,c.Cb)({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],N.prototype,"title",null),(0,n._)([(0,c.Cb)({readOnly:!0,json:{read:!1},value:"geo-rss"})],N.prototype,"type",void 0),N=(0,n._)([(0,p.j)("esri.layers.GeoRSSLayer")],N);const P=N},30651:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(27366),i=(r(59486),r(76200)),l=r(10064),o=r(91505),a=r(79056),s=r(54472),u=r(32718),c=r(66978),d=r(35995),p=r(49861),m=(r(63780),r(93169),r(25243),r(69912)),f=r(42265);const y=u.Z.getLogger("esri.layers.support.fromPortalItem");var h=r(53866),g=r(78952);let b=0,v=class extends(o.Z.EventedMixin((0,a.IG)(s.Z))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new h.Z(-180,-90,180,90,g.Z.WGS84),this.id=Date.now().toString(16)+"-layer-"+b++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=g.Z.WGS84,this.title=null,this.type=null,this.url=null,this.visible=!0}static async fromArcGISServerUrl(e){const t="string"==typeof e?{url:e}:e;return(await r.e(4650).then(r.bind(r,94650))).fromUrl(t)}static fromPortalItem(e){return async function(e){const t="portalItem"in e?e:{portalItem:e},n=await Promise.all([r.e(4226),r.e(8995),r.e(9803),r.e(3120)]).then(r.bind(r,43139));try{return await n.fromItem(t)}catch(i){const e=t&&t.portalItem,r=e&&e.id||"unset",n=e&&e.portal&&e.portal.url||f.Z.portalUrl;throw y.error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+n+"', id: '"+r+"')",i),i}}(e)}initialize(){this.when().catch((e=>{(0,c.D_)(e)||u.Z.getLogger(this.declaredClass).error("#load()",`Failed to load layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}')`,{error:e})}))}destroy(){if(this.parent){const e=this,t=this.parent;"layers"in t&&t.layers.includes(e)?t.layers.remove(e):"tables"in t&&t.tables.includes(e)?t.tables.remove(e):"baseLayers"in t&&t.baseLayers.includes(e)?t.baseLayers.remove(e):"baseLayers"in t&&t.referenceLayers.includes(e)&&t.referenceLayers.remove(e)}}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){const e=this.url;return e?(0,d.mN)(e):null}async fetchAttributionData(){const e=this.attributionDataUrl;if(this.hasAttributionData&&e)return(await(0,i.default)(e,{query:{f:"json"},responseType:"json"})).data;throw new l.Z("layer:no-attribution-data","Layer does not have attribution data")}};(0,n._)([(0,p.Cb)({type:String})],v.prototype,"attributionDataUrl",void 0),(0,n._)([(0,p.Cb)({type:h.Z})],v.prototype,"fullExtent",void 0),(0,n._)([(0,p.Cb)({readOnly:!0})],v.prototype,"hasAttributionData",null),(0,n._)([(0,p.Cb)({type:String,clonable:!1})],v.prototype,"id",void 0),(0,n._)([(0,p.Cb)({type:Boolean,nonNullable:!0})],v.prototype,"legendEnabled",void 0),(0,n._)([(0,p.Cb)({type:["show","hide","hide-children"]})],v.prototype,"listMode",void 0),(0,n._)([(0,p.Cb)({type:Number,range:{min:0,max:1},nonNullable:!0})],v.prototype,"opacity",void 0),(0,n._)([(0,p.Cb)({clonable:!1})],v.prototype,"parent",void 0),(0,n._)([(0,p.Cb)({readOnly:!0})],v.prototype,"parsedUrl",null),(0,n._)([(0,p.Cb)({type:Boolean})],v.prototype,"popupEnabled",void 0),(0,n._)([(0,p.Cb)({type:Boolean})],v.prototype,"attributionVisible",void 0),(0,n._)([(0,p.Cb)({type:g.Z})],v.prototype,"spatialReference",void 0),(0,n._)([(0,p.Cb)({type:String})],v.prototype,"title",void 0),(0,n._)([(0,p.Cb)({readOnly:!0,json:{read:!1}})],v.prototype,"type",void 0),(0,n._)([(0,p.Cb)()],v.prototype,"url",void 0),(0,n._)([(0,p.Cb)({type:Boolean,nonNullable:!0})],v.prototype,"visible",void 0),v=(0,n._)([(0,m.j)("esri.layers.Layer")],v);const w=v},6693:(e,t,r)=>{r.d(t,{h:()=>s});var n=r(27366),i=r(49861),l=(r(63780),r(93169),r(25243),r(69912)),o=r(60676);const a={read:{reader:o.ij},write:{allowNull:!0,writer:o.cW}},s=e=>{let t=class extends e{constructor(){super(...arguments),this.blendMode="normal",this.effect=null}};return(0,n._)([(0,i.Cb)({type:["average","color-burn","color-dodge","color","darken","destination-atop","destination-in","destination-out","destination-over","difference","exclusion","hard-light","hue","invert","lighten","lighter","luminosity","minus","multiply","normal","overlay","plus","reflect","saturation","screen","soft-light","source-atop","source-in","source-out","vivid-light","xor"],nonNullable:!0,json:{read:!1,write:!1,origins:{"web-map":{read:!0,write:!0},"portal-item":{read:!0,write:!0}}}})],t.prototype,"blendMode",void 0),(0,n._)([(0,i.Cb)({json:{read:!1,write:!1,origins:{"web-map":a,"portal-item":a}}})],t.prototype,"effect",void 0),t=(0,n._)([(0,l.j)("esri.layers.mixins.BlendLayer")],t),t}},29598:(e,t,r)=>{r.d(t,{I:()=>w});var n=r(27366),i=r(19545),l=r(76200),o=r(14921),a=r(10064),s=r(32718),u=r(92026),c=r(66978),d=r(35995),p=r(49861),m=(r(63780),r(93169),r(25243),r(38511)),f=r(69912),y=r(31201),h=r(70032),g=r(98995),b=r(79437);const v=s.Z.getLogger("esri.layers.mixins.PortalLayer"),w=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0}destroy(){this.portalItem?.destroy(),this.portalItem=null}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new g.default({id:t.itemId,portal:r&&r.portal})}writePortalItem(e,t){e&&e.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem&&this.portalItem.id)try{const n=await r.e(3388).then(r.bind(r,33388));return(0,c.k_)(t),await n.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},t)}catch(n){throw(0,c.D_)(n)||v.warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${n}`),n}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch((e=>((0,c.r9)(e),!0))))}async _fetchUserHasEditingPrivileges(e){const t=this.url?i.id?.findCredential(this.url):null;if(!t)return!0;const r=S.credential===t?S.user:await this._fetchEditingUser(e);return S.credential=t,S.user=r,(0,u.Wi)(r)||null==r.privileges||r.privileges.includes("features:user:edit")}async _fetchEditingUser(e){const t=this.portalItem?.portal?.user;if(t)return t;const r=i.id.findServerInfo(this.url);if(!r?.owningSystemUrl)return null;const n=`${r.owningSystemUrl}/sharing/rest`,a=h.Z.getDefault();if(a&&a.loaded&&(0,d.Fv)(a.restUrl)===(0,d.Fv)(n))return a.user;const s=`${n}/community/self`,c=(0,u.pC)(e)?e.signal:null,p=await(0,o.q6)((0,l.default)(s,{authMode:"no-prompt",query:{f:"json"},signal:c}));return p.ok?b.default.fromJSON(p.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const r=t&&t.portal,n=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||h.Z.getDefault());return r&&n&&!(0,d.tm)(n.restUrl,r.restUrl)?(t.messages&&t.messages.push(new a.Z("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return(0,n._)([(0,p.Cb)({type:g.default})],t.prototype,"portalItem",null),(0,n._)([(0,m.r)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),(0,n._)([(0,y.c)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),(0,n._)([(0,p.Cb)({clonable:!1})],t.prototype,"resourceReferences",void 0),(0,n._)([(0,p.Cb)({readOnly:!0})],t.prototype,"userHasEditingPrivileges",void 0),t=(0,n._)([(0,f.j)("esri.layers.mixins.PortalLayer")],t),t},S={credential:null,user:null}},56811:(e,t,r)=>{r.d(t,{M:()=>o});var n=r(27366),i=r(49861),l=(r(63780),r(93169),r(25243),r(69912));const o=e=>{let t=class extends e{constructor(){super(...arguments),this.minScale=0,this.maxScale=0}get effectiveScaleRange(){const e={minScale:this.minScale,maxScale:this.maxScale},t=this.parent;t&&"effectiveScaleRange"in t&&function(e,t){e.minScale=e.minScale>0?t.minScale>0?Math.min(e.minScale,t.minScale):e.minScale:t.minScale,e.maxScale=e.maxScale>0?t.maxScale>0?Math.max(e.maxScale,t.maxScale):e.maxScale:t.maxScale}(e,t.effectiveScaleRange);const r=this._get("effectiveScaleRange");return r&&r.minScale===e.minScale&&r.maxScale===e.maxScale?r:e}};return(0,n._)([(0,i.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"minScale",void 0),(0,n._)([(0,i.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"maxScale",void 0),(0,n._)([(0,i.Cb)({readOnly:!0})],t.prototype,"effectiveScaleRange",null),t=(0,n._)([(0,l.j)("esri.layers.mixins.ScaleRangeLayer")],t),t}},39638:(e,t,r)=>{var n;function i(e,t){switch(e.type){case"range":{const r="range"in e?e.range[0]:e.minValue,i="range"in e?e.range[1]:e.maxValue;if(+t<r||+t>i)return n.VALUE_OUT_OF_RANGE;break}case"coded-value":case"codedValue":if(null==e.codedValues||e.codedValues.every((e=>null==e||e.code!==t)))return n.INVALID_CODED_VALUE}return null}function l(e){if(e&&"range"===e.type)return{min:"range"in e?e.range[0]:e.minValue,max:"range"in e?e.range[1]:e.maxValue}}r.d(t,{D3:()=>l,F3:()=>i,V$:()=>n}),function(e){e.VALUE_OUT_OF_RANGE="domain-validation-error::value-out-of-range",e.INVALID_CODED_VALUE="domain-validation-error::invalid-coded-value"}(n||(n={}))},37270:(e,t,r)=>{r.d(t,{AB:()=>h,CH:()=>C,Ec:()=>ee,Gz:()=>Y,H7:()=>j,Lk:()=>g,Ll:()=>_,M$:()=>Z,Mu:()=>M,O5:()=>w,Pz:()=>G,Q0:()=>f,Qc:()=>q,Qj:()=>F,R9:()=>X,UF:()=>p,YN:()=>c,ZV:()=>x,gd:()=>y,io:()=>b,j:()=>T,os:()=>D,qN:()=>k,vP:()=>Q,vl:()=>I,wF:()=>H,y2:()=>$});var n=r(10064),i=r(92026),l=r(18202),o=r(39638),a=r(819);const s=["field","field2","field3","normalizationField","rotationInfo.field","proportionalSymbolInfo.field","proportionalSymbolInfo.normalizationField","colorInfo.field","colorInfo.normalizationField"],u=["field","normalizationField"];function c(e,t){if(null!=e&&null!=t)for(const r of Array.isArray(e)?e:[e])if(d(s,r,t),"visualVariables"in r&&r.visualVariables)for(const e of r.visualVariables)d(u,e,t)}function d(e,t,r){if(e)for(const n of e){const e=(0,l.hS)(n,t),i=e&&"function"!=typeof e&&r.get(e);i&&(0,l.RB)(n,i.name,t)}}function p(e,t){if(null!=e&&t?.fields.length)if("startField"in e){const r=t.get(e.startField),n=t.get(e.endField);e.startField=r&&r.name||null,e.endField=n&&n.name||null}else{const r=t.get(e.startTimeField),n=t.get(e.endTimeField);e.startTimeField=r&&r.name||null,e.endTimeField=n&&n.name||null}}const m=new Set;function f(e,t){return e&&t?(m.clear(),y(m,e,t),Array.from(m).sort()):[]}function y(e,t,r){if(r)if(t?.fields?.length)if(r.includes("*"))for(const{name:n}of t.fields)e.add(n);else for(const n of r)h(e,t,n);else{if(r.includes("*"))return e.clear(),void e.add("*");for(const t of r)e.add(t)}}function h(e,t,r){if("string"==typeof r)if(t){const n=t.get(r);n&&e.add(n.name)}else e.add(r)}function g(e,t){return(0,i.Wi)(t)||(0,i.Wi)(e)?[]:t.includes("*")?e.fields.map((e=>e.name)):t}async function b(e,t,r){if(!r)return;const{arcadeUtils:n}=await(0,a.LC)(),i=n.extractFieldNames(r,t?.fields?.map((e=>e.name)));for(const l of i)h(e,t,l)}async function v(e,t,i){if(i&&"1=1"!==i){const l=(await Promise.all([r.e(8562),r.e(4397)]).then(r.bind(r,48562))).WhereClause.create(i,t);if(!l.isStandardized)throw new n.Z("fieldUtils:collectFilterFields","Where clause is not standardized",{where:i});y(e,t,l.fieldNames)}}function w(e){let{displayField:t,fields:r}=e;return t||(r&&r.length?S(r,"name-or-title")||S(r,"unique-identifier")||S(r,"type-or-category")||function(e){for(const t of e){if(!t||!t.name)continue;const e=t.name.toLowerCase();if(e.includes("name")||e.includes("title"))return t.name}return null}(r):null)}function S(e,t){for(const r of e)if(r&&r.valueType&&r.valueType===t)return r.name;return null}async function I(e,t){if(!t)return;const r=(0,l.hS)("elevationInfo.featureExpressionInfo",t);return r?r.collectRequiredFields(e,t.fieldsIndex):void 0}async function x(e,t,r){if(!t||!r||!("fields"in r))return;const n=[];if(r.popupTemplate?.expressionInfos&&n.push(...r.popupTemplate.expressionInfos.map((r=>b(e,t.fieldsIndex,r.expression)))),Array.isArray(r.popupTemplate?.content)){const i=r.popupTemplate.content;for(const r of i)"expression"===r.type&&r.expressionInfo&&n.push(b(e,t.fieldsIndex,r.expressionInfo.expression))}r.fields&&n.push(...r.fields.map((r=>async function(e,t,r){r.outStatistic.onStatisticValueExpression?b(e,t,r.outStatistic.onStatisticValueExpression):e.add(r.outStatistic.onStatisticField)}(e,t.fieldsIndex,r)))),await Promise.all(n)}async function _(e,t,r){t&&(t.timeInfo&&(0,i.pC)(r)&&r.timeExtent&&y(e,t.fieldsIndex,[t.timeInfo.startField,t.timeInfo.endField]),t.floorInfo&&y(e,t.fieldsIndex,[t.floorInfo.floorField]),(0,i.pC)(r)&&(0,i.pC)(r.where)&&await v(e,t.fieldsIndex,r.where))}async function F(e,t,r){t&&r&&await Promise.all(r.map((r=>async function(e,t,r){t&&r&&(r.valueExpression?await b(e,t.fieldsIndex,r.valueExpression):r.field&&h(e,t.fieldsIndex,r.field))}(e,t,r))))}function C(e){if(!e)return[];const t="editFieldsInfo"in e&&e.editFieldsInfo;return t?f(e.fieldsIndex,[t&&t.creatorField,t&&t.creationDateField,t&&t.editorField,t&&t.editDateField]):[]}function T(e){if(!e)return[];const t=e.geometryFieldsInfo;return t?f(e.fieldsIndex,[t.shapeAreaField,t.shapeLengthField]):[]}async function M(e,t){const{labelingInfo:r,fieldsIndex:n}=t;r&&r.length&&await Promise.all(r.map((t=>async function(e,t,r){if(!r)return;const n=r.getLabelExpression(),i=r.where;if("arcade"===n.type)await b(e,t,n.expression);else{const r=n.expression.match(/{[^}]*}/g);r&&r.forEach((r=>{h(e,t,r.slice(1,-1))}))}await v(e,t,i)}(e,n,t))))}function D(e){const t=e.defaultValue;return void 0!==t&&L(e,t)?t:e.nullable?null:void 0}function E(e){return"number"==typeof e&&!isNaN(e)&&isFinite(e)}function N(e){return null===e||E(e)}const P="isInteger"in Number?Number.isInteger:e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e;function U(e){return null===e||P(e)}function O(e){return null!=e&&"string"==typeof e}function R(e){return null===e||O(e)}function A(){return!0}function L(e,t){let r;switch(e.type){case"date":case"integer":case"long":case"small-integer":case"esriFieldTypeDate":case"esriFieldTypeInteger":case"esriFieldTypeLong":case"esriFieldTypeSmallInteger":r=e.nullable?U:P;break;case"double":case"single":case"esriFieldTypeSingle":case"esriFieldTypeDouble":r=e.nullable?N:E;break;case"string":case"esriFieldTypeString":r=e.nullable?R:O;break;default:r=A}return 1===arguments.length?r:r(t)}const V=new Set(["integer","small-integer","single","double","esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]);function j(e){return null!=e&&V.has(e.type)}function k(e){return null!=e&&("string"===e.type||"esriFieldTypeString"===e.type)}function $(e){return null!=e&&("date"===e.type||"esriFieldTypeDate"===e.type)}var Z,Y;function G(e){return null==e||"number"==typeof e&&isNaN(e)?null:e}function q(e,t){return e.nullable&&null===t?null:j(e)&&!function(e,t){const r="string"==typeof e?W(e):e;return!!r&&(r.isInteger?P(t)&&t>=r.min&&t<=r.max:t>=r.min&&t<=r.max)}(e.type,Number(t))?Z.OUT_OF_RANGE:L(e,t)?e.domain?(0,o.F3)(e.domain,t):null:Y.INVALID_TYPE}function H(e){return(0,o.D3)(e.domain)||(j(e)?W(e.type):void 0)}function W(e){switch(e){case"esriFieldTypeSmallInteger":case"small-integer":return z;case"esriFieldTypeInteger":case"integer":return J;case"esriFieldTypeSingle":case"single":return B;case"esriFieldTypeDouble":case"double":return K}}!function(e){e.OUT_OF_RANGE="numeric-range-validation-error::out-of-range"}(Z||(Z={})),function(e){e.INVALID_TYPE="type-validation-error::invalid-type"}(Y||(Y={}));const z={min:-32768,max:32767,isInteger:!0},J={min:-2147483648,max:2147483647,isInteger:!0},B={min:-34e37,max:12e37,isInteger:!1},K={min:-Number.MAX_VALUE,max:Number.MAX_VALUE,isInteger:!1};function Q(e,t,r){switch(e){case o.V$.INVALID_CODED_VALUE:return`Value ${r} is not in the coded domain - field: ${t.name}, domain: ${JSON.stringify(t.domain)}`;case o.V$.VALUE_OUT_OF_RANGE:return`Value ${r} is out of the range of valid values - field: ${t.name}, domain: ${JSON.stringify(t.domain)}`;case Y.INVALID_TYPE:return`Value ${r} is not a valid value for the field type - field: ${t.name}, type: ${t.type}, nullable: ${t.nullable}`;case Z.OUT_OF_RANGE:{const{min:e,max:n}=W(t.type);return`Value ${r} is out of range for the number type - field: ${t.name}, type: ${t.type}, value range is ${e} to ${n}`}}}function X(e,t){return!function(e,t,r){if(!t||!t.attributes||!e){if((0,i.pC)(r))for(const t of e)r.add(t);return!0}const n=t.attributes;let l=!1;for(const o of e)if(!(o in n)){if(l=!0,!(0,i.pC)(r))break;r.add(o)}return l}(e,t,null)}function ee(e){return["raster.itempixelvalue","raster.servicepixelvalue"].some((t=>e.toLowerCase().startsWith(t)))}},22061:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(27366),i=r(51995),l=r(43404),o=r(46784),a=r(49861),s=(r(63780),r(93169),r(25243),r(38511)),u=r(69912);const c=new l.X({esriSMS:"simple-marker",esriPMS:"picture-marker",esriSLS:"simple-line",esriSFS:"simple-fill",esriPFS:"picture-fill",esriTS:"text",esriSHD:"shield-label-symbol",PointSymbol3D:"point-3d",LineSymbol3D:"line-3d",PolygonSymbol3D:"polygon-3d",WebStyleSymbol:"web-style",MeshSymbol3D:"mesh-3d",LabelSymbol3D:"label-3d",CIMSymbolReference:"cim"});let d=0,p=class extends o.wq{constructor(e){super(e),this.id="sym"+d++,this.type=null,this.color=new i.Z([0,0,0,1])}readColor(e){return e&&null!=e[0]?[e[0],e[1],e[2],e[3]/255]:e}async collectRequiredFields(e,t){}hash(){return JSON.stringify(this.toJSON())}clone(){}};(0,n._)([(0,a.Cb)({type:c.apiValues,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:c.write}}})],p.prototype,"type",void 0),(0,n._)([(0,a.Cb)({type:i.Z,json:{write:{allowNull:!0}}})],p.prototype,"color",void 0),(0,n._)([(0,s.r)("color")],p.prototype,"readColor",null),p=(0,n._)([(0,u.j)("esri.symbols.Symbol")],p);const m=p}}]);
//# sourceMappingURL=4711.91a02fb0.chunk.js.map