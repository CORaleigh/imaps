(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[14],{581:function(e,t,r){"use strict";function i(e,t,r){const i=t&&t.length,a=i?t[0]*r:e.length;let s=n(e,0,a,r,!0);const l=new Array;if(!s||s.next===s.prev)return l;let d,c,h,f,p;if(i&&(s=u(e,t,s,r)),e.length>80*r){d=h=e[0],c=f=e[1];for(let t=r;t<a;t+=r){const r=e[t],i=e[t+1];d=Math.min(d,r),c=Math.min(c,i),h=Math.max(h,r),f=Math.max(f,i)}p=Math.max(h-d,f-c),p=0!==p?1/p:0}return o(s,l,r,d,c,p),l}function n(e,t,r,i,n){let a;if(n===b(e,t,r,i)>0)for(let o=t;o<r;o+=i)a=d(o,e[o],e[o+1],a);else for(let o=r-i;o>=t;o-=i)a=d(o,e[o],e[o+1],a);return a&&x(a,a.next)&&(c(a),a=a.next),a}function a(e,t=e){if(!e)return e;let r,i=e;do{if(r=!1,i.steiner||!x(i,i.next)&&0!==m(i.prev,i,i.next))i=i.next;else{if(c(i),i=t=i.prev,i===i.next)break;r=!0}}while(r||i!==t);return t}function o(e,t,r,i,n,d,h=0){if(!e)return;!h&&d&&(e=p(e,i,n,d));let u=e;for(;e.prev!==e.next;){const f=e.prev,p=e.next;if(d?l(e,i,n,d):s(e))t.push(f.index/r),t.push(e.index/r),t.push(p.index/r),c(e),e=p.next,u=p.next;else if((e=p)===u){h?1===h?o(e=R(e,t,r),t,r,i,n,d,2):2===h&&j(e,t,r,i,n,d):o(a(e),t,r,i,n,d,1);break}}}function s(e){const t=e.prev,r=e,i=e.next;if(m(t,r,i)>=0)return!1;let n=e.next.next;const a=n;let o=0;for(;n!==e.prev&&(0===o||n!==a);){if(o++,_(t.x,t.y,r.x,r.y,i.x,i.y,n.x,n.y)&&m(n.prev,n,n.next)>=0)return!1;n=n.next}return!0}function l(e,t,r,i){const n=e.prev,a=e,o=e.next;if(m(n,a,o)>=0)return!1;const s=n.x<a.x?n.x<o.x?n.x:o.x:a.x<o.x?a.x:o.x,l=n.y<a.y?n.y<o.y?n.y:o.y:a.y<o.y?a.y:o.y,d=n.x>a.x?n.x>o.x?n.x:o.x:a.x>o.x?a.x:o.x,c=n.y>a.y?n.y>o.y?n.y:o.y:a.y>o.y?a.y:o.y,h=w(s,l,t,r,i),u=w(d,c,t,r,i);let f=e.prevZ,p=e.nextZ;for(;f&&f.z>=h&&p&&p.z<=u;){if(f!==e.prev&&f!==e.next&&_(n.x,n.y,a.x,a.y,o.x,o.y,f.x,f.y)&&m(f.prev,f,f.next)>=0)return!1;if(f=f.prevZ,p!==e.prev&&p!==e.next&&_(n.x,n.y,a.x,a.y,o.x,o.y,p.x,p.y)&&m(p.prev,p,p.next)>=0)return!1;p=p.nextZ}for(;f&&f.z>=h;){if(f!==e.prev&&f!==e.next&&_(n.x,n.y,a.x,a.y,o.x,o.y,f.x,f.y)&&m(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;p&&p.z<=u;){if(p!==e.prev&&p!==e.next&&_(n.x,n.y,a.x,a.y,o.x,o.y,p.x,p.y)&&m(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function d(e,t,r,i){const n=new T(e,t,r);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function c(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function h(e){let t=e,r=e;do{(t.x<r.x||t.x===r.x&&t.y<r.y)&&(r=t),t=t.next}while(t!==e);return r}function u(e,t,r,i){const o=new Array;for(let a=0,s=t.length;a<s;a++){const r=n(e,t[a]*i,a<s-1?t[a+1]*i:e.length,i,!1);r===r.next&&(r.steiner=!0),o.push(h(r))}o.sort(O);for(const n of o)f(n,r),r=a(r,r.next);return r}function f(e,t){if(t=function(e,t){let r=t;const i=e.x,n=e.y;let a,o=-1/0;do{if(n<=r.y&&n>=r.next.y&&r.next.y!==r.y){const e=r.x+(n-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(e<=i&&e>o){if(o=e,e===i){if(n===r.y)return r;if(n===r.next.y)return r.next}a=r.x<r.next.x?r:r.next}}r=r.next}while(r!==t);if(!a)return null;if(i===o)return a.prev;const s=a,l=a.x,d=a.y;let c,h=1/0;for(r=a.next;r!==s;)i>=r.x&&r.x>=l&&i!==r.x&&_(n<d?i:o,n,l,d,n<d?o:i,n,r.x,r.y)&&(c=Math.abs(n-r.y)/(i-r.x),(c<h||c===h&&r.x>a.x)&&y(r,e)&&(a=r,h=c)),r=r.next;return a}(e,t)){const r=S(t,e);a(r,r.next)}}function p(e,t,r,i){for(let n;n!==e;n=n.next){if(n=n||e,null===n.z&&(n.z=w(n.x,n.y,t,r,i)),n.prev.next!==n||n.next.prev!==n)return n.prev.next=n,n.next.prev=n,p(e,t,r,i);n.prevZ=n.prev,n.nextZ=n.next}return e.prevZ.nextZ=null,e.prevZ=null,function(e){let t,r=1;for(;;){let i,n=e;e=null,t=null;let a=0;for(;n;){a++,i=n;let o=0;for(;o<r&&i;o++)i=i.nextZ;let s=r;for(;o>0||s>0&&i;){let r;0===o?(r=i,i=i.nextZ,s--):0!==s&&i?n.z<=i.z?(r=n,n=n.nextZ,o--):(r=i,i=i.nextZ,s--):(r=n,n=n.nextZ,o--),t?t.nextZ=r:e=r,r.prevZ=t,t=r}n=i}if(t.nextZ=null,r*=2,a<2)return e}}(e)}function g(e,t,r,i){const n=t&&t.length,a=n?t[0]*r:e.length;let o=Math.abs(b(e,0,a,r));if(n)for(let l=0,d=t.length;l<d;l++){const i=t[l]*r,n=l<d-1?t[l+1]*r:e.length;o-=Math.abs(b(e,i,n,r))}let s=0;for(let l=0;l<i.length;l+=3){const t=i[l]*r,n=i[l+1]*r,a=i[l+2]*r;s+=Math.abs((e[t]-e[a])*(e[n+1]-e[t+1])-(e[t]-e[n])*(e[a+1]-e[t+1]))}return 0===o&&0===s?0:Math.abs((s-o)/o)}function m(e,t,r){return(t.y-e.y)*(r.x-t.x)-(t.x-e.x)*(r.y-t.y)}function v(e,t,r,i){return!!(x(e,t)&&x(r,i)||x(e,i)&&x(r,t))||m(e,t,r)>0!=m(e,t,i)>0&&m(r,i,e)>0!=m(r,i,t)>0}function b(e,t,r,i){let n=0;for(let a=t,o=r-i;a<r;a+=i)n+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return n}function _(e,t,r,i,n,a,o,s){return(n-o)*(t-s)-(e-o)*(a-s)>=0&&(e-o)*(i-s)-(r-o)*(t-s)>=0&&(r-o)*(a-s)-(n-o)*(i-s)>=0}function y(e,t){return m(e.prev,e,e.next)<0?m(e,t,e.next)>=0&&m(e,e.prev,t)>=0:m(e,t,e.prev)<0||m(e,e.next,t)<0}function w(e,t,r,i,n){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-r)*n)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-i)*n)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function x(e,t){return e.x===t.x&&e.y===t.y}function O(e,t){return e.x-t.x}function R(e,t,r){let i=e;do{const n=i.prev,a=i.next.next;!x(n,a)&&v(n,i,i.next,a)&&y(n,a)&&y(a,n)&&(t.push(n.index/r),t.push(i.index/r),t.push(a.index/r),c(i),c(i.next),i=e=a),i=i.next}while(i!==e);return i}function j(e,t,r,i,n,s){let l=e;do{let e=l.next.next;for(;e!==l.prev;){if(l.index!==e.index&&C(l,e)){let d=S(l,e);return l=a(l,l.next),d=a(d,d.next),o(l,t,r,i,n,s),void o(d,t,r,i,n,s)}e=e.next}l=l.next}while(l!==e)}function C(e,t){return e.next.index!==t.index&&e.prev.index!==t.index&&!function(e,t){let r=e;do{if(r.index!==e.index&&r.next.index!==e.index&&r.index!==t.index&&r.next.index!==t.index&&v(r,r.next,e,t))return!0;r=r.next}while(r!==e);return!1}(e,t)&&y(e,t)&&y(t,e)&&function(e,t){let r=e,i=!1;const n=(e.x+t.x)/2,a=(e.y+t.y)/2;do{r.y>a!=r.next.y>a&&r.next.y!==r.y&&n<(r.next.x-r.x)*(a-r.y)/(r.next.y-r.y)+r.x&&(i=!i),r=r.next}while(r!==e);return i}(e,t)}function S(e,t){const r=new T(e.index,e.x,e.y),i=new T(t.index,t.x,t.y),n=e.next,a=t.prev;return e.next=t,t.prev=e,r.next=n,n.prev=r,i.next=r,r.prev=i,a.next=i,i.prev=a,i}r.d(t,"a",(function(){return g})),r.d(t,"b",(function(){return i}));class T{constructor(e,t,r){this.index=e,this.x=t,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}}},663:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i,n=r(164),a=r(463);function o(e){e.fragment.include(a.a),e.fragment.uniforms.add("uShadowMapTex","sampler2D"),e.fragment.uniforms.add("uShadowMapNum","int"),e.fragment.uniforms.add("uShadowMapDistance","vec4"),e.fragment.uniforms.add("uShadowMapMatrix","mat4",4),e.fragment.uniforms.add("uDepthHalfPixelSz","float"),e.fragment.code.add(n.a`
    int chooseCascade(float _linearDepth, out mat4 mat) {
      vec4 distance = uShadowMapDistance;
      float depth = _linearDepth;

      //choose correct cascade
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

      // filter, offset by half pixels
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

      // vertex completely outside? -> no shadow
      if (lvpos.z >= 1.0) { return 0.0; }
      if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }

      // calc coord in cascade texture
      vec2 uv = cascadeCoordinates(i, lvpos);

      return filterShadow(uv, lvpos, uDepthHalfPixelSz, uShadowMapTex);
    }
  `)}(i=o||(o={})).bindUniforms=function(e,t,r){t.shadowMappingEnabled&&(t.shadowMap.bind(e,r),t.shadowMap.bindView(e,t.origin))},i.bindViewCustomOrigin=function(e,t,r){t.shadowMappingEnabled&&t.shadowMap.bindView(e,r)},i.bindView=function(e,t){t.shadowMappingEnabled&&t.shadowMap.bindView(e,t.origin)}},744:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(164);function n(e,t){0===t.output&&t.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(i.a`
      void forwardLinearDepth() { linearDepth = gl_Position.w; }
    `)):1===t.output||3===t.output?(e.varyings.add("linearDepth","float"),e.vertex.uniforms.add("cameraNearFar","vec2"),e.vertex.code.add(i.a`
      void forwardLinearDepth() {
        linearDepth = (-position_view().z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);
      }
    `)):e.vertex.code.add(i.a`
      void forwardLinearDepth() {}
    `)}},754:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(164),n=r(592);function a(e){const t=e.fragment.code;t.add(i.a`
    vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
    {
      return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
    }
    `),t.add(i.a`
    float integratedRadiance(float cosTheta2, float roughness)
    {
      return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
    }
    `),t.add(i.a`
    vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
    {
      float cosTheta2 = 1.0 - RdotNG * RdotNG;
      float intRadTheta = integratedRadiance(cosTheta2, roughness);

      // Calculate the integrated directional radiance of the ground and the sky
      float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
      float sky = 2.0 - ground;
      return (ground * ambientGround + sky * ambientSky) * 0.5;
    }
    `)}function o(e,t){const r=e.fragment.code;e.include(n.a),3===t.pbrMode||4===t.pbrMode?(r.add(i.a`
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
    `),r.add(i.a`
    vec3 fresnelReflection(float angle, vec3 f0, float f90) {
      return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
    }
    `),r.add(i.a`
    float normalDistributionWater(float NdotH, float roughness)
    {
      float r2 = roughness * roughness;
      float NdotH2 = NdotH * NdotH;
      float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
      return r2 / denom;
    }
    `),r.add(i.a`
    float geometricOcclusionKelemen(float LoH)
    {
        return 0.25 / (LoH * LoH);
    }
    `),r.add(i.a`
    vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
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
    }
    `)):1!==t.pbrMode&&2!==t.pbrMode||(e.include(a),r.add(i.a`
    struct PBRShadingInfo
    {
        float NdotL;                  // cos angle between normal and light direction
        float NdotV;                  // cos angle between normal and view direction
        float NdotH;                  // cos angle between normal and half vector
        float VdotH;                  // cos angle between view direction and half vector
        float LdotH;                  // cos angle between view light direction and half vector
        float NdotNG;                 // cos angle between normal and normal of the ground
        float RdotNG;                 // cos angle between view direction reflected of the normal and normal of the ground
        float NdotAmbDir;             // cos angle between view direction and the fill light in ambient illumination
        float NdotH_Horizon;          // cos angle between normal and half vector defined with horizon illumination
        vec3 skyRadianceToSurface;         // integrated radiance of the sky based on the surface roughness (used for specular reflection)
        vec3 groundRadianceToSurface;      // integrated radiance of the ground based on the surface roughness (used for specular reflection)
        vec3 skyIrradianceToSurface;       // irradiance of the sky (used for diffuse reflection)
        vec3 groundIrradianceToSurface;    // irradiance of the ground (used for diffuse reflection)

        float averageAmbientRadiance;      // average ambient radiance used to deduce black level in gamut mapping
        float ssao;                   // ssao coefficient
        vec3 albedoLinear;            // linear color of the albedo
        vec3 f0;                      // fresnel value at normal incident light
        vec3 f90;                     // fresnel value at 90o of incident light

        vec3 diffuseColor;            // diffuse color of the material used in environment illumination
        float metalness;              // metalness of the material
        float roughness;              // roughness of the material
    };
    `),r.add(i.a`
    float normalDistribution(float NdotH, float roughness)
    {
        float a = NdotH * roughness;
        float b = roughness / (1.0 - NdotH * NdotH + a * a);
        return b * b * INV_PI;
    }
    `),r.add(i.a`
    const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
    const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
    const vec2 c2 = vec2(-1.04, 1.04);

    vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
        vec4 r = roughness * c0 + c1;
        float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
        return c2 * a004 + r.zw;
    }
    `),r.add(i.a`
    vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
      vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
      vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);

      // From diffuse illumination calculate reflected color
      vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;

      // From specular illumination calculate reflected color
      vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
      vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
      vec3 specularComponent = specularColor * indirectSpecular;

      return (diffuseComponent + specularComponent);
    }
    `),r.add(i.a`
    float gamutMapChanel(float x, vec2 p){
      return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
    }`),r.add(i.a`
    vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
      vec3 outColor;
      vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
      outColor.x = gamutMapChanel(inColor.x, p) ;
      outColor.y = gamutMapChanel(inColor.y, p) ;
      outColor.z = gamutMapChanel(inColor.z, p) ;
      return outColor;
    }
    `))}},829:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return s}));r(128);var i=r(137),n=(r(255),r(309),r(253));r(234);class a{constructor(){this.cache=new Map}dispose(){this.cache.forEach((e=>{Object(i.k)(e.texture)&&(e.texture.dispose(),e.texture=null)})),this.cache.clear()}acquire(e){if(Object(i.j)(e))return null;const t=this.patternId(e),r=this.cache.get(t);if(r)return r.refCount++,r.bind;const a=this.patternToTextureData(e,2),o=a.length/2,s={refCount:1,texture:null,bind:(e,t)=>(Object(i.j)(s.texture)&&(s.texture=new n.a(e,{width:a.length,height:1,internalFormat:6406,pixelFormat:6406,dataType:5121,wrapMode:33071},a)),e.bindTexture(s.texture,t),o)};return this.cache.set(t,s),s.bind}release(e){if(Object(i.j)(e))return;const t=this.patternId(e),r=this.cache.get(t);r&&(r.refCount--,0===r.refCount&&(Object(i.k)(r.texture)&&r.texture.dispose(),this.cache.delete(t)))}swap(e,t){const r=this.acquire(t);return this.release(e),r}patternId(e){return e.join(",")}patternToTextureData(e,t){const r=e.reduce(((e,t)=>e+t))*t,i=new Uint8Array(r);let n=!0,a=0;for(const o of e){for(let e=0;e<o*t;e++)i[a++]=n?255:0;n=!n}return i}}function o(e){return Object(i.j)(e)?e:e.slice()}function s(e){return[e,e]}},830:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(164),n=r(881);function a(e){e.fragment.uniforms.add("texWaveNormal","sampler2D"),e.fragment.uniforms.add("texWavePerturbation","sampler2D"),e.fragment.uniforms.add("waveParams","vec4"),e.fragment.uniforms.add("waveDirection","vec2"),e.include(n.b),e.fragment.code.add(i.a`
      const vec2  FLOW_JUMP = vec2(6.0/25.0, 5.0/24.0);

      vec2 textureDenormalized2D(sampler2D _tex, vec2 _uv) {
        return 2.0 * texture2D(_tex, _uv).rg - 1.0;
      }

      float sampleNoiseTexture(vec2 _uv) {
        return texture2D(texWavePerturbation, _uv).b;
      }

      vec3 textureDenormalized3D(sampler2D _tex, vec2 _uv) {
        return 2.0 * texture2D(_tex, _uv).rgb - 1.0;
      }

      float computeProgress(vec2 uv, float time) {
        return fract(time);
      }

      float computeWeight(vec2 uv, float time) {
        float progress = computeProgress(uv, time);
        return 1.0 - abs(1.0 - 2.0 * progress);
      }

      vec3 computeUVPerturbedWeigth(sampler2D texFlow, vec2 uv, float time, float phaseOffset) {
        float flowStrength = waveParams[2];
        float flowOffset = waveParams[3];

        vec2 flowVector = textureDenormalized2D(texFlow, uv) * flowStrength;

        float progress = computeProgress(uv, time + phaseOffset);
        float weight = computeWeight(uv, time + phaseOffset);

        vec2 result = uv;
        result -= flowVector * (progress + flowOffset);
        result += phaseOffset;
        result += (time - progress) * FLOW_JUMP;

        return vec3(result, weight);
      }

      const float TIME_NOISE_TEXTURE_REPEAT = 0.3737;
      const float TIME_NOISE_STRENGTH = 7.77;

      vec3 getWaveLayer(sampler2D _texNormal, sampler2D _dudv, vec2 _uv, vec2 _waveDir, float time) {
        float waveStrength = waveParams[0];

        // overall directional shift in uv's for directional wave movement for
        // now we do a hard coded scale for wave speed such that a unit length
        // direction is not too fast.
        vec2 waveMovement = time * -_waveDir;

        float timeNoise = sampleNoiseTexture(_uv * TIME_NOISE_TEXTURE_REPEAT) * TIME_NOISE_STRENGTH;

        // compute two perturbed uvs and blend weights
        // then sample the wave normals at the two positions and blend
        vec3 uv_A = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.0);
        vec3 uv_B = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.5);

        vec3 normal_A = textureDenormalized3D(_texNormal, uv_A.xy) * uv_A.z;
        vec3 normal_B = textureDenormalized3D(_texNormal, uv_B.xy) * uv_B.z;

        // logic to flatten the wave pattern
        // scale xy components of the normal, then adjust z (up) component
        vec3 mixNormal = normalize(normal_A + normal_B);
        mixNormal.xy *= waveStrength;
        mixNormal.z = sqrt(1.0 - dot(mixNormal.xy, mixNormal.xy));

        return mixNormal;
      }

      vec4 getSurfaceNormalAndFoam(vec2 _uv, float _time) {
        float waveTextureRepeat = waveParams[1];
        vec3 normal = getWaveLayer(texWaveNormal, texWavePerturbation, _uv * waveTextureRepeat, waveDirection, _time);
        float foam  = normals2FoamIntensity(normal, waveParams[0]);
        return vec4(normal, foam);
      }
    `)}(a||(a={})).bindUniforms=function(e,t){e.setUniform1i("texWaveNormal",0),e.setUniform1i("texWavePerturbation",1),e.setUniform4f("waveParams",t.waveStrength,t.waveTextureRepeat,t.flowStrength,t.flowOffset),e.setUniform2f("waveDirection",t.waveDirection[0]*t.waveVelocity,t.waveDirection[1]*t.waveVelocity)}},877:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(153);function n(e,t,r){var n;const d=e.byteLength/(4*t),c=new Uint32Array(e,0,d*t);let h=new Uint32Array(d);const u=null!=(n=null==r?void 0:r.minReduction)?n:0,f=(null==r?void 0:r.originalIndices)||null,p=f?f.length:0,g=(null==r?void 0:r.componentOffsets)||null;let m=0;if(g)for(let i=0;i<g.length-1;i++){const e=g[i+1]-g[i];e>m&&(m=e)}else m=d;const v=Math.floor(1.1*m)+1;(null==l||l.length<2*v)&&(l=new Uint32Array(Object(i.o)(2*v)));for(let i=0;i<2*v;i++)l[i]=0;let b=0;const _=!!g&&!!f,y=_?p:d,w=_?new Uint32Array(p):null,x=1.96;let O=0!==u?Math.ceil(4*x*x/(u*u)*u*(1-u)):y,R=1,j=g?g[1]:y;for(let i=0;i<y;i++){if(i===O){const e=1-b/i;if(e+x*Math.sqrt(e*(1-e)/i)<u)return null;O*=2}if(i===j){for(let e=0;e<2*v;e++)l[e]=0;if(f)for(let e=g[R-1];e<g[R];e++)w[e]=h[f[e]];j=g[++R]}const e=_?f[i]:i,r=e*t,n=s(c,r,t);let o=n%v,d=b;for(;0!==l[2*o+1];){if(l[2*o]===n){const e=l[2*o+1]-1;if(a(c,r,e*t,t)){d=h[e];break}}o++,o>=v&&(o-=v)}d===b&&(l[2*o]=n,l[2*o+1]=e+1,b++),h[e]=d}if(0!==u&&1-b/d<u)return null;if(_){for(let e=g[R-1];e<w.length;e++)w[e]=h[f[e]];h=w}const C=new Uint32Array(t*b);b=0;for(let i=0;i<y;i++)h[i]===b&&(o(c,(_?f[i]:i)*t,C,b*t,t),b++);if(f&&!_){const e=new Uint32Array(p);for(let t=0;t<e.length;t++)e[t]=h[f[t]];h=e}return{buffer:C.buffer,indices:h,uniqueCount:b}}function a(e,t,r,i){for(let n=0;n<i;n++)if(e[t+n]!==e[r+n])return!1;return!0}function o(e,t,r,i,n){for(let a=0;a<n;a++)r[i+a]=e[t+a]}function s(e,t,r){let i=0;for(let n=0;n<r;n++)i=e[t+n]+i|0,i=i+(i<<11)+(i>>>2)|0;return i>>>0}let l=null},881:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return n}));var i=r(164);function n(e){e.fragment.code.add(i.a`
    float normals2FoamIntensity(vec3 n, float waveStrength){
      float normalizationFactor =  max(0.015, waveStrength);
      return max((n.x + n.y)*0.3303545/normalizationFactor + 0.3303545, 0.0);
    }
  `)}function a(e){e.fragment.code.add(i.a`
    vec3 foamIntensity2FoamColor(float foamIntensityExternal, float foamPixelIntensity, vec3 skyZenitColor, float dayMod){
      return foamIntensityExternal * (0.075 * skyZenitColor * pow(foamPixelIntensity, 4.) +  50.* pow(foamPixelIntensity, 23.0)) * dayMod;
    }
  `)}},882:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return v}));var i=r(164),n=r(458),a=r(302),o=r(405),s=r(298),l=r(354),d=r(369),c=r(377),h=r(322),u=r(663),f=r(830),p=r(744),g=r(943),m=r(970);function v(e){const t=new a.a;return t.include(n.a,{linearDepth:!1}),t.attributes.add("position","vec3"),t.attributes.add("uv0","vec2"),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("localOrigin","vec3"),t.vertex.uniforms.add("waterColor","vec4"),0!==e.output&&7!==e.output||(t.include(g.a,e),t.include(p.a,e),t.varyings.add("vuv","vec2"),t.varyings.add("vpos","vec3"),t.varyings.add("vnormal","vec3"),t.varyings.add("vtbnMatrix","mat3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.vertex.code.add(i.a`
      void main(void) {
        if (waterColor.a < ${i.a.float(c.c)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vuv = uv0;
        vpos = position;

        vnormal = getLocalUp(vpos, localOrigin);
        vtbnMatrix = getTBNMatrix(vnormal);

        ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}

        gl_Position = transformPosition(proj, view, vpos);
        ${0===e.output?"forwardLinearDepth();":""}
      }
    `)),e.multipassTerrainEnabled&&(t.fragment.include(l.a),t.include(h.b,e)),7===e.output&&(t.include(s.a,e),t.fragment.uniforms.add("waterColor","vec4"),t.fragment.code.add(i.a`
        void main() {
          discardBySlice(vpos);
          ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}

          gl_FragColor = vec4(waterColor.a);
        }
      `)),0===e.output&&(t.include(f.a,e),t.include(s.a,e),e.receiveShadows&&t.include(u.a,e),t.include(m.a,e),t.fragment.uniforms.add("waterColor","vec4").add("lightingMainDirection","vec3").add("lightingMainIntensity","vec3").add("camPos","vec3").add("timeElapsed","float").add("view","mat4"),t.fragment.include(o.a),t.fragment.code.add(i.a`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        vec3 localUp = vnormal;
        // the created normal is in tangent space
        vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);

        // we rotate the normal according to the tangent-bitangent-normal-Matrix
        vec3 n = normalize(vtbnMatrix * tangentNormalFoam.xyz);
        vec3 v = -normalize(vpos - camPos);
        vec3 l = normalize(-lightingMainDirection);
        float shadow = ${e.receiveShadows?i.a`1.0 - readShadowMap(vpos, linearDepth)`:"1.0"};
        vec4 vPosView = view*vec4(vpos, 1.0);
        vec4 final = vec4(getSeaColor(n, v, l, waterColor.rgb, lightingMainIntensity, localUp, shadow, tangentNormalFoam.w, vPosView.xyz), waterColor.w);

        // gamma correction
        gl_FragColor = delinearizeGamma(final);
        gl_FragColor = highlightSlice(gl_FragColor, vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),2===e.output&&(t.include(g.a,e),t.include(f.a,e),t.include(s.a,e),t.varyings.add("vpos","vec3"),t.varyings.add("vuv","vec2"),t.vertex.code.add(i.a`
        void main(void) {
          if (waterColor.a < ${i.a.float(c.c)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vuv = uv0;
          vpos = position;

          gl_Position = transformPosition(proj, view, vpos);
        }
    `),t.fragment.uniforms.add("timeElapsed","float"),t.fragment.code.add(i.a`
        void main() {
          discardBySlice(vpos);

          // the created normal is in tangent space and foam
          vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);
          tangentNormalFoam.xyz = normalize(tangentNormalFoam.xyz);

          gl_FragColor = vec4((tangentNormalFoam.xyz + vec3(1.0)) * 0.5, tangentNormalFoam.w);
        }
    `)),5===e.output&&(t.varyings.add("vpos","vec3"),t.vertex.code.add(i.a`
        void main(void) {
          if (waterColor.a < ${i.a.float(c.c)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vpos = position;
          gl_Position = transformPosition(proj, view, vpos);
        }
    `),t.fragment.uniforms.add("waterColor","vec4"),t.fragment.code.add(i.a`
        void main() {
          gl_FragColor = waterColor;
        }
    `)),4===e.output&&(t.include(d.a),t.varyings.add("vpos","vec3"),t.vertex.code.add(i.a`
      void main(void) {
        if (waterColor.a < ${i.a.float(c.c)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);
      }
    `),t.include(s.a,e),t.fragment.code.add(i.a`
      void main() {
        discardBySlice(vpos);
        outputHighlight();
      }
    `)),t}var b=Object.freeze({__proto__:null,build:v})},883:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return o}));var i=r(164),n=r(302),a=r(625);function o(){const e=new n.a;return e.include(a.a),e.fragment.uniforms.add("tex","sampler2D"),e.fragment.uniforms.add("color","vec4"),e.fragment.code.add(i.a`
    void main() {
      vec4 texColor = texture2D(tex, uv);
      gl_FragColor = texColor * color;
    }
  `),e}var s=Object.freeze({__proto__:null,build:o})},918:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(164),n=r(354);function a(e){e.fragment.uniforms.add("lastFrameColorMap","sampler2D"),e.fragment.uniforms.add("reprojectionMat","mat4"),e.fragment.uniforms.add("rpProjectionMat","mat4"),e.fragment.code.add(i.a`
  vec2 reprojectionCoordinate(vec3 projectionCoordinate)
  {
    vec4 zw = rpProjectionMat * vec4(0.0, 0.0, -projectionCoordinate.z, 1.0);
    vec4 reprojectedCoord = reprojectionMat * vec4(zw.w * (projectionCoordinate.xy * 2.0 - 1.0), zw.z, zw.w);
    reprojectedCoord.xy /= reprojectedCoord.w;
    return reprojectedCoord.xy*0.5 + 0.5;
  }
  `)}function o(e,t){e.fragment.uniforms.add("nearFar","vec2"),e.fragment.uniforms.add("depthMapView","sampler2D"),e.fragment.uniforms.add("ssrViewMat","mat4"),e.fragment.uniforms.add("invResolutionHeight","float"),e.fragment.include(n.a),e.include(a),e.fragment.code.add(i.a`
  const int maxSteps = ${t.highStepCount?"150;":"75;"}

  vec4 applyProjectionMat(mat4 projectionMat, vec3 x)
  {
    vec4 projectedCoord =  projectionMat * vec4(x, 1.0);
    projectedCoord.xy /= projectedCoord.w;
    projectedCoord.xy = projectedCoord.xy*0.5 + 0.5;
    return projectedCoord;
  }

  vec3 screenSpaceIntersection(vec3 dir, vec3 startPosition, vec3 viewDir, vec3 normal)
  {
    vec3 viewPos = startPosition;
    vec3 viewPosEnd = startPosition;

    // Project the start position to the screen
    vec4 projectedCoordStart = applyProjectionMat(rpProjectionMat, viewPos);
    vec3  Q0 = viewPos / projectedCoordStart.w; // homogeneous camera space
    float k0 = 1.0/ projectedCoordStart.w;

    // advance the position in the direction of the reflection
    viewPos += dir;

    vec4 projectedCoordVanishingPoint = applyProjectionMat(rpProjectionMat, dir);

    // Project the advanced position to the screen
    vec4 projectedCoordEnd = applyProjectionMat(rpProjectionMat, viewPos);
    vec3  Q1 = viewPos / projectedCoordEnd.w; // homogeneous camera space
    float k1 = 1.0/ projectedCoordEnd.w;

    // calculate the reflection direction in the screen space
    vec2 projectedCoordDir = (projectedCoordEnd.xy - projectedCoordStart.xy);
    vec2 projectedCoordDistVanishingPoint = (projectedCoordVanishingPoint.xy - projectedCoordStart.xy);

    float yMod = min(abs(projectedCoordDistVanishingPoint.y), 1.0);

    float projectedCoordDirLength = length(projectedCoordDir);
    float maxSt = float(maxSteps);

    // normalize the projection direction depending on maximum steps
    // this determines how blocky the reflection looks
    vec2 dP = yMod * (projectedCoordDir)/(maxSt * projectedCoordDirLength);

    // Normalize the homogeneous camera space coordinates
    vec3  dQ = yMod * (Q1 - Q0)/(maxSt * projectedCoordDirLength);
    float dk = yMod * (k1 - k0)/(maxSt * projectedCoordDirLength);

    // initialize the variables for ray marching
    vec2 P = projectedCoordStart.xy;
    vec3 Q = Q0;
    float k = k0;
    float rayStartZ = -startPosition.z; // estimated ray start depth value
    float rayEndZ = -startPosition.z;   // estimated ray end depth value
    float prevEstimateZ = -startPosition.z;
    float rayDiffZ = 0.0;
    float dDepth;
    float depth;
    float rayDiffZOld = 0.0;

    // early outs
    if (dot(normal, dir) < 0.0 || dot(-viewDir, normal) < 0.0)
      return vec3(P, 0.0);

    for(int i = 0; i < maxSteps-1; i++)
    {
      depth = -linearDepthFromTexture(depthMapView, P, nearFar); // get linear depth from the depth buffer

      // estimate depth of the marching ray
      rayStartZ = prevEstimateZ;
      dDepth = -rayStartZ - depth;
      rayEndZ = (dQ.z * 0.5 + Q.z)/ ((dk * 0.5 + k));
      rayDiffZ = rayEndZ- rayStartZ;
      prevEstimateZ = rayEndZ;

      if(-rayEndZ > nearFar[1] || -rayEndZ < nearFar[0] || P.y < 0.0  || P.y > 1.0 )
      {
        return vec3(P, 0.);
      }

      // If we detect a hit - return the intersection point, two conditions:
      //  - dDepth > 0.0 - sampled point depth is in front of estimated depth
      //  - if difference between dDepth and rayDiffZOld is not too large
      //  - if difference between dDepth and 0.025/abs(k) is not too large
      //  - if the sampled depth is not behind far plane or in front of near plane

      if((dDepth) < 0.025/abs(k) + abs(rayDiffZ) && dDepth > 0.0 && depth > nearFar[0] && depth < nearFar[1] && abs(P.y - projectedCoordStart.y) > invResolutionHeight)
      {
          return vec3(P, depth);
      }

      // continue with ray marching
      P += dP;
      Q.z += dQ.z;
      k += dk;
      rayDiffZOld = rayDiffZ;
    }
    return vec3(P, 0.0);
  }
  `)}(a||(a={})).bindUniforms=function(e,t,r){e.setUniform1i("lastFrameColorMap",r.lastFrameColorTextureUnit),t.bindTexture(r.lastFrameColorTexture,r.lastFrameColorTextureUnit),e.setUniformMatrix4fv("reprojectionMat",r.reprojectionMat),e.setUniformMatrix4fv("rpProjectionMat",r.camera.projectionMatrix)},(o||(o={})).bindUniforms=function(e,t,r){r.ssrEnabled&&(e.setUniform1i("depthMapView",r.linearDepthTextureUnit),t.bindTexture(r.linearDepthTexture,r.linearDepthTextureUnit),e.setUniform2fv("nearFar",r.camera.nearFar),e.setUniformMatrix4fv("ssrViewMat",r.camera.viewMatrix),e.setUniform1f("invResolutionHeight",1/r.camera.height),a.bindUniforms(e,t,r))}},943:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(164);function n(e,t){1===t.viewingMode?e.vertex.code.add(i.a`
      vec3 getLocalUp(in vec3 pos, in vec3 origin) {
          return normalize(pos + origin);
      }
    `):e.vertex.code.add(i.a`
      vec3 getLocalUp(in vec3 pos, in vec3 origin) {
          return vec3(0.0, 0.0, 1.0); // WARNING: up-axis dependent code
      }
    `),1===t.viewingMode?e.vertex.code.add(i.a`
        mat3 getTBNMatrix(in vec3 n) {
            vec3 t = normalize(cross(vec3(0.0, 0.0, 1.0), n));
            vec3 b = normalize(cross(n, t));
            return mat3(t, b, n);
        }
    `):e.vertex.code.add(i.a`
        mat3 getTBNMatrix(in vec3 n) {
            vec3 t = vec3(1.0, 0.0, 0.0);
            vec3 b = normalize(cross(n, t));
            return mat3(t, b, n);
        }
    `)}},944:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var i=r(137),n=r(151),a=r(157),o=r(201),s=r(215),l=r(233),d=r(422),c=r(516),h=r(957),u=r(513);class f extends u.a{constructor(e){super(e),this._renderOccluded=4,this._width=1,this._color=Object(d.c)(1,0,1,1),this._innerWidth=1,this._innerColor=null,this._stipplePattern=null,this._stippleOffColor=null,this._stippleIntegerRepeats=!1,this._writeDepthEnabled=!0,this._falloff=0,this._polygonOffset=!1,this.applyProps(e)}setGeometryFromExtent(e){const t=this.view.spatialReference,r=Object(n.e)(),i=Object(n.e)(),o=100,s=[];Object(a.v)(r,e[0],e[1],o),this.view.renderCoordsHelper.toRenderCoords(r,t,i),s.push([i[0],i[1],i[2]]),Object(a.v)(r,e[2],e[1],o),this.view.renderCoordsHelper.toRenderCoords(r,t,i),s.push([i[0],i[1],i[2]]),Object(a.v)(r,e[2],e[3],o),this.view.renderCoordsHelper.toRenderCoords(r,t,i),s.push([i[0],i[1],i[2]]),Object(a.v)(r,e[0],e[3],o),this.view.renderCoordsHelper.toRenderCoords(r,t,i),s.push([i[0],i[1],i[2]]),Object(a.v)(r,e[0],e[1],o),this.view.renderCoordsHelper.toRenderCoords(r,t,i),s.push([i[0],i[1],i[2]]),Object(a.v)(r,e[0],e[1],o),this.view.renderCoordsHelper.toRenderCoords(r,t,i),s.push([i[0],i[1],i[2]]),this.geometry=[s]}setGeometryFromFrustum(e){const t=[];e.lines.forEach((e=>{t.push([e.origin[0],e.origin[1],e.origin[2]]),t.push([e.endpoint[0],e.endpoint[1],e.endpoint[2]])})),this.geometry=[t]}setGeometryFromSegment(e){const t=e.endRenderSpace;Object(o.i)(p),Object(o.s)(p,p,t),this.transform=p;const{points:r}=e.createRenderGeometry(t,this.view.renderCoordsHelper);this.geometry=[r]}setGeometryFromSegments(e,t=n.b){Object(o.i)(p),Object(o.s)(p,p,t),this.transform=p,this.geometry=e.map((e=>e.createRenderGeometry(t,this.view.renderCoordsHelper).points))}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateMaterial())}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this.recreateGeometry()}get width(){return this._width}set width(e){e!==this._width&&(this._width=e,this._updateMaterial())}get color(){return this._color}set color(e){Object(l.g)(e,this._color)||(Object(l.c)(this._color,e),this._updateMaterial())}get innerWidth(){return this._innerWidth}set innerWidth(e){e!==this._innerWidth&&(this._innerWidth=e,this._updateMaterial())}get innerColor(){return this._innerColor}set innerColor(e){Object(i.k)(e)?!Object(i.j)(this._innerColor)&&Object(l.g)(e,this._innerColor)||(this._innerColor=Object(l.c)(Object(d.b)(),e),this._updateMaterial()):Object(i.k)(this._innerColor)&&(this._innerColor=null,this._updateMaterial())}get stipplePattern(){return this._stipplePattern}set stipplePattern(e){const t=Object(i.k)(e)!==Object(i.k)(this._stipplePattern);this._stipplePattern=e,t?this.recreate():this._updateMaterial()}get stippleOffColor(){return this._stippleOffColor}set stippleOffColor(e){(Object(i.j)(e)||Object(i.j)(this._stippleOffColor)||!Object(l.g)(e,this._stippleOffColor))&&(this._stippleOffColor=Object(i.k)(e)?Object(d.a)(e):null,this._updateMaterial())}get stippleIntegerRepeats(){return this._stippleIntegerRepeats}set stippleIntegerRepeats(e){this._stippleIntegerRepeats!==e&&(this._stippleIntegerRepeats=e,this._updateMaterial())}get writeDepthEnabled(){return this._writeDepthEnabled}set writeDepthEnabled(e){this._writeDepthEnabled!==e&&(this._writeDepthEnabled=e,this._updateMaterial())}get falloff(){return this._falloff}set falloff(e){e!==this._falloff&&(this._falloff=e,this._updateMaterial())}get polygonOffset(){return this._polygonOffset}set polygonOffset(e){e!==this._polygonOffset&&(this._polygonOffset=e,this._updateMaterial())}createExternalResources(){this._material=new c.a(this.materialParameters)}destroyExternalResources(){this._material=null}createGeometries(e){const t=this._createLineGeometries();if(0!==t.length)for(let r=0;r<t.length;++r){const i=Object(h.a)(t[r]);e.addGeometry(i,this._material)}}forEachExternalMaterial(e){e(this._material)}get materialParameters(){return{width:this._width,color:this._color,stippleOffColor:this._stippleOffColor,stipplePattern:this._stipplePattern,isClosed:!1,falloff:this._falloff,innerColor:this._innerColor,innerWidth:this._innerWidth,stippleIntegerRepeats:this._stippleIntegerRepeats,polygonOffset:this._polygonOffset,renderOccluded:this._renderOccluded,writeDepth:this._writeDepthEnabled}}_updateMaterial(){this.attached&&this._material.setParameterValues(this.materialParameters)}_createLineGeometries(){const e=this.geometry;if(Object(i.j)(e)||0===e.length)return[];const t=[];return e.forEach((e=>{const r=e.length,i=new Float64Array(3*r);e.forEach(((e,t)=>{i[3*t+0]=e[0],i[3*t+1]=e[1],i[3*t+2]=e[2]}));const n={attributeData:{position:i},removeDuplicateStartEnd:0};t.push(n)})),t}}const p=Object(s.b)()},957:function(e,t,r){"use strict";r.d(t,"a",(function(){return Dt})),r.d(t,"b",(function(){return It})),r.d(t,"c",(function(){return At}));var i=r(454),n=r(137),a=r(153),o=r(151),s=r(157),l=r(278),d=r(291);r(581),r(877);function c(e,t,r){const i=e.length,n=new Array(i),a=new Array(i),o=new Array(i);let s=0,l=0,d=0,c=0;for(let h=0;h<i;++h)c+=e[h].length;const f=new Float64Array(3*c);let p=0;for(let g=i-1;g>=0;g--){const c=e[g],m=1===r&&u(c);if(m&&1!==i)n[s++]=c;else{let e=c.length;for(let t=0;t<s;++t)e+=n[t].length;const r={index:p,pathLengths:new Array(s+1),count:e,holeIndices:new Array(s)};r.pathLengths[0]=c.length,c.length>0&&(o[d++]={index:p,count:c.length}),p=m?h(c,c.length-1,-1,f,p,c.length,t):h(c,0,1,f,p,c.length,t);for(let i=0;i<s;++i){const e=n[i];r.holeIndices[i]=p,r.pathLengths[i+1]=e.length,e.length>0&&(o[d++]={index:p,count:e.length}),p=h(e,0,1,f,p,e.length,t)}s=0,r.count>0&&(a[l++]=r)}}for(let u=0;u<s;++u){const e=n[u];e.length>0&&(o[d++]={index:p,count:e.length}),p=h(e,0,1,f,p,e.length,t)}return l<i&&(a.length=l),d<i&&(o.length=d),{position:f,polygons:a,outlines:o}}function h(e,t,r,i,n,a,o){n*=3;for(let s=0;s<a;++s){const a=e[t];i[n++]=a[0],i[n++]=a[1],i[n++]=o?a[2]:0,t+=r}return n/3}function u(e){return!Object(d.g)(e,!1,!1)}var f=r(508),p=r(644),g=r(130),m=(r(128),r(129)),v=(r(136),r(133)),b=r(132),_=(r(131),r(134),r(135),r(224)),y=r(145),w=r(239),x=r(165),O=r(160),R=r(201),j=r(338),C=r(607),S=r(241),T=r(253),E=r(524),M=r(567);class D{constructor(e=Object(o.e)(),t=Object(o.g)(.57735,.57735,.57735),r=!0){this.intensity=e,this.direction=t,this.castShadows=r}}class I{constructor(e=Object(o.e)(),t=Object(o.g)(.57735,.57735,.57735)){this.intensity=Object(o.e)(),this.direction=Object(o.e)(),this.intensity=e,this.direction=t}}class P{constructor(e=Object(o.e)()){this.intensity=e}}class A{constructor(){this.sh={r:[0],g:[0],b:[0]}}}var H=r(679),L=r(743);let N=class extends y.a{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.SCENEVIEW_LOCKING_LOG=!1,this.HIGHLIGHTS_GRID_OPTIMIZATION_ENABLED=!0,this.HIGHLIGHTS_PROFILE_TO_CONSOLE=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_UPDATE_THRESHOLDS=!1,this.DISABLE_DECONFLICTOR_VISIBILITY_OFFSET=!1,this.DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.ENABLE_PROFILE_DEPTH_RANGE=!1,this.DISABLE_FAST_UPDATES=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1}};Object(g.a)([Object(v.b)()],N.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),Object(g.a)([Object(v.b)()],N.prototype,"SCENEVIEW_LOCKING_LOG",void 0),Object(g.a)([Object(v.b)()],N.prototype,"HIGHLIGHTS_GRID_OPTIMIZATION_ENABLED",void 0),Object(g.a)([Object(v.b)()],N.prototype,"HIGHLIGHTS_PROFILE_TO_CONSOLE",void 0),Object(g.a)([Object(v.b)()],N.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),Object(g.a)([Object(v.b)()],N.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),Object(g.a)([Object(v.b)()],N.prototype,"DECONFLICTOR_SHOW_GRID",void 0),Object(g.a)([Object(v.b)()],N.prototype,"LABELS_SHOW_BORDER",void 0),Object(g.a)([Object(v.b)()],N.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),Object(g.a)([Object(v.b)()],N.prototype,"OVERLAY_SHOW_CENTER",void 0),Object(g.a)([Object(v.b)()],N.prototype,"SHOW_POI",void 0),Object(g.a)([Object(v.b)()],N.prototype,"TESTS_DISABLE_UPDATE_THRESHOLDS",void 0),Object(g.a)([Object(v.b)()],N.prototype,"DISABLE_DECONFLICTOR_VISIBILITY_OFFSET",void 0),Object(g.a)([Object(v.b)()],N.prototype,"DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES",void 0),Object(g.a)([Object(v.b)()],N.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),Object(g.a)([Object(v.b)()],N.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),Object(g.a)([Object(v.b)()],N.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),Object(g.a)([Object(v.b)()],N.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),Object(g.a)([Object(v.b)()],N.prototype,"I3S_TREE_SHOW_TILES",void 0),Object(g.a)([Object(v.b)()],N.prototype,"I3S_SHOW_MODIFICATIONS",void 0),Object(g.a)([Object(v.b)()],N.prototype,"ENABLE_PROFILE_DEPTH_RANGE",void 0),Object(g.a)([Object(v.b)()],N.prototype,"DISABLE_FAST_UPDATES",void 0),Object(g.a)([Object(v.b)()],N.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),Object(g.a)([Object(v.b)()],N.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),Object(g.a)([Object(v.b)()],N.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),N=Object(g.a)([Object(b.a)("esri.views.3d.support.DebugFlags")],N);var z=new N,F=r(611),U=(r(255),r(309),r(234));class G{constructor(e,t){this.id=Object(w.a)(),this._renderTarget=null,this._renderTarget=new U.a(e,{colorTarget:0,depthStencilTarget:0},{target:3553,pixelFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9987,hasMipmap:t,maxAnisotropy:8,width:0,height:0})}dispose(){this._renderTarget=Object(n.f)(this._renderTarget)}getTexture(){return this._renderTarget?this._renderTarget.colorTexture:null}isValid(){return null!==this._renderTarget}resize(e,t){this._renderTarget.resize(e,t)}bind(e){e.bindFramebuffer(this._renderTarget)}generateMipMap(){this._renderTarget.colorTexture.descriptor.hasMipmap&&this._renderTarget.colorTexture.generateMipmap()}disposeRenderTargetMemory(){this._renderTarget&&this._renderTarget.resize(0,0)}getGpuMemoryUsage(){let e=0;return this._renderTarget&&(e+=Object(E.c)(this._renderTarget)),e}}var V=r(171);class W{constructor(e,t){this.vec3=e,this.id=t}}function k(e,t,r,i){return new W(Object(o.g)(e,t,r),i)}class B{constructor(e){this.extent=Object(V.i)(),this.resolution=0,this.renderLocalOrigin=k(0,0,0,"O"),this.pixelRatio=1,this.renderTargets={color:{fbo:new G(e,!0),valid:!1,lastUsed:1/0},colorWithoutRasterImage:{fbo:new G(e,!0),valid:!1,lastUsed:1/0},highlight:{fbo:new G(e,!1),valid:!1,lastUsed:1/0},water:{fbo:new G(e,!0),valid:!1,lastUsed:1/0},occluded:{fbo:new G(e,!0),valid:!1,lastUsed:1/0}}}dispose(){this.renderTargets.color.fbo.dispose(),this.renderTargets.colorWithoutRasterImage.fbo.dispose(),this.renderTargets.highlight.fbo.dispose(),this.renderTargets.water.fbo.dispose(),this.renderTargets.occluded.fbo.dispose()}drawRenderTargets(e,t,r){const i=this.renderTargets;i.color.valid=e.drawPass(0,i.color.fbo,t),i.highlight.valid=e.drawPass(5,i.highlight.fbo,t),i.water.valid=e.drawPass(3,i.water.fbo,t),i.occluded.valid=e.drawPass(0,i.occluded.fbo,t,1),i.colorWithoutRasterImage.valid=r&&e.drawPass(0,i.colorWithoutRasterImage.fbo,t,2)}computeRenderTargetValidityBitfield(){const e=this.renderTargets;return+e.color.valid|+e.colorWithoutRasterImage.valid<<1|+e.highlight.valid<<2|+e.water.valid<<3|+e.occluded.valid<<4}validateUsage(e,t){if(e.valid)e.lastUsed=t;else if(t-e.lastUsed>Z)e.fbo.disposeRenderTargetMemory(),e.lastUsed=1/0;else if(e.lastUsed<1/0)return!0;return!1}collectUnusedMemory(e){let t=!1;return t=this.validateUsage(this.renderTargets.color,e)||t,t=this.validateUsage(this.renderTargets.colorWithoutRasterImage,e)||t,t=this.validateUsage(this.renderTargets.highlight,e)||t,t=this.validateUsage(this.renderTargets.occluded,e)||t,t=this.validateUsage(this.renderTargets.water,e)||t,t}getGpuMemoryUsage(){return this.renderTargets.color.fbo.getGpuMemoryUsage()+this.renderTargets.colorWithoutRasterImage.fbo.getGpuMemoryUsage()+this.renderTargets.highlight.fbo.getGpuMemoryUsage()+this.renderTargets.water.fbo.getGpuMemoryUsage()+this.renderTargets.occluded.fbo.getGpuMemoryUsage()}}const Z=1e3;var q=r(254);class ${constructor(){this._uniforms={proj:[],uShadowMapDistance:[],viewportPixelSz:[],lightingMainDirection:[]}}dispose(){this._uniforms=null}getPrograms(e){return this._uniforms[e]||[]}subscribeProgram(e){for(const t in this._uniforms)e.hasUniform(t)&&this._uniforms[t].push(e)}unsubscribeProgram(e){for(const t in this._uniforms)Object(q.j)(this._uniforms[t],e)}}class Y{constructor(e){this.technique=e,this.refCount=0,this.refZeroFrame=0}}class Q{constructor(e){this._context=e,this._perConstructorInstances=new Map,this._frameCounter=0,this._keepAliveFrameCount=1200}get viewingMode(){return this._context.viewingMode}get constructionContext(){return this._context}dispose(){this._perConstructorInstances.forEach((e=>e.forEach((e=>e.technique.dispose())))),this._perConstructorInstances.clear()}acquire(e,t){const r=t.key;let i=this._perConstructorInstances.get(e);i||(i=new Map,this._perConstructorInstances.set(e,i));let n=i.get(r);return void 0===n&&(n=new Y(new e(this._context,t)),i.set(r,n)),++n.refCount,n.technique}acquireAndReleaseExisting(e,t,r){return Object(n.j)(r)?this.acquire(e,t):t.key===r.key&&r instanceof e?r:(this.release(r),this.acquire(e,t))}release(e){if(Object(n.j)(e))return;const t=this._perConstructorInstances.get(e.constructor).get(e.key);t.refCount-=1,0===t.refCount&&(t.refZeroFrame=this._frameCounter)}frameUpdate(){this._frameCounter++,this._perConstructorInstances.forEach(((e,t)=>{e.forEach(((t,r)=>{0===t.refCount&&t.refZeroFrame+this._keepAliveFrameCount<this._frameCounter&&(t.technique.dispose(),e.delete(r))})),0===e.size&&this._perConstructorInstances.delete(t)}))}getProgramsUsingUniform(e){return this._context.commonUniformStore.getPrograms(e)}async hotReload(){const e=new Array;this._perConstructorInstances.forEach(((t,r)=>{e.push((async(e,t)=>{const r=t.shader;r&&(await r.reload(),e.forEach((e=>{e.technique.reload(this._context)})))})(t,r))})),await Promise.all(e)}}var X=r(223);const J=[{output:0,name:"color"},{output:1,name:"depth"},{output:2,name:"normal"},{output:3,name:"depthShadowMap"},{output:4,name:"highlight"},{output:5,name:"draped"},{output:6,name:"occlusion"},{output:7,name:"alpha"}];function K(e,t){return e+"_"+J.find((e=>e.output===t)).name}const ee=m.a.getLogger("esri.views.3d.webgl-engine.lib.GLMaterialRep");class te{constructor(e){this.refCnt=0,this.glMaterial=e}incRefCnt(){++this.refCnt}decRefCnt(){--this.refCnt,Object(X.a)(this.refCnt>=0)}getRefCnt(){return this.refCnt}getGLMaterial(){return this.glMaterial}}var re=class{constructor(e,t,r){this._textureRep=e,this._techniqueRep=t,this.onMaterialChanged=r,this._id2glMaterialRef=new Map}dispose(){this._textureRep.dispose()}acquire(e,t){this.ownMaterial(e);const r=K(e.id,t);let i=this._id2glMaterialRef.get(r);if(null==i){const n=e.getGLMaterial({material:e,techniqueRep:this._techniqueRep,textureRep:this._textureRep,output:t});return i=new te(n),i.incRefCnt(),this._id2glMaterialRef.set(r,i),n}return i.incRefCnt(),i.getGLMaterial()}release(e,t){const r=K(e.id,t),i=this._id2glMaterialRef.get(r);if(i.decRefCnt(),0===i.getRefCnt()){const e=i.getGLMaterial();e&&e.dispose(),this._id2glMaterialRef.delete(r)}}materialChanged(e){for(const t of J)if(5!==t.output&&6!==t.output){const r=this._id2glMaterialRef.get(K(e.id,t.output));if(r&&r.getGLMaterial()){const e=r.getGLMaterial();e.updateParameters&&e.updateParameters()}}this.onMaterialChanged&&this.onMaterialChanged(e)}ownMaterial(e){Object(n.k)(e.materialRepository)&&e.materialRepository!==this&&ee.error("Material is already owned by a different material repository"),e.materialRepository=this}},ie=r(144),ne=r(215),ae=r(499),oe=r(552),se=r(516);let le=0;class de{constructor(){this.ROOT_ORIGIN_ID="rg_root_"+le++,this._origins=new Map,this._gridSize=42e5}getOrigin(e){const t=this._origins.get(this.ROOT_ORIGIN_ID);if(null==t){if(Object(n.k)(de.testOrigin)){const t=de.testOrigin;return this._origins.set(this.ROOT_ORIGIN_ID,k(t[0],t[1],t[2],this.ROOT_ORIGIN_ID)),this.getOrigin(e)}const t=k(e[0]+Math.random()-.5,e[1]+Math.random()-.5,e[2]+Math.random()-.5,this.ROOT_ORIGIN_ID);return this._origins.set(this.ROOT_ORIGIN_ID,t),t}Object(s.i)(ce,e,t.vec3),ce[0]=Math.abs(ce[0]),ce[1]=Math.abs(ce[1]),ce[2]=Math.abs(ce[2]);const r=this._gridSize;if(ce[0]<r&&ce[1]<r&&ce[2]<r)return t;const i=Math.round(e[0]/r),a=Math.round(e[1]/r),o=Math.round(e[2]/r),l=`rg_${i}/${a}/${o}`;let d=this._origins.get(l);return d||(d=k(i*r,a*r,o*r,l),this._origins.set(l,d)),d}_drawOriginBox(e){const t=window.view,r=t._stage;if(null==this._object){this._material=new se.a({width:2,color:[0,1,0,1]}),r.add(this._material);const e=new oe.a({isPickable:!1});this._object=new ae.a({castShadow:!1}),r.add(this._object),e.add(this._object),r.add(e)}const i=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],n=i.length,a=new Array(3*n),o=new Uint16Array(2*(n-1)),s=.5*this._gridSize;for(let l=0;l<n;l++)a[3*l+0]=e[0]+(1&i[l]?s:-s),a[3*l+1]=e[1]+(2&i[l]?s:-s),a[3*l+2]=e[2]+(4&i[l]?s:-s),l>0&&(o[2*l+0]=l-1,o[2*l+1]=l);Object(l.k)(a,ie.a.WebMercator,0,a,t.spatialReference,0,n);const d=new f.a([["position",{size:3,data:a,exclusive:!0}]],[["position",o]],2);r.add(d),this._object.addGeometry(d,this._material,ne.a),console.log(this._origins.size,e)}}const ce=Object(o.e)();(de||(de={})).testOrigin=null;var he=de;const ue=13;var fe=class{constructor(e,t,r,i,n,a){this.rctx=e,this.offscreenRenderingHelper=t,this.scenelightingData=r,this.shadowMap=i,this.ssaoHelper=n,this.sliceHelper=a,this.camera=null,this.lastFrameCamera=new L.a,this.pass=0,this.slot=0,this.highlightDepthTexture=null,this.renderOccludedMask=ue,this.hasOccludees=!1}resetRenderOccludedMask(){this.renderOccludedMask=ue}get isHighlightPass(){return 5===this.pass}},pe=r(427);class ge{constructor(){this.adds=new _.a,this.removes=new _.a,this.updates=new _.a({allocator:e=>e||new me,deallocator:e=>(e.renderGeometry=null,e)})}clear(){this.adds.clear(),this.removes.clear(),this.updates.clear()}prune(){this.adds.prune(),this.removes.prune(),this.updates.prune()}}class me{}class ve{constructor(){this.adds=new Array,this.removes=new Array,this.updates=new Array}}function be(e){return e.data.indexCount>=1}var _e=r(612),ye=r(371),we=r(372),xe=r(404);class Oe{constructor(e){null==e?e=16:e<65536&&(e=Object(a.o)(e)),this._array=new Float32Array(e),this._size=0}resize(e,t){if(this._size=e,this._size>this._array.length){let e=this._array.length||1;for(;e<this._size;)e*=2;const r=new Float32Array(e);return t&&r.set(this._array),this._array=r,!0}const r=2*this._size;if(r<=this._array.length){let e=this._array.length;for(;e>=r;)e=Math.floor(e/2);const i=new Float32Array(e);return t&&i.set(this._array.subarray(0,e)),this._array=i,!0}return!1}append(e){const t=this._size;this.resize(this._size+e.length,!0),this._array.set(e,t)}erase(e,t){for(let r=e;r<t;++r)this._array[r]=0}get array(){return this._array}get size(){return this._size}}var Re=r(433),je=r(347),Ce=r(353),Se=r(360),Te=r(352),Ee=r(331),Me=r(312),De=r(428),Ie=r(658),Pe=r(298),Ae=r(369),He=r(395),Le=r(322),Ne=r(663),ze=r(918),Fe=r(830),Ue=r(882);class Ge extends Ce.a{constructor(e,t){super(e,t),this.waterTextureRepository=e.waterTextureRepository}initializeProgram(e){const t=Ge.shader.get(),r=this.configuration,i=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,receiveShadows:r.receiveShadows,pbrMode:3,useCustomDTRExponentForWater:!0,ssrEnabled:r.useSSR,highStepCount:!0,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new Ee.a(e.rctx,i.generateSource("vertex"),i.generateSource("fragment"),Te.a)}ensureResource(e){return this.waterTextureRepository.ready||this.waterTextureRepository.updating||this.waterTextureRepository.loadTextures(e),this.waterTextureRepository.ready?2:1}bindPass(e,t,r){De.a.bindProjectionMatrix(this.program,r.camera.projectionMatrix),r.multipassTerrainEnabled&&(this.program.setUniform2fv("cameraNearFar",r.camera.nearFar),this.program.setUniform2fv("inverseViewport",r.inverseViewport),Object(Le.a)(this.program,e,r)),0===this.configuration.output&&(r.lighting.setUniforms(this.program,!1),ze.a.bindUniforms(this.program,e,r)),0!==this.configuration.output&&2!==this.configuration.output||(Fe.a.bindUniforms(this.program,t),this.waterTextureRepository.bindRepo(e)),this.program.setUniform4fv("waterColor",t.color),4===this.configuration.output&&Ae.a.bindOutputHighlight(e,this.program,r)}bindDraw(e){De.a.bindView(this.program,e),0!==this.configuration.output&&7!==this.configuration.output||De.a.bindCamPosition(this.program,e.origin,e.camera.viewInverseTransposeMatrix),0===this.configuration.output&&Ne.a.bindUniforms(this.program,e,Ie.a.SHADOW_MAP),0!==this.configuration.output&&7!==this.configuration.output&&4!==this.configuration.output||Pe.a.bindUniformsWithOrigin(this.program,this.configuration,e)}setPipelineState(e){const t=this.configuration,r=3===e,i=2===e;return Object(Me.d)({blending:2!==t.output&&4!==t.output&&t.transparent?r?He.f:Object(He.a)(e):null,depthTest:{func:Object(He.b)(e)},depthWrite:r?t.writeDepth&&Me.c:Object(He.c)(e),colorWrite:Me.b,polygonOffset:r||i?null:Object(He.g)(t.enableOffset)})}initializePipeline(){return this.setPipelineState(this.configuration.transparencyPassType)}}Ge.shader=new je.a(Ue.a,(()=>r.e(301).then(r.bind(null,1242))));class Ve extends Se.a{constructor(){super(...arguments),this.output=0,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!1,this.useSSR=!1,this.isDraped=!1,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!0}}Object(g.a)([Object(Se.b)({count:8})],Ve.prototype,"output",void 0),Object(g.a)([Object(Se.b)()],Ve.prototype,"receiveShadows",void 0),Object(g.a)([Object(Se.b)()],Ve.prototype,"slicePlaneEnabled",void 0),Object(g.a)([Object(Se.b)()],Ve.prototype,"transparent",void 0),Object(g.a)([Object(Se.b)()],Ve.prototype,"enableOffset",void 0),Object(g.a)([Object(Se.b)()],Ve.prototype,"writeDepth",void 0),Object(g.a)([Object(Se.b)()],Ve.prototype,"useSSR",void 0),Object(g.a)([Object(Se.b)()],Ve.prototype,"isDraped",void 0),Object(g.a)([Object(Se.b)({count:4})],Ve.prototype,"transparencyPassType",void 0),Object(g.a)([Object(Se.b)()],Ve.prototype,"multipassTerrainEnabled",void 0),Object(g.a)([Object(Se.b)()],Ve.prototype,"cullAboveGround",void 0);class We extends Re.a{constructor(e){super(e),this.updateParameters()}updateParameters(e){this.technique=this.techniqueRep.acquireAndReleaseExisting(Ge,this.material.getTechniqueConfig(this.output,e),this.technique)}beginSlot(e){if(2===this.output)return 22===e;if(5===this.output)return null==e;if(4===this.output)return 3===e;let t=3;return this.material.params.transparent&&(t=this.material.params.writeDepth?5:8),e===t}setElapsedTimeUniform(e){const t=.001*this.material.animation.time;e.setUniform1f("timeElapsed",t*this.material.params.animationSpeed)}_updateShadowState(e){e.shadowMappingEnabled!==this.material.params.receiveShadows&&this.material.setParameterValues({receiveShadows:e.shadowMappingEnabled})}_updateSSRState(e){e.ssrEnabled!==this.material.params.ssrEnabled&&this.material.setParameterValues({ssrEnabled:e.ssrEnabled})}ensureResources(e){return this.technique.ensureResource(e)}ensureParameters(e){0===this.output&&(this._updateShadowState(e),this._updateSSRState(e)),this.updateParameters(e)}bind(e,t){e.bindProgram(this.technique.program),this.technique.bindPass(e,this.material.params,t),2!==this.output&&0!==this.output||this.setElapsedTimeUniform(this.technique.program)}}class ke{constructor(e,t,r,i,n,a){this.from=e,this.to=t,this.isVisible=r,this.hasHighlights=i,this.hasOccludees=n,this.transformation=a,null!=a&&(this.transformationNormal=Object(ne.c)(a),Object(R.a)(this.transformationNormal,this.transformationNormal),Object(R.b)(this.transformationNormal,this.transformationNormal))}}function Be(e,t){const r=e=>({first:e.from,count:e.to-e.from});if(0===e.length)return void e.push(r(t));const i=e[e.length-1];if(function(e,t){return e.first+e.count>=t.from}(i,t)){const e=t.from-i.first+t.to-t.from;i.count=e}else e.push(r(t))}r(167);var Ze=r(399);function qe(e,t,r){Object(n.k)(r)&&(r.drawCalls+=e,r.triangles+=t)}Ze.a;function $e(e){return e.hasOccludees||e.hasHighlights||e.hasHiddenInstances}const Ye={begin:0,end:0},Qe=Object(ne.b)(),Xe=Object(ne.b)(),Je=Object(ne.b)();var Ke=class{constructor(e,t,r){this.type="MergedRenderer",this._dataByOrigin=new Map,this._hasHighlights=!1,this._hasOccludees=!1,this._rctx=e,this._material=r,this._materialRep=t,this._glMaterials=Object(xe.a)(this._material,this._materialRep),this._bufferWriter=r.createBufferWriter()}dispose(){Object(xe.e)(this._material,this._materialRep),this._dataByOrigin&&(this._dataByOrigin.forEach((e=>{e.vao.dispose(!0),e.vao=null})),this._dataByOrigin.clear(),this._dataByOrigin=null),this._glMaterials&&(this._glMaterials.forEach((e=>{e&&e.dispose()})),this._glMaterials.clear(),this._glMaterials=null)}get isEmpty(){return 0===this._dataByOrigin.size}get hasHighlights(){return this._hasHighlights}get hasOccludees(){return this._hasOccludees}get hasWater(){return!this.isEmpty&&Object(C.a)(this._glMaterials,(e=>e instanceof We))}get rendersOccluded(){return!this.isEmpty&&1!==this._material.renderOccluded}modify(e){this.updateGeometries(e.updates),this.addAndRemoveGeometries(e.adds,e.removes),this.updateRenderCommands()}addAndRemoveGeometries(e,t){const r=this._bufferWriter,i=r.vertexBufferLayout,n=i.stride/4,a=this._dataByOrigin,o=function(e,t,r,i){const n=new Map,a=t.vertexBufferLayout.stride/4,o=(r,i)=>{const o=r.origin,s=e.get(o.id);let l=n.get(o.id);null==l&&(l={optimalCount:null==s?0:s.optimalCount,sparseCount:null==s?0:s.buffer.size,toAdd:[],toRemove:[],origin:o.vec3},n.set(o.id,l));const d=t.elementCount(r.data)*a;i?(l.optimalCount+=d,l.sparseCount+=d,l.toAdd.push(r)):(l.optimalCount-=d,l.toRemove.push(r))};for(const s of r)o(s,!0);for(const s of i)o(s,!1);return n}(a,r,e,t);o.forEach(((e,t)=>{o.delete(t);const r=e.optimalCount,s=e.sparseCount;let l=a.get(t);if(null==l)Object(X.a)(r>0),l=this.createData(i,r,e.origin),a.set(t,l);else if(0===r)return l.vao.dispose(!0),l.vao=null,void a.delete(t);const d=r<e.sparseCount/2,c=d?r:s,h=Ye,u=l.buffer.size,f=l.buffer.array,p=l.buffer.resize(c,!1);d||p?this.removeAndRebuild(l,e.toRemove,n,f,h):e.toRemove.length>0?(this.removeByErasing(l,e.toRemove,n,h),e.toAdd.length>0&&(h.end=u)):(h.begin=u,h.end=u);const g=Qe;Object(X.j)(g,-e.origin[0],-e.origin[1],-e.origin[2]),this.append(l,e.toAdd,n,g,h);const m=l.vao.vertexBuffers.geometry;if(m.byteSize!==l.buffer.array.buffer.byteLength)m.setData(l.buffer.array);else{const{begin:e,end:t}=h;if(e<t){const r=l.buffer.array,i=4,n=e*i,a=t*i;m.setSubData(r,n,n,a)}}l.drawCommandsDirty=!0}))}updateGeometries(e){const t=this._bufferWriter,r=t.vertexBufferLayout.stride/4;for(const i of e){const e=i.updateType,n=i.renderGeometry,a=this._dataByOrigin.get(n.origin.id),o=a&&a.instances.get(n.id);if(!o)return;if(1&e&&(o.isVisible=n.instanceParameters.visible),9&e){const e=n.instanceParameters.visible;o.hasHighlights=!!n.instanceParameters.highlights&&e}if(16&e&&(o.hasOccludees=!!n.instanceParameters.occludees),6&e){const e=a.buffer.array,i=a.vao;Object(xe.c)(n,Xe,Je),t.write({transformation:Xe,invTranspTransformation:Je},n.data,t.vertexBufferLayout.createView(e.buffer),o.from),Object(X.a)(o.from+t.elementCount(n.data)===o.to,"material VBO layout has changed"),i.vertexBuffers.geometry.setSubData(e,o.from*r*4,o.from*r*4,o.to*r*4)}a.drawCommandsDirty=!0}}updateRenderCommands(){this._hasHighlights=!1,this._hasOccludees=!1,this._dataByOrigin.forEach((e=>{e.hasHiddenInstances=!1,e.hasHighlights=!1,e.hasOccludees=!1,Object(C.a)(e.instances,(t=>(t.isVisible?(t.hasHighlights&&(this._hasHighlights=!0,e.hasHighlights=!0),t.hasOccludees&&(this._hasOccludees=!0,e.hasOccludees=!0)):e.hasHiddenInstances=!0,e.hasHiddenInstances&&e.hasHighlights&&e.hasOccludees)))}));this._dataByOrigin.forEach((e=>{e.drawCommandsDirty&&((e=>{if(e.drawCommandsDefault=null,e.drawCommandsHighlight=null,e.drawCommandsOccludees=null,e.drawCommandsShadowHighlightRest=null,e.stats={default:0,highlight:0,occludees:0,shadowHighlightRest:0},0===e.instances.size)return;if(!$e(e)){const t=4*e.buffer.size/Object(E.d)(e.vao.layout.geometry);return e.drawCommandsDefault=[{first:0,count:t}],void(e.stats={default:t,highlight:0,occludees:0,shadowHighlightRest:0})}const t=function(e){return e.sort(((e,t)=>e.from===t.from?e.to>t.to?1:e.to<t.to?-1:0:e.from>t.from?1:e.from<t.from?-1:0))}([...e.instances.values()]);e.drawCommandsDefault=[],e.drawCommandsHighlight=[],e.drawCommandsOccludees=[],e.drawCommandsShadowHighlightRest=[];for(const i of t)i.isVisible&&(i.hasOccludees?Be(e.drawCommandsOccludees,i):Be(e.drawCommandsDefault,i),i.hasHighlights?Be(e.drawCommandsHighlight,i):Be(e.drawCommandsShadowHighlightRest,i));const r=e=>{let t=0;for(const r of e)t+=r.count;return t/3};e.stats={default:r(e.drawCommandsDefault),highlight:r(e.drawCommandsHighlight),occludees:r(e.drawCommandsOccludees),shadowHighlightRest:r(e.drawCommandsShadowHighlightRest)}})(e),e.drawCommandsDirty=!1)}))}updateLogic(e){return this._material.update(e)}render(e,t,r,i){const a=this._rctx,o=this._glMaterials.get(t.pass),s=5===t.pass||7===t.pass,l=6===t.pass,d=!(s||l);let c=e;if(3===t.pass&&null===c&&(c=22),!o||2!==o.ensureResources(a)||null!=c&&!o.beginSlot(c)||s&&!this._hasHighlights)return!1;o.ensureParameters(r);const h=o.getTechnique(),u=o.getPipelineState(c,!1);a.setPipelineState(u),o.bind(a,r);let f=!1;return this._dataByOrigin.forEach((e=>{if(Object(n.j)(e.drawCommandsDefault)&&Object(n.j)(e.drawCommandsHighlight)&&Object(n.j)(e.drawCommandsOccludees)&&Object(n.j)(e.drawCommandsShadowHighlightRest))return;if(s&&!e.hasHighlights)return;r.origin=e.origin,h.bindDraw(r),h.ensureAttributeLocations(e.vao),a.bindVAO(e.vao);const t=h.primitiveType;let p=s?e.drawCommandsHighlight:l&&$e(e)?e.drawCommandsShadowHighlightRest:e.drawCommandsDefault;const g=s?e.stats.highlight:l&&$e(e)?e.stats.shadowHighlightRest:e.stats.default;if(Object(n.k)(p)&&(this.renderCommands(a,t,p),qe(p.length,g,i),f=!0),d&&(p=e.drawCommandsOccludees,Object(n.k)(p))){const r=o.getPipelineState(c,!0);a.setPipelineState(r),this.renderCommands(a,t,p),a.setPipelineState(u),qe(p.length,e.stats.occludees,i),f=!0}})),f}renderCommands(e,t,r){for(let i=0;i<r.length;i++)e.drawArrays(t,r[i].first,r[i].count)}createData(e,t,r){return{instances:new Map,vao:new we.a(this._rctx,this._material.vertexAttributeLocations,{geometry:Object(_e.a)(e)},{geometry:ye.a.createVertex(this._rctx,35044)}),buffer:new Oe(t),optimalCount:0,origin:r,hasHiddenInstances:!1,hasHighlights:!1,hasOccludees:!1,drawCommandsDirty:!1,drawCommandsDefault:null,drawCommandsOccludees:null,drawCommandsHighlight:null,drawCommandsShadowHighlightRest:null,stats:{default:0,highlight:0,occludees:0,shadowHighlightRest:0}}}removeAndRebuild(e,t,r,i,n){for(const c of t){const t=c.id,i=e.instances.get(t);e.optimalCount-=(i.to-i.from)*r,e.instances.delete(t)}let a=0;const o=e.buffer.array;n.begin=0,n.end=0;let s=-1,l=-1,d=0;e.instances.forEach((e=>{const t=e.from*r,n=e.to*r,c=n-t;s!==l&&l!==t?(o.set(i.subarray(s,l),d),d+=l-s,s=t):-1===s&&(s=t),l=n,e.from=a/r,a+=c,e.to=a/r})),s!==l&&o.set(i.subarray(s,l),d),n.end=a}removeByErasing(e,t,r,i){i.begin=1/0,i.end=-1/0;let n=-1,a=-1;for(const o of t){const t=o.id,s=e.instances.get(t),l=s.from*r,d=s.to*r;n!==a&&a!==l?(e.buffer.erase(n,a),n=l):-1===n&&(n=l),a=d,e.instances.delete(t),e.optimalCount-=d-l,l<i.begin&&(i.begin=l),d>i.end&&(i.end=d)}n!==a&&e.buffer.erase(n,a)}append(e,t,r,i,a){const o=this._bufferWriter;for(const s of t){const t=Object(n.k)(s.transformation)?Object(R.l)(Xe,i,s.transformation):i;Object(R.a)(Je,t),Object(R.b)(Je,Je);const l=a.end;o.write({transformation:t,invTranspTransformation:Je},s.data,o.vertexBufferLayout.createView(e.buffer.array.buffer),a.end/r);const d=o.elementCount(s.data)*r,c=l+d;Object(X.a)(null==e.instances.get(s.id));const h=s.instanceParameters.visible,u=!!s.instanceParameters.highlights&&h,f=!!s.instanceParameters.occludees,p=new ke(l/r,c/r,h,u,f);e.instances.set(s.id,p),e.optimalCount+=d,a.end+=d}}get test(){return{material:this._material,glMaterials:this._glMaterials}}};let et=class extends y.a{constructor(){super(...arguments),this._pendingAddsRemoves=new Map,this._changes=new ge,this._materialRenderers=new Map,this._sortedMaterialRenderers=new _.a,this._hasHighlights=!1,this._hasWater=!1}dispose(){this._changes.prune(),this._materialRenderers&&(this._materialRenderers.forEach((e=>e.dispose())),this._materialRenderers.clear(),this._sortedMaterialRenderers.clear())}get updating(){return this._pendingAddsRemoves.size>0||this._changes.updates.length>0}get hasHighlights(){return this._hasHighlights}get hasWater(){return this._hasWater}get rendersOccluded(){return Object(C.a)(this._materialRenderers,(e=>e.rendersOccluded))}stopAnimationsAtTime(e){this._sortedMaterialRenderers.forAll((t=>Object(n.c)(t.material.animation,(t=>t.stopAtTime(e)))))}get isEmpty(){return!this.updating&&0===this._materialRenderers.size}commitChanges(){let e=!1;if(!this.updating)return!1;this.updateAddsRemoves();const t=function(e){const t=new Map,r=e=>{let r=t.get(e);return r||(r=new ve,t.set(e,r)),r};return e.adds.forAll((e=>{be(e)&&r(e.material).adds.push(e)})),e.removes.forAll((e=>{be(e)&&r(e.material).removes.push(e)})),e.updates.forAll((e=>{be(e.renderGeometry)&&r(e.renderGeometry.material).updates.push(e)})),t}(this._changes);let r=!1,i=!1;return t.forEach(((t,n)=>{let a=this._materialRenderers.get(n);if(!a&&t.adds.length>0&&(a=new Ke(this.rctx,this.materialRepository,n),this._materialRenderers.set(n,a),e=!0,r=!0,i=!0),!a)return;const o=r||a.hasHighlights,s=i||a.hasWater;a.modify(t),r=r||o!==a.hasHighlights,i=i||s!==a.hasWater,a.isEmpty&&(this._materialRenderers.delete(n),a.dispose(),e=!0)})),this._changes.clear(),this._pendingAddsRemoves.clear(),e&&this.updateSortedMaterialRenderers(),r&&(this._hasHighlights=Object(C.a)(this._materialRenderers,(e=>e.hasHighlights))),i&&(this._hasWater=Object(C.a)(this._materialRenderers,(e=>e.hasWater))),this.notifyChange("updating"),!0}add(e){if(0===e.length)return;const t=0===this._pendingAddsRemoves.size;for(const r of e)this._pendingAddsRemoves.set(r,0);t&&this.notifyChange("updating")}remove(e){const t=0===this._pendingAddsRemoves.size;for(const r of e){const e=this._pendingAddsRemoves.get(r);0===e?this._pendingAddsRemoves.set(r,2):2!==e&&this._pendingAddsRemoves.set(r,1)}t&&this._pendingAddsRemoves.size>0&&this.notifyChange("updating")}modify(e,t){const r=0===this._changes.updates.length;for(const i of e){const e=this._changes.updates.pushNew();e.renderGeometry=i,e.updateType=t}r&&this._changes.updates.length>0&&this.notifyChange("updating")}updateLogic(e){let t=!1;return this._sortedMaterialRenderers.forAll((({materialRenderer:r})=>{r.updateLogic&&r.updateLogic(e)&&(t=!0)})),t}draw(e,t){for(let r=0;r<this._sortedMaterialRenderers.length;r++){const i=this._sortedMaterialRenderers.data[r];Object(pe.c)(i.material,e)&&i.materialRenderer.render(null,e,t,null)}}updateSortedMaterialRenderers(){this._sortedMaterialRenderers.clear();let e=0;this._materialRenderers.forEach(((t,r)=>{r.insertOrder=e++,this._sortedMaterialRenderers.push({material:r,materialRenderer:t})})),this._sortedMaterialRenderers.sort(((e,t)=>{const r=t.material.renderPriority-e.material.renderPriority;return 0!==r?r:e.material.insertOrder-t.material.insertOrder}))}updateAddsRemoves(){this._changes.adds.clear(),this._changes.removes.clear(),this._pendingAddsRemoves.forEach(((e,t)=>{switch(e){case 0:this._changes.adds.push(t);break;case 1:this._changes.removes.push(t)}}));let e=0;for(;e<this._changes.updates.length;){const t=this._changes.updates.data[e].renderGeometry;this._pendingAddsRemoves.has(t)?this._changes.updates.removeUnorderedIndex(e):e++}}get test(){return{sortedMaterialRenderers:this._sortedMaterialRenderers}}};Object(g.a)([Object(v.b)()],et.prototype,"rctx",void 0),Object(g.a)([Object(v.b)()],et.prototype,"materialRepository",void 0),Object(g.a)([Object(v.b)()],et.prototype,"updating",null),et=Object(g.a)([Object(b.a)("esri.views.3d.webgl-engine.lib.SortedRenderGeometryRenderer")],et);var tt=r(883);class rt extends Ce.a{initializeProgram(e){const t=rt.shader.get().build();return new Ee.a(e.rctx,t.generateSource("vertex"),t.generateSource("fragment"),Te.a)}initializePipeline(){return this.configuration.hasAlpha?Object(Me.d)({blending:Object(Me.e)(770,1,771,771),colorWrite:Me.b}):Object(Me.d)({colorWrite:Me.b})}}rt.shader=new je.a(tt.a,(()=>r.e(288).then(r.bind(null,1243))));class it extends Se.a{constructor(){super(...arguments),this.hasAlpha=!1}}function nt(e,t,r){(r=r||e).length=e.length;for(let i=0;i<e.length;i++)r[i]=e[i]*t[i];return r}function at(e,t,r){(r=r||e).length=e.length;for(let i=0;i<e.length;i++)r[i]=e[i]*t;return r}function ot(e,t,r){(r=r||e).length=e.length;for(let i=0;i<e.length;i++)r[i]=e[i]+t[i];return r}function st(e){return(e+1)*(e+1)}function lt(e,t,r){const i=e[0],n=e[1],a=e[2],o=r||[];return o.length=st(t),t>=0&&(o[0]=.28209479177),t>=1&&(o[1]=.4886025119*i,o[2]=.4886025119*a,o[3]=.4886025119*n),t>=2&&(o[4]=1.09254843059*i*n,o[5]=1.09254843059*n*a,o[6]=.31539156525*(3*a*a-1),o[7]=1.09254843059*i*a,o[8]=.54627421529*(i*i-n*n)),o}function dt(e,t){const r=function(e){return Object(a.d)(Math.floor(Math.sqrt(e)-1),0,2)}(t.r.length);for(const i of e)Object(s.s)(mt,i.direction),lt(mt,r,pt),nt(pt,vt),at(pt,i.intensity[0],gt),ot(t.r,gt),at(pt,i.intensity[1],gt),ot(t.g,gt),at(pt,i.intensity[2],gt),ot(t.b,gt);return t}function ct(e,t,r){(function(e,t){const r=st(e),i=t||{r:[],g:[],b:[]};i.r.length=i.g.length=i.b.length=r;for(let n=0;n<r;n++)i.r[n]=i.g[n]=i.b[n]=0})(t,r.sphericalHarmonics.sh),Object(s.v)(r.main.intensity,0,0,0);let i=!1;const n=ht,a=ut,o=ft;n.length=0,a.length=0,o.length=0;for(const l of e)l instanceof D&&!i?(Object(s.j)(r.main.direction,l.direction),r.main.intensity[0]=l.intensity[0],r.main.intensity[1]=l.intensity[1],r.main.intensity[2]=l.intensity[2],r.main.castShadows=l.castShadows,i=!0):l instanceof D||l instanceof I?n.push(l):l instanceof P?a.push(l):l instanceof A&&o.push(l);dt(n,r.sphericalHarmonics.sh),function(e,t){lt(mt,0,pt);for(const r of e)t.r[0]+=pt[0]*vt[0]*r.intensity[0]*4*Math.PI,t.g[0]+=pt[0]*vt[0]*r.intensity[1]*4*Math.PI,t.b[0]+=pt[0]*vt[0]*r.intensity[2]*4*Math.PI}(a,r.sphericalHarmonics.sh);for(const s of o)ot(r.sphericalHarmonics.sh.r,s.sh.r),ot(r.sphericalHarmonics.sh.g,s.sh.g),ot(r.sphericalHarmonics.sh.b,s.sh.b)}Object(g.a)([Object(Se.b)()],it.prototype,"hasAlpha",void 0);const ht=[],ut=[],ft=[],pt=[0],gt=[0],mt=Object(o.e)(),vt=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398],bt=Object(o.e)();class _t{constructor(){this._renderLighting={main:{intensity:Object(o.e)(),direction:Object(o.g)(1,0,0),castShadows:!1},sphericalHarmonics:{sh:{r:[0],g:[0],b:[0]}}},this._shOrder=2,this._oldSunlight={direction:Object(o.e)(),ambient:{color:Object(o.e)(),intensity:0},diffuse:{color:Object(o.e)(),intensity:0}}}setLightDirectionUniform(e){e.setUniform3fv("lightingMainDirection",this._renderLighting.main.direction)}setUniforms(e,t=!1){if(t){const t=(1-this._info.groundLightingFactor)*(1-this._info.globalFactor);e.setUniform1f("lightingFixedFactor",t)}else e.setUniform1f("lightingFixedFactor",0);e.setUniform1f("lightingGlobalFactor",this._info.globalFactor),this.setLightDirectionUniform(e),e.setUniform3fv("lightingMainIntensity",this._renderLighting.main.intensity),e.setUniform1f("ambientBoostFactor",.4);const r=this._renderLighting.sphericalHarmonics.sh;0===this._shOrder?e.setUniform3f("lightingAmbientSH0",r.r[0],r.g[0],r.b[0]):1===this._shOrder?(e.setUniform4f("lightingAmbientSH_R",r.r[0],r.r[1],r.r[2],r.r[3]),e.setUniform4f("lightingAmbientSH_G",r.g[0],r.g[1],r.g[2],r.g[3]),e.setUniform4f("lightingAmbientSH_B",r.b[0],r.b[1],r.b[2],r.b[3])):2===this._shOrder&&(e.setUniform3f("lightingAmbientSH0",r.r[0],r.g[0],r.b[0]),e.setUniform4f("lightingAmbientSH_R1",r.r[1],r.r[2],r.r[3],r.r[4]),e.setUniform4f("lightingAmbientSH_G1",r.g[1],r.g[2],r.g[3],r.g[4]),e.setUniform4f("lightingAmbientSH_B1",r.b[1],r.b[2],r.b[3],r.b[4]),e.setUniform4f("lightingAmbientSH_R2",r.r[5],r.r[6],r.r[7],r.r[8]),e.setUniform4f("lightingAmbientSH_G2",r.g[5],r.g[6],r.g[7],r.g[8]),e.setUniform4f("lightingAmbientSH_B2",r.b[5],r.b[6],r.b[7],r.b[8]))}set(e){this._info=e,ct(e.lights,this._shOrder,this._renderLighting),Object(s.s)(this._oldSunlight.direction,this._renderLighting.main.direction);const t=1/Math.PI;this._oldSunlight.ambient.color[0]=.282095*this._renderLighting.sphericalHarmonics.sh.r[0]*t,this._oldSunlight.ambient.color[1]=.282095*this._renderLighting.sphericalHarmonics.sh.g[0]*t,this._oldSunlight.ambient.color[2]=.282095*this._renderLighting.sphericalHarmonics.sh.b[0]*t,this._oldSunlight.ambient.intensity=1,this._oldSunlight.diffuse.color[0]=this._renderLighting.main.intensity[0]*t,this._oldSunlight.diffuse.color[1]=this._renderLighting.main.intensity[1]*t,this._oldSunlight.diffuse.color[2]=this._renderLighting.main.intensity[2]*t,this._oldSunlight.diffuse.intensity=1;const r=Object(s.j)(bt,this._oldSunlight.diffuse.color);Object(s.d)(r,r,.4*this._info.globalFactor),Object(s.e)(this._oldSunlight.ambient.color,this._oldSunlight.ambient.color,r)}get globalFactor(){return this._info.globalFactor}get old(){return this._oldSunlight}}var yt=r(829);const wt=m.a.getLogger("esri.views.3d.webgl-engine.lib.OverlayRenderer");let xt=class extends(Object(F.b)(y.a)){constructor(e){super(e),this._overlays=null,this._hasHighlights=!1,this._rendersOccluded=!1,this._hasWater=!1,this._lighting=new _t,this._localOrigins=new he,this._handles=new x.a,this._layerRenderers=new Map,this._sortedLayerRenderersDirty=!1,this._sortedLayerRenderers=new _.a,this._geometries=new Map,this.globalUnitScale=1,this.longitudeCyclical=null}initialize(){this._rctx=this.renderView.renderingContext,this._renderContext=new fe(this._rctx,null,null,null,null,null),this._stippleTextureRepository=new yt.a,this.waterTextureRepository=this.renderView.waterTextureRepository,this._shaderTechniqueRepository=new Q({rctx:this._rctx,viewingMode:2,commonUniformStore:new $,stippleTextureRepository:this._stippleTextureRepository,waterTextureRepository:this.waterTextureRepository}),Object(O.a)(this.waterTextureRepository,"loadingState",(()=>this.emitContentChanged())),this._materialRepository=new re(this.renderView.textureRepository,this._shaderTechniqueRepository),this._materialRepository.onMaterialChanged=e=>{(e.renderOccluded&Tt)>0!==this._rendersOccluded&&this.updateRendersOccluded(),this.emitContentChanged(),this.notifyChange("updating")},this._compositingHelper=this.renderView.compositingHelper,this._lighting.set({lights:[new P(Object(o.g)(1,1,1))],groundLightingFactor:1,globalFactor:0}),this._bindParameters={slot:null,highlightDepthTexture:Object(M.a)(this._rctx),camera:jt,inverseViewport:Object(S.a)(),origin:null,screenToWorldRatio:null,screenToWorldRatioGlobalWM:null,shadowMappingEnabled:!1,slicePlane:null,ssaoEnabled:!1,hasOccludees:!1,linearDepthTexture:null,linearDepthTextureUnit:0,lastFrameColorTexture:null,lastFrameColorTextureUnit:0,reprojectionMat:null,ssrEnabled:!1,lighting:this._lighting,transparencyPassType:3,terrainLinearDepthTexture:null,geometryLinearDepthTexture:null,multipassTerrainEnabled:!1,cullAboveGround:!0,multipassGeometryEnabled:!1},this._handles.add(this.scheduler.registerTask(j.b.STAGE,(()=>this.commitChanges()),(()=>this.updating)))}dispose(){this._handles.destroy(),this._layerRenderers.forEach((e=>e.dispose())),this._layerRenderers.clear(),this._bindParameters.highlightDepthTexture=Object(n.f)(this._bindParameters.highlightDepthTexture),this._shaderTechniqueRepository=Object(n.f)(this._shaderTechniqueRepository),this._temporaryRenderTarget=Object(n.f)(this._temporaryRenderTarget),this._debugPatternTexture=Object(n.f)(this._debugPatternTexture),this._quadVAO=Object(n.f)(this._quadVAO)}get updating(){return this._sortedLayerRenderersDirty||Object(C.a)(this._layerRenderers,(e=>e.updating))||this.waterTextureRepository.updating}get hasOverlays(){return Object(n.k)(this._overlays)}get gpuMemoryUsage(){return Object(n.k)(this._overlays)?this._overlays[0].getGpuMemoryUsage()+this._overlays[1].getGpuMemoryUsage():0}get overlays(){return this._overlays}forEachOverlay(e){Object(n.k)(this._overlays)&&(e(this._overlays[0],0),e(this._overlays[1],1))}ensureOverlays(){if(Object(n.j)(this._overlays)){const e=this.renderView.renderingContext;this._overlays=[new B(e),new B(e)]}}disposeOverlays(){Object(n.k)(this._overlays)&&(this._overlays.forEach((e=>e.dispose())),this._overlays=null)}commitChanges(){let e=!1;this._layerRenderers.forEach(((t,r)=>{t.commitChanges()&&(e=!0),t.isEmpty&&(this._layerRenderers.delete(r),this._sortedLayerRenderersDirty=!0,this._handles.remove(r))})),this._sortedLayerRenderersDirty&&(this.updateSortedLayerRenderers(),e=!0),e&&(this.notifyChange("updating"),this.emitContentChanged(),this.updateHasHighlights(),this.updateRendersOccluded(),this.updateHasWater())}addGeometries(e,t,r){for(const i of e)null==i.origin&&(i.origin=this._localOrigins.getOrigin(i.boundingSphere)),Object(n.j)(i.id)&&(i.id=Object(w.a)()),this._geometries.set(i.id,i);this.ensureLayerRenderer(t).add(e),2===r&&this.notifyGraphicGeometryChanged(e,t)}removeGeometries(e,t,r){for(const a of e)this._geometries.delete(Object(n.q)(a.id));const i=this._layerRenderers.get(t);i&&(i.remove(e),2===r&&this.notifyGraphicGeometryChanged(e,t))}updateGeometries(e,t,r){const i=this._layerRenderers.get(t);if(i)switch(i.modify(e,r),r){case 4:case 2:return this.notifyGraphicGeometryChanged(e,t);case 1:return this.notifyGraphicVisibilityChanged(e,t)}else wt.warn("Attempted to update geometry for nonexistent layer")}notifyGraphicGeometryChanged(e,t){if(Object(n.j)(t.notifyGraphicGeometryChanged))return;let r;for(const i of e){const e=i.graphicUid;e!==r&&(t.notifyGraphicGeometryChanged(e),r=e)}}notifyGraphicVisibilityChanged(e,t){if(Object(n.j)(t.notifyGraphicVisibilityChanged))return;let r;for(const i of e){const e=i.graphicUid;e!==r&&(t.notifyGraphicVisibilityChanged(e),r=e)}}updateHighlights(e,t){const r=this._layerRenderers.get(t);r?r.modify(e,8):wt.warn("Attempted to update highlights for nonexistent layer")}isEmpty(){return 0===this._geometries.size&&!z.OVERLAY_DRAW_DEBUG_TEXTURE}get hasHighlights(){return this._hasHighlights}get hasWater(){return this._hasWater}get rendersOccluded(){return this._rendersOccluded}updateLogic(e){let t=!1;return this._layerRenderers.forEach((r=>{r.updateLogic(e)&&(t=!0)})),t}updateLayerOrder(){this._sortedLayerRenderersDirty=!0}drawPass(e,t,r,i=0){if(0===r.numViews)return!1;if(this._screenToWorldRatio=r.pixelRatio*Math.abs(r.views[0].extent[2]-r.views[0].extent[0])/Math.abs(r.views[0].viewport[2]-r.views[0].viewport[0]),this.isEmpty()||5===e&&!this.hasHighlights||3===e&&!this.hasWater)return!1;if(!this.hasNonZeroSizedView(r))return!1;const a=r.width,o=r.height;if(!t.isValid())return!1;t.resize(a,o);const s=this._rctx;if(jt.pixelRatio=r.pixelRatio||1,this._renderContext.pass=e,this._bindParameters.screenToWorldRatio=this._screenToWorldRatio,this._bindParameters.screenToWorldRatioGlobalWM=this._screenToWorldRatio*this.globalUnitScale,t.bind(s),s.setClearColor(0,0,0,0),s.clearSafe(16384),1===i&&(this._renderContext.renderOccludedMask=Tt),z.OVERLAY_DRAW_DEBUG_TEXTURE&&1!==i)for(let n=0;n<r.numViews;n++)this.setViewParameters(r.views[n],jt),this.drawDebugTexture(a,o,Rt[r.index%Rt.length]);return this._layerRenderers.size>0&&this._sortedLayerRenderers.forAll((({layerView:l,renderer:d})=>{if(2===i&&Object(n.k)(l)&&0===l.drapeSourceType)return;const c=Object(n.k)(l)&&Object(n.k)(l.fullOpacity)&&l.fullOpacity<1&&0===e;c&&(this.bindTemporaryFramebuffer(this._rctx,a,o),s.clearSafe(16384));for(let e=0;e<r.numViews;e++)this.setViewParameters(r.views[e],jt),d.draw(this._renderContext,this._bindParameters);c&&Object(n.k)(this._temporaryRenderTarget)&&(t.bind(s),this._compositingHelper.composite(this._temporaryRenderTarget.getTexture(),2,Object(n.q)(Object(n.q)(l).fullOpacity)))})),s.bindFramebuffer(null),t.generateMipMap(),this._renderContext.resetRenderOccludedMask(),!0}bindTemporaryFramebuffer(e,t,r){Object(n.j)(this._temporaryRenderTarget)&&(this._temporaryRenderTarget=new G(e,!1)),this._temporaryRenderTarget.resize(t,r),this._temporaryRenderTarget.bind(e)}async reloadShaders(){await this._shaderTechniqueRepository.hotReload()}intersect(e,t,r){let i=0;this._geometries.forEach((n=>{if(r&&!r(n))return;this.intersectRenderGeometry(n,t,0,e,i);const a=this.longitudeCyclical;a&&(n.boundingSphere[0]-n.boundingSphere[3]<a.min&&this.intersectRenderGeometry(n,t,a.range,e,i),n.boundingSphere[0]+n.boundingSphere[3]>a.max&&this.intersectRenderGeometry(n,t,-a.range,e,i)),i++}))}intersectRenderGeometry(e,t,r,i,a){if(!e.instanceParameters.visible)return;let o=0;Object(n.k)(e.transformation)&&(r+=e.transformation[12],o=e.transformation[13]),Ct[0]=t[0]-r,Ct[1]=t[1]-o,Ct[2]=1,St[0]=t[0]-r,St[1]=t[1]-o,St[2]=0,e.screenToWorldRatio=this._screenToWorldRatio,e.material.intersect(e,null,e.getShaderTransformation(),i,Ct,St,((t,r,n)=>{this.addIntersectionResult(n,e.material.renderPriority,a,i,e.layerUid,e.graphicUid)}),e.calculateShaderTransformation,!0)}addIntersectionResult(e,t,r,i,n,a){const o={type:"external",metadata:{layerUid:n,graphicUid:a}},s=n=>{n.set(o,null,i.results.ground.dist,i.results.ground.normal,i.results.ground.transformation,t,null,null,e,r),n.intersector="OverlayRenderer"};if((null==i.results.min.drapedLayerOrder||t>=i.results.min.drapedLayerOrder)&&(null==i.results.min.dist||i.results.ground.dist<=i.results.min.dist)&&s(i.results.min),0!==i.options.store&&(null==i.results.max.drapedLayerOrder||t<i.results.max.drapedLayerOrder)&&(null==i.results.max.dist||i.results.ground.dist>i.results.max.dist)&&s(i.results.max),2===i.options.store){const e=new H.b(i.ray);s(e),i.results.all.push(e)}}stopAnimationsAtTime(e){this._sortedLayerRenderers.forAll((t=>t.renderer.stopAnimationsAtTime(e)))}ensureLayerRenderer(e){let t=this._layerRenderers.get(e);return t||(t=new et({rctx:this._rctx,materialRepository:this._materialRepository}),this._layerRenderers.set(e,t),this._sortedLayerRenderersDirty=!0,"fullOpacity"in e&&this._handles.add(e.watch("fullOpacity",(()=>this.emitContentChanged())),e),this._handles.add(Object(O.a)(t,"updating",(()=>this.notifyChange("updating"))),e)),t}updateSortedLayerRenderers(){if(!this._sortedLayerRenderersDirty)return;if(this._sortedLayerRenderersDirty=!1,this._sortedLayerRenderers.clear(),0===this._layerRenderers.size)return;const[{view:{allLayerViews:e}}]=this._layerRenderers.keys(),t=new Set(this._layerRenderers.values());e.forEach((e=>{const r=e,i=this._layerRenderers.get(r);i&&(this._sortedLayerRenderers.push(new Ot(r,i)),t.delete(i))})),t.forEach((e=>{this._sortedLayerRenderers.push(new Ot(null,e))}))}setViewParameters(e,t){t.viewport=e.viewport;const r=e.extent;Object(R.n)(t.projectionMatrix,0,r[2]-r[0],0,r[3]-r[1],t.near,t.far),Object(R.i)(t.viewMatrix),Object(R.s)(t.viewMatrix,t.viewMatrix,[-e.extent[0],-e.extent[1],0]),t.setGLViewport(this._rctx),this._renderContext.camera=t,this._bindParameters.camera=t,this._bindParameters.inverseViewport[0]=1/t.fullViewport[2],this._bindParameters.inverseViewport[1]=1/t.fullViewport[3]}hasNonZeroSizedView(e){for(let t=0;t<e.numViews;t++){const r=e.views[t];if(r.extent[0]!==r.extent[2]&&r.extent[1]!==r.extent[3])return!0}return!1}emitContentChanged(){this.onContentChanged&&this.onContentChanged()}updateHasWater(){const e=Object(C.a)(this._layerRenderers,(e=>e.hasWater));e!==this._hasWater&&(this._hasWater=e)}updateHasHighlights(){const e=Object(C.a)(this._layerRenderers,(e=>e.hasHighlights));e!==this._hasHighlights&&(this._hasHighlights=e,this.onHasHighlightsChanged&&this.onHasHighlightsChanged(this._hasHighlights))}updateRendersOccluded(){const e=Object(C.a)(this._layerRenderers,(e=>e.rendersOccluded));e!==this._rendersOccluded&&(this._rendersOccluded=e,this.onRendersOccludedChanged&&this.onRendersOccludedChanged(this.rendersOccluded))}drawDebugTexture(e,t,r){const i=this._rctx;this.ensureDebugPatternResources(e,t);const n=this._debugTextureTechnique.program;i.bindProgram(n),i.setPipelineState(this._debugTextureTechnique.pipeline),n.setUniform4f("color",r[0],r[1],r[2],1),n.setUniform1i("tex",0),i.bindTexture(this._debugPatternTexture,0),i.bindVAO(this._quadVAO),i.drawArrays(5,0,Object(E.f)(this._quadVAO,"geometry"))}ensureDebugPatternResources(e,t){if(this._debugPatternTexture)return;const r=new Uint8Array(e*t*4);let i=0;for(let a=0;a<t;a++)for(let n=0;n<e;n++){const o=Math.floor(n/10),s=Math.floor(a/10);o<2||s<2||10*o>e-20||10*s>t-20?(r[i++]=255,r[i++]=255,r[i++]=255,r[i++]=255):(r[i++]=255,r[i++]=255,r[i++]=255,r[i++]=1&o&&1&s?1&n^1&a?0:255:1&o^1&s?0:128)}this._debugPatternTexture=new T.a(this._rctx,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:e,height:t},r);const n=new it;n.hasAlpha=!0,this._debugTextureTechnique=this._shaderTechniqueRepository.acquireAndReleaseExisting(rt,n,this._debugTextureTechnique),this._quadVAO=Object(M.b)(this._rctx)}get test(){return{layerRenderers:this._layerRenderers}}};Object(g.a)([Object(F.c)()],xt.prototype,"_shaderTechniqueRepository",void 0),Object(g.a)([Object(F.c)()],xt.prototype,"_stippleTextureRepository",void 0),Object(g.a)([Object(v.b)(),Object(F.c)()],xt.prototype,"waterTextureRepository",void 0),Object(g.a)([Object(v.b)({constructOnly:!0})],xt.prototype,"renderView",void 0),Object(g.a)([Object(v.b)({constructOnly:!0})],xt.prototype,"scheduler",void 0),Object(g.a)([Object(v.b)()],xt.prototype,"globalUnitScale",void 0),Object(g.a)([Object(v.b)({type:Boolean,readOnly:!0})],xt.prototype,"updating",null),xt=Object(g.a)([Object(b.a)("esri.views.3d.terrain.OverlayRenderer")],xt);class Ot{constructor(e,t){this.layerView=e,this.renderer=t}}const Rt=[[1,.5,.5],[.5,.5,1],[.5,1,.5]],jt=new L.a;jt.near=1,jt.far=1e4,jt.relativeElevation=null;const Ct=Object(o.e)(),St=Object(o.e)(),Tt=4;var Et=r(243);Et.b;const Mt=Et.a;function Dt(e){const t=[],r=[];!function(e,t,r){const{attributeData:{position:n},removeDuplicateStartEnd:a}=e,o=function(e){const t=e.length;return e[0]===e[t-3]&&e[1]===e[t-2]&&e[2]===e[t-1]}(n)&&1===a,s=n.length/3-(o?1:0),l=new Uint32Array(2*(s-1)),d=o?Object(i.m)(n,0,n.length-3):n;let c=0;for(let i=0;i<s-1;i++)l[c++]=i,l[c++]=i+1;t.push(["position",{size:3,data:d,exclusive:o}]),r.push(["position",l])}(e,r,t);const o=r[0][1].data,l=t[0][1].length,d=new Uint16Array(l);return function(e,t,r){const i=e.attributeData.mapPosition;Object(n.j)(i)||(r.push(["mapPos",r[0][1]]),t.push(["mapPos",{size:3,data:i}]))}(e,r,t),function(e,t,r,i){if(Object(n.k)(e.attributeData.colorFeature))return;const a=e.attributeData.color;t.push(["color",{size:4,data:Object(n.r)(a,Mt)}]),r.push(["color",i])}(e,r,t,d),function(e,t,r,i){if(Object(n.k)(e.attributeData.sizeFeature))return;const a=e.attributeData.size;t.push(["size",{size:1,data:[Object(n.r)(a,1)]}]),r.push(["size",i])}(e,r,t,d),function(e,t,r,i){const a=e.attributeData.colorFeature;Object(n.j)(a)||(t.push(["colorFeatureAttribute",{size:1,data:new Float32Array([a])}]),r.push(["color",i]))}(e,r,t,d),function(e,t,r,i){const a=e.attributeData.sizeFeature;Object(n.j)(a)||(t.push(["sizeFeatureAttribute",{size:1,data:new Float32Array([a])}]),r.push(["sizeFeatureAttribute",i]))}(e,r,t,d),function(e,t,r,i){const a=e.attributeData.opacityFeature;Object(n.j)(a)||(t.push(["opacityFeatureAttribute",{size:1,data:new Float32Array([a])}]),r.push(["opacityFeatureAttribute",i]))}(e,r,t,d),function(e,t,r,i){if("round"!==e.join)return;const o=i.length/3,l=new Float32Array(o),d=Lt,c=Nt;Object(s.v)(d,0,0,0);const h=Object(n.r)(e.uniformSize,1);for(let n=-1;n<o;++n){const e=n<0?o+n:n,t=(n+1)%o;if(Object(s.v)(c,i[3*t+0]-i[3*e+0],i[3*t+1]-i[3*e+1],i[3*t+2]-i[3*e+2]),Object(s.q)(c,c),n>=0){const e=(Math.PI-Object(a.b)(Object(s.g)(d,c)))*zt*1*Ht(h);l[n]=Math.max(Math.floor(e),0)}Object(s.d)(d,c,-1)}t.push(["subdivisions",{size:1,data:l}]),r.push(["subdivisions",r[0][1]])}(e,r,t,o),new f.a(r,t,2)}function It(e,t,r,i){const n="polygon"===e.type?1:0,a="polygon"===e.type?e.rings:e.paths,{position:o,outlines:s}=c(a,e.hasZ,n),l=new Float64Array(o.length),d=Object(p.b)(o,e.spatialReference,0,l,0,o,0,o.length/3,t,r,i),h=null!=d;return{lines:h?Pt(s,o,l):[],projectionSuccess:h,sampledElevation:d}}function Pt(e,t,r){const i=new Array;for(const{index:n,count:a}of e){if(a<=1)continue;const e=3*n,o=e+3*a;i.push({position:t.subarray(e,o),mapPosition:r?r.subarray(e,o):void 0})}return i}function At(e,t){const r="polygon"===e.type?1:0,i="polygon"===e.type?e.rings:e.paths,{position:n,outlines:a}=c(i,!1,r),o=Object(l.k)(n,e.spatialReference,0,n,t,0,n.length/3);for(let s=2;s<n.length;s+=3)n[s]=-2;return{lines:o?Pt(a,n):[],projectionSuccess:o}}function Ht(e){return 1.863798+-2.0062872/(1+e/18.2313)**.8856294}const Lt=Object(o.e)(),Nt=Object(o.e)(),zt=4/Math.PI},970:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var i=r(164),n=r(918),a=r(881);function o(e){e.fragment.code.add(i.a`
    const float GAMMA = 2.2;
    const float INV_GAMMA = 0.4545454545;

    vec4 delinearizeGamma(vec4 color) {
      return vec4(pow(color.rgb, vec3(INV_GAMMA)), color.w);
    }

    vec3 linearizeGamma(vec3 color) {
      return pow(color, vec3(GAMMA));
    }
  `)}var s=r(754);function l(e,t){e.include(s.a,t),e.include(o),e.include(a.a),t.ssrEnabled&&e.include(n.a,t),e.fragment.constants.add("fresnelSky","vec3",[.02,1,15]).add("fresnelMaterial","vec2",[.02,.1]).add("roughness","float",.015).add("foamIntensityExternal","float",1.7).add("ssrIntensity","float",.65).add("ssrHeightFadeStart","float",3e5).add("ssrHeightFadeEnd","float",5e5).add("waterDiffusion","float",.775).add("waterSeeColorMod","float",.8).add("correctionViewingPowerFactor","float",.4).add("skyZenitColor","vec3",[.52,.68,.9]).add("skyColor","vec3",[.67,.79,.9]),e.fragment.code.add(i.a`
    PBRShadingWater shadingInfo;

    /*
    *   This function is an approximation for the sky gradient reflected
    *   the water surface and describes a combination of two fresnel terms.
    *   @parameter: cosTheta = is the result of max(dot(n,v), 0.0)
    *   @parameter: horizon = the dominant color of the sky horizon
    *   @parameter: cosTheta = the dominant color of the sky zenit
    */
    vec3 getSkyGradientColor(in float cosTheta, in vec3 horizon, in vec3 zenit) {
      float exponent = pow((1.0 - cosTheta), fresnelSky[2]);
      return mix(zenit, horizon, exponent);
    }

    /*
    *   This function determines the water color per pixel.
    *   @parameter: n = normal facing away from the surface
    *   @parameter: v = view direction facing away from the surface.
    *   @parameter: l = light direction facing away from the surface
    *   @parameter: lightIntensity = light intensity, currently between 0...PI
    *   @parameter: localUp = a normal for the general direction of the surface
    *   @parameter: shadow = the amount of shadow at this pixel (0 = no shadow)
    */
    vec3 getSeaColor(in vec3 n, in vec3 v, in vec3 l, vec3 color, in vec3 lightIntensity, in vec3 localUp, in float shadow, float foamIntensity, vec3 positionView) {

      float reflectionHit = 0.;
      vec3 seaWaterColor = linearizeGamma(color);
      // using half vector to determine the specular light
      vec3 h = normalize(l + v);
      shadingInfo.NdotL = clamp(dot(n, l), 0.0, 1.0);
      shadingInfo.NdotV = clamp(dot(n, v), 0.001, 1.0);
      shadingInfo.VdotN = clamp(dot(v, n), 0.001, 1.0);
      shadingInfo.NdotH = clamp(dot(n, h), 0.0, 1.0);
      shadingInfo.VdotH = clamp(dot(v, h), 0.0, 1.0);
      shadingInfo.LdotH = clamp(dot(l, h), 0.0, 1.0);

      // angle between vertex normal and view direction
      float upDotV = max(dot(localUp,v), 0.0);
      // reflected sky color: the reflected sky color consists of two main colors, the
      // reflected color at the horizon and the reflected color of the zenit.
      // the reflected sky color is then an approximation based on the fresnel term.
      vec3 skyHorizon = linearizeGamma(skyColor);
      vec3 skyZenit = linearizeGamma(skyZenitColor);
      vec3 skyColor = getSkyGradientColor(upDotV, skyHorizon, skyZenit );

      // we use the upDotL to smoothen out the
      // reflected color of the water
      float upDotL = max(dot(localUp,l),0.0);

      // The approximated sky color is adjusted according to the sun position.
      // This is done as approximation for e.g. night views.
      float daytimeMod = 0.1 + upDotL * 0.9;
      skyColor *= daytimeMod;

      // If a water surface is in shadow we just use a slight darkening of the
      // water surface expressed with this shadowModifier.
      float shadowModifier = clamp(shadow, 0.8, 1.0);

      // The reflected sky color consists of the fresnel reflection multiplied with the approximated sky color.
      // The shadow is influencing the frensel term to keep the shadow impression for really near views. As long
      // as reflection are absent there is a need to have a slight shadow for depth perception.
      vec3 fresnelModifier = fresnelReflection(shadingInfo.VdotN, vec3(fresnelSky[0]), fresnelSky[1]);
      vec3 reflSky = fresnelModifier * skyColor * shadowModifier;

      // The reflected sea color is the input water color combined with the reflected sky color.
      // The reflected sky color is modified by the incoming light.
      vec3 reflSea = seaWaterColor * mix(skyColor, upDotL * lightIntensity * LIGHT_NORMALIZATION, 2.0 / 3.0) * shadowModifier;

      vec3 specular = vec3(0.0);
      // This prevents the specular light to be rendered when:
      // - sun is behind a polygon (e.g. sundown for elevated polygons where nDotL might be still ok)
      // - viewer is under water (for this localUp is better than n)
      if(upDotV > 0.0 && upDotL > 0.0) {
        // calculate the cook torrance BRDF but with simplified occlusion
        vec3 specularSun = brdfSpecularWater(shadingInfo, roughness, vec3(fresnelMaterial[0]), fresnelMaterial[1]);

        // Normalize light intensity to be between 0...1. Shadow cancels out specular light here
        vec3 incidentLight = lightIntensity * LIGHT_NORMALIZATION * shadow;

        specular = shadingInfo.NdotL * incidentLight * specularSun;
      }

      vec3 foam = vec3(0.0);
      if(upDotV > 0.0) {
        foam = foamIntensity2FoamColor(foamIntensityExternal, foamIntensity, skyZenitColor, daytimeMod);
      }
      `),t.ssrEnabled?e.fragment.code.add(i.a`
      // Convert the world position to view position
      vec4 viewPosition = vec4(positionView.xyz, 1.0);
      vec3 viewDir = normalize(viewPosition.xyz);
      vec4 viewNormalVectorCoordinate = ssrViewMat *vec4(n, 0.0);
      vec3 viewNormal = normalize(viewNormalVectorCoordinate.xyz);
      vec4 viewUp = ssrViewMat *vec4(localUp, 0.0);

      // at steeper viewing angles we use more of a vertex normal (in this case up) then the wave normal
      // this removes some artifacts of normal mapping
      float correctionViewingFactor = pow(max(dot(-viewDir, viewUp.xyz), 0.0), correctionViewingPowerFactor);
      vec3 viewNormalCorrected = mix(viewUp.xyz, viewNormal, correctionViewingFactor);

      vec3 reflected = normalize(reflect(viewDir, viewNormalCorrected));

      // perform screen space reflection to detect hit
      vec3 hitCoordinate = screenSpaceIntersection( normalize(reflected), viewPosition.xyz, viewDir, viewUp.xyz);
      vec3 reflectedColor = vec3(0.0);

      // if there is a hit with ssr find reflected color from the reprojeted frame
      if (hitCoordinate.z > 0.0)
      {
        vec2 reprojectedCoordinate = reprojectionCoordinate(hitCoordinate);

        // fade out if there if the hit is near end of Y axis
        vec2 dCoords = smoothstep(0.3, 0.6, abs(vec2(0.5, 0.5) - hitCoordinate.xy));
        float heightMod = smoothstep(ssrHeightFadeEnd, ssrHeightFadeStart, -positionView.z);
        reflectionHit = waterDiffusion * clamp(1.0 - (1.3*dCoords.y), 0.0, 1.0) * heightMod;

        reflectedColor = linearizeGamma(texture2D(lastFrameColorMap, reprojectedCoordinate).xyz)* reflectionHit * fresnelModifier.y * ssrIntensity;
      }
      float seeColorMod =  mix(waterSeeColorMod, waterSeeColorMod*0.5, reflectionHit);
      // combining reflected sky, reflected sea, specular highlight and SSR reflections.
      return tonemapACES((1. - reflectionHit) * reflSky + reflectedColor + reflSea * seeColorMod + specular + foam);
    }
  `):e.fragment.code.add(i.a`
      // combining reflected sky, reflected sea, specular highlight and SSR reflections.
      return tonemapACES(reflSky + reflSea * waterSeeColorMod + specular + foam);
    }
  `)}}}]);
//# sourceMappingURL=14.3fa27a45.chunk.js.map