(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[168],{115:function(t,e,a){"use strict";a.r(e),a.d(e,"calcite_slider",(function(){return h}));var i=a(22),n=a(457),r=a(456),s=a(239),l=function(t,e,a,i){function n(t){return t instanceof a?t:new a((function(e){e(t)}))}return new(a||(a=Promise))((function(a,r){function s(t){try{o(i.next(t))}catch(e){r(e)}}function l(t){try{o(i.throw(t))}catch(e){r(e)}}function o(t){t.done?a(t.value):n(t.value).then(s,l)}o((i=i.apply(t,e||[])).next())}))},o=function(t,e){var a,i,n,r,s={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(t){return function(e){return o([t,e])}}function o(r){if(a)throw new TypeError("Generator is already executing.");for(;s;)try{if(a=1,i&&(n=2&r[0]?i.return:r[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,r[1])).done)return n;switch(i=0,n&&(r=[2&r[0],n.value]),r[0]){case 0:case 1:n=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,i=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(n=(n=s.trys).length>0&&n[n.length-1])&&(6===r[0]||2===r[0])){s=0;continue}if(3===r[0]&&(!n||r[1]>n[0]&&r[1]<n[3])){s.label=r[1];break}if(6===r[0]&&s.label<n[1]){s.label=n[1],n=r;break}if(n&&s.label<n[2]){s.label=n[2],s.ops.push(r);break}n[2]&&s.ops.pop(),s.trys.pop();continue}r=e.call(t,s)}catch(l){r=[6,l],i=0}finally{a=n=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}},h=function(){function t(t){Object(i.k)(this,t),this.calciteSliderChange=Object(i.e)(this,"calciteSliderChange",7),this.calciteSliderUpdate=Object(i.e)(this,"calciteSliderUpdate",7),this.disabled=!1,this.min=0,this.max=100,this.value=null,this.snap=!1,this.step=1,this.hasHistogram=!1,this.guid="calcite-slider-"+Object(n.a)(),this.isRange=!1,this.tickValues=[],this.activeProp="value",this.minMaxValueRange=null,this.minValueDragRange=null,this.maxValueDragRange=null}return t.prototype.histogramWatcher=function(t){this.hasHistogram=!!t},t.prototype.componentWillLoad=function(){this.isRange=!(!this.maxValue&&0!==this.maxValue),this.tickValues=this.generateTickValues(),this.value=this.bound(this.value),this.snap&&(this.value=this.getClosestStep(this.value)),this.histogram&&(this.hasHistogram=!0),this.emitChange()},t.prototype.componentDidRender=function(){this.labelHandles&&(this.adjustHostObscuredHandleLabel("value"),this.isRange&&(this.adjustHostObscuredHandleLabel("minValue"),this.precise&&this.isRange&&!this.hasHistogram||this.hyphenateCollidingRangeHandleLabels())),this.hideObscuredBoundingTickLabels()},t.prototype.render=function(){var t=this,e=this.el.id||this.guid,a=this.minValue||this.min,n=this.maxValue||this.value,r=this.isRange?"maxValue":"value",s=this[r],l=100*this.getUnitInterval(a)+"%",o=100-100*this.getUnitInterval(n)+"%",h=Object(i.i)("button",{"aria-label":this.isRange?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":s,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===r},disabled:this.disabled,onBlur:function(){return t.activeProp=null},onFocus:function(){return t.activeProp=r},onMouseDown:function(){return t.dragStart(r)},onTouchStart:function(e){return t.dragStart(r,e)},ref:function(e){return t.maxHandle=e},role:"slider",style:{right:o}},Object(i.i)("div",{class:"handle"})),u=Object(i.i)("button",{"aria-label":this.isRange?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":s,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===r},disabled:this.disabled,onBlur:function(){return t.activeProp=null},onFocus:function(){return t.activeProp=r},onMouseDown:function(){return t.dragStart(r)},onTouchStart:function(e){return t.dragStart(r,e)},ref:function(e){return t.maxHandle=e},role:"slider",style:{right:o}},Object(i.i)("span",{"aria-hidden":"true",class:"handle__label handle__label--value"},s?s.toLocaleString():s),Object(i.i)("span",{"aria-hidden":"true",class:"handle__label handle__label--value static"},s?s.toLocaleString():s),Object(i.i)("span",{"aria-hidden":"true",class:"handle__label handle__label--value transformed"},s?s.toLocaleString():s),Object(i.i)("div",{class:"handle"})),c=Object(i.i)("button",{"aria-label":this.isRange?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":s,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===r},disabled:this.disabled,onBlur:function(){return t.activeProp=null},onFocus:function(){return t.activeProp=r},onMouseDown:function(){return t.dragStart(r)},onTouchStart:function(e){return t.dragStart(r,e)},ref:function(e){return t.maxHandle=e},role:"slider",style:{right:o}},Object(i.i)("div",{class:"handle"}),Object(i.i)("span",{"aria-hidden":"true",class:"handle__label handle__label--value"},s?s.toLocaleString():s),Object(i.i)("span",{"aria-hidden":"true",class:"handle__label handle__label--value static"},s?s.toLocaleString():s),Object(i.i)("span",{"aria-hidden":"true",class:"handle__label handle__label--value transformed"},s?s.toLocaleString():s)),d=Object(i.i)("button",{"aria-label":this.isRange?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":s,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===r,"thumb--precise":!0},disabled:this.disabled,onBlur:function(){return t.activeProp=null},onFocus:function(){return t.activeProp=r},onMouseDown:function(){return t.dragStart(r)},onTouchStart:function(e){return t.dragStart(r,e)},ref:function(e){return t.maxHandle=e},role:"slider",style:{right:o}},Object(i.i)("div",{class:"handle"}),Object(i.i)("div",{class:"handle-extension"})),m=Object(i.i)("button",{"aria-label":this.isRange?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":s,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===r,"thumb--precise":!0},disabled:this.disabled,onBlur:function(){return t.activeProp=null},onFocus:function(){return t.activeProp=r},onMouseDown:function(){return t.dragStart(r)},onTouchStart:function(e){return t.dragStart(r,e)},ref:function(e){return t.maxHandle=e},role:"slider",style:{right:o}},Object(i.i)("div",{class:"handle-extension"}),Object(i.i)("div",{class:"handle"})),b=Object(i.i)("button",{"aria-label":this.isRange?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":s,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===r,"thumb--precise":!0},disabled:this.disabled,onBlur:function(){return t.activeProp=null},onFocus:function(){return t.activeProp=r},onMouseDown:function(){return t.dragStart(r)},onTouchStart:function(e){return t.dragStart(r,e)},ref:function(e){return t.maxHandle=e},role:"slider",style:{right:o}},Object(i.i)("span",{"aria-hidden":"true",class:"handle__label handle__label--value"},s?s.toLocaleString():s),Object(i.i)("span",{"aria-hidden":"true",class:"handle__label handle__label--value static"},s?s.toLocaleString():s),Object(i.i)("span",{"aria-hidden":"true",class:"handle__label handle__label--value transformed"},s?s.toLocaleString():s),Object(i.i)("div",{class:"handle"}),Object(i.i)("div",{class:"handle-extension"})),p=Object(i.i)("button",{"aria-label":this.isRange?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":s,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===r,"thumb--precise":!0},disabled:this.disabled,onBlur:function(){return t.activeProp=null},onFocus:function(){return t.activeProp=r},onMouseDown:function(){return t.dragStart(r)},onTouchStart:function(e){return t.dragStart(r,e)},ref:function(e){return t.maxHandle=e},role:"slider",style:{right:o}},Object(i.i)("div",{class:"handle-extension"}),Object(i.i)("div",{class:"handle"}),Object(i.i)("span",{"aria-hidden":"true",class:"handle__label handle__label--value"},s?s.toLocaleString():s),Object(i.i)("span",{"aria-hidden":"true",class:"handle__label handle__label--value static"},s?s.toLocaleString():s),Object(i.i)("span",{"aria-hidden":"true",class:"handle__label handle__label--value transformed"},s?s.toLocaleString():s)),f=Object(i.i)("button",{"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:!0,"thumb--minValue":!0,"thumb--active":"minValue"===this.dragProp},disabled:this.disabled,onBlur:function(){return t.activeProp=null},onFocus:function(){return t.activeProp="minValue"},onMouseDown:function(){return t.dragStart("minValue")},onTouchStart:function(e){return t.dragStart("minValue",e)},ref:function(e){return t.minHandle=e},role:"slider",style:{left:l}},Object(i.i)("div",{class:"handle"})),g=Object(i.i)("button",{"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:!0,"thumb--minValue":!0,"thumb--active":"minValue"===this.dragProp},disabled:this.disabled,onBlur:function(){return t.activeProp=null},onFocus:function(){return t.activeProp="minValue"},onMouseDown:function(){return t.dragStart("minValue")},onTouchStart:function(e){return t.dragStart("minValue",e)},ref:function(e){return t.minHandle=e},role:"slider",style:{left:l}},Object(i.i)("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue"},this.minValue&&this.minValue.toLocaleString()),Object(i.i)("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue static"},this.minValue&&this.minValue.toLocaleString()),Object(i.i)("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue transformed"},this.minValue&&this.minValue.toLocaleString()),Object(i.i)("div",{class:"handle"})),v=Object(i.i)("button",{"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:!0,"thumb--minValue":!0,"thumb--active":"minValue"===this.dragProp},disabled:this.disabled,onBlur:function(){return t.activeProp=null},onFocus:function(){return t.activeProp="minValue"},onMouseDown:function(){return t.dragStart("minValue")},onTouchStart:function(e){return t.dragStart("minValue",e)},ref:function(e){return t.minHandle=e},role:"slider",style:{left:l}},Object(i.i)("div",{class:"handle"}),Object(i.i)("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue"},this.minValue&&this.minValue.toLocaleString()),Object(i.i)("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue static"},this.minValue&&this.minValue.toLocaleString()),Object(i.i)("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue transformed"},this.minValue&&this.minValue.toLocaleString())),x=Object(i.i)("button",{"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:!0,"thumb--minValue":!0,"thumb--active":"minValue"===this.dragProp,"thumb--precise":!0},disabled:this.disabled,onBlur:function(){return t.activeProp=null},onFocus:function(){return t.activeProp="minValue"},onMouseDown:function(){return t.dragStart("minValue")},onTouchStart:function(e){return t.dragStart("minValue",e)},ref:function(e){return t.minHandle=e},role:"slider",style:{left:l}},Object(i.i)("div",{class:"handle-extension"}),Object(i.i)("div",{class:"handle"})),y=Object(i.i)("button",{"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:!0,"thumb--minValue":!0,"thumb--active":"minValue"===this.dragProp,"thumb--precise":!0},disabled:this.disabled,onBlur:function(){return t.activeProp=null},onFocus:function(){return t.activeProp="minValue"},onMouseDown:function(){return t.dragStart("minValue")},onTouchStart:function(e){return t.dragStart("minValue",e)},ref:function(e){return t.minHandle=e},role:"slider",style:{left:l}},Object(i.i)("div",{class:"handle-extension"}),Object(i.i)("div",{class:"handle"}),Object(i.i)("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue"},this.minValue&&this.minValue.toLocaleString()),Object(i.i)("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue static"},this.minValue&&this.minValue.toLocaleString()),Object(i.i)("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue transformed"},this.minValue&&this.minValue.toLocaleString()));return Object(i.i)(i.b,{id:e,"is-range":this.isRange},this.renderGraph(),Object(i.i)("div",{class:"track"},Object(i.i)("div",{class:"track__range",onMouseDown:function(){return t.dragStart("minMaxValue")},onTouchStart:function(e){return t.dragStart("minMaxValue",e)},style:{left:l,right:o}}),Object(i.i)("div",{class:"ticks"},this.tickValues.map((function(e){return Object(i.i)("span",{class:{tick:!0,"tick--active":e>=a&&e<=n},style:{left:100*t.getUnitInterval(e)+"%"}},t.renderTickLabel(e))})))),!this.precise&&!this.labelHandles&&this.isRange&&f,!this.hasHistogram&&!this.precise&&this.labelHandles&&this.isRange&&g,this.precise&&!this.labelHandles&&this.isRange&&x,this.precise&&this.labelHandles&&this.isRange&&y,this.hasHistogram&&!this.precise&&this.labelHandles&&this.isRange&&v,!this.precise&&!this.labelHandles&&h,!this.hasHistogram&&!this.precise&&this.labelHandles&&u,!this.hasHistogram&&this.precise&&!this.labelHandles&&d,this.hasHistogram&&this.precise&&!this.labelHandles&&m,!this.hasHistogram&&this.precise&&this.labelHandles&&b,this.hasHistogram&&!this.precise&&this.labelHandles&&c,this.hasHistogram&&this.precise&&this.labelHandles&&p)},t.prototype.renderGraph=function(){return this.histogram?Object(i.i)("div",{class:"graph"},Object(i.i)("calcite-graph",{data:this.histogram,height:48,highlightMax:this.isRange?this.maxValue:this.value,highlightMin:this.isRange?this.minValue:this.min,width:300})):null},t.prototype.renderTickLabel=function(t){var e=t===this.min,a=t===this.max,n=Object(i.i)("span",{class:{tick__label:!0,"tick__label--min":e,"tick__label--max":a}},t.toLocaleString());return(!this.labelTicks||this.hasHistogram||this.isRange)&&(!this.labelTicks||this.hasHistogram||!this.isRange||this.precise||this.labelHandles)?this.labelTicks&&!this.hasHistogram&&this.isRange&&!this.precise&&this.labelHandles||this.labelTicks&&!this.hasHistogram&&this.isRange&&this.precise&&(e||a)||this.labelTicks&&this.hasHistogram&&!this.precise&&!this.labelHandles||this.labelTicks&&this.hasHistogram&&this.precise&&!this.labelHandles&&(e||a)||this.labelTicks&&this.hasHistogram&&!this.precise&&this.labelHandles&&(e||a)||this.labelTicks&&this.hasHistogram&&this.precise&&this.labelHandles&&(e||a)?n:null:n},t.prototype.handleLabelFocus=function(t){t.detail.interactedEl!==this.el&&Object(s.h)(t.detail.labelEl,this.el)&&this.setFocus()},t.prototype.keyDownHandler=function(t){var e=this[this.activeProp];switch(Object(r.a)(t.key)){case"ArrowUp":case"ArrowRight":t.preventDefault(),this[this.activeProp]=this.bound(e+this.step,this.activeProp),this.emitChange();break;case"ArrowDown":case"ArrowLeft":t.preventDefault(),this[this.activeProp]=this.bound(e-this.step,this.activeProp),this.emitChange();break;case"PageUp":this.pageStep&&(t.preventDefault(),this[this.activeProp]=this.bound(e+this.pageStep,this.activeProp),this.emitChange());break;case"PageDown":this.pageStep&&(t.preventDefault(),this[this.activeProp]=this.bound(e-this.pageStep,this.activeProp),this.emitChange());break;case"Home":t.preventDefault(),this[this.activeProp]=this.bound(this.min,this.activeProp),this.emitChange();break;case"End":t.preventDefault(),this[this.activeProp]=this.bound(this.max,this.activeProp),this.emitChange()}},t.prototype.clickHandler=function(t){var e=t.clientX||t.pageX,a=this.translate(e),i="value";this.isRange&&(i="minMaxValue"===this.lastDragProp?"minMaxValue":Math.abs(this.maxValue-a)<Math.abs(this.minValue-a)?"maxValue":"minValue");switch(this[i]=this.bound(a,i),this.emitChange(),i){default:case"maxValue":this.maxHandle.focus();break;case"minValue":this.minHandle.focus();break;case"minMaxValue":}},t.prototype.setFocus=function(){return l(this,void 0,void 0,(function(){return o(this,(function(t){return(this.minHandle?this.minHandle:this.maxHandle).focus(),[2]}))}))},t.prototype.generateTickValues=function(){for(var t=[],e=this.min;this.ticks&&e<this.max+this.ticks;)t.push(e),e+=this.ticks;return t},t.prototype.dragStart=function(t,e){e&&e.preventDefault(),this.dragListener&&this.dragEnd(),this.dragProp=t,this.lastDragProp=this.dragProp,this.activeProp=t,this.dragListener=this.dragListener||this.dragUpdate.bind(this),document.addEventListener("mousemove",this.dragListener),document.addEventListener("touchmove",this.dragListener,{capture:!1}),document.addEventListener("mouseup",this.dragEnd.bind(this)),document.addEventListener("touchend",this.dragEnd.bind(this),!1),document.addEventListener("touchcancel",this.dragEnd.bind(this))},t.prototype.dragUpdate=function(t){if(t.preventDefault(),t.stopPropagation(),this.dragProp){var e=this.translate(t.clientX||t.pageX);if(this.isRange&&"minMaxValue"===this.dragProp)if(this.minValueDragRange&&this.maxValueDragRange&&this.minMaxValueRange){var a=e-this.minValueDragRange,i=e+this.maxValueDragRange;i<=this.max&&a>=this.min&&i-a===this.minMaxValueRange&&(this.minValue=this.bound(a,"minValue"),this.maxValue=this.bound(i,"maxValue"))}else this.minValueDragRange=e-this.minValue,this.maxValueDragRange=this.maxValue-e,this.minMaxValueRange=this.maxValue-this.minValue;else this[this.dragProp]=this.bound(e,this.dragProp);this.emitChange()}},t.prototype.emitChange=function(){this.calciteSliderChange.emit(),this.calciteSliderUpdate.emit()},t.prototype.dragEnd=function(){this.dragProp=null,document.removeEventListener("mousemove",this.dragListener),document.removeEventListener("touchmove",this.dragListener),this.minValueDragRange=null,this.maxValueDragRange=null,this.minMaxValueRange=null},t.prototype.bound=function(t,e){return t=Math.min(t,this.max),t=Math.max(t,this.min),"maxValue"===e&&(t=Math.max(t,this.minValue)),"minValue"===e&&(t=Math.min(t,this.maxValue)),t},t.prototype.translate=function(t){var e=this.max-this.min,a=this.el.getBoundingClientRect(),i=(t-a.left)/a.width,n=this.bound(this.min+e*i);return this.snap&&this.step&&(n=this.getClosestStep(n)),n},t.prototype.getClosestStep=function(t){if(t=this.bound(t),this.step){var e=Math.round(t/this.step)*this.step;t=this.bound(e)}return t},t.prototype.getFontSizeForElement=function(t){return Number(window.getComputedStyle(t).getPropertyValue("font-size").match(/\d+/)[0])},t.prototype.getUnitInterval=function(t){t=this.bound(t);var e=this.max-this.min;return(t-this.min)/e},t.prototype.adjustHostObscuredHandleLabel=function(t){var e=this.el.shadowRoot.querySelector(".handle__label--"+t),a=this.el.shadowRoot.querySelector(".handle__label--"+t+".static"),i=this.el.shadowRoot.querySelector(".handle__label--"+t+".transformed"),n=this.getHostOffset(a.getBoundingClientRect().left,a.getBoundingClientRect().right);e.style.transform="translateX("+n+"px)",i.style.transform="translateX("+n+"px)"},t.prototype.hyphenateCollidingRangeHandleLabels=function(){var t=this.el.shadowRoot.querySelector(".handle__label--minValue"),e=this.el.shadowRoot.querySelector(".handle__label--minValue.static"),a=this.el.shadowRoot.querySelector(".handle__label--minValue.transformed"),i=this.getHostOffset(e.getBoundingClientRect().left,e.getBoundingClientRect().right),n=this.el.shadowRoot.querySelector(".handle__label--value"),r=this.el.shadowRoot.querySelector(".handle__label--value.static"),s=this.el.shadowRoot.querySelector(".handle__label--value.transformed"),l=this.getHostOffset(r.getBoundingClientRect().left,r.getBoundingClientRect().right),o=this.getFontSizeForElement(t),h=this.getRangeLabelOverlap(a,s);if(h>0)if(t.classList.add("hyphen"),0===l&&0===i){var u=h/2-o/2;u=-1===Math.sign(u)?Math.abs(u):-u;var c=this.getHostOffset(a.getBoundingClientRect().left+u-o/2,a.getBoundingClientRect().right+u-o/2),d=h/2,m=this.getHostOffset(s.getBoundingClientRect().left+d,s.getBoundingClientRect().right+d);0!==c&&(u+=c,d+=c),0!==m&&(u+=m,d+=m),t.style.transform="translateX("+u+"px)",a.style.transform="translateX("+(u-o/2)+"px)",n.style.transform="translateX("+d+"px)",s.style.transform="translateX("+d+"px)"}else if(0===i||0!==Math.sign(l)&&1!==Math.sign(l)){if(0!==l){u=Math.abs(i)+h-o/2;u=-1===Math.sign(u)?Math.abs(u):-u,t.style.transform="translateX("+u+"px)",a.style.transform="translateX("+(u-o/2)+"px)"}}else t.style.transform="translateX("+(i+o/2)+"px)",n.style.transform="translateX("+(h+l)+"px)",s.style.transform="translateX("+(h+l)+"px)";else t.classList.remove("hyphen"),t.style.transform="translateX("+i+"px)",a.style.transform="translateX("+i+"px)",n.style.transform="translateX("+l+"px)",s.style.transform="translateX("+l+"px)"},t.prototype.hideObscuredBoundingTickLabels=function(){if((this.hasHistogram||this.isRange||this.labelHandles||this.precise)&&(this.hasHistogram||this.isRange||!this.labelHandles||this.precise)&&(this.hasHistogram||this.isRange||this.labelHandles||!this.precise)&&(this.hasHistogram||this.isRange||!this.labelHandles||!this.precise)&&(this.hasHistogram||!this.isRange||this.precise)&&(!this.hasHistogram||this.precise||this.labelHandles)){var t=this.el.shadowRoot.querySelector(".thumb--minValue"),e=this.el.shadowRoot.querySelector(".thumb--value"),a=this.el.shadowRoot.querySelector(".tick__label--min"),i=this.el.shadowRoot.querySelector(".tick__label--max");!t&&e&&a&&i&&(this.isMinTickLabelObscured(a,e)?a.style.opacity="0":a.style.opacity="1",this.isMaxTickLabelObscured(i,e)?i.style.opacity="0":i.style.opacity="1"),t&&e&&a&&i&&(this.isMinTickLabelObscured(a,t)||this.isMinTickLabelObscured(a,e)?a.style.opacity="0":a.style.opacity="1",this.isMaxTickLabelObscured(i,t)||this.isMaxTickLabelObscured(i,e)&&this.hasHistogram?i.style.opacity="0":i.style.opacity="1")}},t.prototype.getHostOffset=function(t,e){var a=this.el.getBoundingClientRect();return t+7<a.left?a.left-t-7:e-7>a.right?7-(e-a.right):0},t.prototype.getRangeLabelOverlap=function(t,e){var a=t.getBoundingClientRect(),i=e.getBoundingClientRect(),n=this.getFontSizeForElement(t),r=a.right+n-i.left;return r>0?r:0},t.prototype.isMinTickLabelObscured=function(t,e){var a=t.getBoundingClientRect();return e.getBoundingClientRect().left<a.right},t.prototype.isMaxTickLabelObscured=function(t,e){var a=t.getBoundingClientRect();return e.getBoundingClientRect().right>a.left},Object.defineProperty(t.prototype,"el",{get:function(){return Object(i.h)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{histogram:["histogramWatcher"]}},enumerable:!1,configurable:!0}),t}();h.style='@charset "UTF-8";@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block;padding:7px 0;margin:7px 0;position:relative}:host([disabled]){opacity:var(--calcite-ui-opacity-disabled);pointer-events:none}:host([disabled]) .track__range,:host([disabled]) .tick--active{background-color:var(--calcite-ui-text-3)}:host([disabled]) .graph .graph-path--highlight{fill:var(--calcite-ui-text-3)}:host([label-handles]),:host([precise]:not([precise=false])){margin-top:21px}:host([label-ticks]),:host([precise]:not([precise=false])[is-range]){margin-bottom:21px}:host([precise]:not([precise=false])[label-handles]){margin-top:35px}:host([precise]:not([precise=false])[label-handles][is-range]){margin-bottom:35px}.thumb{position:absolute;border:none;background:transparent;cursor:pointer;font-family:inherit;z-index:2;outline:none;padding:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-webkit-transform:translate(7px, -8px);transform:translate(7px, -8px)}.thumb .handle__label{font-size:0.75rem;line-height:1.5;font-weight:500;line-height:1;color:var(--calcite-ui-text-2);margin-bottom:5px}.thumb .handle__label.static,.thumb .handle__label.transformed{opacity:0;position:absolute;top:0;bottom:0}.thumb .handle__label--minValue.hyphen::after{content:"\u2014";display:inline-block;width:1em}.thumb .handle{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;height:14px;width:14px;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:100%;background-color:var(--calcite-ui-foreground-1);-webkit-box-shadow:0 0 0 2px var(--calcite-ui-text-3) inset;box-shadow:0 0 0 2px var(--calcite-ui-text-3) inset;-webkit-transition:border 0.25s ease, background-color 0.25s ease, -webkit-box-shadow 0.25s ease;transition:border 0.25s ease, background-color 0.25s ease, -webkit-box-shadow 0.25s ease;transition:border 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease;transition:border 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease, -webkit-box-shadow 0.25s ease}.thumb .handle-extension{width:2px;height:7px;background-color:var(--calcite-ui-text-3)}.thumb:hover .handle{-webkit-box-shadow:0 0 0 3px var(--calcite-ui-brand) inset;box-shadow:0 0 0 3px var(--calcite-ui-brand) inset}.thumb:hover .handle-extension{background-color:var(--calcite-ui-brand)}.thumb:focus .handle{outline:2px solid var(--calcite-ui-brand);outline-offset:2px;outline-offset:2px}.thumb:focus .handle-extension{background-color:var(--calcite-ui-brand)}.thumb--minValue{-webkit-transform:translate(-7px, -8px);transform:translate(-7px, -8px)}:host([label-handles]) .thumb{-webkit-transform:translate(50%, -25px);transform:translate(50%, -25px)}:host([label-handles]) .thumb--minValue{-webkit-transform:translate(-50%, -25px);transform:translate(-50%, -25px)}:host([has-histogram][label-handles]) .thumb{-webkit-transform:translate(50%, -8px);transform:translate(50%, -8px)}:host([has-histogram][label-handles]) .thumb .handle__label{margin-bottom:unset;margin-top:5px}:host([has-histogram][label-handles]) .thumb--minValue{-webkit-transform:translate(-50%, -8px);transform:translate(-50%, -8px)}:host([precise]:not([precise=false])) .thumb{-webkit-transform:translate(7px, -21px);transform:translate(7px, -21px)}:host([precise]:not([precise=false])) .thumb--minValue{-webkit-transform:translate(-7px, -2px);transform:translate(-7px, -2px)}:host([precise]:not([precise=false])) .thumb--minValue .handle__label{margin-bottom:unset;margin-top:5px}:host([has-histogram][precise]:not([precise=false])) .thumb{-webkit-transform:translate(7px, -2px);transform:translate(7px, -2px)}:host([has-histogram][precise]:not([precise=false])) .thumb--minValue{-webkit-transform:translate(-50%, -2px);transform:translate(-50%, -2px)}:host([ticks][precise]:not([precise=false])) .thumb{-webkit-transform:translate(7px, -20px);transform:translate(7px, -20px)}:host([ticks][precise]:not([precise=false])) .thumb--minValue{-webkit-transform:translate(-7px, -3px);transform:translate(-7px, -3px)}:host([has-histogram][ticks][precise]:not([precise=false])) .thumb{-webkit-transform:translate(7px, -3px);transform:translate(7px, -3px)}:host([has-histogram][ticks][precise]:not([precise=false])) .thumb--minValue{-webkit-transform:translate(-50%, -3px);transform:translate(-50%, -3px)}:host([label-handles][precise]:not([precise=false])) .thumb{-webkit-transform:translate(50%, -38px);transform:translate(50%, -38px)}:host([label-handles][precise]:not([precise=false])) .thumb--minValue{-webkit-transform:translate(-50%, -2px);transform:translate(-50%, -2px)}:host([has-histogram][label-handles][precise]:not([precise=false])) .thumb{-webkit-transform:translate(50%, -2px);transform:translate(50%, -2px)}:host([has-histogram][label-handles][precise]:not([precise=false])) .thumb--minValue{-webkit-transform:translate(-50%, -2px);transform:translate(-50%, -2px)}:host([ticks][label-handles][precise]:not([precise=false])) .thumb{-webkit-transform:translate(50%, -37px);transform:translate(50%, -37px)}:host([ticks][label-handles][precise]:not([precise=false])) .thumb--minValue{-webkit-transform:translate(-50%, -3px);transform:translate(-50%, -3px)}:host([has-histogram][ticks][label-handles][precise]:not([precise=false])) .thumb{-webkit-transform:translate(50%, -3px);transform:translate(50%, -3px)}:host([has-histogram][ticks][label-handles][precise]:not([precise=false])) .thumb--minValue{-webkit-transform:translate(-50%, -3px);transform:translate(-50%, -3px)}.thumb:focus,.thumb--active{z-index:3}.thumb:focus .handle,.thumb--active .handle{background-color:var(--calcite-ui-brand);-webkit-box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.16)}.thumb:hover.thumb--precise:after,.thumb:focus.thumb--precise:after,.thumb--active.thumb--precise:after{background-color:var(--calcite-ui-brand)}.track{height:2px;border-radius:0;z-index:1;background-color:var(--calcite-ui-border-2);-webkit-transition:all 250ms ease-in;transition:all 250ms ease-in;position:relative}.track__range{position:absolute;top:0;height:2px;background-color:var(--calcite-ui-brand)}:host([is-range]) .track__range:hover{cursor:ew-resize}:host([is-range]) .track__range:after{content:"";position:absolute;top:-5px;width:100%;height:14px}.tick{position:absolute;top:-2px;width:2px;height:4px;left:var(--calcite-ui-border-1-offset);margin-left:-2px;border:1px solid var(--calcite-ui-foreground-1);background-color:var(--calcite-ui-border-1)}.tick--active{background-color:var(--calcite-ui-brand)}.tick__label{position:absolute;font-size:0.75rem;line-height:1.5;font-weight:500;color:var(--calcite-ui-text-2);width:4em;margin:14px -2em;text-align:center;display:block;pointer-events:none}.tick__label--min{left:0;margin:14px -3px;text-align:left;-webkit-transition:opacity 150ms;transition:opacity 150ms}.tick__label--max{left:unset;right:0;margin:14px -3px;text-align:right;-webkit-transition:opacity 50ms;transition:opacity 50ms}:host([has-histogram][label-handles]) .tick__label--min,:host([has-histogram][label-handles]) .tick__label--max{margin:6px -3px;font-weight:300;color:var(--calcite-ui-text-3)}:host([has-histogram][precise]:not([precise=false])) .tick__label--min,:host([has-histogram][precise]:not([precise=false])) .tick__label--max{margin:6px -3px;font-weight:300;color:var(--calcite-ui-text-3)}.graph{width:100%;height:48px;position:relative;color:var(--calcite-ui-foreground-2)}.graph svg{position:absolute;width:100%;height:48px}.graph .graph-path--highlight{fill:var(--calcite-ui-brand);opacity:0.25}'},239:function(t,e,a){"use strict";a.d(e,"a",(function(){return l})),a.d(e,"b",(function(){return h})),a.d(e,"c",(function(){return c})),a.d(e,"d",(function(){return m})),a.d(e,"e",(function(){return d})),a.d(e,"f",(function(){return u})),a.d(e,"g",(function(){return o})),a.d(e,"h",(function(){return b})),a.d(e,"i",(function(){return s})),a.d(e,"j",(function(){return p}));var i=function(t,e,a,i){function n(t){return t instanceof a?t:new a((function(e){e(t)}))}return new(a||(a=Promise))((function(a,r){function s(t){try{o(i.next(t))}catch(e){r(e)}}function l(t){try{o(i.throw(t))}catch(e){r(e)}}function o(t){t.done?a(t.value):n(t.value).then(s,l)}o((i=i.apply(t,e||[])).next())}))},n=function(t,e){var a,i,n,r,s={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(t){return function(e){return o([t,e])}}function o(r){if(a)throw new TypeError("Generator is already executing.");for(;s;)try{if(a=1,i&&(n=2&r[0]?i.return:r[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,r[1])).done)return n;switch(i=0,n&&(r=[2&r[0],n.value]),r[0]){case 0:case 1:n=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,i=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(n=(n=s.trys).length>0&&n[n.length-1])&&(6===r[0]||2===r[0])){s=0;continue}if(3===r[0]&&(!n||r[1]>n[0]&&r[1]<n[3])){s.label=r[1];break}if(6===r[0]&&s.label<n[1]){s.label=n[1],n=r;break}if(n&&s.label<n[2]){s.label=n[2],s.ops.push(r);break}n[2]&&s.ops.pop(),s.trys.pop();continue}r=e.call(t,s)}catch(l){r=[6,l],i=0}finally{a=n=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}},r=function(t,e){for(var a=0,i=e.length,n=t.length;a<i;a++,n++)t[n]=e[a];return t};function s(t){return Array.isArray(t)?t:Array.from(t)}function l(t,e){return Array.from(t.attributes).filter((function(t){return t&&!e.includes(t.name)})).reduce((function(t,e){var a,i=e.name,n=e.value;return Object.assign(Object.assign({},t),((a={})[i]=n,a))}),{})}function o(t){return h(t,"dir","ltr",!0)}function h(t,e,a,i){void 0===i&&(i=!1);var n="["+e+"]",r=i?function(t,e){void 0===e&&(e=this);function a(e){if(!e||e===document||e===window)return null;var i=e.closest(t);return i||a(e.getRootNode().host)}return a(e)}(n,t):t.closest(n);return r?r.getAttribute(e):a}function u(t){return i(this,void 0,void 0,(function(){return n(this,(function(e){return t?("function"===typeof t.setFocus?t.setFocus():t.focus(),[2]):[2]}))}))}function c(t,e,a){var i='[slot="'+e+'"]';return(null===a||void 0===a?void 0:a.all)?function(t,e,a){var i=Array.from(t.querySelectorAll(e));i=a&&!1===a.direct?i:i.filter((function(e){return e.parentElement===t}));var n=null===a||void 0===a?void 0:a.selector;return n?i.map((function(t){return Array.from(t.querySelectorAll(n))})).reduce((function(t,e){return r(r([],t),e)}),[]).filter((function(t){return!!t})):i}(t,i,a):function(t,e,a){var i=t.querySelector(e);i=a&&!1===a.direct||(null===i||void 0===i?void 0:i.parentElement)===t?i:null;var n=null===a||void 0===a?void 0:a.selector;return n?i.querySelector(n):i}(t,i,a)}function d(t,e){return Array.from(t.children).filter((function(t){return t.matches(e)}))}function m(t,e){var a=null===t||void 0===t?void 0:t.getAttribute(e);return a&&document.getElementById(a)||null}function b(t,e){return t.contains(e)}function p(t,e,a){return"string"===typeof e&&""!==e?e:""===e?t[a]:void 0}},456:function(t,e,a){"use strict";function i(t,e){var a={Up:"ArrowUp",Down:"ArrowDown",Left:"ArrowLeft",Right:"ArrowRight",Spacebar:" ",Esc:"Escape"}[t]||t,i="rtl"===e;return i&&"ArrowLeft"===a?"ArrowRight":i&&"ArrowRight"===a?"ArrowLeft":a}a.d(e,"a",(function(){return i}))},457:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var i=function(){return[2,1,1,1,3].map((function(t){for(var e="",a=0;a<t;a++)e+=(65536*(1+Math.random())|0).toString(16).substring(1);return e})).join("-")}}}]);
//# sourceMappingURL=168.58b6f893.chunk.js.map