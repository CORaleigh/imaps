"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[8501],{88396:(t,e,n)=>{n.d(e,{a:()=>r,b:()=>T,c:()=>_,d:()=>p,e:()=>P,f:()=>N,g:()=>i,h:()=>f,i:()=>C,j:()=>a,k:()=>G,l:()=>L,m:()=>l,n:()=>S,o:()=>O,p:()=>M,q:()=>d,r:()=>U,s:()=>u,t:()=>D,u:()=>I,v:()=>c,x:()=>s,y:()=>o});var E=n(26277);function _(t,e){return t[0]=e[0],t[1]=e[1],t}function r(t,e,n){return t[0]=e,t[1]=n,t}function T(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t}function i(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t}function A(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t}function R(t,e,n){return t[0]=e[0]/n[0],t[1]=e[1]/n[1],t}function s(t,e,n){return t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t}function o(t,e,n){return t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t}function N(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t}function c(t,e,n,E){return t[0]=e[0]+n[0]*E,t[1]=e[1]+n[1]*E,t}function a(t,e){const n=e[0]-t[0],E=e[1]-t[1];return Math.sqrt(n*n+E*E)}function u(t,e){const n=e[0]-t[0],E=e[1]-t[1];return n*n+E*E}function O(t){const e=t[0],n=t[1];return Math.sqrt(e*e+n*n)}function I(t){const e=t[0],n=t[1];return e*e+n*n}function S(t,e){return t[0]=-e[0],t[1]=-e[1],t}function C(t,e){const n=e[0],E=e[1];let _=n*n+E*E;return _>0&&(_=1/Math.sqrt(_),t[0]=e[0]*_,t[1]=e[1]*_),t}function f(t,e){return t[0]*e[0]+t[1]*e[1]}function l(t,e,n){const E=e[0]*n[1]-e[1]*n[0];return t[0]=t[1]=0,t[2]=E,t}function L(t,e,n,E){const _=e[0],r=e[1];return t[0]=_+E*(n[0]-_),t[1]=r+E*(n[1]-r),t}function M(t,e,n){const E=e[0],_=e[1];return t[0]=n[0]*E+n[2]*_,t[1]=n[1]*E+n[3]*_,t}function D(t,e,n){const E=e[0],_=e[1];return t[0]=n[0]*E+n[2]*_+n[4],t[1]=n[1]*E+n[3]*_+n[5],t}function U(t,e,n,E){const _=e[0]-n[0],r=e[1]-n[1],T=Math.sin(E),i=Math.cos(E);return t[0]=_*i-r*T+n[0],t[1]=_*T+r*i+n[1],t}function P(t,e){return t[0]===e[0]&&t[1]===e[1]}function d(t,e,n,E,_){let r=e[0]-n[0],T=e[1]-n[1];const i=(E[0]*r+E[1]*T)*(_-1);return r=E[0]*i,T=E[1]*i,t[0]=e[0]+r,t[1]=e[1]+T,t}const F=O,G=i,h=A,B=R,p=a,g=u,H=I;Object.freeze(Object.defineProperty({__proto__:null,copy:_,set:r,add:T,subtract:i,multiply:A,divide:R,ceil:function(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t},floor:function(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t},min:s,max:o,round:function(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t},scale:N,scaleAndAdd:c,distance:a,squaredDistance:u,length:O,squaredLength:I,negate:S,inverse:function(t,e){return t[0]=1/e[0],t[1]=1/e[1],t},normalize:C,dot:f,cross:l,lerp:L,random:function(t,e){e=e||1;const n=2*(0,E.R)()*Math.PI;return t[0]=Math.cos(n)*e,t[1]=Math.sin(n)*e,t},transformMat2:M,transformMat2d:D,transformMat3:function(t,e,n){const E=e[0],_=e[1];return t[0]=n[0]*E+n[3]*_+n[6],t[1]=n[1]*E+n[4]*_+n[7],t},transformMat4:function(t,e,n){const E=e[0],_=e[1];return t[0]=n[0]*E+n[4]*_+n[12],t[1]=n[1]*E+n[5]*_+n[13],t},rotate:U,angle:function(t,e){const n=t[0],E=t[1],_=e[0],r=e[1];let T=n*n+E*E;T>0&&(T=1/Math.sqrt(T));let i=_*_+r*r;i>0&&(i=1/Math.sqrt(i));const A=(n*_+E*r)*T*i;return A>1?0:A<-1?Math.PI:Math.acos(A)},str:function(t){return"vec2("+t[0]+", "+t[1]+")"},exactEquals:P,equals:function(t,e){const n=t[0],_=t[1],r=e[0],T=e[1];return Math.abs(n-r)<=E.E*Math.max(1,Math.abs(n),Math.abs(r))&&Math.abs(_-T)<=E.E*Math.max(1,Math.abs(_),Math.abs(T))},projectAndScale:d,len:F,sub:G,mul:h,div:B,dist:p,sqrDist:g,sqrLen:H},Symbol.toStringTag,{value:"Module"}))},48734:(t,e,n)=>{n.d(e,{B3:()=>_,Op:()=>T,U:()=>r,n1:()=>E});n(93169);function E(t){switch(t){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8;default:return}}function _(t){switch(t){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0;default:return}}function r(t){switch(t){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1;default:return}}function T(t){switch(t){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303;default:return}}},35888:(t,e,n)=>{n.d(e,{d:()=>_});var E=n(16889);function _(t,e,n){const _=t.byteLength/(4*e),R=new Uint32Array(t,0,_*e);let s=new Uint32Array(_);const o=n?.minReduction??0,N=n?.originalIndices||null,c=N?N.length:0,a=n?.componentOffsets||null;let u=0;if(a)for(let E=0;E<a.length-1;E++){const t=a[E+1]-a[E];t>u&&(u=t)}else u=_;const O=Math.floor(1.1*u)+1;(null==A||A.length<2*O)&&(A=new Uint32Array((0,E.Sf)(2*O)));for(let E=0;E<2*O;E++)A[E]=0;let I=0;const S=!!a&&!!N,C=S?c:_,f=S?new Uint32Array(c):null,l=1.96;let L=0!==o?Math.ceil(4*l*l/(o*o)*o*(1-o)):C,M=1,D=a?a[1]:C;for(let E=0;E<C;E++){if(E===L){const t=1-I/E;if(t+l*Math.sqrt(t*(1-t)/E)<o)return null;L*=2}if(E===D){for(let t=0;t<2*O;t++)A[t]=0;if(N)for(let t=a[M-1];t<a[M];t++)f[t]=s[N[t]];D=a[++M]}const t=S?N[E]:E,n=t*e,_=i(R,n,e);let T=_%O,c=I;for(;0!==A[2*T+1];){if(A[2*T]===_){const t=A[2*T+1]-1;if(r(R,n,t*e,e)){c=s[t];break}}T++,T>=O&&(T-=O)}c===I&&(A[2*T]=_,A[2*T+1]=t+1,I++),s[t]=c}if(0!==o&&1-I/_<o)return null;if(S){for(let t=a[M-1];t<f.length;t++)f[t]=s[N[t]];s=f}const U=new Uint32Array(e*I);I=0;for(let E=0;E<C;E++)s[E]===I&&(T(R,(S?N[E]:E)*e,U,I*e,e),I++);if(N&&!S){const t=new Uint32Array(c);for(let e=0;e<t.length;e++)t[e]=s[N[e]];s=t}return{buffer:U.buffer,indices:s,uniqueCount:I}}function r(t,e,n,E){for(let _=0;_<E;_++)if(t[e+_]!==t[n+_])return!1;return!0}function T(t,e,n,E,_){for(let r=0;r<_;r++)n[E+r]=t[e+r]}function i(t,e,n){let E=0;for(let _=0;_<n;_++)E=t[e+_]+E|0,E=E+(E<<11)+(E>>>2)|0;return E>>>0}let A=null},55158:(t,e,n)=>{n.d(e,{U$:()=>i});var E=n(25158),_=n(48734);class r{constructor(t,e){this.layout=t,this.buffer="number"==typeof e?new ArrayBuffer(e*t.stride):e;for(const n of t.fieldNames){const e=t.fields.get(n);this[n]=new e.constructor(this.buffer,e.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(t,e){const n=this[t];return n&&n.elementCount===e.ElementCount&&n.elementType===e.ElementType?n:null}slice(t,e){return new r(this.layout,this.buffer.slice(t*this.stride,e*this.stride))}copyFrom(t,e,n,E){const _=this.stride;if(_%4==0){const r=new Uint32Array(t.buffer,e*_,E*_/4);new Uint32Array(this.buffer,n*_,E*_/4).set(r)}else{const r=new Uint8Array(t.buffer,e*_,E*_);new Uint8Array(this.buffer,n*_,E*_).set(r)}}}class T{constructor(){this.stride=0,this.fields=new Map,this.fieldNames=[]}vec2f(t,e){return this._appendField(t,E.Eu,e),this}vec2f64(t,e){return this._appendField(t,E.q6,e),this}vec3f(t,e){return this._appendField(t,E.ct,e),this}vec3f64(t,e){return this._appendField(t,E.fP,e),this}vec4f(t,e){return this._appendField(t,E.ek,e),this}vec4f64(t,e){return this._appendField(t,E.Cd,e),this}mat3f(t,e){return this._appendField(t,E.gK,e),this}mat3f64(t,e){return this._appendField(t,E.ey,e),this}mat4f(t,e){return this._appendField(t,E.bj,e),this}mat4f64(t,e){return this._appendField(t,E.O1,e),this}vec4u8(t,e){return this._appendField(t,E.mc,e),this}f32(t,e){return this._appendField(t,E.ly,e),this}f64(t,e){return this._appendField(t,E.oS,e),this}u8(t,e){return this._appendField(t,E.D_,e),this}u16(t,e){return this._appendField(t,E.av,e),this}i8(t,e){return this._appendField(t,E.Hz,e),this}vec2i8(t,e){return this._appendField(t,E.Vs,e),this}vec2i16(t,e){return this._appendField(t,E.or,e),this}vec2u8(t,e){return this._appendField(t,E.xA,e),this}vec4u16(t,e){return this._appendField(t,E.v6,e),this}u32(t,e){return this._appendField(t,E.Nu,e),this}_appendField(t,e,n){const E=e.ElementCount*(0,_.n1)(e.ElementType),r=this.stride;this.fields.set(t,{size:E,constructor:e,offset:r,optional:n}),this.stride+=E,this.fieldNames.push(t)}alignTo(t){return this.stride=Math.floor((this.stride+t-1)/t)*t,this}hasField(t){return this.fieldNames.includes(t)}createBuffer(t){return new r(this,t)}createView(t){return new r(this,t)}clone(){const t=new T;return t.stride=this.stride,t.fields=new Map,this.fields.forEach(((e,n)=>t.fields.set(n,e))),t.fieldNames=this.fieldNames.slice(),t.BufferType=this.BufferType,t}}function i(){return new T}},4760:(t,e,n)=>{var E;n.d(e,{T:()=>E}),function(t){t.POSITION="position",t.NORMAL="normal",t.UV0="uv0",t.AUXPOS1="auxpos1",t.AUXPOS2="auxpos2",t.MAPPOS="mapPos",t.COLOR="color",t.SYMBOLCOLOR="symbolColor",t.SIZE="size",t.TANGENT="tangent",t.OFFSET="offset",t.SUBDIVISIONFACTOR="subdivisionFactor",t.COLORFEATUREATTRIBUTE="colorFeatureAttribute",t.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",t.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",t.DISTANCETOSTART="distanceToStart",t.UVMAPSPACE="uvMapSpace",t.BOUNDINGRECT="boundingRect",t.UVREGION="uvRegion",t.NORMALCOMPRESSED="normalCompressed",t.PROFILERIGHT="profileRight",t.PROFILEUP="profileUp",t.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",t.FEATUREVALUE="featureValue",t.MODELORIGINHI="modelOriginHi",t.MODELORIGINLO="modelOriginLo",t.MODEL="model",t.MODELNORMAL="modelNormal",t.INSTANCECOLOR="instanceColor",t.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",t.LOCALTRANSFORM="localTransform",t.GLOBALTRANSFORM="globalTransform",t.BOUNDINGSPHERE="boundingSphere",t.MODELORIGIN="modelOrigin",t.MODELSCALEFACTORS="modelScaleFactors",t.FEATUREATTRIBUTE="featureAttribute",t.STATE="state",t.LODLEVEL="lodLevel",t.POSITION0="position0",t.POSITION1="position1",t.NORMALA="normalA",t.NORMALB="normalB",t.COMPONENTINDEX="componentIndex",t.VARIANTOFFSET="variantOffset",t.VARIANTSTROKE="variantStroke",t.VARIANTEXTENSION="variantExtension",t.U8PADDING="u8padding",t.U16PADDING="u16padding",t.SIDENESS="sideness",t.START="start",t.END="end",t.UP="up",t.EXTRUDE="extrude"}(E||(E={}))},11438:(t,e,n)=>{n.r(e),n.d(e,{EdgeProcessingWorker:()=>k,default:()=>rt,extract:()=>j,extractComponentsEdgeLocationsLayout:()=>_t,extractEdgeLocationsLayout:()=>Et});var E=n(35888);function _(t,e,n){const E=e/3,_=new Uint32Array(n+1),r=new Uint32Array(n+1),T=(t,e)=>{t<e?_[t+1]++:r[e+1]++};for(let I=0;I<E;I++){const e=t[3*I],n=t[3*I+1],E=t[3*I+2];T(e,n),T(n,E),T(E,e)}let i=0,A=0;for(let I=0;I<n;I++){const t=_[I+1],e=r[I+1];_[I+1]=i,r[I+1]=A,i+=t,A+=e}const R=new Uint32Array(6*E),s=_[n],o=(t,e,n)=>{if(t<e){const E=_[t+1]++;R[2*E]=e,R[2*E+1]=n}else{const E=r[e+1]++;R[2*s+2*E]=t,R[2*s+2*E+1]=n}};for(let I=0;I<E;I++){const e=t[3*I],n=t[3*I+1],E=t[3*I+2];o(e,n,I),o(n,E,I),o(E,e,I)}const N=(t,e)=>{const n=2*t,E=e-t;for(let _=1;_<E;_++){const t=R[n+2*_],e=R[n+2*_+1];let E=_-1;for(;E>=0&&R[n+2*E]>t;E--)R[n+2*E+2]=R[n+2*E],R[n+2*E+3]=R[n+2*E+1];R[n+2*E+2]=t,R[n+2*E+3]=e}};for(let I=0;I<n;I++)N(_[I],_[I+1]),N(s+r[I],s+r[I+1]);const c=new Int32Array(3*E),a=(e,n)=>e===t[3*n]?0:e===t[3*n+1]?1:e===t[3*n+2]?2:-1,u=(t,e)=>{const n=a(t,e);c[3*e+n]=-1},O=(t,e,n,E)=>{const _=a(t,e);c[3*e+_]=E;const r=a(n,E);c[3*E+r]=e};for(let I=0;I<n;I++){let t=_[I];const e=_[I+1];let n=r[I];const E=r[I+1];for(;t<e&&n<E;){const e=R[2*t],E=R[2*s+2*n];e===E?(O(I,R[2*t+1],E,R[2*s+2*n+1]),t++,n++):e<E?(u(I,R[2*t+1]),t++):(u(E,R[2*s+2*n+1]),n++)}for(;t<e;)u(I,R[2*t+1]),t++;for(;n<E;)u(R[2*s+2*n],R[2*s+2*n+1]),n++}return c}var r=n(55158),T=n(25158);function i(t,e){return e.push(t.buffer),{buffer:t.buffer,layout:A(t.layout)}}function A(t){const e=new Array;return t.fields.forEach(((t,n)=>{const E={...t,constructor:s(t.constructor)};e.push([n,E])})),{stride:t.stride,fields:e,fieldNames:t.fieldNames}}const R=[T.ly,T.Eu,T.ct,T.ek,T.gK,T.bj,T.oS,T.q6,T.fP,T.Cd,T.ey,T.O1,T.D_,T.xA,T.ne,T.mc,T.av,T.TS,T.mw,T.v6,T.Nu,T.qt,T.G5,T.hu,T.Hz,T.Vs,T.P_,T.ir,T.o7,T.or,T.n1,T.zO,T.Jj,T.wA,T.PP,T.TN];function s(t){return`${t.ElementType}_${t.ElementCount}`}const o=new Map;R.forEach((t=>o.set(s(t),t)));var N=n(4760),c=n(50256);const a=(0,r.U$)().vec3f(N.T.POSITION).u16(N.T.COMPONENTINDEX).u16(N.T.U16PADDING),u=(0,r.U$)().vec2u8(N.T.SIDENESS),O=((0,c.K)(u),(0,r.U$)().vec3f(N.T.POSITION0).vec3f(N.T.POSITION1).u16(N.T.COMPONENTINDEX).u8(N.T.VARIANTOFFSET,{glNormalized:!0}).u8(N.T.VARIANTSTROKE).u8(N.T.VARIANTEXTENSION,{glNormalized:!0}).u8(N.T.U8PADDING,{glPadding:!0}).u16(N.T.U16PADDING,{glPadding:!0})),I=O.clone().vec3f(N.T.NORMAL),S=O.clone().vec3f(N.T.NORMALA).vec3f(N.T.NORMALB);new Map([[N.T.POSITION0,0],[N.T.POSITION1,1],[N.T.COMPONENTINDEX,2],[N.T.VARIANTOFFSET,3],[N.T.VARIANTSTROKE,4],[N.T.VARIANTEXTENSION,5],[N.T.NORMAL,6],[N.T.NORMALA,6],[N.T.NORMALB,7],[N.T.SIDENESS,8]]);var C=n(84936),f=n(11186),l=n(71353);class L{updateSettings(t){this.settings=t,this.edgeHashFunction=t.reducedPrecision?d:P}write(t,e,n){const E=this.edgeHashFunction(n);p.seed=E;const _=p.getIntRange(0,255),r=p.getIntRange(0,this.settings.variants-1),T=p.getFloat(),i=255*(.5*function(t,e){const n=t<0?-1:1;return Math.abs(t)**e*n}(-(1-Math.min(T/.7,1))+Math.max(0,T-.7)/(1-.7),1.2)+.5);t.position0.setVec(e,n.position0),t.position1.setVec(e,n.position1),t.componentIndex.set(e,n.componentIndex),t.variantOffset.set(e,_),t.variantStroke.set(e,r),t.variantExtension.set(e,i)}trim(t,e){return t.slice(0,e)}}const M=new Float32Array(6),D=new Uint32Array(M.buffer),U=new Uint32Array(1);function P(t){const e=M;e[0]=t.position0[0],e[1]=t.position0[1],e[2]=t.position0[2],e[3]=t.position1[0],e[4]=t.position1[1],e[5]=t.position1[2],U[0]=5381;for(let n=0;n<D.length;n++)U[0]=31*U[0]+D[n];return U[0]}function d(t){const e=M;e[0]=F(t.position0[0]),e[1]=F(t.position0[1]),e[2]=F(t.position0[2]),e[3]=F(t.position1[0]),e[4]=F(t.position1[1]),e[5]=F(t.position1[2]),U[0]=5381;for(let n=0;n<D.length;n++)U[0]=31*U[0]+D[n];return U[0]}function F(t){return Math.round(1e4*t)/1e4}class G{constructor(){this.commonWriter=new L}updateSettings(t){this.commonWriter.updateSettings(t)}allocate(t){return I.createBuffer(t)}write(t,e,n){this.commonWriter.write(t,e,n),(0,f.a)(B,n.faceNormal0,n.faceNormal1),(0,f.n)(B,B),t.normal.setVec(e,B)}trim(t,e){return this.commonWriter.trim(t,e)}}G.Layout=I,G.glLayout=(0,c.K)(I,1);class h{constructor(){this.commonWriter=new L}updateSettings(t){this.commonWriter.updateSettings(t)}allocate(t){return S.createBuffer(t)}write(t,e,n){this.commonWriter.write(t,e,n),t.normalA.setVec(e,n.faceNormal0),t.normalB.setVec(e,n.faceNormal1)}trim(t,e){return this.commonWriter.trim(t,e)}}h.Layout=S,h.glLayout=(0,c.K)(S,1);const B=(0,l.c)(),p=new C.Z;var g=n(63780),H=n(16889),m=n(18722);const V=-1;var v;function w(t,e,n){let E=arguments.length>3&&void 0!==arguments[3]?arguments[3]:K;const _=t.vertices.position,r=t.vertices.componentIndex,T=(0,H.Vl)(E.anglePlanar),i=(0,H.Vl)(E.angleSignificantEdge),A=Math.cos(i),R=Math.cos(T),s=W.edge,o=s.position0,N=s.position1,c=s.faceNormal0,a=s.faceNormal1,u=x(t),O=Y(t),I=O.length/4,S=e.allocate(I);let C=0;const l=I,L=n.allocate(l);let M=0,D=0,U=0;const P=(0,g.w6)(0,I),d=new Float32Array(I);(0,m.Ed)(d,((t,e,n)=>{_.getVec(O[4*e+0],o),_.getVec(O[4*e+1],N),n[e]=(0,f.i)(o,N)})),P.sort(((t,e)=>d[e]-d[t]));const F=new Array,G=new Array;for(let p=0;p<I;p++){const t=P[p],E=d[t],i=O[4*t+0],I=O[4*t+1],l=O[4*t+2],h=O[4*t+3],B=h===V;if(_.getVec(i,o),_.getVec(I,N),B)(0,f.s)(c,u[3*l+0],u[3*l+1],u[3*l+2]),(0,f.c)(a,c),s.componentIndex=r.get(i),s.cosAngle=(0,f.e)(c,a);else{if((0,f.s)(c,u[3*l+0],u[3*l+1],u[3*l+2]),(0,f.s)(a,u[3*h+0],u[3*h+1],u[3*h+2]),s.componentIndex=r.get(i),s.cosAngle=(0,f.e)(c,a),y(s,R))continue;s.cosAngle<-.9999&&(0,f.c)(a,c)}D+=E,U++,B||b(s,A)?(e.write(S,C++,s),F.push(E)):X(s,T)&&(n.write(L,M++,s),G.push(E))}const h=new Float32Array(F.reverse()),B=new Float32Array(G.reverse());return{regular:{instancesData:e.trim(S,C),lodInfo:{lengths:h}},silhouette:{instancesData:n.trim(L,M),lodInfo:{lengths:B}},averageEdgeLength:D/U}}function b(t,e){return t.cosAngle<e}function y(t,e){return t.cosAngle>e}function X(t,e){const n=(0,H.ZF)(t.cosAngle),E=W.fwd,_=W.ortho;return(0,f.r)(E,t.position1,t.position0),n*((0,f.e)((0,f.f)(_,t.faceNormal0,t.faceNormal1),E)>0?-1:1)>e}function Y(t){const e=t.faces.length/3,n=t.faces,E=t.neighbors;let _=0;for(let i=0;i<e;i++){const t=E[3*i+0],e=E[3*i+1],r=E[3*i+2],T=n[3*i+0],A=n[3*i+1],R=n[3*i+2];_+=t===V||T<A?1:0,_+=e===V||A<R?1:0,_+=r===V||R<T?1:0}const r=new Int32Array(4*_);let T=0;for(let i=0;i<e;i++){const t=E[3*i+0],e=E[3*i+1],_=E[3*i+2],A=n[3*i+0],R=n[3*i+1],s=n[3*i+2];(t===V||A<R)&&(r[T++]=A,r[T++]=R,r[T++]=i,r[T++]=t),(e===V||R<s)&&(r[T++]=R,r[T++]=s,r[T++]=i,r[T++]=e),(_===V||s<A)&&(r[T++]=s,r[T++]=A,r[T++]=i,r[T++]=_)}return r}function x(t){const e=t.faces.length/3,n=t.vertices.position,E=t.faces,_=q.v0,r=q.v1,T=q.v2,i=new Float32Array(3*e);for(let A=0;A<e;A++){const t=E[3*A+0],e=E[3*A+1],R=E[3*A+2];n.getVec(t,_),n.getVec(e,r),n.getVec(R,T),(0,f.b)(r,r,_),(0,f.b)(T,T,_),(0,f.f)(_,r,T),(0,f.n)(_,_),i[3*A+0]=_[0],i[3*A+1]=_[1],i[3*A+2]=_[2]}return i}!function(t){t[t.SOLID=0]="SOLID",t[t.SKETCH=1]="SKETCH"}(v||(v={}));const W={edge:{position0:(0,l.c)(),position1:(0,l.c)(),faceNormal0:(0,l.c)(),faceNormal1:(0,l.c)(),componentIndex:0,cosAngle:0},ortho:(0,l.c)(),fwd:(0,l.c)()},q={v0:(0,l.c)(),v1:(0,l.c)(),v2:(0,l.c)()},K={anglePlanar:4,angleSignificantEdge:35};class k{async extract(t){const e=z(t),n=j(e),E=[e.data.buffer];return{result:Z(n,E),transferList:E}}async extractComponentsEdgeLocations(t){const e=z(t),n=[];return{result:i(w(Q(e.data,e.skipDeduplicate,e.indices,e.indicesLength),et,nt).regular.instancesData,n),transferList:n}}async extractEdgeLocations(t){const e=z(t),n=[];return{result:i(w(Q(e.data,e.skipDeduplicate,e.indices,e.indicesLength),tt,nt).regular.instancesData,n),transferList:n}}}function j(t){const e=Q(t.data,t.skipDeduplicate,t.indices,t.indicesLength);return $.updateSettings(t.writerSettings),J.updateSettings(t.writerSettings),w(e,$,J)}function z(t){return{data:a.createView(t.dataBuffer),indices:"Uint32Array"===t.indicesType?new Uint32Array(t.indicesBuffer):"Uint16Array"===t.indicesType?new Uint16Array(t.indicesBuffer):void 0,indicesLength:t.indicesLength,writerSettings:t.writerSettings,skipDeduplicate:t.skipDeduplicate}}function Z(t,e){return e.push(t.regular.lodInfo.lengths.buffer),e.push(t.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:i(t.regular.instancesData,e),lodInfo:{lengths:t.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:i(t.silhouette.instancesData,e),lodInfo:{lengths:t.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:t.averageEdgeLength}}function Q(t,e,n,r){if(e)return{faces:n,facesLength:r,neighbors:_(n,r,t.count),vertices:t};const T=(0,E.d)(t.buffer,t.stride/4,{originalIndices:n,originalIndicesLength:r}),i=_(T.indices,r,T.uniqueCount);return{faces:T.indices,facesLength:T.indices.length,neighbors:i,vertices:a.createView(T.buffer)}}const $=new G,J=new h;const tt=new class{allocate(t){return Et.createBuffer(t)}trim(t,e){return t.slice(0,e)}write(t,e,n){t.position0.setVec(e,n.position0),t.position1.setVec(e,n.position1)}},et=new class{allocate(t){return _t.createBuffer(t)}trim(t,e){return t.slice(0,e)}write(t,e,n){t.position0.setVec(e,n.position0),t.position1.setVec(e,n.position1),t.componentIndex.set(e,n.componentIndex)}},nt={allocate:()=>null,write:()=>{},trim:()=>null},Et=(0,r.U$)().vec3f(N.T.POSITION0).vec3f(N.T.POSITION1),_t=(0,r.U$)().vec3f(N.T.POSITION0).vec3f(N.T.POSITION1).u16(N.T.COMPONENTINDEX).u16(N.T.U16PADDING,{glPadding:!0});function rt(){return new k}},61109:(t,e,n)=>{n.d(e,{G:()=>E});class E{constructor(t,e,n,E,_){let r=arguments.length>5&&void 0!==arguments[5]&&arguments[5],T=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;this.name=t,this.count=e,this.type=n,this.offset=E,this.stride=_,this.normalized=r,this.divisor=T}}},8548:(t,e,n)=>{var E,_,r,T,i,A,R,s,o,N,c,a,u,O,I,S,C,f,l,L,M,D;n.d(e,{Br:()=>S,Ho:()=>l,LR:()=>A,Ld:()=>U,Lm:()=>M,Lu:()=>F,MX:()=>_,No:()=>u,OU:()=>D,Se:()=>h,Tg:()=>C,V7:()=>H,VI:()=>O,VY:()=>d,Wf:()=>R,Y5:()=>g,_g:()=>P,cw:()=>c,db:()=>T,e8:()=>a,g:()=>s,l1:()=>f,lP:()=>I,lk:()=>E,q_:()=>G,qi:()=>L,w0:()=>i,wb:()=>o,xS:()=>N,zi:()=>r}),function(t){t[t.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",t[t.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",t[t.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT"}(E||(E={})),function(t){t[t.POINTS=0]="POINTS",t[t.LINES=1]="LINES",t[t.LINE_LOOP=2]="LINE_LOOP",t[t.LINE_STRIP=3]="LINE_STRIP",t[t.TRIANGLES=4]="TRIANGLES",t[t.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",t[t.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(_||(_={})),function(t){t[t.ZERO=0]="ZERO",t[t.ONE=1]="ONE",t[t.SRC_COLOR=768]="SRC_COLOR",t[t.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",t[t.SRC_ALPHA=770]="SRC_ALPHA",t[t.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",t[t.DST_ALPHA=772]="DST_ALPHA",t[t.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",t[t.DST_COLOR=774]="DST_COLOR",t[t.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",t[t.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",t[t.CONSTANT_COLOR=32769]="CONSTANT_COLOR",t[t.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",t[t.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",t[t.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(r||(r={})),function(t){t[t.ADD=32774]="ADD",t[t.SUBTRACT=32778]="SUBTRACT",t[t.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(T||(T={})),function(t){t[t.ARRAY_BUFFER=34962]="ARRAY_BUFFER",t[t.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",t[t.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",t[t.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",t[t.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",t[t.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",t[t.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER"}(i||(i={})),function(t){t[t.FRONT=1028]="FRONT",t[t.BACK=1029]="BACK",t[t.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(A||(A={})),function(t){t[t.CW=2304]="CW",t[t.CCW=2305]="CCW"}(R||(R={})),function(t){t[t.BYTE=5120]="BYTE",t[t.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",t[t.SHORT=5122]="SHORT",t[t.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",t[t.INT=5124]="INT",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.FLOAT=5126]="FLOAT"}(s||(s={})),function(t){t[t.NEVER=512]="NEVER",t[t.LESS=513]="LESS",t[t.EQUAL=514]="EQUAL",t[t.LEQUAL=515]="LEQUAL",t[t.GREATER=516]="GREATER",t[t.NOTEQUAL=517]="NOTEQUAL",t[t.GEQUAL=518]="GEQUAL",t[t.ALWAYS=519]="ALWAYS"}(o||(o={})),function(t){t[t.ZERO=0]="ZERO",t[t.KEEP=7680]="KEEP",t[t.REPLACE=7681]="REPLACE",t[t.INCR=7682]="INCR",t[t.DECR=7683]="DECR",t[t.INVERT=5386]="INVERT",t[t.INCR_WRAP=34055]="INCR_WRAP",t[t.DECR_WRAP=34056]="DECR_WRAP"}(N||(N={})),function(t){t[t.NEAREST=9728]="NEAREST",t[t.LINEAR=9729]="LINEAR",t[t.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",t[t.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",t[t.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",t[t.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(c||(c={})),function(t){t[t.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",t[t.REPEAT=10497]="REPEAT",t[t.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(a||(a={})),function(t){t[t.TEXTURE_2D=3553]="TEXTURE_2D",t[t.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",t[t.TEXTURE_3D=32879]="TEXTURE_3D",t[t.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",t[t.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",t[t.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",t[t.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",t[t.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(u||(u={})),function(t){t[t.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",t[t.DEPTH_STENCIL=34041]="DEPTH_STENCIL",t[t.ALPHA=6406]="ALPHA",t[t.RGB=6407]="RGB",t[t.RGBA=6408]="RGBA",t[t.LUMINANCE=6409]="LUMINANCE",t[t.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",t[t.RED=6403]="RED",t[t.RG=33319]="RG",t[t.RED_INTEGER=36244]="RED_INTEGER",t[t.RG_INTEGER=33320]="RG_INTEGER",t[t.RGB_INTEGER=36248]="RGB_INTEGER",t[t.RGBA_INTEGER=36249]="RGBA_INTEGER"}(O||(O={})),function(t){t[t.RGBA4=32854]="RGBA4",t[t.R16F=33325]="R16F",t[t.RG16F=33327]="RG16F",t[t.RGB32F=34837]="RGB32F",t[t.RGBA16F=34842]="RGBA16F",t[t.R32F=33326]="R32F",t[t.RG32F=33328]="RG32F",t[t.RGBA32F=34836]="RGBA32F",t[t.R11F_G11F_B10F=35898]="R11F_G11F_B10F",t[t.RGB8=32849]="RGB8",t[t.RGBA8=32856]="RGBA8",t[t.RGB5_A1=32855]="RGB5_A1",t[t.R8=33321]="R8",t[t.RG8=33323]="RG8",t[t.R8I=33329]="R8I",t[t.R8UI=33330]="R8UI",t[t.R16I=33331]="R16I",t[t.R16UI=33332]="R16UI",t[t.R32I=33333]="R32I",t[t.R32UI=33334]="R32UI",t[t.RG8I=33335]="RG8I",t[t.RG8UI=33336]="RG8UI",t[t.RG16I=33337]="RG16I",t[t.RG16UI=33338]="RG16UI",t[t.RG32I=33339]="RG32I",t[t.RG32UI=33340]="RG32UI",t[t.RGB16F=34843]="RGB16F",t[t.RGB9_E5=35901]="RGB9_E5",t[t.SRGB8=35905]="SRGB8",t[t.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",t[t.RGB565=36194]="RGB565",t[t.RGBA32UI=36208]="RGBA32UI",t[t.RGB32UI=36209]="RGB32UI",t[t.RGBA16UI=36214]="RGBA16UI",t[t.RGB16UI=36215]="RGB16UI",t[t.RGBA8UI=36220]="RGBA8UI",t[t.RGB8UI=36221]="RGB8UI",t[t.RGBA32I=36226]="RGBA32I",t[t.RGB32I=36227]="RGB32I",t[t.RGBA16I=36232]="RGBA16I",t[t.RGB16I=36233]="RGB16I",t[t.RGBA8I=36238]="RGBA8I",t[t.RGB8I=36239]="RGB8I",t[t.R8_SNORM=36756]="R8_SNORM",t[t.RG8_SNORM=36757]="RG8_SNORM",t[t.RGB8_SNORM=36758]="RGB8_SNORM",t[t.RGBA8_SNORM=36759]="RGBA8_SNORM",t[t.RGB10_A2=32857]="RGB10_A2",t[t.RGB10_A2UI=36975]="RGB10_A2UI"}(I||(I={})),function(t){t[t.FLOAT=5126]="FLOAT",t[t.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",t[t.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",t[t.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",t[t.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",t[t.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",t[t.BYTE=5120]="BYTE",t[t.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",t[t.SHORT=5122]="SHORT",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.INT=5124]="INT",t[t.HALF_FLOAT=5131]="HALF_FLOAT",t[t.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",t[t.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",t[t.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",t[t.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(S||(S={})),function(t){t[t.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",t[t.STENCIL_INDEX8=36168]="STENCIL_INDEX8",t[t.DEPTH_STENCIL=34041]="DEPTH_STENCIL",t[t.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",t[t.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",t[t.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",t[t.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(C||(C={})),function(t){t[t.STATIC_DRAW=35044]="STATIC_DRAW",t[t.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",t[t.STREAM_DRAW=35040]="STREAM_DRAW",t[t.STATIC_READ=35045]="STATIC_READ",t[t.DYNAMIC_READ=35049]="DYNAMIC_READ",t[t.STREAM_READ=35041]="STREAM_READ",t[t.STATIC_COPY=35046]="STATIC_COPY",t[t.DYNAMIC_COPY=35050]="DYNAMIC_COPY",t[t.STREAM_COPY=35042]="STREAM_COPY"}(f||(f={})),function(t){t[t.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",t[t.VERTEX_SHADER=35633]="VERTEX_SHADER"}(l||(l={})),function(t){t[t.FRAMEBUFFER=36160]="FRAMEBUFFER",t[t.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",t[t.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(L||(L={})),function(t){t[t.TEXTURE=0]="TEXTURE",t[t.RENDER_BUFFER=1]="RENDER_BUFFER",t[t.CUBEMAP=2]="CUBEMAP"}(M||(M={})),function(t){t[t.NONE=0]="NONE",t[t.DEPTH_RENDER_BUFFER=1]="DEPTH_RENDER_BUFFER",t[t.STENCIL_RENDER_BUFFER=2]="STENCIL_RENDER_BUFFER",t[t.DEPTH_STENCIL_RENDER_BUFFER=3]="DEPTH_STENCIL_RENDER_BUFFER",t[t.DEPTH_STENCIL_TEXTURE=4]="DEPTH_STENCIL_TEXTURE"}(D||(D={}));const U=33984;var P,d;!function(t){t[t.Texture=0]="Texture",t[t.BufferObject=1]="BufferObject",t[t.VertexArrayObject=2]="VertexArrayObject",t[t.Shader=3]="Shader",t[t.Program=4]="Program",t[t.FramebufferObject=5]="FramebufferObject",t[t.Renderbuffer=6]="Renderbuffer",t[t.Sync=7]="Sync",t[t.COUNT=8]="COUNT"}(P||(P={})),function(t){t[t.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",t[t.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",t[t.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",t[t.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",t[t.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",t[t.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",t[t.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",t[t.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",t[t.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",t[t.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",t[t.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",t[t.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",t[t.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",t[t.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",t[t.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",t[t.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(d||(d={}));const F=33306;var G,h,B,p,g,H,m;!function(t){t[t.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",t[t.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",t[t.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",t[t.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",t[t.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",t[t.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",t[t.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",t[t.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",t[t.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",t[t.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",t[t.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"}(G||(G={})),function(t){t[t.FLOAT=5126]="FLOAT",t[t.FLOAT_VEC2=35664]="FLOAT_VEC2",t[t.FLOAT_VEC3=35665]="FLOAT_VEC3",t[t.FLOAT_VEC4=35666]="FLOAT_VEC4",t[t.INT=5124]="INT",t[t.INT_VEC2=35667]="INT_VEC2",t[t.INT_VEC3=35668]="INT_VEC3",t[t.INT_VEC4=35669]="INT_VEC4",t[t.BOOL=35670]="BOOL",t[t.BOOL_VEC2=35671]="BOOL_VEC2",t[t.BOOL_VEC3=35672]="BOOL_VEC3",t[t.BOOL_VEC4=35673]="BOOL_VEC4",t[t.FLOAT_MAT2=35674]="FLOAT_MAT2",t[t.FLOAT_MAT3=35675]="FLOAT_MAT3",t[t.FLOAT_MAT4=35676]="FLOAT_MAT4",t[t.SAMPLER_2D=35678]="SAMPLER_2D",t[t.SAMPLER_CUBE=35680]="SAMPLER_CUBE",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",t[t.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",t[t.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",t[t.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",t[t.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",t[t.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",t[t.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",t[t.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",t[t.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",t[t.SAMPLER_3D=35679]="SAMPLER_3D",t[t.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",t[t.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",t[t.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",t[t.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",t[t.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",t[t.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",t[t.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",t[t.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",t[t.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",t[t.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",t[t.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",t[t.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(h||(h={})),function(t){t[t.OBJECT_TYPE=37138]="OBJECT_TYPE",t[t.SYNC_CONDITION=37139]="SYNC_CONDITION",t[t.SYNC_STATUS=37140]="SYNC_STATUS",t[t.SYNC_FLAGS=37141]="SYNC_FLAGS"}(B||(B={})),function(t){t[t.UNSIGNALED=37144]="UNSIGNALED",t[t.SIGNALED=37145]="SIGNALED"}(p||(p={})),function(t){t[t.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",t[t.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",t[t.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",t[t.WAIT_FAILED=37149]="WAIT_FAILED"}(g||(g={})),function(t){t[t.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(H||(H={})),function(t){t[t.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(m||(m={}))}}]);
//# sourceMappingURL=8501.c12bdfc9.chunk.js.map