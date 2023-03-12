import{sy as re,e as o,y as u,aq as R,ag as Y,a as D,l as z,iO as C,D as q,ad as N,ah as fe,ai as ge,sz as K,sA as we,I as Q,iC as xe,qN as ve,iD as Se,iF as Me,iG as Ie,iJ as Le,x as ie,dq as j,Q as se,eY as ae,rY as Te,af as B,ae as le,is as oe,it as be,iN as Ee,fQ as Pe}from"./index-7753bab1.js";import{p as Ce,L as Oe}from"./WebTileLayer-0b22f7ea.js";import{e as Re}from"./imageBitmapUtils-e80e32e9.js";import{o as X}from"./crsUtils-3bab3d8c.js";import{o as ne}from"./xmlUtils-444cb4c0.js";let Fe=class{constructor(t,r=0,i=t.lods.length-1){this.tileInfo=t,this.minLOD=r,this.maxLOD=i}getAvailability(t,r,i){var l;const s=(l=this.tileInfo)==null?void 0:l.lodAt(t);return!s||t<this.minLOD||t>this.maxLOD?"unavailable":s.cols&&s.rows?i>=s.cols[0]&&i<=s.cols[1]&&r>=s.rows[0]&&r<=s.rows[1]?"available":"unavailable":"available"}async fetchAvailability(t,r,i,s){return await re(s),this.getAvailability(t,r,i)}async fetchAvailabilityUpsample(t,r,i,s,l){await re(l),s.level=t,s.row=r,s.col=i;const a=this.tileInfo;for(a.updateTileInfo(s);;){const n=this.getAvailability(s.level,s.row,s.col);if(n!=="unavailable")return n;if(!a.upsampleTile(s))return"unavailable"}}};var G;let F=G=class extends z{constructor(e){super(e),this.fullExtent=null,this.id=null,this.tileInfo=null}clone(){const e=new G;return this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("tileInfo")&&(e.tileInfo=this.tileInfo&&this.tileInfo.clone()),e}};o([u({type:R,json:{read:{source:"fullExtent"}}})],F.prototype,"fullExtent",void 0),o([u({type:String,json:{read:{source:"id"}}})],F.prototype,"id",void 0),o([u({type:Y,json:{read:{source:"tileInfo"}}})],F.prototype,"tileInfo",void 0),F=G=o([D("esri.layer.support.TileMatrixSet")],F);const $e=F;var J;let T=J=class extends z{constructor(e){super(e),this.id=null,this.title=null,this.description=null,this.legendUrl=null}clone(){const e=new J;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("isDefault")&&(e.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(e.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(e.title=this.title),e}};o([u({json:{read:{source:"id"}}})],T.prototype,"id",void 0),o([u({json:{read:{source:"title"}}})],T.prototype,"title",void 0),o([u({json:{read:{source:"abstract"}}})],T.prototype,"description",void 0),o([u({json:{read:{source:"legendUrl"}}})],T.prototype,"legendUrl",void 0),o([u({json:{read:{source:"isDefault"}}})],T.prototype,"isDefault",void 0),o([u({json:{read:{source:"keywords"}}})],T.prototype,"keywords",void 0),T=J=o([D("esri.layer.support.WMTSStyle")],T);const Ae=T;var H;let v=H=class extends z{constructor(e){super(e),this.fullExtent=null,this.fullExtents=null,this.imageFormats=null,this.id=null,this.layer=null,this.styles=null,this.tileMatrixSetId=null,this.tileMatrixSets=null}get description(){return this._get("description")}set description(e){this._set("description",e)}readFullExtent(e,t){return(e=t.fullExtent)?R.fromJSON(e):null}readFullExtents(e,t){var r,i;return(r=t.fullExtents)!=null&&r.length?t.fullExtents.map(s=>R.fromJSON(s)):((i=t.tileMatrixSets)==null?void 0:i.map(s=>R.fromJSON(s.fullExtent)).filter(s=>s))??[]}get imageFormat(){let e=this._get("imageFormat");return e||(e=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),e}set imageFormat(e){const t=this.imageFormats;e&&(e.includes("image/")||t&&!t.includes(e))&&(e.includes("image/")||(e="image/"+e),t&&!t.includes(e))?console.error("The layer doesn't support the format of "+e):this._set("imageFormat",e)}get styleId(){var t;let e=this._get("styleId");return e||(e=(t=this.styles)!=null&&t.length?this.styles.getItemAt(0).id:""),e}set styleId(e){this._set("styleId",e)}get title(){return this._get("title")}set title(e){this._set("title",e)}get tileMatrixSet(){return this.tileMatrixSets?this.tileMatrixSets.find(e=>e.id===this.tileMatrixSetId):null}clone(){var t;const e=new H;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("imageFormats")&&(e.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(e.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("styleId")&&(e.styleId=this.styleId),this.hasOwnProperty("styles")&&(e.styles=this.styles&&this.styles.clone()),this.hasOwnProperty("tileMatrixSetId")&&(e.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(e.tileMatrixSets=(t=this.tileMatrixSets)==null?void 0:t.clone()),this.hasOwnProperty("title")&&(e.title=this.title),e}};o([u()],v.prototype,"description",null),o([u()],v.prototype,"fullExtent",void 0),o([C("fullExtent",["fullExtent"])],v.prototype,"readFullExtent",null),o([u({readOnly:!0})],v.prototype,"fullExtents",void 0),o([C("fullExtents",["fullExtents","tileMatrixSets"])],v.prototype,"readFullExtents",null),o([u()],v.prototype,"imageFormat",null),o([u({json:{read:{source:"formats"}}})],v.prototype,"imageFormats",void 0),o([u()],v.prototype,"id",void 0),o([u()],v.prototype,"layer",void 0),o([u()],v.prototype,"styleId",null),o([u({type:q.ofType(Ae),json:{read:{source:"styles"}}})],v.prototype,"styles",void 0),o([u({value:null,json:{write:{ignoreOrigin:!0}}})],v.prototype,"title",null),o([u()],v.prototype,"tileMatrixSetId",void 0),o([u({readOnly:!0})],v.prototype,"tileMatrixSet",null),o([u({type:q.ofType($e),json:{read:{source:"tileMatrixSets"}}})],v.prototype,"tileMatrixSets",void 0),v=H=o([D("esri.layers.support.WMTSSublayer")],v);const _=v,de=90.71428571428571;function ue(e){const t=e.replace(/ows:/gi,"");if(!x("Contents",new DOMParser().parseFromString(t,"text/xml").documentElement))throw new N("wmtslayer:wmts-capabilities-xml-is-not-valid","the wmts get capabilities response is not compliant",{text:e})}function Ve(e,t){var U,te;e=e.replace(/ows:/gi,"");const r=new DOMParser().parseFromString(e,"text/xml").documentElement,i=new Map,s=new Map,l=x("Contents",r);if(!l)throw new N("wmtslayer:wmts-capabilities-xml-is-not-valid");const a=(U=x("OperationsMetadata",r))==null?void 0:U.querySelector("[name='GetTile']"),n=a==null?void 0:a.getElementsByTagName("Get"),c=n&&Array.prototype.slice.call(n),m=(te=t.url)==null?void 0:te.indexOf("https"),g=m!==void 0&&m>-1;let f,p,h=t.serviceMode,w=t==null?void 0:t.url;if(c&&c.length&&c.some(M=>{const L=x("Constraint",M);return!L||A("AllowedValues","Value",h,L)?(w=M.attributes[0].nodeValue,!0):(!L||A("AllowedValues","Value","RESTful",L)||A("AllowedValues","Value","REST",L)?p=M.attributes[0].nodeValue:L&&!A("AllowedValues","Value","KVP",L)||(f=M.attributes[0].nodeValue),!1)}),!w)if(p)w=p,h="RESTful";else if(f)w=f,h="KVP";else{const M=x("ServiceMetadataURL",r);w=M==null?void 0:M.getAttribute("xlink:href")}const b=w.indexOf("1.0.0/");b===-1&&h==="RESTful"?w+="/":b>-1&&(w=w.substring(0,b)),h==="KVP"&&(w+=b>-1?"":"?"),g&&(w=w.replace(/^http:/i,"https:"));const $=y("ServiceIdentification>ServiceTypeVersion",r),S=y("ServiceIdentification>AccessConstraints",r),I=S&&/^none$/i.test(S)?null:S,E=P("Layer",l),k=P("TileMatrixSet",l),W=E.map(M=>{const L=y("Identifier",M);return i.set(L,M),Ue(L,M,k,g,$)});return{copyright:I,dimensionMap:s,layerMap:i,layers:W,serviceMode:h,tileUrl:w}}function _e(e){return e.layers.forEach(t=>{var r;(r=t.tileMatrixSets)==null||r.forEach(i=>{var l;const s=i.tileInfo;s&&s.dpi!==96&&((l=s.lods)==null||l.forEach(a=>{var n;a.scale=96*a.scale/s.dpi,a.resolution=ye((n=s.spatialReference)==null?void 0:n.wkid,a.scale*de/96,i.id)}),s.dpi=96)})}),e}function Z(e){return e.nodeType===Node.ELEMENT_NODE}function x(e,t){for(let r=0;r<t.childNodes.length;r++){const i=t.childNodes[r];if(Z(i)&&i.nodeName===e)return i}return null}function P(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const s=t.childNodes[i];Z(s)&&s.nodeName===e&&r.push(s)}return r}function O(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const s=t.childNodes[i];Z(s)&&s.nodeName===e&&r.push(s)}return r.map(i=>i.textContent).filter(Q)}function y(e,t){return e.split(">").forEach(r=>{t&&(t=x(r,t))}),t&&t.textContent}function A(e,t,r,i){let s;return Array.prototype.slice.call(i.childNodes).some(l=>{if(l.nodeName.includes(e)){const a=x(t,l),n=a&&a.textContent;if(n===r||r.split(":")&&r.split(":")[1]===n)return s=l,!0}return!1}),s}function Ue(e,t,r,i,s){const l=y("Abstract",t),a=O("Format",t);return{id:e,fullExtent:ke(t),fullExtents:We(t),description:l,formats:a,styles:Ke(t,i),title:y("Title",t),tileMatrixSets:Be(s,t,r)}}function me(e,t){var g;const r=[],i=(g=e.layerMap)==null?void 0:g.get(t);if(!i)return null;const s=P("ResourceURL",i),l=P("Dimension",i);let a,n,c,m;return l.length&&(a=y("Identifier",l[0]),n=O("Default",l[0])||O("Value",l[0])),l.length>1&&(c=y("Identifier",l[1]),m=O("Default",l[1])||O("Value",l[1])),e.dimensionMap.set(t,{dimensions:n,dimensions2:m}),s.forEach(f=>{let p=f.getAttribute("template");if(f.getAttribute("resourceType")==="tile"){if(a&&n.length)if(p.includes("{"+a+"}"))p=p.replace("{"+a+"}","{dimensionValue}");else{const h=p.toLowerCase().indexOf("{"+a.toLowerCase()+"}");h>-1&&(p=p.substring(0,h)+"{dimensionValue}"+p.substring(h+a.length+2))}if(c&&m.length)if(p.includes("{"+c+"}"))p=p.replace("{"+c+"}","{dimensionValue2}");else{const h=p.toLowerCase().indexOf("{"+c.toLowerCase()+"}");h>-1&&(p=p.substring(0,h)+"{dimensionValue2}"+p.substring(h+c.length+2))}r.push({template:p,format:f.getAttribute("format"),resourceType:"tile"})}}),r}function je(e,t,r,i,s,l,a,n){var p,h;const c=Ne(e,t,i);if(!((c==null?void 0:c.length)>0))return"";const{dimensionMap:m}=e,g=(p=m.get(t).dimensions)==null?void 0:p[0],f=(h=m.get(t).dimensions2)==null?void 0:h[0];return c[a%c.length].template.replace(/\{Style\}/gi,s??"").replace(/\{TileMatrixSet\}/gi,r??"").replace(/\{TileMatrix\}/gi,l).replace(/\{TileRow\}/gi,""+a).replace(/\{TileCol\}/gi,""+n).replace(/\{dimensionValue\}/gi,g).replace(/\{dimensionValue2\}/gi,f)}function Ne(e,t,r){const i=me(e,t),s=i==null?void 0:i.filter(l=>l.format===r);return(s!=null&&s.length?s:i)??[]}function De(e,t,r,i){const{dimensionMap:s}=e,l=me(e,t);let a="";if(l&&l.length>0){const n=s.get(t).dimensions&&s.get(t).dimensions[0],c=s.get(t).dimensions2&&s.get(t).dimensions2[0];a=l[0].template,a.indexOf(".xxx")===a.length-4&&(a=a.slice(0,a.length-4)),a=a.replace(/\{Style\}/gi,i),a=a.replace(/\{TileMatrixSet\}/gi,r),a=a.replace(/\{TileMatrix\}/gi,"{level}"),a=a.replace(/\{TileRow\}/gi,"{row}"),a=a.replace(/\{TileCol\}/gi,"{col}"),a=a.replace(/\{dimensionValue\}/gi,n),a=a.replace(/\{dimensionValue2\}/gi,c)}return a}function ke(e){const t=x("WGS84BoundingBox",e),r=t?y("LowerCorner",t).split(" "):["-180","-90"],i=t?y("UpperCorner",t).split(" "):["180","90"];return{xmin:parseFloat(r[0]),ymin:parseFloat(r[1]),xmax:parseFloat(i[0]),ymax:parseFloat(i[1]),spatialReference:{wkid:4326}}}function We(e){const t=[];return ne(e,{BoundingBox:r=>{if(!r.getAttribute("crs"))return;const i=r.getAttribute("crs").toLowerCase(),s=ee(i),l=i.includes("epsg")&&X(s.wkid);let a,n,c,m;ne(r,{LowerCorner:g=>{[a,n]=g.textContent.split(" ").map(f=>Number.parseFloat(f)),l&&([a,n]=[n,a])},UpperCorner:g=>{[c,m]=g.textContent.split(" ").map(f=>Number.parseFloat(f)),l&&([c,m]=[m,c])}}),t.push({xmin:a,ymin:n,xmax:c,ymax:m,spatialReference:s})}}),t}function Ke(e,t){return P("Style",e).map(r=>{const i=x("LegendURL",r),s=x("Keywords",r),l=s?O("Keyword",s):[];let a=i&&i.getAttribute("xlink:href");return t&&(a=a&&a.replace(/^http:/i,"https:")),{abstract:y("Abstract",r),id:y("Identifier",r),isDefault:r.getAttribute("isDefault")==="true",keywords:l,legendUrl:a,title:y("Title",r)}})}function Be(e,t,r){return P("TileMatrixSetLink",t).map(i=>qe(e,i,r))}function qe(e,t,r){const i=x("TileMatrixSet",t).textContent,s=O("TileMatrix",t),l=r.find(S=>{const I=x("Identifier",S),E=I&&I.textContent;return!!(E===i||i.split(":")&&i.split(":")[1]===E)}),a=x("TileMatrixSetLimits",t),n=a&&P("TileMatrixLimits",a),c=new Map;if(n!=null&&n.length)for(const S of n){const I=x("TileMatrix",S).textContent,E=+x("MinTileRow",S).textContent,k=+x("MaxTileRow",S).textContent,W=+x("MinTileCol",S).textContent,U=+x("MaxTileCol",S).textContent;c.set(I,{minCol:W,maxCol:U,minRow:E,maxRow:k})}const m=y("SupportedCRS",l).toLowerCase(),g=Ge(l,m),f=g.spatialReference,p=x("TileMatrix",l),h=[parseInt(y("TileWidth",p),10),parseInt(y("TileHeight",p),10)],w=[];s.length?s.forEach((S,I)=>{const E=A("TileMatrix","Identifier",S,l);w.push(ce(E,m,I,i,c))}):P("TileMatrix",l).forEach((S,I)=>{w.push(ce(S,m,I,i,c))});const b=Je(e,l,g,h,w[0]).toJSON(),$=new Y({dpi:96,spatialReference:f,size:h,origin:g,lods:w}).toJSON();return{id:i,fullExtent:b,tileInfo:$}}function ee(e){e=e.toLowerCase();let t=parseInt(e.split(":").pop(),10);t!==900913&&t!==3857||(t=102100);const r=Ye(e);return Q(r)&&(t=r),{wkid:t}}function Ge(e,t){return he(x("TileMatrix",e),t)}function he(e,t){const r=ee(t),[i,s]=y("TopLeftCorner",e).split(" ").map(a=>parseFloat(a)),l=t.includes("epsg")&&X(r.wkid);return new fe(l?{x:s,y:i,spatialReference:r}:{x:i,y:s,spatialReference:r})}function Je(e,t,r,i,s){const l=x("BoundingBox",t);let a,n,c,m,g,f;if(l&&(a=y("LowerCorner",l).split(" "),n=y("UpperCorner",l).split(" ")),a&&a.length>1&&n&&n.length>1)c=parseFloat(a[0]),g=parseFloat(a[1]),m=parseFloat(n[0]),f=parseFloat(n[1]);else{const p=x("TileMatrix",t),h=parseInt(y("MatrixWidth",p),10),w=parseInt(y("MatrixHeight",p),10);c=r.x,f=r.y,m=c+h*i[0]*s.resolution,g=f-w*i[1]*s.resolution}return He(e,r.spatialReference,r)?new R(g,c,f,m,r.spatialReference):new R(c,g,m,f,r.spatialReference)}function He(e,t,r){return e==="1.0.0"&&X(t.wkid)&&!(r.spatialReference.isGeographic&&r.x<-90&&r.y>=-90)}var V;function Ye(e){return e.includes("crs84")||e.includes("crs:84")?V.CRS84:e.includes("crs83")||e.includes("crs:83")?V.CRS83:e.includes("crs27")||e.includes("crs:27")?V.CRS27:null}function ce(e,t,r,i,s){const l=ee(t),a=y("Identifier",e);let n=parseFloat(y("ScaleDenominator",e));const c=ye(l.wkid,n,i);n*=96/de;const m=+y("MatrixWidth",e),g=+y("MatrixHeight",e),{maxCol:f=m-1,maxRow:p=g-1,minCol:h=0,minRow:w=0}=s.get(a)??{},{x:b,y:$}=he(e,t);return new ge({cols:[h,f],level:r,levelValue:a,origin:[b,$],scale:n,resolution:c,rows:[w,p]})}function ye(e,t,r){let i;return i=K.hasOwnProperty(""+e)?K.values[K[e]]:r==="default028mm"?6370997*Math.PI/180:we(e).metersPerDegree,7*t/25e3/i}(function(e){e[e.CRS84=4326]="CRS84",e[e.CRS83=4269]="CRS83",e[e.CRS27=4267]="CRS27"})(V||(V={}));const pe={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},ze=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]);let d=class extends xe(ve(Se(Me(Ie(Le(Pe)))))){constructor(...e){super(...e),this.copyright="",this.customParameters=null,this.customLayerParameters=null,this.fullExtent=null,this.operationalLayerType="WebTiledLayer",this.resourceInfo=null,this.serviceMode="RESTful",this.sublayers=null,this.type="wmts",this.version="1.0.0",this.addHandles([ie(()=>this.activeLayer,(t,r)=>{r&&(r.layer=null),t&&(t.layer=this)},j),se(()=>this.sublayers,"after-add",({item:t})=>{t.layer=this},j),se(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=null},j),ie(()=>this.sublayers,(t,r)=>{if(r)for(const i of r)i.layer=null;if(t)for(const i of t)i.layer=this},j)])}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){if(this.serviceMode==="KVP"||this.serviceMode==="RESTful")return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).catch(ae).then(()=>this._fetchService(e)).catch(t=>{throw ae(t),new N("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:t})})),Promise.resolve(this);console.error("WMTS mode could only be 'KVP' or 'RESTful'")}get activeLayer(){return this._get("activeLayer")}set activeLayer(e){this._set("activeLayer",e)}readActiveLayerFromService(e,t,r){this.activeLayer||(this.activeLayer=new _);let i=t.layers.find(s=>s.id===this.activeLayer.id);return i||(i=t.layers[0]),this.activeLayer.read(i,r),this.activeLayer}readActiveLayerFromItemOrWebDoc(e,t){const{templateUrl:r,wmtsInfo:i}=t,s=r?this._getLowerCasedUrlParams(r):null,l=i==null?void 0:i.layerIdentifier;let a=null;const n=i==null?void 0:i.tileMatrixSet;n&&(Array.isArray(n)?n.length&&(a=n[0]):a=n);const c=s==null?void 0:s.format,m=s==null?void 0:s.style;return new _({id:l,imageFormat:c,styleId:m,tileMatrixSetId:a})}writeActiveLayer(e,t,r,i){const s=this.activeLayer;t.templateUrl=this.getUrlTemplate(s.id,s.tileMatrixSetId,s.imageFormat,s.styleId);const l=Te("tileMatrixSet.tileInfo",s);t.tileInfo=l?l.toJSON(i):null,t.wmtsInfo={...t.wmtsInfo,layerIdentifier:s.id,tileMatrixSet:s.tileMatrixSetId}}readCustomParameters(e,t){const r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null}get fullExtents(){return this.activeLayer.fullExtents}readServiceMode(e,t){return t.templateUrl.includes("?")?"KVP":"RESTful"}readSublayersFromService(e,t,r){return Qe(t.layers,r)}get supportedSpatialReferences(){var e;return((e=this.activeLayer.tileMatrixSets)==null?void 0:e.map(t=>{var r;return(r=t.tileInfo)==null?void 0:r.spatialReference}).toArray().filter(Q))??[]}get tilemapCache(){var t,r;const e=(r=(t=this.activeLayer)==null?void 0:t.tileMatrixSet)==null?void 0:r.tileInfo;return e?new Fe(e):void 0}get title(){var e;return((e=this.activeLayer)==null?void 0:e.title)??"Layer"}set title(e){this._overrideIfSome("title",e)}get url(){return this._get("url")}set url(e){e&&e.substr(-1)==="/"?this._set("url",e.slice(0,-1)):this._set("url",e)}createWebTileLayer(e){var l;const t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=(l=this._getTileMatrixSetById(e.tileMatrixSetId))==null?void 0:l.tileInfo,i=e.fullExtent,s=new Ce({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(s.customLayerParameters=this.customLayerParameters),this.customParameters&&(s.customParameters=this.customParameters),new Oe({fullExtent:i,urlTemplate:t,tileInfo:r,wmtsInfo:s})}async fetchTile(e,t,r){const i=this.getTileUrl(e,t,r),{data:s}=await B(i,{responseType:"image"});return s}async fetchImageBitmapTile(e,t,r){const i=this.getTileUrl(e,t,r),{data:s}=await B(i,{responseType:"blob"});return Re(s,i)}findSublayerById(e){var t;return(t=this.sublayers)==null?void 0:t.find(r=>r.id===e)}getTileUrl(e,t,r){var a,n;const i=(n=(a=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId))==null?void 0:a.tileInfo)==null?void 0:n.lods[e],s=i?i.levelValue?i.levelValue:`${i.level}`:`${e}`;let l=this.resourceInfo?"":je({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,s,t,r);return l||(l=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replace(/\{level\}/gi,s).replace(/\{row\}/gi,`${t}`).replace(/\{col\}/gi,`${r}`)),l=this._appendCustomLayerParameters(l),l}getUrlTemplate(e,t,r,i){if(!this.resourceInfo){const s=De({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,i);if(s)return s}if(this.serviceMode==="KVP")return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+i+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if(this.serviceMode==="RESTful"){let s="";return pe[r.toLowerCase()]&&(s=pe[r.toLowerCase()]),this.url+e+"/"+i+"/"+t+"/{level}/{row}/{col}"+s}return""}async _fetchService(e){let t;if(this.resourceInfo)this.resourceInfo.serviceMode==="KVP"&&(this.url+=this.url.includes("?")?"":"?"),t={ssl:!1,data:this.resourceInfo};else try{t=await this._getCapabilities(this.serviceMode,e),ue(t.data)}catch{const r=this.serviceMode==="KVP"?"RESTful":"KVP";try{t=await this._getCapabilities(r,e),ue(t.data),this.serviceMode=r}catch(i){throw new N("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:i})}}this.resourceInfo?t.data=_e(t.data):t.data=Ve(t.data,{serviceMode:this.serviceMode,url:this.url}),t.data&&this.read(t.data,{origin:"service"})}async _getCapabilities(e,t){const r=this._getCapabilitiesUrl(e);return await B(r,{...t,responseType:"text"})}_getTileMatrixSetById(e){var r,i;return(i=(r=this.findSublayerById(this.activeLayer.id))==null?void 0:r.tileMatrixSets)==null?void 0:i.find(s=>s.id===e)}_appendCustomParameters(e){return this._appendParameters(e,this.customParameters)}_appendCustomLayerParameters(e){return this._appendParameters(e,{...le(this.customParameters),...this.customLayerParameters})}_appendParameters(e,t){const r=oe(e),i={...r.query,...t},s=be(i);return s===""?r.path:`${r.path}?${s}`}_getCapabilitiesUrl(e){this.url=this.url.split("?")[0];const t=e==="KVP"?`${this.url}?request=GetCapabilities&service=WMTS&version=${this.version}`:`${this.url}/${this.version}/WMTSCapabilities.xml`;return this._appendCustomParameters(t)}_getLowerCasedUrlParams(e){if(!e)return null;const t=oe(e).query;if(!t)return null;const r={};return Object.keys(t).forEach(i=>{r[i.toLowerCase()]=t[i]}),r}_mergeParams(e,t){const r=this._getLowerCasedUrlParams(t);if(r){const i=Object.keys(r);i.length&&(e=e?le(e):{},i.forEach(s=>{e.hasOwnProperty(s)||ze.has(s)||(e[s]=r[s])}))}return e}};function Qe(e,t){return e.map(r=>{const i=new _;return i.read(r,t),i})}o([u()],d.prototype,"dimensionMap",void 0),o([u()],d.prototype,"layerMap",void 0),o([u({type:_,json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],d.prototype,"activeLayer",null),o([C("service","activeLayer",["layers"])],d.prototype,"readActiveLayerFromService",null),o([C(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],d.prototype,"readActiveLayerFromItemOrWebDoc",null),o([Ee(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:Y},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],d.prototype,"writeActiveLayer",null),o([u({type:String,value:"",json:{write:!0}})],d.prototype,"copyright",void 0),o([u({type:["show","hide"]})],d.prototype,"listMode",void 0),o([u({json:{read:!0,write:!0}})],d.prototype,"blendMode",void 0),o([u({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],d.prototype,"customParameters",void 0),o([C(["portal-item","web-document"],"customParameters")],d.prototype,"readCustomParameters",null),o([u({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],d.prototype,"customLayerParameters",void 0),o([u({type:R,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],d.prototype,"fullExtent",void 0),o([u({readOnly:!0})],d.prototype,"fullExtents",null),o([u({type:["WebTiledLayer"]})],d.prototype,"operationalLayerType",void 0),o([u()],d.prototype,"resourceInfo",void 0),o([u()],d.prototype,"serviceMode",void 0),o([C(["portal-item","web-document"],"serviceMode",["templateUrl"])],d.prototype,"readServiceMode",null),o([u({type:q.ofType(_)})],d.prototype,"sublayers",void 0),o([C("service","sublayers",["layers"])],d.prototype,"readSublayersFromService",null),o([u({readOnly:!0})],d.prototype,"supportedSpatialReferences",null),o([u({readOnly:!0})],d.prototype,"tilemapCache",null),o([u({json:{read:{source:"title"}}})],d.prototype,"title",null),o([u({json:{read:!1},readOnly:!0,value:"wmts"})],d.prototype,"type",void 0),o([u({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],d.prototype,"url",null),o([u()],d.prototype,"version",void 0),d=o([D("esri.layers.WMTSLayer")],d);const st=d;export{st as default};
