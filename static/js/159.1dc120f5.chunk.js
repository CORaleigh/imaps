(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[159],{311:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(144),l=a(85),r=a(163);async function i(e,t,a){const i=e&&e.getAtOrigin&&e.getAtOrigin("renderer",t.origin);if(i&&"unique-value"===i.type&&i.styleOrigin){const u=await Object(n.c)(i.populateFromStyle());if(Object(l.v)(a),!1===u.ok){const a=u.error;t&&t.messages&&t.messages.push(new r.a("renderer:style-reference",`Failed to create unique value renderer from style reference: ${a.message}`,{error:a,context:t})),e.clear("renderer",t.origin)}}}},342:function(e,t,a){"use strict";a.r(t),a.d(t,"getFirstLayerOrTableId",(function(){return m})),a.d(t,"getNumLayersAndTables",(function(){return b})),a.d(t,"load",(function(){return o})),a.d(t,"preprocessFSItemData",(function(){return p}));var n=a(83),l=a(616),r=a(155),i=a(708),u=a(311),s=a(673);async function o(e,t){const a=e.instance.portalItem;return a&&a.id?(await a.load(t),function(e){const t=e.instance.portalItem;if(-1===e.supportedTypes.indexOf(t.type))throw new n.a("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:t.type,expectedType:e.supportedTypes.join(", ")})}(e),async function(e,t){const a=e.instance,n=a.portalItem,{url:l,title:r}=n,s=Object(i.a)(n);if("group"===a.type)return a.read({title:r},s),c(a,e);l&&a.read({url:l},s);const o=await f(e,t);return o&&a.read(o,s),a.resourceReferences={portalItem:n,paths:s.readResourcePaths},a.read({title:r},s),Object(u.a)(a,s)}(e,t)):Promise.resolve()}function c(e,t){let a;const r=e.portalItem.type;switch(r){case"Feature Service":a=l.a.FeatureLayer;break;case"Stream Service":a=l.a.StreamLayer;break;case"Scene Service":a=l.a.SceneLayer;break;case"Feature Collection":a=l.a.FeatureLayer;break;default:throw new n.a("portal:unsupported-item-type-as-group",`The item type '${r}' is not supported as a 'IGroupLayer'`)}let i;return a().then((e=>(i=e,f(t)))).then((async t=>"Feature Service"===r?(t=await p(t,e.portalItem.url),d(e,i,t)):b(t)>0?d(e,i,t):function(e,t){return e.portalItem.url?Object(s.a)(e.portalItem.url).then((a=>{var n,l;function r(e){return{id:e.id,name:e.name}}a&&d(e,t,{layers:null==(n=a.layers)?void 0:n.map(r),tables:null==(l=a.tables)?void 0:l.map(r)})})):Promise.resolve()}(e,i)))}function d(e,t,a){let n=a.layers||[];const l=a.tables||[];"Feature Collection"===e.portalItem.type&&(n.forEach((e=>{var t;"Table"===(null==e||null==(t=e.layerDefinition)?void 0:t.type)&&l.push(e)})),n=n.filter((e=>{var t;return"Table"!==(null==e||null==(t=e.layerDefinition)?void 0:t.type)}))),n.reverse().forEach((n=>{const l=y(e,t,a,n);e.add(l)})),l.reverse().forEach((n=>{const l=y(e,t,a,n);e.tables.add(l)}))}function y(e,t,a,n){const l=new t({portalItem:e.portalItem.clone(),layerId:n.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){const t={origin:"portal-item",portal:e.portalItem.portal||r.a.getDefault()};l.read(n,t);const i=a.showLegend;null!=i&&l.read({showLegend:i},t)}return l}function f(e,t){if(!1===e.supportsData)return Promise.resolve(void 0);const a=e.instance;return a.portalItem.fetchData("json",t).catch((()=>null)).then((async e=>{if(function(e){return"stream"!==e.type&&"layerId"in e}(a)){let t,n=!0;return e&&b(e)>0&&(null==a.layerId&&(a.layerId=m(e)),t=function(e,t){const a=e.layers;if(a)for(let l=0;l<a.length;l++)if(a[l].id===t)return a[l];const n=e.tables;if(n)for(let l=0;l<n.length;l++)if(n[l].id===t)return n[l];return null}(e,a.layerId),t&&(1===b(e)&&(n=!1),null!=e.showLegend&&(t.showLegend=e.showLegend))),n&&"service-name"!==a.sublayerTitleMode&&(a.sublayerTitleMode="item-title-and-service-name"),t}return e}))}async function p(e,t){var a,n;if(null==(null==(a=e)?void 0:a.layers)||null==(null==(n=e)?void 0:n.tables)){const a=await Object(s.a)(t);(e=e||{}).layers=e.layers||(null==a?void 0:a.layers),e.tables=e.tables||(null==a?void 0:a.tables)}return e}function m(e){const t=e.layers;if(t&&t.length)return t[0].id;const a=e.tables;return a&&a.length?a[0].id:null}function b(e){var t,a,n,l;return(null!=(t=null==e||null==(a=e.layers)?void 0:a.length)?t:0)+(null!=(n=null==e||null==(l=e.tables)?void 0:l.length)?n:0)}},616:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n={BingMapsLayer:async()=>(await Promise.all([a.e(3),a.e(115)]).then(a.bind(null,928))).default,BuildingSceneLayer:async()=>(await Promise.all([a.e(1),a.e(2),a.e(3),a.e(4),a.e(79)]).then(a.bind(null,914))).default,CSVLayer:async()=>(await Promise.all([a.e(1),a.e(2),a.e(3),a.e(4),a.e(84)]).then(a.bind(null,929))).default,ElevationLayer:async()=>(await Promise.all([a.e(25),a.e(40)]).then(a.bind(null,927))).default,FeatureLayer:async()=>(await Promise.all([a.e(1),a.e(2),a.e(3),a.e(4),a.e(88)]).then(a.bind(null,300))).default,GroupLayer:async()=>(await Promise.all([a.e(41),a.e(114)]).then(a.bind(null,686))).default,GeoRSSLayer:async()=>(await Promise.all([a.e(1),a.e(3),a.e(119)]).then(a.bind(null,904))).default,ImageryLayer:async()=>(await Promise.all([a.e(1),a.e(2),a.e(3),a.e(4),a.e(77)]).then(a.bind(null,915))).default,ImageryTileLayer:async()=>(await Promise.all([a.e(1),a.e(2),a.e(3),a.e(4),a.e(83)]).then(a.bind(null,913))).default,IntegratedMeshLayer:async()=>(await Promise.all([a.e(10),a.e(28),a.e(38),a.e(121)]).then(a.bind(null,921))).default,KMLLayer:async()=>(await Promise.all([a.e(1),a.e(2),a.e(3),a.e(4),a.e(103)]).then(a.bind(null,930))).default,MapImageLayer:async()=>(await Promise.all([a.e(1),a.e(2),a.e(3),a.e(4),a.e(92)]).then(a.bind(null,842))).default,MapNotesLayer:async()=>(await Promise.all([a.e(1),a.e(2),a.e(3),a.e(4),a.e(81)]).then(a.bind(null,780))).default,OGCFeatureLayer:async()=>(await Promise.all([a.e(1),a.e(2),a.e(3),a.e(4),a.e(91)]).then(a.bind(null,931))).default,OpenStreetMapLayer:async()=>(await Promise.all([a.e(3),a.e(26),a.e(282)]).then(a.bind(null,906))).default,PointCloudLayer:async()=>(await Promise.all([a.e(2),a.e(28),a.e(38),a.e(108)]).then(a.bind(null,916))).default,RouteLayer:async()=>(await Promise.all([a.e(1),a.e(2),a.e(3),a.e(4),a.e(87)]).then(a.bind(null,907))).default,SceneLayer:async()=>(await Promise.all([a.e(1),a.e(2),a.e(3),a.e(4),a.e(82)]).then(a.bind(null,932))).default,StreamLayer:async()=>(await Promise.all([a.e(1),a.e(2),a.e(3),a.e(4),a.e(100)]).then(a.bind(null,933))).default,TileLayer:async()=>(await Promise.all([a.e(1),a.e(2),a.e(3),a.e(4),a.e(93)]).then(a.bind(null,908))).default,UnknownLayer:async()=>(await a.e(142).then(a.bind(null,909))).default,UnsupportedLayer:async()=>(await a.e(143).then(a.bind(null,910))).default,VectorTileLayer:async()=>(await Promise.all([a.e(25),a.e(48),a.e(116)]).then(a.bind(null,917))).default,WebTileLayer:async()=>(await Promise.all([a.e(3),a.e(26)]).then(a.bind(null,797))).default,WFSLayer:async()=>(await Promise.all([a.e(1),a.e(2),a.e(3),a.e(4),a.e(86)]).then(a.bind(null,934))).default,WMSLayer:async()=>(await Promise.all([a.e(1),a.e(2),a.e(3),a.e(105)]).then(a.bind(null,922))).default,WMTSLayer:async()=>(await Promise.all([a.e(3),a.e(26),a.e(263)]).then(a.bind(null,920))).default}},673:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(96);async function l(e){const{data:t}=await Object(n.default)(e,{responseType:"json",query:{f:"json"}});return t}},708:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(92),l=a(155);function r(e){return{origin:"portal-item",url:Object(n.K)(e.itemUrl),portal:e.portal||l.a.getDefault(),portalItem:e,readResourcePaths:[]}}}}]);
//# sourceMappingURL=159.1dc120f5.chunk.js.map