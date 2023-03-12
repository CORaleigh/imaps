import{c9 as Z,x as W,B as D,aX as ee,I as b,gS as te,aR as F,ad as re,fM as se,fi as H,kq as M,as as _,cc as ie,bR as ae,gK as oe,lx as ne,mV as le,kU as he,gO as ce,eq as me,gM as de,gN as pe,ca as ue,nV as fe,D as ye,Q as z,nk as _e,nl as ge,n$ as ve,ac as we,aq as Re,iv as Ee,e as T,y as P,a as xe,aj as Me,o0 as Te}from"./index-84d82762.js";import{j as be,u as B}from"./perspectiveUtils-14c24459.js";import"./Rasterizer-339188f9.js";import"./EffectView-8884bcf8.js";import{r as Se}from"./Container-3143eee9.js";import"./BufferPool-c00bf33a.js";import{T as $e}from"./color-f709a8e1.js";import{c as Ce,w as Ve}from"./WGLContainer-b78eadcd.js";import"./vec4f32-0d1b2306.js";import{P as qe,G as Ge,L as Ae,D as De,F as Q}from"./enums-64ab819c.js";import{E as Pe}from"./Texture-01146b87.js";import"./ProgramTemplate-5d941873.js";import"./MaterialKey-48941800.js";import"./utils-a19edd14.js";import{E as k,f as Ie}from"./VertexArrayObject-5928be90.js";import"./number-b10bd8f5.js";import"./StyleDefinition-fbc907c2.js";import"./enums-fb086c25.js";import"./MagnifierPrograms-2d4089af.js";import"./OrderIndependentTransparency-92d1201d.js";import"./floatRGBA-40a7b76b.js";import"./webgl-debug-b1f7a2c5.js";import"./GraphicsView2D-6496434e.js";import"./AttributeStoreView-01f76a5b.js";import"./earcut-61f7b102.js";import{r as Ue}from"./vec3f32-ad1dc57f.js";import{e as Oe}from"./mat3f64-221ce671.js";import{f as je}from"./LayerView2D-715967bf.js";import{u as Le}from"./LayerView-70584726.js";import"./normalizeUtilsSync-93a8bb0b.js";import"./_commonjsHelpers-2f3e7994.js";import"./cimAnalyzer-4d73c73b.js";import"./fontUtils-2a2a4860.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./enums-55085e26.js";import"./alignmentUtils-ae955d28.js";import"./definitions-19bfb61c.js";import"./Rect-ea14f53a.js";import"./callExpressionWithFeature-223a8282.js";import"./rasterizingUtils-4a9abc73.js";import"./VertexElementDescriptor-2925c6af.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./imageutils-2f9a6a58.js";import"./Matcher-dc06a486.js";import"./visualVariablesUtils-fff64b5d.js";import"./visualVariablesUtils-437863b0.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-7acc0fb6.js";import"./ExpandedCIM-e76ebef6.js";import"./CircularArray-3631b3d5.js";import"./ComputedAttributeStorage-1c2512ad.js";import"./arcadeTimeUtils-7857a6a9.js";import"./centroid-a04a0cd1.js";import"./basicInterfaces-04e01328.js";import"./schemaUtils-d98cc76d.js";import"./util-eb41816b.js";import"./TiledDisplayObject-40abdd30.js";const g=Oe();class We extends Se{constructor(e){super(),this.elementView=e,this.isWrapAround=!1,this.perspectiveTransform=Z(),this._vertices=new Float32Array(20),this._handles=[],this._handles.push(W(()=>this.elementView.element.opacity,t=>this.opacity=t,D),W(()=>[this.elementView.coords],()=>{this.requestRender()},D),ee(()=>this.elementView.element.loaded,()=>{const t=this.elementView.element;this.ready(),t.type==="video"&&b(t.content)&&this._handles.push(te(t.content,"play",()=>this.requestRender()))},D)),e.element.load().catch(t=>{F.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new re("element-load-error","Element cannot be displayed",{element:e,error:t}))})}destroy(){this._handles.forEach(e=>e.remove()),this.texture=se(this.texture)}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const{context:t}=e,s=this.elementView.element.content;if(b(s)){const i=s instanceof HTMLImageElement,a=s instanceof HTMLVideoElement,n=i?s.naturalWidth:a?s.videoWidth:s.width,o=i?s.naturalHeight:a?s.videoHeight:s.height;this._updatePerspectiveTransform(n,o),this.texture?a&&!s.paused&&(this.texture.setData(s),this.requestRender(),(t.type===H.WEBGL2||M(n)&&M(o))&&this.texture.generateMipmap()):(this.texture=new Pe(t,{pixelFormat:qe.RGBA,dataType:Ge.UNSIGNED_BYTE,samplingMode:Ae.LINEAR,wrapMode:De.CLAMP_TO_EDGE,width:n,height:o,preMultiplyAlpha:!0},s),(t.type===H.WEBGL2||M(n)&&M(o))&&this.texture.generateMipmap(),a&&!s.paused&&this.requestRender())}super.beforeRender(e)}_createTransforms(){return null}updateDrawCoords(e,t){const s=this.elementView.coords;if(_(s))return;const[i,a,n,o]=s.rings[0],d=this._vertices,{x:l,y:h}=e,p=t!==0;p?d.set([a[0]-l,a[1]-h,i[0]-l,i[1]-h,n[0]-l,n[1]-h,o[0]-l,o[1]-h,o[0]-l,o[1]-h,a[0]+t-l,a[1]-h,a[0]+t-l,a[1]-h,i[0]+t-l,i[1]-h,n[0]+t-l,n[1]-h,o[0]+t-l,o[1]-h]):d.set([a[0]-l,a[1]-h,i[0]-l,i[1]-h,n[0]-l,n[1]-h,o[0]-l,o[1]-h]),this.isWrapAround=p}getVAO(e,t,s){if(_(this.elementView.coords))return null;const i=this._vertices;if(this._vao)this._geometryVbo.setData(i);else{this._geometryVbo=k.createVertex(e,Q.DYNAMIC_DRAW,i);const a=k.createVertex(e,Q.STATIC_DRAW,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]));this._vao=new Ie(e,s,t,{geometry:this._geometryVbo,tex:a})}return this._vao}_updatePerspectiveTransform(e,t){const s=this._vertices;be(g,[0,0,e,0,0,t,e,t],[s[0],s[1],s[4],s[5],s[2],s[3],s[6],s[7]]),ie(this.perspectiveTransform,g[6]/g[8]*e,g[7]/g[8]*t)}}class He extends Ce{constructor(){super(...arguments),this._localOrigin=ae(0,0),this._viewStateId=-1,this._dvsMat3=oe(),this.requiresDedicatedFBO=!1}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"overlay",brushes:[Ve.overlay],target:()=>this.children,drawPhase:$e.MAP});return[...super.prepareRenderPasses(e),t]}_updateMatrices(e){const{state:t}=e,{id:s,size:i,pixelRatio:a,resolution:n,rotation:o,viewpoint:d,displayMat3:l}=t;if(this._viewStateId===s)return;const h=Math.PI/180*o,p=a*i[0],f=a*i[1],{x:S,y:w}=d.targetGeometry,$=ne(S,t.spatialReference);this._localOrigin.x=$,this._localOrigin.y=w;const C=n*p,R=n*f,c=le(this._dvsMat3);he(c,c,l),ce(c,c,me(p/2,f/2)),de(c,c,Ue(p/C,-f/R,1)),pe(c,c,-h),this._viewStateId=s}_updateOverlays(e,t){const{state:s}=e,{rotation:i,spatialReference:a,worldScreenWidth:n,size:o,viewpoint:d}=s,l=this._localOrigin;let h=0;const p=ue(a);if(p&&a.isWrappable){const f=o[0],S=o[1],w=180/Math.PI*i,$=Math.abs(Math.cos(w)),C=Math.abs(Math.sin(w)),R=Math.round(f*$+S*C),[c,V]=p.valid,u=fe(a),{x:I,y:Y}=d.targetGeometry,K=[I,Y],q=[0,0];s.toScreen(q,K);const E=[0,0];let G;G=R>n?.5*n:.5*R;const U=Math.floor((I+.5*u)/u),X=c+U*u,J=V+U*u,A=[q[0]+G,0];s.toMap(E,A),E[0]>J&&(h=u),A[0]=q[0]-G,s.toMap(E,A),E[0]<X&&(h=-u);for(const x of t){const O=x.elementView.bounds;if(_(O))continue;const[j,,L]=O;j<c&&L>c?x.updateDrawCoords(l,u):L>V&&j<V?x.updateDrawCoords(l,-u):x.updateDrawCoords(l,h)}}else for(const f of t)f.updateDrawCoords(l,h)}}let y=class extends je(Le){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this._debugGraphicsView=null,this.layer=null,this.elements=new ye}attach(){this.addAttachHandles([z(()=>this.layer.effectiveSource,"refresh",()=>{for(const r of this._tileStrategy.tiles)this._updateTile(r);this.requestUpdate()}),z(()=>this.layer.effectiveSource,"change",({element:r})=>this._elementUpdateHandler(r))]),this._overlayContainer=new He,this.container.addChild(this._overlayContainer),this._fetchQueue=new _e({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(r,e)=>this._queryElements(r,e)}),this._tileStrategy=new ge({cachePolicy:"purge",resampling:!0,acquireTile:r=>this._acquireTile(r),releaseTile:r=>this._releaseTile(r),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate()}detach(){var r;this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear(),(r=this._debugGraphicsView)==null||r.destroy()}supportsSpatialReference(r){return!0}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}update(r){var e;this._tileStrategy.update(r),(e=this._debugGraphicsView)==null||e.update(r)}async hitTest(r,e){const t=[],s=r.normalize(),i=[s.x,s.y];for(const{projectedElement:{normalizedCoords:a,element:n}}of this._elementReferences.values())b(a)&&ve(a.rings,i)&&t.push({type:"media",element:n,layer:this.layer,mapPoint:r});return t.reverse()}canResume(){return this.layer.source!=null&&super.canResume()}async doRefresh(){this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(r=>this._updateTile(r))}_acquireTile(r){const e=new ze(r.clone());return this._updateTile(e),e}_updateTile(r){this.updatingHandles.addPromise(this._fetchQueue.push(r.key).then(e=>{const[t,s]=r.setElements(e);this._referenceElements(r,t),this._dereferenceElements(r,s),this.requestUpdate()},e=>{we(e)||F.getLogger(this.declaredClass).error(e)}))}_releaseTile(r){this._fetchQueue.abort(r.key.id),r.elements&&this._dereferenceElements(r,r.elements),this.requestUpdate()}async _queryElements(r,e){const t=this.layer.effectiveSource;if(_(t))return[];this.view.featuresTilingScheme.getTileBounds(m,r,!0);const s=new Re({xmin:m[0],ymin:m[1],xmax:m[2],ymax:m[3],spatialReference:this.view.spatialReference});return t.queryElements(s,e)}_referenceElements(r,e){const t=this.layer.source;if(!_(t))for(const s of e)this._referenceElement(r,s)}_referenceElement(r,e){Ee(this._elementReferences,e.uid,()=>{const t=new B({element:e,spatialReference:this.view.spatialReference}),s=new We(t);return this._overlayContainer.addChild(s),this.elements.add(e),{tiles:new Set,projectedElement:t,overlay:s,debugGraphic:null}}).tiles.add(r)}_dereferenceElements(r,e){for(const t of e)this._dereferenceElement(r,t)}_dereferenceElement(r,e){var s;const t=this._elementReferences.get(e.uid);t.tiles.delete(r),t.tiles.size||(this._overlayContainer.removeChild(t.overlay),t.overlay.destroy(),t.projectedElement.destroy(),this._elementReferences.delete(e.uid),this.elements.remove(e),(s=this._debugGraphicsView)==null||s.graphics.remove(t.debugGraphic))}_elementUpdateHandler(r){var s;let e=this._elementReferences.get(r.uid);if(e){const i=e.projectedElement.normalizedCoords;if(_(i))return this._overlayContainer.removeChild(e.overlay),e.overlay.destroy(),e.projectedElement.destroy(),this._elementReferences.delete(r.uid),this.elements.remove(r),void((s=this._debugGraphicsView)==null?void 0:s.graphics.remove(e.debugGraphic));const a=[],n=[];for(const o of this._tileStrategy.tiles){const d=N(this.view.featuresTilingScheme,o,i);e.tiles.has(o)?d||n.push(o):d&&a.push(o)}for(const o of a)this._referenceElement(o,r);for(const o of n)this._dereferenceElement(o,r);return e=this._elementReferences.get(r.uid),void((e==null?void 0:e.debugGraphic)&&(e.debugGraphic.geometry=e.projectedElement.normalizedCoords,this._debugGraphicsView.graphicUpdateHandler({graphic:e.debugGraphic,property:"geometry"})))}const t=new B({element:r,spatialReference:this.view.spatialReference}).normalizedCoords;if(b(t))for(const i of this._tileStrategy.tiles)N(this.view.featuresTilingScheme,i,t)&&this._referenceElement(i,r)}};T([P()],y.prototype,"_fetchQueue",void 0),T([P()],y.prototype,"layer",void 0),T([P({readOnly:!0})],y.prototype,"elements",void 0),y=T([xe("esri.views.2d.layers.MediaLayerView2D")],y);const m=Me(),v={xmin:0,ymin:0,xmax:0,ymax:0};function N(r,e,t){return r.getTileBounds(m,e.key,!0),v.xmin=m[0],v.ymin=m[1],v.xmax=m[2],v.ymax=m[3],Te(v,t)}class ze{constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0}setElements(e){const t=[],s=new Set(this.elements);this.elements=e;for(const i of e)s.has(i)?s.delete(i):t.push(i);return this.isReady=!0,[t,Array.from(s)]}destroy(){}}const Yt=y;export{Yt as default};
