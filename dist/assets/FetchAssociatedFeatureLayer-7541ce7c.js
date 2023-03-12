import{du as _,ak as f,fE as E,ag as m,rg as w,rh as R,at as h,J as S,bO as T,eZ as y,H as I,bN as C,aR as D}from"./index-3baec1e8.js";import"./mat3f64-221ce671.js";import"./mat4f64-65d35099.js";import"./quat-8214689a.js";import{r as U,e as v,I as A}from"./I3SBinaryReader-14c88161.js";import"./spatialReferenceEllipsoidUtils-4e63fad7.js";import{m as F}from"./edgeUtils-889dfc0d.js";import"./symbolColorUtils-2c965494.js";import{e as P}from"./quatf64-3363c48e.js";import{t as $}from"./vec3f32-ad1dc57f.js";import"./plane-2064a861.js";const V={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsResize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}};function x(s=[0,0,0],r=[-1,-1,-1],t=P()){return{center:_(s),halfSize:$(r),quaternion:U(t)}}(()=>{const s=new Int8Array(162);let r=0;const t=a=>{for(let o=0;o<a.length;o++)s[r+o]=a[o];r+=6};return t([6,2,3,1,5,4]),t([0,2,3,1,5,4]),t([0,2,3,7,5,4]),t([0,1,3,2,6,4]),t([0,1,3,2,0,0]),t([0,1,5,7,3,2]),t([0,1,3,7,6,4]),t([0,1,3,7,6,2]),t([0,1,5,7,6,2]),t([0,1,5,4,6,2]),t([0,1,5,4,0,0]),t([0,1,3,7,5,4]),t([0,2,6,4,0,0]),t([0,0,0,0,0,0]),t([1,3,7,5,0,0]),t([2,3,7,6,4,0]),t([2,3,7,6,0,0]),t([2,3,1,5,7,6]),t([0,1,5,7,6,2]),t([0,1,5,7,6,4]),t([0,1,3,7,6,4]),t([4,5,7,6,2,0]),t([4,5,7,6,0,0]),t([4,5,1,3,7,6]),t([0,2,3,7,5,4]),t([6,2,3,7,5,4]),t([6,2,3,1,5,4]),s})();f();var g;function W(s,r,t,a,o){const n=[];for(const e of r)if(e&&o.includes(e.name)){const p=`${s}/nodes/${t}/attributes/${e.key}/0`;n.push({url:p,storageInfo:e})}return E(n.map(e=>m(e.url,{responseType:"array-buffer"}).then(p=>A(e.storageInfo,p.data)))).then(e=>{const p=[];for(const c of a){const u={};for(let i=0;i<e.length;i++){const l=e[i].value;l!=null&&(u[n[i].storageInfo.name]=M(l,c))}p.push(u)}return p})}(function(s){s[s.OUTSIDE=0]="OUTSIDE",s[s.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",s[s.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",s[s.INSIDE=3]="INSIDE"})(g||(g={}));const N=-32768,O=-(2**31);function M(s,r){if(!s)return null;const t=s[r];return w(s)?t===N?null:t:R(s)?t===O?null:t:t!=t?null:t}F({color:[0,0,0,0],opacity:0});new Array(24);v();f();f();x();new Array(72);class Z{constructor(r,t,a,o){var e;this._parsedUrl=r,this._portalItem=t,this._apiKey=a,this.signal=o,this._rootDocument=null;const n=(e=this._parsedUrl)==null?void 0:e.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);n&&(this._urlParts={root:n[1],layerId:parseInt(n[2],10)})}async fetch(){if(!this._urlParts)return null;const r=this._portalItem??await this._portalItemFromServiceItemId();if(h(r))return this._loadFromUrl();const t=await this._findAndLoadRelatedPortalItem(r);return h(t)?null:this._loadFeatureLayerFromPortalItem(t)}async fetchPortalItem(){if(!this._urlParts)return null;const r=this._portalItem??await this._portalItemFromServiceItemId();return h(r)?null:this._findAndLoadRelatedPortalItem(r)}async _fetchRootDocument(){if(S(this._rootDocument))return this._rootDocument;if(h(this._urlParts))return this._rootDocument={},{};const r={query:{f:"json",token:this._apiKey},responseType:"json",signal:this.signal},t=`${this._urlParts.root}/SceneServer`;try{const a=await m(t,r);this._rootDocument=a.data}catch{this._rootDocument={}}return this._rootDocument}async _fetchServiceOwningPortalUrl(){var o,n;const r=(o=this._parsedUrl)==null?void 0:o.path,t=r?(n=T)==null?void 0:n.findServerInfo(r):null;if(t!=null&&t.owningSystemUrl)return t.owningSystemUrl;const a=r?r.replace(/(.*\/rest)\/.*/i,"$1")+"/info":null;try{const e=(await m(a,{query:{f:"json"},responseType:"json",signal:this.signal})).data.owningSystemUrl;if(e)return e}catch(e){y(e)}return null}async _findAndLoadRelatedPortalItem(r){try{return(await r.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:this.signal})).find(t=>t.type==="Feature Service")||null}catch(t){return y(t),null}}async _loadFeatureLayerFromPortalItem(r){await r.load({signal:this.signal});const t=await this._findMatchingAssociatedSublayerUrl(r.url??"");return new I({url:t,portalItem:r}).load({signal:this.signal})}async _loadFromUrl(){var t;const r=await this._findMatchingAssociatedSublayerUrl(`${(t=this._urlParts)==null?void 0:t.root}/FeatureServer`);return new I({url:r}).load({signal:this.signal})}async _findMatchingAssociatedSublayerUrl(r){var l;const t=r.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1"),a={query:{f:"json"},responseType:"json",authMode:"no-prompt",signal:this.signal},o=(l=this._urlParts)==null?void 0:l.layerId,n=this._fetchRootDocument(),e=m(t,a),[p,c]=await Promise.all([e,n]),u=c&&c.layers,i=p.data&&p.data.layers;if(!Array.isArray(i))throw new Error("expected layers array");if(Array.isArray(u)){for(let d=0;d<Math.min(u.length,i.length);d++)if(u[d].id===o)return`${t}/${i[d].id}`}else if(o!=null&&o<i.length)return`${t}/${i[o].id}`;throw new Error("could not find matching associated sublayer")}async _portalItemFromServiceItemId(){const r=(await this._fetchRootDocument()).serviceItemId;if(!r)return null;const t=new C({id:r,apiKey:this._apiKey}),a=await this._fetchServiceOwningPortalUrl();S(a)&&(t.portal=new D({url:a}));try{return t.load({signal:this.signal})}catch(o){return y(o),null}}}export{Z as l,V as t,W as u};
