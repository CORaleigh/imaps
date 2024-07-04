"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[2259],{3615:(e,a,t)=>{t.d(a,{q:()=>n});var r=t(66668);class n{constructor(){this._serviceMetadatas=new Map,this._itemDatas=new Map}async fetchServiceMetadata(e,a){const t=this._serviceMetadatas.get(e);if(t)return t;const n=await(0,r.S)(e,a);return this._serviceMetadatas.set(e,n),n}async fetchItemData(e){const{id:a}=e;if(!a)return null;const{_itemDatas:t}=this;if(t.has(a))return t.get(a);const r=await e.fetchData();return t.set(a,r),r}async fetchCustomParameters(e,a){const t=await this.fetchItemData(e);return t&&"object"==typeof t&&(a?a(t):t.customParameters)||null}}},50420:(e,a,t)=>{t.d(a,{S:()=>u});var r=t(47620),n=t(2600),s=t(20744),i=t(10860),l=t(48212),c=t(54872),o=t(9764);async function u(e,a){const t=(0,l.K0)(e);if(!t)throw new s.c("invalid-url","Invalid scene service url");const u={...a,sceneServerUrl:t.url.path,layerId:t.sublayer??void 0};if(u.sceneLayerItem??=await async function(e){const a=(await y(e)).serviceItemId;if(!a)return null;const t=new o.default({id:a,apiKey:e.apiKey}),s=await async function(e){const a=r.id?.findServerInfo(e.sceneServerUrl);if(a?.owningSystemUrl)return a.owningSystemUrl;const t=e.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const a=(await(0,n.c)(t,{query:{f:"json"},responseType:"json",signal:e.signal})).data.owningSystemUrl;if(a)return a}catch(e){(0,i.CE)(e)}return null}(e);null!=s&&(t.portal=new c.c({url:s}));try{return t.load({signal:e.signal})}catch(e){return(0,i.CE)(e),null}}(u),null==u.sceneLayerItem)return d(u.sceneServerUrl.replace("/SceneServer","/FeatureServer"),u);const m=await async function({sceneLayerItem:e,signal:a}){if(!e)return null;try{const t=(await e.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:a})).find((e=>"Feature Service"===e.type))||null;if(!t)return null;const r=new o.default({portal:t.portal,id:t.id});return await r.load(),r}catch(e){return(0,i.CE)(e),null}}(u);if(!m?.url)throw new s.c("related-service-not-found","Could not find feature service through portal item relationship");u.featureServiceItem=m;const f=await d(m.url,u);return f.portalItem=m,f}async function y(e){if(e.rootDocument)return e.rootDocument;const a={query:{f:"json",...e.customParameters,token:e.apiKey},responseType:"json",signal:e.signal};try{const t=await(0,n.c)(e.sceneServerUrl,a);e.rootDocument=t.data}catch{e.rootDocument={}}return e.rootDocument}async function d(e,a){const t=(0,l.K0)(e);if(!t)throw new s.c("invalid-feature-service-url","Invalid feature service url");const r=t.url.path,i=a.layerId;if(null==i)return{serverUrl:r};const c=y(a),o=a.featureServiceItem?await a.featureServiceItem.fetchData("json"):null,u=(o?.layers?.[0]||o?.tables?.[0])?.customParameters,d=e=>{const t={query:{f:"json",...u},responseType:"json",authMode:e,signal:a.signal};return(0,n.c)(r,t)},m=d("anonymous").catch((()=>d("no-prompt"))),[f,w]=await Promise.all([m,c]),p=w?.layers,h=f.data&&f.data.layers;if(!Array.isArray(h))throw new Error("expected layers array");if(Array.isArray(p)){for(let e=0;e<Math.min(p.length,h.length);e++)if(p[e].id===i)return{serverUrl:r,layerId:h[e].id}}else if(null!=i&&i<h.length)return{serverUrl:r,layerId:h[i].id};throw new Error("could not find matching associated sublayer")}},83928:(e,a,t)=>{t.d(a,{q:()=>r});const r={BingMapsLayer:async()=>(await Promise.all([t.e(5612),t.e(5156),t.e(3912)]).then(t.bind(t,48388))).default,BuildingSceneLayer:async()=>(await Promise.all([t.e(5612),t.e(5156),t.e(2692),t.e(7988),t.e(7148),t.e(9364),t.e(4984),t.e(5776),t.e(236),t.e(8976),t.e(9512),t.e(2664),t.e(6556),t.e(672),t.e(3180),t.e(9644),t.e(8344),t.e(9420),t.e(8644),t.e(5928)]).then(t.bind(t,10948))).default,CatalogLayer:async()=>(await Promise.all([t.e(5612),t.e(5156),t.e(2692),t.e(7988),t.e(7148),t.e(9364),t.e(4984),t.e(5776),t.e(236),t.e(8976),t.e(2664),t.e(2848),t.e(5468),t.e(572),t.e(2907)]).then(t.bind(t,20324))).default,CSVLayer:async()=>(await Promise.all([t.e(5612),t.e(5156),t.e(2692),t.e(7988),t.e(7148),t.e(9364),t.e(4984),t.e(5776),t.e(236),t.e(8976),t.e(9512),t.e(2664),t.e(6556),t.e(672),t.e(1744)]).then(t.bind(t,79468))).default,DimensionLayer:async()=>(await Promise.all([t.e(5612),t.e(7832)]).then(t.bind(t,28320))).default,ElevationLayer:async()=>(await Promise.all([t.e(5612),t.e(2968),t.e(8380)]).then(t.bind(t,47104))).default,FeatureLayer:async()=>(await Promise.all([t.e(5612),t.e(5156),t.e(2692),t.e(7988),t.e(7148),t.e(9364),t.e(4984),t.e(5776),t.e(236),t.e(8976),t.e(9512),t.e(2664),t.e(6556),t.e(672),t.e(8348)]).then(t.bind(t,672))).default,GeoJSONLayer:async()=>(await Promise.all([t.e(5612),t.e(5156),t.e(2692),t.e(7988),t.e(7148),t.e(9364),t.e(4984),t.e(5776),t.e(236),t.e(8976),t.e(9512),t.e(6528)]).then(t.bind(t,92768))).default,GeoRSSLayer:async()=>(await Promise.all([t.e(5612),t.e(5156),t.e(7988),t.e(7148),t.e(2672)]).then(t.bind(t,43984))).default,GroupLayer:async()=>(await Promise.all([t.e(5612),t.e(7456)]).then(t.bind(t,44080))).default,ImageryLayer:async()=>(await Promise.all([t.e(5612),t.e(5156),t.e(2692),t.e(7988),t.e(7148),t.e(9364),t.e(4984),t.e(5776),t.e(2848),t.e(6128),t.e(9056),t.e(3291)]).then(t.bind(t,7896))).default,ImageryTileLayer:async()=>(await Promise.all([t.e(5612),t.e(5156),t.e(2692),t.e(7988),t.e(7148),t.e(9364),t.e(4984),t.e(6128),t.e(7048),t.e(9056),t.e(5496)]).then(t.bind(t,82744))).default,IntegratedMeshLayer:async()=>(await Promise.all([t.e(5612),t.e(9644),t.e(7024)]).then(t.bind(t,96584))).default,KMLLayer:async()=>(await Promise.all([t.e(5612),t.e(5156),t.e(2692),t.e(7988),t.e(7148),t.e(9364),t.e(4984),t.e(236),t.e(9032)]).then(t.bind(t,53688))).default,LineOfSightLayer:async()=>(await Promise.all([t.e(5612),t.e(3536)]).then(t.bind(t,91884))).default,LinkChartLayer:async()=>(await Promise.all([t.e(5156),t.e(2692),t.e(7988),t.e(7148),t.e(9364),t.e(4984),t.e(5776),t.e(236),t.e(9512),t.e(3220),t.e(1512),t.e(6680),t.e(8080)]).then(t.bind(t,54192))).default,MapImageLayer:async()=>(await Promise.all([t.e(5612),t.e(5156),t.e(2692),t.e(7988),t.e(7148),t.e(9364),t.e(4984),t.e(5776),t.e(236),t.e(8976),t.e(2848),t.e(5468),t.e(1248),t.e(3089)]).then(t.bind(t,3089))).default,MapNotesLayer:async()=>(await Promise.all([t.e(5612),t.e(5156),t.e(2692),t.e(7988),t.e(7148),t.e(9364),t.e(4984),t.e(5776),t.e(236),t.e(8976),t.e(9512),t.e(2664),t.e(6556),t.e(672),t.e(9516)]).then(t.bind(t,37784))).default,MediaLayer:async()=>(await Promise.all([t.e(5612),t.e(2364)]).then(t.bind(t,66664))).default,OGCFeatureLayer:async()=>(await Promise.all([t.e(5612),t.e(5156),t.e(2692),t.e(7988),t.e(7148),t.e(9364),t.e(4984),t.e(5776),t.e(236),t.e(8976),t.e(9512),t.e(3160),t.e(8224)]).then(t.bind(t,56288))).default,OpenStreetMapLayer:async()=>(await Promise.all([t.e(5612),t.e(5156),t.e(3632),t.e(1244)]).then(t.bind(t,1244))).default,OrientedImageryLayer:async()=>(await Promise.all([t.e(5612),t.e(5156),t.e(2692),t.e(7988),t.e(7148),t.e(9364),t.e(4984),t.e(5776),t.e(236),t.e(8976),t.e(9512),t.e(2664),t.e(6556),t.e(672),t.e(1740)]).then(t.bind(t,75432))).default,PointCloudLayer:async()=>(await Promise.all([t.e(5612),t.e(2692),t.e(9644),t.e(2296)]).then(t.bind(t,21680))).default,RouteLayer:async()=>(await Promise.all([t.e(5612),t.e(2692),t.e(7988),t.e(7148),t.e(9364),t.e(4984),t.e(236),t.e(6352)]).then(t.bind(t,40900))).default,SceneLayer:async()=>(await Promise.all([t.e(5612),t.e(2692),t.e(7988),t.e(7148),t.e(9364),t.e(4984),t.e(5776),t.e(236),t.e(8976),t.e(8624),t.e(3180),t.e(9644),t.e(8344),t.e(9420),t.e(7424),t.e(9780),t.e(8644),t.e(712)]).then(t.bind(t,3688))).default,StreamLayer:async()=>(await Promise.all([t.e(5612),t.e(5156),t.e(2692),t.e(7988),t.e(7148),t.e(9364),t.e(4984),t.e(5776),t.e(236),t.e(8976),t.e(9512),t.e(3460)]).then(t.bind(t,18e3))).default,SubtypeGroupLayer:async()=>(await Promise.all([t.e(5612),t.e(5156),t.e(2692),t.e(7988),t.e(7148),t.e(9364),t.e(4984),t.e(5776),t.e(236),t.e(8976),t.e(2664),t.e(6556),t.e(5368),t.e(2608)]).then(t.bind(t,8444))).default,TileLayer:async()=>(await Promise.all([t.e(5612),t.e(5156),t.e(2692),t.e(7988),t.e(7148),t.e(9364),t.e(4984),t.e(5776),t.e(236),t.e(8976),t.e(2848),t.e(5468),t.e(2968),t.e(1248),t.e(0)]).then(t.bind(t,5e4))).default,IntegratedMesh3DTilesLayer:async()=>(await Promise.all([t.e(5612),t.e(7752)]).then(t.bind(t,71316))).default,UnknownLayer:async()=>(await t.e(6584).then(t.bind(t,56584))).default,UnsupportedLayer:async()=>(await t.e(2456).then(t.bind(t,12456))).default,VectorTileLayer:async()=>(await Promise.all([t.e(5612),t.e(2968),t.e(3780),t.e(6055),t.e(7936)]).then(t.bind(t,65632))).default,VoxelLayer:async()=>(await Promise.all([t.e(5612),t.e(2692),t.e(9644),t.e(8256)]).then(t.bind(t,59496))).default,WFSLayer:async()=>(await Promise.all([t.e(5612),t.e(5156),t.e(2692),t.e(7988),t.e(7148),t.e(9364),t.e(4984),t.e(5776),t.e(236),t.e(8976),t.e(9512),t.e(4808),t.e(3688)]).then(t.bind(t,53440))).default,WMSLayer:async()=>(await Promise.all([t.e(5612),t.e(5156),t.e(2692),t.e(7988),t.e(7148),t.e(280)]).then(t.bind(t,85024))).default,WMTSLayer:async()=>(await Promise.all([t.e(5612),t.e(5156),t.e(3632),t.e(4832)]).then(t.bind(t,54832))).default,WebTileLayer:async()=>(await Promise.all([t.e(5612),t.e(5156),t.e(3632)]).then(t.bind(t,32896))).default}},67632:(e,a,t)=>{t.d(a,{AX:()=>l,Ur:()=>y,cr:()=>i,eW:()=>s,k1:()=>o,mg:()=>c,oD:()=>d,qi:()=>n,wp:()=>u});var r=t(50420);function n(e){const a={id:e.id,name:e.name};return"Oriented Imagery Layer"===e.type&&(a.layerType="OrientedImageryLayer"),a}async function s(e,a,t){if(null==e?.layers||null==e?.tables){const r=await t.fetchServiceMetadata(a,{customParameters:l(e)?.customParameters});(e=e||{}).layers=e.layers||r?.layers?.map(n),e.tables=e.tables||r?.tables?.map(n)}return e}function i(e){const{layers:a,tables:t}=e;return a?.length?a[0].id:t?.length?t[0].id:null}function l(e){if(!e)return null;const{layers:a,tables:t}=e;return a?.length?a[0]:t?.length?t[0]:null}function c(e){return(e?.layers?.length??0)+(e?.tables?.length??0)}function o(e){const a=[];return e?.layers?.forEach((e=>{"SubtypeGroupLayer"===e.layerType&&a.push(e.id)})),a}function u(e){return e?.layers?.filter((({layerType:e})=>"OrientedImageryLayer"===e)).map((({id:e})=>e))}function y(e){return e?.layers?.filter((({layerType:e})=>"CatalogLayer"===e)).map((({id:e})=>e))}async function d(e,a,t){if(!e?.url)return a??{};if(a??={},!a.layers){const r=await t.fetchServiceMetadata(e.url);a.layers=r.layers?.map(n)}const{serverUrl:s,portalItem:i}=await(0,r.S)(e.url,{sceneLayerItem:e,customParameters:l(a)?.customParameters}).catch((()=>({serverUrl:null,portalItem:null})));if(null==s)return a.tables=[],a;if(!a.tables&&i){const e=await i.fetchData();if(e?.tables)a.tables=e.tables.map(n);else{const r=await t.fetchServiceMetadata(s,{customParameters:l(e)?.customParameters});a.tables=r?.tables?.map(n)}}if(a.tables)for(const e of a.tables)e.url=`${s}/${e.id}`;return a}},12259:(e,a,t)=>{t.d(a,{fromItem:()=>y,q:()=>d});var r=t(20744),n=t(50420),s=t(3615),i=t(71068),l=t(83928),c=t(9764),o=t(67632),u=t(46940);async function y(e){!e.portalItem||e.portalItem instanceof c.default||(e={...e,portalItem:new c.default(e.portalItem)});const a=await async function(e){await e.load();const a=new s.q;return async function(e){const a=e.className,t=l.q[a];return{constructor:await t(),properties:e.properties}}(await d(e,a))}(e.portalItem);return new(0,a.constructor)({portalItem:e.portalItem,...a.properties})}async function d(e,a){switch(e.type){case"3DTiles Service":return{className:"IntegratedMesh3DTilesLayer"};case"CSV":return{className:"CSVLayer"};case"Feature Collection":return async function(e){await e.load();const a=(0,u._S)(e,"Map Notes"),t=(0,u._S)(e,"Markup");if(a||t)return{className:"MapNotesLayer"};if((0,u._S)(e,"Route Layer"))return{className:"RouteLayer"};const r=await e.fetchData();return 1===(0,o.mg)(r)?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Feature Service":return async function(e,a){const t=await m(e,a);if("object"==typeof t){const{sourceJSON:e,className:a}=t,r={sourceJSON:e};return null!=t.id&&(r.layerId=t.id),{className:a||"FeatureLayer",properties:r}}return{className:"GroupLayer"}}(e,a);case"Feed":case"Stream Service":return{className:"StreamLayer"};case"GeoJson":return{className:"GeoJSONLayer"};case"Group Layer":return{className:"GroupLayer"};case"Image Service":return async function(e,a){await e.load();const t=e.typeKeywords?.map((e=>e.toLowerCase()))??[];if(t.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(t.includes("tiled imagery"))return{className:"ImageryTileLayer"};const r=await a.fetchItemData(e),n=r?.layerType;if("ArcGISTiledImageServiceLayer"===n)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===n)return{className:"ImageryLayer"};const s=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)}),i=s.cacheType?.toLowerCase(),l=s.capabilities?.toLowerCase().includes("tilesonly");return"map"===i||l?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e,a);case"KML":return{className:"KMLLayer"};case"Map Service":return async function(e,a){return await async function(e,a){const{tileInfo:t}=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)});return t}(e,a)?{className:"TileLayer"}:{className:"MapImageLayer"}}(e,a);case"Media Layer":return{className:"MediaLayer"};case"Scene Service":return async function(e,a){const t=await m(e,a,(async()=>{try{if(!e.url)return[];const{serverUrl:t}=await(0,n.S)(e.url,{sceneLayerItem:e}),r=await a.fetchServiceMetadata(t);return r?.tables??[]}catch{return[]}}));if("object"==typeof t){const r={};let n;if(null!=t.id?(r.layerId=t.id,n=`${e.url}/layers/${t.id}`):n=e.url,e.typeKeywords?.length)for(const a of Object.keys(i.Wr))if(e.typeKeywords.includes(a))return{className:i.Wr[a]};const s=await a.fetchServiceMetadata(n,{customParameters:await a.fetchCustomParameters(e,(e=>(0,o.AX)(e)?.customParameters))});return{className:i.Wr[s?.layerType]||"SceneLayer",properties:r}}if(!1===t){const t=await a.fetchServiceMetadata(e.url);if("Voxel"===t?.layerType)return{className:"VoxelLayer"}}return{className:"GroupLayer"}}(e,a);case"Vector Tile Service":return{className:"VectorTileLayer"};case"WFS":return{className:"WFSLayer"};case"WMS":return{className:"WMSLayer"};case"WMTS":return{className:"WMTSLayer"};default:throw new r.c("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function m(e,a,t){const{url:r,type:n}=e,s="Feature Service"===n;if(!r)return{};if(/\/\d+$/.test(r)){if(s){const t=await a.fetchServiceMetadata(r,{customParameters:await a.fetchCustomParameters(e,(e=>(0,o.AX)(e)?.customParameters))});if("Oriented Imagery Layer"===t.type)return{id:t.id,className:"OrientedImageryLayer",sourceJSON:t}}return{}}await e.load();let i=await a.fetchItemData(e);if(s){const e=await(0,o.eW)(i,r,a),t=f(e);if("object"==typeof t){const a=(0,o.k1)(e),r=(0,o.wp)(e),n=(0,o.Ur)(e);t.className=null!=t.id&&a.includes(t.id)?"SubtypeGroupLayer":null!=t.id&&r?.includes(t.id)?"OrientedImageryLayer":null!=t.id&&n?.includes(t.id)?"CatalogLayer":"FeatureLayer"}return t}if("Scene Service"===n&&(i=await(0,o.oD)(e,i,a)),(0,o.mg)(i)>0)return f(i);const l=await a.fetchServiceMetadata(r);return t&&(l.tables=await t()),f(l)}function f(e){return 1===(0,o.mg)(e)&&{id:(0,o.cr)(e)}}},66668:(e,a,t)=>{t.d(a,{S:()=>n});var r=t(2600);async function n(e,a){const{data:t}=await(0,r.c)(e,{responseType:"json",query:{f:"json",...a?.customParameters,token:a?.apiKey}});return t}}}]);