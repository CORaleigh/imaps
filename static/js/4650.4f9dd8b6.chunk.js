"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[4650],{53283:(e,r,a)=>{a.d(r,{M:()=>m,e:()=>d,f:()=>l,i:()=>y,p:()=>h,r:()=>i,t:()=>s,w:()=>o});var t=a(92026),n=a(35995);function l(e,r){const a=r&&r.url&&r.url.path;if(e&&a&&(e=(0,n.hF)(e,a,{preserveProtocolRelative:!0}),r.portalItem&&r.readResourcePaths)){const a=(0,n.PF)(e,r.portalItem.itemUrl);c.test(a)&&r.readResourcePaths.push(r.portalItem.resourceFromPath(a).path)}return f(e,r&&r.portal)}function s(e,r){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:m.YES;if(!e)return e;!(0,n.YP)(e)&&r&&r.blockedRelativeUrls&&r.blockedRelativeUrls.push(e);let t=(0,n.hF)(e);if(r){const a=r.verifyItemRelativeUrls&&r.verifyItemRelativeUrls.rootPath||r.url&&r.url.path;if(a){const l=f(a,r.portal);t=(0,n.PF)(f(t,r.portal),l,l),t!==e&&r.verifyItemRelativeUrls&&r.verifyItemRelativeUrls.writtenUrls.push(t)}}return t=d(t,r&&r.portal),(0,n.YP)(t)&&(t=(0,n.Fv)(t)),r?.resources&&r?.portalItem&&!(0,n.YP)(t)&&!(0,n.HK)(t)&&a===m.YES&&r.resources.toKeep.push({resource:r.portalItem.resourceFromPath(t)}),t}function i(e,r,a){return l(e,a)}function o(e,r,a,t){const n=s(e,t);void 0!==n&&(r[a]=n)}const u=/\/items\/([^\/]+)\/resources\//,c=/^\.\/resources\//;function y(e){const r=(0,t.pC)(e)?e.match(u):null;return(0,t.pC)(r)?r[1]:null}function d(e,r){return r&&!r.isPortal&&r.urlKey&&r.customBaseUrl?(0,n.Ie)(e,`${r.urlKey}.${r.customBaseUrl}`,r.portalHostname):e}function f(e,r){if(!r||r.isPortal||!r.urlKey||!r.customBaseUrl)return e;const a=`${r.urlKey}.${r.customBaseUrl}`,t=(0,n.TI)();return(0,n.D6)(t,`${t.scheme}://${a}`)?(0,n.Ie)(e,r.portalHostname,a):(0,n.Ie)(e,a,r.portalHostname)}var m,p;(p=m||(m={}))[p.YES=0]="YES",p[p.NO=1]="NO";const h=Object.freeze(Object.defineProperty({__proto__:null,fromJSON:l,toJSON:s,read:i,write:o,itemIdFromResourceUrl:y,ensureMainOnlineDomain:d,get MarkKeep(){return m}},Symbol.toStringTag,{value:"Module"}))},25899:(e,r,a)=>{a.d(r,{B5:()=>y,DR:()=>f,G:()=>S,M8:()=>h,Nm:()=>b,Qc:()=>d,XG:()=>w,a7:()=>p,h3:()=>I,ld:()=>m,wH:()=>v});var t=a(92026),n=a(35995),l=a(53283);const s={mapserver:"MapServer",imageserver:"ImageServer",featureserver:"FeatureServer",sceneserver:"SceneServer",streamserver:"StreamServer",vectortileserver:"VectorTileServer"},i=Object.values(s),o=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/(${i.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),u=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/([^\\/\\n]+)\\/(${i.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),c=/(.*?)\/(?:layers\/)?(\d+)\/?$/i;function y(e){return!!o.test(e)}function d(e){if((0,t.Wi)(e))return null;const r=(0,n.mN)(e),a=r.path.match(o)||r.path.match(u);if(!a)return null;const[,l,i,c,y]=a,d=i.indexOf("/");return{title:m(-1!==d?i.slice(d+1):i),serverType:s[c.toLowerCase()],sublayer:null!=y&&""!==y?parseInt(y,10):null,url:{path:l}}}function f(e){const r=(0,n.mN)(e).path.match(c);return r?{serviceUrl:r[1],sublayerId:Number(r[2])}:null}function m(e){return(e=e.replace(/\s*[/_]+\s*/g," "))[0].toUpperCase()+e.slice(1)}function p(e,r){const a=[];if(e){const r=d(e);(0,t.pC)(r)&&r.title&&a.push(r.title)}if(r){const e=m(r);a.push(e)}if(2===a.length){if(a[0].toLowerCase().includes(a[1].toLowerCase()))return a[0];if(a[1].toLowerCase().includes(a[0].toLowerCase()))return a[1]}return a.join(" - ")}function h(e){if(!e)return!1;const r=(e=e.toLowerCase()).includes(".arcgis.com/"),a=e.includes("//services")||e.includes("//tiles")||e.includes("//features");return r&&a}function b(e,r){return e?(0,n.Qj)((0,n.Hu)(e,r)):e}function w(e){let{url:r}=e;if(!r)return{url:r};r=(0,n.Hu)(r,e.logger);const a=(0,n.mN)(r),l=d(a.path);let s;if((0,t.pC)(l))null!=l.sublayer&&null==e.layer.layerId&&(s=l.sublayer),r=l.url.path;else if(e.nonStandardUrlAllowed){const e=f(a.path);(0,t.pC)(e)&&(r=e.serviceUrl,s=e.sublayerId)}return{url:(0,n.Qj)(r),layerId:s}}function v(e,r,a,t,s){(0,l.w)(r,t,"url",s),t.url&&null!=e.layerId&&(t.url=(0,n.v_)(t.url,a,e.layerId.toString()))}function S(e){if(!e)return!1;const r=e.toLowerCase(),a=r.includes("/services/"),t=r.includes("/mapserver/wmsserver"),n=r.includes("/imageserver/wmsserver"),l=r.includes("/wmsserver");return a&&(t||n||l)}function I(e){if(!e)return!1;const r=new n.R9((0,n.hF)(e)).authority.toLowerCase();return"server.arcgisonline.com"===r||"services.arcgisonline.com"===r}},94650:(e,r,a)=>{a.r(r),a.d(r,{fetchFeatureService:()=>m,fromUrl:()=>u});var t=a(76200),n=a(10064),l=a(92026),s=a(35995),i=a(25899),o=a(19610);async function u(e){const r=e.properties?.customParameters,t=await async function(e,r){let a=(0,i.Qc)(e);if((0,l.Wi)(a)&&(a=await y(e,r)),(0,l.Wi)(a))throw new n.Z("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:t,sublayer:s}=a;let u;const c={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(t){case"MapServer":u=null!=s?"FeatureLayer":async function(e,r){return(await p(e,{customParameters:r})).tileInfo}(e,r).then((e=>e?"TileLayer":"MapImageLayer"));break;case"ImageServer":u=p(e,{customParameters:r}).then((e=>{const r=e.tileInfo&&e.tileInfo.format;return e.tileInfo?"LERC"!==r?.toUpperCase()||e.cacheType&&"elevation"!==e.cacheType.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"}));break;case"SceneServer":u=p(a.url.path,{customParameters:r}).then((e=>{if(e){if("Voxel"===e?.layerType)return"VoxelLayer";if(e?.layers&&Array.isArray(e.layers)&&e.layers.length>0){const r={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},a=e.layers[0]?.layerType;if(null!=r[a])return r[a]}}return"SceneLayer"}));break;default:u=c[t]}const d={FeatureLayer:!0,SceneLayer:!0},f="FeatureServer"===t,h={parsedUrl:a,Constructor:null,layerOrTableId:f?s:null,sublayerIds:null,tableIds:null},b=await u;if(d[b]&&null==s){const a=await async function(e,r,a){let t,n=!1;if("FeatureServer"===r){const r=await m(e,{customParameters:a});n=!!r.layersJSON,t=r.layersJSON||r.serviceJSON}else t=await p(e,{customParameters:a});const l=t?.layers,s=t?.tables;return{layerIds:l?.map((e=>e.id)).reverse()||[],tableIds:s?.map((e=>e.id)).reverse()||[],layerInfos:n?l:[],tableInfos:n?s:[]}}(e,t,r);f&&(h.sublayerInfos=a.layerInfos,h.tableInfos=a.tableInfos),1!==a.layerIds.length+a.tableIds.length?(h.sublayerIds=a.layerIds,h.tableIds=a.tableIds):f&&(h.layerOrTableId=a.layerIds[0]??a.tableIds[0],h.sourceJSON=a.layerInfos[0]??a.tableInfos[0])}return h.Constructor=await async function(e){return(0,o.T[e])()}(b),h}(e.url,r),s={...e.properties,url:e.url};if(!t.sublayerIds)return null!=t.layerOrTableId&&(s.layerId=t.layerOrTableId,s.sourceJSON=t.sourceJSON),new t.Constructor(s);const u=new(0,(await Promise.all([a.e(4226),a.e(8995),a.e(5592),a.e(6983),a.e(7994)]).then(a.bind(a,65069))).default)({title:t.parsedUrl.title});return function(e,r,a){function t(e,t){const n={...a,layerId:e,sublayerTitleMode:"service-name"};return(0,l.pC)(t)&&(n.sourceJSON=t),new r.Constructor(n)}r.sublayerIds.forEach((a=>{const n=t(a,c(r.sublayerInfos,a));e.add(n)})),r.tableIds.forEach((a=>{const n=t(a,c(r.tableInfos,a));e.tables.add(n)}))}(u,t,s),u}function c(e,r){return e?e.find((e=>e.id===r)):null}async function y(e,r){const a=await p(e,{customParameters:r});let t=null,n=null;const o=a.type;if("Feature Layer"===o||"Table"===o?(t="FeatureServer",n=a.id):"indexedVector"===o?t="VectorTileServer":a.hasOwnProperty("mapName")?t="MapServer":a.hasOwnProperty("bandCount")&&a.hasOwnProperty("pixelSizeX")?t="ImageServer":a.hasOwnProperty("maxRecordCount")&&a.hasOwnProperty("allowGeometryUpdates")?t="FeatureServer":a.hasOwnProperty("streamUrls")?t="StreamServer":d(a)?(t="SceneServer",n=a.id):a.hasOwnProperty("layers")&&d(a.layers?.[0])&&(t="SceneServer"),!t)return null;const u=null!=n?(0,i.DR)(e):null;return{title:(0,l.pC)(u)&&a.name||(0,s.vt)(e),serverType:t,sublayer:n,url:{path:(0,l.pC)(u)?u.serviceUrl:(0,s.mN)(e).path}}}function d(e){return e?.hasOwnProperty("store")&&e.hasOwnProperty("id")&&"number"==typeof e.id}function f(e){return!e.type||"Feature Layer"===e.type}async function m(e,r){let a=await p(e,r);a=a||{},a.layers=a.layers?.filter(f)||[];const t={serviceJSON:a};if(a.currentVersion<10.5)return t;const n=await p(e+"/layers",r);return t.layersJSON={layers:n?.layers?.filter(f)||[],tables:n?.tables||[]},t}async function p(e,r){return(await(0,t.default)(e,{responseType:"json",query:{f:"json",...r?.customParameters,token:r?.apiKey}})).data}},19610:(e,r,a)=>{a.d(r,{T:()=>t});const t={BingMapsLayer:async()=>(await Promise.all([a.e(4226),a.e(5592),a.e(3109),a.e(8897)]).then(a.bind(a,60165))).default,BuildingSceneLayer:async()=>(await Promise.all([a.e(4226),a.e(8995),a.e(5592),a.e(3109),a.e(1508),a.e(4055),a.e(7111),a.e(3798),a.e(9014),a.e(1009),a.e(5277),a.e(2841),a.e(8597),a.e(4653),a.e(6455),a.e(3470),a.e(2586),a.e(6505)]).then(a.bind(a,66505))).default,CSVLayer:async()=>(await Promise.all([a.e(4226),a.e(8995),a.e(5592),a.e(3109),a.e(1508),a.e(4055),a.e(7111),a.e(3798),a.e(9014),a.e(1009),a.e(5277),a.e(2841),a.e(8597),a.e(4653),a.e(6455),a.e(5418)]).then(a.bind(a,98435))).default,ElevationLayer:async()=>(await Promise.all([a.e(8995),a.e(1009),a.e(2893),a.e(5964)]).then(a.bind(a,72882))).default,FeatureLayer:async()=>(await Promise.all([a.e(4226),a.e(8995),a.e(5592),a.e(3109),a.e(1508),a.e(4055),a.e(7111),a.e(3798),a.e(9014),a.e(1009),a.e(5277),a.e(2841),a.e(8597),a.e(4653),a.e(6455),a.e(1321)]).then(a.bind(a,16455))).default,GroupLayer:async()=>(await Promise.all([a.e(4226),a.e(8995),a.e(5592),a.e(6983),a.e(7994),a.e(3091)]).then(a.bind(a,65069))).default,GeoRSSLayer:async()=>(await Promise.all([a.e(4226),a.e(8995),a.e(5592),a.e(3109),a.e(1508),a.e(4711)]).then(a.bind(a,70054))).default,GeoJSONLayer:async()=>(await Promise.all([a.e(4226),a.e(5592),a.e(3109),a.e(1508),a.e(4055),a.e(7111),a.e(3798),a.e(9014),a.e(1009),a.e(5277),a.e(2841),a.e(8597),a.e(3743)]).then(a.bind(a,5064))).default,ImageryLayer:async()=>(await Promise.all([a.e(4226),a.e(8995),a.e(5592),a.e(3109),a.e(1508),a.e(4055),a.e(7111),a.e(3798),a.e(1009),a.e(5277),a.e(7314),a.e(3406),a.e(4653),a.e(5192),a.e(2927),a.e(5345),a.e(1204),a.e(6261),a.e(374)]).then(a.bind(a,63752))).default,ImageryTileLayer:async()=>(await Promise.all([a.e(4226),a.e(8995),a.e(5592),a.e(3109),a.e(1508),a.e(4055),a.e(7111),a.e(3798),a.e(9803),a.e(1009),a.e(7314),a.e(2927),a.e(2893),a.e(5345),a.e(394),a.e(1204),a.e(6261),a.e(5602)]).then(a.bind(a,93060))).default,IntegratedMeshLayer:async()=>(await Promise.all([a.e(4226),a.e(8995),a.e(9803),a.e(3470),a.e(8884)]).then(a.bind(a,56251))).default,KMLLayer:async()=>(await Promise.all([a.e(4226),a.e(8995),a.e(5592),a.e(3109),a.e(1508),a.e(4055),a.e(7111),a.e(3798),a.e(9014),a.e(3570)]).then(a.bind(a,13838))).default,LineOfSightLayer:async()=>(await Promise.all([a.e(4226),a.e(9803),a.e(8481)]).then(a.bind(a,33724))).default,MapImageLayer:async()=>(await Promise.all([a.e(4226),a.e(8995),a.e(5592),a.e(3109),a.e(1508),a.e(4055),a.e(7111),a.e(3798),a.e(9014),a.e(5277),a.e(8597),a.e(9186),a.e(9583),a.e(5139)]).then(a.bind(a,19583))).default,MapNotesLayer:async()=>(await Promise.all([a.e(4226),a.e(8995),a.e(5592),a.e(3109),a.e(1508),a.e(4055),a.e(7111),a.e(3798),a.e(9803),a.e(9014),a.e(1009),a.e(5277),a.e(2841),a.e(8597),a.e(4653),a.e(6455),a.e(9436)]).then(a.bind(a,33513))).default,OGCFeatureLayer:async()=>(await Promise.all([a.e(4226),a.e(8995),a.e(5592),a.e(3109),a.e(1508),a.e(4055),a.e(7111),a.e(3798),a.e(9014),a.e(5277),a.e(2841),a.e(8597),a.e(3406),a.e(8716),a.e(5423)]).then(a.bind(a,98701))).default,OpenStreetMapLayer:async()=>(await Promise.all([a.e(4226),a.e(8995),a.e(5592),a.e(3109),a.e(1040),a.e(1656)]).then(a.bind(a,31656))).default,PointCloudLayer:async()=>(await Promise.all([a.e(8995),a.e(4055),a.e(3470),a.e(5752)]).then(a.bind(a,9532))).default,RouteLayer:async()=>(await Promise.all([a.e(4226),a.e(8995),a.e(5592),a.e(1508),a.e(4055),a.e(7111),a.e(3798),a.e(9803),a.e(9014),a.e(1909),a.e(729),a.e(8953)]).then(a.bind(a,54404))).default,SceneLayer:async()=>(await Promise.all([a.e(4226),a.e(8995),a.e(5592),a.e(3109),a.e(1508),a.e(4055),a.e(7111),a.e(3798),a.e(9803),a.e(9014),a.e(1009),a.e(5277),a.e(2841),a.e(8597),a.e(4653),a.e(6455),a.e(3470),a.e(2586),a.e(5838)]).then(a.bind(a,5838))).default,StreamLayer:async()=>(await Promise.all([a.e(4226),a.e(8995),a.e(5592),a.e(3109),a.e(1508),a.e(4055),a.e(7111),a.e(3798),a.e(9014),a.e(5277),a.e(2841),a.e(8152)]).then(a.bind(a,2668))).default,TileLayer:async()=>(await Promise.all([a.e(4226),a.e(8995),a.e(5592),a.e(3109),a.e(1508),a.e(4055),a.e(7111),a.e(3798),a.e(9014),a.e(5277),a.e(8597),a.e(2893),a.e(9186),a.e(1912)]).then(a.bind(a,42977))).default,UnknownLayer:async()=>(await Promise.all([a.e(8995),a.e(4917)]).then(a.bind(a,74917))).default,UnsupportedLayer:async()=>(await Promise.all([a.e(8995),a.e(8101)]).then(a.bind(a,88101))).default,VectorTileLayer:async()=>(await Promise.all([a.e(4226),a.e(8995),a.e(5592),a.e(2893),a.e(969),a.e(2642)]).then(a.bind(a,27106))).default,VoxelLayer:async()=>(await Promise.all([a.e(8995),a.e(3470),a.e(9902)]).then(a.bind(a,52560))).default,WebTileLayer:async()=>(await Promise.all([a.e(4226),a.e(8995),a.e(5592),a.e(3109),a.e(1040)]).then(a.bind(a,89200))).default,WFSLayer:async()=>(await Promise.all([a.e(4226),a.e(8995),a.e(5592),a.e(3109),a.e(1508),a.e(4055),a.e(7111),a.e(3798),a.e(9803),a.e(9014),a.e(1009),a.e(5277),a.e(2841),a.e(2622),a.e(4514)]).then(a.bind(a,38566))).default,WMSLayer:async()=>(await Promise.all([a.e(4226),a.e(8995),a.e(5592),a.e(3109),a.e(1508),a.e(4055),a.e(3863)]).then(a.bind(a,84227))).default,WMTSLayer:async()=>(await Promise.all([a.e(4226),a.e(8995),a.e(5592),a.e(3109),a.e(1040),a.e(6951)]).then(a.bind(a,46951))).default}}}]);
//# sourceMappingURL=4650.4f9dd8b6.chunk.js.map