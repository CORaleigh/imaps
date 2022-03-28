(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[103],{1012:function(e,t,r){"use strict";r.d(t,"a",(function(){return L})),r.d(t,"b",(function(){return N}));var i=r(272),n=r(732),a=r(898),o=r(210),s=r(301),c=r(478),l=r(830),u=r(703),d=r(802),f=r(914),h=r(639),m=r(624),p=r(915),v=r(731),b=r(899),g=r(410),O=r(1090),x=r(773),_=r(832),T=r(356),A=r(689),S=r(754),M=r(502),C=r(625),E=r(623),y=r(397),w=r(1091),P=r(900),R=r(126),I=r(297),j=r(139);function N(e){const t=new I.a,r=t.vertex.code,N=t.fragment.code;t.include(w.a,{name:"Default Material Shader",output:e.output}),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraPosition","vec3").add("localOrigin","vec3");const L=e.hasModelTransformation;return L&&t.vertex.uniforms.add("model","mat4"),t.include(d.a),t.varyings.add("vpos","vec3"),t.include(E.a,e),t.include(l.a,e),t.include(v.a,e),e.output!==o.a.Color&&e.output!==o.a.Alpha||(t.include(u.a,e),t.include(c.a,{linearDepth:!1,hasModelTransformation:L}),e.normalType===u.b.Attribute&&e.offsetBackfaces&&t.include(a.a),t.include(O.a,e),t.include(p.a,e),e.instancedColor&&t.attributes.add(j.a.INSTANCECOLOR,"vec4"),t.varyings.add("localvpos","vec3"),t.include(h.a,e),t.include(n.a,e),t.include(f.a,e),t.include(m.a,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),r.add(R.a`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${R.a.float(y.c)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${e.normalType===u.b.Attribute?R.a`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.vertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${L?"model,":""} vpos);
          ${e.normalType===u.b.Attribute&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),e.output===o.a.Alpha&&(t.include(s.a,e),t.include(y.a,e),e.multipassTerrainEnabled&&(t.fragment.include(g.a),t.include(T.b,e)),t.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(P.a),N.add(R.a`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?R.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:R.a`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?R.a`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:R.a`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===o.a.Color&&(t.include(s.a,e),t.include(_.a,e),t.include(x.a,e),t.include(y.a,e),e.receiveShadows&&t.include(C.a,e),e.multipassTerrainEnabled&&(t.fragment.include(g.a),t.include(T.b,e)),t.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(M.b,e),t.include(S.a,e),t.fragment.include(P.a),t.include(A.a,e),N.add(R.a`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?R.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:R.a`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===u.b.ScreenDerivative?R.a`
        vec3 normal = screenDerivativeNormal(localvpos);`:R.a`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===M.a.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.viewingMode===i.a.Global?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?R.a`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:R.a`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${e.hasNormalTexture?R.a`
              mat3 tangentSpace = ${e.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${e.pbrMode===M.a.Normal||e.pbrMode===M.a.Schematic?e.viewingMode===i.a.Global?R.a`vec3 normalGround = normalize(vpos + localOrigin);`:R.a`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:R.a``}
        ${e.pbrMode===M.a.Normal||e.pbrMode===M.a.Schematic?R.a`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(b.a,e),t}const L=Object.freeze({__proto__:null,build:N})},1013:function(e,t,r){"use strict";r.d(t,"a",(function(){return R})),r.d(t,"b",(function(){return P}));var i=r(272),n=r(732),a=r(898),o=r(210),s=r(301),c=r(478),l=r(830),u=r(703),d=r(802),f=r(914),h=r(639),m=r(624),p=r(731),v=r(899),b=r(410),g=r(773),O=r(832),x=r(356),_=r(754),T=r(502),A=r(625),S=r(623),M=r(397),C=r(900),E=r(126),y=r(297),w=r(139);function P(e){const t=new y.a,r=t.vertex.code,P=t.fragment.code;return t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraPosition","vec3").add("localOrigin","vec3"),t.include(d.a),t.varyings.add("vpos","vec3"),t.include(S.a,e),t.include(l.a,e),t.include(p.a,e),e.output!==o.a.Color&&e.output!==o.a.Alpha||(t.include(u.a,e),t.include(c.a,{linearDepth:!1}),e.offsetBackfaces&&t.include(a.a),e.instancedColor&&t.attributes.add(w.a.INSTANCECOLOR,"vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.include(h.a,e),t.include(n.a,e),t.include(f.a,e),t.include(m.a,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),r.add(E.a`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${E.a.float(M.c)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.multipassTerrainEnabled?E.a`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===o.a.Alpha&&(t.include(s.a,e),t.include(M.a,e),e.multipassTerrainEnabled&&(t.fragment.include(b.a),t.include(x.b,e)),t.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(C.a),P.add(E.a`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?E.a`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?E.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:E.a`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?E.a`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:E.a`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===o.a.Color&&(t.include(s.a,e),t.include(O.a,e),t.include(g.a,e),t.include(M.a,e),e.receiveShadows&&t.include(A.a,e),e.multipassTerrainEnabled&&(t.fragment.include(b.a),t.include(x.b,e)),t.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(T.b,e),t.include(_.a,e),t.fragment.include(C.a),P.add(E.a`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?E.a`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?E.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:E.a`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===T.a.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.viewingMode===i.a.Global?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?E.a`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:E.a`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${E.a`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${e.pbrMode===T.a.Normal||e.pbrMode===T.a.Schematic?e.viewingMode===i.a.Global?E.a`vec3 normalGround = normalize(vpos + localOrigin);`:E.a`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:E.a``}
        ${e.pbrMode===T.a.Normal||e.pbrMode===T.a.Schematic?E.a`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(v.a,e),t}const R=Object.freeze({__proto__:null,build:P})},1090:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var i=r(639),n=r(913),a=r(689),o=r(126),s=r(139);function c(e,t){const r=e.fragment;t.vertexTangents?(e.attributes.add(s.a.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===a.b.WindingOrder?r.code.add(o.a`mat3 computeTangentSpace(vec3 normal) {
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
}`)),t.attributeTextureCoordinates!==i.b.None&&(e.include(n.a,t),r.uniforms.add("normalTexture","sampler2D"),r.uniforms.add("normalTextureSize","vec2"),r.code.add(o.a`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}},1091:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(210),n=r(126),a=r(493);function o(e,t){const r=n.a`
  /*
  *  ${t.name}
  *  ${t.output===i.a.Color?"RenderOutput: Color":t.output===i.a.Depth?"RenderOutput: Depth":t.output===i.a.Shadow?"RenderOutput: Shadow":t.output===i.a.Normal?"RenderOutput: Normal":t.output===i.a.Highlight?"RenderOutput: Highlight":""}
  */
  `;Object(a.c)()&&(e.fragment.code.add(r),e.vertex.code.add(r))}},1188:function(e,t,r){"use strict";r.r(t),r.d(t,"fetch",(function(){return W})),r.d(t,"gltfToEngineResources",(function(){return $})),r.d(t,"parseUrl",(function(){return q}));var i=r(487),n=r(85),a=r(233),o=r(367),s=r(147),c=r(200),l=r(117),u=r(109),d=r(223),f=r(421),h=r(744),m=r(1150),p=r(1182),v=r(1152),b=r(1179),g=r(1153),O=r(103),x=r(298),_=r(88),T=r(87),A=r(91),S=r(719),M=r(819),C=r(163),E=r(595),y=r(750),w=r(804),P=r(94);const R=T.a.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function I(e,t){const r=await async function(e,t){const r=Object(n.k)(t)&&t.streamDataRequester;if(r)return async function(e,t,r){const i=await Object(x.c)(t.request(e,"json",r));if(!0===i.ok)return i.value;Object(A.s)(i.error),j(i.error.details.url)}(e,r,t);const i=await Object(x.c)(Object(O.default)(e,Object(n.s)(t)));if(!0===i.ok)return i.value.data;Object(A.s)(i.error),j(i.error)}(e,t);return{resource:r,textures:await D(r.textureDefinitions,t)}}function j(e){throw new _.a("",`Request for object resource failed: ${e}`)}function N(e){const t=e.params,r=t.topology;let i=!0;switch(t.vertexAttributes||(R.warn("Geometry must specify vertex attributes"),i=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(R.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),i=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(R.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),i=!1)):(R.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),i=!1)}}else R.warn("Indexed geometries must specify faces"),i=!1;break}default:R.warn(`Unsupported topology '${r}'`),i=!1}e.params.material||(R.warn("Geometry requires material"),i=!1);const n=e.params.vertexAttributes;for(const a in n)n[a].values||(R.warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function L(e){const t=Object(d.h)();return e.forEach((e=>{const r=e.boundingInfo;Object(n.k)(r)&&(Object(d.n)(t,r.getBBMin()),Object(d.n)(t,r.getBBMax()))})),t}async function D(e,t){const r=[];for(const o in e){const i=e[o],a=i.images[0].data;if(!a){R.warn("Externally referenced texture data is not yet supported");continue}const s=i.encoding+";base64,"+a,c="/textureDefinitions/"+o,l="rgba"===i.channels?i.alphaChannelUsage||"transparency":"none",u={noUnpackFlip:!0,wrap:{s:P.B.REPEAT,t:P.B.REPEAT},preMultiplyAlpha:F(l)!==C.a.Opaque},d=Object(n.k)(t)&&t.disableTextures?Promise.resolve(null):Object(M.a)(s,t);r.push(d.then((e=>({refId:c,image:e,params:u,alphaChannelUsage:l}))))}const i=await Promise.all(r),a={};for(const n of i)a[n.refId]=n;return a}function F(e){switch(e){case"mask":return C.a.Mask;case"maskAndTransparency":return C.a.MaskBlend;case"none":return C.a.Opaque;default:return C.a.Blend}}function z(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const B=new S.a(1,2,"wosr");var U=r(139),G=r(1154),H=r(1014),V=r(1015),k=r(883);async function W(e,t){const r=q(Object(i.a)(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):I(r.url,t)),i=function(e,t){const r=[],i=[],a=[],o=[],s=e.resource,c=S.a.parse(s.version||"1.0","wosr");B.validate(c);const l=s.model.name,d=s.model.geometries,f=s.materialDefinitions,h=e.textures;let m=0;const p=new Map;for(let v=0;v<d.length;v++){const e=d[v];if(!N(e))continue;const s=z(e),c=e.params.vertexAttributes,l=[];for(const t in c){const e=c[t],r=e.values;l.push([t,{data:r,size:e.valuesPerElement,exclusive:!0}])}const b=[];if("PerAttributeArray"!==e.params.topology){const t=e.params.faces;for(const e in t)b.push([e,new Uint32Array(t[e].values)])}const g=h&&h[s.texture];if(g&&!p.has(s.texture)){const{image:e,params:t}=g,r=new y.a(e,t);o.push(r),p.set(s.texture,r)}const O=p.get(s.texture),x=O?O.id:void 0;let _=a[s.material]?a[s.material][s.texture]:null;if(!_){const e=f[s.material.substring(s.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=g&&g.alphaChannelUsage,i=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,o=g?F(g.alphaChannelUsage):void 0,c={ambient:Object(u.g)(e.diffuse),diffuse:Object(u.g)(e.diffuse),opacity:1-(e.transparency||0),transparent:i,textureAlphaMode:o,textureAlphaCutoff:.33,textureId:x,initTextureTransparent:!0,doubleSided:!0,cullFace:C.b.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!g&&!!g.params.preMultiplyAlpha};Object(n.k)(t)&&t.materialParamsMixin&&Object.assign(c,t.materialParamsMixin),_=new w.a(c),a[s.material]||(a[s.material]={}),a[s.material][s.texture]=_}i.push(_);const T=new E.a(l,b);m+=b.position?b.position.length:0,r.push(T)}return{name:l,stageResources:{textures:o,materials:i,geometries:r},pivotOffset:s.model.pivotOffset,boundingBox:L(r),numberOfVertices:m,lodThreshold:null}}(e,t);return{lods:[i],referenceBoundingBox:i.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const a=await(t.cache?t.cache.loadGLTF(r.url,t,t.usePBR):Object(b.a)(new v.a(t.streamDataRequester),r.url,t,t.usePBR)),o=Object(n.i)(a.model.meta,"ESRI_proxyEllipsoid");a.meta.isEsriSymbolResource&&Object(n.k)(o)&&-1!==a.meta.uri.indexOf("/RealisticTrees/")&&function(e,t){for(let r=0;r<e.model.lods.length;++r){const i=e.model.lods[r];e.customMeta.esriTreeRendering=!0;for(const a of i.parts){const i=a.attributes.normal;if(Object(n.j)(i))return;const o=a.attributes.position,d=o.count,h=Object(u.f)(),m=Object(u.f)(),v=Object(u.f)(),b=Object(p.a)(f.J,d),g=Object(p.a)(f.u,d),O=Object(s.a)(Object(c.d)(),a.transform);for(let n=0;n<d;n++){o.getVec(n,m),i.getVec(n,h),Object(l.q)(m,m,a.transform),Object(l.j)(v,m,t.center),Object(l.b)(v,v,t.radius);const s=v[2],c=Object(l.p)(v),u=Math.min(.45+.55*c*c,1);Object(l.b)(v,v,t.radius),Object(l.q)(v,v,O),Object(l.r)(v,v),r+1!==e.model.lods.length&&e.model.lods.length>1&&Object(l.i)(v,v,h,s>-1?.2:Math.min(-4*s-3.8,1)),g.setVec(n,v),b.set(n,0,255*u),b.set(n,1,255*u),b.set(n,2,255*u),b.set(n,3,255)}a.attributes.normal=g,a.attributes.color=b}}}(a,o);const d=a.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:a.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:t.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},h={...t.materialParamsMixin,treeRendering:a.customMeta.esriTreeRendering};if(null!=r.specifiedLodIndex){const e=$(a,d,h,r.specifiedLodIndex);let t=e[0].boundingBox;return 0!==r.specifiedLodIndex&&(t=$(a,d,h,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1,remove:a.remove}}const m=$(a,d,h);return{lods:m,referenceBoundingBox:m[0].boundingBox,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1,remove:a.remove}}function q(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function $(e,t,r,i){const s=e.model,c=Object(o.b)(),l=new Array,u=new Map,v=new Map;return s.lods.forEach(((e,o)=>{if(void 0!==i&&o!==i)return;const b={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:Object(n.k)(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:Object(d.h)()};l.push(b),e.parts.forEach((e=>{const i=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),o=s.materials.get(e.material),l=Object(n.k)(e.attributes.texCoord0),O=Object(n.k)(e.attributes.normal),x=function(e){switch(e){case"BLEND":return C.a.Blend;case"MASK":return C.a.Mask;case"OPAQUE":case null:case void 0:return C.a.Opaque}}(o.alphaMode);if(!u.has(i)){if(l){if(Object(n.k)(o.textureColor)&&!v.has(o.textureColor)){const e=s.textures.get(o.textureColor),t={...e.parameters,preMultiplyAlpha:x!==C.a.Opaque};v.set(o.textureColor,new y.a(e.data,t))}if(Object(n.k)(o.textureNormal)&&!v.has(o.textureNormal)){const e=s.textures.get(o.textureNormal);v.set(o.textureNormal,new y.a(e.data,e.parameters))}if(Object(n.k)(o.textureOcclusion)&&!v.has(o.textureOcclusion)){const e=s.textures.get(o.textureOcclusion);v.set(o.textureOcclusion,new y.a(e.data,e.parameters))}if(Object(n.k)(o.textureEmissive)&&!v.has(o.textureEmissive)){const e=s.textures.get(o.textureEmissive);v.set(o.textureEmissive,new y.a(e.data,e.parameters))}if(Object(n.k)(o.textureMetallicRoughness)&&!v.has(o.textureMetallicRoughness)){const e=s.textures.get(o.textureMetallicRoughness);v.set(o.textureMetallicRoughness,new y.a(e.data,e.parameters))}}const a=o.color[0]**(1/G.a),c=o.color[1]**(1/G.a),d=o.color[2]**(1/G.a),f=o.emissiveFactor[0]**(1/G.a),h=o.emissiveFactor[1]**(1/G.a),m=o.emissiveFactor[2]**(1/G.a),p=Object(n.k)(o.textureColor)&&l?v.get(o.textureColor):null;u.set(i,new w.a({...t,transparent:x===C.a.Blend,customDepthTest:C.c.Lequal,textureAlphaMode:x,textureAlphaCutoff:o.alphaCutoff,diffuse:[a,c,d],ambient:[a,c,d],opacity:o.opacity,doubleSided:o.doubleSided,doubleSidedType:"winding-order",cullFace:o.doubleSided?C.b.None:C.b.Back,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:O?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,fillLightsEnabled:!0,textureId:Object(n.k)(p)?p.id:void 0,colorMixMode:o.colorMixMode,normalTextureId:Object(n.k)(o.textureNormal)&&l?v.get(o.textureNormal).id:void 0,textureAlphaPremultiplied:Object(n.k)(p)&&!!p.params.preMultiplyAlpha,occlusionTextureId:Object(n.k)(o.textureOcclusion)&&l?v.get(o.textureOcclusion).id:void 0,emissiveTextureId:Object(n.k)(o.textureEmissive)&&l?v.get(o.textureEmissive).id:void 0,metallicRoughnessTextureId:Object(n.k)(o.textureMetallicRoughness)&&l?v.get(o.textureMetallicRoughness).id:void 0,emissiveFactor:[f,h,m],mrrFactors:[o.metallicFactor,o.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...r}))}const _=function(e,t){switch(t){case P.r.TRIANGLES:return Object(g.c)(e);case P.r.TRIANGLE_STRIP:return Object(g.b)(e);case P.r.TRIANGLE_FAN:return Object(g.a)(e)}}(e.indices||e.attributes.position.count,e.primitiveType),T=e.attributes.position.count,A=Object(p.a)(f.u,T);Object(h.e)(A,e.attributes.position,e.transform);const S=[[U.a.POSITION,{data:A.typedBuffer,size:A.elementCount,exclusive:!0}]],M=[[U.a.POSITION,_]];if(Object(n.k)(e.attributes.normal)){const t=Object(p.a)(f.u,T);Object(a.a)(c,e.transform),Object(h.a)(t,e.attributes.normal,c),S.push([U.a.NORMAL,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),M.push([U.a.NORMAL,_])}if(Object(n.k)(e.attributes.tangent)){const t=Object(p.a)(f.C,T);Object(a.a)(c,e.transform),Object(m.c)(t,e.attributes.tangent,c),S.push([U.a.TANGENT,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),M.push([U.a.TANGENT,_])}if(Object(n.k)(e.attributes.texCoord0)){const t=Object(p.a)(f.m,T);Object(H.b)(t,e.attributes.texCoord0),S.push([U.a.UV0,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),M.push([U.a.UV0,_])}if(Object(n.k)(e.attributes.color)){const t=Object(p.a)(f.J,T);if(4===e.attributes.color.elementCount)e.attributes.color instanceof f.C?Object(m.b)(t,e.attributes.color,255):e.attributes.color instanceof f.J?Object(V.a)(t,e.attributes.color):e.attributes.color instanceof f.H&&Object(m.b)(t,e.attributes.color,1/256);else{Object(V.b)(t,255,255,255,255);const r=new f.B(t.buffer,0,4);e.attributes.color instanceof f.u?Object(h.d)(r,e.attributes.color,255):e.attributes.color instanceof f.B?Object(k.a)(r,e.attributes.color):e.attributes.color instanceof f.z&&Object(h.d)(r,e.attributes.color,1/256)}S.push([U.a.COLOR,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),M.push([U.a.COLOR,_])}const R=new E.a(S,M);b.stageResources.geometries.push(R),b.stageResources.materials.push(u.get(i)),l&&(Object(n.k)(o.textureColor)&&b.stageResources.textures.push(v.get(o.textureColor)),Object(n.k)(o.textureNormal)&&b.stageResources.textures.push(v.get(o.textureNormal)),Object(n.k)(o.textureOcclusion)&&b.stageResources.textures.push(v.get(o.textureOcclusion)),Object(n.k)(o.textureEmissive)&&b.stageResources.textures.push(v.get(o.textureEmissive)),Object(n.k)(o.textureMetallicRoughness)&&b.stageResources.textures.push(v.get(o.textureMetallicRoughness))),b.numberOfVertices+=T;const I=R.boundingInfo;Object(n.k)(I)&&(Object(d.n)(b.boundingBox,I.getBBMin()),Object(d.n)(b.boundingBox,I.getBBMax()))}))})),l}},126:function(e,t,r){"use strict";function i(e,...t){let r="";for(let i=0;i<t.length;i++)r+=e[i]+t[i];return r+=e[e.length-1],r}r.d(t,"a",(function(){return i})),function(e){e.int=function(e){return Math.round(e).toString()},e.float=function(e){return e.toPrecision(8)}}(i||(i={}))},139:function(e,t,r){"use strict";var i;r.d(t,"a",(function(){return i})),function(e){e.POSITION="position",e.NORMAL="normal",e.UV0="uv0",e.AUXPOS1="auxpos1",e.AUXPOS2="auxpos2",e.MAPPOS="mapPos",e.COLOR="color",e.SYMBOLCOLOR="symbolColor",e.SIZE="size",e.TANGENT="tangent",e.OFFSET="offset",e.SUBDIVISIONFACTOR="subdivisionFactor",e.COLORFEATUREATTRIBUTE="colorFeatureAttribute",e.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",e.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",e.DISTANCETOSTART="distanceToStart",e.UVMAPSPACE="uvMapSpace",e.BOUNDINGRECT="boundingRect",e.UVREGION="uvRegion",e.NORMALCOMPRESSED="normalCompressed",e.PROFILERIGHT="profileRight",e.PROFILEUP="profileUp",e.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",e.FEATUREVALUE="featureValue",e.MODELORIGINHI="modelOriginHi",e.MODELORIGINLO="modelOriginLo",e.MODEL="model",e.MODELNORMAL="modelNormal",e.INSTANCECOLOR="instanceColor",e.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",e.LOCALTRANSFORM="localTransform",e.GLOBALTRANSFORM="globalTransform",e.BOUNDINGSPHERE="boundingSphere",e.MODELORIGIN="modelOrigin",e.MODELSCALEFACTORS="modelScaleFactors",e.FEATUREATTRIBUTE="featureAttribute",e.STATE="state",e.LODLEVEL="lodLevel",e.POSITION0="position0",e.POSITION1="position1",e.NORMALA="normalA",e.NORMALB="normalB",e.COMPONENTINDEX="componentIndex",e.VARIANTOFFSET="variantOffset",e.VARIANTSTROKE="variantStroke",e.VARIANTEXTENSION="variantExtension",e.U8PADDING="u8padding",e.U16PADDING="u16padding",e.SIDENESS="sideness",e.START="start",e.END="end",e.UP="up",e.EXTRUDE="extrude"}(i||(i={}))},151:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m})),r.d(t,"c",(function(){return n})),r.d(t,"d",(function(){return I})),r.d(t,"e",(function(){return C})),r.d(t,"f",(function(){return s})),r.d(t,"g",(function(){return f})),r.d(t,"h",(function(){return w})),r.d(t,"i",(function(){return O})),r.d(t,"j",(function(){return _})),r.d(t,"k",(function(){return x})),r.d(t,"l",(function(){return v})),r.d(t,"m",(function(){return o})),r.d(t,"n",(function(){return g})),r.d(t,"o",(function(){return T})),r.d(t,"p",(function(){return A})),r.d(t,"q",(function(){return E})),r.d(t,"r",(function(){return M})),r.d(t,"s",(function(){return a})),r.d(t,"t",(function(){return S})),r.d(t,"u",(function(){return b})),r.d(t,"v",(function(){return h})),r.d(t,"w",(function(){return u})),r.d(t,"x",(function(){return d}));var i=r(189);function n(e,t){return e[0]=t[0],e[1]=t[1],e}function a(e,t,r){return e[0]=t,e[1]=r,e}function o(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e}function s(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e}function c(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e}function l(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e}function u(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e}function d(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e}function f(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e}function h(e,t,r,i){return e[0]=t[0]+r[0]*i,e[1]=t[1]+r[1]*i,e}function m(e,t){const r=t[0]-e[0],i=t[1]-e[1];return Math.sqrt(r*r+i*i)}function p(e,t){const r=t[0]-e[0],i=t[1]-e[1];return r*r+i*i}function v(e){const t=e[0],r=e[1];return Math.sqrt(t*t+r*r)}function b(e){const t=e[0],r=e[1];return t*t+r*r}function g(e,t){return e[0]=-t[0],e[1]=-t[1],e}function O(e,t){const r=t[0],i=t[1];let n=r*r+i*i;return n>0&&(n=1/Math.sqrt(n),e[0]=t[0]*n,e[1]=t[1]*n),e}function x(e,t){return e[0]*t[0]+e[1]*t[1]}function _(e,t,r){const i=t[0]*r[1]-t[1]*r[0];return e[0]=e[1]=0,e[2]=i,e}function T(e,t,r,i){const n=t[0],a=t[1];return e[0]=n+i*(r[0]-n),e[1]=a+i*(r[1]-a),e}function A(e,t,r){const i=t[0],n=t[1];return e[0]=r[0]*i+r[2]*n,e[1]=r[1]*i+r[3]*n,e}function S(e,t,r){const i=t[0],n=t[1];return e[0]=r[0]*i+r[2]*n+r[4],e[1]=r[1]*i+r[3]*n+r[5],e}function M(e,t,r,i){const n=t[0]-r[0],a=t[1]-r[1],o=Math.sin(i),s=Math.cos(i);return e[0]=n*s-a*o+r[0],e[1]=n*o+a*s+r[1],e}function C(e,t){return e[0]===t[0]&&e[1]===t[1]}function E(e,t,r,i,n){let a=t[0]-r[0],o=t[1]-r[1];const s=(i[0]*a+i[1]*o)*(n-1);return a=i[0]*s,o=i[1]*s,e[0]=t[0]+a,e[1]=t[1]+o,e}const y=v,w=s,P=c,R=l,I=m,j=p,N=b;Object.freeze({__proto__:null,copy:n,set:a,add:o,subtract:s,multiply:c,divide:l,ceil:function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e},floor:function(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e},min:u,max:d,round:function(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e},scale:f,scaleAndAdd:h,distance:m,squaredDistance:p,length:v,squaredLength:b,negate:g,inverse:function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e},normalize:O,dot:x,cross:_,lerp:T,random:function(e,t){t=t||1;const r=2*Object(i.b)()*Math.PI;return e[0]=Math.cos(r)*t,e[1]=Math.sin(r)*t,e},transformMat2:A,transformMat2d:S,transformMat3:function(e,t,r){const i=t[0],n=t[1];return e[0]=r[0]*i+r[3]*n+r[6],e[1]=r[1]*i+r[4]*n+r[7],e},transformMat4:function(e,t,r){const i=t[0],n=t[1];return e[0]=r[0]*i+r[4]*n+r[12],e[1]=r[1]*i+r[5]*n+r[13],e},rotate:M,angle:function(e,t){const r=e[0],i=e[1],n=t[0],a=t[1];let o=r*r+i*i;o>0&&(o=1/Math.sqrt(o));let s=n*n+a*a;s>0&&(s=1/Math.sqrt(s));const c=(r*n+i*a)*o*s;return c>1?0:c<-1?Math.PI:Math.acos(c)},str:function(e){return"vec2("+e[0]+", "+e[1]+")"},exactEquals:C,equals:function(e,t){const r=e[0],n=e[1],a=t[0],o=t[1];return Math.abs(r-a)<=i.a*Math.max(1,Math.abs(r),Math.abs(a))&&Math.abs(n-o)<=i.a*Math.max(1,Math.abs(n),Math.abs(o))},projectAndScale:E,len:y,sub:w,mul:P,div:R,dist:I,sqrDist:j,sqrLen:N})},163:function(e,t,r){"use strict";var i,n,a,o,s,c,l,u,d,f,h,m,p,v;r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return n})),r.d(t,"d",(function(){return d})),r.d(t,"e",(function(){return h})),r.d(t,"f",(function(){return f})),r.d(t,"g",(function(){return c})),r.d(t,"h",(function(){return l})),r.d(t,"i",(function(){return o})),r.d(t,"j",(function(){return u})),r.d(t,"k",(function(){return m})),function(e){e[e.None=0]="None",e[e.Front=1]="Front",e[e.Back=2]="Back",e[e.COUNT=3]="COUNT"}(i||(i={})),function(e){e[e.Less=0]="Less",e[e.Lequal=1]="Lequal",e[e.COUNT=2]="COUNT"}(n||(n={})),function(e){e[e.NONE=0]="NONE",e[e.SMAA=1]="SMAA"}(a||(a={})),function(e){e[e.Color=0]="Color",e[e.Alpha=1]="Alpha",e[e.FrontFace=2]="FrontFace",e[e.NONE=3]="NONE",e[e.COUNT=4]="COUNT"}(o||(o={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.UPDATE=1]="UPDATE"}(s||(s={})),function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(c||(c={})),function(e){e[e.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",e[e.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(l||(l={})),function(e){e[e.ASYNC=0]="ASYNC",e[e.SYNC=1]="SYNC"}(u||(u={})),function(e){e[e.Highlight=0]="Highlight",e[e.MaskOccludee=1]="MaskOccludee",e[e.COUNT=2]="COUNT"}(d||(d={})),function(e){e[e.Triangle=0]="Triangle",e[e.Point=1]="Point",e[e.Line=2]="Line"}(f||(f={})),function(e){e[e.STRETCH=1]="STRETCH",e[e.PAD=2]="PAD"}(h||(h={})),function(e){e[e.CHANGED=0]="CHANGED",e[e.UNCHANGED=1]="UNCHANGED"}(m||(m={})),function(e){e[e.Blend=0]="Blend",e[e.Opaque=1]="Opaque",e[e.Mask=2]="Mask",e[e.MaskBlend=3]="MaskBlend",e[e.COUNT=4]="COUNT"}(p||(p={})),function(e){e[e.OFF=0]="OFF",e[e.ON=1]="ON"}(v||(v={}))},210:function(e,t,r){"use strict";var i;r.d(t,"a",(function(){return i})),function(e){e[e.Color=0]="Color",e[e.Depth=1]="Depth",e[e.Normal=2]="Normal",e[e.Shadow=3]="Shadow",e[e.Highlight=4]="Highlight",e[e.Draped=5]="Draped",e[e.Occlusion=6]="Occlusion",e[e.Alpha=7]="Alpha",e[e.COUNT=8]="COUNT"}(i||(i={}))},219:function(e,t,r){"use strict";function i(){return[0,0]}function n(e){return[e[0],e[1]]}function a(e,t){return[e,t]}function o(e){const t=[0,0],r=Math.min(2,e.length);for(let i=0;i<r;++i)t[i]=e[i];return t}function s(e,t){return new Float64Array(e,t,2)}function c(){return[0,0]}function l(){return a(1,1)}function u(){return a(1,0)}function d(){return a(0,1)}r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return s})),r.d(t,"d",(function(){return o})),r.d(t,"e",(function(){return a}));const f=[0,0],h=l(),m=u(),p=d();Object.freeze({__proto__:null,create:i,clone:n,fromValues:a,fromArray:o,createView:s,zeros:c,ones:l,unitX:u,unitY:d,ZEROS:f,ONES:h,UNIT_X:m,UNIT_Y:p})},272:function(e,t,r){"use strict";var i;function n(e){return e===i.Global?"global":"local"}r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return n})),function(e){e[e.Global=1]="Global",e[e.Local=2]="Local"}(i||(i={}))},278:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return h})),r.d(t,"d",(function(){return u})),r.d(t,"e",(function(){return d})),r.d(t,"f",(function(){return m})),r.d(t,"g",(function(){return l})),r.d(t,"h",(function(){return s})),r.d(t,"i",(function(){return c}));var i=r(151),n=(r(219),r(271),r(257));Object(n.e)();class a{constructor(e){this.message=e}toString(){return`AssertException: ${this.message}`}}function o(e,t){if(!e)throw t=t||"assert",console.log(new Error(t).stack),new a(t)}function s(e,t,r,i){let n,a=(r[0]-e[0])/t[0],o=(i[0]-e[0])/t[0];a>o&&(n=a,a=o,o=n);let s=(r[1]-e[1])/t[1],c=(i[1]-e[1])/t[1];if(s>c&&(n=s,s=c,c=n),a>c||s>o)return!1;s>a&&(a=s),c<o&&(o=c);let l=(r[2]-e[2])/t[2],u=(i[2]-e[2])/t[2];return l>u&&(n=l,l=u,u=n),!(a>u||l>o)&&(u<o&&(o=u),!(o<0))}function c(e,t,r,i){e[12]=t,e[13]=r,e[14]=i}function l(e){return 1===e[0]&&0===e[1]&&0===e[2]&&0===e[3]&&0===e[4]&&1===e[5]&&0===e[6]&&0===e[7]&&0===e[8]&&0===e[9]&&1===e[10]&&0===e[11]&&1===e[15]}function u(e,t,r){return 2*Math.atan(Math.sqrt(t*t+r*r)*Math.tan(.5*e)/t)}function d(e,t,r){return 2*Math.atan(Math.sqrt(t*t+r*r)*Math.tan(.5*e)/r)}function f(e,t,r){return 2*Math.atan(t*Math.tan(.5*e)/Math.sqrt(t*t+r*r))}function h(e,t,r){return 2*Math.atan(r*Math.tan(.5*e)/Math.sqrt(t*t+r*r))}function m(e,t,r,n,a){const o=e;0===e[11]?(n[0]=2/(t*o[0]),n[1]=2/(r*o[5]),n[2]=(1+o[12])/o[0],n[3]=(1+o[13])/o[5],Object(i.s)(a,0,1)):(n[0]=-2/(t*o[0]),n[1]=-2/(r*o[5]),n[2]=(1-o[8])/o[0],n[3]=(1-o[9])/o[5],Object(i.s)(a,1,0))}},279:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));class i{constructor(e,t,r,i,n,a=!1,o=0){this.name=e,this.count=t,this.type=r,this.offset=i,this.stride=n,this.normalized=a,this.divisor=o}}},297:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));const i=r(87).a.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class n{constructor(){this.includedModules=new Map}include(e,t){this.includedModules.has(e)?this.includedModules.get(e)!==t&&i.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,t),e(this.builder,t))}}class a extends n{constructor(){super(...arguments),this.vertex=new c,this.fragment=new c,this.attributes=new l,this.varyings=new u,this.extensions=new d,this.constants=new f}get fragmentUniforms(){return this.fragment.uniforms}get builder(){return this}generateSource(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),i=this.varyings.generateSource(),n="vertex"===e?this.vertex:this.fragment,a=n.uniforms.generateSource(),o=n.code.generateSource(),s="vertex"===e?m:h,c=this.constants.generateSource().concat(n.constants.generateSource());return`\n${t.join("\n")}\n\n${s}\n\n${c.join("\n")}\n\n${a.join("\n")}\n\n${r.join("\n")}\n\n${i.join("\n")}\n\n${o.join("\n")}`}}class o{constructor(){this._entries=new Map}add(e,t,r){const i=`${e}_${t}_${r}`;return this._entries.set(i,{name:e,type:t,arraySize:r}),this}generateSource(){return Array.from(this._entries.values()).map((e=>`uniform ${e.type} ${e.name}${(e=>e?`[${e}]`:"")(e.arraySize)};`))}get entries(){return Array.from(this._entries.values())}}class s{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class c extends n{constructor(){super(...arguments),this.uniforms=new o,this.code=new s,this.constants=new f}get builder(){return this}}class l{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`attribute ${e[1]} ${e[0]};`))}}class u{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(){return this._entries.map((e=>`varying ${e[1]} ${e[0]};`))}}class d{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?d.ALLOWLIST_VERTEX:d.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}d.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],d.ALLOWLIST_VERTEX=[];class f{constructor(){this._entries=[]}add(e,t,r){let i="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":i=f._numberToFloatStr(r);break;case"int":i=f._numberToIntStr(r);break;case"bool":i=r.toString();break;case"vec2":i=`vec2(${f._numberToFloatStr(r[0])},                            ${f._numberToFloatStr(r[1])})`;break;case"vec3":i=`vec3(${f._numberToFloatStr(r[0])},                            ${f._numberToFloatStr(r[1])},                            ${f._numberToFloatStr(r[2])})`;break;case"vec4":i=`vec4(${f._numberToFloatStr(r[0])},                            ${f._numberToFloatStr(r[1])},                            ${f._numberToFloatStr(r[2])},                            ${f._numberToFloatStr(r[3])})`;break;case"ivec2":i=`ivec2(${f._numberToIntStr(r[0])},                             ${f._numberToIntStr(r[1])})`;break;case"ivec3":i=`ivec3(${f._numberToIntStr(r[0])},                             ${f._numberToIntStr(r[1])},                             ${f._numberToIntStr(r[2])})`;break;case"ivec4":i=`ivec4(${f._numberToIntStr(r[0])},                             ${f._numberToIntStr(r[1])},                             ${f._numberToIntStr(r[2])},                             ${f._numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${t}(${Array.prototype.map.call(r,(e=>f._numberToFloatStr(e))).join(", ")})`}return this._entries.push(`const ${t} ${e} = ${i};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const h="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",m="precision highp float;\nprecision highp sampler2D;"},301:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return u}));var i=r(85),n=r(147),a=r(200),o=r(117),s=r(109),c=r(126);function l(e,t){if(t.slicePlaneEnabled){e.extensions.add("GL_OES_standard_derivatives"),t.sliceEnabledForVertexPrograms&&(e.vertex.uniforms.add("slicePlaneOrigin","vec3"),e.vertex.uniforms.add("slicePlaneBasis1","vec3"),e.vertex.uniforms.add("slicePlaneBasis2","vec3")),e.fragment.uniforms.add("slicePlaneOrigin","vec3"),e.fragment.uniforms.add("slicePlaneBasis1","vec3"),e.fragment.uniforms.add("slicePlaneBasis2","vec3");const r=c.a`struct SliceFactors {
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
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,i=c.a`vec4 applySliceHighlight(vec4 color, vec3 pos) {
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
}`,n=t.sliceHighlightDisabled?c.a`#define highlightSlice(_color_, _pos_) (_color_)`:c.a`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r),e.fragment.code.add(n)}else{const r=c.a`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r)}}function u(e,t,r){d(e,t,r.slicePlane,{origin:r.origin})}function d(e,t,r,a){if(t.slicePlaneEnabled)if(Object(i.k)(r)){if(Object(o.k)(f,r.origin),Object(o.k)(h,r.basis1),Object(o.k)(m,r.basis2),Object(i.k)(a)&&Object(i.k)(a.origin)&&Object(o.j)(f,r.origin,a.origin),Object(i.k)(a)&&Object(i.k)(a.view)){const e=Object(i.k)(a.origin)?Object(n.j)(p,a.view,a.origin):a.view;Object(o.f)(h,h,f),Object(o.f)(m,m,f),Object(o.q)(f,f,e),Object(o.q)(h,h,e),Object(o.q)(m,m,e),Object(o.j)(h,h,f),Object(o.j)(m,m,f)}e.setUniform3fv("slicePlaneOrigin",f),e.setUniform3fv("slicePlaneBasis1",h),e.setUniform3fv("slicePlaneBasis2",m)}else e.setUniform3fv("slicePlaneBasis1",s.c),e.setUniform3fv("slicePlaneBasis2",s.c),e.setUniform3fv("slicePlaneOrigin",s.c)}const f=Object(s.f)(),h=Object(s.f)(),m=Object(s.f)(),p=Object(a.d)()},335:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return i}));var i,n,a=r(85),o=r(560),s=r(544),c=r(382),l=r(434);class u extends o.a{constructor(e,t){super(),this.type=s.a.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=c.a,this._parameters=Object(l.c)(e,t),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e){Object(l.h)(this._parameters,e)&&(this.validateParameters(this._parameters),this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleInPass(e.pass)&&0!=(this.renderOccluded&e.renderOccludedMask)}isVisibleInPass(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){Object(a.k)(this.repository)&&this.repository.materialChanged(this)}}(n=i||(i={}))[n.Occlude=1]="Occlude",n[n.Transparent=2]="Transparent",n[n.OccludeAndTransparent=4]="OccludeAndTransparent",n[n.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",n[n.Opaque=16]="Opaque";const d={renderOccluded:i.Occlude}},339:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return s})),r.d(t,"d",(function(){return c}));var i,n,a=r(82),o=r(85);function s(e,t,r={}){const i=c(e);for(;i.length>1;){const e=l(t,i.shift(),r);if(Object(o.k)(e))return e}return function(e,t,r={}){if(!window.WebGLRenderingContext)return u(e,d),null;const i=l(e,t,r);return Object(o.j)(i)&&u(e,f),i}(t,i.shift(),r)}function c(e){const t=Object(a.a)("esri-force-webgl");if(t===i.WEBGL1||t===i.WEBGL2)return[t];switch(e){case"2d":return[i.WEBGL1];case"3d":return[i.WEBGL2,i.WEBGL1]}}function l(e,t,r={}){const n=t===i.WEBGL1?["webgl","experimental-webgl","webkit-3d","moz-webgl"]:["webgl2"];let a=null;for(const i of n){try{a=e.getContext(i,r)}catch(o){}if(a)break}return a}function u(e,t){const r=e.parentNode;r&&(r.innerHTML='<table style="background-color: #8CE; width: 100%; height: 100%;"><tr><td align="center"><div style="display: table-cell; vertical-align: middle;"><div style="">'+t+"</div></div></td></tr></table>")}(n=i||(i={}))[n.WEBGL1=1]="WEBGL1",n[n.WEBGL2=2]="WEBGL2";const d='This page requires a browser that supports WebGL.<br/><a href="http://get.webgl.org">Click here to upgrade your browser.</a>',f='It doesn\'t appear your computer can support WebGL.<br/><a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>'},355:function(e,t,r){"use strict";r.d(t,"a",(function(){return U})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return d})),r.d(t,"d",(function(){return u})),r.d(t,"e",(function(){return c})),r.d(t,"f",(function(){return x})),r.d(t,"g",(function(){return o})),r.d(t,"h",(function(){return a}));var i=r(163),n=r(94);function a(e,t,r=n.c.ADD,i=[0,0,0,0]){return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:r,opAlpha:r,color:{r:i[0],g:i[1],b:i[2],a:i[3]}}}function o(e,t,r,i,a=n.c.ADD,o=n.c.ADD,s=[0,0,0,0]){return{srcRgb:e,srcAlpha:t,dstRgb:r,dstAlpha:i,opRgb:a,opAlpha:o,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}const s={face:n.n.BACK,mode:n.j.CCW},c={face:n.n.FRONT,mode:n.j.CCW},l=e=>e===i.b.Back?s:e===i.b.Front?c:null,u={zNear:0,zFar:1},d={r:!0,g:!0,b:!0,a:!0};function f(e){return A.intern(e)}function h(e){return M.intern(e)}function m(e){return E.intern(e)}function p(e){return w.intern(e)}function v(e){return R.intern(e)}function b(e){return j.intern(e)}function g(e){return L.intern(e)}function O(e){return F.intern(e)}function x(e){return B.intern(e)}class _{constructor(e,t){this.makeKey=e,this.makeRef=t,this.interns=new Map}intern(e){if(!e)return null;const t=this.makeKey(e),r=this.interns;return r.has(t)||r.set(t,this.makeRef(e)),r.get(t)}}function T(e){return"["+e.join(",")+"]"}const A=new _(S,(e=>({__tag:"Blending",...e})));function S(e){return e?T([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const M=new _(C,(e=>({__tag:"Culling",...e})));function C(e){return e?T([e.face,e.mode]):null}const E=new _(y,(e=>({__tag:"PolygonOffset",...e})));function y(e){return e?T([e.factor,e.units]):null}const w=new _(P,(e=>({__tag:"DepthTest",...e})));function P(e){return e?T([e.func]):null}const R=new _(I,(e=>({__tag:"StencilTest",...e})));function I(e){return e?T([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const j=new _(N,(e=>({__tag:"DepthWrite",...e})));function N(e){return e?T([e.zNear,e.zFar]):null}const L=new _(D,(e=>({__tag:"ColorWrite",...e})));function D(e){return e?T([e.r,e.g,e.b,e.a]):null}const F=new _(z,(e=>({__tag:"StencilWrite",...e})));function z(e){return e?T([e.mask]):null}const B=new _((function(e){return e?T([S(e.blending),C(e.culling),y(e.polygonOffset),P(e.depthTest),I(e.stencilTest),N(e.depthWrite),D(e.colorWrite),z(e.stencilWrite)]):null}),(e=>({blending:f(e.blending),culling:h(e.culling),polygonOffset:m(e.polygonOffset),depthTest:p(e.depthTest),stencilTest:v(e.stencilTest),depthWrite:b(e.depthWrite),colorWrite:g(e.colorWrite),stencilWrite:O(e.stencilWrite)})));class U{constructor(e){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._stateSetters=e}setPipeline(e){(this._pipelineInvalid||e!==this._pipeline)&&(this._setBlending(e.blending),this._setCulling(e.culling),this._setPolygonOffset(e.polygonOffset),this._setDepthTest(e.depthTest),this._setStencilTest(e.stencilTest),this._setDepthWrite(e.depthWrite),this._setColorWrite(e.colorWrite),this._setStencilWrite(e.stencilWrite),this._pipeline=e),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}_setBlending(e){this._blending=this._setSubState(e,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}_setCulling(e){this._culling=this._setSubState(e,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}_setPolygonOffset(e){this._polygonOffset=this._setSubState(e,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}_setDepthTest(e){this._depthTest=this._setSubState(e,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}_setStencilTest(e){this._stencilTest=this._setSubState(e,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}_setDepthWrite(e){this._depthWrite=this._setSubState(e,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}_setColorWrite(e){this._colorWrite=this._setSubState(e,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}_setStencilWrite(e){this._stencilWrite=this._setSubState(e,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}_setSubState(e,t,r,i){return(r||e!==t)&&(i(e),this._pipelineInvalid=!0),e}}},356:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return n}));var i=r(126);function n(e,t){e.fragment.uniforms.add("terrainDepthTexture","sampler2D"),e.fragment.uniforms.add("nearFar","vec2"),e.fragment.uniforms.add("inverseViewport","vec2"),e.fragment.code.add(i.a`
    // Compare the linearized depths of fragment and terrain. Discard fragments on the wrong side of the terrain.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `)}function a(e,t){t.multipassTerrainEnabled&&t.terrainLinearDepthTexture&&e.bindTexture(t.terrainLinearDepthTexture,"terrainDepthTexture")}},360:function(e,t,r){"use strict";r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return s})),r.d(t,"d",(function(){return f})),r.d(t,"e",(function(){return u})),r.d(t,"f",(function(){return d})),r.d(t,"g",(function(){return c}));r(84);var i=r(485),n=r(117),a=r(109),o=r(288);function s(e){return e?{origin:Object(a.d)(e.origin),direction:Object(a.d)(e.direction)}:{origin:Object(a.f)(),direction:Object(a.f)()}}function c(e,t){const r=m.get();return r.origin=e,r.direction=t,r}function l(e,t=s()){return d(e.origin,e.direction,t)}function u(e,t,r=s()){return Object(n.k)(r.origin,e),Object(n.j)(r.direction,t,e),r}function d(e,t,r=s()){return Object(n.k)(r.origin,e),Object(n.k)(r.direction,t),r}function f(e,t){const r=Object(n.g)(o.d.get(),Object(n.r)(o.d.get(),e.direction),Object(n.j)(o.d.get(),t,e.origin));return Object(n.h)(r,r)}function h(e,t,r){const i=Object(n.h)(e.direction,Object(n.j)(r,t,e.origin));return Object(n.f)(r,e.origin,Object(n.e)(r,e.direction,i)),r}const m=new i.a((function(){return{origin:null,direction:null}}))},382:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(139);const n=new Map([[i.a.POSITION,0],[i.a.NORMAL,1],[i.a.UV0,2],[i.a.COLOR,3],[i.a.SIZE,4],[i.a.TANGENT,4],[i.a.AUXPOS1,5],[i.a.SYMBOLCOLOR,5],[i.a.AUXPOS2,6],[i.a.FEATUREATTRIBUTE,6],[i.a.INSTANCEFEATUREATTRIBUTE,6],[i.a.INSTANCECOLOR,7],[i.a.MODEL,8],[i.a.MODELNORMAL,12],[i.a.MODELORIGINHI,11],[i.a.MODELORIGINLO,15]])},388:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));class i{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}},389:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(85),n=r(212),a=r(493);class o{constructor(e,t,r){this._context=e,this._locations=r,this._textures=new Map,this._freeTextureUnits=new n.a({deallocator:null}),this._glProgram=e.programCache.acquire(t.generateSource("vertex"),t.generateSource("fragment"),r),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this._fragmentUniforms=Object(a.b)()?t.fragmentUniforms.entries:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get isCompiled(){return this._glProgram.isCompiled}setUniform1b(e,t){this._glProgram.setUniform1i(e,t?1:0)}setUniform1i(e,t){this._glProgram.setUniform1i(e,t)}setUniform1f(e,t){this._glProgram.setUniform1f(e,t)}setUniform1fv(e,t){this._glProgram.setUniform1fv(e,t)}setUniform1iv(e,t){this._glProgram.setUniform1iv(e,t)}setUniform2f(e,t,r){this._glProgram.setUniform2f(e,t,r)}setUniform2fv(e,t){this._glProgram.setUniform2fv(e,t)}setUniform2iv(e,t){this._glProgram.setUniform2iv(e,t)}setUniform3f(e,t,r,i){this._glProgram.setUniform3f(e,t,r,i)}setUniform3fv(e,t){this._glProgram.setUniform3fv(e,t)}setUniform3iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform4f(e,t,r,i,n){this._glProgram.setUniform4f(e,t,r,i,n)}setUniform4fv(e,t){this._glProgram.setUniform4fv(e,t)}setUniform4iv(e,t){this._glProgram.setUniform4iv(e,t)}setUniformMatrix3fv(e,t){this._glProgram.setUniformMatrix3fv(e,t)}setUniformMatrix4fv(e,t){this._glProgram.setUniformMatrix4fv(e,t)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if(Object(i.j)(e)||null==e.glName){const e=this._textures.get(t);return e&&(this._context.bindTexture(null,e.unit),this._freeTextureUnit(e),this._textures.delete(t)),null}let r=this._textures.get(t);return null==r?(r=this._allocTextureUnit(e),this._textures.set(t,r)):r.texture=e,this._context.useProgram(this),this.setUniform1i(t,r.unit),this._context.bindTexture(e,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),Object(i.k)(this._fragmentUniforms)&&this._fragmentUniforms.forEach((e=>{if(("sampler2D"===e.type||"samplerCube"===e.type)&&!this._textures.has(e.name))throw new Error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}},397:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return o}));var i=r(126),n=r(163);const a=.1,o=.001;function s(e,t){const r=e.fragment;switch(t.alphaDiscardMode){case n.a.Blend:r.code.add(i.a`
        #define discardOrAdjustAlpha(color) { if (color.a < ${i.a.float(o)}) { discard; } }
      `);break;case n.a.Opaque:r.code.add(i.a`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case n.a.Mask:r.uniforms.add("textureAlphaCutoff","float"),r.code.add(i.a`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case n.a.MaskBlend:e.fragment.uniforms.add("textureAlphaCutoff","float"),e.fragment.code.add(i.a`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}},404:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(85),n=r(94);class a{constructor(e,t,r){this.release=r,t&&(this._config=t.snapshot()),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}destroy(){this._program=Object(i.e)(this._program),this._pipeline=this._config=null}reload(e){Object(i.e)(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}get program(){return this._program}get key(){return this._config.key}get configuration(){return this._config}bindPass(e,t){}bindMaterial(e,t){}bindDraw(e){}bindPipelineState(e,t=null,r){e.setPipelineState(this.getPipelineState(t,r))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return n.r.TRIANGLES}getPipelineState(e,t){return this._pipeline}}},409:function(e,t,r){"use strict";function i(e){return 32+e.length}function n(e){if(!e)return 0;let t=32;for(const r in e)if(e.hasOwnProperty(r)){const n=e[r];switch(typeof n){case"string":t+=i(n);break;case"number":t+=16;break;case"boolean":t+=4}}return t}function a(e,t){return 32+e.length*t}var o;r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return a})),function(e){e[e.KILOBYTES=1024]="KILOBYTES",e[e.MEGABYTES=1048576]="MEGABYTES",e[e.GIGABYTES=1073741824]="GIGABYTES"}(o||(o={}))},410:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(500),n=r(126);function a(e){e.include(i.a),e.code.add(n.a`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}},411:function(e,t,r){"use strict";var i;r.d(t,"a",(function(){return i})),function(e){e[e.INTEGRATED_MESH=0]="INTEGRATED_MESH",e[e.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",e[e.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",e[e.OPAQUE_PLUGIN=3]="OPAQUE_PLUGIN",e[e.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",e[e.TRANSPARENT_PLUGIN=5]="TRANSPARENT_PLUGIN",e[e.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",e[e.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=7]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",e[e.OCCLUDED_TERRAIN=8]="OCCLUDED_TERRAIN",e[e.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",e[e.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",e[e.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",e[e.POSTPROCESSING_ENVIRONMENT_OPAQUE=12]="POSTPROCESSING_ENVIRONMENT_OPAQUE",e[e.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=13]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",e[e.LASERLINES=14]="LASERLINES",e[e.LASERLINES_CONTRAST_CONTROL=15]="LASERLINES_CONTRAST_CONTROL",e[e.HUD_MATERIAL=16]="HUD_MATERIAL",e[e.LABEL_MATERIAL=17]="LABEL_MATERIAL",e[e.LINE_CALLOUTS=18]="LINE_CALLOUTS",e[e.LINE_CALLOUTS_HUD_DEPTH=19]="LINE_CALLOUTS_HUD_DEPTH",e[e.DRAPED_MATERIAL=20]="DRAPED_MATERIAL",e[e.DRAPED_WATER=21]="DRAPED_WATER",e[e.VOXEL=22]="VOXEL",e[e.MAX_SLOTS=23]="MAX_SLOTS"}(i||(i={}))},419:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return n}));class i{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}function n(e={}){return(t,r)=>{var i,n;t._parameterNames=null!=(i=t._parameterNames)?i:[],t._parameterNames.push(r);const a=t._parameterNames.length-1,o=e.count||2,s=Math.ceil(Math.log2(o)),c=null!=(n=t._parameterBits)?n:[0];let l=0;for(;c[l]+s>16;)l++,l>=c.length&&c.push(0);t._parameterBits=c;const u=c[l],d=(1<<s)-1<<u;c[l]+=s,Object.defineProperty(t,r,{get(){return this[a]},set(e){if(this[a]!==e&&(this[a]=e,this._keyDirty=!0,this._parameterBits[l]=this._parameterBits[l]&~d|+e<<u&d,"number"!=typeof e&&"boolean"!=typeof e))throw"Configuration value for "+r+" must be boolean or number, got "+typeof e}})}}},420:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return c}));var i=r(257),n=r(126);const a=Object(i.g)(1,1,0,1),o=Object(i.g)(1,0,1,1);function s(e){e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("highlightViewportPixelSz","vec4"),e.fragment.constants.add("occludedHighlightFlag","vec4",a).add("unoccludedHighlightFlag","vec4",o),e.fragment.code.add(n.a`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`)}function c(e,t){e.bindTexture(t.highlightDepthTexture,"depthTex"),e.setUniform4f("highlightViewportPixelSz",0,0,t.inverseViewport[0],t.inverseViewport[1])}},434:function(e,t,r){"use strict";r.d(t,"a",(function(){return S})),r.d(t,"b",(function(){return w})),r.d(t,"c",(function(){return M})),r.d(t,"d",(function(){return T})),r.d(t,"e",(function(){return E})),r.d(t,"f",(function(){return m})),r.d(t,"g",(function(){return g})),r.d(t,"h",(function(){return C})),r.d(t,"i",(function(){return A}));var i=r(116),n=r(85),a=r(117),o=r(109),s=r(223),c=r(163),l=r(768),u=r(278),d=r(139),f=r(513);const h=Object(s.f)();function m(e,t,r,i,n,a,o){if(!Object(f.d)(t))if(e.boundingInfo){Object(u.a)(e.primitiveType===c.f.Triangle);const t=r.tolerance;v(e.boundingInfo,i,n,t,a,o)}else{const t=e.indices.get(d.a.POSITION),r=e.vertexAttributes.get(d.a.POSITION);g(i,n,0,t.length/3,t,r,void 0,a,o)}}const p=Object(o.f)();function v(e,t,r,i,o,c){if(Object(n.j)(e))return;const l=function(e,t,r){return Object(a.w)(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}(t,r,p);if(Object(s.y)(h,e.getBBMin()),Object(s.x)(h,e.getBBMax()),Object(n.k)(o)&&o.applyToAabb(h),T(h,t,l,i)){const{primitiveIndices:n,indices:a,position:s}=e,l=n?n.length:a.length/3;if(l>P){const n=e.getChildren();if(void 0!==n){for(let e=0;e<8;++e)void 0!==n[e]&&v(n[e],t,r,i,o,c);return}}g(t,r,0,l,a,s,n,o,c)}}const b=Object(o.f)();function g(e,t,r,i,a,o,s,c,l){if(s)return function(e,t,r,i,a,o,s,c,l){const u=o.data,d=o.stride||o.size,f=e[0],h=e[1],m=e[2],p=t[0]-f,v=t[1]-h,g=t[2]-m;for(let O=r;O<i;++O){const e=s[O];let t=3*e,r=d*a[t++],i=u[r++],o=u[r++],x=u[r];r=d*a[t++];let T=u[r++],A=u[r++],S=u[r];r=d*a[t];let M=u[r++],C=u[r++],E=u[r];Object(n.k)(c)&&([i,o,x]=c.applyToVertex(i,o,x,O),[T,A,S]=c.applyToVertex(T,A,S,O),[M,C,E]=c.applyToVertex(M,C,E,O));const y=T-i,w=A-o,P=S-x,R=M-i,I=C-o,j=E-x,N=v*j-I*g,L=g*R-j*p,D=p*I-R*v,F=y*N+w*L+P*D;if(Math.abs(F)<=Number.EPSILON)continue;const z=f-i,B=h-o,U=m-x,G=z*N+B*L+U*D;if(F>0){if(G<0||G>F)continue}else if(G>0||G<F)continue;const H=B*P-w*U,V=U*y-P*z,k=z*w-y*B,W=p*H+v*V+g*k;if(F>0){if(W<0||G+W>F)continue}else if(W>0||G+W<F)continue;const q=(R*H+I*V+j*k)/F;q>=0&&l(q,_(y,w,P,R,I,j,b),e,!1)}}(e,t,r,i,a,o,s,c,l);const u=o.data,d=o.stride||o.size,f=e[0],h=e[1],m=e[2],p=t[0]-f,v=t[1]-h,g=t[2]-m;for(let O=r,x=3*r;O<i;++O){let e=d*a[x++],t=u[e++],r=u[e++],i=u[e];e=d*a[x++];let o=u[e++],s=u[e++],T=u[e];e=d*a[x++];let A=u[e++],S=u[e++],M=u[e];Object(n.k)(c)&&([t,r,i]=c.applyToVertex(t,r,i,O),[o,s,T]=c.applyToVertex(o,s,T,O),[A,S,M]=c.applyToVertex(A,S,M,O));const C=o-t,E=s-r,y=T-i,w=A-t,P=S-r,R=M-i,I=v*R-P*g,j=g*w-R*p,N=p*P-w*v,L=C*I+E*j+y*N;if(Math.abs(L)<=Number.EPSILON)continue;const D=f-t,F=h-r,z=m-i,B=D*I+F*j+z*N;if(L>0){if(B<0||B>L)continue}else if(B>0||B<L)continue;const U=F*y-E*z,G=z*C-y*D,H=D*E-C*F,V=p*U+v*G+g*H;if(L>0){if(V<0||B+V>L)continue}else if(V>0||B+V<L)continue;const k=(w*U+P*G+R*H)/L;k>=0&&l(k,_(C,E,y,w,P,R,b),O,!1)}}const O=Object(o.f)(),x=Object(o.f)();function _(e,t,r,i,n,o,s){return Object(a.w)(O,e,t,r),Object(a.w)(x,i,n,o),Object(a.g)(s,O,x),Object(a.r)(s,s),s}function T(e,t,r,i){return function(e,t,r,i,n){const a=(e[0]-i-t[0])*r[0],o=(e[3]+i-t[0])*r[0];let s=Math.min(a,o),c=Math.max(a,o);const l=(e[1]-i-t[1])*r[1],u=(e[4]+i-t[1])*r[1];if(c=Math.min(c,Math.max(l,u)),c<0)return!1;if(s=Math.max(s,Math.min(l,u)),s>c)return!1;const d=(e[2]-i-t[2])*r[2],f=(e[5]+i-t[2])*r[2];return c=Math.min(c,Math.max(d,f)),!(c<0)&&(s=Math.max(s,Math.min(d,f)),!(s>c)&&s<n)}(e,t,r,i,1/0)}function A(e,t,r,n,a){let o=(r.screenLength||0)*e.pixelRatio;a&&(o=Object(l.d)(o,n,t,a));const s=o*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return Object(i.e)(s*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}function S(e,t,r){if(!e)return;const i=e.parameters,n=e.paddingPixelsOverride;t.setUniform4f(r,i.divisor,i.offset,i.minPixelSize,n)}function M(e,t){const r=t?M(t):{};for(const i in e){let t=e[i];t&&t.forEach&&(t=y(t)),null==t&&i in r||(r[i]=t)}return r}function C(e,t){let r=!1;for(const i in t){const n=t[i];void 0!==n&&(r=!0,Array.isArray(n)?e[i]=n.slice():e[i]=n)}return r}function E(e,t,r,n,a,o){if(!t.options.selectionMode)return;const s=e.vertexAttributes.get(d.a.POSITION).data,c=e.vertexAttributes.get(d.a.SIZE),l=c&&c.data[0],u=n[0],f=n[1],h=((l+a)/2+4)*e.screenToWorldRatio;let m=Number.MAX_VALUE,p=0;for(let d=0;d<s.length-5;d+=3){const e=s[d],t=s[d+1],r=u-e,n=f-t,a=s[d+3]-e,o=s[d+4]-t,c=Object(i.e)((a*r+o*n)/(a*a+o*o),0,1),l=a*c-r,h=o*c-n,v=l*l+h*h;v<m&&(m=v,p=d/3)}m<h*h&&o(r.dist,r.normal,p,!1)}function y(e){const t=[];return e.forEach((e=>t.push(e))),t}const w={multiply:1,ignore:2,replace:3,tint:4},P=1e3},445:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return o})),r.d(t,"e",(function(){return h})),r.d(t,"f",(function(){return l})),r.d(t,"g",(function(){return m})),r.d(t,"h",(function(){return u}));var i=r(163),n=r(94),a=r(355);const o=Object(a.g)(n.b.SRC_ALPHA,n.b.ONE,n.b.ONE_MINUS_SRC_ALPHA,n.b.ONE_MINUS_SRC_ALPHA),s=Object(a.h)(n.b.ONE,n.b.ONE),c=Object(a.h)(n.b.ZERO,n.b.ONE_MINUS_SRC_ALPHA);function l(e){return e===i.i.FrontFace?null:e===i.i.Alpha?c:s}function u(e){return e===i.i.FrontFace?a.d:null}const d=5e5,f={factor:-1,units:-2};function h(e){return e?f:null}function m(e,t=n.h.LESS){return e===i.i.NONE||e===i.i.FrontFace?t:n.h.LEQUAL}},446:function(e,t,r){"use strict";function i(){return new Float32Array(3)}function n(e){const t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function a(e,t,r){const i=new Float32Array(3);return i[0]=e,i[1]=t,i[2]=r,i}function o(){return i()}function s(){return a(1,1,1)}function c(){return a(1,0,0)}function l(){return a(0,1,0)}function u(){return a(0,0,1)}r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return a}));const d=o(),f=s(),h=c(),m=l(),p=u();Object.freeze({__proto__:null,create:i,clone:n,fromValues:a,createView:function(e,t){return new Float32Array(e,t,3)},zeros:o,ones:s,unitX:c,unitY:l,unitZ:u,ZEROS:d,ONES:f,UNIT_X:h,UNIT_Y:m,UNIT_Z:p})},464:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(126);function n(e){e.code.add(i.a`vec4 premultiplyAlpha(vec4 v) {
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
}`)}},478:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(126);function n(e,t){const r={hasModelTransformation:!1,...t};if(r.hasModelTransformation)return r.linearDepth?void e.vertex.code.add(i.a`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):void e.vertex.code.add(i.a`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);r.linearDepth?e.vertex.code.add(i.a`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):e.vertex.code.add(i.a`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},487:function(e,t,r){"use strict";function i(e){return e=e||globalThis.location.hostname,l.some((t=>{var r;return null!=(null==(r=e)?void 0:r.match(t))}))}function n(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(a)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(o)||null!=t.match(c)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i}));const a=/^devext.arcgis.com$/,o=/^qaext.arcgis.com$/,s=/^[\w-]*\.mapsdevext.arcgis.com$/,c=/^[\w-]*\.mapsqa.arcgis.com$/,l=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,a,o,/^jsapps.esri.com$/,s,c]},495:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var i=r(421),n=r(743);class a{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const r of e.fieldNames){const t=e.fields.get(r);this[r]=new t.constructor(this.buffer,t.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const r=this[e];return r&&r.elementCount===t.ElementCount&&r.elementType===t.ElementType?r:null}slice(e,t){return new a(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t,r,i){const n=this.stride;if(n%4==0){const a=new Uint32Array(e.buffer,t*n,i*n/4);new Uint32Array(this.buffer,r*n,i*n/4).set(a)}else{const a=new Uint8Array(e.buffer,t*n,i*n);new Uint8Array(this.buffer,r*n,i*n).set(a)}}}class o{constructor(){this.stride=0,this.fields=new Map,this.fieldNames=[]}vec2f(e,t){return this._appendField(e,i.m,t),this}vec2f64(e,t){return this._appendField(e,i.n,t),this}vec3f(e,t){return this._appendField(e,i.u,t),this}vec3f64(e,t){return this._appendField(e,i.v,t),this}vec4f(e,t){return this._appendField(e,i.C,t),this}vec4f64(e,t){return this._appendField(e,i.D,t),this}mat3f(e,t){return this._appendField(e,i.f,t),this}mat3f64(e,t){return this._appendField(e,i.g,t),this}mat4f(e,t){return this._appendField(e,i.h,t),this}mat4f64(e,t){return this._appendField(e,i.i,t),this}vec4u8(e,t){return this._appendField(e,i.J,t),this}f32(e,t){return this._appendField(e,i.a,t),this}f64(e,t){return this._appendField(e,i.b,t),this}u8(e,t){return this._appendField(e,i.l,t),this}u16(e,t){return this._appendField(e,i.j,t),this}i8(e,t){return this._appendField(e,i.e,t),this}vec2i8(e,t){return this._appendField(e,i.q,t),this}vec2i16(e,t){return this._appendField(e,i.o,t),this}vec2u8(e,t){return this._appendField(e,i.t,t),this}vec4u16(e,t){return this._appendField(e,i.H,t),this}u32(e,t){return this._appendField(e,i.k,t),this}_appendField(e,t,r){const i=t.ElementCount*Object(n.a)(t.ElementType),a=this.stride;this.fields.set(e,{size:i,constructor:t,offset:a,optional:r}),this.stride+=i,this.fieldNames.push(e)}alignTo(e){return this.stride=Math.floor((this.stride+e-1)/e)*e,this}hasField(e){return this.fieldNames.indexOf(e)>=0}createBuffer(e){return new a(this,e)}createView(e){return new a(this,e)}clone(){const e=new o;return e.stride=this.stride,e.fields=new Map,this.fields.forEach(((t,r)=>e.fields.set(r,t))),e.fieldNames=this.fieldNames.slice(),e.BufferType=this.BufferType,e}}function s(){return new o}},498:function(e,t,r){"use strict";r.d(t,"a",(function(){return O})),r.d(t,"b",(function(){return b})),r.d(t,"c",(function(){return v})),r.d(t,"d",(function(){return T})),r.d(t,"e",(function(){return _})),r.d(t,"f",(function(){return M})),r.d(t,"g",(function(){return N})),r.d(t,"h",(function(){return g}));r(82);var i=r(87),n=r(116),a=r(85),o=r(147),s=r(117),c=r(109),l=r(271),u=r(257),d=r(584),f=r(360),h=r(526),m=r(288);const p=i.a.getLogger("esri.geometry.support.sphere");function v(){return Object(u.e)()}function b(e,t=v()){return Object(l.c)(t,e)}function g(e){return e}function O(e){e[0]=e[1]=e[2]=e[3]=0}function x(e){return Array.isArray(e)?e[3]:e}function _(e){return Array.isArray(e)?e:I}function T(e,t,r,i){return Object(u.g)(e,t,r,i)}function A(e,t,r){if(Object(a.j)(t))return!1;const{origin:i,direction:n}=t,o=S;o[0]=i[0]-e[0],o[1]=i[1]-e[1],o[2]=i[2]-e[2];const s=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],c=2*(n[0]*o[0]+n[1]*o[1]+n[2]*o[2]),l=c*c-4*s*(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]-e[3]*e[3]);if(l<0)return!1;const u=Math.sqrt(l);let d=(-c-u)/(2*s);const f=(-c+u)/(2*s);return(d<0||f<d&&f>0)&&(d=f),!(d<0)&&(r&&(r[0]=i[0]+n[0]*d,r[1]=i[1]+n[1]*d,r[2]=i[2]+n[2]*d),!0)}const S=Object(c.f)();function M(e,t){return A(e,t,null)}function C(e,t,r){const i=m.d.get(),n=m.a.get();Object(s.g)(i,t.origin,t.direction);const a=x(e);Object(s.g)(r,i,t.origin),Object(s.e)(r,r,1/Object(s.p)(r)*a);const c=y(e,t.origin),l=Object(h.a)(t.origin,r);return Object(o.d)(n,l+c,i),Object(s.q)(r,r,n),r}function E(e,t,r){const i=Object(s.j)(m.d.get(),t,_(e)),n=Object(s.e)(m.d.get(),i,e[3]/Object(s.p)(i));return Object(s.f)(r,n,_(e))}function y(e,t){const r=Object(s.j)(m.d.get(),t,_(e)),i=Object(s.p)(r),a=x(e),o=a+Math.abs(a-i);return Object(n.b)(a/o)}const w=Object(c.f)();function P(e,t,r,i){const a=Object(s.j)(w,t,_(e));switch(r){case d.a.X:{const e=Object(n.d)(a,w)[2];return Object(s.w)(i,-Math.sin(e),Math.cos(e),0)}case d.a.Y:{const e=Object(n.d)(a,w),t=e[1],r=e[2],o=Math.sin(t);return Object(s.w)(i,-o*Math.cos(r),-o*Math.sin(r),Math.cos(t))}case d.a.Z:return Object(s.r)(i,a);default:return}}function R(e,t){const r=Object(s.j)(j,t,_(e));return Object(s.p)(r)-e[3]}const I=Object(c.f)(),j=Object(c.f)(),N=Object.freeze({__proto__:null,create:v,copy:b,fromCenterAndRadius:function(e,t){return Object(u.g)(e[0],e[1],e[2],t)},wrap:g,clear:O,fromRadius:function(e){return e},getRadius:x,getCenter:_,fromValues:T,elevate:function(e,t,r){return e!==r&&Object(s.k)(r,e),r[3]=e[3]+t,r},setExtent:function(e,t,r){return p.error("sphere.setExtent is not yet supported"),e===r?r:b(e,r)},intersectRay:A,intersectsRay:M,intersectRayClosestSilhouette:function(e,t,r){if(A(e,t,r))return r;const i=C(e,t,m.d.get());return Object(s.f)(r,t.origin,Object(s.e)(m.d.get(),t.direction,Object(s.m)(t.origin,i)/Object(s.p)(t.direction))),r},closestPointOnSilhouette:C,closestPoint:function(e,t,r){return A(e,t,r)?r:(Object(f.a)(t,_(e),r),E(e,r,r))},projectPoint:E,distanceToSilhouette:function(e,t){const r=Object(s.j)(m.d.get(),t,_(e)),i=Object(s.t)(r),n=e[3]*e[3];return Math.sqrt(Math.abs(i-n))},angleToSilhouette:y,axisAt:P,altitudeAt:R,setAltitudeAt:function(e,t,r,i){const n=R(e,t),a=P(e,t,d.a.Z,j),o=Object(s.e)(j,a,r-n);return Object(s.f)(i,t,o)}})},500:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(126);function n(e){e.code.add(i.a`const float MAX_RGBA_FLOAT =
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
}`)}},501:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return s})),r.d(t,"e",(function(){return l}));var i=r(147),n=r(920);function a(e,t,r){e.setUniform3f("cameraPosition",r[3]-t[0],r[7]-t[1],r[11]-t[2])}function o(e,t){e.setUniformMatrix4fv("proj",t)}function s(e,t,r){Object(i.j)(u,r,t),e.setUniform3fv("localOrigin",t),e.setUniformMatrix4fv("view",u)}function c(e,t){s(e,t.origin,t.camera.viewMatrix)}function l(e,t){e.setUniform4fv("viewport",t.camera.fullViewport)}const u=Object(n.a)()},502:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return l}));var i=r(446),n=r(913),a=r(126);Object(i.c)(0,.6,.2);var o,s;function c(e,t){const r=e.fragment,i=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;t.pbrMode===o.Normal&&i&&e.include(n.a,t),t.pbrMode!==o.Schematic?(t.pbrMode===o.Disabled&&r.code.add(a.a`float getBakedOcclusion() { return 1.0; }`),t.pbrMode===o.Normal&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(a.a`vec3 mrr;
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
float getBakedOcclusion() { return 1.0; }`)}function l(e,t,r=!1){r||(e.setUniform3fv("mrrFactors",t.mrrFactors),e.setUniform3fv("emissionFactor",t.emissiveFactor))}(s=o||(o={}))[s.Disabled=0]="Disabled",s[s.Normal=1]="Normal",s[s.Schematic=2]="Schematic",s[s.Water=3]="Water",s[s.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",s[s.COUNT=5]="COUNT"},513:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return f})),r.d(t,"d",(function(){return u})),r.d(t,"e",(function(){return l}));var i=r(85),n=r(147),a=r(200),o=r(278),s=r(725);function c(e,t){return Object(i.j)(e)&&(e=[]),e.push(t),e}function l(e,t){if(Object(i.j)(e))return null;const r=e.filter((e=>e!==t));return 0===r.length?null:r}function u(e){return!!Object(i.k)(e)&&!e.visible}function d(e,t,r){const a=e.origin.vec3;Object(o.i)(p,-a[0],-a[1],-a[2]),Object(i.k)(e.transformation)?Object(n.m)(t,p,e.transformation):Object(n.c)(t,p),r&&(Object(n.a)(r,t),Object(n.t)(r,r))}function f(e,t,r,i,n){h[0]=e.get(t,0),h[1]=e.get(t,1),h[2]=e.get(t,2),Object(s.a)(h,m,3),r.set(n,0,m[0]),i.set(n,0,m[1]),r.set(n,1,m[2]),i.set(n,1,m[3]),r.set(n,2,m[4]),i.set(n,2,m[5])}const h=new Float64Array(3),m=new Float32Array(6),p=Object(a.d)()},526:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return s}));var i=r(116),n=r(117),a=r(109);function o(e,t,r){const i=Object(n.h)(e,t)/Object(n.h)(e,e);return Object(n.e)(r,e,i)}function s(e,t){return Object(n.h)(e,t)/Object(n.p)(e)}function c(e,t){const r=Object(n.h)(e,t)/(Object(n.p)(e)*Object(n.p)(t));return-Object(i.b)(r)}function l(e,t,r){Object(n.r)(u,e),Object(n.r)(d,t);const a=Object(n.h)(u,d),o=Object(i.b)(a),s=Object(n.g)(u,u,d);return Object(n.h)(s,r)<0?2*Math.PI-o:o}const u=Object(a.f)(),d=Object(a.f)()},544:function(e,t,r){"use strict";var i;r.d(t,"a",(function(){return i})),function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Geometry=2]="Geometry",e[e.Material=3]="Material",e[e.Texture=4]="Texture",e[e.COUNT=5]="COUNT"}(i||(i={}))},545:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(163);class n{constructor(e){this._material=e.material,this._techniqueRep=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRep.release(this._technique)}get technique(){return this._technique}ensureTechnique(e,t,r=this._output){return this._technique=this._techniqueRep.releaseAndAcquire(e,this._material.getTechniqueConfig(r,t),this._technique),this._technique}ensureResources(e){return i.g.LOADED}}},560:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(244);class n{constructor(){this.id=Object(i.a)()}unload(){}}},567:function(e,t,r){"use strict";var i;r.d(t,"a",(function(){return i})),function(e){e[e.MATERIAL=0]="MATERIAL",e[e.MATERIAL_ALPHA=1]="MATERIAL_ALPHA",e[e.MATERIAL_DEPTH=2]="MATERIAL_DEPTH",e[e.MATERIAL_NORMAL=3]="MATERIAL_NORMAL",e[e.MATERIAL_DEPTH_SHADOWMAP_ALL=4]="MATERIAL_DEPTH_SHADOWMAP_ALL",e[e.MATERIAL_HIGHLIGHT=5]="MATERIAL_HIGHLIGHT",e[e.MATERIAL_DEPTH_SHADOWMAP_DEFAULT=6]="MATERIAL_DEPTH_SHADOWMAP_DEFAULT",e[e.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT=7]="MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT",e[e.MAX_PASS=8]="MAX_PASS"}(i||(i={}))},584:function(e,t,r){"use strict";var i;r.d(t,"a",(function(){return i})),function(e){e[e.X=0]="X",e[e.Y=1]="Y",e[e.Z=2]="Z"}(i||(i={}))},595:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var i=r(85),n=r(163),a=r(212),o=r(117),s=r(109),c=r(278);class l{constructor(e,t,r,i){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.indices=r,this.position=i,this.center=Object(s.f)(),Object(c.a)(e.length>=1),Object(c.a)(r.length%this._numIndexPerPrimitive==0),Object(c.a)(r.length>=e.length*this._numIndexPerPrimitive),Object(c.a)(3===i.size||4===i.size);const{data:n,size:a}=i,l=e.length;let d=a*r[this._numIndexPerPrimitive*e[0]];u.clear(),u.push(d),this.bbMin=Object(s.h)(n[d],n[d+1],n[d+2]),this.bbMax=Object(s.d)(this.bbMin);for(let o=0;o<l;++o){const t=this._numIndexPerPrimitive*e[o];for(let e=0;e<this._numIndexPerPrimitive;++e){d=a*r[t+e],u.push(d);let i=n[d];this.bbMin[0]=Math.min(i,this.bbMin[0]),this.bbMax[0]=Math.max(i,this.bbMax[0]),i=n[d+1],this.bbMin[1]=Math.min(i,this.bbMin[1]),this.bbMax[1]=Math.max(i,this.bbMax[1]),i=n[d+2],this.bbMin[2]=Math.min(i,this.bbMin[2]),this.bbMax[2]=Math.max(i,this.bbMax[2])}}Object(o.i)(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let f=this.radius*this.radius;for(let o=0;o<u.length;++o){d=u.getItemAt(o);const e=n[d]-this.center[0],t=n[d+1]-this.center[1],r=n[d+2]-this.center[2],i=e*e+t*t+r*r;if(i<=f)continue;const a=Math.sqrt(i),s=.5*(a-this.radius);this.radius=this.radius+s,f=this.radius*this.radius;const c=s/a;this.center[0]+=e*c,this.center[1]+=t*c,this.center[2]+=r*c}u.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if(Object(o.l)(this.bbMin,this.bbMax)>1){const e=Object(o.i)(Object(s.f)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),i=new Array(8);for(let o=0;o<8;++o)i[o]=0;const{data:n,size:a}=this.position;for(let o=0;o<t;++o){let t=0;const s=this._numIndexPerPrimitive*this.primitiveIndices[o];let c=a*this.indices[s],l=n[c],u=n[c+1],d=n[c+2];for(let e=1;e<this._numIndexPerPrimitive;++e){c=a*this.indices[s+e];const t=n[c],r=n[c+1],i=n[c+2];t<l&&(l=t),r<u&&(u=r),i<d&&(d=i)}l<e[0]&&(t|=1),u<e[1]&&(t|=2),d<e[2]&&(t|=4),r[o]=t,++i[t]}let c=0;for(let o=0;o<8;++o)i[o]>0&&++c;if(c<2)return;const u=new Array(8);for(let o=0;o<8;++o)u[o]=i[o]>0?new Uint32Array(i[o]):void 0;for(let o=0;o<8;++o)i[o]=0;for(let o=0;o<t;++o){const e=r[o];u[e][i[e]++]=this.primitiveIndices[o]}this._children=new Array(8);for(let o=0;o<8;++o)void 0!==u[o]&&(this._children[o]=new l(u[o],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){u.prune()}}const u=new a.a({deallocator:null});var d=r(560),f=r(544),h=r(562),m=r(139);class p extends d.a{constructor(e,t=[],r=n.f.Triangle,i=-1){super(),this._primitiveType=r,this.edgeIndicesLength=i,this.type=f.a.Geometry,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[n,a]of e)a&&this._vertexAttributes.set(n,{...a});if(null==t||0===t.length){const e=function(e){const t=e.values().next().value;return null==t?0:t.data.length/t.size}(this._vertexAttributes),t=Object(h.d)(e);this.edgeIndicesLength=this.edgeIndicesLength<0?e:this.edgeIndicesLength;for(const r of this._vertexAttributes.keys())this._indices.set(r,t)}else for(const[n,a]of t)a&&(this._indices.set(n,v(a)),n===m.a.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(n).length:this.edgeIndicesLength))}cloneShallow(){const e=new p([],void 0,this._primitiveType,void 0),{_vertexAttributes:t,_indices:r}=e;return this._vertexAttributes.forEach(((e,r)=>{t.set(r,e)})),this._indices.forEach(((e,t)=>{r.set(t,e)})),e.screenToWorldRatio=this.screenToWorldRatio,e._boundingInfo=this._boundingInfo,e}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){const t=this._vertexAttributes.get(e);return t&&!t.exclusive&&(t.data=Array.from(t.data),t.exclusive=!0),t}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return Object(i.j)(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return this.primitiveType===n.f.Triangle?this._computeAttachmentOriginTriangles(e):this._computeAttachmentOriginPoints(e)}_computeAttachmentOriginTriangles(e){const t=this.indices.get(m.a.POSITION),r=this.vertexAttributes.get(m.a.POSITION);return Object(h.c)(r,t,e)}_computeAttachmentOriginPoints(e){const t=this.indices.get(m.a.POSITION),r=this.vertexAttributes.get(m.a.POSITION);return Object(h.b)(r,t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get(m.a.POSITION);if(0===e.length)return null;const t=this.primitiveType===n.f.Triangle?3:1;Object(c.a)(e.length%t==0,"Indexing error: "+e.length+" not divisible by "+t);const r=Object(h.d)(e.length/t),i=this.vertexAttributes.get(m.a.POSITION);return new l(r,t,e,i)}}function v(e){if(e.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return e;for(const t of e)if(t>=65536)return e;return new Uint16Array(e)}},604:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return m})),r.d(t,"d",(function(){return p})),r.d(t,"e",(function(){return f})),r.d(t,"f",(function(){return d}));var i=r(147),n=r(421),a=r(278),o=r(139);function s(e,t,r,i,n=1){const a=r.typedBuffer,o=r.typedBufferStride,s=e.length;if(i*=o,1===n)for(let c=0;c<s;++c)a[i]=t[e[c]],i+=o;else for(let c=0;c<s;++c){const r=t[e[c]];for(let e=0;e<n;e++)a[i]=r,i+=o}}function c(e,t,r,i){const n=r.typedBuffer,a=r.typedBufferStride,o=e.length;i*=a;for(let s=0;s<o;++s){const r=2*e[s];n[i]=t[r],n[i+1]=t[r+1],i+=a}}function l(e,t,r,i,n){const a=r.typedBuffer,o=r.typedBufferStride,s=e.length;if(i*=o,null==n||1===n)for(let c=0;c<s;++c){const r=3*e[c];a[i]=t[r],a[i+1]=t[r+1],a[i+2]=t[r+2],i+=o}else for(let c=0;c<s;++c){const r=3*e[c];for(let e=0;e<n;++e)a[i]=t[r],a[i+1]=t[r+1],a[i+2]=t[r+2],i+=o}}function u(e,t,r,i,n=1){const a=r.typedBuffer,o=r.typedBufferStride,s=e.length;if(i*=o,1===n)for(let c=0;c<s;++c){const r=4*e[c];a[i]=t[r],a[i+1]=t[r+1],a[i+2]=t[r+2],a[i+3]=t[r+3],i+=o}else for(let c=0;c<s;++c){const r=4*e[c];for(let e=0;e<n;++e)a[i]=t[r],a[i+1]=t[r+1],a[i+2]=t[r+2],a[i+3]=t[r+3],i+=o}}function d(e,t,r,i,n,a=1){if(!r)return void l(e,t,i,n,a);const o=i.typedBuffer,s=i.typedBufferStride,c=e.length,u=r[0],d=r[1],f=r[2],h=r[4],m=r[5],p=r[6],v=r[8],b=r[9],g=r[10],O=r[12],x=r[13],_=r[14];if(n*=s,1===a)for(let l=0;l<c;++l){const r=3*e[l],i=t[r],a=t[r+1],c=t[r+2];o[n]=u*i+h*a+v*c+O,o[n+1]=d*i+m*a+b*c+x,o[n+2]=f*i+p*a+g*c+_,n+=s}else for(let l=0;l<c;++l){const r=3*e[l],i=t[r],c=t[r+1],T=t[r+2],A=u*i+h*c+v*T+O,S=d*i+m*c+b*T+x,M=f*i+p*c+g*T+_;for(let e=0;e<a;++e)o[n]=A,o[n+1]=S,o[n+2]=M,n+=s}}function f(e,t,r,n,a,o=1){if(!r)return void l(e,t,n,a,o);const s=r,c=n.typedBuffer,u=n.typedBufferStride,d=e.length,f=s[0],h=s[1],m=s[2],p=s[4],v=s[5],b=s[6],g=s[8],O=s[9],x=s[10],_=!Object(i.p)(s),T=1e-6,A=1-T;if(a*=u,1===o)for(let i=0;i<d;++i){const r=3*e[i],n=t[r],o=t[r+1],s=t[r+2];let l=f*n+p*o+g*s,d=h*n+v*o+O*s,S=m*n+b*o+x*s;if(_){const e=l*l+d*d+S*S;if(e<A&&e>T){const t=1/Math.sqrt(e);l*=t,d*=t,S*=t}}c[a+0]=l,c[a+1]=d,c[a+2]=S,a+=u}else for(let i=0;i<d;++i){const r=3*e[i],n=t[r],s=t[r+1],l=t[r+2];let d=f*n+p*s+g*l,S=h*n+v*s+O*l,M=m*n+b*s+x*l;if(_){const e=d*d+S*S+M*M;if(e<A&&e>T){const t=1/Math.sqrt(e);d*=t,S*=t,M*=t}}for(let e=0;e<o;++e)c[a+0]=d,c[a+1]=S,c[a+2]=M,a+=u}}function h(e,t,r,n,a,o=1){if(!r)return void u(e,t,n,a,o);const s=r,c=n.typedBuffer,l=n.typedBufferStride,d=e.length,f=s[0],h=s[1],m=s[2],p=s[4],v=s[5],b=s[6],g=s[8],O=s[9],x=s[10],_=!Object(i.p)(s),T=1e-6,A=1-T;if(a*=l,1===o)for(let i=0;i<d;++i){const r=4*e[i],n=t[r],o=t[r+1],s=t[r+2],u=t[r+3];let d=f*n+p*o+g*s,S=h*n+v*o+O*s,M=m*n+b*o+x*s;if(_){const e=d*d+S*S+M*M;if(e<A&&e>T){const t=1/Math.sqrt(e);d*=t,S*=t,M*=t}}c[a+0]=d,c[a+1]=S,c[a+2]=M,c[a+3]=u,a+=l}else for(let i=0;i<d;++i){const r=4*e[i],n=t[r],s=t[r+1],u=t[r+2],d=t[r+3];let S=f*n+p*s+g*u,M=h*n+v*s+O*u,C=m*n+b*s+x*u;if(_){const e=S*S+M*M+C*C;if(e<A&&e>T){const t=1/Math.sqrt(e);S*=t,M*=t,C*=t}}for(let e=0;e<o;++e)c[a+0]=S,c[a+1]=M,c[a+2]=C,c[a+3]=d,a+=l}}function m(e,t,r,i,n,a=1){const o=i.typedBuffer,s=i.typedBufferStride,c=e.length;if(n*=s,1===a){if(4===r)for(let l=0;l<c;++l){const r=4*e[l];o[n]=t[r],o[n+1]=t[r+1],o[n+2]=t[r+2],o[n+3]=t[r+3],n+=s}else if(3===r)for(let l=0;l<c;++l){const r=3*e[l];o[n]=t[r],o[n+1]=t[r+1],o[n+2]=t[r+2],o[n+3]=255,n+=s}}else if(4===r)for(let l=0;l<c;++l){const r=4*e[l];for(let e=0;e<a;++e)o[n]=t[r],o[n+1]=t[r+1],o[n+2]=t[r+2],o[n+3]=t[r+3],n+=s}else if(3===r)for(let l=0;l<c;++l){const r=3*e[l];for(let e=0;e<a;++e)o[n]=t[r],o[n+1]=t[r+1],o[n+2]=t[r+2],o[n+3]=255,n+=s}}function p(e,t,r,i,s,l){for(const u of t.fieldNames){const t=e.vertexAttributes.get(u),p=e.indices.get(u);if(t&&p)switch(u){case o.a.POSITION:{Object(a.a)(3===t.size);const e=s.getField(u,n.u);e&&d(p,t.data,r,e,l);break}case o.a.NORMAL:{Object(a.a)(3===t.size);const e=s.getField(u,n.u);e&&f(p,t.data,i,e,l);break}case o.a.UV0:{Object(a.a)(2===t.size);const e=s.getField(u,n.m);e&&c(p,t.data,e,l);break}case o.a.COLOR:{Object(a.a)(3===t.size||4===t.size);const e=s.getField(u,n.J);e&&m(p,t.data,t.size,e,l);break}case o.a.SYMBOLCOLOR:{Object(a.a)(3===t.size||4===t.size);const e=s.getField(u,n.J);e&&m(p,t.data,t.size,e,l);break}case o.a.TANGENT:{Object(a.a)(4===t.size);const e=s.getField(u,n.C);e&&h(p,t.data,i,e,l);break}}}}},622:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(210),n=r(500),a=r(126);function o(e,t){e.fragment.include(n.a),t.output===i.a.Shadow?(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(a.a`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):t.output===i.a.Depth&&e.fragment.code.add(a.a`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}},623:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return s}));var i=r(126),n=r(139);function a(e,t){t.vvInstancingEnabled&&(t.vvSize||t.vvColor)&&e.attributes.add(n.a.INSTANCEFEATUREATTRIBUTE,"vec4"),t.vvSize?(e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),e.vertex.uniforms.add("vvSymbolAnchor","vec3"),e.vertex.code.add(i.a`vec3 vvScale(vec4 _featureAttribute) {
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
    `)):e.vertex.code.add(i.a`vec4 vvColor() { return vec4(1.0); }`)}function o(e,t){t.vvSizeEnabled&&(e.setUniform3fv("vvSizeMinSize",t.vvSizeMinSize),e.setUniform3fv("vvSizeMaxSize",t.vvSizeMaxSize),e.setUniform3fv("vvSizeOffset",t.vvSizeOffset),e.setUniform3fv("vvSizeFactor",t.vvSizeFactor)),t.vvColorEnabled&&(e.setUniform1fv("vvColorValues",t.vvColorValues),e.setUniform4fv("vvColorColors",t.vvColorColors))}function s(e,t){o(e,t),t.vvOpacityEnabled&&(e.setUniform1fv("vvOpacityValues",t.vvOpacityValues),e.setUniform1fv("vvOpacityOpacities",t.vvOpacityOpacities))}function c(e,t){o(e,t),t.vvSizeEnabled&&(e.setUniform3fv("vvSymbolAnchor",t.vvSymbolAnchor),e.setUniformMatrix3fv("vvSymbolRotationMatrix",t.vvSymbolRotationMatrix))}},624:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(126),n=r(139);function a(e,t){t.attributeColor?(e.attributes.add(n.a.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(i.a`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(i.a`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(i.a`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},625:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return s}));var i=r(500),n=r(126);function a(e){e.fragment.include(i.a),e.fragment.uniforms.add("shadowMapTex","sampler2D"),e.fragment.uniforms.add("numCascades","int"),e.fragment.uniforms.add("cascadeDistances","vec4"),e.fragment.uniforms.add("shadowMapMatrix","mat4",4),e.fragment.uniforms.add("depthHalfPixelSz","float"),e.fragment.code.add(n.a`int chooseCascade(float _linearDepth, out mat4 mat) {
vec4 distance = cascadeDistances;
float depth = _linearDepth;
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
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, depthHalfPixelSz, shadowMapTex);
}`)}function o(e,t){t.shadowMappingEnabled&&(t.shadowMap.bind(e),t.shadowMap.bindView(e,t.origin))}function s(e,t,r){t.shadowMappingEnabled&&t.shadowMap.bindView(e,r)}function c(e,t){t.shadowMappingEnabled&&t.shadowMap.bindView(e,t.origin)}},639:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return i}));var i,n,a=r(126),o=r(139);function s(e,t){t.attributeTextureCoordinates===i.Default&&(e.attributes.add(o.a.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(a.a`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),t.attributeTextureCoordinates===i.Atlas&&(e.attributes.add(o.a.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(o.a.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),e.vertex.code.add(a.a`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),t.attributeTextureCoordinates===i.None&&e.vertex.code.add(a.a`void forwardTextureCoordinates() {}`)}(n=i||(i={}))[n.None=0]="None",n[n.Default=1]="Default",n[n.Atlas=2]="Atlas",n[n.COUNT=3]="COUNT"},654:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return u})),r.d(t,"e",(function(){return d})),r.d(t,"f",(function(){return f})),r.d(t,"g",(function(){return c})),r.d(t,"h",(function(){return s}));var i=r(163),n=r(94);const a={func:n.h.LESS},o={func:n.h.ALWAYS},s={mask:255},c={mask:0},l={function:{func:n.h.ALWAYS,ref:i.h.OutlineVisualElementMask,mask:i.h.OutlineVisualElementMask},operation:{fail:n.w.KEEP,zFail:n.w.KEEP,zPass:n.w.ZERO}},u={function:{func:n.h.ALWAYS,ref:i.h.OutlineVisualElementMask,mask:i.h.OutlineVisualElementMask},operation:{fail:n.w.KEEP,zFail:n.w.KEEP,zPass:n.w.REPLACE}},d={function:{func:n.h.EQUAL,ref:i.h.OutlineVisualElementMask,mask:i.h.OutlineVisualElementMask},operation:{fail:n.w.KEEP,zFail:n.w.KEEP,zPass:n.w.KEEP}},f={function:{func:n.h.NOTEQUAL,ref:i.h.OutlineVisualElementMask,mask:i.h.OutlineVisualElementMask},operation:{fail:n.w.KEEP,zFail:n.w.KEEP,zPass:n.w.KEEP}}},689:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return i}));var i,n,a=r(222),o=r(126);function s(e,t){const r=e.fragment;switch(r.code.add(o.a`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case i.None:r.code.add(o.a`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case i.View:r.code.add(o.a`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case i.WindingOrder:r.code.add(o.a`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:Object(a.a)(t.doubleSidedMode);case i.COUNT:}}(n=i||(i={}))[n.None=0]="None",n[n.View=1]="View",n[n.WindingOrder=2]="WindingOrder",n[n.COUNT=3]="COUNT"},692:function(e,t,r){"use strict";r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return f}));var i=r(382),n=r(139),a=r(94),o=r(279);new o.a(n.a.POSITION,3,a.k.FLOAT,0,12),new o.a(n.a.POSITION,3,a.k.FLOAT,0,20),new o.a(n.a.UV0,2,a.k.FLOAT,12,20),new o.a(n.a.POSITION,3,a.k.FLOAT,0,32),new o.a(n.a.NORMAL,3,a.k.FLOAT,12,32),new o.a(n.a.UV0,2,a.k.FLOAT,24,32),new o.a(n.a.POSITION,3,a.k.FLOAT,0,16),new o.a(n.a.COLOR,4,a.k.UNSIGNED_BYTE,12,16);const s=[new o.a(n.a.POSITION,2,a.k.FLOAT,0,8)],c=[new o.a(n.a.POSITION,2,a.k.FLOAT,0,16),new o.a(n.a.UV0,2,a.k.FLOAT,8,16)];var l=r(162),u=r(203),d=r(164);function f(e,t=s,r=i.a,n=-1,o=1){let u=null;return u=t===c?new Float32Array([n,n,0,0,o,n,1,0,n,o,0,1,o,o,1,1]):new Float32Array([n,n,o,n,n,o,o,o]),new d.a(e,r,{geometry:t},{geometry:l.a.createVertex(e,a.D.STATIC_DRAW,u)})}function h(e){return new u.a(e,{target:a.A.TEXTURE_2D,pixelFormat:a.p.RGBA,dataType:a.q.UNSIGNED_BYTE,samplingMode:a.z.NEAREST,width:1,height:1},new Uint8Array([255,255,255,255]))}},703:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return a}));var i=r(126);function n(e){const t=i.a`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;e.fragment.code.add(t),e.vertex.code.add(t)}var a,o,s=r(139);function c(e,t){t.normalType===a.Attribute&&(e.attributes.add(s.a.NORMAL,"vec3"),e.vertex.code.add(i.a`vec3 normalModel() {
return normal;
}`)),t.normalType===a.CompressedAttribute&&(e.include(n),e.attributes.add(s.a.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(i.a`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),t.normalType===a.ScreenDerivative&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(i.a`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}(o=a||(a={}))[o.Attribute=0]="Attribute",o[o.CompressedAttribute=1]="CompressedAttribute",o[o.Ground=2]="Ground",o[o.ScreenDerivative=3]="ScreenDerivative",o[o.COUNT=4]="COUNT"},725:function(e,t,r){"use strict";function i(e,t,r){for(let i=0;i<r;++i)t[2*i]=e[i],t[2*i+1]=e[i]-t[2*i]}function n(e,t,r,n){for(let s=0;s<n;++s)a[0]=e[s],i(a,o,1),t[s]=o[0],r[s]=o[1]}r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return n}));const a=new Float64Array(1),o=new Float32Array(2)},730:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(126);function n(e){e.vertex.code.add(i.a`const float PI = 3.141592653589793;`),e.fragment.code.add(i.a`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},731:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return s}));var i=r(272),n=r(747),a=r(126);function o(e,t){const r=e.vertex.code;t.verticalOffsetEnabled?(e.vertex.uniforms.add("verticalOffset","vec4"),t.screenSizePerspectiveEnabled&&(e.include(n.a),e.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),r.add(a.a`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${t.viewingMode===i.a.Global?a.a`vec3 worldNormal = normalize(worldPos + localOrigin);`:a.a`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${t.screenSizePerspectiveEnabled?a.a`
          float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:a.a`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):r.add(a.a`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}function s(e,t,r){if(!t.verticalOffset)return;const i=function(e,t,r,i=c){return i.screenLength=e.screenLength,i.perDistance=Math.tan(.5*t)/(.5*r),i.minWorldLength=e.minWorldLength,i.maxWorldLength=e.maxWorldLength,i}(t.verticalOffset,r.camera.fovY,r.camera.fullViewport[3]),n=r.camera.pixelRatio||1;e.setUniform4f("verticalOffset",i.screenLength*n,i.perDistance,i.minWorldLength,i.maxWorldLength)}const c={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0}},732:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(210),n=r(126);function a(e,t){t.output===i.a.Color&&t.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(n.a`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):t.output===i.a.Depth||t.output===i.a.Shadow?(e.varyings.add("linearDepth","float"),e.vertex.uniforms.add("nearFar","vec2"),e.vertex.code.add(n.a`void forwardLinearDepth() {
linearDepth = (-position_view().z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)):e.vertex.code.add(n.a`void forwardLinearDepth() {}`)}},734:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return O})),r.d(t,"c",(function(){return g}));var i=r(85),n=r(233),a=r(367),o=r(147),s=r(200),c=r(543),l=r(462),u=r(117),d=r(446),f=r(109),h=r(257),m=r(498);class p{constructor(){this._transform=Object(s.d)(),this._transformInverse=new v({value:this._transform},o.a,s.d),this._transformInverseTranspose=new v(this._transformInverse,o.t,s.d),this._transformTranspose=new v({value:this._transform},o.t,s.d),this._transformInverseRotation=new v({value:this._transform},n.k,a.b)}_invalidateLazyTransforms(){this._transformInverse.invalidate(),this._transformInverseTranspose.invalidate(),this._transformTranspose.invalidate(),this._transformInverseRotation.invalidate()}get transform(){return this._transform}get inverse(){return this._transformInverse.value}get inverseTranspose(){return this._transformInverseTranspose.value}get inverseRotation(){return this._transformInverseRotation.value}get transpose(){return this._transformTranspose.value}setTransformMatrix(e){Object(o.c)(this._transform,e)}multiplyTransform(e){Object(o.m)(this._transform,this._transform,e)}set(e){Object(o.c)(this._transform,e),this._invalidateLazyTransforms()}setAndInvalidateLazyTransforms(e,t){this.setTransformMatrix(e),this.multiplyTransform(t),this._invalidateLazyTransforms()}}class v{constructor(e,t,r){this.original=e,this.update=t,this.dirty=!0,this.transform=r()}invalidate(){this.dirty=!0}get value(){return this.dirty&&(this.update(this.transform,this.original.value),this.dirty=!1),this.transform}}const b=new class{constructor(e=0){this.offset=e,this.sphere=Object(m.c)(),this.tmpVertex=Object(f.f)()}applyToVertex(e,t,r){const i=this.objectTransform.transform;let n=i[0]*e+i[4]*t+i[8]*r+i[12],a=i[1]*e+i[5]*t+i[9]*r+i[13],o=i[2]*e+i[6]*t+i[10]*r+i[14];const s=this.offset/Math.sqrt(n*n+a*a+o*o);n+=n*s,a+=a*s,o+=o*s;const c=this.objectTransform.inverse;return this.tmpVertex[0]=c[0]*n+c[4]*a+c[8]*o+c[12],this.tmpVertex[1]=c[1]*n+c[5]*a+c[9]*o+c[13],this.tmpVertex[2]=c[2]*n+c[6]*a+c[10]*o+c[14],this.tmpVertex}applyToMinMax(e,t){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*i,t[1]+=t[1]*i,t[2]+=t[2]*i}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.sphere[0]=e[0]+e[0]*r,this.sphere[1]=e[1]+e[1]*r,this.sphere[2]=e[2]+e[2]*r,this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};function g(e){return Object(i.k)(e)?(b.offset=e,b):null}new class{constructor(e=0){this.offset=e,this.componentLocalOriginLength=0,this.tmpVertex=Object(f.f)(),this.mbs=Object(h.e)(),this.obb={center:Object(f.f)(),halfSize:Object(d.b)(),quaternion:null}}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,t,r){const i=e,n=t,a=r+this.componentLocalOriginLength,o=this.offset/Math.sqrt(i*i+n*n+a*a);return this.tmpVertex[0]=e+i*o,this.tmpVertex[1]=t+n*o,this.tmpVertex[2]=r+a*o,this.tmpVertex}applyToAabb(e){const t=e[0],r=e[1],i=e[2]+this.componentLocalOriginLength,n=e[3],a=e[4],o=e[5]+this.componentLocalOriginLength,s=this.offset/Math.sqrt(t*t+r*r+i*i);e[0]+=t*s,e[1]+=r*s,e[2]+=i*s;const c=this.offset/Math.sqrt(n*n+a*a+o*o);return e[3]+=n*c,e[4]+=a*c,e[5]+=o*c,e}applyToMbs(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.mbs[0]=e[0]+e[0]*r,this.mbs[1]=e[1]+e[1]*r,this.mbs[2]=e[2]+e[2]*r,this.mbs[3]=e[3]+e[3]*this.offset/t,this.mbs}applyToObb(e){const t=e.center,r=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);this.obb.center[0]=t[0]+t[0]*r,this.obb.center[1]=t[1]+t[1]*r,this.obb.center[2]=t[2]+t[2]*r,Object(u.u)(this.obb.halfSize,e.halfSize,e.quaternion),Object(u.f)(this.obb.halfSize,this.obb.halfSize,e.center);const i=this.offset/Math.sqrt(this.obb.halfSize[0]*this.obb.halfSize[0]+this.obb.halfSize[1]*this.obb.halfSize[1]+this.obb.halfSize[2]*this.obb.halfSize[2]);return this.obb.halfSize[0]+=this.obb.halfSize[0]*i,this.obb.halfSize[1]+=this.obb.halfSize[1]*i,this.obb.halfSize[2]+=this.obb.halfSize[2]*i,Object(u.j)(this.obb.halfSize,this.obb.halfSize,e.center),Object(c.a)(x,e.quaternion),Object(u.u)(this.obb.halfSize,this.obb.halfSize,x),this.obb.halfSize[0]*=this.obb.halfSize[0]<0?-1:1,this.obb.halfSize[1]*=this.obb.halfSize[1]<0?-1:1,this.obb.halfSize[2]*=this.obb.halfSize[2]<0?-1:1,this.obb.quaternion=e.quaternion,this.obb}};new class{constructor(e=0){this.offset=e,this.tmpVertex=Object(f.f)()}applyToVertex(e,t,r){const i=e+this.localOrigin[0],n=t+this.localOrigin[1],a=r+this.localOrigin[2],o=this.offset/Math.sqrt(i*i+n*n+a*a);return this.tmpVertex[0]=e+i*o,this.tmpVertex[1]=t+n*o,this.tmpVertex[2]=r+a*o,this.tmpVertex}applyToAabb(e){const t=e[0]+this.localOrigin[0],r=e[1]+this.localOrigin[1],i=e[2]+this.localOrigin[2],n=e[3]+this.localOrigin[0],a=e[4]+this.localOrigin[1],o=e[5]+this.localOrigin[2],s=this.offset/Math.sqrt(t*t+r*r+i*i);e[0]+=t*s,e[1]+=r*s,e[2]+=i*s;const c=this.offset/Math.sqrt(n*n+a*a+o*o);return e[3]+=n*c,e[4]+=a*c,e[5]+=o*c,e}};const O="terrain",x=Object(l.b)()},747:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return o}));var i=r(126),n=r(434);function a(e){e.vertex.code.add(i.a`float screenSizePerspectiveMinSize(float size, vec4 factor) {
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
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),e.vertex.code.add(i.a`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function o(e,t){if(t.screenSizePerspective){Object(n.a)(t.screenSizePerspective,e,"screenSizePerspective");const r=t.screenSizePerspectiveAlignment||t.screenSizePerspective;Object(n.a)(r,e,"screenSizePerspectiveAlignment")}}},750:function(e,t,r){"use strict";r.d(t,"a",(function(){return k}));var i=r(222),n=r(88),a=r(138),o=r(116),s=r(85),c=r(91),l=r(549),u=r(98),d=r(819),f=r(528),h=r(163),m=r(157);let p;var v,b;(b=v||(v={}))[b.ETC1_RGB=0]="ETC1_RGB",b[b.ETC2_RGBA=1]="ETC2_RGBA",b[b.BC1_RGB=2]="BC1_RGB",b[b.BC3_RGBA=3]="BC3_RGBA",b[b.BC4_R=4]="BC4_R",b[b.BC5_RG=5]="BC5_RG",b[b.BC7_M6_RGB=6]="BC7_M6_RGB",b[b.BC7_M5_RGBA=7]="BC7_M5_RGBA",b[b.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",b[b.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",b[b.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",b[b.ATC_RGB=11]="ATC_RGB",b[b.ATC_RGBA=12]="ATC_RGBA",b[b.FXT1_RGB=17]="FXT1_RGB",b[b.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",b[b.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",b[b.ETC2_EAC_R11=20]="ETC2_EAC_R11",b[b.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",b[b.RGBA32=13]="RGBA32",b[b.RGB565=14]="RGB565",b[b.BGR565=15]="BGR565",b[b.RGBA4444=16]="RGBA4444";var g=r(94),O=r(203),x=r(647);let _=null,T=null;async function A(){return Object(s.j)(T)&&(T=function(){if(Object(s.j)(p)){const e=e=>Object(m.a)(`esri/libs/basisu/${e}`);p=Promise.all([r.e(241),r.e(260)]).then(r.bind(null,1344)).then((e=>e.b)).then((({default:t})=>t({locateFile:e}).then((e=>(e.initializeBasis(),delete e.then,e)))))}return p}(),_=await T),T}function S(e,t,r,i,n){const a=Object(x.b)(t?g.i.COMPRESSED_RGBA8_ETC2_EAC:g.i.COMPRESSED_RGB8_ETC2),o=n&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*i*a*o)}function M(e){return e.getNumImages()>=1&&!e.isUASTC()}function C(e){return e.getFaces()>=1&&e.isETC1S()}function E(e,t,r,i,n,a,o,s){const{compressedTextureETC:c,compressedTextureS3TC:l}=e.capabilities,[u,d]=c?i?[v.ETC2_RGBA,g.i.COMPRESSED_RGBA8_ETC2_EAC]:[v.ETC1_RGB,g.i.COMPRESSED_RGB8_ETC2]:l?i?[v.BC3_RGBA,g.i.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[v.BC1_RGB,g.i.COMPRESSED_RGB_S3TC_DXT1_EXT]:[v.RGBA32,g.p.RGBA],f=t.hasMipmap?r:Math.min(1,r),h=[];for(let v=0;v<f;v++)h.push(new Uint8Array(o(v,u))),s(v,u,h[v]);const m=h.length>1,p=m?g.z.LINEAR_MIPMAP_LINEAR:g.z.LINEAR,b={...t,samplingMode:p,hasMipmap:m,internalFormat:d,width:n,height:a};return new O.a(e,b,{type:"compressed",levels:h})}var y=r(560),w=r(544);const P=r(87).a.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),R=542327876,I=131072;function j(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const N=j("DXT1"),L=j("DXT3"),D=j("DXT5");function F(e,t,r){const{textureData:i,internalFormat:n,width:a,height:s}=function(e,t){const r=new Int32Array(e,0,31);if(r[0]!==R)return P.error("Invalid magic number in DDS header"),null;if(!(4&r[20]))return P.error("Unsupported format, must contain a FourCC code"),null;const i=r[21];let n,a;switch(i){case N:n=8,a=g.i.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case L:n=16,a=g.i.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case D:n=16,a=g.i.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return P.error("Unsupported FourCC code:",function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}(i)),null}let s=1,c=r[4],l=r[3];0==(3&c)&&0==(3&l)||(P.warn("Rounding up compressed texture size to nearest multiple of 4."),c=c+3&-4,l=l+3&-4);const u=c,d=l;let f,h;r[2]&I&&!1!==t&&(s=Math.max(1,r[7])),1===s||Object(o.j)(c)&&Object(o.j)(l)||(P.warn("Ignoring mipmaps of non power of two sized compressed texture."),s=1);let m=r[1]+4;const p=[];for(let o=0;o<s;++o)h=(c+3>>2)*(l+3>>2)*n,f=new Uint8Array(e,m,h),p.push(f),m+=h,c=Math.max(1,c>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:p},internalFormat:a,width:u,height:d}}(r,t.hasMipmap);return t.samplingMode=i.levels.length>1?g.z.LINEAR_MIPMAP_LINEAR:g.z.LINEAR,t.hasMipmap=i.levels.length>1,t.internalFormat=n,t.width=a,t.height=s,new O.a(e,t,i)}var z,B,U=r(692),G=r(278),H=r(314),V=r(788);class k extends y.a{constructor(e,t){super(),this.data=e,this.type=w.a.Texture,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new a.a,this.params=t||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:g.B.REPEAT,t:g.B.REPEAT},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||h.e.STRETCH,this.estimatedTexMemRequired=k._estimateTexMemRequired(this.data,this.params),this._startPreload()}_startPreload(){const e=this.data;Object(s.j)(e)||(e instanceof HTMLVideoElement?this._startPreloadVideoElement(e):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){Object(u.v)(e.src)||"auto"===e.preload&&e.crossOrigin||(e.preload="auto",e.crossOrigin="anonymous",e.src=e.src)}_startPreloadImageElement(e){Object(u.w)(e.src)||Object(u.v)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static _getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static _estimateTexMemRequired(e,t){if(Object(s.j)(e))return 0;if(Object(l.c)(e)||Object(l.k)(e))return t.encoding===k.KTX2_ENCODING?function(e,t){if(Object(s.j)(_))return e.byteLength;const r=new _.KTX2File(new Uint8Array(e)),i=C(r)?S(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),i}(e,t.mipmap):t.encoding===k.BASIS_ENCODING?function(e,t){if(Object(s.j)(_))return e.byteLength;const r=new _.BasisFile(new Uint8Array(e)),i=M(r)?S(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),i}(e,t.mipmap):e.byteLength;const{width:r,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?k._getDataDimensions(e):t;return(t.mipmap?4/3:1)*r*i*(t.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}_createDescriptor(e){var t;return{target:g.A.TEXTURE_2D,pixelFormat:g.p.RGBA,dataType:g.q.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?g.z.LINEAR_MIPMAP_LINEAR:g.z.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:null!=(t=this.params.maxAnisotropy)?t:this.params.mipmap?e.parameters.maxMaxAnisotropy:1}}get glTexture(){return this._glTexture}load(e,t){if(Object(s.k)(this._glTexture))return this._glTexture;if(Object(s.k)(this._loadingPromise))return this._loadingPromise;const r=this.data;return Object(s.j)(r)?(this._glTexture=new O.a(e,this._createDescriptor(e),null),this._glTexture):"string"==typeof r?this._loadFromURL(e,t,r):r instanceof Image?this._loadFromImageElement(e,t,r):r instanceof HTMLVideoElement?this._loadFromVideoElement(e,t,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this._loadFromImage(e,r,t):(Object(l.c)(r)||Object(l.k)(r))&&this.params.encoding===k.DDS_ENCODING?(this.data=void 0,this._loadFromDDSData(e,r)):(Object(l.c)(r)||Object(l.k)(r))&&this.params.encoding===k.KTX2_ENCODING?(this.data=void 0,this._loadFromKTX2(e,r)):(Object(l.c)(r)||Object(l.k)(r))&&this.params.encoding===k.BASIS_ENCODING?(this.data=void 0,this._loadFromBasis(e,r)):Object(l.k)(r)?this._loadFromPixelData(e,r):Object(l.c)(r)?this._loadFromPixelData(e,new Uint8Array(r)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,t,r){if(!(this.data instanceof HTMLVideoElement)||Object(s.j)(this._glTexture))return r;if(this.data.readyState<z.HAVE_CURRENT_DATA||r===this.data.currentTime)return r;if(Object(s.k)(this._powerOfTwoStretchInfo)){const{framebuffer:r,vao:i,sourceTexture:n}=this._powerOfTwoStretchInfo;n.setData(this.data),this._drawStretchedTexture(e,t,r,i,n,this._glTexture)}else{const{width:e,height:t}=this.data,{width:r,height:i}=this._glTexture.descriptor;e!==r||t!==i?this._glTexture.updateData(0,0,0,Math.min(e,r),Math.min(t,i),this.data):this._glTexture.setData(this.data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.data.currentTime}_loadFromDDSData(e,t){return this._glTexture=F(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>async function(e,t,r){Object(s.j)(_)&&(_=await A());const i=new _.KTX2File(new Uint8Array(r));if(!C(i))return null;i.startTranscoding();const n=E(e,t,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),((e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,r)=>i.transcodeImage(r,e,0,0,t,0,-1,-1)));return i.close(),i.delete(),n}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>async function(e,t,r){Object(s.j)(_)&&(_=await A());const i=new _.BasisFile(new Uint8Array(r));if(!M(i))return null;i.startTranscoding();const n=E(e,t,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),((e,t)=>i.getImageTranscodedSizeInBytes(0,e,t)),((e,t,r)=>i.transcodeImage(r,0,e,t,0,0)));return i.close(),i.delete(),n}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){Object(G.a)(this.params.width>0&&this.params.height>0);const r=this._createDescriptor(e);return r.pixelFormat=1===this.params.components?g.p.LUMINANCE:3===this.params.components?g.p.RGB:g.p.RGBA,r.width=this.params.width,r.height=this.params.height,this._glTexture=new O.a(e,r,t),this._glTexture}_loadFromURL(e,t,r){return this._loadAsync((async i=>{const n=await Object(d.a)(r,{signal:i});return Object(c.t)(i),this._loadFromImage(e,n,t)}))}_loadFromImageElement(e,t,r){return r.complete?this._loadFromImage(e,r,t):this._loadAsync((async i=>{const n=await Object(f.a)(r,r.src,!1,i);return Object(c.t)(i),this._loadFromImage(e,n,t)}))}_loadFromVideoElement(e,t,r){return r.readyState>=z.HAVE_CURRENT_DATA?this._loadFromImage(e,r,t):this._loadFromVideoElementAsync(e,t,r)}_loadFromVideoElementAsync(e,t,r){return this._loadAsync((i=>new Promise(((a,o)=>{const l=()=>{r.removeEventListener("loadeddata",u),r.removeEventListener("error",d),Object(s.r)(f)},u=()=>{r.readyState>=z.HAVE_CURRENT_DATA&&(l(),a(this._loadFromImage(e,r,t)))},d=e=>{l(),o(e||new n.a("Failed to load video"))};r.addEventListener("loadeddata",u),r.addEventListener("error",d);const f=Object(c.o)(i,(()=>d(Object(c.d)())))}))))}_loadFromImage(e,t,r){const i=k._getDataDimensions(t);this.params.width=i.width,this.params.height=i.height;const n=this._createDescriptor(e);return n.pixelFormat=3===this.params.components?g.p.RGB:g.p.RGBA,!this._requiresPowerOfTwo(e,n)||Object(o.j)(i.width)&&Object(o.j)(i.height)?(n.width=i.width,n.height=i.height,this._glTexture=new O.a(e,n,t),this._glTexture):(this._glTexture=this._makePowerOfTwoTexture(e,t,i,n,r),this._glTexture)}_loadAsync(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const i=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(i,i),r}_requiresPowerOfTwo(e,t){const r=g.B.CLAMP_TO_EDGE,i="number"==typeof t.wrapMode?t.wrapMode===r:t.wrapMode.s===r&&t.wrapMode.t===r;return!Object(V.a)(e.gl)&&(t.hasMipmap||!i)}_makePowerOfTwoTexture(e,t,r,n,a){const{width:s,height:c}=r,l=Object(o.l)(s),u=Object(o.l)(c);let d;switch(n.width=l,n.height=u,this.params.powerOfTwoResizeMode){case h.e.PAD:n.textureCoordinateScaleFactor=[s/l,c/u],d=new O.a(e,n),d.updateData(0,0,0,s,c,t);break;case h.e.STRETCH:case null:case void 0:d=this._stretchToPowerOfTwo(e,t,n,a());break;default:Object(i.a)(this.params.powerOfTwoResizeMode)}return n.hasMipmap&&d.generateMipmap(),d}_stretchToPowerOfTwo(e,t,r,i){const n=new O.a(e,r),a=new H.a(e,{colorTarget:g.y.TEXTURE,depthStencilTarget:g.m.NONE},n),o=new O.a(e,{target:g.A.TEXTURE_2D,pixelFormat:r.pixelFormat,dataType:g.q.UNSIGNED_BYTE,wrapMode:g.B.CLAMP_TO_EDGE,samplingMode:g.z.LINEAR,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},t),s=Object(U.b)(e),c=e.getBoundFramebufferObject();return this._drawStretchedTexture(e,i,a,s,o,n),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:s,sourceTexture:o,framebuffer:a}:(s.dispose(!0),o.dispose(),a.detachColorTexture(),a.dispose()),e.bindFramebuffer(c),n}_drawStretchedTexture(e,t,r,i,n,a){e.bindFramebuffer(r);const o=e.getViewport();e.setViewport(0,0,a.descriptor.width,a.descriptor.height);const s=e.useTechnique(t);s.setUniform4f("uColor",1,1,1,1),s.bindTexture(n,"tex"),e.bindVAO(i),e.drawArrays(g.r.TRIANGLE_STRIP,0,Object(x.f)(i,"geometry")),e.bindFramebuffer(null),e.setViewport(o.x,o.y,o.width,o.height)}unload(){if(Object(s.k)(this._powerOfTwoStretchInfo)){const{framebuffer:e,vao:t,sourceTexture:r}=this._powerOfTwoStretchInfo;t.dispose(!0),r.dispose(),e.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if(Object(s.k)(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),Object(s.k)(this._loadingController)){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}k.DDS_ENCODING="image/vnd-ms.dds",k.KTX2_ENCODING="image/ktx2",k.BASIS_ENCODING="image/x.basis",(B=z||(z={}))[B.HAVE_NOTHING=0]="HAVE_NOTHING",B[B.HAVE_METADATA=1]="HAVE_METADATA",B[B.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",B[B.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",B[B.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"},754:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var i=r(126);function n(e){const t=e.fragment.code;t.add(i.a`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
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
}`)}var a=r(502),o=r(730);function s(e,t){const r=e.fragment.code;e.include(o.a),t.pbrMode===a.a.Water||t.pbrMode===a.a.WaterOnIntegratedMesh?(r.add(i.a`
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
}`)):t.pbrMode!==a.a.Normal&&t.pbrMode!==a.a.Schematic||(e.include(n),r.add(i.a`struct PBRShadingInfo
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
}`))}},768:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return s})),r.d(t,"d",(function(){return l}));var i=r(116);r(272);function n(e,t,r){const i=r.parameters,n=r.paddingPixelsOverride;return u.scale=Math.min(i.divisor/(t-i.offset),1),u.factor=function(e){return Math.abs(e*e*e)}(e),u.minPixelSize=i.minPixelSize,u.paddingPixels=n,u}function a(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}function o(e,t){return Math.max(Object(i.k)(e*t.scale,e,t.factor),a(e,t))}function s(e,t,r,i){i.scale=function(e,t,r){const i=n(e,t,r);return i.minPixelSize=0,i.paddingPixels=0,o(1,i)}(e,t,r),i.factor=0,i.minPixelSize=r.parameters.minPixelSize,i.paddingPixels=r.paddingPixelsOverride}function c(e,t,r=[0,0]){const i=Math.min(Math.max(t.scale,a(e[1],t)/Math.max(1e-5,e[1])),1);return r[0]=e[0]*i,r[1]=e[1]*i,r}function l(e,t,r,i){return o(e,n(t,r,i))}Object(i.g)(10),Object(i.g)(12),Object(i.g)(70),Object(i.g)(40);const u={scale:0,factor:0,minPixelSize:0,paddingPixels:0}},773:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(126);function n(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(i.a`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):r.code.add(i.a`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}},799:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(502),n=r(126);function a(e,t){const r=e.fragment,a=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===a?(r.uniforms.add("lightingAmbientSH0","vec3"),r.code.add(n.a`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===a?(r.uniforms.add("lightingAmbientSH_R","vec4"),r.uniforms.add("lightingAmbientSH_G","vec4"),r.uniforms.add("lightingAmbientSH_B","vec4"),r.code.add(n.a`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):2===a&&(r.uniforms.add("lightingAmbientSH0","vec3"),r.uniforms.add("lightingAmbientSH_R1","vec4"),r.uniforms.add("lightingAmbientSH_G1","vec4"),r.uniforms.add("lightingAmbientSH_B1","vec4"),r.uniforms.add("lightingAmbientSH_R2","vec4"),r.uniforms.add("lightingAmbientSH_G2","vec4"),r.uniforms.add("lightingAmbientSH_B2","vec4"),r.code.add(n.a`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),t.pbrMode!==i.a.Normal&&t.pbrMode!==i.a.Schematic||r.code.add(n.a`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}},800:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(126);function n(e){const t=e.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.uniforms.add("lightingSpecularStrength","float"),t.uniforms.add("lightingEnvironmentStrength","float"),t.code.add(i.a`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}},802:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(126),n=r(139);function a(e){e.attributes.add(n.a.POSITION,"vec3"),e.vertex.code.add(i.a`vec3 positionModel() { return position; }`)}},804:function(e,t,r){"use strict";r.d(t,"a",(function(){return Q})),r.d(t,"b",(function(){return te}));var i=r(85),n=r(367),a=r(117),o=r(109),s=r(272),c=r(495),l=r(210),u=r(689),d=r(397),f=r(163),h=r(856),m=r(335),p=r(445),v=r(567),b=r(411),g=r(139),O=r(734),x=r(604),_=r(434),T=r(79),A=r(87),S=r(301),M=r(830),C=r(703),E=r(639),y=r(731),w=r(420),P=r(356),R=r(502),I=r(625),j=r(623),N=r(831),L=r(501),D=r(388),F=r(404),z=r(419),B=r(382),U=r(389),G=r(654),H=r(1012),V=r(94),k=r(355);const W=A.a.getLogger("esri.views.3d.webgl-engine.shaders.DefaultTechnique");class q extends F.a{initializeProgram(e){const t=q.shader.get(),r=this.configuration,i=t.build({oitEnabled:r.transparencyPassType===f.i.Color,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,pbrMode:r.usePBR?r.isSchematic?R.a.Schematic:R.a.Normal:R.a.Disabled,hasMetalnessAndRoughnessTexture:r.hasMetalnessAndRoughnessTexture,hasEmissionTexture:r.hasEmissionTexture,hasOcclusionTexture:r.hasOcclusionTexture,hasNormalTexture:r.hasNormalTexture,hasColorTexture:r.hasColorTexture,hasModelTransformation:r.hasModelTransformation,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:r.normalsTypeDerivate?C.b.ScreenDerivative:C.b.Attribute,doubleSidedMode:r.doubleSidedMode,vertexTangents:r.vertexTangents,attributeTextureCoordinates:r.hasMetalnessAndRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture||r.hasColorTexture?E.b.Default:E.b.None,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:Object(N.b)(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new U.a(e.rctx,i,B.a)}bindPass(e,t){var r,n;Object(L.b)(this.program,t.camera.projectionMatrix);const a=this.configuration.output;this.configuration.hasModelTransformation&&(Object(i.k)(e.modelTransformation)?this.program.setUniformMatrix4fv("model",e.modelTransformation):W.warnOnce("hasModelTransformation true, but no modelTransformation found.")),(this.configuration.output===l.a.Depth||t.multipassTerrainEnabled||a===l.a.Shadow)&&this.program.setUniform2fv("nearFar",t.camera.nearFar),t.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",t.inverseViewport),Object(P.a)(this.program,t)),a===l.a.Alpha&&(this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",_.b[e.colorMixMode])),a===l.a.Color?(t.lighting.setUniforms(this.program,!1,t.hasFillLights),this.program.setUniform3fv("ambient",e.ambient),this.program.setUniform3fv("diffuse",e.diffuse),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",_.b[e.colorMixMode]),this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.configuration.usePBR&&Object(R.c)(this.program,e,this.configuration.isSchematic)):a===l.a.Highlight&&Object(w.b)(this.program,t),Object(j.c)(this.program,e),Object(y.b)(this.program,e,t),Object(_.a)(e.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),e.textureAlphaMode!==f.a.Mask&&e.textureAlphaMode!==f.a.MaskBlend||this.program.setUniform1f("textureAlphaCutoff",e.textureAlphaCutoff),null==(r=t.shadowMap)||r.bind(this.program),null==(n=t.ssaoHelper)||n.bind(this.program,t.camera)}bindDraw(e){const t=this.configuration.instancedDoublePrecision?Object(o.h)(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;Object(L.d)(this.program,t,e.camera.viewMatrix),this.program.rebindTextures(),(this.configuration.output===l.a.Color||this.configuration.output===l.a.Alpha||this.configuration.output===l.a.Depth&&this.configuration.screenSizePerspective||this.configuration.output===l.a.Normal&&this.configuration.screenSizePerspective||this.configuration.output===l.a.Highlight&&this.configuration.screenSizePerspective)&&Object(L.a)(this.program,t,e.camera.viewInverseTransposeMatrix),this.configuration.output===l.a.Normal&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&Object(M.b)(this.program,t),Object(S.b)(this.program,this.configuration,e.slicePlane,{origin:t}),this.configuration.output===l.a.Color&&Object(I.d)(this.program,e,t)}_convertDepthTestFunction(e){return e===f.c.Lequal?V.h.LEQUAL:V.h.LESS}_setPipeline(e,t){const r=this.configuration,i=e===f.i.NONE,n=e===f.i.FrontFace;return Object(k.f)({blending:r.output!==l.a.Color&&r.output!==l.a.Alpha||!r.transparent?null:i?p.d:Object(p.f)(e),culling:$(r)&&Object(k.b)(r.cullFace),depthTest:{func:Object(p.g)(e,this._convertDepthTestFunction(r.customDepthTest))},depthWrite:i||n?r.writeDepth&&k.d:null,colorWrite:k.c,stencilWrite:r.sceneHasOcludees?G.h:null,stencilTest:r.sceneHasOcludees?t?G.d:G.c:null,polygonOffset:i||n?null:Object(p.e)(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipeline(this.configuration.transparencyPassType,!0),this._setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function $(e){return e.cullFace?e.cullFace!==f.b.None:!e.slicePlaneEnabled&&!e.transparent&&!e.doubleSidedMode}q.shader=new D.a(H.a,(()=>r.e(323).then(r.bind(null,1358))));class X extends z.a{constructor(){super(...arguments),this.output=l.a.Color,this.alphaDiscardMode=f.a.Opaque,this.doubleSidedMode=u.b.None,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=f.b.None,this.transparencyPassType=f.i.NONE,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1,this.hasModelTransformation=!1,this.customDepthTest=f.c.Less}}Object(T.a)([Object(z.b)({count:l.a.COUNT})],X.prototype,"output",void 0),Object(T.a)([Object(z.b)({count:f.a.COUNT})],X.prototype,"alphaDiscardMode",void 0),Object(T.a)([Object(z.b)({count:u.b.COUNT})],X.prototype,"doubleSidedMode",void 0),Object(T.a)([Object(z.b)()],X.prototype,"isSchematic",void 0),Object(T.a)([Object(z.b)()],X.prototype,"vertexColors",void 0),Object(T.a)([Object(z.b)()],X.prototype,"offsetBackfaces",void 0),Object(T.a)([Object(z.b)()],X.prototype,"symbolColors",void 0),Object(T.a)([Object(z.b)()],X.prototype,"vvSize",void 0),Object(T.a)([Object(z.b)()],X.prototype,"vvColor",void 0),Object(T.a)([Object(z.b)()],X.prototype,"verticalOffset",void 0),Object(T.a)([Object(z.b)()],X.prototype,"receiveShadows",void 0),Object(T.a)([Object(z.b)()],X.prototype,"slicePlaneEnabled",void 0),Object(T.a)([Object(z.b)()],X.prototype,"sliceHighlightDisabled",void 0),Object(T.a)([Object(z.b)()],X.prototype,"receiveAmbientOcclusion",void 0),Object(T.a)([Object(z.b)()],X.prototype,"screenSizePerspective",void 0),Object(T.a)([Object(z.b)()],X.prototype,"textureAlphaPremultiplied",void 0),Object(T.a)([Object(z.b)()],X.prototype,"hasColorTexture",void 0),Object(T.a)([Object(z.b)()],X.prototype,"usePBR",void 0),Object(T.a)([Object(z.b)()],X.prototype,"hasMetalnessAndRoughnessTexture",void 0),Object(T.a)([Object(z.b)()],X.prototype,"hasEmissionTexture",void 0),Object(T.a)([Object(z.b)()],X.prototype,"hasOcclusionTexture",void 0),Object(T.a)([Object(z.b)()],X.prototype,"hasNormalTexture",void 0),Object(T.a)([Object(z.b)()],X.prototype,"instanced",void 0),Object(T.a)([Object(z.b)()],X.prototype,"instancedColor",void 0),Object(T.a)([Object(z.b)()],X.prototype,"instancedDoublePrecision",void 0),Object(T.a)([Object(z.b)()],X.prototype,"vertexTangents",void 0),Object(T.a)([Object(z.b)()],X.prototype,"normalsTypeDerivate",void 0),Object(T.a)([Object(z.b)()],X.prototype,"writeDepth",void 0),Object(T.a)([Object(z.b)()],X.prototype,"sceneHasOcludees",void 0),Object(T.a)([Object(z.b)()],X.prototype,"transparent",void 0),Object(T.a)([Object(z.b)()],X.prototype,"enableOffset",void 0),Object(T.a)([Object(z.b)({count:f.b.COUNT})],X.prototype,"cullFace",void 0),Object(T.a)([Object(z.b)({count:f.i.COUNT})],X.prototype,"transparencyPassType",void 0),Object(T.a)([Object(z.b)()],X.prototype,"multipassTerrainEnabled",void 0),Object(T.a)([Object(z.b)()],X.prototype,"cullAboveGround",void 0),Object(T.a)([Object(z.b)()],X.prototype,"hasModelTransformation",void 0),Object(T.a)([Object(z.b)({count:f.c.COUNT})],X.prototype,"customDepthTest",void 0);var K=r(1013);class Y extends q{initializeProgram(e){const t=Y.shader.get(),r=this.configuration,i=t.build({oitEnabled:r.transparencyPassType===f.i.Color,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,pbrMode:r.usePBR?R.a.Normal:R.a.Disabled,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:r.hasColorTexture,hasModelTransformation:!1,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:C.b.Attribute,doubleSidedMode:u.b.WindingOrder,vertexTangents:!1,attributeTextureCoordinates:r.hasColorTexture?E.b.Default:E.b.None,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:Object(N.b)(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new U.a(e.rctx,i,B.a)}}Y.shader=new D.a(K.a,(()=>r.e(319).then(r.bind(null,1359))));class Q extends m.b{constructor(e){super(e,J),this.supportsEdges=!0,this.techniqueConfig=new X,this.vertexBufferLayout=function(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,r=Object(c.a)().vec3f(g.a.POSITION).vec3f(g.a.NORMAL);return e.vertexTangents&&r.vec4f(g.a.TANGENT),t&&r.vec2f(g.a.UV0),e.vertexColors&&r.vec4u8(g.a.COLOR),e.symbolColors&&r.vec4u8(g.a.SYMBOLCOLOR),r}(this.parameters),this.instanceBufferLayout=e.instanced?te(this.parameters):null}isVisibleInPass(e){return e!==v.a.MATERIAL_DEPTH_SHADOWMAP_ALL&&e!==v.a.MATERIAL_DEPTH_SHADOWMAP_DEFAULT&&e!==v.a.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,r=e.vertexColors,i=e.symbolColors,n=!!t&&t.indexOf("color")>-1,a=e.vvColorEnabled,o="replace"===e.colorMixMode,s=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0;return r&&(n||a||i)?!!o||s:r?o?c:s:n||a||i?!!o||s:o?c:s}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.parameters.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.parameters.textureId,this.techniqueConfig.vertexTangents=this.parameters.vertexTangents,this.techniqueConfig.instanced=!!this.parameters.instanced,this.techniqueConfig.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.parameters.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.parameters.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.parameters.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.parameters.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.parameters.normals,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,Object(i.k)(this.parameters.customDepthTest)&&(this.techniqueConfig.customDepthTest=this.parameters.customDepthTest),this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.cullFace=this.parameters.slicePlaneEnabled?f.b.None:this.parameters.cullFace,this.techniqueConfig.multipassTerrainEnabled=t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=t.cullAboveGround,this.techniqueConfig.hasModelTransformation=Object(i.k)(this.parameters.modelTransformation),e!==l.a.Color&&e!==l.a.Alpha||(this.techniqueConfig.vertexColors=this.parameters.vertexColors,this.techniqueConfig.symbolColors=this.parameters.symbolColors,this.parameters.treeRendering?this.techniqueConfig.doubleSidedMode=u.b.WindingOrder:this.techniqueConfig.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?u.b.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?u.b.WindingOrder:u.b.None,this.techniqueConfig.instancedColor=!!this.parameters.instanced&&this.parameters.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!!t.ssaoEnabled&&this.parameters.receiveSSAO,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.parameters.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.parameters.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.parameters.usePBR&&this.parameters.isSchematic,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.enableOffset=t.camera.relativeElevation<p.b),this.techniqueConfig}intersect(e,t,r,i,n,o,c){if(null!==this.parameters.verticalOffset){const e=i.camera;Object(a.w)(se,r[12],r[13],r[14]);let t=null;switch(i.viewingMode){case s.a.Global:t=Object(a.r)(ae,se);break;case s.a.Local:t=Object(a.k)(ae,ne)}let c=0;if(null!==this.parameters.verticalOffset){const r=Object(a.j)(ce,se,e.eye),i=Object(a.p)(r),n=Object(a.e)(r,r,1/i);let o=null;this.parameters.screenSizePerspective&&(o=Object(a.h)(t,n)),c+=Object(_.i)(e,i,this.parameters.verticalOffset,o,this.parameters.screenSizePerspective)}Object(a.e)(t,t,c),Object(a.x)(oe,t,i.transform.inverseRotation),n=Object(a.j)(re,n,oe),o=Object(a.j)(ie,o,oe)}Object(_.f)(e,t,i,n,o,Object(O.c)(i.verticalOffset),c)}requiresSlot(e){return e===(this.parameters.transparent?this.parameters.writeDepth?b.a.TRANSPARENT_MATERIAL:b.a.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:b.a.OPAQUE_MATERIAL)||e===b.a.DRAPED_MATERIAL}createGLMaterial(e){return e.output===l.a.Color||e.output===l.a.Alpha||e.output===l.a.Depth||e.output===l.a.Normal||e.output===l.a.Shadow||e.output===l.a.Highlight?new Z(e):null}createBufferWriter(){return new ee(this.vertexBufferLayout,this.instanceBufferLayout)}}class Z extends h.a{constructor(e){super({...e,...e.material.parameters})}updateParameters(e){const t=this._material.parameters;return this.updateTexture(t.textureId),this.ensureTechnique(t.treeRendering?Y:q,e)}_updateShadowState(e){e.shadowMappingEnabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:e.hasOccludees})}beginSlot(e){return this._output!==l.a.Color&&this._output!==l.a.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,t){t.bindPass(this._material.parameters,e),this.bindTextures(t.program)}}const J={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:f.b.Back,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,fillLightsEnabled:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:Object(n.b)(),modelTransformation:null,transparent:!1,writeDepth:!0,customDepthTest:f.c.Less,textureAlphaMode:f.a.Blend,textureAlphaCutoff:d.b,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,...m.a};class ee{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(g.a.POSITION).length}write(e,t,r,i){Object(x.d)(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,r,i)}}function te(e){let t=Object(c.a)();return t=e.instancedDoublePrecision?t.vec3f(g.a.MODELORIGINHI).vec3f(g.a.MODELORIGINLO).mat3f(g.a.MODEL).mat3f(g.a.MODELNORMAL):t.mat4f(g.a.MODEL).mat4f(g.a.MODELNORMAL),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f(g.a.INSTANCECOLOR)),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f(g.a.INSTANCEFEATUREATTRIBUTE)),t}const re=Object(o.f)(),ie=Object(o.f)(),ne=Object(o.h)(0,0,1),ae=Object(o.f)(),oe=Object(o.f)(),se=Object(o.f)(),ce=Object(o.f)()},819:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(103);async function n(e,t){const{data:r}=await Object(i.default)(e,{responseType:"image",...t});return r}},830:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return u}));var i=r(109),n=r(210),a=r(831),o=r(126),s=r(139),c=r(725);function l(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add(s.a.MODELORIGINHI,"vec3"),e.attributes.add(s.a.MODELORIGINLO,"vec3"),e.attributes.add(s.a.MODEL,"mat3"),e.attributes.add(s.a.MODELNORMAL,"mat3")),t.instancedDoublePrecision&&(e.vertex.include(a.a,t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const r=[o.a`
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
    `:o.a``];e.vertex.code.add(r[0]),e.vertex.code.add(r[1]),e.vertex.code.add(r[2]),t.output===n.a.Normal&&e.vertex.code.add(r[3]),e.vertex.code.add(r[4])}function u(e,t){Object(c.b)(t,d,f,3),e.setUniform3fv("viewOriginHi",d),e.setUniform3fv("viewOriginLo",f)}const d=Object(i.f)(),f=Object(i.f)()},831:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return o}));var i=r(82),n=r(126);function a({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(n.a`vec3 dpPlusFrc(vec3 a, vec3 b) {
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
}`)}function o(e){return!!Object(i.a)("force-double-precision-obfuscation")||e.driverTest.doublePrecisionRequiresObfuscation}},832:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var i=r(272),n=r(799),a=r(773),o=r(800),s=r(754),c=r(502),l=r(730),u=r(625),d=r(126);function f(e,t){const r=e.fragment;e.include(o.a),e.include(a.a,t),t.pbrMode!==c.a.Disabled&&e.include(s.a,t),e.include(n.a,t),t.receiveShadows&&e.include(u.a,t),r.uniforms.add("lightingGlobalFactor","float"),r.uniforms.add("ambientBoostFactor","float"),r.uniforms.add("hasFillLights","bool"),e.include(l.a),r.code.add(d.a`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===c.a.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),r.code.add(d.a`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.viewingMode===i.a.Global?d.a`normalize(vPosWorld)`:d.a`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),r.code.add(d.a`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),t.pbrMode===c.a.Disabled||t.pbrMode===c.a.WaterOnIntegratedMesh?r.code.add(d.a`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):t.pbrMode!==c.a.Normal&&t.pbrMode!==c.a.Schematic||(r.code.add(d.a`const float fillLightIntensity = 0.25;
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
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(d.a`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),r.code.add(d.a`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.code.add(d.a`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(d.a`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode===c.a.Schematic?d.a`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:d.a`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}},856:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var i=r(85),n=r(91),a=r(163),o=r(545);class s extends o.a{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId,(e=>this._texture=e)),this._acquire(e.normalTextureId,(e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId,(e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId,(e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId,(e=>this._textureMetallicRoughness=e))}dispose(){this._texture=Object(i.q)(this._texture),this._textureNormal=Object(i.q)(this._textureNormal),this._textureEmissive=Object(i.q)(this._textureEmissive),this._textureOcclusion=Object(i.q)(this._textureOcclusion),this._textureMetallicRoughness=Object(i.q)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?a.g.LOADED:a.g.LOADING}updateTexture(e){(Object(i.j)(this._texture)||e!==this._texture.id)&&(this._texture=Object(i.q)(this._texture),this._textureId=e,this._acquire(this._textureId,(e=>this._texture=e)))}bindTextures(e){Object(i.k)(this._texture)&&e.bindTexture(this._texture.glTexture,"tex"),Object(i.k)(this._textureNormal)&&e.bindTexture(this._textureNormal.glTexture,"normalTexture"),Object(i.k)(this._textureEmissive)&&e.bindTexture(this._textureEmissive.glTexture,"texEmission"),Object(i.k)(this._textureOcclusion)&&e.bindTexture(this._textureOcclusion.glTexture,"texOcclusion"),Object(i.k)(this._textureMetallicRoughness)&&e.bindTexture(this._textureMetallicRoughness.glTexture,"texMetallicRoughness")}bindTextureScale(e){const t=Object(i.k)(this._texture)?this._texture.glTexture:null;Object(i.k)(t)&&t.descriptor.textureCoordinateScaleFactor?e.setUniform2fv("textureCoordinateScaleFactor",t.descriptor.textureCoordinateScaleFactor):e.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquire(e,t){if(Object(i.j)(e))return void t(null);const r=this._textureRepository.acquire(e);if(Object(n.n)(r))return++this._numLoading,void r.then((e=>{if(this._disposed)return Object(i.q)(e),void t(null);t(e)})).finally((()=>--this._numLoading));t(r)}}},898:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(126);function n(e){e.vertex.code.add(i.a`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},899:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var i=r(210),n=r(301),a=r(478),o=r(703),s=r(639),c=r(915),l=r(622),u=r(420),d=r(623),f=r(397),h=r(126);function m(e,t){const r=e.vertex.code,m=e.fragment.code,p=t.hasModelTransformation;t.output!==i.a.Depth&&t.output!==i.a.Shadow||(e.include(a.a,{linearDepth:!0,hasModelTransformation:p}),e.include(s.a,t),e.include(d.a,t),e.include(l.a,t),e.include(n.a,t),e.vertex.uniforms.add("nearFar","vec2"),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(h.a`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, ${p?"model,":""} vpos, nearFar, depth);
        forwardTextureCoordinates();
      }
    `),e.include(f.a,t),m.add(h.a`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?h.a`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),t.output===i.a.Normal&&(e.include(a.a,{linearDepth:!1,hasModelTransformation:p}),e.include(o.a,t),e.include(c.a,t),e.include(s.a,t),e.include(d.a,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),r.add(h.a`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${t.normalType===o.b.Attribute?h.a`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${p?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),e.include(n.a,t),e.include(f.a,t),m.add(h.a`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?h.a`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${t.normalType===o.b.ScreenDerivative?h.a`
            vec3 normal = screenDerivativeNormal(vPositionView);`:h.a`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),t.output===i.a.Highlight&&(e.include(a.a,{linearDepth:!1,hasModelTransformation:p}),e.include(s.a,t),e.include(d.a,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(h.a`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${p?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),e.include(n.a,t),e.include(f.a,t),e.include(u.a),m.add(h.a`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?h.a`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}},900:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(952),n=r(464),a=r(126);function o(e){e.include(n.a),e.code.add(a.a`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${a.a.int(i.a.Multiply)}) {
        return allMixed;
      }
      else if (mode == ${a.a.int(i.a.Ignore)}) {
        return internalMixed;
      }
      else if (mode == ${a.a.int(i.a.Replace)}) {
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

      if (mode == ${a.a.int(i.a.Ignore)}) {
        return internalMixed;
      }
      else if (mode == ${a.a.int(i.a.Replace)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}},913:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(639),n=r(126);function a(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(n.a`#ifndef GL_EXT_shader_texture_lod
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
  `),t.attributeTextureCoordinates===i.b.Default&&e.fragment.code.add(n.a`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),t.attributeTextureCoordinates===i.b.Atlas&&(e.include(a),e.fragment.code.add(n.a`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`))}},914:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var i=r(952),n=r(126);function a(e){e.vertex.code.add(n.a`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${n.a.int(i.a.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${n.a.int(i.a.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${n.a.int(i.a.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${n.a.int(i.a.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}var o=r(139);function s(e,t){t.symbolColor?(e.include(a),e.attributes.add(o.a.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float")):e.fragment.uniforms.add("colorMixMode","int"),t.symbolColor?e.vertex.code.add(n.a`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`):e.vertex.code.add(n.a`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`)}},915:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return u}));var i=r(272),n=r(703),a=(r(367),r(200),r(109),r(802)),o=r(831),s=r(126);function c(e,t){e.include(a.a),e.vertex.include(o.a,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),e.vertex.uniforms.add("transformWorldFromModelRS","mat3"),e.vertex.uniforms.add("transformWorldFromModelTH","vec3"),e.vertex.uniforms.add("transformWorldFromModelTL","vec3"),e.vertex.uniforms.add("transformWorldFromViewTH","vec3"),e.vertex.uniforms.add("transformWorldFromViewTL","vec3"),e.vertex.uniforms.add("transformViewFromCameraRelativeRS","mat3"),e.vertex.uniforms.add("transformProjFromView","mat4"),e.vertex.code.add(s.a`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return transformViewFromCameraRelativeRS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.uniforms.add("transformWorldFromViewTL","vec3"),e.fragment.code.add(s.a`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}function l(e,t){t.normalType===n.b.Attribute||t.normalType===n.b.CompressedAttribute?(e.include(n.a,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add("transformNormalGlobalFromModel","mat3"),e.vertex.uniforms.add("transformNormalViewFromGlobal","mat3"),e.vertex.code.add(s.a`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)):t.normalType===n.b.Ground?(e.include(c,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(s.a`
    void forwardNormal() {
      vNormalWorld = ${t.viewingMode===i.a.Global?s.a`normalize(vPositionWorldCameraRelative);`:s.a`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(s.a`void forwardNormal() {}`)}function u(e,t){e.setUniformMatrix4fv("viewNormal",t)}},952:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return s}));var i,n,a=r(116),o=r(85);function s(e){switch(e){default:return i.Multiply;case"ignore":return i.Ignore;case"replace":return i.Replace;case"tint":return i.Tint}}function c(e,t,r){if(Object(o.j)(e)||t===i.Ignore)return r[0]=255,r[1]=255,r[2]=255,void(r[3]=255);const n=Object(a.e)(Math.round(e[3]*u),0,u),s=0===n||t===i.Tint?0:t===i.Replace?d:f;r[0]=Object(a.e)(Math.round(e[0]*l),0,l),r[1]=Object(a.e)(Math.round(e[1]*l),0,l),r[2]=Object(a.e)(Math.round(e[2]*l),0,l),r[3]=n+s}(n=i||(i={}))[n.Multiply=1]="Multiply",n[n.Ignore=2]="Ignore",n[n.Replace=3]="Replace",n[n.Tint=4]="Tint";const l=255,u=85,d=u,f=2*u}}]);
//# sourceMappingURL=103.d58bbae4.chunk.js.map