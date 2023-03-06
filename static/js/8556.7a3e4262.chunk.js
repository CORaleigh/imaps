"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[8556],{65630:(e,t,o)=>{o.d(t,{D:()=>U,b:()=>k});var r=o(92026),a=o(81949),i=o(22357),n=o(83734),s=o(37081),l=o(33280),c=o(94951),d=o(81221),u=o(73782),p=o(52276),m=o(53230),h=o(60113),v=o(48655),f=o(85380),g=o(49223),x=o(6781),T=o(38171),b=o(30694),y=o(34975),C=o(92395),M=o(15226),w=o(96658),S=o(2116),O=o(41481),A=o(58335),_=o(79154),H=o(18607),L=o(26461),N=o(65974),P=o(71033),R=o(82552),I=o(49450),D=o(95276),E=o(58406),V=o(98634),B=o(8654),z=o(64201),F=o(19253),G=o(25920),$=o(4760);function k(e){const t=new z.kG,{vertex:o,fragment:k,varyings:U}=t;return(0,R.Sv)(o,e),t.include(p.f),U.add("vpos","vec3"),t.include(H.k,e),t.include(d.f,e),t.include(g.L,e),e.hasColorTextureTransform&&t.include(_.av),e.output!==s.H.Color&&e.output!==s.H.Alpha||(e.hasNormalTextureTransform&&t.include(_.NI),e.hasEmissionTextureTransform&&t.include(_.R5),e.hasOcclusionTextureTransform&&t.include(_.jF),e.hasMetallicRoughnessTextureTransform&&t.include(_.DT),(0,R.hY)(o,e),t.include(u.O,e),t.include(c.w,e),e.normalType===u.h.Attribute&&e.offsetBackfaces&&t.include(n.w),t.include(T.Q,e),t.include(f.Bb,e),e.instancedColor&&t.attributes.add($.T.INSTANCECOLOR,"vec4"),U.add("localvpos","vec3"),t.include(h.D,e),t.include(i.qj,e),t.include(m.R,e),t.include(v.c,e),o.uniforms.add(new D.N("externalColor",(e=>e.externalColor))),U.add("vcolorExt","vec4"),e.hasMultipassTerrain&&U.add("depth","float"),e.hasModelTransformation&&o.uniforms.add(new B.g("model",(e=>(0,r.pC)(e.modelTransformation)?e.modelTransformation:a.I))),o.code.add(V.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${V.H.float(L.b)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${e.normalType===u.h.Attribute?V.H`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${e.hasModelTransformation?"model,":""} vpos);
          ${e.normalType===u.h.Attribute&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${e.hasColorTextureTransform?V.H`forwardColorUV();`:""}
        ${e.hasNormalTextureTransform?V.H`forwardNormalUV();`:""}
        ${e.hasEmissionTextureTransform?V.H`forwardEmissiveUV();`:""}
        ${e.hasOcclusionTextureTransform?V.H`forwardOcclusionUV();`:""}
        ${e.hasMetallicRoughnessTextureTransform?V.H`forwardMetallicRoughnessUV();`:""}
      }
    `)),e.output===s.H.Alpha&&(t.include(l.f5,e),t.include(N.z,e),t.include(M.l,e),k.uniforms.add([new E.p("opacity",(e=>e.opacity)),new E.p("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&k.uniforms.add(new F.A("tex",(e=>e.texture))),k.include(P.y),k.code.add(V.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?V.H`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?V.H`colorUV`:V.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:V.H`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?V.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:V.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===s.H.Color&&(t.include(l.f5,e),t.include(y.XP,e),t.include(b.K,e),t.include(N.z,e),t.include(e.instancedDoublePrecision?A.hb:A.XE,e),t.include(M.l,e),(0,R.hY)(k,e),k.uniforms.add([o.uniforms.get("localOrigin"),new I.J("ambient",(e=>e.ambient)),new I.J("diffuse",(e=>e.diffuse)),new E.p("opacity",(e=>e.opacity)),new E.p("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&k.uniforms.add(new F.A("tex",(e=>e.texture))),t.include(O.jV,e),t.include(S.T,e),k.include(P.y),t.include(w.k,e),(0,y.PN)(k),(0,y.sC)(k),(0,C.F1)(k),k.code.add(V.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?V.H`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?V.H`colorUV`:V.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:V.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===u.h.ScreenDerivative?V.H`
                vec3 normal = screenDerivativeNormal(localvpos);`:V.H`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===O.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${e.receiveShadows?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?V.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:V.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?V.H`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`:V.H`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?V.H`normalize(posWorld);`:V.H`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?V.H`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===O.f7.Normal||e.pbrMode===O.f7.Schematic?V.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?V.H`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:V.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===G.A.Color?V.H`gl_FragColor = premultiplyAlpha(gl_FragColor);`:""}
      }
    `)),t.include(x.s,e),t}const U=Object.freeze(Object.defineProperty({__proto__:null,build:k},Symbol.toStringTag,{value:"Module"}))},40563:(e,t,o)=>{o.d(t,{R:()=>V,b:()=>E});var r=o(22357),a=o(83734),i=o(37081),n=o(33280),s=o(94951),l=o(81221),c=o(73782),d=o(52276),u=o(53230),p=o(60113),m=o(48655),h=o(49223),v=o(6781),f=o(30694),g=o(34975),x=o(92395),T=o(15226),b=o(2116),y=o(41481),C=o(58335),M=o(18607),w=o(26461),S=o(65974),O=o(71033),A=o(82552),_=o(49450),H=o(95276),L=o(58406),N=o(98634),P=o(64201),R=o(19253),I=o(25920),D=o(4760);function E(e){const t=new P.kG,{vertex:o,fragment:E,varyings:V}=t;return(0,A.Sv)(o,e),t.include(d.f),V.add("vpos","vec3"),t.include(M.k,e),t.include(l.f,e),t.include(h.L,e),e.output!==i.H.Color&&e.output!==i.H.Alpha||((0,A.hY)(t.vertex,e),t.include(c.O,e),t.include(s.w,e),e.offsetBackfaces&&t.include(a.w),e.instancedColor&&t.attributes.add(D.T.INSTANCECOLOR,"vec4"),V.add("vNormalWorld","vec3"),V.add("localvpos","vec3"),e.hasMultipassTerrain&&V.add("depth","float"),t.include(p.D,e),t.include(r.qj,e),t.include(u.R,e),t.include(m.c,e),o.uniforms.add(new H.N("externalColor",(e=>e.externalColor))),V.add("vcolorExt","vec4"),o.code.add(N.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${N.H.float(w.b)}) {
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
          ${e.hasMultipassTerrain?N.H`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===i.H.Alpha&&(t.include(n.f5,e),t.include(S.z,e),t.include(T.l,e),E.uniforms.add([new L.p("opacity",(e=>e.opacity)),new L.p("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&E.uniforms.add(new R.A("tex",(e=>e.texture))),E.include(O.y),E.code.add(N.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?N.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?N.H`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?N.H`colorUV`:N.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:N.H`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?N.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:N.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===i.H.Color&&(t.include(n.f5,e),t.include(g.XP,e),t.include(f.K,e),t.include(S.z,e),t.include(e.instancedDoublePrecision?C.hb:C.XE,e),t.include(T.l,e),(0,A.hY)(t.fragment,e),(0,x.Pe)(E),(0,g.PN)(E),(0,g.sC)(E),E.uniforms.add([o.uniforms.get("localOrigin"),o.uniforms.get("view"),new _.J("ambient",(e=>e.ambient)),new _.J("diffuse",(e=>e.diffuse)),new L.p("opacity",(e=>e.opacity)),new L.p("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&E.uniforms.add(new R.A("tex",(e=>e.texture))),t.include(y.jV,e),t.include(b.T,e),E.include(O.y),t.extensions.add("GL_OES_standard_derivatives"),(0,x.F1)(E),E.code.add(N.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?N.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?N.H`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?N.H`colorUV`:N.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:N.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===y.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?N.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:N.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.snowCover?N.H`albedo = mix(albedo, vec3(1), 0.9);`:N.H``}
        ${N.H`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${e.pbrMode===y.f7.Normal||e.pbrMode===y.f7.Schematic?e.spherical?N.H`vec3 normalGround = normalize(vpos + localOrigin);`:N.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:N.H``}
        ${e.pbrMode===y.f7.Normal||e.pbrMode===y.f7.Schematic?N.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?N.H`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:N.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===I.A.Color?N.H`gl_FragColor = premultiplyAlpha(gl_FragColor);`:N.H``}
      }
    `)),t.include(v.s,e),t}const V=Object.freeze(Object.defineProperty({__proto__:null,build:E},Symbol.toStringTag,{value:"Module"}))},48976:(e,t,o)=>{o.d(t,{c:()=>h,g:()=>d,i:()=>m,j:()=>H,k:()=>f,m:()=>u,r:()=>N,s:()=>c});var r=o(11873),a=o(98131),i=o(71353),n=o(26277),s=o(11186),l=o(90045);function c(e,t,o){o*=.5;const r=Math.sin(o);return e[0]=r*t[0],e[1]=r*t[1],e[2]=r*t[2],e[3]=Math.cos(o),e}function d(e,t){const o=2*Math.acos(t[3]),r=Math.sin(o/2);return r>(0,n.g)()?(e[0]=t[0]/r,e[1]=t[1]/r,e[2]=t[2]/r):(e[0]=1,e[1]=0,e[2]=0),o}function u(e,t,o){const r=t[0],a=t[1],i=t[2],n=t[3],s=o[0],l=o[1],c=o[2],d=o[3];return e[0]=r*d+n*s+a*c-i*l,e[1]=a*d+n*l+i*s-r*c,e[2]=i*d+n*c+r*l-a*s,e[3]=n*d-r*s-a*l-i*c,e}function p(e,t,o,r){const a=t[0],i=t[1],s=t[2],l=t[3];let c,d,u,p,m,h=o[0],v=o[1],f=o[2],g=o[3];return d=a*h+i*v+s*f+l*g,d<0&&(d=-d,h=-h,v=-v,f=-f,g=-g),1-d>(0,n.g)()?(c=Math.acos(d),u=Math.sin(c),p=Math.sin((1-r)*c)/u,m=Math.sin(r*c)/u):(p=1-r,m=r),e[0]=p*a+m*h,e[1]=p*i+m*v,e[2]=p*s+m*f,e[3]=p*l+m*g,e}function m(e,t){const o=t[0],r=t[1],a=t[2],i=t[3],n=o*o+r*r+a*a+i*i,s=n?1/n:0;return e[0]=-o*s,e[1]=-r*s,e[2]=-a*s,e[3]=i*s,e}function h(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function v(e,t){const o=t[0]+t[4]+t[8];let r;if(o>0)r=Math.sqrt(o+1),e[3]=.5*r,r=.5/r,e[0]=(t[5]-t[7])*r,e[1]=(t[6]-t[2])*r,e[2]=(t[1]-t[3])*r;else{let o=0;t[4]>t[0]&&(o=1),t[8]>t[3*o+o]&&(o=2);const a=(o+1)%3,i=(o+2)%3;r=Math.sqrt(t[3*o+o]-t[3*a+a]-t[3*i+i]+1),e[o]=.5*r,r=.5/r,e[3]=(t[3*a+i]-t[3*i+a])*r,e[a]=(t[3*a+o]+t[3*o+a])*r,e[i]=(t[3*i+o]+t[3*o+i])*r}return e}function f(e,t,o,r){const a=.5*Math.PI/180;t*=a,o*=a,r*=a;const i=Math.sin(t),n=Math.cos(t),s=Math.sin(o),l=Math.cos(o),c=Math.sin(r),d=Math.cos(r);return e[0]=i*l*d-n*s*c,e[1]=n*s*d+i*l*c,e[2]=n*l*c-i*s*d,e[3]=n*l*d+i*s*c,e}const g=l.c,x=l.s,T=l.a,b=u,y=l.b,C=l.d,M=l.l,w=l.e,S=w,O=l.f,A=O,_=l.n,H=l.g,L=l.h;function N(e,t,o){const r=(0,s.e)(t,o);return r<-.999999?((0,s.f)(P,R,t),(0,s.u)(P)<1e-6&&(0,s.f)(P,I,t),(0,s.n)(P,P),c(e,P,Math.PI),e):r>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):((0,s.f)(P,t,o),e[0]=P[0],e[1]=P[1],e[2]=P[2],e[3]=1+r,_(e,e))}const P=(0,i.c)(),R=(0,i.f)(1,0,0),I=(0,i.f)(0,1,0);const D=(0,a.a)(),E=(0,a.a)();const V=(0,r.c)();Object.freeze(Object.defineProperty({__proto__:null,add:T,calculateW:function(e,t){const o=t[0],r=t[1],a=t[2];return e[0]=o,e[1]=r,e[2]=a,e[3]=Math.sqrt(Math.abs(1-o*o-r*r-a*a)),e},conjugate:h,copy:g,dot:C,equals:L,exactEquals:H,fromEuler:f,fromMat3:v,getAxisAngle:d,identity:function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e},invert:m,len:S,length:w,lerp:M,mul:b,multiply:u,normalize:_,random:function(e){const t=n.R,o=t(),r=t(),a=t(),i=Math.sqrt(1-o),s=Math.sqrt(o);return e[0]=i*Math.sin(2*Math.PI*r),e[1]=i*Math.cos(2*Math.PI*r),e[2]=s*Math.sin(2*Math.PI*a),e[3]=s*Math.cos(2*Math.PI*a),e},rotateX:function(e,t,o){o*=.5;const r=t[0],a=t[1],i=t[2],n=t[3],s=Math.sin(o),l=Math.cos(o);return e[0]=r*l+n*s,e[1]=a*l+i*s,e[2]=i*l-a*s,e[3]=n*l-r*s,e},rotateY:function(e,t,o){o*=.5;const r=t[0],a=t[1],i=t[2],n=t[3],s=Math.sin(o),l=Math.cos(o);return e[0]=r*l-i*s,e[1]=a*l+n*s,e[2]=i*l+r*s,e[3]=n*l-a*s,e},rotateZ:function(e,t,o){o*=.5;const r=t[0],a=t[1],i=t[2],n=t[3],s=Math.sin(o),l=Math.cos(o);return e[0]=r*l+a*s,e[1]=a*l-r*s,e[2]=i*l+n*s,e[3]=n*l-i*s,e},rotationTo:N,scale:y,set:x,setAxes:function(e,t,o,r){const a=V;return a[0]=o[0],a[3]=o[1],a[6]=o[2],a[1]=r[0],a[4]=r[1],a[7]=r[2],a[2]=-t[0],a[5]=-t[1],a[8]=-t[2],_(e,v(e,a))},setAxisAngle:c,slerp:p,sqlerp:function(e,t,o,r,a,i){return p(D,t,a,i),p(E,o,r,i),p(e,D,E,2*i*(1-i)),e},sqrLen:A,squaredLength:O,str:function(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"}},Symbol.toStringTag,{value:"Module"}))},32035:(e,t,o)=>{o.d(t,{a:()=>i,b:()=>l,n:()=>s,s:()=>n,t:()=>a});var r=o(77873);function a(e,t,o){if(e.count!==t.count)return void r.c.error("source and destination buffers need to have the same number of elements");const a=e.count,i=o[0],n=o[1],s=o[2],l=o[4],c=o[5],d=o[6],u=o[8],p=o[9],m=o[10],h=o[12],v=o[13],f=o[14],g=e.typedBuffer,x=e.typedBufferStride,T=t.typedBuffer,b=t.typedBufferStride;for(let r=0;r<a;r++){const e=r*x,t=r*b,o=T[t],a=T[t+1],y=T[t+2];g[e]=i*o+l*a+u*y+h,g[e+1]=n*o+c*a+p*y+v,g[e+2]=s*o+d*a+m*y+f}}function i(e,t,o){if(e.count!==t.count)return void r.c.error("source and destination buffers need to have the same number of elements");const a=e.count,i=o[0],n=o[1],s=o[2],l=o[3],c=o[4],d=o[5],u=o[6],p=o[7],m=o[8],h=e.typedBuffer,v=e.typedBufferStride,f=t.typedBuffer,g=t.typedBufferStride;for(let r=0;r<a;r++){const e=r*v,t=r*g,o=f[t],a=f[t+1],x=f[t+2];h[e]=i*o+l*a+u*x,h[e+1]=n*o+c*a+p*x,h[e+2]=s*o+d*a+m*x}}function n(e,t,o){const r=Math.min(e.count,t.count),a=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,s=t.typedBufferStride;for(let l=0;l<r;l++){const e=l*i,t=l*s;a[e]=o*n[t],a[e+1]=o*n[t+1],a[e+2]=o*n[t+2]}}function s(e,t){const o=Math.min(e.count,t.count),r=e.typedBuffer,a=e.typedBufferStride,i=t.typedBuffer,n=t.typedBufferStride;for(let s=0;s<o;s++){const e=s*a,t=s*n,o=i[t],l=i[t+1],c=i[t+2],d=o*o+l*l+c*c;if(d>0){const t=1/Math.sqrt(d);r[e]=t*o,r[e+1]=t*l,r[e+2]=t*c}}}function l(e,t,o){const r=Math.min(e.count,t.count),a=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,s=t.typedBufferStride;for(let l=0;l<r;l++){const e=l*i,t=l*s;a[e]=n[t]>>o,a[e+1]=n[t+1]>>o,a[e+2]=n[t+2]>>o}}Object.freeze(Object.defineProperty({__proto__:null,normalize:s,scale:n,shiftRight:l,transformMat3:i,transformMat4:a},Symbol.toStringTag,{value:"Module"}))},92770:(e,t,o)=>{function r(e,t,o){const r=e.typedBuffer,a=e.typedBufferStride,i=t.typedBuffer,n=t.typedBufferStride,s=o?o.count:t.count;let l=(o&&o.dstIndex?o.dstIndex:0)*a,c=(o&&o.srcIndex?o.srcIndex:0)*n;for(let d=0;d<s;++d)r[l]=i[c],r[l+1]=i[c+1],r[l+2]=i[c+2],l+=a,c+=n}function a(e,t,o,r,a){const i=e.typedBuffer,n=e.typedBufferStride,s=a?.count??e.count;let l=(a?.dstIndex??0)*n;for(let c=0;c<s;++c)i[l]=t,i[l+1]=o,i[l+2]=r,l+=n}o.d(t,{c:()=>r,f:()=>a});Object.freeze(Object.defineProperty({__proto__:null,copy:r,fill:a},Symbol.toStringTag,{value:"Module"}))},77873:(e,t,o)=>{o.d(t,{c:()=>r});const r=o(32718).Z.getLogger("esri.views.3d.support.buffer.math")},99760:(e,t,o)=>{o.d(t,{i:()=>s});var r=o(92026),a=o(23588),i=o(15245),n=o(22753);function s(e){if((0,r.Wi)(e))return null;const t=(0,r.pC)(e.offset)?e.offset:i.Z,o=(0,r.pC)(e.rotation)?e.rotation:0,s=(0,r.pC)(e.scale)?e.scale:i.O,l=(0,a.f)(1,0,0,0,1,0,t[0],t[1],1),c=(0,a.f)(Math.cos(o),-Math.sin(o),0,Math.sin(o),Math.cos(o),0,0,0,1),d=(0,a.f)(s[0],0,0,0,s[1],0,0,0,1),u=(0,a.c)();return(0,n.m)(u,c,d),(0,n.m)(u,l,u),u}},91884:(e,t,o)=>{o.r(t),o.d(t,{fetch:()=>X,gltfToEngineResources:()=>ee,parseUrl:()=>Q});var r=o(71277),a=o(92026),i=o(22753),n=o(11873),s=o(14226),l=o(81949),c=o(11186),d=o(71353),u=o(41414),p=o(25158),m=o(32035),h=o(19093),v=o(17054),f=o(27053),g=o(57516),x=o(32315),T=o(57661),b=o(99760);class y{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class C{constructor(e,t,o){this.name=e,this.lodThreshold=t,this.pivotOffset=o,this.stageResources=new y,this.numberOfVertices=0}}var M=o(76200),w=o(14921),S=o(59896),O=o(10064),A=o(32718),_=o(59447),H=o(66978),L=o(49901),N=o(38330),P=o(91526),R=o(68401),I=o(95774),D=o(76873),E=o(86802),V=o(8548);const B=A.Z.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function z(e,t){const o=await async function(e,t){const o=(0,a.pC)(t)&&t.streamDataRequester;if(o)return async function(e,t,o){const r=await(0,w.q6)(t.request(e,"json",o));if(!0===r.ok)return r.value;(0,H.r9)(r.error),F(r.error.details.url)}(e,o,t);const r=await(0,w.q6)((0,M.default)(e,(0,a.Wg)(t)));if(!0===r.ok)return r.value.data;(0,H.r9)(r.error),F(r.error)}(e,t),r=await async function(e,t){const o=[];for(const n in e){const r=e[n],i=r.images[0].data;if(!i){B.warn("Externally referenced texture data is not yet supported");continue}const s=r.encoding+";base64,"+i,l="/textureDefinitions/"+n,c="rgba"===r.channels?r.alphaChannelUsage||"transparency":"none",d={noUnpackFlip:!0,wrap:{s:V.e8.REPEAT,t:V.e8.REPEAT},preMultiplyAlpha:k(c)!==R.JJ.Opaque},u=(0,a.pC)(t)&&t.disableTextures?Promise.resolve(null):(0,N.t)(s,t);o.push(u.then((e=>({refId:l,image:e,params:d,alphaChannelUsage:c}))))}const r=await Promise.all(o),i={};for(const a of r)i[a.refId]=a;return i}(o.textureDefinitions??{},t);let i=0;for(const a in r)if(r.hasOwnProperty(a)){const e=r[a];i+=e?.image?e.image.width*e.image.height*4:0}return{resource:o,textures:r,size:i+(0,S.Ul)(o)}}function F(e){throw new O.Z("",`Request for object resource failed: ${e}`)}function G(e){const t=e.params,o=t.topology;let r=!0;switch(t.vertexAttributes||(B.warn("Geometry must specify vertex attributes"),r=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const o in t.vertexAttributes){const t=e[o];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(B.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),r=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(B.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),r=!1)):(B.warn(`Indexed geometry does not specify face indices for '${o}' attribute`),r=!1)}}else B.warn("Indexed geometries must specify faces"),r=!1;break}default:B.warn(`Unsupported topology '${o}'`),r=!1}e.params.material||(B.warn("Geometry requires material"),r=!1);const a=e.params.vertexAttributes;for(const i in a)a[i].values||(B.warn("Geometries with externally defined attributes are not yet supported"),r=!1);return r}function $(e){const t=(0,u.cS)();return e.forEach((e=>{const o=e.boundingInfo;(0,a.pC)(o)&&((0,u.pp)(t,o.bbMin),(0,u.pp)(t,o.bbMax))})),t}function k(e){switch(e){case"mask":return R.JJ.Mask;case"maskAndTransparency":return R.JJ.MaskBlend;case"none":return R.JJ.Opaque;default:return R.JJ.Blend}}function U(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const W=new L.G(1,2,"wosr");var j=o(73782),J=o(4760),q=o(68845),Z=o(19131),Y=o(69618),K=o(92770);async function X(e,t){const o=Q((0,r.pJ)(e));if("wosr"===o.fileType){const e=await(t.cache?t.cache.loadWOSR(o.url,t):z(o.url,t)),{engineResources:r,referenceBoundingBox:i}=function(e,t){const o=new Array,r=new Array,i=new Array,n=new _.r,s=e.resource,l=L.G.parse(s.version||"1.0","wosr");W.validate(l);const c=s.model.name,u=s.model.geometries,p=s.materialDefinitions??{},m=e.textures;let h=0;const v=new Map;for(let f=0;f<u.length;f++){const e=u[f];if(!G(e))continue;const s=U(e),l=e.params.vertexAttributes,c=[];for(const t in l){const e=l[t],o=e.values;c.push([t,new P.a(o,e.valuesPerElement,!0)])}const g=[];if("PerAttributeArray"!==e.params.topology){const t=e.params.faces;for(const e in t)g.push([e,t[e].values])}const x=s.texture,T=m&&m[x];if(T&&!v.has(x)){const{image:e,params:t}=T,o=new D.x(e,t);r.push(o),v.set(x,o)}const b=v.get(x),y=b?b.id:void 0,C=s.material;let M=n.get(C,x);if((0,a.Wi)(M)){const e=p[C.substring(C.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const o=T&&T.alphaChannelUsage,r=e.transparency>0||"transparency"===o||"maskAndTransparency"===o,i=T?k(T.alphaChannelUsage):void 0,s={ambient:(0,d.d)(e.diffuse),diffuse:(0,d.d)(e.diffuse),opacity:1-(e.transparency||0),transparent:r,textureAlphaMode:i,textureAlphaCutoff:.33,textureId:y,initTextureTransparent:!0,doubleSided:!0,cullFace:R.Vr.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!T&&!!T.params.preMultiplyAlpha};(0,a.pC)(t)&&t.materialParamsMixin&&Object.assign(s,t.materialParamsMixin),M=new E.Gp(s),n.set(C,x,M)}i.push(M);const w=new I.Z(M,c,g);h+=g.position?g.position.length:0,o.push(w)}return{engineResources:[{name:c,stageResources:{textures:r,materials:i,geometries:o},pivotOffset:s.model.pivotOffset,numberOfVertices:h,lodThreshold:null}],referenceBoundingBox:$(o)}}(e,t);return{lods:r,referenceBoundingBox:i,isEsriSymbolResource:!1,isWosr:!0}}const i=await(t.cache?t.cache.loadGLTF(o.url,t,!!t.usePBR):(0,g.Q)(new f.C(t.streamDataRequester),o.url,t,t.usePBR)),n=(0,a.U2)(i.model.meta,"ESRI_proxyEllipsoid"),u=i.meta.isEsriSymbolResource&&(0,a.pC)(n)&&i.meta.uri.includes("/RealisticTrees/");u&&!i.customMeta.esriTreeRendering&&(i.customMeta.esriTreeRendering=!0,function(e,t){for(let o=0;o<e.model.lods.length;++o){const r=e.model.lods[o];for(const i of r.parts){const r=i.attributes.normal;if((0,a.Wi)(r))return;const n=i.attributes.position,u=n.count,m=(0,d.c)(),h=(0,d.c)(),f=(0,d.c)(),g=(0,v.gS)(p.mc,u),x=(0,v.gS)(p.ct,u),T=(0,s.a)((0,l.c)(),i.transform);for(let a=0;a<u;a++){n.getVec(a,h),r.getVec(a,m),(0,c.m)(h,h,i.transform),(0,c.b)(f,h,t.center),(0,c.C)(f,f,t.radius);const s=f[2],l=(0,c.l)(f),d=Math.min(.45+.55*l*l,1);(0,c.C)(f,f,t.radius),null!==T&&(0,c.m)(f,f,T),(0,c.n)(f,f),o+1!==e.model.lods.length&&e.model.lods.length>1&&(0,c.h)(f,f,m,s>-1?.2:Math.min(-4*s-3.8,1)),x.setVec(a,f),g.set(a,0,255*d),g.set(a,1,255*d),g.set(a,2,255*d),g.set(a,3,255)}i.attributes.normal=x,i.attributes.color=g}}}(i,n));const m=!!t.usePBR,h=i.meta.isEsriSymbolResource?{usePBR:m,isSchematic:!1,treeRendering:u,mrrFactors:[0,1,.2]}:{usePBR:m,isSchematic:!1,treeRendering:!1,mrrFactors:[0,1,.5]},x={...t.materialParamsMixin,treeRendering:u},{engineResources:T,referenceBoundingBox:b}=ee(i,h,x,t.skipHighLods&&null==o.specifiedLodIndex?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:o.specifiedLodIndex});return{lods:T,referenceBoundingBox:b,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1}}function Q(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function ee(e,t,o,r){const n=e.model,s=new Array,l=new Map,c=new Map,d=n.lods.length,f=(0,u.cS)();return n.lods.forEach(((e,g)=>{const y=!0===r.skipHighLods&&(d>1&&0===g||d>3&&1===g)||!1===r.skipHighLods&&null!=r.singleLodIndex&&g!==r.singleLodIndex;if(y&&0!==g)return;const M=new C(e.name,e.lodThreshold,[0,0,0]);e.parts.forEach((e=>{const r=y?new E.Gp({}):function(e,t,o,r,i,n,s){const l=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),c=e.materials.get(t.material),d=(0,a.pC)(t.attributes.texCoord0),u=(0,a.pC)(t.attributes.normal);if((0,a.Wi)(c))return null;const p=function(e){switch(e){case"BLEND":return R.JJ.Blend;case"MASK":return R.JJ.Mask;case"OPAQUE":case null:case void 0:return R.JJ.Opaque}}(c.alphaMode);if(!n.has(l)){if(d){const t=function(t){let o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if((0,a.pC)(t)&&!s.has(t)){const r=e.textures.get(t);if((0,a.pC)(r)){const e=r.data;s.set(t,new D.x((0,T.$A)(e)?e.data:e,{...r.parameters,preMultiplyAlpha:!(0,T.$A)(e)&&o,encoding:(0,T.$A)(e)&&(0,a.pC)(e.encoding)?e.encoding:void 0}))}}};t(c.textureColor,p!==R.JJ.Opaque),t(c.textureNormal),t(c.textureOcclusion),t(c.textureEmissive),t(c.textureMetallicRoughness)}const o=c.color[0]**(1/q.K),m=c.color[1]**(1/q.K),h=c.color[2]**(1/q.K),v=c.emissiveFactor[0]**(1/q.K),f=c.emissiveFactor[1]**(1/q.K),g=c.emissiveFactor[2]**(1/q.K),x=(0,a.pC)(c.textureColor)&&d?s.get(c.textureColor):null;n.set(l,new E.Gp({...r,transparent:p===R.JJ.Blend,customDepthTest:R.Gv.Lequal,textureAlphaMode:p,textureAlphaCutoff:c.alphaCutoff,diffuse:[o,m,h],ambient:[o,m,h],opacity:c.opacity,doubleSided:c.doubleSided,doubleSidedType:"winding-order",cullFace:c.doubleSided?R.Vr.None:R.Vr.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:u?j.h.Attribute:j.h.ScreenDerivative,castShadows:!0,receiveSSAO:!0,textureId:(0,a.pC)(x)?x.id:void 0,colorMixMode:c.colorMixMode,normalTextureId:(0,a.pC)(c.textureNormal)&&d?s.get(c.textureNormal).id:void 0,textureAlphaPremultiplied:(0,a.pC)(x)&&!!x.params.preMultiplyAlpha,occlusionTextureId:(0,a.pC)(c.textureOcclusion)&&d?s.get(c.textureOcclusion).id:void 0,emissiveTextureId:(0,a.pC)(c.textureEmissive)&&d?s.get(c.textureEmissive).id:void 0,metallicRoughnessTextureId:(0,a.pC)(c.textureMetallicRoughness)&&d?s.get(c.textureMetallicRoughness).id:void 0,emissiveFactor:[v,f,g],mrrFactors:[c.metallicFactor,c.roughnessFactor,r.mrrFactors[2]],isSchematic:!1,colorTextureTransformMatrix:(0,b.i)(c.colorTextureTransform),normalTextureTransformMatrix:(0,b.i)(c.normalTextureTransform),occlusionTextureTransformMatrix:(0,b.i)(c.occlusionTextureTransform),emissiveTextureTransformMatrix:(0,b.i)(c.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:(0,b.i)(c.metallicRoughnessTextureTransform),...i}))}const m=n.get(l);if(o.stageResources.materials.push(m),d){const e=e=>{(0,a.pC)(e)&&o.stageResources.textures.push(s.get(e))};e(c.textureColor),e(c.textureNormal),e(c.textureOcclusion),e(c.textureEmissive),e(c.textureMetallicRoughness)}return m}(n,e,M,t,o,l,c),{geometry:s,vertexCount:d}=function(e,t){const o=e.attributes.position.count,r=function(e,t){switch(t){case V.MX.TRIANGLES:return(0,x.nh)(e);case V.MX.TRIANGLE_STRIP:return(0,x.DA)(e);case V.MX.TRIANGLE_FAN:return(0,x.jX)(e)}}(e.indices||o,e.primitiveType),n=(0,v.gS)(p.ct,o);(0,m.t)(n,e.attributes.position,e.transform);const s=[[J.T.POSITION,new P.a(n.typedBuffer,n.elementCount,!0)]],l=[[J.T.POSITION,r]];if((0,a.pC)(e.attributes.normal)){const t=(0,v.gS)(p.ct,o);(0,i.b)(te,e.transform),(0,m.a)(t,e.attributes.normal,te),s.push([J.T.NORMAL,new P.a(t.typedBuffer,t.elementCount,!0)]),l.push([J.T.NORMAL,r])}if((0,a.pC)(e.attributes.tangent)){const t=(0,v.gS)(p.ek,o);(0,i.b)(te,e.transform),(0,h.t)(t,e.attributes.tangent,te),s.push([J.T.TANGENT,new P.a(t.typedBuffer,t.elementCount,!0)]),l.push([J.T.TANGENT,r])}if((0,a.pC)(e.attributes.texCoord0)){const t=(0,v.gS)(p.Eu,o);(0,Z.n)(t,e.attributes.texCoord0),s.push([J.T.UV0,new P.a(t.typedBuffer,t.elementCount,!0)]),l.push([J.T.UV0,r])}if((0,a.pC)(e.attributes.color)){const t=(0,v.gS)(p.mc,o);if(4===e.attributes.color.elementCount)e.attributes.color instanceof p.ek?(0,h.s)(t,e.attributes.color,255):e.attributes.color instanceof p.mc?(0,Y.c)(t,e.attributes.color):e.attributes.color instanceof p.v6&&(0,h.s)(t,e.attributes.color,1/256);else{(0,Y.f)(t,255,255,255,255);const o=new p.ne(t.buffer,0,4);e.attributes.color instanceof p.ct?(0,m.s)(o,e.attributes.color,255):e.attributes.color instanceof p.ne?(0,K.c)(o,e.attributes.color):e.attributes.color instanceof p.mw&&(0,m.s)(o,e.attributes.color,1/256)}s.push([J.T.COLOR,new P.a(t.typedBuffer,t.elementCount,!0)]),l.push([J.T.COLOR,r])}return{geometry:new I.Z(t,s,l),vertexCount:o}}(e,(0,a.pC)(r)?r:new E.Gp({})),C=s.boundingInfo;(0,a.pC)(C)&&0===g&&((0,u.pp)(f,C.bbMin),(0,u.pp)(f,C.bbMax)),(0,a.pC)(r)&&(M.stageResources.geometries.push(s),M.numberOfVertices+=d)})),y||s.push(M)})),{engineResources:s,referenceBoundingBox:f}}const te=(0,n.c)()},49420:(e,t,o)=>{o.d(t,{F5:()=>s,HB:()=>l,a9:()=>r});var r,a,i=o(16889),n=o(92026);function s(e){switch(e){case"multiply":default:return r.Multiply;case"ignore":return r.Ignore;case"replace":return r.Replace;case"tint":return r.Tint}}function l(e,t,o){if((0,n.Wi)(e)||t===r.Ignore)return o[0]=255,o[1]=255,o[2]=255,void(o[3]=255);const a=(0,i.uZ)(Math.round(e[3]*d),0,d),s=0===a||t===r.Tint?0:t===r.Replace?u:p;o[0]=(0,i.uZ)(Math.round(e[0]*c),0,c),o[1]=(0,i.uZ)(Math.round(e[1]*c),0,c),o[2]=(0,i.uZ)(Math.round(e[2]*c),0,c),o[3]=a+s}(a=r||(r={}))[a.Multiply=1]="Multiply",a[a.Ignore=2]="Ignore",a[a.Replace=3]="Replace",a[a.Tint=4]="Tint";const c=255,d=85,u=d,p=2*d},83734:(e,t,o)=>{o.d(t,{w:()=>a});var r=o(98634);function a(e){e.vertex.code.add(r.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},81221:(e,t,o)=>{o.d(t,{f:()=>v});var r=o(27366),a=o(11186),i=o(71353),n=o(37081),s=o(27254),l=o(82552),c=o(86471),d=o(98634),u=o(33559),p=o(4760),m=o(43411);class h extends u.m{constructor(){super(...arguments),this.instancedDoublePrecision=!1}}function v(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add(p.T.MODELORIGINHI,"vec3"),e.attributes.add(p.T.MODELORIGINLO,"vec3"),e.attributes.add(p.T.MODEL,"mat3"),e.attributes.add(p.T.MODELNORMAL,"mat3"));const o=e.vertex;t.instancedDoublePrecision&&(o.include(s.$,t),o.uniforms.add(new c.B("viewOriginHi",((e,t)=>(0,m.U8)((0,a.s)(f,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),f)))),o.uniforms.add(new c.B("viewOriginLo",((e,t)=>(0,m.GB)((0,a.s)(f,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),f))))),o.code.add(d.H`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),o.code.add(d.H`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?d.H`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),o.code.add(d.H`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),t.output===n.H.Normal&&((0,l._8)(o),o.code.add(d.H`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),t.hasVertexTangents&&o.code.add(d.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)}(0,r._)([(0,u.o)()],h.prototype,"instancedDoublePrecision",void 0);const f=(0,i.c)()},53230:(e,t,o)=>{o.d(t,{R:()=>c});var r=o(49420),a=o(98634);function i(e){e.vertex.code.add(a.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${a.H.int(r.a9.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${a.H.int(r.a9.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${a.H.int(r.a9.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${a.H.int(r.a9.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}var n=o(99339),s=o(4760),l=o(22909);function c(e,t){t.hasSymbolColors?(e.include(i),e.attributes.add(s.T.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(a.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new n._("colorMixMode",(e=>l.FZ[e.colorMixMode]))),e.vertex.code.add(a.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}},6781:(e,t,o)=>{o.d(t,{s:()=>C});var r=o(92026),a=o(81949),i=o(22357),n=o(37081),s=o(33280),l=o(94951),c=o(73782),d=o(14801),u=o(60113),p=o(85380),m=o(16574),h=o(137),v=o(18607),f=o(65974),g=o(82552),x=o(98634),T=o(8654),b=o(19253),y=o(68401);function C(e,t){const{vertex:o,fragment:C}=e,M=t.hasModelTransformation;M&&o.uniforms.add(new T.g("model",(e=>(0,r.pC)(e.modelTransformation)?e.modelTransformation:a.I)));const w=t.hasColorTexture&&t.alphaDiscardMode!==y.JJ.Opaque;switch(t.output){case n.H.Depth:case n.H.Shadow:case n.H.ShadowHighlight:case n.H.ShadowExcludeHighlight:case n.H.ObjectAndLayerIdColor:(0,g.Sv)(o,t),e.include(l.w,t),e.include(u.D,t),e.include(v.k,t),e.include(m.F,t),e.include(s.f5,t),e.include(d.R,t),(0,i.Zu)(e),e.varyings.add("depth","float"),w&&C.uniforms.add(new b.A("tex",(e=>e.texture))),o.code.add(x.H`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPositionWithDepth(proj, view, ${M?"model,":""} vpos, nearFar, depth);
            forwardTextureCoordinates();
            forwardObjectAndLayerIdColor();
          }
        `),e.include(f.z,t),C.code.add(x.H`
          void main(void) {
            discardBySlice(vpos);
            ${w?x.H`
                    vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?x.H`colorUV`:x.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${t.output===n.H.ObjectAndLayerIdColor?x.H`outputObjectAndLayerIdColor();`:x.H`outputDepth(depth);`}
          }
        `);break;case n.H.Normal:(0,g.Sv)(o,t),e.include(l.w,t),e.include(c.O,t),e.include(p.Bb,t),e.include(u.D,t),e.include(v.k,t),w&&C.uniforms.add(new b.A("tex",(e=>e.texture))),e.varyings.add("vPositionView","vec3"),o.code.add(x.H`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            ${t.normalType===c.h.Attribute?x.H`
            vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${M?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),e.include(s.f5,t),e.include(f.z,t),C.code.add(x.H`
          void main() {
            discardBySlice(vpos);
            ${w?x.H`
                    vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?x.H`colorUV`:x.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${t.normalType===c.h.ScreenDerivative?x.H`
                vec3 normal = screenDerivativeNormal(vPositionView);`:x.H`
                vec3 normal = normalize(vNormalWorld);
                if (gl_FrontFacing == false) normal = -normal;`}
            gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
          }
        `);break;case n.H.Highlight:(0,g.Sv)(o,t),e.include(l.w,t),e.include(u.D,t),e.include(v.k,t),w&&C.uniforms.add(new b.A("tex",(e=>e.texture))),o.code.add(x.H`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${M?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),e.include(s.f5,t),e.include(f.z,t),e.include(h.bA,t),C.code.add(x.H`
          void main() {
            discardBySlice(vpos);
            ${w?x.H`
                    vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?x.H`colorUV`:x.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}},38171:(e,t,o)=>{o.d(t,{Q:()=>m});var r=o(60113),a=o(27284),i=o(96658),n=o(75993),s=o(98634),l=o(78050),c=o(19253),d=o(97528),u=o(99340),p=o(4760);function m(e,t){const o=e.fragment;if(t.hasVertexTangents?(e.attributes.add(p.T.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===i.q.WindingOrder?o.code.add(s.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):o.code.add(s.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),o.code.add(s.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`)),t.textureCoordinateType!==r.N.None){e.include(a.i,t);const r=t.supportsTextureAtlas?t.hasWebGL2Context?d.D.None:d.D.Size:d.D.None;o.uniforms.add(t.pbrTextureBindType===u.P.Pass?(0,c.J)("normalTexture",(e=>e.textureNormal),r):(0,l.F)("normalTexture",(e=>e.textureNormal),r)),o.code.add(s.H`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?s.H`vtc.size = ${(0,n.w_)(t,"normalTexture")};`:""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `)}}},30694:(e,t,o)=>{o.d(t,{K:()=>l});var r=o(75993),a=o(98634),i=o(19253),n=o(97528),s=o(71568);function l(e,t){const o=e.fragment;t.receiveAmbientOcclusion?(o.uniforms.add((0,i.J)("ssaoTex",((e,t)=>t.ssaoHelper.colorTexture),t.hasWebGL2Context?n.D.None:n.D.InvSize)),o.constants.add("blurSizePixelsInverse","float",1/s.s),o.code.add(a.H`
      float evaluateAmbientOcclusionInverse() {
        vec2 ssaoTextureSizeInverse = ${(0,r.w_)(t,"ssaoTex",!0)};
        return texture2D(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).a;
      }

      float evaluateAmbientOcclusion() {
        return 1.0 - evaluateAmbientOcclusionInverse();
      }
    `)):o.code.add(a.H`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}},34975:(e,t,o)=>{o.d(t,{PN:()=>h,XP:()=>f,sC:()=>v});var r=o(41644),a=o(60750),i=o(30694),n=o(92395),s=o(2116),l=o(41481),c=o(85586),d=o(13773),u=o(58406),p=o(98634),m=o(48919);function h(e){e.constants.add("ambientBoostFactor","float",m.V)}function v(e){e.uniforms.add(new u.p("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)))}function f(e,t){const o=e.fragment;switch(e.include(i.K,t),t.pbrMode!==l.f7.Disabled&&e.include(s.T,t),e.include(a._,t),e.include(c.e),o.code.add(p.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===l.f7.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),h(o),v(o),(0,n.Pe)(o),o.code.add(p.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?p.H`normalize(vPosWorld)`:p.H`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,n.F1)(o),o.code.add(p.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case l.f7.Disabled:case l.f7.WaterOnIntegratedMesh:case l.f7.Water:e.include(n.kR,t),o.code.add(p.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case l.f7.Normal:case l.f7.Schematic:o.code.add(p.H`const float fillLightIntensity = 0.25;
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
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),o.code.add(p.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?o.uniforms.add(new d.U("hasFillLights",((e,t)=>t.enableFillLights))):o.constants.add("hasFillLights","bool",!1),o.code.add(p.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),o.uniforms.add([new u.p("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new u.p("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))]),o.code.add(p.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),o.code.add(p.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode===l.f7.Schematic?p.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:p.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case l.f7.Terrain:case l.f7.TerrainWithWater:e.include(n.kR,t),o.code.add(p.H`const float roughnessTerrain = 0.5;
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
}`);break;default:(0,r.Bg)(t.pbrMode);case l.f7.COUNT:}}},96658:(e,t,o)=>{o.d(t,{k:()=>s,q:()=>r});var r,a,i=o(41644),n=o(98634);function s(e,t){const o=e.fragment;switch(o.code.add(n.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case r.None:o.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case r.View:o.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case r.WindingOrder:o.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,i.Bg)(t.doubleSidedMode);case r.COUNT:}}(a=r||(r={}))[a.None=0]="None",a[a.View=1]="View",a[a.WindingOrder=2]="WindingOrder",a[a.COUNT=3]="COUNT"},79154:(e,t,o)=>{o.d(t,{DT:()=>u,NI:()=>l,R5:()=>c,av:()=>s,jF:()=>d});var r=o(92026),a=o(23588),i=o(98634),n=o(35522);function s(e){e.vertex.uniforms.add(new n.c("colorTextureTransformMatrix",(e=>(0,r.pC)(e.colorTextureTransformMatrix)?e.colorTextureTransformMatrix:(0,a.c)()))),e.varyings.add("colorUV","vec2"),e.vertex.code.add(i.H`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function l(e){e.vertex.uniforms.add(new n.c("normalTextureTransformMatrix",(e=>(0,r.pC)(e.normalTextureTransformMatrix)?e.normalTextureTransformMatrix:(0,a.c)()))),e.varyings.add("normalUV","vec2"),e.vertex.code.add(i.H`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function c(e){e.vertex.uniforms.add(new n.c("emissiveTextureTransformMatrix",(e=>(0,r.pC)(e.emissiveTextureTransformMatrix)?e.emissiveTextureTransformMatrix:(0,a.c)()))),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add(i.H`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function d(e){e.vertex.uniforms.add(new n.c("occlusionTextureTransformMatrix",(e=>(0,r.pC)(e.occlusionTextureTransformMatrix)?e.occlusionTextureTransformMatrix:(0,a.c)()))),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add(i.H`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function u(e){e.vertex.uniforms.add(new n.c("metallicRoughnessTextureTransformMatrix",(e=>(0,r.pC)(e.metallicRoughnessTextureTransformMatrix)?e.metallicRoughnessTextureTransformMatrix:(0,a.c)()))),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add(i.H`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}},65974:(e,t,o)=>{o.d(t,{z:()=>l});var r=o(26461),a=o(98634);function i(e){e.fragment.code.add(a.H`
    #define discardOrAdjustAlpha(color) { if (color.a < ${a.H.float(r.b)}) { discard; } }
  `)}o(61809),o(99340);var n=o(58406),s=o(68401);function l(e,t){c(e,t,new n.p("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function c(e,t,o){const r=e.fragment;switch(t.alphaDiscardMode!==s.JJ.Mask&&t.alphaDiscardMode!==s.JJ.MaskBlend||r.uniforms.add(o),t.alphaDiscardMode){case s.JJ.Blend:return e.include(i);case s.JJ.Opaque:r.code.add(a.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case s.JJ.Mask:r.code.add(a.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case s.JJ.MaskBlend:e.fragment.code.add(a.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}},71033:(e,t,o)=>{o.d(t,{y:()=>n});var r=o(49420),a=o(116),i=o(98634);function n(e){e.include(a.Y),e.code.add(i.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${i.H.int(r.a9.Multiply)}) {
        return allMixed;
      }
      if (mode == ${i.H.int(r.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.H.int(r.a9.Replace)}) {
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

      if (mode == ${i.H.int(r.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.H.int(r.a9.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}},86802:(e,t,o)=>{o.d(t,{Gp:()=>P});var r=o(93169),a=o(92026),i=o(11186),n=o(71353),s=o(50951),l=o(55158),c=o(37081),d=o(96658),u=o(41481),p=o(68401),m=o(17363),h=o(56529),v=o(78041),f=o(93822),g=o(4760),x=o(76783),T=o(12594),b=o(22909),y=o(50531),C=o(27366),M=o(73782),w=o(60113),S=o(33559),O=o(25920),A=o(8883);class _ extends A.W{constructor(){super(...arguments),this.output=c.H.Color,this.alphaDiscardMode=p.JJ.Opaque,this.doubleSidedMode=d.q.None,this.pbrMode=u.f7.Disabled,this.cullFace=p.Vr.None,this.transparencyPassType=O.A.NONE,this.normalType=M.h.Attribute,this.textureCoordinateType=w.N.None,this.customDepthTest=p.Gv.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}(0,C._)([(0,S.o)({count:c.H.COUNT})],_.prototype,"output",void 0),(0,C._)([(0,S.o)({count:p.JJ.COUNT})],_.prototype,"alphaDiscardMode",void 0),(0,C._)([(0,S.o)({count:d.q.COUNT})],_.prototype,"doubleSidedMode",void 0),(0,C._)([(0,S.o)({count:u.f7.COUNT})],_.prototype,"pbrMode",void 0),(0,C._)([(0,S.o)({count:p.Vr.COUNT})],_.prototype,"cullFace",void 0),(0,C._)([(0,S.o)({count:O.A.COUNT})],_.prototype,"transparencyPassType",void 0),(0,C._)([(0,S.o)({count:M.h.COUNT})],_.prototype,"normalType",void 0),(0,C._)([(0,S.o)({count:w.N.COUNT})],_.prototype,"textureCoordinateType",void 0),(0,C._)([(0,S.o)({count:p.Gv.COUNT})],_.prototype,"customDepthTest",void 0),(0,C._)([(0,S.o)()],_.prototype,"spherical",void 0),(0,C._)([(0,S.o)()],_.prototype,"hasVertexColors",void 0),(0,C._)([(0,S.o)()],_.prototype,"hasSymbolColors",void 0),(0,C._)([(0,S.o)()],_.prototype,"hasVerticalOffset",void 0),(0,C._)([(0,S.o)()],_.prototype,"hasSlicePlane",void 0),(0,C._)([(0,S.o)()],_.prototype,"hasSliceHighlight",void 0),(0,C._)([(0,S.o)()],_.prototype,"hasColorTexture",void 0),(0,C._)([(0,S.o)()],_.prototype,"hasMetallicRoughnessTexture",void 0),(0,C._)([(0,S.o)()],_.prototype,"hasEmissionTexture",void 0),(0,C._)([(0,S.o)()],_.prototype,"hasOcclusionTexture",void 0),(0,C._)([(0,S.o)()],_.prototype,"hasNormalTexture",void 0),(0,C._)([(0,S.o)()],_.prototype,"hasScreenSizePerspective",void 0),(0,C._)([(0,S.o)()],_.prototype,"hasVertexTangents",void 0),(0,C._)([(0,S.o)()],_.prototype,"hasOccludees",void 0),(0,C._)([(0,S.o)()],_.prototype,"hasMultipassTerrain",void 0),(0,C._)([(0,S.o)()],_.prototype,"hasModelTransformation",void 0),(0,C._)([(0,S.o)()],_.prototype,"offsetBackfaces",void 0),(0,C._)([(0,S.o)()],_.prototype,"vvSize",void 0),(0,C._)([(0,S.o)()],_.prototype,"vvColor",void 0),(0,C._)([(0,S.o)()],_.prototype,"receiveShadows",void 0),(0,C._)([(0,S.o)()],_.prototype,"receiveAmbientOcclusion",void 0),(0,C._)([(0,S.o)()],_.prototype,"textureAlphaPremultiplied",void 0),(0,C._)([(0,S.o)()],_.prototype,"instanced",void 0),(0,C._)([(0,S.o)()],_.prototype,"instancedColor",void 0),(0,C._)([(0,S.o)()],_.prototype,"objectAndLayerIdColorInstanced",void 0),(0,C._)([(0,S.o)()],_.prototype,"instancedDoublePrecision",void 0),(0,C._)([(0,S.o)()],_.prototype,"doublePrecisionRequiresObfuscation",void 0),(0,C._)([(0,S.o)()],_.prototype,"writeDepth",void 0),(0,C._)([(0,S.o)()],_.prototype,"transparent",void 0),(0,C._)([(0,S.o)()],_.prototype,"enableOffset",void 0),(0,C._)([(0,S.o)()],_.prototype,"cullAboveGround",void 0),(0,C._)([(0,S.o)()],_.prototype,"snowCover",void 0),(0,C._)([(0,S.o)()],_.prototype,"hasColorTextureTransform",void 0),(0,C._)([(0,S.o)()],_.prototype,"hasEmissionTextureTransform",void 0),(0,C._)([(0,S.o)()],_.prototype,"hasNormalTextureTransform",void 0),(0,C._)([(0,S.o)()],_.prototype,"hasOcclusionTextureTransform",void 0),(0,C._)([(0,S.o)()],_.prototype,"hasMetallicRoughnessTextureTransform",void 0),(0,C._)([(0,S.o)({constValue:!0})],_.prototype,"hasVvInstancing",void 0),(0,C._)([(0,S.o)({constValue:!1})],_.prototype,"useCustomDTRExponentForWater",void 0),(0,C._)([(0,S.o)({constValue:!1})],_.prototype,"supportsTextureAtlas",void 0),(0,C._)([(0,S.o)({constValue:!0})],_.prototype,"useFillLights",void 0);var H=o(82144),L=o(40563);class N extends y.tT{initializeConfiguration(e,t){super.initializeConfiguration(e,t),t.hasMetallicRoughnessTexture=!1,t.hasEmissionTexture=!1,t.hasOcclusionTexture=!1,t.hasNormalTexture=!1,t.hasModelTransformation=!1,t.normalType=M.h.Attribute,t.doubleSidedMode=d.q.WindingOrder,t.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,N.shader)}}N.shader=new H.J(L.R,(()=>o.e(601).then(o.bind(o,50601))));class P extends h.F5{constructor(e){super(e,D),this.supportsEdges=!0,this._configuration=new _,this._vertexBufferLayout=function(e){const t=(0,l.U$)().vec3f(g.T.POSITION).vec3f(g.T.NORMAL),o=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId;return e.hasVertexTangents&&t.vec4f(g.T.TANGENT),o&&t.vec2f(g.T.UV0),e.hasVertexColors&&t.vec4u8(g.T.COLOR),e.hasSymbolColors&&t.vec4u8(g.T.SYMBOLCOLOR),(0,r.Z)("enable-feature:objectAndLayerId-rendering")&&t.vec4u8(g.T.OBJECTANDLAYERIDCOLOR),t}(this.parameters)}isVisibleForOutput(e){return e!==c.H.Shadow&&e!==c.H.ShadowExcludeHighlight&&e!==c.H.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const{instanced:t,hasVertexColors:o,hasSymbolColors:r,vvColorEnabled:i}=e,n=(0,a.pC)(t)&&t.includes("color"),s="replace"===e.colorMixMode,l=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0;return o&&(n||i||r)?!!s||l:o?s?c:l:n||i||r?!!s||l:s?c:l}getConfiguration(e,t){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=!!this.parameters.instanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=this.parameters.vvSizeEnabled,this._configuration.hasVerticalOffset=(0,a.pC)(this.parameters.verticalOffset),this._configuration.hasScreenSizePerspective=(0,a.pC)(this.parameters.screenSizePerspective),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,(0,a.pC)(this.parameters.customDepthTest)&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?p.Vr.None:this.parameters.cullFace,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=(0,a.pC)(this.parameters.modelTransformation),e!==c.H.Color&&e!==c.H.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=d.q.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?d.q.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?d.q.WindingOrder:d.q.None,this._configuration.instancedColor=(0,a.pC)(this.parameters.instanced)&&this.parameters.instanced.includes("color"),this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=!!t.ssaoHelper.active&&this.parameters.receiveSSAO,this._configuration.vvColor=this.parameters.vvColorEnabled,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?u.f7.Schematic:u.f7.Normal:u.f7.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<v.ve,this._configuration.snowCover=this.hasSnowCover(t),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return(0,a.pC)(e.weather)&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}intersect(e,t,o,r,n,l){if((0,a.pC)(this.parameters.verticalOffset)){const e=o.camera;(0,i.s)(G,t[12],t[13],t[14]);let a=null;switch(o.viewingMode){case s.JY.Global:a=(0,i.n)(z,G);break;case s.JY.Local:a=(0,i.c)(z,B)}let l=0;const c=(0,i.b)($,G,e.eye),d=(0,i.l)(c),u=(0,i.g)(c,c,1/d);let p=null;this.parameters.screenSizePerspective&&(p=(0,i.e)(a,u)),l+=(0,b.Hx)(e,d,this.parameters.verticalOffset,p??0,this.parameters.screenSizePerspective),(0,i.g)(a,a,l),(0,i.t)(F,a,o.transform.inverseRotation),r=(0,i.b)(E,r,F),n=(0,i.b)(V,n,F)}(0,b.Bw)(e,o,r,n,(0,x.W9)(o.verticalOffset),l)}requiresSlot(e,t){return(t===c.H.Color||t===c.H.Alpha||t===c.H.Depth||t===c.H.Normal||t===c.H.Shadow||t===c.H.ShadowHighlight||t===c.H.ShadowExcludeHighlight||t===c.H.Highlight||t===c.H.ObjectAndLayerIdColor)&&(e===(this.parameters.transparent?this.parameters.writeDepth?f.r.TRANSPARENT_MATERIAL:f.r.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:f.r.OPAQUE_MATERIAL)||e===f.r.DRAPED_MATERIAL)}createGLMaterial(e){return new R(e)}createBufferWriter(){return new T.G(this._vertexBufferLayout)}}class R extends m.F{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output!==c.H.Color&&this._output!==c.H.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e));const t=this._material.parameters;this.updateTexture(t.textureId);const o=e.camera.viewInverseTransposeMatrix;return(0,i.s)(t.origin,o[3],o[7],o[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(t.treeRendering?N:y.tT,e)}}class I extends y.em{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}const D=new I;const E=(0,n.c)(),V=(0,n.c)(),B=(0,n.f)(0,0,1),z=(0,n.c)(),F=(0,n.c)(),G=(0,n.c)(),$=(0,n.c)()},50531:(e,t,o)=>{o.d(t,{Qm:()=>O,em:()=>S,tT:()=>A});var r=o(11873),a=o(71353),i=o(67077),n=o(50951),s=o(37081),l=o(73782),c=o(60113),d=o(85380),u=o(26461),p=o(82144),m=o(31132),h=o(68401),v=o(7566),f=o(56529),g=o(78041),x=o(27627),T=o(50411),b=o(25920),y=o(65630),C=o(49800),M=o(8548),w=o(36207);class S extends d.d4{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=(0,a.f)(0,1,.5),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=h.Vr.Back,this.emissiveFactor=(0,a.f)(0,0,0),this.instancedDoublePrecision=!1,this.normalType=l.h.Attribute,this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=(0,a.f)(.2,.2,.2),this.diffuse=(0,a.f)(.8,.8,.8),this.externalColor=(0,i.f)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,a.c)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSizeEnabled=!1,this.vvSizeMinSize=[1,1,1],this.vvSizeMaxSize=[100,100,100],this.vvSizeOffset=[0,0,0],this.vvSizeFactor=[1,1,1],this.vvSizeValue=[1,1,1],this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=(0,r.c)(),this.vvOpacityEnabled=!1,this.vvOpacityValues=[],this.vvOpacityOpacities=[],this.transparent=!1,this.writeDepth=!0,this.customDepthTest=h.Gv.Less,this.textureAlphaMode=h.JJ.Blend,this.textureAlphaCutoff=u.F,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=f.yD.Occlude}}class O extends d.Pf{constructor(){super(...arguments),this.origin=(0,a.c)(),this.slicePlaneLocalOrigin=this.origin}}class A extends m.A{initializeConfiguration(e,t){t.hasWebGL2Context=e.rctx.type===C.zO.WEBGL2,t.spherical=e.viewingMode===n.JY.Global,t.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,t.textureCoordinateType=t.hasColorTexture||t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?c.N.Default:c.N.None,t.objectAndLayerIdColorInstanced=t.instanced}initializeProgram(e){return this._initializeProgram(e,A.shader)}_initializeProgram(e,t){return new x.$(e.rctx,t.get().build(this.configuration),v.i)}_convertDepthTestFunction(e){return e===h.Gv.Lequal?M.wb.LEQUAL:M.wb.LESS}_makePipeline(e,t){const o=this.configuration,r=e===b.A.NONE,a=e===b.A.FrontFace;return(0,w.sm)({blending:o.output!==s.H.Color&&o.output!==s.H.Alpha||!o.transparent?null:r?g.wu:(0,g.j7)(e),culling:_(o)?(0,w.zp)(o.cullFace):null,depthTest:{func:(0,g.Bh)(e,this._convertDepthTestFunction(o.customDepthTest))},depthWrite:(r||a)&&o.writeDepth?w.LZ:null,colorWrite:w.BK,stencilWrite:o.hasOccludees?T.s3:null,stencilTest:o.hasOccludees?t?T.eD:T.RY:null,polygonOffset:r||a?null:(0,g.je)(o.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function _(e){return e.cullFace!==h.Vr.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}A.shader=new p.J(y.D,(()=>o.e(294).then(o.bind(o,40294))))}}]);
//# sourceMappingURL=8556.7a3e4262.chunk.js.map