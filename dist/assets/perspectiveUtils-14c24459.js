import{e as a,y as s,a as E,K as F,as as c,aA as d,av as I,iX as J,a_ as K,I as p,cF as g,jT as x,f3 as z,cc as m,kU as $,o1 as v,mY as f,aB as M}from"./index-84d82762.js";import{a as N}from"./normalizeUtilsSync-93a8bb0b.js";import{e as u}from"./mat3f64-221ce671.js";let n=class extends F{constructor(e){super(e)}get bounds(){const e=this.coords;return c(e)||c(e.extent)?null:d(e.extent)}get coords(){var o;const e=(o=I(this.element.georeference))==null?void 0:o.coords;return J(e,this.spatialReference).geometry}get normalizedCoords(){return K.fromJSON(N(this.coords))}get normalizedBounds(){const e=p(this.normalizedCoords)?this.normalizedCoords.extent:null;return p(e)?d(e):null}};a([s()],n.prototype,"spatialReference",void 0),a([s()],n.prototype,"element",void 0),a([s()],n.prototype,"bounds",null),a([s()],n.prototype,"coords",null),a([s()],n.prototype,"normalizedCoords",null),a([s()],n.prototype,"normalizedBounds",null),n=a([E("esri.layers.support.MediaElementView")],n);const t=M(),i=u(),l=u(),y=u();function V(e,o,r){return g(t,o[0],o[1],1),x(t,t,z(i,r)),t[2]===0?m(e,t[0],t[1]):m(e,t[0]/t[2],t[1]/t[2])}function X(e,o,r){return h(l,o[0],o[1],o[2],o[3],o[4],o[5],o[6],o[7]),h(y,r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7]),$(e,v(l,l),y),e[8]!==0&&(e[0]/=e[8],e[1]/=e[8],e[2]/=e[8],e[3]/=e[8],e[4]/=e[8],e[5]/=e[8],e[6]/=e[8],e[7]/=e[8],e[8]/=e[8]),e}function h(e,o,r,C,b,B,j,k,R){f(e,o,C,B,r,b,j,1,1,1),g(t,k,R,1),v(i,e);const[S,w,A]=x(t,t,z(i,i));return f(i,S,0,0,0,w,0,0,0,A),$(e,i,e)}export{V as h,X as j,n as u};
