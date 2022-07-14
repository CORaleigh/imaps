"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[5652],{11873:(t,e,n)=>{function r(){return[1,0,0,0,1,0,0,0,1]}function i(t,e){return new Float64Array(t,e,9)}n.d(e,{a:()=>i,c:()=>r});Object.freeze(Object.defineProperty({__proto__:null,create:r,clone:function(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]},fromValues:function(t,e,n,r,i,o,c,s,u){return[t,e,n,r,i,o,c,s,u]},createView:i},Symbol.toStringTag,{value:"Module"}))},81949:(t,e,n)=>{function r(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function i(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]}function o(t,e,n,r,i,o,c,s,u,f,a,h,l,g,M,_){return[t,e,n,r,i,o,c,s,u,f,a,h,l,g,M,_]}function c(t,e){return new Float64Array(t,e,16)}n.d(e,{I:()=>s,a:()=>c,b:()=>i,c:()=>r,f:()=>o});const s=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,create:r,clone:i,fromValues:o,createView:c,IDENTITY:s},Symbol.toStringTag,{value:"Module"}))},98131:(t,e,n)=>{function r(){return[0,0,0,1]}function i(t){return[t[0],t[1],t[2],t[3]]}function o(t,e){return new Float64Array(t,e,4)}n.d(e,{I:()=>c,a:()=>r,b:()=>i,c:()=>o});const c=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,create:r,clone:i,fromValues:function(t,e,n,r){return[t,e,n,r]},createView:o,IDENTITY:c},Symbol.toStringTag,{value:"Module"}))},23470:(t,e,n)=>{n.d(e,{a:()=>I,b:()=>m,c:()=>d,d:()=>P,g:()=>v,i:()=>y,m:()=>F,w:()=>b});n(93169);var r=n(32718),i=n(16889),o=n(92026),c=n(14226),s=n(11186),u=n(71353),f=n(90045),a=n(67077),h=n(14320),l=n(40885),g=n(40927),M=n(11185);const _=r.Z.getLogger("esri.geometry.support.sphere");function d(){return(0,a.c)()}function m(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d();return(0,f.c)(e,t)}function b(t){return t}function I(t){t[0]=t[1]=t[2]=t[3]=0}function P(t){return t[3]}function v(t){return t}function p(t,e,n){if((0,o.Wi)(e))return!1;const{origin:r,direction:i}=e,c=N;c[0]=r[0]-t[0],c[1]=r[1]-t[1],c[2]=r[2]-t[2];const s=i[0]*i[0]+i[1]*i[1]+i[2]*i[2],u=2*(i[0]*c[0]+i[1]*c[1]+i[2]*c[2]),f=u*u-4*s*(c[0]*c[0]+c[1]*c[1]+c[2]*c[2]-t[3]*t[3]);if(f<0)return!1;const a=Math.sqrt(f);let h=(-u-a)/(2*s);const l=(-u+a)/(2*s);return(h<0||l<h&&l>0)&&(h=l),!(h<0)&&(n&&(n[0]=r[0]+i[0]*h,n[1]=r[1]+i[1]*h,n[2]=r[2]+i[2]*h),!0)}const N=(0,u.c)();function y(t,e){return p(t,e,null)}function w(t,e,n){const r=M.WM.get(),i=M.MP.get();(0,s.f)(r,e.origin,e.direction);const o=P(t);(0,s.f)(n,r,e.origin),(0,s.g)(n,n,1/(0,s.l)(n)*o);const u=T(t,e.origin),f=(0,g.EU)(e.origin,n);return(0,c.d)(i,f+u,r),(0,s.m)(n,n,i),n}function S(t,e,n){const r=(0,s.b)(M.WM.get(),e,t),i=(0,s.g)(M.WM.get(),r,t[3]/(0,s.l)(r));return(0,s.a)(n,i,t)}function T(t,e){const n=(0,s.b)(M.WM.get(),e,t),r=(0,s.l)(n),o=P(t),c=o+Math.abs(o-r);return(0,i.ZF)(o/c)}const E=(0,u.c)();function A(t,e,n,r){const o=(0,s.b)(E,e,t);switch(n){case h.R.X:{const t=(0,i.jE)(o,E)[2];return(0,s.s)(r,-Math.sin(t),Math.cos(t),0)}case h.R.Y:{const t=(0,i.jE)(o,E),e=t[1],n=t[2],c=Math.sin(e);return(0,s.s)(r,-c*Math.cos(n),-c*Math.sin(n),Math.cos(e))}case h.R.Z:return(0,s.n)(r,o);default:return}}function W(t,e){const n=(0,s.b)(R,e,t);return(0,s.l)(n)-t[3]}function F(t,e){const n=(0,s.d)(t,e),r=P(t);return n<=r*r}const R=(0,u.c)(),V=d();Object.freeze(Object.defineProperty({__proto__:null,create:d,copy:m,fromCenterAndRadius:function(t,e){return(0,a.f)(t[0],t[1],t[2],e)},wrap:b,clear:I,fromRadius:function(t,e){return t[0]=t[1]=t[2]=0,t[3]=e,t},getRadius:P,getCenter:v,fromValues:function(t,e,n,r){return(0,a.f)(t,e,n,r)},elevate:function(t,e,n){return t!==n&&(0,s.c)(n,t),n[3]=t[3]+e,n},setExtent:function(t,e,n){return _.error("sphere.setExtent is not yet supported"),t===n?n:m(t,n)},intersectRay:p,intersectsRay:y,intersectRayClosestSilhouette:function(t,e,n){if(p(t,e,n))return n;const r=w(t,e,M.WM.get());return(0,s.a)(n,e.origin,(0,s.g)(M.WM.get(),e.direction,(0,s.i)(e.origin,r)/(0,s.l)(e.direction))),n},closestPointOnSilhouette:w,closestPoint:function(t,e,n){return p(t,e,n)?n:((0,l.JI)(e,t,n),S(t,n,n))},projectPoint:S,distanceToSilhouette:function(t,e){const n=(0,s.b)(M.WM.get(),e,t),r=(0,s.p)(n),i=t[3]*t[3];return Math.sqrt(Math.abs(r-i))},angleToSilhouette:T,axisAt:A,altitudeAt:W,setAltitudeAt:function(t,e,n,r){const i=W(t,e),o=A(t,e,h.R.Z,R),c=(0,s.g)(R,o,n-i);return(0,s.a)(r,e,c)},containsPoint:F,tmpSphere:V},Symbol.toStringTag,{value:"Module"}))},21530:(t,e,n)=>{n.d(e,{x:()=>i});var r=n(70758);class i{constructor(t){this.allocator=t,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,r.Y)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*o);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0}_grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,o));t++)this._items.push(this.allocator())}}const o=1024},14320:(t,e,n)=>{var r;n.d(e,{R:()=>r}),function(t){t[t.X=0]="X",t[t.Y=1]="Y",t[t.Z=2]="Z"}(r||(r={}))},55652:(t,e,n)=>{n.d(e,{$I:()=>d,Ac:()=>W,BR:()=>T,Er:()=>F,JG:()=>l,T5:()=>N,Ue:()=>a,Yq:()=>M,al:()=>g,dZ:()=>A,fn:()=>S,jH:()=>B,mJ:()=>j,my:()=>w,nF:()=>R,re:()=>h,rx:()=>E,tk:()=>y,tx:()=>V,zk:()=>_});var r=n(16889),i=n(92026),o=n(11186),c=n(71353),s=(n(23470),n(40927)),u=n(11185),f=n(80064);function a(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z;return[t[0],t[1],t[2],t[3]]}function h(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z[0],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:z[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:z[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:z[3];return g(t,e,n,r,u.o6.get())}function l(t,e){return g(e[0],e[1],e[2],e[3],t)}function g(t,e,n,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:a();return i[0]=t,i[1]=e,i[2]=n,i[3]=r,i}function M(t,e,n){const r=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=Math.abs(r-1)>1e-5&&r>1e-12?1/Math.sqrt(r):1;return n[0]=e[0]*i,n[1]=e[1]*i,n[2]=e[2]*i,n[3]=-(n[0]*t[0]+n[1]*t[1]+n[2]*t[2]),n}function _(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:a();const i=n[0]-e[0],o=n[1]-e[1],c=n[2]-e[2],s=t[0]-e[0],u=t[1]-e[1],f=t[2]-e[2],h=o*f-c*u,l=c*s-i*f,g=i*u-o*s,M=h*h+l*l+g*g,_=Math.abs(M-1)>1e-5&&M>1e-12?1/Math.sqrt(M):1;return r[0]=h*_,r[1]=l*_,r[2]=g*_,r[3]=-(r[0]*t[0]+r[1]*t[1]+r[2]*t[2]),r}function d(t,e,n,r,i){if(t.count<3)return!1;t.getVec(n,b);let c=r,s=!1;for(;c<t.count-1&&!s;)t.getVec(c,I),c++,s=!(0,o.k)(b,I);if(!s)return!1;for(c=Math.max(c,i),s=!1;c<t.count&&!s;)t.getVec(c,P),c++,(0,o.b)(v,b,I),(0,o.n)(v,v),(0,o.b)(p,I,P),(0,o.n)(p,p),s=!(0,o.k)(b,P)&&!(0,o.k)(I,P)&&Math.abs((0,o.e)(v,p))<m;return s?(_(b,I,P,e),!0):(0!==n||1!==r||2!==i)&&d(t,e,0,1,2)}const m=.99619469809,b=(0,c.c)(),I=(0,c.c)(),P=(0,c.c)(),v=(0,c.c)(),p=(0,c.c)();function N(t,e,n){return e!==t&&l(t,e),t[3]=-(0,o.e)(t,n),t}function y(t,e){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e}function w(t,e,n,r){return(0,o.f)(P,e,t),M(n,P,r)}function S(t,e,n,r){return O(t,e,(0,o.b)(u.WM.get(),n,e),k,r)}function T(t,e,n){return!!(0,i.pC)(e)&&O(t,e.origin,e.direction,x,n)}function E(t,e,n){return O(t,e.origin,e.vector,C.NONE,n)}function A(t,e,n){return O(t,e.origin,e.vector,C.CLAMP,n)}function W(t,e){return B(t,e)>=0}function F(t,e){const n=(0,o.e)(t,e.ray.direction),r=-B(t,e.ray.origin);if(n>-1e-6&&n<1e-6)return r>0;const i=r/n;return n>0?i<e.c1&&(e.c1=i):i>e.c0&&(e.c0=i),e.c0<=e.c1}function R(t,e,n){const r=(0,o.g)(u.WM.get(),t,-t[3]),i=function(t,e,n){const r=(0,o.g)(u.WM.get(),t,(0,o.e)(t,e));return(0,o.b)(n,e,r),n}(t,(0,o.b)(u.WM.get(),e,r),u.WM.get());return(0,o.a)(n,i,r),n}function V(t,e,n,r){const i=t,c=u.WM.get(),a=u.WM.get();(0,f._F)(i,c,a);const h=(0,o.b)(u.WM.get(),n,e),l=(0,s.SR)(c,h),g=(0,s.SR)(a,h),M=(0,s.SR)(i,h);return(0,o.s)(r,l,g,M)}function B(t,e){return(0,o.e)(t,e)+t[3]}function O(t,e,n,i,c){const s=(0,o.e)(t,n);if(0===s)return!1;let u=-((0,o.e)(t,e)+t[3])/s;return i&C.CLAMP&&(u=(0,r.uZ)(u,0,1)),!(!(i&C.INFINITE_MIN)&&u<0||!(i&C.INFINITE_MAX)&&u>1)&&((0,o.a)(c,e,(0,o.g)(c,n,u)),!0)}function j(t){return t}const z=[0,0,1,0];var C;!function(t){t[t.NONE=0]="NONE",t[t.CLAMP=1]="CLAMP",t[t.INFINITE_MIN=4]="INFINITE_MIN",t[t.INFINITE_MAX=8]="INFINITE_MAX"}(C||(C={}));const k=C.INFINITE_MIN|C.INFINITE_MAX,x=C.INFINITE_MAX},40885:(t,e,n)=>{n.d(e,{JG:()=>f,JI:()=>g,Jk:()=>l,Ue:()=>s,re:()=>u,zk:()=>a});n(63780);var r=n(21530),i=n(11186),o=n(71353),c=n(11185);function s(t){return t?{origin:(0,o.a)(t.origin),direction:(0,o.a)(t.direction)}:{origin:(0,o.c)(),direction:(0,o.c)()}}function u(t,e){const n=M.get();return n.origin=t,n.direction=e,n}function f(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s();return h(t.origin,t.direction,e)}function a(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s();return(0,i.c)(n.origin,t),(0,i.b)(n.direction,e,t),n}function h(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s();return(0,i.c)(n.origin,t),(0,i.c)(n.direction,e),n}function l(t,e){const n=(0,i.f)(c.WM.get(),(0,i.n)(c.WM.get(),t.direction),(0,i.b)(c.WM.get(),e,t.origin));return(0,i.e)(n,n)}function g(t,e,n){const r=(0,i.e)(t.direction,(0,i.b)(n,e,t.origin));return(0,i.a)(n,t.origin,(0,i.g)(n,t.direction,r)),n}const M=new r.x((function(){return{origin:null,direction:null}}))},40927:(t,e,n)=>{n.d(e,{EU:()=>u,SR:()=>s,cp:()=>f,nF:()=>c});var r=n(16889),i=n(11186),o=n(71353);function c(t,e,n){const r=(0,i.e)(t,e)/(0,i.e)(t,t);return(0,i.g)(n,t,r)}function s(t,e){return(0,i.e)(t,e)/(0,i.l)(t)}function u(t,e){const n=(0,i.e)(t,e)/((0,i.l)(t)*(0,i.l)(e));return-(0,r.ZF)(n)}function f(t,e,n){(0,i.n)(a,t),(0,i.n)(h,e);const o=(0,i.e)(a,h),c=(0,r.ZF)(o),s=(0,i.f)(a,a,h);return(0,i.e)(s,n)<0?2*Math.PI-c:c}const a=(0,o.c)(),h=(0,o.c)()},11185:(t,e,n)=>{n.d(e,{MP:()=>d,vD:()=>m,qW:()=>g,WM:()=>M,o6:()=>_});var r=n(59896),i=n(70758),o=n(11873),c=n(81949),s=n(98131),u=n(6394),f=n(71353),a=n(67077);class h{constructor(t,e,n){this.itemByteSize=t,this.itemCreate=e,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(n/this.itemByteSize)}get(){0===this._itemsPtr&&(0,i.Y)((()=>this._reset()));const t=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=t;){const t=new ArrayBuffer(this._itemsPerBuffer*this.itemByteSize);for(let e=0;e<this._itemsPerBuffer;++e)this._items.push(this.itemCreate(t,e*this.itemByteSize));this._buffers.push(t)}return this._items[this._itemsPtr++]}_reset(){const t=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>t;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;return new h(16,u.c,t)}static createVec3f64(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;return new h(24,f.b,t)}static createVec4f64(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;return new h(32,a.a,t)}static createMat3f64(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;return new h(72,o.a,t)}static createMat4f64(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;return new h(128,c.a,t)}static createQuatf64(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;return new h(32,s.c,t)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this.itemByteSize}}}const l=4*r.Y8.KILOBYTES,g=h.createVec2f64(),M=h.createVec3f64(),_=h.createVec4f64(),d=(h.createMat3f64(),h.createMat4f64()),m=h.createQuatf64()},80064:(t,e,n)=>{n.d(e,{_F:()=>s,mw:()=>c,u1:()=>o});n(16889);var r=n(11186),i=n(71353);function o(t){const e=t[0]*t[0]+t[4]*t[4]+t[8]*t[8],n=t[1]*t[1]+t[5]*t[5]+t[9]*t[9],r=t[2]*t[2]+t[6]*t[6]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}function c(t,e){const n=Math.sqrt(e[0]*e[0]+e[4]*e[4]+e[8]*e[8]),i=Math.sqrt(e[1]*e[1]+e[5]*e[5]+e[9]*e[9]),o=Math.sqrt(e[2]*e[2]+e[6]*e[6]+e[10]*e[10]);return(0,r.s)(t,n,i,o),t}function s(t,e,n){Math.abs(t[0])>Math.abs(t[1])?(0,r.s)(e,0,1,0):(0,r.s)(e,1,0,0),(0,r.f)(n,t,e),(0,r.n)(e,e),(0,r.f)(e,n,t),(0,r.n)(n,n)}(0,i.c)(),(0,i.c)(),(0,i.c)(),(0,i.c)(),(0,i.c)()}}]);
//# sourceMappingURL=5652.f34a2119.chunk.js.map