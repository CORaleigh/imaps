"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[3645],{61156:(e,n,t)=>{t.d(n,{A:()=>I,B:()=>S,C:()=>j,D:()=>C,E:()=>k,F:()=>L,G:()=>R,H:()=>q,I:()=>B,J:()=>_,K:()=>T,a:()=>c,b:()=>f,c:()=>u,d:()=>l,e:()=>o,f:()=>s,g:()=>F,h:()=>a,i:()=>d,j:()=>g,k:()=>m,l:()=>y,m:()=>x,n:()=>w,o:()=>N,p:()=>b,q:()=>z,r:()=>h,s:()=>v,t:()=>p,u:()=>A,v:()=>V,w:()=>G,x:()=>D,y:()=>E,z:()=>H});var r=t(99058),i=t(40237);function o(e){return r.G.extendedSpatialReferenceInfo(e)}function u(e,n,t){return r.G.clip(i.N,e,n,t)}function c(e,n,t){return r.G.cut(i.N,e,n,t)}function f(e,n,t){return r.G.contains(i.N,e,n,t)}function l(e,n,t){return r.G.crosses(i.N,e,n,t)}function s(e,n,t,o){return r.G.distance(i.N,e,n,t,o)}function a(e,n,t){return r.G.equals(i.N,e,n,t)}function d(e,n,t){return r.G.intersects(i.N,e,n,t)}function p(e,n,t){return r.G.touches(i.N,e,n,t)}function G(e,n,t){return r.G.within(i.N,e,n,t)}function g(e,n,t){return r.G.disjoint(i.N,e,n,t)}function N(e,n,t){return r.G.overlaps(i.N,e,n,t)}function h(e,n,t,o){return r.G.relate(i.N,e,n,t,o)}function m(e,n){return r.G.isSimple(i.N,e,n)}function v(e,n){return r.G.simplify(i.N,e,n)}function y(e,n){let t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.G.convexHull(i.N,e,n,t)}function x(e,n,t){return r.G.difference(i.N,e,n,t)}function w(e,n,t){return r.G.symmetricDifference(i.N,e,n,t)}function b(e,n,t){return r.G.intersect(i.N,e,n,t)}function A(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return r.G.union(i.N,e,n,t)}function z(e,n,t,o,u,c,f){return r.G.offset(i.N,e,n,t,o,u,c,f)}function V(e,n,t,o){let u=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return r.G.buffer(i.N,e,n,t,o,u)}function D(e,n,t,o,u,c,f){return r.G.geodesicBuffer(i.N,e,n,t,o,u,c,f)}function E(e,n,t){let o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return r.G.nearestCoordinate(i.N,e,n,t,o)}function H(e,n,t){return r.G.nearestVertex(i.N,e,n,t)}function I(e,n,t,o,u){return r.G.nearestVertices(i.N,e,n,t,o,u)}function S(e,n,t,i){if(null==n||null==i)throw new Error("Illegal Argument Exception");const o=r.G.rotate(n,t,i);return o.spatialReference=e,o}function j(e,n,t){if(null==n||null==t)throw new Error("Illegal Argument Exception");const i=r.G.flipHorizontal(n,t);return i.spatialReference=e,i}function C(e,n,t){if(null==n||null==t)throw new Error("Illegal Argument Exception");const i=r.G.flipVertical(n,t);return i.spatialReference=e,i}function k(e,n,t,o,u){return r.G.generalize(i.N,e,n,t,o,u)}function L(e,n,t,o){return r.G.densify(i.N,e,n,t,o)}function R(e,n,t,o){let u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return r.G.geodesicDensify(i.N,e,n,t,o,u)}function q(e,n,t){return r.G.planarArea(i.N,e,n,t)}function B(e,n,t){return r.G.planarLength(i.N,e,n,t)}function _(e,n,t,o){return r.G.geodesicArea(i.N,e,n,t,o)}function T(e,n,t,o){return r.G.geodesicLength(i.N,e,n,t,o)}const F=Object.freeze(Object.defineProperty({__proto__:null,extendedSpatialReferenceInfo:o,clip:u,cut:c,contains:f,crosses:l,distance:s,equals:a,intersects:d,touches:p,within:G,disjoint:g,overlaps:N,relate:h,isSimple:m,simplify:v,convexHull:y,difference:x,symmetricDifference:w,intersect:b,union:A,offset:z,buffer:V,geodesicBuffer:D,nearestCoordinate:E,nearestVertex:H,nearestVertices:I,rotate:S,flipHorizontal:j,flipVertical:C,generalize:k,densify:L,geodesicDensify:R,planarArea:q,planarLength:B,geodesicArea:_,geodesicLength:T},Symbol.toStringTag,{value:"Module"}))},50309:(e,n,t)=>{t.r(n),t.d(n,{buffer:()=>r.v,clip:()=>r.c,contains:()=>r.b,convexHull:()=>r.l,crosses:()=>r.d,cut:()=>r.a,densify:()=>r.F,difference:()=>r.m,disjoint:()=>r.j,distance:()=>r.f,equals:()=>r.h,extendedSpatialReferenceInfo:()=>r.e,flipHorizontal:()=>r.C,flipVertical:()=>r.D,generalize:()=>r.E,geodesicArea:()=>r.J,geodesicBuffer:()=>r.x,geodesicDensify:()=>r.G,geodesicLength:()=>r.K,intersect:()=>r.p,intersects:()=>r.i,isSimple:()=>r.k,nearestCoordinate:()=>r.y,nearestVertex:()=>r.z,nearestVertices:()=>r.A,offset:()=>r.q,overlaps:()=>r.o,planarArea:()=>r.H,planarLength:()=>r.I,relate:()=>r.r,rotate:()=>r.B,simplify:()=>r.s,symmetricDifference:()=>r.n,touches:()=>r.t,union:()=>r.u,within:()=>r.w});t(99058),t(40237);var r=t(61156)}}]);
//# sourceMappingURL=3645.3780a3cb.chunk.js.map