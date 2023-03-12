import{aR as x,I as c,cU as C,aB as y,nd as fe,_ as X,ah as L,iA as Be,sB as Ve,l8 as Ze,f6 as We,ab as Je,as as Y,ad as se,aF as ue,ec as Pe,eS as Ee,jT as q,cg as Xe,cF as Ie,aD as H,c_ as Ye,ef as qe,dO as Ce,aG as _e,G as He,aO as Ke,aP as Qe,nm as et,x as tt,aq as ie,a_ as nt,e as A,y as F,a as rt,c$ as re,bC as ot,f as st,g as it}from"./index-84d82762.js";import{a as V,v as ae,g as le,x as at,k as J}from"./axisAngleDegrees-7e4701ef.js";import{g as U,p as K}from"./MeshComponent-80691241.js";import{r as ne,b as lt,x as ct,_ as ft,L as Q}from"./georeference-c83dc3c2.js";import{i as ut}from"./triangulationUtils-3643a6fd.js";import{e as pe}from"./mat3f64-221ce671.js";import{e as ze}from"./mat4f64-65d35099.js";import{c as he}from"./spatialReferenceEllipsoidUtils-c9ea4771.js";import{M as ge,j as me,k as de,R as xe,h as ye,L as we}from"./projection-2cd29501.js";import"./quat-125beff5.js";import"./quatf64-3363c48e.js";import"./imageUtils-c2d0d1ae.js";import"./BufferView-578ce2f0.js";import"./vec33-538b5e42.js";import"./earcut-61f7b102.js";import"./deduplicate-2d2e364b.js";import"./Indices-27da97a1.js";import"./DoubleArray-938c6e84.js";const ce=x.getLogger("esri.geometry.support.meshUtils.centerAt");function pt(e,n,t){if(!e.vertexAttributes||!e.vertexAttributes.position)return;const r=(t==null?void 0:t.origin)??e.origin;c(e.transform)?((t==null?void 0:t.geographic)!=null&&t.geographic!==e.transform.geographic&&ce.warn(`Specifying the 'geographic' parameter (${t.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`),ht(e.transform,n,r)):ne(e.spatialReference,t)?gt(e,n,r):mt(e,n,r)}function ht(e,n,t){const r=n.x-t.x,o=n.y-t.y,i=n.hasZ&&t.hasZ?n.z-t.z:0,s=e.origin;e.origin=[s[0]+r,s[1]+o,s[2]+i]}function gt(e,n,t){const r=lt(e.vertexAttributes,t,{geographic:!0}),{position:o,normal:i,tangent:s}=ct(r,n,{geographic:!0});e.vertexAttributes.position=o,e.vertexAttributes.normal=i,e.vertexAttributes.tangent=s,e.vertexAttributesChanged()}function mt(e,n,t){const r=yt,o=xt;if(C(n,o,e.spatialReference)){if(!C(t,r,e.spatialReference)){const i=e.origin;r[0]=i.x,r[1]=i.y,r[2]=i.z,ce.error(`Failed to project specified origin (wkid:${t.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}).`)}dt(e.vertexAttributes.position,o,r),e.vertexAttributesChanged()}else ce.error(`Failed to project centerAt location (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid})`)}function dt(e,n,t){if(e)for(let r=0;r<e.length;r+=3)for(let o=0;o<3;o++)e[r+o]+=n[o]-t[o]}const xt=y(),yt=y();async function wt(e,n,t){const{loadGLTFMesh:r}=await fe(X(()=>import("./loadGLTFMesh-1e90e0bd.js"),["assets/loadGLTFMesh-1e90e0bd.js","assets/index-84d82762.js","assets/index-0be7f32f.css","assets/mat3f64-221ce671.js","assets/MeshComponent-80691241.js","assets/imageUtils-c2d0d1ae.js","assets/BufferView-578ce2f0.js","assets/vec33-538b5e42.js","assets/DefaultMaterial_COLOR_GAMMA-8ad97d4c.js","assets/types-e1c0a5bf.js","assets/mat4f64-65d35099.js","assets/enums-64ab819c.js","assets/quat-125beff5.js","assets/quatf64-3363c48e.js","assets/resourceUtils-905695c0.js","assets/basicInterfaces-04e01328.js","assets/Indices-27da97a1.js","assets/georeference-c83dc3c2.js","assets/spatialReferenceEllipsoidUtils-c9ea4771.js","assets/axisAngleDegrees-7e4701ef.js","assets/projection-2cd29501.js"]),t),o=await Se(n,t),i=r(new L({x:0,y:0,z:0,spatialReference:e.spatialReference}),o.url,{resolveFile:vt(o),useTransform:!0,signal:c(t)?t.signal:null});i.then(()=>o.dispose(),()=>o.dispose());const{vertexAttributes:s,components:a}=await i;e.vertexAttributes=s,e.components=a}function vt(e){const n=Be(e.url);return t=>{const r=Ve(t,n,n),o=r?r.replace(/^ *\.\//,""):null;return(o?e.files.get(o):null)??t}}async function Se(e,n){return e instanceof Blob?ee.fromBlob(e):typeof e=="string"?new ee(e):Array.isArray(e)?bt(e,n):At(e,n)}async function bt(e,n){const t=new Map;let r=null;const o=await Ze(e.map(async s=>({name:s.name,source:await Se(s instanceof Blob?s:s.source,n)}))),i=[];for(const s of o)s&&(We(n)?s.source.dispose():i.push(s));Je(n);for(const{name:s,source:a}of i)(Y(r)||/\.(gltf|glb)/i.test(s))&&(r=a.url),t.set(s,a.url),a.files&&a.files.forEach((l,u)=>t.set(u,l));if(Y(r))throw new se("mesh-load-external:missing-files","Missing files to load external mesh source");return new ee(r,()=>i.forEach(({source:s})=>s.dispose()),t)}async function At(e,n){const{default:t}=await fe(X(()=>import("./index-84d82762.js").then(o=>o.sW),["assets/index-84d82762.js","assets/index-0be7f32f.css"]),n),r=typeof e.multipart[0]=="string"?await Promise.all(e.multipart.map(async o=>(await t(o,{responseType:"array-buffer"})).data)):e.multipart;return ee.fromBlob(new Blob(r))}let ee=class De{constructor(n,t=()=>{},r=new Map){this.url=n,this.dispose=t,this.files=r}static fromBlob(n){const t=URL.createObjectURL(n);return new De(t,()=>URL.revokeObjectURL(t))}};function $t(e,n,t){e.vertexAttributes&&e.vertexAttributes.position&&(c(e.transform)?((t==null?void 0:t.geographic)!=null&&t.geographic!==e.transform.geographic&&x.getLogger("esri.geometry.support.meshUtils.offset").warn(`Specifying the 'geographic' parameter (${t.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`),Rt(e.transform,n)):ne(e.spatialReference,t)?Ft(e,n):Mt(e,n))}function Rt(e,n){const t=e.origin;e.origin=ue(y(),t,n)}function Ft(e,n){const t=e.spatialReference,r=e.vertexAttributes.position,o=e.vertexAttributes.normal,i=e.vertexAttributes.tangent,s=new Float64Array(r.length),a=c(o)?new Float32Array(o.length):null,l=c(i)?new Float32Array(i.length):null,u=e.extent.center,f=Lt;Pe(t,[u.x,u.y,u.z],ve,he(t)),Ee(be,ve),q(f,n,be),ge(r,t,s),c(o)&&c(a)&&me(o,r,s,t,a),c(i)&&c(l)&&de(i,r,s,t,l),ke(s,f),xe(s,r,t),c(o)&&c(a)&&ye(a,r,s,t,o),c(i)&&c(l)&&we(l,r,s,t,i),e.vertexAttributesChanged()}function Mt(e,n){ke(e.vertexAttributes.position,n),e.vertexAttributesChanged()}function ke(e,n){if(e)for(let t=0;t<e.length;t+=3)for(let r=0;r<3;r++)e[t+r]+=n[r]}const Lt=y(),ve=ze(),be=pe();function Ot(){const{faceDescriptions:e,faceVertexOffsets:n,uvScales:t}=Dt,r=4*e.length,o=new Float64Array(3*r),i=new Float32Array(3*r),s=new Float32Array(2*r),a=new Uint32Array(2*e.length*3);let l=0,u=0,f=0,p=0;for(let g=0;g<e.length;g++){const h=e[g],v=l/3;for(const d of n)a[p++]=v+d;const O=h.corners;for(let d=0;d<4;d++){const $=O[d];let b=0;s[f++]=.25*t[d][0]+h.uvOrigin[0],s[f++]=h.uvOrigin[1]-.25*t[d][1];for(let R=0;R<3;R++)h.axis[R]!==0?(o[l++]=.5*h.axis[R],i[u++]=h.axis[R]):(o[l++]=.5*$[b++],i[u++]=0)}}return{position:o,normal:i,uv:s,faces:a}}function Pt(e,n){const t=e.components[0],r=t.faces,o=kt[n],i=6*o,s=new Array(6),a=new Array(r.length-6);let l=0,u=0;for(let f=0;f<r.length;f++)f>=i&&f<i+6?s[l++]=r[f]:a[u++]=r[f];if(c(e.vertexAttributes.uv)){const f=new Float32Array(e.vertexAttributes.uv),p=4*o*2,g=[0,1,1,1,1,0,0,0];for(let h=0;h<g.length;h++)f[p+h]=g[h];e.vertexAttributes.uv=f}return e.components=[new U({faces:s,material:t.material}),new U({faces:a})],e}function Et(e=0){const n=Math.round(8*2**e),t=2*n,r=(n-1)*(t+1)+2*t,o=new Float64Array(3*r),i=new Float32Array(3*r),s=new Float32Array(2*r),a=new Uint32Array(3*((n-1)*t*2));let l=0,u=0,f=0,p=0;for(let g=0;g<=n;g++){const h=g/n*Math.PI+.5*Math.PI,v=Math.cos(h),O=Math.sin(h);m[2]=O;const d=g===0||g===n,$=d?t-1:t;for(let b=0;b<=$;b++){const R=b/$*2*Math.PI;m[0]=-Math.sin(R)*v,m[1]=Math.cos(R)*v;for(let P=0;P<3;P++)o[l]=.5*m[P],i[l]=m[P],++l;s[u++]=(b+(d?.5:0))/t,s[u++]=g/n,g!==0&&b!==t&&(g!==n&&(a[f++]=p,a[f++]=p+1,a[f++]=p-t),g!==1&&(a[f++]=p,a[f++]=p-t,a[f++]=p-t-1)),p++}}return{position:o,normal:i,uv:s,faces:a}}function It(e=0){const t=Math.round(16*2**e),r=(5-1)*(t+1)+2*t,o=new Float64Array(3*r),i=new Float32Array(3*r),s=new Float32Array(2*r),a=new Uint32Array(3*(4*t));let l=0,u=0,f=0,p=0,g=0;for(let h=0;h<=5;h++){const v=h===0||h===5,O=h<=1||h>=5-1,d=h===2||h===4,$=v?t-1:t;for(let b=0;b<=$;b++){const R=b/$*2*Math.PI,P=v?0:.5;m[0]=P*Math.sin(R),m[1]=P*-Math.cos(R),m[2]=h<=2?.5:-.5;for(let z=0;z<3;z++)o[l++]=m[z],i[u++]=O?z===2?h<=1?1:-1:0:z===2?0:m[z]/P;s[f++]=(b+(v?.5:0))/t,s[f++]=h<=1?1*h/3:h<=3?1*(h-2)/3+1/3:1*(h-4)/3+2/3,d||h===0||b===t||(h!==5&&(a[p++]=g,a[p++]=g+1,a[p++]=g-t),h!==1&&(a[p++]=g,a[p++]=g-t,a[p++]=g-t-1)),g++}}return{position:o,normal:i,uv:s,faces:a}}function Ct(e,n){const t=typeof n=="number"?n:n!=null?n.width:1,r=typeof n=="number"?n:n!=null?n.height:1;switch(e){case"up":case"down":return{width:t,depth:r};case"north":case"south":return{width:t,height:r};case"east":case"west":return{depth:t,height:r}}}function _t(e){const n=B.facingAxisOrderSwap[e],t=B.position,r=B.normal,o=new Float64Array(t.length),i=new Float32Array(r.length);let s=0;for(let a=0;a<4;a++){const l=s;for(let u=0;u<3;u++){const f=n[u],p=Math.abs(f)-1,g=f>=0?1:-1;o[s]=t[l+p]*g,i[s]=r[l+p]*g,s++}}return{position:o,normal:i,uv:new Float32Array(B.uv),faces:new Uint32Array(B.faces),isPlane:!0}}const S=1,D=2,k=3,B={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[k,S,D],west:[-k,-S,D],north:[-S,k,D],south:[S,-k,D],up:[S,D,k],down:[S,-D,-k]}};function Z(e,n,t){e.isPlane||zt(e),St(e,t==null?void 0:t.size);const{vertexAttributes:r,transform:o}=ft(e,n,t);return{vertexAttributes:new K({...r,uv:e.uv}),transform:o,components:[new U({faces:e.faces,material:t&&t.material||null})],spatialReference:n.spatialReference}}function zt(e){for(let n=0;n<e.position.length;n+=3)e.position[n+2]+=.5}function St(e,n){if(n==null)return;const t=typeof n=="number"?[n,n,n]:[n.width!=null?n.width:1,n.depth!=null?n.depth:1,n.height!=null?n.height:1];E[0]=t[0],E[4]=t[1],E[8]=t[2];for(let r=0;r<e.position.length;r+=3){for(let o=0;o<3;o++)m[o]=e.position[r+o];q(m,m,E);for(let o=0;o<3;o++)e.position[r+o]=m[o]}if(t[0]!==t[1]||t[1]!==t[2]){E[0]=1/t[0],E[4]=1/t[1],E[8]=1/t[2];for(let r=0;r<e.normal.length;r+=3){for(let o=0;o<3;o++)m[o]=e.normal[r+o];q(m,m,E),Xe(m,m);for(let o=0;o<3;o++)e.normal[r+o]=m[o]}}}const Dt={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},kt={south:0,east:1,north:2,west:3,up:4,down:5},m=y(),E=pe(),je=x.getLogger("esri.geometry.support.meshUtils.rotate");function jt(e,n,t){if(!e.vertexAttributes||!e.vertexAttributes.position||n[3]===0)return;const r=e.spatialReference;if(c(e.transform)){(t==null?void 0:t.geographic)!=null&&t.geographic!==e.transform.geographic&&je.warn(`Specifying the 'geographic' parameter (${t.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`);const o=(t==null?void 0:t.origin)??e.transform.getOriginPoint(r);Tt(e.transform,n,o)}else{const o=(t==null?void 0:t.origin)??e.origin;ne(e.spatialReference,t)?Gt(e,n,o):Nt(e,n,o)}}function Tt(e,n,t){const r=Ie(T,t.x,t.y,t.z),o=H(T,r,e.origin);e.applyLocalInverse(o,Ae),e.rotation=ae(e.rotation,n,V()),e.applyLocalInverse(o,o),H(o,o,Ae),e.translation=ue(y(),e.translation,o)}function Gt(e,n,t){const r=e.spatialReference,o=he(r),i=Te;C(t,i,o)||C(e.origin,i,o);const s=e.vertexAttributes.position,a=e.vertexAttributes.normal,l=e.vertexAttributes.tangent,u=new Float64Array(s.length),f=c(a)?new Float32Array(a.length):null,p=c(l)?new Float32Array(l.length):null;Pe(o,i,te,o),Ee(Re,te);const g=$e;q(le($e),le(n),Re),g[3]=n[3],ge(s,r,u),c(a)&&c(f)&&me(a,s,u,r,f),c(l)&&c(p)&&de(l,s,u,r,p),N(u,g,3,i),xe(u,s,r),c(a)&&c(f)&&(N(f,g,3),ye(f,s,u,r,a)),c(l)&&c(p)&&(N(p,g,4),we(p,s,u,r,l)),e.vertexAttributesChanged()}function Nt(e,n,t){const r=Te;if(!C(t,r,e.spatialReference)){const o=e.origin;r[0]=o.x,r[1]=o.y,r[2]=o.z,je.error(`Failed to project specified origin (wkid:${t.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}).`)}N(e.vertexAttributes.position,n,3,r),N(e.vertexAttributes.normal,n,3),N(e.vertexAttributes.tangent,n,4),e.vertexAttributesChanged()}function N(e,n,t,r=Ce){if(!Y(e)){Ye(te,at(n),le(n));for(let o=0;o<e.length;o+=t){for(let i=0;i<3;i++)T[i]=e[o+i]-r[i];qe(T,T,te);for(let i=0;i<3;i++)e[o+i]=T[i]+r[i]}}}const T=y(),Ae=y(),$e=V(),te=ze(),Re=pe(),Te=y(),Ge=x.getLogger("esri.geometry.support.meshUtils.scale");function Ut(e,n,t){if(!e.vertexAttributes||!e.vertexAttributes.position)return;const r=e.spatialReference;if(c(e.transform)){(t==null?void 0:t.geographic)!=null&&t.geographic!==e.transform.geographic&&Ge.warn(`Specifying the 'geographic' parameter (${t.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`);const o=(t==null?void 0:t.origin)??e.transform.getOriginPoint(r);Bt(e.transform,n,o)}else{const o=ne(e.spatialReference,t),i=t&&t.origin||e.origin;o?Vt(e,n,i):Zt(e,n,i)}}function Bt(e,n,t){const r=Ie(G,t.x,t.y,t.z),o=H(G,r,e.origin);e.applyLocalInverse(o,Fe);const i=_e(y(),e.scale,n);e.scale=i,e.applyLocalInverse(o,o),H(o,o,Fe),e.translation=ue(y(),e.translation,o)}function Vt(e,n,t){const r=e.spatialReference,o=he(r),i=Ue;C(t,i,o)||C(e.origin,i,o);const s=e.vertexAttributes.position,a=e.vertexAttributes.normal,l=e.vertexAttributes.tangent,u=new Float64Array(s.length),f=c(a)?new Float32Array(a.length):null,p=c(l)?new Float32Array(l.length):null;ge(s,r,u),c(a)&&c(f)&&me(a,s,u,r,f),c(l)&&c(p)&&de(l,s,u,r,p),Ne(u,n,i),xe(u,s,r),c(a)&&c(f)&&ye(f,s,u,r,a),c(l)&&c(p)&&we(p,s,u,r,l),e.vertexAttributesChanged()}function Zt(e,n,t){const r=Ue;if(!C(t,r,e.spatialReference)){const o=e.origin;r[0]=o.x,r[1]=o.y,r[2]=o.z,Ge.error(`Failed to project specified origin (wkid:${t.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}).`)}Ne(e.vertexAttributes.position,n,r),e.vertexAttributesChanged()}function Ne(e,n,t=Ce){if(e)for(let r=0;r<e.length;r+=3){for(let o=0;o<3;o++)G[o]=e[r+o]-t[o];_e(G,G,n);for(let o=0;o<3;o++)e[r+o]=G[o]+t[o]}}const G=y(),Fe=y(),Ue=y();var M;const _="esri.geometry.Mesh";let w=M=class extends He(Ke.LoadableMixin(Qe(et))){constructor(e){super(e),this.components=null,this.transform=null,this.external=null,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new K,this.type="mesh"}initialize(){(Y(this.external)||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when(()=>{this.handles.add(tt(()=>{var e;return{vertexAttributes:this.vertexAttributes,components:(e=this.components)==null?void 0:e.map(n=>n.clone())}},()=>this._set("external",null),{once:!0,sync:!0}))})}get hasExtent(){return!this.loaded&&c(this.external)&&c(this.external.extent)||this.loaded&&this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0)}get _boundingInfo(){const e=this.vertexAttributes.position,n=this.spatialReference;if(e.length===0||this.components&&this.components.length===0)return{extent:new ie({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:n}),center:new L({x:0,y:0,z:0,spatialReference:n})};const t=c(this.transform)?this.transform.project(e,n):e;let r=1/0,o=1/0,i=1/0,s=-1/0,a=-1/0,l=-1/0,u=0,f=0,p=0;const g=t.length,h=1/(g/3);let v=0;for(;v<g;){const O=t[v++],d=t[v++],$=t[v++];r=Math.min(r,O),o=Math.min(o,d),i=Math.min(i,$),s=Math.max(s,O),a=Math.max(a,d),l=Math.max(l,$),u+=h*O,f+=h*d,p+=h*$}return{extent:new ie({xmin:r,ymin:o,zmin:i,xmax:s,ymax:a,zmax:l,spatialReference:n}),center:new L({x:u,y:f,z:p,spatialReference:n})}}get anchor(){if(c(this.transform))return this.transform.getOriginPoint(this.spatialReference);const e=this._boundingInfo;return new L({x:e.center.x,y:e.center.y,z:e.extent.zmin,spatialReference:this.spatialReference})}get origin(){return c(this.transform)?this.transform.getOriginPoint(this.spatialReference):this._boundingInfo.center}get extent(){return!this.loaded&&c(this.external)&&c(this.external.extent)?this.external.extent.clone():this._boundingInfo.extent}addComponent(e){this.loaded?(this.components||(this.components=[]),this.components.push(U.from(e)),this.notifyChange("components")):x.getLogger(this.declaredClass).error("addComponent()","Mesh must be loaded before applying operations")}removeComponent(e){if(this.loaded){if(this.components){const n=this.components.indexOf(e);if(n!==-1)return this.components.splice(n,1),void this.notifyChange("components")}x.getLogger(this.declaredClass).error("removeComponent()","Provided component is not part of the list of components")}else x.getLogger(this.declaredClass).error("removeComponent()","Mesh must be loaded before applying operations")}rotate(e,n,t,r){return J(oe.x,e,j),J(oe.y,n,Me),J(oe.z,t,Le),ae(j,Me,j),ae(j,Le,j),jt(this,j,r),this}offset(e,n,t,r){return this.loaded?(W[0]=e,W[1]=n,W[2]=t,$t(this,W,r),this):(x.getLogger(this.declaredClass).error("offset()","Mesh must be loaded before applying operations"),this)}scale(e,n){return this.loaded?(Ut(this,e,n),this):(x.getLogger(this.declaredClass).error("scale()","Mesh must be loaded before applying operations"),this)}centerAt(e,n){return this.loaded?(pt(this,e,n),this):(x.getLogger(this.declaredClass).error("centerAt()","Mesh must be loaded before applying operations"),this)}load(e){return c(this.external)&&this.addResolvingPromise(wt(this,this.external.source,e)),Promise.resolve(this)}updateExternalSource(e){this._set("external",e)}clone(){let e=null;if(this.components){const t=new Map,r=new Map;e=this.components.map(o=>o.cloneWithDeduplication(t,r))}const n={components:e,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes.clone(),transform:c(this.transform)?this.transform.clone():null,external:c(this.external)?{source:this.external.source,extent:c(this.external.extent)?this.external.extent.clone():null}:null};return new M(n)}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(e){const n=X(()=>import("./gltfexport-107edd8e.js"),["assets/gltfexport-107edd8e.js","assets/index-84d82762.js","assets/index-0be7f32f.css","assets/quat-125beff5.js","assets/mat3f64-221ce671.js","assets/quatf64-3363c48e.js","assets/MeshComponent-80691241.js","assets/imageUtils-c2d0d1ae.js","assets/georeference-c83dc3c2.js","assets/mat4f64-65d35099.js","assets/spatialReferenceEllipsoidUtils-c9ea4771.js","assets/axisAngleDegrees-7e4701ef.js","assets/BufferView-578ce2f0.js","assets/vec33-538b5e42.js","assets/projection-2cd29501.js","assets/enums-64ab819c.js","assets/imageutils-2f9a6a58.js","assets/resourceUtils-905695c0.js","assets/basicInterfaces-04e01328.js"]),t=this.load(),r=await Promise.all([n,t]),{toBinaryGLTF:o}=r[0];return o(this,e)}static createBox(e,n){if(!(e instanceof L))return x.getLogger(_).error(".createBox()","expected location to be a Point instance"),null;const t=new M(Z(Ot(),e,n));return n&&n.imageFace&&n.imageFace!=="all"?Pt(t,n.imageFace):t}static createSphere(e,n){return e instanceof L?new M(Z(Et(n&&n.densificationFactor||0),e,n)):(x.getLogger(_).error(".createSphere()","expected location to be a Point instance"),null)}static createCylinder(e,n){return e instanceof L?new M(Z(It(n&&n.densificationFactor||0),e,n)):(x.getLogger(_).error(".createCylinder()","expected location to be a Point instance"),null)}static createPlane(e,n){if(!(e instanceof L))return x.getLogger(_).error(".createPlane()","expected location to be a Point instance"),null;const t=(n==null?void 0:n.facing)??"up",r=Ct(t,n==null?void 0:n.size);return new M(Z(_t(t),e,{...n,size:r}))}static createFromPolygon(e,n){if(!(e instanceof nt))return x.getLogger(_).error(".createFromPolygon()","expected polygon to be a Polygon instance"),null;const t=ut(e);return new M({vertexAttributes:new K({position:t.position}),components:[new U({faces:t.faces,shading:"flat",material:(n==null?void 0:n.material)??null})],spatialReference:e.spatialReference})}static async createFromGLTF(e,n,t){if(!(e instanceof L))throw x.getLogger(_).error(".createfromGLTF()","expected location to be a Point instance"),new se("invalid-input","Expected location to be a Point instance");const{loadGLTFMesh:r}=await fe(X(()=>import("./loadGLTFMesh-1e90e0bd.js"),["assets/loadGLTFMesh-1e90e0bd.js","assets/index-84d82762.js","assets/index-0be7f32f.css","assets/mat3f64-221ce671.js","assets/MeshComponent-80691241.js","assets/imageUtils-c2d0d1ae.js","assets/BufferView-578ce2f0.js","assets/vec33-538b5e42.js","assets/DefaultMaterial_COLOR_GAMMA-8ad97d4c.js","assets/types-e1c0a5bf.js","assets/mat4f64-65d35099.js","assets/enums-64ab819c.js","assets/quat-125beff5.js","assets/quatf64-3363c48e.js","assets/resourceUtils-905695c0.js","assets/basicInterfaces-04e01328.js","assets/Indices-27da97a1.js","assets/georeference-c83dc3c2.js","assets/spatialReferenceEllipsoidUtils-c9ea4771.js","assets/axisAngleDegrees-7e4701ef.js","assets/projection-2cd29501.js"]),t);return new M(await r(e,n,t))}static createWithExternalSource(e,n,t){var s;const r=(t==null?void 0:t.extent)??null,o=((s=t==null?void 0:t.transform)==null?void 0:s.clone())??new Q;o.origin=[e.x,e.y,e.z??0];const i=e.spatialReference;return new M({external:{source:n,extent:r},transform:o,spatialReference:i})}static createIncomplete(e,n){var i;const t=((i=n==null?void 0:n.transform)==null?void 0:i.clone())??new Q;t.origin=[e.x,e.y,e.z??0];const r=e.spatialReference,o=new M({transform:t,spatialReference:r});return o.addResolvingPromise(Promise.reject(new se("mesh-incomplete","Mesh resources are not complete"))),o}};A([F({type:[U],json:{write:!0}})],w.prototype,"components",void 0),A([F({type:Q,json:{write:!0}})],w.prototype,"transform",void 0),A([F({constructOnly:!0})],w.prototype,"external",void 0),A([F({readOnly:!0})],w.prototype,"hasExtent",null),A([F({readOnly:!0})],w.prototype,"_boundingInfo",null),A([F({readOnly:!0})],w.prototype,"anchor",null),A([F({readOnly:!0})],w.prototype,"origin",null),A([F({readOnly:!0,json:{read:!1}})],w.prototype,"extent",null),A([F({readOnly:!0,json:{read:!1,write:!0,default:!0}})],w.prototype,"hasZ",void 0),A([F({readOnly:!0,json:{read:!1,write:!0,default:!1}})],w.prototype,"hasM",void 0),A([F({type:K,nonNullable:!0,json:{write:!0}})],w.prototype,"vertexAttributes",void 0),w=M=A([rt(_)],w);const oe={x:re(1,0,0),y:re(0,1,0),z:re(0,0,1)},j=V(),Me=V(),Le=V(),W=y(),Oe=w;function xn(e,n,t){const r=t.features;t.features=[],delete t.geometryType;const o=ot.fromJSON(t);if(o.geometryType="mesh",!t.assetMaps)return o;const i=qt(n,t.assetMaps),s=o.spatialReference??st.WGS84,a=t.globalIdFieldName,{outFields:l}=e,u=c(l)&&l.length>0?Wt(l.includes("*")?null:new Set(l)):()=>({});for(const f of r){const p=Jt(f,a,s,n,i);c(p)&&o.features.push(new it({geometry:p,attributes:u(f)}))}return o}function Wt(e){return({attributes:n})=>{if(!n)return{};if(!e)return n;for(const t in n)e.has(t)||delete n[t];return n}}function Jt(e,n,t,r,o){const i=e.attributes[n],s=o.get(i);if(s==null||s.status===I.FAILED||s.url==null)return null;const a=Xt(e,t,r),l=ie.fromJSON(e.geometry);l.spatialReference=t;const u=Yt(e.attributes,r,s.projectVertices);return s.status===I.PENDING?Oe.createIncomplete(a,{extent:l,transform:u}):Oe.createWithExternalSource(a,[{name:s.name,source:s.url}],{extent:l,transform:u})}function Xt({attributes:e},n,{transformFieldRoles:t}){return new L({x:e[t.originX],y:e[t.originY],z:e[t.originZ],spatialReference:n})}function Yt(e,{transformFieldRoles:n},t){return new Q({translation:[e[n.translationX],-e[n.translationZ],e[n.translationY]],rotation:J([e[n.rotationX],e[n.rotationZ],e[n.rotationY]],e[n.rotationDeg]),scale:[e[n.scaleX],e[n.scaleY],e[n.scaleZ]],geographic:t})}var I;function qt(e,n){const t=new Map;for(const r of n){const o=r.parentGlobalId;if(o==null)continue;const i=r.assetName,s=r.assetURL,a=r.conversionStatus;let l=t.get(o);if(l==null)switch(l={name:i,status:I.FAILED,url:s,projectVertices:Ht(r.flags).projectVertices},t.set(o,l),a){case"COMPLETED":case"SUBMITTED":l.status=I.COMPLETED;break;case"INPROGRESS":l.status=I.PENDING;break;default:l.status=I.FAILED}else console.warn(`Multiple asset parts not expected. Ignoring additional parts. conflicting assetname: ${r.assetName}`)}return t}function Ht(e){return{projectVertices:e.includes("PROJECT_VERTICES")}}(function(e){e[e.FAILED=0]="FAILED",e[e.PENDING=1]="PENDING",e[e.COMPLETED=2]="COMPLETED"})(I||(I={}));export{xn as meshFeatureSetFromJSON};
