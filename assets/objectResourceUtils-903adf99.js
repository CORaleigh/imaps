import{el as Qe,e as d,cG as ve,aC as P,J as p,gL as X,d0 as Q,dC as Ft,_ as et,fj as Bt,a2 as Oe,aD as Gt,ch as tt,aE as pe,cf as ot,aH as ze,aF as kt,jU as Ut,Q as Wt,at as Ce,kS as jt,kT as Ht,kU as we,kV as Fe,aS as qt,kW as Yt,eY as at,ag as Xt,aw as Jt,eZ as rt,ae as Zt,kX as it,eK as Be,cH as nt,f5 as fe,kY as Kt,eJ as Qt,eO as Ge,eN as eo,eg as ke,kZ as Ue,ci as to}from"./index-53e0d3f6.js";import{e as st}from"./mat3f64-221ce671.js";import{o as lt,e as oo}from"./mat4f64-65d35099.js";import{i as he,c as We,u as ao,x as Le,L as ro,O as je,E as io}from"./BufferView-abbd0a70.js";import{t as no,r as so,f as He,e as lo}from"./vec33-70b5bdb4.js";import{m as co,n as uo,o as H,r as G,a as mo,b as po,c as qe,e as ho,t as vo,i as fo,f as go,d as xo}from"./DefaultMaterial_COLOR_GAMMA-a7024df8.js";import{t as Me}from"./resourceUtils-905695c0.js";import{t as To}from"./NestedMap-1b5db22e.js";import{t as bo}from"./requestImageUtils-0386f73f.js";import{r as u,ag as yo,a_ as Co,a$ as Ye,j as h,B as wo,b0 as Mo,W as $o,J as _e,a as _,C as ct,v as ee,a2 as te,b1 as oe,aR as ae,H as k,u as U,a5 as So,b2 as Ne,b3 as dt,b4 as N,y as Ao,aw as Oo,a6 as Lo,b5 as ie,b6 as _o,as as re,aD as No,at as ut,b7 as Po,au as mt,b8 as Ro,b9 as Eo,a9 as b,ba as Pe,aI as Do,av as Vo,aF as pt,a8 as Re,aH as Xe,aE as Io,bb as ne,I as zo,o as ht,a1 as vt,bc as ft,a7 as ge,a4 as gt,ac as xt,e as Tt,F as xe,bd as bt,a3 as yt,Z as Te,be as Ct,aB as Fo,bf as Bo,an as Go,c as ko,t as wt,b as Uo,d as Wo,E as jo,K as Ho,L as qo,M as Yo,s as Xo,h as Jo,aW as Zo,al as Ko,aA as Qo,g as de,ab as ea,S as ta,q,G as Mt,w as $t}from"./VertexColor.glsl-cd8180c5.js";import{u as C,n as B,e as se}from"./basicInterfaces-04e01328.js";import{T as oa}from"./InterleavedLayout-2fc52edc.js";import{o as a,b as Y,W as aa,c as ra,A as ia,h as na,d as sa,a as la,_ as ca,g as da,S as ua}from"./OrderIndependentTransparency-92d1201d.js";import{O as T}from"./VertexAttribute-15d1866a.js";import{o as ma,r as pa}from"./doublePrecisionUtils-e3c3d0d8.js";import{r as z}from"./symbolColorUtils-2bd5416b.js";import{I as Je,D as Ze,E as $e}from"./enums-64ab819c.js";function ha(e,t){const o=e.fragment;switch(o.code.add(a`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case S.None:o.code.add(a`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case S.View:o.code.add(a`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case S.WindingOrder:o.code.add(a`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:Qe(t.doubleSidedMode);case S.COUNT:}}var S;(function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"})(S||(S={}));function St(e){e.vertex.code.add(a`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}class va extends yo{constructor(){super(...arguments),this.instancedDoublePrecision=!1}}function At(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add(T.MODELORIGINHI,"vec3"),e.attributes.add(T.MODELORIGINLO,"vec3"),e.attributes.add(T.MODEL,"mat3"),e.attributes.add(T.MODELNORMAL,"mat3"));const o=e.vertex;t.instancedDoublePrecision&&(o.include(Co,t),o.uniforms.add(new Ye("viewOriginHi",(r,n)=>ma(ve(ue,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),ue))),o.uniforms.add(new Ye("viewOriginLo",(r,n)=>pa(ve(ue,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),ue)))),o.code.add(a`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),o.code.add(a`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?a`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),o.code.add(a`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),t.output===h.Normal&&(wo(o),o.code.add(a`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),t.hasVertexTangents&&o.code.add(a`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)}d([u()],va.prototype,"instancedDoublePrecision",void 0);const ue=P();function fa(e){e.vertex.code.add(a`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${a.int(z.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${a.int(z.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${a.int(z.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${a.int(z.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function Ot(e,t){t.hasSymbolColors?(e.include(fa),e.attributes.add(T.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(a`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new Mo("colorMixMode",o=>$o[o.colorMixMode])),e.vertex.code.add(a`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function ga(e){e.fragment.code.add(a`
    #define discardOrAdjustAlpha(color) { if (color.a < ${a.float(_e)}) { discard; } }
  `)}function W(e,t){xa(e,t,new _("textureAlphaCutoff",o=>o.textureAlphaCutoff))}function xa(e,t,o){const r=e.fragment;switch(t.alphaDiscardMode!==C.Mask&&t.alphaDiscardMode!==C.MaskBlend||r.uniforms.add(o),t.alphaDiscardMode){case C.Blend:return e.include(ga);case C.Opaque:r.code.add(a`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case C.Mask:r.code.add(a`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case C.MaskBlend:e.fragment.code.add(a`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function Lt(e,t){const{vertex:o,fragment:r}=e,n=t.hasModelTransformation;n&&o.uniforms.add(new ct("model",l=>p(l.modelTransformation)?l.modelTransformation:lt));const i=t.hasColorTexture&&t.alphaDiscardMode!==C.Opaque;switch(t.output){case h.Depth:case h.Shadow:case h.ShadowHighlight:case h.ShadowExcludeHighlight:case h.ObjectAndLayerIdColor:ee(o,t),e.include(te,t),e.include(oe,t),e.include(ae,t),e.include(Ao,t),e.include(U,t),e.include(Oo,t),Lo(e),e.varyings.add("depth","float"),i&&r.uniforms.add(new k("tex",l=>l.texture)),o.code.add(a`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPositionWithDepth(proj, view, ${n?"model,":""} vpos, nearFar, depth);
            forwardTextureCoordinates();
            forwardObjectAndLayerIdColor();
          }
        `),e.include(W,t),r.code.add(a`
          void main(void) {
            discardBySlice(vpos);
            ${i?a`
                    vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?a`colorUV`:a`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${t.output===h.ObjectAndLayerIdColor?a`outputObjectAndLayerIdColor();`:a`outputDepth(depth);`}
          }
        `);break;case h.Normal:ee(o,t),e.include(te,t),e.include(Ne,t),e.include(dt,t),e.include(oe,t),e.include(ae,t),i&&r.uniforms.add(new k("tex",l=>l.texture)),e.varyings.add("vPositionView","vec3"),o.code.add(a`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            ${t.normalType===N.Attribute?a`
            vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${n?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),e.include(U,t),e.include(W,t),r.code.add(a`
          void main() {
            discardBySlice(vpos);
            ${i?a`
                    vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?a`colorUV`:a`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${t.normalType===N.ScreenDerivative?a`
                vec3 normal = screenDerivativeNormal(vPositionView);`:a`
                vec3 normal = normalize(vNormalWorld);
                if (gl_FrontFacing == false) normal = -normal;`}
            gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
          }
        `);break;case h.Highlight:ee(o,t),e.include(te,t),e.include(oe,t),e.include(ae,t),i&&r.uniforms.add(new k("tex",l=>l.texture)),o.code.add(a`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${n?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),e.include(U,t),e.include(W,t),e.include(So,t),r.code.add(a`
          void main() {
            discardBySlice(vpos);
            ${i?a`
                    vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?a`colorUV`:a`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}function Ta(e,t){const o=e.fragment;if(t.hasVertexTangents?(e.attributes.add(T.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===S.WindingOrder?o.code.add(a`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):o.code.add(a`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),o.code.add(a`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`)),t.textureCoordinateType!==ie.None){e.include(_o,t);const r=t.supportsTextureAtlas?t.hasWebGL2Context?re.None:re.Size:re.None;o.uniforms.add(t.pbrTextureBindType===No.Pass?ut("normalTexture",n=>n.textureNormal,r):Po("normalTexture",n=>n.textureNormal,r)),o.code.add(a`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?a`vtc.size = ${mt(t,"normalTexture")};`:""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `)}}function Ee(e,t){const o=e.fragment;t.receiveAmbientOcclusion?(o.uniforms.add(ut("ssaoTex",(r,n)=>n.ssaoHelper.colorTexture,t.hasWebGL2Context?re.None:re.InvSize)),o.constants.add("blurSizePixelsInverse","float",1/Ro),o.code.add(a`
      float evaluateAmbientOcclusionInverse() {
        vec2 ssaoTextureSizeInverse = ${mt(t,"ssaoTex",!0)};
        return texture2D(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).a;
      }

      float evaluateAmbientOcclusion() {
        return 1.0 - evaluateAmbientOcclusionInverse();
      }
    `)):o.code.add(a`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function De(e){e.constants.add("ambientBoostFactor","float",Eo)}function Ve(e){e.uniforms.add(new _("lightingGlobalFactor",(t,o)=>o.lighting.globalFactor))}function _t(e,t){const o=e.fragment;switch(e.include(Ee,t),t.pbrMode!==b.Disabled&&e.include(Pe,t),e.include(Do,t),e.include(Vo),o.code.add(a`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===b.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),De(o),Ve(o),pt(o),o.code.add(a`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?a`normalize(vPosWorld)`:a`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),Re(o),o.code.add(a`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case b.Disabled:case b.WaterOnIntegratedMesh:case b.Water:e.include(Xe,t),o.code.add(a`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case b.Normal:case b.Schematic:o.code.add(a`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
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
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),o.code.add(a`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?o.uniforms.add(new Io("hasFillLights",(r,n)=>n.enableFillLights)):o.constants.add("hasFillLights","bool",!1),o.code.add(a`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),o.uniforms.add([new _("lightingSpecularStrength",(r,n)=>n.lighting.mainLight.specularStrength),new _("lightingEnvironmentStrength",(r,n)=>n.lighting.mainLight.environmentStrength)]),o.code.add(a`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),o.code.add(a`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode===b.Schematic?a`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:a`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case b.Terrain:case b.TerrainWithWater:e.include(Xe,t),o.code.add(a`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluateTerrainLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:Qe(t.pbrMode);case b.COUNT:}}function ba(e){e.vertex.uniforms.add(new ne("colorTextureTransformMatrix",t=>p(t.colorTextureTransformMatrix)?t.colorTextureTransformMatrix:X())),e.varyings.add("colorUV","vec2"),e.vertex.code.add(a`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function ya(e){e.vertex.uniforms.add(new ne("normalTextureTransformMatrix",t=>p(t.normalTextureTransformMatrix)?t.normalTextureTransformMatrix:X())),e.varyings.add("normalUV","vec2"),e.vertex.code.add(a`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Ca(e){e.vertex.uniforms.add(new ne("emissiveTextureTransformMatrix",t=>p(t.emissiveTextureTransformMatrix)?t.emissiveTextureTransformMatrix:X())),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add(a`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function wa(e){e.vertex.uniforms.add(new ne("occlusionTextureTransformMatrix",t=>p(t.occlusionTextureTransformMatrix)?t.occlusionTextureTransformMatrix:X())),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add(a`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Ma(e){e.vertex.uniforms.add(new ne("metallicRoughnessTextureTransformMatrix",t=>p(t.metallicRoughnessTextureTransformMatrix)?t.metallicRoughnessTextureTransformMatrix:X())),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add(a`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function be(e){e.include(zo),e.code.add(a`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${a.int(z.Multiply)}) {
        return allMixed;
      }
      if (mode == ${a.int(z.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${a.int(z.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${a.int(z.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${a.int(z.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}function $a(e){const t=new ht,{vertex:o,fragment:r,varyings:n}=t;return ee(o,e),t.include(vt),n.add("vpos","vec3"),t.include(ae,e),t.include(At,e),t.include(ft,e),e.hasColorTextureTransform&&t.include(ba),e.output!==h.Color&&e.output!==h.Alpha||(e.hasNormalTextureTransform&&t.include(ya),e.hasEmissionTextureTransform&&t.include(Ca),e.hasOcclusionTextureTransform&&t.include(wa),e.hasMetallicRoughnessTextureTransform&&t.include(Ma),ge(o,e),t.include(Ne,e),t.include(te,e),e.normalType===N.Attribute&&e.offsetBackfaces&&t.include(St),t.include(Ta,e),t.include(dt,e),e.instancedColor&&t.attributes.add(T.INSTANCECOLOR,"vec4"),n.add("localvpos","vec3"),t.include(oe,e),t.include(gt,e),t.include(Ot,e),t.include(xt,e),o.uniforms.add(new Tt("externalColor",i=>i.externalColor)),n.add("vcolorExt","vec4"),e.hasMultipassTerrain&&n.add("depth","float"),e.hasModelTransformation&&o.uniforms.add(new ct("model",i=>p(i.modelTransformation)?i.modelTransformation:lt)),o.code.add(a`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${a.float(_e)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${e.normalType===N.Attribute?a`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${e.hasModelTransformation?"model,":""} vpos);
          ${e.normalType===N.Attribute&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${e.hasColorTextureTransform?a`forwardColorUV();`:""}
        ${e.hasNormalTextureTransform?a`forwardNormalUV();`:""}
        ${e.hasEmissionTextureTransform?a`forwardEmissiveUV();`:""}
        ${e.hasOcclusionTextureTransform?a`forwardOcclusionUV();`:""}
        ${e.hasMetallicRoughnessTextureTransform?a`forwardMetallicRoughnessUV();`:""}
      }
    `)),e.output===h.Alpha&&(t.include(U,e),t.include(W,e),t.include(xe,e),r.uniforms.add([new _("opacity",i=>i.opacity),new _("layerOpacity",i=>i.layerOpacity)]),e.hasColorTexture&&r.uniforms.add(new k("tex",i=>i.texture)),r.include(be),r.code.add(a`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?a`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?a`colorUV`:a`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:a`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?a`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:a`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===h.Color&&(t.include(U,e),t.include(_t,e),t.include(Ee,e),t.include(W,e),t.include(e.instancedDoublePrecision?bt:yt,e),t.include(xe,e),ge(r,e),r.uniforms.add([o.uniforms.get("localOrigin"),new Te("ambient",i=>i.ambient),new Te("diffuse",i=>i.diffuse),new _("opacity",i=>i.opacity),new _("layerOpacity",i=>i.layerOpacity)]),e.hasColorTexture&&r.uniforms.add(new k("tex",i=>i.texture)),t.include(Ct,e),t.include(Pe,e),r.include(be),t.include(ha,e),De(r),Ve(r),Re(r),r.code.add(a`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?a`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?a`colorUV`:a`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:a`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===N.ScreenDerivative?a`
                vec3 normal = screenDerivativeNormal(localvpos);`:a`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===b.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${e.receiveShadows?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?a`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:a`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?a`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`:a`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?a`normalize(posWorld);`:a`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?a`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===b.Normal||e.pbrMode===b.Schematic?a`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?a`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:a`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===Y.Color?a`gl_FragColor = premultiplyAlpha(gl_FragColor);`:""}
      }
    `)),t.include(Lt,e),t}const Sa=Object.freeze(Object.defineProperty({__proto__:null,build:$a},Symbol.toStringTag,{value:"Module"}));let Aa=class extends Bo{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=Q(0,1,.5),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=B.Back,this.emissiveFactor=Q(0,0,0),this.instancedDoublePrecision=!1,this.normalType=N.Attribute,this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=Q(.2,.2,.2),this.diffuse=Q(.8,.8,.8),this.externalColor=Ft(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=P(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSizeEnabled=!1,this.vvSizeMinSize=[1,1,1],this.vvSizeMaxSize=[100,100,100],this.vvSizeOffset=[0,0,0],this.vvSizeFactor=[1,1,1],this.vvSizeValue=[1,1,1],this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=st(),this.vvOpacityEnabled=!1,this.vvOpacityValues=[],this.vvOpacityOpacities=[],this.transparent=!1,this.writeDepth=!0,this.customDepthTest=se.Less,this.textureAlphaMode=C.Blend,this.textureAlphaCutoff=Go,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=ko.Occlude}},br=class extends Fo{constructor(){super(...arguments),this.origin=P(),this.slicePlaneLocalOrigin=this.origin}};class le extends Uo{initializeConfiguration(t,o){o.hasWebGL2Context=t.rctx.type===Bt.WEBGL2,o.spherical=t.viewingMode===Oe.Global,o.doublePrecisionRequiresObfuscation=t.rctx.driverTest.doublePrecisionRequiresObfuscation.result,o.textureCoordinateType=o.hasColorTexture||o.hasMetallicRoughnessTexture||o.hasEmissionTexture||o.hasOcclusionTexture||o.hasNormalTexture?ie.Default:ie.None,o.objectAndLayerIdColorInstanced=o.instanced}initializeProgram(t){return this._initializeProgram(t,le.shader)}_initializeProgram(t,o){return new Wo(t.rctx,o.get().build(this.configuration),jo)}_convertDepthTestFunction(t){return t===se.Lequal?Je.LEQUAL:Je.LESS}_makePipeline(t,o){const r=this.configuration,n=t===Y.NONE,i=t===Y.FrontFace;return aa({blending:r.output!==h.Color&&r.output!==h.Alpha||!r.transparent?null:n?ra:ia(t),culling:Oa(r)?na(r.cullFace):null,depthTest:{func:sa(t,this._convertDepthTestFunction(r.customDepthTest))},depthWrite:(n||i)&&r.writeDepth?la:null,colorWrite:ca,stencilWrite:r.hasOccludees?Ho:null,stencilTest:r.hasOccludees?o?qo:Yo:null,polygonOffset:n||i?null:da(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipelineState(t,o){return o?this._occludeePipelineState:super.getPipelineState(t,o)}}function Oa(e){return e.cullFace!==B.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}le.shader=new wt(Sa,()=>et(()=>import("./DefaultMaterial.glsl-d7e56f83.js"),["assets/DefaultMaterial.glsl-d7e56f83.js","assets/mat4f64-65d35099.js","assets/VertexColor.glsl-cd8180c5.js","assets/index-53e0d3f6.js","assets/index-0be7f32f.css","assets/requestImageUtils-0386f73f.js","assets/OrderIndependentTransparency-92d1201d.js","assets/enums-64ab819c.js","assets/basicInterfaces-04e01328.js","assets/Texture-0787b5b8.js","assets/VertexArrayObject-d229d289.js","assets/Util-5a607d58.js","assets/triangle-cbb245f7.js","assets/sphere-ca10ea93.js","assets/mat3f64-221ce671.js","assets/quatf64-3363c48e.js","assets/lineSegment-4948db8a.js","assets/Indices-9b814586.js","assets/VertexAttribute-15d1866a.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/quat-d5f88513.js","assets/vec3f32-ad1dc57f.js","assets/BufferView-abbd0a70.js","assets/VertexElementDescriptor-2925c6af.js","assets/symbolColorUtils-2bd5416b.js","assets/vec33-70b5bdb4.js","assets/DefaultMaterial_COLOR_GAMMA-a7024df8.js","assets/types-e1c0a5bf.js","assets/resourceUtils-905695c0.js","assets/NestedMap-1b5db22e.js","assets/InterleavedLayout-2fc52edc.js"]));let m=class extends Xo{constructor(){super(...arguments),this.output=h.Color,this.alphaDiscardMode=C.Opaque,this.doubleSidedMode=S.None,this.pbrMode=b.Disabled,this.cullFace=B.None,this.transparencyPassType=Y.NONE,this.normalType=N.Attribute,this.textureCoordinateType=ie.None,this.customDepthTest=se.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}};d([u({count:h.COUNT})],m.prototype,"output",void 0),d([u({count:C.COUNT})],m.prototype,"alphaDiscardMode",void 0),d([u({count:S.COUNT})],m.prototype,"doubleSidedMode",void 0),d([u({count:b.COUNT})],m.prototype,"pbrMode",void 0),d([u({count:B.COUNT})],m.prototype,"cullFace",void 0),d([u({count:Y.COUNT})],m.prototype,"transparencyPassType",void 0),d([u({count:N.COUNT})],m.prototype,"normalType",void 0),d([u({count:ie.COUNT})],m.prototype,"textureCoordinateType",void 0),d([u({count:se.COUNT})],m.prototype,"customDepthTest",void 0),d([u()],m.prototype,"spherical",void 0),d([u()],m.prototype,"hasVertexColors",void 0),d([u()],m.prototype,"hasSymbolColors",void 0),d([u()],m.prototype,"hasVerticalOffset",void 0),d([u()],m.prototype,"hasSlicePlane",void 0),d([u()],m.prototype,"hasSliceHighlight",void 0),d([u()],m.prototype,"hasColorTexture",void 0),d([u()],m.prototype,"hasMetallicRoughnessTexture",void 0),d([u()],m.prototype,"hasEmissionTexture",void 0),d([u()],m.prototype,"hasOcclusionTexture",void 0),d([u()],m.prototype,"hasNormalTexture",void 0),d([u()],m.prototype,"hasScreenSizePerspective",void 0),d([u()],m.prototype,"hasVertexTangents",void 0),d([u()],m.prototype,"hasOccludees",void 0),d([u()],m.prototype,"hasMultipassTerrain",void 0),d([u()],m.prototype,"hasModelTransformation",void 0),d([u()],m.prototype,"offsetBackfaces",void 0),d([u()],m.prototype,"vvSize",void 0),d([u()],m.prototype,"vvColor",void 0),d([u()],m.prototype,"receiveShadows",void 0),d([u()],m.prototype,"receiveAmbientOcclusion",void 0),d([u()],m.prototype,"textureAlphaPremultiplied",void 0),d([u()],m.prototype,"instanced",void 0),d([u()],m.prototype,"instancedColor",void 0),d([u()],m.prototype,"objectAndLayerIdColorInstanced",void 0),d([u()],m.prototype,"instancedDoublePrecision",void 0),d([u()],m.prototype,"doublePrecisionRequiresObfuscation",void 0),d([u()],m.prototype,"writeDepth",void 0),d([u()],m.prototype,"transparent",void 0),d([u()],m.prototype,"enableOffset",void 0),d([u()],m.prototype,"cullAboveGround",void 0),d([u()],m.prototype,"snowCover",void 0),d([u()],m.prototype,"hasColorTextureTransform",void 0),d([u()],m.prototype,"hasEmissionTextureTransform",void 0),d([u()],m.prototype,"hasNormalTextureTransform",void 0),d([u()],m.prototype,"hasOcclusionTextureTransform",void 0),d([u()],m.prototype,"hasMetallicRoughnessTextureTransform",void 0),d([u({constValue:!0})],m.prototype,"hasVvInstancing",void 0),d([u({constValue:!1})],m.prototype,"useCustomDTRExponentForWater",void 0),d([u({constValue:!1})],m.prototype,"supportsTextureAtlas",void 0),d([u({constValue:!0})],m.prototype,"useFillLights",void 0);function La(e){const t=new ht,{vertex:o,fragment:r,varyings:n}=t;return ee(o,e),t.include(vt),n.add("vpos","vec3"),t.include(ae,e),t.include(At,e),t.include(ft,e),e.output!==h.Color&&e.output!==h.Alpha||(ge(t.vertex,e),t.include(Ne,e),t.include(te,e),e.offsetBackfaces&&t.include(St),e.instancedColor&&t.attributes.add(T.INSTANCECOLOR,"vec4"),n.add("vNormalWorld","vec3"),n.add("localvpos","vec3"),e.hasMultipassTerrain&&n.add("depth","float"),t.include(oe,e),t.include(gt,e),t.include(Ot,e),t.include(xt,e),o.uniforms.add(new Tt("externalColor",i=>i.externalColor)),n.add("vcolorExt","vec4"),o.code.add(a`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${a.float(_e)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.hasMultipassTerrain?a`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===h.Alpha&&(t.include(U,e),t.include(W,e),t.include(xe,e),r.uniforms.add([new _("opacity",i=>i.opacity),new _("layerOpacity",i=>i.layerOpacity)]),e.hasColorTexture&&r.uniforms.add(new k("tex",i=>i.texture)),r.include(be),r.code.add(a`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?a`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?a`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?a`colorUV`:a`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:a`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?a`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:a`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===h.Color&&(t.include(U,e),t.include(_t,e),t.include(Ee,e),t.include(W,e),t.include(e.instancedDoublePrecision?bt:yt,e),t.include(xe,e),ge(t.fragment,e),pt(r),De(r),Ve(r),r.uniforms.add([o.uniforms.get("localOrigin"),o.uniforms.get("view"),new Te("ambient",i=>i.ambient),new Te("diffuse",i=>i.diffuse),new _("opacity",i=>i.opacity),new _("layerOpacity",i=>i.layerOpacity)]),e.hasColorTexture&&r.uniforms.add(new k("tex",i=>i.texture)),t.include(Ct,e),t.include(Pe,e),r.include(be),t.extensions.add("GL_OES_standard_derivatives"),Re(r),r.code.add(a`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?a`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?a`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?a`colorUV`:a`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:a`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===b.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?a`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:a`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.snowCover?a`albedo = mix(albedo, vec3(1), 0.9);`:a``}
        ${a`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${e.pbrMode===b.Normal||e.pbrMode===b.Schematic?e.spherical?a`vec3 normalGround = normalize(vpos + localOrigin);`:a`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:a``}
        ${e.pbrMode===b.Normal||e.pbrMode===b.Schematic?a`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?a`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:a`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===Y.Color?a`gl_FragColor = premultiplyAlpha(gl_FragColor);`:a``}
      }
    `)),t.include(Lt,e),t}const _a=Object.freeze(Object.defineProperty({__proto__:null,build:La},Symbol.toStringTag,{value:"Module"}));let Nt=class Pt extends le{initializeConfiguration(t,o){super.initializeConfiguration(t,o),o.hasMetallicRoughnessTexture=!1,o.hasEmissionTexture=!1,o.hasOcclusionTexture=!1,o.hasNormalTexture=!1,o.hasModelTransformation=!1,o.normalType=N.Attribute,o.doubleSidedMode=S.WindingOrder,o.hasVertexTangents=!1}initializeProgram(t){return this._initializeProgram(t,Pt.shader)}};Nt.shader=new wt(_a,()=>et(()=>import("./RealisticTree.glsl-6a283505.js"),["assets/RealisticTree.glsl-6a283505.js","assets/VertexColor.glsl-cd8180c5.js","assets/index-53e0d3f6.js","assets/index-0be7f32f.css","assets/requestImageUtils-0386f73f.js","assets/OrderIndependentTransparency-92d1201d.js","assets/enums-64ab819c.js","assets/basicInterfaces-04e01328.js","assets/Texture-0787b5b8.js","assets/VertexArrayObject-d229d289.js","assets/Util-5a607d58.js","assets/mat4f64-65d35099.js","assets/triangle-cbb245f7.js","assets/sphere-ca10ea93.js","assets/mat3f64-221ce671.js","assets/quatf64-3363c48e.js","assets/lineSegment-4948db8a.js","assets/Indices-9b814586.js","assets/VertexAttribute-15d1866a.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/quat-d5f88513.js","assets/vec3f32-ad1dc57f.js","assets/BufferView-abbd0a70.js","assets/VertexElementDescriptor-2925c6af.js","assets/symbolColorUtils-2bd5416b.js","assets/vec33-70b5bdb4.js","assets/DefaultMaterial_COLOR_GAMMA-a7024df8.js","assets/types-e1c0a5bf.js","assets/resourceUtils-905695c0.js","assets/NestedMap-1b5db22e.js","assets/InterleavedLayout-2fc52edc.js"]));let ye=class extends Jo{constructor(t){super(t,Ra),this.supportsEdges=!0,this._configuration=new m,this._vertexBufferLayout=Ea(this.parameters)}isVisibleForOutput(t){return t!==h.Shadow&&t!==h.ShadowExcludeHighlight&&t!==h.ShadowHighlight||this.parameters.castShadows}isVisible(){const t=this.parameters;if(!super.isVisible()||t.layerOpacity===0)return!1;const{instanced:o,hasVertexColors:r,hasSymbolColors:n,vvColorEnabled:i}=t,l=p(o)&&o.includes("color"),c=t.colorMixMode==="replace",s=t.opacity>0,f=t.externalColor&&t.externalColor[3]>0;return r&&(l||i||n)?!!c||s:r?c?f:s:l||i||n?!!c||s:c?f:s}getConfiguration(t,o){return this._configuration.output=t,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=!!this.parameters.instanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=this.parameters.vvSizeEnabled,this._configuration.hasVerticalOffset=p(this.parameters.verticalOffset),this._configuration.hasScreenSizePerspective=p(this.parameters.screenSizePerspective),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,p(this.parameters.customDepthTest)&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?B.None:this.parameters.cullFace,this._configuration.hasMultipassTerrain=o.multipassTerrain.enabled,this._configuration.cullAboveGround=o.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=p(this.parameters.modelTransformation),t!==h.Color&&t!==h.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=S.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&this.parameters.doubleSidedType==="normal"?S.View:this.parameters.doubleSided&&this.parameters.doubleSidedType==="winding-order"?S.WindingOrder:S.None,this._configuration.instancedColor=p(this.parameters.instanced)&&this.parameters.instanced.includes("color"),this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=!!o.ssaoHelper.active&&this.parameters.receiveSSAO,this._configuration.vvColor=this.parameters.vvColorEnabled,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?b.Schematic:b.Normal:b.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=o.transparencyPassType,this._configuration.enableOffset=o.camera.relativeElevation<ua,this._configuration.snowCover=this.hasSnowCover(o),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(t){return p(t.weather)&&t.weatherVisible&&t.weather.type==="snowy"&&t.weather.snowCover==="enabled"}intersect(t,o,r,n,i,l){if(p(this.parameters.verticalOffset)){const c=r.camera;ve(Ae,o[12],o[13],o[14]);let s=null;switch(r.viewingMode){case Oe.Global:s=tt(Ke,Ae);break;case Oe.Local:s=Gt(Ke,Ia)}let f=0;const v=pe(za,Ae,c.eye),x=ot(v),w=ze(v,v,1/x);let g=null;this.parameters.screenSizePerspective&&(g=kt(s,w)),f+=Zo(c,x,this.parameters.verticalOffset,g??0,this.parameters.screenSizePerspective),ze(s,s,f),Ut(Se,s,r.transform.inverseRotation),n=pe(Da,n,Se),i=pe(Va,i,Se)}Ko(t,r,n,i,Qo(r.verticalOffset),l)}requiresSlot(t,o){return o===h.Color||o===h.Alpha||o===h.Depth||o===h.Normal||o===h.Shadow||o===h.ShadowHighlight||o===h.ShadowExcludeHighlight||o===h.Highlight||o===h.ObjectAndLayerIdColor?t===(this.parameters.transparent?this.parameters.writeDepth?de.TRANSPARENT_MATERIAL:de.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:de.OPAQUE_MATERIAL)||t===de.DRAPED_MATERIAL:!1}createGLMaterial(t){return new Na(t)}createBufferWriter(){return new ea(this._vertexBufferLayout)}},Na=class extends ta{constructor(t){super({...t,...t.material.parameters})}_updateShadowState(t){t.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:t.shadowMap.enabled})}_updateOccludeeState(t){t.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:t.hasOccludees})}beginSlot(t){this._output!==h.Color&&this._output!==h.Alpha||(this._updateShadowState(t),this._updateOccludeeState(t));const o=this._material.parameters;this.updateTexture(o.textureId);const r=t.camera.viewInverseTransposeMatrix;return ve(o.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(o.treeRendering?Nt:le,t)}},Pa=class extends Aa{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}};const Ra=new Pa;function Ea(e){const t=oa().vec3f(T.POSITION).vec3f(T.NORMAL),o=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId;return e.hasVertexTangents&&t.vec4f(T.TANGENT),o&&t.vec2f(T.UV0),e.hasVertexColors&&t.vec4u8(T.COLOR),e.hasSymbolColors&&t.vec4u8(T.SYMBOLCOLOR),Wt("enable-feature:objectAndLayerId-rendering")&&t.vec4u8(T.OBJECTANDLAYERIDCOLOR),t}const Da=P(),Va=P(),Ia=Q(0,0,1),Ke=P(),Se=P(),Ae=P(),za=P();function K(e){if(Ce(e))return null;const t=p(e.offset)?e.offset:jt,o=p(e.rotation)?e.rotation:0,r=p(e.scale)?e.scale:Ht,n=we(1,0,0,0,1,0,t[0],t[1],1),i=we(Math.cos(o),-Math.sin(o),0,Math.sin(o),Math.cos(o),0,0,0,1),l=we(r[0],0,0,0,r[1],0,0,0,1),c=X();return Fe(c,i,l),Fe(c,n,c),c}class Fa{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class Ba{constructor(t,o,r){this.name=t,this.lodThreshold=o,this.pivotOffset=r,this.stageResources=new Fa,this.numberOfVertices=0}}const I=qt.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Ga(e,t){const o=await ka(e,t),r=await qa(o.textureDefinitions??{},t);let n=0;for(const i in r)if(r.hasOwnProperty(i)){const l=r[i];n+=l!=null&&l.image?l.image.width*l.image.height*4:0}return{resource:o,textures:r,size:n+Yt(o)}}async function ka(e,t){const o=p(t)&&t.streamDataRequester;if(o)return Ua(e,o,t);const r=await at(Xt(e,Jt(t)));if(r.ok===!0)return r.value.data;rt(r.error),Rt(r.error)}async function Ua(e,t,o){const r=await at(t.request(e,"json",o));if(r.ok===!0)return r.value;rt(r.error),Rt(r.error.details.url)}function Rt(e){throw new Zt("",`Request for object resource failed: ${e}`)}function Wa(e){const t=e.params,o=t.topology;let r=!0;switch(t.vertexAttributes||(I.warn("Geometry must specify vertex attributes"),r=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const i=t.faces;if(i){if(t.vertexAttributes)for(const l in t.vertexAttributes){const c=i[l];c&&c.values?(c.valueType!=null&&c.valueType!=="UInt32"&&(I.warn(`Unsupported indexed geometry indices type '${c.valueType}', only UInt32 is currently supported`),r=!1),c.valuesPerElement!=null&&c.valuesPerElement!==1&&(I.warn(`Unsupported indexed geometry values per element '${c.valuesPerElement}', only 1 is currently supported`),r=!1)):(I.warn(`Indexed geometry does not specify face indices for '${l}' attribute`),r=!1)}}else I.warn("Indexed geometries must specify faces"),r=!1;break}default:I.warn(`Unsupported topology '${o}'`),r=!1}e.params.material||(I.warn("Geometry requires material"),r=!1);const n=e.params.vertexAttributes;for(const i in n)n[i].values||(I.warn("Geometries with externally defined attributes are not yet supported"),r=!1);return r}function ja(e,t){const o=new Array,r=new Array,n=new Array,i=new To,l=e.resource,c=it.parse(l.version||"1.0","wosr");Xa.validate(c);const s=l.model.name,f=l.model.geometries,v=l.materialDefinitions??{},x=e.textures;let w=0;const g=new Map;for(let y=0;y<f.length;y++){const M=f[y];if(!Wa(M))continue;const R=Ya(M),E=M.params.vertexAttributes,F=[];for(const $ in E){const D=E[$],j=D.values;F.push([$,new q(j,D.valuesPerElement,!0)])}const V=[];if(M.params.topology!=="PerAttributeArray"){const $=M.params.faces;for(const D in $)V.push([D,$[D].values])}const O=R.texture,A=x&&x[O];if(A&&!g.has(O)){const{image:$,params:D}=A,j=new Mt($,D);r.push(j),g.set(O,j)}const ce=g.get(O),J=ce?ce.id:void 0,L=R.material;let Z=i.get(L,O);if(Ce(Z)){const $=v[L.substring(L.lastIndexOf("/")+1)].params;$.transparency===1&&($.transparency=0);const D=A&&A.alphaChannelUsage,j=$.transparency>0||D==="transparency"||D==="maskAndTransparency",zt=A?Et(A.alphaChannelUsage):void 0,Ie={ambient:Be($.diffuse),diffuse:Be($.diffuse),opacity:1-($.transparency||0),transparent:j,textureAlphaMode:zt,textureAlphaCutoff:.33,textureId:J,initTextureTransparent:!0,doubleSided:!0,cullFace:B.None,colorMixMode:$.externalColorMixMode||"tint",textureAlphaPremultiplied:!!A&&!!A.params.preMultiplyAlpha};p(t)&&t.materialParamsMixin&&Object.assign(Ie,t.materialParamsMixin),Z=new ye(Ie),i.set(L,O,Z)}n.push(Z);const It=new $t(Z,F,V);w+=V.position?V.position.length:0,o.push(It)}return{engineResources:[{name:s,stageResources:{textures:r,materials:n,geometries:o},pivotOffset:l.model.pivotOffset,numberOfVertices:w,lodThreshold:null}],referenceBoundingBox:Ha(o)}}function Ha(e){const t=nt();return e.forEach(o=>{const r=o.boundingInfo;p(r)&&(fe(t,r.bbMin),fe(t,r.bbMax))}),t}async function qa(e,t){const o=[];for(const i in e){const l=e[i],c=l.images[0].data;if(!c){I.warn("Externally referenced texture data is not yet supported");continue}const s=l.encoding+";base64,"+c,f="/textureDefinitions/"+i,v=l.channels==="rgba"?l.alphaChannelUsage||"transparency":"none",x={noUnpackFlip:!0,wrap:{s:Ze.REPEAT,t:Ze.REPEAT},preMultiplyAlpha:Et(v)!==C.Opaque},w=p(t)&&t.disableTextures?Promise.resolve(null):bo(s,t);o.push(w.then(g=>({refId:f,image:g,params:x,alphaChannelUsage:v})))}const r=await Promise.all(o),n={};for(const i of r)n[i.refId]=i;return n}function Et(e){switch(e){case"mask":return C.Mask;case"maskAndTransparency":return C.MaskBlend;case"none":return C.Opaque;default:return C.Blend}}function Ya(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const Xa=new it(1,2,"wosr");async function Ja(e,t){const o=Dt(Kt(e));if(o.fileType==="wosr"){const x=await(t.cache?t.cache.loadWOSR(o.url,t):Ga(o.url,t)),{engineResources:w,referenceBoundingBox:g}=ja(x,t);return{lods:w,referenceBoundingBox:g,isEsriSymbolResource:!1,isWosr:!0}}const r=await(t.cache?t.cache.loadGLTF(o.url,t,!!t.usePBR):co(new uo(t.streamDataRequester),o.url,t,t.usePBR)),n=Qt(r.model.meta,"ESRI_proxyEllipsoid"),i=r.meta.isEsriSymbolResource&&p(n)&&r.meta.uri.includes("/RealisticTrees/");i&&!r.customMeta.esriTreeRendering&&(r.customMeta.esriTreeRendering=!0,tr(r,n));const l=!!t.usePBR,c=r.meta.isEsriSymbolResource?{usePBR:l,isSchematic:!1,treeRendering:i,mrrFactors:[0,1,.2]}:{usePBR:l,isSchematic:!1,treeRendering:!1,mrrFactors:[0,1,.5]},s={...t.materialParamsMixin,treeRendering:i},{engineResources:f,referenceBoundingBox:v}=Vt(r,c,s,t.skipHighLods&&o.specifiedLodIndex==null?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:o.specifiedLodIndex});return{lods:f,referenceBoundingBox:v,isEsriSymbolResource:r.meta.isEsriSymbolResource,isWosr:!1}}function Dt(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:t[4]!=null?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function Vt(e,t,o,r){const n=e.model,i=new Array,l=new Map,c=new Map,s=n.lods.length,f=nt();return n.lods.forEach((v,x)=>{const w=r.skipHighLods===!0&&(s>1&&x===0||s>3&&x===1)||r.skipHighLods===!1&&r.singleLodIndex!=null&&x!==r.singleLodIndex;if(w&&x!==0)return;const g=new Ba(v.name,v.lodThreshold,[0,0,0]);v.parts.forEach(y=>{const M=w?new ye({}):Za(n,y,g,t,o,l,c),{geometry:R,vertexCount:E}=Ka(y,p(M)?M:new ye({})),F=R.boundingInfo;p(F)&&x===0&&(fe(f,F.bbMin),fe(f,F.bbMax)),p(M)&&(g.stageResources.geometries.push(R),g.numberOfVertices+=E)}),w||i.push(g)}),{engineResources:i,referenceBoundingBox:f}}function Za(e,t,o,r,n,i,l){const c=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),s=e.materials.get(t.material),f=p(t.attributes.texCoord0),v=p(t.attributes.normal);if(Ce(s))return null;const x=Qa(s.alphaMode);if(!i.has(c)){if(f){const O=(A,ce=!1)=>{if(p(A)&&!l.has(A)){const J=e.textures.get(A);if(p(J)){const L=J.data;l.set(A,new Mt(Me(L)?L.data:L,{...J.parameters,preMultiplyAlpha:!Me(L)&&ce,encoding:Me(L)&&p(L.encoding)?L.encoding:void 0}))}}};O(s.textureColor,x!==C.Opaque),O(s.textureNormal),O(s.textureOcclusion),O(s.textureEmissive),O(s.textureMetallicRoughness)}const g=s.color[0]**(1/H),y=s.color[1]**(1/H),M=s.color[2]**(1/H),R=s.emissiveFactor[0]**(1/H),E=s.emissiveFactor[1]**(1/H),F=s.emissiveFactor[2]**(1/H),V=p(s.textureColor)&&f?l.get(s.textureColor):null;i.set(c,new ye({...r,transparent:x===C.Blend,customDepthTest:se.Lequal,textureAlphaMode:x,textureAlphaCutoff:s.alphaCutoff,diffuse:[g,y,M],ambient:[g,y,M],opacity:s.opacity,doubleSided:s.doubleSided,doubleSidedType:"winding-order",cullFace:s.doubleSided?B.None:B.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:v?N.Attribute:N.ScreenDerivative,castShadows:!0,receiveSSAO:!0,textureId:p(V)?V.id:void 0,colorMixMode:s.colorMixMode,normalTextureId:p(s.textureNormal)&&f?l.get(s.textureNormal).id:void 0,textureAlphaPremultiplied:p(V)&&!!V.params.preMultiplyAlpha,occlusionTextureId:p(s.textureOcclusion)&&f?l.get(s.textureOcclusion).id:void 0,emissiveTextureId:p(s.textureEmissive)&&f?l.get(s.textureEmissive).id:void 0,metallicRoughnessTextureId:p(s.textureMetallicRoughness)&&f?l.get(s.textureMetallicRoughness).id:void 0,emissiveFactor:[R,E,F],mrrFactors:[s.metallicFactor,s.roughnessFactor,r.mrrFactors[2]],isSchematic:!1,colorTextureTransformMatrix:K(s.colorTextureTransform),normalTextureTransformMatrix:K(s.normalTextureTransform),occlusionTextureTransformMatrix:K(s.occlusionTextureTransform),emissiveTextureTransformMatrix:K(s.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:K(s.metallicRoughnessTextureTransform),...n}))}const w=i.get(c);if(o.stageResources.materials.push(w),f){const g=y=>{p(y)&&o.stageResources.textures.push(l.get(y))};g(s.textureColor),g(s.textureNormal),g(s.textureOcclusion),g(s.textureEmissive),g(s.textureMetallicRoughness)}return w}function Ka(e,t){const o=e.attributes.position.count,r=er(e.indices||o,e.primitiveType),n=G(he,o);no(n,e.attributes.position,e.transform);const i=[[T.POSITION,new q(n.typedBuffer,n.elementCount,!0)]],l=[[T.POSITION,r]];if(p(e.attributes.normal)){const c=G(he,o);Ge(me,e.transform),so(c,e.attributes.normal,me),i.push([T.NORMAL,new q(c.typedBuffer,c.elementCount,!0)]),l.push([T.NORMAL,r])}if(p(e.attributes.tangent)){const c=G(We,o);Ge(me,e.transform),mo(c,e.attributes.tangent,me),i.push([T.TANGENT,new q(c.typedBuffer,c.elementCount,!0)]),l.push([T.TANGENT,r])}if(p(e.attributes.texCoord0)){const c=G(ao,o);po(c,e.attributes.texCoord0),i.push([T.UV0,new q(c.typedBuffer,c.elementCount,!0)]),l.push([T.UV0,r])}if(p(e.attributes.color)){const c=G(Le,o);if(e.attributes.color.elementCount===4)e.attributes.color instanceof We?qe(c,e.attributes.color,255):e.attributes.color instanceof Le?ho(c,e.attributes.color):e.attributes.color instanceof ro&&qe(c,e.attributes.color,1/256);else{vo(c,255,255,255,255);const s=new je(c.buffer,0,4);e.attributes.color instanceof he?He(s,e.attributes.color,255):e.attributes.color instanceof je?lo(s,e.attributes.color):e.attributes.color instanceof io&&He(s,e.attributes.color,1/256)}i.push([T.COLOR,new q(c.typedBuffer,c.elementCount,!0)]),l.push([T.COLOR,r])}return{geometry:new $t(t,i,l),vertexCount:o}}const me=st();function Qa(e){switch(e){case"BLEND":return C.Blend;case"MASK":return C.Mask;case"OPAQUE":case null:case void 0:return C.Opaque}}function er(e,t){switch(t){case $e.TRIANGLES:return xo(e);case $e.TRIANGLE_STRIP:return go(e);case $e.TRIANGLE_FAN:return fo(e)}}function tr(e,t){for(let o=0;o<e.model.lods.length;++o){const r=e.model.lods[o];for(const n of r.parts){const i=n.attributes.normal;if(Ce(i))return;const l=n.attributes.position,c=l.count,s=P(),f=P(),v=P(),x=G(Le,c),w=G(he,c),g=eo(oo(),n.transform);for(let y=0;y<c;y++){l.getVec(y,f),i.getVec(y,s),ke(f,f,n.transform),pe(v,f,t.center),Ue(v,v,t.radius);const M=v[2],R=ot(v),E=Math.min(.45+.55*R*R,1);Ue(v,v,t.radius),g!==null&&ke(v,v,g),tt(v,v),o+1!==e.model.lods.length&&e.model.lods.length>1&&to(v,v,s,M>-1?.2:Math.min(-4*M-3.8,1)),w.setVec(y,v),x.set(y,0,255*E),x.set(y,1,255*E),x.set(y,2,255*E),x.set(y,3,255)}n.attributes.normal=w,n.attributes.color=x}}}const Sr=Object.freeze(Object.defineProperty({__proto__:null,fetch:Ja,gltfToEngineResources:Vt,parseUrl:Dt},Symbol.toStringTag,{value:"Module"}));export{ye as E,La as I,$a as Q,br as a,K as c,ha as e,De as h,S as i,Ee as n,Sr as o,_t as p,Ja as t,Ve as u};
