import{as as Z,h3 as w,jm as z,jn as g,cB as R,f as b,g as v,ae as c}from"./index-84d82762.js";function $(n){return"declaredClass"in n}function o(n){return"declaredClass"in n}function W(n){return"declaredClass"in n}function J(n,a){return n?W(n)?n:new v({layer:a,sourceLayer:a,visible:n.visible,symbol:c(n.symbol),attributes:c(n.attributes),geometry:C(n.geometry)}):null}function C(n){return Z(n)?null:$(n)?n:w(j(n))}function j(n){const{wkid:a,wkt:t,latestWkid:l}=n.spatialReference,i={wkid:a,wkt:t,latestWkid:l};switch(n.type){case"point":{const{x:s,y:r,z:e,m:u}=n;return{x:s,y:r,z:e,m:u,spatialReference:i}}case"polygon":{const{rings:s,hasZ:r,hasM:e}=n;return{rings:m(s),hasZ:r,hasM:e,spatialReference:i}}case"polyline":{const{paths:s,hasZ:r,hasM:e}=n;return{paths:m(s),hasZ:r,hasM:e,spatialReference:i}}case"extent":{const{xmin:s,xmax:r,ymin:e,ymax:u,zmin:p,zmax:y,mmin:x,mmax:d,hasZ:M,hasM:k}=n;return{xmin:s,xmax:r,ymin:e,ymax:u,zmin:p,zmax:y,mmin:x,mmax:d,hasZ:M,hasM:k,spatialReference:i}}case"multipoint":{const{points:s,hasZ:r,hasM:e}=n;return{points:h(s)?f(s):s,hasZ:r,hasM:e,spatialReference:i}}default:return}}function m(n){return A(n)?n.map(a=>f(a)):n}function f(n){return n.map(a=>Array.from(a))}function A(n){for(const a of n)if(a.length!==0)return h(a);return!1}function h(n){return n.length>0&&(z(n[0])||g(n[0]))}function L(n,a){if(!n)return null;let t;if(o(n)){if(a==null)return n.clone();if(o(a))return a.copy(n)}return a!=null?(t=a,t.x=n.x,t.y=n.y,t.spatialReference=n.spatialReference,n.hasZ?(t.z=n.z,t.hasZ=n.hasZ):(t.z=void 0,t.hasZ=!1),n.hasM?(t.m=n.m,t.hasM=!0):(t.m=void 0,t.hasM=!1)):(t=R(n.x,n.y,n.z,n.spatialReference),n.hasM&&(t.m=n.m,t.hasM=!0)),t}function N(n){const{wkid:a,wkt:t,latestWkid:l}=n,i={wkid:a,wkt:t,latestWkid:l};return b.fromJSON(i)}export{L as M,C as f,N as k,$ as m,J as u};
