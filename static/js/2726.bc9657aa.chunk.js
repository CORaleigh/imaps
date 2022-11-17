/*! For license information please see 2726.bc9657aa.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[2726],{49304:(t,e,n)=>{n.d(e,{S:()=>l,a:()=>g,b:()=>m,c:()=>p,d:()=>O,f:()=>o,i:()=>w,r:()=>r});var o="object"==typeof global&&global&&global.Object===Object&&global,i="object"==typeof self&&self&&self.Object===Object&&self,r=o||i||Function("return this")(),l=r.Symbol,a=Object.prototype,c=a.hasOwnProperty,s=a.toString,f=l?l.toStringTag:void 0;var u=Object.prototype.toString;var d=l?l.toStringTag:void 0;function m(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":d&&d in Object(t)?function(t){var e=c.call(t,f),n=t[f];try{t[f]=void 0;var o=!0}catch(r){}var i=s.call(t);return o&&(e?t[f]=n:delete t[f]),i}(t):function(t){return u.call(t)}(t)}function p(t){return null!=t&&"object"==typeof t}function g(t){return"symbol"==typeof t||p(t)&&"[object Symbol]"==m(t)}var h=/\s/;var y=/^\s+/;function v(t){return t?t.slice(0,function(t){for(var e=t.length;e--&&h.test(t.charAt(e)););return e}(t)+1).replace(y,""):t}function w(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var b=/^[-+]0x[0-9a-f]+$/i,x=/^0b[01]+$/i,R=/^0o[0-7]+$/i,T=parseInt;function L(t){if("number"==typeof t)return t;if(g(t))return NaN;if(w(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=w(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=v(t);var n=x.test(t);return n||R.test(t)?T(t.slice(2),n?2:8):b.test(t)?NaN:+t}var E=function(){return r.Date.now()},P=Math.max,A=Math.min;function O(t,e,n){var o,i,r,l,a,c,s=0,f=!1,u=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function m(e){var n=o,r=i;return o=i=void 0,s=e,l=t.apply(r,n)}function p(t){return s=t,a=setTimeout(h,e),f?m(t):l}function g(t){var n=t-c;return void 0===c||n>=e||n<0||u&&t-s>=r}function h(){var t=E();if(g(t))return y(t);a=setTimeout(h,function(t){var n=e-(t-c);return u?A(n,r-(t-s)):n}(t))}function y(t){return a=void 0,d&&o?m(t):(o=i=void 0,l)}function v(){var t=E(),n=g(t);if(o=arguments,i=this,c=t,n){if(void 0===a)return p(c);if(u)return clearTimeout(a),a=setTimeout(h,e),m(c)}return void 0===a&&(a=setTimeout(h,e)),l}return e=L(e)||0,w(n)&&(f=!!n.leading,r=(u="maxWait"in n)?P(L(n.maxWait)||0,e):r,d="trailing"in n?!!n.trailing:d),v.cancel=function(){void 0!==a&&clearTimeout(a),s=0,o=c=i=a=void 0},v.flush=function(){return void 0===a?l:y(E())},v}},72726:(t,e,n)=>{n.d(e,{F:()=>dt,a:()=>xt,b:()=>Rt,c:()=>bt,d:()=>ut,e:()=>u,f:()=>pt,r:()=>ht,u:()=>Tt});var o=n(90110),i=n(49304);function r(t){return t.split("-")[0]}function l(t){return t.split("-")[1]}function a(t){return["top","bottom"].includes(r(t))?"x":"y"}function c(t){return"y"===t?"height":"width"}function s(t,e,n){let{reference:o,floating:i}=t;const s=o.x+o.width/2-i.width/2,f=o.y+o.height/2-i.height/2,u=a(e),d=c(u),m=o[d]/2-i[d]/2,p="x"===u;let g;switch(r(e)){case"top":g={x:s,y:o.y-i.height};break;case"bottom":g={x:s,y:o.y+o.height};break;case"right":g={x:o.x+o.width,y:f};break;case"left":g={x:o.x-i.width,y:f};break;default:g={x:o.x,y:o.y}}switch(l(e)){case"start":g[u]-=m*(n&&p?-1:1);break;case"end":g[u]+=m*(n&&p?-1:1)}return g}function f(t){return"number"!==typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function u(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function d(t,e){var n;void 0===e&&(e={});const{x:o,y:i,platform:r,rects:l,elements:a,strategy:c}=t,{boundary:s="clippingAncestors",rootBoundary:d="viewport",elementContext:m="floating",altBoundary:p=!1,padding:g=0}=e,h=f(g),y=a[p?"floating"===m?"reference":"floating":m],v=u(await r.getClippingRect({element:null==(n=await(null==r.isElement?void 0:r.isElement(y)))||n?y:y.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(a.floating)),boundary:s,rootBoundary:d,strategy:c})),w=u(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:"floating"===m?{...l.floating,x:o,y:i}:l.reference,offsetParent:await(null==r.getOffsetParent?void 0:r.getOffsetParent(a.floating)),strategy:c}):l[m]);return{top:v.top-w.top+h.top,bottom:w.bottom-v.bottom+h.bottom,left:v.left-w.left+h.left,right:w.right-v.right+h.right}}const m=Math.min,p=Math.max;function g(t,e,n){return p(t,m(e,n))}const h={left:"right",right:"left",bottom:"top",top:"bottom"};function y(t){return t.replace(/left|right|bottom|top/g,(t=>h[t]))}function v(t,e,n){void 0===n&&(n=!1);const o=l(t),i=a(t),r=c(i);let s="x"===i?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=y(s)),{main:s,cross:y(s)}}const w={start:"end",end:"start"};function b(t){return t.replace(/start|end/g,(t=>w[t]))}const x=["top","right","bottom","left"],R=x.reduce(((t,e)=>t.concat(e,e+"-start",e+"-end")),[]);const T=function(t){return void 0===t&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,o,i,a,c;const{x:s,y:f,rects:u,middlewareData:m,placement:p,platform:g,elements:h}=e,{alignment:y=null,allowedPlacements:w=R,autoAlignment:x=!0,...T}=t,L=function(t,e,n){return(t?[...n.filter((e=>l(e)===t)),...n.filter((e=>l(e)!==t))]:n.filter((t=>r(t)===t))).filter((n=>!t||l(n)===t||!!e&&b(n)!==n))}(y,x,w),E=await d(e,T),P=null!=(n=null==(o=m.autoPlacement)?void 0:o.index)?n:0,A=L[P];if(null==A)return{};const{main:O,cross:D}=v(A,u,await(null==g.isRTL?void 0:g.isRTL(h.floating)));if(p!==A)return{x:s,y:f,reset:{placement:L[0]}};const j=[E[r(A)],E[O],E[D]],C=[...null!=(i=null==(a=m.autoPlacement)?void 0:a.overflows)?i:[],{placement:A,overflows:j}],k=L[P+1];if(k)return{data:{index:P+1,overflows:C},reset:{placement:k}};const H=C.slice().sort(((t,e)=>t.overflows[0]-e.overflows[0])),W=null==(c=H.find((t=>{let{overflows:e}=t;return e.every((t=>t<=0))})))?void 0:c.placement,S=null!=W?W:H[0].placement;return S!==p?{data:{index:P+1,overflows:C},reset:{placement:S}}:{}}}};const L=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n;const{placement:o,middlewareData:i,rects:l,initialPlacement:a,platform:c,elements:s}=e,{mainAxis:f=!0,crossAxis:u=!0,fallbackPlacements:m,fallbackStrategy:p="bestFit",flipAlignment:g=!0,...h}=t,w=r(o),x=m||(w===a||!g?[y(a)]:function(t){const e=y(t);return[b(t),e,b(e)]}(a)),R=[a,...x],T=await d(e,h),L=[];let E=(null==(n=i.flip)?void 0:n.overflows)||[];if(f&&L.push(T[w]),u){const{main:t,cross:e}=v(o,l,await(null==c.isRTL?void 0:c.isRTL(s.floating)));L.push(T[t],T[e])}if(E=[...E,{placement:o,overflows:L}],!L.every((t=>t<=0))){var P,A;const t=(null!=(P=null==(A=i.flip)?void 0:A.index)?P:0)+1,e=R[t];if(e)return{data:{index:t,overflows:E},reset:{placement:e}};let n="bottom";switch(p){case"bestFit":{var O;const t=null==(O=E.map((t=>[t,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:O[0].placement;t&&(n=t);break}case"initialPlacement":n=a}if(o!==n)return{reset:{placement:n}}}return{}}}};function E(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function P(t){return x.some((e=>t[e]>=0))}const A=function(t){let{strategy:e="referenceHidden",...n}=void 0===t?{}:t;return{name:"hide",async fn(t){const{rects:o}=t;switch(e){case"referenceHidden":{const e=E(await d(t,{...n,elementContext:"reference"}),o.reference);return{data:{referenceHiddenOffsets:e,referenceHidden:P(e)}}}case"escaped":{const e=E(await d(t,{...n,altBoundary:!0}),o.floating);return{data:{escapedOffsets:e,escaped:P(e)}}}default:return{}}}}};const O=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:o}=e,i=await async function(t,e){const{placement:n,platform:o,elements:i}=t,c=await(null==o.isRTL?void 0:o.isRTL(i.floating)),s=r(n),f=l(n),u="x"===a(n),d=["left","top"].includes(s)?-1:1,m=c&&u?-1:1,p="function"===typeof e?e(t):e;let{mainAxis:g,crossAxis:h,alignmentAxis:y}="number"===typeof p?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return f&&"number"===typeof y&&(h="end"===f?-1*y:y),u?{x:h*m,y:g*d}:{x:g*d,y:h*m}}(e,t);return{x:n+i.x,y:o+i.y,data:i}}}};function D(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}function j(t){if(null==t)return window;if(!D(t)){const e=t.ownerDocument;return e&&e.defaultView||window}return t}function C(t){return j(t).getComputedStyle(t)}function k(t){return D(t)?"":t?(t.nodeName||"").toLowerCase():""}function H(){const t=navigator.userAgentData;return null!=t&&t.brands?t.brands.map((t=>t.brand+"/"+t.version)).join(" "):navigator.userAgent}function W(t){return t instanceof j(t).HTMLElement}function S(t){return t instanceof j(t).Element}function N(t){if("undefined"===typeof ShadowRoot)return!1;return t instanceof j(t).ShadowRoot||t instanceof ShadowRoot}function M(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=C(t);return/auto|scroll|overlay|hidden/.test(e+o+n)&&!["inline","contents"].includes(i)}function F(t){return["table","td","th"].includes(k(t))}function $(t){const e=/firefox/i.test(H()),n=C(t);return"none"!==n.transform||"none"!==n.perspective||e&&"filter"===n.willChange||e&&!!n.filter&&"none"!==n.filter||["transform","perspective"].some((t=>n.willChange.includes(t)))||["paint","layout","strict","content"].some((t=>{const e=n.contain;return null!=e&&e.includes(t)}))}function V(){return!/^((?!chrome|android).)*safari/i.test(H())}function B(t){return["html","body","#document"].includes(k(t))}const z=Math.min,I=Math.max,U=Math.round;function X(t,e,n){var o,i,r,l;void 0===e&&(e=!1),void 0===n&&(n=!1);const a=t.getBoundingClientRect();let c=1,s=1;e&&W(t)&&(c=t.offsetWidth>0&&U(a.width)/t.offsetWidth||1,s=t.offsetHeight>0&&U(a.height)/t.offsetHeight||1);const f=S(t)?j(t):window,u=!V()&&n,d=(a.left+(u&&null!=(o=null==(i=f.visualViewport)?void 0:i.offsetLeft)?o:0))/c,m=(a.top+(u&&null!=(r=null==(l=f.visualViewport)?void 0:l.offsetTop)?r:0))/s,p=a.width/c,g=a.height/s;return{width:p,height:g,top:m,right:d+p,bottom:m+g,left:d,x:d,y:m}}function Y(t){return(e=t,(e instanceof j(e).Node?t.ownerDocument:t.document)||window.document).documentElement;var e}function q(t){return S(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function G(t){return X(Y(t)).left+q(t).scrollLeft}function J(t,e,n){const o=W(e),i=Y(e),r=X(t,o&&function(t){const e=X(t);return U(e.width)!==t.offsetWidth||U(e.height)!==t.offsetHeight}(e),"fixed"===n);let l={scrollLeft:0,scrollTop:0};const a={x:0,y:0};if(o||!o&&"fixed"!==n)if(("body"!==k(e)||M(i))&&(l=q(e)),W(e)){const t=X(e,!0);a.x=t.x+e.clientLeft,a.y=t.y+e.clientTop}else i&&(a.x=G(i));return{x:r.left+l.scrollLeft-a.x,y:r.top+l.scrollTop-a.y,width:r.width,height:r.height}}function K(t){return"html"===k(t)?t:t.assignedSlot||t.parentNode||(N(t)?t.host:null)||Y(t)}function Q(t){return W(t)&&"fixed"!==C(t).position?t.offsetParent:null}function Z(t){const e=j(t);let n=Q(t);for(;n&&F(n)&&"static"===C(n).position;)n=Q(n);return n&&("html"===k(n)||"body"===k(n)&&"static"===C(n).position&&!$(n))?e:n||function(t){let e=K(t);for(N(e)&&(e=e.host);W(e)&&!B(e);){if($(e))return e;{const t=e.parentNode;e=N(t)?t.host:t}}return null}(t)||e}function _(t){if(W(t))return{width:t.offsetWidth,height:t.offsetHeight};const e=X(t);return{width:e.width,height:e.height}}function tt(t){const e=K(t);return B(e)?t.ownerDocument.body:W(e)&&M(e)?e:tt(e)}function et(t,e){var n;void 0===e&&(e=[]);const o=tt(t),i=o===(null==(n=t.ownerDocument)?void 0:n.body),r=j(o),l=i?[r].concat(r.visualViewport||[],M(o)?o:[]):o,a=e.concat(l);return i?a:a.concat(et(l))}function nt(t,e,n){return"viewport"===e?u(function(t,e){const n=j(t),o=Y(t),i=n.visualViewport;let r=o.clientWidth,l=o.clientHeight,a=0,c=0;if(i){r=i.width,l=i.height;const t=V();(t||!t&&"fixed"===e)&&(a=i.offsetLeft,c=i.offsetTop)}return{width:r,height:l,x:a,y:c}}(t,n)):S(e)?function(t,e){const n=X(t,!1,"fixed"===e),o=n.top+t.clientTop,i=n.left+t.clientLeft;return{top:o,left:i,x:i,y:o,right:i+t.clientWidth,bottom:o+t.clientHeight,width:t.clientWidth,height:t.clientHeight}}(e,n):u(function(t){var e;const n=Y(t),o=q(t),i=null==(e=t.ownerDocument)?void 0:e.body,r=I(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),l=I(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0);let a=-o.scrollLeft+G(t);const c=-o.scrollTop;return"rtl"===C(i||n).direction&&(a+=I(n.clientWidth,i?i.clientWidth:0)-r),{width:r,height:l,x:a,y:c}}(Y(t)))}function ot(t){const e=et(t),n=function(t,e){let n=t;for(;n&&!B(n)&&!e.includes(n)&&(!S(n)||!["absolute","fixed"].includes(C(n).position));){const t=K(n);n=N(t)?t.host:t}return n}(t,e);let o=null;if(n&&W(n)){const t=Z(n);M(n)?o=n:W(t)&&(o=t)}return S(o)?e.filter((t=>o&&S(t)&&function(t,e){const n=null==e.getRootNode?void 0:e.getRootNode();if(t.contains(e))return!0;if(n&&N(n)){let n=e;do{if(n&&t===n)return!0;n=n.parentNode||n.host}while(n)}return!1}(t,o)&&"body"!==k(t))):[]}const it={getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[..."clippingAncestors"===n?ot(e):[].concat(n),o],l=r[0],a=r.reduce(((t,n)=>{const o=nt(e,n,i);return t.top=I(o.top,t.top),t.right=z(o.right,t.right),t.bottom=z(o.bottom,t.bottom),t.left=I(o.left,t.left),t}),nt(e,l,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=W(n),r=Y(n);if(n===r)return e;let l={scrollLeft:0,scrollTop:0};const a={x:0,y:0};if((i||!i&&"fixed"!==o)&&(("body"!==k(n)||M(r))&&(l=q(n)),W(n))){const t=X(n,!0);a.x=t.x+n.clientLeft,a.y=t.y+n.clientTop}return{...e,x:e.x-l.scrollLeft+a.x,y:e.y-l.scrollTop+a.y}},isElement:S,getDimensions:_,getOffsetParent:Z,getDocumentElement:Y,getElementRects:t=>{let{reference:e,floating:n,strategy:o}=t;return{reference:J(e,Z(n),o),floating:{..._(n),x:0,y:0}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>"rtl"===C(t).direction};function rt(t,e,n,o){void 0===o&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:l=!0,animationFrame:a=!1}=o,c=i&&!a,s=c||r?[...S(t)?et(t):[],...et(e)]:[];s.forEach((t=>{c&&t.addEventListener("scroll",n,{passive:!0}),r&&t.addEventListener("resize",n)}));let f,u=null;if(l){let o=!0;u=new ResizeObserver((()=>{o||n(),o=!1})),S(t)&&!a&&u.observe(t),u.observe(e)}let d=a?X(t):null;return a&&function e(){const o=X(t);!d||o.x===d.x&&o.y===d.y&&o.width===d.width&&o.height===d.height||n();d=o,f=requestAnimationFrame(e)}(),n(),()=>{var t;s.forEach((t=>{c&&t.removeEventListener("scroll",n),r&&t.removeEventListener("resize",n)})),null==(t=u)||t.disconnect(),u=null,a&&cancelAnimationFrame(f)}}const lt=(t,e,n)=>(async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:l}=n,a=await(null==l.isRTL?void 0:l.isRTL(e));let c=await l.getElementRects({reference:t,floating:e,strategy:i}),{x:f,y:u}=s(c,o,a),d=o,m={},p=0;for(let g=0;g<r.length;g++){const{name:n,fn:h}=r[g],{x:y,y:v,data:w,reset:b}=await h({x:f,y:u,initialPlacement:o,placement:d,strategy:i,middlewareData:m,rects:c,platform:l,elements:{reference:t,floating:e}});f=null!=y?y:f,u=null!=v?v:u,m={...m,[n]:{...m[n],...w}},b&&p<=50&&(p++,"object"===typeof b&&(b.placement&&(d=b.placement),b.rects&&(c=!0===b.rects?await l.getElementRects({reference:t,floating:e,strategy:i}):b.rects),({x:f,y:u}=s(c,d,a))),g=-1)}return{x:f,y:u,placement:d,strategy:i,middlewareData:m}})(t,e,{platform:it,...n}),at={floatingUINonChromiumPositioningFix:!0,...globalThis.calciteComponentsConfig},ct=async function(){if(at.floatingUINonChromiumPositioningFix&&/firefox|safari/i.test(function(){const t=navigator.userAgentData;return(null===t||void 0===t?void 0:t.brands)?t.brands.map((t=>`${t.brand}/${t.version}`)).join(" "):navigator.userAgent}())){const{getClippingRect:t,getElementRects:e,getOffsetParent:o}=await n.e(2242).then(n.bind(n,52242));it.getClippingRect=t,it.getOffsetParent=o,it.getElementRects=e}}();const st="data-placement",ft=["top","bottom","right","left","top-start","top-end","bottom-start","bottom-end","right-start","right-end","left-start","left-end"],ut="bottom-start",dt={animation:"calcite-floating-ui-anim",animationActive:"calcite-floating-ui-anim--active"};function mt(t){let{placement:e,disableFlip:n,flipPlacements:o,offsetDistance:i,offsetSkidding:s,arrowEl:u,type:m}=t;const p=[(void 0===h&&(h={}),{name:"shift",options:h,async fn(t){const{x:e,y:n,placement:o}=t,{mainAxis:i=!0,crossAxis:l=!1,limiter:c={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...s}=h,f={x:e,y:n},u=await d(t,s),m=a(r(o)),p="x"===m?"y":"x";let y=f[m],v=f[p];if(i){const t="y"===m?"bottom":"right";y=g(y+u["y"===m?"top":"left"],y,y-u[t])}if(l){const t="y"===p?"bottom":"right";v=g(v+u["y"===p?"top":"left"],v,v-u[t])}const w=c.fn({...t,[m]:y,[p]:v});return{...w,data:{x:w.x-e,y:w.y-n}}}}),A()];var h;if("menu"===m)return[...p,L({fallbackPlacements:o||["top-start","top","top-end","bottom-start","bottom","bottom-end"]})];if("popover"===m||"tooltip"===m){const t=[...p,O({mainAxis:"number"===typeof i?i:0,crossAxis:"number"===typeof s?s:0})];return"auto"===e||"auto-start"===e||"auto-end"===e?t.push(T({alignment:"auto-start"===e?"start":"auto-end"===e?"end":null})):n||t.push(L(o?{fallbackPlacements:o}:{})),u&&t.push((t=>({name:"arrow",options:t,async fn(e){const{element:n,padding:o=0}=null!=t?t:{},{x:i,y:r,placement:s,rects:u,platform:d}=e;if(null==n)return{};const m=f(o),p={x:i,y:r},h=a(s),y=l(s),v=c(h),w=await d.getDimensions(n),b="y"===h?"top":"left",x="y"===h?"bottom":"right",R=u.reference[v]+u.reference[h]-p[h]-u.floating[v],T=p[h]-u.reference[h],L=await(null==d.getOffsetParent?void 0:d.getOffsetParent(n));let E=L?"y"===h?L.clientHeight||0:L.clientWidth||0:0;0===E&&(E=u.floating[v]);const P=R/2-T/2,A=m[b],O=E-w[v]-m[x],D=E/2-w[v]/2+P,j=g(A,D,O),C=("start"===y?m[b]:m[x])>0&&D!==j&&u.reference[v]<=u.floating[v];return{[h]:p[h]-(C?D<A?A-D:O-D:0),data:{[h]:j,centerOffset:D-j}}}}))({element:u})),t}return[]}function pt(t,e){const n=t.filter((t=>ft.includes(t)));return n.length!==t.length&&console.warn(`${e.tagName}: Invalid value found in: flipPlacements. Try any of these: ${ft.map((t=>`"${t}"`)).join(", ").trim()}`,{el:e}),n}function gt(t,e){const n=["left","right"];return"rtl"===(0,o.a)(t)&&n.reverse(),e.replace(/-leading/gi,"-start").replace(/-trailing/gi,"-end").replace(/leading/gi,n[0]).replace(/trailing/gi,n[1])}async function ht(t,e){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t.open)return n?yt(e):vt(e)}const yt=(0,i.d)(vt,100,{leading:!0,maxWait:100});async function vt(t){let{referenceEl:e,floatingEl:n,overlayPositioning:o="absolute",placement:i,disableFlip:r,flipPlacements:l,offsetDistance:a,offsetSkidding:c,includeArrow:s=!1,arrowEl:f,type:u}=t;var d;if(!e||!n||s&&!f)return null;await ct;const{x:m,y:p,placement:g,strategy:h,middlewareData:y}=await lt(e,n,{strategy:o,placement:"auto"===i||"auto-start"===i||"auto-end"===i?void 0:gt(n,i),middleware:mt({placement:i,disableFlip:r,flipPlacements:l,offsetDistance:a,offsetSkidding:c,arrowEl:f,type:u})});if(null===y||void 0===y?void 0:y.arrow){const{x:t,y:e}=y.arrow;Object.assign(f.style,{left:null!=t?`${t}px`:"",top:null!=e?`${e}px`:""})}const v=(null===(d=null===y||void 0===y?void 0:y.hide)||void 0===d?void 0:d.referenceHidden)?"hidden":null,w=v?"none":null;n.setAttribute(st,g);const b=`translate(${Math.round(m)}px,${Math.round(p)}px)`;Object.assign(n.style,{visibility:v,pointerEvents:w,position:h,top:"0",left:"0",transform:b})}const wt=new WeakMap;function bt(t,e,n){if(!n||!e)return;xt(t,e,n);const o=t.overlayPositioning;n.style.position=o,"absolute"===o&&Pt(n);const i=rt;wt.set(t,i(e,n,(()=>t.reposition())))}function xt(t,e,n){if(!n||!e)return;Lt(n).removeEventListener("transitionend",Et);const o=wt.get(t);o&&o(),wt.delete(t)}const Rt=Math.ceil(Math.hypot(4,4));function Tt(t){t&&"absolute"===t.style.position&&Lt(t).addEventListener("transitionend",Et)}function Lt(t){return t.shadowRoot||t}function Et(t){const e=t.target;if("opacity"===t.propertyName&&e.classList.contains(dt.animation)){const t=function(t){return(0,o.c)(t,"[data-placement]")}(e);Pt(t),Lt(t).removeEventListener("transitionend",Et)}}function Pt(t){t.style.transform="",t.style.top="-99999px",t.style.left="-99999px"}}}]);
//# sourceMappingURL=2726.bc9657aa.chunk.js.map