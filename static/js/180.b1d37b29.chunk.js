(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[180],{172:function(n,t,e){"use strict";e.d(t,"a",(function(){return v})),e.d(t,"b",(function(){return l})),e.d(t,"c",(function(){return i})),e.d(t,"d",(function(){return p})),e.d(t,"e",(function(){return d})),e.d(t,"f",(function(){return M})),e.d(t,"g",(function(){return x})),e.d(t,"h",(function(){return y})),e.d(t,"i",(function(){return u})),e.d(t,"j",(function(){return g})),e.d(t,"k",(function(){return f})),e.d(t,"l",(function(){return m})),e.d(t,"m",(function(){return c})),e.d(t,"n",(function(){return o})),e.d(t,"o",(function(){return s})),e.d(t,"p",(function(){return b})),e.d(t,"q",(function(){return w})),e.d(t,"r",(function(){return a})),e.d(t,"s",(function(){return h}));e(129),e(138);var r=e(149);function u(n=O){return[n[0],n[1],n[2],n[3]]}function i(n){return[n[0],n[1],n[2],n[3]]}function o(n,t,e,r,i=u()){return i[0]=n,i[1]=t,i[2]=e,i[3]=r,i}function c(n,t=u()){return t[0]=n.xmin,t[1]=n.ymin,t[2]=n.xmax,t[3]=n.ymax,t}function a(n,t){return new r.a({xmin:n[0],ymin:n[1],xmax:n[2],ymax:n[3],spatialReference:t})}function f(n,t,e=n){if("length"in t)j(t)?(e[0]=Math.min(n[0],t[0]),e[1]=Math.min(n[1],t[1]),e[2]=Math.max(n[2],t[2]),e[3]=Math.max(n[3],t[3])):2!==t.length&&3!==t.length||(e[0]=Math.min(n[0],t[0]),e[1]=Math.min(n[1],t[1]),e[2]=Math.max(n[2],t[0]),e[3]=Math.max(n[3],t[1]));else switch(t.type){case"extent":e[0]=Math.min(n[0],t.xmin),e[1]=Math.min(n[1],t.ymin),e[2]=Math.max(n[2],t.xmax),e[3]=Math.max(n[3],t.ymax);break;case"point":e[0]=Math.min(n[0],t.x),e[1]=Math.min(n[1],t.y),e[2]=Math.max(n[2],t.x),e[3]=Math.max(n[3],t.y)}return e}function m(n,t,e=n){const r=t.length;let u=n[0],i=n[1],o=n[2],c=n[3];for(let a=0;a<r;a++){const n=t[a];u=Math.min(u,n[0]),i=Math.min(i,n[1]),o=Math.max(o,n[0]),c=Math.max(c,n[1])}return e[0]=u,e[1]=i,e[2]=o,e[3]=c,e}function h(n){return n[0]>=n[2]?0:n[2]-n[0]}function s(n){return n[1]>=n[3]?0:n[3]-n[1]}function l(n){return h(n)*s(n)}function d(n,t){return y(n,t[0],t[1])}function M(n,t){return y(n,t.x,t.y)}function y(n,t,e){return t>=n[0]&&e>=n[1]&&t<=n[2]&&e<=n[3]}function x(n,t,e){return t[0]>=n[0]-e&&t[1]>=n[1]-e&&t[0]<=n[2]+e&&t[1]<=n[3]+e}function b(n,t){return Math.max(t[0],n[0])<=Math.min(t[2],n[2])&&Math.max(t[1],n[1])<=Math.min(t[3],n[3])}function p(n,t){return t[0]>=n[0]&&t[2]<=n[2]&&t[1]>=n[1]&&t[3]<=n[3]}function w(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n}function g(n){return n?w(n,v):u(v)}function j(n){return 4===n.length}const v=[1/0,1/0,-1/0,-1/0],O=[0,0,0,0]},318:function(n,t,e){"use strict";e.d(t,"a",(function(){return k})),e.d(t,"b",(function(){return l})),e.d(t,"c",(function(){return y})),e.d(t,"d",(function(){return u})),e.d(t,"e",(function(){return j})),e.d(t,"f",(function(){return z})),e.d(t,"g",(function(){return o})),e.d(t,"h",(function(){return a})),e.d(t,"i",(function(){return f})),e.d(t,"j",(function(){return c})),e.d(t,"k",(function(){return v})),e.d(t,"l",(function(){return i})),e.d(t,"m",(function(){return b})),e.d(t,"n",(function(){return I})),e.d(t,"o",(function(){return M})),e.d(t,"p",(function(){return x})),e.d(t,"q",(function(){return g})),e.d(t,"r",(function(){return w})),e.d(t,"s",(function(){return p})),e.d(t,"t",(function(){return d}));var r=e(138);e(149),e(172);function u(n=N){return[n[0],n[1],n[2],n[3],n[4],n[5]]}function i(n,t,e,r,i,o,c=u()){return c[0]=n,c[1]=t,c[2]=e,c[3]=r,c[4]=i,c[5]=o,c}function o(n,t){n[0]=Math.min(n[0],t[0]),n[1]=Math.min(n[1],t[1]),n[2]=Math.min(n[2],t[2]),n[3]=Math.max(n[3],t[3]),n[4]=Math.max(n[4],t[4]),n[5]=Math.max(n[5],t[5])}function c(n,t){n[0]=Math.min(n[0],t[0]),n[1]=Math.min(n[1],t[1]),n[2]=Math.min(n[2],t[2]),n[3]=Math.max(n[3],t[0]),n[4]=Math.max(n[4],t[1]),n[5]=Math.max(n[5],t[2])}function a(n,t,e=0,r=t.length/3){let u=n[0],i=n[1],o=n[2],c=n[3],a=n[4],f=n[5];for(let m=0;m<r;m++)u=Math.min(u,t[e+3*m]),i=Math.min(i,t[e+3*m+1]),o=Math.min(o,t[e+3*m+2]),c=Math.max(c,t[e+3*m]),a=Math.max(a,t[e+3*m+1]),f=Math.max(f,t[e+3*m+2]);n[0]=u,n[1]=i,n[2]=o,n[3]=c,n[4]=a,n[5]=f}function f(n,t,e){const r=t.length;let u=n[0],i=n[1],o=n[2],c=n[3],a=n[4],f=n[5];if(e)for(let m=0;m<r;m++){const n=t[m];u=Math.min(u,n[0]),i=Math.min(i,n[1]),o=Math.min(o,n[2]),c=Math.max(c,n[0]),a=Math.max(a,n[1]),f=Math.max(f,n[2])}else for(let m=0;m<r;m++){const n=t[m];u=Math.min(u,n[0]),i=Math.min(i,n[1]),c=Math.max(c,n[0]),a=Math.max(a,n[1])}n[0]=u,n[1]=i,n[2]=o,n[3]=c,n[4]=a,n[5]=f}function m(n){return n[0]>=n[3]?0:n[3]-n[0]}function h(n){return n[1]>=n[4]?0:n[4]-n[1]}function s(n){return n[2]>=n[5]?0:n[5]-n[2]}function l(n,t=[0,0,0]){return t[0]=n[0]+m(n)/2,t[1]=n[1]+h(n)/2,t[2]=n[2]+s(n)/2,t}function d(n,t=[0,0,0]){return t[0]=m(n),t[1]=h(n),t[2]=s(n),t}function M(n){return Math.max(m(n),s(n),h(n))}function y(n,t){return t[0]>=n[0]&&t[1]>=n[1]&&t[2]>=n[2]&&t[0]<=n[3]&&t[1]<=n[4]&&t[2]<=n[5]}function x(n,t,e=n){const r=n[0]+m(n)/2,u=n[1]+h(n)/2,i=n[2]+s(n)/2;return e[0]=r+(n[0]-r)*t,e[1]=u+(n[1]-u)*t,e[2]=i+(n[2]-i)*t,e[3]=r+(n[3]-r)*t,e[4]=u+(n[4]-u)*t,e[5]=i+(n[5]-i)*t,e}function b(n,t){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function p(n,t,e=n){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e!==n&&(e[3]=n[3],e[4]=n[4],e[5]=n[5]),e}function w(n,t,e=n){return e[3]=t[0],e[4]=t[1],e[5]=t[2],e!==n&&(e[0]=n[0],e[1]=n[1],e[2]=n[2]),n}function g(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n}function j(n){return n?g(n,k):u(k)}function v(n,t){return n[0]=t[0],n[1]=t[1],n[2]=Number.NEGATIVE_INFINITY,n[3]=t[2],n[4]=t[3],n[5]=Number.POSITIVE_INFINITY,n}function O(n){return 6===n.length}function I(n){return 0===m(n)&&0===h(n)&&0===s(n)}function z(n,t,e){if(Object(r.j)(n)||Object(r.j)(t))return n===t;if(!O(n)||!O(t))return!1;if(e){for(let r=0;r<n.length;r++)if(!e(n[r],t[r]))return!1}else for(let r=0;r<n.length;r++)if(n[r]!==t[r])return!1;return!0}const k=[1/0,1/0,1/0,-1/0,-1/0,-1/0],N=[0,0,0,0,0,0];u()},701:function(n,t,e){"use strict";e.r(t),e.d(t,"clearBoundingBoxCache",(function(){return d})),e.d(t,"computeIconLayerResourceSize",(function(){return x})),e.d(t,"computeLayerResourceSize",(function(){return M})),e.d(t,"computeLayerSize",(function(){return y})),e.d(t,"computeObjectLayerResourceSize",(function(){return b}));var r=e(138),u=e(140),i=e(151),o=e(448),c=e(318),a=(e(129),e(152));const f=Object(c.l)(-.5,-.5,-.5,.5,.5,.5),m=Object(c.l)(-.5,-.5,0,.5,.5,1),h=Object(c.l)(-.5,-.5,0,.5,.5,.5);let s=l();function l(){return new o.a(50)}function d(){s=l()}function M(n,t){if("icon"===n.type)return x(n,t);if("object"===n.type)return b(n,t);throw new u.a("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function y(n,t){if("icon"===n.type)return function(n,t){return x(n,t).then((t=>{if(null==n.size)return t;const e=t[0]/t[1];return e>1?[n.size,n.size/e]:[n.size*e,n.size]}))}(n,t);if("object"===n.type)return async function(n,t){return function(n,{isPrimitive:t,width:e,depth:r,height:u}){const i=t?10:1;if(null==e&&null==u&&null==r)return[i*n[0],i*n[1],i*n[2]];const o=Object(a.g)(e,r,u);let c;for(let a=0;a<3;a++){const t=o[a];if(null!=t){c=t/n[a];break}}for(let a=0;a<3;a++)null==o[a]&&(o[a]=n[a]*c);return o}(await b(n,t),n)}(n,t);throw new u.a("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function x(n,t){if(n.resource.href)return(e=n.resource.href,Object(i.default)(e,{responseType:"image"}).then((n=>n.data))).then((n=>[n.width,n.height]));var e;if(n.resource.primitive)return Object(r.k)(t)?[t,t]:[256,256];throw new u.a("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function b(n,t){return async function(n,t){if(!n.isPrimitive){const t=n.resource.href,r=s.get(t);if(void 0!==r)return Promise.resolve(r);const u=await Promise.all([e.e(5),e.e(39),e.e(64)]).then(e.bind(null,1260)),i=await u.fetch(t,{disableTextures:!0});return s.put(t,i.referenceBoundingBox),i.referenceBoundingBox}let i=null;if(n.resource&&n.resource.primitive&&(i=Object(c.d)(function(n){switch(n){case"sphere":case"cube":case"diamond":return f;case"cylinder":case"cone":case"inverted-cone":return m;case"tetrahedron":return h;default:return}}(n.resource.primitive)),Object(r.k)(t)))for(let e=0;e<i.length;e++)i[e]*=t;return i?Promise.resolve(i):Promise.reject(new u.a("symbol:invalid-resource","The symbol does not have a valid resource"))}(n,t).then((n=>Object(c.t)(n)))}}}]);
//# sourceMappingURL=180.b1d37b29.chunk.js.map