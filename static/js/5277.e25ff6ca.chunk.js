"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[5277],{52410:(e,t,i)=>{i.d(t,{Z:()=>n});var r=i(37270);function o(e){return"oid"===e.type||"esriFieldTypeOID"===e.type}function s(e){return"global-id"===e.type||"esriFieldTypeGlobalID"===e.type}class n{constructor(e){if(this.fields=e,this._fieldsMap=new Map,this._dateFieldsSet=new Set,this._numericFieldsSet=new Set,this.dateFields=[],this.numericFields=[],this._requiredFields=null,!e)return;const t=[];for(const n of e){const e=n&&n.name;if(e){const l=a(e);this._fieldsMap.set(e,n),this._fieldsMap.set(l,n),t.push(l),"date"===(i=n).type||"esriFieldTypeDate"===i.type?(this.dateFields.push(n),this._dateFieldsSet.add(n)):(0,r.H7)(n)&&(this._numericFieldsSet.add(n),this.numericFields.push(n)),o(n)||s(n)||(n.editable=null==n.editable||!!n.editable,n.nullable=null==n.nullable||!!n.nullable)}}var i;t.sort(),this.uid=t.join(",")}destroy(){this._fieldsMap.clear()}get requiredFields(){if(!this._requiredFields){this._requiredFields=[];for(const e of this.fields)o(e)||s(e)||e.nullable||void 0!==(0,r.os)(e)||this._requiredFields.push(e)}return this._requiredFields}has(e){return null!=this.get(e)}get(e){return null!=e?this._fieldsMap.get(e)||this._fieldsMap.get(a(e)):void 0}isDateField(e){return this._dateFieldsSet.has(this.get(e))}isNumericField(e){return this._numericFieldsSet.has(this.get(e))}normalizeFieldName(e){const t=this.get(e);if(t)return t.name}}function a(e){return e.toLowerCase().trim()}},64020:(e,t,i)=>{i.d(t,{n:()=>D});var r,o=i(27366),s=i(43404),n=i(46784),a=i(49861),l=(i(63780),i(93169),i(89125)),p=i(27135),u=i(38511),d=i(69912),c=i(25243),y=i(47492),h=i(83040),m=i(23505),b=(i(59486),i(78952)),w=i(27823);let v=r=class extends n.wq{constructor(e){super(e),this.type="query-table"}clone(){const{workspaceId:e,query:t,oidFields:i,spatialReference:o,geometryType:s}=this,n={workspaceId:e,query:t,oidFields:i,spatialReference:o?.clone()??void 0,geometryType:s};return new r(n)}};var _;(0,o._)([(0,p.J)({queryTable:"query-table"})],v.prototype,"type",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],v.prototype,"workspaceId",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],v.prototype,"query",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],v.prototype,"oidFields",void 0),(0,o._)([(0,a.Cb)({type:b.Z,json:{write:!0}})],v.prototype,"spatialReference",void 0),(0,o._)([(0,p.J)(w.Mk)],v.prototype,"geometryType",void 0),v=r=(0,o._)([(0,d.j)("esri.layers.support.source.QueryTableDataSource")],v);let S=_=class extends n.wq{constructor(e){super(e),this.type="raster"}clone(){const{workspaceId:e,dataSourceName:t}=this;return new _({workspaceId:e,dataSourceName:t})}};var g;(0,o._)([(0,p.J)({raster:"raster"})],S.prototype,"type",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],S.prototype,"dataSourceName",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],S.prototype,"workspaceId",void 0),S=_=(0,o._)([(0,d.j)("esri.layers.support.source.RasterDataSource")],S);let C=g=class extends n.wq{constructor(e){super(e),this.type="table"}clone(){const{workspaceId:e,gdbVersion:t,dataSourceName:i}=this;return new g({workspaceId:e,gdbVersion:t,dataSourceName:i})}};var f,j;(0,o._)([(0,p.J)({table:"table"})],C.prototype,"type",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],C.prototype,"workspaceId",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],C.prototype,"gdbVersion",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],C.prototype,"dataSourceName",void 0),C=g=(0,o._)([(0,d.j)("esri.layers.support.source.TableDataSource")],C);const T=(0,s.w)()({esriLeftInnerJoin:"left-inner-join",esriLeftOuterJoin:"left-outer-join"});let R=f=class extends n.wq{constructor(e){super(e),this.type="join-table"}readLeftTableSource(e,t,i){return x()(e,t,i)}castLeftTableSource(e){return(0,c.N7)(M(),e)}readRightTableSource(e,t,i){return x()(e,t,i)}castRightTableSource(e){return(0,c.N7)(M(),e)}clone(){const{leftTableKey:e,rightTableKey:t,leftTableSource:i,rightTableSource:r,joinType:o}=this,s={leftTableKey:e,rightTableKey:t,leftTableSource:i?.clone()??void 0,rightTableSource:r?.clone()??void 0,joinType:o};return new f(s)}};(0,o._)([(0,p.J)({joinTable:"join-table"})],R.prototype,"type",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],R.prototype,"leftTableKey",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],R.prototype,"rightTableKey",void 0),(0,o._)([(0,a.Cb)({json:{write:!0}})],R.prototype,"leftTableSource",void 0),(0,o._)([(0,u.r)("leftTableSource")],R.prototype,"readLeftTableSource",null),(0,o._)([(0,l.p)("leftTableSource")],R.prototype,"castLeftTableSource",null),(0,o._)([(0,a.Cb)({json:{write:!0}})],R.prototype,"rightTableSource",void 0),(0,o._)([(0,u.r)("rightTableSource")],R.prototype,"readRightTableSource",null),(0,o._)([(0,l.p)("rightTableSource")],R.prototype,"castRightTableSource",null),(0,o._)([(0,p.J)(T)],R.prototype,"joinType",void 0),R=f=(0,o._)([(0,d.j)("esri.layers.support.source.JoinTableDataSource")],R);let F=null;function x(){return F||(F=(0,y.d)({types:M()})),F}let P=null;function M(){return P||(P={key:"type",base:null,typeMap:{"data-layer":D,"map-layer":m.R}}),P}const q={key:"type",base:null,typeMap:{"join-table":R,"query-table":v,raster:S,table:C}};let D=j=class extends n.wq{constructor(e){super(e),this.type="data-layer"}clone(){const{fields:e,dataSource:t}=this;return new j({fields:e,dataSource:t})}};(0,o._)([(0,p.J)({dataLayer:"data-layer"})],D.prototype,"type",void 0),(0,o._)([(0,a.Cb)({type:[h.Z],json:{write:!0}})],D.prototype,"fields",void 0),(0,o._)([(0,a.Cb)({types:q,json:{write:!0}})],D.prototype,"dataSource",void 0),D=j=(0,o._)([(0,d.j)("esri.layers.support.source.DataLayerSource")],D),D.from=(0,c.se)(D)},23505:(e,t,i)=>{i.d(t,{R:()=>u});var r,o=i(27366),s=i(46784),n=i(49861),a=(i(63780),i(93169),i(25243)),l=i(27135),p=i(69912);let u=r=class extends s.wq{constructor(e){super(e),this.type="map-layer"}clone(){const{mapLayerId:e,gdbVersion:t}=this;return new r({mapLayerId:e,gdbVersion:t})}};(0,o._)([(0,l.J)({mapLayer:"map-layer"})],u.prototype,"type",void 0),(0,o._)([(0,n.Cb)({type:a.z8,json:{write:!0}})],u.prototype,"mapLayerId",void 0),(0,o._)([(0,n.Cb)({type:String,json:{write:!0}})],u.prototype,"gdbVersion",void 0),u=r=(0,o._)([(0,p.j)("esri.layers.support.source.MapLayerSource")],u)},94618:(e,t,i)=>{i.d(t,{Z:()=>y});var r,o=i(27366),s=(i(59486),i(43404)),n=i(46784),a=i(84652),l=i(49861),p=(i(25243),i(69912)),u=i(53866);const d=new s.X({upperLeft:"upper-left",lowerLeft:"lower-left"});let c=r=class extends n.wq{constructor(e){super(e),this.extent=null,this.mode="view",this.originPosition="upper-left",this.tolerance=1}clone(){return new r((0,a.d9)({extent:this.extent,mode:this.mode,originPosition:this.originPosition,tolerance:this.tolerance}))}};(0,o._)([(0,l.Cb)({type:u.Z,json:{write:{overridePolicy(){return{enabled:"view"===this.mode}}}}})],c.prototype,"extent",void 0),(0,o._)([(0,l.Cb)({type:["view","edit"],json:{write:!0}})],c.prototype,"mode",void 0),(0,o._)([(0,l.Cb)({type:String,json:{read:d.read,write:d.write}})],c.prototype,"originPosition",void 0),(0,o._)([(0,l.Cb)({type:Number,json:{write:{overridePolicy(){return{enabled:"view"===this.mode}}}}})],c.prototype,"tolerance",void 0),c=r=(0,o._)([(0,p.j)("esri.rest.support.QuantizationParameters")],c);const y=c},21149:(e,t,i)=>{i.d(t,{Z:()=>R});var r,o=i(27366),s=i(59486),n=i(62044),a=i(43404),l=i(46784),p=i(84652),u=i(92026),d=i(49861),c=i(89125),y=i(27135),h=i(69912),m=i(31201),b=i(25243),w=i(77981),v=i(64020),_=i(94618),S=i(33997),g=i(78952),C=i(7882);const f=new a.X({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),j=new a.X({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let T=r=class extends l.wq{constructor(e){super(e),this.aggregateIds=null,this.cacheHint=void 0,this.compactGeometryEnabled=!1,this.datumTransformation=null,this.defaultSpatialReferenceEnabled=!1,this.distance=void 0,this.dynamicDataSource=void 0,this.formatOf3DObjects=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=void 0,this.groupByFieldsForStatistics=null,this.having=null,this.historicMoment=null,this.maxAllowableOffset=void 0,this.maxRecordCountFactor=1,this.multipatchOption=null,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.outStatistics=null,this.parameterValues=null,this.pixelSize=null,this.quantizationParameters=null,this.rangeValues=null,this.relationParameter=null,this.resultType=null,this.returnCentroid=!1,this.returnDistinctValues=!1,this.returnExceededLimitFeatures=!0,this.returnGeometry=!1,this.returnQueryGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.sourceSpatialReference=null,this.spatialRelationship="intersects",this.start=void 0,this.sqlFormat=null,this.text=null,this.timeExtent=null,this.timeReferenceUnknownClient=!1,this.units=null,this.where=null}static from(e){return(0,b.TJ)(r,e)}castDatumTransformation(e){return"number"==typeof e||"object"==typeof e?e:null}writeHistoricMoment(e,t){t.historicMoment=e&&e.getTime()}writeParameterValues(e,t){if(e){const i={};for(const t in e){const r=e[t];Array.isArray(r)?i[t]=r.map((e=>e instanceof Date?e.getTime():e)):r instanceof Date?i[t]=r.getTime():i[t]=r}t.parameterValues=i}}writeStart(e,t){t.resultOffset=this.start,t.resultRecordCount=this.num||10,t.where="1=1"}writeWhere(e,t){t.where=e||"1=1"}clone(){return new r((0,p.d9)({aggregateIds:this.aggregateIds,cacheHint:this.cacheHint,compactGeometryEnabled:this.compactGeometryEnabled,datumTransformation:this.datumTransformation,defaultSpatialReferenceEnabled:this.defaultSpatialReferenceEnabled,distance:this.distance,gdbVersion:this.gdbVersion,geometry:this.geometry,geometryPrecision:this.geometryPrecision,groupByFieldsForStatistics:this.groupByFieldsForStatistics,having:this.having,historicMoment:(0,u.pC)(this.historicMoment)?new Date(this.historicMoment.getTime()):null,maxAllowableOffset:this.maxAllowableOffset,maxRecordCountFactor:this.maxRecordCountFactor,multipatchOption:this.multipatchOption,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,outStatistics:this.outStatistics,parameterValues:this.parameterValues,pixelSize:this.pixelSize,quantizationParameters:this.quantizationParameters,rangeValues:this.rangeValues,relationParameter:this.relationParameter,resultType:this.resultType,returnDistinctValues:this.returnDistinctValues,returnGeometry:this.returnGeometry,returnCentroid:this.returnCentroid,returnExceededLimitFeatures:this.returnExceededLimitFeatures,returnQueryGeometry:this.returnQueryGeometry,returnM:this.returnM,returnZ:this.returnZ,dynamicDataSource:this.dynamicDataSource,sourceSpatialReference:this.sourceSpatialReference,spatialRelationship:this.spatialRelationship,start:this.start,sqlFormat:this.sqlFormat,text:this.text,timeExtent:this.timeExtent,timeReferenceUnknownClient:this.timeReferenceUnknownClient,units:this.units,where:this.where}))}};T.MAX_MAX_RECORD_COUNT_FACTOR=5,(0,o._)([(0,d.Cb)({json:{write:!0}})],T.prototype,"aggregateIds",void 0),(0,o._)([(0,d.Cb)({type:Boolean,json:{write:!0}})],T.prototype,"cacheHint",void 0),(0,o._)([(0,d.Cb)({type:Boolean,json:{default:!1,write:!0}})],T.prototype,"compactGeometryEnabled",void 0),(0,o._)([(0,d.Cb)({json:{write:!0}})],T.prototype,"datumTransformation",void 0),(0,o._)([(0,c.p)("datumTransformation")],T.prototype,"castDatumTransformation",null),(0,o._)([(0,d.Cb)({type:Boolean,json:{default:!1,write:!0}})],T.prototype,"defaultSpatialReferenceEnabled",void 0),(0,o._)([(0,d.Cb)({type:Number,json:{write:{overridePolicy:e=>({enabled:e>0})}}})],T.prototype,"distance",void 0),(0,o._)([(0,d.Cb)({type:v.n,json:{write:!0}})],T.prototype,"dynamicDataSource",void 0),(0,o._)([(0,d.Cb)({type:String,json:{write:!0}})],T.prototype,"formatOf3DObjects",void 0),(0,o._)([(0,d.Cb)({type:String,json:{write:!0}})],T.prototype,"gdbVersion",void 0),(0,o._)([(0,d.Cb)({types:s.qM,json:{read:w.im,write:!0}})],T.prototype,"geometry",void 0),(0,o._)([(0,d.Cb)({type:Number,json:{write:!0}})],T.prototype,"geometryPrecision",void 0),(0,o._)([(0,d.Cb)({type:[String],json:{write:!0}})],T.prototype,"groupByFieldsForStatistics",void 0),(0,o._)([(0,d.Cb)({type:String,json:{write:!0}})],T.prototype,"having",void 0),(0,o._)([(0,d.Cb)({type:Date})],T.prototype,"historicMoment",void 0),(0,o._)([(0,m.c)("historicMoment")],T.prototype,"writeHistoricMoment",null),(0,o._)([(0,d.Cb)({type:Number,json:{write:!0}})],T.prototype,"maxAllowableOffset",void 0),(0,o._)([(0,d.Cb)({type:Number,cast:e=>e<1?1:e>r.MAX_MAX_RECORD_COUNT_FACTOR?r.MAX_MAX_RECORD_COUNT_FACTOR:e,json:{write:{overridePolicy:e=>({enabled:e>1})}}})],T.prototype,"maxRecordCountFactor",void 0),(0,o._)([(0,d.Cb)({type:["xyFootprint"],json:{write:!0}})],T.prototype,"multipatchOption",void 0),(0,o._)([(0,d.Cb)({type:Number,json:{read:{source:"resultRecordCount"}}})],T.prototype,"num",void 0),(0,o._)([(0,d.Cb)({json:{write:!0}})],T.prototype,"objectIds",void 0),(0,o._)([(0,d.Cb)({type:[String],json:{write:!0}})],T.prototype,"orderByFields",void 0),(0,o._)([(0,d.Cb)({type:[String],json:{write:!0}})],T.prototype,"outFields",void 0),(0,o._)([(0,d.Cb)({type:g.Z,json:{name:"outSR",write:!0}})],T.prototype,"outSpatialReference",void 0),(0,o._)([(0,d.Cb)({type:[S.Z],json:{write:{enabled:!0,overridePolicy(){return{enabled:(0,u.pC)(this.outStatistics)&&this.outStatistics.length>0}}}}})],T.prototype,"outStatistics",void 0),(0,o._)([(0,d.Cb)({json:{write:!0}})],T.prototype,"parameterValues",void 0),(0,o._)([(0,m.c)("parameterValues")],T.prototype,"writeParameterValues",null),(0,o._)([(0,d.Cb)({type:C.Z,json:{write:!0}})],T.prototype,"pixelSize",void 0),(0,o._)([(0,d.Cb)({type:_.Z,json:{write:!0}})],T.prototype,"quantizationParameters",void 0),(0,o._)([(0,d.Cb)({type:[Object],json:{write:!0}})],T.prototype,"rangeValues",void 0),(0,o._)([(0,d.Cb)({type:String,json:{read:{source:"relationParam"},write:{target:"relationParam",overridePolicy(){return{enabled:"relation"===this.spatialRelationship}}}}})],T.prototype,"relationParameter",void 0),(0,o._)([(0,d.Cb)({type:String,json:{write:!0}})],T.prototype,"resultType",void 0),(0,o._)([(0,d.Cb)({type:Boolean,json:{default:!1,write:!0}})],T.prototype,"returnCentroid",void 0),(0,o._)([(0,d.Cb)({type:Boolean,json:{default:!1,write:!0}})],T.prototype,"returnDistinctValues",void 0),(0,o._)([(0,d.Cb)({type:Boolean,json:{default:!0,write:!0}})],T.prototype,"returnExceededLimitFeatures",void 0),(0,o._)([(0,d.Cb)({type:Boolean,json:{write:!0}})],T.prototype,"returnGeometry",void 0),(0,o._)([(0,d.Cb)({type:Boolean,json:{default:!1,write:!0}})],T.prototype,"returnQueryGeometry",void 0),(0,o._)([(0,d.Cb)({type:Boolean,json:{default:!1,write:!0}})],T.prototype,"returnM",void 0),(0,o._)([(0,d.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],T.prototype,"returnZ",void 0),(0,o._)([(0,d.Cb)({type:g.Z,json:{write:!0}})],T.prototype,"sourceSpatialReference",void 0),(0,o._)([(0,y.J)(f,{ignoreUnknown:!1,name:"spatialRel"})],T.prototype,"spatialRelationship",void 0),(0,o._)([(0,d.Cb)({type:Number,json:{read:{source:"resultOffset"}}})],T.prototype,"start",void 0),(0,o._)([(0,m.c)("start"),(0,m.c)("num")],T.prototype,"writeStart",null),(0,o._)([(0,d.Cb)({type:String,json:{write:!0}})],T.prototype,"sqlFormat",void 0),(0,o._)([(0,d.Cb)({type:String,json:{write:!0}})],T.prototype,"text",void 0),(0,o._)([(0,d.Cb)({type:n.Z,json:{write:!0}})],T.prototype,"timeExtent",void 0),(0,o._)([(0,d.Cb)({type:Boolean,json:{default:!1,write:!0}})],T.prototype,"timeReferenceUnknownClient",void 0),(0,o._)([(0,y.J)(j,{ignoreUnknown:!1}),(0,d.Cb)({json:{write:{overridePolicy(e){return{enabled:e&&this.distance>0}}}}})],T.prototype,"units",void 0),(0,o._)([(0,d.Cb)({type:String,json:{write:{overridePolicy(e){return{enabled:null!=e||this.start>0}}}}})],T.prototype,"where",void 0),(0,o._)([(0,m.c)("where")],T.prototype,"writeWhere",null),T=r=(0,o._)([(0,h.j)("esri.rest.support.Query")],T);const R=T},33997:(e,t,i)=>{i.d(t,{Z:()=>y});var r,o=i(27366),s=i(43404),n=i(46784),a=i(84652),l=i(49861),p=(i(25243),i(69912)),u=i(31201);const d=new s.X({count:"count",sum:"sum",min:"min",max:"max",avg:"avg",stddev:"stddev",var:"var",exceedslimit:"exceedslimit",percentile_cont:"percentile-continuous",percentile_disc:"percentile-discrete",EnvelopeAggregate:"envelope-aggregate",CentroidAggregate:"centroid-aggregate",ConvexHullAggregate:"convex-hull-aggregate"});let c=r=class extends n.wq{constructor(e){super(e),this.maxPointCount=void 0,this.maxRecordCount=void 0,this.maxVertexCount=void 0,this.onStatisticField=null,this.outStatisticFieldName=null,this.statisticType=null,this.statisticParameters=null}writeStatisticParameters(e,t){"percentile-continuous"!==this.statisticType&&"percentile-discrete"!==this.statisticType||(t.statisticParameters=(0,a.d9)(e))}clone(){return new r({maxPointCount:this.maxPointCount,maxRecordCount:this.maxRecordCount,maxVertexCount:this.maxVertexCount,onStatisticField:this.onStatisticField,outStatisticFieldName:this.outStatisticFieldName,statisticType:this.statisticType,statisticParameters:(0,a.d9)(this.statisticParameters)})}};(0,o._)([(0,l.Cb)({type:Number,json:{write:!0}})],c.prototype,"maxPointCount",void 0),(0,o._)([(0,l.Cb)({type:Number,json:{write:!0}})],c.prototype,"maxRecordCount",void 0),(0,o._)([(0,l.Cb)({type:Number,json:{write:!0}})],c.prototype,"maxVertexCount",void 0),(0,o._)([(0,l.Cb)({type:String,json:{write:!0}})],c.prototype,"onStatisticField",void 0),(0,o._)([(0,l.Cb)({type:String,json:{write:!0}})],c.prototype,"outStatisticFieldName",void 0),(0,o._)([(0,l.Cb)({type:String,json:{read:{source:"statisticType",reader:d.read},write:{target:"statisticType",writer:d.write}}})],c.prototype,"statisticType",void 0),(0,o._)([(0,l.Cb)({type:Object})],c.prototype,"statisticParameters",void 0),(0,o._)([(0,u.c)("statisticParameters")],c.prototype,"writeStatisticParameters",null),c=r=(0,o._)([(0,p.j)("esri.rest.support.StatisticDefinition")],c);const y=c}}]);
//# sourceMappingURL=5277.e25ff6ca.chunk.js.map