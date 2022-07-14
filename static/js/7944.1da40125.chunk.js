"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[7944],{60480:(t,e,r)=>{r.d(e,{g:()=>s});const s={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},37944:(t,e,r)=>{r.r(e),r.d(e,{default:()=>gt});var s=r(27366),n=(r(59486),r(52639)),o=r(76200),a=r(62044),i=r(10064),u=r(93169),l=r(43404),d=r(54472),c=r(92026),p=r(18202),h=r(66978),y=r(35995),f=r(49861),m=(r(63780),r(25243),r(69912)),g=r(53866),b=r(77981),F=r(63543),O=r(64020),S=r(77946),R=r(23084),I=r(41644),_=r(93501),q=r(83406);function C(t,e){return e}function x(t,e,r,s){switch(r){case 0:return T(t,e+s,0);case 1:return"lowerLeft"===t.originPosition?T(t,e+s,1):function(t,e,r){let{translate:s,scale:n}=t;return s[r]-e*n[r]}(t,e+s,1)}}function v(t,e,r,s){return 2===r?T(t,e,2):x(t,e,r,s)}function w(t,e,r,s){return 2===r?T(t,e,3):x(t,e,r,s)}function j(t,e,r,s){return 3===r?T(t,e,3):v(t,e,r,s)}function T(t,e,r){let{translate:s,scale:n}=t;return s[r]+e*n[r]}class E{constructor(t){this.options=t,this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=C,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this._attributesConstructor=()=>{}}createFeatureResult(){return{fields:[],features:[]}}finishFeatureResult(t){if(this.options.applyTransform&&(t.transform=null),this._attributesConstructor=()=>{},this.coordinateBuffer=null,this.lengths.length=0,!t.hasZ)return;const e=(0,_.k)(t.geometryType,this.options.sourceSpatialReference,t.spatialReference);if(!(0,c.Wi)(e))for(const r of t.features)e(r.geometry)}createSpatialReference(){return{}}addField(t,e){t.fields.push(e);const r=t.fields.map((t=>t.name));this._attributesConstructor=function(){for(const t of r)this[t]=null}}addFeature(t,e){t.features.push(e)}prepareFeatures(t){switch(this.transform=t.transform,this.options.applyTransform&&t.transform&&(this.applyTransform=this._deriveApplyTransform(t)),this.vertexDimension=2,t.hasZ&&this.vertexDimension++,t.hasM&&this.vertexDimension++,t.geometryType){case"esriGeometryPoint":this.addCoordinate=(t,e,r)=>this.addCoordinatePoint(t,e,r),this.createGeometry=t=>this.createPointGeometry(t);break;case"esriGeometryPolygon":this.addCoordinate=(t,e,r)=>this._addCoordinatePolygon(t,e,r),this.createGeometry=t=>this._createPolygonGeometry(t);break;case"esriGeometryPolyline":this.addCoordinate=(t,e,r)=>this._addCoordinatePolyline(t,e,r),this.createGeometry=t=>this._createPolylineGeometry(t);break;case"esriGeometryMultipoint":this.addCoordinate=(t,e,r)=>this._addCoordinateMultipoint(t,e,r),this.createGeometry=t=>this._createMultipointGeometry(t);break;default:(0,I.Bg)(t.geometryType)}}createFeature(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,{attributes:new this._attributesConstructor}}allocateCoordinates(){}addLength(t,e,r){0===this.lengths.length&&(this.toAddInCurrentPath=e),this.lengths.push(e)}addQueryGeometry(t,e){const{queryGeometry:r,queryGeometryType:s}=e,n=(0,q.$g)(r.clone(),r,!1,!1,this.transform),o=(0,q.di)(n,s,!1,!1);t.queryGeometryType=s,t.queryGeometry={...o}}createPointGeometry(t){const e={x:0,y:0,spatialReference:t.spatialReference};return t.hasZ&&(e.z=0),t.hasM&&(e.m=0),e}addCoordinatePoint(t,e,r){switch(e=this.applyTransform(this.transform,e,r,0),r){case 0:t.x=e;break;case 1:t.y=e;break;case 2:"z"in t?t.z=e:t.m=e;break;case 3:t.m=e}}_transformPathLikeValue(t,e){let r=0;return e<=1&&(r=this.previousCoordinate[e],this.previousCoordinate[e]+=t),this.applyTransform(this.transform,t,e,r)}_addCoordinatePolyline(t,e,r){this._dehydratedAddPointsCoordinate(t.paths,e,r)}_addCoordinatePolygon(t,e,r){this._dehydratedAddPointsCoordinate(t.rings,e,r)}_addCoordinateMultipoint(t,e,r){0===r&&t.points.push([]);const s=this._transformPathLikeValue(e,r);t.points[t.points.length-1].push(s)}_createPolygonGeometry(t){return{rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createPolylineGeometry(t){return{paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createMultipointGeometry(t){return{points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_dehydratedAddPointsCoordinate(t,e,r){0===r&&0==this.toAddInCurrentPath--&&(t.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);const s=this._transformPathLikeValue(e,r),n=t[t.length-1];0===r&&(this.coordinateBufferPtr=0,this.coordinateBuffer=new Array(this.vertexDimension),n.push(this.coordinateBuffer)),this.coordinateBuffer[this.coordinateBufferPtr++]=s}_deriveApplyTransform(t){const{hasZ:e,hasM:r}=t;return e&&r?j:e?v:r?w:x}}var D=r(5192),A=r(49818),N=r(21149);async function P(t,e,r){const s=(0,R.en)(t),n={...r},o=N.Z.from(e),a=!o.quantizationParameters,{data:i}=await(0,D.executeQueryPBF)(s,o,new E({sourceSpatialReference:o.sourceSpatialReference,applyTransform:a}),n);return i}var G=r(19545),J=r(22585),k=r(11812);function Z(t){const e=t.toJSON();return e.attachmentTypes&&(e.attachmentTypes=e.attachmentTypes.join(",")),e.keywords&&(e.keywords=e.keywords.join(",")),e.globalIds&&(e.globalIds=e.globalIds.join(",")),e.objectIds&&(e.objectIds=e.objectIds.join(",")),e.size&&(e.size=e.size.join(",")),e}function Q(t,e){const r={};for(const s of t){const{parentObjectId:t,parentGlobalId:n,attachmentInfos:o}=s;for(const s of o){const{id:o}=s,a=(0,y.qg)((0,G.Dp)(`${e}/${t}/attachments/${o}`)),i=k.Z.fromJSON(s);i.set({url:a,parentObjectId:t,parentGlobalId:n}),r[t]?r[t].push(i):r[t]=[i]}}return r}var M=r(99837);async function z(t,e,r){const s=(0,R.en)(t);return function(t,e,r){let s={query:(0,J.A)({...t.query,f:"json",...Z(e)})};return r&&(s={...r,...s,query:{...r.query,...s.query}}),(0,o.default)(t.path+"/queryAttachments",s)}(s,M.Z.from(e),{...r}).then((t=>Q(t.data.attachmentGroups,s.path)))}var B=r(34211);var U=r(24246);function V(t,e){const r=t.toJSON();return r.objectIds&&(r.objectIds=r.objectIds.join(",")),r.orderByFields&&(r.orderByFields=r.orderByFields.join(",")),r.outFields&&!e?.returnCountOnly?r.outFields.includes("*")?r.outFields="*":r.outFields=r.outFields.join(","):delete r.outFields,r.outSpatialReference&&(r.outSR=r.outSR.wkid||JSON.stringify(r.outSR.toJSON()),delete r.outSpatialReference),r.dynamicDataSource&&(r.layer=JSON.stringify({source:r.dynamicDataSource}),delete r.dynamicDataSource),r}async function L(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=arguments.length>3?arguments[3]:void 0;const n=(0,J.A)({...t.query,f:"json",...s,...V(e,s)});return(0,o.default)(t.path+"/queryRelatedRecords",{...r,query:{...r.query,...n}})}var $=r(99086);async function H(t,e,r){e=$.Z.from(e);return async function(t,e,r){const s=await L(t,e,r),n=s.data,o=n.geometryType,a=n.spatialReference,i={};for(const u of n.relatedRecordGroups){const t={fields:void 0,objectIdFieldName:void 0,geometryType:o,spatialReference:a,hasZ:!!n.hasZ,hasM:!!n.hasM,features:u.relatedRecords};if(null!=u.objectId)i[u.objectId]=t;else for(const e in u)u.hasOwnProperty(e)&&"relatedRecords"!==e&&(i[u[e]]=t)}return{...s,data:i}}((0,R.en)(t),e,r).then((t=>{const e=t.data,r={};return Object.keys(e).forEach((t=>r[t]=A.default.fromJSON(e[t]))),r}))}async function W(t,e,r){e=$.Z.from(e);return async function(t,e,r){const s=await L(t,e,r,{returnCountOnly:!0}),n=s.data,o={};for(const a of n.relatedRecordGroups)null!=a.objectId&&(o[a.objectId]=a.count);return{...s,data:o}}((0,R.en)(t),e,{...r}).then((t=>t.data))}var X=r(50689),Y=r(68620);const K="Layer does not support extent calculation.";function tt(t,e){const r=t.geometry,s=t.toJSON(),n=s;if((0,c.pC)(r)&&(n.geometry=JSON.stringify(r),n.geometryType=(0,b.Ji)(r),n.inSR=r.spatialReference.wkid||JSON.stringify(r.spatialReference)),s.topFilter?.groupByFields&&(n.topFilter.groupByFields=s.topFilter.groupByFields.join(",")),s.topFilter?.orderByFields&&(n.topFilter.orderByFields=s.topFilter.orderByFields.join(",")),s.topFilter&&(n.topFilter=JSON.stringify(n.topFilter)),s.objectIds&&(n.objectIds=s.objectIds.join(",")),s.orderByFields&&(n.orderByFields=s.orderByFields.join(",")),s.outFields&&!(e?.returnCountOnly||e?.returnExtentOnly||e?.returnIdsOnly)?s.outFields.includes("*")?n.outFields="*":n.outFields=s.outFields.join(","):delete n.outFields,s.outSR?n.outSR=s.outSR.wkid||JSON.stringify(s.outSR):r&&s.returnGeometry&&(n.outSR=n.inSR),s.returnGeometry&&delete s.returnGeometry,s.timeExtent){const t=s.timeExtent,{start:e,end:r}=t;null==e&&null==r||(n.time=e===r?e:`${null==e?"null":e},${null==r?"null":r}`),delete s.timeExtent}return n}function et(t,e,r){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};const a="string"==typeof t?(0,y.mN)(t):t,i=e.geometry?[e.geometry]:[];return s.responseType="pbf"===r?"array-buffer":"json",(0,X.aX)(i,null,s).then((t=>{const i=t&&t[0];(0,c.pC)(i)&&((e=e.clone()).geometry=i);const u=(0,J.A)({...a.query,f:r,...n,...tt(e,n)});return(0,o.default)((0,y.v_)(a.path,"queryTopFeatures"),{...s,query:{...u,...s.query}})}))}var rt=r(54307);async function st(t,e,r,s){const n=(0,R.en)(t),o={...s},{data:a}=await async function(t,e,r,s){const n=await et(t,e,"json",s);return(0,Y.p)(e,r,n.data),n}(n,rt.Z.from(e),r,o);return A.default.fromJSON(a)}async function nt(t,e,r){const s=(0,R.en)(t);return(await async function(t,e,r){return(0,c.pC)(e.timeExtent)&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:et(t,e,"json",r,{returnIdsOnly:!0})}(s,rt.Z.from(e),{...r})).data.objectIds}async function ot(t,e,r){const s=(0,R.en)(t),n=await async function(t,e,r){return(0,c.pC)(e.timeExtent)&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:et(t,e,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(K);if(e.hasOwnProperty("count"))throw new Error(K);return t}))}(s,rt.Z.from(e),{...r});return{count:n.data.count,extent:g.Z.fromJSON(n.data.extent)}}async function at(t,e,r){const s=(0,R.en)(t);return(await function(t,e,r){return(0,c.pC)(e.timeExtent)&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):et(t,e,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}(s,rt.Z.from(e),{...r})).data.count}var it=r(85015);let ut=class extends it.Z{constructor(){super(...arguments),this.requestOptions=null,this.url=null}normalizeCtorArgs(t,e){return"string"!=typeof t?t:{url:t,...e}}get parsedUrl(){return this._parseUrl(this.url)}_parseUrl(t){return t?(0,y.mN)(t):null}_encode(t,e,r){const s={};for(const n in t){if("declaredClass"===n)continue;const o=t[n];if(null!=o&&"function"!=typeof o)if(Array.isArray(o)){s[n]=[];for(let t=0;t<o.length;t++)s[n][t]=this._encode(o[t])}else if("object"==typeof o)if(o.toJSON){const t=o.toJSON(r&&r[n]);s[n]=e?t:JSON.stringify(t)}else s[n]=e?o:JSON.stringify(o);else s[n]=o}return s}};(0,s._)([(0,f.Cb)({readOnly:!0})],ut.prototype,"parsedUrl",null),(0,s._)([(0,f.Cb)()],ut.prototype,"requestOptions",void 0),(0,s._)([(0,f.Cb)({type:String})],ut.prototype,"url",void 0),ut=(0,s._)([(0,m.j)("esri.tasks.Task")],ut);const lt=ut;let dt=class extends lt{constructor(t){super(t),this.dynamicDataSource=null,this.fieldsIndex=null,this.format="json",this.gdbVersion=null,this.infoFor3D=null,this.sourceSpatialReference=null}execute(t,e){return this.executeJSON(t,e).then((r=>this.featureSetFromJSON(t,r,e)))}async executeJSON(t,e){const r={...this.requestOptions,...e},s=this._normalizeQuery(t),n=null!=t.outStatistics?.[0],o=(0,u.Z)("featurelayer-pbf-statistics"),a=!n||o;let i;if("pbf"===this.format&&a)try{i=await P(this.url,s,r)}catch(l){if("query:parsing-pbf"!==l.name)throw l;this.format="json"}return"json"!==this.format&&a||(i=await(0,S.F)(this.url,s,r)),this._normalizeFields(i.fields),i}async featureSetFromJSON(t,e,s){if(!this._queryIs3DObjectFormat(t)||(0,c.Wi)(this.infoFor3D)||!e.features||!e.features.length)return A.default.fromJSON(e);const{meshFeatureSetFromJSON:n}=await(0,h.Hl)(Promise.all([r.e(9803),r.e(5158),r.e(6333),r.e(7648),r.e(2002)]).then(r.bind(r,52002)),s);return n(t,this.infoFor3D,e)}executeForCount(t,e){const r={...this.requestOptions,...e},s=this._normalizeQuery(t);return(0,B.P)(this.url,s,r)}executeForExtent(t,e){const r={...this.requestOptions,...e},s=this._normalizeQuery(t);return async function(t,e,r){const s=(0,R.en)(t);return(0,D.executeQueryForExtent)(s,N.Z.from(e),{...r}).then((t=>({count:t.data.count,extent:g.Z.fromJSON(t.data.extent)})))}(this.url,s,r)}executeForIds(t,e){const r={...this.requestOptions,...e},s=this._normalizeQuery(t);return(0,U.G)(this.url,s,r)}executeRelationshipQuery(t,e){t=$.Z.from(t);const r={...this.requestOptions,...e};return(this.gdbVersion||this.dynamicDataSource)&&((t=t.clone()).gdbVersion=t.gdbVersion||this.gdbVersion,t.dynamicDataSource=t.dynamicDataSource||this.dynamicDataSource),H(this.url,t,r)}executeRelationshipQueryForCount(t,e){t=$.Z.from(t);const r={...this.requestOptions,...e};return(this.gdbVersion||this.dynamicDataSource)&&((t=t.clone()).gdbVersion=t.gdbVersion||this.gdbVersion,t.dynamicDataSource=t.dynamicDataSource||this.dynamicDataSource),W(this.url,t,r)}executeAttachmentQuery(t,e){const r={...this.requestOptions,...e};return z(this.url,t,r)}executeTopFeaturesQuery(t,e){const r={...this.requestOptions,...e};return st(this.parsedUrl,t,this.sourceSpatialReference,r)}executeForTopIds(t,e){const r={...this.requestOptions,...e};return nt(this.parsedUrl,t,r)}executeForTopExtents(t,e){const r={...this.requestOptions,...e};return ot(this.parsedUrl,t,r)}executeForTopCount(t,e){const r={...this.requestOptions,...e};return at(this.parsedUrl,t,r)}_normalizeQuery(t){let e=N.Z.from(t);if(e.sourceSpatialReference=e.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(e=e===t?e.clone():e,e.gdbVersion=t.gdbVersion||this.gdbVersion,e.dynamicDataSource=t.dynamicDataSource?O.n.from(t.dynamicDataSource):this.dynamicDataSource),(0,c.pC)(this.infoFor3D)&&this._queryIs3DObjectFormat(t)){e=e===t?e.clone():e,e.formatOf3DObjects=null;for(const t of this.infoFor3D.queryFormats){if("3D_glb"===t.id){e.formatOf3DObjects=t.id;break}"3D_gltf"!==t.id||e.formatOf3DObjects||(e.formatOf3DObjects=t.id)}if(!e.formatOf3DObjects)throw new i.Z("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if((0,c.Wi)(e.outFields)||!e.outFields.includes("*")){e=e===t?e.clone():e,(0,c.Wi)(e.outFields)&&(e.outFields=[]);const{originX:r,originY:s,originZ:n,translationX:o,translationY:a,translationZ:i,scaleX:u,scaleY:l,scaleZ:d,rotationX:p,rotationY:h,rotationZ:y,rotationDeg:f}=this.infoFor3D.transformFieldRoles;e.outFields.push(r,s,n,o,a,i,u,l,d,p,h,y,f)}}return e}_normalizeFields(t){if((0,c.pC)(this.fieldsIndex)&&(0,c.pC)(t))for(const e of t){const t=this.fieldsIndex.get(e.name);t&&Object.assign(e,t.toJSON())}}_queryIs3DObjectFormat(t){return(0,c.pC)(this.infoFor3D)&&t.returnGeometry&&"xyFootprint"!==t.multipatchOption&&!t.outStatistics}};(0,s._)([(0,f.Cb)({type:O.n})],dt.prototype,"dynamicDataSource",void 0),(0,s._)([(0,f.Cb)()],dt.prototype,"fieldsIndex",void 0),(0,s._)([(0,f.Cb)()],dt.prototype,"format",void 0),(0,s._)([(0,f.Cb)()],dt.prototype,"gdbVersion",void 0),(0,s._)([(0,f.Cb)()],dt.prototype,"infoFor3D",void 0),(0,s._)([(0,f.Cb)()],dt.prototype,"sourceSpatialReference",void 0),dt=(0,s._)([(0,m.j)("esri.tasks.QueryTask")],dt);const ct=dt;var pt=r(62204),ht=r(78952);const yt=new l.X({originalAndCurrentFeatures:"original-and-current-features",none:"none"});const ft=new Set(["Feature Layer","Table"]);let mt=class extends d.Z{constructor(){super(...arguments),this.type="feature-layer",this.refresh=(0,h.Ds)((async()=>{await this.load();const t=this.sourceJSON.editingInfo?.lastEditDate;if(null==t)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const e=t!==this.sourceJSON.editingInfo?.lastEditDate;return{dataChanged:e,updates:e?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}}))}load(t){const e=(0,c.pC)(t)?t.signal:null;return this.addResolvingPromise(this._fetchService(this.layer.sourceJSON,e)),Promise.resolve(this)}get queryTask(){const{capabilities:{query:{supportsFormatPBF:t}},parsedUrl:e,dynamicDataSource:r,infoFor3D:s,gdbVersion:n,spatialReference:o,fieldsIndex:a}=this.layer,i=(0,u.Z)("featurelayer-pbf")&&t&&(0,c.Wi)(s)?"pbf":"json";return new ct({url:e.path,format:i,fieldsIndex:a,infoFor3D:s,dynamicDataSource:r,gdbVersion:n,sourceSpatialReference:o})}async addAttachment(t,e){await this.load();const r=t.attributes[this.layer.objectIdField],s=this.layer.parsedUrl.path+"/"+r+"/addAttachment",n=this._getLayerRequestOptions(),a=this._getFormDataForAttachment(e,n.query);try{const t=await(0,o.default)(s,{body:a});return this._createFeatureEditResult(t.data.addAttachmentResult)}catch(x){throw this._createAttachmentErrorResult(r,x)}}async updateAttachment(t,e,r){await this.load();const s=t.attributes[this.layer.objectIdField],n=this.layer.parsedUrl.path+"/"+s+"/updateAttachment",a=this._getLayerRequestOptions({query:{attachmentId:e}}),i=this._getFormDataForAttachment(r,a.query);try{const t=await(0,o.default)(n,{body:i});return this._createFeatureEditResult(t.data.updateAttachmentResult)}catch(j){throw this._createAttachmentErrorResult(s,j)}}async applyEdits(t,e){await this.load();const r=t.addFeatures.map(this._serializeFeature,this),s=t.updateFeatures.map(this._serializeFeature,this),n=this._getFeatureIds(t.deleteFeatures,e?.globalIdUsed);(0,pt.P)(r,s,this.layer.spatialReference);const a=[],i=[],u=[...t.deleteAttachments];for(const o of t.addAttachments)a.push(await this._serializeAttachment(o));for(const o of t.updateAttachments)i.push(await this._serializeAttachment(o));const l=a.length||i.length||u.length?{adds:a,updates:i,deletes:u}:null,d={gdbVersion:e?.gdbVersion||this.layer.gdbVersion,rollbackOnFailure:e?.rollbackOnFailureEnabled,useGlobalIds:e?.globalIdUsed,returnEditMoment:e?.returnEditMoment,usePreviousEditMoment:e?.usePreviousEditMoment,sessionId:e?.sessionId};e?.returnServiceEditsOption?(d.edits=JSON.stringify([{id:this.layer.layerId,adds:r,updates:s,deletes:n,attachments:l}]),d.returnServiceEditsOption=yt.toJSON(e?.returnServiceEditsOption),d.returnServiceEditsInSourceSR=e?.returnServiceEditsInSourceSR):(d.adds=r.length?JSON.stringify(r):null,d.updates=s.length?JSON.stringify(s):null,d.deletes=n.length?e?.globalIdUsed?JSON.stringify(n):n.join(","):null,d.attachments=l&&JSON.stringify(l));const c=this._getLayerRequestOptions({method:"post",query:d}),p=e?.returnServiceEditsOption?this.layer.url:this.layer.parsedUrl.path,h=await(0,o.default)(p+"/applyEdits",c);return this._createEditsResult(h)}async deleteAttachments(t,e){await this.load();const r=t.attributes[this.layer.objectIdField],s=this.layer.parsedUrl.path+"/"+r+"/deleteAttachments";try{return(await(0,o.default)(s,this._getLayerRequestOptions({query:{attachmentIds:e.join(",")},method:"post"}))).data.deleteAttachmentResults.map(this._createFeatureEditResult)}catch(C){throw this._createAttachmentErrorResult(r,C)}}fetchRecomputedExtents(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=t.signal;return this.load({signal:e}).then((async()=>{const e=this._getLayerRequestOptions({...t,query:{returnUpdates:!0}}),{layerId:r,url:s}=this.layer,{data:n}=await(0,o.default)(`${s}/${r}`,e),{id:i,extent:u,fullExtent:l,timeExtent:d}=n,c=u||l;return{id:i,fullExtent:c&&g.Z.fromJSON(c),timeExtent:d&&a.Z.fromJSON({start:d[0],end:d[1]})}}))}async queryAttachments(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{parsedUrl:r}=this.layer,s=r.path;await this.load();const n=this._getLayerRequestOptions(e);if(!this.layer.get("capabilities.operations.supportsQueryAttachments")){const{objectIds:e}=t,r=[];for(const t of e){const e=s+"/"+t+"/attachments";r.push((0,o.default)(e,n))}return Promise.all(r).then((t=>e.map(((e,r)=>({parentObjectId:e,attachmentInfos:t[r].data.attachmentInfos}))))).then((t=>Q(t,s)))}return this.queryTask.executeAttachmentQuery(t,n)}async queryFeatures(t,e){return await this.load(),this.queryTask.execute(t,{...e,query:this._createRequestQueryOptions(e)})}async queryFeaturesJSON(t,e){return await this.load(),this.queryTask.executeJSON(t,{...e,query:this._createRequestQueryOptions(e)})}async queryObjectIds(t,e){return await this.load(),this.queryTask.executeForIds(t,{...e,query:this._createRequestQueryOptions(e)})}async queryFeatureCount(t,e){return await this.load(),this.queryTask.executeForCount(t,{...e,query:this._createRequestQueryOptions(e)})}async queryExtent(t,e){return await this.load(),this.queryTask.executeForExtent(t,{...e,query:this._createRequestQueryOptions(e)})}async queryRelatedFeatures(t,e){return await this.load(),this.queryTask.executeRelationshipQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryRelatedFeaturesCount(t,e){return await this.load(),this.queryTask.executeRelationshipQueryForCount(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopFeatures(t,e){return await this.load(),this.queryTask.executeTopFeaturesQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopObjectIds(t,e){return await this.load(),this.queryTask.executeForTopIds(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopExtents(t,e){return await this.load(),this.queryTask.executeForTopExtents(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopCount(t,e){return await this.load(),this.queryTask.executeForTopCount(t,{...e,query:this._createRequestQueryOptions(e)})}_createRequestQueryOptions(t){const e={...this.layer.customParameters,token:this.layer.apiKey,...t?.query};return this.layer.datesInUnknownTimezone&&(e.timeReferenceUnknownClient=!0),e}async _fetchService(t,e){if(!t){const{data:r}=await(0,o.default)(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:(0,u.Z)("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:e}));t=r}this.sourceJSON=this._patchServiceJSON(t);const r=t.type;if(!ft.has(r))throw new i.Z("feature-layer-source:unsupported-type",`Source type "${r}" is not supported`)}_patchServiceJSON(t){if("Table"!==t.type&&t.geometryType&&!t?.drawingInfo?.renderer&&!t.defaultSymbol){const e=(0,F.bU)(t.geometryType).renderer;(0,p.RB)("drawingInfo.renderer",e,t)}return"esriGeometryMultiPatch"===t.geometryType&&t.infoFor3D&&(t.geometryType="mesh"),t}_serializeFeature(t){const{geometry:e,attributes:r}=t;return(0,c.Wi)(e)?{attributes:r}:"mesh"===e.type||"extent"===e.type?null:{geometry:e.toJSON(),attributes:r}}async _serializeAttachment(t){const{feature:e,attachment:r}=t,{globalId:s,name:n,contentType:o,data:a,uploadId:i}=r,u={globalId:s,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null};if(e&&(u.parentGlobalId="attributes"in e?e.attributes&&e.attributes[this.layer.globalIdField]:e.globalId),i)u.uploadId=i;else if(a){const t=await async function(t){if("string"==typeof t)return(0,y.sJ)(t)||{data:t};return new Promise(((e,r)=>{const s=new FileReader;s.readAsDataURL(t),s.onload=()=>e((0,y.sJ)(s.result)),s.onerror=t=>r(t)}))}(a);u.contentType=t.mediaType,u.data=t.data,a instanceof File&&(u.name=a.name)}return n&&(u.name=n),o&&(u.contentType=o),u}_getFeatureIds(t,e){const r=t[0];return r?this._canUseGlobalIds(e,t)?this._getGlobalIdsFromFeatureIdentifier(t):"objectId"in r?this._getObjectIdsFromFeatureIdentifier(t):this._getIdsFromFeatures(t):[]}_getIdsFromFeatures(t){const e=this.layer.objectIdField;return t.map((t=>t.attributes&&t.attributes[e]))}_canUseGlobalIds(t,e){return t&&"globalId"in e[0]}_getObjectIdsFromFeatureIdentifier(t){return t.map((t=>t.objectId))}_getGlobalIdsFromFeatureIdentifier(t){return t.map((t=>t.globalId))}_createEditsResult(t){const e=t.data,{layerId:r}=this.layer,s=[];let n=null;if(Array.isArray(e))for(const i of e)s.push({id:i.id,editedFeatures:i.editedFeatures}),i.id===r&&(n={addResults:i.addResults,updateResults:i.updateResults,deleteResults:i.deleteResults,attachments:i.attachments,editMoment:i.editMoment});else n=e;const o=n?.attachments,a={addFeatureResults:n.addResults?n.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:n.updateResults?n.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:n.deleteResults?n.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:o&&o.addResults?o.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:o&&o.updateResults?o.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:o&&o.deleteResults?o.deleteResults.map(this._createFeatureEditResult,this):[]};if(n.editMoment&&(a.editMoment=n.editMoment),s.length>0){a.editedFeatureResults=[];for(const t of s){const{adds:e,updates:r,deletes:s,spatialReference:n}=t.editedFeatures,o=n?new ht.Z(n):null;a.editedFeatureResults.push({layerId:t.id,editedFeatures:{adds:e?.map((t=>this._createEditedFeature(t,o)))||[],updates:r?.map((t=>({original:this._createEditedFeature(t[0],o),current:this._createEditedFeature(t[1],o)})))||[],deletes:s?.map((t=>this._createEditedFeature(t,o)))||[],spatialReference:o}})}}return a}_createEditedFeature(t,e){return new n.Z({attributes:t.attributes,geometry:(0,b.im)({...t.geometry,spatialReference:e})})}_createFeatureEditResult(t){const e=!0===t.success?null:t.error||{code:void 0,description:void 0};return{objectId:t.objectId,globalId:t.globalId,error:e?new i.Z("feature-layer-source:edit-failure",e.description,{code:e.code}):null}}_createAttachmentErrorResult(t,e){const r=e.details.messages&&e.details.messages[0]||e.message,s=e.details.httpStatus||e.details.messageCode;return{objectId:t,globalId:null,error:new i.Z("feature-layer-source:attachment-failure",r,{code:s})}}_getFormDataForAttachment(t,e){const r=t instanceof FormData?t:t&&t.elements?new FormData(t):null;if(r)for(const s in e){const t=e[s];null!=t&&(r.set?r.set(s,t):r.append(s,t))}return r}_getLayerRequestOptions(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{parsedUrl:e,gdbVersion:r,dynamicDataSource:s}=this.layer;return{...t,query:{gdbVersion:r,layer:s?JSON.stringify({source:s}):void 0,...e.query,f:"json",...this._createRequestQueryOptions(t)},responseType:"json"}}};(0,s._)([(0,f.Cb)()],mt.prototype,"type",void 0),(0,s._)([(0,f.Cb)({constructOnly:!0})],mt.prototype,"layer",void 0),(0,s._)([(0,f.Cb)({readOnly:!0})],mt.prototype,"queryTask",null),mt=(0,s._)([(0,m.j)("esri.layers.graphics.sources.FeatureLayerSource")],mt);const gt=mt},63543:(t,e,r)=>{r.d(e,{Dm:()=>d,Hq:()=>c,MS:()=>p,bU:()=>i});var s=r(93169),n=r(84652),o=r(60480),a=r(76115);function i(t){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?a.I4:"esriGeometryPolyline"===t?a.ET:a.lF}}}const u=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let l=1;function d(t,e){if((0,s.Z)("esri-csp-restrictions"))return()=>({[e]:null,...t});try{let r=`this.${e} = null;`;for(const e in t)r+=`this${u.test(e)?`.${e}`:`["${e}"]`} = ${JSON.stringify(t[e])};`;const s=new Function(`\n      return class AttributesClass$${l++} {\n        constructor() {\n          ${r};\n        }\n      }\n    `)();return()=>new s}catch(r){return()=>({[e]:null,...t})}}function c(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,n.d9)(t)}}]}function p(t,e){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:e,supportsDelete:e,supportsEditing:e,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:e,supportsExceedsLimitStatistics:!0},query:o.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:e,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},34211:(t,e,r)=>{r.d(e,{P:()=>a});var s=r(23084),n=r(5192),o=r(21149);async function a(t,e,r){const a=(0,s.en)(t);return(0,n.executeQueryForCount)(a,o.Z.from(e),{...r}).then((t=>t.data.count))}},24246:(t,e,r)=>{r.d(e,{G:()=>a});var s=r(23084),n=r(5192),o=r(21149);async function a(t,e,r){const a=(0,s.en)(t);return(0,n.executeQueryForIds)(a,o.Z.from(e),{...r}).then((t=>t.data.objectIds))}},77946:(t,e,r)=>{r.d(e,{F:()=>u,e:()=>i});var s=r(23084),n=r(5192),o=r(49818),a=r(21149);async function i(t,e,r){const s=await u(t,e,r);return o.default.fromJSON(s)}async function u(t,e,r){const o=(0,s.en)(t),i={...r},u=a.Z.from(e),{data:l}=await(0,n.executeQuery)(o,u,u.sourceSpatialReference,i);return l}},11812:(t,e,r)=>{r.d(e,{Z:()=>p});var s,n=r(27366),o=r(46784),a=r(49861),i=(r(63780),r(93169),r(25243)),u=r(69912);function l(t){const{exifInfo:e,exifName:r,tagName:s}=t;if(!e||!r||!s)return null;const n=e.find((t=>t.name===r));return n?function(t){const{tagName:e,tags:r}=t;if(!r||!e)return null;const s=r.find((t=>t.name===e));return s&&s.value||null}({tagName:s,tags:n.tags}):null}const d={1:{id:1,rotation:0,mirrored:!1},2:{id:2,rotation:0,mirrored:!0},3:{id:3,rotation:180,mirrored:!1},4:{id:4,rotation:180,mirrored:!0},5:{id:5,rotation:-90,mirrored:!0},6:{id:6,rotation:90,mirrored:!1},7:{id:7,rotation:90,mirrored:!0},8:{id:8,rotation:-90,mirrored:!1}};let c=s=class extends o.wq{constructor(t){super(t),this.contentType=null,this.exifInfo=null,this.id=null,this.globalId=null,this.keywords=null,this.name=null,this.parentGlobalId=null,this.parentObjectId=null,this.size=null,this.url=null}get orientationInfo(){const{exifInfo:t}=this,e=l({exifName:"Exif IFD0",tagName:"Orientation",exifInfo:t});return d[e]||null}clone(){return new s({contentType:this.contentType,exifInfo:this.exifInfo,id:this.id,globalId:this.globalId,keywords:this.keywords,name:this.name,parentGlobalId:this.parentGlobalId,parentObjectId:this.parentObjectId,size:this.size,url:this.url})}};(0,n._)([(0,a.Cb)({type:String})],c.prototype,"contentType",void 0),(0,n._)([(0,a.Cb)()],c.prototype,"exifInfo",void 0),(0,n._)([(0,a.Cb)({readOnly:!0})],c.prototype,"orientationInfo",null),(0,n._)([(0,a.Cb)({type:i.z8})],c.prototype,"id",void 0),(0,n._)([(0,a.Cb)({type:String})],c.prototype,"globalId",void 0),(0,n._)([(0,a.Cb)({type:String})],c.prototype,"keywords",void 0),(0,n._)([(0,a.Cb)({type:String})],c.prototype,"name",void 0),(0,n._)([(0,a.Cb)({json:{read:!1}})],c.prototype,"parentGlobalId",void 0),(0,n._)([(0,a.Cb)({json:{read:!1}})],c.prototype,"parentObjectId",void 0),(0,n._)([(0,a.Cb)({type:i.z8})],c.prototype,"size",void 0),(0,n._)([(0,a.Cb)({json:{read:!1}})],c.prototype,"url",void 0),c=s=(0,n._)([(0,u.j)("esri.layers.support.AttachmentInfo")],c);const p=c},23084:(t,e,r)=>{r.d(e,{cv:()=>i,en:()=>a,lA:()=>o});var s=r(84652),n=r(35995);function o(t,e){return e?{...e,query:{...t,...e.query}}:{query:t}}function a(t){return"string"==typeof t?(0,n.mN)(t):(0,s.d9)(t)}function i(t,e,r){const s={};for(const n in t){if("declaredClass"===n)continue;const o=t[n];if(null!=o&&"function"!=typeof o)if(Array.isArray(o)){s[n]=[];for(let t=0;t<o.length;t++)s[n][t]=i(o[t])}else if("object"==typeof o)if(o.toJSON){const t=o.toJSON(r&&r[n]);s[n]=e?t:JSON.stringify(t)}else s[n]=e?o:JSON.stringify(o);else s[n]=o}return s}}}]);
//# sourceMappingURL=7944.1da40125.chunk.js.map