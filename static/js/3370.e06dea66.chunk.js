"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[3370],{79347:(e,t,n)=>{n.d(t,{e:()=>l});var r,i,u,a={exports:{}};r=a,i=function(){function e(e,n,i){i=i||2;var u,a,l,m,f,x,p,y=n&&n.length,v=y?n[0]*i:e.length,c=t(e,0,v,i,!0),s=[];if(!c||c.next===c.prev)return s;if(y&&(c=o(e,n,c,i)),e.length>80*i){u=l=e[0],a=m=e[1];for(var d=i;d<v;d+=i)(f=e[d])<u&&(u=f),(x=e[d+1])<a&&(a=x),f>l&&(l=f),x>m&&(m=x);p=0!==(p=Math.max(l-u,m-a))?1/p:0}return r(c,s,i,u,a,p),s}function t(e,t,n,r,i){var u,a;if(i===P(e,t,n,r)>0)for(u=t;u<n;u+=r)a=L(u,e[u],e[u+1],a);else for(u=n-r;u>=t;u-=r)a=L(u,e[u],e[u+1],a);if(a&&h(a,a.next)){var l=a.next;R(a),a=l}return a}function n(e,t){if(!e)return e;t||(t=e);var n,r=e;do{if(n=!1,r.steiner||!h(r,r.next)&&0!==b(r.prev,r,r.next))r=r.next;else{var i=r.prev;if(R(r),(r=t=i)===r.next)break;n=!0}}while(n||r!==t);return t}function r(e,t,o,m,f,x,p){if(e){!p&&x&&y(e,m,f,x);for(var v,c,s=e;e.prev!==e.next;)if(v=e.prev,c=e.next,x?u(e,m,f,x):i(e))t.push(v.i/o),t.push(e.i/o),t.push(c.i/o),R(e),e=c.next,s=c.next;else if((e=c)===s){p?1===p?r(e=a(n(e),t,o),t,o,m,f,x,2):2===p&&l(e,t,o,m,f,x):r(n(e),t,o,m,f,x,1);break}}}function i(e){var t=e.prev,n=e,r=e.next;if(b(t,n,r)>=0)return!1;for(var i=e.next.next;i!==e.prev;){if(s(t.x,t.y,n.x,n.y,r.x,r.y,i.x,i.y)&&b(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function u(e,t,n,r){var i=e.prev,u=e,a=e.next;if(b(i,u,a)>=0)return!1;for(var l=i.x<u.x?i.x<a.x?i.x:a.x:u.x<a.x?u.x:a.x,o=i.y<u.y?i.y<a.y?i.y:a.y:u.y<a.y?u.y:a.y,m=i.x>u.x?i.x>a.x?i.x:a.x:u.x>a.x?u.x:a.x,f=i.y>u.y?i.y>a.y?i.y:a.y:u.y>a.y?u.y:a.y,x=v(l,o,t,n,r),p=v(m,f,t,n,r),y=e.prevZ,c=e.nextZ;y&&y.z>=x&&c&&c.z<=p;){if(y!==e.prev&&y!==e.next&&s(i.x,i.y,u.x,u.y,a.x,a.y,y.x,y.y)&&b(y.prev,y,y.next)>=0)return!1;if(y=y.prevZ,c!==e.prev&&c!==e.next&&s(i.x,i.y,u.x,u.y,a.x,a.y,c.x,c.y)&&b(c.prev,c,c.next)>=0)return!1;c=c.nextZ}for(;y&&y.z>=x;){if(y!==e.prev&&y!==e.next&&s(i.x,i.y,u.x,u.y,a.x,a.y,y.x,y.y)&&b(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;c&&c.z<=p;){if(c!==e.prev&&c!==e.next&&s(i.x,i.y,u.x,u.y,a.x,a.y,c.x,c.y)&&b(c.prev,c,c.next)>=0)return!1;c=c.nextZ}return!0}function a(e,t,r){var i=e;do{var u=i.prev,a=i.next.next;!h(u,a)&&T(u,i,i.next,a)&&I(u,a)&&I(a,u)&&(t.push(u.i/r),t.push(i.i/r),t.push(a.i/r),R(i),R(i.next),i=e=a),i=i.next}while(i!==e);return n(i)}function l(e,t,i,u,a,l){var o=e;do{for(var m=o.next.next;m!==o.prev;){if(o.i!==m.i&&d(o,m)){var f=O(o,m);return o=n(o,o.next),f=n(f,f.next),r(o,t,i,u,a,l),void r(f,t,i,u,a,l)}m=m.next}o=o.next}while(o!==e)}function o(e,r,i,u){var a,l,o,f=[];for(a=0,l=r.length;a<l;a++)(o=t(e,r[a]*u,a<l-1?r[a+1]*u:e.length,u,!1))===o.next&&(o.steiner=!0),f.push(c(o));for(f.sort(m),a=0;a<f.length;a++)i=n(i=x(f[a],i),i.next);return i}function m(e,t){return e.x-t.x}function f(e){if(e.next.prev===e)return e;let t=e;for(;;){const n=t.next;if(n.prev===t||n===t||n===e)break;t=n}return t}function x(e,t){var r=function(e,t){var n,r=t,i=e.x,u=e.y,a=-1/0;do{if(u<=r.y&&u>=r.next.y&&r.next.y!==r.y){var l=r.x+(u-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(l<=i&&l>a){if(a=l,l===i){if(u===r.y)return r;if(u===r.next.y)return r.next}n=r.x<r.next.x?r:r.next}}r=r.next}while(r!==t);if(!n)return null;if(i===a)return n;var o,m=n,f=n.x,x=n.y,y=1/0;r=n;do{i>=r.x&&r.x>=f&&i!==r.x&&s(u<x?i:a,u,f,x,u<x?a:i,u,r.x,r.y)&&(o=Math.abs(u-r.y)/(i-r.x),I(r,e)&&(o<y||o===y&&(r.x>n.x||r.x===n.x&&p(n,r)))&&(n=r,y=o)),r=r.next}while(r!==m);return n}(e,t);if(!r)return t;var i=O(r,e),u=n(r,r.next);let a=f(i);return n(a,a.next),u=f(u),f(t===r?u:t)}function p(e,t){return b(e.prev,e,t.prev)<0&&b(t.next,e,e.next)<0}function y(e,t,n,r){var i=e;do{null===i.z&&(i.z=v(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next}while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,function(e){var t,n,r,i,u,a,l,o,m=1;do{for(n=e,e=null,u=null,a=0;n;){for(a++,r=n,l=0,t=0;t<m&&(l++,r=r.nextZ);t++);for(o=m;l>0||o>0&&r;)0!==l&&(0===o||!r||n.z<=r.z)?(i=n,n=n.nextZ,l--):(i=r,r=r.nextZ,o--),u?u.nextZ=i:e=i,i.prevZ=u,u=i;n=r}u.nextZ=null,m*=2}while(a>1)}(i)}function v(e,t,n,r,i){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-n)*i)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-r)*i)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function c(e){var t=e,n=e;do{(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next}while(t!==e);return n}function s(e,t,n,r,i,u,a,l){return(i-a)*(t-l)-(e-a)*(u-l)>=0&&(e-a)*(r-l)-(n-a)*(t-l)>=0&&(n-a)*(u-l)-(i-a)*(r-l)>=0}function d(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!function(e,t){var n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&T(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}(e,t)&&(I(e,t)&&I(t,e)&&function(e,t){var n=e,r=!1,i=(e.x+t.x)/2,u=(e.y+t.y)/2;do{n.y>u!=n.next.y>u&&n.next.y!==n.y&&i<(n.next.x-n.x)*(u-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next}while(n!==e);return r}(e,t)&&(b(e.prev,e,t.prev)||b(e,t.prev,t))||h(e,t)&&b(e.prev,e,e.next)>0&&b(t.prev,t,t.next)>0)}function b(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function h(e,t){return e.x===t.x&&e.y===t.y}function T(e,t,n,r){var i=g(b(e,t,n)),u=g(b(e,t,r)),a=g(b(n,r,e)),l=g(b(n,r,t));return i!==u&&a!==l||!(0!==i||!E(e,n,t))||!(0!==u||!E(e,r,t))||!(0!==a||!E(n,e,r))||!(0!==l||!E(n,t,r))}function E(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function g(e){return e>0?1:e<0?-1:0}function I(e,t){return b(e.prev,e,e.next)<0?b(e,t,e.next)>=0&&b(e,e.prev,t)>=0:b(e,t,e.prev)<0||b(e,e.next,t)<0}function O(e,t){var n=new N(e.i,e.x,e.y),r=new N(t.i,t.x,t.y),i=e.next,u=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,u.next=r,r.prev=u,r}function L(e,t,n,r){var i=new N(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function R(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function N(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function P(e,t,n,r){for(var i=0,u=t,a=n-r;u<n;u+=r)i+=(e[a]-e[u])*(e[u+1]+e[a+1]),a=u;return i}return e.deviation=function(e,t,n,r){var i=t&&t.length,u=i?t[0]*n:e.length,a=Math.abs(P(e,0,u,n));if(i)for(var l=0,o=t.length;l<o;l++){var m=t[l]*n,f=l<o-1?t[l+1]*n:e.length;a-=Math.abs(P(e,m,f,n))}var x=0;for(l=0;l<r.length;l+=3){var p=r[l]*n,y=r[l+1]*n,v=r[l+2]*n;x+=Math.abs((e[p]-e[v])*(e[y+1]-e[p+1])-(e[p]-e[y])*(e[v+1]-e[p+1]))}return 0===a&&0===x?0:Math.abs((x-a)/a)},e.flatten=function(e){for(var t=e[0][0].length,n={vertices:[],holes:[],dimensions:t},r=0,i=0;i<e.length;i++){for(var u=0;u<e[i].length;u++)for(var a=0;a<t;a++)n.vertices.push(e[i][u][a]);i>0&&(r+=e[i-1].length,n.holes.push(r))}return n},e},void 0!==(u=i())&&(r.exports=u);const l=a.exports},46618:(e,t,n)=>{n.d(t,{Bf:()=>r,PF:()=>i,Ts:()=>u,nN:()=>a});const r=!0,i=32,u=1.5,a=200},21391:(e,t,n)=>{n.d(t,{EE:()=>i,R:()=>u,_5:()=>m,aF:()=>a,f2:()=>v,fD:()=>f,fR:()=>r,nR:()=>o,r1:()=>x,vL:()=>l});var r,i,u,a,l,o,m,f,x,p,y=n(48202);(p=r||(r={}))[p.BACKGROUND=0]="BACKGROUND",p[p.FILL=1]="FILL",p[p.LINE=2]="LINE",p[p.SYMBOL=3]="SYMBOL",p[p.CIRCLE=4]="CIRCLE",function(e){e[e.VISIBLE=0]="VISIBLE",e[e.NONE=1]="NONE"}(i||(i={})),function(e){e[e.POINT=0]="POINT",e[e.LINE=1]="LINE",e[e.LINE_CENTER=2]="LINE_CENTER"}(u||(u={})),function(e){e[e.MAP=0]="MAP",e[e.VIEWPORT=1]="VIEWPORT",e[e.AUTO=2]="AUTO"}(a||(a={})),function(e){e[e.AUTO=0]="AUTO",e[e.LEFT=1]="LEFT",e[e.CENTER=2]="CENTER",e[e.RIGHT=3]="RIGHT"}(l||(l={})),function(e){e[e.CENTER=0]="CENTER",e[e.LEFT=1]="LEFT",e[e.RIGHT=2]="RIGHT",e[e.TOP=3]="TOP",e[e.BOTTOM=4]="BOTTOM",e[e.TOP_LEFT=5]="TOP_LEFT",e[e.TOP_RIGHT=6]="TOP_RIGHT",e[e.BOTTOM_LEFT=7]="BOTTOM_LEFT",e[e.BOTTOM_RIGHT=8]="BOTTOM_RIGHT"}(o||(o={})),function(e){e[e.NONE=0]="NONE",e[e.UPPERCASE=1]="UPPERCASE",e[e.LOWERCASE=2]="LOWERCASE"}(m||(m={})),function(e){e[e.MAP=0]="MAP",e[e.VIEWPORT=1]="VIEWPORT"}(f||(f={})),function(e){e[e.HORIZONTAL=0]="HORIZONTAL",e[e.VERTICAL=1]="VERTICAL"}(x||(x={}));class v{}v.backgroundLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:i.VISIBLE}},v.fillLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:i.VISIBLE}},v.lineLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:i.VISIBLE},"line-cap":{type:"enum",values:["butt","round","square"],default:y.RL.BUTT},"line-join":{type:"enum",values:["bevel","round","miter"],default:y.AH.MITER},"line-miter-limit":{type:"number",default:2},"line-round-limit":{type:"number",default:1.05}},v.symbolLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:i.VISIBLE},"symbol-avoid-edges":{type:"boolean",default:!1},"symbol-placement":{type:"enum",values:["point","line","line-center"],default:u.POINT},"symbol-sort-key":{type:"number",default:-1},"symbol-spacing":{type:"number",minimum:1,default:250},"icon-allow-overlap":{type:"boolean",default:!1},"icon-anchor":{type:"enum",values:["center","left","right","top","bottom","top-left","top-right","bottom-left","bottom-right"],default:o.CENTER},"icon-ignore-placement":{type:"boolean",default:!1},"icon-image":{type:"string"},"icon-keep-upright":{type:"boolean",default:!1},"icon-offset":{type:"array",value:"number",length:2,default:[0,0]},"icon-optional":{type:"boolean",default:!1},"icon-padding":{type:"number",minimum:0,default:2},"icon-rotate":{type:"number",default:0},"icon-rotation-alignment":{type:"enum",values:["map","viewport","auto"],default:a.AUTO},"icon-size":{type:"number",minimum:0,default:1},"text-allow-overlap":{type:"boolean",default:!1},"text-anchor":{type:"enum",values:["center","left","right","top","bottom","top-left","top-right","bottom-left","bottom-right"],default:o.CENTER},"text-field":{type:"string"},"text-font":{type:"array",value:"string",default:["Open Sans Regular","Arial Unicode MS Regular"]},"text-ignore-placement":{type:"boolean",default:!1},"text-justify":{type:"enum",values:["auto","left","center","right"],default:l.CENTER},"text-keep-upright":{type:"boolean",default:!0},"text-letter-spacing":{type:"number",default:0},"text-line-height":{type:"number",default:1.2},"text-max-angle":{type:"number",minimum:0,default:45},"text-max-width":{type:"number",minimum:0,default:10},"text-offset":{type:"array",value:"number",length:2,default:[0,0]},"text-optional":{type:"boolean",default:!1},"text-padding":{type:"number",minimum:0,default:2},"text-rotate":{type:"number",default:0},"text-rotation-alignment":{type:"enum",values:["map","viewport","auto"],default:a.AUTO},"text-size":{type:"number",minimum:0,default:16},"text-transform":{type:"enum",values:["none","uppercase","lowercase"],default:m.NONE},"text-writing-mode":{type:"array",value:"enum",values:["horizontal","vertical"],default:[x.HORIZONTAL]}},v.circleLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:i.VISIBLE}},v.backgroundPaintDefinition={"background-color":{type:"color",default:[0,0,0,1]},"background-opacity":{type:"number",minimum:0,maximum:1,default:1},"background-pattern":{type:"string"}},v.fillPaintDefinition={"fill-antialias":{type:"boolean",default:!0},"fill-color":{type:"color",default:[0,0,0,1]},"fill-opacity":{type:"number",minimum:0,maximum:1,default:1},"fill-outline-color":{type:"color",default:[0,0,0,0]},"fill-pattern":{type:"string"},"fill-translate":{type:"array",value:"number",length:2,default:[0,0]},"fill-translate-anchor":{type:"enum",values:["map","viewport"],default:f.MAP}},v.linePaintDefinition={"line-blur":{type:"number",minimum:0,default:0},"line-color":{type:"color",default:[0,0,0,1]},"line-dasharray":{type:"array",value:"number",default:[]},"line-gap-width":{type:"number",minimum:0,default:0},"line-offset":{type:"number",default:0},"line-opacity":{type:"number",minimum:0,maximum:1,default:1},"line-pattern":{type:"string"},"line-translate":{type:"array",value:"number",length:2,default:[0,0]},"line-translate-anchor":{type:"enum",values:["map","viewport"],default:f.MAP},"line-width":{type:"number",minimum:0,default:1}},v.symbolPaintDefinition={"icon-color":{type:"color",default:[0,0,0,1]},"icon-halo-blur":{type:"number",minimum:0,default:0},"icon-halo-color":{type:"color",default:[0,0,0,0]},"icon-halo-width":{type:"number",minimum:0,default:0},"icon-opacity":{type:"number",minimum:0,maximum:1,default:1},"icon-translate":{type:"array",value:"number",length:2,default:[0,0]},"icon-translate-anchor":{type:"enum",values:["map","viewport"],default:f.MAP},"text-color":{type:"color",default:[0,0,0,1]},"text-halo-blur":{type:"number",minimum:0,default:0},"text-halo-color":{type:"color",default:[0,0,0,0]},"text-halo-width":{type:"number",minimum:0,default:0},"text-opacity":{type:"number",minimum:0,maximum:1,default:1},"text-translate":{type:"array",value:"number",length:2,default:[0,0]},"text-translate-anchor":{type:"enum",values:["map","viewport"],default:f.MAP}},v.rasterPaintDefinition={"raster-opacity":{type:"number",minimum:0,maximum:1,default:1},"raster-hue-rotate":{type:"number",default:0},"raster-brightness-min":{type:"number",minimum:0,maximum:1,default:0},"raster-brightness-max":{type:"number",minimum:0,maximum:1,default:1},"raster-saturation":{type:"number",minimum:-1,maximum:1,default:0},"raster-contrast":{type:"number",minimum:-1,maximum:1,default:0},"raster-fade-duration":{type:"number",minimum:0,default:300}},v.circlePaintDefinition={"circle-blur":{type:"number",minimum:0,default:0},"circle-color":{type:"color",default:[0,0,0,1]},"circle-opacity":{type:"number",minimum:0,maximum:1,default:1},"circle-radius":{type:"number",minimum:0,default:5},"circle-stroke-color":{type:"color",default:[0,0,0,1]},"circle-stroke-opacity":{type:"number",minimum:0,maximum:1,default:1},"circle-stroke-width":{type:"number",minimum:0,default:0},"circle-translate":{type:"array",value:"number",length:2,default:[0,0]},"circle-translate-anchor":{type:"enum",values:["map","viewport"],default:f.MAP}}},13200:(e,t,n)=>{n.d(t,{Or:()=>l,k3:()=>m,s5:()=>o,vX:()=>f});Number.POSITIVE_INFINITY;const r=Math.PI,i=128/r,u=1/Math.LN2;function a(e,t){return(e%=t)>=0?e:e+t}function l(e){return a(e*i,256)}function o(e){return a(.7111111111111111*e,256)}function m(e){return Math.log(e)*u}function f(e,t,n){return e>=t&&e<=n||e>=n&&e<=t}}}]);
//# sourceMappingURL=3370.e06dea66.chunk.js.map