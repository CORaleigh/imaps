(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[236],{356:function(t,e,i){"use strict";function o(t,e){var i={Up:"ArrowUp",Down:"ArrowDown",Left:"ArrowLeft",Right:"ArrowRight",Spacebar:" ",Esc:"Escape"}[t]||t,o="rtl"===e;return o&&"ArrowLeft"===i?"ArrowRight":o&&"ArrowRight"===i?"ArrowLeft":i}function n(t){return"Enter"===(t=o(t))||" "===t}i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r}));var r=["0","1","2","3","4","5","6","7","8","9"]},76:function(t,e,i){"use strict";i.r(e),i.d(e,"calcite_tooltip",(function(){return d})),i.d(e,"calcite_tooltip_manager",(function(){return b}));var o=i(4),n=i(152),r=i(869),a=i(193),s=i(356),c=function(t,e,i,o){function n(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,r){function a(t){try{c(o.next(t))}catch(t){r(t)}}function s(t){try{c(o.throw(t))}catch(t){r(t)}}function c(t){t.done?i(t.value):n(t.value).then(a,s)}c((o=o.apply(t,e||[])).next())}))},l=function(t,e){var i,o,n,r,a={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(t){return function(e){return c([t,e])}}function c(r){if(i)throw new TypeError("Generator is already executing.");for(;a;)try{if(i=1,o&&(n=2&r[0]?o.return:r[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,r[1])).done)return n;switch(o=0,n&&(r=[2&r[0],n.value]),r[0]){case 0:case 1:n=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,o=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(n=(n=a.trys).length>0&&n[n.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!n||r[1]>n[0]&&r[1]<n[3])){a.label=r[1];break}if(6===r[0]&&a.label<n[1]){a.label=n[1],n=r;break}if(n&&a.label<n[2]){a.label=n[2],a.ops.push(r);break}n[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(t){r=[6,t],o=0}finally{i=n=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}},p="container",f="arrow",m="data-calcite-tooltip-reference",u="aria-describedby",d=function(){function t(t){var e=this;Object(o.j)(this,t),this.offsetDistance=r.c,this.offsetSkidding=0,this.open=!1,this.overlayPositioning="absolute",this.placement="auto",this.guid="calcite-tooltip-"+Object(n.a)(),this.setUpReferenceElement=function(){e.removeReferences(),e.effectiveReferenceElement=e.getReferenceElement();var t=e,i=t.el,o=t.referenceElement,n=t.effectiveReferenceElement;o&&!n&&console.warn(i.tagName+': reference-element id "'+o+'" was not found.',{el:i}),e.addReferences(),e.createPopper()},this.getId=function(){return e.el.id||e.guid},this.addReferences=function(){var t=e.effectiveReferenceElement;if(t){var i=e.getId();t.setAttribute(m,i),t.setAttribute(u,i)}},this.removeReferences=function(){var t=e.effectiveReferenceElement;t&&(t.removeAttribute(m),t.removeAttribute(u))},this.show=function(){e.open=!0},this.hide=function(){e.open=!1}}return t.prototype.offsetDistanceOffsetHandler=function(){this.reposition()},t.prototype.offsetSkiddingHandler=function(){this.reposition()},t.prototype.openHandler=function(){this.reposition()},t.prototype.placementHandler=function(){this.reposition()},t.prototype.referenceElementHandler=function(){this.setUpReferenceElement()},t.prototype.componentWillLoad=function(){this.setUpReferenceElement()},t.prototype.componentDidLoad=function(){this.reposition()},t.prototype.disconnectedCallback=function(){this.removeReferences(),this.destroyPopper()},t.prototype.reposition=function(){return c(this,void 0,void 0,(function(){var t,e,i,o,n;return l(this,(function(a){return e=(t=this).popper,i=t.el,o=t.placement,n=this.getModifiers(),e?Object(r.d)({el:i,modifiers:n,placement:o,popper:e}):this.createPopper(),[2]}))}))},t.prototype.getReferenceElement=function(){var t=this.referenceElement,e=this.el;return("string"===typeof t?Object(a.p)(e,"#"+t):t)||null},t.prototype.getModifiers=function(){var t=this,e=t.arrowEl,i=t.offsetDistance;return[{name:"arrow",enabled:!0,options:{element:e}},{name:"offset",enabled:!0,options:{offset:[t.offsetSkidding,i]}}]},t.prototype.createPopper=function(){this.destroyPopper();var t=this,e=t.el,i=t.placement,o=t.effectiveReferenceElement,n=t.overlayPositioning,a=this.getModifiers();this.popper=Object(r.b)({el:e,modifiers:a,placement:i,overlayPositioning:n,referenceEl:o})},t.prototype.destroyPopper=function(){var t=this.popper;t&&t.destroy(),this.popper=null},t.prototype.render=function(){var t,e=this,i=this,n=i.effectiveReferenceElement,a=i.label,s=i.open,c=n&&s,l=!c;return Object(o.h)(o.b,{"aria-hidden":l.toString(),"aria-label":a,"calcite-hydrated-hidden":l,id:this.getId(),role:"tooltip"},Object(o.h)("div",{class:(t={},t[r.a.animation]=!0,t[r.a.animationActive]=c,t)},Object(o.h)("div",{class:f,ref:function(t){return e.arrowEl=t}}),Object(o.h)("div",{class:p},Object(o.h)("slot",null))))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(o.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}},enumerable:!1,configurable:!0}),t}();d.style='@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block;position:absolute;z-index:999;-webkit-transform:scale(0);transform:scale(0)}.calcite-popper-anim{position:relative;z-index:1;-webkit-transition:var(--calcite-popper-transition);transition:var(--calcite-popper-transition);visibility:hidden;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform;opacity:0;-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:0.25rem}:host([data-popper-placement^=bottom]) .calcite-popper-anim{-webkit-transform:translateY(-5px);transform:translateY(-5px)}:host([data-popper-placement^=top]) .calcite-popper-anim{-webkit-transform:translateY(5px);transform:translateY(5px)}:host([data-popper-placement^=left]) .calcite-popper-anim{-webkit-transform:translateX(5px);transform:translateX(5px)}:host([data-popper-placement^=right]) .calcite-popper-anim{-webkit-transform:translateX(-5px);transform:translateX(-5px)}:host([data-popper-placement]) .calcite-popper-anim--active{opacity:1;visibility:visible;-webkit-transform:translate(0);transform:translate(0)}.arrow,.arrow::before{position:absolute;width:8px;height:8px;z-index:-1}.arrow::before{content:"";-webkit-box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--calcite-ui-foreground-1)}:host([data-popper-placement^=top]) .arrow{bottom:-4px}:host([data-popper-placement^=bottom]) .arrow{top:-4px}:host([data-popper-placement^=left]) .arrow{right:-4px}:host([data-popper-placement^=right]) .arrow{left:-4px}.container{position:relative;background-color:var(--calcite-ui-foreground-1);display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-direction:column;flex-direction:column;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);padding-top:0.75rem;padding-bottom:0.75rem;padding-left:1rem;padding-right:1rem;overflow:hidden;font-size:var(--calcite-font-size--2);line-height:1.375;border-radius:0.25rem;max-width:20rem;max-height:20rem}.calcite-popper-anim{background-color:var(--calcite-ui-foreground-1);border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);border-radius:0.25rem}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}';var b=function(){function t(t){var e=this;Object(o.j)(this,t),this.hoverTimeouts=new WeakMap,this.selector="["+m+"]",this.queryTooltip=function(t){var i,o=e,n=o.selector,r=o.el,s=null===(i=t.closest(n))||void 0===i?void 0:i.getAttribute(m);return Object(a.p)(r,"#"+s)},this.clearHoverTimeout=function(t){var i=e.hoverTimeouts;i.has(t)&&(window.clearTimeout(i.get(t)),i.delete(t))},this.closeExistingTooltip=function(){var t=e.tooltipEl;t&&e.toggleTooltip(t,!1)},this.focusTooltip=function(t){var i=t.tooltip,o=t.value;e.closeExistingTooltip(),o&&e.clearHoverTimeout(i),e.toggleTooltip(i,o)},this.toggleTooltip=function(t,i){t.open=i,i&&(e.tooltipEl=t)},this.hoverToggle=function(t){var i=t.tooltip,o=t.value;e.hoverTimeouts.delete(i),o&&e.closeExistingTooltip(),e.toggleTooltip(i,o)},this.hoverTooltip=function(t){var i=t.tooltip,o=t.value;e.clearHoverTimeout(i);var n=e.hoverTimeouts,r=window.setTimeout((function(){return e.hoverToggle({tooltip:i,value:o})}),500);n.set(i,r)},this.activeTooltipHover=function(t){var i=e,o=i.tooltipEl,n=i.hoverTimeouts;o&&(t.composedPath().includes(o)?e.clearHoverTimeout(o):n.has(o)||e.hoverTooltip({tooltip:o,value:!1}))},this.hoverEvent=function(t,i){var o=e.queryTooltip(t.target);e.activeTooltipHover(t),o&&e.hoverTooltip({tooltip:o,value:i})},this.focusEvent=function(t,i){var o=e.queryTooltip(t.target);o&&o!==e.clickedTooltip?e.focusTooltip({tooltip:o,value:i}):e.clickedTooltip=null}}return t.prototype.render=function(){return Object(o.h)("slot",null)},t.prototype.keyUpHandler=function(t){if("Escape"===Object(s.a)(t.key)){var e=this.tooltipEl;e&&(this.clearHoverTimeout(e),this.toggleTooltip(e,!1))}},t.prototype.mouseEnterShow=function(t){this.hoverEvent(t,!0)},t.prototype.mouseLeaveHide=function(t){this.hoverEvent(t,!1)},t.prototype.clickHandler=function(t){var e=this.queryTooltip(t.target);this.clickedTooltip=e,e&&this.toggleTooltip(e,!1)},t.prototype.focusShow=function(t){this.focusEvent(t,!0)},t.prototype.blurHide=function(t){this.focusEvent(t,!1)},Object.defineProperty(t.prototype,"el",{get:function(){return Object(o.g)(this)},enumerable:!1,configurable:!0}),t}();b.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block}"}}]);
//# sourceMappingURL=236.b1e6f248.chunk.js.map