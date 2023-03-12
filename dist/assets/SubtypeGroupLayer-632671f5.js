import{e as s,y as i,iP as S,iO as V,a as x,l as X,sa as ee,s8 as te,I as N,iK as M,w as re,af as F,h3 as se,aS as ie,rn as ne,nQ as P,J as _,ae as b,qY as ae,sb as U,io as q,h_ as Q,g1 as H,sc as oe,rp as le,q$ as pe,rq as ue,rr as de,s7 as ye,s6 as ce,qT as he,nP as be,ru as J,c3 as B,sd as fe,fS as ge,rM as me,r7 as z,e2 as ve,e0 as we,d_ as $e,aP as Fe,se as Se,s1 as Ie,iD as Oe,qN as je,iE as Ee,qO as Te,iF as _e,iG as Ce,iH as Le,iI as xe,iJ as Pe,x as qe,E as L,z as Ae,dr as De,a7 as Ge,eZ as Re,sf as ke,sg as Ve,it as Ne,h2 as Me,rc as Ue,sh as Qe,si as He,sj as Je,ne as Be,_ as ze,sk as Ze,sl as Ke,qP as Ye,sm as We,sn as Xe,so as et,sp as tt,sq as rt,sr as st,qQ as it,ro as nt,ss as at,qS as ot,kI as A,st as lt,fR as pt}from"./index-3baec1e8.js";let g=class extends X{constructor(){super(...arguments),this.code=null,this.defaultValues={},this.domains=null,this.name=null}readDomains(e){if(!e)return null;const t={};for(const r of Object.keys(e))t[r]=ee(e[r]);return t}writeDomains(e,t){var n;if(!e)return;const r={};for(const a of Object.keys(e))e[a]&&(r[a]=(n=e[a])==null?void 0:n.toJSON());t.domains=r}};s([i({type:Number,json:{write:!0}})],g.prototype,"code",void 0),s([i({type:Object,json:{write:!0}})],g.prototype,"defaultValues",void 0),s([i({json:{write:!0}})],g.prototype,"domains",void 0),s([S("domains")],g.prototype,"readDomains",null),s([V("domains")],g.prototype,"writeDomains",null),s([i({type:String,json:{write:!0}})],g.prototype,"name",void 0),g=s([x("esri.layers.support.Subtype")],g);const ut=g,dt=["charts","editingEnabled","formTemplate","labelsVisible","labelingInfo","legendEnabled","minScale","maxScale","opacity","popupEnabled","popupTemplate","renderer","subtypeCode","templates","title","visible"],Z={key:"type",base:fe,errorContext:"renderer",typeMap:{simple:P,"unique-value":ge,"class-breaks":me}},D=z(),G=te({types:Z});let yt=0;function O(e){const t=e.json.write;return typeof t=="object"?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function ct(e){return new P({symbol:ht(e)})}function ht(e){switch(e){case"point":case"multipoint":return $e.clone();case"polyline":return we.clone();case"polygon":case"multipatch":return ve.clone();default:return null}}function bt(e,t){return!!t&&(e==null?void 0:e.type)==="unique-value"&&typeof e.field=="string"&&e.field.toLowerCase()===t.toLowerCase()&&!e.field2&&!e.field3&&!e.valueExpression}function K(e,t){var r;return e==null?null:(r=t.subtypes)==null?void 0:r.find(n=>n.code===e)}function ft(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null}const n={},a=K(e,t);if(_(a)){const{defaultValues:o}=a;for(const p in o)n[p]=o[p]}return n[t.subtypeField]=e,new J({name:"New Feature",drawingTool:r,prototype:{attributes:n}})}const Y="esri.layers.support.SubtypeSublayer";let l=class extends N(M(re(Fe))){constructor(e){super(e),this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id=`${Date.now().toString(16)}-subtype-sublayer-${yt++}`,this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}get capabilities(){var e;return(e=this.parent)==null?void 0:e.capabilities}get effectiveCapabilities(){var e;return(e=this.parent)==null?void 0:e.effectiveCapabilities}get effectiveEditingEnabled(){const{parent:e}=this;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}get elevationInfo(){var e;return(e=this.parent)==null?void 0:e.elevationInfo}writeFieldOverrides(e,t,r){const{fields:n,parent:a}=this;let o;if(n){o=[];let p=0;n.forEach(({name:y,alias:c,editable:m,visible:v})=>{var j;if(!v)return;const d=(j=a==null?void 0:a.fields)==null?void 0:j.find(I=>I.name===y);if(!d)return;const f={name:y};let $=!1;c!==d.alias&&(f.alias=c,$=!0),m!==d.editable&&(f.editable=m,$=!0),o.push(f),$&&p++}),p===0&&o.length===n.length&&(o=null)}else o=F(e);o!=null&&o.length&&se(r,o,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,n=e==null?void 0:e.fields;if(!e||!(n!=null&&n.length))return null;const{subtypes:a,subtypeField:o}=e,p=a==null?void 0:a.find(v=>v.code===r),y=p==null?void 0:p.defaultValues,c=p==null?void 0:p.domains,m=[];for(const v of n){const d=v.clone(),{name:f}=d,$=t==null?void 0:t.find(E=>E.name===f);if(d.visible=!t||!!$,$){const{alias:E,editable:W}=$;E&&(d.alias=E),W===!1&&(d.editable=!1)}const j=(y==null?void 0:y[f])??null;d.defaultValue=f===o?r:j;const I=(c==null?void 0:c[f])??null;d.domain=f===o?null:I?I.type==="inherited"?d.domain:I.clone():null,m.push(d)}return m}get geometryType(){var e;return(e=this.parent)==null?void 0:e.geometryType}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get objectIdField(){var e;return this.parent||ie.getLogger(Y).error(w("objectIdField")),(e=this.parent)==null?void 0:e.objectIdField}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){ne(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&e.geometryType!=="mesh"?ct(e.geometryType):null}readRendererFromService(e,t,r){var y,c,m;if(t.type==="Table")return null;const n=(y=t.drawingInfo)==null?void 0:y.renderer,a=G(n,t,r);let o;const{subtypeCode:p}=this;if(p!=null&&bt(a,t.subtypeField)){const v=(c=a.uniqueValueInfos)==null?void 0:c.find(({value:d})=>(d=typeof d=="number"?String(d):d)===String(p));v&&(o=new P({symbol:v.symbol}))}else(a==null?void 0:a.type)!=="simple"||(m=a.visualVariables)!=null&&m.length||(o=a);return o}readRenderer(e,t,r){var o,p,y;const n=(p=(o=t==null?void 0:t.layerDefinition)==null?void 0:o.drawingInfo)==null?void 0:p.renderer;return n?((y=n.visualVariables)==null?void 0:y.some(c=>c.type!=="rotationInfo"))?void 0:G(n,t,r)||void 0:void 0}get spatialReference(){var e;return(e=this.parent)==null?void 0:e.spatialReference}readTemplatesFromService(e,t){return[ft(this.subtypeCode,t)]}readTitleFromService(e,t){const r=K(this.subtypeCode,t);return _(r)?r.name:null}get url(){var e;return(e=this.parent)==null?void 0:e.url}get userHasUpdateItemPrivileges(){var e;return!!((e=this.parent)!=null&&e.userHasUpdateItemPrivileges)}async addAttachment(e,t){const{parent:r}=this;if(!r)throw w("addAttachment");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new b("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");return r.addAttachment(e,t)}async updateAttachment(e,t,r){const{parent:n}=this;if(!n)throw w("updateAttachment");if(e.getAttribute(n.subtypeField)!==this.subtypeCode)throw new b("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");return n.updateAttachment(e,t,r)}async deleteAttachments(e,t){const{parent:r}=this;if(!r)throw w("deleteAttachments");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new b("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");return r.deleteAttachments(e,t)}async applyEdits(e,t){if(!this.parent)throw w("applyEdits");return this.parent.applyEdits(e,t)}createPopupTemplate(e){let t=this;const{parent:r,fields:n,title:a}=this;if(r){const{displayField:o,editFieldsInfo:p,objectIdField:y}=r;t={displayField:o,editFieldsInfo:p,fields:n,objectIdField:y,title:a}}return ae(t,e)}createQuery(){if(!this.parent)throw w("createQuery");const e=U(this.parent),t=`${this.parent.subtypeField}=${this.subtypeCode}`;return e.where=q(t,this.parent.definitionExpression),e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){return this._getLayerDomain(e)}hasUserOverrides(){return dt.some(e=>this.originIdOf(e)===Q.USER)}async queryAttachments(e,t){const r=await this.load();if(!r.parent)throw w("queryAttachments");const n=e.clone();return n.where=R(n.where,r.parent.subtypeField,r.subtypeCode),r.parent.queryAttachments(e,t)}async queryFeatures(e,t){const r=await this.load();if(!r.parent)throw w("queryFeatures");const n=H.from(e)??r.createQuery();return _(e)&&(n.where=R(n.where,r.parent.subtypeField,r.subtypeCode)),r.parent.queryFeatures(n,t)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};s([i({readOnly:!0,json:{read:!1}})],l.prototype,"capabilities",null),s([i({readOnly:!0,json:{read:!1}})],l.prototype,"effectiveCapabilities",null),s([i({json:{write:{ignoreOrigin:!0}}})],l.prototype,"charts",void 0),s([i({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],l.prototype,"editingEnabled",void 0),s([i({type:Boolean,readOnly:!0})],l.prototype,"effectiveEditingEnabled",null),s([i({readOnly:!0,json:{read:!1}})],l.prototype,"elevationInfo",null),s([i({readOnly:!0,json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],l.prototype,"fieldOverrides",void 0),s([V("fieldOverrides")],l.prototype,"writeFieldOverrides",null),s([i({...D.fields,readOnly:!0,json:{read:!1}})],l.prototype,"fields",null),s([i(D.fieldsIndex)],l.prototype,"fieldsIndex",void 0),s([i({type:oe,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],l.prototype,"formTemplate",void 0),s([i({type:String,readOnly:!0,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],l.prototype,"id",void 0),s([i({readOnly:!0,json:{read:!1}})],l.prototype,"geometryType",null),s([i({readOnly:!0,json:{read:!1}})],l.prototype,"type",void 0),s([i(O(F(le)))],l.prototype,"labelsVisible",void 0),s([i({type:[pe],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:ue},write:{ignoreOrigin:!0}}})],l.prototype,"labelingInfo",void 0),s([i({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],l.prototype,"layerType",void 0),s([i(O(F(de)))],l.prototype,"legendEnabled",void 0),s([i({type:["show","hide"]})],l.prototype,"listMode",void 0),s([i((()=>{const e=F(ye);return e.json.origins.service.read=!1,O(e)})())],l.prototype,"minScale",void 0),s([i((()=>{const e=F(ce);return e.json.origins.service.read=!1,O(e)})())],l.prototype,"maxScale",void 0),s([i({readOnly:!0})],l.prototype,"effectiveScaleRange",null),s([i({readOnly:!0,json:{read:!1}})],l.prototype,"objectIdField",null),s([i({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],l.prototype,"opacity",void 0),s([i()],l.prototype,"parent",void 0),s([i(O(F(he)))],l.prototype,"popupEnabled",void 0),s([i({type:be,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],l.prototype,"popupTemplate",void 0),s([i({readOnly:!0})],l.prototype,"defaultPopupTemplate",null),s([i({types:Z,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],l.prototype,"renderer",null),s([S("service","renderer",["drawingInfo.renderer","subtypeField","type"])],l.prototype,"readRendererFromService",null),s([S("renderer",["layerDefinition.drawingInfo.renderer"])],l.prototype,"readRenderer",null),s([i({readOnly:!0,json:{read:!1}})],l.prototype,"spatialReference",null),s([i({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],l.prototype,"subtypeCode",void 0),s([i({type:[J],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],l.prototype,"templates",void 0),s([S("service","templates",["geometryType","subtypeField","subtypes","type"])],l.prototype,"readTemplatesFromService",null),s([i({type:String,json:{write:{ignoreOrigin:!0}}})],l.prototype,"title",void 0),s([S("service","title",["subtypes"])],l.prototype,"readTitleFromService",null),s([i({readOnly:!0,json:{read:!1}})],l.prototype,"url",null),s([i({readOnly:!0})],l.prototype,"userHasUpdateItemPrivileges",null),s([i({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],l.prototype,"visible",void 0),l=s([x(Y)],l);const R=(e,t,r)=>{const n=new RegExp(`${t}=[0-9]`),a=`${t}=${r}`,o=B(e,"");return n.test(o)?o.replace(n,a):q(a,o)},w=e=>new b(`This sublayer must have a parent SubtypeGroupLayer in order to use ${e}`),T=l,h="SubtypeGroupLayer",gt="esri.layers.SubtypeGroupLayer";function k(e,t){return new b("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}const C=z();let u=class extends Se(Ie(Oe(je(Ee(Te(_e(Ce(Le(M(xe(Pe(N(pt))))))))))))){constructor(...e){super(...e),this._handles=new qe,this._sublayersCollectionChanged=!1,this._sublayerLookup=new Map,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.subtypes=null,this.sublayers=new(L.ofType(T)),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this.addHandles(Ae(()=>this.sublayers,(t,r)=>this._handleSublayersChange(t,r),De))}destroy(){var e;(e=this.source)==null||e.destroy(),this._handles=Ge(this._handles)}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){const t=_(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(Re).then(async()=>{if(!this.url)throw new b("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(this.layerId==null)throw new b("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(await this.createGraphicsSource(t))}).then(()=>this._setUserPrivileges(this.serviceItemId,e)).then(()=>ke(this,e));return this.addResolvingPromise(r),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&this.capabilities!=null&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return Ve(this)}get parsedUrl(){const e=Ne(this.url);return e!=null&&this.layerId!=null&&(e.path=Me(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e)}readTitleFromService(e,{name:t}){return this.url?Ue(this.url,t):t}async addAttachment(e,t){return Qe(this,e,t,h)}async updateAttachment(e,t,r){return He(this,e,t,r,h)}async applyEdits(e,t){return Je(this,e,t)}on(e,t){return super.on(e,t)}async createGraphicsSource(e){const{default:t}=await Be(ze(()=>import("./FeatureLayerSource-8afb40a8.js"),["assets/FeatureLayerSource-8afb40a8.js","assets/index-3baec1e8.js","assets/index-0be7f32f.css","assets/assetEditingSupport-2cebf928.js","assets/clientSideDefaults-c8c0df51.js","assets/QueryEngineCapabilities-42e44ded.js","assets/QueryTask-d40a405c.js","assets/executeForIds-adcb94fd.js"]),e);return new t({layer:this}).load({signal:e})}createQuery(){const e=U(this),t=this.sublayers.map(r=>r.subtypeCode);return e.where=q(`${this.subtypeField} IN (${t.join(",")})`,this.definitionExpression),e}async deleteAttachments(e,t){return Ze(this,e,t,h)}async fetchRecomputedExtents(e){return Ke(this,e,h)}getFieldDomain(e,t){return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}findSublayerForFeature(e){const t=this.fieldsIndex.get(this.subtypeField),r=e.attributes[t.name];return this._sublayerLookup.get(r)}loadAll(){return Ye(this,e=>{e(this.sublayers)})}async queryAttachments(e,t){return We(this,e,t,h)}async queryFeatures(e,t){const r=await this.load(),n=H.from(e)??r.createQuery(),a=B(n.outFields,[]);a.includes(this.subtypeField)||(a.push(this.subtypeField),n.outFields=a);const o=await r.source.queryFeatures(n,t);if(o!=null&&o.features)for(const p of o.features)p.layer=p.sourceLayer=this.findSublayerForFeature(p);return o}async queryObjectIds(e,t){return Xe(this,e,t,h)}async queryFeatureCount(e,t){return et(this,e,t,h)}async queryExtent(e,t){return tt(this,e,t,h)}async queryRelatedFeatures(e,t){return rt(this,e,t,h)}async queryRelatedFeaturesCount(e,t){return st(this,e,t,h)}write(e,t){var o;const{origin:r,layerContainerType:n,messages:a}=t;if(this.isTable){if(r==="web-scene"||r==="web-map"&&n!=="tables")return a==null||a.push(k(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&r==="web-map"&&n==="tables")return a==null||a.push(k(this,"using a non-table source cannot be written to tables in web maps")),null;return(o=this.sublayers)!=null&&o.length?super.write(e,t):(a==null||a.push(new b("web-document-write:invalid-property",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,{layer:this})),null)}serviceSupportsSpatialReference(e){return!!this.loaded&&it(this,e)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}async _initLayerProperties(e){var r;this._set("source",e);const{sourceJSON:t}=e;if(t&&(this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})),this.isTable)throw new b("subtype-grouplayer:unsupported-source","SubtypeGroupLayer cannot be created using a layer with table source");if(!((r=this.subtypes)!=null&&r.length))throw new b("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),nt(this.timeInfo,this.fieldsIndex)}async hasDataChanged(){return at(this)}_verifyFields(){var t,r;const e=((t=this.parsedUrl)==null?void 0:t.path)??"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||e.search(/\/FeatureServer\//i)!==-1||(r=this.fields)!=null&&r.some(n=>n.type==="geometry")||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_handleSublayersChange(e,t){t&&(t.forEach(r=>{r.parent=null}),this.handles.remove("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach(r=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),this._sublayersCollectionChanged=!1,this.handles.add([e.on("after-add",({item:r})=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),e.on("after-remove",({item:r})=>{r.parent=null,this._sublayerLookup.delete(r.subtypeCode)}),e.on("after-changes",()=>{this._sublayersCollectionChanged=!0})],"sublayers-owner"))}};s([i({readOnly:!0})],u.prototype,"createQueryVersion",null),s([i({readOnly:!0})],u.prototype,"editingEnabled",null),s([i({readOnly:!0})],u.prototype,"effectiveEditingEnabled",null),s([i({...C.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],u.prototype,"fields",void 0),s([i(C.fieldsIndex)],u.prototype,"fieldsIndex",void 0),s([i(ot)],u.prototype,"id",void 0),s([i({type:["show","hide","hide-children"]})],u.prototype,"listMode",void 0),s([i({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"]})],u.prototype,"operationalLayerType",void 0),s([i(C.outFields)],u.prototype,"outFields",void 0),s([i({readOnly:!0})],u.prototype,"parsedUrl",null),s([i()],u.prototype,"source",null),s([i({type:[ut],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],u.prototype,"subtypes",void 0),s([i({type:L.ofType(T),json:{origins:{service:{read:{source:"subtypes",reader:(e,t,r)=>{const n=e.map(({code:a})=>{const o=new T({subtypeCode:a});return o.read(t,r),o});return new(L.ofType(T))(n)}}}},name:"layers",write:{overridePolicy(e,t,r){const n=this.originOf("sublayers"),a=Q.PORTAL_ITEM;let o=!0;if(A(n)===a&&A(r.origin)>a){const p=e.some(y=>y.hasUserOverrides());o=this._sublayersCollectionChanged||p}return{enabled:o,ignoreOrigin:!0}}}}})],u.prototype,"sublayers",void 0),s([i({type:lt})],u.prototype,"timeInfo",void 0),s([i({json:{origins:{"portal-item":{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],u.prototype,"title",void 0),s([S("service","title",["name"])],u.prototype,"readTitleFromService",null),s([i({json:{read:!1}})],u.prototype,"type",void 0),u=s([x(gt)],u);const vt=u;export{vt as default};
