(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[189],{237:function(t,r,n){"use strict";n.d(r,"a",(function(){return s})),n.d(r,"b",(function(){return c})),n.d(r,"c",(function(){return f})),n.d(r,"d",(function(){return d})),n.d(r,"e",(function(){return h})),n.d(r,"f",(function(){return l})),n.d(r,"g",(function(){return u})),n.d(r,"h",(function(){return p})),n.d(r,"i",(function(){return o})),n.d(r,"j",(function(){return m}));var e=function(t,r,n,e){function i(t){return t instanceof n?t:new n((function(r){r(t)}))}return new(n||(n=Promise))((function(n,a){function o(t){try{u(e.next(t))}catch(r){a(r)}}function s(t){try{u(e.throw(t))}catch(r){a(r)}}function u(t){t.done?n(t.value):i(t.value).then(o,s)}u((e=e.apply(t,r||[])).next())}))},i=function(t,r){var n,e,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(r){return u([t,r])}}function u(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,e&&(i=2&a[0]?e.return:a[0]?e.throw||((i=e.return)&&i.call(e),0):e.next)&&!(i=i.call(e,a[1])).done)return i;switch(e=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,e=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=r.call(t,o)}catch(s){a=[6,s],e=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}},a=function(t,r){for(var n=0,e=r.length,i=t.length;n<e;n++,i++)t[i]=r[n];return t};function o(t){return Array.isArray(t)?t:Array.from(t)}function s(t,r){return Array.from(t.attributes).filter((function(t){return t&&!r.includes(t.name)})).reduce((function(t,r){var n,e=r.name,i=r.value;return Object.assign(Object.assign({},t),((n={})[e]=i,n))}),{})}function u(t){return c(t,"dir","ltr",!0)}function c(t,r,n,e){void 0===e&&(e=!1);var i="["+r+"]",a=e?function(t,r){void 0===r&&(r=this);function n(r){if(!r||r===document||r===window)return null;var e=r.closest(t);return e||n(r.getRootNode().host)}return n(r)}(i,t):t.closest(i);return a?a.getAttribute(r):n}function l(t){return e(this,void 0,void 0,(function(){return i(this,(function(r){return t?("function"===typeof t.setFocus?t.setFocus():t.focus(),[2]):[2]}))}))}function f(t,r,n){var e='[slot="'+r+'"]';return(null===n||void 0===n?void 0:n.all)?function(t,r,n){var e=Array.from(t.querySelectorAll(r));e=n&&!1===n.direct?e:e.filter((function(r){return r.parentElement===t}));var i=null===n||void 0===n?void 0:n.selector;return i?e.map((function(t){return Array.from(t.querySelectorAll(i))})).reduce((function(t,r){return a(a([],t),r)}),[]).filter((function(t){return!!t})):e}(t,e,n):function(t,r,n){var e=t.querySelector(r);e=n&&!1===n.direct||(null===e||void 0===e?void 0:e.parentElement)===t?e:null;var i=null===n||void 0===n?void 0:n.selector;return i?e.querySelector(i):e}(t,e,n)}function h(t,r){return Array.from(t.children).filter((function(t){return t.matches(r)}))}function d(t,r){var n=null===t||void 0===t?void 0:t.getAttribute(r);return n&&document.getElementById(n)||null}function p(t,r){return t.contains(r)}function m(t,r,n){return"string"===typeof r&&""!==r?r:""===r?t[n]:void 0}},76:function(t,r,n){"use strict";n.r(r),n.d(r,"calcite_avatar",(function(){return s}));var e=n(22),i=n(237),a=n(978);function o(t){return function(t){var r=t.r,n=t.g,e=t.b;r/=255,n/=255,e/=255;var i=Math.max(r,n,e),a=Math.min(r,n,e),o=i-a;if(i===a)return 0;var s=(i+a)/2;switch(i){case r:s=(n-e)/o+(n<e?6:0);break;case n:s=(e-r)/o+2;break;case e:s=(r-n)/o+4}return Math.round(60*s)}(Object(a.e)(t))}var s=function(){function t(t){Object(e.k)(this,t),this.scale="m",this.error=!1}return t.prototype.render=function(){var t=Object(i.g)(this.el),r=this.determineContent();return Object(e.i)(e.b,{dir:t},r)},t.prototype.determineContent=function(){var t=this;if(this.thumbnail&&!this.error)return Object(e.i)("img",{alt:"",class:"thumbnail",onError:function(){return t.error=!0},src:this.thumbnail});var r=this.generateInitials(),n=this.generateFillColor();return Object(e.i)("span",{class:"background",style:{backgroundColor:n}},r?Object(e.i)("span",{"aria-hidden":"true",class:"initials"},r):Object(e.i)("calcite-icon",{class:"icon",icon:"user",scale:this.scale,theme:this.theme}))},t.prototype.generateFillColor=function(){var t=this,r=t.userId,n=t.username,e=t.fullName,i=t.theme,s=r&&"#"+r.substr(r.length-6),u=n||e||"",c=s&&Object(a.f)(s)?s:function(t){for(var r=0,n=0;n<t.length;n++)r=t.charCodeAt(n)+((r<<5)-r);for(var e="#",i=0;i<3;i++)e+=("00"+(r>>8*i&255).toString(16)).substr(-2);return e}(u);return(r||u)&&Object(a.f)(c)?"hsl("+o(c)+", 60%, "+("dark"===i?20:90)+"%)":"var(--calcite-ui-foreground-2)"},t.prototype.generateInitials=function(){var t=this.fullName,r=this.username;return t?t.trim().split(" ").map((function(t){return t.substring(0,1)})).join(""):!!r&&r.substring(0,2)},Object.defineProperty(t.prototype,"el",{get:function(){return Object(e.h)(this)},enumerable:!1,configurable:!0}),t}();s.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;border-radius:50%;overflow:hidden}:host([scale=s]){width:1.5rem;height:1.5rem;font-size:var(--calcite-font-size--3)}:host([scale=m]){width:2rem;height:2rem;font-size:var(--calcite-font-size--2)}:host([scale=l]){width:2.5rem;height:2.5rem;font-size:var(--calcite-font-size--1)}.icon{display:-ms-flexbox;display:flex}.background{width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:50%}.initials{font-weight:var(--calcite-font-weight-bold);text-transform:uppercase;color:var(--calcite-ui-text-3)}.thumbnail{width:100%;height:100%;border-radius:50%}"},978:function(t,r,n){"use strict";function e(t){var r=t.r,n=t.g,e=t.b;return("#"+r.toString(16).padStart(2,"0")+n.toString(16).padStart(2,"0")+e.toString(16).padStart(2,"0")).toLowerCase()}n.d(r,"a",(function(){return h})),n.d(r,"b",(function(){return c})),n.d(r,"c",(function(){return i})),n.d(r,"d",(function(){return b})),n.d(r,"e",(function(){return f})),n.d(r,"f",(function(){return s})),n.d(r,"g",(function(){return l})),n.d(r,"h",(function(){return p})),n.d(r,"i",(function(){return e}));var i=/^[0-9A-F]$/i,a=/^#[0-9A-F]{3}$/i,o=/^#[0-9A-F]{6}$/i;function s(t){return u(t)||c(t)}function u(t){return t&&4===t.length&&a.test(t)}function c(t){return t&&7===t.length&&o.test(t)}function l(t){return(t=t.toLowerCase()).startsWith("#")||(t="#"+t),u(t)?e(f(t)):t}function f(t){if(!s(t))return null;if(3===(t=t.replace("#","")).length){var r=t.split(""),n=r[0],e=r[1],i=r[2];return{r:parseInt(""+n+n,16),g:parseInt(""+e+e,16),b:parseInt(""+i+i,16)}}return{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)}}var h={HEX:"hex",HEXA:"hexa",RGB_CSS:"rgb-css",RGBA_CSS:"rgba-css",HSL_CSS:"hsl-css",HSLA_CSS:"hsla-css"},d={RGB:"rgb",RGBA:"rgba",HSL:"hsl",HSLA:"hsla",HSV:"hsv",HSVA:"hsva"};function p(t){if("string"===typeof t){if(t.startsWith("#")){var r=t.length;if(4===r||7===r)return h.HEX;if(5===r||9===r)return h.HEXA}if(t.startsWith("rgba("))return h.RGBA_CSS;if(t.startsWith("rgb("))return h.RGB_CSS;if(t.startsWith("hsl("))return h.HSL_CSS;if(t.startsWith("hsla("))return h.HSLA_CSS}if("object"===typeof t){if(m(t,"r","g","b"))return m(t,"a")?d.RGBA:d.RGB;if(m(t,"h","s","l"))return m(t,"a")?d.HSLA:d.HSL;if(m(t,"h","s","v"))return m(t,"a")?d.HSVA:d.HSV}return null}function m(t){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];return r.every((function(r){return r&&t&&""+r in t}))}function b(t,r){return(null===t||void 0===t?void 0:t.rgbNumber())===(null===r||void 0===r?void 0:r.rgbNumber())}}}]);
//# sourceMappingURL=189.9087c023.chunk.js.map