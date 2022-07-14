"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[2893,3091],{53283:(e,t,i)=>{i.d(t,{M:()=>f,e:()=>p,f:()=>l,i:()=>d,p:()=>m,r:()=>o,t:()=>s,w:()=>a});var r=i(92026),n=i(35995);function l(e,t){const i=t&&t.url&&t.url.path;if(e&&i&&(e=(0,n.hF)(e,i,{preserveProtocolRelative:!0}),t.portalItem&&t.readResourcePaths)){const i=(0,n.PF)(e,t.portalItem.itemUrl);u.test(i)&&t.readResourcePaths.push(t.portalItem.resourceFromPath(i).path)}return h(e,t&&t.portal)}function s(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f.YES;if(!e)return e;!(0,n.YP)(e)&&t&&t.blockedRelativeUrls&&t.blockedRelativeUrls.push(e);let r=(0,n.hF)(e);if(t){const i=t.verifyItemRelativeUrls&&t.verifyItemRelativeUrls.rootPath||t.url&&t.url.path;if(i){const l=h(i,t.portal);r=(0,n.PF)(h(r,t.portal),l,l),r!==e&&t.verifyItemRelativeUrls&&t.verifyItemRelativeUrls.writtenUrls.push(r)}}return r=p(r,t&&t.portal),(0,n.YP)(r)&&(r=(0,n.Fv)(r)),t?.resources&&t?.portalItem&&!(0,n.YP)(r)&&!(0,n.HK)(r)&&i===f.YES&&t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(r)}),r}function o(e,t,i){return l(e,i)}function a(e,t,i,r){const n=s(e,r);void 0!==n&&(t[i]=n)}const c=/\/items\/([^\/]+)\/resources\//,u=/^\.\/resources\//;function d(e){const t=(0,r.pC)(e)?e.match(c):null;return(0,r.pC)(t)?t[1]:null}function p(e,t){return t&&!t.isPortal&&t.urlKey&&t.customBaseUrl?(0,n.Ie)(e,`${t.urlKey}.${t.customBaseUrl}`,t.portalHostname):e}function h(e,t){if(!t||t.isPortal||!t.urlKey||!t.customBaseUrl)return e;const i=`${t.urlKey}.${t.customBaseUrl}`,r=(0,n.TI)();return(0,n.D6)(r,`${r.scheme}://${i}`)?(0,n.Ie)(e,t.portalHostname,i):(0,n.Ie)(e,i,t.portalHostname)}var f;!function(e){e[e.YES=0]="YES",e[e.NO=1]="NO"}(f||(f={}));const m=Object.freeze(Object.defineProperty({__proto__:null,fromJSON:l,toJSON:s,read:o,write:a,itemIdFromResourceUrl:d,ensureMainOnlineDomain:p,get MarkKeep(){return f}},Symbol.toStringTag,{value:"Module"}))},41691:(e,t,i)=>{i.d(t,{p:()=>c,r:()=>u});var r=i(27366),n=i(85015),l=i(100),s=i(49861),o=i(69912),a=i(61826);const c=e=>{let t=class extends e{destroy(){this.destroyed||(this._get("handles")?.destroy(),this._get("updatingHandles")?.destroy())}get handles(){return this._get("handles")||new l.Z}get updatingHandles(){return this._get("updatingHandles")||new a.t}};return(0,r._)([(0,s.Cb)({readOnly:!0})],t.prototype,"handles",null),(0,r._)([(0,s.Cb)({readOnly:!0})],t.prototype,"updatingHandles",null),t=(0,r._)([(0,o.j)("esri.core.HandleOwner")],t),t};let u=class extends(c(n.Z)){};u=(0,r._)([(0,o.j)("esri.core.HandleOwner")],u)},79056:(e,t,i)=>{i.d(t,{IG:()=>s});var r=i(27366),n=i(69912);let l=0;const s=e=>{let t=class extends e{constructor(){super(...arguments),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+l++})}};return t=(0,r._)([(0,n.j)("esri.core.Identifiable")],t),t};let o=class extends(s(class{})){};o=(0,r._)([(0,n.j)("esri.core.Identifiable")],o)},59896:(e,t,i)=>{function r(e){return 32+e.length}function n(e){if(!e)return 0;let t=32;for(const i in e)if(e.hasOwnProperty(i)){const n=e[i];switch(typeof n){case"string":t+=r(n);break;case"number":t+=16;break;case"boolean":t+=4}}return t}function l(e,t){return 32+e.length*t}var s;i.d(t,{Y8:()=>s,do:()=>l,f2:()=>n}),function(e){e[e.KILOBYTES=1024]="KILOBYTES",e[e.MEGABYTES=1048576]="MEGABYTES",e[e.GIGABYTES=1073741824]="GIGABYTES"}(s||(s={}))},61826:(e,t,i)=>{i.d(t,{t:()=>d});var r=i(27366),n=i(85015),l=i(100),s=i(92026),o=i(94172),a=i(99346),c=i(49861),u=i(69912);let d=class extends n.Z{constructor(){super(...arguments),this.updating=!1,this.handleId=0,this.handles=new l.Z,this.scheduleHandleId=0,this.pendingPromises=new Set}destroy(){this.removeAll(),this.handles.destroy()}add(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this._installWatch(e,t,i,o.YP)}addWhen(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this._installWatch(e,t,i,o.gx)}addOnCollectionChange(e,t){let{initial:i=!1,final:r=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const n=++this.handleId;return this.handles.add([(0,o.on)(e,"after-changes",this._createSyncUpdatingCallback(),o.Z_),(0,o.on)(e,"change",t,{onListenerAdd:i?e=>t({added:e.toArray(),removed:[]}):void 0,onListenerRemove:r?e=>t({added:[],removed:e.toArray()}):void 0})],n),{remove:()=>this.handles.remove(n)}}addPromise(e){if((0,s.Wi)(e))return e;const t=++this.handleId;this.handles.add({remove:()=>{this.pendingPromises.delete(e)&&(0!==this.pendingPromises.size||this.handles.has(p)||this._set("updating",!1))}},t),this.pendingPromises.add(e),this._set("updating",!0);const i=()=>this.handles.remove(t);return e.then(i,i),e}removeAll(){this.pendingPromises.clear(),this.handles.removeAll(),this._set("updating",!1)}_installWatch(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;const n=++this.handleId;i.sync||this._installSyncUpdatingWatch(e,n);const l=r(e,t,i);return this.handles.add(l,n),{remove:()=>this.handles.remove(n)}}_installSyncUpdatingWatch(e,t){const i=this._createSyncUpdatingCallback(),r=(0,o.YP)(e,i,{sync:!0,equals:()=>!1});return this.handles.add(r,t),r}_createSyncUpdatingCallback(){return()=>{this.handles.remove(p),++this.scheduleHandleId;const e=this.scheduleHandleId;this._get("updating")||this._set("updating",!0),this.handles.add((0,a.Os)((()=>{e===this.scheduleHandleId&&(this._set("updating",this.pendingPromises.size>0),this.handles.remove(p))})),p)}}};(0,r._)([(0,c.Cb)({readOnly:!0})],d.prototype,"updating",void 0),d=(0,r._)([(0,u.j)("esri.core.support.WatchUpdatingTracking")],d);const p=-42;var h;!function(e){e[e.NONE=0]="NONE",e[e.SYNC=1]="SYNC",e[e.INIT=2]="INIT"}(h||(h={}))},30651:(e,t,i)=>{i.d(t,{Z:()=>w});var r=i(27366),n=(i(59486),i(76200)),l=i(10064),s=i(91505),o=i(79056),a=i(54472),c=i(32718),u=i(66978),d=i(35995),p=i(49861),h=(i(63780),i(93169),i(25243),i(69912)),f=i(42265);const m=c.Z.getLogger("esri.layers.support.fromPortalItem");var y=i(53866),v=i(78952);let g=0,b=class extends(s.Z.EventedMixin((0,o.IG)(a.Z))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new y.Z(-180,-90,180,90,v.Z.WGS84),this.id=Date.now().toString(16)+"-layer-"+g++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=v.Z.WGS84,this.title=null,this.type=null,this.url=null,this.visible=!0}static async fromArcGISServerUrl(e){const t="string"==typeof e?{url:e}:e;return(await i.e(4650).then(i.bind(i,94650))).fromUrl(t)}static fromPortalItem(e){return async function(e){const t="portalItem"in e?e:{portalItem:e},r=await Promise.all([i.e(4226),i.e(8995),i.e(9803),i.e(3120)]).then(i.bind(i,43139));try{return await r.fromItem(t)}catch(n){const e=t&&t.portalItem,i=e&&e.id||"unset",r=e&&e.portal&&e.portal.url||f.Z.portalUrl;throw m.error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+r+"', id: '"+i+"')",n),n}}(e)}initialize(){this.when().catch((e=>{(0,u.D_)(e)||c.Z.getLogger(this.declaredClass).error("#load()",`Failed to load layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}')`,{error:e})}))}destroy(){if(this.parent){const e=this,t=this.parent;"layers"in t&&t.layers.includes(e)?t.layers.remove(e):"tables"in t&&t.tables.includes(e)?t.tables.remove(e):"baseLayers"in t&&t.baseLayers.includes(e)?t.baseLayers.remove(e):"baseLayers"in t&&t.referenceLayers.includes(e)&&t.referenceLayers.remove(e)}}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){const e=this.url;return e?(0,d.mN)(e):null}async fetchAttributionData(){const e=this.attributionDataUrl;if(this.hasAttributionData&&e)return(await(0,n.default)(e,{query:{f:"json"},responseType:"json"})).data;throw new l.Z("layer:no-attribution-data","Layer does not have attribution data")}};(0,r._)([(0,p.Cb)({type:String})],b.prototype,"attributionDataUrl",void 0),(0,r._)([(0,p.Cb)({type:y.Z})],b.prototype,"fullExtent",void 0),(0,r._)([(0,p.Cb)({readOnly:!0})],b.prototype,"hasAttributionData",null),(0,r._)([(0,p.Cb)({type:String,clonable:!1})],b.prototype,"id",void 0),(0,r._)([(0,p.Cb)({type:Boolean,nonNullable:!0})],b.prototype,"legendEnabled",void 0),(0,r._)([(0,p.Cb)({type:["show","hide","hide-children"]})],b.prototype,"listMode",void 0),(0,r._)([(0,p.Cb)({type:Number,range:{min:0,max:1},nonNullable:!0})],b.prototype,"opacity",void 0),(0,r._)([(0,p.Cb)({clonable:!1})],b.prototype,"parent",void 0),(0,r._)([(0,p.Cb)({readOnly:!0})],b.prototype,"parsedUrl",null),(0,r._)([(0,p.Cb)({type:Boolean})],b.prototype,"popupEnabled",void 0),(0,r._)([(0,p.Cb)({type:Boolean})],b.prototype,"attributionVisible",void 0),(0,r._)([(0,p.Cb)({type:v.Z})],b.prototype,"spatialReference",void 0),(0,r._)([(0,p.Cb)({type:String})],b.prototype,"title",void 0),(0,r._)([(0,p.Cb)({readOnly:!0,json:{read:!1}})],b.prototype,"type",void 0),(0,r._)([(0,p.Cb)()],b.prototype,"url",void 0),(0,r._)([(0,p.Cb)({type:Boolean,nonNullable:!0})],b.prototype,"visible",void 0),b=(0,r._)([(0,h.j)("esri.layers.Layer")],b);const w=b},29598:(e,t,i)=>{i.d(t,{I:()=>w});var r=i(27366),n=i(19545),l=i(76200),s=i(14921),o=i(10064),a=i(32718),c=i(92026),u=i(66978),d=i(35995),p=i(49861),h=(i(63780),i(93169),i(25243),i(38511)),f=i(69912),m=i(31201),y=i(70032),v=i(98995),g=i(79437);const b=a.Z.getLogger("esri.layers.mixins.PortalLayer"),w=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0}destroy(){this.portalItem?.destroy(),this.portalItem=null}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,i){if(t.itemId)return new v.default({id:t.itemId,portal:i&&i.portal})}writePortalItem(e,t){e&&e.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem&&this.portalItem.id)try{const r=await i.e(3388).then(i.bind(i,33388));return(0,u.k_)(t),await r.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},t)}catch(r){throw(0,u.D_)(r)||b.warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${r}`),r}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch((e=>((0,u.r9)(e),!0))))}async _fetchUserHasEditingPrivileges(e){const t=this.url?n.id?.findCredential(this.url):null;if(!t)return!0;const i=_.credential===t?_.user:await this._fetchEditingUser(e);return _.credential=t,_.user=i,(0,c.Wi)(i)||null==i.privileges||i.privileges.includes("features:user:edit")}async _fetchEditingUser(e){const t=this.portalItem?.portal?.user;if(t)return t;const i=n.id.findServerInfo(this.url);if(!i?.owningSystemUrl)return null;const r=`${i.owningSystemUrl}/sharing/rest`,o=y.Z.getDefault();if(o&&o.loaded&&(0,d.Fv)(o.restUrl)===(0,d.Fv)(r))return o.user;const a=`${r}/community/self`,u=(0,c.pC)(e)?e.signal:null,p=await(0,s.q6)((0,l.default)(a,{authMode:"no-prompt",query:{f:"json"},signal:u}));return p.ok?g.default.fromJSON(p.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const i=t&&t.portal,r=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||y.Z.getDefault());return i&&r&&!(0,d.tm)(r.restUrl,i.restUrl)?(t.messages&&t.messages.push(new o.Z("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return(0,r._)([(0,p.Cb)({type:v.default})],t.prototype,"portalItem",null),(0,r._)([(0,h.r)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),(0,r._)([(0,m.c)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),(0,r._)([(0,p.Cb)({clonable:!1})],t.prototype,"resourceReferences",void 0),(0,r._)([(0,p.Cb)({readOnly:!0})],t.prototype,"userHasEditingPrivileges",void 0),t=(0,r._)([(0,f.j)("esri.layers.mixins.PortalLayer")],t),t},_={credential:null,user:null}},59068:(e,t,i)=>{i.d(t,{Z:()=>u});var r,n=i(27366),l=i(46784),s=i(49861),o=(i(63780),i(93169),i(25243)),a=i(69912);let c=r=class extends l.wq{constructor(e){super(e),this.cols=null,this.level=0,this.levelValue=null,this.origin=null,this.resolution=0,this.rows=null,this.scale=0}clone(){return new r({cols:this.cols,level:this.level,levelValue:this.levelValue,resolution:this.resolution,rows:this.rows,scale:this.scale})}};(0,n._)([(0,s.Cb)({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],c.prototype,"cols",void 0),(0,n._)([(0,s.Cb)({type:o.z8,json:{write:!0}})],c.prototype,"level",void 0),(0,n._)([(0,s.Cb)({type:String,json:{write:!0}})],c.prototype,"levelValue",void 0),(0,n._)([(0,s.Cb)({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],c.prototype,"origin",void 0),(0,n._)([(0,s.Cb)({type:Number,json:{write:!0}})],c.prototype,"resolution",void 0),(0,n._)([(0,s.Cb)({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],c.prototype,"rows",void 0),(0,n._)([(0,s.Cb)({type:Number,json:{write:!0}})],c.prototype,"scale",void 0),c=r=(0,n._)([(0,a.j)("esri.layers.support.LOD")],c);const u=c},22824:(e,t,i)=>{i.d(t,{Z:()=>I});var r,n=i(27366),l=i(43404),s=i(46784),o=i(92026),a=i(68860),c=i(49861),u=(i(63780),i(93169),i(25243)),d=i(38511),p=i(69912),h=i(31201),f=i(7882),m=i(78952),y=i(65156),v=i(92975),g=i(81753),b=i(59068);const w=new l.X({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc",LERC2D:"lerc2d",RAW:"raw",pbf:"pbf"});let _=r=class extends s.wq{constructor(e){super(e),this.dpi=96,this.format=null,this.origin=null,this.minScale=0,this.maxScale=0,this.size=null,this.spatialReference=null}static create(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{resolutionFactor:t=1,scales:i,size:n=256,spatialReference:l=m.Z.WebMercator,numLODs:s=24}=e;if(!(0,v.JY)(l)){const e=[];if(i)for(let t=0;t<i.length;t++){const r=i[t];e.push({level:t,scale:r,resolution:r})}else{let t=5e-4;for(let i=s-1;i>=0;i--)e.unshift({level:i,scale:t,resolution:t}),t*=2}return new r({dpi:96,lods:e,origin:new f.Z(0,0,l),size:[n,n],spatialReference:l})}const o=(0,v.C5)(l),c=e.origin?new f.Z({x:e.origin.x,y:e.origin.y,spatialReference:l}):new f.Z(o?{x:o.origin[0],y:o.origin[1],spatialReference:l}:{x:0,y:0,spatialReference:l}),u=1/(39.37*(0,a.c9)(l)*96),d=[];if(i)for(let r=0;r<i.length;r++){const e=i[r],t=e*u;d.push({level:r,scale:e,resolution:t})}else{let e=(0,v.sT)(l)?512/n*591657527.5917094:256/n*591657527.591555;const i=Math.ceil(s/t);d.push({level:0,scale:e,resolution:e*u});for(let r=1;r<i;r++){const i=e/2**t,n=i*u;d.push({level:r,scale:i,resolution:n}),e=i}}return new r({dpi:96,lods:d,origin:c,size:[n,n],spatialReference:l})}get isWrappable(){const{spatialReference:e,origin:t}=this;if(e&&t){const i=(0,v.C5)(e);return e.isWrappable&&Math.abs(i.origin[0]-t.x)<=i.dx}return!1}readOrigin(e,t){return f.Z.fromJSON({spatialReference:t.spatialReference,...e})}set lods(e){let t=0,i=0;const r=[];this._levelToLOD={},e&&(t=-1/0,i=1/0,e.forEach((e=>{r.push(e.scale),t=e.scale>t?e.scale:t,i=e.scale<i?e.scale:i,this._levelToLOD[e.level]=e}))),this._set("scales",r),this._set("minScale",t),this._set("maxScale",i),this._set("lods",e),this._initializeUpsampleLevels()}readSize(e,t){return[t.cols,t.rows]}writeSize(e,t){t.cols=e[0],t.rows=e[1]}zoomToScale(e){const t=this.scales;if(e<=0)return t[0];if(e>=t.length-1)return t[t.length-1];{const i=Math.floor(e),r=i+1;return t[i]/(t[i]/t[r])**(e-i)}}scaleToZoom(e){const t=this.scales,i=t.length-1;let r=0;for(;r<i;r++){const i=t[r],n=t[r+1];if(i<=e)return r;if(n===e)return r+1;if(i>e&&n<e)return r+Math.log(i/e)/Math.log(i/n)}return r}snapScale(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.95;const i=this.scaleToZoom(e);return i%Math.floor(i)>=t?this.zoomToScale(Math.ceil(i)):this.zoomToScale(Math.floor(i))}tileAt(e,t,i,r){const n=this.lodAt(e);if(!n)return null;let l,s;if("number"==typeof t)l=t,s=i;else if((0,v.fS)(t.spatialReference,this.spatialReference))l=t.x,s=t.y,r=i;else{const e=(0,g.iV)(t,this.spatialReference);if((0,o.Wi)(e))return null;l=e.x,s=e.y,r=i}const a=n.resolution*this.size[0],c=n.resolution*this.size[1];return r||(r={id:null,level:0,row:0,col:0,extent:(0,y.Ue)()}),r.level=e,r.row=Math.floor((this.origin.y-s)/c+.001),r.col=Math.floor((l-this.origin.x)/a+.001),this.updateTileInfo(r),r}updateTileInfo(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.ExtrapolateOptions.NONE,i=this.lodAt(e.level);if(!i&&t===r.ExtrapolateOptions.POWER_OF_TWO){const t=this.lods[this.lods.length-1];t.level<e.level&&(i=t)}if(!i)return;const n=e.level-i.level,l=i.resolution*this.size[0]/2**n,s=i.resolution*this.size[1]/2**n;e.id=`${e.level}/${e.row}/${e.col}`,e.extent||(e.extent=(0,y.Ue)()),e.extent[0]=this.origin.x+e.col*l,e.extent[1]=this.origin.y-(e.row+1)*s,e.extent[2]=e.extent[0]+l,e.extent[3]=e.extent[1]+s}upsampleTile(e){const t=this._upsampleLevels[e.level];return!(!t||-1===t.parentLevel)&&(e.level=t.parentLevel,e.row=Math.floor(e.row/t.factor+.001),e.col=Math.floor(e.col/t.factor+.001),this.updateTileInfo(e),!0)}getTileBounds(e,t){const{resolution:i}=this.lodAt(t.level),r=i*this.size[0],n=i*this.size[1];return e[0]=this.origin.x+t.col*r,e[1]=this.origin.y-(t.row+1)*n,e[2]=e[0]+r,e[3]=e[1]+n,e}lodAt(e){return this._levelToLOD&&this._levelToLOD[e]||null}clone(){return r.fromJSON(this.write({}))}getOrCreateCompatible(e,t){if(256===this.size[0]&&256===this.size[1])return 256===e?this:null;const i=[],n=this.lods.length;for(let r=0;r<n;r++){const e=this.lods[r],n=e.resolution*t;i.push(new b.Z({level:e.level,scale:e.scale,resolution:n}))}return new r({size:[e,e],dpi:this.dpi,format:this.format,compressionQuality:this.compressionQuality,origin:this.origin,spatialReference:this.spatialReference,lods:i})}_initializeUpsampleLevels(){const e=this.lods;this._upsampleLevels=[];let t=null;for(let i=0;i<e.length;i++){const r=e[i];this._upsampleLevels[r.level]={parentLevel:t?t.level:-1,factor:t?t.resolution/r.resolution:0},t=r}}};(0,n._)([(0,c.Cb)({type:Number,json:{write:!0}})],_.prototype,"compressionQuality",void 0),(0,n._)([(0,c.Cb)({type:Number,json:{write:!0}})],_.prototype,"dpi",void 0),(0,n._)([(0,c.Cb)({type:String,json:{read:w.read,write:w.write,origins:{"web-scene":{read:!1,write:!1}}}})],_.prototype,"format",void 0),(0,n._)([(0,c.Cb)({readOnly:!0})],_.prototype,"isWrappable",null),(0,n._)([(0,c.Cb)({type:f.Z,json:{write:!0}})],_.prototype,"origin",void 0),(0,n._)([(0,d.r)("origin")],_.prototype,"readOrigin",null),(0,n._)([(0,c.Cb)({type:[b.Z],value:null,json:{write:!0}})],_.prototype,"lods",null),(0,n._)([(0,c.Cb)({readOnly:!0})],_.prototype,"minScale",void 0),(0,n._)([(0,c.Cb)({readOnly:!0})],_.prototype,"maxScale",void 0),(0,n._)([(0,c.Cb)({readOnly:!0})],_.prototype,"scales",void 0),(0,n._)([(0,c.Cb)({cast:e=>Array.isArray(e)?e:"number"==typeof e?[e,e]:[256,256]})],_.prototype,"size",void 0),(0,n._)([(0,d.r)("size",["rows","cols"])],_.prototype,"readSize",null),(0,n._)([(0,h.c)("size",{cols:{type:u.z8},rows:{type:u.z8}})],_.prototype,"writeSize",null),(0,n._)([(0,c.Cb)({type:m.Z,json:{write:!0}})],_.prototype,"spatialReference",void 0),_=r=(0,n._)([(0,p.j)("esri.layers.support.TileInfo")],_),function(e){var t;(t=e.ExtrapolateOptions||(e.ExtrapolateOptions={}))[t.NONE=0]="NONE",t[t.POWER_OF_TWO=1]="POWER_OF_TWO"}(_||(_={}));const I=_},23638:(e,t,i)=>{i.d(t,{y:()=>T});var r,n=i(27366),l=i(76200),s=i(85015),o=i(59896),a=i(10064),c=i(41691),u=i(32718),d=i(16054),p=i(27546),h=i(66978),f=i(94172),m=i(99346),y=i(35995),v=i(49861),g=i(63780),b=(i(93169),i(89125)),w=i(69912),_=i(84652);class I{constructor(){this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40}getAvailability(e,t){if("unknown"!==this._allAvailability)return this._allAvailability;const i=(e-this.location.top)*this.location.width+(t-this.location.left),r=i%8,n=i>>3,l=this._tileAvailabilityBitSet;return n<0||n>l.length?"unknown":l[n]&1<<r?"available":"unavailable"}_updateFromData(e){const t=this.location.width,i=this.location.height;let r=!0,n=!0;const l=Math.ceil(t*i/8),s=new Uint8Array(l);let o=0;for(let a=0;a<e.length;a++){const t=a%8;e[a]?(n=!1,s[o]|=1<<t):r=!1,7===t&&++o}n?this._allAvailability="unavailable":r?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=s,this.byteSize+=s.length)}static fromDefinition(e,t){const i=e.service.request||l.default,{row:r,col:n,width:s,height:o}=e,c={query:{f:"json"}};return t=t?{...c,...t}:c,i(function(e){let t;if("vector-tile"===e.service.type)t=`${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;else{const i=e.service.tileServers;t=`${i&&i.length?i[e.row%i.length]:e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}const i=e.service.query;return i&&(t=`${t}?${i}`),t}(e),t).then((e=>e.data)).catch((e=>{if(e&&e.details&&422===e.details.httpStatus)return{location:{top:r,left:n,width:s,height:o},valid:!0,data:(0,g.a9)(s*o,0)};throw e})).then((e=>{if(e.location&&(e.location.top!==r||e.location.left!==n||e.location.width!==s||e.location.height!==o))throw new a.Z("tilemap:location-mismatch","Tilemap response for different location than requested",{response:e,definition:{top:r,left:n,width:s,height:o}});return I.fromJSON(e)}))}static fromJSON(e){I._validateJSON(e);const t=new I;return t.location=Object.freeze((0,_.d9)(e.location)),t._updateFromData(e.data),Object.freeze(t)}static _validateJSON(e){if(!e||!e.location)throw new a.Z("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new a.Z("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new a.Z("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new a.Z("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new a.Z("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function S(e){return`${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}const C=u.Z.getLogger("esri.layers.support.TilemapCache");let T=r=class extends((0,c.p)(s.Z)){constructor(e){super(e),this._pendingTilemapRequests={},this._availableLevels={},this.levels=5,this.cacheByteSize=2*o.Y8.MEGABYTES,this.request=l.default,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new d.Z(this.cacheByteSize),this.own([(0,f.YP)((()=>{const{layer:e}=this;return[e?.parsedUrl,e?.tileServers,e?.apiKey,e?.customParameters]}),(()=>this._initializeTilemapDefinition())),(0,f.YP)((()=>this.layer?.tileInfo?.lods),(e=>this._initializeAvailableLevels(e)),f.tX)]),this._initializeTilemapDefinition()}castLevels(e){return e<=2?(C.error("Minimum levels for Tilemap is 3, but got ",e),3):e}get size(){return 1<<this.levels}fetchTilemap(e,t,i,r){if(!this._availableLevels[e])return Promise.reject(new a.Z("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const n=this._tmpTilemapDefinition,l=this._tilemapFromCache(e,t,i,n);if(l)return Promise.resolve(l);const s=r&&r.signal;return r={...r,signal:null},new Promise(((e,t)=>{(0,h.fu)(s,(()=>t((0,h.zE)())));const i=S(n);let l=this._pendingTilemapRequests[i];if(!l){l=I.fromDefinition(n,r).then((e=>(this._tilemapCache.put(i,e,e.byteSize),e)));const e=()=>delete this._pendingTilemapRequests[i];this._pendingTilemapRequests[i]=l,l.then(e,e)}l.then(e,t)}))}getAvailability(e,t,i){if(!this._availableLevels[e])return"unavailable";const r=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return r?r.getAvailability(t,i):"unknown"}fetchAvailability(e,t,i,r){return this._availableLevels[e]?this.fetchTilemap(e,t,i,r).catch((e=>e)).then((r=>{if(r instanceof I){const n=r.getAvailability(t,i);if("unavailable"===n)throw new a.Z("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i});return n}if((0,h.D_)(r))throw r;return"unknown"})):Promise.reject(new a.Z("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`))}fetchAvailabilityUpsample(e,t,i,r,n){r.level=e,r.row=t,r.col=i;const l=this.layer.tileInfo;l.updateTileInfo(r);const s=this.fetchAvailability(e,t,i,n).catch((e=>{if((0,h.D_)(e))throw e;if(l.upsampleTile(r))return this.fetchAvailabilityUpsample(r.level,r.row,r.col,r);throw e}));return this._fetchAvailabilityUpsamplePrefetch(r.id,e,t,i,n,s),s}async _fetchAvailabilityUpsamplePrefetch(e,t,i,n,l,s){if(!this._prefetchingEnabled)return;const o=`prefetch-${e}`;if(this.handles.has(o))return;const a=new AbortController;s.then((()=>a.abort()),(()=>a.abort()));let c=!1;const u={remove(){c||(c=!0,a.abort())}};if(this.handles.add(u,o),await(0,m.MU)(10,a.signal).catch((()=>{})),c||(c=!0,this.handles.remove(o)),(0,h.Hc)(a))return;const d={id:e,level:t,row:i,col:n},p={...l,signal:a.signal},f=this.layer.tileInfo;for(let h=0;r._prefetches.length<r._maxPrefetch&&f.upsampleTile(d);++h){const e=this.fetchAvailability(d.level,d.row,d.col,p);r._prefetches.push(e);const t=()=>{r._prefetches.removeUnordered(e)};e.then(t,t)}}_initializeTilemapDefinition(){if(!this.layer.parsedUrl)return;const{parsedUrl:e,apiKey:t,customParameters:i}=this.layer;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:(0,y.B7)({...e.query,...i,token:t??e.query?.token}),tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,i,r){r.level=e,r.row=t-t%this.size,r.col=i-i%this.size;const n=S(r);return this._tilemapCache.get(n)}_initializeAvailableLevels(e){this._availableLevels={},e&&e.forEach((e=>this._availableLevels[e.level]=!0))}get test(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:(t,i,r)=>!!e._tilemapFromCache(t,i,r,e._tmpTilemapDefinition)}}};T._maxPrefetch=4,T._prefetches=new p.Z({initialSize:r._maxPrefetch}),(0,n._)([(0,v.Cb)({constructOnly:!0,type:Number})],T.prototype,"levels",void 0),(0,n._)([(0,b.p)("levels")],T.prototype,"castLevels",null),(0,n._)([(0,v.Cb)({readOnly:!0,type:Number})],T.prototype,"size",null),(0,n._)([(0,v.Cb)({constructOnly:!0,type:Number})],T.prototype,"cacheByteSize",void 0),(0,n._)([(0,v.Cb)({constructOnly:!0})],T.prototype,"layer",void 0),(0,n._)([(0,v.Cb)({constructOnly:!0})],T.prototype,"request",void 0),T=r=(0,n._)([(0,w.j)("esri.layers.support.TilemapCache")],T)},25899:(e,t,i)=>{i.d(t,{B5:()=>d,DR:()=>h,G:()=>w,M8:()=>y,Nm:()=>v,Qc:()=>p,XG:()=>g,a7:()=>m,h3:()=>_,ld:()=>f,wH:()=>b});var r=i(92026),n=i(35995),l=i(53283);const s={mapserver:"MapServer",imageserver:"ImageServer",featureserver:"FeatureServer",sceneserver:"SceneServer",streamserver:"StreamServer",vectortileserver:"VectorTileServer"},o=Object.values(s),a=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/(${o.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),c=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/([^\\/\\n]+)\\/(${o.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),u=/(.*?)\/(?:layers\/)?(\d+)\/?$/i;function d(e){return!!a.test(e)}function p(e){if((0,r.Wi)(e))return null;const t=(0,n.mN)(e),i=t.path.match(a)||t.path.match(c);if(!i)return null;const[,l,o,u,d]=i,p=o.indexOf("/");return{title:f(-1!==p?o.slice(p+1):o),serverType:s[u.toLowerCase()],sublayer:null!=d&&""!==d?parseInt(d,10):null,url:{path:l}}}function h(e){const t=(0,n.mN)(e).path.match(u);return t?{serviceUrl:t[1],sublayerId:Number(t[2])}:null}function f(e){return(e=e.replace(/\s*[/_]+\s*/g," "))[0].toUpperCase()+e.slice(1)}function m(e,t){const i=[];if(e){const t=p(e);(0,r.pC)(t)&&t.title&&i.push(t.title)}if(t){const e=f(t);i.push(e)}if(2===i.length){if(i[0].toLowerCase().includes(i[1].toLowerCase()))return i[0];if(i[1].toLowerCase().includes(i[0].toLowerCase()))return i[1]}return i.join(" - ")}function y(e){if(!e)return!1;const t=(e=e.toLowerCase()).includes(".arcgis.com/"),i=e.includes("//services")||e.includes("//tiles")||e.includes("//features");return t&&i}function v(e,t){return e?(0,n.Qj)((0,n.Hu)(e,t)):e}function g(e){let{url:t}=e;if(!t)return{url:t};t=(0,n.Hu)(t,e.logger);const i=(0,n.mN)(t),l=p(i.path);let s;if((0,r.pC)(l))null!=l.sublayer&&null==e.layer.layerId&&(s=l.sublayer),t=l.url.path;else if(e.nonStandardUrlAllowed){const e=h(i.path);(0,r.pC)(e)&&(t=e.serviceUrl,s=e.sublayerId)}return{url:(0,n.Qj)(t),layerId:s}}function b(e,t,i,r,s){(0,l.w)(t,r,"url",s),r.url&&null!=e.layerId&&(r.url=(0,n.v_)(r.url,i,e.layerId.toString()))}function w(e){if(!e)return!1;const t=e.toLowerCase(),i=t.includes("/services/"),r=t.includes("/mapserver/wmsserver"),n=t.includes("/imageserver/wmsserver"),l=t.includes("/wmsserver");return i&&(r||n||l)}function _(e){if(!e)return!1;const t=new n.R9((0,n.hF)(e)).authority.toLowerCase();return"server.arcgisonline.com"===t||"services.arcgisonline.com"===t}},39638:(e,t,i)=>{var r;function n(e,t){switch(e.type){case"range":{const i="range"in e?e.range[0]:e.minValue,n="range"in e?e.range[1]:e.maxValue;if(+t<i||+t>n)return r.VALUE_OUT_OF_RANGE;break}case"coded-value":case"codedValue":if(null==e.codedValues||e.codedValues.every((e=>null==e||e.code!==t)))return r.INVALID_CODED_VALUE}return null}function l(e){if(e&&"range"===e.type)return{min:"range"in e?e.range[0]:e.minValue,max:"range"in e?e.range[1]:e.maxValue}}i.d(t,{D3:()=>l,F3:()=>n,V$:()=>r}),function(e){e.VALUE_OUT_OF_RANGE="domain-validation-error::value-out-of-range",e.INVALID_CODED_VALUE="domain-validation-error::invalid-coded-value"}(r||(r={}))},37270:(e,t,i)=>{i.d(t,{AB:()=>y,CH:()=>x,Ec:()=>ee,Gz:()=>k,H7:()=>R,Lk:()=>v,Ll:()=>C,M$:()=>M,Mu:()=>F,O5:()=>w,Pz:()=>G,Q0:()=>f,Qc:()=>W,Qj:()=>T,R9:()=>X,UF:()=>p,YN:()=>u,ZV:()=>S,gd:()=>m,io:()=>g,j:()=>O,os:()=>E,qN:()=>j,vP:()=>Q,vl:()=>I,wF:()=>Y,y2:()=>V});var r=i(10064),n=i(92026),l=i(18202),s=i(39638),o=i(819);const a=["field","field2","field3","normalizationField","rotationInfo.field","proportionalSymbolInfo.field","proportionalSymbolInfo.normalizationField","colorInfo.field","colorInfo.normalizationField"],c=["field","normalizationField"];function u(e,t){if(null!=e&&null!=t)for(const i of Array.isArray(e)?e:[e])if(d(a,i,t),"visualVariables"in i&&i.visualVariables)for(const e of i.visualVariables)d(c,e,t)}function d(e,t,i){if(e)for(const r of e){const e=(0,l.hS)(r,t),n=e&&"function"!=typeof e&&i.get(e);n&&(0,l.RB)(r,n.name,t)}}function p(e,t){if(null!=e&&t?.fields.length)if("startField"in e){const i=t.get(e.startField),r=t.get(e.endField);e.startField=i&&i.name||null,e.endField=r&&r.name||null}else{const i=t.get(e.startTimeField),r=t.get(e.endTimeField);e.startTimeField=i&&i.name||null,e.endTimeField=r&&r.name||null}}const h=new Set;function f(e,t){return e&&t?(h.clear(),m(h,e,t),Array.from(h).sort()):[]}function m(e,t,i){if(i)if(t?.fields?.length)if(i.includes("*"))for(const{name:r}of t.fields)e.add(r);else for(const r of i)y(e,t,r);else{if(i.includes("*"))return e.clear(),void e.add("*");for(const t of i)e.add(t)}}function y(e,t,i){if("string"==typeof i)if(t){const r=t.get(i);r&&e.add(r.name)}else e.add(i)}function v(e,t){return(0,n.Wi)(t)||(0,n.Wi)(e)?[]:t.includes("*")?e.fields.map((e=>e.name)):t}async function g(e,t,i){if(!i)return;const{arcadeUtils:r}=await(0,o.LC)(),n=r.extractFieldNames(i,t?.fields?.map((e=>e.name)));for(const l of n)y(e,t,l)}async function b(e,t,n){if(n&&"1=1"!==n){const l=(await Promise.all([i.e(8562),i.e(4397)]).then(i.bind(i,48562))).WhereClause.create(n,t);if(!l.isStandardized)throw new r.Z("fieldUtils:collectFilterFields","Where clause is not standardized",{where:n});m(e,t,l.fieldNames)}}function w(e){let{displayField:t,fields:i}=e;return t||(i&&i.length?_(i,"name-or-title")||_(i,"unique-identifier")||_(i,"type-or-category")||function(e){for(const t of e){if(!t||!t.name)continue;const e=t.name.toLowerCase();if(e.includes("name")||e.includes("title"))return t.name}return null}(i):null)}function _(e,t){for(const i of e)if(i&&i.valueType&&i.valueType===t)return i.name;return null}async function I(e,t){if(!t)return;const i=(0,l.hS)("elevationInfo.featureExpressionInfo",t);return i?i.collectRequiredFields(e,t.fieldsIndex):void 0}async function S(e,t,i){if(!t||!i||!("fields"in i))return;const r=[];if(i.popupTemplate?.expressionInfos&&r.push(...i.popupTemplate.expressionInfos.map((i=>g(e,t.fieldsIndex,i.expression)))),Array.isArray(i.popupTemplate?.content)){const n=i.popupTemplate.content;for(const i of n)"expression"===i.type&&i.expressionInfo&&r.push(g(e,t.fieldsIndex,i.expressionInfo.expression))}i.fields&&r.push(...i.fields.map((i=>async function(e,t,i){i.outStatistic.onStatisticValueExpression?g(e,t,i.outStatistic.onStatisticValueExpression):e.add(i.outStatistic.onStatisticField)}(e,t.fieldsIndex,i)))),await Promise.all(r)}async function C(e,t,i){t&&(t.timeInfo&&(0,n.pC)(i)&&i.timeExtent&&m(e,t.fieldsIndex,[t.timeInfo.startField,t.timeInfo.endField]),t.floorInfo&&m(e,t.fieldsIndex,[t.floorInfo.floorField]),(0,n.pC)(i)&&(0,n.pC)(i.where)&&await b(e,t.fieldsIndex,i.where))}async function T(e,t,i){t&&i&&await Promise.all(i.map((i=>async function(e,t,i){t&&i&&(i.valueExpression?await g(e,t.fieldsIndex,i.valueExpression):i.field&&y(e,t.fieldsIndex,i.field))}(e,t,i))))}function x(e){if(!e)return[];const t="editFieldsInfo"in e&&e.editFieldsInfo;return t?f(e.fieldsIndex,[t&&t.creatorField,t&&t.creationDateField,t&&t.editorField,t&&t.editDateField]):[]}function O(e){if(!e)return[];const t=e.geometryFieldsInfo;return t?f(e.fieldsIndex,[t.shapeAreaField,t.shapeLengthField]):[]}async function F(e,t){const{labelingInfo:i,fieldsIndex:r}=t;i&&i.length&&await Promise.all(i.map((t=>async function(e,t,i){if(!i)return;const r=i.getLabelExpression(),n=i.where;if("arcade"===r.type)await g(e,t,r.expression);else{const i=r.expression.match(/{[^}]*}/g);i&&i.forEach((i=>{y(e,t,i.slice(1,-1))}))}await b(e,t,n)}(e,r,t))))}function E(e){const t=e.defaultValue;return void 0!==t&&$(e,t)?t:e.nullable?null:void 0}function L(e){return"number"==typeof e&&!isNaN(e)&&isFinite(e)}function A(e){return null===e||L(e)}const N="isInteger"in Number?Number.isInteger:e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e;function P(e){return null===e||N(e)}function U(e){return null!=e&&"string"==typeof e}function D(e){return null===e||U(e)}function z(){return!0}function $(e,t){let i;switch(e.type){case"date":case"integer":case"long":case"small-integer":case"esriFieldTypeDate":case"esriFieldTypeInteger":case"esriFieldTypeLong":case"esriFieldTypeSmallInteger":i=e.nullable?P:N;break;case"double":case"single":case"esriFieldTypeSingle":case"esriFieldTypeDouble":i=e.nullable?A:L;break;case"string":case"esriFieldTypeString":i=e.nullable?D:U;break;default:i=z}return 1===arguments.length?i:i(t)}const Z=new Set(["integer","small-integer","single","double","esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]);function R(e){return null!=e&&Z.has(e.type)}function j(e){return null!=e&&("string"===e.type||"esriFieldTypeString"===e.type)}function V(e){return null!=e&&("date"===e.type||"esriFieldTypeDate"===e.type)}var M,k;function G(e){return null==e||"number"==typeof e&&isNaN(e)?null:e}function W(e,t){return e.nullable&&null===t?null:R(e)&&!function(e,t){const i="string"==typeof e?B(e):e;return!!i&&(i.isInteger?N(t)&&t>=i.min&&t<=i.max:t>=i.min&&t<=i.max)}(e.type,Number(t))?M.OUT_OF_RANGE:$(e,t)?e.domain?(0,s.F3)(e.domain,t):null:k.INVALID_TYPE}function Y(e){return(0,s.D3)(e.domain)||(R(e)?B(e.type):void 0)}function B(e){switch(e){case"esriFieldTypeSmallInteger":case"small-integer":return H;case"esriFieldTypeInteger":case"integer":return q;case"esriFieldTypeSingle":case"single":return J;case"esriFieldTypeDouble":case"double":return K}}!function(e){e.OUT_OF_RANGE="numeric-range-validation-error::out-of-range"}(M||(M={})),function(e){e.INVALID_TYPE="type-validation-error::invalid-type"}(k||(k={}));const H={min:-32768,max:32767,isInteger:!0},q={min:-2147483648,max:2147483647,isInteger:!0},J={min:-34e37,max:12e37,isInteger:!1},K={min:-Number.MAX_VALUE,max:Number.MAX_VALUE,isInteger:!1};function Q(e,t,i){switch(e){case s.V$.INVALID_CODED_VALUE:return`Value ${i} is not in the coded domain - field: ${t.name}, domain: ${JSON.stringify(t.domain)}`;case s.V$.VALUE_OUT_OF_RANGE:return`Value ${i} is out of the range of valid values - field: ${t.name}, domain: ${JSON.stringify(t.domain)}`;case k.INVALID_TYPE:return`Value ${i} is not a valid value for the field type - field: ${t.name}, type: ${t.type}, nullable: ${t.nullable}`;case M.OUT_OF_RANGE:{const{min:e,max:r}=B(t.type);return`Value ${i} is out of range for the number type - field: ${t.name}, type: ${t.type}, value range is ${e} to ${r}`}}}function X(e,t){return!function(e,t,i){if(!t||!t.attributes||!e){if((0,n.pC)(i))for(const t of e)i.add(t);return!0}const r=t.attributes;let l=!1;for(const s of e)if(!(s in r)){if(l=!0,!(0,n.pC)(i))break;i.add(s)}return l}(e,t,null)}function ee(e){return["raster.itempixelvalue","raster.servicepixelvalue"].some((t=>e.toLowerCase().startsWith(t)))}},71466:(e,t,i)=>{i.d(t,{d:()=>l,h:()=>n});var r=i(22824);const n={type:r.Z,json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:l}}}}};function l(e,t,i,n){if(!e)return null;const{minScale:l,maxScale:s,minLOD:o,maxLOD:a}=t;if(null!=o&&null!=a)return n&&n.ignoreMinMaxLOD?r.Z.fromJSON(e):r.Z.fromJSON({...e,lods:e.lods.filter((e=>{let{level:t}=e;return null!=t&&t>=o&&t<=a}))});if(0!==l&&0!==s){const t=e=>Math.round(1e4*e)/1e4,i=l?t(l):1/0,n=s?t(s):-1/0;return r.Z.fromJSON({...e,lods:e.lods.filter((e=>{const r=t(e.scale);return r<=i&&r>=n}))})}return r.Z.fromJSON(e)}}}]);
//# sourceMappingURL=2893.d52c16da.chunk.js.map