(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[103],{1014:function(e,t,i){"use strict";i.d(t,"a",(function(){return c})),i.d(t,"b",(function(){return d}));var r=i(152),s=i(158),n=i(364),a=i(219),o=i(279),l=i(222);class c{constructor(e=Object(r.e)(),t=Object(r.e)()){this.startRenderSpace=e,this.endRenderSpace=t,this.type="euclidean"}eval(e,t,i){return Object(s.h)(t,this.startRenderSpace,this.endRenderSpace,e),i&&(Object(s.i)(i,this.endRenderSpace,this.startRenderSpace),Object(s.q)(i,i)),t}createRenderGeometry(e,t){const i=[],r=[],n=(t,n)=>{const a=u;Object(s.i)(a,t,e),i.push([a[0],a[1],a[2]]),r.push([n[0],n[1],n[2]])},a=t.worldUpAtPosition(this.eval(.5,h),l.d.get());return n(this.startRenderSpace,a),n(this.endRenderSpace,a),{points:i,normals:r}}}class d{constructor(e,t,i){this.startRenderSpace=e,this.endRenderSpace=t,this.renderSpatialReference=i,this.type="geodesic",this._start=Object(r.e)(),this._end=Object(r.e)(),this._pcpf=Object(a.g)(i),this._project=Object(o.b)(i,this._pcpf),this._projectIn(e,this._start),this._projectIn(t,this._end)}_projectIn(e,t){this._project?Object(o.r)(e,this.renderSpatialReference,t,this._pcpf):Object(s.j)(t,e)}eval(e,t,i){if(this._project)if(i){const r=u;Object(n.i)(this._start,this._end,e,t,r),Object(s.e)(p,t,r),Object(o.r)(t,this._pcpf,t,this.renderSpatialReference),Object(o.r)(p,this._pcpf,p,this.renderSpatialReference),Object(s.i)(i,p,t),Object(s.q)(i,i)}else Object(n.h)(this._start,this._end,e,t),Object(o.r)(t,this._pcpf,t,this.renderSpatialReference);else Object(s.h)(t,this._start,this._end,e),i&&(Object(s.i)(i,this._end,this._start),Object(s.q)(i,i));return t}createRenderGeometry(e,t){const i=[],r=[],n=(t,n)=>{const a=p;Object(s.i)(a,t,e),i.push([a[0],a[1],a[2]]),r.push([n[0],n[1],n[2]])};for(let s=0;s<128;++s){const e=s/127,i=h,r=u;this.eval(e,i),t.worldUpAtPosition(i,r),n(i,r)}return{points:i,normals:r}}}const h=Object(r.e)(),u=Object(r.e)(),p=Object(r.e)()},1015:function(e,t,i){"use strict";i.d(t,"a",(function(){return c})),i.d(t,"b",(function(){return s})),i.d(t,"c",(function(){return o})),i.d(t,"d",(function(){return l})),i.d(t,"e",(function(){return n})),i.d(t,"f",(function(){return a}));var r=i(534);function s(e,t,i,s=2,n="abbr"){return Object(r.b)(e,t.toUnit(i).value,i,s,n)}function n(e,t,i=2,s="abbr"){if("length"!==t.measure)throw new Error("quantity is not a length");return Object(r.h)(e,t.value,t.unit,i,s)}function a(e,t,i=2,s="abbr"){if("length"!==t.measure)throw new Error("quantity is not a length");return Object(r.i)(e,t.value,t.unit,i,s)}function o(e,t,i=2,s="abbr"){if("length"!==t.measure)throw new Error("quantity is not a length");return Object(r.e)(e,t.value,t.unit,i,s)}function l(e,t,i=2,s="abbr"){if("length"!==t.measure)throw new Error("quantity is not a length");return Object(r.f)(e,t.value,t.unit,i,s)}function c(e){if("angle"!==e.measure)throw new Error("quantity is not an angle");return Object(r.a)(e.value,e.unit)}},1024:function(e,t,i){"use strict";i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return n}));var r=i(165),s=i(303);function n(){const e=new s.a;e.vertex.uniforms.add("proj","mat4").add("view","mat4").add("width","float"),e.attributes.add("position","vec3"),e.attributes.add("normal","vec3"),e.attributes.add("uv0","vec2"),e.attributes.add("auxpos1","float"),e.varyings.add("vtc","vec2"),e.varyings.add("vlength","float"),e.varyings.add("vradius","float"),e.vertex.code.add(r.a`
    void main(void) {
      vec3 bitangent = normal;

      vtc = uv0;
      vlength = auxpos1;
      vradius = 0.5 * width;

      vec4 pos = view * vec4(position + vradius * bitangent * uv0.y, 1.0);
      gl_Position = proj * pos;
    }
  `),e.fragment.uniforms.add("outlineSize","float").add("outlineColor","vec4").add("stripeLength","float").add("stripeEvenColor","vec4").add("stripeOddColor","vec4");const t=1/Math.sqrt(2);return e.fragment.code.add(r.a`
    const float INV_SQRT2 = ${r.a.float(t)};

    vec4 arrowColor(vec2 tc, float len) {
      float d = INV_SQRT2 * (tc.x - abs(tc.y));
      d = min(d, INV_SQRT2 * (len - tc.x - abs(tc.y)));
      d = min(d, 1.0 - abs(tc.y));

      if (d < 0.0) {
        return vec4(0.0);
      } else if (d < outlineSize) {
        return outlineColor;
      } else {
        return fract(0.5 / stripeLength * tc.x * vradius) >= 0.5 ? stripeOddColor : stripeEvenColor;
      }
    }

    void main(void) {
      vec2 ntc = vec2(vtc.x / vradius, vtc.y);
      vec4 color = arrowColor(ntc, vlength / vradius);
      if (color.a == 0.0) {
        discard;
      }
      gl_FragColor = color;
    }
  `),e}var a=Object.freeze({__proto__:null,build:n})},1030:function(e,t,i){"use strict";i.d(t,"a",(function(){return w})),i.d(t,"b",(function(){return z}));var r=i(138),s=i(153),n=i(152),a=i(158),o=i(166),l=i(181),c=i(562),d=i(803),h=i(131),u=(i(129),i(130),i(137),i(134)),p=i(133),v=(i(132),i(135),i(136),i(146));i(390);let b=(e,t,i)=>{for(let r=0,s=t.length;r<s;r++){let s=t[r];Array.isArray(s)?b(e,s,i):null!=s&&!1!==s&&("string"==typeof s&&(s={vnodeSelector:"",properties:void 0,children:void 0,text:s.toString(),domNode:null}),i.push(s))}};function m(e,t,i){if(Array.isArray(t))i=t,t=void 0;else if(t&&("string"==typeof t||t.hasOwnProperty("vnodeSelector"))||i&&("string"==typeof i||i.hasOwnProperty("vnodeSelector")))throw new Error("h called with invalid arguments");let r,s;return i&&1===i.length&&"string"==typeof i[0]?r=i[0]:i&&(s=[],b(e,i,s),0===s.length&&(s=void 0)),{vnodeSelector:e,properties:t,children:s,text:""===r?void 0:r,domNode:null}}i(452);let f=class extends v.a{constructor(e){super(e),this.startX=0,this.startY=0,this.endX=0,this.endY=0,this.width=1,this.color=[0,0,0,.5],this.visible=!0}get startPosition(){return[this.startX,this.startY]}set startPosition(e){this._set("startX",e[0]),this._set("startY",e[1])}get endPosition(){return[this.endX,this.endY]}set endPosition(e){this._set("endX",e[0]),this._set("endY",e[1])}get strokeStyle(){const e=this.color;return`rgba(${e[0]}, ${e[1]}, ${e[2]}, ${e[3]})`}get lineCap(){return"round"}render(){const{height:e,left:t,top:i,width:r,x1:s,x2:n,y1:a,y2:o}=this.calculateCoordinates(g),l=`stroke: ${this.strokeStyle}; stroke-width: ${this.width}; stroke-linecap: ${this.lineCap};`;return m("div",{classes:{"esri-line-overlay-item":!0},styles:{left:t+"px",top:i+"px",width:r+"px",height:e+"px",visibility:this.visible?"visible":"hidden"}},[m("svg",{width:r,height:e},[m("line",{x1:s,y1:a,x2:n,y2:o,style:l})])])}renderCanvas(e){if(!this.visible)return;e.strokeStyle=this.strokeStyle,e.lineWidth=this.width,e.lineCap=this.lineCap;const t=this.calculateCoordinates(g);e.beginPath(),e.moveTo(t.left+t.x1,t.top+t.y1),e.lineTo(t.left+t.x2,t.top+t.y2),e.stroke()}calculateCoordinates(e){const t=Math.min(this.startX,this.endX),i=Math.max(this.startX,this.endX),r=Math.min(this.startY,this.endY),s=Math.max(this.startY,this.endY),n=this.width;return e.left=t-n,e.top=r-n,e.width=i-t+2*n,e.height=Math.max(20,s-r+2*n),e.x1=this.startX-t+n,e.y1=this.startY-r+n,e.x2=this.endX-t+n,e.y2=this.endY-r+n,e}};Object(h.a)([Object(u.b)()],f.prototype,"startX",void 0),Object(h.a)([Object(u.b)()],f.prototype,"startY",void 0),Object(h.a)([Object(u.b)()],f.prototype,"endX",void 0),Object(h.a)([Object(u.b)()],f.prototype,"endY",void 0),Object(h.a)([Object(u.b)()],f.prototype,"startPosition",null),Object(h.a)([Object(u.b)()],f.prototype,"endPosition",null),Object(h.a)([Object(u.b)()],f.prototype,"width",void 0),Object(h.a)([Object(u.b)()],f.prototype,"color",void 0),Object(h.a)([Object(u.b)()],f.prototype,"visible",void 0),Object(h.a)([Object(u.b)({readOnly:!0})],f.prototype,"strokeStyle",null),f=Object(h.a)([Object(p.a)("esri.views.overlay.LineOverlayItem")],f);const g={left:0,top:0,width:0,height:0,x1:0,y1:0,x2:0,y2:0};var O=f;const _={bottom:"esri-text-overlay-item-anchor-bottom","bottom-right":"esri-text-overlay-item-anchor-bottom-right","bottom-left":"esri-text-overlay-item-anchor-bottom-left",top:"esri-text-overlay-item-anchor-top","top-right":"esri-text-overlay-item-anchor-top-right","top-left":"esri-text-overlay-item-anchor-top-left",center:"esri-text-overlay-item-anchor-center",right:"esri-text-overlay-item-anchor-right",left:"esri-text-overlay-item-anchor-left"};let j=class extends v.a{constructor(e){super(e),this.x=0,this.y=0,this.text="-",this.fontSize=14,this.anchor="center",this.visible=!0,this.backgroundColor="rgba(0, 0, 0, 0.6)",this.textColor="white",this.textShadowColor=[0,0,0],this.textShadowSize=1}get position(){return[this.x,this.y]}set position(e){this._set("x",e[0]),this._set("y",e[1])}get padding(){return.5*this.fontSize}render(){return m("div",{classes:this._cssClasses(),styles:{left:Math.floor(this.x)+"px",top:Math.floor(this.y)+"px",visibility:this.visible?"visible":"hidden",fontSize:this.fontSize+"px",backgroundColor:this.backgroundColor,color:this.textColor,padding:this.padding+"px",borderRadius:this.padding+"px",textShadow:`0 0 ${this.textShadowSize}px rgb(${this.textShadowColor[0]}, ${this.textShadowColor[1]}, ${this.textShadowColor[2]})`}},[this.text])}renderCanvas(e){if(!this.visible)return;const t=e.font.replace(/^(.*?)px/,"");e.font=`${this.fontSize}px ${t}`;const i=this.padding,r=this.padding,s=e.measureText(this.text).width,n=this.fontSize,a=y[this.anchor];e.textAlign="center",e.textBaseline="middle";const o=s+2*i,l=n+2*i,c=this.x+a.x*o,d=this.y+a.y*l;this.roundedRect(e,c,d,o,l,r),e.fillStyle=this.backgroundColor,e.fill();const h=this.x+(a.x+.5)*o,u=this.y+(a.y+.5)*l;this._renderTextShadow(e,this.text,h,u),e.fillStyle=this.textColor,e.fillText(this.text,h,u)}_renderTextShadow(e,t,i,r){e.lineJoin="miter",e.fillStyle=`rgba(${this.textShadowColor[0]}, ${this.textShadowColor[1]}, ${this.textShadowColor[2]}, ${1/x.length})`;const s=this.textShadowSize;for(const[n,a]of x)e.fillText(t,i+s*n,r+s*a)}roundedRect(e,t,i,r,s,n){e.beginPath(),e.moveTo(t,i+n),e.arcTo(t,i,t+n,i,n),e.lineTo(t+r-n,i),e.arcTo(t+r,i,t+r,i+n,n),e.lineTo(t+r,i+s-n),e.arcTo(t+r,i+s,t+r-n,i+s,n),e.lineTo(t+n,i+s),e.arcTo(t,i+s,t,i+s-n,n),e.closePath()}_cssClasses(){const e={"esri-text-overlay-item":!0};for(const t in _)e[_[t]]=this.anchor===t;return e}};Object(h.a)([Object(u.b)()],j.prototype,"x",void 0),Object(h.a)([Object(u.b)()],j.prototype,"y",void 0),Object(h.a)([Object(u.b)()],j.prototype,"position",null),Object(h.a)([Object(u.b)()],j.prototype,"text",void 0),Object(h.a)([Object(u.b)()],j.prototype,"fontSize",void 0),Object(h.a)([Object(u.b)()],j.prototype,"anchor",void 0),Object(h.a)([Object(u.b)()],j.prototype,"visible",void 0),Object(h.a)([Object(u.b)()],j.prototype,"padding",null),j=Object(h.a)([Object(p.a)("esri.views.overlay.TextOverlayItem")],j);const y={bottom:{x:-.5,y:-1,textAlign:"center",textBaseline:"bottom"},"bottom-left":{x:0,y:-1,textAlign:"left",textBaseline:"bottom"},"bottom-right":{x:-1,y:-1,textAlign:"right",textBaseline:"bottom"},center:{x:-.5,y:-.5,textAlign:"center",textBaseline:"middle"},left:{x:0,y:-.5,textAlign:"left",textBaseline:"middle"},right:{x:-1,y:-.5,textAlign:"right",textBaseline:"middle"},top:{x:-.5,y:0,textAlign:"center",textBaseline:"top"},"top-left":{x:0,y:0,textAlign:"left",textBaseline:"top"},"top-right":{x:-1,y:0,textAlign:"right",textBaseline:"top"}},x=[];{const e=16;for(let t=0;t<360;t+=360/e)x.push([Math.cos(Math.PI*t/180),Math.sin(Math.PI*t/180)])}var S=j;class w extends c.a{constructor(e){super(e.view),this._handles=new o.a,this._textItem=null,this._calloutItem=null,this._showCallout=!0,this._showText=!0,this._geometry=null,this._text=null,this._fontSize=14,this._distance=25,this._anchor="right",this.applyProps(e)}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this._updateLabelPosition()}get textItem(){return this._textItem}get text(){return this._text}set text(e){this._text=e,this.attached&&(this._textItem.text=this._text)}get fontSize(){return this._fontSize}set fontSize(e){this._fontSize=e,this.attached&&(this._textItem.fontSize=this._fontSize)}get distance(){return this._distance}set distance(e){this._distance!==e&&(this._distance=e,this._updateLabelPosition())}get anchor(){return this._anchor}set anchor(e){this._anchor!==e&&(this._anchor=e,this._updateLabelPosition())}overlaps(e){return this.textItem.visible&&e.textItem.visible&&this.view.overlay.overlaps(this._textItem,e.textItem)}_updateLabelPosition(){if(this.attached){if(this._showText=!1,this._showCallout=!1,Object(r.k)(this.geometry)&&this.view._stage)switch(this.geometry.type){case"point":this._computeLabelPositionFromPoint(this.geometry,V)&&(this._textItem.position=[V[0],V[1]],this._textItem.anchor="center",this._showText=!0);break;case"corner":this._computeLabelPositionFromCorner(this.geometry,this._distance,V,I)&&(this._showCallout=this._updatePosition(V,I),this._showText=!0);break;case"segment":this._computeLabelPositionFromSegment(this.geometry,this._distance,this._anchor,V,I)&&(this._showText=!0,this._showCallout=this._updatePosition(V,I))}this.updateVisibility(this.visible)}}_computeLabelPositionFromPoint(e,t){this.view.renderCoordsHelper.toRenderCoords(e,R);const i=this.view._stage.camera;return i.projectToRenderScreen(R,T),!(T[2]<0||T[2]>1)&&(i.renderToScreen(T,t),!0)}_computeLabelPositionFromCorner(e,t,i,r){if(!e)return!1;const s=this.view._stage.camera;return C(e.left,1,s,D),Object(l.n)(D,D),C(e.right,0,s,A),Object(l.h)(M,D,A),Object(l.n)(M,M),Object(l.e)(M,M),s.projectToRenderScreen(e.left.endRenderSpace,T),!(T[2]<0||T[2]>1)&&(s.renderToScreen(T,i),Object(l.a)(M,M,t*s.pixelRatio),Object(l.h)(M,M,T),s.renderToScreen(M,r),!0)}_computeLabelPositionFromSegment(e,t,i,r,s){if(!e)return!1;const n=e.segment,a=this.view._stage.camera;Object(d.e)(n.startRenderSpace,n.endRenderSpace,D,a),Object(l.r)(M,-D[1],D[0]);let o=!1;switch(i){case"top":o=M[1]<0;break;case"bottom":o=M[1]>0;break;case"left":o=M[0]>0;break;case"right":o=M[0]<0}if(o&&Object(l.n)(M,M),0===Object(l.l)(M))switch(i){case"top":M[1]=1;break;case"bottom":M[1]=-1;break;case"left":M[0]=-1;break;case"right":M[0]=1}return n.eval(G[e.sampleLocation],R),a.projectToRenderScreen(R,T),!(T[2]<0||T[2]>1)&&(a.renderToScreen(T,r),Object(l.a)(M,M,t*a.pixelRatio),Object(l.h)(M,M,T),a.renderToScreen(M,s),!0)}_updatePosition(e,t){if(t){const i=t[0]-e[0],r=t[1]-e[1];return this._textItem.position=[t[0],t[1]],this._textItem.anchor=Math.abs(i)>Math.abs(r)?i>0?"left":"right":r>0?"top":"bottom",this._calloutItem.startPosition=[e[0],e[1]],this._calloutItem.endPosition=[t[0],t[1]],!0}return this._textItem.position=[e[0],e[1]],this._textItem.anchor="center",!1}createResources(){this._textItem=new S({visible:!0}),this._textItem.text=Object(r.q)(this._text),this._textItem.fontSize=this._fontSize,this._calloutItem=new O({visible:!0,width:2}),this._updateLabelPosition(),this.view.overlay.items.addMany([this._textItem,this._calloutItem]),this._handles.add(this.view.state.watch("camera",(()=>{this._updateLabelPosition()})))}destroyResources(){this.view.overlay&&!this.view.overlay.destroyed&&this.view.overlay.items.removeMany([this._textItem,this._calloutItem]),this._handles.removeAll()}updateVisibility(e){this._textItem.visible=this._showText&&e,this._calloutItem.visible=this._showCallout&&e}}function C(e,t,i,r){e.eval(t,P,L),Object(a.e)(E,P,L),i.projectToRenderScreen(P,q),i.projectToRenderScreen(E,U),Object(l.d)(r,N,F),Object(l.e)(r,r)}function z(e){switch(e){case"top":return"bottom";case"right":return"left";case"bottom":return"top";case"left":return"right"}}const P=Object(n.e)(),E=Object(n.e)(),L=Object(n.e)(),D=Object(s.d)(),A=Object(s.d)(),M=Object(s.d)(),R=Object(n.e)(),T=Object(s.e)(),V=Object(s.g)(),I=Object(s.g)(),q=Object(s.e)(),F=q,U=Object(s.e)(),N=U,G={start:0,center:.5,end:1}},1276:function(e,t,i){"use strict";i.r(t),i.d(t,"DirectLineMeasurement3DView",(function(){return ie}));var r=i(131),s=(i(129),i(138)),n=(i(130),i(137),i(134)),a=i(133),o=(i(132),i(135),i(136),i(146)),l=i(198),c=i(154),d=i(153),h=i(273),u=(i(220),i(152)),p=i(158),v=i(166),b=i(219),m=i(163),f=i(161),g=i(1015),O=i(181),_=i(423),j=i(830),y=i(736),x=i(803),S=i(1030),w=i(945),C=i(1014),z=i(216),P=i(222),E=i(421),L=i(514),D=i(418),A=i(434),M=i(428),R=i(348),T=i(354),V=i(361),I=i(353),q=i(332),F=i(313),U=i(429),N=i(1024);class G extends T.a{constructor(e,t){super(e,t)}initializeProgram(e){const t=G.shader.get().build();return new q.a(e.rctx,t.generateSource("vertex"),t.generateSource("fragment"),I.a)}bindPass(e,t,i){U.a.bindProjectionMatrix(this.program,i.camera.projectionMatrix),this.program.setUniform1f("width",t.width),this.program.setUniform1f("outlineSize",t.outlineSize),this.program.setUniform4fv("outlineColor",t.outlineColor),this.program.setUniform1f("stripeLength",t.stripeLength),this.program.setUniform4fv("stripeEvenColor",t.stripeEvenColor),this.program.setUniform4fv("stripeOddColor",t.stripeOddColor)}bindDraw(e){U.a.bindView(this.program,e)}initializePipeline(){return Object(F.d)({polygonOffset:this.configuration.polygonOffsetEnabled&&{factor:0,units:-4},depthTest:{func:513},depthWrite:F.c,colorWrite:F.b})}get primitiveType(){return 5}}G.shader=new R.a(N.a,(()=>i.e(295).then(i.bind(null,1252))));class W extends V.a{constructor(){super(...arguments),this.polygonOffsetEnabled=!1}}Object(r.a)([Object(V.b)()],W.prototype,"polygonOffsetEnabled",void 0);class k extends M.a{constructor(e){super(e,H),this.techniqueConfig=new W}getTechniqueConfig(){return this.techniqueConfig.polygonOffsetEnabled=this.params.polygonOffset,this.techniqueConfig}dispose(){}getPassParameters(){return this.params}intersect(){}createBufferWriter(){return new K}getGLMaterial(e){return 0===e.output?new B(e):void 0}}class B extends A.a{constructor(e){super(e),this.updateParameters()}updateParameters(){this.technique=this.techniqueRep.acquireAndReleaseExisting(G,this.material.getTechniqueConfig(),this.technique)}beginSlot(e){return 3===e}bind(e,t){e.bindProgram(this.technique.program),this.technique.bindPass(e,this.material.getPassParameters(),t)}}const H={width:32,outlineSize:.2,outlineColor:[1,.5,0,1],stripeLength:1,stripeEvenColor:[1,1,1,1],stripeOddColor:[1,.5,0,1],polygonOffset:!1,...M.b},$=Object(D.a)().vec3f("position").vec3f("normal").vec2f("uv0").f32("auxpos1"),X=Object(u.e)(),J=Object(u.e)(),Q=Object(u.e)(),Y=Object(u.e)(),Z=Object(u.e)();class K{constructor(){this.vertexBufferLayout=$}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return 2*(e.indices.get("position").length/2+1)}write(e,t,i,r){const s=t.vertexAttributes.get("position").data,n=t.vertexAttributes.get("normal").data,a=s.length/3,o=t&&t.indices&&t.indices.get("position");o&&o.length!==2*(a-1)&&console.warn("MeasurementArrowMaterial does not support indices");const l=X,c=J,d=Q,h=Y,u=Z,v=e.transformation,b=e.invTranspTransformation,m=i.position,f=i.normal,g=i.uv0;let O=0;for(let j=0;j<a;++j){const e=3*j;if(Object(p.v)(l,s[e],s[e+1],s[e+2]),j<a-1){const e=3*(j+1);Object(p.v)(c,s[e],s[e+1],s[e+2]),Object(p.v)(u,n[e],n[e+1],n[e+2]),Object(p.q)(u,u),Object(p.i)(d,c,l),Object(p.q)(d,d),Object(p.f)(h,u,d),Object(p.q)(h,h)}const t=Object(p.n)(l,c);v&&b&&(Object(p.l)(l,l,v),Object(p.l)(c,c,v),Object(p.l)(h,h,b));const i=r+2*j,o=i+1;m.setVec(i,l),m.setVec(o,l),f.setVec(i,h),f.setVec(o,h),g.set(i,0,O),g.set(i,1,-1),g.set(o,0,O),g.set(o,1,1),j<a-1&&(O+=t)}const _=i.auxpos1;for(let p=0;p<2*a;++p)_.set(r+p,O)}}class ee extends L.a{constructor(e){super(e),this._parameters=te,this._handles=null,this._origin=Object(u.e)(),this._originTransform=Object(z.b)(),this._arrowCenter=Object(u.e)(),this._renderOccluded=4,this._geometry=null,this._stripeLength=1,this._stripesEnabled=!0,this.applyProps(e)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._arrowMaterial&&this._arrowMaterial.setParameterValues({renderOccluded:e}))}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this.geometryChanged()}get stripeLength(){return this._stripeLength}set stripeLength(e){this._stripeLength=e,this.attached&&this._arrowMaterial.setParameterValues({stripeLength:this._stripeLength})}get stripesEnabled(){return this._stripesEnabled}set stripesEnabled(e){if(this._stripesEnabled=e,this.attached){const e=this._stripesEnabled?this._parameters.arrowStripeEvenColor:this._parameters.arrowStripeOddColor;this._arrowMaterial.setParameterValues({stripeEvenColor:e})}}createExternalResources(){const e=this._stripesEnabled?this._parameters.arrowStripeEvenColor:this._parameters.arrowStripeOddColor;this._arrowMaterial=new k({outlineColor:this._parameters.arrowOutlineColor,stripeEvenColor:e,stripeOddColor:this._parameters.arrowStripeOddColor,renderOccluded:this.renderOccluded,polygonOffset:!0}),this._handles=new v.a,this._handles.add(this.view.state.watch("camera",(()=>{this.viewChanged()})))}destroyExternalResources(){this._arrowMaterial=null,this._handles.destroy(),this._handles=null}forEachExternalMaterial(e){e(this._arrowMaterial)}createGeometries(e){if(Object(s.j)(this._geometry)||Object(s.j)(this._geometry.startRenderSpace)||Object(s.j)(this._geometry.endRenderSpace))return;const t=this._createArrowGeometry(this._geometry.startRenderSpace,this._geometry.endRenderSpace,this._origin,this._geometry);e.addGeometry(t,this._arrowMaterial,this._originTransform),this.viewChanged()}_createArrowGeometry(e,t,i,r){const s=this.view.renderCoordsHelper,n=[],a=[],o=(e,t)=>{const r=P.d.get();Object(p.i)(r,e,i),n.push(r),a.push(t)};if("euclidean"===r.type){r.eval(.5,this._arrowCenter);const i=P.d.get();s.worldUpAtPosition(this._arrowCenter,i),o(e,i),o(t,i)}else{r.eval(.5,this._arrowCenter);const e=this._parameters.arrowSubdivisions+1&-2;for(let t=0;t<e;++t){const i=t/(e-1),n=P.d.get(),a=P.d.get();r.eval(i,n),s.worldUpAtPosition(n,a),o(n,a)}}return E.a.createPolylineGeometry(n,a)}geometryChanged(){this.recreateGeometry()}viewChanged(){if(this.view.ready&&this.attached&&Object(s.k)(this._geometry)){const e=this.view._stage.camera.computeScreenPixelSizeAt(this._arrowCenter);this._arrowMaterial.setParameterValues({width:this._parameters.arrowWidth*e})}}}const te={arrowWidth:16,arrowOutlineColor:[1,.5,0,1],arrowOutlineWidth:.2,arrowStripeEvenColor:[1,1,1,1],arrowStripeOddColor:[1,.5,0,1],arrowStripeLength:16,arrowSubdivisions:128};let ie=class extends o.a{constructor(e){super(e),this._params={...ae},this._handles=new v.a,this._segmentVisualElement=null,this._triangleVisualElement=null,this._rightAngleQuad=null,this._projectedGeodesicLine=null,this._geodesicStartHint=null,this._geodesicEndHint=null,this._segmentLabel=null,this._verticalLabel=null,this._horizontalLabel=null,this._segmentLabelDisplayedMeasurement="euclidean",this._startPosition=Object(u.e)(),this._endPosition=Object(u.e)(),this._cornerPosition=Object(u.e)(),this._startPositionAtSeaLevel=Object(u.e)(),this._endPositionAtSeaLevel=Object(u.e)(),this._viewMode="none",this._geometryDirty=!0,this.state="pending",this.messages=null,this._visualizedMeasurement="auto",this._actualVisualizedMeasurement="euclidean",this._visualElementOrientation="auto",this._triangleOrientationOverride=null,this._triangleCollapseRatioThreshold=.03,this._geodesicDistanceThreshold=1e5}initialize(){this._handles.add(Object(f.j)(this.view,"ready",(()=>this._initialize()),!0))}_initialize(){switch(this.state){case"ready":throw new Error("invalid state");case"destroyed":return}this._segmentVisualElement=new ee({attached:!0,view:this.view,geometry:null,renderOccluded:4}),this._triangleVisualElement=new w.a({attached:!0,view:this.view,width:this._params.triangleLineWidth,color:this._params.triangleColor,renderOccluded:4}),this._rightAngleQuad=new y.a({attached:!0,view:this.view,color:ne,renderOccluded:4}),this._projectedGeodesicLine=new w.a({attached:!0,view:this.view,width:this._params.geodesicProjectionLineWidth,color:this._params.geodesicProjectionLineColor,polygonOffset:!0,stipplePattern:Object(j.c)(this._params.guideStippleLengthPixels),stippleIntegerRepeats:!1,renderOccluded:4}),this._geodesicStartHint=new w.a({attached:!0,view:this.view,width:this._params.guideLineWidth,color:this._params.geodesicProjectionLineColor,polygonOffset:!0,stipplePattern:Object(j.c)(this._params.guideStippleLengthPixels),stippleIntegerRepeats:!1,renderOccluded:4}),this._geodesicEndHint=new w.a({attached:!0,view:this.view,width:this._params.guideLineWidth,color:this._params.geodesicProjectionLineColor,polygonOffset:!0,stipplePattern:Object(j.c)(this._params.guideStippleLengthPixels),stippleIntegerRepeats:!1,renderOccluded:4}),this._segmentLabel=new S.a({attached:!0,view:this.view,fontSize:this._params.direcLabelFontSize}),this._verticalLabel=new S.a({attached:!0,view:this.view,fontSize:this._params.verticalLabelFontSize}),this._horizontalLabel=new S.a({attached:!0,view:this.view,fontSize:this._params.horizontalLabelFontSize}),this._handles.add([this.dataObject.watch("visible",(()=>this._update(!1)),!0),this.dataObject.watch("startPoint",(()=>this._update()),!0),this.dataObject.watch("endPoint",(()=>this._update()),!0),this.dataObject.watch("measurement",(()=>this._update()),!0),this.dataObject.watch("settings.unit",(()=>{this._updateLabels(),this._updateSegmentStripeLength()}),!0),this.view.state.watch("camera",(()=>this._update()),!0),Object(l.c)((async()=>this._updateMessageBundle()))]),this._set("state","ready"),this._updateMessageBundle(),this._update()}async whenReady(){return Object(f.j)(this,"ready").then((()=>{}))}get ready(){return"ready"===this.state}get viewMode(){return this._viewMode}get visualizedMeasurement(){return this._visualizedMeasurement}set visualizedMeasurement(e){e!==this._visualizedMeasurement&&(this._visualizedMeasurement=e,this._update())}get actualVisualizedMeasurement(){return this._actualVisualizedMeasurement}get visualElementsOrientation(){return this._visualElementOrientation}set visualElementsOrientation(e){e!==this._visualElementOrientation&&(this._visualElementOrientation=e,this._update())}get allowVisualElementsOrientationChange(){return Object(s.j)(this._triangleOrientationOverride)}set allowVisualElementsOrientationChange(e){Object(s.j)(this._triangleOrientationOverride)!==e&&(Object(s.j)(this._triangleOrientationOverride)?this._triangleOrientationOverride=this._getActualVisualElementsOrientation():(this._triangleOrientationOverride=null,this._update()))}get triangleCollapseRatioThreshold(){return this._triangleCollapseRatioThreshold}set triangleCollapseRatioThreshold(e){this._triangleCollapseRatioThreshold=e,this._update()}get geodesicDistanceThreshold(){return this._geodesicDistanceThreshold}set geodesicDistanceThreshold(e){this._geodesicDistanceThreshold=e,this._update()}get segmentLabel(){return this._segmentLabel}get horizontalLabel(){return this._horizontalLabel}get verticalLabel(){return this._verticalLabel}get testData(){let e=null;const t="geodesic"===this.actualVisualizedMeasurement;return e={direct:t?this.horizontalLabel:this.segmentLabel,horizontal:t?this.segmentLabel:this.horizontalLabel,vertical:this.verticalLabel},{labels:e,stripeLength:this._segmentVisualElement.stripeLength}}_update(e=!0){switch(this.state){case"destroyed":case"pending":return}const t=this.dataObject.visible;switch(this._geometryDirty=e,this._geometryDirty&&t&&(this._updateGeometryAndViewMode(),this._geometryDirty=!1),this._viewMode){case"none":this._segmentVisualElement.visible=!1,this._triangleVisualElement.visible=!1,this._rightAngleQuad.visible=!1,this._projectedGeodesicLine.visible=!1,this._geodesicStartHint.visible=!1,this._geodesicEndHint.visible=!1;break;case"segment":this._segmentVisualElement.visible=t,this._triangleVisualElement.visible=!1,this._rightAngleQuad.visible=!1,this._projectedGeodesicLine.visible=!1,this._geodesicStartHint.visible=!1,this._geodesicEndHint.visible=!1;break;case"segment-and-triangle":this._segmentVisualElement.visible=t,this._triangleVisualElement.visible=t,this._rightAngleQuad.visible=t,this._projectedGeodesicLine.visible=!1,this._geodesicStartHint.visible=!1,this._geodesicEndHint.visible=!1;break;case"segment-and-projection":this._segmentVisualElement.visible=t,this._projectedGeodesicLine.visible=!0,this._geodesicStartHint.visible=!0,this._geodesicEndHint.visible=!0}this._updateLabels()}destroy(){switch(this.state){case"destroyed":case"pending":return}this._handles.destroy(),this._segmentVisualElement.destroy(),this._segmentVisualElement=null,this._triangleVisualElement.destroy(),this._triangleVisualElement=null,this._rightAngleQuad.destroy(),this._rightAngleQuad=null,this._projectedGeodesicLine.destroy(),this._projectedGeodesicLine=null,this._geodesicStartHint.destroy(),this._geodesicStartHint=null,this._geodesicEndHint.destroy(),this._geodesicEndHint=null,this._segmentLabel.destroy(),this._segmentLabel=null,this._verticalLabel.destroy(),this._verticalLabel=null,this._horizontalLabel.destroy(),this._horizontalLabel=null,this.set("view",null),this._set("state","destroyed")}_updateGeometryAndViewMode(){const e=this.view,t=e.renderCoordsHelper;if(Object(s.j)(this.dataObject.startPoint)||Object(s.j)(this.dataObject.endPoint)||this.dataObject.startPoint.equals(this.dataObject.endPoint))return this._viewMode="none",void(this._actualVisualizedMeasurement="auto"===this._visualizedMeasurement?"euclidean":this._visualizedMeasurement);t.toRenderCoords(this.dataObject.startPoint,this._startPosition),t.toRenderCoords(this.dataObject.endPoint,this._endPosition);const i=this._getActualVisualElementsOrientation(),r=this._updateActualVisualizedMeasurement();this._viewMode=this._computeViewMode(r);let n=this._startPosition,a=this._endPosition;const o="above-segment"===i?1:-1,l=o*(t.getAltitude(a)-t.getAltitude(n));l<0&&(n=this._endPosition,a=this._startPosition);const d="geodesic"===r?new C.b(this._startPosition,this._endPosition,t.spatialReference):new C.a(this._startPosition,this._endPosition);switch(this._segmentVisualElement.geometry=d,this._updateSegmentStripeLength(),this._segmentLabelDisplayedMeasurement=r,this._viewMode){case"segment":this._segmentLabel.anchor="above-segment"===i?"top":"bottom",this._segmentLabel.geometry={type:"segment",segment:d,sampleLocation:"center"};break;case"segment-and-triangle":{const r=this._cornerPosition;t.worldUpAtPosition(n,r),Object(p.d)(r,r,o*Math.abs(l)),Object(p.e)(r,r,n),this._triangleVisualElement.geometry=[[[n[0],n[1],n[2]],[r[0],r[1],r[2]],[a[0],a[1],a[2]]]],this._rightAngleQuad.geometry={previous:n,center:r,next:a};const s=new C.a(n,r),h=new C.a(r,a),u=function(e,t,i,r,s){const n=le,a=ce;s.projectToRenderScreen(i,n),s.projectToRenderScreen(t,a);const o={segment:"bottom",horizontal:"top",vertical:n[0]<a[0]?"left":"right"};{const r=de,n=he;if(Object(x.e)(e,i,r,s),Object(x.e)(e,t,n,s),Object(O.g)(r,n)>=oe)o.segment=Object(c.r)(r[1])===Object(c.r)(n[1])?Object(S.b)(o.vertical):o.vertical;else{const e=ue;Object(x.e)(i,t,e,s),Object(O.g)(e,n)>=oe&&(o.segment=Object(c.r)(e[0])===Object(c.r)(n[0])?Object(S.b)(o.horizontal):o.horizontal)}}if("below-segment"===r){const e=e=>"top"===e?"bottom":"top";o.segment=e(o.segment),o.horizontal=e(o.horizontal),o.vertical=e(o.vertical)}return o}(n,a,r,i,e.state.camera);this._segmentLabel.geometry={type:"segment",segment:d,sampleLocation:"center"},this._segmentLabel.anchor=u.segment,this._verticalLabel.geometry={type:"segment",segment:s,sampleLocation:"center"},this._verticalLabel.anchor=u.vertical,this._horizontalLabel.geometry={type:"segment",segment:h,sampleLocation:"center"},this._horizontalLabel.anchor=u.horizontal;break}case"segment-and-projection":{Object(p.j)(this._startPositionAtSeaLevel,this._startPosition),Object(p.j)(this._endPositionAtSeaLevel,this._endPosition),t.setAltitude(0,this._startPositionAtSeaLevel),t.setAltitude(0,this._endPositionAtSeaLevel);const e=new C.b(this._startPositionAtSeaLevel,this._endPositionAtSeaLevel,t.spatialReference);this._projectedGeodesicLine.setGeometryFromSegment(e),this._geodesicStartHint.setGeometryFromSegment(new C.a(this._startPositionAtSeaLevel,this._startPosition)),this._geodesicEndHint.setGeometryFromSegment(new C.a(this._endPositionAtSeaLevel,this._endPosition)),this._segmentLabel.geometry={type:"segment",segment:e,sampleLocation:"center"},this._segmentLabel.anchor="above-segment"===i?"top":"bottom";break}}}_updateLabels(){switch(this.state){case"pending":case"destroyed":return}const e=this.messages,t=this.dataObject.measurement;if(Object(s.j)(t)||!e)return this._segmentLabel.visible=!1,this._horizontalLabel.visible=!1,void(this._verticalLabel.visible=!1);const i={verticalDistance:"",horizontalDistance:"",euclideanDistance:"",geodesicDistance:""},r=t.directDistance,n=t.horizontalDistance,a=t.verticalDistance,o=t.geodesicDistance,l=t.geodesicAngle;switch(this.dataObject.settings.unit){case"metric":i.euclideanDistance=r&&Object(g.e)(e,r),i.horizontalDistance=n&&Object(g.e)(e,n),i.verticalDistance=a&&Object(g.f)(e,a),i.geodesicDistance=o&&Object(g.e)(e,o);break;case"imperial":i.euclideanDistance=r&&Object(g.c)(e,r),i.horizontalDistance=n&&Object(g.c)(e,n),i.verticalDistance=a&&Object(g.d)(e,a),i.geodesicDistance=o&&Object(g.c)(e,o);break;case"degrees":{const t=l&&Object(g.b)(e,l,"degrees");i.euclideanDistance=t,i.horizontalDistance=t,i.geodesicDistance=t;break}case"degrees-minutes-seconds":i.horizontalDistance=l&&Object(g.a)(l);break;default:{const t=this.dataObject.settings.unit;i.euclideanDistance=r&&Object(g.b)(e,r,t),i.horizontalDistance=n&&Object(g.b)(e,n,t),i.verticalDistance=a&&Object(g.b)(e,a,t),i.geodesicDistance=o&&Object(g.b)(e,o,t);break}}this._segmentLabel.text="euclidean"===this._segmentLabelDisplayedMeasurement?i.euclideanDistance:i.geodesicDistance,this._horizontalLabel.text=i.horizontalDistance,this._verticalLabel.text=i.verticalDistance;const c=this.dataObject.visible;switch(this._viewMode){case"none":this._segmentLabel.visible=!1,this._horizontalLabel.visible=!1,this._verticalLabel.visible=!1;break;case"segment":this._segmentLabel.visible=c,this._horizontalLabel.visible=!1,this._verticalLabel.visible=!1;break;case"segment-and-triangle":this._segmentLabel.visible=c,this._horizontalLabel.visible=c,this._verticalLabel.visible=c;break;case"segment-and-projection":this._segmentLabel.visible=c,this._horizontalLabel.visible=!1,this._verticalLabel.visible=!1}this.notifyChange("segmentLabel"),this.notifyChange("horizontalLabel"),this.notifyChange("verticalLabel")}_updateSegmentStripeLength(){const e=function(e,t){let i=null;if(Object(s.k)(t.measurement)){const e=t.measurement.directDistance;switch(t.settings.unit){case"metric":i=e&&e.toUnit("meters");break;case"imperial":i=e&&e.toUnit(Object(m.s)(e.value,e.unit));break;case"degrees":case"degrees-minutes-seconds":{const e=t.measurement.geodesicAngle;i=e&&e.toUnit("degrees");break}default:i=e&&e.toUnit(t.settings.unit)}}if(i){let t=1;return t=Object(c.n)(i.value/30),t*="degrees"===i.unit?Object(b.e)(e.spatialReference).metersPerDegree:Object(m.c)(1,i.unit,"meters"),t}return null}(this.view,this.dataObject);Object(s.k)(e)?(this._segmentVisualElement.stripeLength=e,this._segmentVisualElement.stripesEnabled=!0):this._segmentVisualElement.stripesEnabled=!1}_computeViewMode(e){const t=this.dataObject,i=t.measurement;if("geodesic"===e){if(!re(t,this.geodesicDistanceThreshold))return"segment";if(se(this.view,this._startPosition)||se(this.view,this._endPosition))return"segment-and-projection"}return Object(s.j)(i)||Math.min(i.verticalDistance.value/i.horizontalDistance.value,i.horizontalDistance.value/i.verticalDistance.value)<this.triangleCollapseRatioThreshold?"segment":"segment-and-triangle"}_getActualVisualElementsOrientation(){return Object(s.k)(this._triangleOrientationOverride)?this._triangleOrientationOverride:"auto"===this.visualElementsOrientation?this.view.state.camera.aboveGround?"above-segment":"below-segment":this.visualElementsOrientation}_updateActualVisualizedMeasurement(){if("auto"===this._visualizedMeasurement){this._actualVisualizedMeasurement="euclidean";const e=this.dataObject.settings.unit;"degrees"!==e&&"degrees-minutes-seconds"!==e||(this._actualVisualizedMeasurement="geodesic"),re(this.dataObject,this.geodesicDistanceThreshold)&&(this._actualVisualizedMeasurement="geodesic")}else this._actualVisualizedMeasurement=this._visualizedMeasurement;return this._actualVisualizedMeasurement}_updateMessageBundle(){Object(h.a)("esri/core/t9n/Units").then((e=>{this.messages=e,this.view&&this._updateLabels()}))}};function re(e,t){return Object(s.k)(e.measurement)&&e.measurement.horizontalDistance&&e.measurement.horizontalDistance.value>t}function se(e,t){if(!e.state)return!1;const i=e.state.camera,r=e.renderCoordsHelper,s=i.computeScreenPixelSizeAt(t);return r.getAltitude(t)/s>=10}Object(r.a)([Object(n.b)({readOnly:!0})],ie.prototype,"state",void 0),Object(r.a)([Object(n.b)()],ie.prototype,"ready",null),Object(r.a)([Object(n.b)()],ie.prototype,"messages",void 0),Object(r.a)([Object(n.b)()],ie.prototype,"view",void 0),Object(r.a)([Object(n.b)()],ie.prototype,"dataObject",void 0),Object(r.a)([Object(n.b)()],ie.prototype,"viewMode",null),Object(r.a)([Object(n.b)()],ie.prototype,"segmentLabel",null),Object(r.a)([Object(n.b)()],ie.prototype,"horizontalLabel",null),Object(r.a)([Object(n.b)()],ie.prototype,"verticalLabel",null),ie=Object(r.a)([Object(a.a)("esri.views.3d.interactive.graphics.DirectLineMeasurement3D.DirectLineMeasurement3DView")],ie);const ne=Object(_.c)(1,.5,0,.75),ae={laserLineGlowColor:[1,.5,0],laserLineGlowWidth:8,laserLineGlowFalloff:8,laserLineInnerColor:[1,1,1],laserLineInnerWidth:.75,laserLineGlobalAlpha:.75,laserLineEnabled:!0,handleColor:[1,.5,0],handleOpacity:.5,handleRadius:5,triangleColor:ne,triangleLineWidth:3,triangleCornerSize:32,triangleSubdivisions:128,arrowWidth:16,arrowOutlineColor:[1,.5,0,1],arrowOutlineWidth:.2,arrowStripeEvenColor:[1,1,1,1],arrowStripeOddColor:[1,.5,0,1],arrowStripeLength:16,arrowSubdivisions:128,geodesicProjectionLineWidth:2,geodesicProjectionLineColor:ne,guideLineWidth:2,guideLineColor:ne,guideStippleLengthPixels:6,labelDistance:25,direcLabelFontSize:16,horizontalLabelFontSize:12,verticalLabelFontSize:12},oe=Math.cos(Object(c.f)(12)),le=Object(d.e)(),ce=Object(d.e)(),de=Object(d.d)(),he=Object(d.d)(),ue=Object(d.d)()},423:function(e,t,i){"use strict";function r(){return new Float32Array(4)}function s(e){const t=new Float32Array(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function n(e,t,i,r){const s=new Float32Array(4);return s[0]=e,s[1]=t,s[2]=i,s[3]=r,s}function a(){return r()}function o(){return n(1,1,1,1)}function l(){return n(1,0,0,0)}function c(){return n(0,1,0,0)}function d(){return n(0,0,1,0)}function h(){return n(0,0,0,1)}i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return n}));const u=a(),p=o(),v=l(),b=c(),m=d(),f=h();Object.freeze({__proto__:null,create:r,clone:s,fromValues:n,createView:function(e,t){return new Float32Array(e,t,4)},zeros:a,ones:o,unitX:l,unitY:c,unitZ:d,unitW:h,ZEROS:u,ONES:p,UNIT_X:v,UNIT_Y:b,UNIT_Z:m,UNIT_W:f})},473:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var r=i(165);function s(e,t){t.vvInstancingEnabled&&(t.vvSize||t.vvColor)&&e.attributes.add("instanceFeatureAttribute","vec4"),t.vvSize?(e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),e.vertex.uniforms.add("vvSymbolAnchor","vec3"),e.vertex.code.add(r.a`
      vec3 vvScale(vec4 _featureAttribute) {
        return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
      }

      vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
        return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
      }
    `),e.vertex.code.add(r.a`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.vvInstancingEnabled?r.a`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):e.vertex.code.add(r.a`
      vec4 localPosition() { return vec4(position, 1.0); }

      vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }
    `),t.vvColor?(e.vertex.constants.add("vvColorNumber","int",8),e.vertex.code.add(r.a`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${t.vvInstancingEnabled?r.a`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):e.vertex.code.add(r.a`
      vec4 vvColor() { return vec4(1.0); }
    `)}!function(e){function t(e,t){t.vvSizeEnabled&&(e.setUniform3fv("vvSizeMinSize",t.vvSizeMinSize),e.setUniform3fv("vvSizeMaxSize",t.vvSizeMaxSize),e.setUniform3fv("vvSizeOffset",t.vvSizeOffset),e.setUniform3fv("vvSizeFactor",t.vvSizeFactor)),t.vvColorEnabled&&(e.setUniform1fv("vvColorValues",t.vvColorValues),e.setUniform4fv("vvColorColors",t.vvColorColors))}e.bindUniforms=t,e.bindUniformsWithOpacity=function(e,i){t(e,i),i.vvOpacityEnabled&&(e.setUniform1fv("vvOpacityValues",i.vvOpacityValues),e.setUniform1fv("vvOpacityOpacities",i.vvOpacityOpacities))},e.bindUniformsForSymbols=function(e,i){t(e,i),i.vvSizeEnabled&&(e.setUniform3fv("vvSymbolAnchor",i.vvSymbolAnchor),e.setUniformMatrix3fv("vvSymbolRotationMatrix",i.vvSymbolRotationMatrix))}}(s||(s={}))},514:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var r=i(138),s=i(202),n=i(216),a=i(500),o=i(553),l=i(562);class c extends l.a{constructor(e){super(e.view),this._resources=null,this._transform=Object(n.b)()}get object(){return Object(r.k)(this._resources)?this._resources.object:null}get transform(){return this._transform}set transform(e){Object(s.c)(this._transform,e),Object(r.k)(this._resources)&&(this._resources.object.transformation=this._transform,this._resources.layer.commit())}recreate(){this.attached&&this.createResources()}recreateGeometry(){if(Object(r.j)(this._resources))return;const e=this._resources.object,t=this.view._stage;t.removeMany(e.geometries),e.removeAllGeometries(),this.createGeometries(e),this.visible||e.setVisible(this.visible),t.addMany(e.geometries),this._resources.layer.commit()}createResources(){this.destroyResources();const e=this.view._stage;if(!e)return;const t=new o.a({isPickable:!1});e.add(t);const i=new a.a({castShadow:!1});i.transformation=this._transform,this.createExternalResources(),this.createGeometries(i),e.addMany(i.geometries),this.forEachExternalMaterial((t=>e.add(t))),e.add(i),t.add(i),t.commit(),this.visible||(i.setVisible(!1),t.commit()),this._resources={layer:t,object:i}}destroyResources(){const e=this.view._stage;!Object(r.j)(this._resources)&&e&&(e.remove(this._resources.object),e.remove(this._resources.layer),this.forEachExternalMaterial((t=>{e.remove(t),t.dispose()})),e.removeMany(this._resources.object.geometries),this._resources.object.dispose(),this.destroyExternalResources(),this._resources=null)}updateVisibility(e){Object(r.j)(this._resources)||(this._resources.object.setVisible(e),this._resources.layer.commit())}}},517:function(e,t,i){"use strict";i.d(t,"a",(function(){return U}));var r,s=i(138),n=i(130),a=i(154),o=i(153),l=i(152),c=i(158),d=i(181),h=i(418),u=i(305),p=i(224),v=i(427),b=i(405),m=i(434),f=i(428),g=i(377),O=i(506);(r||(r={})).Default={vvSizeEnabled:!1,vvSizeMinSize:Object(O.c)(1,1,1),vvSizeMaxSize:Object(O.c)(100,100,100),vvSizeOffset:Object(O.c)(0,0,0),vvSizeFactor:Object(O.c)(1,1,1),vvSizeValue:Object(O.c)(1,1,1),vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvOpacityEnabled:!1,vvOpacityValues:[0,0,0,0,0,0,0,0],vvOpacityOpacities:[1,1,1,1,1,1,1,1],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:Object(g.a)()};var _=r,j=i(131),y=i(348),x=i(354),S=i(361),w=i(332),C=i(313),z=i(429),P=i(299),E=i(370),L=i(473),D=i(396),A=i(323),M=i(535),R=i(657);const T={position:0,subdivisionFactor:1,uv0:2,auxpos1:3,auxpos2:4,size:6,sizeFeatureAttribute:6,color:5,colorFeatureAttribute:5,opacityFeatureAttribute:7};class V extends x.a{constructor(e,t){super(e,t),this.stipplePattern=null,this.stippleTextureBind=null,this.stippleTextureRepository=e.stippleTextureRepository}initializeProgram(e){const t=V.shader.get(),i=this.configuration,r=t.build({OITEnabled:0===i.transparencyPassType,output:i.output,slicePlaneEnabled:i.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,stippleEnabled:i.stippleEnabled,stippleOffColorEnabled:i.stippleOffColorEnabled,stippleUVMaxEnabled:i.stippleIntegerRepeatsEnabled,stippleIntegerRepeatsEnabled:i.stippleIntegerRepeatsEnabled,roundCaps:i.roundCaps,roundJoins:i.roundJoins,vvColor:i.vvColor,vvSize:i.vvSize,vvInstancingEnabled:!0,vvOpacity:i.vvOpacity,falloffEnabled:i.falloffEnabled,innerColorEnabled:i.innerColorEnabled,multipassTerrainEnabled:i.multipassTerrainEnabled,cullAboveGround:i.cullAboveGround});return new w.a(e.rctx,r.generateSource("vertex"),r.generateSource("fragment"),T)}dispose(){super.dispose(),this.stippleTextureRepository.release(this.stipplePattern),this.stipplePattern=null,this.stippleTextureBind=null}bindPass(e,t,i){if(z.a.bindProjectionMatrix(this.program,i.camera.projectionMatrix),4===this.configuration.output&&E.a.bindOutputHighlight(e,this.program,i),i.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",i.inverseViewport),Object(A.a)(this.program,e,i)),this.program.setUniform1f("intrinsicWidth",t.width),this.program.setUniform4fv("intrinsicColor",t.color),this.program.setUniform1f("miterLimit","miter"!==t.join?0:t.miterLimit),this.program.setUniform2fv("cameraNearFar",i.camera.nearFar),this.program.setUniform1f("pixelRatio",i.camera.pixelRatio),this.program.setUniform2f("screenSize",i.camera.fullViewport[2],i.camera.fullViewport[3]),L.a.bindUniformsWithOpacity(this.program,t),this.stipplePattern!==t.stipplePattern){const e=t.stipplePattern;this.stippleTextureBind=this.stippleTextureRepository.swap(this.stipplePattern,e),this.stipplePattern=e}if(this.configuration.stippleEnabled){const r=Object(s.k)(this.stippleTextureBind)?this.stippleTextureBind(e,0)*i.camera.pixelRatio:1;if(this.program.setUniform1i("stipplePatternTexture",0),this.program.setUniform1f("stipplePatternPixelSizeInv",1/r),this.configuration.stippleOffColorEnabled){const e=Object(s.q)(t.stippleOffColor);this.program.setUniform4f("stippleOffColor",e[0],e[1],e[2],e.length>3?e[3]:1)}}this.configuration.falloffEnabled&&this.program.setUniform1f("falloff",t.falloff),this.configuration.innerColorEnabled&&(this.program.setUniform4fv("innerColor",Object(s.r)(t.innerColor,t.color)),this.program.setUniform1f("innerWidth",t.innerWidth*i.camera.pixelRatio))}bindDraw(e){z.a.bindView(this.program,e),P.a.bindUniformsWithOrigin(this.program,this.configuration,e)}setPipelineState(e,t){const i=this.configuration,r=3===e,s=2===e;return Object(C.d)({blending:0===i.output||7===i.output?r?D.f:Object(D.a)(e):null,depthTest:{func:Object(D.b)(e)},depthWrite:r?!i.transparent&&i.writeDepth&&C.c:Object(D.c)(e),colorWrite:C.b,stencilWrite:i.sceneHasOcludees?M.h:null,stencilTest:i.sceneHasOcludees?t?M.d:M.c:null,polygonOffset:r||s?i.polygonOffset&&I:D.d})}initializePipeline(){const e=this.configuration,t=e.polygonOffset&&I;return e.occluder&&(this._occluderPipelineTransparent=Object(C.d)({blending:D.f,polygonOffset:t,depthTest:M.a,depthWrite:null,colorWrite:C.b,stencilWrite:null,stencilTest:M.f}),this._occluderPipelineOpaque=Object(C.d)({blending:D.f,polygonOffset:t,depthTest:M.a,depthWrite:null,colorWrite:C.b,stencilWrite:M.g,stencilTest:M.e}),this._occluderPipelineMaskWrite=Object(C.d)({blending:null,polygonOffset:t,depthTest:M.b,depthWrite:null,colorWrite:null,stencilWrite:M.h,stencilTest:M.d})),this._occludeePipelineState=this.setPipelineState(this.configuration.transparencyPassType,!0),this.setPipelineState(this.configuration.transparencyPassType,!1)}get primitiveType(){return 5}getPipelineState(e,t){return t?this._occludeePipelineState:this.configuration.occluder?11===e?this._occluderPipelineTransparent:10===e?this._occluderPipelineOpaque:this._occluderPipelineMaskWrite:this.pipeline}}V.shader=new y.a(R.a,(()=>i.e(297).then(i.bind(null,1155))));const I={factor:0,units:-4};class q extends S.a{constructor(){super(...arguments),this.output=0,this.occluder=!1,this.slicePlaneEnabled=!1,this.transparent=!1,this.polygonOffset=!1,this.writeDepth=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stippleIntegerRepeatsEnabled=!1,this.roundCaps=!1,this.roundJoins=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.sceneHasOcludees=!1,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!0}}Object(j.a)([Object(S.b)({count:8})],q.prototype,"output",void 0),Object(j.a)([Object(S.b)()],q.prototype,"occluder",void 0),Object(j.a)([Object(S.b)()],q.prototype,"slicePlaneEnabled",void 0),Object(j.a)([Object(S.b)()],q.prototype,"transparent",void 0),Object(j.a)([Object(S.b)()],q.prototype,"polygonOffset",void 0),Object(j.a)([Object(S.b)()],q.prototype,"writeDepth",void 0),Object(j.a)([Object(S.b)()],q.prototype,"stippleEnabled",void 0),Object(j.a)([Object(S.b)()],q.prototype,"stippleOffColorEnabled",void 0),Object(j.a)([Object(S.b)()],q.prototype,"stippleIntegerRepeatsEnabled",void 0),Object(j.a)([Object(S.b)()],q.prototype,"roundCaps",void 0),Object(j.a)([Object(S.b)()],q.prototype,"roundJoins",void 0),Object(j.a)([Object(S.b)()],q.prototype,"vvSize",void 0),Object(j.a)([Object(S.b)()],q.prototype,"vvColor",void 0),Object(j.a)([Object(S.b)()],q.prototype,"vvOpacity",void 0),Object(j.a)([Object(S.b)()],q.prototype,"falloffEnabled",void 0),Object(j.a)([Object(S.b)()],q.prototype,"innerColorEnabled",void 0),Object(j.a)([Object(S.b)()],q.prototype,"sceneHasOcludees",void 0),Object(j.a)([Object(S.b)({count:4})],q.prototype,"transparencyPassType",void 0),Object(j.a)([Object(S.b)()],q.prototype,"multipassTerrainEnabled",void 0),Object(j.a)([Object(S.b)()],q.prototype,"cullAboveGround",void 0);const F=n.a.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial");class U extends f.a{constructor(e){super(e,G),this._vertexAttributeLocations=T,this.techniqueConfig=new q,this.layout=this.createLayout()}isClosed(e,t){return H(this.params,e,t)}dispose(){}getPassParameters(){return this.params}getTechniqueConfig(e,t){this.techniqueConfig.output=e;const i=Object(s.k)(this.params.stipplePattern);return this.techniqueConfig.stippleEnabled=i,this.techniqueConfig.stippleIntegerRepeatsEnabled=i&&this.params.stippleIntegerRepeats,this.techniqueConfig.stippleOffColorEnabled=i&&Object(s.k)(this.params.stippleOffColor),this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees,this.techniqueConfig.roundJoins="round"===this.params.join,this.techniqueConfig.roundCaps="round"===this.params.cap,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.polygonOffset=this.params.polygonOffset,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.vvColor=this.params.vvColorEnabled,this.techniqueConfig.vvOpacity=this.params.vvOpacityEnabled,this.techniqueConfig.vvSize=this.params.vvSizeEnabled,this.techniqueConfig.innerColorEnabled=this.params.innerWidth>0&&Object(s.k)(this.params.innerColor),this.techniqueConfig.falloffEnabled=this.params.falloff>0,this.techniqueConfig.occluder=8===this.params.renderOccluded,this.techniqueConfig.transparencyPassType=t?t.transparencyPassType:3,this.techniqueConfig.multipassTerrainEnabled=!!t&&t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=!t||t.cullAboveGround,this.techniqueConfig}intersect(e,t,i,r,s,n,a,o,l){l?this.intersectDrapedLineGeometry(e,r,n,a):this.intersectLineGeometry(e,t,i,r,this.params.width,a)}intersectDrapedLineGeometry(e,t,i,r){if(!t.options.selectionMode)return;const s=e.vertexAttributes.get("position").data,n=e.vertexAttributes.get("size");let o=this.params.width;if(this.params.vvSizeEnabled){const t=e.vertexAttributes.get("sizeFeatureAttribute").data[0];o*=Object(a.d)(this.params.vvSizeOffset[0]+t*this.params.vvSizeFactor[0],this.params.vvSizeMinSize[0],this.params.vvSizeMaxSize[0])}else n&&(o*=n.data[0]);const l=i[0],c=i[1],d=(o/2+4)*e.screenToWorldRatio;let h=Number.MAX_VALUE;for(let u=0;u<s.length-5;u+=3){const e=s[u],t=s[u+1],i=l-e,r=c-t,n=s[u+3]-e,o=s[u+4]-t,d=Object(a.d)((n*i+o*r)/(n*n+o*o),0,1),p=n*d-i,v=o*d-r,b=p*p+v*v;b<h&&(h=b)}h<d*d&&r()}intersectLineGeometry(e,t,i,r,s,n){if(!r.options.selectionMode||Object(b.d)(t))return;if(!Object(p.g)(i))return void F.error("intersection assumes a translation-only matrix");const o=e.vertexAttributes,l=o.get("position").data;let h=s;if(this.params.vvSizeEnabled){const e=o.get("sizeFeatureAttribute").data[0];h*=Object(a.d)(this.params.vvSizeOffset[0]+e*this.params.vvSizeFactor[0],this.params.vvSizeMinSize[0],this.params.vvSizeMaxSize[0])}else o.has("size")&&(h*=o.get("size").data[0]);const v=r.camera,m=K;Object(d.c)(m,r.point);const f=h*v.pixelRatio/2+4*v.pixelRatio;Object(c.v)(ce[0],m[0]-f,m[1]+f,0),Object(c.v)(ce[1],m[0]+f,m[1]+f,0),Object(c.v)(ce[2],m[0]+f,m[1]-f,0),Object(c.v)(ce[3],m[0]-f,m[1]-f,0);for(let a=0;a<4;a++)if(!v.unprojectFromRenderScreen(ce[a],de[a]))return;u.e.fromPoints(v.eye,de[0],de[1],he),u.e.fromPoints(v.eye,de[1],de[2],ue),u.e.fromPoints(v.eye,de[2],de[3],pe),u.e.fromPoints(v.eye,de[3],de[0],ve);let g=Number.MAX_VALUE;const O=B(this.params,o,e.indices)?l.length-2:l.length-5;for(let a=0;a<O;a+=3){J[0]=l[a]+i[12],J[1]=l[a+1]+i[13],J[2]=l[a+2]+i[14];const e=(a+3)%l.length;if(Q[0]=l[e]+i[12],Q[1]=l[e+1]+i[13],Q[2]=l[e+2]+i[14],u.e.signedDistance(he,J)<0&&u.e.signedDistance(he,Q)<0||u.e.signedDistance(ue,J)<0&&u.e.signedDistance(ue,Q)<0||u.e.signedDistance(pe,J)<0&&u.e.signedDistance(pe,Q)<0||u.e.signedDistance(ve,J)<0&&u.e.signedDistance(ve,Q)<0)continue;if(v.projectToRenderScreen(J,ee),v.projectToRenderScreen(Q,te),ee[2]<0&&te[2]>0){Object(c.i)(Y,J,Q);const e=v.frustum,t=-u.e.signedDistance(e[4],J)/Object(c.g)(Y,u.e.normal(e[4]));Object(c.d)(Y,Y,t),Object(c.e)(J,J,Y),v.projectToRenderScreen(J,ee)}else if(ee[2]>0&&te[2]<0){Object(c.i)(Y,Q,J);const e=v.frustum,t=-u.e.signedDistance(e[4],Q)/Object(c.g)(Y,u.e.normal(e[4]));Object(c.d)(Y,Y,t),Object(c.e)(Q,Q,Y),v.projectToRenderScreen(Q,te)}else if(ee[2]<0&&te[2]<0)continue;ee[2]=0,te[2]=0;const t=u.d.distance2(u.d.fromPoints(ee,te,se),m);t<g&&(g=t,Object(c.j)(ie,J),Object(c.j)(re,Q))}const _=r.rayBeginPoint,j=r.rayEndPoint;if(g<f*f){let e=Number.MAX_VALUE;if(u.d.closestLineSegmentPoint(u.d.fromPoints(ie,re,se),u.d.fromPoints(_,j,ne),Z)){Object(c.i)(Z,Z,_);const t=Object(c.o)(Z);Object(c.d)(Z,Z,1/t),e=t/Object(c.n)(_,j)}n(e,Z)}}computeAttachmentOrigin(e,t){const i=e.vertexAttributes;if(!i)return null;const r=e.indices,s=i.get("position");return Object(v.a)(s,r?r.get("position"):null,r&&B(this.params,i,r),t)}createLayout(){const e=Object(h.a)().vec3f("position").f32("subdivisionFactor").vec2f("uv0").vec3f("auxpos1").vec3f("auxpos2");return this.params.vvSizeEnabled?e.f32("sizeFeatureAttribute"):e.f32("size"),this.params.vvColorEnabled?e.f32("colorFeatureAttribute"):e.vec4f("color"),this.params.vvOpacityEnabled&&e.f32("opacityFeatureAttribute"),e}createBufferWriter(){return new W(this.layout,this.params)}getGLMaterial(e){return 0===e.output||7===e.output||4===e.output||1===e.output?new N(e):void 0}validateParameterValues(e){"miter"!==e.join&&(e.miterLimit=0),this.requiresTransparent(e)&&(e.transparent=!0)}requiresTransparent(e){return!!((e.color&&e.color[3])<1||e.innerWidth>0&&this.colorRequiresTransparent(e.innerColor)||e.stipplePattern&&this.colorRequiresTransparent(e.stippleOffColor)||e.falloff>0)}colorRequiresTransparent(e){return Object(s.k)(e)&&e[3]<1&&e[3]>0}}class N extends m.a{constructor(e){super(e),this.updateParameters()}updateParameters(e){this.technique=this.techniqueRep.acquireAndReleaseExisting(V,this.material.getTechniqueConfig(this.output,e),this.technique)}beginSlot(e){return this.technique.configuration.occluder?3===e||10===e||11===e:0===this.output||7===this.output?(this.targetSlot=this.technique.configuration.writeDepth?5:8,e===this.targetSlot):3===e}_updateOccludeeState(e){e.hasOccludees!==this.material.params.sceneHasOcludees&&this.material.setParameterValues({sceneHasOcludees:e.hasOccludees})}ensureParameters(e){0!==this.output&&7!==this.output||this._updateOccludeeState(e),this.updateParameters(e)}bind(e,t){e.bindProgram(this.technique.program),this.technique.bindPass(e,this.material.getPassParameters(),t)}getPipelineState(e,t){return this.technique.getPipelineState(e,t)}}const G={width:0,color:[1,1,1,1],join:"miter",cap:"butt",miterLimit:5,writeDepth:!0,polygonOffset:!1,stipplePattern:null,stippleIntegerRepeats:!1,stippleOffColor:null,slicePlaneEnabled:!1,vvFastUpdate:!1,transparent:!1,isClosed:!1,falloff:0,innerWidth:0,innerColor:null,sceneHasOcludees:!1,...f.b,..._.Default};class W{constructor(e,t){switch(this.params=t,this.numJoinSubdivisions=0,this.vertexBufferLayout=e,this.params.join){case"miter":case"bevel":this.numJoinSubdivisions=t.stipplePattern?1:0;break;case"round":this.numJoinSubdivisions=X}}isClosed(e){return B(this.params,e.vertexAttributes,e.indices)}numCapSubdivisions(e){if(this.isClosed(e))return 0;switch(this.params.cap){case"butt":return 0;case"square":return 1;case"round":return $}}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){const t=2*this.numCapSubdivisions(e)+2,i=e.indices.get("position").length/2+1,r=this.isClosed(e);let s=r?2:2*t;const n=r?0:1,a=r?i:i-1;if(e.vertexAttributes.has("subdivisions")){const t=e.vertexAttributes.get("subdivisions").data;for(let e=n;e<a;++e)s+=4+2*t[e]}else s+=(a-n)*(2*this.numJoinSubdivisions+4);return s+=2,s}write(e,t,i,r){const s=ae,n=oe,a=le,o=t.vertexAttributes.get("position").data,l=t.indices&&t.indices.get("position"),d=this.numCapSubdivisions(t);l&&l.length!==2*(o.length/3-1)&&console.warn("RibbonLineMaterial does not support indices");let h=null;t.vertexAttributes.has("subdivisions")&&(h=t.vertexAttributes.get("subdivisions").data);let u=1,p=0;this.params.vvSizeEnabled?p=t.vertexAttributes.get("sizeFeatureAttribute").data[0]:t.vertexAttributes.has("size")&&(u=t.vertexAttributes.get("size").data[0]);let v=[1,1,1,1],b=0;this.params.vvColorEnabled?b=t.vertexAttributes.get("colorFeatureAttribute").data[0]:t.vertexAttributes.has("color")&&(v=t.vertexAttributes.get("color").data);let m=0;this.params.vvOpacityEnabled&&(m=t.vertexAttributes.get("opacityFeatureAttribute").data[0]);const f=o.length/3,g=e.transformation,O=new Float32Array(i.buffer),_=this.vertexBufferLayout.stride/4;let j=r*_;const y=j,x=(e,t,i,r,s,n,a)=>{if(O[j++]=t[0],O[j++]=t[1],O[j++]=t[2],O[j++]=r,O[j++]=s,O[j++]=n,O[j++]=e[0],O[j++]=e[1],O[j++]=e[2],O[j++]=i[0],O[j++]=i[1],O[j++]=i[2],this.params.vvSizeEnabled?O[j++]=p:O[j++]=u,this.params.vvColorEnabled)O[j++]=b;else{const e=Math.min(4*a,v.length-4);O[j++]=v[e+0],O[j++]=v[e+1],O[j++]=v[e+2],O[j++]=v[e+3]}this.params.vvOpacityEnabled&&(O[j++]=m)};j+=_,Object(c.v)(n,o[0],o[1],o[2]),g&&Object(c.l)(n,n,g);const S=this.isClosed(t);if(S){const e=o.length-3;Object(c.v)(s,o[e],o[e+1],o[e+2]),g&&Object(c.l)(s,s,g)}else{Object(c.j)(s,n),Object(c.v)(a,o[3],o[4],o[5]),g&&Object(c.l)(a,a,g);for(let e=0;e<d;++e){const t=1-e/d;x(s,n,a,t,1,-4,0),x(s,n,a,t,1,4,0)}x(s,n,a,0,0,-4,0),x(s,n,a,0,0,4,0),Object(c.j)(s,n),Object(c.j)(n,a)}const w=S?f:f-1;for(let C=S?0:1;C<w;C++){const e=(C+1)%f*3;Object(c.v)(a,o[e+0],o[e+1],o[e+2]),g&&Object(c.l)(a,a,g),x(s,n,a,0,1,-1,C),x(s,n,a,0,1,1,C);const t=h?h[C]:this.numJoinSubdivisions;for(let i=0;i<t;++i){const e=(i+1)/(t+1);x(s,n,a,e,1,-2,C),x(s,n,a,e,1,2,C)}x(s,n,a,1,0,-2,C),x(s,n,a,1,0,2,C),Object(c.j)(s,n),Object(c.j)(n,a)}if(S)j=k(O,y+_,O,j,2*_);else{x(s,n,a,0,1,-5,w),x(s,n,a,0,1,5,w);for(let e=0;e<d;++e){const t=(e+1)/d;x(s,n,a,t,1,-5,w),x(s,n,a,t,1,5,w)}}k(O,y+_,O,y,_),j=k(O,j-_,O,j,_)}}function k(e,t,i,r,s){for(let n=0;n<s;n++)i[r++]=e[t++];return r}function B(e,t,i){return H(e,t.get("position").data,i?i.get("position"):null)}function H(e,t,i){return!!e.isClosed&&(i?i.length>2:t.length>6)}const $=3,X=1,J=Object(l.e)(),Q=Object(l.e)(),Y=Object(l.e)(),Z=Object(l.e)(),K=Object(l.e)(),ee=Object(o.e)(),te=Object(o.e)(),ie=Object(l.e)(),re=Object(l.e)(),se=u.d.create(),ne=u.d.create(),ae=Object(l.e)(),oe=Object(l.e)(),le=Object(l.e)(),ce=[Object(o.e)(),Object(o.e)(),Object(o.e)(),Object(o.e)()],de=[Object(l.e)(),Object(l.e)(),Object(l.e)(),Object(l.e)()],he=u.e.create(),ue=u.e.create(),pe=u.e.create(),ve=u.e.create()},593:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var r=i(165);function s(e){e.vertex.code.add(r.a`
    const float PI = 3.141592653589793;
  `),e.fragment.code.add(r.a`
    const float PI = 3.141592653589793;
    const float LIGHT_NORMALIZATION = 1.0 / PI;
    const float INV_PI = 0.3183098861837907;
    const float HALF_PI = 1.570796326794897;
    `)}},608:function(e,t,i){"use strict";function r(e,t){for(const[i,r]of e)if(t(r,i))return!0;return!1}i.d(t,"a",(function(){return r}))},643:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var r=i(165);function s(e,t){e.constants.add("stippleAlphaColorDiscard","float",.001),e.constants.add("stippleAlphaHighlightDiscard","float",.5),t.stippleEnabled?function(e,t){e.vertex.uniforms.add("stipplePatternPixelSizeInv","float"),t.stippleUVMaxEnabled&&e.varyings.add("stipplePatternUvMax","float"),e.varyings.add("stipplePatternUv","float"),e.fragment.uniforms.add("stipplePatternTexture","sampler2D"),t.stippleOffColorEnabled&&e.fragment.uniforms.add("stippleOffColor","vec4"),e.fragment.code.add(r.a`
  float getStippleAlpha() {
    float stipplePatternUvClamped = stipplePatternUv * gl_FragCoord.w;
    ${t.stippleUVMaxEnabled?"stipplePatternUvClamped = clamp(stipplePatternUvClamped, 0.0, stipplePatternUvMax);":""}

    return texture2D(stipplePatternTexture, vec2(mod(stipplePatternUvClamped, 1.0), 0.5)).a;
  }`),t.stippleOffColorEnabled?e.fragment.code.add(r.a`
    #define discardByStippleAlpha(stippleAlpha, threshold) {}
    #define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)
    `):e.fragment.code.add(r.a`
    #define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
    #define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)
    `)}(e,t):function(e){e.fragment.code.add(r.a`
  float getStippleAlpha() { return 1.0; }

  #define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
  #define blendStipple(color, _stippleAlpha_) color
  `)}(e)}},645:function(e,t,i){"use strict";i.d(t,"a",(function(){return m})),i.d(t,"b",(function(){return v})),i.d(t,"c",(function(){return b}));var r,s,n=i(227),a=i(138),o=i(152),l=i(202),c=i(279),d=i(216),h=i(374),u=i(628),p=i(629);function v(e,t,i,r,s,n,a,o,l,d,h){const u=f[h.mode];let p,v,b=0;if(Object(c.k)(e,t,i,r,l.spatialReference,s,o))return u.requiresAlignment(h)?(b=u.applyElevationAlignmentBuffer(r,s,n,a,o,l,d,h),p=n,v=a):(p=r,v=s),Object(c.k)(p,l.spatialReference,v,n,d.spatialReference,a,o)?b:void 0}function b(e,t,i,r,s){const o=(Object(h.c)(e)?e.z:Object(u.b)(e)?e.array[e.offset+2]:e[2])||0;switch(i.mode){case"on-the-ground":{const i=Object(a.r)(Object(u.a)(t,e,"ground"),0);return s&&(s.verticalDistanceToGround=0,s.sampledElevation=i),i}case"relative-to-ground":{const n=Object(a.r)(Object(u.a)(t,e,"ground"),0),l=i.geometryZWithOffset(o,r);return s&&(s.verticalDistanceToGround=l,s.sampledElevation=n),l+n}case"relative-to-scene":{const n=Object(a.r)(Object(u.a)(t,e,"scene"),0),l=i.geometryZWithOffset(o,r);return s&&(s.verticalDistanceToGround=l,s.sampledElevation=n),l+n}case"absolute-height":{const n=i.geometryZWithOffset(o,r);if(s){const i=Object(a.r)(Object(u.a)(t,e,"ground"),0);s.verticalDistanceToGround=n-i,s.sampledElevation=i}return n}default:return Object(n.a)(i.mode),0}}function m(e,t,i,r,s){const n=b(t,i,s,r,O);Object(p.b)(e,O.verticalDistanceToGround);const a=O.sampledElevation,o=Object(l.c)(g,e.transformation);return _[0]=t.x,_[1]=t.y,_[2]=n,Object(c.d)(t.spatialReference,_,o,r.spatialReference)?e.transformation=o:console.warn("Could not locate symbol object properly, it might be misplaced"),a}(s=r||(r={}))[s.NONE=0]="NONE",s[s.UPDATE=1]="UPDATE",s[s.RECREATE=2]="RECREATE";const f={"absolute-height":{applyElevationAlignmentBuffer:function(e,t,i,r,s,n,a,o){const l=o.calculateOffsetRenderUnits(a),c=o.featureExpressionInfoContext;t*=3,r*=3;for(let d=0;d<s;++d){const s=e[t+0],n=e[t+1],a=e[t+2];i[r+0]=s,i[r+1]=n,i[r+2]=null==c?a+l:l,t+=3,r+=3}return 0},requiresAlignment:function(e){const t=e.meterUnitOffset,i=e.featureExpressionInfoContext;return 0!==t||null!=i}},"on-the-ground":{applyElevationAlignmentBuffer:function(e,t,i,r,s,n){let o=0;const l=n.spatialReference;t*=3,r*=3;for(let c=0;c<s;++c){const s=e[t+0],c=e[t+1],d=e[t+2],h=Object(a.r)(n.getElevation(s,c,d,l,"ground"),0);o+=h,i[r+0]=s,i[r+1]=c,i[r+2]=h,t+=3,r+=3}return o/s},requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:function(e,t,i,r,s,n,o,l){let c=0;const d=l.calculateOffsetRenderUnits(o),h=l.featureExpressionInfoContext,u=n.spatialReference;t*=3,r*=3;for(let p=0;p<s;++p){const s=e[t+0],o=e[t+1],l=e[t+2],p=Object(a.r)(n.getElevation(s,o,l,u,"ground"),0);c+=p,i[r+0]=s,i[r+1]=o,i[r+2]=null==h?l+p+d:p+d,t+=3,r+=3}return c/s},requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:function(e,t,i,r,s,n,o,l){let c=0;const d=l.calculateOffsetRenderUnits(o),h=l.featureExpressionInfoContext,u=n.spatialReference;t*=3,r*=3;for(let p=0;p<s;++p){const s=e[t+0],o=e[t+1],l=e[t+2],p=Object(a.r)(n.getElevation(s,o,l,u,"scene"),0);c+=p,i[r+0]=s,i[r+1]=o,i[r+2]=null==h?l+p+d:p+d,t+=3,r+=3}return c/s},requiresAlignment:()=>!0}},g=Object(d.b)(),O={verticalDistanceToGround:0,sampledElevation:0},_=Object(o.e)()},657:function(e,t,i){"use strict";i.d(t,"a",(function(){return b})),i.d(t,"b",(function(){return v}));var r=i(165),s=i(303),n=i(406),a=i(299),o=i(355),l=i(378),c=i(323),d=i(674),h=i(536),u=i(643),p=i(593);function v(e){const t=new s.a;t.extensions.add("GL_OES_standard_derivatives"),t.include(p.a),t.include(d.a,e),t.include(u.a,e),1===e.output&&t.include(h.a,e),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraNearFar","vec2").add("pixelRatio","float").add("miterLimit","float").add("screenSize","vec2"),t.attributes.add("position","vec3"),t.attributes.add("subdivisionFactor","float"),t.attributes.add("uv0","vec2"),t.attributes.add("auxpos1","vec3"),t.attributes.add("auxpos2","vec3"),t.varyings.add("vColor","vec4"),t.varyings.add("vpos","vec3"),t.varyings.add("linearDepth","float"),e.multipassTerrainEnabled&&t.varyings.add("depth","float");const i=e.falloffEnabled,v=e.innerColorEnabled;return v&&t.varyings.add("vLineDistance","float"),i&&t.varyings.add("vLineDistanceNorm","float"),e.falloffEnabled&&t.fragment.uniforms.add("falloff","float"),e.innerColorEnabled&&(t.fragment.uniforms.add("innerColor","vec4"),t.fragment.uniforms.add("innerWidth","float")),t.vertex.code.add(r.a`
		#define PERPENDICULAR(v) vec2(v.y, -v.x);
		#define ISOUTSIDE (left.x * right.y - left.y * right.x)*uv0.y > 0.0

		float interp(float ncp, vec4 a, vec4 b) {
			return (-ncp - a.z) / (b.z - a.z);
		}

		vec2 rotate(vec2 v, float a) {
			float s = sin(a);
			float c = cos(a);
			mat2 m = mat2(c, -s, s, c);
			return m * v;
		}
`),t.vertex.code.add(r.a`
    vec4 projectAndScale(vec4 pos) {
      vec4 posNdc = proj * pos;

      // Note that posNdc is in -1:1, scaling by screenSize converts this to a coordinate system
      // that is twice scaled (going from -size:size).
      posNdc.xy *= screenSize / posNdc.w;
      return posNdc;
    }
`),t.vertex.code.add(r.a`
    void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
      float vnp = cameraNearFar[0] * 0.99;

      //current pos behind ncp --> we need to clip
      if(pos.z > -cameraNearFar[0]) {
        if (!isStartVertex) {
          //previous in front of ncp
          if(prev.z < -cameraNearFar[0]) {
            pos = mix(prev, pos, interp(vnp, prev, pos));
            next = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
        //next in front of ncp
        if(isStartVertex) {
          if(next.z < -cameraNearFar[0]) {
            pos = mix(pos, next, interp(vnp, pos, next));
            prev = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      } else {
        //current position visible
        //previous behind ncp
        if (prev.z > -cameraNearFar[0]) {
          prev = mix(pos, prev, interp(vnp, pos, prev));
        }
        //next behind ncp
        if (next.z > -cameraNearFar[0]) {
          next = mix(next, pos, interp(vnp, next, pos));
        }
      }

      ${e.multipassTerrainEnabled?"depth = pos.z;":""}
      linearDepth = (-pos.z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);
    }
`),t.vertex.code.add(r.a`
  void main(void) {
    float coverage = 1.0;
    vpos = position;

    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;
      bool isJoin = abs(uv0.y)-3.0 < 0.0;

      float lineWidth = getSize() * pixelRatio;

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
  `),e.stippleEnabled&&t.vertex.code.add(r.a`
      // uv0.x is either 0 or 1, depending on whether this is considered the start of a line segment
      // or the end. If start, then use pos->next, otherwise use prev->pos to define the line segment
      // vector
      vec4 stippleSegmentInfo = mix(vec4(pos.xy, right), vec4(prev.xy, left), uv0.x);
      vec2 stippleSegmentOrigin = stippleSegmentInfo.xy;

      // Scale s.t. it's in units of stipple pattern size.
      vec2 stippleSegmentDirection = stippleSegmentInfo.zw;
    `),t.vertex.code.add(r.a`
    left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
    right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);

    vec2 capDisplacementDir = vec2(0, 0);
    vec2 joinDisplacementDir = vec2(0, 0);
    float displacementLen = lineWidth;

    if (isJoin) {

      // JOIN handling ---------------------------------------------------
      // determine if vertex is on the "outside or "inside" of the join
      bool isOutside = ISOUTSIDE;

      // compute miter join position first
      joinDisplacementDir = normalize(left + right);
      joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);

      // compute miter stretch
      if (leftLen > 0.001 && rightLen > 0.001) {
        float nDotSeg = dot(joinDisplacementDir, left);
        displacementLen /= length(nDotSeg * left - joinDisplacementDir);

        // limit displacement of inner vertices
        if (!isOutside) {
          displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
        }
      }

      if (isOutside && (displacementLen > miterLimit * lineWidth)) {
    `),e.roundJoins?t.vertex.code.add(r.a`
        vec2 startDir;
        vec2 endDir;

        if (leftLen < 0.001) {
          startDir = right;
        }
        else{
          startDir = left;
        }
        startDir = normalize(startDir);
        startDir = PERPENDICULAR(startDir);

        if (rightLen < 0.001) {
          endDir = left;
        }
        else{
          endDir = right;
        }
        endDir = normalize(endDir);
        endDir = PERPENDICULAR(endDir);

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * subdivisionFactor * rotationAngle);
      `):t.vertex.code.add(r.a`
        // convert to bevel join if miterLimit is exceeded
        if (leftLen < 0.001) {
          joinDisplacementDir = right;
        }
        else if (rightLen < 0.001) {
          joinDisplacementDir = left;
        }
        else {
          joinDisplacementDir = isStartVertex ? right : left;
        }
        joinDisplacementDir = normalize(joinDisplacementDir);
        joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
  `),t.vertex.code.add(r.a`
        displacementLen = lineWidth;
      }
    } else {
    // CAP handling ---------------------------------------------------
    if (leftLen < 0.001) {
      joinDisplacementDir = right;
    }
    else if (rightLen < 0.001) {
      joinDisplacementDir = left;
    }
    else {
      joinDisplacementDir = isStartVertex ? right : left;
    }
    joinDisplacementDir = normalize(joinDisplacementDir);
    joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
    displacementLen = lineWidth;

    capDisplacementDir = isStartVertex ? -right : left;
  `),e.roundCaps?t.vertex.code.add(r.a`
    float angle = subdivisionFactor*PI*0.5;
    joinDisplacementDir *= cos(angle);
    capDisplacementDir *= sin(angle);
    `):t.vertex.code.add(r.a`
    capDisplacementDir *= subdivisionFactor;
    `),t.vertex.code.add(r.a`
  }

  // Displacement (in pixels) caused by join/or cap
  vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;

  ${i||v?r.a`float lineDist = lineWidth * sign(uv0.y) * pos.w;`:""}

  ${v?r.a`vLineDistance = lineDist;`:""}
  ${i?r.a`vLineDistanceNorm = lineDist / lineWidth;`:""}

  pos.xy += dpos;
  `),e.stippleEnabled&&(t.vertex.code.add(r.a`
    {
      // Compute the stipple pattern UV coordinate from the actual position, based on the origin
      // and direction of the line segment on which the stipple pattern is based.

      // Project the vector from the origin of the segment to the vertex onto the line segment.
      // Note the 0.5 factor due to projected positions being at twice the screen size scale (see projectAndScale)
      vec2 posVec = pos.xy - stippleSegmentOrigin;

      float stippleSegmentDirectionLength = length(stippleSegmentDirection);
    `),e.stippleIntegerRepeatsEnabled&&t.vertex.code.add(r.a`
      float numberOfPatternRepeats = stippleSegmentDirectionLength * 0.5 * stipplePatternPixelSizeInv;
      float roundedNumberOfPatternRepeats = floor(numberOfPatternRepeats);
      stipplePatternUvMax = roundedNumberOfPatternRepeats;
      `),t.vertex.code.add(r.a`
      if (stippleSegmentDirectionLength >= 0.001) {
        // Project the vertex position onto the line segment.
        float projectedLength = dot(stippleSegmentDirection, posVec) / stippleSegmentDirectionLength * 0.5;
     ${e.stippleIntegerRepeatsEnabled?"float wholeNumberOfRepeatsScale = roundedNumberOfPatternRepeats / numberOfPatternRepeats;":"float wholeNumberOfRepeatsScale = 1.0;"}
        stipplePatternUv = projectedLength * wholeNumberOfRepeatsScale * stipplePatternPixelSizeInv * pos.w;
        } else {
          stipplePatternUv = 1.0;
        }
      }
    `)),t.vertex.code.add(r.a`
      // Convert back into NDC
      pos.xy = pos.xy / screenSize * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      gl_Position = pos;
    }
  }
  `),e.multipassTerrainEnabled&&(t.fragment.include(o.a),t.include(c.b,e)),t.include(a.a,e),t.fragment.uniforms.add("intrinsicColor","vec4"),t.fragment.include(n.a),t.fragment.code.add(r.a`
  void main() {
    discardBySlice(vpos);
    ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
    float stippleAlpha = getStippleAlpha();
    discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);

    vec4 color = intrinsicColor * vColor;
  `),e.innerColorEnabled&&(t.fragment.uniforms.add("pixelRatio","float"),t.fragment.code.add(r.a`
    float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
    float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
    float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
    color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);
    `)),t.fragment.code.add(r.a`
    vec4 finalColor = blendStipple(color, stippleAlpha);
  `),e.falloffEnabled&&t.fragment.code.add(r.a`
    finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);
    `),t.fragment.code.add(r.a`
    if (finalColor.a < ${r.a.float(l.c)}) {
      discard;
    }

    ${7===e.output?r.a`gl_FragColor = vec4(finalColor.a);`:""}
    ${0===e.output?r.a`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${0===e.output&&e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    ${4===e.output?r.a`gl_FragColor = vec4(1.0);`:""}
    ${1===e.output?r.a`outputDepth(linearDepth);`:""}
  }
  `),t}var b=Object.freeze({__proto__:null,build:v})},659:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));const r={DIFFUSE:0,NORMAL:1,EMISSION:2,OCCLUSION:3,METALLIC_ROUGHNESS:4,SSAO:6,SHADOW_MAP:7}},674:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var r=i(165);function s(e,t){e.vertex.uniforms.add("intrinsicWidth","float"),t.vvSize?(e.attributes.add("sizeFeatureAttribute","float"),e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.code.add(r.a`
    float getSize() {
      return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
    }
    `)):(e.attributes.add("size","float"),e.vertex.code.add(r.a`
    float getSize(){
      return intrinsicWidth * size;
    }
    `)),t.vvOpacity?(e.attributes.add("opacityFeatureAttribute","float"),e.vertex.constants.add("vvOpacityNumber","int",8),e.vertex.code.add(r.a`
    uniform float vvOpacityValues[vvOpacityNumber];
    uniform float vvOpacityOpacities[vvOpacityNumber];

    float interpolateOpacity( float value ){
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
    }
    `)):e.vertex.code.add(r.a`
    vec4 applyOpacity( vec4 color ){
      return color;
    }
    `),t.vvColor?(e.attributes.add("colorFeatureAttribute","float"),e.vertex.constants.add("vvColorNumber","int",8),e.vertex.code.add(r.a`
    uniform float vvColorValues[vvColorNumber];
    uniform vec4 vvColorColors[vvColorNumber];

    vec4 interpolateColor( float value ) {
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
    }
    `)):(e.attributes.add("color","vec4"),e.vertex.code.add(r.a`
    vec4 getColor(){
      return applyOpacity(color);
    }
    `))}},736:function(e,t,i){"use strict";i.d(t,"a",(function(){return f}));var r=i(138),s=i(152),n=i(158),a=i(166),o=i(202),l=i(216),c=i(234),d=i(423),h=i(222),u=i(509),p=i(421),v=i(517),b=i(604),m=i(514);class f extends m.a{constructor(e){super(e),this._handles=new a.a,this._quadMaterial=null,this._outlineMaterial=null,this._maxSize=0,this._position=Object(s.e)(),this._up=Object(s.e)(),this._right=Object(s.e)(),this._renderOccluded=4,this._color=Object(d.c)(1,0,0,1),this._outlineColor=Object(d.c)(0,0,0,1),this._outlineSize=0,this._size=32,this._outlineRenderOccluded=16,this.applyProps(e)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateQuadMaterial())}get color(){return this._color}set color(e){Object(c.c)(this._color,e),this._updateQuadMaterial()}get outlineColor(){return this._outlineColor}set outlineColor(e){Object(c.c)(this._outlineColor,e),this._updateOutlineMaterial()}get outlineSize(){return this._outlineSize}set outlineSize(e){const t=0===this._outlineSize!=(0===e);this._outlineSize=e,t?this.recreateGeometry():this._updateOutlineMaterial()}get size(){return this._size}set size(e){e!==this._size&&(this._size=e,this._updateTransform())}get outlineRenderOccluded(){return this._outlineRenderOccluded}set outlineRenderOccluded(e){this._outlineRenderOccluded=e,this._updateOutlineMaterial()}set geometry({previous:e,center:t,next:i}){this._maxSize=Math.min(Object(n.n)(t,e),Object(n.n)(t,i))/3,Object(n.q)(this._up,Object(n.i)(this._up,e,t)),Object(n.q)(this._right,Object(n.i)(this._right,i,t)),Object(n.j)(this._position,t),this.recreateGeometry()}createExternalResources(){this._quadMaterial=new b.a(this.quadMaterialParameters),this._outlineMaterial=new v.a(this.outlineMaterialParameters),this._handles.add(this.view.state.watch("camera",(()=>this._updateTransform())))}destroyExternalResources(){this._quadMaterial=null,this._outlineMaterial=null,this._handles.removeAll()}forEachExternalMaterial(e){e(this._quadMaterial),e(this._outlineMaterial)}createGeometries(e){this._createQuadGeometry(e),this._createOutlineGeometry(e),this._updateTransform(e)}_createQuadGeometry(e){const t=this._quadGeometryData(this._up,this._right);e.addGeometry(t,this._quadMaterial)}_createOutlineGeometry(e){if(0===this._outlineSize)return;const t=Object(n.e)(h.d.get(),this._up,this._right),i=p.a.createPolylineGeometry([this._up,t,this._right]);e.addGeometry(i,this._outlineMaterial)}_updateTransform(e=this.object){const t=this.view.state.camera,i=this._size*t.computeScreenPixelSizeAt(this._position),s=Math.min(this._maxSize,i);Object(o.i)(g),Object(o.s)(g,g,this._position),Object(o.r)(g,g,[s,s,s]),Object(r.k)(e)&&(e.transformation=g)}_quadGeometryData(e,t){const i=Object(n.e)(h.d.get(),e,t);return new u.a([["position",{size:3,data:[0,0,0,...t,...e,...i],exclusive:!0}]],[["position",new Uint16Array([0,1,2,1,2,3])]])}get quadMaterialParameters(){return{color:this._color,transparent:!0,writeDepth:!1,polygonOffset:!0,renderOccluded:this._renderOccluded}}_updateQuadMaterial(){this._quadMaterial&&this._quadMaterial.setParameterValues(this.quadMaterialParameters)}get outlineMaterialParameters(){return{color:this._outlineColor,width:this._outlineSize,renderOccluded:this._outlineRenderOccluded}}_updateOutlineMaterial(){this._outlineMaterial&&this._outlineMaterial.setParameterValues(this.outlineMaterialParameters)}}const g=Object(l.b)()}}]);
//# sourceMappingURL=103.04fb941c.chunk.js.map