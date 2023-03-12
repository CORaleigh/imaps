import{e as u,y as g,a as q,l as G,aB as R,c$ as S,pe as Y,eM as z,ef as E,ec as j,cZ as V,cJ as C,k1 as J,ah as Z,I as T,jk as D,pf as H,dt as w,eN as B,as as f,d6 as U,au as W,dM as K,gf as Q}from"./index-84d82762.js";import{e as X}from"./mat3f64-221ce671.js";import{e as m,o as tt}from"./mat4f64-65d35099.js";import{c as P}from"./spatialReferenceEllipsoidUtils-c9ea4771.js";import{v as rt}from"./quat-125beff5.js";import{e as nt}from"./quatf64-3363c48e.js";import{a as N,x as et,g as ot}from"./axisAngleDegrees-7e4701ef.js";import{T as h,i as y}from"./BufferView-578ce2f0.js";import{t as A,e as at,r as $}from"./vec33-538b5e42.js";import{R as it,h as lt,L as st,M as ct,j as pt,k as ut,O as gt,v as ft,V as ht}from"./projection-2cd29501.js";var M;let p=M=class extends G{constructor(t){super(t),this.origin=R(),this.translation=R(),this.rotation=N(),this.scale=S(1,1,1),this.geographic=!0}get localMatrix(){const t=m();return rt(b,ot(this.rotation),et(this.rotation)),Y(t,b,this.translation,this.scale),t}get localMatrixInverse(){return z(m(),this.localMatrix)}applyLocal(t,r){return E(r,t,this.localMatrix)}applyLocalInverse(t,r){return E(r,t,this.localMatrixInverse)}project(t,r){const n=new Float64Array(t.length),e=h.fromTypedArray(n),o=h.fromTypedArray(t);if(this.geographic){const l=P(r),c=m();return j(r,this.origin,c,l),V(c,c,this.localMatrix),A(e,o,c),C(n,l,0,n,r,0,n.length/3),n}const{localMatrix:a,origin:i}=this;J(a,tt)?at(e,o):A(e,o,a);for(let l=0;l<n.length;l+=3)n[l+0]+=i[0],n[l+1]+=i[1],n[l+2]+=i[2];return n}getOriginPoint(t){const[r,n,e]=this.origin;return new Z({x:r,y:n,z:e,spatialReference:t})}equals(t){return T(t)&&this.geographic===t.geographic&&D(this.origin,t.origin)&&H(this.localMatrix,t.localMatrix)}clone(){const t={origin:w(this.origin),translation:w(this.translation),rotation:N(this.rotation),scale:w(this.scale),geographic:this.geographic};return new M(t)}};u([g({type:[Number],nonNullable:!0,json:{write:!0}})],p.prototype,"origin",void 0),u([g({type:[Number],nonNullable:!0,json:{write:!0}})],p.prototype,"translation",void 0),u([g({type:[Number],nonNullable:!0,json:{write:!0}})],p.prototype,"rotation",void 0),u([g({type:[Number],nonNullable:!0,json:{write:!0}})],p.prototype,"scale",void 0),u([g({type:Boolean,nonNullable:!0,json:{write:!0}})],p.prototype,"geographic",void 0),u([g()],p.prototype,"localMatrix",null),u([g()],p.prototype,"localMatrixInverse",null),p=M=u([q("esri.geometry.support.MeshTransform")],p);const b=nt(),yt=p;function v(t,r){return t.isGeographic||t.isWebMercator&&((r==null?void 0:r.geographic)??!0)}function O(t,r,n){return v(r.spatialReference,n)?$t(t,r,n):At(t,r,n)}function mt(t,r,n){const{position:e,normal:o,tangent:a}=t;if(f(r))return{position:e,normal:o,tangent:a};const i=r.localMatrix;return O({position:gt(e,new Float64Array(e.length),i),normal:T(o)?ft(o,new Float32Array(o.length),i):null,tangent:T(a)?ht(a,new Float32Array(a.length),i):null},r.getOriginPoint(n),{geographic:r.geographic})}function kt(t,r,n){if(n!=null&&n.useTransform){const{position:e,normal:o,tangent:a}=t;return{vertexAttributes:{position:e,normal:o,tangent:a},transform:new yt({origin:[r.x,r.y,r.z??0],geographic:v(r.spatialReference,n)})}}return{vertexAttributes:O(t,r,n),transform:null}}function L(t,r,n){return v(r.spatialReference,n)?Mt(t,r,n):_(t,r,n)}function qt(t,r,n,e){if(f(r))return L(t,n,e);const o=mt(t,r,n.spatialReference);return n.equals(r.getOriginPoint(n.spatialReference))?_(o,n,e):L(o,n,e)}function At(t,r,n){const e=new Float64Array(t.position.length),o=t.position,a=r.x,i=r.y,l=r.z||0,{horizontal:c,vertical:x}=F(n?n.unit:null,r.spatialReference);for(let s=0;s<o.length;s+=3)e[s+0]=o[s+0]*c+a,e[s+1]=o[s+1]*c+i,e[s+2]=o[s+2]*x+l;return{position:e,normal:t.normal,tangent:t.tangent}}function $t(t,r,n){const e=r.spatialReference,o=I(r,n,d),a=new Float64Array(t.position.length),i=xt(t.position,o,e,a),l=B(k,o);return{position:i,normal:wt(i,a,t.normal,l,e),tangent:Tt(i,a,t.tangent,l,e)}}function xt(t,r,n,e){A(h.fromTypedArray(e),h.fromTypedArray(t),r);const o=new Float64Array(t.length);return it(e,o,n)}function wt(t,r,n,e,o){if(f(n))return null;const a=new Float32Array(n.length);return $(y.fromTypedArray(a),y.fromTypedArray(n),e),lt(a,t,r,o,a),a}function Tt(t,r,n,e,o){if(f(n))return null;const a=new Float32Array(n.length);$(y.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT),y.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT),e);for(let i=3;i<a.length;i+=4)a[i]=n[i];return st(a,t,r,o,a),a}function _(t,r,n){const e=new Float64Array(t.position.length),o=t.position,a=r.x,i=r.y,l=r.z||0,{horizontal:c,vertical:x}=F(n?n.unit:null,r.spatialReference);for(let s=0;s<o.length;s+=3)e[s+0]=(o[s+0]-a)/c,e[s+1]=(o[s+1]-i)/c,e[s+2]=(o[s+2]-l)/x;return{position:e,normal:t.normal,tangent:t.tangent}}function Mt(t,r,n){const e=r.spatialReference;I(r,n,d);const o=z(Rt,d),a=new Float64Array(t.position.length),i=dt(t.position,e,o,a),l=B(k,o);return{position:i,normal:vt(t.normal,t.position,a,e,l),tangent:Ft(t.tangent,t.position,a,e,l)}}function I(t,r,n){j(t.spatialReference,[t.x,t.y,t.z||0],n,P(t.spatialReference));const{horizontal:e,vertical:o}=F(r?r.unit:null,t.spatialReference);return U(n,n,[e,e,o]),n}function dt(t,r,n,e){const o=ct(t,r,e),a=h.fromTypedArray(o),i=new Float64Array(o.length),l=h.fromTypedArray(i);return A(l,a,n),i}function vt(t,r,n,e,o){if(f(t))return null;const a=pt(t,r,n,e,new Float32Array(t.length)),i=y.fromTypedArray(a);return $(i,i,o),a}function Ft(t,r,n,e,o){if(f(t))return null;const a=ut(t,r,n,e,new Float32Array(t.length)),i=y.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT);return $(i,i,o),a}function F(t,r){if(f(t))return Et;const n=r.isGeographic?1:W(r),e=r.isGeographic?1:K(r),o=Q(1,t,"meters");return{horizontal:o*n,vertical:o*e}}const d=m(),Rt=m(),k=X(),Et={horizontal:1,vertical:1};export{yt as L,qt as M,kt as _,L as b,mt as k,v as r,O as x};
