(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[174],{220:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return d})),t.d(r,"c",(function(){return f})),t.d(r,"d",(function(){return u})),t.d(r,"e",(function(){return s})),t.d(r,"f",(function(){return i}));var n=t(85),a=t(96);function l(e,r){const t=r&&r.url&&r.url.path;if(e&&t&&(e=Object(a.A)(e,t,{preserveProtocolRelative:!0}),r.portalItem&&r.readResourcePaths)){const t=Object(a.C)(e,r.portalItem.itemUrl);c.test(t)&&r.readResourcePaths.push(r.portalItem.resourceFromPath(t).path)}return y(e,r&&r.portal)}function s(e,r,t=0){if(!e)return e;!Object(a.s)(e)&&r&&r.blockedRelativeUrls&&r.blockedRelativeUrls.push(e);let n=Object(a.A)(e);if(r){const t=r.verifyItemRelativeUrls&&r.verifyItemRelativeUrls.rootPath||r.url&&r.url.path;if(t){const l=y(t,r.portal);n=Object(a.C)(y(n,r.portal),l,l),n!==e&&r.verifyItemRelativeUrls&&r.verifyItemRelativeUrls.writtenUrls.push(n)}}return n=function(e,r){return r&&!r.isPortal&&r.urlKey&&r.customBaseUrl?Object(a.h)(e,`${r.urlKey}.${r.customBaseUrl}`,r.portalHostname):e}(n,r&&r.portal),Object(a.s)(n)&&(n=Object(a.D)(n)),null!=r&&r.resources&&null!=r&&r.portalItem&&!Object(a.s)(n)&&!Object(a.u)(n)&&0===t&&r.resources.toKeep.push({resource:r.portalItem.resourceFromPath(n)}),n}function u(e,r,t){return l(e,t)}function i(e,r,t,n){const a=s(e,n);void 0!==a&&(r[t]=a)}const o=/\/items\/([^\/]+)\/resources\//,c=/^\.\/resources\//;function d(e){const r=Object(n.k)(e)?e.match(o):null;return Object(n.k)(r)?r[1]:null}function y(e,r){if(!r||r.isPortal||!r.urlKey||!r.customBaseUrl)return e;const t=`${r.urlKey}.${r.customBaseUrl}`;return Object(a.q)(a.g,`${a.g.scheme}://${t}`)?Object(a.h)(e,r.portalHostname,t):Object(a.h)(e,t,r.portalHostname)}var f=Object.freeze({__proto__:null,fromJSON:l,toJSON:s,read:u,write:i,itemIdFromResourceUrl:d})},227:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return d})),t.d(r,"c",(function(){return p})),t.d(r,"d",(function(){return I})),t.d(r,"e",(function(){return O})),t.d(r,"f",(function(){return y})),t.d(r,"g",(function(){return f})),t.d(r,"h",(function(){return h})),t.d(r,"i",(function(){return v})),t.d(r,"j",(function(){return m})),t.d(r,"k",(function(){return w}));var n=t(85),a=t(96),l=t(220);const s={mapserver:"MapServer",imageserver:"ImageServer",featureserver:"FeatureServer",sceneserver:"SceneServer",streamserver:"StreamServer",vectortileserver:"VectorTileServer"},u=Object.values(s),i=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/(${u.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),o=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/([^\\/\\n]+)\\/(${u.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),c=/(.*?)\/(?:layers\/)?(\d+)\/?$/i;function d(e){return!!i.test(e)}function y(e){const r=Object(a.K)(e),t=r.path.match(i)||r.path.match(o);if(!t)return null;const[,n,l,u,c]=t,d=l.indexOf("/");return{title:b(-1!==d?l.slice(d+1):l),serverType:s[u.toLowerCase()],sublayer:null!=c&&""!==c?parseInt(c,10):null,url:{path:n}}}function f(e){const r=Object(a.K)(e).path.match(c);return r?{serviceUrl:r[1],sublayerId:Number(r[2])}:null}function b(e){return(e=e.replace(/\s*[/_]+\s*/g," "))[0].toUpperCase()+e.slice(1)}function m(e,r){const t=[];if(e){const r=y(e);Object(n.k)(r)&&r.title&&t.push(r.title)}if(r){const e=b(r);t.push(e)}if(2===t.length){if(-1!==t[0].toLowerCase().indexOf(t[1].toLowerCase()))return t[0];if(-1!==t[1].toLowerCase().indexOf(t[0].toLowerCase()))return t[1]}return t.join(" - ")}function p(e){if(!e)return!1;const r=-1!==(e=e.toLowerCase()).indexOf(".arcgis.com/"),t=-1!==e.indexOf("//services")||-1!==e.indexOf("//tiles")||-1!==e.indexOf("//features");return r&&t}function h(e,r){return e?Object(a.I)(Object(a.H)(e,r)):e}function v(e){let{url:r}=e;if(!r)return{url:r};r=Object(a.H)(r,e.logger);const t=Object(a.K)(r),l=y(t.path);let s;if(Object(n.k)(l))null!=l.sublayer&&null==e.layer.layerId&&(s=l.sublayer),r=l.url.path;else if(e.nonStandardUrlAllowed){const e=f(t.path);Object(n.k)(e)&&(r=e.serviceUrl,s=e.sublayerId)}return{url:Object(a.I)(r),layerId:s}}function w(e,r,t,n,s){Object(l.f)(r,n,"url",s),n.url&&null!=e.layerId&&(n.url=Object(a.z)(n.url,t,e.layerId.toString()))}function O(e){if(!e)return!1;const r=e.toLowerCase(),t=-1!==r.indexOf("/services/"),n=-1!==r.indexOf("/mapserver/wmsserver"),a=-1!==r.indexOf("/imageserver/wmsserver"),l=-1!==r.indexOf("/wmsserver");return t&&(n||a||l)}function I(e){if(!e)return!1;const r=new a.a(Object(a.A)(e)).authority.toLowerCase();return"server.arcgisonline.com"===r||"services.arcgisonline.com"===r}},380:function(e,r,t){"use strict";t.r(r),t.d(r,"fromUrl",(function(){return o}));var n=t(100),a=t(88),l=t(85),s=t(96),u=t(227),i=t(604);async function o(e){var r;const n=null==(r=e.properties)?void 0:r.customParameters,s=await async function(e,r){let t=Object(u.f)(e);if(Object(l.j)(t)&&(t=await d(e,r)),Object(l.j)(t))throw new a.a("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:n,sublayer:s}=t;let o;const c={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(n){case"MapServer":o=null!=s?"FeatureLayer":async function(e,r){return(await m(e,r)).tileInfo}(e,r).then((e=>e?"TileLayer":"MapImageLayer"));break;case"ImageServer":o=m(e,r).then((e=>{const r=e.tileInfo&&e.tileInfo.format;return e.tileInfo?!r||"LERC"!==r.toUpperCase()||e.cacheType&&"elevation"!==e.cacheType.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"}));break;case"SceneServer":o=m(t.url.path,r).then((e=>{const r={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};if(e&&Array.isArray(e.layers)&&e.layers.length>0){const t=e.layers[0].layerType;if(null!=r[t])return r[t]}return"SceneLayer"}));break;default:o=c[n]}const y={FeatureLayer:!0,SceneLayer:!0},b="FeatureServer"===n,p={parsedUrl:t,Constructor:null,layerOrTableId:b?s:null,sublayerIds:null,tableIds:null},h=await o;if(y[h]&&null==s){const t=await f(e,n,r);if(b&&(p.sublayerInfos=t.layerInfos,p.tableInfos=t.tableInfos),1!==t.layerIds.length+t.tableIds.length)p.sublayerIds=t.layerIds,p.tableIds=t.tableIds;else if(b){var v,w;p.layerOrTableId=null!=(v=t.layerIds[0])?v:t.tableIds[0],p.sourceJSON=null!=(w=t.layerInfos[0])?w:t.tableInfos[0]}}return p.Constructor=await async function(e){return(0,i.a[e])()}(h),p}(e.url,n),o={...e.properties,url:e.url};if(!s.sublayerIds)return null!=s.layerOrTableId&&(o.layerId=s.layerOrTableId,o.sourceJSON=s.sourceJSON),new s.Constructor(o);const y=new(0,(await Promise.all([t.e(1),t.e(43),t.e(123)]).then(t.bind(null,691))).default)({title:s.parsedUrl.title});return function(e,r,t){function n(e,n){const a={...t,layerId:e,sublayerTitleMode:"service-name"};return Object(l.k)(n)&&(a.sourceJSON=n),new r.Constructor(a)}r.sublayerIds.forEach((t=>{const a=n(t,c(r.sublayerInfos,t));e.add(a)})),r.tableIds.forEach((t=>{const a=n(t,c(r.tableInfos,t));e.tables.add(a)}))}(y,s,o),y}function c(e,r){return e?e.find((e=>e.id===r)):null}async function d(e,r){var t;const n=await m(e,r);let a=null,i=null;const o=n.type;if("Feature Layer"===o||"Table"===o?(a="FeatureServer",i=n.id):"indexedVector"===o?a="VectorTileServer":n.hasOwnProperty("mapName")?a="MapServer":n.hasOwnProperty("bandCount")&&n.hasOwnProperty("pixelSizeX")?a="ImageServer":n.hasOwnProperty("maxRecordCount")&&n.hasOwnProperty("allowGeometryUpdates")?a="FeatureServer":n.hasOwnProperty("streamUrls")?a="StreamServer":y(n)?(a="SceneServer",i=n.id):n.hasOwnProperty("layers")&&y(null==(t=n.layers)?void 0:t[0])&&(a="SceneServer"),!a)return null;const c=null!=i?Object(u.g)(e):null;return{title:Object(l.k)(c)&&n.name||Object(s.k)(e),serverType:a,sublayer:i,url:{path:Object(l.k)(c)?c.serviceUrl:Object(s.K)(e).path}}}function y(e){return(null==e?void 0:e.hasOwnProperty("store"))&&e.hasOwnProperty("id")&&"number"==typeof e.id}async function f(e,r,t){var n,a;let l,s=!1;if("FeatureServer"===r){const r=await async function(e,r){var t,n;let a=await m(e,r);a=a||{},a.layers=(null==(t=a.layers)?void 0:t.filter(b))||[];const l={serviceJSON:a};if(a.currentVersion<10.5)return l;const s=await m(e+"/layers",r);return l.layersJSON={layers:(null==s||null==(n=s.layers)?void 0:n.filter(b))||[],tables:(null==s?void 0:s.tables)||[]},l}(e,t);s=!!r.layersJSON,l=r.layersJSON||r.serviceJSON}else l=await m(e,t);const u=null==(n=l)?void 0:n.layers,i=null==(a=l)?void 0:a.tables;return{layerIds:(null==u?void 0:u.map((e=>e.id)).reverse())||[],tableIds:(null==i?void 0:i.map((e=>e.id)).reverse())||[],layerInfos:s?u:[],tableInfos:s?i:[]}}function b(e){return!e.type||"Feature Layer"===e.type}async function m(e,r){return(await Object(n.default)(e,{responseType:"json",query:{f:"json",...r}})).data}},604:function(e,r,t){"use strict";t.d(r,"a",(function(){return n}));const n={BingMapsLayer:async()=>(await Promise.all([t.e(1),t.e(107)]).then(t.bind(null,946))).default,BuildingSceneLayer:async()=>(await Promise.all([t.e(1),t.e(2),t.e(3),t.e(5),t.e(80)]).then(t.bind(null,931))).default,CSVLayer:async()=>(await Promise.all([t.e(1),t.e(2),t.e(3),t.e(5),t.e(84)]).then(t.bind(null,947))).default,ElevationLayer:async()=>(await Promise.all([t.e(13),t.e(28),t.e(44)]).then(t.bind(null,945))).default,FeatureLayer:async()=>(await Promise.all([t.e(1),t.e(2),t.e(3),t.e(5),t.e(87)]).then(t.bind(null,297))).default,GroupLayer:async()=>(await Promise.all([t.e(1),t.e(43),t.e(118)]).then(t.bind(null,691))).default,GeoRSSLayer:async()=>(await Promise.all([t.e(1),t.e(2),t.e(109)]).then(t.bind(null,920))).default,ImageryLayer:async()=>(await Promise.all([t.e(1),t.e(2),t.e(3),t.e(5),t.e(76)]).then(t.bind(null,932))).default,ImageryTileLayer:async()=>(await Promise.all([t.e(1),t.e(2),t.e(3),t.e(5),t.e(83)]).then(t.bind(null,929))).default,IntegratedMeshLayer:async()=>(await Promise.all([t.e(6),t.e(13),t.e(39),t.e(130)]).then(t.bind(null,939))).default,KMLLayer:async()=>(await Promise.all([t.e(1),t.e(2),t.e(3),t.e(5),t.e(101)]).then(t.bind(null,948))).default,MapImageLayer:async()=>(await Promise.all([t.e(1),t.e(2),t.e(3),t.e(5),t.e(89)]).then(t.bind(null,861))).default,MapNotesLayer:async()=>(await Promise.all([t.e(1),t.e(2),t.e(3),t.e(5),t.e(82)]).then(t.bind(null,799))).default,OGCFeatureLayer:async()=>(await Promise.all([t.e(1),t.e(2),t.e(3),t.e(5),t.e(91)]).then(t.bind(null,949))).default,OpenStreetMapLayer:async()=>(await Promise.all([t.e(1),t.e(27),t.e(288)]).then(t.bind(null,922))).default,PointCloudLayer:async()=>(await Promise.all([t.e(3),t.e(13),t.e(39),t.e(117)]).then(t.bind(null,933))).default,RouteLayer:async()=>(await Promise.all([t.e(1),t.e(2),t.e(3),t.e(5),t.e(85)]).then(t.bind(null,923))).default,SceneLayer:async()=>(await Promise.all([t.e(1),t.e(2),t.e(3),t.e(5),t.e(81)]).then(t.bind(null,950))).default,StreamLayer:async()=>(await Promise.all([t.e(1),t.e(2),t.e(3),t.e(5),t.e(96)]).then(t.bind(null,951))).default,TileLayer:async()=>(await Promise.all([t.e(1),t.e(2),t.e(3),t.e(5),t.e(92)]).then(t.bind(null,924))).default,UnknownLayer:async()=>(await t.e(148).then(t.bind(null,925))).default,UnsupportedLayer:async()=>(await t.e(149).then(t.bind(null,926))).default,VectorTileLayer:async()=>(await Promise.all([t.e(1),t.e(13),t.e(28),t.e(50),t.e(126)]).then(t.bind(null,934))).default,VoxelLayer:async()=>(await t.e(110).then(t.bind(null,928))).default,WebTileLayer:async()=>(await Promise.all([t.e(1),t.e(27)]).then(t.bind(null,818))).default,WFSLayer:async()=>(await Promise.all([t.e(1),t.e(2),t.e(3),t.e(5),t.e(88)]).then(t.bind(null,952))).default,WMSLayer:async()=>(await Promise.all([t.e(1),t.e(2),t.e(3),t.e(32),t.e(106)]).then(t.bind(null,940))).default,WMTSLayer:async()=>(await Promise.all([t.e(1),t.e(27),t.e(204)]).then(t.bind(null,937))).default}}}]);
//# sourceMappingURL=174.454f9138.chunk.js.map