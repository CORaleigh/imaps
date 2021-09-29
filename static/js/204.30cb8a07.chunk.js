(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[204],{117:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var i=r(81),s=r(92),a=r(103),l=r(85),o=r(83),n=r(82);let c=class extends s.a{constructor(e){super(e),this._groups=new Map}destroy(){this.removeAll()}get size(){let e=0;return this._groups.forEach((t=>{e+=t.length})),e}add(e,t){if(!this._isHandle(e)&&!Array.isArray(e)&&!a.a.isCollection(e))return this;const r=this._getOrCreateGroup(t);return Array.isArray(e)||a.a.isCollection(e)?e.forEach((e=>this._isHandle(e)&&r.push(e))):r.push(e),this.notifyChange("size"),this}forEach(e,t){if("function"==typeof e)this._groups.forEach((t=>t.forEach(e)));else{const r=this._getGroup(e);r&&t&&r.forEach(t)}}has(e){return this._groups.has(this._ensureGroupKey(e))}remove(e){if(Array.isArray(e)||a.a.isCollection(e))return e.forEach(this.remove,this),this;if(!this.has(e))return this;const t=this._getGroup(e);for(let r=0;r<t.length;r++)t[r].remove();return this._deleteGroup(e),this.notifyChange("size"),this}removeAll(){return this._groups.forEach((e=>{for(let t=0;t<e.length;t++)e[t].remove()})),this._groups.clear(),this.notifyChange("size"),this}_isHandle(e){return e&&!!e.remove}_getOrCreateGroup(e){if(this.has(e))return this._getGroup(e);const t=[];return this._groups.set(this._ensureGroupKey(e),t),t}_getGroup(e){return Object(l.d)(this._groups.get(this._ensureGroupKey(e)))}_deleteGroup(e){return this._groups.delete(this._ensureGroupKey(e))}_ensureGroupKey(e){return e||"_default_"}};Object(i.a)([Object(o.b)({readOnly:!0})],c.prototype,"size",null),c=Object(i.a)([Object(n.a)("esri.core.Handles")],c);var u=c},907:function(e,t,r){"use strict";function i(e,t){for(const r of e.children)if(r.localName in t){const e=t[r.localName];if("function"==typeof e){const t=e(r);t&&i(r,t)}else i(r,e)}}function*s(e,t){for(const r of e.children)if(r.localName in t){const e=t[r.localName];"function"==typeof e?yield e(r):yield*s(r,e)}}r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return i}))},937:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return ce}));var i,s=r(81),a=r(100),l=r(103),o=r(88),n=r(117),c=r(87),u=r(202),p=r(116),d=r(89),h=r(96),m=r(83),y=(r(84),r(79),r(80),r(94)),f=r(82),b=r(91),g=r(99),O=r(183),v=r(818),j=r(319),x=r(244),w=r(243),S=r(269),I=r(299),M=r(361),E=r(1110),L=r(86);let T=i=class extends L.a{constructor(e){super(e),this.fullExtent=null,this.id=null,this.tileInfo=null}clone(){const e=new i;return this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("tileInfo")&&(e.tileInfo=this.tileInfo&&this.tileInfo.clone()),e}};Object(s.a)([Object(m.b)({type:g.a,json:{read:{source:"fullExtent"}}})],T.prototype,"fullExtent",void 0),Object(s.a)([Object(m.b)({type:String,json:{read:{source:"id"}}})],T.prototype,"id",void 0),Object(s.a)([Object(m.b)({type:M.a,json:{read:{source:"tileInfo"}}})],T.prototype,"tileInfo",void 0),T=i=Object(s.a)([Object(f.a)("esri.layer.support.TileMatrixSet")],T);var P,_=T;let C=P=class extends L.a{constructor(e){super(e),this.id=null,this.title=null,this.description=null,this.legendUrl=null}clone(){const e=new P;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("isDefault")&&(e.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(e.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(e.title=this.title),e}};Object(s.a)([Object(m.b)({json:{read:{source:"id"}}})],C.prototype,"id",void 0),Object(s.a)([Object(m.b)({json:{read:{source:"title"}}})],C.prototype,"title",void 0),Object(s.a)([Object(m.b)({json:{read:{source:"abstract"}}})],C.prototype,"description",void 0),Object(s.a)([Object(m.b)({json:{read:{source:"legendUrl"}}})],C.prototype,"legendUrl",void 0),Object(s.a)([Object(m.b)({json:{read:{source:"isDefault"}}})],C.prototype,"isDefault",void 0),Object(s.a)([Object(m.b)({json:{read:{source:"keywords"}}})],C.prototype,"keywords",void 0),C=P=Object(s.a)([Object(f.a)("esri.layer.support.WMTSStyle")],C);var F,R=C;let A=F=class extends L.a{constructor(e){super(e),this.fullExtent=null,this.fullExtents=null,this.imageFormats=null,this.id=null,this.layer=null,this.styles=null,this.tileMatrixSetId=null,this.tileMatrixSets=null}get description(){return this._get("description")}set description(e){this._set("description",e)}readFullExtent(e,t){return(e=t.fullExtent)?g.a.fromJSON(e):null}readFullExtents(e,t){var r;return null!=(r=t.fullExtents)&&r.length?t.fullExtents.map((e=>g.a.fromJSON(e))):t.tileMatrixSets.map((e=>g.a.fromJSON(e.fullExtent))).filter((e=>e))}get imageFormat(){let e=this._get("imageFormat");return e||(e=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),e}set imageFormat(e){const t=this.imageFormats;e&&(e.indexOf("image/")>-1||t&&-1===t.indexOf(e))&&(-1===e.indexOf("image/")&&(e="image/"+e),t&&-1===t.indexOf(e))?console.error("The layer doesn't support the format of "+e):this._set("imageFormat",e)}get styleId(){let e=this._get("styleId");return e||(e=this.styles&&this.styles.length?this.styles.getItemAt(0).id:""),e}set styleId(e){this._set("styleId",e)}get title(){return this._get("title")}set title(e){this._set("title",e)}get tileMatrixSet(){return this.tileMatrixSets?this.tileMatrixSets.find((e=>e.id===this.tileMatrixSetId)):null}clone(){const e=new F;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("imageFormats")&&(e.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(e.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("styleId")&&(e.styleId=this.styleId),this.hasOwnProperty("styles")&&(e.styles=this.styles&&this.styles.clone()),this.hasOwnProperty("tileMatrixSetId")&&(e.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(e.tileMatrixSets=this.tileMatrixSets.clone()),this.hasOwnProperty("title")&&(e.title=this.title),e}};Object(s.a)([Object(m.b)()],A.prototype,"description",null),Object(s.a)([Object(m.b)()],A.prototype,"fullExtent",void 0),Object(s.a)([Object(y.a)("fullExtent",["fullExtent"])],A.prototype,"readFullExtent",null),Object(s.a)([Object(m.b)({readOnly:!0})],A.prototype,"fullExtents",void 0),Object(s.a)([Object(y.a)("fullExtents",["fullExtents","tileMatrixSets"])],A.prototype,"readFullExtents",null),Object(s.a)([Object(m.b)()],A.prototype,"imageFormat",null),Object(s.a)([Object(m.b)({json:{read:{source:"formats"}}})],A.prototype,"imageFormats",void 0),Object(s.a)([Object(m.b)()],A.prototype,"id",void 0),Object(s.a)([Object(m.b)()],A.prototype,"layer",void 0),Object(s.a)([Object(m.b)()],A.prototype,"styleId",null),Object(s.a)([Object(m.b)({type:l.a.ofType(R),json:{read:{source:"styles"}}})],A.prototype,"styles",void 0),Object(s.a)([Object(m.b)({value:null,json:{write:{ignoreOrigin:!0}}})],A.prototype,"title",null),Object(s.a)([Object(m.b)()],A.prototype,"tileMatrixSetId",void 0),Object(s.a)([Object(m.b)({readOnly:!0})],A.prototype,"tileMatrixSet",null),Object(s.a)([Object(m.b)({type:l.a.ofType(_),json:{read:{source:"tileMatrixSets"}}})],A.prototype,"tileMatrixSets",void 0),A=F=Object(s.a)([Object(f.a)("esri.layers.support.WMTSSublayer")],A);var V=A,U=r(85),N=r(110),k=r(180),K=r(266),W=r(907);const G=90.71428571428571,D=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];function H(e,t){var r,i;e=e.replace(/ows:/gi,"");const s=(new DOMParser).parseFromString(e,"text/xml").documentElement,a=new Map,l=new Map,n=J("Contents",s);if(!n)throw new o.a("wmtslayer:wmts-capabilities-xml-is-not-valid");const c=J("OperationsMetadata",s),u=null==c?void 0:c.querySelector("[name='GetTile']"),p=null==u?void 0:u.getElementsByTagName("Get"),d=p&&Array.prototype.slice.call(p),h=null!=(r=(null==t||null==(i=t.url)?void 0:i.indexOf("https"))>-1)&&r;let m,y,f=t.serviceMode,b=t&&t.url;if(d&&d.length&&d.some((e=>{const t=J("Constraint",e);return!t||X("AllowedValues","Value",f,t)?(b=e.attributes[0].nodeValue,!0):(!t||X("AllowedValues","Value","RESTful",t)||X("AllowedValues","Value","REST",t)?y=e.attributes[0].nodeValue:t&&!X("AllowedValues","Value","KVP",t)||(m=e.attributes[0].nodeValue),!1)})),!b)if(y)b=y,f="RESTful";else if(m)b=m,f="KVP";else{const e=J("ServiceMetadataURL",s);b=e&&e.getAttribute("xlink:href")}const g=b.indexOf("1.0.0/");-1===g&&"RESTful"===f?b+="/":g>-1&&(b=b.substring(0,g)),"KVP"===f&&(b+=g>-1?"":"?"),h&&(b=b.replace(/^http:/i,"https:"));const O=$("ServiceIdentification>ServiceTypeVersion",s),v=$("ServiceIdentification>AccessConstraints",s),j=z("Layer",n),x=z("TileMatrixSet",n),w=j.map((e=>{const t=$("Identifier",e);return a.set(t,e),function(e,t,r,i,s){const a=$("Abstract",t),l=q("Format",t);return{id:e,fullExtent:Q(t),fullExtents:Z(t),description:a,formats:l,styles:ee(t,i),title:$("Title",t),tileMatrixSets:te(s,t,r)}}(t,e,x,h,O)}));return{copyright:v,dimensionMap:l,layerMap:a,layers:w,serviceMode:f,tileUrl:b}}function B(e){return e.nodeType===Node.ELEMENT_NODE}function J(e,t){for(let r=0;r<t.childNodes.length;r++){const i=t.childNodes[r];if(B(i)&&i.nodeName===e)return i}return null}function z(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const s=t.childNodes[i];B(s)&&s.nodeName===e&&r.push(s)}return r}function q(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const s=t.childNodes[i];B(s)&&s.nodeName===e&&r.push(s)}return r.map((e=>e.textContent))}function $(e,t){return e.split(">").forEach((e=>{t&&(t=J(e,t))})),t&&t.textContent}function X(e,t,r,i){let s;return Array.prototype.slice.call(i.childNodes).some((i=>{if(i.nodeName.indexOf(e)>-1){const e=J(t,i),a=e&&e.textContent;if(a===r||r.split(":")&&r.split(":")[1]===a)return s=i,!0}return!1})),s}function Y(e,t){var r;const i=[],s=null==(r=e.layerMap)?void 0:r.get(t);if(!s)return;const a=z("ResourceURL",s),l=z("Dimension",s);let o,n,c,u;return l.length&&(o=$("Identifier",l[0]),n=q("Default",l[0])||q("Value",l[0])),l.length>1&&(c=$("Identifier",l[1]),u=q("Default",l[1])||q("Value",l[1])),e.dimensionMap.set(t,{dimensions:n,dimensions2:u}),a.forEach((e=>{let t=e.getAttribute("template");if("tile"===e.getAttribute("resourceType")){if(o&&n.length)if(t.indexOf("{"+o+"}")>-1)t=t.replace("{"+o+"}","{dimensionValue}");else{const e=t.toLowerCase().indexOf("{"+o.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue}"+t.substring(e+o.length+2))}if(c&&u.length)if(t.indexOf("{"+c+"}")>-1)t=t.replace("{"+c+"}","{dimensionValue2}");else{const e=t.toLowerCase().indexOf("{"+c.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue2}"+t.substring(e+c.length+2))}i.push({template:t,format:e.getAttribute("format"),resourceType:"tile"})}})),i}function Q(e){const t=J("WGS84BoundingBox",e),r=t?$("LowerCorner",t).split(" "):["-180","-90"],i=t?$("UpperCorner",t).split(" "):["180","90"];return{xmin:parseFloat(r[0]),ymin:parseFloat(r[1]),xmax:parseFloat(i[0]),ymax:parseFloat(i[1]),spatialReference:{wkid:4326}}}function Z(e){const t=[];return Object(W.b)(e,{BoundingBox:e=>{const r=e.getAttribute("crs"),i=re(r),s=r.includes("epsg")&&ie(i.wkid);let a,l,o,n;Object(W.b)(e,{LowerCorner:e=>{[a,l]=e.textContent.split(" ").map((e=>Number.parseFloat(e))),s&&([a,l]=[l,a])},UpperCorner:e=>{[o,n]=e.textContent.split(" ").map((e=>Number.parseFloat(e))),s&&([o,n]=[n,o])}}),t.push({xmin:a,ymin:l,xmax:o,ymax:n,spatialReference:i})}}),t}function ee(e,t){return z("Style",e).map((e=>{const r=J("LegendURL",e),i=J("Keywords",e),s=i&&q("Keyword",i);let a=r&&r.getAttribute("xlink:href");return t&&(a=a&&a.replace(/^http:/i,"https:")),{abstract:$("Abstract",e),id:$("Identifier",e),isDefault:"true"===e.getAttribute("isDefault"),keywords:s,legendUrl:a,title:$("Title",e)}}))}function te(e,t,r){return z("TileMatrixSetLink",t).map((e=>J("TileMatrixSet",e).textContent)).map((i=>function(e,t,r,i){const s=q("TileMatrix",X("TileMatrixSetLink","TileMatrixSet",t,r)),a=i.find((e=>{const r=J("Identifier",e),i=r&&r.textContent;return!!(i===t||t.split(":")&&t.split(":")[1]===i)})),l=function(e){const t=$("SupportedCRS",e).toLowerCase(),r=re(t),i=$("TopLeftCorner",J("TileMatrix",e)).split(" "),s=i[0].split("E").map((e=>Number(e))),a=i[1].split("E").map((e=>Number(e))),l=s.length>1?s[0]*10**s[1]:s[0],o=a.length>1?a[0]*10**a[1]:a[0];return t.includes("epsg")&&ie(r.wkid)?new N.a({x:o,y:l,spatialReference:r}):new N.a({x:l,y:o,spatialReference:r})}(a),o=l.spatialReference,n=o.wkid,c=J("TileMatrix",a),u=[parseInt($("TileWidth",c),10),parseInt($("TileHeight",c),10)],p=[];s.length?s.forEach(((e,r)=>{const i=X("TileMatrix","Identifier",e,a);p.push(se(i,n,r,t))})):z("TileMatrix",a).forEach(((e,r)=>{p.push(se(e,n,r,t))}));const d=function(e,t,r,i,s){const a=J("BoundingBox",t);let l,o,n,c,u,p;if(a&&(l=$("LowerCorner",a).split(" "),o=$("UpperCorner",a).split(" ")),l&&l.length>1&&o&&o.length>1)n=parseFloat(l[0]),u=parseFloat(l[1]),c=parseFloat(o[0]),p=parseFloat(o[1]);else{const e=J("TileMatrix",t),a=parseInt($("MatrixWidth",e),10),l=parseInt($("MatrixHeight",e),10);n=r.x,p=r.y,c=n+a*i[0]*s.resolution,u=p-l*i[1]*s.resolution}return function(e,t){return"1.0.0"===e&&ie(t.wkid)}(e,r.spatialReference)?new g.a(u,n,p,c,r.spatialReference):new g.a(n,u,c,p,r.spatialReference)}(e,a,l,u,p[0]).toJSON(),h=new M.a({dpi:96,spatialReference:o,size:u,origin:l,lods:p}).toJSON();return{id:t,fullExtent:d,tileInfo:h}}(e,i,t,r)))}function re(e){e=e.toLowerCase();let t=parseInt(e.split(":").pop(),10);900913!==t&&3857!==t||(t=102100);const r=function(e){return e.includes("crs84")||e.includes("crs:84")?4326:e.includes("crs83")||e.includes("crs:83")?4269:e.includes("crs27")||e.includes("crs:27")?4267:null}(e);return Object(U.k)(r)&&(t=r),{wkid:t}}function ie(e){return D.some((([t,r])=>e>=t&&e<=r))}function se(e,t,r,i){const s=$("Identifier",e),a=$("ScaleDenominator",e).split("E").map((e=>Number(e)));let l;l=a.length>1?a[0]*10**a[1]:a[0];const o=ae(t,l,i);return l*=96/G,{cols:parseInt($("MatrixWidth",e),10),level:r,levelValue:s,scale:l,resolution:o,rows:parseInt($("MatrixHeight",e),10)}}function ae(e,t,r){let i;return i=K.a.hasOwnProperty(String(e))?K.a.values[K.a[e]]:"default028mm"===r?6370997*Math.PI/180:Object(k.f)(e).metersPerDegree,7*t/25e3/i}const le={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},oe=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]);let ne=class extends(Object(j.a)(Object(S.a)(Object(I.a)(Object(x.a)(Object(w.a)(Object(u.a)(O.a))))))){constructor(...e){super(...e),this._sublayersHandles=new n.a,this.copyright="",this.customParameters=null,this.customLayerParameters=null,this.fullExtent=null,this.operationalLayerType="WebTiledLayer",this.resourceInfo=null,this.serviceMode="RESTful",this.sublayers=null,this.type="wmts",this.version="1.0.0",this.watch("activeLayer",((e,t)=>{t&&(t.layer=null),e&&(e.layer=this)}),!0),this.watch("sublayers",((e,t)=>{t&&(t.forEach((e=>{e.layer=null})),this._sublayersHandles.removeAll(),this._sublayersHandles=null),e&&(e.forEach((e=>{e.layer=this})),this._sublayersHandles||(this._sublayersHandles=new n.a),this._sublayersHandles.add([e.on("after-add",(({item:e})=>{e.layer=this})),e.on("after-remove",(({item:e})=>{e.layer=null}))]))}),!0)}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){if("KVP"===this.serviceMode||"RESTful"===this.serviceMode)return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).catch(d.u).then((()=>this._fetchService(e))).catch((e=>{throw Object(d.u)(e),new o.a("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:e})}))),Promise.resolve(this);console.error("WMTS mode could only be 'KVP' or 'RESTful'")}get activeLayer(){return this._get("activeLayer")}set activeLayer(e){this._set("activeLayer",e)}readActiveLayerFromService(e,t,r){this.activeLayer||(this.activeLayer=new V);let i=t.layers.find((e=>e.id===this.activeLayer.id));return i||(i=t.layers[0]),this.activeLayer.read(i,r),this.activeLayer}readActiveLayerFromItemOrWebDoc(e,t){const{templateUrl:r,wmtsInfo:i}=t,s=r?this._getLowerCasedUrlParams(r):null,a=null==i?void 0:i.layerIdentifier;let l=null;const o=null==i?void 0:i.tileMatrixSet;o&&(Array.isArray(o)?o.length&&(l=o[0]):l=o);const n=null==s?void 0:s.format,c=null==s?void 0:s.style;return new V({id:a,imageFormat:n,styleId:c,tileMatrixSetId:l})}writeActiveLayer(e,t,r,i){const s=this.activeLayer;t.templateUrl=this.getUrlTemplate(s.id,s.tileMatrixSetId,s.imageFormat,s.styleId);const a=Object(p.b)("tileMatrixSet.tileInfo",s);t.tileInfo=a?a.toJSON(i):null,t.wmtsInfo={...t.wmtsInfo,layerIdentifier:s.id,tileMatrixSet:s.tileMatrixSetId}}readCustomParameters(e,t){const r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null}get fullExtents(){return this.activeLayer.fullExtents}readServiceMode(e,t){return t.templateUrl.indexOf("?")>-1?"KVP":"RESTful"}readSublayersFromService(e,t,r){return function(e,t){return e.map((e=>{const r=new V;return r.read(e,t),r}))}(t.layers,r)}get supportedSpatialReferences(){return this.activeLayer.tileMatrixSets.map((e=>e.tileInfo.spatialReference)).toArray()}get title(){var e,t;return null!=(e=null==(t=this.activeLayer)?void 0:t.title)?e:"Layer"}set title(e){e?this._override("title",e):this._clearOverride("title")}get url(){return this._get("url")}set url(e){e&&"/"===e.substr(-1)?this._set("url",e.slice(0,-1)):this._set("url",e)}createWebTileLayer(e){const t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=this._getTileMatrixSetById(e.tileMatrixSetId).tileInfo,i=e.fullExtent,s=new E.a({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(s.customLayerParameters=this.customLayerParameters),this.customParameters&&(s.customParameters=this.customParameters),new v.default({fullExtent:i,urlTemplate:t,tileInfo:r,wmtsInfo:s})}fetchTile(e,t,r){const i=this.getTileUrl(e,t,r);return Object(a.default)(i,{responseType:"image"}).then((e=>e.data))}findSublayerById(e){return this.sublayers.find((t=>t.id===e))}getTileUrl(e,t,r){const i=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId).tileInfo.lods[e],s=i?i.levelValue?i.levelValue:`${i.level}`:`${e}`;let a=this.resourceInfo?"":function(e,t,r,i,s,a,l,o){const{dimensionMap:n}=e,c=Y(e,t),u=n.get(t).dimensions&&n.get(t).dimensions[0],p=n.get(t).dimensions2&&n.get(t).dimensions2[0];let d="";if(c&&c.length>0){let e=null;c.some((t=>t.format===i&&(e=t,!0))),e||(e=c[l%c.length]),d=e.template.replace(/\{Style\}/gi,s).replace(/\{TileMatrixSet\}/gi,r).replace(/\{TileMatrix\}/gi,a).replace(/\{TileRow\}/gi,""+l).replace(/\{TileCol\}/gi,""+o).replace(/\{dimensionValue\}/gi,u).replace(/\{dimensionValue2\}/gi,p)}return d}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,s,t,r);return a||(a=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replace(/\{level\}/gi,s).replace(/\{row\}/gi,`${t}`).replace(/\{col\}/gi,`${r}`)),a=this._appendCustomLayerParameters(a),a}getUrlTemplate(e,t,r,i){if(!this.resourceInfo){const r=function(e,t,r,i){const{dimensionMap:s}=e,a=Y(e,t);let l="";if(a&&a.length>0){const e=s.get(t).dimensions&&s.get(t).dimensions[0],o=s.get(t).dimensions2&&s.get(t).dimensions2[0];l=a[0].template,l.indexOf(".xxx")===l.length-4&&(l=l.slice(0,l.length-4)),l=l.replace(/\{Style\}/gi,i),l=l.replace(/\{TileMatrixSet\}/gi,r),l=l.replace(/\{TileMatrix\}/gi,"{level}"),l=l.replace(/\{TileRow\}/gi,"{row}"),l=l.replace(/\{TileCol\}/gi,"{col}"),l=l.replace(/\{dimensionValue\}/gi,e),l=l.replace(/\{dimensionValue2\}/gi,o)}return l}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,i);if(r)return r}if("KVP"===this.serviceMode)return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+i+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if("RESTful"===this.serviceMode){let s="";return le[r.toLowerCase()]&&(s=le[r.toLowerCase()]),this.url+e+"/"+i+"/"+t+"/{level}/{row}/{col}"+s}return""}async _fetchService(e){let t;if(this.resourceInfo)"KVP"===this.resourceInfo.serviceMode&&(this.url+=this.url.indexOf("?")>-1?"":"?"),t={ssl:!1,data:this.resourceInfo};else try{t=await this._getCapabilities(this.serviceMode,e)}catch{const i="KVP"===this.serviceMode?"RESTful":"KVP";try{t=await this._getCapabilities(i,e),this.serviceMode=i}catch(r){throw new o.a("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:r})}}this.resourceInfo?t.data=function(e){return e.layers.forEach((e=>{e.tileMatrixSets.forEach((e=>{const t=e.tileInfo;96!==t.dpi&&(t.lods.forEach((r=>{r.scale=96*r.scale/t.dpi,r.resolution=ae(t.spatialReference.wkid,r.scale*G/96,e.id)})),t.dpi=96)}))})),e}(t.data):t.data=H(t.data,{serviceMode:this.serviceMode,url:this.url}),t.data&&this.read(t.data,{origin:"service"})}async _getCapabilities(e,t){const r=this._getCapabilitiesUrl(e);return await Object(a.default)(r,{...t,responseType:"text"})}_getTileMatrixSetById(e){return this.findSublayerById(this.activeLayer.id).tileMatrixSets.find((t=>t.id===e))}_appendCustomParameters(e){if(this.customParameters)for(const t in this.customParameters)e+=(-1===e.indexOf("?")?"?":"&")+t+"="+encodeURIComponent(this.customParameters[t]);return e}_appendCustomLayerParameters(e){if(this.customLayerParameters||this.customParameters){const t={...Object(c.a)(this.customParameters),...this.customLayerParameters};for(const r in t)e+=(-1===e.indexOf("?")?"?":"&")+r+"="+encodeURIComponent(t[r])}return e}_getCapabilitiesUrl(e){let t;return this.url=this.url.split("?")[0],"KVP"===e?t=this.url+"?request=GetCapabilities&service=WMTS&version="+this.version:"RESTful"===e&&(t=this.url+"/"+this.version+"/WMTSCapabilities.xml"),t=this._appendCustomParameters(t),t}_getLowerCasedUrlParams(e){if(!e)return null;const t=Object(h.K)(e).query;if(!t)return null;const r={};return Object.keys(t).forEach((e=>{r[e.toLowerCase()]=t[e]})),r}_mergeParams(e,t){const r=this._getLowerCasedUrlParams(t);if(r){const t=Object.keys(r);t.length&&(e=e?Object(c.a)(e):{},t.forEach((t=>{e.hasOwnProperty(t)||oe.has(t)||(e[t]=r[t])})))}return e}};Object(s.a)([Object(m.b)()],ne.prototype,"dimensionMap",void 0),Object(s.a)([Object(m.b)()],ne.prototype,"layerMap",void 0),Object(s.a)([Object(m.b)({type:V,json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],ne.prototype,"activeLayer",null),Object(s.a)([Object(y.a)("service","activeLayer",["layers"])],ne.prototype,"readActiveLayerFromService",null),Object(s.a)([Object(y.a)(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],ne.prototype,"readActiveLayerFromItemOrWebDoc",null),Object(s.a)([Object(b.a)(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:M.a},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],ne.prototype,"writeActiveLayer",null),Object(s.a)([Object(m.b)({type:String,value:"",json:{write:!0}})],ne.prototype,"copyright",void 0),Object(s.a)([Object(m.b)({type:["show","hide"]})],ne.prototype,"listMode",void 0),Object(s.a)([Object(m.b)({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],ne.prototype,"customParameters",void 0),Object(s.a)([Object(y.a)("web-document","customParameters"),Object(y.a)("portal-item","customParameters")],ne.prototype,"readCustomParameters",null),Object(s.a)([Object(m.b)({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],ne.prototype,"customLayerParameters",void 0),Object(s.a)([Object(m.b)({type:g.a,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],ne.prototype,"fullExtent",void 0),Object(s.a)([Object(m.b)({readOnly:!0})],ne.prototype,"fullExtents",null),Object(s.a)([Object(m.b)({type:["WebTiledLayer"]})],ne.prototype,"operationalLayerType",void 0),Object(s.a)([Object(m.b)()],ne.prototype,"resourceInfo",void 0),Object(s.a)([Object(m.b)()],ne.prototype,"serviceMode",void 0),Object(s.a)([Object(y.a)(["portal-item","web-document"],"serviceMode",["templateUrl"])],ne.prototype,"readServiceMode",null),Object(s.a)([Object(m.b)({type:l.a.ofType(V)})],ne.prototype,"sublayers",void 0),Object(s.a)([Object(y.a)("service","sublayers",["layers"])],ne.prototype,"readSublayersFromService",null),Object(s.a)([Object(m.b)({readOnly:!0})],ne.prototype,"supportedSpatialReferences",null),Object(s.a)([Object(m.b)({json:{read:{source:"title"}}})],ne.prototype,"title",null),Object(s.a)([Object(m.b)({json:{read:!1},readOnly:!0,value:"wmts"})],ne.prototype,"type",void 0),Object(s.a)([Object(m.b)({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],ne.prototype,"url",null),Object(s.a)([Object(m.b)()],ne.prototype,"version",void 0),ne=Object(s.a)([Object(f.a)("esri.layers.WMTSLayer")],ne);var ce=ne}}]);
//# sourceMappingURL=204.30cb8a07.chunk.js.map