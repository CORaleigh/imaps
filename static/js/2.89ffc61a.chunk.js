(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[2],{1001:function(t,e,o){"use strict";var i=o(77),r=o(82),s=o(79),a=(o(75),o(80),o(76),o(78));let n=class extends r.a{constructor(t){super(t),this.altText=null,this.caption="",this.title="",this.type=null}};Object(i.a)([Object(s.b)({type:String,json:{write:!0}})],n.prototype,"altText",void 0),Object(i.a)([Object(s.b)({type:String,json:{write:!0}})],n.prototype,"caption",void 0),Object(i.a)([Object(s.b)({type:String,json:{write:!0}})],n.prototype,"title",void 0),Object(i.a)([Object(s.b)({type:["image","bar-chart","column-chart","line-chart","pie-chart"],readOnly:!0,json:{read:!1,write:!0}})],n.prototype,"type",void 0),n=Object(i.a)([Object(a.a)("esri.popup.content.mixins.MediaInfo")],n);var l=n;e.a=l},1132:function(t,e,o){"use strict";o.d(e,"a",(function(){return r})),o.d(e,"b",(function(){return s}));var i=o(86);const r=Object(i.b)()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"}),s=(r.toJSON.bind(r),r.fromJSON.bind(r))},1133:function(t,e,o){"use strict";var i,r=o(77),s=o(79),a=(o(75),o(80),o(76),o(78)),n=o(987),l=o(939);let c=i=class extends n.a{constructor(t){super(t),this.type="bar-chart"}clone(){return new i({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};Object(r.a)([Object(s.b)({type:["bar-chart"],readOnly:!0,json:{type:["barchart"],read:!1,write:l.a.write}})],c.prototype,"type",void 0),c=i=Object(r.a)([Object(a.a)("esri.popup.content.BarChartMediaInfo")],c);var p=c;e.a=p},1134:function(t,e,o){"use strict";var i,r=o(77),s=o(79),a=(o(75),o(80),o(76),o(78)),n=o(987),l=o(939);let c=i=class extends n.a{constructor(t){super(t),this.type="column-chart"}clone(){return new i({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};Object(r.a)([Object(s.b)({type:["column-chart"],readOnly:!0,json:{type:["columnchart"],read:!1,write:l.a.write}})],c.prototype,"type",void 0),c=i=Object(r.a)([Object(a.a)("esri.popup.content.ColumnChartMediaInfo")],c);var p=c;e.a=p},1135:function(t,e,o){"use strict";var i,r=o(77),s=o(79),a=(o(75),o(80),o(76),o(78)),n=o(987),l=o(939);let c=i=class extends n.a{constructor(t){super(t),this.type="line-chart"}clone(){return new i({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};Object(r.a)([Object(s.b)({type:["line-chart"],readOnly:!0,json:{type:["linechart"],read:!1,write:l.a.write}})],c.prototype,"type",void 0),c=i=Object(r.a)([Object(a.a)("esri.popup.content.LineChartMediaInfo")],c);var p=c;e.a=p},1136:function(t,e,o){"use strict";var i,r=o(77),s=o(79),a=(o(75),o(80),o(76),o(78)),n=o(987),l=o(939);let c=i=class extends n.a{constructor(t){super(t),this.type="pie-chart"}clone(){return new i({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};Object(r.a)([Object(s.b)({type:["pie-chart"],readOnly:!0,json:{type:["piechart"],read:!1,write:l.a.write}})],c.prototype,"type",void 0),c=i=Object(r.a)([Object(a.a)("esri.popup.content.PieChartMediaInfo")],c);var p=c;e.a=p},1137:function(t,e,o){"use strict";o.d(e,"a",(function(){return l}));var i=o(1133),r=o(1134),s=o(1163),a=o(1135),n=o(1136);const l={base:o(1001).a,key:"type",defaultKeyValue:"image",typeMap:{"bar-chart":i.a,"column-chart":r.a,"line-chart":a.a,"pie-chart":n.a,image:s.a}}},1163:function(t,e,o){"use strict";var i,r=o(77),s=o(79),a=(o(75),o(80),o(76),o(78)),n=o(1001),l=o(82);let c=i=class extends l.a{constructor(t){super(t),this.linkURL=null,this.sourceURL=null}clone(){return new i({linkURL:this.linkURL,sourceURL:this.sourceURL})}};Object(r.a)([Object(s.b)({type:String,json:{write:!0}})],c.prototype,"linkURL",void 0),Object(r.a)([Object(s.b)({type:String,json:{write:!0}})],c.prototype,"sourceURL",void 0),c=i=Object(r.a)([Object(a.a)("esri.popup.content.support.ImageMediaInfoValue")],c);var p,d=c;let h=p=class extends n.a{constructor(t){super(t),this.refreshInterval=null,this.type="image",this.value=null}clone(){return new p({altText:this.altText,title:this.title,caption:this.caption,refreshInterval:this.refreshInterval,value:this.value?this.value.clone():null})}};Object(r.a)([Object(s.b)({type:Number,json:{write:!0}})],h.prototype,"refreshInterval",void 0),Object(r.a)([Object(s.b)({type:["image"],readOnly:!0,json:{read:!1,write:!0}})],h.prototype,"type",void 0),Object(r.a)([Object(s.b)({type:d,json:{write:!0}})],h.prototype,"value",void 0),h=p=Object(r.a)([Object(a.a)("esri.popup.content.ImageMediaInfo")],h);var u=h;e.a=u},167:function(t,e,o){"use strict";var i=o(77),r=o(101),s=o(82),a=o(84),n=o(76),l=o(85),c=o(79),p=o(106),d=(o(75),o(88)),h=o(78),u=o(87),b=o(80),y=o(112),j=o(402),O=o(375),f=o(403),m=o(404),v=o(405),w=o(343);const g={base:null,key:"type",typeMap:{attachment:j.a,media:v.a,text:w.a,field:m.a}};var I,x=o(647),F=o(313);let T=I=class extends s.a{constructor(t){super(t),this.returnTopmostRaster=null,this.showNoDataRecords=null}clone(){return new I({showNoDataRecords:this.showNoDataRecords,returnTopmostRaster:this.returnTopmostRaster})}};Object(i.a)([Object(c.b)({type:Boolean,json:{write:!0}})],T.prototype,"returnTopmostRaster",void 0),Object(i.a)([Object(c.b)({type:Boolean,json:{write:!0}})],T.prototype,"showNoDataRecords",void 0),T=I=Object(i.a)([Object(h.a)("esri.popup.LayerOptions")],T);var S,A=T,N=o(525);let M=S=class extends s.a{constructor(t){super(t),this.showRelatedRecords=null,this.orderByFields=null}clone(){return new S({showRelatedRecords:this.showRelatedRecords,orderByFields:this.orderByFields?Object(a.a)(this.orderByFields):null})}};Object(i.a)([Object(c.b)({type:Boolean,json:{write:!0}})],M.prototype,"showRelatedRecords",void 0),Object(i.a)([Object(c.b)({type:[N.a],json:{write:!0}})],M.prototype,"orderByFields",void 0),M=S=Object(i.a)([Object(h.a)("esri.popup.RelatedRecordsInfo")],M);var R,_=M,C=o(1137),E=o(183),L=o(321),D=o(351);const J=r.a.ofType({key:"type",defaultKeyValue:"button",base:E.a,typeMap:{button:L.a,toggle:D.a}}),B={base:O.a,key:"type",typeMap:{media:v.a,custom:f.a,text:w.a,attachments:j.a,fields:m.a}},k="esri.PopupTemplate",Y=n.a.getLogger(k),U=["attachments","fields","media","text"];let P=R=class extends s.a{constructor(){super(...arguments),this.actions=null,this.content="",this.expressionInfos=null,this.fieldInfos=null,this.layerOptions=null,this.lastEditInfoEnabled=!0,this.outFields=null,this.overwriteActions=!1,this.returnGeometry=!1,this.title="",this.relatedRecordsInfo=null}castContent(t){return Array.isArray(t)?t.map((t=>Object(b.k)(B,t))):"string"==typeof t||"function"==typeof t||t instanceof HTMLElement||Object(l.p)(t)?t:(Y.error("content error","unsupported content value",{value:t}),null)}readContent(t,e){const{popupElements:o}=e;return Array.isArray(o)&&o.length>0?this._readPopupInfoElements(e):this._readPopupInfo(e)}writeContent(t,e,o,i){"string"!=typeof t?Array.isArray(t)&&(e.popupElements=t.filter((t=>-1!==U.indexOf(t.type))).map((t=>t&&t.toJSON(i))),e.popupElements.forEach((t=>{"attachments"===t.type?this._writeAttachmentContent(e):"media"===t.type?this._writeMediaContent(t,e):"text"===t.type&&this._writeTextContent(t,e)}))):e.description=t}writeFieldInfos(t,e,o,i){const{content:r}=this,s=Array.isArray(r)?r:null;if(t){const o=s?s.filter((t=>"fields"===t.type)):[],r=o.length&&o.every((t=>{var e;return null==(e=t.fieldInfos)?void 0:e.length}));e.fieldInfos=t.filter(Boolean).map((t=>{const e=t.toJSON(i);return r&&(e.visible=!1),e}))}if(s)for(const a of s)"fields"===a.type&&this._writeFieldsContent(a,e)}writeLayerOptions(t,e,o,i){e[o]=!t||null===t.showNoDataRecords&&null===t.returnTopmostRaster?null:t.toJSON(i)}writeTitle(t,e){e.title=t||""}clone(){const{actions:t}=this,e=t?Object(a.a)(t.toArray()):[];return new R({actions:e,content:Array.isArray(this.content)?Object(a.a)(this.content):this.content,expressionInfos:Array.isArray(this.expressionInfos)?Object(a.a)(this.expressionInfos):null,fieldInfos:Array.isArray(this.fieldInfos)?Object(a.a)(this.fieldInfos):null,layerOptions:this.layerOptions?Object(a.a)(this.layerOptions):null,lastEditInfoEnabled:this.lastEditInfoEnabled,outFields:Array.isArray(this.outFields)?Object(a.a)(this.outFields):null,overwriteActions:this.overwriteActions,returnGeometry:this.returnGeometry,title:this.title,relatedRecordsInfo:this.relatedRecordsInfo?Object(a.a)(this.relatedRecordsInfo):null})}async collectRequiredFields(t,e){await this._collectExpressionInfoFields(t,e,this.expressionInfos),Object(y.g)(t,e,[...this.outFields||[],...this._getActionsFields(this.actions),...this._getTitleFields(this.title),...this._getContentFields(this.content)])}async getRequiredFields(t){const e=new Set;return await this.collectRequiredFields(e,t),[...e].sort()}_writeFieldsContent(t,e){if(!Array.isArray(t.fieldInfos)||!t.fieldInfos.length)return;const o=Object(a.a)(t.fieldInfos);Array.isArray(e.fieldInfos)?o.forEach((t=>{const o=e.fieldInfos.find((e=>e.fieldName.toLowerCase()===t.fieldName.toLowerCase()));o?o.visible=!0:e.fieldInfos.push(t)})):e.fieldInfos=o}_writeAttachmentContent(t){t.showAttachments||(t.showAttachments=!0)}_writeTextContent(t,e){!e.description&&t.text&&(e.description=t.text)}_writeMediaContent(t,e){if(!Array.isArray(t.mediaInfos)||!t.mediaInfos.length)return;const o=Object(a.a)(t.mediaInfos);Array.isArray(e.mediaInfos)?e.mediaInfos=[...e.mediaInfos,...o]:e.mediaInfos=o}_readPopupInfoElements({description:t,mediaInfos:e,popupElements:o}){const i={description:!1,mediaInfos:!1};return o.map((o=>"media"===o.type?(o.mediaInfos||!e||i.mediaInfos||(o.mediaInfos=e,i.mediaInfos=!0),v.a.fromJSON(o)):"text"===o.type?(o.text||!t||i.description||(o.text=t,i.description=!0),w.a.fromJSON(o)):"attachments"===o.type?j.a.fromJSON(o):"fields"===o.type?m.a.fromJSON(o):void 0)).filter(Boolean)}_readPopupInfo({description:t,mediaInfos:e,showAttachments:o}){const i=[];return t?i.push(new w.a({text:t})):i.push(new m.a),Array.isArray(e)&&e.length&&i.push(v.a.fromJSON({mediaInfos:e})),o&&i.push(j.a.fromJSON({displayType:"list"})),i.length?i:t}_getContentElementFields(t){return t&&"attachments"!==t.type?"custom"===t.type?t.outFields||[]:"fields"===t.type?this._getFieldInfoFields(t.fieldInfos||this.fieldInfos):"media"===t.type?(t.mediaInfos||[]).reduce(((t,e)=>[...t,...this._getMediaInfoFields(e)]),[]):"text"===t.type?this._extractFieldNames(t.text):void 0:[]}_getMediaInfoFields(t){const{caption:e,title:o,value:i}=t,r=i||{},{fields:s=[],normalizeField:a,tooltipField:n,sourceURL:l,linkURL:c}=r,p=[...this._extractFieldNames(o),...this._extractFieldNames(e),...this._extractFieldNames(l),...this._extractFieldNames(c),...s];return a&&p.push(a),n&&p.push(n),p}_getContentFields(t){return"string"==typeof t?this._extractFieldNames(t):Array.isArray(t)?t.reduce(((t,e)=>[...t,...this._getContentElementFields(e)]),[]):[]}async _collectExpressionInfoFields(t,e,o){o&&await Promise.all(o.map((o=>Object(y.c)(t,e,o.expression))))}_getFieldInfoFields(t){return t?t.filter((t=>void 0===t.visible||!!t.visible)).map((t=>t.fieldName)).filter((t=>-1===t.indexOf("relationships/")&&-1===t.indexOf("expression/"))):[]}_getActionsFields(t){return t?t.toArray().reduce(((t,e)=>[...t,...this._getActionFields(e)]),[]):[]}_getActionFields(t){const{className:e,title:o,type:i}=t,r="button"===i||"toggle"===i?t.image:"";return[...this._extractFieldNames(o),...this._extractFieldNames(e),...this._extractFieldNames(r)]}_getTitleFields(t){return"string"==typeof t?this._extractFieldNames(t):[]}_extractFieldNames(t){if(!t||"string"!=typeof t)return[];const e=t.match(/{[^}]*}/g);if(!e)return[];const o=/\{(\w+):.+\}/,i=e.filter((t=>!(0===t.indexOf("{relationships/")||0===t.indexOf("{expression/")))).map((t=>t.replace(o,"{$1}")));return i?i.map((t=>t.slice(1,-1))):[]}};Object(i.a)([Object(c.b)({type:J})],P.prototype,"actions",void 0),Object(i.a)([Object(c.b)()],P.prototype,"content",void 0),Object(i.a)([Object(p.a)("content")],P.prototype,"castContent",null),Object(i.a)([Object(d.a)("content",["description","fieldInfos","popupElements","mediaInfos","showAttachments"])],P.prototype,"readContent",null),Object(i.a)([Object(u.a)("content",{popupElements:{type:r.a.ofType(g)},showAttachments:{type:Boolean},mediaInfos:{type:r.a.ofType(C.a)},description:{type:String}})],P.prototype,"writeContent",null),Object(i.a)([Object(c.b)({type:[x.a],json:{write:!0}})],P.prototype,"expressionInfos",void 0),Object(i.a)([Object(c.b)({type:[F.a]})],P.prototype,"fieldInfos",void 0),Object(i.a)([Object(u.a)("fieldInfos")],P.prototype,"writeFieldInfos",null),Object(i.a)([Object(c.b)({type:A})],P.prototype,"layerOptions",void 0),Object(i.a)([Object(u.a)("layerOptions")],P.prototype,"writeLayerOptions",null),Object(i.a)([Object(c.b)({type:Boolean,json:{read:{source:"showLastEditInfo"},write:{target:"showLastEditInfo"},default:!0}})],P.prototype,"lastEditInfoEnabled",void 0),Object(i.a)([Object(c.b)()],P.prototype,"outFields",void 0),Object(i.a)([Object(c.b)()],P.prototype,"overwriteActions",void 0),Object(i.a)([Object(c.b)()],P.prototype,"returnGeometry",void 0),Object(i.a)([Object(c.b)({json:{type:String}})],P.prototype,"title",void 0),Object(i.a)([Object(u.a)("title")],P.prototype,"writeTitle",null),Object(i.a)([Object(c.b)({type:_,json:{write:!0}})],P.prototype,"relatedRecordsInfo",void 0),P=R=Object(i.a)([Object(h.a)(k)],P);var z=P;e.a=z},313:function(t,e,o){"use strict";var i,r=o(77),s=o(86),a=o(82),n=o(84),l=o(79),c=(o(80),o(75),o(76),o(91)),p=o(78),d=o(364);let h=i=class extends a.a{constructor(t){super(t),this.fieldName=null,this.format=null,this.isEditable=!1,this.label=null,this.stringFieldOption="text-box",this.statisticType=null,this.tooltip=null,this.visible=!0}clone(){return new i({fieldName:this.fieldName,format:this.format?Object(n.a)(this.format):null,isEditable:this.isEditable,label:this.label,stringFieldOption:this.stringFieldOption,statisticType:this.statisticType,tooltip:this.tooltip,visible:this.visible})}};Object(r.a)([Object(l.b)({type:String,json:{write:!0}})],h.prototype,"fieldName",void 0),Object(r.a)([Object(l.b)({type:d.a,json:{write:!0}})],h.prototype,"format",void 0),Object(r.a)([Object(l.b)({type:Boolean,json:{write:!0,default:!1}})],h.prototype,"isEditable",void 0),Object(r.a)([Object(l.b)({type:String,json:{write:!0}})],h.prototype,"label",void 0),Object(r.a)([Object(c.a)(new s.a({richtext:"rich-text",textarea:"text-area",textbox:"text-box"}),{default:"text-box"})],h.prototype,"stringFieldOption",void 0),Object(r.a)([Object(l.b)({type:["count","sum","min","max","avg","stddev","var"],json:{write:!0}})],h.prototype,"statisticType",void 0),Object(r.a)([Object(l.b)({type:String,json:{write:!0}})],h.prototype,"tooltip",void 0),Object(r.a)([Object(l.b)({type:Boolean,json:{write:!0}})],h.prototype,"visible",void 0),h=i=Object(r.a)([Object(p.a)("esri.popup.FieldInfo")],h);var u=h;e.a=u},343:function(t,e,o){"use strict";var i,r=o(77),s=o(79),a=(o(75),o(80),o(76),o(78)),n=o(375);let l=i=class extends n.a{constructor(t){super(t),this.text=null,this.type="text"}clone(){return new i({text:this.text})}};Object(r.a)([Object(s.b)({type:String,json:{write:!0}})],l.prototype,"text",void 0),Object(r.a)([Object(s.b)({type:["text"],readOnly:!0,json:{read:!1,write:!0}})],l.prototype,"type",void 0),l=i=Object(r.a)([Object(a.a)("esri.popup.content.TextContent")],l);var c=l;e.a=c},364:function(t,e,o){"use strict";var i,r=o(77),s=o(1132),a=o(82),n=o(79),l=(o(75),o(80)),c=(o(76),o(91)),p=o(78),d=o(208),h=o(193);let u=i=class extends a.a{constructor(t){super(t),this.dateFormat=null,this.digitSeparator=!1,this.places=null}clone(){return new i({dateFormat:this.dateFormat,digitSeparator:this.digitSeparator,places:this.places})}format(t){return this.dateFormat?Object(d.b)(t,Object(d.a)(this.dateFormat)):Object(h.b)(t,Object(h.a)(this))}};Object(r.a)([Object(c.a)(s.a)],u.prototype,"dateFormat",void 0),Object(r.a)([Object(n.b)({type:Boolean,json:{write:!0}})],u.prototype,"digitSeparator",void 0),Object(r.a)([Object(n.b)({type:l.a,json:{write:!0}})],u.prototype,"places",void 0),u=i=Object(r.a)([Object(p.a)("esri.popup.support.FieldInfoFormat")],u);var b=u;e.a=b},375:function(t,e,o){"use strict";var i=o(77),r=o(82),s=o(79),a=(o(75),o(80),o(76),o(78));let n=class extends r.a{constructor(t){super(t),this.type=null}};Object(i.a)([Object(s.b)({type:["attachments","custom","fields","media","text"],readOnly:!0,json:{read:!1,write:!0}})],n.prototype,"type",void 0),n=Object(i.a)([Object(a.a)("esri.popup.content.Content")],n);var l=n;e.a=l},402:function(t,e,o){"use strict";var i,r=o(77),s=o(79),a=(o(75),o(80),o(76),o(78)),n=o(375);let l=i=class extends n.a{constructor(t){super(t),this.description=null,this.displayType=null,this.title=null,this.type="attachments"}clone(){return new i({description:this.description,displayType:this.displayType,title:this.title})}};Object(r.a)([Object(s.b)({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],l.prototype,"description",void 0),Object(r.a)([Object(s.b)({type:["preview","list"],json:{write:!0}})],l.prototype,"displayType",void 0),Object(r.a)([Object(s.b)({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],l.prototype,"title",void 0),Object(r.a)([Object(s.b)({type:["attachments"],readOnly:!0,json:{read:!1,write:!0}})],l.prototype,"type",void 0),l=i=Object(r.a)([Object(a.a)("esri.popup.content.AttachmentsContent")],l);var c=l;e.a=c},403:function(t,e,o){"use strict";var i,r=o(77),s=o(84),a=o(79),n=(o(80),o(75),o(76),o(78)),l=o(375);let c=i=class extends l.a{constructor(t){super(t),this.creator=null,this.destroyer=null,this.outFields=null,this.type="custom"}clone(){return new i({creator:this.creator,destroyer:this.destroyer,outFields:Array.isArray(this.outFields)?Object(s.a)(this.outFields):null})}};Object(r.a)([Object(a.b)()],c.prototype,"creator",void 0),Object(r.a)([Object(a.b)()],c.prototype,"destroyer",void 0),Object(r.a)([Object(a.b)()],c.prototype,"outFields",void 0),Object(r.a)([Object(a.b)({type:["custom"],readOnly:!0})],c.prototype,"type",void 0),c=i=Object(r.a)([Object(n.a)("esri.popup.content.CustomContent")],c);var p=c;e.a=p},404:function(t,e,o){"use strict";var i,r=o(77),s=o(84),a=o(79),n=(o(80),o(75),o(76),o(78)),l=o(87),c=o(313),p=o(375);let d=i=class extends p.a{constructor(t){super(t),this.description=null,this.fieldInfos=null,this.title=null,this.type="fields"}writeFieldInfos(t,e){e.fieldInfos=t&&t.map((t=>t.toJSON()))}clone(){return new i({description:this.description,fieldInfos:Array.isArray(this.fieldInfos)?Object(s.a)(this.fieldInfos):null,title:this.title})}};Object(r.a)([Object(a.b)({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],d.prototype,"description",void 0),Object(r.a)([Object(a.b)({type:[c.a]})],d.prototype,"fieldInfos",void 0),Object(r.a)([Object(l.a)("fieldInfos")],d.prototype,"writeFieldInfos",null),Object(r.a)([Object(a.b)({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],d.prototype,"title",void 0),Object(r.a)([Object(a.b)({type:["fields"],readOnly:!0,json:{read:!1,write:!0}})],d.prototype,"type",void 0),d=i=Object(r.a)([Object(n.a)("esri.popup.content.FieldsContent")],d);var h=d;e.a=h},405:function(t,e,o){"use strict";var i,r=o(77),s=o(84),a=o(79),n=(o(80),o(75),o(76),o(88)),l=o(78),c=o(87),p=o(1133),d=o(1134),h=o(375),u=o(1163),b=o(1135),y=o(1136),j=o(1137);let O=i=class extends h.a{constructor(t){super(t),this.activeMediaInfoIndex=null,this.description=null,this.mediaInfos=null,this.title=null,this.type="media"}readMediaInfos(t){return t&&t.map((t=>"image"===t.type?u.a.fromJSON(t):"barchart"===t.type?p.a.fromJSON(t):"columnchart"===t.type?d.a.fromJSON(t):"linechart"===t.type?b.a.fromJSON(t):"piechart"===t.type?y.a.fromJSON(t):void 0)).filter(Boolean)}writeMediaInfos(t,e){e.mediaInfos=t&&t.map((t=>t.toJSON()))}clone(){return new i({activeMediaInfoIndex:this.activeMediaInfoIndex,description:this.description,mediaInfos:this.mediaInfos?Object(s.a)(this.mediaInfos):null,title:this.title})}};Object(r.a)([Object(a.b)()],O.prototype,"activeMediaInfoIndex",void 0),Object(r.a)([Object(a.b)({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],O.prototype,"description",void 0),Object(r.a)([Object(a.b)({types:[j.a]})],O.prototype,"mediaInfos",void 0),Object(r.a)([Object(n.a)("mediaInfos")],O.prototype,"readMediaInfos",null),Object(r.a)([Object(c.a)("mediaInfos")],O.prototype,"writeMediaInfos",null),Object(r.a)([Object(a.b)({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],O.prototype,"title",void 0),Object(r.a)([Object(a.b)({type:["media"],readOnly:!0,json:{read:!1,write:!0}})],O.prototype,"type",void 0),O=i=Object(r.a)([Object(l.a)("esri.popup.content.MediaContent")],O);var f=O;e.a=f},525:function(t,e,o){"use strict";var i,r=o(77),s=o(82),a=o(79),n=(o(75),o(80),o(76),o(78));let l=i=class extends s.a{constructor(t){super(t),this.field=null,this.order=null}clone(){return new i({field:this.field,order:this.order})}};Object(r.a)([Object(a.b)({type:String,json:{write:!0}})],l.prototype,"field",void 0),Object(r.a)([Object(a.b)({type:["asc","desc"],json:{write:!0}})],l.prototype,"order",void 0),l=i=Object(r.a)([Object(n.a)("esri.popup.support.RelatedRecordsInfoFieldOrder")],l);var c=l;e.a=c},647:function(t,e,o){"use strict";var i,r=o(77),s=o(82),a=o(79),n=(o(75),o(80),o(76),o(78));let l=i=class extends s.a{constructor(t){super(t),this.name=null,this.title=null,this.expression=null,this.returnType=null}clone(){return new i({name:this.name,title:this.title,expression:this.expression,returnType:this.returnType})}};Object(r.a)([Object(a.b)({type:String,json:{write:!0}})],l.prototype,"name",void 0),Object(r.a)([Object(a.b)({type:String,json:{write:!0}})],l.prototype,"title",void 0),Object(r.a)([Object(a.b)({type:String,json:{write:!0}})],l.prototype,"expression",void 0),Object(r.a)([Object(a.b)({type:["string","number"],json:{write:!0}})],l.prototype,"returnType",void 0),l=i=Object(r.a)([Object(n.a)("esri.popup.ExpressionInfo")],l);var c=l;e.a=c},664:function(t,e,o){"use strict";var i,r=o(77),s=o(89),a=o(140),n=(o(75),o(80),o(76),o(79)),l=o(78);let c=i=class extends s.a{constructor(t){super(t),this.tooltip=null,this.value=null,this.x=null,this.y=null}clone(){return new i({tooltip:this.tooltip,value:this.value})}};Object(r.a)([Object(n.b)()],c.prototype,"tooltip",void 0),Object(r.a)([Object(n.b)()],c.prototype,"value",void 0),Object(r.a)([Object(a.a)("value")],c.prototype,"x",void 0),Object(r.a)([Object(a.a)("tooltip")],c.prototype,"y",void 0),c=i=Object(r.a)([Object(l.a)("esri.popup.content.support.ChartMediaInfoValueSeries")],c);var p=c;e.a=p},939:function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));var i=o(86);const r=Object(i.b)()({barchart:"bar-chart",columnchart:"column-chart",linechart:"line-chart",piechart:"pie-chart"})},987:function(t,e,o){"use strict";var i,r=o(77),s=o(79),a=(o(75),o(80),o(76),o(78)),n=o(1001),l=o(82),c=o(84),p=o(664);let d=i=class extends l.a{constructor(t){super(t),this.fields=[],this.normalizeField=null,this.series=[],this.tooltipField=null}clone(){return new i({fields:Object(c.a)(this.fields),normalizeField:this.normalizeField,tooltipField:this.tooltipField})}};Object(r.a)([Object(s.b)({type:[String],json:{write:!0}})],d.prototype,"fields",void 0),Object(r.a)([Object(s.b)({type:String,json:{write:!0}})],d.prototype,"normalizeField",void 0),Object(r.a)([Object(s.b)({type:[p.a],json:{read:!1}})],d.prototype,"series",void 0),Object(r.a)([Object(s.b)({type:String,json:{write:!0}})],d.prototype,"tooltipField",void 0),d=i=Object(r.a)([Object(a.a)("esri.popup.content.support.ChartMediaInfoValue")],d);var h=d;let u=class extends n.a{constructor(t){super(t),this.type=null,this.value=null}};Object(r.a)([Object(s.b)({type:["bar-chart","column-chart","line-chart","pie-chart"],readOnly:!0,json:{read:!1,write:!0}})],u.prototype,"type",void 0),Object(r.a)([Object(s.b)({type:h,json:{write:!0}})],u.prototype,"value",void 0),u=Object(r.a)([Object(a.a)("esri.popup.content.mixins.ChartMediaInfo")],u);var b=u;e.a=b}}]);
//# sourceMappingURL=2.89ffc61a.chunk.js.map