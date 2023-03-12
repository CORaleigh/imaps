import{ca as Z,z as W,D,aY as ee,J as b,gT as te,aS as F,ae as re,fN as se,fj as z,kr as M,at as _,cd as ie,bS as ae,gL as oe,ly as ne,mW as le,kV as he,gP as me,er as ce,gN as de,gO as pe,cb as ue,nW as fe,E as ye,T as H,nl as _e,nm as ge,o0 as ve,ad as we,ar as Re,iw as Ee,e as T,y as P,a as xe,ak as Me,o1 as Te}from"./index-3baec1e8.js";import{j as be,u as k}from"./perspectiveUtils-cfbf202d.js";import"./Rasterizer-9230c73a.js";import"./EffectView-afae9832.js";import{r as Se}from"./Container-4a91c2fe.js";import"./BufferPool-bceb06a8.js";import{T as Ce}from"./color-c3cd82c3.js";import{c as $e,w as Ve}from"./WGLContainer-0d718b65.js";import"./vec4f32-0d1b2306.js";import{P as Ge,G as Ae,L as qe,D as De,F as B}from"./enums-64ab819c.js";import{E as Pe}from"./Texture-fc8c3a1e.js";import"./ProgramTemplate-e12d06ba.js";import"./MaterialKey-99779fbd.js";import"./utils-a479217c.js";import{E as Q,f as Ie}from"./VertexArrayObject-741e2cbe.js";import"./number-b10bd8f5.js";import"./StyleDefinition-fbc907c2.js";import"./enums-fb086c25.js";import"./MagnifierPrograms-c63a7dda.js";import"./OrderIndependentTransparency-92d1201d.js";import"./floatRGBA-8334d045.js";import"./webgl-debug-b1f7a2c5.js";import"./GraphicsView2D-ec90bead.js";import"./AttributeStoreView-8d3816f3.js";import"./earcut-61f7b102.js";import{r as Le}from"./vec3f32-ad1dc57f.js";import{e as Oe}from"./mat3f64-221ce671.js";import{f as Ue}from"./LayerView2D-785741e8.js";import{u as je}from"./LayerView-6dd1371b.js";import"./normalizeUtilsSync-a7753d41.js";import"./_commonjsHelpers-2f3e7994.js";import"./cimAnalyzer-90e30a1b.js";import"./fontUtils-900716a0.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./enums-55085e26.js";import"./alignmentUtils-ae955d28.js";import"./definitions-19bfb61c.js";import"./Rect-ea14f53a.js";import"./callExpressionWithFeature-995a07d3.js";import"./rasterizingUtils-8f4f0f66.js";import"./VertexElementDescriptor-2925c6af.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./imageutils-713c87d5.js";import"./Matcher-aa402022.js";import"./visualVariablesUtils-d0905b43.js";import"./visualVariablesUtils-92509212.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-c8e52ae4.js";import"./ExpandedCIM-da0c80f4.js";import"./CircularArray-fc2dd530.js";import"./ComputedAttributeStorage-45340486.js";import"./arcadeTimeUtils-acf15f72.js";import"./centroid-7a1ceecc.js";import"./basicInterfaces-04e01328.js";import"./schemaUtils-5dff1072.js";import"./util-5de54085.js";import"./TiledDisplayObject-d59cbd49.js";const g=Oe();class We extends Se{constructor(e){super(),this.elementView=e,this.isWrapAround=!1,this.perspectiveTransform=Z(),this._vertices=new Float32Array(20),this._handles=[],this._handles.push(W(()=>this.elementView.element.opacity,t=>this.opacity=t,D),W(()=>[this.elementView.coords],()=>{this.requestRender()},D),ee(()=>this.elementView.element.loaded,()=>{const t=this.elementView.element;this.ready(),t.type==="video"&&b(t.content)&&this._handles.push(te(t.content,"play",()=>this.requestRender()))},D)),e.element.load().catch(t=>{F.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new re("element-load-error","Element cannot be displayed",{element:e,error:t}))})}destroy(){this._handles.forEach(e=>e.remove()),this.texture=se(this.texture)}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const{context:t}=e,s=this.elementView.element.content;if(b(s)){const i=s instanceof HTMLImageElement,a=s instanceof HTMLVideoElement,n=i?s.naturalWidth:a?s.videoWidth:s.width,o=i?s.naturalHeight:a?s.videoHeight:s.height;this._updatePerspectiveTransform(n,o),this.texture?a&&!s.paused&&(this.texture.setData(s),this.requestRender(),(t.type===z.WEBGL2||M(n)&&M(o))&&this.texture.generateMipmap()):(this.texture=new Pe(t,{pixelFormat:Ge.RGBA,dataType:Ae.UNSIGNED_BYTE,samplingMode:qe.LINEAR,wrapMode:De.CLAMP_TO_EDGE,width:n,height:o,preMultiplyAlpha:!0},s),(t.type===z.WEBGL2||M(n)&&M(o))&&this.texture.generateMipmap(),a&&!s.paused&&this.requestRender())}super.beforeRender(e)}_createTransforms(){return null}updateDrawCoords(e,t){const s=this.elementView.coords;if(_(s))return;const[i,a,n,o]=s.rings[0],d=this._vertices,{x:l,y:h}=e,p=t!==0;p?d.set([a[0]-l,a[1]-h,i[0]-l,i[1]-h,n[0]-l,n[1]-h,o[0]-l,o[1]-h,o[0]-l,o[1]-h,a[0]+t-l,a[1]-h,a[0]+t-l,a[1]-h,i[0]+t-l,i[1]-h,n[0]+t-l,n[1]-h,o[0]+t-l,o[1]-h]):d.set([a[0]-l,a[1]-h,i[0]-l,i[1]-h,n[0]-l,n[1]-h,o[0]-l,o[1]-h]),this.isWrapAround=p}getVAO(e,t,s){if(_(this.elementView.coords))return null;const i=this._vertices;if(this._vao)this._geometryVbo.setData(i);else{this._geometryVbo=Q.createVertex(e,B.DYNAMIC_DRAW,i);const a=Q.createVertex(e,B.STATIC_DRAW,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]));this._vao=new Ie(e,s,t,{geometry:this._geometryVbo,tex:a})}return this._vao}_updatePerspectiveTransform(e,t){const s=this._vertices;be(g,[0,0,e,0,0,t,e,t],[s[0],s[1],s[4],s[5],s[2],s[3],s[6],s[7]]),ie(this.perspectiveTransform,g[6]/g[8]*e,g[7]/g[8]*t)}}class ze extends $e{constructor(){super(...arguments),this._localOrigin=ae(0,0),this._viewStateId=-1,this._dvsMat3=oe(),this.requiresDedicatedFBO=!1}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"overlay",brushes:[Ve.overlay],target:()=>this.children,drawPhase:Ce.MAP});return[...super.prepareRenderPasses(e),t]}_updateMatrices(e){const{state:t}=e,{id:s,size:i,pixelRatio:a,resolution:n,rotation:o,viewpoint:d,displayMat3:l}=t;if(this._viewStateId===s)return;const h=Math.PI/180*o,p=a*i[0],f=a*i[1],{x:S,y:w}=d.targetGeometry,C=ne(S,t.spatialReference);this._localOrigin.x=C,this._localOrigin.y=w;const $=n*p,R=n*f,m=le(this._dvsMat3);he(m,m,l),me(m,m,ce(p/2,f/2)),de(m,m,Le(p/$,-f/R,1)),pe(m,m,-h),this._viewStateId=s}_updateOverlays(e,t){const{state:s}=e,{rotation:i,spatialReference:a,worldScreenWidth:n,size:o,viewpoint:d}=s,l=this._localOrigin;let h=0;const p=ue(a);if(p&&a.isWrappable){const f=o[0],S=o[1],w=180/Math.PI*i,C=Math.abs(Math.cos(w)),$=Math.abs(Math.sin(w)),R=Math.round(f*C+S*$),[m,V]=p.valid,u=fe(a),{x:I,y:Y}=d.targetGeometry,J=[I,Y],G=[0,0];s.toScreen(G,J);const E=[0,0];let A;A=R>n?.5*n:.5*R;const L=Math.floor((I+.5*u)/u),K=m+L*u,X=V+L*u,q=[G[0]+A,0];s.toMap(E,q),E[0]>X&&(h=u),q[0]=G[0]-A,s.toMap(E,q),E[0]<K&&(h=-u);for(const x of t){const O=x.elementView.bounds;if(_(O))continue;const[U,,j]=O;U<m&&j>m?x.updateDrawCoords(l,u):j>V&&U<V?x.updateDrawCoords(l,-u):x.updateDrawCoords(l,h)}}else for(const f of t)f.updateDrawCoords(l,h)}}let y=class extends Ue(je){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this._debugGraphicsView=null,this.layer=null,this.elements=new ye}attach(){this.addAttachHandles([H(()=>this.layer.effectiveSource,"refresh",()=>{for(const r of this._tileStrategy.tiles)this._updateTile(r);this.requestUpdate()}),H(()=>this.layer.effectiveSource,"change",({element:r})=>this._elementUpdateHandler(r))]),this._overlayContainer=new ze,this.container.addChild(this._overlayContainer),this._fetchQueue=new _e({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(r,e)=>this._queryElements(r,e)}),this._tileStrategy=new ge({cachePolicy:"purge",resampling:!0,acquireTile:r=>this._acquireTile(r),releaseTile:r=>this._releaseTile(r),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate()}detach(){var r;this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear(),(r=this._debugGraphicsView)==null||r.destroy()}supportsSpatialReference(r){return!0}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}update(r){var e;this._tileStrategy.update(r),(e=this._debugGraphicsView)==null||e.update(r)}async hitTest(r,e){const t=[],s=r.normalize(),i=[s.x,s.y];for(const{projectedElement:{normalizedCoords:a,element:n}}of this._elementReferences.values())b(a)&&ve(a.rings,i)&&t.push({type:"media",element:n,layer:this.layer,mapPoint:r});return t.reverse()}canResume(){return this.layer.source!=null&&super.canResume()}async doRefresh(){this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(r=>this._updateTile(r))}_acquireTile(r){const e=new He(r.clone());return this._updateTile(e),e}_updateTile(r){this.updatingHandles.addPromise(this._fetchQueue.push(r.key).then(e=>{const[t,s]=r.setElements(e);this._referenceElements(r,t),this._dereferenceElements(r,s),this.requestUpdate()},e=>{we(e)||F.getLogger(this.declaredClass).error(e)}))}_releaseTile(r){this._fetchQueue.abort(r.key.id),r.elements&&this._dereferenceElements(r,r.elements),this.requestUpdate()}async _queryElements(r,e){const t=this.layer.effectiveSource;if(_(t))return[];this.view.featuresTilingScheme.getTileBounds(c,r,!0);const s=new Re({xmin:c[0],ymin:c[1],xmax:c[2],ymax:c[3],spatialReference:this.view.spatialReference});return t.queryElements(s,e)}_referenceElements(r,e){const t=this.layer.source;if(!_(t))for(const s of e)this._referenceElement(r,s)}_referenceElement(r,e){Ee(this._elementReferences,e.uid,()=>{const t=new k({element:e,spatialReference:this.view.spatialReference}),s=new We(t);return this._overlayContainer.addChild(s),this.elements.add(e),{tiles:new Set,projectedElement:t,overlay:s,debugGraphic:null}}).tiles.add(r)}_dereferenceElements(r,e){for(const t of e)this._dereferenceElement(r,t)}_dereferenceElement(r,e){var s;const t=this._elementReferences.get(e.uid);t.tiles.delete(r),t.tiles.size||(this._overlayContainer.removeChild(t.overlay),t.overlay.destroy(),t.projectedElement.destroy(),this._elementReferences.delete(e.uid),this.elements.remove(e),(s=this._debugGraphicsView)==null||s.graphics.remove(t.debugGraphic))}_elementUpdateHandler(r){var s;let e=this._elementReferences.get(r.uid);if(e){const i=e.projectedElement.normalizedCoords;if(_(i))return this._overlayContainer.removeChild(e.overlay),e.overlay.destroy(),e.projectedElement.destroy(),this._elementReferences.delete(r.uid),this.elements.remove(r),void((s=this._debugGraphicsView)==null?void 0:s.graphics.remove(e.debugGraphic));const a=[],n=[];for(const o of this._tileStrategy.tiles){const d=N(this.view.featuresTilingScheme,o,i);e.tiles.has(o)?d||n.push(o):d&&a.push(o)}for(const o of a)this._referenceElement(o,r);for(const o of n)this._dereferenceElement(o,r);return e=this._elementReferences.get(r.uid),void((e==null?void 0:e.debugGraphic)&&(e.debugGraphic.geometry=e.projectedElement.normalizedCoords,this._debugGraphicsView.graphicUpdateHandler({graphic:e.debugGraphic,property:"geometry"})))}const t=new k({element:r,spatialReference:this.view.spatialReference}).normalizedCoords;if(b(t))for(const i of this._tileStrategy.tiles)N(this.view.featuresTilingScheme,i,t)&&this._referenceElement(i,r)}};T([P()],y.prototype,"_fetchQueue",void 0),T([P()],y.prototype,"layer",void 0),T([P({readOnly:!0})],y.prototype,"elements",void 0),y=T([xe("esri.views.2d.layers.MediaLayerView2D")],y);const c=Me(),v={xmin:0,ymin:0,xmax:0,ymax:0};function N(r,e,t){return r.getTileBounds(c,e.key,!0),v.xmin=c[0],v.ymin=c[1],v.xmax=c[2],v.ymax=c[3],Te(v,t)}class He{constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0}setElements(e){const t=[],s=new Set(this.elements);this.elements=e;for(const i of e)s.has(i)?s.delete(i):t.push(i);return this.isReady=!0,[t,Array.from(s)]}destroy(){}}const Yt=y;export{Yt as default};
