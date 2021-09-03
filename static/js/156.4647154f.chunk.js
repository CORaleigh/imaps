(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[156],{1322:function(e,t,r){"use strict";r.r(t);var s=r(77),i=r(79),a=(r(75),r(80),r(76),r(78)),o=r(96),n=r(878),l=r(215),c=r(918),u=r(116),p=(r(93),r(114)),b=r(82),d=r(81),y=r(88),O=r(90),m=r(782),j=r(95),f=r(103),h=r(125),v=r(117);function g(e){return e.features.map((t=>{const r=O.a.fromJSON(e.spatialReference),s=p.a.fromJSON(t);return Object(d.s)(s.geometry).spatialReference=r,s}))}function N(e){return e.features.map((t=>(t.geometry.spatialReference=e.spatialReference,Object(j.a)(t.geometry))))}let T=class extends b.a{constructor(e){super(e),this.facilities=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.serviceAreaPolylines=null,this.serviceAreaPolygons=null}readFacilities(e){return N(e)}readPointBarriers(e,t){return N(t.barriers)}readPolylineBarriers(e){return N(e)}readPolygonBarriers(e){return N(e)}readIncidents(e,t){return g(t.saPolylines)}readServiceAreaPolygons(e,t){return g(t.saPolygons)}};Object(s.a)([Object(i.b)({type:[f.a]})],T.prototype,"facilities",void 0),Object(s.a)([Object(y.a)("facilities")],T.prototype,"readFacilities",null),Object(s.a)([Object(i.b)({type:[m.a]})],T.prototype,"messages",void 0),Object(s.a)([Object(i.b)({type:[f.a]})],T.prototype,"pointBarriers",void 0),Object(s.a)([Object(y.a)("pointBarriers",["barriers"])],T.prototype,"readPointBarriers",null),Object(s.a)([Object(i.b)({type:[h.a]})],T.prototype,"polylineBarriers",void 0),Object(s.a)([Object(y.a)("polylineBarriers")],T.prototype,"readPolylineBarriers",null),Object(s.a)([Object(i.b)({type:[v.a]})],T.prototype,"polygonBarriers",void 0),Object(s.a)([Object(y.a)("polygonBarriers")],T.prototype,"readPolygonBarriers",null),Object(s.a)([Object(i.b)({type:[p.a]})],T.prototype,"serviceAreaPolylines",void 0),Object(s.a)([Object(y.a)("serviceAreaPolylines",["saPolylines"])],T.prototype,"readIncidents",null),Object(s.a)([Object(i.b)({type:[p.a]})],T.prototype,"serviceAreaPolygons",void 0),Object(s.a)([Object(y.a)("serviceAreaPolygons",["saPolygons"])],T.prototype,"readServiceAreaPolygons",null),T=Object(s.a)([Object(a.a)("esri.rest.support.ServiceAreaSolveResult")],T);var A=T;const B=Object(n.a)({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,defaultBreaks:!0,facilities:!0,outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},travelMode:!0});var w=r(360);let S=class extends w.a{constructor(e){super(e),this.url=null}solve(e,t){return async function(e,t,r){const s=[],i=[],a={},n={},p=Object(u.c)(e);return t.facilities&&t.facilities.features&&Object(c.a)(t.facilities.features,i,"facilities.features",a),t.pointBarriers&&t.pointBarriers.features&&Object(c.a)(t.pointBarriers.features,i,"pointBarriers.features",a),t.polylineBarriers&&t.polylineBarriers.features&&Object(c.a)(t.polylineBarriers.features,i,"polylineBarriers.features",a),t.polygonBarriers&&t.polygonBarriers.features&&Object(c.a)(t.polygonBarriers.features,i,"polygonBarriers.features",a),Object(l.a)(i).then((e=>{for(const t in a){const r=a[t];s.push(t),n[t]=e.slice(r[0],r[1])}return Object(c.e)(n,s)?Object(c.c)(p.path).catch((()=>({dontCheck:!0}))):Promise.resolve({dontCheck:!0})})).then((e=>{("dontCheck"in e?e.dontCheck:e.hasZ)||Object(c.b)(n,s);for(const r in n)n[r].forEach(((e,s)=>{t.get(r)[s].geometry=e}));let i={query:{...p.query,f:"json",...B.toQueryParams(t)}};return r&&(i={...r,...i}),Object(o.default)(`${p.path}/solveServiceArea`,i)})).then((e=>A.fromJSON(e.data)))}(this.url,e,t)}};Object(s.a)([Object(i.b)()],S.prototype,"url",void 0),S=Object(s.a)([Object(a.a)("esri.tasks.ServiceAreaTask")],S);var M=S;t.default=M},782:function(e,t,r){"use strict";var s=r(77),i=r(86),a=r(79),o=(r(75),r(80),r(76),r(78)),n=r(781);const l=new i.a({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});let c=class extends n.a{constructor(e){super(e),this.type=null}};Object(s.a)([Object(a.b)({type:String,json:{read:l.read,write:l.write}})],c.prototype,"type",void 0),c=Object(s.a)([Object(o.a)("esri.rest.support.NAMessage")],c);var u=c;t.a=u},821:function(e,t,r){"use strict";var s=r(77),i=(r(93),r(114)),a=r(81),o=r(79),n=(r(75),r(80),r(76),r(88)),l=r(78),c=r(137),u=r(90),p=r(103),b=r(125),d=r(94);let y=class extends c.default{constructor(e){super(e),this.extent=null,this.features=null,this.geometryType="polyline",this.routeId=null,this.routeName=null,this.totalDriveTime=null,this.totalLength=null,this.totalTime=null}readFeatures(e,t){(e||[]).forEach((e=>{this._decompressFeatureGeometry(e,t.summary.envelope.spatialReference)}));const r=u.a.fromJSON(t.spatialReference);return e.map((e=>{const t=i.a.fromJSON(e),s=e.geometry&&e.geometry.spatialReference;return t.geometry&&!s&&(Object(a.s)(t.geometry).spatialReference=r),t.strings=e.strings,t.events=(e.events||[]).map((t=>{const r=new i.a({geometry:new p.a({x:t.point.x,y:t.point.y,z:t.point.z,hasZ:void 0!==t.point.z,spatialReference:e.geometry&&e.geometry.spatialReference}),attributes:{ETA:t.ETA,arriveTimeUTC:t.arriveTimeUTC}});return r.strings=t.strings,r})),t}))}get mergedGeometry(){if(!this.features)return null;const e=this.features.map((({geometry:e})=>Object(a.s)(e))),t=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(e,t)}get strings(){return this.features.map((({strings:e})=>e))}_decompressFeatureGeometry(e,t){e.geometry=this._decompressGeometry(e.compressedGeometry,t)}_decompressGeometry(e,t){let r=0,s=0,i=0,a=0;const o=[];let n,l,c,u,p,b,d,y,O=0,m=0,j=0;if(p=e.match(/((\+|\-)[^\+\-\|]+|\|)/g),p||(p=[]),0===parseInt(p[O],32)){O=2;const e=parseInt(p[O],32);O++,b=parseInt(p[O],32),O++,1&e&&(m=p.indexOf("|")+1,d=parseInt(p[m],32),m++),2&e&&(j=p.indexOf("|",m)+1,y=parseInt(p[j],32),j++)}else b=parseInt(p[O],32),O++;for(;O<p.length&&"|"!==p[O];){n=parseInt(p[O],32)+r,O++,r=n,l=parseInt(p[O],32)+s,O++,s=l;const e=[n/b,l/b];m&&(u=parseInt(p[m],32)+i,m++,i=u,e.push(u/d)),j&&(c=parseInt(p[j],32)+a,j++,a=c,e.push(c/y)),o.push(e)}return{paths:[o],hasZ:m>0,hasM:j>0,spatialReference:t}}_mergePolylinesToSinglePath(e,t){let r=[];(e||[]).forEach((e=>{e.paths.forEach((e=>{r=r.concat(e)}))}));const s=[];let i=[0,0];return r.forEach((e=>{e[0]===i[0]&&e[1]===i[1]||(s.push(e),i=e)})),new b.a({paths:[s]},t)}};Object(s.a)([Object(o.b)({type:d.a,json:{read:{source:"summary.envelope"}}})],y.prototype,"extent",void 0),Object(s.a)([Object(o.b)()],y.prototype,"features",void 0),Object(s.a)([Object(n.a)("features")],y.prototype,"readFeatures",null),Object(s.a)([Object(o.b)()],y.prototype,"geometryType",void 0),Object(s.a)([Object(o.b)({readOnly:!0})],y.prototype,"mergedGeometry",null),Object(s.a)([Object(o.b)()],y.prototype,"routeId",void 0),Object(s.a)([Object(o.b)()],y.prototype,"routeName",void 0),Object(s.a)([Object(o.b)({value:null,readOnly:!0})],y.prototype,"strings",null),Object(s.a)([Object(o.b)({json:{read:{source:"summary.totalDriveTime"}}})],y.prototype,"totalDriveTime",void 0),Object(s.a)([Object(o.b)({json:{read:{source:"summary.totalLength"}}})],y.prototype,"totalLength",void 0),Object(s.a)([Object(o.b)({json:{read:{source:"summary.totalTime"}}})],y.prototype,"totalTime",void 0),y=Object(s.a)([Object(l.a)("esri.rest.support.DirectionsFeatureSet")],y);var O=y;t.a=O},878:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));class s{constructor(e={}){this._options=e}toQueryParams(e){if(!e)return null;const t=e.toJSON(),r={};return Object.keys(t).forEach((e=>{const s=this._options[e];if(s){const i="boolean"!=typeof s&&s.name?s.name:e,a="boolean"!=typeof s&&s.getter?s.getter(t):t[e];null!=a&&(r[i]=(e=>{if(!Array.isArray(e))return!1;const[t]=e;return"number"==typeof t||"string"==typeof t})(a)?a.join(","):"object"==typeof a?JSON.stringify(a):a)}else r[e]=t[e]}),this),r}}function i(e){return new s(e)}},918:function(e,t,r){"use strict";r.d(t,"a",(function(){return I})),r.d(t,"b",(function(){return E})),r.d(t,"c",(function(){return J})),r.d(t,"d",(function(){return x})),r.d(t,"e",(function(){return F}));var s=r(96),i=r(83),a=r(81),o=r(115),n=r(92),l=r(116),c=r(77),u=r(82),p=r(79),b=(r(75),r(80),r(76),r(78)),d=r(84),y=r(91),O=r(86);const m=Object(O.b)()({esriCentimeters:"centimeters",esriDecimalDegrees:"decimal-degrees",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriPoints:"points",esriYards:"yards"}),j=(Object(O.b)()({esriNAUCentimeters:"centimeters",esriNAUDecimalDegrees:"decimal-degrees",esriNAUDecimeters:"decimeters",esriNAUFeet:"feet",esriNAUInches:"inches",esriNAUKilometers:"kilometers",esriNAUMeters:"meters",esriNAUMiles:"miles",esriNAUMillimeters:"millimeters",esriNAUNauticalMiles:"nautical-miles",esriNAUPoints:"points",esriNAUYards:"yards"}),Object(O.b)()({esriDOTComplete:"complete",esriDOTCompleteNoEvents:"complete-no-events",esriDOTInstructionsOnly:"instructions-only",esriDOTStandard:"standard",esriDOTSummaryOnly:"summary-only"}),Object(O.b)()({esriNAOutputLineNone:"none",esriNAOutputLineStraight:"straight",esriNAOutputLineTrueShape:"true-shape",esriNAOutputLineTrueShapeWithMeasure:"true-shape-with-measure"}),Object(O.b)()({esriNAOutputPolygonNone:"none",esriNAOutputPolygonSimplified:"simplified",esriNAOutputPolygonDetailed:"detailed"}),Object(O.b)()({esriNFSBAllowBacktrack:"allow-backtrack",esriNFSBAtDeadEndsOnly:"at-dead-ends-only",esriNFSBNoBacktrack:"no-backtrack",esriNFSBAtDeadEndsAndIntersections:"at-dead-ends-and-intersections"})),f=(Object(O.b)()({esriNATravelDirectionFromFacility:"from-facility",esriNATravelDirectionToFacility:"to-facility"}),Object(O.b)()({esriNATimeOfDayNotUsed:"not-used",esriNATimeOfDayUseAsStartTime:"start",esriNATimeOfDayUseAsEndTime:"end"}),Object(O.b)()({AUTOMOBILE:"automobile",TRUCK:"truck",WALK:"walk",OTHER:"other"}));var h;let v=h=class extends u.a{constructor(e){super(e),this.attributeParameterValues=null,this.description=null,this.distanceAttributeName=null,this.id=null,this.impedanceAttributeName=null,this.name=null,this.restrictionAttributeNames=null,this.simplificationTolerance=null,this.simplificationToleranceUnits=null,this.timeAttributeName=null,this.type=null,this.useHierarchy=null,this.uturnAtJunctions=null}clone(){return new h(Object(d.a)({attributeParameterValues:this.attributeParameterValues,description:this.description,distanceAttributeName:this.distanceAttributeName,id:this.id,impedanceAttributeName:this.impedanceAttributeName,name:this.name,restrictionAttributeNames:this.restrictionAttributeNames,simplificationTolerance:this.simplificationTolerance,simplificationToleranceUnits:this.simplificationToleranceUnits,timeAttributeName:this.timeAttributeName,type:this.type,useHierarchy:this.useHierarchy,uturnAtJunctions:this.uturnAtJunctions}))}};Object(c.a)([Object(p.b)({type:[Object],json:{write:!0}})],v.prototype,"attributeParameterValues",void 0),Object(c.a)([Object(p.b)({type:String,json:{write:!0}})],v.prototype,"description",void 0),Object(c.a)([Object(p.b)({type:String,json:{write:!0}})],v.prototype,"distanceAttributeName",void 0),Object(c.a)([Object(p.b)({type:String,json:{write:!0}})],v.prototype,"id",void 0),Object(c.a)([Object(p.b)({type:String,json:{write:!0}})],v.prototype,"impedanceAttributeName",void 0),Object(c.a)([Object(p.b)({type:String,json:{write:!0}})],v.prototype,"name",void 0),Object(c.a)([Object(p.b)({type:[String],json:{write:!0}})],v.prototype,"restrictionAttributeNames",void 0),Object(c.a)([Object(p.b)({type:Number,json:{write:!0}})],v.prototype,"simplificationTolerance",void 0),Object(c.a)([Object(y.a)(m)],v.prototype,"simplificationToleranceUnits",void 0),Object(c.a)([Object(p.b)({type:String,json:{write:!0}})],v.prototype,"timeAttributeName",void 0),Object(c.a)([Object(y.a)(f)],v.prototype,"type",void 0),Object(c.a)([Object(p.b)({type:Boolean,json:{write:!0}})],v.prototype,"useHierarchy",void 0),Object(c.a)([Object(y.a)(j)],v.prototype,"uturnAtJunctions",void 0),v=h=Object(c.a)([Object(b.a)("esri.rest.support.TravelMode")],v);var g=v;let N=class extends u.a{constructor(e){super(e),this.currentVersion=null,this.defaultTravelMode=null,this.directionsLanguage=null,this.directionsSupportedLanguages=null,this.directionsTimeAttribute=null,this.hasZ=null,this.impedance=null,this.networkDataset=null,this.supportedTravelModes=null}};Object(c.a)([Object(p.b)()],N.prototype,"currentVersion",void 0),Object(c.a)([Object(p.b)()],N.prototype,"defaultTravelMode",void 0),Object(c.a)([Object(p.b)()],N.prototype,"directionsLanguage",void 0),Object(c.a)([Object(p.b)()],N.prototype,"directionsSupportedLanguages",void 0),Object(c.a)([Object(p.b)()],N.prototype,"directionsTimeAttribute",void 0),Object(c.a)([Object(p.b)()],N.prototype,"hasZ",void 0),Object(c.a)([Object(p.b)()],N.prototype,"impedance",void 0),Object(c.a)([Object(p.b)()],N.prototype,"networkDataset",void 0),Object(c.a)([Object(p.b)({type:[g]})],N.prototype,"supportedTravelModes",void 0),N=Object(c.a)([Object(b.a)("esri.rest.support.NetworkServiceDescription")],N);var T=N,A=r(114),B=r(88),w=r(137),S=r(782),M=r(821);let P=class extends u.a{constructor(e){super(e),this.directions=null,this.route=null,this.routeName=null,this.stops=null}};Object(c.a)([Object(p.b)({type:M.a,json:{write:!0}})],P.prototype,"directions",void 0),Object(c.a)([Object(p.b)({type:A.a,json:{write:!0}})],P.prototype,"route",void 0),Object(c.a)([Object(p.b)({type:String,json:{write:!0}})],P.prototype,"routeName",void 0),Object(c.a)([Object(p.b)({type:[A.a],json:{write:!0}})],P.prototype,"stops",void 0),P=Object(c.a)([Object(b.a)("esri.rest.support.RouteResult")],P);var k=P;function R(e){return e&&w.default.fromJSON(e).features.map((e=>e))}let U=class extends u.a{constructor(e){super(e),this.barriers=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routeResults=null}readPointBarriers(e,t){return R(t.barriers||t.pointBarriers)}readPolylineBarriers(e){return R(e)}readPolygonBarriers(e){return R(e)}};Object(c.a)([Object(p.b)({aliasOf:"pointBarriers"})],U.prototype,"barriers",void 0),Object(c.a)([Object(p.b)({type:[S.a]})],U.prototype,"messages",void 0),Object(c.a)([Object(p.b)({type:[A.a]})],U.prototype,"pointBarriers",void 0),Object(c.a)([Object(B.a)("pointBarriers",["barriers","pointBarriers"])],U.prototype,"readPointBarriers",null),Object(c.a)([Object(p.b)({type:[A.a]})],U.prototype,"polylineBarriers",void 0),Object(c.a)([Object(B.a)("polylineBarriers")],U.prototype,"readPolylineBarriers",null),Object(c.a)([Object(p.b)({type:[A.a]})],U.prototype,"polygonBarriers",void 0),Object(c.a)([Object(B.a)("polygonBarriers")],U.prototype,"readPolygonBarriers",null),Object(c.a)([Object(p.b)({type:[k]})],U.prototype,"routeResults",void 0),U=Object(c.a)([Object(b.a)("esri.rest.support.RouteResultsContainer")],U);var D=U;function I(e,t,r,s){s[r]=[t.length,t.length+e.length],e.forEach((e=>{t.push(e.geometry)}))}function E(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)e.z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}function x(e){const t=[],r=[],{directions:s=[],routes:{features:i=[],spatialReference:a=null}={},stops:{features:o=[],spatialReference:n=null}={},barriers:l,polygonBarriers:c,polylineBarriers:u,messages:p}=e.data,b="esri.tasks.RouteTask.NULL_ROUTE_NAME";let d,y,O=!0;const m=i&&a||o&&n||l&&l.spatialReference||c&&c.spatialReference||u&&u.spatialReference;s.forEach((e=>{t.push(d=e.routeName),r[d]={directions:e}})),i.forEach((e=>{-1===t.indexOf(d=e.attributes.Name)&&(t.push(d),r[d]={}),e.geometry&&(e.geometry.spatialReference=m),r[d].route=e})),o.forEach((e=>{y=e.attributes,-1===t.indexOf(d=y.RouteName||b)&&(t.push(d),r[d]={}),d!==b&&(O=!1),e.geometry&&(e.geometry.spatialReference=m),null==r[d].stops&&(r[d].stops=[]),r[d].stops.push(e)})),o.length>0&&!0===O&&(r[t[0]].stops=r[b].stops,delete r[b],t.splice(t.indexOf(b),1));const j=t.map((e=>(r[e].routeName=e===b?null:e,r[e])));return D.fromJSON({routeResults:j,pointBarriers:l,polygonBarriers:c,polylineBarriers:u,messages:p})}function F(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)if(Object(a.k)(e)&&e.hasZ)return!0}return!1}async function J(e,t,r){if(!e)throw new i.a("network-service:missing-url","Url to Network service is missing");const a=Object(l.a)({f:"json",token:t},r),{data:c}=await Object(s.default)(e,a);c.supportedTravelModes||(c.supportedTravelModes=[]);for(let s=0;s<c.supportedTravelModes.length;s++)c.supportedTravelModes[s].id||(c.supportedTravelModes[s].id=c.supportedTravelModes[s].itemId);const u=c.currentVersion>=10.4?async function(e,t,r){try{const i=Object(l.a)({f:"json",token:t},r),a=Object(n.I)(e)+"/retrieveTravelModes",{data:{supportedTravelModes:o,defaultTravelMode:c}}=await Object(s.default)(a,i);return{supportedTravelModes:o,defaultTravelMode:c}}catch(a){throw new i.a("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:a})}}(e,t,r):async function(e,t){var r,i;const a=Object(l.a)({f:"json"},t),{data:c}=await Object(s.default)(e.replace(/\/rest\/.*$/i,"/info"),a);if(!c||!c.owningSystemUrl)return{supportedTravelModes:[],defaultTravelMode:null};const{owningSystemUrl:u}=c,p=Object(n.I)(u)+"/sharing/rest/portals/self",{data:b}=await Object(s.default)(p,a),d=Object(o.b)("helperServices.routingUtilities.url",b);if(!d)return{supportedTravelModes:[],defaultTravelMode:null};const y=Object(l.c)(u),O=/\/solve$/i.test(y.path)?"Route":/\/solveclosestfacility$/i.test(y.path)?"ClosestFacility":"ServiceAreas",m=Object(l.a)({f:"json",serviceName:O},t),j=Object(n.I)(d)+"/GetTravelModes/execute",f=await Object(s.default)(j,m),h=[];let v=null;if(null!=f&&null!=(r=f.data)&&null!=(i=r.results)&&i.length){const e=f.data.results;for(const t of e){var g;if("supportedTravelModes"===t.paramName){if(null!=(g=t.value)&&g.features)for(const{attributes:e}of t.value.features)if(e){const t=JSON.parse(e.TravelMode);h.push(t)}}else"defaultTravelMode"===t.paramName&&(v=t.value)}}return{supportedTravelModes:h,defaultTravelMode:v}}(e,r),{defaultTravelMode:p,supportedTravelModes:b}=await u;return c.defaultTravelMode=p,c.supportedTravelModes=b,T.fromJSON(c)}}}]);
//# sourceMappingURL=156.4647154f.chunk.js.map