"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[5064],{5064:(e,t,r)=>{r.r(t),r.d(t,{default:()=>V});var s=r(27366),o=(r(59486),r(44055)),i=(r(94931),r(78451),r(98689),r(57823),r(32066),r(49018),r(34999),r(28189),r(9014),r(40464)),n=r(92026),a=r(97642),u=r(66978),p=r(35995),l=r(49861),d=(r(25243),r(63780),r(69912)),c=r(27823),h=r(30651),y=r(10064),m=r(93169),f=r(54472),g=r(32718),b=r(31009),v=r(63543),_=r(49818),C=r(53866),S=r(80885);const F="esri.layers.graphics.sources.GeoJSONSource",O=g.Z.getLogger(F);let I=class extends f.Z{constructor(){super(...arguments),this.type="geojson",this.refresh=(0,u.Ds)((async e=>{await this.load();const{extent:t,timeExtent:r}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,r&&(this.sourceJSON.timeInfo.timeExtent=[r.start,r.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}}))}load(e){const t=(0,n.pC)(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null}applyEdits(e){return this.load().then((()=>this._applyEdits(e)))}openPorts(){return this.load().then((()=>this._connection.openPorts()))}queryFeatures(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))).then((e=>_.Z.fromJSON(e)))}queryFeaturesJSON(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)))}queryFeatureCount(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(t).then((()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)))}queryObjectIds(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(t).then((()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)))}queryExtent(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(t).then((()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t))).then((e=>({count:e.count,extent:C.Z.fromJSON(e.extent)})))}querySnapping(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(t).then((()=>this._connection.invoke("querySnapping",e,t)))}_applyEdits(e){if(!this._connection)throw new y.Z("geojson-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField,r=[],s=[],o=[];if(e.addFeatures)for(const i of e.addFeatures)r.push(this._serializeFeature(i));if(e.deleteFeatures)for(const i of e.deleteFeatures)"objectId"in i&&null!=i.objectId?s.push(i.objectId):"attributes"in i&&null!=i.attributes[t]&&s.push(i.attributes[t]);if(e.updateFeatures)for(const i of e.updateFeatures)o.push(this._serializeFeature(i));return this._connection.invoke("applyEdits",{adds:r,updates:o,deletes:s}).then((e=>{let{extent:t,timeExtent:r,featureEditResults:s}=e;return this.sourceJSON.extent=t,r&&(this.sourceJSON.timeInfo.timeExtent=[r.start,r.end]),this._createEditsResult(s)}))}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new y.Z("geojson-layer-source:edit-failure",t.description,{code:t.code}):null}}_serializeFeature(e){const{attributes:t}=e,r=this._geometryForSerialization(e);return r?{geometry:r.toJSON(),attributes:t}:{attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return(0,n.Wi)(t)?null:"mesh"===t.type||"extent"===t.type?S.Z.fromExtent(t.extent):t}async _startWorker(e){this._connection=await(0,b.bA)("GeoJSONSourceWorker",{strategy:(0,m.Z)("feature-layers-workers")?"dedicated":"local",signal:e});const{fields:t,spatialReference:r,hasZ:s,geometryType:o,objectIdField:i,url:n,timeInfo:a,customParameters:u}=this.layer,p="defaults"===this.layer.originOf("spatialReference"),l={url:n,customParameters:u,fields:t&&t.map((e=>e.toJSON())),geometryType:c.M.toJSON(o),hasZ:s,objectIdField:i,timeInfo:a?a.toJSON():null,spatialReference:p?null:r&&r.toJSON()},d=await this._connection.invoke("load",l,{signal:e});for(const c of d.warnings)O.warn(c.message,{layer:this.layer,warning:c});d.featureErrors.length&&O.warn(`Encountered ${d.featureErrors.length} validation errors while loading features`,d.featureErrors),this.sourceJSON=d.layerDefinition,this.capabilities=(0,v.MS)(this.sourceJSON.hasZ,!0)}};(0,s._)([(0,l.Cb)()],I.prototype,"capabilities",void 0),(0,s._)([(0,l.Cb)()],I.prototype,"type",void 0),(0,s._)([(0,l.Cb)({constructOnly:!0})],I.prototype,"layer",void 0),(0,s._)([(0,l.Cb)()],I.prototype,"sourceJSON",void 0),I=(0,s._)([(0,d.j)(F)],I);var x=r(6693),E=r(46671),R=r(7632),N=r(64390),w=r(6061),j=r(94207),Z=r(29598),J=r(71684),P=r(56811),q=r(99063),T=r(45948),D=r(12224),Q=r(87165),k=r(83040),A=r(25610),G=r(37270),M=r(77748),z=r(85116),U=r(21149),$=r(81085),B=r(78952);const H=(0,A.v)();let L=class extends((0,j.c)((0,E.N)((0,N.M)((0,R.b)((0,x.h)((0,q.n)((0,P.M)((0,J.Q)((0,w.q)((0,Z.I)((0,a.R)(h.Z)))))))))))){constructor(e){super(e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new I({layer:this}),this.spatialReference=B.Z.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson",this.typeIdField=null,this.types=null}destroy(){this.source?.destroy()}load(e){const t=this.loadFromPortal({supportedTypes:["GeoJson"],supportsData:!1},e).catch(u.r9).then((()=>this.source.load(e))).then((()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),(0,G.YN)(this.renderer,this.fieldsIndex),(0,G.UF)(this.timeInfo,this.fieldsIndex)}));return this.addResolvingPromise(t),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&null==this.geometryType}get parsedUrl(){return this.url?(0,p.mN)(this.url):null}set renderer(e){(0,G.YN)(e,this.fieldsIndex),this._set("renderer",e)}set url(e){if(!e)return void this._set("url",e);const t=(0,p.mN)(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query})}async applyEdits(e,t){const s=await r.e(10).then(r.bind(r,80010));await this.load();const o=await s.applyEdits(this,this.source,e,t);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),o}on(e,t){return super.on(e,t)}createPopupTemplate(e){return(0,$.eZ)(this,e)}createQuery(){const e=new U.Z,t=this.get("capabilities.data");e.returnGeometry=!0,t&&t.supportsZ&&(e.returnZ=!0),e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:r,timeExtent:s}=this;return e.timeExtent=null!=r&&null!=s?s.offset(-r.value,r.unit):s||null,e}getFieldDomain(e,t){let r,s=!1;const o=t&&t.feature,i=o&&o.attributes,n=this.typeIdField&&i&&i[this.typeIdField];return null!=n&&this.types&&(s=this.types.some((t=>t.id==n&&(r=t.domains&&t.domains[e],r&&"inherited"===r.type&&(r=this._getLayerDomain(e)),!0)))),s||r||(r=this._getLayerDomain(e)),r}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(U.Z.from(e)||this.createQuery(),t))).then((e=>{if(e?.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(U.Z.from(e)||this.createQuery(),t)))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(U.Z.from(e)||this.createQuery(),t)))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(U.Z.from(e)||this.createQuery(),t)))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return(0,n.pC)(t)&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}_getLayerDomain(e){if(!this.fields)return null;let t=null;return this.fields.some((r=>(r.name===e&&(t=r.domain),!!t))),t}};(0,s._)([(0,l.Cb)({readOnly:!0,json:{read:!1,write:!1}})],L.prototype,"capabilities",null),(0,s._)([(0,l.Cb)({type:String})],L.prototype,"copyright",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],L.prototype,"createQueryVersion",null),(0,s._)([(0,l.Cb)({readOnly:!0})],L.prototype,"defaultPopupTemplate",null),(0,s._)([(0,l.Cb)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],L.prototype,"definitionExpression",void 0),(0,s._)([(0,l.Cb)({type:String})],L.prototype,"displayField",void 0),(0,s._)([(0,l.Cb)({type:Boolean})],L.prototype,"editingEnabled",void 0),(0,s._)([(0,l.Cb)(T.PV)],L.prototype,"elevationInfo",void 0),(0,s._)([(0,l.Cb)({type:[k.Z],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],L.prototype,"fields",void 0),(0,s._)([(0,l.Cb)(H.fieldsIndex)],L.prototype,"fieldsIndex",void 0),(0,s._)([(0,l.Cb)({type:C.Z,json:{name:"extent"}})],L.prototype,"fullExtent",void 0),(0,s._)([(0,l.Cb)({type:["point","polygon","polyline","multipoint"],json:{read:{reader:c.M.read}}})],L.prototype,"geometryType",void 0),(0,s._)([(0,l.Cb)({type:Boolean})],L.prototype,"hasZ",void 0),(0,s._)([(0,l.Cb)(T.id)],L.prototype,"id",void 0),(0,s._)([(0,l.Cb)({type:Boolean,readOnly:!0})],L.prototype,"isTable",null),(0,s._)([(0,l.Cb)(T.iR)],L.prototype,"labelsVisible",void 0),(0,s._)([(0,l.Cb)({type:[M.Z],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:z.r},write:!0}})],L.prototype,"labelingInfo",void 0),(0,s._)([(0,l.Cb)(T.rn)],L.prototype,"legendEnabled",void 0),(0,s._)([(0,l.Cb)({type:["show","hide"]})],L.prototype,"listMode",void 0),(0,s._)([(0,l.Cb)({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],L.prototype,"objectIdField",void 0),(0,s._)([(0,l.Cb)(T.Oh)],L.prototype,"opacity",void 0),(0,s._)([(0,l.Cb)({type:["GeoJSON"]})],L.prototype,"operationalLayerType",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],L.prototype,"parsedUrl",null),(0,s._)([(0,l.Cb)(T.C_)],L.prototype,"popupEnabled",void 0),(0,s._)([(0,l.Cb)({type:o.Z,json:{name:"popupInfo",write:!0}})],L.prototype,"popupTemplate",void 0),(0,s._)([(0,l.Cb)({types:i.A,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:i.o}}}})],L.prototype,"renderer",null),(0,s._)([(0,l.Cb)(T.YI)],L.prototype,"screenSizePerspectiveEnabled",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],L.prototype,"source",void 0),(0,s._)([(0,l.Cb)({type:B.Z})],L.prototype,"spatialReference",void 0),(0,s._)([(0,l.Cb)({type:[D.Z]})],L.prototype,"templates",void 0),(0,s._)([(0,l.Cb)()],L.prototype,"title",void 0),(0,s._)([(0,l.Cb)({json:{read:!1},readOnly:!0})],L.prototype,"type",void 0),(0,s._)([(0,l.Cb)({type:String,readOnly:!0})],L.prototype,"typeIdField",void 0),(0,s._)([(0,l.Cb)({type:[Q.Z]})],L.prototype,"types",void 0),(0,s._)([(0,l.Cb)(T.HQ)],L.prototype,"url",null),L=(0,s._)([(0,d.j)("esri.layers.GeoJSONLayer")],L);const V=L},60480:(e,t,r)=>{r.d(t,{g:()=>s});const s={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},63543:(e,t,r)=>{r.d(t,{Dm:()=>l,Hq:()=>d,MS:()=>c,bU:()=>a});var s=r(93169),o=r(84652),i=r(60480),n=r(76115);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?n.I4:"esriGeometryPolyline"===e?n.ET:n.lF}}}const u=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let p=1;function l(e,t){if((0,s.Z)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let r=`this.${t} = null;`;for(const t in e)r+=`this${u.test(t)?`.${t}`:`["${t}"]`} = ${JSON.stringify(e[t])};`;const s=new Function(`\n      return class AttributesClass$${p++} {\n        constructor() {\n          ${r};\n        }\n      }\n    `)();return()=>new s}catch(r){return()=>({[t]:null,...e})}}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,o.d9)(e)}}]}function c(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:i.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}}}]);
//# sourceMappingURL=5064.3f30be10.chunk.js.map