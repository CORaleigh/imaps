import{ka as Br,at as I,aC as R,J as _,aS as Dr,ae as Gr,cd as ue,es as wt,ca as ht,dC as Jt,_ as Zt,a_ as Di,kq as Gi,kr as Mt,M as Hi,ks as hr,kt as Vi,ir as Ye,ku as Je,ac as dr,kv as Ui,a9 as ji,ab as Wi,fj as qi,el as dt,jK as ur,a5 as ki,fN as Ne,fD as Hr,cJ as X,eu as ut,f$ as Ae,cB as Xi,ee as Yi,ef as Ji,cG as U,d4 as Zi,ch as Ki,d9 as Vr,kw as Qi,kk as ea,d0 as ie,du as Dt,ci as Gt,dw as ta,aG as Z,aH as de,d3 as ra,eg as Et,c3 as ia,e as $e,aw as Ot,dP as Kt,aE as Qt,d5 as Ht,kx as aa,aD as rt,fd as sa,j6 as fr,eN as na,jm as mr,ky as oa,cM as pr,c_ as ca,j_ as Ur,kz as jr,f0 as Re,fr as la,fZ as ha,cv as Rt,k9 as da}from"./index-53e0d3f6.js";import{t as ua}from"./requestImageUtils-0386f73f.js";import{o as h,n as Me,W as Wr,_ as qr}from"./OrderIndependentTransparency-92d1201d.js";import{D as Ft,c as Ze,t as fa,N as Vt,a as we}from"./basicInterfaces-04e01328.js";import{u as xe,P as le,L as Te,C as se,F as ma,M as ct,G as lt,D as tt,Y as kr,V as Xr,E as it,I as Ue,O as te}from"./enums-64ab819c.js";import{E as he,a as pa}from"./Texture-0787b5b8.js";import{_ as ga,f as va,E as _a,x as bt,n as Yr}from"./VertexArrayObject-d229d289.js";import{s as B}from"./Util-5a607d58.js";import{o as gr,r as xa,e as He}from"./mat4f64-65d35099.js";import{w as ba}from"./triangle-cbb245f7.js";import{o as vr,n as Ta}from"./Indices-9b814586.js";import{O as u}from"./VertexAttribute-15d1866a.js";import{t as Sa}from"./doublePrecisionUtils-e3c3d0d8.js";import{e as je}from"./mat3f64-221ce671.js";import{S as Aa}from"./quat-d5f88513.js";import{e as wa}from"./quatf64-3363c48e.js";import{n as Ut,r as Ma}from"./vec3f32-ad1dc57f.js";import{R as Jr}from"./sphere-ca10ea93.js";import{c as _r,x as xr,u as Ea,i as br}from"./BufferView-abbd0a70.js";import{t as ne}from"./VertexElementDescriptor-2925c6af.js";var be;(function(t){t[t.Layer=0]="Layer",t[t.Object=1]="Object",t[t.Mesh=2]="Mesh",t[t.Line=3]="Line",t[t.Point=4]="Point",t[t.Material=5]="Material",t[t.Texture=6]="Texture",t[t.COUNT=7]="COUNT"})(be||(be={}));let er=class{constructor(){this.id=Br()}unload(){}},Oa=class{constructor(e){this.channel=e,this.id=Br()}};function ya(t,e){return I(t)&&(t=[]),t.push(e),t}function Pa(t,e){if(I(t))return null;const r=t.filter(i=>i!==e);return r.length===0?null:r}function mo(t,e,r,i,a){ft[0]=t.get(e,0),ft[1]=t.get(e,1),ft[2]=t.get(e,2),Sa(ft,Fe,3),r.set(a,0,Fe[0]),i.set(a,0,Fe[1]),r.set(a,1,Fe[2]),i.set(a,1,Fe[3]),r.set(a,2,Fe[4]),i.set(a,2,Fe[5])}const ft=R(),Fe=new Float32Array(6);function tr(t,e=!0){t.attributes.add(u.POSITION,"vec2"),e&&t.varyings.add("uv","vec2"),t.vertex.code.add(h`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${e?h`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}var $;(function(t){t[t.Pass=0]="Pass",t[t.Draw=1]="Draw"})($||($={}));let H=class{constructor(e,r,i,a,s=null){this.name=e,this.type=r,this.arraySize=s,this.bind={[$.Pass]:null,[$.Draw]:null},_(i)&&_(a)&&(this.bind[i]=a)}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}},j=class extends H{constructor(e,r){super(e,"vec4",$.Pass,(i,a,s)=>i.setUniform4fv(e,r(a,s)))}};const Zr=Dr.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");let Kr=class{constructor(){this._includedModules=new Map}include(e,r){if(this._includedModules.has(e)){const i=this._includedModules.get(e);if(i!==r){Zr.error("Trying to include shader module multiple times with different sets of options.");const a=new Set;for(const s of Object.keys(i))i[s]!==e[s]&&a.add(s);for(const s of Object.keys(e))i[s]!==e[s]&&a.add(s);a.forEach(s=>console.error(`  ${s}: current ${i[s]} new ${e[s]}`))}}else this._includedModules.set(e,r),e(this.builder,r)}},rr=class extends Kr{constructor(){super(...arguments),this.vertex=new Tr,this.fragment=new Tr,this.attributes=new Ra,this.varyings=new Fa,this.extensions=new jt,this.constants=new Qr}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const r=this.extensions.generateSource(e),i=this.attributes.generateSource(e),a=this.varyings.generateSource(),s=e==="vertex"?this.vertex:this.fragment,n=s.uniforms.generateSource(),o=s.code.generateSource(),l=e==="vertex"?Ca:La,c=this.constants.generateSource().concat(s.constants.generateSource());return`
${r.join(`
`)}

${l}

${c.join(`
`)}

${n.join(`
`)}

${i.join(`
`)}

${a.join(`
`)}

${o.join(`
`)}`}generateBind(e,r){const i=new Map;this.vertex.uniforms.entries.forEach(n=>{const o=n.bind[e];_(o)&&i.set(n.name,o)}),this.fragment.uniforms.entries.forEach(n=>{const o=n.bind[e];_(o)&&i.set(n.name,o)});const a=Array.from(i.values()),s=a.length;return(n,o,l)=>{for(let c=0;c<s;++c)a[c](r,n,o,l)}}},Ia=class{constructor(){this._entries=new Map}add(e){if(!Array.isArray(e))return this._add(e);for(const r of e)this._add(r)}get(e){return this._entries.get(e)}_add(e){if(I(e))Zr.error(`Trying to add null Uniform from ${new Error().stack}.`);else{if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new Gr(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}}generateSource(){return Array.from(this._entries.values()).map(e=>_(e.arraySize)?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`)}get entries(){return Array.from(this._entries.values())}},$a=class{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}},Tr=class extends Kr{constructor(){super(...arguments),this.uniforms=new Ia,this.code=new $a,this.constants=new Qr}get builder(){return this}},Ra=class{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(e){return e==="fragment"?[]:this._entries.map(r=>`attribute ${r[1]} ${r[0]};`)}},Fa=class{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(){return this._entries.map(e=>`varying ${e[1]} ${e[0]};`)}},jt=class Wt{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const r=e==="vertex"?Wt.ALLOWLIST_VERTEX:Wt.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(i=>r.includes(i)).map(i=>`#extension ${i} : enable`)}};jt.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],jt.ALLOWLIST_VERTEX=[];let Qr=class C{constructor(){this._entries=new Set}add(e,r,i){let a="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":a=C._numberToFloatStr(i);break;case"int":a=C._numberToIntStr(i);break;case"bool":a=i.toString();break;case"vec2":a=`vec2(${C._numberToFloatStr(i[0])},                            ${C._numberToFloatStr(i[1])})`;break;case"vec3":a=`vec3(${C._numberToFloatStr(i[0])},                            ${C._numberToFloatStr(i[1])},                            ${C._numberToFloatStr(i[2])})`;break;case"vec4":a=`vec4(${C._numberToFloatStr(i[0])},                            ${C._numberToFloatStr(i[1])},                            ${C._numberToFloatStr(i[2])},                            ${C._numberToFloatStr(i[3])})`;break;case"ivec2":a=`ivec2(${C._numberToIntStr(i[0])},                             ${C._numberToIntStr(i[1])})`;break;case"ivec3":a=`ivec3(${C._numberToIntStr(i[0])},                             ${C._numberToIntStr(i[1])},                             ${C._numberToIntStr(i[2])})`;break;case"ivec4":a=`ivec4(${C._numberToIntStr(i[0])},                             ${C._numberToIntStr(i[1])},                             ${C._numberToIntStr(i[2])},                             ${C._numberToIntStr(i[3])})`;break;case"mat2":case"mat3":case"mat4":a=`${r}(${Array.prototype.map.call(i,s=>C._numberToFloatStr(s)).join(", ")})`}return this._entries.add(`const ${r} ${e} = ${a};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}};const La=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif`,Ca=`precision highp float;
precision highp sampler2D;`,ir="Size",Pt="InvSize";function Tt(t,e,r=!1,i=0){if(t.hasWebGL2Context){const a=h`vec2(textureSize(${e}, ${h.int(i)}))`;return r?"(1.0 / "+a+")":a}return r?e+Pt:e+ir}function za(t,e,r,i=null,a=0){if(t.hasWebGL2Context)return h`texelFetch(${e}, ivec2(${r}), ${h.int(a)})`;let s=h`texture2D(${e}, ${r} * `;return s+=i?h`(${i}))`:h`${e+Pt})`,s}let ae=class extends H{constructor(e,r){super(e,"vec2",$.Pass,(i,a,s)=>i.setUniform2fv(e,r(a,s)))}};var q;(function(t){t[t.None=0]="None",t[t.Size=1]="Size",t[t.InvSize=2]="InvSize"})(q||(q={}));let De=class extends H{constructor(e,r){super(e,"sampler2D",$.Pass,(i,a,s)=>i.bindTexture(e,r(a,s)))}};function at(t,e,r=q.None){const i=[new De(t,e)];if(r&q.Size){const a=t+ir;i.push(new ae(a,(s,n)=>{const o=e(s,n);return _(o)?ue(Sr,o.descriptor.width,o.descriptor.height):wt}))}if(r&q.InvSize){const a=t+Pt;i.push(new ae(a,(s,n)=>{const o=e(s,n);return _(o)?ue(Sr,1/o.descriptor.width,1/o.descriptor.height):wt}))}return i}const Sr=ht();let ei=class extends Me{constructor(){super(...arguments),this.color=Jt(1,1,1,1)}};function Na(){const t=new rr;return t.include(tr),t.fragment.uniforms.add([new De("tex",e=>e.texture),new j("uColor",e=>e.color)]),t.fragment.code.add(h`void main() {
vec4 texColor = texture2D(tex, uv);
gl_FragColor = texColor * uColor;
}`),t}const Oo=Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:ei,build:Na},Symbol.toStringTag,{value:"Module"}));function Ba(){if(I(Lt)){const t=e=>Di(`esri/libs/basisu/${e}`);Lt=Zt(()=>import("./basis_transcoder-e0466ff6.js"),["assets/basis_transcoder-e0466ff6.js","assets/_commonjsHelpers-2f3e7994.js"]).then(e=>e.b).then(({default:e})=>e({locateFile:t}).then(r=>(r.initializeBasis(),delete r.then,r)))}return Lt}let Lt;var Be;(function(t){t[t.ETC1_RGB=0]="ETC1_RGB",t[t.ETC2_RGBA=1]="ETC2_RGBA",t[t.BC1_RGB=2]="BC1_RGB",t[t.BC3_RGBA=3]="BC3_RGBA",t[t.BC4_R=4]="BC4_R",t[t.BC5_RG=5]="BC5_RG",t[t.BC7_M6_RGB=6]="BC7_M6_RGB",t[t.BC7_M5_RGBA=7]="BC7_M5_RGBA",t[t.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",t[t.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",t[t.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",t[t.ATC_RGB=11]="ATC_RGB",t[t.ATC_RGBA=12]="ATC_RGBA",t[t.FXT1_RGB=17]="FXT1_RGB",t[t.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",t[t.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",t[t.ETC2_EAC_R11=20]="ETC2_EAC_R11",t[t.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",t[t.RGBA32=13]="RGBA32",t[t.RGB565=14]="RGB565",t[t.BGR565=15]="BGR565",t[t.RGBA4444=16]="RGBA4444"})(Be||(Be={}));let oe=null,mt=null;async function ti(){return I(mt)&&(mt=Ba(),oe=await mt),mt}function Da(t,e){if(I(oe))return t.byteLength;const r=new oe.BasisFile(new Uint8Array(t)),i=ii(r)?ri(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),e):0;return r.close(),r.delete(),i}function Ga(t,e){if(I(oe))return t.byteLength;const r=new oe.KTX2File(new Uint8Array(t)),i=ai(r)?ri(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),e):0;return r.close(),r.delete(),i}function ri(t,e,r,i,a){const s=ga(e?xe.COMPRESSED_RGBA8_ETC2_EAC:xe.COMPRESSED_RGB8_ETC2),n=a&&t>1?(4**t-1)/(3*4**(t-1)):1;return Math.ceil(r*i*s*n)}function ii(t){return t.getNumImages()>=1&&!t.isUASTC()}function ai(t){return t.getFaces()>=1&&t.isETC1S()}async function Ha(t,e,r){I(oe)&&(oe=await ti());const i=new oe.BasisFile(new Uint8Array(r));if(!ii(i))return null;i.startTranscoding();const a=si(t,e,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),(s,n)=>i.getImageTranscodedSizeInBytes(0,s,n),(s,n,o)=>i.transcodeImage(o,0,s,n,0,0));return i.close(),i.delete(),a}async function Va(t,e,r){I(oe)&&(oe=await ti());const i=new oe.KTX2File(new Uint8Array(r));if(!ai(i))return null;i.startTranscoding();const a=si(t,e,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),(s,n)=>i.getImageTranscodedSizeInBytes(s,0,0,n),(s,n,o)=>i.transcodeImage(o,s,0,0,n,0,-1,-1));return i.close(),i.delete(),a}function si(t,e,r,i,a,s,n,o){const{compressedTextureETC:l,compressedTextureS3TC:c}=t.capabilities,[d,f]=l?i?[Be.ETC2_RGBA,xe.COMPRESSED_RGBA8_ETC2_EAC]:[Be.ETC1_RGB,xe.COMPRESSED_RGB8_ETC2]:c?i?[Be.BC3_RGBA,xe.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[Be.BC1_RGB,xe.COMPRESSED_RGB_S3TC_DXT1_EXT]:[Be.RGBA32,le.RGBA],m=e.hasMipmap?r:Math.min(1,r),p=[];for(let T=0;T<m;T++)p.push(new Uint8Array(n(T,d))),o(T,d,p[T]);const v=p.length>1,x=v?Te.LINEAR_MIPMAP_LINEAR:Te.LINEAR,b={...e,samplingMode:x,hasMipmap:v,internalFormat:f,width:a,height:s};return new he(t,b,{type:"compressed",levels:p})}const Ke=Dr.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),Ua=542327876,ja=131072,Wa=4;function ar(t){return t.charCodeAt(0)+(t.charCodeAt(1)<<8)+(t.charCodeAt(2)<<16)+(t.charCodeAt(3)<<24)}function qa(t){return String.fromCharCode(255&t,t>>8&255,t>>16&255,t>>24&255)}const ka=ar("DXT1"),Xa=ar("DXT3"),Ya=ar("DXT5"),Ja=31,Za=0,Ka=1,Qa=2,es=3,ts=4,rs=7,is=20,as=21;function ss(t,e,r){const{textureData:i,internalFormat:a,width:s,height:n}=Gi(ns(r,e.hasMipmap??!1));return e.samplingMode=i.levels.length>1?Te.LINEAR_MIPMAP_LINEAR:Te.LINEAR,e.hasMipmap=i.levels.length>1,e.internalFormat=a,e.width=s,e.height=n,new he(t,e,i)}function ns(t,e){const r=new Int32Array(t,0,Ja);if(r[Za]!==Ua)return Ke.error("Invalid magic number in DDS header"),null;if(!(r[is]&Wa))return Ke.error("Unsupported format, must contain a FourCC code"),null;const i=r[as];let a,s;switch(i){case ka:a=8,s=xe.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Xa:a=16,s=xe.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Ya:a=16,s=xe.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return Ke.error("Unsupported FourCC code:",qa(i)),null}let n=1,o=r[ts],l=r[es];!(3&o)&&!(3&l)||(Ke.warn("Rounding up compressed texture size to nearest multiple of 4."),o=o+3&-4,l=l+3&-4);const c=o,d=l;let f,m;r[Qa]&ja&&e!==!1&&(n=Math.max(1,r[rs])),n===1||Mt(o)&&Mt(l)||(Ke.warn("Ignoring mipmaps of non power of two sized compressed texture."),n=1);let p=r[Ka]+4;const v=[];for(let x=0;x<n;++x)m=(o+3>>2)*(l+3>>2)*a,f=new Uint8Array(t,p,m),v.push(f),p+=m,o=Math.max(1,o>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:v},internalFormat:s,width:c,height:d}}const It=new Map([[u.POSITION,0],[u.NORMAL,1],[u.UV0,2],[u.COLOR,3],[u.SIZE,4],[u.TANGENT,4],[u.AUXPOS1,5],[u.SYMBOLCOLOR,5],[u.AUXPOS2,6],[u.FEATUREATTRIBUTE,6],[u.INSTANCEFEATUREATTRIBUTE,6],[u.INSTANCECOLOR,7],[u.OBJECTANDLAYERIDCOLOR,7],[u.OBJECTANDLAYERIDCOLOR_INSTANCED,7],[u.MODEL,8],[u.MODELNORMAL,12],[u.MODELORIGINHI,11],[u.MODELORIGINLO,15]]);new ne(u.POSITION,3,se.FLOAT,0,12);new ne(u.POSITION,3,se.FLOAT,0,20),new ne(u.UV0,2,se.FLOAT,12,20);new ne(u.POSITION,3,se.FLOAT,0,32),new ne(u.NORMAL,3,se.FLOAT,12,32),new ne(u.UV0,2,se.FLOAT,24,32);new ne(u.POSITION,3,se.FLOAT,0,16),new ne(u.COLOR,4,se.UNSIGNED_BYTE,12,16);const os=[new ne(u.POSITION,2,se.FLOAT,0,8)],cs=[new ne(u.POSITION,2,se.FLOAT,0,16),new ne(u.UV0,2,se.FLOAT,8,16)];let ls=class extends va{};function ni(t,e=os,r=It,i=-1,a=1){let s=null;return e===cs?s=new Float32Array([i,i,0,0,a,i,1,0,i,a,0,1,a,a,1,1]):s=new Float32Array([i,i,a,i,i,a,a,a]),new ls(t,r,{geometry:e},{geometry:_a.createVertex(t,ma.STATIC_DRAW,s)})}function Po(t){return new he(t,{target:ct.TEXTURE_2D,pixelFormat:le.RGBA,dataType:lt.UNSIGNED_BYTE,samplingMode:Te.NEAREST,width:1,height:1},new Uint8Array([255,255,255,255]))}let Io=class St extends er{constructor(e,r){super(),this._data=e,this.type=be.Texture,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new Hi,this._passParameters=new ei,this.params=r||{},this.params.mipmap=this.params.mipmap!==!1,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:tt.REPEAT,t:tt.REPEAT},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||Ft.STRETCH,this.estimatedTexMemRequired=St._estimateTexMemRequired(this._data,this.params),this._startPreload()}_startPreload(){const e=this._data;I(e)||(e instanceof HTMLVideoElement?this._startPreloadVideoElement(e):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!(hr(e.src)||e.preload==="auto"&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const r=!e.paused;if(e.src=e.src,r&&e.autoplay){const i=()=>{e.removeEventListener("canplay",i),e.play()};e.addEventListener("canplay",i)}}}_startPreloadImageElement(e){Vi(e.src)||hr(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static _getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static _estimateTexMemRequired(e,r){if(I(e))return 0;if(Ye(e)||Je(e))return r.encoding===Ze.KTX2_ENCODING?Ga(e,!!r.mipmap):r.encoding===Ze.BASIS_ENCODING?Da(e,!!r.mipmap):e.byteLength;const{width:i,height:a}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?St._getDataDimensions(e):r;return(r.mipmap?4/3:1)*i*a*(r.components||4)||0}dispose(){this._data=void 0}get width(){return this.params.width}get height(){return this.params.height}_createDescriptor(e){return{target:ct.TEXTURE_2D,pixelFormat:le.RGBA,dataType:lt.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?Te.LINEAR_MIPMAP_LINEAR:Te.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:this.params.maxAnisotropy??(this.params.mipmap?e.parameters.maxMaxAnisotropy:1)}}get glTexture(){return this._glTexture}load(e,r){if(_(this._glTexture))return this._glTexture;if(_(this._loadingPromise))return this._loadingPromise;const i=this._data;return I(i)?(this._glTexture=new he(e,this._createDescriptor(e),null),this._glTexture):typeof i=="string"?this._loadFromURL(e,r,i):i instanceof Image?this._loadFromImageElement(e,r,i):i instanceof HTMLVideoElement?this._loadFromVideoElement(e,r,i):i instanceof ImageData||i instanceof HTMLCanvasElement?this._loadFromImage(e,i,r):(Ye(i)||Je(i))&&this.params.encoding===Ze.DDS_ENCODING?(this._data=void 0,this._loadFromDDSData(e,i)):(Ye(i)||Je(i))&&this.params.encoding===Ze.KTX2_ENCODING?(this._data=void 0,this._loadFromKTX2(e,i)):(Ye(i)||Je(i))&&this.params.encoding===Ze.BASIS_ENCODING?(this._data=void 0,this._loadFromBasis(e,i)):Je(i)?this._loadFromPixelData(e,i):Ye(i)?this._loadFromPixelData(e,new Uint8Array(i)):null}get requiresFrameUpdates(){return this._data instanceof HTMLVideoElement}frameUpdate(e,r,i){if(!(this._data instanceof HTMLVideoElement)||I(this._glTexture)||this._data.readyState<st.HAVE_CURRENT_DATA||i===this._data.currentTime)return i;if(_(this._powerOfTwoStretchInfo)){const{framebuffer:a,vao:s,sourceTexture:n}=this._powerOfTwoStretchInfo;n.setData(this._data),this._drawStretchedTexture(e,r,a,s,n,this._glTexture)}else{const{videoWidth:a,videoHeight:s}=this._data,{width:n,height:o}=this._glTexture.descriptor;a!==n||s!==o?this._glTexture.updateData(0,0,0,Math.min(a,n),Math.min(s,o),this._data):this._glTexture.setData(this._data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.params.updateCallback&&this.params.updateCallback(),this._data.currentTime}_loadFromDDSData(e,r){return this._glTexture=ss(e,this._createDescriptor(e),r),this._glTexture}_loadFromKTX2(e,r){return this._loadAsync(()=>Va(e,this._createDescriptor(e),r).then(i=>(this._glTexture=i,i)))}_loadFromBasis(e,r){return this._loadAsync(()=>Ha(e,this._createDescriptor(e),r).then(i=>(this._glTexture=i,i)))}_loadFromPixelData(e,r){B(this.params.width>0&&this.params.height>0);const i=this._createDescriptor(e);return i.pixelFormat=this.params.components===1?le.LUMINANCE:this.params.components===3?le.RGB:le.RGBA,i.width=this.params.width,i.height=this.params.height,this._glTexture=new he(e,i,r),this._glTexture}_loadFromURL(e,r,i){return this._loadAsync(async a=>{const s=await ua(i,{signal:a});return dr(a),this._loadFromImage(e,s,r)})}_loadFromImageElement(e,r,i){return i.complete?this._loadFromImage(e,i,r):this._loadAsync(async a=>{const s=await Ui(i,i.src,!1,a);return dr(a),this._loadFromImage(e,s,r)})}_loadFromVideoElement(e,r,i){return i.readyState>=st.HAVE_CURRENT_DATA?this._loadFromImage(e,i,r):this._loadFromVideoElementAsync(e,r,i)}_loadFromVideoElementAsync(e,r,i){return this._loadAsync(a=>new Promise((s,n)=>{const o=()=>{i.removeEventListener("loadeddata",l),i.removeEventListener("error",c),ki(d)},l=()=>{i.readyState>=st.HAVE_CURRENT_DATA&&(o(),s(this._loadFromImage(e,i,r)))},c=f=>{o(),n(f||new Gr("Failed to load video"))};i.addEventListener("loadeddata",l),i.addEventListener("error",c);const d=ji(a,()=>c(Wi()))}))}_loadFromImage(e,r,i){const a=St._getDataDimensions(r);this.params.width=a.width,this.params.height=a.height;const s=this._createDescriptor(e);return s.pixelFormat=this.params.components===3?le.RGB:le.RGBA,!this._requiresPowerOfTwo(e,s)||Mt(a.width)&&Mt(a.height)?(s.width=a.width,s.height=a.height,this._glTexture=new he(e,s,r),this._glTexture):(this._glTexture=this._makePowerOfTwoTexture(e,r,a,s,i),this._glTexture)}_loadAsync(e){const r=new AbortController;this._loadingController=r;const i=e(r.signal);this._loadingPromise=i;const a=()=>{this._loadingController===r&&(this._loadingController=null),this._loadingPromise===i&&(this._loadingPromise=null)};return i.then(a,a),i}_requiresPowerOfTwo(e,r){const i=tt.CLAMP_TO_EDGE,a=typeof r.wrapMode=="number"?r.wrapMode===i:r.wrapMode.s===i&&r.wrapMode.t===i;return e.type===qi.WEBGL1&&(r.hasMipmap||!a)}_makePowerOfTwoTexture(e,r,i,a,s){const{width:n,height:o}=i,l=ur(n),c=ur(o);let d;switch(a.width=l,a.height=c,this.params.powerOfTwoResizeMode){case Ft.PAD:a.textureCoordinateScaleFactor=[n/l,o/c],d=new he(e,a),d.updateData(0,0,0,n,o,r);break;case Ft.STRETCH:case null:case void 0:d=this._stretchToPowerOfTwo(e,r,a,s());break;default:dt(this.params.powerOfTwoResizeMode)}return a.hasMipmap&&d.generateMipmap(),d}_stretchToPowerOfTwo(e,r,i,a){const s=new he(e,i),n=new bt(e,{colorTarget:kr.TEXTURE,depthStencilTarget:Xr.NONE},s),o=new he(e,{target:ct.TEXTURE_2D,pixelFormat:i.pixelFormat,dataType:lt.UNSIGNED_BYTE,wrapMode:tt.CLAMP_TO_EDGE,samplingMode:Te.LINEAR,flipped:!!i.flipped,maxAnisotropy:8,preMultiplyAlpha:i.preMultiplyAlpha},r),l=ni(e),c=e.getBoundFramebufferObject();return this._drawStretchedTexture(e,a,n,l,o,s),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:l,sourceTexture:o,framebuffer:n}:(l.dispose(!0),o.dispose(),n.detachColorTexture(),n.dispose()),e.bindFramebuffer(c),s}_drawStretchedTexture(e,r,i,a,s,n){this._passParameters.texture=s,e.bindFramebuffer(i);const o=e.getViewport();e.setViewport(0,0,n.descriptor.width,n.descriptor.height),e.bindTechnique(r,this._passParameters,null),e.bindVAO(a),e.drawArrays(it.TRIANGLE_STRIP,0,Yr(a,"geometry")),e.bindFramebuffer(null),e.setViewport(o.x,o.y,o.width,o.height),this._passParameters.texture=null}unload(){if(_(this._powerOfTwoStretchInfo)){const{framebuffer:e,vao:r,sourceTexture:i}=this._powerOfTwoStretchInfo;r.dispose(!0),i.dispose(),e.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if(_(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),_(this._loadingController)){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}};var st;(function(t){t[t.HAVE_NOTHING=0]="HAVE_NOTHING",t[t.HAVE_METADATA=1]="HAVE_METADATA",t[t.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",t[t.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",t[t.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"})(st||(st={}));let oi=class{constructor(e,r){this._module=e,this._loadModule=r}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}},ci=class{constructor(e,r,i){this.release=i,this.initializeConfiguration(e,r),this._configuration=r.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}destroy(){this._program=Ne(this._program),this._pipeline=this._configuration=null}reload(e){Ne(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}bindPipelineState(e,r=null,i){e.setPipelineState(this.getPipelineState(r,i))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return it.TRIANGLES}getPipelineState(e,r){return this._pipeline}initializeConfiguration(e,r){}},li=class{constructor(e,r,i){this._context=e,this._locations=i,this._textures=new Map,this._freeTextureUnits=new Hr({deallocator:null}),this._glProgram=e.programCache.acquire(r.generate("vertex"),r.generate("fragment"),i),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=r.generateBind($.Pass,this),this.bindDraw=r.generateBind($.Draw,this),this._fragmentUniforms=pa()?r.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get compiled(){return this._glProgram.compiled}setUniform1b(e,r){this._glProgram.setUniform1i(e,r?1:0)}setUniform1i(e,r){this._glProgram.setUniform1i(e,r)}setUniform1f(e,r){this._glProgram.setUniform1f(e,r)}setUniform2fv(e,r){this._glProgram.setUniform2fv(e,r)}setUniform3fv(e,r){this._glProgram.setUniform3fv(e,r)}setUniform4fv(e,r){this._glProgram.setUniform4fv(e,r)}setUniformMatrix3fv(e,r){this._glProgram.setUniformMatrix3fv(e,r)}setUniformMatrix4fv(e,r){this._glProgram.setUniformMatrix4fv(e,r)}setUniform1fv(e,r){this._glProgram.setUniform1fv(e,r)}setUniform1iv(e,r){this._glProgram.setUniform1iv(e,r)}setUniform2iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform3iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform4iv(e,r){this._glProgram.setUniform4iv(e,r)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,r){if(I(r)||r.glName==null){const a=this._textures.get(e);return a&&(this._context.bindTexture(null,a.unit),this._freeTextureUnit(a),this._textures.delete(e)),null}let i=this._textures.get(e);return i==null?(i=this._allocTextureUnit(r),this._textures.set(e,i)):i.texture=r,this._context.useProgram(this),this.setUniform1i(e,i.unit),this._context.bindTexture(r,i.unit),i.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((e,r)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(r,e.unit)}),_(this._fragmentUniforms)&&this._fragmentUniforms.forEach(e=>{e.type!=="sampler2D"&&e.type!=="samplerCube"||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)})}_allocTextureUnit(e){return{texture:e,unit:this._freeTextureUnits.length===0?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}};function sr(t){t.code.add(h`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}function nr(t){t.include(sr),t.code.add(h`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}function hs(t){t.fragment.uniforms.add(new j("projInfo",(e,r)=>ds(r))),t.fragment.uniforms.add(new ae("zScale",(e,r)=>hi(r))),t.fragment.code.add(h`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function ds(t){const e=t.camera.projectionMatrix;return e[11]===0?X(Ar,2/(t.camera.fullWidth*e[0]),2/(t.camera.fullHeight*e[5]),(1+e[12])/e[0],(1+e[13])/e[5]):X(Ar,-2/(t.camera.fullWidth*e[0]),-2/(t.camera.fullHeight*e[5]),(1-e[8])/e[0],(1-e[9])/e[5])}const Ar=ut();function hi(t){return t.camera.projectionMatrix[11]===0?ue(wr,0,1):ue(wr,1,0)}const wr=ht();let W=class extends H{constructor(e,r){super(e,"vec3",$.Pass,(i,a,s)=>i.setUniform3fv(e,r(a,s)))}},nt=class extends H{constructor(e,r){super(e,"float",$.Pass,(i,a,s)=>i.setUniform1f(e,r(a,s)))}},ot=class extends H{constructor(e,r){super(e,"mat4",$.Pass,(i,a,s)=>i.setUniformMatrix4fv(e,r(a,s)))}};var Mr;(function(t){t[t.INTEGRATED_MESH=0]="INTEGRATED_MESH",t[t.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",t[t.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",t[t.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",t[t.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",t[t.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",t[t.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",t[t.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",t[t.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",t[t.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",t[t.POSTPROCESSING_ENVIRONMENT_OPAQUE=10]="POSTPROCESSING_ENVIRONMENT_OPAQUE",t[t.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=11]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",t[t.LASERLINES=12]="LASERLINES",t[t.LASERLINES_CONTRAST_CONTROL=13]="LASERLINES_CONTRAST_CONTROL",t[t.HUD_MATERIAL=14]="HUD_MATERIAL",t[t.LABEL_MATERIAL=15]="LABEL_MATERIAL",t[t.LINE_CALLOUTS=16]="LINE_CALLOUTS",t[t.LINE_CALLOUTS_HUD_DEPTH=17]="LINE_CALLOUTS_HUD_DEPTH",t[t.DRAPED_MATERIAL=18]="DRAPED_MATERIAL",t[t.DRAPED_WATER=19]="DRAPED_WATER",t[t.VOXEL=20]="VOXEL",t[t.MAX_SLOTS=21]="MAX_SLOTS"})(Mr||(Mr={}));function us(t){return Math.abs(t*t*t)}function di(t,e,r){const i=r.parameters,a=r.paddingPixelsOverride;return Qe.scale=Math.min(i.divisor/(e-i.offset),1),Qe.factor=us(t),Qe.minPixelSize=i.minPixelSize,Qe.paddingPixels=a,Qe}function ui(t,e){return t===0?e.minPixelSize:e.minPixelSize*(1+2*e.paddingPixels/t)}function fi(t,e){return Math.max(Ae(t*e.scale,t,e.factor),ui(t,e))}function fs(t,e,r){const i=di(t,e,r);return i.minPixelSize=0,i.paddingPixels=0,fi(1,i)}function No(t,e,r,i){i.scale=fs(t,e,r),i.factor=0,i.minPixelSize=r.parameters.minPixelSize,i.paddingPixels=r.paddingPixelsOverride}function Bo(t,e,r=[0,0]){const i=Math.min(Math.max(e.scale,ui(t[1],e)/Math.max(1e-5,t[1])),1);return r[0]=t[0]*i,r[1]=t[1]*i,r}function ms(t,e,r,i){return fi(t,di(e,r,i))}const Qe={scale:0,factor:0,minPixelSize:0,paddingPixels:0},pt=Xi();function Do(t,e,r,i,a,s){if(t.visible)if(t.boundingInfo){B(t.type===be.Mesh);const n=e.tolerance;mi(t.boundingInfo,r,i,n,a,s)}else{const n=t.indices.get(u.POSITION),o=t.vertexAttributes.get(u.POSITION);gi(r,i,0,n.length/3,n,o,void 0,a,s)}}const ps=R();function mi(t,e,r,i,a,s){if(I(t))return;const n=vs(e,r,ps);if(Yi(pt,t.bbMin),Ji(pt,t.bbMax),_(a)&&a.applyToAabb(pt),_s(pt,e,n,i)){const{primitiveIndices:o,indices:l,position:c}=t,d=o?o.length:l.length/3;if(d>Ss){const f=t.getChildren();if(f!==void 0){for(const m of f)mi(m,e,r,i,a,s);return}}gi(e,r,0,d,l,c,o,a,s)}}const pi=R();function gi(t,e,r,i,a,s,n,o,l){if(n)return gs(t,e,r,i,a,s,n,o,l);const{data:c,stride:d}=s,f=t[0],m=t[1],p=t[2],v=e[0]-f,x=e[1]-m,b=e[2]-p;for(let T=r,z=3*r;T<i;++T){let O=d*a[z++],E=c[O++],F=c[O++],S=c[O];O=d*a[z++];let A=c[O++],y=c[O++],w=c[O];O=d*a[z++];let g=c[O++],P=c[O++],M=c[O];_(o)&&([E,F,S]=o.applyToVertex(E,F,S,T),[A,y,w]=o.applyToVertex(A,y,w,T),[g,P,M]=o.applyToVertex(g,P,M,T));const L=A-E,G=y-F,N=w-S,V=g-E,fe=P-F,me=M-S,Ee=x*me-fe*b,We=b*V-me*v,qe=v*fe-V*x,re=L*Ee+G*We+N*qe;if(Math.abs(re)<=Number.EPSILON)continue;const Y=f-E,Oe=m-F,ye=p-S,ce=Y*Ee+Oe*We+ye*qe;if(re>0){if(ce<0||ce>re)continue}else if(ce>0||ce<re)continue;const pe=Oe*N-G*ye,ke=ye*L-N*Y,Xe=Y*G-L*Oe,Pe=v*pe+x*ke+b*Xe;if(re>0){if(Pe<0||ce+Pe>re)continue}else if(Pe>0||ce+Pe<re)continue;const Ie=(V*pe+fe*ke+me*Xe)/re;Ie>=0&&l(Ie,vi(L,G,N,V,fe,me,pi),T,!1)}}function gs(t,e,r,i,a,s,n,o,l){const{data:c,stride:d}=s,f=t[0],m=t[1],p=t[2],v=e[0]-f,x=e[1]-m,b=e[2]-p;for(let T=r;T<i;++T){const z=n[T];let O=3*z,E=d*a[O++],F=c[E++],S=c[E++],A=c[E];E=d*a[O++];let y=c[E++],w=c[E++],g=c[E];E=d*a[O];let P=c[E++],M=c[E++],L=c[E];_(o)&&([F,S,A]=o.applyToVertex(F,S,A,T),[y,w,g]=o.applyToVertex(y,w,g,T),[P,M,L]=o.applyToVertex(P,M,L,T));const G=y-F,N=w-S,V=g-A,fe=P-F,me=M-S,Ee=L-A,We=x*Ee-me*b,qe=b*fe-Ee*v,re=v*me-fe*x,Y=G*We+N*qe+V*re;if(Math.abs(Y)<=Number.EPSILON)continue;const Oe=f-F,ye=m-S,ce=p-A,pe=Oe*We+ye*qe+ce*re;if(Y>0){if(pe<0||pe>Y)continue}else if(pe>0||pe<Y)continue;const ke=ye*V-N*ce,Xe=ce*G-V*Oe,Pe=Oe*N-G*ye,Ie=v*ke+x*Xe+b*Pe;if(Y>0){if(Ie<0||pe+Ie>Y)continue}else if(Ie>0||pe+Ie<Y)continue;const lr=(fe*ke+me*Xe+Ee*Pe)/Y;lr>=0&&l(lr,vi(G,N,V,fe,me,Ee,pi),z,!1)}}const Er=R(),Or=R();function vi(t,e,r,i,a,s,n){return U(Er,t,e,r),U(Or,i,a,s),Zi(n,Er,Or),Ki(n,n),n}function vs(t,e,r){return U(r,1/(e[0]-t[0]),1/(e[1]-t[1]),1/(e[2]-t[2]))}function _s(t,e,r,i){return xs(t,e,r,i,1/0)}function xs(t,e,r,i,a){const s=(t[0]-i-e[0])*r[0],n=(t[3]+i-e[0])*r[0];let o=Math.min(s,n),l=Math.max(s,n);const c=(t[1]-i-e[1])*r[1],d=(t[4]+i-e[1])*r[1];if(l=Math.min(l,Math.max(c,d)),l<0||(o=Math.max(o,Math.min(c,d)),o>l))return!1;const f=(t[2]-i-e[2])*r[2],m=(t[5]+i-e[2])*r[2];return l=Math.min(l,Math.max(f,m)),!(l<0)&&(o=Math.max(o,Math.min(f,m)),!(o>l)&&o<a)}function Go(t,e,r,i,a){let s=(r.screenLength||0)*t.pixelRatio;_(a)&&(s=ms(s,i,e,a));const n=s*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return Vr(n*e,r.minWorldLength||0,r.maxWorldLength!=null?r.maxWorldLength:1/0)}function _i(t,e){const r=e?_i(e):{};for(const i in t){let a=t[i];a&&a.forEach&&(a=Ts(a)),a==null&&i in r||(r[i]=a)}return r}function bs(t,e){let r=!1;for(const i in e){const a=e[i];a!==void 0&&(Array.isArray(a)?t[i]===null?(t[i]=a.slice(),r=!0):Qi(t[i],a)&&(r=!0):t[i]!==a&&(r=!0,t[i]=a))}return r}function Ts(t){const e=[];return t.forEach(r=>e.push(r)),e}const Ho={multiply:1,ignore:2,replace:3,tint:4},Ss=1e3;let As=class extends Me{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,r={key:this.key};for(const i of e)r[i]=this[i];return r}};function Le(t={}){return(e,r)=>{if(e._parameterNames=e._parameterNames??[],e._parameterNames.push(r),t.constValue!=null)Object.defineProperty(e,r,{get:()=>t.constValue});else{const i=e._parameterNames.length-1,a=t.count||2,s=Math.ceil(Math.log2(a)),n=e._parameterBits??[0];let o=0;for(;n[o]+s>16;)o++,o>=n.length&&n.push(0);e._parameterBits=n;const l=n[o],c=(1<<s)-1<<l;n[o]+=s,Object.defineProperty(e,r,{get(){return this[i]},set(d){if(this[i]!==d&&(this[i]=d,this._keyDirty=!0,this._parameterBits[o]=this._parameterBits[o]&~c|+d<<l&c,typeof d!="number"&&typeof d!="boolean"))throw new Error("Configuration value for "+r+" must be boolean or number, got "+typeof d)}})}}}var K;(function(t){t[t.Color=0]="Color",t[t.Depth=1]="Depth",t[t.Normal=2]="Normal",t[t.Shadow=3]="Shadow",t[t.ShadowHighlight=4]="ShadowHighlight",t[t.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",t[t.Highlight=6]="Highlight",t[t.Alpha=7]="Alpha",t[t.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",t[t.COUNT=9]="COUNT"})(K||(K={}));let Uo=class{constructor(e,r,i=!1,a=r){this.data=e,this.size=r,this.exclusive=i,this.stride=a}};function ws(t){if(t.length<ea)return Array.from(t);if(Array.isArray(t))return Float64Array.from(t);switch(t.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(t);case 2:return Uint16Array.from(t);case 4:return Float32Array.from(t);default:return Float64Array.from(t)}}let Ms=class xi{constructor(e,r,i,a){this.primitiveIndices=e,this._numIndexPerPrimitive=r,this.indices=i,this.position=a,this._children=void 0,B(e.length>=1),B(i.length%this._numIndexPerPrimitive==0),B(i.length>=e.length*this._numIndexPerPrimitive),B(a.size===3||a.size===4);const{data:s,size:n}=a,o=e.length;let l=n*i[this._numIndexPerPrimitive*e[0]];Ce.clear(),Ce.push(l);const c=ie(s[l],s[l+1],s[l+2]),d=Dt(c);for(let p=0;p<o;++p){const v=this._numIndexPerPrimitive*e[p];for(let x=0;x<this._numIndexPerPrimitive;++x){l=n*i[v+x],Ce.push(l);let b=s[l];c[0]=Math.min(b,c[0]),d[0]=Math.max(b,d[0]),b=s[l+1],c[1]=Math.min(b,c[1]),d[1]=Math.max(b,d[1]),b=s[l+2],c[2]=Math.min(b,c[2]),d[2]=Math.max(b,d[2])}}this.bbMin=c,this.bbMax=d;const f=Gt(R(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(d[0]-c[0],d[1]-c[1]),d[2]-c[2]);let m=this.radius*this.radius;for(let p=0;p<Ce.length;++p){l=Ce.getItemAt(p);const v=s[l]-f[0],x=s[l+1]-f[1],b=s[l+2]-f[2],T=v*v+x*x+b*b;if(T<=m)continue;const z=Math.sqrt(T),O=.5*(z-this.radius);this.radius=this.radius+O,m=this.radius*this.radius;const E=O/z;f[0]+=v*E,f[1]+=x*E,f[2]+=b*E}this.center=f,Ce.clear()}getChildren(){if(this._children||ta(this.bbMin,this.bbMax)<=1)return this._children;const e=Gt(R(),this.bbMin,this.bbMax,.5),r=this.primitiveIndices.length,i=new Uint8Array(r),a=new Array(8);for(let c=0;c<8;++c)a[c]=0;const{data:s,size:n}=this.position;for(let c=0;c<r;++c){let d=0;const f=this._numIndexPerPrimitive*this.primitiveIndices[c];let m=n*this.indices[f],p=s[m],v=s[m+1],x=s[m+2];for(let b=1;b<this._numIndexPerPrimitive;++b){m=n*this.indices[f+b];const T=s[m],z=s[m+1],O=s[m+2];T<p&&(p=T),z<v&&(v=z),O<x&&(x=O)}p<e[0]&&(d|=1),v<e[1]&&(d|=2),x<e[2]&&(d|=4),i[c]=d,++a[d]}let o=0;for(let c=0;c<8;++c)a[c]>0&&++o;if(o<2)return;const l=new Array(8);for(let c=0;c<8;++c)l[c]=a[c]>0?new Uint32Array(a[c]):void 0;for(let c=0;c<8;++c)a[c]=0;for(let c=0;c<r;++c){const d=i[c];l[d][a[d]++]=this.primitiveIndices[c]}this._children=new Array;for(let c=0;c<8;++c)l[c]!==void 0&&this._children.push(new xi(l[c],this._numIndexPerPrimitive,this.indices,this.position));return this._children}static prune(){Ce.prune()}};const Ce=new Hr({deallocator:null});function Es(t,e,r){if(!t||!e)return!1;const{size:i,data:a}=t;U(r,0,0,0),U(J,0,0,0);let s=0,n=0;for(let o=0;o<e.length-2;o+=3){const l=e[o+0]*i,c=e[o+1]*i,d=e[o+2]*i;U(D,a[l+0],a[l+1],a[l+2]),U(ve,a[c+0],a[c+1],a[c+2]),U(gt,a[d+0],a[d+1],a[d+2]);const f=ba(D,ve,gt);f?(Z(D,D,ve),Z(D,D,gt),de(D,D,1/3*f),Z(r,r,D),s+=f):(Z(J,J,D),Z(J,J,ve),Z(J,J,gt),n+=3)}return(n!==0||s!==0)&&(s!==0?(de(r,r,1/s),!0):n!==0&&(de(r,J,1/n),!0))}function Os(t,e,r){if(!t||!e)return!1;const{size:i,data:a}=t;U(r,0,0,0);let s=-1,n=0;for(let o=0;o<e.length;o++){const l=e[o]*i;s!==l&&(r[0]+=a[l+0],r[1]+=a[l+1],r[2]+=a[l+2],n++),s=l}return n>1&&de(r,r,1/n),n>0}function ys(t,e,r,i){if(!t)return!1;U(i,0,0,0),U(J,0,0,0);let a=0,s=0;const{size:n,data:o}=t,l=e?e.length-1:o.length/n-1,c=l+(r?2:0);for(let d=0;d<c;d+=2){const f=d<l?d:l,m=d<l?d+1:0,p=(e?e[f]:f)*n,v=(e?e[m]:m)*n;D[0]=o[p],D[1]=o[p+1],D[2]=o[p+2],ve[0]=o[v],ve[1]=o[v+1],ve[2]=o[v+2],de(D,Z(D,D,ve),.5);const x=ra(D,ve);x>0?(Z(i,i,de(D,D,x)),a+=x):a===0&&(Z(J,J,D),s++)}return a!==0?(de(i,i,1/a),!0):s!==0&&(de(i,J,1/s),!0)}const D=R(),ve=R(),gt=R(),J=R();let Wo=class bi extends er{constructor(e,r,i=[],a=null,s=be.Mesh,n=null,o=-1){super(),this.material=e,this.mapPositions=a,this.type=s,this.objectAndLayerIdColor=n,this.edgeIndicesLength=o,this.visible=!0,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[l,c]of r)c&&this._vertexAttributes.set(l,{...c});if(i==null||i.length===0){const l=Ps(this._vertexAttributes),c=vr(l);this.edgeIndicesLength=this.edgeIndicesLength<0?l:this.edgeIndicesLength;for(const d of this._vertexAttributes.keys())this._indices.set(d,c)}else for(const[l,c]of i)c&&(this._indices.set(l,Ta(c)),l===u.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(l).length:this.edgeIndicesLength))}instantiate(e={}){const r=new bi(e.material||this.material,[],void 0,this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._vertexAttributes.forEach((i,a)=>{i.exclusive=!1,r._vertexAttributes.set(a,i)}),this._indices.forEach((i,a)=>r._indices.set(a,i)),r._boundingInfo=this._boundingInfo,r.transformation=e.transformation||this.transformation,r}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){let r=this._vertexAttributes.get(e);return r&&!r.exclusive&&(r={...r,exclusive:!0,data:ws(r.data)},this._vertexAttributes.set(e,r)),r}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get faceCount(){return this.indexCount/3}get boundingInfo(){return I(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===be.Mesh?this._computeAttachmentOriginTriangles(e):this.type===be.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&(_(this._transformation)&&Et(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){const r=this.indices.get(u.POSITION),i=this.vertexAttributes.get(u.POSITION);return Es(i,r,e)}_computeAttachmentOriginLines(e){const r=this.vertexAttributes.get(u.POSITION),i=this.indices.get(u.POSITION);return ys(r,i,i&&Is(this.material.parameters,r,i),e)}_computeAttachmentOriginPoints(e){const r=this.indices.get(u.POSITION),i=this.vertexAttributes.get(u.POSITION);return Os(i,r,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get(u.POSITION),r=this.vertexAttributes.get(u.POSITION);if(!e||e.length===0||!r)return null;const i=this.type===be.Mesh?3:1;B(e.length%i==0,"Indexing error: "+e.length+" not divisible by "+i);const a=vr(e.length/i);return new Ms(a,i,e,r)}get transformation(){return ia(this._transformation,gr)}set transformation(e){this._transformation=e&&e!==gr?xa(e):null}get shaderTransformation(){return _(this._shaderTransformer)?this._shaderTransformer(this.transformation):this.transformation}get shaderTransformer(){return this._shaderTransformer}set shaderTransformer(e){this._shaderTransformer=e}get hasVolatileTransformation(){return _(this._shaderTransformer)}addHighlight(){const e=new Oa(fa.Highlight);return this.highlights=ya(this.highlights,e),e}removeHighlight(e){this.highlights=Pa(this.highlights,e)}};function Ps(t){const e=t.values().next().value;return e==null?0:e.data.length/e.size}function Is(t,e,r){return!(!("isClosed"in t)||!t.isClosed)&&(r?r.length>2:e.data.length>6)}let $s=class{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}ensureTechnique(e,r){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(this._output,r),this._technique),this._technique}ensureResources(e){return Vt.LOADED}},ko=class extends er{constructor(e,r){super(),this.type=be.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=It,this._pp0=ie(0,0,1),this._pp1=ie(0,0,0),this._parameters=_i(e,r),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e,r=!0){bs(this._parameters,e)&&(this.validateParameters(this._parameters),r&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&(this.renderOccluded&e.renderOccludedMask)!=0}isVisibleForOutput(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){_(this.repository)&&this.repository.materialChanged(this)}intersectDraped(e,r,i,a,s,n){return this._pp0[0]=this._pp1[0]=a[0],this._pp0[1]=this._pp1[1]=a[1],this.intersect(e,r,i,this._pp0,this._pp1,s)}};var qt;(function(t){t[t.Occlude=1]="Occlude",t[t.Transparent=2]="Transparent",t[t.OccludeAndTransparent=4]="OccludeAndTransparent",t[t.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",t[t.Opaque=16]="Opaque"})(qt||(qt={}));let Rs=class extends Me{constructor(){super(...arguments),this.renderOccluded=qt.Occlude}},Jo=class extends Rs{constructor(){super(...arguments),this.vvSizeEnabled=!1,this.vvSizeMinSize=ie(1,1,1),this.vvSizeMaxSize=ie(100,100,100),this.vvSizeOffset=ie(0,0,0),this.vvSizeFactor=ie(1,1,1),this.vvSizeValue=ie(1,1,1),this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvOpacityEnabled=!1,this.vvOpacityValues=[0,0,0,0,0,0,0,0],this.vvOpacityOpacities=[1,1,1,1,1,1,1,1],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=je()}};const Ct=8;let ze=class extends As{constructor(){super(...arguments),this.hasWebGL2Context=!1}};$e([Le({constValue:!0})],ze.prototype,"hasSliceHighlight",void 0),$e([Le({constValue:!1})],ze.prototype,"hasSliceInVertexProgram",void 0),$e([Le({constValue:!1})],ze.prototype,"instancedDoublePrecision",void 0),$e([Le({constValue:!1})],ze.prototype,"useLegacyTerrainShading",void 0),$e([Le({constValue:!1})],ze.prototype,"hasModelTransformation",void 0),$e([Le({constValue:$.Pass})],ze.prototype,"pbrTextureBindType",void 0),$e([Le()],ze.prototype,"hasWebGL2Context",void 0);function Fs(t){t.attributes.add(u.POSITION,"vec3"),t.vertex.code.add(h`vec3 positionModel() { return position; }`)}function Ls({code:t},e){e.doublePrecisionRequiresObfuscation?t.add(h`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):t.add(h`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}let Se=class extends H{constructor(e,r){super(e,"vec3",$.Draw,(i,a,s,n)=>i.setUniform3fv(e,r(a,s,n)))}},Ti=class extends H{constructor(e,r){super(e,"mat3",$.Draw,(i,a,s)=>i.setUniformMatrix3fv(e,r(a,s)))}},or=class extends H{constructor(e,r){super(e,"mat3",$.Pass,(i,a,s)=>i.setUniformMatrix3fv(e,r(a,s)))}};function Si(t,e){t.include(Fs);const r=t.vertex;r.include(Ls,e),t.varyings.add("vPositionWorldCameraRelative","vec3"),t.varyings.add("vPosition_view","vec3"),r.uniforms.add([new W("transformWorldFromViewTH",i=>i.transformWorldFromViewTH),new W("transformWorldFromViewTL",i=>i.transformWorldFromViewTL),new or("transformViewFromCameraRelativeRS",i=>i.transformViewFromCameraRelativeRS),new ot("transformProjFromView",i=>i.transformProjFromView),new Ti("transformWorldFromModelRS",i=>i.transformWorldFromModelRS),new Se("transformWorldFromModelTH",i=>i.transformWorldFromModelTH),new Se("transformWorldFromModelTL",i=>i.transformWorldFromModelTL)]),r.code.add(h`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(h`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${e.spherical?h`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:h`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),t.fragment.uniforms.add(new W("transformWorldFromViewTL",i=>i.transformWorldFromViewTL)),r.code.add(h`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),t.fragment.code.add(h`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}let Cs=class extends Me{constructor(){super(...arguments),this.transformWorldFromViewTH=R(),this.transformWorldFromViewTL=R(),this.transformViewFromCameraRelativeRS=je(),this.transformProjFromView=He()}};class zs extends Me{constructor(){super(...arguments),this.transformWorldFromModelRS=je(),this.transformWorldFromModelTH=Ut(),this.transformWorldFromModelTL=Ut()}}function yr(t){t.varyings.add("linearDepth","float")}function Ns(t){t.vertex.uniforms.add(new ae("nearFar",(e,r)=>r.camera.nearFar))}function Ai(t){t.vertex.code.add(h`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function ic(t,e){const{vertex:r}=t;switch(e.output){case K.Color:if(e.receiveShadows)return yr(t),void r.code.add(h`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case K.Depth:case K.Shadow:case K.ShadowHighlight:case K.ShadowExcludeHighlight:return t.include(Si,e),yr(t),Ns(t),Ai(t),void r.code.add(h`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(h`void forwardLinearDepth() {}`)}function ac(t,e){Bs(t,e,[new Se("slicePlaneOrigin",(r,i)=>Ds(e,r,i)),new Se("slicePlaneBasis1",(r,i)=>{var a;return Pr(e,r,i,(a=Ot(i.slicePlane))==null?void 0:a.basis1)}),new Se("slicePlaneBasis2",(r,i)=>{var a;return Pr(e,r,i,(a=Ot(i.slicePlane))==null?void 0:a.basis2)})])}function Bs(t,e,r){if(!e.hasSlicePlane){const n=h`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return e.hasSliceInVertexProgram&&t.vertex.code.add(n),void t.fragment.code.add(n)}t.extensions.add("GL_OES_standard_derivatives"),e.hasSliceInVertexProgram&&t.vertex.uniforms.add(r),t.fragment.uniforms.add(r);const i=h`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,a=h`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,s=e.hasSliceHighlight?h`
        ${a}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:h`#define highlightSlice(_color_, _pos_) (_color_)`;e.hasSliceInVertexProgram&&t.vertex.code.add(i),t.fragment.code.add(i),t.fragment.code.add(s)}function wi(t,e,r){return t.instancedDoublePrecision?U(Gs,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):e.slicePlaneLocalOrigin}function Mi(t,e){return _(t)?Qt(yt,e.origin,t):e.origin}function Ei(t,e,r){return t.hasSliceTranslatedView?_(e)?Ht(Hs,r.camera.viewMatrix,e):r.camera.viewMatrix:null}function Ds(t,e,r){if(I(r.slicePlane))return Kt;const i=wi(t,e,r),a=Mi(i,r.slicePlane),s=Ei(t,i,r);return _(s)?Et(yt,a,s):a}function Pr(t,e,r,i){if(I(i)||I(r.slicePlane))return Kt;const a=wi(t,e,r),s=Mi(a,r.slicePlane),n=Ei(t,a,r);return _(n)?(Z(et,i,s),Et(yt,s,n),Et(et,et,n),Qt(et,et,yt)):i}const Gs=R(),yt=R(),et=R(),Hs=He();function sc(t,e){const r=e.output===K.ObjectAndLayerIdColor,i=e.objectAndLayerIdColorInstanced;r&&(t.varyings.add("objectAndLayerIdColorVarying","vec4"),i?t.attributes.add(u.OBJECTANDLAYERIDCOLOR_INSTANCED,"vec4"):t.attributes.add(u.OBJECTANDLAYERIDCOLOR,"vec4")),t.vertex.code.add(h`
     void forwardObjectAndLayerIdColor() {
      ${r?i?h`objectAndLayerIdColorVarying = objectAndLayerIdColor_instanced * 0.003921568627451;`:h`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:h``} }`),t.fragment.code.add(h`
      void outputObjectAndLayerIdColor() {
        ${r?h`gl_FragColor = objectAndLayerIdColorVarying;`:h``} }`)}let Vs=class extends H{constructor(e,r,i){super(e,"vec4",$.Pass,(a,s,n)=>a.setUniform4fv(e,r(s,n)),i)}},Us=class extends H{constructor(e,r,i){super(e,"float",$.Pass,(a,s,n)=>a.setUniform1fv(e,r(s,n)),i)}};function cc(t,e){switch(t.fragment.include(sr),e.output){case K.Shadow:case K.ShadowHighlight:case K.ShadowExcludeHighlight:t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(h`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`);break;case K.Depth:t.fragment.code.add(h`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}}let js=class extends H{constructor(e,r){super(e,"mat4",$.Draw,(i,a,s)=>i.setUniformMatrix4fv(e,r(a,s)))}};function Ws(t,e){e.instancedDoublePrecision?t.constants.add("cameraPosition","vec3",Kt):t.uniforms.add(new Se("cameraPosition",(r,i)=>U(Oi,i.camera.viewInverseTransposeMatrix[3]-r.origin[0],i.camera.viewInverseTransposeMatrix[7]-r.origin[1],i.camera.viewInverseTransposeMatrix[11]-r.origin[2])))}function hc(t,e){if(!e.instancedDoublePrecision)return void t.uniforms.add([new ot("proj",(i,a)=>a.camera.projectionMatrix),new js("view",(i,a)=>Ht(Ir,a.camera.viewMatrix,i.origin)),new Se("localOrigin",i=>i.origin)]);const r=i=>U(Oi,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]);t.uniforms.add([new ot("proj",(i,a)=>a.camera.projectionMatrix),new ot("view",(i,a)=>Ht(Ir,a.camera.viewMatrix,r(a))),new W("localOrigin",(i,a)=>r(a))])}const Ir=aa(),Oi=R();function dc(t){t.uniforms.add(new ot("viewNormal",(e,r)=>r.camera.viewInverseTransposeMatrix))}function uc(t,e){e.hasMultipassTerrain&&(t.fragment.include(nr),t.fragment.uniforms.add(new De("terrainDepthTexture",(r,i)=>i.multipassTerrain.linearDepthTexture)),t.fragment.uniforms.add(new ae("nearFar",(r,i)=>i.camera.nearFar)),t.fragment.uniforms.add(new ae("inverseViewport",(r,i)=>i.inverseViewport)),t.fragment.code.add(h`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${e.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `))}let fc=class{constructor(){this.enabled=!1,this.cullAboveGround=!1}};function yi(t){t.vertex.code.add(h`const float PI = 3.141592653589793;`),t.fragment.code.add(h`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}const pc=.1,gc=.001;function vc(t){t.code.add(h`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}const _c={func:Ue.LESS},xc={func:Ue.ALWAYS},bc={mask:255},Tc={mask:0},Sc={function:{func:Ue.ALWAYS,ref:we.OutlineVisualElementMask,mask:we.OutlineVisualElementMask},operation:{fail:te.KEEP,zFail:te.KEEP,zPass:te.ZERO}},Ac={function:{func:Ue.ALWAYS,ref:we.OutlineVisualElementMask,mask:we.OutlineVisualElementMask},operation:{fail:te.KEEP,zFail:te.KEEP,zPass:te.REPLACE}},wc={function:{func:Ue.EQUAL,ref:we.OutlineVisualElementMask,mask:we.OutlineVisualElementMask},operation:{fail:te.KEEP,zFail:te.KEEP,zPass:te.KEEP}},Mc={function:{func:Ue.NOTEQUAL,ref:we.OutlineVisualElementMask,mask:we.OutlineVisualElementMask},operation:{fail:te.KEEP,zFail:te.KEEP,zPass:te.KEEP}};let qs=class{constructor(e=R()){this.intensity=e}},ks=class{constructor(e=R(),r=ie(.57735,.57735,.57735)){this.intensity=e,this.direction=r}},kt=class{constructor(e=R(),r=ie(.57735,.57735,.57735),i=!0,a=1,s=1){this.intensity=e,this.direction=r,this.castShadows=i,this.specularStrength=a,this.environmentStrength=s}},Pi=class{constructor(){this.r=[0],this.g=[0],this.b=[0]}};function Xs(t,e,r){(r=r||t).length=t.length;for(let i=0;i<t.length;i++)r[i]=t[i]*e[i];return r}function zt(t,e,r){(r=r||t).length=t.length;for(let i=0;i<t.length;i++)r[i]=t[i]*e;return r}function Ve(t,e,r){(r=r||t).length=t.length;for(let i=0;i<t.length;i++)r[i]=t[i]+e[i];return r}function Ii(t){return(t+1)*(t+1)}function Ys(t){return Vr(Math.floor(Math.sqrt(t)-1),0,2)}function $i(t,e,r){const i=t[0],a=t[1],s=t[2],n=r||[];return n.length=Ii(e),e>=0&&(n[0]=.28209479177),e>=1&&(n[1]=.4886025119*i,n[2]=.4886025119*s,n[3]=.4886025119*a),e>=2&&(n[4]=1.09254843059*i*a,n[5]=1.09254843059*a*s,n[6]=.31539156525*(3*s*s-1),n[7]=1.09254843059*i*s,n[8]=.54627421529*(i*i-a*a)),n}function Js(t,e){const r=Ii(t),i=e||{r:[],g:[],b:[]};i.r.length=i.g.length=i.b.length=r;for(let a=0;a<r;a++)i.r[a]=i.g[a]=i.b[a]=0;return i}function Zs(t,e){const r=Ys(e.r.length);for(const i of t)sa(Xt,i.direction),$i(Xt,r,_e),Xs(_e,At),zt(_e,i.intensity[0],Ge),Ve(e.r,Ge),zt(_e,i.intensity[1],Ge),Ve(e.g,Ge),zt(_e,i.intensity[2],Ge),Ve(e.b,Ge);return e}function Ks(t,e){$i(Xt,0,_e);for(const r of t)e.r[0]+=_e[0]*At[0]*r.intensity[0]*4*Math.PI,e.g[0]+=_e[0]*At[0]*r.intensity[1]*4*Math.PI,e.b[0]+=_e[0]*At[0]*r.intensity[2]*4*Math.PI;return e}function Qs(t,e,r,i){Js(e,i),U(r.intensity,0,0,0);let a=!1;const s=en,n=tn,o=rn;s.length=0,n.length=0,o.length=0;for(const l of t)l instanceof kt&&!a?(rt(r.direction,l.direction),rt(r.intensity,l.intensity),r.specularStrength=l.specularStrength,r.environmentStrength=l.environmentStrength,r.castShadows=l.castShadows,a=!0):l instanceof kt||l instanceof ks?s.push(l):l instanceof qs?n.push(l):l instanceof Pi&&o.push(l);Zs(s,i),Ks(n,i);for(const l of o)Ve(i.r,l.r),Ve(i.g,l.g),Ve(i.b,l.b)}const en=[],tn=[],rn=[],_e=[0],Ge=[0],Xt=R(),At=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398];let $r=class{constructor(){this.color=R(),this.intensity=1}},an=class{constructor(){this.direction=R(),this.ambient=new $r,this.diffuse=new $r}};const sn=.4;class Rc{constructor(){this._shOrder=2,this._legacy=new an,this.globalFactor=.5,this.noonFactor=.5,this._sphericalHarmonics=new Pi,this._mainLight=new kt(R(),ie(1,0,0),!1)}get legacy(){return this._legacy}get sh(){return this._sphericalHarmonics}get mainLight(){return this._mainLight}set(e){Qs(e,this._shOrder,this._mainLight,this._sphericalHarmonics),rt(this._legacy.direction,this._mainLight.direction);const r=1/Math.PI;this._legacy.ambient.color[0]=.282095*this._sphericalHarmonics.r[0]*r,this._legacy.ambient.color[1]=.282095*this._sphericalHarmonics.g[0]*r,this._legacy.ambient.color[2]=.282095*this._sphericalHarmonics.b[0]*r,de(this._legacy.diffuse.color,this._mainLight.intensity,r),rt(vt,this._legacy.diffuse.color),de(vt,vt,sn*this.globalFactor),Z(this._legacy.ambient.color,this._legacy.ambient.color,vt)}copyFrom(e){this._sphericalHarmonics.r=Array.from(e.sh.r),this._sphericalHarmonics.g=Array.from(e.sh.g),this._sphericalHarmonics.b=Array.from(e.sh.b),this._mainLight.direction=Dt(e.mainLight.direction),this._mainLight.intensity=Dt(e.mainLight.intensity),this._mainLight.castShadows=e.mainLight.castShadows,this._mainLight.specularStrength=e.mainLight.specularStrength,this._mainLight.environmentStrength=e.mainLight.environmentStrength,this.globalFactor=e.globalFactor,this.noonFactor=e.noonFactor}lerpLighting(e,r,i){if(Gt(this._mainLight.intensity,e.mainLight.intensity,r.mainLight.intensity,i),this._mainLight.environmentStrength=Ae(e.mainLight.environmentStrength,r.mainLight.environmentStrength,i),this._mainLight.specularStrength=Ae(e.mainLight.specularStrength,r.mainLight.specularStrength,i),rt(this._mainLight.direction,r.mainLight.direction),this._mainLight.castShadows=r.mainLight.castShadows,this.globalFactor=Ae(e.globalFactor,r.globalFactor,i),this.noonFactor=Ae(e.noonFactor,r.noonFactor,i),e.sh.r.length===r.sh.r.length)for(let a=0;a<r.sh.r.length;a++)this._sphericalHarmonics.r[a]=Ae(e.sh.r[a],r.sh.r[a],i),this._sphericalHarmonics.g[a]=Ae(e.sh.g[a],r.sh.g[a],i),this._sphericalHarmonics.b[a]=Ae(e.sh.b[a],r.sh.b[a],i);else for(let a=0;a<r.sh.r.length;a++)this._sphericalHarmonics.r[a]=r.sh.r[a],this._sphericalHarmonics.g[a]=r.sh.g[a],this._sphericalHarmonics.b[a]=r.sh.b[a]}}const vt=R();let Fc=class{constructor(){this._transform=He(),this._transformInverse=new _t({value:this._transform},na,He),this._transformInverseTranspose=new _t(this._transformInverse,mr,He),this._transformTranspose=new _t({value:this._transform},mr,He),this._transformInverseRotation=new _t({value:this._transform},oa,je)}_invalidateLazyTransforms(){this._transformInverse.invalidate(),this._transformInverseTranspose.invalidate(),this._transformTranspose.invalidate(),this._transformInverseRotation.invalidate()}get transform(){return this._transform}get inverse(){return this._transformInverse.value}get inverseTranspose(){return this._transformInverseTranspose.value}get inverseRotation(){return this._transformInverseRotation.value}get transpose(){return this._transformTranspose.value}setTransformMatrix(e){pr(this._transform,e)}multiplyTransform(e){ca(this._transform,this._transform,e)}set(e){pr(this._transform,e),this._invalidateLazyTransforms()}setAndInvalidateLazyTransforms(e,r){this.setTransformMatrix(e),this.multiplyTransform(r),this._invalidateLazyTransforms()}};class _t{constructor(e,r,i){this._original=e,this._update=r,this._dirty=!0,this._transform=i()}invalidate(){this._dirty=!0}get value(){return this._dirty&&(this._update(this._transform,this._original.value),this._dirty=!1),this._transform}}let nn=class{constructor(e=0){this.componentLocalOriginLength=0,this._tmpVertex=R(),this._mbs=Jr(),this._obb={center:R(),halfSize:Ut(),quaternion:null},this._totalOffset=0,this._offset=0,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,r,i){const a=e,s=r,n=i+this.componentLocalOriginLength,o=this._totalOffset/Math.sqrt(a*a+s*s+n*n);return this._tmpVertex[0]=e+a*o,this._tmpVertex[1]=r+s*o,this._tmpVertex[2]=i+n*o,this._tmpVertex}applyToAabb(e){const r=e[0],i=e[1],a=e[2]+this.componentLocalOriginLength,s=e[3],n=e[4],o=e[5]+this.componentLocalOriginLength,l=r*s<0?0:Math.min(Math.abs(r),Math.abs(s)),c=i*n<0?0:Math.min(Math.abs(i),Math.abs(n)),d=a*o<0?0:Math.min(Math.abs(a),Math.abs(o)),f=Math.sqrt(l*l+c*c+d*d);if(f<this._totalOffset)return e[0]-=r<0?this._totalOffset:0,e[1]-=i<0?this._totalOffset:0,e[2]-=a<0?this._totalOffset:0,e[3]+=s>0?this._totalOffset:0,e[4]+=n>0?this._totalOffset:0,e[5]+=o>0?this._totalOffset:0,e;const m=Math.max(Math.abs(r),Math.abs(s)),p=Math.max(Math.abs(i),Math.abs(n)),v=Math.max(Math.abs(a),Math.abs(o)),x=Math.sqrt(m*m+p*p+v*v),b=this._totalOffset/x,T=this._totalOffset/f;return e[0]+=r*(r>0?b:T),e[1]+=i*(i>0?b:T),e[2]+=a*(a>0?b:T),e[3]+=s*(s<0?b:T),e[4]+=n*(n<0?b:T),e[5]+=o*(o<0?b:T),e}applyToMbs(e){const r=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),i=this._totalOffset/r;return this._mbs[0]=e[0]+e[0]*i,this._mbs[1]=e[1]+e[1]*i,this._mbs[2]=e[2]+e[2]*i,this._mbs[3]=e[3]+e[3]*this._totalOffset/r,this._mbs}applyToObb(e){const r=e.center,i=this._totalOffset/Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);this._obb.center[0]=r[0]+r[0]*i,this._obb.center[1]=r[1]+r[1]*i,this._obb.center[2]=r[2]+r[2]*i,fr(this._obb.halfSize,e.halfSize,e.quaternion),Z(this._obb.halfSize,this._obb.halfSize,e.center);const a=this._totalOffset/Math.sqrt(this._obb.halfSize[0]*this._obb.halfSize[0]+this._obb.halfSize[1]*this._obb.halfSize[1]+this._obb.halfSize[2]*this._obb.halfSize[2]);return this._obb.halfSize[0]+=this._obb.halfSize[0]*a,this._obb.halfSize[1]+=this._obb.halfSize[1]*a,this._obb.halfSize[2]+=this._obb.halfSize[2]*a,Qt(this._obb.halfSize,this._obb.halfSize,e.center),Aa(Fr,e.quaternion),fr(this._obb.halfSize,this._obb.halfSize,Fr),this._obb.halfSize[0]*=this._obb.halfSize[0]<0?-1:1,this._obb.halfSize[1]*=this._obb.halfSize[1]<0?-1:1,this._obb.halfSize[2]*=this._obb.halfSize[2]<0?-1:1,this._obb.quaternion=e.quaternion,this._obb}},on=class{constructor(e=0){this.offset=e,this.sphere=Jr(),this.tmpVertex=R()}applyToVertex(e,r,i){const a=this.objectTransform.transform;let s=a[0]*e+a[4]*r+a[8]*i+a[12],n=a[1]*e+a[5]*r+a[9]*i+a[13],o=a[2]*e+a[6]*r+a[10]*i+a[14];const l=this.offset/Math.sqrt(s*s+n*n+o*o);s+=s*l,n+=n*l,o+=o*l;const c=this.objectTransform.inverse;return this.tmpVertex[0]=c[0]*s+c[4]*n+c[8]*o+c[12],this.tmpVertex[1]=c[1]*s+c[5]*n+c[9]*o+c[13],this.tmpVertex[2]=c[2]*s+c[6]*n+c[10]*o+c[14],this.tmpVertex}applyToMinMax(e,r){const i=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*i,e[1]+=e[1]*i,e[2]+=e[2]*i;const a=this.offset/Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);r[0]+=r[0]*a,r[1]+=r[1]*a,r[2]+=r[2]*a}applyToAabb(e){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*i,e[4]+=e[4]*i,e[5]+=e[5]*i,e}applyToBoundingSphere(e){const r=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),i=this.offset/r;return this.sphere[0]=e[0]+e[0]*i,this.sphere[1]=e[1]+e[1]*i,this.sphere[2]=e[2]+e[2]*i,this.sphere[3]=e[3]+e[3]*this.offset/r,this.sphere}};const Rr=new on;function Nc(t){return _(t)?(Rr.offset=t,Rr):null}new nn;const Bc="terrain",Fr=wa();function cn(t){const e=h`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;t.vertex.code.add(e)}function ln(t,e){switch(e.normalType){case Q.CompressedAttribute:t.include(cn),t.attributes.add(u.NORMALCOMPRESSED,"vec2"),t.vertex.code.add(h`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`);break;case Q.Attribute:t.attributes.add(u.NORMAL,"vec3"),t.vertex.code.add(h`vec3 normalModel() {
return normal;
}`);break;case Q.ScreenDerivative:t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(h`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:dt(e.normalType);case Q.COUNT:case Q.Ground:}}var Q;(function(t){t[t.Attribute=0]="Attribute",t[t.CompressedAttribute=1]="CompressedAttribute",t[t.Ground=2]="Ground",t[t.ScreenDerivative=3]="ScreenDerivative",t[t.COUNT=4]="COUNT"})(Q||(Q={}));function Dc(t,e){switch(e.normalType){case Q.Attribute:case Q.CompressedAttribute:t.include(ln,e),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("vNormalView","vec3"),t.vertex.uniforms.add([new Ti("transformNormalGlobalFromModel",r=>r.transformNormalGlobalFromModel),new or("transformNormalViewFromGlobal",r=>r.transformNormalViewFromGlobal)]),t.vertex.code.add(h`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case Q.Ground:t.include(Si,e),t.varyings.add("vNormalWorld","vec3"),t.vertex.code.add(h`
        void forwardNormal() {
          vNormalWorld = ${e.spherical?h`normalize(vPositionWorldCameraRelative);`:h`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case Q.ScreenDerivative:t.vertex.code.add(h`void forwardNormal() {}`);break;default:dt(e.normalType);case Q.COUNT:}}let Gc=class extends Cs{constructor(){super(...arguments),this.transformNormalViewFromGlobal=je()}},Vc=class extends zs{constructor(){super(...arguments),this.transformNormalGlobalFromModel=je(),this.toMapSpace=ut()}};function hn(t,e,r,i){const a=r.typedBuffer,s=r.typedBufferStride,n=t.length;i*=s;for(let o=0;o<n;++o){const l=2*t[o];a[i]=e[l],a[i+1]=e[l+1],i+=s}}function Ri(t,e,r,i,a){const s=r.typedBuffer,n=r.typedBufferStride,o=t.length;if(i*=n,a==null||a===1)for(let l=0;l<o;++l){const c=3*t[l];s[i]=e[c],s[i+1]=e[c+1],s[i+2]=e[c+2],i+=n}else for(let l=0;l<o;++l){const c=3*t[l];for(let d=0;d<a;++d)s[i]=e[c],s[i+1]=e[c+1],s[i+2]=e[c+2],i+=n}}function Fi(t,e,r,i,a=1){const s=r.typedBuffer,n=r.typedBufferStride,o=t.length;if(i*=n,a===1)for(let l=0;l<o;++l){const c=4*t[l];s[i]=e[c],s[i+1]=e[c+1],s[i+2]=e[c+2],s[i+3]=e[c+3],i+=n}else for(let l=0;l<o;++l){const c=4*t[l];for(let d=0;d<a;++d)s[i]=e[c],s[i+1]=e[c+1],s[i+2]=e[c+2],s[i+3]=e[c+3],i+=n}}function jc(t,e,r){const i=t.typedBuffer,a=t.typedBufferStride;e*=a;for(let s=0;s<r;++s)i[e]=0,i[e+1]=0,i[e+2]=0,i[e+3]=0,e+=a}function dn(t,e,r,i,a,s=1){if(!r)return void Ri(t,e,i,a,s);const n=i.typedBuffer,o=i.typedBufferStride,l=t.length,c=r[0],d=r[1],f=r[2],m=r[4],p=r[5],v=r[6],x=r[8],b=r[9],T=r[10],z=r[12],O=r[13],E=r[14];a*=o;let F=0,S=0,A=0;const y=Ur(r)?w=>{F=e[w]+z,S=e[w+1]+O,A=e[w+2]+E}:w=>{const g=e[w],P=e[w+1],M=e[w+2];F=c*g+m*P+x*M+z,S=d*g+p*P+b*M+O,A=f*g+v*P+T*M+E};if(s===1)for(let w=0;w<l;++w)y(3*t[w]),n[a]=F,n[a+1]=S,n[a+2]=A,a+=o;else for(let w=0;w<l;++w){y(3*t[w]);for(let g=0;g<s;++g)n[a]=F,n[a+1]=S,n[a+2]=A,a+=o}}function un(t,e,r,i,a,s=1){if(!r)return void Ri(t,e,i,a,s);const n=r,o=i.typedBuffer,l=i.typedBufferStride,c=t.length,d=n[0],f=n[1],m=n[2],p=n[4],v=n[5],x=n[6],b=n[8],T=n[9],z=n[10],O=!jr(n),E=1e-6,F=1-E;a*=l;let S=0,A=0,y=0;const w=Ur(n)?g=>{S=e[g],A=e[g+1],y=e[g+2]}:g=>{const P=e[g],M=e[g+1],L=e[g+2];S=d*P+p*M+b*L,A=f*P+v*M+T*L,y=m*P+x*M+z*L};if(s===1)if(O)for(let g=0;g<c;++g){w(3*t[g]);const P=S*S+A*A+y*y;if(P<F&&P>E){const M=1/Math.sqrt(P);o[a]=S*M,o[a+1]=A*M,o[a+2]=y*M}else o[a]=S,o[a+1]=A,o[a+2]=y;a+=l}else for(let g=0;g<c;++g)w(3*t[g]),o[a]=S,o[a+1]=A,o[a+2]=y,a+=l;else for(let g=0;g<c;++g){if(w(3*t[g]),O){const P=S*S+A*A+y*y;if(P<F&&P>E){const M=1/Math.sqrt(P);S*=M,A*=M,y*=M}}for(let P=0;P<s;++P)o[a]=S,o[a+1]=A,o[a+2]=y,a+=l}}function fn(t,e,r,i,a,s=1){if(!r)return void Fi(t,e,i,a,s);const n=r,o=i.typedBuffer,l=i.typedBufferStride,c=t.length,d=n[0],f=n[1],m=n[2],p=n[4],v=n[5],x=n[6],b=n[8],T=n[9],z=n[10],O=!jr(n),E=1e-6,F=1-E;if(a*=l,s===1)for(let S=0;S<c;++S){const A=4*t[S],y=e[A],w=e[A+1],g=e[A+2],P=e[A+3];let M=d*y+p*w+b*g,L=f*y+v*w+T*g,G=m*y+x*w+z*g;if(O){const N=M*M+L*L+G*G;if(N<F&&N>E){const V=1/Math.sqrt(N);M*=V,L*=V,G*=V}}o[a]=M,o[a+1]=L,o[a+2]=G,o[a+3]=P,a+=l}else for(let S=0;S<c;++S){const A=4*t[S],y=e[A],w=e[A+1],g=e[A+2],P=e[A+3];let M=d*y+p*w+b*g,L=f*y+v*w+T*g,G=m*y+x*w+z*g;if(O){const N=M*M+L*L+G*G;if(N<F&&N>E){const V=1/Math.sqrt(N);M*=V,L*=V,G*=V}}for(let N=0;N<s;++N)o[a]=M,o[a+1]=L,o[a+2]=G,o[a+3]=P,a+=l}}function mn(t,e,r,i,a,s=1){const n=i.typedBuffer,o=i.typedBufferStride,l=t.length;if(a*=o,r!==e.length||r!==4)if(s!==1)if(r!==4)for(let c=0;c<l;++c){const d=3*t[c];for(let f=0;f<s;++f)n[a]=e[d],n[a+1]=e[d+1],n[a+2]=e[d+2],n[a+3]=255,a+=o}else for(let c=0;c<l;++c){const d=4*t[c];for(let f=0;f<s;++f)n[a]=e[d],n[a+1]=e[d+1],n[a+2]=e[d+2],n[a+3]=e[d+3],a+=o}else{if(r===4){for(let c=0;c<l;++c){const d=4*t[c];n[a]=e[d],n[a+1]=e[d+1],n[a+2]=e[d+2],n[a+3]=e[d+3],a+=o}return}for(let c=0;c<l;++c){const d=3*t[c];n[a]=e[d],n[a+1]=e[d+1],n[a+2]=e[d+2],n[a+3]=255,a+=o}}else{n[a]=e[0],n[a+1]=e[1],n[a+2]=e[2],n[a+3]=e[3];const c=new Uint32Array(i.typedBuffer.buffer,i.start),d=o/4,f=c[a/=4];a+=d;const m=l*s;for(let p=1;p<m;++p)c[a]=f,a+=d}}function pn(t,e,r,i,a=1){const s=e.typedBuffer,n=e.typedBufferStride;if(i*=n,a===1)for(let o=0;o<r;++o)s[i]=t[0],s[i+1]=t[1],s[i+2]=t[2],s[i+3]=t[3],i+=n;else for(let o=0;o<r;++o)for(let l=0;l<a;++l)s[i]=t[0],s[i+1]=t[1],s[i+2]=t[2],s[i+3]=t[3],i+=n}function gn(t,e,r,i,a,s){for(const n of e.fieldNames){const o=t.vertexAttributes.get(n),l=t.indices.get(n);if(o&&l)switch(n){case u.POSITION:{B(o.size===3);const c=a.getField(n,br);B(!!c,`No buffer view for ${n}`),c&&dn(l,o.data,r,c,s);break}case u.NORMAL:{B(o.size===3);const c=a.getField(n,br);B(!!c,`No buffer view for ${n}`),c&&un(l,o.data,i,c,s);break}case u.UV0:{B(o.size===2);const c=a.getField(n,Ea);B(!!c,`No buffer view for ${n}`),c&&hn(l,o.data,c,s);break}case u.COLOR:case u.SYMBOLCOLOR:{B(o.size===3||o.size===4);const c=a.getField(n,xr);B(!!c,`No buffer view for ${n}`),c&&mn(l,o.data,o.size,c,s);break}case u.TANGENT:{B(o.size===4);const c=a.getField(n,_r);B(!!c,`No buffer view for ${n}`),c&&fn(l,o.data,i,c,s);break}case u.PROFILERIGHT:case u.PROFILEUP:case u.PROFILEVERTEXANDNORMAL:case u.FEATUREVALUE:{B(o.size===4);const c=a.getField(n,_r);B(!!c,`No buffer view for ${n}`),c&&Fi(l,o.data,c,s)}}else if(n===u.OBJECTANDLAYERIDCOLOR&&_(t.objectAndLayerIdColor)){const c=t.indices.get(u.POSITION);if(B(!!c,`No buffer view for ${n}`),c){const d=c.length,f=a.getField(n,xr);pn(t.objectAndLayerIdColor,f,d,s)}}}}let Wc=class{constructor(e){this.vertexBufferLayout=e}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(u.POSITION).length}write(e,r,i,a,s){gn(i,this.vertexBufferLayout,e,r,a,s)}};var ee;function vn(t,e){switch(e.textureCoordinateType){case ee.Default:return t.attributes.add(u.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(h`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case ee.Compressed:return t.attributes.add(u.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(h`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case ee.Atlas:return t.attributes.add(u.UV0,"vec2"),t.varyings.add("vuv0","vec2"),t.attributes.add(u.UVREGION,"vec4"),t.varyings.add("vuvRegion","vec4"),void t.vertex.code.add(h`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:dt(e.textureCoordinateType);case ee.None:return void t.vertex.code.add(h`void forwardTextureCoordinates() {}`);case ee.COUNT:return}}(function(t){t[t.None=0]="None",t[t.Default=1]="Default",t[t.Atlas=2]="Atlas",t[t.Compressed=3]="Compressed",t[t.COUNT=4]="COUNT"})(ee||(ee={}));function _n(t){t.extensions.add("GL_EXT_shader_texture_lod"),t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(h`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function xn(t,e){switch(t.include(vn,e),t.fragment.code.add(h`
  struct TextureLookupParameter {
    vec2 uv;
    ${e.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),e.textureCoordinateType){case ee.Default:case ee.Compressed:return void t.fragment.code.add(h`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return texture2D(texture, params.uv);
}`);case ee.Atlas:return t.include(_n),void t.fragment.code.add(h`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return textureAtlasLookup(texture, params.size, params.uv, vuvRegion);
}`);default:dt(e.textureCoordinateType);case ee.None:case ee.COUNT:return}}let Yt=class extends H{constructor(e,r){super(e,"vec2",$.Draw,(i,a,s,n)=>i.setUniform2fv(e,r(a,s,n)))}},Li=class extends H{constructor(e,r){super(e,"sampler2D",$.Draw,(i,a,s)=>i.bindTexture(e,r(a,s)))}};function Nt(t,e,r=q.None){const i=[new Li(t,e)];if(r&q.Size){const a=t+ir;i.push(new Yt(a,(s,n)=>{const o=e(s,n);return _(o)?ue(Lr,o.descriptor.width,o.descriptor.height):wt}))}if(r&q.InvSize){const a=t+Pt;i.push(new Yt(a,(s,n)=>{const o=e(s,n);return _(o)?ue(Lr,1/o.descriptor.width,1/o.descriptor.height):wt}))}return i}const Lr=ht();let Yc=class extends $s{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId,r=>this._texture=r),this._acquire(e.normalTextureId,r=>this._textureNormal=r),this._acquire(e.emissiveTextureId,r=>this._textureEmissive=r),this._acquire(e.occlusionTextureId,r=>this._textureOcclusion=r),this._acquire(e.metallicRoughnessTextureId,r=>this._textureMetallicRoughness=r)}dispose(){this._texture=Re(this._texture),this._textureNormal=Re(this._textureNormal),this._textureEmissive=Re(this._textureEmissive),this._textureOcclusion=Re(this._textureOcclusion),this._textureMetallicRoughness=Re(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return this._numLoading===0?Vt.LOADED:Vt.LOADING}get textureBindParameters(){return new bn(_(this._texture)?this._texture.glTexture:null,_(this._textureNormal)?this._textureNormal.glTexture:null,_(this._textureEmissive)?this._textureEmissive.glTexture:null,_(this._textureOcclusion)?this._textureOcclusion.glTexture:null,_(this._textureMetallicRoughness)?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){(I(this._texture)||e!==this._texture.id)&&(this._texture=Re(this._texture),this._textureId=e,this._acquire(this._textureId,r=>this._texture=r))}_acquire(e,r){if(I(e))return void r(null);const i=this._textureRepository.acquire(e);if(la(i))return++this._numLoading,void i.then(a=>{if(this._disposed)return Re(a),void r(null);r(a)}).finally(()=>--this._numLoading);r(i)}},bn=class extends Me{constructor(e=null,r=null,i=null,a=null,s=null){super(),this.texture=e,this.textureNormal=r,this.textureEmissive=i,this.textureOcclusion=a,this.textureMetallicRoughness=s}};Ma(0,.6,.2);var k;(function(t){t[t.Disabled=0]="Disabled",t[t.Normal=1]="Normal",t[t.Schematic=2]="Schematic",t[t.Water=3]="Water",t[t.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",t[t.Terrain=5]="Terrain",t[t.TerrainWithWater=6]="TerrainWithWater",t[t.COUNT=7]="COUNT"})(k||(k={}));function Kc(t,e){const r=t.fragment,i=e.hasMetallicRoughnessTexture||e.hasEmissionTexture||e.hasOcclusionTexture;if(e.pbrMode===k.Normal&&i&&t.include(xn,e),e.pbrMode!==k.Schematic)if(e.pbrMode!==k.Disabled){if(e.pbrMode===k.Normal){r.code.add(h`vec3 mrr;
vec3 emission;
float occlusion;`);const a=e.supportsTextureAtlas?e.hasWebGL2Context?q.None:q.Size:q.None,s=e.pbrTextureBindType;e.hasMetallicRoughnessTexture&&(r.uniforms.add(s===$.Pass?at("texMetallicRoughness",n=>n.textureMetallicRoughness,a):Nt("texMetallicRoughness",n=>n.textureMetallicRoughness,a)),r.code.add(h`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),e.hasEmissionTexture&&(r.uniforms.add(s===$.Pass?at("texEmission",n=>n.textureEmissive,a):Nt("texEmission",n=>n.textureEmissive,a)),r.code.add(h`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),e.hasOcclusionTexture?(r.uniforms.add(s===$.Pass?at("texOcclusion",n=>n.textureOcclusion,a):Nt("texOcclusion",n=>n.textureOcclusion,a)),r.code.add(h`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(h`float getBakedOcclusion() { return 1.0; }`),r.uniforms.add(s===$.Pass?[new W("emissionFactor",n=>n.emissiveFactor),new W("mrrFactors",n=>n.mrrFactors)]:[new Se("emissionFactor",n=>n.emissiveFactor),new Se("mrrFactors",n=>n.mrrFactors)]),r.code.add(h`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${i?h`vtc.uv = vuv0;`:""}
      ${e.hasMetallicRoughnessTextureTransform?h`vtc.uv = metallicRoughnessUV;`:""}
      ${e.hasMetallicRoughnessTexture?e.supportsTextureAtlas?h`
                vtc.size = ${Tt(e,"texMetallicRoughness")};
                applyMetallnessAndRoughness(vtc);`:h`applyMetallnessAndRoughness(vtc);`:""}
      ${e.hasEmissiveTextureTransform?h`vtc.uv = emissiveUV;`:""}
      ${e.hasEmissionTexture?e.supportsTextureAtlas?h`
                vtc.size = ${Tt(e,"texEmission")};
                applyEmission(vtc);`:h`applyEmission(vtc);`:""}
      ${e.hasOcclusionTextureTransform?h`vtc.uv = occlusionUV;`:""}
      ${e.hasOcclusionTexture?e.supportsTextureAtlas?h`
                vtc.size = ${Tt(e,"texOcclusion")};
                applyOcclusion(vtc);`:h`applyOcclusion(vtc);`:""}
    }
  `)}}else r.code.add(h`float getBakedOcclusion() { return 1.0; }`);else r.code.add(h`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function Qc(t,e){if(Ai(t),e.hasModelTransformation)return t.vertex.code.add(h`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = calculateLinearDepth(nearFar, eye.z);
return proj * eye;
}`),void t.vertex.code.add(h`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);t.vertex.code.add(h`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),t.vertex.code.add(h`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}const Tn=Jt(1,1,0,1),Sn=Jt(1,0,1,1);function el(t,e){t.fragment.uniforms.add(at("depthTex",(r,i)=>i.highlightDepthTexture,e.hasWebGL2Context?q.None:q.InvSize)),t.fragment.constants.add("occludedHighlightFlag","vec4",Tn).add("unoccludedHighlightFlag","vec4",Sn),t.fragment.code.add(h`
    void outputHighlight() {
      vec3 fragCoord = gl_FragCoord.xyz;

      float sceneDepth = ${za(e,"depthTex","fragCoord.xy")}.x;
      if (fragCoord.z > sceneDepth + 5e-7) {
        gl_FragColor = occludedHighlightFlag;
      }
      else {
        gl_FragColor = unoccludedHighlightFlag;
      }
    }
  `)}function tl(t,e){const r=t.fragment,i=e.lightingSphericalHarmonicsOrder!==void 0?e.lightingSphericalHarmonicsOrder:2;i===0?(r.uniforms.add(new W("lightingAmbientSH0",(a,s)=>U(Cr,s.lighting.sh.r[0],s.lighting.sh.g[0],s.lighting.sh.b[0]))),r.code.add(h`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):i===1?(r.uniforms.add([new j("lightingAmbientSH_R",(a,s)=>X(ge,s.lighting.sh.r[0],s.lighting.sh.r[1],s.lighting.sh.r[2],s.lighting.sh.r[3])),new j("lightingAmbientSH_G",(a,s)=>X(ge,s.lighting.sh.g[0],s.lighting.sh.g[1],s.lighting.sh.g[2],s.lighting.sh.g[3])),new j("lightingAmbientSH_B",(a,s)=>X(ge,s.lighting.sh.b[0],s.lighting.sh.b[1],s.lighting.sh.b[2],s.lighting.sh.b[3]))]),r.code.add(h`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):i===2&&(r.uniforms.add([new W("lightingAmbientSH0",(a,s)=>U(Cr,s.lighting.sh.r[0],s.lighting.sh.g[0],s.lighting.sh.b[0])),new j("lightingAmbientSH_R1",(a,s)=>X(ge,s.lighting.sh.r[1],s.lighting.sh.r[2],s.lighting.sh.r[3],s.lighting.sh.r[4])),new j("lightingAmbientSH_G1",(a,s)=>X(ge,s.lighting.sh.g[1],s.lighting.sh.g[2],s.lighting.sh.g[3],s.lighting.sh.g[4])),new j("lightingAmbientSH_B1",(a,s)=>X(ge,s.lighting.sh.b[1],s.lighting.sh.b[2],s.lighting.sh.b[3],s.lighting.sh.b[4])),new j("lightingAmbientSH_R2",(a,s)=>X(ge,s.lighting.sh.r[5],s.lighting.sh.r[6],s.lighting.sh.r[7],s.lighting.sh.r[8])),new j("lightingAmbientSH_G2",(a,s)=>X(ge,s.lighting.sh.g[5],s.lighting.sh.g[6],s.lighting.sh.g[7],s.lighting.sh.g[8])),new j("lightingAmbientSH_B2",(a,s)=>X(ge,s.lighting.sh.b[5],s.lighting.sh.b[6],s.lighting.sh.b[7],s.lighting.sh.b[8]))]),r.code.add(h`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),e.pbrMode!==k.Normal&&e.pbrMode!==k.Schematic||r.code.add(h`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const Cr=R(),ge=ut();function An(t){t.uniforms.add(new W("mainLightDirection",(e,r)=>r.lighting.mainLight.direction))}function wn(t){t.uniforms.add(new W("mainLightIntensity",(e,r)=>r.lighting.mainLight.intensity))}function Mn(t,e){e.useLegacyTerrainShading?t.uniforms.add(new nt("lightingFixedFactor",(r,i)=>i.lighting.noonFactor*(1-i.lighting.globalFactor))):t.constants.add("lightingFixedFactor","float",0)}function rl(t,e){const r=t.fragment;An(r),wn(r),Mn(r,e),r.code.add(h`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}let En=class extends H{constructor(e,r){super(e,"int",$.Pass,(i,a,s)=>i.setUniform1i(e,r(a,s)))}},On=class extends H{constructor(e,r,i){super(e,"mat4",$.Draw,(a,s,n)=>a.setUniformMatrix4fv(e,r(s,n)),i)}},yn=class extends H{constructor(e,r,i){super(e,"mat4",$.Pass,(a,s,n)=>a.setUniformMatrix4fv(e,r(s,n)),i)}};function nl(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new yn("shadowMapMatrix",(r,i)=>i.shadowMap.getShadowMapMatrices(r.origin),4)),Ci(t,e))}function ol(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new On("shadowMapMatrix",(r,i)=>i.shadowMap.getShadowMapMatrices(r.origin),4)),Ci(t,e))}function Ci(t,e){const r=t.fragment;r.include(sr),r.uniforms.add([...at("shadowMapTex",(i,a)=>a.shadowMap.depthTexture,e.hasWebGL2Context?q.None:q.Size),new En("numCascades",(i,a)=>a.shadowMap.numCascades),new j("cascadeDistances",(i,a)=>a.shadowMap.cascadeDistances)]),r.code.add(h`
    int chooseCascade(float depth, out mat4 mat) {
      vec4 distance = cascadeDistances;

      // choose correct cascade
      int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;

      mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];

      return i;
    }

    vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
      vec4 lv = mat * vec4(_vpos, 1.0);
      lv.xy /= lv.w;
      return 0.5 * lv.xyz + vec3(0.5);
    }

    vec2 cascadeCoordinates(int i, vec3 lvpos) {
      return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
    }

    float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
      return rgba2float(texture2D(_depthTex, uv));
    }

    float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
      return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
    }

    float filterShadow(vec2 uv, vec3 lvpos, float textureSize, sampler2D _depthTex) {
      float halfPixelSize = 0.5 / textureSize;

      // filter, offset by half pixels
      vec2 st = fract((vec2(halfPixelSize) + uv) * textureSize);

      float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
      float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);

      return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
    }

    float readShadowMap(const in vec3 _vpos, float _linearDepth) {
      mat4 mat;
      int i = chooseCascade(_linearDepth, mat);

      if (i >= numCascades) { return 0.0; }

      vec3 lvpos = lightSpacePosition(_vpos, mat);

      // vertex completely outside? -> no shadow
      if (lvpos.z >= 1.0) { return 0.0; }
      if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }

      // calc coord in cascade texture
      vec2 uv = cascadeCoordinates(i, lvpos);

      vec2 textureSize = ${Tt(e,"shadowMapTex")};

      return filterShadow(uv, lvpos, textureSize.x, shadowMapTex);
    }
  `)}function Pn(t){const e=t.fragment.code;e.add(h`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.add(h`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.add(h`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function cl(t,e){const r=t.fragment.code;t.include(yi),e.pbrMode!==k.Normal&&e.pbrMode!==k.Schematic&&e.pbrMode!==k.Terrain&&e.pbrMode!==k.TerrainWithWater||(r.add(h`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(h`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),e.pbrMode!==k.Normal&&e.pbrMode!==k.Schematic||(t.include(Pn),r.add(h`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(h`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(h`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(h`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}function ll(t,e){const r=t.fragment.code;t.include(yi),r.add(h`
  struct PBRShadingWater
  {
      float NdotL;   // cos angle between normal and light direction
      float NdotV;   // cos angle between normal and view direction
      float NdotH;   // cos angle between normal and half vector
      float VdotH;   // cos angle between view direction and half vector
      float LdotH;   // cos angle between light direction and half vector
      float VdotN;   // cos angle between view direction and normal vector
  };

  float dtrExponent = ${e.useCustomDTRExponentForWater?"2.2":"2.0"};
  `),r.add(h`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(h`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(h`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(h`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)}let hl=class extends H{constructor(e,r){super(e,"bool",$.Pass,(i,a,s)=>i.setUniform1b(e,r(a,s)))}};const Bt=4;function In(){const t=new rr,e=t.fragment;t.include(tr);const r=(Bt+1)/2,i=1/(2*r*r);return e.include(nr),e.uniforms.add([new De("depthMap",a=>a.depthTexture),new Li("tex",a=>a.colorTexture),new Yt("blurSize",a=>a.blurSize),new nt("projScale",(a,s)=>{const n=ha(s.camera.eye,s.camera.center);return n>5e4?Math.max(0,a.projScale-(n-5e4)):a.projScale}),new ae("nearFar",(a,s)=>s.camera.nearFar)]),e.code.add(h`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture2D(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${h.float(i)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.code.add(h`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${h.int(Bt)}; r <= ${h.int(Bt)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      gl_FragColor = vec4(b / w_total);
    }
  `),t}const $n=Object.freeze(Object.defineProperty({__proto__:null,build:In},Symbol.toStringTag,{value:"Module"}));let zi=class Ni extends ci{initializeProgram(e){return new li(e.rctx,Ni.shader.get().build(),It)}initializePipeline(){return Wr({colorWrite:qr})}};zi.shader=new oi($n,()=>Zt(()=>import("./SSAOBlur.glsl-824884b6.js"),["assets/SSAOBlur.glsl-824884b6.js","assets/index-53e0d3f6.js","assets/index-0be7f32f.css","assets/OrderIndependentTransparency-92d1201d.js","assets/enums-64ab819c.js","assets/basicInterfaces-04e01328.js","assets/VertexAttribute-15d1866a.js","assets/requestImageUtils-0386f73f.js","assets/Texture-0787b5b8.js","assets/VertexArrayObject-d229d289.js","assets/Util-5a607d58.js","assets/mat4f64-65d35099.js","assets/triangle-cbb245f7.js","assets/sphere-ca10ea93.js","assets/mat3f64-221ce671.js","assets/quatf64-3363c48e.js","assets/lineSegment-4948db8a.js","assets/Indices-9b814586.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/quat-d5f88513.js","assets/vec3f32-ad1dc57f.js","assets/BufferView-abbd0a70.js","assets/VertexElementDescriptor-2925c6af.js"]));const Rn="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM",zr=16;function Fn(){const t=new rr,e=t.fragment;return t.include(tr),e.include(nr),t.include(hs),e.uniforms.add(new nt("radius",(r,i)=>cr(i.camera))),e.code.add(h`vec3 sphere[16];
void fillSphere() {
sphere[0] = vec3(0.186937, 0.0, 0.0);
sphere[1] = vec3(0.700542, 0.0, 0.0);
sphere[2] = vec3(-0.864858, -0.481795, -0.111713);
sphere[3] = vec3(-0.624773, 0.102853, -0.730153);
sphere[4] = vec3(-0.387172, 0.260319, 0.007229);
sphere[5] = vec3(-0.222367, -0.642631, -0.707697);
sphere[6] = vec3(-0.01336, -0.014956, 0.169662);
sphere[7] = vec3(0.122575, 0.1544, -0.456944);
sphere[8] = vec3(-0.177141, 0.85997, -0.42346);
sphere[9] = vec3(-0.131631, 0.814545, 0.524355);
sphere[10] = vec3(-0.779469, 0.007991, 0.624833);
sphere[11] = vec3(0.308092, 0.209288,0.35969);
sphere[12] = vec3(0.359331, -0.184533, -0.377458);
sphere[13] = vec3(0.192633, -0.482999, -0.065284);
sphere[14] = vec3(0.233538, 0.293706, -0.055139);
sphere[15] = vec3(0.417709, -0.386701, 0.442449);
}
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn-bias, 0.0);
}`),e.code.add(h`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.uniforms.add([new ae("nearFar",(r,i)=>i.camera.nearFar),new De("normalMap",r=>r.normalTexture),new De("depthMap",r=>r.depthTexture),new ae("zScale",(r,i)=>hi(i)),new nt("projScale",r=>r.projScale),new De("rnm",r=>r.noiseTexture),new ae("rnmScale",(r,i)=>ue(Nr,i.camera.fullWidth/Ot(r.noiseTexture).descriptor.width,i.camera.fullHeight/Ot(r.noiseTexture).descriptor.height)),new nt("intensity",r=>r.intensity),new ae("screenSize",(r,i)=>ue(Nr,i.camera.fullWidth,i.camera.fullHeight))]),e.code.add(h`
    void main(void) {
      fillSphere();
      vec3 fres = normalize((texture2D(rnm, uv * rnmScale).xyz * 2.0) - vec3(1.0));
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
        gl_FragColor = vec4(0.0);
        return;
      }

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy,currentPixelDepth);

      // get the normal of current fragment
      vec4 norm4 = texture2D(normalMap, uv);
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
      bool isTerrain = norm4.w<0.5;

      float sum = .0;
      vec3 tapPixelPos;

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${h.int(zr)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        //don't use current or very nearby samples
        if ( abs(offset.x)<2.0 || abs(offset.y)<2.0) continue;

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        if (isTerrain) {
          bool isTerrainTap = texture2D(normalMap, tcTap).w<0.5;
          if (isTerrainTap) {
            continue;
          }
        }

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum+= aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${h.int(zr)}),0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4)/2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;
      gl_FragColor = vec4(A);
    }
  `),t}function cr(t){return Math.max(10,20*t.computeRenderPixelSizeAtDist(Math.abs(4*t.relativeElevation)))}const Nr=ht(),Ln=Object.freeze(Object.defineProperty({__proto__:null,build:Fn,getRadius:cr},Symbol.toStringTag,{value:"Module"}));class $t extends ci{initializeProgram(e){return new li(e.rctx,$t.shader.get().build(),It)}initializePipeline(){return Wr({colorWrite:qr})}}$t.shader=new oi(Ln,()=>Zt(()=>import("./SSAO.glsl-a178e7cd.js"),["assets/SSAO.glsl-a178e7cd.js","assets/index-53e0d3f6.js","assets/index-0be7f32f.css","assets/OrderIndependentTransparency-92d1201d.js","assets/enums-64ab819c.js","assets/basicInterfaces-04e01328.js","assets/VertexAttribute-15d1866a.js","assets/requestImageUtils-0386f73f.js","assets/Texture-0787b5b8.js","assets/VertexArrayObject-d229d289.js","assets/Util-5a607d58.js","assets/mat4f64-65d35099.js","assets/triangle-cbb245f7.js","assets/sphere-ca10ea93.js","assets/mat3f64-221ce671.js","assets/quatf64-3363c48e.js","assets/lineSegment-4948db8a.js","assets/Indices-9b814586.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/quat-d5f88513.js","assets/vec3f32-ad1dc57f.js","assets/BufferView-abbd0a70.js","assets/VertexElementDescriptor-2925c6af.js"]));class Cn extends Me{constructor(){super(...arguments),this.projScale=1}}let zn=class extends Cn{constructor(){super(...arguments),this.intensity=1}},Nn=class extends Me{},Bn=class extends Nn{constructor(){super(...arguments),this.blurSize=ht()}};const xt=2;class pl{constructor(e,r,i,a){this._view=e,this._techniqueRepository=r,this._rctx=i,this._requestRender=a,this._quadVAO=null,this._passParameters=new zn,this._drawParameters=new Bn}dispose(){this.enabled=!1,this._quadVAO=Ne(this._quadVAO)}disposeOffscreenBuffers(){Rt(this._ssaoFBO,e=>e.resize(0,0)),Rt(this._blur0FBO,e=>e.resize(0,0)),Rt(this._blur1FBO,e=>e.resize(0,0))}set enabled(e){e?this._enable():this._disable()}get enabled(){return _(this._enableTime)}get active(){return this.enabled&&this._ssaoTechnique.compiled&&this._blurTechnique.compiled}get colorTexture(){return _(this._blur1FBO)?this._blur1FBO.colorTexture:null}render(e,r,i,a){if(I(this._enableTime)||I(i)||I(a)||I(this._ssaoFBO)||I(this._blur0FBO)||I(this._blur1FBO))return;if(!this.active)return this._enableTime=r,void this._requestRender();this._enableTime===0&&(this._enableTime=r);const s=this._rctx,n=e.camera,o=this._view.qualitySettings.fadeDuration,l=o>0?Math.min(o,r-this._enableTime)/o:1;this._passParameters.normalTexture=a,this._passParameters.depthTexture=i,this._passParameters.projScale=1/n.computeRenderPixelSizeAtDist(1),this._passParameters.intensity=4*Dn/cr(n)**6*l;const c=n.fullViewport,d=c[2],f=c[3],m=d/xt,p=f/xt;this._ssaoFBO.resize(d,f),this._blur0FBO.resize(m,p),this._blur1FBO.resize(m,p),I(this._quadVAO)&&(this._quadVAO=ni(this._rctx)),s.bindFramebuffer(this._ssaoFBO),s.setViewport(0,0,d,f),s.bindTechnique(this._ssaoTechnique,this._passParameters,e).bindDraw(this._drawParameters,e,this._passParameters),s.bindVAO(this._quadVAO);const v=Yr(this._quadVAO,"geometry");s.drawArrays(it.TRIANGLE_STRIP,0,v);const x=s.bindTechnique(this._blurTechnique,this._passParameters,e);s.setViewport(0,0,m,p),s.bindFramebuffer(this._blur0FBO),this._drawParameters.colorTexture=this._ssaoFBO.colorTexture,ue(this._drawParameters.blurSize,0,xt/f),x.bindDraw(this._drawParameters,e,this._passParameters),s.setViewport(0,0,m,p),s.drawArrays(it.TRIANGLE_STRIP,0,v),s.bindFramebuffer(this._blur1FBO),this._drawParameters.colorTexture=this._blur0FBO.colorTexture,ue(this._drawParameters.blurSize,xt/d,0),x.bindDraw(this._drawParameters,e,this._passParameters),s.drawArrays(it.TRIANGLE_STRIP,0,v),s.setViewport(c[0],c[1],c[2],c[3]),l<1&&this._requestRender()}_enable(){if(_(this._enableTime))return;const e={target:ct.TEXTURE_2D,pixelFormat:le.RGBA,dataType:lt.UNSIGNED_BYTE,samplingMode:Te.LINEAR,wrapMode:tt.CLAMP_TO_EDGE,width:0,height:0},r={colorTarget:kr.TEXTURE,depthStencilTarget:Xr.NONE};this._ssaoFBO=new bt(this._rctx,r,e),this._blur0FBO=new bt(this._rctx,r,e),this._blur1FBO=new bt(this._rctx,r,e);const i=Uint8Array.from(atob(Rn),a=>a.charCodeAt(0));this._passParameters.noiseTexture=new he(this._rctx,{target:ct.TEXTURE_2D,pixelFormat:le.RGB,dataType:lt.UNSIGNED_BYTE,hasMipmap:!0,width:32,height:32},i),I(this._ssaoTechnique)&&(this._ssaoTechnique=this._techniqueRepository.acquire($t)),I(this._blurTechnique)&&(this._blurTechnique=this._techniqueRepository.acquire(zi)),this._enableTime=da(0),this._requestRender()}_disable(){this._enableTime=null,this._passParameters.noiseTexture=Ne(this._passParameters.noiseTexture),this._blur1FBO=Ne(this._blur1FBO),this._blur0FBO=Ne(this._blur0FBO),this._ssaoFBO=Ne(this._ssaoFBO)}get gpuMemoryUsage(){return(_(this._blur0FBO)?this._blur0FBO.gpuMemoryUsage:0)+(_(this._blur1FBO)?this._blur1FBO.gpuMemoryUsage:0)+(_(this._ssaoFBO)?this._ssaoFBO.gpuMemoryUsage:0)}get test(){return{ssao:this._ssaoFBO,blur:this._blur1FBO}}}const Dn=.5;function Gn(t){t.vertex.code.add(h`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),t.vertex.code.add(h`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),t.vertex.code.add(h`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),t.vertex.code.add(h`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),t.vertex.code.add(h`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),t.vertex.code.add(h`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),t.vertex.code.add(h`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function gl(t){t.uniforms.add(new j("screenSizePerspective",e=>Bi(e.screenSizePerspective)))}function Hn(t){t.uniforms.add(new j("screenSizePerspectiveAlignment",e=>Bi(e.screenSizePerspectiveAlignment||e.screenSizePerspective)))}function Bi(t){return X(Vn,t.parameters.divisor,t.parameters.offset,t.parameters.minPixelSize,t.paddingPixelsOverride)}const Vn=ut();function vl(t,e){const r=t.vertex;e.hasVerticalOffset?(jn(r),e.hasScreenSizePerspective&&(t.include(Gn),Hn(r),Ws(t.vertex,e)),r.code.add(h`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${e.spherical?h`vec3 worldNormal = normalize(worldPos + localOrigin);`:h`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${e.hasScreenSizePerspective?h`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:h`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(h`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const Un=ut();function jn(t){t.uniforms.add(new j("verticalOffset",(e,r)=>{const{minWorldLength:i,maxWorldLength:a,screenLength:s}=e.verticalOffset,n=Math.tan(.5*r.camera.fovY)/(.5*r.camera.fullViewport[3]),o=r.camera.pixelRatio||1;return X(Un,s*o,n,i,a)}))}function _l(t,e){e.hasVvInstancing&&(e.vvSize||e.vvColor)&&t.attributes.add(u.INSTANCEFEATUREATTRIBUTE,"vec4");const r=t.vertex;e.vvSize?(r.uniforms.add(new W("vvSizeMinSize",i=>i.vvSizeMinSize)),r.uniforms.add(new W("vvSizeMaxSize",i=>i.vvSizeMaxSize)),r.uniforms.add(new W("vvSizeOffset",i=>i.vvSizeOffset)),r.uniforms.add(new W("vvSizeFactor",i=>i.vvSizeFactor)),r.uniforms.add(new or("vvSymbolRotationMatrix",i=>i.vvSymbolRotationMatrix)),r.uniforms.add(new W("vvSymbolAnchor",i=>i.vvSymbolAnchor)),r.code.add(h`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(h`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${e.hasVvInstancing?h`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(h`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),e.vvColor?(r.constants.add("vvColorNumber","int",Ct),e.hasVvInstancing&&r.uniforms.add([new Us("vvColorValues",i=>i.vvColorValues,Ct),new Vs("vvColorColors",i=>i.vvColorColors,Ct)]),r.code.add(h`
      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${e.hasVvInstancing?h`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):r.code.add(h`vec4 vvColor() { return vec4(1.0); }`)}function xl(t,e){e.hasVertexColors?(t.attributes.add(u.COLOR,"vec4"),t.varyings.add("vColor","vec4"),t.vertex.code.add(h`void forwardVertexColor() { vColor = color; }`),t.vertex.code.add(h`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):t.vertex.code.add(h`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}export{Ct as $,yr as A,dc as B,ot as C,Ai as D,It as E,uc as F,Io as G,De as H,vc as I,gc as J,bc as K,Ac as L,Sc as M,xc as N,Mc as O,Tc as P,wc as Q,_c as R,Yc as S,Jo as T,Oa as U,ls as V,Ho as W,mo as X,gi as Y,W as Z,Us as _,nt as a,Se as a$,Vs as a0,Fs as a1,Qc as a2,ol as a3,ic as a4,el as a5,Ns as a6,Ws as a7,wn as a8,k as a9,Nc as aA,Vc as aB,H as aC,$ as aD,hl as aE,An as aF,ll as aG,rl as aH,tl as aI,Oo as aJ,ei as aK,pl as aL,Po as aM,qs as aN,Gn as aO,jn as aP,za as aQ,_l as aR,gl as aS,fi as aT,Bo as aU,No as aV,Go as aW,bn as aX,jc as aY,pn as aZ,Ls as a_,_s as aa,Wc as ab,xl as ac,mn as ad,nr as ae,hs as af,As as ag,tr as ah,_i as ai,bs as aj,ni as ak,Do as al,gn as am,pc as an,Bc as ao,er as ap,ya as aq,Pa as ar,q as as,at,Tt as au,yi as av,sc as aw,Rc as ax,fc as ay,Fc as az,ci as b,En as b0,vn as b1,ln as b2,Dc as b3,Q as b4,ee as b5,xn as b6,Nt as b7,xt as b8,sn as b9,cl as ba,or as bb,vl as bc,nl as bd,Kc as be,Gc as bf,Na as bg,In as bh,Fn as bi,cr as bj,qt as c,li as d,j as e,ae as f,Mr as g,ko as h,Hn as i,K as j,$s as k,Rs as l,dn as m,un as n,rr as o,Fi as p,Uo as q,Le as r,ze as s,oi as t,ac as u,hc as v,Wo as w,be as x,cc as y,sr as z};
