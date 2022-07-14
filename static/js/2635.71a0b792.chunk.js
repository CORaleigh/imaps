"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[2635,4397],{84397:(t,e,n)=>{n.d(e,{a:()=>r,c:()=>s,g:()=>i});var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function i(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function r(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}},6394:(t,e,n)=>{function s(){return[0,0]}function i(t){return[t[0],t[1]]}function r(t,e){return[t,e]}function o(t){const e=[0,0],n=Math.min(2,t.length);for(let s=0;s<n;++s)e[s]=t[s];return e}function a(t,e){return new Float64Array(t,e,2)}function c(){return[0,0]}function h(){return r(1,1)}function u(){return r(1,0)}function l(){return r(0,1)}n.d(e,{O:()=>p,Z:()=>f,a:()=>s,b:()=>o,c:()=>a,d:()=>i,f:()=>r});const f=[0,0],p=h(),d=u(),m=l();Object.freeze(Object.defineProperty({__proto__:null,create:s,clone:i,fromValues:r,fromArray:o,createView:a,zeros:c,ones:h,unitX:u,unitY:l,ZEROS:f,ONES:p,UNIT_X:d,UNIT_Y:m},Symbol.toStringTag,{value:"Module"}))},67077:(t,e,n)=>{function s(){return[0,0,0,0]}function i(t){return[t[0],t[1],t[2],t[3]]}function r(t,e,n,s){return[t,e,n,s]}function o(t){const e=[0,0,0,0],n=Math.min(4,t.length);for(let s=0;s<n;++s)e[s]=t[s];return e}function a(t,e){return new Float64Array(t,e,4)}function c(){return[0,0,0,0]}function h(){return r(1,1,1,1)}function u(){return r(1,0,0,0)}function l(){return r(0,1,0,0)}function f(){return r(0,0,1,0)}function p(){return r(0,0,0,1)}n.d(e,{O:()=>m,Z:()=>d,a:()=>a,b:()=>o,c:()=>s,d:()=>i,f:()=>r});const d=[0,0,0,0],m=h(),g=u(),_=l(),y=f(),v=p();Object.freeze(Object.defineProperty({__proto__:null,create:s,clone:i,fromValues:r,fromArray:o,createView:a,zeros:c,ones:h,unitX:u,unitY:l,unitZ:f,unitW:p,ZEROS:d,ONES:m,UNIT_X:g,UNIT_Y:_,UNIT_Z:y,UNIT_W:v},Symbol.toStringTag,{value:"Module"}))},59026:(t,e,n)=>{n.d(e,{Z:()=>i});var s=n(18759);class i{constructor(t,e){this._storage=new s.WJ,this._storage.maxSize=t,e&&this._storage.registerRemoveFunc("",e)}put(t,e){this._storage.put(t,e,1,1)}pop(t){return this._storage.pop(t)}get(t){return this._storage.get(t)}clear(){this._storage.clearAll()}destroy(){this._storage.destroy()}}},18759:(t,e,n)=>{n.d(e,{WJ:()=>h,Xq:()=>c,an:()=>r,lN:()=>o});var s=n(92026),i=n(27546);const r=-3;var o,a;(a=o||(o={}))[a.ALL=0]="ALL",a[a.SOME=1]="SOME";class c{constructor(t,e,n){this._namespace=t,this._storage=e,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),this._namespace+=":",n&&(this._storage.registerRemoveFunc(this._namespace,n),this._removeFunc=!0)}destroy(){this._storage.clear(this._namespace),this._removeFunc&&this._storage.deregisterRemoveFunc(this._namespace),this._storage.deregister(this),this._storage=null}get namespace(){return this._namespace.slice(0,-1)}get hitRate(){return this._hit/(this._hit+this._miss)}get size(){return this._storage.size}get maxSize(){return this._storage.maxSize}resetHitRate(){this._hit=this._miss=0}put(t,e,n){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;this._storage.put(this._namespace+t,e,n,s)}get(t){const e=this._storage.get(this._namespace+t);return void 0===e?++this._miss:++this._hit,e}pop(t){const e=this._storage.pop(this._namespace+t);return void 0===e?++this._miss:++this._hit,e}updateSize(t,e,n){this._storage.updateSize(this._namespace+t,e,n)}clear(){this._storage.clear(this._namespace)}clearAll(){this._storage.clearAll()}getStats(){return this._storage.getStats()}resetStats(){this._storage.resetStats()}}class h{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10485760;this._maxSize=t,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=new i.Z,this._users=new i.Z}destroy(){this.clearAll(),this._removeFuncs.clear(),this._users.clear(),this._db=null}register(t){this._users.push(t)}deregister(t){this._users.removeUnordered(t)}registerRemoveFunc(t,e){this._removeFuncs.push([t,e])}deregisterRemoveFunc(t){this._removeFuncs.filterInPlace((e=>e[0]!==t))}get size(){return this._size}get maxSize(){return this._maxSize}set maxSize(t){this._maxSize=Math.max(t,0),this._checkSizeLimit()}put(t,e,n,s){const i=this._db.get(t);if(i&&(this._size-=i.size,this._db.delete(t),i.entry!==e&&this._notifyRemove(t,i.entry,o.ALL)),n>this._maxSize)return void this._notifyRemove(t,e,o.ALL);if(void 0===e)return void console.warn("Refusing to cache undefined entry ");if(!n||n<0)return void console.warn("Refusing to cache entry with invalid size "+n);const a=1+Math.max(s,r)-r;this._db.set(t,{entry:e,size:n,lifetime:a,lives:a}),this._size+=n,this._checkSizeLimit()}updateSize(t,e,n){const i=this._db.get(t);if(i&&i.entry===e){for(this._size-=i.size;n>this._maxSize;){const i=this._notifyRemove(t,e,o.SOME);if(!((0,s.pC)(i)&&i>0))return void this._db.delete(t);n=i}i.size=n,this._size+=n,this._checkSizeLimit()}}pop(t){const e=this._db.get(t);if(e)return this._size-=e.size,this._db.delete(t),++this._hit,e.entry;++this._miss}get(t){const e=this._db.get(t);if(void 0!==e)return this._db.delete(t),e.lives=e.lifetime,this._db.set(t,e),++this._hit,e.entry;++this._miss}getStats(){const t={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},e={},n=new Array;this._db.forEach(((t,s)=>{const i=t.lifetime;n[i]=(n[i]||0)+t.size,this._users.forAll((n=>{const i=n.namespace;if(s.startsWith(i)){const n=e[i]||0;e[i]=n+t.size}}))}));const s={};this._users.forAll((t=>{const n=t.namespace;if(!isNaN(t.hitRate)&&t.hitRate>0){const i=e[n]||0;e[n]=i,s[n]=Math.round(100*t.hitRate)+"%"}else s[n]="0%"}));const i=Object.keys(e);i.sort(((t,n)=>e[n]-e[t])),i.forEach((n=>t[n]=Math.round(e[n]/2**20)+"MB / "+s[n]));for(let o=n.length-1;o>=0;--o){const e=n[o];e&&(t["Priority "+(o+r-1)]=Math.round(e/this.size*100)+"%")}return t}resetStats(){this._hit=this._miss=0,this._users.forAll((t=>t.resetHitRate()))}clear(t){this._db.forEach(((e,n)=>{n.startsWith(t)&&(this._size-=e.size,this._db.delete(n),this._notifyRemove(n,e.entry,o.ALL))}))}clearAll(){this._db.forEach(((t,e)=>this._notifyRemove(e,t.entry,o.ALL))),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemove(t,e,n){let s;return this._removeFuncs.some((i=>{if(t.startsWith(i[0])){const t=i[1](e,n);return"number"==typeof t&&(s=t),!0}return!1})),s}_checkSizeLimit(){if(!(this._size<=this._maxSize))for(const[t,e]of this._db){if(this._db.delete(t),e.lives<=1){this._size-=e.size;const n=this._notifyRemove(t,e.entry,o.SOME);(0,s.pC)(n)&&n>0&&(this._size+=n,e.lives=e.lifetime,e.size=n,this._db.set(t,e))}else--e.lives,this._db.set(t,e);if(this._size<=.9*this.maxSize)return}}}},59896:(t,e,n)=>{function s(t){return 32+t.length}function i(t){if(!t)return 0;let e=32;for(const n in t)if(t.hasOwnProperty(n)){const i=t[n];switch(typeof i){case"string":e+=s(i);break;case"number":e+=16;break;case"boolean":e+=4}}return e}function r(t,e){return 32+t.length*e}var o;n.d(e,{Y8:()=>o,do:()=>r,f2:()=>i}),function(t){t[t.KILOBYTES=1024]="KILOBYTES",t[t.MEGABYTES=1048576]="MEGABYTES",t[t.GIGABYTES=1073741824]="GIGABYTES"}(o||(o={}))},40237:(t,e,n)=>{n.d(e,{N:()=>s});const s={convertToGEGeometry:function(t,e){return null==e?null:t.convertJSONToGeometry(e)},exportPoint:function(t,e,n){const s=new i(t.getPointX(e),t.getPointY(e),n),r=t.hasZ(e),o=t.hasM(e);return r&&(s.z=t.getPointZ(e)),o&&(s.m=t.getPointM(e)),s},exportPolygon:function(t,e,n){return new r(t.exportPaths(e),n,t.hasZ(e),t.hasM(e))},exportPolyline:function(t,e,n){return new o(t.exportPaths(e),n,t.hasZ(e),t.hasM(e))},exportMultipoint:function(t,e,n){return new a(t.exportPoints(e),n,t.hasZ(e),t.hasM(e))},exportExtent:function(t,e,n){const s=t.hasZ(e),i=t.hasM(e),r=new c(t.getXMin(e),t.getYMin(e),t.getXMax(e),t.getYMax(e),n);if(s){const n=t.getZExtent(e);r.zmin=n.vmin,r.zmax=n.vmax}if(i){const n=t.getMExtent(e);r.mmin=n.vmin,r.mmax=n.vmax}return r}};class i{constructor(t,e,n){this.x=t,this.y=e,this.spatialReference=n,this.z=void 0,this.m=void 0}}class r{constructor(t,e,n,s){this.rings=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),s&&(this.hasM=s)}}class o{constructor(t,e,n,s){this.paths=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),s&&(this.hasM=s)}}class a{constructor(t,e,n,s){this.points=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),s&&(this.hasM=s)}}class c{constructor(t,e,n,s,i){this.xmin=t,this.ymin=e,this.xmax=n,this.ymax=s,this.spatialReference=i,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},85981:(t,e,n)=>{n.d(e,{AR:()=>_,Gr:()=>g,JG:()=>h,Jk:()=>f,KU:()=>d,Ue:()=>c,al:()=>u,ct:()=>m,nF:()=>p,zk:()=>l});var s=n(16889),i=n(21530),r=n(11186),o=n(71353),a=n(11185);function c(t){return t?{origin:(0,o.a)(t.origin),vector:(0,o.a)(t.vector)}:{origin:(0,o.c)(),vector:(0,o.c)()}}function h(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c();return u(t.origin,t.vector,e)}function u(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c();return(0,r.c)(n.origin,t),(0,r.c)(n.vector,e),n}function l(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c();return(0,r.c)(n.origin,t),(0,r.b)(n.vector,e,t),n}function f(t,e){const n=(0,r.b)(a.WM.get(),e,t.origin),i=(0,r.e)(t.vector,n),o=(0,r.e)(t.vector,t.vector),c=(0,s.uZ)(i/o,0,1),h=(0,r.b)(a.WM.get(),(0,r.g)(a.WM.get(),t.vector,c),n);return(0,r.e)(h,h)}function p(t,e,n){return m(t,e,0,1,n)}function d(t,e,n){return(0,r.a)(n,t.origin,(0,r.g)(n,t.vector,e))}function m(t,e,n,i,o){const{vector:c,origin:h}=t,u=(0,r.b)(a.WM.get(),e,h),l=(0,r.e)(c,u)/(0,r.p)(c);return(0,r.g)(o,c,(0,s.uZ)(l,n,i)),(0,r.a)(o,o,t.origin)}function g(t,e){if(y(t,function(t,e){const n=x.get();return n.origin=t,n.vector=e,n}(e.origin,e.direction),!1,v)){const{tA:e,pB:n,distance2:s}=v;if(e>=0&&e<=1)return s;if(e<0)return(0,r.d)(t.origin,n);if(e>1)return(0,r.d)((0,r.a)(a.WM.get(),t.origin,t.vector),n)}return null}function _(t,e,n){return!!y(t,e,!0,v)&&((0,r.c)(n,v.pA),!0)}function y(t,e,n,i){const o=1e-6,c=t.origin,h=(0,r.a)(a.WM.get(),c,t.vector),u=e.origin,l=(0,r.a)(a.WM.get(),u,e.vector),f=a.WM.get(),p=a.WM.get();if(f[0]=c[0]-u[0],f[1]=c[1]-u[1],f[2]=c[2]-u[2],p[0]=l[0]-u[0],p[1]=l[1]-u[1],p[2]=l[2]-u[2],Math.abs(p[0])<o&&Math.abs(p[1])<o&&Math.abs(p[2])<o)return!1;const d=a.WM.get();if(d[0]=h[0]-c[0],d[1]=h[1]-c[1],d[2]=h[2]-c[2],Math.abs(d[0])<o&&Math.abs(d[1])<o&&Math.abs(d[2])<o)return!1;const m=f[0]*p[0]+f[1]*p[1]+f[2]*p[2],g=p[0]*d[0]+p[1]*d[1]+p[2]*d[2],_=f[0]*d[0]+f[1]*d[1]+f[2]*d[2],y=p[0]*p[0]+p[1]*p[1]+p[2]*p[2],v=(d[0]*d[0]+d[1]*d[1]+d[2]*d[2])*y-g*g;if(Math.abs(v)<o)return!1;let x=(m*g-_*y)/v,b=(m+g*x)/y;n&&(x=(0,s.uZ)(x,0,1),b=(0,s.uZ)(b,0,1));const M=a.WM.get(),S=a.WM.get();return M[0]=c[0]+x*d[0],M[1]=c[1]+x*d[1],M[2]=c[2]+x*d[2],S[0]=u[0]+b*p[0],S[1]=u[1]+b*p[1],S[2]=u[2]+b*p[2],i.tA=x,i.tB=b,i.pA=M,i.pB=S,i.distance2=(0,r.d)(M,S),!0}const v={tA:0,tB:0,pA:(0,o.c)(),pB:(0,o.c)(),distance2:0},x=new i.x((()=>({origin:null,vector:null})))},50689:(t,e,n)=>{n.d(e,{aX:()=>S,or:()=>Z,hR:()=>v});var s=n(42265),i=n(10064),r=n(32718),o=n(92026),a=n(80885),c=n(29909),h=n(76335),u=n(92975),l=n(81753),f=(n(59486),n(76200)),p=n(35995),d=n(77981);async function m(t,e,n){const s="string"==typeof t?(0,p.mN)(t):t,i=e[0].spatialReference,r=(0,d.Ji)(e[0]),o={...n,query:{...s.query,f:"json",sr:i.wkid?i.wkid:JSON.stringify(i),geometries:JSON.stringify((a=e,{geometryType:(0,d.Ji)(a[0]),geometries:a.map((t=>t.toJSON()))}))}};var a;return function(t,e,n){const s=(0,d.q9)(e);return t.map((t=>{const e=s.fromJSON(t);return e.spatialReference=n,e}))}((await(0,f.default)(s.path+"/simplify",o)).data,r,i)}const g=r.Z.getLogger("esri.geometry.support.normalizeUtils");function _(t){return"polygon"===t[0].type}function y(t){return"polyline"===t[0].type}function v(t,e){if(!(t instanceof c.Z||t instanceof a.Z)){const t="straightLineDensify: the input geometry is neither polyline nor polygon";throw g.error(t),new i.Z(t)}const n=(0,h.x3)(t),s=[];for(const i of n){const t=[];s.push(t),t.push([i[0][0],i[0][1]]);for(let n=0;n<i.length-1;n++){const s=i[n][0],r=i[n][1],o=i[n+1][0],a=i[n+1][1],c=Math.sqrt((o-s)*(o-s)+(a-r)*(a-r)),h=(a-r)/c,u=(o-s)/c,l=c/e;if(l>1){for(let a=1;a<=l-1;a++){const n=a*e,i=u*n+s,o=h*n+r;t.push([i,o])}const n=(c+Math.floor(l-1)*e)/2,i=u*n+s,o=h*n+r;t.push([i,o])}t.push([o,a])}}return function(t){return"polygon"===t.type}(t)?new a.Z({rings:s,spatialReference:t.spatialReference}):new c.Z({paths:s,spatialReference:t.spatialReference})}function x(t,e,n){if(e){const e=v(t,1e6);t=(0,l.Sx)(e,!0)}return n&&(t=(0,h.Sy)(t,n)),t}function b(t,e,n){if(Array.isArray(t)){const s=t[0];if(s>e){const n=(0,h.XZ)(s,e);t[0]=s+n*(-2*e)}else if(s<n){const e=(0,h.XZ)(s,n);t[0]=s+e*(-2*n)}}else{const s=t.x;if(s>e){const n=(0,h.XZ)(s,e);t=t.clone().offset(n*(-2*e),0)}else if(s<n){const e=(0,h.XZ)(s,n);t=t.clone().offset(e*(-2*n),0)}}return t}function M(t,e){let n=-1;for(let s=0;s<e.cutIndexes.length;s++){const i=e.cutIndexes[s],r=e.geometries[s],o=(0,h.x3)(r);for(let t=0;t<o.length;t++){const e=o[t];e.some((n=>{if(n[0]<180)return!0;{let n=0;for(let t=0;t<e.length;t++){const s=e[t][0];n=s>n?s:n}n=Number(n.toFixed(9));const s=-360*(0,h.XZ)(n,180);for(let i=0;i<e.length;i++){const e=r.getPoint(t,i);r.setPoint(t,i,e.clone().offset(s,0))}return!0}}))}if(i===n){if(_(t))for(const e of(0,h.x3)(r))t[i]=t[i].addRing(e);else if(y(t))for(const e of(0,h.x3)(r))t[i]=t[i].addPath(e)}else n=i,t[i]=r}return t}async function S(t,e,n){if(!Array.isArray(t))return S([t],e);e&&"string"!=typeof e&&g.warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead");const i="string"==typeof e?e:e?.url??s.Z.geometryServiceUrl;let r,_,y,v,Z,z,w,R,C=0;const E=[],A=[];for(const s of t)if((0,o.Wi)(s))A.push(s);else if(r||(r=s.spatialReference,_=(0,u.C5)(r),y=r.isWebMercator,z=y?102100:4326,v=h.UZ[z].maxX,Z=h.UZ[z].minX,w=h.UZ[z].plus180Line,R=h.UZ[z].minus180Line),_)if("mesh"===s.type)A.push(s);else if("point"===s.type)A.push(b(s.clone(),v,Z));else if("multipoint"===s.type){const t=s.clone();t.points=t.points.map((t=>b(t,v,Z))),A.push(t)}else if("extent"===s.type){const t=s.clone()._normalize(!1,!1,_);A.push(t.rings?new a.Z(t):t)}else if(s.extent){const t=s.extent,e=(0,h.XZ)(t.xmin,Z)*(2*v);let n=0===e?s.clone():(0,h.Sy)(s.clone(),e);t.offset(e,0),t.intersects(w)&&t.xmax!==v?(C=t.xmax>C?t.xmax:C,n=x(n,y),E.push(n),A.push("cut")):t.intersects(R)&&t.xmin!==Z?(C=t.xmax*(2*v)>C?t.xmax*(2*v):C,n=x(n,y,360),E.push(n),A.push("cut")):A.push(n)}else A.push(s.clone());else A.push(s);let L=(0,h.XZ)(C,v),T=-90;const j=L,O=new c.Z;for(;L>0;){const t=360*L-180;O.addPath([[t,T],[t,-1*T]]),T*=-1,L--}if(E.length>0&&j>0){const e=M(E,await async function(t,e,n,s){const i="string"==typeof t?(0,p.mN)(t):t,r=e[0].spatialReference,o={...s,query:{...i.query,f:"json",sr:JSON.stringify(r),target:JSON.stringify({geometryType:(0,d.Ji)(e[0]),geometries:e}),cutter:JSON.stringify(n)}},a=await(0,f.default)(i.path+"/cut",o),{cutIndexes:c,geometries:h=[]}=a.data;return{cutIndexes:c,geometries:h.map((t=>{const e=(0,d.im)(t);return e.spatialReference=r,e}))}}(i,E,O,n)),s=[],r=[];for(let n=0;n<A.length;n++){const i=A[n];if("cut"!==i)r.push(i);else{const i=e.shift(),a=t[n];(0,o.pC)(a)&&"polygon"===a.type&&a.rings&&a.rings.length>1&&i.rings.length>=a.rings.length?(s.push(i),r.push("simplify")):r.push(y?(0,l.$)(i):i)}}if(!s.length)return r;const a=await m(i,s,n),c=[];for(let t=0;t<r.length;t++){const e=r[t];"simplify"!==e?c.push(e):c.push(y?(0,l.$)(a.shift()):a.shift())}return c}const N=[];for(let s=0;s<A.length;s++){const t=A[s];if("cut"!==t)N.push(t);else{const t=E.shift();N.push(!0===y?(0,l.$)(t):t)}}return N}function Z(t,e){const n=(0,u.C5)(e);if(n){const[e,s]=n.valid,i=s-e;if(t<e)for(;t<e;)t+=i;if(t>s)for(;t>s;)t-=i}return t}},76335:(t,e,n)=>{n.d(e,{Sy:()=>c,UZ:()=>o,XZ:()=>a,x3:()=>h});var s=n(29909),i=n(78952),r=n(77981);const o={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new s.Z({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:i.Z.WebMercator}),minus180Line:new s.Z({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:i.Z.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new s.Z({paths:[[[180,-180],[180,180]]],spatialReference:i.Z.WGS84}),minus180Line:new s.Z({paths:[[[-180,-180],[-180,180]]],spatialReference:i.Z.WGS84})}};function a(t,e){return Math.ceil((t-e)/(2*e))}function c(t,e){const n=h(t);for(const s of n)for(const t of s)t[0]+=e;return t}function h(t){return(0,r.oU)(t)?t.rings:t.paths}},19995:(t,e,n)=>{n.d(e,{_W:()=>f,iV:()=>m,oj:()=>_});var s=n(92026),i=n(79803),r=n(40237),o=n(92975),a=n(81753);const c=[0,0];function h(t,e){if(!e)return null;if("x"in e){const n={x:0,y:0};return[n.x,n.y]=t(e.x,e.y,c),null!=e.z&&(n.z=e.z),null!=e.m&&(n.m=e.m),n}if("xmin"in e){const n={xmin:0,ymin:0,xmax:0,ymax:0};return[n.xmin,n.ymin]=t(e.xmin,e.ymin,c),[n.xmax,n.ymax]=t(e.xmax,e.ymax,c),e.hasZ&&(n.zmin=e.zmin,n.zmax=e.zmax,n.hasZ=!0),e.hasM&&(n.mmin=e.mmin,n.mmax=e.mmax,n.hasM=!0),n}return"rings"in e?{rings:u(e.rings,t),hasM:e.hasM,hasZ:e.hasZ}:"paths"in e?{paths:u(e.paths,t),hasM:e.hasM,hasZ:e.hasZ}:"points"in e?{points:l(e.points,t),hasM:e.hasM,hasZ:e.hasZ}:void 0}function u(t,e){const n=[];for(const s of t)n.push(l(s,e));return n}function l(t,e){const n=[];for(const s of t){const t=e(s[0],s[1],[0,0]);n.push(t),s.length>2&&t.push(s[2]),s.length>3&&t.push(s[3])}return n}async function f(t,e){if(!e)return;const n=Array.isArray(t)?t.map((t=>(0,s.pC)(t.geometry)&&t.geometry.spatialReference)):[t];await(0,i.iQ)(n.map((t=>({source:t,dest:e}))))}const p=h.bind(null,a.hG),d=h.bind(null,a.R6);function m(t,e,n,s){if(!t)return t;if(n||(n=e,e=t.spatialReference),!(0,o.JY)(e)||!(0,o.JY)(n)||(0,o.fS)(e,n))return t;if((0,a.Q8)(e,n)){const e=(0,o.sS)(n)?p(t):d(t);return e.spatialReference=n,e}return(0,i.oj)(r.N,[t],e,n,null,s)[0]}const g=new class{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(t,e,n){if(!t||!t.length||!e||!n||(0,o.fS)(e,n))return t;const s={geometries:t,inSpatialReference:e,outSpatialReference:n,resolve:null};return this._jobs.push(s),new Promise((t=>{s.resolve=t,null===this._timer&&(this._timer=setTimeout(this._process,10))}))}_process(){this._timer=null;const t=this._jobs.shift();if(!t)return;const{geometries:e,inSpatialReference:n,outSpatialReference:s,resolve:c}=t;(0,a.Q8)(n,s)?(0,o.sS)(s)?c(e.map(p)):c(e.map(d)):c((0,i.oj)(r.N,e,n,s,null,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}};function _(t,e,n){return g.push(t,e,n)}},32970:(t,e,n)=>{n.d(e,{Z:()=>p});var s,i=n(27366),r=n(51995),o=n(84652),a=n(49861),c=n(25243),h=n(27135),u=n(69912),l=n(55661);let f=s=class extends l.Z{constructor(t){super(t),this.algorithm=null,this.fromColor=null,this.toColor=null,this.type="algorithmic"}clone(){return new s({fromColor:(0,o.d9)(this.fromColor),toColor:(0,o.d9)(this.toColor),algorithm:this.algorithm})}};(0,i._)([(0,h.J)({esriCIELabAlgorithm:"cie-lab",esriHSVAlgorithm:"hsv",esriLabLChAlgorithm:"lab-lch"})],f.prototype,"algorithm",void 0),(0,i._)([(0,a.Cb)({type:r.Z,json:{type:[c.z8],write:!0}})],f.prototype,"fromColor",void 0),(0,i._)([(0,a.Cb)({type:r.Z,json:{type:[c.z8],write:!0}})],f.prototype,"toColor",void 0),(0,i._)([(0,a.Cb)({type:["algorithmic"]})],f.prototype,"type",void 0),f=s=(0,i._)([(0,u.j)("esri.rest.support.AlgorithmicColorRamp")],f);const p=f},55661:(t,e,n)=>{n.d(e,{Z:()=>c});var s=n(27366),i=n(46784),r=n(49861),o=(n(63780),n(93169),n(25243),n(69912));let a=class extends i.wq{constructor(t){super(t),this.type=null}};(0,s._)([(0,r.Cb)({readOnly:!0,json:{read:!1,write:!0}})],a.prototype,"type",void 0),a=(0,s._)([(0,o.j)("esri.rest.support.ColorRamp")],a);const c=a},58169:(t,e,n)=>{n.d(e,{Z:()=>l});var s,i=n(27366),r=n(84652),o=n(49861),a=(n(25243),n(69912)),c=n(32970),h=n(55661);let u=s=class extends h.Z{constructor(t){super(t),this.colorRamps=null,this.type="multipart"}clone(){return new s({colorRamps:(0,r.d9)(this.colorRamps)})}};(0,i._)([(0,o.Cb)({type:[c.Z],json:{write:!0}})],u.prototype,"colorRamps",void 0),(0,i._)([(0,o.Cb)({type:["multipart"]})],u.prototype,"type",void 0),u=s=(0,i._)([(0,a.j)("esri.rest.support.MultipartColorRamp")],u);const l=u},57634:(t,e,n)=>{n.d(e,{V:()=>o,i:()=>a});var s=n(32970),i=n(55661),r=n(58169);const o={key:"type",base:i.Z,typeMap:{algorithmic:s.Z,multipart:r.Z}};function a(t){return t&&t.type?"algorithmic"===t.type?s.Z.fromJSON(t):"multipart"===t.type?r.Z.fromJSON(t):null:null}},97731:(t,e,n)=>{n.d(e,{E6:()=>h,Kj:()=>f,RQ:()=>m,T:()=>o,ep:()=>c,hu:()=>r,kG:()=>l,tM:()=>d,u_:()=>u,yK:()=>a,zF:()=>p});var s=n(6394);n(90045);(0,n(67077).c)();class i{constructor(t){this.message=t}toString(){return`AssertException: ${this.message}`}}function r(t,e){if(!t)throw e=e||"assert",console.log(new Error(e).stack),new i(e)}function o(t,e){t||(e=e||"",console.warn("Verify failed: "+e+"\n"+new Error("verify").stack))}function a(t,e,n,s){let i,r=(n[0]-t[0])/e[0],o=(s[0]-t[0])/e[0];r>o&&(i=r,r=o,o=i);let a=(n[1]-t[1])/e[1],c=(s[1]-t[1])/e[1];if(a>c&&(i=a,a=c,c=i),r>c||a>o)return!1;a>r&&(r=a),c<o&&(o=c);let h=(n[2]-t[2])/e[2],u=(s[2]-t[2])/e[2];return h>u&&(i=h,h=u,u=i),!(r>u||h>o)&&(u<o&&(o=u),!(o<0))}function c(t,e,n,i,r){let o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:(0,s.a)();const a=(i[r]-n[r])*(e[0]-t[0])-(i[0]-n[0])*(e[r]-t[r]),c=(i[0]-n[0])*(t[r]-n[r])-(i[r]-n[r])*(t[0]-n[0]);if(0===a)return!1;const h=c/a;return o[0]=t[0]+h*(e[0]-t[0]),o[1]=t[r]+h*(e[r]-t[r]),!0}function h(t,e){return Math.log(t)/Math.log(e)}function u(t,e,n,s){t[12]=e,t[13]=n,t[14]=s}function l(t){return 1===t[0]&&0===t[1]&&0===t[2]&&0===t[3]&&0===t[4]&&1===t[5]&&0===t[6]&&0===t[7]&&0===t[8]&&0===t[9]&&1===t[10]&&0===t[11]&&1===t[15]}function f(t,e,n){return 2*Math.atan(Math.sqrt(e*e+n*n)*Math.tan(.5*t)/e)}function p(t,e,n){return 2*Math.atan(Math.sqrt(e*e+n*n)*Math.tan(.5*t)/n)}function d(t,e,n){return 2*Math.atan(e*Math.tan(.5*t)/Math.sqrt(e*e+n*n))}function m(t,e,n){return 2*Math.atan(n*Math.tan(.5*t)/Math.sqrt(e*e+n*n))}},54357:(t,e,n)=>{n.r(e),n.d(e,{SceneLayerSnappingSourceWorker:()=>d,default:()=>m});var s=n(27366),i=n(92026),r=n(66978),o=(n(32718),n(25243),n(63780),n(93169),n(75366),n(69912)),a=n(11186),c=n(71353),h=n(85981),u=n(23470),l=n(92536),f=n(78329),p=n(11438);let d=class{constructor(){this._idToComponent=new Map,this._components=new f.Z((t=>t.bounds)),this._edges=new f.Z((t=>t.bounds)),this._tmpLineSegment=(0,h.Ue)(),this._tmpP1=(0,c.c)(),this._tmpP2=(0,c.c)(),this._tmpP3=(0,c.c)(),this.remoteClient=null}async fetchCandidates(t,e){await Promise.resolve(),(0,r.k_)(e),await this._ensureEdgeLocations(t,e);const n=[];return this._edges.forEachNeighbor((e=>this._addCandidates(t,e,n)),t.bounds),{result:{candidates:n}}}async _ensureEdgeLocations(t,e){const n=[];if(this._components.forEachNeighbor((t=>{if((0,i.Wi)(t.info)){const{id:e,uid:s}=t;n.push({id:e,uid:s})}}),t.bounds),!n.length)return;const s={components:n},r=await this.remoteClient.invoke("fetchAllEdgeLocations",s,(0,i.Pt)(e,{}));for(const i of r.components)this._setFetchEdgeLocations(i)}async add(t){const e=new g(t.id,t.bounds);return this._idToComponent.set(e.id,e),this._components.add([e]),{result:{}}}async remove(t){const e=this._idToComponent.get(t.id);if(e){const t=[];this._edges.forEachNeighbor((n=>{n.component===e&&t.push(n)}),e.bounds),this._edges.remove(t),this._components.remove([e]),this._idToComponent.delete(e.id)}return{result:{}}}_setFetchEdgeLocations(t){const e=this._idToComponent.get(t.id);if((0,i.Wi)(e)||t.uid!==e.uid)return;const n=p.extractComponentsEdgeLocationsLayout.createView(t.locations),s=new Array(n.count),r=(0,c.c)(),o=(0,c.c)();for(let i=0;i<n.count;i++){const c=(0,u.c)(),h=(0,u.g)(c);n.position0.getVec(i,r),n.position1.getVec(i,o),(0,a.C)(h,h,r,.5),(0,a.C)(h,h,o,.5),(0,a.a)(h,h,t.origin),c[3]=(0,a.i)(h,r);const l=new _(e,i,c);s[i]=l}this._edges.add(s);const{objectIds:h,origin:l}=t;e.info={locations:n,objectIds:h,origin:l}}_addCandidates(t,e,n){const{locations:s,origin:i,objectIds:r}=e.component.info,o=s.position0.getVec(e.index,this._tmpP1),c=s.position1.getVec(e.index,this._tmpP2);(0,a.a)(o,o,i),(0,a.a)(c,c,i);const h=r[s.componentIndex.get(e.index)];this._addEdgeCandidate(t,h,o,c,n),this._addVertexCandidate(t,h,o,n),this._addVertexCandidate(t,h,c,n)}_addEdgeCandidate(t,e,n,s,i){if(!(t.types&l.r.EDGE))return;const r=(0,u.g)(t.bounds),o=(0,h.zk)(n,s,this._tmpLineSegment),f=(0,h.nF)(o,r,this._tmpP3);if(!(0,u.m)(t.bounds,f))return null;i.push({type:"edge",objectId:e,target:(0,c.a)(f),distance:(0,a.i)(r,f),start:(0,c.a)(n),end:(0,c.a)(s)})}_addVertexCandidate(t,e,n,s){if(!(t.types&l.r.VERTEX))return;const i=(0,u.g)(t.bounds);if(!(0,u.m)(t.bounds,n))return null;s.push({type:"vertex",objectId:e,target:(0,c.a)(n),distance:(0,a.i)(i,n)})}};function m(){return new d}d=(0,s._)([(0,o.j)("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],d);class g{constructor(t,e){this.id=t,this.bounds=e,this.info=null,this.uid=++g.uid}}g.uid=0;class _{constructor(t,e,n){this.component=t,this.index=e,this.bounds=n}}}}]);
//# sourceMappingURL=2635.71a0b792.chunk.js.map