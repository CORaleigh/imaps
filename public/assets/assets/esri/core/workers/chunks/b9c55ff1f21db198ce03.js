"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[8828,2259],{3615:(e,a,r)=>{r.d(a,{q:()=>n});var t=r(66668);class n{constructor(){this._serviceMetadatas=new Map,this._itemDatas=new Map}async fetchServiceMetadata(e,a){const r=this._serviceMetadatas.get(e);if(r)return r;const n=await(0,t.S)(e,a);return this._serviceMetadatas.set(e,n),n}async fetchItemData(e){const{id:a}=e;if(!a)return null;const{_itemDatas:r}=this;if(r.has(a))return r.get(a);const t=await e.fetchData();return r.set(a,t),t}async fetchCustomParameters(e,a){const r=await this.fetchItemData(e);return r&&"object"==typeof r&&(a?a(r):r.customParameters)||null}}},50420:(e,a,r)=>{r.d(a,{S:()=>o});var t=r(47620),n=r(2600),i=r(20744),s=r(10860),l=r(48212),c=r(54872),y=r(9764);async function o(e,a){const r=(0,l.K0)(e);if(!r)throw new i.c("invalid-url","Invalid scene service url");const o={...a,sceneServerUrl:r.url.path,layerId:r.sublayer??void 0};if(o.sceneLayerItem??=await async function(e){const a=(await u(e)).serviceItemId;if(!a)return null;const r=new y.default({id:a,apiKey:e.apiKey}),i=await async function(e){const a=t.id?.findServerInfo(e.sceneServerUrl);if(a?.owningSystemUrl)return a.owningSystemUrl;const r=e.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const a=(await(0,n.c)(r,{query:{f:"json"},responseType:"json",signal:e.signal})).data.owningSystemUrl;if(a)return a}catch(e){(0,s.CE)(e)}return null}(e);null!=i&&(r.portal=new c.c({url:i}));try{return r.load({signal:e.signal})}catch(e){return(0,s.CE)(e),null}}(o),null==o.sceneLayerItem)return d(o.sceneServerUrl.replace("/SceneServer","/FeatureServer"),o);const L=await async function({sceneLayerItem:e,signal:a}){if(!e)return null;try{const r=(await e.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:a})).find((e=>"Feature Service"===e.type))||null;if(!r)return null;const t=new y.default({portal:r.portal,id:r.id});return await t.load(),t}catch(e){return(0,s.CE)(e),null}}(o);if(!L?.url)throw new i.c("related-service-not-found","Could not find feature service through portal item relationship");o.featureServiceItem=L;const m=await d(L.url,o);return m.portalItem=L,m}async function u(e){if(e.rootDocument)return e.rootDocument;const a={query:{f:"json",...e.customParameters,token:e.apiKey},responseType:"json",signal:e.signal};try{const r=await(0,n.c)(e.sceneServerUrl,a);e.rootDocument=r.data}catch{e.rootDocument={}}return e.rootDocument}async function d(e,a){const r=(0,l.K0)(e);if(!r)throw new i.c("invalid-feature-service-url","Invalid feature service url");const t=r.url.path,s=a.layerId;if(null==s)return{serverUrl:t};const c=u(a),y=a.featureServiceItem?await a.featureServiceItem.fetchData("json"):null,o=(y?.layers?.[0]||y?.tables?.[0])?.customParameters,d=e=>{const r={query:{f:"json",...o},responseType:"json",authMode:e,signal:a.signal};return(0,n.c)(t,r)},L=d("anonymous").catch((()=>d("no-prompt"))),[m,f]=await Promise.all([L,c]),p=f?.layers,S=m.data&&m.data.layers;if(!Array.isArray(S))throw new Error("expected layers array");if(Array.isArray(p)){for(let e=0;e<Math.min(p.length,S.length);e++)if(p[e].id===s)return{serverUrl:t,layerId:S[e].id}}else if(null!=s&&s<S.length)return{serverUrl:t,layerId:S[s].id};throw new Error("could not find matching associated sublayer")}},58828:(e,a,r)=>{r.d(a,{e:()=>T,populateOperationalLayers:()=>o});var t=r(2952),n=(r(9456),r(3615)),i=r(83928),s=r(9764);function l(e,a){return!(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)&&e.featureCollectionType===a}var c=r(12259),y=r(97824);async function o(e,a,r){if(!a)return;const t=a.map((e=>async function(e,a){return async function(e,a,r){const t=new e;return t.read(a,r.context),"group"===t.type&&("GroupLayer"===a.layerType?await T(t,a,r):v(a)?function(e,a,r){a.itemId&&(e.portalItem=new s.default({id:a.itemId,portal:r?.portal}),e.when((()=>{const t=t=>{const n=t.layerId;G(t,e,a,n,r);const i=a.featureCollection?.layers?.[n];i&&t.read(i,r)};e.layers?.forEach(t),e.tables?.forEach(t)})))}(t,a,r.context):b(a)&&await async function(e,a,r){const t=i.q.FeatureLayer,n=await t(),s=a.featureCollection,l=s?.showLegend,c=s?.layers?.map(((t,i)=>{const s=new n;s.read(t,r);const c={...r,ignoreDefaults:!0};return G(s,e,a,i,c),null!=l&&s.read({showLegend:l},c),s}));e.layers.addMany(c??[])}(t,a,r.context)),await(0,y.M)(t,r.context),t}(await g(e,a),e,a)}(e,r))),n=await Promise.allSettled(t);for(const a of n)"rejected"===a.status||a.value&&e.add(a.value)}const u={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",IntegratedMesh3DTilesLayer:"IntegratedMesh3DTilesLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer",LineOfSightLayer:"LineOfSightLayer"},d={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},L={ArcGISFeatureLayer:"FeatureLayer"},m={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",DefaultTileLayer:"TileLayer"},f={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CatalogLayer:"CatalogLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",KnowledgeGraphLayer:"UnsupportedLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},p={ArcGISFeatureLayer:"FeatureLayer",SubtypeGroupTable:"UnsupportedLayer"},S={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"},w={...f,LinkChartLayer:"LinkChartLayer"},h={...p},I={...S};async function g(e,a){const r=a.context,t=M(r);let y=e.layerType||e.type;!y&&a?.defaultLayerType&&(y=a.defaultLayerType);const o=t[y];let u=o?i.q[o]:i.q.UnknownLayer;if(v(e)){const a=r?.portal;if(e.itemId){const r=new s.default({id:e.itemId,portal:a});await r.load();const t=(await(0,c.q)(r,new n.q)).className||"UnknownLayer";u=i.q[t]}}else"ArcGISFeatureLayer"===y?function(e){return l(e,"notes")}(e)||function(e){return l(e,"markup")}(e)?u=i.q.MapNotesLayer:function(e){return l(e,"route")}(e)?u=i.q.RouteLayer:b(e)&&(u=i.q.GroupLayer):e.wmtsInfo?.url&&e.wmtsInfo.layerIdentifier?u=i.q.WMTSLayer:"WFS"===y&&"2.0.0"!==e.wfsInfo?.version&&(u=i.q.UnsupportedLayer);return u()}function b(e){return"ArcGISFeatureLayer"===e.layerType&&!v(e)&&(e.featureCollection?.layers?.length??0)>1}function v(e){return"Feature Collection"===e.type}function M(e){let a;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":a=m;break;case"ground":a=d;break;case"tables":a=L;break;default:a=u}break;case"link-chart":switch(e.layerContainerType){case"basemap":a=I;break;case"tables":a=h;break;default:a=w}break;default:switch(e.layerContainerType){case"basemap":a=S;break;case"tables":a=p;break;default:a=f}}return a}async function T(e,a,r){const n=new t.c,i=o(n,Array.isArray(a.layers)?a.layers:[],r);try{try{if(await i,"group"===e.type)return e.layers.addMany(n),e}catch(a){e.destroy();for(const e of n)e.destroy();throw a}}catch(e){throw e}}function G(e,a,r,t,n){e.read({id:`${a.id}-sublayer-${t}`,visibility:r.visibleLayers?.includes(t)??!0},n)}},83928:(e,a,r)=>{r.d(a,{q:()=>t});const t={BingMapsLayer:async()=>(await Promise.all([r.e(5612),r.e(5156),r.e(3912)]).then(r.bind(r,48388))).default,BuildingSceneLayer:async()=>(await Promise.all([r.e(5612),r.e(5156),r.e(2692),r.e(7988),r.e(7148),r.e(9364),r.e(4984),r.e(5776),r.e(236),r.e(8976),r.e(9512),r.e(2664),r.e(6556),r.e(672),r.e(3180),r.e(9644),r.e(8344),r.e(9420),r.e(8644),r.e(5928)]).then(r.bind(r,10948))).default,CatalogLayer:async()=>(await Promise.all([r.e(5612),r.e(5156),r.e(2692),r.e(7988),r.e(7148),r.e(9364),r.e(4984),r.e(5776),r.e(236),r.e(8976),r.e(2664),r.e(2848),r.e(5468),r.e(572),r.e(2907)]).then(r.bind(r,20324))).default,CSVLayer:async()=>(await Promise.all([r.e(5612),r.e(5156),r.e(2692),r.e(7988),r.e(7148),r.e(9364),r.e(4984),r.e(5776),r.e(236),r.e(8976),r.e(9512),r.e(2664),r.e(6556),r.e(672),r.e(1744)]).then(r.bind(r,79468))).default,DimensionLayer:async()=>(await Promise.all([r.e(5612),r.e(7832)]).then(r.bind(r,28320))).default,ElevationLayer:async()=>(await Promise.all([r.e(5612),r.e(2968),r.e(8380)]).then(r.bind(r,47104))).default,FeatureLayer:async()=>(await Promise.all([r.e(5612),r.e(5156),r.e(2692),r.e(7988),r.e(7148),r.e(9364),r.e(4984),r.e(5776),r.e(236),r.e(8976),r.e(9512),r.e(2664),r.e(6556),r.e(672),r.e(8348)]).then(r.bind(r,672))).default,GeoJSONLayer:async()=>(await Promise.all([r.e(5612),r.e(5156),r.e(2692),r.e(7988),r.e(7148),r.e(9364),r.e(4984),r.e(5776),r.e(236),r.e(8976),r.e(9512),r.e(6528)]).then(r.bind(r,92768))).default,GeoRSSLayer:async()=>(await Promise.all([r.e(5612),r.e(5156),r.e(7988),r.e(7148),r.e(2672)]).then(r.bind(r,43984))).default,GroupLayer:async()=>(await Promise.all([r.e(5612),r.e(7456)]).then(r.bind(r,44080))).default,ImageryLayer:async()=>(await Promise.all([r.e(5612),r.e(5156),r.e(2692),r.e(7988),r.e(7148),r.e(9364),r.e(4984),r.e(5776),r.e(2848),r.e(6128),r.e(9056),r.e(3291)]).then(r.bind(r,7896))).default,ImageryTileLayer:async()=>(await Promise.all([r.e(5612),r.e(5156),r.e(2692),r.e(7988),r.e(7148),r.e(9364),r.e(4984),r.e(6128),r.e(7048),r.e(9056),r.e(5496)]).then(r.bind(r,82744))).default,IntegratedMeshLayer:async()=>(await Promise.all([r.e(5612),r.e(9644),r.e(7024)]).then(r.bind(r,96584))).default,KMLLayer:async()=>(await Promise.all([r.e(5612),r.e(5156),r.e(2692),r.e(7988),r.e(7148),r.e(9364),r.e(4984),r.e(236),r.e(9032)]).then(r.bind(r,53688))).default,LineOfSightLayer:async()=>(await Promise.all([r.e(5612),r.e(3536)]).then(r.bind(r,91884))).default,LinkChartLayer:async()=>(await Promise.all([r.e(5156),r.e(2692),r.e(7988),r.e(7148),r.e(9364),r.e(4984),r.e(5776),r.e(236),r.e(9512),r.e(3220),r.e(1512),r.e(6680),r.e(8080)]).then(r.bind(r,54192))).default,MapImageLayer:async()=>(await Promise.all([r.e(5612),r.e(5156),r.e(2692),r.e(7988),r.e(7148),r.e(9364),r.e(4984),r.e(5776),r.e(236),r.e(8976),r.e(2848),r.e(5468),r.e(1248),r.e(3089)]).then(r.bind(r,3089))).default,MapNotesLayer:async()=>(await Promise.all([r.e(5612),r.e(5156),r.e(2692),r.e(7988),r.e(7148),r.e(9364),r.e(4984),r.e(5776),r.e(236),r.e(8976),r.e(9512),r.e(2664),r.e(6556),r.e(672),r.e(9516)]).then(r.bind(r,37784))).default,MediaLayer:async()=>(await Promise.all([r.e(5612),r.e(2364)]).then(r.bind(r,66664))).default,OGCFeatureLayer:async()=>(await Promise.all([r.e(5612),r.e(5156),r.e(2692),r.e(7988),r.e(7148),r.e(9364),r.e(4984),r.e(5776),r.e(236),r.e(8976),r.e(9512),r.e(3160),r.e(8224)]).then(r.bind(r,56288))).default,OpenStreetMapLayer:async()=>(await Promise.all([r.e(5612),r.e(5156),r.e(3632),r.e(1244)]).then(r.bind(r,1244))).default,OrientedImageryLayer:async()=>(await Promise.all([r.e(5612),r.e(5156),r.e(2692),r.e(7988),r.e(7148),r.e(9364),r.e(4984),r.e(5776),r.e(236),r.e(8976),r.e(9512),r.e(2664),r.e(6556),r.e(672),r.e(1740)]).then(r.bind(r,75432))).default,PointCloudLayer:async()=>(await Promise.all([r.e(5612),r.e(2692),r.e(9644),r.e(2296)]).then(r.bind(r,21680))).default,RouteLayer:async()=>(await Promise.all([r.e(5612),r.e(2692),r.e(7988),r.e(7148),r.e(9364),r.e(4984),r.e(236),r.e(6352)]).then(r.bind(r,40900))).default,SceneLayer:async()=>(await Promise.all([r.e(5612),r.e(2692),r.e(7988),r.e(7148),r.e(9364),r.e(4984),r.e(5776),r.e(236),r.e(8976),r.e(8624),r.e(3180),r.e(9644),r.e(8344),r.e(9420),r.e(7424),r.e(9780),r.e(8644),r.e(712)]).then(r.bind(r,3688))).default,StreamLayer:async()=>(await Promise.all([r.e(5612),r.e(5156),r.e(2692),r.e(7988),r.e(7148),r.e(9364),r.e(4984),r.e(5776),r.e(236),r.e(8976),r.e(9512),r.e(3460)]).then(r.bind(r,18e3))).default,SubtypeGroupLayer:async()=>(await Promise.all([r.e(5612),r.e(5156),r.e(2692),r.e(7988),r.e(7148),r.e(9364),r.e(4984),r.e(5776),r.e(236),r.e(8976),r.e(2664),r.e(6556),r.e(5368),r.e(2608)]).then(r.bind(r,8444))).default,TileLayer:async()=>(await Promise.all([r.e(5612),r.e(5156),r.e(2692),r.e(7988),r.e(7148),r.e(9364),r.e(4984),r.e(5776),r.e(236),r.e(8976),r.e(2848),r.e(5468),r.e(2968),r.e(1248),r.e(0)]).then(r.bind(r,5e4))).default,IntegratedMesh3DTilesLayer:async()=>(await Promise.all([r.e(5612),r.e(7752)]).then(r.bind(r,71316))).default,UnknownLayer:async()=>(await r.e(6584).then(r.bind(r,56584))).default,UnsupportedLayer:async()=>(await r.e(2456).then(r.bind(r,12456))).default,VectorTileLayer:async()=>(await Promise.all([r.e(5612),r.e(2968),r.e(3780),r.e(6055),r.e(7936)]).then(r.bind(r,65632))).default,VoxelLayer:async()=>(await Promise.all([r.e(5612),r.e(2692),r.e(9644),r.e(8256)]).then(r.bind(r,59496))).default,WFSLayer:async()=>(await Promise.all([r.e(5612),r.e(5156),r.e(2692),r.e(7988),r.e(7148),r.e(9364),r.e(4984),r.e(5776),r.e(236),r.e(8976),r.e(9512),r.e(4808),r.e(3688)]).then(r.bind(r,53440))).default,WMSLayer:async()=>(await Promise.all([r.e(5612),r.e(5156),r.e(2692),r.e(7988),r.e(7148),r.e(280)]).then(r.bind(r,85024))).default,WMTSLayer:async()=>(await Promise.all([r.e(5612),r.e(5156),r.e(3632),r.e(4832)]).then(r.bind(r,54832))).default,WebTileLayer:async()=>(await Promise.all([r.e(5612),r.e(5156),r.e(3632)]).then(r.bind(r,32896))).default}},67632:(e,a,r)=>{r.d(a,{AX:()=>l,Ur:()=>u,cr:()=>s,eW:()=>i,k1:()=>y,mg:()=>c,oD:()=>d,qi:()=>n,wp:()=>o});var t=r(50420);function n(e){const a={id:e.id,name:e.name};return"Oriented Imagery Layer"===e.type&&(a.layerType="OrientedImageryLayer"),a}async function i(e,a,r){if(null==e?.layers||null==e?.tables){const t=await r.fetchServiceMetadata(a,{customParameters:l(e)?.customParameters});(e=e||{}).layers=e.layers||t?.layers?.map(n),e.tables=e.tables||t?.tables?.map(n)}return e}function s(e){const{layers:a,tables:r}=e;return a?.length?a[0].id:r?.length?r[0].id:null}function l(e){if(!e)return null;const{layers:a,tables:r}=e;return a?.length?a[0]:r?.length?r[0]:null}function c(e){return(e?.layers?.length??0)+(e?.tables?.length??0)}function y(e){const a=[];return e?.layers?.forEach((e=>{"SubtypeGroupLayer"===e.layerType&&a.push(e.id)})),a}function o(e){return e?.layers?.filter((({layerType:e})=>"OrientedImageryLayer"===e)).map((({id:e})=>e))}function u(e){return e?.layers?.filter((({layerType:e})=>"CatalogLayer"===e)).map((({id:e})=>e))}async function d(e,a,r){if(!e?.url)return a??{};if(a??={},!a.layers){const t=await r.fetchServiceMetadata(e.url);a.layers=t.layers?.map(n)}const{serverUrl:i,portalItem:s}=await(0,t.S)(e.url,{sceneLayerItem:e,customParameters:l(a)?.customParameters}).catch((()=>({serverUrl:null,portalItem:null})));if(null==i)return a.tables=[],a;if(!a.tables&&s){const e=await s.fetchData();if(e?.tables)a.tables=e.tables.map(n);else{const t=await r.fetchServiceMetadata(i,{customParameters:l(e)?.customParameters});a.tables=t?.tables?.map(n)}}if(a.tables)for(const e of a.tables)e.url=`${i}/${e.id}`;return a}},12259:(e,a,r)=>{r.d(a,{fromItem:()=>u,q:()=>d});var t=r(20744),n=r(50420),i=r(3615),s=r(71068),l=r(83928),c=r(9764),y=r(67632),o=r(46940);async function u(e){!e.portalItem||e.portalItem instanceof c.default||(e={...e,portalItem:new c.default(e.portalItem)});const a=await async function(e){await e.load();const a=new i.q;return async function(e){const a=e.className,r=l.q[a];return{constructor:await r(),properties:e.properties}}(await d(e,a))}(e.portalItem);return new(0,a.constructor)({portalItem:e.portalItem,...a.properties})}async function d(e,a){switch(e.type){case"3DTiles Service":return{className:"IntegratedMesh3DTilesLayer"};case"CSV":return{className:"CSVLayer"};case"Feature Collection":return async function(e){await e.load();const a=(0,o._S)(e,"Map Notes"),r=(0,o._S)(e,"Markup");if(a||r)return{className:"MapNotesLayer"};if((0,o._S)(e,"Route Layer"))return{className:"RouteLayer"};const t=await e.fetchData();return 1===(0,y.mg)(t)?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Feature Service":return async function(e,a){const r=await L(e,a);if("object"==typeof r){const{sourceJSON:e,className:a}=r,t={sourceJSON:e};return null!=r.id&&(t.layerId=r.id),{className:a||"FeatureLayer",properties:t}}return{className:"GroupLayer"}}(e,a);case"Feed":case"Stream Service":return{className:"StreamLayer"};case"GeoJson":return{className:"GeoJSONLayer"};case"Group Layer":return{className:"GroupLayer"};case"Image Service":return async function(e,a){await e.load();const r=e.typeKeywords?.map((e=>e.toLowerCase()))??[];if(r.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(r.includes("tiled imagery"))return{className:"ImageryTileLayer"};const t=await a.fetchItemData(e),n=t?.layerType;if("ArcGISTiledImageServiceLayer"===n)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===n)return{className:"ImageryLayer"};const i=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)}),s=i.cacheType?.toLowerCase(),l=i.capabilities?.toLowerCase().includes("tilesonly");return"map"===s||l?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e,a);case"KML":return{className:"KMLLayer"};case"Map Service":return async function(e,a){return await async function(e,a){const{tileInfo:r}=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)});return r}(e,a)?{className:"TileLayer"}:{className:"MapImageLayer"}}(e,a);case"Media Layer":return{className:"MediaLayer"};case"Scene Service":return async function(e,a){const r=await L(e,a,(async()=>{try{if(!e.url)return[];const{serverUrl:r}=await(0,n.S)(e.url,{sceneLayerItem:e}),t=await a.fetchServiceMetadata(r);return t?.tables??[]}catch{return[]}}));if("object"==typeof r){const t={};let n;if(null!=r.id?(t.layerId=r.id,n=`${e.url}/layers/${r.id}`):n=e.url,e.typeKeywords?.length)for(const a of Object.keys(s.Wr))if(e.typeKeywords.includes(a))return{className:s.Wr[a]};const i=await a.fetchServiceMetadata(n,{customParameters:await a.fetchCustomParameters(e,(e=>(0,y.AX)(e)?.customParameters))});return{className:s.Wr[i?.layerType]||"SceneLayer",properties:t}}if(!1===r){const r=await a.fetchServiceMetadata(e.url);if("Voxel"===r?.layerType)return{className:"VoxelLayer"}}return{className:"GroupLayer"}}(e,a);case"Vector Tile Service":return{className:"VectorTileLayer"};case"WFS":return{className:"WFSLayer"};case"WMS":return{className:"WMSLayer"};case"WMTS":return{className:"WMTSLayer"};default:throw new t.c("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function L(e,a,r){const{url:t,type:n}=e,i="Feature Service"===n;if(!t)return{};if(/\/\d+$/.test(t)){if(i){const r=await a.fetchServiceMetadata(t,{customParameters:await a.fetchCustomParameters(e,(e=>(0,y.AX)(e)?.customParameters))});if("Oriented Imagery Layer"===r.type)return{id:r.id,className:"OrientedImageryLayer",sourceJSON:r}}return{}}await e.load();let s=await a.fetchItemData(e);if(i){const e=await(0,y.eW)(s,t,a),r=m(e);if("object"==typeof r){const a=(0,y.k1)(e),t=(0,y.wp)(e),n=(0,y.Ur)(e);r.className=null!=r.id&&a.includes(r.id)?"SubtypeGroupLayer":null!=r.id&&t?.includes(r.id)?"OrientedImageryLayer":null!=r.id&&n?.includes(r.id)?"CatalogLayer":"FeatureLayer"}return r}if("Scene Service"===n&&(s=await(0,y.oD)(e,s,a)),(0,y.mg)(s)>0)return m(s);const l=await a.fetchServiceMetadata(t);return r&&(l.tables=await r()),m(l)}function m(e){return 1===(0,y.mg)(e)&&{id:(0,y.cr)(e)}}},97824:(e,a,r)=>{r.d(a,{M:()=>s});var t=r(40196),n=r(10860),i=r(69504);async function s(e,a,r){const s=e&&e.getAtOrigin&&e.getAtOrigin("renderer",a.origin);if(s&&"unique-value"===s.type&&s.styleOrigin){const l=await(0,t.aG)(s.populateFromStyle());if((0,n.wp)(r),!1===l.ok){const r=l.error;a?.messages&&a.messages.push(new i.c("renderer:style-reference",`Failed to create unique value renderer from style reference: ${r.message}`,{error:r,context:a})),e.clear("renderer",a?.origin)}}}},66668:(e,a,r)=>{r.d(a,{S:()=>n});var t=r(2600);async function n(e,a){const{data:r}=await(0,t.c)(e,{responseType:"json",query:{f:"json",...a?.customParameters,token:a?.apiKey}});return r}}}]);