(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[265],{60:function(e,t,n){"use strict";n.r(t),n.d(t,"calcite_popover",(function(){return x})),n.d(t,"calcite_popover_manager",(function(){return g}));var i=n(4),a=n(803),r=n(144),o=n(179),s=n(605),c=function(e,t,n,i){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,r){function o(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){e.done?n(e.value):a(e.value).then(o,s)}c((i=i.apply(e,t||[])).next())}))},l=function(e,t){var n,i,a,r,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(e){return function(t){return c([e,t])}}function c(r){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,i&&(a=2&r[0]?i.return:r[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,r[1])).done)return a;switch(i=0,a&&(r=[2&r[0],a.value]),r[0]){case 0:case 1:a=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,i=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===r[0]||2===r[0])){o=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){o.label=r[1];break}if(6===r[0]&&o.label<a[1]){o.label=a[1],a=r;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(r);break}a[2]&&o.ops.pop(),o.trys.pop();continue}r=t.call(e,o)}catch(e){r=[6,e],i=0}finally{n=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}},p="container",f="arrow",m="close-button",d="content",u="has-header",b="header",h="heading",y="Close",w="data-calcite-popover-reference",v="aria-controls",k="aria-expanded",x=function(){function e(e){var t=this;Object(i.j)(this,e),this.calcitePopoverClose=Object(i.e)(this,"calcitePopoverClose",7),this.calcitePopoverOpen=Object(i.e)(this,"calcitePopoverOpen",7),this.closeButton=!1,this.dismissible=!1,this.disableFlip=!1,this.disablePointer=!1,this.offsetDistance=a.c,this.offsetSkidding=0,this.open=!1,this.overlayPositioning="absolute",this.placement="auto",this.intlClose=y,this.guid="calcite-popover-"+Object(r.a)(),this.activeTransitionProp="opacity",this.setUpReferenceElement=function(){t.removeReferences(),t.effectiveReferenceElement=t.getReferenceElement();var e=t,n=e.el,i=e.referenceElement,a=e.effectiveReferenceElement;i&&!a&&console.warn(n.tagName+': reference-element id "'+i+'" was not found.',{el:n}),t.addReferences(),t.createPopper()},this.getId=function(){return t.el.id||t.guid},this.setExpandedAttr=function(){var e=t,n=e.effectiveReferenceElement,i=e.open;n&&n.setAttribute(k,i.toString())},this.addReferences=function(){var e=t.effectiveReferenceElement;if(e){var n=t.getId();e.setAttribute(w,n),e.setAttribute(v,n),t.setExpandedAttr()}},this.removeReferences=function(){var e=t.effectiveReferenceElement;e&&(e.removeAttribute(w),e.removeAttribute(v),e.removeAttribute(k))},this.hide=function(){t.open=!1},this.transitionEnd=function(e){e.propertyName===t.activeTransitionProp&&(t.open?t.calcitePopoverOpen.emit():t.calcitePopoverClose.emit())}}return e.prototype.offsetDistanceOffsetHandler=function(){this.reposition()},e.prototype.offsetSkiddingHandler=function(){this.reposition()},e.prototype.openHandler=function(){this.reposition(),this.setExpandedAttr()},e.prototype.placementHandler=function(){this.reposition()},e.prototype.referenceElementHandler=function(){this.setUpReferenceElement()},e.prototype.componentWillLoad=function(){this.setUpReferenceElement()},e.prototype.componentDidLoad=function(){this.reposition()},e.prototype.disconnectedCallback=function(){this.removeReferences(),this.destroyPopper()},e.prototype.reposition=function(){return c(this,void 0,void 0,(function(){var e,t,n,i,r;return l(this,(function(o){return t=(e=this).popper,n=e.el,i=e.placement,r=this.getModifiers(),t?Object(a.d)({el:n,modifiers:r,placement:i,popper:t}):this.createPopper(),[2]}))}))},e.prototype.setFocus=function(e){return c(this,void 0,void 0,(function(){var t,n;return l(this,(function(a){return n=this.closeButtonEl,"close-button"===e&&n?(Object(i.f)(n),n.setFocus(),[2]):(null===(t=this.el)||void 0===t||t.focus(),[2])}))}))},e.prototype.toggle=function(e){return void 0===e&&(e=!this.open),c(this,void 0,void 0,(function(){return l(this,(function(t){return this.open=e,[2]}))}))},e.prototype.getReferenceElement=function(){var e=this.referenceElement,t=this.el;return("string"===typeof e?Object(o.p)(t,"#"+e):e)||null},e.prototype.getModifiers=function(){var e=this,t=e.arrowEl,n=e.flipPlacements,i=e.disableFlip,a=e.disablePointer,r=e.offsetDistance,o=e.offsetSkidding,s={name:"flip",enabled:!i};n&&(s.options={fallbackPlacements:n});var c={name:"arrow",enabled:!a};return t&&(c.options={element:t}),[c,s,{name:"offset",enabled:!0,options:{offset:[o,r]}}]},e.prototype.createPopper=function(){this.destroyPopper();var e=this,t=e.el,n=e.placement,i=e.effectiveReferenceElement,r=e.overlayPositioning,o=this.getModifiers();this.popper=Object(a.b)({el:t,modifiers:o,overlayPositioning:r,placement:n,referenceEl:i})},e.prototype.destroyPopper=function(){var e=this.popper;e&&e.destroy(),this.popper=null},e.prototype.renderCloseButton=function(){var e=this,t=this,n=t.dismissible,a=t.closeButton,r=t.intlClose;return n||a?Object(i.h)("calcite-action",{class:m,onClick:this.hide,ref:function(t){return e.closeButtonEl=t},text:r},Object(i.h)("calcite-icon",{icon:"x",scale:"m"})):null},e.prototype.renderHeader=function(){var e=this.heading,t=this.headingLevel,n=e?Object(i.h)(s.a,{class:h,level:t||2},e):null;return n?Object(i.h)("div",{class:b},n,this.renderCloseButton()):null},e.prototype.render=function(){var e,t,n=this,r=this,s=r.effectiveReferenceElement,c=r.el,l=r.heading,m=r.label,b=r.open,h=r.disablePointer,y="rtl"===Object(o.i)(c),w=s&&b,v=!w,k=h?null:Object(i.h)("div",{class:f,ref:function(e){return n.arrowEl=e}});return Object(i.h)(i.b,{"aria-hidden":v.toString(),"aria-label":m,"calcite-hydrated-hidden":v,id:this.getId(),role:"dialog"},Object(i.h)("div",{class:(e={},e[o.a.rtl]=y,e[a.a.animation]=!0,e[a.a.animationActive]=w,e),onTransitionEnd:this.transitionEnd},k,Object(i.h)("div",{class:(t={},t[u]=!!l,t[p]=!0,t)},this.renderHeader(),Object(i.h)("div",{class:d},Object(i.h)("slot",null)),l?null:this.renderCloseButton())))},Object.defineProperty(e.prototype,"el",{get:function(){return Object(i.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}},enumerable:!1,configurable:!0}),e}();x.style='@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block;position:absolute;z-index:900;-webkit-transform:scale(0);transform:scale(0)}.calcite-popper-anim{position:relative;z-index:1;-webkit-transition:var(--calcite-popper-transition);transition:var(--calcite-popper-transition);visibility:hidden;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform;opacity:0;-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:0.25rem}:host([data-popper-placement^=bottom]) .calcite-popper-anim{-webkit-transform:translateY(-5px);transform:translateY(-5px)}:host([data-popper-placement^=top]) .calcite-popper-anim{-webkit-transform:translateY(5px);transform:translateY(5px)}:host([data-popper-placement^=left]) .calcite-popper-anim{-webkit-transform:translateX(5px);transform:translateX(5px)}:host([data-popper-placement^=right]) .calcite-popper-anim{-webkit-transform:translateX(-5px);transform:translateX(-5px)}:host([data-popper-placement]) .calcite-popper-anim--active{opacity:1;visibility:visible;-webkit-transform:translate(0);transform:translate(0)}.arrow,.arrow::before{position:absolute;width:8px;height:8px;z-index:-1}.arrow::before{content:"";-webkit-box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--calcite-ui-foreground-1)}:host([data-popper-placement^=top]) .arrow{bottom:-4px}:host([data-popper-placement^=bottom]) .arrow{top:-4px}:host([data-popper-placement^=left]) .arrow{right:-4px}:host([data-popper-placement^=right]) .arrow{left:-4px}:host{pointer-events:none}:host([open]){pointer-events:initial}.calcite-popper-anim{background-color:var(--calcite-ui-foreground-1);border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);border-radius:0.25rem}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}.header{border-width:0;border-bottom-width:1px;border-bottom-color:var(--calcite-ui-border-3);border-style:solid;display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-align:stretch;align-items:stretch;background-color:var(--calcite-ui-foreground-1);-ms-flex-pack:start;justify-content:flex-start}.heading{display:block;-ms-flex:1 1 auto;flex:1 1 auto;font-weight:var(--calcite-font-weight-medium);margin:0;padding-left:1rem;padding-right:1rem;padding-top:0.75rem;padding-bottom:0.75rem;-ms-flex-item-align:center;align-self:center;color:var(--calcite-ui-text-1);font-size:var(--calcite-font-size-0);line-height:1.375;white-space:normal;word-wrap:break-word;word-break:break-word}.container{background-color:var(--calcite-ui-foreground-1);position:relative;display:-ms-flexbox;display:flex;overflow:hidden;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-direction:row;flex-direction:row;height:100%;color:var(--calcite-ui-text-1);border-radius:0.25rem}.container.has-header{-ms-flex-direction:column;flex-direction:column}.content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-item-align:center;align-self:center;height:100%}.calcite--rtl .close-button{border-radius:0.25rem 0 0 0.25rem}::slotted(calcite-panel),::slotted(calcite-flow){height:100%}';var g=function(){function e(e){var t=this;Object(i.j)(this,e),this.selector="["+w+"]",this.getRelatedPopover=function(e){var n,i=t,a=i.selector,r=i.el,s=null===(n=e.closest(a))||void 0===n?void 0:n.getAttribute(w);return Object(o.p)(r,"#"+s)}}return e.prototype.render=function(){return Object(i.h)("slot",null)},e.prototype.closeOpenPopovers=function(e){var t=e.target,n=this.autoClose,i=this.el,a="calcite-popover",r=t.closest(a),s=this.getRelatedPopover(t);n&&!r&&Object(o.l)(i,a).filter((function(e){return e.open&&e!==s})).forEach((function(e){return e.toggle(!1)})),i.contains(t)&&s&&s.toggle()},Object.defineProperty(e.prototype,"el",{get:function(){return Object(i.g)(this)},enumerable:!1,configurable:!0}),e}();g.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block}"},605:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var i=n(4);function a(e){return Math.min(Math.max(Math.ceil(e),1),6)}var r=function(e,t){var n="h"+e.level;return delete e.level,Object(i.h)(n,Object.assign({},e),t)}}}]);
//# sourceMappingURL=265.5b64c697.chunk.js.map