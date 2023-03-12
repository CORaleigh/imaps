import{fN as T,J as R,a8 as Le,ac as Ce,fj as Ae,fw as ke,aC as K,gL as ie,cG as J,gM as $e,gN as oe,gO as Ge,gP as He,eS as qe,fv as We,at as N,gQ as Ve,bV as le,gR as je,gK as Xe,aw as Ye,Q as de,gS as Ke,ds as Je,gT as Qe,ae as Ze,a5 as ue,gU as et,_ as he,x as tt,a7 as it,a6 as rt,z as Q,D as st,d9 as _e,cm as nt,ag as ce,gV as at}from"./index-53e0d3f6.js";import{o as ot}from"./CIMResourceManager-fefae8ea.js";import{t as lt,i as dt,o as pe,h as fe,r as ut}from"./Container-6758166c.js";import{n as ht}from"./BufferPool-1ea0578b.js";import{T as C,E as q,S as Z}from"./color-a26486c1.js";import{t as _t,n as H,a as j,w as z,m as ct}from"./WGLContainer-47331323.js";import{L as M}from"./enums-fb086c25.js";import{e as pt,a as Y}from"./ProgramTemplate-bc90f24c.js";import{n as G}from"./programUtils-b4870cc9.js";import{e as me,r as ft,t as mt,a as gt,_ as vt,J as bt,i as Tt,b as xt,c as Et}from"./MagnifierPrograms-8f55a42e.js";import{u as Xr,y as Yr}from"./MagnifierPrograms-8f55a42e.js";import{f as re,E as se,x as A,s as wt}from"./VertexArrayObject-d229d289.js";import{R as m,E as V,F as ne,O as ee,I as De,L as x,C as ge,M as O,P as p,G as w,D as P,Y as D,V as U,B as yt}from"./enums-64ab819c.js";import{o as ve,I as Bt}from"./RenderingContext-d210d725.js";import{b as Rt,x as Ft,N as Ot,B as Pt,C as Mt,I as W,J as St,Y as Ue,O as be}from"./definitions-19bfb61c.js";import{t as Te}from"./VertexElementDescriptor-2925c6af.js";import{E as $}from"./Texture-0787b5b8.js";import{e as Ct}from"./imageUtils-c2d0d1ae.js";import{a as Jr}from"./GraphicsView2D-c5f7d961.js";import{i as Zr}from"./GraphicContainer-0e6293c0.js";import{t as xe}from"./requestImageUtils-0386f73f.js";import"./Rasterizer-199b3cee.js";import"./_commonjsHelpers-2f3e7994.js";import"./cimAnalyzer-bc62adbc.js";import"./fontUtils-392db818.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./enums-55085e26.js";import"./alignmentUtils-ae955d28.js";import"./number-b10bd8f5.js";import"./Rect-ea14f53a.js";import"./callExpressionWithFeature-5b2ef4d9.js";import"./floatRGBA-f56adbe1.js";import"./rasterizingUtils-7a6b2ca5.js";import"./imageutils-c7802d09.js";import"./EffectView-177ddace.js";import"./vec4f32-0d1b2306.js";import"./MaterialKey-aee17a8e.js";import"./utils-d7171c49.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./earcut-61f7b102.js";import"./NestedMap-1b5db22e.js";import"./Matcher-f23bfff4.js";import"./visualVariablesUtils-495f50e0.js";import"./visualVariablesUtils-526b9396.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-277947c4.js";import"./ExpandedCIM-c1f0510d.js";import"./CircularArray-f7aaa07b.js";import"./webgl-debug-b1f7a2c5.js";import"./ComputedAttributeStorage-93756769.js";import"./arcadeTimeUtils-dafca27f.js";import"./centroid-79a75429.js";import"./OrderIndependentTransparency-92d1201d.js";import"./basicInterfaces-04e01328.js";import"./doublePrecisionUtils-e3c3d0d8.js";import"./normalizeUtilsSync-b5fa3ed8.js";import"./AttributeStoreView-1d5256f1.js";import"./TiledDisplayObject-5a95e98b.js";import"./schemaUtils-a6c0b877.js";import"./util-e8187798.js";import"./BaseGraphicContainer-51fd1ba2.js";import"./FeatureContainer-aa704063.js";import"./TileContainer-3004590a.js";import"./vec3f32-ad1dc57f.js";const At={background:{"background.frag":`#ifdef PATTERN
uniform lowp float u_opacity;
uniform lowp sampler2D u_texture;
varying mediump vec4 v_tlbr;
varying mediump vec2 v_tileTextureCoord;
#else
uniform lowp vec4 u_color;
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
void main() {
#ifdef PATTERN
mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
gl_FragColor = u_opacity * color;
#else
gl_FragColor = u_color;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"background.vert":`precision mediump float;
attribute vec2 a_pos;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform mediump float u_coord_range;
uniform mediump float u_depth;
#ifdef PATTERN
uniform mediump mat3 u_pattern_matrix;
varying mediump vec2 v_tileTextureCoord;
uniform mediump vec4 u_tlbr;
uniform mediump vec2 u_mosaicSize;
varying mediump vec4 v_tlbr;
#endif
void main() {
gl_Position = vec4((u_dvsMat3 * vec3(u_coord_range * a_pos, 1.0)).xy, u_depth, 1.0);
#ifdef PATTERN
v_tileTextureCoord = (u_pattern_matrix * vec3(a_pos, 1.0)).xy;
v_tlbr             = u_tlbr / u_mosaicSize.xyxy;
#endif
#ifdef ID
v_id = u_id / 255.0;
#endif
}`},circle:{"circle.frag":`precision lowp float;
varying lowp vec4 v_color;
varying lowp vec4 v_stroke_color;
varying mediump float v_blur;
varying mediump float v_stroke_width;
varying mediump float v_radius;
varying mediump vec2 v_offset;
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
mediump float dist = length(v_offset);
mediump float alpha = smoothstep(0.0, -v_blur, dist - 1.0);
lowp float color_mix_ratio = v_stroke_width < 0.01 ? 0.0 : smoothstep(-v_blur, 0.0, dist - v_radius / (v_radius + v_stroke_width));
gl_FragColor = alpha * mix(v_color, v_stroke_color, color_mix_ratio);
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"circle.vert":`precision mediump float;
attribute vec2 a_pos;
#pragma header
varying lowp vec4 v_color;
varying lowp vec4 v_stroke_color;
varying mediump float v_blur;
varying mediump float v_stroke_width;
varying mediump float v_radius;
varying mediump vec2 v_offset;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump vec2 u_circleTranslation;
uniform mediump float u_depth;
uniform mediump float u_antialiasingWidth;
void main()
{
#pragma main
v_color = color * opacity;
v_stroke_color = stroke_color * stroke_opacity;
v_stroke_width = stroke_width;
v_radius = radius;
v_blur = max(blur, u_antialiasingWidth / (radius + stroke_width));
mediump vec2 offset = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);
v_offset = offset;
#ifdef ID
v_id = u_id / 255.0;
#endif
mediump vec3 pos = u_dvsMat3 * vec3(a_pos * 0.5, 1.0) + u_displayMat3 * vec3((v_radius + v_stroke_width) * offset + u_circleTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},fill:{"fill.frag":`precision lowp float;
#ifdef PATTERN
uniform lowp sampler2D u_texture;
varying mediump vec2 v_tileTextureCoord;
varying mediump vec4 v_tlbr;
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
vec4 mixColors(vec4 color1, vec4 color2) {
float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);
vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);
return vec4(compositeColor, compositeAlpha);
}
void main()
{
#ifdef PATTERN
mediump vec2 normalizedTextureCoord = fract(v_tileTextureCoord);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
gl_FragColor = v_color[3] * color;
#else
gl_FragColor = v_color;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"fill.vert":`precision mediump float;
attribute vec2 a_pos;
#pragma header
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump float u_depth;
uniform mediump vec2 u_fillTranslation;
#ifdef PATTERN
#include <util/util.glsl>
uniform mediump vec2 u_mosaicSize;
uniform mediump float u_patternFactor;
varying mediump vec2 v_tileTextureCoord;
varying mediump vec4 v_tlbr;
#endif
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
void main()
{
#pragma main
v_color = color * opacity;
#ifdef ID
v_id = u_id / 255.0;
#endif
#ifdef PATTERN
float patternWidth = nextPOT(tlbr.z - tlbr.x);
float patternHeight = nextPOT(tlbr.w - tlbr.y);
float scaleX = 1.0 / (patternWidth * u_patternFactor);
float scaleY = 1.0 / (patternHeight * u_patternFactor);
mat3 patterMat = mat3(scaleX, 0.0,    0.0,
0.0,    -scaleY, 0.0,
0.0,    0.0,    1.0);
v_tileTextureCoord = (patterMat * vec3(a_pos, 1.0)).xy;
v_tlbr             = tlbr / u_mosaicSize.xyxy;
#endif
vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(u_fillTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},icon:{"icon.frag":`precision mediump float;
uniform lowp sampler2D u_texture;
#ifdef SDF
uniform lowp vec4 u_color;
uniform lowp vec4 u_outlineColor;
#endif
varying mediump vec2 v_tex;
varying lowp float v_opacity;
varying mediump vec2 v_size;
varying lowp vec4 v_color;
#ifdef SDF
varying mediump flaot v_halo_width;
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
#include <util/encoding.glsl>
vec4 mixColors(vec4 color1, vec4 color2) {
float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);
vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);
return vec4(compositeColor, compositeAlpha);
}
void main()
{
#ifdef SDF
lowp vec4 fillPixelColor = v_color;
float d = rgba2float(texture2D(u_texture, v_tex)) - 0.5;
const float softEdgeRatio = 0.248062016;
float size = max(v_size.x, v_size.y);
float dist = d * softEdgeRatio * size;
fillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);
if (v_halo_width > 0.25) {
lowp vec4 outlinePixelColor = u_outlineColor;
const float outlineLimitRatio = (16.0 / 86.0);
float clampedOutlineSize = softEdgeRatio * min(v_halo_width, outlineLimitRatio * max(v_size.x, v_size.y));
outlinePixelColor *= clamp(0.5 - (abs(dist) - clampedOutlineSize), 0.0, 1.0);
gl_FragColor = v_opacity * mixColors(fillPixelColor, outlinePixelColor);
}
else {
gl_FragColor = v_opacity * fillPixelColor;
}
#else
lowp vec4 texColor = texture2D(u_texture, v_tex);
gl_FragColor = v_opacity * texColor;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"icon.vert":`attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_texAngleRange;
attribute vec4 a_levelInfo;
attribute float a_opacityInfo;
#pragma header
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
#ifdef SDF
varying mediump float v_halo_width;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump vec2 u_iconTranslation;
uniform vec2 u_mosaicSize;
uniform mediump float u_depth;
uniform mediump float u_mapRotation;
uniform mediump float u_level;
uniform lowp float u_keepUpright;
uniform mediump float u_fadeDuration;
varying mediump vec2 v_tex;
varying lowp float v_opacity;
varying mediump vec2 v_size;
const float C_OFFSET_PRECISION = 1.0 / 8.0;
const float C_256_TO_RAD = 3.14159265359 / 128.0;
const float C_DEG_TO_RAD = 3.14159265359 / 180.0;
const float tileCoordRatio = 1.0 / 8.0;
uniform highp float u_time;
void main()
{
#pragma main
v_color = color;
v_opacity = opacity;
#ifdef SDF
v_halo_width = halo_width;
#endif
float modded = mod(a_opacityInfo, 128.0);
float targetOpacity = (a_opacityInfo - modded) / 128.0;
float startOpacity = modded / 127.0;
float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);
v_opacity *= interpolatedOpacity;
mediump float a_angle         = a_levelInfo[1];
mediump float a_minLevel      = a_levelInfo[2];
mediump float a_maxLevel      = a_levelInfo[3];
mediump vec2 a_tex            = a_texAngleRange.xy;
mediump float delta_z = 0.0;
mediump float rotated = mod(a_angle + u_mapRotation, 256.0);
delta_z += (1.0 - step(u_keepUpright, 0.0)) * step(64.0, rotated) * (1.0 - step(192.0, rotated));
delta_z += 1.0 - step(a_minLevel, u_level);
delta_z += step(a_maxLevel, u_level);
delta_z += step(v_opacity, 0.0);
vec2 offset = C_OFFSET_PRECISION * a_vertexOffset;
v_size = abs(offset);
#ifdef SDF
offset = (120.0 / 86.0) * offset;
#endif
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayViewMat3 * vec3(size * offset, 0.0) + u_displayMat3 * vec3(u_iconTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);
#ifdef ID
v_id = u_id / 255.0;
#endif
v_tex = a_tex.xy / u_mosaicSize;
}`},line:{"line.frag":`precision lowp float;
varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;
varying mediump float v_lineHalfWidth;
varying lowp vec4 v_color;
varying mediump float v_blur;
#if defined (PATTERN) || defined(SDF)
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
varying mediump float v_widthRatio;
uniform sampler2D u_texture;
uniform mediump float u_antialiasing;
#endif
#ifdef SDF
#include <util/encoding.glsl>
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
mediump float fragDist = length(v_normal) * v_lineHalfWidth;
lowp float alpha = clamp((v_lineHalfWidth - fragDist) / v_blur, 0.0, 1.0);
#ifdef PATTERN
mediump float relativeTexX = fract(v_accumulatedDistance / (v_patternSize.x * v_widthRatio));
mediump float relativeTexY = 0.5 + v_normal.y * v_lineHalfWidth / (v_patternSize.y * v_widthRatio);
mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));
lowp vec4 color = texture2D(u_texture, texCoord);
gl_FragColor = alpha * v_color[3] * color;
#elif defined(SDF)
mediump float relativeTexX = fract((v_accumulatedDistance * 0.5) / (v_patternSize.x * v_widthRatio));
mediump float relativeTexY =  0.5 + 0.25 * v_normal.y;
mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));
mediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;
float dist = d * (v_lineHalfWidth + u_antialiasing / 2.0);
gl_FragColor = alpha * clamp(0.5 - dist, 0.0, 1.0) * v_color;
#else
gl_FragColor = alpha * v_color;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"line.vert":`precision mediump float;
attribute vec2 a_pos;
attribute vec4 a_extrude_offset;
attribute vec4 a_dir_normal;
attribute vec2 a_accumulatedDistance;
#pragma header
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump float u_zoomFactor;
uniform mediump vec2 u_lineTranslation;
uniform mediump float u_antialiasing;
uniform mediump float u_depth;
varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;
const float scale = 1.0 / 31.0;
const mediump float tileCoordRatio = 8.0;
#if defined (SDF)
const mediump float sdfPatternHalfWidth = 15.5;
#endif
#if defined (PATTERN) || defined(SDF)
uniform mediump vec2 u_mosaicSize;
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
varying mediump float v_widthRatio;
#endif
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
varying mediump float v_lineHalfWidth;
varying mediump float v_blur;
void main()
{
#pragma main
v_color = color * opacity;
v_blur = blur + u_antialiasing;
v_normal = a_dir_normal.zw * scale;
#if defined (PATTERN) || defined(SDF)
v_tlbr          = tlbr / u_mosaicSize.xyxy;
v_patternSize   = vec2(tlbr.z - tlbr.x, tlbr.y - tlbr.w);
#if defined (PATTERN)
v_widthRatio = width / v_patternSize.y;
#else
v_widthRatio = width / sdfPatternHalfWidth / 2.0;
#endif
#endif
v_lineHalfWidth = (width + u_antialiasing) * 0.5;
mediump vec2 dir = a_dir_normal.xy * scale;
mediump vec2 offset_ = a_extrude_offset.zw * scale * offset;
mediump vec2 dist = v_lineHalfWidth * scale * a_extrude_offset.xy;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos + offset_ * tileCoordRatio / u_zoomFactor, 1.0) + u_displayViewMat3 * vec3(dist, 0.0) + u_displayMat3 * vec3(u_lineTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
#if defined (PATTERN) || defined(SDF)
v_accumulatedDistance = a_accumulatedDistance.x * u_zoomFactor / tileCoordRatio + dot(dir, dist + offset_);
#endif
#ifdef ID
v_id = u_id / 255.0;
#endif
}`},outline:{"outline.frag":`varying lowp vec4 v_color;
varying mediump vec2 v_normal;
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
lowp float dist = abs(v_normal.y);
lowp float alpha = smoothstep(1.0, 0.0, dist);
gl_FragColor = alpha * v_color;
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"outline.vert":`attribute vec2 a_pos;
attribute vec2 a_offset;
attribute vec2 a_xnormal;
#pragma header
varying lowp vec4 v_color;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump vec2 u_fillTranslation;
uniform mediump float u_depth;
uniform mediump float u_outline_width;
varying lowp vec2 v_normal;
const float scale = 1.0 / 15.0;
void main()
{
#pragma main
v_color = color * opacity;
#ifdef ID
v_id = u_id / 255.0;
#endif
v_normal = a_xnormal;
mediump vec2 dist = u_outline_width * scale * a_offset;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(dist + u_fillTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},text:{"text.frag":`uniform lowp sampler2D u_texture;
varying lowp vec2 v_tex;
varying lowp vec4 v_color;
varying mediump float v_edgeWidth;
varying mediump float v_edgeDistance;
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
lowp float dist = texture2D(u_texture, v_tex).a;
mediump float alpha = smoothstep(v_edgeDistance - v_edgeWidth, v_edgeDistance + v_edgeWidth, dist);
gl_FragColor = alpha * v_color;
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"text.vert":`attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_texAngleRange;
attribute vec4 a_levelInfo;
attribute float a_opacityInfo;
#pragma header
varying lowp vec4 v_color;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump vec2 u_textTranslation;
uniform vec2 u_mosaicSize;
uniform mediump float u_depth;
uniform mediump float u_mapRotation;
uniform mediump float u_level;
uniform lowp float u_keepUpright;
uniform mediump float u_fadeDuration;
varying lowp vec2 v_tex;
const float offsetPrecision = 1.0 / 8.0;
const mediump float edgePos = 0.75;
uniform mediump float u_antialiasingWidth;
varying mediump float v_edgeDistance;
varying mediump float v_edgeWidth;
uniform lowp float u_halo;
const float sdfFontScale = 1.0 / 24.0;
const float sdfPixel = 3.0;
uniform highp float u_time;
void main()
{
#pragma main
if (u_halo > 0.5)
{
v_color = halo_color * opacity;
halo_width *= sdfPixel;
halo_blur *= sdfPixel;
}
else
{
v_color = color * opacity;
halo_width = 0.0;
halo_blur = 0.0;
}
float modded = mod(a_opacityInfo, 128.0);
float targetOpacity = (a_opacityInfo - modded) / 128.0;
float startOpacity = modded / 127.0;
float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);
v_color *= interpolatedOpacity;
mediump float a_angle       = a_levelInfo[1];
mediump float a_minLevel    = a_levelInfo[2];
mediump float a_maxLevel    = a_levelInfo[3];
mediump vec2 a_tex          = a_texAngleRange.xy;
mediump float a_visMinAngle    = a_texAngleRange.z;
mediump float a_visMaxAngle    = a_texAngleRange.w;
mediump float delta_z = 0.0;
mediump float angle = mod(a_angle + u_mapRotation, 256.0);
if (a_visMinAngle < a_visMaxAngle)
{
delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) + (1.0 - step(a_visMinAngle, angle)));
}
else
{
delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) * (1.0 - step(a_visMinAngle, angle)));
}
delta_z += 1.0 - step(a_minLevel, u_level);
delta_z += step(a_maxLevel, u_level);
delta_z += step(v_color[3], 0.0);
v_tex = a_tex.xy / u_mosaicSize;
#ifdef ID
v_id = u_id / 255.0;
#endif
v_edgeDistance = edgePos - halo_width / size;
v_edgeWidth = (u_antialiasingWidth + halo_blur) / size;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + sdfFontScale * u_displayViewMat3 * vec3(offsetPrecision * size * a_vertexOffset, 0.0) + u_displayMat3 * vec3(u_textTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);
}`},util:{"encoding.glsl":`const vec4 rgba2float_factors = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, rgba2float_factors);
}`,"util.glsl":`float nextPOT(in float x) {
return pow(2.0, ceil(log2(abs(x))));
}`}};function Dt(o){let e=At;return o.split("/").forEach(t=>{e&&(e=e[t])}),e}const Ut=new pt(Dt);function S(o){return Ut.resolveIncludes(o)}const Ee=o=>G({ID:o.id,PATTERN:o.pattern}),It={shaders:o=>({vertexShader:Ee(o)+S("background/background.vert"),fragmentShader:Ee(o)+S("background/background.frag")})},we=o=>G({ID:o.id}),zt={shaders:o=>({vertexShader:we(o)+S("circle/circle.vert"),fragmentShader:we(o)+S("circle/circle.frag")})},ye=o=>G({ID:o.id,PATTERN:o.pattern}),Nt={shaders:o=>({vertexShader:ye(o)+S("fill/fill.vert"),fragmentShader:ye(o)+S("fill/fill.frag")})},Be=o=>G({ID:o.id}),Lt={shaders:o=>({vertexShader:Be(o)+S("outline/outline.vert"),fragmentShader:Be(o)+S("outline/outline.frag")})},Re=o=>G({ID:o.id,SDF:o.sdf}),kt={shaders:o=>({vertexShader:Re(o)+S("icon/icon.vert"),fragmentShader:Re(o)+S("icon/icon.frag")})},Fe=o=>G({ID:o.id,PATTERN:o.pattern,SDF:o.sdf}),$t={shaders:o=>({vertexShader:Fe(o)+S("line/line.vert"),fragmentShader:Fe(o)+S("line/line.frag")})},Oe=o=>G({ID:o.id}),Gt={shaders:o=>({vertexShader:Oe(o)+S("text/text.vert"),fragmentShader:Oe(o)+S("text/text.frag")})};let Ht=class{constructor(){this._programByKey=new Map}dispose(){this._programByKey.forEach(e=>e.dispose()),this._programByKey.clear()}getMaterialProgram(e,t,i){const r=t.key<<3|this._getMaterialOptionsValue(t.type,i);if(this._programByKey.has(r))return this._programByKey.get(r);const n=this._getProgramTemplate(t.type),{shaders:s}=n,{vertexShader:a,fragmentShader:l}=s(i),u=t.getShaderHeader(),d=t.getShaderMain(),_=a.replace("#pragma header",u).replace("#pragma main",d),c=e.programCache.acquire(_,l,t.getAttributeLocations());return this._programByKey.set(r,c),c}_getMaterialOptionsValue(e,t){switch(e){case M.BACKGROUND:{const i=t;return(i.pattern?1:0)<<1|(i.id?1:0)}case M.FILL:{const i=t;return(i.pattern?1:0)<<1|(i.id?1:0)}case M.OUTLINE:return t.id?1:0;case M.LINE:{const i=t;return(i.sdf?1:0)<<2|(i.pattern?1:0)<<1|(i.id?1:0)}case M.ICON:{const i=t;return(i.sdf?1:0)<<1|(i.id?1:0)}case M.CIRCLE:return t.id?1:0;case M.TEXT:return t.id?1:0;default:return 0}}_getProgramTemplate(e){switch(e){case M.BACKGROUND:return It;case M.CIRCLE:return zt;case M.FILL:return Nt;case M.ICON:return kt;case M.LINE:return $t;case M.OUTLINE:return Lt;case M.TEXT:return Gt;default:return null}}},Ie=class{constructor(){this._initialized=!1}dispose(){this._program=T(this._program),this._vertexArrayObject=T(this._vertexArrayObject)}render(e,t,i,r){e&&(this._initialized||this._initialize(e),e.setBlendFunctionSeparate(m.ONE,m.ONE_MINUS_SRC_ALPHA,m.ONE,m.ONE_MINUS_SRC_ALPHA),e.bindVAO(this._vertexArrayObject),e.useProgram(this._program),t.setSamplingMode(i),e.bindTexture(t,0),this._program.setUniform1i("u_tex",0),this._program.setUniform1f("u_opacity",r),e.drawArrays(V.TRIANGLE_STRIP,0,4),e.bindTexture(null,0),e.bindVAO())}_initialize(e){if(this._initialized)return!0;const t=Y(e,me);if(!t)return!1;const i=new Int8Array(16);i[0]=-1,i[1]=-1,i[2]=0,i[3]=0,i[4]=1,i[5]=-1,i[6]=1,i[7]=0,i[8]=-1,i[9]=1,i[10]=0,i[11]=1,i[12]=1,i[13]=1,i[14]=1,i[15]=1;const r=me.attributes,n=new re(e,r,_t,{geometry:se.createVertex(e,ne.STATIC_DRAW,i)});return this._program=t,this._vertexArrayObject=n,this._initialized=!0,!0}};const ze=o=>o===C.HITTEST||o===C.LABEL_ALPHA,qt=o=>(ze(o)?1:0)|(o===C.HIGHLIGHT?2:0),Wt=({rendererInfo:o,drawPhase:e},t,i)=>`${t.getVariationHash()}-${qt(e)}-${o.getVariationHash()}-${R(i)&&i.join(".")}`,Vt=(o,e,t,i={})=>{if(i={...i,...e.getVariation(),...o.rendererInfo.getVariation(),highlight:o.drawPhase===C.HIGHLIGHT,id:ze(o.drawPhase)},R(t))for(const r of t)i[r]=!0;return i};let jt=class{constructor(e){this._rctx=e,this._programByKey=new Map}dispose(){this._programByKey.forEach(e=>e.dispose()),this._programByKey.clear()}getProgram(e,t=[]){const i=e.vsPath+"."+e.fsPath+JSON.stringify(t);if(this._programByKey.has(i))return this._programByKey.get(i);const r={...t.map(d=>typeof d=="string"?{name:d,value:!0}:d).reduce((d,_)=>({...d,[_.name]:_.value}),{})},{vsPath:n,fsPath:s,attributes:a}=e,l=ve(n,s,a,r),u=this._rctx.programCache.acquire(l.shaders.vertexShader,l.shaders.fragmentShader,l.attributes);if(!u)throw new Error("Unable to get program for key: ${key}");return this._programByKey.set(i,u),u}getMaterialProgram(e,t,i,r,n){const s=Wt(e,t,n);if(this._programByKey.has(s))return this._programByKey.get(s);const a=Vt(e,t,n,{ignoresSamplerPrecision:e.context.driverTest.ignoresSamplerPrecision.result}),l=ve(i,i,r,a),u=this._rctx.programCache.acquire(l.shaders.vertexShader,l.shaders.fragmentShader,l.attributes);if(!u)throw new Error("Unable to get program for key: ${key}");return this._programByKey.set(s,u),u}},Xt=class{constructor(e,t){this._queue=[],this._context=e,this._refreshable=t}destroy(){this._queue=[]}enqueueTextureUpdate(e,t){const i=Le(),r=e,n=Ft,s=Math.ceil(r.height/n);if(Ce(t),this._context.type===Ae.WEBGL1)this._queue.push({type:"no-chunk",request:e,resolver:i,options:t});else for(let a=0;a<s;a++){const l=a*n,u=a===s-1,d=u?r.height-n*a:n;this._queue.push({type:"chunk",request:e,resolver:i,chunk:a,chunkOffset:l,destHeight:d,chunkIsLast:u,options:t})}return ke(t,a=>i.reject(a)),i.promise}upload(){let e=0;for(;this._queue.length;){const t=performance.now(),i=this._queue.shift();if(i){if(R(i.options.signal)&&i.options.signal.aborted)continue;switch(i.type){case"chunk":this._uploadChunk(i);break;case"no-chunk":this._uploadNoChunk(i)}const r=performance.now()-t;if(e+=r,e+r>=Rt)break}}this._queue.length&&this._refreshable.requestRender()}_uploadChunk(e){const{request:t,resolver:i,chunkOffset:r,chunkIsLast:n,destHeight:s}=e,{data:a,texture:l,width:u}=t;R(a)&&(l.updateData(0,0,r,u,s,a,r),n&&i.resolve())}_uploadNoChunk(e){const{request:t,resolver:i}=e,{data:r,texture:n}=t;n.setData(r),i.resolve()}};const Yt=qe(-.5,-.5);let Kt=class{constructor(){this._centerNdc=K(),this._pxToNdc=K(),this._worldDimensionsPx=K(),this._mat3=ie(),this._initialized=!1}dispose(){this._program=T(this._program),this._quad=T(this._quad)}render(e,t){const{context:i}=e;return!!this._updateGeometry(e,t)&&(this._initialized||this._initialize(i),i.setDepthWriteEnabled(!1),i.setDepthTestEnabled(!1),i.setColorMask(!1,!1,!1,!1),i.setBlendingEnabled(!1),i.setStencilOp(ee.KEEP,ee.KEEP,ee.REPLACE),i.setStencilFunction(De.ALWAYS,1,255),i.setStencilTestEnabled(!0),i.useProgram(this._program),this._program.setUniformMatrix3fv("u_worldExtent",this._mat3),this._quad.draw(),this._quad.unbind(),!0)}_initialize(e){if(this._initialized)return;const t=Y(e,ft);t&&(this._program=t,this._quad=new H(e,[0,0,1,0,0,1,1,1]),this._initialized=!0)}_updateGeometry(e,t){const{state:i,pixelRatio:r}=e,{size:n,rotation:s}=i,a=Math.round(n[0]*r),l=Math.round(n[1]*r);if(!i.spatialReference.isWrappable)return!1;const u=We(s),d=Math.abs(Math.cos(u)),_=Math.abs(Math.sin(u)),c=Math.round(a*d+l*_),f=Math.round(i.worldScreenWidth);if(c<=f)return!1;const g=a*_+l*d,b=f*r,y=(t.left-t.right)*r/a,v=(t.bottom-t.top)*r/l;J(this._worldDimensionsPx,b,g,1),J(this._pxToNdc,2/a,-2/l,1),J(this._centerNdc,y,v,1);const h=this._mat3;return $e(h,this._centerNdc),oe(h,h,this._pxToNdc),s!==0&&Ge(h,h,u),oe(h,h,this._worldDimensionsPx),He(h,h,Yt),!0}},Jt=class extends j{constructor(){super(...arguments),this.defines=[],this._desc={vsPath:"fx/integrate",fsPath:"fx/integrate",attributes:new Map([["a_position",0]])}}dispose(){this._quad&&this._quad.dispose()}bind(){}unbind(){}draw(e,t){if(!(t!=null&&t.size))return;const{context:i,renderingOptions:r}=e;this._quad||(this._quad=new H(i,[0,0,1,0,0,1,1,1]));const n=i.getBoundFramebufferObject(),{x:s,y:a,width:l,height:u}=i.getViewport();t.bindTextures(i);const d=t.getBlock(Ot);if(N(d))return;const _=d.getFBO(i),c=d.getFBO(i,1);i.setViewport(0,0,t.size,t.size),this._computeDelta(e,c,r.labelsAnimationTime),this._updateAnimationState(e,c,_),i.bindFramebuffer(n),i.setViewport(s,a,l,u)}_computeDelta(e,t,i){const{context:r,painter:n,displayLevel:s}=e,a=n.materialManager.getProgram(this._desc,["delta"]);r.bindFramebuffer(t),r.setClearColor(0,0,0,0),r.clear(r.gl.COLOR_BUFFER_BIT),r.useProgram(a),a.setUniform1i("u_maskTexture",Pt),a.setUniform1i("u_sourceTexture",Mt),a.setUniform1f("u_timeDelta",e.deltaTime),a.setUniform1f("u_animationTime",i),a.setUniform1f("u_zoomLevel",Math.round(10*s)),this._quad.draw()}_updateAnimationState(e,t,i){const{context:r,painter:n}=e,s=n.materialManager.getProgram(this._desc,["update"]);r.bindTexture(t.colorTexture,1),r.useProgram(s),s.setUniform1i("u_sourceTexture",1),r.bindFramebuffer(i),r.setClearColor(0,0,0,0),r.clear(r.gl.COLOR_BUFFER_BIT),this._quad.draw()}};class Pe extends j{constructor(e){super(),this.name=this.constructor.name,this.defines=[e]}dispose(){}bind({context:e,painter:t}){this._prev=e.getBoundFramebufferObject();const{width:i,height:r}=e.getViewport(),n=t.getFbos(i,r).effect0;e.bindFramebuffer(n),e.setColorMask(!0,!0,!0,!0),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT)}unbind(){}draw(e,t){const{context:i,painter:r}=e,n=r.getPostProcessingEffects(t),s=i.getBoundFramebufferObject();for(const{postProcessingEffect:a,effect:l}of n)a.draw(e,s,l);i.bindFramebuffer(this._prev),i.setStencilTestEnabled(!1),r.blitTexture(i,s.colorTexture,x.NEAREST),i.setStencilTestEnabled(!0)}}let Qt=class{constructor(){this._width=void 0,this._height=void 0,this._resources=null}dispose(){this._resources&&(this._resources.quadGeometry.dispose(),this._resources.quadVAO.dispose(),this._resources.highlightProgram.dispose(),this._resources.blurProgram.dispose(),this._resources=null)}preBlur(e,t){e.bindTexture(t,W),e.useProgram(this._resources.blurProgram),this._resources.blurProgram.setUniform4fv("u_direction",[1,0,1/this._width,0]),this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector",lt),e.bindVAO(this._resources.quadVAO),e.drawArrays(V.TRIANGLE_STRIP,0,4),e.bindVAO()}finalBlur(e,t){e.bindTexture(t,W),e.useProgram(this._resources.blurProgram),this._resources.blurProgram.setUniform4fv("u_direction",[0,1,0,1/this._height]),this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector",dt),e.bindVAO(this._resources.quadVAO),e.drawArrays(V.TRIANGLE_STRIP,0,4),e.bindVAO()}renderHighlight(e,t,i){e.bindTexture(t,W),e.useProgram(this._resources.highlightProgram),i.applyHighlightOptions(e,this._resources.highlightProgram),e.bindVAO(this._resources.quadVAO),e.setBlendingEnabled(!0),e.setBlendFunction(m.ONE,m.ONE_MINUS_SRC_ALPHA),e.drawArrays(V.TRIANGLE_STRIP,0,4),e.bindVAO()}_initialize(e,t,i){this._width=t,this._height=i;const r=se.createVertex(e,ne.STATIC_DRAW,new Int8Array([-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,1,1,1]).buffer),n=new re(e,new Map([["a_position",0],["a_texcoord",1]]),{geometry:[new Te("a_position",2,ge.BYTE,0,4),new Te("a_texcoord",2,ge.UNSIGNED_BYTE,2,4)]},{geometry:r}),s=Y(e,mt),a=Y(e,gt);e.useProgram(s),s.setUniform1i("u_texture",W),s.setUniform1i("u_shade",St),s.setUniform1f("u_sigma",pe),e.useProgram(a),a.setUniform1i("u_texture",W),a.setUniform1f("u_sigma",pe),this._resources={quadGeometry:r,quadVAO:n,highlightProgram:s,blurProgram:a}}setup(e,t,i){this._resources?(this._width=t,this._height=i):this._initialize(e,t,i)}};function Me(o,e,t){const i=new $(o,{target:O.TEXTURE_2D,pixelFormat:p.RGBA,dataType:w.UNSIGNED_BYTE,wrapMode:P.CLAMP_TO_EDGE,width:e,height:t,samplingMode:x.LINEAR});return[i,new A(o,{colorTarget:D.TEXTURE,depthStencilTarget:U.STENCIL_RENDER_BUFFER},i)]}let Zt=class{constructor(){this._width=void 0,this._height=void 0,this._resources=null}dispose(){this._resources&&(this._resources.sharedBlur1Tex.dispose(),this._resources.sharedBlur1Fbo.dispose(),this._resources.sharedBlur2Tex.dispose(),this._resources.sharedBlur2Fbo.dispose(),this._resources=Ve(this._resources))}_initialize(e,t,i){this._width=t,this._height=i;const[r,n]=Me(e,t,i),[s,a]=Me(e,t,i);this._resources={sharedBlur1Tex:r,sharedBlur1Fbo:n,sharedBlur2Tex:s,sharedBlur2Fbo:a}}setup(e,t,i){!this._resources||this._width===t&&this._height===i||this.dispose(),this._resources||this._initialize(e,t,i)}get sharedBlur1Tex(){return this._resources.sharedBlur1Tex}get sharedBlur1Fbo(){return this._resources.sharedBlur1Fbo}get sharedBlur2Tex(){return this._resources.sharedBlur2Tex}get sharedBlur2Fbo(){return this._resources.sharedBlur2Fbo}};const k=4,X=4/k;class ei extends j{constructor(){super(...arguments),this.defines=["highlight"],this._hlRenderer=new Qt,this._width=void 0,this._height=void 0,this._boundFBO=null,this._hlSurfaces=new Zt,this._adjustedWidth=void 0,this._adjustedHeight=void 0,this._blitRenderer=new Ie}dispose(){var e,t;(e=this._hlSurfaces)==null||e.dispose(),(t=this._hlRenderer)==null||t.dispose(),this._boundFBO=null}bind(e){const{context:t,painter:i}=e,{width:r,height:n}=t.getViewport(),s=i.getFbos(r,n).effect0;this.setup(e,r,n),t.bindFramebuffer(s),t.setColorMask(!0,!0,!0,!0),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT)}unbind(){}setup({context:e},t,i){this._width=t,this._height=i;const r=t%k,n=i%k;t+=r<k/2?-r:k-r,i+=n<k/2?-n:k-n,this._adjustedWidth=t,this._adjustedHeight=i,this._boundFBO=e.getBoundFramebufferObject();const s=Math.round(t*X),a=Math.round(i*X);this._hlRenderer.setup(e,s,a),this._hlSurfaces.setup(e,s,a)}draw(e){const{context:t,highlightGradient:i}=e;if(!i)return;const r=t.getBoundFramebufferObject();t.setViewport(0,0,this._adjustedWidth*X,this._adjustedHeight*X),t.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),t.setStencilTestEnabled(!1),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT),this._blitRenderer.render(t,r.colorTexture,x.NEAREST,1),t.setStencilTestEnabled(!1),t.setBlendingEnabled(!1),t.setColorMask(!1,!1,!1,!0),t.bindFramebuffer(this._hlSurfaces.sharedBlur2Fbo),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT),this._hlRenderer.preBlur(t,this._hlSurfaces.sharedBlur1Tex),t.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT),this._hlRenderer.finalBlur(t,this._hlSurfaces.sharedBlur2Tex),t.bindFramebuffer(this._boundFBO),t.setBlendingEnabled(!0),t.setColorMask(!0,!0,!0,!0),t.setViewport(0,0,this._width,this._height),this._hlRenderer.renderHighlight(t,this._hlSurfaces.sharedBlur1Tex,i),this._boundFBO=null}}let ti=class extends j{constructor(){super(...arguments),this.name=this.constructor.name,this.defines=["hittest"]}dispose(){R(this._fbo)&&this._fbo.dispose()}createOptions({pixelRatio:e},t,i=Ue){if(!t.length)return null;const r=t.shift(),n=r.x,s=r.y;return this._outstanding=r,{type:"hittest",distance:i*e,position:[n,s]}}bind(e){const{context:t,attributeView:i}=e;if(!i.size)return;const r=i.getBlock(be);if(N(r))return;const n=r.getFBO(t);t.setViewport(0,0,i.size,i.size),t.bindFramebuffer(n),t.setColorMask(!0,!0,!0,!0),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT|t.gl.DEPTH_BUFFER_BIT)}unbind(e){}draw(e){if(N(this._outstanding))return;const t=this._outstanding;this._outstanding=null,this._resolve(e,t.resolvers)}async _resolve(e,t){const{context:i,attributeView:r}=e,n=r.getBlock(be);if(N(n))return void t.forEach(d=>d.resolve([]));const s=n.getFBO(i),a=new Uint8Array(s.width*s.height*4);try{await s.readPixelsAsync(0,0,s.width,s.height,p.RGBA,w.UNSIGNED_BYTE,a)}catch{return void t.forEach(_=>_.resolve([]))}const l=[];for(let d=0;d<a.length;d+=4){const _=a[d],c=a[d+3];_&&l.push({id:d/4,directHits:c})}l.sort((d,_)=>_.directHits===d.directHits?_.id-d.id:_.directHits-d.directHits);const u=l.map(d=>d.id);t.forEach(d=>d.resolve(u))}},ii=class extends j{constructor(){super(...arguments),this.name=this.constructor.name,this.defines=["id"],this._lastSize=0,this._boundFBO=null}dispose(){R(this._fbo)&&this._fbo.dispose()}bind({context:e,painter:t}){const{width:i,height:r}=e.getViewport();this._boundFBO=e.getBoundFramebufferObject();const n=t.getFbos(i,r).effect0;e.bindFramebuffer(n),e.setColorMask(!0,!0,!0,!0),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT)}unbind({context:e}){e.bindFramebuffer(this._boundFBO),this._boundFBO=null}draw(e,t,i=2*Ue){this._resolve(e,t,i)}async _resolve({context:e,state:t,pixelRatio:i},r,n){const s=e.getBoundFramebufferObject(),a=t.size[1]*i,l=Math.round(n*i),u=l/2,d=l/2;this._ensureBuffer(l),r.forEach(async(_,c)=>{const f=new Map,g=Math.floor(c.x*i-l/2),b=Math.floor(a-c.y*i-l/2);await s.readPixelsAsync(g,b,l,l,p.RGBA,w.UNSIGNED_BYTE,this._buf);for(let v=0;v<this._buf32.length;v++){const h=this._buf32[v];if(h!==4294967295&&h!==0){const I=v%l,E=l-Math.floor(v/l),B=(u-I)*(u-I)+(d-E)*(d-E),F=f.has(h)?f.get(h):4294967295;f.set(h,Math.min(B,F))}}const y=Array.from(f).sort((v,h)=>v[1]-h[1]).map(v=>v[0]);_.resolve(y),r.delete(c)})}_ensureBuffer(e){this._lastSize!==e&&(this._lastSize=e,this._buf=new Uint8Array(4*e*e),this._buf32=new Uint32Array(this._buf.buffer))}};const te=5,ri=[1,0],si=[0,1],ni=[1,.8,.6,.4,.2],ai=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];class oi{constructor(){this._intensityFBO=null,this._compositeFBO=null,this._mipsFBOs=new Array(te),this._nMips=te,this._kernelSizeArray=[3,5,7,9,11],this._size=[0,0],this._programDesc={luminosityHighPass:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/luminosityHighPass",attributes:new Map([["a_position",0]])},gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/gaussianBlur",attributes:new Map([["a_position",0]])},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/composite",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){if(this._quad=T(this._quad),this._intensityFBO=T(this._intensityFBO),this._compositeFBO=T(this._compositeFBO),this._mipsFBOs){for(let e=0;e<this._nMips;e++)this._mipsFBOs[e]&&(this._mipsFBOs[e].horizontal.dispose(),this._mipsFBOs[e].vertical.dispose());this._mipsFBOs=null}}draw(e,t,i){const{width:r,height:n}=t,{context:s,painter:a}=e,{materialManager:l}=a,u=s.gl,d=this._programDesc,{strength:_,radius:c,threshold:f}=i;this._quad||(this._quad=new H(s,[-1,-1,1,-1,-1,1,1,1])),this._createOrResizeResources(e,r,n),s.setStencilTestEnabled(!1),s.setBlendingEnabled(!0),s.setBlendFunction(m.ONE,m.ONE_MINUS_SRC_ALPHA),s.setStencilWriteMask(0);const g=this._quad;g.bind(),s.bindFramebuffer(this._intensityFBO);const b=l.getProgram(d.luminosityHighPass);s.useProgram(b),s.bindTexture(t.colorTexture,0),b.setUniform1i("u_texture",0),b.setUniform3fv("u_defaultColor",[0,0,0]),b.setUniform1f("u_defaultOpacity",0),b.setUniform1f("u_luminosityThreshold",f),b.setUniform1f("u_smoothWidth",.01);const y=[Math.round(r/2),Math.round(n/2)];s.setViewport(0,0,y[0],y[1]),s.setClearColor(0,0,0,0),s.clear(u.COLOR_BUFFER_BIT),g.draw(),s.setBlendingEnabled(!1);let v=this._intensityFBO.colorTexture;for(let E=0;E<this._nMips;E++){const B=l.getProgram(d.gaussianBlur,[{name:"radius",value:this._kernelSizeArray[E]}]);s.useProgram(B),s.bindTexture(v,E+1),B.setUniform1i("u_colorTexture",E+1),B.setUniform2fv("u_texSize",y),B.setUniform2fv("u_direction",ri),s.setViewport(0,0,y[0],y[1]);const F=this._mipsFBOs[E];s.bindFramebuffer(F.horizontal),g.draw(),v=F.horizontal.colorTexture,s.bindFramebuffer(F.vertical),s.bindTexture(v,E+1),B.setUniform2fv("u_direction",si),g.draw(),v=F.vertical.colorTexture,y[0]=Math.round(y[0]/2),y[1]=Math.round(y[1]/2)}s.setViewport(0,0,r,n);const h=l.getProgram(d.composite,[{name:"nummips",value:te}]);s.bindFramebuffer(this._compositeFBO),s.useProgram(h),h.setUniform1f("u_bloomStrength",_),h.setUniform1f("u_bloomRadius",c),h.setUniform1fv("u_bloomFactors",ni),h.setUniform3fv("u_bloomTintColors",ai),s.bindTexture(this._mipsFBOs[0].vertical.colorTexture,1),h.setUniform1i("u_blurTexture1",1),s.bindTexture(this._mipsFBOs[1].vertical.colorTexture,2),h.setUniform1i("u_blurTexture2",2),s.bindTexture(this._mipsFBOs[2].vertical.colorTexture,3),h.setUniform1i("u_blurTexture3",3),s.bindTexture(this._mipsFBOs[3].vertical.colorTexture,4),h.setUniform1i("u_blurTexture4",4),s.bindTexture(this._mipsFBOs[4].vertical.colorTexture,5),h.setUniform1i("u_blurTexture5",5),g.draw(),s.bindFramebuffer(t),s.setBlendingEnabled(!0);const I=l.getProgram(d.blit);s.useProgram(I),s.bindTexture(this._compositeFBO.colorTexture,6),I.setUniform1i("u_texture",6),s.setBlendFunction(m.ONE,m.ONE),g.draw(),g.unbind(),s.setBlendFunction(m.ONE,m.ONE_MINUS_SRC_ALPHA),s.setStencilTestEnabled(!0)}_createOrResizeResources(e,t,i){const{context:r}=e;if(this._compositeFBO&&this._size[0]===t&&this._size[1]===i)return;this._size[0]=t,this._size[1]=i;const n=[Math.round(t/2),Math.round(i/2)];this._compositeFBO?this._compositeFBO.resize(t,i):this._compositeFBO=new A(r,{colorTarget:D.TEXTURE,depthStencilTarget:U.NONE,width:t,height:i}),this._intensityFBO?this._intensityFBO.resize(n[0],n[1]):this._intensityFBO=new A(r,{colorTarget:D.TEXTURE,depthStencilTarget:U.NONE,width:n[0],height:n[1]},{target:O.TEXTURE_2D,pixelFormat:p.RGBA,internalFormat:p.RGBA,dataType:w.UNSIGNED_BYTE,wrapMode:P.CLAMP_TO_EDGE,samplingMode:x.LINEAR,flipped:!1,width:n[0],height:n[1]});for(let s=0;s<this._nMips;s++)this._mipsFBOs[s]?(this._mipsFBOs[s].horizontal.resize(n[0],n[1]),this._mipsFBOs[s].vertical.resize(n[0],n[1])):this._mipsFBOs[s]={horizontal:new A(r,{colorTarget:D.TEXTURE,depthStencilTarget:U.NONE,width:n[0],height:n[1]},{target:O.TEXTURE_2D,pixelFormat:p.RGBA,internalFormat:p.RGBA,dataType:w.UNSIGNED_BYTE,wrapMode:P.CLAMP_TO_EDGE,samplingMode:x.LINEAR,flipped:!1,width:n[0],height:n[1]}),vertical:new A(r,{colorTarget:D.TEXTURE,depthStencilTarget:U.NONE,width:n[0],height:n[1]},{target:O.TEXTURE_2D,pixelFormat:p.RGBA,internalFormat:p.RGBA,dataType:w.UNSIGNED_BYTE,wrapMode:P.CLAMP_TO_EDGE,samplingMode:x.LINEAR,flipped:!1,width:n[0],height:n[1]})},n[0]=Math.round(n[0]/2),n[1]=Math.round(n[1]/2)}}const li=[1,0],di=[0,1];class ui{constructor(){this._blurFBO=null,this._size=[0,0],this._programDesc={gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},radialBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/radial-blur",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){this._blurFBO&&(this._blurFBO.dispose(),this._blurFBO=null)}draw(e,t,i){const{context:r}=e,{type:n,radius:s}=i;if(s===0)return;this._createOrResizeResources(e),this._quad||(this._quad=new H(r,[-1,-1,1,-1,-1,1,1,1]));const a=this._quad;a.bind(),n==="blur"?this._gaussianBlur(e,t,s):this._radialBlur(e,t),a.unbind()}_gaussianBlur(e,t,i){const{context:r,state:n,painter:s,pixelRatio:a}=e,{size:l}=n,{materialManager:u}=s,d=this._programDesc,_=this._quad,c=[Math.round(a*l[0]),Math.round(a*l[1])],f=this._blurFBO,g=u.getProgram(d.gaussianBlur,[{name:"radius",value:Math.ceil(i)}]);r.useProgram(g),r.setBlendingEnabled(!1),r.bindFramebuffer(f),r.bindTexture(t.colorTexture,4),g.setUniform1i("u_colorTexture",4),g.setUniform2fv("u_texSize",c),g.setUniform2fv("u_direction",li),g.setUniform1f("u_sigma",i),_.draw(),r.bindFramebuffer(t),r.setStencilWriteMask(0),r.setStencilTestEnabled(!1),r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1),r.bindTexture(f==null?void 0:f.colorTexture,5),g.setUniform1i("u_colorTexture",5),g.setUniform2fv("u_direction",di),_.draw(),r.setBlendingEnabled(!0),r.setBlendFunction(m.ONE,m.ONE_MINUS_SRC_ALPHA),r.setStencilTestEnabled(!0)}_radialBlur(e,t){const{context:i,painter:r}=e,{materialManager:n}=r,s=this._programDesc,a=this._quad,l=this._blurFBO;i.bindFramebuffer(l);const u=n.getProgram(s.radialBlur);i.useProgram(u),i.setBlendingEnabled(!1),i.bindTexture(t.colorTexture,4),u.setUniform1i("u_colorTexture",4),a.draw(),i.bindFramebuffer(t),i.setStencilWriteMask(0),i.setStencilTestEnabled(!1),i.setDepthWriteEnabled(!1),i.setDepthTestEnabled(!1),i.setBlendingEnabled(!0);const d=n.getProgram(s.blit);i.useProgram(d),i.bindTexture(l==null?void 0:l.colorTexture,5),d.setUniform1i("u_texture",5),i.setBlendFunction(m.ONE,m.ONE_MINUS_SRC_ALPHA),a.draw()}_createOrResizeResources(e){const{context:t,state:i,pixelRatio:r}=e,{size:n}=i,s=Math.round(r*n[0]),a=Math.round(r*n[1]);this._blurFBO&&this._size[0]===s&&this._size[1]===a||(this._size[0]=s,this._size[1]=a,this._blurFBO?this._blurFBO.resize(s,a):this._blurFBO=new A(t,{colorTarget:D.TEXTURE,depthStencilTarget:U.NONE,width:s,height:a},{target:O.TEXTURE_2D,pixelFormat:p.RGBA,internalFormat:p.RGBA,dataType:w.UNSIGNED_BYTE,wrapMode:P.CLAMP_TO_EDGE,samplingMode:x.LINEAR,flipped:!1,width:s,height:a}))}}class hi{constructor(){this._layerFBOTexture=null,this._size=[0,0],this._programDesc={vsPath:"post-processing/pp",fsPath:"post-processing/filterEffect",attributes:new Map([["a_position",0]])}}dispose(){this._layerFBOTexture=T(this._layerFBOTexture)}draw(e,t,i){const{width:r,height:n}=t;this._createOrResizeResources(e,r,n);const{context:s,painter:a}=e,{materialManager:l}=a,u=this._programDesc,d=this._quad,_=i.colorMatrix;d.bind();const c=this._layerFBOTexture;s.bindFramebuffer(t),t.copyToTexture(0,0,r,n,0,0,c),s.setBlendingEnabled(!1),s.setStencilTestEnabled(!1);const f=l.getProgram(u);s.useProgram(f),s.bindTexture(c,2),f.setUniformMatrix4fv("u_coefficients",_),f.setUniform1i("u_colorTexture",2),d.draw(),s.setBlendingEnabled(!0),s.setBlendFunction(m.ONE,m.ONE_MINUS_SRC_ALPHA),s.setStencilTestEnabled(!0),d.unbind()}_createOrResizeResources(e,t,i){const{context:r}=e;this._layerFBOTexture&&this._size[0]===t&&this._size[1]===i||(this._size[0]=t,this._size[1]=i,this._layerFBOTexture?this._layerFBOTexture.resize(t,i):this._layerFBOTexture=new $(r,{target:O.TEXTURE_2D,pixelFormat:p.RGBA,internalFormat:p.RGBA,dataType:w.UNSIGNED_BYTE,wrapMode:P.CLAMP_TO_EDGE,samplingMode:x.LINEAR,flipped:!1,width:t,height:i}),this._quad||(this._quad=new H(r,[-1,-1,1,-1,-1,1,1,1])))}}const _i=[1,0],ci=[0,1];class pi{constructor(){this._layerFBOTexture=null,this._horizontalBlurFBO=null,this._verticalBlurFBO=null,this._size=[0,0],this._quad=null,this._programDesc={blur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/drop-shadow/composite",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){this._layerFBOTexture=T(this._layerFBOTexture),this._horizontalBlurFBO=T(this._horizontalBlurFBO),this._verticalBlurFBO=T(this._verticalBlurFBO)}draw(e,t,i){const{context:r,state:n,painter:s}=e,{materialManager:a}=s,l=this._programDesc,u=t.width,d=t.height,_=[Math.round(u),Math.round(d)],{blurRadius:c,offsetX:f,offsetY:g,color:b}=i,y=[le(f),le(g)];this._createOrResizeResources(e,u,d,_);const v=this._horizontalBlurFBO,h=this._verticalBlurFBO;r.setStencilWriteMask(0),r.setStencilTestEnabled(!1),r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1);const I=this._layerFBOTexture;t.copyToTexture(0,0,u,d,0,0,I),this._quad||(this._quad=new H(r,[-1,-1,1,-1,-1,1,1,1])),r.setViewport(0,0,_[0],_[1]);const E=this._quad;E.bind(),r.setBlendingEnabled(!1);const B=a.getProgram(l.blur,[{name:"radius",value:Math.ceil(c)}]);r.useProgram(B),r.bindFramebuffer(v),r.bindTexture(t.colorTexture,4),B.setUniform1i("u_colorTexture",4),B.setUniform2fv("u_texSize",_),B.setUniform2fv("u_direction",_i),B.setUniform1f("u_sigma",c),E.draw(),r.bindFramebuffer(h),r.bindTexture(v==null?void 0:v.colorTexture,5),B.setUniform1i("u_colorTexture",5),B.setUniform2fv("u_direction",ci),E.draw(),r.bindFramebuffer(t),r.setViewport(0,0,u,d);const F=a.getProgram(l.composite);r.useProgram(F),r.bindTexture(h==null?void 0:h.colorTexture,2),F.setUniform1i("u_blurTexture",2),r.bindTexture(I,3),F.setUniform1i("u_layerFBOTexture",3),F.setUniform4fv("u_shadowColor",[b[3]*(b[0]/255),b[3]*(b[1]/255),b[3]*(b[2]/255),b[3]]),F.setUniformMatrix3fv("u_displayViewMat3",n.displayMat3),F.setUniform2fv("u_shadowOffset",y),E.draw(),r.setBlendingEnabled(!0),r.setStencilTestEnabled(!0),r.setBlendFunction(m.ONE,m.ONE_MINUS_SRC_ALPHA),E.unbind()}_createOrResizeResources(e,t,i,r){const{context:n}=e;this._horizontalBlurFBO&&this._size[0]===t&&this._size[1]===i||(this._size[0]=t,this._size[1]=i,this._horizontalBlurFBO?this._horizontalBlurFBO.resize(r[0],r[1]):this._horizontalBlurFBO=new A(n,{colorTarget:D.TEXTURE,depthStencilTarget:U.NONE,width:r[0],height:r[1]},{target:O.TEXTURE_2D,pixelFormat:p.RGBA,internalFormat:p.RGBA,dataType:w.UNSIGNED_BYTE,wrapMode:P.CLAMP_TO_EDGE,samplingMode:x.LINEAR,flipped:!1,width:r[0],height:r[1]}),this._verticalBlurFBO?this._verticalBlurFBO.resize(r[0],r[1]):this._verticalBlurFBO=new A(n,{colorTarget:D.TEXTURE,depthStencilTarget:U.NONE,width:r[0],height:r[1]},{target:O.TEXTURE_2D,pixelFormat:p.RGBA,internalFormat:p.RGBA,dataType:w.UNSIGNED_BYTE,wrapMode:P.CLAMP_TO_EDGE,samplingMode:x.LINEAR,flipped:!1,width:r[0],height:r[1]}),this._layerFBOTexture?this._layerFBOTexture.resize(t,i):this._layerFBOTexture=new $(n,{target:O.TEXTURE_2D,pixelFormat:p.RGBA,internalFormat:p.RGBA,dataType:w.UNSIGNED_BYTE,wrapMode:P.CLAMP_TO_EDGE,samplingMode:x.LINEAR,flipped:!1,width:t,height:i}))}}class fi{constructor(){this._size=[0,0],this._layerFBOTexture=null}dispose(){this._layerFBOTexture=T(this._layerFBOTexture)}draw(e,t,i){const{width:r,height:n}=t;this._createOrResizeResources(e,r,n);const{context:s,painter:a}=e,{amount:l}=i,u=s.gl,d=this._layerFBOTexture;s.bindFramebuffer(t),t.copyToTexture(0,0,r,n,0,0,d),s.setBlendingEnabled(!0),s.setStencilTestEnabled(!1),s.setDepthTestEnabled(!1),s.setClearColor(0,0,0,0),s.clear(u.COLOR_BUFFER_BIT),a.blitTexture(s,d,x.NEAREST,l)}_createOrResizeResources(e,t,i){const{context:r}=e;this._layerFBOTexture&&this._size[0]===t&&this._size[1]===i||(this._size[0]=t,this._size[1]=i,this._layerFBOTexture?this._layerFBOTexture.resize(t,i):this._layerFBOTexture=new $(r,{target:O.TEXTURE_2D,pixelFormat:p.RGBA,internalFormat:p.RGBA,dataType:w.UNSIGNED_BYTE,wrapMode:P.CLAMP_TO_EDGE,samplingMode:x.NEAREST,flipped:!1,width:t,height:i}))}}function mi(o){switch(o){case"bloom":case"blur":case"opacity":case"drop-shadow":return o;default:return"colorize"}}const gi={colorize:()=>new hi,blur:()=>new ui,bloom:()=>new oi,opacity:()=>new fi,"drop-shadow":()=>new pi};class vi{constructor(){this._effectMap=new Map}dispose(){this._effectMap.forEach(e=>e.dispose()),this._effectMap.clear()}getPostProcessingEffects(e){if(!e||e.length===0)return[];const t=[];for(const i of e){const r=mi(i.type);let n=this._effectMap.get(r);n||(n=gi[r](),this._effectMap.set(r,n)),t.push({postProcessingEffect:n,effect:i})}return t}}class bi{constructor(e,t){this.brushes=e,this.name=t.name,this.drawPhase=t.drawPhase||C.MAP,this._targetFn=t.target,this.effects=t.effects||[],this.enableDefaultDraw=t.enableDefaultDraw??(()=>!0)}render(e){const{context:t,profiler:i}=e,r=this._targetFn(),n=this.drawPhase&e.drawPhase;if(i.recordPassStart(this.name),n){this.enableDefaultDraw()&&this._doRender(e,r),i.recordPassEnd();for(const s of this.effects){if(!s.enable())continue;const a=s.apply,l=s.args&&s.args(),u=t.getViewport(),d=t.getBoundFramebufferObject(),_=e.passOptions;this._bindEffect(e,a,l),this._doRender(e,r,a.defines),this._drawAndUnbindEffect(e,a,u,d,_,l)}}}_doRender(e,t,i){if(N(t))return;const{profiler:r,context:n}=e;for(const s of this.brushes){if(r.recordBrushStart(s.name),R(s.brushEffect)){const a=n.getViewport(),l=n.getBoundFramebufferObject(),u=e.passOptions;this._bindEffect(e,s.brushEffect),this._drawWithBrush(s,e,t,i),this._drawAndUnbindEffect(e,s.brushEffect,a,l,u)}else this._drawWithBrush(s,e,t,i);r.recordBrushEnd()}}_drawWithBrush(e,t,i,r){je(i)?(e.prepareState(t,r),e.drawMany(t,i,r)):i.visible&&(e.prepareState(t,r),e.draw(t,i,r))}_bindEffect(e,t,i){const{profiler:r}=e;r.recordPassStart(this.name+"."+t.name),t.bind(e,i);const n=t.createOptions(e,i);e.passOptions=n}_drawAndUnbindEffect(e,t,i,r,n,s){const{profiler:a,context:l}=e;e.passOptions=n,a.recordBrushStart(t.name),t.draw(e,s),t.unbind(e,s),l.bindFramebuffer(r);const{x:u,y:d,width:_,height:c}=i;l.setViewport(u,d,_,c),a.recordBrushEnd(),a.recordPassEnd()}}function Ti(o,e){switch(o){case q.LINE:return z.line;case q.TEXT:return z.text;case q.LABEL:return z.label;case q.FILL:return e===Z.DOT_DENSITY?z.dotDensity:z.fill;case q.MARKER:switch(e){case Z.HEATMAP:return z.heatmap;case Z.PIE_CHART:return z.pieChart;default:return z.marker}}}class xi{constructor(e,t,i){this.context=e,this._blitRenderer=new Ie,this._worldExtentClipRenderer=new Kt,this._isClippedToWorldExtent=!1,this._brushCache=new Map,this._lastWidth=null,this._lastHeight=null,this._prevFBO=null,this._vtlMaterialManager=new Ht,this._blendEffect=new vt,this._stencilBuf=null,this._fbos=null,this._fboPool=[],this._renderTarget=null,this.effects={highlight:new ei,hittest:new ti,hittestVTL:new ii,integrate:new Jt,insideEffect:new Pe("inside"),outsideEffect:new Pe("outside")},this.materialManager=new jt(e),this.textureManager=new bt(t,i,e.type===Ae.WEBGL2),this.textureUploadManager=new Xt(e,t),this._effectsManager=new vi}get vectorTilesMaterialManager(){return this._vtlMaterialManager}getRenderTarget(){return this._renderTarget}setRenderTarget(e){this._renderTarget=e}getFbos(e,t){if(e!==this._lastWidth||t!==this._lastHeight){if(this._lastWidth=e,this._lastHeight=t,this._fbos){for(const s in this._fbos)this._fbos[s].resize(e,t);return this._fbos}const i={target:O.TEXTURE_2D,pixelFormat:p.RGBA,dataType:w.UNSIGNED_BYTE,samplingMode:x.NEAREST,wrapMode:P.CLAMP_TO_EDGE,width:e,height:t},r={colorTarget:D.TEXTURE,depthStencilTarget:U.DEPTH_STENCIL_RENDER_BUFFER},n=new wt(this.context,{width:e,height:t,internalFormat:yt.DEPTH_STENCIL});this._stencilBuf=n,this._fbos={output:new A(this.context,r,i,n),blend:new A(this.context,r,i,n),effect0:new A(this.context,r,i,n)}}return this._fbos}acquireFbo(e,t){let i;i=this._fboPool.length>0?this._fboPool.pop():new A(this.context,{colorTarget:D.TEXTURE,depthStencilTarget:U.DEPTH_STENCIL_RENDER_BUFFER},{target:O.TEXTURE_2D,pixelFormat:p.RGBA,dataType:w.UNSIGNED_BYTE,samplingMode:x.NEAREST,wrapMode:P.CLAMP_TO_EDGE,width:e,height:t},this._stencilBuf);const r=i.descriptor;return r.width===e&&r.height===t||i.resize(e,t),i}releaseFbo(e){this._fboPool.push(e)}getSharedStencilBuffer(){return this._stencilBuf}beforeRenderLayers(e,t=null){const{width:i,height:r}=e.getViewport();this._prevFBO=e.getBoundFramebufferObject();const n=this.getFbos(i,r);if(e.bindFramebuffer(n==null?void 0:n.output),e.setColorMask(!0,!0,!0,!0),R(t)){const{r:s,g:a,b:l,a:u}=t.color;e.setClearColor(u*s/255,u*a/255,u*l/255,u)}else e.setClearColor(0,0,0,0);e.setDepthWriteEnabled(!0),e.setClearDepth(1),e.clear(e.gl.COLOR_BUFFER_BIT|e.gl.DEPTH_BUFFER_BIT),e.setDepthWriteEnabled(!1)}beforeRenderLayer(e,t,i){var u;const{context:r,blendMode:n,effects:s,requireFBO:a,drawPhase:l}=e;if(a||Se(l,n,s,i))r.bindFramebuffer((u=this._fbos)==null?void 0:u.blend),r.setColorMask(!0,!0,!0,!0),r.setClearColor(0,0,0,0),r.setDepthWriteEnabled(!0),r.setClearDepth(1),r.clear(r.gl.COLOR_BUFFER_BIT|r.gl.DEPTH_BUFFER_BIT),r.setDepthWriteEnabled(!1);else{const d=this._getOutputFBO();r.bindFramebuffer(d)}r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1),r.setStencilTestEnabled(!0),r.setClearStencil(t),r.setStencilWriteMask(255),r.clear(r.gl.STENCIL_BUFFER_BIT)}compositeLayer(e,t){const{context:i,blendMode:r,effects:n,requireFBO:s,drawPhase:a}=e;if(s||Se(a,r,n,t)){R(n)&&n.length>0&&a===C.MAP&&this._applyEffects(e,n);const l=this._getOutputFBO();i.bindFramebuffer(l),i.setStencilTestEnabled(!1),i.setStencilWriteMask(0),i.setBlendingEnabled(!0),i.setBlendFunctionSeparate(m.ONE,m.ONE_MINUS_SRC_ALPHA,m.ONE,m.ONE_MINUS_SRC_ALPHA),i.setColorMask(!0,!0,!0,!0);const u=N(r)||a===C.HIGHLIGHT?"normal":r,d=this._fbos;d!=null&&d.blend.colorTexture&&this._blendEffect.draw(e,d.blend.colorTexture,x.NEAREST,u,t)}}renderLayers(e){e.bindFramebuffer(this._prevFBO);const t=this._getOutputFBO();t&&(e.setDepthTestEnabled(!1),e.setStencilWriteMask(0),this._isClippedToWorldExtent?(e.setStencilTestEnabled(!0),e.setStencilFunction(De.EQUAL,1,255)):e.setStencilTestEnabled(!1),this.blitTexture(e,t.colorTexture,x.NEAREST))}prepareDisplay(e,t,i){const{context:r}=e;if(r.bindFramebuffer(this._prevFBO),r.setColorMask(!0,!0,!0,!0),R(t)){const{r:n,g:s,b:a,a:l}=t.color;r.setClearColor(l*n/255,l*s/255,l*a/255,l)}else r.setClearColor(0,0,0,0);r.setStencilWriteMask(255),r.setClearStencil(0),r.clear(r.gl.COLOR_BUFFER_BIT|r.gl.STENCIL_BUFFER_BIT),this._isClippedToWorldExtent=this._worldExtentClipRenderer.render(e,i)}dispose(){if(this.materialManager.dispose(),this.textureManager.dispose(),this.textureUploadManager.destroy(),this._blitRenderer=T(this._blitRenderer),this._worldExtentClipRenderer=T(this._worldExtentClipRenderer),this._brushCache&&(this._brushCache.forEach(e=>e.dispose()),this._brushCache.clear(),this._brushCache=null),this._fbos)for(const e in this._fbos)this._fbos[e]&&this._fbos[e].dispose();for(const e of this._fboPool)e.dispose();if(this._fboPool.length=0,this.effects)for(const e in this.effects)this.effects[e]&&this.effects[e].dispose();this._effectsManager.dispose(),this._vtlMaterialManager=T(this._vtlMaterialManager),this._prevFBO=null}getBrush(e,t){const i=Ti(e,t);let r=this._brushCache.get(i);return r===void 0&&(r=new i,this._brushCache.set(i,r)),r}renderObject(e,t,i,r){const n=z[i];if(!n)return;let s=this._brushCache.get(n);s===void 0&&(s=new n,this._brushCache.set(n,s)),s.prepareState(e,r),s.draw(e,t,r)}renderObjects(e,t,i,r){const n=z[i];if(!n)return;let s=this._brushCache.get(n);s===void 0&&(s=new n,this._brushCache.set(n,s)),s.drawMany(e,t,r)}registerRenderPass(e){const t=e.brushes.map(i=>(this._brushCache.has(i)||this._brushCache.set(i,new i),this._brushCache.get(i)));return new bi(t,e)}blitTexture(e,t,i,r=1){e.setBlendingEnabled(!0),e.setBlendFunctionSeparate(m.ONE,m.ONE_MINUS_SRC_ALPHA,m.ONE,m.ONE_MINUS_SRC_ALPHA),e.setColorMask(!0,!0,!0,!0),this._blitRenderer.render(e,t,i,r)}getPostProcessingEffects(e){return this._effectsManager.getPostProcessingEffects(e)}_getOutputFBO(){var e;return this._renderTarget!=null?this._renderTarget:((e=this._fbos)==null?void 0:e.output)??null}_applyEffects(e,t){var s;const i=(s=this._fbos)==null?void 0:s.blend;if(!i)return;const{context:r}=e,n=this._effectsManager.getPostProcessingEffects(t);for(const{postProcessingEffect:a,effect:l}of n)r.bindFramebuffer(i),a.draw(e,i,l)}}function Se(o,e,t,i){return o!==C.HIGHLIGHT&&(i!==1||R(e)&&e!=="normal"||R(t)&&t.length>0)}const Ei=2e3;class qr extends fe{constructor(e,t){super(),this._trash=new Set,this._renderRemainingTime=0,this._lastFrameRenderTime=0,this.renderRequested=!1,this.stage=this,this._stationary=!0;const{canvas:i=document.createElement("canvas"),alpha:r=!0,stencil:n=!0,contextOptions:s={}}=t;this._canvas=i;const a=Xe("2d",i,{alpha:r,antialias:!1,depth:!0,stencil:n});this.context=new Bt(Ye(a)??null,s),this.resourceManager=new ot,this.painter=new xi(this.context,this,this.resourceManager),de("esri-2d-profiler")&&(this._debugOutput=document.createElement("div"),this._debugOutput.setAttribute("style","margin: 24px 64px; position: absolute; color: red;"),e.appendChild(this._debugOutput));const l=()=>this._highlightGradient;this._renderParameters={drawPhase:0,state:this.state,pixelRatio:window.devicePixelRatio,stationary:!1,globalOpacity:1,blendMode:null,deltaTime:-1,time:0,inFadeTransition:!1,effects:null,context:this.context,painter:this.painter,timeline:t.timeline||new Ke,renderingOptions:t.renderingOptions,requestRender:()=>this.requestRender(),allowDelayedRender:!1,requireFBO:!1,profiler:new Tt(this.context,this._debugOutput),dataUploadCounter:0,get highlightGradient(){return l()}},this._taskHandle=Je({render:u=>this.renderFrame(u)}),this._taskHandle.pause(),this._lostWebGLContextHandle=Qe(i,"webglcontextlost",()=>{this.emit("webgl-error",{error:new Ze("webgl-context-lost")})}),this._bufferPool=new ht,i.setAttribute("style","width: 100%; height:100%; display:block;"),e.appendChild(i)}destroy(){var e,t,i;this.removeAllChildren(),this._emptyTrash(),this._taskHandle=ue(this._taskHandle),this._lostWebGLContextHandle=ue(this._lostWebGLContextHandle),(e=this._canvas.parentNode)==null||e.removeChild(this._canvas),(i=(t=this._debugOutput)==null?void 0:t.parentNode)==null||i.removeChild(this._debugOutput),this._bufferPool.destroy(),this.resourceManager.destroy(),this.painter.dispose(),this.context.dispose(),this._canvas=null}get background(){return this._background}set background(e){this._background=e,this.requestRender()}get bufferPool(){return this._bufferPool}get renderingOptions(){return this._renderingOptions}set renderingOptions(e){this._renderingOptions=e,this.requestRender()}get state(){return this._state}set state(e){this._state=e,this.requestRender()}get stationary(){return this._stationary}set stationary(e){this._stationary!==e&&(this._stationary=e,this.requestRender())}trashDisplayObject(e){this._trash.add(e),this.requestRender()}untrashDisplayObject(e){return this._trash.delete(e)}requestRender(){this._renderRemainingTime=Ei,this.renderRequested||(this.renderRequested=!0,this.emit("will-render"),this._taskHandle.resume())}renderFrame(e){const t=this._lastFrameRenderTime?e.time-this._lastFrameRenderTime:0;this._renderRemainingTime-=t,this._renderRemainingTime<=0&&this._taskHandle.pause(),this._lastFrameRenderTime=e.time,this.renderRequested=!1,this._renderParameters.state=this._state,this._renderParameters.stationary=this.stationary,this._renderParameters.pixelRatio=window.devicePixelRatio,this._renderParameters.globalOpacity=1,this._renderParameters.time=e.time,this._renderParameters.deltaTime=e.deltaTime,this._renderParameters.effects=null,this.processRender(this._renderParameters),this._emptyTrash(),this.emit("post-render")}_createTransforms(){return{dvs:ie()}}renderChildren(e){for(const t of this.children)t.beforeRender(e);this._renderChildren(this.children,e);for(const t of this.children)t.afterRender(e)}_renderChildren(e,t){const i=this.context;this.painter.textureUploadManager.upload(),i.resetInfo(),t.profiler.recordStart("drawLayers"),t.dataUploadCounter=0,t.drawPhase=C.MAP,this.painter.beforeRenderLayers(i,this.background);for(const r of e)r.processRender(t);this.painter.prepareDisplay(t,this.background,this.state.padding),this.painter.renderLayers(i),t.drawPhase=C.HIGHLIGHT,this.painter.beforeRenderLayers(i);for(const r of e)r.processRender(t);if(this.painter.renderLayers(i),this._isLabelDrawPhaseRequired(e)){t.drawPhase=C.LABEL,this.painter.beforeRenderLayers(i);for(const r of e)r.processRender(t);this.painter.renderLayers(i)}if(de("esri-tiles-debug")){t.drawPhase=C.DEBUG,this.painter.beforeRenderLayers(i);for(const r of e)r.processRender(t);this.painter.renderLayers(i)}t.profiler.recordEnd("drawLayers"),i.logInfo()}doRender(e){const t=this.context,{state:i,pixelRatio:r}=e;this._resizeCanvas(e),t.setViewport(0,0,r*i.size[0],r*i.size[1]),t.setDepthWriteEnabled(!0),t.setStencilWriteMask(255),super.doRender(e)}async takeScreenshot(e){const{framebufferWidth:t,framebufferHeight:i}={framebufferWidth:Math.round(this.state.size[0]*e.resolutionScale),framebufferHeight:Math.round(this.state.size[1]*e.resolutionScale)},r=e.resolutionScale,n=this.context,s=this._state.clone();if(e.rotation!=null){const g=s.viewpoint;s.viewpoint.rotation=e.rotation,s.viewpoint=g}const a={...this._renderParameters,drawPhase:null,globalOpacity:1,stationary:!0,state:s,pixelRatio:r,time:performance.now(),deltaTime:0,blendMode:null,effects:null,inFadeTransition:!1},l=new A(n,{colorTarget:D.TEXTURE,depthStencilTarget:U.DEPTH_STENCIL_RENDER_BUFFER,width:t,height:i}),u=n.getBoundFramebufferObject(),d=n.getViewport();n.bindFramebuffer(l),n.setViewport(0,0,t,i),this._renderChildren(e.children,a);const _=this._readbackScreenshot(l,{...e.cropArea,y:i-(e.cropArea.y+e.cropArea.height)});n.bindFramebuffer(u),n.setViewport(d.x,d.y,d.width,d.height),this.requestRender();const c=await _;let f;return e.outputScale===1?f=c:(f=new ImageData(Math.round(c.width*e.outputScale),Math.round(c.height*e.outputScale)),et(c,f,!0)),f}async _readbackScreenshot(e,t){const i=Ct(t.width,t.height,document.createElement("canvas"));return await e.readPixelsAsync(t.x,t.y,t.width,t.height,p.RGBA,w.UNSIGNED_BYTE,new Uint8Array(i.data.buffer)),i}_resizeCanvas(e){const t=this._canvas,i=t.style,{state:{size:r},pixelRatio:n}=e,s=r[0],a=r[1],l=Math.round(s*n),u=Math.round(a*n);t.width===l&&t.height===u||(t.width=l,t.height=u),i.width=s+"px",i.height=a+"px"}_emptyTrash(){for(;this._trash.size>0;){const e=Array.from(this._trash);this._trash.clear();for(const t of e)t.processDetach()}}_isLabelDrawPhaseRequired(e){let t=!1;for(const i of e){if(!(i instanceof fe)){t=t||!1;break}if(i.hasLabels)return!0;t=t||this._isLabelDrawPhaseRequired(i.children)}return t}}async function wi(o){const e=he(()=>import("./mask-svg-023bbc42.js"),[]),t=he(()=>import("./overlay-svg-d62383f3.js"),[]),i=xe((await e).default,{signal:o}),r=xe((await t).default,{signal:o}),n={mask:await i,overlay:await r};return Ce(o),n}class Wr extends ut{constructor(){super(),this._handles=new tt,this._resourcePixelRatio=1,this.visible=!1}destroy(){this._handles=it(this._handles),this._disposeRenderResources(),this._resourcesTask=rt(this._resourcesTask)}get background(){return this._background}set background(e){this._background=e,this.requestRender()}get magnifier(){return this._magnifier}set magnifier(e){this._magnifier=e,this._handles.removeAll(),this._handles.add([Q(()=>e.version,()=>{this.visible=e.visible&&R(e.position)&&e.size>0,this.requestRender()},st),Q(()=>[e.maskUrl,e.overlayUrl],()=>this._reloadResources()),Q(()=>e.size,()=>{this._disposeRenderResources(),this.requestRender()})])}_createTransforms(){return{dvs:ie()}}doRender(e){var ae;const t=e.context;if(!this._resourcesTask)return void this._reloadResources();if(e.drawPhase!==C.MAP||!this._canRender())return;this._updateResources(e);const i=this._magnifier;if(N(i.position))return;const r=e.pixelRatio,n=i.size*r,s=1/i.factor,a=Math.ceil(s*n);this._readbackTexture.resize(a,a);const{size:l}=e.state,u=r*l[0],d=r*l[1],_=.5*a,c=.5*a,f=_e(r*i.position.x,_,u-_-1),g=_e(d-r*i.position.y,c,d-c-1);t.setBlendingEnabled(!0);const b=f-_,y=g-c,v=this._readbackTexture;t.bindTexture(v,0),t.gl.copyTexImage2D(v.descriptor.target,0,v.descriptor.pixelFormat,b,y,a,a,0);const h=(ae=this.background)==null?void 0:ae.color,I=h?[h.a*h.r/255,h.a*h.g/255,h.a*h.b/255,h.a]:[1,1,1,1],E=(f+i.offset.x*r)/u*2-1,B=(g-i.offset.y*r)/d*2-1,F=n/u*2,Ne=n/d*2,L=this._program;t.bindVAO(this._vertexArrayObject),t.bindTexture(this._overlayTexture,6),t.bindTexture(this._maskTexture,7),t.useProgram(L),L.setUniform4fv("u_background",I),L.setUniform1i("u_readbackTexture",0),L.setUniform1i("u_overlayTexture",6),L.setUniform1i("u_maskTexture",7),L.setUniform4f("u_drawPos",E,B,F,Ne),L.setUniform1i("u_maskEnabled",i.maskEnabled?1:0),L.setUniform1i("u_overlayEnabled",i.overlayEnabled?1:0),t.setStencilTestEnabled(!1),t.setColorMask(!0,!0,!0,!0),t.drawArrays(V.TRIANGLE_STRIP,0,4),t.bindVAO()}_canRender(){return this.mask&&this.overlay&&this._magnifier!=null}_reloadResources(){this._resourcesTask&&this._resourcesTask.abort();const e=R(this._magnifier)?this._magnifier.maskUrl:null,t=R(this._magnifier)?this._magnifier.overlayUrl:null;this._resourcesTask=nt(async i=>{const r=N(e)||N(t)?wi(i):null,n=R(e)?ce(e,{responseType:"image",signal:i}).then(u=>u.data):r.then(u=>u.mask),s=R(t)?ce(t,{responseType:"image",signal:i}).then(u=>u.data):r.then(u=>u.overlay),[a,l]=await Promise.all([n,s]);this.mask=a,this.overlay=l,this._disposeRenderResources(),this.requestRender()})}_disposeRenderResources(){this._readbackTexture=T(this._readbackTexture),this._overlayTexture=T(this._overlayTexture),this._maskTexture=T(this._maskTexture),this._vertexArrayObject=T(this._vertexArrayObject),this._program=T(this._program)}_updateResources(e){if(e.pixelRatio!==this._resourcePixelRatio&&this._disposeRenderResources(),this._readbackTexture)return;const t=e.context;this._resourcePixelRatio=e.pixelRatio;const i=Math.ceil(this._magnifier.size*e.pixelRatio);this._program=xt(t);const r=new Uint16Array([0,1,0,0,1,1,1,0]),n=Et.attributes;this._vertexArrayObject=new re(t,n,ct,{geometry:se.createVertex(t,ne.STATIC_DRAW,r)}),this.overlay.width=i,this.overlay.height=i,this._overlayTexture=new $(t,{target:O.TEXTURE_2D,pixelFormat:p.RGBA,internalFormat:p.RGBA,dataType:w.UNSIGNED_BYTE,wrapMode:P.CLAMP_TO_EDGE,samplingMode:x.NEAREST,flipped:!0,preMultiplyAlpha:!at(this.overlay.src)||!e.context.driverTest.svgPremultipliesAlpha.result},this.overlay),this.mask.width=i,this.mask.height=i,this._maskTexture=new $(t,{target:O.TEXTURE_2D,pixelFormat:p.ALPHA,internalFormat:p.ALPHA,dataType:w.UNSIGNED_BYTE,wrapMode:P.CLAMP_TO_EDGE,samplingMode:x.NEAREST,flipped:!0},this.mask);const s=1/this._magnifier.factor;this._readbackTexture=new $(t,{target:O.TEXTURE_2D,pixelFormat:p.RGBA,internalFormat:p.RGBA,dataType:w.UNSIGNED_BYTE,wrapMode:P.CLAMP_TO_EDGE,samplingMode:x.LINEAR,flipped:!1,width:Math.ceil(s*i),height:Math.ceil(s*i)})}}export{Zr as GraphicContainer,Jr as GraphicsView2D,Xr as LabelManager,Wr as MagnifierView2D,Yr as MapViewNavigation,qr as Stage};
