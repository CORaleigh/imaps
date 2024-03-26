"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[7752],{25228:(e,t,r)=>{r.d(t,{c:()=>m});var i,n=r(41948),s=r(40504),a=r(94360),l=r(1580),o=(r(9456),r(66360),r(72052),r(33600)),u=r(12552),c=r(18996),p=r(28484);let d=i=class extends s.am{static get allTime(){return y}static get empty(){return h}constructor(e){super(e),this.end=null,this.start=null}readEnd(e,t){return null!=t.end?new Date(t.end):null}writeEnd(e,t){t.end=e?.getTime()??null}get isAllTime(){return this.equals(i.allTime)}get isEmpty(){return this.equals(i.empty)}readStart(e,t){return null!=t.start?new Date(t.start):null}writeStart(e,t){t.start=e?.getTime()??null}clone(){return new i({end:this.end,start:this.start})}equals(e){if(!e)return!1;const t=this.start?.getTime()??this.start,r=this.end?.getTime()??this.end,i=e.start?.getTime()??e.start,n=e.end?.getTime()??e.end;return t===i&&r===n}expandTo(e,t=p.OX){if(this.isEmpty||this.isAllTime)return this.clone();let r=this.start;r&&(r=(0,a.aU)(r,e,t));let n=this.end;if(n){const r=(0,a.aU)(n,e,t);n=n.getTime()===r.getTime()?r:(0,a.g1)(r,1,e,t)}return new i({start:r,end:n})}intersection(e){if(!e)return this.clone();if(this.isEmpty||e.isEmpty)return i.empty;if(this.isAllTime)return e.clone();if(e.isAllTime)return this.clone();const t=this.start?.getTime()??-1/0,r=this.end?.getTime()??1/0,n=e.start?.getTime()??-1/0,s=e.end?.getTime()??1/0;let a,l;if(n>=t&&n<=r?a=n:t>=n&&t<=s&&(a=t),r>=n&&r<=s?l=r:s>=t&&s<=r&&(l=s),null!=a&&null!=l&&!isNaN(a)&&!isNaN(l)){const e=new i;return e.start=a===-1/0?null:new Date(a),e.end=l===1/0?null:new Date(l),e}return i.empty}offset(e,t,r=p.OX){if(this.isEmpty||this.isAllTime)return this.clone();const n=new i,{start:s,end:l}=this;return null!=s&&(n.start=(0,a.g1)(s,e,t,r)),null!=l&&(n.end=(0,a.g1)(l,e,t,r)),n}union(e){if(!e||e.isEmpty)return this.clone();if(this.isEmpty)return e.clone();if(this.isAllTime||e.isAllTime)return y.clone();const t=null!=this.start&&null!=e.start?new Date(Math.min(this.start.getTime(),e.start.getTime())):null,r=null!=this.end&&null!=e.end?new Date(Math.max(this.end.getTime(),e.end.getTime())):null;return new i({start:t,end:r})}};(0,n._)([(0,l.qq)({type:Date,json:{write:{allowNull:!0}}})],d.prototype,"end",void 0),(0,n._)([(0,o.E)("end")],d.prototype,"readEnd",null),(0,n._)([(0,c.G)("end")],d.prototype,"writeEnd",null),(0,n._)([(0,l.qq)({readOnly:!0,json:{read:!1}})],d.prototype,"isAllTime",null),(0,n._)([(0,l.qq)({readOnly:!0,json:{read:!1}})],d.prototype,"isEmpty",null),(0,n._)([(0,l.qq)({type:Date,json:{write:{allowNull:!0}}})],d.prototype,"start",void 0),(0,n._)([(0,o.E)("start")],d.prototype,"readStart",null),(0,n._)([(0,c.G)("start")],d.prototype,"writeStart",null),d=i=(0,n._)([(0,u.c)("esri.TimeExtent")],d);const y=new d,h=new d({start:void 0,end:void 0}),m=d},22156:(e,t,r)=>{r.d(t,{MR:()=>a,qm:()=>l});var i=r(41948),n=r(12552);let s=0;const a=e=>{let t=class extends e{constructor(...e){super(...e),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+s++})}};return t=(0,i._)([(0,n.c)("esri.core.Identifiable")],t),t},l=e=>{let t=class extends e{constructor(...e){super(...e),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:s++})}};return t=(0,i._)([(0,n.c)("esri.core.NumericIdentifiable")],t),t};let o=class extends(a(class{})){};o=(0,i._)([(0,n.c)("esri.core.Identifiable")],o)},71316:(e,t,r)=>{r.r(t),r.d(t,{default:()=>P});var i=r(41948),n=r(2600),s=r(20744),a=r(66360),l=r(53648),o=r(26496),u=r(10860),c=r(1580),p=(r(9456),r(72052),r(12552)),d=r(98472),y=r(62484),h=r(22080),m=r(95247),f=r(56156),g=r(62880),v=r(81436),_=r(38724),q=r(16660),w=r(28584),b=r(66576),x=r(98768),I=r(3116),S=r(21488),E=r(69204);let T=class extends((0,q.u)((0,b.Y)((0,x.K)((0,I.I)((0,o.U)((0,w.G)((0,_.C)(v.c)))))))){constructor(e){super(e),this.operationalLayerType="IntegratedMesh3DTilesLayer",this.spatialReference=new f.c({wkid:4326,vcsWkid:115700}),this.fullExtent=new m.c(-180,-90,180,90,this.spatialReference),this.url=null,this.type="integrated-mesh-3dtiles",this.path=null,this.minScale=0,this.maxScale=0}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}_verifyArray(e,t){if(!Array.isArray(e)||e.length<t)return!1;for(const t of e)if("number"!=typeof t)return!1;return!0}_initFullExtent(e){const t=e.root?.boundingVolume;if(!t)return;if(t.box){const e=t?.box;if(e[3]>7972671&&e[7]>7972671&&e[11]>7945940)return}const r=e.root?.transform,i=(0,y.Su)();if(t.region&&this._verifyArray(t.region,6)){const e=t.region,r=(0,l.UB)(e[0]),i=(0,l.UB)(e[1]),n=e[4],s=(0,l.UB)(e[2]),a=(0,l.UB)(e[3]),o=e[5];this.fullExtent=new m.c({xmin:r,ymin:i,zmin:n,xmax:s,ymax:a,zmax:o,spatialReference:this.spatialReference})}else if(t.sphere&&this._verifyArray(t.sphere,4)){const e=t.sphere,n=(0,y.WK)(e[0],e[1],e[2]),s=e[3]/Math.sqrt(3),a=(0,y.Su)();(0,d.f)(a,n,(0,y.WK)(-s,-s,-s));const l=(0,y.Su)();if((0,d.g)(l,n,(0,y.WK)(s,s,s)),r&&this._verifyArray(r,16)){const e=r;(0,d.e)(i,a,e),(0,d.c)(a,i),(0,d.e)(i,l,e),(0,d.c)(l,i)}(0,g.projectBuffer)(a,h.MJ,0,a,f.c.WGS84,0,1),(0,g.projectBuffer)(l,h.MJ,0,l,f.c.WGS84,0,1);const o=(0,y.Su)(),u=(0,y.Su)();(0,d.x)(o,a,l),(0,d.B)(u,a,l),this.fullExtent=new m.c({xmin:o[0],ymin:o[1],zmin:o[2],xmax:u[0],ymax:u[1],zmax:u[2],spatialReference:this.spatialReference})}else if(t.box&&this._verifyArray(t.box,12)){const e=t.box,i=(0,y.WK)(e[0],e[1],e[2]),n=(0,y.WK)(e[3],e[4],e[5]),s=(0,y.WK)(e[6],e[7],e[8]),a=(0,y.WK)(e[9],e[10],e[11]),l=[];for(let e=0;e<8;++e)l.push((0,y.Su)());if((0,d.g)(l[0],i,n),(0,d.g)(l[0],l[0],s),(0,d.g)(l[0],l[0],a),(0,d.y)(l[1],i,n),(0,d.g)(l[1],l[1],s),(0,d.g)(l[1],l[1],a),(0,d.g)(l[2],i,n),(0,d.y)(l[2],l[2],s),(0,d.g)(l[2],l[2],a),(0,d.y)(l[3],i,n),(0,d.y)(l[3],l[3],s),(0,d.g)(l[3],l[3],a),(0,d.g)(l[4],i,n),(0,d.g)(l[4],l[4],s),(0,d.y)(l[4],l[4],a),(0,d.y)(l[5],i,n),(0,d.g)(l[5],l[5],s),(0,d.y)(l[5],l[5],a),(0,d.g)(l[6],i,n),(0,d.y)(l[6],l[6],s),(0,d.y)(l[6],l[6],a),(0,d.y)(l[7],i,n),(0,d.y)(l[7],l[7],s),(0,d.y)(l[7],l[7],a),r&&this._verifyArray(r,16)){const e=r;for(let t=0;t<8;++t)(0,d.e)(l[t],l[t],e)}const o=(0,y.WK)(Number.MIN_VALUE,Number.MIN_VALUE,Number.MIN_VALUE),u=(0,y.WK)(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE);for(let e=0;e<8;++e)(0,g.projectBuffer)(l[e],h.MJ,0,l[e],f.c.WGS84,0,1),(0,d.x)(u,u,l[e]),(0,d.B)(o,o,l[e]);this.fullExtent=new m.c({xmin:u[0],ymin:u[1],zmin:u[2],xmax:o[0],ymax:o[1],zmax:o[2],spatialReference:this.spatialReference})}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=null!=e?e.signal:null;try{await this.loadFromPortal({supportedTypes:["3DTiles Service"],validateItem:e=>{if(e.typeKeywords?.includes("IntegratedMesh"))return!0;throw new s.c("portal:invalid-layer-item-type","Invalid layer item, expected '${expectedType}' ",{expectedType:"3DTiles Service containing IntegratedMesh"})}},e)}catch(e){(0,u.CE)(e)}if(this.url){const e=(0,n.c)(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t}).then((e=>{this._initFullExtent(e.data)}),(e=>{(0,u.CE)(e)}));await e}}async fetchAttributionData(){return this.load().then((()=>({})))}_validateElevationInfo(){const e=this.elevationInfo,t="Integrated mesh 3d tiles layers";(0,E.A$)(a.c.getLogger(this),(0,E.Ez)(t,"absolute-height",e)),(0,E.A$)(a.c.getLogger(this),(0,E.W8)(t,e))}};(0,i._)([(0,c.qq)({type:["IntegratedMesh3DTilesLayer"]})],T.prototype,"operationalLayerType",void 0),(0,i._)([(0,c.qq)({type:f.c})],T.prototype,"spatialReference",void 0),(0,i._)([(0,c.qq)({type:m.c})],T.prototype,"fullExtent",void 0),(0,i._)([(0,c.qq)(S.Kg)],T.prototype,"elevationInfo",null),(0,i._)([(0,c.qq)({type:["show","hide"]})],T.prototype,"listMode",void 0),(0,i._)([(0,c.qq)(S.qW)],T.prototype,"url",void 0),(0,i._)([(0,c.qq)({readOnly:!0})],T.prototype,"type",void 0),(0,i._)([(0,c.qq)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],T.prototype,"path",void 0),(0,i._)([(0,c.qq)({type:Number,json:{read:!1,origins:{"web-scene":{name:"layerDefinition.minScale",write:!0},"portal-item":{name:"layerDefinition.minScale",write:!0}}}})],T.prototype,"minScale",void 0),(0,i._)([(0,c.qq)({type:Number,json:{read:!1,origins:{"web-scene":{name:"layerDefinition.maxScale",write:!0},"portal-item":{name:"layerDefinition.maxScale",write:!0}}}})],T.prototype,"maxScale",void 0),T=(0,i._)([(0,p.c)("esri.layers.IntegratedMesh3DTilesLayer")],T);const P=T},81436:(e,t,r)=>{r.d(t,{c:()=>_});var i=r(41948),n=(r(60708),r(2600)),s=r(20744),a=r(77860),l=r(22156),o=r(95800),u=r(66360),c=r(10860),p=r(28176),d=r(1580),y=(r(9456),r(72052),r(12552)),h=r(6220),m=r(95247),f=r(56156);let g=0,v=class extends(a.c.EventedMixin((0,l.MR)(o.c))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new m.c(-180,-90,180,90,f.c.WGS84),this.id=Date.now().toString(16)+"-layer-"+g++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.persistenceEnabled=!1,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=f.c.WGS84,this.title=null,this.type=null,this.url=null,this.visible=!0}static async fromArcGISServerUrl(e){const t="string"==typeof e?{url:e}:e;return(await r.e(9232).then(r.bind(r,69232))).fromUrl(t)}static fromPortalItem(e){return async function(e){const t="portalItem"in e?e:{portalItem:e},{fromItem:i}=await r.e(2259).then(r.bind(r,12259));try{return await i(t)}catch(e){const r=t&&t.portalItem,i=r?.id||"unset",n=r&&r.portal&&r.portal.url||h.default.portalUrl;throw u.c.getLogger("esri.layers.support.fromPortalItem").error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+n+"', id: '"+i+"')",e),e}}(e)}initialize(){this.when().catch((e=>{(0,c.mA)(e)||u.c.getLogger(this).error("#load()",`Failed to load layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}')`,{error:e})}))}destroy(){const e=this.parent;if(e){const t=this;"layers"in e&&e.layers.includes(t)?e.layers.remove(t):"tables"in e&&e.tables.includes(t)?e.tables.remove(t):"baseLayers"in e&&e.baseLayers.includes(t)?e.baseLayers.remove(t):"referenceLayers"in e&&e.referenceLayers.includes(t)&&e.referenceLayers.remove(t),this._set("parent",null)}}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){return(0,p.as)(this.url)}async fetchAttributionData(){const e=this.attributionDataUrl;if(this.hasAttributionData&&e)return(await(0,n.c)(e,{query:{f:"json"},responseType:"json"})).data;throw new s.c("layer:no-attribution-data","Layer does not have attribution data")}};(0,i._)([(0,d.qq)({type:String})],v.prototype,"attributionDataUrl",void 0),(0,i._)([(0,d.qq)({type:m.c})],v.prototype,"fullExtent",void 0),(0,i._)([(0,d.qq)({readOnly:!0})],v.prototype,"hasAttributionData",null),(0,i._)([(0,d.qq)({type:String,clonable:!1})],v.prototype,"id",void 0),(0,i._)([(0,d.qq)({type:Boolean,nonNullable:!0})],v.prototype,"legendEnabled",void 0),(0,i._)([(0,d.qq)({type:["show","hide","hide-children"]})],v.prototype,"listMode",void 0),(0,i._)([(0,d.qq)({type:Number,range:{min:0,max:1},nonNullable:!0})],v.prototype,"opacity",void 0),(0,i._)([(0,d.qq)({clonable:!1})],v.prototype,"parent",void 0),(0,i._)([(0,d.qq)({readOnly:!0})],v.prototype,"parsedUrl",null),(0,i._)([(0,d.qq)({type:Boolean,readOnly:!0})],v.prototype,"persistenceEnabled",void 0),(0,i._)([(0,d.qq)({type:Boolean})],v.prototype,"popupEnabled",void 0),(0,i._)([(0,d.qq)({type:Boolean})],v.prototype,"attributionVisible",void 0),(0,i._)([(0,d.qq)({type:f.c})],v.prototype,"spatialReference",void 0),(0,i._)([(0,d.qq)({type:String})],v.prototype,"title",void 0),(0,i._)([(0,d.qq)({readOnly:!0,json:{read:!1}})],v.prototype,"type",void 0),(0,i._)([(0,d.qq)()],v.prototype,"url",void 0),(0,i._)([(0,d.qq)({type:Boolean,nonNullable:!0})],v.prototype,"visible",void 0),v=(0,i._)([(0,y.c)("esri.layers.Layer")],v);const _=v},38724:(e,t,r)=>{r.d(t,{C:()=>a});var i=r(41948),n=r(1580),s=(r(9456),r(66360),r(72052),r(12552));const a=e=>{let t=class extends e{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):"portalItem"in this?this.portalItem?.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return(0,i._)([(0,n.qq)({type:String})],t.prototype,"apiKey",null),t=(0,i._)([(0,s.c)("esri.layers.mixins.APIKeyMixin")],t),t}},16660:(e,t,r)=>{r.d(t,{u:()=>o});var i=r(41948),n=r(66360),s=r(1580),a=(r(9456),r(72052),r(12552)),l=r(48212);const o=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,l.K0)(this.url);if(null!=e&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,l.oR)(e,n.c.getLogger(this)))}};return(0,i._)([(0,s.qq)()],t.prototype,"title",null),(0,i._)([(0,s.qq)({type:String})],t.prototype,"url",null),t=(0,i._)([(0,a.c)("esri.layers.mixins.ArcGISService")],t),t}},28584:(e,t,r)=>{r.d(t,{G:()=>a});var i=r(41948),n=r(1580),s=(r(9456),r(66360),r(72052),r(12552));const a=e=>{let t=class extends e{constructor(){super(...arguments),this.customParameters=null}};return(0,i._)([(0,n.qq)({type:Object,json:{write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0)})}}})],t.prototype,"customParameters",void 0),t=(0,i._)([(0,s.c)("esri.layers.mixins.CustomParametersMixin")],t),t}},98768:(e,t,r)=>{r.d(t,{K:()=>b});var i=r(41948),n=r(6220),s=r(47620),a=r(2600),l=r(40196),o=r(20744),u=r(66360),c=r(70680),p=r(10860),d=r(28176),y=r(1580),h=(r(9456),r(72052),r(33600)),m=r(12552),f=r(18996),g=r(71068),v=r(54872),_=r(9764),q=r(53039),w=r(46940);const b=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=(0,c.mG)(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new _.default({id:t.itemId,portal:r?.portal})}writePortalItem(e,t){e?.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem?.id)try{const{load:i}=await Promise.all([r.e(8828),r.e(4132)]).then(r.bind(r,94132));return(0,p.wp)(t),await i({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData,layerModuleTypeMap:e.layerModuleTypeMap},t)}catch(e){throw(0,p.mA)(e)||u.c.getLogger(this).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${e}`),e}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch((e=>((0,p.CE)(e),!0))))}async setUserPrivileges(e,t){if(!n.default.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(t);if(this.url)try{const{features:{edit:r,fullEdit:i},content:{updateItem:n}}=await this._fetchUserPrivileges(e,t);this._set("userHasEditingPrivileges",r),this._set("userHasFullEditingPrivileges",i),this._set("userHasUpdateItemPrivileges",n)}catch(e){(0,p.CE)(e)}}async _fetchUserPrivileges(e,t){let r=this.portalItem;if(!e||!r||!r.loaded||r.sourceUrl)return this._fetchFallbackUserPrivileges(t);const i=e===r.id;if(i&&r.portal.user)return(0,w.CI)(r);let n,a;if(i)n=r.portal.url;else try{n=await(0,g.mK)(this.url,t)}catch(e){(0,p.CE)(e)}if(!n||!(0,d.Cs)(n,r.portal.url))return this._fetchFallbackUserPrivileges(t);try{const e=null!=t?t.signal:null;a=await(s.id?.getCredential(`${n}/sharing`,{prompt:!1,signal:e}))}catch(e){(0,p.CE)(e)}if(!a)return{features:{edit:!0,fullEdit:!1},content:{updateItem:!1}};try{if(i?await r.reload():(r=new _.default({id:e,portal:{url:n}}),await r.load(t)),r.portal.user)return(0,w.CI)(r)}catch(e){(0,p.CE)(e)}return{features:{edit:!0,fullEdit:!1},content:{updateItem:!1}}}async _fetchFallbackUserPrivileges(e){let t=!0;try{t=await this._fetchUserHasEditingPrivileges(e)}catch(e){(0,p.CE)(e)}return{features:{edit:t,fullEdit:!1},content:{updateItem:!1}}}async _fetchUserHasEditingPrivileges(e){const t=this.url?s.id?.findCredential(this.url):null;if(!t)return!0;const r=x.credential===t?x.user:await this._fetchEditingUser(e);return x.credential=t,x.user=r,null==r?.privileges||r.privileges.includes("features:user:edit")}async _fetchEditingUser(e){const t=this.portalItem?.portal?.user;if(t)return t;const r=s.id.findServerInfo(this.url??"");if(!r?.owningSystemUrl)return null;const i=`${r.owningSystemUrl}/sharing/rest`,n=v.c.getDefault();if(n&&n.loaded&&(0,d.k7)(n.restUrl)===(0,d.k7)(i))return n.user;const o=`${i}/community/self`,u=null!=e?e.signal:null,c=await(0,l.aG)((0,a.c)(o,{authMode:"no-prompt",query:{f:"json"},signal:u}));return c.ok?q.c.fromJSON(c.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const r=t?.portal,i=this.portalItem?.id&&(this.portalItem.portal||v.c.getDefault());return r&&i&&!(0,d.kF)(i.restUrl,r.restUrl)?(t.messages&&t.messages.push(new o.c("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return(0,i._)([(0,y.qq)({type:_.default})],t.prototype,"portalItem",null),(0,i._)([(0,h.E)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),(0,i._)([(0,f.G)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),(0,i._)([(0,y.qq)({clonable:!1})],t.prototype,"resourceReferences",void 0),(0,i._)([(0,y.qq)({type:Boolean,readOnly:!0})],t.prototype,"userHasEditingPrivileges",void 0),(0,i._)([(0,y.qq)({type:Boolean,readOnly:!0})],t.prototype,"userHasFullEditingPrivileges",void 0),(0,i._)([(0,y.qq)({type:Boolean,readOnly:!0})],t.prototype,"userHasUpdateItemPrivileges",void 0),t=(0,i._)([(0,m.c)("esri.layers.mixins.PortalLayer")],t),t},x={credential:null,user:null}},3116:(e,t,r)=>{r.d(t,{I:()=>a});var i=r(41948),n=r(1580),s=(r(9456),r(66360),r(72052),r(12552));const a=e=>{let t=class extends e{constructor(){super(...arguments),this.minScale=0,this.maxScale=0}get effectiveScaleRange(){const e={minScale:this.minScale,maxScale:this.maxScale},t=this.parent;t&&"effectiveScaleRange"in t&&function(e,t){e.minScale=e.minScale>0?t.minScale>0?Math.min(e.minScale,t.minScale):e.minScale:t.minScale,e.maxScale=e.maxScale>0?t.maxScale>0?Math.max(e.maxScale,t.maxScale):e.maxScale:t.maxScale}(e,t.effectiveScaleRange);const r=this._get("effectiveScaleRange");return r&&r.minScale===e.minScale&&r.maxScale===e.maxScale?r:e}};return(0,i._)([(0,n.qq)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"minScale",void 0),(0,i._)([(0,n.qq)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"maxScale",void 0),(0,i._)([(0,n.qq)({readOnly:!0})],t.prototype,"effectiveScaleRange",null),t=(0,i._)([(0,s.c)("esri.layers.mixins.ScaleRangeLayer")],t),t}},69204:(e,t,r)=>{function i(e,t){return function(e,t){return t?.mode?t.mode:function(e){return e?o:u}(e).mode}(null!=e&&e.hasZ,t)}function n(e,t,r){return r&&r.mode!==t?`${e} only support ${t} elevation mode`:null}function s(e,t,r){return r?.mode===t?`${e} do not support ${t} elevation mode`:null}function a(e,t){return null!=t?.featureExpressionInfo&&"0"!==t.featureExpressionInfo.expression?`${e} do not support featureExpressionInfo`:null}function l(e,t){t&&e.warn(".elevationInfo=",t)}r.d(t,{A$:()=>l,Ez:()=>n,W8:()=>a,ay:()=>s,m6:()=>i}),r(24296),r(35764);const o={mode:"absolute-height",offset:0},u={mode:"on-the-ground",offset:null}}}]);