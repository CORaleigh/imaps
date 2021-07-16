(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[35],{1010:function(e,t,o){"use strict";o.d(t,"a",(function(){return l}));var a=o(193),r=o(226),i=o(482),n=o(157),s=o(198);async function l(e){const t=new Image;if(t.src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A",t.width=5,t.height=5,await t.decode(),!e.gl)return!0;const o=new r.a(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1}),l=a.a.createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),c=new s.a(e,new Map([["a_pos",0]]),{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:l}),d=new i.a(e,"\n  precision highp float;\n\n  attribute vec2 a_pos;\n  varying vec2 v_uv;\n\n  void main() {\n    v_uv = a_pos;\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  ","\n  precision highp float;\n\n  varying vec2 v_uv;\n  uniform sampler2D u_texture;\n\n  void main() {\n    gl_FragColor = texture2D(u_texture, v_uv);\n  }\n  ",new Map([["a_pos",0]]));e.useProgram(d);const u=new n.a(e,{dataType:5121,pixelFormat:6408,preMultiplyAlpha:!1,wrapMode:33071,samplingMode:9729},t);e.bindTexture(u,0),d.setUniform1i("u_texture",0);const m=e.getBoundFramebufferObject(),{x:v,y:p,width:f,height:h}=e.getViewport();e.bindFramebuffer(o),e.setViewport(0,0,1,1),e.bindVAO(c),e.drawArrays(5,0,4);const b=new Uint8Array(4);return o.readPixels(0,0,1,1,6408,5121,b),d.dispose(),c.dispose(!1),l.dispose(),o.dispose(),u.dispose(),e.setViewport(v,p,f,h),e.bindFramebuffer(m),t.src="",255===b[0]}},1031:function(e,t,o){"use strict";o.d(t,"a",(function(){return F})),o.d(t,"b",(function(){return R}));var a=o(632),r=o(965),i=o(229),n=o(375),s=o(897),l=o(855),c=o(838),d=o(989),u=o(837),m=o(508),v=o(990),p=o(613),f=o(966),h=o(274),b=o(1144),g=o(792),x=o(849),O=o(253),y=o(967),C=o(663),T=o(898),w=o(537),M=o(430),_=o(322),A=o(1145),j=o(968),S=o(107),P=o(241);function R(e){const t=new P.a,o=t.vertex.code,R=t.fragment.code;return t.include(A.a,{name:"Default Material Shader",output:e.output}),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(c.a),t.varyings.add("vpos","vec3"),t.include(M.a,e),t.include(s.a,e),t.include(p.a,e),0!==e.output&&7!==e.output||(t.include(l.a,e),t.include(n.a,{linearDepth:!1}),0===e.normalType&&e.offsetBackfaces&&t.include(r.a),t.include(b.a,e),t.include(v.a,e),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("localvpos","vec3"),t.include(u.a,e),t.include(a.a,e),t.include(d.a,e),t.include(m.a,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),o.add(S.a`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${S.a.float(_.c)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===e.normalType?S.a`
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
    `)),7===e.output&&(t.include(i.a,e),t.include(_.a,e),e.multipassTerrainEnabled&&(t.fragment.include(h.a),t.include(O.b,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(j.a),R.add(S.a`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?S.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:S.a`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?S.a`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:S.a`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(i.a,e),t.include(x.a,e),t.include(g.a,e),t.include(_.a,e),e.receiveShadows&&t.include(w.a,e),e.multipassTerrainEnabled&&(t.fragment.include(h.a),t.include(O.b,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(T.a,e),t.include(C.a,e),t.fragment.include(j.a),t.include(y.a,e),R.add(S.a`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?S.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:S.a`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===e.normalType?S.a`
        vec3 normal = screenDerivativeNormal(localvpos);`:S.a`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?S.a`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:S.a`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${e.hasNormalTexture?S.a`
              mat3 tangentSpace = ${e.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?S.a`vec3 normalGround = normalize(vpos + localOrigin);`:S.a`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:S.a``}
        ${1===e.pbrMode||2===e.pbrMode?S.a`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(f.a,e),t}var F=Object.freeze({__proto__:null,build:R})},1032:function(e,t,o){"use strict";o.d(t,"a",(function(){return j})),o.d(t,"b",(function(){return A}));var a=o(632),r=o(965),i=o(229),n=o(375),s=o(897),l=o(855),c=o(838),d=o(989),u=o(837),m=o(508),v=o(613),p=o(966),f=o(274),h=o(792),b=o(849),g=o(253),x=o(663),O=o(898),y=o(537),C=o(430),T=o(322),w=o(968),M=o(107),_=o(241);function A(e){const t=new _.a,o=t.vertex.code,A=t.fragment.code;return t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(c.a),t.varyings.add("vpos","vec3"),t.include(C.a,e),t.include(s.a,e),t.include(v.a,e),0!==e.output&&7!==e.output||(t.include(l.a,e),t.include(n.a,{linearDepth:!1}),e.offsetBackfaces&&t.include(r.a),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.include(u.a,e),t.include(a.a,e),t.include(d.a,e),t.include(m.a,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),o.add(M.a`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${M.a.float(T.c)}) {
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
      `)),7===e.output&&(t.include(i.a,e),t.include(T.a,e),e.multipassTerrainEnabled&&(t.fragment.include(f.a),t.include(g.b,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(w.a),A.add(M.a`
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
    `)),0===e.output&&(t.include(i.a,e),t.include(b.a,e),t.include(h.a,e),t.include(T.a,e),e.receiveShadows&&t.include(y.a,e),e.multipassTerrainEnabled&&(t.fragment.include(f.a),t.include(g.b,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(O.a,e),t.include(x.a,e),t.fragment.include(w.a),A.add(M.a`
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
    `)),t.include(p.a,e),t}var j=Object.freeze({__proto__:null,build:A})},1144:function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var a=o(1162),r=o(107);function i(e,t){const o=e.fragment;t.vertexTangents?(e.attributes.add("tangent","vec4"),e.varyings.add("vTangent","vec4"),2===t.doubleSidedMode?o.code.add(r.a`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):o.code.add(r.a`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),o.code.add(r.a`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`)),0!==t.attributeTextureCoordinates&&(e.include(a.a,t),o.uniforms.add("normalTexture","sampler2D"),o.uniforms.add("normalTextureSize","vec2"),o.code.add(r.a`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}},1145:function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var a=o(107),r=o(188);function i(e,t){const o=a.a`
  /*
  *  ${t.name}
  *  ${0===t.output?"RenderOutput: Color":1===t.output?"RenderOutput: Depth":3===t.output?"RenderOutput: Shadow":2===t.output?"RenderOutput: Normal":4===t.output?"RenderOutput: Highlight":""}
  */
  `;Object(r.c)()&&(e.fragment.code.add(o),e.vertex.code.add(o))}},1161:function(e,t,o){"use strict";o.r(t),o.d(t,"fetch",(function(){return G})),o.d(t,"gltfToEngineResources",(function(){return $})),o.d(t,"parseUrl",(function(){return U}));var a=o(949),r=o(80),i=o(272),n=o(276),s=o(135),l=o(145),c=o(98),d=o(96),u=o(228),m=o(330),v=o(710),p=o(1146),f=o(1158),h=o(1147),b=o(1155),g=o(1148),x=o(95),O=o(156),y=o(83),C=o(75),T=o(84),w=o(635),M=o(640),_=o(388),A=o(633),j=o(801);const S=C.a.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function P(e,t){const o=await async function(e,t){const o=Object(r.k)(t)&&t.streamDataRequester;if(o)return async function(e,t,o){const a=await Object(O.c)(t.request(e,"json",o));if(!0===a.ok)return a.value;Object(T.u)(a.error),R(a.error.details.url)}(e,o,t);const a=await Object(O.c)(Object(x.default)(e,Object(r.s)(t)));if(!0===a.ok)return a.value.data;Object(T.u)(a.error),R(a.error)}(e,t);return{resource:o,textures:await B(o.textureDefinitions,t)}}function R(e){throw new y.a("",`Request for object resource failed: ${e}`)}function F(e){const t=e.params,o=t.topology;let a=!0;switch(t.vertexAttributes||(S.warn("Geometry must specify vertex attributes"),a=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const o in t.vertexAttributes){const t=e[o];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(S.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),a=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(S.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),a=!1)):(S.warn(`Indexed geometry does not specify face indices for '${o}' attribute`),a=!1)}}else S.warn("Indexed geometries must specify faces"),a=!1;break}default:S.warn(`Unsupported topology '${o}'`),a=!1}e.params.material||(S.warn("Geometry requires material"),a=!1);const r=e.params.vertexAttributes;for(const i in r)r[i].values||(S.warn("Geometries with externally defined attributes are not yet supported"),a=!1);return a}function E(e){const t=Object(u.h)();return e.forEach((e=>{const o=e.boundingInfo;Object(r.k)(o)&&(Object(u.n)(t,o.getBBMin()),Object(u.n)(t,o.getBBMax()))})),t}async function B(e,t){const o=[];for(const n in e){const a=e[n],i=a.images[0].data;if(!i){S.warn("Externally referenced texture data is not yet supported");continue}const s=a.encoding+";base64,"+i,l="/textureDefinitions/"+n,c={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:!0},d=Object(r.k)(t)&&t.disableTextures?Promise.resolve(null):Object(M.a)(s,t);o.push(d.then((e=>({refId:l,image:e,params:c,alphaChannelUsage:"rgba"===a.channels?a.alphaChannelUsage||"transparency":"none"}))))}const a=await Promise.all(o),i={};for(const r of a)i[r.refId]=r;return i}function L(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;case"transparency":default:return 0}}function D(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const z=new w.a(1,2,"wosr");var I=o(1149),N=o(969),V=o(970),k=o(827);async function G(e,t){const o=U(Object(a.a)(e));if("wosr"===o.fileType){const e=await(t.cache?t.cache.loadWOSR(o.url,t):P(o.url,t)),a=function(e,t){const o=[],a=[],i=[],n=[],s=e.resource,l=w.a.parse(s.version||"1.0","wosr");z.validate(l);const c=s.model.name,u=s.model.geometries,m=s.materialDefinitions,v=e.textures;let p=0;const f=new Map;for(let h=0;h<u.length;h++){const e=u[h];if(!F(e))continue;const s=D(e),l=e.params.vertexAttributes,c=[];for(const t in l){const e=l[t],o=e.values;c.push([t,{data:o,size:e.valuesPerElement,exclusive:!0}])}const b=[];if("PerAttributeArray"!==e.params.topology){const t=e.params.faces;for(const e in t)b.push([e,new Uint32Array(t[e].values)])}const g=v&&v[s.texture];if(g&&!f.has(s.texture)){const{image:e,params:t}=g,o=new A.a(e,t);n.push(o),f.set(s.texture,o)}const x=f.get(s.texture),O=x?x.id:void 0;let y=i[s.material]?i[s.material][s.texture]:null;if(!y){const e=m[s.material.substring(s.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const o=g&&g.alphaChannelUsage,a=e.transparency>0||"transparency"===o||"maskAndTransparency"===o,n={ambient:Object(d.f)(e.diffuse),diffuse:Object(d.f)(e.diffuse),opacity:1-(e.transparency||0),transparent:a,textureAlphaMode:g?L(g.alphaChannelUsage):void 0,textureAlphaCutoff:.33,textureId:O,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!0};Object(r.k)(t)&&t.materialParamsMixin&&Object.assign(n,t.materialParamsMixin),y=new j.a(n),i[s.material]||(i[s.material]={}),i[s.material][s.texture]=y}a.push(y);const C=new _.a(c,b);p+=b.position?b.position.length:0,o.push(C)}return{name:c,stageResources:{textures:n,materials:a,geometries:o},pivotOffset:s.model.pivotOffset,boundingBox:E(o),numberOfVertices:p,lodThreshold:null}}(e,t);return{lods:[a],referenceBoundingBox:a.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const i=await(t.cache?t.cache.loadGLTF(o.url,t,t.usePBR):Object(b.a)(new h.a(t.streamDataRequester),o.url,t,t.usePBR)),n=Object(r.i)(i.model.meta,"ESRI_proxyEllipsoid");i.meta.isEsriSymbolResource&&Object(r.k)(n)&&-1!==i.meta.uri.indexOf("/RealisticTrees/")&&function(e,t){for(let o=0;o<e.model.lods.length;++o){const a=e.model.lods[o];e.customMeta.esriTreeRendering=!0;for(const i of a.parts){const a=i.attributes.normal;if(Object(r.j)(a))return;const n=i.attributes.position,u=n.count,v=Object(d.e)(),p=Object(d.e)(),h=Object(d.e)(),b=Object(f.a)(m.J,u),g=Object(f.a)(m.u,u),x=Object(s.a)(Object(l.d)(),i.transform);for(let r=0;r<u;r++){n.getVec(r,p),a.getVec(r,v),Object(c.q)(p,p,i.transform),Object(c.j)(h,p,t.center),Object(c.b)(h,h,t.radius);const s=h[2],l=Object(c.p)(h),d=Math.min(.45+.55*l*l,1);Object(c.b)(h,h,t.radius),Object(c.q)(h,h,x),Object(c.r)(h,h),o+1!==e.model.lods.length&&e.model.lods.length>1&&Object(c.i)(h,h,v,s>-1?.2:Math.min(-4*s-3.8,1)),g.setVec(r,h),b.set(r,0,255*d),b.set(r,1,255*d),b.set(r,2,255*d),b.set(r,3,255)}i.attributes.normal=g,i.attributes.color=b}}}(i,n);const u=i.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:i.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:t.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},v={...t.materialParamsMixin,treeRendering:i.customMeta.esriTreeRendering};if(null!=o.specifiedLodIndex){const e=$(i,u,v,o.specifiedLodIndex);let t=e[0].boundingBox;return 0!==o.specifiedLodIndex&&(t=$(i,u,v,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1,remove:i.remove}}const p=$(i,u,v);return{lods:p,referenceBoundingBox:p[0].boundingBox,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1,remove:i.remove}}function U(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function $(e,t,o,a){const s=e.model,l=Object(n.b)(),c=new Array,d=new Map,h=new Map;return s.lods.forEach(((e,n)=>{if(void 0!==a&&n!==a)return;const b={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:Object(r.k)(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:Object(u.h)()};c.push(b),e.parts.forEach((e=>{const a=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),n=s.materials.get(e.material),c=Object(r.k)(e.attributes.texCoord0),x=Object(r.k)(e.attributes.normal);if(!d.has(a)){if(c){if(Object(r.k)(n.textureColor)&&!h.has(n.textureColor)){const e=s.textures.get(n.textureColor),t={...e.parameters,preMultiplyAlpha:!0};h.set(n.textureColor,new A.a(e.data,t))}if(Object(r.k)(n.textureNormal)&&!h.has(n.textureNormal)){const e=s.textures.get(n.textureNormal),t={...e.parameters,preMultiplyAlpha:!0};h.set(n.textureNormal,new A.a(e.data,t))}if(Object(r.k)(n.textureOcclusion)&&!h.has(n.textureOcclusion)){const e=s.textures.get(n.textureOcclusion),t={...e.parameters,preMultiplyAlpha:!0};h.set(n.textureOcclusion,new A.a(e.data,t))}if(Object(r.k)(n.textureEmissive)&&!h.has(n.textureEmissive)){const e=s.textures.get(n.textureEmissive),t={...e.parameters,preMultiplyAlpha:!0};h.set(n.textureEmissive,new A.a(e.data,t))}if(Object(r.k)(n.textureMetallicRoughness)&&!h.has(n.textureMetallicRoughness)){const e=s.textures.get(n.textureMetallicRoughness),t={...e.parameters,preMultiplyAlpha:!0};h.set(n.textureMetallicRoughness,new A.a(e.data,t))}}const i=n.color[0]**(1/I.a),l=n.color[1]**(1/I.a),u=n.color[2]**(1/I.a),m=n.emissiveFactor[0]**(1/I.a),v=n.emissiveFactor[1]**(1/I.a),p=n.emissiveFactor[2]**(1/I.a);d.set(a,new j.a({...t,transparent:"BLEND"===n.alphaMode,textureAlphaMode:H(n.alphaMode),textureAlphaCutoff:n.alphaCutoff,diffuse:[i,l,u],ambient:[i,l,u],opacity:n.opacity,doubleSided:n.doubleSided,doubleSidedType:"winding-order",cullFace:n.doubleSided?0:2,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:x?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:Object(r.k)(n.textureColor)&&c?h.get(n.textureColor).id:void 0,colorMixMode:n.colorMixMode,normalTextureId:Object(r.k)(n.textureNormal)&&c?h.get(n.textureNormal).id:void 0,textureAlphaPremultiplied:!0,occlusionTextureId:Object(r.k)(n.textureOcclusion)&&c?h.get(n.textureOcclusion).id:void 0,emissiveTextureId:Object(r.k)(n.textureEmissive)&&c?h.get(n.textureEmissive).id:void 0,metallicRoughnessTextureId:Object(r.k)(n.textureMetallicRoughness)&&c?h.get(n.textureMetallicRoughness).id:void 0,emissiveFactor:[m,v,p],mrrFactors:[n.metallicFactor,n.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...o}))}const O=function(e,t){switch(t){case 4:return Object(g.c)(e);case 5:return Object(g.b)(e);case 6:return Object(g.a)(e)}}(e.indices||e.attributes.position.count,e.primitiveType),y=e.attributes.position.count,C=Object(f.a)(m.u,y);Object(v.e)(C,e.attributes.position,e.transform);const T=[["position",{data:C.typedBuffer,size:C.elementCount,exclusive:!0}]],w=[["position",O]];if(Object(r.k)(e.attributes.normal)){const t=Object(f.a)(m.u,y);Object(i.a)(l,e.transform),Object(v.a)(t,e.attributes.normal,l),T.push(["normal",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),w.push(["normal",O])}if(Object(r.k)(e.attributes.tangent)){const t=Object(f.a)(m.C,y);Object(i.a)(l,e.transform),Object(p.c)(t,e.attributes.tangent,l),T.push(["tangent",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),w.push(["tangent",O])}if(Object(r.k)(e.attributes.texCoord0)){const t=Object(f.a)(m.m,y);Object(N.b)(t,e.attributes.texCoord0),T.push(["uv0",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),w.push(["uv0",O])}if(Object(r.k)(e.attributes.color)){const t=Object(f.a)(m.J,y);if(4===e.attributes.color.elementCount)e.attributes.color instanceof m.C?Object(p.b)(t,e.attributes.color,255):e.attributes.color instanceof m.J?Object(V.a)(t,e.attributes.color):e.attributes.color instanceof m.H&&Object(p.b)(t,e.attributes.color,1/256);else{Object(V.b)(t,255,255,255,255);const o=new m.B(t.buffer,0,4);e.attributes.color instanceof m.u?Object(v.d)(o,e.attributes.color,255):e.attributes.color instanceof m.B?Object(k.a)(o,e.attributes.color):e.attributes.color instanceof m.z&&Object(v.d)(o,e.attributes.color,1/256)}T.push(["color",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),w.push(["color",O])}const M=new _.a(T,w);b.stageResources.geometries.push(M),b.stageResources.materials.push(d.get(a)),c&&(Object(r.k)(n.textureColor)&&b.stageResources.textures.push(h.get(n.textureColor)),Object(r.k)(n.textureNormal)&&b.stageResources.textures.push(h.get(n.textureNormal)),Object(r.k)(n.textureOcclusion)&&b.stageResources.textures.push(h.get(n.textureOcclusion)),Object(r.k)(n.textureEmissive)&&b.stageResources.textures.push(h.get(n.textureEmissive)),Object(r.k)(n.textureMetallicRoughness)&&b.stageResources.textures.push(h.get(n.textureMetallicRoughness))),b.numberOfVertices+=y;const S=M.boundingInfo;Object(r.k)(S)&&(Object(u.n)(b.boundingBox,S.getBBMin()),Object(u.n)(b.boundingBox,S.getBBMax()))}))})),c}function H(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":return 1;default:return 0}}},1162:function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));var a=o(837),r=o(107);function i(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(r.a`#ifndef GL_EXT_shader_texture_lod
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
}`)}function n(e,t){e.include(a.a,t),e.fragment.code.add(r.a`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===t.attributeTextureCoordinates&&e.fragment.code.add(r.a`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),2===t.attributeTextureCoordinates&&(e.include(i),e.fragment.code.add(r.a`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`))}},710:function(e,t,o){"use strict";o.d(t,"a",(function(){return i})),o.d(t,"b",(function(){return l})),o.d(t,"c",(function(){return s})),o.d(t,"d",(function(){return n})),o.d(t,"e",(function(){return r}));var a=o(959);function r(e,t,o){if(e.count!==t.count)return void a.a.error("source and destination buffers need to have the same number of elements");const r=e.count,i=o[0],n=o[1],s=o[2],l=o[4],c=o[5],d=o[6],u=o[8],m=o[9],v=o[10],p=o[12],f=o[13],h=o[14],b=e.typedBuffer,g=e.typedBufferStride,x=t.typedBuffer,O=t.typedBufferStride;for(let a=0;a<r;a++){const e=a*g,t=a*O,o=x[t],r=x[t+1],y=x[t+2];b[e]=i*o+l*r+u*y+p,b[e+1]=n*o+c*r+m*y+f,b[e+2]=s*o+d*r+v*y+h}}function i(e,t,o){if(e.count!==t.count)return void a.a.error("source and destination buffers need to have the same number of elements");const r=e.count,i=o[0],n=o[1],s=o[2],l=o[3],c=o[4],d=o[5],u=o[6],m=o[7],v=o[8],p=e.typedBuffer,f=e.typedBufferStride,h=t.typedBuffer,b=t.typedBufferStride;for(let a=0;a<r;a++){const e=a*f,t=a*b,o=h[t],r=h[t+1],g=h[t+2];p[e]=i*o+l*r+u*g,p[e+1]=n*o+c*r+m*g,p[e+2]=s*o+d*r+v*g}}function n(e,t,o){const a=Math.min(e.count,t.count),r=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,s=t.typedBufferStride;for(let l=0;l<a;l++){const e=l*i,t=l*s;r[e]=o*n[t],r[e+1]=o*n[t+1],r[e+2]=o*n[t+2]}}function s(e,t){const o=Math.min(e.count,t.count),a=e.typedBuffer,r=e.typedBufferStride,i=t.typedBuffer,n=t.typedBufferStride;for(let s=0;s<o;s++){const e=s*r,t=s*n,o=i[t],l=i[t+1],c=i[t+2],d=Math.sqrt(o*o+l*l+c*c);if(d>0){const t=1/d;a[e]=t*o,a[e+1]=t*l,a[e+2]=t*c}}}function l(e,t,o){const a=Math.min(e.count,t.count),r=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,s=t.typedBufferStride;for(let l=0;l<a;l++){const e=l*i,t=l*s;r[e]=n[t]>>o,r[e+1]=n[t+1]>>o,r[e+2]=n[t+2]>>o}}Object.freeze({__proto__:null,transformMat4:r,transformMat3:i,scale:n,normalize:s,shiftRight:l})},792:function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));var a=o(107);function r(e,t){const o=e.fragment;t.receiveAmbientOcclusion?(o.uniforms.add("ssaoTex","sampler2D"),o.uniforms.add("viewportPixelSz","vec4"),o.code.add(a.a`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):o.code.add(a.a`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}},801:function(e,t,o){"use strict";o.d(t,"a",(function(){return I}));var a=o(276),r=o(98),i=o(96),n=o(336),s=o(322),l=o(671),c=o(337),d=o(326),u=o(685),m=o(481),v=o(306),p=o(76),f=o(229),h=o(897),b=o(613),g=o(297),x=o(253),O=o(898),y=o(537),C=o(430),T=o(988),w=o(357),M=o(287),_=o(295),A=o(300),j=o(296),S=o(288),P=o(489),R=o(1031),F=o(273);class E extends _.a{initializeProgram(e){const t=E.shader.get(),o=this.configuration,a=t.build({OITEnabled:0===o.transparencyPassType,output:o.output,viewingMode:e.viewingMode,receiveShadows:o.receiveShadows,slicePlaneEnabled:o.slicePlaneEnabled,sliceHighlightDisabled:o.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:o.symbolColors,vvSize:o.vvSize,vvColor:o.vvColor,vvInstancingEnabled:!0,instanced:o.instanced,instancedColor:o.instancedColor,instancedDoublePrecision:o.instancedDoublePrecision,pbrMode:o.usePBR?o.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:o.hasMetalnessAndRoughnessTexture,hasEmissionTexture:o.hasEmissionTexture,hasOcclusionTexture:o.hasOcclusionTexture,hasNormalTexture:o.hasNormalTexture,hasColorTexture:o.hasColorTexture,receiveAmbientOcclusion:o.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:o.normalsTypeDerivate?3:0,doubleSidedMode:o.doubleSidedMode,vertexTangents:o.vertexTangents,attributeTextureCoordinates:o.hasMetalnessAndRoughnessTexture||o.hasEmissionTexture||o.hasOcclusionTexture||o.hasNormalTexture||o.hasColorTexture?1:0,textureAlphaPremultiplied:o.textureAlphaPremultiplied,attributeColor:o.vertexColors,screenSizePerspectiveEnabled:o.screenSizePerspective,verticalOffsetEnabled:o.verticalOffset,offsetBackfaces:o.offsetBackfaces,doublePrecisionRequiresObfuscation:Object(T.b)(e.rctx),alphaDiscardMode:o.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:o.multipassTerrainEnabled,cullAboveGround:o.cullAboveGround});return new S.a(e.rctx,a,j.a)}bindPass(e,t){var o,a;Object(w.c)(this.program,t.camera.projectionMatrix);const r=this.configuration.output;(1===this.configuration.output||t.multipassTerrainEnabled||3===r)&&this.program.setUniform2fv("cameraNearFar",t.camera.nearFar),t.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",t.inverseViewport),Object(x.a)(this.program,t)),7===r&&(this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",v.b[e.colorMixMode])),0===r?(t.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",e.ambient),this.program.setUniform3fv("diffuse",e.diffuse),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",v.b[e.colorMixMode]),this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.configuration.usePBR&&Object(O.b)(this.program,e,this.configuration.isSchematic)):4===r&&Object(g.b)(this.program,t),Object(C.c)(this.program,e),Object(b.b)(this.program,e,t),Object(v.a)(e.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==e.textureAlphaMode&&3!==e.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",e.textureAlphaCutoff),null==(o=t.shadowMap)||o.bind(this.program),null==(a=t.ssaoHelper)||a.bind(this.program)}bindDraw(e){const t=this.configuration.instancedDoublePrecision?Object(i.g)(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;Object(w.e)(this.program,t,e.camera.viewMatrix),this.program.rebindTextures(),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&Object(w.a)(this.program,t,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&h.a.bindCustomOrigin(this.program,t),Object(f.b)(this.program,this.configuration,e.slicePlane,t),0===this.configuration.output&&Object(y.d)(this.program,e,t)}setPipeline(e,t){const o=this.configuration,a=3===e,r=2===e;return Object(F.f)({blending:0!==o.output&&7!==o.output||!o.transparent?null:a?d.f:Object(d.a)(e),culling:B(o)&&Object(F.b)(o.cullFace),depthTest:{func:Object(d.b)(e)},depthWrite:a||r?o.writeDepth&&F.d:null,colorWrite:F.c,stencilWrite:o.sceneHasOcludees?P.h:null,stencilTest:o.sceneHasOcludees?t?P.d:P.c:null,polygonOffset:a||r?null:Object(d.g)(o.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e){return e?this._occludeePipelineState:this.pipeline}}function B(e){return e.cullFace?0!==e.cullFace:!e.slicePlaneEnabled&&!e.transparent&&!e.doubleSidedMode}E.shader=new M.a(R.a,(()=>o.e(301).then(o.bind(null,1286))));class L extends A.a{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1}}Object(p.a)([Object(A.b)({count:8})],L.prototype,"output",void 0),Object(p.a)([Object(A.b)({count:4})],L.prototype,"alphaDiscardMode",void 0),Object(p.a)([Object(A.b)({count:3})],L.prototype,"doubleSidedMode",void 0),Object(p.a)([Object(A.b)()],L.prototype,"isSchematic",void 0),Object(p.a)([Object(A.b)()],L.prototype,"vertexColors",void 0),Object(p.a)([Object(A.b)()],L.prototype,"offsetBackfaces",void 0),Object(p.a)([Object(A.b)()],L.prototype,"symbolColors",void 0),Object(p.a)([Object(A.b)()],L.prototype,"vvSize",void 0),Object(p.a)([Object(A.b)()],L.prototype,"vvColor",void 0),Object(p.a)([Object(A.b)()],L.prototype,"verticalOffset",void 0),Object(p.a)([Object(A.b)()],L.prototype,"receiveShadows",void 0),Object(p.a)([Object(A.b)()],L.prototype,"slicePlaneEnabled",void 0),Object(p.a)([Object(A.b)()],L.prototype,"sliceHighlightDisabled",void 0),Object(p.a)([Object(A.b)()],L.prototype,"receiveAmbientOcclusion",void 0),Object(p.a)([Object(A.b)()],L.prototype,"screenSizePerspective",void 0),Object(p.a)([Object(A.b)()],L.prototype,"textureAlphaPremultiplied",void 0),Object(p.a)([Object(A.b)()],L.prototype,"hasColorTexture",void 0),Object(p.a)([Object(A.b)()],L.prototype,"usePBR",void 0),Object(p.a)([Object(A.b)()],L.prototype,"hasMetalnessAndRoughnessTexture",void 0),Object(p.a)([Object(A.b)()],L.prototype,"hasEmissionTexture",void 0),Object(p.a)([Object(A.b)()],L.prototype,"hasOcclusionTexture",void 0),Object(p.a)([Object(A.b)()],L.prototype,"hasNormalTexture",void 0),Object(p.a)([Object(A.b)()],L.prototype,"instanced",void 0),Object(p.a)([Object(A.b)()],L.prototype,"instancedColor",void 0),Object(p.a)([Object(A.b)()],L.prototype,"instancedDoublePrecision",void 0),Object(p.a)([Object(A.b)()],L.prototype,"vertexTangents",void 0),Object(p.a)([Object(A.b)()],L.prototype,"normalsTypeDerivate",void 0),Object(p.a)([Object(A.b)()],L.prototype,"writeDepth",void 0),Object(p.a)([Object(A.b)()],L.prototype,"sceneHasOcludees",void 0),Object(p.a)([Object(A.b)()],L.prototype,"transparent",void 0),Object(p.a)([Object(A.b)()],L.prototype,"enableOffset",void 0),Object(p.a)([Object(A.b)({count:3})],L.prototype,"cullFace",void 0),Object(p.a)([Object(A.b)({count:4})],L.prototype,"transparencyPassType",void 0),Object(p.a)([Object(A.b)()],L.prototype,"multipassTerrainEnabled",void 0),Object(p.a)([Object(A.b)()],L.prototype,"cullAboveGround",void 0);var D=o(1032);class z extends E{initializeProgram(e){const t=z.shader.get(),o=this.configuration,a=t.build({OITEnabled:0===o.transparencyPassType,output:o.output,viewingMode:e.viewingMode,receiveShadows:o.receiveShadows,slicePlaneEnabled:o.slicePlaneEnabled,sliceHighlightDisabled:o.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:o.symbolColors,vvSize:o.vvSize,vvColor:o.vvColor,vvInstancingEnabled:!0,instanced:o.instanced,instancedColor:o.instancedColor,instancedDoublePrecision:o.instancedDoublePrecision,pbrMode:o.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:o.hasColorTexture,receiveAmbientOcclusion:o.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangents:!1,attributeTextureCoordinates:o.hasColorTexture?1:0,textureAlphaPremultiplied:o.textureAlphaPremultiplied,attributeColor:o.vertexColors,screenSizePerspectiveEnabled:o.screenSizePerspective,verticalOffsetEnabled:o.verticalOffset,offsetBackfaces:o.offsetBackfaces,doublePrecisionRequiresObfuscation:Object(T.b)(e.rctx),alphaDiscardMode:o.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:o.multipassTerrainEnabled,cullAboveGround:o.cullAboveGround});return new S.a(e.rctx,a,j.a)}}z.shader=new M.a(D.a,(()=>o.e(297).then(o.bind(null,1287))));class I extends c.a{constructor(e){super(e,V),this.supportsEdges=!0,this.techniqueConfig=new L,this.vertexBufferLayout=I.getVertexBufferLayout(this.params),this.instanceBufferLayout=e.instanced?I.getInstanceBufferLayout(this.params):null}isVisibleInPass(e){return 4!==e&&6!==e&&7!==e||this.params.castShadows}isVisible(){const e=this.params;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,o=e.vertexColors,a=e.symbolColors,r=!!t&&t.indexOf("color")>-1,i=e.vvColorEnabled,n="replace"===e.colorMixMode,s=e.opacity>0,l=e.externalColor&&e.externalColor[3]>0;return o&&(r||i||a)?!!n||s:o?n?l:s:r||i||a?!!n||s:n?l:s}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.params.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.params.textureId,this.techniqueConfig.vertexTangents=this.params.vertexTangents,this.techniqueConfig.instanced=!!this.params.instanced,this.techniqueConfig.instancedDoublePrecision=this.params.instancedDoublePrecision,this.techniqueConfig.vvSize=this.params.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.params.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.params.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.params.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.params.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.params.normals,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees,this.techniqueConfig.cullFace=this.params.slicePlaneEnabled?0:this.params.cullFace,this.techniqueConfig.multipassTerrainEnabled=!!t&&t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=!!t&&t.cullAboveGround,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.params.vertexColors,this.techniqueConfig.symbolColors=this.params.symbolColors,this.params.treeRendering?this.techniqueConfig.doubleSidedMode=2:this.techniqueConfig.doubleSidedMode=this.params.doubleSided&&"normal"===this.params.doubleSidedType?1:this.params.doubleSided&&"winding-order"===this.params.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.params.instanced&&this.params.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.params.receiveShadows&&this.params.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!(!t||!t.ssaoEnabled)&&this.params.receiveSSAO,this.techniqueConfig.vvColor=this.params.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.params.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.params.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.params.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.params.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.params.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.params.transparent||!this.params.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.params.usePBR&&this.params.isSchematic,this.techniqueConfig.transparencyPassType=t?t.transparencyPassType:3,this.techniqueConfig.enableOffset=!t||t.camera.relativeElevation<d.e),this.techniqueConfig}intersect(e,t,o,a,i,n,s){if(null!==this.params.verticalOffset){const e=a.camera;Object(r.w)(W,o[12],o[13],o[14]);let t=null;switch(a.viewingMode){case 1:t=Object(r.r)(H,W);break;case 2:t=Object(r.k)(H,$)}let s=0;if(null!==this.params.verticalOffset){const o=Object(r.j)(X,W,e.eye),a=Object(r.p)(o),i=Object(r.e)(o,o,1/a);let n=null;this.params.screenSizePerspective&&(n=Object(r.h)(t,i)),s+=Object(v.i)(e,a,this.params.verticalOffset,n,this.params.screenSizePerspective)}Object(r.e)(t,t,s),Object(r.x)(q,t,a.transform.inverseRotation),i=Object(r.j)(G,i,q),n=Object(r.j)(U,n,q)}Object(v.f)(e,t,a,i,n,Object(u.c)(a.verticalOffset),s)}getGLMaterial(e){if(0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output)return new N(e)}createBufferWriter(){return new k(this.vertexBufferLayout,this.instanceBufferLayout)}static getVertexBufferLayout(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,o=Object(n.a)().vec3f("position").vec3f("normal");return e.vertexTangents&&o.vec4f("tangent"),t&&o.vec2f("uv0"),e.vertexColors&&o.vec4u8("color"),e.symbolColors&&o.vec4u8("symbolColor"),o}static getInstanceBufferLayout(e){let t=Object(n.a)();return t=e.instancedDoublePrecision?t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):t.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f("instanceFeatureAttribute")),t}}class N extends l.a{constructor(e){const t=e.material;super({...e,...t.params}),this.updateParameters()}updateParameters(e){const t=this._material.params;this.updateTexture(t.textureId),this._technique=this._techniqueRep.releaseAndAcquire(t.treeRendering?z:E,this._material.getTechniqueConfig(this._output,e),this._technique)}selectPipelines(){}_updateShadowState(e){e.shadowMappingEnabled!==this._material.params.shadowMappingEnabled&&this._material.setParameterValues({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.params.sceneHasOcludees&&this._material.setParameterValues({sceneHasOcludees:e.hasOccludees})}ensureParameters(e){0!==this._output&&7!==this._output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e){this._technique.bindPass(this._material.params,e),this.bindTextures(this._technique.program)}beginSlot(e){return e===(this._material.params.transparent?this._material.params.writeDepth?5:8:3)}getPipelineState(e,t){return this._technique.getPipelineState(t)}}const V={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:2,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:Object(a.b)(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:s.b,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,...c.b};class k{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get("position").length}write(e,t,o,a){Object(m.c)(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,o,a)}}const G=Object(i.e)(),U=Object(i.e)(),$=Object(i.g)(0,0,1),H=Object(i.e)(),q=Object(i.e)(),W=Object(i.e)(),X=Object(i.e)()},827:function(e,t,o){"use strict";function a(e,t,o){const a=e.typedBuffer,r=e.typedBufferStride,i=t.typedBuffer,n=t.typedBufferStride,s=o?o.count:t.count;let l=(o&&o.dstIndex?o.dstIndex:0)*r,c=(o&&o.srcIndex?o.srcIndex:0)*n;for(let d=0;d<s;++d)a[l]=i[c],a[l+1]=i[c+1],a[l+2]=i[c+2],l+=r,c+=n}function r(e,t,o,a,r){var i,n;const s=e.typedBuffer,l=e.typedBufferStride,c=null!=(i=null==r?void 0:r.count)?i:e.count;let d=(null!=(n=null==r?void 0:r.dstIndex)?n:0)*l;for(let u=0;u<c;++u)s[d]=t,s[d+1]=o,s[d+2]=a,d+=l}o.d(t,"a",(function(){return a})),o.d(t,"b",(function(){return r}));Object.freeze({__proto__:null,copy:a,fill:r})},837:function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));var a=o(107);function r(e,t){1===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(a.a`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),2===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add("uvRegion","vec4"),e.varyings.add("vuvRegion","vec4"),e.vertex.code.add(a.a`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),0===t.attributeTextureCoordinates&&e.vertex.code.add(a.a`void forwardTextureCoordinates() {}`)}},838:function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));var a=o(107);function r(e){e.attributes.add("position","vec3"),e.vertex.code.add(a.a`vec3 positionModel() { return position; }`)}},849:function(e,t,o){"use strict";o.d(t,"a",(function(){return d}));var a=o(107);function r(e,t){const o=e.fragment,r=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===r?(o.uniforms.add("lightingAmbientSH0","vec3"),o.code.add(a.a`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===r?(o.uniforms.add("lightingAmbientSH_R","vec4"),o.uniforms.add("lightingAmbientSH_G","vec4"),o.uniforms.add("lightingAmbientSH_B","vec4"),o.code.add(a.a`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):2===r&&(o.uniforms.add("lightingAmbientSH0","vec3"),o.uniforms.add("lightingAmbientSH_R1","vec4"),o.uniforms.add("lightingAmbientSH_G1","vec4"),o.uniforms.add("lightingAmbientSH_B1","vec4"),o.uniforms.add("lightingAmbientSH_R2","vec4"),o.uniforms.add("lightingAmbientSH_G2","vec4"),o.uniforms.add("lightingAmbientSH_B2","vec4"),o.code.add(a.a`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),1!==t.pbrMode&&2!==t.pbrMode||o.code.add(a.a`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}var i=o(792);function n(e){const t=e.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.code.add(a.a`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}var s=o(663),l=o(547),c=o(537);function d(e,t){const o=e.fragment;e.include(n),e.include(i.a,t),0!==t.pbrMode&&e.include(s.a,t),e.include(r,t),t.receiveShadows&&e.include(c.a,t),o.uniforms.add("lightingGlobalFactor","float"),o.uniforms.add("ambientBoostFactor","float"),e.include(l.a),o.code.add(a.a`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===t.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),o.code.add(a.a`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${1===t.viewingMode?a.a`normalize(vPosWorld)`:a.a`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),o.code.add(a.a`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),0===t.pbrMode||4===t.pbrMode?o.code.add(a.a`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):1!==t.pbrMode&&2!==t.pbrMode||(o.code.add(a.a`const float fillLightIntensity = 0.25;
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
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),o.code.add(a.a`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),o.code.add(a.a`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = abs(dot(normal, ambientDir));
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),o.code.add(a.a`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),o.code.add(a.a`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===t.pbrMode?a.a`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:a.a`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}},855:function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var a=o(107);function r(e){const t=a.a`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;e.fragment.code.add(t),e.vertex.code.add(t)}function i(e,t){0===t.normalType&&(e.attributes.add("normal","vec3"),e.vertex.code.add(a.a`vec3 normalModel() {
return normal;
}`)),1===t.normalType&&(e.include(r),e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(a.a`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),3===t.normalType&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(a.a`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}},897:function(e,t,o){"use strict";o.d(t,"a",(function(){return l}));var a,r=o(96),i=o(988),n=o(107),s=o(591);function l(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),t.instancedDoublePrecision&&(e.vertex.include(i.a,t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const o=[n.a`
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
    `:n.a``];e.vertex.code.add(o[0]),e.vertex.code.add(o[1]),e.vertex.code.add(o[2]),2===t.output&&e.vertex.code.add(o[3]),e.vertex.code.add(o[4])}(a=l||(l={})).Uniforms=class{},a.bindCustomOrigin=function(e,t){Object(s.b)(t,c,d,3),e.setUniform3fv("viewOriginHi",c),e.setUniform3fv("viewOriginLo",d)};const c=Object(r.e)(),d=Object(r.e)()},898:function(e,t,o){"use strict";o.d(t,"a",(function(){return n})),o.d(t,"b",(function(){return s}));var a=o(448),r=o(1162),i=o(107);Object(a.c)(0,.6,.2);function n(e,t){const o=e.fragment,a=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;1===t.pbrMode&&a&&e.include(r.a,t),2!==t.pbrMode?(0===t.pbrMode&&o.code.add(i.a`float getBakedOcclusion() { return 1.0; }`),1===t.pbrMode&&(o.uniforms.add("emissionFactor","vec3"),o.uniforms.add("mrrFactors","vec3"),o.code.add(i.a`vec3 mrr;
vec3 emission;
float occlusion;`),t.hasMetalnessAndRoughnessTexture&&(o.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&o.uniforms.add("texMetallicRoughnessSize","vec2"),o.code.add(i.a`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(o.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&o.uniforms.add("texEmissionSize","vec2"),o.code.add(i.a`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(o.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&o.uniforms.add("texOcclusionSize","vec2"),o.code.add(i.a`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):o.code.add(i.a`float getBakedOcclusion() { return 1.0; }`),o.code.add(i.a`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${a?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):o.code.add(i.a`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function s(e,t,o=!1){o||(e.setUniform3fv("mrrFactors",t.mrrFactors),e.setUniform3fv("emissionFactor",t.emissiveFactor))}},959:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));const a=o(75).a.getLogger("esri.views.3d.support.buffer.math")},965:function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));var a=o(107);function r(e){e.vertex.code.add(a.a`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},966:function(e,t,o){"use strict";o.d(t,"a",(function(){return v}));var a=o(229),r=o(375),i=o(855),n=o(837),s=o(990),l=o(468),c=o(297),d=o(430),u=o(322),m=o(107);function v(e,t){const o=e.vertex.code,v=e.fragment.code;1!==t.output&&3!==t.output||(e.include(r.a,{linearDepth:!0}),e.include(n.a,t),e.include(d.a,t),e.include(l.a,t),e.include(a.a,t),e.vertex.uniforms.add("cameraNearFar","vec2"),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),o.add(m.a`void main(void) {
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
    `)),2===t.output&&(e.include(r.a,{linearDepth:!1}),e.include(i.a,t),e.include(s.a,t),e.include(n.a,t),e.include(d.a,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),o.add(m.a`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===t.normalType?m.a`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(a.a,t),e.include(u.a,t),v.add(m.a`
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
    `)),4===t.output&&(e.include(r.a,{linearDepth:!1}),e.include(n.a,t),e.include(d.a,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),o.add(m.a`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(a.a,t),e.include(u.a,t),e.include(c.a),v.add(m.a`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?m.a`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}},967:function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));var a=o(107);function r(e,t){const o=e.fragment;o.code.add(a.a`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),1===t.doubleSidedMode?o.code.add(a.a`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`):2===t.doubleSidedMode?o.code.add(a.a`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`):o.code.add(a.a`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`)}},968:function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var a=o(329),r=o(107);function i(e){e.include(a.a),e.code.add(r.a`
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
  `)}},988:function(e,t,o){"use strict";o.d(t,"a",(function(){return b})),o.d(t,"b",(function(){return g}));var a=o(74),r=o(107),i=o(80),n=o(96),s=o(193),l=o(226),c=o(482),d=(o(159),o(188),o(157),o(198)),u=o(591),m=o(170),v=o(1010);class p{constructor(e){this.context=e,this.svgAlwaysPremultipliesAlpha=!1,this._doublePrecisionRequiresObfuscation=null,Object(v.a)(e).then((e=>this.svgAlwaysPremultipliesAlpha=!e))}get doublePrecisionRequiresObfuscation(){if(Object(i.j)(this._doublePrecisionRequiresObfuscation)){const e=h(this.context,!1),t=h(this.context,!0);this._doublePrecisionRequiresObfuscation=0!==e&&(0===t||e/t>5)}return this._doublePrecisionRequiresObfuscation}}let f=null;function h(e,t){const o=new l.a(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1});const a=s.a.createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),r=new d.a(e,new Map([["position",0]]),{geometry:[{name:"position",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:a}),i=Object(n.g)(5633261.287538229,2626832.878767164,1434988.0495278358),v=Object(n.g)(5633271.46742708,2626873.6381334523,1434963.231608387),p=function(o,a){const r=new c.a(e,`\n\n  precision highp float;\n\n  attribute vec2 position;\n\n  uniform vec3 u_highA;\n  uniform vec3 u_lowA;\n  uniform vec3 u_highB;\n  uniform vec3 u_lowB;\n\n  varying vec4 v_color;\n\n  ${t?"#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION":""}\n\n  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION\n\n  vec3 dpPlusFrc(vec3 a, vec3 b) {\n    return mix(a, a + b, vec3(notEqual(b, vec3(0))));\n  }\n\n  vec3 dpMinusFrc(vec3 a, vec3 b) {\n    return mix(vec3(0), a - b, vec3(notEqual(a, b)));\n  }\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = dpPlusFrc(hiA, hiB);\n    vec3 e = dpMinusFrc(t1, hiA);\n    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;\n    return t1 + t2;\n  }\n\n  #else\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = hiA + hiB;\n    vec3 e = t1 - hiA;\n    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;\n    return t1 + t2;\n  }\n\n  #endif\n\n  const float MAX_RGBA_FLOAT =\n    255.0 / 256.0 +\n    255.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 / 256.0;\n\n  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);\n\n  vec4 float2rgba(const float value) {\n    // Make sure value is in the domain we can represent\n    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);\n\n    // Decompose value in 32bit fixed point parts represented as\n    // uint8 rgba components. Decomposition uses the fractional part after multiplying\n    // by a power of 256 (this removes the bits that are represented in the previous\n    // component) and then converts the fractional part to 8bits.\n    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);\n\n    // Convert uint8 values (from 0 to 255) to floating point representation for\n    // the shader\n    const float toU8AsFloat = 1.0 / 255.0;\n\n    return fixedPointU8 * toU8AsFloat;\n  }\n\n  void main() {\n    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);\n\n    v_color = float2rgba(val.z / 25.0);\n\n    gl_Position = vec4(position * 2.0 - 1.0, 0.0, 1.0);\n  }\n  `,"\n  precision highp float;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_FragColor = v_color;\n  }\n  ",new Map([["position",0]])),i=new Float32Array(6);Object(u.a)(o,i,3);const n=new Float32Array(6);return Object(u.a)(a,n,3),e.useProgram(r),r.setUniform3f("u_highA",i[0],i[2],i[4]),r.setUniform3f("u_lowA",i[1],i[3],i[5]),r.setUniform3f("u_highB",n[0],n[2],n[4]),r.setUniform3f("u_lowB",n[1],n[3],n[5]),r}(i,v),f=e.getBoundFramebufferObject(),{x:h,y:b,width:g,height:x}=e.getViewport();e.bindFramebuffer(o),e.setViewport(0,0,1,1),e.bindVAO(r),e.drawArrays(5,0,4);const O=new Uint8Array(4);o.readPixels(0,0,1,1,6408,5121,O),p.dispose(),r.dispose(!1),a.dispose(),o.dispose(),e.setViewport(h,b,g,x),e.bindFramebuffer(f);const y=(i[2]-v[2])/25,C=Object(m.k)(O);return Math.abs(y-C)}function b({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(r.a`vec3 dpPlusFrc(vec3 a, vec3 b) {
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
}`)}function g(e){return!!Object(a.a)("force-double-precision-obfuscation")||(t=e,(Object(i.j)(f)||f.context!==t)&&(f=new p(t)),f).doublePrecisionRequiresObfuscation;var t}},989:function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var a=o(107);function r(e){e.vertex.code.add(a.a`
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
  `)}function i(e,t){t.symbolColor?(e.include(r),e.attributes.add("symbolColor","vec4"),e.varyings.add("colorMixMode","mediump float")):e.fragment.uniforms.add("colorMixMode","int"),t.symbolColor?e.vertex.code.add(a.a`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`):e.vertex.code.add(a.a`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`)}},990:function(e,t,o){"use strict";o.d(t,"a",(function(){return u}));var a=o(855),r=o(276),i=o(145),n=o(96),s=o(838),l=o(988),c=o(107);function d(e,t){e.include(s.a),e.vertex.include(l.a,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),e.vertex.uniforms.add("uTransform_ProjFromView","mat4"),e.vertex.code.add(c.a`vec3 positionWorldCameraRelative() {
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
}`),e.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.fragment.code.add(c.a`vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`)}function u(e,t){0===t.normalType||1===t.normalType?(e.include(a.a,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),e.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),e.vertex.code.add(c.a`void forwardNormal() {
vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
}`)):2===t.normalType?(e.include(d,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(c.a`
    void forwardNormal() {
      vNormalWorld = ${1===t.viewingMode?c.a`normalize(vPositionWorldCameraRelative);`:c.a`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(c.a`void forwardNormal() {}`)}!function(e){e.ModelTransform=class{constructor(){this.worldFromModel_RS=Object(r.b)(),this.worldFromModel_TH=Object(n.e)(),this.worldFromModel_TL=Object(n.e)()}};e.ViewProjectionTransform=class{constructor(){this.worldFromView_TH=Object(n.e)(),this.worldFromView_TL=Object(n.e)(),this.viewFromCameraRelative_RS=Object(r.b)(),this.projFromView=Object(i.d)()}},e.bindModelTransform=function(e,t){e.setUniformMatrix3fv("uTransform_WorldFromModel_RS",t.worldFromModel_RS),e.setUniform3fv("uTransform_WorldFromModel_TH",t.worldFromModel_TH),e.setUniform3fv("uTransform_WorldFromModel_TL",t.worldFromModel_TL)},e.bindViewProjTransform=function(e,t){e.setUniform3fv("uTransform_WorldFromView_TH",t.worldFromView_TH),e.setUniform3fv("uTransform_WorldFromView_TL",t.worldFromView_TL),e.setUniformMatrix4fv("uTransform_ProjFromView",t.projFromView),e.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",t.viewFromCameraRelative_RS)}}(d||(d={})),(u||(u={})).bindUniforms=function(e,t){e.setUniformMatrix4fv("viewNormal",t)}}}]);
//# sourceMappingURL=35.3820c265.chunk.js.map