"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[5980],{98472:(t,n,e)=>{e.d(n,{A:()=>s,B:()=>a,C:()=>w,D:()=>B,G:()=>R,a:()=>f,b:()=>L,c:()=>i,e:()=>D,f:()=>T,g:()=>A,h:()=>S,i:()=>G,j:()=>l,k:()=>h,l:()=>_,m:()=>H,n:()=>M,o:()=>C,p:()=>I,q:()=>O,r:()=>P,s:()=>o,t:()=>U,u:()=>N,v:()=>y,w:()=>b,x:()=>u,y:()=>g,z:()=>c});var r=e(62484),E=e(47364);function _(t){const n=t[0],e=t[1],r=t[2];return Math.sqrt(n*n+e*e+r*r)}function i(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function o(t,n,e,r){return t[0]=n,t[1]=e,t[2]=r,t}function A(t,n,e){return t[0]=n[0]+e[0],t[1]=n[1]+e[1],t[2]=n[2]+e[2],t}function T(t,n,e){return t[0]=n[0]-e[0],t[1]=n[1]-e[1],t[2]=n[2]-e[2],t}function s(t,n,e){return t[0]=n[0]*e[0],t[1]=n[1]*e[1],t[2]=n[2]*e[2],t}function R(t,n,e){return t[0]=n[0]/e[0],t[1]=n[1]/e[1],t[2]=n[2]/e[2],t}function N(t,n){return t[0]=Math.abs(n[0]),t[1]=Math.abs(n[1]),t[2]=Math.abs(n[2]),t}function c(t,n){return t[0]=Math.sign(n[0]),t[1]=Math.sign(n[1]),t[2]=Math.sign(n[2]),t}function u(t,n,e){return t[0]=Math.min(n[0],e[0]),t[1]=Math.min(n[1],e[1]),t[2]=Math.min(n[2],e[2]),t}function a(t,n,e){return t[0]=Math.max(n[0],e[0]),t[1]=Math.max(n[1],e[1]),t[2]=Math.max(n[2],e[2]),t}function S(t,n,e){return t[0]=n[0]*e,t[1]=n[1]*e,t[2]=n[2]*e,t}function O(t,n,e,r){return t[0]=n[0]+e[0]*r,t[1]=n[1]+e[1]*r,t[2]=n[2]+e[2]*r,t}function I(t,n){const e=n[0]-t[0],r=n[1]-t[1],E=n[2]-t[2];return Math.sqrt(e*e+r*r+E*E)}function f(t,n){const e=n[0]-t[0],r=n[1]-t[1],E=n[2]-t[2];return e*e+r*r+E*E}function C(t){const n=t[0],e=t[1],r=t[2];return n*n+e*e+r*r}function M(t,n){const e=n[0],r=n[1],E=n[2];let _=e*e+r*r+E*E;return _>0&&(_=1/Math.sqrt(_),t[0]=n[0]*_,t[1]=n[1]*_,t[2]=n[2]*_),t}function l(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function L(t,n,e){const r=n[0],E=n[1],_=n[2],i=e[0],o=e[1],A=e[2];return t[0]=E*A-_*o,t[1]=_*i-r*A,t[2]=r*o-E*i,t}function h(t,n,e,r){const E=n[0],_=n[1],i=n[2];return t[0]=E+r*(e[0]-E),t[1]=_+r*(e[1]-_),t[2]=i+r*(e[2]-i),t}function D(t,n,e){const r=n[0],E=n[1],_=n[2];return t[0]=e[0]*r+e[4]*E+e[8]*_+e[12],t[1]=e[1]*r+e[5]*E+e[9]*_+e[13],t[2]=e[2]*r+e[6]*E+e[10]*_+e[14],t}function U(t,n,e){const r=n[0],E=n[1],_=n[2];return t[0]=r*e[0]+E*e[3]+_*e[6],t[1]=r*e[1]+E*e[4]+_*e[7],t[2]=r*e[2]+E*e[5]+_*e[8],t}function P(t,n,e){const r=e[0],E=e[1],_=e[2],i=e[3],o=n[0],A=n[1],T=n[2],s=E*T-_*A,R=_*o-r*T,N=r*A-E*o,c=E*N-_*R,u=_*s-r*N,a=r*R-E*s,S=2*i;return t[0]=o+s*S+2*c,t[1]=A+R*S+2*u,t[2]=T+N*S+2*a,t}const d=(0,r.Su)(),F=(0,r.Su)();function G(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]}function B(t,n,e){const r=e[0]-n[0],E=e[1]-n[1],_=e[2]-n[2];let i=r*r+E*E+_*_;return i>0?(i=1/Math.sqrt(i),t[0]=r*i,t[1]=E*i,t[2]=_*i,t):(t[0]=0,t[1]=0,t[2]=0,t)}const g=T,m=s,p=R,H=I,y=f,w=_,b=C;Object.freeze(Object.defineProperty({__proto__:null,abs:N,add:A,angle:function(t,n){M(d,t),M(F,n);const e=l(d,F);return e>1?0:e<-1?Math.PI:Math.acos(e)},bezier:function(t,n,e,r,E,_){const i=1-_,o=i*i,A=_*_,T=o*i,s=3*_*o,R=3*A*i,N=A*_;return t[0]=n[0]*T+e[0]*s+r[0]*R+E[0]*N,t[1]=n[1]*T+e[1]*s+r[1]*R+E[1]*N,t[2]=n[2]*T+e[2]*s+r[2]*R+E[2]*N,t},ceil:function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t},copy:i,cross:L,direction:B,dist:H,distance:I,div:p,divide:R,dot:l,equals:function(t,n){if(t===n)return!0;const e=t[0],r=t[1],_=t[2],i=n[0],o=n[1],A=n[2],T=(0,E.Au)();return Math.abs(e-i)<=T*Math.max(1,Math.abs(e),Math.abs(i))&&Math.abs(r-o)<=T*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(_-A)<=T*Math.max(1,Math.abs(_),Math.abs(A))},exactEquals:G,floor:function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t},hermite:function(t,n,e,r,E,_){const i=_*_,o=i*(2*_-3)+1,A=i*(_-2)+_,T=i*(_-1),s=i*(3-2*_);return t[0]=n[0]*o+e[0]*A+r[0]*T+E[0]*s,t[1]=n[1]*o+e[1]*A+r[1]*T+E[1]*s,t[2]=n[2]*o+e[2]*A+r[2]*T+E[2]*s,t},inverse:function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t},len:w,length:_,lerp:h,max:a,min:u,mul:m,multiply:s,negate:function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t},normalize:M,random:function(t,n){n=n||1;const e=E.QR,r=2*e()*Math.PI,_=2*e()-1,i=Math.sqrt(1-_*_)*n;return t[0]=Math.cos(r)*i,t[1]=Math.sin(r)*i,t[2]=_*n,t},rotateX:function(t,n,e,r){const E=[],_=[];return E[0]=n[0]-e[0],E[1]=n[1]-e[1],E[2]=n[2]-e[2],_[0]=E[0],_[1]=E[1]*Math.cos(r)-E[2]*Math.sin(r),_[2]=E[1]*Math.sin(r)+E[2]*Math.cos(r),t[0]=_[0]+e[0],t[1]=_[1]+e[1],t[2]=_[2]+e[2],t},rotateY:function(t,n,e,r){const E=[],_=[];return E[0]=n[0]-e[0],E[1]=n[1]-e[1],E[2]=n[2]-e[2],_[0]=E[2]*Math.sin(r)+E[0]*Math.cos(r),_[1]=E[1],_[2]=E[2]*Math.cos(r)-E[0]*Math.sin(r),t[0]=_[0]+e[0],t[1]=_[1]+e[1],t[2]=_[2]+e[2],t},rotateZ:function(t,n,e,r){const E=[],_=[];return E[0]=n[0]-e[0],E[1]=n[1]-e[1],E[2]=n[2]-e[2],_[0]=E[0]*Math.cos(r)-E[1]*Math.sin(r),_[1]=E[0]*Math.sin(r)+E[1]*Math.cos(r),_[2]=E[2],t[0]=_[0]+e[0],t[1]=_[1]+e[1],t[2]=_[2]+e[2],t},round:function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t},scale:S,scaleAndAdd:O,set:o,sign:c,sqrDist:y,sqrLen:b,squaredDistance:f,squaredLength:C,str:function(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"},sub:g,subtract:T,transformMat3:U,transformMat4:D,transformQuat:P},Symbol.toStringTag,{value:"Module"}))},85256:(t,n,e)=>{function r(){return[0,0]}function E(t,n){return[t,n]}function _(){return E(1,1)}function i(){return E(1,0)}function o(){return E(0,1)}e.d(n,{Qw:()=>A,Su:()=>r,WK:()=>E});const A=_(),T=i(),s=o();Object.freeze(Object.defineProperty({__proto__:null,ONES:A,UNIT_X:T,UNIT_Y:s,ZEROS:[0,0],clone:function(t){return[t[0],t[1]]},create:r,createView:function(t,n){return new Float64Array(t,n,2)},fromArray:function(t,n=[0,0]){const e=Math.min(2,t.length);for(let r=0;r<e;++r)n[r]=t[r];return n},fromValues:E,ones:_,unitX:i,unitY:o,zeros:function(){return[0,0]}},Symbol.toStringTag,{value:"Module"}))},62484:(t,n,e)=>{function r(){return[0,0,0]}function E(t){return[t[0],t[1],t[2]]}function _(t,n,e){return[t,n,e]}function i(t,n=[0,0,0]){const e=Math.min(3,t.length);for(let r=0;r<e;++r)n[r]=t[r];return n}function o(){return _(1,1,1)}function A(){return _(1,0,0)}function T(){return _(0,1,0)}function s(){return _(0,0,1)}e.d(n,{IR:()=>u,Qw:()=>N,Su:()=>r,UV:()=>c,WK:()=>_,cX:()=>R,ct:()=>E,eu:()=>i,wx:()=>a});const R=[0,0,0],N=o(),c=A(),u=T(),a=s();Object.freeze(Object.defineProperty({__proto__:null,ONES:N,UNIT_X:c,UNIT_Y:u,UNIT_Z:a,ZEROS:R,clone:E,create:r,createView:function(t,n){return new Float64Array(t,n,3)},fromArray:i,fromValues:_,ones:o,unitX:A,unitY:T,unitZ:s,zeros:function(){return[0,0,0]}},Symbol.toStringTag,{value:"Module"}))},47364:(t,n,e)=>{e.d(n,{Af:()=>A,Au:()=>E,QR:()=>_,Yf:()=>T});let r=1e-6;function E(){return r}const _=Math.random,i=Math.PI/180,o=180/Math.PI;function A(t){return t*i}function T(t){return t*o}Object.freeze(Object.defineProperty({__proto__:null,RANDOM:_,equals:function(t,n){return Math.abs(t-n)<=r*Math.max(1,Math.abs(t),Math.abs(n))},getEpsilon:E,setEpsilon:function(t){r=t},toDegree:T,toRadian:A},Symbol.toStringTag,{value:"Module"}))},53648:(t,n,e)=>{e.d(n,{Cq:()=>o,EF:()=>T,Iv:()=>I,SE:()=>C,UB:()=>s,Uj:()=>R,aU:()=>A,gJ:()=>S,gP:()=>c,ig:()=>f,qk:()=>i,sj:()=>N,w7:()=>_});var r=e(98472);const E=new Float32Array(1);function _(t){--t;for(let n=1;n<32;n<<=1)t|=t>>n;return t+1}function i(t,n,e){return Math.min(Math.max(t,n),e)}function o(t,n,e){return t+(n-t)*e}function A(t,n,e,r,E){return o(r,E,(t-n)/(e-n))}function T(t){return t*Math.PI/180}function s(t){return 180*t/Math.PI}function R(t){return Math.acos(i(t,-1,1))}function N(t){return Math.asin(i(t,-1,1))}function c(t,n,e=1e-6){return t===n||!(!Number.isFinite(t)||!Number.isFinite(n))&&(t>n?t-n:n-t)<=e}const u=new DataView(new ArrayBuffer(Float64Array.BYTES_PER_ELEMENT));const a=BigInt("1000000");function S(t){return O(Math.max(-C,Math.min(t,C)))}function O(t){return E[0]=t,E[0]}function I(t,n){const e=(0,r.l)(t),E=N(t[2]/e),_=Math.atan2(t[1]/e,t[0]/e);return(0,r.s)(n,e,E,_),n}function f(t){const n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],e=t[3]*t[3]+t[4]*t[4]+t[5]*t[5],r=t[6]*t[6]+t[7]*t[7]+t[8]*t[8];return!(c(n,1)&&c(e,1)&&c(r,1))}!function(t){const n=function(t){return u.setFloat64(0,t),u.getBigInt64(0)}(t=Math.abs(t)),e=function(t){return u.setBigInt64(0,t),u.getFloat64(0)}(n<=a?a:n-a);Math.abs(t-e)}(1);const C=O(34028234663852886e22)},92896:(t,n,e)=>{e.d(n,{mc:()=>E});var r=e(72008);function E(t,n=!1){return t<=r._?n?new Array(t).fill(0):new Array(t):new Float32Array(t)}},97143:(t,n,e)=>{e.d(n,{Uv:()=>E,aw:()=>_,yh:()=>T});var r=e(72008);function E(t){if((0,r.c7)(t)){if(t.length<r._)return t}else if(t.length<r._)return Array.from(t);let n=!0,e=!0;return t.some(((t,r)=>(n=n&&0===t,e=e&&t===r,!n&&!e))),n?function(t){if(1===t)return o;if(t<r._)return new Array(t).fill(0);if(t>s.length){const n=Math.max(2*s.length,t);s=new Uint8Array(n)}return new Uint8Array(s.buffer,0,t)}(t.length):e?T(t.length):(0,r.c7)(t)||t.BYTES_PER_ELEMENT!==Uint16Array.BYTES_PER_ELEMENT?function(t){let n=!0;for(const e of t){if(e>=65536)return(0,r.c7)(t)?new Uint32Array(t):t;e>=256&&(n=!1)}return n?new Uint8Array(t):new Uint16Array(t)}(t):t}function _(t){return t<=r._?new Array(t):t<=65536?new Uint16Array(t):new Uint32Array(t)}let i=(()=>{const t=new Uint32Array(131072);for(let n=0;n<t.length;++n)t[n]=n;return t})();const o=[0],A=(()=>{const t=new Uint16Array(65536);for(let n=0;n<t.length;++n)t[n]=n;return t})();function T(t){if(1===t)return o;if(t<r._)return Array.from(new Uint16Array(A.buffer,0,t));if(t<A.length)return new Uint16Array(A.buffer,0,t);if(t>i.length){const n=Math.max(2*i.length,t);i=new Uint32Array(n);for(let t=0;t<i.length;t++)i[t]=t}return new Uint32Array(i.buffer,0,t)}let s=new Uint8Array(65536)},98132:(t,n,e)=>{function r(t){switch(t){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8}}e.d(n,{Ad:()=>r})},77080:(t,n,e)=>{e.d(n,{g:()=>_});var r=e(53648),E=e(97143);function _(t,n,e){const _=Array.isArray(t),s=_?t.length/n:t.byteLength/(4*n),R=_?t:new Uint32Array(t,0,s*n),N=e?.minReduction??0,c=e?.originalIndices||null,u=c?c.length:0,a=e?.componentOffsets||null;let S=0;if(a)for(let t=0;t<a.length-1;t++){const n=a[t+1]-a[t];n>S&&(S=n)}else S=s;const O=Math.floor(1.1*S)+1;(null==T||T.length<2*O)&&(T=new Uint32Array((0,r.w7)(2*O)));for(let t=0;t<2*O;t++)T[t]=0;let I=0;const f=!!a&&!!c,C=f?u:s;let M=(0,E.aw)(s);const l=new Uint32Array(u),L=1.96;let h=0!==N?Math.ceil(4*L*L/(N*N)*N*(1-N)):C,D=1,U=a?a[1]:C;for(let t=0;t<C;t++){if(t===h){const n=1-I/t;if(n+L*Math.sqrt(n*(1-n)/t)<N)return null;h*=2}if(t===U){for(let t=0;t<2*O;t++)T[t]=0;if(c)for(let t=a[D-1];t<a[D];t++)l[t]=M[c[t]];U=a[++D]}const e=f?c[t]:t,r=e*n,E=A(R,r,n);let _=E%O,o=I;for(;0!==T[2*_+1];){if(T[2*_]===E){const t=T[2*_+1]-1;if(i(R,r,t*n,n)){o=M[t];break}}_++,_>=O&&(_-=O)}o===I&&(T[2*_]=E,T[2*_+1]=e+1,I++),M[e]=o}if(0!==N&&1-I/s<N)return null;if(f){for(let t=a[D-1];t<l.length;t++)l[t]=M[c[t]];M=(0,E.Uv)(l)}const P=_?new Array(I):new Uint32Array(I*n);I=0;for(let t=0;t<C;t++)M[t]===I&&(o(R,(f?c[t]:t)*n,P,I*n,n),I++);if(c&&!f){const t=new Uint32Array(u);for(let n=0;n<t.length;n++)t[n]=M[c[n]];M=(0,E.Uv)(t)}return{buffer:Array.isArray(P)?P:P.buffer,indices:M,uniqueCount:I}}function i(t,n,e,r){for(let E=0;E<r;E++)if(t[n+E]!==t[e+E])return!1;return!0}function o(t,n,e,r,E){for(let _=0;_<E;_++)e[r+_]=t[n+_]}function A(t,n,e){let r=0;for(let E=0;E<e;E++)r=t[n+E]+r|0,r=r+(r<<11)+(r>>>2)|0;return r>>>0}let T=null},72364:(t,n,e)=>{e.d(n,{U1:()=>T,iC:()=>A});var r=e(71004),E=e(98132),_=e(90736);class i{constructor(t,n){this.layout=t,this.buffer="number"==typeof n?new ArrayBuffer(n*t.stride):n;for(const n of t.fields.keys()){const e=t.fields.get(n);this[n]=new e.constructor(this.buffer,e.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(t,n){const e=this[t];return e&&e.elementCount===n.ElementCount&&e.elementType===n.ElementType?e:null}slice(t,n){return new i(this.layout,this.buffer.slice(t*this.stride,n*this.stride))}copyFrom(t,n=0,e=0,r=t.count){const E=this.stride;if(E%4==0){const _=new Uint32Array(t.buffer,n*E,r*E/4);new Uint32Array(this.buffer,e*E,r*E/4).set(_)}else{const _=new Uint8Array(t.buffer,n*E,r*E);new Uint8Array(this.buffer,e*E,r*E).set(_)}return this}get usedMemory(){return this.byteLength}dispose(){}}class o{constructor(t=null){this._stride=0,this._lastAligned=0,this._fields=new Map,t&&(this._stride=t.stride,t.fields.forEach((t=>this._fields.set(t[0],{...t[1],constructor:N(t[1].constructor)}))))}vec2f(t,n){return this._appendField(t,r.U7,n),this}vec2f64(t,n){return this._appendField(t,r.wT,n),this}vec3f(t,n){return this._appendField(t,r.Yj,n),this}vec3f64(t,n){return this._appendField(t,r.Ax,n),this}vec4f(t,n){return this._appendField(t,r._5,n),this}vec4f64(t,n){return this._appendField(t,r.Ip,n),this}mat3f(t,n){return this._appendField(t,r.Ko,n),this}mat3f64(t,n){return this._appendField(t,r.m_,n),this}mat4f(t,n){return this._appendField(t,r.IL,n),this}mat4f64(t,n){return this._appendField(t,r.mF,n),this}vec4u8(t,n){return this._appendField(t,r.sb,n),this}f32(t,n){return this._appendField(t,r.AZ,n),this}f64(t,n){return this._appendField(t,r.oN,n),this}u8(t,n){return this._appendField(t,r.Kg,n),this}u16(t,n){return this._appendField(t,r.E_,n),this}i8(t,n){return this._appendField(t,r.kV,n),this}vec2i8(t,n){return this._appendField(t,r.oR,n),this}vec2i16(t,n){return this._appendField(t,r.iN,n),this}vec2u8(t,n){return this._appendField(t,r.eS,n),this}vec4u16(t,n){return this._appendField(t,r.Ig,n),this}u32(t,n){return this._appendField(t,r.Ym,n),this}_appendField(t,n,e){if(this._fields.has(t))return void(0,_.Uc)(!1,`${t} already added to vertex buffer layout`);const r=n.ElementCount*(0,E.Ad)(n.ElementType),i=this._stride;this._stride+=r,this._fields.set(t,{size:r,constructor:n,offset:i,optional:e})}createBuffer(t){return new i(this,t)}createView(t){return new i(this,t)}clone(){const t=new o;return t._stride=this._stride,t._fields=new Map,this._fields.forEach(((n,e)=>t._fields.set(e,n))),t.BufferType=this.BufferType,t}get stride(){if(this._lastAligned!==this._fields.size){let t=1;this._fields.forEach((n=>t=Math.max(t,(0,E.Ad)(n.constructor.ElementType)))),this._stride=Math.floor((this._stride+t-1)/t)*t,this._lastAligned=this._fields.size}return this._stride}get fields(){return this._fields}}function A(){return new o}class T{constructor(t){this.fields=new Array,t.fields.forEach(((t,n)=>{const e={...t,constructor:R(t.constructor)};this.fields.push([n,e])})),this.stride=t.stride}}const s=[r.AZ,r.U7,r.Yj,r._5,r.Ko,r.IL,r.oN,r.wT,r.Ax,r.Ip,r.m_,r.mF,r.Kg,r.eS,r.IN,r.sb,r.E_,r.kg,r.k5,r.Ig,r.Ym,r.qZ,r.ER,r.q$,r.kV,r.oR,r.Oq,r.mq,r.Mt,r.iN,r.g7,r.OS,r.Ep,r.mI,r.Yv,r.i9];function R(t){return`${t.ElementType}_${t.ElementCount}`}function N(t){return c.get(t)}const c=new Map;s.forEach((t=>c.set(R(t),t)))},73440:(t,n,e)=>{e.d(n,{W:()=>_});var r=e(77800),E=e(91811);function _(t,n=0){const e=t.stride;return Array.from(t.fields.keys()).map((r=>{const _=t.fields.get(r),o=_.constructor.ElementCount,A=i(_.constructor.ElementType),T=_.offset,s=!(!_.optional||!_.optional.glNormalized);return new E.q(r,o,A,T,e,s,n)}))}function i(t){const n=o[t];if(n)return n;throw new Error("BufferType not supported in WebGL")}const o={u8:r.Ck.UNSIGNED_BYTE,u16:r.Ck.UNSIGNED_SHORT,u32:r.Ck.UNSIGNED_INT,i8:r.Ck.BYTE,i16:r.Ck.SHORT,i32:r.Ck.INT,f32:r.Ck.FLOAT}},90736:(t,n,e)=>{e.d(n,{If:()=>_,Uc:()=>E}),e(85256),e(74784),(0,e(37008).Su)();class r{constructor(t){this.message=t}toString(){return`AssertException: ${this.message}`}}function E(t,n){if(!t){n=n||"Assertion";const t=new Error(n).stack;throw new r(`${n} at ${t}`)}}function _(t,n,e,r){let E,_=(e[0]-t[0])/n[0],i=(r[0]-t[0])/n[0];_>i&&(E=_,_=i,i=E);let o=(e[1]-t[1])/n[1],A=(r[1]-t[1])/n[1];if(o>A&&(E=o,o=A,A=E),_>A||o>i)return!1;o>_&&(_=o),A<i&&(i=A);let T=(e[2]-t[2])/n[2],s=(r[2]-t[2])/n[2];return T>s&&(E=T,T=s,s=E),!(_>s||T>i||(s<i&&(i=s),i<0))}},4636:(t,n,e)=>{var r;e.d(n,{K:()=>r}),function(t){t.POSITION="position",t.NORMAL="normal",t.NORMALCOMPRESSED="normalCompressed",t.UV0="uv0",t.COLOR="color",t.SYMBOLCOLOR="symbolColor",t.SIZE="size",t.TANGENT="tangent",t.OFFSET="offset",t.PERSPECTIVEDIVIDE="perspectiveDivide",t.CENTEROFFSETANDDISTANCE="centerOffsetAndDistance",t.LENGTH="length",t.PREVPOSITION="prevPosition",t.NEXTPOSITION="nextPosition",t.SUBDIVISIONFACTOR="subdivisionFactor",t.COLORFEATUREATTRIBUTE="colorFeatureAttribute",t.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",t.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",t.DISTANCETOSTART="distanceToStart",t.UVMAPSPACE="uvMapSpace",t.BOUNDINGRECT="boundingRect",t.UVREGION="uvRegion",t.PROFILERIGHT="profileRight",t.PROFILEUP="profileUp",t.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",t.FEATUREVALUE="featureValue",t.INSTANCEMODELORIGINHI="instanceModelOriginHi",t.INSTANCEMODELORIGINLO="instanceModelOriginLo",t.INSTANCEMODEL="instanceModel",t.INSTANCEMODELNORMAL="instanceModelNormal",t.INSTANCECOLOR="instanceColor",t.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",t.LOCALTRANSFORM="localTransform",t.GLOBALTRANSFORM="globalTransform",t.BOUNDINGSPHERE="boundingSphere",t.MODELORIGIN="modelOrigin",t.MODELSCALEFACTORS="modelScaleFactors",t.FEATUREATTRIBUTE="featureAttribute",t.STATE="state",t.LODLEVEL="lodLevel",t.POSITION0="position0",t.POSITION1="position1",t.NORMAL2COMPRESSED="normal2Compressed",t.COMPONENTINDEX="componentIndex",t.VARIANTOFFSET="variantOffset",t.VARIANTSTROKE="variantStroke",t.VARIANTEXTENSION="variantExtension",t.SIDENESS="sideness",t.START="start",t.END="end",t.UP="up",t.EXTRUDE="extrude",t.OBJECTANDLAYERIDCOLOR="objectAndLayerIdColor",t.INSTANCEOBJECTANDLAYERIDCOLOR="instanceObjectAndLayerIdColor"}(r||(r={}))},80036:(t,n,e)=>{e.d(n,{If:()=>i,sn:()=>A,wj:()=>T});var r=e(73440),E=e(72364),_=e(4636);const i=(0,E.iC)().vec3f(_.K.POSITION).u16(_.K.COMPONENTINDEX),o=(0,E.iC)().vec2u8(_.K.SIDENESS),A=((0,r.W)(o),(0,E.iC)().vec3f(_.K.POSITION0).vec3f(_.K.POSITION1).vec2i16(_.K.NORMALCOMPRESSED).u16(_.K.COMPONENTINDEX).u8(_.K.VARIANTOFFSET,{glNormalized:!0}).u8(_.K.VARIANTSTROKE).u8(_.K.VARIANTEXTENSION,{glNormalized:!0})),T=(0,E.iC)().vec3f(_.K.POSITION0).vec3f(_.K.POSITION1).vec2i16(_.K.NORMALCOMPRESSED).vec2i16(_.K.NORMAL2COMPRESSED).u16(_.K.COMPONENTINDEX).u8(_.K.VARIANTOFFSET,{glNormalized:!0}).u8(_.K.VARIANTSTROKE).u8(_.K.VARIANTEXTENSION,{glNormalized:!0});new Map([[_.K.POSITION0,0],[_.K.POSITION1,1],[_.K.COMPONENTINDEX,2],[_.K.VARIANTOFFSET,3],[_.K.VARIANTSTROKE,4],[_.K.VARIANTEXTENSION,5],[_.K.NORMALCOMPRESSED,6],[_.K.NORMAL2COMPRESSED,7],[_.K.SIDENESS,8]])},79968:(t,n,e)=>{e.d(n,{k:()=>s});var r=e(92400),E=e(53648),_=e(98472),i=e(62484);const o=-1;var A,T;function s(t,n,e,i=O){const A=t.vertices.position,T=t.vertices.componentIndex,s=(0,E.EF)(i.anglePlanar),S=(0,E.EF)(i.angleSignificantEdge),I=Math.cos(S),f=Math.cos(s),C=a.edge,M=C.position0,l=C.position1,L=C.faceNormal0,h=C.faceNormal1,D=u(t),U=function(t){const n=t.faces.length/3,e=t.faces,r=t.neighbors;let E=0;for(let t=0;t<n;t++){const n=r[3*t],_=r[3*t+1],i=r[3*t+2],A=e[3*t],T=e[3*t+1],s=e[3*t+2];E+=n===o||A<T?1:0,E+=_===o||T<s?1:0,E+=i===o||s<A?1:0}const _=new Int32Array(4*E);let i=0;for(let t=0;t<n;t++){const n=r[3*t],E=r[3*t+1],A=r[3*t+2],T=e[3*t],s=e[3*t+1],R=e[3*t+2];(n===o||T<s)&&(_[i++]=T,_[i++]=s,_[i++]=t,_[i++]=n),(E===o||s<R)&&(_[i++]=s,_[i++]=R,_[i++]=t,_[i++]=E),(A===o||R<T)&&(_[i++]=R,_[i++]=T,_[i++]=t,_[i++]=A)}return _}(t),P=U.length/4,d=n.allocate(P);let F=0;const G=P,B=e.allocate(G);let g=0,m=0,p=0;const H=(0,r.ik)(0,P),y=new Float32Array(P);y.forEach(((t,n,e)=>{A.getVec(U[4*n],M),A.getVec(U[4*n+1],l),e[n]=(0,_.p)(M,l)})),H.sort(((t,n)=>y[n]-y[t]));const w=new Array,b=new Array;for(let t=0;t<P;t++){const r=H[t],E=y[r],i=U[4*r],u=U[4*r+1],a=U[4*r+2],S=U[4*r+3],O=S===o;if(A.getVec(i,M),A.getVec(u,l),O)(0,_.s)(L,D[3*a],D[3*a+1],D[3*a+2]),(0,_.c)(h,L),C.componentIndex=T.get(i),C.cosAngle=(0,_.j)(L,h);else{if((0,_.s)(L,D[3*a],D[3*a+1],D[3*a+2]),(0,_.s)(h,D[3*S],D[3*S+1],D[3*S+2]),C.componentIndex=T.get(i),C.cosAngle=(0,_.j)(L,h),N(C,f))continue;C.cosAngle<-.9999&&(0,_.c)(h,L)}m+=E,p++,O||R(C,I)?(n.write(d,F++,C),w.push(E)):c(C,s)&&(e.write(B,g++,C),b.push(E))}const V=new Float32Array(w.reverse()),v=new Float32Array(b.reverse());return{regular:{instancesData:n.trim(d,F),lodInfo:{lengths:V}},silhouette:{instancesData:e.trim(B,g),lodInfo:{lengths:v}},averageEdgeLength:m/p}}function R(t,n){return t.cosAngle<n}function N(t,n){return t.cosAngle>n}function c(t,n){const e=(0,E.Uj)(t.cosAngle),r=a.fwd,i=a.ortho;return(0,_.D)(r,t.position1,t.position0),e*((0,_.j)((0,_.b)(i,t.faceNormal0,t.faceNormal1),r)>0?-1:1)>n}function u(t){const n=t.faces.length/3,e=t.vertices.position,r=t.faces,E=S.v0,i=S.v1,o=S.v2,A=new Float32Array(3*n);for(let t=0;t<n;t++){const n=r[3*t],T=r[3*t+1],s=r[3*t+2];e.getVec(n,E),e.getVec(T,i),e.getVec(s,o),(0,_.f)(i,i,E),(0,_.f)(o,o,E),(0,_.b)(E,i,o),(0,_.n)(E,E),A[3*t]=E[0],A[3*t+1]=E[1],A[3*t+2]=E[2]}return A}(T=A||(A={}))[T.SOLID=0]="SOLID",T[T.SKETCH=1]="SKETCH";const a={edge:{position0:(0,i.Su)(),position1:(0,i.Su)(),faceNormal0:(0,i.Su)(),faceNormal1:(0,i.Su)(),componentIndex:0,cosAngle:0},ortho:(0,i.Su)(),fwd:(0,i.Su)()},S={v0:(0,i.Su)(),v1:(0,i.Su)(),v2:(0,i.Su)()},O={anglePlanar:4,angleSignificantEdge:35}},75980:(t,n,e)=>{e.d(n,{Aj:()=>d,or:()=>p,In:()=>F,qu:()=>m});var r=e(77080);function E(t,n,e){const r=n/3,E=new Uint32Array(e+1),_=new Uint32Array(e+1),i=(t,n)=>{t<n?E[t+1]++:_[n+1]++};for(let n=0;n<r;n++){const e=t[3*n],r=t[3*n+1],E=t[3*n+2];i(e,r),i(r,E),i(E,e)}let o=0,A=0;for(let t=0;t<e;t++){const n=E[t+1],e=_[t+1];E[t+1]=o,_[t+1]=A,o+=n,A+=e}const T=new Uint32Array(6*r),s=E[e],R=(t,n,e)=>{if(t<n){const r=E[t+1]++;T[2*r]=n,T[2*r+1]=e}else{const r=_[n+1]++;T[2*s+2*r]=t,T[2*s+2*r+1]=e}};for(let n=0;n<r;n++){const e=t[3*n],r=t[3*n+1],E=t[3*n+2];R(e,r,n),R(r,E,n),R(E,e,n)}const N=(t,n)=>{const e=2*t,r=n-t;for(let t=1;t<r;t++){const n=T[e+2*t],r=T[e+2*t+1];let E=t-1;for(;E>=0&&T[e+2*E]>n;E--)T[e+2*E+2]=T[e+2*E],T[e+2*E+3]=T[e+2*E+1];T[e+2*E+2]=n,T[e+2*E+3]=r}};for(let t=0;t<e;t++)N(E[t],E[t+1]),N(s+_[t],s+_[t+1]);const c=new Int32Array(3*r),u=(n,e)=>n===t[3*e]?0:n===t[3*e+1]?1:n===t[3*e+2]?2:-1,a=(t,n)=>{const e=u(t,n);c[3*n+e]=-1},S=(t,n,e,r)=>{const E=u(t,n);c[3*n+E]=r;const _=u(e,r);c[3*r+_]=n};for(let t=0;t<e;t++){let n=E[t];const e=E[t+1];let r=_[t];const i=_[t+1];for(;n<e&&r<i;){const e=T[2*n],E=T[2*s+2*r];e===E?(S(t,T[2*n+1],E,T[2*s+2*r+1]),n++,r++):e<E?(a(t,T[2*n+1]),n++):(a(E,T[2*s+2*r+1]),r++)}for(;n<e;)a(t,T[2*n+1]),n++;for(;r<i;)a(T[2*s+2*r],T[2*s+2*r+1]),r++}return c}var _=e(72364),i=e(4636),o=e(80036),A=e(72052),T=e(98472),s=e(62484),R=e(73440),N=e(53648);function c(t,n,e,r,E,_=2){const i=1/(Math.abs(e)+Math.abs(r)+Math.abs(E)),o=e*i,A=r*i,T=E<=0?(o>=0?1:-1)*(1-Math.abs(A)):o,s=E<=0?(A>=0?1:-1)*(1-Math.abs(o)):A,R=n*_;t[R]=u(T),t[R+1]=u(s)}function u(t){return(0,N.qk)(Math.round(32767*t),-32767,32767)}e(92896);class a{updateSettings(t){this.settings=t,this._edgeHashFunction=t.reducedPrecision?C:f}write(t,n,e){const r=this._edgeHashFunction(e);U.seed=r;const E=U.getIntRange(0,255),_=U.getIntRange(0,this.settings.variants-1),i=U.getFloat(),o=255*(.5*function(t,n){const e=t<0?-1:1;return Math.abs(t)**1.2*e}(-(1-Math.min(i/.7,1))+Math.max(0,i-.7)/(1-.7))+.5);t.position0.setVec(n,e.position0),t.position1.setVec(n,e.position1),t.componentIndex.set(n,e.componentIndex),t.variantOffset.set(n,E),t.variantStroke.set(n,_),t.variantExtension.set(n,o)}trim(t,n){return t.slice(0,n)}}const S=new Float32Array(6),O=new Uint32Array(S.buffer),I=new Uint32Array(1);function f(t){const n=S;n[0]=t.position0[0],n[1]=t.position0[1],n[2]=t.position0[2],n[3]=t.position1[0],n[4]=t.position1[1],n[5]=t.position1[2],I[0]=5381;for(let t=0;t<O.length;t++)I[0]=31*I[0]+O[t];return I[0]}function C(t){const n=S;n[0]=l(t.position0[0]),n[1]=l(t.position0[1]),n[2]=l(t.position0[2]),n[3]=l(t.position1[0]),n[4]=l(t.position1[1]),n[5]=l(t.position1[2]),I[0]=5381;for(let t=0;t<O.length;t++)I[0]=31*I[0]+O[t];return I[0]}const M=1e4;function l(t){return Math.round(t*M)/M}class L{constructor(){this._commonWriter=new a}updateSettings(t){this._commonWriter.updateSettings(t)}allocate(t){return o.sn.createBuffer(t)}write(t,n,e){this._commonWriter.write(t,n,e),(0,T.g)(D,e.faceNormal0,e.faceNormal1),(0,T.n)(D,D);const{typedBuffer:r,typedBufferStride:E}=t.normalCompressed;c(r,n,D[0],D[1],D[2],E)}trim(t,n){return this._commonWriter.trim(t,n)}}L.Layout=o.sn,L.glLayout=(0,R.W)(o.sn,1);class h{constructor(){this._commonWriter=new a}updateSettings(t){this._commonWriter.updateSettings(t)}allocate(t){return o.wj.createBuffer(t)}write(t,n,e){this._commonWriter.write(t,n,e);{const{typedBuffer:r,typedBufferStride:E}=t.normalCompressed;c(r,n,e.faceNormal0[0],e.faceNormal0[1],e.faceNormal0[2],E)}{const{typedBuffer:r,typedBufferStride:E}=t.normal2Compressed;c(r,n,e.faceNormal1[0],e.faceNormal1[1],e.faceNormal1[2],E)}}trim(t,n){return this._commonWriter.trim(t,n)}}h.Layout=o.wj,h.glLayout=(0,R.W)(o.wj,1);const D=(0,s.Su)(),U=new A.c;var P=e(79968);function d(t){const n=F(t.data,t.skipDeduplicate,t.indices,t.indicesLength);return B.updateSettings(t.writerSettings),g.updateSettings(t.writerSettings),(0,P.k)(n,B,g)}function F(t,n,e,_){if(n){const n=E(e,_,t.count);return new G(e,_,n,t)}const i=(0,r.g)(t.buffer,t.stride/4,{originalIndices:e,originalIndicesLength:_}),A=E(i.indices,_,i.uniqueCount);return{faces:i.indices,facesLength:i.indices.length,neighbors:A,vertices:o.If.createView(i.buffer)}}class G{constructor(t,n,e,r){this.faces=t,this.facesLength=n,this.neighbors=e,this.vertices=r}}const B=new L,g=new h,m=(0,_.iC)().vec3f(i.K.POSITION0).vec3f(i.K.POSITION1),p=(0,_.iC)().vec3f(i.K.POSITION0).vec3f(i.K.POSITION1).u16(i.K.COMPONENTINDEX)},91811:(t,n,e)=>{e.d(n,{q:()=>r});class r{constructor(t,n,e,r,E,_=!1,i=0){this.name=t,this.count=n,this.type=e,this.offset=r,this.stride=E,this.normalized=_,this.divisor=i}}},77800:(t,n,e)=>{var r,E,_,i,o,A,T,s,R,N,c,u,a,S,O,I,f,C,M,l,L,h,D;e.d(n,{Ck:()=>s,GE:()=>U,Gs:()=>M,Id:()=>S,K:()=>o,OK:()=>I,QD:()=>N,Qb:()=>f,Qx:()=>h,Qz:()=>u,SC:()=>A,UV:()=>O,Ud:()=>c,Uf:()=>E,YT:()=>i,_m:()=>C,c5:()=>a,et:()=>R,kl:()=>l,sl:()=>r,sr:()=>P,vs:()=>T,w$:()=>_,y4:()=>L}),function(t){t[t.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",t[t.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",t[t.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT"}(r||(r={})),function(t){t[t.POINTS=0]="POINTS",t[t.LINES=1]="LINES",t[t.LINE_LOOP=2]="LINE_LOOP",t[t.LINE_STRIP=3]="LINE_STRIP",t[t.TRIANGLES=4]="TRIANGLES",t[t.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",t[t.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(E||(E={})),function(t){t[t.ZERO=0]="ZERO",t[t.ONE=1]="ONE",t[t.SRC_COLOR=768]="SRC_COLOR",t[t.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",t[t.SRC_ALPHA=770]="SRC_ALPHA",t[t.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",t[t.DST_ALPHA=772]="DST_ALPHA",t[t.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",t[t.DST_COLOR=774]="DST_COLOR",t[t.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",t[t.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",t[t.CONSTANT_COLOR=32769]="CONSTANT_COLOR",t[t.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",t[t.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",t[t.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(_||(_={})),function(t){t[t.ADD=32774]="ADD",t[t.MIN=32775]="MIN",t[t.MAX=32776]="MAX",t[t.SUBTRACT=32778]="SUBTRACT",t[t.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(i||(i={})),function(t){t[t.ARRAY_BUFFER=34962]="ARRAY_BUFFER",t[t.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",t[t.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",t[t.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",t[t.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",t[t.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",t[t.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER",t[t.TRANSFORM_FEEDBACK_BUFFER=35982]="TRANSFORM_FEEDBACK_BUFFER"}(o||(o={})),function(t){t[t.FRONT=1028]="FRONT",t[t.BACK=1029]="BACK",t[t.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(A||(A={})),function(t){t[t.CW=2304]="CW",t[t.CCW=2305]="CCW"}(T||(T={})),function(t){t[t.BYTE=5120]="BYTE",t[t.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",t[t.SHORT=5122]="SHORT",t[t.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",t[t.INT=5124]="INT",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.FLOAT=5126]="FLOAT"}(s||(s={})),function(t){t[t.NEVER=512]="NEVER",t[t.LESS=513]="LESS",t[t.EQUAL=514]="EQUAL",t[t.LEQUAL=515]="LEQUAL",t[t.GREATER=516]="GREATER",t[t.NOTEQUAL=517]="NOTEQUAL",t[t.GEQUAL=518]="GEQUAL",t[t.ALWAYS=519]="ALWAYS"}(R||(R={})),function(t){t[t.ZERO=0]="ZERO",t[t.KEEP=7680]="KEEP",t[t.REPLACE=7681]="REPLACE",t[t.INCR=7682]="INCR",t[t.DECR=7683]="DECR",t[t.INVERT=5386]="INVERT",t[t.INCR_WRAP=34055]="INCR_WRAP",t[t.DECR_WRAP=34056]="DECR_WRAP"}(N||(N={})),function(t){t[t.NEAREST=9728]="NEAREST",t[t.LINEAR=9729]="LINEAR",t[t.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",t[t.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",t[t.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",t[t.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(c||(c={})),function(t){t[t.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",t[t.REPEAT=10497]="REPEAT",t[t.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(u||(u={})),function(t){t[t.TEXTURE_2D=3553]="TEXTURE_2D",t[t.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",t[t.TEXTURE_3D=32879]="TEXTURE_3D",t[t.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",t[t.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",t[t.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",t[t.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",t[t.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(a||(a={})),function(t){t[t.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",t[t.DEPTH_STENCIL=34041]="DEPTH_STENCIL",t[t.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",t[t.ALPHA=6406]="ALPHA",t[t.RGB=6407]="RGB",t[t.RGBA=6408]="RGBA",t[t.LUMINANCE=6409]="LUMINANCE",t[t.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",t[t.RED=6403]="RED",t[t.RG=33319]="RG",t[t.RED_INTEGER=36244]="RED_INTEGER",t[t.RG_INTEGER=33320]="RG_INTEGER",t[t.RGB_INTEGER=36248]="RGB_INTEGER",t[t.RGBA_INTEGER=36249]="RGBA_INTEGER"}(S||(S={})),function(t){t[t.RGBA4=32854]="RGBA4",t[t.R16F=33325]="R16F",t[t.RG16F=33327]="RG16F",t[t.RGB32F=34837]="RGB32F",t[t.RGBA16F=34842]="RGBA16F",t[t.R32F=33326]="R32F",t[t.RG32F=33328]="RG32F",t[t.RGBA32F=34836]="RGBA32F",t[t.R11F_G11F_B10F=35898]="R11F_G11F_B10F",t[t.RGB8=32849]="RGB8",t[t.RGBA8=32856]="RGBA8",t[t.RGB5_A1=32855]="RGB5_A1",t[t.R8=33321]="R8",t[t.RG8=33323]="RG8",t[t.R8I=33329]="R8I",t[t.R8UI=33330]="R8UI",t[t.R16I=33331]="R16I",t[t.R16UI=33332]="R16UI",t[t.R32I=33333]="R32I",t[t.R32UI=33334]="R32UI",t[t.RG8I=33335]="RG8I",t[t.RG8UI=33336]="RG8UI",t[t.RG16I=33337]="RG16I",t[t.RG16UI=33338]="RG16UI",t[t.RG32I=33339]="RG32I",t[t.RG32UI=33340]="RG32UI",t[t.RGB16F=34843]="RGB16F",t[t.RGB9_E5=35901]="RGB9_E5",t[t.SRGB8=35905]="SRGB8",t[t.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",t[t.RGB565=36194]="RGB565",t[t.RGBA32UI=36208]="RGBA32UI",t[t.RGB32UI=36209]="RGB32UI",t[t.RGBA16UI=36214]="RGBA16UI",t[t.RGB16UI=36215]="RGB16UI",t[t.RGBA8UI=36220]="RGBA8UI",t[t.RGB8UI=36221]="RGB8UI",t[t.RGBA32I=36226]="RGBA32I",t[t.RGB32I=36227]="RGB32I",t[t.RGBA16I=36232]="RGBA16I",t[t.RGB16I=36233]="RGB16I",t[t.RGBA8I=36238]="RGBA8I",t[t.RGB8I=36239]="RGB8I",t[t.R8_SNORM=36756]="R8_SNORM",t[t.RG8_SNORM=36757]="RG8_SNORM",t[t.RGB8_SNORM=36758]="RGB8_SNORM",t[t.RGBA8_SNORM=36759]="RGBA8_SNORM",t[t.RGB10_A2=32857]="RGB10_A2",t[t.RGB10_A2UI=36975]="RGB10_A2UI"}(O||(O={})),function(t){t[t.FLOAT=5126]="FLOAT",t[t.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",t[t.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",t[t.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",t[t.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",t[t.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",t[t.BYTE=5120]="BYTE",t[t.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",t[t.SHORT=5122]="SHORT",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.INT=5124]="INT",t[t.HALF_FLOAT=5131]="HALF_FLOAT",t[t.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",t[t.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",t[t.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",t[t.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(I||(I={})),function(t){t[t.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",t[t.STENCIL_INDEX8=36168]="STENCIL_INDEX8",t[t.DEPTH_STENCIL=34041]="DEPTH_STENCIL",t[t.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",t[t.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",t[t.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",t[t.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(f||(f={})),function(t){t[t.STATIC_DRAW=35044]="STATIC_DRAW",t[t.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",t[t.STREAM_DRAW=35040]="STREAM_DRAW",t[t.STATIC_READ=35045]="STATIC_READ",t[t.DYNAMIC_READ=35049]="DYNAMIC_READ",t[t.STREAM_READ=35041]="STREAM_READ",t[t.STATIC_COPY=35046]="STATIC_COPY",t[t.DYNAMIC_COPY=35050]="DYNAMIC_COPY",t[t.STREAM_COPY=35042]="STREAM_COPY"}(C||(C={})),function(t){t[t.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",t[t.VERTEX_SHADER=35633]="VERTEX_SHADER"}(M||(M={})),function(t){t[t.FRAMEBUFFER=36160]="FRAMEBUFFER",t[t.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",t[t.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(l||(l={})),function(t){t[t.Texture=0]="Texture",t[t.BufferObject=1]="BufferObject",t[t.VertexArrayObject=2]="VertexArrayObject",t[t.Shader=3]="Shader",t[t.Program=4]="Program",t[t.FramebufferObject=5]="FramebufferObject",t[t.Renderbuffer=6]="Renderbuffer",t[t.TransformFeedback=7]="TransformFeedback",t[t.Sync=8]="Sync",t[t.UNCOUNTED=9]="UNCOUNTED",t[t.LinesOfCode=9]="LinesOfCode",t[t.Uniform=10]="Uniform",t[t.COUNT=11]="COUNT"}(L||(L={})),function(t){t[t.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",t[t.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",t[t.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",t[t.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",t[t.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",t[t.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",t[t.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",t[t.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",t[t.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",t[t.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",t[t.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",t[t.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",t[t.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",t[t.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",t[t.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",t[t.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(h||(h={})),function(t){t[t.NONE=0]="NONE",t[t.BACK=1029]="BACK"}(D||(D={}));const U=33306;var P,d,F,G,B,g,m;!function(t){t[t.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",t[t.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",t[t.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",t[t.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",t[t.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",t[t.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",t[t.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",t[t.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",t[t.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",t[t.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",t[t.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"}(P||(P={})),function(t){t[t.FLOAT=5126]="FLOAT",t[t.FLOAT_VEC2=35664]="FLOAT_VEC2",t[t.FLOAT_VEC3=35665]="FLOAT_VEC3",t[t.FLOAT_VEC4=35666]="FLOAT_VEC4",t[t.INT=5124]="INT",t[t.INT_VEC2=35667]="INT_VEC2",t[t.INT_VEC3=35668]="INT_VEC3",t[t.INT_VEC4=35669]="INT_VEC4",t[t.BOOL=35670]="BOOL",t[t.BOOL_VEC2=35671]="BOOL_VEC2",t[t.BOOL_VEC3=35672]="BOOL_VEC3",t[t.BOOL_VEC4=35673]="BOOL_VEC4",t[t.FLOAT_MAT2=35674]="FLOAT_MAT2",t[t.FLOAT_MAT3=35675]="FLOAT_MAT3",t[t.FLOAT_MAT4=35676]="FLOAT_MAT4",t[t.SAMPLER_2D=35678]="SAMPLER_2D",t[t.SAMPLER_CUBE=35680]="SAMPLER_CUBE",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",t[t.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",t[t.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",t[t.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",t[t.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",t[t.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",t[t.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",t[t.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",t[t.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",t[t.SAMPLER_3D=35679]="SAMPLER_3D",t[t.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",t[t.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",t[t.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",t[t.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",t[t.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",t[t.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",t[t.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",t[t.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",t[t.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",t[t.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",t[t.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",t[t.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(d||(d={})),function(t){t[t.OBJECT_TYPE=37138]="OBJECT_TYPE",t[t.SYNC_CONDITION=37139]="SYNC_CONDITION",t[t.SYNC_STATUS=37140]="SYNC_STATUS",t[t.SYNC_FLAGS=37141]="SYNC_FLAGS"}(F||(F={})),function(t){t[t.UNSIGNALED=37144]="UNSIGNALED",t[t.SIGNALED=37145]="SIGNALED"}(G||(G={})),function(t){t[t.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",t[t.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",t[t.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",t[t.WAIT_FAILED=37149]="WAIT_FAILED"}(B||(B={})),function(t){t[t.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(g||(g={})),function(t){t[t.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(m||(m={}))}}]);