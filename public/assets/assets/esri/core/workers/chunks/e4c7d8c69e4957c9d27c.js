"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[9512,8648],{77380:(e,t,r)=>{r.d(t,{I:()=>h,Y:()=>i});const i={Base64:0,Hex:1,String:2,Raw:3},n=8,s=(1<<n)-1;function o(e,t){const r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function a(e){const t=[];for(let r=0,i=e.length*n;r<i;r+=n)t[r>>5]|=(e.charCodeAt(r/n)&s)<<r%32;return t}function l(e){const t=[];for(let r=0,i=32*e.length;r<i;r+=n)t.push(String.fromCharCode(e[r>>5]>>>r%32&s));return t.join("")}function u(e,t,r,i,n,s){return o(function(e,t){return e<<t|e>>>32-t}(o(o(t,e),o(i,s)),n),r)}function c(e,t,r,i,n,s,o){return u(t&r|~t&i,e,t,n,s,o)}function p(e,t,r,i,n,s,o){return u(t&i|r&~i,e,t,n,s,o)}function d(e,t,r,i,n,s,o){return u(t^r^i,e,t,n,s,o)}function f(e,t,r,i,n,s,o){return u(r^(t|~i),e,t,n,s,o)}function y(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;let r=1732584193,i=-271733879,n=-1732584194,s=271733878;for(let t=0;t<e.length;t+=16){const a=r,l=i,u=n,y=s;r=c(r,i,n,s,e[t],7,-680876936),s=c(s,r,i,n,e[t+1],12,-389564586),n=c(n,s,r,i,e[t+2],17,606105819),i=c(i,n,s,r,e[t+3],22,-1044525330),r=c(r,i,n,s,e[t+4],7,-176418897),s=c(s,r,i,n,e[t+5],12,1200080426),n=c(n,s,r,i,e[t+6],17,-1473231341),i=c(i,n,s,r,e[t+7],22,-45705983),r=c(r,i,n,s,e[t+8],7,1770035416),s=c(s,r,i,n,e[t+9],12,-1958414417),n=c(n,s,r,i,e[t+10],17,-42063),i=c(i,n,s,r,e[t+11],22,-1990404162),r=c(r,i,n,s,e[t+12],7,1804603682),s=c(s,r,i,n,e[t+13],12,-40341101),n=c(n,s,r,i,e[t+14],17,-1502002290),i=c(i,n,s,r,e[t+15],22,1236535329),r=p(r,i,n,s,e[t+1],5,-165796510),s=p(s,r,i,n,e[t+6],9,-1069501632),n=p(n,s,r,i,e[t+11],14,643717713),i=p(i,n,s,r,e[t],20,-373897302),r=p(r,i,n,s,e[t+5],5,-701558691),s=p(s,r,i,n,e[t+10],9,38016083),n=p(n,s,r,i,e[t+15],14,-660478335),i=p(i,n,s,r,e[t+4],20,-405537848),r=p(r,i,n,s,e[t+9],5,568446438),s=p(s,r,i,n,e[t+14],9,-1019803690),n=p(n,s,r,i,e[t+3],14,-187363961),i=p(i,n,s,r,e[t+8],20,1163531501),r=p(r,i,n,s,e[t+13],5,-1444681467),s=p(s,r,i,n,e[t+2],9,-51403784),n=p(n,s,r,i,e[t+7],14,1735328473),i=p(i,n,s,r,e[t+12],20,-1926607734),r=d(r,i,n,s,e[t+5],4,-378558),s=d(s,r,i,n,e[t+8],11,-2022574463),n=d(n,s,r,i,e[t+11],16,1839030562),i=d(i,n,s,r,e[t+14],23,-35309556),r=d(r,i,n,s,e[t+1],4,-1530992060),s=d(s,r,i,n,e[t+4],11,1272893353),n=d(n,s,r,i,e[t+7],16,-155497632),i=d(i,n,s,r,e[t+10],23,-1094730640),r=d(r,i,n,s,e[t+13],4,681279174),s=d(s,r,i,n,e[t],11,-358537222),n=d(n,s,r,i,e[t+3],16,-722521979),i=d(i,n,s,r,e[t+6],23,76029189),r=d(r,i,n,s,e[t+9],4,-640364487),s=d(s,r,i,n,e[t+12],11,-421815835),n=d(n,s,r,i,e[t+15],16,530742520),i=d(i,n,s,r,e[t+2],23,-995338651),r=f(r,i,n,s,e[t],6,-198630844),s=f(s,r,i,n,e[t+7],10,1126891415),n=f(n,s,r,i,e[t+14],15,-1416354905),i=f(i,n,s,r,e[t+5],21,-57434055),r=f(r,i,n,s,e[t+12],6,1700485571),s=f(s,r,i,n,e[t+3],10,-1894986606),n=f(n,s,r,i,e[t+10],15,-1051523),i=f(i,n,s,r,e[t+1],21,-2054922799),r=f(r,i,n,s,e[t+8],6,1873313359),s=f(s,r,i,n,e[t+15],10,-30611744),n=f(n,s,r,i,e[t+6],15,-1560198380),i=f(i,n,s,r,e[t+13],21,1309151649),r=f(r,i,n,s,e[t+4],6,-145523070),s=f(s,r,i,n,e[t+11],10,-1120210379),n=f(n,s,r,i,e[t+2],15,718787259),i=f(i,n,s,r,e[t+9],21,-343485551),r=o(r,a),i=o(i,l),n=o(n,u),s=o(s,y)}return[r,i,n,s]}function h(e,t=i.Hex){const r=t||i.Base64,s=y(a(e),e.length*n);switch(r){case i.Raw:return s;case i.Hex:return function(e){const t="0123456789abcdef",r=[];for(let i=0,n=4*e.length;i<n;i++)r.push(t.charAt(e[i>>2]>>i%4*8+4&15)+t.charAt(e[i>>2]>>i%4*8&15));return r.join("")}(s);case i.String:return l(s);case i.Base64:return function(e){const t=[];for(let r=0,i=4*e.length;r<i;r+=3){const i=(e[r>>2]>>r%4*8&255)<<16|(e[r+1>>2]>>(r+1)%4*8&255)<<8|e[r+2>>2]>>(r+2)%4*8&255;for(let n=0;n<4;n++)8*r+6*n>32*e.length?t.push("="):t.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(i>>6*(3-n)&63))}return t.join("")}(s)}}},66888:(e,t,r)=>{r.d(t,{c:()=>ee});var i=r(41948),n=(r(99704),r(73868),r(90200),r(12836),r(63718),r(2360),r(64624)),s=(r(24948),r(70236)),o=r(66360),a=r(57896),l=r(1580),u=r(9456),c=(r(72052),r(12552)),p=r(40504),d=r(62088),f=r(3856);let y=class extends((0,f.q)(p.am)){constructor(e){super(e),this.expression=null,this.title=null,this.returnType=null}};(0,i._)([(0,l.qq)({type:String,json:{write:!0}})],y.prototype,"expression",void 0),(0,i._)([(0,l.qq)({type:String,json:{write:!0}})],y.prototype,"title",void 0),(0,i._)([(0,l.qq)({type:String,json:{write:!0}})],y.prototype,"returnType",void 0),y=(0,i._)([(0,c.c)("esri.layers.support.ExpressionInfo")],y);const h=y;var m;let b=m=class extends p.am{constructor(e){super(e),this.isAutoGenerated=!1,this.name=null,this.alias=null,this.onStatisticField=null,this.onStatisticExpression=null,this.statisticType=null}clone(){return new m({name:this.name,alias:this.alias,isAutoGenerated:this.isAutoGenerated,onStatisticExpression:(0,d.ct)(this.onStatisticExpression),onStatisticField:this.onStatisticField,statisticType:this.statisticType})}};(0,i._)([(0,l.qq)({type:Boolean,json:{write:!0}})],b.prototype,"isAutoGenerated",void 0),(0,i._)([(0,l.qq)({type:String,json:{write:!0}})],b.prototype,"name",void 0),(0,i._)([(0,l.qq)({type:String,json:{write:!0}})],b.prototype,"alias",void 0),(0,i._)([(0,l.qq)({type:String,json:{write:!0}})],b.prototype,"onStatisticField",void 0),(0,i._)([(0,l.qq)({type:h,json:{write:!0}})],b.prototype,"onStatisticExpression",void 0),(0,i._)([(0,l.qq)({type:String,json:{write:!0}})],b.prototype,"statisticType",void 0),b=m=(0,i._)([(0,c.c)("esri.layers.support.AggregateField")],b);const w=b;var g,v=r(84108),q=r(66464),_=r(82692),x=r(37284),I=r(58820),S=r(9968),F=r(33600),E=r(18996),j=r(21488),R=r(70388),A=r(6168);let C=g=class extends q.E{constructor(e){super(e),this.type="binning",this.binType="geohash",this.fixedBinLevel=3,this.labelingInfo=null,this.labelsVisible=!0,this.maxScale=0,this.popupEnabled=!0,this.popupTemplate=null,this.fields=[],this.renderer=null}writeFields(e,t,r){const i=e.filter((e=>"avg_angle"!==e.statisticType)).map((e=>e.toJSON()));(0,I.qQ)(r,i,t)}readRenderer(e,t,r){const i=t.drawingInfo?.renderer;return i?(0,s.g)(i,t,r)??void 0:(0,R.i)(t,r)}clone(){return new g({fields:(0,d.ct)(this.fields),fixedBinLevel:this.fixedBinLevel,labelingInfo:(0,d.ct)(this.labelingInfo),labelsVisible:this.labelsVisible,maxScale:this.maxScale,popupEnabled:this.popupEnabled,popupTemplate:(0,d.ct)(this.popupTemplate),renderer:(0,d.ct)(this.renderer)})}};(0,i._)([(0,S.G)({binning:"binning"})],C.prototype,"type",void 0),(0,i._)([(0,S.G)({geohash:"geohash"})],C.prototype,"binType",void 0),(0,i._)([(0,l.qq)({type:Number,range:{min:1,max:9},json:{write:!0}})],C.prototype,"fixedBinLevel",void 0),(0,i._)([(0,l.qq)({type:[A.c],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],C.prototype,"labelingInfo",void 0),(0,i._)([(0,l.qq)(j.Wu)],C.prototype,"labelsVisible",void 0),(0,i._)([(0,l.qq)({type:Number,json:{default:0,name:"visibilityInfo.maxScale"}})],C.prototype,"maxScale",void 0),(0,i._)([(0,l.qq)(j.Ou)],C.prototype,"popupEnabled",void 0),(0,i._)([(0,l.qq)({type:_.c,json:{name:"popupInfo",write:!0}})],C.prototype,"popupTemplate",void 0),(0,i._)([(0,l.qq)({type:[w],json:{write:!0}})],C.prototype,"fields",void 0),(0,i._)([(0,E.G)("fields")],C.prototype,"writeFields",null),(0,i._)([(0,l.qq)({types:x.U,json:{write:{target:"drawingInfo.renderer"}}})],C.prototype,"renderer",void 0),(0,i._)([(0,F.E)("renderer",["drawingInfo.renderer"])],C.prototype,"readRenderer",null),C=g=(0,i._)([(0,c.c)("esri.layers.support.FeatureReductionBinning")],C);const M=C;var O,T=r(17988),V=r(50144);function G(e){return"simple"===e.type&&!e.visualVariables?.length}let z=O=class extends p.am{constructor(e){super(e),this.type="cluster",this.clusterRadius=(0,V.Qz)("80px"),this.clusterMinSize=(0,V.Qz)("12px"),this.clusterMaxSize=(0,V.Qz)("50px"),this.maxScale=0,this.popupEnabled=!0,this.popupTemplate=null,this.renderer=null,this.symbol=null,this.labelingInfo=null,this.labelsVisible=!0,this.fields=[]}readRenderer(e,t,r){const i=t.drawingInfo?.renderer;return i?.authoringInfo?.isAutoGenerated?null:i?G(i)?null:(0,s.g)(i,t,r)??void 0:(0,R.i)(t,r)}readSymbol(e,t,r){const i=t.drawingInfo?.renderer;if(i?.authoringInfo?.isAutoGenerated)return null;if(i&&G(i)){const e=(0,s.g)(i,t,r);return e?.symbol}return null}writeSymbol(e,t,r,i){const s=this.renderer?.authoringInfo?.isAutoGenerated;if(!this.renderer||s){const r=new n.c({symbol:e});t.drawingInfo={renderer:r.write({},i)}}}writeFields(e,t,r){const i=e.filter((e=>"avg_angle"!==e.statisticType)).map((e=>e.toJSON()));(0,I.qQ)(r,i,t)}readFields(e,t,r){return e.filter((e=>!e.isAutoGenerated)).map((e=>w.fromJSON(e)))}clone(){return new O({clusterRadius:this.clusterRadius,clusterMinSize:this.clusterMinSize,clusterMaxSize:this.clusterMaxSize,labelingInfo:(0,d.ct)(this.labelingInfo),labelsVisible:this.labelsVisible,fields:(0,d.ct)(this.fields),maxScale:this.maxScale,renderer:(0,d.ct)(this.renderer),symbol:(0,d.ct)(this.symbol),popupEnabled:this.popupEnabled,popupTemplate:(0,d.ct)(this.popupTemplate)})}};(0,i._)([(0,l.qq)({type:["cluster"],readOnly:!0,json:{write:!0}})],z.prototype,"type",void 0),(0,i._)([(0,l.qq)({type:Number,cast:e=>"auto"===e?e:(0,V.Qz)(e),json:{write:!0}})],z.prototype,"clusterRadius",void 0),(0,i._)([(0,l.qq)({type:Number,cast:V.Qz,json:{write:!0}})],z.prototype,"clusterMinSize",void 0),(0,i._)([(0,l.qq)({type:Number,cast:V.Qz,json:{write:!0}})],z.prototype,"clusterMaxSize",void 0),(0,i._)([(0,l.qq)({type:Number,json:{default:0,name:"visibilityInfo.maxScale"}})],z.prototype,"maxScale",void 0),(0,i._)([(0,l.qq)(j.Ou)],z.prototype,"popupEnabled",void 0),(0,i._)([(0,l.qq)({type:_.c,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],z.prototype,"popupTemplate",void 0),(0,i._)([(0,l.qq)({types:x.U,json:{write:{target:"drawingInfo.renderer"}}})],z.prototype,"renderer",void 0),(0,i._)([(0,F.E)("renderer",["drawingInfo.renderer"])],z.prototype,"readRenderer",null),(0,i._)([(0,l.qq)({types:T.Qw})],z.prototype,"symbol",void 0),(0,i._)([(0,F.E)("symbol",["drawingInfo.renderer"])],z.prototype,"readSymbol",null),(0,i._)([(0,E.G)("symbol")],z.prototype,"writeSymbol",null),(0,i._)([(0,l.qq)({type:[A.c],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],z.prototype,"labelingInfo",void 0),(0,i._)([(0,l.qq)(j.Wu)],z.prototype,"labelsVisible",void 0),(0,i._)([(0,l.qq)({type:[w],json:{write:!0}})],z.prototype,"fields",void 0),(0,i._)([(0,E.G)("fields")],z.prototype,"writeFields",null),(0,i._)([(0,F.E)("fields")],z.prototype,"readFields",null),z=O=(0,i._)([(0,c.c)("esri.layers.support.FeatureReductionCluster")],z);const P=z;var L=r(17968);const N={key:"type",base:q.E,typeMap:{cluster:P,binning:M}},$={types:{key:"type",base:q.E,typeMap:{selection:L.c,cluster:P,binning:M}},json:{name:"layerDefinition.featureReduction",write:{allowNull:!0},origins:{"web-map":{types:N},"portal-item":{types:N},"web-scene":{types:{key:"type",base:q.E,typeMap:{selection:L.c}},name:"layerDefinition.featureReduction",write:{layerContainerTypes:v.T}}}}};var k=r(91920),D=r(43416),Q=r(20744),B=r(77380),H=r(1124),U=r(49736);u.c.add("esri-cluster-arcade-enabled",!0);const J=(0,u.c)("esri-cluster-arcade-enabled"),Z=new Set(["simple-line","simple-fill","picture-fill"]);function W(e,t){let r=t.clone();if(!X(r))return r;if(t.getSymbols().some((e=>Z.has(e.type)))&&(r=new n.c({symbol:new U.c})),r.authoringInfo||(r.authoringInfo=new H.c),r.authoringInfo.isAutoGenerated=!0,"visualVariables"in r){const t=(r.visualVariables||[]).filter((e=>"$view.scale"!==e.valueExpression));t.forEach((t=>{"rotation"===t.type?t.field?t.field=K(e,t.field,"avg_angle","number"):t.valueExpression&&(t.field=Y(e,t.valueExpression,"avg_angle","number"),t.valueExpression=null):t.normalizationField?(t.field=K(e,t.field,"avg_norm","number",t.normalizationField),t.normalizationField=null):t.field?t.field=K(e,t.field,"avg","number"):t.valueExpression&&(t.field=Y(e,t.valueExpression,"avg","number"),t.valueExpression=null)})),r.visualVariables=t}switch(r.type){case"simple":break;case"pie-chart":for(const t of r.attributes)t.field?t.field=K(e,t.field,"sum","number"):t.valueExpression&&(t.field=Y(e,t.valueExpression,"sum","number"),t.valueExpression=null);break;case"unique-value":r.field?r.field=K(e,r.field,"mode","string"):r.valueExpression&&(r.field=Y(e,r.valueExpression,"mode","string"),r.valueExpression=null);break;case"class-breaks":r.normalizationField?(r.field=K(e,r.field,"avg_norm","number",r.normalizationField),r.normalizationField=null):r.field?r.field=K(e,r.field,"avg","number"):r.valueExpression&&(r.field=Y(e,r.valueExpression,"avg","number"),r.valueExpression=null)}return r}const X=e=>{const t=t=>o.c.getLogger("esri.views.2d.layers.support.clusterUtils").error(new Q.c("Unsupported-renderer",t,{renderer:e}));if(!e)return!1;switch(e.type){case"unique-value":if(e.field2||e.field3)return t("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1;break;case"class-breaks":if(e.normalizationField){const r=e.normalizationType;if("field"!==r)return t(`FeatureReductionCluster does not support a normalizationType of ${r}`),!1}break;case"simple":case"pie-chart":break;default:return t(`FeatureReductionCluster does not support renderers of type ${e.type}`),!1}if(!J){if("valueExpression"in e&&e.valueExpression)return t("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1;if(("visualVariables"in e&&e.visualVariables||[]).some((e=>!(!("valueExpression"in e)||!e.valueExpression))))return t("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),!1}return!0};function Y(e,t,r,i){const n=(0,B.I)(t),s="mode"===r?`cluster_type_${n}`:"sum"===r?`cluster_sum_${n}`:`cluster_avg_${n}`;return e.some((e=>e.name===s))||e.push(new w({name:s,isAutoGenerated:!0,onStatisticExpression:new h({expression:t,returnType:i}),statisticType:r})),s}function K(e,t,r,i,n){if("cluster_count"===t||e.some((e=>e.name===t)))return t;const s=function(e,t,r){switch(e){case"sum":return`cluster_sum_${t}`;case"avg":case"avg_angle":return`cluster_avg_${t}`;case"mode":return`cluster_type_${t}`;case"avg_norm":{const e=r,i="field",n=t.toLowerCase()+",norm:"+i+","+e.toLowerCase();return"cluster_avg_"+(0,B.I)(n)}}}(r,t,n);return e.some((e=>e.name===s))||("avg_norm"===r?e.push(new w({name:s,isAutoGenerated:!0,onStatisticExpression:new h({expression:`$feature.${t} / $feature.${n}`,returnType:i}),statisticType:"avg"})):e.push(new w({name:s,isAutoGenerated:!0,onStatisticField:t,statisticType:r}))),s}const ee=e=>{let t=class extends e{constructor(...e){super(...e),this.addHandles((0,a.aE)((()=>this.renderer),(()=>{if(this.featureReduction){const e=this._normalizeFeatureReduction(this.featureReduction);this._set("featureReduction",e)}}),a.du))}set featureReduction(e){const t=this._normalizeFeatureReduction(e);this._set("featureReduction",t)}set renderer(e){}_withClusterVariable(e,t,r){const i=e.clone();return"visualVariables"in i&&(i.visualVariables||(i.visualVariables=[]),i.visualVariables.some((e=>"size"===e.type))||i.visualVariables.push(new k.c({field:"cluster_count",stops:[new D.c({value:1}),new D.c({useMinValue:!0,size:t}),new D.c({useMaxValue:!0,size:r})]}))),i}_normalizeFeatureReduction(e){if("cluster"!==e?.type)return e;const t=e.clone(),r=[new w({name:"cluster_count",isAutoGenerated:!0,statisticType:"count"})],i=(t.fields??[]).filter((e=>!e.isAutoGenerated)),s=e.renderer&&!e.renderer.authoringInfo?.isAutoGenerated,{clusterMinSize:o,clusterMaxSize:a}=t;if(s){t.fields=[...r,...i];const e=this._withClusterVariable(t.renderer,o,a);return t.effectiveFeatureRenderer=e,t.effectiveClusterRenderer=e,t}if(e.symbol){if(t.fields=[...r,...i],t.renderer=null,!this.renderer)return t.effectiveFeatureRenderer=null,t.effectiveClusterRenderer=null,t;const s=W(r,this.renderer),l=this._withClusterVariable(s,o,a),u="visualVariables"in l&&l.visualVariables?l.visualVariables:[],c=new n.c({symbol:e.symbol,visualVariables:u});return t.fields=[...r,...i],t.effectiveFeatureRenderer=l,t.effectiveClusterRenderer=c,t}if(!this.renderer)return e;const l=W(r,this.renderer);t.fields=[...r,...i],t.renderer=l;const u=this._withClusterVariable(l,o,a);return t.effectiveFeatureRenderer=u,t.effectiveClusterRenderer=u,t}};return(0,i._)([(0,l.qq)($)],t.prototype,"featureReduction",null),t=(0,i._)([(0,c.c)("esri.layers.mixins.FeatureReductionLayer")],t),t}},66464:(e,t,r)=>{r.d(t,{E:()=>a});var i=r(41948),n=r(40504),s=r(1580),o=(r(9456),r(66360),r(72052),r(12552));let a=class extends n.am{constructor(){super(...arguments),this.type=null}};(0,i._)([(0,s.qq)({type:["selection","cluster","binning"],readOnly:!0,json:{read:!1,write:!0}})],a.prototype,"type",void 0),a=(0,i._)([(0,o.c)("esri.layers.support.FeatureReduction")],a)},17968:(e,t,r)=>{r.d(t,{c:()=>u});var i,n=r(41948),s=r(1580),o=(r(9456),r(66360),r(72052),r(12552)),a=r(66464);let l=i=class extends a.E{constructor(e){super(e),this.type="selection"}clone(){return new i}};(0,n._)([(0,s.qq)({type:["selection"]})],l.prototype,"type",void 0),l=i=(0,n._)([(0,o.c)("esri.layers.support.FeatureReductionSelection")],l);const u=l},70388:(e,t,r)=>{r.d(t,{wj:()=>g,cV:()=>_,ig:()=>L,i:()=>$,cJ:()=>O,WC:()=>I,oh:()=>P,s1:()=>S,sD:()=>w,wl:()=>D,yo:()=>M,gx:()=>k,Q1:()=>F,iq:()=>R,YL:()=>j,W2:()=>E,ms:()=>A,UN:()=>C,Y9:()=>T,qY:()=>V,Ce:()=>G,kd:()=>q,Wm:()=>x});var i=r(47620),n=r(17988),s=r(40196),o=r(20744),a=r(14628),l=r(44247),u=r(64408),c=r(95776);async function p(e,t,r){t=t.clone(),e.capabilities.query.supportsMaxRecordCountFactor&&(t.maxRecordCountFactor=d(e));const i=function(e){return d(e)*function(e){return e.capabilities.query.maxRecordCount||2e3}(e)}(e),n=e.capabilities.query.supportsPagination;t.start=0,t.num=i;let s=null;for(;;){const o=await e.source.queryFeaturesJSON(t,r);if(null==s?s=o:s.features=s.features.concat(o.features),s.exceededTransferLimit=o.exceededTransferLimit,!n||!o.exceededTransferLimit)break;t.start+=i}return s}function d(e){return e.capabilities.query.supportsMaxRecordCountFactor?c.c.MAX_MAX_RECORD_COUNT_FACTOR:1}var f=r(71068),y=r(64624),h=r(24948),m=r(19212),b=r(18648);const w=new a.O({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"});async function g(e,t,r,i){const n=await z(e);if(await v(e,t,i),!n.addAttachment)throw new o.c(i,"Layer source does not support addAttachment capability");return n.addAttachment(t,r)}function v(e,t,r){const{attributes:i}=t,{objectIdField:n}=e;return e.capabilities?.data?.supportsAttachment?t?i?n&&i[n]?Promise.resolve():Promise.reject(new o.c(r,`feature is missing the identifying attribute ${n}`)):Promise.reject(new o.c(r,"'attributes' are required on a feature to query attachments")):Promise.reject(new o.c(r,"A feature is required to add/delete/update attachments")):Promise.reject(new o.c(r,"this layer doesn't support attachments"))}async function q(e,t,r,i,n){const s=await z(e);if(await v(e,t,n),!s.updateAttachment)throw new o.c(n,"Layer source does not support updateAttachment capability");return s.updateAttachment(t,r,i)}async function _(e,t,i){const{applyEdits:n}=await r.e(2768).then(r.bind(r,62768)),s=await e.load(),{source:o,globalIdField:a}=s;let l=i;return("feature"===s.type?s.infoFor3D:null)&&null!=t.deleteFeatures&&null!=a&&(l={...l,globalIdToObjectId:await D(e,t.deleteFeatures,a)}),n(s,o,t,i)}async function x(e,t,i){const{uploadAssets:n}=await r.e(2768).then(r.bind(r,62768)),s=await e.load();return n(s,s.source,t,i)}async function I(e,t,r,i){const n=await z(e);if(await v(e,t,i),!n.deleteAttachments)throw new o.c(i,"Layer source does not support deleteAttachments capability");return n.deleteAttachments(t,r)}async function S(e,t,r){const i=(await e.load({signal:t?.signal})).source;if(!i.fetchRecomputedExtents)throw new o.c(r,"Layer source does not support fetchUpdates capability");return i.fetchRecomputedExtents(t)}async function F(e,t,r,i){t=m.c.from(t),await e.load();const n=e.source,s=e.capabilities;if(!s?.data?.supportsAttachment)throw new o.c(i,"this layer doesn't support attachments");const{attachmentTypes:a,objectIds:l,globalIds:u,num:c,size:p,start:d,where:f}=t;if(!s?.operations?.supportsQueryAttachments&&(a?.length>0||u?.length>0||p?.length>0||c||d||f))throw new o.c(i,"when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",t);if(!(l?.length||u?.length||f))throw new o.c(i,"'objectIds', 'globalIds', or 'where' are required to perform attachment query",t);if(!n.queryAttachments)throw new o.c(i,"Layer source does not support queryAttachments capability",t);return n.queryAttachments(t)}async function E(e,t,r,i){const n=await z(e);if(!n.queryObjectIds)throw new o.c(i,"Layer source does not support queryObjectIds capability");return n.queryObjectIds(c.c.from(t)??e.createQuery(),r)}async function j(e,t,r,i){const n=await z(e);if(!n.queryFeatureCount)throw new o.c(i,"Layer source does not support queryFeatureCount capability");return n.queryFeatureCount(c.c.from(t)??e.createQuery(),r)}async function R(e,t,r,i){const n=await z(e);if(!n.queryExtent)throw new o.c(i,"Layer source does not support queryExtent capability");return n.queryExtent(c.c.from(t)??e.createQuery(),r)}async function A(e,t,r,i){const n=await z(e);if(!n.queryRelatedFeatures)throw new o.c(i,"Layer source does not support queryRelatedFeatures capability");return n.queryRelatedFeatures(b.default.from(t),r)}async function C(e,t,r,i){const n=await z(e);if(!n.queryRelatedFeaturesCount)throw new o.c(i,"Layer source does not support queryRelatedFeaturesCount capability");return n.queryRelatedFeaturesCount(b.default.from(t),r)}async function M(e){const t=e.source;if(t?.refresh)try{const{dataChanged:r,updates:i}=await t.refresh();if(null!=i&&(e.sourceJSON={...e.sourceJSON,...i},e.read(i,{origin:"service",url:e.parsedUrl})),r)return!0}catch{}if(e.definitionExpression)try{return(await(0,l.u)(e.definitionExpression,e.fieldsIndex)).hasDateFunctions}catch{}return!1}function O(e){const t=new c.c,r=e.capabilities?.data,i=e.capabilities?.query;t.historicMoment=e.historicMoment,t.gdbVersion=e.gdbVersion,t.returnGeometry=!0,i&&(t.compactGeometryEnabled=i.supportsCompactGeometry,t.defaultSpatialReferenceEnabled=i.supportsDefaultSpatialReference),r&&(r.supportsZ&&null!=e.returnZ&&(t.returnZ=e.returnZ),r.supportsM&&null!=e.returnM&&(t.returnM=e.returnM)),t.outFields=["*"];const{timeOffset:n,timeExtent:s}=e;return t.timeExtent=null!=n&&null!=s?s.offset(-n.value,n.unit):s||null,t.multipatchOption="multipatch"===e.geometryType?"xyFootprint":null,t}function T(e){const{globalIdField:t,fields:r}=e;if(t)return t;if(r)for(const e of r)if("esriFieldTypeGlobalID"===e.type)return e.name}function V(e){const{objectIdField:t,fields:r}=e;if(t)return t;if(r)for(const e of r)if("esriFieldTypeOID"===e.type)return e.name}function G(e){return e.currentVersion?e.currentVersion:e.hasOwnProperty("capabilities")||e.hasOwnProperty("drawingInfo")||e.hasOwnProperty("hasAttachments")||e.hasOwnProperty("htmlPopupType")||e.hasOwnProperty("relationships")||e.hasOwnProperty("timeInfo")||e.hasOwnProperty("typeIdField")||e.hasOwnProperty("types")?10:9.3}async function z(e){return(await e.load()).source}async function P(e,t,r){const n=e.parsedUrl?.path;n&&e.authenticationTriggerEvent===t&&await async function(e,t){if(!i.id)return;if(i.id.findCredential(e))return;let r;try{const n=await(0,f.mK)(e,t);n&&(r=await i.id.checkSignInStatus(`${n}/sharing`))}catch(e){}if(r)try{const r=null!=t?t.signal:null;await i.id.getCredential(e,{signal:r})}catch(e){}}(n,r)}function L(e){return!e.sourceJSON?.isMultiServicesView&&(e.userHasUpdateItemPrivileges||e.editingEnabled)}const N=(0,u.g)({types:n.IX});function $(e,t){if(e.defaultSymbol)return e.types?.length?new h.c({defaultSymbol:N(e.defaultSymbol,e,t),field:e.typeIdField,uniqueValueInfos:e.types.map((e=>({id:e.id,symbol:N(e.symbol,e,t)})))}):new y.c({symbol:N(e.defaultSymbol,e,t)})}function k(e){let t=e.sourceJSON?.cacheMaxAge;if(!t)return!1;const r=e.editingInfo?.lastEditDate?.getTime();return null==r||(t*=1e3,Date.now()-r<t)}async function D(e,t,r){if(null==t)return null;const i=[],{objectIdField:n}=e;if(t.forEach((e=>{let t=null;if("attributes"in e){const{attributes:i}=e;t={globalId:i[r],objectId:null!=i[n]&&-1!==i[n]?i[n]:null}}else t={globalId:e.globalId,objectId:null!=e.objectId&&-1!==e.objectId?e.objectId:null};null!=t.globalId&&(null!=t.objectId&&-1!==t.objectId||i.push(t.globalId))})),0===i.length)return null;const o=e.createQuery();o.where=i.map((e=>`${r}='${e}'`)).join(" OR "),o.returnGeometry=!1,o.outFields=[n,r],o.cacheHint=!1;const a=await(0,s.SO)(p(e,o));if(!a.ok)return null;const l=new Map,u=a.value.features;for(const e of u){const t=e.attributes[r],i=e.attributes[n];null!=t&&null!=i&&-1!==i&&l.set(t,i)}return l}},81732:(e,t,r)=>{r.d(t,{l:()=>l});var i=r(9456),n=r(66360),s=r(600),o=r(16424),a=r(564);function l(){return{fields:{type:[s.c],value:null,set:function(e){if(e&&(0,i.c)("big-integer-warning-enabled")){const t=e.filter((e=>"big-integer"===e.type||"oid"===e.type&&(e.length||0)>=8));if(t.length){const e=t.map((e=>`'${e.name}'`)).join(", ");n.c.getLogger(this).warn("#fields",`Layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}') references big-integer field(s): ${e}, support for which is experimental. Only integers less than ${Number.MAX_SAFE_INTEGER} (Number.MAX_SAFE_INTEGER) are supported.`)}}this._set("fields",e)}},fieldsIndex:{readOnly:!0,get(){return o.c.fromLayer(this)}},outFields:{type:[String],json:{read:!1},set:function(e){this._userOutFields=e,this.notifyChange("outFields")},get:function(){const e=this._userOutFields;if(!e?.length)return null;if(e.includes("*"))return["*"];if(!this.fields)return e;for(const t of e){const r=this.fieldsIndex?.has(t);r||n.c.getLogger("esri.layers.support.fieldProperties").error("field-attributes-layer:invalid-field",`Invalid field ${t} found in outFields`,{layer:this,outFields:e})}return(0,a.OO)(this.fieldsIndex,e)}}}}},18648:(e,t,r)=>{r.r(t),r.d(t,{default:()=>y});var i,n=r(41948),s=(r(60708),r(40504)),o=r(62088),a=r(1580),l=r(53368),u=r(12552),c=r(18996),p=r(88204),d=r(56156);let f=i=class extends s.am{constructor(e){super(e),this.cacheHint=void 0,this.dynamicDataSource=void 0,this.gdbVersion=null,this.geometryPrecision=void 0,this.historicMoment=null,this.maxAllowableOffset=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.relationshipId=void 0,this.start=void 0,this.num=void 0,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.where=null}_writeHistoricMoment(e,t){t.historicMoment=e&&e.getTime()}writeStart(e,t){t.resultOffset=this.start,t.resultRecordCount=this.num||10,this.start>0&&null==this.where&&(t.definitionExpression="1=1")}clone(){return new i((0,o.ct)({cacheHint:this.cacheHint,dynamicDataSource:this.dynamicDataSource,gdbVersion:this.gdbVersion,geometryPrecision:this.geometryPrecision,historicMoment:this.historicMoment&&new Date(this.historicMoment.getTime()),maxAllowableOffset:this.maxAllowableOffset,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,relationshipId:this.relationshipId,start:this.start,num:this.num,returnGeometry:this.returnGeometry,where:this.where,returnZ:this.returnZ,returnM:this.returnM}))}};(0,n._)([(0,a.qq)({type:Boolean,json:{write:!0}})],f.prototype,"cacheHint",void 0),(0,n._)([(0,a.qq)({type:p.U,json:{write:!0}})],f.prototype,"dynamicDataSource",void 0),(0,n._)([(0,a.qq)({type:String,json:{write:!0}})],f.prototype,"gdbVersion",void 0),(0,n._)([(0,a.qq)({type:Number,json:{write:!0}})],f.prototype,"geometryPrecision",void 0),(0,n._)([(0,a.qq)({type:Date})],f.prototype,"historicMoment",void 0),(0,n._)([(0,c.G)("historicMoment")],f.prototype,"_writeHistoricMoment",null),(0,n._)([(0,a.qq)({type:Number,json:{write:!0}})],f.prototype,"maxAllowableOffset",void 0),(0,n._)([(0,a.qq)({type:[Number],json:{write:!0}})],f.prototype,"objectIds",void 0),(0,n._)([(0,a.qq)({type:[String],json:{write:!0}})],f.prototype,"orderByFields",void 0),(0,n._)([(0,a.qq)({type:[String],json:{write:!0}})],f.prototype,"outFields",void 0),(0,n._)([(0,a.qq)({type:d.c,json:{read:{source:"outSR"},write:{target:"outSR"}}})],f.prototype,"outSpatialReference",void 0),(0,n._)([(0,a.qq)({json:{write:!0}})],f.prototype,"relationshipId",void 0),(0,n._)([(0,a.qq)({type:Number,json:{read:{source:"resultOffset"}}})],f.prototype,"start",void 0),(0,n._)([(0,c.G)("start"),(0,c.G)("num")],f.prototype,"writeStart",null),(0,n._)([(0,a.qq)({type:Number,json:{read:{source:"resultRecordCount"}}})],f.prototype,"num",void 0),(0,n._)([(0,a.qq)({json:{write:!0}})],f.prototype,"returnGeometry",void 0),(0,n._)([(0,a.qq)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],f.prototype,"returnM",void 0),(0,n._)([(0,a.qq)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],f.prototype,"returnZ",void 0),(0,n._)([(0,a.qq)({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],f.prototype,"where",void 0),f=i=(0,n._)([(0,u.c)("esri.rest.support.RelationshipQuery")],f),f.from=(0,l.ey)(f);const y=f}}]);