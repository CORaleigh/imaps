(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[41],{1025:function(e,t,n){"use strict";var o=n(131),r=(n(129),n(138)),i=(n(130),n(137),n(134)),s=n(133),a=(n(132),n(135),n(136),n(161)),c=n(482),d=(n(164),n(182)),l=n(207);function p(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function u(e){if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function f(e){var t=u(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function h(e){return e instanceof u(e).Element||e instanceof Element}function b(e){return e instanceof u(e).HTMLElement||e instanceof HTMLElement}function m(e){return e?(e.nodeName||"").toLowerCase():null}function v(e){return((h(e)?e.ownerDocument:e.document)||window.document).documentElement}function O(e){return p(v(e)).left+f(e).scrollLeft}function g(e){return u(e).getComputedStyle(e)}function y(e){var t=g(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+o)}function j(e,t,n){void 0===n&&(n=!1);var o=v(t),r=p(e),i=b(t),s={scrollLeft:0,scrollTop:0},a={x:0,y:0};return(i||!i&&!n)&&(("body"!==m(t)||y(o))&&(s=function(e){return e!==u(e)&&b(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:f(e);var t}(t)),b(t)?((a=p(t)).x+=t.clientLeft,a.y+=t.clientTop):o&&(a.x=O(o))),{x:r.left+s.scrollLeft-a.x,y:r.top+s.scrollTop-a.y,width:r.width,height:r.height}}function w(e){return{x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}}function _(e){return"html"===m(e)?e:e.assignedSlot||e.parentNode||e.host||v(e)}function x(e){return["html","body","#document"].indexOf(m(e))>=0?e.ownerDocument.body:b(e)&&y(e)?e:x(_(e))}function C(e,t){void 0===t&&(t=[]);var n=x(e),o="body"===m(n),r=u(n),i=o?[r].concat(r.visualViewport||[],y(n)?n:[]):n,s=t.concat(i);return o?s:s.concat(C(_(i)))}function k(e){return["table","td","th"].indexOf(m(e))>=0}function M(e){if(!b(e)||"fixed"===g(e).position)return null;var t=e.offsetParent;if(t){var n=v(t);if("body"===m(t)&&"static"===g(t).position&&"static"!==g(n).position)return n}return t}function E(e){for(var t=u(e),n=M(e);n&&k(n)&&"static"===g(n).position;)n=M(n);return n&&"body"===m(n)&&"static"===g(n).position?t:n||function(e){for(var t=_(e);b(t)&&["html","body"].indexOf(m(t))<0;){var n=g(t);if("none"!==n.transform||"none"!==n.perspective||n.willChange&&"auto"!==n.willChange)return t;t=t.parentNode}return null}(e)||t}var P="top",I="bottom",D="right",N="left",A="auto",H=[P,I,D,N],L="start",B="end",S="viewport",W="popper",R=H.reduce((function(e,t){return e.concat([t+"-"+L,t+"-"+B])}),[]),T=[].concat(H,[A]).reduce((function(e,t){return e.concat([t,t+"-"+L,t+"-"+B])}),[]),F=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function U(e){var t=new Map,n=new Set,o=[];function r(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var o=t.get(e);o&&r(o)}})),o.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||r(e)})),o}function $(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var q={placement:"bottom",modifiers:[],strategy:"absolute"};function z(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function V(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,o=void 0===n?[]:n,r=t.defaultOptions,i=void 0===r?q:r;return function(e,t,n){void 0===n&&(n=i);var r={placement:"bottom",orderedModifiers:[],options:Object.assign(Object.assign({},q),i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},s=[],a=!1,c={state:r,setOptions:function(n){d(),r.options=Object.assign(Object.assign(Object.assign({},i),r.options),n),r.scrollParents={reference:h(e)?C(e):e.contextElement?C(e.contextElement):[],popper:C(t)};var a=function(e){var t=U(e);return F.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign(Object.assign(Object.assign({},n),t),{},{options:Object.assign(Object.assign({},n.options),t.options),data:Object.assign(Object.assign({},n.data),t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(o,r.options.modifiers)));return r.orderedModifiers=a.filter((function(e){return e.enabled})),r.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,o=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var a=i({state:r,name:t,instance:c,options:o}),d=function(){};s.push(a||d)}})),c.update()},forceUpdate:function(){if(!a){var e=r.elements,t=e.reference,n=e.popper;if(z(t,n)){r.rects={reference:j(t,E(n),"fixed"===r.options.strategy),popper:w(n)},r.reset=!1,r.placement=r.options.placement,r.orderedModifiers.forEach((function(e){return r.modifiersData[e.name]=Object.assign({},e.data)}));for(var o=0;o<r.orderedModifiers.length;o++)if(!0!==r.reset){var i=r.orderedModifiers[o],s=i.fn,d=i.options,l=void 0===d?{}:d,p=i.name;"function"===typeof s&&(r=s({state:r,options:l,name:p,instance:c})||r)}else r.reset=!1,o=-1}}},update:$((function(){return new Promise((function(e){c.forceUpdate(),e(r)}))})),destroy:function(){d(),a=!0}};if(!z(e,t))return c;function d(){s.forEach((function(e){return e()})),s=[]}return c.setOptions(n).then((function(e){!a&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}var G={passive:!0};function J(e){return e.split("-")[0]}function K(e){return e.split("-")[1]}function X(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Y(e){var t,n=e.reference,o=e.element,r=e.placement,i=r?J(r):null,s=r?K(r):null,a=n.x+n.width/2-o.width/2,c=n.y+n.height/2-o.height/2;switch(i){case P:t={x:a,y:n.y-o.height};break;case I:t={x:a,y:n.y+n.height};break;case D:t={x:n.x+n.width,y:c};break;case N:t={x:n.x-o.width,y:c};break;default:t={x:n.x,y:n.y}}var d=i?X(i):null;if(null!=d){var l="y"===d?"height":"width";switch(s){case L:t[d]=t[d]-(n[l]/2-o[l]/2);break;case B:t[d]=t[d]+(n[l]/2-o[l]/2)}}return t}var Q={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Z(e){var t,n=e.popper,o=e.popperRect,r=e.placement,i=e.offsets,s=e.position,a=e.gpuAcceleration,c=e.adaptive,d=e.roundOffsets?function(e){var t=e.x,n=e.y,o=window.devicePixelRatio||1;return{x:Math.round(t*o)/o||0,y:Math.round(n*o)/o||0}}(i):i,l=d.x,p=void 0===l?0:l,f=d.y,h=void 0===f?0:f,b=i.hasOwnProperty("x"),m=i.hasOwnProperty("y"),O=N,g=P,y=window;if(c){var j=E(n);j===u(n)&&(j=v(n)),r===P&&(g=I,h-=j.clientHeight-o.height,h*=a?1:-1),r===N&&(O=D,p-=j.clientWidth-o.width,p*=a?1:-1)}var w,_=Object.assign({position:s},c&&Q);return a?Object.assign(Object.assign({},_),{},((w={})[g]=m?"0":"",w[O]=b?"0":"",w.transform=(y.devicePixelRatio||1)<2?"translate("+p+"px, "+h+"px)":"translate3d("+p+"px, "+h+"px, 0)",w)):Object.assign(Object.assign({},_),{},((t={})[g]=m?h+"px":"",t[O]=b?p+"px":"",t.transform="",t))}var ee={left:"right",right:"left",bottom:"top",top:"bottom"};function te(e){return e.replace(/left|right|bottom|top/g,(function(e){return ee[e]}))}var ne={start:"end",end:"start"};function oe(e){return e.replace(/start|end/g,(function(e){return ne[e]}))}function re(e,t){var n,o=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(o&&((n=o)instanceof u(n).ShadowRoot||n instanceof ShadowRoot)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function ie(e){return Object.assign(Object.assign({},e),{},{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function se(e,t){return t===S?ie(function(e){var t=u(e),n=v(e),o=t.visualViewport,r=n.clientWidth,i=n.clientHeight,s=0,a=0;return o&&(r=o.width,i=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=o.offsetLeft,a=o.offsetTop)),{width:r,height:i,x:s+O(e),y:a}}(e)):b(t)?function(e){var t=p(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ie(function(e){var t=v(e),n=f(e),o=e.ownerDocument.body,r=Math.max(t.scrollWidth,t.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),i=Math.max(t.scrollHeight,t.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-n.scrollLeft+O(e),a=-n.scrollTop;return"rtl"===g(o||t).direction&&(s+=Math.max(t.clientWidth,o?o.clientWidth:0)-r),{width:r,height:i,x:s,y:a}}(v(e)))}function ae(e,t,n){var o="clippingParents"===t?function(e){var t=C(_(e)),n=["absolute","fixed"].indexOf(g(e).position)>=0&&b(e)?E(e):e;return h(n)?t.filter((function(e){return h(e)&&re(e,n)&&"body"!==m(e)})):[]}(e):[].concat(t),r=[].concat(o,[n]),i=r[0],s=r.reduce((function(t,n){var o=se(e,n);return t.top=Math.max(o.top,t.top),t.right=Math.min(o.right,t.right),t.bottom=Math.min(o.bottom,t.bottom),t.left=Math.max(o.left,t.left),t}),se(e,i));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function ce(e){return Object.assign(Object.assign({},{top:0,right:0,bottom:0,left:0}),e)}function de(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function le(e,t){void 0===t&&(t={});var n=t,o=n.placement,r=void 0===o?e.placement:o,i=n.boundary,s=void 0===i?"clippingParents":i,a=n.rootBoundary,c=void 0===a?S:a,d=n.elementContext,l=void 0===d?W:d,u=n.altBoundary,f=void 0!==u&&u,b=n.padding,m=void 0===b?0:b,O=ce("number"!==typeof m?m:de(m,H)),g=l===W?"reference":W,y=e.elements.reference,j=e.rects.popper,w=e.elements[f?g:l],_=ae(h(w)?w:w.contextElement||v(e.elements.popper),s,c),x=p(y),C=Y({reference:x,element:j,strategy:"absolute",placement:r}),k=ie(Object.assign(Object.assign({},j),C)),M=l===W?k:x,E={top:_.top-M.top+O.top,bottom:M.bottom-_.bottom+O.bottom,left:_.left-M.left+O.left,right:M.right-_.right+O.right},N=e.modifiersData.offset;if(l===W&&N){var A=N[r];Object.keys(E).forEach((function(e){var t=[D,I].indexOf(e)>=0?1:-1,n=[P,I].indexOf(e)>=0?"y":"x";E[e]+=A[n]*t}))}return E}function pe(e,t,n){return Math.max(e,Math.min(t,n))}function ue(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function fe(e){return[P,D,I,N].some((function(t){return e[t]>=0}))}var he=V({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,o=e.options,r=o.scroll,i=void 0===r||r,s=o.resize,a=void 0===s||s,c=u(t.elements.popper),d=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&d.forEach((function(e){e.addEventListener("scroll",n.update,G)})),a&&c.addEventListener("resize",n.update,G),function(){i&&d.forEach((function(e){e.removeEventListener("scroll",n.update,G)})),a&&c.removeEventListener("resize",n.update,G)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=Y({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,o=n.gpuAcceleration,r=void 0===o||o,i=n.adaptive,s=void 0===i||i,a=n.roundOffsets,c=void 0===a||a,d={placement:J(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign(Object.assign({},t.styles.popper),Z(Object.assign(Object.assign({},d),{},{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign(Object.assign({},t.styles.arrow),Z(Object.assign(Object.assign({},d),{},{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},o=t.attributes[e]||{},r=t.elements[e];b(r)&&m(r)&&(Object.assign(r.style,n),Object.keys(o).forEach((function(e){var t=o[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var o=t.elements[e],r=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});b(o)&&m(o)&&(Object.assign(o.style,i),Object.keys(r).forEach((function(e){o.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.offset,i=void 0===r?[0,0]:r,s=T.reduce((function(e,n){return e[n]=function(e,t,n){var o=J(e),r=[N,P].indexOf(o)>=0?-1:1,i="function"===typeof n?n(Object.assign(Object.assign({},t),{},{placement:e})):n,s=i[0],a=i[1];return s=s||0,a=(a||0)*r,[N,D].indexOf(o)>=0?{x:a,y:s}:{x:s,y:a}}(n,t.rects,i),e}),{}),a=s[t.placement],c=a.x,d=a.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=d),t.modifiersData[o]=s}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var r=n.mainAxis,i=void 0===r||r,s=n.altAxis,a=void 0===s||s,c=n.fallbackPlacements,d=n.padding,l=n.boundary,p=n.rootBoundary,u=n.altBoundary,f=n.flipVariations,h=void 0===f||f,b=n.allowedAutoPlacements,m=t.options.placement,v=J(m),O=c||(v===m||!h?[te(m)]:function(e){if(J(e)===A)return[];var t=te(e);return[oe(e),t,oe(t)]}(m)),g=[m].concat(O).reduce((function(e,n){return e.concat(J(n)===A?function(e,t){void 0===t&&(t={});var n=t,o=n.placement,r=n.boundary,i=n.rootBoundary,s=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,d=void 0===c?T:c,l=K(o),p=l?a?R:R.filter((function(e){return K(e)===l})):H,u=p.filter((function(e){return d.indexOf(e)>=0}));0===u.length&&(u=p);var f=u.reduce((function(t,n){return t[n]=le(e,{placement:n,boundary:r,rootBoundary:i,padding:s})[J(n)],t}),{});return Object.keys(f).sort((function(e,t){return f[e]-f[t]}))}(t,{placement:n,boundary:l,rootBoundary:p,padding:d,flipVariations:h,allowedAutoPlacements:b}):n)}),[]),y=t.rects.reference,j=t.rects.popper,w=new Map,_=!0,x=g[0],C=0;C<g.length;C++){var k=g[C],M=J(k),E=K(k)===L,B=[P,I].indexOf(M)>=0,S=B?"width":"height",W=le(t,{placement:k,boundary:l,rootBoundary:p,altBoundary:u,padding:d}),F=B?E?D:N:E?I:P;y[S]>j[S]&&(F=te(F));var U=te(F),$=[];if(i&&$.push(W[M]<=0),a&&$.push(W[F]<=0,W[U]<=0),$.every((function(e){return e}))){x=k,_=!1;break}w.set(k,$)}if(_)for(var q=function(e){var t=g.find((function(t){var n=w.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return x=t,"break"},z=h?3:1;z>0;z--){if("break"===q(z))break}t.placement!==x&&(t.modifiersData[o]._skip=!0,t.placement=x,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.mainAxis,i=void 0===r||r,s=n.altAxis,a=void 0!==s&&s,c=n.boundary,d=n.rootBoundary,l=n.altBoundary,p=n.padding,u=n.tether,f=void 0===u||u,h=n.tetherOffset,b=void 0===h?0:h,m=le(t,{boundary:c,rootBoundary:d,padding:p,altBoundary:l}),v=J(t.placement),O=K(t.placement),g=!O,y=X(v),j="x"===y?"y":"x",_=t.modifiersData.popperOffsets,x=t.rects.reference,C=t.rects.popper,k="function"===typeof b?b(Object.assign(Object.assign({},t.rects),{},{placement:t.placement})):b,M={x:0,y:0};if(_){if(i){var A="y"===y?P:N,H="y"===y?I:D,B="y"===y?"height":"width",S=_[y],W=_[y]+m[A],R=_[y]-m[H],T=f?-C[B]/2:0,F=O===L?x[B]:C[B],U=O===L?-C[B]:-x[B],$=t.elements.arrow,q=f&&$?w($):{width:0,height:0},z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},V=z[A],G=z[H],Y=pe(0,x[B],q[B]),Q=g?x[B]/2-T-Y-V-k:F-Y-V-k,Z=g?-x[B]/2+T+Y+G+k:U+Y+G+k,ee=t.elements.arrow&&E(t.elements.arrow),te=ee?"y"===y?ee.clientTop||0:ee.clientLeft||0:0,ne=t.modifiersData.offset?t.modifiersData.offset[t.placement][y]:0,oe=_[y]+Q-ne-te,re=_[y]+Z-ne,ie=pe(f?Math.min(W,oe):W,S,f?Math.max(R,re):R);_[y]=ie,M[y]=ie-S}if(a){var se="x"===y?P:N,ae="x"===y?I:D,ce=_[j],de=pe(ce+m[se],ce,ce-m[ae]);_[j]=de,M[j]=de-ce}t.modifiersData[o]=M}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,o=e.name,r=n.elements.arrow,i=n.modifiersData.popperOffsets,s=J(n.placement),a=X(s),c=[N,D].indexOf(s)>=0?"height":"width";if(r&&i){var d=n.modifiersData[o+"#persistent"].padding,l=w(r),p="y"===a?P:N,u="y"===a?I:D,f=n.rects.reference[c]+n.rects.reference[a]-i[a]-n.rects.popper[c],h=i[a]-n.rects.reference[a],b=E(r),m=b?"y"===a?b.clientHeight||0:b.clientWidth||0:0,v=f/2-h/2,O=d[p],g=m-l[c]-d[u],y=m/2-l[c]/2+v,j=pe(O,y,g),_=a;n.modifiersData[o]=((t={})[_]=j,t.centerOffset=j-y,t)}},effect:function(e){var t=e.state,n=e.options,o=e.name,r=n.element,i=void 0===r?"[data-popper-arrow]":r,s=n.padding,a=void 0===s?0:s;null!=i&&("string"!==typeof i||(i=t.elements.popper.querySelector(i)))&&re(t.elements.popper,i)&&(t.elements.arrow=i,t.modifiersData[o+"#persistent"]={padding:ce("number"!==typeof a?a:de(a,H))})},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,o=t.rects.reference,r=t.rects.popper,i=t.modifiersData.preventOverflow,s=le(t,{elementContext:"reference"}),a=le(t,{altBoundary:!0}),c=ue(s,o),d=ue(a,r,i),l=fe(c),p=fe(d);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:d,isReferenceHidden:l,hasPopperEscaped:p},t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-reference-hidden":l,"data-popper-escaped":p})}}]});const be=["bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end","top","top-start","top-end"],me="esri-popover",ve="esri-popover--open",Oe={position:"fixed","z-index":"1000"};let ge=class extends l.a{constructor(e,t){super(e,t),this._popper=null,this._contentNode=null,this._renderAttached=!1,this._rootNode=null,this.anchorElement=null,this.offset=[0,0],this.open=!1,this.renderContentFunction=null,this._afterRootCreate=e=>{this._rootNode=e},this._afterContentCreate=e=>{this._contentNode=e},this._updatePosition=()=>{Object(r.k)(this._popper)&&this._popper.update()}}initialize(){this.when((()=>{this._projector.append(document.body,this.render),this._renderAttached=!0})),this.own(Object(a.a)(this,["open","anchorElement"],(()=>this._buildPopper())),Object(a.a)(this,["placement","offset"],(()=>this._setPopperOptions())))}destroy(){this.owner=null,this.anchorElement=null,this.renderContentFunction=null,this._renderAttached&&(this._projector.detach(this.render),this._renderAttached=!1),Object(r.k)(this._rootNode)&&(Object(c.d)(this._rootNode),this._rootNode=null),this._contentNode=null,Object(r.k)(this._popper)&&(this._popper.destroy(),this._popper=null)}set container(e){}set owner(e){this._set("owner",e)}get placement(){return"top"}set placement(e){-1!==be.indexOf(e)?this._override("placement",e):this._clearOverride("placement")}render(){const{open:e,owner:t,renderContentFunction:n}=this;return Object(d.a)("div",{afterCreate:this._afterRootCreate,class:this.classes(me,e?ve:null),styles:Oe},Object(d.a)("div",{afterCreate:this._afterContentCreate,afterUpdate:this._updatePosition},e&&(null==n?void 0:n.call(t))))}_buildPopper(){Object(r.k)(this._popper)&&(this._popper.destroy(),this._popper=null);const e=this._contentNode;if(Object(r.j)(e))return;if(!this.open||!this.renderContentFunction)return;const t=this._getAnchor();t&&(this._popper=he(t,e),this._setPopperOptions())}_setPopperOptions(){const{placement:e,offset:t,_popper:n}=this;Object(r.j)(n)||(n.setOptions({placement:e,modifiers:[{name:"offset",options:{offset:t}}]}),n.forceUpdate())}_getAnchor(){const{anchorElement:e}=this;return Object(c.a)("function"==typeof e?e():e)}};Object(o.a)([Object(i.b)()],ge.prototype,"anchorElement",void 0),Object(o.a)([Object(i.b)()],ge.prototype,"container",null),Object(o.a)([Object(i.b)()],ge.prototype,"offset",void 0),Object(o.a)([Object(i.b)()],ge.prototype,"open",void 0),Object(o.a)([Object(i.b)()],ge.prototype,"owner",null),Object(o.a)([Object(i.b)()],ge.prototype,"placement",null),Object(o.a)([Object(i.b)()],ge.prototype,"renderContentFunction",void 0),ge=Object(o.a)([Object(s.a)("esri.widgets.support.Popover")],ge);var ye=ge;t.a=ye},1053:function(e,t,n){"use strict";var o,r=n(131),i=(n(129),n(130),n(134)),s=n(170),a=n(133),c=(n(132),n(135),n(136),n(146));let d=o=class extends c.a{constructor(e){super(e),this.autoCloseMenu=!1,this.iconClass=null,this.items=null,this.label=null,this.open=!1,this.selected=!1,this.selectionEnabled=!1,this.clickFunction=null}castItems(e){return e?e.map((e=>e instanceof o?e:new o(e))):null}};Object(r.a)([Object(i.b)()],d.prototype,"autoCloseMenu",void 0),Object(r.a)([Object(i.b)()],d.prototype,"iconClass",void 0),Object(r.a)([Object(i.b)()],d.prototype,"items",void 0),Object(r.a)([Object(s.a)("items")],d.prototype,"castItems",null),Object(r.a)([Object(i.b)()],d.prototype,"label",void 0),Object(r.a)([Object(i.b)()],d.prototype,"open",void 0),Object(r.a)([Object(i.b)()],d.prototype,"selected",void 0),Object(r.a)([Object(i.b)()],d.prototype,"selectionEnabled",void 0),Object(r.a)([Object(i.b)()],d.prototype,"clickFunction",void 0),d=o=Object(r.a)([Object(a.a)("esri.widgets.FeatureTable.Grid.support.ButtonMenuItem")],d);var l=d;t.a=l},1065:function(e,t,n){"use strict";var o=n(131),r=(n(129),n(138)),i=(n(130),n(137),n(134)),s=n(195),a=n(133),c=(n(132),n(135),n(136),n(301)),d=n(161),l=n(218),p=n(164),u=n(182),f=n(207),h=n(170),b=n(146),m=n(1053);let v=class extends b.a{constructor(e){super(e),this.items=null,this.open=!1}castItems(e){return e?e.map((e=>e instanceof m.a?e:new m.a(e))):null}};Object(o.a)([Object(i.b)()],v.prototype,"items",void 0),Object(o.a)([Object(h.a)("items")],v.prototype,"castItems",null),Object(o.a)([Object(i.b)()],v.prototype,"open",void 0),v=Object(o.a)([Object(a.a)("esri.widgets.FeatureTable.Grid.support.ButtonMenuViewModel")],v);var O=v,g=n(1025);const y="esri-button-menu",j="esri-button-menu__content",w="esri-button-menu__item-wrapper",_="esri-button-menu__icon",x="esri-button-menu__item",C="esri-button-menu__item-label",k="esri-button-menu__item-label-content",M="esri-button-menu__item--selectable",E="esri-button-menu__item--selected",P="esri-button-menu__checkbox",I="esri-button-menu__embedded-content-wrapper",D="esri-button-menu__button",N="esri-button-menu__button--selected",A="esri-icon-menu",H="esri-widget";let L=class extends(Object(l.b)(f.a)){constructor(e,t){super(e,t),this._menuContentNode=null,this._popover=null,this._rootNode=null,this.iconClass=null,this.items=null,this.label=null,this.open=!1,this.viewModel=new O,this._handleOutsideClick=this._handleOutsideClick.bind(this)}postInitialize(){this._popover=new g.a({owner:this,open:!!this.open,placement:Object(p.f)()?"bottom-start":"bottom-end",renderContentFunction:this.renderMenuContent,anchorElement:this._rootNode}),this.handles.add([Object(d.d)(this,"open",(e=>this._popover.set("open",e)))]),document.addEventListener("click",this._handleOutsideClick)}destroy(){var e;null==(e=this._popover)||e.destroy(),this._popover=null,document.removeEventListener("click",this._handleOutsideClick)}_handleOutsideClick(e){var t,n;if(!this.open||!this._rootNode||!this._menuContentNode)return;const o=e.target;null!=(t=this._menuContentNode)&&t.contains(o)||null!=(n=this._rootNode)&&n.contains(o)||(this.open=!1)}render(){return Object(u.a)("div",{afterCreate:this._afterRootNodeCreate,bind:this,"data-node-ref":"_rootNode",class:this.classes(y,H),key:"menu"},this.renderMenuButton())}renderMenuButton(){const{iconClass:e,id:t,label:n,open:o}=this,r=this.classes([D,e||A,o?N:null]);return Object(u.a)("button",{"aria-pressed":o.toString(),"aria-controls":`${t}-menu`,"aria-expanded":o.toString(),"aria-haspopup":"true","aria-label":n,bind:this,class:r,id:`${t}-button`,title:n,selected:o,onclick:this._toggleOpen,tabindex:"0",type:"button"})}renderMenuContent(){var e;const{id:t,open:n}=this;return Object(u.a)("div",{afterCreate:this._afterMenuContentNodeCreate,bind:this,class:j,"data-node-ref":"_menuContentNode",key:"esri-button-menu-content",hidden:!n},Object(u.a)("ul",{"aria-labelledby":`${t}-button`,bind:this,class:w,id:`${t}-menu`,role:"menu"},(null==(e=this.items)?void 0:e.length)&&this.renderItems()))}renderItems(){var e;return null==(e=this.items)?void 0:e.map(((e,t)=>this.renderItem(e,t)))}renderItem(e,t,n){var o;const i=Object(r.k)(n)?`${this.id}-menu-item-${t}-${n}`:`${this.id}-menu-item-${t}`,s=`${i}-label`,a=this.classes(x,e.selectionEnabled?M:null,e.selectionEnabled&&e.selected?E:null);return Object(u.a)("li",{afterCreate:this._afterMenuItemCreate,bind:this,class:a,"data-item-index":t,"data-item-subIndex":n,for:i,key:i,onkeydown:t=>this._handleMenuItemKeydown(t,e),onclick:t=>this._handleMenuItemInteraction(t,e),role:"menuitem",tabindex:"0"},Object(u.a)("input",{disabled:!0,checked:e.selected,class:P,id:i,name:i,tabindex:"-1",type:"checkbox"}),Object(u.a)("label",{bind:this,class:this.classes(D,C),for:i,id:s},Object(u.a)("span",{class:this.classes(_,e.iconClass),"aria-hidden":"true"}),Object(u.a)("span",{class:k},e.label)),Object(u.a)("ul",{"aria-labelledby":s,class:I,id:`${this.id}-submenu`,role:"menu"},null==e||null==(o=e.items)?void 0:o.map(((e,n)=>this.renderItem(e,t,n)))))}_afterRootNodeCreate(e){var t;this._rootNode=e,null==(t=this._popover)||t.set("anchorElement",(()=>e))}_handleMenuItemInteraction(e,t){t.selected=!t.selected,t.open=!(!t.selected||!t.items),t.autoCloseMenu&&this.set("open",!1),t.clickFunction&&t.clickFunction({event:e,item:t}),e.stopPropagation()}_handleMenuItemKeydown(e,t){const n=Object(c.a)(e);"Enter"!==n&&" "!==n||this._handleMenuItemInteraction(e,t),"Escape"===n&&(this.open=!1,e.preventDefault(),e.stopPropagation())}_afterMenuContentNodeCreate(e){this._menuContentNode=e,e.focus()}_toggleOpen(){this.open=!this.open}_afterMenuItemCreate(e){0===e["data-item-index"]&&e.focus()}};Object(o.a)([Object(i.b)()],L.prototype,"iconClass",void 0),Object(o.a)([Object(s.a)("viewModel.items")],L.prototype,"items",void 0),Object(o.a)([Object(i.b)()],L.prototype,"label",void 0),Object(o.a)([Object(s.a)("viewModel.open")],L.prototype,"open",void 0),Object(o.a)([Object(i.b)()],L.prototype,"viewModel",void 0),L=Object(o.a)([Object(a.a)("esri.widgets.FeatureTable.Grid.support.ButtonMenu")],L);var B=L;t.a=B},218:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var o=n(131),r=n(134),i=n(133),s=n(146),a=n(166),c=n(357);const d=e=>{let t=class extends e{destroy(){this.destroyed||(this.handles.destroy(),this.updatingHandles.destroy())}get handles(){return this._get("handles")||new a.a}get updatingHandles(){return this._get("updatingHandles")||new c.a}};return Object(o.a)([Object(r.b)({readOnly:!0})],t.prototype,"handles",null),Object(o.a)([Object(r.b)({readOnly:!0})],t.prototype,"updatingHandles",null),t=Object(o.a)([Object(i.a)("esri.core.HandleOwner")],t),t};let l=class extends(d(s.a)){};l=Object(o.a)([Object(i.a)("esri.core.HandleOwner")],l)},357:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var o=n(131),r=n(138),i=n(281),s=n(134),a=n(133),c=n(295),d=n(401),l=n(146),p=n(166),u=n(161);let f=class extends l.a{constructor(){super(...arguments),this.updating=!1,this.handleId=0,this.handles=new p.a,this.scheduleHandleId=0,this.pendingPromises=new Set}destroy(){this.removeAll(),this.handles.destroy()}add(e,t,n,o=0){const r=0!=(1&o),i=++this.handleId;r||this.installSyncUpdatingWatch(e,t,i);const s=0!=(2&o)?Object(u.a)(e,t,n,r):e.watch(t,n,r);return this.handles.add(s,i),{remove:()=>{this.handles.remove(i)}}}addOnCollectionPropertyChange(e,t,n,o=0){const r=0!=(2&o),i=++this.handleId;return this.handles.add([Object(u.b)(e,t,"after-changes",this.createSyncUpdatingCallback()),Object(u.b)(e,t,"change",n,r?e=>{n({added:e.items,removed:[],moved:[],target:e})}:void 0)],i),{remove:()=>{this.handles.remove(i)}}}addOnCollectionChange(e,t,n=0){const o=0!=(2&n),r=++this.handleId;return this.handles.add([e.on("after-changes",this.createSyncUpdatingCallback()),e.on("change",t)],r),o&&t({added:e.items,removed:[],moved:[],target:e}),{remove:()=>{this.handles.remove(r)}}}addPromise(e){if(Object(r.j)(e))return e;const t=++this.handleId;this.handles.add({remove:()=>{this.pendingPromises.delete(e)&&(0!==this.pendingPromises.size||this.handles.has(h)||this._set("updating",!1))}},t),this.pendingPromises.add(e),this._set("updating",!0);const n=()=>this.handles.remove(t);return e.then(n,n),e}removeAll(){this.pendingPromises.clear(),this.handles.removeAll(),this._set("updating",!1)}installSyncUpdatingWatch(e,t,n){const o=this.createSyncUpdatingCallback(),r=Object(d.a)((()=>Object(i.c)(e,t)),o);return this.handles.add(r,n),r}createSyncUpdatingCallback(){return()=>{this.handles.remove(h),++this.scheduleHandleId;const e=this.scheduleHandleId;this._get("updating")||this._set("updating",!0),this.handles.add(Object(c.b)((()=>{e===this.scheduleHandleId&&(this._set("updating",this.pendingPromises.size>0),this.handles.remove(h))})),h)}}};Object(o.a)([Object(s.b)({readOnly:!0})],f.prototype,"updating",void 0),f=Object(o.a)([Object(a.a)("esri.views.support.WatchUpdatingTracking")],f);const h=-42}}]);
//# sourceMappingURL=41.4651e5fc.chunk.js.map