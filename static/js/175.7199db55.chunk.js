(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[175],{1095:function(e,t,i){},1116:function(e,t,i){"use strict";i.r(t),i.d(t,"TipManager",(function(){return l}));var n=i(0),s=i(7),c=(i(1095),i(2));const l=e=>{const t=Object(n.useRef)(),[i,l]=Object(n.useState)(),[r,a]=Object(n.useState)([]),[o,u]=Object(n.useState)(!0),{theme:d}=Object(n.useContext)(s.a);return Object(n.useEffect)((()=>{var i;const n=t=>{t.target.closed&&e.tipsDismissed()};return null===(i=t.current)||void 0===i||i.addEventListener("calciteTipManagerToggle",n),()=>{var e;null===(e=t.current)||void 0===e||e.removeEventListener("calciteTipManagerToggle",n)}}),[e.tipsDimissed]),Object(n.useEffect)((()=>{l(e.title),a(e.tips),u(!e.tips.length)}),[e.tips]),Object(c.jsx)("calcite-tip-manager",{ref:t,theme:d,dir:"ltr","intl-close":"Close","intl-default-title":i,"intl-pagination-label":"Tip","intl-next":"Next","intl-previous":"Previous",closed:o?"":null,children:null===r||void 0===r?void 0:r.map(((e,t)=>Object(c.jsxs)("calcite-tip",{heading:e.title,children:[Object(c.jsx)("p",{children:e.text}),e.video&&Object(c.jsx)("a",{href:e.video,target:"_blank",rel:"noreferrer",children:"Watch video tutorial"})]},e.title+t)))})};t.default=l}}]);
//# sourceMappingURL=175.7199db55.chunk.js.map