(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[155,202],{212:function(e,t,r){"use strict";var s,i=r(131),n=(r(129),r(130),r(137),r(134)),a=r(144),l=r(133),o=r(143),c=(r(132),r(135),r(136),r(139)),u=r(217);let d=s=class extends c.a{constructor(e){super(e),this.end=null,this.start=null}static get allTime(){return h}static get empty(){return p}readEnd(e,t){return null!=t.end?new Date(t.end):null}writeEnd(e,t){t.end=e?e.getTime():null}get isAllTime(){return this.equals(s.allTime)}get isEmpty(){return this.equals(s.empty)}readStart(e,t){return null!=t.start?new Date(t.start):null}writeStart(e,t){t.start=e?e.getTime():null}clone(){return new s({end:this.end,start:this.start})}expandTo(e){if(this.isEmpty||this.isAllTime)return this.clone();const t=this.start?Object(u.e)(this.start,e):null,r=this.end?Object(u.c)(Object(u.e)(this.end,e),1,e):null;return new s({start:t,end:r})}intersection(e){var t,r,i,n,a,l,o,c;if(!e)return this.clone();if(this.isEmpty||e.isEmpty)return s.empty;if(this.isAllTime)return e.clone();if(e.isAllTime)return this.clone();const u=null!=(t=null==(r=this.start)?void 0:r.getTime())?t:-1/0,d=null!=(i=null==(n=this.end)?void 0:n.getTime())?i:1/0,h=null!=(a=null==(l=e.start)?void 0:l.getTime())?a:-1/0,p=null!=(o=null==(c=e.end)?void 0:c.getTime())?o:1/0;let m,g;if(h>=u&&h<=d?m=h:u>=h&&u<=p&&(m=u),d>=h&&d<=p?g=d:p>=u&&p<=d&&(g=p),!isNaN(m)&&!isNaN(g)){const e=new s;return e.start=m===-1/0?null:new Date(m),e.end=g===1/0?null:new Date(g),e}return s.empty}offset(e,t){if(this.isEmpty||this.isAllTime)return this.clone();const r=new s,{start:i,end:n}=this;return i&&(r.start=Object(u.c)(i,e,t)),n&&(r.end=Object(u.c)(n,e,t)),r}equals(e){if(!e)return!1;const t=this.start?this.start.getTime():this.start,r=this.end?this.end.getTime():this.end,s=e.start?e.start.getTime():e.start,i=e.end?e.end.getTime():e.end;return t===s&&r===i}union(e){if(!e||e.isEmpty)return this.clone();if(this.isEmpty)return e.clone();if(this.isAllTime||e.isAllTime)return h.clone();const t=this.start&&e.start?new Date(Math.min(this.start.getTime(),e.start.getTime())):null,r=this.end&&e.end?new Date(Math.max(this.end.getTime(),e.end.getTime())):null;return new s({start:t,end:r})}};Object(i.a)([Object(n.b)({type:Date,json:{write:{allowNull:!0}}})],d.prototype,"end",void 0),Object(i.a)([Object(a.a)("end")],d.prototype,"readEnd",null),Object(i.a)([Object(o.a)("end")],d.prototype,"writeEnd",null),Object(i.a)([Object(n.b)({readOnly:!0,json:{read:!1}})],d.prototype,"isAllTime",null),Object(i.a)([Object(n.b)({readOnly:!0,json:{read:!1}})],d.prototype,"isEmpty",null),Object(i.a)([Object(n.b)({type:Date,json:{write:{allowNull:!0}}})],d.prototype,"start",void 0),Object(i.a)([Object(a.a)("start")],d.prototype,"readStart",null),Object(i.a)([Object(o.a)("start")],d.prototype,"writeStart",null),d=s=Object(i.a)([Object(l.a)("esri.TimeExtent")],d);const h=new d,p=new d({start:void 0,end:void 0});var m=d;t.a=m},217:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return a})),r.d(t,"e",(function(){return c}));r(129);var s=r(148);function i(e){return e}const n={milliseconds:{getter:"getMilliseconds",setter:"setMilliseconds",multiplier:1},seconds:{getter:"getSeconds",setter:"setSeconds",multiplier:1},minutes:{getter:"getMinutes",setter:"setMinutes",multiplier:1},hours:{getter:"getHours",setter:"setHours",multiplier:1},days:{getter:"getDate",setter:"setDate",multiplier:1},weeks:{getter:"getDate",setter:"setDate",multiplier:7},months:{getter:"getMonth",setter:"setMonth",multiplier:1},years:{getter:"getFullYear",setter:"setFullYear",multiplier:1},decades:{getter:"getFullYear",setter:"setFullYear",multiplier:10},centuries:{getter:"getFullYear",setter:"setFullYear",multiplier:100}},a=Object(s.b)()({esriTimeUnitsMilliseconds:"milliseconds",esriTimeUnitsSeconds:"seconds",esriTimeUnitsMinutes:"minutes",esriTimeUnitsHours:"hours",esriTimeUnitsDays:"days",esriTimeUnitsWeeks:"weeks",esriTimeUnitsMonths:"months",esriTimeUnitsYears:"years",esriTimeUnitsDecades:"decades",esriTimeUnitsCenturies:"centuries",esriTimeUnitsUnknown:null});function l(e,t,r){const s=new Date(e.getTime());if(t&&r){const e=n[r],{getter:i,setter:a,multiplier:l}=e;s[a](s[i]()+t*l)}return s}const o={milliseconds:1,seconds:1e3,minutes:6e4,hours:36e5,days:864e5,weeks:6048e5,months:26784e5,years:31536e6,decades:31536e7,centuries:31536e8};function c(e,t){switch(t){case"milliseconds":return new Date(e.getTime());case"seconds":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds());case"minutes":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes());case"hours":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours());case"days":return new Date(e.getFullYear(),e.getMonth(),e.getDate());case"weeks":return new Date(e.getFullYear(),e.getMonth(),e.getDate()-e.getDay());case"months":return new Date(e.getFullYear(),e.getMonth(),1);case"years":return new Date(e.getFullYear(),0,1);case"decades":return new Date(e.getFullYear()-e.getFullYear()%10,0,1);case"centuries":return new Date(e.getFullYear()-e.getFullYear()%100,0,1);default:return null}}},772:function(e,t,r){"use strict";r.r(t);var s=r(131),i=(r(129),r(138)),n=r(130),a=(r(137),r(134)),l=r(144),o=r(133),c=r(140),u=r(132),d=(r(135),r(136),r(142)),h=r(151),p=r(226),m=r(236),g=r(367),b=r(190),y=r(271),j=r(316),O=r(264),v=r(729),w=r(793);class f extends w.a{constructor(e){super("LercWorker","_decode",e,{strategy:"dedicated"}),this.scheduler=e}decode(e,t,r){return e&&0!==e.byteLength?this.invoke({buffer:e,options:t},r):Promise.resolve(null)}getTransferList(e){return[e.buffer]}}const T=new Map;const D=n.a.getLogger("esri.layers.ElevationLayer");let _=class extends(Object(v.a)(Object(j.a)(Object(y.a)(Object(O.a)(Object(m.a)(p.a)))))){constructor(...e){super(...e),this.copyright=null,this.heightModelInfo=null,this.path=null,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=function(e){let t=T.get(e);return t||(t={instance:new f(e),ref:0},T.set(e,t)),++t.ref,t.instance}()}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){(function(e){if(null==e)return;const t=e.scheduler,r=T.get(t);r&&--r.ref<=0&&(r.instance.destroy(),T.delete(t))})(this._lercDecoder),this._lercDecoder=null}set minScale(e){this.constructed&&D.warn(`${this.declaredClass}.minScale support has been removed (since 4.5)`)}get minScale(){}set maxScale(e){this.constructed&&D.warn(`${this.declaredClass}.maxScale support has been removed (since 4.5)`)}get maxScale(){}readVersion(e,t){let r=t.currentVersion;return r||(r=9.3),r}load(e){const t=Object(i.k)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:e=>{for(let t=0;t<e.typeKeywords.length;t++)if("elevation 3d layer"===e.typeKeywords[t].toLowerCase())return!0;throw new c.a("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).then((()=>this._fetchImageService(t)),(()=>this._fetchImageService(t)))),Promise.resolve(this)}fetchTile(e,t,r,s){const n=Object(i.k)((s=s||{signal:null}).signal)?s.signal:s.signal=Object(d.d)().signal,a={responseType:"array-buffer",signal:n},l={noDataValue:s.noDataValue,returnFileInfo:!0};return this.load().then((()=>this._fetchTileAvailability(e,t,r,s))).then((()=>Object(h.default)(this.getTileUrl(e,t,r),a))).then((e=>this._lercDecoder.decode(e.data,l,n))).then((e=>({values:e.pixelData,width:e.width,height:e.height,maxZError:e.fileInfo.maxZError,noDataValue:e.noDataValue,minValue:e.minValue,maxValue:e.maxValue})))}getTileUrl(e,t,r){const s=!this.tilemapCache&&this.supportsBlankTile,i=Object(u.D)({...this.parsedUrl.query,blankTile:!s&&null});return`${this.parsedUrl.path}/tile/${e}/${t}/${r}${i?"?"+i:""}`}async queryElevation(e,t){const{ElevationQuery:s}=await Promise.all([r.e(10),r.e(40)]).then(r.bind(null,1087));return Object(d.u)(t),(new s).query(this,e,t)}async createElevationSampler(e,t){const{ElevationQuery:s}=await Promise.all([r.e(10),r.e(40)]).then(r.bind(null,1087));return Object(d.u)(t),(new s).createSampler(this,e,t)}_fetchTileAvailability(e,t,r,s){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,t,r,s):Promise.resolve("unknown")}async _fetchImageService(e){if(this.sourceJSON)return this.sourceJSON;const t={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e},r=await Object(h.default)(this.parsedUrl.path,t);r.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl})}};Object(s.a)([Object(a.b)({json:{read:{source:"copyrightText"}}})],_.prototype,"copyright",void 0),Object(s.a)([Object(a.b)({readOnly:!0,type:g.a})],_.prototype,"heightModelInfo",void 0),Object(s.a)([Object(a.b)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],_.prototype,"path",void 0),Object(s.a)([Object(a.b)({type:["show","hide"]})],_.prototype,"listMode",void 0),Object(s.a)([Object(a.b)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],_.prototype,"minScale",null),Object(s.a)([Object(a.b)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],_.prototype,"maxScale",null),Object(s.a)([Object(a.b)({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],_.prototype,"opacity",void 0),Object(s.a)([Object(a.b)({type:["ArcGISTiledElevationServiceLayer"]})],_.prototype,"operationalLayerType",void 0),Object(s.a)([Object(a.b)()],_.prototype,"sourceJSON",void 0),Object(s.a)([Object(a.b)({json:{read:!1},value:"elevation",readOnly:!0})],_.prototype,"type",void 0),Object(s.a)([Object(a.b)(b.n)],_.prototype,"url",void 0),Object(s.a)([Object(a.b)()],_.prototype,"version",void 0),Object(s.a)([Object(l.a)("version",["currentVersion"])],_.prototype,"readVersion",null),_=Object(s.a)([Object(o.a)("esri.layers.ElevationLayer")],_);var S=_;t.default=S},793:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var s=r(138),i=r(130),n=r(265),a=r(255),l=r(142),o=r(324);const c=i.a.getLogger("esri.core.workers.WorkerHandle");class u{constructor(e,t,r,s={}){this._mainMethod=t,this._listeners=[],this._promise=Object(o.b)(e,{...s,scheduler:r}).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,s.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e)}else e.close()})),this._promise.catch((t=>c.error(`Failed to initialize ${e} worker: ${t}`)))}on(e,t){const r={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(r),this._connectListener(r),Object(n.c)((()=>{r.removed=!0,Object(a.i)(this._listeners,r),this._thread&&Object(s.k)(r.threadHandle)&&r.threadHandle.remove()}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,r){if(this._thread){const s=this.getTransferList(t,e);return this._thread.invoke(e,t,{transferList:s,signal:r})}return this._promise?this._promise.then((()=>(Object(l.u)(r),this.invokeMethod(e,t,r)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t)}))}}}}]);
//# sourceMappingURL=155.67bb1d9e.chunk.js.map