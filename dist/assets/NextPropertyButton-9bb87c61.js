import{R as l,k as s,b7 as u}from"./index-7753bab1.js";function d(e){return s.jsx(u,{appearance:"transparent",kind:"neutral",scale:"s",iconEnd:e.icon,onClick:async()=>{const n=e.featureTable.highlightIds;if(n.length){const r=e.featureTable.activeSortOrders.map(a=>a.fieldName+" "+a.direction),i=(await e.featureTable.layer.queryFeatures({where:"1=1",orderByFields:r,outFields:["OBJECTID"]})).features.map(a=>a.getAttribute("OBJECTID"));let t=i.findIndex(a=>a===n.getItemAt(0));e.text==="Next"&&(t+=1,t===i.length&&(t=0)),e.text==="Previous"&&(t===0?t=i.length-1:t-=1),e.featureTable.highlightIds.removeAll(),e.featureTable.highlightIds.add(i[t])}}})}const c=l.memo(d);export{c as default};
