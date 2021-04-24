(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[140],{1289:function(e,t,r){"use strict";r.r(t);var s=r(131),a=(r(129),r(130),r(137),r(134)),o=r(133),n=(r(132),r(135),r(136),r(365)),i=r(151),l=r(287),c=r(184),u=r(874),p=r(910),d=r(138),f=r(144),y=r(139),b=r(145),v=r(159),O=r(173),j=r(176),h=r(147),m=(r(150),r(171)),g=r(800);function T(e){return e.features.map((t=>{const r=b.a.fromJSON(e.spatialReference),s=m.a.fromJSON(t);return Object(d.q)(s.geometry).spatialReference=r,s}))}function M(e){return e.features.map((t=>(t.geometry.spatialReference=e.spatialReference,Object(h.a)(t.geometry))))}let w=class extends y.a{constructor(e){super(e),this.facilities=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.serviceAreaPolylines=null,this.serviceAreaPolygons=null}readFacilities(e){return M(e)}readPointBarriers(e,t){return M(t.barriers)}readPolylineBarriers(e){return M(e)}readPolygonBarriers(e){return M(e)}readIncidents(e,t){return T(t.saPolylines)}readServiceAreaPolygons(e,t){return T(t.saPolygons)}};Object(s.a)([Object(a.b)({type:[v.a]})],w.prototype,"facilities",void 0),Object(s.a)([Object(f.a)("facilities")],w.prototype,"readFacilities",null),Object(s.a)([Object(a.b)({type:[g.a]})],w.prototype,"messages",void 0),Object(s.a)([Object(a.b)({type:[v.a]})],w.prototype,"pointBarriers",void 0),Object(s.a)([Object(f.a)("pointBarriers",["barriers"])],w.prototype,"readPointBarriers",null),Object(s.a)([Object(a.b)({type:[j.a]})],w.prototype,"polylineBarriers",void 0),Object(s.a)([Object(f.a)("polylineBarriers")],w.prototype,"readPolylineBarriers",null),Object(s.a)([Object(a.b)({type:[O.a]})],w.prototype,"polygonBarriers",void 0),Object(s.a)([Object(f.a)("polygonBarriers")],w.prototype,"readPolygonBarriers",null),Object(s.a)([Object(a.b)({type:[m.a]})],w.prototype,"serviceAreaPolylines",void 0),Object(s.a)([Object(f.a)("serviceAreaPolylines",["saPolylines"])],w.prototype,"readIncidents",null),Object(s.a)([Object(a.b)({type:[m.a]})],w.prototype,"serviceAreaPolygons",void 0),Object(s.a)([Object(f.a)("serviceAreaPolygons",["saPolygons"])],w.prototype,"readServiceAreaPolygons",null),w=Object(s.a)([Object(o.a)("esri.tasks.support.ServiceAreaSolveResult")],w);var B=w;const S=Object(u.a)({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,defaultBreaks:!0,facilities:!0,outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},travelMode:!0});var N=r(875);let k=class extends(Object(N.a)(n.a)){constructor(e){super(e),this.url=null}solve(e,t){return async function(e,t,r){const s=[],a=[],o={},n={},u=Object(c.c)(e);return t.facilities&&t.facilities.features&&Object(p.a)(t.facilities.features,a,"facilities.features",o),t.pointBarriers&&t.pointBarriers.features&&Object(p.a)(t.pointBarriers.features,a,"pointBarriers.features",o),t.polylineBarriers&&t.polylineBarriers.features&&Object(p.a)(t.polylineBarriers.features,a,"polylineBarriers.features",o),t.polygonBarriers&&t.polygonBarriers.features&&Object(p.a)(t.polygonBarriers.features,a,"polygonBarriers.features",o),Object(l.a)(a).then((e=>{for(const t in o){const r=o[t];s.push(t),n[t]=e.slice(r[0],r[1])}return Object(p.e)(n,s)?Object(p.c)(u.path).catch((()=>({dontCheck:!0}))):Promise.resolve({dontCheck:!0})})).then((e=>{("dontCheck"in e?e.dontCheck:e.hasZ)||Object(p.b)(n,s);for(const r in n)n[r].forEach(((e,s)=>{t.get(r)[s].geometry=e}));let a={query:{...u.query,f:"json",...S.toQueryParams(t)}};return r&&(a={...r,...a}),Object(i.default)(`${u.path}/solveServiceArea`,a)})).then((e=>B.fromJSON(e.data)))}(this.url,e,t)}};Object(s.a)([Object(a.b)()],k.prototype,"url",void 0),k=Object(s.a)([Object(o.a)("esri.tasks.ServiceAreaTask")],k);var P=k;t.default=P},800:function(e,t,r){"use strict";var s=r(131),a=(r(129),r(130),r(137),r(134)),o=r(148),n=r(133),i=(r(132),r(135),r(136),r(768));const l=new o.a({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});let c=class extends i.a{constructor(e){super(e),this.type=null}};Object(s.a)([Object(a.b)({type:String,json:{read:l.read,write:l.write}})],c.prototype,"type",void 0),c=Object(s.a)([Object(n.a)("esri.tasks.support.NAMessage")],c);var u=c;t.a=u},825:function(e,t,r){"use strict";var s=r(131),a=(r(129),r(138)),o=(r(130),r(137),r(134)),n=r(144),i=r(133),l=(r(132),r(135),r(136),r(145)),c=r(159),u=r(149),p=r(176),d=(r(150),r(171)),f=r(191);let y=class extends f.default{constructor(e){super(e),this.extent=null,this.features=null,this.geometryType="polyline",this.routeId=null,this.routeName=null,this.totalDriveTime=null,this.totalLength=null,this.totalTime=null}readFeatures(e,t){(e||[]).forEach((e=>{this._decompressFeatureGeometry(e,t.summary.envelope.spatialReference)}));const r=l.a.fromJSON(t.spatialReference);return e.map((e=>{const t=d.a.fromJSON(e),s=e.geometry&&e.geometry.spatialReference;return t.geometry&&!s&&(Object(a.q)(t.geometry).spatialReference=r),t.strings=e.strings,t.events=(e.events||[]).map((t=>{const r=new d.a({geometry:new c.a({x:t.point.x,y:t.point.y,z:t.point.z,hasZ:void 0!==t.point.z,spatialReference:e.geometry&&e.geometry.spatialReference}),attributes:{ETA:t.ETA,arriveTimeUTC:t.arriveTimeUTC}});return r.strings=t.strings,r})),t}))}get mergedGeometry(){if(!this.features)return null;const e=this.features.map((({geometry:e})=>Object(a.q)(e))),t=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(e,t)}get strings(){return this.features.map((({strings:e})=>e))}_decompressFeatureGeometry(e,t){e.geometry=this._decompressGeometry(e.compressedGeometry,t)}_decompressGeometry(e,t){let r=0,s=0,a=0,o=0;const n=[];let i,l,c,u,p,d,f,y,b=0,v=0,O=0;if(p=e.match(/((\+|\-)[^\+\-\|]+|\|)/g),p||(p=[]),0===parseInt(p[b],32)){b=2;const e=parseInt(p[b],32);b++,d=parseInt(p[b],32),b++,1&e&&(v=p.indexOf("|")+1,f=parseInt(p[v],32),v++),2&e&&(O=p.indexOf("|",v)+1,y=parseInt(p[O],32),O++)}else d=parseInt(p[b],32),b++;for(;b<p.length&&"|"!==p[b];){i=parseInt(p[b],32)+r,b++,r=i,l=parseInt(p[b],32)+s,b++,s=l;const e=[i/d,l/d];v&&(u=parseInt(p[v],32)+a,v++,a=u,e.push(u/f)),O&&(c=parseInt(p[O],32)+o,O++,o=c,e.push(c/y)),n.push(e)}return{paths:[n],hasZ:v>0,hasM:O>0,spatialReference:t}}_mergePolylinesToSinglePath(e,t){let r=[];(e||[]).forEach((e=>{e.paths.forEach((e=>{r=r.concat(e)}))}));const s=[];let a=[0,0];return r.forEach((e=>{e[0]===a[0]&&e[1]===a[1]||(s.push(e),a=e)})),new p.a({paths:[s]},t)}};Object(s.a)([Object(o.b)({type:u.a,json:{read:{source:"summary.envelope"}}})],y.prototype,"extent",void 0),Object(s.a)([Object(o.b)()],y.prototype,"features",void 0),Object(s.a)([Object(n.a)("features")],y.prototype,"readFeatures",null),Object(s.a)([Object(o.b)()],y.prototype,"geometryType",void 0),Object(s.a)([Object(o.b)({readOnly:!0})],y.prototype,"mergedGeometry",null),Object(s.a)([Object(o.b)()],y.prototype,"routeId",void 0),Object(s.a)([Object(o.b)()],y.prototype,"routeName",void 0),Object(s.a)([Object(o.b)({value:null,readOnly:!0})],y.prototype,"strings",null),Object(s.a)([Object(o.b)({json:{read:{source:"summary.totalDriveTime"}}})],y.prototype,"totalDriveTime",void 0),Object(s.a)([Object(o.b)({json:{read:{source:"summary.totalLength"}}})],y.prototype,"totalLength",void 0),Object(s.a)([Object(o.b)({json:{read:{source:"summary.totalTime"}}})],y.prototype,"totalTime",void 0),y=Object(s.a)([Object(i.a)("esri.tasks.support.DirectionsFeatureSet")],y);var b=y;t.a=b},874:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));class s{constructor(e={}){this._options=e}toQueryParams(e){if(!e)return null;const t=e.toJSON(),r={};return Object.keys(t).forEach((e=>{const s=this._options[e];if(s){const a="boolean"!=typeof s&&s.name?s.name:e,o="boolean"!=typeof s&&s.getter?s.getter(t):t[e];null!=o&&(r[a]=(e=>{if(!Array.isArray(e))return!1;const[t]=e;return"number"==typeof t||"string"==typeof t})(o)?o.join(","):"object"==typeof o?JSON.stringify(o):o)}else r[e]=t[e]}),this),r}}function a(e){return new s(e)}},875:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var s=r(131),a=(r(129),r(177)),o=r(138),n=(r(130),r(137),r(134),r(133)),i=r(140),l=r(132),c=(r(135),r(136),r(151)),u=r(365);const p=e=>{let t=class extends e{async getServiceDescription(e){return this._serviceDescriptionPromise||(this._serviceDescriptionPromise=this._fetchServiceDescription(e)),this._serviceDescriptionPromise}async _fetchServiceDescription(e){if(!this.url||!this.parsedUrl)throw new i.a("network-service:missing-url","Url to Network service is missing");const t=this.url,{data:r}=await Object(c.default)(t,{query:{f:"json",token:e}});r.supportedTravelModes||(r.supportedTravelModes=[]);for(let a=0;a<r.supportedTravelModes.length;a++)r.supportedTravelModes[a].id||(r.supportedTravelModes[a].id=r.supportedTravelModes[a].itemId);const s=r.currentVersion>=10.4?async function(e,t){try{const{data:{supportedTravelModes:r,defaultTravelMode:s}}=await Object(c.default)(e+("/"===e[e.length-1]?"":"/")+"retrieveTravelModes",{query:{f:"json",token:t}});return{supportedTravelModes:r,defaultTravelMode:s}}catch(r){throw new i.a("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:r})}}(t,e):async function(e,t){const{data:r}=await Object(c.default)(e.substring(0,e.indexOf("/rest/")+6)+"info",{query:{f:"json",token:t}});if(!r||!r.owningSystemUrl)return{supportedTravelModes:[],defaultTravelMode:null};e=r.owningSystemUrl;const{data:s}=await Object(c.default)(e+("/"===e[e.length-1]?"":"/")+"sharing/rest/portals/self",{query:{f:"json",token:t}}),o=Object(a.b)("helperServices.routingUtilities.url",s);if(!o)return{supportedTravelModes:[],defaultTravelMode:null};const n=Object(l.J)(e),i=/\/solveClosestFacility$/.test(n.path)?"Route":/\/solveClosestFacility$/.test(n.path)?"ClosestFacility":"ServiceAreas",u=await Object(c.default)(o+("/"===o[o.length-1]?"":"/")+"GetTravelModes/execute",{query:{f:"json",serviceName:i,token:t}}),p=[];let d=null;if(u&&u.data&&u.data.results&&u.data.results.length){const e=u.data.results;for(const t of e)if("supportedTravelModes"===t.paramName){if(t.value&&t.value.features)for(const{attributes:e}of t.value.features)if(e){const t=JSON.parse(e.TravelMode);p.push(t)}}else"defaultTravelMode"===t.paramName&&(d=t.value)}return{supportedTravelModes:p,defaultTravelMode:d}}(t,e),{defaultTravelMode:o,supportedTravelModes:n}=await s;return r.defaultTravelMode=o,r.supportedTravelModes=n,r}_isInputGeometryZAware(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)if(Object(o.k)(e)&&e.hasZ)return!0}return!1}_dropZValuesOffInputGeometry(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)e.z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}};return t=Object(s.a)([Object(n.a)("esri.tasks.mixins.NAServiceDescription")],t),t};let d=class extends(p(u.a)){};d=Object(s.a)([Object(n.a)("esri.tasks.mixins.NAServiceDescription")],d)},910:function(e,t,r){"use strict";r.d(t,"a",(function(){return T})),r.d(t,"b",(function(){return M})),r.d(t,"c",(function(){return S})),r.d(t,"d",(function(){return w})),r.d(t,"e",(function(){return B}));var s=r(177),a=r(138),o=r(140),n=r(151),i=r(184),l=r(131),c=(r(129),r(130),r(137),r(134)),u=r(144),p=r(133),d=(r(132),r(135),r(136),r(139)),f=r(171),y=r(191),b=r(800),v=r(825);let O=class extends d.a{constructor(e){super(e),this.directions=null,this.route=null,this.routeName=null,this.stops=null}};Object(l.a)([Object(c.b)({type:v.a,json:{write:!0}})],O.prototype,"directions",void 0),Object(l.a)([Object(c.b)({type:f.a,json:{write:!0}})],O.prototype,"route",void 0),Object(l.a)([Object(c.b)({type:String,json:{write:!0}})],O.prototype,"routeName",void 0),Object(l.a)([Object(c.b)({type:[f.a],json:{write:!0}})],O.prototype,"stops",void 0),O=Object(l.a)([Object(p.a)("esri.tasks.support.RouteResult")],O);var j=O;function h(e){return e&&y.default.fromJSON(e).features.map((e=>e))}let m=class extends d.a{constructor(e){super(e),this.barriers=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routeResults=null}readPointBarriers(e,t){return h(t.barriers||t.pointBarriers)}readPolylineBarriers(e){return h(e)}readPolygonBarriers(e){return h(e)}};Object(l.a)([Object(c.b)({aliasOf:"pointBarriers"})],m.prototype,"barriers",void 0),Object(l.a)([Object(c.b)({type:[b.a]})],m.prototype,"messages",void 0),Object(l.a)([Object(c.b)({type:[f.a]})],m.prototype,"pointBarriers",void 0),Object(l.a)([Object(u.a)("pointBarriers",["barriers","pointBarriers"])],m.prototype,"readPointBarriers",null),Object(l.a)([Object(c.b)({type:[f.a]})],m.prototype,"polylineBarriers",void 0),Object(l.a)([Object(u.a)("polylineBarriers")],m.prototype,"readPolylineBarriers",null),Object(l.a)([Object(c.b)({type:[f.a]})],m.prototype,"polygonBarriers",void 0),Object(l.a)([Object(u.a)("polygonBarriers")],m.prototype,"readPolygonBarriers",null),Object(l.a)([Object(c.b)({type:[j]})],m.prototype,"routeResults",void 0),m=Object(l.a)([Object(p.a)("esri.tasks.support.RouteResultsContainer")],m);var g=m;function T(e,t,r,s){s[r]=[t.length,t.length+e.length],e.forEach((e=>{t.push(e.geometry)}))}function M(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)e.z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}function w(e){const t=[],r=[],{directions:s=[],routes:{features:a=[],spatialReference:o=null}={},stops:{features:n=[],spatialReference:i=null}={},barriers:l,polygonBarriers:c,polylineBarriers:u,messages:p}=e.data,d="esri.tasks.RouteTask.NULL_ROUTE_NAME";let f,y,b=!0;const v=a&&o||n&&i||l&&l.spatialReference||c&&c.spatialReference||u&&u.spatialReference;s.forEach((e=>{t.push(f=e.routeName),r[f]={directions:e}})),a.forEach((e=>{-1===t.indexOf(f=e.attributes.Name)&&(t.push(f),r[f]={}),e.geometry&&(e.geometry.spatialReference=v),r[f].route=e})),n.forEach((e=>{y=e.attributes,-1===t.indexOf(f=y.RouteName||d)&&(t.push(f),r[f]={}),f!==d&&(b=!1),e.geometry&&(e.geometry.spatialReference=v),null==r[f].stops&&(r[f].stops=[]),r[f].stops.push(e)})),n.length>0&&!0===b&&(r[t[0]].stops=r[d].stops,delete r[d],t.splice(t.indexOf(d),1));const O=t.map((e=>(r[e].routeName=e===d?null:e,r[e])));return g.fromJSON({routeResults:O,pointBarriers:l,polygonBarriers:c,polylineBarriers:u,messages:p})}function B(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)if(Object(a.k)(e)&&e.hasZ)return!0}return!1}async function S(e){if(!e)throw new o.a("network-service:missing-url","Url to Network service is missing");const{data:t}=await Object(n.default)(e,{query:{f:"json"}});t.supportedTravelModes||(t.supportedTravelModes=[]);for(let s=0;s<t.supportedTravelModes.length;s++)t.supportedTravelModes[s].id||(t.supportedTravelModes[s].id=t.supportedTravelModes[s].itemId);const r=t.currentVersion>=10.4?async function(e){try{const{data:{supportedTravelModes:t,defaultTravelMode:r}}=await Object(n.default)(e+("/"===e[e.length-1]?"":"/")+"retrieveTravelModes",{query:{f:"json"}});return{supportedTravelModes:t,defaultTravelMode:r}}catch(t){throw new o.a("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:t})}}(e):async function(e){const{data:t}=await Object(n.default)(e.substring(0,e.indexOf("/rest/")+6)+"info",{query:{f:"json"}});if(!t||!t.owningSystemUrl)return{supportedTravelModes:[],defaultTravelMode:null};e=t.owningSystemUrl;const{data:r}=await Object(n.default)(e+("/"===e[e.length-1]?"":"/")+"sharing/rest/portals/self",{query:{f:"json"}}),a=Object(s.b)("helperServices.routingUtilities.url",r);if(!a)return{supportedTravelModes:[],defaultTravelMode:null};const o=Object(i.c)(e),l=/\/solve$/.test(o.path)?"Route":/\/solveClosestFacility$/.test(o.path)?"ClosestFacility":"ServiceAreas",c=await Object(n.default)(a+("/"===a[a.length-1]?"":"/")+"GetTravelModes/execute",{query:{f:"json",serviceName:l}}),u=[];let p=null;if(c&&c.data&&c.data.results&&c.data.results.length){const e=c.data.results;for(const t of e)if("supportedTravelModes"===t.paramName){if(t.value&&t.value.features)for(const{attributes:e}of t.value.features)if(e){const t=JSON.parse(e.TravelMode);u.push(t)}}else"defaultTravelMode"===t.paramName&&(p=t.value)}return{supportedTravelModes:u,defaultTravelMode:p}}(e),{defaultTravelMode:a,supportedTravelModes:l}=await r;return t.defaultTravelMode=a,t.supportedTravelModes=l,t}}}]);
//# sourceMappingURL=140.bdece3f9.chunk.js.map