/*! For license information please see 8907.6c93e03d.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[8907],{78907:(t,i,e)=>{e.r(i),e.d(i,{CalciteIcon:()=>a,defineCustomElement:()=>r});var n=e(59474);const a=n.I,r=n.d},77953:(t,i,e)=>{e.d(i,{C:()=>n,T:()=>a,a:()=>r,b:()=>h,c:()=>m,e:()=>u,f:()=>d,g:()=>o,q:()=>c,s:()=>v,t:()=>b});const n={autoTheme:"calcite-theme-auto",darkTheme:"calcite-theme-dark",lightTheme:"calcite-theme-light",rtl:"calcite--rtl"},a={loading:"Loading"};function r(t){const i=u(t,"[dir]");return i?i.getAttribute("dir"):"ltr"}function o(t,i,e){const n=`[${i}]`,a=t.closest(n);return a?a.getAttribute(i):e}function s(t){return t.getRootNode()}function l(t){return t.host||null}function c(t,i){return function t(e,n){if(!e)return n;e.assignedSlot&&(e=e.assignedSlot);const a=s(e),r=Array.from(a.querySelectorAll(i)).filter((t=>!n.includes(t)));n=[...n,...r];const o=l(a);return o?t(o,n):n}(t,[])}function m(t,i){let{selector:e,id:n}=i;return function t(i){if(!i)return null;i.assignedSlot&&(i=i.assignedSlot);const a=s(i),r=n?"getElementById"in a?a.getElementById(n):null:e?a.querySelector(e):null,o=l(a);return r||(o?t(o):null)}(t)}function u(t,i){return function t(e){return e?e.closest(i)||t(l(s(e))):null}(t)}async function d(t){if(t)return function(t){return"function"===typeof(null===t||void 0===t?void 0:t.setFocus)}(t)?t.setFocus():t.focus()}const f=":not([slot])";function h(t,i,e){i&&!Array.isArray(i)&&"string"!==typeof i&&(e=i,i=null);const n=i?Array.isArray(i)?i.map((t=>`[slot="${t}"]`)).join(","):`[slot="${i}"]`:f;return(null===e||void 0===e?void 0:e.all)?function(t,i,e){let n=i===f?p(t,f):Array.from(t.querySelectorAll(i));n=e&&!1===e.direct?n:n.filter((i=>i.parentElement===t)),n=(null===e||void 0===e?void 0:e.matches)?n.filter((t=>null===t||void 0===t?void 0:t.matches(e.matches))):n;const a=null===e||void 0===e?void 0:e.selector;return a?n.map((t=>Array.from(t.querySelectorAll(a)))).reduce(((t,i)=>[...t,...i]),[]).filter((t=>!!t)):n}(t,n,e):function(t,i,e){let n=i===f?p(t,f)[0]||null:t.querySelector(i);n=e&&!1===e.direct||(null===n||void 0===n?void 0:n.parentElement)===t?n:null,n=(null===e||void 0===e?void 0:e.matches)?(null===n||void 0===n?void 0:n.matches(e.matches))?n:null:n;const a=null===e||void 0===e?void 0:e.selector;return a?null===n||void 0===n?void 0:n.querySelector(a):n}(t,n,e)}function p(t,i){return t?Array.from(t.children||[]).filter((t=>null===t||void 0===t?void 0:t.matches(i))):[]}function v(t,i,e){return"string"===typeof i&&""!==i?i:""===i?t[e]:void 0}function b(t){return(!!t).toString()}},59474:(t,i,e)=>{e.d(i,{I:()=>u,d:()=>d});var n=e(6638),a=e(77953),r=e(47066);const o="flip-rtl",s={},l={},c={s:16,m:24,l:32};async function m(t){let{icon:i,scale:e}=t;const a=c[e],r=function(t){const i=!isNaN(Number(t.charAt(0))),e=t.split("-");if(1===e.length)return i?`i${t}`:t;return e.map(((t,e)=>0===e?i?`i${t.toUpperCase()}`:t:t.charAt(0).toUpperCase()+t.slice(1))).join("")}(i),o="F"===r.charAt(r.length-1),m=`${o?r.substring(0,r.length-1):r}${a}${o?"F":""}`;if(s[m])return s[m];l[m]||(l[m]=fetch((0,n.K3)(`./assets/icon/${m}.json`)).then((t=>t.json())).catch((()=>(console.error(`"${m}" is not a valid calcite-ui-icon name`),""))));const u=await l[m];return s[m]=u,u}const u=(0,n.GH)(class extends n.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.visible=!1}connectedCallback(){this.waitUntilVisible((()=>{this.visible=!0,this.loadIconPathData()}))}disconnectedCallback(){var t;null===(t=this.intersectionObserver)||void 0===t||t.disconnect(),this.intersectionObserver=null}async componentWillLoad(){this.loadIconPathData()}render(){const{el:t,flipRtl:i,pathData:e,scale:r,textLabel:s}=this,l=(0,a.a)(t),m=c[r],u=!!s,d=[].concat(e||"");return(0,n.h)(n.AA,{"aria-hidden":(0,a.t)(!u),"aria-label":u?s:null,role:u?"img":null},(0,n.h)("svg",{class:{[o]:"rtl"===l&&i,svg:!0},fill:"currentColor",height:"100%",viewBox:`0 0 ${m} ${m}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},d.map((t=>"string"===typeof t?(0,n.h)("path",{d:t}):(0,n.h)("path",{d:t.d,opacity:"opacity"in t?t.opacity:1})))))}async loadIconPathData(){const{icon:t,scale:i,visible:e}=this;n.Z5.isBrowser&&t&&e&&(this.pathData=await m({icon:t,scale:i}))}waitUntilVisible(t){this.intersectionObserver=(0,r.c)("intersection",(i=>{i.forEach((i=>{i.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,t())}))}),{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):t()}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:-ms-inline-flexbox;display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){height:1rem;width:1rem;min-width:1rem;min-height:1rem}:host([scale=m]){height:1.5rem;width:1.5rem;min-width:1.5rem;min-height:1.5rem}:host([scale=l]){height:2rem;width:2rem;min-width:2rem;min-height:2rem}.flip-rtl{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.svg{display:block}"}},[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]}]);function d(){if("undefined"===typeof customElements)return;["calcite-icon"].forEach((t=>{if("calcite-icon"===t)customElements.get(t)||customElements.define(t,u)}))}d()},47066:(t,i,e)=>{e.d(i,{c:()=>a});var n=e(6638);function a(t,i,e){const a=function(t){return"intersection"===t?window.IntersectionObserver:"mutation"===t?window.MutationObserver:window.ResizeObserver}(t);return n.Z5.isBrowser?new a(i,e):void 0}}}]);
//# sourceMappingURL=8907.6c93e03d.chunk.js.map