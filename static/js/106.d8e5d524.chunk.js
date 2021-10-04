(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[106],{1014:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(984),o=r(124);function n(e,t){const r=e.fragment;t.vertexTangents?(e.attributes.add("tangent","vec4"),e.varyings.add("vTangent","vec4"),2===t.doubleSidedMode?r.code.add(o.a`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(o.a`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),r.code.add(o.a`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`)),0!==t.attributeTextureCoordinates&&(e.include(a.a,t),r.uniforms.add("normalTexture","sampler2D"),r.uniforms.add("normalTextureSize","vec2"),r.code.add(o.a`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}},1015:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(124),o=r(217);function n(e,t){const r=a.a`
  /*
  *  ${t.name}
  *  ${0===t.output?"RenderOutput: Color":1===t.output?"RenderOutput: Depth":3===t.output?"RenderOutput: Shadow":2===t.output?"RenderOutput: Normal":4===t.output?"RenderOutput: Highlight":""}
  */
  `;Object(o.c)()&&(e.fragment.code.add(r),e.vertex.code.add(r))}},1111:function(e,t,r){"use strict";r.r(t),r.d(t,"fetch",(function(){return k})),r.d(t,"gltfToEngineResources",(function(){return q})),r.d(t,"parseUrl",(function(){return G}));var a=r(285),o=r(85),n=r(290),i=r(311),s=r(138),c=r(165),l=r(111),u=r(105),d=r(215),m=r(378),f=r(674),v=r(1016),p=r(1039),h=r(1017),b=r(1035),g=r(1018),x=r(101),O=r(266),M=r(88),y=r(80),T=r(91),C=r(627),w=r(930),_=r(466),A=r(815),S=r(739);const P=y.a.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function E(e,t){const r=await async function(e,t){const r=Object(o.k)(t)&&t.streamDataRequester;if(r)return async function(e,t,r){const a=await Object(O.c)(t.request(e,"json",r));if(!0===a.ok)return a.value;Object(T.u)(a.error),j(a.error.details.url)}(e,r,t);const a=await Object(O.c)(Object(x.default)(e,Object(o.s)(t)));if(!0===a.ok)return a.value.data;Object(T.u)(a.error),j(a.error)}(e,t);return{resource:r,textures:await L(r.textureDefinitions,t)}}function j(e){throw new M.a("",`Request for object resource failed: ${e}`)}function F(e){const t=e.params,r=t.topology;let a=!0;switch(t.vertexAttributes||(P.warn("Geometry must specify vertex attributes"),a=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(P.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),a=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(P.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),a=!1)):(P.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),a=!1)}}else P.warn("Indexed geometries must specify faces"),a=!1;break}default:P.warn(`Unsupported topology '${r}'`),a=!1}e.params.material||(P.warn("Geometry requires material"),a=!1);const o=e.params.vertexAttributes;for(const n in o)o[n].values||(P.warn("Geometries with externally defined attributes are not yet supported"),a=!1);return a}function R(e){const t=Object(d.h)();return e.forEach((e=>{const r=e.boundingInfo;Object(o.k)(r)&&(Object(d.n)(t,r.getBBMin()),Object(d.n)(t,r.getBBMax()))})),t}async function L(e,t){const r=[];for(const i in e){const a=e[i],n=a.images[0].data;if(!n){P.warn("Externally referenced texture data is not yet supported");continue}const s=a.encoding+";base64,"+n,c="/textureDefinitions/"+i,l="rgba"===a.channels?a.alphaChannelUsage||"transparency":"none",u={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:1!==B(l)},d=Object(o.k)(t)&&t.disableTextures?Promise.resolve(null):Object(w.a)(s,t);r.push(d.then((e=>({refId:c,image:e,params:u,alphaChannelUsage:l}))))}const a=await Promise.all(r),n={};for(const o of a)n[o.refId]=o;return n}function B(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;default:return 0}}function D(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const I=new C.a(1,2,"wosr");var N=r(1019),z=r(811),V=r(812),U=r(758);async function k(e,t){const r=G(Object(a.a)(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):E(r.url,t)),a=function(e,t){const r=[],a=[],n=[],i=[],s=e.resource,c=C.a.parse(s.version||"1.0","wosr");I.validate(c);const l=s.model.name,d=s.model.geometries,m=s.materialDefinitions,f=e.textures;let v=0;const p=new Map;for(let h=0;h<d.length;h++){const e=d[h];if(!F(e))continue;const s=D(e),c=e.params.vertexAttributes,l=[];for(const t in c){const e=c[t],r=e.values;l.push([t,{data:r,size:e.valuesPerElement,exclusive:!0}])}const b=[];if("PerAttributeArray"!==e.params.topology){const t=e.params.faces;for(const e in t)b.push([e,new Uint32Array(t[e].values)])}const g=f&&f[s.texture];if(g&&!p.has(s.texture)){const{image:e,params:t}=g,r=new A.a(e,t);i.push(r),p.set(s.texture,r)}const x=p.get(s.texture),O=x?x.id:void 0;let M=n[s.material]?n[s.material][s.texture]:null;if(!M){const e=m[s.material.substring(s.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=g&&g.alphaChannelUsage,a=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,i=g?B(g.alphaChannelUsage):void 0,c={ambient:Object(u.f)(e.diffuse),diffuse:Object(u.f)(e.diffuse),opacity:1-(e.transparency||0),transparent:a,textureAlphaMode:i,textureAlphaCutoff:.33,textureId:O,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!g&&!!g.params.preMultiplyAlpha};Object(o.k)(t)&&t.materialParamsMixin&&Object.assign(c,t.materialParamsMixin),M=new S.a(c),n[s.material]||(n[s.material]={}),n[s.material][s.texture]=M}a.push(M);const y=new _.a(l,b);v+=b.position?b.position.length:0,r.push(y)}return{name:l,stageResources:{textures:i,materials:a,geometries:r},pivotOffset:s.model.pivotOffset,boundingBox:R(r),numberOfVertices:v,lodThreshold:null}}(e,t);return{lods:[a],referenceBoundingBox:a.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const n=await(t.cache?t.cache.loadGLTF(r.url,t,t.usePBR):Object(b.a)(new h.a(t.streamDataRequester),r.url,t,t.usePBR)),i=Object(o.i)(n.model.meta,"ESRI_proxyEllipsoid");n.meta.isEsriSymbolResource&&Object(o.k)(i)&&-1!==n.meta.uri.indexOf("/RealisticTrees/")&&function(e,t){for(let r=0;r<e.model.lods.length;++r){const a=e.model.lods[r];e.customMeta.esriTreeRendering=!0;for(const n of a.parts){const a=n.attributes.normal;if(Object(o.j)(a))return;const i=n.attributes.position,d=i.count,f=Object(u.e)(),v=Object(u.e)(),h=Object(u.e)(),b=Object(p.a)(m.J,d),g=Object(p.a)(m.u,d),x=Object(s.c)(Object(c.d)(),n.transform);for(let o=0;o<d;o++){i.getVec(o,v),a.getVec(o,f),Object(l.q)(v,v,n.transform),Object(l.j)(h,v,t.center),Object(l.b)(h,h,t.radius);const s=h[2],c=Object(l.p)(h),u=Math.min(.45+.55*c*c,1);Object(l.b)(h,h,t.radius),Object(l.q)(h,h,x),Object(l.r)(h,h),r+1!==e.model.lods.length&&e.model.lods.length>1&&Object(l.i)(h,h,f,s>-1?.2:Math.min(-4*s-3.8,1)),g.setVec(o,h),b.set(o,0,255*u),b.set(o,1,255*u),b.set(o,2,255*u),b.set(o,3,255)}n.attributes.normal=g,n.attributes.color=b}}}(n,i);const d=n.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:n.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:t.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},f={...t.materialParamsMixin,treeRendering:n.customMeta.esriTreeRendering};if(null!=r.specifiedLodIndex){const e=q(n,d,f,r.specifiedLodIndex);let t=e[0].boundingBox;return 0!==r.specifiedLodIndex&&(t=q(n,d,f,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:n.meta.isEsriSymbolResource,isWosr:!1,remove:n.remove}}const v=q(n,d,f);return{lods:v,referenceBoundingBox:v[0].boundingBox,isEsriSymbolResource:n.meta.isEsriSymbolResource,isWosr:!1,remove:n.remove}}function G(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function q(e,t,r,a){const s=e.model,c=Object(i.b)(),l=new Array,u=new Map,h=new Map;return s.lods.forEach(((e,i)=>{if(void 0!==a&&i!==a)return;const b={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:Object(o.k)(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:Object(d.h)()};l.push(b),e.parts.forEach((e=>{const a=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),i=s.materials.get(e.material),l=Object(o.k)(e.attributes.texCoord0),x=Object(o.k)(e.attributes.normal),O=function(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":case null:case void 0:return 1}}(i.alphaMode);if(!u.has(a)){if(l){if(Object(o.k)(i.textureColor)&&!h.has(i.textureColor)){const e=s.textures.get(i.textureColor),t={...e.parameters,preMultiplyAlpha:1!==O};h.set(i.textureColor,new A.a(e.data,t))}if(Object(o.k)(i.textureNormal)&&!h.has(i.textureNormal)){const e=s.textures.get(i.textureNormal);h.set(i.textureNormal,new A.a(e.data,e.parameters))}if(Object(o.k)(i.textureOcclusion)&&!h.has(i.textureOcclusion)){const e=s.textures.get(i.textureOcclusion);h.set(i.textureOcclusion,new A.a(e.data,e.parameters))}if(Object(o.k)(i.textureEmissive)&&!h.has(i.textureEmissive)){const e=s.textures.get(i.textureEmissive);h.set(i.textureEmissive,new A.a(e.data,e.parameters))}if(Object(o.k)(i.textureMetallicRoughness)&&!h.has(i.textureMetallicRoughness)){const e=s.textures.get(i.textureMetallicRoughness);h.set(i.textureMetallicRoughness,new A.a(e.data,e.parameters))}}const n=i.color[0]**(1/N.a),c=i.color[1]**(1/N.a),d=i.color[2]**(1/N.a),m=i.emissiveFactor[0]**(1/N.a),f=i.emissiveFactor[1]**(1/N.a),v=i.emissiveFactor[2]**(1/N.a),p=Object(o.k)(i.textureColor)&&l?h.get(i.textureColor):null;u.set(a,new S.a({...t,transparent:0===O,textureAlphaMode:O,textureAlphaCutoff:i.alphaCutoff,diffuse:[n,c,d],ambient:[n,c,d],opacity:i.opacity,doubleSided:i.doubleSided,doubleSidedType:"winding-order",cullFace:i.doubleSided?0:2,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:x?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:Object(o.k)(p)?p.id:void 0,colorMixMode:i.colorMixMode,normalTextureId:Object(o.k)(i.textureNormal)&&l?h.get(i.textureNormal).id:void 0,textureAlphaPremultiplied:Object(o.k)(p)&&!!p.params.preMultiplyAlpha,occlusionTextureId:Object(o.k)(i.textureOcclusion)&&l?h.get(i.textureOcclusion).id:void 0,emissiveTextureId:Object(o.k)(i.textureEmissive)&&l?h.get(i.textureEmissive).id:void 0,metallicRoughnessTextureId:Object(o.k)(i.textureMetallicRoughness)&&l?h.get(i.textureMetallicRoughness).id:void 0,emissiveFactor:[m,f,v],mrrFactors:[i.metallicFactor,i.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...r}))}const M=function(e,t){switch(t){case 4:return Object(g.c)(e);case 5:return Object(g.b)(e);case 6:return Object(g.a)(e)}}(e.indices||e.attributes.position.count,e.primitiveType),y=e.attributes.position.count,T=Object(p.a)(m.u,y);Object(f.e)(T,e.attributes.position,e.transform);const C=[["position",{data:T.typedBuffer,size:T.elementCount,exclusive:!0}]],w=[["position",M]];if(Object(o.k)(e.attributes.normal)){const t=Object(p.a)(m.u,y);Object(n.a)(c,e.transform),Object(f.a)(t,e.attributes.normal,c),C.push(["normal",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),w.push(["normal",M])}if(Object(o.k)(e.attributes.tangent)){const t=Object(p.a)(m.C,y);Object(n.a)(c,e.transform),Object(v.c)(t,e.attributes.tangent,c),C.push(["tangent",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),w.push(["tangent",M])}if(Object(o.k)(e.attributes.texCoord0)){const t=Object(p.a)(m.m,y);Object(z.b)(t,e.attributes.texCoord0),C.push(["uv0",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),w.push(["uv0",M])}if(Object(o.k)(e.attributes.color)){const t=Object(p.a)(m.J,y);if(4===e.attributes.color.elementCount)e.attributes.color instanceof m.C?Object(v.b)(t,e.attributes.color,255):e.attributes.color instanceof m.J?Object(V.a)(t,e.attributes.color):e.attributes.color instanceof m.H&&Object(v.b)(t,e.attributes.color,1/256);else{Object(V.b)(t,255,255,255,255);const r=new m.B(t.buffer,0,4);e.attributes.color instanceof m.u?Object(f.d)(r,e.attributes.color,255):e.attributes.color instanceof m.B?Object(U.a)(r,e.attributes.color):e.attributes.color instanceof m.z&&Object(f.d)(r,e.attributes.color,1/256)}C.push(["color",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),w.push(["color",M])}const P=new _.a(C,w);b.stageResources.geometries.push(P),b.stageResources.materials.push(u.get(a)),l&&(Object(o.k)(i.textureColor)&&b.stageResources.textures.push(h.get(i.textureColor)),Object(o.k)(i.textureNormal)&&b.stageResources.textures.push(h.get(i.textureNormal)),Object(o.k)(i.textureOcclusion)&&b.stageResources.textures.push(h.get(i.textureOcclusion)),Object(o.k)(i.textureEmissive)&&b.stageResources.textures.push(h.get(i.textureEmissive)),Object(o.k)(i.textureMetallicRoughness)&&b.stageResources.textures.push(h.get(i.textureMetallicRoughness))),b.numberOfVertices+=y;const E=P.boundingInfo;Object(o.k)(E)&&(Object(d.n)(b.boundingBox,E.getBBMin()),Object(d.n)(b.boundingBox,E.getBBMax()))}))})),l}},136:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m})),r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return v})),r.d(t,"e",(function(){return P})),r.d(t,"f",(function(){return x})),r.d(t,"g",(function(){return M})),r.d(t,"h",(function(){return O})),r.d(t,"i",(function(){return i})),r.d(t,"j",(function(){return p})),r.d(t,"k",(function(){return _})),r.d(t,"l",(function(){return h})),r.d(t,"m",(function(){return y})),r.d(t,"n",(function(){return g})),r.d(t,"o",(function(){return T})),r.d(t,"p",(function(){return A})),r.d(t,"q",(function(){return b})),r.d(t,"r",(function(){return w})),r.d(t,"s",(function(){return n})),r.d(t,"t",(function(){return C})),r.d(t,"u",(function(){return f})),r.d(t,"v",(function(){return u})),r.d(t,"w",(function(){return d}));var a=r(195);function o(e,t){return e[0]=t[0],e[1]=t[1],e}function n(e,t,r){return e[0]=t,e[1]=r,e}function i(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e}function s(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e}function c(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e}function l(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e}function u(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e}function d(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e}function m(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e}function f(e,t,r,a){return e[0]=t[0]+r[0]*a,e[1]=t[1]+r[1]*a,e}function v(e,t){const r=t[0]-e[0],a=t[1]-e[1];return Math.sqrt(r*r+a*a)}function p(e,t){const r=t[0]-e[0],a=t[1]-e[1];return r*r+a*a}function h(e){const t=e[0],r=e[1];return Math.sqrt(t*t+r*r)}function b(e){const t=e[0],r=e[1];return t*t+r*r}function g(e,t){return e[0]=-t[0],e[1]=-t[1],e}function x(e,t){const r=t[0],a=t[1];let o=r*r+a*a;return o>0&&(o=1/Math.sqrt(o),e[0]=t[0]*o,e[1]=t[1]*o),e}function O(e,t){return e[0]*t[0]+e[1]*t[1]}function M(e,t,r){const a=t[0]*r[1]-t[1]*r[0];return e[0]=e[1]=0,e[2]=a,e}function y(e,t,r,a){const o=t[0],n=t[1];return e[0]=o+a*(r[0]-o),e[1]=n+a*(r[1]-n),e}function T(e,t,r){const a=t[0],o=t[1];return e[0]=r[0]*a+r[2]*o,e[1]=r[1]*a+r[3]*o,e}function C(e,t,r){const a=t[0],o=t[1];return e[0]=r[0]*a+r[2]*o+r[4],e[1]=r[1]*a+r[3]*o+r[5],e}function w(e,t,r,a){const o=t[0]-r[0],n=t[1]-r[1],i=Math.sin(a),s=Math.cos(a);return e[0]=o*s-n*i+r[0],e[1]=o*i+n*s+r[1],e}function _(e,t){return e[0]===t[0]&&e[1]===t[1]}function A(e,t,r,a,o){let n=t[0]-r[0],i=t[1]-r[1];const s=(a[0]*n+a[1]*i)*(o-1);return n=a[0]*s,i=a[1]*s,e[0]=t[0]+n,e[1]=t[1]+i,e}const S=h,P=s,E=c,j=l,F=v,R=p,L=b;Object.freeze({__proto__:null,copy:o,set:n,add:i,subtract:s,multiply:c,divide:l,ceil:function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e},floor:function(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e},min:u,max:d,round:function(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e},scale:m,scaleAndAdd:f,distance:v,squaredDistance:p,length:h,squaredLength:b,negate:g,inverse:function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e},normalize:x,dot:O,cross:M,lerp:y,random:function(e,t){t=t||1;const r=2*Object(a.b)()*Math.PI;return e[0]=Math.cos(r)*t,e[1]=Math.sin(r)*t,e},transformMat2:T,transformMat2d:C,transformMat3:function(e,t,r){const a=t[0],o=t[1];return e[0]=r[0]*a+r[3]*o+r[6],e[1]=r[1]*a+r[4]*o+r[7],e},transformMat4:function(e,t,r){const a=t[0],o=t[1];return e[0]=r[0]*a+r[4]*o+r[12],e[1]=r[1]*a+r[5]*o+r[13],e},rotate:w,angle:function(e,t){const r=e[0],a=e[1],o=t[0],n=t[1];let i=r*r+a*a;i>0&&(i=1/Math.sqrt(i));let s=o*o+n*n;s>0&&(s=1/Math.sqrt(s));const c=(r*o+a*n)*i*s;return c>1?0:c<-1?Math.PI:Math.acos(c)},str:function(e){return"vec2("+e[0]+", "+e[1]+")"},exactEquals:_,equals:function(e,t){const r=e[0],o=e[1],n=t[0],i=t[1];return Math.abs(r-n)<=a.a*Math.max(1,Math.abs(r),Math.abs(n))&&Math.abs(o-i)<=a.a*Math.max(1,Math.abs(o),Math.abs(i))},projectAndScale:A,len:S,sub:P,mul:E,div:j,dist:F,sqrDist:R,sqrLen:L})},138:function(e,t,r){"use strict";r.d(t,"a",(function(){return O})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return v})),r.d(t,"e",(function(){return f})),r.d(t,"f",(function(){return n})),r.d(t,"g",(function(){return m})),r.d(t,"h",(function(){return E})),r.d(t,"i",(function(){return P})),r.d(t,"j",(function(){return s})),r.d(t,"k",(function(){return p})),r.d(t,"l",(function(){return w})),r.d(t,"m",(function(){return A})),r.d(t,"n",(function(){return u})),r.d(t,"o",(function(){return x})),r.d(t,"p",(function(){return _})),r.d(t,"q",(function(){return j})),r.d(t,"r",(function(){return h})),r.d(t,"s",(function(){return i})),r.d(t,"t",(function(){return d})),r.d(t,"u",(function(){return b})),r.d(t,"v",(function(){return T})),r.d(t,"w",(function(){return g})),r.d(t,"x",(function(){return C}));var a=r(105),o=r(195);function n(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function i(e,t,r,a,o,n,i,s,c,l,u,d,m,f,v,p,h){return e[0]=t,e[1]=r,e[2]=a,e[3]=o,e[4]=n,e[5]=i,e[6]=s,e[7]=c,e[8]=l,e[9]=u,e[10]=d,e[11]=m,e[12]=f,e[13]=v,e[14]=p,e[15]=h,e}function s(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function c(e,t){if(e===t){const r=t[1],a=t[2],o=t[3],n=t[6],i=t[7],s=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=r,e[6]=t[9],e[7]=t[13],e[8]=a,e[9]=n,e[11]=t[14],e[12]=o,e[13]=i,e[14]=s}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}function l(e,t){const r=t[0],a=t[1],o=t[2],n=t[3],i=t[4],s=t[5],c=t[6],l=t[7],u=t[8],d=t[9],m=t[10],f=t[11],v=t[12],p=t[13],h=t[14],b=t[15],g=r*s-a*i,x=r*c-o*i,O=r*l-n*i,M=a*c-o*s,y=a*l-n*s,T=o*l-n*c,C=u*p-d*v,w=u*h-m*v,_=u*b-f*v,A=d*h-m*p,S=d*b-f*p,P=m*b-f*h;let E=g*P-x*S+O*A+M*_-y*w+T*C;return E?(E=1/E,e[0]=(s*P-c*S+l*A)*E,e[1]=(o*S-a*P-n*A)*E,e[2]=(p*T-h*y+b*M)*E,e[3]=(m*y-d*T-f*M)*E,e[4]=(c*_-i*P-l*w)*E,e[5]=(r*P-o*_+n*w)*E,e[6]=(h*O-v*T-b*x)*E,e[7]=(u*T-m*O+f*x)*E,e[8]=(i*S-s*_+l*C)*E,e[9]=(a*_-r*S-n*C)*E,e[10]=(v*y-p*O+b*g)*E,e[11]=(d*O-u*y-f*g)*E,e[12]=(s*w-i*A-c*C)*E,e[13]=(r*A-a*w+o*C)*E,e[14]=(p*x-v*M-h*g)*E,e[15]=(u*M-d*x+m*g)*E,e):null}function u(e,t,r){const a=t[0],o=t[1],n=t[2],i=t[3],s=t[4],c=t[5],l=t[6],u=t[7],d=t[8],m=t[9],f=t[10],v=t[11],p=t[12],h=t[13],b=t[14],g=t[15];let x=r[0],O=r[1],M=r[2],y=r[3];return e[0]=x*a+O*s+M*d+y*p,e[1]=x*o+O*c+M*m+y*h,e[2]=x*n+O*l+M*f+y*b,e[3]=x*i+O*u+M*v+y*g,x=r[4],O=r[5],M=r[6],y=r[7],e[4]=x*a+O*s+M*d+y*p,e[5]=x*o+O*c+M*m+y*h,e[6]=x*n+O*l+M*f+y*b,e[7]=x*i+O*u+M*v+y*g,x=r[8],O=r[9],M=r[10],y=r[11],e[8]=x*a+O*s+M*d+y*p,e[9]=x*o+O*c+M*m+y*h,e[10]=x*n+O*l+M*f+y*b,e[11]=x*i+O*u+M*v+y*g,x=r[12],O=r[13],M=r[14],y=r[15],e[12]=x*a+O*s+M*d+y*p,e[13]=x*o+O*c+M*m+y*h,e[14]=x*n+O*l+M*f+y*b,e[15]=x*i+O*u+M*v+y*g,e}function d(e,t,r){const a=r[0],o=r[1],n=r[2];let i,s,c,l,u,d,m,f,v,p,h,b;return t===e?(e[12]=t[0]*a+t[4]*o+t[8]*n+t[12],e[13]=t[1]*a+t[5]*o+t[9]*n+t[13],e[14]=t[2]*a+t[6]*o+t[10]*n+t[14],e[15]=t[3]*a+t[7]*o+t[11]*n+t[15]):(i=t[0],s=t[1],c=t[2],l=t[3],u=t[4],d=t[5],m=t[6],f=t[7],v=t[8],p=t[9],h=t[10],b=t[11],e[0]=i,e[1]=s,e[2]=c,e[3]=l,e[4]=u,e[5]=d,e[6]=m,e[7]=f,e[8]=v,e[9]=p,e[10]=h,e[11]=b,e[12]=i*a+u*o+v*n+t[12],e[13]=s*a+d*o+p*n+t[13],e[14]=c*a+m*o+h*n+t[14],e[15]=l*a+f*o+b*n+t[15]),e}function m(e,t,r){const a=r[0],o=r[1],n=r[2];return e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a,e[3]=t[3]*a,e[4]=t[4]*o,e[5]=t[5]*o,e[6]=t[6]*o,e[7]=t[7]*o,e[8]=t[8]*n,e[9]=t[9]*n,e[10]=t[10]*n,e[11]=t[11]*n,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function f(e,t,r,a){let n,i,s,c,l,u,d,m,f,v,p,h,b,g,x,O,M,y,T,C,w,_,A,S,P=a[0],E=a[1],j=a[2],F=Math.sqrt(P*P+E*E+j*j);return F<o.a?null:(F=1/F,P*=F,E*=F,j*=F,n=Math.sin(r),i=Math.cos(r),s=1-i,c=t[0],l=t[1],u=t[2],d=t[3],m=t[4],f=t[5],v=t[6],p=t[7],h=t[8],b=t[9],g=t[10],x=t[11],O=P*P*s+i,M=E*P*s+j*n,y=j*P*s-E*n,T=P*E*s-j*n,C=E*E*s+i,w=j*E*s+P*n,_=P*j*s+E*n,A=E*j*s-P*n,S=j*j*s+i,e[0]=c*O+m*M+h*y,e[1]=l*O+f*M+b*y,e[2]=u*O+v*M+g*y,e[3]=d*O+p*M+x*y,e[4]=c*T+m*C+h*w,e[5]=l*T+f*C+b*w,e[6]=u*T+v*C+g*w,e[7]=d*T+p*C+x*w,e[8]=c*_+m*A+h*S,e[9]=l*_+f*A+b*S,e[10]=u*_+v*A+g*S,e[11]=d*_+p*A+x*S,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}function v(e,t,r){const a=Math.sin(r),o=Math.cos(r),n=t[4],i=t[5],s=t[6],c=t[7],l=t[8],u=t[9],d=t[10],m=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=n*o+l*a,e[5]=i*o+u*a,e[6]=s*o+d*a,e[7]=c*o+m*a,e[8]=l*o-n*a,e[9]=u*o-i*a,e[10]=d*o-s*a,e[11]=m*o-c*a,e}function p(e,t,r){const a=Math.sin(r),o=Math.cos(r),n=t[0],i=t[1],s=t[2],c=t[3],l=t[8],u=t[9],d=t[10],m=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=n*o-l*a,e[1]=i*o-u*a,e[2]=s*o-d*a,e[3]=c*o-m*a,e[8]=n*a+l*o,e[9]=i*a+u*o,e[10]=s*a+d*o,e[11]=c*a+m*o,e}function h(e,t,r){const a=Math.sin(r),o=Math.cos(r),n=t[0],i=t[1],s=t[2],c=t[3],l=t[4],u=t[5],d=t[6],m=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=n*o+l*a,e[1]=i*o+u*a,e[2]=s*o+d*a,e[3]=c*o+m*a,e[4]=l*o-n*a,e[5]=u*o-i*a,e[6]=d*o-s*a,e[7]=m*o-c*a,e}function b(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}function g(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function x(e,t){const r=Math.sin(t),a=Math.cos(t);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=r,e[7]=0,e[8]=0,e[9]=-r,e[10]=a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function O(e,t){const r=Math.sin(t),a=Math.cos(t);return e[0]=a,e[1]=r,e[2]=0,e[3]=0,e[4]=-r,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function M(e,t,r){const a=t[0],o=t[1],n=t[2],i=t[3],s=a+a,c=o+o,l=n+n,u=a*s,d=a*c,m=a*l,f=o*c,v=o*l,p=n*l,h=i*s,b=i*c,g=i*l;return e[0]=1-(f+p),e[1]=d+g,e[2]=m-b,e[3]=0,e[4]=d-g,e[5]=1-(u+p),e[6]=v+h,e[7]=0,e[8]=m+b,e[9]=v-h,e[10]=1-(u+f),e[11]=0,e[12]=r[0],e[13]=r[1],e[14]=r[2],e[15]=1,e}const y=Object(a.e)();function T(e,t){return e[0]=t[12],e[1]=t[13],e[2]=t[14],e}function C(e,t){const r=t[0],a=t[1],o=t[2],n=t[3],i=r+r,s=a+a,c=o+o,l=r*i,u=a*i,d=a*s,m=o*i,f=o*s,v=o*c,p=n*i,h=n*s,b=n*c;return e[0]=1-d-v,e[1]=u+b,e[2]=m-h,e[3]=0,e[4]=u-b,e[5]=1-l-v,e[6]=f+p,e[7]=0,e[8]=m+h,e[9]=f-p,e[10]=1-l-d,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function w(e,t,r,a,o,n,i){const s=1/(r-t),c=1/(o-a),l=1/(n-i);return e[0]=2*n*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=2*n*c,e[6]=0,e[7]=0,e[8]=(r+t)*s,e[9]=(o+a)*c,e[10]=(i+n)*l,e[11]=-1,e[12]=0,e[13]=0,e[14]=i*n*2*l,e[15]=0,e}function _(e,t,r,a,o,n,i){const s=1/(t-r),c=1/(a-o),l=1/(n-i);return e[0]=-2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*c,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*l,e[11]=0,e[12]=(t+r)*s,e[13]=(o+a)*c,e[14]=(i+n)*l,e[15]=1,e}function A(e,t,r,a){let n,i,c,l,u,d,m,f,v,p;const h=t[0],b=t[1],g=t[2],x=a[0],O=a[1],M=a[2],y=r[0],T=r[1],C=r[2];return Math.abs(h-y)<o.a&&Math.abs(b-T)<o.a&&Math.abs(g-C)<o.a?s(e):(m=h-y,f=b-T,v=g-C,p=1/Math.sqrt(m*m+f*f+v*v),m*=p,f*=p,v*=p,n=O*v-M*f,i=M*m-x*v,c=x*f-O*m,p=Math.sqrt(n*n+i*i+c*c),p?(p=1/p,n*=p,i*=p,c*=p):(n=0,i=0,c=0),l=f*c-v*i,u=v*n-m*c,d=m*i-f*n,p=Math.sqrt(l*l+u*u+d*d),p?(p=1/p,l*=p,u*=p,d*=p):(l=0,u=0,d=0),e[0]=n,e[1]=l,e[2]=m,e[3]=0,e[4]=i,e[5]=u,e[6]=f,e[7]=0,e[8]=c,e[9]=d,e[10]=v,e[11]=0,e[12]=-(n*h+i*b+c*g),e[13]=-(l*h+u*b+d*g),e[14]=-(m*h+f*b+v*g),e[15]=1,e)}function S(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e[4]=t[4]-r[4],e[5]=t[5]-r[5],e[6]=t[6]-r[6],e[7]=t[7]-r[7],e[8]=t[8]-r[8],e[9]=t[9]-r[9],e[10]=t[10]-r[10],e[11]=t[11]-r[11],e[12]=t[12]-r[12],e[13]=t[13]-r[13],e[14]=t[14]-r[14],e[15]=t[15]-r[15],e}function P(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]&&e[9]===t[9]&&e[10]===t[10]&&e[11]===t[11]&&e[12]===t[12]&&e[13]===t[13]&&e[14]===t[14]&&e[15]===t[15]}function E(e,t){const r=e[0],a=e[1],n=e[2],i=e[3],s=e[4],c=e[5],l=e[6],u=e[7],d=e[8],m=e[9],f=e[10],v=e[11],p=e[12],h=e[13],b=e[14],g=e[15],x=t[0],O=t[1],M=t[2],y=t[3],T=t[4],C=t[5],w=t[6],_=t[7],A=t[8],S=t[9],P=t[10],E=t[11],j=t[12],F=t[13],R=t[14],L=t[15];return Math.abs(r-x)<=o.a*Math.max(1,Math.abs(r),Math.abs(x))&&Math.abs(a-O)<=o.a*Math.max(1,Math.abs(a),Math.abs(O))&&Math.abs(n-M)<=o.a*Math.max(1,Math.abs(n),Math.abs(M))&&Math.abs(i-y)<=o.a*Math.max(1,Math.abs(i),Math.abs(y))&&Math.abs(s-T)<=o.a*Math.max(1,Math.abs(s),Math.abs(T))&&Math.abs(c-C)<=o.a*Math.max(1,Math.abs(c),Math.abs(C))&&Math.abs(l-w)<=o.a*Math.max(1,Math.abs(l),Math.abs(w))&&Math.abs(u-_)<=o.a*Math.max(1,Math.abs(u),Math.abs(_))&&Math.abs(d-A)<=o.a*Math.max(1,Math.abs(d),Math.abs(A))&&Math.abs(m-S)<=o.a*Math.max(1,Math.abs(m),Math.abs(S))&&Math.abs(f-P)<=o.a*Math.max(1,Math.abs(f),Math.abs(P))&&Math.abs(v-E)<=o.a*Math.max(1,Math.abs(v),Math.abs(E))&&Math.abs(p-j)<=o.a*Math.max(1,Math.abs(p),Math.abs(j))&&Math.abs(h-F)<=o.a*Math.max(1,Math.abs(h),Math.abs(F))&&Math.abs(b-R)<=o.a*Math.max(1,Math.abs(b),Math.abs(R))&&Math.abs(g-L)<=o.a*Math.max(1,Math.abs(g),Math.abs(L))}function j(e){const t=o.a,r=e[0],a=e[1],n=e[2],i=e[4],s=e[5],c=e[6],l=e[8],u=e[9],d=e[10];return Math.abs(1-(r*r+i*i+l*l))<=t&&Math.abs(1-(a*a+s*s+u*u))<=t&&Math.abs(1-(n*n+c*c+d*d))<=t}const F=u,R=S;Object.freeze({__proto__:null,copy:n,set:i,identity:s,transpose:c,invert:l,adjoint:function(e,t){const r=t[0],a=t[1],o=t[2],n=t[3],i=t[4],s=t[5],c=t[6],l=t[7],u=t[8],d=t[9],m=t[10],f=t[11],v=t[12],p=t[13],h=t[14],b=t[15];return e[0]=s*(m*b-f*h)-d*(c*b-l*h)+p*(c*f-l*m),e[1]=-(a*(m*b-f*h)-d*(o*b-n*h)+p*(o*f-n*m)),e[2]=a*(c*b-l*h)-s*(o*b-n*h)+p*(o*l-n*c),e[3]=-(a*(c*f-l*m)-s*(o*f-n*m)+d*(o*l-n*c)),e[4]=-(i*(m*b-f*h)-u*(c*b-l*h)+v*(c*f-l*m)),e[5]=r*(m*b-f*h)-u*(o*b-n*h)+v*(o*f-n*m),e[6]=-(r*(c*b-l*h)-i*(o*b-n*h)+v*(o*l-n*c)),e[7]=r*(c*f-l*m)-i*(o*f-n*m)+u*(o*l-n*c),e[8]=i*(d*b-f*p)-u*(s*b-l*p)+v*(s*f-l*d),e[9]=-(r*(d*b-f*p)-u*(a*b-n*p)+v*(a*f-n*d)),e[10]=r*(s*b-l*p)-i*(a*b-n*p)+v*(a*l-n*s),e[11]=-(r*(s*f-l*d)-i*(a*f-n*d)+u*(a*l-n*s)),e[12]=-(i*(d*h-m*p)-u*(s*h-c*p)+v*(s*m-c*d)),e[13]=r*(d*h-m*p)-u*(a*h-o*p)+v*(a*m-o*d),e[14]=-(r*(s*h-c*p)-i*(a*h-o*p)+v*(a*c-o*s)),e[15]=r*(s*m-c*d)-i*(a*m-o*d)+u*(a*c-o*s),e},determinant:function(e){const t=e[0],r=e[1],a=e[2],o=e[3],n=e[4],i=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],m=e[11],f=e[12],v=e[13],p=e[14],h=e[15];return(t*i-r*n)*(d*h-m*p)-(t*s-a*n)*(u*h-m*v)+(t*c-o*n)*(u*p-d*v)+(r*s-a*i)*(l*h-m*f)-(r*c-o*i)*(l*p-d*f)+(a*c-o*s)*(l*v-u*f)},multiply:u,translate:d,scale:m,rotate:f,rotateX:v,rotateY:p,rotateZ:h,fromTranslation:b,fromScaling:g,fromRotation:function(e,t,r){let a,n,i,s=r[0],c=r[1],l=r[2],u=Math.sqrt(s*s+c*c+l*l);return u<o.a?null:(u=1/u,s*=u,c*=u,l*=u,a=Math.sin(t),n=Math.cos(t),i=1-n,e[0]=s*s*i+n,e[1]=c*s*i+l*a,e[2]=l*s*i-c*a,e[3]=0,e[4]=s*c*i-l*a,e[5]=c*c*i+n,e[6]=l*c*i+s*a,e[7]=0,e[8]=s*l*i+c*a,e[9]=c*l*i-s*a,e[10]=l*l*i+n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)},fromXRotation:x,fromYRotation:function(e,t){const r=Math.sin(t),a=Math.cos(t);return e[0]=a,e[1]=0,e[2]=-r,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=r,e[9]=0,e[10]=a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e},fromZRotation:O,fromRotationTranslation:M,fromQuat2:function(e,t){const r=y,a=-t[0],o=-t[1],n=-t[2],i=t[3],s=t[4],c=t[5],l=t[6],u=t[7],d=a*a+o*o+n*n+i*i;return d>0?(r[0]=2*(s*i+u*a+c*n-l*o)/d,r[1]=2*(c*i+u*o+l*a-s*n)/d,r[2]=2*(l*i+u*n+s*o-c*a)/d):(r[0]=2*(s*i+u*a+c*n-l*o),r[1]=2*(c*i+u*o+l*a-s*n),r[2]=2*(l*i+u*n+s*o-c*a)),M(e,t,r),e},getTranslation:T,getScaling:function(e,t){const r=t[0],a=t[1],o=t[2],n=t[4],i=t[5],s=t[6],c=t[8],l=t[9],u=t[10];return e[0]=Math.sqrt(r*r+a*a+o*o),e[1]=Math.sqrt(n*n+i*i+s*s),e[2]=Math.sqrt(c*c+l*l+u*u),e},getRotation:function(e,t){const r=t[0]+t[5]+t[10];let a=0;return r>0?(a=2*Math.sqrt(r+1),e[3]=.25*a,e[0]=(t[6]-t[9])/a,e[1]=(t[8]-t[2])/a,e[2]=(t[1]-t[4])/a):t[0]>t[5]&&t[0]>t[10]?(a=2*Math.sqrt(1+t[0]-t[5]-t[10]),e[3]=(t[6]-t[9])/a,e[0]=.25*a,e[1]=(t[1]+t[4])/a,e[2]=(t[8]+t[2])/a):t[5]>t[10]?(a=2*Math.sqrt(1+t[5]-t[0]-t[10]),e[3]=(t[8]-t[2])/a,e[0]=(t[1]+t[4])/a,e[1]=.25*a,e[2]=(t[6]+t[9])/a):(a=2*Math.sqrt(1+t[10]-t[0]-t[5]),e[3]=(t[1]-t[4])/a,e[0]=(t[8]+t[2])/a,e[1]=(t[6]+t[9])/a,e[2]=.25*a),e},fromRotationTranslationScale:function(e,t,r,a){const o=t[0],n=t[1],i=t[2],s=t[3],c=o+o,l=n+n,u=i+i,d=o*c,m=o*l,f=o*u,v=n*l,p=n*u,h=i*u,b=s*c,g=s*l,x=s*u,O=a[0],M=a[1],y=a[2];return e[0]=(1-(v+h))*O,e[1]=(m+x)*O,e[2]=(f-g)*O,e[3]=0,e[4]=(m-x)*M,e[5]=(1-(d+h))*M,e[6]=(p+b)*M,e[7]=0,e[8]=(f+g)*y,e[9]=(p-b)*y,e[10]=(1-(d+v))*y,e[11]=0,e[12]=r[0],e[13]=r[1],e[14]=r[2],e[15]=1,e},fromRotationTranslationScaleOrigin:function(e,t,r,a,o){const n=t[0],i=t[1],s=t[2],c=t[3],l=n+n,u=i+i,d=s+s,m=n*l,f=n*u,v=n*d,p=i*u,h=i*d,b=s*d,g=c*l,x=c*u,O=c*d,M=a[0],y=a[1],T=a[2],C=o[0],w=o[1],_=o[2],A=(1-(p+b))*M,S=(f+O)*M,P=(v-x)*M,E=(f-O)*y,j=(1-(m+b))*y,F=(h+g)*y,R=(v+x)*T,L=(h-g)*T,B=(1-(m+p))*T;return e[0]=A,e[1]=S,e[2]=P,e[3]=0,e[4]=E,e[5]=j,e[6]=F,e[7]=0,e[8]=R,e[9]=L,e[10]=B,e[11]=0,e[12]=r[0]+C-(A*C+E*w+R*_),e[13]=r[1]+w-(S*C+j*w+L*_),e[14]=r[2]+_-(P*C+F*w+B*_),e[15]=1,e},fromQuat:C,frustum:w,perspective:function(e,t,r,a,o){const n=1/Math.tan(t/2);let i;return e[0]=n/r,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=n,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,null!=o&&o!==1/0?(i=1/(a-o),e[10]=(o+a)*i,e[14]=2*o*a*i):(e[10]=-1,e[14]=-2*a),e},perspectiveFromFieldOfView:function(e,t,r,a){const o=Math.tan(t.upDegrees*Math.PI/180),n=Math.tan(t.downDegrees*Math.PI/180),i=Math.tan(t.leftDegrees*Math.PI/180),s=Math.tan(t.rightDegrees*Math.PI/180),c=2/(i+s),l=2/(o+n);return e[0]=c,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=l,e[6]=0,e[7]=0,e[8]=-(i-s)*c*.5,e[9]=(o-n)*l*.5,e[10]=a/(r-a),e[11]=-1,e[12]=0,e[13]=0,e[14]=a*r/(r-a),e[15]=0,e},ortho:_,lookAt:A,targetTo:function(e,t,r,a){const o=t[0],n=t[1],i=t[2],s=a[0],c=a[1],l=a[2];let u=o-r[0],d=n-r[1],m=i-r[2],f=u*u+d*d+m*m;f>0&&(f=1/Math.sqrt(f),u*=f,d*=f,m*=f);let v=c*m-l*d,p=l*u-s*m,h=s*d-c*u;return f=v*v+p*p+h*h,f>0&&(f=1/Math.sqrt(f),v*=f,p*=f,h*=f),e[0]=v,e[1]=p,e[2]=h,e[3]=0,e[4]=d*h-m*p,e[5]=m*v-u*h,e[6]=u*p-d*v,e[7]=0,e[8]=u,e[9]=d,e[10]=m,e[11]=0,e[12]=o,e[13]=n,e[14]=i,e[15]=1,e},str:function(e){return"mat4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+", "+e[9]+", "+e[10]+", "+e[11]+", "+e[12]+", "+e[13]+", "+e[14]+", "+e[15]+")"},frob:function(e){return Math.sqrt(e[0]**2+e[1]**2+e[2]**2+e[3]**2+e[4]**2+e[5]**2+e[6]**2+e[7]**2+e[8]**2+e[9]**2+e[10]**2+e[11]**2+e[12]**2+e[13]**2+e[14]**2+e[15]**2)},add:function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e[4]=t[4]+r[4],e[5]=t[5]+r[5],e[6]=t[6]+r[6],e[7]=t[7]+r[7],e[8]=t[8]+r[8],e[9]=t[9]+r[9],e[10]=t[10]+r[10],e[11]=t[11]+r[11],e[12]=t[12]+r[12],e[13]=t[13]+r[13],e[14]=t[14]+r[14],e[15]=t[15]+r[15],e},subtract:S,multiplyScalar:function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*r,e[5]=t[5]*r,e[6]=t[6]*r,e[7]=t[7]*r,e[8]=t[8]*r,e[9]=t[9]*r,e[10]=t[10]*r,e[11]=t[11]*r,e[12]=t[12]*r,e[13]=t[13]*r,e[14]=t[14]*r,e[15]=t[15]*r,e},multiplyScalarAndAdd:function(e,t,r,a){return e[0]=t[0]+r[0]*a,e[1]=t[1]+r[1]*a,e[2]=t[2]+r[2]*a,e[3]=t[3]+r[3]*a,e[4]=t[4]+r[4]*a,e[5]=t[5]+r[5]*a,e[6]=t[6]+r[6]*a,e[7]=t[7]+r[7]*a,e[8]=t[8]+r[8]*a,e[9]=t[9]+r[9]*a,e[10]=t[10]+r[10]*a,e[11]=t[11]+r[11]*a,e[12]=t[12]+r[12]*a,e[13]=t[13]+r[13]*a,e[14]=t[14]+r[14]*a,e[15]=t[15]+r[15]*a,e},exactEquals:P,equals:E,isOrthoNormal:j,mul:F,sub:R})},202:function(e,t,r){"use strict";function a(){return[0,0]}function o(e){return[e[0],e[1]]}function n(e,t){return[e,t]}function i(e){const t=[0,0],r=Math.min(2,e.length);for(let a=0;a<r;++a)t[a]=e[a];return t}function s(e,t){return new Float64Array(e,t,2)}function c(){return[0,0]}function l(){return n(1,1)}function u(){return n(1,0)}function d(){return n(0,1)}r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return s})),r.d(t,"d",(function(){return i})),r.d(t,"e",(function(){return n}));const m=[0,0],f=l(),v=u(),p=d();Object.freeze({__proto__:null,create:a,clone:o,fromValues:n,fromArray:i,createView:s,zeros:c,ones:l,unitX:u,unitY:d,ZEROS:m,ONES:f,UNIT_X:v,UNIT_Y:p})},428:function(e,t,r){"use strict";function a(e,t){for(const[r,a]of e)if(t(a,r))return!0;return!1}function o(e,t){for(const[r,a]of e)if(t(a,r))return a;return null}function n(e,t,r){const a=e.get(t);if(void 0!==a)return a;const o=r();return e.set(t,o),o}r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return a}))},706:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var a=r(124);function o(e,t){1===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(a.a`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),2===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add("uvRegion","vec4"),e.varyings.add("vuvRegion","vec4"),e.vertex.code.add(a.a`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),0===t.attributeTextureCoordinates&&e.vertex.code.add(a.a`void forwardTextureCoordinates() {}`)}},707:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var a=r(124);function o(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(a.a`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):r.code.add(a.a`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}},709:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(124);function o(e){const t=a.a`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;e.fragment.code.add(t),e.vertex.code.add(t)}function n(e,t){0===t.normalType&&(e.attributes.add("normal","vec3"),e.vertex.code.add(a.a`vec3 normalModel() {
return normal;
}`)),1===t.normalType&&(e.include(o),e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(a.a`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),3===t.normalType&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(a.a`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}},735:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var a=r(124);function o(e){e.attributes.add("position","vec3"),e.vertex.code.add(a.a`vec3 positionModel() { return position; }`)}},739:function(e,t,r){"use strict";r.d(t,"a",(function(){return N}));var a=r(311),o=r(111),n=r(105),i=r(453),s=r(364),c=r(940),l=r(410),u=r(384),d=r(704),m=r(585),f=r(409),v=r(81),p=r(272),h=r(776),b=r(700),g=r(352),x=r(304),O=r(777),M=r(511),y=r(549),T=r(784),C=r(433),w=r(359),_=r(368),A=r(372),S=r(377),P=r(360),E=r(608),j=r(944),F=r(176);class R extends _.a{initializeProgram(e){const t=R.shader.get(),r=this.configuration,a=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,pbrMode:r.usePBR?r.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:r.hasMetalnessAndRoughnessTexture,hasEmissionTexture:r.hasEmissionTexture,hasOcclusionTexture:r.hasOcclusionTexture,hasNormalTexture:r.hasNormalTexture,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:r.normalsTypeDerivate?3:0,doubleSidedMode:r.doubleSidedMode,vertexTangents:r.vertexTangents,attributeTextureCoordinates:r.hasMetalnessAndRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture||r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:Object(T.b)(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new P.a(e.rctx,a,S.a)}bindPass(e,t){var r,a;Object(C.c)(this.program,t.camera.projectionMatrix);const o=this.configuration.output;(1===this.configuration.output||t.multipassTerrainEnabled||3===o)&&this.program.setUniform2fv("cameraNearFar",t.camera.nearFar),t.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",t.inverseViewport),Object(x.a)(this.program,t)),7===o&&(this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",f.b[e.colorMixMode])),0===o?(t.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",e.ambient),this.program.setUniform3fv("diffuse",e.diffuse),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",f.b[e.colorMixMode]),this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.configuration.usePBR&&Object(O.b)(this.program,e,this.configuration.isSchematic)):4===o&&Object(g.b)(this.program,t),Object(y.c)(this.program,e),Object(b.b)(this.program,e,t),Object(f.a)(e.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==e.textureAlphaMode&&3!==e.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",e.textureAlphaCutoff),null==(r=t.shadowMap)||r.bind(this.program),null==(a=t.ssaoHelper)||a.bind(this.program,t.camera)}bindDraw(e){const t=this.configuration.instancedDoublePrecision?Object(n.g)(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;Object(C.e)(this.program,t,e.camera.viewMatrix),this.program.rebindTextures(),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&Object(C.a)(this.program,t,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&h.a.bindCustomOrigin(this.program,t),Object(p.b)(this.program,this.configuration,e.slicePlane,t),0===this.configuration.output&&Object(M.d)(this.program,e,t)}setPipeline(e,t){const r=this.configuration,a=3===e,o=2===e;return Object(F.f)({blending:0!==r.output&&7!==r.output||!r.transparent?null:a?u.g:Object(u.a)(e),culling:L(r)&&Object(F.b)(r.cullFace),depthTest:{func:Object(u.b)(e)},depthWrite:a||o?r.writeDepth&&F.d:null,colorWrite:F.c,stencilWrite:r.sceneHasOcludees?E.h:null,stencilTest:r.sceneHasOcludees?t?E.d:E.c:null,polygonOffset:a||o?null:Object(u.h)(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e){return e?this._occludeePipelineState:this.pipeline}}function L(e){return e.cullFace?0!==e.cullFace:!e.slicePlaneEnabled&&!e.transparent&&!e.doubleSidedMode}R.shader=new w.a(j.a,(()=>r.e(319).then(r.bind(null,1330))));class B extends A.a{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1}}Object(v.a)([Object(A.b)({count:8})],B.prototype,"output",void 0),Object(v.a)([Object(A.b)({count:4})],B.prototype,"alphaDiscardMode",void 0),Object(v.a)([Object(A.b)({count:3})],B.prototype,"doubleSidedMode",void 0),Object(v.a)([Object(A.b)()],B.prototype,"isSchematic",void 0),Object(v.a)([Object(A.b)()],B.prototype,"vertexColors",void 0),Object(v.a)([Object(A.b)()],B.prototype,"offsetBackfaces",void 0),Object(v.a)([Object(A.b)()],B.prototype,"symbolColors",void 0),Object(v.a)([Object(A.b)()],B.prototype,"vvSize",void 0),Object(v.a)([Object(A.b)()],B.prototype,"vvColor",void 0),Object(v.a)([Object(A.b)()],B.prototype,"verticalOffset",void 0),Object(v.a)([Object(A.b)()],B.prototype,"receiveShadows",void 0),Object(v.a)([Object(A.b)()],B.prototype,"slicePlaneEnabled",void 0),Object(v.a)([Object(A.b)()],B.prototype,"sliceHighlightDisabled",void 0),Object(v.a)([Object(A.b)()],B.prototype,"receiveAmbientOcclusion",void 0),Object(v.a)([Object(A.b)()],B.prototype,"screenSizePerspective",void 0),Object(v.a)([Object(A.b)()],B.prototype,"textureAlphaPremultiplied",void 0),Object(v.a)([Object(A.b)()],B.prototype,"hasColorTexture",void 0),Object(v.a)([Object(A.b)()],B.prototype,"usePBR",void 0),Object(v.a)([Object(A.b)()],B.prototype,"hasMetalnessAndRoughnessTexture",void 0),Object(v.a)([Object(A.b)()],B.prototype,"hasEmissionTexture",void 0),Object(v.a)([Object(A.b)()],B.prototype,"hasOcclusionTexture",void 0),Object(v.a)([Object(A.b)()],B.prototype,"hasNormalTexture",void 0),Object(v.a)([Object(A.b)()],B.prototype,"instanced",void 0),Object(v.a)([Object(A.b)()],B.prototype,"instancedColor",void 0),Object(v.a)([Object(A.b)()],B.prototype,"instancedDoublePrecision",void 0),Object(v.a)([Object(A.b)()],B.prototype,"vertexTangents",void 0),Object(v.a)([Object(A.b)()],B.prototype,"normalsTypeDerivate",void 0),Object(v.a)([Object(A.b)()],B.prototype,"writeDepth",void 0),Object(v.a)([Object(A.b)()],B.prototype,"sceneHasOcludees",void 0),Object(v.a)([Object(A.b)()],B.prototype,"transparent",void 0),Object(v.a)([Object(A.b)()],B.prototype,"enableOffset",void 0),Object(v.a)([Object(A.b)({count:3})],B.prototype,"cullFace",void 0),Object(v.a)([Object(A.b)({count:4})],B.prototype,"transparencyPassType",void 0),Object(v.a)([Object(A.b)()],B.prototype,"multipassTerrainEnabled",void 0),Object(v.a)([Object(A.b)()],B.prototype,"cullAboveGround",void 0);var D=r(945);class I extends R{initializeProgram(e){const t=I.shader.get(),r=this.configuration,a=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,pbrMode:r.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangents:!1,attributeTextureCoordinates:r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:Object(T.b)(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new P.a(e.rctx,a,S.a)}}I.shader=new w.a(D.a,(()=>r.e(315).then(r.bind(null,1331))));class N extends l.a{constructor(e){super(e,V),this.supportsEdges=!0,this.techniqueConfig=new B,this.vertexBufferLayout=N.getVertexBufferLayout(this.params),this.instanceBufferLayout=e.instanced?N.getInstanceBufferLayout(this.params):null}isVisibleInPass(e){return 4!==e&&6!==e&&7!==e||this.params.castShadows}isVisible(){const e=this.params;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,r=e.vertexColors,a=e.symbolColors,o=!!t&&t.indexOf("color")>-1,n=e.vvColorEnabled,i="replace"===e.colorMixMode,s=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0;return r&&(o||n||a)?!!i||s:r?i?c:s:o||n||a?!!i||s:i?c:s}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.params.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.params.textureId,this.techniqueConfig.vertexTangents=this.params.vertexTangents,this.techniqueConfig.instanced=!!this.params.instanced,this.techniqueConfig.instancedDoublePrecision=this.params.instancedDoublePrecision,this.techniqueConfig.vvSize=this.params.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.params.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.params.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.params.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.params.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.params.normals,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees,this.techniqueConfig.cullFace=this.params.slicePlaneEnabled?0:this.params.cullFace,this.techniqueConfig.multipassTerrainEnabled=!!t&&t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=!!t&&t.cullAboveGround,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.params.vertexColors,this.techniqueConfig.symbolColors=this.params.symbolColors,this.params.treeRendering?this.techniqueConfig.doubleSidedMode=2:this.techniqueConfig.doubleSidedMode=this.params.doubleSided&&"normal"===this.params.doubleSidedType?1:this.params.doubleSided&&"winding-order"===this.params.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.params.instanced&&this.params.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.params.receiveShadows&&this.params.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!(!t||!t.ssaoEnabled)&&this.params.receiveSSAO,this.techniqueConfig.vvColor=this.params.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.params.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.params.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.params.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.params.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.params.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.params.transparent||!this.params.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.params.usePBR&&this.params.isSchematic,this.techniqueConfig.transparencyPassType=t?t.transparencyPassType:3,this.techniqueConfig.enableOffset=!t||t.camera.relativeElevation<u.e),this.techniqueConfig}intersect(e,t,r,a,n,i,s){if(null!==this.params.verticalOffset){const e=a.camera;Object(o.w)($,r[12],r[13],r[14]);let t=null;switch(a.viewingMode){case 1:t=Object(o.r)(W,$);break;case 2:t=Object(o.k)(W,q)}let s=0;if(null!==this.params.verticalOffset){const r=Object(o.j)(X,$,e.eye),a=Object(o.p)(r),n=Object(o.e)(r,r,1/a);let i=null;this.params.screenSizePerspective&&(i=Object(o.h)(t,n)),s+=Object(f.i)(e,a,this.params.verticalOffset,i,this.params.screenSizePerspective)}Object(o.e)(t,t,s),Object(o.x)(H,t,a.transform.inverseRotation),n=Object(o.j)(k,n,H),i=Object(o.j)(G,i,H)}Object(f.f)(e,t,a,n,i,Object(d.c)(a.verticalOffset),s)}getGLMaterial(e){if(0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output)return new z(e)}createBufferWriter(){return new U(this.vertexBufferLayout,this.instanceBufferLayout)}static getVertexBufferLayout(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,r=Object(i.a)().vec3f("position").vec3f("normal");return e.vertexTangents&&r.vec4f("tangent"),t&&r.vec2f("uv0"),e.vertexColors&&r.vec4u8("color"),e.symbolColors&&r.vec4u8("symbolColor"),r}static getInstanceBufferLayout(e){let t=Object(i.a)();return t=e.instancedDoublePrecision?t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):t.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f("instanceFeatureAttribute")),t}}class z extends c.a{constructor(e){const t=e.material;super({...e,...t.params}),this.updateParameters()}updateParameters(e){const t=this._material.params;this.updateTexture(t.textureId),this._technique=this._techniqueRep.releaseAndAcquire(t.treeRendering?I:R,this._material.getTechniqueConfig(this._output,e),this._technique)}selectPipelines(){}_updateShadowState(e){e.shadowMappingEnabled!==this._material.params.shadowMappingEnabled&&this._material.setParameterValues({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.params.sceneHasOcludees&&this._material.setParameterValues({sceneHasOcludees:e.hasOccludees})}ensureParameters(e){0!==this._output&&7!==this._output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e){this._technique.bindPass(this._material.params,e),this.bindTextures(this._technique.program)}beginSlot(e){return e===(this._material.params.transparent?this._material.params.writeDepth?5:8:3)||23===e}getPipelineState(e,t){return this._technique.getPipelineState(t)}}const V={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:2,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:Object(a.b)(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:s.b,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,...l.b};class U{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get("position").length}write(e,t,r,a){Object(m.c)(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,r,a)}}const k=Object(n.e)(),G=Object(n.e)(),q=Object(n.g)(0,0,1),W=Object(n.e)(),H=Object(n.e)(),$=Object(n.e)(),X=Object(n.e)()},776:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var a,o=r(105),n=r(784),i=r(124),s=r(766);function c(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),t.instancedDoublePrecision&&(e.vertex.include(n.a,t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const r=[i.a`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,i.a`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?i.a`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,i.a`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,i.a`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,t.vertexTangents?i.a`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:i.a``];e.vertex.code.add(r[0]),e.vertex.code.add(r[1]),e.vertex.code.add(r[2]),2===t.output&&e.vertex.code.add(r[3]),e.vertex.code.add(r[4])}(a=c||(c={})).Uniforms=class{},a.bindCustomOrigin=function(e,t){Object(s.b)(t,l,u,3),e.setUniform3fv("viewOriginHi",l),e.setUniform3fv("viewOriginLo",u)};const l=Object(o.e)(),u=Object(o.e)()},777:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return s}));var a=r(580),o=r(984),n=r(124);Object(a.c)(0,.6,.2);function i(e,t){const r=e.fragment,a=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;1===t.pbrMode&&a&&e.include(o.a,t),2!==t.pbrMode?(0===t.pbrMode&&r.code.add(n.a`float getBakedOcclusion() { return 1.0; }`),1===t.pbrMode&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(n.a`vec3 mrr;
vec3 emission;
float occlusion;`),t.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(n.a`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(n.a`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(n.a`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(n.a`float getBakedOcclusion() { return 1.0; }`),r.code.add(n.a`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${a?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(n.a`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function s(e,t,r=!1){r||(e.setUniform3fv("mrrFactors",t.mrrFactors),e.setUniform3fv("emissionFactor",t.emissiveFactor))}},784:function(e,t,r){"use strict";r.d(t,"a",(function(){return T})),r.d(t,"b",(function(){return C}));var a,o,n,i=r(79),s=r(124),c=r(85),l=r(105),u=r(222),d=r(248),m=r(623),f=(r(223),r(217),r(176)),v=(r(203),r(227)),p=r(766),h=r(263),b=r(384),g={exports:{}};a=g,o=function(){var e=function(e){window.console&&window.console.error?window.console.error(e):function(e){window.console&&window.console.log&&window.console.log(e)}(e)},t={enable:{1:{0:!0}},disable:{1:{0:!0}},getParameter:{1:{0:!0}},drawArrays:{3:{0:!0}},drawElements:{4:{0:!0,2:!0}},createShader:{1:{0:!0}},getShaderParameter:{2:{1:!0}},getProgramParameter:{2:{1:!0}},getShaderPrecisionFormat:{2:{0:!0,1:!0}},getVertexAttrib:{2:{1:!0}},vertexAttribPointer:{6:{2:!0}},bindTexture:{2:{0:!0}},activeTexture:{1:{0:!0}},getTexParameter:{2:{0:!0,1:!0}},texParameterf:{3:{0:!0,1:!0}},texParameteri:{3:{0:!0,1:!0,2:!0}},texImage2D:{9:{0:!0,2:!0,6:!0,7:!0},6:{0:!0,2:!0,3:!0,4:!0}},texSubImage2D:{9:{0:!0,6:!0,7:!0},7:{0:!0,4:!0,5:!0}},copyTexImage2D:{8:{0:!0,2:!0}},copyTexSubImage2D:{8:{0:!0}},generateMipmap:{1:{0:!0}},compressedTexImage2D:{7:{0:!0,2:!0}},compressedTexSubImage2D:{8:{0:!0,6:!0}},bindBuffer:{2:{0:!0}},bufferData:{3:{0:!0,2:!0}},bufferSubData:{3:{0:!0}},getBufferParameter:{2:{0:!0,1:!0}},pixelStorei:{2:{0:!0,1:!0}},readPixels:{7:{4:!0,5:!0}},bindRenderbuffer:{2:{0:!0}},bindFramebuffer:{2:{0:!0}},checkFramebufferStatus:{1:{0:!0}},framebufferRenderbuffer:{4:{0:!0,1:!0,2:!0}},framebufferTexture2D:{5:{0:!0,1:!0,2:!0}},getFramebufferAttachmentParameter:{3:{0:!0,1:!0,2:!0}},getRenderbufferParameter:{2:{0:!0,1:!0}},renderbufferStorage:{4:{0:!0,1:!0}},clear:{1:{0:{enumBitwiseOr:["COLOR_BUFFER_BIT","DEPTH_BUFFER_BIT","STENCIL_BUFFER_BIT"]}}},depthFunc:{1:{0:!0}},blendFunc:{2:{0:!0,1:!0}},blendFuncSeparate:{4:{0:!0,1:!0,2:!0,3:!0}},blendEquation:{1:{0:!0}},blendEquationSeparate:{2:{0:!0,1:!0}},stencilFunc:{3:{0:!0}},stencilFuncSeparate:{4:{0:!0,1:!0}},stencilMaskSeparate:{2:{0:!0}},stencilOp:{3:{0:!0,1:!0,2:!0}},stencilOpSeparate:{4:{0:!0,1:!0,2:!0,3:!0}},cullFace:{1:{0:!0}},frontFace:{1:{0:!0}},drawArraysInstancedANGLE:{4:{0:!0}},drawElementsInstancedANGLE:{5:{0:!0,2:!0}},blendEquationEXT:{1:{0:!0}}},r=null,a=null;function o(e){if(null==r)for(var t in r={},a={},e)"number"==typeof e[t]&&(r[e[t]]=t,a[t]=e[t])}function n(){if(null==r)throw"WebGLDebugUtils.init(ctx) not called"}function i(e){n();var t=r[e];return void 0!==t?"gl."+t:"/*UNKNOWN WebGL ENUM*/ 0x"+e.toString(16)}function s(e,r,o,n){var s;if(void 0!==(s=t[e])&&void 0!==(s=s[r])&&s[o]){if("object"==typeof s[o]&&void 0!==s[o].enumBitwiseOr){for(var c=s[o].enumBitwiseOr,l=0,u=[],d=0;d<c.length;++d){var m=a[c[d]];0!=(n&m)&&(l|=m,u.push(i(m)))}return l===n?u.join(" | "):i(n)}return i(n)}return null===n?"null":void 0===n?"undefined":n.toString()}function c(e,t,r){e.__defineGetter__(r,(function(){return t[r]})),e.__defineSetter__(r,(function(e){t[r]=e}))}function l(e){var t=e.getParameter(e.MAX_VERTEX_ATTRIBS),r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r);for(var a=0;a<t;++a)e.disableVertexAttribArray(a),e.vertexAttribPointer(a,4,e.FLOAT,!1,0,0),e.vertexAttrib1f(a,0);e.deleteBuffer(r);var o=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS);for(a=0;a<o;++a)e.activeTexture(e.TEXTURE0+a),e.bindTexture(e.TEXTURE_CUBE_MAP,null),e.bindTexture(e.TEXTURE_2D,null);for(e.activeTexture(e.TEXTURE0),e.useProgram(null),e.bindBuffer(e.ARRAY_BUFFER,null),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.DITHER),e.disable(e.SCISSOR_TEST),e.blendColor(0,0,0,0),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.clearColor(0,0,0,0),e.clearDepth(1),e.clearStencil(-1),e.colorMask(!0,!0,!0,!0),e.cullFace(e.BACK),e.depthFunc(e.LESS),e.depthMask(!0),e.depthRange(0,1),e.frontFace(e.CCW),e.hint(e.GENERATE_MIPMAP_HINT,e.DONT_CARE),e.lineWidth(1),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.UNPACK_COLORSPACE_CONVERSION_WEBGL&&e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.polygonOffset(0,0),e.sampleCoverage(1,!1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilMask(4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT|e.STENCIL_BUFFER_BIT);e.getError(););}return{init:o,mightBeEnum:function(e){return n(),void 0!==r[e]},glEnumToString:i,glFunctionArgToString:s,glFunctionArgsToString:function(e,t){for(var r="",a=t.length,o=0;o<a;++o)r+=(0==o?"":", ")+s(e,a,o,t[o]);return r},makeDebugContext:function t(r,a,n,l){l=l||r,o(r),a=a||function(t,r,a){for(var o="",n=a.length,c=0;c<n;++c)o+=(0==c?"":", ")+s(r,n,c,a[c]);e("WebGL error "+i(t)+" in "+r+"("+o+")")};var u={};function d(e,t){return function(){n&&n(t,arguments);var r=e[t].apply(e,arguments),o=l.getError();return 0!=o&&(u[o]=!0,a(o,t,arguments)),r}}var m={};for(var f in r)if("function"==typeof r[f])if("getExtension"!=f)m[f]=d(r,f);else{var v=d(r,f);m[f]=function(){return t(v.apply(r,arguments),a,n,l)}}else c(m,r,f);return m.getError=function(){for(var e in u)if(u.hasOwnProperty(e)&&u[e])return u[e]=!1,e;return r.NO_ERROR},m},makeLostContextSimulatingCanvas:function(e){var t,r,a=[],o=[],n={},i=1,s=!1,u=[],d=0,m=0,f=!1,v=0,p={};function h(e){return"function"==typeof e?e:function(t){e.handleEvent(t)}}e.getContext=(r=e.getContext,function(){var a=r.apply(e,arguments);if(a instanceof WebGLRenderingContext){if(a!=t){if(t)throw"got different context";n=y(t=a)}return n}return a});var b=function(e){a.push(h(e))},g=function(e){o.push(h(e))};function x(){++m,s||d==m&&e.loseContext()}function O(e,t){var r=e[t];return function(){if(x(),!s)return r.apply(e,arguments)}}function M(e){return{statusMessage:e,preventDefault:function(){f=!0}}}return function(e){var t=e.addEventListener;e.addEventListener=function(r,a,o){switch(r){case"webglcontextlost":b(a);break;case"webglcontextrestored":g(a);break;default:t.apply(e,arguments)}}}(e),e.loseContext=function(){if(!s){for(s=!0,d=0,++i;t.getError(););(function(){for(var e=Object.keys(p),t=0;t<e.length;++t)delete p[e]})(),p[t.CONTEXT_LOST_WEBGL]=!0;var r=M("context lost"),o=a.slice();setTimeout((function(){for(var t=0;t<o.length;++t)o[t](r);v>=0&&setTimeout((function(){e.restoreContext()}),v)}),0)}},e.restoreContext=function(){s&&o.length&&setTimeout((function(){if(!f)throw"can not restore. webglcontestlost listener did not call event.preventDefault";(function(){for(var e=0;e<u.length;++e){var r=u[e];r instanceof WebGLBuffer?t.deleteBuffer(r):r instanceof WebGLFramebuffer?t.deleteFramebuffer(r):r instanceof WebGLProgram?t.deleteProgram(r):r instanceof WebGLRenderbuffer?t.deleteRenderbuffer(r):r instanceof WebGLShader?t.deleteShader(r):r instanceof WebGLTexture&&t.deleteTexture(r)}})(),l(t),s=!1,m=0,f=!1;for(var e=o.slice(),r=M("context restored"),a=0;a<e.length;++a)e[a](r)}),0)},e.loseContextInNCalls=function(e){if(s)throw"You can not ask a lost contet to be lost";d=m+e},e.getNumCalls=function(){return m},e.setRestoreTimeout=function(e){v=e},e;function y(e){for(var r in e)"function"==typeof e[r]?n[r]=O(e,r):c(n,e,r);n.getError=function(){if(x(),!s)for(;e=t.getError();)p[e]=!0;for(var e in p)if(p[e])return delete p[e],e;return n.NO_ERROR};for(var a=["createBuffer","createFramebuffer","createProgram","createRenderbuffer","createShader","createTexture"],o=0;o<a.length;++o){var l=a[o];n[l]=function(t){return function(){if(x(),s)return null;var r=t.apply(e,arguments);return r.__webglDebugContextLostId__=i,u.push(r),r}}(e[l])}var d=["getActiveAttrib","getActiveUniform","getBufferParameter","getContextAttributes","getAttachedShaders","getFramebufferAttachmentParameter","getParameter","getProgramParameter","getProgramInfoLog","getRenderbufferParameter","getShaderParameter","getShaderInfoLog","getShaderSource","getTexParameter","getUniform","getUniformLocation","getVertexAttrib"];for(o=0;o<d.length;++o)n[l=d[o]]=function(t){return function(){return x(),s?null:t.apply(e,arguments)}}(n[l]);var m=["isBuffer","isEnabled","isFramebuffer","isProgram","isRenderbuffer","isShader","isTexture"];for(o=0;o<m.length;++o)n[l=m[o]]=function(t){return function(){return x(),!s&&t.apply(e,arguments)}}(n[l]);return n.checkFramebufferStatus=function(t){return function(){return x(),s?n.FRAMEBUFFER_UNSUPPORTED:t.apply(e,arguments)}}(n.checkFramebufferStatus),n.getAttribLocation=function(t){return function(){return x(),s?-1:t.apply(e,arguments)}}(n.getAttribLocation),n.getVertexAttribOffset=function(t){return function(){return x(),s?0:t.apply(e,arguments)}}(n.getVertexAttribOffset),n.isContextLost=function(){return s},n}},resetToInitialState:l}},void 0!==(n=o())&&(a.exports=n);var x=r(929);class O{constructor(e){this.context=e,this.svgAlwaysPremultipliesAlpha=!1,this.floatBufferBlendWorking=!1,this._doublePrecisionRequiresObfuscation=null,this.floatBufferBlendWorking=function(e){var t,r,a,o,n;if(!e.gl)return!1;if("webgl"===e.webglVersion)return(null==(o=e.capabilities.textureFloat)?void 0:o.textureFloat)&&(null==(n=e.capabilities.colorBufferFloat)?void 0:n.textureFloat);if(!((null==(t=e.capabilities.textureFloat)?void 0:t.textureFloat)&&(null==(r=e.capabilities.colorBufferFloat)?void 0:r.textureFloat)&&(null==(a=e.capabilities.colorBufferFloat)?void 0:a.floatBlend)))return!1;const i=new d.a(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5126,internalFormat:34836,samplingMode:9728,width:1,height:1}),s=u.a.createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),c=new v.a(e,new Map([["a_pos",0]]),{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:s}),l=new m.a(e,"\n  precision highp float;\n  attribute vec2 a_pos;\n\n  void main() {\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  ","\n   precision highp float;\n\n   void main() {\n    gl_FragColor = vec4(0.5, 0.5, 0.5, 0.5);\n   }\n  ",new Map([["a_pos",0]]));e.useProgram(l);const p=e.getBoundFramebufferObject(),{x:h,y:x,width:O,height:M}=e.getViewport();e.bindFramebuffer(i),e.setViewport(0,0,1,1),e.bindVAO(c),e.drawArrays(5,0,4);const y=Object(f.f)({blending:b.f});e.setPipelineState(y),e.drawArrays(5,0,4),g.exports.init(e);const T=e.gl.getError();return e.setViewport(h,x,O,M),e.bindFramebuffer(p),l.dispose(),c.dispose(!1),s.dispose(),i.dispose(),1282!==T||(console.warn("Device claims support for WebGL extension EXT_float_blend but does not support it. Using fall back."),!1)}(e),Object(x.a)(e).then((e=>this.svgAlwaysPremultipliesAlpha=!e))}get doublePrecisionRequiresObfuscation(){if(Object(c.j)(this._doublePrecisionRequiresObfuscation)){const e=y(this.context,!1),t=y(this.context,!0);this._doublePrecisionRequiresObfuscation=0!==e&&(0===t||e/t>5)}return this._doublePrecisionRequiresObfuscation}}let M=null;function y(e,t){const r=new d.a(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1});const a=u.a.createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),o=new v.a(e,new Map([["position",0]]),{geometry:[{name:"position",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:a}),n=Object(l.g)(5633261.287538229,2626832.878767164,1434988.0495278358),i=Object(l.g)(5633271.46742708,2626873.6381334523,1434963.231608387),s=function(r,a){const o=new m.a(e,`\n\n  precision highp float;\n\n  attribute vec2 position;\n\n  uniform vec3 u_highA;\n  uniform vec3 u_lowA;\n  uniform vec3 u_highB;\n  uniform vec3 u_lowB;\n\n  varying vec4 v_color;\n\n  ${t?"#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION":""}\n\n  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION\n\n  vec3 dpPlusFrc(vec3 a, vec3 b) {\n    return mix(a, a + b, vec3(notEqual(b, vec3(0))));\n  }\n\n  vec3 dpMinusFrc(vec3 a, vec3 b) {\n    return mix(vec3(0), a - b, vec3(notEqual(a, b)));\n  }\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = dpPlusFrc(hiA, hiB);\n    vec3 e = dpMinusFrc(t1, hiA);\n    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;\n    return t1 + t2;\n  }\n\n  #else\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = hiA + hiB;\n    vec3 e = t1 - hiA;\n    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;\n    return t1 + t2;\n  }\n\n  #endif\n\n  const float MAX_RGBA_FLOAT =\n    255.0 / 256.0 +\n    255.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 / 256.0;\n\n  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);\n\n  vec4 float2rgba(const float value) {\n    // Make sure value is in the domain we can represent\n    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);\n\n    // Decompose value in 32bit fixed point parts represented as\n    // uint8 rgba components. Decomposition uses the fractional part after multiplying\n    // by a power of 256 (this removes the bits that are represented in the previous\n    // component) and then converts the fractional part to 8bits.\n    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);\n\n    // Convert uint8 values (from 0 to 255) to floating point representation for\n    // the shader\n    const float toU8AsFloat = 1.0 / 255.0;\n\n    return fixedPointU8 * toU8AsFloat;\n  }\n\n  void main() {\n    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);\n\n    v_color = float2rgba(val.z / 25.0);\n\n    gl_Position = vec4(position * 2.0 - 1.0, 0.0, 1.0);\n  }\n  `,"\n  precision highp float;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_FragColor = v_color;\n  }\n  ",new Map([["position",0]])),n=new Float32Array(6);Object(p.a)(r,n,3);const i=new Float32Array(6);return Object(p.a)(a,i,3),e.useProgram(o),o.setUniform3f("u_highA",n[0],n[2],n[4]),o.setUniform3f("u_lowA",n[1],n[3],n[5]),o.setUniform3f("u_highB",i[0],i[2],i[4]),o.setUniform3f("u_lowB",i[1],i[3],i[5]),o}(n,i),c=e.getBoundFramebufferObject(),{x:f,y:b,width:g,height:x}=e.getViewport();e.bindFramebuffer(r),e.setViewport(0,0,1,1),e.bindVAO(o),e.drawArrays(5,0,4);const O=new Uint8Array(4);r.readPixels(0,0,1,1,6408,5121,O),s.dispose(),o.dispose(!1),a.dispose(),r.dispose(),e.setViewport(f,b,g,x),e.bindFramebuffer(c);const M=(n[2]-i[2])/25,y=Object(h.k)(O);return Math.abs(M-y)}function T({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(s.a`vec3 dpPlusFrc(vec3 a, vec3 b) {
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
}`):e.add(s.a`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function C(e){return!!Object(i.a)("force-double-precision-obfuscation")||(t=e,(Object(c.j)(M)||M.context!==t)&&(M=new O(t)),M).doublePrecisionRequiresObfuscation;var t}},785:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var a=r(124);function o(e,t){const r=e.fragment,o=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===o?(r.uniforms.add("lightingAmbientSH0","vec3"),r.code.add(a.a`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===o?(r.uniforms.add("lightingAmbientSH_R","vec4"),r.uniforms.add("lightingAmbientSH_G","vec4"),r.uniforms.add("lightingAmbientSH_B","vec4"),r.code.add(a.a`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):2===o&&(r.uniforms.add("lightingAmbientSH0","vec3"),r.uniforms.add("lightingAmbientSH_R1","vec4"),r.uniforms.add("lightingAmbientSH_G1","vec4"),r.uniforms.add("lightingAmbientSH_B1","vec4"),r.uniforms.add("lightingAmbientSH_R2","vec4"),r.uniforms.add("lightingAmbientSH_G2","vec4"),r.uniforms.add("lightingAmbientSH_B2","vec4"),r.code.add(a.a`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),1!==t.pbrMode&&2!==t.pbrMode||r.code.add(a.a`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}var n=r(707);function i(e){const t=e.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.code.add(a.a`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}var s=r(652),c=r(677),l=r(511);function u(e,t){const r=e.fragment;e.include(i),e.include(n.a,t),0!==t.pbrMode&&e.include(s.a,t),e.include(o,t),t.receiveShadows&&e.include(l.a,t),r.uniforms.add("lightingGlobalFactor","float"),r.uniforms.add("ambientBoostFactor","float"),e.include(c.a),r.code.add(a.a`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===t.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),r.code.add(a.a`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${1===t.viewingMode?a.a`normalize(vPosWorld)`:a.a`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),r.code.add(a.a`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),0===t.pbrMode||4===t.pbrMode?r.code.add(a.a`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):1!==t.pbrMode&&2!==t.pbrMode||(r.code.add(a.a`const float fillLightIntensity = 0.25;
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
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(a.a`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),r.code.add(a.a`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = abs(dot(normal, ambientDir));
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.code.add(a.a`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(a.a`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===t.pbrMode?a.a`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:a.a`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}},852:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var a=r(124);function o(e){e.vertex.code.add(a.a`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},853:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var a=r(272),o=r(411),n=r(709),i=r(706),s=r(866),c=r(584),l=r(352),u=r(549),d=r(364),m=r(124);function f(e,t){const r=e.vertex.code,f=e.fragment.code;1!==t.output&&3!==t.output||(e.include(o.a,{linearDepth:!0}),e.include(i.a,t),e.include(u.a,t),e.include(c.a,t),e.include(a.a,t),e.vertex.uniforms.add("cameraNearFar","vec2"),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(m.a`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, cameraNearFar, depth);
forwardTextureCoordinates();
}`),e.include(d.a,t),f.add(m.a`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?m.a`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===t.output&&(e.include(o.a,{linearDepth:!1}),e.include(n.a,t),e.include(s.a,t),e.include(i.a,t),e.include(u.a,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),r.add(m.a`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===t.normalType?m.a`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(a.a,t),e.include(d.a,t),f.add(m.a`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?m.a`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===t.normalType?m.a`
            vec3 normal = screenDerivativeNormal(vPositionView);`:m.a`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===t.output&&(e.include(o.a,{linearDepth:!1}),e.include(i.a,t),e.include(u.a,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(m.a`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(a.a,t),e.include(d.a,t),e.include(l.a),f.add(m.a`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?m.a`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}},854:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(403),o=r(124);function n(e){e.include(a.a),e.code.add(o.a`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${o.a.int(1)}) {
        return allMixed;
      }
      else if (mode == ${o.a.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${o.a.int(3)}) {
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

      if (mode == ${o.a.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${o.a.int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}},865:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(124);function o(e){e.vertex.code.add(a.a`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${a.a.int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${a.a.int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${a.a.int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${a.a.int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function n(e,t){t.symbolColor?(e.include(o),e.attributes.add("symbolColor","vec4"),e.varyings.add("colorMixMode","mediump float")):e.fragment.uniforms.add("colorMixMode","int"),t.symbolColor?e.vertex.code.add(a.a`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`):e.vertex.code.add(a.a`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`)}},866:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var a=r(709),o=r(311),n=r(165),i=r(105),s=r(735),c=r(784),l=r(124);function u(e,t){e.include(s.a),e.vertex.include(c.a,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),e.vertex.uniforms.add("uTransform_ProjFromView","mat4"),e.vertex.code.add(l.a`vec3 positionWorldCameraRelative() {
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
}`)}function d(e,t){0===t.normalType||1===t.normalType?(e.include(a.a,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),e.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),e.vertex.code.add(l.a`void forwardNormal() {
vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
}`)):2===t.normalType?(e.include(u,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(l.a`
    void forwardNormal() {
      vNormalWorld = ${1===t.viewingMode?l.a`normalize(vPositionWorldCameraRelative);`:l.a`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(l.a`void forwardNormal() {}`)}!function(e){e.ModelTransform=class{constructor(){this.worldFromModel_RS=Object(o.b)(),this.worldFromModel_TH=Object(i.e)(),this.worldFromModel_TL=Object(i.e)()}};e.ViewProjectionTransform=class{constructor(){this.worldFromView_TH=Object(i.e)(),this.worldFromView_TL=Object(i.e)(),this.viewFromCameraRelative_RS=Object(o.b)(),this.projFromView=Object(n.d)()}},e.bindModelTransform=function(e,t){e.setUniformMatrix3fv("uTransform_WorldFromModel_RS",t.worldFromModel_RS),e.setUniform3fv("uTransform_WorldFromModel_TH",t.worldFromModel_TH),e.setUniform3fv("uTransform_WorldFromModel_TL",t.worldFromModel_TL)},e.bindViewProjTransform=function(e,t){e.setUniform3fv("uTransform_WorldFromView_TH",t.worldFromView_TH),e.setUniform3fv("uTransform_WorldFromView_TL",t.worldFromView_TL),e.setUniformMatrix4fv("uTransform_ProjFromView",t.projFromView),e.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",t.viewFromCameraRelative_RS)}}(u||(u={})),(d||(d={})).bindUniforms=function(e,t){e.setUniformMatrix4fv("viewNormal",t)}},894:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var a=r(124);function o(e,t){const r=e.fragment;r.code.add(a.a`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),1===t.doubleSidedMode?r.code.add(a.a`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`):2===t.doubleSidedMode?r.code.add(a.a`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`):r.code.add(a.a`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`)}},914:function(e,t,r){"use strict";function a(){const e=new Float32Array(16);return e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}r.d(t,"a",(function(){return a}));const o=a();Object.freeze({__proto__:null,create:a,clone:function(e){const t=new Float32Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},fromValues:function(e,t,r,a,o,n,i,s,c,l,u,d,m,f,v,p){const h=new Float32Array(16);return h[0]=e,h[1]=t,h[2]=r,h[3]=a,h[4]=o,h[5]=n,h[6]=i,h[7]=s,h[8]=c,h[9]=l,h[10]=u,h[11]=d,h[12]=m,h[13]=f,h[14]=v,h[15]=p,h},createView:function(e,t){return new Float32Array(e,t,16)},IDENTITY:o})},929:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var a=r(222),o=r(248),n=r(623),i=r(203),s=r(227);async function c(e){const t=new Image;if(t.src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A",t.width=5,t.height=5,await t.decode(),!e.gl)return!0;const r=new o.a(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1}),c=a.a.createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),l=new s.a(e,new Map([["a_pos",0]]),{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:c}),u=new n.a(e,"\n  precision highp float;\n\n  attribute vec2 a_pos;\n  varying vec2 v_uv;\n\n  void main() {\n    v_uv = a_pos;\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  ","\n  precision highp float;\n\n  varying vec2 v_uv;\n  uniform sampler2D u_texture;\n\n  void main() {\n    gl_FragColor = texture2D(u_texture, v_uv);\n  }\n  ",new Map([["a_pos",0]]));e.useProgram(u);const d=new i.a(e,{dataType:5121,pixelFormat:6408,preMultiplyAlpha:!1,wrapMode:33071,samplingMode:9729},t);e.bindTexture(d,0),u.setUniform1i("u_texture",0);const m=e.getBoundFramebufferObject(),{x:f,y:v,width:p,height:h}=e.getViewport();e.bindFramebuffer(r),e.setViewport(0,0,1,1),e.bindVAO(l),e.drawArrays(5,0,4);const b=new Uint8Array(4);return r.readPixels(0,0,1,1,6408,5121,b),u.dispose(),l.dispose(!1),c.dispose(),r.dispose(),d.dispose(),e.setViewport(f,v,p,h),e.bindFramebuffer(m),t.src="",255===b[0]}},944:function(e,t,r){"use strict";r.d(t,"a",(function(){return F})),r.d(t,"b",(function(){return j}));var a=r(639),o=r(852),n=r(272),i=r(411),s=r(776),c=r(709),l=r(735),u=r(865),d=r(706),m=r(586),f=r(866),v=r(700),p=r(853),h=r(345),b=r(1014),g=r(707),x=r(785),O=r(304),M=r(894),y=r(652),T=r(777),C=r(511),w=r(549),_=r(364),A=r(1015),S=r(854),P=r(124),E=r(299);function j(e){const t=new E.a,r=t.vertex.code,j=t.fragment.code;return t.include(A.a,{name:"Default Material Shader",output:e.output}),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(l.a),t.varyings.add("vpos","vec3"),t.include(w.a,e),t.include(s.a,e),t.include(v.a,e),0!==e.output&&7!==e.output||(t.include(c.a,e),t.include(i.a,{linearDepth:!1}),0===e.normalType&&e.offsetBackfaces&&t.include(o.a),t.include(b.a,e),t.include(f.a,e),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("localvpos","vec3"),t.include(d.a,e),t.include(a.a,e),t.include(u.a,e),t.include(m.a,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),r.add(P.a`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${P.a.float(_.c)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===e.normalType?P.a`
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
    `)),7===e.output&&(t.include(n.a,e),t.include(_.a,e),e.multipassTerrainEnabled&&(t.fragment.include(h.a),t.include(O.b,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(S.a),j.add(P.a`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?P.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:P.a`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?P.a`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:P.a`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(n.a,e),t.include(x.a,e),t.include(g.a,e),t.include(_.a,e),e.receiveShadows&&t.include(C.a,e),e.multipassTerrainEnabled&&(t.fragment.include(h.a),t.include(O.b,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(T.a,e),t.include(y.a,e),t.fragment.include(S.a),t.include(M.a,e),j.add(P.a`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?P.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:P.a`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===e.normalType?P.a`
        vec3 normal = screenDerivativeNormal(localvpos);`:P.a`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?P.a`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:P.a`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${e.hasNormalTexture?P.a`
              mat3 tangentSpace = ${e.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?P.a`vec3 normalGround = normalize(vpos + localOrigin);`:P.a`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:P.a``}
        ${1===e.pbrMode||2===e.pbrMode?P.a`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(p.a,e),t}var F=Object.freeze({__proto__:null,build:j})},945:function(e,t,r){"use strict";r.d(t,"a",(function(){return S})),r.d(t,"b",(function(){return A}));var a=r(639),o=r(852),n=r(272),i=r(411),s=r(776),c=r(709),l=r(735),u=r(865),d=r(706),m=r(586),f=r(700),v=r(853),p=r(345),h=r(707),b=r(785),g=r(304),x=r(652),O=r(777),M=r(511),y=r(549),T=r(364),C=r(854),w=r(124),_=r(299);function A(e){const t=new _.a,r=t.vertex.code,A=t.fragment.code;return t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(l.a),t.varyings.add("vpos","vec3"),t.include(y.a,e),t.include(s.a,e),t.include(f.a,e),0!==e.output&&7!==e.output||(t.include(c.a,e),t.include(i.a,{linearDepth:!1}),e.offsetBackfaces&&t.include(o.a),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.include(d.a,e),t.include(a.a,e),t.include(u.a,e),t.include(m.a,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),r.add(w.a`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${w.a.float(T.c)}) {
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
          ${e.multipassTerrainEnabled?w.a`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===e.output&&(t.include(n.a,e),t.include(T.a,e),e.multipassTerrainEnabled&&(t.fragment.include(p.a),t.include(g.b,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(C.a),A.add(w.a`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?w.a`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?w.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:w.a`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?w.a`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:w.a`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(n.a,e),t.include(b.a,e),t.include(h.a,e),t.include(T.a,e),e.receiveShadows&&t.include(M.a,e),e.multipassTerrainEnabled&&(t.fragment.include(p.a),t.include(g.b,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(O.a,e),t.include(x.a,e),t.fragment.include(C.a),A.add(w.a`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?w.a`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?w.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:w.a`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?w.a`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:w.a`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${w.a`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?w.a`vec3 normalGround = normalize(vpos + localOrigin);`:w.a`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:w.a``}
        ${1===e.pbrMode||2===e.pbrMode?w.a`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(v.a,e),t}var S=Object.freeze({__proto__:null,build:A})},984:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var a=r(706),o=r(124);function n(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(o.a`#ifndef GL_EXT_shader_texture_lod
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
}`)}function i(e,t){e.include(a.a,t),e.fragment.code.add(o.a`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===t.attributeTextureCoordinates&&e.fragment.code.add(o.a`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),2===t.attributeTextureCoordinates&&(e.include(n),e.fragment.code.add(o.a`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`))}}}]);
//# sourceMappingURL=106.d8e5d524.chunk.js.map