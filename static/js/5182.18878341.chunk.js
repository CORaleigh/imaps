(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[5182],{67435:e=>{function t(e){return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=()=>[],t.resolve=t,t.id=67435,e.exports=t},35588:(e,t,l)=>{"use strict";l.r(t),l.d(t,{PropertyList:()=>u,default:()=>m});var i=l(72791),n=l(5935),o=l(73937),r=l(81734),a=l(61524);const s=e=>{const t=new r.Z({columnTemplates:[]}),l=["OBJECTID","PARCELPK","GlobalID"],i=["SITE_ADDRESS","OWNER","REID","PIN_NUM","PIN_EXT"];return i.forEach((l=>{const n=e.popupTemplate.fieldInfos.find((e=>e.fieldName===l));console.log(n);const r=new o.Z({label:n.label,fieldName:n.fieldName,visible:i.includes(n.fieldName),editable:!1});t.columnTemplates.push(r)})),e.popupTemplate.fieldInfos.forEach((e=>{l.includes(e.fieldName)||i.includes(e.fieldName)||t.columnTemplates.push(new o.Z({label:e.label,fieldName:e.fieldName,visible:i.includes(e.fieldName),editable:!1}))})),t},d=async(e,t,l)=>{await l.load(),l.customParameters={maxRecordCountFactor:2};const i=new n.Z({layer:l,container:e.current,tableTemplate:s(l),view:t,editingEnabled:!1,visibleElements:{header:!0,menu:!0,menuItems:{clearSelection:!1,refreshData:!0,toggleColumns:!0},selectionColumn:!1},menuConfig:{items:[new a.Z({label:"Export",iconClass:"esri-icon-download",clickFunction:()=>{(e=>{e.queryFeatures({where:e.definitionExpression,outFields:["*"]}).then((e=>{let t="";e.fields.forEach((e=>{t+=`${e.alias},`})),t+="\r\n",e.features.forEach((e=>{for(const l in e.attributes)e.attributes[l]?l.toLowerCase().includes("date")?t+=`"${new Date(e.attributes[l]).toDateString()}",`:l.toLowerCase().includes("acres")?t+=`"${parseFloat(e.attributes[l]).toFixed(2)}",`:t+=`"${e.attributes[l]}",`:t+='"",';t+="\r\n"}));let l=(new Date).toISOString();l=l.replaceAll(":","").replaceAll("-","");const i=`imaps_export_${l}.csv`,n=new Blob([t],{type:"text/csv;charset=utf-8;"}),o=document.createElement("a");if(void 0!==o.download){const e=URL.createObjectURL(n);o.setAttribute("href",e),o.setAttribute("download",i),o.style.visibility="hidden",document.body.appendChild(o),o.click(),document.body.removeChild(o)}}))})(l)}})]}});return i};var c=l(80184);const u=e=>{const t=(0,i.useRef)(null),[l,n]=(0,i.useState)(!1),[o,r]=(0,i.useState)();return(0,i.useEffect)((()=>{o&&setTimeout((()=>{const e=(null===o||void 0===o?void 0:o.container).querySelector("vaadin-grid");null===e||void 0===e||e.render(),null===e||void 0===e||e.recalculateColumnWidths(),null===e||void 0===e||e.notifyResize(),null===e||void 0===e||e.focus();const t=null===e||void 0===e?void 0:e.selectedItems;if(t){t[0]}}),1e3)}),[e.reloadTable]),(0,i.useEffect)((()=>(l||d(t,e.view,e.layer).then((t=>{r(t),n(!0),e.filter?t.layer.definitionExpression=e.filter:t.layer.definitionExpression="OBJECTID IS NOT NULL",t.tableTemplate.columnTemplates.forEach((e=>{e.fieldName.includes("PIN")&&(e.direction="asc")})),setTimeout((()=>{t.menu.items.reverse(),t.editingEnabled=!1;const l=t.container.querySelector("vaadin-grid"),i=t.container.querySelector(".esri-feature-table__title");var n;i&&(i.textContent="Selected Properties: "+(null===l||void 0===l||null===(n=l.items)||void 0===n?void 0:n.length));null===i||void 0===i||i.setAttribute("style","display: block"),t.viewModel.watch("state",(e=>{"ready"===e&&requestAnimationFrame((()=>{const e=t.container.querySelector(".esri-feature-table__title");var i;e&&(null!==l&&void 0!==l&&l.items?e.textContent="Selected Properties: "+(null===l||void 0===l||null===(i=l.items)||void 0===i?void 0:i.length):e.textContent="Selected Properties: 0")}))})),null===l||void 0===l||l.addEventListener("click",(i=>{if("VAADIN-GRID-CELL-CONTENT"===i.target.nodeName){var n;t.clearSelection();const o=(null===(n=l.getEventContext(i))||void 0===n?void 0:n.item).feature;t.selectRows(o),e.featureSelected(o),requestAnimationFrame((()=>{const e=t.container.querySelector(".esri-feature-table__title");var i;e&&(e.textContent="Selected Properties: "+(null===l||void 0===l||null===(i=l.items)||void 0===i?void 0:i.length))}))}}))}),2e3)})),()=>{o&&o.destroy()})),[]),(0,i.useEffect)((()=>{o&&(o.layer.definitionExpression=e.filter)}),[e.filter]),(0,c.jsx)("div",{ref:t})},m=u}}]);
//# sourceMappingURL=5182.18878341.chunk.js.map