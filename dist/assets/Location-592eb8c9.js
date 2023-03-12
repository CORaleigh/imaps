import{e as p,b as L,l as R,y as g,f as E,a as I,d as $,g as v,n as C,S as k,c as w,h as D,H as G,i as M,j as O,C as N,r as i,R as z,k as l,m as F,o as P,p as q,q as B,s as H,t as J}from"./index-7753bab1.js";let d=class extends R{constructor(e){super(e),this.addresses=null,this.categories=null,this.countryCode=null,this.locationType=null,this.outSpatialReference=null}};p([g({type:[Object],json:{read:{reader:e=>e&&e.records?e.records.map(t=>t.attributes):null},write:{writer:(e,t)=>{const r=[];Array.isArray(e)&&e.forEach(o=>{r.push({attributes:o})}),t.addresses={records:r}}}}})],d.prototype,"addresses",void 0),p([g({type:[String],json:{read:{source:"category",reader:e=>e?e.split(","):null},write:{target:"category",writer:(e,t)=>{t.category=e?e.join(","):null}}}})],d.prototype,"categories",void 0),p([g({type:String,json:{read:{source:"sourceCountry"},write:{target:"sourceCountry"}}})],d.prototype,"countryCode",void 0),p([g({type:String,json:{write:!0}})],d.prototype,"locationType",void 0),p([g({type:E,json:{read:{source:"outSR"},write:{target:"outSR"}}})],d.prototype,"outSpatialReference",void 0),d=p([I("esri.rest.support.AddressesToLocationsParameters")],d),d.from=L(d);const K=async(e,t)=>{const r=[],o=await U();r.push(o);const c=await Q();r.push(c);const n=new D({view:e,maxSuggestions:30,searchAllEnabled:!0,popupEnabled:!1,container:t,goToOverride:(s,a)=>{s.goTo({target:a.target.target,zoom:17},{duration:1e3,easing:"ease"})}});return n.sources.addMany(r),n.allSources.on("after-add",s=>{if(s.item.layer){const a=s.item;a.name=s.item.layer.title,a.placeholder=s.item.layer.title}s.item.name.includes("World Geocoding")&&n.allSources.remove(s.item)}),n},Q=async()=>{const e=new G({portalItem:{id:"edb2153e06c2477995f95b27e5c24661"},title:"Intersection",layerId:0});return await e.load(),new M({name:"Intersection",placeholder:"Enter first street name",layer:e,autoNavigate:!1,resultGraphicEnabled:!1})},U=()=>new O({name:"Street Address",placeholder:"Enter an address",url:"https://maps.raleighnc.gov/arcgis/rest/services/Locators/Locator/GeocodeServer",autoNavigate:!0,resultSymbol:new C({url:"assets/pin.svg",height:36,width:36})}),V=(e,t,r,o,c,n)=>{e.on("search-complete",async s=>{if(n.graphic=null,c(s.searchTerm),r(s.results[0].source.name==="Intersection"),s.results[0].source.name==="Intersection"){const a=await s.results[0].source.layer.queryFeatures({geometry:s.results[0].results[0].feature.geometry,returnGeometry:!1,outFields:["CARTONAME"],orderByFields:["CARTONAME"]});o(a.features.map(u=>u.getAttribute("CARTONAME")))}else{j(e.view);const a=[];s.results[0].results.forEach(u=>{x(e.view,u.feature.geometry),a.push(u.feature),n.graphic=u.feature})}})},W=async(e,t,r)=>{const o=`${e} & ${t}`,c=await $("https://maps.raleighnc.gov/arcgis/rest/services/Locators/Locator/GeocodeServer",{address:{outSpatialReference:r.spatialReference,SingleLine:o}});c.length&&(j(r),x(r,c[0].location),r.goTo({target:c[0].location,zoom:17},{duration:1e3,easing:"ease"}))},x=(e,t)=>{t.type==="point"?e.graphics.add(new v({geometry:t,attributes:{type:"location"},symbol:new C({url:"assets/pin.svg",height:36,width:36})})):e.graphics.add(new v({geometry:t,attributes:{type:"location"},symbol:new k({color:new w([0,255,255,.25]),outline:{color:new w([0,255,255,1]),width:2}})}))},j=e=>{e.graphics.removeMany(e.graphics.filter(t=>t.getAttribute("type")==="location"))},X=(e,t)=>new N({view:e,container:t});const Y={title:"Location Search Tips",tips:[{title:"Search By Place",text:"Search for places of interest such as schools and parks by typing the name of the school or park you are looking for."}]},Z=e=>{const t=i.useRef(null),r=i.useRef(null),o=i.useRef(!1),c=i.useRef(),n=i.useRef(),[s,a]=i.useState(!1),[u,y]=i.useState([]),[h,S]=i.useState(""),[b,f]=i.useState(!1);i.useEffect(()=>{!o.current&&t.current&&(o.current=!0,K(e.view,t.current).then(m=>{c.current=m,V(m,e.view,a,y,S,n.current)}),n.current=X(e.view,r.current))}),i.useEffect(()=>{f(e.isActive)},[e.isActive]);const A=i.useCallback(m=>{e.panelDismissed()},[]),T=i.useCallback(m=>{e.showTips(Y)},[]);return{searchDiv:t,featureDiv:r,search:c,isIntersection:s,intersections:u,searchTerm:h,isActive:b,panelDismissed:A,tipsClicked:T}},_=e=>{const{searchDiv:t,featureDiv:r,search:o,isIntersection:c,intersections:n,searchTerm:s,isActive:a,panelDismissed:u,tipsClicked:y}=Z(e);return l.jsxs(F,{id:"location-panel",heading:"Location Search",hidden:!a,closed:a?void 0:!0,closable:!0,onCalcitePanelClose:u,children:[l.jsx(P,{id:"tip",icon:"lightbulb",text:"Tips",slot:"header-actions-end",onClick:y}),l.jsx(q,{label:"Show Tip",referenceElement:"tip",closeOnClick:!0,children:"Show Tip"}),l.jsxs("div",{id:"location-search",children:[l.jsx("div",{ref:t}),c&&l.jsx("div",{id:"intersection-search",children:l.jsxs(B,{children:["Intersections",l.jsx(H,{label:"",selectionMode:"single",scale:"l",children:n.map((h,S)=>l.jsx(J,{textLabel:h,value:h,onCalciteComboboxItemChange:b=>{var f;b.target.selected&&W(h,s,(f=o==null?void 0:o.current)==null?void 0:f.view)}},S))})]})}),l.jsx("div",{id:"location-feature",ref:r})]})]})},te=z.memo(_);export{te as default};
