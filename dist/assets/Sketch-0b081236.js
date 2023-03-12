import{S as _,bb as ee,bc as te,bd as D,af as J,be as le,bf as ne,bg as ie,b5 as oe,bh as ce,R as j,r as a,c as S,k as t,q as v,b7 as K,bi as ae,bj as se,m as W,o as b,bk as re,V as X,$ as I,b3 as de,bl as ue,bm as he,bn as Q,bo as me,b6 as ye,p as f,bp as Y}from"./index-7753bab1.js";import pe from"./MapNotesLayer-2b87c7d7.js";import"./objectIdUtils-789e911a.js";let R,H,B,V,h,M="",w=new _({color:[255,0,0,.5],style:"solid",outline:{width:2,color:[255,0,0,1]}}),T=new ee({width:1,color:[255,0,0,1],style:"solid",cap:"round",join:"round"}),k=new te({color:[255,0,0,1],haloColor:[255,255,255,1],haloSize:"1px",text:"",xoffset:3,yoffset:3,font:{size:10,family:"Aerial",weight:"bold"}}),E,g,y,x,C;const xe=async(e,l,i,n)=>{h=new pe({listMode:"hide",id:"notes-layer"}),e.map.add(h),await e.whenLayerView(h),R=h.pointLayer,H=h.polylineLayer,B=h.polygonLayer,V=h.textLayer,g=G(R,e),y=G(H,e),x=G(B,e),x.activeFillSymbol=w,y.activeLineSymbol=T,C=G(V,e),[g,y,x,C].forEach(o=>{o==null||o.on("create",u=>{u.state==="cancel"&&o.activeTool!==null&&l("select")}),o==null||o.on("update",u=>{(u.state==="start"||u.state==="active")&&n([...u.graphics])})})},G=(e,l,i)=>{const n=new oe({view:l,layer:e,updateOnGraphicClick:!0});return n.on("create",be),n},be=e=>{e.state==="complete"&&(e.graphic.geometry.type==="polygon"&&(e.graphic.symbol=w,h.polygonLayer.add(e.graphic),x.create(e.tool)),e.graphic.geometry.type==="polyline"&&(e.graphic.symbol=T,h.polylineLayer.add(e.graphic),y.create(e.tool)),M==="text"&&(e.graphic.symbol=k,h.textLayer.add(e.graphic),C.create("point")),M==="point"&&(e.graphic.symbol=E,h.pointLayer.add(e.graphic),g.create("point")))},Se=()=>{try{g.updateOnGraphicClick=!0,x.updateOnGraphicClick=!0,y.updateOnGraphicClick=!0,C.updateOnGraphicClick=!0}catch{}},L=(e,l,i)=>{debugger;Se(),M=e,i(e===l?"":e),l===""&&q(),["polygon","rectangle","circle"].includes(e)&&x.create(e),["polyline"].includes(e)&&y.create(e),e==="text"&&y.create("point"),e==="point"&&y.create("point")};let N=!1;const fe=async(e,l,i)=>{const n=document.getElementById("polygon-preview");n&&!N&&(w.color=e,w.outline.color=l,w.outline.width=i,x&&(x.activeFillSymbol=w,h.polygonLayer&&A(h.polygonLayer,w,x)),N=!0,n.innerHTML="",await D(w,{node:n,size:24}),N=!1)},A=(e,l,i)=>{if(i.updateGraphics.length){const n=i.updateGraphics.getItemAt(0);e.remove(n),n.symbol=l;const r=n.clone();e.add(r),setTimeout(()=>{i.cancel(),i.update(r)})}},ge=async(e,l,i)=>{const n=await J(`${e.url}${e.cimRef.replace(".","")}`);E=new le({data:{type:"CIMSymbolReference",symbol:n==null?void 0:n.data}}),ne(E,l),ie(E,i),h.pointLayer&&A(h.pointLayer,E,g),g.pointSymbol=E;const r=document.getElementById("icon-preview");r&&(r.innerHTML="",D(E,{node:r,size:i}))},Ce=(e,l)=>{T.color=e,T.width=l,y&&(y.polylineSymbol=T,y.updateGraphics.forEach(n=>{n.symbol=T}),h.polylineLayer&&A(h.polylineLayer,T,y));const i=document.getElementById("line-preview");i&&(i.innerHTML="",D(T,{node:i,size:l}))},ve=(e,l,i,n,r,o)=>{k.color=l,k.font.size=e,k.haloColor=n,k.haloSize=r?i:0,k.text=o,C.pointSymbol=k,h.textLayer&&A(h.textLayer,k,C)},q=()=>{g.cancel(),y.cancel(),x.cancel(),C.cancel(),g.updateOnGraphicClick=!1,x.updateOnGraphicClick=!1,y.updateOnGraphicClick=!1,C.updateOnGraphicClick=!1},je=(e,l)=>{e(""),l([]),g.cancel(),x.cancel(),y.cancel(),C.cancel(),h.polygonLayer.graphics.removeAll(),h.pointLayer.graphics.removeAll(),h.polylineLayer.graphics.removeAll(),h.textLayer.graphics.removeAll()},ke=(e,l)=>new Promise((i,n)=>{const r=[];e.forEach(u=>{const c=new ce({styleUrl:`${l}/${u}/data`,name:"Pins"});r.push(J(c.styleUrl))});const o=[];Promise.all(r).then(u=>{u.forEach(c=>{c.data.items.forEach(d=>{d.url=c.url.replace("data",""),o.push(d)})}),i(o)})}),we=()=>{g.cancel(),x.cancel(),y.cancel(),C.cancel()},Te=(e,l)=>{R.removeMany(e),B.removeMany(e),H.removeMany(e),V.removeMany(e),requestAnimationFrame(()=>{l(i=>[])})};function Le(e){const l=a.useRef(null),i=a.useRef(null),[n,r]=a.useState(),[o,u]=a.useState(0);return a.useEffect(()=>{!n&&e.color&&(r(new S(e.color)),u((1-e.color[3])*100))},[e.color]),t.jsxs("div",{id:e.id,children:[t.jsxs(v,{children:[e.label," Color",t.jsx(K,{id:`${e.id}-popover-button`,width:"half",iconEnd:"pencil",kind:"neutral",appearance:"outline",children:t.jsx(ae,{color:n==null?void 0:n.toHex()})})]}),t.jsx(se,{ref:l,overlayPositioning:"fixed",placement:"top-start",label:"",referenceElement:`${e.id}-popover-button`,children:t.jsxs(W,{heading:"Color",children:[t.jsx(b,{icon:"x",text:"",slot:"header-actions-end",onClick:()=>{l.current&&(l.current.open=!l.current.open);const c=new S(n);c.a=1-o/100,e.colorSet(c)}}),t.jsx(re,{ref:i,hideSaved:!0,hideHex:!0,hideChannels:!0,value:n?n.toHex():"#FF0000",onCalciteColorPickerInput:c=>r(new S(c.target.value))})]})}),!e.hideTransparency&&t.jsxs(v,{children:[e.label," Transparency",t.jsxs("div",{className:"slider-input",children:[t.jsx(X,{max:100,min:0,value:o,onCalciteSliderInput:c=>{let d=c.target.value;d>100&&(d=100),d<0&&(d=0),u(d);const m=new S(n);m.a=1-o/100,e.colorSet(m)}}),t.jsx(I,{max:100,min:0,type:"number",numberButtonType:"none",suffixText:"%",value:o,onCalciteInputInput:c=>{let d=parseInt(c.target.value);d>100&&(d=100),d<0&&(d=0),u(d);const m=new S(n);m.a=1-o/100,e.colorSet(m)}})]})]})]})}const P=j.memo(Le);function Ee(e){const[l,i]=a.useState();return a.useEffect(()=>{i(e.value)},[e.value]),t.jsxs(v,{children:[e.label,t.jsxs("div",{className:"slider-input",children:[t.jsx(X,{max:e.max,min:e.min,value:l,onCalciteSliderInput:n=>{i(n.target.value),e.sizeSet(n.target.value)}}),t.jsx(I,{type:"number",numberButtonType:"none",min:e.min,max:e.max,value:l,suffixText:"px",onCalciteInputInput:n=>{i(parseFloat(n.target.value)),e.sizeSet(parseFloat(n.target.value))}})]})]})}const Z=j.memo(Ee);function Ie(e){const[l,i]=a.useState(new S([255,0,0,1])),[n,r]=a.useState(2);return a.useEffect(()=>{l&&n&&e.polylineSymbolUpdated(l,n)},[l,n]),t.jsxs("div",{id:"line-symbols",children:[t.jsx("div",{id:"line-preview",className:"preview"}),t.jsx(P,{id:"line",label:"Line",color:l.toRgba(),colorSet:o=>{i(o),e.polylineSymbolUpdated(o,n)}}),t.jsx(Z,{value:n,min:.1,max:18,label:"Width",sizeSet:o=>{r(o),e.polylineSymbolUpdated(l,n)}})]})}const Pe=j.memo(Ie);function $e(e){const[l,i]=a.useState(new S([255,0,0,.5])),[n,r]=a.useState(new S([255,0,0,1])),[o,u]=a.useState(2);return a.useEffect(()=>{l&&n&&o&&e.polygonSymbolUpdated(l,n,o)},[l,n,o]),t.jsxs("div",{id:"polygon-symbols",children:[t.jsx("div",{id:"polygon-preview",className:"preview"}),t.jsx(P,{id:"polygon-fill",color:l.toRgba(),label:"Fill",colorSet:c=>{i(c),e.polygonSymbolUpdated(c,n,o)}}),t.jsx(P,{id:"polygon-outline",color:n.toRgba(),label:"Outline",colorSet:c=>{r(c),e.polygonSymbolUpdated(l,c,o)}}),t.jsx(Z,{label:"Outline Width",min:.1,max:18,value:o,sizeSet:c=>{u(c),e.polygonSymbolUpdated(l,n,o)}})]})}const Oe=j.memo($e);function ze(e){const[l,i]=a.useState(new S([255,0,0,1])),[n,r]=a.useState(10),[o,u]=a.useState(!1),[c,d]=a.useState(1),[m,$]=a.useState(new S([255,255,255,1])),[p,O]=a.useState("");return t.jsxs("div",{id:"text-symbols",children:[t.jsxs(v,{children:["Text",t.jsx(I,{type:"textarea",scale:"m",value:p,onCalciteInputInput:s=>{O(s.target.value),requestAnimationFrame(()=>{e.textSymbolUpdated(n,l,c,m,o,s.target.value)})},onCalciteInputChange:s=>{}})]}),t.jsx(P,{id:"font",label:"Font",color:l.toRgba(),hideTransparency:!0,colorSet:s=>{i(s),e.textSymbolUpdated(n,s,c,m,o,p)}}),t.jsxs(v,{children:["Font Size",t.jsx(I,{type:"number",min:5,max:125,value:n.toString(),onCalciteInputInput:s=>{r(parseFloat(s.target.value)),e.textSymbolUpdated(n,l,c,m,o,p)}})]}),t.jsxs(v,{layout:"inline",children:["Halo",t.jsx(de,{checked:o?!0:void 0,onCalciteSwitchChange:s=>{u(s.target.checked),e.textSymbolUpdated(n,l,c,m,o,p)}})]}),t.jsxs("div",{id:"halo",hidden:o?void 0:!0,children:[t.jsx(P,{id:"halo",label:"",color:m.toRgba(),hideTransparency:!0,colorSet:s=>{$(s),e.textSymbolUpdated(n,l,c,s,o,p)}}),t.jsxs(v,{children:["Size",t.jsx(I,{type:"number",min:1,max:10,value:c.toString(),onCalciteInputInput:s=>{d(parseFloat(s.target.value)),e.textSymbolUpdated(n,l,c,m,o,p)}})]})]})]})}const Ue=j.memo(ze);function Fe(e){return t.jsxs("div",{id:"icon-picker",children:[t.jsx("div",{id:"icon-preview",className:"preview"}),t.jsx(v,{alignment:"start",scale:"m",layout:"default",children:t.jsx("button",{className:"change-symbol-trigger",type:"button",onClick:()=>{e.pickerClicked()},children:t.jsxs("div",{className:"container",children:[e.symbol&&t.jsx("div",{className:"icon-symbol",children:t.jsx("img",{src:`${e.symbol.url}${e.symbol.thumbnail.href.replace(".","")}`,alt:e.symbol.title,width:50,height:50})}),t.jsx("div",{className:"icon-label",children:e.symbol.title}),t.jsx(ue,{icon:"chevron-right"})]})})})]})}const Ge=j.memo(Fe);function Ae(e){const[l,i]=a.useState([]);return a.useEffect(()=>{l&&e.symbols&&i(e.symbols)},[]),t.jsx("div",{id:"icon-selection",children:t.jsxs(he,{children:[t.jsx(Q,{}),t.jsx(Q,{heading:"Change Symbol",onCalciteFlowItemBack:()=>{e.backClicked()},children:t.jsx(me,{heading:"",children:t.jsx("div",{className:"palette",children:l&&l.map((n,r)=>t.jsx("img",{onClick:()=>{e.iconSelected(n),e.backClicked()},className:"item",alt:n.title,src:`${n.url}${n.thumbnail.href.replace(".","")}`},`icon-${r}`))})})})]})})}const Ne=j.memo(Ae);function Re(e){const[l,i]=a.useState([]),[n,r]=a.useState(),[o,u]=a.useState(16),c="https://www.arcgis.com/sharing/rest/content/items/",d=["a63b3a4631ae41d4a1bc3ba6d9c85bfe","70ccf6bcbd304773a164be896e76edd3"],[m,$]=a.useState("main"),[p,O]=a.useState(new S([255,0,0,1]));return a.useEffect(()=>{ke(d,c).then(s=>{i(s),s.length&&(r(s[0]),e.pointSymbolUpdated(s[0],p,o))})},[]),t.jsx("div",{id:"point-symbols",children:l.length&&t.jsxs("div",{children:[m==="main"&&t.jsxs(W,{children:[t.jsx(Ge,{pickerClicked:()=>$("icon"),symbol:n}),t.jsx(P,{id:"point",label:"Point",color:p.toRgba(),colorSet:s=>{O(s),e.pointSymbolUpdated(n,s,o)}}),t.jsxs(v,{children:["Size",t.jsx(I,{type:"number",min:6,max:72,value:o.toString(),onCalciteInputChange:s=>{u(parseFloat(s.target.value)),e.pointSymbolUpdated(n,p,parseFloat(s.target.value))}})]})]}),m==="icon"&&t.jsx(Ne,{iconSelected:s=>{r(s),e.pointSymbolUpdated(s,p,o)},backClicked:()=>$("main"),symbols:l})]})})}const He=j.memo(Re),Be={title:"Sketch Tips",tips:[{title:"Custom Symbols",text:"You can now specify custom symbols in the sketch tool by changing the fill color, outline color, size, etc. of your graphics."}]},Ve=e=>{const l=a.useRef(!1),[i,n]=a.useState(""),[r,o]=a.useState(!1),[u,c]=a.useState([]);a.useEffect(()=>{l.current||xe(e.view,n,u,c)},[]),a.useEffect(()=>{o(e.isActive),e.isActive?e.view.popup.autoOpenEnabled=!1:(e.toolDismissed(),q(),n(""),c([]))},[e.isActive]);const d=a.useCallback(()=>{e.toolDismissed(),q(),n(""),c([])},[]),m=a.useCallback(p=>{e.showTips(Be)},[]);return{activeSketchTool:i,setActiveSketchTool:n,selectedGraphics:u,setSelectedGraphics:c,isActive:r,toolDismissed:d,tipsClicked:m,checkGeometryType:(p,O)=>{const s=p.map(U=>{let F=U.geometry.type;return U.symbol.type==="text"&&(F="text"),F}),z=s.filter((U,F)=>s.indexOf(U)===F);if(z.length>1||z.length<1||p.length!==1)return!1;if(z.length===1&&z[0]===O)return!0}}};function Me(e){const{activeSketchTool:l,setActiveSketchTool:i,selectedGraphics:n,setSelectedGraphics:r,isActive:o,toolDismissed:u,tipsClicked:c,checkGeometryType:d}=Ve(e);return t.jsxs(W,{id:"sketch-panel",heading:"Sketch","data-panel":"sketch",hidden:!o,closed:o?void 0:!0,closable:!0,onCalcitePanelClose:u,children:[t.jsx(b,{id:"tip",icon:"lightbulb",text:"Tips",slot:"header-actions-end",onClick:c}),t.jsx(b,{id:"collapseTool",icon:"chevron-up",text:"",slot:"header-actions-end",onClick:ye}),t.jsx(f,{closeOnClick:!0,label:"Show Tip",referenceElement:"tip",children:"Show Tip"}),t.jsx(f,{closeOnClick:!0,label:"Collapse",referenceElement:"collapseTool",children:"Collapse"}),t.jsxs("div",{id:"sketch-tools",children:[t.jsxs("div",{className:"sticky",children:[t.jsxs(Y,{layout:"horizontal",children:[t.jsx(b,{id:"point",active:l==="point"?!0:void 0,icon:"pin",text:"",onClick:()=>L("point",l,i)}),t.jsx(f,{closeOnClick:!0,label:"Point",referenceElement:"point",children:"Point"}),t.jsx(b,{id:"line",active:l==="polyline"?!0:void 0,icon:"line",text:"",onClick:()=>L("polyline",l,i)}),t.jsx(f,{closeOnClick:!0,label:"Line",referenceElement:"line",children:"Line"}),t.jsx(b,{id:"polygon",active:l==="polygon"?!0:void 0,icon:"polygon",text:"",onClick:()=>L("polygon",l,i)}),t.jsx(f,{closeOnClick:!0,label:"Polygon",referenceElement:"polygon",children:"Polygon"}),t.jsx(b,{id:"rectangle",active:l==="rectangle"?!0:void 0,icon:"rectangle",text:"",onClick:()=>L("rectangle",l,i)}),t.jsx(f,{closeOnClick:!0,label:"Rectangle",referenceElement:"rectangle",children:"Rectangle"}),t.jsx(b,{id:"circle",active:l==="circle"?!0:void 0,icon:"circle",text:"",onClick:()=>L("circle",l,i)}),t.jsx(f,{closeOnClick:!0,label:"Circle",referenceElement:"circle",children:"Circle"}),t.jsx(b,{id:"text",active:l==="text"?!0:void 0,icon:"text",text:"",onClick:()=>L("text",l,i)}),t.jsx(f,{closeOnClick:!0,label:"Text",referenceElement:"text",children:"Text"})]}),t.jsxs(Y,{layout:"horizontal",children:[t.jsx(b,{id:"selectSketch",icon:"cursor",text:"",active:l==="select"?!0:void 0,onClick:()=>{we(),L("select",l,i),setTimeout(()=>{e.view.popup.autoOpenEnabled=!1},1e3)}}),t.jsx(f,{closeOnClick:!0,label:"Select Sketch",referenceElement:"selectSketch",children:"Select Sketch"}),t.jsx(b,{id:"clearSketch",icon:"trash",text:"",onClick:()=>je(i,r)}),t.jsx(f,{closeOnClick:!0,label:"Clear Sketches",referenceElement:"clearSketch",children:"Clear Sketches"})]})]}),t.jsx("div",{id:"point-symbols",className:"symbol",hidden:l==="point"||d(n,"point")&&l==="select"?void 0:!0,children:t.jsx(He,{pointSymbolUpdated:ge})}),t.jsx("div",{id:"line-symbols",className:"symbol",hidden:l==="polyline"||d(n,"polyline")&&l==="select"?void 0:!0,children:t.jsx(Pe,{polylineSymbolUpdated:Ce})}),t.jsx("div",{id:"polygon-symbols",className:"symbol",hidden:["polygon","rectangle","circle"].includes(l)||d(n,"polygon")&&l==="select"?void 0:!0,children:t.jsx(Oe,{polygonSymbolUpdated:fe})}),t.jsx("div",{id:"text-symbols",className:"symbol",hidden:l==="text"||d(n,"text")&&l==="select"?void 0:!0,children:t.jsx(Ue,{textSymbolUpdated:ve})}),n.length>0&&t.jsxs(K,{onClick:()=>Te(n,r),alignment:"center",kind:"danger",appearance:"transparent","icon-end":"trash",children:[n.length," ",n.length>1?"features":"feature"]})]})]})}const Qe=j.memo(Me);export{Qe as default};
