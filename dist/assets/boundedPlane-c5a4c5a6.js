import{aR as rn,c$ as S,dt as _,aC as u,aG as l,aF as p,cF as P,fY as an,ce as h,dd as cn,fl as un,aE as m,aD as Y,jk as E,eM as gn,jl as bn,ef as $,c_ as fn,cg as q,df as z,aB as M}from"./index-84d82762.js";import{s as B,c as r,b as ln,e as N,n as F}from"./sphere-52f8f52c.js";import{e as D}from"./mat4f64-65d35099.js";import{v as pn,A as G,M as dn}from"./lineSegment-d5143484.js";import{p as A,E as $n,A as mn,O as j,F as hn,x as In,U as Pn,w as Mn,B as H,J as Nn,Y as w,L as wn}from"./plane-1f295e9f.js";const O=rn.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");class vn{constructor(){this.plane=A(),this.origin=M(),this.basis1=M(),this.basis2=M()}}const An=vn;function I(n=sn){return{plane:A(n.plane),origin:_(n.origin),basis1:_(n.basis1),basis2:_(n.basis2)}}function Tn(n,o,i){const t=Un.get();return t.origin=n,t.basis1=o,t.basis2=i,t.plane=$n(0,0,0,0),x(t),t}function T(n,o=I()){return W(n.origin,n.basis1,n.basis2,o)}function xn(n,o){u(o.origin,n.origin),u(o.basis1,n.basis1),u(o.basis2,n.basis2),mn(o.plane,n.plane)}function W(n,o,i,t=I()){return u(t.origin,n),u(t.basis1,o),u(t.basis2,i),x(t),Cn(t,"fromValues()"),t}function x(n){j(n.basis2,n.basis1,n.origin,n.plane)}function X(n,o,i){n!==i&&T(n,i);const t=l(r.get(),f(n),o);return p(i.origin,i.origin,t),i.plane[3]-=o,i}function yn(n,o,i){return Z(o,i),X(i,R(n,n.origin),i),i}function Z(n,o=I()){const i=(n[2]-n[0])/2,t=(n[3]-n[1])/2;return P(o.origin,n[0]+i,n[1]+t,0),P(o.basis1,i,0,0),P(o.basis2,0,t,0),hn(0,0,1,0,o.plane),o}function L(n,o,i){return!!In(n.plane,o,i)&&tn(n,i)}function Sn(n,o,i){if(L(n,o,i))return i;const t=K(n,o,r.get());return p(i,o.origin,l(r.get(),o.direction,an(o.origin,t)/h(o.direction))),i}function K(n,o,i){const t=v.get();en(n,o,t,v.get());let e=Number.POSITIVE_INFINITY;for(const s of k){const a=U(n,s,y.get()),g=r.get();if(Pn(t,a,g)){const c=cn(r.get(),o.origin,g),b=Math.abs(un(m(o.direction,c)));b<e&&(e=b,u(i,g))}}return e===Number.POSITIVE_INFINITY?Q(n,o,i):i}function Q(n,o,i){if(L(n,o,i))return i;const t=v.get(),e=v.get();en(n,o,t,e);let s=Number.POSITIVE_INFINITY;for(const a of k){const g=U(n,a,y.get()),c=r.get();if(Mn(t,g,c)){const b=ln(o,c);if(!H(e,c))continue;b<s&&(s=b,u(i,c))}}return C(n,o.origin)<s&&nn(n,o.origin,i),i}function nn(n,o,i){const t=Nn(n.plane,o,r.get()),e=G(J(n,n.basis1),t,-1,1,r.get()),s=G(J(n,n.basis2),t,-1,1,r.get());return Y(i,p(r.get(),e,s),n.origin),i}function on(n,o,i){const{origin:t,basis1:e,basis2:s}=n,a=Y(r.get(),o,t),g=N(e,a),c=N(s,a),b=N(f(n),a);return P(i,g,c,b)}function C(n,o){const i=on(n,o,r.get()),{basis1:t,basis2:e}=n,s=h(t),a=h(e),g=Math.max(Math.abs(i[0])-s,0),c=Math.max(Math.abs(i[1])-a,0),b=i[2];return g*g+c*c+b*b}function _n(n,o){return Math.sqrt(C(n,o))}function En(n,o){let i=Number.NEGATIVE_INFINITY;for(const t of k){const e=U(n,t,y.get()),s=dn(e,o);s>i&&(i=s)}return Math.sqrt(i)}function Fn(n,o){return H(n.plane,o)&&tn(n,o)}function On(n,o,i,t){return Ln(n,i,t)}function R(n,o){const i=-n.plane[3];return N(f(n),o)-i}function Vn(n,o,i,t){const e=R(n,o),s=l(Rn,f(n),i-e);return p(t,o,s),t}function jn(n,o){return E(n.basis1,o.basis1)&&E(n.basis2,o.basis2)&&E(n.origin,o.origin)}function Yn(n,o,i){return n!==i&&T(n,i),gn(d,o),bn(d,d),$(i.basis1,n.basis1,d),$(i.basis2,n.basis2,d),$(w(i.plane),w(n.plane),d),$(i.origin,n.origin,o),wn(i.plane,i.plane,i.origin),i}function Bn(n,o,i,t){return n!==t&&T(n,t),fn(V,o,i),$(t.basis1,n.basis1,V),$(t.basis2,n.basis2,V),x(t),t}function f(n){return w(n.plane)}function Ln(n,o,i){switch(o){case F.X:u(i,n.basis1),q(i,i);break;case F.Y:u(i,n.basis2),q(i,i);break;case F.Z:u(i,f(n))}return i}function tn(n,o){const i=Y(r.get(),o,n.origin),t=z(n.basis1),e=z(n.basis2),s=m(n.basis1,i),a=m(n.basis2,i);return-s-t<0&&s-t<0&&-a-e<0&&a-e<0}function J(n,o){const i=y.get();return u(i.origin,n.origin),u(i.vector,o),i}function U(n,o,i){const{basis1:t,basis2:e,origin:s}=n,a=l(r.get(),t,o.origin[0]),g=l(r.get(),e,o.origin[1]);p(i.origin,a,g),p(i.origin,i.origin,s);const c=l(r.get(),t,o.direction[0]),b=l(r.get(),e,o.direction[1]);return l(i.vector,p(c,c,b),2),i}function Cn(n,o){Math.abs(m(n.basis1,n.basis2)/(h(n.basis1)*h(n.basis2)))>1e-6&&O.warn(o,"Provided basis vectors are not perpendicular"),Math.abs(m(n.basis1,f(n)))>1e-6&&O.warn(o,"Basis vectors and plane normal are not perpendicular"),Math.abs(-m(f(n),n.origin)-n.plane[3])>1e-6&&O.warn(o,"Plane offset is not consistent with plane origin")}function en(n,o,i,t){const e=f(n);j(e,o.direction,o.origin,i),j(w(i),e,o.origin,t)}const sn={plane:A(),origin:S(0,0,0),basis1:S(1,0,0),basis2:S(0,1,0)},v=new B(A),y=new B(pn),Rn=M(),Un=new B(()=>I()),k=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],d=D(),V=D();Object.freeze(Object.defineProperty({__proto__:null,BoundedPlaneClass:An,UP:sn,altitudeAt:R,axisAt:On,closestPoint:Q,closestPointOnSilhouette:K,copy:T,copyWithoutVerify:xn,create:I,distance:_n,distance2:C,distanceToSilhouette:En,elevate:X,equals:jn,extrusionContainsPoint:Fn,fromAABoundingRect:Z,fromValues:W,intersectRay:L,intersectRayClosestSilhouette:Sn,normal:f,projectPoint:nn,projectPointLocal:on,rotate:Bn,setAltitudeAt:Vn,setExtent:yn,transform:Yn,updateUnboundedPlane:x,wrap:Tn},Symbol.toStringTag,{value:"Module"}));export{Z as $,x as J,I as W,T as Z,_n as a};
