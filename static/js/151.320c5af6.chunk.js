(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[151,164],{1012:function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return E}));var s=i(81),a=(i(141),i(123)),r=i(117),o=i(87),n=i(85),c=i(109),h=i(83),l=(i(84),i(79),i(80),i(82)),p=i(451),u=i(537),d=i(747);class b{constructor(t,e,i,s,a){this.graphic=t,this.index=e,this.x=i,this.y=s,this.viewEvent=a,this.type="graphic-click"}}class y{constructor(t,e,i,s,a){this.graphic=t,this.index=e,this.x=i,this.y=s,this.viewEvent=a,this.type="graphic-double-click"}}class v{constructor(t,e,i,s,a,r,o,n,c,h){this.graphic=t,this.allGraphics=e,this.index=i,this.x=s,this.y=a,this.dx=r,this.dy=o,this.totalDx=n,this.totalDy=c,this.viewEvent=h,this.defaultPrevented=!1,this.type="graphic-move-start"}preventDefault(){this.defaultPrevented=!0}}class g{constructor(t,e,i,s,a,r,o,n,c,h){this.graphic=t,this.allGraphics=e,this.index=i,this.x=s,this.y=a,this.dx=r,this.dy=o,this.totalDx=n,this.totalDy=c,this.viewEvent=h,this.defaultPrevented=!1,this.type="graphic-move"}preventDefault(){this.defaultPrevented=!0}}class f{constructor(t,e,i,s,a,r,o,n,c,h){this.graphic=t,this.allGraphics=e,this.index=i,this.x=s,this.y=a,this.dx=r,this.dy=o,this.totalDx=n,this.totalDy=c,this.viewEvent=h,this.defaultPrevented=!1,this.type="graphic-move-stop"}preventDefault(){this.defaultPrevented=!0}}class m{constructor(t,e,i,s,a){this.graphic=t,this.index=e,this.x=i,this.y=s,this.viewEvent=a,this.type="graphic-pointer-over"}}class _{constructor(t,e,i,s,a){this.graphic=t,this.index=e,this.x=i,this.y=s,this.viewEvent=a,this.type="graphic-pointer-out"}}class G{constructor(t,e,i,s,a){this.graphic=t,this.index=e,this.x=i,this.y=s,this.viewEvent=a,this.type="graphic-pointer-down"}}class O{constructor(t,e,i,s,a){this.graphic=t,this.index=e,this.x=i,this.y=s,this.viewEvent=a,this.type="graphic-pointer-up"}}var x=i(388),w=i(658),j=i(450),S=i(289),k=i(233),M=i(223);let C=class extends a.a.EventedAccessor{constructor(t){super(t),this._activeGraphic=null,this._indicators=[],this._dragEvent=null,this._handles=new r.a,this._hoverGraphic=null,this._initialDragGeometry=null,this._viewHandles=new r.a,this._manipulators=[],this.type="graphic-mover",this.callbacks={onGraphicClick(){},onGraphicDoubleClick(){},onGraphicMoveStart(){},onGraphicMove(){},onGraphicMoveStop(){},onGraphicPointerOver(){},onGraphicPointerOut(){},onGraphicPointerDown(){},onGraphicPointerUp(){}},this.enableMoveAllGraphics=!1,this.graphics=[],this.indicatorsEnabled=!0,this.layer=new p.a({listMode:"hide",internal:!0,title:"GraphicMover highlight layer"}),this.view=null}initialize(){Object(d.a)(this.view,this.layer),this.refresh(),this._handles.add([Object(c.d)(this,["graphics","graphics.length"],(()=>this.refresh())),Object(c.j)(this,"view.ready",(()=>{this._viewHandles.add([this.view.on("immediate-click",(t=>this._clickHandler(t)),x.b.TOOL),this.view.on("double-click",(t=>this._doubleClickHandler(t)),x.b.TOOL),this.view.on("pointer-down",(t=>this._pointerDownHandler(t)),x.b.TOOL),this.view.on("pointer-move",(t=>this._pointerMoveHandler(t)),x.b.TOOL),this.view.on("pointer-up",(t=>this._pointerUpHandler(t)),x.b.TOOL),this.view.on("drag",(t=>this._dragHandler(t)),x.b.TOOL),this.view.on("key-down",(t=>this._keyDownHandler(t)),x.b.TOOL)])}))])}destroy(){var t;this._removeIndicators(),null==(t=this.view.map)||t.remove(this.layer),this.layer.destroy(),this.reset(),this._manipulators.forEach((t=>t.destroy())),this._manipulators=null,this._handles=Object(n.e)(this._handles),this._viewHandles=Object(n.e)(this._viewHandles)}get state(){const t=!!this.get("view.ready"),e=!!this.get("graphics.length"),i=this._activeGraphic;return t&&e?i?"moving":"active":t?"ready":"disabled"}refresh(){this._setUpIndicators(),this._setUpManipulators()}reset(){this._activeGraphic=null,this._hoverGraphic=null,this._dragEvent=null}updateGeometry(t,e){const i=this.graphics[t];i&&(i.set("geometry",e),this._setUpIndicators())}_clickHandler(t){const e=this._findTargetGraphic(Object(j.a)(t));if(e){const i=new b(e,this.graphics.indexOf(e),t.x,t.y,t);this.emit("graphic-click",i),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(i)}}_doubleClickHandler(t){const e=this._findTargetGraphic(Object(j.a)(t));if(e){const i=new y(e,this.graphics.indexOf(e),t.x,t.y,t);this.emit("graphic-double-click",i),this.callbacks.onGraphicDoubleClick&&this.callbacks.onGraphicDoubleClick(i)}}_pointerDownHandler(t){const e=this._findTargetGraphic(Object(j.a)(t));if(e){this._activeGraphic=e;const{x:i,y:s}=t,a=new G(e,this.graphics.indexOf(e),i,s,t);this.emit("graphic-pointer-down",a),this.callbacks.onGraphicPointerDown&&this.callbacks.onGraphicPointerDown(a)}else this._activeGraphic=null}_pointerUpHandler(t){if(this._activeGraphic){const{x:e,y:i}=t,s=this.graphics.indexOf(this._activeGraphic),a=new O(this._activeGraphic,s,e,i,t);this.emit("graphic-pointer-up",a),this.callbacks.onGraphicPointerUp&&this.callbacks.onGraphicPointerUp(a)}}_pointerMoveHandler(t){if(this._dragEvent)return;const e=this._findTargetGraphic(Object(j.a)(t));if(e){const{x:i,y:s}=t;if(this._hoverGraphic){if(this._hoverGraphic===e)return;const a=this.graphics.indexOf(this._hoverGraphic),r=new _(this.graphics[a],a,i,s,t);this._hoverGraphic=null,this.emit("graphic-pointer-out",r),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(r)}const a=this.graphics.indexOf(e),r=new m(e,a,i,s,t);return this._hoverGraphic=e,this.emit("graphic-pointer-over",r),void(this.callbacks.onGraphicPointerOver&&this.callbacks.onGraphicPointerOver(r))}if(this._hoverGraphic){const{x:e,y:i}=t,s=this.graphics.indexOf(this._hoverGraphic),a=new _(this.graphics[s],s,e,i,t);this._hoverGraphic=null,this.emit("graphic-pointer-out",a),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(a)}}_dragHandler(t){if("start"!==t.action&&!this._dragEvent||!this._activeGraphic||!this._activeGraphic.geometry)return;"start"===t.action&&this._removeIndicators(),t.stopPropagation();const{action:e,x:i,y:s}=t,a=this.graphics.indexOf(this._activeGraphic),r=this._activeGraphic.geometry,n=this._dragEvent?i-this._dragEvent.x:0,c=this._dragEvent?s-this._dragEvent.y:0,h=i-t.origin.x,l=s-t.origin.y,p=Object(u.a)(r,n,c,this.view);if(this._activeGraphic.geometry=p,this.enableMoveAllGraphics&&this.graphics.forEach((t=>{t!==this._activeGraphic&&(t.geometry=Object(u.a)(t.geometry,n,c,this.view))})),this._dragEvent=t,"start"===e){this._initialDragGeometry=Object(o.a)(r);const e=new v(this._activeGraphic,this.graphics,a,i,s,n,c,h,l,t);this.emit("graphic-move-start",e),this.callbacks.onGraphicMoveStart&&this.callbacks.onGraphicMoveStart(e),e.defaultPrevented&&this._activeGraphic.set("geometry",r)}else if("update"===e){const e=new g(this._activeGraphic,this.graphics,a,i,s,n,c,h,l,t);this.emit("graphic-move",e),this.callbacks.onGraphicMove&&this.callbacks.onGraphicMove(e),e.defaultPrevented&&(this._activeGraphic.geometry=r)}else{const e=new f(this._activeGraphic,this.graphics,a,i,s,n,c,h,l,t);this._dragEvent=null,this._activeGraphic=null,this._setUpIndicators(),this.emit("graphic-move-stop",e),this.callbacks.onGraphicMoveStop&&this.callbacks.onGraphicMoveStop(e),e.defaultPrevented&&(this.graphics[a].set("geometry",this._initialDragGeometry),this._setUpIndicators()),this._initialDragGeometry=null}}_keyDownHandler(t){"a"!==t.key&&"d"!==t.key&&"n"!==t.key||"moving"!==this.state||t.stopPropagation()}_findTargetGraphic(t){let e=null,i=Number.MAX_VALUE;return this._manipulators.forEach((s=>{const a=s.intersectionDistance(t);Object(n.k)(a)&&a<i&&(i=a,e=s.graphic)})),e}_setUpManipulators(){const{graphics:t,view:e}=this;this._manipulators.forEach((t=>t.destroy())),this._manipulators=null!=t&&t.length?t.map((t=>new w.a({graphic:t,view:e}))):[]}_setUpIndicators(){var t;this._removeIndicators(),this.indicatorsEnabled&&(this._indicators=(null==(t=this.graphics)?void 0:t.map((t=>{const e=t.clone();return e.symbol=this._getSymbolForIndicator(t),e})))||[],this.layer.addMany(this._indicators))}_removeIndicators(){this._indicators.length&&(this.layer.removeMany(this._indicators),this._indicators.forEach((t=>t.destroy())),this._indicators=[])}_getSymbolForIndicator(t){if(Object(n.j)(t.symbol))return null;switch(t.symbol.type){case"cim":return new S.a({style:"circle",size:12,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}});case"picture-marker":{const{xoffset:e,yoffset:i,height:s,width:a}=t.symbol,r=s===a?a:Math.max(s,a);return new S.a({xoffset:e,yoffset:i,size:r,style:"square",color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}case"simple-marker":{const{xoffset:e,yoffset:i,size:s,style:a}=t.symbol;return new S.a({xoffset:e,yoffset:i,style:"circle"===a?"circle":"square",size:s+2,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}case"simple-fill":return new M.a({color:[0,0,0,0],outline:{style:"dash",color:[255,127,0,1],width:1}});case"simple-line":return new k.a({color:[255,127,0,1],style:"dash",width:1});case"text":{const{xoffset:e,yoffset:i}=t.symbol;return new S.a({xoffset:e,yoffset:i,size:12,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}default:return null}}};Object(s.a)([Object(h.b)()],C.prototype,"_activeGraphic",void 0),Object(s.a)([Object(h.b)({readOnly:!0})],C.prototype,"type",void 0),Object(s.a)([Object(h.b)()],C.prototype,"callbacks",void 0),Object(s.a)([Object(h.b)()],C.prototype,"enableMoveAllGraphics",void 0),Object(s.a)([Object(h.b)()],C.prototype,"graphics",void 0),Object(s.a)([Object(h.b)()],C.prototype,"indicatorsEnabled",void 0),Object(s.a)([Object(h.b)()],C.prototype,"layer",void 0),Object(s.a)([Object(h.b)({readOnly:!0})],C.prototype,"state",null),Object(s.a)([Object(h.b)()],C.prototype,"view",void 0),C=Object(s.a)([Object(l.a)("esri.views.draw.support.GraphicMover")],C);var E=C},1362:function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return N}));var s=i(81),a=(i(98),i(118)),r=i(123),o=i(117),n=i(85),c=i(109),h=i(83),l=(i(79),i(84),i(80),i(82)),p=i(125),u=i(198),d=i(258),b=i(124),y=i(132),v=i(110),g=i(199);function f(t){let e=0,i=0;const s=t.length;let a,r=t[i];for(i=0;i<s-1;i++)a=t[i+1],e+=(a[0]-r[0])*(a[1]+r[1]),r=a;return e>=0}function m(t,e,i,s){const a=[];for(const r of t){const t=r.slice(0);a.push(t);const o=e*(r[0]-s.x)-i*(r[1]-s.y)+s.x,n=i*(r[0]-s.x)+e*(r[1]-s.y)+s.y;t[0]=o,t[1]=n}return a}function _(t,e,i){const s=t.spatialReference,a=e*Math.PI/180,r=Math.cos(a),o=Math.sin(a);var n,c;if("xmin"in t&&(i=null!=(n=i)?n:t.center,t=new b.a({spatialReference:s,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]})),"paths"in t){var h;i=null!=(h=i)?h:t.extent.center;const e=[];for(const s of t.paths)e.push(m(s,r,o,i));return new y.a({spatialReference:s,paths:e})}if("rings"in t){var l;i=null!=(l=i)?l:t.extent.center;const e=[];for(const s of t.rings){const t=f(s),a=m(s,r,o,i);f(a)!==t&&a.reverse(),e.push(a)}return new b.a({spatialReference:s,rings:e})}if("x"in t){var p;i=null!=(p=i)?p:t;const e=new v.a({x:r*(t.x-i.x)-o*(t.y-i.y)+i.x,y:o*(t.x-i.x)+r*(t.y-i.y)+i.y,spatialReference:s});return null!=t.z&&(e.z=t.z),null!=t.m&&(e.m=t.m),e}return"points"in t?(i=null!=(c=i)?c:t.extent.center,new g.a({points:m(t.points,r,o,i),spatialReference:s})):null}var G=i(223),O=i(233),x=i(289),w=i(537),j=i(1012),S=i(747),k=i(756);class M{constructor(t,e,i,s){this.graphics=t,this.mover=e,this.dx=i,this.dy=s,this.type="move-start"}}class C{constructor(t,e,i,s){this.graphics=t,this.mover=e,this.dx=i,this.dy=s,this.type="move"}}class E{constructor(t,e,i,s){this.graphics=t,this.mover=e,this.dx=i,this.dy=s,this.type="move-stop"}}class R{constructor(t,e,i){this.graphics=t,this.mover=e,this.angle=i,this.type="rotate-start"}}class I{constructor(t,e,i){this.graphics=t,this.mover=e,this.angle=i,this.type="rotate"}}class P{constructor(t,e,i){this.graphics=t,this.mover=e,this.angle=i,this.type="rotate-stop"}}class D{constructor(t,e,i,s){this.graphics=t,this.mover=e,this.xScale=i,this.yScale=s,this.type="scale-start"}}class z{constructor(t,e,i,s){this.graphics=t,this.mover=e,this.xScale=i,this.yScale=s,this.type="scale"}}class H{constructor(t,e,i,s){this.graphics=t,this.mover=e,this.xScale=i,this.yScale=s,this.type="scale-stop"}}const L=k.b.transformGraphics,T={centerIndicator:new x.a({style:"cross",size:L.center.size,color:L.center.color}),fill:{default:new G.a({color:L.fill.color,outline:{color:L.fill.outlineColor,join:"round",width:1}}),active:new G.a({color:L.fill.stagedColor,outline:{color:L.fill.outlineColor,join:"round",style:"dash",width:1}})},handles:{default:new x.a({style:"square",size:L.vertex.size,color:L.vertex.color,outline:{color:L.vertex.outlineColor,width:1}}),hover:new x.a({style:"square",size:L.vertex.hoverSize,color:L.vertex.hoverColor,outline:{color:L.vertex.hoverOutlineColor,width:1}})},rotator:{default:new x.a({style:"circle",size:L.vertex.size,color:L.vertex.color,outline:{color:L.vertex.outlineColor,width:1}}),hover:new x.a({style:"circle",size:L.vertex.hoverSize,color:L.vertex.hoverColor,outline:{color:L.vertex.hoverOutlineColor,width:1}})},rotatorLine:new O.a({color:L.line.color,width:1})};let B=class extends r.a.EventedAccessor{constructor(t){super(t),this._activeHandleGraphic=null,this._graphicAttributes={esriSketchTool:"box"},this._handles=new o.a,this._mover=null,this._rotateGraphicOffset=20,this._angleOfRotation=0,this._rotateLineGraphic=null,this._startInfo=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this.type="box",this.callbacks={onMoveStart(){},onMove(){},onMoveStop(){},onScaleStart(){},onScale(){},onScaleStop(){},onRotateStart(){},onRotate(){},onRotateStop(){},onGraphicClick(){}},this.centerGraphic=null,this.backgroundGraphic=null,this.enableMovement=!0,this.enableRotation=!0,this.enableScaling=!0,this.graphics=[],this.handleGraphics=[],this.layer=null,this.preserveAspectRatio=!1,this.rotateGraphic=null,this.showCenterGraphic=!0,this.view=null,this._getBounds=(()=>{const t=Object(p.l)();return(e,i)=>{e[0]=Number.POSITIVE_INFINITY,e[1]=Number.POSITIVE_INFINITY,e[2]=Number.NEGATIVE_INFINITY,e[3]=Number.NEGATIVE_INFINITY;for(const s of i){if(!s)continue;let i,a,r,o;if("point"===s.type)i=r=s.x,a=o=s.y;else if("multipoint"===s.type){const e=Object(d.b)(s);[i,a,r,o]=Object(u.d)(t,[e])}else if("extent"===s.type)[i,a,r,o]=[s.xmin,s.ymin,s.xmax,s.ymax];else{const e=Object(d.b)(s);[i,a,r,o]=Object(u.d)(t,e)}e[0]=Math.min(i,e[0]),e[1]=Math.min(a,e[1]),e[2]=Math.max(r,e[2]),e[3]=Math.max(o,e[3])}return e}})()}initialize(){this._setup(),this._handles.add([Object(c.j)(this,"view.ready",(()=>{const{layer:t,view:e}=this;Object(S.a)(e,t)})),Object(c.c)(this,"preserveAspectRatio",(()=>{this._activeHandleGraphic&&(this._scaleGraphic(this._activeHandleGraphic),this._updateGraphics())})),Object(c.c)(this,"view.scale",(()=>{this._updateRotateGraphic(),this._updateRotateLineGraphic()})),Object(c.c)(this,"graphics",(()=>this.refresh())),Object(c.c)(this,"layer",((t,e)=>{e&&this._resetGraphics(e),this.refresh()}))])}destroy(){this._reset(),this._handles=Object(n.e)(this._handles)}get state(){const t=!!this.get("view.ready"),e=!(!this.get("graphics.length")||!this.get("layer"));return t&&e?"active":t?"ready":"disabled"}set symbols(t){const{centerIndicator:e=T.centerIndicator,fill:i=T.fill,handles:s=T.handles,rotator:a=T.rotator,rotatorLine:r=T.rotatorLine}=t||{};this._set("symbols",{centerIndicator:e,fill:i,handles:s,rotator:a,rotatorLine:r})}isUIGraphic(t){let e=[];return this.handleGraphics.length&&(e=e.concat(this.handleGraphics)),this.backgroundGraphic&&e.push(this.backgroundGraphic),this.centerGraphic&&e.push(this.centerGraphic),this.rotateGraphic&&e.push(this.rotateGraphic),this._rotateLineGraphic&&e.push(this._rotateLineGraphic),e.length&&e.includes(t)}move(t,e){if(this._mover&&this.graphics.length){for(const i of this.graphics){const s=i.geometry,a=Object(w.a)(s,t,e,this.view);i.geometry=a}this.refresh(),this._emitMoveStopEvent(t,e,null)}}scale(t,e){if(this._mover&&this.graphics.length){for(const i of this.graphics){const s=i.geometry,a=Object(w.e)(s,t,e);i.geometry=a}this.refresh(),this._emitScaleStopEvent(t,e,null)}}rotate(t,e){if(this._mover&&this.graphics.length){if(!e){const t=this.handleGraphics[1].geometry.x,i=this.handleGraphics[3].geometry.y;e=new v.a(t,i,this.view.spatialReference)}for(const i of this.graphics){const s=_(i.geometry,t,e);i.geometry=s}this.refresh(),this._emitRotateStopEvent(t,null)}}refresh(){this._reset(),this._setup()}reset(){this.graphics=[]}_setup(){"active"===this.state&&(this._setupGraphics(),this._setupMover(),this._updateGraphics())}_reset(){this._resetGraphicStateVars(),this._resetGraphics(),this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"}_resetGraphicStateVars(){this._startInfo=null,this._activeHandleGraphic=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this._angleOfRotation=0}_resetGraphics(t){const e=t||this.layer;e&&(e.removeMany(this.handleGraphics),e.remove(this.backgroundGraphic),e.remove(this.centerGraphic),e.remove(this.rotateGraphic),e.remove(this._rotateLineGraphic));for(const i of this.handleGraphics)i.destroy();this._set("handleGraphics",[]),this.backgroundGraphic&&(this.backgroundGraphic.destroy(),this._set("backgroundGraphic",null)),this.centerGraphic&&(this.centerGraphic.destroy(),this._set("centerGraphic",null)),this.rotateGraphic&&(this.rotateGraphic.destroy(),this._set("rotateGraphic",null)),this._rotateLineGraphic&&(this._rotateLineGraphic.destroy(),this._rotateLineGraphic=null)}_setupMover(){let t=[];this.enableScaling&&(t=t.concat(this.handleGraphics)),this.enableMovement&&(t=t.concat(this.graphics,this.backgroundGraphic)),this.enableRotation&&t.push(this.rotateGraphic),this.showCenterGraphic&&t.push(this.centerGraphic),this._mover=new j.default({enableMoveAllGraphics:!1,indicatorsEnabled:!1,view:this.view,graphics:t,callbacks:{onGraphicClick:t=>this._onGraphicClickCallback(t),onGraphicMoveStart:t=>this._onGraphicMoveStartCallback(t),onGraphicMove:t=>this._onGraphicMoveCallback(t),onGraphicMoveStop:t=>this._onGraphicMoveStopCallback(t),onGraphicPointerOver:t=>this._onGraphicPointerOverCallback(t),onGraphicPointerOut:t=>this._onGraphicPointerOutCallback(t)}})}_getStartInfo(t){const[e,i,s,a]=this._getBoxBounds(Object(p.l)()),r=Math.abs(s-e),o=Math.abs(a-i),n=(s+e)/2,c=(a+i)/2,{x:h,y:l}=t.geometry;return{width:r,height:o,centerX:n,centerY:c,startX:h,startY:l,graphicInfos:this._getGraphicInfos(),box:this.backgroundGraphic.geometry,rotate:this.rotateGraphic.geometry}}_getGraphicInfos(){return this.graphics.map((t=>this._getGraphicInfo(t)))}_getGraphicInfo(t){const e=t.geometry,[i,s,a,r]=this._getBounds(Object(p.l)(),[e]);return{width:Math.abs(a-i),height:Math.abs(r-s),centerX:(a+i)/2,centerY:(r+s)/2,geometry:e}}_onGraphicClickCallback(t){t.viewEvent.stopPropagation(),this.emit("graphic-click",t),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(t)}_onGraphicMoveStartCallback(t){const{_angleOfRotation:e,_xScale:i,_yScale:s,backgroundGraphic:a,handleGraphics:r,rotateGraphic:o,symbols:n}=this,c=t.graphic;this._resetGraphicStateVars(),this._hideGraphicsBeforeUpdate(),a.symbol=n.fill.active,this._startInfo=this._getStartInfo(c),c===o?(this.view.cursor="grabbing",this._emitRotateStartEvent(e,c)):r.includes(c)?(this._activeHandleGraphic=c,this._emitScaleStartEvent(i,s,c)):this._emitMoveStartEvent(t.dx,t.dy,c)}_onGraphicMoveCallback(t){const e=t.graphic;if(this._startInfo)if(this.handleGraphics.includes(e))this._scaleGraphic(e),this._emitScaleEvent(this._xScale,this._yScale,e);else if(e===this.rotateGraphic)this._rotateGraphic(e),this._emitRotateEvent(this._angleOfRotation,e);else{const i=t.dx,s=t.dy;this._totalDx+=i,this._totalDy+=s,this._moveGraphic(e,i,s),this._emitMoveEvent(i,s,e)}}_onGraphicMoveStopCallback(t){const e=t.graphic;if(!this._startInfo)return void this.refresh();const{_angleOfRotation:i,_totalDx:s,_totalDy:a,_xScale:r,_yScale:o,handleGraphics:n,rotateGraphic:c}=this;this.refresh(),e===c?(this.view.cursor="pointer",this._emitRotateStopEvent(i,e)):n.includes(e)?this._emitScaleStopEvent(r,o,e):this._emitMoveStopEvent(s,a,e)}_onGraphicPointerOverCallback(t){const{backgroundGraphic:e,handleGraphics:i,graphics:s,rotateGraphic:a,symbols:r,view:o}=this,n=t.graphic;if(n===a)return a.symbol=r.rotator.hover,void(o.cursor="pointer");if(s.includes(n)||n===e)return void(o.cursor="move");if(!i.includes(n))return void(o.cursor="pointer");t.graphic.symbol=r.handles.hover;const c=o.rotation;let h,l=t.index;switch(l<8&&(c>=0&&c<45?l%=8:l=c>=45&&c<90?(l+1)%8:c>=90&&c<135?(l+2)%8:c>=135&&c<180?(l+3)%8:c>=180&&c<225?(l+4)%8:c>=225&&c<270?(l+5)%8:c>=270&&c<315?(l+6)%8:(l+7)%8),l){case 0:h="nwse-resize";break;case 1:h="ns-resize";break;case 2:h="nesw-resize";break;case 3:h="ew-resize";break;case 4:h="nwse-resize";break;case 5:h="ns-resize";break;case 6:h="nesw-resize";break;case 7:h="ew-resize";break;default:h="pointer"}o.cursor=h}_onGraphicPointerOutCallback(t){const{handleGraphics:e,rotateGraphic:i,symbols:s,view:a}=this;t.graphic===i?i.symbol=s.rotator.default:e.includes(t.graphic)&&(t.graphic.symbol=s.handles.default),a.cursor="default"}_scaleGraphic(t){const{_startInfo:e,handleGraphics:i,preserveAspectRatio:s,view:a}=this,{centerX:r,centerY:o,startX:n,startY:c}=e,{resolution:h,transform:l}=a.state,p=i.indexOf(t);1!==p&&5!==p||this._updateX(t,r),3!==p&&7!==p||this._updateY(t,o);const{x:u,y:d}=t.geometry,b=l[0]*u+l[2]*d+l[4],y=l[1]*u+l[3]*d+l[5],g=e.graphicInfos.map((t=>t.geometry));if(s){const t=l[0]*r+l[2]*o+l[4],e=l[1]*r+l[3]*o+l[5],i=l[0]*n+l[2]*c+l[4],s=l[1]*n+l[3]*c+l[5];this._xScale=this._yScale=Object(w.c)(t,e,i,s,b,y);for(const a of g){const t=g.indexOf(a);this.graphics[t].geometry=Object(w.e)(a,this._xScale,this._yScale,[r,o])}this._updateBackgroundGraphic()}else{const{width:t,height:i}=e;let s=u-n,l=c-d;if(1===p||5===p?s=0:3!==p&&7!==p||(l=0),0===s&&0===l)return;const b=t+(n>r?s:-1*s),y=i+(c<o?l:-1*l),f=r+s/2,m=o+l/2;this._xScale=b/t||1,this._yScale=y/i||1,1===p||5===p?this._xScale=1:3!==p&&7!==p||(this._yScale=1);const _=(f-r)/h,G=(m-o)/h,O=Object(w.e)(e.box,this._xScale,this._yScale);this.backgroundGraphic.geometry=Object(w.a)(O,_,G,a,!0);const{centerX:x,centerY:j}=this._getGraphicInfo(this.backgroundGraphic),S=(x-r)/h,k=-1*(j-o)/h;for(const e of g){const t=g.indexOf(e),i=Object(w.e)(e,this._xScale,this._yScale,[r,o]);this.graphics[t].geometry=Object(w.a)(i,S,k,a,!0)}this.centerGraphic.geometry=new v.a(x,j,a.spatialReference)}}_rotateGraphic(t){const{centerX:e,centerY:i,startX:s,startY:a,box:r,rotate:o}=this._startInfo,n=new v.a(s,a,this.view.spatialReference),c=new v.a(e,i,this.view.spatialReference),h=t.geometry;this._angleOfRotation=Object(w.b)(n,h,c);const l=this._startInfo.graphicInfos.map((t=>t.geometry));for(const p of l){const t=l.indexOf(p),e=_(p,this._angleOfRotation,c);this.graphics[t].geometry=e}this.backgroundGraphic.geometry=_(r,this._angleOfRotation,c),this.rotateGraphic.geometry=_(o,this._angleOfRotation,c)}_moveGraphic(t,e,i){if(this.graphics.includes(t)){const s=this.backgroundGraphic.geometry;this.backgroundGraphic.geometry=Object(w.a)(s,e,i,this.view);for(const a of this.graphics)a!==t&&(a.geometry=Object(w.a)(a.geometry,e,i,this.view))}else if(t===this.centerGraphic){const t=this.backgroundGraphic.geometry;this.backgroundGraphic.geometry=Object(w.a)(t,e,i,this.view)}if(t===this.backgroundGraphic||t===this.centerGraphic)for(const s of this.graphics)s.geometry=Object(w.a)(s.geometry,e,i,this.view)}_setupGraphics(){const{_graphicAttributes:t,symbols:e}=this;this._set("centerGraphic",new a.a(null,e.centerIndicator,t)),this.showCenterGraphic&&this.layer.add(this.centerGraphic),this._set("backgroundGraphic",new a.a(null,e.fill.default,t)),this.layer.add(this.backgroundGraphic),this._rotateLineGraphic=new a.a(null,e.rotatorLine,t),this._set("rotateGraphic",new a.a(null,e.rotator.default,t)),this.enableRotation&&!this._hasExtentGraphic()&&(this.layer.add(this._rotateLineGraphic),this.layer.add(this.rotateGraphic));for(let i=0;i<8;i++)this.handleGraphics.push(new a.a(null,e.handles.default,t));this.enableScaling&&this.layer.addMany(this.handleGraphics)}_updateGraphics(){this._updateBackgroundGraphic(),this._updateHandleGraphics(),this._updateCenterGraphic(),this._updateRotateGraphic(),this._updateRotateLineGraphic()}_hideGraphicsBeforeUpdate(){this.centerGraphic.visible=!1,this.rotateGraphic.visible=!1,this._rotateLineGraphic.visible=!1,this.handleGraphics.forEach((t=>t.visible=!1))}_updateHandleGraphics(){const t=this._getCoordinates(!0);this.handleGraphics.forEach(((e,i)=>{const[s,a]=t[i];this._updateXY(e,s,a)}))}_updateBackgroundGraphic(){const t=this._getCoordinates();this.backgroundGraphic.geometry=new b.a({rings:t,spatialReference:this.view.spatialReference})}_updateCenterGraphic(){const[t,e,i,s]=this._getBoxBounds(Object(p.l)()),a=(i+t)/2,r=(s+e)/2;this.centerGraphic.geometry=new v.a(a,r,this.view.spatialReference)}_updateRotateGraphic(){if(!this.handleGraphics.length)return;const{x:t,y:e}=this.handleGraphics[1].geometry,i=e+this.view.state.resolution*this._rotateGraphicOffset;this.rotateGraphic.geometry=new v.a(t,i,this.view.spatialReference)}_updateRotateLineGraphic(){if(!this.handleGraphics.length||!this.rotateGraphic||!this.rotateGraphic.geometry)return;const t=this.handleGraphics[1].geometry,e=this.rotateGraphic.geometry;this._rotateLineGraphic.geometry=new y.a({paths:[[t.x,t.y],[e.x,e.y]],spatialReference:this.view.spatialReference})}_updateXY(t,e,i){t.geometry=new v.a(e,i,this.view.spatialReference)}_updateX(t,e){const i=t.geometry.y;t.geometry=new v.a(e,i,this.view.spatialReference)}_updateY(t,e){const i=t.geometry.x;t.geometry=new v.a(i,e,this.view.spatialReference)}_hasExtentGraphic(){return this.graphics.some((t=>t&&Object(n.k)(t.geometry)&&"extent"===t.geometry.type))}_getBoxBounds(t){const e=this.graphics.map((t=>t.geometry));return this._getBounds(t,e)}_getCoordinates(t){const[e,i,s,a]=this._getBoxBounds(Object(p.l)());if(t){const t=(e+s)/2,r=(a+i)/2;return[[e,a],[t,a],[s,a],[s,r],[s,i],[t,i],[e,i],[e,r]]}return[[e,a],[s,a],[s,i],[e,i]]}_emitMoveStartEvent(t,e,i){const s=new M(this.graphics,i,t,e);this.emit("move-start",s),this.callbacks.onMoveStart&&this.callbacks.onMoveStart(s)}_emitMoveEvent(t,e,i){const s=new C(this.graphics,i,t,e);this.emit("move",s),this.callbacks.onMove&&this.callbacks.onMove(s)}_emitMoveStopEvent(t,e,i){const s=new E(this.graphics,i,t,e);this.emit("move-stop",s),this.callbacks.onMoveStop&&this.callbacks.onMoveStop(s)}_emitRotateStartEvent(t,e){const i=new R(this.graphics,e,t);this.emit("rotate-start",i),this.callbacks.onRotateStart&&this.callbacks.onRotateStart(i)}_emitRotateEvent(t,e){const i=new I(this.graphics,e,t);this.emit("rotate",i),this.callbacks.onRotate&&this.callbacks.onRotate(i)}_emitRotateStopEvent(t,e){const i=new P(this.graphics,e,t);this.emit("rotate-stop",i),this.callbacks.onRotateStop&&this.callbacks.onRotateStop(i)}_emitScaleStartEvent(t,e,i){const s=new D(this.graphics,i,t,e);this.emit("scale-start",s),this.callbacks.onScaleStart&&this.callbacks.onScaleStart(s)}_emitScaleEvent(t,e,i){const s=new z(this.graphics,i,t,e);this.emit("scale",s),this.callbacks.onScale&&this.callbacks.onScale(s)}_emitScaleStopEvent(t,e,i){const s=new H(this.graphics,i,t,e);this.emit("scale-stop",s),this.callbacks.onScaleStop&&this.callbacks.onScaleStop(s)}};Object(s.a)([Object(h.b)()],B.prototype,"_rotateLineGraphic",void 0),Object(s.a)([Object(h.b)({readOnly:!0})],B.prototype,"type",void 0),Object(s.a)([Object(h.b)()],B.prototype,"callbacks",void 0),Object(s.a)([Object(h.b)({readOnly:!0})],B.prototype,"centerGraphic",void 0),Object(s.a)([Object(h.b)({readOnly:!0})],B.prototype,"backgroundGraphic",void 0),Object(s.a)([Object(h.b)()],B.prototype,"enableMovement",void 0),Object(s.a)([Object(h.b)()],B.prototype,"enableRotation",void 0),Object(s.a)([Object(h.b)()],B.prototype,"enableScaling",void 0),Object(s.a)([Object(h.b)()],B.prototype,"graphics",void 0),Object(s.a)([Object(h.b)({readOnly:!0})],B.prototype,"handleGraphics",void 0),Object(s.a)([Object(h.b)()],B.prototype,"layer",void 0),Object(s.a)([Object(h.b)()],B.prototype,"preserveAspectRatio",void 0),Object(s.a)([Object(h.b)({readOnly:!0})],B.prototype,"rotateGraphic",void 0),Object(s.a)([Object(h.b)()],B.prototype,"showCenterGraphic",void 0),Object(s.a)([Object(h.b)({readOnly:!0})],B.prototype,"state",null),Object(s.a)([Object(h.b)({value:T})],B.prototype,"symbols",null),Object(s.a)([Object(h.b)()],B.prototype,"view",void 0),B=Object(s.a)([Object(l.a)("esri.views.draw.support.Box")],B);var N=B},500:function(t,e,i){"use strict";function s(t,e){return e?"xoffset"in e&&e.xoffset?Math.max(t,Math.abs(e.xoffset)):"yoffset"in e&&e.yoffset?Math.max(t,Math.abs(e.yoffset||0)):t:t}function a(t,e){return"number"==typeof t?t:t&&t.stops&&t.stops.length?function(t){let e=0,i=0;for(let s=0;s<t.length;s++){const a=t[s].size;"number"==typeof a&&(e+=a,i++)}return e/i}(t.stops):e}function r(t,e){if(!e)return t;const i=e.filter((t=>"size"===t.type)).map((e=>{const{maxSize:i,minSize:s}=e;return(a(i,t)+a(s,t))/2}));let s=0;const r=i.length;if(0===r)return t;for(let a=0;a<r;a++)s+=i[a];const o=Math.floor(s/r);return Math.max(o,t)}function o(t){const e=t&&t.renderer,i="touch"===(t&&t.event&&t.event.pointerType)?9:6;if(!e)return i;const a="visualVariables"in e?r(i,e.visualVariables):i;if("simple"===e.type)return s(a,e.symbol);if("unique-value"===e.type){let t=a;return e.uniqueValueInfos.forEach((e=>{t=s(t,e.symbol)})),t}if("class-breaks"===e.type){let t=a;return e.classBreakInfos.forEach((e=>{t=s(t,e.symbol)})),t}return e.type,a}i.d(e,"a",(function(){return o}))},523:function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return c}));i(98);var s=i(85),a=i(112),r=i(500),o=i(99);function n(t,e,i,r=new o.a){let n;if("2d"===i.type)n=e*i.resolution;else if("3d"===i.type){const r=i.overlayPixelSizeInMapUnits(t),o=i.basemapSpatialReference;n=Object(s.k)(o)&&!o.equals(i.spatialReference)?Object(a.f)(o)/Object(a.f)(i.spatialReference):e*r}const c=t.x-n,h=t.y-n,l=t.x+n,p=t.y+n,{spatialReference:u}=i;return r.xmin=Math.min(c,l),r.ymin=Math.min(h,p),r.xmax=Math.max(c,l),r.ymax=Math.max(h,p),r.spatialReference=u,r}function c(t,e,i){const a=i.toMap(t);return!Object(s.j)(a)&&n(a,Object(r.a)(),i,h).intersects(e)}const h=new o.a},537:function(t,e,i){"use strict";i.d(e,"a",(function(){return c})),i.d(e,"b",(function(){return p})),i.d(e,"c",(function(){return l})),i.d(e,"d",(function(){return n})),i.d(e,"e",(function(){return h}));var s=i(108),a=i(125),r=i(198),o=i(258);function n(t,e,i,s){if(null==s||t.hasZ||(s=void 0),"point"===t.type)return t.x+=e,t.y+=i,t.hasZ&&null!=s&&(t.z+=s),t;if("multipoint"===t.type){const a=t.points;for(let t=0;t<a.length;t++)a[t]=u(a[t],e,i,s);return t}if("extent"===t.type)return t.xmin+=e,t.xmax+=e,t.ymin+=i,t.ymax+=i,null!=s&&(t.zmin+=s,t.zmax+=s),t;const a=Object(o.b)(t),r="polyline"===t.type?t.paths:t.rings;for(let o=0;o<a.length;o++){const t=a[o];for(let a=0;a<t.length;a++)t[a]=u(t[a],e,i,s)}return"paths"in t?t.paths=r:t.rings=r,t}function c(t,e,i,s,a){const r=t.clone(),c=s.resolution;if("point"===r.type){if(a)n(r,e*c,-i*c);else{const t=s.state.transform,a=s.state.inverseTransform,o=t[0]*r.x+t[2]*r.y+t[4],n=t[1]*r.x+t[3]*r.y+t[5];r.x=a[0]*(o+e)+a[2]*(n+i)+a[4],r.y=a[1]*(o+e)+a[3]*(n+i)+a[5]}return r}if("multipoint"===r.type){if(a)n(r,e*c,-i*c);else{const t=r.points,a=s.state.transform,o=s.state.inverseTransform;for(let s=0;s<t.length;s++){const r=t[s],n=a[0]*r[0]+a[2]*r[1]+a[4],c=a[1]*r[0]+a[3]*r[1]+a[5],h=o[0]*(n+e)+o[2]*(c+i)+o[4],l=o[1]*(n+e)+o[3]*(c+i)+o[5];t[s]=d(r,h,l,void 0)}}return r}if("extent"===r.type){if(a)n(r,e*c,-i*c);else{const t=s.state.transform,a=s.state.inverseTransform,o=t[0]*r.xmin+t[2]*r.ymin+t[4],n=t[1]*r.xmin+t[3]*r.ymin+t[5],c=t[0]*r.xmax+t[2]*r.ymax+t[4],h=t[1]*r.xmax+t[3]*r.ymax+t[5];r.xmin=a[0]*(o+e)+a[2]*(n+i)+a[4],r.ymin=a[1]*(o+e)+a[3]*(n+i)+a[5],r.xmax=a[0]*(c+e)+a[2]*(h+i)+a[4],r.ymax=a[1]*(c+e)+a[3]*(h+i)+a[5]}return r}if(a)n(r,e*c,-i*c);else{const t=Object(o.b)(r),a="polyline"===r.type?r.paths:r.rings,n=s.state.transform,c=s.state.inverseTransform;for(let s=0;s<t.length;s++){const a=t[s];for(let t=0;t<a.length;t++){const s=a[t],r=n[0]*s[0]+n[2]*s[1]+n[4],o=n[1]*s[0]+n[3]*s[1]+n[5],h=c[0]*(r+e)+c[2]*(o+i)+c[4],l=c[1]*(r+e)+c[3]*(o+i)+c[5];a[t]=d(s,h,l,void 0)}}"paths"in r?r.paths=a:r.rings=a}return r}function h(t,e,i,s){if("point"===t.type){const{x:a,y:r}=t,o=s?s[0]:a,n=s?s[1]:r,c=t.clone(),h=(a-o)*e+o,l=(r-n)*i+n;return c.x=h,c.y=l,c}if("multipoint"===t.type){const n=Object(o.b)(t),c=Object(a.l)(),[h,l,p,u]=Object(r.d)(c,[n]),b=s?s[0]:(h+p)/2,y=s?s[1]:(u+l)/2,v=t.clone(),g=v.points;for(let t=0;t<g.length;t++){const s=g[t],[a,r]=s,o=(a-b)*e+b,n=(r-y)*i+y;g[t]=d(s,o,n,void 0)}return v}if("extent"===t.type){const{xmin:a,xmax:r,ymin:o,ymax:n}=t,c=s?s[0]:(a+r)/2,h=s?s[1]:(n+o)/2,l=t.clone();if(l.xmin=(a-c)*e+c,l.ymax=(n-h)*i+h,l.xmax=(r-c)*e+c,l.ymin=(o-h)*i+h,l.xmin>l.xmax){const t=l.xmin,e=l.xmax;l.xmin=e,l.xmax=t}if(l.ymin>l.ymax){const t=l.ymin,e=l.ymax;l.ymin=e,l.ymax=t}return l}const n=Object(o.b)(t),c=Object(a.l)(),[h,l,p,u]=Object(r.d)(c,n),b=s?s[0]:(h+p)/2,y=s?s[1]:(u+l)/2,v=t.clone(),g="polyline"===v.type?v.paths:v.rings;for(let a=0;a<n.length;a++){const t=n[a];for(let s=0;s<t.length;s++){const r=t[s],[o,n]=r,c=(o-b)*e+b,h=(n-y)*i+y;g[a][s]=d(r,c,h,void 0)}}return"paths"in v?v.paths=g:v.rings=g,v}function l(t,e,i,s,a,r){const o=Math.sqrt((i-t)*(i-t)+(s-e)*(s-e));return Math.sqrt((a-t)*(a-t)+(r-e)*(r-e))/o}function p(t,e,i){const a=Math.atan2(e.y-i.y,e.x-i.x)-Math.atan2(t.y-i.y,t.x-i.x),r=Math.atan2(Math.sin(a),Math.cos(a));return Object(s.r)(r)}function u(t,e,i,s){return d(t,t[0]+e,t[1]+i,null!=t[2]&&null!=s?t[2]+s:void 0)}function d(t,e,i,s){const a=[e,i];return t.length>2&&a.push(null!=s?s:t[2]),t.length>3&&a.push(t[3]),a}},658:function(t,e,i){"use strict";i.d(e,"a",(function(){return f}));var s=i(81),a=i(92),r=i(123),o=i(85),n=i(102),c=i(83),h=(i(79),i(84),i(80),i(82)),l=i(134),p=i(111),u=i(101),d=i(178),b=i(335),y=i(252),v=i(284),g=i(523);let f=class extends a.a{constructor(t){super(t),this.layer=null,this.interactive=!0,this.selectable=!1,this.grabbable=!0,this.dragging=!1,this.cursor=null,this.events=new r.a.EventEmitter,this._circleCollisionCache=null,this._graphicSymbolChangedHandle=null,this._originalSymbol=null}set graphic(t){this._circleCollisionCache=null,this._originalSymbol=t.symbol,this._set("graphic",t),this.attachSymbolChanged()}get elevationInfo(){const t="elevationInfo"in this.graphic.layer&&this.graphic.layer.elevationInfo,e=Object(b.f)(this.graphic),i=t?t.offset:0;return new v.a({mode:e,offset:i})}set focusedSymbol(t){t!==this._get("focusedSymbol")&&(this._set("focusedSymbol",t),this._updateGraphicSymbol(),this._circleCollisionCache=null)}grabbableForEvent(){return!0}set grabbing(t){t!==this._get("grabbing")&&(this._set("grabbing",t),this._updateGraphicSymbol())}set hovering(t){t!==this._get("hovering")&&(this._set("hovering",t),this._updateGraphicSymbol())}set selected(t){t!==this._get("selected")&&(this._set("selected",t),this._updateGraphicSymbol(),this.events.emit("select-changed",{action:t?"select":"deselect"}))}get _focused(){return this._get("hovering")||this._get("grabbing")}destroy(){this.detachSymbolChanged(),this._resetGraphicSymbol(),this._set("view",null)}intersectionDistance(t){const e=this.graphic;if(!1===e.visible)return null;const i=e.geometry;if(Object(o.j)(i))return null;const s=this._get("focusedSymbol"),a=Object(o.k)(s)?s:e.symbol;return"2d"===this.view.type?this._intersectDistance2D(this.view,t,i,a):this._intersectDistance3D(this.view,t,e)}attach(){this.attachSymbolChanged(),Object(o.k)(this.layer)&&this.layer.add(this.graphic)}detach(){this.detachSymbolChanged(),this._resetGraphicSymbol(),Object(o.k)(this.layer)&&this.layer.remove(this.graphic)}attachSymbolChanged(){this.detachSymbolChanged(),this._graphicSymbolChangedHandle=this.graphic.watch("symbol",(t=>{Object(o.k)(t)&&t!==this.focusedSymbol&&t!==this._originalSymbol&&(this._originalSymbol=t,this._focused&&Object(o.k)(this.focusedSymbol)&&(this.graphic.symbol=this.focusedSymbol))}),!0)}detachSymbolChanged(){Object(o.k)(this._graphicSymbolChangedHandle)&&(this._graphicSymbolChangedHandle.remove(),this._graphicSymbolChangedHandle=null)}_updateGraphicSymbol(){this.graphic.symbol=this._focused&&Object(o.k)(this.focusedSymbol)?this.focusedSymbol:this._originalSymbol}_resetGraphicSymbol(){this.graphic.symbol=this._originalSymbol}_intersectDistance2D(t,e,i,s){if(s=s||Object(y.h)(i),Object(o.j)(s))return null;let a=this._circleCollisionCache;if("point"!==i.type||"simple-marker"!==s.type)return Object(g.b)(e,i,t)?1:null;if(Object(o.j)(a)||!a.originalPoint.equals(i)){const e=i,r=t.spatialReference;if(Object(d.b)(e.spatialReference,r)){const t=Object(d.k)(e,r);a={originalPoint:e.clone(),mapPoint:t,radiusPx:Object(n.h)(s.size)},this._circleCollisionCache=a}}if(Object(o.k)(a)){const i=Object(n.j)(e,_),r=t.toScreen(a.mapPoint),o=a.radiusPx,c=r.x+Object(n.h)(s.xoffset),h=r.y-Object(n.h)(s.yoffset);return Object(l.j)(i,[c,h])<o*o?1:null}return null}_intersectDistance3D(t,e,i){const s=t.toMap(e,{include:[i]});return s&&Object(d.q)(s,m,t.renderSpatialReference)?Object(p.m)(m,t.state.camera.eye):null}};Object(s.a)([Object(c.b)({constructOnly:!0,nonNullable:!0})],f.prototype,"graphic",null),Object(s.a)([Object(c.b)({readOnly:!0})],f.prototype,"elevationInfo",null),Object(s.a)([Object(c.b)({constructOnly:!0,nonNullable:!0})],f.prototype,"view",void 0),Object(s.a)([Object(c.b)({value:null})],f.prototype,"focusedSymbol",null),Object(s.a)([Object(c.b)({constructOnly:!0})],f.prototype,"layer",void 0),Object(s.a)([Object(c.b)()],f.prototype,"interactive",void 0),Object(s.a)([Object(c.b)()],f.prototype,"selectable",void 0),Object(s.a)([Object(c.b)()],f.prototype,"grabbable",void 0),Object(s.a)([Object(c.b)({value:!1})],f.prototype,"grabbing",null),Object(s.a)([Object(c.b)()],f.prototype,"dragging",void 0),Object(s.a)([Object(c.b)()],f.prototype,"hovering",null),Object(s.a)([Object(c.b)({value:!1})],f.prototype,"selected",null),Object(s.a)([Object(c.b)()],f.prototype,"cursor",void 0),f=Object(s.a)([Object(h.a)("esri.views.interactive.GraphicManipulator")],f);const m=Object(u.e)(),_=Object(n.g)()},756:function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return p}));var s=i(104);const a={main:new s.a([255,127,0]),selected:new s.a([255,255,255]),outline:new s.a([0,0,0,.5]),selectedOutline:new s.a([255,255,255]),hoverOutline:new s.a([255,255,255]),secondary:new s.a([255,255,255]),secondaryOutline:new s.a([100,100,100]),transparent:new s.a([0,0,0,0])};function r(t,e){if(e)for(const i in e)t[i]=e[i]}class o{constructor(t){this.size=8,this.hoverSize=10,this.color=a.main,this.hoverColor=a.main,this.outlineColor=a.outline,this.hoverOutlineColor=a.hoverOutline,r(this,t)}}class n{constructor(t){this.color=a.secondary,this.hoverColor=a.main,r(this,t)}}class c{constructor(t){this.color=a.transparent,this.hoverColor=a.transparent,this.outlineColor=a.main,this.hoverOutlineColor=a.main,this.stagedColor=a.transparent,this.stagedOutlineColor=a.secondary,r(this,t)}}class h{constructor(t){this.vertex=new o,this.midpoint=new o({color:a.secondary,outlineColor:a.secondaryOutline,size:6}),this.selected=new o({color:a.selected,hoverColor:a.selected,hoverOutlineColor:a.hoverOutline}),r(this,t)}}class l{constructor(t){this.center=new o({color:a.secondaryOutline}),this.fill=new c,this.line=new n,this.vertex=new o({color:a.selected,outlineColor:a.main,hoverColor:a.selected,hoverOutlineColor:a.secondaryOutline}),r(this,t)}}const p=new class{constructor(t){this.reshapeGraphics=new h,this.transformGraphics=new l,r(this,t)}}}}]);
//# sourceMappingURL=151.320c5af6.chunk.js.map