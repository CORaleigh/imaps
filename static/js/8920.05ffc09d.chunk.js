"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[8920],{17653:(e,t,n)=>{n.d(t,{Z:()=>m});var i=n(76200),r=n(10064),a=n(66978),o=n(52522),s=n(38499);const c=[137,80,78,71,13,10,26,10];function l(e){const t=new Uint8Array(e);return!c.some(((e,n)=>e!==t[n]))}function u(e){if(!l(e))return!1;const t=new DataView(e),n=new Uint8Array(e);let i,r=8;do{const e=t.getUint32(r);if(i=String.fromCharCode.apply(String,Array.prototype.slice.call(n.subarray(r+4,r+8))),"acTL"===i)return!0;r+=12+e}while("IEND"!==i&&r<n.length);return!1}var h=n(91958),f=n(47191);const d=[71,73,70];function g(e){if(!function(e){const t=new Uint8Array(e);return!d.some(((e,n)=>e!==t[n]))}(e))return!1;const t=new DataView(e),n=t.getUint8(10);let i=13+(128&n?3*2**(1+(7&n)):0),r=0,a=!1;for(;!a;){switch(t.getUint8(i++)){case 33:if(!o())return!1;break;case 44:s();break;case 59:a=!0;break;default:return!1}if(r>1)return!0}function o(){switch(t.getUint8(i++)){case 249:i++,i+=4,c();break;case 1:r++,i++,i+=12,c();break;case 254:c();break;case 255:i++,i+=8,i+=3,c();break;default:return!1}return!0}function s(){r++,i+=8;const e=t.getUint8(i++);i+=128&e?3*2**(1+(7&e)):0,i++,c()}function c(){let e;for(;e=t.getUint8(i++);)i+=e}return!1}class m{constructor(){this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null,this.geometryEnginePromise=null}destroy(){this._inFlightResourceMap.clear(),this._resourceMap.clear()}getResource(e){return this._resourceMap.get(e)??null}async fetchResource(e,t){const n=this._resourceMap.get(e);if(n)return{width:n.width,height:n.height};let c=this._inFlightResourceMap.get(e);return c?c.then((e=>({width:e.width,height:e.height}))):(c=async function(e,t){const{arrayBuffer:n,mediaType:c}=await async function(e,t){let n;const o=";base64,";if(e.includes(o)){const t=e.indexOf(o),i=e.indexOf(o)+o.length,r=e.substring(i),a=atob(r),s=new Uint8Array(a.length);for(let e=0;e<a.length;e++)s[e]=a.charCodeAt(e);n={arrayBuffer:s.buffer,mediaType:e.substring(0,t).replace("data:","")}}else try{const r=await(0,i.default)(e,{responseType:"array-buffer",...t});n={arrayBuffer:r.data,mediaType:r.getHeader("Content-Type")}}catch(c){if(!(0,a.D_)(c))throw new r.Z("mapview-invalid-resource",`Could not fetch requested resource at ${e}`)}return n}(e,t),l="image/png"===c;return"image/gif"===c&&g(n)?async function(e,t){const n=(0,f.p)(e),i=(0,f.d)(n,!0),{width:r,height:a}=n.lsd,o=document.createElement("canvas");o.width=r,o.height=a;const c=o.getContext("2d",{willReadFrequently:!0}),l=[],u=[];for(const f of i){u.push((0,s.HA)(f.delay||100));const e=new ImageData(f.patch,f.dims.width,f.dims.height),t=(0,h.E0)(e),n=3===f.disposalType?c.getImageData(f.dims.left,f.dims.top,f.dims.width,f.dims.height):void 0;c.drawImage(t,f.dims.left,f.dims.top);const i=c.getImageData(0,0,r,a);l.push(i),1===f.disposalType||(2===f.disposalType?c.clearRect(f.dims.left,f.dims.top,f.dims.width,f.dims.height):3===f.disposalType&&c.putImageData(n,f.dims.left,f.dims.top))}return{frameDurations:u,getFrame:e=>l[e],width:r,height:a}}(n):l&&u(n)?async function(e,t){const n=(0,o.p)(e);if(n instanceof Error)throw n;await n.createImages(),(0,a.k_)(t);const{frames:i,width:r,height:c}=n,l=document.createElement("canvas");l.width=r,l.height=c;const u=l.getContext("2d",{willReadFrequently:!0}),h=[],f=[];for(const a of i){f.push((0,s.HA)(a.delay||100));const e=a.imageElement;0===a.blendOp?u.globalCompositeOperation="copy":u.globalCompositeOperation="source-over";const t=2===a.disposeOp?u.getImageData(a.left,a.top,a.width,a.height):void 0;u.drawImage(e,a.left,a.top);const n=u.getImageData(0,0,r,c);h.push(n),0===a.disposeOp||(1===a.disposeOp?u.clearRect(a.left,a.top,a.width,a.height):2===a.disposeOp&&u.putImageData(t,a.left,a.top))}return{frameDurations:f,getFrame:e=>h[e],width:r,height:c}}(n,t):async function(e,t){const n=window.URL.createObjectURL(e);try{const{data:e}=await(0,i.default)(n,{...t,responseType:"image"});return e}catch(u){if(!(0,a.D_)(u))throw new r.Z("mapview-invalid-resource",`Could not fetch requested resource at ${n}`);throw u}finally{window.URL.revokeObjectURL(n)}}(new Blob([n],{type:c}),t)}(e,t),this._inFlightResourceMap.set(e,c),c.then((t=>(this._inFlightResourceMap.delete(e),this._resourceMap.set(e,t),{width:t.width,height:t.height})),(()=>({width:0,height:0}))))}deleteResource(e){this._inFlightResourceMap.delete(e),this._resourceMap.delete(e)}}},94304:(e,t,n)=>{n.r(t),n.d(t,{CIMSymbolRasterizer:()=>R,GeometryStyle:()=>i});var i,r,a=n(51995),o=n(76200),s=n(92026),c=n(66978),l=n(17842),u=n(98991),h=n(17653),f=n(66726),d=n(78915),g=n(16285),m=n(22532),p=n(31027),C=n(49729),y=n(83748);(r=i||(i={})).Legend="legend",r.Preview="preview";const w=e=>e&&e.scaleFactor?e.scaleFactor:1;class R{constructor(e,t){this._spatialReference=e,this._avoidSDF=t,this._resourceCache=new Map,this._imageDataCanvas=null,this._pictureMarkerCache=new Map,this._textRasterizer=new m.Z,this._cimResourceManager=new h.Z,this._rasterizer=new g.Z(this._cimResourceManager)}get resourceManager(){return this._cimResourceManager}async rasterizeCIMSymbolAsync(e,t,n,i,r,a,o,s){if(!e)return null;const{data:c}=e;if(!c||"CIMSymbolReference"!==c.type||!c.symbol)return null;const{symbol:l}=c;a||(a=(0,p.JW)(l));const u=await d.E0.resolveSymbolOverrides(c,t,this._spatialReference,r,a,o,s);this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const h=this._imageDataCanvas,g=this._cimResourceManager,m=[];d.B$.fetchResources(u,g,m),m.length>0&&await Promise.all(m);const{width:C,height:y}=n,w=function(e,t,n,i){const r=1,a=-t/2+r,o=t/2-r,s=n/2-r,c=-n/2+r;switch(e){case"esriGeometryPoint":return{x:0,y:0};case"esriGeometryPolyline":return{paths:[[[a,0],[0,0],[o,0]]]};default:return"legend"===i?{rings:[[[a,s],[o,0],[o,c],[a,c],[a,s]]]}:{rings:[[[a,s],[o,s],[o,c],[a,c],[a,s]]]}}}(a,C,y,i),R=d.B$.getEnvelope(u,w,g);if(!R)return null;const S=1.3333333333333333*(window.devicePixelRatio||1);let v=1,P=0,T=0;switch(l.type){case"CIMPointSymbol":case"CIMTextSymbol":{let e=1;R.width>C&&(e=C/R.width);let t=1;R.height>y&&(t=y/R.height),"preview"===i&&(R.width<C&&(e=C/R.width),R.height<y&&(t=y/R.height)),v=Math.min(e,t),P=R.x+R.width/2,T=R.y+R.height/2}break;case"CIMLineSymbol":{let e=1;R.height>y&&(e=y/R.height),v=e,T=R.y+R.height/2;const t=R.x*v+C/2,n=(R.x+R.width)*v+C/2;if(t<0){const{paths:e}=w;e[0][0][0]-=t}if(n>C){const{paths:e}=w;e[0][2][0]-=n-C}}break;case"CIMPolygonSymbol":{P=R.x+R.width/2,T=R.y+R.height/2;const e=R.x*v+C/2,t=(R.x+R.width)*v+C/2,n=R.y*v+y/2,i=(R.y+R.height)*v+y/2,{rings:r}=w;e<0&&(r[0][0][0]-=e,r[0][3][0]-=e,r[0][4][0]-=e),n<0&&(r[0][0][1]+=n,r[0][1][1]+=n,r[0][4][1]+=n),t>C&&(r[0][1][0]-=t-C,r[0][2][0]-=t-C),i>y&&(r[0][2][1]+=i-y,r[0][3][1]+=i-y)}}h.width=C*S,h.height=y*S;h.width+=2,h.height+=2;const M=h.getContext("2d"),b=f.zA.createIdentity();return b.translate(-P,-T),b.scale(v*S,-v*S),b.translate(C*S/2+1,y*S/2+1),M.clearRect(0,0,h.width,h.height),new f.cD(M,g,b,!0).drawSymbol(u,w),M.getImageData(0,0,h.width,h.height)}async analyzeCIMSymbol(e,t,n,i,r){const a=[],o=t?{geometryType:i,spatialReference:this._spatialReference,fields:t}:null;let s;await(0,u.c)(e.data,o,this._cimResourceManager,a,this._avoidSDF),(0,c.k_)(r);for(const c of a)"CIMPictureMarker"!==c.cim.type&&"CIMPictureFill"!==c.cim.type&&"CIMPictureStroke"!==c.cim.type||(s||(s=[]),s.push(this._fetchPictureMarkerResource(c,r))),n&&"text"===c.type&&"string"==typeof c.text&&c.text.includes("[")&&(c.text=(0,p.Qs)(n,c.text,c.cim.textCase));return s&&await Promise.all(s),a}rasterizeCIMSymbol3D(e,t,n,i,r,a){const o=[];for(const s of e){i&&"function"==typeof i.scaleFactor&&(i.scaleFactor=i.scaleFactor(t,r,a));const e=this._getRasterizedResource(s,t,n,i,r,a);if(!e)continue;let c=0,l=e.anchorX||0,u=e.anchorY||0,h=!1,f=0,d=0;if("esriGeometryPoint"===n){const e=w(i);if(f=(0,p.hf)(s.offsetX,t,r,a)*e||0,d=(0,p.hf)(s.offsetY,t,r,a)*e||0,"marker"===s.type)c=(0,p.hf)(s.rotation,t,r,a)||0,h=!!s.rotateClockwise&&s.rotateClockwise;else if("text"===s.type){if(c=(0,p.hf)(s.angle,t,r,a)||0,void 0!==s.horizontalAlignment)switch(s.horizontalAlignment){case"left":l=-.5;break;case"right":l=.5;break;default:l=0}if(void 0!==s.verticalAlignment)switch(s.verticalAlignment){case"top":u=.5;break;case"bottom":u=-.5;break;case"baseline":u=-.25;break;default:u=0}}}null!=e&&o.push({angle:c,rotateClockWise:h,anchorX:l,anchorY:u,offsetX:f,offsetY:d,rasterizedResource:e})}return this.getSymbolImage(o)}getSymbolImage(e){const t=document.createElement("canvas"),n=(0,s.s3)(t.getContext("2d"));let i=0,r=0,a=0,o=0;const c=[];for(let s=0;s<e.length;s++){const t=e[s],u=t.rasterizedResource;if(!u)continue;const h=u.size,f=t.offsetX,d=t.offsetY,g=t.anchorX,m=t.anchorY,p=t.rotateClockWise||!1;let C=t.angle,y=(0,l.F2)(f)-h[0]*(.5+g),w=(0,l.F2)(d)-h[1]*(.5+m),R=y+h[0],S=w+h[1];if(C){p&&(C=-C);const e=Math.sin(C*Math.PI/180),t=Math.cos(C*Math.PI/180),n=y*t-w*e,i=y*e+w*t,r=y*t-S*e,a=y*e+S*t,o=R*t-S*e,s=R*e+S*t,c=R*t-w*e,l=R*e+w*t;y=Math.min(n,r,o,c),w=Math.min(i,a,s,l),R=Math.max(n,r,o,c),S=Math.max(i,a,s,l)}i=y<i?y:i,r=w<r?w:r,a=R>a?R:a,o=S>o?S:o;const v=n.createImageData(u.size[0],u.size[1]);v.data.set(new Uint8ClampedArray(u.image.buffer));const P={offsetX:f,offsetY:d,rotateClockwise:p,angle:C,rasterizedImage:v,anchorX:g,anchorY:m};c.push(P)}t.width=a-i,t.height=o-r;const u=-i,h=o;for(let s=0;s<c.length;s++){const e=c[s],t=this._imageDataToCanvas(e.rasterizedImage),i=e.rasterizedImage.width,r=e.rasterizedImage.height,a=u-i*(.5+e.anchorX),o=h-r*(.5-e.anchorY);if(e.angle){const i=(360-e.angle)*Math.PI/180;n.save(),n.translate((0,l.F2)(e.offsetX),-(0,l.F2)(e.offsetY)),n.translate(u,h),n.rotate(i),n.translate(-u,-h),n.drawImage(t,a,o),n.restore()}else n.drawImage(t,a+(0,l.F2)(e.offsetX),o-(0,l.F2)(e.offsetY))}const f=new y.e({x:u/t.width-.5,y:h/t.height-.5});return{imageData:0!==t.width&&0!==t.height?n.getImageData(0,0,t.width,t.height):n.createImageData(1,1),anchorPosition:f}}async _fetchPictureMarkerResource(e,t){const n=e.materialHash;if(!this._pictureMarkerCache.get(n)){const i=(await(0,o.default)(e.cim.url,{responseType:"image",signal:t&&t.signal})).data;this._pictureMarkerCache.set(n,i)}}_imageDataToCanvas(e){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const t=this._imageDataCanvas,n=(0,s.s3)(t.getContext("2d"));return t.width=e.width,t.height=e.height,n.putImageData(e,0,0),t}_imageTo32Array(e,t,n,i){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const r=this._imageDataCanvas,o=(0,s.s3)(r.getContext("2d"));if(r.width=t,r.height=n,o.drawImage(e,0,0,t,n),i){o.save();const r=new a.Z(i);o.fillStyle=r.toHex(),o.globalCompositeOperation="multiply",o.fillRect(0,0,t,n),o.globalCompositeOperation="destination-atop",o.drawImage(e,0,0,t,n),o.restore()}return new Uint32Array(o.getImageData(0,0,t,n).data.buffer)}_getRasterizedResource(e,t,n,i,r,a){let o,c,l;if("text"===e.type)return this._rasterizeTextResource(e,t,i,r,a);({analyzedCIM:o,hash:c}=function(e,t,n,i){let r,a;"function"==typeof e.materialHash?(r=(0,e.materialHash)(t,n,i),a=(0,u.S)(e.cim,e.materialOverrides)):(r=e.materialHash,a=e.cim);return{analyzedCIM:a,hash:r}}(e,t,r,a));const h=w(i);if("CIMPictureMarker"===e.cim.type){const n=(0,p.hf)(e.size,t,r,a)*h,{image:i,width:o,height:c}=(0,s.s3)(this._getPictureResource(e,n,(0,p.hf)(e.color,t,r,a)));return l={image:i,size:[o,c],sdf:!1,simplePattern:!1,anchorX:e.anchorPoint?e.anchorPoint.x:0,anchorY:e.anchorPoint?e.anchorPoint.y:0},l}(0,C.FW)(o,h,{preserveOutlineWidth:!1});const f=o;c+=n,i&&(c+=JSON.stringify(i));const d=this._resourceCache;return d.has(c)?d.get(c):(l=this._rasterizer.rasterizeJSONResource({cim:f,type:e.type,url:e.url,mosaicHash:c,size:null,path:null},window.devicePixelRatio||1,this._avoidSDF),d.set(c,l),l)}_rasterizeTextResource(e,t,n,i,r){const a=w(n),o=(0,p.hf)(e.text,t,i,r);if(!o||0===o.length)return null;const s=(0,p.hf)(e.fontName,t,i,r),c=(0,p.hf)(e.style,t,i,r),l=(0,p.hf)(e.weight,t,i,r),u=(0,p.hf)(e.decoration,t,i,r),h=(0,p.hf)(e.size,t,i,r)*a,f=(0,p.hf)(e.horizontalAlignment,t,i,r),d=(0,p.hf)(e.verticalAlignment,t,i,r),g=(0,p.nn)((0,p.hf)(e.color,t,i,r)),m=(0,p.nn)((0,p.hf)(e.outlineColor,t,i,r)),C={color:g,size:h,horizontalAlignment:f,verticalAlignment:d,font:{family:s,style:c,weight:l,decoration:u},halo:{size:(0,p.hf)(e.outlineSize,t,i,r)||0,color:m,style:c},pixelRatio:1,premultiplyColors:!this._avoidSDF};return this._textRasterizer.rasterizeText(o,C)}_getPictureResource(e,t,n){const i=this._pictureMarkerCache.get(e.materialHash);if(!i)return null;const r=i.height/i.width,a=t?r>1?(0,l.F2)(t):(0,l.F2)(t)/r:i.width,o=t?r>1?(0,l.F2)(t)*r:(0,l.F2)(t):i.height;return{image:this._imageTo32Array(i,a,o,n),width:a,height:o}}}},48202:(e,t,n)=>{var i,r,a,o,s,c,l,u,h,f,d,g,m,p,C,y,w,R,S,v,P,T,M,b,L,A,D,B,F,x,I,O,_,k,N,E,U,z,W,H,X,Y,G,J,Z,q,Q,$,K,V,j,ee,te,ne,ie,re,ae,oe,se,ce,le;n.d(t,{$y:()=>T,AH:()=>r,CS:()=>Q,DD:()=>u,Dd:()=>F,Em:()=>P,JS:()=>Z,Ky:()=>h,Lh:()=>$,Qb:()=>ae,RL:()=>i,RS:()=>se,TF:()=>v,Tx:()=>s,UR:()=>w,UX:()=>re,bj:()=>q,eZ:()=>l,id:()=>L,kP:()=>E,of:()=>d,r4:()=>H,sj:()=>U,v2:()=>a,zQ:()=>B,zV:()=>y}),function(e){e[e.BUTT=0]="BUTT",e[e.ROUND=1]="ROUND",e[e.SQUARE=2]="SQUARE",e[e.UNKNOWN=4]="UNKNOWN"}(i||(i={})),function(e){e[e.BEVEL=0]="BEVEL",e[e.ROUND=1]="ROUND",e[e.MITER=2]="MITER",e[e.UNKNOWN=4]="UNKNOWN"}(r||(r={})),function(e){e[e.SCREEN=0]="SCREEN",e[e.MAP=1]="MAP"}(a||(a={})),function(e){e[e.Tint=0]="Tint",e[e.Ignore=1]="Ignore",e[e.Multiply=99]="Multiply"}(o||(o={})),function(e){e.Both="Both",e.JustBegin="JustBegin",e.JustEnd="JustEnd",e.None="None"}(s||(s={})),function(e){e[e.Mosaic=0]="Mosaic",e[e.Centered=1]="Centered"}(c||(c={})),function(e){e[e.Normal=0]="Normal",e[e.Superscript=1]="Superscript",e[e.Subscript=2]="Subscript"}(l||(l={})),function(e){e[e.MSSymbol=0]="MSSymbol",e[e.Unicode=1]="Unicode"}(u||(u={})),function(e){e[e.Unspecified=0]="Unspecified",e[e.TrueType=1]="TrueType",e[e.PSOpenType=2]="PSOpenType",e[e.TTOpenType=3]="TTOpenType",e[e.Type1=4]="Type1"}(h||(h={})),function(e){e[e.Display=0]="Display",e[e.Map=1]="Map"}(f||(f={})),function(e){e.None="None",e.Loop="Loop",e.Oscillate="Oscillate"}(d||(d={})),function(e){e[e.Z=0]="Z",e[e.X=1]="X",e[e.Y=2]="Y"}(g||(g={})),function(e){e[e.XYZ=0]="XYZ",e[e.ZXY=1]="ZXY",e[e.YXZ=2]="YXZ"}(m||(m={})),function(e){e[e.Rectangle=0]="Rectangle",e[e.RoundedRectangle=1]="RoundedRectangle",e[e.Oval=2]="Oval"}(p||(p={})),function(e){e[e.None=0]="None",e[e.Alpha=1]="Alpha",e[e.Screen=2]="Screen",e[e.Multiply=3]="Multiply",e[e.Add=4]="Add"}(C||(C={})),function(e){e[e.TTB=0]="TTB",e[e.RTL=1]="RTL",e[e.BTT=2]="BTT"}(y||(y={})),function(e){e[e.None=0]="None",e[e.SignPost=1]="SignPost",e[e.FaceNearPlane=2]="FaceNearPlane"}(w||(w={})),function(e){e[e.Float=0]="Float",e[e.String=1]="String",e[e.Boolean=2]="Boolean"}(R||(R={})),function(e){e[e.Intersect=0]="Intersect",e[e.Subtract=1]="Subtract"}(S||(S={})),function(e){e.OpenEnded="OpenEnded",e.Block="Block",e.Crossed="Crossed"}(v||(v={})),function(e){e.FullGeometry="FullGeometry",e.PerpendicularFromFirstSegment="PerpendicularFromFirstSegment",e.ReversedFirstSegment="ReversedFirstSegment",e.PerpendicularToSecondSegment="PerpendicularToSecondSegment",e.SecondSegmentWithTicks="SecondSegmentWithTicks",e.DoublePerpendicular="DoublePerpendicular",e.OppositeToFirstSegment="OppositeToFirstSegment",e.TriplePerpendicular="TriplePerpendicular",e.HalfCircleFirstSegment="HalfCircleFirstSegment",e.HalfCircleSecondSegment="HalfCircleSecondSegment",e.HalfCircleExtended="HalfCircleExtended",e.OpenCircle="OpenCircle",e.CoverageEdgesWithTicks="CoverageEdgesWithTicks",e.GapExtentWithDoubleTicks="GapExtentWithDoubleTicks",e.GapExtentMidline="GapExtentMidline",e.Chevron="Chevron",e.PerpendicularWithArc="PerpendicularWithArc",e.ClosedHalfCircle="ClosedHalfCircle",e.TripleParallelExtended="TripleParallelExtended",e.ParallelWithTicks="ParallelWithTicks",e.Parallel="Parallel",e.PerpendicularToFirstSegment="PerpendicularToFirstSegment",e.ParallelOffset="ParallelOffset",e.OffsetOpposite="OffsetOpposite",e.OffsetSame="OffsetSame",e.CircleWithArc="CircleWithArc",e.DoubleJog="DoubleJog",e.PerpendicularOffset="PerpendicularOffset",e.LineExcludingLastSegment="LineExcludingLastSegment",e.MultivertexArrow="MultivertexArrow",e.CrossedArrow="CrossedArrow",e.ChevronArrow="ChevronArrow",e.ChevronArrowOffset="ChevronArrowOffset",e.PartialFirstSegment="PartialFirstSegment",e.Arch="Arch",e.CurvedParallelTicks="CurvedParallelTicks",e.Arc90Degrees="Arc90Degrees"}(P||(P={})),function(e){e.Mitered="Mitered",e.Bevelled="Bevelled",e.Rounded="Rounded",e.Square="Square",e.TrueBuffer="TrueBuffer"}(T||(T={})),function(e){e.ClosePath="ClosePath",e.ConvexHull="ConvexHull",e.RectangularBox="RectangularBox"}(M||(M={})),function(e){e.BeginningOfLine="BeginningOfLine",e.EndOfLine="EndOfLine"}(b||(b={})),function(e){e.Mitered="Mitered",e.Bevelled="Bevelled",e.Rounded="Rounded",e.Square="Square"}(L||(L={})),function(e){e.Fast="Fast",e.Accurate="Accurate"}(A||(A={})),function(e){e.BeginningOfLine="BeginningOfLine",e.EndOfLine="EndOfLine"}(D||(D={})),function(e){e.Sinus="Sinus",e.Square="Square",e.Triangle="Triangle",e.Random="Random"}(B||(B={})),function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Force=2]="Force"}(F||(F={})),function(e){e[e.Buffered=0]="Buffered",e[e.Left=1]="Left",e[e.Right=2]="Right",e[e.AlongLine=3]="AlongLine"}(x||(x={})),function(e){e[e.Linear=0]="Linear",e[e.Rectangular=1]="Rectangular",e[e.Circular=2]="Circular",e[e.Buffered=3]="Buffered"}(I||(I={})),function(e){e[e.Discrete=0]="Discrete",e[e.Continuous=1]="Continuous"}(O||(O={})),function(e){e[e.AcrossLine=0]="AcrossLine",e[e.AloneLine=1]="AloneLine"}(_||(_={})),function(e){e[e.Left=0]="Left",e[e.Right=1]="Right",e[e.Center=2]="Center",e[e.Justify=3]="Justify"}(k||(k={})),function(e){e[e.Base=0]="Base",e[e.MidPoint=1]="MidPoint",e[e.ThreePoint=2]="ThreePoint",e[e.FourPoint=3]="FourPoint",e[e.Underline=4]="Underline",e[e.CircularCW=5]="CircularCW",e[e.CircularCCW=6]="CircularCCW"}(N||(N={})),function(e){e.Butt="Butt",e.Round="Round",e.Square="Square"}(E||(E={})),function(e){e.NoConstraint="NoConstraint",e.HalfPattern="HalfPattern",e.HalfGap="HalfGap",e.FullPattern="FullPattern",e.FullGap="FullGap",e.Custom="Custom"}(U||(U={})),function(e){e[e.None=-1]="None",e[e.Custom=0]="Custom",e[e.Circle=1]="Circle",e[e.OpenArrow=2]="OpenArrow",e[e.ClosedArrow=3]="ClosedArrow",e[e.Diamond=4]="Diamond"}(z||(z={})),function(e){e[e.ExtraLeading=0]="ExtraLeading",e[e.Multiple=1]="Multiple",e[e.Exact=2]="Exact"}(W||(W={})),function(e){e.Bevel="Bevel",e.Round="Round",e.Miter="Miter"}(H||(H={})),function(e){e[e.Default=0]="Default",e[e.String=1]="String",e[e.Numeric=2]="Numeric"}(X||(X={})),function(e){e[e.InsidePolygon=0]="InsidePolygon",e[e.PolygonCenter=1]="PolygonCenter",e[e.RandomlyInsidePolygon=2]="RandomlyInsidePolygon"}(Y||(Y={})),function(e){e[e.Tint=0]="Tint",e[e.Replace=1]="Replace",e[e.Multiply=2]="Multiply"}(G||(G={})),function(e){e[e.ClipAtBoundary=0]="ClipAtBoundary",e[e.RemoveIfCenterOutsideBoundary=1]="RemoveIfCenterOutsideBoundary",e[e.DoNotTouchBoundary=2]="DoNotTouchBoundary",e[e.DoNotClip=3]="DoNotClip"}(J||(J={})),function(e){e.NoConstraint="NoConstraint",e.WithMarkers="WithMarkers",e.WithFullGap="WithFullGap",e.WithHalfGap="WithHalfGap",e.Custom="Custom"}(Z||(Z={})),function(e){e.Fixed="Fixed",e.Random="Random",e.RandomFixedQuantity="RandomFixedQuantity"}(q||(q={})),function(e){e.LineMiddle="LineMiddle",e.LineBeginning="LineBeginning",e.LineEnd="LineEnd",e.SegmentMidpoint="SegmentMidpoint"}(Q||(Q={})),function(e){e.OnPolygon="OnPolygon",e.CenterOfMass="CenterOfMass",e.BoundingBoxCenter="BoundingBoxCenter"}($||($={})),function(e){e[e.Low=0]="Low",e[e.Medium=1]="Medium",e[e.High=2]="High"}(K||(K={})),function(e){e[e.MarkerCenter=0]="MarkerCenter",e[e.MarkerBounds=1]="MarkerBounds"}(V||(V={})),function(e){e[e.None=0]="None",e[e.PropUniform=1]="PropUniform",e[e.PropNonuniform=2]="PropNonuniform",e[e.DifUniform=3]="DifUniform",e[e.DifNonuniform=4]="DifNonuniform"}(j||(j={})),function(e){e.Tube="Tube",e.Strip="Strip",e.Wall="Wall"}(ee||(ee={})),function(e){e[e.Random=0]="Random",e[e.Increasing=1]="Increasing",e[e.Decreasing=2]="Decreasing",e[e.IncreasingThenDecreasing=3]="IncreasingThenDecreasing"}(te||(te={})),function(e){e[e.Relative=0]="Relative",e[e.Absolute=1]="Absolute"}(ne||(ne={})),function(e){e[e.Normal=0]="Normal",e[e.LowerCase=1]="LowerCase",e[e.Allcaps=2]="Allcaps"}(ie||(ie={})),function(e){e[e.LTR=0]="LTR",e[e.RTL=1]="RTL"}(re||(re={})),function(e){e.Draft="Draft",e.Picture="Picture",e.Text="Text"}(ae||(ae={})),function(e){e[e.Top=0]="Top",e[e.Center=1]="Center",e[e.Baseline=2]="Baseline",e[e.Bottom=3]="Bottom"}(oe||(oe={})),function(e){e[e.Right=0]="Right",e[e.Upright=1]="Upright"}(se||(se={})),function(e){e[e.Small=0]="Small",e[e.Medium=1]="Medium",e[e.Large=2]="Large"}(ce||(ce={})),function(e){e[e.Calm=0]="Calm",e[e.Rippled=1]="Rippled",e[e.Slight=2]="Slight",e[e.Moderate=3]="Moderate"}(le||(le={}))},38999:(e,t,n)=>{var i,r;function a(e){switch(e){case"left":return i.Left;case"right":return i.Right;case"center":return i.Center}}function o(e){switch(e){case"top":return r.Top;case"middle":return r.Center;case"baseline":return r.Baseline;case"bottom":return r.Bottom}}function s(e){switch(e){case"above-left":case"esriServerPointLabelPlacementAboveLeft":return[i.Right,r.Bottom];case"above-center":case"above-along":case"esriServerPointLabelPlacementAboveCenter":case"esriServerLinePlacementAboveAlong":return[i.Center,r.Bottom];case"above-right":case"esriServerPointLabelPlacementAboveRight":return[i.Left,r.Bottom];case"center-left":case"esriServerPointLabelPlacementCenterLeft":return[i.Right,r.Center];case"center-center":case"center-along":case"esriServerPointLabelPlacementCenterCenter":case"esriServerLinePlacementCenterAlong":case"always-horizontal":case"esriServerPolygonPlacementAlwaysHorizontal":return[i.Center,r.Center];case"center-right":case"esriServerPointLabelPlacementCenterRight":return[i.Left,r.Center];case"below-left":case"esriServerPointLabelPlacementBelowLeft":return[i.Right,r.Top];case"below-center":case"below-along":case"esriServerPointLabelPlacementBelowCenter":case"esriServerLinePlacementBelowAlong":return[i.Center,r.Top];case"below-right":case"esriServerPointLabelPlacementBelowRight":return[i.Left,r.Top];default:return console.debug(`Found invalid placement type ${e}`),[i.Center,r.Center]}}function c(e){switch(e){case i.Right:return-1;case i.Center:return 0;case i.Left:return 1;default:return console.debug(`Found invalid horizontal alignment ${e}`),0}}function l(e){switch(e){case r.Top:return 1;case r.Center:return 0;case r.Bottom:case r.Baseline:return-1;default:return console.debug(`Found invalid vertical alignment ${e}`),0}}function u(e){switch(e){case"left":return i.Left;case"right":return i.Right;case"center":return i.Center}}function h(e){switch(e){case"above-along":case"below-along":case"center-along":case"esriServerLinePlacementAboveAlong":case"esriServerLinePlacementBelowAlong":case"esriServerLinePlacementCenterAlong":return!0;default:return!1}}n.d(t,{Hd:()=>u,M7:()=>i,NS:()=>h,TR:()=>r,b7:()=>o,g:()=>c,kH:()=>a,qv:()=>s,tf:()=>l}),function(e){e[e.Left=-1]="Left",e[e.Center=0]="Center",e[e.Right=1]="Right"}(i||(i={})),function(e){e[e.Top=1]="Top",e[e.Center=0]="Center",e[e.Bottom=-1]="Bottom",e[e.Baseline=2]="Baseline"}(r||(r={}))},94109:(e,t,n)=>{n.d(t,{$0:()=>o,AI:()=>i,Al:()=>d,By:()=>w,C1:()=>Y,CQ:()=>J,CU:()=>E,D3:()=>f,Ex:()=>l,I_:()=>a,Ic:()=>g,Ij:()=>C,Ip:()=>H,Iv:()=>$,Iw:()=>u,Jw:()=>P,MI:()=>X,QU:()=>v,SD:()=>V,Tz:()=>Z,Uh:()=>G,V4:()=>N,XD:()=>ie,XJ:()=>W,Xj:()=>S,Zd:()=>I,_5:()=>b,_6:()=>K,a:()=>U,aK:()=>D,dn:()=>k,e0:()=>Q,eF:()=>h,eV:()=>s,f2:()=>y,fL:()=>z,iJ:()=>m,iV:()=>O,jk:()=>j,kF:()=>T,lK:()=>B,m4:()=>F,mx:()=>R,nM:()=>p,nb:()=>ne,oK:()=>q,pU:()=>A,ru:()=>r,tQ:()=>_,u4:()=>te,uG:()=>x,vw:()=>ee,xl:()=>L,xm:()=>c,yP:()=>M});const i=1e-30,r=4294967295,a=512,o=8,s=10,c=29,l=24,u=8,h={metrics:{width:15,height:17,left:0,top:-7,advance:14}},f=0,d=0,g=0,m=1,p=2,C=3,y=4,w=5,R=6,S=12,v=5,P=6,T=5,M=6,b=0,L=1,A=2,D=3,B=4,F=2,x=1,I=2,O=4,_=1.05,k=3,N=5,E=6,U=1.15,z=2,W=8,H=500,X=10,Y=1024,G=2,J=0,Z=1,q=4,Q=8,$=16,K=4,V=1,j=4,ee=8,te=128,ne=4,ie=2},73271:(e,t,n)=>{n.d(t,{Au:()=>r,Jz:()=>o,UJ:()=>a});const i=new Float32Array(1);new Uint32Array(i.buffer);function r(e){return[255&e,(65280&e)>>>8,(16711680&e)>>>16,(4278190080&e)>>>24]}function a(e,t){return 65535&e|t<<16}function o(e,t,n,i){return 255&e|(255&t)<<8|(255&n)<<16|i<<24}}}]);
//# sourceMappingURL=8920.05ffc09d.chunk.js.map