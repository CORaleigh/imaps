"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[9135],{79135:(e,t,i)=>{i.r(t),i.d(t,{AddressTable:()=>n,default:()=>o});var s=i(72791),r=i(5935),a=i(91946),l=i(80184);const n=e=>{const t=(0,s.useRef)(null);return(0,s.useEffect)((()=>{e.layer.definitionExpression="OBJECTID IS NULL",console.log(e.geometry);const i=new r.Z({layer:e.layer,container:t.current,visibleElements:{header:!1,selectionColumn:!1},tableTemplate:{columnTemplates:[{label:"Address",fieldName:"ADDRESS"},{label:"Type",fieldName:"FEATURETYPE"}]}});return setTimeout((()=>{i.findColumn("FEATURETYPE").width=100,i.filterGeometry=e.geometry,e.layer.definitionExpression="ADDRESS NOT LIKE 'EN%'",i.refresh()})),setTimeout((()=>{const t=i.container.querySelector("vaadin-grid");null===t||void 0===t||t.addEventListener("click",(s=>{if("VAADIN-GRID-CELL-CONTENT"===s.target.nodeName){var r;i.clearSelection();const l=(null===(r=t.getEventContext(s))||void 0===r?void 0:r.item).feature;i.selectRows(l),l.setAttribute("type","address"),l.symbol=new a.Z({url:"assets/pin.svg",height:36,width:36}),e.view.graphics.removeMany(e.view.graphics.filter((e=>"address"===e.getAttribute("type")))),e.view.graphics.add(l),e.view.goTo({target:l,zoom:17},{duration:1e3,easing:"ease"})}}))}),2e3),()=>{i&&i.destroy()}}),[]),(0,l.jsx)("div",{id:"addressTable",ref:t})},o=n}}]);
//# sourceMappingURL=9135.473f69c8.chunk.js.map