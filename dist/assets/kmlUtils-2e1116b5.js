import{ae as p,bN as G,hY as I,gW as k,af as w,cA as b,nZ as S,n_ as m,eE as d,fT as x,f as E,bC as v,hU as O,nO as F}from"./index-84d82762.js";const M={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function T(r){const s=r.folders||[],t=s.slice(),e=new Map,n=new Map,f=new Map,l=new Map,c=new Map,u={esriGeometryPoint:n,esriGeometryPolyline:f,esriGeometryPolygon:l};(r.featureCollection&&r.featureCollection.layers||[]).forEach(o=>{const a=p(o);a.featureSet.features=[];const i=o.featureSet.geometryType;e.set(i,a);const g=o.layerDefinition.objectIdField;i==="esriGeometryPoint"?h(n,g,o.featureSet.features):i==="esriGeometryPolyline"?h(f,g,o.featureSet.features):i==="esriGeometryPolygon"&&h(l,g,o.featureSet.features)}),r.groundOverlays&&r.groundOverlays.forEach(o=>{c.set(o.id,o)}),s.forEach(o=>{o.networkLinkIds.forEach(a=>{const i=C(a,o.id,r.networkLinks);i&&t.push(i)})}),t.forEach(o=>{if(o.featureInfos){o.points=p(e.get("esriGeometryPoint")),o.polylines=p(e.get("esriGeometryPolyline")),o.polygons=p(e.get("esriGeometryPolygon")),o.mapImages=[];for(const a of o.featureInfos)switch(a.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const i=u[a.type].get(a.id);i&&o[M[a.type]].featureSet.features.push(i);break}case"GroundOverlay":{const i=c.get(a.id);i&&o.mapImages.push(i);break}}o.fullExtent=P([o])}});const y=P(t);return{folders:s,sublayers:t,extent:y}}function j(r,s,t,e){const n=G&&G.findCredential(r);r=I(r,{token:n&&n.token});const f=k.kmlServiceUrl;return w(f,{query:{url:r,model:"simple",folders:"",refresh:t!==0||void 0,outSR:JSON.stringify(s)},responseType:"json",signal:e})}function D(r,s,t=null,e=[]){const n=[],f={},l=s.sublayers,c=s.folders.map(u=>u.id);return l.forEach(u=>{var o;const y=new r;if(t?y.read(u,t):y.read(u),e.length&&c.includes(y.id)&&(y.visible=e.includes(y.id)),f[u.id]=y,u.parentFolderId!=null&&u.parentFolderId!==-1){const a=f[u.parentFolderId];a.sublayers||(a.sublayers=[]),(o=a.sublayers)==null||o.unshift(y)}else n.unshift(y)}),n}function h(r,s,t){t.forEach(e=>{r.set(e.attributes[s],e)})}function $(r,s){let t;return s.some(e=>e.id===r&&(t=e,!0)),t}function C(r,s,t){const e=$(r,t);return e&&(e.parentFolderId=s,e.networkLink=e),e}async function J(r){const s=v.fromJSON(r.featureSet).features,t=r.layerDefinition,e=O(t.drawingInfo.renderer),n=F.fromJSON(r.popupInfo),f=[];for(const l of s){const c=await e.getSymbolAsync(l);l.symbol=c,l.popupTemplate=n,l.visible=!0,f.push(l)}return f}function P(r){const s=b(S),t=b(S);for(const e of r){if(e.polygons&&e.polygons.featureSet&&e.polygons.featureSet.features)for(const n of e.polygons.featureSet.features)m(s,n.geometry),d(t,s);if(e.polylines&&e.polylines.featureSet&&e.polylines.featureSet.features)for(const n of e.polylines.featureSet.features)m(s,n.geometry),d(t,s);if(e.points&&e.points.featureSet&&e.points.featureSet.features)for(const n of e.points.featureSet.features)m(s,n.geometry),d(t,s);if(e.mapImages)for(const n of e.mapImages)m(s,n.extent),d(t,s)}return x(t,S)?void 0:{xmin:t[0],ymin:t[1],zmin:t[2],xmax:t[3],ymax:t[4],zmax:t[5],spatialReference:E.WGS84}}export{D as S,J as b,T as d,j as g,P as j};
