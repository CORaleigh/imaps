(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[198],{1140:function(e,t,i){},1239:function(e,t,i){"use strict";i.r(t),i.d(t,"AddressTable",(function(){return o}));var s=i(1),n=i(1074),a=(i(1140),i(580)),r=i(0);const o=e=>{const t=Object(s.useRef)(null);return Object(s.useEffect)((()=>{e.layer.definitionExpression=`NCPIN = '${e.pin}'`;const i=new n.a({layer:e.layer,container:t.current,visibleElements:{header:!1,selectionColumn:!1},fieldConfigs:[{label:"Address",name:"ADDRESS",width:"200px"},{label:"Type",name:"FEATURETYPE"}]});setTimeout((()=>{const t=i.container.querySelector("vaadin-grid");null===t||void 0===t||t.addEventListener("click",(s=>{if("VAADIN-GRID-CELL-CONTENT"===s.target.nodeName){var n;i.clearSelection();const r=(null===(n=t.getEventContext(s))||void 0===n?void 0:n.item).feature;i.selectRows(r),r.setAttribute("type","address"),r.symbol=new a.a({url:"assets/pin.svg",height:36,width:36}),e.view.graphics.removeMany(e.view.graphics.filter((e=>"address"===e.getAttribute("type")))),e.view.graphics.add(r),e.view.goTo({target:r,zoom:17},{duration:1e3,easing:"ease"})}}))}),2e3)}),[]),Object(r.jsx)("div",{id:"addressTable",ref:t})};t.default=o}}]);
//# sourceMappingURL=198.d991485d.chunk.js.map