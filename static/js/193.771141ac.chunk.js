/*! For license information please see 193.771141ac.chunk.js.LICENSE.txt */
(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[193],{1166:function(e,t,l){},1325:function(e,t,l){"use strict";l.r(t),l.d(t,"Shell",(function(){return E}));var c=l(1),i=l(7),n=l.n(i);l(1166);const o=e=>{var t,l;(null===(t=e.target)||void 0===t?void 0:t.parentElement).collapsed=null===(l=e.target)||void 0===l?void 0:l.dismissed},a=(e,t,l)=>{t.isActive?t.isActive=!1:(((e,t)=>{innerWidth<1e3?e.forEach((e=>{e.isActive=!1})):t?e.forEach((e=>{e.isActive=e.isActive&&!e.isTool})):e.forEach((e=>{e.isActive=e.isActive&&e.isTool}))})(l,t.isTool),t.isActive=!0);const c=e.target.closest("calcite-shell-panel");return t.isActive?null===c||void 0===c||c.removeAttribute("collapsed"):null===c||void 0===c||c.setAttribute("collapsed",""),l},r=(e,t,l,c)=>{document.querySelectorAll("calcite-action[active]").forEach((l=>{const c=e.find((e=>e.title===l.getAttribute("text")));var i,n,o;window.innerWidth>=1e3&&(null===c||void 0===c?void 0:c.isActive)&&t<1e3&&(c.isTool&&(null===(i=document.querySelector("calcite-shell-panel[slot=contextual-panel]"))||void 0===i||i.setAttribute("collapsed",""),c.isActive=!1));window.innerWidth<1e3&&(null===c||void 0===c?void 0:c.isActive)&&t>=1e3&&(c.isTool?(null===(n=document.querySelector("calcite-shell-panel[slot=primary-panel]"))||void 0===n||n.removeAttribute("collapsed"),c.isActive=!1):null===(o=document.querySelector("calcite-shell-panel[slot=contextual-panel]"))||void 0===o||o.removeAttribute("collapsed"));document.querySelectorAll("calcite-action-bar").forEach((e=>{e&&(e.expandDisabled=window.innerWidth<=500)}))})),console.log(t,window.innerWidth),l(window.innerWidth),c([...e])},s=e=>{const t=e.find((e=>e.isActive));t&&(t.isActive=!1);const l=e.find((e=>"Property Search"===e.title));l&&(l.isActive=!0);const c=document.getElementById(null===l||void 0===l?void 0:l.container);if(c){(null===c||void 0===c?void 0:c.closest(".action-panel")).hidden=!1;const e=null===c||void 0===c?void 0:c.closest("calcite-shell-panel");null===e||void 0===e||e.removeAttribute("collapsed")}return c};var d=l(3),u=l(2),v=l(8),p=l(0);const h=Object(c.lazy)((()=>Promise.all([l.e(1),l.e(2),l.e(3),l.e(4),l.e(62)]).then(l.bind(null,1303)))),b=Object(c.lazy)((()=>l.e(190).then(l.bind(null,1190)))),m=Object(c.lazy)((()=>l.e(194).then(l.bind(null,1191)))),j=Object(c.lazy)((()=>l.e(117).then(l.bind(null,1326)))),x=Object(c.lazy)((()=>Promise.all([l.e(1),l.e(2),l.e(3),l.e(4),l.e(65)]).then(l.bind(null,1327)))),y=Object(c.lazy)((()=>Promise.all([l.e(14),l.e(85),l.e(167)]).then(l.bind(null,1328)))),O=Object(c.lazy)((()=>Promise.all([l.e(5),l.e(10),l.e(8),l.e(12),l.e(70)]).then(l.bind(null,1298)))),w=Object(c.lazy)((()=>Promise.all([l.e(1),l.e(2),l.e(4),l.e(14),l.e(69)]).then(l.bind(null,1192)))),f=Object(c.lazy)((()=>Promise.all([l.e(1),l.e(2),l.e(3),l.e(4),l.e(60)]).then(l.bind(null,1329)))),S=Object(c.lazy)((()=>Promise.all([l.e(1),l.e(2),l.e(10),l.e(14),l.e(72)]).then(l.bind(null,1305)))),g=Object(c.lazy)((()=>Promise.all([l.e(1),l.e(2),l.e(3),l.e(4),l.e(61)]).then(l.bind(null,1306)))),A=Object(c.lazy)((()=>Promise.all([l.e(12),l.e(14),l.e(24),l.e(28),l.e(74)]).then(l.bind(null,1317)))),k=Object(c.lazy)((()=>Promise.all([l.e(1),l.e(2),l.e(10),l.e(17),l.e(73)]).then(l.bind(null,1307)))),E=()=>{const[e,t]=Object(c.useState)(),[l,i]=Object(c.useState)([]),[E,q]=Object(c.useState)(),[P,L]=Object(c.useState)(window.innerWidth),T=Object(c.useRef)(),[M,C]=Object(c.useState)(!1),[W,$]=Object(c.useState)([]),[z,_]=Object(c.useState)(),{theme:R,setTheme:F}=Object(c.useContext)(d.a),[I,N]=Object(c.useState)(!0),B=Object(c.useRef)(),G=Object(c.useRef)(),U=Object(c.useRef)(),D=Object(c.useRef)(),K=Object(c.useRef)(),V=Object(c.useRef)(),[J,H]=Object(c.useState)(),{actions:Q,setActions:X}=Object(c.useContext)(v.a),Y=e=>{_({...z,attributes:null===e||void 0===e?void 0:e.attributes,geometry:null===e||void 0===e?void 0:e.geometry});const t=Q.find((e=>"Property Select"===e.title));if(t&&T.current){const l=document.getElementById(null===t||void 0===t?void 0:t.container);l&&n.a.render(Object(p.jsx)(c.Suspense,{fallback:"",children:Object(p.jsx)(f,{view:T.current,selectedFeature:e,geometrySet:oe,toolActivated:ie,clear:ae})}),l)}const l=Q.find((e=>"Print"===e.title));if(l){const t=document.getElementById(null===l||void 0===l?void 0:l.container);n.a.render(Object(p.jsx)(c.Suspense,{fallback:"",children:Object(p.jsx)(k,{view:T.current,exportUrl:"https://indoors.raleighnc.gov/arcgis/rest/services/ExportWebMap/GPServer/Export%20Web%20Map",templateUrl:"https://indoors.raleighnc.gov/arcgis/rest/services/ExportWebMap/GPServer/Get%20Layout%20Templates%20Info/execute",selectedFeature:e})}),t)}},Z=e=>{$([...W,...e]),e.length>1&&_({...z,attributes:null});const t=s(Q);n.a.render(Object(p.jsx)(c.Suspense,{fallback:"",children:Object(p.jsx)(j,{propertiesSelected:Z,featureSelected:Y,selectedProperties:e})}),t),console.log("setActions"),X([...Q])},ee=()=>{var e,t,l,c;null===(e=G.current)||void 0===e||e.cancel(),null===(t=U.current)||void 0===t||null===(l=t.viewModel.activeViewModel)||void 0===l||l.clear(),D.current&&(D.current.viewModel.mode="live"),null===(c=B.current)||void 0===c||c.cancel(),H("sketch")},te=()=>{var e,t,l;null===(e=document.querySelector(".map-tool.active"))||void 0===e||e.classList.remove("active"),(null===(t=T.current)||void 0===t?void 0:t.popup)&&(T.current.popup.autoOpenEnabled=!1),null===(l=V.current)||void 0===l||l.remove()},le=e=>{var t,l,c;B.current=e,null===(t=G.current)||void 0===t||t.cancel(),null===(l=U.current)||void 0===l||null===(c=l.viewModel.activeViewModel)||void 0===c||c.clear(),D.current&&(D.current.viewModel.mode="live"),H("sketch"),te()},ce=(e,t)=>{var l,c;U.current=e,D.current=t,null===(l=B.current)||void 0===l||l.cancel(),null===(c=G.current)||void 0===c||c.cancel(),H("measure"),te()},ie=e=>{var t,l,c;G.current=e,null===(t=B.current)||void 0===t||t.cancel(),null===(l=U.current)||void 0===l||null===(c=l.viewModel.activeViewModel)||void 0===c||c.clear(),D.current&&(D.current.viewModel.mode="live"),H("select"),te()},ne=e=>{var t,l;let c;return c=e?Q.find((e=>e.isActive&&e.isTool)):Q.find((e=>e.isActive)),(null===(t=c)||void 0===t||null===(l=t.tips)||void 0===l?void 0:l.length)?Object(p.jsxs)("calcite-tooltip-manager",{children:[Object(p.jsx)("calcite-tooltip",{label:"Tooltip label","reference-element":"tipAction"+(e?"_tool":""),placement:"bottom-end",children:"Show tips"}),Object(p.jsx)("calcite-action",{id:"tipAction"+(e?"_tool":""),text:"Action",label:"Action",slot:"header-actions-end",icon:"lightbulb",appearance:"solid",scale:"m","calcite-hydrated":"",onClick:()=>{i([...c.tips]),q(c.title)}})]}):""},oe=e=>{const t=s(Q);n.a.render(Object(p.jsx)(c.Suspense,{fallback:"",children:Object(p.jsx)(j,{geometry:e,propertiesSelected:Z,selectedProperties:W,featureSelected:Y,selectedFeature:z})}),t)},ae=()=>{const e=s(Q);n.a.render(Object(p.jsx)(c.Suspense,{fallback:"",children:Object(p.jsx)(j,{geometry:void 0,propertiesSelected:Z,selectedProperties:W,featureSelected:Y,selectedFeature:z})}),e)},re=e=>{if(e){var t,l,i;const o=document.getElementById(e.container);null===(t=document.querySelector("calcite-shell-panel[slot=contextual-panel]"))||void 0===t||null===(l=t.shadowRoot)||void 0===l||null===(i=l.querySelector(".content"))||void 0===i||i.setAttribute("style","max-width: 350px; width: calc(var(--calcite-panel-width-multiplier) * 100vw) !important;"),K.current&&(K.current.icon="left-edge"),(null===o||void 0===o?void 0:o.hasChildNodes())||("Property Search"===e.title&&n.a.render(Object(p.jsx)(c.Suspense,{fallback:"",children:Object(p.jsx)(j,{view:T.current,propertiesSelected:Z,featureSelected:Y,selectedProperties:W})}),o),"Location Search"===e.title&&n.a.render(Object(p.jsx)(c.Suspense,{fallback:"",children:Object(p.jsx)(x,{view:T.current})}),o),"Layers"===e.title&&n.a.render(Object(p.jsx)(c.Suspense,{fallback:"",children:Object(p.jsx)(y,{view:T.current})}),o),"Basemaps"===e.title&&n.a.render(Object(p.jsx)(c.Suspense,{fallback:"",children:Object(p.jsx)(O,{view:T.current,default:u.c.default.id,imagery:u.c.imagery.id})}),o),"Legend"===e.title&&n.a.render(Object(p.jsx)(c.Suspense,{fallback:"",children:Object(p.jsx)(w,{view:T.current})}),o),"Property Select"===e.title&&n.a.render(Object(p.jsx)(c.Suspense,{fallback:"",children:Object(p.jsx)(f,{view:T.current,geometrySet:oe,selectedFeature:z,toolActivated:ie,activeTool:J,clear:ae})}),o),"Measure"===e.title&&n.a.render(Object(p.jsx)(c.Suspense,{fallback:"",children:Object(p.jsx)(S,{view:T.current,measurementActivated:ce,activeTool:J})}),o),"Sketch"===e.title&&n.a.render(Object(p.jsxs)(c.Suspense,{fallback:"",children:[Object(p.jsx)(g,{view:T.current,toolActivated:le,activeTool:J})," "]}),o),"Bookmarks"===e.title&&n.a.render(Object(p.jsxs)(c.Suspense,{fallback:"",children:[Object(p.jsx)(A,{view:T.current})," "]}),o),"Print"===e.title&&n.a.render(Object(p.jsx)(c.Suspense,{fallback:"",children:Object(p.jsx)(k,{view:T.current,exportUrl:"https://indoors.raleighnc.gov/arcgis/rest/services/ExportWebMap/GPServer/Export%20Web%20Map",templateUrl:"https://indoors.raleighnc.gov/arcgis/rest/services/ExportWebMap/GPServer/Get%20Layout%20Templates%20Info/execute"})}),o))}};return Object(c.useEffect)((()=>{const e=window.localStorage.getItem("imaps_theme"),l=new URL(document.URL).searchParams.get("id");t(l||u.e),((e,t)=>{e?("dark"===e&&t("dark"),"light"===e&&t("light")):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?(e="dark",t("dark")):(e="light",t("light")),document.body.classList.remove("light"===e?"dark":"light"),document.body.classList.add("light"===e?"light":"dark");const l=Array.from(document.head.querySelectorAll("link")).find((t=>t.href.includes(`${e}/main.css`)));var c;l&&document.head.appendChild(l),void 0!=window.matchMedia&&void 0!=window.matchMedia("(prefers-color-scheme: dark)").addEventListener&&(null===(c=window.matchMedia("(prefers-color-scheme: dark)"))||void 0===c||c.addEventListener("change",(e=>{const l=e.matches?"dark":"light";t(l),window.localStorage.setItem("imaps_theme",l),document.body.classList.remove("light"===l?"dark":"light"),document.body.classList.add("light"===l?"light":"dark");const c=Array.from(document.head.querySelectorAll("link")).find((e=>e.href.includes(`${l}/main.css`)));c&&document.head.appendChild(c)})))})(e,F)}),[]),Object(c.useEffect)((()=>{let e;return document.querySelectorAll("calcite-panel").forEach((e=>{null===e||void 0===e||e.addEventListener("calcitePanelDismissedChange",o)})),window.addEventListener("resize",(()=>{clearTimeout(e),e=setTimeout((()=>{(window.innerWidth<1e3&&P>=1e3||window.innerWidth>=1e3&&P<1e3)&&r(Q,P,L,X)}),250),document.querySelectorAll("calcite-shell-panel").forEach((e=>{var t,l;let c="350px";K.current&&(K.current.icon="left-edge");const i=e.querySelector("calcite-action-bar");window.innerWidth<=500&&(c=`calc(90vw - ${null===i||void 0===i?void 0:i.clientWidth}px)`),null===e||void 0===e||null===(t=e.shadowRoot)||void 0===t||null===(l=t.querySelector(".content"))||void 0===l||l.setAttribute("style",`max-width: ${c}; width: calc(var(--calcite-panel-width-multiplier) * 100vw) !important;`)}))})),document.querySelectorAll("calcite-shell-panel").forEach((e=>{const t=new MutationObserver((l=>{if(l.length){var c,i;let l="350px";window.innerWidth<=500&&(l="calc(90vw - 50px)"),null===e||void 0===e||null===(c=e.shadowRoot)||void 0===c||null===(i=c.querySelector(".content"))||void 0===i||i.setAttribute("style",`max-width: ${l}; width: calc(var(--calcite-panel-width-multiplier) * 100vw) !important;`),document.querySelectorAll("calcite-action-bar").forEach((e=>{e&&(e.expandDisabled=window.innerWidth<=500)})),t.disconnect()}else t.disconnect()}));t.observe(null===e||void 0===e?void 0:e.shadowRoot,{childList:!0})})),()=>{window.removeEventListener("resize",(()=>{r(Q,P,L,X)})),document.querySelectorAll("calcite-panel").forEach((e=>{null===e||void 0===e||e.removeEventListener("calcitePanelDismissedChange",o)}))}}),[Q]),Object(p.jsxs)("div",{children:[I&&Object(p.jsx)("calcite-progress",{class:`shell calcite-theme-${R}`,type:"indeterminate",value:"0.5"}),Object(p.jsxs)("calcite-shell",{class:`shell calcite-theme-${R}`,children:[P>=1e3?Object(p.jsxs)("calcite-shell-panel",{slot:"primary-panel",position:"start","width-scale":"l",collapsed:!0,children:[Object(p.jsx)("calcite-action-bar",{slot:"action-bar",expanded:!1,children:Q.map((e=>{if(e.isTool)return Object(p.jsxs)("div",{children:[Object(p.jsx)("calcite-tooltip",{placement:"trailing",label:e.title,"reference-element":`${e.container}_action`,children:e.title}),Object(p.jsx)("calcite-tooltip-manager",{children:Object(p.jsx)("calcite-action",{text:e.title,name:e.container,icon:e.icon,id:`${e.container}_action`,disabled:M?null:"",onClick:async t=>{console.log("setActions"),X([...a(t,e,Q)]),requestAnimationFrame((()=>{re(e)}))},active:!0===e.isActive?"":null})})]},`${e.container}_action_primary`)}))}),Q.map((e=>{if(e.isTool&&e.isActive)return Object(p.jsxs)("div",{className:"panel-header",children:[Object(p.jsx)("div",{className:"panel-title",children:e.title}),Object(p.jsxs)("div",{className:"header-actions",children:[ne(!0),Object(p.jsxs)("calcite-tooltip-manager",{children:[Object(p.jsx)("calcite-tooltip",{label:"Tooltip label","reference-element":"closeAction",placement:"bottom-end",children:"Close panel"}),Object(p.jsx)("calcite-action",{id:"closeAction","aria-label":"Close",appearance:"solid",scale:"m","calcite-hydrated":"",icon:"x",onClick:()=>{var t,l;null===(t=document)||void 0===t||null===(l=t.querySelector("calcite-shell-panel[slot=primary-panel]"))||void 0===l||l.setAttribute("collapsed",""),e.isActive=!1,console.log("setActions"),X([...Q])}})]})]})]},`${e.icon}_header_primary`)})),Q.map((e=>{if(e.isTool)return Object(p.jsx)("div",{id:e.container,className:"action-panel",hidden:!e.isActive},`${e.container}_primary`)}))]}):"",Object(p.jsx)(c.Suspense,{fallback:"",children:Object(p.jsx)(h,{id:e,initialized:async e=>{if(e.watch("updating",(e=>{N(e)})),!M){T.current=e,C(!0);const t=document.getElementById("propertySearch");e.map&&((e=>{requestAnimationFrame((()=>{var t,l;null===(t=document.querySelector(".identify-widget"))||void 0===t||t.addEventListener("click",(()=>{var t,l,c;ee(),e.popup.autoOpenEnabled=!0,null===(t=document.querySelector(".map-tool.active"))||void 0===t||t.classList.remove("active"),null===(l=document.querySelector(".identify-widget"))||void 0===l||l.classList.add("active"),null===(c=V.current)||void 0===c||c.remove()})),null===(l=document.querySelector(".streetview-widget"))||void 0===l||l.addEventListener("click",(()=>{var t,l,c;ee(),e.popup.autoOpenEnabled=!1,null===(t=document.querySelector(".map-tool.active"))||void 0===t||t.classList.remove("active"),null===(l=document.querySelector(".streetview-widget"))||void 0===l||l.classList.add("active"),null===(c=V.current)||void 0===c||c.remove(),V.current=e.on("click",(e=>{var t,l;null===(t=document.querySelector(".map-tool.active"))||void 0===t||t.classList.remove("active"),null===(l=document.querySelector(".streetview-widget"))||void 0===l||l.classList.add("active");const c=e.mapPoint.latitude+","+e.mapPoint.longitude;window.open("https://maps.google.com?layer=c&cbll="+c+"&cbp=0,0,0,0,0")}))}))}))})(e),n.a.render(Object(p.jsx)(c.Suspense,{fallback:"",children:Object(p.jsx)(j,{view:e,propertiesSelected:Z,featureSelected:Y,selectedProperties:W,toolActivated:ie})}),t))}},geometryChanged:oe,selectedProperties:W,selectedFeature:z,mapError:()=>{N(!1)},identifyClicked:()=>{ee()}})}),Object(p.jsxs)("calcite-shell-panel",{slot:"contextual-panel",position:"end","width-scale":"l",children:[Object(p.jsx)("calcite-action-bar",{slot:"action-bar",expanded:!1,children:Q.map((e=>{if(!e.isTool||P<1e3)return Object(p.jsxs)("div",{children:[Object(p.jsx)("calcite-tooltip",{placement:"leading",label:e.title,"reference-element":`${e.container}_action`,children:e.title}),Object(p.jsx)("calcite-tooltip-manager",{children:Object(p.jsx)("calcite-action",{text:e.title,name:e.container,icon:e.icon,id:`${e.container}_action`,disabled:M?null:"",onClick:async t=>{console.log("setActions"),X([...a(t,e,Q)]),requestAnimationFrame((()=>{re(e)}))},active:!0===e.isActive?"":null})})]},`${e.container}_action_contextual`)}))}),Q.map((e=>{if((!e.isTool||P<1e3)&&e.isActive)return Object(p.jsxs)("div",{className:"panel-header",children:[Object(p.jsx)("div",{className:"panel-title",children:e.title}),Object(p.jsxs)("div",{className:"header-actions",children:["Property Search"===e.title&&P>500&&Object(p.jsx)("calcite-action",{ref:K,"aria-label":"Maximize",appearance:"solid",scale:"m","calcite-hydrated":"",icon:"left-edge",onClick:e=>{(e=>{var t,l;let c=0;const i=document.querySelector("calcite-shell-panel[slot=primary-panel]");(null===i||void 0===i?void 0:i.collapsed)||(c+=i.clientWidth);const n=i.querySelector("calcite-action-bar");n&&(c+=null===n||void 0===n?void 0:n.clientWidth);const o=document.querySelector("calcite-shell-panel[slot=contextual-panel]").querySelector("calcite-action-bar");o&&(c+=null===o||void 0===o?void 0:o.clientWidth);let a=`calc(90vw - ${c}px)`;const r=e.closest("calcite-shell-panel");"right-edge"===e.icon?(e.icon="left-edge",a="350px",null===r||void 0===r||r.removeAttribute("maximized")):(e.icon="right-edge",null===r||void 0===r||r.setAttribute("maximized","")),null===r||void 0===r||null===(t=r.shadowRoot)||void 0===t||null===(l=t.querySelector(".content"))||void 0===l||l.setAttribute("style",`max-width: ${a}; width: calc(var(--calcite-panel-width-multiplier) * 100vw) !important;`);const s=null===r||void 0===r?void 0:r.querySelector("calcite-tab-nav");null===r||void 0===r||r.querySelectorAll("calcite-tab").forEach((e=>{null===e||void 0===e||e.setAttribute("style",`max-width: ${a}`)})),null===s||void 0===s||s.setAttribute("style",`max-width: ${a}`);const d=document.querySelector("calcite-tab-title[active]"),u=document.querySelector("calcite-tab-title:not([active])");d&&setTimeout((()=>{const e=new KeyboardEvent("keydown",{altKey:!1,bubbles:!0,cancelable:!0,charCode:0,code:"Enter",composed:!0,ctrlKey:!1,detail:0,isComposing:!1,key:"Enter",keyCode:13,location:0,metaKey:!1,repeat:!1,shiftKey:!1});null===u||void 0===u||u.dispatchEvent(e),null===d||void 0===d||d.dispatchEvent(e)}),250)})(e.target)}}),ne(!1),Object(p.jsxs)("calcite-tooltip-manager",{children:[Object(p.jsx)("calcite-tooltip",{label:"Tooltip label","reference-element":"closeAction",placement:"bottom-end",children:"Close panel"}),Object(p.jsx)("calcite-action",{id:"closeAction","aria-label":"Close",appearance:"solid",scale:"m","calcite-hydrated":"",icon:"x",onClick:()=>{var t,l;null===(t=document)||void 0===t||null===(l=t.querySelector("calcite-shell-panel[slot=contextual-panel]"))||void 0===l||l.setAttribute("collapsed",""),e.isActive=!1,console.log("setActions"),X([...Q])}})]})]})]},`${e.icon}_header_contextual`)})),Q.map((e=>{if(!e.isTool||P<1e3)return Object(p.jsx)("div",{className:"action-panel",id:e.container,hidden:!e.isActive},`${e.container}_contextual`)}))]}),Object(p.jsx)("div",{slot:"header",children:Object(p.jsx)(c.Suspense,{fallback:"",children:Object(p.jsx)(b,{links:u.d})})})]}),Object(p.jsx)(c.Suspense,{fallback:"",children:Object(p.jsx)(m,{tips:l,title:E,closed:!0,tipsDismissed:()=>{i([]),q("")}})})]})};t.default=E}}]);
//# sourceMappingURL=193.771141ac.chunk.js.map