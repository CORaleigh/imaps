"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[9933],{36231:(t,n,e)=>{e.d(n,{q:()=>a});var i,r,s,o={exports:{}};i=o,r=function(){function t(e,i,r,s,o){for(;s>r;){if(s-r>600){var a=s-r+1,h=i-r+1,l=Math.log(a),c=.5*Math.exp(2*l/3),m=.5*Math.sqrt(l*c*(a-c)/a)*(h-a/2<0?-1:1);t(e,i,Math.max(r,Math.floor(i-h*c/a+m)),Math.min(s,Math.floor(i+(a-h)*c/a+m)),o)}var u=e[i],f=r,d=s;for(n(e,r,i),o(e[s],u)>0&&n(e,r,s);f<d;){for(n(e,f,d),f++,d--;o(e[f],u)<0;)f++;for(;o(e[d],u)>0;)d--}0===o(e[r],u)?n(e,r,d):n(e,++d,s),d<=i&&(r=d+1),i<=d&&(s=d-1)}}function n(t,n,e){var i=t[n];t[n]=t[e],t[e]=i}function e(t,n){return t<n?-1:t>n?1:0}return function(n,i,r,s,o){t(n,i,r||0,s||n.length-1,o||e)}},void 0!==(s=r())&&(i.exports=s);const a=o.exports},13491:(t,n,e)=>{e.d(n,{Q:()=>a});var i=e(63780),r=e(92026),s=e(27546),o=e(36231);class a{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,n=arguments.length>1?arguments[1]:void 0;this.compareMinX=m,this.compareMinY=u,this._toBBox=t=>t,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),n&&("function"==typeof n?this._toBBox=n:this._initFormat(n)),this.clear()}destroy(){this.clear(),X.prune(),Y.prune(),B.prune(),w.prune()}all(t){this._all(this.data,t)}search(t,n){let e=this.data;const i=this._toBBox;if(g(t,e))for(X.clear();e;){for(let r=0,s=e.children.length;r<s;r++){const s=e.children[r],o=e.leaf?i(s):s;g(t,o)&&(e.leaf?n(s):_(t,o)?this._all(s,n):X.push(s))}e=X.pop()}}collides(t){let n=this.data;const e=this._toBBox;if(!g(t,n))return!1;for(X.clear();n;){for(let i=0,r=n.children.length;i<r;i++){const r=n.children[i],s=n.leaf?e(r):r;if(g(t,s)){if(n.leaf||_(t,s))return!0;X.push(r)}}n=X.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let n=0,e=t.length;n<e;n++)this.insert(t[n]);return this}let n=this._build(t.slice(0,t.length),0,t.length-1,0);if(this.data.children.length)if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){const t=this.data;this.data=n,n=t}this._insert(n,this.data.height-n.height-1,!0)}else this.data=n;return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=new y([]),this}remove(t){if(!t)return this;let n,e=this.data,s=null,o=0,a=!1;const h=this._toBBox(t);for(B.clear(),w.clear();e||B.length>0;){if(e||(e=(0,r.j0)(B.pop()),s=B.data[B.length-1],o=w.pop()??0,a=!0),e.leaf&&(n=(0,i.cq)(e.children,t,e.children.length,e.indexHint),-1!==n))return e.children.splice(n,1),B.push(e),this._condense(B),this;a||e.leaf||!_(e,h)?s?(o++,e=s.children[o],a=!1):e=null:(B.push(e),w.push(o),o=0,s=e,e=e.children[0])}return this}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,n){let e=t;for(Y.clear();e;){if(!0===e.leaf)for(const t of e.children)n(t);else Y.pushArray(e.children);e=Y.pop()??null}}_build(t,n,e,i){const r=e-n+1;let s=this._maxEntries;if(r<=s){const i=new y(t.slice(n,e+1));return h(i,this._toBBox),i}i||(i=Math.ceil(Math.log(r)/Math.log(s)),s=Math.ceil(r/s**(i-1)));const o=new b([]);o.height=i;const a=Math.ceil(r/s),l=a*Math.ceil(Math.sqrt(s));M(t,n,e,l,this.compareMinX);for(let h=n;h<=e;h+=l){const n=Math.min(h+l-1,e);M(t,h,n,a,this.compareMinY);for(let e=h;e<=n;e+=a){const r=Math.min(e+a-1,n);o.children.push(this._build(t,e,r,i-1))}}return h(o,this._toBBox),o}_chooseSubtree(t,n,e,i){for(;i.push(n),!0!==n.leaf&&i.length-1!==e;){let e,i=1/0,r=1/0;for(let s=0,o=n.children.length;s<o;s++){const o=n.children[s],a=f(o),h=x(t,o)-a;h<r?(r=h,i=a<i?a:i,e=o):h===r&&a<i&&(i=a,e=o)}n=e||n.children[0]}return n}_insert(t,n,e){const i=this._toBBox,r=e?t:i(t);B.clear();const s=this._chooseSubtree(r,this.data,n,B);for(s.children.push(t),c(s,r);n>=0&&B.data[n].children.length>this._maxEntries;)this._split(B,n),n--;this._adjustParentBBoxes(r,B,n)}_split(t,n){const e=t.data[n],i=e.children.length,r=this._minEntries;this._chooseSplitAxis(e,r,i);const s=this._chooseSplitIndex(e,r,i);if(!s)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const o=e.children.splice(s,e.children.length-s),a=e.leaf?new y(o):new b(o);a.height=e.height,h(e,this._toBBox),h(a,this._toBBox),n?t.data[n-1].children.push(a):this._splitRoot(e,a)}_splitRoot(t,n){this.data=new b([t,n]),this.data.height=t.height+1,h(this.data,this._toBBox)}_chooseSplitIndex(t,n,e){let i,r,s;i=r=1/0;for(let o=n;o<=e-n;o++){const n=l(t,0,o,this._toBBox),a=l(t,o,e,this._toBBox),h=p(n,a),c=f(n)+f(a);h<i?(i=h,s=o,r=c<r?c:r):h===i&&c<r&&(r=c,s=o)}return s}_chooseSplitAxis(t,n,e){const i=t.leaf?this.compareMinX:m,r=t.leaf?this.compareMinY:u;this._allDistMargin(t,n,e,i)<this._allDistMargin(t,n,e,r)&&t.children.sort(i)}_allDistMargin(t,n,e,i){t.children.sort(i);const r=this._toBBox,s=l(t,0,n,r),o=l(t,e-n,e,r);let a=d(s)+d(o);for(let h=n;h<e-n;h++){const n=t.children[h];c(s,t.leaf?r(n):n),a+=d(s)}for(let h=e-n-1;h>=n;h--){const n=t.children[h];c(o,t.leaf?r(n):n),a+=d(o)}return a}_adjustParentBBoxes(t,n,e){for(let i=e;i>=0;i--)c(n.data[i],t)}_condense(t){for(let n=t.length-1;n>=0;n--){const e=t.data[n];if(0===e.children.length)if(n>0){const r=t.data[n-1],s=r.children;s.splice((0,i.cq)(s,e,s.length,r.indexHint),1)}else this.clear();else h(e,this._toBBox)}}_initFormat(t){const n=["return a"," - b",";"];this.compareMinX=new Function("a","b",n.join(t[0])),this.compareMinY=new Function("a","b",n.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function h(t,n){l(t,0,t.children.length,n,t)}function l(t,n,e,i,r){r||(r=new y([])),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(let s,o=n;o<e;o++)s=t.children[o],c(r,t.leaf?i(s):s);return r}function c(t,n){t.minX=Math.min(t.minX,n.minX),t.minY=Math.min(t.minY,n.minY),t.maxX=Math.max(t.maxX,n.maxX),t.maxY=Math.max(t.maxY,n.maxY)}function m(t,n){return t.minX-n.minX}function u(t,n){return t.minY-n.minY}function f(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function d(t){return t.maxX-t.minX+(t.maxY-t.minY)}function x(t,n){return(Math.max(n.maxX,t.maxX)-Math.min(n.minX,t.minX))*(Math.max(n.maxY,t.maxY)-Math.min(n.minY,t.minY))}function p(t,n){const e=Math.max(t.minX,n.minX),i=Math.max(t.minY,n.minY),r=Math.min(t.maxX,n.maxX),s=Math.min(t.maxY,n.maxY);return Math.max(0,r-e)*Math.max(0,s-i)}function _(t,n){return t.minX<=n.minX&&t.minY<=n.minY&&n.maxX<=t.maxX&&n.maxY<=t.maxY}function g(t,n){return n.minX<=t.maxX&&n.minY<=t.maxY&&n.maxX>=t.minX&&n.maxY>=t.minY}function M(t,n,e,i,s){const a=[n,e];for(;a.length;){const n=(0,r.j0)(a.pop()),e=(0,r.j0)(a.pop());if(n-e<=i)continue;const h=e+Math.ceil((n-e)/i/2)*i;(0,o.q)(t,h,e,n,s),a.push(e,h,h,n)}}const X=new s.Z,Y=new s.Z,B=new s.Z,w=new s.Z({deallocator:void 0});class v extends class{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}{constructor(){super(...arguments),this.height=1,this.indexHint=new i.SO}}class y extends v{constructor(t){super(),this.children=t,this.leaf=!0}}class b extends v{constructor(t){super(),this.children=t,this.leaf=!1}}},30767:(t,n,e)=>{e.r(n),e.d(n,{default:()=>a});var i=e(93169),r=e(92026),s=e(13491),o=e(57898);class a{async createIndex(t,n){const e=new Array;if(!t.vertexAttributes||!t.vertexAttributes.position)return new s.Q;const i=this._createMeshData(t),o=(0,r.pC)(n)?await n.invoke("createIndexThread",i,{transferList:e}):this.createIndexThread(i).result;return this._createPooledRBush().fromJSON(o)}createIndexThread(t){const n=new Float64Array(t.position),e=this._createPooledRBush();return t.components?this._createIndexComponentsThread(e,n,t.components.map((t=>new Uint32Array(t)))):this._createIndexAllThread(e,n)}_createIndexAllThread(t,n){const e=new Array(n.length/9);let i=0;for(let r=0;r<n.length;r+=9)e[i++]=h(n,r+0,r+3,r+6);return t.load(e),{result:t.toJSON()}}_createIndexComponentsThread(t,n,e){let i=0;for(const o of e)i+=o.length/3;const r=new Array(i);let s=0;for(const o of e)for(let t=0;t<o.length;t+=3)r[s++]=h(n,3*o[t+0],3*o[t+1],3*o[t+2]);return t.load(r),{result:t.toJSON()}}_createMeshData(t){const n=(t.transform?(0,o.I5)({position:t.vertexAttributes.position,normal:null,tangent:null},t.transform,t.spatialReference).position:t.vertexAttributes.position).buffer;return!t.components||t.components.some((t=>!t.faces))?{position:n}:{position:n,components:t.components.map((t=>t.faces))}}_createPooledRBush(){return new s.Q(9,(0,i.Z)("esri-csp-restrictions")?t=>t:[".minX",".minY",".maxX",".maxY"])}}function h(t,n,e,i){return{minX:Math.min(t[n+0],t[e+0],t[i+0]),maxX:Math.max(t[n+0],t[e+0],t[i+0]),minY:Math.min(t[n+1],t[e+1],t[i+1]),maxY:Math.max(t[n+1],t[e+1],t[i+1]),p0:[t[n+0],t[n+1],t[n+2]],p1:[t[e+0],t[e+1],t[e+2]],p2:[t[i+0],t[i+1],t[i+2]]}}},93501:(t,n,e)=>{e.d(n,{k:()=>o});var i=e(92026),r=e(68860),s=e(92975);function o(t,n,e){if((0,i.Wi)(n)||(0,i.Wi)(e)||e.vcsWkid||(0,s.fS)(n,e))return null;const o=(0,r._R)(n)/(0,r._R)(e);if(1===o)return null;switch(t){case"point":case"esriGeometryPoint":return t=>function(t,n){t&&null!=t.z&&(t.z*=n)}(t,o);case"polyline":case"esriGeometryPolyline":return t=>function(t,n){if(t)for(const e of t.paths)for(const t of e)t.length>2&&(t[2]*=n)}(t,o);case"polygon":case"esriGeometryPolygon":return t=>function(t,n){if(t)for(const e of t.rings)for(const t of e)t.length>2&&(t[2]*=n)}(t,o);case"multipoint":case"esriGeometryMultipoint":return t=>function(t,n){if(t)for(const e of t.points)e.length>2&&(e[2]*=n)}(t,o);case"extent":case"esriGeometryExtent":return t=>function(t,n){t&&null!=t.zmin&&null!=t.zmax&&(t.zmin*=n,t.zmax*=n)}(t,o);default:return null}}}}]);
//# sourceMappingURL=9933.806288e8.chunk.js.map