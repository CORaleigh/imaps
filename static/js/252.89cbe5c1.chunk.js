(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[252],{112:function(e,t,r){"use strict";var i=r(80),s=r(87),a=r(83),o=r(82),l=r(93),n=r(104);let c=class extends l.a{constructor(e){super(e),this._groups=new Map}destroy(){this.removeAll()}get size(){let e=0;return this._groups.forEach((t=>{e+=t.length})),e}add(e,t){if(!this._isHandle(e)&&!Array.isArray(e)&&!n.a.isCollection(e))return this;const r=this._getOrCreateGroup(t);return Array.isArray(e)||n.a.isCollection(e)?e.forEach((e=>this._isHandle(e)&&r.push(e))):r.push(e),this.notifyChange("size"),this}forEach(e,t){if("function"==typeof e)this._groups.forEach((t=>t.forEach(e)));else{const r=this._getGroup(e);r&&t&&r.forEach(t)}}has(e){return this._groups.has(this._ensureGroupKey(e))}remove(e){if(Array.isArray(e)||n.a.isCollection(e))return e.forEach(this.remove,this),this;if(!this.has(e))return this;const t=this._getGroup(e);for(let r=0;r<t.length;r++)t[r].remove();return this._deleteGroup(e),this.notifyChange("size"),this}removeAll(){return this._groups.forEach((e=>{for(let t=0;t<e.length;t++)e[t].remove()})),this._groups.clear(),this.notifyChange("size"),this}_isHandle(e){return e&&!!e.remove}_getOrCreateGroup(e){if(this.has(e))return this._getGroup(e);const t=[];return this._groups.set(this._ensureGroupKey(e),t),t}_getGroup(e){return Object(s.d)(this._groups.get(this._ensureGroupKey(e)))}_deleteGroup(e){return this._groups.delete(this._ensureGroupKey(e))}_ensureGroupKey(e){return e||"_default_"}};Object(i.a)([Object(a.b)({readOnly:!0})],c.prototype,"size",null),c=Object(i.a)([Object(o.a)("esri.core.Handles")],c);var u=c;t.a=u},859:function(e,t,r){"use strict";r.r(t);var i,s=r(80),a=(r(78),r(90)),o=r(121),l=(r(79),r(86),r(83)),n=r(94),c=r(82),u=r(92),p=r(89),d=r(81),h=(r(84),r(85),r(99)),m=r(104),y=r(100),f=r(112),b=r(176),g=r(181),O=r(220),v=r(222),j=r(214),w=r(258),x=r(210),S=r(332),M=r(1076),I=r(760),L=r(88);let T=i=class extends L.a{constructor(e){super(e),this.fullExtent=null,this.id=null,this.tileInfo=null}clone(){const e=new i;return this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("tileInfo")&&(e.tileInfo=this.tileInfo&&this.tileInfo.clone()),e}};Object(s.a)([Object(l.b)({type:h.a,json:{read:{source:"fullExtent"}}})],T.prototype,"fullExtent",void 0),Object(s.a)([Object(l.b)({type:String,json:{read:{source:"id"}}})],T.prototype,"id",void 0),Object(s.a)([Object(l.b)({type:S.a,json:{read:{source:"tileInfo"}}})],T.prototype,"tileInfo",void 0),T=i=Object(s.a)([Object(c.a)("esri.layer.support.TileMatrixSet")],T);var E,P=T;let _=E=class extends L.a{constructor(e){super(e),this.id=null,this.title=null,this.description=null,this.legendUrl=null}clone(){const e=new E;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("isDefault")&&(e.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(e.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(e.title=this.title),e}};Object(s.a)([Object(l.b)({json:{read:{source:"id"}}})],_.prototype,"id",void 0),Object(s.a)([Object(l.b)({json:{read:{source:"title"}}})],_.prototype,"title",void 0),Object(s.a)([Object(l.b)({json:{read:{source:"abstract"}}})],_.prototype,"description",void 0),Object(s.a)([Object(l.b)({json:{read:{source:"legendUrl"}}})],_.prototype,"legendUrl",void 0),Object(s.a)([Object(l.b)({json:{read:{source:"isDefault"}}})],_.prototype,"isDefault",void 0),Object(s.a)([Object(l.b)({json:{read:{source:"keywords"}}})],_.prototype,"keywords",void 0),_=E=Object(s.a)([Object(c.a)("esri.layer.support.WMTSStyle")],_);var C,F=_;let A=C=class extends L.a{constructor(e){super(e),this.fullExtent=null,this.imageFormats=null,this.id=null,this.layer=null,this.styles=null,this.tileMatrixSetId=null,this.tileMatrixSets=null}get description(){return this._get("description")}set description(e){this._set("description",e)}readFullExtent(e,t){return(e=t.fullExtent)?h.a.fromJSON(e):null}get imageFormat(){let e=this._get("imageFormat");return e||(e=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),e}set imageFormat(e){const t=this.imageFormats;e&&(e.indexOf("image/")>-1||t&&-1===t.indexOf(e))&&(-1===e.indexOf("image/")&&(e="image/"+e),t&&-1===t.indexOf(e))?console.error("The layer doesn't support the format of "+e):this._set("imageFormat",e)}get styleId(){let e=this._get("styleId");return e||(e=this.styles&&this.styles.length?this.styles.getItemAt(0).id:""),e}set styleId(e){this._set("styleId",e)}get title(){return this._get("title")}set title(e){this._set("title",e)}get tileMatrixSet(){return this.tileMatrixSets?this.tileMatrixSets.find((e=>e.id===this.tileMatrixSetId)):null}clone(){const e=new C;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("imageFormats")&&(e.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(e.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("styleId")&&(e.styleId=this.styleId),this.hasOwnProperty("styles")&&(e.styles=this.styles&&this.styles.clone()),this.hasOwnProperty("tileMatrixSetId")&&(e.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(e.tileMatrixSets=this.tileMatrixSets.clone()),this.hasOwnProperty("title")&&(e.title=this.title),e}};Object(s.a)([Object(l.b)()],A.prototype,"description",null),Object(s.a)([Object(l.b)()],A.prototype,"fullExtent",void 0),Object(s.a)([Object(n.a)("fullExtent",["fullExtent"])],A.prototype,"readFullExtent",null),Object(s.a)([Object(l.b)()],A.prototype,"imageFormat",null),Object(s.a)([Object(l.b)({json:{read:{source:"formats"}}})],A.prototype,"imageFormats",void 0),Object(s.a)([Object(l.b)()],A.prototype,"id",void 0),Object(s.a)([Object(l.b)()],A.prototype,"layer",void 0),Object(s.a)([Object(l.b)()],A.prototype,"styleId",null),Object(s.a)([Object(l.b)({type:m.a.ofType(F),json:{read:{source:"styles"}}})],A.prototype,"styles",void 0),Object(s.a)([Object(l.b)({value:null,json:{write:{ignoreOrigin:!0}}})],A.prototype,"title",null),Object(s.a)([Object(l.b)()],A.prototype,"tileMatrixSetId",void 0),Object(s.a)([Object(l.b)({readOnly:!0})],A.prototype,"tileMatrixSet",null),Object(s.a)([Object(l.b)({type:m.a.ofType(P),json:{read:{source:"tileMatrixSets"}}})],A.prototype,"tileMatrixSets",void 0),A=C=Object(s.a)([Object(c.a)("esri.layers.support.WMTSSublayer")],A);var R=A,V=r(253),U=r(95),N=r(113),k=r(169);const K=90.71428571428571,G=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];function W(e,t){var r,i;e=e.replace(/ows:/gi,"");const s=(new DOMParser).parseFromString(e,"text/xml").documentElement,a=new Map,o=new Map,l=H("Contents",s);if(!l)throw new p.a("wmtslayer:wmts-capabilities-xml-is-not-valid");const n=H("OperationsMetadata",s),c=null==n?void 0:n.querySelector("[name='GetTile']"),u=null==c?void 0:c.getElementsByTagName("Get"),d=u&&Array.prototype.slice.call(u),h=null!=(r=(null==t||null==(i=t.url)?void 0:i.indexOf("https"))>-1)&&r;let m,y,f=t.serviceMode,b=t&&t.url;if(d&&d.length&&d.some((e=>{const t=H("Constraint",e);return!t||q("AllowedValues","Value",f,t)?(b=e.attributes[0].nodeValue,!0):(!t||q("AllowedValues","Value","RESTful",t)||q("AllowedValues","Value","REST",t)?y=e.attributes[0].nodeValue:t&&!q("AllowedValues","Value","KVP",t)||(m=e.attributes[0].nodeValue),!1)})),!b)if(y)b=y,f="RESTful";else if(m)b=m,f="KVP";else{const e=H("ServiceMetadataURL",s);b=e&&e.getAttribute("xlink:href")}const g=b.indexOf("1.0.0/");-1===g&&"RESTful"===f?b+="/":g>-1&&(b=b.substring(0,g)),"KVP"===f&&(b+=g>-1?"":"?"),h&&(b=b.replace(/^http:/i,"https:"));const O=J("ServiceIdentification>AccessConstraints",s),v=B("Layer",l),j=B("TileMatrixSet",l);return{copyright:O,layers:v.map((e=>{const t=J("Identifier",e);return a.set(t,e),function(e,t,r,i){const s=J("Abstract",t),a=z("Format",t);return{id:e,fullExtent:X(t),description:s,formats:a,styles:Y(t,i),title:J("Title",t),tileMatrixSets:Q(t,r)}}(t,e,j,h)})),tileUrl:b,serviceMode:f,layerMap:a,dimensionMap:o}}function D(e){return e.nodeType===Node.ELEMENT_NODE}function H(e,t){for(let r=0;r<t.childNodes.length;r++){const i=t.childNodes[r];if(D(i)&&i.nodeName===e)return i}return null}function B(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const s=t.childNodes[i];D(s)&&s.nodeName===e&&r.push(s)}return r}function z(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const s=t.childNodes[i];D(s)&&s.nodeName===e&&r.push(s)}return r.map((e=>e.textContent))}function J(e,t){return e.split(">").forEach((e=>{t&&(t=H(e,t))})),t&&t.textContent}function q(e,t,r,i){let s;return Array.prototype.slice.call(i.childNodes).some((i=>{if(i.nodeName.indexOf(e)>-1){const e=H(t,i),a=e&&e.textContent;if(a===r||r.split(":")&&r.split(":")[1]===a)return s=i,!0}return!1})),s}function $(e,t){const r=[],i=e.layerMap.get(t);if(!i)return;const s=B("ResourceURL",i),a=B("Dimension",i);let o,l,n,c;return a.length&&(o=J("Identifier",a[0]),l=z("Default",a[0])||z("Value",a[0])),a.length>1&&(n=J("Identifier",a[1]),c=z("Default",a[1])||z("Value",a[1])),e.dimensionMap.set(t,{dimensions:l,dimensions2:c}),s.forEach((e=>{let t=e.getAttribute("template");if("tile"===e.getAttribute("resourceType")){if(o&&l.length)if(t.indexOf("{"+o+"}")>-1)t=t.replace("{"+o+"}","{dimensionValue}");else{const e=t.toLowerCase().indexOf("{"+o.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue}"+t.substring(e+o.length+2))}if(n&&c.length)if(t.indexOf("{"+n+"}")>-1)t=t.replace("{"+n+"}","{dimensionValue2}");else{const e=t.toLowerCase().indexOf("{"+n.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue2}"+t.substring(e+n.length+2))}r.push({template:t,format:e.getAttribute("format"),resourceType:"tile"})}})),r}function X(e){const t=H("WGS84BoundingBox",e),r=t?J("LowerCorner",t).split(" "):["-180","-90"],i=t?J("UpperCorner",t).split(" "):["180","90"];return{xmin:parseFloat(r[0]),ymin:parseFloat(r[1]),xmax:parseFloat(i[0]),ymax:parseFloat(i[1]),spatialReference:{wkid:4326}}}function Y(e,t){return B("Style",e).map((e=>{const r=H("LegendURL",e),i=H("Keywords",e),s=i&&z("Keyword",i);let a=r&&r.getAttribute("xlink:href");return t&&(a=a&&a.replace(/^http:/i,"https:")),{abstract:J("Abstract",e),id:J("Identifier",e),isDefault:"true"===e.getAttribute("isDefault"),keywords:s,legendUrl:a,title:J("Title",e)}}))}function Q(e,t){return B("TileMatrixSetLink",e).map((e=>H("TileMatrixSet",e).textContent)).map((r=>function(e,t,r){const i=z("TileMatrix",q("TileMatrixSetLink","TileMatrixSet",e,t)),s=r.find((t=>{const r=H("Identifier",t),i=r&&r.textContent;return!!(i===e||e.split(":")&&e.split(":")[1]===i)})),a=function(e){let t=J("SupportedCRS",e);t&&(t=t.toLowerCase());let r=parseInt(t.split(":").pop(),10);900913!==r&&3857!==r||(r=102100);let i=!1;t.indexOf("crs84")>-1||t.indexOf("crs:84")>-1?(r=4326,i=!0):t.indexOf("crs83")>-1||t.indexOf("crs:83")>-1?(r=4269,i=!0):(t.indexOf("crs27")>-1||t.indexOf("crs:27")>-1)&&(r=4267,i=!0);const s=new U.a({wkid:r}),a=J("TopLeftCorner",H("TileMatrix",e)).split(" "),o=a[0].split("E").map((e=>Number(e))),l=a[1].split("E").map((e=>Number(e)));let n,c=o[0],u=l[0];o.length>1&&(c=o[0]*10**o[1]),l.length>1&&(u=l[0]*10**l[1]);const p=i&&4326===r&&90===c&&-180===u;return G.some(((e,a)=>{const o=Number(t.split(":").pop());return o>=e[0]&&o<=e[1]||4326===r&&(!i||p)?(n=new N.a(u,c,s),!0):(a===G.length-1&&(n=new N.a(c,u,s)),!1)})),n}(s),o=a.spatialReference,l=o.wkid,n=H("TileMatrix",s),c=[parseInt(J("TileWidth",n),10),parseInt(J("TileHeight",n),10)],u=[];i.length?i.forEach(((t,r)=>{const i=q("TileMatrix","Identifier",t,s);u.push(Z(i,l,r,e))})):B("TileMatrix",s).forEach(((t,r)=>{u.push(Z(t,l,r,e))}));const p=function(e,t,r,i){const s=H("BoundingBox",e);let a,o,l,n,c,u;if(s&&(a=J("LowerCorner",s).split(" "),o=J("UpperCorner",s).split(" ")),a&&a.length>1&&o&&o.length>1)l=parseFloat(a[0]),c=parseFloat(a[1]),n=parseFloat(o[0]),u=parseFloat(o[1]);else{const s=H("TileMatrix",e),a=parseFloat(J("MatrixWidth",s)),o=parseFloat(J("MatrixHeight",s));l=t.x,u=t.y,n=l+a*r[0]*i.resolution,c=u-o*r[1]*i.resolution}return new h.a(l,c,n,u,t.spatialReference)}(s,a,c,u[0]);return{id:e,fullExtent:p.toJSON(),tileInfo:new S.a({dpi:96,spatialReference:o,size:c,origin:a,lods:u}).toJSON()}}(r,e,t)))}function Z(e,t,r,i){const s=J("Identifier",e),a=J("ScaleDenominator",e).split("E").map((e=>Number(e)));let o;o=a.length>1?a[0]*10**a[1]:a[0];const l=ee(t,o,i);return o*=96/K,{level:r,levelValue:s,scale:o,resolution:l}}function ee(e,t,r){let i;return i=V.a.hasOwnProperty(String(e))?V.a.values[V.a[e]]:"default028mm"===r?6370997*Math.PI/180:Object(k.f)(e).metersPerDegree,7*t/25e3/i}const te={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},re=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]);let ie=class extends(Object(v.a)(Object(w.a)(Object(x.a)(Object(O.a)(Object(j.a)(Object(g.a)(b.a))))))){constructor(...e){super(...e),this._sublayersHandles=new f.a,this.copyright="",this.customParameters=null,this.customLayerParameters=null,this.fullExtent=null,this.operationalLayerType="WebTiledLayer",this.resourceInfo=null,this.serviceMode="RESTful",this.sublayers=null,this.type="wmts",this.version="1.0.0",this.watch("activeLayer",((e,t)=>{t&&(t.layer=null),e&&(e.layer=this)}),!0),this.watch("sublayers",((e,t)=>{t&&(t.forEach((e=>{e.layer=null})),this._sublayersHandles.removeAll(),this._sublayersHandles=null),e&&(e.forEach((e=>{e.layer=this})),this._sublayersHandles||(this._sublayersHandles=new f.a),this._sublayersHandles.add([e.on("after-add",(({item:e})=>{e.layer=this})),e.on("after-remove",(({item:e})=>{e.layer=null}))]))}),!0)}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){if("KVP"===this.serviceMode||"RESTful"===this.serviceMode)return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).then((()=>this._fetchService(e))).catch((e=>{throw new p.a("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:e})}))),Promise.resolve(this);console.error("WMTS mode could only be 'KVP' or 'RESTful'")}get activeLayer(){return this._get("activeLayer")}set activeLayer(e){this._set("activeLayer",e)}readActiveLayerFromService(e,t,r){let i;return this.activeLayer?t.layers.some((e=>e.id===this.activeLayer.id&&(i=e,!0))):(this.activeLayer=new R,i=t.layers[0]),this.activeLayer.read(i,r),this.activeLayer}readActiveLayerFromItemOrWebDoc(e,t){const{templateUrl:r,wmtsInfo:i}=t,s=r?this._getLowerCasedUrlParams(r):null,a=i&&i.layerIdentifier;let o=null;const l=i&&i.tileMatrixSet;l&&(Array.isArray(l)?l.length&&(o=l[0]):o=l);const n=s&&s.format,c=s&&s.style;return new R({id:a,imageFormat:n,styleId:c,tileMatrixSetId:o})}writeActiveLayer(e,t,r,i){const s=this.activeLayer;t.templateUrl=this.getUrlTemplate(s.id,s.tileMatrixSetId,s.imageFormat,s.styleId);const a=Object(o.b)("tileMatrixSet.tileInfo",s);t.tileInfo=a?a.toJSON(i):null,t.wmtsInfo={...t.wmtsInfo,layerIdentifier:s.id,tileMatrixSet:s.tileMatrixSetId}}readCustomParameters(e,t){const r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null}get fullExtents(){const e=[];return this.activeLayer.tileMatrixSets.forEach((t=>{t.fullExtent&&e.push(t.fullExtent)})),e}readServiceMode(e,t){return t.templateUrl.indexOf("?")>-1?"KVP":"RESTful"}readSublayersFromService(e,t,r){return function(e,t){return e.map((e=>{const r=new R;return r.read(e,t),r}))}(t.layers,r)}get supportedSpatialReferences(){return this.activeLayer.tileMatrixSets.map((e=>e.tileInfo.spatialReference)).toArray()}get title(){var e,t;return null!=(e=null==(t=this.activeLayer)?void 0:t.title)?e:"Layer"}set title(e){e?this._override("title",e):this._clearOverride("title")}get url(){return this._get("url")}set url(e){e&&"/"===e.substr(-1)?this._set("url",e.slice(0,-1)):this._set("url",e)}createWebTileLayer(e){const t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=this._getTileMatrixSetById(e.tileMatrixSetId).tileInfo,i=e.fullExtent,s=new M.a({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(s.customLayerParameters=this.customLayerParameters),this.customParameters&&(s.customParameters=this.customParameters),new I.default({fullExtent:i,urlTemplate:t,tileInfo:r,wmtsInfo:s})}fetchTile(e,t,r){const i=this.getTileUrl(e,t,r);return Object(y.default)(i,{responseType:"image"}).then((e=>e.data))}findSublayerById(e){return this.sublayers.find((t=>t.id===e))}getTileUrl(e,t,r){const i=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId).tileInfo.lods[e],s=i?i.levelValue?i.levelValue:`${i.level}`:`${e}`;let a=this.resourceInfo?"":function(e,t,r,i,s,a,o,l){const{dimensionMap:n}=e,c=$(e,t),u=n.get(t).dimensions&&n.get(t).dimensions[0],p=n.get(t).dimensions2&&n.get(t).dimensions2[0];let d="";if(c&&c.length>0){let e=null;c.some((t=>t.format===i&&(e=t,!0))),e||(e=c[o%c.length]),d=e.template.replace(/\{Style\}/gi,s).replace(/\{TileMatrixSet\}/gi,r).replace(/\{TileMatrix\}/gi,a).replace(/\{TileRow\}/gi,""+o).replace(/\{TileCol\}/gi,""+l).replace(/\{dimensionValue\}/gi,u).replace(/\{dimensionValue2\}/gi,p)}return d}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,s,t,r);return a||(a=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replace(/\{level\}/gi,s).replace(/\{row\}/gi,`${t}`).replace(/\{col\}/gi,`${r}`)),a=this._appendCustomLayerParameters(a),a}getUrlTemplate(e,t,r,i){if(!this.resourceInfo){const r=function(e,t,r,i){const{dimensionMap:s}=e,a=$(e,t);let o="";if(a&&a.length>0){const e=s.get(t).dimensions&&s.get(t).dimensions[0],l=s.get(t).dimensions2&&s.get(t).dimensions2[0];o=a[0].template,o.indexOf(".xxx")===o.length-4&&(o=o.slice(0,o.length-4)),o=o.replace(/\{Style\}/gi,i),o=o.replace(/\{TileMatrixSet\}/gi,r),o=o.replace(/\{TileMatrix\}/gi,"{level}"),o=o.replace(/\{TileRow\}/gi,"{row}"),o=o.replace(/\{TileCol\}/gi,"{col}"),o=o.replace(/\{dimensionValue\}/gi,e),o=o.replace(/\{dimensionValue2\}/gi,l)}return o}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,i);if(r)return r}if("KVP"===this.serviceMode)return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+i+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if("RESTful"===this.serviceMode){let s="";return te[r.toLowerCase()]&&(s=te[r.toLowerCase()]),this.url+e+"/"+i+"/"+t+"/{level}/{row}/{col}"+s}return""}async _fetchService(e){let t;if(this.resourceInfo)"KVP"===this.resourceInfo.serviceMode&&(this.url+=this.url.indexOf("?")>-1?"":"?"),t={ssl:!1,data:this.resourceInfo};else try{t=await this._getCapabilities(this.serviceMode,e)}catch{const i="KVP"===this.serviceMode?"RESTful":"KVP";try{t=await this._getCapabilities(i,e),this.serviceMode=i}catch(r){throw new p.a("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:r})}}this.resourceInfo?t.data=function(e){return e.layers.forEach((e=>{e.tileMatrixSets.forEach((e=>{const t=e.tileInfo;96!==t.dpi&&(t.lods.forEach((r=>{r.scale=96*r.scale/t.dpi,r.resolution=ee(t.spatialReference.wkid,r.scale*K/96,e.id)})),t.dpi=96)}))})),e}(t.data):t.data=W(t.data,{serviceMode:this.serviceMode,url:this.url}),t.data&&this.read(t.data,{origin:"service"})}async _getCapabilities(e,t){const r=this._getCapabilitiesUrl(e);return await Object(y.default)(r,{...t,responseType:"text"})}_getTileMatrixSetById(e){return this.findSublayerById(this.activeLayer.id).tileMatrixSets.find((t=>t.id===e))}_appendCustomParameters(e){if(this.customParameters)for(const t in this.customParameters)e+=(-1===e.indexOf("?")?"?":"&")+t+"="+encodeURIComponent(this.customParameters[t]);return e}_appendCustomLayerParameters(e){if(this.customLayerParameters||this.customParameters){const t={...Object(a.a)(this.customParameters),...this.customLayerParameters};for(const r in t)e+=(-1===e.indexOf("?")?"?":"&")+r+"="+encodeURIComponent(t[r])}return e}_getCapabilitiesUrl(e){let t;return this.url=this.url.split("?")[0],"KVP"===e?t=this.url+"?request=GetCapabilities&service=WMTS&version="+this.version:"RESTful"===e&&(t=this.url+"/"+this.version+"/WMTSCapabilities.xml"),t=this._appendCustomParameters(t),t}_getLowerCasedUrlParams(e){if(!e)return null;const t=Object(d.J)(e).query;if(!t)return null;const r={};return Object.keys(t).forEach((e=>{r[e.toLowerCase()]=t[e]})),r}_mergeParams(e,t){const r=this._getLowerCasedUrlParams(t);if(r){const t=Object.keys(r);t.length&&(e=e?Object(a.a)(e):{},t.forEach((t=>{e.hasOwnProperty(t)||re.has(t)||(e[t]=r[t])})))}return e}};Object(s.a)([Object(l.b)()],ie.prototype,"dimensionMap",void 0),Object(s.a)([Object(l.b)()],ie.prototype,"layerMap",void 0),Object(s.a)([Object(l.b)({type:R,json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],ie.prototype,"activeLayer",null),Object(s.a)([Object(n.a)("service","activeLayer",["layers"])],ie.prototype,"readActiveLayerFromService",null),Object(s.a)([Object(n.a)(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],ie.prototype,"readActiveLayerFromItemOrWebDoc",null),Object(s.a)([Object(u.a)(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:S.a},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],ie.prototype,"writeActiveLayer",null),Object(s.a)([Object(l.b)({type:String,value:"",json:{write:!0}})],ie.prototype,"copyright",void 0),Object(s.a)([Object(l.b)({type:["show","hide"]})],ie.prototype,"listMode",void 0),Object(s.a)([Object(l.b)({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],ie.prototype,"customParameters",void 0),Object(s.a)([Object(n.a)("web-document","customParameters"),Object(n.a)("portal-item","customParameters")],ie.prototype,"readCustomParameters",null),Object(s.a)([Object(l.b)({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],ie.prototype,"customLayerParameters",void 0),Object(s.a)([Object(l.b)({type:h.a,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],ie.prototype,"fullExtent",void 0),Object(s.a)([Object(l.b)({readOnly:!0})],ie.prototype,"fullExtents",null),Object(s.a)([Object(l.b)({type:["WebTiledLayer"]})],ie.prototype,"operationalLayerType",void 0),Object(s.a)([Object(l.b)()],ie.prototype,"resourceInfo",void 0),Object(s.a)([Object(l.b)()],ie.prototype,"serviceMode",void 0),Object(s.a)([Object(n.a)(["portal-item","web-document"],"serviceMode",["templateUrl"])],ie.prototype,"readServiceMode",null),Object(s.a)([Object(l.b)({type:m.a.ofType(R)})],ie.prototype,"sublayers",void 0),Object(s.a)([Object(n.a)("service","sublayers",["layers"])],ie.prototype,"readSublayersFromService",null),Object(s.a)([Object(l.b)({readOnly:!0})],ie.prototype,"supportedSpatialReferences",null),Object(s.a)([Object(l.b)({json:{read:{source:"title"}}})],ie.prototype,"title",null),Object(s.a)([Object(l.b)({json:{read:!1},readOnly:!0,value:"wmts"})],ie.prototype,"type",void 0),Object(s.a)([Object(l.b)({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],ie.prototype,"url",null),Object(s.a)([Object(l.b)()],ie.prototype,"version",void 0),ie=Object(s.a)([Object(c.a)("esri.layers.WMTSLayer")],ie);var se=ie;t.default=se}}]);
//# sourceMappingURL=252.89cbe5c1.chunk.js.map