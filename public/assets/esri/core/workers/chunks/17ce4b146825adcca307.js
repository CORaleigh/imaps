"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[5132,5159],{3920:(e,t,r)=>{r.d(t,{p:()=>l,r:()=>u});var s=r(43697),o=r(15923),i=r(61247),n=r(5600),a=r(52011),p=r(72762);const l=e=>{let t=class extends e{destroy(){this.destroyed||(this._get("handles")?.destroy(),this._get("updatingHandles")?.destroy())}get handles(){return this._get("handles")||new i.Z}get updatingHandles(){return this._get("updatingHandles")||new p.t}};return(0,s._)([(0,n.Cb)({readOnly:!0})],t.prototype,"handles",null),(0,s._)([(0,n.Cb)({readOnly:!0})],t.prototype,"updatingHandles",null),t=(0,s._)([(0,a.j)("esri.core.HandleOwner")],t),t};let u=class extends(l(o.Z)){};u=(0,s._)([(0,a.j)("esri.core.HandleOwner")],u)},42033:(e,t,r)=>{r.d(t,{E:()=>o,_:()=>i});var s=r(70586);async function o(e,t){const{WhereClause:s}=await r.e(1534).then(r.bind(r,41534));return s.create(e,t)}function i(e,t){return(0,s.pC)(e)?(0,s.pC)(t)?`(${e}) AND (${t})`:e:t}},72762:(e,t,r)=>{r.d(t,{t:()=>d});var s=r(43697),o=r(15923),i=r(61247),n=r(70586),a=r(17445),p=r(1654),l=r(5600),u=r(52011);let d=class extends o.Z{constructor(){super(...arguments),this.updating=!1,this._handleId=0,this._handles=new i.Z,this._scheduleHandleId=0,this._pendingPromises=new Set}destroy(){this.removeAll(),this._handles.destroy()}add(e,t,r={}){return this._installWatch(e,t,r,a.YP)}addWhen(e,t,r={}){return this._installWatch(e,t,r,a.gx)}addOnCollectionChange(e,t,{initial:r=!1,final:s=!1}={}){const o=++this._handleId;return this._handles.add([(0,a.on)(e,"after-changes",this._createSyncUpdatingCallback(),a.Z_),(0,a.on)(e,"change",t,{onListenerAdd:r?e=>t({added:e.toArray(),removed:[]}):void 0,onListenerRemove:s?e=>t({added:[],removed:e.toArray()}):void 0})],o),{remove:()=>this._handles.remove(o)}}addPromise(e){if((0,n.Wi)(e))return e;const t=++this._handleId;this._handles.add({remove:()=>{this._pendingPromises.delete(e)&&(0!==this._pendingPromises.size||this._handles.has(c)||this._set("updating",!1))}},t),this._pendingPromises.add(e),this._set("updating",!0);const r=()=>this._handles.remove(t);return e.then(r,r),e}removeAll(){this._pendingPromises.clear(),this._handles.removeAll(),this._set("updating",!1)}_installWatch(e,t,r={},s){const o=++this._handleId;r.sync||this._installSyncUpdatingWatch(e,o);const i=s(e,t,r);return this._handles.add(i,o),{remove:()=>this._handles.remove(o)}}_installSyncUpdatingWatch(e,t){const r=this._createSyncUpdatingCallback(),s=(0,a.YP)(e,r,{sync:!0,equals:()=>!1});return this._handles.add(s,t),s}_createSyncUpdatingCallback(){return()=>{this._handles.remove(c),++this._scheduleHandleId;const e=this._scheduleHandleId;this._get("updating")||this._set("updating",!0),this._handles.add((0,p.Os)((()=>{e===this._scheduleHandleId&&(this._set("updating",this._pendingPromises.size>0),this._handles.remove(c))})),c)}}};(0,s._)([(0,l.Cb)({readOnly:!0})],d.prototype,"updating",void 0),d=(0,s._)([(0,u.j)("esri.core.support.WatchUpdatingTracking")],d);const c=-42},76604:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var s=r(43697),o=r(20102),i=r(5600),n=(r(75215),r(67676),r(52011)),a=r(19238);let p=class extends a.default{constructor(e){super(e),this.geometryType="point",this.type="oriented-imagery",this.operationalLayerType="OrientedImageryLayer"}_verifySource(){if(super._verifySource(),"point"!==this.geometryType)throw new o.Z("feature-layer:invalid-geometry-type","OrientedImageryLayer only supports point geometry type")}};(0,s._)([(0,i.Cb)()],p.prototype,"cameraProperties",void 0),(0,s._)([(0,i.Cb)()],p.prototype,"coverage",void 0),(0,s._)([(0,i.Cb)()],p.prototype,"coveragePercent",void 0),(0,s._)([(0,i.Cb)()],p.prototype,"defaultSearchLocation",void 0),(0,s._)([(0,i.Cb)()],p.prototype,"depthImage",void 0),(0,s._)([(0,i.Cb)()],p.prototype,"digitalElevationModel",void 0),(0,s._)([(0,i.Cb)()],p.prototype,"geometryType",void 0),(0,s._)([(0,i.Cb)()],p.prototype,"imageProperties",void 0),(0,s._)([(0,i.Cb)()],p.prototype,"maximumDistance",void 0),(0,s._)([(0,i.Cb)({json:{read:!1},value:"oriented-imagery",readOnly:!0})],p.prototype,"type",void 0),(0,s._)([(0,i.Cb)({type:["OrientedImageryLayer"]})],p.prototype,"operationalLayerType",void 0),p=(0,s._)([(0,n.j)("esri.layers.OrientedImageryLayer")],p);const l=p},54295:(e,t,r)=>{r.d(t,{V:()=>n});var s=r(43697),o=r(5600),i=(r(75215),r(67676),r(52011));const n=e=>{let t=class extends e{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):"portalItem"in this?this.portalItem?.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return(0,s._)([(0,o.Cb)({type:String})],t.prototype,"apiKey",null),t=(0,s._)([(0,i.j)("esri.layers.mixins.APIKeyMixin")],t),t}},17287:(e,t,r)=>{r.d(t,{Y:()=>l});var s=r(43697),o=r(92604),i=r(70586),n=r(5600),a=(r(75215),r(67676),r(52011)),p=r(66677);const l=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,p.Qc)(this.url);if((0,i.pC)(e)&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,p.Nm)(e,o.Z.getLogger(this.declaredClass)))}};return(0,s._)([(0,n.Cb)()],t.prototype,"title",null),(0,s._)([(0,n.Cb)({type:String})],t.prototype,"url",null),t=(0,s._)([(0,a.j)("esri.layers.mixins.ArcGISService")],t),t}},70082:(e,t,r)=>{r.d(t,{Z:()=>d});var s=r(43697),o=r(2368),i=r(35454),n=r(96674),a=r(5600),p=(r(75215),r(67676),r(52011));const l=new i.X({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});let u=class extends((0,o.J)(n.wq)){constructor(e){super(e),this.name=null,this.description=null,this.drawingTool=null,this.prototype=null,this.thumbnail=null}};(0,s._)([(0,a.Cb)({json:{write:!0}})],u.prototype,"name",void 0),(0,s._)([(0,a.Cb)({json:{write:!0}})],u.prototype,"description",void 0),(0,s._)([(0,a.Cb)({json:{read:l.read,write:l.write}})],u.prototype,"drawingTool",void 0),(0,s._)([(0,a.Cb)({json:{write:!0}})],u.prototype,"prototype",void 0),(0,s._)([(0,a.Cb)({json:{write:!0}})],u.prototype,"thumbnail",void 0),u=(0,s._)([(0,p.j)("esri.layers.support.FeatureTemplate")],u);const d=u},16451:(e,t,r)=>{r.d(t,{Z:()=>y});var s=r(43697),o=r(2368),i=r(96674),n=r(5600),a=(r(75215),r(67676),r(71715)),p=r(52011),l=r(30556),u=r(72729),d=r(70082);let c=class extends((0,o.J)(i.wq)){constructor(e){super(e),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(e){const t={};for(const r of Object.keys(e))t[r]=(0,u.im)(e[r]);return t}writeDomains(e,t){const r={};for(const t of Object.keys(e))e[t]&&(r[t]=e[t]?.toJSON());t.domains=r}};(0,s._)([(0,n.Cb)({json:{write:!0}})],c.prototype,"id",void 0),(0,s._)([(0,n.Cb)({json:{write:!0}})],c.prototype,"name",void 0),(0,s._)([(0,n.Cb)({json:{write:!0}})],c.prototype,"domains",void 0),(0,s._)([(0,a.r)("domains")],c.prototype,"readDomains",null),(0,s._)([(0,l.c)("domains")],c.prototype,"writeDomains",null),(0,s._)([(0,n.Cb)({type:[d.Z],json:{write:!0}})],c.prototype,"templates",void 0),c=(0,s._)([(0,p.j)("esri.layers.support.FeatureType")],c);const y=c},56765:(e,t,r)=>{r.d(t,{Z:()=>u});var s,o=r(43697),i=r(46791),n=r(96674),a=r(5600),p=(r(75215),r(67676),r(52011));let l=s=class extends n.wq{constructor(e){super(e),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new i.Z}clone(){return new s({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],l.prototype,"floorField",void 0),(0,o._)([(0,a.Cb)({json:{read:!1,write:!1}})],l.prototype,"viewAllMode",void 0),(0,o._)([(0,a.Cb)({json:{read:!1,write:!1}})],l.prototype,"viewAllLevelIds",void 0),l=s=(0,o._)([(0,p.j)("esri.layers.support.LayerFloorInfo")],l);const u=l},72064:(e,t,r)=>{r.d(t,{h:()=>d});var s=r(80442),o=r(70586),i=r(66677);const n={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"};function a(e,t,r){return!!(e&&e.hasOwnProperty(t)?e[t]:r)}function p(e,t,r){return e&&e.hasOwnProperty(t)?e[t]:r}function l(e){const t=e?.supportedSpatialAggregationStatistics?.map((e=>e.toLowerCase()));return{envelope:!!t?.includes("envelopeaggregate"),centroid:!!t?.includes("centroidaggregate"),convexHull:!!t?.includes("convexhullaggregate")}}function u(e,t){const r=e?.supportedOperationsWithCacheHint?.map((e=>e.toLowerCase()));return!!r?.includes(t.toLowerCase())}function d(e,t){return{analytics:c(e),attachment:y(e),data:h(e),metadata:m(e),operations:g(e.capabilities,e,t),query:f(e,t),queryRelated:v(e),queryTopFeatures:_(e),editing:w(e)}}function c(e){return{supportsCacheHint:u(e.advancedQueryCapabilities,"queryAnalytics")}}function y(e){const t=e.attachmentProperties,r={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1,supportsCacheHint:u(e.advancedQueryCapabilities,"queryAttachments"),supportsResize:a(e,"supportsAttachmentsResizing",!1)};return t&&Array.isArray(t)&&t.forEach((e=>{const t=n[e.name];t&&(r[t]=!!e.isEnabled)})),r}function h(e){return{isVersioned:a(e,"isDataVersioned",!1),supportsAttachment:a(e,"hasAttachments",!1),supportsM:a(e,"hasM",!1),supportsZ:a(e,"hasZ",!1)}}function m(e){return{supportsAdvancedFieldProperties:a(e,"supportsFieldDescriptionProperty",!1)}}function g(e,t,r){const s=e?e.toLowerCase().split(",").map((e=>e.trim())):[],n=r?(0,i.Qc)(r):null,p=s.includes((0,o.pC)(n)&&"MapServer"===n.serverType?"data":"query"),l=s.includes("editing")&&!t.datesInUnknownTimezone;let u=l&&s.includes("create"),d=l&&s.includes("delete"),c=l&&s.includes("update");const y=s.includes("changetracking"),h=t.advancedQueryCapabilities;return l&&!(u||d||c)&&(u=d=c=!0),{supportsCalculate:a(t,"supportsCalculate",!1),supportsTruncate:a(t,"supportsTruncate",!1),supportsValidateSql:a(t,"supportsValidateSql",!1),supportsAdd:u,supportsDelete:d,supportsEditing:l,supportsChangeTracking:y,supportsQuery:p,supportsQueryAnalytics:a(h,"supportsQueryAnalytic",!1),supportsQueryAttachments:a(h,"supportsQueryAttachments",!1),supportsQueryTopFeatures:a(h,"supportsTopFeaturesQuery",!1),supportsResizeAttachments:a(t,"supportsAttachmentsResizing",!1),supportsSync:s.includes("sync"),supportsUpdate:c,supportsExceedsLimitStatistics:a(t,"supportsExceedsLimitStatistics",!1)}}function f(e,t){const r=e.advancedQueryCapabilities,o=e.ownershipBasedAccessControlForFeatures,n=e.archivingInfo,d=e.currentVersion,c=t?.includes("MapServer"),y=!c||d>=(0,s.Z)("mapserver-pbf-version-support"),h=(0,i.M8)(t),m=new Set((e.supportedQueryFormats??"").split(",").map((e=>e.toLowerCase().trim())));return{supportsStatistics:a(r,"supportsStatistics",e.supportsStatistics),supportsPercentileStatistics:a(r,"supportsPercentileStatistics",!1),supportsSpatialAggregationStatistics:a(r,"supportsSpatialAggregationStatistics",!1),supportedSpatialAggregationStatistics:l(r),supportsCentroid:a(r,"supportsReturningGeometryCentroid",!1),supportsDistance:a(r,"supportsQueryWithDistance",!1),supportsDistinct:a(r,"supportsDistinct",e.supportsAdvancedQueries),supportsExtent:a(r,"supportsReturningQueryExtent",!1),supportsGeometryProperties:a(r,"supportsReturningGeometryProperties",!1),supportsHavingClause:a(r,"supportsHavingClause",!1),supportsOrderBy:a(r,"supportsOrderBy",e.supportsAdvancedQueries),supportsPagination:a(r,"supportsPagination",!1),supportsQuantization:a(e,"supportsCoordinatesQuantization",!1),supportsQuantizationEditMode:a(e,"supportsQuantizationEditMode",!1),supportsQueryGeometry:a(e,"supportsReturningQueryGeometry",!1),supportsResultType:a(r,"supportsQueryWithResultType",!1),supportsMaxRecordCountFactor:a(r,"supportsMaxRecordCountFactor",!1),supportsSqlExpression:a(r,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:a(e,"useStandardizedQueries",!1),supportsTopFeaturesQuery:a(r,"supportsTopFeaturesQuery",!1),supportsQueryByOthers:a(o,"allowOthersToQuery",!0),supportsHistoricMoment:a(n,"supportsQueryWithHistoricMoment",!1),supportsFormatPBF:y&&m.has("pbf"),supportsDisjointSpatialRelationship:a(r,"supportsDisjointSpatialRel",!1),supportsCacheHint:a(r,"supportsQueryWithCacheHint",!1)||u(r,"query"),supportsDefaultSpatialReference:a(r,"supportsDefaultSR",!1),supportsCompactGeometry:h,supportsFullTextSearch:a(r,"supportsFullTextSearch",!1),maxRecordCountFactor:p(e,"maxRecordCountFactor",void 0),maxRecordCount:p(e,"maxRecordCount",void 0),standardMaxRecordCount:p(e,"standardMaxRecordCount",void 0),tileMaxRecordCount:p(e,"tileMaxRecordCount",void 0)}}function v(e){const t=e.advancedQueryCapabilities,r=a(t,"supportsAdvancedQueryRelated",!1);return{supportsPagination:a(t,"supportsQueryRelatedPagination",!1),supportsCount:r,supportsOrderBy:r,supportsCacheHint:u(t,"queryRelated")}}function _(e){return{supportsCacheHint:u(e.advancedQueryCapabilities,"queryTopFilter")}}function w(e){const t=e.ownershipBasedAccessControlForFeatures;return{supportsGeometryUpdate:a(e,"allowGeometryUpdates",!0),supportsGlobalId:a(e,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:a(e,"supportsReturnServiceEditsInSourceSR",!1),supportsRollbackOnFailure:a(e,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:a(e,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:a(e,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:a(t,"allowAnonymousToDelete",!0),supportsDeleteByOthers:a(t,"allowOthersToDelete",!0),supportsUpdateByAnonymous:a(t,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:a(t,"allowOthersToUpdate",!0)}}},51706:(e,t,r)=>{var s,o;function i(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function n(e){return null!=e&&!isNaN(e)&&isFinite(e)}function a(e){return e.valueExpression?s.Expression:e.field&&"string"==typeof e.field?s.Field:s.Unknown}function p(e,t){const r=t||a(e),i=e.valueUnit||"unknown";return r===s.Unknown?o.Constant:e.stops?o.Stops:null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?o.ClampedLinear:"unknown"===i?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?o.Proportional:o.Additive:o.Identity:o.RealWorldSize}r.d(t,{PS:()=>a,QW:()=>p,RY:()=>s,hL:()=>o,iY:()=>i,qh:()=>n}),function(e){e.Unknown="unknown",e.Expression="expression",e.Field="field"}(s||(s={})),function(e){e.Unknown="unknown",e.Stops="stops",e.ClampedLinear="clamped-linear",e.Proportional="proportional",e.Additive="additive",e.Constant="constant",e.Identity="identity",e.RealWorldSize="real-world-size"}(o||(o={}))},28694:(e,t,r)=>{r.d(t,{p:()=>i});var s=r(70586),o=r(69285);function i(e,t,r){if(!r||!r.features||!r.hasZ)return;const i=(0,o.k)(r.geometryType,t,e.outSpatialReference);if(!(0,s.Wi)(i))for(const e of r.features)i(e.geometry)}},56545:(e,t,r)=>{r.d(t,{Z:()=>c});var s,o=r(43697),i=r(96674),n=r(22974),a=r(5600),p=r(75215),l=r(52011),u=r(30556);let d=s=class extends i.wq{constructor(e){super(e),this.attachmentTypes=null,this.attachmentsWhere=null,this.cacheHint=void 0,this.keywords=null,this.globalIds=null,this.name=null,this.num=null,this.objectIds=null,this.returnMetadata=!1,this.size=null,this.start=null,this.where=null}writeStart(e,t){t.resultOffset=this.start,t.resultRecordCount=this.num||10}clone(){return new s((0,n.d9)({attachmentTypes:this.attachmentTypes,attachmentsWhere:this.attachmentsWhere,cacheHint:this.cacheHint,keywords:this.keywords,where:this.where,globalIds:this.globalIds,name:this.name,num:this.num,objectIds:this.objectIds,returnMetadata:this.returnMetadata,size:this.size,start:this.start}))}};(0,o._)([(0,a.Cb)({type:[String],json:{write:!0}})],d.prototype,"attachmentTypes",void 0),(0,o._)([(0,a.Cb)({type:String,json:{read:{source:"attachmentsDefinitionExpression"},write:{target:"attachmentsDefinitionExpression"}}})],d.prototype,"attachmentsWhere",void 0),(0,o._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],d.prototype,"cacheHint",void 0),(0,o._)([(0,a.Cb)({type:[String],json:{write:!0}})],d.prototype,"keywords",void 0),(0,o._)([(0,a.Cb)({type:[Number],json:{write:!0}})],d.prototype,"globalIds",void 0),(0,o._)([(0,a.Cb)({json:{write:!0}})],d.prototype,"name",void 0),(0,o._)([(0,a.Cb)({type:Number,json:{read:{source:"resultRecordCount"}}})],d.prototype,"num",void 0),(0,o._)([(0,a.Cb)({type:[Number],json:{write:!0}})],d.prototype,"objectIds",void 0),(0,o._)([(0,a.Cb)({type:Boolean,json:{default:!1,write:!0}})],d.prototype,"returnMetadata",void 0),(0,o._)([(0,a.Cb)({type:[Number],json:{write:!0}})],d.prototype,"size",void 0),(0,o._)([(0,a.Cb)({type:Number,json:{read:{source:"resultOffset"}}})],d.prototype,"start",void 0),(0,o._)([(0,u.c)("start"),(0,u.c)("num")],d.prototype,"writeStart",null),(0,o._)([(0,a.Cb)({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],d.prototype,"where",void 0),d=s=(0,o._)([(0,l.j)("esri.rest.support.AttachmentQuery")],d),d.from=(0,p.se)(d);const c=d},74889:(e,t,r)=>{r.d(t,{Z:()=>w});var s,o=r(43697),i=r(66577),n=r(38171),a=r(35454),p=r(96674),l=r(22974),u=r(70586),d=r(5600),c=(r(75215),r(71715)),y=r(52011),h=r(30556),m=r(82971),g=r(33955),f=r(1231);const v=new a.X({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let _=s=class extends p.wq{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){const r=m.Z.fromJSON(t.spatialReference),s=[];for(let t=0;t<e.length;t++){const o=e[t],i=n.Z.fromJSON(o),a=o.geometry&&o.geometry.spatialReference;(0,u.pC)(i.geometry)&&!a&&(i.geometry.spatialReference=r);const p=o.aggregateGeometries,l=i.aggregateGeometries;if(p&&(0,u.pC)(l))for(const e in l){const t=l[e],s=p[e]?.spatialReference;(0,u.pC)(t)&&!s&&(t.spatialReference=r)}s.push(i)}return s}writeGeometryType(e,t,r,s){if(e)return void v.write(e,t,r,s);const{features:o}=this;if(o)for(const e of o)if(e&&(0,u.pC)(e.geometry))return void v.write(e.geometry.type,t,r,s)}readQueryGeometry(e,t){if(!e)return null;const r=!!e.spatialReference,s=(0,g.im)(e);return s&&!r&&t.spatialReference&&(s.spatialReference=m.Z.fromJSON(t.spatialReference)),s}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:r}=this;if(r)for(const e of r)if(e&&(0,u.pC)(e.geometry)&&e.geometry.spatialReference)return void(t.spatialReference=e.geometry.spatialReference.toJSON())}clone(){return new s(this.cloneProperties())}cloneProperties(){return(0,l.d9)({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(e){const t=this.write();if(t.features&&Array.isArray(e)&&e.length>0)for(let r=0;r<t.features.length;r++){const s=t.features[r];if(s.geometry){const t=e&&e[r];s.geometry=t&&t.toJSON()||s.geometry}}return t}quantize(e){const{scale:[t,r],translate:[s,o]}=e,i=this.features,n=this._getQuantizationFunction(this.geometryType,(e=>Math.round((e-s)/t)),(e=>Math.round((o-e)/r)));for(let e=0,t=i.length;e<t;e++)n?.((0,u.Wg)(i[e].geometry))||(i.splice(e,1),e--,t--);return this.transform=e,this}unquantize(){const{geometryType:e,features:t,transform:r}=this;if(!r)return this;const{translate:[s,o],scale:[i,n]}=r,a=this._getHydrationFunction(e,(e=>e*i+s),(e=>o-e*n));for(const{geometry:e}of t)(0,u.pC)(e)&&a&&a(e);return this.transform=null,this}_quantizePoints(e,t,r){let s,o;const i=[];for(let n=0,a=e.length;n<a;n++){const a=e[n];if(n>0){const e=t(a[0]),n=r(a[1]);e===s&&n===o||(i.push([e-s,n-o]),s=e,o=n)}else s=t(a[0]),o=r(a[1]),i.push([s,o])}return i.length>0?i:null}_getQuantizationFunction(e,t,r){return"point"===e?e=>(e.x=t(e.x),e.y=r(e.y),e):"polyline"===e||"polygon"===e?e=>{const s=(0,g.oU)(e)?e.rings:e.paths,o=[];for(let e=0,i=s.length;e<i;e++){const i=s[e],n=this._quantizePoints(i,t,r);n&&o.push(n)}return o.length>0?((0,g.oU)(e)?e.rings=o:e.paths=o,e):null}:"multipoint"===e?e=>{const s=this._quantizePoints(e.points,t,r);return s&&s.length>0?(e.points=s,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,r){return"point"===e?e=>{e.x=t(e.x),e.y=r(e.y)}:"polyline"===e||"polygon"===e?e=>{const s=(0,g.oU)(e)?e.rings:e.paths;let o,i;for(let e=0,n=s.length;e<n;e++){const n=s[e];for(let e=0,s=n.length;e<s;e++){const s=n[e];e>0?(o+=s[0],i+=s[1]):(o=s[0],i=s[1]),s[0]=t(o),s[1]=r(i)}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax)}:"multipoint"===e?e=>{const s=e.points;let o,i;for(let e=0,n=s.length;e<n;e++){const n=s[e];e>0?(o+=n[0],i+=n[1]):(o=n[0],i=n[1]),n[0]=t(o),n[1]=r(i)}}:null}};(0,o._)([(0,d.Cb)({type:String,json:{write:!0}})],_.prototype,"displayFieldName",void 0),(0,o._)([(0,d.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],_.prototype,"exceededTransferLimit",void 0),(0,o._)([(0,d.Cb)({type:[n.Z],json:{write:!0}})],_.prototype,"features",void 0),(0,o._)([(0,c.r)("features")],_.prototype,"readFeatures",null),(0,o._)([(0,d.Cb)({type:[f.Z],json:{write:!0}})],_.prototype,"fields",void 0),(0,o._)([(0,d.Cb)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:v.read}}})],_.prototype,"geometryType",void 0),(0,o._)([(0,h.c)("geometryType")],_.prototype,"writeGeometryType",null),(0,o._)([(0,d.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],_.prototype,"hasM",void 0),(0,o._)([(0,d.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],_.prototype,"hasZ",void 0),(0,o._)([(0,d.Cb)({types:i.qM,json:{write:!0}})],_.prototype,"queryGeometry",void 0),(0,o._)([(0,c.r)("queryGeometry")],_.prototype,"readQueryGeometry",null),(0,o._)([(0,d.Cb)({type:m.Z,json:{write:!0}})],_.prototype,"spatialReference",void 0),(0,o._)([(0,h.c)("spatialReference")],_.prototype,"writeSpatialReference",null),(0,o._)([(0,d.Cb)({json:{write:!0}})],_.prototype,"transform",void 0),_=s=(0,o._)([(0,y.j)("esri.rest.support.FeatureSet")],_),_.prototype.toJSON.isDefaultToJSON=!0;const w=_},58333:(e,t,r)=>{r.d(t,{ET:()=>i,I4:()=>o,eG:()=>p,lF:()=>n,lj:()=>u,qP:()=>a,wW:()=>l});const s=[252,146,31,255],o={type:"esriSMS",style:"esriSMSCircle",size:6,color:s,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},i={type:"esriSLS",style:"esriSLSSolid",width:.75,color:s},n={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},a={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},p={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},l={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},u={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}}}]);