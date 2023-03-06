"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[8103],{82272:(e,t,a)=>{a.d(t,{BN:()=>o,Yc:()=>r,mx:()=>l});var n=a(42265);const s="woff2",i=new Map;async function l(e){const t=r(e);let a=i.get(t);if(a)return a;const l=new FontFace(e.family,`url('${n.Z.fontsUrl}/woff2/${t}.${s}') format('${s}')`),o=document.fonts;return o.has(l)&&"loading"===l.status?l.loaded:(a=l.load(),i.set(t,a),o.add(l),a)}function o(e){if(!e)return"arial-unicode-ms";const t=e.toLowerCase().split(" ").join("-");switch(t){case"serif":return"noto-serif";case"sans-serif":return"arial-unicode-ms";case"monospace":return"ubuntu-mono";case"fantasy":return"cabin-sketch";case"cursive":return"redressed";default:return t}}function r(e){const t=function(e){if(!e.weight)return"";switch(e.weight.toLowerCase()){case"bold":case"bolder":return"-bold"}return""}(e)+function(e){if(!e.style)return"";switch(e.style.toLowerCase()){case"italic":case"oblique":return"-italic"}return""}(e);return o(e.family)+(t.length>0?t:"-regular")}},8103:(e,t,a)=>{a.r(t),a.d(t,{getContrastingBackgroundTheme:()=>z,getRenderSymbolParameters:()=>M,previewSymbol2D:()=>x});var n=a(51995),s=a(10064),i=a(82272),l=a(17842),o=a(79563),r=a(37817),c=a(69157),u=a(28357);const h="picture-fill",m=r.b_.size,d=r.b_.maxSize,p=r.b_.maxOutlineSize,f=r.b_.lineWidth,w=225,y=document.createElement("canvas");function g(e,t){const a=y.getContext("2d"),n=[];return t&&(t.weight&&n.push(t.weight),t.size&&n.push(t.size+"px"),t.family&&n.push(t.family)),a.font=n.join(" "),a.measureText(e).width}function b(e){if(0===e.length)return 0;if(e.length>2){const t=(0,l.Wz)(1),a=parseFloat(e);switch(e.slice(-2)){case"px":return a;case"pt":return a*t;case"in":return 72*a*t;case"pc":return 12*a*t;case"mm":return 2.8346456692913384*a*t;case"cm":return 28.346456692913385*a*t}}return parseFloat(e)}function v(e){const t=e?.size;return{width:null!=t&&"object"==typeof t&&"width"in t?(0,l.F2)(t.width):null,height:null!=t&&"object"==typeof t&&"height"in t?(0,l.F2)(t.height):null}}function k(e,t){return e>t?"dark":"light"}function M(e,t){const a="number"==typeof t?.size?t?.size:null,n=null!=a?(0,l.F2)(a):null,s=null!=t?.maxSize?(0,l.F2)(t.maxSize):null,i=null!=t?.rotation?t.rotation:"angle"in e?e.angle:null,c=(0,o._M)(e);let u=(0,o.mx)(e);"dark"!==z(e,245)||t?.ignoreWhiteSymbols||(u={width:.75,...u,color:"#bdc3c7"});const w={shape:null,fill:c,stroke:u,offset:[0,0]};u?.width&&(u.width=Math.min(u.width,p));const y=u?.width||0;let k=null!=t?.size&&(null==t?.scale||t?.scale),M=0,x=0,L=!1;switch(e.type){case"simple-marker":{const a=e.style,{width:o,height:r}=v(t),c=o===r&&null!=o?o:null!=n?n:Math.min((0,l.F2)(e.size),s||d);switch(M=c,x=c,a){case"circle":w.shape={type:"circle",cx:0,cy:0,r:.5*c},k||(M+=y,x+=y);break;case"cross":w.shape={type:"path",path:[{command:"M",values:[0,.5*x]},{command:"L",values:[M,.5*x]},{command:"M",values:[.5*M,0]},{command:"L",values:[.5*M,x]}]};break;case"diamond":w.shape={type:"path",path:[{command:"M",values:[0,.5*x]},{command:"L",values:[.5*M,0]},{command:"L",values:[M,.5*x]},{command:"L",values:[.5*M,x]},{command:"Z",values:[]}]},k||(M+=y,x+=y);break;case"square":w.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[M,0]},{command:"L",values:[M,x]},{command:"L",values:[0,x]},{command:"Z",values:[]}]},k||(M+=y,x+=y),i&&(L=!0);break;case"triangle":w.shape={type:"path",path:[{command:"M",values:[.5*M,0]},{command:"L",values:[M,x]},{command:"L",values:[0,x]},{command:"Z",values:[]}]},k||(M+=y,x+=y),i&&(L=!0);break;case"x":w.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[M,x]},{command:"M",values:[M,0]},{command:"L",values:[0,x]}]},i&&(L=!0);break;case"path":w.shape={type:"path",path:e.path||""},k||(M+=y,x+=y),i&&(L=!0),k=!0}break}case"simple-line":{const{width:e,height:a}=v(t),s=null!=a?a:null!=n?n:y,i=null!=e?e:f;u&&(u.width=s),M=i,x=s;const l=w?.stroke?.cap||"butt",o="round"===l;k=!0,w.stroke&&(w.stroke.cap="butt"===l?"square":l),w.shape={type:"path",path:[{command:"M",values:[o?s/2:0,x/2]},{command:"L",values:[o?M-s/2:M,x/2]}]};break}case h:case"simple-fill":{const e="object"==typeof t?.symbolConfig&&t?.symbolConfig.isSquareFill,{width:a,height:s}=v(t);M=!e&&a!==s||null==a?null!=n?n:m:a,x=!e&&a!==s||null==s?M:s,k||(M+=y,x+=y),k=!0,w.shape=e?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[M,0]},{command:"L",values:[M,x]},{command:"L",values:[0,x]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:r.JZ.fill[0];break}case"picture-marker":{const a=Math.min((0,l.F2)(e.width),s||d),o=Math.min((0,l.F2)(e.height),s||d),{width:r,height:c}=v(t),u=r===c&&null!=r?r:null!=n?n:Math.max(a,o),h=a/o;M=h<=1?Math.ceil(u*h):u,x=h<=1?u:Math.ceil(u/h),w.shape={type:"image",x:-Math.round(M/2),y:-Math.round(x/2),width:M,height:x,src:e.url||""},i&&(L=!0);break}case"text":{const a=e,i=t?.overrideText||a.text||"Aa",o=a.font,{width:r,height:c}=v(t),u=null!=c?c:null!=n?n:Math.min((0,l.F2)(o.size),s||d),h=g(i,{weight:o.weight,size:u,family:o.family}),m=/[\uE600-\uE6FF]/.test(i);M=r??(m?u:h),x=u;let p=.25*b((o?u:0).toString());m&&(p+=5),w.shape={type:"text",text:i,x:a.xoffset||0,y:a.yoffset||p,align:"middle",alignBaseline:a.verticalAlignment,decoration:o&&o.decoration,rotated:a.rotated,kerning:a.kerning},w.font=o&&{size:u,style:o.style,decoration:o.decoration,weight:o.weight,family:o.family};break}}return{shapeDescriptor:w,size:[M,x],renderOptions:{node:t?.node,scale:k,opacity:t?.opacity,rotation:i,useRotationSize:L,effectView:t?.effectView}}}async function x(e,t){const{shapeDescriptor:a,size:n,renderOptions:l}=M(e,t);if(!a.shape)throw new s.Z("symbolPreview: renderPreviewHTML2D","symbol not supported.");await async function(e,t){const a=t.fill,n=e.color;if("pattern"===a?.type&&n&&e.type!==h){const e=await(0,o.Od)(a.src,n.toCss(!0));a.src=e,t.fill=a}}(e,a),await async function(e,t,a,n){if(!("font"in e)||!e.font||"text"!==t.shape.type)return;try{await(0,i.mx)(e.font)}catch{}const{width:s}=v(n),l=/[\uE600-\uE6FF]/.test(t.shape.text);null!=s||l||(a[0]=g(t.shape.text,{weight:t.font?.weight,size:t.font?.size,family:t.font?.family}))}(e,a,n,t);const u=[[a]];if("object"==typeof t?.symbolConfig&&t?.symbolConfig.applyColorModulation){const e=.6*n[0];u.unshift([{...a,offset:[-e,0],fill:(0,r.dc)(a.fill,-.3)}]),u.push([{...a,offset:[e,0],fill:(0,r.dc)(a.fill,.3)}]),n[0]+=2*e,l.scale=!1}return(0,c.wh)(u,n,l)}function z(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:w;const a=(0,o._M)(e),s=(0,o.mx)(e),i=!a||"type"in a?null:new n.Z(a),l=s?.color?new n.Z(s?.color):null,r=i?k((0,u.EX)(i),t):null,c=l?k((0,u.EX)(l),t):null;return c?r?r===c?r:t>=w?"light":"dark":c:r}},28357:(e,t,a)=>{a.d(t,{EX:()=>i});var n=a(51995);function s(e){let{r:t,g:a,b:s,a:i}=e;return i<1&&(t=Math.round(i*t+255*(1-i)),a=Math.round(i*a+255*(1-i)),s=Math.round(i*s+255*(1-i))),new n.Z({r:t,g:a,b:s})}function i(e){const{r:t,g:a,b:n}=s(e);return.2126*t+.7152*a+.0722*n}}}]);
//# sourceMappingURL=8103.d004d4b8.chunk.js.map