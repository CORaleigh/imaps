"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[1378],{51378:(_,t,e)=>{e.d(t,{x:()=>N});e(93169);var E=e(16889),T=e(92026),R=e(37825),A=e(49800),r=e(8548),i=e(30308);class N{constructor(_,t){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(this._context=_,this.type="texture",this._glName=null,this._descriptor=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,_.instanceCounter.increment(r._g.Texture,this),this._descriptor={target:r.No.TEXTURE_2D,samplingMode:r.cw.LINEAR,wrapMode:r.e8.REPEAT,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,isImmutable:!1,...t},_.type!==A.zO.WEBGL2&&(this._descriptor.isImmutable&&(this._descriptor.isImmutable=!1),n(this._descriptor.target)))throw new Error("3D and array textures are not supported in WebGL1");this._descriptor.target===r.No.TEXTURE_CUBE_MAP?this._setDataCubeMap(e):this.setData(e)}get glName(){return this._glName}get descriptor(){return this._descriptor}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._context.gl&&this._glName&&(this._context.unbindTexture(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(r._g.Texture,this))}release(){this.dispose()}resize(_,t){const e=this._descriptor;if(e.width!==_||e.height!==t){if(this._wasImmutablyAllocated)throw new Error("Immutable textures can't be resized!");e.width=_,e.height=t,this._descriptor.target===r.No.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}_setDataCubeMap(){let _=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;for(let t=r.No.TEXTURE_CUBE_MAP_POSITIVE_X;t<=r.No.TEXTURE_CUBE_MAP_NEGATIVE_Z;t++)this._setData(_,t)}setData(_){this._setData(_)}_setData(_,t){if(!this._context||!this._context.gl)return;const e=this._context.gl;this._glName||(this._glName=e.createTexture()),void 0===_&&(_=null);const E=this._descriptor;t??(t=E.target);const A=n(t);null===_&&(E.width=E.width||4,E.height=E.height||4,A&&(E.depth=E.depth??1));const s=this._context.bindTexture(this,N.TEXTURE_UNIT_FOR_UPDATES);this._context.setActiveTexture(N.TEXTURE_UNIT_FOR_UPDATES),N._validateTexture(this._context,E),this._configurePixelStorage();const S=E.pixelFormat;let C=E.internalFormat?E.internalFormat:this._deriveInternalFormat(S,E.dataType);if(a(_)){let T=_.width,r=_.height;const i=1;_ instanceof HTMLVideoElement&&(T=_.videoWidth,r=_.videoHeight),E.width&&E.height,A&&E.depth,E.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(t,C,E.hasMipmap,T,r,i),this._texImage(t,0,C,T,r,i,_),(0,R.zu)(e),E.hasMipmap&&this.generateMipmap(),void 0===E.width&&(E.width=T),void 0===E.height&&(E.height=r),A&&void 0===E.depth&&(E.depth=i)}else{const{width:N,height:a,depth:n}=E;if(null!=N&&null!=a||console.error("Width and height must be specified!"),A&&null==n&&console.error("Depth must be specified!"),E.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(t,C,E.hasMipmap,N,a,n),e.DEPTH24_STENCIL8&&C===e.DEPTH_STENCIL&&(C=e.DEPTH24_STENCIL8),o(_)){const T=_.levels,R=I(t,N,a,n),A=Math.min(R-1,T.length-1);(0,i.Z)(e)?e.texParameteri(E.target,e.TEXTURE_MAX_LEVEL,A):E.hasMipmap=E.hasMipmap&&R===T.length;const o=C;if(!function(_){return _ in r.q_}(o))throw new Error("Attempting to use compressed data with an umcompressed format!");this._forEachMipmapLevel(((_,e,E,R)=>{const A=T[Math.min(_,T.length-1)];this._compressedTexImage(t,_,o,e,E,R,A)}),A)}else(0,T.pC)(_)?(this._texImage(t,0,C,N,a,n,_),(0,R.zu)(e),E.hasMipmap&&this.generateMipmap()):this._forEachMipmapLevel(((_,E,T,A)=>{this._texImage(t,_,C,E,T,A,null),(0,R.zu)(e)}))}N._applySamplingMode(e,this._descriptor),N._applyWrapMode(e,this._descriptor),N._applyAnisotropicFilteringParameters(this._context,this._descriptor),(0,R.zu)(e),this._context.bindTexture(s,N.TEXTURE_UNIT_FOR_UPDATES)}updateData(_,t,e,E,T,R){R||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const A=this._context.gl,r=this._descriptor,{pixelFormat:i,internalFormat:n,dataType:I,isImmutable:s,target:S}=r;if(s&&!this._wasImmutablyAllocated)throw new Error("Cannot update immutable texture before allocation!");const C=this._context.bindTexture(this,N.TEXTURE_UNIT_FOR_UPDATES);(t<0||e<0||E>r.width||T>r.height||t+E>r.width||e+T>r.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),a(R)?A.texSubImage2D(S,_,t,e,i,I,R):o(R)?A.compressedTexSubImage2D(S,_,t,e,E,T,n,R.levels[_]):A.texSubImage2D(S,_,t,e,E,T,i,I,R),this._context.bindTexture(C,N.TEXTURE_UNIT_FOR_UPDATES)}updateData3D(_,t,e,E,T,R,A,r){r||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const a=this._context.gl;if(!(0,i.Z)(a))throw new Error("3D textures are not supported in WebGL1");const I=this._descriptor,{pixelFormat:s,dataType:S,isImmutable:C,target:O,internalFormat:M}=I;if(C&&!this._wasImmutablyAllocated)throw new Error("Cannot update immutable texture before allocation!");n(O)||console.warn("Attempting to set 3D texture data on a non-3D texture");const D=this._context.bindTexture(this,N.TEXTURE_UNIT_FOR_UPDATES);if(this._context.setActiveTexture(N.TEXTURE_UNIT_FOR_UPDATES),(t<0||e<0||E<0||T>I.width||R>I.height||A>I.depth||t+T>I.width||e+R>I.height||E+A>I.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),o(r))r=r.levels[_],a.compressedTexSubImage3D(O,_,t,e,E,T,R,A,M,r);else{const i=r;a.texSubImage3D(O,_,t,e,E,T,R,A,s,S,i)}this._context.bindTexture(D,N.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const _=this._descriptor;if(!_.hasMipmap){if(this._wasImmutablyAllocated)throw new Error("Cannot add mipmaps to immutable texture after allocation");_.hasMipmap=!0,this._samplingModeDirty=!0,N._validateTexture(this._context,_)}_.samplingMode===r.cw.LINEAR?(this._samplingModeDirty=!0,_.samplingMode=r.cw.LINEAR_MIPMAP_NEAREST):_.samplingMode===r.cw.NEAREST&&(this._samplingModeDirty=!0,_.samplingMode=r.cw.NEAREST_MIPMAP_NEAREST);const t=this._context.bindTexture(this,N.TEXTURE_UNIT_FOR_UPDATES);this._context.setActiveTexture(N.TEXTURE_UNIT_FOR_UPDATES),this._context.gl.generateMipmap(_.target),this._context.bindTexture(t,N.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(_){_!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=_,this._samplingModeDirty=!0)}setWrapMode(_){_!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=_,N._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const _=this._context.gl,t=this._descriptor;this._samplingModeDirty&&(N._applySamplingMode(_,t),this._samplingModeDirty=!1),this._wrapModeDirty&&(N._applyWrapMode(_,t),this._wrapModeDirty=!1)}_deriveInternalFormat(_,t){if(this._context.type===A.zO.WEBGL1)return _;switch(t){case r.Br.FLOAT:switch(_){case r.VI.RGBA:return r.lP.RGBA32F;case r.VI.RGB:return r.lP.RGB32F;default:throw new Error("Unable to derive format")}case r.Br.UNSIGNED_BYTE:switch(_){case r.VI.RGBA:return r.lP.RGBA8;case r.VI.RGB:return r.lP.RGB8}default:return _}}_configurePixelStorage(){const _=this._context.gl,{unpackAlignment:t,flipped:e,preMultiplyAlpha:E}=this._descriptor;_.pixelStorei(_.UNPACK_ALIGNMENT,t),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,e?1:0),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E?1:0)}_texStorage(_,t,e,E,T,R){const A=this._context.gl;if(!(0,i.Z)(A))throw new Error("Immutable textures are not supported in WebGL1");if(!function(_){return _ in r.lP}(t))throw new Error("Immutable textures must have a sized internal format");if(!this._descriptor.isImmutable)return;const N=e?I(_,E,T,R):1;n(_)?A.texStorage3D(_,N,t,E,T,R):A.texStorage2D(_,N,t,E,T),this._wasImmutablyAllocated=!0}_texImage(_,t,e,E,R,r,i){const N=this._context.gl;let o=null;const I=this._context.type===A.zO.WEBGL2,s=n(_),{isImmutable:S,pixelFormat:C,dataType:O}=this._descriptor;if(I&&(o=N),I||!a(i))if(S){if((0,T.pC)(i)){const e=i;s?o.texSubImage3D(_,t,0,0,0,E,R,r,C,O,e):N.texSubImage2D(_,t,0,0,E,R,C,O,e)}}else{const A=(0,T.Wg)(i);s?o.texImage3D(_,t,e,E,R,r,0,C,O,A):N.texImage2D(_,t,e,E,R,0,C,O,A)}else N.texImage2D(_,0,e,C,O,i)}_compressedTexImage(_,t,e,E,R,r,i){const N=this._context.gl;let o=null;const a=n(_),I=this._descriptor.isImmutable;if(a){if(this._context.type!==A.zO.WEBGL2)throw new Error("3D textures are not supported in WebGL1");o=N}I?(0,T.pC)(i)&&(a?o.compressedTexSubImage3D(_,t,0,0,0,E,R,r,e,i):N.compressedTexSubImage2D(_,t,0,0,E,R,e,i)):a?o.compressedTexImage3D(_,t,e,E,R,r,0,i):N.compressedTexImage2D(_,t,e,E,R,0,i)}_forEachMipmapLevel(_){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1/0,{width:e,height:E,depth:T,hasMipmap:R,target:A}=this._descriptor;const i=A===r.No.TEXTURE_3D;for(let r=0;_(r,e,E,T),R&&(1!==e||1!==E||i&&1!==T)&&!(r>=t);++r)e=Math.max(1,e>>1),E=Math.max(1,E>>1),i&&(T=Math.max(1,T>>1))}static _validateTexture(_,t){(t.width<0||t.height<0||t.depth<0)&&console.error("Negative dimension parameters are not allowed!");const e=(0,i.Z)(_.gl),T=(0,E.wt)(t.width)&&(0,E.wt)(t.height);e||!t.isImmutable&&!n(t.target)||console.error("Immutable and 3D-like textures are not supported in WebGL1!"),e||T||("number"==typeof t.wrapMode?t.wrapMode!==r.e8.CLAMP_TO_EDGE&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):t.wrapMode.s===r.e8.CLAMP_TO_EDGE&&t.wrapMode.t===r.e8.CLAMP_TO_EDGE||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),t.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}static _applySamplingMode(_,t){let e=t.samplingMode,E=t.samplingMode;e===r.cw.LINEAR_MIPMAP_NEAREST||e===r.cw.LINEAR_MIPMAP_LINEAR?(e=r.cw.LINEAR,t.hasMipmap||(E=r.cw.LINEAR)):e!==r.cw.NEAREST_MIPMAP_NEAREST&&e!==r.cw.NEAREST_MIPMAP_LINEAR||(e=r.cw.NEAREST,t.hasMipmap||(E=r.cw.NEAREST)),_.texParameteri(t.target,_.TEXTURE_MAG_FILTER,e),_.texParameteri(t.target,_.TEXTURE_MIN_FILTER,E)}static _applyWrapMode(_,t){"number"==typeof t.wrapMode?(_.texParameteri(t.target,_.TEXTURE_WRAP_S,t.wrapMode),_.texParameteri(t.target,_.TEXTURE_WRAP_T,t.wrapMode)):(_.texParameteri(t.target,_.TEXTURE_WRAP_S,t.wrapMode.s),_.texParameteri(t.target,_.TEXTURE_WRAP_T,t.wrapMode.t))}static _applyAnisotropicFilteringParameters(_,t){const e=_.capabilities.textureFilterAnisotropic;e&&_.gl.texParameterf(t.target,e.TEXTURE_MAX_ANISOTROPY,t.maxAnisotropy??1)}}function o(_){return(0,T.pC)(_)&&"type"in _&&"compressed"===_.type}function a(_){return(0,T.pC)(_)&&!o(_)&&!function(_){return(0,T.pC)(_)&&"byteLength"in _}(_)}function n(_){return _===r.No.TEXTURE_3D||_===r.No.TEXTURE_2D_ARRAY}function I(_,t,e){let E=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,T=Math.max(t,e);return _===r.No.TEXTURE_3D&&(T=Math.max(T,E)),Math.round(Math.log(T)/Math.LN2)+1}N.TEXTURE_UNIT_FOR_UPDATES=0},30308:(_,t,e)=>{function E(_){return window.WebGL2RenderingContext&&_ instanceof window.WebGL2RenderingContext}e.d(t,{Z:()=>E})},37825:(_,t,e)=>{e.d(t,{CG:()=>i,hZ:()=>r,zu:()=>N});var E=e(10064),T=e(93169);const R=e(32718).Z.getLogger("esri/views/webgl");const A=!!(0,T.Z)("enable-feature:webgl-debug");function r(){return A}function i(){return A}function N(_){if(r()){const t=_.getError();if(t){const e=function(_,t){switch(t){case _.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case _.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case _.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case _.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case _.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case _.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}(_,t),T=(new Error).stack;R.error(new E.Z("webgl-error","WebGL error occured",{message:e,stack:T}))}}}},8548:(_,t,e)=>{var E,T,R,A,r,i,N,o,a,n,I,s,S,C,O,M,D,L,P,U,c,h;e.d(t,{Br:()=>M,Ho:()=>P,LR:()=>i,Ld:()=>l,Lm:()=>c,Lu:()=>G,MX:()=>T,No:()=>S,OU:()=>h,Se:()=>m,Tg:()=>D,V7:()=>x,VI:()=>C,VY:()=>p,Wf:()=>N,Y5:()=>g,_g:()=>u,cw:()=>I,db:()=>A,e8:()=>s,g:()=>o,l1:()=>L,lP:()=>O,lk:()=>E,q_:()=>d,qi:()=>U,w0:()=>r,wb:()=>a,xS:()=>n,zi:()=>R}),function(_){_[_.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",_[_.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",_[_.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT"}(E||(E={})),function(_){_[_.POINTS=0]="POINTS",_[_.LINES=1]="LINES",_[_.LINE_LOOP=2]="LINE_LOOP",_[_.LINE_STRIP=3]="LINE_STRIP",_[_.TRIANGLES=4]="TRIANGLES",_[_.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",_[_.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(T||(T={})),function(_){_[_.ZERO=0]="ZERO",_[_.ONE=1]="ONE",_[_.SRC_COLOR=768]="SRC_COLOR",_[_.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",_[_.SRC_ALPHA=770]="SRC_ALPHA",_[_.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",_[_.DST_ALPHA=772]="DST_ALPHA",_[_.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",_[_.DST_COLOR=774]="DST_COLOR",_[_.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",_[_.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",_[_.CONSTANT_COLOR=32769]="CONSTANT_COLOR",_[_.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",_[_.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",_[_.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(R||(R={})),function(_){_[_.ADD=32774]="ADD",_[_.SUBTRACT=32778]="SUBTRACT",_[_.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(A||(A={})),function(_){_[_.ARRAY_BUFFER=34962]="ARRAY_BUFFER",_[_.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",_[_.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",_[_.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",_[_.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",_[_.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",_[_.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER"}(r||(r={})),function(_){_[_.FRONT=1028]="FRONT",_[_.BACK=1029]="BACK",_[_.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(i||(i={})),function(_){_[_.CW=2304]="CW",_[_.CCW=2305]="CCW"}(N||(N={})),function(_){_[_.BYTE=5120]="BYTE",_[_.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",_[_.SHORT=5122]="SHORT",_[_.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",_[_.INT=5124]="INT",_[_.UNSIGNED_INT=5125]="UNSIGNED_INT",_[_.FLOAT=5126]="FLOAT"}(o||(o={})),function(_){_[_.NEVER=512]="NEVER",_[_.LESS=513]="LESS",_[_.EQUAL=514]="EQUAL",_[_.LEQUAL=515]="LEQUAL",_[_.GREATER=516]="GREATER",_[_.NOTEQUAL=517]="NOTEQUAL",_[_.GEQUAL=518]="GEQUAL",_[_.ALWAYS=519]="ALWAYS"}(a||(a={})),function(_){_[_.ZERO=0]="ZERO",_[_.KEEP=7680]="KEEP",_[_.REPLACE=7681]="REPLACE",_[_.INCR=7682]="INCR",_[_.DECR=7683]="DECR",_[_.INVERT=5386]="INVERT",_[_.INCR_WRAP=34055]="INCR_WRAP",_[_.DECR_WRAP=34056]="DECR_WRAP"}(n||(n={})),function(_){_[_.NEAREST=9728]="NEAREST",_[_.LINEAR=9729]="LINEAR",_[_.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",_[_.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",_[_.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",_[_.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(I||(I={})),function(_){_[_.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",_[_.REPEAT=10497]="REPEAT",_[_.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(s||(s={})),function(_){_[_.TEXTURE_2D=3553]="TEXTURE_2D",_[_.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",_[_.TEXTURE_3D=32879]="TEXTURE_3D",_[_.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",_[_.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",_[_.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",_[_.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",_[_.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",_[_.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",_[_.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(S||(S={})),function(_){_[_.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",_[_.DEPTH_STENCIL=34041]="DEPTH_STENCIL",_[_.ALPHA=6406]="ALPHA",_[_.RGB=6407]="RGB",_[_.RGBA=6408]="RGBA",_[_.LUMINANCE=6409]="LUMINANCE",_[_.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",_[_.RED=6403]="RED",_[_.RG=33319]="RG",_[_.RED_INTEGER=36244]="RED_INTEGER",_[_.RG_INTEGER=33320]="RG_INTEGER",_[_.RGB_INTEGER=36248]="RGB_INTEGER",_[_.RGBA_INTEGER=36249]="RGBA_INTEGER"}(C||(C={})),function(_){_[_.RGBA4=32854]="RGBA4",_[_.R16F=33325]="R16F",_[_.RG16F=33327]="RG16F",_[_.RGB32F=34837]="RGB32F",_[_.RGBA16F=34842]="RGBA16F",_[_.R32F=33326]="R32F",_[_.RG32F=33328]="RG32F",_[_.RGBA32F=34836]="RGBA32F",_[_.R11F_G11F_B10F=35898]="R11F_G11F_B10F",_[_.RGB8=32849]="RGB8",_[_.RGBA8=32856]="RGBA8",_[_.RGB5_A1=32855]="RGB5_A1",_[_.R8=33321]="R8",_[_.RG8=33323]="RG8",_[_.R8I=33329]="R8I",_[_.R8UI=33330]="R8UI",_[_.R16I=33331]="R16I",_[_.R16UI=33332]="R16UI",_[_.R32I=33333]="R32I",_[_.R32UI=33334]="R32UI",_[_.RG8I=33335]="RG8I",_[_.RG8UI=33336]="RG8UI",_[_.RG16I=33337]="RG16I",_[_.RG16UI=33338]="RG16UI",_[_.RG32I=33339]="RG32I",_[_.RG32UI=33340]="RG32UI",_[_.RGB16F=34843]="RGB16F",_[_.RGB9_E5=35901]="RGB9_E5",_[_.SRGB8=35905]="SRGB8",_[_.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",_[_.RGB565=36194]="RGB565",_[_.RGBA32UI=36208]="RGBA32UI",_[_.RGB32UI=36209]="RGB32UI",_[_.RGBA16UI=36214]="RGBA16UI",_[_.RGB16UI=36215]="RGB16UI",_[_.RGBA8UI=36220]="RGBA8UI",_[_.RGB8UI=36221]="RGB8UI",_[_.RGBA32I=36226]="RGBA32I",_[_.RGB32I=36227]="RGB32I",_[_.RGBA16I=36232]="RGBA16I",_[_.RGB16I=36233]="RGB16I",_[_.RGBA8I=36238]="RGBA8I",_[_.RGB8I=36239]="RGB8I",_[_.R8_SNORM=36756]="R8_SNORM",_[_.RG8_SNORM=36757]="RG8_SNORM",_[_.RGB8_SNORM=36758]="RGB8_SNORM",_[_.RGBA8_SNORM=36759]="RGBA8_SNORM",_[_.RGB10_A2=32857]="RGB10_A2",_[_.RGB10_A2UI=36975]="RGB10_A2UI"}(O||(O={})),function(_){_[_.FLOAT=5126]="FLOAT",_[_.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",_[_.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",_[_.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",_[_.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",_[_.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",_[_.BYTE=5120]="BYTE",_[_.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",_[_.SHORT=5122]="SHORT",_[_.UNSIGNED_INT=5125]="UNSIGNED_INT",_[_.INT=5124]="INT",_[_.HALF_FLOAT=5131]="HALF_FLOAT",_[_.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",_[_.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",_[_.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",_[_.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(M||(M={})),function(_){_[_.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",_[_.STENCIL_INDEX8=36168]="STENCIL_INDEX8",_[_.DEPTH_STENCIL=34041]="DEPTH_STENCIL",_[_.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",_[_.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",_[_.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",_[_.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(D||(D={})),function(_){_[_.STATIC_DRAW=35044]="STATIC_DRAW",_[_.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",_[_.STREAM_DRAW=35040]="STREAM_DRAW",_[_.STATIC_READ=35045]="STATIC_READ",_[_.DYNAMIC_READ=35049]="DYNAMIC_READ",_[_.STREAM_READ=35041]="STREAM_READ",_[_.STATIC_COPY=35046]="STATIC_COPY",_[_.DYNAMIC_COPY=35050]="DYNAMIC_COPY",_[_.STREAM_COPY=35042]="STREAM_COPY"}(L||(L={})),function(_){_[_.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",_[_.VERTEX_SHADER=35633]="VERTEX_SHADER"}(P||(P={})),function(_){_[_.FRAMEBUFFER=36160]="FRAMEBUFFER",_[_.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",_[_.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(U||(U={})),function(_){_[_.TEXTURE=0]="TEXTURE",_[_.RENDER_BUFFER=1]="RENDER_BUFFER",_[_.CUBEMAP=2]="CUBEMAP"}(c||(c={})),function(_){_[_.NONE=0]="NONE",_[_.DEPTH_RENDER_BUFFER=1]="DEPTH_RENDER_BUFFER",_[_.STENCIL_RENDER_BUFFER=2]="STENCIL_RENDER_BUFFER",_[_.DEPTH_STENCIL_RENDER_BUFFER=3]="DEPTH_STENCIL_RENDER_BUFFER",_[_.DEPTH_STENCIL_TEXTURE=4]="DEPTH_STENCIL_TEXTURE"}(h||(h={}));const l=33984;var u,p;!function(_){_[_.Texture=0]="Texture",_[_.BufferObject=1]="BufferObject",_[_.VertexArrayObject=2]="VertexArrayObject",_[_.Shader=3]="Shader",_[_.Program=4]="Program",_[_.FramebufferObject=5]="FramebufferObject",_[_.Renderbuffer=6]="Renderbuffer",_[_.Sync=7]="Sync",_[_.COUNT=8]="COUNT"}(u||(u={})),function(_){_[_.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",_[_.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",_[_.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",_[_.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",_[_.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",_[_.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",_[_.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",_[_.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",_[_.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",_[_.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",_[_.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",_[_.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",_[_.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",_[_.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",_[_.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",_[_.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(p||(p={}));const G=33306;var d,m,B,F,g,x,f;!function(_){_[_.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",_[_.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",_[_.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",_[_.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",_[_.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",_[_.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",_[_.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",_[_.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",_[_.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",_[_.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",_[_.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",_[_.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",_[_.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",_[_.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"}(d||(d={})),function(_){_[_.FLOAT=5126]="FLOAT",_[_.FLOAT_VEC2=35664]="FLOAT_VEC2",_[_.FLOAT_VEC3=35665]="FLOAT_VEC3",_[_.FLOAT_VEC4=35666]="FLOAT_VEC4",_[_.INT=5124]="INT",_[_.INT_VEC2=35667]="INT_VEC2",_[_.INT_VEC3=35668]="INT_VEC3",_[_.INT_VEC4=35669]="INT_VEC4",_[_.BOOL=35670]="BOOL",_[_.BOOL_VEC2=35671]="BOOL_VEC2",_[_.BOOL_VEC3=35672]="BOOL_VEC3",_[_.BOOL_VEC4=35673]="BOOL_VEC4",_[_.FLOAT_MAT2=35674]="FLOAT_MAT2",_[_.FLOAT_MAT3=35675]="FLOAT_MAT3",_[_.FLOAT_MAT4=35676]="FLOAT_MAT4",_[_.SAMPLER_2D=35678]="SAMPLER_2D",_[_.SAMPLER_CUBE=35680]="SAMPLER_CUBE",_[_.UNSIGNED_INT=5125]="UNSIGNED_INT",_[_.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",_[_.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",_[_.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",_[_.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",_[_.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",_[_.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",_[_.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",_[_.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",_[_.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",_[_.SAMPLER_3D=35679]="SAMPLER_3D",_[_.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",_[_.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",_[_.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",_[_.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",_[_.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",_[_.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",_[_.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",_[_.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",_[_.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",_[_.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",_[_.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",_[_.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(m||(m={})),function(_){_[_.OBJECT_TYPE=37138]="OBJECT_TYPE",_[_.SYNC_CONDITION=37139]="SYNC_CONDITION",_[_.SYNC_STATUS=37140]="SYNC_STATUS",_[_.SYNC_FLAGS=37141]="SYNC_FLAGS"}(B||(B={})),function(_){_[_.UNSIGNALED=37144]="UNSIGNALED",_[_.SIGNALED=37145]="SIGNALED"}(F||(F={})),function(_){_[_.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",_[_.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",_[_.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",_[_.WAIT_FAILED=37149]="WAIT_FAILED"}(g||(g={})),function(_){_[_.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(x||(x={})),function(_){_[_.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(f||(f={}))}}]);
//# sourceMappingURL=1378.3b7ed936.chunk.js.map