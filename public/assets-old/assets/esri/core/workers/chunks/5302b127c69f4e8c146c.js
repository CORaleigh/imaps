"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[1008,8528,32,7016],{8528:(e,t,n)=>{n.d(t,{c:()=>r,g:()=>a});var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function a(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}},50032:(e,t,n)=>{n.r(t),n.d(t,{hydratedAdapter:()=>u});var r=n(95247),a=n(53004),i=n(67776),o=n(7488),c=n(48516);const u={convertToGEGeometry:function(e,t){if(null==t)return null;let n="cache"in t?t.cache._geVersion:void 0;return null==n&&(n=e.convertJSONToGeometry(t),"cache"in t&&(t.cache._geVersion=n)),n},exportPoint:function(e,t,n){const r=e.hasZ(t),a=e.hasM(t),o=new i.c({x:e.getPointX(t),y:e.getPointY(t),spatialReference:n});return r&&(o.z=e.getPointZ(t)),a&&(o.m=e.getPointM(t)),o.cache._geVersion=t,o},exportPolygon:function(e,t,n){const r=new o.c({rings:e.exportPaths(t),hasZ:e.hasZ(t),hasM:e.hasM(t),spatialReference:n});return r.cache._geVersion=t,r},exportPolyline:function(e,t,n){const r=new c.c({paths:e.exportPaths(t),hasZ:e.hasZ(t),hasM:e.hasM(t),spatialReference:n});return r.cache._geVersion=t,r},exportMultipoint:function(e,t,n){const r=new a.c({hasZ:e.hasZ(t),hasM:e.hasM(t),points:e.exportPoints(t),spatialReference:n});return r.cache._geVersion=t,r},exportExtent:function(e,t,n){const a=e.hasZ(t),i=e.hasM(t),o=new r.c({xmin:e.getXMin(t),ymin:e.getYMin(t),xmax:e.getXMax(t),ymax:e.getYMax(t),spatialReference:n});if(a){const n=e.getZExtent(t);o.zmin=n.vmin,o.zmax=n.vmax}if(i){const n=e.getMExtent(t);o.mmin=n.vmin,o.mmax=n.vmax}return o.cache._geVersion=t,o}}},57016:(e,t,n)=>{n.r(t),n.d(t,{buffer:()=>S,changeDefaultSpatialReferenceTolerance:()=>X,clearDefaultSpatialReferenceTolerance:()=>Y,clip:()=>c,contains:()=>d,convexHull:()=>w,crosses:()=>s,cut:()=>u,densify:()=>O,difference:()=>R,disjoint:()=>g,distance:()=>f,equals:()=>l,extendedSpatialReferenceInfo:()=>o,flipHorizontal:()=>C,flipVertical:()=>E,generalize:()=>L,geodesicArea:()=>N,geodesicBuffer:()=>T,geodesicDensify:()=>k,geodesicLength:()=>j,intersect:()=>v,intersectLinesToPoints:()=>I,intersects:()=>p,isSimple:()=>x,nearestCoordinate:()=>Z,nearestVertex:()=>b,nearestVertices:()=>_,offset:()=>V,overlaps:()=>G,planarArea:()=>H,planarLength:()=>J,relate:()=>A,rotate:()=>z,simplify:()=>m,symmetricDifference:()=>M,touches:()=>h,union:()=>P,within:()=>y});var r=n(10984),a=n(50032);function i(e){return Array.isArray(e)?e[0].spatialReference:e&&e.spatialReference}function o(e){return r.G.extendedSpatialReferenceInfo(e)}function c(e,t){return r.G.clip(a.hydratedAdapter,i(e),e,t)}function u(e,t){return r.G.cut(a.hydratedAdapter,i(e),e,t)}function d(e,t){return r.G.contains(a.hydratedAdapter,i(e),e,t)}function s(e,t){return r.G.crosses(a.hydratedAdapter,i(e),e,t)}function f(e,t,n){return r.G.distance(a.hydratedAdapter,i(e),e,t,n)}function l(e,t){return r.G.equals(a.hydratedAdapter,i(e),e,t)}function p(e,t){return r.G.intersects(a.hydratedAdapter,i(e),e,t)}function h(e,t){return r.G.touches(a.hydratedAdapter,i(e),e,t)}function y(e,t){return r.G.within(a.hydratedAdapter,i(e),e,t)}function g(e,t){return r.G.disjoint(a.hydratedAdapter,i(e),e,t)}function G(e,t){return r.G.overlaps(a.hydratedAdapter,i(e),e,t)}function A(e,t,n){return r.G.relate(a.hydratedAdapter,i(e),e,t,n)}function x(e){return r.G.isSimple(a.hydratedAdapter,i(e),e)}function m(e){return r.G.simplify(a.hydratedAdapter,i(e),e)}function w(e,t=!1){return r.G.convexHull(a.hydratedAdapter,i(e),e,t)}function R(e,t){return r.G.difference(a.hydratedAdapter,i(e),e,t)}function M(e,t){return r.G.symmetricDifference(a.hydratedAdapter,i(e),e,t)}function v(e,t){return r.G.intersect(a.hydratedAdapter,i(e),e,t)}function P(e,t=null){return r.G.union(a.hydratedAdapter,i(e),e,t)}function V(e,t,n,o,c,u){return r.G.offset(a.hydratedAdapter,i(e),e,t,n,o,c,u)}function S(e,t,n,o=!1){return r.G.buffer(a.hydratedAdapter,i(e),e,t,n,o)}function T(e,t,n,o,c,u){return r.G.geodesicBuffer(a.hydratedAdapter,i(e),e,t,n,o,c,u)}function Z(e,t,n=!0){return r.G.nearestCoordinate(a.hydratedAdapter,i(e),e,t,n)}function b(e,t){return r.G.nearestVertex(a.hydratedAdapter,i(e),e,t)}function _(e,t,n,o){return r.G.nearestVertices(a.hydratedAdapter,i(e),e,t,n,o)}function D(e){return"xmin"in e?"center"in e?e.center:null:"x"in e?e:"extent"in e?e.extent?.center??null:null}function z(e,t,n){if(null==e)throw new q;const a=e.spatialReference;if(null==(n=n??D(e)))throw new q;const i=e.constructor.fromJSON(r.G.rotate(e,t,n));return i.spatialReference=a,i}function C(e,t){if(null==e)throw new q;const n=e.spatialReference;if(null==(t=t??D(e)))throw new q;const a=e.constructor.fromJSON(r.G.flipHorizontal(e,t));return a.spatialReference=n,a}function E(e,t){if(null==e)throw new q;const n=e.spatialReference;if(null==(t=t??D(e)))throw new q;const a=e.constructor.fromJSON(r.G.flipVertical(e,t));return a.spatialReference=n,a}function L(e,t,n,o){return r.G.generalize(a.hydratedAdapter,i(e),e,t,n,o)}function O(e,t,n){return r.G.densify(a.hydratedAdapter,i(e),e,t,n)}function k(e,t,n,o=0){return r.G.geodesicDensify(a.hydratedAdapter,i(e),e,t,n,o)}function H(e,t){return r.G.planarArea(a.hydratedAdapter,i(e),e,t)}function J(e,t){return r.G.planarLength(a.hydratedAdapter,i(e),e,t)}function N(e,t,n){return r.G.geodesicArea(a.hydratedAdapter,i(e),e,t,n)}function j(e,t,n){return r.G.geodesicLength(a.hydratedAdapter,i(e),e,t,n)}function I(e,t){return r.G.intersectLinesToPoints(a.hydratedAdapter,i(e),e,t)}function X(e,t){r.G.changeDefaultSpatialReferenceTolerance(e,t)}function Y(e){r.G.clearDefaultSpatialReferenceTolerance(e)}class q extends Error{constructor(){super("Illegal Argument Exception")}}}}]);