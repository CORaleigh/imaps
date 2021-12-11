(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[246],{191:function(t,e,r){"use strict";r.d(e,"a",(function(){return m}));var a=r(79),o=r(146),i=(r(97),r(102)),n=r(88),l=r(129),s=r(178),c=r(175),p=r(87),b=r(91),u=r(100),d=r(81),y=(r(84),r(82),r(83),r(80)),h=r(96),O=r(94);let j=0;const v=p.a.getLogger("esri.layers.Layer");let f=class extends(l.a.EventedMixin(Object(s.a)(c.a))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new h.a(-180,-90,180,90,O.a.WGS84),this.id=Date.now().toString(16)+"-layer-"+j++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=O.a.WGS84,this.title=null,this.type=null,this.url=null,this.visible=!0}static async fromArcGISServerUrl(t){const e="string"==typeof t?{url:t}:t,a=await r.e(225).then(r.bind(null,389));try{return await a.fromUrl(e)}catch(o){throw v.error("#fromArcGISServerUrl({ url: '"+e.url+"'})","Failed to create layer from arcgis server url",o),o}}static async fromPortalItem(t){const e="portalItem"in t?t:{portalItem:t},a=await r.e(141).then(r.bind(null,372));try{return await a.fromItem(e)}catch(i){const t=e&&e.portalItem,r=t&&t.id||"unset",a=t&&t.portal&&t.portal.url||o.a.portalUrl;throw v.error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+a+"', id: '"+r+"')",i),i}}initialize(){this.when().catch((t=>{var e,r;Object(b.l)(t)||p.a.getLogger(this.declaredClass).error("#load()",`Failed to load layer (title: '${null!=(e=this.title)?e:"no title"}', id: '${null!=(r=this.id)?r:"no id"}')`,{error:t})}))}destroy(){if(this.parent){const t=this,e=this.parent;"layers"in e&&e.layers.includes(t)?e.layers.remove(t):"tables"in e&&e.tables.includes(t)?e.tables.remove(t):"baseLayers"in e&&e.baseLayers.includes(t)?e.baseLayers.remove(t):"baseLayers"in e&&e.referenceLayers.includes(t)&&e.referenceLayers.remove(t)}}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){const t=this.url;return t?Object(u.K)(t):null}async fetchAttributionData(){const t=this.attributionDataUrl;if(this.hasAttributionData&&t)return(await Object(i.default)(t,{query:{f:"json"},responseType:"json"})).data;throw new n.a("layer:no-attribution-data","Layer does not have attribution data")}};Object(a.a)([Object(d.b)({type:String})],f.prototype,"attributionDataUrl",void 0),Object(a.a)([Object(d.b)({type:h.a})],f.prototype,"fullExtent",void 0),Object(a.a)([Object(d.b)({readOnly:!0})],f.prototype,"hasAttributionData",null),Object(a.a)([Object(d.b)({type:String})],f.prototype,"id",void 0),Object(a.a)([Object(d.b)({type:Boolean,nonNullable:!0})],f.prototype,"legendEnabled",void 0),Object(a.a)([Object(d.b)({type:["show","hide","hide-children"]})],f.prototype,"listMode",void 0),Object(a.a)([Object(d.b)({type:Number,range:{min:0,max:1},nonNullable:!0})],f.prototype,"opacity",void 0),Object(a.a)([Object(d.b)()],f.prototype,"parent",void 0),Object(a.a)([Object(d.b)({readOnly:!0})],f.prototype,"parsedUrl",null),Object(a.a)([Object(d.b)({type:Boolean})],f.prototype,"popupEnabled",void 0),Object(a.a)([Object(d.b)({type:Boolean})],f.prototype,"attributionVisible",void 0),Object(a.a)([Object(d.b)({type:O.a})],f.prototype,"spatialReference",void 0),Object(a.a)([Object(d.b)({type:String})],f.prototype,"title",void 0),Object(a.a)([Object(d.b)({type:String,readOnly:!0,json:{read:!1}})],f.prototype,"type",void 0),Object(a.a)([Object(d.b)()],f.prototype,"url",void 0),Object(a.a)([Object(d.b)({type:Boolean,nonNullable:!0})],f.prototype,"visible",void 0),f=Object(a.a)([Object(y.a)("esri.layers.Layer")],f);const m=f},977:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return u}));var a=r(79),o=r(88),i=r(299),n=r(236),l=r(81),s=(r(84),r(82),r(83),r(80)),c=r(191),p=r(347);let b=class extends(Object(p.a)(Object(i.a)(c.a))){constructor(t){super(t),this.resourceInfo=null,this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise(((t,e)=>{Object(n.b)((()=>{const t=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let r="Unsupported layer type";t&&(r+=" "+t),e(new o.a("layer:unsupported-layer-type",r,{layerType:t}))}))})))}read(t,e){const r={resourceInfo:t};null!=t.id&&(r.id=t.id),null!=t.title&&(r.title=t.title),super.read(r,e)}write(t){return Object.assign(t||{},this.resourceInfo,{id:this.id})}};Object(a.a)([Object(l.b)({readOnly:!0})],b.prototype,"resourceInfo",void 0),Object(a.a)([Object(l.b)({type:["show","hide"]})],b.prototype,"listMode",void 0),Object(a.a)([Object(l.b)({json:{read:!1},readOnly:!0,value:"unsupported"})],b.prototype,"type",void 0),b=Object(a.a)([Object(s.a)("esri.layers.UnsupportedLayer")],b);const u=b}}]);
//# sourceMappingURL=246.2e9613a5.chunk.js.map