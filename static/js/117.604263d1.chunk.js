(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[117],{1058:function(e,t,i){"use strict";var r,o=i(81),n=(i(79),i(90)),s=(i(80),i(87)),a=i(84),l=i(100),d=i(83),p=(i(82),i(85),i(86),i(702)),c=i(636),u=i(89),b=i(107);let y=r=class extends u.a{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new r({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:Object(n.a)(this.color)})}};Object(o.a)([Object(a.b)({type:String,json:{write:!0}})],y.prototype,"description",void 0),Object(o.a)([Object(a.b)({type:String,json:{write:!0}})],y.prototype,"label",void 0),Object(o.a)([Object(a.b)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],y.prototype,"minValue",void 0),Object(o.a)([Object(a.b)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],y.prototype,"maxValue",void 0),Object(o.a)([Object(a.b)({type:b.a,json:{type:[s.a],write:!0}})],y.prototype,"color",void 0),y=r=Object(o.a)([Object(d.a)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],y);var j,O=y;let f=j=class extends p.a{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new j({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:Object(n.a)(this.colorClassBreakInfos),legendOptions:Object(n.a)(this.legendOptions)})}};Object(o.a)([Object(l.a)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],f.prototype,"type",void 0),Object(o.a)([Object(a.b)({json:{write:!0},type:String})],f.prototype,"field",void 0),Object(o.a)([Object(a.b)({type:c.a,json:{write:!0}})],f.prototype,"legendOptions",void 0),Object(o.a)([Object(a.b)({type:p.a.fieldTransformTypeKebabDict.apiValues,json:{type:p.a.fieldTransformTypeKebabDict.jsonValues,read:p.a.fieldTransformTypeKebabDict.read,write:p.a.fieldTransformTypeKebabDict.write}})],f.prototype,"fieldTransformType",void 0),Object(o.a)([Object(a.b)({type:[O],json:{write:!0}})],f.prototype,"colorClassBreakInfos",void 0),f=j=Object(o.a)([Object(d.a)("esri.renderers.PointCloudClassBreaksRenderer")],f);var h=f;t.a=h},1059:function(e,t,i){"use strict";var r,o=i(81),n=(i(79),i(90)),s=(i(80),i(87)),a=i(84),l=i(100),d=i(83),p=(i(82),i(85),i(86),i(702)),c=i(636),u=i(89),b=i(107);let y=r=class extends u.a{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new r({description:this.description,label:this.label,values:Object(n.a)(this.values),color:Object(n.a)(this.color)})}};Object(o.a)([Object(a.b)({type:String,json:{write:!0}})],y.prototype,"description",void 0),Object(o.a)([Object(a.b)({type:String,json:{write:!0}})],y.prototype,"label",void 0),Object(o.a)([Object(a.b)({type:[String],json:{write:!0}})],y.prototype,"values",void 0),Object(o.a)([Object(a.b)({type:b.a,json:{type:[s.a],write:!0}})],y.prototype,"color",void 0),y=r=Object(o.a)([Object(d.a)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],y);var j,O=y;let f=j=class extends p.a{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new j({...this.cloneProperties(),field:Object(n.a)(this.field),fieldTransformType:Object(n.a)(this.fieldTransformType),colorUniqueValueInfos:Object(n.a)(this.colorUniqueValueInfos),legendOptions:Object(n.a)(this.legendOptions)})}};Object(o.a)([Object(l.a)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],f.prototype,"type",void 0),Object(o.a)([Object(a.b)({json:{write:!0},type:String})],f.prototype,"field",void 0),Object(o.a)([Object(a.b)({type:p.a.fieldTransformTypeKebabDict.apiValues,json:{type:p.a.fieldTransformTypeKebabDict.jsonValues,read:p.a.fieldTransformTypeKebabDict.read,write:p.a.fieldTransformTypeKebabDict.write}})],f.prototype,"fieldTransformType",void 0),Object(o.a)([Object(a.b)({type:[O],json:{write:!0}})],f.prototype,"colorUniqueValueInfos",void 0),Object(o.a)([Object(a.b)({type:c.a,json:{write:!0}})],f.prototype,"legendOptions",void 0),f=j=Object(o.a)([Object(d.a)("esri.renderers.PointCloudUniqueValueRenderer")],f);var h=f;t.a=h},152:function(e,t,i){"use strict";var r,o=i(81),n=(i(79),i(80),i(87)),s=i(84),a=i(93),l=i(100),d=i(96),p=i(83),c=(i(82),i(85),i(86),i(89)),u=i(146),b=i(234);const y=new a.a({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});let j=r=class extends c.a{constructor(e){super(e),this.alias=null,this.defaultValue=void 0,this.description=null,this.domain=null,this.editable=!0,this.length=-1,this.name=null,this.nullable=!0,this.type=null,this.valueType=null}readDescription(e,{description:t}){let i;try{i=JSON.parse(t)}catch(r){}return i?i.value:null}readValueType(e,{description:t}){let i;try{i=JSON.parse(t)}catch(r){}return i?y.fromJSON(i.fieldValueType):null}clone(){return new r({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType})}};Object(o.a)([Object(s.b)({type:String,json:{write:!0}})],j.prototype,"alias",void 0),Object(o.a)([Object(s.b)({type:[String,Number],json:{write:{allowNull:!0}}})],j.prototype,"defaultValue",void 0),Object(o.a)([Object(s.b)()],j.prototype,"description",void 0),Object(o.a)([Object(d.a)("description")],j.prototype,"readDescription",null),Object(o.a)([Object(s.b)({types:u.d,json:{read:{reader:u.b},write:!0}})],j.prototype,"domain",void 0),Object(o.a)([Object(s.b)({type:Boolean,json:{write:!0}})],j.prototype,"editable",void 0),Object(o.a)([Object(s.b)({type:n.a,json:{write:!0}})],j.prototype,"length",void 0),Object(o.a)([Object(s.b)({type:String,json:{write:!0}})],j.prototype,"name",void 0),Object(o.a)([Object(s.b)({type:Boolean,json:{write:!0}})],j.prototype,"nullable",void 0),Object(o.a)([Object(l.a)(b.a)],j.prototype,"type",void 0),Object(o.a)([Object(s.b)()],j.prototype,"valueType",void 0),Object(o.a)([Object(d.a)("valueType",["description"])],j.prototype,"readValueType",null),j=r=Object(o.a)([Object(p.a)("esri.layers.support.Field")],j);var O=j;t.a=O},204:function(e,t,i){"use strict";function r(e){return"date"===e.type||"esriFieldTypeDate"===e.type}function o(e){return e.toLowerCase().trim()}t.a=class{constructor(e){if(this.fields=e,this._fieldsMap=new Map,this._dateFieldsSet=new Set,this.dateFields=[],!e)return;const t=[];for(const i of e){const e=i&&i.name;if(e){const n=o(e);this._fieldsMap.set(e,i),this._fieldsMap.set(n,i),t.push(n),r(i)&&(this.dateFields.push(i),this._dateFieldsSet.add(i))}}t.sort(),this.uid=t.join(",")}destroy(){this._fieldsMap.clear()}has(e){return null!=this.get(e)}get(e){return null!=e?this._fieldsMap.get(e)||this._fieldsMap.get(o(e)):void 0}isDateField(e){return this._dateFieldsSet.has(this.get(e))}normalizeFieldName(e){const t=this.get(e);if(t)return t.name}}},234:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));const r=new(i(93).a)({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml"})},271:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var r=i(116),o=(i(358),i(388)),n=(i(389),i(352)),s=i(293),a=i(390),l=(i(391),i(335),i(166));const d=["oid","global-id"],p=["oid","global-id","guid"];function c({displayField:e,editFieldsInfo:t,fields:i,objectIdField:n,title:s},d){if(!i)return null;const p=f({editFieldsInfo:t,fields:i,objectIdField:n},d);if(!p.length)return null;const c=function(e){const t=Object(r.n)(e),{titleBase:i}=e;return t?`${i}: {${t.trim()}}`:i}({titleBase:s,fields:i,displayField:e}),u=[new a.a,new o.a];return new l.a({title:c,content:u,fieldInfos:p})}const u=[/^fnode_$/i,/^tnode_$/i,/^lpoly_$/i,/^rpoly_$/i,/^poly_$/i,/^subclass$/i,/^subclass_$/i,/^rings_ok$/i,/^rings_nok$/i,/shape/i,/perimeter/i,/objectid/i,/_i$/i],b=(e,{editFieldsInfo:t,objectIdField:i,visibleFieldNames:r})=>r?r.has(e.name):!j(e.name,t)&&(!i||e.name!==i)&&!(d.indexOf(e.type)>-1)&&!u.some((t=>t.test(e.name)));function y(e,t){return"oid"===e.type?-1:"oid"===t.type?1:v(e)?-1:v(t)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((t.alias||t.name).toLocaleLowerCase())}function j(e,t){if(!e||!t)return!1;const{creationDateField:i,creatorField:r,editDateField:o,editorField:n}=t;return-1!==[i&&i.toLowerCase(),r&&r.toLowerCase(),o&&o.toLowerCase(),n&&n.toLowerCase()].indexOf(e.toLowerCase())}function O(e,t){return e.editable&&-1===p.indexOf(e.type)&&!j(e.name,t)}function f({editFieldsInfo:e,fields:t,objectIdField:i},r){return function(e,t){const i=e;return t&&(e=e.filter((e=>-1===t.indexOf(e.type)))),e===i&&(e=e.slice()),e.sort(y),e}(t,(null==r?void 0:r.ignoreFieldTypes)||m).map((t=>new s.a({fieldName:t.name,isEditable:O(t,e),label:t.alias,format:h(t),visible:b(t,{editFieldsInfo:e,objectIdField:i,visibleFieldNames:null==r?void 0:r.visibleFieldNames})})))}function h(e){switch(e.type){case"small-integer":case"integer":case"single":return new n.a({digitSeparator:!0,places:0});case"double":return new n.a({digitSeparator:!0,places:2});case"date":return new n.a({dateFormat:"long-month-day-year"});default:return null}}function v(e){return"name"===(e.name&&e.name.toLowerCase())||("name"===(e.alias&&e.alias.toLowerCase())||void 0)}const m=["geometry","blob","raster","guid","xml"]},332:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var r=i(80),o=i(116),n=i(152);const s=r.a.getLogger("esri.layers.support.fieldProperties");function a(){return{fields:{type:[n.a],value:null},outFields:{type:[String],json:{read:!1},set:function(e){this._userOutFields=e,this.notifyChange("outFields")},get:function(){const e=this._userOutFields;if(!e||!e.length)return null;if(e.includes("*"))return["*"];if(!this.fields)return e;for(const t of e)Object(o.t)(this.fields,t)||s.error("field-attributes-layer:invalid-field",`Invalid field ${t} found in outFields`,{layer:this,outFields:e});return Object(o.k)(this.fields,e)}}}}},636:function(e,t,i){"use strict";var r,o=i(81),n=(i(79),i(80),i(87),i(84)),s=i(83),a=(i(82),i(85),i(86),i(89));let l=r=class extends a.a{constructor(){super(...arguments),this.title=null}clone(){return new r({title:this.title})}};Object(o.a)([Object(n.b)({type:String,json:{write:!0}})],l.prototype,"title",void 0),l=r=Object(o.a)([Object(s.a)("esri.renderers.support.LegendOptions")],l);var d=l;t.a=d},702:function(e,t,i){"use strict";var r,o=i(81),n=(i(79),i(90)),s=(i(80),i(87),i(84)),a=i(93),l=i(83),d=(i(82),i(85),i(86),i(89));let p=r=class extends d.a{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new r({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};Object(o.a)([Object(s.b)({type:String,json:{write:!0}})],p.prototype,"field",void 0),Object(o.a)([Object(s.b)({type:Number,nonNullable:!0,json:{write:!0}})],p.prototype,"minValue",void 0),Object(o.a)([Object(s.b)({type:Number,nonNullable:!0,json:{write:!0}})],p.prototype,"maxValue",void 0),p=r=Object(o.a)([Object(l.a)("esri.renderers.support.pointCloud.ColorModulation")],p);var c=p;const u=new a.a({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let b=class extends d.a{};Object(o.a)([Object(s.b)({type:u.apiValues,readOnly:!0,nonNullable:!0,json:{type:u.jsonValues,read:!1,write:u.write}})],b.prototype,"type",void 0),b=Object(o.a)([Object(l.a)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],b);var y,j=b,O=i(100);let f=y=class extends j{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new y({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};Object(o.a)([Object(O.a)({pointCloudFixedSizeAlgorithm:"fixed-size"})],f.prototype,"type",void 0),Object(o.a)([Object(s.b)({type:Number,nonNullable:!0,json:{write:!0}})],f.prototype,"size",void 0),Object(o.a)([Object(s.b)({type:Boolean,json:{write:!0}})],f.prototype,"useRealWorldSymbolSizes",void 0),f=y=Object(o.a)([Object(l.a)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],f);var h,v=f;let m=h=class extends j{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new h({scaleFactor:this.scaleFactor})}};Object(o.a)([Object(O.a)({pointCloudSplatAlgorithm:"splat"})],m.prototype,"type",void 0),Object(o.a)([Object(s.b)({type:Number,value:1,nonNullable:!0,json:{write:!0}})],m.prototype,"scaleFactor",void 0),m=h=Object(o.a)([Object(l.a)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],m);const g={key:"type",base:j,typeMap:{"fixed-size":v,splat:m}},w=Object(a.b)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let T=class extends d.a{constructor(e){super(e),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:Object(n.a)(this.pointSizeAlgorithm),colorModulation:Object(n.a)(this.colorModulation),pointsPerInch:Object(n.a)(this.pointsPerInch)}}};Object(o.a)([Object(s.b)({type:w.apiValues,readOnly:!0,nonNullable:!0,json:{type:w.jsonValues,read:!1,write:w.write}})],T.prototype,"type",void 0),Object(o.a)([Object(s.b)({types:g,json:{write:!0}})],T.prototype,"pointSizeAlgorithm",void 0),Object(o.a)([Object(s.b)({type:c,json:{write:!0}})],T.prototype,"colorModulation",void 0),Object(o.a)([Object(s.b)({json:{write:!0},nonNullable:!0,type:Number})],T.prototype,"pointsPerInch",void 0),T=Object(o.a)([Object(l.a)("esri.renderers.PointCloudRenderer")],T),(T||(T={})).fieldTransformTypeKebabDict=new a.a({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});var F=T;t.a=F},810:function(e,t,i){"use strict";var r,o=i(81),n=(i(79),i(80),i(87)),s=i(84),a=i(83),l=i(94),d=(i(82),i(85),i(86),i(89)),p=i(107);let c=r=class extends d.a{constructor(e){super(e),this.color=null,this.label=null,this.value=null}writeValue(e,t,i){t[i]=null==e?0:e}clone(){return new r({color:this.color&&this.color.clone(),label:this.label,value:this.value})}};Object(o.a)([Object(s.b)({type:p.a,json:{type:[n.a],write:!0}})],c.prototype,"color",void 0),Object(o.a)([Object(s.b)({type:String,json:{write:!0}})],c.prototype,"label",void 0),Object(o.a)([Object(s.b)({type:Number,json:{write:{allowNull:!0}}})],c.prototype,"value",void 0),Object(o.a)([Object(l.a)("value")],c.prototype,"writeValue",null),c=r=Object(o.a)([Object(a.a)("esri.renderers.visualVariables.support.ColorStop")],c);var u=c;t.a=u},858:function(e,t,i){"use strict";i.r(t);var r=i(81),o=(i(79),i(90)),n=i(121),s=i(88),a=i(80),l=i(87),d=i(84),p=i(96),c=i(83),u=i(94),b=i(91),y=i(82),j=(i(85),i(86),i(92)),O=i(634),f=i(166),h=i(104),v=i(215),m=i(183),g=i(178),w=i(280),T=i(152),F=i(204),S=i(374),C=i(270),I=i(201),x=i(332),V=i(271),P=i(800),R=i(89);let N=class extends R.a{constructor(e){super(e),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};Object(r.a)([Object(d.b)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],N.prototype,"field",void 0),Object(r.a)([Object(d.b)({readOnly:!0,nonNullable:!0,json:{read:!1}})],N.prototype,"type",void 0),N=Object(r.a)([Object(c.a)("esri.layers.pointCloudFilters.PointCloudFilter")],N);var B,q=N,D=i(100);let _=B=class extends q{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new B({field:this.field,requiredClearBits:Object(o.a)(this.requiredClearBits),requiredSetBits:Object(o.a)(this.requiredSetBits)})}};Object(r.a)([Object(d.b)({type:[l.a],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],_.prototype,"requiredClearBits",void 0),Object(r.a)([Object(d.b)({type:[l.a],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],_.prototype,"requiredSetBits",void 0),Object(r.a)([Object(D.a)({pointCloudBitfieldFilter:"bitfield"})],_.prototype,"type",void 0),_=B=Object(r.a)([Object(c.a)("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],_);var L,k=_;let z=L=class extends q{constructor(e){super(e),this.includedReturns=[],this.type="return"}clone(){return new L({field:this.field,includedReturns:Object(o.a)(this.includedReturns)})}};Object(r.a)([Object(d.b)({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],z.prototype,"includedReturns",void 0),Object(r.a)([Object(D.a)({pointCloudReturnFilter:"return"})],z.prototype,"type",void 0),z=L=Object(r.a)([Object(c.a)("esri.layers.pointCloudFilters.PointCloudReturnFilter")],z);var M,A=z;let $=M=class extends q{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[]}clone(){return new M({field:this.field,mode:this.mode,values:Object(o.a)(this.values)})}};Object(r.a)([Object(d.b)({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],$.prototype,"mode",void 0),Object(r.a)([Object(D.a)({pointCloudValueFilter:"value"})],$.prototype,"type",void 0),Object(r.a)([Object(d.b)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],$.prototype,"values",void 0),$=M=Object(r.a)([Object(c.a)("esri.layers.pointCloudFilters.PointCloudValueFilter")],$);const K={key:"type",base:q,typeMap:{value:$,bitfield:k,return:A}};var E,U=i(702),G=i(1058);let J=E=class extends U.a{constructor(e){super(e),this.type="point-cloud-rgb",this.field=null}clone(){return new E({...this.cloneProperties(),field:Object(o.a)(this.field)})}};Object(r.a)([Object(D.a)({pointCloudRGBRenderer:"point-cloud-rgb"})],J.prototype,"type",void 0),Object(r.a)([Object(d.b)({type:String,json:{write:!0}})],J.prototype,"field",void 0),J=E=Object(r.a)([Object(c.a)("esri.renderers.PointCloudRGBRenderer")],J);var W=J,X=i(967),H=i(1059);const Q={key:"type",base:U.a,typeMap:{"point-cloud-class-breaks":G.a,"point-cloud-rgb":W,"point-cloud-stretch":X.a,"point-cloud-unique-value":H.a},errorContext:"renderer"},Y=a.a.getLogger("esri.layers.PointCloudLayer"),Z=Object(x.a)();let ee=class extends(Object(P.a)(Object(S.a)(Object(w.a)(Object(C.a)(Object(I.a)(Object(m.a)(v.a))))))){constructor(...e){super(...e),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}get fieldsIndex(){return new F.a(this.fields)}getFieldDomain(e){const t=this.fieldsIndex.get(e);return t&&t.domain?t.domain:null}readServiceFields(e,t,i){return Array.isArray(e)?e.map((e=>{const t=new T.a;return"FieldTypeInteger"===e.type&&((e=Object(o.a)(e)).type="esriFieldTypeInteger"),t.read(e,i),t})):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map((e=>new T.a({name:e.name,type:"ELEVATION"===e.name?"double":"integer"}))):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}writeRenderer(e,t,i,r){Object(n.c)("layerDefinition.drawingInfo.renderer",e.write(null,r),t)}load(e){const t=Object(s.k)(e)?e.signal:null,i=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(j.t).then((()=>this._fetchService(t)));return this.addResolvingPromise(i),Promise.resolve(this)}createPopupTemplate(e){const t=Object(V.a)(this,e);return this.formatPopupTemplateReturnsField(t),this.formatPopupTemplateRGBField(t),t}formatPopupTemplateReturnsField(e){const t=this.fieldsIndex.get("RETURNS");if(!t)return;const i=e.fieldInfos.find((e=>e.fieldName===t.name));if(!i)return;const r=new O.a({name:"pcl-returns-decoded",title:t.alias||t.name,expression:`\n        var returnValue = $feature.${t.name};\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      `});e.expressionInfos=[...e.expressionInfos||[],r],i.fieldName="expression/pcl-returns-decoded"}formatPopupTemplateRGBField(e){const t=this.fieldsIndex.get("RGB");if(!t)return;const i=e.fieldInfos.find((e=>e.fieldName===t.name));if(!i)return;const r=new O.a({name:"pcl-rgb-decoded",title:t.alias||t.name,expression:`\n        var rgb = $feature.${t.name};\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      `});e.expressionInfos=[...e.expressionInfos||[],r],i.fieldName="expression/pcl-rgb-decoded"}async queryCachedStatistics(e,t){if(await this.load(t),!this.attributeStorageInfo)throw new b.a("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const i=this.fieldsIndex.get(e);if(!i)throw new b.a("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const r of this.attributeStorageInfo)if(r.name===i.name){const e=Object(y.y)(this.parsedUrl.path,`./statistics/${r.key}`);return Object(h.default)(e,{query:{f:"json"},responseType:"json",signal:t?t.signal:null}).then((e=>e.data))}throw new b.a("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new b.a("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new b.a("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new b.a("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some((t=>t.name===e))}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&Y.warn(".elevationInfo=","Point cloud layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&Y.warn(".elevationInfo=","Point cloud layers do not support featureExpressionInfo"))}};Object(r.a)([Object(d.b)({type:["PointCloudLayer"]})],ee.prototype,"operationalLayerType",void 0),Object(r.a)([Object(d.b)(g.j)],ee.prototype,"popupEnabled",void 0),Object(r.a)([Object(d.b)({type:f.a,json:{name:"popupInfo",write:!0}})],ee.prototype,"popupTemplate",void 0),Object(r.a)([Object(d.b)({readOnly:!0,json:{read:!1}})],ee.prototype,"defaultPopupTemplate",null),Object(r.a)([Object(d.b)({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],ee.prototype,"opacity",void 0),Object(r.a)([Object(d.b)({type:["show","hide"]})],ee.prototype,"listMode",void 0),Object(r.a)([Object(d.b)({types:[K],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],ee.prototype,"filters",void 0),Object(r.a)([Object(d.b)({type:[T.a]})],ee.prototype,"fields",void 0),Object(r.a)([Object(d.b)({readOnly:!0})],ee.prototype,"fieldsIndex",null),Object(r.a)([Object(p.a)("service","fields",["fields","attributeStorageInfo"])],ee.prototype,"readServiceFields",null),Object(r.a)([Object(d.b)(Z.outFields)],ee.prototype,"outFields",void 0),Object(r.a)([Object(d.b)({readOnly:!0})],ee.prototype,"attributeStorageInfo",void 0),Object(r.a)([Object(d.b)(g.b)],ee.prototype,"elevationInfo",null),Object(r.a)([Object(d.b)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],ee.prototype,"path",void 0),Object(r.a)([Object(d.b)(g.e)],ee.prototype,"legendEnabled",void 0),Object(r.a)([Object(d.b)({types:Q,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:Q},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],ee.prototype,"renderer",void 0),Object(r.a)([Object(u.a)("renderer")],ee.prototype,"writeRenderer",null),Object(r.a)([Object(d.b)({json:{read:!1},readOnly:!0})],ee.prototype,"type",void 0),ee=Object(r.a)([Object(c.a)("esri.layers.PointCloudLayer")],ee);var te=ee;t.default=te},967:function(e,t,i){"use strict";var r,o=i(81),n=(i(79),i(90)),s=(i(80),i(87),i(84)),a=i(100),l=i(83),d=(i(82),i(85),i(86),i(702)),p=i(636),c=i(810);let u=r=class extends d.a{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new r({...this.cloneProperties(),field:Object(n.a)(this.field),fieldTransformType:Object(n.a)(this.fieldTransformType),stops:Object(n.a)(this.stops),legendOptions:Object(n.a)(this.legendOptions)})}};Object(o.a)([Object(a.a)({pointCloudStretchRenderer:"point-cloud-stretch"})],u.prototype,"type",void 0),Object(o.a)([Object(s.b)({json:{write:!0},type:String})],u.prototype,"field",void 0),Object(o.a)([Object(s.b)({type:p.a,json:{write:!0}})],u.prototype,"legendOptions",void 0),Object(o.a)([Object(s.b)({type:d.a.fieldTransformTypeKebabDict.apiValues,json:{type:d.a.fieldTransformTypeKebabDict.jsonValues,read:d.a.fieldTransformTypeKebabDict.read,write:d.a.fieldTransformTypeKebabDict.write}})],u.prototype,"fieldTransformType",void 0),Object(o.a)([Object(s.b)({type:[c.a],json:{write:!0}})],u.prototype,"stops",void 0),u=r=Object(o.a)([Object(l.a)("esri.renderers.PointCloudStretchRenderer")],u);var b=u;t.a=b}}]);
//# sourceMappingURL=117.604263d1.chunk.js.map