(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[24],{1107:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));const n=r(80).a.getLogger("esri.views.3d.support.buffer.math")},168:function(t,e,r){"use strict";function n(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function s(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]}function f(t,e,r,n,s,f,u,i,c,o,y,d,a,h,l,p){return[t,e,r,n,s,f,u,i,c,o,y,d,a,h,l,p]}function u(t,e){return new Float64Array(t,e,16)}r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return u})),r.d(e,"c",(function(){return s})),r.d(e,"d",(function(){return n})),r.d(e,"e",(function(){return f}));const i=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze({__proto__:null,create:n,clone:s,fromValues:f,createView:u,IDENTITY:i})},289:function(t,e,r){"use strict";r.d(e,"a",(function(){return p})),r.d(e,"b",(function(){return u})),r.d(e,"c",(function(){return y})),r.d(e,"d",(function(){return a})),r.d(e,"e",(function(){return c})),r.d(e,"f",(function(){return s})),r.d(e,"g",(function(){return B})),r.d(e,"h",(function(){return h})),r.d(e,"i",(function(){return o})),r.d(e,"j",(function(){return l})),r.d(e,"k",(function(){return d})),r.d(e,"l",(function(){return f})),r.d(e,"m",(function(){return i}));var n=r(171);function s(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t}function f(t,e,r,n,s,f,u,i,c,o){return t[0]=e,t[1]=r,t[2]=n,t[3]=s,t[4]=f,t[5]=u,t[6]=i,t[7]=c,t[8]=o,t}function u(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function i(t,e){if(t===e){const r=e[1],n=e[2],s=e[5];t[1]=e[3],t[2]=e[6],t[3]=r,t[5]=e[7],t[6]=n,t[7]=s}else t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8];return t}function c(t,e){const r=e[0],n=e[1],s=e[2],f=e[3],u=e[4],i=e[5],c=e[6],o=e[7],y=e[8],d=y*u-i*o,a=-y*f+i*c,h=o*f-u*c;let l=r*d+n*a+s*h;return l?(l=1/l,t[0]=d*l,t[1]=(-y*n+s*o)*l,t[2]=(i*n-s*u)*l,t[3]=a*l,t[4]=(y*r-s*c)*l,t[5]=(-i*r+s*f)*l,t[6]=h*l,t[7]=(-o*r+n*c)*l,t[8]=(u*r-n*f)*l,t):null}function o(t,e,r){const n=e[0],s=e[1],f=e[2],u=e[3],i=e[4],c=e[5],o=e[6],y=e[7],d=e[8],a=r[0],h=r[1],l=r[2],p=r[3],b=r[4],B=r[5],T=r[6],m=r[7],E=r[8];return t[0]=a*n+h*u+l*o,t[1]=a*s+h*i+l*y,t[2]=a*f+h*c+l*d,t[3]=p*n+b*u+B*o,t[4]=p*s+b*i+B*y,t[5]=p*f+b*c+B*d,t[6]=T*n+m*u+E*o,t[7]=T*s+m*i+E*y,t[8]=T*f+m*c+E*d,t}function y(t,e,r){const n=e[0],s=e[1],f=e[2],u=e[3],i=e[4],c=e[5],o=e[6],y=e[7],d=e[8],a=r[0],h=r[1];return t[0]=n,t[1]=s,t[2]=f,t[3]=u,t[4]=i,t[5]=c,t[6]=a*n+h*u+o,t[7]=a*s+h*i+y,t[8]=a*f+h*c+d,t}function d(t,e,r){const n=e[0],s=e[1],f=e[2],u=e[3],i=e[4],c=e[5],o=e[6],y=e[7],d=e[8],a=Math.sin(r),h=Math.cos(r);return t[0]=h*n+a*u,t[1]=h*s+a*i,t[2]=h*f+a*c,t[3]=h*u-a*n,t[4]=h*i-a*s,t[5]=h*c-a*f,t[6]=o,t[7]=y,t[8]=d,t}function a(t,e,r){const n=r[0],s=r[1],f=r[2];return t[0]=n*e[0],t[1]=n*e[1],t[2]=n*e[2],t[3]=s*e[3],t[4]=s*e[4],t[5]=s*e[5],t[6]=f*e[6],t[7]=f*e[7],t[8]=f*e[8],t}function h(t,e,r){const n=r[0],s=r[1];return t[0]=n*e[0],t[1]=n*e[1],t[2]=n*e[2],t[3]=s*e[3],t[4]=s*e[4],t[5]=s*e[5],t}function l(t,e){const r=e[0],n=e[1],s=e[2],f=e[4],u=e[5],i=e[6],c=e[8],o=e[9],y=e[10],d=y*u-i*o,a=-y*f+i*c,h=o*f-u*c,l=r*d+n*a+s*h;if(!l)return null;const p=1/l;return t[0]=d*p,t[1]=(-y*n+s*o)*p,t[2]=(i*n-s*u)*p,t[3]=a*p,t[4]=(y*r-s*c)*p,t[5]=(-i*r+s*f)*p,t[6]=h*p,t[7]=(-o*r+n*c)*p,t[8]=(u*r-n*f)*p,t}function p(t,e){const r=e[0],n=e[1],s=e[2],f=e[3],u=e[4],i=e[5],c=e[6],o=e[7],y=e[8],d=e[9],a=e[10],h=e[11],l=e[12],p=e[13],b=e[14],B=e[15],T=r*i-n*u,m=r*c-s*u,E=r*o-f*u,M=n*c-s*i,O=n*o-f*i,A=s*o-f*c,S=y*p-d*l,g=y*b-a*l,_=y*B-h*l,L=d*b-a*p,w=d*B-h*p,x=a*B-h*b;let j=T*x-m*w+E*L+M*_-O*g+A*S;return j?(j=1/j,t[0]=(i*x-c*w+o*L)*j,t[1]=(c*_-u*x-o*g)*j,t[2]=(u*w-i*_+o*S)*j,t[3]=(s*w-n*x-f*L)*j,t[4]=(r*x-s*_+f*g)*j,t[5]=(n*_-r*w-f*S)*j,t[6]=(p*A-b*O+B*M)*j,t[7]=(b*E-l*A-B*m)*j,t[8]=(l*O-p*E+B*T)*j,t):null}function b(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t[3]=e[3]-r[3],t[4]=e[4]-r[4],t[5]=e[5]-r[5],t[6]=e[6]-r[6],t[7]=e[7]-r[7],t[8]=e[8]-r[8],t}function B(t){const e=n.a,r=t[0],s=t[1],f=t[2],u=t[3],i=t[4],c=t[5],o=t[6],y=t[7],d=t[8];return Math.abs(1-(r*r+u*u+o*o))<=e&&Math.abs(1-(s*s+i*i+y*y))<=e&&Math.abs(1-(f*f+c*c+d*d))<=e}const T=o,m=b;Object.freeze({__proto__:null,fromMat4:s,copy:function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t},set:f,identity:u,transpose:i,invert:c,adjoint:function(t,e){const r=e[0],n=e[1],s=e[2],f=e[3],u=e[4],i=e[5],c=e[6],o=e[7],y=e[8];return t[0]=u*y-i*o,t[1]=s*o-n*y,t[2]=n*i-s*u,t[3]=i*c-f*y,t[4]=r*y-s*c,t[5]=s*f-r*i,t[6]=f*o-u*c,t[7]=n*c-r*o,t[8]=r*u-n*f,t},determinant:function(t){const e=t[0],r=t[1],n=t[2],s=t[3],f=t[4],u=t[5],i=t[6],c=t[7],o=t[8];return e*(o*f-u*c)+r*(-o*s+u*i)+n*(c*s-f*i)},multiply:o,translate:y,rotate:d,scale:a,scaleByVec2:h,fromTranslation:function(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=e[0],t[7]=e[1],t[8]=1,t},fromRotation:function(t,e){const r=Math.sin(e),n=Math.cos(e);return t[0]=n,t[1]=r,t[2]=0,t[3]=-r,t[4]=n,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},fromScaling:function(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=e[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},fromMat2d:function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=0,t[3]=e[2],t[4]=e[3],t[5]=0,t[6]=e[4],t[7]=e[5],t[8]=1,t},fromQuat:function(t,e){const r=e[0],n=e[1],s=e[2],f=e[3],u=r+r,i=n+n,c=s+s,o=r*u,y=n*u,d=n*i,a=s*u,h=s*i,l=s*c,p=f*u,b=f*i,B=f*c;return t[0]=1-d-l,t[3]=y-B,t[6]=a+b,t[1]=y+B,t[4]=1-o-l,t[7]=h-p,t[2]=a-b,t[5]=h+p,t[8]=1-o-d,t},normalFromMat4Legacy:l,normalFromMat4:p,projection:function(t,e,r){return t[0]=2/e,t[1]=0,t[2]=0,t[3]=0,t[4]=-2/r,t[5]=0,t[6]=-1,t[7]=1,t[8]=1,t},str:function(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"},frob:function(t){return Math.sqrt(t[0]**2+t[1]**2+t[2]**2+t[3]**2+t[4]**2+t[5]**2+t[6]**2+t[7]**2+t[8]**2)},add:function(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t[3]=e[3]+r[3],t[4]=e[4]+r[4],t[5]=e[5]+r[5],t[6]=e[6]+r[6],t[7]=e[7]+r[7],t[8]=e[8]+r[8],t},subtract:b,multiplyScalar:function(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*r,t},multiplyScalarAndAdd:function(t,e,r,n){return t[0]=e[0]+r[0]*n,t[1]=e[1]+r[1]*n,t[2]=e[2]+r[2]*n,t[3]=e[3]+r[3]*n,t[4]=e[4]+r[4]*n,t[5]=e[5]+r[5]*n,t[6]=e[6]+r[6]*n,t[7]=e[7]+r[7]*n,t[8]=e[8]+r[8]*n,t},exactEquals:function(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[7]===e[7]&&t[8]===e[8]},equals:function(t,e){const r=t[0],s=t[1],f=t[2],u=t[3],i=t[4],c=t[5],o=t[6],y=t[7],d=t[8],a=e[0],h=e[1],l=e[2],p=e[3],b=e[4],B=e[5],T=e[6],m=e[7],E=e[8];return Math.abs(r-a)<=n.a*Math.max(1,Math.abs(r),Math.abs(a))&&Math.abs(s-h)<=n.a*Math.max(1,Math.abs(s),Math.abs(h))&&Math.abs(f-l)<=n.a*Math.max(1,Math.abs(f),Math.abs(l))&&Math.abs(u-p)<=n.a*Math.max(1,Math.abs(u),Math.abs(p))&&Math.abs(i-b)<=n.a*Math.max(1,Math.abs(i),Math.abs(b))&&Math.abs(c-B)<=n.a*Math.max(1,Math.abs(c),Math.abs(B))&&Math.abs(o-T)<=n.a*Math.max(1,Math.abs(o),Math.abs(T))&&Math.abs(y-m)<=n.a*Math.max(1,Math.abs(y),Math.abs(m))&&Math.abs(d-E)<=n.a*Math.max(1,Math.abs(d),Math.abs(E))},isOrthoNormal:B,mul:T,sub:m})},304:function(t,e,r){"use strict";function n(){return[1,0,0,0,1,0,0,0,1]}function s(t,e){return new Float64Array(t,e,9)}r.d(e,"a",(function(){return s})),r.d(e,"b",(function(){return n}));Object.freeze({__proto__:null,create:n,clone:function(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]},fromValues:function(t,e,r,n,s,f,u,i,c){return[t,e,r,n,s,f,u,i,c]},createView:s})},342:function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return E})),r.d(e,"c",(function(){return V})),r.d(e,"d",(function(){return D})),r.d(e,"e",(function(){return R})),r.d(e,"f",(function(){return b})),r.d(e,"g",(function(){return B})),r.d(e,"h",(function(){return T})),r.d(e,"i",(function(){return m})),r.d(e,"j",(function(){return w})),r.d(e,"k",(function(){return P})),r.d(e,"l",(function(){return S})),r.d(e,"m",(function(){return h})),r.d(e,"n",(function(){return M})),r.d(e,"o",(function(){return U})),r.d(e,"p",(function(){return J})),r.d(e,"q",(function(){return v})),r.d(e,"r",(function(){return x})),r.d(e,"s",(function(){return I})),r.d(e,"t",(function(){return g})),r.d(e,"u",(function(){return l})),r.d(e,"v",(function(){return O})),r.d(e,"w",(function(){return z})),r.d(e,"x",(function(){return G})),r.d(e,"y",(function(){return F})),r.d(e,"z",(function(){return j})),r.d(e,"A",(function(){return N})),r.d(e,"B",(function(){return _})),r.d(e,"C",(function(){return p})),r.d(e,"D",(function(){return A})),r.d(e,"E",(function(){return k})),r.d(e,"F",(function(){return H})),r.d(e,"G",(function(){return q})),r.d(e,"H",(function(){return C})),r.d(e,"I",(function(){return Y})),r.d(e,"J",(function(){return L}));class n{constructor(t,e,r=0,n,s){this.TypedArrayConstructor=t,this.elementCount=9;const f=this.TypedArrayConstructor;void 0===n&&(n=9*f.BYTES_PER_ELEMENT);const u=0===e.byteLength?0:r;this.typedBuffer=null==s?new f(e,u):new f(e,u,(s-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const n=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,n,this.stride,n+r*this.stride)}getMat(t,e){let r=t*this.typedBufferStride;for(let n=0;n<9;n++)e[n]=this.typedBuffer[r++];return e}setMat(t,e){let r=t*this.typedBufferStride;for(let n=0;n<9;n++)this.typedBuffer[r++]=e[n]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}copyFrom(t,e,r){const n=this.typedBuffer,s=e.typedBuffer;let f=t*this.typedBufferStride,u=r*e.typedBufferStride;for(let i=0;i<9;++i)n[f++]=s[u++]}get buffer(){return this.typedBuffer.buffer}}n.ElementCount=9;class s{constructor(t,e,r=0,n,s){this.TypedArrayConstructor=t,this.elementCount=16;const f=this.TypedArrayConstructor;void 0===n&&(n=16*f.BYTES_PER_ELEMENT);const u=0===e.byteLength?0:r;this.typedBuffer=null==s?new f(e,u):new f(e,u,(s-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const n=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,n,this.stride,n+r*this.stride)}getMat(t,e){let r=t*this.typedBufferStride;for(let n=0;n<16;n++)e[n]=this.typedBuffer[r++];return e}setMat(t,e){let r=t*this.typedBufferStride;for(let n=0;n<16;n++)this.typedBuffer[r++]=e[n]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}copyFrom(t,e,r){const n=this.typedBuffer,s=e.typedBuffer;let f=t*this.typedBufferStride,u=r*e.typedBufferStride;for(let i=0;i<16;++i)n[f++]=s[u++]}get buffer(){return this.typedBuffer.buffer}}s.ElementCount=16;class f{constructor(t,e,r=0,n,s){this.TypedArrayConstructor=t,this.elementCount=1;const f=this.TypedArrayConstructor;void 0===n&&(n=f.BYTES_PER_ELEMENT);const u=0===e.byteLength?0:r;this.typedBuffer=null==s?new f(e,u):new f(e,u,(s-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const n=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,n,this.stride,n+r*this.stride)}get(t){return this.typedBuffer[t*this.typedBufferStride]}set(t,e){this.typedBuffer[t*this.typedBufferStride]=e}get buffer(){return this.typedBuffer.buffer}}f.ElementCount=1;var u=r(146);class i{constructor(t,e,r=0,n,s){this.TypedArrayConstructor=t,this.elementCount=2;const f=this.TypedArrayConstructor;void 0===n&&(n=2*f.BYTES_PER_ELEMENT);const u=0===e.byteLength?0:r;this.typedBuffer=null==s?new f(e,u):new f(e,u,(s-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const n=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,n,this.stride,n+r*this.stride)}getVec(t,e){return t*=this.typedBufferStride,Object(u.s)(e,this.typedBuffer[t],this.typedBuffer[t+1])}setVec(t,e){t*=this.typedBufferStride,this.typedBuffer[t++]=e[0],this.typedBuffer[t]=e[1]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r){t*=this.typedBufferStride,this.typedBuffer[t++]=e,this.typedBuffer[t]=r}copyFrom(t,e,r){const n=this.typedBuffer,s=e.typedBuffer;let f=t*this.typedBufferStride,u=r*e.typedBufferStride;n[f++]=s[u++],n[f]=s[u]}get buffer(){return this.typedBuffer.buffer}}i.ElementCount=2;var c=r(111);class o{constructor(t,e,r=0,n,s){this.TypedArrayConstructor=t,this.elementCount=3;const f=this.TypedArrayConstructor;void 0===n&&(n=3*f.BYTES_PER_ELEMENT);const u=0===e.byteLength?0:r;this.typedBuffer=null==s?new f(e,u):new f(e,u,(s-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const n=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,n,this.stride,n+r*this.stride)}getVec(t,e){return t*=this.typedBufferStride,Object(c.w)(e,this.typedBuffer[t],this.typedBuffer[t+1],this.typedBuffer[t+2])}setVec(t,e){t*=this.typedBufferStride,this.typedBuffer[t++]=e[0],this.typedBuffer[t++]=e[1],this.typedBuffer[t]=e[2]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r,n){t*=this.typedBufferStride,this.typedBuffer[t++]=e,this.typedBuffer[t++]=r,this.typedBuffer[t]=n}copyFrom(t,e,r){const n=this.typedBuffer,s=e.typedBuffer;let f=t*this.typedBufferStride,u=r*e.typedBufferStride;n[f++]=s[u++],n[f++]=s[u++],n[f]=s[u]}get buffer(){return this.typedBuffer.buffer}}o.ElementCount=3;var y=r(226);class d{constructor(t,e,r=0,n,s){this.TypedArrayConstructor=t,this.elementCount=4;const f=this.TypedArrayConstructor;void 0===n&&(n=4*f.BYTES_PER_ELEMENT);const u=0===e.byteLength?0:r;this.typedBuffer=null==s?new f(e,u):new f(e,u,(s-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const n=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,n,this.stride,n+r*this.stride)}getVec(t,e){return t*=this.typedBufferStride,Object(y.l)(e,this.typedBuffer[t++],this.typedBuffer[t++],this.typedBuffer[t++],this.typedBuffer[t])}setVec(t,e){t*=this.typedBufferStride,this.typedBuffer[t++]=e[0],this.typedBuffer[t++]=e[1],this.typedBuffer[t++]=e[2],this.typedBuffer[t]=e[3]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r,n,s){t*=this.typedBufferStride,this.typedBuffer[t++]=e,this.typedBuffer[t++]=r,this.typedBuffer[t++]=n,this.typedBuffer[t]=s}copyFrom(t,e,r){const n=this.typedBuffer,s=e.typedBuffer;let f=t*this.typedBufferStride,u=r*e.typedBufferStride;n[f++]=s[u++],n[f++]=s[u++],n[f++]=s[u++],n[f]=s[u]}get buffer(){return this.typedBuffer.buffer}}d.ElementCount=4;class a extends f{constructor(t,e=0,r,n){super(Float32Array,t,e,r,n),this.elementType="f32"}static fromTypedArray(t,e){return new a(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}a.ElementType="f32";class h extends i{constructor(t,e=0,r,n){super(Float32Array,t,e,r,n),this.elementType="f32"}slice(t,e){return this.sliceBuffer(h,t,e)}static fromTypedArray(t,e){return new h(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}h.ElementType="f32";class l extends o{constructor(t,e=0,r,n){super(Float32Array,t,e,r,n),this.elementType="f32"}slice(t,e){return this.sliceBuffer(l,t,e)}static fromTypedArray(t,e){return new l(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}l.ElementType="f32";class p extends d{constructor(t,e=0,r,n){super(Float32Array,t,e,r,n),this.elementType="f32"}slice(t,e){return this.sliceBuffer(p,t,e)}static fromTypedArray(t,e){return new p(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}p.ElementType="f32";class b extends n{constructor(t,e=0,r,n){super(Float32Array,t,e,r,n),this.elementType="f32"}slice(t,e){return this.sliceBuffer(b,t,e)}static fromTypedArray(t,e){return new b(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}b.ElementType="f32";class B extends n{constructor(t,e=0,r,n){super(Float64Array,t,e,r,n),this.elementType="f64"}slice(t,e){return this.sliceBuffer(B,t,e)}static fromTypedArray(t,e){return new B(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}B.ElementType="f64";class T extends s{constructor(t,e=0,r,n){super(Float32Array,t,e,r,n),this.elementType="f32"}slice(t,e){return this.sliceBuffer(T,t,e)}static fromTypedArray(t,e){return new T(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}T.ElementType="f32";class m extends s{constructor(t,e=0,r,n){super(Float64Array,t,e,r,n),this.elementType="f64"}slice(t,e){return this.sliceBuffer(m,t,e)}static fromTypedArray(t,e){return new m(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}m.ElementType="f64";class E extends f{constructor(t,e=0,r,n){super(Float64Array,t,e,r,n),this.elementType="f64"}slice(t,e){return this.sliceBuffer(E,t,e)}static fromTypedArray(t,e){return new E(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}E.ElementType="f64";class M extends i{constructor(t,e=0,r,n){super(Float64Array,t,e,r,n),this.elementType="f64"}slice(t,e){return this.sliceBuffer(M,t,e)}static fromTypedArray(t,e){return new M(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}M.ElementType="f64";class O extends o{constructor(t,e=0,r,n){super(Float64Array,t,e,r,n),this.elementType="f64"}slice(t,e){return this.sliceBuffer(O,t,e)}static fromTypedArray(t,e){return new O(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}O.ElementType="f64";class A extends d{constructor(t,e=0,r,n){super(Float64Array,t,e,r,n),this.elementType="f64"}slice(t,e){return this.sliceBuffer(A,t,e)}static fromTypedArray(t,e){return new A(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}A.ElementType="f64";class S extends f{constructor(t,e=0,r,n){super(Uint8Array,t,e,r,n),this.elementType="u8"}slice(t,e){return this.sliceBuffer(S,t,e)}static fromTypedArray(t,e){return new S(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}S.ElementType="u8";class g extends i{constructor(t,e=0,r,n){super(Uint8Array,t,e,r,n),this.elementType="u8"}slice(t,e){return this.sliceBuffer(g,t,e)}static fromTypedArray(t,e){return new g(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}g.ElementType="u8";class _ extends o{constructor(t,e=0,r,n){super(Uint8Array,t,e,r,n),this.elementType="u8"}slice(t,e){return this.sliceBuffer(_,t,e)}static fromTypedArray(t,e){return new _(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}_.ElementType="u8";class L extends d{constructor(t,e=0,r,n){super(Uint8Array,t,e,r,n),this.elementType="u8"}slice(t,e){return this.sliceBuffer(L,t,e)}static fromTypedArray(t,e){return new L(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}L.ElementType="u8";class w extends f{constructor(t,e=0,r,n){super(Uint16Array,t,e,r,n),this.elementType="u16"}slice(t,e){return this.sliceBuffer(w,t,e)}static fromTypedArray(t,e){return new w(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}w.ElementType="u16";class x extends i{constructor(t,e=0,r,n){super(Uint16Array,t,e,r,n),this.elementType="u16"}slice(t,e){return this.sliceBuffer(x,t,e)}static fromTypedArray(t,e){return new x(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}x.ElementType="u16";class j extends o{constructor(t,e=0,r,n){super(Uint16Array,t,e,r,n),this.elementType="u16"}slice(t,e){return this.sliceBuffer(j,t,e)}static fromTypedArray(t,e){return new j(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}j.ElementType="u16";class C extends d{constructor(t,e=0,r,n){super(Uint16Array,t,e,r,n),this.elementType="u16"}slice(t,e){return this.sliceBuffer(C,t,e)}static fromTypedArray(t,e){return new C(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}C.ElementType="u16";class P extends f{constructor(t,e=0,r,n){super(Uint32Array,t,e,r,n),this.elementType="u32"}slice(t,e){return this.sliceBuffer(P,t,e)}static fromTypedArray(t,e){return new P(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}P.ElementType="u32";class I extends i{constructor(t,e=0,r,n){super(Uint32Array,t,e,r,n),this.elementType="u32"}slice(t,e){return this.sliceBuffer(I,t,e)}static fromTypedArray(t,e){return new I(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}I.ElementType="u32";class N extends o{constructor(t,e=0,r,n){super(Uint32Array,t,e,r,n),this.elementType="u32"}slice(t,e){return this.sliceBuffer(N,t,e)}static fromTypedArray(t,e){return new N(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}N.ElementType="u32";class Y extends d{constructor(t,e=0,r,n){super(Uint32Array,t,e,r,n),this.elementType="u32"}slice(t,e){return this.sliceBuffer(Y,t,e)}static fromTypedArray(t,e){return new Y(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}Y.ElementType="u32";class R extends f{constructor(t,e=0,r,n){super(Int8Array,t,e,r,n),this.elementType="i8"}slice(t,e){return this.sliceBuffer(R,t,e)}static fromTypedArray(t,e){return new R(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}R.ElementType="i8";class v extends i{constructor(t,e=0,r,n){super(Int8Array,t,e,r,n),this.elementType="i8"}slice(t,e){return this.sliceBuffer(v,t,e)}static fromTypedArray(t,e){return new v(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}v.ElementType="i8";class F extends o{constructor(t,e=0,r,n){super(Int8Array,t,e,r,n),this.elementType="i8"}slice(t,e){return this.sliceBuffer(F,t,e)}static fromTypedArray(t,e){return new F(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}F.ElementType="i8";class q extends d{constructor(t,e=0,r,n){super(Int8Array,t,e,r,n),this.elementType="i8"}slice(t,e){return this.sliceBuffer(q,t,e)}static fromTypedArray(t,e){return new q(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}q.ElementType="i8";class V extends f{constructor(t,e=0,r,n){super(Int16Array,t,e,r,n),this.elementType="i16"}slice(t,e){return this.sliceBuffer(V,t,e)}static fromTypedArray(t,e){return new V(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}V.ElementType="i16";class U extends i{constructor(t,e=0,r,n){super(Int16Array,t,e,r,n),this.elementType="i16"}slice(t,e){return this.sliceBuffer(U,t,e)}static fromTypedArray(t,e){return new U(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}U.ElementType="i16";class z extends o{constructor(t,e=0,r,n){super(Int16Array,t,e,r,n),this.elementType="i16"}slice(t,e){return this.sliceBuffer(z,t,e)}static fromTypedArray(t,e){return new z(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}z.ElementType="i16";class k extends d{constructor(t,e=0,r,n){super(Int16Array,t,e,r,n),this.elementType="i16"}slice(t,e){return this.sliceBuffer(k,t,e)}static fromTypedArray(t,e){return new k(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}k.ElementType="i16";class D extends f{constructor(t,e=0,r,n){super(Int32Array,t,e,r,n),this.elementType="i32"}slice(t,e){return this.sliceBuffer(D,t,e)}static fromTypedArray(t,e){return new D(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}D.ElementType="i32";class J extends i{constructor(t,e=0,r,n){super(Int32Array,t,e,r,n),this.elementType="i32"}slice(t,e){return this.sliceBuffer(J,t,e)}static fromTypedArray(t,e){return new J(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}J.ElementType="i32";class G extends o{constructor(t,e=0,r,n){super(Int32Array,t,e,r,n),this.elementType="i32"}slice(t,e){return this.sliceBuffer(G,t,e)}static fromTypedArray(t,e){return new G(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}G.ElementType="i32";class H extends d{constructor(t,e=0,r,n){super(Int32Array,t,e,r,n),this.elementType="i32"}slice(t,e){return this.sliceBuffer(H,t,e)}static fromTypedArray(t,e){return new H(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}H.ElementType="i32"},384:function(t,e,r){"use strict";function n(){return[0,0,0,1]}function s(t){return[t[0],t[1],t[2],t[3]]}function f(t,e){return new Float64Array(t,e,4)}r.d(e,"a",(function(){return u})),r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return s})),r.d(e,"d",(function(){return f}));const u=[0,0,0,1];Object.freeze({__proto__:null,create:n,clone:s,fromValues:function(t,e,r,n){return[t,e,r,n]},createView:f,IDENTITY:u})},485:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return y})),r.d(e,"c",(function(){return h})),r.d(e,"d",(function(){return x})),r.d(e,"e",(function(){return b})),r.d(e,"f",(function(){return d})),r.d(e,"g",(function(){return C})),r.d(e,"h",(function(){return o}));var n=r(304),s=r(384),f=r(101),u=r(171),i=r(111),c=r(226);function o(t,e,r){r*=.5;const n=Math.sin(r);return t[0]=n*e[0],t[1]=n*e[1],t[2]=n*e[2],t[3]=Math.cos(r),t}function y(t,e){const r=2*Math.acos(e[3]),n=Math.sin(r/2);return n>u.a?(t[0]=e[0]/n,t[1]=e[1]/n,t[2]=e[2]/n):(t[0]=1,t[1]=0,t[2]=0),r}function d(t,e,r){const n=e[0],s=e[1],f=e[2],u=e[3],i=r[0],c=r[1],o=r[2],y=r[3];return t[0]=n*y+u*i+s*o-f*c,t[1]=s*y+u*c+f*i-n*o,t[2]=f*y+u*o+n*c-s*i,t[3]=u*y-n*i-s*c-f*o,t}function a(t,e,r,n){const s=e[0],f=e[1],i=e[2],c=e[3];let o,y,d,a,h,l=r[0],p=r[1],b=r[2],B=r[3];return y=s*l+f*p+i*b+c*B,y<0&&(y=-y,l=-l,p=-p,b=-b,B=-B),1-y>u.a?(o=Math.acos(y),d=Math.sin(o),a=Math.sin((1-n)*o)/d,h=Math.sin(n*o)/d):(a=1-n,h=n),t[0]=a*s+h*l,t[1]=a*f+h*p,t[2]=a*i+h*b,t[3]=a*c+h*B,t}function h(t,e){const r=e[0],n=e[1],s=e[2],f=e[3],u=r*r+n*n+s*s+f*f,i=u?1/u:0;return t[0]=-r*i,t[1]=-n*i,t[2]=-s*i,t[3]=f*i,t}function l(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function p(t,e){const r=e[0]+e[4]+e[8];let n;if(r>0)n=Math.sqrt(r+1),t[3]=.5*n,n=.5/n,t[0]=(e[5]-e[7])*n,t[1]=(e[6]-e[2])*n,t[2]=(e[1]-e[3])*n;else{let r=0;e[4]>e[0]&&(r=1),e[8]>e[3*r+r]&&(r=2);const s=(r+1)%3,f=(r+2)%3;n=Math.sqrt(e[3*r+r]-e[3*s+s]-e[3*f+f]+1),t[r]=.5*n,n=.5/n,t[3]=(e[3*s+f]-e[3*f+s])*n,t[s]=(e[3*s+r]+e[3*r+s])*n,t[f]=(e[3*f+r]+e[3*r+f])*n}return t}function b(t,e,r,n){const s=.5*Math.PI/180;e*=s,r*=s,n*=s;const f=Math.sin(e),u=Math.cos(e),i=Math.sin(r),c=Math.cos(r),o=Math.sin(n),y=Math.cos(n);return t[0]=f*c*y-u*i*o,t[1]=u*i*y+f*c*o,t[2]=u*c*o-f*i*y,t[3]=u*c*y+f*i*o,t}const B=c.c,T=c.l,m=c.a,E=d,M=c.b,O=c.d,A=c.j,S=c.e,g=S,_=c.f,L=_,w=c.k,x=c.g,j=c.h;function C(t,e,r){const n=Object(i.h)(e,r);return n<-.999999?(Object(i.g)(P,I,e),Object(i.y)(P)<1e-6&&Object(i.g)(P,N,e),Object(i.r)(P,P),o(t,P,Math.PI),t):n>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(Object(i.g)(P,e,r),t[0]=P[0],t[1]=P[1],t[2]=P[2],t[3]=1+n,w(t,t))}const P=Object(f.e)(),I=Object(f.g)(1,0,0),N=Object(f.g)(0,1,0);const Y=Object(s.b)(),R=Object(s.b)();const v=Object(n.b)();Object.freeze({__proto__:null,identity:function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},setAxisAngle:o,getAxisAngle:y,multiply:d,rotateX:function(t,e,r){r*=.5;const n=e[0],s=e[1],f=e[2],u=e[3],i=Math.sin(r),c=Math.cos(r);return t[0]=n*c+u*i,t[1]=s*c+f*i,t[2]=f*c-s*i,t[3]=u*c-n*i,t},rotateY:function(t,e,r){r*=.5;const n=e[0],s=e[1],f=e[2],u=e[3],i=Math.sin(r),c=Math.cos(r);return t[0]=n*c-f*i,t[1]=s*c+u*i,t[2]=f*c+n*i,t[3]=u*c-s*i,t},rotateZ:function(t,e,r){r*=.5;const n=e[0],s=e[1],f=e[2],u=e[3],i=Math.sin(r),c=Math.cos(r);return t[0]=n*c+s*i,t[1]=s*c-n*i,t[2]=f*c+u*i,t[3]=u*c-f*i,t},calculateW:function(t,e){const r=e[0],n=e[1],s=e[2];return t[0]=r,t[1]=n,t[2]=s,t[3]=Math.sqrt(Math.abs(1-r*r-n*n-s*s)),t},slerp:a,random:function(t){const e=Object(u.b)(),r=Object(u.b)(),n=Object(u.b)(),s=Math.sqrt(1-e),f=Math.sqrt(e);return t[0]=s*Math.sin(2*Math.PI*r),t[1]=s*Math.cos(2*Math.PI*r),t[2]=f*Math.sin(2*Math.PI*n),t[3]=f*Math.cos(2*Math.PI*n),t},invert:h,conjugate:l,fromMat3:p,fromEuler:b,str:function(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},copy:B,set:T,add:m,mul:E,scale:M,dot:O,lerp:A,length:S,len:g,squaredLength:_,sqrLen:L,normalize:w,exactEquals:x,equals:j,rotationTo:C,sqlerp:function(t,e,r,n,s,f){return a(Y,e,s,f),a(R,r,n,f),a(t,Y,R,2*f*(1-f)),t},setAxes:function(t,e,r,n){const s=v;return s[0]=r[0],s[3]=r[1],s[6]=r[2],s[1]=n[0],s[4]=n[1],s[7]=n[2],s[2]=-e[0],s[5]=-e[1],s[8]=-e[2],w(t,p(t,s))}})},635:function(t,e,r){"use strict";r.d(e,"a",(function(){return f})),r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return i})),r.d(e,"d",(function(){return u})),r.d(e,"e",(function(){return s}));var n=r(1107);function s(t,e,r){if(t.count!==e.count)return void n.a.error("source and destination buffers need to have the same number of elements");const s=t.count,f=r[0],u=r[1],i=r[2],c=r[4],o=r[5],y=r[6],d=r[8],a=r[9],h=r[10],l=r[12],p=r[13],b=r[14],B=t.typedBuffer,T=t.typedBufferStride,m=e.typedBuffer,E=e.typedBufferStride;for(let n=0;n<s;n++){const t=n*T,e=n*E,r=m[e],s=m[e+1],M=m[e+2];B[t]=f*r+c*s+d*M+l,B[t+1]=u*r+o*s+a*M+p,B[t+2]=i*r+y*s+h*M+b}}function f(t,e,r){if(t.count!==e.count)return void n.a.error("source and destination buffers need to have the same number of elements");const s=t.count,f=r[0],u=r[1],i=r[2],c=r[3],o=r[4],y=r[5],d=r[6],a=r[7],h=r[8],l=t.typedBuffer,p=t.typedBufferStride,b=e.typedBuffer,B=e.typedBufferStride;for(let n=0;n<s;n++){const t=n*p,e=n*B,r=b[e],s=b[e+1],T=b[e+2];l[t]=f*r+c*s+d*T,l[t+1]=u*r+o*s+a*T,l[t+2]=i*r+y*s+h*T}}function u(t,e,r){const n=Math.min(t.count,e.count),s=t.typedBuffer,f=t.typedBufferStride,u=e.typedBuffer,i=e.typedBufferStride;for(let c=0;c<n;c++){const t=c*f,e=c*i;s[t]=r*u[e],s[t+1]=r*u[e+1],s[t+2]=r*u[e+2]}}function i(t,e){const r=Math.min(t.count,e.count),n=t.typedBuffer,s=t.typedBufferStride,f=e.typedBuffer,u=e.typedBufferStride;for(let i=0;i<r;i++){const t=i*s,e=i*u,r=f[e],c=f[e+1],o=f[e+2],y=Math.sqrt(r*r+c*c+o*o);if(y>0){const e=1/y;n[t]=e*r,n[t+1]=e*c,n[t+2]=e*o}}}function c(t,e,r){const n=Math.min(t.count,e.count),s=t.typedBuffer,f=t.typedBufferStride,u=e.typedBuffer,i=e.typedBufferStride;for(let c=0;c<n;c++){const t=c*f,e=c*i;s[t]=u[e]>>r,s[t+1]=u[e+1]>>r,s[t+2]=u[e+2]>>r}}Object.freeze({__proto__:null,transformMat4:s,transformMat3:f,scale:u,normalize:i,shiftRight:c})},793:function(t,e,r){"use strict";function n(t,e,r){const n=t.typedBuffer,s=t.typedBufferStride,f=e.typedBuffer,u=e.typedBufferStride,i=r?r.count:e.count;let c=(r&&r.dstIndex?r.dstIndex:0)*s,o=(r&&r.srcIndex?r.srcIndex:0)*u;for(let y=0;y<i;++y)n[c]=f[o],n[c+1]=f[o+1],n[c+2]=f[o+2],c+=s,o+=u}function s(t,e,r,n,s){var f,u;const i=t.typedBuffer,c=t.typedBufferStride,o=null!=(f=null==s?void 0:s.count)?f:t.count;let y=(null!=(u=null==s?void 0:s.dstIndex)?u:0)*c;for(let d=0;d<o;++d)i[y]=e,i[y+1]=r,i[y+2]=n,y+=c}r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return s}));Object.freeze({__proto__:null,copy:n,fill:s})}}]);
//# sourceMappingURL=24.2e4847da.chunk.js.map