"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[7424],{48952:(t,e,n)=>{n.d(e,{a:()=>s,b:()=>u,c:()=>o,d:()=>r,e:()=>l,f:()=>a,n:()=>f,s:()=>h,t:()=>c}),n(9456);var i=n(23704);function r(t,e,n){s(t.typedBuffer,e.typedBuffer,n,t.typedBufferStride,e.typedBufferStride)}function s(t,e,n,i=3,r=i){if(t.length/i!==Math.ceil(e.length/r))return t;const s=t.length/i,o=n[0],u=n[1],a=n[2],h=n[4],c=n[5],l=n[6],f=n[8],d=n[9],g=n[10],m=n[12],y=n[13],_=n[14];let p=0,b=0;for(let n=0;n<s;n++){const n=e[p],s=e[p+1],A=e[p+2];t[b]=o*n+h*s+f*A+m,t[b+1]=u*n+c*s+d*A+y,t[b+2]=a*n+l*s+g*A+_,p+=r,b+=i}return t}function o(t,e,n){u(t.typedBuffer,e.typedBuffer,n,t.typedBufferStride,e.typedBufferStride)}function u(t,e,n,r=3,s=r){if(t.length/r!==Math.ceil(e.length/s))return void(0,i.A)().error("source and destination buffers need to have the same number of elements");const o=t.length/r,u=n[0],a=n[1],h=n[2],c=n[3],l=n[4],f=n[5],d=n[6],g=n[7],m=n[8];let y=0,_=0;for(let n=0;n<o;n++){const n=e[y],i=e[y+1],o=e[y+2];t[_]=u*n+c*i+d*o,t[_+1]=a*n+l*i+g*o,t[_+2]=h*n+f*i+m*o,y+=s,_+=r}}function a(t,e,n){h(t.typedBuffer,e,n,t.typedBufferStride)}function h(t,e,n,i=3){const r=Math.min(t.length/i,e.count),s=e.typedBuffer,o=e.typedBufferStride;let u=0,a=0;for(let e=0;e<r;e++)t[a]=n*s[u],t[a+1]=n*s[u+1],t[a+2]=n*s[u+2],u+=o,a+=i}function c(t,e,n,i=3,r=i){const s=t.length/i;if(s!==Math.ceil(e.length/r))return t;let o=0,u=0;for(let a=0;a<s;a++)t[u]=e[o]+n[0],t[u+1]=e[o+1]+n[1],t[u+2]=e[o+2]+n[2],o+=r,u+=i;return t}function l(t,e){f(t.typedBuffer,e.typedBuffer,t.typedBufferStride,e.typedBufferStride)}function f(t,e,n=3,i=n){const r=Math.min(t.length/n,e.length/i);let s=0,o=0;for(let u=0;u<r;u++){const r=e[s],u=e[s+1],a=e[s+2],h=r*r+u*u+a*a;if(h>0){const e=1/Math.sqrt(h);t[o]=e*r,t[o+1]=e*u,t[o+2]=e*a}s+=i,o+=n}}Object.freeze(Object.defineProperty({__proto__:null,normalize:f,normalizeView:l,scale:h,scaleView:a,shiftRight:function(t,e,n){const i=Math.min(t.count,e.count),r=t.typedBuffer,s=t.typedBufferStride,o=e.typedBuffer,u=e.typedBufferStride;let a=0,h=0;for(let t=0;t<i;t++)r[h]=o[a]>>n,r[h+1]=o[a+1]>>n,r[h+2]=o[a+2]>>n,a+=u,h+=s},transformMat3:u,transformMat3View:o,transformMat4:s,transformMat4View:r,translate:c},Symbol.toStringTag,{value:"Module"}))},97143:(t,e,n)=>{n.d(e,{Uv:()=>r,aw:()=>s,yh:()=>h});var i=n(72008);function r(t){if((0,i.c7)(t)){if(t.length<i._)return t}else if(t.length<i._)return Array.from(t);let e=!0,n=!0;return t.some(((t,i)=>(e=e&&0===t,n=n&&t===i,!e&&!n))),e?function(t){if(1===t)return u;if(t<i._)return new Array(t).fill(0);if(t>c.length){const e=Math.max(2*c.length,t);c=new Uint8Array(e)}return new Uint8Array(c.buffer,0,t)}(t.length):n?h(t.length):(0,i.c7)(t)||t.BYTES_PER_ELEMENT!==Uint16Array.BYTES_PER_ELEMENT?function(t){let e=!0;for(const n of t){if(n>=65536)return(0,i.c7)(t)?new Uint32Array(t):t;n>=256&&(e=!1)}return e?new Uint8Array(t):new Uint16Array(t)}(t):t}function s(t){return t<=i._?new Array(t):t<=65536?new Uint16Array(t):new Uint32Array(t)}let o=(()=>{const t=new Uint32Array(131072);for(let e=0;e<t.length;++e)t[e]=e;return t})();const u=[0],a=(()=>{const t=new Uint16Array(65536);for(let e=0;e<t.length;++e)t[e]=e;return t})();function h(t){if(1===t)return u;if(t<i._)return Array.from(new Uint16Array(a.buffer,0,t));if(t<a.length)return new Uint16Array(a.buffer,0,t);if(t>o.length){const e=Math.max(2*o.length,t);o=new Uint32Array(e);for(let t=0;t<o.length;t++)o[t]=t}return new Uint32Array(o.buffer,0,t)}let c=new Uint8Array(65536)},23704:(t,e,n)=>{n.d(e,{A:()=>r});var i=n(66360);const r=()=>i.c.getLogger("esri.views.3d.support.buffer.math")},24363:(t,e,n)=>{n.d(e,{C_:()=>c,Su:()=>a,i_:()=>h});var i=n(53648),r=n(52180),s=n(98472),o=n(62484),u=n(20136);function a(t){return t?{origin:(0,o.ct)(t.origin),vector:(0,o.ct)(t.vector)}:{origin:(0,o.Su)(),vector:(0,o.Su)()}}function h(t,e,n=a()){return(0,s.c)(n.origin,t),(0,s.f)(n.vector,e,t),n}function c(t,e,n){return function(t,e,n,r,o){const{vector:a,origin:h}=t,c=(0,s.f)(u.Wq.get(),e,h),l=(0,s.j)(a,c)/(0,s.o)(a);return(0,s.h)(o,a,(0,i.qk)(l,0,1)),(0,s.g)(o,o,t.origin)}(t,e,0,0,n)}(0,o.Su)(),(0,o.Su)(),new r.o((()=>a()))},58608:(t,e,n)=>{n.d(e,{u:()=>r});var i=n(60924);class r{constructor(){this.id=(0,i.Q)()}}},74376:(t,e,n)=>{var i;n.d(e,{C:()=>i}),function(t){t[t.Layer=0]="Layer",t[t.Object=1]="Object",t[t.Mesh=2]="Mesh",t[t.Line=3]="Line",t[t.Point=4]="Point",t[t.Material=5]="Material",t[t.Texture=6]="Texture",t[t.COUNT=7]="COUNT"}(i||(i={}))},71520:(t,e,n)=>{n.d(e,{K:()=>x});var i=n(87104),r=n(98472),s=n(97143),o=n(72008);function u(t){if(t.length<o._)return Array.from(t);if((0,o.c7)(t))return Float64Array.from(t);if(!("BYTES_PER_ELEMENT"in t))return Array.from(t);switch(t.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(t);case 2:return(0,o.Qx)(t)?Uint16Array.from(t):Int16Array.from(t);case 4:return Float32Array.from(t);default:return Float64Array.from(t)}}var a=n(12260),h=n(24680),c=n(62484),l=n(90736);class f{constructor(t,e,n){this.primitiveIndices=t,this._numIndexPerPrimitive=e,this.position=n,this._children=void 0,(0,l.Uc)(t.length>=1),(0,l.Uc)(3===n.size||4===n.size);const{data:i,size:s,indices:o}=n;(0,l.Uc)(o.length%this._numIndexPerPrimitive==0),(0,l.Uc)(o.length>=t.length*this._numIndexPerPrimitive);const u=t.length;let a=s*o[this._numIndexPerPrimitive*t[0]];d.clear(),d.push(a);const h=(0,c.WK)(i[a],i[a+1],i[a+2]),f=(0,c.ct)(h);for(let e=0;e<u;++e){const n=this._numIndexPerPrimitive*t[e];for(let t=0;t<this._numIndexPerPrimitive;++t){a=s*o[n+t],d.push(a);let e=i[a];h[0]=Math.min(e,h[0]),f[0]=Math.max(e,f[0]),e=i[a+1],h[1]=Math.min(e,h[1]),f[1]=Math.max(e,f[1]),e=i[a+2],h[2]=Math.min(e,h[2]),f[2]=Math.max(e,f[2])}}this.bbMin=h,this.bbMax=f;const g=(0,r.k)((0,c.Su)(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(f[0]-h[0],f[1]-h[1]),f[2]-h[2]);let m=this.radius*this.radius;for(let t=0;t<d.length;++t){a=d.at(t);const e=i[a]-g[0],n=i[a+1]-g[1],r=i[a+2]-g[2],s=e*e+n*n+r*r;if(s<=m)continue;const o=Math.sqrt(s),u=.5*(o-this.radius);this.radius=this.radius+u,m=this.radius*this.radius;const h=u/o;g[0]+=e*h,g[1]+=n*h,g[2]+=r*h}this.center=g,d.clear()}getChildren(){if(this._children||(0,r.a)(this.bbMin,this.bbMax)<=1)return this._children;const t=(0,r.k)((0,c.Su)(),this.bbMin,this.bbMax,.5),e=this.primitiveIndices.length,n=new Uint8Array(e),i=new Array(8);for(let t=0;t<8;++t)i[t]=0;const{data:s,size:o,indices:u}=this.position;for(let r=0;r<e;++r){let e=0;const a=this._numIndexPerPrimitive*this.primitiveIndices[r];let h=o*u[a],c=s[h],l=s[h+1],f=s[h+2];for(let t=1;t<this._numIndexPerPrimitive;++t){h=o*u[a+t];const e=s[h],n=s[h+1],i=s[h+2];e<c&&(c=e),n<l&&(l=n),i<f&&(f=i)}c<t[0]&&(e|=1),l<t[1]&&(e|=2),f<t[2]&&(e|=4),n[r]=e,++i[e]}let a=0;for(let t=0;t<8;++t)i[t]>0&&++a;if(a<2)return;const h=new Array(8);for(let t=0;t<8;++t)h[t]=i[t]>0?new Uint32Array(i[t]):void 0;for(let t=0;t<8;++t)i[t]=0;for(let t=0;t<e;++t){const e=n[t];h[e][i[e]++]=this.primitiveIndices[t]}this._children=new Array;for(let t=0;t<8;++t)void 0!==h[t]&&this._children.push(new f(h[t],this._numIndexPerPrimitive,this.position));return this._children}static prune(){d.prune()}}const d=new h.c({deallocator:null});var g=n(58608),m=n(74376),y=n(52180),_=n(24363);function p(t,e,n){return(0,r.f)(b,e,t),(0,r.f)(A,n,t),.5*(0,r.l)((0,r.b)(b,b,A))}n(20136),new y.o(_.Su),new y.o((()=>{return t?{p0:(0,c.ct)(t.p0),p1:(0,c.ct)(t.p1),p2:(0,c.ct)(t.p2)}:{p0:(0,c.Su)(),p1:(0,c.Su)(),p2:(0,c.Su)()};var t}));const b=(0,c.Su)(),A=(0,c.Su)(),M=(0,c.Su)(),I=(0,c.Su)(),O=(0,c.Su)(),v=(0,c.Su)();var w=n(60924);class S{constructor(t){this.channel=t,this.id=(0,w.Q)()}}var U=n(4636);n(5480),(0,c.Su)(),new Float32Array(6);class x extends g.u{constructor(t,e,n=null,i=m.C.Mesh,r=null,o=-1){super(),this.material=t,this.mapPositions=n,this.type=i,this.objectAndLayerIdColor=r,this.edgeIndicesLength=o,this.visible=!0,this._attributes=new Map,this._boundingInfo=null;for(const[t,n]of e)this._attributes.set(t,{...n,indices:(0,s.Uv)(n.indices)}),t===U.K.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._attributes.get(t).indices.length:this.edgeIndicesLength)}instantiate(t={}){const e=new x(t.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._attributes.forEach(((t,n)=>{t.exclusive=!1,e._attributes.set(n,t)})),e._boundingInfo=this._boundingInfo,e.transformation=t.transformation||this.transformation,e}get attributes(){return this._attributes}getMutableAttribute(t){let e=this._attributes.get(t);return e&&!e.exclusive&&(e={...e,exclusive:!0,data:u(e.data)},this._attributes.set(t,e)),e}setAttributeData(t,e){const n=this._attributes.get(t);n&&this._attributes.set(t,{...n,exclusive:!0,data:e})}get indexCount(){const t=this._attributes.values().next().value.indices;return t?.length??0}get faceCount(){return this.indexCount/3}get boundingInfo(){return null==this._boundingInfo&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(t){return!!(this.type===m.C.Mesh?this._computeAttachmentOriginTriangles(t):this.type===m.C.Line?this._computeAttachmentOriginLines(t):this._computeAttachmentOriginPoints(t))&&(null!=this._transformation&&(0,r.e)(t,t,this._transformation),!0)}_computeAttachmentOriginTriangles(t){return function(t,e){if(!t)return!1;const{size:n,data:i,indices:s}=t;(0,r.s)(e,0,0,0),(0,r.s)(v,0,0,0);let o=0,u=0;for(let t=0;t<s.length-2;t+=3){const a=s[t]*n,h=s[t+1]*n,c=s[t+2]*n;(0,r.s)(M,i[a],i[a+1],i[a+2]),(0,r.s)(I,i[h],i[h+1],i[h+2]),(0,r.s)(O,i[c],i[c+1],i[c+2]);const l=p(M,I,O);l?((0,r.g)(M,M,I),(0,r.g)(M,M,O),(0,r.h)(M,M,1/3*l),(0,r.g)(e,e,M),o+=l):((0,r.g)(v,v,M),(0,r.g)(v,v,I),(0,r.g)(v,v,O),u+=3)}return!(0===u&&0===o||(0!==o?((0,r.h)(e,e,1/o),0):0===u||((0,r.h)(e,v,1/u),0)))}(this.attributes.get(U.K.POSITION),t)}_computeAttachmentOriginLines(t){const e=this.attributes.get(U.K.POSITION);return function(t,e,n){if(!t)return!1;(0,r.s)(n,0,0,0),(0,r.s)(v,0,0,0);let i=0,s=0;const{size:o,data:u,indices:a}=t,h=a.length-1,c=h+(e?2:0);for(let t=0;t<c;t+=2){const e=t<h?t+1:0,c=a[t<h?t:h]*o,l=a[e]*o;M[0]=u[c],M[1]=u[c+1],M[2]=u[c+2],I[0]=u[l],I[1]=u[l+1],I[2]=u[l+2],(0,r.h)(M,(0,r.g)(M,M,I),.5);const f=(0,r.m)(M,I);f>0?((0,r.g)(n,n,(0,r.h)(M,M,f)),i+=f):0===i&&((0,r.g)(v,v,M),s++)}return 0!==i?((0,r.h)(n,n,1/i),!0):0!==s&&((0,r.h)(n,v,1/s),!0)}(e,function(t,e){return!(!("isClosed"in t)||!t.isClosed)&&e.indices.length>2}(this.material.parameters,e),t)}_computeAttachmentOriginPoints(t){return function(t,e){if(!t)return!1;const{size:n,data:i,indices:s}=t;(0,r.s)(e,0,0,0);let o=-1,u=0;for(let t=0;t<s.length;t++){const r=s[t]*n;o!==r&&(e[0]+=i[r],e[1]+=i[r+1],e[2]+=i[r+2],u++),o=r}return u>1&&(0,r.h)(e,e,1/u),u>0}(this.attributes.get(U.K.POSITION),t)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const t=this.attributes.get(U.K.POSITION);if(!t||0===t.indices.length)return null;const e=this.type===m.C.Mesh?3:1;(0,l.Uc)(t.indices.length%e==0,"Indexing error: "+t.indices.length+" not divisible by "+e);const n=(0,s.yh)(t.indices.length/e);return new f(n,e,t)}get transformation(){return this._transformation??i.IJ}set transformation(t){this._transformation=t&&t!==i.IJ?(0,i.ct)(t):null}addHighlight(){const t=new S(a.sN.Highlight);return this.highlights=function(t,e){return null==t&&(t=[]),t.push(e),t}(this.highlights,t),t}removeHighlight(t){this.highlights=function(t,e){if(null==t)return null;const n=t.filter((t=>t!==e));return 0===n.length?null:n}(this.highlights,t)}}},90736:(t,e,n)=>{n.d(e,{If:()=>s,Uc:()=>r}),n(85256),n(74784),(0,n(37008).Su)();class i{constructor(t){this.message=t}toString(){return`AssertException: ${this.message}`}}function r(t,e){if(!t){e=e||"Assertion";const t=new Error(e).stack;throw new i(`${e} at ${t}`)}}function s(t,e,n,i){let r,s=(n[0]-t[0])/e[0],o=(i[0]-t[0])/e[0];s>o&&(r=s,s=o,o=r);let u=(n[1]-t[1])/e[1],a=(i[1]-t[1])/e[1];if(u>a&&(r=u,u=a,a=r),s>a||u>o)return!1;u>s&&(s=u),a<o&&(o=a);let h=(n[2]-t[2])/e[2],c=(i[2]-t[2])/e[2];return h>c&&(r=h,h=c,c=r),!(s>c||h>o||(c<o&&(o=c),o<0))}},12260:(t,e,n)=>{var i,r,s,o,u,a,h,c,l;n.d(e,{Aj:()=>u,C2:()=>c,CM:()=>i,Iv:()=>o,OA:()=>h,sN:()=>a,sr:()=>r,yk:()=>l}),function(t){t[t.None=0]="None",t[t.Front=1]="Front",t[t.Back=2]="Back",t[t.COUNT=3]="COUNT"}(i||(i={})),function(t){t[t.Less=0]="Less",t[t.Lequal=1]="Lequal",t[t.COUNT=2]="COUNT"}(r||(r={})),function(t){t[t.BACKGROUND=0]="BACKGROUND",t[t.UPDATE=1]="UPDATE"}(s||(s={})),function(t){t[t.NOT_LOADED=0]="NOT_LOADED",t[t.LOADING=1]="LOADING",t[t.LOADED=2]="LOADED"}(o||(o={})),function(t){t[t.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",t[t.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(u||(u={})),function(t){t[t.Highlight=0]="Highlight",t[t.MaskOccludee=1]="MaskOccludee",t[t.COUNT=2]="COUNT"}(a||(a={})),function(t){t[t.Blend=0]="Blend",t[t.Opaque=1]="Opaque",t[t.Mask=2]="Mask",t[t.MaskBlend=3]="MaskBlend",t[t.COUNT=4]="COUNT"}(h||(h={})),function(t){t[t.OFF=0]="OFF",t[t.ON=1]="ON"}(c||(c={})),function(t){t.DDS_ENCODING="image/vnd-ms.dds",t.KTX2_ENCODING="image/ktx2",t.BASIS_ENCODING="image/x.basis"}(l||(l={}))},5480:(t,e,n)=>{function i(t,e){const n=t.length;for(let i=0;i<n;++i)s[0]=t[i],e[i]=s[0];return e}function r(t,e){const n=t.length;for(let i=0;i<n;++i)s[0]=t[i],s[1]=t[i]-s[0],e[i]=s[1];return e}n.d(e,{KM:()=>i,Ky:()=>r});const s=new Float32Array(2)}}]);