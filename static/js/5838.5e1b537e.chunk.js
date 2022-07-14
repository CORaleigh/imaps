"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[5838],{66576:(e,t,r)=>{r.d(t,{B:()=>g});var i=r(92026),s=r(80292),o=r(35995),n=r(71907),a=r(33397),l=r(25265),p=r(49861);function d(e){return u[function(e){return e instanceof Blob?e.type:function(e){const t=(0,o.Ml)(e);return h[t]||y}(e.url)}(e)]||c}const u={},y="text/plain",c=u[y],h={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(const w in h)u[h[w]]=w;var f=r(53283);function g(e){const t=(0,i.pC)(e)&&e.origins?e.origins:[void 0];return(r,n)=>{const u=function(e,t,r){if((0,i.pC)(e)&&"resource"===e.type)return function(e,t,r){const n=(0,a.VZ)(t,r);return{type:String,read:(e,t,r)=>{const i=(0,f.r)(e,t,r);return n.type===String?i:"function"==typeof n.type?new n.type({url:i}):void 0},write:{writer(t,a,p,u){if(!u||!u.resources)return"string"==typeof t?void(a[p]=(0,f.t)(t,u)):void(a[p]=t.write({},u));const y=function(e){return(0,i.Wi)(e)?null:"string"==typeof e?e:e.url}(t),c=y?(0,f.t)(y,{...u,verifyItemRelativeUrls:u&&u.verifyItemRelativeUrls?{writtenUrls:u.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null},f.M.NO):null,h=n.type!==String&&(!(0,s.l)(this)||u&&u.origin&&this.originIdOf(r)>(0,l.M9)(u.origin));u&&u.portalItem&&(0,i.pC)(c)&&!(0,o.YP)(c)?h?function(e,t,r,i,s,n,a,l){const p=a.portalItem.resourceFromPath(i),u=v(r,i,a);d(u)===(0,o.Ml)(p.path)?(b(e,t,p,u,a.resources.toUpdate),s[n]=i):m(e,t,r,i,s,n,a,l)}(this,r,t,c,a,p,u,e):function(e,t,r,i){i.resources.toKeep.push({resource:i.portalItem.resourceFromPath(e)}),t[r]=e}(c,a,p,u):u&&u.portalItem&&((0,i.Wi)(c)||(0,i.pC)((0,f.i)(c))||(0,o.jc)(c)||h)?m(this,r,t,c,a,p,u,e):a[p]=c}}}}(e,t,r);switch((0,i.pC)(e)&&e.type?e.type:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=f.p;return{read:e,write:t}}}}(e,r,n);for(const e of t){const t=(0,p.CJ)(r,e,n);for(const e in u)t[e]=u[e]}}}function m(e,t,s,a,l,p,u,y){const c=(0,n.D)(),h=v(s,a,u),f=(0,o.v_)((0,i.U2)(y,"prefix"),c),g=`${f}.${d(h)}`,m=u.portalItem.resourceFromPath(g);(0,o.jc)(a)&&u.resources.pendingOperations.push(async function(e){const t=(await Promise.resolve().then(r.bind(r,76200))).default,{data:i}=await t(e,{responseType:"blob"});return i}(a).then((e=>{m.path=`${f}.${d(e)}`,l[p]=m.itemRelativeUrl})).catch((()=>{}))),b(e,t,m,h,u.resources.toAdd),l[p]=m.itemRelativeUrl}function b(e,t,r,i,s){s.push({resource:r,content:i,finish:r=>{!function(e,t,r){"string"==typeof e[t]?e[t]=r.url:e[t].url=r.url}(e,t,r)}})}function v(e,t,r){return"string"==typeof e?{url:t}:new Blob([JSON.stringify(e.toJSON(r))],{type:"application/json"})}},5838:(e,t,r)=>{r.r(t),r.d(t,{default:()=>de});var i=r(27366),s=r(44055),o=(r(94931),r(78451),r(98689),r(57823),r(32066),r(49018),r(34999),r(79850),r(9014),r(40464)),n=r(76200),a=r(40281),l=r(10064),p=r(32718),d=r(92026),u=r(97642),y=r(66978),c=r(94172),h=r(35995),f=r(49861),g=(r(63780),r(93169),r(23879)),m=(r(25243),r(38511)),b=r(69912),v=r(25265),w=r(30651),I=r(27961),_=r(11936),C=r(6061),S=r(29598),L=r(56811),j=r(95731),F=r(96978),O=r(45948),x=r(87562),E=r(10536),T=r(34785),R=r(25610),P=r(52410),A=r(37270),N=r(34207),Z=r(77748),D=r(85116),U=r(71065),q=r(46784);let Q=class extends q.wq{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};(0,i._)([(0,f.Cb)({type:String,json:{read:!0,write:!0}})],Q.prototype,"name",void 0),(0,i._)([(0,f.Cb)({type:String,json:{read:!0,write:!0}})],Q.prototype,"field",void 0),(0,i._)([(0,f.Cb)({type:[Number],json:{read:!0,write:!0}})],Q.prototype,"currentRangeExtent",void 0),(0,i._)([(0,f.Cb)({type:[Number],json:{read:!0,write:!0}})],Q.prototype,"fullRangeExtent",void 0),(0,i._)([(0,f.Cb)({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],Q.prototype,"type",void 0),Q=(0,i._)([(0,b.j)("esri.layers.support.RangeInfo")],Q);var k,V=r(100),G=r(84652),W=r(66576),J=r(51370),M=(r(75366),r(80885)),$=r(79803);let z=k=class extends((0,q.eC)(a.Z.ofType(M.Z))){constructor(e){super(e)}clone(){return new k(this.items.map((e=>e.clone())))}write(e,t){return this.toJSON(t)}toJSON(e){const t=e?.layer?.spatialReference;return t?this.toArray().map((r=>{if(!t.equals(r.spatialReference)){if(!(0,$.Up)(r.spatialReference,t))return e&&e.messages&&e.messages.push(new J.Z("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),null;const i=new M.Z;(0,$.Wt)(r,i,t),r=i}const i=r.toJSON(e);return delete i.spatialReference,i})).filter((e=>null!=e)):(e?.messages&&e.messages.push(new J.Z("scenefilter:unsupported","Writing Scene filters without context layer is not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),this.toArray().map((t=>t.toJSON(e))))}static fromJSON(e,t){const r=new k;return e.forEach((e=>r.add(M.Z.fromJSON(e,t)))),r}};z=k=(0,i._)([(0,b.j)("esri.layers.support.PolygonCollection")],z);const K=z;var B,Y=r(53283);let H=B=class extends q.wq{constructor(e){super(e),this.spatialRelationship="disjoint",this.geometries=new K,this._geometriesSource=null,this._handles=new V.Z}initialize(){this._handles.add((0,c.on)((()=>this.geometries),"after-changes",(()=>this.geometries=this.geometries),c.Z_))}destroy(){this._handles.destroy()}readGeometries(e,t,r){this._geometriesSource={url:(0,Y.f)(e,r),context:r}}async loadGeometries(e,t){if((0,d.Wi)(this._geometriesSource))return;const{url:r,context:i}=this._geometriesSource,s=await(0,n.default)(r,{responseType:"json",signal:(0,d.U2)(t,"signal")}),o=e.toJSON(),a=s.data.map((e=>({...e,spatialReference:o})));this.geometries=K.fromJSON(a,i),this._geometriesSource=null}clone(){return new B({geometries:(0,G.d9)(this.geometries),spatialRelationship:this.spatialRelationship})}};(0,i._)([(0,f.Cb)({type:["disjoint","contains"],nonNullable:!0,json:{write:!0}})],H.prototype,"spatialRelationship",void 0),(0,i._)([(0,f.Cb)({type:K,nonNullable:!0,json:{write:!0}}),(0,W.B)({origins:["web-scene","portal-item"],type:"resource",prefix:"geometries"})],H.prototype,"geometries",void 0),(0,i._)([(0,m.r)(["web-scene","portal-item"],"geometries")],H.prototype,"readGeometries",null),H=B=(0,i._)([(0,b.j)("esri.layers.support.SceneFilter")],H);const X=H;var ee=r(21371),te=r(21149),re=r(81085),ie=r(81219);const se=["3DObject","Point"],oe=p.Z.getLogger("esri.layers.SceneLayer"),ne=(0,R.v)();let ae=class extends((0,j.Vt)((0,_.Y)((0,C.q)((0,S.I)((0,L.M)((0,u.R)((0,I.V)(w.Z)))))))){constructor(){super(...arguments),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.excludeObjectIds=new a.Z,this.definitionExpression=null,this.filter=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.priority=null,this.semantic=null,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){const r=this.getFeatureType(t?.feature)?.domains?.[e];return r&&"inherited"!==r.type?r:this.getField(e)?.domain??null}getFeatureType(e){return e&&(0,d.pC)(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return(0,d.pC)(this.associatedLayer)?this.associatedLayer.types:[]}get typeIdField(){return(0,d.pC)(this.associatedLayer)?this.associatedLayer.typeIdField:null}get formTemplate(){return(0,d.pC)(this.associatedLayer)?this.associatedLayer.formTemplate:null}get fieldsIndex(){return new P.Z(this.fields)}readNodePages(e,t,r){return"Point"===t.layerType&&(e=t.pointNodePages),null==e||"object"!=typeof e?null:N.U4.fromJSON(e,r)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get geometryType(){return pe[this.profile]||"mesh"}set renderer(e){(0,A.YN)(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return null!=e&&"object"==typeof e||(e={}),null==e.color&&(e.color=!1),e}get capabilities(){const e=(0,d.pC)(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:F.C,{query:t,editing:{supportsGlobalId:r,supportsRollbackOnFailure:i,supportsUploadWithItemId:s,supportsReturnServiceEditsInSourceSpatialReference:o},data:{supportsZ:n,supportsM:a,isVersioned:l,supportsAttachment:p},operations:{supportsEditing:u,supportsUpdate:y,supportsQuery:c,supportsQueryAttachments:h}}=e,f=e.operations.supportsChangeTracking;return{query:t,editing:{supportsGlobalId:r,supportsReturnServiceEditsInSourceSpatialReference:o,supportsRollbackOnFailure:i,supportsGeometryUpdate:!1,supportsUploadWithItemId:s},data:{supportsAttachment:p,supportsZ:n,supportsM:a,isVersioned:l},operations:{supportsQuery:c,supportsQueryAttachments:h,supportsEditing:u&&f,supportsAdd:!1,supportsDelete:!1,supportsUpdate:y&&f}}}get editingEnabled(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.userHasEditingPrivileges}set editingEnabled(e){null!=e?this._override("editingEnabled",e):this._clearOverride("editingEnabled")}get defaultPopupTemplate(){return(0,d.pC)(this.associatedLayer)||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return!e&&t.fields&&t.fields.some((t=>("esriFieldTypeOID"===t.type&&(e=t.name),!!e))),e||void 0}readGlobalIdField(e,t){return!e&&t.fields&&t.fields.some((t=>("esriFieldTypeGlobalID"===t.type&&(e=t.name),!!e))),e||void 0}get displayField(){return(0,d.pC)(this.associatedLayer)?this.associatedLayer.displayField:null}readProfile(e,t){const r=t.store.profile;return null!=r&&le[r]?le[r]:(oe.error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}load(e){const t=(0,d.pC)(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(y.r9).then((()=>this._fetchService(t))).then((()=>Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t),(0,d.pC)(this.filter)?this.filter.loadGeometries(this.spatialReference):null]))).then((()=>this._validateElevationInfo())).then((()=>this._applyAssociatedLayerOverrides())).then((()=>this._populateFieldUsageInfo())).then((()=>(0,ee.y)(this,{origin:"service"},t))).then((()=>(0,A.YN)(this.renderer,this.fieldsIndex))).then((()=>this.finishLoadEditablePortalLayer(e)));return this.addResolvingPromise(r),Promise.resolve(this)}async beforeSave(){(0,d.pC)(this.filter)&&await this.load()}createQuery(){const e=new te.Z;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(e?.features)for(const t of e.features)t.layer=this,t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryObjectIds(e||this.createQuery(),t)))}queryAttachments(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryAttachments(e,t)))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(oe.error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return(0,re.eZ)(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return(0,d.pC)(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),(0,d.Wi)(this.associatedLayer))throw new l.Z("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new l.Z("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return null!=this.statisticsInfo&&this.statisticsInfo.some((t=>t.name===e))}async queryCachedStatistics(e,t){if(await this.load(t),!this.statisticsInfo)throw new l.Z("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const r=this.fieldsIndex.get(e);if(!r)throw new l.Z("scenelayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const i of this.statisticsInfo)if(i.name===r.name){const e=(0,h.v_)(this.parsedUrl.path,i.href);return(0,n.default)(e,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then((e=>e.data))}throw new l.Z("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(j.xp.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(j.xp.SAVE,e)}async applyEdits(e,t){const i=await r.e(9887).then(r.bind(r,29887));if(await this.load(),(0,d.Wi)(this.associatedLayer))throw new l.Z(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),i.applyEdits(this,this.associatedLayer.source,e,t)}on(e,t){return super.on(e,t)}validateLayer(e){if(e.layerType&&!se.includes(e.layerType))throw new l.Z("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new l.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new l.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});!function(e,t){let r=!1,i=!1;if(null==e)r=!0,i=!0;else{const s=t&&t.isGeographic;switch(e){case"east-north-up":case"earth-centered":r=!0,i=s;break;case"vertex-reference-frame":r=!0,i=!s;break;default:r=!1}}if(!r)throw new l.Z("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!i)throw new l.Z("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if("points"===this.profile)e.push("Point");else{if("mesh-pyramids"!==this.profile)throw new l.Z("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){if(this._fieldUsageInfo={},this.fields)for(const e of this.fields){const t=!(!this.attributeStorageInfo||!this.attributeStorageInfo.some((t=>t.name===e.name))),r=!!((0,d.pC)(this.associatedLayer)&&this.associatedLayer.fields&&this.associatedLayer.fields.some((t=>t&&e.name===t.name))),i={supportsLabelingInfo:t,supportsRenderer:t,supportsPopupTemplate:t||r,supportsLayerQuery:r};this._fieldUsageInfo[e.name]=i}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides()}_applyAssociatedLayerFieldsOverrides(){if((0,d.Wi)(this.associatedLayer)||!this.associatedLayer.fields)return;let e=null;for(const t of this.associatedLayer.fields){const r=this.getField(t.name);r?(!r.domain&&t.domain&&(r.domain=t.domain.clone()),r.editable=t.editable,r.nullable=t.nullable,r.length=t.length):(e||(e=this.fields?this.fields.slice():[]),e.push(t.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if((0,d.Wi)(this.associatedLayer))return;const e=["popupTemplate","popupEnabled"],t=(0,g.vw)(this);for(let r=0;r<e.length;r++){const i=e[r],s=this.originIdOf(i),o=this.associatedLayer.originIdOf(i);s<o&&(o===v.s3.SERVICE||o===v.s3.PORTAL_ITEM)&&t.setAtOrigin(i,this.associatedLayer[i],o)}}async _setAssociatedFeatureLayer(e){if(!["mesh-pyramids","points"].includes(this.profile))return;const t=new T.W(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedLayer=await t.fetch()}catch(r){(0,y.D_)(r)||this._logWarningOnPopupEnabled()}}async _logWarningOnPopupEnabled(){await(0,c.N1)((()=>this.popupEnabled&&null!=this.popupTemplate));const e=`this SceneLayer: ${this.title}`;null==this.attributeStorageInfo?oe.warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):oe.info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`)}_validateElevationInfo(){const e=this.elevationInfo;e&&("mesh-pyramids"===this.profile&&"relative-to-scene"===e.mode&&oe.warn(".elevationInfo=","Mesh scene layers don't support relative-to-scene elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&oe.warn(".elevationInfo=","Scene layers do not support featureExpressionInfo"))}};(0,i._)([(0,f.Cb)({types:{key:"type",base:x.B,typeMap:{selection:E.Z}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],ae.prototype,"featureReduction",void 0),(0,i._)([(0,f.Cb)({type:[Q],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],ae.prototype,"rangeInfos",void 0),(0,i._)([(0,f.Cb)({json:{read:!1}})],ae.prototype,"associatedLayer",void 0),(0,i._)([(0,f.Cb)({type:["show","hide"]})],ae.prototype,"listMode",void 0),(0,i._)([(0,f.Cb)({type:["ArcGISSceneServiceLayer"]})],ae.prototype,"operationalLayerType",void 0),(0,i._)([(0,f.Cb)({json:{read:!1},readOnly:!0})],ae.prototype,"type",void 0),(0,i._)([(0,f.Cb)({...ne.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],ae.prototype,"fields",void 0),(0,i._)([(0,f.Cb)()],ae.prototype,"types",null),(0,i._)([(0,f.Cb)()],ae.prototype,"typeIdField",null),(0,i._)([(0,f.Cb)()],ae.prototype,"formTemplate",null),(0,i._)([(0,f.Cb)({readOnly:!0})],ae.prototype,"fieldsIndex",null),(0,i._)([(0,f.Cb)({type:U.Z,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],ae.prototype,"floorInfo",void 0),(0,i._)([(0,f.Cb)(ne.outFields)],ae.prototype,"outFields",void 0),(0,i._)([(0,f.Cb)({type:N.U4,readOnly:!0,json:{read:!1}})],ae.prototype,"nodePages",void 0),(0,i._)([(0,m.r)("service","nodePages",["nodePages","pointNodePages"])],ae.prototype,"readNodePages",null),(0,i._)([(0,f.Cb)({type:[N.QI],readOnly:!0})],ae.prototype,"materialDefinitions",void 0),(0,i._)([(0,f.Cb)({type:[N.Yh],readOnly:!0})],ae.prototype,"textureSetDefinitions",void 0),(0,i._)([(0,f.Cb)({type:[N.H3],readOnly:!0})],ae.prototype,"geometryDefinitions",void 0),(0,i._)([(0,f.Cb)({readOnly:!0})],ae.prototype,"serviceUpdateTimeStamp",void 0),(0,i._)([(0,f.Cb)({readOnly:!0})],ae.prototype,"attributeStorageInfo",void 0),(0,i._)([(0,f.Cb)({readOnly:!0})],ae.prototype,"statisticsInfo",void 0),(0,i._)([(0,f.Cb)({type:a.Z.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],ae.prototype,"excludeObjectIds",void 0),(0,i._)([(0,f.Cb)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],ae.prototype,"definitionExpression",void 0),(0,i._)([(0,f.Cb)({type:X,json:{name:"layerDefinition.polygonFilter",write:!0}})],ae.prototype,"filter",void 0),(0,i._)([(0,f.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],ae.prototype,"path",void 0),(0,i._)([(0,f.Cb)(O.PV)],ae.prototype,"elevationInfo",null),(0,i._)([(0,f.Cb)({type:String})],ae.prototype,"geometryType",null),(0,i._)([(0,f.Cb)(O.iR)],ae.prototype,"labelsVisible",void 0),(0,i._)([(0,f.Cb)({type:[Z.Z],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:D.r},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:D.r},write:!0}})],ae.prototype,"labelingInfo",void 0),(0,i._)([(0,f.Cb)(O.rn)],ae.prototype,"legendEnabled",void 0),(0,i._)([(0,f.Cb)({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,t){if("number"==typeof e&&e>=0&&e<=1)return e;const r=t.layerDefinition?.drawingInfo?.transparency;return void 0!==r?(0,ie.b)(r):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],ae.prototype,"opacity",void 0),(0,i._)([(0,f.Cb)({type:["Low","High"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],ae.prototype,"priority",void 0),(0,i._)([(0,f.Cb)({type:["Labels"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],ae.prototype,"semantic",void 0),(0,i._)([(0,f.Cb)({types:o.o,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],ae.prototype,"renderer",null),(0,i._)([(0,f.Cb)({json:{read:!1}})],ae.prototype,"cachedDrawingInfo",void 0),(0,i._)([(0,m.r)("service","cachedDrawingInfo")],ae.prototype,"readCachedDrawingInfo",null),(0,i._)([(0,f.Cb)({readOnly:!0,json:{read:!1}})],ae.prototype,"capabilities",null),(0,i._)([(0,f.Cb)({type:Boolean,json:{read:!1}})],ae.prototype,"editingEnabled",null),(0,i._)([(0,f.Cb)(O.C_)],ae.prototype,"popupEnabled",void 0),(0,i._)([(0,f.Cb)({type:s.Z,json:{name:"popupInfo",write:!0}})],ae.prototype,"popupTemplate",void 0),(0,i._)([(0,f.Cb)({readOnly:!0,json:{read:!1}})],ae.prototype,"defaultPopupTemplate",null),(0,i._)([(0,f.Cb)({type:String,json:{read:!1}})],ae.prototype,"objectIdField",void 0),(0,i._)([(0,m.r)("service","objectIdField",["objectIdField","fields"])],ae.prototype,"readObjectIdField",null),(0,i._)([(0,f.Cb)({type:String,json:{read:!1}})],ae.prototype,"globalIdField",void 0),(0,i._)([(0,m.r)("service","globalIdField",["globalIdField","fields"])],ae.prototype,"readGlobalIdField",null),(0,i._)([(0,f.Cb)({readOnly:!0,type:String,json:{read:!1}})],ae.prototype,"displayField",null),(0,i._)([(0,f.Cb)({type:String,json:{read:!1}})],ae.prototype,"profile",void 0),(0,i._)([(0,m.r)("service","profile",["store.profile"])],ae.prototype,"readProfile",null),(0,i._)([(0,f.Cb)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],ae.prototype,"normalReferenceFrame",void 0),(0,i._)([(0,f.Cb)(O.YI)],ae.prototype,"screenSizePerspectiveEnabled",void 0),ae=(0,i._)([(0,b.j)("esri.layers.SceneLayer")],ae);const le={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},pe={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"},de=ae}}]);
//# sourceMappingURL=5838.5e1b537e.chunk.js.map