"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[6217,8920],{88396:(e,t,n)=>{n.d(t,{a:()=>a,b:()=>o,c:()=>i,d:()=>F,e:()=>R,f:()=>m,g:()=>s,h:()=>P,i:()=>M,j:()=>d,k:()=>z,l:()=>v,m:()=>S,n:()=>C,o:()=>p,p:()=>w,q:()=>I,r:()=>b,s:()=>g,t:()=>x,u:()=>y,v:()=>h,x:()=>u,y:()=>f});var r=n(26277);function i(e,t){return e[0]=t[0],e[1]=t[1],e}function a(e,t,n){return e[0]=t,e[1]=n,e}function o(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e}function s(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e}function l(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e}function c(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e}function u(e,t,n){return e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e}function f(e,t,n){return e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e}function m(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e}function h(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e}function d(e,t){const n=t[0]-e[0],r=t[1]-e[1];return Math.sqrt(n*n+r*r)}function g(e,t){const n=t[0]-e[0],r=t[1]-e[1];return n*n+r*r}function p(e){const t=e[0],n=e[1];return Math.sqrt(t*t+n*n)}function y(e){const t=e[0],n=e[1];return t*t+n*n}function C(e,t){return e[0]=-t[0],e[1]=-t[1],e}function M(e,t){const n=t[0],r=t[1];let i=n*n+r*r;return i>0&&(i=1/Math.sqrt(i),e[0]=t[0]*i,e[1]=t[1]*i),e}function P(e,t){return e[0]*t[0]+e[1]*t[1]}function S(e,t,n){const r=t[0]*n[1]-t[1]*n[0];return e[0]=e[1]=0,e[2]=r,e}function v(e,t,n,r){const i=t[0],a=t[1];return e[0]=i+r*(n[0]-i),e[1]=a+r*(n[1]-a),e}function w(e,t,n){const r=t[0],i=t[1];return e[0]=n[0]*r+n[2]*i,e[1]=n[1]*r+n[3]*i,e}function x(e,t,n){const r=t[0],i=t[1];return e[0]=n[0]*r+n[2]*i+n[4],e[1]=n[1]*r+n[3]*i+n[5],e}function b(e,t,n,r){const i=t[0]-n[0],a=t[1]-n[1],o=Math.sin(r),s=Math.cos(r);return e[0]=i*s-a*o+n[0],e[1]=i*o+a*s+n[1],e}function R(e,t){return e[0]===t[0]&&e[1]===t[1]}function I(e,t,n,r,i){let a=t[0]-n[0],o=t[1]-n[1];const s=(r[0]*a+r[1]*o)*(i-1);return a=r[0]*s,o=r[1]*s,e[0]=t[0]+a,e[1]=t[1]+o,e}const T=p,z=s,A=l,L=c,F=d,k=g,B=y;Object.freeze(Object.defineProperty({__proto__:null,copy:i,set:a,add:o,subtract:s,multiply:l,divide:c,ceil:function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e},floor:function(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e},min:u,max:f,round:function(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e},scale:m,scaleAndAdd:h,distance:d,squaredDistance:g,length:p,squaredLength:y,negate:C,inverse:function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e},normalize:M,dot:P,cross:S,lerp:v,random:function(e,t){t=t||1;const n=2*(0,r.R)()*Math.PI;return e[0]=Math.cos(n)*t,e[1]=Math.sin(n)*t,e},transformMat2:w,transformMat2d:x,transformMat3:function(e,t,n){const r=t[0],i=t[1];return e[0]=n[0]*r+n[3]*i+n[6],e[1]=n[1]*r+n[4]*i+n[7],e},transformMat4:function(e,t,n){const r=t[0],i=t[1];return e[0]=n[0]*r+n[4]*i+n[12],e[1]=n[1]*r+n[5]*i+n[13],e},rotate:b,angle:function(e,t){const n=e[0],r=e[1],i=t[0],a=t[1];let o=n*n+r*r;o>0&&(o=1/Math.sqrt(o));let s=i*i+a*a;s>0&&(s=1/Math.sqrt(s));const l=(n*i+r*a)*o*s;return l>1?0:l<-1?Math.PI:Math.acos(l)},str:function(e){return"vec2("+e[0]+", "+e[1]+")"},exactEquals:R,equals:function(e,t){const n=e[0],i=e[1],a=t[0],o=t[1];return Math.abs(n-a)<=r.E*Math.max(1,Math.abs(n),Math.abs(a))&&Math.abs(i-o)<=r.E*Math.max(1,Math.abs(i),Math.abs(o))},projectAndScale:I,len:T,sub:z,mul:A,div:L,dist:F,sqrDist:k,sqrLen:B},Symbol.toStringTag,{value:"Module"}))},15245:(e,t,n)=>{function r(){return new Float32Array(2)}function i(e,t){const n=new Float32Array(2);return n[0]=e,n[1]=t,n}function a(){return r()}function o(){return i(1,1)}function s(){return i(1,0)}function l(){return i(0,1)}n.d(t,{c:()=>r,f:()=>i});const c=a(),u=o(),f=s(),m=l();Object.freeze(Object.defineProperty({__proto__:null,create:r,clone:function(e){const t=new Float32Array(2);return t[0]=e[0],t[1]=e[1],t},fromValues:i,createView:function(e,t){return new Float32Array(e,t,2)},zeros:a,ones:o,unitX:s,unitY:l,ZEROS:c,ONES:u,UNIT_X:f,UNIT_Y:m},Symbol.toStringTag,{value:"Module"}))},46228:(e,t,n)=>{n.d(t,{I:()=>i,v:()=>a});var r=n(16889);function i(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const i=(0,r.uZ)(e,0,l);for(let r=0;r<4;r++)t[n+r]=Math.floor(256*c(i*o[r]))}function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=0;for(let r=0;r<4;r++)n+=e[t+r]*s[r];return n}const o=[1,256,65536,16777216],s=[1/256,1/65536,1/16777216,1/4294967296],l=a(new Uint8ClampedArray([255,255,255,255]));function c(e){return e-Math.floor(e)}},58971:(e,t,n)=>{n.d(t,{G6:()=>x,Ie:()=>w,J9:()=>S,RF:()=>y,U1:()=>v,vY:()=>l,ym:()=>P});var r=n(92026),i=n(77981);const a=(e,t,n)=>[t,n],o=(e,t,n)=>[t,n,e[2]],s=(e,t,n)=>[t,n,e[2],e[3]];function l(e){return e?{originPosition:"upper-left"===e.originPosition?"upperLeft":"lower-left"===e.originPosition?"lowerLeft":e.originPosition,scale:e.tolerance?[e.tolerance,e.tolerance]:[1,1],translate:(0,r.pC)(e.extent)?[e.extent.xmin,e.extent.ymax]:[0,0]}:null}function c(e,t){let{scale:n,translate:r}=e;return Math.round((t-r[0])/n[0])}function u(e,t){let{scale:n,translate:r}=e;return Math.round((r[1]-t)/n[1])}function f(e,t,n){const r=[];let i,a,o,s;for(let l=0;l<n.length;l++){const f=n[l];l>0?(o=c(e,f[0]),s=u(e,f[1]),o===i&&s===a||(r.push(t(f,o-i,s-a)),i=o,a=s)):(i=c(e,f[0]),a=u(e,f[1]),r.push(t(f,i,a)))}return r.length>0?r:null}function m(e,t){let{scale:n,translate:r}=e;return t*n[0]+r[0]}function h(e,t){let{scale:n,translate:r}=e;return r[1]-t*n[1]}function d(e,t,n){const r=new Array(n.length);if(!n.length)return r;const[i,a]=e.scale;let o=m(e,n[0][0]),s=h(e,n[0][1]);r[0]=t(n[0],o,s);for(let l=1;l<n.length;l++){const e=n[l];o+=e[0]*i,s-=e[1]*a,r[l]=t(e,o,s)}return r}function g(e,t,n){const r=new Array(n.length);for(let i=0;i<n.length;i++)r[i]=d(e,t,n[i]);return r}function p(e,t,n,r,i){return t.points=function(e,t,n,r){return f(e,n?r?s:o:r?o:a,t)}(e,n.points,r,i),t}function y(e,t,n,r,i){return t.x=c(e,n.x),t.y=u(e,n.y),t!==n&&(r&&(t.z=n.z),i&&(t.m=n.m)),t}function C(e,t,n,r,i){const l=function(e,t,n,r){const i=[],l=n?r?s:o:r?o:a;for(let a=0;a<t.length;a++){const n=f(e,l,t[a]);n&&n.length>=3&&i.push(n)}return i.length?i:null}(e,n.rings,r,i);return l?(t.rings=l,t):null}function M(e,t,n,r,i){const l=function(e,t,n,r){const i=[],l=n?r?s:o:r?o:a;for(let a=0;a<t.length;a++){const n=f(e,l,t[a]);n&&n.length>=2&&i.push(n)}return i.length?i:null}(e,n.paths,r,i);return l?(t.paths=l,t):null}function P(e,t){return e&&t?(0,i.wp)(t)?y(e,{},t,!1,!1):(0,i.l9)(t)?M(e,{},t,!1,!1):(0,i.oU)(t)?C(e,{},t,!1,!1):(0,i.aW)(t)?p(e,{},t,!1,!1):(0,i.YX)(t)?function(e,t,n,r,i){return t.xmin=c(e,n.xmin),t.ymin=u(e,n.ymin),t.xmax=c(e,n.xmax),t.ymax=u(e,n.ymax),t!==n&&(r&&(t.zmin=n.zmin,t.zmax=n.zmax),i&&(t.mmin=n.mmin,t.mmax=n.mmax)),t}(e,{},t,!1,!1):null:null}function S(e,t,n,i,l){return(0,r.pC)(n)&&(t.points=function(e,t,n,r){return d(e,n?r?s:o:r?o:a,t)}(e,n.points,i,l)),t}function v(e,t,n,i,a){return(0,r.Wi)(n)||(t.x=m(e,n.x),t.y=h(e,n.y),t!==n&&(i&&(t.z=n.z),a&&(t.m=n.m))),t}function w(e,t,n,i,l){return(0,r.pC)(n)&&(t.rings=function(e,t,n,r){return g(e,n?r?s:o:r?o:a,t)}(e,n.rings,i,l)),t}function x(e,t,n,i,l){return(0,r.pC)(n)&&(t.paths=function(e,t,n,r){return g(e,n?r?s:o:r?o:a,t)}(e,n.paths,i,l)),t}},94304:(e,t,n)=>{n.r(t),n.d(t,{CIMSymbolRasterizer:()=>P,GeometryStyle:()=>r});var r,i,a=n(51995),o=n(76200),s=n(66978),l=n(17842),c=n(643),u=n(77981),f=n(79815),m=n(59001),h=n(16285),d=n(22532),g=n(31027),p=n(49729),y=n(83748);(i=r||(r={})).Legend="legend",i.Preview="preview";const C=(e,t,n)=>{if(e&&e.targetSize){let r;if(n){const t=Math.max(n.frame.xmax-n.frame.xmin,n.frame.ymax-n.frame.ymin);r=e.targetSize/(0,l.F2)(t)}else r=e.targetSize/t.referenceSize;return r}return e&&e.scaleFactor?e.scaleFactor:1},M={fill:{legend:{frame:{xmax:15,xmin:0,ymax:15,ymin:0},geometry:{rings:[[[0,15],[15,7.5],[15,0],[0,0],[0,15]]]},canvasPaths:{rings:[[[0,15],[0,0],[15,7.5],[15,15],[0,15]]]}},preview:{frame:{xmax:100,xmin:0,ymax:100,ymin:0},geometry:{rings:[[[0,100],[100,100],[100,0],[0,0],[0,100]]]},canvasPaths:{rings:[[[0,100],[0,0],[100,0],[100,100],[0,100]]]}}},stroke:{legend:{frame:{xmax:24,xmin:0,ymax:2,ymin:-2},geometry:{paths:[[[0,0],[12,0],[24,0]]]},canvasPaths:{paths:[[[0,2],[12,2],[24,2]]]}},preview:{frame:{xmax:100,xmin:0,ymax:2,ymin:-2},geometry:{paths:[[[0,0],[50,0],[100,0]]]},canvasPaths:{paths:[[[0,2],[50,2],[100,2]]]}}}};class P{constructor(e,t){this._spatialReference=e,this._avoidSDF=t,this._resourceCache=new Map,this._pictureMarkerCache=new Map,this._textRasterizer=new d.Z,this._cimResourceManager=new m.Z,this._rasterizer=new h.Z(this._cimResourceManager)}async rasterizeCIMSymbolAsync(e,t,n,r,i,a,o,s){r=r||(t?null!=t.centroid?"esriGeometryPolygon":(0,u.Ji)(t.geometry):null)||function(e){if(!(e&&e.data&&e.data.symbol))return null;switch(e.data.symbol.type){case"CIMPointSymbol":case"CIMTextSymbol":return"esriGeometryPoint";case"CIMLineSymbol":return"esriGeometryPolyline";case"CIMPolygonSymbol":return"esriGeometryPolygon";default:return null}}(e);const l=await this.analyzeCIMSymbol(e,t?function(e){return(e?Object.keys(e):[]).map((t=>({name:t,alias:t,type:"string"==typeof e[t]?"esriFieldTypeString":"esriFieldTypeDouble"})))}(t.attributes):null,n,r,s);return this.rasterizeCIMSymbol(l,t,r,i,a,o)}async analyzeCIMSymbol(e,t,n,r,i){const a=[],o=t?{geometryType:r,spatialReference:this._spatialReference,fields:t}:null;let l;await(0,f.c)(e.data,o,this._cimResourceManager,a,this._avoidSDF),(0,s.k_)(i);for(const s of a)"CIMPictureMarker"!==s.cim.type&&"CIMPictureFill"!==s.cim.type&&"CIMPictureStroke"!==s.cim.type||(l||(l=[]),l.push(this._fetchPictureMarkerResource(s,i))),n&&"text"===s.type&&"string"==typeof s.text&&s.text.includes("[")&&(s.text=(0,g.Qs)(n,s.text,s.cim.textCase));return l&&await Promise.all(l),a}async _fetchPictureMarkerResource(e,t){const n=e.materialHash;if(!this._pictureMarkerCache.get(n)){const r=(await(0,o.default)(e.cim.url,{responseType:"image",signal:t&&t.signal})).data;this._pictureMarkerCache.set(n,r)}}rasterizeCIMSymbol(e,t,n,r,i,a){const o=[];for(const s of e){r&&"function"==typeof r.scaleFactor&&(r.scaleFactor=r.scaleFactor(t,i,a));const e=this._getRasterizedResource(s,t,n,r,i,a);if(!e)continue;let l=0,c=e.anchorX||0,u=e.anchorY||0,f=!1,m=0,h=0;if("esriGeometryPoint"===n){const e=C(r,s,null);if(m=(0,g.hf)(s.offsetX,t,i,a)*e||0,h=(0,g.hf)(s.offsetY,t,i,a)*e||0,"marker"===s.type)l=(0,g.hf)(s.rotation,t,i,a)||0,f=!!s.rotateClockwise&&s.rotateClockwise;else if("text"===s.type){if(l=(0,g.hf)(s.angle,t,i,a)||0,void 0!==s.horizontalAlignment)switch(s.horizontalAlignment){case"left":c=-.5;break;case"right":c=.5;break;default:c=0}if(void 0!==s.verticalAlignment)switch(s.verticalAlignment){case"top":u=.5;break;case"bottom":u=-.5;break;case"baseline":u=-.25;break;default:u=0}}}null!=e&&o.push({angle:l,rotateClockWise:f,anchorX:c,anchorY:u,offsetX:m,offsetY:h,rasterizedResource:e})}return this.getSymbolImage(o)}getSymbolImage(e){const t=document.createElement("canvas"),n=t.getContext("2d");let r=0,i=0,a=0,o=0;const s=[];for(let m=0;m<e.length;m++){const t=e[m],c=t.rasterizedResource;if(!c)continue;const u=c.size,f=t.offsetX,h=t.offsetY,d=t.anchorX,g=t.anchorY,p=t.rotateClockWise||!1;let y=t.angle,C=(0,l.F2)(f)-u[0]*(.5+d),M=(0,l.F2)(h)-u[1]*(.5+g),P=C+u[0],S=M+u[1];if(y){p&&(y=-y);const e=Math.sin(y*Math.PI/180),t=Math.cos(y*Math.PI/180),n=C*t-M*e,r=C*e+M*t,i=C*t-S*e,a=C*e+S*t,o=P*t-S*e,s=P*e+S*t,l=P*t-M*e,c=P*e+M*t;C=Math.min(n,i,o,l),M=Math.min(r,a,s,c),P=Math.max(n,i,o,l),S=Math.max(r,a,s,c)}r=C<r?C:r,i=M<i?M:i,a=P>a?P:a,o=S>o?S:o;const v=n.createImageData(c.size[0],c.size[1]);v.data.set(new Uint8ClampedArray(c.image.buffer));const w={offsetX:f,offsetY:h,rotateClockwise:p,angle:y,rasterizedImage:v,anchorX:d,anchorY:g};s.push(w)}t.width=a-r,t.height=o-i;const c=-r,u=o;for(let m=0;m<s.length;m++){const e=s[m],t=this._imageDataToCanvas(e.rasterizedImage),r=e.rasterizedImage.width,i=e.rasterizedImage.height,a=c-r*(.5+e.anchorX),o=u-i*(.5-e.anchorY);if(e.angle){const r=(360-e.angle)*Math.PI/180;n.save(),n.translate((0,l.F2)(e.offsetX),-(0,l.F2)(e.offsetY)),n.translate(c,u),n.rotate(r),n.translate(-c,-u),n.drawImage(t,a,o),n.restore()}else n.drawImage(t,a+(0,l.F2)(e.offsetX),o-(0,l.F2)(e.offsetY))}const f=new y.e({x:c/t.width-.5,y:u/t.height-.5});return{imageData:0!==t.width&&0!==t.height?n.getImageData(0,0,t.width,t.height):n.createImageData(1,1),anchorPosition:f}}_imageDataToCanvas(e){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const t=this._imageDataCanvas,n=t.getContext("2d");return t.width=e.width,t.height=e.height,n.putImageData(e,0,0),t}_imageTo32Array(e,t,n,r){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const i=this._imageDataCanvas,o=i.getContext("2d");if(i.width=t,i.height=n,o.drawImage(e,0,0,t,n),r){o.save();const i=new a.Z(r);o.fillStyle=i.toHex(),o.globalCompositeOperation="multiply",o.fillRect(0,0,t,n),o.globalCompositeOperation="destination-atop",o.drawImage(e,0,0,t,n),o.restore()}return new Uint32Array(o.getImageData(0,0,t,n).data.buffer)}_getRasterizedResource(e,t,n,i,a,o){let s,l,u,f,m=null,h=null;if("esriGeometryPolyline"===n||"esriGeometryPolygon"===n){const f=i&&i.style?i.style:r.Legend,d="esriGeometryPolyline"===n?M.stroke[f]:M.fill[f];if("line"===e.type){if("CIMSolidStroke"!==e.cim.type){if("CIMPictureStroke"===e.cim.type){const n=(0,g.hf)(e.width,t,a,o),r=(0,g.hf)(e.color,t,a,o),{image:i,width:s,height:l}=this._getPictureResource(e,n,r);return this._rasterizePictureResource(e,i,s,l,d,n)}return null}({analyzedCIM:s,hash:u}=S(e,t,a,o)),l=this._embedCIMLayerInVectorMarker(s,d)}else if("marker"===e.type){if("CIMPictureMarker"===e.cim.type){const n=(0,g.hf)(e.size,t,a,o),r=(0,g.hf)(e.color,t,a,o),{image:i,width:s,height:l}=this._getPictureResource(e,n,r);return this._rasterizePictureResource(e,i,s,l,d,n)}if("CIMVectorMarker"!==e.cim.type)return null;e.cim.offsetX=(0,g.hf)(e.offsetX,t,a,o),e.cim.offsetY=(0,g.hf)(e.offsetY,t,a,o),e.cim.rotation=(0,g.hf)(e.rotation,t,a,o),e.cim.markerPlacement=e.markerPlacement,({analyzedCIM:s}=S(e,t,a,o)),u=(0,c.hP)(JSON.stringify(s)).toString(),l=this._embedCIMLayerInVectorMarker(s,d),m=(0,g.hf)(e.size,t,a,o),h=e.path}else{if("text"===e.type)return null;if("fill"===e.type){if("CIMHatchFill"===e.cim.type||"CIMVectorMarker"===e.cim.type||"CIMPictureMarker"===e.cim.type||"CIMPictureFill"===e.cim.type){const n=e.cim.size||e.cim.height;let r,i,l;if("CIMPictureMarker"===e.cim.type||"CIMPictureFill"===e.cim.type)({image:r,width:i,height:l}=this._getPictureResource(e,n,(0,g.hf)(e.color,t,a,o)));else{({analyzedCIM:s,hash:u}=S(e,t,a,o));const c=this._rasterizer.rasterizeJSONResource({cim:s,type:e.type,url:e.url,mosaicHash:u,size:n,path:h},1,this._avoidSDF);r=c.image,i=c.size[0],l=c.size[1]}return this._rasterizePictureResource(e,r,i,l,d,null)}if("CIMSolidFill"!==e.cim.type)return null;({analyzedCIM:s,hash:u}=S(e,t,a,o)),l=this._embedCIMLayerInVectorMarker(s,d)}}}else{if("text"===e.type)return f=this._rasterizeTextResource(e,t,i,a,o),f;({analyzedCIM:s,hash:u}=S(e,t,a,o));const n=C(i,e,null);if("CIMPictureMarker"===e.cim.type){const r=(0,g.hf)(e.size,t,a,o)*n,{image:i,width:s,height:l}=this._getPictureResource(e,r,(0,g.hf)(e.color,t,a,o));return f={image:i,size:[s,l],sdf:!1,simplePattern:!1,anchorX:e.anchorPoint?e.anchorPoint.x:0,anchorY:e.anchorPoint?e.anchorPoint.y:0},f}(0,p.FW)(s,n,{preserveOutlineWidth:!1}),l=s}u+=n,i&&(u+=JSON.stringify(i));const d=this._resourceCache;return d.has(u)?d.get(u):(f=this._rasterizer.rasterizeJSONResource({cim:l,type:e.type,url:e.url,mosaicHash:u,size:m,path:h},window.devicePixelRatio||1,this._avoidSDF),d.set(u,f),f)}_rasterizeTextResource(e,t,n,r,i){const a=C(n,e,null),o=(0,g.hf)(e.text,t,r,i);if(!o||0===o.length)return null;const s=(0,g.hf)(e.fontName,t,r,i),l=(0,g.hf)(e.style,t,r,i),c=(0,g.hf)(e.weight,t,r,i),u=(0,g.hf)(e.decoration,t,r,i),f=(0,g.hf)(e.size,t,r,i)*a,m=(0,g.hf)(e.horizontalAlignment,t,r,i),h=(0,g.hf)(e.verticalAlignment,t,r,i),d=(0,g.nn)((0,g.hf)(e.color,t,r,i)),p=(0,g.nn)((0,g.hf)(e.outlineColor,t,r,i)),y={color:d,size:f,horizontalAlignment:m,verticalAlignment:h,font:{family:s,style:l,weight:c,decoration:u},halo:{size:(0,g.hf)(e.outlineSize,t,r,i)||0,color:p,style:l},pixelRatio:1,premultiplyColors:!this._avoidSDF};return this._textRasterizer.rasterizeText(o,y)}_rasterizePictureResource(e,t,n,r,i,a){const o=document.createElement("canvas"),s=o.getContext("2d");o.height=(0,l.F2)(Math.max(i.frame.ymax-i.frame.ymin,a)),o.width=(0,l.F2)(i.frame.xmax-i.frame.xmin);const c=s.createImageData(n,r);c.data.set(new Uint8ClampedArray(t.buffer));const f=this._imageDataToCanvas(c),m=s.createPattern(f,"repeat"),h=Math.cos((-e.cim.rotation||0)*Math.PI/180),d=Math.sin((-e.cim.rotation||0)*Math.PI/180);m.setTransform({m11:h,m12:d,m21:-d,m22:h,m41:(0,l.F2)(e.cim.offsetX)||0,m42:(0,l.F2)(e.cim.offsetY)||0});const g=i.canvasPaths;let p,y,C;(0,u.oU)(g)?(p=g.rings,s.fillStyle=m,y=s.fill,C=["evenodd"]):(0,u.l9)(g)&&(p=g.paths,s.strokeStyle=m,s.lineWidth=a,y=s.stroke,p[0][0][1]=o.height/2,p[0][1][1]=o.height/2),s.beginPath();for(const u of p){const e=u?u.length:0;if(e>1){let t=u[0];s.moveTo((0,l.F2)(t[0]),(0,l.F2)(t[1]));for(let n=1;n<e;++n)t=u[n],s.lineTo((0,l.F2)(t[0]),(0,l.F2)(t[1]));s.closePath()}}y.apply(s,C);const M=s.getImageData(0,0,o.width,o.height),P=new Uint8Array(M.data);return{size:[o.width,o.height],image:new Uint32Array(P.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}_getPictureResource(e,t,n){const r=this._pictureMarkerCache.get(e.materialHash);if(!r)return null;const i=r.height/r.width,a=t?i>1?(0,l.F2)(t):(0,l.F2)(t)/i:r.width,o=t?i>1?(0,l.F2)(t)*i:(0,l.F2)(t):r.height;return{image:this._imageTo32Array(r,a,o,n),width:a,height:o}}_embedCIMLayerInVectorMarker(e,t){const n=(0,u.oU)(t.geometry)?"CIMPolygonSymbol":"CIMLineSymbol",r=t.frame;return{type:"CIMVectorMarker",frame:r,size:r.ymax-r.ymin,markerGraphics:[{type:"CIMMarkerGraphic",geometry:t.geometry,symbol:{type:n,symbolLayers:[e]}}]}}}function S(e,t,n,r){let i,a;return"function"==typeof e.materialHash?(i=(0,e.materialHash)(t,n,r),a=(0,f.S)(e.cim,e.materialOverrides)):(i=e.materialHash,a=e.cim),{analyzedCIM:a,hash:i}}},16285:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(78915),i=n(691),a=n(6388),o=n(31027);class s{constructor(e){this._resourceManager=e}dispose(){this._rasterizationCanvas=null}rasterizeJSONResource(e,t,n){if(this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),"simple-fill"===e.type||"esriSFS"===e.type){const[n,i,a]=r.fN.rasterizeSimpleFill(this._rasterizationCanvas,e.style,t);return{size:[i,a],image:new Uint32Array(n.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0}}if("simple-line"===e.type||"esriSLS"===e.type||"line"===e.type&&e.dashTemplate){let t,n;if("simple-line"===e.type||"esriSLS"===e.type)switch(t=(0,r.U1)(e.style,e.cap),e.cap){case"butt":n="Butt";break;case"square":n="Square";break;default:n="Round"}else t=e.dashTemplate,n=e.cim.capStyle;const[i,a,o]=r.fN.rasterizeSimpleLine(t,n);return{size:[a,o],image:new Uint32Array(i.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}let o,s,l;if("simple-marker"===e.type||"esriSMS"===e.type||"line-marker"===e.type?(o=r.B$.fromSimpleMarker(e),l=(0,a.Fp)(o)):e.cim&&"CIMHatchFill"===e.cim.type?(o=r.B$.fromCIMHatchFill(e.cim),s=new i.Z(o.frame.xmin,-o.frame.ymax,o.frame.xmax-o.frame.xmin,o.frame.ymax-o.frame.ymin)):e.cim.markerPlacement&&"CIMMarkerPlacementInsidePolygon"===e.cim.markerPlacement.type?(o=r.B$.fromCIMInsidePolygon(e.cim),s=new i.Z(o.frame.xmin,-o.frame.ymax,o.frame.xmax-o.frame.xmin,o.frame.ymax-o.frame.ymin)):(o=e.cim,l=(0,a.Fp)(o)),l&&!n){const[e,t,n]=(0,a.RL)(l);return e?{size:[t,n],image:new Uint32Array(e.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}:null}const[c,u,f,m,h]=r.B$.rasterize(this._rasterizationCanvas,o,s,this._resourceManager,!n);return c?{size:[u,f],image:new Uint32Array(c.buffer),sdf:!1,simplePattern:!1,anchorX:m,anchorY:h}:null}rasterizeImageResource(e,t,n,r){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),this._rasterizationCanvas.width=e,this._rasterizationCanvas.height=t;const i=this._rasterizationCanvas.getContext("2d");n instanceof ImageData?i.putImageData(n,0,0):(n.setAttribute("width",`${e}px`),n.setAttribute("height",`${t}px`),i.drawImage(n,0,0,e,t));const a=i.getImageData(0,0,e,t),s=new Uint8Array(a.data);if(r)for(const o of r)if(o&&o.oldColor&&4===o.oldColor.length&&o.newColor&&4===o.newColor.length){const[e,t,n,r]=o.oldColor,[i,a,l,c]=o.newColor;if(e===i&&t===a&&n===l&&r===c)continue;for(let o=0;o<s.length;o+=4)e===s[o]&&t===s[o+1]&&n===s[o+2]&&r===s[o+3]&&(s[o]=i,s[o+1]=a,s[o+2]=l,s[o+3]=c)}let l;for(let o=0;o<s.length;o+=4)l=s[o+3]/255,s[o]=s[o]*l,s[o+1]=s[o+1]*l,s[o+2]=s[o+2]*l;let c=s,u=e,f=t;const m=512;if(u>=m||f>=m){const n=u/f;n>1?(u=m,f=Math.round(m/n)):(f=m,u=Math.round(m*n)),c=new Uint8Array(4*u*f);const r=new Uint8ClampedArray(c.buffer);(0,o.TT)(s,e,t,r,u,f,!1)}return{size:[u,f],image:new Uint32Array(c.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}}},48202:(e,t,n)=>{var r,i,a,o,s,l,c,u,f,m,h,d,g,p,y,C,M,P,S,v,w,x,b,R,I,T,z,A,L,F,k,B,_,D,O,N,U,E,W,X,G,H,Y,Z,q,J,V,$,j,Q,K,ee,te,ne,re,ie,ae,oe,se,le,ce;n.d(t,{$y:()=>x,AH:()=>i,CS:()=>V,DD:()=>u,Dd:()=>L,Em:()=>w,JS:()=>q,Ky:()=>f,Lh:()=>$,Qb:()=>ae,RL:()=>r,RS:()=>se,TF:()=>v,Tx:()=>s,UR:()=>M,UX:()=>ie,bj:()=>J,eZ:()=>c,id:()=>I,kP:()=>N,of:()=>h,r4:()=>X,sj:()=>U,v2:()=>a,zQ:()=>A,zV:()=>C}),function(e){e[e.BUTT=0]="BUTT",e[e.ROUND=1]="ROUND",e[e.SQUARE=2]="SQUARE",e[e.UNKNOWN=4]="UNKNOWN"}(r||(r={})),function(e){e[e.BEVEL=0]="BEVEL",e[e.ROUND=1]="ROUND",e[e.MITER=2]="MITER",e[e.UNKNOWN=4]="UNKNOWN"}(i||(i={})),function(e){e[e.SCREEN=0]="SCREEN",e[e.MAP=1]="MAP"}(a||(a={})),function(e){e[e.Tint=0]="Tint",e[e.Ignore=1]="Ignore",e[e.Multiply=99]="Multiply"}(o||(o={})),function(e){e.Both="Both",e.JustBegin="JustBegin",e.JustEnd="JustEnd",e.None="None"}(s||(s={})),function(e){e[e.Mosaic=0]="Mosaic",e[e.Centered=1]="Centered"}(l||(l={})),function(e){e[e.Normal=0]="Normal",e[e.Superscript=1]="Superscript",e[e.Subscript=2]="Subscript"}(c||(c={})),function(e){e[e.MSSymbol=0]="MSSymbol",e[e.Unicode=1]="Unicode"}(u||(u={})),function(e){e[e.Unspecified=0]="Unspecified",e[e.TrueType=1]="TrueType",e[e.PSOpenType=2]="PSOpenType",e[e.TTOpenType=3]="TTOpenType",e[e.Type1=4]="Type1"}(f||(f={})),function(e){e[e.Display=0]="Display",e[e.Map=1]="Map"}(m||(m={})),function(e){e.None="None",e.Loop="Loop",e.Oscillate="Oscillate"}(h||(h={})),function(e){e[e.Z=0]="Z",e[e.X=1]="X",e[e.Y=2]="Y"}(d||(d={})),function(e){e[e.XYZ=0]="XYZ",e[e.ZXY=1]="ZXY",e[e.YXZ=2]="YXZ"}(g||(g={})),function(e){e[e.Rectangle=0]="Rectangle",e[e.RoundedRectangle=1]="RoundedRectangle",e[e.Oval=2]="Oval"}(p||(p={})),function(e){e[e.None=0]="None",e[e.Alpha=1]="Alpha",e[e.Screen=2]="Screen",e[e.Multiply=3]="Multiply",e[e.Add=4]="Add"}(y||(y={})),function(e){e[e.TTB=0]="TTB",e[e.RTL=1]="RTL",e[e.BTT=2]="BTT"}(C||(C={})),function(e){e[e.None=0]="None",e[e.SignPost=1]="SignPost",e[e.FaceNearPlane=2]="FaceNearPlane"}(M||(M={})),function(e){e[e.Float=0]="Float",e[e.String=1]="String",e[e.Boolean=2]="Boolean"}(P||(P={})),function(e){e[e.Intersect=0]="Intersect",e[e.Subtract=1]="Subtract"}(S||(S={})),function(e){e.OpenEnded="OpenEnded",e.Block="Block",e.Crossed="Crossed"}(v||(v={})),function(e){e.FullGeometry="FullGeometry",e.PerpendicularFromFirstSegment="PerpendicularFromFirstSegment",e.ReversedFirstSegment="ReversedFirstSegment",e.PerpendicularToSecondSegment="PerpendicularToSecondSegment",e.SecondSegmentWithTicks="SecondSegmentWithTicks",e.DoublePerpendicular="DoublePerpendicular",e.OppositeToFirstSegment="OppositeToFirstSegment",e.TriplePerpendicular="TriplePerpendicular",e.HalfCircleFirstSegment="HalfCircleFirstSegment",e.HalfCircleSecondSegment="HalfCircleSecondSegment",e.HalfCircleExtended="HalfCircleExtended",e.OpenCircle="OpenCircle",e.CoverageEdgesWithTicks="CoverageEdgesWithTicks",e.GapExtentWithDoubleTicks="GapExtentWithDoubleTicks",e.GapExtentMidline="GapExtentMidline",e.Chevron="Chevron",e.PerpendicularWithArc="PerpendicularWithArc",e.ClosedHalfCircle="ClosedHalfCircle",e.TripleParallelExtended="TripleParallelExtended",e.ParallelWithTicks="ParallelWithTicks",e.Parallel="Parallel",e.PerpendicularToFirstSegment="PerpendicularToFirstSegment",e.ParallelOffset="ParallelOffset",e.OffsetOpposite="OffsetOpposite",e.OffsetSame="OffsetSame",e.CircleWithArc="CircleWithArc",e.DoubleJog="DoubleJog",e.PerpendicularOffset="PerpendicularOffset",e.LineExcludingLastSegment="LineExcludingLastSegment",e.MultivertexArrow="MultivertexArrow",e.CrossedArrow="CrossedArrow",e.ChevronArrow="ChevronArrow",e.ChevronArrowOffset="ChevronArrowOffset",e.PartialFirstSegment="PartialFirstSegment",e.Arch="Arch",e.CurvedParallelTicks="CurvedParallelTicks",e.Arc90Degrees="Arc90Degrees"}(w||(w={})),function(e){e.Mitered="Mitered",e.Bevelled="Bevelled",e.Rounded="Rounded",e.Square="Square",e.TrueBuffer="TrueBuffer"}(x||(x={})),function(e){e.ClosePath="ClosePath",e.ConvexHull="ConvexHull",e.RectangularBox="RectangularBox"}(b||(b={})),function(e){e.BeginningOfLine="BeginningOfLine",e.EndOfLine="EndOfLine"}(R||(R={})),function(e){e.Mitered="Mitered",e.Bevelled="Bevelled",e.Rounded="Rounded",e.Square="Square"}(I||(I={})),function(e){e.Fast="Fast",e.Accurate="Accurate"}(T||(T={})),function(e){e.BeginningOfLine="BeginningOfLine",e.EndOfLine="EndOfLine"}(z||(z={})),function(e){e.Sinus="Sinus",e.Square="Square",e.Triangle="Triangle",e.Random="Random"}(A||(A={})),function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Force=2]="Force"}(L||(L={})),function(e){e[e.Buffered=0]="Buffered",e[e.Left=1]="Left",e[e.Right=2]="Right",e[e.AlongLine=3]="AlongLine"}(F||(F={})),function(e){e[e.Linear=0]="Linear",e[e.Rectangular=1]="Rectangular",e[e.Circular=2]="Circular",e[e.Buffered=3]="Buffered"}(k||(k={})),function(e){e[e.Discrete=0]="Discrete",e[e.Continuous=1]="Continuous"}(B||(B={})),function(e){e[e.AcrossLine=0]="AcrossLine",e[e.AloneLine=1]="AloneLine"}(_||(_={})),function(e){e[e.Left=0]="Left",e[e.Right=1]="Right",e[e.Center=2]="Center",e[e.Justify=3]="Justify"}(D||(D={})),function(e){e[e.Base=0]="Base",e[e.MidPoint=1]="MidPoint",e[e.ThreePoint=2]="ThreePoint",e[e.FourPoint=3]="FourPoint",e[e.Underline=4]="Underline",e[e.CircularCW=5]="CircularCW",e[e.CircularCCW=6]="CircularCCW"}(O||(O={})),function(e){e.Butt="Butt",e.Round="Round",e.Square="Square"}(N||(N={})),function(e){e.NoConstraint="NoConstraint",e.HalfPattern="HalfPattern",e.HalfGap="HalfGap",e.FullPattern="FullPattern",e.FullGap="FullGap",e.Custom="Custom"}(U||(U={})),function(e){e[e.None=-1]="None",e[e.Custom=0]="Custom",e[e.Circle=1]="Circle",e[e.OpenArrow=2]="OpenArrow",e[e.ClosedArrow=3]="ClosedArrow",e[e.Diamond=4]="Diamond"}(E||(E={})),function(e){e[e.ExtraLeading=0]="ExtraLeading",e[e.Multiple=1]="Multiple",e[e.Exact=2]="Exact"}(W||(W={})),function(e){e.Bevel="Bevel",e.Round="Round",e.Miter="Miter"}(X||(X={})),function(e){e[e.Default=0]="Default",e[e.String=1]="String",e[e.Numeric=2]="Numeric"}(G||(G={})),function(e){e[e.InsidePolygon=0]="InsidePolygon",e[e.PolygonCenter=1]="PolygonCenter",e[e.RandomlyInsidePolygon=2]="RandomlyInsidePolygon"}(H||(H={})),function(e){e[e.Tint=0]="Tint",e[e.Replace=1]="Replace",e[e.Multiply=2]="Multiply"}(Y||(Y={})),function(e){e[e.ClipAtBoundary=0]="ClipAtBoundary",e[e.RemoveIfCenterOutsideBoundary=1]="RemoveIfCenterOutsideBoundary",e[e.DoNotTouchBoundary=2]="DoNotTouchBoundary",e[e.DoNotClip=3]="DoNotClip"}(Z||(Z={})),function(e){e.NoConstraint="NoConstraint",e.WithMarkers="WithMarkers",e.WithFullGap="WithFullGap",e.WithHalfGap="WithHalfGap",e.Custom="Custom"}(q||(q={})),function(e){e.Fixed="Fixed",e.Random="Random",e.RandomFixedQuantity="RandomFixedQuantity"}(J||(J={})),function(e){e.LineMiddle="LineMiddle",e.LineBeginning="LineBeginning",e.LineEnd="LineEnd",e.SegmentMidpoint="SegmentMidpoint"}(V||(V={})),function(e){e.OnPolygon="OnPolygon",e.CenterOfMass="CenterOfMass",e.BoundingBoxCenter="BoundingBoxCenter"}($||($={})),function(e){e[e.Low=0]="Low",e[e.Medium=1]="Medium",e[e.High=2]="High"}(j||(j={})),function(e){e[e.MarkerCenter=0]="MarkerCenter",e[e.MarkerBounds=1]="MarkerBounds"}(Q||(Q={})),function(e){e[e.None=0]="None",e[e.PropUniform=1]="PropUniform",e[e.PropNonuniform=2]="PropNonuniform",e[e.DifUniform=3]="DifUniform",e[e.DifNonuniform=4]="DifNonuniform"}(K||(K={})),function(e){e.Tube="Tube",e.Strip="Strip",e.Wall="Wall"}(ee||(ee={})),function(e){e[e.Random=0]="Random",e[e.Increasing=1]="Increasing",e[e.Decreasing=2]="Decreasing",e[e.IncreasingThenDecreasing=3]="IncreasingThenDecreasing"}(te||(te={})),function(e){e[e.Relative=0]="Relative",e[e.Absolute=1]="Absolute"}(ne||(ne={})),function(e){e[e.Normal=0]="Normal",e[e.LowerCase=1]="LowerCase",e[e.Allcaps=2]="Allcaps"}(re||(re={})),function(e){e[e.LTR=0]="LTR",e[e.RTL=1]="RTL"}(ie||(ie={})),function(e){e.Draft="Draft",e.Picture="Picture",e.Text="Text"}(ae||(ae={})),function(e){e[e.Top=0]="Top",e[e.Center=1]="Center",e[e.Baseline=2]="Baseline",e[e.Bottom=3]="Bottom"}(oe||(oe={})),function(e){e[e.Right=0]="Right",e[e.Upright=1]="Upright"}(se||(se={})),function(e){e[e.Small=0]="Small",e[e.Medium=1]="Medium",e[e.Large=2]="Large"}(le||(le={})),function(e){e[e.Calm=0]="Calm",e[e.Rippled=1]="Rippled",e[e.Slight=2]="Slight",e[e.Moderate=3]="Moderate"}(ce||(ce={}))},54763:(e,t,n)=>{n.r(t),n.d(t,{previewCIMSymbol:()=>u});var r=n(17842),i=n(94304),a=n(49729),o=n(37817),s=n(69157);const l=new i.CIMSymbolRasterizer(null,!0),c=o.b_.maxSize;async function u(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{size:n,maxSize:i,node:o,opacity:u}=t,f=t.cimOptions||t,{feature:m,fieldMap:h,geometryType:d,style:g}=f,p=(0,a.kW)(e),y="number"==typeof n?n:null,C=Math.min(null!=y?y:p,null!=i?i:(0,r.Wz)(c));C!==p&&(e=e.clone(),(0,a.PI)(e,C,{preserveOutlineWidth:!0}));let M=3;e&&e.data&&e.data.symbol&&"CIMPointSymbol"!==e.data.symbol.type&&(M=1);const P=await l.rasterizeCIMSymbolAsync(e,m,h,d,{scaleFactor:M,style:g}),S=document.createElement("canvas");S.width=P.imageData.width,S.height=P.imageData.height,S.getContext("2d").putImageData(P.imageData,0,0);let v=S.width/M,w=S.height/M;if(null!=n&&(null==t?.scale||t?.scale)){const e=v/w;v=e<=1?Math.ceil(C*e):C,w=e<=1?C:Math.ceil(C/e)}const x=new Image(v,w);x.src=S.toDataURL(),null!=u&&(x.style.opacity=`${u}`);let b=x;if(null!=t.effectView){const e={shape:{type:"image",x:0,y:0,width:v,height:w,src:x.src},fill:null,stroke:null,offset:[0,0]};b=(0,s.w)([[e]],[v,w],{effectView:t.effectView})}return o&&o.appendChild(b),b}},91935:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(10064),i=n(32718),a=n(58971);function o(e,t,n,r,a){const o=e.referencesGeometry()&&a?l(t,r,a):t,s=e.repurposeFeature(o);try{return e.evaluate({...n,$feature:s})}catch(c){return i.Z.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",c),null}}const s=new Map;function l(e,t,n){const{transform:o,hasZ:l,hasM:c}=n;s.has(t)||s.set(t,function(e){const t={};switch(e){case"esriGeometryPoint":return(e,n,r,i)=>(0,a.U1)(n,t,e,r,i);case"esriGeometryPolygon":return(e,n,r,i)=>(0,a.Ie)(n,t,e,r,i);case"esriGeometryPolyline":return(e,n,r,i)=>(0,a.G6)(n,t,e,r,i);case"esriGeometryMultipoint":return(e,n,r,i)=>(0,a.J9)(n,t,e,r,i);default:return i.Z.getLogger("esri.views.2d.support.arcadeOnDemand").error(new r.Z("mapview-arcade",`Unable to handle geometryType: ${e}`)),e=>e}}(t));const u=s.get(t)(e.geometry,o,l,c);return{...e,geometry:u}}},38999:(e,t,n)=>{var r,i;function a(e){switch(e){case"left":return r.Left;case"right":return r.Right;case"center":return r.Center}}function o(e){switch(e){case"top":return i.Top;case"middle":return i.Center;case"baseline":return i.Baseline;case"bottom":return i.Bottom}}function s(e){switch(e){case"above-left":case"esriServerPointLabelPlacementAboveLeft":return[r.Right,i.Bottom];case"above-center":case"above-along":case"esriServerPointLabelPlacementAboveCenter":case"esriServerLinePlacementAboveAlong":return[r.Center,i.Bottom];case"above-right":case"esriServerPointLabelPlacementAboveRight":return[r.Left,i.Bottom];case"center-left":case"esriServerPointLabelPlacementCenterLeft":return[r.Right,i.Center];case"center-center":case"center-along":case"esriServerPointLabelPlacementCenterCenter":case"esriServerLinePlacementCenterAlong":case"always-horizontal":case"esriServerPolygonPlacementAlwaysHorizontal":return[r.Center,i.Center];case"center-right":case"esriServerPointLabelPlacementCenterRight":return[r.Left,i.Center];case"below-left":case"esriServerPointLabelPlacementBelowLeft":return[r.Right,i.Top];case"below-center":case"below-along":case"esriServerPointLabelPlacementBelowCenter":case"esriServerLinePlacementBelowAlong":return[r.Center,i.Top];case"below-right":case"esriServerPointLabelPlacementBelowRight":return[r.Left,i.Top];default:return console.debug(`Found invalid placement type ${e}`),[r.Center,i.Center]}}function l(e){switch(e){case r.Right:return-1;case r.Center:return 0;case r.Left:return 1;default:return console.debug(`Found invalid horizontal alignment ${e}`),0}}function c(e){switch(e){case i.Top:return 1;case i.Center:return 0;case i.Bottom:case i.Baseline:return-1;default:return console.debug(`Found invalid vertical alignment ${e}`),0}}function u(e){switch(e){case"left":return r.Left;case"right":return r.Right;case"center":return r.Center}}function f(e){switch(e){case"above-along":case"below-along":case"center-along":case"esriServerLinePlacementAboveAlong":case"esriServerLinePlacementBelowAlong":case"esriServerLinePlacementCenterAlong":return!0;default:return!1}}n.d(t,{Hd:()=>u,M7:()=>r,NS:()=>f,TR:()=>i,b7:()=>o,g:()=>l,kH:()=>a,qv:()=>s,tf:()=>c}),function(e){e[e.Left=-1]="Left",e[e.Center=0]="Center",e[e.Right=1]="Right"}(r||(r={})),function(e){e[e.Top=1]="Top",e[e.Center=0]="Center",e[e.Bottom=-1]="Bottom",e[e.Baseline=2]="Baseline"}(i||(i={}))},94109:(e,t,n)=>{n.d(t,{$0:()=>o,AI:()=>r,Al:()=>h,By:()=>M,C1:()=>H,CQ:()=>Z,CU:()=>N,D3:()=>m,Ex:()=>c,I_:()=>a,Ic:()=>d,Ij:()=>y,Ip:()=>X,Iv:()=>$,Iw:()=>u,Jw:()=>w,MI:()=>G,QU:()=>v,SD:()=>Q,Tz:()=>q,Uh:()=>Y,V4:()=>O,XJ:()=>W,Xj:()=>S,Zd:()=>k,_5:()=>R,_6:()=>j,a:()=>U,aK:()=>z,dn:()=>D,e0:()=>V,eF:()=>f,eV:()=>s,f2:()=>C,fL:()=>E,iJ:()=>g,iV:()=>B,jk:()=>K,kF:()=>x,lK:()=>A,m4:()=>L,mx:()=>P,nM:()=>p,oK:()=>J,pU:()=>T,ru:()=>i,tQ:()=>_,uG:()=>F,xl:()=>I,xm:()=>l,yP:()=>b});const r=1e-30,i=4294967295,a=512,o=8,s=10,l=29,c=24,u=8,f={metrics:{width:15,height:17,left:0,top:-7,advance:14}},m=0,h=0,d=0,g=1,p=2,y=3,C=4,M=5,P=6,S=12,v=5,w=6,x=5,b=6,R=0,I=1,T=2,z=3,A=4,L=2,F=1,k=2,B=4,_=1.05,D=3,O=5,N=6,U=1.15,E=2,W=8,X=500,G=10,H=1024,Y=2,Z=0,q=1,J=4,V=8,$=16,j=4,Q=1,K=4},73271:(e,t,n)=>{n.d(t,{Au:()=>i,Jz:()=>o,UJ:()=>a});const r=new Float32Array(1);new Uint32Array(r.buffer);function i(e){return[255&e,(65280&e)>>>8,(16711680&e)>>>16,(4278190080&e)>>>24]}function a(e,t){return 65535&e|t<<16}function o(e,t,n,r){return 255&e|(255&t)<<8|(255&n)<<16|r<<24}}}]);
//# sourceMappingURL=6217.eb776482.chunk.js.map