import{b4 as L,b5 as A,g as R,r as o,R as O,k as l,m as D,o as a,b6 as V,p as d,q as M,$ as I,b7 as $}from"./index-84d82762.js";import{buffer as P}from"./geometryEngine-6532c452.js";import"./geometryEngineBase-e1a33b0a.js";import"./hydrated-09767936.js";let m=0,C,u,n,h;const k=()=>{u.cancel(),n&&n.remove(),h.removeAll()},B=async(e,c,i)=>{h=new L({listMode:"hide"}),e.map.add(h),u=new A({view:e,layer:h,defaultCreateOptions:{mode:"hybrid"}}),C=e.allLayerViews.find(t=>t.layer.title.includes("Property")&&t.layer.type==="feature");const r=e.map.allLayers.find(t=>t.title.includes("Property")&&t.type==="feature");return C=await e.whenLayerView(r),u.watch("activeTool",t=>{i(t)}),u.on("create",async t=>{if((t.state==="start"||t.state==="cancel")&&(h.graphics.removeAll(),n&&n.remove()),t.state==="complete"&&(m>0?c(v(m,t.graphic)):c(t.graphic.geometry),u.create(t.tool),n&&n.remove(),h.graphics.removeAll()),t.state==="active")if(m===0){const s=await j(e,t.graphic.geometry);n&&n.remove(),n=s}else{const s=v(m,t.graphic);u.layer.removeAll();const g={type:"simple-fill",color:[255,255,0,.2],style:"solid"};u.layer.add(new R({geometry:s,symbol:g}));const y=await j(e,s);n&&n.remove(),n=y}}),u},v=(e,c)=>P(c.geometry,e,"feet"),j=async(e,c)=>{const i=await C.queryFeatures({geometry:c,outSpatialReference:e.spatialReference});return C.highlight(i.features)},q=(e,c)=>{e.target.value===""?m=0:m=parseInt(e.target.value),c(m)},p=(e,c)=>{e.create(c)},H=(e,c,i)=>{i(P(e.geometry,c,"feet"))},N={title:"Property Select Tips",tips:[{title:"Long Press to Select",text:"You can now select a property by long pressing on a property on the map.  This can be done at any time, even without having the property select tool active."}]},z=e=>{const c=o.useRef(!1),[i,r]=o.useState(!1),[t,s]=o.useState(""),[g,y]=o.useState(0),[f,b]=o.useState(),[x,w]=o.useState(void 0);o.useEffect(()=>(c.current||(c.current=!0,B(e.view,e.geometrySet,s).then(S=>b(S))),()=>{f&&f.destroy()}),[]),o.useEffect(()=>{w(e.selectedProperty)},[e.selectedProperty]),o.useEffect(()=>{f&&e.toolDismissed&&(f.cancel(),s(""))},[e.toolDismissed]),o.useEffect(()=>{r(e.isActive),e.isActive||k()},[e.isActive]);const E=o.useCallback(S=>{e.toolDismissed(),k()},[]),T=o.useCallback(S=>{e.showTips(N)},[]);return{isActive:i,selectedTool:t,setSelectedTool:s,sketchVm:f,distance:g,setDistance:y,selectedProperty:x,toolDismissed:E,tipsClicked:T}},F=e=>{const{isActive:c,selectedTool:i,setSelectedTool:r,sketchVm:t,distance:s,setDistance:g,selectedProperty:y,toolDismissed:f,tipsClicked:b}=z(e);return l.jsxs(D,{id:"select-panel",heading:"Select","data-panel":"select",hidden:!c,closed:c?void 0:!0,closable:!0,onCalcitePanelClose:f,children:[l.jsx(a,{id:"tip",icon:"lightbulb",text:"Tips",slot:"header-actions-end",onClick:b}),l.jsx(a,{id:"collapseTool",icon:"chevron-up",text:"",slot:"header-actions-end",onClick:V}),l.jsx(d,{closeOnClick:!0,label:"Show Tip",referenceElement:"tip",children:"Show Tip"}),l.jsx(d,{closeOnClick:!0,label:"Collapse",referenceElement:"collapseTool",children:"Collapse"}),l.jsxs("div",{id:"select-tools",children:[l.jsxs("div",{className:"select-container",children:[l.jsx(a,{id:"selectPoint",scale:"m",icon:"pin",text:"Point",active:i==="point"?!0:void 0,onClick:()=>{r("point"),t&&p(t,"point")}}),l.jsx(d,{closeOnClick:!0,label:"Select by Point",referenceElement:"selectPoint",children:"Select by Point"}),l.jsx(a,{id:"selectLine",scale:"m",icon:"line",text:"Line",active:i==="line"?!0:void 0,onClick:()=>{r("line"),t&&p(t,"polyline")}}),l.jsx(d,{closeOnClick:!0,label:"Select by Line",referenceElement:"selectLine",children:"Select by Line"}),l.jsx(a,{id:"selectPolygon",scale:"m",icon:"polygon",text:"Polygon",active:i==="polygon"?!0:void 0,onClick:()=>{r("polygon"),t&&p(t,"polygon")}}),l.jsx(d,{closeOnClick:!0,label:"Select by Rectangle",referenceElement:"selectRectangle",children:"Select by Rectangle"}),l.jsx(a,{id:"selectRectangle",scale:"m",icon:"rectangle",text:"Rectangle",active:i==="rectangle"?!0:void 0,onClick:()=>{r("rectangle"),t&&p(t,"rectangle")}}),l.jsx(d,{closeOnClick:!0,label:"Select by Circle",referenceElement:"selectCircle",children:"Select by Circle"}),l.jsx(a,{id:"selectCircle",scale:"m",icon:"circle",text:"Circle",active:i==="circle"?!0:void 0,onClick:()=>{r("circle"),t&&p(t,"circle")}}),l.jsx(d,{closeOnClick:!0,label:"Select by Polygon",referenceElement:"selectPolygon",children:"Select by Polygon"}),l.jsx(a,{id:"selectMultipoint",scale:"m",icon:"pins",text:"Multi-Point",active:i==="multipoint"?!0:void 0,onClick:()=>{r("multipoint"),t&&p(t,"multipoint")}}),l.jsx(d,{closeOnClick:!0,label:"Select by Multi-Point",referenceElement:"selectMultipoint",children:"Select by Multi-point"}),l.jsx(a,{id:"clearSelection",scale:"m",icon:"trash",text:"Clear",onClick:()=>{e.geometrySet(void 0)}}),l.jsx(d,{closeOnClick:!0,label:"Clear Selection",referenceElement:"clearSelection",children:"Clear selection"})]}),l.jsxs("div",{className:"buffer-container",children:[l.jsxs(M,{children:["Buffer Distance",l.jsx(I,{type:"number",suffixText:"feet",step:50,min:0,max:5280,value:s.toString(),clearable:!0,onCalciteInputChange:x=>q(x,g)})]}),l.jsx($,{disabled:y===void 0?!0:void 0,hidden:s<=0,width:"full",onClick:()=>H(y,s,e.geometrySet),children:"Buffer Property"})]})]})]})},Q=O.memo(F);export{F as Select,Q as default};
