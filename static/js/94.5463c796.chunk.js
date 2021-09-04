(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[94],{1084:function(e,t,r){"use strict";r.r(t),r.d(t,"fetch",(function(){return k})),r.d(t,"gltfToEngineResources",(function(){return G})),r.d(t,"parseUrl",(function(){return H}));var i=r(877),n=r(85),a=r(289),o=r(304),s=r(135),c=r(168),l=r(111),u=r(101),d=r(267),f=r(342),h=r(635),m=r(1050),p=r(1079),v=r(1052),g=r(1072),b=r(1053),x=r(100),O=r(156),_=r(88),T=r(80),y=r(89),w=r(616),M=r(710),S=r(421),C=r(692),j=r(693);const A=T.a.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function P(e,t){const r=await async function(e,t){const r=Object(n.k)(t)&&t.streamDataRequester;if(r)return async function(e,t,r){const i=await Object(O.c)(t.request(e,"json",r));if(!0===i.ok)return i.value;Object(y.u)(i.error),F(i.error.details.url)}(e,r,t);const i=await Object(O.c)(Object(x.default)(e,Object(n.s)(t)));if(!0===i.ok)return i.value.data;Object(y.u)(i.error),F(i.error)}(e,t);return{resource:r,textures:await D(r.textureDefinitions,t)}}function F(e){throw new _.a("",`Request for object resource failed: ${e}`)}function I(e){const t=e.params,r=t.topology;let i=!0;switch(t.vertexAttributes||(A.warn("Geometry must specify vertex attributes"),i=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(A.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),i=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(A.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),i=!1)):(A.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),i=!1)}}else A.warn("Indexed geometries must specify faces"),i=!1;break}default:A.warn(`Unsupported topology '${r}'`),i=!1}e.params.material||(A.warn("Geometry requires material"),i=!1);const n=e.params.vertexAttributes;for(const a in n)n[a].values||(A.warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function E(e){const t=Object(d.h)();return e.forEach((e=>{const r=e.boundingInfo;Object(n.k)(r)&&(Object(d.n)(t,r.getBBMin()),Object(d.n)(t,r.getBBMax()))})),t}async function D(e,t){const r=[];for(const o in e){const i=e[o],a=i.images[0].data;if(!a){A.warn("Externally referenced texture data is not yet supported");continue}const s=i.encoding+";base64,"+a,c="/textureDefinitions/"+o,l="rgba"===i.channels?i.alphaChannelUsage||"transparency":"none",u={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:1!==z(l)},d=Object(n.k)(t)&&t.disableTextures?Promise.resolve(null):Object(M.a)(s,t);r.push(d.then((e=>({refId:c,image:e,params:u,alphaChannelUsage:l}))))}const i=await Promise.all(r),a={};for(const n of i)a[n.refId]=n;return a}function z(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;case"transparency":default:return 0}}function L(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const R=new w.a(1,2,"wosr");var N=r(1054),B=r(908),V=r(909),U=r(793);async function k(e,t){const r=H(Object(i.a)(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):P(r.url,t)),i=function(e,t){const r=[],i=[],a=[],o=[],s=e.resource,c=w.a.parse(s.version||"1.0","wosr");R.validate(c);const l=s.model.name,d=s.model.geometries,f=s.materialDefinitions,h=e.textures;let m=0;const p=new Map;for(let v=0;v<d.length;v++){const e=d[v];if(!I(e))continue;const s=L(e),c=e.params.vertexAttributes,l=[];for(const t in c){const e=c[t],r=e.values;l.push([t,{data:r,size:e.valuesPerElement,exclusive:!0}])}const g=[];if("PerAttributeArray"!==e.params.topology){const t=e.params.faces;for(const e in t)g.push([e,new Uint32Array(t[e].values)])}const b=h&&h[s.texture];if(b&&!p.has(s.texture)){const{image:e,params:t}=b,r=new C.a(e,t);o.push(r),p.set(s.texture,r)}const x=p.get(s.texture),O=x?x.id:void 0;let _=a[s.material]?a[s.material][s.texture]:null;if(!_){const e=f[s.material.substring(s.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=b&&b.alphaChannelUsage,i=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,o=b?z(b.alphaChannelUsage):void 0,c={ambient:Object(u.f)(e.diffuse),diffuse:Object(u.f)(e.diffuse),opacity:1-(e.transparency||0),transparent:i,textureAlphaMode:o,textureAlphaCutoff:.33,textureId:O,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!b&&!!b.params.preMultiplyAlpha};Object(n.k)(t)&&t.materialParamsMixin&&Object.assign(c,t.materialParamsMixin),_=new j.a(c),a[s.material]||(a[s.material]={}),a[s.material][s.texture]=_}i.push(_);const T=new S.a(l,g);m+=g.position?g.position.length:0,r.push(T)}return{name:l,stageResources:{textures:o,materials:i,geometries:r},pivotOffset:s.model.pivotOffset,boundingBox:E(r),numberOfVertices:m,lodThreshold:null}}(e,t);return{lods:[i],referenceBoundingBox:i.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const a=await(t.cache?t.cache.loadGLTF(r.url,t,t.usePBR):Object(g.a)(new v.a(t.streamDataRequester),r.url,t,t.usePBR)),o=Object(n.i)(a.model.meta,"ESRI_proxyEllipsoid");a.meta.isEsriSymbolResource&&Object(n.k)(o)&&-1!==a.meta.uri.indexOf("/RealisticTrees/")&&function(e,t){for(let r=0;r<e.model.lods.length;++r){const i=e.model.lods[r];e.customMeta.esriTreeRendering=!0;for(const a of i.parts){const i=a.attributes.normal;if(Object(n.j)(i))return;const o=a.attributes.position,d=o.count,h=Object(u.e)(),m=Object(u.e)(),v=Object(u.e)(),g=Object(p.a)(f.J,d),b=Object(p.a)(f.u,d),x=Object(s.c)(Object(c.d)(),a.transform);for(let n=0;n<d;n++){o.getVec(n,m),i.getVec(n,h),Object(l.q)(m,m,a.transform),Object(l.j)(v,m,t.center),Object(l.b)(v,v,t.radius);const s=v[2],c=Object(l.p)(v),u=Math.min(.45+.55*c*c,1);Object(l.b)(v,v,t.radius),Object(l.q)(v,v,x),Object(l.r)(v,v),r+1!==e.model.lods.length&&e.model.lods.length>1&&Object(l.i)(v,v,h,s>-1?.2:Math.min(-4*s-3.8,1)),b.setVec(n,v),g.set(n,0,255*u),g.set(n,1,255*u),g.set(n,2,255*u),g.set(n,3,255)}a.attributes.normal=b,a.attributes.color=g}}}(a,o);const d=a.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:a.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:t.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},h={...t.materialParamsMixin,treeRendering:a.customMeta.esriTreeRendering};if(null!=r.specifiedLodIndex){const e=G(a,d,h,r.specifiedLodIndex);let t=e[0].boundingBox;return 0!==r.specifiedLodIndex&&(t=G(a,d,h,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1,remove:a.remove}}const m=G(a,d,h);return{lods:m,referenceBoundingBox:m[0].boundingBox,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1,remove:a.remove}}function H(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function G(e,t,r,i){const s=e.model,c=Object(o.b)(),l=new Array,u=new Map,v=new Map;return s.lods.forEach(((e,o)=>{if(void 0!==i&&o!==i)return;const g={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:Object(n.k)(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:Object(d.h)()};l.push(g),e.parts.forEach((e=>{const i=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),o=s.materials.get(e.material),l=Object(n.k)(e.attributes.texCoord0),x=Object(n.k)(e.attributes.normal),O=function(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":case null:case void 0:return 1}}(o.alphaMode);if(!u.has(i)){if(l){if(Object(n.k)(o.textureColor)&&!v.has(o.textureColor)){const e=s.textures.get(o.textureColor),t={...e.parameters,preMultiplyAlpha:1!==O};v.set(o.textureColor,new C.a(e.data,t))}if(Object(n.k)(o.textureNormal)&&!v.has(o.textureNormal)){const e=s.textures.get(o.textureNormal);v.set(o.textureNormal,new C.a(e.data,e.parameters))}if(Object(n.k)(o.textureOcclusion)&&!v.has(o.textureOcclusion)){const e=s.textures.get(o.textureOcclusion);v.set(o.textureOcclusion,new C.a(e.data,e.parameters))}if(Object(n.k)(o.textureEmissive)&&!v.has(o.textureEmissive)){const e=s.textures.get(o.textureEmissive);v.set(o.textureEmissive,new C.a(e.data,e.parameters))}if(Object(n.k)(o.textureMetallicRoughness)&&!v.has(o.textureMetallicRoughness)){const e=s.textures.get(o.textureMetallicRoughness);v.set(o.textureMetallicRoughness,new C.a(e.data,e.parameters))}}const a=o.color[0]**(1/N.a),c=o.color[1]**(1/N.a),d=o.color[2]**(1/N.a),f=o.emissiveFactor[0]**(1/N.a),h=o.emissiveFactor[1]**(1/N.a),m=o.emissiveFactor[2]**(1/N.a),p=Object(n.k)(o.textureColor)&&l?v.get(o.textureColor):null;u.set(i,new j.a({...t,transparent:0===O,textureAlphaMode:O,textureAlphaCutoff:o.alphaCutoff,diffuse:[a,c,d],ambient:[a,c,d],opacity:o.opacity,doubleSided:o.doubleSided,doubleSidedType:"winding-order",cullFace:o.doubleSided?0:2,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:x?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:Object(n.k)(p)?p.id:void 0,colorMixMode:o.colorMixMode,normalTextureId:Object(n.k)(o.textureNormal)&&l?v.get(o.textureNormal).id:void 0,textureAlphaPremultiplied:Object(n.k)(p)&&!!p.params.preMultiplyAlpha,occlusionTextureId:Object(n.k)(o.textureOcclusion)&&l?v.get(o.textureOcclusion).id:void 0,emissiveTextureId:Object(n.k)(o.textureEmissive)&&l?v.get(o.textureEmissive).id:void 0,metallicRoughnessTextureId:Object(n.k)(o.textureMetallicRoughness)&&l?v.get(o.textureMetallicRoughness).id:void 0,emissiveFactor:[f,h,m],mrrFactors:[o.metallicFactor,o.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...r}))}const _=function(e,t){switch(t){case 4:return Object(b.c)(e);case 5:return Object(b.b)(e);case 6:return Object(b.a)(e)}}(e.indices||e.attributes.position.count,e.primitiveType),T=e.attributes.position.count,y=Object(p.a)(f.u,T);Object(h.e)(y,e.attributes.position,e.transform);const w=[["position",{data:y.typedBuffer,size:y.elementCount,exclusive:!0}]],M=[["position",_]];if(Object(n.k)(e.attributes.normal)){const t=Object(p.a)(f.u,T);Object(a.a)(c,e.transform),Object(h.a)(t,e.attributes.normal,c),w.push(["normal",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),M.push(["normal",_])}if(Object(n.k)(e.attributes.tangent)){const t=Object(p.a)(f.C,T);Object(a.a)(c,e.transform),Object(m.c)(t,e.attributes.tangent,c),w.push(["tangent",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),M.push(["tangent",_])}if(Object(n.k)(e.attributes.texCoord0)){const t=Object(p.a)(f.m,T);Object(B.b)(t,e.attributes.texCoord0),w.push(["uv0",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),M.push(["uv0",_])}if(Object(n.k)(e.attributes.color)){const t=Object(p.a)(f.J,T);if(4===e.attributes.color.elementCount)e.attributes.color instanceof f.C?Object(m.b)(t,e.attributes.color,255):e.attributes.color instanceof f.J?Object(V.a)(t,e.attributes.color):e.attributes.color instanceof f.H&&Object(m.b)(t,e.attributes.color,1/256);else{Object(V.b)(t,255,255,255,255);const r=new f.B(t.buffer,0,4);e.attributes.color instanceof f.u?Object(h.d)(r,e.attributes.color,255):e.attributes.color instanceof f.B?Object(U.a)(r,e.attributes.color):e.attributes.color instanceof f.z&&Object(h.d)(r,e.attributes.color,1/256)}w.push(["color",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),M.push(["color",_])}const A=new S.a(w,M);g.stageResources.geometries.push(A),g.stageResources.materials.push(u.get(i)),l&&(Object(n.k)(o.textureColor)&&g.stageResources.textures.push(v.get(o.textureColor)),Object(n.k)(o.textureNormal)&&g.stageResources.textures.push(v.get(o.textureNormal)),Object(n.k)(o.textureOcclusion)&&g.stageResources.textures.push(v.get(o.textureOcclusion)),Object(n.k)(o.textureEmissive)&&g.stageResources.textures.push(v.get(o.textureEmissive)),Object(n.k)(o.textureMetallicRoughness)&&g.stageResources.textures.push(v.get(o.textureMetallicRoughness))),g.numberOfVertices+=T;const P=A.boundingInfo;Object(n.k)(P)&&(Object(d.n)(g.boundingBox,P.getBBMin()),Object(d.n)(g.boundingBox,P.getBBMax()))}))})),l}},113:function(e,t,r){"use strict";function i(e,...t){let r="";for(let i=0;i<t.length;i++)r+=e[i]+t[i];return r+=e[e.length-1],r}r.d(t,"a",(function(){return i})),function(e){e.int=function(e){return Math.round(e).toString()},e.float=function(e){return e.toPrecision(8)}}(i||(i={}))},179:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var i=r(107),n=r(85),a=r(195),o=r(202),s=r(398);class c{constructor(e,t,r=null){this._context=e,this.type="texture",this._glName=null,this._descriptor=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,e.instanceCounter.increment(o.c.Texture,this),this._descriptor={target:3553,samplingMode:9729,wrapMode:10497,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,...t},34067===this._descriptor.target?this.setDataCubeMap(r):this.setData(r)}get glName(){return this._glName}get descriptor(){return this._descriptor}dispose(){this._context.gl&&this._glName&&(this._context.unbindTextureAllUnits(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(o.c.Texture,this))}release(){this.dispose()}resize(e,t){const r=this._descriptor;r.width===e&&r.height===t||(r.width=e,r.height=t,34067===this._descriptor.target?this.setDataCubeMap(null):this.setData(null))}setDataCubeMap(e=null){for(let t=34069;t<=34074;t++)this.setData(e,t)}setData(e,t=3553){if(!this._context||!this._context.gl)return;const r=this._context.gl;this._glName||(this._glName=r.createTexture()),void 0===e&&(e=null),null===e&&(this._descriptor.width=this._descriptor.width||4,this._descriptor.height=this._descriptor.height||4);const i=this._context.bindTexture(this,c.TEXTURE_UNIT_FOR_UPDATES),o=this._descriptor;c._validateTexture(this._context,o),r.pixelStorei(r.UNPACK_ALIGNMENT,o.unpackAlignment),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,o.flipped?1:0),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.preMultiplyAlpha?1:0);const s=o.pixelFormat;let l=o.internalFormat?o.internalFormat:this._deriveInternalFormat(s,o.dataType);if(e instanceof ImageData||e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement){let i=e.width,n=e.height;e instanceof HTMLVideoElement&&(i=e.videoWidth,n=e.videoHeight),o.width&&o.height,r.texImage2D(t,0,l,s,o.dataType,e),Object(a.a)(r),o.hasMipmap&&this.generateMipmap(),void 0===o.width&&(o.width=i),void 0===o.height&&(o.height=n)}else{null!=o.width&&null!=o.height||console.error("Width and height must be specified!"),r.DEPTH24_STENCIL8&&l===r.DEPTH_STENCIL&&(l=r.DEPTH24_STENCIL8);let i=o.width,c=o.height;if(function(e){return Object(n.k)(e)&&"type"in e&&"compressed"===e.type}(e)){const n=Math.round(Math.log(Math.max(i,c))/Math.LN2)+1;o.hasMipmap=o.hasMipmap&&n===e.levels.length;for(let a=0;;++a){const n=e.levels[Math.min(a,e.levels.length-1)];if(r.compressedTexImage2D(t,a,l,i,c,0,n),1===i&&1===c||!o.hasMipmap)break;i=Math.max(1,i>>1),c=Math.max(1,c>>1)}}else if(Object(n.k)(e))r.texImage2D(t,0,l,i,c,0,s,o.dataType,e),Object(a.a)(r),o.hasMipmap&&this.generateMipmap();else for(let e=0;r.texImage2D(t,e,l,i,c,0,s,o.dataType,null),Object(a.a)(r),(1!==i||1!==c)&&o.hasMipmap;++e)i=Math.max(1,i>>1),c=Math.max(1,c>>1)}c._applySamplingMode(r,this._descriptor),c._applyWrapMode(r,this._descriptor),c._applyAnisotropicFilteringParameters(this._context,this._descriptor),Object(a.a)(r),this._context.bindTexture(i,c.TEXTURE_UNIT_FOR_UPDATES)}updateData(e,t,r,i,n,a,o=3553){a||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const s=this._context.gl,l=this._descriptor,u=this._context.bindTexture(this,c.TEXTURE_UNIT_FOR_UPDATES);(t<0||r<0||i>l.width||n>l.height||t+i>l.width||r+n>l.height)&&console.error("An attempt to update out of bounds of the texture!"),s.pixelStorei(s.UNPACK_ALIGNMENT,l.unpackAlignment),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,l.flipped?1:0),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,l.preMultiplyAlpha?1:0),a instanceof ImageData||a instanceof HTMLImageElement||a instanceof HTMLCanvasElement||a instanceof HTMLVideoElement?s.texSubImage2D(o,e,t,r,l.pixelFormat,l.dataType,a):s.texSubImage2D(o,e,t,r,i,n,l.pixelFormat,l.dataType,a),this._context.bindTexture(u,c.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const e=this._descriptor;e.hasMipmap||(e.hasMipmap=!0,this._samplingModeDirty=!0,c._validateTexture(this._context,e)),9729===e.samplingMode?(this._samplingModeDirty=!0,e.samplingMode=9985):9728===e.samplingMode&&(this._samplingModeDirty=!0,e.samplingMode=9984);const t=this._context.bindTexture(this,c.TEXTURE_UNIT_FOR_UPDATES);this._context.gl.generateMipmap(e.target),this._context.bindTexture(t,c.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,c._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const e=this._context.gl,t=this._descriptor;this._samplingModeDirty&&(c._applySamplingMode(e,t),this._samplingModeDirty=!1),this._wrapModeDirty&&(c._applyWrapMode(e,t),this._wrapModeDirty=!1)}_deriveInternalFormat(e,t){if("webgl"===this._context.webglVersion)return e;switch(t){case 5126:switch(e){case 6408:return 34836;case 6407:return 34837;default:throw new Error("Unable to derive format")}default:return e}}static _validateTexture(e,t){(t.width<0||t.height<0)&&console.error("Negative dimension parameters are not allowed!");const r=Object(i.l)(t.width)&&Object(i.l)(t.height);Object(s.a)(e.gl)||r||("number"==typeof t.wrapMode?33071!==t.wrapMode&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):33071===t.wrapMode.s&&33071===t.wrapMode.t||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),t.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}static _applySamplingMode(e,t){let r=t.samplingMode,i=t.samplingMode;9985===r||9987===r?(r=9729,t.hasMipmap||(i=9729)):9984!==r&&9986!==r||(r=9728,t.hasMipmap||(i=9728)),e.texParameteri(t.target,e.TEXTURE_MAG_FILTER,r),e.texParameteri(t.target,e.TEXTURE_MIN_FILTER,i)}static _applyWrapMode(e,t){"number"==typeof t.wrapMode?(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode.t))}static _applyAnisotropicFilteringParameters(e,t){var r;const i=e.capabilities.textureFilterAnisotropic;i&&e.gl.texParameterf(t.target,i.TEXTURE_MAX_ANISOTROPY,null!=(r=t.maxAnisotropy)?r:1)}}c.TEXTURE_UNIT_FOR_UPDATES=0},195:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return c}));var i=r(88),n=r(79);const a=r(80).a.getLogger("esri/views/webgl");const o=!!Object(n.a)("enable-feature:webgl-debug");function s(){return o}function c(){return o}function l(e){if(s()){const t=e.getError();if(t){const r=function(e,t){switch(t){case e.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}(e,t),n=(new Error).stack;a.error(new i.a("webgl-error","WebGL error occured",{message:r,stack:n}))}}}},202:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return n}));const i=33984;var n;!function(e){e[e.Texture=0]="Texture",e[e.Buffer=1]="Buffer",e[e.VAO=2]="VAO",e[e.Program=3]="Program",e[e.Framebuffer=4]="Framebuffer",e[e.Renderbuffer=5]="Renderbuffer",e[e.COUNT=6]="COUNT"}(n||(n={}));const a=33306},220:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return h})),r.d(t,"c",(function(){return m})),r.d(t,"d",(function(){return d})),r.d(t,"e",(function(){return f})),r.d(t,"f",(function(){return _})),r.d(t,"g",(function(){return u})),r.d(t,"h",(function(){return p})),r.d(t,"i",(function(){return c})),r.d(t,"j",(function(){return l})),r.d(t,"k",(function(){return v}));var i=r(107),n=(r(135),r(146)),a=(r(215),r(101),r(226),r(221));Object(a.e)();class o{constructor(e){this.message=e}toString(){return`AssertException: ${this.message}`}}function s(e,t){if(!e){t=t||"assert";const e=new Error(t);throw e.stack&&console.log(e.stack),new o(t)}}function c(e,t,r,i){let n,a=(r[0]-e[0])/t[0],o=(i[0]-e[0])/t[0];a>o&&(n=a,a=o,o=n);let s=(r[1]-e[1])/t[1],c=(i[1]-e[1])/t[1];if(s>c&&(n=s,s=c,c=n),a>c||s>o)return!1;s>a&&(a=s),c<o&&(o=c);let l=(r[2]-e[2])/t[2],u=(i[2]-e[2])/t[2];return l>u&&(n=l,l=u,u=n),!(a>u||l>o)&&(u<o&&(o=u),!(o<0))}function l(e,t,r,i){e[12]=t,e[13]=r,e[14]=i}function u(e){return 1===e[0]&&0===e[1]&&0===e[2]&&0===e[3]&&0===e[4]&&1===e[5]&&0===e[6]&&0===e[7]&&0===e[8]&&0===e[9]&&1===e[10]&&0===e[11]&&1===e[15]}function d(e,t,r){return 2*Math.atan(Math.sqrt(t*t+r*r)*Math.tan(.5*e)/t)}function f(e,t,r){return 2*Math.atan(Math.sqrt(t*t+r*r)*Math.tan(.5*e)/r)}function h(e,t,r){return 2*Math.atan(t*Math.tan(.5*e)/Math.sqrt(t*t+r*r))}function m(e,t,r){return 2*Math.atan(r*Math.tan(.5*e)/Math.sqrt(t*t+r*r))}function p(e,t,r=0){const n=Object(i.f)(e,0,x);for(let i=0;i<4;i++)t[r+i]=Math.floor(256*O(n*g[i]))}function v(e,t=0){let r=0;for(let i=0;i<4;i++)r+=e[t+i]*b[i];return r}const g=[1,256,65536,16777216],b=[1/256,1/65536,1/16777216,1/4294967296],x=v(new Uint8ClampedArray([255,255,255,255]));function O(e){return e-Math.floor(e)}function _(e,t,r,i,a){const o=e;0===e[11]?(i[0]=2/(t*o[0]),i[1]=2/(r*o[5]),i[2]=(1+o[12])/o[0],i[3]=(1+o[13])/o[5],Object(n.s)(a,0,1)):(i[0]=-2/(t*o[0]),i[1]=-2/(r*o[5]),i[2]=(1-o[8])/o[0],i[3]=(1-o[9])/o[5],Object(n.s)(a,1,0))}},256:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return c}));var i=r(85),n=r(111),a=r(101),o=r(113);function s(e,t){if(t.slicePlaneEnabled){e.extensions.add("GL_OES_standard_derivatives"),t.sliceEnabledForVertexPrograms&&(e.vertex.uniforms.add("slicePlaneOrigin","vec3"),e.vertex.uniforms.add("slicePlaneBasis1","vec3"),e.vertex.uniforms.add("slicePlaneBasis2","vec3")),e.fragment.uniforms.add("slicePlaneOrigin","vec3"),e.fragment.uniforms.add("slicePlaneBasis1","vec3"),e.fragment.uniforms.add("slicePlaneBasis2","vec3");const r=o.a`struct SliceFactors {
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
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,i=o.a`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
if (sliceByFactors(factors)) {
return color;
}
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,n=t.sliceHighlightDisabled?o.a`#define highlightSlice(_color_, _pos_) (_color_)`:o.a`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r),e.fragment.code.add(n)}else{const r=o.a`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r)}}function c(e,t,r){l(e,t,r.slicePlane,r.origin)}function l(e,t,r,o){t.slicePlaneEnabled&&(Object(i.k)(r)?(o?(Object(n.j)(u,r.origin,o),e.setUniform3fv("slicePlaneOrigin",u)):e.setUniform3fv("slicePlaneOrigin",r.origin),e.setUniform3fv("slicePlaneBasis1",r.basis1),e.setUniform3fv("slicePlaneBasis2",r.basis2)):(e.setUniform3fv("slicePlaneBasis1",a.b),e.setUniform3fv("slicePlaneBasis2",a.b),e.setUniform3fv("slicePlaneOrigin",a.b)))}const u=Object(a.e)()},271:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));const i=r(80).a.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class n{constructor(){this.includedModules=new Map}include(e,t){this.includedModules.has(e)?this.includedModules.get(e)!==t&&i.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,t),e(this.builder,t))}}class a extends n{constructor(){super(...arguments),this.vertex=new c,this.fragment=new c,this.attributes=new l,this.varyings=new u,this.extensions=new d,this.constants=new f}get fragmentUniforms(){return this.fragment.uniforms}get builder(){return this}generateSource(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),i=this.varyings.generateSource(),n="vertex"===e?this.vertex:this.fragment,a=n.uniforms.generateSource(),o=n.code.generateSource(),s="vertex"===e?m:h,c=this.constants.generateSource().concat(n.constants.generateSource());return`\n${t.join("\n")}\n\n${s}\n\n${c.join("\n")}\n\n${a.join("\n")}\n\n${r.join("\n")}\n\n${i.join("\n")}\n\n${o.join("\n")}`}}class o{constructor(){this._entries=new Map}add(e,t,r){const i=`${e}_${t}_${r}`;return this._entries.set(i,{name:e,type:t,arraySize:r}),this}generateSource(){return Array.from(this._entries.values()).map((e=>`uniform ${e.type} ${e.name}${(e=>e?`[${e}]`:"")(e.arraySize)};`))}get entries(){return Array.from(this._entries.values())}}class s{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class c extends n{constructor(){super(...arguments),this.uniforms=new o,this.code=new s,this.constants=new f}get builder(){return this}}class l{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`attribute ${e[1]} ${e[0]};`))}}class u{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(){return this._entries.map((e=>`varying ${e[1]} ${e[0]};`))}}class d{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?d.ALLOWLIST_VERTEX:d.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}d.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],d.ALLOWLIST_VERTEX=[];class f{constructor(){this._entries=[]}add(e,t,r){let i="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":i=f.numberToFloatStr(r);break;case"int":i=f.numberToIntStr(r);break;case"bool":i=r.toString();break;case"vec2":i=`vec2(${f.numberToFloatStr(r[0])},                            ${f.numberToFloatStr(r[1])})`;break;case"vec3":i=`vec3(${f.numberToFloatStr(r[0])},                            ${f.numberToFloatStr(r[1])},                            ${f.numberToFloatStr(r[2])})`;break;case"vec4":i=`vec4(${f.numberToFloatStr(r[0])},                            ${f.numberToFloatStr(r[1])},                            ${f.numberToFloatStr(r[2])},                            ${f.numberToFloatStr(r[3])})`;break;case"ivec2":i=`ivec2(${f.numberToIntStr(r[0])},                             ${f.numberToIntStr(r[1])})`;break;case"ivec3":i=`ivec3(${f.numberToIntStr(r[0])},                             ${f.numberToIntStr(r[1])},                             ${f.numberToIntStr(r[2])})`;break;case"ivec4":i=`ivec4(${f.numberToIntStr(r[0])},                             ${f.numberToIntStr(r[1])},                             ${f.numberToIntStr(r[2])},                             ${f.numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${t}(${Array.prototype.map.call(r,(e=>f.numberToFloatStr(e))).join(", ")})`}return this._entries.push(`const ${t} ${e} = ${i};`),this}static numberToIntStr(e){return e.toFixed(0)}static numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const h="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",m="precision highp float;\nprecision highp sampler2D;"},278:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return n}));var i=r(113);function n(e,t){e.fragment.uniforms.add("terrainDepthTexture","sampler2D"),e.fragment.uniforms.add("cameraNearFar","vec2"),e.fragment.uniforms.add("inverseViewport","vec2"),e.fragment.code.add(i.a`
    // Compare the linearized depths of fragment and terrain. Discard fragments on the wrong side of the terrain.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, cameraNearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `)}function a(e,t){t.multipassTerrainEnabled&&t.terrainLinearDepthTexture&&e.bindTexture(t.terrainLinearDepthTexture,"terrainDepthTexture")}},284:function(e,t,r){"use strict";r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return s})),r.d(t,"d",(function(){return f})),r.d(t,"e",(function(){return u})),r.d(t,"f",(function(){return d})),r.d(t,"g",(function(){return c}));var i=r(393),n=r(111),a=r(101),o=r(261);function s(e){return e?{origin:Object(a.c)(e.origin),direction:Object(a.c)(e.direction)}:{origin:Object(a.e)(),direction:Object(a.e)()}}function c(e,t){const r=m.get();return r.origin=e,r.direction=t,r}function l(e,t=s()){return d(e.origin,e.direction,t)}function u(e,t,r=s()){return Object(n.k)(r.origin,e),Object(n.j)(r.direction,t,e),r}function d(e,t,r=s()){return Object(n.k)(r.origin,e),Object(n.k)(r.direction,t),r}function f(e,t){const r=Object(n.g)(o.d.get(),Object(n.r)(o.d.get(),e.direction),Object(n.j)(o.d.get(),t,e.origin));return Object(n.h)(r,r)}function h(e,t,r){const i=Object(n.h)(e.direction,Object(n.j)(r,t,e.origin));return Object(n.f)(r,e.origin,Object(n.e)(r,e.direction,i)),r}const m=new i.a((function(){return{origin:null,direction:null}}))},311:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(431),n=r(113);function a(e){e.include(i.a),e.code.add(n.a`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}},319:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return c}));var i=r(221),n=r(113);const a=Object(i.g)(1,1,0,1),o=Object(i.g)(1,0,1,1);function s(e){e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("highlightViewportPixelSz","vec4"),e.fragment.constants.add("occludedHighlightFlag","vec4",a).add("unoccludedHighlightFlag","vec4",o),e.fragment.code.add(n.a`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`)}function c(e,t){e.bindTexture(t.highlightDepthTexture,"depthTex"),e.setUniform4f("highlightViewportPixelSz",0,0,t.inverseViewport[0],t.inverseViewport[1])}},325:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));class i{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}},326:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var i=r(85),n=r(180),a=r(195),o=r(577);class s extends o.a{constructor(e,t,r){super(e,t.generateSource("vertex"),t.generateSource("fragment"),r),this._textures=new Map,this._freeTextureUnits=new n.a({deallocator:null}),this._fragmentUniforms=Object(a.b)()?t.fragmentUniforms.entries:null}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if(Object(i.j)(e)||null==e.glName){const e=this._textures.get(t);return e&&(this._context.bindTexture(null,e.unit),this._freeTextureUnit(e),this._textures.delete(t)),null}let r=this._textures.get(t);return null==r?(r=this._allocTextureUnit(e),this._textures.set(t,r)):r.texture=e,this._context.useProgram(this),this.setUniform1i(t,r.unit),this._context.bindTexture(e,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),Object(i.k)(this._fragmentUniforms)&&this._fragmentUniforms.forEach((e=>{if(("sampler2D"===e.type||"samplerCube"===e.type)&&!this._textures.has(e.name))throw new Error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}},327:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));const i=new Map([["position",0],["normal",1],["uv0",2],["color",3],["size",4],["tangent",4],["auxpos1",5],["symbolColor",5],["auxpos2",6],["featureAttribute",6],["instanceFeatureAttribute",6],["instanceColor",7],["model",8],["modelNormal",12],["modelOriginHi",11],["modelOriginLo",15]])},331:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return a}));var i=r(113);const n=.1,a=.001;function o(e,t){const r=e.fragment;switch(t.alphaDiscardMode){case 0:r.code.add(i.a`
        #define discardOrAdjustAlpha(color) { if (color.a < ${i.a.float(a)}) { discard; } }
      `);break;case 1:r.code.add(i.a`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case 2:r.uniforms.add("textureAlphaCutoff","float"),r.code.add(i.a`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case 3:e.fragment.uniforms.add("textureAlphaCutoff","float"),e.fragment.code.add(i.a`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}},334:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(85);class n{constructor(e,t,r=(()=>this.dispose())){this.release=r,t&&(this._config=t.snapshot()),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}dispose(){this._program=Object(i.f)(this._program),this._pipeline=this._config=null}reload(e){Object(i.f)(this._program),this._program=this.initializeProgram(e)}get program(){return this._program}get pipeline(){return this._pipeline}get key(){return this._config.key}get configuration(){return this._config}bindPass(e,t){}bindMaterial(e,t){}bindDraw(e,t,r){}bindPipelineState(e){e.setPipelineState(this.pipeline)}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return 4}}},341:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return a}));var i=r(107);class n{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits.map((()=>0))}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}function a(e={}){return(t,r)=>{var n,a;t._parameterNames=null!=(n=t._parameterNames)?n:[],t._parameterNames.push(r);const o=t._parameterNames.length-1,s=e.count||2,c=Math.ceil(Object(i.n)(s)),l=null!=(a=t._parameterBits)?a:[0];let u=0;for(;l[u]+c>16;)u++,u>=l.length&&l.push(0);t._parameterBits=l;const d=l[u],f=(1<<c)-1<<d;l[u]+=c,Object.defineProperty(t,r,{get(){return this[o]},set(e){if(this[o]!==e&&(this[o]=e,this._keyDirty=!0,this._parameterBits[u]=this._parameterBits[u]&~f|+e<<d&f,"number"!=typeof e&&"boolean"!=typeof e))throw"Configuration value for "+r+" must be boolean or number, got "+typeof e}})}}},348:function(e,t,r){"use strict";r.d(t,"a",(function(){return T})),r.d(t,"b",(function(){return C})),r.d(t,"c",(function(){return y})),r.d(t,"d",(function(){return O})),r.d(t,"e",(function(){return M})),r.d(t,"f",(function(){return f})),r.d(t,"g",(function(){return v})),r.d(t,"h",(function(){return w})),r.d(t,"i",(function(){return _}));var i=r(107),n=r(85),a=r(111),o=r(101),s=r(267),c=r(654),l=r(220),u=r(385);const d=Object(s.f)();function f(e,t,r,i,n,a,o){if(!Object(u.e)(t))if(e.boundingInfo){Object(l.a)(0===e.primitiveType);const t=r.tolerance;m(e.boundingInfo,i,n,t,a,o)}else{const t=e.indices.get("position"),r=e.vertexAttributes.get("position");v(i,n,0,t.length/3,t,r,void 0,a,o)}}const h=Object(o.e)();function m(e,t,r,i,o,c){if(Object(n.j)(e))return;const l=function(e,t,r){return Object(a.w)(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}(t,r,h);if(Object(s.y)(d,e.getBBMin()),Object(s.x)(d,e.getBBMax()),Object(n.k)(o)&&o.applyToAabb(d),O(d,t,l,i)){const{primitiveIndices:n,indices:a,position:s}=e,l=n?n.length:a.length/3;if(l>j){const n=e.getChildren();if(void 0!==n){for(let e=0;e<8;++e)void 0!==n[e]&&m(n[e],t,r,i,o,c);return}}v(t,r,0,l,a,s,n,o,c)}}const p=Object(o.e)();function v(e,t,r,i,a,o,s,c,l){if(s)return function(e,t,r,i,a,o,s,c,l){const u=o.data,d=o.stride||o.size,f=e[0],h=e[1],m=e[2],v=t[0]-f,g=t[1]-h,b=t[2]-m;for(let O=r;O<i;++O){const e=s[O];let t=3*e,r=d*a[t++],i=u[r++],o=u[r++],_=u[r];r=d*a[t++];let T=u[r++],y=u[r++],w=u[r];r=d*a[t];let M=u[r++],S=u[r++],C=u[r];Object(n.k)(c)&&([i,o,_]=c.applyToVertex(i,o,_,O),[T,y,w]=c.applyToVertex(T,y,w,O),[M,S,C]=c.applyToVertex(M,S,C,O));const j=T-i,A=y-o,P=w-_,F=M-i,I=S-o,E=C-_,D=g*E-I*b,z=b*F-E*v,L=v*I-F*g,R=j*D+A*z+P*L;if(Math.abs(R)<=Number.EPSILON)continue;const N=f-i,B=h-o,V=m-_,U=N*D+B*z+V*L;if(R>0){if(U<0||U>R)continue}else if(U>0||U<R)continue;const k=B*P-A*V,H=V*j-P*N,G=N*A-j*B,q=v*k+g*H+b*G;if(R>0){if(q<0||U+q>R)continue}else if(q>0||U+q<R)continue;const $=(F*k+I*H+E*G)/R;$>=0&&l($,x(j,A,P,F,I,E,p),e)}}(e,t,r,i,a,o,s,c,l);const u=o.data,d=o.stride||o.size,f=e[0],h=e[1],m=e[2],v=t[0]-f,g=t[1]-h,b=t[2]-m;for(let O=r,_=3*r;O<i;++O){let e=d*a[_++],t=u[e++],r=u[e++],i=u[e];e=d*a[_++];let o=u[e++],s=u[e++],T=u[e];e=d*a[_++];let y=u[e++],w=u[e++],M=u[e];Object(n.k)(c)&&([t,r,i]=c.applyToVertex(t,r,i,O),[o,s,T]=c.applyToVertex(o,s,T,O),[y,w,M]=c.applyToVertex(y,w,M,O));const S=o-t,C=s-r,j=T-i,A=y-t,P=w-r,F=M-i,I=g*F-P*b,E=b*A-F*v,D=v*P-A*g,z=S*I+C*E+j*D;if(Math.abs(z)<=Number.EPSILON)continue;const L=f-t,R=h-r,N=m-i,B=L*I+R*E+N*D;if(z>0){if(B<0||B>z)continue}else if(B>0||B<z)continue;const V=R*j-C*N,U=N*S-j*L,k=L*C-S*R,H=v*V+g*U+b*k;if(z>0){if(H<0||B+H>z)continue}else if(H>0||B+H<z)continue;const G=(A*V+P*U+F*k)/z;G>=0&&l(G,x(S,C,j,A,P,F,p),O)}}const g=Object(o.e)(),b=Object(o.e)();function x(e,t,r,i,n,o,s){return Object(a.w)(g,e,t,r),Object(a.w)(b,i,n,o),Object(a.g)(s,g,b),Object(a.r)(s,s),s}function O(e,t,r,i){return function(e,t,r,i,n){const a=(e[0]-i-t[0])*r[0],o=(e[3]+i-t[0])*r[0];let s=Math.min(a,o),c=Math.max(a,o);const l=(e[1]-i-t[1])*r[1],u=(e[4]+i-t[1])*r[1];if(c=Math.min(c,Math.max(l,u)),c<0)return!1;if(s=Math.max(s,Math.min(l,u)),s>c)return!1;const d=(e[2]-i-t[2])*r[2],f=(e[5]+i-t[2])*r[2];return c=Math.min(c,Math.max(d,f)),!(c<0)&&(s=Math.max(s,Math.min(d,f)),!(s>c)&&s<n)}(e,t,r,i,1/0)}function _(e,t,r,n,a){let o=(r.screenLength||0)*e.pixelRatio;a&&(o=Object(c.d)(o,n,t,a));const s=o*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return Object(i.f)(s*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}function T(e,t,r){if(!e)return;const i=e.parameters,n=e.paddingPixelsOverride;t.setUniform4f(r,i.divisor,i.offset,i.minPixelSize,n)}function y(e,t){const r=t?y(t):{};for(const i in e){let t=e[i];t&&t.forEach&&(t=S(t)),null==t&&i in r||(r[i]=t)}return r}function w(e,t){let r=!1;for(const i in t){const n=t[i];void 0!==n&&(r=!0,Array.isArray(n)?e[i]=n.slice():e[i]=n)}return r}function M(e,t,r,n,a){if(!t.options.selectionMode)return;const o=e.vertexAttributes.get("position").data,s=e.vertexAttributes.get("size"),c=s&&s.data[0],l=r[0],u=r[1],d=((c+n)/2+4)*e.screenToWorldRatio;let f=Number.MAX_VALUE;for(let h=0;h<o.length-5;h+=3){const e=o[h],t=o[h+1],r=l-e,n=u-t,a=o[h+3]-e,s=o[h+4]-t,c=Object(i.f)((a*r+s*n)/(a*a+s*s),0,1),d=a*c-r,m=s*c-n,p=d*d+m*m;p<f&&(f=p)}f<d*d&&a()}function S(e){const t=[];return e.forEach((e=>t.push(e))),t}const C={multiply:1,ignore:2,replace:3,tint:4},j=1e3},362:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return u})),r.d(t,"e",(function(){return l})),r.d(t,"f",(function(){return n})),r.d(t,"g",(function(){return d}));var i=r(174);const n=Object(i.g)(770,1,771,771),a=Object(i.h)(1,1),o=Object(i.h)(0,771);function s(e){return 2===e?null:1===e?o:a}function c(e){return 2===e?i.d:null}const l=5e5,u={factor:-1,units:-2};function d(e){return e?u:null}function f(e){return 3===e||2===e?513:515}},367:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(113);function n(e){e.code.add(i.a`vec4 premultiplyAlpha(vec4 v) {
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
}`)}},375:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return c}));var i=r(85),n=r(465),a=r(327),o=r(348);class s extends n.a{constructor(e,t){super(),this.type=3,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=a.a,this._params=Object(o.c)(e,t),this.validateParameterValues(this._params)}dispose(){}get params(){return this._params}update(e){return!1}setParameterValues(e){Object(o.h)(this._params,e)&&(this.validateParameterValues(this._params),this.parametersChanged())}validateParameterValues(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}isVisibleInPass(e){return!0}get renderOccluded(){return this.params.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){Object(i.k)(this.materialRepository)&&this.materialRepository.materialChanged(this)}}function c(e,t){return e.isVisible()&&e.isVisibleInPass(t.pass)&&0!=(e.renderOccluded&t.renderOccludedMask)}const l={renderOccluded:1}},376:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(113);function n(e,t){t.linearDepth?e.vertex.code.add(i.a`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):e.vertex.code.add(i.a`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},385:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return h})),r.d(t,"d",(function(){return m})),r.d(t,"e",(function(){return u})),r.d(t,"f",(function(){return f})),r.d(t,"g",(function(){return l}));var i=r(85),n=r(135),a=r(168),o=r(623),s=r(220);function c(e,t){return Object(i.j)(e)&&(e=[]),e.push(t),e}function l(e,t){if(Object(i.j)(e))return e;const r=e.filter((e=>e!==t));return 0===r.length?null:r}function u(e){return!!Object(i.k)(e)&&!e.visible}function d(e,t){const r=new Map;return r.set(0,t.acquire(e,0)),r.set(1,t.acquire(e,7)),r.set(4,t.acquire(e,3)),r.set(3,t.acquire(e,2)),r.set(2,t.acquire(e,1)),r.set(5,t.acquire(e,4)),r.set(7,t.acquire(e,3)),r.set(6,t.acquire(e,3)),r}function f(e,t){t.release(e,0),t.release(e,7),t.release(e,3),t.release(e,2),t.release(e,1),t.release(e,4)}function h(e,t,r){const a=e.origin.vec3;Object(s.j)(g,-a[0],-a[1],-a[2]),Object(i.k)(e.transformation)?Object(n.n)(t,g,e.transformation):Object(n.f)(t,g),r&&(Object(n.c)(r,t),Object(n.b)(r,r))}function m(e,t,r,i,n){p[0]=e.get(t,0),p[1]=e.get(t,1),p[2]=e.get(t,2),Object(o.a)(p,v,3),r.set(n,0,v[0]),i.set(n,0,v[1]),r.set(n,1,v[2]),i.set(n,1,v[3]),r.set(n,2,v[4]),i.set(n,2,v[5])}const p=new Float64Array(3),v=new Float32Array(6),g=Object(a.d)()},394:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return l})),r.d(t,"e",(function(){return c})),r.d(t,"f",(function(){return u}));var i=r(135),n=r(772);function a(e,t,r){e.setUniform3f("camPos",r[3]-t[0],r[7]-t[1],r[11]-t[2])}function o(e,t){e.setUniformMatrix4fv("proj",t)}function s(e,t){e.setUniform2fv("nearFar",t)}function c(e,t,r){Object(i.t)(d,r,t),e.setUniform3fv("localOrigin",t),e.setUniformMatrix4fv("view",d)}function l(e,t){c(e,t.origin,t.camera.viewMatrix)}function u(e,t){e.setUniform4fv("viewport",t.camera.fullViewport)}const d=Object(n.a)()},398:function(e,t,r){"use strict";function i(e){return window.WebGL2RenderingContext&&e instanceof window.WebGL2RenderingContext}r.d(t,"a",(function(){return i}))},409:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var i=r(342),n=r(634);class a{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const r of e.fieldNames){const t=e.fields.get(r);this[r]=new t.constructor(this.buffer,t.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const r=this[e];return r&&r.elementCount===t.ElementCount&&r.elementType===t.ElementType?r:null}slice(e,t){return new a(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t,r,i){const n=this.stride;if(n%4==0){const a=new Uint32Array(e.buffer,t*n,i*n/4);new Uint32Array(this.buffer,r*n,i*n/4).set(a)}else{const a=new Uint8Array(e.buffer,t*n,i*n);new Uint8Array(this.buffer,r*n,i*n).set(a)}}}class o{constructor(){this.stride=0,this.fields=new Map,this.fieldNames=[]}vec2f(e,t){return this.appendField(e,i.m,t),this}vec2f64(e,t){return this.appendField(e,i.n,t),this}vec3f(e,t){return this.appendField(e,i.u,t),this}vec3f64(e,t){return this.appendField(e,i.v,t),this}vec4f(e,t){return this.appendField(e,i.C,t),this}vec4f64(e,t){return this.appendField(e,i.D,t),this}mat3f(e,t){return this.appendField(e,i.f,t),this}mat3f64(e,t){return this.appendField(e,i.g,t),this}mat4f(e,t){return this.appendField(e,i.h,t),this}mat4f64(e,t){return this.appendField(e,i.i,t),this}vec4u8(e,t){return this.appendField(e,i.J,t),this}f32(e,t){return this.appendField(e,i.a,t),this}f64(e,t){return this.appendField(e,i.b,t),this}u8(e,t){return this.appendField(e,i.l,t),this}u16(e,t){return this.appendField(e,i.j,t),this}i8(e,t){return this.appendField(e,i.e,t),this}vec2i8(e,t){return this.appendField(e,i.q,t),this}vec2i16(e,t){return this.appendField(e,i.o,t),this}vec2u8(e,t){return this.appendField(e,i.t,t),this}vec4u16(e,t){return this.appendField(e,i.H,t),this}u32(e,t){return this.appendField(e,i.k,t),this}appendField(e,t,r){const i=t.ElementCount*Object(n.a)(t.ElementType),a=this.stride;this.fields.set(e,{size:i,constructor:t,offset:a,optional:r}),this.stride+=i,this.fieldNames.push(e)}alignTo(e){return this.stride=Math.floor((this.stride+e-1)/e)*e,this}hasField(e){return this.fieldNames.indexOf(e)>=0}createBuffer(e){return new a(this,e)}createView(e){return new a(this,e)}clone(){const e=new o;return e.stride=this.stride,e.fields=new Map,this.fields.forEach(((t,r)=>e.fields.set(r,t))),e.fieldNames=this.fieldNames.slice(),e.BufferType=this.BufferType,e}}function s(){return new o}},410:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(610);class n extends i.a{constructor(e){super(),this._material=e.material,this._techniqueRep=e.techniqueRep,this._output=e.output}get technique(){return this._technique}getPipelineState(e,t){return this.technique.pipeline}ensureResources(e){return 2}ensureParameters(e){}}},421:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var i=r(85),n=r(180),a=r(111),o=r(101),s=r(220);class c{constructor(e,t,r,i){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.indices=r,this.position=i,this.center=Object(o.e)(),Object(s.a)(e.length>=1),Object(s.a)(r.length%this._numIndexPerPrimitive==0),Object(s.a)(r.length>=e.length*this._numIndexPerPrimitive),Object(s.a)(3===i.size||4===i.size);const{data:n,size:c}=i,u=e.length;let d=c*r[this._numIndexPerPrimitive*e[0]];l.clear(),l.push(d),this.bbMin=Object(o.g)(n[d],n[d+1],n[d+2]),this.bbMax=Object(o.c)(this.bbMin);for(let a=0;a<u;++a){const t=this._numIndexPerPrimitive*e[a];for(let e=0;e<this._numIndexPerPrimitive;++e){d=c*r[t+e],l.push(d);let i=n[d];this.bbMin[0]=Math.min(i,this.bbMin[0]),this.bbMax[0]=Math.max(i,this.bbMax[0]),i=n[d+1],this.bbMin[1]=Math.min(i,this.bbMin[1]),this.bbMax[1]=Math.max(i,this.bbMax[1]),i=n[d+2],this.bbMin[2]=Math.min(i,this.bbMin[2]),this.bbMax[2]=Math.max(i,this.bbMax[2])}}Object(a.i)(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let f=this.radius*this.radius;for(let a=0;a<l.length;++a){d=l.getItemAt(a);const e=n[d]-this.center[0],t=n[d+1]-this.center[1],r=n[d+2]-this.center[2],i=e*e+t*t+r*r;if(i<=f)continue;const o=Math.sqrt(i),s=.5*(o-this.radius);this.radius=this.radius+s,f=this.radius*this.radius;const c=s/o;this.center[0]+=e*c,this.center[1]+=t*c,this.center[2]+=r*c}l.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if(Object(a.l)(this.bbMin,this.bbMax)>1){const e=Object(a.i)(Object(o.e)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),i=new Array(8);for(let a=0;a<8;++a)i[a]=0;const{data:n,size:s}=this.position;for(let a=0;a<t;++a){let t=0;const o=this._numIndexPerPrimitive*this.primitiveIndices[a];let c=s*this.indices[o],l=n[c],u=n[c+1],d=n[c+2];for(let e=1;e<this._numIndexPerPrimitive;++e){c=s*this.indices[o+e];const t=n[c],r=n[c+1],i=n[c+2];t<l&&(l=t),r<u&&(u=r),i<d&&(d=i)}l<e[0]&&(t|=1),u<e[1]&&(t|=2),d<e[2]&&(t|=4),r[a]=t,++i[t]}let l=0;for(let a=0;a<8;++a)i[a]>0&&++l;if(l<2)return;const u=new Array(8);for(let a=0;a<8;++a)u[a]=i[a]>0?new Uint32Array(i[a]):void 0;for(let a=0;a<8;++a)i[a]=0;for(let a=0;a<t;++a){const e=r[a];u[e][i[e]++]=this.primitiveIndices[a]}this._children=new Array(8);for(let a=0;a<8;++a)void 0!==u[a]&&(this._children[a]=new c(u[a],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){l.prune()}}const l=new n.a({deallocator:null});var u=r(465),d=r(445);class f extends u.a{constructor(e,t=[],r=0,i=-1){super(),this._primitiveType=r,this.edgeIndicesLength=i,this.type=2,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[n,a]of e)a&&this._vertexAttributes.set(n,{...a});if(null==t||0===t.length){const e=function(e){const t=e.values().next().value;return null==t?0:t.data.length/t.size}(this._vertexAttributes),t=Object(d.d)(e);this.edgeIndicesLength=this.edgeIndicesLength<0?e:this.edgeIndicesLength;for(const r of this._vertexAttributes.keys())this._indices.set(r,t)}else for(const[n,a]of t)a&&(this._indices.set(n,h(a)),"position"===n&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(n).length:this.edgeIndicesLength))}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){const t=this._vertexAttributes.get(e);return t&&!t.exclusive&&(t.data=Array.from(t.data),t.exclusive=!0),t}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return Object(i.j)(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return 0===this.primitiveType?this.computeAttachmentOriginTriangles(e):this.computeAttachmentOriginPoints(e)}computeAttachmentOriginTriangles(e){const t=this.indices.get("position"),r=this.vertexAttributes.get("position");return Object(d.c)(r,t,e)}computeAttachmentOriginPoints(e){const t=this.indices.get("position"),r=this.vertexAttributes.get("position");return Object(d.b)(r,t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get("position");if(0===e.length)return null;const t=0===this.primitiveType?3:1;Object(s.a)(e.length%t==0,"Indexing error: "+e.length+" not divisible by "+t);const r=Object(d.d)(e.length/t),i=this.vertexAttributes.get("position");return new c(r,t,e,i)}}function h(e){if(e.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return e;for(const t of e)if(t>=65536)return e;return new Uint16Array(e)}},430:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return p})),r.d(t,"c",(function(){return O})),r.d(t,"d",(function(){return v})),r.d(t,"e",(function(){return T})),r.d(t,"f",(function(){return g}));r(79);var i=r(80),n=r(107),a=r(85),o=r(135),s=r(111),c=r(101),l=r(226),u=r(221),d=r(284),f=r(464),h=r(261);const m=i.a.getLogger("esri.geometry.support.sphere");function p(){return Object(u.e)()}function v(e,t=p()){return Object(l.c)(t,e)}function g(e){return e}function b(e){e[0]=e[1]=e[2]=e[3]=0}function x(e){return Array.isArray(e)?e[3]:e}function O(e){return Array.isArray(e)?e:A}function _(e,t,r){if(Object(a.j)(t))return!1;const i=Object(s.j)(h.d.get(),t.origin,O(e)),n=Object(s.h)(t.direction,t.direction),o=2*Object(s.h)(t.direction,i),c=o*o-4*n*(Object(s.h)(i,i)-e[3]*e[3]);if(c<0)return!1;const l=Math.sqrt(c);let u=(-o-l)/(2*n);const d=(-o+l)/(2*n);return(u<0||d<u&&d>0)&&(u=d),!(u<0)&&(r&&Object(s.f)(r,t.origin,Object(s.e)(h.d.get(),t.direction,u)),!0)}function T(e,t){return _(e,t,null)}function y(e,t,r){const i=h.d.get(),n=h.a.get();Object(s.g)(i,t.origin,t.direction);const a=x(e);Object(s.g)(r,i,t.origin),Object(s.e)(r,r,1/Object(s.p)(r)*a);const c=M(e,t.origin),l=Object(f.a)(t.origin,r);return Object(o.j)(n),Object(o.e)(n,n,l+c,i),Object(s.q)(r,r,n),r}function w(e,t,r){const i=Object(s.j)(h.d.get(),t,O(e)),n=Object(s.e)(h.d.get(),i,e[3]/Object(s.p)(i));return Object(s.f)(r,n,O(e))}function M(e,t){const r=Object(s.j)(h.d.get(),t,O(e)),i=Object(s.p)(r),a=x(e),o=a+Math.abs(a-i);return Object(n.b)(a/o)}const S=Object(c.e)();function C(e,t,r,i){const a=Object(s.j)(S,t,O(e));switch(r){case 0:{const e=Object(n.e)(a,S)[2];return Object(s.w)(i,-Math.sin(e),Math.cos(e),0)}case 1:{const e=Object(n.e)(a,S),t=e[1],r=e[2],o=Math.sin(t);return Object(s.w)(i,-o*Math.cos(r),-o*Math.sin(r),Math.cos(t))}case 2:return Object(s.r)(i,a);default:return}}function j(e,t){const r=Object(s.j)(P,t,O(e));return Object(s.p)(r)-e[3]}const A=Object(c.e)(),P=Object(c.e)();Object.freeze({__proto__:null,create:p,copy:v,fromCenterAndRadius:function(e,t){return Object(u.g)(e[0],e[1],e[2],t)},wrap:g,clear:b,fromRadius:function(e){return e},getRadius:x,getCenter:O,fromValues:function(e,t,r,i){return Object(u.g)(e,t,r,i)},elevate:function(e,t,r){return e!==r&&Object(s.k)(r,e),r[3]=e[3]+t,r},setExtent:function(e,t,r){return m.error("sphere.setExtent is not yet supported"),e===r?r:v(e,r)},intersectRay:_,intersectsRay:T,intersectRayClosestSilhouette:function(e,t,r){if(_(e,t,r))return r;const i=y(e,t,h.d.get());return Object(s.f)(r,t.origin,Object(s.e)(h.d.get(),t.direction,Object(s.m)(t.origin,i)/Object(s.p)(t.direction))),r},closestPointOnSilhouette:y,closestPoint:function(e,t,r){return _(e,t,r)?r:(Object(d.a)(t,O(e),r),w(e,r,r))},projectPoint:w,distanceToSilhouette:function(e,t){const r=Object(s.j)(h.d.get(),t,O(e)),i=Object(s.t)(r),n=e[3]*e[3];return Math.sqrt(Math.abs(i-n))},angleToSilhouette:M,axisAt:C,altitudeAt:j,setAltitudeAt:function(e,t,r,i){const n=j(e,t),a=C(e,t,2,P),o=Object(s.e)(P,a,r-n);return Object(s.f)(i,t,o)}})},431:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(113);function n(e){e.code.add(i.a`const float MAX_RGBA_FLOAT =
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
}`)}},464:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return s}));var i=r(107),n=r(111),a=r(101);function o(e,t,r){const i=Object(n.h)(e,t)/Object(n.h)(e,e);return Object(n.e)(r,e,i)}function s(e,t){return Object(n.h)(e,t)/Object(n.p)(e)}function c(e,t){const r=Object(n.h)(e,t)/(Object(n.p)(e)*Object(n.p)(t));return-Object(i.b)(r)}function l(e,t,r){Object(n.r)(u,e),Object(n.r)(d,t);const a=Object(n.h)(u,d),o=Object(i.b)(a),s=Object(n.g)(u,u,d);return Object(n.h)(s,r)<0?2*Math.PI-o:o}const u=Object(a.e)(),d=Object(a.e)()},465:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(234);class n{constructor(){this.id=Object(i.a)()}unload(){}}},466:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return s}));var i=r(431),n=r(113);function a(e){e.fragment.include(i.a),e.fragment.uniforms.add("uShadowMapTex","sampler2D"),e.fragment.uniforms.add("uShadowMapNum","int"),e.fragment.uniforms.add("uShadowMapDistance","vec4"),e.fragment.uniforms.add("uShadowMapMatrix","mat4",4),e.fragment.uniforms.add("uDepthHalfPixelSz","float"),e.fragment.code.add(n.a`int chooseCascade(float _linearDepth, out mat4 mat) {
vec4 distance = uShadowMapDistance;
float depth = _linearDepth;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? uShadowMapMatrix[0] : i == 1 ? uShadowMapMatrix[1] : i == 2 ? uShadowMapMatrix[2] : uShadowMapMatrix[3];
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
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= uShadowMapNum) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, uDepthHalfPixelSz, uShadowMapTex);
}`)}function o(e,t){t.shadowMappingEnabled&&(t.shadowMap.bind(e),t.shadowMap.bindView(e,t.origin))}function s(e,t,r){t.shadowMappingEnabled&&t.shadowMap.bindView(e,r)}function c(e,t){t.shadowMappingEnabled&&t.shadowMap.bindView(e,t.origin)}},497:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return s})),r.d(t,"d",(function(){return o}));var i=r(113);function n(e,t){t.vvInstancingEnabled&&(t.vvSize||t.vvColor)&&e.attributes.add("instanceFeatureAttribute","vec4"),t.vvSize?(e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),e.vertex.uniforms.add("vvSymbolAnchor","vec3"),e.vertex.code.add(i.a`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),e.vertex.code.add(i.a`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.vvInstancingEnabled?i.a`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):e.vertex.code.add(i.a`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(e.vertex.constants.add("vvColorNumber","int",8),e.vertex.code.add(i.a`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

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

      ${t.vvInstancingEnabled?i.a`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):e.vertex.code.add(i.a`vec4 vvColor() { return vec4(1.0); }`)}function a(e,t){t.vvSizeEnabled&&(e.setUniform3fv("vvSizeMinSize",t.vvSizeMinSize),e.setUniform3fv("vvSizeMaxSize",t.vvSizeMaxSize),e.setUniform3fv("vvSizeOffset",t.vvSizeOffset),e.setUniform3fv("vvSizeFactor",t.vvSizeFactor)),t.vvColorEnabled&&(e.setUniform1fv("vvColorValues",t.vvColorValues),e.setUniform4fv("vvColorColors",t.vvColorColors))}function o(e,t){a(e,t),t.vvOpacityEnabled&&(e.setUniform1fv("vvOpacityValues",t.vvOpacityValues),e.setUniform1fv("vvOpacityOpacities",t.vvOpacityOpacities))}function s(e,t){a(e,t),t.vvSizeEnabled&&(e.setUniform3fv("vvSymbolAnchor",t.vvSymbolAnchor),e.setUniformMatrix3fv("vvSymbolRotationMatrix",t.vvSymbolRotationMatrix))}},505:function(e,t,r){"use strict";function i(){return new Float32Array(3)}function n(e){const t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function a(e,t,r){const i=new Float32Array(3);return i[0]=e,i[1]=t,i[2]=r,i}function o(){return i()}function s(){return a(1,1,1)}function c(){return a(1,0,0)}function l(){return a(0,1,0)}function u(){return a(0,0,1)}r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return a}));const d=o(),f=s(),h=c(),m=l(),p=u();Object.freeze({__proto__:null,create:i,clone:n,fromValues:a,createView:function(e,t){return new Float32Array(e,t,3)},zeros:o,ones:s,unitX:c,unitY:l,unitZ:u,ZEROS:d,ONES:f,UNIT_X:h,UNIT_Y:m,UNIT_Z:p})},513:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(431),n=r(113);function a(e,t){e.fragment.include(i.a),3===t.output?(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(n.a`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):1===t.output&&e.fragment.code.add(n.a`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}},514:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return h})),r.d(t,"d",(function(){return u})),r.d(t,"e",(function(){return l}));var i=r(135),n=r(342),a=r(220);function o(e,t,r,i){const n=r.typedBuffer,a=r.typedBufferStride,o=e.length;i*=a;for(let s=0;s<o;++s){const r=2*e[s];n[i]=t[r],n[i+1]=t[r+1],i+=a}}function s(e,t,r,i,n){const a=r.typedBuffer,o=r.typedBufferStride,s=e.length;if(i*=o,null==n||1===n)for(let c=0;c<s;++c){const r=3*e[c];a[i]=t[r],a[i+1]=t[r+1],a[i+2]=t[r+2],i+=o}else for(let c=0;c<s;++c){const r=3*e[c];for(let e=0;e<n;++e)a[i]=t[r],a[i+1]=t[r+1],a[i+2]=t[r+2],i+=o}}function c(e,t,r,i,n=1){const a=r.typedBuffer,o=r.typedBufferStride,s=e.length;if(i*=o,1===n)for(let c=0;c<s;++c){const r=4*e[c];a[i]=t[r],a[i+1]=t[r+1],a[i+2]=t[r+2],a[i+3]=t[r+3],i+=o}else for(let c=0;c<s;++c){const r=4*e[c];for(let e=0;e<n;++e)a[i]=t[r],a[i+1]=t[r+1],a[i+2]=t[r+2],a[i+3]=t[r+3],i+=o}}function l(e,t,r,i,n,a=1){if(!r)return void s(e,t,i,n,a);const o=i.typedBuffer,c=i.typedBufferStride,l=e.length,u=r[0],d=r[1],f=r[2],h=r[4],m=r[5],p=r[6],v=r[8],g=r[9],b=r[10],x=r[12],O=r[13],_=r[14];if(n*=c,1===a)for(let s=0;s<l;++s){const r=3*e[s],i=t[r],a=t[r+1],l=t[r+2];o[n]=u*i+h*a+v*l+x,o[n+1]=d*i+m*a+g*l+O,o[n+2]=f*i+p*a+b*l+_,n+=c}else for(let s=0;s<l;++s){const r=3*e[s],i=t[r],l=t[r+1],T=t[r+2],y=u*i+h*l+v*T+x,w=d*i+m*l+g*T+O,M=f*i+p*l+b*T+_;for(let e=0;e<a;++e)o[n]=y,o[n+1]=w,o[n+2]=M,n+=c}}function u(e,t,r,n,a,o=1){if(!r)return void s(e,t,n,a,o);const c=r,l=n.typedBuffer,u=n.typedBufferStride,d=e.length,f=c[0],h=c[1],m=c[2],p=c[4],v=c[5],g=c[6],b=c[8],x=c[9],O=c[10],_=!Object(i.q)(c),T=1e-6,y=1-T;if(a*=u,1===o)for(let i=0;i<d;++i){const r=3*e[i],n=t[r],o=t[r+1],s=t[r+2];let c=f*n+p*o+b*s,d=h*n+v*o+x*s,w=m*n+g*o+O*s;if(_){const e=c*c+d*d+w*w;if(e<y&&e>T){const t=1/Math.sqrt(e);c*=t,d*=t,w*=t}}l[a+0]=c,l[a+1]=d,l[a+2]=w,a+=u}else for(let i=0;i<d;++i){const r=3*e[i],n=t[r],s=t[r+1],c=t[r+2];let d=f*n+p*s+b*c,w=h*n+v*s+x*c,M=m*n+g*s+O*c;if(_){const e=d*d+w*w+M*M;if(e<y&&e>T){const t=1/Math.sqrt(e);d*=t,w*=t,M*=t}}for(let e=0;e<o;++e)l[a+0]=d,l[a+1]=w,l[a+2]=M,a+=u}}function d(e,t,r,n,a,o=1){if(!r)return void c(e,t,n,a,o);const s=r,l=n.typedBuffer,u=n.typedBufferStride,d=e.length,f=s[0],h=s[1],m=s[2],p=s[4],v=s[5],g=s[6],b=s[8],x=s[9],O=s[10],_=!Object(i.q)(s),T=1e-6,y=1-T;if(a*=u,1===o)for(let i=0;i<d;++i){const r=4*e[i],n=t[r],o=t[r+1],s=t[r+2],c=t[r+3];let d=f*n+p*o+b*s,w=h*n+v*o+x*s,M=m*n+g*o+O*s;if(_){const e=d*d+w*w+M*M;if(e<y&&e>T){const t=1/Math.sqrt(e);d*=t,w*=t,M*=t}}l[a+0]=d,l[a+1]=w,l[a+2]=M,l[a+3]=c,a+=u}else for(let i=0;i<d;++i){const r=4*e[i],n=t[r],s=t[r+1],c=t[r+2],d=t[r+3];let w=f*n+p*s+b*c,M=h*n+v*s+x*c,S=m*n+g*s+O*c;if(_){const e=w*w+M*M+S*S;if(e<y&&e>T){const t=1/Math.sqrt(e);w*=t,M*=t,S*=t}}for(let e=0;e<o;++e)l[a+0]=w,l[a+1]=M,l[a+2]=S,l[a+3]=d,a+=u}}function f(e,t,r,i,n,a=1){const o=i.typedBuffer,s=i.typedBufferStride,c=e.length;if(n*=s,1===a){if(4===r)for(let l=0;l<c;++l){const r=4*e[l];o[n]=t[r],o[n+1]=t[r+1],o[n+2]=t[r+2],o[n+3]=t[r+3],n+=s}else if(3===r)for(let l=0;l<c;++l){const r=3*e[l];o[n]=t[r],o[n+1]=t[r+1],o[n+2]=t[r+2],o[n+3]=255,n+=s}}else if(4===r)for(let l=0;l<c;++l){const r=4*e[l];for(let e=0;e<a;++e)o[n]=t[r],o[n+1]=t[r+1],o[n+2]=t[r+2],o[n+3]=t[r+3],n+=s}else if(3===r)for(let l=0;l<c;++l){const r=3*e[l];for(let e=0;e<a;++e)o[n]=t[r],o[n+1]=t[r+1],o[n+2]=t[r+2],o[n+3]=255,n+=s}}function h(e,t,r,i,s,c){for(const h of t.fieldNames){const t=e.vertexAttributes.get(h),m=e.indices.get(h);if(t&&m)switch(h){case"position":{Object(a.a)(3===t.size);const e=s.getField(h,n.u);e&&l(m,t.data,r,e,c);break}case"normal":{Object(a.a)(3===t.size);const e=s.getField(h,n.u);e&&u(m,t.data,i,e,c);break}case"uv0":{Object(a.a)(2===t.size);const e=s.getField(h,n.m);e&&o(m,t.data,e,c);break}case"color":{Object(a.a)(3===t.size||4===t.size);const e=s.getField(h,n.J);e&&f(m,t.data,t.size,e,c);break}case"symbolColor":{Object(a.a)(3===t.size||4===t.size);const e=s.getField(h,n.J);e&&f(m,t.data,t.size,e,c);break}case"tangent":{Object(a.a)(4===t.size);const e=s.getField(h,n.C);e&&d(m,t.data,i,e,c);break}}}}},515:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(113);function n(e,t){t.attributeColor?(e.attributes.add("color","vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(i.a`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(i.a`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(i.a`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},532:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return s})),r.d(t,"d",(function(){return c})),r.d(t,"e",(function(){return l})),r.d(t,"f",(function(){return u})),r.d(t,"g",(function(){return o})),r.d(t,"h",(function(){return a}));const i={func:513},n={func:519},a={mask:255},o={mask:0},s={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:0}},c={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7681}},l={function:{func:514,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7680}},u={function:{func:517,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7680}}},564:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(113);function n(e,t){0===t.output&&t.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(i.a`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):1===t.output||3===t.output?(e.varyings.add("linearDepth","float"),e.vertex.uniforms.add("cameraNearFar","vec2"),e.vertex.code.add(i.a`void forwardLinearDepth() {
linearDepth = (-position_view().z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);
}`)):e.vertex.code.add(i.a`void forwardLinearDepth() {}`)}},573:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(113);function n(e){e.vertex.code.add(i.a`const float PI = 3.141592653589793;`),e.fragment.code.add(i.a`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},578:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(113);function n(e){const t=e.fragment.code;t.add(i.a`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(i.a`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(i.a`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}var a=r(573);function o(e,t){const r=e.fragment.code;e.include(a.a),3===t.pbrMode||4===t.pbrMode?(r.add(i.a`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(i.a`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(i.a`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(i.a`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(i.a`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
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
}`)):1!==t.pbrMode&&2!==t.pbrMode||(e.include(n),r.add(i.a`struct PBRShadingInfo
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
};`),r.add(i.a`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(i.a`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),r.add(i.a`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(i.a`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(i.a`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}},610:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return a}));const i=e=>class extends e{constructor(){super(...arguments),this._isDisposed=!1}dispose(){for(const t of null!=(e=this._managedDisposables)?e:[]){var e;const r=this[t];this[t]=null,r&&"function"==typeof r.dispose&&r.dispose()}this._isDisposed=!0}get isDisposed(){return this._isDisposed}};class n extends(i(class{})){}function a(){return(e,t)=>{var r,i;e.hasOwnProperty("_managedDisposables")||(e._managedDisposables=null!=(r=null==(i=e._managedDisposables)?void 0:i.slice())?r:[]),e._managedDisposables.unshift(t)}}},613:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return l}));var i=r(327);const n=[{name:"position",count:2,type:5126,offset:0,stride:8,normalized:!1}],a=[{name:"position",count:2,type:5126,offset:0,stride:16,normalized:!1},{name:"uv0",count:2,type:5126,offset:8,stride:16,normalized:!1}];var o=r(212),s=r(179),c=r(216);function l(e,t=n,r=i.a,s=-1,l=1){let u=null;switch(t){case a:u=new Float32Array([s,s,0,0,l,s,1,0,s,l,0,1,l,l,1,1]);break;case n:default:u=new Float32Array([s,s,l,s,s,l,l,l])}return new c.a(e,r,{geometry:t},{geometry:o.a.createVertex(e,35044,u)})}function u(e){return new s.a(e,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1},new Uint8Array([255,255,255,255]))}},623:function(e,t,r){"use strict";function i(e,t,r){for(let i=0;i<r;++i)t[2*i]=e[i],t[2*i+1]=e[i]-t[2*i]}function n(e,t,r,n){for(let s=0;s<n;++s)a[0]=e[s],i(a,o,1),t[s]=o[0],r[s]=o[1]}r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return n}));const a=new Float64Array(1),o=new Float32Array(2)},626:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return o}));var i=r(638),n=r(113);function a(e,t){const r=e.vertex.code;t.verticalOffsetEnabled?(e.vertex.uniforms.add("verticalOffset","vec4"),t.screenSizePerspectiveEnabled&&(e.include(i.a),e.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),r.add(n.a`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${1===t.viewingMode?n.a`vec3 worldNormal = normalize(worldPos + localOrigin);`:n.a`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${t.screenSizePerspectiveEnabled?n.a`
          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:n.a`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):r.add(n.a`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}function o(e,t,r){if(!t.verticalOffset)return;const i=s(t.verticalOffset,r.camera.fovY,r.camera.fullViewport[3]),n=r.camera.pixelRatio||1;e.setUniform4f("verticalOffset",i.screenLength*n,i.perDistance,i.minWorldLength,i.maxWorldLength)}function s(e,t,r,i=c){return i.screenLength=e.screenLength,i.perDistance=Math.tan(.5*t)/(.5*r),i.minWorldLength=e.minWorldLength,i.maxWorldLength=e.maxWorldLength,i}const c={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0}},627:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return x})),r.d(t,"c",(function(){return b}));var i=r(85),n=r(289),a=r(304),o=r(135),s=r(168),c=r(485),l=r(384),u=r(111),d=r(505),f=r(101),h=r(221),m=r(430);class p{constructor(){this._transform=Object(s.d)(),this._transformInverse=new v({value:this._transform},o.c,s.d),this._transformInverseTranspose=new v(this._transformInverse,o.b,s.d),this._transformTranspose=new v({value:this._transform},o.b,s.d),this._transformInverseRotation=new v({value:this._transform},n.j,a.b)}invalidateLazyTransforms(){this._transformInverse.invalidate(),this._transformInverseTranspose.invalidate(),this._transformTranspose.invalidate(),this._transformInverseRotation.invalidate()}get transform(){return this._transform}get inverse(){return this._transformInverse.value}get inverseTranspose(){return this._transformInverseTranspose.value}get inverseRotation(){return this._transformInverseRotation.value}get transpose(){return this._transformTranspose.value}setTransformMatrix(e){Object(o.f)(this._transform,e)}multiplyTransform(e){Object(o.n)(this._transform,this._transform,e)}set(e){Object(o.f)(this._transform,e),this.invalidateLazyTransforms()}setAndInvalidateLazyTransforms(e,t){this.setTransformMatrix(e),this.multiplyTransform(t),this.invalidateLazyTransforms()}}class v{constructor(e,t,r){this.original=e,this.update=t,this.dirty=!0,this.transform=r()}invalidate(){this.dirty=!0}get value(){return this.dirty&&(this.update(this.transform,this.original.value),this.dirty=!1),this.transform}}const g=new class{constructor(e=0){this.offset=e,this.sphere=Object(m.b)(),this.tmpVertex=Object(f.e)()}applyToVertex(e,t,r){const i=this.objectTransform.transform;let n=i[0]*e+i[4]*t+i[8]*r+i[12],a=i[1]*e+i[5]*t+i[9]*r+i[13],o=i[2]*e+i[6]*t+i[10]*r+i[14];const s=this.offset/Math.sqrt(n*n+a*a+o*o);n+=n*s,a+=a*s,o+=o*s;const c=this.objectTransform.inverse;return this.tmpVertex[0]=c[0]*n+c[4]*a+c[8]*o+c[12],this.tmpVertex[1]=c[1]*n+c[5]*a+c[9]*o+c[13],this.tmpVertex[2]=c[2]*n+c[6]*a+c[10]*o+c[14],this.tmpVertex}applyToMinMax(e,t){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*i,t[1]+=t[1]*i,t[2]+=t[2]*i}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.sphere[0]=e[0]+e[0]*r,this.sphere[1]=e[1]+e[1]*r,this.sphere[2]=e[2]+e[2]*r,this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};function b(e){return Object(i.k)(e)?(g.offset=e,g):null}new class{constructor(e=0){this.offset=e,this.componentLocalOriginLength=0,this.tmpVertex=Object(f.e)(),this.mbs=Object(h.e)(),this.obb={center:Object(f.e)(),halfSize:Object(d.b)(),quaternion:null}}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,t,r){const i=e,n=t,a=r+this.componentLocalOriginLength,o=this.offset/Math.sqrt(i*i+n*n+a*a);return this.tmpVertex[0]=e+i*o,this.tmpVertex[1]=t+n*o,this.tmpVertex[2]=r+a*o,this.tmpVertex}applyToAabb(e){const t=e[0],r=e[1],i=e[2]+this.componentLocalOriginLength,n=e[3],a=e[4],o=e[5]+this.componentLocalOriginLength,s=this.offset/Math.sqrt(t*t+r*r+i*i);e[0]+=t*s,e[1]+=r*s,e[2]+=i*s;const c=this.offset/Math.sqrt(n*n+a*a+o*o);return e[3]+=n*c,e[4]+=a*c,e[5]+=o*c,e}applyToMbs(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.mbs[0]=e[0]+e[0]*r,this.mbs[1]=e[1]+e[1]*r,this.mbs[2]=e[2]+e[2]*r,this.mbs[3]=e[3]+e[3]*this.offset/t,this.mbs}applyToObb(e){const t=e.center,r=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);this.obb.center[0]=t[0]+t[0]*r,this.obb.center[1]=t[1]+t[1]*r,this.obb.center[2]=t[2]+t[2]*r,Object(u.u)(this.obb.halfSize,e.halfSize,e.quaternion),Object(u.f)(this.obb.halfSize,this.obb.halfSize,e.center);const i=this.offset/Math.sqrt(this.obb.halfSize[0]*this.obb.halfSize[0]+this.obb.halfSize[1]*this.obb.halfSize[1]+this.obb.halfSize[2]*this.obb.halfSize[2]);return this.obb.halfSize[0]+=this.obb.halfSize[0]*i,this.obb.halfSize[1]+=this.obb.halfSize[1]*i,this.obb.halfSize[2]+=this.obb.halfSize[2]*i,Object(u.j)(this.obb.halfSize,this.obb.halfSize,e.center),Object(c.a)(O,e.quaternion),Object(u.u)(this.obb.halfSize,this.obb.halfSize,O),this.obb.halfSize[0]*=this.obb.halfSize[0]<0?-1:1,this.obb.halfSize[1]*=this.obb.halfSize[1]<0?-1:1,this.obb.halfSize[2]*=this.obb.halfSize[2]<0?-1:1,this.obb.quaternion=e.quaternion,this.obb}};new class{constructor(e=0){this.offset=e,this.tmpVertex=Object(f.e)()}applyToVertex(e,t,r){const i=e+this.localOrigin[0],n=t+this.localOrigin[1],a=r+this.localOrigin[2],o=this.offset/Math.sqrt(i*i+n*n+a*a);return this.tmpVertex[0]=e+i*o,this.tmpVertex[1]=t+n*o,this.tmpVertex[2]=r+a*o,this.tmpVertex}applyToAabb(e){const t=e[0]+this.localOrigin[0],r=e[1]+this.localOrigin[1],i=e[2]+this.localOrigin[2],n=e[3]+this.localOrigin[0],a=e[4]+this.localOrigin[1],o=e[5]+this.localOrigin[2],s=this.offset/Math.sqrt(t*t+r*r+i*i);e[0]+=t*s,e[1]+=r*s,e[2]+=i*s;const c=this.offset/Math.sqrt(n*n+a*a+o*o);return e[3]+=n*c,e[4]+=a*c,e[5]+=o*c,e}};const x="terrain",O=Object(l.b)()},638:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return o}));var i=r(113),n=r(348);function a(e){e.vertex.code.add(i.a`float screenSizePerspectiveMinSize(float size, vec4 factor) {
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
}`),e.vertex.code.add(i.a`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(i.a`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),e.vertex.code.add(i.a`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),e.vertex.code.add(i.a`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(i.a`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);
}`),e.vertex.code.add(i.a`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function o(e,t){if(t.screenSizePerspective){Object(n.a)(t.screenSizePerspective,e,"screenSizePerspective");const r=t.screenSizePerspectiveAlignment||t.screenSizePerspective;Object(n.a)(r,e,"screenSizePerspectiveAlignment")}}},654:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return s})),r.d(t,"d",(function(){return l}));var i=r(107);function n(e,t,r){const i=r.parameters,n=r.paddingPixelsOverride;return u.scale=Math.min(i.divisor/(t-i.offset),1),u.factor=function(e){return Math.abs(e*e*e)}(e),u.minPixelSize=i.minPixelSize,u.paddingPixels=n,u}function a(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}function o(e,t){return Math.max(Object(i.m)(e*t.scale,e,t.factor),a(e,t))}function s(e,t,r,i){i.scale=function(e,t,r){const i=n(e,t,r);return i.minPixelSize=0,i.paddingPixels=0,o(1,i)}(e,t,r),i.factor=0,i.minPixelSize=r.parameters.minPixelSize,i.paddingPixels=r.paddingPixelsOverride}function c(e,t,r=[0,0]){const i=Math.min(Math.max(t.scale,a(e[1],t)/e[1]),1);return r[0]=e[0]*i,r[1]=e[1]*i,r}function l(e,t,r,i){return o(e,n(t,r,i))}Object(i.h)(10),Object(i.h)(12),Object(i.h)(70),Object(i.h)(40);const u={scale:0,factor:0,minPixelSize:0,paddingPixels:0}},662:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(113);function n(e,t){1===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(i.a`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),2===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add("uvRegion","vec4"),e.varyings.add("vuvRegion","vec4"),e.vertex.code.add(i.a`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),0===t.attributeTextureCoordinates&&e.vertex.code.add(i.a`void forwardTextureCoordinates() {}`)}},663:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(113);function n(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(i.a`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):r.code.add(i.a`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}},665:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(113);function n(e){const t=i.a`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;e.fragment.code.add(t),e.vertex.code.add(t)}function a(e,t){0===t.normalType&&(e.attributes.add("normal","vec3"),e.vertex.code.add(i.a`vec3 normalModel() {
return normal;
}`)),1===t.normalType&&(e.include(n),e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(i.a`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),3===t.normalType&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(i.a`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}},689:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(113);function n(e){e.attributes.add("position","vec3"),e.vertex.code.add(i.a`vec3 positionModel() { return position; }`)}},692:function(e,t,r){"use strict";r.d(t,"a",(function(){return R}));var i=r(197),n=r(88),a=r(122),o=r(107),s=r(85),c=r(89),l=r(321),u=r(96),d=r(710),f=r(422),h=r(132);let m;var p=r(179),v=r(555);let g=null,b=null;async function x(){return Object(s.j)(b)&&(b=function(){if(Object(s.j)(m)){const e=e=>Object(h.a)(`esri/libs/basisu/${e}`);m=Promise.all([r.e(200),r.e(239)]).then(r.bind(null,1300)).then((function(e){return e.b})).then((({default:t})=>t({locateFile:e}).then((e=>(e.initializeBasis(),delete e.then,e)))))}return m}(),g=await b),b}function O(e,t,r,i,n){const a=Object(v.b)(t?37496:37492),o=n&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*i*a*o)}function _(e){return e.getNumImages()>=1&&!e.isUASTC()}function T(e){return e.getFaces()>=1&&e.isETC1S()}function y(e,t,r,i,n,a,o,s){const{compressedTextureETC:c,compressedTextureS3TC:l}=e.capabilities,[u,d]=c?i?[1,37496]:[0,37492]:l?i?[3,33779]:[2,33776]:[13,6408],f=t.hasMipmap?r:Math.min(1,r),h=[];for(let p=0;p<f;p++)h.push(new Uint8Array(o(p,u))),s(p,u,h[p]);const m=h.length>1,v=m?9987:9729,g={...t,samplingMode:v,hasMipmap:m,internalFormat:d,width:n,height:a};return new p.a(e,g,{type:"compressed",levels:h})}var w=r(465);const M=r(80).a.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),S=542327876,C=131072;function j(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const A=j("DXT1"),P=j("DXT3"),F=j("DXT5");function I(e,t,r){const{textureData:i,internalFormat:n,width:a,height:s}=function(e,t){const r=new Int32Array(e,0,31);if(r[0]!==S)return M.error("Invalid magic number in DDS header"),null;if(!(4&r[20]))return M.error("Unsupported format, must contain a FourCC code"),null;const i=r[21];let n,a;switch(i){case A:n=8,a=33776;break;case P:n=16,a=33778;break;case F:n=16,a=33779;break;default:return M.error("Unsupported FourCC code:",function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}(i)),null}let s=1,c=r[4],l=r[3];0==(3&c)&&0==(3&l)||(M.warn("Rounding up compressed texture size to nearest multiple of 4."),c=c+3&-4,l=l+3&-4);const u=c,d=l;let f,h;r[2]&C&&!1!==t&&(s=Math.max(1,r[7])),1===s||Object(o.l)(c)&&Object(o.l)(l)||(M.warn("Ignoring mipmaps of non power of two sized compressed texture."),s=1);let m=r[1]+4;const p=[];for(let o=0;o<s;++o)h=(c+3>>2)*(l+3>>2)*n,f=new Uint8Array(e,m,h),p.push(f),m+=h,c=Math.max(1,c>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:p},internalFormat:a,width:u,height:d}}(r,t.hasMipmap);return t.samplingMode=i.levels.length>1?9987:9729,t.hasMipmap=i.levels.length>1,t.internalFormat=n,t.width=a,t.height=s,new p.a(e,t,i)}var E=r(613),D=r(220),z=r(241),L=r(398);class R extends w.a{constructor(e,t){super(),this.data=e,this.type=4,this.glTexture=null,this.powerOfTwoStretchInfo=null,this.loadingPromise=null,this.loadingController=null,this.events=new a.a,this.params=t||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:10497,t:10497},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||1,this.estimatedTexMemRequired=R.estimateTexMemRequired(this.data,this.params),this.startPreload()}startPreload(){const e=this.data;Object(s.j)(e)||(e instanceof HTMLVideoElement?this.startPreloadVideoElement(e):e instanceof HTMLImageElement&&this.startPreloadImageElement(e))}startPreloadVideoElement(e){Object(u.t)(e.src)||"auto"===e.preload&&e.crossOrigin||(e.preload="auto",e.crossOrigin="anonymous",e.src=e.src)}startPreloadImageElement(e){Object(u.u)(e.src)||Object(u.t)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static estimateTexMemRequired(e,t){if(Object(s.j)(e))return 0;if(Object(l.c)(e)||Object(l.k)(e))return t.encoding===R.KTX2_ENCODING?function(e,t){if(Object(s.j)(g))return e.byteLength;const r=new g.KTX2File(new Uint8Array(e)),i=T(r)?O(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),i}(e,t.mipmap):t.encoding===R.BASIS_ENCODING?function(e,t){if(Object(s.j)(g))return e.byteLength;const r=new g.BasisFile(new Uint8Array(e)),i=_(r)?O(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),i}(e,t.mipmap):e.byteLength;const{width:r,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?R.getDataDimensions(e):t;return(t.mipmap?4/3:1)*r*i*(t.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}createDescriptor(e){var t;return{target:3553,pixelFormat:6408,dataType:5121,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?9987:9729,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:null!=(t=this.params.maxAnisotropy)?t:this.params.mipmap?e.parameters.maxMaxAnisotropy:1}}load(e,t){if(Object(s.k)(this.glTexture))return this.glTexture;if(Object(s.k)(this.loadingPromise))return this.loadingPromise;const r=this.data;return Object(s.j)(r)?(this.glTexture=new p.a(e,this.createDescriptor(e),null),this.glTexture):"string"==typeof r?this.loadFromURL(e,t,r):r instanceof Image?this.loadFromImageElement(e,t,r):r instanceof HTMLVideoElement?this.loadFromVideoElement(e,t,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this.loadFromImage(e,r,t):(Object(l.c)(r)||Object(l.k)(r))&&this.params.encoding===R.DDS_ENCODING?this.loadFromDDSData(e,r):(Object(l.c)(r)||Object(l.k)(r))&&this.params.encoding===R.KTX2_ENCODING?this.loadFromKTX2(e,r):(Object(l.c)(r)||Object(l.k)(r))&&this.params.encoding===R.BASIS_ENCODING?this.loadFromBasis(e,r):Object(l.k)(r)?this.loadFromPixelData(e,r):Object(l.c)(r)?this.loadFromPixelData(e,new Uint8Array(r)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,t,r){if(!(this.data instanceof HTMLVideoElement)||Object(s.j)(this.glTexture))return r;if(this.data.readyState<2||r===this.data.currentTime)return r;if(Object(s.k)(this.powerOfTwoStretchInfo)){const{framebuffer:r,vao:i,sourceTexture:n}=this.powerOfTwoStretchInfo;n.setData(this.data),this.drawStretchedTexture(e,t,r,i,n,this.glTexture)}else{const{width:e,height:t}=this.data,{width:r,height:i}=this.glTexture.descriptor;e!==r||t!==i?this.glTexture.updateData(0,0,0,Math.min(e,r),Math.min(t,i),this.data):this.glTexture.setData(this.data)}return this.glTexture.descriptor.hasMipmap&&this.glTexture.generateMipmap(),this.data.currentTime}loadFromDDSData(e,t){return this.glTexture=I(e,this.createDescriptor(e),t),this.glTexture}loadFromKTX2(e,t){return this.loadAsync((()=>async function(e,t,r){Object(s.j)(g)&&(g=await x());const i=new g.KTX2File(new Uint8Array(r));if(!T(i))return null;i.startTranscoding();const n=y(e,t,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),((e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,r)=>i.transcodeImage(r,e,0,0,t,0,-1,-1)));return i.close(),i.delete(),n}(e,this.createDescriptor(e),t).then((e=>(this.glTexture=e,e)))))}loadFromBasis(e,t){return this.loadAsync((()=>async function(e,t,r){Object(s.j)(g)&&(g=await x());const i=new g.BasisFile(new Uint8Array(r));if(!_(i))return null;i.startTranscoding();const n=y(e,t,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),((e,t)=>i.getImageTranscodedSizeInBytes(0,e,t)),((e,t,r)=>i.transcodeImage(r,0,e,t,0,0)));return i.close(),i.delete(),n}(e,this.createDescriptor(e),t).then((e=>(this.glTexture=e,e)))))}loadFromPixelData(e,t){Object(D.a)(this.params.width>0&&this.params.height>0);const r=this.createDescriptor(e);return r.pixelFormat=1===this.params.components?6409:3===this.params.components?6407:6408,r.width=this.params.width,r.height=this.params.height,this.glTexture=new p.a(e,r,t),this.glTexture}loadAsync(e){const t=Object(c.d)();this.loadingController=t;const r=e(t.signal);this.loadingPromise=r;const i=()=>{this.loadingController===t&&(this.loadingController=null),this.loadingPromise===r&&(this.loadingPromise=null)};return r.then(i,i),r}loadFromURL(e,t,r){return this.loadAsync((async i=>{const n=await Object(d.a)(r,{signal:i});return this.loadFromImage(e,n,t)}))}loadFromImageElement(e,t,r){return r.complete?this.loadFromImage(e,r,t):this.loadAsync((async i=>{const n=await Object(f.a)(r,r.src,!1,i);return this.loadFromImage(e,n,t)}))}loadFromVideoElement(e,t,r){return r.readyState>=2?this.loadFromImage(e,r,t):this.loadFromVideoElementAsync(e,t,r)}loadFromVideoElementAsync(e,t,r){return this.loadAsync((i=>new Promise(((a,o)=>{const l=()=>{r.removeEventListener("loadeddata",u),r.removeEventListener("error",d),Object(s.k)(f)&&f.remove()},u=()=>{r.readyState>=2&&(l(),a(this.loadFromImage(e,r,t)))},d=e=>{l(),o(e||new n.a("Failed to load video"))};r.addEventListener("loadeddata",u),r.addEventListener("error",d);const f=Object(c.q)(i,(()=>d(Object(c.e)())))}))))}loadFromImage(e,t,r){const i=R.getDataDimensions(t);this.params.width=i.width,this.params.height=i.height;const n=this.createDescriptor(e);return n.pixelFormat=3===this.params.components?6407:6408,!this.requiresPowerOfTwo(e,n)||Object(o.l)(i.width)&&Object(o.l)(i.height)?(n.width=i.width,n.height=i.height,this.glTexture=new p.a(e,n,t),this.glTexture):(this.glTexture=this.makePowerOfTwoTexture(e,t,i,n,r),this.glTexture)}requiresPowerOfTwo(e,t){const r=33071,i="number"==typeof t.wrapMode?t.wrapMode===r:t.wrapMode.s===r&&t.wrapMode.t===r;return!Object(L.a)(e.gl)&&(t.hasMipmap||!i)}makePowerOfTwoTexture(e,t,r,n,a){const{width:s,height:c}=r,l=Object(o.p)(s),u=Object(o.p)(c);let d;switch(n.width=l,n.height=u,this.params.powerOfTwoResizeMode){case 2:n.textureCoordinateScaleFactor=[s/l,c/u],d=new p.a(e,n),d.updateData(0,0,0,s,c,t);break;case 1:case null:case void 0:d=this.stretchToPowerOfTwo(e,t,n,a);break;default:Object(i.a)(this.params.powerOfTwoResizeMode)}return n.hasMipmap&&d.generateMipmap(),d}stretchToPowerOfTwo(e,t,r,i){const n=new p.a(e,r),a=new z.a(e,{colorTarget:0,depthStencilTarget:0},n),o=new p.a(e,{target:3553,pixelFormat:r.pixelFormat,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},t),s=Object(E.b)(e);return this.drawStretchedTexture(e,i,a,s,o,n),this.requiresFrameUpdates?this.powerOfTwoStretchInfo={vao:s,sourceTexture:o,framebuffer:a}:(s.dispose(!0),o.dispose(),a.detachColorTexture(),e.bindFramebuffer(null),a.dispose()),n}drawStretchedTexture(e,t,r,i,n,a){e.bindFramebuffer(r);const o=e.getViewport();e.setViewport(0,0,a.descriptor.width,a.descriptor.height);const s=t.program;e.useProgram(s),s.setUniform4f("color",1,1,1,1),s.bindTexture(n,"tex"),e.bindVAO(i),e.setPipelineState(t.pipeline),e.drawArrays(5,0,Object(v.f)(i,"geometry")),e.bindFramebuffer(null),e.setViewport(o.x,o.y,o.width,o.height)}unload(){if(Object(s.k)(this.powerOfTwoStretchInfo)){const{framebuffer:e,vao:t,sourceTexture:r}=this.powerOfTwoStretchInfo;t.dispose(!0),r.dispose(),e.dispose(),this.glTexture=null,this.powerOfTwoStretchInfo=null}if(Object(s.k)(this.glTexture)&&(this.glTexture.dispose(),this.glTexture=null),Object(s.k)(this.loadingController)){const e=this.loadingController;this.loadingController=null,this.loadingPromise=null,e.abort()}this.events.emit("unloaded")}}R.DDS_ENCODING="image/vnd-ms.dds",R.KTX2_ENCODING="image/ktx2",R.BASIS_ENCODING="image/x.basis"},693:function(e,t,r){"use strict";r.d(t,"a",(function(){return N}));var i=r(304),n=r(111),a=r(101),o=r(409),s=r(331),c=r(802),l=r(375),u=r(362),d=r(627),f=r(514),h=r(348),m=r(81),p=r(256),v=r(726),g=r(626),b=r(319),x=r(278),O=r(727),_=r(466),T=r(497),y=r(739),w=r(394),M=r(325),S=r(334),C=r(341),j=r(327),A=r(326),P=r(532),F=r(906),I=r(174);class E extends S.a{initializeProgram(e){const t=E.shader.get(),r=this.configuration,i=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,pbrMode:r.usePBR?r.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:r.hasMetalnessAndRoughnessTexture,hasEmissionTexture:r.hasEmissionTexture,hasOcclusionTexture:r.hasOcclusionTexture,hasNormalTexture:r.hasNormalTexture,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:r.normalsTypeDerivate?3:0,doubleSidedMode:r.doubleSidedMode,vertexTangents:r.vertexTangents,attributeTextureCoordinates:r.hasMetalnessAndRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture||r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:Object(y.b)(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new A.a(e.rctx,i,j.a)}bindPass(e,t){var r,i;Object(w.c)(this.program,t.camera.projectionMatrix);const n=this.configuration.output;(1===this.configuration.output||t.multipassTerrainEnabled||3===n)&&this.program.setUniform2fv("cameraNearFar",t.camera.nearFar),t.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",t.inverseViewport),Object(x.a)(this.program,t)),7===n&&(this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",h.b[e.colorMixMode])),0===n?(t.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",e.ambient),this.program.setUniform3fv("diffuse",e.diffuse),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",h.b[e.colorMixMode]),this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.configuration.usePBR&&Object(O.b)(this.program,e,this.configuration.isSchematic)):4===n&&Object(b.b)(this.program,t),Object(T.c)(this.program,e),Object(g.b)(this.program,e,t),Object(h.a)(e.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==e.textureAlphaMode&&3!==e.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",e.textureAlphaCutoff),null==(r=t.shadowMap)||r.bind(this.program),null==(i=t.ssaoHelper)||i.bind(this.program,t.camera)}bindDraw(e){const t=this.configuration.instancedDoublePrecision?Object(a.g)(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;Object(w.e)(this.program,t,e.camera.viewMatrix),this.program.rebindTextures(),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&Object(w.a)(this.program,t,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&v.a.bindCustomOrigin(this.program,t),Object(p.b)(this.program,this.configuration,e.slicePlane,t),0===this.configuration.output&&Object(_.d)(this.program,e,t)}setPipeline(e,t){const r=this.configuration,i=3===e,n=2===e;return Object(I.f)({blending:0!==r.output&&7!==r.output||!r.transparent?null:i?u.f:Object(u.a)(e),culling:D(r)&&Object(I.b)(r.cullFace),depthTest:{func:Object(u.b)(e)},depthWrite:i||n?r.writeDepth&&I.d:null,colorWrite:I.c,stencilWrite:r.sceneHasOcludees?P.h:null,stencilTest:r.sceneHasOcludees?t?P.d:P.c:null,polygonOffset:i||n?null:Object(u.g)(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e){return e?this._occludeePipelineState:this.pipeline}}function D(e){return e.cullFace?0!==e.cullFace:!e.slicePlaneEnabled&&!e.transparent&&!e.doubleSidedMode}E.shader=new M.a(F.a,(()=>r.e(306).then(r.bind(null,1309))));class z extends C.a{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1}}Object(m.a)([Object(C.b)({count:8})],z.prototype,"output",void 0),Object(m.a)([Object(C.b)({count:4})],z.prototype,"alphaDiscardMode",void 0),Object(m.a)([Object(C.b)({count:3})],z.prototype,"doubleSidedMode",void 0),Object(m.a)([Object(C.b)()],z.prototype,"isSchematic",void 0),Object(m.a)([Object(C.b)()],z.prototype,"vertexColors",void 0),Object(m.a)([Object(C.b)()],z.prototype,"offsetBackfaces",void 0),Object(m.a)([Object(C.b)()],z.prototype,"symbolColors",void 0),Object(m.a)([Object(C.b)()],z.prototype,"vvSize",void 0),Object(m.a)([Object(C.b)()],z.prototype,"vvColor",void 0),Object(m.a)([Object(C.b)()],z.prototype,"verticalOffset",void 0),Object(m.a)([Object(C.b)()],z.prototype,"receiveShadows",void 0),Object(m.a)([Object(C.b)()],z.prototype,"slicePlaneEnabled",void 0),Object(m.a)([Object(C.b)()],z.prototype,"sliceHighlightDisabled",void 0),Object(m.a)([Object(C.b)()],z.prototype,"receiveAmbientOcclusion",void 0),Object(m.a)([Object(C.b)()],z.prototype,"screenSizePerspective",void 0),Object(m.a)([Object(C.b)()],z.prototype,"textureAlphaPremultiplied",void 0),Object(m.a)([Object(C.b)()],z.prototype,"hasColorTexture",void 0),Object(m.a)([Object(C.b)()],z.prototype,"usePBR",void 0),Object(m.a)([Object(C.b)()],z.prototype,"hasMetalnessAndRoughnessTexture",void 0),Object(m.a)([Object(C.b)()],z.prototype,"hasEmissionTexture",void 0),Object(m.a)([Object(C.b)()],z.prototype,"hasOcclusionTexture",void 0),Object(m.a)([Object(C.b)()],z.prototype,"hasNormalTexture",void 0),Object(m.a)([Object(C.b)()],z.prototype,"instanced",void 0),Object(m.a)([Object(C.b)()],z.prototype,"instancedColor",void 0),Object(m.a)([Object(C.b)()],z.prototype,"instancedDoublePrecision",void 0),Object(m.a)([Object(C.b)()],z.prototype,"vertexTangents",void 0),Object(m.a)([Object(C.b)()],z.prototype,"normalsTypeDerivate",void 0),Object(m.a)([Object(C.b)()],z.prototype,"writeDepth",void 0),Object(m.a)([Object(C.b)()],z.prototype,"sceneHasOcludees",void 0),Object(m.a)([Object(C.b)()],z.prototype,"transparent",void 0),Object(m.a)([Object(C.b)()],z.prototype,"enableOffset",void 0),Object(m.a)([Object(C.b)({count:3})],z.prototype,"cullFace",void 0),Object(m.a)([Object(C.b)({count:4})],z.prototype,"transparencyPassType",void 0),Object(m.a)([Object(C.b)()],z.prototype,"multipassTerrainEnabled",void 0),Object(m.a)([Object(C.b)()],z.prototype,"cullAboveGround",void 0);var L=r(907);class R extends E{initializeProgram(e){const t=R.shader.get(),r=this.configuration,i=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,pbrMode:r.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangents:!1,attributeTextureCoordinates:r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:Object(y.b)(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new A.a(e.rctx,i,j.a)}}R.shader=new M.a(L.a,(()=>r.e(302).then(r.bind(null,1310))));class N extends l.a{constructor(e){super(e,V),this.supportsEdges=!0,this.techniqueConfig=new z,this.vertexBufferLayout=N.getVertexBufferLayout(this.params),this.instanceBufferLayout=e.instanced?N.getInstanceBufferLayout(this.params):null}isVisibleInPass(e){return 4!==e&&6!==e&&7!==e||this.params.castShadows}isVisible(){const e=this.params;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,r=e.vertexColors,i=e.symbolColors,n=!!t&&t.indexOf("color")>-1,a=e.vvColorEnabled,o="replace"===e.colorMixMode,s=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0;return r&&(n||a||i)?!!o||s:r?o?c:s:n||a||i?!!o||s:o?c:s}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.params.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.params.textureId,this.techniqueConfig.vertexTangents=this.params.vertexTangents,this.techniqueConfig.instanced=!!this.params.instanced,this.techniqueConfig.instancedDoublePrecision=this.params.instancedDoublePrecision,this.techniqueConfig.vvSize=this.params.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.params.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.params.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.params.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.params.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.params.normals,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees,this.techniqueConfig.cullFace=this.params.slicePlaneEnabled?0:this.params.cullFace,this.techniqueConfig.multipassTerrainEnabled=!!t&&t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=!!t&&t.cullAboveGround,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.params.vertexColors,this.techniqueConfig.symbolColors=this.params.symbolColors,this.params.treeRendering?this.techniqueConfig.doubleSidedMode=2:this.techniqueConfig.doubleSidedMode=this.params.doubleSided&&"normal"===this.params.doubleSidedType?1:this.params.doubleSided&&"winding-order"===this.params.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.params.instanced&&this.params.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.params.receiveShadows&&this.params.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!(!t||!t.ssaoEnabled)&&this.params.receiveSSAO,this.techniqueConfig.vvColor=this.params.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.params.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.params.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.params.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.params.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.params.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.params.transparent||!this.params.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.params.usePBR&&this.params.isSchematic,this.techniqueConfig.transparencyPassType=t?t.transparencyPassType:3,this.techniqueConfig.enableOffset=!t||t.camera.relativeElevation<u.e),this.techniqueConfig}intersect(e,t,r,i,a,o,s){if(null!==this.params.verticalOffset){const e=i.camera;Object(n.w)(W,r[12],r[13],r[14]);let t=null;switch(i.viewingMode){case 1:t=Object(n.r)(q,W);break;case 2:t=Object(n.k)(q,G)}let s=0;if(null!==this.params.verticalOffset){const r=Object(n.j)(X,W,e.eye),i=Object(n.p)(r),a=Object(n.e)(r,r,1/i);let o=null;this.params.screenSizePerspective&&(o=Object(n.h)(t,a)),s+=Object(h.i)(e,i,this.params.verticalOffset,o,this.params.screenSizePerspective)}Object(n.e)(t,t,s),Object(n.x)($,t,i.transform.inverseRotation),a=Object(n.j)(k,a,$),o=Object(n.j)(H,o,$)}Object(h.f)(e,t,i,a,o,Object(d.c)(i.verticalOffset),s)}getGLMaterial(e){if(0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output)return new B(e)}createBufferWriter(){return new U(this.vertexBufferLayout,this.instanceBufferLayout)}static getVertexBufferLayout(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,r=Object(o.a)().vec3f("position").vec3f("normal");return e.vertexTangents&&r.vec4f("tangent"),t&&r.vec2f("uv0"),e.vertexColors&&r.vec4u8("color"),e.symbolColors&&r.vec4u8("symbolColor"),r}static getInstanceBufferLayout(e){let t=Object(o.a)();return t=e.instancedDoublePrecision?t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):t.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f("instanceFeatureAttribute")),t}}class B extends c.a{constructor(e){const t=e.material;super({...e,...t.params}),this.updateParameters()}updateParameters(e){const t=this._material.params;this.updateTexture(t.textureId),this._technique=this._techniqueRep.releaseAndAcquire(t.treeRendering?R:E,this._material.getTechniqueConfig(this._output,e),this._technique)}selectPipelines(){}_updateShadowState(e){e.shadowMappingEnabled!==this._material.params.shadowMappingEnabled&&this._material.setParameterValues({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.params.sceneHasOcludees&&this._material.setParameterValues({sceneHasOcludees:e.hasOccludees})}ensureParameters(e){0!==this._output&&7!==this._output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e){this._technique.bindPass(this._material.params,e),this.bindTextures(this._technique.program)}beginSlot(e){return e===(this._material.params.transparent?this._material.params.writeDepth?5:8:3)||23===e}getPipelineState(e,t){return this._technique.getPipelineState(t)}}const V={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:2,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:Object(i.b)(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:s.b,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,...l.b};class U{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get("position").length}write(e,t,r,i){Object(f.c)(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,r,i)}}const k=Object(a.e)(),H=Object(a.e)(),G=Object(a.g)(0,0,1),q=Object(a.e)(),$=Object(a.e)(),W=Object(a.e)(),X=Object(a.e)()},710:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(100);async function n(e,t){const{data:r}=await Object(i.default)(e,{responseType:"image",...t});return r}},726:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var i,n=r(101),a=r(739),o=r(113),s=r(623);function c(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),t.instancedDoublePrecision&&(e.vertex.include(a.a,t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const r=[o.a`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,o.a`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?o.a`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,o.a`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,o.a`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,t.vertexTangents?o.a`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:o.a``];e.vertex.code.add(r[0]),e.vertex.code.add(r[1]),e.vertex.code.add(r[2]),2===t.output&&e.vertex.code.add(r[3]),e.vertex.code.add(r[4])}(i=c||(c={})).Uniforms=class{},i.bindCustomOrigin=function(e,t){Object(s.b)(t,l,u,3),e.setUniform3fv("viewOriginHi",l),e.setUniform3fv("viewOriginLo",u)};const l=Object(n.e)(),u=Object(n.e)()},727:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return s}));var i=r(505),n=r(949),a=r(113);Object(i.c)(0,.6,.2);function o(e,t){const r=e.fragment,i=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;1===t.pbrMode&&i&&e.include(n.a,t),2!==t.pbrMode?(0===t.pbrMode&&r.code.add(a.a`float getBakedOcclusion() { return 1.0; }`),1===t.pbrMode&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(a.a`vec3 mrr;
vec3 emission;
float occlusion;`),t.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(a.a`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(a.a`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(a.a`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(a.a`float getBakedOcclusion() { return 1.0; }`),r.code.add(a.a`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${i?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(a.a`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function s(e,t,r=!1){r||(e.setUniform3fv("mrrFactors",t.mrrFactors),e.setUniform3fv("emissionFactor",t.emissiveFactor))}},734:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var i=r(113);function n(e,t){const r=e.fragment,n=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===n?(r.uniforms.add("lightingAmbientSH0","vec3"),r.code.add(i.a`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===n?(r.uniforms.add("lightingAmbientSH_R","vec4"),r.uniforms.add("lightingAmbientSH_G","vec4"),r.uniforms.add("lightingAmbientSH_B","vec4"),r.code.add(i.a`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):2===n&&(r.uniforms.add("lightingAmbientSH0","vec3"),r.uniforms.add("lightingAmbientSH_R1","vec4"),r.uniforms.add("lightingAmbientSH_G1","vec4"),r.uniforms.add("lightingAmbientSH_B1","vec4"),r.uniforms.add("lightingAmbientSH_R2","vec4"),r.uniforms.add("lightingAmbientSH_G2","vec4"),r.uniforms.add("lightingAmbientSH_B2","vec4"),r.code.add(i.a`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),1!==t.pbrMode&&2!==t.pbrMode||r.code.add(i.a`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}var a=r(663);function o(e){const t=e.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.code.add(i.a`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}var s=r(578),c=r(573),l=r(466);function u(e,t){const r=e.fragment;e.include(o),e.include(a.a,t),0!==t.pbrMode&&e.include(s.a,t),e.include(n,t),t.receiveShadows&&e.include(l.a,t),r.uniforms.add("lightingGlobalFactor","float"),r.uniforms.add("ambientBoostFactor","float"),e.include(c.a),r.code.add(i.a`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===t.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),r.code.add(i.a`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${1===t.viewingMode?i.a`normalize(vPosWorld)`:i.a`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),r.code.add(i.a`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),0===t.pbrMode||4===t.pbrMode?r.code.add(i.a`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):1!==t.pbrMode&&2!==t.pbrMode||(r.code.add(i.a`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(i.a`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),r.code.add(i.a`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = abs(dot(normal, ambientDir));
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.code.add(i.a`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(i.a`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===t.pbrMode?i.a`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:i.a`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}},739:function(e,t,r){"use strict";r.d(t,"a",(function(){return g})),r.d(t,"b",(function(){return b}));var i=r(79),n=r(113),a=r(85),o=r(101),s=r(212),c=r(241),l=r(577),u=(r(202),r(195),r(174),r(179),r(216)),d=r(623),f=r(220),h=r(890);class m{constructor(e){this.context=e,this.svgAlwaysPremultipliesAlpha=!1,this._doublePrecisionRequiresObfuscation=null,Object(h.a)(e).then((e=>this.svgAlwaysPremultipliesAlpha=!e))}get doublePrecisionRequiresObfuscation(){if(Object(a.j)(this._doublePrecisionRequiresObfuscation)){const e=v(this.context,!1),t=v(this.context,!0);this._doublePrecisionRequiresObfuscation=0!==e&&(0===t||e/t>5)}return this._doublePrecisionRequiresObfuscation}}let p=null;function v(e,t){const r=new c.a(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1});const i=s.a.createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),n=new u.a(e,new Map([["position",0]]),{geometry:[{name:"position",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:i}),a=Object(o.g)(5633261.287538229,2626832.878767164,1434988.0495278358),h=Object(o.g)(5633271.46742708,2626873.6381334523,1434963.231608387),m=function(r,i){const n=new l.a(e,`\n\n  precision highp float;\n\n  attribute vec2 position;\n\n  uniform vec3 u_highA;\n  uniform vec3 u_lowA;\n  uniform vec3 u_highB;\n  uniform vec3 u_lowB;\n\n  varying vec4 v_color;\n\n  ${t?"#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION":""}\n\n  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION\n\n  vec3 dpPlusFrc(vec3 a, vec3 b) {\n    return mix(a, a + b, vec3(notEqual(b, vec3(0))));\n  }\n\n  vec3 dpMinusFrc(vec3 a, vec3 b) {\n    return mix(vec3(0), a - b, vec3(notEqual(a, b)));\n  }\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = dpPlusFrc(hiA, hiB);\n    vec3 e = dpMinusFrc(t1, hiA);\n    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;\n    return t1 + t2;\n  }\n\n  #else\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = hiA + hiB;\n    vec3 e = t1 - hiA;\n    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;\n    return t1 + t2;\n  }\n\n  #endif\n\n  const float MAX_RGBA_FLOAT =\n    255.0 / 256.0 +\n    255.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 / 256.0;\n\n  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);\n\n  vec4 float2rgba(const float value) {\n    // Make sure value is in the domain we can represent\n    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);\n\n    // Decompose value in 32bit fixed point parts represented as\n    // uint8 rgba components. Decomposition uses the fractional part after multiplying\n    // by a power of 256 (this removes the bits that are represented in the previous\n    // component) and then converts the fractional part to 8bits.\n    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);\n\n    // Convert uint8 values (from 0 to 255) to floating point representation for\n    // the shader\n    const float toU8AsFloat = 1.0 / 255.0;\n\n    return fixedPointU8 * toU8AsFloat;\n  }\n\n  void main() {\n    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);\n\n    v_color = float2rgba(val.z / 25.0);\n\n    gl_Position = vec4(position * 2.0 - 1.0, 0.0, 1.0);\n  }\n  `,"\n  precision highp float;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_FragColor = v_color;\n  }\n  ",new Map([["position",0]])),a=new Float32Array(6);Object(d.a)(r,a,3);const o=new Float32Array(6);return Object(d.a)(i,o,3),e.useProgram(n),n.setUniform3f("u_highA",a[0],a[2],a[4]),n.setUniform3f("u_lowA",a[1],a[3],a[5]),n.setUniform3f("u_highB",o[0],o[2],o[4]),n.setUniform3f("u_lowB",o[1],o[3],o[5]),n}(a,h),p=e.getBoundFramebufferObject(),{x:v,y:g,width:b,height:x}=e.getViewport();e.bindFramebuffer(r),e.setViewport(0,0,1,1),e.bindVAO(n),e.drawArrays(5,0,4);const O=new Uint8Array(4);r.readPixels(0,0,1,1,6408,5121,O),m.dispose(),n.dispose(!1),i.dispose(),r.dispose(),e.setViewport(v,g,b,x),e.bindFramebuffer(p);const _=(a[2]-h[2])/25,T=Object(f.k)(O);return Math.abs(_-T)}function g({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(n.a`vec3 dpPlusFrc(vec3 a, vec3 b) {
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
}`):e.add(n.a`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function b(e){return!!Object(i.a)("force-double-precision-obfuscation")||(t=e,(Object(a.j)(p)||p.context!==t)&&(p=new m(t)),p).doublePrecisionRequiresObfuscation;var t}},802:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(85),n=r(410);class a extends n.a{constructor(e){super(e),this._textureIDs=new Set,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._initTransparent=!!e.initTextureTransparent,this._texture=this._acquire(this._textureId),this._textureNormal=this._acquire(e.normalTextureId),this._textureEmissive=this._acquire(e.emissiveTextureId),this._textureOcclusion=this._acquire(e.occlusionTextureId),this._textureMetallicRoughness=this._acquire(e.metallicRoughnessTextureId)}dispose(){this._textureIDs.forEach((e=>this._textureRepository.release(e))),this._textureIDs.clear()}updateTexture(e){e!==this._textureId&&(this._release(this._textureId),this._textureId=e,this._texture=this._acquire(this._textureId))}bindTextures(e){Object(i.k)(this._texture)&&e.bindTexture(this._texture.glTexture,"tex"),Object(i.k)(this._textureNormal)&&e.bindTexture(this._textureNormal.glTexture,"normalTexture"),Object(i.k)(this._textureEmissive)&&e.bindTexture(this._textureEmissive.glTexture,"texEmission"),Object(i.k)(this._textureOcclusion)&&e.bindTexture(this._textureOcclusion.glTexture,"texOcclusion"),Object(i.k)(this._textureMetallicRoughness)&&e.bindTexture(this._textureMetallicRoughness.glTexture,"texMetallicRoughness")}bindTextureScale(e){const t=Object(i.k)(this._texture)&&this._texture.glTexture;t&&t.descriptor.textureCoordinateScaleFactor?e.setUniform2fv("textureCoordinateScaleFactor",t.descriptor.textureCoordinateScaleFactor):e.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquire(e){if(!Object(i.j)(e))return this._textureIDs.add(e),this._textureRepository.acquire(e,this._initTransparent)}_release(e){Object(i.j)(e)||(this._textureIDs.delete(e),this._textureRepository.release(e))}}},804:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(113);function n(e){e.vertex.code.add(i.a`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},805:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var i=r(256),n=r(376),a=r(665),o=r(662),s=r(818),c=r(513),l=r(319),u=r(497),d=r(331),f=r(113);function h(e,t){const r=e.vertex.code,h=e.fragment.code;1!==t.output&&3!==t.output||(e.include(n.a,{linearDepth:!0}),e.include(o.a,t),e.include(u.a,t),e.include(c.a,t),e.include(i.a,t),e.vertex.uniforms.add("cameraNearFar","vec2"),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(f.a`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, cameraNearFar, depth);
forwardTextureCoordinates();
}`),e.include(d.a,t),h.add(f.a`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?f.a`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===t.output&&(e.include(n.a,{linearDepth:!1}),e.include(a.a,t),e.include(s.a,t),e.include(o.a,t),e.include(u.a,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),r.add(f.a`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===t.normalType?f.a`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(i.a,t),e.include(d.a,t),h.add(f.a`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?f.a`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===t.normalType?f.a`
            vec3 normal = screenDerivativeNormal(vPositionView);`:f.a`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===t.output&&(e.include(n.a,{linearDepth:!1}),e.include(o.a,t),e.include(u.a,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(f.a`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(i.a,t),e.include(d.a,t),e.include(l.a),h.add(f.a`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?f.a`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}},806:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(367),n=r(113);function a(e){e.include(i.a),e.code.add(n.a`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${n.a.int(1)}) {
        return allMixed;
      }
      else if (mode == ${n.a.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${n.a.int(3)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${n.a.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${n.a.int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}},817:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(113);function n(e){e.vertex.code.add(i.a`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${i.a.int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${i.a.int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${i.a.int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${i.a.int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function a(e,t){t.symbolColor?(e.include(n),e.attributes.add("symbolColor","vec4"),e.varyings.add("colorMixMode","mediump float")):e.fragment.uniforms.add("colorMixMode","int"),t.symbolColor?e.vertex.code.add(i.a`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`):e.vertex.code.add(i.a`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`)}},818:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var i=r(665),n=r(304),a=r(168),o=r(101),s=r(689),c=r(739),l=r(113);function u(e,t){e.include(s.a),e.vertex.include(c.a,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),e.vertex.uniforms.add("uTransform_ProjFromView","mat4"),e.vertex.code.add(l.a`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
uTransform_WorldFromModel_TL,
uTransform_WorldFromModel_TH,
-uTransform_WorldFromView_TL,
-uTransform_WorldFromView_TH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = uTransform_ProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`),e.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.fragment.code.add(l.a`vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`)}function d(e,t){0===t.normalType||1===t.normalType?(e.include(i.a,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),e.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),e.vertex.code.add(l.a`void forwardNormal() {
vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
}`)):2===t.normalType?(e.include(u,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(l.a`
    void forwardNormal() {
      vNormalWorld = ${1===t.viewingMode?l.a`normalize(vPositionWorldCameraRelative);`:l.a`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(l.a`void forwardNormal() {}`)}!function(e){e.ModelTransform=class{constructor(){this.worldFromModel_RS=Object(n.b)(),this.worldFromModel_TH=Object(o.e)(),this.worldFromModel_TL=Object(o.e)()}};e.ViewProjectionTransform=class{constructor(){this.worldFromView_TH=Object(o.e)(),this.worldFromView_TL=Object(o.e)(),this.viewFromCameraRelative_RS=Object(n.b)(),this.projFromView=Object(a.d)()}},e.bindModelTransform=function(e,t){e.setUniformMatrix3fv("uTransform_WorldFromModel_RS",t.worldFromModel_RS),e.setUniform3fv("uTransform_WorldFromModel_TH",t.worldFromModel_TH),e.setUniform3fv("uTransform_WorldFromModel_TL",t.worldFromModel_TL)},e.bindViewProjTransform=function(e,t){e.setUniform3fv("uTransform_WorldFromView_TH",t.worldFromView_TH),e.setUniform3fv("uTransform_WorldFromView_TL",t.worldFromView_TL),e.setUniformMatrix4fv("uTransform_ProjFromView",t.projFromView),e.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",t.viewFromCameraRelative_RS)}}(u||(u={})),(d||(d={})).bindUniforms=function(e,t){e.setUniformMatrix4fv("viewNormal",t)}},852:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(113);function n(e,t){const r=e.fragment;r.code.add(i.a`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),1===t.doubleSidedMode?r.code.add(i.a`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`):2===t.doubleSidedMode?r.code.add(i.a`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`):r.code.add(i.a`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`)}},890:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var i=r(212),n=r(241),a=r(577),o=r(179),s=r(216);async function c(e){const t=new Image;if(t.src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A",t.width=5,t.height=5,await t.decode(),!e.gl)return!0;const r=new n.a(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1}),c=i.a.createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),l=new s.a(e,new Map([["a_pos",0]]),{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:c}),u=new a.a(e,"\n  precision highp float;\n\n  attribute vec2 a_pos;\n  varying vec2 v_uv;\n\n  void main() {\n    v_uv = a_pos;\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  ","\n  precision highp float;\n\n  varying vec2 v_uv;\n  uniform sampler2D u_texture;\n\n  void main() {\n    gl_FragColor = texture2D(u_texture, v_uv);\n  }\n  ",new Map([["a_pos",0]]));e.useProgram(u);const d=new o.a(e,{dataType:5121,pixelFormat:6408,preMultiplyAlpha:!1,wrapMode:33071,samplingMode:9729},t);e.bindTexture(d,0),u.setUniform1i("u_texture",0);const f=e.getBoundFramebufferObject(),{x:h,y:m,width:p,height:v}=e.getViewport();e.bindFramebuffer(r),e.setViewport(0,0,1,1),e.bindVAO(l),e.drawArrays(5,0,4);const g=new Uint8Array(4);return r.readPixels(0,0,1,1,6408,5121,g),u.dispose(),l.dispose(!1),c.dispose(),r.dispose(),d.dispose(),e.setViewport(h,m,p,v),e.bindFramebuffer(f),t.src="",255===g[0]}},906:function(e,t,r){"use strict";r.d(t,"a",(function(){return I})),r.d(t,"b",(function(){return F}));var i=r(564),n=r(804),a=r(256),o=r(376),s=r(726),c=r(665),l=r(689),u=r(817),d=r(662),f=r(515),h=r(818),m=r(626),p=r(805),v=r(311),g=r(985),b=r(663),x=r(734),O=r(278),_=r(852),T=r(578),y=r(727),w=r(466),M=r(497),S=r(331),C=r(986),j=r(806),A=r(113),P=r(271);function F(e){const t=new P.a,r=t.vertex.code,F=t.fragment.code;return t.include(C.a,{name:"Default Material Shader",output:e.output}),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(l.a),t.varyings.add("vpos","vec3"),t.include(M.a,e),t.include(s.a,e),t.include(m.a,e),0!==e.output&&7!==e.output||(t.include(c.a,e),t.include(o.a,{linearDepth:!1}),0===e.normalType&&e.offsetBackfaces&&t.include(n.a),t.include(g.a,e),t.include(h.a,e),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("localvpos","vec3"),t.include(d.a,e),t.include(i.a,e),t.include(u.a,e),t.include(f.a,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),r.add(A.a`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${A.a.float(S.c)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===e.normalType?A.a`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.vertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${0===e.normalType&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }

        ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),7===e.output&&(t.include(a.a,e),t.include(S.a,e),e.multipassTerrainEnabled&&(t.fragment.include(v.a),t.include(O.b,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(j.a),F.add(A.a`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?A.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:A.a`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?A.a`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:A.a`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(a.a,e),t.include(x.a,e),t.include(b.a,e),t.include(S.a,e),e.receiveShadows&&t.include(w.a,e),e.multipassTerrainEnabled&&(t.fragment.include(v.a),t.include(O.b,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(y.a,e),t.include(T.a,e),t.fragment.include(j.a),t.include(_.a,e),F.add(A.a`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?A.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:A.a`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===e.normalType?A.a`
        vec3 normal = screenDerivativeNormal(localvpos);`:A.a`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?A.a`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:A.a`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${e.hasNormalTexture?A.a`
              mat3 tangentSpace = ${e.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?A.a`vec3 normalGround = normalize(vpos + localOrigin);`:A.a`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:A.a``}
        ${1===e.pbrMode||2===e.pbrMode?A.a`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(p.a,e),t}var I=Object.freeze({__proto__:null,build:F})},907:function(e,t,r){"use strict";r.d(t,"a",(function(){return j})),r.d(t,"b",(function(){return C}));var i=r(564),n=r(804),a=r(256),o=r(376),s=r(726),c=r(665),l=r(689),u=r(817),d=r(662),f=r(515),h=r(626),m=r(805),p=r(311),v=r(663),g=r(734),b=r(278),x=r(578),O=r(727),_=r(466),T=r(497),y=r(331),w=r(806),M=r(113),S=r(271);function C(e){const t=new S.a,r=t.vertex.code,C=t.fragment.code;return t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(l.a),t.varyings.add("vpos","vec3"),t.include(T.a,e),t.include(s.a,e),t.include(h.a,e),0!==e.output&&7!==e.output||(t.include(c.a,e),t.include(o.a,{linearDepth:!1}),e.offsetBackfaces&&t.include(n.a),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.include(d.a,e),t.include(i.a,e),t.include(u.a,e),t.include(f.a,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),r.add(M.a`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${M.a.float(y.c)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
          }
          ${e.multipassTerrainEnabled?M.a`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===e.output&&(t.include(a.a,e),t.include(y.a,e),e.multipassTerrainEnabled&&(t.fragment.include(p.a),t.include(b.b,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(w.a),C.add(M.a`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?M.a`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?M.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:M.a`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?M.a`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:M.a`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(a.a,e),t.include(g.a,e),t.include(v.a,e),t.include(y.a,e),e.receiveShadows&&t.include(_.a,e),e.multipassTerrainEnabled&&(t.fragment.include(p.a),t.include(b.b,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(O.a,e),t.include(x.a,e),t.fragment.include(w.a),C.add(M.a`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?M.a`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?M.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:M.a`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?M.a`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:M.a`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${M.a`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?M.a`vec3 normalGround = normalize(vpos + localOrigin);`:M.a`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:M.a``}
        ${1===e.pbrMode||2===e.pbrMode?M.a`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(m.a,e),t}var j=Object.freeze({__proto__:null,build:C})},949:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(662),n=r(113);function a(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(n.a`#ifndef GL_EXT_shader_texture_lod
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
}`)}function o(e,t){e.include(i.a,t),e.fragment.code.add(n.a`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===t.attributeTextureCoordinates&&e.fragment.code.add(n.a`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),2===t.attributeTextureCoordinates&&(e.include(a),e.fragment.code.add(n.a`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`))}},985:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(949),n=r(113);function a(e,t){const r=e.fragment;t.vertexTangents?(e.attributes.add("tangent","vec4"),e.varyings.add("vTangent","vec4"),2===t.doubleSidedMode?r.code.add(n.a`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(n.a`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),r.code.add(n.a`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),0!==t.attributeTextureCoordinates&&(e.include(i.a,t),r.uniforms.add("normalTexture","sampler2D"),r.uniforms.add("normalTextureSize","vec2"),r.code.add(n.a`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}},986:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(113),n=r(195);function a(e,t){const r=i.a`
  /*
  *  ${t.name}
  *  ${0===t.output?"RenderOutput: Color":1===t.output?"RenderOutput: Depth":3===t.output?"RenderOutput: Shadow":2===t.output?"RenderOutput: Normal":4===t.output?"RenderOutput: Highlight":""}
  */
  `;Object(n.c)()&&(e.fragment.code.add(r),e.vertex.code.add(r))}}}]);
//# sourceMappingURL=94.5463c796.chunk.js.map