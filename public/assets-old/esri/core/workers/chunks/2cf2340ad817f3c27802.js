"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[8062,8008],{7335:(e,a,r)=>{r.d(a,{L:()=>n});var t=r(96187);class n{constructor(){this._serviceMetadatas=new Map}async fetchServiceMetadata(e,a){const r=this._serviceMetadatas.get(e);if(r)return r;const n=await(0,t.T)(e,a);return this._serviceMetadatas.set(e,n),n}}},71592:(e,a,r)=>{r.d(a,{w:()=>y});var t=r(40330),n=r(3172),i=r(20102),l=r(95330),s=r(66677),o=r(48522),c=r(15235);async function y(e,a){const r=(0,s.Qc)(e);if(!r)throw new i.Z("invalid-url","Invalid scene service url");const y={...a,sceneServerUrl:r.url.path,layerId:r.sublayer??void 0};if(y.sceneLayerItem??=await async function(e){const a=(await u(e)).serviceItemId;if(!a)return null;const r=new c.default({id:a,apiKey:e.apiKey}),i=await async function(e){const a=t.id?.findServerInfo(e.sceneServerUrl);if(a?.owningSystemUrl)return a.owningSystemUrl;const r=e.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const a=(await(0,n.Z)(r,{query:{f:"json"},responseType:"json",signal:e.signal})).data.owningSystemUrl;if(a)return a}catch(e){(0,l.r9)(e)}return null}(e);null!=i&&(r.portal=new o.Z({url:i}));try{return r.load({signal:e.signal})}catch(e){return(0,l.r9)(e),null}}(y),null==y.sceneLayerItem)return d(y.sceneServerUrl.replace("/SceneServer","/FeatureServer"),y);const p=await async function({sceneLayerItem:e,signal:a}){if(!e)return null;try{const r=(await e.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:a})).find((e=>"Feature Service"===e.type))||null;if(!r)return null;const t=new c.default({portal:r.portal,id:r.id});return await t.load(),t}catch(e){return(0,l.r9)(e),null}}(y);if(!p?.url)throw new i.Z("related-service-not-found","Could not find feature service through portal item relationship");const f=await d(p.url,y);return f.portalItem=p,f}async function u(e){if(e.rootDocument)return e.rootDocument;const a={query:{f:"json",token:e.apiKey},responseType:"json",signal:e.signal};try{const r=await(0,n.Z)(e.sceneServerUrl,a);e.rootDocument=r.data}catch{e.rootDocument={}}return e.rootDocument}async function d(e,a){const r=(0,s.Qc)(e);if(!r)throw new i.Z("invalid-feature-service-url","Invalid feature service url");const t=r.url.path,l=a.layerId;if(null==l)return{serverUrl:t};const o=u(a),c=e=>{const r={query:{f:"json"},responseType:"json",authMode:e,signal:a.signal};return(0,n.Z)(t,r)},y=c("anonymous").catch((()=>c("no-prompt"))),[d,p]=await Promise.all([y,o]),f=p?.layers,L=d.data&&d.data.layers;if(!Array.isArray(L))throw new Error("expected layers array");if(Array.isArray(f)){for(let e=0;e<Math.min(f.length,L.length);e++)if(f[e].id===l)return{serverUrl:t,layerId:L[e].id}}else if(null!=l&&l<L.length)return{serverUrl:t,layerId:L[l].id};throw new Error("could not find matching associated sublayer")}},52104:(e,a,r)=>{r.d(a,{V:()=>n});var t=r(96187);async function n(e,a){const r=await(0,t.T)(e,a);y(r),s(r);const n={serviceJSON:r};if((r.currentVersion??0)<10.5)return n;const i=await(0,t.T)(e+"/layers",a);return y(i),s(i),n.layersJSON={layers:i.layers,tables:i.tables},n}function i(e){return"Feature Layer"===e.type||"Oriented Imagery Layer"===e.type}function l(e){return"Table"===e.type}function s(e){e.layers=e.layers?.filter(i),e.tables=e.tables?.filter(l)}function o(e){e.type||="Feature Layer"}function c(e){e.type||="Table"}function y(e){e.layers?.forEach(o),e.tables?.forEach(c)}},70024:(e,a,r)=>{r.d(a,{k:()=>M,populateOperationalLayers:()=>y});var t=r(46791),n=(r(80442),r(7335)),i=r(87344),l=r(15235);function s(e,a){return!(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)&&e.featureCollectionType===a}var o=r(28008),c=r(40555);async function y(e,a,r){if(!a)return;const t=[];for(const e of a)t.push(g(e,r));const n=await Promise.allSettled(t);for(const a of n)"rejected"===a.status||a.value&&e.add(a.value)}const u={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer",LineOfSightLayer:"LineOfSightLayer"},d={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},p={ArcGISFeatureLayer:"FeatureLayer"},f={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",DefaultTileLayer:"TileLayer"},L={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},m={ArcGISFeatureLayer:"FeatureLayer"},w={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"},S={...L,LinkChartLayer:"LinkChartLayer"},h={...m},I={...w};async function g(e,a){return async function(e,a,r){const t=new e;return t.read(a,r.context),"group"===t.type&&("GroupLayer"===a.layerType?await M(t,a,r):v(a)?function(e,a,r){a.itemId&&(e.portalItem=new l.default({id:a.itemId,portal:r?.portal}),e.when((()=>{const t=t=>{const n=t.layerId;G(t,e,a,n,r);const i=a.featureCollection?.layers?.[n];i&&t.read(i,r)};e.layers?.forEach(t),e.tables?.forEach(t)})))}(t,a,r.context):b(a)&&await async function(e,a,r){const t=i.T.FeatureLayer,n=await t(),l=a.featureCollection,s=l?.showLegend,o=l?.layers?.map(((t,i)=>{const l=new n;l.read(t,r);const o={...r,ignoreDefaults:!0};return G(l,e,a,i,o),null!=s&&l.read({showLegend:s},o),l}));e.layers.addMany(o??[])}(t,a,r.context)),await(0,c.y)(t,r.context),t}(await async function(e,a){const r=a.context,t=T(r);let c=e.layerType||e.type;!c&&a?.defaultLayerType&&(c=a.defaultLayerType);const y=t[c];let u=y?i.T[y]:i.T.UnknownLayer;if(v(e)){const a=r?.portal;if(e.itemId){const r=new l.default({id:e.itemId,portal:a});await r.load();const t=(await(0,o.v)(r,new n.L)).className||"UnknownLayer";u=i.T[t]}}else"ArcGISFeatureLayer"===c?function(e){return s(e,"notes")}(e)||function(e){return s(e,"markup")}(e)?u=i.T.MapNotesLayer:function(e){return s(e,"route")}(e)?u=i.T.RouteLayer:b(e)&&(u=i.T.GroupLayer):e.wmtsInfo?.url&&e.wmtsInfo.layerIdentifier?u=i.T.WMTSLayer:"WFS"===c&&"2.0.0"!==e.wfsInfo?.version&&(u=i.T.UnsupportedLayer);return u()}(e,a),e,a)}function b(e){return"ArcGISFeatureLayer"===e.layerType&&!v(e)&&(e.featureCollection?.layers?.length??0)>1}function v(e){return"Feature Collection"===e.type}function T(e){let a;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":a=f;break;case"ground":a=d;break;case"tables":a=p;break;default:a=u}break;case"link-chart":switch(e.layerContainerType){case"basemap":a=I;break;case"tables":a=h;break;default:a=S}break;default:switch(e.layerContainerType){case"basemap":a=w;break;case"tables":a=m;break;default:a=L}}return a}async function M(e,a,r){const n=new t.Z,i=y(n,Array.isArray(a.layers)?a.layers:[],r);try{try{if(await i,"group"===e.type)return e.layers.addMany(n),e}catch(a){e.destroy();for(const e of n)e.destroy();throw a}}catch(e){throw e}}function G(e,a,r,t,n){e.read({id:`${a.id}-sublayer-${t}`,visibility:r.visibleLayers?.includes(t)??!0},n)}},87344:(e,a,r)=>{r.d(a,{T:()=>t});const t={BingMapsLayer:async()=>(await Promise.all([r.e(163),r.e(4609),r.e(8153)]).then(r.bind(r,2723))).default,BuildingSceneLayer:async()=>(await Promise.all([r.e(163),r.e(4609),r.e(9790),r.e(8775),r.e(7899),r.e(957),r.e(1423),r.e(3778),r.e(7215),r.e(4723),r.e(9238),r.e(6170),r.e(1767),r.e(2139),r.e(3554)]).then(r.bind(r,30223))).default,CSVLayer:async()=>(await Promise.all([r.e(163),r.e(4609),r.e(9790),r.e(8775),r.e(7899),r.e(957),r.e(1423),r.e(3778),r.e(7215),r.e(4723),r.e(9238),r.e(7587)]).then(r.bind(r,45425))).default,DimensionLayer:async()=>(await Promise.all([r.e(163),r.e(9717)]).then(r.bind(r,40081))).default,ElevationLayer:async()=>(await Promise.all([r.e(163),r.e(9016),r.e(2763)]).then(r.bind(r,65665))).default,FeatureLayer:async()=>(await Promise.all([r.e(163),r.e(4609),r.e(9790),r.e(8775),r.e(7899),r.e(957),r.e(1423),r.e(3778),r.e(7215),r.e(4723),r.e(9238),r.e(447)]).then(r.bind(r,19238))).default,GeoJSONLayer:async()=>(await Promise.all([r.e(163),r.e(4609),r.e(9790),r.e(8775),r.e(7899),r.e(957),r.e(1423),r.e(3778),r.e(7215),r.e(2934)]).then(r.bind(r,23477))).default,GeoRSSLayer:async()=>(await Promise.all([r.e(163),r.e(4609),r.e(9790),r.e(6e3)]).then(r.bind(r,3723))).default,GroupLayer:async()=>(await Promise.all([r.e(163),r.e(4609),r.e(9059)]).then(r.bind(r,40504))).default,ImageryLayer:async()=>(await Promise.all([r.e(163),r.e(4609),r.e(9790),r.e(8775),r.e(7899),r.e(957),r.e(4599),r.e(6610),r.e(1319),r.e(4608)]).then(r.bind(r,60590))).default,ImageryTileLayer:async()=>(await Promise.all([r.e(163),r.e(4609),r.e(9790),r.e(8775),r.e(7899),r.e(6610),r.e(1319),r.e(4136),r.e(9532)]).then(r.bind(r,74878))).default,IntegratedMeshLayer:async()=>(await Promise.all([r.e(163),r.e(1767),r.e(1537)]).then(r.bind(r,9310))).default,KMLLayer:async()=>(await Promise.all([r.e(163),r.e(4609),r.e(9790),r.e(8775),r.e(7899),r.e(1423),r.e(6413)]).then(r.bind(r,42756))).default,LineOfSightLayer:async()=>(await Promise.all([r.e(163),r.e(4998)]).then(r.bind(r,21786))).default,LinkChartLayer:async()=>(await Promise.all([r.e(4609),r.e(9790),r.e(8775),r.e(7899),r.e(957),r.e(1423),r.e(7215),r.e(8968),r.e(3794),r.e(6939)]).then(r.bind(r,19087))).default,MapImageLayer:async()=>(await Promise.all([r.e(163),r.e(4609),r.e(9790),r.e(8775),r.e(7899),r.e(957),r.e(1423),r.e(3778),r.e(4599),r.e(9735),r.e(2725),r.e(7374)]).then(r.bind(r,27374))).default,MapNotesLayer:async()=>(await Promise.all([r.e(163),r.e(4609),r.e(9790),r.e(8775),r.e(7899),r.e(957),r.e(1423),r.e(3778),r.e(7215),r.e(4723),r.e(9238),r.e(6618)]).then(r.bind(r,62128))).default,MediaLayer:async()=>(await Promise.all([r.e(163),r.e(4609),r.e(4828)]).then(r.bind(r,57765))).default,OGCFeatureLayer:async()=>(await Promise.all([r.e(163),r.e(4609),r.e(9790),r.e(8775),r.e(7899),r.e(957),r.e(1423),r.e(3778),r.e(7215),r.e(3966),r.e(2118)]).then(r.bind(r,88068))).default,OpenStreetMapLayer:async()=>(await Promise.all([r.e(163),r.e(4609),r.e(9971),r.e(6237)]).then(r.bind(r,66237))).default,OrientedImageryLayer:async()=>(await Promise.all([r.e(163),r.e(4609),r.e(9790),r.e(8775),r.e(7899),r.e(957),r.e(1423),r.e(3778),r.e(7215),r.e(4723),r.e(9238),r.e(178)]).then(r.bind(r,44958))).default,PointCloudLayer:async()=>(await Promise.all([r.e(163),r.e(8775),r.e(1767),r.e(7863)]).then(r.bind(r,10608))).default,RouteLayer:async()=>(await Promise.all([r.e(163),r.e(4609),r.e(9790),r.e(8775),r.e(7899),r.e(1423),r.e(9206)]).then(r.bind(r,40153))).default,SceneLayer:async()=>(await Promise.all([r.e(163),r.e(9790),r.e(8775),r.e(7899),r.e(957),r.e(1423),r.e(3778),r.e(6170),r.e(1767),r.e(2139),r.e(299)]).then(r.bind(r,57476))).default,StreamLayer:async()=>(await Promise.all([r.e(163),r.e(4609),r.e(9790),r.e(8775),r.e(7899),r.e(957),r.e(1423),r.e(3778),r.e(7215),r.e(5936)]).then(r.bind(r,88387))).default,SubtypeGroupLayer:async()=>(await Promise.all([r.e(163),r.e(4609),r.e(9790),r.e(8775),r.e(7899),r.e(957),r.e(1423),r.e(3778),r.e(4723),r.e(7157),r.e(7021)]).then(r.bind(r,20697))).default,TileLayer:async()=>(await Promise.all([r.e(163),r.e(4609),r.e(9790),r.e(8775),r.e(7899),r.e(957),r.e(1423),r.e(3778),r.e(4599),r.e(9735),r.e(9016),r.e(2725),r.e(8636)]).then(r.bind(r,98636))).default,UnknownLayer:async()=>(await r.e(4166).then(r.bind(r,44166))).default,UnsupportedLayer:async()=>(await r.e(9296).then(r.bind(r,39296))).default,VectorTileLayer:async()=>(await Promise.all([r.e(163),r.e(4609),r.e(9016),r.e(4325),r.e(9805),r.e(5481)]).then(r.bind(r,94756))).default,VoxelLayer:async()=>(await Promise.all([r.e(163),r.e(8775),r.e(1767),r.e(7528)]).then(r.bind(r,28865))).default,WFSLayer:async()=>(await Promise.all([r.e(163),r.e(4609),r.e(9790),r.e(8775),r.e(7899),r.e(957),r.e(1423),r.e(3778),r.e(7215),r.e(8089),r.e(7740)]).then(r.bind(r,12653))).default,WMSLayer:async()=>(await Promise.all([r.e(163),r.e(4609),r.e(9790),r.e(8775),r.e(7915)]).then(r.bind(r,25906))).default,WMTSLayer:async()=>(await Promise.all([r.e(163),r.e(4609),r.e(9971),r.e(2594)]).then(r.bind(r,72594))).default,WebTileLayer:async()=>(await Promise.all([r.e(163),r.e(4609),r.e(9971)]).then(r.bind(r,16199))).default}},33516:(e,a,r)=>{r.d(a,{M4:()=>o,Yv:()=>l,ht:()=>i,wk:()=>s});var t=r(17452),n=r(48522);function i(e){return{origin:"portal-item",url:(0,t.mN)(e.itemUrl),portal:e.portal||n.Z.getDefault(),portalItem:e,readResourcePaths:[]}}function l(e){const a=(0,t.mN)(e.itemUrl);return{origin:"portal-item",messages:[],writtenProperties:[],url:a,portal:e.portal||n.Z.getDefault(),portalItem:e,verifyItemRelativeUrls:a?{rootPath:a.path,writtenUrls:[]}:null,blockedRelativeUrls:[]}}function s(e){return{origin:"web-map",url:(0,t.mN)(e.itemUrl),portal:e.portal||n.Z.getDefault(),portalItem:e,readResourcePaths:[]}}function o(e,a){const r=(0,t.mN)(e.itemUrl);return{origin:"web-map",messages:[],writtenProperties:[],url:r,portal:e.portal||n.Z.getDefault(),portalItem:e,initiator:a,verifyItemRelativeUrls:r?{rootPath:r.path,writtenUrls:[]}:null,blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}}}},18062:(e,a,r)=>{r.d(a,{load:()=>L});var t=r(20102),n=r(66677),i=r(52104),l=r(7335),s=r(70024),o=r(87344),c=r(48522),y=r(33516),u=r(3072),d=r(14661),p=r(40555),f=r(96187);async function L(e,a){const r=e.instance.portalItem;if(r?.id)return await r.load(a),function(e){const a=e.instance.portalItem;if(!a?.type||!e.supportedTypes.includes(a.type))throw new t.Z("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:a?.type,expectedType:e.supportedTypes.join(", ")})}(e),async function(e,a){const r=e.instance,n=r.portalItem;if(!n)return;const{url:o,title:c}=n,L=(0,y.ht)(n);if("group"===r.type)return async function(e,a,r){const n=e.portalItem;if(!e.sourceIsPortalItem)return;const{title:o,type:c}=n;if("Group Layer"===c){if(!(0,d._$)(n,"Map"))throw new t.Z("portal:invalid-layer-item-typekeyword","'Group Layer' item without 'Map' type keyword is not supported");return async function(e){const a=e.portalItem,r=await a.fetchData("json");if(!r)return;const t=(0,y.wk)(a);e.read(r,t),await(0,s.k)(e,r,{context:t}),e.resourceReferences={portalItem:a,paths:t.readResourcePaths??[]}}(e)}return e.read({title:o},a),async function(e,a){let r;const{portalItem:n}=e;if(!n)return;const s=n.type,o=a.layerModuleTypeMap;switch(s){case"Feature Service":case"Feature Collection":r=o.FeatureLayer;break;case"Stream Service":r=o.StreamLayer;break;case"Scene Service":r=o.SceneLayer;break;default:throw new t.Z("portal:unsupported-item-type-as-group",`The item type '${s}' is not supported as a 'IGroupLayer'`)}const c=new l.L;let[y,d]=await Promise.all([r(),S(a,c)]),p=()=>y;if("Feature Service"===s){d=n.url?await(0,u.$O)(d,n.url,c):{};const a=(0,u.XX)(d),r=(0,u._Y)(d),t=[];if(a.length||r?.length){a.length&&t.push("SubtypeGroupLayer"),r?.length&&t.push("OrientedImageryLayer");const e=[];for(const a of t){const r=o[a];e.push(r())}const n=await Promise.all(e),i=new Map;t.forEach(((e,a)=>{i.set(e,n[a])})),p=e=>e.layerType?i.get(e.layerType)??y:y}const l=await async function(e){const{layersJSON:a}=await(0,i.V)(e);if(!a)return null;const r=[...a.layers,...a.tables];return e=>r.find((a=>a.id===e.id))}(n.url);return await m(e,p,d,l)}return"Scene Service"===s&&n.url&&(d=await(0,u.CD)(n,d,c)),(0,u.Q4)(d)>0?await m(e,p,d):await async function(e,a){const{portalItem:r}=e;if(!r?.url)return;const t=await(0,f.T)(r.url);t&&m(e,a,{layers:t.layers?.map(u.bS),tables:t.tables?.map(u.bS)})}(e,p)}(e,r)}(r,L,e);o&&r.read({url:o},L);const w=new l.L,h=await S(e,w,a);return h&&r.read(h,L),r.resourceReferences={portalItem:n,paths:L.readResourcePaths??[]},"subtype-group"!==r.type&&r.read({title:c},L),(0,p.y)(r,L)}(e,a)}async function m(e,a,r,t){let n=r.layers||[];const i=r.tables||[];if("Feature Collection"===e.portalItem?.type?(n.forEach(((e,a)=>{e.id=a,"Table"===e?.layerDefinition?.type&&i.push(e)})),n=n.filter((e=>"Table"!==e?.layerDefinition?.type))):(n.reverse(),i.reverse()),n.forEach((n=>{const i=t?.(n);if(i||!t){const t=w(e,a(n),r,n,i);e.add(t)}})),i.length){const a=await o.T.FeatureLayer();i.forEach((n=>{const i=t?.(n);if(i||!t){const t=w(e,a,r,n,i);e.tables.add(t)}}))}}function w(e,a,r,t,n){const i=e.portalItem,l={portalItem:i.clone(),layerId:t.id};null!=t.url&&(l.url=t.url);const s=new a(l);if("sourceJSON"in s&&(s.sourceJSON=n),"subtype-group"!==s.type&&(s.sublayerTitleMode="service-name"),"Feature Collection"===i.type){const e={origin:"portal-item",portal:i.portal||c.Z.getDefault()};s.read(t,e);const a=r.showLegend;null!=a&&s.read({showLegend:a},e)}return s}async function S(e,a,r){if(!1===e.supportsData)return;const t=e.instance,i=t.portalItem;if(!i)return;let l=null;try{l=await i.fetchData("json",r)}catch(e){}if(function(e){return"stream"!==e.type&&"layerId"in e}(t)){let e=null;const r=await async function(e,a,r){if(a?.layers&&a?.tables)return(0,u.Q4)(a);const t=(0,n.Qc)(e.url);if(!t)return 1;const i=await r.fetchServiceMetadata(t.url.path).catch((()=>null));return(a?.layers?.length??i?.layers?.length??0)+(a?.tables?.length??i?.tables?.length??0)}(i,l,a);if((l?.layers||l?.tables)&&r>0){if(null==t.layerId){const e=(0,u.XX)(l);t.layerId="subtype-group"===t.type?e?.[0]:(0,u.Ok)(l)}e=function(e,a){const{layerId:r}=a,t=e.layers?.find((e=>e.id===r))||e.tables?.find((e=>e.id===r));return t&&function(e,a){return!("feature"===a.type&&"layerType"in e&&"SubtypeGroupLayer"===e.layerType||"subtype-group"===a.type&&!("layerType"in e))}(t,a)?t:null}(l,t),e&&null!=l.showLegend&&(e.showLegend=l.showLegend)}return r>1&&"sublayerTitleMode"in t&&"service-name"!==t.sublayerTitleMode&&(t.sublayerTitleMode="item-title-and-service-name"),e}return l}},3072:(e,a,r)=>{r.d(a,{$O:()=>i,CD:()=>y,Ok:()=>l,Q4:()=>s,XX:()=>o,_Y:()=>c,bS:()=>n});var t=r(71592);function n(e){const a={id:e.id,name:e.name};return"Oriented Imagery Layer"===e.type&&(a.layerType="OrientedImageryLayer"),a}async function i(e,a,r){if(null==e?.layers||null==e?.tables){const t=await r.fetchServiceMetadata(a);(e=e||{}).layers=e.layers||t?.layers?.map(n),e.tables=e.tables||t?.tables?.map(n)}return e}function l(e){const a=e.layers;if(a?.length)return a[0].id;const r=e.tables;return r?.length?r[0].id:null}function s(e){return(e?.layers?.length??0)+(e?.tables?.length??0)}function o(e){const a=[];return e?.layers?.forEach((e=>{"SubtypeGroupLayer"===e.layerType&&a.push(e.id)})),a}function c(e){return e?.layers?.filter((({layerType:e})=>"OrientedImageryLayer"===e)).map((({id:e})=>e))}async function y(e,a,r){if(!e?.url)return a??{};if(a??={},!a.layers){const t=await r.fetchServiceMetadata(e.url);a.layers=t.layers?.map(n)}const{serverUrl:i,portalItem:l}=await(0,t.w)(e.url,{sceneLayerItem:e}).catch((()=>({serverUrl:null,portalItem:null})));if(null==i)return a.tables=[],a;if(!a.tables&&l){const e=await l.fetchData();if(e?.tables)a.tables=e.tables.map(n);else{const e=await r.fetchServiceMetadata(i);a.tables=e?.tables?.map(n)}}if(a.tables)for(const e of a.tables)e.url=`${i}/${e.id}`;return a}},28008:(e,a,r)=>{r.d(a,{fromItem:()=>u,v:()=>d});var t=r(20102),n=r(71592),i=r(7335),l=r(84230),s=r(87344),o=r(15235),c=r(3072),y=r(14661);async function u(e){!e.portalItem||e.portalItem instanceof o.default||(e={...e,portalItem:new o.default(e.portalItem)});const a=await async function(e){await e.load();const a=new i.L;return async function(e){const a=e.className,r=s.T[a];return{constructor:await r(),properties:e.properties}}(await d(e,a))}(e.portalItem);return new(0,a.constructor)({portalItem:e.portalItem,...a.properties})}async function d(e,a){switch(e.type){case"Map Service":return async function(e,a){return await async function(e,a){return(await a.fetchServiceMetadata(e.url)).tileInfo}(e,a)?{className:"TileLayer"}:{className:"MapImageLayer"}}(e,a);case"Feature Service":return async function(e,a){const r=await p(e,a);if("object"==typeof r){const e={};return null!=r.id&&(e.layerId=r.id),{className:r.className||"FeatureLayer",properties:e}}return{className:"GroupLayer"}}(e,a);case"Feature Collection":return async function(e){await e.load();const a=(0,y._$)(e,"Map Notes"),r=(0,y._$)(e,"Markup");if(a||r)return{className:"MapNotesLayer"};if((0,y._$)(e,"Route Layer"))return{className:"RouteLayer"};const t=await e.fetchData();return 1===(0,c.Q4)(t)?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Scene Service":return async function(e,a){const r=await p(e,a,(async()=>{try{if(!e.url)return[];const{serverUrl:r}=await(0,n.w)(e.url,{sceneLayerItem:e}),t=await a.fetchServiceMetadata(r);return t?.tables??[]}catch{return[]}}));if("object"==typeof r){const t={};let n;if(null!=r.id?(t.layerId=r.id,n=`${e.url}/layers/${r.id}`):n=e.url,e.typeKeywords?.length)for(const a of Object.keys(l.fb))if(e.typeKeywords.includes(a))return{className:l.fb[a]};const i=await a.fetchServiceMetadata(n);return{className:l.fb[i?.layerType]||"SceneLayer",properties:t}}if(!1===r){const r=await a.fetchServiceMetadata(e.url);if("Voxel"===r?.layerType)return{className:"VoxelLayer"}}return{className:"GroupLayer"}}(e,a);case"Image Service":return async function(e,a){await e.load();const r=e.typeKeywords?.map((e=>e.toLowerCase()))??[];if(r.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(r.includes("tiled imagery"))return{className:"ImageryTileLayer"};const t=await e.fetchData(),n=t?.layerType;if("ArcGISTiledImageServiceLayer"===n)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===n)return{className:"ImageryLayer"};const i=await a.fetchServiceMetadata(e.url),l=i.cacheType?.toLowerCase(),s=i.capabilities?.toLowerCase().includes("tilesonly");return"map"===l||s?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e,a);case"Stream Service":case"Feed":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"GeoJson":return{className:"GeoJSONLayer"};case"CSV":return{className:"CSVLayer"};case"KML":return{className:"KMLLayer"};case"WFS":return{className:"WFSLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};case"Group Layer":return{className:"GroupLayer"};default:throw new t.Z("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function p(e,a,r){const t=e.url;if(!t||/\/\d+$/.test(t))return{};await e.load();let n=await e.fetchData();if("Feature Service"===e.type){const e=await(0,c.$O)(n,t,a),r=f(e);if("object"==typeof r){const a=(0,c.XX)(e),t=(0,c._Y)(e);r.className=null!=r.id&&a.includes(r.id)?"SubtypeGroupLayer":null!=r.id&&t?.includes(r.id)?"OrientedImageryLayer":"FeatureLayer"}return r}if("Scene Service"===e.type&&(n=await(0,c.CD)(e,n,a)),(0,c.Q4)(n)>0)return f(n);const i=await a.fetchServiceMetadata(t);return r&&(i.tables=await r()),f(i)}function f(e){return 1===(0,c.Q4)(e)&&{id:(0,c.Ok)(e)}}},40555:(e,a,r)=>{r.d(a,{y:()=>l});var t=r(66643),n=r(95330),i=r(20941);async function l(e,a,r){const l=e&&e.getAtOrigin&&e.getAtOrigin("renderer",a.origin);if(l&&"unique-value"===l.type&&l.styleOrigin){const s=await(0,t.q6)(l.populateFromStyle());if((0,n.k_)(r),!1===s.ok){const r=s.error;a?.messages&&a.messages.push(new i.Z("renderer:style-reference",`Failed to create unique value renderer from style reference: ${r.message}`,{error:r,context:a})),e.clear("renderer",a?.origin)}}}},96187:(e,a,r)=>{r.d(a,{T:()=>n});var t=r(3172);async function n(e,a){const{data:r}=await(0,t.Z)(e,{responseType:"json",query:{f:"json",...a?.customParameters,token:a?.apiKey}});return r}}}]);