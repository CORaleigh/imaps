"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[5316],{84752:(t,e,n)=>{n.d(e,{a:()=>S,b:()=>O,c:()=>g,f:()=>E,g:()=>b,j:()=>F,n:()=>B}),n(9456);var i=n(66360),o=n(53648),r=n(15008),s=n(98472),c=n(62484),u=n(74784),a=n(37008),h=n(47364),d=n(82315),l=n(90484),_=n(48880),f=n(20136);const m=g();function g(){return(0,a.Su)()}const T=u.e,p=u.e;function S(t,e){return(0,u.c)(e,t)}function O(t){return t[3]}function b(t){return t}function E(t,e,n,i){return(0,a.WK)(t,e,n,i)}function N(t,e,n){if(null==e)return!1;if(!M(t,e,R))return!1;let{t0:i,t1:o}=R;if((i<0||o<i&&o>0)&&(i=o),i<0)return!1;if(n){const{origin:t,direction:o}=e;n[0]=t[0]+o[0]*i,n[1]=t[1]+o[1]*i,n[2]=t[2]+o[2]*i}return!0}const R={t0:0,t1:0};function M(t,e,n){const{origin:i,direction:o}=e,r=A;r[0]=i[0]-t[0],r[1]=i[1]-t[1],r[2]=i[2]-t[2];const s=o[0]*o[0]+o[1]*o[1]+o[2]*o[2];if(0===s)return!1;const c=2*(o[0]*r[0]+o[1]*r[1]+o[2]*r[2]),u=c*c-4*s*(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]-t[3]*t[3]);if(u<0)return!1;const a=Math.sqrt(u);return n.t0=(-c-a)/(2*s),n.t1=(-c+a)/(2*s),!0}const A=(0,c.Su)();function F(t,e){return N(t,e,null)}function I(t,e,n){const i=f.Wq.get(),o=f.SW.get();(0,s.b)(i,e.origin,e.direction);const c=O(t);(0,s.b)(n,i,e.origin),(0,s.h)(n,n,1/(0,s.l)(n)*c);const u=x(t,e.origin),a=(0,_.i4)(e.origin,n);return(0,r.IT)(o,a+u,i),(0,s.e)(n,n,o),n}function j(t,e,n){const i=(0,s.f)(f.Wq.get(),e,t),o=(0,s.h)(f.Wq.get(),i,t[3]/(0,s.l)(i));return(0,s.g)(n,o,t)}function x(t,e){const n=(0,s.f)(f.Wq.get(),e,t),i=(0,s.l)(n),r=O(t),c=r+Math.abs(r-i);return(0,o.Uj)(r/c)}const P=(0,c.Su)();function w(t,e,n,i){const r=(0,s.f)(P,e,t);switch(n){case d.k.X:{const t=(0,o.Iv)(r,P)[2];return(0,s.s)(i,-Math.sin(t),Math.cos(t),0)}case d.k.Y:{const t=(0,o.Iv)(r,P),e=t[1],n=t[2],c=Math.sin(e);return(0,s.s)(i,-c*Math.cos(n),-c*Math.sin(n),Math.cos(e))}case d.k.Z:return(0,s.n)(i,r);default:return}}function v(t,e){const n=(0,s.f)(W,e,t);return(0,s.l)(n)-t[3]}function B(t,e){const n=(0,s.a)(t,e),i=O(t);return n<=i*i}const W=(0,c.Su)(),C=g();Object.freeze(Object.defineProperty({__proto__:null,NullSphere:m,altitudeAt:v,angleToSilhouette:x,axisAt:w,clear:function(t){t[0]=t[1]=t[2]=t[3]=0},closestPoint:function(t,e,n){return N(t,e,n)?n:((0,l.CE)(e,t,n),j(t,n,n))},closestPointOnSilhouette:I,containsPoint:B,copy:S,create:g,distanceToSilhouette:function(t,e){const n=(0,s.f)(f.Wq.get(),e,t),i=(0,s.p)(n),o=t[3]*t[3];return Math.sqrt(Math.abs(i-o))},elevate:function(t,e,n){return t!==n&&(n[0]=t[0],n[1]=t[1],n[2]=t[2]),n[3]=t[3]+e,n},equals:p,exactEquals:T,fromCenterAndRadius:function(t,e){return(0,a.WK)(t[0],t[1],t[2],e)},fromRadius:function(t,e){return t[0]=t[1]=t[2]=0,t[3]=e,t},fromValues:E,getCenter:b,getRadius:O,intersectLine:function(t,e,n){const i=(0,l.i_)(e,n);if(!M(t,i,R))return[];const{origin:o,direction:r}=i,{t0:u,t1:a}=R,d=e=>{const n=(0,c.Su)();return(0,s.r)(n,o,r,e),j(t,n,n)};return Math.abs(u-a)<(0,h.Au)()?[d(u)]:[d(u),d(a)]},intersectRay:N,intersectRayClosestSilhouette:function(t,e,n){if(N(t,e,n))return n;const i=I(t,e,f.Wq.get());return(0,s.g)(n,e.origin,(0,s.h)(f.Wq.get(),e.direction,(0,s.q)(e.origin,i)/(0,s.l)(e.direction))),n},intersectsRay:F,projectPoint:j,setAltitudeAt:function(t,e,n,i){const o=v(t,e),r=w(t,e,d.k.Z,W),c=(0,s.h)(W,r,n-o);return(0,s.g)(i,e,c)},setExtent:function(t,e,n){return i.c.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),t!==n&&S(t,n),n},tmpSphere:C,union:function(t,e,n=(0,a.Su)()){const i=(0,s.q)(t,e),o=t[3],r=e[3];return i+r<o?((0,u.c)(n,t),n):i+o<r?((0,u.c)(n,e),n):((0,s.m)(n,t,e,(i+r-o)/(2*i)),n[3]=(i+o+r)/2,n)},wrap:function(t){return t}},Symbol.toStringTag,{value:"Module"}))},52180:(t,e,n)=>{n.d(e,{o:()=>o});var i=n(52324);class o{constructor(t){this._allocator=t,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,i.o)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*r);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0}_grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,r));t++)this._items.push(this._allocator())}}const r=1024},68612:(t,e,n)=>{function i(){return[1,0,0,0,1,0,0,0,1]}function o(t,e,n,i,o,r,s,c,u){return[t,e,n,i,o,r,s,c,u]}n.d(e,{IJ:()=>r,Su:()=>i,WK:()=>o});const r=[1,0,0,0,1,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:r,clone:function(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]},create:i,createView:function(t,e){return new Float64Array(t,e,9)},fromValues:o},Symbol.toStringTag,{value:"Module"}))},87104:(t,e,n)=>{function i(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function o(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]}n.d(e,{IJ:()=>r,Su:()=>i,ct:()=>o});const r=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:r,clone:o,create:i,createView:function(t,e){return new Float64Array(t,e,16)},fromValues:function(t,e,n,i,o,r,s,c,u,a,h,d,l,_,f,m){return[t,e,n,i,o,r,s,c,u,a,h,d,l,_,f,m]}},Symbol.toStringTag,{value:"Module"}))},2620:(t,e,n)=>{function i(){return[0,0,0,1]}function o(t){return[t[0],t[1],t[2],t[3]]}n.d(e,{IJ:()=>r,Su:()=>i,ct:()=>o});const r=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:r,clone:o,create:i,createView:function(t,e){return new Float64Array(t,e,4)},fromValues:function(t,e,n,i){return[t,e,n,i]}},Symbol.toStringTag,{value:"Module"}))},82315:(t,e,n)=>{var i;n.d(e,{k:()=>i}),function(t){t[t.X=0]="X",t[t.Y=1]="Y",t[t.Z=2]="Z"}(i||(i={}))},24363:(t,e,n)=>{n.d(e,{C_:()=>h,Su:()=>u,i_:()=>a});var i=n(53648),o=n(52180),r=n(98472),s=n(62484),c=n(20136);function u(t){return t?{origin:(0,s.ct)(t.origin),vector:(0,s.ct)(t.vector)}:{origin:(0,s.Su)(),vector:(0,s.Su)()}}function a(t,e,n=u()){return(0,r.c)(n.origin,t),(0,r.f)(n.vector,e,t),n}function h(t,e,n){return function(t,e,n,o,s){const{vector:u,origin:a}=t,h=(0,r.f)(c.Wq.get(),e,a),d=(0,r.k)(u,h)/(0,r.p)(u);return(0,r.h)(s,u,(0,i.qk)(d,0,1)),(0,r.g)(s,s,t.origin)}(t,e,0,0,n)}(0,s.Su)(),(0,s.Su)(),new o.o((()=>u()))},58632:(t,e,n)=>{n.d(e,{Su:()=>r,XX:()=>c,Oq:()=>s}),n(53648);var i=n(98472),o=n(62484);function r(t=f){return[t[0],t[1],t[2],t[3]]}function s(t){return t}function c(t,e,n,o=0,s=Math.floor(n*(1/3)),f=Math.floor(n*(2/3))){if(n<3)return!1;e(a,o);let m=s,g=!1;for(;m<n-1&&!g;)e(h,m),m++,g=!(0,i.j)(a,h);if(!g)return!1;for(m=Math.max(m,f),g=!1;m<n&&!g;)e(d,m),m++,(0,i.f)(l,a,h),(0,i.n)(l,l),(0,i.f)(_,h,d),(0,i.n)(_,_),g=!(0,i.j)(a,d)&&!(0,i.j)(h,d)&&Math.abs((0,i.k)(l,_))<u;return g?(function(t,e,n,i=r()){const o=n[0]-e[0],s=n[1]-e[1],c=n[2]-e[2],u=t[0]-e[0],a=t[1]-e[1],h=t[2]-e[2],d=s*h-c*a,l=c*u-o*h,_=o*a-s*u,f=d*d+l*l+_*_,m=Math.abs(f-1)>1e-5&&f>1e-12?1/Math.sqrt(f):1;i[0]=d*m,i[1]=l*m,i[2]=_*m,i[3]=-(i[0]*t[0]+i[1]*t[1]+i[2]*t[2])}(a,h,d,t),!0):(0!==o||1!==s||2!==f)&&c(t,e,n,0,1,2)}n(74784),n(48880),n(20136),(0,o.Su)(),(0,o.Su)(),(0,o.Su)(),(0,o.Su)(),(0,o.Su)();const u=.99619469809,a=(0,o.Su)(),h=(0,o.Su)(),d=(0,o.Su)(),l=(0,o.Su)(),_=(0,o.Su)(),f=[0,0,1,0];var m,g;(g=m||(m={}))[g.NONE=0]="NONE",g[g.CLAMP=1]="CLAMP",g[g.INFINITE_MIN=4]="INFINITE_MIN",g[g.INFINITE_MAX=8]="INFINITE_MAX",m.INFINITE_MIN,m.INFINITE_MAX,m.INFINITE_MAX},90484:(t,e,n)=>{n.d(e,{CE:()=>h,Su:()=>s,em:()=>u,i_:()=>a}),n(92400);var i=n(52180),o=n(98472),r=n(62484);function s(t){return t?c((0,r.ct)(t.origin),(0,r.ct)(t.direction)):c((0,r.Su)(),(0,r.Su)())}function c(t,e){return{origin:t,direction:e}}function u(t,e){const n=d.get();return n.origin=t,n.direction=e,n}function a(t,e,n=s()){return(0,o.c)(n.origin,t),(0,o.f)(n.direction,e,t),n}function h(t,e,n){const i=(0,o.k)(t.direction,(0,o.f)(n,e,t.origin));return(0,o.g)(n,t.origin,(0,o.h)(n,t.direction,i)),n}n(20136);const d=new i.o((()=>s()))},48880:(t,e,n)=>{n.d(e,{i4:()=>s});var i=n(53648),o=n(98472),r=n(62484);function s(t,e){const n=(0,o.k)(t,e)/((0,o.l)(t)*(0,o.l)(e));return-(0,i.Uj)(n)}(0,r.Su)(),(0,r.Su)()},20136:(t,e,n)=>{n.d(e,{SW:()=>l,QX:()=>_,Wq:()=>d});var i=n(52324),o=n(68612),r=n(87104),s=n(2620),c=n(85256),u=n(62484),a=n(37008);class h{constructor(t){this._create=t,this._items=new Array,this._itemsPtr=0}get(){return 0===this._itemsPtr&&(0,i.o)((()=>this._reset())),this._itemsPtr>=this._items.length&&this._items.push(this._create()),this._items[this._itemsPtr++]}_reset(){const t=2*this._itemsPtr;this._items.length>t&&(this._items.length=t),this._itemsPtr=0}static createVec2f64(){return new h(c.Su)}static createVec3f64(){return new h(u.Su)}static createVec4f64(){return new h(a.Su)}static createMat3f64(){return new h(o.Su)}static createMat4f64(){return new h(r.Su)}static createQuatf64(){return new h(s.Su)}get test(){return{length:this._items.length}}}h.createVec2f64();const d=h.createVec3f64(),l=(h.createVec4f64(),h.createMat3f64(),h.createMat4f64()),_=h.createQuatf64()},45316:(t,e,n)=>{n.r(e),n.d(e,{default:()=>Q});var i,o,r=n(41948),s=n(10860),c=(n(66360),n(9456),n(72052),n(20744),n(12552)),u=n(98472),a=n(62484),h=n(24363),d=n(84752),l=n(69752),_=n(24680),f=n(52180),m=(n(15008),n(74784),n(37008)),g=n(90484);function T(t){return t?{ray:(0,g.Su)(t.ray),c0:t.c0,c1:t.c1}:{ray:(0,g.Su)(),c0:0,c1:Number.MAX_VALUE}}function p(t,e){for(let n=0;n<S;n++){const i=t[n];if(i[0]*e[0]+i[1]*e[1]+i[2]*e[2]+i[3]>=e[3])return!1}return!0}new f.o((()=>T())),n(58632),n(20136),function(t){t[t.LEFT=0]="LEFT",t[t.RIGHT=1]="RIGHT",t[t.BOTTOM=2]="BOTTOM",t[t.TOP=3]="TOP",t[t.NEAR=4]="NEAR",t[t.FAR=5]="FAR"}(i||(i={})),function(t){t[t.NEAR_BOTTOM_LEFT=0]="NEAR_BOTTOM_LEFT",t[t.NEAR_BOTTOM_RIGHT=1]="NEAR_BOTTOM_RIGHT",t[t.NEAR_TOP_RIGHT=2]="NEAR_TOP_RIGHT",t[t.NEAR_TOP_LEFT=3]="NEAR_TOP_LEFT",t[t.FAR_BOTTOM_LEFT=4]="FAR_BOTTOM_LEFT",t[t.FAR_BOTTOM_RIGHT=5]="FAR_BOTTOM_RIGHT",t[t.FAR_TOP_RIGHT=6]="FAR_TOP_RIGHT",t[t.FAR_TOP_LEFT=7]="FAR_TOP_LEFT"}(o||(o={})),o.FAR_BOTTOM_RIGHT,o.NEAR_BOTTOM_RIGHT,o.NEAR_BOTTOM_LEFT,o.FAR_BOTTOM_LEFT,o.NEAR_BOTTOM_LEFT,o.NEAR_BOTTOM_RIGHT,o.NEAR_TOP_RIGHT,o.NEAR_TOP_LEFT,o.FAR_BOTTOM_RIGHT,o.FAR_BOTTOM_LEFT,o.FAR_TOP_LEFT,o.FAR_TOP_RIGHT,o.NEAR_BOTTOM_RIGHT,o.FAR_BOTTOM_RIGHT,o.FAR_TOP_RIGHT,o.NEAR_TOP_RIGHT,o.FAR_BOTTOM_LEFT,o.NEAR_BOTTOM_LEFT,o.NEAR_TOP_LEFT,o.FAR_TOP_LEFT,o.FAR_TOP_LEFT,o.NEAR_TOP_LEFT,o.NEAR_TOP_RIGHT,o.FAR_TOP_RIGHT;const S=6;(0,m.WK)(-1,-1,-1,1),(0,m.WK)(1,-1,-1,1),(0,m.WK)(1,1,-1,1),(0,m.WK)(-1,1,-1,1),(0,m.WK)(-1,-1,1,1),(0,m.WK)(1,-1,1,1),(0,m.WK)(1,1,1,1),(0,m.WK)(-1,1,1,1),new f.o(T),(0,a.Su)(),(0,a.Su)(),(0,a.Su)(),(0,a.Su)(),(0,a.Su)(),(0,a.Su)(),(0,a.Su)(),(0,a.Su)();var O,b,E=n(90736);class N{get bounds(){return this._root.bounds}get halfSize(){return this._root.halfSize}get root(){return this._root.node}get maximumObjectsPerNode(){return this._maximumObjectsPerNode}get maximumDepth(){return this._maximumDepth}get objectCount(){return this._objectCount}constructor(t,e){this.objectToBoundingSphere=t,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new R,this._objectCount=0,e&&(void 0!==e.maximumObjectsPerNode&&(this._maximumObjectsPerNode=e.maximumObjectsPerNode),void 0!==e.maximumDepth&&(this._maximumDepth=e.maximumDepth))}destroy(){this._degenerateObjects.clear(),R.clearPool(),W[0]=null,q.prune(),G.prune()}add(t,e=t.length){this._objectCount+=e,this._grow(t,e);const n=R.acquire();for(let i=0;i<e;i++){const e=t[i];this._isDegenerate(e)?this._degenerateObjects.add(e):(n.init(this._root),this._add(e,n))}R.release(n)}remove(t,e=null){this._objectCount-=t.length;const n=R.acquire();for(const i of t){const t=e??(0,d.a)(this.objectToBoundingSphere(i),K);P(t[3])?(n.init(this._root),this._remove(i,t,n)):this._degenerateObjects.delete(i)}R.release(n),this._shrink()}update(t,e){if(!P(e[3])&&this._isDegenerate(t))return;const n=function(t){return W[0]=t,W}(t);this.remove(n,e),this.add(n)}forEachAlongRay(t,e,n){const i=(0,g.em)(t,e);this._forEachNode(this._root,(t=>{if(!this._intersectsNode(i,t))return!1;const e=t.node;return e.terminals.forAll((t=>{this._intersectsObject(i,t)&&n(t)})),null!==e.residents&&e.residents.forAll((t=>{this._intersectsObject(i,t)&&n(t)})),!0}))}forEachAlongRayWithVerticalOffset(t,e,n,i){const o=(0,g.em)(t,e);this._forEachNode(this._root,(t=>{if(!this._intersectsNodeWithOffset(o,t,i))return!1;const e=t.node;return e.terminals.forAll((t=>{this._intersectsObjectWithOffset(o,t,i)&&n(t)})),null!==e.residents&&e.residents.forAll((t=>{this._intersectsObjectWithOffset(o,t,i)&&n(t)})),!0}))}forEach(t){this._forEachNode(this._root,(e=>{const n=e.node;return n.terminals.forAll(t),null!==n.residents&&n.residents.forAll(t),!0})),this._degenerateObjects.forEach(t)}forEachDegenerateObject(t){this._degenerateObjects.forEach(t)}findClosest(t,e,n,i=(()=>!0),o=1/0){let r=1/0,s=1/0,c=null;const a=j(t,e),h=u=>{if(--o,!i(u))return;const a=this.objectToBoundingSphere(u);if(!p(n,a))return;const h=x(t,e,(0,d.g)(a)),l=h-a[3],_=h+a[3];l<r&&(r=l,s=_,c=u)};return this._forEachNodeDepthOrdered(this._root,(i=>{if(o<=0||!p(n,i.bounds))return!1;if((0,u.h)(L,a,i.halfSize),(0,u.g)(L,L,(0,d.g)(i.bounds)),x(t,e,L)>s)return!1;const r=i.node;return r.terminals.forAll((t=>h(t))),null!==r.residents&&r.residents.forAll((t=>h(t))),!0}),t,e),c}forEachInDepthRange(t,e,n,i,o,r,s){let c=-1/0,a=1/0;const h={setRange:t=>{n===N.DepthOrder.FRONT_TO_BACK?(c=Math.max(c,t.near),a=Math.min(a,t.far)):(c=Math.max(c,-t.far),a=Math.min(a,-t.near))}};h.setRange(i);const l=x(e,n,t),_=j(e,n),f=j(e,-n),m=t=>{if(!s(t))return;const i=this.objectToBoundingSphere(t),u=(0,d.g)(i),_=x(e,n,u)-l,f=_-i[3],m=_+i[3];f>a||m<c||!p(r,i)||o(t,h)};this._forEachNodeDepthOrdered(this._root,(t=>{if(!p(r,t.bounds))return!1;if((0,u.h)(L,_,t.halfSize),(0,u.g)(L,L,(0,d.g)(t.bounds)),x(e,n,L)-l>a)return!1;if((0,u.h)(L,f,t.halfSize),(0,u.g)(L,L,(0,d.g)(t.bounds)),x(e,n,L)-l<c)return!1;const i=t.node;return i.terminals.forAll((t=>m(t))),null!==i.residents&&i.residents.forAll((t=>m(t))),!0}),e,n)}forEachNode(t){this._forEachNode(this._root,(e=>t(e.node,e.bounds,e.halfSize,e.depth)))}forEachNeighbor(t,e){const n=(0,d.b)(e),i=(0,d.g)(e),o=e=>{const o=this.objectToBoundingSphere(e),r=(0,d.b)(o),s=n+r;return!((0,u.a)((0,d.g)(o),i)-s*s<=0)||t(e)};let r=!0;const s=t=>{r&&(r=o(t))};this._forEachNode(this._root,(t=>{const e=(0,d.b)(t.bounds),o=n+e;if((0,u.a)((0,d.g)(t.bounds),i)-o*o>0)return!1;const c=t.node;return c.terminals.forAll(s),r&&null!==c.residents&&c.residents.forAll(s),r})),r&&this.forEachDegenerateObject(s)}_intersectsNode(t,e){return F((0,d.g)(e.bounds),2*-e.halfSize,y),F((0,d.g)(e.bounds),2*e.halfSize,z),(0,E.If)(t.origin,t.direction,y,z)}_intersectsNodeWithOffset(t,e,n){return F((0,d.g)(e.bounds),2*-e.halfSize,y),F((0,d.g)(e.bounds),2*e.halfSize,z),n.applyToMinMax(y,z),(0,E.If)(t.origin,t.direction,y,z)}_intersectsObject(t,e){const n=this.objectToBoundingSphere(e);return!(n[3]>0)||(0,d.j)(n,t)}_intersectsObjectWithOffset(t,e,n){const i=this.objectToBoundingSphere(e);return!(i[3]>0)||(0,d.j)(n.applyToBoundingSphere(i),t)}_forEachNode(t,e){let n=R.acquire().init(t);const i=[n];for(;0!==i.length;){if(n=i.pop(),e(n)&&!n.isLeaf())for(let t=0;t<n.node.children.length;t++)n.node.children[t]&&i.push(R.acquire().init(n).advance(t));R.release(n)}}_forEachNodeDepthOrdered(t,e,n,i=N.DepthOrder.FRONT_TO_BACK){let o=R.acquire().init(t);const r=[o];for(function(t,e,n){if(!G.length)for(let t=0;t<8;++t)G.push({index:0,distance:0});for(let n=0;n<8;++n){const i=w[n];G.data[n].index=n,G.data[n].distance=x(t,e,i)}G.sort(((t,e)=>t.distance-e.distance));for(let t=0;t<8;++t)n[t]=G.data[t].index}(n,i,X);0!==r.length;){if(o=r.pop(),e(o)&&!o.isLeaf())for(let t=7;t>=0;--t){const e=X[t];o.node.children[e]&&r.push(R.acquire().init(o).advance(e))}R.release(o)}}_remove(t,e,n){q.clear();const i=n.advanceTo(e,((t,e)=>{q.push(t.node),q.push(e)}))?n.node.terminals:n.node.residents;if(i.removeUnordered(t),0===i.length)for(let t=q.length-2;t>=0;t-=2){const e=q.data[t],n=q.data[t+1];if(!this._purge(e,n))break}}_nodeIsEmpty(t){if(0!==t.terminals.length)return!1;if(null!==t.residents)return 0===t.residents.length;for(let e=0;e<t.children.length;e++)if(t.children[e])return!1;return!0}_purge(t,e){return e>=0&&(t.children[e]=null),!!this._nodeIsEmpty(t)&&(null===t.residents&&(t.residents=new _.c({shrink:!0})),!0)}_add(t,e){e.advanceTo(this.objectToBoundingSphere(t))?e.node.terminals.push(t):(e.node.residents.push(t),e.node.residents.length>this._maximumObjectsPerNode&&e.depth<this._maximumDepth&&this._split(e))}_split(t){const e=t.node.residents;t.node.residents=null;for(let n=0;n<e.length;n++){const i=R.acquire().init(t);this._add(e.at(n),i),R.release(i)}}_grow(t,e){if(0!==e&&(I(t,e,(t=>this.objectToBoundingSphere(t)),D),P(D[3])&&!this._fitsInsideTree(D)))if(this._nodeIsEmpty(this._root.node))(0,d.a)(D,this._root.bounds),this._root.halfSize=1.25*this._root.bounds[3],this._root.updateBoundsRadiusFromHalfSize();else{const t=this._rootBoundsForRootAsSubNode(D);this._placingRootViolatesMaxDepth(t)?this._rebuildTree(D,t):this._growRootAsSubNode(t),R.release(t)}}_rebuildTree(t,e){(0,u.c)((0,d.g)(H),(0,d.g)(e.bounds)),H[3]=e.halfSize,I([t,H],2,(t=>t),V);const n=R.acquire().init(this._root);this._root.initFrom(null,V,V[3]),this._root.increaseHalfSize(1.25),this._forEachNode(n,(t=>(this.add(t.node.terminals.data,t.node.terminals.length),null!==t.node.residents&&this.add(t.node.residents.data,t.node.residents.length),!0))),R.release(n)}_placingRootViolatesMaxDepth(t){const e=Math.log(t.halfSize/this._root.halfSize)*Math.LOG2E;let n=0;return this._forEachNode(this._root,(t=>(n=Math.max(n,t.depth),n+e<=this._maximumDepth))),n+e>this._maximumDepth}_rootBoundsForRootAsSubNode(t){const e=t[3],n=t;let i=-1/0;const o=this._root.bounds,r=this._root.halfSize;for(let t=0;t<3;t++){const s=o[t]-r-(n[t]-e),c=n[t]+e-(o[t]+r),u=Math.max(0,Math.ceil(s/(2*r))),a=Math.max(0,Math.ceil(c/(2*r)))+1,h=2**Math.ceil(Math.log(u+a)*Math.LOG2E);i=Math.max(i,h),k[t].min=u,k[t].max=a}for(let t=0;t<3;t++){let e=k[t].min,n=k[t].max;const s=(i-(e+n))/2;e+=Math.ceil(s),n+=Math.floor(s);const c=o[t]-r-e*r*2;C[t]=c+(n+e)*r}const s=i*r;return C[3]=s*B,R.acquire().initFrom(null,C,s,0)}_growRootAsSubNode(t){const e=this._root.node;(0,u.c)((0,d.g)(D),(0,d.g)(this._root.bounds)),D[3]=this._root.halfSize,this._root.init(t),t.advanceTo(D,null,!0),t.node.children=e.children,t.node.residents=e.residents,t.node.terminals=e.terminals}_shrink(){for(;;){const t=this._findShrinkIndex();if(-1===t)break;this._root.advance(t),this._root.depth=0}}_findShrinkIndex(){if(0!==this._root.node.terminals.length||this._root.isLeaf())return-1;let t=null;const e=this._root.node.children;let n=0,i=0;for(;i<e.length&&null==t;)n=i++,t=e[n];for(;i<e.length;)if(e[i++])return-1;return n}_isDegenerate(t){return!P(this.objectToBoundingSphere(t)[3])}_fitsInsideTree(t){const e=this._root.bounds,n=this._root.halfSize;return t[3]<=n&&t[0]>=e[0]-n&&t[0]<=e[0]+n&&t[1]>=e[1]-n&&t[1]<=e[1]+n&&t[2]>=e[2]-n&&t[2]<=e[2]+n}toJSON(){const{maximumDepth:t,maximumObjectsPerNode:e,_objectCount:n}=this,i=this._nodeToJSON(this._root.node);return{maximumDepth:t,maximumObjectsPerNode:e,objectCount:n,root:{bounds:this._root.bounds,halfSize:this._root.halfSize,depth:this._root.depth,node:i}}}_nodeToJSON(t){const e=t.children.map((t=>t?this._nodeToJSON(t):null)),n=t.residents?.map((t=>this.objectToBoundingSphere(t))),i=t.terminals?.map((t=>this.objectToBoundingSphere(t)));return{children:e,residents:n,terminals:i}}static fromJSON(t){const e=new N((t=>t),{maximumDepth:t.maximumDepth,maximumObjectsPerNode:t.maximumObjectsPerNode});return e._objectCount=t.objectCount,e._root.initFrom(t.root.node,t.root.bounds,t.root.halfSize,t.root.depth),e}}class R{constructor(){this.bounds=(0,d.c)(),this.halfSize=0,this.initFrom(null,null,0,0)}init(t){return this.initFrom(t.node,t.bounds,t.halfSize,t.depth)}initFrom(t,e,n,i=this.depth){return this.node=null!=t?t:R.createEmptyNode(),e&&(0,d.a)(e,this.bounds),this.halfSize=n,this.depth=i,this}increaseHalfSize(t){this.halfSize*=t,this.updateBoundsRadiusFromHalfSize()}updateBoundsRadiusFromHalfSize(){this.bounds[3]=this.halfSize*B}advance(t){let e=this.node.children[t];e||(e=R.createEmptyNode(),this.node.children[t]=e),this.node=e,this.halfSize/=2,this.depth++;const n=w[t];return this.bounds[0]+=n[0]*this.halfSize,this.bounds[1]+=n[1]*this.halfSize,this.bounds[2]+=n[2]*this.halfSize,this.updateBoundsRadiusFromHalfSize(),this}advanceTo(t,e,n=!1){for(;;){if(this.isTerminalFor(t))return e&&e(this,-1),!0;if(this.isLeaf()){if(!n)return e&&e(this,-1),!1;this.node.residents=null}const i=this._childIndex(t);e&&e(this,i),this.advance(i)}}isLeaf(){return null!=this.node.residents}isTerminalFor(t){return t[3]>this.halfSize/2}_childIndex(t){const e=this.bounds;return(e[0]<t[0]?1:0)+(e[1]<t[1]?2:0)+(e[2]<t[2]?4:0)}static createEmptyNode(){return{children:[null,null,null,null,null,null,null,null],terminals:new _.c({shrink:!0}),residents:new _.c({shrink:!0})}}static acquire(){return R._pool.acquire()}static release(t){R._pool.release(t)}static clearPool(){R._pool.prune()}}function M(t,e){t[0]=Math.min(t[0],e[0]-e[3]),t[1]=Math.min(t[1],e[1]-e[3]),t[2]=Math.min(t[2],e[2]-e[3])}function A(t,e){t[0]=Math.max(t[0],e[0]+e[3]),t[1]=Math.max(t[1],e[1]+e[3]),t[2]=Math.max(t[2],e[2]+e[3])}function F(t,e,n){n[0]=t[0]+e,n[1]=t[1]+e,n[2]=t[2]+e}function I(t,e,n,i){if(1===e){const e=n(t[0]);(0,d.a)(e,i)}else{y[0]=1/0,y[1]=1/0,y[2]=1/0,z[0]=-1/0,z[1]=-1/0,z[2]=-1/0;for(let i=0;i<e;i++){const e=n(t[i]);P(e[3])&&(M(y,e),A(z,e))}(0,u.m)((0,d.g)(i),y,z,.5),i[3]=Math.max(z[0]-y[0],z[1]-y[1],z[2]-y[2])/2}}function j(t,e){let n,i=1/0;for(let o=0;o<8;++o){const r=x(t,e,v[o]);r<i&&(i=r,n=v[o])}return n}function x(t,e,n){return e*(t[0]*n[0]+t[1]*n[1]+t[2]*n[2])}function P(t){return!isNaN(t)&&t!==-1/0&&t!==1/0&&t>0}R._pool=new l.c(R),O=N||(N={}),(b=O.DepthOrder||(O.DepthOrder={}))[b.FRONT_TO_BACK=1]="FRONT_TO_BACK",b[b.BACK_TO_FRONT=-1]="BACK_TO_FRONT";const w=[(0,a.WK)(-1,-1,-1),(0,a.WK)(1,-1,-1),(0,a.WK)(-1,1,-1),(0,a.WK)(1,1,-1),(0,a.WK)(-1,-1,1),(0,a.WK)(1,-1,1),(0,a.WK)(-1,1,1),(0,a.WK)(1,1,1)],v=[(0,a.WK)(-1,-1,-1),(0,a.WK)(-1,-1,1),(0,a.WK)(-1,1,-1),(0,a.WK)(-1,1,1),(0,a.WK)(1,-1,-1),(0,a.WK)(1,-1,1),(0,a.WK)(1,1,-1),(0,a.WK)(1,1,1)],B=Math.sqrt(3),W=[null],C=(0,d.c)(),L=(0,a.Su)(),y=(0,a.Su)(),z=(0,a.Su)(),q=new _.c,K=(0,d.c)(),D=(0,d.c)(),H=(0,d.c)(),V=(0,d.c)(),k=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],G=new _.c,X=[0,0,0,0,0,0,0,0],J=N;var Y=n(75980);function U(t,e,n){const i=(0,d.c)(),o=(0,d.g)(i);return(0,u.r)(o,o,t,.5),(0,u.r)(o,o,e,.5),i[3]=(0,u.q)(o,t),(0,u.g)(o,o,n),i}let Z=class{constructor(){this._idToComponent=new Map,this._components=new J((t=>t.bounds)),this._edges=new J((t=>t.bounds)),this._tmpLineSegment=(0,h.Su)(),this._tmpP1=(0,a.Su)(),this._tmpP2=(0,a.Su)(),this._tmpP3=(0,a.Su)(),this.remoteClient=null}async fetchCandidates(t,e){await Promise.resolve(),(0,s.wp)(e),await this._ensureEdgeLocations(t,e);const n=[];return this._edges.forEachNeighbor((e=>(this._addCandidates(t,e,n),n.length<1e3)),t.bounds),{result:{candidates:n}}}async _ensureEdgeLocations(t,e){const n=[];if(this._components.forEachNeighbor((t=>{if(null==t.info){const{id:e,uid:i}=t;n.push({id:e,uid:i})}return!0}),t.bounds),!n.length)return;const i={components:n},o=await this.remoteClient.invoke("fetchAllEdgeLocations",i,e??{});for(const t of o.components)this._setFetchEdgeLocations(t)}async add(t){const e=new $(t.id,t.bounds);return this._idToComponent.set(e.id,e),this._components.add([e]),{result:{}}}async remove(t){const e=this._idToComponent.get(t.id);if(e){const t=[];this._edges.forEachNeighbor((n=>(n.component===e&&t.push(n),!0)),e.bounds),this._edges.remove(t),this._components.remove([e]),this._idToComponent.delete(e.id)}return{result:{}}}_setFetchEdgeLocations(t){const e=this._idToComponent.get(t.id);if(null==e||t.uid!==e.uid)return;const n=Y.or.createView(t.locations),i=new Array(n.count),o=(0,a.Su)(),r=(0,a.Su)();for(let s=0;s<n.count;s++){n.position0.getVec(s,o),n.position1.getVec(s,r);const c=U(o,r,t.origin),u=new tt(e,s,c);i[s]=u}this._edges.add(i);const{objectIds:s,origin:c}=t;e.info={locations:n,objectIds:s,origin:c}}_addCandidates(t,e,n){const{info:i}=e.component,{origin:o,objectIds:r}=i,s=i.locations,c=s.position0.getVec(e.index,this._tmpP1),a=s.position1.getVec(e.index,this._tmpP2);(0,u.g)(c,c,o),(0,u.g)(a,a,o);const h=r[s.componentIndex.get(e.index)];this._addEdgeCandidate(t,h,c,a,n),this._addVertexCandidate(t,h,c,n),this._addVertexCandidate(t,h,a,n)}_addEdgeCandidate(t,e,n,i,o){if(!t.returnEdge)return;const r=(0,d.g)(t.bounds),s=(0,h.i_)(n,i,this._tmpLineSegment),c=(0,h.C_)(s,r,this._tmpP3);(0,d.n)(t.bounds,c)&&o.push({type:"edge",objectId:e,target:(0,a.ct)(c),distance:(0,u.q)(r,c),start:(0,a.ct)(n),end:(0,a.ct)(i)})}_addVertexCandidate(t,e,n,i){if(!t.returnVertex||!(0,d.n)(t.bounds,n))return;const o=(0,d.g)(t.bounds);i.push({type:"vertex",objectId:e,target:(0,a.ct)(n),distance:(0,u.q)(o,n)})}};Z=(0,r._)([(0,c.c)("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],Z);const Q=Z;class ${constructor(t,e){this.id=t,this.bounds=e,this.info=null,this.uid=++$.uid}}$.uid=0;class tt{constructor(t,e,n){this.component=t,this.index=e,this.bounds=n}}}}]);