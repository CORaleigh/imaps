"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[5158],{25158:(e,t,r)=>{r.d(t,{ly:()=>o,oS:()=>E,o7:()=>k,Jj:()=>D,Hz:()=>F,gK:()=>g,ey:()=>B,bj:()=>b,O1:()=>T,av:()=>_,Nu:()=>P,D_:()=>O,Eu:()=>c,q6:()=>v,or:()=>j,wA:()=>G,Vs:()=>I,TS:()=>x,qt:()=>N,xA:()=>S,ct:()=>p,fP:()=>m,n1:()=>q,PP:()=>H,P_:()=>U,mw:()=>M,G5:()=>R,ne:()=>L,ek:()=>a,Cd:()=>A,zO:()=>z,TN:()=>J,ir:()=>V,v6:()=>C,hu:()=>Y,mc:()=>w});class s{constructor(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3?arguments[3]:void 0,f=arguments.length>4?arguments[4]:void 0;this.TypedArrayConstructor=e,this.elementCount=9;const i=this.TypedArrayConstructor;void 0===s&&(s=9*i.BYTES_PER_ELEMENT);const n=0===t.byteLength?0:r;this.typedBuffer=null==f?new i(t,n):new i(t,n,(f-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=s/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.count-t;const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+r*this.stride)}getMat(e,t){let r=e*this.typedBufferStride;for(let s=0;s<9;s++)t[s]=this.typedBuffer[r++];return t}setMat(e,t){let r=e*this.typedBufferStride;for(let s=0;s<9;s++)this.typedBuffer[r++]=t[s]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){const s=this.typedBuffer,f=t.typedBuffer;let i=e*this.typedBufferStride,n=r*t.typedBufferStride;for(let u=0;u<9;++u)s[i++]=f[n++]}get buffer(){return this.typedBuffer.buffer}}s.ElementCount=9;class f{constructor(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3?arguments[3]:void 0,f=arguments.length>4?arguments[4]:void 0;this.TypedArrayConstructor=e,this.elementCount=16;const i=this.TypedArrayConstructor;void 0===s&&(s=16*i.BYTES_PER_ELEMENT);const n=0===t.byteLength?0:r;this.typedBuffer=null==f?new i(t,n):new i(t,n,(f-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=s/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.count-t;const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+r*this.stride)}getMat(e,t){let r=e*this.typedBufferStride;for(let s=0;s<16;s++)t[s]=this.typedBuffer[r++];return t}setMat(e,t){let r=e*this.typedBufferStride;for(let s=0;s<16;s++)this.typedBuffer[r++]=t[s]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){const s=this.typedBuffer,f=t.typedBuffer;let i=e*this.typedBufferStride,n=r*t.typedBufferStride;for(let u=0;u<16;++u)s[i++]=f[n++]}get buffer(){return this.typedBuffer.buffer}}f.ElementCount=16;class i{constructor(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3?arguments[3]:void 0,f=arguments.length>4?arguments[4]:void 0;this.TypedArrayConstructor=e,this.elementCount=1;const i=this.TypedArrayConstructor;void 0===s&&(s=i.BYTES_PER_ELEMENT);const n=0===t.byteLength?0:r;this.typedBuffer=null==f?new i(t,n):new i(t,n,(f-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=s/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.count-t;const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+r*this.stride)}get(e){return this.typedBuffer[e*this.typedBufferStride]}set(e,t){this.typedBuffer[e*this.typedBufferStride]=t}get buffer(){return this.typedBuffer.buffer}}i.ElementCount=1;var n=r(88396);class u{constructor(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3?arguments[3]:void 0,f=arguments.length>4?arguments[4]:void 0;this.TypedArrayConstructor=e,this.elementCount=2;const i=this.TypedArrayConstructor;void 0===s&&(s=2*i.BYTES_PER_ELEMENT);const n=0===t.byteLength?0:r;this.typedBuffer=null==f?new i(t,n):new i(t,n,(f-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=s/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.count-t;const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,n.a)(t,this.typedBuffer[e],this.typedBuffer[e+1])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e]=t[1]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e]=r}copyFrom(e,t,r){const s=this.typedBuffer,f=t.typedBuffer;let i=e*this.typedBufferStride,n=r*t.typedBufferStride;s[i++]=f[n++],s[i]=f[n]}get buffer(){return this.typedBuffer.buffer}}u.ElementCount=2;var y=r(11186);class h{constructor(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3?arguments[3]:void 0,f=arguments.length>4?arguments[4]:void 0;this.TypedArrayConstructor=e,this.elementCount=3;const i=this.TypedArrayConstructor;void 0===s&&(s=3*i.BYTES_PER_ELEMENT);const n=0===t.byteLength?0:r;this.typedBuffer=null==f?new i(t,n):new i(t,n,(f-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=s/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.count-t;const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,y.s)(t,this.typedBuffer[e],this.typedBuffer[e+1],this.typedBuffer[e+2])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e]=t[2]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,s){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=r,this.typedBuffer[e]=s}copyFrom(e,t,r){const s=this.typedBuffer,f=t.typedBuffer;let i=e*this.typedBufferStride,n=r*t.typedBufferStride;s[i++]=f[n++],s[i++]=f[n++],s[i]=f[n]}get buffer(){return this.typedBuffer.buffer}}h.ElementCount=3;var d=r(90045);class l{constructor(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3?arguments[3]:void 0,f=arguments.length>4?arguments[4]:void 0;this.TypedArrayConstructor=e,this.elementCount=4;const i=this.TypedArrayConstructor;void 0===s&&(s=4*i.BYTES_PER_ELEMENT);const n=0===t.byteLength?0:r;this.typedBuffer=null==f?new i(t,n):new i(t,n,(f-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=s/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.count-t;const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,d.s)(t,this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e++]=t[2],this.typedBuffer[e]=t[3]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,s,f){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=r,this.typedBuffer[e++]=s,this.typedBuffer[e]=f}copyFrom(e,t,r){const s=this.typedBuffer,f=t.typedBuffer;let i=e*this.typedBufferStride,n=r*t.typedBufferStride;s[i++]=f[n++],s[i++]=f[n++],s[i++]=f[n++],s[i]=f[n]}get buffer(){return this.typedBuffer.buffer}}l.ElementCount=4;class o extends i{constructor(e){super(Float32Array,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,arguments.length>2?arguments[2]:void 0,arguments.length>3?arguments[3]:void 0),this.elementType="f32"}static fromTypedArray(e,t){return new o(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}o.ElementType="f32";class c extends u{constructor(e){super(Float32Array,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,arguments.length>2?arguments[2]:void 0,arguments.length>3?arguments[3]:void 0),this.elementType="f32"}slice(e,t){return this.sliceBuffer(c,e,t)}static fromTypedArray(e,t){return new c(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}c.ElementType="f32";class p extends h{constructor(e){super(Float32Array,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,arguments.length>2?arguments[2]:void 0,arguments.length>3?arguments[3]:void 0),this.elementType="f32"}slice(e,t){return this.sliceBuffer(p,e,t)}static fromTypedArray(e,t){return new p(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}p.ElementType="f32";class a extends l{constructor(e){super(Float32Array,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,arguments.length>2?arguments[2]:void 0,arguments.length>3?arguments[3]:void 0),this.elementType="f32"}slice(e,t){return this.sliceBuffer(a,e,t)}static fromTypedArray(e,t){return new a(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}a.ElementType="f32";class g extends s{constructor(e){super(Float32Array,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,arguments.length>2?arguments[2]:void 0,arguments.length>3?arguments[3]:void 0),this.elementType="f32"}slice(e,t){return this.sliceBuffer(g,e,t)}static fromTypedArray(e,t){return new g(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}g.ElementType="f32";class B extends s{constructor(e){super(Float64Array,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,arguments.length>2?arguments[2]:void 0,arguments.length>3?arguments[3]:void 0),this.elementType="f64"}slice(e,t){return this.sliceBuffer(B,e,t)}static fromTypedArray(e,t){return new B(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}B.ElementType="f64";class b extends f{constructor(e){super(Float32Array,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,arguments.length>2?arguments[2]:void 0,arguments.length>3?arguments[3]:void 0),this.elementType="f32"}slice(e,t){return this.sliceBuffer(b,e,t)}static fromTypedArray(e,t){return new b(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}b.ElementType="f32";class T extends f{constructor(e){super(Float64Array,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,arguments.length>2?arguments[2]:void 0,arguments.length>3?arguments[3]:void 0),this.elementType="f64"}slice(e,t){return this.sliceBuffer(T,e,t)}static fromTypedArray(e,t){return new T(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}T.ElementType="f64";class E extends i{constructor(e){super(Float64Array,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,arguments.length>2?arguments[2]:void 0,arguments.length>3?arguments[3]:void 0),this.elementType="f64"}slice(e,t){return this.sliceBuffer(E,e,t)}static fromTypedArray(e,t){return new E(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}E.ElementType="f64";class v extends u{constructor(e){super(Float64Array,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,arguments.length>2?arguments[2]:void 0,arguments.length>3?arguments[3]:void 0),this.elementType="f64"}slice(e,t){return this.sliceBuffer(v,e,t)}static fromTypedArray(e,t){return new v(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}v.ElementType="f64";class m extends h{constructor(e){super(Float64Array,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,arguments.length>2?arguments[2]:void 0,arguments.length>3?arguments[3]:void 0),this.elementType="f64"}slice(e,t){return this.sliceBuffer(m,e,t)}static fromTypedArray(e,t){return new m(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}m.ElementType="f64";class A extends l{constructor(e){super(Float64Array,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,arguments.length>2?arguments[2]:void 0,arguments.length>3?arguments[3]:void 0),this.elementType="f64"}slice(e,t){return this.sliceBuffer(A,e,t)}static fromTypedArray(e,t){return new A(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}A.ElementType="f64";class O extends i{constructor(e){super(Uint8Array,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,arguments.length>2?arguments[2]:void 0,arguments.length>3?arguments[3]:void 0),this.elementType="u8"}slice(e,t){return this.sliceBuffer(O,e,t)}static fromTypedArray(e,t){return new O(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}O.ElementType="u8";class S extends u{constructor(e){super(Uint8Array,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,arguments.length>2?arguments[2]:void 0,arguments.length>3?arguments[3]:void 0),this.elementType="u8"}slice(e,t){return this.sliceBuffer(S,e,t)}static fromTypedArray(e,t){return new S(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}S.ElementType="u8";class L extends h{constructor(e){super(Uint8Array,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,arguments.length>2?arguments[2]:void 0,arguments.length>3?arguments[3]:void 0),this.elementType="u8"}slice(e,t){return this.sliceBuffer(L,e,t)}static fromTypedArray(e,t){return new L(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}L.ElementType="u8";class w extends l{constructor(e){super(Uint8Array,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,arguments.length>2?arguments[2]:void 0,arguments.length>3?arguments[3]:void 0),this.elementType="u8"}slice(e,t){return this.sliceBuffer(w,e,t)}static fromTypedArray(e,t){return new w(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}w.ElementType="u8";class _ extends i{constructor(e){super(Uint16Array,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,arguments.length>2?arguments[2]:void 0,arguments.length>3?arguments[3]:void 0),this.elementType="u16"}slice(e,t){return this.sliceBuffer(_,e,t)}static fromTypedArray(e,t){return new _(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}_.ElementType="u16";class x extends u{constructor(e){super(Uint16Array,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,arguments.length>2?arguments[2]:void 0,arguments.length>3?arguments[3]:void 0),this.elementType="u16"}slice(e,t){return this.sliceBuffer(x,e,t)}static fromTypedArray(e,t){return new x(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}x.ElementType="u16";class M extends h{constructor(e){super(Uint16Array,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,arguments.length>2?arguments[2]:void 0,arguments.length>3?arguments[3]:void 0),this.elementType="u16"}slice(e,t){return this.sliceBuffer(M,e,t)}static fromTypedArray(e,t){return new M(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}M.ElementType="u16";class C extends l{constructor(e){super(Uint16Array,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,arguments.length>2?arguments[2]:void 0,arguments.length>3?arguments[3]:void 0),this.elementType="u16"}slice(e,t){return this.sliceBuffer(C,e,t)}static fromTypedArray(e,t){return new C(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}C.ElementType="u16";class P extends i{constructor(e){super(Uint32Array,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,arguments.length>2?arguments[2]:void 0,arguments.length>3?arguments[3]:void 0),this.elementType="u32"}slice(e,t){return this.sliceBuffer(P,e,t)}static fromTypedArray(e,t){return new P(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}P.ElementType="u32";class N extends u{constructor(e){super(Uint32Array,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,arguments.length>2?arguments[2]:void 0,arguments.length>3?arguments[3]:void 0),this.elementType="u32"}slice(e,t){return this.sliceBuffer(N,e,t)}static fromTypedArray(e,t){return new N(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}N.ElementType="u32";class R extends h{constructor(e){super(Uint32Array,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,arguments.length>2?arguments[2]:void 0,arguments.length>3?arguments[3]:void 0),this.elementType="u32"}slice(e,t){return this.sliceBuffer(R,e,t)}static fromTypedArray(e,t){return new R(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}R.ElementType="u32";class Y extends l{constructor(e){super(Uint32Array,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,arguments.length>2?arguments[2]:void 0,arguments.length>3?arguments[3]:void 0),this.elementType="u32"}slice(e,t){return this.sliceBuffer(Y,e,t)}static fromTypedArray(e,t){return new Y(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}Y.ElementType="u32";class F extends i{constructor(e){super(Int8Array,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,arguments.length>2?arguments[2]:void 0,arguments.length>3?arguments[3]:void 0),this.elementType="i8"}slice(e,t){return this.sliceBuffer(F,e,t)}static fromTypedArray(e,t){return new F(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}F.ElementType="i8";class I extends u{constructor(e){super(Int8Array,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,arguments.length>2?arguments[2]:void 0,arguments.length>3?arguments[3]:void 0),this.elementType="i8"}slice(e,t){return this.sliceBuffer(I,e,t)}static fromTypedArray(e,t){return new I(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}I.ElementType="i8";class U extends h{constructor(e){super(Int8Array,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,arguments.length>2?arguments[2]:void 0,arguments.length>3?arguments[3]:void 0),this.elementType="i8"}slice(e,t){return this.sliceBuffer(U,e,t)}static fromTypedArray(e,t){return new U(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}U.ElementType="i8";class V extends l{constructor(e){super(Int8Array,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,arguments.length>2?arguments[2]:void 0,arguments.length>3?arguments[3]:void 0),this.elementType="i8"}slice(e,t){return this.sliceBuffer(V,e,t)}static fromTypedArray(e,t){return new V(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}V.ElementType="i8";class k extends i{constructor(e){super(Int16Array,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,arguments.length>2?arguments[2]:void 0,arguments.length>3?arguments[3]:void 0),this.elementType="i16"}slice(e,t){return this.sliceBuffer(k,e,t)}static fromTypedArray(e,t){return new k(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}k.ElementType="i16";class j extends u{constructor(e){super(Int16Array,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,arguments.length>2?arguments[2]:void 0,arguments.length>3?arguments[3]:void 0),this.elementType="i16"}slice(e,t){return this.sliceBuffer(j,e,t)}static fromTypedArray(e,t){return new j(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}j.ElementType="i16";class q extends h{constructor(e){super(Int16Array,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,arguments.length>2?arguments[2]:void 0,arguments.length>3?arguments[3]:void 0),this.elementType="i16"}slice(e,t){return this.sliceBuffer(q,e,t)}static fromTypedArray(e,t){return new q(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}q.ElementType="i16";class z extends l{constructor(e){super(Int16Array,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,arguments.length>2?arguments[2]:void 0,arguments.length>3?arguments[3]:void 0),this.elementType="i16"}slice(e,t){return this.sliceBuffer(z,e,t)}static fromTypedArray(e,t){return new z(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}z.ElementType="i16";class D extends i{constructor(e){super(Int32Array,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,arguments.length>2?arguments[2]:void 0,arguments.length>3?arguments[3]:void 0),this.elementType="i32"}slice(e,t){return this.sliceBuffer(D,e,t)}static fromTypedArray(e,t){return new D(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}D.ElementType="i32";class G extends u{constructor(e){super(Int32Array,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,arguments.length>2?arguments[2]:void 0,arguments.length>3?arguments[3]:void 0),this.elementType="i32"}slice(e,t){return this.sliceBuffer(G,e,t)}static fromTypedArray(e,t){return new G(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}G.ElementType="i32";class H extends h{constructor(e){super(Int32Array,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,arguments.length>2?arguments[2]:void 0,arguments.length>3?arguments[3]:void 0),this.elementType="i32"}slice(e,t){return this.sliceBuffer(H,e,t)}static fromTypedArray(e,t){return new H(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}H.ElementType="i32";class J extends l{constructor(e){super(Int32Array,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,arguments.length>2?arguments[2]:void 0,arguments.length>3?arguments[3]:void 0),this.elementType="i32"}slice(e,t){return this.sliceBuffer(J,e,t)}static fromTypedArray(e,t){return new J(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}J.ElementType="i32"}}]);
//# sourceMappingURL=5158.1098ba01.chunk.js.map