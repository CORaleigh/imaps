"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[7157],{22862:(e,t,r)=>{r.d(t,{Hg:()=>h,V7:()=>c,uD:()=>y});var s=r(92036),i=r(46791),o=r(1153);const n=new Set(["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"]);function a(e){return e instanceof s.Z}function l(e){return e instanceof i.Z?Object.keys(e.items):a(e)?(0,o.vw)(e).keys():e?Object.keys(e):[]}function p(e,t){return e instanceof i.Z?e.items[t]:e[t]}function u(e){return e?e.declaredClass:null}function d(e,t){const r=e.diff;if(r&&"function"==typeof r)return r(e,t);const s=l(e),i=l(t);if(0===s.length&&0===i.length)return;if(!s.length||!i.length||function(e,t){return!(!Array.isArray(e)||!Array.isArray(t))&&e.length!==t.length}(e,t))return{type:"complete",oldValue:e,newValue:t};const o=i.filter((e=>!s.includes(e))),y=s.filter((e=>!i.includes(e))),c=s.filter((r=>i.includes(r)&&p(e,r)!==p(t,r))).concat(o,y).sort(),h=u(e);if(h&&n.has(h)&&c.length)return{type:"complete",oldValue:e,newValue:t};let f;const b=a(e)&&a(t);for(const s of c){const i=p(e,s),o=p(t,s);let n;if((b||"function"!=typeof i&&"function"!=typeof o)&&i!==o&&(null!=i||null!=o)){if(r&&r[s]&&"function"==typeof r[s])n=r[s]?.(i,o);else if(i instanceof Date&&o instanceof Date){if(i.getTime()===o.getTime())continue;n={type:"complete",oldValue:i,newValue:o}}else n="object"==typeof i&&"object"==typeof o&&u(i)===u(o)?d(i,o):{type:"complete",oldValue:i,newValue:o};null!=n&&(null!=f?f.diff[s]=n:f={type:"partial",diff:{[s]:n}})}}return f}function y(e,t){if(null==e)return!1;const r=t.split(".");let s=e;for(const e of r){if("complete"===s.type)return!0;if("partial"!==s.type)return!1;{const t=s.diff[e];if(!t)return!1;s=t}}return!0}function c(e,t){for(const r of t)if(y(e,r))return!0;return!1}function h(e,t){if("function"!=typeof e&&"function"!=typeof t&&(null!=e||null!=t))return null==e||null==t||"object"==typeof e&&"object"==typeof t&&u(e)!==u(t)?{type:"complete",oldValue:e,newValue:t}:d(e,t)}},20697:(e,t,r)=>{r.r(t),r.d(t,{default:()=>we});var s=r(43697),i=r(2368),o=r(46791),n=r(20102),a=r(68668),l=r(16453),p=r(95330),u=r(17445),d=r(42033),y=r(17452),c=r(5600),h=(r(75215),r(67676),r(80442),r(71715)),f=r(52011),b=r(31263),g=r(87085),m=r(54295),v=r(17287),w=r(71612),C=r(17017),S=r(66361),_=r(25113),F=r(38009),A=r(16859),I=r(34760),T=r(72965),E=r(28294),O=r(66677),j=r(21506),x=r(45574),R=r(53518),P=r(69165),L=r(51773),D=r(16050),Q=(r(12501),r(28756),r(92271),r(72529),r(5499)),Z=r(84382),M=r(81571),V=(r(91423),r(92604)),G=r(10699),q=r(22974),k=r(83379),U=r(78286),H=r(30556),z=r(63213),N=r(90100),B=r(70082),$=r(54306),K=r(30707),W=r(14165),J=r(32163),Y=r(28412);const X=["charts","editingEnabled","formTemplate","labelsVisible","labelingInfo","legendEnabled","minScale","maxScale","opacity","popupEnabled","popupTemplate","renderer","subtypeCode","templates","title","visible"],ee={key:"type",base:Q.Z,errorContext:"renderer",typeMap:{simple:Z.Z,"unique-value":M.Z,"class-breaks":D.Z}},te=(0,R.v)(),re=(0,z.d)({types:ee});let se=0;function ie(e){const t=e.json.write;return"object"==typeof t?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function oe(e){switch(e){case"point":case"multipoint":return Y.xA.clone();case"polyline":return Y.CJ.clone();case"polygon":case"multipatch":return Y.z3.clone();default:return null}}function ne(e,t){return null==e?null:t.subtypes?.find((t=>t.code===e))}function ae(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null}const s={},i=ne(e,t);if(null!=i){const{defaultValues:e}=i;for(const t in e)s[t]=e[t]}return s[t.subtypeField]=e,new B.Z({name:"New Feature",drawingTool:r,prototype:{attributes:s}})}const le="esri.layers.support.SubtypeSublayer";let pe=class extends((0,l.R)((0,i.J)((0,G.IG)(k.Z)))){constructor(e){super(e),this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id=`${Date.now().toString(16)}-subtype-sublayer-${se++}`,this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}get capabilities(){return this.parent?.capabilities}get effectiveCapabilities(){return this.parent?.effectiveCapabilities}get effectiveEditingEnabled(){const{parent:e}=this;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}get elevationInfo(){return this.parent?.elevationInfo}writeFieldOverrides(e,t,r){const{fields:s,parent:i}=this;let o;if(s){o=[];let e=0;s.forEach((({name:t,alias:r,editable:s,visible:n})=>{if(!n)return;const a=i?.fields?.find((e=>e.name===t));if(!a)return;const l={name:t};let p=!1;r!==a.alias&&(l.alias=r,p=!0),s!==a.editable&&(l.editable=s,p=!0),o.push(l),p&&e++})),0===e&&o.length===s.length&&(o=null)}else o=(0,q.d9)(e);o?.length&&(0,U.RB)(r,o,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,s=e?.fields;if(!e||!s?.length)return null;const{subtypes:i,subtypeField:o}=e,n=i?.find((e=>e.code===r)),a=n?.defaultValues,l=n?.domains,p=[];for(const e of s){const s=e.clone(),{name:i}=s,n=t?.find((e=>e.name===i));if(s.visible=!t||!!n,n){const{alias:e,editable:t}=n;e&&(s.alias=e),!1===t&&(s.editable=!1)}const u=a?.[i]??null;s.defaultValue=i===o?r:u;const d=l?.[i]??null;s.domain=i===o?null:d?"inherited"===d.type?s.domain:d.clone():null,p.push(s)}return p}get floorInfo(){return this.parent?.floorInfo}get geometryType(){return this.parent?.geometryType}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get objectIdField(){return this.parent||V.Z.getLogger(le).error(de("objectIdField")),this.parent?.objectIdField}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){(0,P.YN)(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&"mesh"!==e.geometryType?function(e){return new Z.Z({symbol:oe(e)})}(e.geometryType):null}readRendererFromService(e,t,r){if("Table"===t.type)return null;const s=t.drawingInfo?.renderer,i=re(s,t,r);let o;const{subtypeCode:n}=this;if(null!=n&&function(e,t){return!(!t||"unique-value"!==e?.type||"string"!=typeof e.field||e.field.toLowerCase()!==t.toLowerCase()||e.field2||e.field3||e.valueExpression)}(i,t.subtypeField)){const e=i.uniqueValueInfos?.find((({value:e})=>(e="number"==typeof e?String(e):e)===String(n)));e&&(o=new Z.Z({symbol:e.symbol}))}else"simple"!==i?.type||i.visualVariables?.length||(o=i);return o}readRenderer(e,t,r){const s=t?.layerDefinition?.drawingInfo?.renderer;if(!s)return;const i=s.visualVariables?.some((e=>"rotationInfo"!==e.type));return i?void 0:re(s,t,r)||void 0}get spatialReference(){return this.parent?.spatialReference}readTemplatesFromService(e,t){return[ae(this.subtypeCode,t)]}readTitleFromService(e,t){const r=ne(this.subtypeCode,t);return null!=r?r.name:null}get url(){return this.parent?.url}get userHasUpdateItemPrivileges(){return!!this.parent?.userHasUpdateItemPrivileges}async addAttachment(e,t){const{parent:r}=this;if(!r)throw de("addAttachment");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new n.Z("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");return r.addAttachment(e,t)}async updateAttachment(e,t,r){const{parent:s}=this;if(!s)throw de("updateAttachment");if(e.getAttribute(s.subtypeField)!==this.subtypeCode)throw new n.Z("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");return s.updateAttachment(e,t,r)}async deleteAttachments(e,t){const{parent:r}=this;if(!r)throw de("deleteAttachments");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new n.Z("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");return r.deleteAttachments(e,t)}async applyEdits(e,t){if(!this.parent)throw de("applyEdits");return this.parent.applyEdits(e,t)}createPopupTemplate(e){let t=this;const{parent:r,fields:s,title:i}=this;if(r){const{displayField:e,editFieldsInfo:o,objectIdField:n}=r;t={displayField:e,editFieldsInfo:o,fields:s,objectIdField:n,title:i}}return(0,J.eZ)(t,e)}createQuery(){if(!this.parent)throw de("createQuery");const e=(0,x.rP)(this.parent),t=`${this.parent.subtypeField}=${this.subtypeCode}`;return e.where=(0,d._)(t,this.parent.definitionExpression),e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){return this._getLayerDomain(e)}hasUserOverrides(){return X.some((e=>this.originIdOf(e)===b.s3.USER))}async queryAttachments(e,t){const r=await this.load();if(!r.parent)throw de("queryAttachments");const s=e.clone();return s.where=ue(s.where,r.parent.subtypeField,r.subtypeCode),r.parent.queryAttachments(e,t)}async queryFeatures(e,t){const r=await this.load();if(!r.parent)throw de("queryFeatures");const s=W.Z.from(e)??r.createQuery();return null!=e&&(s.where=ue(s.where,r.parent.subtypeField,r.subtypeCode)),r.parent.queryFeatures(s,t)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};(0,s._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],pe.prototype,"capabilities",null),(0,s._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],pe.prototype,"effectiveCapabilities",null),(0,s._)([(0,c.Cb)({json:{write:{ignoreOrigin:!0}}})],pe.prototype,"charts",void 0),(0,s._)([(0,c.Cb)({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],pe.prototype,"editingEnabled",void 0),(0,s._)([(0,c.Cb)({type:Boolean,readOnly:!0})],pe.prototype,"effectiveEditingEnabled",null),(0,s._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],pe.prototype,"elevationInfo",null),(0,s._)([(0,c.Cb)({json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],pe.prototype,"fieldOverrides",void 0),(0,s._)([(0,H.c)("fieldOverrides")],pe.prototype,"writeFieldOverrides",null),(0,s._)([(0,c.Cb)({...te.fields,readOnly:!0,json:{read:!1}})],pe.prototype,"fields",null),(0,s._)([(0,c.Cb)(te.fieldsIndex)],pe.prototype,"fieldsIndex",void 0),(0,s._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],pe.prototype,"floorInfo",null),(0,s._)([(0,c.Cb)({type:N.Z,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],pe.prototype,"formTemplate",void 0),(0,s._)([(0,c.Cb)({type:String,clonable:!1,readOnly:!0,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],pe.prototype,"id",void 0),(0,s._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],pe.prototype,"geometryType",null),(0,s._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],pe.prototype,"type",void 0),(0,s._)([(0,c.Cb)(ie((0,q.d9)(j.iR)))],pe.prototype,"labelsVisible",void 0),(0,s._)([(0,c.Cb)({type:[$.Z],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:K.r},write:{ignoreOrigin:!0}}})],pe.prototype,"labelingInfo",void 0),(0,s._)([(0,c.Cb)({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],pe.prototype,"layerType",void 0),(0,s._)([(0,c.Cb)(ie((0,q.d9)(j.rn)))],pe.prototype,"legendEnabled",void 0),(0,s._)([(0,c.Cb)({type:["show","hide"]})],pe.prototype,"listMode",void 0),(0,s._)([(0,c.Cb)((()=>{const e=(0,q.d9)(j.rO);return e.json.origins.service.read=!1,ie(e)})())],pe.prototype,"minScale",void 0),(0,s._)([(0,c.Cb)((()=>{const e=(0,q.d9)(j.u1);return e.json.origins.service.read=!1,ie(e)})())],pe.prototype,"maxScale",void 0),(0,s._)([(0,c.Cb)({readOnly:!0})],pe.prototype,"effectiveScaleRange",null),(0,s._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],pe.prototype,"objectIdField",null),(0,s._)([(0,c.Cb)({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],pe.prototype,"opacity",void 0),(0,s._)([(0,c.Cb)({clonable:!1})],pe.prototype,"parent",void 0),(0,s._)([(0,c.Cb)(ie((0,q.d9)(j.C_)))],pe.prototype,"popupEnabled",void 0),(0,s._)([(0,c.Cb)({type:L.Z,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],pe.prototype,"popupTemplate",void 0),(0,s._)([(0,c.Cb)({readOnly:!0})],pe.prototype,"defaultPopupTemplate",null),(0,s._)([(0,c.Cb)({types:ee,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],pe.prototype,"renderer",null),(0,s._)([(0,h.r)("service","renderer",["drawingInfo.renderer","subtypeField","type"])],pe.prototype,"readRendererFromService",null),(0,s._)([(0,h.r)("renderer",["layerDefinition.drawingInfo.renderer"])],pe.prototype,"readRenderer",null),(0,s._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],pe.prototype,"spatialReference",null),(0,s._)([(0,c.Cb)({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],pe.prototype,"subtypeCode",void 0),(0,s._)([(0,c.Cb)({type:[B.Z],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],pe.prototype,"templates",void 0),(0,s._)([(0,h.r)("service","templates",["geometryType","subtypeField","subtypes","type"])],pe.prototype,"readTemplatesFromService",null),(0,s._)([(0,c.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],pe.prototype,"title",void 0),(0,s._)([(0,h.r)("service","title",["subtypes"])],pe.prototype,"readTitleFromService",null),(0,s._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],pe.prototype,"url",null),(0,s._)([(0,c.Cb)({readOnly:!0})],pe.prototype,"userHasUpdateItemPrivileges",null),(0,s._)([(0,c.Cb)({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],pe.prototype,"visible",void 0),pe=(0,s._)([(0,f.j)(le)],pe);const ue=(e,t,r)=>{const s=new RegExp(`${t}\\s*=\\s*\\d+`),i=`${t}=${r}`,o=e??"";return s.test(o)?o.replace(s,i):(0,d._)(i,o)},de=e=>new n.Z(`This sublayer must have a parent SubtypeGroupLayer in order to use ${e}`),ye=pe;var ce=r(76259),he=r(60199),fe=r(12259);const be="SubtypeGroupLayer";function ge(e,t){return new n.Z("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}const me=(0,R.v)();let ve=class extends((0,_.B)((0,S.o1)((0,w.h)((0,E.n)((0,T.M)((0,I.Q)((0,v.Y)((0,F.q)((0,A.I)((0,l.R)((0,C.N)((0,m.V)((0,i.J)(g.Z)))))))))))))){constructor(...e){super(...e),this._sublayersCollectionChanged=!1,this._sublayerLookup=new Map,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.sublayers=new(o.Z.ofType(ye)),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this._debouncedSaveOperations=(0,p.Ds)((async(e,t,s)=>{const{save:i,saveAs:o}=await Promise.all([r.e(6404),r.e(9238),r.e(3831)]).then(r.bind(r,32664));switch(e){case fe.x.SAVE:return i(this,t);case fe.x.SAVE_AS:return o(this,s,t)}})),this.addHandles((0,u.YP)((()=>this.sublayers),((e,t)=>this._handleSublayersChange(e,t)),u.Z_))}destroy(){this.source?.destroy()}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=null!=e?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(p.r9).then((async()=>{if(!this.url)throw new n.Z("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(null==this.layerId)throw new n.Z("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(await this.createGraphicsSource(t))})).then((()=>(0,x.nU)(this,"load",e)));return this.addResolvingPromise(r),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&null!=this.capabilities&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return(0,x.sX)(this)}get parsedUrl(){const e=(0,y.mN)(this.url);return null!=e&&null!=this.layerId&&(e.path=(0,y.v_)(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e)}readTitleFromService(e,{name:t}){return this.url?(0,O.a7)(this.url,t):t}async addAttachment(e,t){return(0,x.JD)(this,e,t,be)}async updateAttachment(e,t,r){return(0,x.Y5)(this,e,t,r,be)}async applyEdits(e,t){return(0,x.Jj)(this,e,t)}on(e,t){return super.on(e,t)}async createGraphicsSource(e){const{default:t}=await(0,p.Hl)(Promise.all([r.e(4599),r.e(9735),r.e(6882)]).then(r.bind(r,49379)),e);return new t({layer:this}).load({signal:e})}createQuery(){const e=(0,x.rP)(this),t=this.sublayers.map((e=>e.subtypeCode));return e.where=(0,d._)(`${this.subtypeField} IN (${t.join(",")})`,this.definitionExpression),e}async deleteAttachments(e,t){return(0,x.FV)(this,e,t,be)}async fetchRecomputedExtents(e){return(0,x.Ci)(this,e,be)}findSublayerForFeature(e){const t=this.fieldsIndex.get(this.subtypeField),r=e.attributes[t.name];return this.findSublayerForSubtypeCode(r)}findSublayerForSubtypeCode(e){return this._sublayerLookup.get(e)}getFieldDomain(e,t){return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}loadAll(){return(0,a.G)(this,(e=>{e(this.sublayers)}))}async queryAttachments(e,t){return(0,x.SU)(this,e,t,be)}async queryFeatures(e,t){const r=await this.load(),s=W.Z.from(e)??r.createQuery(),i=s.outFields??[];i.includes(this.subtypeField)||(i.push(this.subtypeField),s.outFields=i);const o=await r.source.queryFeatures(s,t);if(o?.features)for(const e of o.features)e.layer=e.sourceLayer=this.findSublayerForFeature(e);return o}async queryObjectIds(e,t){return(0,x.tD)(this,e,t,be)}async queryFeatureCount(e,t){return(0,x.VG)(this,e,t,be)}async queryExtent(e,t){return(0,x.KE)(this,e,t,be)}async queryRelatedFeatures(e,t){return(0,x.kp)(this,e,t,be)}async queryRelatedFeaturesCount(e,t){return(0,x.C9)(this,e,t,be)}async save(e){return this._debouncedSaveOperations(fe.x.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(fe.x.SAVE_AS,t,e)}write(e,t){const{origin:r,layerContainerType:s,messages:i}=t;if(this.isTable){if("web-scene"===r||"web-map"===r&&"tables"!==s)return i?.push(ge(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&"web-map"===r&&"tables"===s)return i?.push(ge(this,"using a non-table source cannot be written to tables in web maps")),null;return this.sublayers?.length?super.write(e,t):(i?.push(new n.Z("web-document-write:invalid-property",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,{layer:this})),null)}serviceSupportsSpatialReference(e){return!!this.loaded&&(0,he.D)(this,e)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}async _initLayerProperties(e){this._set("source",e);const{sourceJSON:t}=e;if(t&&(this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})),this.isTable)throw new n.Z("subtype-grouplayer:unsupported-source","SubtypeGroupLayer cannot be created using a layer with table source");if(!this.subtypes?.length)throw new n.Z("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),(0,P.UF)(this.timeInfo,this.fieldsIndex)}async hasDataChanged(){return(0,x.gG)(this)}_verifyFields(){const e=this.parsedUrl?.path??"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||-1!==e.search(/\/FeatureServer\//i)||this.fields?.some((e=>"geometry"===e.type))||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_handleSublayersChange(e,t){t&&(t.forEach((e=>{e.parent=null})),this.removeHandles("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach((e=>{e.parent=this,this._sublayerLookup.set(e.subtypeCode,e)})),this._sublayersCollectionChanged=!1,this.addHandles([e.on("after-add",(({item:e})=>{e.parent=this,this._sublayerLookup.set(e.subtypeCode,e)})),e.on("after-remove",(({item:e})=>{e.parent=null,this._sublayerLookup.delete(e.subtypeCode)})),e.on("after-changes",(()=>{this._sublayersCollectionChanged=!0}))],"sublayers-owner"))}};(0,s._)([(0,c.Cb)({readOnly:!0})],ve.prototype,"createQueryVersion",null),(0,s._)([(0,c.Cb)({readOnly:!0})],ve.prototype,"editingEnabled",null),(0,s._)([(0,c.Cb)({readOnly:!0})],ve.prototype,"effectiveEditingEnabled",null),(0,s._)([(0,c.Cb)({...me.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],ve.prototype,"fields",void 0),(0,s._)([(0,c.Cb)(me.fieldsIndex)],ve.prototype,"fieldsIndex",void 0),(0,s._)([(0,c.Cb)(j.id)],ve.prototype,"id",void 0),(0,s._)([(0,c.Cb)({type:["show","hide","hide-children"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],ve.prototype,"listMode",void 0),(0,s._)([(0,c.Cb)({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"],json:{origins:{"portal-item":{name:"layerType",write:{enabled:!0,ignoreOrigin:!0}}}}})],ve.prototype,"operationalLayerType",void 0),(0,s._)([(0,c.Cb)(me.outFields)],ve.prototype,"outFields",void 0),(0,s._)([(0,c.Cb)({readOnly:!0})],ve.prototype,"parsedUrl",null),(0,s._)([(0,c.Cb)({clonable:!1})],ve.prototype,"source",null),(0,s._)([(0,c.Cb)({type:o.Z.ofType(ye),json:{origins:{service:{read:{source:"subtypes",reader:(e,t,r)=>{const s=e.map((({code:e})=>{const s=new ye({subtypeCode:e});return s.read(t,r),s}));return new(o.Z.ofType(ye))(s)}}}},name:"layers",write:{overridePolicy(e,t,r){const s=this.originOf("sublayers"),i=b.s3.PORTAL_ITEM;let o=!0;if((0,b.M9)(s)===i&&(0,b.M9)(r.origin)>i){const t=e.some((e=>e.hasUserOverrides()));o=this._sublayersCollectionChanged||t}return{enabled:o,ignoreOrigin:!0}}}}})],ve.prototype,"sublayers",void 0),(0,s._)([(0,c.Cb)({type:ce.Z})],ve.prototype,"timeInfo",void 0),(0,s._)([(0,c.Cb)({json:{origins:{"portal-item":{write:{enabled:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],ve.prototype,"title",void 0),(0,s._)([(0,h.r)("service","title",["name"])],ve.prototype,"readTitleFromService",null),(0,s._)([(0,c.Cb)({json:{read:!1}})],ve.prototype,"type",void 0),ve=(0,s._)([(0,f.j)("esri.layers.SubtypeGroupLayer")],ve);const we=ve},54295:(e,t,r)=>{r.d(t,{V:()=>n});var s=r(43697),i=r(5600),o=(r(75215),r(67676),r(80442),r(52011));const n=e=>{let t=class extends e{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):"portalItem"in this?this.portalItem?.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return(0,s._)([(0,i.Cb)({type:String})],t.prototype,"apiKey",null),t=(0,s._)([(0,o.j)("esri.layers.mixins.APIKeyMixin")],t),t}},17287:(e,t,r)=>{r.d(t,{Y:()=>l});var s=r(43697),i=r(92604),o=r(5600),n=(r(75215),r(67676),r(80442),r(52011)),a=r(66677);const l=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,a.Qc)(this.url);if(null!=e&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,a.Nm)(e,i.Z.getLogger(this)))}};return(0,s._)([(0,o.Cb)()],t.prototype,"title",null),(0,s._)([(0,o.Cb)({type:String})],t.prototype,"url",null),t=(0,s._)([(0,n.j)("esri.layers.mixins.ArcGISService")],t),t}},17017:(e,t,r)=>{r.d(t,{N:()=>n});var s=r(43697),i=r(5600),o=(r(75215),r(67676),r(80442),r(52011));const n=e=>{let t=class extends e{constructor(){super(...arguments),this.customParameters=null}};return(0,s._)([(0,i.Cb)({type:Object,json:{write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0)})}}})],t.prototype,"customParameters",void 0),t=(0,s._)([(0,o.j)("esri.layers.mixins.CustomParametersMixin")],t),t}},34760:(e,t,r)=>{r.d(t,{Q:()=>v});var s=r(43697),i=r(92604),o=r(95330),n=r(5600),a=r(90578),l=(r(67676),r(80442),r(52011)),p=r(82960),u=r(46791),d=(r(66643),r(20102),r(26258),r(87538));const y=new u.Z,c=new WeakMap;function h(e){(function(e){return null!=e&&"object"==typeof e&&"refreshInterval"in e&&"refresh"in e})(e)&&y.push(new WeakRef(e))}function f(e,t){return Number.isFinite(e)&&Number.isFinite(t)?t<=0?e:f(t,e%t):0}let b=0,g=0;function m(){const e=Date.now();let t=!1;for(const r of y){const s=r.deref();s?s.refreshInterval&&e-(c.get(s)??0)+5>=6e4*s.refreshInterval&&(c.set(s,e),s.refresh(e)):t=!0}if(t)for(let e=y.length-1;e>=0;e--)y.at(e).deref()||y.removeAt(e)}(0,d.EH)((()=>{const e=Date.now();let t=0;for(const r of y){const s=r.deref();s&&(t=f(Math.round(6e4*s.refreshInterval),t),s.refreshInterval?c.get(s)||c.set(s,e):c.delete(s))}if(t!==g){if(g=t,clearInterval(b),0===g)return void(b=0);b=setInterval(m,g)}}));const v=e=>{let t=class extends e{constructor(...e){super(...e),this.refreshInterval=0,this.refreshTimestamp=0,this._debounceHasDataChanged=(0,o.Ds)((()=>this.hasDataChanged())),this.when().then((()=>{this.destroyed||h(this)}),(()=>{}))}destroy(){!function(e){const t=y.find((t=>t.deref()===e));t&&y.remove(t)}(this)}castRefreshInterval(e){return e>=.1?e:e<=0?0:.1}get refreshParameters(){return{_ts:this.refreshTimestamp||null}}refresh(e=Date.now()){(0,o.R8)(this._debounceHasDataChanged()).then((t=>{t&&this._set("refreshTimestamp",e),this.emit("refresh",{dataChanged:t})}),(e=>{i.Z.getLogger(this).error(e),this.emit("refresh",{dataChanged:!1,error:e})}))}async hasDataChanged(){return!0}get test(){const e=this;return{set refreshInterval(t){e._set("refreshInterval",t)}}}};return(0,s._)([(0,n.Cb)({type:Number,json:{write:!0,origins:{"web-scene":{write:{enabled:!0,layerContainerTypes:p.C}}}}})],t.prototype,"refreshInterval",void 0),(0,s._)([(0,a.p)("refreshInterval")],t.prototype,"castRefreshInterval",null),(0,s._)([(0,n.Cb)({readOnly:!0})],t.prototype,"refreshTimestamp",void 0),(0,s._)([(0,n.Cb)({readOnly:!0})],t.prototype,"refreshParameters",null),t=(0,s._)([(0,l.j)("esri.layers.mixins.RefreshableLayer")],t),t}},70082:(e,t,r)=>{r.d(t,{Z:()=>d});var s=r(43697),i=r(2368),o=r(35454),n=r(96674),a=r(5600),l=(r(75215),r(67676),r(80442),r(52011));const p=new o.X({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});let u=class extends((0,i.J)(n.wq)){constructor(e){super(e),this.name=null,this.description=null,this.drawingTool=null,this.prototype=null,this.thumbnail=null}};(0,s._)([(0,a.Cb)({json:{write:!0}})],u.prototype,"name",void 0),(0,s._)([(0,a.Cb)({json:{write:!0}})],u.prototype,"description",void 0),(0,s._)([(0,a.Cb)({json:{read:p.read,write:p.write}})],u.prototype,"drawingTool",void 0),(0,s._)([(0,a.Cb)({json:{write:!0}})],u.prototype,"prototype",void 0),(0,s._)([(0,a.Cb)({json:{write:!0}})],u.prototype,"thumbnail",void 0),u=(0,s._)([(0,l.j)("esri.layers.support.FeatureTemplate")],u);const d=u},56765:(e,t,r)=>{r.d(t,{Z:()=>u});var s,i=r(43697),o=r(46791),n=r(96674),a=r(5600),l=(r(75215),r(67676),r(80442),r(52011));let p=s=class extends n.wq{constructor(e){super(e),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new o.Z}clone(){return new s({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};(0,i._)([(0,a.Cb)({type:String,json:{write:!0}})],p.prototype,"floorField",void 0),(0,i._)([(0,a.Cb)({json:{read:!1,write:!1}})],p.prototype,"viewAllMode",void 0),(0,i._)([(0,a.Cb)({json:{read:!1,write:!1}})],p.prototype,"viewAllLevelIds",void 0),p=s=(0,i._)([(0,l.j)("esri.layers.support.LayerFloorInfo")],p);const u=p},54275:(e,t,r)=>{r.d(t,{h:()=>d});var s=r(80442),i=r(66677);function o(e,t,r){return!!a(e,t,r)}function n(e,t,r){return a(e,t,r)}function a(e,t,r){return e&&e.hasOwnProperty(t)?e[t]:r}const l={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"};function p(e){const t=e?.supportedSpatialAggregationStatistics?.map((e=>e.toLowerCase()));return{envelope:!!t?.includes("envelopeaggregate"),centroid:!!t?.includes("centroidaggregate"),convexHull:!!t?.includes("convexhullaggregate")}}function u(e,t){const r=e?.supportedOperationsWithCacheHint?.map((e=>e.toLowerCase()));return!!r?.includes(t.toLowerCase())}function d(e,t){return{analytics:y(e),attachment:c(e),data:h(e),metadata:f(e),operations:b(e.capabilities,e,t),query:g(e,t),queryRelated:m(e),queryTopFeatures:v(e),editing:w(e)}}function y(e){return{supportsCacheHint:u(e.advancedQueryCapabilities,"queryAnalytics")}}function c(e){const t=e.attachmentProperties,r={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1,supportsCacheHint:u(e.advancedQueryCapabilities,"queryAttachments"),supportsResize:o(e,"supportsAttachmentsResizing",!1)};return t&&Array.isArray(t)&&t.forEach((e=>{const t=l[e.name];t&&(r[t]=!!e.isEnabled)})),r}function h(e){return{isVersioned:o(e,"isDataVersioned",!1),supportsAttachment:o(e,"hasAttachments",!1),supportsM:o(e,"hasM",!1),supportsZ:o(e,"hasZ",!1)}}function f(e){return{supportsAdvancedFieldProperties:o(e,"supportsFieldDescriptionProperty",!1)}}function b(e,t,r){const s=e?e.toLowerCase().split(",").map((e=>e.trim())):[],n=r?(0,i.Qc)(r):null,a=s.includes(null!=n&&"MapServer"===n.serverType?"data":"query"),l=s.includes("editing")&&!t.datesInUnknownTimezone;let p=l&&s.includes("create"),u=l&&s.includes("delete"),d=l&&s.includes("update");const y=s.includes("changetracking"),c=t.advancedQueryCapabilities;return l&&!(p||u||d)&&(p=u=d=!0),{supportsCalculate:o(t,"supportsCalculate",!1),supportsTruncate:o(t,"supportsTruncate",!1),supportsValidateSql:o(t,"supportsValidateSql",!1),supportsAdd:p,supportsDelete:u,supportsEditing:l,supportsChangeTracking:y,supportsQuery:a,supportsQueryAnalytics:o(c,"supportsQueryAnalytic",!1),supportsQueryAttachments:o(c,"supportsQueryAttachments",!1),supportsQueryTopFeatures:o(c,"supportsTopFeaturesQuery",!1),supportsResizeAttachments:o(t,"supportsAttachmentsResizing",!1),supportsSync:s.includes("sync"),supportsUpdate:d,supportsExceedsLimitStatistics:o(t,"supportsExceedsLimitStatistics",!1),supportsAsyncConvert3D:o(t,"supportsAsyncConvert3D",!1)}}function g(e,t){const r=e.advancedQueryCapabilities,a=e.ownershipBasedAccessControlForFeatures,l=e.archivingInfo,d=e.currentVersion,y=t?.includes("MapServer"),c=!y||d>=(0,s.Z)("mapserver-pbf-version-support"),h=(0,i.M8)(t),f=new Set((e.supportedQueryFormats??"").split(",").map((e=>e.toLowerCase().trim())));return{supportsStatistics:o(r,"supportsStatistics",e.supportsStatistics),supportsPercentileStatistics:o(r,"supportsPercentileStatistics",!1),supportsSpatialAggregationStatistics:o(r,"supportsSpatialAggregationStatistics",!1),supportedSpatialAggregationStatistics:p(r),supportsCentroid:o(r,"supportsReturningGeometryCentroid",!1),supportsDistance:o(r,"supportsQueryWithDistance",!1),supportsDistinct:o(r,"supportsDistinct",e.supportsAdvancedQueries),supportsExtent:o(r,"supportsReturningQueryExtent",!1),supportsGeometryProperties:o(r,"supportsReturningGeometryProperties",!1),supportsHavingClause:o(r,"supportsHavingClause",!1),supportsOrderBy:o(r,"supportsOrderBy",e.supportsAdvancedQueries),supportsPagination:o(r,"supportsPagination",!1),supportsQuantization:o(e,"supportsCoordinatesQuantization",!1),supportsQuantizationEditMode:o(e,"supportsQuantizationEditMode",!1),supportsQueryGeometry:o(e,"supportsReturningQueryGeometry",!1),supportsResultType:o(r,"supportsQueryWithResultType",!1),supportsMaxRecordCountFactor:o(r,"supportsMaxRecordCountFactor",!1),supportsSqlExpression:o(r,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:o(e,"useStandardizedQueries",!1),supportsTopFeaturesQuery:o(r,"supportsTopFeaturesQuery",!1),supportsQueryByAnonymous:o(a,"allowAnonymousToQuery",!0),supportsQueryByOthers:o(a,"allowOthersToQuery",!0),supportsHistoricMoment:o(l,"supportsQueryWithHistoricMoment",!1),supportsFormatPBF:c&&f.has("pbf"),supportsDisjointSpatialRelationship:o(r,"supportsDisjointSpatialRel",!1),supportsCacheHint:o(r,"supportsQueryWithCacheHint",!1)||u(r,"query"),supportsDefaultSpatialReference:o(r,"supportsDefaultSR",!1),supportsCompactGeometry:h,supportsFullTextSearch:o(r,"supportsFullTextSearch",!1),maxRecordCountFactor:n(e,"maxRecordCountFactor",void 0),maxRecordCount:n(e,"maxRecordCount",void 0),standardMaxRecordCount:n(e,"standardMaxRecordCount",void 0),tileMaxRecordCount:n(e,"tileMaxRecordCount",void 0)}}function m(e){const t=e.advancedQueryCapabilities,r=o(t,"supportsAdvancedQueryRelated",!1);return{supportsPagination:o(t,"supportsQueryRelatedPagination",!1),supportsCount:r,supportsOrderBy:r,supportsCacheHint:u(t,"queryRelated")}}function v(e){return{supportsCacheHint:u(e.advancedQueryCapabilities,"queryTopFilter")}}function w(e){const t=e.ownershipBasedAccessControlForFeatures,r=e?e.advancedEditingCapabilities:void 0;return{supportsGeometryUpdate:o(e,"allowGeometryUpdates",!0),supportsGlobalId:o(e,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:o(e,"supportsReturnServiceEditsInSourceSR",!1),supportsRollbackOnFailure:o(e,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:o(e,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:o(e,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:o(t,"allowAnonymousToDelete",!0),supportsDeleteByOthers:o(t,"allowOthersToDelete",!0),supportsUpdateByAnonymous:o(t,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:o(t,"allowOthersToUpdate",!0),supportsAsyncApplyEdits:o(r,"supportsAsyncApplyEdits",!1),zDefault:n(e,"zDefault",void 0)}}},58333:(e,t,r)=>{r.d(t,{ET:()=>o,I4:()=>i,eG:()=>l,lF:()=>n,lj:()=>u,qP:()=>a,wW:()=>p});const s=[252,146,31,255],i={type:"esriSMS",style:"esriSMSCircle",size:6,color:s,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},o={type:"esriSLS",style:"esriSLSSolid",width:.75,color:s},n={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},a={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},l={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},p={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},u={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}}}]);