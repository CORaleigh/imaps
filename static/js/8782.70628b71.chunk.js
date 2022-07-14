"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[8782],{25820:(e,t,i)=>{i.d(t,{S:()=>r,X:()=>s});const s=1;function r(e,t){let i=0;for(const s of t){const t=s.attributes?.[e];"number"==typeof t&&isFinite(t)&&(i=Math.max(i,t))}return i}},48782:(e,t,i)=>{i.r(t),i.d(t,{default:()=>_});var s=i(10064),r=i(92026),n=i(77981),a=i(92975),o=i(83406),l=i(25820),u=i(68928),d=i(19995),p=i(14e3),c=i(63543),y=i(68808),f=i(52410),h=i(85249),m=i(37270);const g=a.Zn,I={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:a.Zn},b={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function F(e){return(0,n.wp)(e)?null!=e.z:!!e.hasZ}function S(e){return(0,n.wp)(e)?null!=e.m:!!e.hasM}class _{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(e){const t=[],{features:i}=e,r=this._inferLayerProperties(i,e.fields),n=e.fields||[],a=null!=e.hasM?e.hasM:r.hasM,o=null!=e.hasZ?e.hasZ:r.hasZ,y=!e.spatialReference&&!r.spatialReference,F=y?g:e.spatialReference||r.spatialReference,S=y?I:null,_=e.geometryType||r.geometryType,E=!_;let T=e.objectIdField||r.objectIdField,x=e.timeInfo;if(!E&&(y&&t.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!_))throw new s.Z("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!T)throw new s.Z("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(r.objectIdField&&T!==r.objectIdField&&(t.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${T}" doesn't match the field name "${r.objectIdField}", found in the provided fields`}),T=r.objectIdField),T&&!r.objectIdField){let e=null;n.some((t=>t.name===T&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):n.unshift({alias:T,name:T,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const l of n){if(null==l.name&&(l.name=l.alias),null==l.alias&&(l.alias=l.name),!l.name)throw new s.Z("feature-layer:invalid-field-name","field name is missing",{field:l});if(l.name===T&&(l.type="esriFieldTypeOID"),!h.v.jsonValues.includes(l.type))throw new s.Z("feature-layer:invalid-field-type",`invalid type for field "${l.name}"`,{field:l})}const q={};for(const s of n)if("esriFieldTypeOID"!==s.type&&"esriFieldTypeGlobalID"!==s.type){const e=(0,m.os)(s);void 0!==e&&(q[s.name]=e)}if(this._fieldsIndex=new f.Z(n),this._createDefaultAttributes=(0,c.Dm)(q,T),x){if(x.startTimeField){const e=this._fieldsIndex.get(x.startTimeField);e?(x.startTimeField=e.name,e.type="esriFieldTypeDate"):x.startTimeField=null}if(x.endTimeField){const e=this._fieldsIndex.get(x.endTimeField);e?(x.endTimeField=e.name,e.type="esriFieldTypeDate"):x.endTimeField=null}if(x.trackIdField){const e=this._fieldsIndex.get(x.trackIdField);e?x.trackIdField=e.name:(x.trackIdField=null,t.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:x}}))}x.startTimeField||x.endTimeField||(t.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:x}}),x=null)}const j={warnings:t,featureErrors:[],layerDefinition:{...b,drawingInfo:(0,c.bU)(_),templates:(0,c.Hq)(q),extent:S,geometryType:_,objectIdField:T,fields:n,hasZ:!!o,hasM:!!a,timeInfo:x},assignedObjectIds:{}};if(this._queryEngine=new p.q({fields:n,geometryType:_,hasM:a,hasZ:o,objectIdField:T,spatialReference:F,featureStore:new u.Z({geometryType:_,hasM:a,hasZ:o}),timeInfo:x,cacheSpatialQueries:!0}),!i||!i.length)return this._nextObjectId=l.X,j;const R=(0,l.S)(T,i);return this._nextObjectId=R+1,await(0,d._W)(i,F),this._loadInitialFeatures(j,i)}async applyEdits(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return await Promise.all([(0,y.b)(t,i),(0,d._W)(e.adds,t),(0,d._W)(e.updates,t)]),this._applyEdits(e)}queryFeatures(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,t){let i,s,a=null,o=null,l=null;for(const u of e){const e=u.geometry;if(!(0,r.Wi)(e)&&(a||(a=(0,n.Ji)(e)),o||(o=e.spatialReference),null==i&&(i=F(e)),null==s&&(s=S(e)),a&&o&&null!=i&&null!=s))break}if(t&&t.length){let e=null;t.some((t=>{const i="esriFieldTypeOID"===t.type,s=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,i||s}))&&(l=e.name)}return{geometryType:a,spatialReference:o,objectIdField:l,hasM:s,hasZ:i}}_loadInitialFeatures(e,t){const{geometryType:i,hasM:s,hasZ:a,objectIdField:l,spatialReference:u,featureStore:p}=this._queryEngine,c=[];for(const o of t){if(null!=o.uid&&(e.assignedObjectIds[o.uid]=-1),o.geometry&&i!==(0,n.Ji)(o.geometry)){e.featureErrors.push((0,y.av)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),s=(0,y.O0)(this._fieldsIndex,t,o.attributes,!0,e.warnings);s?e.featureErrors.push(s):(this._assignObjectId(t,o.attributes,!0),o.attributes=t,null!=o.uid&&(e.assignedObjectIds[o.uid]=o.attributes[l]),(0,r.pC)(o.geometry)&&(o.geometry=(0,d.iV)(o.geometry,o.geometry.spatialReference,u)),c.push(o))}if(p.addMany((0,o.Yn)([],c,i,a,s,l)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:i}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,i]}return e}_applyEdits(e){const{adds:t,updates:i,deletes:s}=e,r={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(r,t),i&&i.length&&this._applyUpdateEdits(r,i),s&&s.length){for(const e of s)r.deleteResults.push((0,y.d1)(e));this._queryEngine.featureStore.removeManyById(s)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:r}}_applyAddEdits(e,t){const{addResults:i}=e,{geometryType:s,hasM:a,hasZ:l,objectIdField:u,spatialReference:p,featureStore:c}=this._queryEngine,f=[];for(const o of t){if(o.geometry&&s!==(0,n.Ji)(o.geometry)){i.push((0,y.av)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),a=(0,y.O0)(this._fieldsIndex,t,o.attributes);if(a)i.push(a);else{if(this._assignObjectId(t,o.attributes),o.attributes=t,null!=o.uid){const t=o.attributes[u];e.uidToObjectId[o.uid]=t}(0,r.pC)(o.geometry)&&(o.geometry=(0,d.iV)((0,y.og)(o.geometry,p),o.geometry.spatialReference,p)),f.push(o),i.push((0,y.d1)(o.attributes[u]))}}c.addMany((0,o.Yn)([],f,s,l,a,u))}_applyUpdateEdits(e,t){let{updateResults:i}=e;const{geometryType:s,hasM:a,hasZ:l,objectIdField:u,spatialReference:p,featureStore:c}=this._queryEngine;for(const f of t){const{attributes:e,geometry:t}=f,h=e&&e[u];if(null==h){i.push((0,y.av)(`Identifier field ${u} missing`));continue}if(!c.has(h)){i.push((0,y.av)(`Feature with object id ${h} missing`));continue}const m=(0,o.EI)(c.getFeature(h),s,l,a);if((0,r.pC)(t)){if(s!==(0,n.Ji)(t)){i.push((0,y.av)("Incorrect geometry type."));continue}m.geometry=(0,d.iV)((0,y.og)(t,p),t.spatialReference,p)}if(e){const t=(0,y.O0)(this._fieldsIndex,m.attributes,e);if(t){i.push(t);continue}}c.add((0,o.XA)(m,s,l,a,u)),i.push((0,y.d1)(h))}}_assignObjectId(e,t){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const s=this._queryEngine.objectIdField;i&&t&&isFinite(t[s])?e[s]=t[s]:e[s]=this._nextObjectId++}}},63543:(e,t,i)=>{i.d(t,{Dm:()=>d,Hq:()=>p,MS:()=>c,bU:()=>o});var s=i(93169),r=i(84652),n=i(60480),a=i(76115);function o(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?a.I4:"esriGeometryPolyline"===e?a.ET:a.lF}}}const l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let u=1;function d(e,t){if((0,s.Z)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let i=`this.${t} = null;`;for(const t in e)i+=`this${l.test(t)?`.${t}`:`["${t}"]`} = ${JSON.stringify(e[t])};`;const s=new Function(`\n      return class AttributesClass$${u++} {\n        constructor() {\n          ${i};\n        }\n      }\n    `)();return()=>new s}catch(i){return()=>({[t]:null,...e})}}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,r.d9)(e)}}]}function c(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:n.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},76115:(e,t,i)=>{i.d(t,{ET:()=>a,I4:()=>n,SQ:()=>s,X1:()=>r,eG:()=>u,lF:()=>o,lj:()=>p,qP:()=>l,wW:()=>d});const s=[252,146,31,255],r=[153,153,153,255],n={type:"esriSMS",style:"esriSMSCircle",size:6,color:s,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},a={type:"esriSLS",style:"esriSLSSolid",width:.75,color:s},o={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},l={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},u={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},d={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},p={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}}}]);
//# sourceMappingURL=8782.70628b71.chunk.js.map