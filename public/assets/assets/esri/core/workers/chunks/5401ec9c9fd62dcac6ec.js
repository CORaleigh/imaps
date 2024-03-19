"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[5156],{22156:(e,t,r)=>{r.d(t,{MR:()=>i,qm:()=>s});var n=r(41948),a=r(12552);let o=0;const i=e=>{let t=class extends e{constructor(...e){super(...e),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+o++})}};return t=(0,n._)([(0,a.c)("esri.core.Identifiable")],t),t},s=e=>{let t=class extends e{constructor(...e){super(...e),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:o++})}};return t=(0,n._)([(0,a.c)("esri.core.NumericIdentifiable")],t),t};let c=class extends(i(class{})){};c=(0,n._)([(0,a.c)("esri.core.Identifiable")],c)},81436:(e,t,r)=>{r.d(t,{c:()=>b});var n=r(41948),a=(r(60708),r(2600)),o=r(20744),i=r(77860),s=r(22156),c=r(95800),u=r(66360),l=r(10860),f=r(28176),p=r(1580),h=(r(9456),r(72052),r(12552)),d=r(6220),m=r(95247),y=r(56156);let g=0,v=class extends(i.c.EventedMixin((0,s.MR)(c.c))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new m.c(-180,-90,180,90,y.c.WGS84),this.id=Date.now().toString(16)+"-layer-"+g++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.persistenceEnabled=!1,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=y.c.WGS84,this.title=null,this.type=null,this.url=null,this.visible=!0}static async fromArcGISServerUrl(e){const t="string"==typeof e?{url:e}:e;return(await r.e(9232).then(r.bind(r,69232))).fromUrl(t)}static fromPortalItem(e){return async function(e){const t="portalItem"in e?e:{portalItem:e},{fromItem:n}=await r.e(2259).then(r.bind(r,12259));try{return await n(t)}catch(e){const r=t&&t.portalItem,n=r?.id||"unset",a=r&&r.portal&&r.portal.url||d.default.portalUrl;throw u.c.getLogger("esri.layers.support.fromPortalItem").error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+a+"', id: '"+n+"')",e),e}}(e)}initialize(){this.when().catch((e=>{(0,l.mA)(e)||u.c.getLogger(this).error("#load()",`Failed to load layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}')`,{error:e})}))}destroy(){const e=this.parent;if(e){const t=this;"layers"in e&&e.layers.includes(t)?e.layers.remove(t):"tables"in e&&e.tables.includes(t)?e.tables.remove(t):"baseLayers"in e&&e.baseLayers.includes(t)?e.baseLayers.remove(t):"referenceLayers"in e&&e.referenceLayers.includes(t)&&e.referenceLayers.remove(t),this._set("parent",null)}}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){return(0,f.as)(this.url)}async fetchAttributionData(){const e=this.attributionDataUrl;if(this.hasAttributionData&&e)return(await(0,a.c)(e,{query:{f:"json"},responseType:"json"})).data;throw new o.c("layer:no-attribution-data","Layer does not have attribution data")}};(0,n._)([(0,p.qq)({type:String})],v.prototype,"attributionDataUrl",void 0),(0,n._)([(0,p.qq)({type:m.c})],v.prototype,"fullExtent",void 0),(0,n._)([(0,p.qq)({readOnly:!0})],v.prototype,"hasAttributionData",null),(0,n._)([(0,p.qq)({type:String,clonable:!1})],v.prototype,"id",void 0),(0,n._)([(0,p.qq)({type:Boolean,nonNullable:!0})],v.prototype,"legendEnabled",void 0),(0,n._)([(0,p.qq)({type:["show","hide","hide-children"]})],v.prototype,"listMode",void 0),(0,n._)([(0,p.qq)({type:Number,range:{min:0,max:1},nonNullable:!0})],v.prototype,"opacity",void 0),(0,n._)([(0,p.qq)({clonable:!1})],v.prototype,"parent",void 0),(0,n._)([(0,p.qq)({readOnly:!0})],v.prototype,"parsedUrl",null),(0,n._)([(0,p.qq)({type:Boolean,readOnly:!0})],v.prototype,"persistenceEnabled",void 0),(0,n._)([(0,p.qq)({type:Boolean})],v.prototype,"popupEnabled",void 0),(0,n._)([(0,p.qq)({type:Boolean})],v.prototype,"attributionVisible",void 0),(0,n._)([(0,p.qq)({type:y.c})],v.prototype,"spatialReference",void 0),(0,n._)([(0,p.qq)({type:String})],v.prototype,"title",void 0),(0,n._)([(0,p.qq)({readOnly:!0,json:{read:!1}})],v.prototype,"type",void 0),(0,n._)([(0,p.qq)()],v.prototype,"url",void 0),(0,n._)([(0,p.qq)({type:Boolean,nonNullable:!0})],v.prototype,"visible",void 0),v=(0,n._)([(0,h.c)("esri.layers.Layer")],v);const b=v},24676:(e,t,r)=>{r.d(t,{gH:()=>_,GA:()=>C});var n,a,o=r(20744),i=r(58820),s=r(46988),c=r(65604),u=(r(8528),r(14644)),l={exports:{}};a=function(){function e(t,r,n,a){var o=Error.call(this,t);return Object.setPrototypeOf&&Object.setPrototypeOf(o,e.prototype),o.expected=r,o.found=n,o.location=a,o.name="SyntaxError",o}function t(e,t,r){return r=r||" ",e.length>t?e:(t-=e.length,e+(r+=r.repeat(t)).slice(0,t))}return function(e,t){function r(){this.constructor=e}r.prototype=t.prototype,e.prototype=new r}(e,Error),e.prototype.format=function(e){var r="Error: "+this.message;if(this.location){var n,a=null;for(n=0;n<e.length;n++)if(e[n].source===this.location.source){a=e[n].text.split(/\r\n|\n|\r/g);break}var o=this.location.start,i=this.location.source&&"function"==typeof this.location.source.offset?this.location.source.offset(o):o,s=this.location.source+":"+i.line+":"+i.column;if(a){var c=this.location.end,u=t("",i.line.toString().length," "),l=a[o.line-1],f=(o.line===c.line?c.column:l.length+1)-o.column||1;r+="\n --\x3e "+s+"\n"+u+" |\n"+i.line+" | "+l+"\n"+u+" | "+t("",o.column-1," ")+t("",f,"^")}else r+="\n at "+s}return r},e.buildMessage=function(e,t){var r={literal:function(e){return'"'+a(e.text)+'"'},class:function(e){var t=e.parts.map((function(e){return Array.isArray(e)?o(e[0])+"-"+o(e[1]):o(e)}));return"["+(e.inverted?"^":"")+t.join("")+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(e){return e.description}};function n(e){return e.charCodeAt(0).toString(16).toUpperCase()}function a(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+n(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+n(e)}))}function o(e){return e.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+n(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+n(e)}))}function i(e){return r[e.type](e)}return"Expected "+function(e){var t,r,n=e.map(i);if(n.sort(),n.length>0){for(t=1,r=1;t<n.length;t++)n[t-1]!==n[t]&&(n[r]=n[t],r++);n.length=r}switch(n.length){case 1:return n[0];case 2:return n[0]+" or "+n[1];default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}(e)+" but "+function(e){return e?'"'+a(e)+'"':"end of input"}(t)+" found."},{SyntaxError:e,parse:function(t,r){var n,a={},o=(r=void 0!==r?r:{}).grammarSource,i={start:We},s=We,c="none",u=")",l=",",f="(",p="%",h="px",d="cm",m="mm",y="in",g="pt",v="pc",b="deg",w="rad",x="grad",A="turn",q="#",S=".",_="e",C=/^[ \t\n\r]/,I=/^[a-z\-]/,E=/^[0-9a-fA-F]/,$=/^[+\-]/,j=/^[0-9]/,R=Te("none"),F=Ue("none",!1),O=Ue(")",!1),N=Ue(",",!1),D=Te("whitespace"),M=Pe([" ","\t","\n","\r"],!1,!1),k=Te("function"),L=Ue("(",!1),U=Te("identifier"),P=Pe([["a","z"],"-"],!1,!1),T=Te("percentage"),B=Ue("%",!1),z=Te("length"),G=Ue("px",!1),W=Ue("cm",!1),H=Ue("mm",!1),J=Ue("in",!1),V=Ue("pt",!1),Q=Ue("pc",!1),K=Te("angle"),X=Ue("deg",!1),Y=Ue("rad",!1),Z=Ue("grad",!1),ee=Ue("turn",!1),te=Te("number"),re=Te("color"),ne=Ue("#",!1),ae=Pe([["0","9"],["a","f"],["A","F"]],!1,!1),oe=Pe(["+","-"],!1,!1),ie=Pe([["0","9"]],!1,!1),se=Ue(".",!1),ce=Ue("e",!1),ue=function(){return[]},le=function(e,t){return{type:"function",name:e,parameters:t||[]}},fe=function(e,t){return t.length>0?function(e,t,r){return[e].concat(function(e,t){return e.map((function(e){return e[3]}))}(t))}(e,t):[e]},pe=function(e){return{type:"quantity",value:e.value,unit:e.unit}},he=function(e){return{type:"color",colorType:e.type,value:e.value}},de=function(e){return e},me=function(){return Le()},ye=function(e){return{value:e,unit:"%"}},ge=function(e){return{value:e,unit:"px"}},ve=function(e){return{value:e,unit:"cm"}},be=function(e){return{value:e,unit:"mm"}},we=function(e){return{value:e,unit:"in"}},xe=function(e){return{value:e,unit:"pt"}},Ae=function(e){return{value:e,unit:"pc"}},qe=function(e){return{value:e,unit:"deg"}},Se=function(e){return{value:e,unit:"rad"}},_e=function(e){return{value:e,unit:"grad"}},Ce=function(e){return{value:e,unit:"turn"}},Ie=function(e){return{value:e,unit:null}},Ee=function(){return{type:"hex",value:Le()}},$e=function(e){return{type:"function",value:e}},je=function(){return{type:"named",value:Le()}},Re=function(){return parseFloat(Le())},Fe=0,Oe=0,Ne=[{line:1,column:1}],De=0,Me=[],ke=0;if("startRule"in r){if(!(r.startRule in i))throw new Error("Can't start parsing from rule \""+r.startRule+'".');s=i[r.startRule]}function Le(){return t.substring(Oe,Fe)}function Ue(e,t){return{type:"literal",text:e,ignoreCase:t}}function Pe(e,t,r){return{type:"class",parts:e,inverted:t,ignoreCase:r}}function Te(e){return{type:"other",description:e}}function Be(e){var r,n=Ne[e];if(n)return n;for(r=e-1;!Ne[r];)r--;for(n={line:(n=Ne[r]).line,column:n.column};r<e;)10===t.charCodeAt(r)?(n.line++,n.column=1):n.column++,r++;return Ne[e]=n,n}function ze(e,t,r){var n=Be(e),a=Be(t),i={source:o,start:{offset:e,line:n.line,column:n.column},end:{offset:t,line:a.line,column:a.column}};return r&&o&&"function"==typeof o.offset&&(i.start=o.offset(i.start),i.end=o.offset(i.end)),i}function Ge(e){Fe<De||(Fe>De&&(De=Fe,Me=[]),Me.push(e))}function We(){var e;return(e=He())===a&&(e=function(){var e,t;if(e=[],(t=Je())!==a)for(;t!==a;)e.push(t),t=Je();else e=a;return e}()),e}function He(){var e,r;return ke++,e=Fe,Qe(),t.substr(Fe,4)===c?(r=c,Fe+=4):(r=a,0===ke&&Ge(F)),r!==a?(Qe(),Oe=e,e=ue()):(Fe=e,e=a),ke--,e===a&&0===ke&&Ge(R),e}function Je(){var e,r,n,o;return e=Fe,Qe(),(r=function(){var e,r,n;return ke++,e=Fe,(r=Ke())!==a?(40===t.charCodeAt(Fe)?(n=f,Fe++):(n=a,0===ke&&Ge(L)),n!==a?(Oe=e,e=de(r)):(Fe=e,e=a)):(Fe=e,e=a),ke--,e===a&&(r=a,0===ke&&Ge(k)),e}())!==a?(Qe(),(n=function(){var e,r,n,o,i,s,c,u;if(e=Fe,(r=Ve())!==a){for(n=[],o=Fe,i=Qe(),44===t.charCodeAt(Fe)?(s=l,Fe++):(s=a,0===ke&&Ge(N)),s===a&&(s=null),c=Qe(),(u=Ve())!==a?o=i=[i,s,c,u]:(Fe=o,o=a);o!==a;)n.push(o),o=Fe,i=Qe(),44===t.charCodeAt(Fe)?(s=l,Fe++):(s=a,0===ke&&Ge(N)),s===a&&(s=null),c=Qe(),(u=Ve())!==a?o=i=[i,s,c,u]:(Fe=o,o=a);Oe=e,e=fe(r,n)}else Fe=e,e=a;return e}())===a&&(n=null),Qe(),41===t.charCodeAt(Fe)?(o=u,Fe++):(o=a,0===ke&&Ge(O)),o!==a?(Qe(),Oe=e,e=le(r,n)):(Fe=e,e=a)):(Fe=e,e=a),e}function Ve(){var e,t;return e=Fe,(t=Xe())===a&&(t=Ye())===a&&(t=Ze())===a&&(t=function(){var e,t;return ke++,e=Fe,Qe(),(t=tt())!==a?(Oe=e,e=Ie(t)):(Fe=e,e=a),ke--,e===a&&0===ke&&Ge(te),e}()),t!==a&&(Oe=e,t=pe(t)),(e=t)===a&&(e=Fe,(t=et())!==a&&(Oe=e,t=he(t)),e=t),e}function Qe(){var e,r;for(ke++,e=[],C.test(t.charAt(Fe))?(r=t.charAt(Fe),Fe++):(r=a,0===ke&&Ge(M));r!==a;)e.push(r),C.test(t.charAt(Fe))?(r=t.charAt(Fe),Fe++):(r=a,0===ke&&Ge(M));return ke--,r=a,0===ke&&Ge(D),e}function Ke(){var e,r,n;if(ke++,e=Fe,r=[],I.test(t.charAt(Fe))?(n=t.charAt(Fe),Fe++):(n=a,0===ke&&Ge(P)),n!==a)for(;n!==a;)r.push(n),I.test(t.charAt(Fe))?(n=t.charAt(Fe),Fe++):(n=a,0===ke&&Ge(P));else r=a;return r!==a&&(Oe=e,r=me()),ke--,(e=r)===a&&(r=a,0===ke&&Ge(U)),e}function Xe(){var e,r,n;return ke++,e=Fe,Qe(),(r=tt())!==a?(37===t.charCodeAt(Fe)?(n=p,Fe++):(n=a,0===ke&&Ge(B)),n!==a?(Oe=e,e=ye(r)):(Fe=e,e=a)):(Fe=e,e=a),ke--,e===a&&0===ke&&Ge(T),e}function Ye(){var e,r,n;return ke++,e=Fe,Qe(),(r=tt())!==a?(t.substr(Fe,2)===h?(n=h,Fe+=2):(n=a,0===ke&&Ge(G)),n!==a?(Oe=e,e=ge(r)):(Fe=e,e=a)):(Fe=e,e=a),e===a&&(e=Fe,Qe(),(r=tt())!==a?(t.substr(Fe,2)===d?(n=d,Fe+=2):(n=a,0===ke&&Ge(W)),n!==a?(Oe=e,e=ve(r)):(Fe=e,e=a)):(Fe=e,e=a),e===a&&(e=Fe,Qe(),(r=tt())!==a?(t.substr(Fe,2)===m?(n=m,Fe+=2):(n=a,0===ke&&Ge(H)),n!==a?(Oe=e,e=be(r)):(Fe=e,e=a)):(Fe=e,e=a),e===a&&(e=Fe,Qe(),(r=tt())!==a?(t.substr(Fe,2)===y?(n=y,Fe+=2):(n=a,0===ke&&Ge(J)),n!==a?(Oe=e,e=we(r)):(Fe=e,e=a)):(Fe=e,e=a),e===a&&(e=Fe,Qe(),(r=tt())!==a?(t.substr(Fe,2)===g?(n=g,Fe+=2):(n=a,0===ke&&Ge(V)),n!==a?(Oe=e,e=xe(r)):(Fe=e,e=a)):(Fe=e,e=a),e===a&&(e=Fe,Qe(),(r=tt())!==a?(t.substr(Fe,2)===v?(n=v,Fe+=2):(n=a,0===ke&&Ge(Q)),n!==a?(Oe=e,e=Ae(r)):(Fe=e,e=a)):(Fe=e,e=a)))))),ke--,e===a&&0===ke&&Ge(z),e}function Ze(){var e,r,n;return ke++,e=Fe,(r=tt())!==a?(t.substr(Fe,3)===b?(n=b,Fe+=3):(n=a,0===ke&&Ge(X)),n!==a?(Oe=e,e=qe(r)):(Fe=e,e=a)):(Fe=e,e=a),e===a&&(e=Fe,(r=tt())!==a?(t.substr(Fe,3)===w?(n=w,Fe+=3):(n=a,0===ke&&Ge(Y)),n!==a?(Oe=e,e=Se(r)):(Fe=e,e=a)):(Fe=e,e=a),e===a&&(e=Fe,(r=tt())!==a?(t.substr(Fe,4)===x?(n=x,Fe+=4):(n=a,0===ke&&Ge(Z)),n!==a?(Oe=e,e=_e(r)):(Fe=e,e=a)):(Fe=e,e=a),e===a&&(e=Fe,(r=tt())!==a?(t.substr(Fe,4)===A?(n=A,Fe+=4):(n=a,0===ke&&Ge(ee)),n!==a?(Oe=e,e=Ce(r)):(Fe=e,e=a)):(Fe=e,e=a)))),ke--,e===a&&(r=a,0===ke&&Ge(K)),e}function et(){var e,r,n,o;if(ke++,e=Fe,35===t.charCodeAt(Fe)?(r=q,Fe++):(r=a,0===ke&&Ge(ne)),r!==a){if(n=[],E.test(t.charAt(Fe))?(o=t.charAt(Fe),Fe++):(o=a,0===ke&&Ge(ae)),o!==a)for(;o!==a;)n.push(o),E.test(t.charAt(Fe))?(o=t.charAt(Fe),Fe++):(o=a,0===ke&&Ge(ae));else n=a;n!==a?(Oe=e,e=Ee()):(Fe=e,e=a)}else Fe=e,e=a;return e===a&&(e=Fe,(r=Je())!==a&&(Oe=e,r=$e(r)),(e=r)===a&&(e=Fe,(r=Ke())!==a&&(Oe=e,r=je()),e=r)),ke--,e===a&&(r=a,0===ke&&Ge(re)),e}function tt(){var e,r,n,o,i,s,c;for(e=Fe,$.test(t.charAt(Fe))?(t.charAt(Fe),Fe++):0===ke&&Ge(oe),r=Fe,n=[],j.test(t.charAt(Fe))?(o=t.charAt(Fe),Fe++):(o=a,0===ke&&Ge(ie));o!==a;)n.push(o),j.test(t.charAt(Fe))?(o=t.charAt(Fe),Fe++):(o=a,0===ke&&Ge(ie));if(46===t.charCodeAt(Fe)?(o=S,Fe++):(o=a,0===ke&&Ge(se)),o!==a){if(i=[],j.test(t.charAt(Fe))?(s=t.charAt(Fe),Fe++):(s=a,0===ke&&Ge(ie)),s!==a)for(;s!==a;)i.push(s),j.test(t.charAt(Fe))?(s=t.charAt(Fe),Fe++):(s=a,0===ke&&Ge(ie));else i=a;i!==a?r=n=[n,o,i]:(Fe=r,r=a)}else Fe=r,r=a;if(r===a)if(r=[],j.test(t.charAt(Fe))?(n=t.charAt(Fe),Fe++):(n=a,0===ke&&Ge(ie)),n!==a)for(;n!==a;)r.push(n),j.test(t.charAt(Fe))?(n=t.charAt(Fe),Fe++):(n=a,0===ke&&Ge(ie));else r=a;if(r!==a){if(n=Fe,101===t.charCodeAt(Fe)?(o=_,Fe++):(o=a,0===ke&&Ge(ce)),o!==a){if($.test(t.charAt(Fe))?(i=t.charAt(Fe),Fe++):(i=a,0===ke&&Ge(oe)),i===a&&(i=null),s=[],j.test(t.charAt(Fe))?(c=t.charAt(Fe),Fe++):(c=a,0===ke&&Ge(ie)),c!==a)for(;c!==a;)s.push(c),j.test(t.charAt(Fe))?(c=t.charAt(Fe),Fe++):(c=a,0===ke&&Ge(ie));else s=a;s!==a?n=o=[o,i,s]:(Fe=n,n=a)}else Fe=n,n=a;n===a&&(n=null),Oe=e,e=Re()}else Fe=e,e=a;return e}if((n=s())!==a&&Fe===t.length)return n;throw n!==a&&Fe<t.length&&Ge({type:"end"}),function(t,r,n){return new e(e.buildMessage(t,r),t,r,n)}(Me,De<t.length?t.charAt(De):null,De<t.length?ze(De,De+1):ze(De,De))}}},(n=l).exports&&(n.exports=a());var f=l.exports;function p(e){if(!e||0===e.length)return null;if("string"==typeof e){const t=h(e);return t&&0!==t.length?t:null}const t=e.map((e=>{if(!Number.isFinite(e.scale)||e.scale<=0)throw new o.c("effect:invalid-scale","scale must be finite and greater than 0",{stop:e});return{scale:e.scale,effects:h(e.value)}}));t.sort(((e,t)=>t.effects.length-e.effects.length));for(let e=0;e<t.length-1;e++){if(!(0,u.w1)(t[e].effects,t[e+1].effects))throw new o.c("effect:interpolation-impossible","Cannot interpolate by scale between 2 lists of mixed effects",{a:t[e].effects,b:t[e+1].effects});(0,u.A1)(t[e].effects,t[e+1].effects)}return t.sort(((e,t)=>t.scale-e.scale)),t}function h(e){let t;if(!e)return[];try{t=f.parse(e)}catch(t){throw new o.c("effect:invalid-syntax","Invalid effect syntax",{value:e,error:t})}return t.map((e=>function(e){try{switch(e.name){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":return function(e){let t=1;return d(e.parameters,1),1===e.parameters.length&&(t=b(e.parameters[0])),new c.M7(e.name,t)}(e);case"opacity":return function(e){let t=1;return d(e.parameters,1),1===e.parameters.length&&(t=b(e.parameters[0])),new c.Ez(t)}(e);case"hue-rotate":return function(e){let t=0;return d(e.parameters,1),1===e.parameters.length&&(t=function(e){return function(e){if("quantity"!==e.type||!(0===e.value&&null===e.unit||e.unit&&null!=g[e.unit]))throw new o.c("effect:type-error",`Expected <angle>, Actual: ${m(e)}`,{term:e})}(e),e.value*g[e.unit]||0}(e.parameters[0])),new c.C8(t)}(e);case"blur":return function(e){let t=0;return d(e.parameters,1),1===e.parameters.length&&(t=w(e.parameters[0]),y(t,e.parameters[0])),new c.o1(t)}(e);case"drop-shadow":return function(e){const t=[];let r=null;for(const n of e.parameters)if("color"===n.type){if(t.length&&Object.freeze(t),r)throw new o.c("effect:type-error","Accepts only one color",{});r=x(n)}else{const e=w(n);if(Object.isFrozen(t))throw new o.c("effect:type-error","<length> parameters not consecutive",{lengths:t});t.push(e),3===t.length&&y(e,n)}if(t.length<2||t.length>3)throw new o.c("effect:type-error",`Expected <length>{2,3}, Actual: <length>{${t.length}}`,{lengths:t});return new c.of(t[0],t[1],t[2]||0,r||A("black"))}(e);case"bloom":return function(e){let t=1,r=0,n=0;return d(e.parameters,3),e.parameters[0]&&(t=b(e.parameters[0])),e.parameters[1]&&(r=w(e.parameters[1]),y(r,e.parameters[1])),e.parameters[2]&&(n=b(e.parameters[2])),new c.qC(t,r,n)}(e)}}catch(t){throw t.details.filter=e,t}throw new o.c("effect:unknown-effect",`Effect '${e.name}' is not supported`,{effect:e})}(e)))}function d(e,t){if(e.length>t)throw new o.c("effect:type-error",`Function supports up to ${t} parameters, Actual: ${e.length}`,{parameters:e})}function m(e){if("color"===e.type)return"<color>";if(e.unit){if(e.unit in v)return"<length>";if(e.unit in g)return"<angle>";if("%"===e.unit)return"<percentage>"}return"<double>"}function y(e,t){if(e<0)throw new o.c("effect:type-error",`Negative values are not allowed, Actual: ${e}`,{term:t})}const g={deg:1,grad:.9,rad:180/Math.PI,turn:360},v={px:1,cm:96/2.54,mm:96/2.54/10,in:96,pc:16,pt:96/72};function b(e){!function(e){if("quantity"!==e.type||null!==e.unit&&"%"!==e.unit)throw new o.c("effect:type-error",`Expected <double> or <percentage>, Actual: ${m(e)}`,{term:e})}(e);const t=e.value;return y(t,e),"%"===e.unit?.01*t:t}function w(e){return function(e){if("quantity"!==e.type||!(0===e.value&&null===e.unit||e.unit&&null!=v[e.unit]))throw new o.c("effect:type-error",`Expected <length>, Actual: ${m(e)}`,{term:e})}(e),e.value*v[e.unit]||0}function x(e){switch(e.colorType){case"hex":return(0,s.yU)(e.value);case"named":return A(e.value);case"function":return function(e){if(d(e.parameters,4),q.test(e.name))return[b(e.parameters[0]),b(e.parameters[1]),b(e.parameters[2]),e.parameters[3]?b(e.parameters[3]):1];if(S.test(e.name))return(0,s.ec)(function(e){return function(e){if("quantity"!==e.type||null!==e.unit)throw new o.c("effect:type-error",`Expected <double>, Actual: ${m(e)}`,{term:e})}(e),y(e.value,e),e.value}(e.parameters[0]),b(e.parameters[1]),b(e.parameters[2]),e.parameters[3]?b(e.parameters[3]):1);throw new o.c("effect:syntax-error",`Invalid color function '${e.name}'`,{colorFunction:e})}(e.value)}}function A(e){if(!(0,s.kv)(e))throw new o.c("effect:unknown-color",`color '${e}' isn't valid`,{namedColor:e});return(0,s.uO)(e)}const q=/^rgba?/i,S=/^hsla?/i;function _(e,t,r){try{return function(e){if(!e||0===e.length)return null;if(function(e){const t=e[0];return!!t&&"scale"in t}(e)){const t=[];for(const r of e)t.push({scale:r.scale,value:I(r.value)});return t}return I(e)}(e)}catch(e){r?.messages?.push(e)}return null}function C(e,t,r,n){try{const n=function(e){const t=p(e);return t?(0,u.Ub)(t)?t.map((e=>e.toJSON())):t.map((({scale:e,effects:t})=>({scale:e,value:t.map((e=>e.toJSON()))}))):null}(e);(0,i.qQ)(r,n,t)}catch(e){n.messages&&n.messages.push(e)}}function I(e){if(!e?.length)return"";const t=[];for(const r of e){let e=[];switch(r.type){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":case"opacity":e=[E(r,"amount")];break;case"blur":e=[E(r,"radius","pt")];break;case"hue-rotate":e=[E(r,"angle","deg")];break;case"drop-shadow":e=[E(r,"xoffset","pt"),E(r,"yoffset","pt"),E(r,"blurRadius","pt"),$(r,"color")];break;case"bloom":e=[E(r,"strength"),E(r,"radius","pt"),E(r,"threshold")]}const n=`${r.type}(${e.filter(Boolean).join(" ")})`;p(n),t.push(n)}return t.join(" ")}function E(e,t,r){if(null==e[t])throw new o.c("effect:missing-parameter",`Missing parameter '${t}' in ${e.type} effect`,{effect:e});return r?e[t]+r:""+e[t]}function $(e,t){if(null==e[t])throw new o.c("effect:missing-parameter",`Missing parameter '${t}' in ${e.type} effect`,{effect:e});const r=e[t];return`rgba(${r[0]||0}, ${r[1]||0}, ${r[2]||0}, ${r[3]/255||0})`}},25216:(e,t,r)=>{r.d(t,{W:()=>c});var n=r(41948),a=r(1580),o=(r(9456),r(66360),r(72052),r(12552)),i=r(24676);const s={read:{reader:i.gH},write:{allowNull:!0,writer:i.GA}},c=e=>{let t=class extends e{constructor(){super(...arguments),this.blendMode="normal",this.effect=null}};return(0,n._)([(0,a.qq)({type:["average","color-burn","color-dodge","color","darken","destination-atop","destination-in","destination-out","destination-over","difference","exclusion","hard-light","hue","invert","lighten","lighter","luminosity","minus","multiply","normal","overlay","plus","reflect","saturation","screen","soft-light","source-atop","source-in","source-out","vivid-light","xor"],nonNullable:!0,json:{read:!1,write:!1,origins:{"web-map":{read:!0,write:!0},"portal-item":{read:!0,write:!0}}}})],t.prototype,"blendMode",void 0),(0,n._)([(0,a.qq)({json:{read:!1,write:!1,origins:{"web-map":s,"portal-item":s}}})],t.prototype,"effect",void 0),t=(0,n._)([(0,o.c)("esri.layers.mixins.BlendLayer")],t),t}},26916:(e,t,r)=>{r.d(t,{G:()=>b});var n=r(41948),a=r(66360),o=r(10860),i=r(1580),s=r(33392),c=(r(72052),r(9456),r(12552)),u=r(84108),l=r(2952),f=(r(40196),r(20744),r(37176),r(41168));const p=new l.c,h=new WeakMap;function d(e){(function(e){return null!=e&&"object"==typeof e&&"refreshInterval"in e&&"refresh"in e})(e)&&p.push(new WeakRef(e))}function m(e,t){return Number.isFinite(e)&&Number.isFinite(t)?t<=0?e:m(t,e%t):0}let y=0,g=0;function v(){const e=Date.now();let t=!1;for(const r of p){const n=r.deref();n?n.refreshInterval&&e-(h.get(n)??0)+5>=6e4*n.refreshInterval&&(h.set(n,e),n.refresh(e)):t=!0}if(t)for(let e=p.length-1;e>=0;e--)p.at(e).deref()||p.removeAt(e)}(0,f.ox)((()=>{const e=Date.now();let t=0;for(const r of p){const n=r.deref();n&&(t=m(Math.round(6e4*n.refreshInterval),t),n.refreshInterval?h.get(n)||h.set(n,e):h.delete(n))}if(t!==g){if(g=t,clearInterval(y),0===g)return void(y=0);y=setInterval(v,g)}}));const b=e=>{let t=class extends e{constructor(...e){super(...e),this.refreshInterval=0,this.refreshTimestamp=0,this._debounceHasDataChanged=(0,o.Cu)((()=>this.hasDataChanged())),this.when().then((()=>{this.destroyed||d(this)}),(()=>{}))}destroy(){!function(e){const t=p.find((t=>t.deref()===e));t&&p.remove(t)}(this)}castRefreshInterval(e){return e>=.1?e:e<=0?0:.1}get refreshParameters(){return{_ts:this.refreshTimestamp||null}}refresh(e=Date.now()){(0,o.jO)(this._debounceHasDataChanged()).then((t=>{t&&this._set("refreshTimestamp",e),this.emit("refresh",{dataChanged:t})}),(e=>{a.c.getLogger(this).error(e),this.emit("refresh",{dataChanged:!1,error:e})}))}async hasDataChanged(){return!0}get test(){const e=this;return{set refreshInterval(t){e._set("refreshInterval",t)}}}};return(0,n._)([(0,i.qq)({type:Number,json:{write:!0,origins:{"web-scene":{write:{enabled:!0,layerContainerTypes:u.T}}}}})],t.prototype,"refreshInterval",void 0),(0,n._)([(0,s.W)("refreshInterval")],t.prototype,"castRefreshInterval",null),(0,n._)([(0,i.qq)({readOnly:!0})],t.prototype,"refreshTimestamp",void 0),(0,n._)([(0,i.qq)({readOnly:!0})],t.prototype,"refreshParameters",null),t=(0,n._)([(0,c.c)("esri.layers.mixins.RefreshableLayer")],t),t}},3116:(e,t,r)=>{r.d(t,{I:()=>i});var n=r(41948),a=r(1580),o=(r(9456),r(66360),r(72052),r(12552));const i=e=>{let t=class extends e{constructor(){super(...arguments),this.minScale=0,this.maxScale=0}get effectiveScaleRange(){const e={minScale:this.minScale,maxScale:this.maxScale},t=this.parent;t&&"effectiveScaleRange"in t&&function(e,t){e.minScale=e.minScale>0?t.minScale>0?Math.min(e.minScale,t.minScale):e.minScale:t.minScale,e.maxScale=e.maxScale>0?t.maxScale>0?Math.max(e.maxScale,t.maxScale):e.maxScale:t.maxScale}(e,t.effectiveScaleRange);const r=this._get("effectiveScaleRange");return r&&r.minScale===e.minScale&&r.maxScale===e.maxScale?r:e}};return(0,n._)([(0,a.qq)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"minScale",void 0),(0,n._)([(0,a.qq)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"maxScale",void 0),(0,n._)([(0,a.qq)({readOnly:!0})],t.prototype,"effectiveScaleRange",null),t=(0,n._)([(0,o.c)("esri.layers.mixins.ScaleRangeLayer")],t),t}}}]);