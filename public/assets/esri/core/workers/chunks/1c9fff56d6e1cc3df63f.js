"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[8227],{20178:(e,n,t)=>{t.d(n,{A:()=>D,B:()=>T,C:()=>b,D:()=>A,E:()=>C,F:()=>L,G:()=>I,H:()=>V,I:()=>j,J:()=>k,K:()=>H,L:()=>O,M:()=>_,N:()=>q,a:()=>c,b:()=>u,c:()=>s,d:()=>a,e:()=>o,f:()=>f,g:()=>B,h:()=>l,i:()=>h,j:()=>d,k:()=>N,l:()=>v,m:()=>M,n:()=>y,o:()=>m,p:()=>w,q:()=>P,r:()=>g,s:()=>x,t:()=>p,u:()=>R,v:()=>Z,w:()=>G,x:()=>z,y:()=>E,z:()=>S});var r=t(45837),i=t(37455);function o(e){return r.G.extendedSpatialReferenceInfo(e)}function s(e,n,t){return r.G.clip(i.N,e,n,t)}function c(e,n,t){return r.G.cut(i.N,e,n,t)}function u(e,n,t){return r.G.contains(i.N,e,n,t)}function a(e,n,t){return r.G.crosses(i.N,e,n,t)}function f(e,n,t,o){return r.G.distance(i.N,e,n,t,o)}function l(e,n,t){return r.G.equals(i.N,e,n,t)}function h(e,n,t){return r.G.intersects(i.N,e,n,t)}function p(e,n,t){return r.G.touches(i.N,e,n,t)}function G(e,n,t){return r.G.within(i.N,e,n,t)}function d(e,n,t){return r.G.disjoint(i.N,e,n,t)}function m(e,n,t){return r.G.overlaps(i.N,e,n,t)}function g(e,n,t,o){return r.G.relate(i.N,e,n,t,o)}function N(e,n){return r.G.isSimple(i.N,e,n)}function x(e,n){return r.G.simplify(i.N,e,n)}function v(e,n,t=!1){return r.G.convexHull(i.N,e,n,t)}function M(e,n,t){return r.G.difference(i.N,e,n,t)}function y(e,n,t){return r.G.symmetricDifference(i.N,e,n,t)}function w(e,n,t){return r.G.intersect(i.N,e,n,t)}function R(e,n,t=null){return r.G.union(i.N,e,n,t)}function P(e,n,t,o,s,c,u){return r.G.offset(i.N,e,n,t,o,s,c,u)}function Z(e,n,t,o,s=!1){return r.G.buffer(i.N,e,n,t,o,s)}function z(e,n,t,o,s,c,u){return r.G.geodesicBuffer(i.N,e,n,t,o,s,c,u)}function E(e,n,t,o=!0){return r.G.nearestCoordinate(i.N,e,n,t,o)}function S(e,n,t){return r.G.nearestVertex(i.N,e,n,t)}function D(e,n,t,o,s){return r.G.nearestVertices(i.N,e,n,t,o,s)}function T(e,n,t,i){if(null==n||null==i)throw new Error("Illegal Argument Exception");const o=r.G.rotate(n,t,i);return o.spatialReference=e,o}function b(e,n,t){if(null==n||null==t)throw new Error("Illegal Argument Exception");const i=r.G.flipHorizontal(n,t);return i.spatialReference=e,i}function A(e,n,t){if(null==n||null==t)throw new Error("Illegal Argument Exception");const i=r.G.flipVertical(n,t);return i.spatialReference=e,i}function C(e,n,t,o,s){return r.G.generalize(i.N,e,n,t,o,s)}function L(e,n,t,o){return r.G.densify(i.N,e,n,t,o)}function I(e,n,t,o,s=0){return r.G.geodesicDensify(i.N,e,n,t,o,s)}function V(e,n,t){return r.G.planarArea(i.N,e,n,t)}function j(e,n,t){return r.G.planarLength(i.N,e,n,t)}function k(e,n,t,o){return r.G.geodesicArea(i.N,e,n,t,o)}function H(e,n,t,o){return r.G.geodesicLength(i.N,e,n,t,o)}function O(e,n,t){return null==n||null==t?[]:r.G.intersectLinesToPoints(i.N,e,n,t)}function _(e,n){r.G.changeDefaultSpatialReferenceTolerance(e,n)}function q(e){r.G.clearDefaultSpatialReferenceTolerance(e)}const B=Object.freeze(Object.defineProperty({__proto__:null,buffer:Z,changeDefaultSpatialReferenceTolerance:_,clearDefaultSpatialReferenceTolerance:q,clip:s,contains:u,convexHull:v,crosses:a,cut:c,densify:L,difference:M,disjoint:d,distance:f,equals:l,extendedSpatialReferenceInfo:o,flipHorizontal:b,flipVertical:A,generalize:C,geodesicArea:k,geodesicBuffer:z,geodesicDensify:I,geodesicLength:H,intersect:w,intersectLinesToPoints:O,intersects:h,isSimple:N,nearestCoordinate:E,nearestVertex:S,nearestVertices:D,offset:P,overlaps:m,planarArea:V,planarLength:j,relate:g,rotate:T,simplify:x,symmetricDifference:y,touches:p,union:R,within:G},Symbol.toStringTag,{value:"Module"}))},37455:(e,n,t)=>{t.d(n,{N:()=>r});const r={convertToGEGeometry:function(e,n){return null==n?null:e.convertJSONToGeometry(n)},exportPoint:function(e,n,t){const r=new i(e.getPointX(n),e.getPointY(n),t),o=e.hasZ(n),s=e.hasM(n);return o&&(r.z=e.getPointZ(n)),s&&(r.m=e.getPointM(n)),r},exportPolygon:function(e,n,t){return new o(e.exportPaths(n),t,e.hasZ(n),e.hasM(n))},exportPolyline:function(e,n,t){return new s(e.exportPaths(n),t,e.hasZ(n),e.hasM(n))},exportMultipoint:function(e,n,t){return new c(e.exportPoints(n),t,e.hasZ(n),e.hasM(n))},exportExtent:function(e,n,t){const r=e.hasZ(n),i=e.hasM(n),o=new u(e.getXMin(n),e.getYMin(n),e.getXMax(n),e.getYMax(n),t);if(r){const t=e.getZExtent(n);o.zmin=t.vmin,o.zmax=t.vmax}if(i){const t=e.getMExtent(n);o.mmin=t.vmin,o.mmax=t.vmax}return o}};class i{constructor(e,n,t){this.x=e,this.y=n,this.spatialReference=t,this.z=void 0,this.m=void 0}}class o{constructor(e,n,t,r){this.rings=e,this.spatialReference=n,this.hasZ=void 0,this.hasM=void 0,t&&(this.hasZ=t),r&&(this.hasM=r)}}class s{constructor(e,n,t,r){this.paths=e,this.spatialReference=n,this.hasZ=void 0,this.hasM=void 0,t&&(this.hasZ=t),r&&(this.hasM=r)}}class c{constructor(e,n,t,r){this.points=e,this.spatialReference=n,this.hasZ=void 0,this.hasM=void 0,t&&(this.hasZ=t),r&&(this.hasM=r)}}class u{constructor(e,n,t,r,i){this.xmin=e,this.ymin=n,this.xmax=t,this.ymax=r,this.spatialReference=i,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},48227:(e,n,t)=>{t.r(n),t.d(n,{executeGEOperation:()=>i});var r=t(20178);function i(e){return(0,r.g[e.operation])(...e.parameters)}}}]);