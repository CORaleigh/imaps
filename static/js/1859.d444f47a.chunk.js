"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[1859],{18442:(e,t,r)=>{r.d(t,{H:()=>M,b:()=>P,c:()=>I});var i=r(92026),o=r(88396),s=r(6394),a=r(67077),n=r(55360),l=r(71011),c=r(33280),d=r(28156),h=r(50600),u=r(50913),p=r(137),f=r(18607),m=r(26461),g=r(116),v=r(78980),_=r(62993),T=r(82999),S=r(95276),y=r(59150),C=r(58406),x=r(699),O=r(98634),w=r(64201),R=r(19253),b=r(68401),A=r(4760),E=r(65964);function P(e){const t=new w.kG,r=e.signedDistanceFieldEnabled;if(t.include(d.H),t.include(h.R,e),t.include(c.f5,e),e.output===l.H.Occlusion)return t.include(u.R,e),t;const{vertex:P,fragment:H}=t;t.include(_.cK),H.include(v.n),H.include(g.Y),t.include(f.k,e),t.varyings.add("vcolor","vec4"),t.varyings.add("vtc","vec2"),t.varyings.add("vsize","vec2"),e.binaryHighlightOcclusionEnabled&&t.varyings.add("voccluded","float"),P.uniforms.add([new S.N("viewport",((e,t)=>t.camera.fullViewport)),new T.A("screenOffset",((e,t)=>(0,o.a)(N,2*e.screenOffset[0]*t.camera.pixelRatio,2*e.screenOffset[1]*t.camera.pixelRatio))),new T.A("anchorPosition",(e=>I(e))),new S.N("materialColor",(e=>e.color)),new C.p("pixelRatio",((e,t)=>t.camera.pixelRatio))]),r&&(P.uniforms.add(new S.N("outlineColor",(e=>e.outlineColor))),H.uniforms.add([new S.N("outlineColor",(e=>D(e)?e.outlineColor:a.Z)),new C.p("outlineSize",(e=>D(e)?e.outlineSize:0))])),e.hasScreenSizePerspective&&((0,_.ww)(P),(0,_.m8)(P)),(e.debugDrawLabelBorder||e.binaryHighlightOcclusionEnabled)&&t.varyings.add("debugBorderCoords","vec4"),t.attributes.add(A.T.UV0,"vec2"),t.attributes.add(A.T.COLOR,"vec4"),t.attributes.add(A.T.SIZE,"vec2"),t.attributes.add(A.T.AUXPOS2,"vec4"),P.code.add(O.H`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }
      vec2 inputSize;
      ${e.hasScreenSizePerspective?O.H`
      inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
      vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
         `:O.H`
      inputSize = size;
      vec2 screenOffsetScaled = screenOffset;`}

      ${e.vvSize?"inputSize *= vvScale(auxpos2).xx;":""}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);

      ${e.occlusionTestEnabled||e.binaryHighlightOcclusionEnabled?"bool visible = testVisibilityHUD(posProj);":""}

      ${e.binaryHighlightOcclusionEnabled?"voccluded = visible ? 0.0 : 1.0;":""}
    `);const M=O.H`vec2 uv01 = floor(uv0);
vec2 uv = uv0 - uv01;
quadOffset.xy = ((uv01 - anchorPosition) * 2.0 * combinedSize + screenOffsetScaled) / viewport.zw * posProj.w;`,F=e.pixelSnappingEnabled?r?O.H`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:O.H`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:O.H`posProj += quadOffset;`;e.vvColor&&P.uniforms.add([new y.b("vvColorColors",(e=>e.vvColorColors),E.x),new x.O("vvColorValues",(e=>e.vvColorValues),E.x)]),P.uniforms.add(new T.A("textureCoordinateScaleFactor",(e=>(0,i.pC)(e.texture)&&(0,i.pC)(e.texture.descriptor.textureCoordinateScaleFactor)?e.texture.descriptor.textureCoordinateScaleFactor:s.O))),P.code.add(O.H`
    ${e.occlusionTestEnabled?"if (visible) {":""}
    ${M}
    ${e.vvColor?"vcolor = vvGetColor(auxpos2, vvColorValues, vvColorColors) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    bool alphaDiscard = vcolor.a < ${O.H.float(m.b)};
    ${r?`alphaDiscard = alphaDiscard && outlineColor.a < ${O.H.float(m.b)};`:""}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${F}
      gl_Position = posProj;
    }

    vtc = uv * textureCoordinateScaleFactor;

    ${e.debugDrawLabelBorder?"debugBorderCoords = vec4(uv01, 1.5 / combinedSize);":""}
    vsize = inputSize;
    ${e.occlusionTestEnabled?O.H`} else { vtc = vec2(0.0);
      ${e.debugDrawLabelBorder?"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);}":"}"}`:""}
  }
  `),H.uniforms.add(new R.A("tex",(e=>e.texture)));const z=e.debugDrawLabelBorder?O.H`(isBorder > 0.0 ? 0.0 : ${O.H.float(m.F)})`:O.H.float(m.F),L=O.H`
    ${e.debugDrawLabelBorder?O.H`
      float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`:""}

    ${r?O.H`
      vec4 fillPixelColor = vcolor;

      // Attempt to sample texel centers to avoid that thin cross outlines
      // disappear with large symbol sizes.
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603041
      const float txSize = ${O.H.float(n.Ph)};
      const float texelSize = 1.0 / txSize;
      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgba2float(texture2D(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${z} ||
          fillPixelColor.a + outlinePixelColor.a < ${O.H.float(m.b)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        gl_FragColor = vec4(compositeColor, compositeAlpha);
      } else {
        if (fillAlphaFactor < ${z}) {
          discard;
        }

        gl_FragColor = premultiplyAlpha(fillPixelColor);
      }

      // visualize SDF:
      // gl_FragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:O.H`
          vec4 texColor = texture2D(tex, vtc, -0.5);
          if (texColor.a < ${z}) {
            discard;
          }
          gl_FragColor = texColor * premultiplyAlpha(vcolor);
          `}

    // Draw debug border with transparency, so that original texels along border are still partially visible
    ${e.debugDrawLabelBorder?O.H`gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`:""}
  `;return e.output===l.H.Alpha&&H.code.add(O.H`
      void main() {
        ${L}
        gl_FragColor = vec4(gl_FragColor.a);
      }
      `),e.output===l.H.Color&&H.code.add(O.H`
    void main() {
      ${L}
      ${e.transparencyPassType===b.Am.FrontFace?"gl_FragColor.rgb /= gl_FragColor.a;":""}
    }
    `),e.output===l.H.Highlight&&(t.include(p.bA),H.code.add(O.H`
    void main() {
      ${L}
      ${e.binaryHighlightOcclusionEnabled?O.H`
          if (voccluded == 1.0) {
            gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
          } else {
            gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
          }`:"outputHighlight();"}
    }
    `)),t}function D(e){return e.outlineColor[3]>0&&e.outlineSize>0}function I(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:N;return e.textureIsSignedDistanceField?H(e.anchorPosition,e.distanceFieldBoundingBox,t):(0,o.c)(t,e.anchorPosition),t}function H(e,t,r){(0,i.pC)(t)?(0,o.a)(r,e[0]*(t[2]-t[0])+t[0],e[1]*(t[3]-t[1])+t[1]):(0,o.a)(r,0,0)}const N=(0,s.a)(),M=Object.freeze(Object.defineProperty({__proto__:null,build:P,calculateAnchorPosForRendering:I},Symbol.toStringTag,{value:"Module"}))},99337:(e,t,r)=>{r.d(t,{N:()=>v,b:()=>g});var i=r(71011),o=r(33280),s=r(94951),a=r(48655),n=r(137),l=r(60300),c=r(26461),d=r(82552),h=r(95276),u=r(58406),p=r(98634),f=r(64201),m=r(4760);function g(e){const t=new f.kG;t.include(s.w),t.include(a.c,e),t.include(l.q,e),(0,d.S)(t,e);const{vertex:r,fragment:g}=t;return e.stippleEnabled&&(t.attributes.add(m.T.UV0,"vec2"),t.attributes.add(m.T.AUXPOS1,"vec3"),r.uniforms.add(new h.N("viewport",((e,t)=>t.camera.fullViewport)))),t.attributes.add(m.T.POSITION,"vec3"),t.varyings.add("vpos","vec3"),r.code.add(p.H`void main(void) {
vpos = position;
forwardNormalizedVertexColor();
gl_Position = transformPosition(proj, view, vpos);`),e.stippleEnabled&&(r.code.add(p.H`vec4 vpos2 = transformPosition(proj, view, auxpos1);
vec2 ndcToPixel = viewport.zw * 0.5;
float lineSegmentPixelSize = length((vpos2.xy / vpos2.w - gl_Position.xy / gl_Position.w) * ndcToPixel);`),e.draped?r.uniforms.add(new u.p("worldToScreenRatio",((e,t)=>1/t.screenToPCSRatio))):r.code.add(p.H`vec3 segmentCenter = (position + auxpos1) * 0.5;
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),r.code.add(p.H`float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);`),e.draped?r.code.add(p.H`float startPseudoScreen = uv0.y * discreteWorldToScreenRatio - mix(0.0, lineSegmentPixelSize, uv0.x);
float segmentLengthPseudoScreen = lineSegmentPixelSize;`):r.code.add(p.H`float segmentLengthRender = length(position - auxpos1);
float startPseudoScreen = mix(uv0.y, uv0.y - segmentLengthRender, uv0.x) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),r.code.add(p.H`vec2 stippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, lineSegmentPixelSize, stipplePatternPixelSize);
vStippleDistance = mix(stippleDistanceLimits.x, stippleDistanceLimits.y, uv0.x);
vStippleDistance *= gl_Position.w;`)),r.code.add(p.H`}`),e.output===i.H.Highlight&&t.include(n.bA),t.include(o.f5,e),g.uniforms.add(new u.p("alphaCoverage",((e,t)=>Math.min(1,e.width*t.camera.pixelRatio)))),e.hasVertexColors||g.uniforms.add(new h.N("constantColor",(e=>e.color))),g.code.add(p.H`
  void main() {
    discardBySlice(vpos);

    vec4 color = ${e.hasVertexColors?"vColor":"constantColor"};

    float stippleAlpha = getStippleAlpha();
    discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);

    vec4 finalColor = blendStipple(vec4(color.rgb, color.a * alphaCoverage), stippleAlpha);

    if (finalColor.a < ${p.H.float(c.b)}) {
      discard;
    }

    ${e.output===i.H.Color?p.H`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${e.output===i.H.Highlight?p.H`outputHighlight();`:""}
  }
  `),t}const v=Object.freeze(Object.defineProperty({__proto__:null,build:g},Symbol.toStringTag,{value:"Module"}))},98186:(e,t,r)=>{r.d(t,{N:()=>x,R:()=>w,b:()=>O});var i=r(92026),o=r(71011),s=r(33280),a=r(48353),n=r(16574),l=r(60300),c=r(15226),d=r(85586),h=r(26461),u=r(116),p=r(82552),f=r(82999),m=r(95276),g=r(58406),v=r(98634),_=r(8654),T=r(64201),S=r(68401),y=r(4760),C=r(737);const x=1;function O(e){const t=new T.kG,r=e.hasMultipassTerrain&&(e.output===o.H.Color||e.output===o.H.Alpha);t.include(d.e),t.include(a.U,e),t.include(l.q,e),e.output===o.H.Depth&&t.include(n.F,e),(0,p.S)(t,e);const{vertex:O,fragment:w}=t;O.uniforms.add([new _.g("inverseProjectionMatrix",((e,t)=>t.camera.inverseProjectionMatrix)),new f.A("nearFar",((e,t)=>t.camera.nearFar)),new g.p("miterLimit",(e=>"miter"!==e.join?0:e.miterLimit)),new m.N("viewport",((e,t)=>t.camera.fullViewport))]),O.constants.add("LARGE_HALF_FLOAT","float",65500),t.attributes.add(y.T.POSITION,"vec3"),t.attributes.add(y.T.SUBDIVISIONFACTOR,"float"),t.attributes.add(y.T.UV0,"vec2"),t.attributes.add(y.T.AUXPOS1,"vec3"),t.attributes.add(y.T.AUXPOS2,"vec3"),t.varyings.add("vColor","vec4"),t.varyings.add("vpos","vec3"),t.varyings.add("linearDepth","float"),r&&t.varyings.add("depth","float");const R=e.capType===C.R.ROUND,b=e.stippleEnabled&&e.stippleScaleWithLineWidth||R;b&&t.varyings.add("vLineWidth","float");const A=e.stippleEnabled&&e.stippleScaleWithLineWidth;A&&t.varyings.add("vLineSizeInv","float");const E=e.innerColorEnabled||R;E&&t.varyings.add("vLineDistance","float");const P=e.stippleEnabled&&R,D=e.falloffEnabled||P;D&&t.varyings.add("vLineDistanceNorm","float"),R&&(t.varyings.add("vSegmentSDF","float"),t.varyings.add("vReverseSegmentSDF","float")),O.code.add(v.H`#define PERPENDICULAR(v) vec2(v.y, -v.x);
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),O.code.add(v.H`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),O.code.add(v.H`
    void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
      float vnp = nearFar[0] * 0.99;

      if(pos.z > -nearFar[0]) {
        //current pos behind ncp --> we need to clip
        if (!isStartVertex) {
          if(prev.z < -nearFar[0]) {
            //previous in front of ncp
            pos = mix(prev, pos, interp(vnp, prev, pos));
            next = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        } else {
          if(next.z < -nearFar[0]) {
            //next in front of ncp
            pos = mix(pos, next, interp(vnp, pos, next));
            prev = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      } else {
        //current position visible
        if (prev.z > -nearFar[0]) {
          //previous behind ncp
          prev = mix(pos, prev, interp(vnp, pos, prev));
        }
        if (next.z > -nearFar[0]) {
          //next behind ncp
          next = mix(next, pos, interp(vnp, next, pos));
        }
      }

      ${r?"depth = pos.z;":""}
      linearDepth = (-pos.z - nearFar[0]) / (nearFar[1] - nearFar[0]);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);
    }
  `),O.uniforms.add(new g.p("pixelRatio",((e,t)=>t.camera.pixelRatio))),O.code.add(v.H`
  void main(void) {
    // unpack values from uv0.y
    bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;

    float coverage = 1.0;

    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isJoin = abs(uv0.y) < 3.0;

      float lineSize = getSize();
      float lineWidth = lineSize * pixelRatio;

      ${b?v.H`vLineWidth = lineWidth;`:""}
      ${A?v.H`vLineSizeInv = 1.0 / lineSize;`:""}

      // convert sub-pixel coverage to alpha
      if (lineWidth < 1.0) {
        coverage = lineWidth;
        lineWidth = 1.0;
      }else{
        // Ribbon lines cannot properly render non-integer sizes. Round width to integer size if
        // larger than one for better quality. Note that we do render < 1 pixels more or less correctly
        // so we only really care to round anything larger than 1.
        lineWidth = floor(lineWidth + 0.5);
      }

      vec4 pos  = view * vec4(position.xyz, 1.0);
      vec4 prev = view * vec4(auxpos1.xyz, 1.0);
      vec4 next = view * vec4(auxpos2.xyz, 1.0);

      clipAndTransform(pos, prev, next, isStartVertex);

      vec2 left = (pos.xy - prev.xy);
      vec2 right = (next.xy - pos.xy);

      float leftLen = length(left);
      float rightLen = length(right);
  `),(e.stippleEnabled||R)&&O.code.add(v.H`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${R?v.H`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `),O.code.add(v.H`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * uv0.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),e.roundJoins?O.code.add(v.H`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = PERPENDICULAR(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = PERPENDICULAR(endDir);

        float factor = ${e.stippleEnabled?v.H`min(1.0, subdivisionFactor * ${v.H.float((x+2)/(x+1))})`:v.H`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * factor * rotationAngle);
      `):O.code.add(v.H`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);`);const I=e.capType!==C.R.BUTT;return O.code.add(v.H`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);

      ${I?v.H`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `),O.code.add(v.H`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;

    ${D||E?v.H`float lineDistNorm = sign(uv0.y) * pos.w;`:""}

    ${E?v.H`vLineDistance = lineWidth * lineDistNorm;`:""}
    ${D?v.H`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `),R&&O.code.add(v.H`vec2 segmentDir = normalize(segment);
vSegmentSDF = (isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir) * pos.w) ;
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`),e.stippleEnabled&&(e.draped?O.uniforms.add(new g.p("worldToScreenRatio",((e,t)=>1/t.screenToPCSRatio))):O.code.add(v.H`vec3 segmentCenter = mix((auxpos2 + position) * 0.5, (position + auxpos1) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),O.code.add(v.H`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(auxpos2 - position, position - auxpos1, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),e.draped?O.code.add(v.H`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = uv0.x * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):O.code.add(v.H`float startPseudoScreen = mix(uv0.x, uv0.x - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),O.code.add(v.H`
      float patternLength = ${e.stippleScaleWithLineWidth?"lineSize * ":""} stipplePatternPixelSize;

      // Compute the coordinates at both start and end of the line segment, because we need both to clamp to in the fragment shader
      vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);

      vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);

      // Adjust the coordinate to the displaced position (the pattern is shortened/overextended on the in/outside of joins)
      if (segmentLengthScreenDouble >= 0.001) {
        // Project the actual vertex position onto the line segment. Note that the resulting factor is within [0..1] at the
        // original vertex positions, and slightly outside of that range at the displaced positions
        vec2 stippleDisplacement = pos.xy - segmentOrigin;
        float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);

        // Apply this offset to the actual vertex coordinate (can be screen or pseudo-screen space)
        vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
      }

      // Cancel out perspective correct interpolation because we want this length the really represent the screen distance
      vStippleDistanceLimits *= pos.w;
      vStippleDistance *= pos.w;

      // Disable stipple distance limits on caps
      vStippleDistanceLimits = isJoin ?
                                 vStippleDistanceLimits :
                                 isStartVertex ?
                                  vec2(-1e038, vStippleDistanceLimits.y) :
                                  vec2(vStippleDistanceLimits.x, 1e038);
    `)),O.code.add(v.H`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      ${e.wireframe&&!e.draped?"pos.z -= 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
    }
  }
  `),r&&t.include(c.l,e),t.include(s.f5,e),w.include(u.Y),w.code.add(v.H`
  void main() {
    discardBySlice(vpos);
    ${r?"terrainDepthTest(gl_FragCoord, depth);":""}
  `),e.wireframe?w.code.add(v.H`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(R&&w.code.add(v.H`
      float sdf = min(vSegmentSDF, vReverseSegmentSDF);
      vec2 fragmentPosition = vec2(
        min(sdf, 0.0),
        vLineDistance
      ) * gl_FragCoord.w;

      float fragmentRadius = length(fragmentPosition);
      float fragmentCapSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

      if (capCoverage < ${v.H.float(h.b)}) {
        discard;
      }
    `),P?w.code.add(v.H`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${v.H.float(h.b)}, stippleCoverage);
      `):w.code.add(v.H`float stippleAlpha = getStippleAlpha();`),w.uniforms.add(new m.N("intrinsicColor",(e=>e.color))),w.code.add(v.H`discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);
vec4 color = intrinsicColor * vColor;`),e.innerColorEnabled&&(w.uniforms.add(new m.N("innerColor",(e=>(0,i.Pt)(e.innerColor,e.color)))),w.uniforms.add(new g.p("innerWidth",((e,t)=>e.innerWidth*t.camera.pixelRatio))),w.code.add(v.H`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)),w.code.add(v.H`vec4 finalColor = blendStipple(color, stippleAlpha);`),e.falloffEnabled&&(w.uniforms.add(new g.p("falloff",(e=>e.falloff))),w.code.add(v.H`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`))),w.code.add(v.H`
    if (finalColor.a < ${v.H.float(h.b)}) {
      discard;
    }

    ${e.output===o.H.Alpha?v.H`gl_FragColor = vec4(finalColor.a);`:""}
    ${e.output===o.H.Color?v.H`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${e.output===o.H.Color&&e.transparencyPassType===S.Am.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    ${e.output===o.H.Highlight?v.H`gl_FragColor = vec4(1.0);`:""}
    ${e.output===o.H.Depth?v.H`outputDepth(linearDepth);`:""}
  }
  `),t}const w=Object.freeze(Object.defineProperty({__proto__:null,NUM_ROUND_JOIN_SUBDIVISIONS:x,build:O},Symbol.toStringTag,{value:"Module"}))},46516:(e,t,r)=>{r.d(t,{S:()=>g,b:()=>m});var i=r(74321),o=r(21002),s=r(96415),a=r(82999),n=r(17943),l=r(60465),c=r(98634),d=r(64201),h=r(2104),u=r(23038);const p=16,f=4;function m(e){const t=new d.kG,r=t.fragment;if(t.include(i.k),e.output===u.Q.Blur){const e=(f+1)/2,t=1/(2*e*e);r.include(o.S),r.uniforms.add([new h.Q("normalMap"),new h.Q("depthMap"),new h.Q("tex"),new n.e("blurSize"),new l.d("projScale"),new a.A("nearFar",((e,t)=>t.camera.nearFar))]),r.code.add(c.H`
      void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
        float c = texture2D(tex, uv).r;
        float d = linearDepthFromTexture(depthMap, uv, nearFar);

        float ddiff = d - center_d;

        float w = exp(-r * r * ${c.H.float(t)} - ddiff * ddiff * sharpness);
        wTotal += w;
        bTotal += w * c;
      }
    `),r.code.add(c.H`
      void main(void) {
        float b = 0.0;
        float w_total = 0.0;

        float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

        float sharpness = -0.05 * projScale/center_d;
        for (int r = -${c.H.int(f)}; r <= ${c.H.int(f)}; ++r) {
          float rf = float(r);
          vec2 uvOffset = uv + rf * blurSize;
          blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
        }

        gl_FragColor = vec4(b / w_total);
      }
    `)}return e.output===u.Q.SSAO&&(r.include(o.S),t.include(s.G),r.uniforms.add(new h.Q("normalMap")),r.uniforms.add(new h.Q("depthMap")),r.uniforms.add(new h.Q("rnm")),r.uniforms.add(new l.d("intensity")),r.uniforms.add(new l.d("projScale")),r.uniforms.add(new l.d("radius")),r.uniforms.add(new a.A("nearFar",((e,t)=>t.camera.nearFar))),r.uniforms.add(new n.e("screenSize")),r.uniforms.add(new n.e("rnmScale")),r.code.add(c.H`vec3 sphere[16];
void fillSphere() {
sphere[0] = vec3(0.186937, 0.0, 0.0);
sphere[1] = vec3(0.700542, 0.0, 0.0);
sphere[2] = vec3(-0.864858, -0.481795, -0.111713);
sphere[3] = vec3(-0.624773, 0.102853, -0.730153);
sphere[4] = vec3(-0.387172, 0.260319, 0.007229);
sphere[5] = vec3(-0.222367, -0.642631, -0.707697);
sphere[6] = vec3(-0.01336, -0.014956, 0.169662);
sphere[7] = vec3(0.122575, 0.1544, -0.456944);
sphere[8] = vec3(-0.177141, 0.85997, -0.42346);
sphere[9] = vec3(-0.131631, 0.814545, 0.524355);
sphere[10] = vec3(-0.779469, 0.007991, 0.624833);
sphere[11] = vec3(0.308092, 0.209288,0.35969);
sphere[12] = vec3(0.359331, -0.184533, -0.377458);
sphere[13] = vec3(0.192633, -0.482999, -0.065284);
sphere[14] = vec3(0.233538, 0.293706, -0.055139);
sphere[15] = vec3(0.417709, -0.386701, 0.442449);
}
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn-bias, 0.0);
}`),r.code.add(c.H`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.fragment.uniforms.add(new a.A("zScale",((e,t)=>(0,s.R)(t)))),r.code.add(c.H`
      void main(void) {
        fillSphere();
        vec3 fres = normalize((texture2D(rnm, uv * rnmScale).xyz * 2.0) - vec3(1.0));
        float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

        if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
          gl_FragColor = vec4(0.0);
          return;
        }

        vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy,currentPixelDepth);

        // get the normal of current fragment
        vec4 norm4 = texture2D(normalMap, uv);
        vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
        bool isTerrain = norm4.w<0.5;

        float sum = .0;
        vec3 tapPixelPos;

        // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
        // bug or deviation from CE somewhere else?
        float ps = projScale/(2.0 * currentPixelPos.z * zScale.x + zScale.y);

        for(int i = 0; i < ${c.H.int(p)}; ++i) {
          vec2 unitOffset = reflect(sphere[i], fres).xy;
          vec2 offset = vec2(-unitOffset * radius * ps);

          //don't use current or very nearby samples
          if ( abs(offset.x)<2.0 || abs(offset.y)<2.0) continue;

          vec2 tc = vec2(gl_FragCoord.xy + offset);
          if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
          vec2 tcTap = tc / screenSize;
          float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

          if (isTerrain) {
            bool isTerrainTap = texture2D(normalMap, tcTap).w<0.5;
            if (isTerrainTap) {
              continue;
            }
          }

          tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

          sum+= aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
        }

        // output the result
        float A = max(1.0-sum*intensity/float(${c.H.int(p)}),0.0);

        // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4)/2.2
        A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;
        gl_FragColor = vec4(A);
      }
    `)),t}const g=Object.freeze(Object.defineProperty({__proto__:null,build:m},Symbol.toStringTag,{value:"Module"}))},61863:(e,t,r)=>{r.d(t,{T:()=>c,b:()=>l});var i=r(74321),o=r(68827),s=r(98634),a=r(64201),n=r(2104);function l(){const e=new a.kG;return e.include(i.k),e.fragment.uniforms.add([new n.Q("tex"),new o.y("uColor")]),e.fragment.code.add(s.H`void main() {
vec4 texColor = texture2D(tex, uv);
gl_FragColor = texColor * uColor;
}`),e}const c=Object.freeze(Object.defineProperty({__proto__:null,build:l},Symbol.toStringTag,{value:"Module"}))},49810:(e,t,r)=>{r.d(t,{W:()=>E,b:()=>A});var i=r(22357),o=r(71011),s=r(33280),a=r(94951),n=r(137),l=r(60750),c=r(92395),d=r(15226),h=r(8555),u=r(41481),p=r(87920),f=r(77652),m=r(79246),g=r(26461),v=r(116),_=r(82552),T=r(49450),S=r(95276),y=r(68827),C=r(58406),x=r(98634),O=r(54118),w=r(64201),R=r(68401),b=r(4760);function A(e){const t=new w.kG,{vertex:r,fragment:A}=t,E=(0,_.S)(t,e);return t.include(a.w),t.attributes.add(b.T.POSITION,"vec3"),t.attributes.add(b.T.UV0,"vec2"),r.uniforms.add(new S.N("waterColor",(e=>e.color))),e.output!==o.H.Color&&e.output!==o.H.Alpha||(t.include(h.n,e),t.include(i.q,e),t.varyings.add("vuv","vec2"),t.varyings.add("vpos","vec3"),t.varyings.add("vnormal","vec3"),t.varyings.add("vtbnMatrix","mat3"),A.uniforms.add(E),e.hasMultipassTerrain&&t.varyings.add("depth","float"),r.code.add(x.H`
      void main(void) {
        if (waterColor.a < ${x.H.float(g.b)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vuv = uv0;
        vpos = position;

        vnormal = getLocalUp(vpos, localOrigin);
        vtbnMatrix = getTBNMatrix(vnormal);

        ${e.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}

        gl_Position = transformPosition(proj, view, vpos);
        ${e.output===o.H.Color?"forwardLinearDepth();":""}
      }
    `)),t.include(d.l,e),e.output===o.H.Alpha&&(t.include(s.f5,e),A.uniforms.add(new y.y("waterColor")),A.code.add(x.H`
        void main() {
          discardBySlice(vpos);
          ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

          gl_FragColor = vec4(waterColor.a);
        }
      `)),e.output===o.H.Color&&(t.include(c.k,{isGround:!1}),t.include(l._,{pbrMode:u.f7.Disabled,lightingSphericalHarmonicsOrder:2}),t.include(m.M),t.include(s.f5,e),t.include(p.XE,e),t.include(f.B,e),A.uniforms.add([new y.y("waterColor"),new T.J("lightingMainDirection",((e,t)=>t.lighting.lightingMainDirection)),new T.J("lightingMainIntensity",((e,t)=>t.lighting.mainLight.intensity)),new C.p("timeElapsed",(e=>e.timeElapsed)),new O.B("view")]),(0,_.h)(A,e),A.include(v.Y),A.code.add(x.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        vec3 localUp = vnormal;
        // the created normal is in tangent space
        vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);

        // we rotate the normal according to the tangent-bitangent-normal-Matrix
        vec3 n = normalize(vtbnMatrix * tangentNormalFoam.xyz);
        vec3 v = -normalize(vpos - cameraPosition);
        float shadow = ${e.receiveShadows?x.H`1.0 - readShadowMap(vpos, linearDepth)`:"1.0"};
        vec4 vPosView = view*vec4(vpos, 1.0);
        vec4 final = vec4(getSeaColor(n, v, lightingMainDirection, waterColor.rgb, lightingMainIntensity, localUp, shadow, tangentNormalFoam.w, vPosView.xyz, vpos + localOrigin), waterColor.w);

        // gamma correction
        gl_FragColor = delinearizeGamma(final);
        gl_FragColor = highlightSlice(gl_FragColor, vpos);
        ${e.transparencyPassType===R.Am.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),e.output===o.H.Normal&&(t.include(h.n,e),t.include(m.M,e),t.include(s.f5,e),t.varyings.add("vpos","vec3"),t.varyings.add("vuv","vec2"),r.code.add(x.H`
        void main(void) {
          if (waterColor.a < ${x.H.float(g.b)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vuv = uv0;
          vpos = position;

          gl_Position = transformPosition(proj, view, vpos);
        }
    `),A.uniforms.add(new C.p("timeElapsed",(e=>e.timeElapsed))),A.code.add(x.H`void main() {
discardBySlice(vpos);
vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);
tangentNormalFoam.xyz = normalize(tangentNormalFoam.xyz);
gl_FragColor = vec4((tangentNormalFoam.xyz + vec3(1.0)) * 0.5, tangentNormalFoam.w);
}`)),e.output===o.H.Draped&&(t.varyings.add("vpos","vec3"),r.code.add(x.H`
        void main(void) {
          if (waterColor.a < ${x.H.float(g.b)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vpos = position;
          gl_Position = transformPosition(proj, view, vpos);
        }
    `),A.uniforms.add(new y.y("waterColor")),A.code.add(x.H`void main() {
gl_FragColor = waterColor;
}`)),e.output===o.H.Highlight&&(t.include(n.bA),t.varyings.add("vpos","vec3"),r.code.add(x.H`
      void main(void) {
        if (waterColor.a < ${x.H.float(g.b)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);
      }
    `),t.include(s.f5,e),A.code.add(x.H`void main() {
discardBySlice(vpos);
outputHighlight();
}`)),t}const E=Object.freeze(Object.defineProperty({__proto__:null,build:A},Symbol.toStringTag,{value:"Module"}))},15245:(e,t,r)=>{function i(){return new Float32Array(2)}function o(e,t){const r=new Float32Array(2);return r[0]=e,r[1]=t,r}function s(){return i()}function a(){return o(1,1)}function n(){return o(1,0)}function l(){return o(0,1)}r.d(t,{c:()=>i,f:()=>o});const c=s(),d=a(),h=n(),u=l();Object.freeze(Object.defineProperty({__proto__:null,create:i,clone:function(e){const t=new Float32Array(2);return t[0]=e[0],t[1]=e[1],t},fromValues:o,createView:function(e,t){return new Float32Array(e,t,2)},zeros:s,ones:a,unitX:n,unitY:l,ZEROS:c,ONES:d,UNIT_X:h,UNIT_Y:u},Symbol.toStringTag,{value:"Module"}))},59447:(e,t,r)=>{r.d(t,{r:()=>i});class i{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(e,t){return this._outer.get(e)?.get(t)}set(e,t,r){const i=this._outer.get(e);i?i.set(t,r):this._outer.set(e,new Map([[t,r]]))}delete(e,t){const r=this._outer.get(e);r&&(r.delete(t),0===r.size&&this._outer.delete(e))}forEach(e){this._outer.forEach(((t,r)=>e(t,r)))}}},46228:(e,t,r)=>{r.d(t,{I:()=>o,v:()=>s});var i=r(16889);function o(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const o=(0,i.uZ)(e,0,l);for(let i=0;i<4;i++)t[r+i]=Math.floor(256*c(o*a[i]))}function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=0;for(let i=0;i<4;i++)r+=e[t+i]*n[i];return r}const a=[1,256,65536,16777216],n=[1/256,1/65536,1/16777216,1/4294967296],l=s(new Uint8ClampedArray([255,255,255,255]));function c(e){return e-Math.floor(e)}},35888:(e,t,r)=>{r.d(t,{d:()=>o});var i=r(16889);function o(e,t,r){const o=e.byteLength/(4*t),c=new Uint32Array(e,0,o*t);let d=new Uint32Array(o);const h=r?.minReduction??0,u=r?.originalIndices||null,p=u?u.length:0,f=r?.componentOffsets||null;let m=0;if(f)for(let i=0;i<f.length-1;i++){const e=f[i+1]-f[i];e>m&&(m=e)}else m=o;const g=Math.floor(1.1*m)+1;(null==l||l.length<2*g)&&(l=new Uint32Array((0,i.Sf)(2*g)));for(let i=0;i<2*g;i++)l[i]=0;let v=0;const _=!!f&&!!u,T=_?p:o,S=_?new Uint32Array(p):null,y=1.96;let C=0!==h?Math.ceil(4*y*y/(h*h)*h*(1-h)):T,x=1,O=f?f[1]:T;for(let i=0;i<T;i++){if(i===C){const e=1-v/i;if(e+y*Math.sqrt(e*(1-e)/i)<h)return null;C*=2}if(i===O){for(let e=0;e<2*g;e++)l[e]=0;if(u)for(let e=f[x-1];e<f[x];e++)S[e]=d[u[e]];O=f[++x]}const e=_?u[i]:i,r=e*t,o=n(c,r,t);let a=o%g,p=v;for(;0!==l[2*a+1];){if(l[2*a]===o){const e=l[2*a+1]-1;if(s(c,r,e*t,t)){p=d[e];break}}a++,a>=g&&(a-=g)}p===v&&(l[2*a]=o,l[2*a+1]=e+1,v++),d[e]=p}if(0!==h&&1-v/o<h)return null;if(_){for(let e=f[x-1];e<S.length;e++)S[e]=d[u[e]];d=S}const w=new Uint32Array(t*v);v=0;for(let i=0;i<T;i++)d[i]===v&&(a(c,(_?u[i]:i)*t,w,v*t,t),v++);if(u&&!_){const e=new Uint32Array(p);for(let t=0;t<e.length;t++)e[t]=d[u[t]];d=e}return{buffer:w.buffer,indices:d,uniqueCount:v}}function s(e,t,r,i){for(let o=0;o<i;o++)if(e[t+o]!==e[r+o])return!1;return!0}function a(e,t,r,i,o){for(let s=0;s<o;s++)r[i+s]=e[t+s]}function n(e,t,r){let i=0;for(let o=0;o<r;o++)i=e[t+o]+i|0,i=i+(i<<11)+(i>>>2)|0;return i>>>0}let l=null},91320:(e,t,r)=>{r.d(t,{Mk:()=>l,ZI:()=>i,bT:()=>n});var i,o=r(79347),s=r(69662),a=r(35888);function n(e){const t=l(e.rings,e.hasZ,i.CCW_IS_HOLE),r=[];let s=0,n=0;for(const i of t.polygons){const e=i.count,a=i.index,l=new Float64Array(t.position.buffer,3*a*t.position.BYTES_PER_ELEMENT,3*e),c=i.holeIndices.map((e=>e-a)),d=new Uint32Array((0,o.e)(l,c,3));r.push({position:l,faces:d}),s+=l.length,n+=d.length}const c=function(e,t,r){if(1===e.length)return e[0];const i=new Float64Array(t),o=new Uint32Array(r);let s=0,a=0,n=0;for(const l of e){for(let e=0;e<l.position.length;e++)i[s++]=l.position[e];for(let e=0;e<l.faces.length;e++)o[a++]=l.faces[e]+n;n=s/3}return{position:i,faces:o}}(r,s,n),d=(0,a.d)(c.position.buffer,6,{originalIndices:c.faces});return c.position=new Float64Array(d.buffer),c.faces=d.indices,c}function l(e,t,r){const o=e.length,s=new Array(o),a=new Array(o),n=new Array(o);let l=0,h=0,u=0,p=0;for(let i=0;i<o;++i)p+=e[i].length;const f=new Float64Array(3*p);let m=0;for(let g=o-1;g>=0;g--){const p=e[g],v=r===i.CCW_IS_HOLE&&d(p);if(v&&1!==o)s[l++]=p;else{let e=p.length;for(let t=0;t<l;++t)e+=s[t].length;const r={index:m,pathLengths:new Array(l+1),count:e,holeIndices:new Array(l)};r.pathLengths[0]=p.length,p.length>0&&(n[u++]={index:m,count:p.length}),m=v?c(p,p.length-1,-1,f,m,p.length,t):c(p,0,1,f,m,p.length,t);for(let i=0;i<l;++i){const e=s[i];r.holeIndices[i]=m,r.pathLengths[i+1]=e.length,e.length>0&&(n[u++]={index:m,count:e.length}),m=c(e,0,1,f,m,e.length,t)}l=0,r.count>0&&(a[h++]=r)}}for(let i=0;i<l;++i){const e=s[i];e.length>0&&(n[u++]={index:m,count:e.length}),m=c(e,0,1,f,m,e.length,t)}return h<o&&(a.length=h),u<o&&(n.length=u),{position:f,polygons:a,outlines:n}}function c(e,t,r,i,o,s,a){o*=3;for(let n=0;n<s;++n){const s=e[t];i[o++]=s[0],i[o++]=s[1],i[o++]=a?s[2]:0,t+=r}return o/3}function d(e){return!(0,s.bu)(e,!1,!1)}!function(e){e[e.NONE=0]="NONE",e[e.CCW_IS_HOLE=1]="CCW_IS_HOLE"}(i||(i={}))},91226:(e,t,r)=>{r.d(t,{co:()=>o,yl:()=>c});var i,o,s,a,n=r(81949),l=r(71353);class c{constructor(){this.startTime=0,this.startTimeHeightFade=0,this.cameraPositionLastFrame=(0,l.c)(),this.parallax={anchorPointClouds:(0,l.c)(),cloudsHeight:1e5,radiusCurvatureCorrectionFactor:0,transform:(0,n.c)()},this.parallaxNew={anchorPointClouds:(0,l.c)(),cloudsHeight:1e5,radiusCurvatureCorrectionFactor:0,transform:(0,n.c)()},this.crossFade={enabled:!1,factor:0,distanceThresholdFactor:.3},this.fadeInOut={stage:o.FINISHED,factor:0,distanceThresholdFactor:.6},this.fadeIn={stage:i.FINISHED,factor:0,distanceThresholdFactor:2},this.fadeInOutHeight={stage:s.FINISHED,factor:-1}}}(a=i||(i={}))[a.FINISHED=0]="FINISHED",a[a.CHANGE_ANCHOR=1]="CHANGE_ANCHOR",a[a.FADE_IN=2]="FADE_IN",function(e){e[e.FINISHED=0]="FINISHED",e[e.FADE_OUT=1]="FADE_OUT",e[e.SWITCH=2]="SWITCH",e[e.FADE_IN=3]="FADE_IN"}(o||(o={})),function(e){e[e.FINISHED=0]="FINISHED",e[e.HEIGHT_FADE=1]="HEIGHT_FADE"}(s||(s={}))},78935:(e,t,r)=>{r.d(t,{o:()=>a});var i=r(92026),o=r(88152),s=r(8821);class a{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit="meters",this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.centerPointInElevationSR=null,this.mode=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(e){this._unit=e,this._metersPerElevationInfoUnit=(0,o.Z7)(e)}get requiresSampledElevationInfo(){return"absolute-height"!==this.mode}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit="meters"}set offsetMeters(e){this._meterUnitOffset=e,this._renderUnitOffset=0}set offsetElevationInfoUnits(e){this._meterUnitOffset=e*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(e){this._renderUnitOffset+=e}geometryZWithOffset(e,t){const r=this.calculateOffsetRenderUnits(t);return null!=this.featureExpressionInfoContext?r:e+r}calculateOffsetRenderUnits(e){let t=this._meterUnitOffset;const r=this.featureExpressionInfoContext;return null!=r&&(t+=(0,s.ht)(r)*this._metersPerElevationInfoUnit),t/e.unitInMeters+this._renderUnitOffset}setFromElevationInfo(e){this.mode=e.mode,this.unit=(0,o.lt)(e.unit)?e.unit:"meters",this.offsetElevationInfoUnits=(0,i.Pt)(e.offset,0)}updateFeatureExpressionInfoContext(e,t,r){if((0,i.Wi)(e))return void(this._featureExpressionInfoContext=null);const o=e&&e.arcade;o&&(0,i.pC)(t)&&(0,i.pC)(r)?(this._featureExpressionInfoContext=(0,s.d9)(e),(0,s.aO)(this._featureExpressionInfoContext,(0,s.Tz)(o.modules,t,r))):this._featureExpressionInfoContext=e}static fromElevationInfo(e){const t=new a;return(0,i.pC)(e)&&t.setFromElevationInfo(e),t}}},61310:(e,t,r)=>{r.d(t,{ZF:()=>o,a1:()=>a,rD:()=>s});var i=r(67077);const o=1.2,s=i.Z,a=i.O},69691:(e,t,r)=>{r.d(t,{B5:()=>_,GC:()=>g,Lm:()=>S,Xf:()=>v,bD:()=>T,lO:()=>i,qZ:()=>f,rR:()=>p,w7:()=>m});var i,o=r(41644),s=r(92026),a=r(14226),n=r(81949),l=r(71353),c=r(79803),d=r(81020),h=r(96387),u=r(77648);function p(e,t,r,i,o,s,a,n,l,d,h){const u=y[h.mode];let p,f,m=0;if((0,c.CM)(e,t,r,i,l.spatialReference,o,n))return u.requiresAlignment(h)?(m=u.applyElevationAlignmentBuffer(i,o,s,a,n,l,d,h),p=s,f=a):(p=i,f=o),(0,c.CM)(p,l.spatialReference,f,s,d.spatialReference,a,n)?m:void 0}function f(e,t,r,i,a){const n=((0,d.f)(e)?e.z:(0,u.Fb)(e)?e.array[e.offset+2]:e[2])||0;switch(r.mode){case"on-the-ground":{const r=(0,s.Pt)((0,u.KO)(t,e,"ground"),0);return a.verticalDistanceToGround=0,a.sampledElevation=r,void(a.z=r)}case"relative-to-ground":{const o=(0,s.Pt)((0,u.KO)(t,e,"ground"),0),l=r.geometryZWithOffset(n,i);return a.verticalDistanceToGround=l,a.sampledElevation=o,void(a.z=l+o)}case"relative-to-scene":{const o=(0,s.Pt)((0,u.KO)(t,e,"scene"),0),l=r.geometryZWithOffset(n,i);return a.verticalDistanceToGround=l,a.sampledElevation=o,void(a.z=l+o)}case"absolute-height":{const o=r.geometryZWithOffset(n,i),l=(0,s.Pt)((0,u.KO)(t,e,"ground"),0);return a.verticalDistanceToGround=o-l,a.sampledElevation=l,void(a.z=o)}default:return(0,o.Bg)(r.mode),void(a.z=0)}}function m(e,t,r,i){return f(e,t,r,i,x),x.z}function g(e,t,r){return null==t||null==r?e.definedChanged:"on-the-ground"===t&&"on-the-ground"===r?e.staysOnTheGround:t===r||"on-the-ground"!==t&&"on-the-ground"!==r?i.UPDATE:e.onTheGroundChanged}function v(e){return"relative-to-ground"===e||"relative-to-scene"===e}function _(e){return"absolute-height"!==e}function T(e,t,r,i,o){f(t,r,o,i,x),(0,h.CV)(e,x.verticalDistanceToGround);const s=x.sampledElevation,n=(0,a.c)(C,e.transformation);return O[0]=t.x,O[1]=t.y,O[2]=x.z,(0,c.Bm)(t.spatialReference,O,n,i.spatialReference)?e.transformation=n:console.warn("Could not locate symbol object properly, it might be misplaced"),s}class S{constructor(){this.verticalDistanceToGround=0,this.sampledElevation=0,this.z=0}}!function(e){e[e.NONE=0]="NONE",e[e.UPDATE=1]="UPDATE",e[e.RECREATE=2]="RECREATE"}(i||(i={}));const y={"absolute-height":{applyElevationAlignmentBuffer:function(e,t,r,i,o,s,a,n){const l=n.calculateOffsetRenderUnits(a),c=n.featureExpressionInfoContext;t*=3,i*=3;for(let d=0;d<o;++d){const o=e[t+0],s=e[t+1],a=e[t+2];r[i+0]=o,r[i+1]=s,r[i+2]=null==c?a+l:l,t+=3,i+=3}return 0},requiresAlignment:function(e){const t=e.meterUnitOffset,r=e.featureExpressionInfoContext;return 0!==t||null!=r}},"on-the-ground":{applyElevationAlignmentBuffer:function(e,t,r,i,o,a){let n=0;const l=a.spatialReference;t*=3,i*=3;for(let c=0;c<o;++c){const o=e[t+0],c=e[t+1],d=e[t+2],h=(0,s.Pt)(a.getElevation(o,c,d,l,"ground"),0);n+=h,r[i+0]=o,r[i+1]=c,r[i+2]=h,t+=3,i+=3}return n/o},requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:function(e,t,r,i,o,a,n,l){let c=0;const d=l.calculateOffsetRenderUnits(n),h=l.featureExpressionInfoContext,u=a.spatialReference;t*=3,i*=3;for(let p=0;p<o;++p){const o=e[t+0],n=e[t+1],l=e[t+2],p=(0,s.Pt)(a.getElevation(o,n,l,u,"ground"),0);c+=p,r[i+0]=o,r[i+1]=n,r[i+2]=null==h?l+p+d:p+d,t+=3,i+=3}return c/o},requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:function(e,t,r,i,o,a,n,l){let c=0;const d=l.calculateOffsetRenderUnits(n),h=l.featureExpressionInfoContext,u=a.spatialReference;t*=3,i*=3;for(let p=0;p<o;++p){const o=e[t+0],n=e[t+1],l=e[t+2],p=(0,s.Pt)(a.getElevation(o,n,l,u,"scene"),0);c+=p,r[i+0]=o,r[i+1]=n,r[i+2]=null==h?l+p+d:p+d,t+=3,i+=3}return c/o},requiresAlignment:()=>!0}},C=(0,n.c)(),x=new S,O=(0,l.c)()},8821:(e,t,r)=>{r.d(t,{O$:()=>p,Tz:()=>c,WI:()=>u,aO:()=>d,d9:()=>n,ht:()=>h,kr:()=>l});var i=r(32718),o=r(37818),s=r(819);const a=i.Z.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");function n(e){return{cachedResult:e.cachedResult,arcade:e.arcade?{func:e.arcade.func,context:e.arcade.modules.arcadeUtils.createExecContext(null,{sr:e.arcade.context.spatialReference}),modules:e.arcade.modules}:null}}async function l(e,t,r){const i=e&&e.expression;if("string"!=typeof i)return null;const o=m(i);if(null!=o)return{cachedResult:o};const a=await(0,s.LC)(),n=a.arcadeUtils,l=n.createSyntaxTree(i);return n.dependsOnView(l)?(null!=r&&r.error("Expressions containing '$view' are not supported on ElevationInfo"),{cachedResult:0}):{arcade:{func:n.createFunction(l),context:n.createExecContext(null,{sr:t}),modules:a}}}function c(e,t,r){return e.arcadeUtils.createFeature(t.attributes,t.geometry,r)}function d(e,t){if(null!=e&&!f(e)){if(!t||!e.arcade)return void a.errorOncePerTick("Arcade support required but not provided");const r=t;r._geometry&&(r._geometry=(0,o.kB)(r._geometry)),e.arcade.modules.arcadeUtils.updateExecContext(e.arcade.context,t)}}function h(e){if(null!=e){if(f(e))return e.cachedResult;const t=e.arcade;let r=e.arcade.modules.arcadeUtils.executeFunction(t.func,t.context);return"number"!=typeof r&&(e.cachedResult=0,r=0),r}return 0}function u(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=e&&e.featureExpressionInfo;const i=r&&r.expression;return t||"0"===i||(r=null),r}const p={cachedResult:0};function f(e){return null!=e.cachedResult}function m(e){return"0"===e?0:null}},75558:(e,t,r)=>{r.d(t,{NW:()=>i,VP:()=>C,YU:()=>y,rm:()=>O,u9:()=>b});r(93169);var i,o,s=r(92026),a=r(18722),n=r(88396),l=r(11186),c=r(71353),d=r(79803),h=r(92183),u=r(91320),p=r(50951),f=r(61310),m=r(69691),g=r(25746),v=r(68401),_=r(74894),T=r(4760),S=r(737);function y(e){const t=[],r=[];!function(e,t,r){const{attributeData:{position:o},removeDuplicateStartEnd:s}=e,n=function(e){const t=e.length;return e[0]===e[t-3]&&e[1]===e[t-2]&&e[2]===e[t-1]}(o)&&s===i.REMOVE,l=o.length/3-(n?1:0),c=new Uint32Array(2*(l-1)),d=n?(0,a.tP)(o,0,o.length-3):o;let h=0;for(let i=0;i<l-1;i++)c[h++]=i,c[h++]=i+1;t.push([T.T.POSITION,{size:3,data:d,exclusive:n}]),r.push([T.T.POSITION,c])}(e,r,t);const o=r[0][1].data,c=t[0][1].length,u=new Uint16Array(c);return function(e,t,r){const i=e.attributeData.mapPosition;(0,s.Wi)(i)||(r.push([T.T.MAPPOS,r[0][1]]),t.push([T.T.MAPPOS,{size:3,data:i}]))}(e,r,t),function(e,t,r,i){if((0,s.pC)(e.attributeData.colorFeature))return;const o=e.attributeData.color;t.push([T.T.COLOR,{size:4,data:(0,s.Pt)(o,f.a1)}]),r.push([T.T.COLOR,i])}(e,r,t,u),function(e,t,r,i){if((0,s.pC)(e.attributeData.sizeFeature))return;const o=e.attributeData.size;t.push([T.T.SIZE,{size:1,data:[(0,s.Pt)(o,1)]}]),r.push([T.T.SIZE,i])}(e,r,t,u),function(e,t,r,i){const o=e.attributeData.colorFeature;(0,s.Wi)(o)||(t.push([T.T.COLORFEATUREATTRIBUTE,{size:1,data:new Float32Array([o])}]),r.push([T.T.COLOR,i]))}(e,r,t,u),function(e,t,r,i){const o=e.attributeData.sizeFeature;(0,s.Wi)(o)||(t.push([T.T.SIZEFEATUREATTRIBUTE,{size:1,data:new Float32Array([o])}]),r.push([T.T.SIZEFEATUREATTRIBUTE,i]))}(e,r,t,u),function(e,t,r,i){const o=e.attributeData.opacityFeature;(0,s.Wi)(o)||(t.push([T.T.OPACITYFEATUREATTRIBUTE,{size:1,data:new Float32Array([o])}]),r.push([T.T.OPACITYFEATUREATTRIBUTE,i]))}(e,r,t,u),function(e,t,r,i){if((0,s.Wi)(e.overlayInfo)||e.overlayInfo.renderCoordsHelper.viewingMode!==p.JY.Global||!e.overlayInfo.spatialReference.isGeographic)return;const o=new Float64Array(i.length),a=(0,h.Iu)(e.overlayInfo.spatialReference);for(let s=0;s<o.length;s+=3)(0,d.gH)(i,s,o,s,a);const c=i.length/3,u=new Float32Array(c+1);let f=w,m=R,g=0,v=0;(0,l.s)(f,o[v++],o[v++],o[v++]),u[0]=0;for(let s=1;s<c+1;++s)s===c&&(v=0),(0,l.s)(m,o[v++],o[v++],o[v++]),g+=(0,n.d)(f,m),u[s]=g,[f,m]=[m,f];t.push([T.T.DISTANCETOSTART,{size:1,data:u}]),r.push([T.T.DISTANCETOSTART,r[0][1]])}(e,r,t,o),new _.Z(r,t,v.MX.Line)}function C(e,t,r,i){const o="polygon"===e.type?u.ZI.CCW_IS_HOLE:u.ZI.NONE,s="polygon"===e.type?e.rings:e.paths,{position:a,outlines:n}=(0,u.Mk)(s,e.hasZ,o),l=new Float64Array(a.length),c=(0,m.rR)(a,e.spatialReference,0,l,0,a,0,a.length/3,t,r,i),d=null!=c;return{lines:d?x(n,a,l):[],projectionSuccess:d,sampledElevation:c}}function x(e,t,r){const i=new Array;for(const{index:o,count:s}of e){if(s<=1)continue;const e=3*o,a=e+3*s;i.push({position:t.subarray(e,a),mapPosition:r?r.subarray(e,a):void 0})}return i}function O(e,t){const r="polygon"===e.type?u.ZI.CCW_IS_HOLE:u.ZI.NONE,i="polygon"===e.type?e.rings:e.paths,{position:o,outlines:s}=(0,u.Mk)(i,!1,r),a=(0,d.CM)(o,e.spatialReference,0,o,t,0,o.length/3);for(let n=2;n<o.length;n+=3)o[n]=g.Rn;return{lines:a?x(s,o):[],projectionSuccess:a}}(o=i||(i={}))[o.KEEP=0]="KEEP",o[o.REMOVE=1]="REMOVE";const w=(0,c.c)(),R=(0,c.c)();function b(e){switch(e){case"butt":return S.R.BUTT;case"square":return S.R.SQUARE;case"round":return S.R.ROUND;default:return null}}},36759:(e,t,r)=>{r.d(t,{S_:()=>g,VP:()=>v,dO:()=>m,km:()=>f});var i=r(92026),o=r(81949),s=r(71353),a=r(79803),n=r(41414),l=r(69662),c=r(65618),d=r(69691),h=r(96387),u=r(59887);const p=(0,s.c)();function f(e,t,r,s,l,c,h,f){const m=r?r.length:0,g=e.clippingExtent;if((0,a.KC)(t,p,e.elevationProvider.spatialReference),(0,i.pC)(g)&&!(0,n.BD)(g,p))return null;(0,a.KC)(t,p,e.renderCoordsHelper.spatialReference);const v=e.localOriginFactory.getOrigin(p),_=new u.T({castShadow:!1,metadata:{layerUid:c,graphicUid:h,usesVerticalDistanceToGround:!0}});for(let i=0;i<m;i++){const e=o.I;_.addGeometry(r[i],s[i],e,v,f)}return{object:_,sampledElevation:(0,d.bD)(_,t,e.elevationProvider,e.renderCoordsHelper,l)}}function m(e,t,r){const i=e.elevationContext,o=r.spatialReference;(0,a.KC)(t,p,o),i.centerPointInElevationSR=(0,c.Tx)(p[0],p[1],t.hasZ?p[2]:0,o)}function g(e){switch(e.type){case"point":return e;case"polygon":case"extent":return(0,h.zE)(e);case"polyline":{const t=e.paths[0];if(!t||0===t.length)return null;const r=(0,l.n8)(t,(0,l.ok)(t)/2);return(0,c.Tx)(r[0],r[1],r[2],e.spatialReference)}case"mesh":return e.origin}return null}function v(e,t,r,i,o){const s=new Float64Array(3*e.length),a=new Float64Array(s.length);e.forEach(((e,t)=>{s[3*t+0]=e[0],s[3*t+1]=e[1],s[3*t+2]=e.length>2?e[2]:0}));const n=(0,d.rR)(s,t,0,a,0,s,0,s.length/3,r,i,o),l=null!=n;return{numVertices:e.length,position:s,mapPosition:a,projectionSuccess:l,sampledElevation:n}}},55360:(e,t,r)=>{r.d(t,{Ns:()=>n,Ph:()=>a,cU:()=>l});r(93169);var i=r(46228),o=r(76873),s=r(8548);const a=128,n=.5;function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t*n,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;const l=c(e,t,r,i);return new o.x(l,{mipmap:!1,wrap:{s:s.e8.CLAMP_TO_EDGE,t:s.e8.CLAMP_TO_EDGE},width:t,height:t,components:4,noUnpackFlip:!0})}function c(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t*n,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;switch(e){case"circle":default:return d(t,r);case"square":return h(t,r);case"cross":return p(t,r,i);case"x":return f(t,r,i);case"kite":return u(t,r);case"triangle":return m(t,r);case"arrow":return g(t,r)}}function d(e,t){const r=e/2-.5;return y(e,T(r,r,t/2))}function h(e,t){return v(e,t,!1)}function u(e,t){return v(e,t,!0)}function p(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return _(e,t,!1,r)}function f(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return _(e,t,!0,r)}function m(e,t){return y(e,S(e/2,t,t/2))}function g(e,t){const r=t,i=t/2,o=e/2,s=.8*r,a=T(o,(e-t)/2-s,Math.sqrt(s*s+i*i)),n=S(o,r,i);return y(e,((e,t)=>Math.max(n(e,t),-a(e,t))))}function v(e,t,r){return r&&(t/=Math.SQRT2),y(e,((i,o)=>{let s=i-.5*e+.25,a=.5*e-o-.75;if(r){const e=(s+a)/Math.SQRT2;a=(a-s)/Math.SQRT2,s=e}return Math.max(Math.abs(s),Math.abs(a))-.5*t}))}function _(e,t,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;t-=i,r&&(t*=Math.SQRT2);const o=.5*t;return y(e,((t,s)=>{let a,n=t-.5*e,l=.5*e-s-1;if(r){const e=(n+l)/Math.SQRT2;l=(l-n)/Math.SQRT2,n=e}return n=Math.abs(n),l=Math.abs(l),a=n>l?n>o?Math.sqrt((n-o)*(n-o)+l*l):l:l>o?Math.sqrt(n*n+(l-o)*(l-o)):n,a-=i/2,a}))}function T(e,t,r){return(i,o)=>{const s=i-e,a=o-t;return Math.sqrt(s*s+a*a)-r}}function S(e,t,r){const i=Math.sqrt(t*t+r*r);return(o,s)=>{const a=Math.abs(o-e)-r,n=s-e+t/2+.75,l=(t*a+r*n)/i,c=-n;return Math.max(l,c)}}function y(e,t){const r=new Uint8Array(4*e*e);for(let o=0;o<e;o++)for(let s=0;s<e;s++){const a=s+e*o;let n=t(s,o);n=n/e+.5,(0,i.I)(n,r,4*a)}return r}},26279:(e,t,r)=>{var i,o;r.d(t,{L:()=>i,a:()=>o}),function(e){e[e.RasterImage=0]="RasterImage",e[e.Features=1]="Features"}(i||(i={})),function(e){e[e.WithRasterImage=0]="WithRasterImage",e[e.WithoutRasterImage=1]="WithoutRasterImage"}(o||(o={}))},94463:(e,t,r)=>{r.d(t,{Z:()=>l});var i=r(27366),o=r(85015),s=r(49861),a=(r(63780),r(93169),r(25243),r(69912));let n=class extends o.Z{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};(0,i._)([(0,s.Cb)()],n.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),(0,i._)([(0,s.Cb)()],n.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),(0,i._)([(0,s.Cb)()],n.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),(0,i._)([(0,s.Cb)()],n.prototype,"DECONFLICTOR_SHOW_GRID",void 0),(0,i._)([(0,s.Cb)()],n.prototype,"LABELS_SHOW_BORDER",void 0),(0,i._)([(0,s.Cb)()],n.prototype,"TEXT_SHOW_BASELINE",void 0),(0,i._)([(0,s.Cb)()],n.prototype,"TEXT_SHOW_BORDER",void 0),(0,i._)([(0,s.Cb)()],n.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),(0,i._)([(0,s.Cb)()],n.prototype,"OVERLAY_SHOW_CENTER",void 0),(0,i._)([(0,s.Cb)()],n.prototype,"SHOW_POI",void 0),(0,i._)([(0,s.Cb)()],n.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),(0,i._)([(0,s.Cb)()],n.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),(0,i._)([(0,s.Cb)()],n.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),(0,i._)([(0,s.Cb)()],n.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),(0,i._)([(0,s.Cb)()],n.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),(0,i._)([(0,s.Cb)()],n.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),(0,i._)([(0,s.Cb)()],n.prototype,"I3S_TREE_SHOW_TILES",void 0),(0,i._)([(0,s.Cb)()],n.prototype,"I3S_SHOW_MODIFICATIONS",void 0),(0,i._)([(0,s.Cb)()],n.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),(0,i._)([(0,s.Cb)()],n.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),(0,i._)([(0,s.Cb)()],n.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),(0,i._)([(0,s.Cb)()],n.prototype,"LINE_WIREFRAMES",void 0),n=(0,i._)([(0,a.j)("esri.views.3d.support.DebugFlags")],n);const l=new n},25746:(e,t,r)=>{r.d(t,{Rn:()=>ur});var i,o=r(27366),s=r(85015),a=r(91505),n=r(100),l=r(77427),c=r(92026),d=r(27546),h=r(94172),u=r(92377),p=r(49861),f=(r(63780),r(93169),r(25243),r(69912)),m=r(14226),g=r(71353),v=r(50951),_=r(26279),T=r(94463),S=r(54134),y=r(16889),C=r(65156),x=r(68401),O=r(61403);!function(e){e[e.None=0]="None",e[e.ColorAndWater=1]="ColorAndWater",e[e.Highlight=2]="Highlight",e[e.Occluded=3]="Occluded"}(i||(i={}));class w{constructor(e,t){this.index=e,this.renderTargets=t,this._extent=(0,C.Ue)(),this.resolution=0,this.renderLocalOrigin=(0,O.al)(0,0,0,"O"),this.pixelRatio=1,this.mapUnitsPerPixel=1,this.canvasGeometries=new R,this.validTargets=null,this.hasDrapedFeatureSource=!1,this.hasDrapedRasterSource=!1,this.hasTargetWithoutRasterImage=!1,this.index=e,this.validTargets=new Array(t.renderTargets.length).fill(!1)}get extent(){return this._extent}getValidTexture(e){return this.validTargets[e]?this.renderTargets.getTarget(e).getTexture():null}get _needsColorWithoutRasterImage(){return this.hasDrapedRasterSource&&this.hasDrapedFeatureSource&&this.hasTargetWithoutRasterImage}getColorTexture(e){const t=e===i.ColorAndWater?this.renderTargets.getTarget(S.NH.Color):e===i.Highlight?this.renderTargets.getTarget(S.NH.Highlight):this.renderTargets.getTarget(S.NH.Occluded);return t?t.getTexture():null}getColorTextureNoRasterImage(){return this._needsColorWithoutRasterImage?this.getValidTexture(S.NH.ColorNoRasterImage):this.hasDrapedFeatureSource?this.getValidTexture(S.NH.Color):null}getNormalTexture(e){const t=e===i.ColorAndWater?this.renderTargets.getTarget(S.NH.Water):null;return t?t.getTexture():null}draw(e,t){const r=this.computeRenderTargetValidityBitfield();for(const i of this.renderTargets.renderTargets)i.type!==S.NH.ColorNoRasterImage||this._needsColorWithoutRasterImage?this.validTargets[i.type]=e.drawTarget(this,i,t):this.validTargets[i.type]=!1;return r^this.computeRenderTargetValidityBitfield()?x.Yg.CHANGED:x.Yg.UNCHANGED}computeRenderTargetValidityBitfield(){const e=this.validTargets;return+e[S.NH.Color]|+e[S.NH.ColorNoRasterImage]<<1|+e[S.NH.Highlight]<<2|+e[S.NH.Water]<<3|+e[S.NH.Occluded]<<4}setupGeometryViewsCyclical(e){this.setupGeometryViewsDirect();const t=.001*e.range;if(this._extent[0]-t<=e.min){const t=this.canvasGeometries.extents[this.canvasGeometries.numViews++];(0,C.cv)(this._extent,e.range,0,t)}if(this._extent[2]+t>=e.max){const t=this.canvasGeometries.extents[this.canvasGeometries.numViews++];(0,C.cv)(this._extent,-e.range,0,t)}}setupGeometryViewsDirect(){this.canvasGeometries.numViews=1,(0,C.JG)(this.canvasGeometries.extents[0],this._extent)}hasSomeSizedView(){for(let e=0;e<this.canvasGeometries.numViews;e++){const t=this.canvasGeometries.extents[e];if(t[0]!==t[2]&&t[1]!==t[3])return!0}return!1}applyViewport(e){e.setViewport(this.index===S.fu.INNER?0:this.resolution,0,this.resolution,this.resolution)}}class R{constructor(){this.extents=[(0,C.Ue)(),(0,C.Ue)(),(0,C.Ue)()],this.numViews=0}}var b=r(15245),A=r(8548),E=r(53634);class P{constructor(e,t){this.size=(0,b.c)(),this._fbo=null,this._fbo=new E.X(e,{colorTarget:A.Lm.TEXTURE,depthStencilTarget:A.OU.NONE},{target:A.No.TEXTURE_2D,pixelFormat:A.VI.RGBA,dataType:A.Br.UNSIGNED_BYTE,wrapMode:A.e8.CLAMP_TO_EDGE,samplingMode:A.cw.LINEAR_MIPMAP_LINEAR,hasMipmap:t,maxAnisotropy:8,width:0,height:0})}dispose(){this._fbo=(0,c.O3)(this._fbo)}getTexture(){return this._fbo?this._fbo.colorTexture:null}isValid(){return null!==this._fbo}resize(e,t){this.size[0]=e,this.size[1]=t,this._fbo.resize(this.size[0],this.size[1])}bind(e){e.bindFramebuffer(this._fbo)}generateMipMap(){this._fbo.colorTexture.descriptor.hasMipmap&&this._fbo.colorTexture.generateMipmap()}disposeRenderTargetMemory(){this._fbo?.resize(0,0)}get gpuMemoryUsage(){return this._fbo?.gpuMemoryUsage??0}}var D=r(68198);class I{constructor(e){const t=function(t,r){let i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return{type:r,fbo:new P(e,i),renderPass:t,valid:!1,lastUsed:1/0}};this.renderTargets=[t(D.C.MATERIAL,S.NH.Color),t(D.C.MATERIAL,S.NH.ColorNoRasterImage),t(D.C.MATERIAL_HIGHLIGHT,S.NH.Highlight,!1),t(D.C.MATERIAL_NORMAL,S.NH.Water),t(D.C.MATERIAL,S.NH.Occluded)]}getTarget(e){return this.renderTargets[e].fbo}dispose(){for(const e of this.renderTargets)e.fbo.dispose()}disposeRenderTargetMemory(){for(const e of this.renderTargets)e.fbo.disposeRenderTargetMemory()}validateUsageForTarget(e,t,r){if(e)t.lastUsed=r;else if(r-t.lastUsed>H)t.fbo.disposeRenderTargetMemory(),t.lastUsed=1/0;else if(t.lastUsed<1/0)return!0;return!1}get gpuMemoryUsage(){return this.renderTargets.reduce(((e,t)=>e+t.fbo.gpuMemoryUsage),0)}}const H=1e3;var N=r(59447);class M{constructor(e){this._context=e,this._perConstructorInstances=new N.r,this._frameCounter=0,this._keepAliveFrameCount=z}get viewingMode(){return this._context.viewingMode}get constructionContext(){return this._context}dispose(){this._perConstructorInstances.forEach((e=>e.forEach((e=>e.technique.destroy())))),this._perConstructorInstances.clear()}acquire(e,t){const r=t.key;let i=this._perConstructorInstances.get(e,r);if((0,c.Wi)(i)){const o=new e(this._context,t,(()=>this.release(o)));i=new F(o),this._perConstructorInstances.set(e,r,i)}return++i.refCount,i.technique}releaseAndAcquire(e,t,r){if((0,c.pC)(r)){if(t.key===r.key)return r;this.release(r)}return this.acquire(e,t)}release(e){if((0,c.Wi)(e)||this._perConstructorInstances.empty)return;const t=this._perConstructorInstances.get(e.constructor,e.key);(0,c.Wi)(t)||(--t.refCount,0===t.refCount&&(t.refZeroFrame=this._frameCounter))}frameUpdate(){this._frameCounter++,this._keepAliveFrameCount!==z&&this._perConstructorInstances.forEach(((e,t)=>{e.forEach(((e,r)=>{0===e.refCount&&e.refZeroFrame+this._keepAliveFrameCount<this._frameCounter&&(e.technique.destroy(),this._perConstructorInstances.delete(t,r))}))}))}async reloadAll(){const e=new Array;this._perConstructorInstances.forEach(((t,r)=>{e.push((async(e,t)=>{const r=t.shader;r&&(await r.reload(),e.forEach((e=>{e.technique.reload(this._context)})))})(t,r))})),await Promise.all(e)}}class F{constructor(e){this.technique=e,this.refCount=0,this.refZeroFrame=0}}const z=-1,L=e=>class extends e{constructor(){super(...arguments),this._isDisposed=!1}dispose(){for(const e of this._managedDisposables??[]){const t=this[e];this[e]=null,t&&"function"==typeof t.dispose&&t.dispose()}this._isDisposed=!0}get isDisposed(){return this._isDisposed}};L(class{});var U=r(60045),V=r(32718),B=r(97731);const W=V.Z.getLogger("esri.views.3d.webgl-engine.lib.GLMaterialRepository");class G{constructor(e,t,r,i){this._textureRepository=e,this._techniqueRepository=t,this.materialChanged=r,this.requestRender=i,this._id2glMaterialRef=new N.r}dispose(){this._textureRepository.dispose()}acquire(e,t){this._ownMaterial(e);let r=this._id2glMaterialRef.get(t,e.id);if((0,c.Wi)(r)){const i=e.createGLMaterial({material:e,techniqueRep:this._techniqueRepository,textureRep:this._textureRepository,output:t});r=new j(i),this._id2glMaterialRef.set(t,e.id,r)}return r.ref(),r.glMaterial}release(e,t){const r=this._id2glMaterialRef.get(t,e.id);(0,c.pC)(r)&&(r.unref(),r.referenced||((0,c.O3)(r.glMaterial),this._id2glMaterialRef.delete(t,e.id)))}_ownMaterial(e){(0,c.pC)(e.repository)&&e.repository!==this&&W.error("Material is already owned by a different material repository"),e.repository=this}}class j{constructor(e){this.glMaterial=e,this.refCnt=0}ref(){++this.refCnt}unref(){--this.refCnt,(0,B.hu)(this.refCnt>=0)}get referenced(){return this.refCnt>0}}var q=r(32534),k=r(87145),$=r(56529),Z=r(6394),X=r(91226),J=r(43565),Y=r(15226),Q=r(40854),K=r(93822),ee=r(48919);class te{constructor(e,t,r){this.shadowMap=e,this.ssaoHelper=t,this.slicePlane=r,this.slot=K.r.OPAQUE_MATERIAL,this.hasOccludees=!1,this.enableFillLights=!0,this._inverseViewport=(0,Z.a)(),this.lighting=new ee.c,this.ssr=new Q.O,this.multipassTerrain=new Y.a,this.multipassGeometry=new J._,this.clouds=new X.yl,this.overlays=[]}get camera(){return this._camera}set camera(e){this._camera=this.ssr.camera=e,this._inverseViewport[0]=1/e.fullViewport[2],this._inverseViewport[1]=1/e.fullViewport[3]}get inverseViewport(){return this._inverseViewport}}class re{constructor(e,t,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;this.rctx=e,this.sliceHelper=i,this.lastFrameCamera=new U.V,this.pass=D.C.MATERIAL,this.renderOccludedMask=ie,this.bindParameters=new te(t,r,(0,c.pC)(i)?i.plane:null)}resetRenderOccludedMask(){this.renderOccludedMask=ie}get isHighlightPass(){return this.pass===D.C.MATERIAL_HIGHLIGHT}}const ie=$.yD.Occlude|$.yD.OccludeAndTransparent|$.yD.OccludeAndTransparentStencil;var oe,se=r(11873),ae=r(81949),ne=r(88396),le=r(11186),ce=r(90045),de=r(67077),he=r(51378),ue=r(3384);!function(e){e[e.Highlight=0]="Highlight",e[e.Default=1]="Default"}(oe||(oe={}));class pe{constructor(){this.camera=new U.V,this.lightMat=(0,ae.c)()}}class fe{constructor(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.rctx=e,this.viewingMode=t,this._enabled=!1,this._snapshots=new Array,this._textureSize=0,this.maxTextureSize=0,this.numCascades=1,this.maxNumCascades=4,this.splitSchemeLambda=0,this.warp=!0,this._cascadeDistances=[0,0,0,0,0],this._usedCascadeDistances=(0,de.c)(),this._cascades=[new pe,new pe,new pe,new pe],this.maxTextureSize=this.rctx.parameters.maxTextureSize,this.snapshotCount=r}get depthTexture(){return this._depthTexture}get textureSize(){return this._textureSize}get cascadeDistances(){return(0,ce.s)(this._usedCascadeDistances,this._cascadeDistances[0],this.numCascades>1?this._cascadeDistances[1]:1/0,this.numCascades>2?this._cascadeDistances[2]:1/0,this.numCascades>3?this._cascadeDistances[3]:1/0)}dispose(){this._discardDepthTexture(),this._discardAllSnapshots()}set maxCascades(e){this.maxNumCascades=(0,y.uZ)(Math.floor(e),1,4)}get maxCascades(){return this.maxNumCascades}set enabled(e){this._enabled=e,e||(this._discardDepthTexture(),this._discardAllSnapshots())}get enabled(){return this._enabled}get ready(){return this._enabled&&(0,c.pC)(this._depthTexture)}get snapshotCount(){return this._snapshots.length}set snapshotCount(e){const t=this._snapshots.length;if(e>t){const r=e-t;this._snapshots.length=e;for(let e=0;e<r;++e)this._snapshots[t+e]=null}else if(e<this.snapshotCount){const r=t-e;for(let t=0;t<r;++t)this._discardSnapshot(e+t);this._snapshots.length=e}}getSnapshot(e){return this.enabled?this._snapshots[e]:null}getCascades(){for(let e=0;e<this.numCascades;++e)Ee[e]=this._cascades[e];return Ee.length=this.numCascades,Ee}start(e,t,r){(0,B.hu)(this.enabled),this._textureSize=this._computeTextureSize(e.fullWidth,e.fullHeight),this._ensureDepthTexture();const{near:i,far:o}=this._clampNearFar(r);this._computeCascadeDistances(o,i),this._setupMatrices(e,t);const s=e.viewMatrix,a=e.projectionMatrix;for(let n=0;n<this.numCascades;++n)this._constructCascade(n,a,s,t);this.lastOrigin=null,this.clear()}finish(e){(0,B.hu)(this.enabled),this.rctx.bindFramebuffer(e)}getShadowMapMatrices(e){if(!this.lastOrigin||!(0,le.k)(e,this.lastOrigin)){this.lastOrigin=this.lastOrigin||(0,g.c)(),(0,le.c)(this.lastOrigin,e);for(let t=0;t<this.numCascades;++t){(0,m.j)(Pe,this._cascades[t].lightMat,e);for(let e=0;e<16;++e)De[16*t+e]=Pe[e]}}return De}takeCascadeSnapshotTo(e,t){(0,B.hu)(this.enabled);const r=this._ensureSnapshot(t);this._bindFbo();const i=this.rctx,o=i.bindTexture(r,he.x.TEXTURE_UNIT_FOR_UPDATES);i.gl.copyTexSubImage2D(A.No.TEXTURE_2D,0,e.camera.viewport[0],e.camera.viewport[1],e.camera.viewport[0],e.camera.viewport[1],e.camera.viewport[2],e.camera.viewport[3]),i.bindTexture(o,he.x.TEXTURE_UNIT_FOR_UPDATES)}clear(){const e=this.rctx;this._bindFbo(),e.setClearColor(1,1,1,1),e.clearSafe(A.lk.COLOR_BUFFER_BIT|A.lk.DEPTH_BUFFER_BIT)}_computeTextureSize(e,t){const r=.5*Math.log(e*e+t*t)*Math.LOG2E,i=2**Math.round(r+.35);return Math.min(this.maxTextureSize,2*i)}_ensureDepthTexture(){if((0,c.pC)(this._depthTexture)&&this._depthTexture.descriptor.width===this._textureSize)return;this._discardDepthTexture();const e={target:A.No.TEXTURE_2D,pixelFormat:A.VI.RGBA,dataType:A.Br.UNSIGNED_BYTE,wrapMode:A.e8.CLAMP_TO_EDGE,samplingMode:A.cw.NEAREST,flipped:!0,width:this._textureSize,height:this._textureSize};this._depthTexture=new he.x(this.rctx,e),this._fbo=new E.X(this.rctx,{colorTarget:A.Lm.TEXTURE,depthStencilTarget:A.OU.DEPTH_RENDER_BUFFER,width:this._textureSize,height:this._textureSize},this._depthTexture)}_ensureSnapshot(e){let t=this._snapshots[e];if((0,c.pC)(t)&&t.descriptor.width===this._textureSize)return t;this._discardSnapshot(e);const r={target:A.No.TEXTURE_2D,pixelFormat:A.VI.RGBA,dataType:A.Br.UNSIGNED_BYTE,wrapMode:A.e8.CLAMP_TO_EDGE,samplingMode:A.cw.NEAREST,flipped:!0,width:this._textureSize,height:this._textureSize};return t=new he.x(this.rctx,r),this._snapshots[e]=t,t}_discardDepthTexture(){this._fbo=(0,c.O3)(this._fbo),this._depthTexture=(0,c.O3)(this._depthTexture)}_discardSnapshot(e){this._snapshots[e]=(0,c.O3)(this._snapshots[e])}_discardAllSnapshots(){for(let e=0;e<this.snapshotCount;++e)this._discardSnapshot(e)}_bindFbo(){const e=this.rctx;e.unbindTexture(this._depthTexture),e.bindFramebuffer(this._fbo)}_constructCascade(e,t,r,i){const o=this._cascades[e],s=-this._cascadeDistances[e],a=-this._cascadeDistances[e+1],n=(t[10]*s+t[14])/Math.abs(t[11]*s+t[15]),l=(t[10]*a+t[14])/Math.abs(t[11]*a+t[15]);(0,B.hu)(n<l);for(let d=0;d<8;++d){(0,ce.s)(_e,d%4==0||d%4==3?-1:1,d%4==0||d%4==1?-1:1,d<4?n:l,1),(0,ce.t)(Te[d],_e,ve);for(let e=0;e<3;++e)Te[d][e]/=Te[d][3]}(0,le.o)(Ae,Te[0]),(0,m.j)(me,be,Ae),o.camera.viewMatrix=me;for(let d=0;d<8;++d)(0,le.m)(Te[d],Te[d],o.camera.viewMatrix);(0,le.c)(Se,Te[0]),(0,le.c)(ye,Te[0]);for(let d=1;d<8;++d)for(let e=0;e<3;++e)Se[e]=Math.min(Se[e],Te[d][e]),ye[e]=Math.max(ye[e],Te[d][e]);Se[2]-=200,ye[2]+=200,o.camera.near=-ye[2],o.camera.far=-Se[2],this.warp?this._constructTrapezoidalProjection(r,i,o):this._constructOrthogonalProjection(o),(0,m.m)(o.lightMat,o.camera.projectionMatrix,o.camera.viewMatrix);const c=this._textureSize/2;o.camera.viewport[0]=e%2==0?0:c,o.camera.viewport[1]=0===Math.floor(e/2)?0:c,o.camera.viewport[2]=c,o.camera.viewport[3]=c}_constructOrthogonalProjection(e){(0,m.q)(e.camera.projectionMatrix,Se[0],ye[0],Se[1],ye[1],e.camera.near,e.camera.far)}_constructTrapezoidalProjection(e,t,r){const i=1/Te[0][3],o=1/Te[4][3];(0,B.hu)(i<o);let s=i+Math.sqrt(i*o);const a=Math.sin((0,y.ZF)(e[2]*t[0]+e[6]*t[1]+e[10]*t[2]));s/=a,function(e,t,r,i,o,s,a,n){(0,ne.a)(Ie,0,0);for(let y=0;y<4;++y)(0,ne.b)(Ie,Ie,e[y]);(0,ne.f)(Ie,Ie,.25),(0,ne.a)(He,0,0);for(let y=4;y<8;++y)(0,ne.b)(He,He,e[y]);(0,ne.f)(He,He,.25),(0,ne.l)(Ne[0],e[4],e[5],.5),(0,ne.l)(Ne[1],e[5],e[6],.5),(0,ne.l)(Ne[2],e[6],e[7],.5),(0,ne.l)(Ne[3],e[7],e[4],.5);let l=0,c=(0,ne.s)(Ne[0],Ie);for(let y=1;y<4;++y){const e=(0,ne.s)(Ne[y],Ie);e<c&&(c=e,l=y)}(0,ne.g)(Me,Ne[l],e[l+4]);const d=Me[0];let h,u;Me[0]=-Me[1],Me[1]=d,(0,ne.g)(Fe,He,Ie),(0,ne.h)(Fe,Me)<0&&(0,ne.n)(Me,Me),(0,ne.l)(Me,Me,Fe,r),(0,ne.i)(Me,Me),h=u=(0,ne.h)((0,ne.g)(ze,e[0],Ie),Me);for(let y=1;y<8;++y){const t=(0,ne.h)((0,ne.g)(ze,e[y],Ie),Me);t<h?h=t:t>u&&(u=t)}(0,ne.c)(i,Ie),(0,ne.f)(ze,Me,h-t),(0,ne.b)(i,i,ze);let p=-1,f=1,m=0,g=0;for(let y=0;y<8;++y){(0,ne.g)(Le,e[y],i),(0,ne.i)(Le,Le);const t=Me[0]*Le[1]-Me[1]*Le[0];t>0?t>p&&(p=t,m=y):t<f&&(f=t,g=y)}(0,B.T)(p>0,"leftArea"),(0,B.T)(f<0,"rightArea"),(0,ne.f)(Ue,Me,h),(0,ne.b)(Ue,Ue,Ie),(0,ne.f)(Ve,Me,u),(0,ne.b)(Ve,Ve,Ie),Be[0]=-Me[1],Be[1]=Me[0];const v=(0,B.ep)(i,e[g],Ve,(0,ne.b)(ze,Ve,Be),1,o),_=(0,B.ep)(i,e[m],Ve,ze,1,s),T=(0,B.ep)(i,e[m],Ue,(0,ne.b)(ze,Ue,Be),1,a),S=(0,B.ep)(i,e[g],Ue,ze,1,n);(0,B.T)(v,"rayRay"),(0,B.T)(_,"rayRay"),(0,B.T)(T,"rayRay"),(0,B.T)(S,"rayRay")}(Te,s,a,Ce,xe,Oe,we,Re),function(e,t,r,i,o){(0,ne.g)(qe,r,i),(0,ne.f)(qe,qe,.5),ke[0]=qe[0],ke[1]=qe[1],ke[2]=0,ke[3]=qe[1],ke[4]=-qe[0],ke[5]=0,ke[6]=qe[0]*qe[0]+qe[1]*qe[1],ke[7]=qe[0]*qe[1]-qe[1]*qe[0],ke[8]=1,ke[We(0,2)]=-(0,ne.h)(je(ke,0),e),ke[We(1,2)]=-(0,ne.h)(je(ke,1),e);let s=(0,ne.h)(je(ke,0),r)+ke[We(0,2)],a=(0,ne.h)(je(ke,1),r)+ke[We(1,2)],n=(0,ne.h)(je(ke,0),i)+ke[We(0,2)],l=(0,ne.h)(je(ke,1),i)+ke[We(1,2)];s=-(s+n)/(a+l),ke[We(0,0)]+=ke[We(1,0)]*s,ke[We(0,1)]+=ke[We(1,1)]*s,ke[We(0,2)]+=ke[We(1,2)]*s,s=1/((0,ne.h)(je(ke,0),r)+ke[We(0,2)]),a=1/((0,ne.h)(je(ke,1),r)+ke[We(1,2)]),ke[We(0,0)]*=s,ke[We(0,1)]*=s,ke[We(0,2)]*=s,ke[We(1,0)]*=a,ke[We(1,1)]*=a,ke[We(1,2)]*=a,ke[We(2,0)]=ke[We(1,0)],ke[We(2,1)]=ke[We(1,1)],ke[We(2,2)]=ke[We(1,2)],ke[We(1,2)]+=1,s=(0,ne.h)(je(ke,1),t)+ke[We(1,2)],a=(0,ne.h)(je(ke,2),t)+ke[We(2,2)],n=(0,ne.h)(je(ke,1),r)+ke[We(1,2)],l=(0,ne.h)(je(ke,2),r)+ke[We(2,2)],s=-.5*(s/a+n/l),ke[We(1,0)]+=ke[We(2,0)]*s,ke[We(1,1)]+=ke[We(2,1)]*s,ke[We(1,2)]+=ke[We(2,2)]*s,s=(0,ne.h)(je(ke,1),t)+ke[We(1,2)],a=(0,ne.h)(je(ke,2),t)+ke[We(2,2)],n=-a/s,ke[We(1,0)]*=n,ke[We(1,1)]*=n,ke[We(1,2)]*=n,o[0]=ke[0],o[1]=ke[1],o[2]=0,o[3]=ke[2],o[4]=ke[3],o[5]=ke[4],o[6]=0,o[7]=ke[5],o[8]=0,o[9]=0,o[10]=1,o[11]=0,o[12]=ke[6],o[13]=ke[7],o[14]=0,o[15]=ke[8]}(Ce,xe,we,Re,r.camera.projectionMatrix),r.camera.projectionMatrix[10]=2/(Se[2]-ye[2]),r.camera.projectionMatrix[14]=-(Se[2]+ye[2])/(Se[2]-ye[2])}_setupMatrices(e,t){(0,m.m)(ge,e.projectionMatrix,e.viewMatrix),(0,m.a)(ve,ge);const r=this.viewingMode===v.JY.Global?e.eye:(0,le.s)(Ae,0,0,1);(0,m.n)(be,[0,0,0],[-t[0],-t[1],-t[2]],r)}_clampNearFar(e){let{near:t,far:r}=e;return t<2&&(t=2),r<2&&(r=2),t>=r&&(t=2,r=4),{near:t,far:r}}_computeCascadeDistances(e,t){this.numCascades=Math.min(1+Math.floor((0,B.E6)(e/t,4)),this.maxNumCascades);const r=(e-t)/this.numCascades,i=(e/t)**(1/this.numCascades);let o=t,s=t;for(let a=0;a<this.numCascades+1;++a)this._cascadeDistances[a]=(0,y.t7)(o,s,this.splitSchemeLambda),o*=i,s+=r}get gpuMemoryUsage(){return this._snapshots.reduce(((e,t)=>e+(0,ue.un)(t)),this._fbo?.gpuMemoryUsage??0)}get test(){const e=this;return{maxNumCascades:this.maxNumCascades,cascades:this._cascades,textureSize:this._textureSize,set splitSchemeLambda(t){e.splitSchemeLambda=t},get splitSchemeLambda(){return e.splitSchemeLambda},set warp(t){e.warp=t},get warp(){return e.warp}}}}const me=(0,ae.c)(),ge=(0,ae.c)(),ve=(0,ae.c)(),_e=(0,de.c)(),Te=[];for(let fr=0;fr<8;++fr)Te.push((0,de.c)());const Se=(0,g.c)(),ye=(0,g.c)(),Ce=(0,Z.a)(),xe=(0,Z.a)(),Oe=(0,Z.a)(),we=(0,Z.a)(),Re=(0,Z.a)(),be=(0,ae.c)(),Ae=(0,g.c)(),Ee=[],Pe=(0,ae.c)(),De=new Float32Array(64),Ie=(0,Z.a)(),He=(0,Z.a)(),Ne=[(0,Z.a)(),(0,Z.a)(),(0,Z.a)(),(0,Z.a)()],Me=(0,Z.a)(),Fe=(0,Z.a)(),ze=(0,Z.a)(),Le=(0,Z.a)(),Ue=(0,Z.a)(),Ve=(0,Z.a)(),Be=(0,Z.a)();function We(e,t){return 3*t+e}const Ge=(0,Z.a)();function je(e,t){return(0,ne.a)(Ge,e[t],e[t+3]),Ge}const qe=(0,Z.a)(),ke=(0,se.c)();class $e{constructor(){this.adds=new d.Z,this.removes=new d.Z,this.updates=new d.Z({allocator:e=>e||new Ze,deallocator:e=>(e.renderGeometry=null,e)})}clear(){this.adds.clear(),this.removes.clear(),this.updates.clear()}prune(){this.adds.prune(),this.removes.prune(),this.updates.prune()}}class Ze{}class Xe{constructor(){this.adds=new Array,this.removes=new Array,this.updates=new Array}}var Je=r(81268),Ye=r(54463),Qe=r(78289);function Ke(e){return e.data.indexCount>=1}var et=r(50256),tt=r(94425),rt=r(85380);class it extends rt.Pf{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.c)();super(),this.origin=e,this.slicePlaneLocalOrigin=this.origin}}var ot=r(47475);class st{constructor(e){this.first=e.from,this.count=e.to-e.from}}class at{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.from=e,this.to=t}}class nt extends at{constructor(e,t,r,i,o,s){super(t,r),this.id=e,this.isVisible=i,this.hasHighlights=o,this.hasOccludees=s}}function lt(e){return Array.from(e.values()).sort(ct)}function ct(e,t){return e.from===t.from?e.to-t.to:e.from-t.from}function dt(e,t){if(0===e.length)return void e.push(new st(t));const r=e[e.length-1];if(function(e,t){return e.first+e.count>=t.from}(r,t)){const e=t.from-r.first+t.to-t.from;r.count=e}else e.push(new st(t))}class ht{constructor(e,t){this._pool=e,this._size=0,this._buffer=e.newBuffer(ut(t))}dispose(){this._buffer=this._pool.deleteBuffer(this._buffer),this._size=0}release(){this.erase(0,this._size),this.dispose()}get vao(){return this._buffer.vao}get array(){return this._buffer.array}get size(){return this._size}grow(e){this._resize(this._size+e,!0).dispose()}alloc(e){return this._resize(e,!1)}_resize(e,t){let r;const i=function(e,t,r){return t<=r?e>=r?e:ut(Math.max(2*e,r)):e<=2*r?e:ut(r)}(this._buffer.length,this._size,e);if(this._buffer.length!==i){const e=this._pool.newBuffer(i);t&&(e.array.set(this._buffer.array.subarray(0,Math.min(this._size,i))),e.vao.vertexBuffers.geometry.setSubData(e.array,0,0,e.array.byteLength)),r=this._buffer,this._buffer=e}const o=this._size;return this._size=e,r?{dispose:()=>{r.array.fill(0,0,o),this._pool.deleteBuffer(r)},copy:(e,t,i)=>this._buffer.array.set(r.array.subarray(t,i),e),hasNewBuffer:!0}:{dispose:()=>{},copy:(e,t,r)=>{e!==t&&this._buffer.array.copyWithin(e,t,r)},hasNewBuffer:!1}}erase(e,t){this._buffer.array.fill(0,e,t)}}function ut(e){return 65536*Math.ceil(e/65536)}var pt=r(18759),ft=r(95439),mt=r(44070),gt=r(45412);class vt{constructor(e,t,r,i){this.vao=new gt.U(e,t,{geometry:r},{geometry:mt.f.createVertex(e,A.l1.STATIC_DRAW)}),this.array=new Float32Array(i),this.vao.vertexBuffers.geometry.setSize(this.array.byteLength)}dispose(){this.vao.dispose(!0)}get length(){return this.array.length}}const _t=pt.an+1;class Tt{constructor(e,t,r){this._rctx=e,this._locations=t,this._layout=r,this._cache=e.newCache(`MergedRenderer pool ${(0,ft.D)()}`,St)}dispose(){this._cache.destroy()}newBuffer(e){const t=e.toString(),r=this._cache.pop(t);if((0,c.pC)(r)){const e=r.pop();return r.length>0&&this._cache.put(t,r,e.array.byteLength*r.length,_t),e}return new vt(this._rctx,this._locations,this._layout,e)}deleteBuffer(e){const t=e.array.byteLength,r=e.array.length.toString(),i=this._cache.pop(r);return(0,c.pC)(i)?(i.push(e),this._cache.put(r,i,t*i.length,-1)):this._cache.put(r,[e],t,-1),null}}function St(e,t){if(t===pt.lN.ALL)return void e.forEach((e=>e.dispose()));const r=e.pop(),i=e.length*r.array.byteLength;return r.dispose(),i}var yt=r(32683);class Ct{constructor(e,t,r){this._rctx=e,this._materialRepository=t,this._material=r,this.type="MergedRenderer",this._dataByOrigin=new Map,this._renderCommandData=new d.Z,this._hasHighlights=!1,this._hasOccludees=!1,this._glMaterials=new tt.p(this._material,this._materialRepository),this._bufferWriter=r.createBufferWriter(),this._bufferPool=new Tt(e,r.vertexAttributeLocations,(0,et.K)(this._bufferWriter.vertexBufferLayout))}dispose(){this._glMaterials.destroy(),this._dataByOrigin.forEach((e=>e.buffer.dispose())),this._dataByOrigin.clear(),this._bufferPool.dispose()}get isEmpty(){return 0===this._dataByOrigin.size}get hasHighlights(){return this._hasHighlights}get hasOccludees(){return this._hasOccludees}get hasWater(){return!this.isEmpty&&this._material instanceof ot.H}get rendersOccluded(){return!this.isEmpty&&this._material.renderOccluded!==$.yD.Occlude}modify(e){this._updateGeometries(e.updates),this._addAndRemoveGeometries(e.adds,e.removes),this._updateRenderCommands()}_addAndRemoveGeometries(e,t){const r=this._bufferWriter,i=r.vertexBufferLayout.stride/4,o=this._dataByOrigin,s=function(e,t){const r=new Map;for(const i of e)Ot(r,i,!0);for(const i of t)Ot(r,i,!1);return r}(e,t);s.forEach(((e,t)=>{s.delete(t);const a=e.toAdd.reduce(((e,t)=>e+r.elementCount(t.data)),0);let n=o.get(t);if(null==n)(0,B.hu)(0===e.toRemove.length),n=new At(e.origin,new ht(this._bufferPool,a*i)),o.set(t,n);else if(0===e.toAdd.length&&n.instances.size===e.toRemove.length)return n.buffer.dispose(),void o.delete(t);let l=0;n.instances.forEach((e=>l+=e.to-e.from));const c=e.toRemove.reduce(((e,t)=>e+r.elementCount(t.data)),0),d=n.buffer.size,h=(l+a-c)*i,u=Pt;if(h<d/2?this._removeAndRebuild(n,e.toRemove,i,h,u):e.toRemove.length>0&&this._remove(n,e.toRemove,i,u),e.toAdd.length>0){const t=Dt;(0,B.u_)(t,-e.origin[0],-e.origin[1],-e.origin[2]),this._add(n,e.toAdd,i,t,u)}const p=n.buffer.vao.vertexBuffers.geometry;bt(u),u.forAll((e=>{let{from:t,to:r}=e;if(t<r){const e=n.buffer.array,i=4,o=t*i,s=r*i;p.setSubData(e,o,o,s)}})),u.clear(),n.drawCommandsDirty=!0}))}_updateGeometries(e){const t=this._bufferWriter,r=t.vertexBufferLayout.stride/4;for(const i of e){const e=i.renderGeometry,o=this._dataByOrigin.get(e.origin.id),s=o&&o.instances.get(e.id);if(!s)return;const a=i.updateType;if(a&Qe.$.State.VISIBILITIES&&(s.isVisible=e.instanceParameters.visible),a&(Qe.$.State.HIGHLIGHTS|Qe.$.State.VISIBILITIES)){const t=e.instanceParameters.visible;s.hasHighlights=!!e.instanceParameters.highlights&&t}if(a&Qe.$.State.OCCLUDEES&&(s.hasOccludees=!!e.instanceParameters.occludees),a&(Qe.$.State.VERTEXATTRS|Qe.$.State.TRANSFORMATION)){const{array:i,vao:a}=o.buffer;(0,yt.bZ)(e,It,Ht),t.write({transformation:It,invTranspTransformation:Ht},e.data,t.vertexBufferLayout.createView(i.buffer),s.from),(0,B.hu)(s.from+t.elementCount(e.data)===s.to,"material VBO layout has changed"),a.vertexBuffers.geometry.setSubData(i,s.from*r*4,s.from*r*4,s.to*r*4)}o.drawCommandsDirty=!0}}_updateRenderCommands(){this._hasHighlights=!1,this._hasOccludees=!1,this._dataByOrigin.forEach((e=>{e.hasHiddenInstances=!1,e.hasHighlights=!1,e.hasOccludees=!1,(0,l.oE)(e.instances,(t=>(t.isVisible?(t.hasHighlights&&(this._hasHighlights=!0,e.hasHighlights=!0),t.hasOccludees&&(this._hasOccludees=!0,e.hasOccludees=!0)):e.hasHiddenInstances=!0,e.hasHiddenInstances&&e.hasHighlights&&e.hasOccludees)))}));const e=e=>{if(e.drawCommandsDefault=null,e.drawCommandsHighlight=null,e.drawCommandsOccludees=null,e.drawCommandsShadowHighlightRest=null,0===e.instances.size)return;if(!wt(e)){const t=this._bufferWriter.vertexBufferLayout.stride,r=4*e.buffer.size/t;return void(e.drawCommandsDefault=[{first:0,count:r}])}const t=lt(e.instances);e.drawCommandsDefault=[],e.drawCommandsHighlight=[],e.drawCommandsOccludees=[],e.drawCommandsShadowHighlightRest=[];for(const r of t)r.isVisible&&(r.hasOccludees?dt(e.drawCommandsOccludees,r):dt(e.drawCommandsDefault,r),r.hasHighlights?dt(e.drawCommandsHighlight,r):dt(e.drawCommandsShadowHighlightRest,r))};this._dataByOrigin.forEach((t=>{t.drawCommandsDirty&&(e(t),t.drawCommandsDirty=!1)}))}updateAnimation(e){return this._material.update(e)}requiresSlot(e,t){return null==e||this._material.requiresSlot(e,t)}render(e,t){if(!this.requiresSlot(t.slot,e))return!1;const r=e===D.C.MATERIAL_HIGHLIGHT||e===D.C.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT;if(r&&!this._hasHighlights)return!1;const i=e===D.C.MATERIAL_DEPTH_SHADOWMAP_DEFAULT,o=!(r||i);if(this._dataByOrigin.forEach((e=>{if(r&&!e.hasHighlights)return;const t=(r?e.drawCommandsHighlight:i&&wt(e)?e.drawCommandsShadowHighlightRest:e.drawCommandsDefault)||null,s=o&&e.drawCommandsOccludees||null;((0,c.pC)(t)||(0,c.pC)(s))&&this._renderCommandData.push(new Et(e.origin,e.buffer,t,s))})),0===this._renderCommandData.length)return!1;const s=this._rctx,a=this._glMaterials.load(s,e);if((0,c.Wi)(a))return this._renderCommandData.clear(),!1;const n=a.beginSlot(t);return s.bindTechnique(n,this._material.parameters,t,!1),this._renderCommandData.forAll((e=>{n.bindDraw(e,t);const{buffer:r,renderCommands:i,occludeeCommands:o}=e;n.ensureAttributeLocations(r.vao),s.bindVAO(r.vao);const a=n.primitiveType;(0,c.pC)(i)&&this._renderCommands(s,a,i),(0,c.pC)(o)&&(n.bindPipelineState(s,t.slot,!0),this._renderCommands(s,a,o),n.bindPipelineState(s,t.slot,!1))})),this._renderCommandData.clear(),!0}_renderCommands(e,t,r){for(let i=0;i<r.length;i++)e.drawArrays(t,r[i].first,r[i].count)}_removeAndRebuild(e,t,r,i,o){for(const c of t)e.instances.delete(c.id);const s=lt(e.instances);e.instances.clear();const a=e.buffer.size,n=e.buffer.alloc(i);let l=0;for(const c of s){const t=c.from*r,i=c.to*r;n.copy(l,t,i),c.from=l/r,l+=i-t,c.to=l/r,e.instances.set(c.id,c)}o.push(new at(0,n.hasNewBuffer?e.buffer.array.length:a)),n.dispose(),e.buffer.erase(l,o.back().to),e.holes.clear()}_remove(e,t,r,i){for(const o of t){const t=o.id,s=e.instances.get(t),a=s.from*r,n=s.to*r;e.buffer.erase(a,n),e.holes.push(new at(s.from,s.to)),e.instances.delete(t),i.push(new at(a,n))}bt(e.holes)}_add(e,t,r,i,o){if(0===t.length)return;const s=this._bufferWriter;let a=s.vertexBufferLayout.createView(e.buffer.array.buffer);const n=e.holes.length>0;let l=Number.MAX_SAFE_INTEGER,d=Number.MIN_SAFE_INTEGER;for(const h of t){const t=(0,c.pC)(h.transformation)?(0,m.m)(It,i,h.transformation):i;(0,m.a)(Ht,t);const u=(0,m.t)(Ht,Ht),p=s.elementCount(h.data),f=p*r;let g=Rt(e.holes,p);(0,c.Wi)(g)&&(g=e.buffer.size/r,e.buffer.grow(f),a=s.vertexBufferLayout.createView(e.buffer.array.buffer)),s.write({transformation:t,invTranspTransformation:u},h.data,a,g);const v=h.instanceParameters.visible,_=!!h.instanceParameters.highlights&&v,T=!!h.instanceParameters.occludees,S=new nt(h.id,g,g+p,v,_,T);(0,B.hu)(null==e.instances.get(h.id)),e.instances.set(h.id,S),n?o.push(new at(S.from*r,S.to*r)):(l=Math.min(S.from,l),d=Math.max(S.to,d))}n||o.push(new at(l*r,d*r))}get test(){return{material:this._material,glMaterials:this._glMaterials,dataByOrigin:this._dataByOrigin}}}class xt{constructor(e){this.origin=e,this.toAdd=new Array,this.toRemove=new Array}}function Ot(e,t,r){const i=t.origin;if((0,c.Wi)(i))return;let o=e.get(i.id);null==o&&(o=new xt(i.vec3),e.set(i.id,o)),r?o.toAdd.push(t):o.toRemove.push(t)}function wt(e){return e.hasOccludees||e.hasHighlights||e.hasHiddenInstances}function Rt(e,t){let r;if(!e.some((e=>!(e.to-e.from<t)&&(r=e,!0))))return null;const i=r.from;return r.from+=t,r.from>=r.to&&e.removeUnordered(r),i}function bt(e){const t=new Map;e.forAll((e=>t.set(e.from,e)));let r=!0;for(;r;)r=!1,e.forEach((i=>{const o=t.get(i.to);o&&(i.to=o.to,t.delete(o.from),e.removeUnordered(o),r=!0)}))}class At{constructor(e,t){this.origin=e,this.buffer=t,this.instances=new Map,this.holes=new d.Z({deallocator:null}),this.hasHiddenInstances=!1,this.hasHighlights=!1,this.hasOccludees=!1,this.drawCommandsDirty=!1}}class Et extends it{constructor(e,t,r,i){super(e),this.buffer=t,this.renderCommands=r,this.occludeeCommands=i}}const Pt=new d.Z({deallocator:null}),Dt=(0,ae.c)(),It=(0,ae.c)(),Ht=(0,ae.c)();let Nt=class extends s.Z{constructor(e){super(e),this._pending=new Mt,this._changes=new $e,this._materialRenderers=new Map,this._sortedMaterialRenderers=new d.Z,this._geometries=new Map,this._hasHighlights=!1,this._hasWater=!1}destroy(){this._changes.prune(),this._materialRenderers.forEach((e=>e.dispose())),this._materialRenderers.clear(),this._sortedMaterialRenderers.clear(),this._geometries.clear()}get updating(){return!this._pending.empty||this._changes.updates.length>0}get rctx(){return this.rendererContext.rctx}get _materialRepository(){return this.rendererContext.materialRepository}get _localOriginFactory(){return this.rendererContext.localOriginFactory}get hasHighlights(){return this._hasHighlights}get hasWater(){return this._hasWater}get rendersOccluded(){return(0,l.oE)(this._materialRenderers,(e=>e.rendersOccluded))}get isEmpty(){return!this.updating&&0===this._materialRenderers.size&&0===this._geometries.size}commitChanges(){if(!this.updating)return!1;this._processAddsRemoves();const e=function(e){const t=new Map,r=e=>{let r=t.get(e);return r||(r=new Xe,t.set(e,r)),r};return e.removes.forAll((e=>{Ke(e)&&r(e.material).removes.push(e)})),e.adds.forAll((e=>{Ke(e)&&r(e.material).adds.push(e)})),e.updates.forAll((e=>{Ke(e.renderGeometry)&&r(e.renderGeometry.material).updates.push(e)})),t}(this._changes);let t=!1,r=!1,i=!1;return e.forEach(((e,o)=>{let s=this._materialRenderers.get(o);if(!s&&e.adds.length>0&&(s=new Ct(this.rctx,this._materialRepository,o),this._materialRenderers.set(o,s),t=!0,r=!0,i=!0),!s)return;const a=r||s.hasHighlights,n=i||s.hasWater;s.modify(e),r=r||a!==s.hasHighlights,i=i||n!==s.hasWater,s.isEmpty&&(this._materialRenderers.delete(o),s.dispose(),t=!0)})),this._changes.clear(),t&&this._updateSortedMaterialRenderers(),r&&(this._hasHighlights=(0,l.oE)(this._materialRenderers,(e=>e.hasHighlights))),i&&(this._hasWater=(0,l.oE)(this._materialRenderers,(e=>e.hasWater))),this.notifyChange("updating"),!0}addGeometries(e,t){if(0===e.length)return;const r=this._validateRenderGeometries(e);for(const o of r)this._geometries.set(o.id,o);const i=this._pending.empty;for(const o of r)this._pending.adds.add(o);i&&this.notifyChange("updating"),t===Qe.$.Geometry.UPDATE&&this._notifyGraphicGeometryChanged(e)}removeGeometries(e,t){const r=this._pending.empty,i=this._pending.adds;for(const o of e)i.has(o)?(this._pending.removed.add(o),i.delete(o)):this._pending.removed.has(o)||this._pending.removes.add(o),this._geometries.delete((0,c.Wg)(o.id));r&&!this._pending.empty&&this.notifyChange("updating"),t===Qe.$.Geometry.UPDATE&&this._notifyGraphicGeometryChanged(e)}modifyGeometries(e,t){const r=0===this._changes.updates.length;for(const i of e){const e=this._changes.updates.pushNew();e.renderGeometry=this._validateRenderGeometry(i),e.updateType=t}switch(r&&this._changes.updates.length>0&&this.notifyChange("updating"),t){case Qe.$.State.TRANSFORMATION:case Qe.$.State.VERTEXATTRS:return this._notifyGraphicGeometryChanged(e);case Qe.$.State.VISIBILITIES:return this._notifyGraphicVisibilityChanged(e)}}updateAnimation(e){let t=!1;return this._sortedMaterialRenderers.forAll((r=>{let{materialRenderer:i}=r;return t=i.updateAnimation(e)||t})),t}render(e,t){for(let r=0;r<this._sortedMaterialRenderers.length;r++){const i=this._sortedMaterialRenderers.data[r];i.material.shouldRender(e)&&i.materialRenderer.render(e.pass,t)}}intersect(e,t,r,i,o){return this._geometries.forEach((s=>{if(i&&!i(s))return;this._intersectRenderGeometry(s,r,t,0,e,o);const a=this.rendererContext.longitudeCyclical;a&&(s.boundingSphere[0]-s.boundingSphere[3]<a.min&&this._intersectRenderGeometry(s,r,t,a.range,e,o),s.boundingSphere[0]+s.boundingSphere[3]>a.max&&this._intersectRenderGeometry(s,r,t,-a.range,e,o)),o++})),o}_updateSortedMaterialRenderers(){this._sortedMaterialRenderers.clear();let e=0;this._materialRenderers.forEach(((t,r)=>{r.insertOrder=e++,this._sortedMaterialRenderers.push({material:r,materialRenderer:t})})),this._sortedMaterialRenderers.sort(((e,t)=>{const r=t.material.renderPriority-e.material.renderPriority;return 0!==r?r:e.material.insertOrder-t.material.insertOrder}))}_processAddsRemoves(){this._changes.adds.clear(),this._changes.removes.clear(),this._changes.adds.pushArray(Array.from(this._pending.adds)),this._changes.removes.pushArray(Array.from(this._pending.removes));for(let e=0;e<this._changes.updates.length;){const t=this._changes.updates.data[e];this._pending.has(t.renderGeometry)?this._changes.updates.removeUnorderedIndex(e):e++}this._pending.clear()}_intersectRenderGeometry(e,t,r,i,o,s){if(!e.instanceParameters.visible)return;let a=0;(0,c.pC)(e.transformation)&&(i+=e.transformation[12],a=e.transformation[13]),Ft[0]=r[0]-i,Ft[1]=r[1]-a,Ft[2]=1,zt[0]=r[0]-i,zt[1]=r[1]-a,zt[2]=0,e.screenToWorldRatio=this.rendererContext.screenToWorldRatio,e.material.intersect(e,null,e.getShaderTransformation(),o,Ft,zt,((r,i,a)=>{!function(e,t,r,i,o,s,a){const n={layerUid:s,graphicUid:a,triangleNr:t},l=t=>{t.set(Ye.q7.OVERLAY,n,e.dist,e.normal,e.transformation,r,i)};if((null==o.results.min.drapedLayerOrder||r>=o.results.min.drapedLayerOrder)&&(null==o.results.min.dist||o.results.ground.dist<=o.results.min.dist)&&l(o.results.min),o.options.store!==Ye.eC.MIN&&(null==o.results.max.drapedLayerOrder||r<o.results.max.drapedLayerOrder)&&(null==o.results.max.dist||o.results.ground.dist>o.results.max.dist)&&l(o.results.max),o.options.store===Ye.eC.ALL){const e=(0,Je.LP)(o.ray);l(e),o.results.all.push(e)}}(t,a,e.material.renderPriority,s,o,e.layerUid,e.graphicUid)}),e.calculateShaderTransformation,t)}_notifyGraphicGeometryChanged(e){if((0,c.Wi)(this.drapeSource.notifyGraphicGeometryChanged))return;let t;for(const r of e){const e=r.graphicUid;(0,c.pC)(e)&&e!==t&&(this.drapeSource.notifyGraphicGeometryChanged(e),t=e)}}_notifyGraphicVisibilityChanged(e){if((0,c.Wi)(this.drapeSource.notifyGraphicVisibilityChanged))return;let t;for(const r of e){const e=r.graphicUid;(0,c.pC)(e)&&e!==t&&(this.drapeSource.notifyGraphicVisibilityChanged(e),t=e)}}_validateRenderGeometries(e){for(const t of e)this._validateRenderGeometry(t);return e}_validateRenderGeometry(e){return(0,c.Wi)(e.origin)&&(e.origin=this._localOriginFactory.getOrigin(e.boundingSphere)),e}get test(){return{sortedMaterialRenderers:this._sortedMaterialRenderers}}};(0,o._)([(0,p.Cb)()],Nt.prototype,"drapeSource",void 0),(0,o._)([(0,p.Cb)()],Nt.prototype,"updating",null),(0,o._)([(0,p.Cb)()],Nt.prototype,"rctx",null),(0,o._)([(0,p.Cb)()],Nt.prototype,"rendererContext",void 0),(0,o._)([(0,p.Cb)()],Nt.prototype,"_materialRepository",null),(0,o._)([(0,p.Cb)()],Nt.prototype,"_localOriginFactory",null),Nt=(0,o._)([(0,f.j)("esri.views.3d.webgl-engine.lib.SortedRenderGeometryRenderer")],Nt);class Mt{constructor(){this.adds=new Set,this.removes=new Set,this.removed=new Set}get empty(){return 0===this.adds.size&&0===this.removes.size&&0===this.removed.size}has(e){return this.adds.has(e)||this.removes.has(e)||this.removed.has(e)}clear(){this.adds.clear(),this.removes.clear(),this.removed.clear()}}const Ft=(0,g.c)(),zt=(0,g.c)();var Lt=r(38330),Ut=r(98634),Vt=r(82144),Bt=r(31132),Wt=r(7566),Gt=r(27627),jt=r(46516),qt=r(36207);class kt extends Bt.A{initializeProgram(e){const t=kt.shader.get().build(this.configuration);return new Gt.$(e.rctx,t,Wt.i)}initializePipeline(){return(0,qt.sm)({colorWrite:qt.BK})}}kt.shader=new Vt.J(jt.S,(()=>r.e(9956).then(r.bind(r,49956))));var $t=r(23038);class Zt{constructor(e,t,r){this._techniqueRep=e,this._rctx=t,this._requestRender=r,this._enabled=!1,this._ssaoTechniqueConfig=new $t.F,this.quadVAO=null,this._blurSizePx=2,this._attenuation=.5}dispose(){this.quadVAO=(0,c.O3)(this.quadVAO)}disposeOffscreenBuffers(){(0,c.yw)(this._ssaoFBO,(e=>e.resize(0,0))),(0,c.yw)(this._blur0FBO,(e=>e.resize(0,0))),(0,c.yw)(this._blur1FBO,(e=>e.resize(0,0)))}set enabled(e){e?this._enable():this._disable()}get enabled(){return this._enabled}get ready(){return this.enabled&&(0,c.pC)(this._noiseTexture)&&(0,c.pC)(this._ssaoFBO)&&(0,c.pC)(this._blur0FBO)&&(0,c.pC)(this._blur1FBO)}get colorTexture(){return(0,c.pC)(this._blur1FBO)?this._blur1FBO.colorTexture:null}get width(){return(0,c.pC)(this._ssaoFBO)?this._ssaoFBO.width:-1}get height(){return(0,c.pC)(this._ssaoFBO)?this._ssaoFBO.height:-1}computeSSAO(e,t,r){if(!this.enabled||(0,c.Wi)(t)||(0,c.Wi)(r)||(0,c.Wi)(this._noiseTexture)||(0,c.Wi)(this._ssaoFBO)||(0,c.Wi)(this._blur0FBO)||(0,c.Wi)(this._blur1FBO))return;const i=this._rctx,o=e.camera,s=o.fullViewport,a=s[2],n=s[3],l=a/this._blurSizePx,d=n/this._blurSizePx;this._ssaoFBO.resize(a,n),this._blur0FBO.resize(l,d),this._blur1FBO.resize(l,d);const h=1*a,u=1*n;i.bindFramebuffer(this._ssaoFBO),i.setViewport(0,0,a,n);const p=i.bindTechnique(this._ssaoTechnique,Xt,e);p.setUniform2f("rnmScale",a/this._noiseTexture.descriptor.width,n/this._noiseTexture.descriptor.height);let f=1/o.computeRenderPixelSizeAtDist(1);p.setUniform1f("projScale",1*f),p.setUniform2f("screenSize",h,u);const m=(0,le.i)(o.eye,o.center);let g=20*o.computeRenderPixelSizeAtDist(m);g=Math.max(.1,g),p.setUniform1f("radius",g),p.setUniform1f("intensity",4*this._attenuation/g**6),p.bindTexture("rnm",this._noiseTexture),p.bindTexture("normalMap",r),p.bindTexture("depthMap",t),(0,c.Wi)(this.quadVAO)&&(this.quadVAO=(0,q.ow)(this._rctx)),i.bindVAO(this.quadVAO),i.drawArrays(A.MX.TRIANGLE_STRIP,0,(0,ue._V)(this.quadVAO,"geometry"));const v=i.bindTechnique(this._blurTechnique,Xt,e);v.bindTexture("tex",this._ssaoFBO.colorTexture),v.bindTexture("normalMap",r),v.bindTexture("depthMap",t),i.setViewport(0,0,h/this._blurSizePx,u/this._blurSizePx),i.bindFramebuffer(this._blur0FBO),v.setUniform2f("screenSize",h,u),v.setUniform2f("blurSize",0,1*this._blurSizePx/u),m>5e4&&(f=Math.max(0,f-(m-5e4))),v.setUniform1f("projScale",f),i.drawArrays(A.MX.TRIANGLE_STRIP,0,(0,ue._V)(this.quadVAO,"geometry")),v.setUniform2f("blurSize",1*this._blurSizePx/h,0),i.bindFramebuffer(this._blur1FBO),v.bindTexture("tex",this._blur0FBO.colorTexture),i.drawArrays(A.MX.TRIANGLE_STRIP,0,(0,ue._V)(this.quadVAO,"geometry")),i.setViewport(s[0],s[1],s[2],s[3])}_selectPrograms(){this._ssaoTechniqueConfig.output=$t.Q.SSAO,this._ssaoTechnique=this._techniqueRep.releaseAndAcquire(kt,this._ssaoTechniqueConfig,this._ssaoTechnique),this._ssaoTechniqueConfig.output=$t.Q.Blur,this._blurTechnique=this._techniqueRep.releaseAndAcquire(kt,this._ssaoTechniqueConfig,this._blurTechnique)}_enable(){this.enabled||(this._enabled=!0,this._loadResources((()=>{this._enabled&&this._initialize()})))}_loadResources(e){this._data?e():r.e(3412).then(r.bind(r,43412)).then((t=>{this._data=t,e()}))}_initialize(){const e={target:A.No.TEXTURE_2D,pixelFormat:A.VI.RGBA,dataType:A.Br.UNSIGNED_BYTE,samplingMode:A.cw.LINEAR,wrapMode:A.e8.CLAMP_TO_EDGE,width:0,height:0},t={colorTarget:A.Lm.TEXTURE,depthStencilTarget:A.OU.NONE};(0,Lt.t)(this._data.noiseTexture).then((r=>{this._enabled&&(this._ssaoFBO=new E.X(this._rctx,t,e),this._blur0FBO=new E.X(this._rctx,t,e),this._blur1FBO=new E.X(this._rctx,t,e),this._noiseTexture=new he.x(this._rctx,{target:A.No.TEXTURE_2D,pixelFormat:A.VI.RGBA,dataType:A.Br.UNSIGNED_BYTE,hasMipmap:!0,width:r.width,height:r.height},r),this._requestRender())})),this._selectPrograms()}_disable(){this._enabled=!1,this._noiseTexture=(0,c.O3)(this._noiseTexture),this._blur1FBO=(0,c.O3)(this._blur1FBO),this._blur0FBO=(0,c.O3)(this._blur0FBO),this._ssaoFBO=(0,c.O3)(this._ssaoFBO)}get gpuMemoryUsage(){return((0,c.pC)(this._blur0FBO)?this._blur0FBO.gpuMemoryUsage:0)+((0,c.pC)(this._blur1FBO)?this._blur1FBO.gpuMemoryUsage:0)+((0,c.pC)(this._ssaoFBO)?this._ssaoFBO.gpuMemoryUsage:0)}get test(){return{ssao:this._ssaoFBO,blur:this._blur1FBO}}}const Xt=new Ut.K;var Jt=r(61863);class Yt extends Bt.A{initializeProgram(e){const t=Yt.shader.get().build();return new Gt.$(e.rctx,t,Wt.i)}initializePipeline(){return this.configuration.hasAlpha?(0,qt.sm)({blending:(0,qt.wK)(A.zi.SRC_ALPHA,A.zi.ONE,A.zi.ONE_MINUS_SRC_ALPHA,A.zi.ONE_MINUS_SRC_ALPHA),colorWrite:qt.BK}):(0,qt.sm)({colorWrite:qt.BK})}}Yt.shader=new Vt.J(Jt.T,(()=>r.e(7026).then(r.bind(r,77026))));var Qt=r(33559);class Kt extends Qt.m{constructor(){super(...arguments),this.hasAlpha=!1}}(0,o._)([(0,Qt.o)()],Kt.prototype,"hasAlpha",void 0);var er,tr,rr=r(11954),ir=r(46228);class or{constructor(e){this._rctx=e,this.cache=new Map}dispose(){this.cache.forEach((e=>e.texture=(0,c.O3)(e.texture))),this.cache.clear()}_acquire(e){if((0,c.Wi)(e))return null;const t=this._patternId(e),r=this.cache.get(t);if(r)return r.refCount++,r.bind;const i=e.pixelRatio,{encodedData:o,sdfNormalizer:s,pixels:a,paddedPixels:n}=function(e,t){const r=e.map((e=>Math.round(e*t))),i=1/t,o=Math.floor(r.reduce(((e,t)=>e+t))),s=r.reduce(((e,t)=>Math.max(e,t))),a=(Math.floor(.5*(s-1))+.5)*i,n=[];let l=1;for(const f of r){for(let e=0;e<f;e++){const t=l*(Math.min(e,f-1-e)+.5)*i/a*.5+.5;n.push(t)}l=-l}const c=Math.round(r[0]/2),d=[...n.slice(c),...n.slice(0,c)],h=o+2,u=new Uint8Array(4*h);let p=4;for(const f of d)(0,ir.I)(f,u,p),p+=4;return u.copyWithin(0,p-4,p),u.copyWithin(p,4,8),{encodedData:u,sdfNormalizer:a,paddedPixels:h,pixels:o}}(e.pattern,i),l=a/i,d={refCount:1,texture:null,bind:e=>((0,c.Wi)(d.texture)&&(d.texture=new he.x(this._rctx,{width:n,height:1,internalFormat:A.VI.RGBA,pixelFormat:A.VI.RGBA,dataType:A.Br.UNSIGNED_BYTE,wrapMode:A.e8.CLAMP_TO_EDGE},o)),e.bindTexture("stipplePatternTexture",d.texture),{pixelSize:l,sdfNormalizer:s,pixels:a})};return this.cache.set(t,d),d.bind}release(e){if((0,c.Wi)(e))return;const t=this._patternId(e),r=this.cache.get(t);r&&(r.refCount--,0===r.refCount&&((0,c.pC)(r.texture)&&r.texture.dispose(),this.cache.delete(t)))}swap(e,t){const r=this._acquire(t);return this.release(e),r}_patternId(e){return`${e.pattern.join(",")}-r${e.pixelRatio}`}}!function(e){e[e.Standard=0]="Standard",e[e.TransparentToHUDVisibility=1]="TransparentToHUDVisibility",e[e.Transparency=2]="Transparency",e[e.OverlayWithTransparency=3]="OverlayWithTransparency",e[e.COUNT=4]="COUNT"}(er||(er={})),function(e){e[e.None=0]="None",e[e.Alpha=1]="Alpha",e[e.PremultipliedAlpha=2]="PremultipliedAlpha",e[e.COUNT=3]="COUNT"}(tr||(tr={}));class sr extends Qt.m{constructor(){super(...arguments),this.function=er.Standard,this.alphaMode=tr.None,this.hasOpacityFactor=!1}}(0,o._)([(0,Qt.o)({count:er.COUNT})],sr.prototype,"function",void 0),(0,o._)([(0,Qt.o)({count:tr.COUNT})],sr.prototype,"alphaMode",void 0),(0,o._)([(0,Qt.o)()],sr.prototype,"hasOpacityFactor",void 0);var ar=r(99912);let nr=class extends(L(s.Z)){constructor(e){super(e),this._overlays=null,this._overlayRenderTarget=null,this._hasHighlights=!1,this._rendersOccluded=!1,this._hasWater=!1,this._handles=new n.Z,this._frameTask=ar.sq,this._drapeSourceRenderers=new Map,this._sortedDrapeSourceRenderersDirty=!1,this._sortedDrapeSourceRenderers=new d.Z,this._rctx=null,this._materialRepository=null,this._screenToWorldRatio=1,this._localOriginFactory=null,this.worldToPCSRatio=1,this.events=new a.Z,this.longitudeCyclical=null}get _bindParameters(){return this._renderContext.bindParameters}get rctx(){return this._rctx}get materialRepository(){return this._materialRepository}get screenToWorldRatio(){return this._screenToWorldRatio}get localOriginFactory(){return this._localOriginFactory}initialize(){const e=this.view._stage.renderView;this._rctx=e.renderingContext;const t=e.waterTextureRepository;this._stippleTextureRepository=new or(e.renderingContext),this._shaderTechniqueRepository=new M({rctx:this._rctx,viewingMode:v.JY.Local,stippleTextureRepository:this._stippleTextureRepository,waterTextureRepository:t}),this._renderContext=new re(this._rctx,new fe(this._rctx,this.view.state.viewingMode),new Zt(this._shaderTechniqueRepository,this._rctx,(()=>{}))),this._handles.add([(0,h.YP)((()=>t.updating),(()=>this.events.emit("content-changed")),h.tX),(0,h.YP)((()=>this.spatialReference),(e=>this._localOriginFactory=new k.C(e)),h.tX),(0,h.on)((()=>this.view.allLayerViews),"after-changes",(()=>this._sortedDrapeSourceRenderersDirty=!0))]),this._materialRepository=new G(e.textureRepository,this._shaderTechniqueRepository,(e=>{(e.renderOccluded&pr)>0!==this._rendersOccluded&&this._updateRendersOccluded(),this.events.emit("content-changed"),this.notifyChange("updating")}),(()=>this.events.emit("content-changed"))),this._bindParameters.slot=K.r.DRAPED_MATERIAL,this._bindParameters.highlightDepthTexture=(0,q.hf)(this._rctx),this._bindParameters.camera=hr,this._bindParameters.transparencyPassType=x.Am.NONE,this._bindParameters.lighting.groundLightingFactor=1,this._bindParameters.lighting.globalFactor=0,this._bindParameters.lighting.set([new rr.Mi((0,g.f)(1,1,1))]),this._frameTask=this.view.resourceController.scheduler.registerTask(ar.T8.STAGE,this),this._handles.add(this._frameTask)}dispose(){this._handles.destroy(),this._drapeSourceRenderers.forEach((e=>e.destroy())),this._drapeSourceRenderers.clear(),this._debugTextureTechnique=(0,c.RY)(this._debugTextureTechnique),this._debugPatternTexture=(0,c.O3)(this._debugPatternTexture),this._bindParameters.highlightDepthTexture=(0,c.O3)(this._bindParameters.highlightDepthTexture),this._shaderTechniqueRepository=(0,c.O3)(this._shaderTechniqueRepository),this._temporaryFBO=(0,c.O3)(this._temporaryFBO),this._quadVAO=(0,c.O3)(this._quadVAO),this.disposeOverlays()}get updating(){return this._sortedDrapeSourceRenderersDirty||this._frameTask.updating||(0,l.oE)(this._drapeSourceRenderers,(e=>e.updating))}get hasOverlays(){return(0,c.pC)(this._overlays)&&(0,c.pC)(this._overlayRenderTarget)}get gpuMemoryUsage(){return(0,c.pC)(this._overlayRenderTarget)?this._overlayRenderTarget.gpuMemoryUsage:0}createGeometryDrapeSourceRenderer(e){return this.createDrapeSourceRenderer(e,Nt)}createDrapeSourceRenderer(e,t,r){const i=this._drapeSourceRenderers.get(e);(0,c.pC)(i)&&i.destroy();const o=new t({...r,rendererContext:this,drapeSource:e});return this._drapeSourceRenderers.set(e,o),this._sortedDrapeSourceRenderersDirty=!0,"fullOpacity"in e&&this._handles.add((0,h.YP)((()=>e.fullOpacity),(()=>this.events.emit("content-changed"))),e),o}removeDrapeSourceRenderer(e){if((0,c.Wi)(e))return;const t=this._drapeSourceRenderers.get(e);(0,c.Wi)(t)||(this._sortedDrapeSourceRenderersDirty=!0,this._drapeSourceRenderers.delete(e),this._handles.remove(e),t.destroy())}collectUnusedRenderTargetMemory(e){let t=!1;if((0,c.pC)(this._overlayRenderTarget))for(const r of this._overlayRenderTarget.renderTargets){const i=this.overlays[0].validTargets[r.type]||!this.overlays[1].validTargets[r.type];t=this._overlayRenderTarget.validateUsageForTarget(i,r,e)||t}return t}get overlays(){return(0,c.Pt)(this._overlays,[])}ensureDrapeTargets(e){(0,c.pC)(this._overlays)&&this._overlays.forEach((t=>{t.hasTargetWithoutRasterImage=(0,u.f)(e,(e=>e.drapeTargetType===_.a.WithoutRasterImage))}))}ensureDrapeSources(e){(0,c.pC)(this._overlays)&&this._overlays.forEach((t=>{t.hasDrapedFeatureSource=(0,u.f)(e,(e=>e.drapeSourceType===_.L.Features)),t.hasDrapedRasterSource=(0,u.f)(e,(e=>e.drapeSourceType===_.L.RasterImage))}))}ensureOverlays(e,t){(0,c.Wi)(this._overlays)&&(this._overlayRenderTarget=new I(this._rctx),this._overlays=[new w(S.fu.INNER,this._overlayRenderTarget),new w(S.fu.OUTER,this._overlayRenderTarget)]),this.ensureDrapeTargets(e),this.ensureDrapeSources(t)}disposeOverlays(){this._overlays=null,this._overlayRenderTarget=(0,c.O3)(this._overlayRenderTarget),this.events.emit("textures-disposed")}get running(){return this.updating}runTask(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>!0;this._frameTask.processQueue(e),e.done||this._processDrapeSources(e,t)}_processDrapeSources(e,t){let r=!1;for(const[i,o]of this._drapeSourceRenderers){if(e.done)break;(i.destroyed||t(i))&&o.commitChanges()&&(r=!0,e.madeProgress())}this._updateSortedDrapeSourceRenderers(),r&&((0,c.pC)(this._overlays)&&0===this._drapeSourceRenderers.size&&this.disposeOverlays(),this.notifyChange("updating"),this.events.emit("content-changed"),this._updateHasHighlights(),this._updateRendersOccluded(),this._updateHasWater())}processSyncDrapeSources(){this._processDrapeSources(ar.G5,(e=>e.updatePolicy===x.jq.SYNC))}isEmpty(){if(T.Z.OVERLAY_DRAW_DEBUG_TEXTURE)return!1;for(const e of this._drapeSourceRenderers.values())if(!e.isEmpty)return!1;return!0}get hasHighlights(){return this._hasHighlights}get hasWater(){return this._hasWater}get rendersOccluded(){return this._rendersOccluded}updateAnimation(e){let t=!1;return this._drapeSourceRenderers.forEach((r=>t=r.updateAnimation(e)||t)),t}updateDrapeSourceOrder(){this._sortedDrapeSourceRenderersDirty=!0}drawTarget(e,t,r){const i=e.canvasGeometries;if(0===i.numViews)return!1;this._screenToWorldRatio=r*e.mapUnitsPerPixel;const o=t.renderPass;if(this.isEmpty()||o===D.C.MATERIAL_HIGHLIGHT&&!this.hasHighlights||o===D.C.MATERIAL_NORMAL&&!this.hasWater||!e.hasSomeSizedView())return!1;const s=t.fbo;if(!s.isValid())return!1;const a=2*e.resolution,n=e.resolution;s.resize(a,n);const l=this._rctx;hr.pixelRatio=e.pixelRatio*r,this._renderContext.pass=o,this._bindParameters.screenToWorldRatio=this._screenToWorldRatio,this._bindParameters.screenToPCSRatio=this._screenToWorldRatio*this.worldToPCSRatio,this._bindParameters.slot=o===D.C.MATERIAL_NORMAL?K.r.DRAPED_WATER:K.r.DRAPED_MATERIAL,e.applyViewport(this._rctx),s.bind(l),e.index===S.fu.INNER&&(l.setClearColor(0,0,0,0),l.clearSafe(A.lk.COLOR_BUFFER_BIT));const d=t.type===S.NH.ColorNoRasterImage?lr.ExcludeRasterImage:t.type===S.NH.Occluded?lr.OccludedOnly:lr.Normal;if(d===lr.OccludedOnly&&(this._renderContext.renderOccludedMask=pr),T.Z.OVERLAY_DRAW_DEBUG_TEXTURE&&d!==lr.OccludedOnly)for(let c=0;c<i.numViews;c++)this._setViewParameters(i.extents[c],e,hr),this._drawDebugTexture(e.resolution,dr[e.index]);return this._drapeSourceRenderers.size>0&&this._sortedDrapeSourceRenderers.forAll((t=>{let{drapeSource:r,renderer:h}=t;if(d===lr.ExcludeRasterImage&&r.drapeSourceType===_.L.RasterImage)return;const{fullOpacity:u}=r,p=(0,c.pC)(u)&&u<1&&o===D.C.MATERIAL;p&&(this.bindTemporaryFramebuffer(this._rctx,a,n),l.clearSafe(A.lk.COLOR_BUFFER_BIT));for(let o=0;o<i.numViews;o++)this._setViewParameters(i.extents[o],e,hr),h.render(this._renderContext,this._bindParameters);p&&(0,c.pC)(this._temporaryFBO)&&(s.bind(l),this.view._stage.renderView.compositingHelper.composite(this._renderContext.bindParameters,this._temporaryFBO.getTexture(),tr.PremultipliedAlpha,u,er.OverlayWithTransparency,e.index))})),l.bindFramebuffer(null),s.generateMipMap(),this._renderContext.resetRenderOccludedMask(),!0}bindTemporaryFramebuffer(e,t,r){(0,c.Wi)(this._temporaryFBO)&&(this._temporaryFBO=new P(e,!1)),this._temporaryFBO.resize(t,r),this._temporaryFBO.bind(e)}async reloadShaders(){await this._shaderTechniqueRepository.reloadAll()}notifyContentChanged(){this.events.emit("content-changed")}intersect(e,t,r,i){let o=0;for(const s of this._drapeSourceRenderers.values())o=s.intersect?.(e,t,r,i,o)??o}_updateSortedDrapeSourceRenderers(){if(!this._sortedDrapeSourceRenderersDirty)return;if(this._sortedDrapeSourceRenderersDirty=!1,this._sortedDrapeSourceRenderers.clear(),0===this._drapeSourceRenderers.size)return;const e=this.view.map.allLayers;this._drapeSourceRenderers.forEach(((t,r)=>{const i=e.indexOf(r.layer);this._sortedDrapeSourceRenderers.push(new cr(r,t,i<0?1/0:i))})),this._sortedDrapeSourceRenderers.sort(((e,t)=>e.index-t.index))}_setViewParameters(e,t,r){r.viewport[0]=r.viewport[1]=0,r.viewport[2]=r.viewport[3]=t.resolution,(0,m.q)(r.projectionMatrix,0,e[2]-e[0],0,e[3]-e[1],r.near,r.far),(0,m.f)(r.viewMatrix,[-e[0],-e[1],0]),this._bindParameters.camera=r}_updateHasWater(){const e=(0,l.oE)(this._drapeSourceRenderers,(e=>e.hasWater));e!==this._hasWater&&(this._hasWater=e,this.events.emit("has-water",e))}_updateHasHighlights(){const e=(0,l.oE)(this._drapeSourceRenderers,(e=>e.hasHighlights));e!==this._hasHighlights&&(this._hasHighlights=e,this.events.emit("has-highlights",e))}_updateRendersOccluded(){const e=(0,l.oE)(this._drapeSourceRenderers,(e=>e.rendersOccluded));e!==this._rendersOccluded&&(this._rendersOccluded=e,this.events.emit("renders-occluded",e))}_drawDebugTexture(e,t){this._ensureDebugPatternResources(e,e);const r=this._rctx,i=r.bindTechnique(this._debugTextureTechnique);i.setUniform4f("uColor",t[0],t[1],t[2],1),i.bindTexture("tex",this._debugPatternTexture),r.bindVAO(this._quadVAO),r.drawArrays(A.MX.TRIANGLE_STRIP,0,(0,ue._V)(this._quadVAO,"geometry"))}_ensureDebugPatternResources(e,t){if(this._debugPatternTexture)return;const r=new Uint8Array(e*t*4);let i=0;for(let s=0;s<t;s++)for(let o=0;o<e;o++){const a=Math.floor(o/10),n=Math.floor(s/10);a<2||n<2||10*a>e-20||10*n>t-20?(r[i++]=255,r[i++]=255,r[i++]=255,r[i++]=255):(r[i++]=255,r[i++]=255,r[i++]=255,r[i++]=1&a&&1&n?1&o^1&s?0:255:1&a^1&n?0:128)}this._debugPatternTexture=new he.x(this._rctx,{target:A.No.TEXTURE_2D,pixelFormat:A.VI.RGBA,dataType:A.Br.UNSIGNED_BYTE,samplingMode:A.cw.NEAREST,width:e,height:t},r);const o=new Kt;o.hasAlpha=!0,this._debugTextureTechnique=this._shaderTechniqueRepository.acquire(Yt,o),this._quadVAO=(0,q.ow)(this._rctx)}get test(){return{drapeSourceRenderers:this._drapeSourceRenderers,getDrapeSourceRenderer:e=>this._drapeSourceRenderers.get(e)}}};var lr;(0,o._)([(0,p.Cb)()],nr.prototype,"_frameTask",void 0),(0,o._)([(0,p.Cb)()],nr.prototype,"_sortedDrapeSourceRenderersDirty",void 0),(0,o._)([(e,t)=>{e.hasOwnProperty("_managedDisposables")||(e._managedDisposables=e._managedDisposables?.slice()??[]),e._managedDisposables.unshift(t)}],nr.prototype,"_shaderTechniqueRepository",void 0),(0,o._)([(e,t)=>{e.hasOwnProperty("_managedDisposables")||(e._managedDisposables=e._managedDisposables?.slice()??[]),e._managedDisposables.unshift(t)}],nr.prototype,"_stippleTextureRepository",void 0),(0,o._)([(0,p.Cb)({constructOnly:!0})],nr.prototype,"view",void 0),(0,o._)([(0,p.Cb)()],nr.prototype,"worldToPCSRatio",void 0),(0,o._)([(0,p.Cb)()],nr.prototype,"spatialReference",void 0),(0,o._)([(0,p.Cb)({type:Boolean,readOnly:!0})],nr.prototype,"updating",null),nr=(0,o._)([(0,f.j)("esri.views.3d.terrain.OverlayRenderer")],nr),function(e){e[e.Normal=0]="Normal",e[e.OccludedOnly=1]="OccludedOnly",e[e.ExcludeRasterImage=2]="ExcludeRasterImage"}(lr||(lr={}));class cr{constructor(e,t,r){this.drapeSource=e,this.renderer=t,this.index=r}}const dr=[[1,.5,.5],[.5,.5,1]],hr=new U.V;hr.near=1,hr.far=1e4,hr.relativeElevation=null;const ur=-2,pr=$.yD.OccludeAndTransparent},54134:(e,t,r)=>{var i,o,s,a,n,l;r.d(t,{NH:()=>n,Xo:()=>s,fu:()=>i}),function(e){e[e.INNER=0]="INNER",e[e.OUTER=1]="OUTER"}(i||(i={})),function(e){e[e.REGULAR=0]="REGULAR",e[e.HAS_NORTH_POLE=1]="HAS_NORTH_POLE",e[e.HAS_SOUTH_POLE=2]="HAS_SOUTH_POLE",e[e.HAS_BOTH_POLES=3]="HAS_BOTH_POLES"}(o||(o={})),function(e){e[e.NORTH=0]="NORTH",e[e.NORTH_EAST=1]="NORTH_EAST",e[e.EAST=2]="EAST",e[e.SOUTH_EAST=3]="SOUTH_EAST",e[e.SOUTH=4]="SOUTH",e[e.SOUTH_WEST=5]="SOUTH_WEST",e[e.WEST=6]="WEST",e[e.NORTH_WEST=7]="NORTH_WEST"}(s||(s={})),function(e){e[e.OFF=0]="OFF",e[e.ON=1]="ON"}(a||(a={})),function(e){e[e.Color=0]="Color",e[e.ColorNoRasterImage=1]="ColorNoRasterImage",e[e.Highlight=2]="Highlight",e[e.Water=3]="Water",e[e.Occluded=4]="Occluded"}(n||(n={})),function(e){e[e.FADING=0]="FADING",e[e.IMMEDIATE=1]="IMMEDIATE",e[e.UNFADED=2]="UNFADED"}(l||(l={}))},48353:(e,t,r)=>{r.d(t,{U:()=>d});var i=r(49450),o=r(59150),s=r(58406),a=r(699),n=r(98634),l=r(4760),c=r(65964);function d(e,t){const r=e.vertex;r.uniforms.add(new s.p("intrinsicWidth",(e=>e.width))),t.vvSize?(e.attributes.add(l.T.SIZEFEATUREATTRIBUTE,"float"),r.uniforms.add(new i.J("vvSizeMinSize",(e=>e.vvSizeMinSize))),r.uniforms.add(new i.J("vvSizeMaxSize",(e=>e.vvSizeMaxSize))),r.uniforms.add(new i.J("vvSizeOffset",(e=>e.vvSizeOffset))),r.uniforms.add(new i.J("vvSizeFactor",(e=>e.vvSizeFactor))),r.code.add(n.H`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(e.attributes.add(l.T.SIZE,"float"),r.code.add(n.H`float getSize(){
return intrinsicWidth * size;
}`)),t.vvOpacity?(e.attributes.add(l.T.OPACITYFEATUREATTRIBUTE,"float"),r.constants.add("vvOpacityNumber","int",8),r.uniforms.add([new a.O("vvOpacityValues",(e=>e.vvOpacityValues),8),new a.O("vvOpacityOpacities",(e=>e.vvOpacityOpacities),8)]),r.code.add(n.H`float interpolateOpacity( float value ){
if (value <= vvOpacityValues[0]) {
return vvOpacityOpacities[0];
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
}
}
return vvOpacityOpacities[vvOpacityNumber - 1];
}
vec4 applyOpacity( vec4 color ){
return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
}`)):r.code.add(n.H`vec4 applyOpacity( vec4 color ){
return color;
}`),t.vvColor?(e.attributes.add(l.T.COLORFEATUREATTRIBUTE,"float"),r.constants.add("vvColorNumber","int",c.x),r.uniforms.add(new a.O("vvColorValues",(e=>e.vvColorValues),c.x)),r.uniforms.add(new o.b("vvColorColors",(e=>e.vvColorColors),c.x)),r.code.add(n.H`vec4 interpolateColor( float value ) {
if (value <= vvColorValues[0]) {
return vvColorColors[0];
}
for (int i = 1; i < vvColorNumber; ++i) {
if (vvColorValues[i] >= value) {
float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
return mix(vvColorColors[i-1], vvColorColors[i], f);
}
}
return vvColorColors[vvColorNumber - 1];
}
vec4 getColor(){
return applyOpacity(interpolateColor(colorFeatureAttribute));
}`)):(e.attributes.add(l.T.COLOR,"vec4"),r.code.add(n.H`vec4 getColor(){
return applyOpacity(color);
}`))}},28156:(e,t,r)=>{r.d(t,{H:()=>o});var i=r(98634);function o(e){const t=i.H`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`,r=i.H`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`;e.vertex.code.add(t),e.vertex.code.add(r),e.fragment.code.add(t),e.fragment.code.add(r)}},50600:(e,t,r)=>{r.d(t,{R:()=>f,d:()=>s});var i,o=r(49223);!function(e){e[e.Occluded=0]="Occluded",e[e.NotOccluded=1]="NotOccluded",e[e.Both=2]="Both",e[e.COUNT=3]="COUNT"}(i||(i={}));var s,a=r(62993),n=r(82552),l=r(95276),c=r(58406),d=r(98634),h=r(8654),u=r(19253),p=r(4760);function f(e,t){e.include(a.cK),e.attributes.add(p.T.POSITION,"vec3"),e.attributes.add(p.T.NORMAL,"vec3"),e.attributes.add(p.T.AUXPOS1,"vec4");const r=e.vertex;(0,n.S)(e,t),(0,n.h)(r,t),r.uniforms.add([new l.N("viewport",((e,t)=>t.camera.fullViewport)),new c.p("polygonOffset",(e=>e.shaderPolygonOffset)),new c.p("cameraGroundRelative",((e,t)=>t.camera.aboveGround?1:-1)),new c.p("renderTransparentlyOccludedHUD",((e,t)=>t.renderTransparentlyOccludedHUD===i.Occluded?1:t.renderTransparentlyOccludedHUD===i.NotOccluded?0:.75)),new u.A("hudVisibilityTexture",((e,t)=>t.hudVisibilityTexture))]),t.hasVerticalOffset&&(0,o.V)(r),r.constants.add("smallOffsetAngle","float",.984807753012208),r.code.add(d.H`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),r.code.add(d.H`float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
float pointGroundSign = sign(pointGroundDistance);
if (pointGroundSign == 0.0) {
pointGroundSign = cameraGroundRelative;
}
float groundRelative = cameraGroundRelative * pointGroundSign;
if (polygonOffset > .0) {
float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
float factor = (1.0 - tanAlpha / viewport[2]);
if (groundRelative > 0.0) {
posView *= factor;
}
else {
posView /= factor;
}
}
return groundRelative;
}`),t.isDraped&&!t.hasVerticalOffset||r.uniforms.add(new h.g("viewNormal",((e,t)=>t.camera.viewInverseTransposeMatrix))),t.isDraped||(r.uniforms.add(new c.p("perDistancePixelRatio",((e,t)=>Math.tan(t.camera.fovY/2)/(t.camera.fullViewport[2]/2)))),r.code.add(d.H`void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
float distanceToCamera = length(posView);
float pixelOffset = distanceToCamera * perDistancePixelRatio * 0.5;
vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;
vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
posModel += modelOffset;
posView += viewOffset;
}`)),t.screenCenterOffsetUnitsEnabled===s.Screen&&r.uniforms.add(new c.p("pixelRatio",((e,t)=>t.camera.pixelRatio))),t.hasScreenSizePerspective&&(0,a.m8)(r),r.code.add(d.H`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      // centerOffset is in view space and is used to implement world size offsetting
      // of labels with respect to objects. It also pulls the label towards the viewer
      // so that the label is visible in front of the object.
      vec3 centerOffset = auxpos1.xyz;

      // The pointGroundDistance is the distance of the geometry to the ground and is
      // negative if the point is below the ground, or positive if the point is above
      // ground.
      float pointGroundDistance = auxpos1.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${t.isDraped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${t.hasScreenSizePerspective&&(t.hasVerticalOffset||t.screenCenterOffsetUnitsEnabled===s.Screen)?"vec4 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${t.hasVerticalOffset?t.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${t.hasVerticalOffset?d.H`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${t.screenCenterOffsetUnitsEnabled!==s.Screen?d.H`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `:""}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${t.screenCenterOffsetUnitsEnabled===s.Screen?t.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${t.screenCenterOffsetUnitsEnabled===s.Screen?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `),r.code.add(d.H`bool testVisibilityHUD(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture2D(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}!function(e){e[e.World=0]="World",e[e.Screen=1]="Screen",e[e.COUNT=2]="COUNT"}(s||(s={}))},50913:(e,t,r)=>{r.d(t,{R:()=>c});var i=r(21002),o=r(43565),s=r(78980),a=r(82999),n=r(98634),l=r(19253);function c(e,t){const{vertex:r,fragment:c}=e;t.hasMultipassGeometry&&r.include(o.S),t.hasMultipassTerrain&&e.varyings.add("depth","float"),r.code.add(n.H`
  void main(void) {
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel
      // filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${t.hasMultipassGeometry?n.H`
        // Don't draw vertices behind geometry
        if(geometryDepthTest(.5 + .5 * posProjCenter.xy / posProjCenter.w, projectAux.posView.z)){
          posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
        }`:""}

      ${t.hasMultipassTerrain?"depth = projectAux.posView.z;":""}
      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        // Project out of clip space
        posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
      }

    } else {
      // Project out of clip space
      posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
    }

    gl_Position = posProjCenter;
    gl_PointSize = 1.0;
  }
  `),t.hasMultipassTerrain&&c.include(i.S),t.hasMultipassTerrain&&c.uniforms.add([new l.A("terrainDepthTexture",((e,t)=>t.multipassTerrain.linearDepthTexture)),new a.A("nearFar",((e,t)=>t.camera.nearFar)),new a.A("inverseViewport",((e,t)=>t.inverseViewport))]),c.include(s.n),c.code.add(n.H`
  void main() {
    gl_FragColor = vec4(1, 1, 1, 1);
    ${t.hasMultipassTerrain?n.H`
          vec2 uv = gl_FragCoord.xy * inverseViewport;

          //Read the rgba data from the texture linear depth
          vec4 terrainDepthData = texture2D(terrainDepthTexture, uv);

          float terrainDepth = linearDepthFromFloat(rgba2float(terrainDepthData), nearFar);

          //If HUD vertex is behind terrain and the terrain depth is not the initialize value (e.g. we are not looking at the sky)
          //Mark the HUD vertex as occluded by transparent terrain
          if(depth < terrainDepth && terrainDepthData != vec4(0,0,0,1)){
            gl_FragColor.g = 0.5;
          }`:""}
  }
  `)}},7683:(e,t,r)=>{r.d(t,{E:()=>s,K:()=>o});var i=r(98634);function o(e){e.fragment.code.add(i.H`float normals2FoamIntensity(vec3 n, float waveStrength){
float normalizationFactor =  max(0.015, waveStrength);
return max((n.x + n.y)*0.3303545/normalizationFactor + 0.3303545, 0.0);
}`)}function s(e){e.fragment.code.add(i.H`vec3 foamIntensity2FoamColor(float foamIntensityExternal, float foamPixelIntensity, vec3 skyZenitColor, float dayMod){
return foamIntensityExternal * (0.075 * skyZenitColor * pow(foamPixelIntensity, 4.) +  50.* pow(foamPixelIntensity, 23.0)) * dayMod;
}`)}},60300:(e,t,r)=>{r.d(t,{q:()=>m});var i=r(78980),o=r(82552),s=r(95276),a=r(58406),n=r(60465),l=r(98634),c=r(2104),d=r(92026),h=r(90045),u=r(67077);function p(e){return(0,d.Wi)(e)?u.Z:4===e.length?e:(0,h.s)(f,e[0],e[1],e[2],1)}const f=(0,u.c)();function m(e,t){e.constants.add("stippleAlphaColorDiscard","float",.001),e.constants.add("stippleAlphaHighlightDiscard","float",.5),t.stippleEnabled?g(e,t):function(e){e.fragment.code.add(l.H`float getStippleAlpha() { return 1.0; }
#define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
#define blendStipple(color, _stippleAlpha_) color`)}(e)}function g(e,t){const r=!(t.draped&&t.stipplePreferContinuous),{vertex:d,fragment:h}=e;h.include(i.n),d.uniforms.add(new n.d("stipplePatternPixelSize")),t.draped||((0,o.h)(d,t),d.uniforms.add(new a.p("worldToScreenPerDistanceRatio",((e,t)=>1/t.camera.perScreenPixelRatio))),d.code.add(l.H`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),e.varyings.add("vStippleDistance","float"),t.stippleRequiresClamp&&e.varyings.add("vStippleDistanceLimits","vec2"),t.stippleRequiresStretchMeasure&&e.varyings.add("vStipplePatternStretch","float"),d.code.add(l.H`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${v};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),d.code.add(l.H`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`),d.code.add(l.H`
    if (segmentLengthPseudoScreen >= ${r?"patternLength":"1e4"}) {
  `),d.uniforms.add(new a.p("pixelRatio",((e,t)=>t.camera.pixelRatio))),d.code.add(l.H`
        // Round the screen length to get an integer number of pattern repetitions (minimum 1).
        float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
        float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
        float segmentLengthScreenRounded = flooredRepetitions * patternLength;

        ${t.stippleRequiresStretchMeasure?l.H`
              float stretch = repetitions / flooredRepetitions;

              // We need to impose a lower bound on the stretch factor to prevent the dots from merging together when there is only 1 repetition.
              // 0.75 is the lowest possible stretch value for flooredRepetitions > 1, so it makes sense as lower bound.
              vStipplePatternStretch = max(0.75, stretch);`:""}

        return vec2(0.0, segmentLengthScreenRounded);
      }
      return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
    }
  `),h.uniforms.add(new c.Q("stipplePatternTexture")),h.uniforms.add(new n.d("stipplePatternSDFNormalizer")),h.uniforms.add(new n.d("stipplePatternTextureSize")),h.uniforms.add(new n.d("stipplePatternPixelSizeInv")),h.code.add(l.H`float padTexture(float u) {
return (u * stipplePatternTextureSize + 1.0)/(stipplePatternTextureSize + 2.0);
}`),h.code.add(l.H`
    float getStippleSDF(out bool isClamped) {
      ${t.stippleRequiresClamp?l.H`
          float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
          vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
          isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;`:l.H`
          float stippleDistanceClamped = vStippleDistance;
          isClamped = false;`}

      float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv;
      ${t.stippleScaleWithLineWidth?l.H`u *= vLineSizeInv;`:""}
      u = padTexture(fract(u));

      float encodedSDF = rgba2float(texture2D(stipplePatternTexture, vec2(u, 0.5)));
      float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;

      ${t.stippleRequiresStretchMeasure?l.H`return (sdf - 0.5) * vStipplePatternStretch + 0.5;`:l.H`return sdf;`}
    }

    float getStippleSDF() {
      bool ignored;
      return getStippleSDF(ignored);
    }

    float getStippleAlpha() {
      bool isClamped;
      float stippleSDF = getStippleSDF(isClamped);

      float antiAliasedResult = ${t.stippleScaleWithLineWidth?l.H`clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);`:l.H`clamp(stippleSDF + 0.5, 0.0, 1.0);`}

      return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
    }
  `),t.stippleOffColorEnabled?(h.uniforms.add(new s.N("stippleOffColor",(e=>p(e.stippleOffColor)))),h.code.add(l.H`#define discardByStippleAlpha(stippleAlpha, threshold) {}
#define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)`)):h.code.add(l.H`#define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
#define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)`)}const v=l.H.float(.4)},43565:(e,t,r)=>{r.d(t,{S:()=>n,_:()=>l});var i=r(21002),o=r(82999),s=r(98634),a=r(19253);function n(e){e.include(i.S),e.uniforms.add([new a.A("geometryDepthTexture",((e,t)=>t.multipassGeometry.linearDepthTexture)),new o.A("nearFar",((e,t)=>t.camera.nearFar))]),e.code.add(s.H`bool geometryDepthTest(vec2 pos, float elementDepth) {
float geometryDepth = linearDepthFromTexture(geometryDepthTexture, pos, nearFar);
return (elementDepth < (geometryDepth - 1.0));
}`)}class l{constructor(){this.enabled=!1}}},8555:(e,t,r)=>{r.d(t,{n:()=>o});var i=r(98634);function o(e,t){t.spherical?e.vertex.code.add(i.H`vec3 getLocalUp(in vec3 pos, in vec3 origin) {
return normalize(pos + origin);
}`):e.vertex.code.add(i.H`vec3 getLocalUp(in vec3 pos, in vec3 origin) {
return vec3(0.0, 0.0, 1.0);
}`),t.spherical?e.vertex.code.add(i.H`mat3 getTBNMatrix(in vec3 n) {
vec3 t = normalize(cross(vec3(0.0, 0.0, 1.0), n));
vec3 b = normalize(cross(n, t));
return mat3(t, b, n);
}`):e.vertex.code.add(i.H`mat3 getTBNMatrix(in vec3 n) {
vec3 t = vec3(1.0, 0.0, 0.0);
vec3 b = normalize(cross(n, t));
return mat3(t, b, n);
}`)}},40854:(e,t,r)=>{r.d(t,{O:()=>h,P:()=>d});var i=r(81949),o=r(21002),s=r(82999),a=r(58406),n=r(98634),l=r(8654),c=r(19253);function d(e,t){const r=e.fragment.uniforms;r.add(new s.A("nearFar",((e,t)=>t.camera.nearFar))),r.add(new c.A("depthMap",((e,t)=>t.linearDepthTexture))),r.add(new l.g("view",((e,t)=>t.ssr.camera.viewMatrix))),r.add(new l.g("proj",((e,t)=>t.ssr.camera.projectionMatrix))),r.add(new a.p("invResolutionHeight",((e,t)=>1/t.ssr.camera.height))),r.add(new c.A("lastFrameColorMap",((e,t)=>t.ssr.lastFrameColorTexture))),r.add(new l.g("reprojectionMatrix",((e,t)=>t.ssr.reprojectionMatrix))),e.fragment.include(o.S),e.fragment.code.add(n.H`
  vec2 reprojectionCoordinate(vec3 projectionCoordinate)
  {
    vec4 zw = proj * vec4(0.0, 0.0, -projectionCoordinate.z, 1.0);
    vec4 reprojectedCoord = reprojectionMatrix * vec4(zw.w * (projectionCoordinate.xy * 2.0 - 1.0), zw.z, zw.w);
    reprojectedCoord.xy /= reprojectedCoord.w;
    return reprojectedCoord.xy * 0.5 + 0.5;
  }

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
    vec4 projectedCoordStart = applyProjectionMat(proj, viewPos);
    vec3  Q0 = viewPos / projectedCoordStart.w; // homogeneous camera space
    float k0 = 1.0/ projectedCoordStart.w;

    // advance the position in the direction of the reflection
    viewPos += dir;

    vec4 projectedCoordVanishingPoint = applyProjectionMat(proj, dir);

    // Project the advanced position to the screen
    vec4 projectedCoordEnd = applyProjectionMat(proj, viewPos);
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
      depth = -linearDepthFromTexture(depthMap, P, nearFar); // get linear depth from the depth buffer

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
  `)}class h{constructor(){this.reprojectionMatrix=(0,i.c)()}}},77652:(e,t,r)=>{r.d(t,{B:()=>O});var i=r(7683),o=r(98634);function s(e){e.fragment.code.add(o.H`const float GAMMA = 2.2;
const float INV_GAMMA = 0.4545454545;
vec4 delinearizeGamma(vec4 color) {
return vec4(pow(color.rgb, vec3(INV_GAMMA)), color.w);
}
vec3 linearizeGamma(vec3 color) {
return pow(color, vec3(GAMMA));
}`)}var a=r(2116),n=r(40854),l=r(16889),c=r(92026),d=r(88396),h=r(6394),u=r(22186),p=r(91226),f=r(13773),m=r(82999),g=r(49450),v=r(58406),_=r(8654),T=r(61809),S=r(99340);class y extends T.x{constructor(e,t){super(e,"samplerCube",S.P.Pass,((r,i,o)=>r.bindTexture(e,t(i,o))))}}function C(e){const t=e.fragment;t.uniforms.add([new _.g("rotationMatrixClouds",((e,t)=>t.clouds.parallax.transform)),new _.g("rotationMatrixCloudsCrossFade",((e,t)=>t.clouds.parallaxNew.transform)),new g.J("anchorPosition",((e,t)=>t.clouds.parallax.anchorPointClouds)),new g.J("anchorPositionCrossFade",((e,t)=>t.clouds.parallaxNew.anchorPointClouds)),new m.A("cloudVariables",((e,t)=>(0,c.pC)(t.clouds.data)?(0,d.a)(x,t.clouds.data.coverage,t.clouds.data.absorption):h.Z)),new v.p("cloudsHeight",((e,t)=>t.clouds.parallax.cloudsHeight)),new v.p("radiusCurvatureCorrectionFactor",((e,t)=>t.clouds.parallax.radiusCurvatureCorrectionFactor)),new v.p("totalFadeInOut",((e,t)=>t.clouds.fadeInOut.stage===p.co.FINISHED?t.clouds.fadeInOutHeight.factor+Math.max((0,l.uZ)(t.clouds.fadeIn.factor,0,1)):t.clouds.fadeInOutHeight.factor+Math.max((0,l.uZ)(t.clouds.fadeInOut.factor,0,1)))),new v.p("crossFadeAnchorFactor",((e,t)=>(0,l.uZ)(t.clouds.crossFade.factor,0,1))),new y("cubeMap",((e,t)=>(0,c.pC)(t.clouds.data)?t.clouds.data.cubeMap.colorTexture:null)),new f.U("crossFade",((e,t)=>t.clouds.crossFade.enabled))]),t.constants.add("planetRadius","float",u.sv.radius),t.code.add(o.H`vec3 intersectWithCloudLayer(vec3 dir, vec3 cameraPosition, vec3 spherePos)
{
float radiusClouds = planetRadius + cloudsHeight;
float B = 2.0 * dot(cameraPosition, dir);
float C = dot(cameraPosition, cameraPosition) - radiusClouds * radiusClouds;
float det = B * B - 4.0 * C;
float pointIntDist = max(0.0, 0.5 *(-B + sqrt(det)));
vec3 intersectionPont = cameraPosition + dir * pointIntDist;
intersectionPont =  intersectionPont - spherePos;
return intersectionPont;
}`),t.code.add(o.H`vec3 correctForPlanetCurvature(vec3 dir)
{
dir.z = dir.z*(1.-radiusCurvatureCorrectionFactor) + radiusCurvatureCorrectionFactor;
return dir;
}`),t.code.add(o.H`vec3 rotateDirectionToAnchorPoint(mat4 rotMat, vec3 inVec)
{
return (rotMat * vec4(inVec, 0.0)).xyz;
}`),t.uniforms.add([new g.J("lightingMainDirection",((e,t)=>t.lighting.lightingMainDirection)),new g.J("lightingMainIntensity",((e,t)=>t.lighting.mainLight.intensity))]),t.code.add(o.H`const float SUNSET_TRANSITION_FACTOR = 0.3;
const vec3 RIM_COLOR = vec3(0.28, 0.175, 0.035);
const float RIM_SCATTERING_FACTOR = 140.0;
const float BACKLIGHT_FACTOR = 0.2;
const float BACKLIGHT_SCATTERING_FACTOR = 10.0;
const float BACKLIGHT_TRANSITION_FACTOR = 0.3;
vec3 calculateCloudColor(vec3 cameraPosition, vec3 worldSpaceRay, vec4 clouds)
{
float upDotLight = dot(normalize(cameraPosition), normalize(lightingMainDirection));
float dirDotLight = max(dot(normalize(-worldSpaceRay), normalize(lightingMainDirection)), 0.0);
float sunsetTransition = clamp(pow(max(upDotLight, 0.0), SUNSET_TRANSITION_FACTOR), 0.0, 1.0);
vec3 ambientLight = calculateAmbientIrradiance(normalize(cameraPosition),  0.0);
vec3 mainLight = evaluateMainLighting(normalize(cameraPosition),  0.0);
vec3 combinedLight = clamp((lightingMainIntensity + ambientLight )/PI, vec3(0.0), vec3(1.0));
vec3 baseCloudColor = pow(combinedLight * pow(clouds.xyz, vec3(GAMMA)), vec3(INV_GAMMA));
float scatteringMod = max(clouds.a < 0.5 ? clouds.a / 0.5 : - clouds.a / 0.5 + 2.0, 0.0);
float rimLightIntensity = 0.5 + 0.5 *pow(max(upDotLight, 0.0), 0.35);
vec3 directSunScattering = RIM_COLOR * rimLightIntensity * pow(dirDotLight, RIM_SCATTERING_FACTOR) * scatteringMod;
float additionalLight = BACKLIGHT_FACTOR * pow(dirDotLight, BACKLIGHT_SCATTERING_FACTOR) * (1. - pow(sunsetTransition, BACKLIGHT_TRANSITION_FACTOR)) ;
return vec3(baseCloudColor * (1. + additionalLight) + directSunScattering);
}`),t.code.add(o.H`vec4 getCloudData(vec3 rayDir)
{
vec4 cloudData = textureCube(cubeMap, rayDir);
float mu = dot(rayDir, vec3(0, 0, 1));
return mix(vec4(vec3(clamp(1.0 - cloudVariables.y, 0.6, 1.0)), 0.0), cloudData, smoothstep(-0.01, mix(0.0, 0.075, cloudVariables.x), abs(mu)));
}`),t.code.add(o.H`vec4 renderCloudsNoFade(vec3 worldRay, vec3 cameraPosition)
{
vec3 intersectionPoint = intersectWithCloudLayer(normalize(worldRay), cameraPosition, anchorPosition);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = getCloudData(worldRayRotatedCorrected);
float totalTransmittance = clamp(cloudData.a * (1.0 - totalFadeInOut) + totalFadeInOut, 0.0 , 1.0);
if (length(cloudData.rgb) == 0.0) {
totalTransmittance = 1.0;
}
return vec4(calculateCloudColor(cameraPosition, normalize(-worldRay), cloudData), totalTransmittance);
}`),t.code.add(o.H`vec4 renderCloudsCrossFade(vec3 worldRay, vec3 cameraPosition)
{
vec3 intersectionPoint = intersectWithCloudLayer(normalize(worldRay), cameraPosition, anchorPosition);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = getCloudData(worldRayRotatedCorrected);
vec4 cloudColor = vec4(calculateCloudColor(cameraPosition, normalize(-worldRay), cloudData), cloudData.a);
intersectionPoint = intersectWithCloudLayer(normalize(worldRay), cameraPosition, anchorPositionCrossFade);
worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixCloudsCrossFade, normalize(intersectionPoint));
worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
cloudData = getCloudData(worldRayRotatedCorrected);
vec4 cloudColorCrossFade = vec4(calculateCloudColor(cameraPosition, normalize(-worldRay), cloudData), cloudData.a);
cloudColor = mix(cloudColor, cloudColorCrossFade, crossFadeAnchorFactor);
float totalTransmittance = clamp(cloudColor.a * (1.0 - totalFadeInOut) + totalFadeInOut, 0.0 , 1.0);
if (length(cloudColor.rgb) == 0.0) {
totalTransmittance = 1.0;
}
return vec4(cloudColor.rgb, totalTransmittance);
}`),t.code.add(o.H`vec4 renderClouds(vec3 worldRay, vec3 cameraPosition)
{
return crossFade ? renderCloudsCrossFade(worldRay, cameraPosition) : renderCloudsNoFade(worldRay, cameraPosition);
}`)}const x=(0,h.a)();function O(e,t){e.include(a.T,t),e.include(s),e.include(i.E),t.hasCloudsReflections&&e.include(C,t),t.hasScreenSpaceReflections&&e.include(n.P,t);const r=e.fragment;r.constants.add("fresnelSky","vec3",[.02,1,15]).add("fresnelMaterial","vec2",[.02,.1]).add("roughness","float",.015).add("foamIntensityExternal","float",1.7).add("ssrIntensity","float",.65).add("ssrHeightFadeStart","float",3e5).add("ssrHeightFadeEnd","float",5e5).add("waterDiffusion","float",.92).add("waterSeaColorMod","float",.8).add("correctionViewingPowerFactor","float",.4).add("skyZenitColor","vec3",[.52,.68,.9]).add("skyColor","vec3",[.67,.79,.9]).add("cloudFresnelModifier","vec2",[1.2,.01]),r.code.add(o.H`PBRShadingWater shadingInfo;
vec3 getSkyGradientColor(in float cosTheta, in vec3 horizon, in vec3 zenit) {
float exponent = pow((1.0 - cosTheta), fresnelSky[2]);
return mix(zenit, horizon, exponent);
}`),r.uniforms.add([new v.p("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new v.p("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))]),r.code.add(o.H`vec3 getSeaColor(in vec3 n, in vec3 v, in vec3 l, vec3 color, in vec3 lightIntensity, in vec3 localUp, in float shadow, float foamIntensity, vec3 viewPosition, vec3 position) {
float reflectionHit = 0.0;
float reflectionHitDiffused = 0.0;
vec3 seaWaterColor = linearizeGamma(color);
vec3 h = normalize(l + v);
shadingInfo.NdotL = clamp(dot(n, l), 0.0, 1.0);
shadingInfo.NdotV = clamp(dot(n, v), 0.001, 1.0);
shadingInfo.VdotN = clamp(dot(v, n), 0.001, 1.0);
shadingInfo.NdotH = clamp(dot(n, h), 0.0, 1.0);
shadingInfo.VdotH = clamp(dot(v, h), 0.0, 1.0);
shadingInfo.LdotH = clamp(dot(l, h), 0.0, 1.0);
float upDotV = max(dot(localUp,v), 0.0);
vec3 skyHorizon = linearizeGamma(skyColor);
vec3 skyZenit = linearizeGamma(skyZenitColor);
vec3 skyColor = getSkyGradientColor(upDotV, skyHorizon, skyZenit );
float upDotL = max(dot(localUp,l),0.0);
float daytimeMod = 0.1 + upDotL * 0.9;
skyColor *= daytimeMod;
float shadowModifier = clamp(shadow, 0.8, 1.0);
vec3 fresnelModifier = fresnelReflection(shadingInfo.VdotN, vec3(fresnelSky[0]), fresnelSky[1]);
vec3 reflSky = lightingEnvironmentStrength * fresnelModifier * skyColor * shadowModifier;
vec3 reflSea = seaWaterColor * mix(skyColor, upDotL * lightIntensity * LIGHT_NORMALIZATION, 2.0 / 3.0) * shadowModifier;
vec3 specular = vec3(0.0);
if(upDotV > 0.0 && upDotL > 0.0) {
vec3 specularSun = brdfSpecularWater(shadingInfo, roughness, vec3(fresnelMaterial[0]), fresnelMaterial[1]);
vec3 incidentLight = lightIntensity * LIGHT_NORMALIZATION * shadow;
specular = lightingSpecularStrength * shadingInfo.NdotL * incidentLight * specularSun;
}
vec3 foam = vec3(0.0);
if(upDotV > 0.0) {
foam = foamIntensity2FoamColor(foamIntensityExternal, foamIntensity, skyZenitColor, daytimeMod);
}
float correctionViewingFactor = pow(max(dot(v, localUp), 0.0), correctionViewingPowerFactor);
vec3 normalCorrectedClouds = mix(localUp, n, correctionViewingFactor);
vec3 reflectedWorld = normalize(reflect(-v, normalCorrectedClouds));`),t.hasCloudsReflections&&r.code.add(o.H`vec4 cloudsColor = renderClouds(reflectedWorld, position);
cloudsColor.a = 1.0 - cloudsColor.a;
cloudsColor = pow(cloudsColor, vec4(GAMMA));
cloudsColor *= clamp(fresnelModifier.y*cloudFresnelModifier[0] - cloudFresnelModifier[1], 0.0, 1.0) * clamp((1.0 - totalFadeInOut), 0.0, 1.0);`),t.hasScreenSpaceReflections?r.code.add(o.H`vec3 viewDir = normalize(viewPosition);
vec4 viewNormalVectorCoordinate = view *vec4(n, 0.0);
vec3 viewNormal = normalize(viewNormalVectorCoordinate.xyz);
vec4 viewUp = view *vec4(localUp, 0.0);
vec3 viewNormalCorrectedSSR = mix(viewUp.xyz, viewNormal, correctionViewingFactor);
vec3 reflected = normalize(reflect(viewDir, viewNormalCorrectedSSR));
vec3 hitCoordinate = screenSpaceIntersection(reflected, viewPosition, viewDir, viewUp.xyz);
vec3 reflectedColor = vec3(0.0);
if (hitCoordinate.z > 0.0)
{
vec2 reprojectedCoordinate = reprojectionCoordinate(hitCoordinate);
vec2 dCoords = smoothstep(0.3, 0.6, abs(vec2(0.5, 0.5) - hitCoordinate.xy));
float heightMod = smoothstep(ssrHeightFadeEnd, ssrHeightFadeStart, -viewPosition.z);
reflectionHit = clamp(1.0 - (1.3*dCoords.y), 0.0, 1.0) * heightMod;
reflectionHitDiffused = waterDiffusion * reflectionHit;
reflectedColor = linearizeGamma(texture2D(lastFrameColorMap, reprojectedCoordinate).xyz)* reflectionHitDiffused * fresnelModifier.y * ssrIntensity;
}
float seaColorMod =  mix(waterSeaColorMod, waterSeaColorMod*0.5, reflectionHitDiffused);
vec3 waterRenderedColor = tonemapACES((1.0 - reflectionHitDiffused) * reflSky + reflectedColor + reflSea * seaColorMod + specular  + foam);`):r.code.add(o.H`vec3 waterRenderedColor = tonemapACES(reflSky + reflSea * waterSeaColorMod + specular + foam);`),t.hasCloudsReflections?t.hasScreenSpaceReflections?r.code.add(o.H`return waterRenderedColor * (1.0 - (1.0 - reflectionHit) * cloudsColor.a) + (1.0 - reflectionHit) * cloudsColor.xyz;
}`):r.code.add(o.H`return waterRenderedColor * (1.0 - cloudsColor.a) + cloudsColor.xyz;
}`):r.code.add(o.H`return waterRenderedColor;
}`)}},79246:(e,t,r)=>{r.d(t,{M:()=>u});var i=r(88396),o=r(6394),s=r(90045),a=r(67077),n=r(7683),l=r(82999),c=r(95276),d=r(98634),h=r(2104);function u(e){e.fragment.uniforms.add(new h.Q("texWaveNormal")),e.fragment.uniforms.add(new h.Q("texWavePerturbation")),e.fragment.uniforms.add([new c.N("waveParams",(e=>(0,s.s)(p,e.waveStrength,e.waveTextureRepeat,e.flowStrength,e.flowOffset))),new l.A("waveDirection",(e=>(0,i.a)(f,e.waveDirection[0]*e.waveVelocity,e.waveDirection[1]*e.waveVelocity)))]),e.include(n.K),e.fragment.code.add(d.H`const vec2  FLOW_JUMP = vec2(6.0/25.0, 5.0/24.0);
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
vec2 waveMovement = time * -_waveDir;
float timeNoise = sampleNoiseTexture(_uv * TIME_NOISE_TEXTURE_REPEAT) * TIME_NOISE_STRENGTH;
vec3 uv_A = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.0);
vec3 uv_B = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.5);
vec3 normal_A = textureDenormalized3D(_texNormal, uv_A.xy) * uv_A.z;
vec3 normal_B = textureDenormalized3D(_texNormal, uv_B.xy) * uv_B.z;
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
}`)}const p=(0,a.c)(),f=(0,o.a)()},17943:(e,t,r)=>{r.d(t,{e:()=>o});var i=r(61809);class o extends i.x{constructor(e){super(e,"vec2")}}},87145:(e,t,r)=>{r.d(t,{C:()=>_});var i=r(92026),o=r(95439),s=r(81949),a=r(11186),n=r(71353),l=r(67077),c=r(79803),d=r(68401),h=r(74894),u=r(61403),p=r(59887);const f=null;var m=r(4760),g=r(97882),v=r(58901);class _{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:125e4;this._originSR=e,this._gridSize=t,this._origins=new Map,this._objects=new Map,this._rootOriginId="root/"+(0,o.D)()}getOrigin(e){const t=this._origins.get(this._rootOriginId);if(null==t){const t=f;if((0,i.pC)(t))return this._origins.set(this._rootOriginId,(0,u.al)(t[0],t[1],t[2],this._rootOriginId)),this.getOrigin(e);const r=(0,u.al)(e[0]+Math.random()-.5,e[1]+Math.random()-.5,e[2]+Math.random()-.5,this._rootOriginId);return this._origins.set(this._rootOriginId,r),r}const r=this._gridSize,o=Math.round(e[0]/r),s=Math.round(e[1]/r),n=Math.round(e[2]/r),l=`${o}/${s}/${n}`;let c=this._origins.get(l);const d=.5*r;if((0,a.b)(T,e,t.vec3),T[0]=Math.abs(T[0]),T[1]=Math.abs(T[1]),T[2]=Math.abs(T[2]),T[0]<d&&T[1]<d&&T[2]<d){if(c){const t=Math.max(...T);if((0,a.b)(T,e,c.vec3),T[0]=Math.abs(T[0]),T[1]=Math.abs(T[1]),T[2]=Math.abs(T[2]),Math.max(...T)<t)return c}return t}return c||(c=(0,u.al)(o*r,s*r,n*r,l),this._origins.set(l,c)),c}_drawOriginBox(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,l.f)(1,1,0,1);const r=window.view,i=r._stage,o=t.toString();if(!this._objects.has(o)){this._material=new v.U({width:2,color:t}),i.add(this._material);const e=new g.F({isPickable:!1}),r=new p.T({castShadow:!1});i.add(r),e.add(r),i.add(e),this._objects.set(o,r)}const a=this._objects.get(o),n=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],u=n.length,f=new Array(3*u),_=new Uint16Array(2*(u-1)),T=.5*this._gridSize;for(let s=0;s<u;s++)f[3*s+0]=e[0]+(1&n[s]?T:-T),f[3*s+1]=e[1]+(2&n[s]?T:-T),f[3*s+2]=e[2]+(4&n[s]?T:-T),s>0&&(_[2*s+0]=s-1,_[2*s+1]=s);(0,c.CM)(f,this._originSR,0,f,r.renderSpatialReference,0,u);const S=new h.Z([[m.T.POSITION,{size:3,data:f,exclusive:!0}]],[[m.T.POSITION,_]],d.MX.Line);i.add(S),a.addGeometry(S,this._material,s.I)}}const T=(0,n.c)()},61403:(e,t,r)=>{r.d(t,{al:()=>s});var i=r(71353);class o{constructor(e,t){this.vec3=e,this.id=t}}function s(e,t,r,s){return new o((0,i.f)(e,t,r),s)}},78289:(e,t,r)=>{var i;r.d(t,{$:()=>i}),function(e){var t,r;(t=e.Geometry||(e.Geometry={}))[t.ADD=1]="ADD",t[t.UPDATE=2]="UPDATE",t[t.REMOVE=4]="REMOVE",(r=e.State||(e.State={}))[r.VISIBILITIES=1]="VISIBILITIES",r[r.VERTEXATTRS=2]="VERTEXATTRS",r[r.TRANSFORMATION=4]="TRANSFORMATION",r[r.HIGHLIGHTS=8]="HIGHLIGHTS",r[r.OCCLUDEES=16]="OCCLUDEES"}(i||(i={}))},69831:(e,t,r)=>{r.d(t,{z:()=>g});var i=r(92026),o=r(95439),s=r(14226),a=r(81949),n=r(11186),l=r(67077),c=r(80064),d=r(68401),h=r(81955);class u{constructor(){this.visible=!0}}var p=r(47669),f=r(4760),m=r(32683);class g{constructor(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.data=e,this.material=t,this.boundingSphere=(0,l.c)(),this.instanceParameters=new u,this._transformation=(0,a.c)(),this._shaderTransformationDirty=!0,this.layerUid=(0,i.Pt)(r.layerUid,null),this.graphicUid=(0,i.Pt)(r.graphicUid,null),this.id=r.id?r.id:(0,o.D)(),this.boundingInfo=(0,i.Pt)(r.boundingInfo,null),this.calculateShaderTransformation=(0,i.Pt)(r.calculateShaderTransformation,null),this.castShadow=!!r.castShadow&&r.castShadow}get transformation(){return this._transformation}updateTransformation(e){e(this._transformation),this._shaderTransformationDirty=!0,this.computeBoundingSphere(this._transformation,this.boundingSphere)}shaderTransformationChanged(){this._shaderTransformationDirty=!0}computeBoundingSphere(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,c.u1)(e);(0,i.Wi)(this.boundingInfo)||((0,n.m)(t,this.boundingInfo.getCenter(),e),t[3]=this.boundingInfo.getBSRadius()*r)}get hasShaderTransformation(){return(0,i.pC)(this.calculateShaderTransformation)}get primitiveType(){return this.data.primitiveType}getShaderTransformation(){return(0,i.Wi)(this.calculateShaderTransformation)?(0,i.Pt)(this.transformation,a.I):(this._shaderTransformationDirty&&(this._shaderTransformation||(this._shaderTransformation=(0,a.c)()),(0,s.c)(this._shaderTransformation,this.calculateShaderTransformation((0,i.Pt)(this.transformation,a.I))),this._shaderTransformationDirty=!1),this._shaderTransformation)}computeAttachmentOrigin(e){if(this.material.computeAttachmentOrigin)return!!this.material.computeAttachmentOrigin(this,e)&&((0,i.pC)(this._transformation)&&(0,n.m)(e,e,this._transformation),!0);const t=this.indices.get(f.T.POSITION),r=this.vertexAttributes.get(f.T.POSITION);return!!(0,h.cM)(r,t,e)&&((0,i.pC)(this._transformation)&&(0,n.m)(e,e,this._transformation),!0)}get indices(){return this.data.indices}get vertexAttributes(){return this.data.vertexAttributes}addHighlight(){const e=new p.O(d.V_.Highlight),t=this.instanceParameters;return t.highlights=(0,m.lr)(t.highlights,e),e}removeHighlight(e){const t=this.instanceParameters;t.highlights=(0,m.U_)(t.highlights,e)}}},23038:(e,t,r)=>{r.d(t,{F:()=>n,Q:()=>i});var i,o,s=r(27366),a=r(33559);(o=i||(i={}))[o.SSAO=0]="SSAO",o[o.Blur=1]="Blur",o[o.COUNT=2]="COUNT";class n extends a.m{constructor(){super(...arguments),this.output=i.SSAO}}(0,s._)([(0,a.o)({count:i.COUNT})],n.prototype,"output",void 0)},21400:(e,t,r)=>{r.d(t,{A:()=>k});var i=r(16889),o=r(92026),s=r(22753),a=r(11873),n=r(14226),l=r(81949),c=r(88396),d=r(6394),h=r(11186),u=r(71353),p=r(67077);function f(e){return function(e){return e instanceof Float32Array&&e.length>=16}(e)||function(e){return Array.isArray(e)&&e.length>=16}(e)}var m=r(65156),g=r(55158),v=r(71011),_=r(50600),T=r(81955),S=r(17363),y=r(56529),C=r(93822),x=r(65216),O=r(97731),w=r(4760),R=r(33236),b=r(22909),A=r(32683),E=r(18442),P=r(50951),D=r(82144),I=r(31132),H=r(68401),N=r(7566),M=r(78041),F=r(27627),z=r(8548),L=r(36207);class U extends I.A{initializeConfiguration(e,t){t.spherical=e.viewingMode===P.JY.Global}initializeProgram(e){const t=U.shader.get().build(this.configuration);return new F.$(e.rctx,t,N.i)}_setPipelineState(e){const t=this.configuration,r=e===H.Am.NONE,i=e===H.Am.FrontFace,o=this.configuration.hasPolygonOffset&&V,s=(r||i)&&t.output!==v.H.Highlight?(t.depthEnabled||t.output===v.H.Occlusion)&&L.LZ:null;return(0,L.sm)({blending:t.output===v.H.Color||t.output===v.H.Alpha||t.output===v.H.Highlight?r?B:(0,M.j7)(e):null,depthTest:{func:z.wb.LEQUAL},depthWrite:s,colorWrite:L.BK,polygonOffset:o})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}get primitiveType(){return this.configuration.output===v.H.Occlusion?z.MX.POINTS:z.MX.TRIANGLES}}U.shader=new D.J(E.H,(()=>r.e(6823).then(r.bind(r,16823))));const V={factor:0,units:-4},B=(0,L.if)(z.zi.ONE,z.zi.ONE_MINUS_SRC_ALPHA);var W=r(27366),G=r(33559),j=r(8883);class q extends j.W{constructor(){super(...arguments),this.output=v.H.Color,this.screenCenterOffsetUnitsEnabled=_.d.World,this.transparencyPassType=H.Am.NONE,this.spherical=!1,this.occlusionTestEnabled=!0,this.signedDistanceFieldEnabled=!1,this.vvSize=!1,this.vvColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.debugDrawLabelBorder=!1,this.binaryHighlightOcclusionEnabled=!0,this.hasSlicePlane=!1,this.hasPolygonOffset=!1,this.depthEnabled=!0,this.pixelSnappingEnabled=!0,this.isDraped=!1,this.hasMultipassGeometry=!1,this.hasMultipassTerrain=!1,this.cullAboveGround=!1}}(0,W._)([(0,G.o)({count:v.H.COUNT})],q.prototype,"output",void 0),(0,W._)([(0,G.o)({count:_.d.COUNT})],q.prototype,"screenCenterOffsetUnitsEnabled",void 0),(0,W._)([(0,G.o)({count:H.Am.COUNT})],q.prototype,"transparencyPassType",void 0),(0,W._)([(0,G.o)()],q.prototype,"spherical",void 0),(0,W._)([(0,G.o)()],q.prototype,"occlusionTestEnabled",void 0),(0,W._)([(0,G.o)()],q.prototype,"signedDistanceFieldEnabled",void 0),(0,W._)([(0,G.o)()],q.prototype,"vvSize",void 0),(0,W._)([(0,G.o)()],q.prototype,"vvColor",void 0),(0,W._)([(0,G.o)()],q.prototype,"hasVerticalOffset",void 0),(0,W._)([(0,G.o)()],q.prototype,"hasScreenSizePerspective",void 0),(0,W._)([(0,G.o)()],q.prototype,"debugDrawLabelBorder",void 0),(0,W._)([(0,G.o)()],q.prototype,"binaryHighlightOcclusionEnabled",void 0),(0,W._)([(0,G.o)()],q.prototype,"hasSlicePlane",void 0),(0,W._)([(0,G.o)()],q.prototype,"hasPolygonOffset",void 0),(0,W._)([(0,G.o)()],q.prototype,"depthEnabled",void 0),(0,W._)([(0,G.o)()],q.prototype,"pixelSnappingEnabled",void 0),(0,W._)([(0,G.o)()],q.prototype,"isDraped",void 0),(0,W._)([(0,G.o)()],q.prototype,"hasMultipassGeometry",void 0),(0,W._)([(0,G.o)()],q.prototype,"hasMultipassTerrain",void 0),(0,W._)([(0,G.o)()],q.prototype,"cullAboveGround",void 0),(0,W._)([(0,G.o)({constValue:!0})],q.prototype,"hasSliceInVertexProgram",void 0),(0,W._)([(0,G.o)({constValue:!1})],q.prototype,"hasVvInstancing",void 0);class k extends y.F5{constructor(e){super(e,new pe),this.techniqueConfig=new q}getConfiguration(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasSlicePlane=this.parameters.hasSlicePlane,this.techniqueConfig.hasVerticalOffset=!!this.parameters.verticalOffset,this.techniqueConfig.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this.techniqueConfig.screenCenterOffsetUnitsEnabled="screen"===this.parameters.centerOffsetUnits?_.d.Screen:_.d.World,this.techniqueConfig.hasPolygonOffset=this.parameters.polygonOffset,this.techniqueConfig.isDraped=this.parameters.isDraped,this.techniqueConfig.occlusionTestEnabled=this.parameters.occlusionTest,this.techniqueConfig.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this.techniqueConfig.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this.techniqueConfig.vvSize=!!this.parameters.vvSizeEnabled,this.techniqueConfig.vvColor=!!this.parameters.vvColorEnabled,e===v.H.Color&&(this.techniqueConfig.debugDrawLabelBorder=!!this.parameters.debugDrawLabelBorder),e===v.H.Highlight&&(this.techniqueConfig.binaryHighlightOcclusionEnabled=this.parameters.binaryHighlightOcclusion),this.techniqueConfig.depthEnabled=this.parameters.depthEnabled,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.hasMultipassGeometry=t.multipassGeometry.enabled,this.techniqueConfig.hasMultipassTerrain=t.multipassTerrain.enabled,this.techniqueConfig.cullAboveGround=t.multipassTerrain.cullAboveGround,this.techniqueConfig}intersect(e,t,r,i,s,a,n,l,c){(0,o.pC)(c)?this._intersectDrapedHudGeometry(e,a,n,l,c):this._intersectHudGeometry(e,t,r,i,n,l)}_intersectDrapedHudGeometry(e,t,r,i,s){const a=e.vertexAttributes.get(w.T.POSITION),n=e.vertexAttributes.get(w.T.SIZE),l=this.parameters,c=(0,E.c)(l);let d=1,h=1;if((0,o.pC)(i)){const e=i(le);d=e[0],h=e[5]}d*=e.screenToWorldRatio,h*=e.screenToWorldRatio;const u=de*e.screenToWorldRatio;for(let o=0;o<a.data.length/a.size;o++){const i=o*a.size,p=a.data[i],f=a.data[i+1],m=o*n.size;let g;he[0]=n.data[m]*d,he[1]=n.data[m+1]*h,l.textureIsSignedDistanceField&&(g=l.outlineSize*e.screenToWorldRatio/2),X(t,p,f,he,u,g,l,c)&&r(s.dist,s.normal,-1,!1)}}_intersectHudGeometry(e,t,r,i,a,l){if(!i.options.selectionMode||!i.options.hud||(0,A.PD)(t))return;const c=this.parameters;let d=1,p=1;if((0,s.f)(ie,r),(0,o.pC)(l)){const e=l(le);d=e[0],p=e[5],function(e){const t=e[0],r=e[1],i=e[2],o=e[3],s=e[4],a=e[5],n=e[6],l=e[7],c=e[8],d=1/Math.sqrt(t*t+r*r+i*i),h=1/Math.sqrt(o*o+s*s+a*a),u=1/Math.sqrt(n*n+l*l+c*c);e[0]=t*d,e[1]=r*d,e[2]=i*d,e[3]=o*h,e[4]=s*h,e[5]=a*h,e[6]=n*u,e[7]=l*u,e[8]=c*u}(ie)}const f=e.vertexAttributes.get(w.T.POSITION),m=e.vertexAttributes.get(w.T.SIZE),g=e.vertexAttributes.get(w.T.NORMAL),v=e.vertexAttributes.get(w.T.AUXPOS1);(0,O.hu)(f.size>=3);const _=i.point,T=i.camera,S=(0,E.c)(c);d*=T.pixelRatio,p*=T.pixelRatio;const y="screen"===this.parameters.centerOffsetUnits;for(let o=0;o<f.data.length/f.size;o++){const e=o*f.size;(0,h.s)(Q,f.data[e],f.data[e+1],f.data[e+2]),(0,h.m)(Q,Q,r);const t=o*m.size;he[0]=m.data[t]*d,he[1]=m.data[t+1]*p,(0,h.m)(Q,Q,T.viewMatrix);const s=o*v.size;if((0,h.s)(ae,v.data[s+0],v.data[s+1],v.data[s+2]),!y&&(Q[0]+=ae[0],Q[1]+=ae[1],0!==ae[2])){const e=ae[2];(0,h.n)(ae,Q),(0,h.b)(Q,Q,(0,h.g)(ae,ae,e))}const l=o*g.size;if((0,h.s)(K,g.data[l],g.data[l+1],g.data[l+2]),this._normalAndViewAngle(K,ie,T,ne),this._applyVerticalOffsetTransformationView(Q,ne,T,J),T.applyProjection(Q,ee),ee[0]>-1){ee[0]=Math.floor(ee[0]),ee[1]=Math.floor(ee[1]),y&&(ae[0]||ae[1])&&(ee[0]+=ae[0],0!==ae[1]&&(ee[1]+=(0,x.sX)(ae[1],J.factorAlignment)),T.unapplyProjection(ee,Q)),ee[0]+=this.parameters.screenOffset[0],ee[1]+=this.parameters.screenOffset[1],(0,x.TU)(he,J.factor,he);const e=ce*T.pixelRatio;let t;if(c.textureIsSignedDistanceField&&(t=c.outlineSize*T.pixelRatio/2),X(_,ee[0],ee[1],he,e,t,c,S)){const e=i.ray;if((0,h.m)(re,Q,(0,n.a)(se,T.viewMatrix)),ee[0]=_[0],ee[1]=_[1],T.unprojectFromRenderScreen(ee,Q)){const t=(0,u.c)();(0,h.c)(t,e.direction);const r=1/(0,h.l)(t);(0,h.g)(t,t,r),a((0,h.i)(e.origin,Q)*r,t,-1,!0,1,re)}}}}}computeAttachmentOrigin(e,t){const r=e.vertexAttributes;if(!r)return!1;const i=r.get(w.T.POSITION),o=e.indices.get(w.T.POSITION);return(0,T.NO)(i,o,t)}createBufferWriter(){return new me(this)}_normalAndViewAngle(e,t,r,i){return f(t)&&(t=(0,s.f)(oe,t)),(0,h.t)(i.normal,e,t),(0,h.m)(i.normal,i.normal,r.viewInverseTransposeMatrix),i.cosAngle=(0,h.e)(te,ue),i}_updateScaleInfo(e,t,r){const i=this.parameters;(0,o.pC)(i.screenSizePerspective)?(0,x.PV)(r,t,i.screenSizePerspective,e.factor):(e.factor.scale=1,e.factor.factor=0,e.factor.minPixelSize=0,e.factor.paddingPixels=0),(0,o.pC)(i.screenSizePerspectiveAlignment)?(0,x.PV)(r,t,i.screenSizePerspectiveAlignment,e.factorAlignment):(e.factorAlignment.factor=e.factor.factor,e.factorAlignment.scale=e.factor.scale,e.factorAlignment.minPixelSize=e.factor.minPixelSize,e.factorAlignment.paddingPixels=e.factor.paddingPixels)}applyShaderOffsetsView(e,t,r,i,o,s,a){const n=this._normalAndViewAngle(t,r,o,ne);return this._applyVerticalGroundOffsetView(e,n,o,a),this._applyVerticalOffsetTransformationView(a,n,o,s),this._applyPolygonOffsetView(a,n,i[3],o,a),this._applyCenterOffsetView(a,i,a),a}applyShaderOffsetsNDC(e,t,r,i,s){return this._applyCenterOffsetNDC(e,t,r,i),(0,o.pC)(s)&&(0,h.c)(s,i),this._applyPolygonOffsetNDC(i,t,r,i),i}_applyPolygonOffsetView(e,t,r,o,s){const a=o.aboveGround?1:-1;let n=Math.sign(r);0===n&&(n=a);const l=a*n;if(this.parameters.shaderPolygonOffset<=0)return(0,h.c)(s,e);const c=(0,i.uZ)(Math.abs(t.cosAngle),.01,1),d=1-Math.sqrt(1-c*c)/c/o.viewport[2];return(0,h.g)(s,e,l>0?d:1/d),s}_applyVerticalGroundOffsetView(e,t,r,i){const o=(0,h.l)(e),s=r.aboveGround?1:-1,a=.5*r.computeRenderPixelSizeAtDist(o),n=(0,h.g)(Q,t.normal,s*a);return(0,h.a)(i,e,n),i}_applyVerticalOffsetTransformationView(e,t,r,i){const s=this.parameters;if(!s.verticalOffset||!s.verticalOffset.screenLength){if(s.screenSizePerspective||s.screenSizePerspectiveAlignment){const r=(0,h.l)(e);this._updateScaleInfo(i,r,t.cosAngle)}else i.factor.scale=1,i.factorAlignment.scale=1;return e}const a=(0,h.l)(e),n=(0,o.Pt)(s.screenSizePerspectiveAlignment,s.screenSizePerspective),l=(0,b.Hx)(r,a,s.verticalOffset,t.cosAngle,n);return this._updateScaleInfo(i,a,t.cosAngle),(0,h.g)(t.normal,t.normal,l),(0,h.a)(e,e,t.normal)}_applyCenterOffsetView(e,t,r){const i="screen"!==this.parameters.centerOffsetUnits;return r!==e&&(0,h.c)(r,e),i&&(r[0]+=t[0],r[1]+=t[1],t[2]&&((0,h.n)(K,r),(0,h.a)(r,r,(0,h.g)(K,K,t[2])))),r}_applyCenterOffsetNDC(e,t,r,i){const o="screen"!==this.parameters.centerOffsetUnits;return i!==e&&(0,h.c)(i,e),o||(i[0]+=t[0]/r.fullWidth*2,i[1]+=t[1]/r.fullHeight*2),i}_applyPolygonOffsetNDC(e,t,r,i){const o=this.parameters.shaderPolygonOffset;if(e!==i&&(0,h.c)(i,e),o){const e=r.aboveGround?1:-1,s=e*Math.sign(t[3]);i[2]-=(s||e)*o}return i}requiresSlot(e){if(e===C.r.DRAPED_MATERIAL)return!0;const{drawInSecondSlot:t,occlusionTest:r}=this.parameters;return e===(t?C.r.LABEL_MATERIAL:C.r.HUD_MATERIAL)||r&&e===C.r.OCCLUSION_PIXELS}createGLMaterial(e){return e.output===v.H.Color||e.output===v.H.Alpha?new Z(e):e.output===v.H.Highlight?new $(e):null}calculateRelativeScreenBounds(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,m.Ue)();return function(e,t,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Y;(0,c.c)(i,e.anchorPosition),i[0]*=-t[0],i[1]*=-t[1],i[0]+=e.screenOffset[0]*r,i[1]+=e.screenOffset[1]*r}(this.parameters,e,t,r),r[2]=r[0]+e[0],r[3]=r[1]+e[1],r}}class $ extends S.F{constructor(e){super({...e,...e.material.parameters})}selectProgram(e){return this.ensureTechnique(U,e)}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.selectProgram(e)}}class Z extends ${_isOcclusionSlot(e){return e.slot===C.r.OCCLUSION_PIXELS&&this._material.parameters.occlusionTest&&(this._output===v.H.Color||this._output===v.H.Alpha)}selectProgram(e){return this.ensureTechnique(U,e,this._isOcclusionSlot(e)?v.H.Occlusion:this._output)}}function X(e,t,r,i,s,a,n,l){let c=t-s-(l[0]>0?i[0]*l[0]:0),d=c+i[0]+2*s,h=r-s-(l[1]>0?i[1]*l[1]:0),u=h+i[1]+2*s;const p=n.distanceFieldBoundingBox;return n.textureIsSignedDistanceField&&(0,o.pC)(p)&&(c+=i[0]*p[0],h+=i[1]*p[1],d-=i[0]*(1-p[2]),u-=i[1]*(1-p[3]),c-=a,d+=a,h-=a,u+=a),e[0]>c&&e[0]<d&&e[1]>h&&e[1]<u}const J={factor:{scale:0,factor:0,minPixelSize:0,paddingPixels:0},factorAlignment:{scale:0,factor:0,minPixelSize:0,paddingPixels:0}},Y=(0,d.a)(),Q=(0,u.c)(),K=(0,u.c)(),ee=(0,p.c)(),te=(0,u.c)(),re=(0,u.c)(),ie=(0,a.c)(),oe=(0,a.c)(),se=(0,l.c)(),ae=(0,u.c)(),ne={normal:te,cosAngle:0},le=(0,l.c)(),ce=1,de=2,he=[0,0],ue=(0,u.f)(0,0,1);class pe extends S.E{constructor(){super(...arguments),this.renderOccluded=y.yD.Occlude,this.color=[1,1,1,1],this.texCoordScale=[1,1],this.polygonOffset=!1,this.anchorPosition=(0,d.f)(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.outlineColor=[1,1,1,1],this.outlineSize=0,this.vvSizeEnabled=!1,this.vvSizeMinSize=[1,1,1],this.vvSizeMaxSize=[100,100,100],this.vvSizeOffset=[0,0,0],this.vvSizeFactor=[1,1,1],this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.occlusionTest=!0,this.binaryHighlightOcclusion=!0,this.debugDrawLabelBorder=!1,this.centerOffsetUnits="world",this.drawInSecondSlot=!1,this.depthEnabled=!0,this.isDraped=!1}}const fe=(0,g.U$)().vec3f(w.T.POSITION).vec3f(w.T.NORMAL).vec2f(w.T.UV0).vec4u8(w.T.COLOR).vec2f(w.T.SIZE).vec4f(w.T.AUXPOS1).vec4f(w.T.AUXPOS2);class me{constructor(e){this.material=e,this.vertexBufferLayout=fe}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return 6*e.indices.get(w.T.POSITION).length}write(e,t,r,i){(0,R.ho)(t.indices.get(w.T.POSITION),t.vertexAttributes.get(w.T.POSITION).data,e.transformation,r.position,i,6),(0,R.s5)(t.indices.get(w.T.NORMAL),t.vertexAttributes.get(w.T.NORMAL).data,e.invTranspTransformation,r.normal,i,6);{const e=t.vertexAttributes.get(w.T.UV0).data;let o,s,a,n;if(null==e||e.length<4){const e=this.material.parameters;o=0,s=0,a=e.texCoordScale[0],n=e.texCoordScale[1]}else o=e[0],s=e[1],a=e[2],n=e[3];a=Math.min(1.99999,a+1),n=Math.min(1.99999,n+1);const l=t.indices.get(w.T.POSITION).length,c=r.uv0;let d=i;for(let t=0;t<l;++t)c.set(d,0,o),c.set(d,1,s),d+=1,c.set(d,0,a),c.set(d,1,s),d+=1,c.set(d,0,a),c.set(d,1,n),d+=1,c.set(d,0,a),c.set(d,1,n),d+=1,c.set(d,0,o),c.set(d,1,n),d+=1,c.set(d,0,o),c.set(d,1,s),d+=1}(0,R.Vs)(t.indices.get(w.T.COLOR),t.vertexAttributes.get(w.T.COLOR).data,4,r.color,i,6);{const e=t.indices.get(w.T.SIZE),o=t.vertexAttributes.get(w.T.SIZE).data,s=e.length,a=r.size;let n=i;for(let t=0;t<s;++t){const r=o[2*e[t]],i=o[2*e[t]+1];for(let e=0;e<6;++e)a.set(n,0,r),a.set(n,1,i),n+=1}}t.indices.get(w.T.AUXPOS1)&&t.vertexAttributes.get(w.T.AUXPOS1)&&(0,R.SW)(t.indices.get(w.T.AUXPOS1),t.vertexAttributes.get(w.T.AUXPOS1).data,r.auxpos1,i,6),t.indices.get(w.T.AUXPOS2)&&t.vertexAttributes.get(w.T.AUXPOS2)&&(0,R.SW)(t.indices.get(w.T.AUXPOS2),t.vertexAttributes.get(w.T.AUXPOS2).data,r.auxpos2,i,6)}}},24231:(e,t,r)=>{r.d(t,{Y:()=>V});var i=r(32718),o=r(92026),s=r(17842),a=r(88396),n=r(11186),l=r(71353),c=r(67077),d=r(95773),h=r(85981),u=r(55652),p=r(25158),f=r(71011),m=r(81955),g=r(23620),v=r(56529),_=r(93822),T=r(97731),S=r(4760),y=r(33236),C=r(64226),x=r(22909),O=r(32683),w=r(82144),R=r(31132),b=r(7566),A=r(27627),E=r(50411),P=r(99337),D=r(8548),I=r(36207);class H extends R.A{constructor(e,t,r){super(e,t,r),this.stipplePattern=null,this.stippleTextureBind=null,this.stippleTextureRepository=e.stippleTextureRepository}get stippleEnabled(){return this.configuration.stippleEnabled&&this.configuration.output!==f.H.Highlight}initializeProgram(e){const t=H.shader.get().build(this.configuration);return new A.$(e.rctx,t,b.i)}destroy(){super.destroy(),this.stippleTextureRepository.release(this.stipplePattern),this.stipplePattern=null,this.stippleTextureBind=null}bindPass(e,t){if(this.program.bindPass(e,t),this.stipplePattern!==e.stipplePattern){const t=e.stipplePattern;this.stippleTextureBind=this.stippleTextureRepository.swap(this.stipplePattern,t),this.stipplePattern=t}if(this.stippleEnabled){const{pixelSize:e,sdfNormalizer:t,pixels:r}=(0,o.pC)(this.stippleTextureBind)?this.stippleTextureBind(this.program):{pixelSize:1,sdfNormalizer:1,pixels:1};this.program.setUniform1f("stipplePatternSDFNormalizer",t),this.program.setUniform1f("stipplePatternTextureSize",r),this.program.setUniform1f("stipplePatternPixelSize",e),this.program.setUniform1f("stipplePatternPixelSizeInv",1/e)}}initializePipeline(){const e=this.configuration,t=(0,I.wK)(D.zi.SRC_ALPHA,D.zi.ONE,D.zi.ONE_MINUS_SRC_ALPHA,D.zi.ONE_MINUS_SRC_ALPHA),r=function(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return(0,I.sm)({blending:r,depthTest:E.JN,depthWrite:i,colorWrite:I.BK,stencilWrite:e.hasOccludees?E.s3:null,stencilTest:e.hasOccludees?t?E.eD:E.RY:null})};return e.output===f.H.Color?(this._occludeePipelineState=r(!0,e.transparent||this.stippleEnabled?t:null,I.LZ),r(!1,e.transparent||this.stippleEnabled?t:null,I.LZ)):r(!1)}get primitiveType(){return D.MX.LINES}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}H.shader=new w.J(P.N,(()=>r.e(8569).then(r.bind(r,78569))));var N=r(27366),M=r(33559),F=r(8883);class z extends F.W{constructor(){super(...arguments),this.output=f.H.Color,this.hasSlicePlane=!1,this.hasVertexColors=!1,this.transparent=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.hasOccludees=!1}}(0,N._)([(0,M.o)({count:f.H.COUNT})],z.prototype,"output",void 0),(0,N._)([(0,M.o)()],z.prototype,"hasSlicePlane",void 0),(0,N._)([(0,M.o)()],z.prototype,"hasVertexColors",void 0),(0,N._)([(0,M.o)()],z.prototype,"transparent",void 0),(0,N._)([(0,M.o)()],z.prototype,"draped",void 0),(0,N._)([(0,M.o)()],z.prototype,"stippleEnabled",void 0),(0,N._)([(0,M.o)()],z.prototype,"stippleOffColorEnabled",void 0),(0,N._)([(0,M.o)()],z.prototype,"stipplePreferContinuous",void 0),(0,N._)([(0,M.o)()],z.prototype,"hasOccludees",void 0),(0,N._)([(0,M.o)({constValue:!1})],z.prototype,"stippleRequiresClamp",void 0),(0,N._)([(0,M.o)({constValue:!1})],z.prototype,"stippleScaleWithLineWidth",void 0),(0,N._)([(0,M.o)({constValue:!1})],z.prototype,"stippleRequiresStretchMeasure",void 0);const L=i.Z.getLogger("esri.views.3d.webgl-engine.materials.NativeLineMaterial");var U;!function(e){e[e.START=0]="START",e[e.END=1]="END"}(U||(U={}));class V extends v.F5{constructor(e){super(e,new G),this._techniqueConfig=new z}getConfiguration(e,t){this._techniqueConfig.output=e,this._techniqueConfig.hasSlicePlane=this.parameters.hasSlicePlane,this._techniqueConfig.hasVertexColors=this.parameters.hasVertexColors,this._techniqueConfig.transparent=this.parameters.color[3]<1||this.parameters.width<1,this._techniqueConfig.draped=t.slot===_.r.DRAPED_MATERIAL;const r=(0,o.pC)(this.parameters.stipplePattern);return this._techniqueConfig.stippleEnabled=r,this._techniqueConfig.stippleOffColorEnabled=r&&(0,o.pC)(this.parameters.stippleOffColor),this._techniqueConfig.hasOccludees=this.parameters.hasOccludees,this._techniqueConfig.stipplePreferContinuous=this.parameters.stipplePreferContinuous,this._techniqueConfig}intersect(e,t,r,i,s,a,n,l,c){(0,o.pC)(c)?(0,x.TT)(e,i,c,a,1,n):this._intersectLineGeometry(e,t,r,i,n)}_intersectLineGeometry(e,t,r,i,o){if(!i.options.selectionMode||(0,O.PD)(t))return;if(!(0,T.kG)(r))return void L.error("intersection assumes a translation-only matrix");const s=e.vertexAttributes.get(S.T.POSITION).data,l=i.camera,c=ee;(0,a.c)(c,i.point);(0,n.s)(te[0],c[0]-2,c[1]+2,0),(0,n.s)(te[1],c[0]+2,c[1]+2,0),(0,n.s)(te[2],c[0]+2,c[1]-2,0),(0,n.s)(te[3],c[0]-2,c[1]-2,0);for(let a=0;a<4;a++)if(!l.unprojectFromRenderScreen(te[a],re[a]))return;(0,u.zk)(l.eye,re[0],re[1],ie),(0,u.zk)(l.eye,re[1],re[2],oe),(0,u.zk)(l.eye,re[2],re[3],se),(0,u.zk)(l.eye,re[3],re[0],ae);let p=Number.MAX_VALUE,f=0;for(let a=0;a<s.length-5;a+=3){if(j[0]=s[a]+r[12],j[1]=s[a+1]+r[13],j[2]=s[a+2]+r[14],q[0]=s[a+3]+r[12],q[1]=s[a+4]+r[13],q[2]=s[a+5]+r[14],(0,u.jH)(ie,j)<0&&(0,u.jH)(ie,q)<0||(0,u.jH)(oe,j)<0&&(0,u.jH)(oe,q)<0||(0,u.jH)(se,j)<0&&(0,u.jH)(se,q)<0||(0,u.jH)(ae,j)<0&&(0,u.jH)(ae,q)<0)continue;if(l.projectToRenderScreen(j,Z),l.projectToRenderScreen(q,X),Z[2]<0&&X[2]>0){(0,n.b)(k,j,q);const e=l.frustum,t=-(0,u.jH)(e[d.Nu.NEAR],j)/(0,n.e)(k,(0,u.mJ)(e[d.Nu.NEAR]));(0,n.g)(k,k,t),(0,n.a)(j,j,k),l.projectToRenderScreen(j,Z)}else if(Z[2]>0&&X[2]<0){(0,n.b)(k,q,j);const e=l.frustum,t=-(0,u.jH)(e[d.Nu.NEAR],q)/(0,n.e)(k,(0,u.mJ)(e[d.Nu.NEAR]));(0,n.g)(k,k,t),(0,n.a)(q,q,k),l.projectToRenderScreen(q,X)}else if(Z[2]<0&&X[2]<0)continue;Z[2]=0,X[2]=0;const e=(0,h.Jk)((0,h.zk)(Z,X,Q),c);e<p&&(p=e,(0,n.c)(J,j),(0,n.c)(Y,q),f=a/3)}const m=i.rayBegin,g=i.rayEnd;if(p<4){let e=Number.MAX_VALUE;if((0,h.AR)((0,h.zk)(J,Y,Q),(0,h.zk)(m,g,K),$)){(0,n.b)($,$,m);const t=(0,n.l)($);(0,n.g)($,$,1/t),e=t/(0,n.i)(m,g)}o(e,$,f,!1)}}computeAttachmentOrigin(e,t){const r=e.vertexAttributes;if(!r)return!1;const i=r.get(S.T.POSITION);return(0,m.qZ)(i,null,!1,t)}requiresSlot(e){return e===_.r.OPAQUE_MATERIAL||e===_.r.DRAPED_MATERIAL}createGLMaterial(e){return e.output===f.H.Color||e.output===f.H.Highlight?new B(e):null}createBufferWriter(){const e=this.parameters.hasVertexColors?C.IM:C.wp;return(0,o.Wi)(this.parameters.stipplePattern)?new C.G_(e):new W(e.clone().vec3f(S.T.AUXPOS1).vec2f(S.T.UV0))}}class B extends g.Z{_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){return this._output===f.H.Color&&this._updateOccludeeState(e),this.ensureTechnique(H,e)}}class W{constructor(e){this.vertexBufferLayout=e}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(S.T.POSITION).length}write(e,t,r,i){(0,y.NK)(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,r,i),this._writeAuxpos1(e,t,r,i),this._writeUV0(e,t,r,i)}_writeAuxpos1(e,t,r,i){const o=r.getField(S.T.AUXPOS1,p.ct),s=t.indices.get(S.T.POSITION),a=t.vertexAttributes.get(S.T.POSITION).data,n=e.transformation,l=o.typedBufferStride,c=o.typedBuffer;i*=l;for(let d=0;d<s.length-1;d+=2)for(const e of[1,0]){const t=3*s[d+e],r=a[t],o=a[t+1],h=a[t+2],u=n[0]*r+n[4]*o+n[8]*h+n[12],p=n[1]*r+n[5]*o+n[9]*h+n[13],f=n[2]*r+n[6]*o+n[10]*h+n[14];c[i]=u,c[i+1]=p,c[i+2]=f,i+=l}}_writeUV0(e,t,r,i){const o=r.getField(S.T.UV0,p.Eu),s=t.indices.get(S.T.POSITION),a=t.vertexAttributes.get(S.T.POSITION).data,l=t.vertexAttributes.get(S.T.DISTANCETOSTART)?.data,c=e.transformation,d=o.typedBufferStride,h=o.typedBuffer;let u=0;h[i*=d]=U.START,h[i+1]=u,i+=d;const f=3*s[0],m=(0,n.s)(j,a[f],a[f+1],a[f+2]);c&&(0,n.m)(m,m,c);const g=q,v=s.length-1;let _=1;const T=l?(e,t,r)=>u=l[r]:(e,t,r)=>u+=(0,n.i)(e,t);for(let p=1;p<v;p+=2){const e=3*s[p];(0,n.s)(g,a[e],a[e+1],a[e+2]),c&&(0,n.m)(g,g,c),T(m,g,_++);for(let t=0;t<2;++t)h[i]=1-t,h[i+1]=u,i+=d;(0,n.c)(m,g)}const y=3*s[v];(0,n.s)(g,a[y],a[y+1],a[y+2]),c&&(0,n.m)(g,g,c),T(m,g,_),h[i]=U.END,h[i+1]=u}}class G extends v.Mt{constructor(){super(...arguments),this.color=c.O,this.hasVertexColors=!1,this.hasSlicePlane=!1,this.width=1,this.stipplePreferContinuous=!0,this.hasOccludees=!1}}const j=(0,l.c)(),q=(0,l.c)(),k=(0,l.c)(),$=(0,l.c)(),Z=(0,s.J$)(),X=(0,s.J$)(),J=(0,l.c)(),Y=(0,l.c)(),Q=(0,h.Ue)(),K=(0,h.Ue)(),ee=(0,l.c)(),te=[(0,s.J$)(),(0,s.J$)(),(0,s.J$)(),(0,s.J$)()],re=[(0,l.c)(),(0,l.c)(),(0,l.c)(),(0,l.c)()],ie=(0,u.Ue)(),oe=(0,u.Ue)(),se=(0,u.Ue)(),ae=(0,u.Ue)()},58901:(e,t,r)=>{r.d(t,{U:()=>V});var i=r(32718),o=r(16889),s=r(92026),a=r(17842),n=r(88396),l=r(11186),c=r(71353),d=r(67077),h=r(95773),u=r(85981),p=r(55652),f=r(55158),m=r(71011),g=r(81955),v=r(23620),_=r(94425),T=r(56529),S=r(93822),y=r(97731),C=r(4760),x=r(65964),O=r(32683),w=r(98186),R=r(82144),b=r(31132),A=r(68401),E=r(78041),P=r(27627),D=r(50411),I=r(8548),H=r(36207);const N=new Map([[C.T.POSITION,0],[C.T.SUBDIVISIONFACTOR,1],[C.T.UV0,2],[C.T.AUXPOS1,3],[C.T.AUXPOS2,4],[C.T.COLOR,5],[C.T.COLORFEATUREATTRIBUTE,5],[C.T.SIZE,6],[C.T.SIZEFEATUREATTRIBUTE,6],[C.T.OPACITYFEATUREATTRIBUTE,7]]);class M extends b.A{constructor(e,t,r){super(e,t,r),this.stippleTextureRepository=e.stippleTextureRepository}initializeProgram(e){const t=M.shader.get().build(this.configuration);return new P.$(e.rctx,t,N)}destroy(){super.destroy(),this.stippleTextureRepository.release(this.stipplePattern),this.stipplePattern=null,this.stippleTextureBind=null}bindPass(e,t){if(this.program.bindPass(e,t),this.stipplePattern!==e.stipplePattern){const t=e.stipplePattern;this.stippleTextureBind=this.stippleTextureRepository.swap(this.stipplePattern,t),this.stipplePattern=t}if(this.configuration.stippleEnabled){const{pixelSize:e,sdfNormalizer:t,pixels:r}=(0,s.pC)(this.stippleTextureBind)?this.stippleTextureBind(this.program):{pixelSize:1,sdfNormalizer:1,pixels:1};this.program.setUniform1f("stipplePatternSDFNormalizer",t),this.program.setUniform1f("stipplePatternTextureSize",r),this.program.setUniform1f("stipplePatternPixelSize",e),this.program.setUniform1f("stipplePatternPixelSizeInv",1/e)}}_makePipelineState(e,t){const r=this.configuration,i=e===A.Am.NONE,o=e===A.Am.FrontFace;return(0,H.sm)({blending:r.output===m.H.Color||r.output===m.H.Alpha?i?E.wu:(0,E.j7)(e):null,depthTest:{func:(0,E.Bh)(e)},depthWrite:i?r.writeDepth&&H.LZ:(0,E.K5)(e),colorWrite:H.BK,stencilWrite:r.hasOccludees?D.s3:null,stencilTest:r.hasOccludees?t?D.eD:D.RY:null,polygonOffset:i||o?r.hasPolygonOffset&&F:E.E0})}initializePipeline(){const e=this.configuration;if(e.occluder){const t=e.hasPolygonOffset&&F;this._occluderPipelineTransparent=(0,H.sm)({blending:E.wu,polygonOffset:t,depthTest:D.zV,depthWrite:null,colorWrite:H.BK,stencilWrite:null,stencilTest:D.YD}),this._occluderPipelineOpaque=(0,H.sm)({blending:E.wu,polygonOffset:t,depthTest:D.zV,depthWrite:null,colorWrite:H.BK,stencilWrite:D.P7,stencilTest:D.ii}),this._occluderPipelineMaskWrite=(0,H.sm)({blending:null,polygonOffset:t,depthTest:D.JN,depthWrite:null,colorWrite:null,stencilWrite:D.s3,stencilTest:D.eD})}return this._occludeePipelineState=this._makePipelineState(this.configuration.transparencyPassType,!0),this._makePipelineState(this.configuration.transparencyPassType,!1)}get primitiveType(){return this.configuration.wireframe?I.MX.LINES:I.MX.TRIANGLE_STRIP}getPipelineState(e,t){return t?this._occludeePipelineState:this.configuration.occluder?e===S.r.TRANSPARENT_OCCLUDER_MATERIAL?this._occluderPipelineTransparent:e===S.r.OCCLUDER_MATERIAL?this._occluderPipelineOpaque:this._occluderPipelineMaskWrite:super.getPipelineState(e,t)}}M.shader=new R.J(w.R,(()=>r.e(6279).then(r.bind(r,56279))));const F={factor:0,units:-4};var z=r(737);const L=i.Z.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial");var U;!function(e){e[e.LEFT_JOIN_START=-2]="LEFT_JOIN_START",e[e.LEFT_JOIN_END=-1]="LEFT_JOIN_END",e[e.LEFT_CAP_START=-4]="LEFT_CAP_START",e[e.LEFT_CAP_END=-5]="LEFT_CAP_END",e[e.RIGHT_JOIN_START=2]="RIGHT_JOIN_START",e[e.RIGHT_JOIN_END=1]="RIGHT_JOIN_END",e[e.RIGHT_CAP_START=4]="RIGHT_CAP_START",e[e.RIGHT_CAP_END=5]="RIGHT_CAP_END"}(U||(U={}));class V extends T.F5{constructor(e){super(e,new W),this._vertexAttributeLocations=N,this.techniqueConfig=new z.G,this.layout=this.createLayout()}isClosed(e,t){return k(this.parameters,e,t)}getConfiguration(e,t){this.techniqueConfig.output=e,this.techniqueConfig.draped=t.slot===S.r.DRAPED_MATERIAL;const r=(0,s.pC)(this.parameters.stipplePattern)&&e!==m.H.Highlight;return this.techniqueConfig.stippleEnabled=r,this.techniqueConfig.stippleOffColorEnabled=r&&(0,s.pC)(this.parameters.stippleOffColor),this.techniqueConfig.stippleScaleWithLineWidth=r&&this.parameters.stippleScaleWithLineWidth,this.techniqueConfig.stipplePreferContinuous=r&&this.parameters.stipplePreferContinuous,this.techniqueConfig.hasSlicePlane=this.parameters.hasSlicePlane,this.techniqueConfig.hasOccludees=this.parameters.hasOccludees,this.techniqueConfig.roundJoins="round"===this.parameters.join,this.techniqueConfig.capType=this.parameters.cap,this.techniqueConfig.hasPolygonOffset=this.parameters.hasPolygonOffset,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.vvOpacity=this.parameters.vvOpacityEnabled,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.innerColorEnabled=this.parameters.innerWidth>0&&(0,s.pC)(this.parameters.innerColor),this.techniqueConfig.falloffEnabled=this.parameters.falloff>0,this.techniqueConfig.occluder=this.parameters.renderOccluded===T.yD.OccludeAndTransparentStencil,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.hasMultipassTerrain=t.multipassTerrain.enabled,this.techniqueConfig.cullAboveGround=t.multipassTerrain.cullAboveGround,this.techniqueConfig.wireframe=this.parameters.wireframe,this.techniqueConfig}intersect(e,t,r,i,o,a,n,l,c){(0,s.pC)(c)?this._intersectDrapedLineGeometry(e,i,c,a,n):this._intersectLineGeometry(e,t,r,i,n)}_intersectDrapedLineGeometry(e,t,r,i,s){if(!t.options.selectionMode)return;const a=e.vertexAttributes.get(C.T.POSITION).data,n=e.vertexAttributes.get(C.T.SIZE);let l=this.parameters.width;if(this.parameters.vvSizeEnabled){const t=e.vertexAttributes.get(C.T.SIZEFEATUREATTRIBUTE).data[0];l*=(0,o.uZ)(this.parameters.vvSizeOffset[0]+t*this.parameters.vvSizeFactor[0],this.parameters.vvSizeMinSize[0],this.parameters.vvSizeMaxSize[0])}else n&&(l*=n.data[0]);const c=i[0],d=i[1],h=(l/2+4)*e.screenToWorldRatio;let u=Number.MAX_VALUE,p=0;for(let f=0;f<a.length-5;f+=3){const e=a[f],t=a[f+1],r=c-e,i=d-t,s=a[f+3]-e,n=a[f+4]-t,l=(0,o.uZ)((s*r+n*i)/(s*s+n*n),0,1),h=s*l-r,m=n*l-i,g=h*h+m*m;g<u&&(u=g,p=f/3)}u<h*h&&s(r.dist,r.normal,p,!1)}_intersectLineGeometry(e,t,r,i,s){if(!i.options.selectionMode||(0,O.PD)(t))return;if(!(0,y.kG)(r))return void L.error("intersection assumes a translation-only matrix");const a=e.vertexAttributes,c=a.get(C.T.POSITION).data;let d=this.parameters.width;if(this.parameters.vvSizeEnabled){const e=a.get(C.T.SIZEFEATUREATTRIBUTE).data[0];d*=(0,o.uZ)(this.parameters.vvSizeOffset[0]+e*this.parameters.vvSizeFactor[0],this.parameters.vvSizeMinSize[0],this.parameters.vvSizeMaxSize[0])}else a.has(C.T.SIZE)&&(d*=a.get(C.T.SIZE).data[0]);const f=i.camera,m=Y;(0,n.c)(m,i.point);const g=d*f.pixelRatio/2+4*f.pixelRatio;(0,l.s)(ne[0],m[0]-g,m[1]+g,0),(0,l.s)(ne[1],m[0]+g,m[1]+g,0),(0,l.s)(ne[2],m[0]+g,m[1]-g,0),(0,l.s)(ne[3],m[0]-g,m[1]-g,0);for(let o=0;o<4;o++)if(!f.unprojectFromRenderScreen(ne[o],le[o]))return;(0,p.zk)(f.eye,le[0],le[1],ce),(0,p.zk)(f.eye,le[1],le[2],de),(0,p.zk)(f.eye,le[2],le[3],he),(0,p.zk)(f.eye,le[3],le[0],ue);let v=Number.MAX_VALUE,_=0;const T=q(this.parameters,a,e.indices)?c.length-2:c.length-5;for(let o=0;o<T;o+=3){$[0]=c[o]+r[12],$[1]=c[o+1]+r[13],$[2]=c[o+2]+r[14];const e=(o+3)%c.length;if(Z[0]=c[e]+r[12],Z[1]=c[e+1]+r[13],Z[2]=c[e+2]+r[14],(0,p.jH)(ce,$)<0&&(0,p.jH)(ce,Z)<0||(0,p.jH)(de,$)<0&&(0,p.jH)(de,Z)<0||(0,p.jH)(he,$)<0&&(0,p.jH)(he,Z)<0||(0,p.jH)(ue,$)<0&&(0,p.jH)(ue,Z)<0)continue;if(f.projectToRenderScreen($,Q),f.projectToRenderScreen(Z,K),Q[2]<0&&K[2]>0){(0,l.b)(X,$,Z);const e=f.frustum,t=-(0,p.jH)(e[h.Nu.NEAR],$)/(0,l.e)(X,(0,p.mJ)(e[h.Nu.NEAR]));(0,l.g)(X,X,t),(0,l.a)($,$,X),f.projectToRenderScreen($,Q)}else if(Q[2]>0&&K[2]<0){(0,l.b)(X,Z,$);const e=f.frustum,t=-(0,p.jH)(e[h.Nu.NEAR],Z)/(0,l.e)(X,(0,p.mJ)(e[h.Nu.NEAR]));(0,l.g)(X,X,t),(0,l.a)(Z,Z,X),f.projectToRenderScreen(Z,K)}else if(Q[2]<0&&K[2]<0)continue;Q[2]=0,K[2]=0;const t=(0,u.Jk)((0,u.zk)(Q,K,re),m);t<v&&(v=t,(0,l.c)(ee,$),(0,l.c)(te,Z),_=o/3)}const S=i.rayBegin,x=i.rayEnd;if(v<g*g){let e=Number.MAX_VALUE;if((0,u.AR)((0,u.zk)(ee,te,re),(0,u.zk)(S,x,ie),J)){(0,l.b)(J,J,S);const t=(0,l.l)(J);(0,l.g)(J,J,1/t),e=t/(0,l.i)(S,x)}s(e,J,_,!1)}}computeAttachmentOrigin(e,t){const r=e.vertexAttributes;if(!r)return null;const i=e.indices,o=r.get(C.T.POSITION);return(0,g.qZ)(o,i?i.get(C.T.POSITION):null,i&&q(this.parameters,r,i),t)}createLayout(){const e=(0,f.U$)().vec3f(C.T.POSITION).f32(C.T.SUBDIVISIONFACTOR).vec2f(C.T.UV0).vec3f(C.T.AUXPOS1).vec3f(C.T.AUXPOS2);return this.parameters.vvSizeEnabled?e.f32(C.T.SIZEFEATUREATTRIBUTE):e.f32(C.T.SIZE),this.parameters.vvColorEnabled?e.f32(C.T.COLORFEATUREATTRIBUTE):e.vec4f(C.T.COLOR),this.parameters.vvOpacityEnabled&&e.f32(C.T.OPACITYFEATUREATTRIBUTE),e}createBufferWriter(){return new G(this.layout,this.parameters)}requiresSlot(e,t){if(e===S.r.DRAPED_MATERIAL)return!0;if(this.parameters.renderOccluded===T.yD.OccludeAndTransparentStencil)return e===S.r.OPAQUE_MATERIAL||e===S.r.OCCLUDER_MATERIAL||e===S.r.TRANSPARENT_OCCLUDER_MATERIAL;const r=(0,_.S)(t);return r===m.H.Color||r===m.H.Alpha?e===(this.parameters.writeDepth?S.r.TRANSPARENT_MATERIAL:S.r.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL):e===S.r.OPAQUE_MATERIAL}createGLMaterial(e){return e.output===m.H.Color||e.output===m.H.Alpha||e.output===m.H.Highlight||e.output===m.H.Depth?new B(e):null}validateParameters(e){"miter"!==e.join&&(e.miterLimit=0)}}class B extends v.Z{_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){return this._output!==m.H.Color&&this._output!==m.H.Alpha||this._updateOccludeeState(e),this.ensureTechnique(M,e)}}class W extends x.n{constructor(){super(...arguments),this.width=0,this.color=d.O,this.join="miter",this.cap=z.R.BUTT,this.miterLimit=5,this.writeDepth=!0,this.hasPolygonOffset=!1,this.stippleScaleWithLineWidth=!1,this.stipplePreferContinuous=!0,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.hasOccludees=!1,this.wireframe=!1}}class G{constructor(e,t){this.parameters=t,this.numJoinSubdivisions=0,this.vertexBufferLayout=e;const r=t.stipplePattern?1:0;switch(this.parameters.join){case"miter":case"bevel":this.numJoinSubdivisions=r;break;case"round":this.numJoinSubdivisions=w.N+r}}_isClosed(e){return q(this.parameters,e.vertexAttributes,e.indices)}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){const t=e.indices.get(C.T.POSITION).length/2+1,r=this._isClosed(e);let i=r?2:4;return i+=((r?t:t-1)-(r?0:1))*(2*this.numJoinSubdivisions+4),i+=2,this.parameters.wireframe&&(i=2+4*(i-2)),i}write(e,t,r,i){const o=oe,s=se,a=ae,n=t.vertexAttributes.get(C.T.POSITION).data,c=t.indices&&t.indices.get(C.T.POSITION),d=t.vertexAttributes.get(C.T.DISTANCETOSTART)?.data;c&&c.length!==2*(n.length/3-1)&&console.warn("RibbonLineMaterial does not support indices");let h=1,u=0;this.parameters.vvSizeEnabled?u=t.vertexAttributes.get(C.T.SIZEFEATUREATTRIBUTE).data[0]:t.vertexAttributes.has(C.T.SIZE)&&(h=t.vertexAttributes.get(C.T.SIZE).data[0]);let p=[1,1,1,1],f=0;this.parameters.vvColorEnabled?f=t.vertexAttributes.get(C.T.COLORFEATUREATTRIBUTE).data[0]:t.vertexAttributes.has(C.T.COLOR)&&(p=t.vertexAttributes.get(C.T.COLOR).data);let m=0;this.parameters.vvOpacityEnabled&&(m=t.vertexAttributes.get(C.T.OPACITYFEATUREATTRIBUTE).data[0]);const g=n.length/3,v=e.transformation,_=new Float32Array(r.buffer),T=this.vertexBufferLayout.stride/4;let S=i*T;const y=S;let x=0;const O=d?(e,t,r)=>x=d[r]:(e,t,r)=>x+=(0,l.i)(e,t),w=(e,t,r,i,o,s,a)=>{if(_[S++]=t[0],_[S++]=t[1],_[S++]=t[2],_[S++]=i,_[S++]=a,_[S++]=o,_[S++]=e[0],_[S++]=e[1],_[S++]=e[2],_[S++]=r[0],_[S++]=r[1],_[S++]=r[2],this.parameters.vvSizeEnabled?_[S++]=u:_[S++]=h,this.parameters.vvColorEnabled)_[S++]=f;else{const e=Math.min(4*s,p.length-4);_[S++]=p[e+0],_[S++]=p[e+1],_[S++]=p[e+2],_[S++]=p[e+3]}this.parameters.vvOpacityEnabled&&(_[S++]=m)};S+=T,(0,l.s)(s,n[0],n[1],n[2]),v&&(0,l.m)(s,s,v);const R=this._isClosed(t);if(R){const e=n.length-3;(0,l.s)(o,n[e],n[e+1],n[e+2]),v&&(0,l.m)(o,o,v)}else(0,l.s)(a,n[3],n[4],n[5]),v&&(0,l.m)(a,a,v),w(s,s,a,1,U.LEFT_CAP_START,0,0),w(s,s,a,1,U.RIGHT_CAP_START,0,0),(0,l.c)(o,s),(0,l.c)(s,a);const b=R?0:1,A=R?g:g-1;for(let C=b;C<A;C++){const e=(C+1)%g*3;(0,l.s)(a,n[e+0],n[e+1],n[e+2]),v&&(0,l.m)(a,a,v),O(o,s,C),w(o,s,a,0,U.LEFT_JOIN_END,C,x),w(o,s,a,0,U.RIGHT_JOIN_END,C,x);const t=this.numJoinSubdivisions;for(let r=0;r<t;++r){const e=(r+1)/(t+1);w(o,s,a,e,U.LEFT_JOIN_END,C,x),w(o,s,a,e,U.RIGHT_JOIN_END,C,x)}w(o,s,a,1,U.LEFT_JOIN_START,C,x),w(o,s,a,1,U.RIGHT_JOIN_START,C,x),(0,l.c)(o,s),(0,l.c)(s,a)}R?((0,l.s)(a,n[3],n[4],n[5]),v&&(0,l.m)(a,a,v),x=O(o,s,A),w(o,s,a,0,U.LEFT_JOIN_END,b,x),w(o,s,a,0,U.RIGHT_JOIN_END,b,x)):(x=O(o,s,A),w(o,s,s,0,U.LEFT_CAP_END,A,x),w(o,s,s,0,U.RIGHT_CAP_END,A,x)),j(_,y+T,_,y,T),S=j(_,S-T,_,S,T),this.parameters.wireframe&&this._addWireframeVertices(r,y,S,T)}_addWireframeVertices(e,t,r,i){const o=new Float32Array(e.buffer,r*Float32Array.BYTES_PER_ELEMENT),s=new Float32Array(e.buffer,t*Float32Array.BYTES_PER_ELEMENT,r-t);let a=0;const n=e=>a=j(s,e,o,a,i);for(let l=0;l<s.length-1;l+=2*i)n(l),n(l+2*i),n(l+1*i),n(l+2*i),n(l+1*i),n(l+3*i)}}function j(e,t,r,i,o){for(let s=0;s<o;s++)r[i++]=e[t++];return i}function q(e,t,r){return k(e,t.get(C.T.POSITION).data,r?r.get(C.T.POSITION):null)}function k(e,t,r){return!!e.isClosed&&(r?r.length>2:t.length>6)}const $=(0,c.c)(),Z=(0,c.c)(),X=(0,c.c)(),J=(0,c.c)(),Y=(0,c.c)(),Q=(0,a.J$)(),K=(0,a.J$)(),ee=(0,c.c)(),te=(0,c.c)(),re=(0,u.Ue)(),ie=(0,u.Ue)(),oe=(0,c.c)(),se=(0,c.c)(),ae=(0,c.c)(),ne=[(0,a.J$)(),(0,a.J$)(),(0,a.J$)(),(0,a.J$)()],le=[(0,c.c)(),(0,c.c)(),(0,c.c)(),(0,c.c)()],ce=(0,p.Ue)(),de=(0,p.Ue)(),he=(0,p.Ue)(),ue=(0,p.Ue)()},47475:(e,t,r)=>{r.d(t,{H:()=>I,m:()=>H});var i=r(38499),o=r(6394),s=r(67077),a=r(71011),n=r(92026);class l{constructor(){this.enabled=!0,this._time=0}get time(){return(0,i.HA)(this._time)}advance(e){return(0,n.pC)(e.forcedTime)?this._time!==e.forcedTime&&(this._time=e.forcedTime,!0):!(!this.enabled||0===e.dt)&&(this._time+=e.dt,!0)}}var c=r(94425),d=r(56529),h=r(78041),u=r(93822),p=r(68401),f=r(23620),m=r(27366),g=r(50951),v=r(41481),_=r(27254),T=r(82144),S=r(31132),y=r(33559),C=r(7566),x=r(27627),O=r(8883),w=r(49810),R=r(36207);class b extends S.A{constructor(e,t,r){super(e,t,r),this._textureRepository=e.waterTextureRepository}initializeConfiguration(e,t){t.spherical=e.viewingMode===g.JY.Global,t.doublePrecisionRequiresObfuscation=(0,_.I)(e.rctx)}initializeProgram(e){const t=b.shader.get().build(this.configuration);return new x.$(e.rctx,t,C.i)}bindPass(e,t){this.program.bindPass(e,t),this.configuration.output!==a.H.Color&&this.configuration.output!==a.H.Normal||this._textureRepository.bind(this.program)}_setPipelineState(e){const t=this.configuration,r=e===p.Am.NONE,i=e===p.Am.FrontFace;return(0,R.sm)({blending:t.output!==a.H.Normal&&t.output!==a.H.Highlight&&t.transparent?r?h.wu:(0,h.j7)(e):null,depthTest:{func:(0,h.Bh)(e)},depthWrite:r?t.writeDepth&&R.LZ:(0,h.K5)(e),colorWrite:R.BK,polygonOffset:r||i?null:(0,h.je)(t.enableOffset)})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}}b.shader=new T.J(w.W,(()=>r.e(9106).then(r.bind(r,19106))));class A extends O.W{constructor(){super(...arguments),this.output=a.H.Color,this.transparencyPassType=p.Am.NONE,this.spherical=!1,this.receiveShadows=!1,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!1,this.hasScreenSpaceReflections=!1,this.doublePrecisionRequiresObfuscation=!1,this.hasCloudsReflections=!1,this.isDraped=!1,this.hasMultipassTerrain=!1,this.cullAboveGround=!1}}(0,m._)([(0,y.o)({count:a.H.COUNT})],A.prototype,"output",void 0),(0,m._)([(0,y.o)({count:p.Am.COUNT})],A.prototype,"transparencyPassType",void 0),(0,m._)([(0,y.o)()],A.prototype,"spherical",void 0),(0,m._)([(0,y.o)()],A.prototype,"receiveShadows",void 0),(0,m._)([(0,y.o)()],A.prototype,"hasSlicePlane",void 0),(0,m._)([(0,y.o)()],A.prototype,"transparent",void 0),(0,m._)([(0,y.o)()],A.prototype,"enableOffset",void 0),(0,m._)([(0,y.o)()],A.prototype,"writeDepth",void 0),(0,m._)([(0,y.o)()],A.prototype,"hasScreenSpaceReflections",void 0),(0,m._)([(0,y.o)()],A.prototype,"doublePrecisionRequiresObfuscation",void 0),(0,m._)([(0,y.o)()],A.prototype,"hasCloudsReflections",void 0),(0,m._)([(0,y.o)()],A.prototype,"isDraped",void 0),(0,m._)([(0,y.o)()],A.prototype,"hasMultipassTerrain",void 0),(0,m._)([(0,y.o)()],A.prototype,"cullAboveGround",void 0),(0,m._)([(0,y.o)({constValue:v.f7.Water})],A.prototype,"pbrMode",void 0),(0,m._)([(0,y.o)({constValue:!0})],A.prototype,"useCustomDTRExponentForWater",void 0),(0,m._)([(0,y.o)({constValue:!0})],A.prototype,"highStepCount",void 0),(0,m._)([(0,y.o)({constValue:!1})],A.prototype,"useFillLights",void 0);class E extends f.Z{_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.receiveShadows&&this._material.setParameters({receiveShadows:e.shadowMap.enabled})}_updateSSRState(e){e.ssr.enabled!==this._material.parameters.hasScreenSpaceReflections&&this._material.setParameters({hasScreenSpaceReflections:e.ssr.enabled})}_updateCloudsReflectionState(e){const t=(0,n.pC)(e.clouds.data);t!==this._material.parameters.hasCloudsReflections&&this._material.setParameters({hasCloudsReflections:t})}ensureResources(e){const t=this._techniqueRepository.constructionContext.waterTextureRepository;return t.resourceState===p.Rw.NOT_LOADED&&t.loadTextures(e),t.resourceState}beginSlot(e){return this._output===a.H.Color&&(this._updateShadowState(e),this._updateSSRState(e),this._updateCloudsReflectionState(e)),this.ensureTechnique(b,e)}}var P=r(64226),D=r(22909);class I extends d.F5{constructor(e){super(e,new H),this._techniqueConfig=new A,this.animation=new l}getConfiguration(e,t){return this._techniqueConfig.output=e,this._techniqueConfig.writeDepth=this.parameters.writeDepth,this._techniqueConfig.receiveShadows=this.parameters.receiveShadows,this._techniqueConfig.hasSlicePlane=this.parameters.hasSlicePlane,this._techniqueConfig.transparent=this.parameters.transparent,this._techniqueConfig.hasScreenSpaceReflections=this.parameters.hasScreenSpaceReflections,this._techniqueConfig.hasCloudsReflections=this.parameters.hasCloudsReflections,this._techniqueConfig.isDraped=this.parameters.isDraped,this._techniqueConfig.transparencyPassType=t.transparencyPassType,this._techniqueConfig.enableOffset=t.camera.relativeElevation<h.ve,this._techniqueConfig.hasMultipassTerrain=t.multipassTerrain.enabled,this._techniqueConfig.cullAboveGround=t.multipassTerrain.cullAboveGround,this._techniqueConfig}update(e){const t=Math.min(e.camera.relativeElevation,e.camera.distance);this.animation.enabled=Math.sqrt(this.parameters.waveTextureRepeat/this.parameters.waveStrength)*t<N;const r=this.animation.advance(e);return this.setParameters({timeElapsed:(0,i.D9)(this.animation.time)*this.parameters.animationSpeed},!1),this.animation.enabled&&r}intersect(e,t,r,i,o,s,a){(0,D.Bw)(e,t,i,o,s,void 0,a)}requiresSlot(e,t){switch((0,c.S)(t)){case a.H.Normal:return e===u.r.DRAPED_WATER;case a.H.Color:if(this.parameters.isDraped)return e===u.r.DRAPED_MATERIAL;break;case a.H.Highlight:return e===u.r.OPAQUE_MATERIAL||e===u.r.DRAPED_MATERIAL}let r=u.r.OPAQUE_MATERIAL;return this.parameters.transparent&&(r=this.parameters.writeDepth?u.r.TRANSPARENT_MATERIAL:u.r.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL),e===r}createGLMaterial(e){if(e.output===a.H.Color&&this.parameters.isDraped)return e.output=a.H.Draped,new E(e);switch(e.output){case a.H.Color:case a.H.Normal:case a.H.Highlight:case a.H.Alpha:return new E(e)}return null}createBufferWriter(){return new P.G_(P.W1)}}class H extends d.Mt{constructor(){super(...arguments),this.waveStrength=.06,this.waveTextureRepeat=32,this.waveDirection=(0,o.f)(1,0),this.waveVelocity=.05,this.flowStrength=.015,this.flowOffset=-.5,this.animationSpeed=.35,this.timeElapsed=0,this.color=(0,s.f)(0,0,0,0),this.transparent=!0,this.writeDepth=!0,this.hasSlicePlane=!1,this.isDraped=!1,this.receiveShadows=!0,this.hasScreenSpaceReflections=!1,this.hasCloudsReflections=!1}}const N=35e3},86700:(e,t,r)=>{r.d(t,{Dp:()=>n,z5:()=>a});var i=r(92026);const o={dash:[4,3],dot:[1,3],"long-dash":[8,3],"short-dash":[4,1],"short-dot":[1,1]},s={dash:o.dash,"dash-dot":[...o.dash,...o.dot],dot:o.dot,"long-dash":o["long-dash"],"long-dash-dot":[...o["long-dash"],...o.dot],"long-dash-dot-dot":[...o["long-dash"],...o.dot,...o.dot],none:null,"short-dash":o["short-dash"],"short-dash-dot":[...o["short-dash"],...o["short-dot"]],"short-dash-dot-dot":[...o["short-dash"],...o["short-dot"],...o["short-dot"]],"short-dot":o["short-dot"],solid:null};function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return{pattern:[e,e],pixelRatio:t}}function n(e){return(0,i.pC)(e)&&"style"===e.type?function(e){return(0,i.pC)(e)?function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return(0,i.Wi)(e)?e:{pattern:e.slice(),pixelRatio:t}}(s[e],8):null}(e.style):null}},737:(e,t,r)=>{r.d(t,{G:()=>d,R:()=>i});var i,o,s=r(27366),a=r(71011),n=r(33559),l=r(68401),c=r(8883);(o=i||(i={}))[o.BUTT=0]="BUTT",o[o.SQUARE=1]="SQUARE",o[o.ROUND=2]="ROUND",o[o.COUNT=3]="COUNT";class d extends c.W{constructor(){super(...arguments),this.output=a.H.Color,this.capType=i.BUTT,this.transparencyPassType=l.Am.NONE,this.occluder=!1,this.hasSlicePlane=!1,this.hasPolygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stippleScaleWithLineWidth=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.cullAboveGround=!1,this.wireframe=!1}}(0,s._)([(0,n.o)({count:a.H.COUNT})],d.prototype,"output",void 0),(0,s._)([(0,n.o)({count:i.COUNT})],d.prototype,"capType",void 0),(0,s._)([(0,n.o)({count:l.Am.COUNT})],d.prototype,"transparencyPassType",void 0),(0,s._)([(0,n.o)()],d.prototype,"occluder",void 0),(0,s._)([(0,n.o)()],d.prototype,"hasSlicePlane",void 0),(0,s._)([(0,n.o)()],d.prototype,"hasPolygonOffset",void 0),(0,s._)([(0,n.o)()],d.prototype,"writeDepth",void 0),(0,s._)([(0,n.o)()],d.prototype,"draped",void 0),(0,s._)([(0,n.o)()],d.prototype,"stippleEnabled",void 0),(0,s._)([(0,n.o)()],d.prototype,"stippleOffColorEnabled",void 0),(0,s._)([(0,n.o)()],d.prototype,"stippleScaleWithLineWidth",void 0),(0,s._)([(0,n.o)()],d.prototype,"stipplePreferContinuous",void 0),(0,s._)([(0,n.o)()],d.prototype,"roundJoins",void 0),(0,s._)([(0,n.o)()],d.prototype,"vvSize",void 0),(0,s._)([(0,n.o)()],d.prototype,"vvColor",void 0),(0,s._)([(0,n.o)()],d.prototype,"vvOpacity",void 0),(0,s._)([(0,n.o)()],d.prototype,"falloffEnabled",void 0),(0,s._)([(0,n.o)()],d.prototype,"innerColorEnabled",void 0),(0,s._)([(0,n.o)()],d.prototype,"hasOccludees",void 0),(0,s._)([(0,n.o)()],d.prototype,"hasMultipassTerrain",void 0),(0,s._)([(0,n.o)()],d.prototype,"cullAboveGround",void 0),(0,s._)([(0,n.o)()],d.prototype,"wireframe",void 0),(0,s._)([(0,n.o)({constValue:!0})],d.prototype,"stippleRequiresClamp",void 0),(0,s._)([(0,n.o)({constValue:!0})],d.prototype,"stippleRequiresStretchMeasure",void 0),(0,s._)([(0,n.o)({constValue:!0})],d.prototype,"hasVvInstancing",void 0),(0,s._)([(0,n.o)({constValue:!0})],d.prototype,"hasSliceTranslatedView",void 0)}}]);
//# sourceMappingURL=1859.d444f47a.chunk.js.map