/*! For license information please see 172.b77663f8.chunk.js.LICENSE.txt */
(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[172],{1083:function(e,t,i){},1269:function(e,t,i){"use strict";i.r(t),i.d(t,"PropertyTable",(function(){return w}));var r=i(12),n=i(142),a=i(1068);let s="";const o=(e,t,i)=>{new a.a({iconClass:"esri-icon-handle-horizontal",container:t,items:[{label:"Export",clickFunction:()=>{l(e)}},{label:"Show/Hide Columns",iconClass:"esri-icon-right",autoCloseMenu:!1,items:e.popupTemplate.fieldInfos.filter((e=>!["OBJECTID","GlobalID"].includes(e.fieldName))).map((t=>({label:t.label,selectionEnabled:!0,selected:t.visible,iconClass:"esri-icon-check-mark",clickFunction:t=>{var r;const n=e.popupTemplate.fieldInfos.find((e=>e.label===t.item.label));n.visible=t.item.selected;(null===(r=Array.from(i))||void 0===r?void 0:r.find((e=>(null===e||void 0===e?void 0:e.getAttribute("name"))===n.fieldName))).hidden=!t.item.selected}}))),clickFunction:function(e){e.item.iconClass="esri-icon-down"}}]})},A=e=>{const t=[],i=["OBJECTID","PARCELPK","GlobalID"],r=["SITE_ADDRESS","OWNER","REID","PIN_NUM","PIN_EXT"];return r.forEach((i=>{const r=e.fields.find((e=>e.name===i)),n={path:`attributes.${r.name}`,header:r.alias,width:"12em",name:r.name,key:`${r.name.toLowerCase()}_column`};t.push(n)})),e.fields.forEach((e=>{if(!i.includes(e.name)&&!r.includes(e.name)){const i={path:`attributes.${e.name}`,header:e.alias,width:"12em",name:e.name,key:`${e.name.toLowerCase()}_column`,hidden:!0};t.push(i)}})),t},l=e=>{e.queryFeatures({where:s,outFields:["*"]}).then((e=>{let t="";e.fields.forEach((e=>{t+=`${e.alias},`})),t+="\r\n",e.features.forEach((e=>{for(const i in e.attributes)e.attributes[i]?i.toLowerCase().includes("date")?t+=`"${new Date(e.attributes[i]).toDateString()}",`:i.toLowerCase().includes("acres")?t+=`"${parseFloat(e.attributes[i]).toFixed(2)}",`:t+=`"${e.attributes[i]}",`:t+='"",';t+="\r\n"}));let i=(new Date).toISOString();i=i.replaceAll(":","").replaceAll("-","");const r=`imaps_export_${i}.csv`,n=new Blob([t],{type:"text/csv;charset=utf-8;"}),a=document.createElement("a");if(void 0!==a.download){const e=URL.createObjectURL(n);a.setAttribute("href",e),a.setAttribute("download",r),a.style.visibility="hidden",document.body.appendChild(a),a.click(),document.body.removeChild(a)}}))};i(29);var c=i(7);const d=c.a`<dom-module id="lumo-grid-sorter" theme-for="vaadin-grid-sorter">
  <template>
    <style>
      :host {
        justify-content: flex-start;
        align-items: baseline;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      [part="content"] {
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      [part="indicators"] {
        margin-left: var(--lumo-space-s);
      }

      :host(:not([direction])) [part="indicators"]::before {
        opacity: 0.2;
      }

      :host([direction]) {
        color: var(--lumo-primary-text-color);
      }

      [part="order"] {
        font-size: var(--lumo-font-size-xxs);
        line-height: 1;
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="indicators"] {
        margin-right: var(--lumo-space-s);
        margin-left: 0;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(d.content);i(16),i(30);var u=i(26),m=i(44),h=i(8);const p=document.createElement("template");p.innerHTML="<custom-style>\n  <style>\n    @font-face {\n      font-family: 'vaadin-grid-sorter-icons';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQwAA0AAAAABuwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEFAAAABkAAAAcfep+mUdERUYAAAP4AAAAHAAAAB4AJwAOT1MvMgAAAZgAAAA/AAAAYA8TBPpjbWFwAAAB7AAAAFUAAAFeF1fZ4mdhc3AAAAPwAAAACAAAAAgAAAAQZ2x5ZgAAAlgAAABcAAAAnMvguMloZWFkAAABMAAAAC8AAAA2C5Ap72hoZWEAAAFgAAAAHQAAACQGbQPHaG10eAAAAdgAAAAUAAAAHAoAAABsb2NhAAACRAAAABIAAAASAIwAYG1heHAAAAGAAAAAFgAAACAACwAKbmFtZQAAArQAAAECAAACZxWCgKhwb3N0AAADuAAAADUAAABZCrApUXicY2BkYGAA4rDECVrx/DZfGbhZGEDgyqNPOxH0/wNMq5kPALkcDEwgUQBWRA0dAHicY2BkYGA+8P8AAwMLAwgwrWZgZEAFbABY4QM8AAAAeJxjYGRgYOAAQiYGEICQSAAAAi8AFgAAeJxjYGY6yziBgZWBgWkm0xkGBoZ+CM34msGYkZMBFTAKoAkwODAwvmRiPvD/AIMDMxCD1CDJKjAwAgBktQsXAHicY2GAAMZQCM0EwqshbAALxAEKeJxjYGBgZoBgGQZGBhCIAPIYwXwWBhsgzcXAwcAEhIwMCi+Z/v/9/x+sSuElA4T9/4k4K1gHFwMMMILMY2QDYmaoABOQYGJABUA7WBiGNwAAJd4NIQAAAAAAAAAACAAIABAAGAAmAEAATgAAeJyNjLENgDAMBP9tIURJwQCMQccSZgk2i5fIYBDAidJjycXr7x5EPwE2wY8si7jmyBNXGo/bNBerxJNrpxhbO3/fEFpx8ZICpV+ghxJ74fAMe+h7Ox14AbrsHB14nK2QQWrDMBRER4mTkhQK3ZRQKOgCNk7oGQqhhEIX2WSlWEI1BAlkJ5CDdNsj5Ey9Rncdi38ES+jzNJo/HwTgATcoDEthhY3wBHc4CE+pfwsX5F/hGe7Vo/AcK/UhvMSz+mGXKhZU6pww8ISz3oWn1BvhgnwTnuEJf8Jz1OpFeIlX9YULDLdFi4ASHolkSR0iuYdjLak1vAequBhj21D61Nqyi6l3qWybGPjySbPHGScGJl6dP58MYcQRI0bts7mjebBqrFENH7t3qWtj0OuqHnXcW7b0HOTZFnKryRGW2hFX1m0O2vEM3opNMfTau+CS6Z3Vx6veNnEXY6jwDxhsc2gAAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSrpYEBlIbxjQDrzgsuAAAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKyoz1cD0o087YTQATOcIewAAAA==) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n  </style>\n</custom-style>",document.head.appendChild(p.content);class f extends(Object(u.a)(Object(m.a)(h.a))){static get template(){return c.a`
    <style>
      :host {
        display: inline-flex;
        cursor: pointer;
        max-width: 100%;
      }

      [part="content"] {
        flex: 1 1 auto;
      }

      [part="indicators"] {
        position: relative;
        align-self: center;
        flex: none;
      }

      [part="order"] {
        display: inline;
        vertical-align: super;
      }

      [part="indicators"]::before {
        font-family: 'vaadin-grid-sorter-icons';
        display: inline-block;
      }

      :host(:not([direction])) [part="indicators"]::before {
        content: "\\e901";
      }

      :host([direction=asc]) [part="indicators"]::before {
        content: "\\e900";
      }

      :host([direction=desc]) [part="indicators"]::before {
        content: "\\e902";
      }
    </style>

    <div part="content">
      <slot></slot>
    </div>
    <div part="indicators">
      <span part="order">[[_getDisplayOrder(_order)]]</span>
    </div>
`}static get is(){return"vaadin-grid-sorter"}static get properties(){return{path:String,direction:{type:String,reflectToAttribute:!0,notify:!0,value:null},_order:{type:Number,value:null},_isConnected:{type:Boolean,value:!1}}}static get observers(){return["_pathOrDirectionChanged(path, direction, _isConnected)","_directionOrOrderChanged(direction, _order)"]}ready(){super.ready(),this.addEventListener("click",this._onClick.bind(this))}connectedCallback(){super.connectedCallback(),this._isConnected=!0}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1}_pathOrDirectionChanged(e,t,i){void 0!==e&&void 0!==t&&void 0!==i&&i&&this.dispatchEvent(new CustomEvent("sorter-changed",{bubbles:!0,composed:!0}))}_getDisplayOrder(e){return null===e?"":e+1}_onClick(e){const t=this.getRootNode().activeElement;this!==t&&this.contains(t)||(e.preventDefault(),"asc"===this.direction?this.direction="desc":"desc"===this.direction?this.direction=null:this.direction="asc")}_directionOrOrderChanged(e,t){void 0!==e&&void 0!==t&&(/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&this.root&&this.root.querySelectorAll("*").forEach((function(e){e.style["-webkit-backface-visibility"]="visible",e.style["-webkit-backface-visibility"]=""})))}}customElements.define(f.is,f);var b=i(58);class g extends b.a{static get template(){return c.a`
    <template class="header" id="headerTemplate">
      <vaadin-grid-sorter path="[[path]]" direction="{{direction}}">[[_getHeader(header, path)]]</vaadin-grid-sorter>
    </template>
`}static get is(){return"vaadin-grid-sort-column"}static get properties(){return{path:String,direction:{type:String,notify:!0}}}_prepareHeaderTemplate(){const e=this._prepareTemplatizer(this.$.headerTemplate);return e.templatizer.dataHost=this,e}_getHeader(e,t){return e||this._generateHeader(t)}}customElements.define(g.is,g);var v=i(53),E=(i(1083),i(25));const w=e=>{const[t,i]=Object(r.useState)(!1),[a,l]=Object(r.useState)(!1),[c,d]=Object(r.useState)(0),[u,m]=Object(r.useState)([]),h=Object(r.useRef)(),p=Object(r.useRef)(),f=Object(r.useRef)(null),{theme:b}=Object(r.useContext)(v.a);return Object(r.useEffect)((()=>{l(e.loading)}),[e.loading]),Object(r.useEffect)((()=>{p.current&&(p.current.render(),p.current.recalculateColumnWidths(),p.current.notifyResize())}),[e.selectedTab]),Object(r.useEffect)((()=>{var r;t||e.layer&&((e=>n.c((t=>{e.load().then((()=>{e.popupTemplate.fieldInfos.forEach((e=>{["SITE_ADDRESS","OWNER","PIN_NUM","PIN_EXT","REID"].includes(e.fieldName)?e.visible=!0:e.visible=!1})),customElements.whenDefined("vaadin-grid").then((()=>{t(A(e))}))}))})))(e.layer).then((e=>{m([...e]),((e,t,i)=>{const r=e.querySelectorAll("vaadin-grid-sort-column");o(t,i,r),r.forEach((e=>{e.renderer=(e,i,r)=>{const n=t.fields.find((e=>e.alias===i.header));e.firstElementChild||(e.innerHTML='<div style="white-space: normal"></div>'),n&&(e.firstElementChild.textContent=r.item.attributes[n.name],n.name.includes("DATE")&&r.item.attributes[n.name]&&(e.firstElementChild.textContent=new Date(r.item.attributes[n.name]).toLocaleDateString()),(n.name.includes("VAL")||n.name.includes("PRICE"))&&r.item.attributes[n.name]&&(e.firstElementChild.textContent=`$${r.item.attributes[n.name].toLocaleString("en-US",{maximumFractionDigits:0})}`))}}))})(p.current,h.current,f.current)})),h.current=e.layer,i(!0),null===(r=p.current)||void 0===r||r.addEventListener("active-item-changed",(t=>{const i=t.detail.value;var r,n,a;i&&(null===(r=p.current)||void 0===r||null===(n=r.selectedItems)||void 0===n||n.forEach((e=>{var t;null===(t=p.current)||void 0===t||t.deselectItem(e)})),null===(a=p.current)||void 0===a||a.selectItem(i),e.featureSelected(i))})));return()=>{}}),[e.layer]),Object(r.useEffect)((()=>{h.current&&e.filter&&(l(!0),((e,t,i)=>(s=t,n.c((r=>{e.queryFeatures({where:t,returnGeometry:!0,outFields:["*"]}).then((e=>{i.items=e.features,i.scrollToIndex(0),r(e.features.length)}))}))))(h.current,e.filter,p.current).then((e=>{l(!1),d(e)})))}),[e.filter]),Object(E.jsxs)("div",{className:"panel",children:[Object(E.jsxs)("div",{className:"esri-feature-table__header",children:[Object(E.jsx)("div",{className:"esri-feature-table__loader-container",children:Object(E.jsx)("div",{className:"esri-feature-table__loader "+(a?"loading":"")})}),Object(E.jsxs)("div",{className:"esri-feature-table__title",children:["Features: ",c]}),Object(E.jsx)("div",{className:"esri-feature-table__menu",children:Object(E.jsx)("div",{"data-node-ref":"_rootNode",className:"esri-button-menu esri-widget",children:Object(E.jsx)("button",{"aria-pressed":"false","aria-controls":"1783678efcd-widget-1-menu","aria-haspopup":"true","aria-label":"Options",className:"esri-button-menu__button ",ref:f,title:"Options",type:"button"})})})]}),Object(E.jsx)("vaadin-grid",{"aria-label":"Sorting Example",theme:`${b} compact`,className:"esri-widget esri-grid",ref:p,children:u.map((e=>Object(E.jsx)("vaadin-grid-sort-column",{header:e.header,path:e.path,id:e.key,width:e.width,hidden:e.hidden?"":null,name:e.name},e.key)))})]})};t.default=w}}]);
//# sourceMappingURL=172.b77663f8.chunk.js.map