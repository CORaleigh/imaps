(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[184],{1063:function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return E}));var s=i(79),r=(i(111),i(129)),a=i(121),n=i(89),c=i(85),o=i(112),h=i(81),l=(i(83),i(80)),p=i(491),u=i(600),b=i(795);class y{constructor(t,e,i,s,r){this.graphic=t,this.index=e,this.x=i,this.y=s,this.viewEvent=r,this.type="graphic-click"}}class d{constructor(t,e,i,s,r){this.graphic=t,this.index=e,this.x=i,this.y=s,this.viewEvent=r,this.type="graphic-double-click"}}class f{constructor(t,e,i,s,r,a,n,c,o,h){this.graphic=t,this.allGraphics=e,this.index=i,this.x=s,this.y=r,this.dx=a,this.dy=n,this.totalDx=c,this.totalDy=o,this.viewEvent=h,this.defaultPrevented=!1,this.type="graphic-move-start"}preventDefault(){this.defaultPrevented=!0}}class g{constructor(t,e,i,s,r,a,n,c,o,h){this.graphic=t,this.allGraphics=e,this.index=i,this.x=s,this.y=r,this.dx=a,this.dy=n,this.totalDx=c,this.totalDy=o,this.viewEvent=h,this.defaultPrevented=!1,this.type="graphic-move"}preventDefault(){this.defaultPrevented=!0}}class v{constructor(t,e,i,s,r,a,n,c,o,h){this.graphic=t,this.allGraphics=e,this.index=i,this.x=s,this.y=r,this.dx=a,this.dy=n,this.totalDx=c,this.totalDy=o,this.viewEvent=h,this.defaultPrevented=!1,this.type="graphic-move-stop"}preventDefault(){this.defaultPrevented=!0}}class m{constructor(t,e,i,s,r){this.graphic=t,this.index=e,this.x=i,this.y=s,this.viewEvent=r,this.type="graphic-pointer-over"}}class _{constructor(t,e,i,s,r){this.graphic=t,this.index=e,this.x=i,this.y=s,this.viewEvent=r,this.type="graphic-pointer-out"}}class O{constructor(t,e,i,s,r){this.graphic=t,this.index=e,this.x=i,this.y=s,this.viewEvent=r,this.type="graphic-pointer-down"}}class x{constructor(t,e,i,s,r){this.graphic=t,this.index=e,this.x=i,this.y=s,this.viewEvent=r,this.type="graphic-pointer-up"}}var j=i(426),w=i(713),G=i(490),k=i(242),S=i(190),M=i(184);let D=class extends r.a.EventedAccessor{constructor(t){super(t),this._activeGraphic=null,this._indicators=[],this._dragEvent=null,this._handles=new a.a,this._hoverGraphic=null,this._initialDragGeometry=null,this._viewHandles=new a.a,this._manipulators=[],this._layerViews=null,this.type="graphic-mover",this.callbacks={onGraphicClick(){},onGraphicDoubleClick(){},onGraphicMoveStart(){},onGraphicMove(){},onGraphicMoveStop(){},onGraphicPointerOver(){},onGraphicPointerOut(){},onGraphicPointerDown(){},onGraphicPointerUp(){}},this.enableMoveAllGraphics=!1,this.graphics=[],this.indicatorsEnabled=!0,this.layer=new p.a({listMode:"hide",internal:!0,title:"GraphicMover highlight layer"}),this.view=null}initialize(){Object(b.a)(this.view,this.layer),this.refresh(),this._handles.add([Object(o.d)(this,["graphics","graphics.length"],(()=>this.refresh())),Object(o.j)(this,"view.ready",(()=>{this._viewHandles.add([this.view.on("immediate-click",(t=>this._clickHandler(t)),j.b.TOOL),this.view.on("double-click",(t=>this._doubleClickHandler(t)),j.b.TOOL),this.view.on("pointer-down",(t=>this._pointerDownHandler(t)),j.b.TOOL),this.view.on("pointer-move",(t=>this._pointerMoveHandler(t)),j.b.TOOL),this.view.on("pointer-up",(t=>this._pointerUpHandler(t)),j.b.TOOL),this.view.on("drag",(t=>this._dragHandler(t)),j.b.TOOL),this.view.on("key-down",(t=>this._keyDownHandler(t)),j.b.TOOL)])}))])}destroy(){var t;this._removeIndicators(),null==(t=this.view.map)||t.remove(this.layer),this.layer.destroy(),this.reset(),this._manipulators.forEach((t=>t.destroy())),this._manipulators=null,this._handles=Object(c.e)(this._handles),this._viewHandles=Object(c.e)(this._viewHandles)}get state(){const t=!!this.get("view.ready"),e=!!this.get("graphics.length"),i=this._activeGraphic;return t&&e?i?"moving":"active":t?"ready":"disabled"}refresh(){this._setUpIndicators(),this._setUpManipulators(),this._syncLayerViews()}reset(){this._activeGraphic=null,this._hoverGraphic=null,this._dragEvent=null}updateGeometry(t,e){const i=this.graphics[t];i&&(i.set("geometry",e),this._setUpIndicators())}_clickHandler(t){const e=this._findTargetGraphic(Object(G.a)(t));if(e){const i=new y(e,this.graphics.indexOf(e),t.x,t.y,t);this.emit("graphic-click",i),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(i)}}_doubleClickHandler(t){const e=this._findTargetGraphic(Object(G.a)(t));if(e){const i=new d(e,this.graphics.indexOf(e),t.x,t.y,t);this.emit("graphic-double-click",i),this.callbacks.onGraphicDoubleClick&&this.callbacks.onGraphicDoubleClick(i)}}_pointerDownHandler(t){const e=this._findTargetGraphic(Object(G.a)(t));if(e){this._activeGraphic=e;const{x:i,y:s}=t,r=new O(e,this.graphics.indexOf(e),i,s,t);this.emit("graphic-pointer-down",r),this.callbacks.onGraphicPointerDown&&this.callbacks.onGraphicPointerDown(r)}else this._activeGraphic=null}_pointerUpHandler(t){if(this._activeGraphic){const{x:e,y:i}=t,s=this.graphics.indexOf(this._activeGraphic),r=new x(this._activeGraphic,s,e,i,t);this.emit("graphic-pointer-up",r),this.callbacks.onGraphicPointerUp&&this.callbacks.onGraphicPointerUp(r)}}_pointerMoveHandler(t){if(this._dragEvent)return;const e=this._findTargetGraphic(Object(G.a)(t));if(e){const{x:i,y:s}=t;if(this._hoverGraphic){if(this._hoverGraphic===e)return;const r=this.graphics.indexOf(this._hoverGraphic),a=new _(this.graphics[r],r,i,s,t);this._hoverGraphic=null,this.emit("graphic-pointer-out",a),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(a)}const r=this.graphics.indexOf(e),a=new m(e,r,i,s,t);return this._hoverGraphic=e,this.emit("graphic-pointer-over",a),void(this.callbacks.onGraphicPointerOver&&this.callbacks.onGraphicPointerOver(a))}if(this._hoverGraphic){const{x:e,y:i}=t,s=this.graphics.indexOf(this._hoverGraphic),r=new _(this.graphics[s],s,e,i,t);this._hoverGraphic=null,this.emit("graphic-pointer-out",r),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(r)}}_dragHandler(t){if("start"!==t.action&&!this._dragEvent||!this._activeGraphic||!this._activeGraphic.geometry)return;"start"===t.action&&this._removeIndicators(),t.stopPropagation();const{action:e,x:i,y:s}=t,r=this.graphics.indexOf(this._activeGraphic),a=this._dragEvent?i-this._dragEvent.x:0,c=this._dragEvent?s-this._dragEvent.y:0,o=i-t.origin.x,h=s-t.origin.y,l="start"===e?this._activeGraphic.geometry:this._initialDragGeometry,p=Object(u.a)(l,o,h,this.view);if(this._activeGraphic.geometry=p,this.enableMoveAllGraphics&&this.graphics.forEach((t=>{t!==this._activeGraphic&&(t.geometry=Object(u.a)(t.geometry,a,c,this.view))})),this._dragEvent=t,"start"===e){this._initialDragGeometry=Object(n.a)(l);const e=new f(this._activeGraphic,this.graphics,r,i,s,a,c,o,h,t);this.emit("graphic-move-start",e),this.callbacks.onGraphicMoveStart&&this.callbacks.onGraphicMoveStart(e),e.defaultPrevented&&this._activeGraphic.set("geometry",l)}else if("update"===e){const e=new g(this._activeGraphic,this.graphics,r,i,s,a,c,o,h,t);this.emit("graphic-move",e),this.callbacks.onGraphicMove&&this.callbacks.onGraphicMove(e),e.defaultPrevented&&(this._activeGraphic.geometry=l)}else{const e=new v(this._activeGraphic,this.graphics,r,i,s,a,c,o,h,t);this._dragEvent=null,this._activeGraphic=null,this._setUpIndicators(),this.emit("graphic-move-stop",e),this.callbacks.onGraphicMoveStop&&this.callbacks.onGraphicMoveStop(e),e.defaultPrevented&&(this.graphics[r].set("geometry",this._initialDragGeometry),this._setUpIndicators()),this._initialDragGeometry=null}}_keyDownHandler(t){"a"!==t.key&&"d"!==t.key&&"n"!==t.key||"moving"!==this.state||t.stopPropagation()}_findTargetGraphic(t){const e=this.view.toMap(t);let i=null,s=Number.MAX_VALUE;this._syncLayerViews();const r=this._layerViews.flatMap((t=>"graphicsViews"in t?Array.from(t.graphicsViews(),(t=>t.hitTest(e))).flat():t.graphicsView.hitTest(e))).filter((t=>this.graphics.indexOf(t)>-1));return r.length?r[0]:(this._manipulators.forEach((e=>{const r=e.intersectionDistance(t);Object(c.l)(r)&&r<s&&(s=r,i=e.graphic)})),i)}_syncLayerViews(){this._layerViews=[];const t=new Set;for(const e of this.graphics){const i=this.view.allLayerViews.find((t=>{const i=t.layer;return"sublayers"in i&&Object(c.l)(i.sublayers)&&!!i.sublayers.find((t=>t===e.layer))||i===e.layer}));i&&t.add(i)}this._layerViews=[...t]}_setUpManipulators(){const{graphics:t,view:e}=this;this._manipulators.forEach((t=>t.destroy())),this._manipulators=null!=t&&t.length?t.map((t=>new w.a({graphic:t,view:e}))):[]}_setUpIndicators(){var t;this._removeIndicators(),this.indicatorsEnabled&&(this._indicators=(null==(t=this.graphics)?void 0:t.map((t=>{const e=t.clone();return e.symbol=this._getSymbolForIndicator(t),e})))||[],this.layer.addMany(this._indicators))}_removeIndicators(){this._indicators.length&&(this.layer.removeMany(this._indicators),this._indicators.forEach((t=>t.destroy())),this._indicators=[])}_getSymbolForIndicator(t){if(Object(c.k)(t.symbol))return null;switch(t.symbol.type){case"cim":return new k.a({style:"circle",size:12,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}});case"picture-marker":{const{xoffset:e,yoffset:i,height:s,width:r}=t.symbol,a=s===r?r:Math.max(s,r);return new k.a({xoffset:e,yoffset:i,size:a,style:"square",color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}case"simple-marker":{const{xoffset:e,yoffset:i,size:s,style:r}=t.symbol;return new k.a({xoffset:e,yoffset:i,style:"circle"===r?"circle":"square",size:s+2,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}case"simple-fill":return new M.a({color:[0,0,0,0],outline:{style:"dash",color:[255,127,0,1],width:1}});case"simple-line":return new S.a({color:[255,127,0,1],style:"dash",width:1});case"text":{const{xoffset:e,yoffset:i}=t.symbol;return new k.a({xoffset:e,yoffset:i,size:12,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}default:return null}}};Object(s.a)([Object(h.b)()],D.prototype,"_activeGraphic",void 0),Object(s.a)([Object(h.b)({readOnly:!0})],D.prototype,"type",void 0),Object(s.a)([Object(h.b)()],D.prototype,"callbacks",void 0),Object(s.a)([Object(h.b)()],D.prototype,"enableMoveAllGraphics",void 0),Object(s.a)([Object(h.b)()],D.prototype,"graphics",void 0),Object(s.a)([Object(h.b)()],D.prototype,"indicatorsEnabled",void 0),Object(s.a)([Object(h.b)()],D.prototype,"layer",void 0),Object(s.a)([Object(h.b)({readOnly:!0})],D.prototype,"state",null),Object(s.a)([Object(h.b)()],D.prototype,"view",void 0),D=Object(s.a)([Object(l.a)("esri.views.draw.support.GraphicMover")],D);const E=D},576:function(t,e,i){"use strict";function s(t,e){return e?"xoffset"in e&&e.xoffset?Math.max(t,Math.abs(e.xoffset)):"yoffset"in e&&e.yoffset?Math.max(t,Math.abs(e.yoffset||0)):t:t}function r(t,e){return"number"==typeof t?t:t&&t.stops&&t.stops.length?function(t){let e=0,i=0;for(let s=0;s<t.length;s++){const r=t[s].size;"number"==typeof r&&(e+=r,i++)}return e/i}(t.stops):e}function a(t,e){if(!e)return t;const i=e.filter((t=>"size"===t.type)).map((e=>{const{maxSize:i,minSize:s}=e;return(r(i,t)+r(s,t))/2}));let s=0;const a=i.length;if(0===a)return t;for(let r=0;r<a;r++)s+=i[r];const n=Math.floor(s/a);return Math.max(n,t)}function n(t){const e=t&&t.renderer,i="touch"===(t&&t.event&&t.event.pointerType)?9:6;if(!e)return i;const r="visualVariables"in e?a(i,e.visualVariables):i;if("simple"===e.type)return s(r,e.symbol);if("unique-value"===e.type){let t=r;return e.uniqueValueInfos.forEach((e=>{t=s(t,e.symbol)})),t}if("class-breaks"===e.type){let t=r;return e.classBreakInfos.forEach((e=>{t=s(t,e.symbol)})),t}return e.type,r}i.d(e,"a",(function(){return n}))},600:function(t,e,i){"use strict";i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return p})),i.d(e,"c",(function(){return l})),i.d(e,"d",(function(){return c})),i.d(e,"e",(function(){return h}));var s=i(113),r=i(118),a=i(196),n=i(246);function c(t,e,i,s){if(null==s||t.hasZ||(s=void 0),"point"===t.type)return t.x+=e,t.y+=i,t.hasZ&&null!=s&&(t.z+=s),t;if("multipoint"===t.type){const r=t.points;for(let t=0;t<r.length;t++)r[t]=u(r[t],e,i,s);return t}if("extent"===t.type)return t.xmin+=e,t.xmax+=e,t.ymin+=i,t.ymax+=i,null!=s&&(t.zmin+=s,t.zmax+=s),t;const r=Object(n.b)(t),a="polyline"===t.type?t.paths:t.rings;for(let n=0;n<r.length;n++){const t=r[n];for(let r=0;r<t.length;r++)t[r]=u(t[r],e,i,s)}return"paths"in t?t.paths=a:t.rings=a,t}function o(t,e,i,s,r){const a=t.clone(),o=s.resolution;if("point"===a.type){if(r)c(a,e*o,-i*o);else{const t=s.state.transform,r=s.state.inverseTransform,n=t[0]*a.x+t[2]*a.y+t[4],c=t[1]*a.x+t[3]*a.y+t[5];a.x=r[0]*(n+e)+r[2]*(c+i)+r[4],a.y=r[1]*(n+e)+r[3]*(c+i)+r[5]}return a}if("multipoint"===a.type){if(r)c(a,e*o,-i*o);else{const t=a.points,r=s.state.transform,n=s.state.inverseTransform;for(let s=0;s<t.length;s++){const a=t[s],c=r[0]*a[0]+r[2]*a[1]+r[4],o=r[1]*a[0]+r[3]*a[1]+r[5],h=n[0]*(c+e)+n[2]*(o+i)+n[4],l=n[1]*(c+e)+n[3]*(o+i)+n[5];t[s]=b(a,h,l,void 0)}}return a}if("extent"===a.type){if(r)c(a,e*o,-i*o);else{const t=s.state.transform,r=s.state.inverseTransform,n=t[0]*a.xmin+t[2]*a.ymin+t[4],c=t[1]*a.xmin+t[3]*a.ymin+t[5],o=t[0]*a.xmax+t[2]*a.ymax+t[4],h=t[1]*a.xmax+t[3]*a.ymax+t[5];a.xmin=r[0]*(n+e)+r[2]*(c+i)+r[4],a.ymin=r[1]*(n+e)+r[3]*(c+i)+r[5],a.xmax=r[0]*(o+e)+r[2]*(h+i)+r[4],a.ymax=r[1]*(o+e)+r[3]*(h+i)+r[5]}return a}if(r)c(a,e*o,-i*o);else{const t=Object(n.b)(a),r="polyline"===a.type?a.paths:a.rings,c=s.state.transform,o=s.state.inverseTransform;for(let s=0;s<t.length;s++){const r=t[s];for(let t=0;t<r.length;t++){const s=r[t],a=c[0]*s[0]+c[2]*s[1]+c[4],n=c[1]*s[0]+c[3]*s[1]+c[5],h=o[0]*(a+e)+o[2]*(n+i)+o[4],l=o[1]*(a+e)+o[3]*(n+i)+o[5];r[t]=b(s,h,l,void 0)}}"paths"in a?a.paths=r:a.rings=r}return a}function h(t,e,i,s){if("point"===t.type){const{x:r,y:a}=t,n=s?s[0]:r,c=s?s[1]:a,o=t.clone(),h=(r-n)*e+n,l=(a-c)*i+c;return o.x=h,o.y=l,o}if("multipoint"===t.type){const c=Object(n.b)(t),o=Object(r.l)(),[h,l,p,u]=Object(a.d)(o,[c]),y=s?s[0]:(h+p)/2,d=s?s[1]:(u+l)/2,f=t.clone(),g=f.points;for(let t=0;t<g.length;t++){const s=g[t],[r,a]=s,n=(r-y)*e+y,c=(a-d)*i+d;g[t]=b(s,n,c,void 0)}return f}if("extent"===t.type){const{xmin:r,xmax:a,ymin:n,ymax:c}=t,o=s?s[0]:(r+a)/2,h=s?s[1]:(c+n)/2,l=t.clone();if(l.xmin=(r-o)*e+o,l.ymax=(c-h)*i+h,l.xmax=(a-o)*e+o,l.ymin=(n-h)*i+h,l.xmin>l.xmax){const t=l.xmin,e=l.xmax;l.xmin=e,l.xmax=t}if(l.ymin>l.ymax){const t=l.ymin,e=l.ymax;l.ymin=e,l.ymax=t}return l}const c=Object(n.b)(t),o=Object(r.l)(),[h,l,p,u]=Object(a.d)(o,c),y=s?s[0]:(h+p)/2,d=s?s[1]:(u+l)/2,f=t.clone(),g="polyline"===f.type?f.paths:f.rings;for(let r=0;r<c.length;r++){const t=c[r];for(let s=0;s<t.length;s++){const a=t[s],[n,c]=a,o=(n-y)*e+y,h=(c-d)*i+d;g[r][s]=b(a,o,h,void 0)}}return"paths"in f?f.paths=g:f.rings=g,f}function l(t,e,i,s,r,a){const n=Math.sqrt((i-t)*(i-t)+(s-e)*(s-e));return Math.sqrt((r-t)*(r-t)+(a-e)*(a-e))/n}function p(t,e,i){const r=Math.atan2(e.y-i.y,e.x-i.x)-Math.atan2(t.y-i.y,t.x-i.x),a=Math.atan2(Math.sin(r),Math.cos(r));return Object(s.n)(a)}function u(t,e,i,s){return b(t,t[0]+e,t[1]+i,null!=t[2]&&null!=s?t[2]+s:void 0)}function b(t,e,i,s){const r=[e,i];return t.length>2&&r.push(null!=s?s:t[2]),t.length>3&&r.push(t[3]),r}},620:function(t,e,i){"use strict";i.d(e,"a",(function(){return c})),i.d(e,"b",(function(){return o}));i(97);var s=i(85),r=i(114),a=i(576),n=i(96);function c(t,e,i,a=new n.a){let c;if("2d"===i.type)c=e*i.resolution;else if("3d"===i.type){const a=i.overlayPixelSizeInMapUnits(t),n=i.basemapSpatialReference;c=Object(s.l)(n)&&!n.equals(i.spatialReference)?Object(r.e)(n)/Object(r.e)(i.spatialReference):e*a}const o=t.x-c,h=t.y-c,l=t.x+c,p=t.y+c,{spatialReference:u}=i;return a.xmin=Math.min(o,l),a.ymin=Math.min(h,p),a.xmax=Math.max(o,l),a.ymax=Math.max(h,p),a.spatialReference=u,a}function o(t,e,i){const r=i.toMap(t);return!Object(s.k)(r)&&c(r,Object(a.a)(),i,h).intersects(e)}const h=new n.a},713:function(t,e,i){"use strict";i.d(e,"a",(function(){return v}));var s=i(79),r=i(99),a=i(129),n=i(85),c=i(101),o=i(81),h=(i(84),i(82),i(83),i(80)),l=i(145),p=i(116),u=i(106),b=i(207),y=i(386),d=i(297),f=i(311),g=i(620);let v=class extends r.a{constructor(t){super(t),this.layer=null,this.interactive=!0,this.selectable=!1,this.grabbable=!0,this.dragging=!1,this.cursor=null,this.events=new a.a.EventEmitter,this._circleCollisionCache=null,this._graphicSymbolChangedHandle=null,this._originalSymbol=null}set graphic(t){this._circleCollisionCache=null,this._originalSymbol=t.symbol,this._set("graphic",t),this.attachSymbolChanged()}get elevationInfo(){const t="elevationInfo"in this.graphic.layer&&this.graphic.layer.elevationInfo,e=Object(y.f)(this.graphic),i=t?t.offset:0;return new f.a({mode:e,offset:i})}set focusedSymbol(t){t!==this._get("focusedSymbol")&&(this._set("focusedSymbol",t),this._updateGraphicSymbol(),this._circleCollisionCache=null)}grabbableForEvent(){return!0}set grabbing(t){t!==this._get("grabbing")&&(this._set("grabbing",t),this._updateGraphicSymbol())}set hovering(t){t!==this._get("hovering")&&(this._set("hovering",t),this._updateGraphicSymbol())}set selected(t){t!==this._get("selected")&&(this._set("selected",t),this._updateGraphicSymbol(),this.events.emit("select-changed",{action:t?"select":"deselect"}))}get _focused(){return this._get("hovering")||this._get("grabbing")}destroy(){this.detachSymbolChanged(),this._resetGraphicSymbol(),this._set("view",null)}intersectionDistance(t){const e=this.graphic;if(!1===e.visible)return null;const i=e.geometry;if(Object(n.k)(i))return null;const s=this._get("focusedSymbol"),r=Object(n.l)(s)?s:e.symbol;return"2d"===this.view.type?this._intersectDistance2D(this.view,t,i,r):this._intersectDistance3D(this.view,t,e)}attach(){this.attachSymbolChanged(),Object(n.l)(this.layer)&&this.layer.add(this.graphic)}detach(){this.detachSymbolChanged(),this._resetGraphicSymbol(),Object(n.l)(this.layer)&&this.layer.remove(this.graphic)}attachSymbolChanged(){this.detachSymbolChanged(),this._graphicSymbolChangedHandle=this.graphic.watch("symbol",(t=>{Object(n.l)(t)&&t!==this.focusedSymbol&&t!==this._originalSymbol&&(this._originalSymbol=t,this._focused&&Object(n.l)(this.focusedSymbol)&&(this.graphic.symbol=this.focusedSymbol))}),!0)}detachSymbolChanged(){Object(n.l)(this._graphicSymbolChangedHandle)&&(this._graphicSymbolChangedHandle.remove(),this._graphicSymbolChangedHandle=null)}_updateGraphicSymbol(){this.graphic.symbol=this._focused&&Object(n.l)(this.focusedSymbol)?this.focusedSymbol:this._originalSymbol}_resetGraphicSymbol(){this.graphic.symbol=this._originalSymbol}_intersectDistance2D(t,e,i,s){if(s=s||Object(d.h)(i),Object(n.k)(s))return null;let r=this._circleCollisionCache;if("point"!==i.type||"simple-marker"!==s.type)return Object(g.b)(e,i,t)?1:null;if(Object(n.k)(r)||!r.originalPoint.equals(i)){const e=i,a=t.spatialReference;if(Object(b.b)(e.spatialReference,a)){const t=Object(b.j)(e,a);r={originalPoint:e.clone(),mapPoint:t,radiusPx:Object(c.g)(s.size)},this._circleCollisionCache=r}}if(Object(n.l)(r)){const i=Object(c.i)(e,_),a=t.toScreen(r.mapPoint),n=r.radiusPx,o=a.x+Object(c.g)(s.xoffset),h=a.y-Object(c.g)(s.yoffset);return Object(l.a)(i,[o,h])<n*n?1:null}return null}_intersectDistance3D(t,e,i){const s=t.toMap(e,{include:[i]});return s&&Object(b.o)(s,m,t.renderSpatialReference)?Object(p.m)(m,t.state.camera.eye):null}};Object(s.a)([Object(o.b)({constructOnly:!0,nonNullable:!0})],v.prototype,"graphic",null),Object(s.a)([Object(o.b)({readOnly:!0})],v.prototype,"elevationInfo",null),Object(s.a)([Object(o.b)({constructOnly:!0,nonNullable:!0})],v.prototype,"view",void 0),Object(s.a)([Object(o.b)({value:null})],v.prototype,"focusedSymbol",null),Object(s.a)([Object(o.b)({constructOnly:!0})],v.prototype,"layer",void 0),Object(s.a)([Object(o.b)()],v.prototype,"interactive",void 0),Object(s.a)([Object(o.b)()],v.prototype,"selectable",void 0),Object(s.a)([Object(o.b)()],v.prototype,"grabbable",void 0),Object(s.a)([Object(o.b)({value:!1})],v.prototype,"grabbing",null),Object(s.a)([Object(o.b)()],v.prototype,"dragging",void 0),Object(s.a)([Object(o.b)()],v.prototype,"hovering",null),Object(s.a)([Object(o.b)({value:!1})],v.prototype,"selected",null),Object(s.a)([Object(o.b)()],v.prototype,"cursor",void 0),v=Object(s.a)([Object(h.a)("esri.views.interactive.GraphicManipulator")],v);const m=Object(u.f)(),_=Object(c.f)()}}]);
//# sourceMappingURL=184.89cba361.chunk.js.map