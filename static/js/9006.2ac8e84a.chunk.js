/*! For license information please see 9006.2ac8e84a.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[9006],{39006:(e,t,i)=>{i.r(t),i.d(t,{calcite_option:()=>s,calcite_option_group:()=>d,calcite_select:()=>v});var a=i(97164),n=i(4620),c=i(90110),l=i(28634),o=i(34396),r=i(55716);i(40178);const s=class{constructor(e){(0,a.r)(this,e),this.calciteInternalOptionChange=(0,a.c)(this,"calciteInternalOptionChange",6),this.disabled=!1,this.mutationObserver=(0,n.c)("mutation",(()=>{this.ensureTextContentDependentProps(),this.calciteInternalOptionChange.emit()}))}handlePropChange(e,t,i){"label"!==i&&"value"!==i||this.ensureTextContentDependentProps(),this.calciteInternalOptionChange.emit()}ensureTextContentDependentProps(){const{el:{textContent:e}}=this;this.label&&this.label!==this.internallySetLabel||(this.label=e,this.internallySetLabel=e),this.value&&this.value!==this.internallySetValue||(this.value=e,this.internallySetValue=e)}connectedCallback(){var e;this.ensureTextContentDependentProps(),null===(e=this.mutationObserver)||void 0===e||e.observe(this.el,{attributeFilter:["label","value"],characterData:!0,childList:!0,subtree:!0})}disconnectedCallback(){var e;null===(e=this.mutationObserver)||void 0===e||e.disconnect()}render(){return(0,a.h)("slot",null,this.label)}get el(){return(0,a.g)(this)}static get watchers(){return{disabled:["handlePropChange"],label:["handlePropChange"],selected:["handlePropChange"],value:["handlePropChange"]}}};s.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:block}";const d=class{constructor(e){(0,a.r)(this,e),this.calciteInternalOptionGroupChange=(0,a.c)(this,"calciteInternalOptionGroupChange",6),this.disabled=!1}handlePropChange(){this.calciteInternalOptionGroupChange.emit()}render(){return(0,a.h)(a.F,null,(0,a.h)("div",null,this.label),(0,a.h)("slot",null))}static get watchers(){return{disabled:["handlePropChange"],label:["handlePropChange"]}}};d.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:block}";const m="icon",h="icon-container",p="select";function u(e){return"CALCITE-OPTION"===e.tagName}const v=class{constructor(e){(0,a.r)(this,e),this.calciteSelectChange=(0,a.c)(this,"calciteSelectChange",6),this.disabled=!1,this.required=!1,this.scale="m",this.value=null,this.width="auto",this.componentToNativeEl=new Map,this.mutationObserver=(0,n.c)("mutation",(()=>this.populateInternalSelect())),this.handleInternalSelectChange=()=>{const e=this.selectEl.selectedOptions[0];this.selectFromNativeOption(e),requestAnimationFrame((()=>this.emitChangeEvent()))},this.populateInternalSelect=()=>{const e=Array.from(this.el.children).filter((e=>"CALCITE-OPTION"===e.tagName||"CALCITE-OPTION-GROUP"===e.tagName));this.clearInternalSelect(),e.forEach((e=>{var t;return null===(t=this.selectEl)||void 0===t?void 0:t.append(this.toNativeElement(e))}))},this.storeSelectRef=e=>{this.selectEl=e,this.populateInternalSelect();const t=this.selectEl.selectedOptions[0];this.selectFromNativeOption(t)},this.emitChangeEvent=()=>{this.calciteSelectChange.emit()}}valueHandler(e){this.el.querySelectorAll("calcite-option").forEach((t=>t.selected=t.value===e))}selectedOptionHandler(e){this.value=null===e||void 0===e?void 0:e.value}connectedCallback(){var e;const{el:t}=this;null===(e=this.mutationObserver)||void 0===e||e.observe(t,{subtree:!0,childList:!0}),(0,l.c)(this),(0,o.c)(this)}disconnectedCallback(){var e;null===(e=this.mutationObserver)||void 0===e||e.disconnect(),(0,l.d)(this),(0,o.d)(this)}componentDidLoad(){var e,t;(0,o.a)(this,null!==(t=null===(e=this.selectedOption)||void 0===e?void 0:e.value)&&void 0!==t?t:"")}componentDidRender(){(0,r.u)(this)}async setFocus(){(0,c.f)(this.selectEl)}handleOptionOrGroupChange(e){e.stopPropagation();const t=e.target,i=this.componentToNativeEl.get(t);i&&(this.updateNativeElement(t,i),u(t)&&t.selected&&(this.deselectAllExcept(t),this.selectedOption=t))}onLabelClick(){this.setFocus()}updateNativeElement(e,t){if(t.disabled=e.disabled,t.label=e.label,u(e)){const i=t;i.selected=e.selected,i.value=e.value,i.innerText=e.label}}clearInternalSelect(){this.componentToNativeEl.forEach((e=>e.remove())),this.componentToNativeEl.clear()}selectFromNativeOption(e){if(!e)return;let t;this.componentToNativeEl.forEach(((i,a)=>{u(a)&&i===e&&(a.selected=!0,t=a,this.deselectAllExcept(a))})),t&&(this.selectedOption=t)}toNativeElement(e){if(u(e)){const t=document.createElement("option");return this.updateNativeElement(e,t),this.componentToNativeEl.set(e,t),t}if(function(e){return"CALCITE-OPTION-GROUP"===e.tagName}(e)){const t=document.createElement("optgroup");return this.updateNativeElement(e,t),Array.from(e.children).forEach((i=>{const a=this.toNativeElement(i);t.append(a),this.componentToNativeEl.set(e,a)})),this.componentToNativeEl.set(e,t),t}throw new Error("unsupported element child provided")}deselectAllExcept(e){this.el.querySelectorAll("calcite-option").forEach((t=>{t!==e&&(t.selected=!1)}))}renderChevron(){return(0,a.h)("div",{class:h},(0,a.h)("calcite-icon",{class:m,icon:"chevron-down",scale:"s"}))}render(){return(0,a.h)(a.F,null,(0,a.h)("select",{"aria-label":this.label,class:p,disabled:this.disabled,onChange:this.handleInternalSelectChange,ref:this.storeSelectRef},(0,a.h)("slot",null)),this.renderChevron(),(0,a.h)(o.H,{component:this}))}get el(){return(0,a.g)(this)}static get watchers(){return{value:["valueHandler"],selectedOption:["selectedOptionHandler"]}}};v.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{position:relative;display:flex;align-items:stretch;inline-size:var(--select-width)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]){block-size:1.5rem;--calcite-select-font-size:var(--calcite-font-size--2);--calcite-select-spacing-inline:0.5rem 2rem}:host([scale=s]) .icon-container{padding-inline:0.5rem}:host([scale=m]){block-size:2rem;--calcite-select-font-size:var(--calcite-font-size--1);--calcite-select-spacing-inline:0.75rem 2.5rem}:host([scale=m]) .icon-container{padding-inline:0.75rem}:host([scale=l]){block-size:44px;--calcite-select-font-size:var(--calcite-font-size-0);--calcite-select-spacing-inline:1rem 3rem}:host([scale=l]) .icon-container{padding-inline:1rem}:host([width=auto]){inline-size:auto}:host([width=half]){inline-size:50%}:host([width=full]){inline-size:100%}.select{margin:0px;box-sizing:border-box;inline-size:100%;cursor:pointer;-webkit-appearance:none;appearance:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-radius:0px;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);font-family:inherit;color:var(--calcite-ui-text-2);outline-color:transparent;font-size:var(--calcite-select-font-size);padding-inline:var(--calcite-select-spacing-inline);border-inline-end-width:0px}.select:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.select:hover{background-color:var(--calcite-ui-foreground-2)}select:disabled{border-color:var(--calcite-ui-border-input);--tw-bg-opacity:1}.icon-container{pointer-events:none;position:absolute;inset-block:0px;display:flex;align-items:center;border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:transparent;color:var(--calcite-ui-text-2);inset-inline-end:0px;border-inline-width:0px 1px}.select:focus~.icon-container{border-color:transparent}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}"},4620:(e,t,i)=>{function a(e,t,i){const a=function(e){class t extends window.MutationObserver{constructor(e){super(e),this.observedEntry=[],this.callback=e}observe(e,t){return this.observedEntry.push({target:e,options:t}),super.observe(e,t)}unobserve(e){const t=this.observedEntry.filter((t=>t.target!==e));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),t.forEach((e=>this.observe(e.target,e.options)))}}return"intersection"===e?window.IntersectionObserver:"mutation"===e?t:window.ResizeObserver}(e);return new a(t,i)}i.d(t,{c:()=>a})}}]);
//# sourceMappingURL=9006.2ac8e84a.chunk.js.map