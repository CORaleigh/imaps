import{r as dt}from"./deduplicate-a9192c99.js";import{T as R}from"./InterleavedLayout-f57c96d2.js";import{O as u}from"./VertexAttribute-15d1866a.js";import{o as j}from"./glUtil-7a9be557.js";import{ap as et,pd as It,fY as At,cF as B,aC as nt,aE as X,fl as ht,dd as Ot,d3 as lt,aD as ot,cg as ft,aB as E,aF as St,lO as wt}from"./index-7753bab1.js";const vt=R().vec3f(u.POSITION).u16(u.COMPONENTINDEX).u16(u.U16PADDING),Et=R().vec2u8(u.SIDENESS);j(Et);const ut=R().vec3f(u.POSITION0).vec3f(u.POSITION1).u16(u.COMPONENTINDEX).u8(u.VARIANTOFFSET,{glNormalized:!0}).u8(u.VARIANTSTROKE).u8(u.VARIANTEXTENSION,{glNormalized:!0}).u8(u.U8PADDING,{glPadding:!0}).u16(u.U16PADDING,{glPadding:!0}),G=ut.clone().vec3f(u.NORMAL),K=ut.clone().vec3f(u.NORMALA).vec3f(u.NORMALB);u.POSITION0,u.POSITION1,u.COMPONENTINDEX,u.VARIANTOFFSET,u.VARIANTSTROKE,u.VARIANTEXTENSION,u.NORMAL,u.NORMALA,u.NORMALB,u.SIDENESS;const D=-1;var rt;function $t(t,e,o,r=Lt){const s=t.vertices.position,i=t.vertices.componentIndex,p=et(r.anglePlanar),a=et(r.angleSignificantEdge),N=Math.cos(a),l=Math.cos(p),f=z.edge,I=f.position0,A=f.position1,d=f.faceNormal0,$=f.faceNormal1,h=Vt(t),T=Dt(t),n=T.length/4,c=e.allocate(n);let g=0;const m=n,O=o.allocate(m);let v=0,P=0,S=0;const J=It(0,n),F=new Float32Array(n);F.forEach((V,w,x)=>{s.getVec(T[4*w+0],I),s.getVec(T[4*w+1],A),x[w]=At(I,A)}),J.sort((V,w)=>F[w]-F[V]);const Q=new Array,Z=new Array;for(let V=0;V<n;V++){const w=J[V],x=F[w],W=T[4*w+0],Nt=T[4*w+1],L=T[4*w+2],_=T[4*w+3],tt=_===D;if(s.getVec(W,I),s.getVec(Nt,A),tt)B(d,h[3*L+0],h[3*L+1],h[3*L+2]),nt($,d),f.componentIndex=i.get(W),f.cosAngle=X(d,$);else{if(B(d,h[3*L+0],h[3*L+1],h[3*L+2]),B($,h[3*_+0],h[3*_+1],h[3*_+2]),f.componentIndex=i.get(W),f.cosAngle=X(d,$),Pt(f,l))continue;f.cosAngle<-.9999&&nt($,d)}P+=x,S++,tt||Tt(f,N)?(e.write(c,g++,f),Q.push(x)):yt(f,p)&&(o.write(O,v++,f),Z.push(x))}const mt=new Float32Array(Q.reverse()),pt=new Float32Array(Z.reverse());return{regular:{instancesData:e.trim(c,g),lodInfo:{lengths:mt}},silhouette:{instancesData:o.trim(O,v),lodInfo:{lengths:pt}},averageEdgeLength:P/S}}function Tt(t,e){return t.cosAngle<e}function Pt(t,e){return t.cosAngle>e}function yt(t,e){const o=ht(t.cosAngle),r=z.fwd,s=z.ortho;return Ot(r,t.position1,t.position0),o*(X(lt(s,t.faceNormal0,t.faceNormal1),r)>0?-1:1)>e}function Dt(t){const e=t.faces.length/3,o=t.faces,r=t.neighbors;let s=0;for(let a=0;a<e;a++){const N=r[3*a+0],l=r[3*a+1],f=r[3*a+2],I=o[3*a+0],A=o[3*a+1],d=o[3*a+2];s+=N===D||I<A?1:0,s+=l===D||A<d?1:0,s+=f===D||d<I?1:0}const i=new Int32Array(4*s);let p=0;for(let a=0;a<e;a++){const N=r[3*a+0],l=r[3*a+1],f=r[3*a+2],I=o[3*a+0],A=o[3*a+1],d=o[3*a+2];(N===D||I<A)&&(i[p++]=I,i[p++]=A,i[p++]=a,i[p++]=N),(l===D||A<d)&&(i[p++]=A,i[p++]=d,i[p++]=a,i[p++]=l),(f===D||d<I)&&(i[p++]=d,i[p++]=I,i[p++]=a,i[p++]=f)}return i}function Vt(t){const e=t.faces.length/3,o=t.vertices.position,r=t.faces,s=H.v0,i=H.v1,p=H.v2,a=new Float32Array(3*e);for(let N=0;N<e;N++){const l=r[3*N+0],f=r[3*N+1],I=r[3*N+2];o.getVec(l,s),o.getVec(f,i),o.getVec(I,p),ot(i,i,s),ot(p,p,s),lt(s,i,p),ft(s,s),a[3*N+0]=s[0],a[3*N+1]=s[1],a[3*N+2]=s[2]}return a}(function(t){t[t.SOLID=0]="SOLID",t[t.SKETCH=1]="SKETCH"})(rt||(rt={}));const z={edge:{position0:E(),position1:E(),faceNormal0:E(),faceNormal1:E(),componentIndex:0,cosAngle:0},ortho:E(),fwd:E()},H={v0:E(),v1:E(),v2:E()},Lt={anglePlanar:4,angleSignificantEdge:35};function st(t,e,o){const r=e/3,s=new Uint32Array(o+1),i=new Uint32Array(o+1),p=(n,c)=>{n<c?s[n+1]++:i[c+1]++};for(let n=0;n<r;n++){const c=t[3*n],g=t[3*n+1],m=t[3*n+2];p(c,g),p(g,m),p(m,c)}let a=0,N=0;for(let n=0;n<o;n++){const c=s[n+1],g=i[n+1];s[n+1]=a,i[n+1]=N,a+=c,N+=g}const l=new Uint32Array(6*r),f=s[o],I=(n,c,g)=>{if(n<c){const m=s[n+1]++;l[2*m]=c,l[2*m+1]=g}else{const m=i[c+1]++;l[2*f+2*m]=n,l[2*f+2*m+1]=g}};for(let n=0;n<r;n++){const c=t[3*n],g=t[3*n+1],m=t[3*n+2];I(c,g,n),I(g,m,n),I(m,c,n)}const A=(n,c)=>{const g=2*n,m=c-n;for(let O=1;O<m;O++){const v=l[g+2*O],P=l[g+2*O+1];let S=O-1;for(;S>=0&&l[g+2*S]>v;S--)l[g+2*S+2]=l[g+2*S],l[g+2*S+3]=l[g+2*S+1];l[g+2*S+2]=v,l[g+2*S+3]=P}};for(let n=0;n<o;n++)A(s[n],s[n+1]),A(f+i[n],f+i[n+1]);const d=new Int32Array(3*r),$=(n,c)=>n===t[3*c]?0:n===t[3*c+1]?1:n===t[3*c+2]?2:-1,h=(n,c)=>{const g=$(n,c);d[3*c+g]=-1},T=(n,c,g,m)=>{const O=$(n,c);d[3*c+O]=m;const v=$(g,m);d[3*m+v]=c};for(let n=0;n<o;n++){let c=s[n];const g=s[n+1];let m=i[n];const O=i[n+1];for(;c<g&&m<O;){const v=l[2*c],P=l[2*f+2*m];v===P?(T(n,l[2*c+1],P,l[2*f+2*m+1]),c++,m++):v<P?(h(n,l[2*c+1]),c++):(h(P,l[2*f+2*m+1]),m++)}for(;c<g;)h(n,l[2*c+1]),c++;for(;m<O;)h(l[2*f+2*m],l[2*f+2*m+1]),m++}return d}let gt=class{updateSettings(e){this.settings=e,this._edgeHashFunction=e.reducedPrecision?xt:Mt}write(e,o,r){const s=this._edgeHashFunction(r);C.seed=s;const i=C.getIntRange(0,255),p=C.getIntRange(0,this.settings.variants-1),a=.7,N=C.getFloat(),l=255*(.5*Rt(-(1-Math.min(N/a,1))+Math.max(0,N-a)/(1-a),1.2)+.5);e.position0.setVec(o,r.position0),e.position1.setVec(o,r.position1),e.componentIndex.set(o,r.componentIndex),e.variantOffset.set(o,i),e.variantStroke.set(o,p),e.variantExtension.set(o,l)}trim(e,o){return e.slice(0,o)}};const Y=new Float32Array(6),b=new Uint32Array(Y.buffer),y=new Uint32Array(1);function Mt(t){const e=Y;e[0]=t.position0[0],e[1]=t.position0[1],e[2]=t.position0[2],e[3]=t.position1[0],e[4]=t.position1[1],e[5]=t.position1[2],y[0]=5381;for(let o=0;o<b.length;o++)y[0]=31*y[0]+b[o];return y[0]}function xt(t){const e=Y;e[0]=M(t.position0[0]),e[1]=M(t.position0[1]),e[2]=M(t.position0[2]),e[3]=M(t.position1[0]),e[4]=M(t.position1[1]),e[5]=M(t.position1[2]),y[0]=5381;for(let o=0;o<b.length;o++)y[0]=31*y[0]+b[o];return y[0]}const ct=1e4;function M(t){return Math.round(t*ct)/ct}function Rt(t,e){const o=t<0?-1:1;return Math.abs(t)**e*o}let k=class{constructor(){this._commonWriter=new gt}updateSettings(e){this._commonWriter.updateSettings(e)}allocate(e){return G.createBuffer(e)}write(e,o,r){this._commonWriter.write(e,o,r),St(U,r.faceNormal0,r.faceNormal1),ft(U,U),e.normal.setVec(o,U)}trim(e,o){return this._commonWriter.trim(e,o)}};k.Layout=G,k.glLayout=j(G,1);class q{constructor(){this._commonWriter=new gt}updateSettings(e){this._commonWriter.updateSettings(e)}allocate(e){return K.createBuffer(e)}write(e,o,r){this._commonWriter.write(e,o,r),e.normalA.setVec(o,r.faceNormal0),e.normalB.setVec(o,r.faceNormal1)}trim(e,o){return this._commonWriter.trim(e,o)}}q.Layout=K,q.glLayout=j(K,1);const U=E(),C=new wt;function Gt(t){const e=Ft(t.data,t.skipDeduplicate,t.indices,t.indicesLength);return it.updateSettings(t.writerSettings),at.updateSettings(t.writerSettings),$t(e,it,at)}function Ft(t,e,o,r){if(e){const p=st(o,r,t.count);return new _t(o,r,p,t)}const s=dt(t.buffer,t.stride/4,{originalIndices:o,originalIndicesLength:r}),i=st(s.indices,r,s.uniqueCount);return{faces:s.indices,facesLength:s.indices.length,neighbors:i,vertices:vt.createView(s.buffer)}}class _t{constructor(e,o,r,s){this.faces=e,this.facesLength=o,this.neighbors=r,this.vertices=s}}const it=new k,at=new q,Kt=R().vec3f(u.POSITION0).vec3f(u.POSITION1),zt=R().vec3f(u.POSITION0).vec3f(u.POSITION1).u16(u.COMPONENTINDEX).u16(u.U16PADDING,{glPadding:!0});export{vt as A,Kt as a,Gt as f,zt as m,$t as p,Ft as u};
