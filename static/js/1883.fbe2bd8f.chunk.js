"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[1883],{38330:(e,t,r)=>{r.d(t,{t:()=>a});var i=r(76200);async function a(e,t){const{data:r}=await(0,i.default)(e,{responseType:"image",...t});return r}},22357:(e,t,r)=>{r.d(t,{q:()=>s});var i=r(71011),a=r(74058),o=r(82999),n=r(98634);function s(e,t){t.output===i.H.Color&&t.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(n.H`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):t.output===i.H.Depth||t.output===i.H.Shadow?(e.include(a.up,t),e.varyings.add("linearDepth","float"),e.vertex.uniforms.add(new o.A("nearFar",((e,t)=>t.camera.nearFar))),e.vertex.code.add(n.H`void forwardLinearDepth() {
linearDepth = (-vPosition_view.z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)):e.vertex.code.add(n.H`void forwardLinearDepth() {}`)}},73782:(e,t,r)=>{r.d(t,{O:()=>s,h:()=>o});var i=r(98634);function a(e){const t=i.H`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;e.fragment.code.add(t),e.vertex.code.add(t)}var o,n=r(4760);function s(e,t){t.normalType===o.Attribute&&(e.attributes.add(n.T.NORMAL,"vec3"),e.vertex.code.add(i.H`vec3 normalModel() {
return normal;
}`)),t.normalType===o.CompressedAttribute&&(e.include(a),e.attributes.add(n.T.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(i.H`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),t.normalType===o.ScreenDerivative&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(i.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}!function(e){e[e.Attribute=0]="Attribute",e[e.CompressedAttribute=1]="CompressedAttribute",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT"}(o||(o={}))},52276:(e,t,r)=>{r.d(t,{f:()=>o});var i=r(98634),a=r(4760);function o(e){e.attributes.add(a.T.POSITION,"vec3"),e.vertex.code.add(i.H`vec3 positionModel() { return position; }`)}},60113:(e,t,r)=>{r.d(t,{D:()=>s,N:()=>i});var i,a=r(41644),o=r(98634),n=r(4760);function s(e,t){switch(t.textureCoordinateType){case i.Default:return e.attributes.add(n.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(o.H`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case i.Atlas:return e.attributes.add(n.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(n.T.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(o.H`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);case i.None:return void e.vertex.code.add(o.H`void forwardTextureCoordinates() {}`);default:(0,a.Bg)(t.textureCoordinateType);case i.COUNT:return}}!function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.COUNT=3]="COUNT"}(i||(i={}))},85380:(e,t,r)=>{r.d(t,{Bb:()=>d,Pf:()=>h,d4:()=>u});var i=r(11873),a=r(67077),o=r(73782),n=r(74058),s=r(98634),l=r(82644),c=r(35522);function d(e,t){t.normalType===o.h.Attribute||t.normalType===o.h.CompressedAttribute?(e.include(o.O,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add([new l.j("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new c.c("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))]),e.vertex.code.add(s.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)):t.normalType===o.h.Ground?(e.include(n.up,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(s.H`
    void forwardNormal() {
      vNormalWorld = ${t.spherical?s.H`normalize(vPositionWorldCameraRelative);`:s.H`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(s.H`void forwardNormal() {}`)}class u extends n.su{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,i.c)()}}class h extends n.OU{constructor(){super(...arguments),this.transformNormalGlobalFromModel=(0,i.c)(),this.toMapSpace=(0,a.c)()}}},74058:(e,t,r)=>{r.d(t,{OU:()=>p,su:()=>f,up:()=>g});var i=r(11873),a=r(81949),o=r(8229),n=r(71353),s=r(52276),l=r(27254),c=r(86471),d=r(49450),u=r(98634),h=r(82644),m=r(35522),v=r(8654);function g(e,t){e.include(s.f);const r=e.vertex;r.include(l.$,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),r.uniforms.add([new d.J("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH)),new d.J("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new m.c("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new v.g("transformProjFromView",(e=>e.transformProjFromView)),new h.j("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new c.B("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new c.B("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL))]),r.code.add(u.H`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(u.H`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?u.H`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:u.H`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),e.fragment.uniforms.add(new d.J("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL))),r.code.add(u.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.code.add(u.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class f extends u.K{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,n.c)(),this.transformWorldFromViewTL=(0,n.c)(),this.transformViewFromCameraRelativeRS=(0,i.c)(),this.transformProjFromView=(0,a.c)()}}class p extends u.K{constructor(){super(...arguments),this.transformWorldFromModelRS=(0,i.c)(),this.transformWorldFromModelTH=(0,o.c)(),this.transformWorldFromModelTL=(0,o.c)()}}},27284:(e,t,r)=>{r.d(t,{i:()=>s});var i=r(41644),a=r(60113),o=r(98634);function n(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(o.H`#ifndef GL_EXT_shader_texture_lod
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
}`)}function s(e,t){switch(e.include(a.D,t),e.fragment.code.add(o.H`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),t.textureCoordinateType){case a.N.Default:return void e.fragment.code.add(o.H`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return texture2D(texture, params.uv);
}`);case a.N.Atlas:return e.include(n),void e.fragment.code.add(o.H`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return textureAtlasLookup(texture, params.size, params.uv, vuvRegion);
}`);default:(0,i.Bg)(t.textureCoordinateType);case a.N.None:case a.N.COUNT:return}}},49223:(e,t,r)=>{r.d(t,{L:()=>c,V:()=>u});var i=r(90045),a=r(67077),o=r(62993),n=r(82552),s=r(95276),l=r(98634);function c(e,t){const r=e.vertex;t.hasVerticalOffset?(u(r),t.hasScreenSizePerspective&&(e.include(o.cK),(0,o.m8)(r),(0,n.h)(e.vertex,t)),r.code.add(l.H`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?l.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:l.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?l.H`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:l.H`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(l.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const d=(0,a.c)();function u(e){e.uniforms.add(new s.N("verticalOffset",((e,t)=>{const{minWorldLength:r,maxWorldLength:a,screenLength:o}=e.verticalOffset,n=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),s=t.camera.pixelRatio||1;return(0,i.s)(d,o*s,n,r,a)})))}},60750:(e,t,r)=>{r.d(t,{_:()=>u});var i=r(11186),a=r(71353),o=r(90045),n=r(67077),s=r(41481),l=r(49450),c=r(95276),d=r(98634);function u(e,t){const r=e.fragment,a=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===a?(r.uniforms.add(new l.J("lightingAmbientSH0",((e,t)=>(0,i.s)(h,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),r.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===a?(r.uniforms.add([new c.N("lightingAmbientSH_R",((e,t)=>(0,o.s)(m,t.lighting.sh.r[0],t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3]))),new c.N("lightingAmbientSH_G",((e,t)=>(0,o.s)(m,t.lighting.sh.g[0],t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3]))),new c.N("lightingAmbientSH_B",((e,t)=>(0,o.s)(m,t.lighting.sh.b[0],t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3])))]),r.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):2===a&&(r.uniforms.add([new l.J("lightingAmbientSH0",((e,t)=>(0,i.s)(h,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new c.N("lightingAmbientSH_R1",((e,t)=>(0,o.s)(m,t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3],t.lighting.sh.r[4]))),new c.N("lightingAmbientSH_G1",((e,t)=>(0,o.s)(m,t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3],t.lighting.sh.g[4]))),new c.N("lightingAmbientSH_B1",((e,t)=>(0,o.s)(m,t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3],t.lighting.sh.b[4]))),new c.N("lightingAmbientSH_R2",((e,t)=>(0,o.s)(m,t.lighting.sh.r[5],t.lighting.sh.r[6],t.lighting.sh.r[7],t.lighting.sh.r[8]))),new c.N("lightingAmbientSH_G2",((e,t)=>(0,o.s)(m,t.lighting.sh.g[5],t.lighting.sh.g[6],t.lighting.sh.g[7],t.lighting.sh.g[8]))),new c.N("lightingAmbientSH_B2",((e,t)=>(0,o.s)(m,t.lighting.sh.b[5],t.lighting.sh.b[6],t.lighting.sh.b[7],t.lighting.sh.b[8])))]),r.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),t.pbrMode!==s.f7.Normal&&t.pbrMode!==s.f7.Schematic||r.code.add(d.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const h=(0,a.c)(),m=(0,n.c)()},92395:(e,t,r)=>{r.d(t,{k:()=>n});var i=r(49450),a=r(58406),o=r(98634);function n(e,t){const r=e.fragment;t.isGround?r.uniforms.add(new a.p("lightingFixedFactor",((e,t)=>(1-t.lighting.groundLightingFactor)*(1-t.lighting.globalFactor)))):r.constants.add("lightingFixedFactor","float",0),r.uniforms.add([new i.J("lightingMainDirection",((e,t)=>t.lighting.lightingMainDirection)),new i.J("lightingMainIntensity",((e,t)=>t.lighting.mainLight.intensity))]),r.code.add(o.H`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}},2116:(e,t,r)=>{r.d(t,{T:()=>s});var i=r(98634);function a(e){const t=e.fragment.code;t.add(i.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(i.H`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(i.H`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}var o=r(41481),n=r(85586);function s(e,t){const r=e.fragment.code;e.include(n.e),t.pbrMode===o.f7.Water||t.pbrMode===o.f7.WaterOnIntegratedMesh?(r.add(i.H`
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
    `),r.add(i.H`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(i.H`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(i.H`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(i.H`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
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
}`)):t.pbrMode!==o.f7.Normal&&t.pbrMode!==o.f7.Schematic||(e.include(a),r.add(i.H`struct PBRShadingInfo
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
};`),r.add(i.H`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(i.H`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),r.add(i.H`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(i.H`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(i.H`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}},41481:(e,t,r)=>{r.d(t,{f7:()=>u,jV:()=>h});var i=r(8229),a=r(27284),o=r(86471),n=r(49450),s=r(98634),l=r(69253),c=r(19253),d=r(99340);r(17363);(0,i.f)(0,.6,.2);var u;!function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.COUNT=5]="COUNT"}(u||(u={}));function h(e,t){const r=e.fragment,i=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;if(t.pbrMode===u.Normal&&i&&e.include(a.i,t),t.pbrMode!==u.Schematic)if(t.pbrMode!==u.Disabled){if(t.pbrMode===u.Normal){r.code.add(s.H`vec3 mrr;
vec3 emission;
float occlusion;`);const e=t.supportsTextureAtlas,a=t.pbrTextureBindType;t.hasMetalnessAndRoughnessTexture&&(r.uniforms.add(a===d.P.Pass?(0,c.J)("texMetallicRoughness",(e=>e.textureMetallicRoughness),e):(0,l.F)("texMetallicRoughness",(e=>e.textureMetallicRoughness),e)),r.code.add(s.H`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add(a===d.P.Pass?(0,c.J)("texEmission",(e=>e.textureEmissive),e):(0,l.F)("texEmission",(e=>e.textureEmissive),e)),r.code.add(s.H`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add(a===d.P.Pass?(0,c.J)("texOcclusion",(e=>e.textureOcclusion),e):(0,l.F)("texOcclusion",(e=>e.textureOcclusion),e)),r.code.add(s.H`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(s.H`float getBakedOcclusion() { return 1.0; }`),r.uniforms.add(a===d.P.Pass?[new n.J("emissionFactor",(e=>e.emissiveFactor)),new n.J("mrrFactors",(e=>e.mrrFactors))]:[new o.B("emissionFactor",(e=>e.emissiveFactor)),new o.B("mrrFactors",(e=>e.mrrFactors))]),r.code.add(s.H`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${i?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `)}}else r.code.add(s.H`float getBakedOcclusion() { return 1.0; }`);else r.code.add(s.H`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}},85586:(e,t,r)=>{r.d(t,{e:()=>a});var i=r(98634);function a(e){e.vertex.code.add(i.H`const float PI = 3.141592653589793;`),e.fragment.code.add(i.H`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},87920:(e,t,r)=>{r.d(t,{XE:()=>m,hb:()=>h});r(71353);var i=r(78980),a=r(95276),o=r(58406),n=r(99339),s=r(98634),l=r(61809),c=r(99340);class d extends l.x{constructor(e,t,r,i){switch(t){case c.P.Pass:case c.P.Draw:return void super(e,"mat4",t,((t,i,a)=>t.setUniformMatrix4fv(e,r(i,a))),i)}}}var u=r(19253);function h(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new d("shadowMapMatrix",c.P.Pass,((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),v(e))}function m(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new d("shadowMapMatrix",c.P.Draw,((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),v(e))}function v(e){const t=e.fragment;t.include(i.n),t.uniforms.add([new u.A("shadowMapTex",((e,t)=>t.shadowMap.depthTexture)),new n._("numCascades",((e,t)=>t.shadowMap.numCascades)),new a.N("cascadeDistances",((e,t)=>t.shadowMap.cascadeDistances)),new o.p("depthHalfPixelSz",((e,t)=>.5/t.shadowMap.textureSize))]),t.code.add(s.H`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
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
}`)}},18607:(e,t,r)=>{r.d(t,{k:()=>d});var i=r(49450),a=r(59150),o=r(699),n=r(98634),s=r(35522),l=r(4760),c=r(65964);function d(e,t){t.hasVvInstancing&&(t.vvSize||t.vvColor)&&e.attributes.add(l.T.INSTANCEFEATUREATTRIBUTE,"vec4");const r=e.vertex;t.vvSize?(r.uniforms.add(new i.J("vvSizeMinSize",(e=>e.vvSizeMinSize))),r.uniforms.add(new i.J("vvSizeMaxSize",(e=>e.vvSizeMaxSize))),r.uniforms.add(new i.J("vvSizeOffset",(e=>e.vvSizeOffset))),r.uniforms.add(new i.J("vvSizeFactor",(e=>e.vvSizeFactor))),r.uniforms.add(new s.c("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),r.uniforms.add(new i.J("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),r.code.add(n.H`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(n.H`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.hasVvInstancing?n.H`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(n.H`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(r.constants.add("vvColorNumber","int",c.x),t.hasVvInstancing&&r.uniforms.add([new o.O("vvColorValues",(e=>e.vvColorValues),c.x),new a.b("vvColorColors",(e=>e.vvColorColors),c.x)]),r.code.add(n.H`
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

      ${t.hasVvInstancing?n.H`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):r.code.add(n.H`vec4 vvColor() { return vec4(1.0); }`)}},27254:(e,t,r)=>{r.d(t,{$:()=>o,I:()=>n});var i=r(93169),a=r(98634);function o(e,t){let{code:r}=e;t.doublePrecisionRequiresObfuscation?r.add(a.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
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
}`):r.add(a.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function n(e){return!!(0,i.Z)("force-double-precision-obfuscation")||e.driverTest.doublePrecisionRequiresObfuscation}},62993:(e,t,r)=>{r.d(t,{cK:()=>s,m8:()=>c,ww:()=>l});var i=r(90045),a=r(67077),o=r(95276),n=r(98634);function s(e){e.vertex.code.add(n.H`float screenSizePerspectiveMinSize(float size, vec4 factor) {
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
}`),e.vertex.code.add(n.H`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(n.H`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),e.vertex.code.add(n.H`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),e.vertex.code.add(n.H`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(n.H`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),e.vertex.code.add(n.H`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function l(e){e.uniforms.add(new o.N("screenSizePerspective",(e=>d(e.screenSizePerspective))))}function c(e){e.uniforms.add(new o.N("screenSizePerspectiveAlignment",(e=>d(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}function d(e){return(0,i.s)(u,e.parameters.divisor,e.parameters.offset,e.parameters.minPixelSize,e.paddingPixelsOverride)}const u=(0,a.c)()},13773:(e,t,r)=>{r.d(t,{U:()=>o});var i=r(61809),a=r(99340);class o extends i.x{constructor(e,t){super(e,"bool",a.P.Pass,((r,i,a)=>r.setUniform1b(e,t(i,a))))}}},59150:(e,t,r)=>{r.d(t,{b:()=>o});var i=r(61809),a=r(99340);class o extends i.x{constructor(e,t,r){super(e,"vec4",a.P.Pass,((r,i,a)=>r.setUniform4fv(e,t(i,a))),r)}}},699:(e,t,r)=>{r.d(t,{O:()=>o});var i=r(61809),a=r(99340);class o extends i.x{constructor(e,t,r){super(e,"float",a.P.Pass,((r,i,a)=>r.setUniform1fv(e,t(i,a))),r)}}},99339:(e,t,r)=>{r.d(t,{_:()=>o});var i=r(61809),a=r(99340);class o extends i.x{constructor(e,t){super(e,"int",a.P.Pass,((r,i,a)=>r.setUniform1i(e,t(i,a))))}}},82644:(e,t,r)=>{r.d(t,{j:()=>o});var i=r(61809),a=r(99340);class o extends i.x{constructor(e,t){super(e,"mat3",a.P.Draw,((r,i,a)=>r.setUniformMatrix3fv(e,t(i,a))))}}},35522:(e,t,r)=>{r.d(t,{c:()=>o});var i=r(61809),a=r(99340);class o extends i.x{constructor(e,t){super(e,"mat3",a.P.Pass,((r,i,a)=>r.setUniformMatrix3fv(e,t(i,a))))}}},54118:(e,t,r)=>{r.d(t,{B:()=>a});var i=r(61809);class a extends i.x{constructor(e){super(e,"mat4")}}},69253:(e,t,r)=>{r.d(t,{F:()=>d});var i=r(92026),a=r(88396),o=r(6394),n=r(61809),s=r(99340);class l extends n.x{constructor(e,t){super(e,"vec2",s.P.Draw,((r,i,a)=>r.setUniform2fv(e,t(i,a))))}}class c extends n.x{constructor(e,t){super(e,"sampler2D",s.P.Draw,((r,i,a)=>r.bindTexture(e,t(i,a))))}}function d(e,t,r){const n=[new c(e,t)];if(r){const r=e+"Size";n.push(new l(r,((e,r)=>{const n=t(e,r);return(0,i.pC)(n)?(0,a.a)(u,n.descriptor.width,n.descriptor.height):o.Z})))}return n}const u=(0,o.a)()},17363:(e,t,r)=>{r.d(t,{E:()=>c,F:()=>l});var i=r(92026),a=r(66978),o=r(98634),n=r(68401),s=r(23620);class l extends s.Z{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId,(e=>this._texture=e)),this._acquire(e.normalTextureId,(e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId,(e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId,(e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId,(e=>this._textureMetallicRoughness=e))}dispose(){this._texture=(0,i.RY)(this._texture),this._textureNormal=(0,i.RY)(this._textureNormal),this._textureEmissive=(0,i.RY)(this._textureEmissive),this._textureOcclusion=(0,i.RY)(this._textureOcclusion),this._textureMetallicRoughness=(0,i.RY)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?n.Rw.LOADED:n.Rw.LOADING}get textureBindParameters(){return new c((0,i.pC)(this._texture)?this._texture.glTexture:null,(0,i.pC)(this._textureNormal)?this._textureNormal.glTexture:null,(0,i.pC)(this._textureEmissive)?this._textureEmissive.glTexture:null,(0,i.pC)(this._textureOcclusion)?this._textureOcclusion.glTexture:null,(0,i.pC)(this._textureMetallicRoughness)?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){((0,i.Wi)(this._texture)||e!==this._texture.id)&&(this._texture=(0,i.RY)(this._texture),this._textureId=e,this._acquire(this._textureId,(e=>this._texture=e)))}_acquire(e,t){if((0,i.Wi)(e))return void t(null);const r=this._textureRepository.acquire(e);if((0,a.y8)(r))return++this._numLoading,void r.then((e=>{if(this._disposed)return(0,i.RY)(e),void t(null);t(e)})).finally((()=>--this._numLoading));t(r)}}class c extends o.K{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;super(),this.texture=e,this.textureNormal=t,this.textureEmissive=r,this.textureOcclusion=i,this.textureMetallicRoughness=a}}},76873:(e,t,r)=>{r.d(t,{x:()=>G});var i=r(41644),a=r(10064),o=r(91505),n=r(16889),s=r(92026),l=r(66978),c=r(18722),d=r(35995),u=r(38330),h=r(5640),m=r(68401),v=r(65905);let g;var f;!function(e){e[e.ETC1_RGB=0]="ETC1_RGB",e[e.ETC2_RGBA=1]="ETC2_RGBA",e[e.BC1_RGB=2]="BC1_RGB",e[e.BC3_RGBA=3]="BC3_RGBA",e[e.BC4_R=4]="BC4_R",e[e.BC5_RG=5]="BC5_RG",e[e.BC7_M6_RGB=6]="BC7_M6_RGB",e[e.BC7_M5_RGBA=7]="BC7_M5_RGBA",e[e.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",e[e.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",e[e.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",e[e.ATC_RGB=11]="ATC_RGB",e[e.ATC_RGBA=12]="ATC_RGBA",e[e.FXT1_RGB=17]="FXT1_RGB",e[e.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",e[e.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",e[e.ETC2_EAC_R11=20]="ETC2_EAC_R11",e[e.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",e[e.RGBA32=13]="RGBA32",e[e.RGB565=14]="RGB565",e[e.BGR565=15]="BGR565",e[e.RGBA4444=16]="RGBA4444"}(f||(f={}));var p=r(8548),x=r(51378),_=r(3384);let T=null,S=null;async function w(){return(0,s.Wi)(S)&&(S=function(){if((0,s.Wi)(g)){const e=e=>(0,v.V)(`esri/libs/basisu/${e}`);g=r.e(1562).then(r.bind(r,61562)).then((e=>e.b)).then((t=>{let{default:r}=t;return r({locateFile:e}).then((e=>(e.initializeBasis(),delete e.then,e)))}))}return g}(),T=await S),S}function A(e,t,r,i,a){const o=(0,_.RG)(t?p.q_.COMPRESSED_RGBA8_ETC2_EAC:p.q_.COMPRESSED_RGB8_ETC2),n=a&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*i*o*n)}function b(e){return e.getNumImages()>=1&&!e.isUASTC()}function C(e){return e.getFaces()>=1&&e.isETC1S()}function R(e,t,r,i,a,o,n,s){const{compressedTextureETC:l,compressedTextureS3TC:c}=e.capabilities,[d,u]=l?i?[f.ETC2_RGBA,p.q_.COMPRESSED_RGBA8_ETC2_EAC]:[f.ETC1_RGB,p.q_.COMPRESSED_RGB8_ETC2]:c?i?[f.BC3_RGBA,p.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[f.BC1_RGB,p.q_.COMPRESSED_RGB_S3TC_DXT1_EXT]:[f.RGBA32,p.VI.RGBA],h=t.hasMipmap?r:Math.min(1,r),m=[];for(let f=0;f<h;f++)m.push(new Uint8Array(n(f,d))),s(f,d,m[f]);const v=m.length>1,g=v?p.cw.LINEAR_MIPMAP_LINEAR:p.cw.LINEAR,_={...t,samplingMode:g,hasMipmap:v,internalFormat:u,width:a,height:o};return new x.x(e,_,{type:"compressed",levels:m})}var M=r(1395),H=r(79100);const P=r(32718).Z.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function E(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const y=E("DXT1"),N=E("DXT3"),F=E("DXT5");function z(e,t){const r=new Int32Array(e,0,31);if(542327876!==r[0])return P.error("Invalid magic number in DDS header"),null;if(!(4&r[20]))return P.error("Unsupported format, must contain a FourCC code"),null;const i=r[21];let a,o;switch(i){case y:a=8,o=p.q_.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case N:a=16,o=p.q_.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case F:a=16,o=p.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return P.error("Unsupported FourCC code:",function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}(i)),null}let s=1,l=r[4],c=r[3];0==(3&l)&&0==(3&c)||(P.warn("Rounding up compressed texture size to nearest multiple of 4."),l=l+3&-4,c=c+3&-4);const d=l,u=c;let h,m;131072&r[2]&&!1!==t&&(s=Math.max(1,r[7])),1===s||(0,n.wt)(l)&&(0,n.wt)(c)||(P.warn("Ignoring mipmaps of non power of two sized compressed texture."),s=1);let v=r[1]+4;const g=[];for(let n=0;n<s;++n)m=(l+3>>2)*(c+3>>2)*a,h=new Uint8Array(e,v,m),g.push(h),v+=m,l=Math.max(1,l>>1),c=Math.max(1,c>>1);return{textureData:{type:"compressed",levels:g},internalFormat:o,width:d,height:u}}var D,O,I=r(32534),V=r(97731),L=r(53634),B=r(30308);class G extends M.c{constructor(e,t){super(),this.data=e,this.type=H.U.Texture,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new o.Z,this.params=t||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:p.e8.REPEAT,t:p.e8.REPEAT},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||m.CE.STRETCH,this.estimatedTexMemRequired=G._estimateTexMemRequired(this.data,this.params),this._startPreload()}_startPreload(){const e=this.data;(0,s.Wi)(e)||(e instanceof HTMLVideoElement?this._startPreloadVideoElement(e):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!((0,d.jc)(e.src)||"auto"===e.preload&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const t=!e.paused;if(e.src=e.src,t&&e.autoplay){const t=()=>{e.removeEventListener("canplay",t),e.play()};e.addEventListener("canplay",t)}}}_startPreloadImageElement(e){(0,d.HK)(e.src)||(0,d.jc)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static _getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static _estimateTexMemRequired(e,t){if((0,s.Wi)(e))return 0;if((0,c.eP)(e)||(0,c.lq)(e))return t.encoding===G.KTX2_ENCODING?function(e,t){if((0,s.Wi)(T))return e.byteLength;const r=new T.KTX2File(new Uint8Array(e)),i=C(r)?A(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),i}(e,t.mipmap):t.encoding===G.BASIS_ENCODING?function(e,t){if((0,s.Wi)(T))return e.byteLength;const r=new T.BasisFile(new Uint8Array(e)),i=b(r)?A(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),i}(e,t.mipmap):e.byteLength;const{width:r,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?G._getDataDimensions(e):t;return(t.mipmap?4/3:1)*r*i*(t.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}_createDescriptor(e){return{target:p.No.TEXTURE_2D,pixelFormat:p.VI.RGBA,dataType:p.Br.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?p.cw.LINEAR_MIPMAP_LINEAR:p.cw.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:this.params.maxAnisotropy??(this.params.mipmap?e.parameters.maxMaxAnisotropy:1)}}get glTexture(){return this._glTexture}load(e,t){if((0,s.pC)(this._glTexture))return this._glTexture;if((0,s.pC)(this._loadingPromise))return this._loadingPromise;const r=this.data;return(0,s.Wi)(r)?(this._glTexture=new x.x(e,this._createDescriptor(e),null),this._glTexture):"string"==typeof r?this._loadFromURL(e,t,r):r instanceof Image?this._loadFromImageElement(e,t,r):r instanceof HTMLVideoElement?this._loadFromVideoElement(e,t,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this._loadFromImage(e,r,t):((0,c.eP)(r)||(0,c.lq)(r))&&this.params.encoding===G.DDS_ENCODING?(this.data=void 0,this._loadFromDDSData(e,r)):((0,c.eP)(r)||(0,c.lq)(r))&&this.params.encoding===G.KTX2_ENCODING?(this.data=void 0,this._loadFromKTX2(e,r)):((0,c.eP)(r)||(0,c.lq)(r))&&this.params.encoding===G.BASIS_ENCODING?(this.data=void 0,this._loadFromBasis(e,r)):(0,c.lq)(r)?this._loadFromPixelData(e,r):(0,c.eP)(r)?this._loadFromPixelData(e,new Uint8Array(r)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,t,r){if(!(this.data instanceof HTMLVideoElement)||(0,s.Wi)(this._glTexture))return r;if(this.data.readyState<D.HAVE_CURRENT_DATA||r===this.data.currentTime)return r;if((0,s.pC)(this._powerOfTwoStretchInfo)){const{framebuffer:r,vao:i,sourceTexture:a}=this._powerOfTwoStretchInfo;a.setData(this.data),this._drawStretchedTexture(e,t,r,i,a,this._glTexture)}else{const{videoWidth:e,videoHeight:t}=this.data,{width:r,height:i}=this._glTexture.descriptor;e!==r||t!==i?this._glTexture.updateData(0,0,0,Math.min(e,r),Math.min(t,i),this.data):this._glTexture.setData(this.data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.params.updateCallback&&this.params.updateCallback(),this.data.currentTime}_loadFromDDSData(e,t){return this._glTexture=function(e,t,r){const{textureData:i,internalFormat:a,width:o,height:n}=z(r,t.hasMipmap);return t.samplingMode=i.levels.length>1?p.cw.LINEAR_MIPMAP_LINEAR:p.cw.LINEAR,t.hasMipmap=i.levels.length>1,t.internalFormat=a,t.width=o,t.height=n,new x.x(e,t,i)}(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>async function(e,t,r){(0,s.Wi)(T)&&(T=await w());const i=new T.KTX2File(new Uint8Array(r));if(!C(i))return null;i.startTranscoding();const a=R(e,t,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),((e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,r)=>i.transcodeImage(r,e,0,0,t,0,-1,-1)));return i.close(),i.delete(),a}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>async function(e,t,r){(0,s.Wi)(T)&&(T=await w());const i=new T.BasisFile(new Uint8Array(r));if(!b(i))return null;i.startTranscoding();const a=R(e,t,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),((e,t)=>i.getImageTranscodedSizeInBytes(0,e,t)),((e,t,r)=>i.transcodeImage(r,0,e,t,0,0)));return i.close(),i.delete(),a}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){(0,V.hu)(this.params.width>0&&this.params.height>0);const r=this._createDescriptor(e);return r.pixelFormat=1===this.params.components?p.VI.LUMINANCE:3===this.params.components?p.VI.RGB:p.VI.RGBA,r.width=this.params.width,r.height=this.params.height,this._glTexture=new x.x(e,r,t),this._glTexture}_loadFromURL(e,t,r){return this._loadAsync((async i=>{const a=await(0,u.t)(r,{signal:i});return(0,l.k_)(i),this._loadFromImage(e,a,t)}))}_loadFromImageElement(e,t,r){return r.complete?this._loadFromImage(e,r,t):this._loadAsync((async i=>{const a=await(0,h.fY)(r,r.src,!1,i);return(0,l.k_)(i),this._loadFromImage(e,a,t)}))}_loadFromVideoElement(e,t,r){return r.readyState>=D.HAVE_CURRENT_DATA?this._loadFromImage(e,r,t):this._loadFromVideoElementAsync(e,t,r)}_loadFromVideoElementAsync(e,t,r){return this._loadAsync((i=>new Promise(((o,n)=>{const c=()=>{r.removeEventListener("loadeddata",d),r.removeEventListener("error",u),(0,s.hw)(h)},d=()=>{r.readyState>=D.HAVE_CURRENT_DATA&&(c(),o(this._loadFromImage(e,r,t)))},u=e=>{c(),n(e||new a.Z("Failed to load video"))};r.addEventListener("loadeddata",d),r.addEventListener("error",u);const h=(0,l.fu)(i,(()=>u((0,l.zE)())))}))))}_loadFromImage(e,t,r){const i=G._getDataDimensions(t);this.params.width=i.width,this.params.height=i.height;const a=this._createDescriptor(e);return a.pixelFormat=3===this.params.components?p.VI.RGB:p.VI.RGBA,!this._requiresPowerOfTwo(e,a)||(0,n.wt)(i.width)&&(0,n.wt)(i.height)?(a.width=i.width,a.height=i.height,this._glTexture=new x.x(e,a,t),this._glTexture):(this._glTexture=this._makePowerOfTwoTexture(e,t,i,a,r),this._glTexture)}_loadAsync(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const i=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(i,i),r}_requiresPowerOfTwo(e,t){const r=p.e8.CLAMP_TO_EDGE,i="number"==typeof t.wrapMode?t.wrapMode===r:t.wrapMode.s===r&&t.wrapMode.t===r;return!(0,B.Z)(e.gl)&&(t.hasMipmap||!i)}_makePowerOfTwoTexture(e,t,r,a,o){const{width:s,height:l}=r,c=(0,n.Sf)(s),d=(0,n.Sf)(l);let u;switch(a.width=c,a.height=d,this.params.powerOfTwoResizeMode){case m.CE.PAD:a.textureCoordinateScaleFactor=[s/c,l/d],u=new x.x(e,a),u.updateData(0,0,0,s,l,t);break;case m.CE.STRETCH:case null:case void 0:u=this._stretchToPowerOfTwo(e,t,a,o());break;default:(0,i.Bg)(this.params.powerOfTwoResizeMode)}return a.hasMipmap&&u.generateMipmap(),u}_stretchToPowerOfTwo(e,t,r,i){const a=new x.x(e,r),o=new L.X(e,{colorTarget:p.Lm.TEXTURE,depthStencilTarget:p.OU.NONE},a),n=new x.x(e,{target:p.No.TEXTURE_2D,pixelFormat:r.pixelFormat,dataType:p.Br.UNSIGNED_BYTE,wrapMode:p.e8.CLAMP_TO_EDGE,samplingMode:p.cw.LINEAR,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},t),s=(0,I.ow)(e),l=e.getBoundFramebufferObject();return this._drawStretchedTexture(e,i,o,s,n,a),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:s,sourceTexture:n,framebuffer:o}:(s.dispose(!0),n.dispose(),o.detachColorTexture(),o.dispose()),e.bindFramebuffer(l),a}_drawStretchedTexture(e,t,r,i,a,o){e.bindFramebuffer(r);const n=e.getViewport();e.setViewport(0,0,o.descriptor.width,o.descriptor.height);const s=e.bindTechnique(t);s.setUniform4f("uColor",1,1,1,1),s.bindTexture("tex",a),e.bindVAO(i),e.drawArrays(p.MX.TRIANGLE_STRIP,0,(0,_._V)(i,"geometry")),e.bindFramebuffer(null),e.setViewport(n.x,n.y,n.width,n.height)}unload(){if((0,s.pC)(this._powerOfTwoStretchInfo)){const{framebuffer:e,vao:t,sourceTexture:r}=this._powerOfTwoStretchInfo;t.dispose(!0),r.dispose(),e.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if((0,s.pC)(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),(0,s.pC)(this._loadingController)){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}G.DDS_ENCODING="image/vnd-ms.dds",G.KTX2_ENCODING="image/ktx2",G.BASIS_ENCODING="image/x.basis",(O=D||(D={}))[O.HAVE_NOTHING=0]="HAVE_NOTHING",O[O.HAVE_METADATA=1]="HAVE_METADATA",O[O.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",O[O.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",O[O.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"},11954:(e,t,r)=>{r.d(t,{AM:()=>o,Eg:()=>n,Mi:()=>a,Ur:()=>s});var i=r(71353);class a{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,i.c)();this.intensity=e}}class o{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,i.c)(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,i.f)(.57735,.57735,.57735);this.intensity=e,this.direction=t}}class n{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,i.c)(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,i.f)(.57735,.57735,.57735),r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;this.intensity=e,this.direction=t,this.castShadows=r,this.specularStrength=a,this.environmentStrength=o}}class s{constructor(){this.r=[0],this.g=[0],this.b=[0]}}},48919:(e,t,r)=>{r.d(t,{c:()=>A,V:()=>w});var i=r(11186),a=r(71353),o=r(11954),n=r(16889);function s(e,t,r){(r=r||e).length=e.length;for(let i=0;i<e.length;i++)r[i]=e[i]*t[i];return r}function l(e,t,r){(r=r||e).length=e.length;for(let i=0;i<e.length;i++)r[i]=e[i]*t;return r}function c(e,t,r){(r=r||e).length=e.length;for(let i=0;i<e.length;i++)r[i]=e[i]+t[i];return r}function d(e){return(e+1)*(e+1)}function u(e,t,r){const i=e[0],a=e[1],o=e[2],n=r||[];return n.length=d(t),t>=0&&(n[0]=.28209479177),t>=1&&(n[1]=.4886025119*i,n[2]=.4886025119*o,n[3]=.4886025119*a),t>=2&&(n[4]=1.09254843059*i*a,n[5]=1.09254843059*a*o,n[6]=.31539156525*(3*o*o-1),n[7]=1.09254843059*i*o,n[8]=.54627421529*(i*i-a*a)),n}function h(e,t){const r=d(e),i=t||{r:[],g:[],b:[]};i.r.length=i.g.length=i.b.length=r;for(let a=0;a<r;a++)i.r[a]=i.g[a]=i.b[a]=0;return i}function m(e,t){const r=function(e){return(0,n.uZ)(Math.floor(Math.sqrt(e)-1),0,2)}(t.r.length);for(const a of e)(0,i.o)(T,a.direction),u(T,r,x),s(x,S),l(x,a.intensity[0],_),c(t.r,_),l(x,a.intensity[1],_),c(t.g,_),l(x,a.intensity[2],_),c(t.b,_);return t}function v(e,t){u(T,0,x);for(const r of e)t.r[0]+=x[0]*S[0]*r.intensity[0]*4*Math.PI,t.g[0]+=x[0]*S[0]*r.intensity[1]*4*Math.PI,t.b[0]+=x[0]*S[0]*r.intensity[2]*4*Math.PI;return t}const g=[],f=[],p=[],x=[0],_=[0],T=(0,a.c)(),S=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398],w=.4;class A{constructor(){this._shOrder=2,this._oldSunlight={direction:(0,a.c)(),ambient:{color:(0,a.c)(),intensity:1},diffuse:{color:(0,a.c)(),intensity:1}},this.globalFactor=.5,this.groundLightingFactor=.5,this._sphericalHarmonics=new o.Ur,this._mainLight={intensity:(0,a.c)(),direction:(0,a.f)(1,0,0),castShadows:!1,specularStrength:1,environmentStrength:1}}get sh(){return this._sphericalHarmonics}get mainLight(){return this._mainLight}get lightingMainDirection(){return this._mainLight.direction}set(e){(function(e,t,r,a){h(t,a),(0,i.s)(r.intensity,0,0,0);let n=!1;const s=g,l=f,d=p;s.length=0,l.length=0,d.length=0;for(const c of e)c instanceof o.Eg&&!n?((0,i.c)(r.direction,c.direction),(0,i.c)(r.intensity,c.intensity),r.specularStrength=c.specularStrength,r.environmentStrength=c.environmentStrength,r.castShadows=c.castShadows,n=!0):c instanceof o.Eg||c instanceof o.AM?s.push(c):c instanceof o.Mi?l.push(c):c instanceof o.Ur&&d.push(c);m(s,a),v(l,a);for(const i of d)c(a.r,i.r),c(a.g,i.g),c(a.b,i.b)})(e,this._shOrder,this._mainLight,this._sphericalHarmonics),(0,i.c)(this._oldSunlight.direction,this._mainLight.direction);const t=1/Math.PI;this._oldSunlight.ambient.color[0]=.282095*this._sphericalHarmonics.r[0]*t,this._oldSunlight.ambient.color[1]=.282095*this._sphericalHarmonics.g[0]*t,this._oldSunlight.ambient.color[2]=.282095*this._sphericalHarmonics.b[0]*t,(0,i.g)(this._oldSunlight.diffuse.color,this._mainLight.intensity,t),(0,i.c)(b,this._oldSunlight.diffuse.color),(0,i.g)(b,b,w*this.globalFactor),(0,i.a)(this._oldSunlight.ambient.color,this._oldSunlight.ambient.color,b)}get old(){return this._oldSunlight}}const b=(0,a.c)()},65964:(e,t,r)=>{r.d(t,{n:()=>n,x:()=>s});var i=r(11873),a=r(71353),o=r(56529);class n extends o.Mt{constructor(){super(...arguments),this.vvSizeEnabled=!1,this.vvSizeMinSize=(0,a.f)(1,1,1),this.vvSizeMaxSize=(0,a.f)(100,100,100),this.vvSizeOffset=(0,a.f)(0,0,0),this.vvSizeFactor=(0,a.f)(1,1,1),this.vvSizeValue=(0,a.f)(1,1,1),this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvOpacityEnabled=!1,this.vvOpacityValues=[0,0,0,0,0,0,0,0],this.vvOpacityOpacities=[1,1,1,1,1,1,1,1],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=(0,i.c)()}}const s=8}}]);
//# sourceMappingURL=1883.fbe2bd8f.chunk.js.map