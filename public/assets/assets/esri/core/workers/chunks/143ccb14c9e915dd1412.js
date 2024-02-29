"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[5928],{83536:(e,t,r)=>{r.d(t,{c:()=>p});var s=r(41948),o=r(2952),i=(r(40196),r(20744),r(66360),r(37176),r(41168)),n=r(1580),a=r(12552);let l=class extends o.c{constructor(e){super(e),this.getCollections=null}initialize(){this.addHandles((0,i.ox)((()=>this._refresh())))}destroy(){this.getCollections=null}_refresh(){const e=null!=this.getCollections?this.getCollections():null;if(null==e)return void this.removeAll();let t=0;for(const r of e)null!=r&&(t=this._processCollection(t,r));this.splice(t,this.length)}_createNewInstance(e){return new o.c(e)}_processCollection(e,t){if(!t)return e;const r=this.itemFilterFunction??(e=>!!e);for(const s of t)if(s){if(r(s)){const t=this.indexOf(s,e);t>=0?t!==e&&this.reorder(s,e):this.add(s,e),++e}if(this.getChildrenFunction){const t=this.getChildrenFunction(s);if(Array.isArray(t))for(const r of t)e=this._processCollection(e,r);else e=this._processCollection(e,t)}}return e}};(0,s._)([(0,n.qq)()],l.prototype,"getCollections",void 0),(0,s._)([(0,n.qq)()],l.prototype,"getChildrenFunction",void 0),(0,s._)([(0,n.qq)()],l.prototype,"itemFilterFunction",void 0),l=(0,s._)([(0,a.c)("esri.core.CollectionFlattener")],l);const p=l},10948:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Xe});var s=r(41948),o=r(2952),i=r(83536),n=r(20744),a=r(62088),l=r(79152),p=r(66360),u=r(26496),y=r(10860),d=r(28176),c=r(1580),h=(r(9456),r(33600)),f=r(12552),m=r(56156),g=r(81436),q=r(6444),v=r(82692),_=(r(99704),r(73868),r(90200),r(12836),r(63718),r(2360),r(64624),r(24948),r(70236),r(37284)),b=r(2600),w=r(14628),S=r(95800),F=r(94804),x=(r(72052),r(9968)),T=r(95247),O=r(672),A=r(22156),R=r(53368),E=r(21488);let j=class extends((0,A.MR)(u.S)){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.legendEnabled=!0,this.visible=!0,this.opacity=1}readTitle(e,t){return"string"==typeof t.alias?t.alias:"string"==typeof t.name?t.name:""}readIdOnlyOnce(e){return-1!==this.id?this.id:"number"==typeof e?e:-1}};(0,s._)([(0,c.qq)({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],j.prototype,"title",void 0),(0,s._)([(0,h.E)("service","title",["alias","name"])],j.prototype,"readTitle",null),(0,s._)([(0,c.qq)()],j.prototype,"layer",void 0),(0,s._)([(0,c.qq)({type:R.Ab,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],j.prototype,"id",void 0),(0,s._)([(0,h.E)("service","id")],j.prototype,"readIdOnlyOnce",null),(0,s._)([(0,c.qq)((0,E.yo)(String))],j.prototype,"modelName",void 0),(0,s._)([(0,c.qq)((0,E.yo)(Boolean))],j.prototype,"isEmpty",void 0),(0,s._)([(0,c.qq)({type:Boolean,nonNullable:!0})],j.prototype,"legendEnabled",void 0),(0,s._)([(0,c.qq)({type:Boolean,json:{name:"visibility",write:!0}})],j.prototype,"visible",void 0),(0,s._)([(0,c.qq)({type:Number,json:{write:!0}})],j.prototype,"opacity",void 0),j=(0,s._)([(0,f.c)("esri.layers.buildingSublayers.BuildingSublayer")],j);const C=j;var I=r(6828),L=r(36088),P=r(81732),Q=r(16424),B=r(564),M=r(39840),N=r(44104),D=r(95776),G=r(65548),z=r(27136),k=r(74776),U=r(63680);const K=(0,P.l)();let H=class extends((0,I.c)(S.c.LoadableMixin((0,F.g)(C)))){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=[],this.textureSetDefinitions=[],this.geometryDefinitions=[],this.indexInfo=null,this.serviceUpdateTimeStamp=null,this.store=null,this.attributeStorageInfo=[],this.fields=[],this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){return this.layer?{path:`${this.layer.parsedUrl?.path}/sublayers/${this.id}`,query:this.layer.parsedUrl?.query}:{path:""}}get fieldsIndex(){return new Q.c(this.fields)}readAssociatedLayer(e,t){const r=this.layer.associatedFeatureServiceItem,s=t.associatedLayerID;return null!=r&&"number"==typeof s?new O.default({portalItem:r,customParameters:this.customParameters,layerId:s}):null}get objectIdField(){if(null!=this.fields)for(const e of this.fields)if("oid"===e.type)return e.name;return null}get displayField(){return null!=this.associatedLayer?this.associatedLayer.displayField:void 0}get apiKey(){return this.layer.apiKey}get customParameters(){return this.layer.customParameters}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const t=null!=e?e.signal:null,r=this._fetchService(t).then((()=>{this.indexInfo=(0,M.S)(this.parsedUrl.path,this.rootNode,this.nodePages,this.customParameters,this.apiKey,p.c.getLogger(this),t)}));return this.addResolvingPromise(r),Promise.resolve(this)}createPopupTemplate(e){return(0,G.Ap)(this,e)}async _fetchService(e){const t=(await(0,b.c)(this.parsedUrl.path,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){const r=this.getFeatureType(t?.feature)?.domains?.[e];return r&&"inherited"!==r.type?r:this.getField(e)?.domain??null}getFeatureType(e){return e&&null!=this.associatedLayer?this.associatedLayer.getFeatureType(e):null}get types(){return null!=this.associatedLayer?this.associatedLayer.types??[]:[]}get typeIdField(){return null!=this.associatedLayer?this.associatedLayer.typeIdField:null}get geometryType(){return"3d-object"===this.layerType?"mesh":"point"}get profile(){return"3d-object"===this.layerType?"mesh-pyramids":"points"}get capabilities(){const e=null!=this.associatedLayer&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:L.u,{query:t,data:{supportsZ:r,supportsM:s,isVersioned:o}}=e;return{query:t,data:{supportsZ:r,supportsM:s,isVersioned:o}}}createQuery(){const e=new D.c;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(e?.features)for(const t of e.features)t.layer=this.layer,t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryObjectIds(e||this.createQuery(),t)))}async queryCachedAttributes(e,t){const r=(0,B.k7)(this.fieldsIndex,await(0,U.W_)(this,(0,U.M$)(this)));return(0,k.cx)(this.parsedUrl.path,this.attributeStorageInfo,e,t,r,this.apiKey,this.customParameters)}async queryCachedFeature(e,t){const r=await this.queryCachedAttributes(e,[t]);if(!r||0===r.length)throw new n.c("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const s=new q.c;return s.attributes=r[0],s.layer=this,s.sourceLayer=this,s}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:null!=this.associatedLayer}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return null!=e&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),null==this.associatedLayer)throw new n.c("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new n.c("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};(0,s._)([(0,c.qq)({readOnly:!0})],H.prototype,"parsedUrl",null),(0,s._)([(0,c.qq)({type:N.yq,readOnly:!0})],H.prototype,"nodePages",void 0),(0,s._)([(0,c.qq)({type:[N.a],readOnly:!0})],H.prototype,"materialDefinitions",void 0),(0,s._)([(0,c.qq)({type:[N.G4],readOnly:!0})],H.prototype,"textureSetDefinitions",void 0),(0,s._)([(0,c.qq)({type:[N.iK],readOnly:!0})],H.prototype,"geometryDefinitions",void 0),(0,s._)([(0,c.qq)({readOnly:!0})],H.prototype,"serviceUpdateTimeStamp",void 0),(0,s._)([(0,c.qq)({readOnly:!0})],H.prototype,"store",void 0),(0,s._)([(0,c.qq)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],H.prototype,"rootNode",void 0),(0,s._)([(0,c.qq)({readOnly:!0})],H.prototype,"attributeStorageInfo",void 0),(0,s._)([(0,c.qq)(K.fields)],H.prototype,"fields",void 0),(0,s._)([(0,c.qq)({readOnly:!0})],H.prototype,"fieldsIndex",null),(0,s._)([(0,c.qq)({readOnly:!0,type:O.default})],H.prototype,"associatedLayer",void 0),(0,s._)([(0,h.E)("service","associatedLayer",["associatedLayerID"])],H.prototype,"readAssociatedLayer",null),(0,s._)([(0,c.qq)(K.outFields)],H.prototype,"outFields",void 0),(0,s._)([(0,c.qq)({type:String,readOnly:!0})],H.prototype,"objectIdField",null),(0,s._)([(0,c.qq)({readOnly:!0,type:String,json:{read:!1}})],H.prototype,"displayField",null),(0,s._)([(0,c.qq)({readOnly:!0,type:String})],H.prototype,"apiKey",null),(0,s._)([(0,c.qq)({readOnly:!0,type:String})],H.prototype,"customParameters",null),(0,s._)([(0,c.qq)({readOnly:!0,type:T.c})],H.prototype,"fullExtent",null),(0,s._)([(0,c.qq)({readOnly:!0,type:m.c})],H.prototype,"spatialReference",null),(0,s._)([(0,c.qq)({readOnly:!0})],H.prototype,"version",null),(0,s._)([(0,c.qq)({readOnly:!0,type:z.c})],H.prototype,"elevationInfo",null),(0,s._)([(0,c.qq)({readOnly:!0,type:Number})],H.prototype,"minScale",null),(0,s._)([(0,c.qq)({readOnly:!0,type:Number})],H.prototype,"maxScale",null),(0,s._)([(0,c.qq)({readOnly:!0,type:Number})],H.prototype,"effectiveScaleRange",null),(0,s._)([(0,c.qq)({type:["hide","show"],json:{write:!0}})],H.prototype,"listMode",void 0),(0,s._)([(0,c.qq)({types:_.Q,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],H.prototype,"renderer",void 0),(0,s._)([(0,c.qq)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],H.prototype,"definitionExpression",void 0),(0,s._)([(0,c.qq)(E.Ou)],H.prototype,"popupEnabled",void 0),(0,s._)([(0,c.qq)({type:v.c,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],H.prototype,"popupTemplate",void 0),(0,s._)([(0,c.qq)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],H.prototype,"normalReferenceFrame",void 0),(0,s._)([(0,c.qq)({readOnly:!0,json:{read:!1}})],H.prototype,"defaultPopupTemplate",null),(0,s._)([(0,c.qq)()],H.prototype,"types",null),(0,s._)([(0,c.qq)()],H.prototype,"typeIdField",null),(0,s._)([(0,c.qq)({json:{write:!1}}),(0,x.G)(new w.O({"3DObject":"3d-object",Point:"point"}))],H.prototype,"layerType",void 0),(0,s._)([(0,c.qq)()],H.prototype,"geometryType",null),(0,s._)([(0,c.qq)()],H.prototype,"profile",null),(0,s._)([(0,c.qq)({readOnly:!0,json:{read:!1}})],H.prototype,"capabilities",null),H=(0,s._)([(0,f.c)("esri.layers.buildingSublayers.BuildingComponentSublayer")],H);const J=H;var V,W=r(69504);const Z={type:o.c,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:$}}},read:!1}};function $(e,t,r){if(e&&Array.isArray(e))return new o.c(e.map((e=>{const t=function(e){return"group"===e.layerType?X:J}(e);if(t){const s=new t;return s.read(e,r),s}return r?.messages&&e&&r.messages.push(new W.c("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:r})),null})))}let X=V=class extends C{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return(0,l.W)(this,(e=>V.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)}))))}};var Y;(0,s._)([(0,c.qq)({type:["hide","show","hide-children"],json:{write:!0}})],X.prototype,"listMode",void 0),(0,s._)([(0,c.qq)(Z)],X.prototype,"sublayers",void 0),X=V=(0,s._)([(0,f.c)("esri.layers.buildingSublayers.BuildingGroupSublayer")],X),(Y=X||(X={})).sublayersProperty=Z,Y.readSublayers=$,Y.forEachSublayer=function e(t,r){t.forEach((t=>{r(t),"building-group"===t.type&&e(t.sublayers,r)}))};const ee=X;var te=r(38724),re=r(16660),se=r(28584),oe=r(66576),ie=r(98768),ne=r(3116),ae=r(87072),le=r(50420),pe=r(40504),ue=r(63564);let ye=class extends pe.am{constructor(){super(...arguments),this.type=null}};(0,s._)([(0,c.qq)({type:String,readOnly:!0,json:{write:!0}})],ye.prototype,"type",void 0),ye=(0,s._)([(0,f.c)("esri.layers.support.BuildingFilterAuthoringInfo")],ye);const de=ye;var ce;let he=ce=class extends pe.am{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new ce({filterType:this.filterType,filterValues:(0,a.ct)(this.filterValues)})}};(0,s._)([(0,c.qq)({type:String,json:{write:!0}})],he.prototype,"filterType",void 0),(0,s._)([(0,c.qq)({type:[String],json:{write:!0}})],he.prototype,"filterValues",void 0),he=ce=(0,s._)([(0,f.c)("esri.layers.support.BuildingFilterAuthoringInfoType")],he);const fe=he;var me;const ge=o.c.ofType(fe);let qe=me=class extends pe.am{clone(){return new me({filterTypes:(0,a.ct)(this.filterTypes)})}};(0,s._)([(0,c.qq)({type:ge,json:{write:!0}})],qe.prototype,"filterTypes",void 0),qe=me=(0,s._)([(0,f.c)("esri.layers.support.BuildingFilterAuthoringInfoBlock")],qe);const ve=qe;var _e;const be=o.c.ofType(ve);let we=_e=class extends de{constructor(){super(...arguments),this.type="checkbox"}clone(){return new _e({filterBlocks:(0,a.ct)(this.filterBlocks)})}};(0,s._)([(0,c.qq)({type:["checkbox"]})],we.prototype,"type",void 0),(0,s._)([(0,c.qq)({type:be,json:{write:!0}})],we.prototype,"filterBlocks",void 0),we=_e=(0,s._)([(0,f.c)("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],we);const Se=we;let Fe=class extends pe.am{};(0,s._)([(0,c.qq)({readOnly:!0,json:{read:!1}})],Fe.prototype,"type",void 0),Fe=(0,s._)([(0,f.c)("esri.layers.support.BuildingFilterMode")],Fe);const xe=Fe;var Te;let Oe=Te=class extends xe{constructor(){super(...arguments),this.type="solid"}clone(){return new Te}};(0,s._)([(0,c.qq)({type:["solid"],readOnly:!0,json:{write:!0}})],Oe.prototype,"type",void 0),Oe=Te=(0,s._)([(0,f.c)("esri.layers.support.BuildingFilterModeSolid")],Oe);const Ae=Oe;var Re,Ee=r(37904);let je=Re=class extends xe{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new Re({edges:(0,a.ct)(this.edges)})}};(0,s._)([(0,x.G)({wireFrame:"wire-frame"})],je.prototype,"type",void 0),(0,s._)([(0,c.qq)(Ee.I)],je.prototype,"edges",void 0),je=Re=(0,s._)([(0,f.c)("esri.layers.support.BuildingFilterModeWireFrame")],je);const Ce=je;var Ie;let Le=Ie=class extends xe{constructor(){super(...arguments),this.type="x-ray"}clone(){return new Ie}};(0,s._)([(0,c.qq)({type:["x-ray"],readOnly:!0,json:{write:!0}})],Le.prototype,"type",void 0),Le=Ie=(0,s._)([(0,f.c)("esri.layers.support.BuildingFilterModeXRay")],Le);const Pe=Le;var Qe;const Be={nonNullable:!0,types:{key:"type",base:xe,typeMap:{solid:Ae,"wire-frame":Ce,"x-ray":Pe}},json:{read:e=>{switch(e?.type){case"solid":return Ae.fromJSON(e);case"wireFrame":return Ce.fromJSON(e);case"x-ray":return Pe.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let Me=Qe=class extends pe.am{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new Ae,this.title=""}clone(){return new Qe({filterExpression:this.filterExpression,filterMode:(0,a.ct)(this.filterMode),title:this.title})}};(0,s._)([(0,c.qq)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],Me.prototype,"filterExpression",void 0),(0,s._)([(0,c.qq)(Be)],Me.prototype,"filterMode",void 0),(0,s._)([(0,c.qq)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],Me.prototype,"title",void 0),Me=Qe=(0,s._)([(0,f.c)("esri.layers.support.BuildingFilterBlock")],Me);const Ne=Me;var De;const Ge=o.c.ofType(Ne);let ze=De=class extends pe.am{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=(0,ue.g1)(),this.name=null}clone(){return new De({description:this.description,filterBlocks:(0,a.ct)(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:(0,a.ct)(this.filterAuthoringInfo)})}};(0,s._)([(0,c.qq)({type:String,json:{write:!0}})],ze.prototype,"description",void 0),(0,s._)([(0,c.qq)({type:Ge,json:{write:{enabled:!0,isRequired:!0}}})],ze.prototype,"filterBlocks",void 0),(0,s._)([(0,c.qq)({types:{key:"type",base:de,typeMap:{checkbox:Se}},json:{read:e=>"checkbox"===e?.type?Se.fromJSON(e):null,write:!0}})],ze.prototype,"filterAuthoringInfo",void 0),(0,s._)([(0,c.qq)({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],ze.prototype,"id",void 0),(0,s._)([(0,c.qq)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],ze.prototype,"name",void 0),ze=De=(0,s._)([(0,f.c)("esri.layers.support.BuildingFilter")],ze);const ke=ze;let Ue=class extends pe.am{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};(0,s._)([(0,c.qq)({type:String})],Ue.prototype,"fieldName",void 0),(0,s._)([(0,c.qq)({type:String})],Ue.prototype,"modelName",void 0),(0,s._)([(0,c.qq)({type:String})],Ue.prototype,"label",void 0),(0,s._)([(0,c.qq)({type:Number})],Ue.prototype,"min",void 0),(0,s._)([(0,c.qq)({type:Number})],Ue.prototype,"max",void 0),(0,s._)([(0,c.qq)({json:{read:e=>Array.isArray(e)&&(e.every((e=>"string"==typeof e))||e.every((e=>"number"==typeof e)))?e.slice():null}})],Ue.prototype,"mostFrequentValues",void 0),(0,s._)([(0,c.qq)({type:[Number]})],Ue.prototype,"subLayerIds",void 0),Ue=(0,s._)([(0,f.c)("esri.layers.support.BuildingFieldStatistics")],Ue);let Ke=class extends(S.c.LoadableMixin((0,F.g)(pe.am))){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(p.c.getLogger(this).error("building summary statistics are not loaded"),null)}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),Promise.resolve(this)}async _fetchService(e){const t=(await(0,b.c)(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(t,{origin:"service"})}};(0,s._)([(0,c.qq)({constructOnly:!0,type:String})],Ke.prototype,"url",void 0),(0,s._)([(0,c.qq)({readOnly:!0,type:[Ue],json:{read:{source:"summary"}}})],Ke.prototype,"fields",null),Ke=(0,s._)([(0,f.c)("esri.layers.support.BuildingSummaryStatistics")],Ke);const He=Ke;var Je=r(69204);const Ve=o.c.ofType(ke),We=(0,a.ct)(ee.sublayersProperty),Ze=We.json?.origins;Ze&&(Ze["web-scene"]={type:[J],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},Ze["portal-item"]={type:[J],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}});let $e=class extends((0,ae.G6)((0,re.u)((0,oe.Y)((0,ie.K)((0,ne.I)((0,u.U)((0,se.G)((0,te.C)(g.c))))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new i.c({getCollections:()=>[this.sublayers],getChildrenFunction:e=>"building-group"===e.type?e.sublayers:null}),this.sublayers=null,this._sublayerOverrides=null,this.filters=new Ve,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.legendEnabled=!0,this.type="building-scene"}normalizeCtorArgs(e){return"string"==typeof e?{url:e}:e??{}}destroy(){this.allSublayers.destroy()}readSublayers(e,t,r){const s=ee.readSublayers(e,t,r);return ee.forEachSublayer(s,(e=>e.layer=this)),this._sublayerOverrides&&(this.applySublayerOverrides(s,this._sublayerOverrides),this._sublayerOverrides=null),s}applySublayerOverrides(e,{overrides:t,context:r}){ee.forEachSublayer(e,(e=>e.read(t.get(e.id),r)))}readSublayerOverrides(e,t){const r=new Map;for(const s of e)null!=s&&"object"==typeof s&&"number"==typeof s.id?r.set(s.id,s):t.messages?.push(new n.c("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:s}));return{overrides:r,context:t}}writeSublayerOverrides(e,t,r){const s=[];ee.forEachSublayer(this.sublayers,(e=>{const t=e.write({},r);Object.keys(t).length>1&&s.push(t)})),s.length>0&&(t.sublayers=s)}writeUnappliedOverrides(e,t){t.sublayers=[],e.overrides.forEach((e=>{t.sublayers.push((0,a.ct)(e))}))}write(e,t){return e=super.write(e,t),!t||"web-scene"!==t.origin&&"portal-item"!==t.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,t):this._sublayerOverrides&&this.writeUnappliedOverrides(this._sublayerOverrides,e)),e}read(e,t){if(super.read(e,t),t&&("web-scene"===t.origin||"portal-item"===t.origin)&&null!=e&&Array.isArray(e.sublayers)){const r=this.readSublayerOverrides(e.sublayers,t);this.sublayers?this.applySublayerOverrides(this.sublayers,r):this._sublayerOverrides=r}}readSummaryStatistics(e,t){if("string"==typeof t.statisticsHRef){const e=(0,d.kn)(this.parsedUrl?.path,t.statisticsHRef);return new He({url:e})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const t=null!=e?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(y.CE).then((()=>this._fetchService(t))).then((()=>this._fetchAssociatedFeatureService(t)));return this.addResolvingPromise(r),Promise.resolve(this)}loadAll(){return(0,l.A)(this,(e=>{ee.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)})),this.summaryStatistics&&e(this.summaryStatistics)}))}async saveAs(e,t){return this._debouncedSaveOperations(ae.UJ.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(ae.UJ.SAVE,e)}validateLayer(e){if(!e.layerType||"Building"!==e.layerType)throw new n.c("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}async _fetchAssociatedFeatureService(e){try{const{portalItem:t}=await(0,le.S)(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,customParameters:this.customParameters,apiKey:this.apiKey,signal:e});this.associatedFeatureServiceItem=t}catch(e){p.c.getLogger(this).warn("Associated feature service item could not be loaded",e)}}_validateElevationInfo(){const e=this.elevationInfo,t="Building scene layers";(0,Je.A$)(p.c.getLogger(this),(0,Je.Ez)(t,"absolute-height",e)),(0,Je.A$)(p.c.getLogger(this),(0,Je.W8)(t,e))}};(0,s._)([(0,c.qq)({type:["BuildingSceneLayer"]})],$e.prototype,"operationalLayerType",void 0),(0,s._)([(0,c.qq)({readOnly:!0})],$e.prototype,"allSublayers",void 0),(0,s._)([(0,c.qq)(We)],$e.prototype,"sublayers",void 0),(0,s._)([(0,h.E)("service","sublayers")],$e.prototype,"readSublayers",null),(0,s._)([(0,c.qq)({type:Ve,nonNullable:!0,json:{write:!0}})],$e.prototype,"filters",void 0),(0,s._)([(0,c.qq)({type:String,json:{write:!0}})],$e.prototype,"activeFilterId",void 0),(0,s._)([(0,c.qq)({readOnly:!0,type:He})],$e.prototype,"summaryStatistics",void 0),(0,s._)([(0,h.E)("summaryStatistics",["statisticsHRef"])],$e.prototype,"readSummaryStatistics",null),(0,s._)([(0,c.qq)({type:[String],json:{read:!1}})],$e.prototype,"outFields",void 0),(0,s._)([(0,c.qq)(E.m)],$e.prototype,"fullExtent",void 0),(0,s._)([(0,c.qq)(E.Uj)],$e.prototype,"legendEnabled",void 0),(0,s._)([(0,c.qq)({type:["show","hide","hide-children"]})],$e.prototype,"listMode",void 0),(0,s._)([(0,c.qq)((0,E.yo)(m.c))],$e.prototype,"spatialReference",void 0),(0,s._)([(0,c.qq)(E.Kg)],$e.prototype,"elevationInfo",null),(0,s._)([(0,c.qq)({json:{read:!1},readOnly:!0})],$e.prototype,"type",void 0),(0,s._)([(0,c.qq)()],$e.prototype,"associatedFeatureServiceItem",void 0),$e=(0,s._)([(0,f.c)("esri.layers.BuildingSceneLayer")],$e);const Xe=$e},87352:(e,t,r)=>{r.d(t,{c:()=>y});var s=r(41948),o=r(3856),i=r(14628),n=r(40504),a=r(1580),l=(r(9456),r(66360),r(72052),r(12552));const p=new i.O({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});let u=class extends((0,o.q)(n.am)){constructor(e){super(e),this.name=null,this.description=null,this.drawingTool=null,this.prototype=null,this.thumbnail=null}};(0,s._)([(0,a.qq)({json:{write:!0}})],u.prototype,"name",void 0),(0,s._)([(0,a.qq)({json:{write:!0}})],u.prototype,"description",void 0),(0,s._)([(0,a.qq)({json:{read:p.read,write:p.write}})],u.prototype,"drawingTool",void 0),(0,s._)([(0,a.qq)({json:{write:!0}})],u.prototype,"prototype",void 0),(0,s._)([(0,a.qq)({json:{write:!0}})],u.prototype,"thumbnail",void 0),u=(0,s._)([(0,l.c)("esri.layers.support.FeatureTemplate")],u);const y=u},79648:(e,t,r)=>{r.d(t,{c:()=>c});var s=r(41948),o=r(3856),i=r(40504),n=r(1580),a=(r(9456),r(66360),r(72052),r(33600)),l=r(12552),p=r(18996),u=r(89812),y=r(87352);let d=class extends((0,o.q)(i.am)){constructor(e){super(e),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(e){const t={};for(const r of Object.keys(e))t[r]=(0,u.h4)(e[r]);return t}writeDomains(e,t){const r={};for(const t of Object.keys(e))e[t]&&(r[t]=e[t]?.toJSON());t.domains=r}};(0,s._)([(0,n.qq)({json:{write:!0}})],d.prototype,"id",void 0),(0,s._)([(0,n.qq)({json:{write:!0}})],d.prototype,"name",void 0),(0,s._)([(0,n.qq)({json:{write:!0}})],d.prototype,"domains",void 0),(0,s._)([(0,a.E)("domains")],d.prototype,"readDomains",null),(0,s._)([(0,p.G)("domains")],d.prototype,"writeDomains",null),(0,s._)([(0,n.qq)({type:[y.c],json:{write:!0}})],d.prototype,"templates",void 0),d=(0,s._)([(0,l.c)("esri.layers.support.FeatureType")],d);const c=d},54712:(e,t,r)=>{r.d(t,{S:()=>y});var s=r(9456),o=r(48212);function i(e,t,r){return!!a(e,t,r)}function n(e,t,r){return a(e,t,r)}function a(e,t,r){return e&&e.hasOwnProperty(t)?e[t]:r}const l={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"};function p(e){const t=e?.supportedSpatialAggregationStatistics?.map((e=>e.toLowerCase()));return{envelope:!!t?.includes("envelopeaggregate"),centroid:!!t?.includes("centroidaggregate"),convexHull:!!t?.includes("convexhullaggregate")}}function u(e,t){const r=e?.supportedOperationsWithCacheHint?.map((e=>e.toLowerCase()));return!!r?.includes(t.toLowerCase())}function y(e,t){return{analytics:d(e),attachment:c(e),data:h(e),metadata:f(e),operations:m(e.capabilities,e,t),query:g(e,t),queryRelated:q(e),queryTopFeatures:v(e),editing:_(e)}}function d(e){return{supportsCacheHint:u(e.advancedQueryCapabilities,"queryAnalytics")}}function c(e){const t=e.attachmentProperties,r={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1,supportsCacheHint:u(e.advancedQueryCapabilities,"queryAttachments"),supportsResize:i(e,"supportsAttachmentsResizing",!1)};return t&&Array.isArray(t)&&t.forEach((e=>{const t=l[e.name];t&&(r[t]=!!e.isEnabled)})),r}function h(e){return{isVersioned:i(e,"isDataVersioned",!1),supportsAttachment:i(e,"hasAttachments",!1),supportsM:i(e,"hasM",!1),supportsZ:i(e,"hasZ",!1)}}function f(e){return{supportsAdvancedFieldProperties:i(e,"supportsFieldDescriptionProperty",!1)}}function m(e,t,r){const s=e?e.toLowerCase().split(",").map((e=>e.trim())):[],n=r?(0,o.K0)(r):null,a=s.includes(null!=n&&"MapServer"===n.serverType?"data":"query"),l=s.includes("editing")&&!t.datesInUnknownTimezone;let p=l&&s.includes("create"),u=l&&s.includes("delete"),y=l&&s.includes("update");const d=s.includes("changetracking"),c=t.advancedQueryCapabilities;return l&&!(p||u||y)&&(p=u=y=!0),{supportsCalculate:i(t,"supportsCalculate",!1),supportsTruncate:i(t,"supportsTruncate",!1),supportsValidateSql:i(t,"supportsValidateSql",!1),supportsAdd:p,supportsDelete:u,supportsEditing:l,supportsChangeTracking:d,supportsQuery:a,supportsQueryAnalytics:i(c,"supportsQueryAnalytic",!1),supportsQueryAttachments:i(c,"supportsQueryAttachments",!1),supportsQueryTopFeatures:i(c,"supportsTopFeaturesQuery",!1),supportsResizeAttachments:i(t,"supportsAttachmentsResizing",!1),supportsSync:s.includes("sync"),supportsUpdate:y,supportsExceedsLimitStatistics:i(t,"supportsExceedsLimitStatistics",!1),supportsAsyncConvert3D:i(t,"supportsAsyncConvert3D",!1)}}function g(e,t){const r=e.advancedQueryCapabilities,a=e.ownershipBasedAccessControlForFeatures,l=e.archivingInfo,y=e.currentVersion,d=t?.includes("MapServer"),c=!d||y>=(0,s.c)("mapserver-pbf-version-support"),h=(0,o.Wq)(t),f=new Set((e.supportedQueryFormats??"").split(",").map((e=>e.toLowerCase().trim())));return{supportsStatistics:i(r,"supportsStatistics",e.supportsStatistics),supportsPercentileStatistics:i(r,"supportsPercentileStatistics",!1),supportsSpatialAggregationStatistics:i(r,"supportsSpatialAggregationStatistics",!1),supportedSpatialAggregationStatistics:p(r),supportsCentroid:i(r,"supportsReturningGeometryCentroid",!1),supportsDistance:i(r,"supportsQueryWithDistance",!1),supportsDistinct:i(r,"supportsDistinct",e.supportsAdvancedQueries),supportsExtent:i(r,"supportsReturningQueryExtent",!1),supportsGeometryProperties:i(r,"supportsReturningGeometryProperties",!1),supportsHavingClause:i(r,"supportsHavingClause",!1),supportsOrderBy:i(r,"supportsOrderBy",e.supportsAdvancedQueries),supportsPagination:i(r,"supportsPagination",!1),supportsQuantization:i(e,"supportsCoordinatesQuantization",!1),supportsQuantizationEditMode:i(e,"supportsQuantizationEditMode",!1),supportsQueryGeometry:i(e,"supportsReturningQueryGeometry",!1),supportsResultType:i(r,"supportsQueryWithResultType",!1),supportsMaxRecordCountFactor:i(r,"supportsMaxRecordCountFactor",!1),supportsSqlExpression:i(r,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:i(e,"useStandardizedQueries",!1),supportsTopFeaturesQuery:i(r,"supportsTopFeaturesQuery",!1),supportsQueryByAnonymous:i(a,"allowAnonymousToQuery",!0),supportsQueryByOthers:i(a,"allowOthersToQuery",!0),supportsHistoricMoment:i(l,"supportsQueryWithHistoricMoment",!1),supportsFormatPBF:c&&f.has("pbf"),supportsDisjointSpatialRelationship:i(r,"supportsDisjointSpatialRel",!1),supportsCacheHint:i(r,"supportsQueryWithCacheHint",!1)||u(r,"query"),supportsDefaultSpatialReference:i(r,"supportsDefaultSR",!1),supportsCompactGeometry:h,supportsFullTextSearch:i(r,"supportsFullTextSearch",!1),maxRecordCountFactor:n(e,"maxRecordCountFactor",void 0),maxRecordCount:n(e,"maxRecordCount",void 0),standardMaxRecordCount:n(e,"standardMaxRecordCount",void 0),tileMaxRecordCount:n(e,"tileMaxRecordCount",void 0)}}function q(e){const t=e.advancedQueryCapabilities,r=i(t,"supportsAdvancedQueryRelated",!1);return{supportsPagination:i(t,"supportsQueryRelatedPagination",!1),supportsCount:r,supportsOrderBy:r,supportsCacheHint:u(t,"queryRelated")}}function v(e){return{supportsCacheHint:u(e.advancedQueryCapabilities,"queryTopFilter")}}function _(e){const t=e.ownershipBasedAccessControlForFeatures,r=e?e.advancedEditingCapabilities:void 0;return{supportsGeometryUpdate:i(e,"allowGeometryUpdates",!0),supportsGlobalId:i(e,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:i(e,"supportsReturnServiceEditsInSourceSR",!1),supportsRollbackOnFailure:i(e,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:i(e,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:i(e,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:i(t,"allowAnonymousToDelete",!0),supportsDeleteByOthers:i(t,"allowOthersToDelete",!0),supportsUpdateByAnonymous:i(t,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:i(t,"allowOthersToUpdate",!0),supportsAsyncApplyEdits:i(r,"supportsAsyncApplyEdits",!1),zDefault:n(e,"zDefault",void 0)}}},21012:(e,t,r)=>{r.d(t,{M:()=>o});var s=r(37924);function o(e,t,r){if(!r?.features||!r.hasZ)return;const o=(0,s.O)(r.geometryType,t,e.outSpatialReference);if(null!=o)for(const e of r.features)o(e.geometry)}},59500:(e,t,r)=>{r.d(t,{c:()=>v});var s,o=r(41948),i=r(60708),n=r(6444),a=r(14628),l=r(40504),p=r(62088),u=r(1580),y=(r(9456),r(66360),r(33600)),d=r(12552),c=r(18996),h=r(56156),f=r(6704),m=r(600);const g=new a.O({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let q=s=class extends l.am{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){const r=h.c.fromJSON(t.spatialReference),s=[];for(let t=0;t<e.length;t++){const o=e[t],i=n.c.fromJSON(o),a=o.geometry?.spatialReference;null==i.geometry||a||(i.geometry.spatialReference=r);const l=o.aggregateGeometries,p=i.aggregateGeometries;if(l&&null!=p)for(const e in p){const t=p[e],s=l[e],o=s?.spatialReference;null==t||o||(t.spatialReference=r)}s.push(i)}return s}writeGeometryType(e,t,r,s){if(e)return void g.write(e,t,r,s);const{features:o}=this;if(o)for(const e of o)if(null!=e?.geometry)return void g.write(e.geometry.type,t,r,s)}readQueryGeometry(e,t){if(!e)return null;const r=!!e.spatialReference,s=(0,f.h4)(e);return s&&!r&&t.spatialReference&&(s.spatialReference=h.c.fromJSON(t.spatialReference)),s}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:r}=this;if(r)for(const e of r)if(e&&null!=e.geometry&&e.geometry.spatialReference)return void(t.spatialReference=e.geometry.spatialReference.toJSON())}clone(){return new s(this.cloneProperties())}cloneProperties(){return(0,p.ct)({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(e){const t=this.write();if(t.features&&Array.isArray(e)&&e.length>0)for(let r=0;r<t.features.length;r++){const s=t.features[r];if(s.geometry){const t=e?.[r];s.geometry=t?.toJSON()||s.geometry}}return t}quantize(e){const{scale:[t,r],translate:[s,o]}=e,i=this.features,n=this._getQuantizationFunction(this.geometryType,(e=>Math.round((e-s)/t)),(e=>Math.round((o-e)/r)));for(let e=0,t=i.length;e<t;e++)n?.(i[e].geometry)||(i.splice(e,1),e--,t--);return this.transform=e,this}unquantize(){const{geometryType:e,features:t,transform:r}=this;if(!r)return this;const{translate:[s,o],scale:[i,n]}=r;let a=null,l=null;if(this.hasZ&&null!=r?.scale?.[2]){const{translate:[,,e],scale:[,,t]}=r;a=r=>r*t+e}if(this.hasM&&null!=r?.scale?.[3]){const{translate:[,,,e],scale:[,,,t]}=r;l=r=>null==r?r:r*t+e}const p=this._getHydrationFunction(e,(e=>e*i+s),(e=>o-e*n),a,l);for(const{geometry:e}of t)null!=e&&p&&p(e);return this.transform=null,this}_quantizePoints(e,t,r){let s,o;const i=[];for(let n=0,a=e.length;n<a;n++){const a=e[n];if(n>0){const e=t(a[0]),n=r(a[1]);e===s&&n===o||(i.push([e-s,n-o]),s=e,o=n)}else s=t(a[0]),o=r(a[1]),i.push([s,o])}return i.length>0?i:null}_getQuantizationFunction(e,t,r){return"point"===e?e=>(e.x=t(e.x),e.y=r(e.y),e):"polyline"===e||"polygon"===e?e=>{const s=(0,f.Cs)(e)?e.rings:e.paths,o=[];for(let e=0,i=s.length;e<i;e++){const i=s[e],n=this._quantizePoints(i,t,r);n&&o.push(n)}return o.length>0?((0,f.Cs)(e)?e.rings=o:e.paths=o,e):null}:"multipoint"===e?e=>{const s=this._quantizePoints(e.points,t,r);return s&&s.length>0?(e.points=s,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,r,s,o){return"point"===e?e=>{e.x=t(e.x),e.y=r(e.y),s&&(e.z=s(e.z))}:"polyline"===e||"polygon"===e?e=>{const i=(0,f.Cs)(e)?e.rings:e.paths;let n,a;for(let e=0,s=i.length;e<s;e++){const s=i[e];for(let e=0,o=s.length;e<o;e++){const o=s[e];e>0?(n+=o[0],a+=o[1]):(n=o[0],a=o[1]),o[0]=t(n),o[1]=r(a)}}if(s&&o)for(let e=0,t=i.length;e<t;e++){const t=i[e];for(let e=0,r=t.length;e<r;e++){const r=t[e];r[2]=s(r[2]),r[3]=o(r[3])}}else if(s)for(let e=0,t=i.length;e<t;e++){const t=i[e];for(let e=0,r=t.length;e<r;e++){const r=t[e];r[2]=s(r[2])}}else if(o)for(let e=0,t=i.length;e<t;e++){const t=i[e];for(let e=0,r=t.length;e<r;e++){const r=t[e];r[2]=o(r[2])}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax),s&&null!=e.zmax&&null!=e.zmin&&(e.zmax=s(e.zmax),e.zmin=s(e.zmin)),o&&null!=e.mmax&&null!=e.mmin&&(e.mmax=o(e.mmax),e.mmin=o(e.mmin))}:"multipoint"===e?e=>{const i=e.points;let n,a;for(let e=0,s=i.length;e<s;e++){const s=i[e];e>0?(n+=s[0],a+=s[1]):(n=s[0],a=s[1]),s[0]=t(n),s[1]=r(a)}if(s&&o)for(let e=0,t=i.length;e<t;e++){const t=i[e];t[2]=s(t[2]),t[3]=o(t[3])}else if(s)for(let e=0,t=i.length;e<t;e++){const t=i[e];t[2]=s(t[2])}else if(o)for(let e=0,t=i.length;e<t;e++){const t=i[e];t[2]=o(t[2])}}:null}};(0,o._)([(0,u.qq)({type:String,json:{write:!0}})],q.prototype,"displayFieldName",void 0),(0,o._)([(0,u.qq)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],q.prototype,"exceededTransferLimit",void 0),(0,o._)([(0,u.qq)({type:[n.c],json:{write:!0}})],q.prototype,"features",void 0),(0,o._)([(0,y.E)("features")],q.prototype,"readFeatures",null),(0,o._)([(0,u.qq)({type:[m.c],json:{write:!0}})],q.prototype,"fields",void 0),(0,o._)([(0,u.qq)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:g.read}}})],q.prototype,"geometryType",void 0),(0,o._)([(0,c.G)("geometryType")],q.prototype,"writeGeometryType",null),(0,o._)([(0,u.qq)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],q.prototype,"hasM",void 0),(0,o._)([(0,u.qq)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],q.prototype,"hasZ",void 0),(0,o._)([(0,u.qq)({types:i.Su,json:{write:!0}})],q.prototype,"queryGeometry",void 0),(0,o._)([(0,y.E)("queryGeometry")],q.prototype,"readQueryGeometry",null),(0,o._)([(0,u.qq)({type:h.c,json:{write:!0}})],q.prototype,"spatialReference",void 0),(0,o._)([(0,c.G)("spatialReference")],q.prototype,"writeSpatialReference",null),(0,o._)([(0,u.qq)({json:{write:!0}})],q.prototype,"transform",void 0),q=s=(0,o._)([(0,d.c)("esri.rest.support.FeatureSet")],q),q.prototype.toJSON.isDefaultToJSON=!0;const v=q}}]);