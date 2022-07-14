"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[6099],{65630:(e,t,o)=>{o.d(t,{D:()=>k,b:()=>q});var a=o(92026),r=o(81949),i=o(22357),n=o(83734),s=o(71011),l=o(33280),c=o(94951),d=o(81221),u=o(73782),p=o(52276),h=o(53230),m=o(60113),v=o(48655),f=o(85380),g=o(49223),x=o(6781),b=o(38171),C=o(30694),y=o(34975),T=o(15226),M=o(96658),w=o(2116),S=o(41481),O=o(87920),A=o(18607),_=o(26461),H=o(65974),P=o(14282),L=o(71033),N=o(82552),R=o(49450),D=o(95276),I=o(58406),E=o(98634),B=o(8654),z=o(64201),F=o(19253),V=o(68401),G=o(4760),$=o(48919);function q(e){const t=new z.kG,o=t.vertex.code,q=t.fragment.code;t.include(P.a,{name:"Default Material Shader",output:e.output});const k=(0,N.S)(t,e);return t.include(p.f),t.varyings.add("vpos","vec3"),t.include(A.k,e),t.include(d.f,e),t.include(g.L,e),e.output!==s.H.Color&&e.output!==s.H.Alpha||((0,N.h)(t.vertex,e),t.include(u.O,e),t.include(c.w,{linearDepth:!1,hasModelTransformation:e.hasModelTransformation}),e.normalType===u.h.Attribute&&e.offsetBackfaces&&t.include(n.w),t.include(b.Q,e),t.include(f.Bb,e),e.instancedColor&&t.attributes.add(G.T.INSTANCECOLOR,"vec4"),t.varyings.add("localvpos","vec3"),t.include(m.D,e),t.include(i.q,e),t.include(h.R,e),t.include(v.c,e),t.vertex.uniforms.add(new D.N("externalColor",(e=>e.externalColor))),t.varyings.add("vcolorExt","vec4"),e.hasMultipassTerrain&&t.varyings.add("depth","float"),e.hasModelTransformation&&t.vertex.uniforms.add(new B.g("model",(e=>(0,a.pC)(e.modelTransformation)?e.modelTransformation:r.I))),o.add(E.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${E.H.float(_.b)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${e.normalType===u.h.Attribute?E.H`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${e.hasModelTransformation?"model,":""} vpos);
          ${e.normalType===u.h.Attribute&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),e.output===s.H.Alpha&&(t.include(l.f5,e),t.include(H.z,e),t.include(T.l,e),t.fragment.uniforms.add([new I.p("opacity",(e=>e.opacity)),new I.p("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&t.fragment.uniforms.add(new F.A("tex",(e=>e.texture))),t.fragment.include(L.y),q.add(E.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?E.H`
                vec4 texColor = texture2D(tex, vuv0);
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:E.H`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?E.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:E.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===s.H.Color&&(t.include(l.f5,e),t.include(y.X,e),t.include(C.K,e),t.include(H.z,e),t.include(e.instancedDoublePrecision?O.hb:O.XE,e),t.include(T.l,e),(0,N.h)(t.fragment,e),t.fragment.uniforms.add([k,new R.J("ambient",(e=>e.ambient)),new R.J("diffuse",(e=>e.diffuse)),new I.p("opacity",(e=>e.opacity)),new I.p("layerOpacity",(e=>e.layerOpacity)),new I.p("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)),new R.J("lightingMainIntensity",((e,t)=>t.lighting.mainLight.intensity))]),t.fragment.constants.add("ambientBoostFactor","float",$.V),e.hasColorTexture&&t.fragment.uniforms.add(new F.A("tex",(e=>e.texture))),t.include(S.jV,e),t.include(w.T,e),t.fragment.include(L.y),t.include(M.k,e),q.add(E.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?E.H`
                vec4 texColor = texture2D(tex, vuv0);
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:E.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===u.h.ScreenDerivative?E.H`
                vec3 normal = screenDerivativeNormal(localvpos);`:E.H`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===S.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?E.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:E.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?E.H`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`:E.H`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?E.H`normalize(vpos + localOrigin);`:E.H`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?E.H`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===S.f7.Normal||e.pbrMode===S.f7.Schematic?E.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
                ${e.snowCover?E.H`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:E.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===V.Am.Color?E.H`gl_FragColor = premultiplyAlpha(gl_FragColor);`:""}
      }
    `)),t.include(x.s,e),t}const k=Object.freeze(Object.defineProperty({__proto__:null,build:q},Symbol.toStringTag,{value:"Module"}))},40563:(e,t,o)=>{o.d(t,{R:()=>z,b:()=>B});var a=o(22357),r=o(83734),i=o(71011),n=o(33280),s=o(94951),l=o(81221),c=o(73782),d=o(52276),u=o(53230),p=o(60113),h=o(48655),m=o(49223),v=o(6781),f=o(30694),g=o(34975),x=o(15226),b=o(2116),C=o(41481),y=o(87920),T=o(18607),M=o(26461),w=o(65974),S=o(71033),O=o(82552),A=o(49450),_=o(95276),H=o(58406),P=o(98634),L=o(54118),N=o(64201),R=o(19253),D=o(68401),I=o(4760),E=o(48919);function B(e){const t=new N.kG,o=t.vertex.code,B=t.fragment.code,z=(0,O.S)(t,e);return t.include(d.f),t.varyings.add("vpos","vec3"),t.include(T.k,e),t.include(l.f,e),t.include(m.L,e),e.output!==i.H.Color&&e.output!==i.H.Alpha||((0,O.h)(t.vertex,e),t.include(c.O,e),t.include(s.w),e.offsetBackfaces&&t.include(r.w),e.instancedColor&&t.attributes.add(I.T.INSTANCECOLOR,"vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),e.hasMultipassTerrain&&t.varyings.add("depth","float"),t.include(p.D,e),t.include(a.q,e),t.include(u.R,e),t.include(h.c,e),t.vertex.uniforms.add(new _.N("externalColor",(e=>e.externalColor))),t.varyings.add("vcolorExt","vec4"),o.add(P.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${P.H.float(M.b)}) {
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
          ${e.hasMultipassTerrain?P.H`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===i.H.Alpha&&(t.include(n.f5,e),t.include(w.z,e),t.include(x.l,e),t.fragment.uniforms.add([new H.p("opacity",(e=>e.opacity)),new H.p("layerOpacity",(e=>e.layerOpacity)),new L.B("view")]),e.hasColorTexture&&t.fragment.uniforms.add(new R.A("tex",(e=>e.texture))),t.fragment.include(S.y),B.add(P.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?P.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?P.H`
                vec4 texColor = texture2D(tex, vuv0);
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:P.H`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?P.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:P.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===i.H.Color&&(t.include(n.f5,e),t.include(g.X,e),t.include(f.K,e),t.include(w.z,e),t.include(e.instancedDoublePrecision?y.hb:y.XE,e),t.include(x.l,e),(0,O.h)(t.fragment,e),t.fragment.uniforms.add([z,new A.J("ambient",(e=>e.ambient)),new A.J("diffuse",(e=>e.diffuse)),new H.p("opacity",(e=>e.opacity)),new H.p("layerOpacity",(e=>e.layerOpacity)),new L.B("view"),new H.p("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)),new A.J("lightingMainIntensity",((e,t)=>t.lighting.mainLight.intensity))]),t.fragment.constants.add("ambientBoostFactor","float",E.V),e.hasColorTexture&&t.fragment.uniforms.add(new R.A("tex",(e=>e.texture))),t.include(C.jV,e),t.include(b.T,e),t.fragment.include(S.y),t.extensions.add("GL_OES_standard_derivatives"),B.add(P.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?P.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?P.H`
                vec4 texColor = texture2D(tex, vuv0);
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:P.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===C.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?P.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:P.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.snowCover?P.H`albedo = mix(albedo, vec3(1), 0.9);`:P.H``}
        ${P.H`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * lightingMainIntensity;`}
        ${e.pbrMode===C.f7.Normal||e.pbrMode===C.f7.Schematic?e.spherical?P.H`vec3 normalGround = normalize(vpos + localOrigin);`:P.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:P.H``}
        ${e.pbrMode===C.f7.Normal||e.pbrMode===C.f7.Schematic?P.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
                ${e.snowCover?P.H`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:P.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===D.Am.Color?P.H`gl_FragColor = premultiplyAlpha(gl_FragColor);`:P.H``}
      }
    `)),t.include(v.s,e),t}const z=Object.freeze(Object.defineProperty({__proto__:null,build:B},Symbol.toStringTag,{value:"Module"}))},48976:(e,t,o)=>{o.d(t,{c:()=>m,g:()=>d,i:()=>h,j:()=>H,k:()=>f,m:()=>u,r:()=>L,s:()=>c});var a=o(11873),r=o(98131),i=o(71353),n=o(26277),s=o(11186),l=o(90045);function c(e,t,o){o*=.5;const a=Math.sin(o);return e[0]=a*t[0],e[1]=a*t[1],e[2]=a*t[2],e[3]=Math.cos(o),e}function d(e,t){const o=2*Math.acos(t[3]),a=Math.sin(o/2);return a>n.E?(e[0]=t[0]/a,e[1]=t[1]/a,e[2]=t[2]/a):(e[0]=1,e[1]=0,e[2]=0),o}function u(e,t,o){const a=t[0],r=t[1],i=t[2],n=t[3],s=o[0],l=o[1],c=o[2],d=o[3];return e[0]=a*d+n*s+r*c-i*l,e[1]=r*d+n*l+i*s-a*c,e[2]=i*d+n*c+a*l-r*s,e[3]=n*d-a*s-r*l-i*c,e}function p(e,t,o,a){const r=t[0],i=t[1],s=t[2],l=t[3];let c,d,u,p,h,m=o[0],v=o[1],f=o[2],g=o[3];return d=r*m+i*v+s*f+l*g,d<0&&(d=-d,m=-m,v=-v,f=-f,g=-g),1-d>n.E?(c=Math.acos(d),u=Math.sin(c),p=Math.sin((1-a)*c)/u,h=Math.sin(a*c)/u):(p=1-a,h=a),e[0]=p*r+h*m,e[1]=p*i+h*v,e[2]=p*s+h*f,e[3]=p*l+h*g,e}function h(e,t){const o=t[0],a=t[1],r=t[2],i=t[3],n=o*o+a*a+r*r+i*i,s=n?1/n:0;return e[0]=-o*s,e[1]=-a*s,e[2]=-r*s,e[3]=i*s,e}function m(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function v(e,t){const o=t[0]+t[4]+t[8];let a;if(o>0)a=Math.sqrt(o+1),e[3]=.5*a,a=.5/a,e[0]=(t[5]-t[7])*a,e[1]=(t[6]-t[2])*a,e[2]=(t[1]-t[3])*a;else{let o=0;t[4]>t[0]&&(o=1),t[8]>t[3*o+o]&&(o=2);const r=(o+1)%3,i=(o+2)%3;a=Math.sqrt(t[3*o+o]-t[3*r+r]-t[3*i+i]+1),e[o]=.5*a,a=.5/a,e[3]=(t[3*r+i]-t[3*i+r])*a,e[r]=(t[3*r+o]+t[3*o+r])*a,e[i]=(t[3*i+o]+t[3*o+i])*a}return e}function f(e,t,o,a){const r=.5*Math.PI/180;t*=r,o*=r,a*=r;const i=Math.sin(t),n=Math.cos(t),s=Math.sin(o),l=Math.cos(o),c=Math.sin(a),d=Math.cos(a);return e[0]=i*l*d-n*s*c,e[1]=n*s*d+i*l*c,e[2]=n*l*c-i*s*d,e[3]=n*l*d+i*s*c,e}const g=l.c,x=l.s,b=l.a,C=u,y=l.b,T=l.d,M=l.l,w=l.e,S=w,O=l.f,A=O,_=l.n,H=l.g,P=l.h;function L(e,t,o){const a=(0,s.e)(t,o);return a<-.999999?((0,s.f)(N,R,t),(0,s.u)(N)<1e-6&&(0,s.f)(N,D,t),(0,s.n)(N,N),c(e,N,Math.PI),e):a>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):((0,s.f)(N,t,o),e[0]=N[0],e[1]=N[1],e[2]=N[2],e[3]=1+a,_(e,e))}const N=(0,i.c)(),R=(0,i.f)(1,0,0),D=(0,i.f)(0,1,0);const I=(0,r.a)(),E=(0,r.a)();const B=(0,a.c)();Object.freeze(Object.defineProperty({__proto__:null,identity:function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e},setAxisAngle:c,getAxisAngle:d,multiply:u,rotateX:function(e,t,o){o*=.5;const a=t[0],r=t[1],i=t[2],n=t[3],s=Math.sin(o),l=Math.cos(o);return e[0]=a*l+n*s,e[1]=r*l+i*s,e[2]=i*l-r*s,e[3]=n*l-a*s,e},rotateY:function(e,t,o){o*=.5;const a=t[0],r=t[1],i=t[2],n=t[3],s=Math.sin(o),l=Math.cos(o);return e[0]=a*l-i*s,e[1]=r*l+n*s,e[2]=i*l+a*s,e[3]=n*l-r*s,e},rotateZ:function(e,t,o){o*=.5;const a=t[0],r=t[1],i=t[2],n=t[3],s=Math.sin(o),l=Math.cos(o);return e[0]=a*l+r*s,e[1]=r*l-a*s,e[2]=i*l+n*s,e[3]=n*l-i*s,e},calculateW:function(e,t){const o=t[0],a=t[1],r=t[2];return e[0]=o,e[1]=a,e[2]=r,e[3]=Math.sqrt(Math.abs(1-o*o-a*a-r*r)),e},slerp:p,random:function(e){const t=(0,n.R)(),o=(0,n.R)(),a=(0,n.R)(),r=Math.sqrt(1-t),i=Math.sqrt(t);return e[0]=r*Math.sin(2*Math.PI*o),e[1]=r*Math.cos(2*Math.PI*o),e[2]=i*Math.sin(2*Math.PI*a),e[3]=i*Math.cos(2*Math.PI*a),e},invert:h,conjugate:m,fromMat3:v,fromEuler:f,str:function(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},copy:g,set:x,add:b,mul:C,scale:y,dot:T,lerp:M,length:w,len:S,squaredLength:O,sqrLen:A,normalize:_,exactEquals:H,equals:P,rotationTo:L,sqlerp:function(e,t,o,a,r,i){return p(I,t,r,i),p(E,o,a,i),p(e,I,E,2*i*(1-i)),e},setAxes:function(e,t,o,a){const r=B;return r[0]=o[0],r[3]=o[1],r[6]=o[2],r[1]=a[0],r[4]=a[1],r[7]=a[2],r[2]=-t[0],r[5]=-t[1],r[8]=-t[2],_(e,v(e,r))}},Symbol.toStringTag,{value:"Module"}))},32035:(e,t,o)=>{o.d(t,{a:()=>i,b:()=>l,n:()=>s,s:()=>n,t:()=>r});var a=o(77873);function r(e,t,o){if(e.count!==t.count)return void a.c.error("source and destination buffers need to have the same number of elements");const r=e.count,i=o[0],n=o[1],s=o[2],l=o[4],c=o[5],d=o[6],u=o[8],p=o[9],h=o[10],m=o[12],v=o[13],f=o[14],g=e.typedBuffer,x=e.typedBufferStride,b=t.typedBuffer,C=t.typedBufferStride;for(let a=0;a<r;a++){const e=a*x,t=a*C,o=b[t],r=b[t+1],y=b[t+2];g[e]=i*o+l*r+u*y+m,g[e+1]=n*o+c*r+p*y+v,g[e+2]=s*o+d*r+h*y+f}}function i(e,t,o){if(e.count!==t.count)return void a.c.error("source and destination buffers need to have the same number of elements");const r=e.count,i=o[0],n=o[1],s=o[2],l=o[3],c=o[4],d=o[5],u=o[6],p=o[7],h=o[8],m=e.typedBuffer,v=e.typedBufferStride,f=t.typedBuffer,g=t.typedBufferStride;for(let a=0;a<r;a++){const e=a*v,t=a*g,o=f[t],r=f[t+1],x=f[t+2];m[e]=i*o+l*r+u*x,m[e+1]=n*o+c*r+p*x,m[e+2]=s*o+d*r+h*x}}function n(e,t,o){const a=Math.min(e.count,t.count),r=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,s=t.typedBufferStride;for(let l=0;l<a;l++){const e=l*i,t=l*s;r[e]=o*n[t],r[e+1]=o*n[t+1],r[e+2]=o*n[t+2]}}function s(e,t){const o=Math.min(e.count,t.count),a=e.typedBuffer,r=e.typedBufferStride,i=t.typedBuffer,n=t.typedBufferStride;for(let s=0;s<o;s++){const e=s*r,t=s*n,o=i[t],l=i[t+1],c=i[t+2],d=o*o+l*l+c*c;if(d>0){const t=1/Math.sqrt(d);a[e]=t*o,a[e+1]=t*l,a[e+2]=t*c}}}function l(e,t,o){const a=Math.min(e.count,t.count),r=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,s=t.typedBufferStride;for(let l=0;l<a;l++){const e=l*i,t=l*s;r[e]=n[t]>>o,r[e+1]=n[t+1]>>o,r[e+2]=n[t+2]>>o}}Object.freeze(Object.defineProperty({__proto__:null,transformMat4:r,transformMat3:i,scale:n,normalize:s,shiftRight:l},Symbol.toStringTag,{value:"Module"}))},92770:(e,t,o)=>{function a(e,t,o){const a=e.typedBuffer,r=e.typedBufferStride,i=t.typedBuffer,n=t.typedBufferStride,s=o?o.count:t.count;let l=(o&&o.dstIndex?o.dstIndex:0)*r,c=(o&&o.srcIndex?o.srcIndex:0)*n;for(let d=0;d<s;++d)a[l]=i[c],a[l+1]=i[c+1],a[l+2]=i[c+2],l+=r,c+=n}function r(e,t,o,a,r){const i=e.typedBuffer,n=e.typedBufferStride,s=r?.count??e.count;let l=(r?.dstIndex??0)*n;for(let c=0;c<s;++c)i[l]=t,i[l+1]=o,i[l+2]=a,l+=n}o.d(t,{c:()=>a,f:()=>r});Object.freeze(Object.defineProperty({__proto__:null,copy:a,fill:r},Symbol.toStringTag,{value:"Module"}))},71277:(e,t,o)=>{function a(e){return e=e||globalThis.location.hostname,c.some((t=>null!=e?.match(t)))}function r(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(i)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(n)||null!=t.match(l)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}o.d(t,{XO:()=>a,pJ:()=>r});const i=/^devext.arcgis.com$/,n=/^qaext.arcgis.com$/,s=/^[\w-]*\.mapsdevext.arcgis.com$/,l=/^[\w-]*\.mapsqa.arcgis.com$/,c=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,i,n,/^jsapps.esri.com$/,s,l]},77873:(e,t,o)=>{o.d(t,{c:()=>a});const a=o(32718).Z.getLogger("esri.views.3d.support.buffer.math")},4265:(e,t,o)=>{o.r(t),o.d(t,{fetch:()=>J,gltfToEngineResources:()=>U,parseUrl:()=>W});var a=o(71277),r=o(92026),i=o(22753),n=o(11873),s=o(14226),l=o(81949),c=o(11186),d=o(71353),u=o(41414),p=o(25158),h=o(32035),m=o(19093),v=o(17054),f=o(27053),g=o(55798),x=o(32315),b=o(76200),C=o(14921),y=o(10064),T=o(32718),M=o(66978),w=o(49901),S=o(38330),O=o(68401),A=o(74894),_=o(76873),H=o(86802),P=o(8548);const L=T.Z.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function N(e,t){const o=await async function(e,t){const o=(0,r.pC)(t)&&t.streamDataRequester;if(o)return async function(e,t,o){const a=await(0,C.q6)(t.request(e,"json",o));if(!0===a.ok)return a.value;(0,M.r9)(a.error),R(a.error.details.url)}(e,o,t);const a=await(0,C.q6)((0,b.default)(e,(0,r.Wg)(t)));if(!0===a.ok)return a.value.data;(0,M.r9)(a.error),R(a.error)}(e,t);return{resource:o,textures:await E(o.textureDefinitions,t)}}function R(e){throw new y.Z("",`Request for object resource failed: ${e}`)}function D(e){const t=e.params,o=t.topology;let a=!0;switch(t.vertexAttributes||(L.warn("Geometry must specify vertex attributes"),a=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const o in t.vertexAttributes){const t=e[o];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(L.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),a=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(L.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),a=!1)):(L.warn(`Indexed geometry does not specify face indices for '${o}' attribute`),a=!1)}}else L.warn("Indexed geometries must specify faces"),a=!1;break}default:L.warn(`Unsupported topology '${o}'`),a=!1}e.params.material||(L.warn("Geometry requires material"),a=!1);const r=e.params.vertexAttributes;for(const i in r)r[i].values||(L.warn("Geometries with externally defined attributes are not yet supported"),a=!1);return a}function I(e){const t=(0,u.cS)();return e.forEach((e=>{const o=e.boundingInfo;(0,r.pC)(o)&&((0,u.pp)(t,o.getBBMin()),(0,u.pp)(t,o.getBBMax()))})),t}async function E(e,t){const o=[];for(const n in e){const a=e[n],i=a.images[0].data;if(!i){L.warn("Externally referenced texture data is not yet supported");continue}const s=a.encoding+";base64,"+i,l="/textureDefinitions/"+n,c="rgba"===a.channels?a.alphaChannelUsage||"transparency":"none",d={noUnpackFlip:!0,wrap:{s:P.e8.REPEAT,t:P.e8.REPEAT},preMultiplyAlpha:B(c)!==O.JJ.Opaque},u=(0,r.pC)(t)&&t.disableTextures?Promise.resolve(null):(0,S.t)(s,t);o.push(u.then((e=>({refId:l,image:e,params:d,alphaChannelUsage:c}))))}const a=await Promise.all(o),i={};for(const r of a)i[r.refId]=r;return i}function B(e){switch(e){case"mask":return O.JJ.Mask;case"maskAndTransparency":return O.JJ.MaskBlend;case"none":return O.JJ.Opaque;default:return O.JJ.Blend}}function z(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const F=new w.G(1,2,"wosr");var V=o(4760),G=o(68845),$=o(19131),q=o(69618),k=o(92770);async function J(e,t){const o=W((0,a.pJ)(e));if("wosr"===o.fileType){const e=await(t.cache?t.cache.loadWOSR(o.url,t):N(o.url,t)),a=function(e,t){const o=[],a=[],i=[],n=[],s=e.resource,l=w.G.parse(s.version||"1.0","wosr");F.validate(l);const c=s.model.name,u=s.model.geometries,p=s.materialDefinitions,h=e.textures;let m=0;const v=new Map;for(let f=0;f<u.length;f++){const e=u[f];if(!D(e))continue;const s=z(e),l=e.params.vertexAttributes,c=[];for(const t in l){const e=l[t],o=e.values;c.push([t,{data:o,size:e.valuesPerElement,exclusive:!0}])}const g=[];if("PerAttributeArray"!==e.params.topology){const t=e.params.faces;for(const e in t)g.push([e,new Uint32Array(t[e].values)])}const x=h&&h[s.texture];if(x&&!v.has(s.texture)){const{image:e,params:t}=x,o=new _.x(e,t);n.push(o),v.set(s.texture,o)}const b=v.get(s.texture),C=b?b.id:void 0;let y=i[s.material]?i[s.material][s.texture]:null;if(!y){const e=p[s.material.substring(s.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const o=x&&x.alphaChannelUsage,a=e.transparency>0||"transparency"===o||"maskAndTransparency"===o,n=x?B(x.alphaChannelUsage):void 0,l={ambient:(0,d.d)(e.diffuse),diffuse:(0,d.d)(e.diffuse),opacity:1-(e.transparency||0),transparent:a,textureAlphaMode:n,textureAlphaCutoff:.33,textureId:C,initTextureTransparent:!0,doubleSided:!0,cullFace:O.Vr.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!x&&!!x.params.preMultiplyAlpha};(0,r.pC)(t)&&t.materialParamsMixin&&Object.assign(l,t.materialParamsMixin),y=new H.Gp(l),i[s.material]||(i[s.material]={}),i[s.material][s.texture]=y}a.push(y);const T=new A.Z(c,g);m+=g.position?g.position.length:0,o.push(T)}return{name:c,stageResources:{textures:n,materials:a,geometries:o},pivotOffset:s.model.pivotOffset,boundingBox:I(o),numberOfVertices:m,lodThreshold:null}}(e,t);return{lods:[a],referenceBoundingBox:a.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const i=await(t.cache?t.cache.loadGLTF(o.url,t,t.usePBR):(0,g.z)(new f.C(t.streamDataRequester),o.url,t,t.usePBR)),n=(0,r.U2)(i.model.meta,"ESRI_proxyEllipsoid");i.meta.isEsriSymbolResource&&(0,r.pC)(n)&&i.meta.uri.includes("/RealisticTrees/")&&function(e,t){for(let o=0;o<e.model.lods.length;++o){const a=e.model.lods[o];e.customMeta.esriTreeRendering=!0;for(const i of a.parts){const a=i.attributes.normal;if((0,r.Wi)(a))return;const n=i.attributes.position,u=n.count,h=(0,d.c)(),m=(0,d.c)(),f=(0,d.c)(),g=(0,v.gS)(p.mc,u),x=(0,v.gS)(p.ct,u),b=(0,s.a)((0,l.c)(),i.transform);for(let r=0;r<u;r++){n.getVec(r,m),a.getVec(r,h),(0,c.m)(m,m,i.transform),(0,c.b)(f,m,t.center),(0,c.G)(f,f,t.radius);const s=f[2],l=(0,c.l)(f),d=Math.min(.45+.55*l*l,1);(0,c.G)(f,f,t.radius),(0,c.m)(f,f,b),(0,c.n)(f,f),o+1!==e.model.lods.length&&e.model.lods.length>1&&(0,c.h)(f,f,h,s>-1?.2:Math.min(-4*s-3.8,1)),x.setVec(r,f),g.set(r,0,255*d),g.set(r,1,255*d),g.set(r,2,255*d),g.set(r,3,255)}i.attributes.normal=x,i.attributes.color=g}}}(i,n);const u=i.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:!!i.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:t.usePBR,isSchematic:!1,treeRendering:!1,mrrFactors:[0,1,.5]},h={...t.materialParamsMixin,treeRendering:!!i.customMeta.esriTreeRendering};if(null!=o.specifiedLodIndex){const e=U(i,u,h,o.specifiedLodIndex);let t=e[0].boundingBox;return 0!==o.specifiedLodIndex&&(t=U(i,u,h,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1,remove:i.remove}}const m=U(i,u,h);return{lods:m,referenceBoundingBox:m[0].boundingBox,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1,remove:i.remove}}function W(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function U(e,t,o,a){const s=e.model,l=(0,n.c)(),c=new Array,d=new Map,f=new Map;return s.lods.forEach(((e,n)=>{if(void 0!==a&&n!==a)return;const g={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:(0,r.pC)(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:(0,u.cS)()};c.push(g),e.parts.forEach((e=>{const a=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),n=s.materials.get(e.material),c=(0,r.pC)(e.attributes.texCoord0),b=(0,r.pC)(e.attributes.normal),C=function(e){switch(e){case"BLEND":return O.JJ.Blend;case"MASK":return O.JJ.Mask;case"OPAQUE":case null:case void 0:return O.JJ.Opaque}}(n.alphaMode);if(!d.has(a)){if(c){if((0,r.pC)(n.textureColor)&&!f.has(n.textureColor)){const e=s.textures.get(n.textureColor),t={...e.parameters,preMultiplyAlpha:C!==O.JJ.Opaque};f.set(n.textureColor,new _.x(e.data,t))}if((0,r.pC)(n.textureNormal)&&!f.has(n.textureNormal)){const e=s.textures.get(n.textureNormal);f.set(n.textureNormal,new _.x(e.data,e.parameters))}if((0,r.pC)(n.textureOcclusion)&&!f.has(n.textureOcclusion)){const e=s.textures.get(n.textureOcclusion);f.set(n.textureOcclusion,new _.x(e.data,e.parameters))}if((0,r.pC)(n.textureEmissive)&&!f.has(n.textureEmissive)){const e=s.textures.get(n.textureEmissive);f.set(n.textureEmissive,new _.x(e.data,e.parameters))}if((0,r.pC)(n.textureMetallicRoughness)&&!f.has(n.textureMetallicRoughness)){const e=s.textures.get(n.textureMetallicRoughness);f.set(n.textureMetallicRoughness,new _.x(e.data,e.parameters))}}const i=n.color[0]**(1/G.K),l=n.color[1]**(1/G.K),u=n.color[2]**(1/G.K),p=n.emissiveFactor[0]**(1/G.K),h=n.emissiveFactor[1]**(1/G.K),m=n.emissiveFactor[2]**(1/G.K),v=(0,r.pC)(n.textureColor)&&c?f.get(n.textureColor):null;d.set(a,new H.Gp({...t,transparent:C===O.JJ.Blend,customDepthTest:O.Gv.Lequal,textureAlphaMode:C,textureAlphaCutoff:n.alphaCutoff,diffuse:[i,l,u],ambient:[i,l,u],opacity:n.opacity,doubleSided:n.doubleSided,doubleSidedType:"winding-order",cullFace:n.doubleSided?O.Vr.None:O.Vr.Back,hasVertexColors:!!e.attributes.color,hasVertexTangents:!!e.attributes.tangent,normals:b?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:(0,r.pC)(v)?v.id:void 0,colorMixMode:n.colorMixMode,normalTextureId:(0,r.pC)(n.textureNormal)&&c?f.get(n.textureNormal).id:void 0,textureAlphaPremultiplied:(0,r.pC)(v)&&!!v.params.preMultiplyAlpha,occlusionTextureId:(0,r.pC)(n.textureOcclusion)&&c?f.get(n.textureOcclusion).id:void 0,emissiveTextureId:(0,r.pC)(n.textureEmissive)&&c?f.get(n.textureEmissive).id:void 0,metallicRoughnessTextureId:(0,r.pC)(n.textureMetallicRoughness)&&c?f.get(n.textureMetallicRoughness).id:void 0,emissiveFactor:[p,h,m],mrrFactors:[n.metallicFactor,n.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...o}))}const y=function(e,t){switch(t){case P.MX.TRIANGLES:return(0,x.nh)(e);case P.MX.TRIANGLE_STRIP:return(0,x.DA)(e);case P.MX.TRIANGLE_FAN:return(0,x.jX)(e)}}(e.indices||e.attributes.position.count,e.primitiveType),T=e.attributes.position.count,M=(0,v.gS)(p.ct,T);(0,h.t)(M,e.attributes.position,e.transform);const w=[[V.T.POSITION,{data:M.typedBuffer,size:M.elementCount,exclusive:!0}]],S=[[V.T.POSITION,y]];if((0,r.pC)(e.attributes.normal)){const t=(0,v.gS)(p.ct,T);(0,i.a)(l,e.transform),(0,h.a)(t,e.attributes.normal,l),w.push([V.T.NORMAL,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),S.push([V.T.NORMAL,y])}if((0,r.pC)(e.attributes.tangent)){const t=(0,v.gS)(p.ek,T);(0,i.a)(l,e.transform),(0,m.t)(t,e.attributes.tangent,l),w.push([V.T.TANGENT,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),S.push([V.T.TANGENT,y])}if((0,r.pC)(e.attributes.texCoord0)){const t=(0,v.gS)(p.Eu,T);(0,$.n)(t,e.attributes.texCoord0),w.push([V.T.UV0,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),S.push([V.T.UV0,y])}if((0,r.pC)(e.attributes.color)){const t=(0,v.gS)(p.mc,T);if(4===e.attributes.color.elementCount)e.attributes.color instanceof p.ek?(0,m.s)(t,e.attributes.color,255):e.attributes.color instanceof p.mc?(0,q.c)(t,e.attributes.color):e.attributes.color instanceof p.v6&&(0,m.s)(t,e.attributes.color,1/256);else{(0,q.f)(t,255,255,255,255);const o=new p.ne(t.buffer,0,4);e.attributes.color instanceof p.ct?(0,h.s)(o,e.attributes.color,255):e.attributes.color instanceof p.ne?(0,k.c)(o,e.attributes.color):e.attributes.color instanceof p.mw&&(0,h.s)(o,e.attributes.color,1/256)}w.push([V.T.COLOR,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),S.push([V.T.COLOR,y])}const L=new A.Z(w,S);g.stageResources.geometries.push(L),g.stageResources.materials.push(d.get(a)),c&&((0,r.pC)(n.textureColor)&&g.stageResources.textures.push(f.get(n.textureColor)),(0,r.pC)(n.textureNormal)&&g.stageResources.textures.push(f.get(n.textureNormal)),(0,r.pC)(n.textureOcclusion)&&g.stageResources.textures.push(f.get(n.textureOcclusion)),(0,r.pC)(n.textureEmissive)&&g.stageResources.textures.push(f.get(n.textureEmissive)),(0,r.pC)(n.textureMetallicRoughness)&&g.stageResources.textures.push(f.get(n.textureMetallicRoughness))),g.numberOfVertices+=T;const N=L.boundingInfo;(0,r.pC)(N)&&((0,u.pp)(g.boundingBox,N.getBBMin()),(0,u.pp)(g.boundingBox,N.getBBMax()))}))})),c}},49420:(e,t,o)=>{o.d(t,{F5:()=>s,HB:()=>l,a9:()=>a});var a,r,i=o(16889),n=o(92026);function s(e){switch(e){case"multiply":default:return a.Multiply;case"ignore":return a.Ignore;case"replace":return a.Replace;case"tint":return a.Tint}}function l(e,t,o){if((0,n.Wi)(e)||t===a.Ignore)return o[0]=255,o[1]=255,o[2]=255,void(o[3]=255);const r=(0,i.uZ)(Math.round(e[3]*d),0,d),s=0===r||t===a.Tint?0:t===a.Replace?u:p;o[0]=(0,i.uZ)(Math.round(e[0]*c),0,c),o[1]=(0,i.uZ)(Math.round(e[1]*c),0,c),o[2]=(0,i.uZ)(Math.round(e[2]*c),0,c),o[3]=r+s}(r=a||(a={}))[r.Multiply=1]="Multiply",r[r.Ignore=2]="Ignore",r[r.Replace=3]="Replace",r[r.Tint=4]="Tint";const c=255,d=85,u=d,p=2*d},83734:(e,t,o)=>{o.d(t,{w:()=>r});var a=o(98634);function r(e){e.vertex.code.add(a.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},81221:(e,t,o)=>{o.d(t,{f:()=>p});var a=o(11186),r=o(71353),i=o(71011),n=o(27254),s=o(86471),l=o(98634),c=o(8654),d=o(4760),u=o(43411);function p(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add(d.T.MODELORIGINHI,"vec3"),e.attributes.add(d.T.MODELORIGINLO,"vec3"),e.attributes.add(d.T.MODEL,"mat3"),e.attributes.add(d.T.MODELNORMAL,"mat3"));const o=e.vertex;t.instancedDoublePrecision&&(o.include(n.$,t),o.uniforms.add(new s.B("viewOriginHi",((e,t)=>(0,u.U8)((0,a.s)(h,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),h)))),o.uniforms.add(new s.B("viewOriginLo",((e,t)=>(0,u.GB)((0,a.s)(h,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),h))))),o.code.add(l.H`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),o.code.add(l.H`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?l.H`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),o.code.add(l.H`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),t.output===i.H.Normal&&(o.uniforms.add(new c.g("viewNormal",((e,t)=>t.camera.viewInverseTransposeMatrix))),o.code.add(l.H`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),t.hasVertexTangents&&o.code.add(l.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)}const h=(0,r.c)()},53230:(e,t,o)=>{o.d(t,{R:()=>c});var a=o(49420),r=o(98634);function i(e){e.vertex.code.add(r.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${r.H.int(a.a9.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${r.H.int(a.a9.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${r.H.int(a.a9.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${r.H.int(a.a9.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}var n=o(99339),s=o(4760),l=o(22909);function c(e,t){t.hasSymbolColors?(e.include(i),e.attributes.add(s.T.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(r.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new n._("colorMixMode",(e=>l.FZ[e.colorMixMode]))),e.vertex.code.add(r.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}},6781:(e,t,o)=>{o.d(t,{s:()=>g});var a=o(71011),r=o(33280),i=o(94951),n=o(73782),s=o(60113),l=o(85380),c=o(16574),d=o(137),u=o(18607),p=o(65974),h=o(82552),m=o(82999),v=o(98634),f=o(19253);function g(e,t){const o=e.vertex.code,g=e.fragment.code,x=t.hasModelTransformation;t.output!==a.H.Depth&&t.output!==a.H.Shadow||((0,h.S)(e,t),e.include(i.w,{linearDepth:!0,hasModelTransformation:x}),e.include(s.D,t),e.include(u.k,t),e.include(c.F,t),e.include(r.f5,t),e.vertex.uniforms.add(new m.A("nearFar",((e,t)=>t.camera.nearFar))),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add(new f.A("tex",(e=>e.texture))),o.add(v.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, ${x?"model,":""} vpos, nearFar, depth);
        forwardTextureCoordinates();
      }
    `),e.include(p.z,t),g.add(v.H`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?v.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),t.output===a.H.Normal&&((0,h.S)(e,t),e.include(i.w,{linearDepth:!1,hasModelTransformation:x}),e.include(n.O,t),e.include(l.Bb,t),e.include(s.D,t),e.include(u.k,t),t.hasColorTexture&&e.fragment.uniforms.add(new f.A("tex",(e=>e.texture))),e.varyings.add("vPositionView","vec3"),o.add(v.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${t.normalType===n.h.Attribute?v.H`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${x?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),e.include(r.f5,t),e.include(p.z,t),g.add(v.H`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?v.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${t.normalType===n.h.ScreenDerivative?v.H`
            vec3 normal = screenDerivativeNormal(vPositionView);`:v.H`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),t.output===a.H.Highlight&&((0,h.S)(e,t),e.include(i.w,{linearDepth:!1,hasModelTransformation:x}),e.include(s.D,t),e.include(u.k,t),t.hasColorTexture&&e.fragment.uniforms.add(new f.A("tex",(e=>e.texture))),o.add(v.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${x?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),e.include(r.f5,t),e.include(p.z,t),e.include(d.bA),g.add(v.H`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?v.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}},38171:(e,t,o)=>{o.d(t,{Q:()=>u});var a=o(60113),r=o(27284),i=o(96658),n=o(98634),s=o(69253),l=o(19253),c=o(99340),d=o(4760);function u(e,t){const o=e.fragment;if(t.hasVertexTangents?(e.attributes.add(d.T.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===i.q.WindingOrder?o.code.add(n.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):o.code.add(n.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),o.code.add(n.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`)),t.textureCoordinateType!==a.N.None){e.include(r.i,t);const a=t.supportsTextureAtlas;o.uniforms.add(t.pbrTextureBindType===c.P.Pass?(0,l.J)("normalTexture",(e=>e.textureNormal),a):(0,s.F)("normalTexture",(e=>e.textureNormal),a)),o.code.add(n.H`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `)}}},30694:(e,t,o)=>{o.d(t,{K:()=>l});var a=o(90045),r=o(67077),i=o(95276),n=o(98634),s=o(19253);function l(e,t){const o=e.fragment;t.receiveAmbientOcclusion?(o.uniforms.add([new s.A("ssaoTex",((e,t)=>t.ssaoHelper.colorTexture)),new i.N("viewportPixelSz",((e,t)=>(0,a.s)(c,t.camera.fullViewport[0],t.camera.fullViewport[1],1/t.ssaoHelper.width,1/t.ssaoHelper.height)))]),o.code.add(n.H`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
return texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}`)):o.code.add(n.H`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}const c=(0,r.c)()},34975:(e,t,o)=>{o.d(t,{X:()=>m});var a=o(60750),r=o(30694),i=o(92395),n=o(2116),s=o(41481),l=o(85586),c=o(13773),d=o(49450),u=o(58406),p=o(98634),h=o(48919);function m(e,t){const o=e.fragment;e.include(r.K,t),t.pbrMode!==s.f7.Disabled&&e.include(n.T,t),e.include(a._,t),o.constants.add("ambientBoostFactor","float",h.V),e.include(l.e),o.code.add(p.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===s.f7.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),o.uniforms.add(new d.J("lightingMainDirection",((e,t)=>t.lighting.lightingMainDirection))),o.code.add(p.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?p.H`normalize(vPosWorld)`:p.H`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),o.uniforms.add([new u.p("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)),new d.J("lightingMainIntensity",((e,t)=>t.lighting.mainLight.intensity))]),o.code.add(p.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),t.pbrMode===s.f7.Disabled||t.pbrMode===s.f7.WaterOnIntegratedMesh?(e.include(i.k,t),o.code.add(p.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`)):t.pbrMode!==s.f7.Normal&&t.pbrMode!==s.f7.Schematic||(o.code.add(p.H`const float fillLightIntensity = 0.25;
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
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),o.code.add(p.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?o.uniforms.add(new c.U("hasFillLights",((e,t)=>t.enableFillLights))):o.constants.add("hasFillLights","bool",!1),o.code.add(p.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),o.uniforms.add([new u.p("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new u.p("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))]),o.code.add(p.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),o.code.add(p.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode===s.f7.Schematic?p.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:p.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}},96658:(e,t,o)=>{o.d(t,{k:()=>s,q:()=>a});var a,r,i=o(41644),n=o(98634);function s(e,t){const o=e.fragment;switch(o.code.add(n.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case a.None:o.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case a.View:o.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case a.WindingOrder:o.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,i.Bg)(t.doubleSidedMode);case a.COUNT:}}(r=a||(a={}))[r.None=0]="None",r[r.View=1]="View",r[r.WindingOrder=2]="WindingOrder",r[r.COUNT=3]="COUNT"},65974:(e,t,o)=>{o.d(t,{z:()=>l});var a=o(26461),r=o(98634);function i(e){e.fragment.code.add(r.H`
    #define discardOrAdjustAlpha(color) { if (color.a < ${r.H.float(a.b)}) { discard; } }
  `)}o(61809),o(99340);var n=o(58406),s=o(68401);function l(e,t){c(e,t,new n.p("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function c(e,t,o){const a=e.fragment;switch(t.alphaDiscardMode!==s.JJ.Mask&&t.alphaDiscardMode!==s.JJ.MaskBlend||a.uniforms.add(o),t.alphaDiscardMode){case s.JJ.Blend:return e.include(i);case s.JJ.Opaque:a.code.add(r.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case s.JJ.Mask:a.code.add(r.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case s.JJ.MaskBlend:e.fragment.code.add(r.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}},14282:(e,t,o)=>{o.d(t,{a:()=>n});var a=o(71011),r=o(98634),i=o(37825);function n(e,t){const o=r.H`
  /*
  *  ${t.name}
  *  ${t.output===a.H.Color?"RenderOutput: Color":t.output===a.H.Depth?"RenderOutput: Depth":t.output===a.H.Shadow?"RenderOutput: Shadow":t.output===a.H.Normal?"RenderOutput: Normal":t.output===a.H.Highlight?"RenderOutput: Highlight":""}
  */
  `;(0,i.CG)()&&(e.fragment.code.add(o),e.vertex.code.add(o))}},71033:(e,t,o)=>{o.d(t,{y:()=>n});var a=o(49420),r=o(116),i=o(98634);function n(e){e.include(r.Y),e.code.add(i.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${i.H.int(a.a9.Multiply)}) {
        return allMixed;
      }
      if (mode == ${i.H.int(a.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.H.int(a.a9.Replace)}) {
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

      if (mode == ${i.H.int(a.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.H.int(a.a9.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}},86802:(e,t,o)=>{o.d(t,{Gp:()=>L,RL:()=>E});var a=o(92026),r=o(11186),i=o(71353),n=o(50951),s=o(55158),l=o(71011),c=o(73782),d=o(96658),u=o(41481),p=o(68401),h=o(17363),m=o(56529),v=o(78041),f=o(68198),g=o(93822),x=o(4760),b=o(76783),C=o(33236),y=o(22909),T=o(50531),M=o(27366),w=o(60113),S=o(33559),O=o(8883);class A extends O.W{constructor(){super(...arguments),this.output=l.H.Color,this.alphaDiscardMode=p.JJ.Opaque,this.doubleSidedMode=d.q.None,this.pbrMode=u.f7.Disabled,this.cullFace=p.Vr.None,this.transparencyPassType=p.Am.NONE,this.normalType=c.h.Attribute,this.textureCoordinateType=w.N.None,this.customDepthTest=p.Gv.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1}}(0,M._)([(0,S.o)({count:l.H.COUNT})],A.prototype,"output",void 0),(0,M._)([(0,S.o)({count:p.JJ.COUNT})],A.prototype,"alphaDiscardMode",void 0),(0,M._)([(0,S.o)({count:d.q.COUNT})],A.prototype,"doubleSidedMode",void 0),(0,M._)([(0,S.o)({count:u.f7.COUNT})],A.prototype,"pbrMode",void 0),(0,M._)([(0,S.o)({count:p.Vr.COUNT})],A.prototype,"cullFace",void 0),(0,M._)([(0,S.o)({count:p.Am.COUNT})],A.prototype,"transparencyPassType",void 0),(0,M._)([(0,S.o)({count:c.h.COUNT})],A.prototype,"normalType",void 0),(0,M._)([(0,S.o)({count:w.N.COUNT})],A.prototype,"textureCoordinateType",void 0),(0,M._)([(0,S.o)({count:p.Gv.COUNT})],A.prototype,"customDepthTest",void 0),(0,M._)([(0,S.o)()],A.prototype,"spherical",void 0),(0,M._)([(0,S.o)()],A.prototype,"hasVertexColors",void 0),(0,M._)([(0,S.o)()],A.prototype,"hasSymbolColors",void 0),(0,M._)([(0,S.o)()],A.prototype,"hasVerticalOffset",void 0),(0,M._)([(0,S.o)()],A.prototype,"hasSlicePlane",void 0),(0,M._)([(0,S.o)()],A.prototype,"hasSliceHighlight",void 0),(0,M._)([(0,S.o)()],A.prototype,"hasColorTexture",void 0),(0,M._)([(0,S.o)()],A.prototype,"hasMetalnessAndRoughnessTexture",void 0),(0,M._)([(0,S.o)()],A.prototype,"hasEmissionTexture",void 0),(0,M._)([(0,S.o)()],A.prototype,"hasOcclusionTexture",void 0),(0,M._)([(0,S.o)()],A.prototype,"hasNormalTexture",void 0),(0,M._)([(0,S.o)()],A.prototype,"hasScreenSizePerspective",void 0),(0,M._)([(0,S.o)()],A.prototype,"hasVertexTangents",void 0),(0,M._)([(0,S.o)()],A.prototype,"hasOccludees",void 0),(0,M._)([(0,S.o)()],A.prototype,"hasMultipassTerrain",void 0),(0,M._)([(0,S.o)()],A.prototype,"hasModelTransformation",void 0),(0,M._)([(0,S.o)()],A.prototype,"offsetBackfaces",void 0),(0,M._)([(0,S.o)()],A.prototype,"vvSize",void 0),(0,M._)([(0,S.o)()],A.prototype,"vvColor",void 0),(0,M._)([(0,S.o)()],A.prototype,"receiveShadows",void 0),(0,M._)([(0,S.o)()],A.prototype,"receiveAmbientOcclusion",void 0),(0,M._)([(0,S.o)()],A.prototype,"textureAlphaPremultiplied",void 0),(0,M._)([(0,S.o)()],A.prototype,"instanced",void 0),(0,M._)([(0,S.o)()],A.prototype,"instancedColor",void 0),(0,M._)([(0,S.o)()],A.prototype,"instancedDoublePrecision",void 0),(0,M._)([(0,S.o)()],A.prototype,"doublePrecisionRequiresObfuscation",void 0),(0,M._)([(0,S.o)()],A.prototype,"writeDepth",void 0),(0,M._)([(0,S.o)()],A.prototype,"transparent",void 0),(0,M._)([(0,S.o)()],A.prototype,"enableOffset",void 0),(0,M._)([(0,S.o)()],A.prototype,"cullAboveGround",void 0),(0,M._)([(0,S.o)()],A.prototype,"snowCover",void 0),(0,M._)([(0,S.o)({constValue:!0})],A.prototype,"hasVvInstancing",void 0),(0,M._)([(0,S.o)({constValue:!1})],A.prototype,"useCustomDTRExponentForWater",void 0),(0,M._)([(0,S.o)({constValue:!1})],A.prototype,"supportsTextureAtlas",void 0),(0,M._)([(0,S.o)({constValue:!0})],A.prototype,"useFillLights",void 0);var _=o(82144),H=o(40563);class P extends T.tT{initializeConfiguration(e,t){super.initializeConfiguration(e,t),t.hasMetalnessAndRoughnessTexture=!1,t.hasEmissionTexture=!1,t.hasOcclusionTexture=!1,t.hasNormalTexture=!1,t.hasModelTransformation=!1,t.normalType=c.h.Attribute,t.doubleSidedMode=d.q.WindingOrder,t.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,P.shader)}}P.shader=new _.J(H.R,(()=>o.e(601).then(o.bind(o,50601))));class L extends m.F5{constructor(e){super(e,D),this.supportsEdges=!0,this.techniqueConfig=new A,this.vertexBufferLayout=function(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,o=(0,s.U$)().vec3f(x.T.POSITION).vec3f(x.T.NORMAL);return e.hasVertexTangents&&o.vec4f(x.T.TANGENT),t&&o.vec2f(x.T.UV0),e.hasVertexColors&&o.vec4u8(x.T.COLOR),e.hasSymbolColors&&o.vec4u8(x.T.SYMBOLCOLOR),o}(this.parameters),this.instanceBufferLayout=e.instanced?E(this.parameters):null}isVisibleInPass(e){return e!==f.C.MATERIAL_DEPTH_SHADOWMAP_ALL&&e!==f.C.MATERIAL_DEPTH_SHADOWMAP_DEFAULT&&e!==f.C.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const{instanced:t,hasVertexColors:o,hasSymbolColors:r,vvColorEnabled:i}=e,n=(0,a.pC)(t)&&t.includes("color"),s="replace"===e.colorMixMode,l=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0;return o&&(n||i||r)?!!s||l:o?s?c:l:n||i||r?!!s||l:s?c:l}getConfiguration(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.parameters.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.parameters.textureId,this.techniqueConfig.hasVertexTangents=this.parameters.hasVertexTangents,this.techniqueConfig.instanced=!!this.parameters.instanced,this.techniqueConfig.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.hasVerticalOffset=(0,a.pC)(this.parameters.verticalOffset),this.techniqueConfig.hasScreenSizePerspective=(0,a.pC)(this.parameters.screenSizePerspective),this.techniqueConfig.hasSlicePlane=this.parameters.hasSlicePlane,this.techniqueConfig.hasSliceHighlight=this.parameters.hasSliceHighlight,this.techniqueConfig.alphaDiscardMode=this.parameters.textureAlphaMode,this.techniqueConfig.normalType="screenDerivative"===this.parameters.normals?c.h.ScreenDerivative:c.h.Attribute,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,(0,a.pC)(this.parameters.customDepthTest)&&(this.techniqueConfig.customDepthTest=this.parameters.customDepthTest),this.techniqueConfig.hasOccludees=this.parameters.hasOccludees,this.techniqueConfig.cullFace=this.parameters.hasSlicePlane?p.Vr.None:this.parameters.cullFace,this.techniqueConfig.hasMultipassTerrain=t.multipassTerrain.enabled,this.techniqueConfig.cullAboveGround=t.multipassTerrain.cullAboveGround,this.techniqueConfig.hasModelTransformation=(0,a.pC)(this.parameters.modelTransformation),e!==l.H.Color&&e!==l.H.Alpha||(this.techniqueConfig.hasVertexColors=this.parameters.hasVertexColors,this.techniqueConfig.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this.techniqueConfig.doubleSidedMode=d.q.WindingOrder:this.techniqueConfig.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?d.q.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?d.q.WindingOrder:d.q.None,this.techniqueConfig.instancedColor=(0,a.pC)(this.parameters.instanced)&&this.parameters.instanced.includes("color"),this.techniqueConfig.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!!t.ssaoHelper.ready&&this.parameters.receiveSSAO,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this.techniqueConfig.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?u.f7.Schematic:u.f7.Normal:u.f7.Disabled,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.parameters.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.enableOffset=t.camera.relativeElevation<v.ve,this.techniqueConfig.snowCover=this.hasSnowCover(t)),this.techniqueConfig}hasSnowCover(e){return(0,a.pC)(e.weather)&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}intersect(e,t,o,i,s,l,c){if((0,a.pC)(this.parameters.verticalOffset)){const e=i.camera;(0,r.s)($,o[12],o[13],o[14]);let t=null;switch(i.viewingMode){case n.JY.Global:t=(0,r.n)(V,$);break;case n.JY.Local:t=(0,r.c)(V,F)}let a=0;const c=(0,r.b)(q,$,e.eye),d=(0,r.l)(c),u=(0,r.g)(c,c,1/d);let p=null;this.parameters.screenSizePerspective&&(p=(0,r.e)(t,u)),a+=(0,y.Hx)(e,d,this.parameters.verticalOffset,p,this.parameters.screenSizePerspective),(0,r.g)(t,t,a),(0,r.t)(G,t,i.transform.inverseRotation),s=(0,r.b)(B,s,G),l=(0,r.b)(z,l,G)}(0,y.Bw)(e,t,i,s,l,(0,b.W9)(i.verticalOffset),c)}requiresSlot(e){return e===(this.parameters.transparent?this.parameters.writeDepth?g.r.TRANSPARENT_MATERIAL:g.r.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:g.r.OPAQUE_MATERIAL)||e===g.r.DRAPED_MATERIAL}createGLMaterial(e){return e.output===l.H.Color||e.output===l.H.Alpha||e.output===l.H.Depth||e.output===l.H.Normal||e.output===l.H.Shadow||e.output===l.H.Highlight?new N(e):null}createBufferWriter(){return new I(this.vertexBufferLayout,this.instanceBufferLayout)}}class N extends h.F{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){const t=this._material.parameters;this.updateTexture(t.textureId);const o=e.camera.viewInverseTransposeMatrix;return(0,r.s)(t.origin,o[3],o[7],o[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(t.treeRendering?P:T.tT,e)}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){return this._output!==l.H.Color&&this._output!==l.H.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e)),this._updateParameters(e)}}class R extends T.em{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}const D=new R;class I{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(x.T.POSITION).length}write(e,t,o,a){(0,C.NK)(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,o,a)}}function E(e){let t=(0,s.U$)();return t=e.instancedDoublePrecision?t.vec3f(x.T.MODELORIGINHI).vec3f(x.T.MODELORIGINLO).mat3f(x.T.MODEL).mat3f(x.T.MODELNORMAL):t.mat4f(x.T.MODEL).mat4f(x.T.MODELNORMAL),(0,a.pC)(e.instanced)&&e.instanced.includes("color")&&(t=t.vec4f(x.T.INSTANCECOLOR)),(0,a.pC)(e.instanced)&&e.instanced.includes("featureAttribute")&&(t=t.vec4f(x.T.INSTANCEFEATUREATTRIBUTE)),t}const B=(0,i.c)(),z=(0,i.c)(),F=(0,i.f)(0,0,1),V=(0,i.c)(),G=(0,i.c)(),$=(0,i.c)(),q=(0,i.c)()},50531:(e,t,o)=>{o.d(t,{Qm:()=>w,em:()=>M,tT:()=>S});var a=o(11873),r=o(71353),i=o(67077),n=o(50951),s=o(71011),l=o(60113),c=o(85380),d=o(26461),u=o(27254),p=o(82144),h=o(31132),m=o(68401),v=o(7566),f=o(56529),g=o(78041),x=o(27627),b=o(50411),C=o(65630),y=o(8548),T=o(36207);class M extends c.d4{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=(0,r.f)(0,1,.5),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=m.Vr.Back,this.emissiveFactor=(0,r.f)(0,0,0),this.instancedDoublePrecision=!1,this.normals="default",this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=(0,r.f)(.2,.2,.2),this.diffuse=(0,r.f)(.8,.8,.8),this.externalColor=(0,i.f)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,r.c)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSizeEnabled=!1,this.vvSizeMinSize=[1,1,1],this.vvSizeMaxSize=[100,100,100],this.vvSizeOffset=[0,0,0],this.vvSizeFactor=[1,1,1],this.vvSizeValue=[1,1,1],this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=(0,a.c)(),this.vvOpacityEnabled=!1,this.vvOpacityValues=[],this.vvOpacityOpacities=[],this.transparent=!1,this.writeDepth=!0,this.customDepthTest=m.Gv.Less,this.textureAlphaMode=m.JJ.Blend,this.textureAlphaCutoff=d.F,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=f.yD.Occlude}}class w extends c.Pf{constructor(){super(...arguments),this.origin=(0,r.c)(),this.slicePlaneLocalOrigin=this.origin}}class S extends h.A{initializeConfiguration(e,t){t.spherical=e.viewingMode===n.JY.Global,t.doublePrecisionRequiresObfuscation=(0,u.I)(e.rctx),t.textureCoordinateType=t.hasColorTexture||t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?l.N.Default:l.N.None}initializeProgram(e){return this._initializeProgram(e,S.shader)}_initializeProgram(e,t){const o=t.get().build(this.configuration);return new x.$(e.rctx,o,v.i)}_convertDepthTestFunction(e){return e===m.Gv.Lequal?y.wb.LEQUAL:y.wb.LESS}_setPipeline(e,t){const o=this.configuration,a=e===m.Am.NONE,r=e===m.Am.FrontFace;return(0,T.sm)({blending:o.output!==s.H.Color&&o.output!==s.H.Alpha||!o.transparent?null:a?g.wu:(0,g.j7)(e),culling:O(o)&&(0,T.zp)(o.cullFace),depthTest:{func:(0,g.Bh)(e,this._convertDepthTestFunction(o.customDepthTest))},depthWrite:a||r?o.writeDepth&&T.LZ:null,colorWrite:T.BK,stencilWrite:o.hasOccludees?b.s3:null,stencilTest:o.hasOccludees?t?b.eD:b.RY:null,polygonOffset:a||r?null:(0,g.je)(o.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipeline(this.configuration.transparencyPassType,!0),this._setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function O(e){return e.cullFace!==m.Vr.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}S.shader=new p.J(C.D,(()=>o.e(294).then(o.bind(o,40294))))},50951:(e,t,o)=>{var a;function r(e){return e===a.Global?"global":"local"}o.d(t,{JY:()=>a,M7:()=>r}),function(e){e[e.Global=1]="Global",e[e.Local=2]="Local"}(a||(a={}))}}]);
//# sourceMappingURL=6099.9b24108f.chunk.js.map