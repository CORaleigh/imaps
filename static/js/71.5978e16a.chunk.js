(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[71,82],{1007:function(t,e,i){"use strict";i.r(e);var a=i(2),r=i(3),n=i(4),c=i(5),s=i(0),h=(i(14),i(21)),o=i(6),l=(i(12),i(17),i(1)),p=i(8),u=(i(11),i(18),i(19),i(70)),v=i(49),b=i(25),f=i(50),y=i(87),d=i(550),g=i(908),_=function t(e,i,r,n,c){Object(a.a)(this,t),this.graphic=e,this.index=i,this.x=r,this.y=n,this.viewEvent=c,this.type="graphic-click"},m=function t(e,i,r,n,c){Object(a.a)(this,t),this.graphic=e,this.index=i,this.x=r,this.y=n,this.viewEvent=c,this.type="graphic-double-click"},G=function(){function t(e,i,r,n,c,s,h,o,l,p){Object(a.a)(this,t),this.graphic=e,this.allGraphics=i,this.index=r,this.x=n,this.y=c,this.dx=s,this.dy=h,this.totalDx=o,this.totalDy=l,this.viewEvent=p,this.defaultPrevented=!1,this.type="graphic-move-start"}return Object(r.a)(t,[{key:"preventDefault",value:function(){this.defaultPrevented=!0}}]),t}(),O=function(){function t(e,i,r,n,c,s,h,o,l,p){Object(a.a)(this,t),this.graphic=e,this.allGraphics=i,this.index=r,this.x=n,this.y=c,this.dx=s,this.dy=h,this.totalDx=o,this.totalDy=l,this.viewEvent=p,this.defaultPrevented=!1,this.type="graphic-move"}return Object(r.a)(t,[{key:"preventDefault",value:function(){this.defaultPrevented=!0}}]),t}(),k=function(){function t(e,i,r,n,c,s,h,o,l,p){Object(a.a)(this,t),this.graphic=e,this.allGraphics=i,this.index=r,this.x=n,this.y=c,this.dx=s,this.dy=h,this.totalDx=o,this.totalDy=l,this.viewEvent=p,this.defaultPrevented=!1,this.type="graphic-move-stop"}return Object(r.a)(t,[{key:"preventDefault",value:function(){this.defaultPrevented=!0}}]),t}(),j=function t(e,i,r,n,c){Object(a.a)(this,t),this.graphic=e,this.index=i,this.x=r,this.y=n,this.viewEvent=c,this.type="graphic-pointer-over"},w=function t(e,i,r,n,c){Object(a.a)(this,t),this.graphic=e,this.index=i,this.x=r,this.y=n,this.viewEvent=c,this.type="graphic-pointer-out"},x=function t(e,i,r,n,c){Object(a.a)(this,t),this.graphic=e,this.index=i,this.x=r,this.y=n,this.viewEvent=c,this.type="graphic-pointer-down"},S=function t(e,i,r,n,c){Object(a.a)(this,t),this.graphic=e,this.index=i,this.x=r,this.y=n,this.viewEvent=c,this.type="graphic-pointer-up"},M=function(t){Object(n.a)(i,t);var e=Object(c.a)(i);function i(t){var r;return Object(a.a)(this,i),(r=e.call(this,t))._activeGraphic=null,r._dragEvent=null,r._handles=new v.a,r._hoverGraphic=null,r._initialDragGeometry=null,r._viewHandles=new v.a,r._manipulators=[],r.type="graphic-mover",r.callbacks={onGraphicClick:function(){},onGraphicDoubleClick:function(){},onGraphicMoveStart:function(){},onGraphicMove:function(){},onGraphicMoveStop:function(){},onGraphicPointerOver:function(){},onGraphicPointerOut:function(){},onGraphicPointerDown:function(){},onGraphicPointerUp:function(){}},r.enableMoveAllGraphics=!1,r.graphics=[],r.view=null,r}return Object(r.a)(i,[{key:"initialize",value:function(){var t=this;this._setUpManipulators(),this._handles.add([Object(b.d)(this,["graphics","graphics.length"],(function(){t._setUpManipulators()})),Object(b.j)(this,"view.ready",(function(){t._viewHandles.add([t.view.on("immediate-click",(function(e){return t._clickHandler(e)}),f.b.TOOL),t.view.on("double-click",(function(e){return t._doubleClickHandler(e)}),f.b.TOOL),t.view.on("pointer-down",(function(e){return t._pointerDownHandler(e)}),f.b.TOOL),t.view.on("pointer-move",(function(e){return t._pointerMoveHandler(e)}),f.b.TOOL),t.view.on("pointer-up",(function(e){return t._pointerUpHandler(e)}),f.b.TOOL),t.view.on("drag",(function(e){return t._dragHandler(e)}),f.b.TOOL),t.view.on("key-down",(function(e){return t._keyDownHandler(e)}),f.b.TOOL)])}))])}},{key:"destroy",value:function(){this.reset(),this._manipulators.forEach((function(t){return t.destroy()})),this._manipulators=null,this._viewHandles.removeAll(),this._handles.removeAll()}},{key:"state",get:function(){var t=!!this.get("view.ready"),e=!!this.get("graphics.length"),i=this._activeGraphic;return t&&e?i?"moving":"active":t?"ready":"disabled"}},{key:"reset",value:function(){this._activeGraphic=null,this._hoverGraphic=null,this._dragEvent=null}},{key:"updateGeometry",value:function(t,e){var i=this.graphics[t];i&&i.set("geometry",e)}},{key:"_clickHandler",value:function(t){var e=this._findTargetGraphic(Object(y.a)(t));if(e){var i=new _(e,this.graphics.indexOf(e),t.x,t.y,t);this.emit("graphic-click",i),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(i)}}},{key:"_doubleClickHandler",value:function(t){var e=this._findTargetGraphic(Object(y.a)(t));if(e){var i=new m(e,this.graphics.indexOf(e),t.x,t.y,t);this.emit("graphic-double-click",i),this.callbacks.onGraphicDoubleClick&&this.callbacks.onGraphicDoubleClick(i)}}},{key:"_pointerDownHandler",value:function(t){var e=this._findTargetGraphic(Object(y.a)(t));if(e){this._activeGraphic=e;var i=t.x,a=t.y,r=new x(e,this.graphics.indexOf(e),i,a,t);this.emit("graphic-pointer-down",r),this.callbacks.onGraphicPointerDown&&this.callbacks.onGraphicPointerDown(r)}else this._activeGraphic=null}},{key:"_pointerUpHandler",value:function(t){if(this._activeGraphic){var e=t.x,i=t.y,a=this.graphics.indexOf(this._activeGraphic),r=new S(this._activeGraphic,a,e,i,t);this.emit("graphic-pointer-up",r),this.callbacks.onGraphicPointerUp&&this.callbacks.onGraphicPointerUp(r)}}},{key:"_pointerMoveHandler",value:function(t){if(!this._dragEvent){var e=this._findTargetGraphic(Object(y.a)(t));if(e){var i=t.x,a=t.y;if(this._hoverGraphic){if(this._hoverGraphic===e)return;var r=this.graphics.indexOf(this._hoverGraphic),n=new w(this.graphics[r],r,i,a,t);this._hoverGraphic=null,this.emit("graphic-pointer-out",n),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(n)}var c=this.graphics.indexOf(e),s=new j(e,c,i,a,t);return this._hoverGraphic=e,this.emit("graphic-pointer-over",s),void(this.callbacks.onGraphicPointerOver&&this.callbacks.onGraphicPointerOver(s))}if(this._hoverGraphic){var h=t.x,o=t.y,l=this.graphics.indexOf(this._hoverGraphic),p=new w(this.graphics[l],l,h,o,t);this._hoverGraphic=null,this.emit("graphic-pointer-out",p),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(p)}}}},{key:"_dragHandler",value:function(t){var e=this;if(("start"===t.action||this._dragEvent)&&this._activeGraphic&&this._activeGraphic.geometry){t.stopPropagation();var i=t.action,a=t.x,r=t.y,n=this.graphics.indexOf(this._activeGraphic),c=this._activeGraphic.geometry,s=this._dragEvent?a-this._dragEvent.x:0,o=this._dragEvent?r-this._dragEvent.y:0,l=a-t.origin.x,p=r-t.origin.y;if(this._activeGraphic.geometry=Object(d.a)(c,s,o,this.view),this.enableMoveAllGraphics&&this.graphics.forEach((function(t){t!==e._activeGraphic&&(t.geometry=Object(d.a)(t.geometry,s,o,e.view))})),this._dragEvent=t,"start"===i){this._initialDragGeometry=Object(h.a)(c);var u=new G(this._activeGraphic,this.graphics,n,a,r,s,o,l,p,t);this.emit("graphic-move-start",u),this.callbacks.onGraphicMoveStart&&this.callbacks.onGraphicMoveStart(u),u.defaultPrevented&&this._activeGraphic.set("geometry",c)}else if("update"===i){var v=new O(this._activeGraphic,this.graphics,n,a,r,s,o,l,p,t);this.emit("graphic-move",v),this.callbacks.onGraphicMove&&this.callbacks.onGraphicMove(v),v.defaultPrevented&&this._activeGraphic.set("geometry",c)}else{var b=new k(this._activeGraphic,this.graphics,n,a,r,s,o,l,p,t);this._dragEvent=null,this._activeGraphic=null,this.emit("graphic-move-stop",b),this.callbacks.onGraphicMoveStop&&this.callbacks.onGraphicMoveStop(b),b.defaultPrevented&&this.graphics[n].set("geometry",this._initialDragGeometry),this._initialDragGeometry=null}}}},{key:"_keyDownHandler",value:function(t){"a"!==t.key&&"d"!==t.key&&"n"!==t.key||"moving"!==this.state||t.stopPropagation()}},{key:"_findTargetGraphic",value:function(t){var e=null,i=Number.MAX_VALUE;return this._manipulators.forEach((function(a){var r=a.intersectionDistance(t);Object(o.k)(r)&&r<i&&(i=r,e=a.graphic)})),e}},{key:"_setUpManipulators",value:function(){var t=this.graphics,e=this.view;this._manipulators.forEach((function(t){return t.destroy()})),this._manipulators=null!=t&&t.length?t.map((function(t){return new g.a({graphic:t,view:e})})):[]}}]),i}(u.a.EventedAccessor);Object(s.a)([Object(l.b)()],M.prototype,"_activeGraphic",void 0),Object(s.a)([Object(l.b)({readOnly:!0})],M.prototype,"type",void 0),Object(s.a)([Object(l.b)()],M.prototype,"callbacks",void 0),Object(s.a)([Object(l.b)()],M.prototype,"enableMoveAllGraphics",void 0),Object(s.a)([Object(l.b)()],M.prototype,"graphics",void 0),Object(s.a)([Object(l.b)({readOnly:!0})],M.prototype,"state",null),Object(s.a)([Object(l.b)()],M.prototype,"view",void 0);var C=M=Object(s.a)([Object(p.a)("esri.views.draw.support.GraphicMover")],M);e.default=C},1255:function(t,e,i){"use strict";i.r(e);var a=i(29),r=i(15),n=i(3),c=i(4),s=i(5),h=i(2),o=i(0),l=(i(14),i(6)),p=(i(12),i(17),i(1)),u=i(8),v=(i(11),i(18),i(19),i(43)),b=i(143),f=i(330),y=i(95),d=i(97),g=(i(78),i(70)),_=i(111),m=i(113),G=i(108),O=i(72),k=i(49),j=i(25),w=i(105),x=i(522),S=i(550),M=i(523),C=i(203);function R(t){var e,i=0,a=0,r=t.length,n=t[a];for(a=0;a<r-1;a++)i+=((e=t[a+1])[0]-n[0])*(e[1]+n[1]),n=e;return i>=0}function E(t,e,i,a){var n,c=[],s=Object(r.a)(t);try{for(s.s();!(n=s.n()).done;){var h=n.value,o=h.slice(0);c.push(o);var l=e*(h[0]-a.x)-i*(h[1]-a.y)+a.x,p=i*(h[0]-a.x)+e*(h[1]-a.y)+a.y;o[0]=l,o[1]=p}}catch(u){s.e(u)}finally{s.f()}return c}var I=function(t,e,i){var a,n,c=t.spatialReference,s=e*Math.PI/180,h=Math.cos(s),o=Math.sin(s);if("xmin"in t&&(i=null!=(a=i)?a:t.center,t=new y.a({spatialReference:c,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]})),"paths"in t){var l;i=null!=(l=i)?l:t.extent.center;var p,u=[],b=Object(r.a)(t.paths);try{for(b.s();!(p=b.n()).done;){var f=p.value;u.push(E(f,h,o,i))}}catch(S){b.e(S)}finally{b.f()}return new d.a({spatialReference:c,paths:u})}if("rings"in t){var g;i=null!=(g=i)?g:t.extent.center;var _,m=[],G=Object(r.a)(t.rings);try{for(G.s();!(_=G.n()).done;){var O=_.value,k=R(O),j=E(O,h,o,i);R(j)!==k&&j.reverse(),m.push(j)}}catch(S){G.e(S)}finally{G.f()}return new y.a({spatialReference:c,rings:m})}if("x"in t){var w;i=null!=(w=i)?w:t;var x=new v.a({x:h*(t.x-i.x)-o*(t.y-i.y)+i.x,y:o*(t.x-i.x)+h*(t.y-i.y)+i.y,spatialReference:c});return null!=t.z&&(x.z=t.z),null!=t.m&&(x.m=t.m),x}return"points"in t?(i=null!=(n=i)?n:t.extent.center,new C.a({points:E(t.points,h,o,i),spatialReference:c})):null},P=i(1007),D=function t(e,i,a,r){Object(h.a)(this,t),this.graphics=e,this.mover=i,this.dx=a,this.dy=r,this.type="move-start"},L=function t(e,i,a,r){Object(h.a)(this,t),this.graphics=e,this.mover=i,this.dx=a,this.dy=r,this.type="move"},z=function t(e,i,a,r){Object(h.a)(this,t),this.graphics=e,this.mover=i,this.dx=a,this.dy=r,this.type="move-stop"},H=function t(e,i,a){Object(h.a)(this,t),this.graphics=e,this.mover=i,this.angle=a,this.type="rotate-start"},T=function t(e,i,a){Object(h.a)(this,t),this.graphics=e,this.mover=i,this.angle=a,this.type="rotate"},A=function t(e,i,a){Object(h.a)(this,t),this.graphics=e,this.mover=i,this.angle=a,this.type="rotate-stop"},B=function t(e,i,a,r){Object(h.a)(this,t),this.graphics=e,this.mover=i,this.xScale=a,this.yScale=r,this.type="scale-start"},N=function t(e,i,a,r){Object(h.a)(this,t),this.graphics=e,this.mover=i,this.xScale=a,this.yScale=r,this.type="scale"},Y=function t(e,i,a,r){Object(h.a)(this,t),this.graphics=e,this.mover=i,this.xScale=a,this.yScale=r,this.type="scale-stop"},U=x.b.transformGraphics,X={centerIndicator:new G.a({style:"cross",size:U.center.size,color:U.center.color}),fill:{default:new m.a({color:U.fill.color,outline:{color:U.fill.outlineColor,join:"round",width:1}}),active:new m.a({color:U.fill.stagedColor,outline:{color:U.fill.outlineColor,join:"round",style:"dash",width:1}})},handles:{default:new G.a({style:"square",size:U.vertex.size,color:U.vertex.color,outline:{color:U.vertex.outlineColor,width:1}}),hover:new G.a({style:"square",size:U.vertex.hoverSize,color:U.vertex.hoverColor,outline:{color:U.vertex.hoverOutlineColor,width:1}})},rotator:{default:new G.a({style:"circle",size:U.vertex.size,color:U.vertex.color,outline:{color:U.vertex.outlineColor,width:1}}),hover:new G.a({style:"circle",size:U.vertex.hoverSize,color:U.vertex.hoverColor,outline:{color:U.vertex.hoverOutlineColor,width:1}})},rotatorLine:new _.a({color:U.line.color,width:1})},V=function(t){Object(c.a)(i,t);var e=Object(s.a)(i);function i(t){var n;return Object(h.a)(this,i),(n=e.call(this,t))._activeHandleGraphic=null,n._graphicAttributes={esriSketchTool:"box"},n._handles=new k.a,n._mover=null,n._rotateGraphicOffset=20,n._angleOfRotation=0,n._rotateLineGraphic=null,n._startInfo=null,n._totalDx=0,n._totalDy=0,n._xScale=1,n._yScale=1,n.type="box",n.callbacks={onMoveStart:function(){},onMove:function(){},onMoveStop:function(){},onScaleStart:function(){},onScale:function(){},onScaleStop:function(){},onRotateStart:function(){},onRotate:function(){},onRotateStop:function(){},onGraphicClick:function(){}},n.centerGraphic=null,n.backgroundGraphic=null,n.enableMovement=!0,n.enableRotation=!0,n.enableScaling=!0,n.graphics=[],n.handleGraphics=[],n.layer=null,n.preserveAspectRatio=!1,n.rotateGraphic=null,n.showCenterGraphic=!0,n.view=null,n._getBounds=function(){var t=Object(w.i)();return function(e,i){e[0]=Number.POSITIVE_INFINITY,e[1]=Number.POSITIVE_INFINITY,e[2]=Number.NEGATIVE_INFINITY,e[3]=Number.NEGATIVE_INFINITY;var n,c=Object(r.a)(i);try{for(c.s();!(n=c.n()).done;){var s=n.value;if(s){var h=void 0,o=void 0,l=void 0,p=void 0;if("point"===s.type)h=l=s.x,o=p=s.y;else if("multipoint"===s.type){var u=Object(b.b)(s),v=Object(f.d)(t,[u]),y=Object(a.a)(v,4);h=y[0],o=y[1],l=y[2],p=y[3]}else if("extent"===s.type){var d=[s.xmin,s.ymin,s.xmax,s.ymax];h=d[0],o=d[1],l=d[2],p=d[3]}else{var g=Object(b.b)(s),_=Object(f.d)(t,g),m=Object(a.a)(_,4);h=m[0],o=m[1],l=m[2],p=m[3]}e[0]=Math.min(h,e[0]),e[1]=Math.min(o,e[1]),e[2]=Math.max(l,e[2]),e[3]=Math.max(p,e[3])}}}catch(G){c.e(G)}finally{c.f()}return e}}(),n}return Object(n.a)(i,[{key:"initialize",value:function(){var t=this;this._setup(),this._handles.add([Object(j.j)(this,"view.ready",(function(){var e=t.layer,i=t.view;Object(M.a)(i,e)})),Object(j.c)(this,"preserveAspectRatio",(function(){t._activeHandleGraphic&&(t._scaleGraphic(t._activeHandleGraphic),t._updateGraphics())})),Object(j.c)(this,"view.scale",(function(){t._updateRotateGraphic(),t._updateRotateLineGraphic()})),Object(j.c)(this,"graphics",(function(){return t.refresh()})),Object(j.c)(this,"layer",(function(e,i){i&&t._resetGraphics(i),t.refresh()}))])}},{key:"destroy",value:function(){this._reset(),this._handles&&(this._handles.removeAll(),this._handles=null)}},{key:"state",get:function(){var t=!!this.get("view.ready"),e=!(!this.get("graphics.length")||!this.get("layer"));return t&&e?"active":t?"ready":"disabled"}},{key:"symbols",set:function(t){var e=t||{},i=e.centerIndicator,a=void 0===i?X.centerIndicator:i,r=e.fill,n=void 0===r?X.fill:r,c=e.handles,s=void 0===c?X.handles:c,h=e.rotator,o=void 0===h?X.rotator:h,l=e.rotatorLine,p=void 0===l?X.rotatorLine:l;this._set("symbols",{centerIndicator:a,fill:n,handles:s,rotator:o,rotatorLine:p})}},{key:"isUIGraphic",value:function(t){var e=[];return this.handleGraphics.length&&(e=e.concat(this.handleGraphics)),this.backgroundGraphic&&e.push(this.backgroundGraphic),this.centerGraphic&&e.push(this.centerGraphic),this.rotateGraphic&&e.push(this.rotateGraphic),this._rotateLineGraphic&&e.push(this._rotateLineGraphic),e.length&&e.includes(t)}},{key:"move",value:function(t,e){if(this._mover&&this.graphics.length){var i,a=Object(r.a)(this.graphics);try{for(a.s();!(i=a.n()).done;){var n=i.value,c=n.geometry,s=Object(S.a)(c,t,e,this.view);n.geometry=s}}catch(h){a.e(h)}finally{a.f()}this.refresh(),this._emitMoveStopEvent(t,e,null)}}},{key:"scale",value:function(t,e){if(this._mover&&this.graphics.length){var i,a=Object(r.a)(this.graphics);try{for(a.s();!(i=a.n()).done;){var n=i.value,c=n.geometry,s=Object(S.e)(c,t,e);n.geometry=s}}catch(h){a.e(h)}finally{a.f()}this.refresh(),this._emitScaleStopEvent(t,e,null)}}},{key:"rotate",value:function(t,e){if(this._mover&&this.graphics.length){if(!e){var i=this.handleGraphics[1].geometry.x,a=this.handleGraphics[3].geometry.y;e=new v.a(i,a,this.view.spatialReference)}var n,c=Object(r.a)(this.graphics);try{for(c.s();!(n=c.n()).done;){var s=n.value,h=s.geometry,o=I(h,t,e);s.geometry=o}}catch(l){c.e(l)}finally{c.f()}this.refresh(),this._emitRotateStopEvent(t,null)}}},{key:"refresh",value:function(){this._reset(),this._setup()}},{key:"reset",value:function(){this.graphics=[]}},{key:"_setup",value:function(){"active"===this.state&&(this._setupGraphics(),this._setupMover(),this._updateGraphics())}},{key:"_reset",value:function(){this._resetGraphicStateVars(),this._resetGraphics(),this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"}},{key:"_resetGraphicStateVars",value:function(){this._startInfo=null,this._activeHandleGraphic=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this._angleOfRotation=0}},{key:"_resetGraphics",value:function(t){var e=t||this.layer;e&&(e.removeMany(this.handleGraphics),e.remove(this.backgroundGraphic),e.remove(this.centerGraphic),e.remove(this.rotateGraphic),e.remove(this._rotateLineGraphic));var i,a=Object(r.a)(this.handleGraphics);try{for(a.s();!(i=a.n()).done;){i.value.destroy()}}catch(n){a.e(n)}finally{a.f()}this._set("handleGraphics",[]),this.backgroundGraphic&&(this.backgroundGraphic.destroy(),this._set("backgroundGraphic",null)),this.centerGraphic&&(this.centerGraphic.destroy(),this._set("centerGraphic",null)),this.rotateGraphic&&(this.rotateGraphic.destroy(),this._set("rotateGraphic",null)),this._rotateLineGraphic&&(this._rotateLineGraphic.destroy(),this._rotateLineGraphic=null)}},{key:"_setupMover",value:function(){var t=this,e=[].concat(this.handleGraphics);this.enableMovement&&(e=e.concat(this.graphics,this.backgroundGraphic)),this.enableRotation&&e.push(this.rotateGraphic),this.showCenterGraphic&&e.push(this.centerGraphic),this._mover=new P.default({enableMoveAllGraphics:!1,view:this.view,graphics:e,callbacks:{onGraphicClick:function(e){return t._onGraphicClickCallback(e)},onGraphicMoveStart:function(e){return t._onGraphicMoveStartCallback(e)},onGraphicMove:function(e){return t._onGraphicMoveCallback(e)},onGraphicMoveStop:function(e){return t._onGraphicMoveStopCallback(e)},onGraphicPointerOver:function(e){return t._onGraphicPointerOverCallback(e)},onGraphicPointerOut:function(e){return t._onGraphicPointerOutCallback(e)}}})}},{key:"_getStartInfo",value:function(t){var e=this._getBoxBounds(Object(w.i)()),i=Object(a.a)(e,4),r=i[0],n=i[1],c=i[2],s=i[3],h=Math.abs(c-r),o=Math.abs(s-n),l=(c+r)/2,p=(s+n)/2,u=t.geometry;return{width:h,height:o,centerX:l,centerY:p,startX:u.x,startY:u.y,graphicInfos:this._getGraphicInfos(),box:this.backgroundGraphic.geometry,rotate:this.rotateGraphic.geometry}}},{key:"_getGraphicInfos",value:function(){var t=this;return this.graphics.map((function(e){return t._getGraphicInfo(e)}))}},{key:"_getGraphicInfo",value:function(t){var e=t.geometry,i=this._getBounds(Object(w.i)(),[e]),r=Object(a.a)(i,4),n=r[0],c=r[1],s=r[2],h=r[3];return{width:Math.abs(s-n),height:Math.abs(h-c),centerX:(s+n)/2,centerY:(h+c)/2,geometry:e}}},{key:"_onGraphicClickCallback",value:function(t){t.viewEvent.stopPropagation(),this.emit("graphic-click",t),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(t)}},{key:"_onGraphicMoveStartCallback",value:function(t){var e=this._angleOfRotation,i=this._xScale,a=this._yScale,r=this.backgroundGraphic,n=this.handleGraphics,c=this.rotateGraphic,s=this.symbols,h=t.graphic;this._resetGraphicStateVars(),this._hideGraphicsBeforeUpdate(),r.symbol=s.fill.active,this._startInfo=this._getStartInfo(h),h===c?(this.view.cursor="grabbing",this._emitRotateStartEvent(e,h)):n.includes(h)?(this._activeHandleGraphic=h,this._emitScaleStartEvent(i,a,h)):this._emitMoveStartEvent(t.dx,t.dy,h)}},{key:"_onGraphicMoveCallback",value:function(t){var e=t.graphic;if(this._startInfo)if(this.handleGraphics.includes(e))this._scaleGraphic(e),this._emitScaleEvent(this._xScale,this._yScale,e);else if(e===this.rotateGraphic)this._rotateGraphic(e),this._emitRotateEvent(this._angleOfRotation,e);else{var i=t.dx,a=t.dy;this._totalDx+=i,this._totalDy+=a,this._moveGraphic(e,i,a),this._emitMoveEvent(i,a,e)}}},{key:"_onGraphicMoveStopCallback",value:function(t){var e=t.graphic;if(this._startInfo){var i=this._angleOfRotation,a=this._totalDx,r=this._totalDy,n=this._xScale,c=this._yScale,s=this.backgroundGraphic,h=this.handleGraphics,o=this.rotateGraphic,l=this.symbols;this._updateGraphics(),this._showGraphicsAfterUpdate(),s.symbol=l.fill.default,e===o?(this.view.cursor="pointer",this._emitRotateStopEvent(i,e)):h.includes(e)?this._emitScaleStopEvent(n,c,e):this._emitMoveStopEvent(a,r,e),this._resetGraphicStateVars()}else this.refresh()}},{key:"_onGraphicPointerOverCallback",value:function(t){var e=this.backgroundGraphic,i=this.handleGraphics,a=this.graphics,r=this.rotateGraphic,n=this.symbols,c=this.view,s=t.graphic;if(s===r)return r.symbol=n.rotator.hover,void(c.cursor="pointer");if(a.includes(s)||s===e)c.cursor="move";else if(i.includes(s)){t.graphic.symbol=n.handles.hover;var h,o=c.rotation,l=t.index;switch(l<8&&(o>=0&&o<45?l%=8:l=o>=45&&o<90?(l+1)%8:o>=90&&o<135?(l+2)%8:o>=135&&o<180?(l+3)%8:o>=180&&o<225?(l+4)%8:o>=225&&o<270?(l+5)%8:o>=270&&o<315?(l+6)%8:(l+7)%8),l){case 0:h="nwse-resize";break;case 1:h="ns-resize";break;case 2:h="nesw-resize";break;case 3:h="ew-resize";break;case 4:h="nwse-resize";break;case 5:h="ns-resize";break;case 6:h="nesw-resize";break;case 7:h="ew-resize";break;default:h="pointer"}c.cursor=h}else c.cursor="pointer"}},{key:"_onGraphicPointerOutCallback",value:function(t){var e=this.handleGraphics,i=this.rotateGraphic,a=this.symbols,r=this.view;t.graphic===i?i.symbol=a.rotator.default:e.includes(t.graphic)&&(t.graphic.symbol=a.handles.default),r.cursor="default"}},{key:"_scaleGraphic",value:function(t){var e=this._startInfo,i=this.handleGraphics,a=this.preserveAspectRatio,n=this.view,c=e.centerX,s=e.centerY,h=e.startX,o=e.startY,l=n.state,p=l.resolution,u=l.transform,b=i.indexOf(t);1!==b&&5!==b||this._updateX(t,c),3!==b&&7!==b||this._updateY(t,s);var f=t.geometry,y=f.x,d=f.y,g=u[0]*y+u[2]*d+u[4],_=u[1]*y+u[3]*d+u[5],m=e.graphicInfos.map((function(t){return t.geometry}));if(a){var G=u[0]*c+u[2]*s+u[4],O=u[1]*c+u[3]*s+u[5],k=u[0]*h+u[2]*o+u[4],j=u[1]*h+u[3]*o+u[5];this._xScale=this._yScale=Object(S.c)(G,O,k,j,g,_);var w,x=Object(r.a)(m);try{for(x.s();!(w=x.n()).done;){var M=w.value,C=m.indexOf(M);this.graphics[C].geometry=Object(S.e)(M,this._xScale,this._yScale,[c,s])}}catch(W){x.e(W)}finally{x.f()}this._updateBackgroundGraphic()}else{var R=e.width,E=e.height,I=y-h,P=o-d;if(1===b||5===b?I=0:3!==b&&7!==b||(P=0),0===I&&0===P)return;var D=R+(h>c?I:-1*I),L=E+(o<s?P:-1*P),z=c+I/2,H=s+P/2;this._xScale=D/R||1,this._yScale=L/E||1,1===b||5===b?this._xScale=1:3!==b&&7!==b||(this._yScale=1);var T=(z-c)/p,A=(H-s)/p,B=Object(S.e)(e.box,this._xScale,this._yScale);this.backgroundGraphic.geometry=Object(S.a)(B,T,A,n,!0);var N,Y=this._getGraphicInfo(this.backgroundGraphic),U=Y.centerX,X=Y.centerY,V=(U-c)/p,q=-1*(X-s)/p,F=Object(r.a)(m);try{for(F.s();!(N=F.n()).done;){var J=N.value,K=m.indexOf(J),Q=Object(S.e)(J,this._xScale,this._yScale,[c,s]);this.graphics[K].geometry=Object(S.a)(Q,V,q,n,!0)}}catch(W){F.e(W)}finally{F.f()}this.centerGraphic.geometry=new v.a(U,X,n.spatialReference)}}},{key:"_rotateGraphic",value:function(t){var e=this._startInfo,i=e.centerX,a=e.centerY,n=e.startX,c=e.startY,s=e.box,h=e.rotate,o=t.geometry,l=o.x,p=o.y,u=new v.a(i,a,this.view.spatialReference);this._angleOfRotation=Object(S.b)(i,a,n,c,l,p);var b,f=this._startInfo.graphicInfos.map((function(t){return t.geometry})),y=Object(r.a)(f);try{for(y.s();!(b=y.n()).done;){var d=b.value,g=f.indexOf(d),_=I(d,this._angleOfRotation,u);this.graphics[g].geometry=_}}catch(m){y.e(m)}finally{y.f()}this.backgroundGraphic.geometry=I(s,this._angleOfRotation,u),this.rotateGraphic.geometry=I(h,this._angleOfRotation,u)}},{key:"_moveGraphic",value:function(t,e,i){if(this.graphics.includes(t)){var a=this.backgroundGraphic.geometry;this.backgroundGraphic.geometry=Object(S.a)(a,e,i,this.view);var n,c=Object(r.a)(this.graphics);try{for(c.s();!(n=c.n()).done;){var s=n.value;s!==t&&(s.geometry=Object(S.a)(s.geometry,e,i,this.view))}}catch(u){c.e(u)}finally{c.f()}}else if(t===this.centerGraphic){var h=this.backgroundGraphic.geometry;this.backgroundGraphic.geometry=Object(S.a)(h,e,i,this.view)}if(t===this.backgroundGraphic||t===this.centerGraphic){var o,l=Object(r.a)(this.graphics);try{for(l.s();!(o=l.n()).done;){var p=o.value;p.geometry=Object(S.a)(p.geometry,e,i,this.view)}}catch(u){l.e(u)}finally{l.f()}}}},{key:"_setupGraphics",value:function(){var t=this._graphicAttributes,e=this.symbols;this._set("centerGraphic",new O.a(null,e.centerIndicator,t)),this.showCenterGraphic&&this.layer.add(this.centerGraphic),this._set("backgroundGraphic",new O.a(null,e.fill.default,t)),this.layer.add(this.backgroundGraphic),this._rotateLineGraphic=new O.a(null,e.rotatorLine,t),this._set("rotateGraphic",new O.a(null,e.rotator.default,t)),this.enableRotation&&!this._hasExtentGraphic()&&(this.layer.add(this._rotateLineGraphic),this.layer.add(this.rotateGraphic));for(var i=0;i<8;i++)this.handleGraphics.push(new O.a(null,e.handles.default,t));this.enableScaling&&this.layer.addMany(this.handleGraphics)}},{key:"_updateGraphics",value:function(){this._updateBackgroundGraphic(),this._updateHandleGraphics(),this._updateCenterGraphic(),this._updateRotateGraphic(),this._updateRotateLineGraphic()}},{key:"_hideGraphicsBeforeUpdate",value:function(){this.centerGraphic.visible=!1,this.rotateGraphic.visible=!1,this._rotateLineGraphic.visible=!1,this.handleGraphics.forEach((function(t){return t.visible=!1}))}},{key:"_showGraphicsAfterUpdate",value:function(){this.enableRotation&&(this._rotateLineGraphic.visible=!0,this.rotateGraphic.visible=!0),this.showCenterGraphic&&(this.centerGraphic.visible=!0),this.enableScaling&&this.handleGraphics.forEach((function(t){return t.visible=!0}))}},{key:"_updateHandleGraphics",value:function(){var t=this,e=this._getCoordinates(!0);this.handleGraphics.forEach((function(i,r){var n=Object(a.a)(e[r],2),c=n[0],s=n[1];t._updateXY(i,c,s)}))}},{key:"_updateBackgroundGraphic",value:function(){var t=this._getCoordinates();this.backgroundGraphic.geometry=new y.a({rings:t,spatialReference:this.view.spatialReference})}},{key:"_updateCenterGraphic",value:function(){var t=this._getBoxBounds(Object(w.i)()),e=Object(a.a)(t,4),i=e[0],r=e[1],n=(e[2]+i)/2,c=(e[3]+r)/2;this.centerGraphic.geometry=new v.a(n,c,this.view.spatialReference)}},{key:"_updateRotateGraphic",value:function(){if(this.handleGraphics.length){var t=this.handleGraphics[1].geometry,e=t.x,i=t.y+this.view.state.resolution*this._rotateGraphicOffset;this.rotateGraphic.geometry=new v.a(e,i,this.view.spatialReference)}}},{key:"_updateRotateLineGraphic",value:function(){if(this.handleGraphics.length&&this.rotateGraphic&&this.rotateGraphic.geometry){var t=this.handleGraphics[1].geometry,e=this.rotateGraphic.geometry;this._rotateLineGraphic.geometry=new d.a({paths:[[t.x,t.y],[e.x,e.y]],spatialReference:this.view.spatialReference})}}},{key:"_updateXY",value:function(t,e,i){t.geometry=new v.a(e,i,this.view.spatialReference)}},{key:"_updateX",value:function(t,e){var i=t.geometry.y;t.geometry=new v.a(e,i,this.view.spatialReference)}},{key:"_updateY",value:function(t,e){var i=t.geometry.x;t.geometry=new v.a(i,e,this.view.spatialReference)}},{key:"_hasExtentGraphic",value:function(){return this.graphics.some((function(t){return t&&Object(l.k)(t.geometry)&&"extent"===t.geometry.type}))}},{key:"_getBoxBounds",value:function(t){var e=this.graphics.map((function(t){return t.geometry}));return this._getBounds(t,e)}},{key:"_getCoordinates",value:function(t){var e=this._getBoxBounds(Object(w.i)()),i=Object(a.a)(e,4),r=i[0],n=i[1],c=i[2],s=i[3];if(t){var h=(r+c)/2,o=(s+n)/2;return[[r,s],[h,s],[c,s],[c,o],[c,n],[h,n],[r,n],[r,o]]}return[[r,s],[c,s],[c,n],[r,n]]}},{key:"_emitMoveStartEvent",value:function(t,e,i){var a=new D(this.graphics,i,t,e);this.emit("move-start",a),this.callbacks.onMoveStart&&this.callbacks.onMoveStart(a)}},{key:"_emitMoveEvent",value:function(t,e,i){var a=new L(this.graphics,i,t,e);this.emit("move",a),this.callbacks.onMove&&this.callbacks.onMove(a)}},{key:"_emitMoveStopEvent",value:function(t,e,i){var a=new z(this.graphics,i,t,e);this.emit("move-stop",a),this.callbacks.onMoveStop&&this.callbacks.onMoveStop(a)}},{key:"_emitRotateStartEvent",value:function(t,e){var i=new H(this.graphics,e,t);this.emit("rotate-start",i),this.callbacks.onRotateStart&&this.callbacks.onRotateStart(i)}},{key:"_emitRotateEvent",value:function(t,e){var i=new T(this.graphics,e,t);this.emit("rotate",i),this.callbacks.onRotate&&this.callbacks.onRotate(i)}},{key:"_emitRotateStopEvent",value:function(t,e){var i=new A(this.graphics,e,t);this.emit("rotate-stop",i),this.callbacks.onRotateStop&&this.callbacks.onRotateStop(i)}},{key:"_emitScaleStartEvent",value:function(t,e,i){var a=new B(this.graphics,i,t,e);this.emit("scale-start",a),this.callbacks.onScaleStart&&this.callbacks.onScaleStart(a)}},{key:"_emitScaleEvent",value:function(t,e,i){var a=new N(this.graphics,i,t,e);this.emit("scale",a),this.callbacks.onScale&&this.callbacks.onScale(a)}},{key:"_emitScaleStopEvent",value:function(t,e,i){var a=new Y(this.graphics,i,t,e);this.emit("scale-stop",a),this.callbacks.onScaleStop&&this.callbacks.onScaleStop(a)}}]),i}(g.a.EventedAccessor);Object(o.a)([Object(p.b)()],V.prototype,"_rotateLineGraphic",void 0),Object(o.a)([Object(p.b)({readOnly:!0})],V.prototype,"type",void 0),Object(o.a)([Object(p.b)()],V.prototype,"callbacks",void 0),Object(o.a)([Object(p.b)({readOnly:!0})],V.prototype,"centerGraphic",void 0),Object(o.a)([Object(p.b)({readOnly:!0})],V.prototype,"backgroundGraphic",void 0),Object(o.a)([Object(p.b)()],V.prototype,"enableMovement",void 0),Object(o.a)([Object(p.b)()],V.prototype,"enableRotation",void 0),Object(o.a)([Object(p.b)()],V.prototype,"enableScaling",void 0),Object(o.a)([Object(p.b)()],V.prototype,"graphics",void 0),Object(o.a)([Object(p.b)({readOnly:!0})],V.prototype,"handleGraphics",void 0),Object(o.a)([Object(p.b)()],V.prototype,"layer",void 0),Object(o.a)([Object(p.b)()],V.prototype,"preserveAspectRatio",void 0),Object(o.a)([Object(p.b)({readOnly:!0})],V.prototype,"rotateGraphic",void 0),Object(o.a)([Object(p.b)()],V.prototype,"showCenterGraphic",void 0),Object(o.a)([Object(p.b)({readOnly:!0})],V.prototype,"state",null),Object(o.a)([Object(p.b)({value:X})],V.prototype,"symbols",null),Object(o.a)([Object(p.b)()],V.prototype,"view",void 0);var q=V=Object(o.a)([Object(u.a)("esri.views.draw.support.Box")],V);e.default=q},863:function(t,e,i){"use strict";function a(t,e){return e?"xoffset"in e&&e.xoffset?Math.max(t,Math.abs(e.xoffset)):"yoffset"in e&&e.yoffset?Math.max(t,Math.abs(e.yoffset||0)):t:t}function r(t,e){return"number"==typeof t?t:t&&t.stops&&t.stops.length?function(t){for(var e=0,i=0,a=0;a<t.length;a++){var r=t[a].size;"number"==typeof r&&(e+=r,i++)}return e/i}(t.stops):e}function n(t,e){if(!e)return t;var i=e.filter((function(t){return"size"===t.type})).map((function(e){var i=e.maxSize,a=e.minSize;return(r(i,t)+r(a,t))/2})),a=0,n=i.length;if(0===n)return t;for(var c=0;c<n;c++)a+=i[c];var s=Math.floor(a/n);return Math.max(s,t)}function c(t){var e=t&&t.renderer,i="touch"===(t&&t.event&&t.event.pointerType)?9:6;if(!e)return i;var r="visualVariables"in e?n(i,e.visualVariables):i;if("simple"===e.type)return a(r,e.symbol);if("unique-value"===e.type){var c=r;return e.uniqueValueInfos.forEach((function(t){c=a(c,t.symbol)})),c}if("class-breaks"===e.type){var s=r;return e.classBreakInfos.forEach((function(t){s=a(s,t.symbol)})),s}return e.type,r}i.d(e,"a",(function(){return c}))},873:function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return h}));var a=i(6),r=i(57),n=(i(78),i(62)),c=i(863);function s(t,e,i){var c,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new r.a;if("2d"===i.type)c=e*i.resolution;else if("3d"===i.type){var h=i.overlayPixelSizeInMapUnits(t),o=i.basemapSpatialReference;c=Object(a.k)(o)&&!o.equals(i.spatialReference)?Object(n.f)(o)/Object(n.f)(i.spatialReference):e*h}var l=t.x-c,p=t.y-c,u=t.x+c,v=t.y+c,b=i.spatialReference;return s.xmin=Math.min(l,u),s.ymin=Math.min(p,v),s.xmax=Math.max(l,u),s.ymax=Math.max(p,v),s.spatialReference=b,s}function h(t,e,i){var r=i.toMap(t);return!Object(a.j)(r)&&s(r,Object(c.a)(),i,o).intersects(e)}var o=new r.a},908:function(t,e,i){"use strict";i.d(e,"a",(function(){return j}));var a=i(2),r=i(3),n=i(4),c=i(5),s=i(0),h=(i(14),i(6)),o=i(12),l=(i(17),i(1)),p=i(8),u=(i(11),i(18),i(19),i(31)),v=i(70),b=i(37),f=i(26),y=i(13),d=i(130),g=i(438),_=i(538),m=i(34),G=i(149),O=i(873),k=o.a.getLogger("esri.views.interactive.GraphicManipulator"),j=function(t){Object(n.a)(i,t);var e=Object(c.a)(i);function i(t){var r;return Object(a.a)(this,i),(r=e.call(this,t)).layer=null,r.interactive=!0,r.selectable=!1,r.grabbable=!0,r.dragging=!1,r.cursor=null,r.events=new v.a.EventEmitter,r._circleCollisionCache=null,r._graphicSymbolChangedHandle=null,r._originalSymbol=null,r}return Object(r.a)(i,[{key:"graphic",set:function(t){"mesh"!==Object(h.i)(t.geometry,"type")?(this._circleCollisionCache=null,this._originalSymbol=t.symbol,this._set("graphic",t),this.attachSymbolChanged()):k.error("Mesh geometries are not supported")}},{key:"elevationInfo",get:function(){var t="elevationInfo"in this.graphic.layer&&this.graphic.layer.elevationInfo,e=Object(G.e)(this.graphic),i=t?t.offset:0;return new g.a({mode:e,offset:i})}},{key:"focusedSymbol",set:function(t){t!==this._get("focusedSymbol")&&(this._set("focusedSymbol",t),this._updateGraphicSymbol(),this._circleCollisionCache=null)}},{key:"grabbableForEvent",value:function(){return!0}},{key:"grabbing",set:function(t){t!==this._get("grabbing")&&(this._set("grabbing",t),this._updateGraphicSymbol())}},{key:"hovering",set:function(t){t!==this._get("hovering")&&(this._set("hovering",t),this._updateGraphicSymbol())}},{key:"selected",set:function(t){t!==this._get("selected")&&(this._set("selected",t),this._updateGraphicSymbol(),this.events.emit("select-changed",{action:t?"select":"deselect"}))}},{key:"_focused",get:function(){return this._get("hovering")||this._get("grabbing")}},{key:"destroy",value:function(){this.detachSymbolChanged(),this._resetGraphicSymbol(),this._set("view",null)}},{key:"intersectionDistance",value:function(t){var e=this.graphic;if(!1===e.visible)return null;var i=e.geometry;if(Object(h.j)(i))return null;var a=this._get("focusedSymbol"),r=Object(h.k)(a)?a:e.symbol;return"2d"===this.view.type?this._intersectDistance2D(this.view,t,i,r):this._intersectDistance3D(this.view,t,e)}},{key:"attach",value:function(){this.attachSymbolChanged(),Object(h.k)(this.layer)&&this.layer.add(this.graphic)}},{key:"detach",value:function(){this.detachSymbolChanged(),this._resetGraphicSymbol(),Object(h.k)(this.layer)&&this.layer.remove(this.graphic)}},{key:"attachSymbolChanged",value:function(){var t=this;this.detachSymbolChanged(),this._graphicSymbolChangedHandle=this.graphic.watch("symbol",(function(e){Object(h.k)(e)&&e!==t.focusedSymbol&&e!==t._originalSymbol&&(t._originalSymbol=e,t._focused&&Object(h.k)(t.focusedSymbol)&&(t.graphic.symbol=t.focusedSymbol))}),!0)}},{key:"detachSymbolChanged",value:function(){Object(h.k)(this._graphicSymbolChangedHandle)&&(this._graphicSymbolChangedHandle.remove(),this._graphicSymbolChangedHandle=null)}},{key:"_updateGraphicSymbol",value:function(){this.graphic.symbol=this._focused&&Object(h.k)(this.focusedSymbol)?this.focusedSymbol:this._originalSymbol}},{key:"_resetGraphicSymbol",value:function(){this.graphic.symbol=this._originalSymbol}},{key:"_intersectDistance2D",value:function(t,e,i,a){if(a=a||Object(_.e)(i),Object(h.j)(a))return null;var r=this._circleCollisionCache;if("point"!==i.type||"simple-marker"!==a.type)return Object(O.b)(e,i,t)?1:null;if(Object(h.j)(r)||!r.originalPoint.equals(i)){var n=i,c=t.spatialReference;if(Object(d.b)(n.spatialReference,c)){var s=Object(d.j)(n,c);r={originalPoint:n.clone(),mapPoint:s,radiusPx:Object(b.h)(a.size)},this._circleCollisionCache=r}}if(Object(h.k)(r)){var o=Object(b.j)(e,x),l=t.toScreen(r.mapPoint),p=r.radiusPx,u=l.x+Object(b.h)(a.xoffset),v=l.y-Object(b.h)(a.yoffset);return Object(m.j)(o,[u,v])<p*p?1:null}return null}},{key:"_intersectDistance3D",value:function(t,e,i){var a=t.toMap(e,{include:[i]});return a&&Object(d.o)(a,w,t.renderSpatialReference)?Object(y.n)(w,t.state.camera.eye):null}}]),i}(u.a);Object(s.a)([Object(l.b)({constructOnly:!0,nonNullable:!0})],j.prototype,"graphic",null),Object(s.a)([Object(l.b)({readOnly:!0})],j.prototype,"elevationInfo",null),Object(s.a)([Object(l.b)({constructOnly:!0,nonNullable:!0})],j.prototype,"view",void 0),Object(s.a)([Object(l.b)({value:null})],j.prototype,"focusedSymbol",null),Object(s.a)([Object(l.b)({constructOnly:!0})],j.prototype,"layer",void 0),Object(s.a)([Object(l.b)()],j.prototype,"interactive",void 0),Object(s.a)([Object(l.b)()],j.prototype,"selectable",void 0),Object(s.a)([Object(l.b)()],j.prototype,"grabbable",void 0),Object(s.a)([Object(l.b)({value:!1})],j.prototype,"grabbing",null),Object(s.a)([Object(l.b)()],j.prototype,"dragging",void 0),Object(s.a)([Object(l.b)()],j.prototype,"hovering",null),Object(s.a)([Object(l.b)({value:!1})],j.prototype,"selected",null),Object(s.a)([Object(l.b)()],j.prototype,"cursor",void 0),j=Object(s.a)([Object(p.a)("esri.views.interactive.GraphicManipulator")],j);var w=Object(f.e)(),x=Object(b.g)()}}]);
//# sourceMappingURL=71.5978e16a.chunk.js.map