(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[115],{1011:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var o=a(714),r=a(136);function i(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(r.a`#ifndef GL_EXT_shader_texture_lod
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
}`)}function n(e,t){e.include(o.a,t),e.fragment.code.add(r.a`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===t.attributeTextureCoordinates&&e.fragment.code.add(r.a`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),2===t.attributeTextureCoordinates&&(e.include(i),e.fragment.code.add(r.a`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`))}},1042:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var o=a(1011),r=a(136);function i(e,t){const a=e.fragment;t.vertexTangents?(e.attributes.add("tangent","vec4"),e.varyings.add("vTangent","vec4"),2===t.doubleSidedMode?a.code.add(r.a`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):a.code.add(r.a`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),a.code.add(r.a`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`)),0!==t.attributeTextureCoordinates&&(e.include(o.a,t),a.uniforms.add("normalTexture","sampler2D"),a.uniforms.add("normalTextureSize","vec2"),a.code.add(r.a`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}},1043:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var o=a(136),r=a(257);function i(e,t){const a=o.a`
  /*
  *  ${t.name}
  *  ${0===t.output?"RenderOutput: Color":1===t.output?"RenderOutput: Depth":3===t.output?"RenderOutput: Shadow":2===t.output?"RenderOutput: Normal":4===t.output?"RenderOutput: Highlight":""}
  */
  `;Object(r.c)()&&(e.fragment.code.add(a),e.vertex.code.add(a))}},1140:function(e,t,a){"use strict";a.r(t),a.d(t,"fetch",(function(){return G})),a.d(t,"gltfToEngineResources",(function(){return q})),a.d(t,"parseUrl",(function(){return H}));var o=a(436),r=a(85),i=a(271),n=a(331),s=a(149),c=a(199),l=a(116),d=a(106),u=a(223),m=a(403),v=a(682),p=a(1044),f=a(1062),h=a(1045),b=a(1058),g=a(1046),x=a(102),O=a(287),y=a(88),C=a(87),T=a(91),M=a(640),w=a(949),j=a(566),S=a(821),A=a(750);const _=C.a.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function P(e,t){const a=await async function(e,t){const a=Object(r.l)(t)&&t.streamDataRequester;if(a)return async function(e,t,a){const o=await Object(O.c)(t.request(e,"json",a));if(!0===o.ok)return o.value;Object(T.t)(o.error),R(o.error.details.url)}(e,a,t);const o=await Object(O.c)(Object(x.default)(e,Object(r.t)(t)));if(!0===o.ok)return o.value.data;Object(T.t)(o.error),R(o.error)}(e,t);return{resource:a,textures:await F(a.textureDefinitions,t)}}function R(e){throw new y.a("",`Request for object resource failed: ${e}`)}function E(e){const t=e.params,a=t.topology;let o=!0;switch(t.vertexAttributes||(_.warn("Geometry must specify vertex attributes"),o=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const a in t.vertexAttributes){const t=e[a];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(_.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),o=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(_.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),o=!1)):(_.warn(`Indexed geometry does not specify face indices for '${a}' attribute`),o=!1)}}else _.warn("Indexed geometries must specify faces"),o=!1;break}default:_.warn(`Unsupported topology '${a}'`),o=!1}e.params.material||(_.warn("Geometry requires material"),o=!1);const r=e.params.vertexAttributes;for(const i in r)r[i].values||(_.warn("Geometries with externally defined attributes are not yet supported"),o=!1);return o}function L(e){const t=Object(u.h)();return e.forEach((e=>{const a=e.boundingInfo;Object(r.l)(a)&&(Object(u.n)(t,a.getBBMin()),Object(u.n)(t,a.getBBMax()))})),t}async function F(e,t){const a=[];for(const n in e){const o=e[n],i=o.images[0].data;if(!i){_.warn("Externally referenced texture data is not yet supported");continue}const s=o.encoding+";base64,"+i,c="/textureDefinitions/"+n,l="rgba"===o.channels?o.alphaChannelUsage||"transparency":"none",d={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:1!==D(l)},u=Object(r.l)(t)&&t.disableTextures?Promise.resolve(null):Object(w.a)(s,t);a.push(u.then((e=>({refId:c,image:e,params:d,alphaChannelUsage:l}))))}const o=await Promise.all(a),i={};for(const r of o)i[r.refId]=r;return i}function D(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;default:return 0}}function z(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const B=new M.a(1,2,"wosr");var N=a(1047),I=a(817),V=a(818),$=a(770);async function G(e,t){const a=H(Object(o.a)(e));if("wosr"===a.fileType){const e=await(t.cache?t.cache.loadWOSR(a.url,t):P(a.url,t)),o=function(e,t){const a=[],o=[],i=[],n=[],s=e.resource,c=M.a.parse(s.version||"1.0","wosr");B.validate(c);const l=s.model.name,u=s.model.geometries,m=s.materialDefinitions,v=e.textures;let p=0;const f=new Map;for(let h=0;h<u.length;h++){const e=u[h];if(!E(e))continue;const s=z(e),c=e.params.vertexAttributes,l=[];for(const t in c){const e=c[t],a=e.values;l.push([t,{data:a,size:e.valuesPerElement,exclusive:!0}])}const b=[];if("PerAttributeArray"!==e.params.topology){const t=e.params.faces;for(const e in t)b.push([e,new Uint32Array(t[e].values)])}const g=v&&v[s.texture];if(g&&!f.has(s.texture)){const{image:e,params:t}=g,a=new S.a(e,t);n.push(a),f.set(s.texture,a)}const x=f.get(s.texture),O=x?x.id:void 0;let y=i[s.material]?i[s.material][s.texture]:null;if(!y){const e=m[s.material.substring(s.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const a=g&&g.alphaChannelUsage,o=e.transparency>0||"transparency"===a||"maskAndTransparency"===a,n=g?D(g.alphaChannelUsage):void 0,c={ambient:Object(d.g)(e.diffuse),diffuse:Object(d.g)(e.diffuse),opacity:1-(e.transparency||0),transparent:o,textureAlphaMode:n,textureAlphaCutoff:.33,textureId:O,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!g&&!!g.params.preMultiplyAlpha};Object(r.l)(t)&&t.materialParamsMixin&&Object.assign(c,t.materialParamsMixin),y=new A.a(c),i[s.material]||(i[s.material]={}),i[s.material][s.texture]=y}o.push(y);const C=new j.a(l,b);p+=b.position?b.position.length:0,a.push(C)}return{name:l,stageResources:{textures:n,materials:o,geometries:a},pivotOffset:s.model.pivotOffset,boundingBox:L(a),numberOfVertices:p,lodThreshold:null}}(e,t);return{lods:[o],referenceBoundingBox:o.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const i=await(t.cache?t.cache.loadGLTF(a.url,t,t.usePBR):Object(b.a)(new h.a(t.streamDataRequester),a.url,t,t.usePBR)),n=Object(r.j)(i.model.meta,"ESRI_proxyEllipsoid");i.meta.isEsriSymbolResource&&Object(r.l)(n)&&-1!==i.meta.uri.indexOf("/RealisticTrees/")&&function(e,t){for(let a=0;a<e.model.lods.length;++a){const o=e.model.lods[a];e.customMeta.esriTreeRendering=!0;for(const i of o.parts){const o=i.attributes.normal;if(Object(r.k)(o))return;const n=i.attributes.position,u=n.count,v=Object(d.f)(),p=Object(d.f)(),h=Object(d.f)(),b=Object(f.a)(m.J,u),g=Object(f.a)(m.u,u),x=Object(s.c)(Object(c.d)(),i.transform);for(let r=0;r<u;r++){n.getVec(r,p),o.getVec(r,v),Object(l.q)(p,p,i.transform),Object(l.j)(h,p,t.center),Object(l.b)(h,h,t.radius);const s=h[2],c=Object(l.p)(h),d=Math.min(.45+.55*c*c,1);Object(l.b)(h,h,t.radius),Object(l.q)(h,h,x),Object(l.r)(h,h),a+1!==e.model.lods.length&&e.model.lods.length>1&&Object(l.i)(h,h,v,s>-1?.2:Math.min(-4*s-3.8,1)),g.setVec(r,h),b.set(r,0,255*d),b.set(r,1,255*d),b.set(r,2,255*d),b.set(r,3,255)}i.attributes.normal=g,i.attributes.color=b}}}(i,n);const u=i.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:i.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:t.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},v={...t.materialParamsMixin,treeRendering:i.customMeta.esriTreeRendering};if(null!=a.specifiedLodIndex){const e=q(i,u,v,a.specifiedLodIndex);let t=e[0].boundingBox;return 0!==a.specifiedLodIndex&&(t=q(i,u,v,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1,remove:i.remove}}const p=q(i,u,v);return{lods:p,referenceBoundingBox:p[0].boundingBox,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1,remove:i.remove}}function H(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function q(e,t,a,o){const s=e.model,c=Object(n.b)(),l=new Array,d=new Map,h=new Map;return s.lods.forEach(((e,n)=>{if(void 0!==o&&n!==o)return;const b={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:Object(r.l)(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:Object(u.h)()};l.push(b),e.parts.forEach((e=>{const o=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),n=s.materials.get(e.material),l=Object(r.l)(e.attributes.texCoord0),x=Object(r.l)(e.attributes.normal),O=function(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":case null:case void 0:return 1}}(n.alphaMode);if(!d.has(o)){if(l){if(Object(r.l)(n.textureColor)&&!h.has(n.textureColor)){const e=s.textures.get(n.textureColor),t={...e.parameters,preMultiplyAlpha:1!==O};h.set(n.textureColor,new S.a(e.data,t))}if(Object(r.l)(n.textureNormal)&&!h.has(n.textureNormal)){const e=s.textures.get(n.textureNormal);h.set(n.textureNormal,new S.a(e.data,e.parameters))}if(Object(r.l)(n.textureOcclusion)&&!h.has(n.textureOcclusion)){const e=s.textures.get(n.textureOcclusion);h.set(n.textureOcclusion,new S.a(e.data,e.parameters))}if(Object(r.l)(n.textureEmissive)&&!h.has(n.textureEmissive)){const e=s.textures.get(n.textureEmissive);h.set(n.textureEmissive,new S.a(e.data,e.parameters))}if(Object(r.l)(n.textureMetallicRoughness)&&!h.has(n.textureMetallicRoughness)){const e=s.textures.get(n.textureMetallicRoughness);h.set(n.textureMetallicRoughness,new S.a(e.data,e.parameters))}}const i=n.color[0]**(1/N.a),c=n.color[1]**(1/N.a),u=n.color[2]**(1/N.a),m=n.emissiveFactor[0]**(1/N.a),v=n.emissiveFactor[1]**(1/N.a),p=n.emissiveFactor[2]**(1/N.a),f=Object(r.l)(n.textureColor)&&l?h.get(n.textureColor):null;d.set(o,new A.a({...t,transparent:0===O,textureAlphaMode:O,textureAlphaCutoff:n.alphaCutoff,diffuse:[i,c,u],ambient:[i,c,u],opacity:n.opacity,doubleSided:n.doubleSided,doubleSidedType:"winding-order",cullFace:n.doubleSided?0:2,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:x?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:Object(r.l)(f)?f.id:void 0,colorMixMode:n.colorMixMode,normalTextureId:Object(r.l)(n.textureNormal)&&l?h.get(n.textureNormal).id:void 0,textureAlphaPremultiplied:Object(r.l)(f)&&!!f.params.preMultiplyAlpha,occlusionTextureId:Object(r.l)(n.textureOcclusion)&&l?h.get(n.textureOcclusion).id:void 0,emissiveTextureId:Object(r.l)(n.textureEmissive)&&l?h.get(n.textureEmissive).id:void 0,metallicRoughnessTextureId:Object(r.l)(n.textureMetallicRoughness)&&l?h.get(n.textureMetallicRoughness).id:void 0,emissiveFactor:[m,v,p],mrrFactors:[n.metallicFactor,n.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...a}))}const y=function(e,t){switch(t){case 4:return Object(g.c)(e);case 5:return Object(g.b)(e);case 6:return Object(g.a)(e)}}(e.indices||e.attributes.position.count,e.primitiveType),C=e.attributes.position.count,T=Object(f.a)(m.u,C);Object(v.e)(T,e.attributes.position,e.transform);const M=[["position",{data:T.typedBuffer,size:T.elementCount,exclusive:!0}]],w=[["position",y]];if(Object(r.l)(e.attributes.normal)){const t=Object(f.a)(m.u,C);Object(i.a)(c,e.transform),Object(v.a)(t,e.attributes.normal,c),M.push(["normal",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),w.push(["normal",y])}if(Object(r.l)(e.attributes.tangent)){const t=Object(f.a)(m.C,C);Object(i.a)(c,e.transform),Object(p.c)(t,e.attributes.tangent,c),M.push(["tangent",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),w.push(["tangent",y])}if(Object(r.l)(e.attributes.texCoord0)){const t=Object(f.a)(m.m,C);Object(I.b)(t,e.attributes.texCoord0),M.push(["uv0",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),w.push(["uv0",y])}if(Object(r.l)(e.attributes.color)){const t=Object(f.a)(m.J,C);if(4===e.attributes.color.elementCount)e.attributes.color instanceof m.C?Object(p.b)(t,e.attributes.color,255):e.attributes.color instanceof m.J?Object(V.a)(t,e.attributes.color):e.attributes.color instanceof m.H&&Object(p.b)(t,e.attributes.color,1/256);else{Object(V.b)(t,255,255,255,255);const a=new m.B(t.buffer,0,4);e.attributes.color instanceof m.u?Object(v.d)(a,e.attributes.color,255):e.attributes.color instanceof m.B?Object($.a)(a,e.attributes.color):e.attributes.color instanceof m.z&&Object(v.d)(a,e.attributes.color,1/256)}M.push(["color",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),w.push(["color",y])}const _=new j.a(M,w);b.stageResources.geometries.push(_),b.stageResources.materials.push(d.get(o)),l&&(Object(r.l)(n.textureColor)&&b.stageResources.textures.push(h.get(n.textureColor)),Object(r.l)(n.textureNormal)&&b.stageResources.textures.push(h.get(n.textureNormal)),Object(r.l)(n.textureOcclusion)&&b.stageResources.textures.push(h.get(n.textureOcclusion)),Object(r.l)(n.textureEmissive)&&b.stageResources.textures.push(h.get(n.textureEmissive)),Object(r.l)(n.textureMetallicRoughness)&&b.stageResources.textures.push(h.get(n.textureMetallicRoughness))),b.numberOfVertices+=C;const P=_.boundingInfo;Object(r.l)(P)&&(Object(u.n)(b.boundingBox,P.getBBMin()),Object(u.n)(b.boundingBox,P.getBBMax()))}))})),l}},145:function(e,t,a){"use strict";a.d(t,"a",(function(){return f})),a.d(t,"b",(function(){return p})),a.d(t,"c",(function(){return r})),a.d(t,"d",(function(){return E})),a.d(t,"e",(function(){return j})),a.d(t,"f",(function(){return s})),a.d(t,"g",(function(){return m})),a.d(t,"h",(function(){return _})),a.d(t,"i",(function(){return x})),a.d(t,"j",(function(){return y})),a.d(t,"k",(function(){return O})),a.d(t,"l",(function(){return h})),a.d(t,"m",(function(){return n})),a.d(t,"n",(function(){return g})),a.d(t,"o",(function(){return C})),a.d(t,"p",(function(){return T})),a.d(t,"q",(function(){return S})),a.d(t,"r",(function(){return w})),a.d(t,"s",(function(){return i})),a.d(t,"t",(function(){return M})),a.d(t,"u",(function(){return b})),a.d(t,"v",(function(){return v})),a.d(t,"w",(function(){return d})),a.d(t,"x",(function(){return u}));var o=a(176);function r(e,t){return e[0]=t[0],e[1]=t[1],e}function i(e,t,a){return e[0]=t,e[1]=a,e}function n(e,t,a){return e[0]=t[0]+a[0],e[1]=t[1]+a[1],e}function s(e,t,a){return e[0]=t[0]-a[0],e[1]=t[1]-a[1],e}function c(e,t,a){return e[0]=t[0]*a[0],e[1]=t[1]*a[1],e}function l(e,t,a){return e[0]=t[0]/a[0],e[1]=t[1]/a[1],e}function d(e,t,a){return e[0]=Math.min(t[0],a[0]),e[1]=Math.min(t[1],a[1]),e}function u(e,t,a){return e[0]=Math.max(t[0],a[0]),e[1]=Math.max(t[1],a[1]),e}function m(e,t,a){return e[0]=t[0]*a,e[1]=t[1]*a,e}function v(e,t,a,o){return e[0]=t[0]+a[0]*o,e[1]=t[1]+a[1]*o,e}function p(e,t){const a=t[0]-e[0],o=t[1]-e[1];return Math.sqrt(a*a+o*o)}function f(e,t){const a=t[0]-e[0],o=t[1]-e[1];return a*a+o*o}function h(e){const t=e[0],a=e[1];return Math.sqrt(t*t+a*a)}function b(e){const t=e[0],a=e[1];return t*t+a*a}function g(e,t){return e[0]=-t[0],e[1]=-t[1],e}function x(e,t){const a=t[0],o=t[1];let r=a*a+o*o;return r>0&&(r=1/Math.sqrt(r),e[0]=t[0]*r,e[1]=t[1]*r),e}function O(e,t){return e[0]*t[0]+e[1]*t[1]}function y(e,t,a){const o=t[0]*a[1]-t[1]*a[0];return e[0]=e[1]=0,e[2]=o,e}function C(e,t,a,o){const r=t[0],i=t[1];return e[0]=r+o*(a[0]-r),e[1]=i+o*(a[1]-i),e}function T(e,t,a){const o=t[0],r=t[1];return e[0]=a[0]*o+a[2]*r,e[1]=a[1]*o+a[3]*r,e}function M(e,t,a){const o=t[0],r=t[1];return e[0]=a[0]*o+a[2]*r+a[4],e[1]=a[1]*o+a[3]*r+a[5],e}function w(e,t,a,o){const r=t[0]-a[0],i=t[1]-a[1],n=Math.sin(o),s=Math.cos(o);return e[0]=r*s-i*n+a[0],e[1]=r*n+i*s+a[1],e}function j(e,t){return e[0]===t[0]&&e[1]===t[1]}function S(e,t,a,o,r){let i=t[0]-a[0],n=t[1]-a[1];const s=(o[0]*i+o[1]*n)*(r-1);return i=o[0]*s,n=o[1]*s,e[0]=t[0]+i,e[1]=t[1]+n,e}const A=h,_=s,P=c,R=l,E=p,L=f,F=b;Object.freeze({__proto__:null,copy:r,set:i,add:n,subtract:s,multiply:c,divide:l,ceil:function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e},floor:function(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e},min:d,max:u,round:function(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e},scale:m,scaleAndAdd:v,distance:p,squaredDistance:f,length:h,squaredLength:b,negate:g,inverse:function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e},normalize:x,dot:O,cross:y,lerp:C,random:function(e,t){t=t||1;const a=2*Object(o.b)()*Math.PI;return e[0]=Math.cos(a)*t,e[1]=Math.sin(a)*t,e},transformMat2:T,transformMat2d:M,transformMat3:function(e,t,a){const o=t[0],r=t[1];return e[0]=a[0]*o+a[3]*r+a[6],e[1]=a[1]*o+a[4]*r+a[7],e},transformMat4:function(e,t,a){const o=t[0],r=t[1];return e[0]=a[0]*o+a[4]*r+a[12],e[1]=a[1]*o+a[5]*r+a[13],e},rotate:w,angle:function(e,t){const a=e[0],o=e[1],r=t[0],i=t[1];let n=a*a+o*o;n>0&&(n=1/Math.sqrt(n));let s=r*r+i*i;s>0&&(s=1/Math.sqrt(s));const c=(a*r+o*i)*n*s;return c>1?0:c<-1?Math.PI:Math.acos(c)},str:function(e){return"vec2("+e[0]+", "+e[1]+")"},exactEquals:j,equals:function(e,t){const a=e[0],r=e[1],i=t[0],n=t[1];return Math.abs(a-i)<=o.a*Math.max(1,Math.abs(a),Math.abs(i))&&Math.abs(r-n)<=o.a*Math.max(1,Math.abs(r),Math.abs(n))},projectAndScale:S,len:A,sub:_,mul:P,div:R,dist:E,sqrDist:L,sqrLen:F})},224:function(e,t,a){"use strict";function o(){return[0,0]}function r(e){return[e[0],e[1]]}function i(e,t){return[e,t]}function n(e){const t=[0,0],a=Math.min(2,e.length);for(let o=0;o<a;++o)t[o]=e[o];return t}function s(e,t){return new Float64Array(e,t,2)}function c(){return[0,0]}function l(){return i(1,1)}function d(){return i(1,0)}function u(){return i(0,1)}a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return s})),a.d(t,"d",(function(){return n})),a.d(t,"e",(function(){return i}));const m=[0,0],v=l(),p=d(),f=u();Object.freeze({__proto__:null,create:o,clone:r,fromValues:i,fromArray:n,createView:s,zeros:c,ones:l,unitX:d,unitY:u,ZEROS:m,ONES:v,UNIT_X:p,UNIT_Y:f})},436:function(e,t,a){"use strict";function o(e){return e=e||globalThis.location.hostname,l.some((t=>{var a;return null!=(null==(a=e)?void 0:a.match(t))}))}function r(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(i)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(n)||null!=t.match(c)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return o}));const i=/^devext.arcgis.com$/,n=/^qaext.arcgis.com$/,s=/^[\w-]*\.mapsdevext.arcgis.com$/,c=/^[\w-]*\.mapsqa.arcgis.com$/,l=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,i,n,/^jsapps.esri.com$/,s,c]},714:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var o=a(136);function r(e,t){1===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(o.a`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),2===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add("uvRegion","vec4"),e.varyings.add("vuvRegion","vec4"),e.vertex.code.add(o.a`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),0===t.attributeTextureCoordinates&&e.vertex.code.add(o.a`void forwardTextureCoordinates() {}`)}},715:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var o=a(136);function r(e,t){const a=e.fragment;t.receiveAmbientOcclusion?(a.uniforms.add("ssaoTex","sampler2D"),a.uniforms.add("viewportPixelSz","vec4"),a.code.add(o.a`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):a.code.add(o.a`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}},720:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var o=a(136);function r(e){const t=o.a`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;e.fragment.code.add(t),e.vertex.code.add(t)}function i(e,t){0===t.normalType&&(e.attributes.add("normal","vec3"),e.vertex.code.add(o.a`vec3 normalModel() {
return normal;
}`)),1===t.normalType&&(e.include(r),e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(o.a`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),3===t.normalType&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(o.a`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}},746:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var o=a(136);function r(e){e.attributes.add("position","vec3"),e.vertex.code.add(o.a`vec3 positionModel() { return position; }`)}},750:function(e,t,a){"use strict";a.d(t,"a",(function(){return N})),a.d(t,"b",(function(){return G}));var o=a(331),r=a(116),i=a(106),n=a(514),s=a(406),c=a(957),l=a(481),d=a(430),u=a(710),m=a(602),v=a(425),p=a(79),f=a(306),h=a(782),b=a(709),g=a(402),x=a(352),O=a(784),y=a(604),C=a(623),T=a(783),M=a(530),w=a(419),j=a(432),S=a(433),A=a(434),_=a(420),P=a(651),R=a(965),E=a(393);class L extends j.a{initializeProgram(e){const t=L.shader.get(),a=this.configuration,o=t.build({OITEnabled:0===a.transparencyPassType,output:a.output,viewingMode:e.viewingMode,receiveShadows:a.receiveShadows,slicePlaneEnabled:a.slicePlaneEnabled,sliceHighlightDisabled:a.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:a.symbolColors,vvSize:a.vvSize,vvColor:a.vvColor,vvInstancingEnabled:!0,instanced:a.instanced,instancedColor:a.instancedColor,instancedDoublePrecision:a.instancedDoublePrecision,pbrMode:a.usePBR?a.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:a.hasMetalnessAndRoughnessTexture,hasEmissionTexture:a.hasEmissionTexture,hasOcclusionTexture:a.hasOcclusionTexture,hasNormalTexture:a.hasNormalTexture,hasColorTexture:a.hasColorTexture,receiveAmbientOcclusion:a.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:a.normalsTypeDerivate?3:0,doubleSidedMode:a.doubleSidedMode,vertexTangents:a.vertexTangents,attributeTextureCoordinates:a.hasMetalnessAndRoughnessTexture||a.hasEmissionTexture||a.hasOcclusionTexture||a.hasNormalTexture||a.hasColorTexture?1:0,textureAlphaPremultiplied:a.textureAlphaPremultiplied,attributeColor:a.vertexColors,screenSizePerspectiveEnabled:a.screenSizePerspective,verticalOffsetEnabled:a.verticalOffset,offsetBackfaces:a.offsetBackfaces,doublePrecisionRequiresObfuscation:Object(T.b)(e.rctx),alphaDiscardMode:a.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:a.multipassTerrainEnabled,cullAboveGround:a.cullAboveGround});return new _.a(e.rctx,o,A.a)}bindPass(e,t){var a,o;Object(M.c)(this.program,t.camera.projectionMatrix);const r=this.configuration.output;(1===this.configuration.output||t.multipassTerrainEnabled||3===r)&&this.program.setUniform2fv("cameraNearFar",t.camera.nearFar),t.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",t.inverseViewport),Object(x.a)(this.program,t)),7===r&&(this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",v.b[e.colorMixMode])),0===r?(t.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",e.ambient),this.program.setUniform3fv("diffuse",e.diffuse),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",v.b[e.colorMixMode]),this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.configuration.usePBR&&Object(O.b)(this.program,e,this.configuration.isSchematic)):4===r&&Object(g.b)(this.program,t),Object(C.c)(this.program,e),Object(b.b)(this.program,e,t),Object(v.a)(e.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==e.textureAlphaMode&&3!==e.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",e.textureAlphaCutoff),null==(a=t.shadowMap)||a.bind(this.program),null==(o=t.ssaoHelper)||o.bind(this.program,t.camera)}bindDraw(e){const t=this.configuration.instancedDoublePrecision?Object(i.h)(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;Object(M.e)(this.program,t,e.camera.viewMatrix),this.program.rebindTextures(),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&Object(M.a)(this.program,t,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&h.a.bindCustomOrigin(this.program,t),Object(f.b)(this.program,this.configuration,e.slicePlane,t),0===this.configuration.output&&Object(y.d)(this.program,e,t)}setPipeline(e,t){const a=this.configuration,o=3===e,r=2===e;return Object(E.f)({blending:0!==a.output&&7!==a.output||!a.transparent?null:o?d.g:Object(d.a)(e),culling:F(a)&&Object(E.b)(a.cullFace),depthTest:{func:Object(d.b)(e)},depthWrite:o||r?a.writeDepth&&E.d:null,colorWrite:E.c,stencilWrite:a.sceneHasOcludees?P.h:null,stencilTest:a.sceneHasOcludees?t?P.d:P.c:null,polygonOffset:o||r?null:Object(d.h)(a.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function F(e){return e.cullFace?0!==e.cullFace:!e.slicePlaneEnabled&&!e.transparent&&!e.doubleSidedMode}L.shader=new w.a(R.a,(()=>a.e(323).then(a.bind(null,1361))));class D extends S.a{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1}}Object(p.a)([Object(S.b)({count:8})],D.prototype,"output",void 0),Object(p.a)([Object(S.b)({count:4})],D.prototype,"alphaDiscardMode",void 0),Object(p.a)([Object(S.b)({count:3})],D.prototype,"doubleSidedMode",void 0),Object(p.a)([Object(S.b)()],D.prototype,"isSchematic",void 0),Object(p.a)([Object(S.b)()],D.prototype,"vertexColors",void 0),Object(p.a)([Object(S.b)()],D.prototype,"offsetBackfaces",void 0),Object(p.a)([Object(S.b)()],D.prototype,"symbolColors",void 0),Object(p.a)([Object(S.b)()],D.prototype,"vvSize",void 0),Object(p.a)([Object(S.b)()],D.prototype,"vvColor",void 0),Object(p.a)([Object(S.b)()],D.prototype,"verticalOffset",void 0),Object(p.a)([Object(S.b)()],D.prototype,"receiveShadows",void 0),Object(p.a)([Object(S.b)()],D.prototype,"slicePlaneEnabled",void 0),Object(p.a)([Object(S.b)()],D.prototype,"sliceHighlightDisabled",void 0),Object(p.a)([Object(S.b)()],D.prototype,"receiveAmbientOcclusion",void 0),Object(p.a)([Object(S.b)()],D.prototype,"screenSizePerspective",void 0),Object(p.a)([Object(S.b)()],D.prototype,"textureAlphaPremultiplied",void 0),Object(p.a)([Object(S.b)()],D.prototype,"hasColorTexture",void 0),Object(p.a)([Object(S.b)()],D.prototype,"usePBR",void 0),Object(p.a)([Object(S.b)()],D.prototype,"hasMetalnessAndRoughnessTexture",void 0),Object(p.a)([Object(S.b)()],D.prototype,"hasEmissionTexture",void 0),Object(p.a)([Object(S.b)()],D.prototype,"hasOcclusionTexture",void 0),Object(p.a)([Object(S.b)()],D.prototype,"hasNormalTexture",void 0),Object(p.a)([Object(S.b)()],D.prototype,"instanced",void 0),Object(p.a)([Object(S.b)()],D.prototype,"instancedColor",void 0),Object(p.a)([Object(S.b)()],D.prototype,"instancedDoublePrecision",void 0),Object(p.a)([Object(S.b)()],D.prototype,"vertexTangents",void 0),Object(p.a)([Object(S.b)()],D.prototype,"normalsTypeDerivate",void 0),Object(p.a)([Object(S.b)()],D.prototype,"writeDepth",void 0),Object(p.a)([Object(S.b)()],D.prototype,"sceneHasOcludees",void 0),Object(p.a)([Object(S.b)()],D.prototype,"transparent",void 0),Object(p.a)([Object(S.b)()],D.prototype,"enableOffset",void 0),Object(p.a)([Object(S.b)({count:3})],D.prototype,"cullFace",void 0),Object(p.a)([Object(S.b)({count:4})],D.prototype,"transparencyPassType",void 0),Object(p.a)([Object(S.b)()],D.prototype,"multipassTerrainEnabled",void 0),Object(p.a)([Object(S.b)()],D.prototype,"cullAboveGround",void 0);var z=a(966);class B extends L{initializeProgram(e){const t=B.shader.get(),a=this.configuration,o=t.build({OITEnabled:0===a.transparencyPassType,output:a.output,viewingMode:e.viewingMode,receiveShadows:a.receiveShadows,slicePlaneEnabled:a.slicePlaneEnabled,sliceHighlightDisabled:a.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:a.symbolColors,vvSize:a.vvSize,vvColor:a.vvColor,vvInstancingEnabled:!0,instanced:a.instanced,instancedColor:a.instancedColor,instancedDoublePrecision:a.instancedDoublePrecision,pbrMode:a.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:a.hasColorTexture,receiveAmbientOcclusion:a.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangents:!1,attributeTextureCoordinates:a.hasColorTexture?1:0,textureAlphaPremultiplied:a.textureAlphaPremultiplied,attributeColor:a.vertexColors,screenSizePerspectiveEnabled:a.screenSizePerspective,verticalOffsetEnabled:a.verticalOffset,offsetBackfaces:a.offsetBackfaces,doublePrecisionRequiresObfuscation:Object(T.b)(e.rctx),alphaDiscardMode:a.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:a.multipassTerrainEnabled,cullAboveGround:a.cullAboveGround});return new _.a(e.rctx,o,A.a)}}B.shader=new w.a(z.a,(()=>a.e(320).then(a.bind(null,1362))));class N extends l.a{constructor(e){super(e,V),this.supportsEdges=!0,this.techniqueConfig=new D,this.vertexBufferLayout=function(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,a=Object(n.a)().vec3f("position").vec3f("normal");return e.vertexTangents&&a.vec4f("tangent"),t&&a.vec2f("uv0"),e.vertexColors&&a.vec4u8("color"),e.symbolColors&&a.vec4u8("symbolColor"),a}(this.parameters),this.instanceBufferLayout=e.instanced?G(this.parameters):null}isVisibleInPass(e){return 4!==e&&6!==e&&7!==e||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,a=e.vertexColors,o=e.symbolColors,r=!!t&&t.indexOf("color")>-1,i=e.vvColorEnabled,n="replace"===e.colorMixMode,s=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0;return a&&(r||i||o)?!!n||s:a?n?c:s:r||i||o?!!n||s:n?c:s}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.parameters.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.parameters.textureId,this.techniqueConfig.vertexTangents=this.parameters.vertexTangents,this.techniqueConfig.instanced=!!this.parameters.instanced,this.techniqueConfig.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.parameters.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.parameters.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.parameters.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.parameters.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.parameters.normals,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.cullFace=this.parameters.slicePlaneEnabled?0:this.parameters.cullFace,this.techniqueConfig.multipassTerrainEnabled=t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=t.cullAboveGround,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.parameters.vertexColors,this.techniqueConfig.symbolColors=this.parameters.symbolColors,this.parameters.treeRendering?this.techniqueConfig.doubleSidedMode=2:this.techniqueConfig.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?1:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.parameters.instanced&&this.parameters.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!!t.ssaoEnabled&&this.parameters.receiveSSAO,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.parameters.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.parameters.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.parameters.usePBR&&this.parameters.isSchematic,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.enableOffset=t.camera.relativeElevation<d.e),this.techniqueConfig}intersect(e,t,a,o,i,n,s){if(null!==this.parameters.verticalOffset){const e=o.camera;Object(r.w)(X,a[12],a[13],a[14]);let t=null;switch(o.viewingMode){case 1:t=Object(r.r)(U,X);break;case 2:t=Object(r.k)(U,W)}let s=0;if(null!==this.parameters.verticalOffset){const a=Object(r.j)(J,X,e.eye),o=Object(r.p)(a),i=Object(r.e)(a,a,1/o);let n=null;this.parameters.screenSizePerspective&&(n=Object(r.h)(t,i)),s+=Object(v.i)(e,o,this.parameters.verticalOffset,n,this.parameters.screenSizePerspective)}Object(r.e)(t,t,s),Object(r.x)(k,t,o.transform.inverseRotation),i=Object(r.j)(H,i,k),n=Object(r.j)(q,n,k)}Object(v.f)(e,t,o,i,n,Object(u.c)(o.verticalOffset),s)}requiresSlot(e){return e===(this.parameters.transparent?this.parameters.writeDepth?4:7:2)||20===e}createGLMaterial(e){return 0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output?new I(e):null}createBufferWriter(){return new $(this.vertexBufferLayout,this.instanceBufferLayout)}}class I extends c.a{constructor(e){super({...e,...e.material.parameters})}updateParameters(e){const t=this._material.parameters;return this.updateTexture(t.textureId),this.ensureTechnique(t.treeRendering?B:L,e)}_updateShadowState(e){e.shadowMappingEnabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:e.hasOccludees})}beginSlot(e){return 0!==this._output&&7!==this._output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,t){t.bindPass(this._material.parameters,e),this.bindTextures(t.program)}}const V={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:2,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:Object(o.b)(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:s.b,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,...l.b};class ${constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get("position").length}write(e,t,a,o){Object(m.c)(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,a,o)}}function G(e){let t=Object(n.a)();return t=e.instancedDoublePrecision?t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):t.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f("instanceFeatureAttribute")),t}const H=Object(i.f)(),q=Object(i.f)(),W=Object(i.h)(0,0,1),U=Object(i.f)(),k=Object(i.f)(),X=Object(i.f)(),J=Object(i.f)()},782:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var o,r=a(106),i=a(783),n=a(136),s=a(767);function c(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),t.instancedDoublePrecision&&(e.vertex.include(i.a,t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const a=[n.a`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,n.a`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?n.a`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,n.a`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,n.a`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,t.vertexTangents?n.a`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:n.a``];e.vertex.code.add(a[0]),e.vertex.code.add(a[1]),e.vertex.code.add(a[2]),2===t.output&&e.vertex.code.add(a[3]),e.vertex.code.add(a[4])}(o=c||(c={})).Uniforms=class{},o.bindCustomOrigin=function(e,t){Object(s.b)(t,l,d,3),e.setUniform3fv("viewOriginHi",l),e.setUniform3fv("viewOriginLo",d)};const l=Object(r.f)(),d=Object(r.f)()},783:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return n}));var o=a(82),r=a(136);function i({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(r.a`vec3 dpPlusFrc(vec3 a, vec3 b) {
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
}`):e.add(r.a`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function n(e){return!!Object(o.a)("force-double-precision-obfuscation")||e.driverTest.doublePrecisionRequiresObfuscation}},784:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return s}));var o=a(431),r=a(1011),i=a(136);Object(o.c)(0,.6,.2);function n(e,t){const a=e.fragment,o=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;1===t.pbrMode&&o&&e.include(r.a,t),2!==t.pbrMode?(0===t.pbrMode&&a.code.add(i.a`float getBakedOcclusion() { return 1.0; }`),1===t.pbrMode&&(a.uniforms.add("emissionFactor","vec3"),a.uniforms.add("mrrFactors","vec3"),a.code.add(i.a`vec3 mrr;
vec3 emission;
float occlusion;`),t.hasMetalnessAndRoughnessTexture&&(a.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&a.uniforms.add("texMetallicRoughnessSize","vec2"),a.code.add(i.a`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(a.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&a.uniforms.add("texEmissionSize","vec2"),a.code.add(i.a`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(a.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&a.uniforms.add("texOcclusionSize","vec2"),a.code.add(i.a`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):a.code.add(i.a`float getBakedOcclusion() { return 1.0; }`),a.code.add(i.a`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${o?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):a.code.add(i.a`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function s(e,t,a=!1){a||(e.setUniform3fv("mrrFactors",t.mrrFactors),e.setUniform3fv("emissionFactor",t.emissiveFactor))}},790:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var o=a(136);function r(e,t){const a=e.fragment,r=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===r?(a.uniforms.add("lightingAmbientSH0","vec3"),a.code.add(o.a`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===r?(a.uniforms.add("lightingAmbientSH_R","vec4"),a.uniforms.add("lightingAmbientSH_G","vec4"),a.uniforms.add("lightingAmbientSH_B","vec4"),a.code.add(o.a`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):2===r&&(a.uniforms.add("lightingAmbientSH0","vec3"),a.uniforms.add("lightingAmbientSH_R1","vec4"),a.uniforms.add("lightingAmbientSH_G1","vec4"),a.uniforms.add("lightingAmbientSH_B1","vec4"),a.uniforms.add("lightingAmbientSH_R2","vec4"),a.uniforms.add("lightingAmbientSH_G2","vec4"),a.uniforms.add("lightingAmbientSH_B2","vec4"),a.code.add(o.a`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),1!==t.pbrMode&&2!==t.pbrMode||a.code.add(o.a`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}var i=a(715);function n(e){const t=e.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.code.add(o.a`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}var s=a(752),c=a(905),l=a(604);function d(e,t){const a=e.fragment;e.include(n),e.include(i.a,t),0!==t.pbrMode&&e.include(s.a,t),e.include(r,t),t.receiveShadows&&e.include(l.a,t),a.uniforms.add("lightingGlobalFactor","float"),a.uniforms.add("ambientBoostFactor","float"),e.include(c.a),a.code.add(o.a`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===t.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),a.code.add(o.a`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${1===t.viewingMode?o.a`normalize(vPosWorld)`:o.a`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),a.code.add(o.a`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),0===t.pbrMode||4===t.pbrMode?a.code.add(o.a`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):1!==t.pbrMode&&2!==t.pbrMode||(a.code.add(o.a`const float fillLightIntensity = 0.25;
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
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),a.code.add(o.a`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),a.code.add(o.a`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = abs(dot(normal, ambientDir));
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),a.code.add(o.a`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),a.code.add(o.a`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===t.pbrMode?o.a`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:o.a`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}},861:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var o=a(136);function r(e){e.vertex.code.add(o.a`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},862:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var o=a(306),r=a(441),i=a(720),n=a(714),s=a(877),c=a(634),l=a(402),d=a(623),u=a(406),m=a(136);function v(e,t){const a=e.vertex.code,v=e.fragment.code;1!==t.output&&3!==t.output||(e.include(r.a,{linearDepth:!0}),e.include(n.a,t),e.include(d.a,t),e.include(c.a,t),e.include(o.a,t),e.vertex.uniforms.add("cameraNearFar","vec2"),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),a.add(m.a`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, cameraNearFar, depth);
forwardTextureCoordinates();
}`),e.include(u.a,t),v.add(m.a`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?m.a`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===t.output&&(e.include(r.a,{linearDepth:!1}),e.include(i.a,t),e.include(s.a,t),e.include(n.a,t),e.include(d.a,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),a.add(m.a`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===t.normalType?m.a`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(o.a,t),e.include(u.a,t),v.add(m.a`
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
    `)),4===t.output&&(e.include(r.a,{linearDepth:!1}),e.include(n.a,t),e.include(d.a,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),a.add(m.a`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(o.a,t),e.include(u.a,t),e.include(l.a),v.add(m.a`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?m.a`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}},863:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var o=a(467),r=a(136);function i(e){e.include(o.a),e.code.add(r.a`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${r.a.int(1)}) {
        return allMixed;
      }
      else if (mode == ${r.a.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${r.a.int(3)}) {
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

      if (mode == ${r.a.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${r.a.int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}},876:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var o=a(136);function r(e){e.vertex.code.add(o.a`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${o.a.int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${o.a.int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${o.a.int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${o.a.int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function i(e,t){t.symbolColor?(e.include(r),e.attributes.add("symbolColor","vec4"),e.varyings.add("colorMixMode","mediump float")):e.fragment.uniforms.add("colorMixMode","int"),t.symbolColor?e.vertex.code.add(o.a`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`):e.vertex.code.add(o.a`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`)}},877:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var o=a(720),r=a(331),i=a(199),n=a(106),s=a(746),c=a(783),l=a(136);function d(e,t){e.include(s.a),e.vertex.include(c.a,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),e.vertex.uniforms.add("uTransform_ProjFromView","mat4"),e.vertex.code.add(l.a`vec3 positionWorldCameraRelative() {
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
}`)}function u(e,t){0===t.normalType||1===t.normalType?(e.include(o.a,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),e.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),e.vertex.code.add(l.a`void forwardNormal() {
vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
}`)):2===t.normalType?(e.include(d,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(l.a`
    void forwardNormal() {
      vNormalWorld = ${1===t.viewingMode?l.a`normalize(vPositionWorldCameraRelative);`:l.a`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(l.a`void forwardNormal() {}`)}!function(e){e.ModelTransform=class{constructor(){this.worldFromModel_RS=Object(r.b)(),this.worldFromModel_TH=Object(n.f)(),this.worldFromModel_TL=Object(n.f)()}};e.ViewProjectionTransform=class{constructor(){this.worldFromView_TH=Object(n.f)(),this.worldFromView_TL=Object(n.f)(),this.viewFromCameraRelative_RS=Object(r.b)(),this.projFromView=Object(i.d)()}},e.bindModelTransform=function(e,t){e.setUniformMatrix3fv("uTransform_WorldFromModel_RS",t.worldFromModel_RS),e.setUniform3fv("uTransform_WorldFromModel_TH",t.worldFromModel_TH),e.setUniform3fv("uTransform_WorldFromModel_TL",t.worldFromModel_TL)},e.bindViewProjTransform=function(e,t){e.setUniform3fv("uTransform_WorldFromView_TH",t.worldFromView_TH),e.setUniform3fv("uTransform_WorldFromView_TL",t.worldFromView_TL),e.setUniformMatrix4fv("uTransform_ProjFromView",t.projFromView),e.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",t.viewFromCameraRelative_RS)}}(d||(d={})),(u||(u={})).bindUniforms=function(e,t){e.setUniformMatrix4fv("viewNormal",t)}},911:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var o=a(136);function r(e,t){const a=e.fragment;a.code.add(o.a`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),1===t.doubleSidedMode?a.code.add(o.a`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`):2===t.doubleSidedMode?a.code.add(o.a`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`):a.code.add(o.a`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`)}},965:function(e,t,a){"use strict";a.d(t,"a",(function(){return E})),a.d(t,"b",(function(){return R}));var o=a(711),r=a(861),i=a(306),n=a(441),s=a(782),c=a(720),l=a(746),d=a(876),u=a(714),m=a(603),v=a(877),p=a(709),f=a(862),h=a(401),b=a(1042),g=a(715),x=a(790),O=a(352),y=a(911),C=a(752),T=a(784),M=a(604),w=a(623),j=a(406),S=a(1043),A=a(863),_=a(136),P=a(342);function R(e){const t=new P.a,a=t.vertex.code,R=t.fragment.code;return t.include(S.a,{name:"Default Material Shader",output:e.output}),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(l.a),t.varyings.add("vpos","vec3"),t.include(w.a,e),t.include(s.a,e),t.include(p.a,e),0!==e.output&&7!==e.output||(t.include(c.a,e),t.include(n.a,{linearDepth:!1}),0===e.normalType&&e.offsetBackfaces&&t.include(r.a),t.include(b.a,e),t.include(v.a,e),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("localvpos","vec3"),t.include(u.a,e),t.include(o.a,e),t.include(d.a,e),t.include(m.a,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),a.add(_.a`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${_.a.float(j.c)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===e.normalType?_.a`
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
    `)),7===e.output&&(t.include(i.a,e),t.include(j.a,e),e.multipassTerrainEnabled&&(t.fragment.include(h.a),t.include(O.b,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(A.a),R.add(_.a`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?_.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:_.a`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?_.a`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:_.a`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(i.a,e),t.include(x.a,e),t.include(g.a,e),t.include(j.a,e),e.receiveShadows&&t.include(M.a,e),e.multipassTerrainEnabled&&(t.fragment.include(h.a),t.include(O.b,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(T.a,e),t.include(C.a,e),t.fragment.include(A.a),t.include(y.a,e),R.add(_.a`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?_.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:_.a`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===e.normalType?_.a`
        vec3 normal = screenDerivativeNormal(localvpos);`:_.a`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?_.a`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:_.a`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${e.hasNormalTexture?_.a`
              mat3 tangentSpace = ${e.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?_.a`vec3 normalGround = normalize(vpos + localOrigin);`:_.a`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:_.a``}
        ${1===e.pbrMode||2===e.pbrMode?_.a`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(f.a,e),t}const E=Object.freeze({__proto__:null,build:R})},966:function(e,t,a){"use strict";a.d(t,"a",(function(){return A})),a.d(t,"b",(function(){return S}));var o=a(711),r=a(861),i=a(306),n=a(441),s=a(782),c=a(720),l=a(746),d=a(876),u=a(714),m=a(603),v=a(709),p=a(862),f=a(401),h=a(715),b=a(790),g=a(352),x=a(752),O=a(784),y=a(604),C=a(623),T=a(406),M=a(863),w=a(136),j=a(342);function S(e){const t=new j.a,a=t.vertex.code,S=t.fragment.code;return t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(l.a),t.varyings.add("vpos","vec3"),t.include(C.a,e),t.include(s.a,e),t.include(v.a,e),0!==e.output&&7!==e.output||(t.include(c.a,e),t.include(n.a,{linearDepth:!1}),e.offsetBackfaces&&t.include(r.a),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.include(u.a,e),t.include(o.a,e),t.include(d.a,e),t.include(m.a,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),a.add(w.a`
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
      `)),7===e.output&&(t.include(i.a,e),t.include(T.a,e),e.multipassTerrainEnabled&&(t.fragment.include(f.a),t.include(g.b,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(M.a),S.add(w.a`
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
    `)),0===e.output&&(t.include(i.a,e),t.include(b.a,e),t.include(h.a,e),t.include(T.a,e),e.receiveShadows&&t.include(y.a,e),e.multipassTerrainEnabled&&(t.fragment.include(f.a),t.include(g.b,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(O.a,e),t.include(x.a,e),t.fragment.include(M.a),S.add(w.a`
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
    `)),t.include(p.a,e),t}const A=Object.freeze({__proto__:null,build:S})}}]);
//# sourceMappingURL=115.97e0d457.chunk.js.map