import{at as Z,h4 as w,jn as z,jo as g,cC as R,f as b,g as v,af as u}from"./index-3baec1e8.js";function $(n){return"declaredClass"in n}function c(n){return"declaredClass"in n}function C(n){return"declaredClass"in n}function L(n,a){return n?C(n)?n:new v({layer:a,sourceLayer:a,visible:n.visible,symbol:u(n.symbol),attributes:u(n.attributes),geometry:W(n.geometry)}):null}function W(n){return Z(n)?null:$(n)?n:w(j(n))}function j(n){const{wkid:a,wkt:t,latestWkid:l}=n.spatialReference,e={wkid:a,wkt:t,latestWkid:l};switch(n.type){case"point":{const{x:s,y:r,z:i,m:o}=n;return{x:s,y:r,z:i,m:o,spatialReference:e}}case"polygon":{const{rings:s,hasZ:r,hasM:i}=n;return{rings:m(s),hasZ:r,hasM:i,spatialReference:e}}case"polyline":{const{paths:s,hasZ:r,hasM:i}=n;return{paths:m(s),hasZ:r,hasM:i,spatialReference:e}}case"extent":{const{xmin:s,xmax:r,ymin:i,ymax:o,zmin:p,zmax:y,mmin:x,mmax:d,hasZ:M,hasM:k}=n;return{xmin:s,xmax:r,ymin:i,ymax:o,zmin:p,zmax:y,mmin:x,mmax:d,hasZ:M,hasM:k,spatialReference:e}}case"multipoint":{const{points:s,hasZ:r,hasM:i}=n;return{points:h(s)?f(s):s,hasZ:r,hasM:i,spatialReference:e}}default:return}}function m(n){return A(n)?n.map(a=>f(a)):n}function f(n){return n.map(a=>Array.from(a))}function A(n){for(const a of n)if(a.length!==0)return h(a);return!1}function h(n){return n.length>0&&(z(n[0])||g(n[0]))}function N(n,a){if(!n)return null;let t;if(c(n)){if(a==null)return n.clone();if(c(a))return a.copy(n)}return a!=null?(t=a,t.x=n.x,t.y=n.y,t.spatialReference=n.spatialReference,n.hasZ?(t.z=n.z,t.hasZ=n.hasZ):(t.z=void 0,t.hasZ=!1),n.hasM?(t.m=n.m,t.hasM=!0):(t.m=void 0,t.hasM=!1)):(t=R(n.x,n.y,n.z,n.spatialReference),n.hasM&&(t.m=n.m,t.hasM=!0)),t}function O(n){const{wkid:a,wkt:t,latestWkid:l}=n,e={wkid:a,wkt:t,latestWkid:l};return b.fromJSON(e)}export{N as M,W as f,O as k,$ as m,L as u};
