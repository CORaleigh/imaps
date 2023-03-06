"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[3826],{71040:(t,e,i)=>{i.d(e,{y:()=>p});var s=i(27366),n=i(85015),a=i(92026),r=i(66978),l=i(49861),o=(i(25243),i(63780),i(69912)),u=i(78307);let p=class extends n.Z{constructor(t){super(t),this.constrainResult=t=>t,this._snapPoints=null,this._frameTask=null,this._abortController=null,this._stagedPoint=null,this._snap=(0,r.Ds)((async(t,e,i,s)=>{const n=this._frameTask;if((0,a.Wi)(n))return;const r=await n.schedule((()=>e.snap({...t,context:i,signal:s})),s);r.valid&&await n.schedule((()=>{this.stagedPoint=r.apply(),t!==this._snapPoints&&(0,a.pC)(this._snapPoints)&&(this.stagedPoint=e.update({...this._snapPoints,context:i}))}),s)}))}get stagedPoint(){return this._stagedPoint}set stagedPoint(t){this._stagedPoint=this.constrainResult(t)}initialize(){const t="3d"===this.view.type?this.view?.resourceController?.scheduler:null;this._frameTask=(0,a.pC)(t)?t.registerTask(u.T8.SNAPPING):u.sq}destroy(){this._abortController=(0,a.IM)(this._abortController),this._frameTask=(0,a.hw)(this._frameTask)}update(t,e,i){this._snapPoints=t;const{point:s,scenePoint:n}=t,a=e.update({point:s,scenePoint:n,context:i});return this.stagedPoint=a,a}async snap(t,e,i){const{point:s,scenePoint:n}=t;return this.stagedPoint=e.update({point:s,scenePoint:n,context:i}),this._snapPoints=t,(0,a.Wi)(this._abortController)&&(this._abortController=new AbortController),this._snap(t,e,i,this._abortController.signal)}async resnap(t,e){(0,a.Wi)(this._snapPoints)||await this.snap(this._snapPoints,t,e)}abort(){this._abortController=(0,a.IM)(this._abortController),this._snapPoints=null}};(0,s._)([(0,l.Cb)({constructOnly:!0})],p.prototype,"view",void 0),(0,s._)([(0,l.Cb)()],p.prototype,"stagedPoint",null),(0,s._)([(0,l.Cb)()],p.prototype,"constrainResult",void 0),(0,s._)([(0,l.Cb)()],p.prototype,"_stagedPoint",void 0),p=(0,s._)([(0,o.j)("esri.views.interactive.snapping.SnappingOperation")],p)},33826:(t,e,i)=>{i.r(e),i.d(e,{default:()=>ut});var s=i(27366),n=i(66978),a=i(68860),r=i(49861),l=(i(25243),i(63780)),o=i(69912),u=i(69407),p=i(80573),h=i(32718),d=i(92026),_=i(80885);let c=class extends p.Z{constructor(t){super(t),this.type="area-measurement",this.unit=null}set geometry(t){(0,d.Wi)(t)?this._set("geometry",null):(t.rings.length>1&&h.Z.getLogger(this.declaredClass).warn("Measuring polygons with multiple rings is not supported."),this._set("geometry",t.clone()))}get requiredPropertiesForEditing(){if((0,d.pC)(this.geometry)&&1===this.geometry.rings.length){const t=this.geometry.rings[0];if(t.length<=2||!(0,l.fS)(t[0],t[t.length-1]))return[null]}return[this.geometry]}clear(){this.geometry=null}};(0,s._)([(0,r.Cb)({type:["area-measurement"]})],c.prototype,"type",void 0),(0,s._)([(0,r.Cb)({value:null,type:_.Z})],c.prototype,"geometry",null),(0,s._)([(0,r.Cb)({type:a.fN,value:null})],c.prototype,"unit",void 0),(0,s._)([(0,r.Cb)({readOnly:!0})],c.prototype,"requiredPropertiesForEditing",null),c=(0,s._)([(0,o.j)("esri.analysis.AreaMeasurementAnalysis")],c);const g=c;var m=i(94172),y=i(77671),w=i(100),v=i(97942),b=i(61826),C=i(585),M=i(37818),P=i(48681),f=i(45134),V=i(51328),D=i(51995),S=i(70148),x=i(84652),O=i(17842),L=i(71353),k=i(30036);class T{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.screenPoint=t,this.result=e}}class A{constructor(t,e){this.scenePoint=t,this.mapPoint=e}}var I=i(62389),U=i(88153),H=i(54463),W=i(92853);class E{constructor(t){this.vertexManipulators=[],this._destroyed=!1,this._isManipulatorsOwner=!0,this._visible=!0,this._laserLine=null,this._cursorManipulator=null,this._listenerHandles=null,this._tempHandlePosition=(0,L.c)(),this._defaultStyle={laserLineGlowColor:D.Z.toUnitRGB((0,S.e9)()),laserLineGlowWidth:8,laserLineGlowFalloff:8,laserLineInnerColor:D.Z.toUnitRGB((0,S.RN)()),laserLineInnerWidth:1,laserLineGlobalAlpha:.75,laserLineEnabled:!0,handleColor:D.Z.toUnitRGB((0,S.e9)()),handleOpacity:.5,handleRadius:5,handleRadiusHovered:10,handleRadiusMouse:10,handleRadiusTouch:25};const{analysisViewData:e,manipulators:i,toolState:s,view:n,visible:a}=t;this._analysisViewData=e,this._toolState=s,null!=i?(this._manipulators=i,this._isManipulatorsOwner=!1):this._manipulators=new W.D,this._view=n;const r=this._style={...this._defaultStyle,...(0,x.d9)(t.style)};this._intersector=(0,U.Z8)(n.state.viewingMode),this._intersector.options.store=H.eC.MIN;const l=(0,k.aD)(n,r.handleColor,r.handleOpacity);l.available=!1,l.radius=r.handleRadius,l.interactive=!1,this._manipulators.add(l),this._cursorManipulator=l,this._laserLine=new I.W({view:n,attached:!0,style:{glowColor:r.laserLineGlowColor,glowWidth:r.laserLineGlowWidth,glowFalloff:r.laserLineGlowFalloff,innerColor:r.laserLineInnerColor,innerWidth:r.laserLineInnerWidth,globalAlpha:r.laserLineGlobalAlpha}}),this._updateVisibility(a||!0)}destroy(){this._listenerHandles=(0,d.SC)(this._listenerHandles),this._isManipulatorsOwner?this._manipulators=(0,d.SC)(this._manipulators):this._manipulators=null,this._laserLine=(0,d.SC)(this._laserLine),this._destroyed=!0}get destroyed(){return this._destroyed}get visible(){return this._visible}set visible(t){t?this.show():this.hide()}get testData(){const t=this._laserLine.testData;return{laserLineRenderer:(0,d.pC)(t)?{heightManifoldEnabled:t.heightManifoldEnabled,heightManifoldTarget:t.heightManifoldTarget,pointDistanceEnabled:t.pointDistanceEnabled,pointDistanceOrigin:t.pointDistanceOrigin,pointDistanceTarget:t.pointDistanceTarget,lineVerticalPlaneEnabled:t.lineVerticalPlaneEnabled}:{heightManifoldEnabled:!1,heightManifoldTarget:null,pointDistanceEnabled:!1,pointDistanceOrigin:null,pointDistanceTarget:null,lineVerticalPlaneEnabled:!1}}}show(){this._setVisibility(!0)}hide(){this._setVisibility(!1)}_setVisibility(t){this._destroyed||this._visible===t||this._updateVisibility(t)}_updateVisibility(t){this._visible=t,this._laserLine.visible=t,t?(this._initializeListeners(),this._updateAll()):(this._destroyListeners(),this.vertexManipulators.forEach((t=>this._removeVertexManipulator(t))),this.vertexManipulators=[],this._view.cursor=null)}vertexHandleAt(t,e){const i=this._manipulators.intersect(t,e);return(0,d.pC)(i)?i.metadata:null}pick(t){const e=this._view.spatialReference,i=(0,O.md)(t.screenPoint);this._view.sceneIntersectionHelper.intersectToolIntersectorScreen(i,this._intersector);const s=this._intersector.results.min,n=(0,L.c)();if(!s.getIntersectionPoint(n))return null;const a=this._view.renderCoordsHelper.fromRenderCoords(n,e);return(0,d.Wi)(a)?null:new A(n,a)}_updateAll(){this._visible&&(this._updateVertexManipulators(),this._updateLaserLine())}_createVertexManipulator(){const t=(0,k.aD)(this._view,this._style.handleColor,this._style.handleOpacity);return t.radius=this._style.handleRadius,this._manipulators.add(t),t}_removeVertexManipulator(t){this._manipulators.remove(t)}_updateVertexManipulators(){const{viewData:t}=this._analysisViewData,e=this._analysisViewData.path?this._analysisViewData.path.vertices:[],i=this.vertexManipulators;(function(t,e,i,s){for(;t.length<e;)t.push(i());if(s)for(;t.length>e;)s(t.pop());else t.length=e})(i,e.length,(()=>this._createVertexManipulator()),(t=>this._removeVertexManipulator(t))),i.forEach(((i,s)=>{i.metadata=e[s],i.renderLocation=t.positionsRenderCoords[s],i.cursor=0===s&&"drawing"===this._toolState.polygonState?"crosshair":null})),"drawing"===this._toolState.polygonState&&(0,d.pC)(this._analysisViewData.cursorPoint)?(this._cursorManipulator.available=!0,this._cursorManipulator.location=this._analysisViewData.cursorPoint):this._cursorManipulator.available=!1}_getFocusPoint(){const{lastDraggedVertex:t}=this._analysisViewData;switch(this._toolState.polygonState){case"drawing":return(0,d.pC)(this._analysisViewData.cursorPoint)?this._analysisViewData.cursorPoint:(0,d.pC)(t)?this._analysisViewData.path.getVertexPositionAsPoint(t):(0,d.Wg)(this._analysisViewData.path.lastPoint);case"editing":return(0,d.pC)(t)?this._analysisViewData.path.getVertexPositionAsPoint(t):null;default:return this._analysisViewData.cursorPoint}}_updateLaserLine(){const t=this._style.laserLineEnabled&&"measured"!==this._toolState.polygonState&&this._toolState.active,e=this._getFocusPoint();if(t&&(0,d.pC)(e)){const t=this._tempHandlePosition;this._view.renderCoordsHelper.toRenderCoords(e,t),this._laserLine.heightManifoldTarget=t}else this._laserLine.heightManifoldTarget=null}_initializeListeners(){this._listenerHandles=new w.Z,this._listenerHandles.add([(0,m.YP)((()=>this._toolState.polygonState),(()=>this._updateLaserLine())),(0,m.YP)((()=>this._analysisViewData.viewData),(()=>this._updateAll()),m.Z_),(0,m.YP)((()=>({lastDraggedVertex:this._analysisViewData.lastDraggedVertex,cursorPoint:this._analysisViewData.cursorPoint})),(()=>this._updateLaserLine())),(0,m.YP)((()=>this._toolState.active),(()=>this._updateAll()))])}_destroyListeners(){this._listenerHandles=(0,d.SC)(this._listenerHandles)}}var R=i(86509),$=i(14813),G=i(74229),Z=i(84954),N=i(87268),z=i(65367),Y=i(34019),F=i(80151),j=i(71040),B=i(64674),X=i(72612);let q=class extends R.f{constructor(t){super(t),this._handles=new w.Z,this._updatingHandles=new b.t,this.polygonState="initial",this.manipulators=new W.D,this._getSnappingContext=(0,v.H)((t=>new Y.N({elevationInfo:{mode:"absolute-height",offset:0},pointer:t,editGeometryOperations:new N.c(new Z.XE("point",(0,$.Y6)(!0,!1,this.view.spatialReference))),visualizer:new f._})))}initialize(){const{view:t,analysisViewData:e,manipulators:i,visible:s}=this;this.measurementView=new E({view:t,analysisViewData:e,toolState:this,manipulators:i,visible:s});const a=(0,z.u)(t);this._snappingManagerResult=a,this._handles.add(a),this._snappingOperation=new j.y({view:t}),this._updatingHandles.add((()=>this.stagedPoint),(t=>{this.analysisViewData.cursorPoint=(0,d.pC)(t)?(0,M.WG)(t,new C.Z):null}),m.tX),(0,B.Ob)(this,(()=>{const t=(0,d.Pt)(this.view.inputManager.latestPointerType,"mouse"),e=this._getSnappingContext(t);this._updatingHandles.addPromise((0,n.R8)(this._snappingOperation.resnap(this._snappingManager,e)))})),this._setupManipulators(),this._handles.add((0,m.YP)((()=>this.state),(t=>{"measured"===t&&this.finishToolCreation()}),m.tX))}destroy(){this.measurementView.destroy(),this._set("measurementView",null),this._handles=(0,d.SC)(this._handles),this._updatingHandles=(0,d.SC)(this._updatingHandles)}get _snappingManager(){return this._snappingManagerResult.snappingManager}get state(){return 0===this.analysisViewData.path.numVertices?"ready":this.analysisViewData.validMeasurement&&"editing"!==this.polygonState?"measured":"measuring"}get cursor(){return"ready"===this.state||"drawing"===this.polygonState?"crosshair":null}get updating(){return this._updatingHandles.updating||this._snappingManager.updating}get stagedPoint(){return this._snappingOperation.stagedPoint}set stagedPoint(t){this._snappingOperation.stagedPoint=t}get snappingOptions(){return this._snappingManager.options}finishMeasurement(){const{path:t}=this.analysisViewData;t.numVertices<3?(t.clear(),this.polygonState="initial"):(t.close(),this.polygonState="measured"),this._resetSnappingState()}onShow(){this.measurementView.show()}onHide(){this.measurementView.hide()}onDeactivate(){this._resetSnappingState()}onInputEvent(t){switch(t.type){case"immediate-double-click":this._handleImmediateDoubleClick(t);break;case"immediate-click":this._handleImmediateClick(t);break;case"pointer-move":this._handlePointerMove(t);break;case"drag":this._handleDrag(t);break;case"key-down":this._handleKeyDown(t)}}_setupManipulators(){const t=t=>t.events.on("grab-changed",(()=>{if(this.analysisViewData.validMeasurement){const t=this.manipulators.some((t=>t.manipulator.grabbing));this.polygonState=t?"editing":"measured"}})),e=e=>{this._handles.add([(0,G.Xd)(e,((t,e,i,s)=>{const n=(0,V.J4)(t),a=t.metadata,r=this._snappingManager,l=this._getSnappingContext(s),o=this._updatingHandles,{snappingStep:u,cancelSnapping:p}=(0,F.W)({snappingManager:r,snappingContext:l,updatingHandles:o});i=i.next(n).next((e=>(this.analysisViewData.lastDraggedVertex=null,this.analysisViewData.path.setVertexPosition(a,h),t.location=h,e))).next(p),e.next(n).next((0,V.gv)(this.view)).next(...u).next((e=>{t.location=e.mapEnd,this.analysisViewData.lastDraggedVertex="end"===e.action?null:a,this.analysisViewData.path.setVertexPosition(a,(0,M.WG)(e.mapEnd))}));const h=(0,M.WG)(this.analysisViewData.path.getVertexPositionAsPoint(a))})),t(e)],e)};this.manipulators.forEach((t=>{let{manipulator:i}=t;e(i)})),this._handles.add([this.manipulators.on("after-add",(t=>{let{item:{manipulator:i}}=t;e(i)})),this.manipulators.on("after-remove",(t=>{let{item:{manipulator:e}}=t;return this._handles.remove(e)}))])}_handleImmediateDoubleClick(t){(0,P.y1)(t)&&("drawing"===this.polygonState&&this.finishMeasurement(),t.stopPropagation())}_handleDrag(t){"editing"===this.polygonState&&t.stopPropagation()}_handleImmediateClick(t){if(!(0,P.y1)(t))return;const e=(0,X.vT)(t),{pointerType:i}=t;if(this.active)switch(this.polygonState){case"initial":if(this._addVertexAt(e,i))return this.stagedPoint=null,this.polygonState="drawing",void t.stopPropagation();break;case"drawing":{const s=this.measurementView.vertexHandleAt(e,i);if((0,d.Wi)(s)){if(this._addVertexAt(e,i))return this.stagedPoint=null,void t.stopPropagation()}else 0===s.index&&(this.finishMeasurement(),t.stopPropagation());break}}"mouse"===t.pointerType&&this._hoverAt(e)}_handlePointerMove(t){if("mouse"===t.pointerType){const e=(0,X.vT)(t);this._hoverAt(e)}}_handleKeyDown(t){"Enter"===t.key&&"drawing"===this.polygonState&&(this.finishMeasurement(),t.stopPropagation())}_hoverAt(t){const{polygonState:e}=this;if(!this.active||"initial"!==e&&"drawing"!==e)this.stagedPoint=null;else{const e=this._pick(t);if((0,d.pC)(e)&&(0,d.pC)(e.mapPoint)){const t=this._getSnappingContext("mouse");this._updatingHandles.addPromise((0,n.R8)(this._snappingOperation.snap({point:e.mapPoint},this._snappingManager,t)))}}}_addVertexAt(t,e){const i=this._pick(t);if((0,d.pC)(i)&&(0,d.pC)(i.mapPoint)){const{mapPoint:t}=i,s=this._getSnappingContext(e),n=this._snappingOperation.update({point:t},this._snappingManager,s),a=(0,M.WG)(n,new C.Z);return this.analysisViewData.path.add(a),!0}return!1}_pick(t){const e=new T(t);return this.measurementView.pick(e)}_resetSnappingState(){this._snappingManager.doneSnapping(),this._snappingOperation.abort(),this._snappingOperation.stagedPoint=null}get test(){return{snappingManager:this._snappingManager}}};(0,s._)([(0,r.Cb)({readOnly:!0})],q.prototype,"state",null),(0,s._)([(0,r.Cb)()],q.prototype,"polygonState",void 0),(0,s._)([(0,r.Cb)({readOnly:!0})],q.prototype,"cursor",null),(0,s._)([(0,r.Cb)()],q.prototype,"measurementView",void 0),(0,s._)([(0,r.Cb)({constructOnly:!0})],q.prototype,"view",void 0),(0,s._)([(0,r.Cb)({constructOnly:!0})],q.prototype,"analysis",void 0),(0,s._)([(0,r.Cb)({constructOnly:!0})],q.prototype,"analysisViewData",void 0),(0,s._)([(0,r.Cb)({readOnly:!0})],q.prototype,"manipulators",void 0),(0,s._)([(0,r.Cb)()],q.prototype,"updating",null),(0,s._)([(0,r.Cb)()],q.prototype,"stagedPoint",null),(0,s._)([(0,r.Cb)()],q.prototype,"snappingOptions",null),q=(0,s._)([(0,o.j)("esri.views.3d.interactive.measurementTools.areaMeasurement3D.AreaMeasurement3DTool")],q);const K=q;var J=i(40085);let Q=class extends J.O{constructor(t){super(t),this.analysis=null,this.supportedViewType="3d",this.unsupportedErrorMessage="AreaMeasurement3DViewModel is only supported in 3D views.",this._userUnitOptions=null,this._userUnit=null}initialize(){this.addHandles((0,m.YP)((()=>({analysis:this.analysis,unit:this.unit})),(t=>{let{analysis:e,unit:i}=t;(0,d.pC)(e)&&(e.unit=i)}),m.tX))}get state(){return this.disabled||!this.ready?"disabled":(0,d.Wi)(this.tool)?"ready":this.tool.state}get measurement(){if((0,d.Wi)(this.tool)||this.disabled||this.tool.destroyed)return null;const{analysisView:t}=this;if((0,d.Wi)(t))return null;const e=t.analysisVisualization,i=e.viewData,s=i.measurementData,n=t.validMeasurement,a="euclidean"===i.mode,r=0===(a?s.intersectingSegments:s.geodesicIntersectingSegments).size,l=r?n?"available":"unavailable":"invalid";return{mode:a?"euclidean":"geodesic",area:{text:r&&n?e.areaLabel:null,state:l},perimeterLength:{text:r&&n?e.perimeterLengthLabel:null,state:l}}}set unitOptions(t){this._userUnitOptions=t,this._set("unitOptions",this._filteredOrAllUnits(this._userUnitOptions))}get unitOptions(){return this._filteredOrAllUnits(this._userUnitOptions)}set unit(t){this._userUnit=t?this._findSelectableUnit(t,this._userUnit):null}get unit(){return(0,d.pC)(this._userUnit)?(this._userUnit=this._findSelectableUnit(this._userUnit,this.defaultUnit),this._userUnit):this._findSelectableUnit(this.defaultUnit)}constructAnalysis(){return new g}constructTool(){return new K({view:(0,d.Wg)(this.view),analysis:this.analysis,analysisViewData:(0,d.Wg)(this.analysisView),visible:this.visible})}_findSelectableUnit(t,e){const{unitOptions:i}=this;return i.includes(t)?t:(0,d.pC)(e)?this._findSelectableUnit(e):i[0]}_filteredOrAllUnits(t){if((0,d.Wi)(t))return a.fN.slice();const e=t.filter((t=>a.fN.includes(t)));return 0===e.length?a.fN.slice():e}};(0,s._)([(0,r.Cb)({type:g})],Q.prototype,"analysis",void 0),(0,s._)([(0,r.Cb)({readOnly:!0})],Q.prototype,"state",null),(0,s._)([(0,r.Cb)({readOnly:!0})],Q.prototype,"measurement",null),(0,s._)([(0,r.Cb)()],Q.prototype,"unitOptions",null),(0,s._)([(0,r.Cb)()],Q.prototype,"unit",null),(0,s._)([(0,r.Cb)(y.Y)],Q.prototype,"defaultUnit",void 0),(0,s._)([(0,r.Cb)()],Q.prototype,"_userUnit",void 0),Q=(0,s._)([(0,o.j)("esri.widgets.AreaMeasurement3D.AreaMeasurement3DViewModel")],Q);const tt=Q;var et=i(78088),it=i(80532),st=i(67005);i(80975);const nt="esri-area-measurement-3d",at=`${nt}__measurement`,rt=`${nt}__units`,lt={buttonDisabled:"esri-button--disabled",base:`${nt} esri-widget esri-widget--panel`,container:`${nt}__container`,hint:`${nt}__hint`,hintText:`${nt}__hint-text`,panelError:`${nt}__panel--error`,measurement:at,measurementItem:`${at}-item`,measurementItemDisabled:`${at}-item--disabled`,measurementItemTitle:`${at}-item-title`,measurementItemValue:`${at}-item-value`,settings:`${nt}__settings`,units:rt,unitsLabel:`${rt}-label`,unitsSelect:`${rt}-select esri-select`,unitsSelectWrapper:`${rt}-select-wrapper`,actionSection:`${nt}__actions`,newMeasurementButton:`${nt}__clear-button esri-button esri-button--primary`,widgetIcon:"esri-icon-measure-area"};let ot=class extends u.Z{constructor(t,e){super(t,e),this.iconClass=lt.widgetIcon,this.viewModel=new tt}get view(){return this.viewModel.view}set view(t){this.viewModel.view=t}get visible(){return this.viewModel.visible}set visible(t){this.viewModel.visible=t}get active(){return this.viewModel.active}get analysis(){return this.viewModel.analysis}set analysis(t){this.viewModel.analysis=t}get label(){return this.messages?.widgetLabel??""}set label(t){this._overrideIfSome("label",t)}get unitOptions(){return this.viewModel.unitOptions}set unitOptions(t){this.viewModel.unitOptions=t}get unit(){return this.viewModel.unit}set unit(t){this.viewModel.unit=t}render(){const{messages:t,messagesUnits:e}=this,{supported:i,active:s,measurement:n,state:r,unit:l}=this.viewModel,o="disabled"===r,u="measuring"===r||"measured"===r,p=s&&"ready"===r?(0,st.u)("section",{key:"esri-area-measurement-3d__hint",class:lt.hint},(0,st.u)("p",{class:lt.hintText},t.hint),(0,st.u)("p",{class:lt.hintText},t.snappingDisablePromptAlternate)):null,h=i?null:(0,st.u)("section",{key:"esri-area-measurement-3d__unsupported",class:lt.panelError},(0,st.u)("p",null,t.unsupported)),d=(e,i,s)=>{switch(i.state){case"available":return(0,st.u)("div",{key:`${s}-enabled`,class:lt.measurementItem},(0,st.u)("span",{class:lt.measurementItemTitle},e),(0,st.u)("span",{"aria-live":"polite",class:lt.measurementItemValue},i.text));case"unavailable":return(0,st.u)("div",{key:`${s}-disabled`,class:this.classes(lt.measurementItem,lt.measurementItemDisabled)},(0,st.u)("span",{class:lt.measurementItemTitle},e));case"invalid":return(0,st.u)("div",{key:`${s}-enabled`,class:lt.measurementItem},(0,st.u)("span",{class:lt.measurementItemTitle},e),(0,st.u)("span",{class:lt.measurementItemValue},t.notApplicable))}},_=u&&n?(0,st.u)("section",{key:"esri-area-measurement-3d__measurement",class:lt.measurement},d(t.area,n.area,"area"),d(t.perimeterLength,n.perimeterLength,"perimeter-length")):null,c=`${this.id}__units`,g=(0,st.u)("label",{class:lt.unitsLabel,for:c},t.unit),m=(0,st.u)("div",{class:lt.unitsSelectWrapper},(0,st.u)("select",{class:lt.unitsSelect,id:c,onchange:this._changeUnit,bind:this,value:l},this.viewModel.unitOptions.map((t=>(0,st.u)("option",{key:t,value:t},(0,a.ZO)(t)?e.systems[t]:e.units[t]?.pluralCapitalized))))),y=u?(0,st.u)("section",{key:"esri-area-measurement-3d__units",class:lt.units},g,m):null,w=u?(0,st.u)("div",{key:"settings",class:lt.settings},y):null,v=!i||s&&!u?null:(0,st.u)("div",{class:lt.actionSection},(0,st.u)("button",{bind:this,class:this.classes(lt.newMeasurementButton,o&&lt.buttonDisabled),disabled:o,onclick:this._newMeasurement,type:"button"},t.newMeasurement)),b=this.visible?(0,st.u)("div",{class:lt.container},h,p,w,_,v):null;return(0,st.u)("div",{"aria-label":t.widgetLabel,key:this,class:lt.base,role:"presentation"},b)}_newMeasurement(){(0,n.R8)(this.viewModel.start())}_changeUnit(t){const e=t.target,i=e.options[e.selectedIndex];i&&(this.unit=i.value)}};(0,s._)([(0,r.Cb)()],ot.prototype,"view",null),(0,s._)([(0,r.Cb)()],ot.prototype,"visible",null),(0,s._)([(0,r.Cb)()],ot.prototype,"active",null),(0,s._)([(0,r.Cb)({constructOnly:!0,nonNullable:!0})],ot.prototype,"analysis",null),(0,s._)([(0,r.Cb)()],ot.prototype,"iconClass",void 0),(0,s._)([(0,r.Cb)()],ot.prototype,"label",null),(0,s._)([(0,r.Cb)(),(0,it.H)("esri/widgets/AreaMeasurement3D/t9n/AreaMeasurement3D")],ot.prototype,"messages",void 0),(0,s._)([(0,r.Cb)(),(0,it.H)("esri/core/t9n/Units")],ot.prototype,"messagesUnits",void 0),(0,s._)([(0,r.Cb)()],ot.prototype,"uiStrings",void 0),(0,s._)([(0,r.Cb)({type:tt})],ot.prototype,"viewModel",void 0),(0,s._)([(0,r.Cb)()],ot.prototype,"unitOptions",null),(0,s._)([(0,r.Cb)()],ot.prototype,"unit",null),(0,s._)([(0,et.h)()],ot.prototype,"_newMeasurement",null),(0,s._)([(0,et.h)()],ot.prototype,"_changeUnit",null),ot=(0,s._)([(0,o.j)("esri.widgets.AreaMeasurement3D")],ot);const ut=ot}}]);
//# sourceMappingURL=3826.d23e321c.chunk.js.map