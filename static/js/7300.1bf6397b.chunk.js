"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[7300],{7300:(e,t,i)=>{i.r(t),i.d(t,{PropertyPanel:()=>c,default:()=>d});var r=i(72791);const l=e=>{const t=e.map((e=>e.getAttribute("PIN_NUM"))),i=new URL(window.location.toString());if(t){i.searchParams.set("pin",t.toString());const e={pin:t.toString()};history.state?history.state.pin!=e.pin&&history.pushState({pin:t.toString()},"",i.href):history.pushState({pin:t.toString()},"",i.href)}else history.replaceState(history.state,"",i.href)};var n=i(80184);const o=(0,r.lazy)((()=>Promise.all([i.e(1508),i.e(4055),i.e(1456),i.e(6739),i.e(9247),i.e(8099),i.e(1152),i.e(7410)]).then(i.bind(i,1843)))),s=(0,r.lazy)((()=>Promise.all([i.e(4226),i.e(8995),i.e(5592),i.e(3109),i.e(1508),i.e(4055),i.e(7111),i.e(3798),i.e(9014),i.e(1009),i.e(5277),i.e(2841),i.e(8597),i.e(3406),i.e(4653),i.e(6455),i.e(5192),i.e(9058),i.e(1456),i.e(6739),i.e(9247),i.e(2927),i.e(4928),i.e(4715),i.e(239),i.e(3942),i.e(9193),i.e(6535)]).then(i.bind(i,44760)))),a=(0,r.lazy)((()=>Promise.all([i.e(1508),i.e(4055),i.e(1456),i.e(6739),i.e(9247),i.e(4928),i.e(98),i.e(5935),i.e(5124),i.e(5182)]).then(i.bind(i,35588)))),c=e=>{const t=(0,r.useRef)({pin:""}),i=(0,r.useRef)(null),c=(0,r.useRef)(null),[d,u]=(0,r.useState)(!1),[p,v]=(0,r.useState)(!0),[b,f]=(0,r.useState)(),h=(0,r.useRef)(),[y,m]=(0,r.useState)("OBJECTID IS NULL"),[g,S]=(0,r.useState)("OBJECTID IS NULL"),[I,N]=(0,r.useState)(),[P,w]=(0,r.useState)("list"),[E,T]=(0,r.useState)(!1),[U,C]=(0,r.useState)(),j=(0,r.useRef)(),[A,M]=(0,r.useState)(),[R,k]=(0,r.useState)(!1),x=e=>{const t=document.querySelector(`calcite-tab-title[tab=${e}]`),i=new KeyboardEvent("keydown",{altKey:!1,bubbles:!0,cancelable:!0,charCode:0,code:"Enter",composed:!0,ctrlKey:!1,detail:0,isComposing:!1,key:"Enter",keyCode:13,location:0,metaKey:!1,repeat:!1,shiftKey:!1});t.dispatchEvent(i),T(!0)},L=()=>{v(!0),h.current=void 0,e.featureSelected(void 0),m("OBJECTID IS NULL"),x("list"),w("list"),e.propertiesSelected([]);const t=null===b||void 0===b?void 0:b.graphics.filter((e=>"buffer"===e.getAttribute("type")));null!==t&&void 0!==t&&t.length&&(null===b||void 0===b||b.graphics.removeMany(t))};return(0,r.useEffect)((()=>{if(!d){(e=>{N(e.map.allTables.find((e=>e.title.includes("Condo")&&"feature"===e.type))),C(e.map.allTables.find((e=>e.title.includes("Address")&&"feature"===e.type))),M(e.map.allLayers.find((e=>e.title.includes("Property")&&"feature"===e.type))),u(!0),f(e)})(e.view),document.querySelectorAll("calcite-tab-nav").forEach((e=>{e.addEventListener("calciteTabChange",(e=>{T(0===e.detail.tab||"list"===e.detail.tab)}))})),document.querySelectorAll("calcite-tab").forEach((e=>{const t=new MutationObserver((e=>{if(e.length){var i;const r=null===(i=e[0].target)||void 0===i?void 0:i.shadowRoot;r&&(r.innerHTML+="<style>:host([active]) section { display: block !important; visibility: visible !important;} section {display: block !important; visiblity: hidden !important;}</style>"),t.disconnect()}else t.disconnect()}));e.innerHTML="<style>:host([active]) {display: block !important; visibility: visible !important;} :host { display: block; visibility: hidden !important;} calcite-tab {display: block !important; z-index: 1; visibility: hidden !important;} calcite-tab[active] { z-index: 100; visibility: visible !important;;} </style>",t.observe(e,{attributes:!0})})),window.addEventListener("popstate",(e=>{var i,r,l,n,o;(null===(i=e.state)||void 0===i?void 0:i.pin)===(null===(r=t.current)||void 0===r?void 0:r.pin)?history.back():(null===(l=e.state)||void 0===l?void 0:l.pin.length)>0&&(S(`PIN_NUM in ('${decodeURIComponent(null===(n=history.state)||void 0===n?void 0:n.pin.split(",").join("','"))}')`),m(`PIN_NUM in ('${decodeURIComponent(null===(o=history.state)||void 0===o?void 0:o.pin.split(",").join("','"))}')`));t.current=e.state}));const i=new URL(document.URL).searchParams.get("pin");i&&i.length>0&&(S(`PIN_NUM in ('${decodeURIComponent(i.split(",").join("','"))}')`),m(`PIN_NUM in ('${decodeURIComponent(i.split(",").join("','"))}')`))}}),[]),(0,r.useEffect)((()=>{((e,t,i)=>new Promise(((r,l)=>{void 0!=i&&(null===t||void 0===t||t.queryFeatures({geometry:i,outFields:["OBJECTID","REID","PIN_NUM"],returnGeometry:!0,outSpatialReference:null===e||void 0===e?void 0:e.spatialReference}).then((e=>{const i=e.features.map((e=>e.getObjectId()));t.queryRelatedFeatures({relationshipId:0,objectIds:i,outFields:["*"]}).then((t=>{const n=[],o=[];i.forEach((e=>{var i;null===(i=t[e])||void 0===i||i.features.forEach((e=>{n.push(e.getAttribute("OBJECTID")),o.push(e)}))})),n.length?r({where:`OBJECTID in (${n.toString()})`,features:o,properties:e.features}):l()}))})))})))(b,A,e.geometry).then((t=>{if(void 0!=e.geometry){if(k(!0),m(t.where),j.current=t.properties,1===t.features.length){var i,r;const n=t.features[0];n.layer=I,n.popupTemplate=null===I||void 0===I?void 0:I.popupTemplate;const o=t.features[0];o.geometry=null===(i=t.properties)||void 0===i||null===(r=i.find((e=>e.getAttribute("PIN_NUM")===o.getAttribute("PIN_NUM"))))||void 0===r?void 0:r.geometry,h.current=o,e.featureSelected(o),v(!1),l([o]),x("info"),w("info")}else l([]),v(!0),h.current=void 0,x("list"),w("list");e.propertiesSelected(t.properties)}else L()})).catch((()=>{L()}))}),[e.geometry,e.propertiesSelected,e.featureSelected,e.selectedProperties]),(0,n.jsxs)("div",{className:"panel",id:"propertyPanel",children:[d&&(0,n.jsx)(r.Suspense,{fallback:"",children:(0,n.jsx)(o,{view:b,condosTable:I,addressTable:U,propertyLayer:A,where:g,clear:L,searchComplete:t=>{var i;t.feature||1===t.features.length?(h.current=t.features[0],e.featureSelected(t.features[0]),v(!1),l([t.features[0]]),x("info"),w("info")):(l([]),v(!0),h.current=void 0,x("list"),w("list"));const r=null===t||void 0===t?void 0:t.features.map((e=>e.getAttribute("OBJECTID")));m(`OBJECTID in (${r.toString()})`),j.current=t.properties,null===(i=e.selectedProperties)||void 0===i||i.forEach((e=>{e.setAttribute("selected",0)})),e.propertiesSelected(j.current);const n=e.view.graphics.filter((e=>"buffer"===e.getAttribute("type")));e.view.graphics.removeMany(n)}})}),(0,n.jsxs)("calcite-tabs",{position:"below",layout:"center",children:[(0,n.jsxs)("calcite-tab-nav",{slot:"tab-nav",children:[(0,n.jsx)("calcite-tab-title",{tab:"list",active:!0,ref:c,children:"List"}),(0,n.jsx)("calcite-tab-title",{tab:"info",ref:i,disabled:p?"true":null,children:"Info"})]}),(0,n.jsx)("calcite-tab",{tab:"list",children:d&&(0,n.jsx)(r.Suspense,{fallback:"",children:(0,n.jsx)(a,{view:b,layer:I,filter:y,loading:R,reloadTable:E,selectedTab:P,featureSelected:t=>{if(t){var i,r,n,o,s;null===(i=j.current)||void 0===i||i.forEach((e=>{(null===e||void 0===e?void 0:e.getAttribute("PIN_NUM"))!=(null===t||void 0===t?void 0:t.getAttribute("PIN_NUM"))&&(null===e||void 0===e||e.setAttribute("selected",0))}));const a=null===(r=j.current)||void 0===r?void 0:r.find((e=>(null===e||void 0===e?void 0:e.getAttribute("PIN_NUM"))===(null===t||void 0===t?void 0:t.getAttribute("PIN_NUM"))));null===a||void 0===a||a.setAttribute("selected",1),null===(n=j.current)||void 0===n||n.splice(null===(o=j.current)||void 0===o?void 0:o.indexOf(a),1),null===(s=j.current)||void 0===s||s.push(a),t.geometry=null===a||void 0===a?void 0:a.geometry,null===b||void 0===b||b.goTo(t.geometry,{duration:1e3,easing:"ease"}),h.current=t,e.featureSelected(t),v(!1),e.propertiesSelected(j.current),l([t]),x("info"),w("info")}}})})}),(0,n.jsx)("calcite-tab",{tab:"info",children:d&&(0,n.jsx)(r.Suspense,{fallback:"",children:(0,n.jsx)(s,{view:b,feature:h.current})})})]})]})},d=c}}]);
//# sourceMappingURL=7300.1bf6397b.chunk.js.map