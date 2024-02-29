"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[7024],{25228:(e,t,r)=>{r.d(t,{c:()=>m});var i,o=r(41948),n=r(40504),s=r(94360),a=r(1580),l=(r(9456),r(66360),r(72052),r(33600)),p=r(12552),c=r(18996),u=r(28484);let d=i=class extends n.am{static get allTime(){return y}static get empty(){return h}constructor(e){super(e),this.end=null,this.start=null}readEnd(e,t){return null!=t.end?new Date(t.end):null}writeEnd(e,t){t.end=e?.getTime()??null}get isAllTime(){return this.equals(i.allTime)}get isEmpty(){return this.equals(i.empty)}readStart(e,t){return null!=t.start?new Date(t.start):null}writeStart(e,t){t.start=e?.getTime()??null}clone(){return new i({end:this.end,start:this.start})}equals(e){if(!e)return!1;const t=this.start?.getTime()??this.start,r=this.end?.getTime()??this.end,i=e.start?.getTime()??e.start,o=e.end?.getTime()??e.end;return t===i&&r===o}expandTo(e,t=u.OX){if(this.isEmpty||this.isAllTime)return this.clone();let r=this.start;r&&(r=(0,s.aU)(r,e,t));let o=this.end;if(o){const r=(0,s.aU)(o,e,t);o=o.getTime()===r.getTime()?r:(0,s.g1)(r,1,e,t)}return new i({start:r,end:o})}intersection(e){if(!e)return this.clone();if(this.isEmpty||e.isEmpty)return i.empty;if(this.isAllTime)return e.clone();if(e.isAllTime)return this.clone();const t=this.start?.getTime()??-1/0,r=this.end?.getTime()??1/0,o=e.start?.getTime()??-1/0,n=e.end?.getTime()??1/0;let s,a;if(o>=t&&o<=r?s=o:t>=o&&t<=n&&(s=t),r>=o&&r<=n?a=r:n>=t&&n<=r&&(a=n),null!=s&&null!=a&&!isNaN(s)&&!isNaN(a)){const e=new i;return e.start=s===-1/0?null:new Date(s),e.end=a===1/0?null:new Date(a),e}return i.empty}offset(e,t,r=u.OX){if(this.isEmpty||this.isAllTime)return this.clone();const o=new i,{start:n,end:a}=this;return null!=n&&(o.start=(0,s.g1)(n,e,t,r)),null!=a&&(o.end=(0,s.g1)(a,e,t,r)),o}union(e){if(!e||e.isEmpty)return this.clone();if(this.isEmpty)return e.clone();if(this.isAllTime||e.isAllTime)return y.clone();const t=null!=this.start&&null!=e.start?new Date(Math.min(this.start.getTime(),e.start.getTime())):null,r=null!=this.end&&null!=e.end?new Date(Math.max(this.end.getTime(),e.end.getTime())):null;return new i({start:t,end:r})}};(0,o._)([(0,a.qq)({type:Date,json:{write:{allowNull:!0}}})],d.prototype,"end",void 0),(0,o._)([(0,l.E)("end")],d.prototype,"readEnd",null),(0,o._)([(0,c.G)("end")],d.prototype,"writeEnd",null),(0,o._)([(0,a.qq)({readOnly:!0,json:{read:!1}})],d.prototype,"isAllTime",null),(0,o._)([(0,a.qq)({readOnly:!0,json:{read:!1}})],d.prototype,"isEmpty",null),(0,o._)([(0,a.qq)({type:Date,json:{write:{allowNull:!0}}})],d.prototype,"start",void 0),(0,o._)([(0,l.E)("start")],d.prototype,"readStart",null),(0,o._)([(0,c.G)("start")],d.prototype,"writeStart",null),d=i=(0,o._)([(0,p.c)("esri.TimeExtent")],d);const y=new d,h=new d({start:void 0,end:void 0}),m=d},22156:(e,t,r)=>{r.d(t,{MR:()=>s,qm:()=>a});var i=r(41948),o=r(12552);let n=0;const s=e=>{let t=class extends e{constructor(...e){super(...e),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+n++})}};return t=(0,i._)([(0,o.c)("esri.core.Identifiable")],t),t},a=e=>{let t=class extends e{constructor(...e){super(...e),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:n++})}};return t=(0,i._)([(0,o.c)("esri.core.NumericIdentifiable")],t),t};let l=class extends(s(class{})){};l=(0,i._)([(0,o.c)("esri.core.Identifiable")],l)},77380:(e,t,r)=>{r.d(t,{I:()=>m,Y:()=>i});const i={Base64:0,Hex:1,String:2,Raw:3},o=8,n=(1<<o)-1;function s(e,t){const r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function a(e){const t=[];for(let r=0,i=e.length*o;r<i;r+=o)t[r>>5]|=(e.charCodeAt(r/o)&n)<<r%32;return t}function l(e){const t=[];for(let r=0,i=32*e.length;r<i;r+=o)t.push(String.fromCharCode(e[r>>5]>>>r%32&n));return t.join("")}function p(e,t,r,i,o,n){return s(function(e,t){return e<<t|e>>>32-t}(s(s(t,e),s(i,n)),o),r)}function c(e,t,r,i,o,n,s){return p(t&r|~t&i,e,t,o,n,s)}function u(e,t,r,i,o,n,s){return p(t&i|r&~i,e,t,o,n,s)}function d(e,t,r,i,o,n,s){return p(t^r^i,e,t,o,n,s)}function y(e,t,r,i,o,n,s){return p(r^(t|~i),e,t,o,n,s)}function h(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;let r=1732584193,i=-271733879,o=-1732584194,n=271733878;for(let t=0;t<e.length;t+=16){const a=r,l=i,p=o,h=n;r=c(r,i,o,n,e[t],7,-680876936),n=c(n,r,i,o,e[t+1],12,-389564586),o=c(o,n,r,i,e[t+2],17,606105819),i=c(i,o,n,r,e[t+3],22,-1044525330),r=c(r,i,o,n,e[t+4],7,-176418897),n=c(n,r,i,o,e[t+5],12,1200080426),o=c(o,n,r,i,e[t+6],17,-1473231341),i=c(i,o,n,r,e[t+7],22,-45705983),r=c(r,i,o,n,e[t+8],7,1770035416),n=c(n,r,i,o,e[t+9],12,-1958414417),o=c(o,n,r,i,e[t+10],17,-42063),i=c(i,o,n,r,e[t+11],22,-1990404162),r=c(r,i,o,n,e[t+12],7,1804603682),n=c(n,r,i,o,e[t+13],12,-40341101),o=c(o,n,r,i,e[t+14],17,-1502002290),i=c(i,o,n,r,e[t+15],22,1236535329),r=u(r,i,o,n,e[t+1],5,-165796510),n=u(n,r,i,o,e[t+6],9,-1069501632),o=u(o,n,r,i,e[t+11],14,643717713),i=u(i,o,n,r,e[t],20,-373897302),r=u(r,i,o,n,e[t+5],5,-701558691),n=u(n,r,i,o,e[t+10],9,38016083),o=u(o,n,r,i,e[t+15],14,-660478335),i=u(i,o,n,r,e[t+4],20,-405537848),r=u(r,i,o,n,e[t+9],5,568446438),n=u(n,r,i,o,e[t+14],9,-1019803690),o=u(o,n,r,i,e[t+3],14,-187363961),i=u(i,o,n,r,e[t+8],20,1163531501),r=u(r,i,o,n,e[t+13],5,-1444681467),n=u(n,r,i,o,e[t+2],9,-51403784),o=u(o,n,r,i,e[t+7],14,1735328473),i=u(i,o,n,r,e[t+12],20,-1926607734),r=d(r,i,o,n,e[t+5],4,-378558),n=d(n,r,i,o,e[t+8],11,-2022574463),o=d(o,n,r,i,e[t+11],16,1839030562),i=d(i,o,n,r,e[t+14],23,-35309556),r=d(r,i,o,n,e[t+1],4,-1530992060),n=d(n,r,i,o,e[t+4],11,1272893353),o=d(o,n,r,i,e[t+7],16,-155497632),i=d(i,o,n,r,e[t+10],23,-1094730640),r=d(r,i,o,n,e[t+13],4,681279174),n=d(n,r,i,o,e[t],11,-358537222),o=d(o,n,r,i,e[t+3],16,-722521979),i=d(i,o,n,r,e[t+6],23,76029189),r=d(r,i,o,n,e[t+9],4,-640364487),n=d(n,r,i,o,e[t+12],11,-421815835),o=d(o,n,r,i,e[t+15],16,530742520),i=d(i,o,n,r,e[t+2],23,-995338651),r=y(r,i,o,n,e[t],6,-198630844),n=y(n,r,i,o,e[t+7],10,1126891415),o=y(o,n,r,i,e[t+14],15,-1416354905),i=y(i,o,n,r,e[t+5],21,-57434055),r=y(r,i,o,n,e[t+12],6,1700485571),n=y(n,r,i,o,e[t+3],10,-1894986606),o=y(o,n,r,i,e[t+10],15,-1051523),i=y(i,o,n,r,e[t+1],21,-2054922799),r=y(r,i,o,n,e[t+8],6,1873313359),n=y(n,r,i,o,e[t+15],10,-30611744),o=y(o,n,r,i,e[t+6],15,-1560198380),i=y(i,o,n,r,e[t+13],21,1309151649),r=y(r,i,o,n,e[t+4],6,-145523070),n=y(n,r,i,o,e[t+11],10,-1120210379),o=y(o,n,r,i,e[t+2],15,718787259),i=y(i,o,n,r,e[t+9],21,-343485551),r=s(r,a),i=s(i,l),o=s(o,p),n=s(n,h)}return[r,i,o,n]}function m(e,t=i.Hex){const r=t||i.Base64,n=h(a(e),e.length*o);switch(r){case i.Raw:return n;case i.Hex:return function(e){const t="0123456789abcdef",r=[];for(let i=0,o=4*e.length;i<o;i++)r.push(t.charAt(e[i>>2]>>i%4*8+4&15)+t.charAt(e[i>>2]>>i%4*8&15));return r.join("")}(n);case i.String:return l(n);case i.Base64:return function(e){const t=[];for(let r=0,i=4*e.length;r<i;r+=3){const i=(e[r>>2]>>r%4*8&255)<<16|(e[r+1>>2]>>(r+1)%4*8&255)<<8|e[r+2>>2]>>(r+2)%4*8&255;for(let o=0;o<4;o++)8*r+6*o>32*e.length?t.push("="):t.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(i>>6*(3-o)&63))}return t.join("")}(n)}}},90636:(e,t,r)=>{r.d(t,{O:()=>y});var i=r(20744),o=r(77380),n=r(4644),s=r(28176),a=r(63564),l=r(44296),p=r(71448),c=r(1580),u=r(73960),d=r(91952);function y(e){const t=e?.origins??[void 0];return(r,i)=>{const o=function(e,t,r){if("resource"===e?.type)return function(e,t,r){const i=(0,l.EF)(t,r);return{type:String,read:(e,t,r)=>{const o=(0,d.r)(e,t,r);return i.type===String?o:"function"==typeof i.type?new i.type({url:o}):void 0},write:{writer(t,o,a,l){if(!l?.resources)return"string"==typeof t?void(o[a]=(0,d.t)(t,l)):void(o[a]=t.write({},l));const c=function(e){return null==e?null:"string"==typeof e?e:e.url}(t),y=(0,d.t)(c,{...l,verifyItemRelativeUrls:l?.verifyItemRelativeUrls?{writtenUrls:l.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},d.M.NO),g=i.type!==String&&(!(0,n.w)(this)||l?.origin&&this.originIdOf(r)>(0,p.CQ)(l.origin)),v={object:this,propertyName:r,value:t,targetUrl:y,dest:o,targetPropertyName:a,context:l,params:e};l?.portalItem&&y&&!(0,s.ic)(y)?g&&e?.contentAddressed?h(v):g?function(e){const{context:t,targetUrl:r,params:i,value:o,dest:n,targetPropertyName:a}=e;if(!t.portalItem)return;const l=t.portalItem.resourceFromPath(r),p=f(o,r,t),c=(0,u.e)(p),d=(0,s.wt)(l.path),y=i?.compress??!1;c===d?(t.resources&&m({...e,resource:l,content:p,compress:y,updates:t.resources.toUpdate}),n[a]=r):h(e)}(v):function({context:e,targetUrl:t,dest:r,targetPropertyName:i}){e.portalItem&&e.resources&&(e.resources.toKeep.push({resource:e.portalItem.resourceFromPath(t),compress:!1}),r[i]=t)}(v):l?.portalItem&&(null==y||null!=(0,d.i)(y)||(0,s.ue)(y)||g)?h(v):o[a]=y}}}}(e,t,r);switch(e?.type??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=d.b;return{read:e,write:t}}}}(e,r,i);for(const e of t){const t=(0,c.aq)(r,e,i);for(const e in o)t[e]=o[e]}}}function h(e){const{targetUrl:t,params:r,value:n,context:l,dest:p,targetPropertyName:c}=e;if(!l.portalItem)return;const y=(0,d.p)(t),h=f(n,t,l);if(r?.contentAddressed&&"json"!==h.type)return void l.messages?.push(new i.c("persistable:contentAddressingUnsupported",`Property "${c}" is trying to serializing a resource with content of type ${h.type} with content addressing. Content addressing is only supported for json resources.`,{content:h}));const g=r?.contentAddressed&&"json"===h.type?(0,o.I)(h.jsonString):y?.filename??(0,a.g1)(),v=(0,s.kn)(r?.prefix??y?.prefix,g),q=`${v}.${(0,u.e)(h)}`;if(r?.contentAddressed&&l.resources&&"json"===h.type){const e=l.resources.toKeep.find((({resource:e})=>e.path===q))??l.resources.toAdd.find((({resource:e})=>e.path===q));if(e)return void(p[c]=e.resource.itemRelativeUrl)}const _=l.portalItem.resourceFromPath(q);(0,s.ue)(t)&&l.resources&&l.resources.pendingOperations.push((0,s.SW)(t).then((e=>{_.path=`${v}.${(0,u.e)({type:"blob",blob:e})}`,p[c]=_.itemRelativeUrl})).catch((()=>{})));const w=r?.compress??!1;l.resources&&m({...e,resource:_,content:h,compress:w,updates:l.resources.toAdd}),p[c]=_.itemRelativeUrl}function m({object:e,propertyName:t,updates:r,resource:i,content:o,compress:n}){r.push({resource:i,content:o,compress:n,finish:r=>{!function(e,t,r){"string"==typeof e[t]?e[t]=r.url:e[t].url=r.url}(e,t,r)}})}function f(e,t,r){return"string"==typeof e?{type:"url",url:t}:{type:"json",jsonString:JSON.stringify(e.toJSON(r))}}},57896:(e,t,r)=>{r.d(t,{Eq:()=>d,KG:()=>g,_8:()=>f,_I:()=>p,aE:()=>l,du:()=>m,on:()=>u}),r(40196),r(2952);var i=r(60976),o=r(38912),n=r(70680),s=r(10860),a=r(37176);function l(e,t,r={}){return c(e,t,r,y)}function p(e,t,r={}){return c(e,t,r,h)}function c(e,t,r={},i){let o=null;const s=r.once?(e,r)=>{i(e)&&((0,n.oR)(o),t(e,r))}:(e,r)=>{i(e)&&t(e,r)};if(o=(0,a.M9)(e,s,r.sync,r.equals),r.initial){const t=e();s(t,t)}return o}function u(e,t,r,s={}){let a=null,p=null,c=null;function u(){a&&p&&(p.remove(),s.onListenerRemove?.(a),a=null,p=null)}function d(e){s.once&&s.once&&(0,n.oR)(c),r(e)}const y=l(e,((e,r)=>{u(),(0,i.sh)(e)&&(a=e,p=(0,i.on)(e,t,d),s.onListenerAdd?.(e))}),{sync:s.sync,initial:!0});return c=(0,o.uU)((()=>{y.remove(),u()})),c}function d(e,t){return function(e,t,r){if((0,s.wv)(r))return Promise.reject((0,s.Uh)());const i=e();if(t?.(i))return Promise.resolve(i);let a=null;function l(){a=(0,n.oR)(a)}return new Promise(((i,n)=>{a=(0,o.Ip)([(0,s.wD)(r,(()=>{l(),n((0,s.Uh)())})),c(e,(e=>{l(),i(e)}),{sync:!1,once:!0},t??y)])}))}(e,h,t)}function y(e){return!0}function h(e){return!!e}r(41168);const m={sync:!0},f={initial:!0},g={sync:!0,initial:!0}},63564:(e,t,r)=>{r.d(t,{Mr:()=>s,cf:()=>n,g1:()=>o});const i="randomUUID"in crypto;function o(){if(i)return crypto.randomUUID();const e=crypto.getRandomValues(new Uint16Array(8));e[3]=4095&e[3]|16384,e[4]=16383&e[4]|32768;const t=t=>e[t].toString(16).padStart(4,"0");return t(0)+t(1)+"-"+t(2)+"-"+t(3)+"-"+t(4)+"-"+t(5)+t(6)+t(7)}function n(){return`{${o().toUpperCase()}}`}function s(){return`{${o()}}`}},13819:(e,t,r)=>{r.d(t,{c:()=>q});var i,o=r(41948),n=r(92400),s=r(14628),a=r(40504),l=r(24296),p=r(69504),c=r(1580),u=(r(9456),r(66360),r(33600)),d=r(12552),y=r(18996);const h=(0,s.w)()({orthometric:"gravity-related-height",gravity_related_height:"gravity-related-height",ellipsoidal:"ellipsoidal"}),m=h.jsonValues.slice();(0,n.sH)(m,"orthometric");const f=(0,s.w)()({meter:"meters",foot:"feet","us-foot":"us-feet","clarke-foot":"clarke-feet","clarke-yard":"clarke-yards","clarke-link":"clarke-links","sears-yard":"sears-yards","sears-foot":"sears-feet","sears-chain":"sears-chains","benoit-1895-b-chain":"benoit-1895-b-chains","indian-yard":"indian-yards","indian-1937-yard":"indian-1937-yards","gold-coast-foot":"gold-coast-feet","sears-1922-truncated-chain":"sears-1922-truncated-chains","50-kilometers":"50-kilometers","150-kilometers":"150-kilometers"});let g=i=class extends a.am{constructor(e){super(e),this.heightModel="gravity-related-height",this.heightUnit="meters",this.vertCRS=null}writeHeightModel(e,t,r){return h.write(e,t,r)}readHeightModel(e,t,r){return h.read(e)||(r?.messages&&r.messages.push(function(e,t){return new p.c("height-model:unsupported",`Height model of value '${e}' is not supported`,t)}(e,{context:r})),null)}readHeightUnit(e,t,r){return f.read(e)||(r?.messages&&r.messages.push(v(e,{context:r})),null)}readHeightUnitService(e,t,r){return(0,l.oG)(e)||f.read(e)||(r?.messages&&r.messages.push(v(e,{context:r})),null)}readVertCRS(e,t){return t.vertCRS||t.ellipsoid||t.geoid}clone(){return new i({heightModel:this.heightModel,heightUnit:this.heightUnit,vertCRS:this.vertCRS})}equals(e){return!!e&&(this===e||this.heightModel===e.heightModel&&this.heightUnit===e.heightUnit&&this.vertCRS===e.vertCRS)}static deriveUnitFromSR(e,t){const r=(0,l._2)(t);return new i({heightModel:e.heightModel,heightUnit:r??void 0,vertCRS:e.vertCRS})}write(e,t){return t={origin:"web-scene",...t},super.write(e,t)}static fromJSON(e){if(!e)return null;const t=new i;return t.read(e,{origin:"web-scene"}),t}};function v(e,t){return new p.c("height-unit:unsupported",`Height unit of value '${e}' is not supported`,t)}(0,o._)([(0,c.qq)({type:h.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:m,default:"ellipsoidal"}}}})],g.prototype,"heightModel",void 0),(0,o._)([(0,y.G)("web-scene","heightModel")],g.prototype,"writeHeightModel",null),(0,o._)([(0,u.E)(["web-scene","service"],"heightModel")],g.prototype,"readHeightModel",null),(0,o._)([(0,c.qq)({type:f.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:f.jsonValues,write:f.write}}}})],g.prototype,"heightUnit",void 0),(0,o._)([(0,u.E)("web-scene","heightUnit")],g.prototype,"readHeightUnit",null),(0,o._)([(0,u.E)("service","heightUnit")],g.prototype,"readHeightUnitService",null),(0,o._)([(0,c.qq)({type:String,constructOnly:!0,json:{origins:{"web-scene":{write:!0}}}})],g.prototype,"vertCRS",void 0),(0,o._)([(0,u.E)("service","vertCRS",["vertCRS","ellipsoid","geoid"])],g.prototype,"readVertCRS",null),g=i=(0,o._)([(0,d.c)("esri.geometry.HeightModelInfo")],g);const q=g},96584:(e,t,r)=>{r.r(t),r.d(t,{default:()=>G});var i,o=r(41948),n=r(20744),s=r(66360),a=r(26496),l=r(10860),p=r(57896),c=r(1580),u=(r(9456),r(72052),r(33600)),d=r(12552),y=r(90636),h=r(81436),m=r(38724),f=r(16660),g=r(28584),v=r(66576),q=r(98768),_=r(3116),w=r(87072),b=r(21488),S=r(44104),I=r(2600),x=r(2952),U=r(40504),T=r(28176),E=(r(60708),r(62088)),P=r(69504),R=r(18996),M=r(60074),j=r(7488);let N=i=class extends U.am{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,r,i){if(i.layer?.spatialReference&&!i.layer.spatialReference.equals(this.geometry.spatialReference)){if(!(0,M.canProjectWithoutEngine)(e.spatialReference,i.layer.spatialReference))return void(i?.messages&&i.messages.push(new P.c("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:i.layer.spatialReference,context:i})));const o=new j.c;(0,M.projectPolygon)(e,o,i.layer.spatialReference),t[r]=o.toJSON(i)}else t[r]=e.toJSON(i);delete t[r].spatialReference}clone(){return new i({geometry:(0,E.ct)(this.geometry),type:this.type})}};(0,o._)([(0,c.qq)({type:j.c}),(0,y.O)()],N.prototype,"geometry",void 0),(0,o._)([(0,R.G)(["web-scene","portal-item"],"geometry")],N.prototype,"writeGeometry",null),(0,o._)([(0,c.qq)({type:["clip","mask","replace"],nonNullable:!0}),(0,y.O)()],N.prototype,"type",void 0),N=i=(0,o._)([(0,d.c)("esri.layers.support.SceneModification")],N);const O=N;var C;let A=C=class extends((0,U.Ib)(x.c.ofType(O))){constructor(e){super(e),this.url=null}clone(){return new C({url:this.url,items:this.items.map((e=>e.clone()))})}toJSON(e){return this.toArray().map((t=>t.toJSON(e))).filter((e=>!!e.geometry))}static fromJSON(e,t){const r=new C;for(const i of e)r.add(O.fromJSON(i,t));return r}static async fromUrl(e,t,r){const i={url:(0,T.as)(e),origin:"service"},o=await(0,I.c)(e,{responseType:"json",signal:r?.signal}),n=t.toJSON(),s=[];for(const e of o.data)s.push(O.fromJSON({...e,geometry:{...e.geometry,spatialReference:n}},i));return new C({url:e,items:s})}};(0,o._)([(0,c.qq)({type:String})],A.prototype,"url",void 0),A=C=(0,o._)([(0,d.c)("esri.layers.support.SceneModifications")],A);const D=A;var k=r(69204),L=r(91952);let F=class extends((0,w.G6)((0,f.u)((0,v.Y)((0,q.K)((0,_.I)((0,a.U)((0,g.G)((0,m.C)(h.c))))))))){constructor(...e){super(...e),this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.path=null}initialize(){this.addHandles((0,p.on)((()=>this.modifications),"after-changes",(()=>this.modifications=this.modifications),p.du))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readModifications(e,t,r){this._modificationsSource={url:(0,L.f)(e,r),context:r}}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=e?.signal;try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(e){(0,l.CE)(e)}if(await this._fetchService(t),null!=this._modificationsSource){const t=await D.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(null!=this._modificationsSource)return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(w.UJ.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(w.UJ.SAVE,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new n.c("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new n.c("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new n.c("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}_validateElevationInfo(){const e=this.elevationInfo,t="Integrated mesh layers";(0,k.A$)(s.c.getLogger(this),(0,k.Ez)(t,"absolute-height",e)),(0,k.A$)(s.c.getLogger(this),(0,k.W8)(t,e))}};(0,o._)([(0,c.qq)({type:String,readOnly:!0})],F.prototype,"geometryType",void 0),(0,o._)([(0,c.qq)({type:["show","hide"]})],F.prototype,"listMode",void 0),(0,o._)([(0,c.qq)({type:["IntegratedMeshLayer"]})],F.prototype,"operationalLayerType",void 0),(0,o._)([(0,c.qq)({json:{read:!1},readOnly:!0})],F.prototype,"type",void 0),(0,o._)([(0,c.qq)({type:S.yq,readOnly:!0})],F.prototype,"nodePages",void 0),(0,o._)([(0,c.qq)({type:[S.a],readOnly:!0})],F.prototype,"materialDefinitions",void 0),(0,o._)([(0,c.qq)({type:[S.G4],readOnly:!0})],F.prototype,"textureSetDefinitions",void 0),(0,o._)([(0,c.qq)({type:[S.iK],readOnly:!0})],F.prototype,"geometryDefinitions",void 0),(0,o._)([(0,c.qq)({readOnly:!0})],F.prototype,"serviceUpdateTimeStamp",void 0),(0,o._)([(0,c.qq)({type:D}),(0,y.O)({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],F.prototype,"modifications",void 0),(0,o._)([(0,u.E)(["web-scene","portal-item"],"modifications")],F.prototype,"readModifications",null),(0,o._)([(0,c.qq)(b.Kg)],F.prototype,"elevationInfo",null),(0,o._)([(0,c.qq)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],F.prototype,"path",void 0),F=(0,o._)([(0,d.c)("esri.layers.IntegratedMeshLayer")],F);const G=F},81436:(e,t,r)=>{r.d(t,{c:()=>q});var i=r(41948),o=(r(60708),r(2600)),n=r(20744),s=r(77860),a=r(22156),l=r(95800),p=r(66360),c=r(10860),u=r(28176),d=r(1580),y=(r(9456),r(72052),r(12552)),h=r(6220),m=r(95247),f=r(56156);let g=0,v=class extends(s.c.EventedMixin((0,a.MR)(l.c))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new m.c(-180,-90,180,90,f.c.WGS84),this.id=Date.now().toString(16)+"-layer-"+g++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.persistenceEnabled=!1,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=f.c.WGS84,this.title=null,this.type=null,this.url=null,this.visible=!0}static async fromArcGISServerUrl(e){const t="string"==typeof e?{url:e}:e;return(await r.e(9232).then(r.bind(r,69232))).fromUrl(t)}static fromPortalItem(e){return async function(e){const t="portalItem"in e?e:{portalItem:e},{fromItem:i}=await r.e(2259).then(r.bind(r,12259));try{return await i(t)}catch(e){const r=t&&t.portalItem,i=r?.id||"unset",o=r&&r.portal&&r.portal.url||h.default.portalUrl;throw p.c.getLogger("esri.layers.support.fromPortalItem").error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+o+"', id: '"+i+"')",e),e}}(e)}initialize(){this.when().catch((e=>{(0,c.mA)(e)||p.c.getLogger(this).error("#load()",`Failed to load layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}')`,{error:e})}))}destroy(){const e=this.parent;if(e){const t=this;"layers"in e&&e.layers.includes(t)?e.layers.remove(t):"tables"in e&&e.tables.includes(t)?e.tables.remove(t):"baseLayers"in e&&e.baseLayers.includes(t)?e.baseLayers.remove(t):"referenceLayers"in e&&e.referenceLayers.includes(t)&&e.referenceLayers.remove(t),this._set("parent",null)}}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){return(0,u.as)(this.url)}async fetchAttributionData(){const e=this.attributionDataUrl;if(this.hasAttributionData&&e)return(await(0,o.c)(e,{query:{f:"json"},responseType:"json"})).data;throw new n.c("layer:no-attribution-data","Layer does not have attribution data")}};(0,i._)([(0,d.qq)({type:String})],v.prototype,"attributionDataUrl",void 0),(0,i._)([(0,d.qq)({type:m.c})],v.prototype,"fullExtent",void 0),(0,i._)([(0,d.qq)({readOnly:!0})],v.prototype,"hasAttributionData",null),(0,i._)([(0,d.qq)({type:String,clonable:!1})],v.prototype,"id",void 0),(0,i._)([(0,d.qq)({type:Boolean,nonNullable:!0})],v.prototype,"legendEnabled",void 0),(0,i._)([(0,d.qq)({type:["show","hide","hide-children"]})],v.prototype,"listMode",void 0),(0,i._)([(0,d.qq)({type:Number,range:{min:0,max:1},nonNullable:!0})],v.prototype,"opacity",void 0),(0,i._)([(0,d.qq)({clonable:!1})],v.prototype,"parent",void 0),(0,i._)([(0,d.qq)({readOnly:!0})],v.prototype,"parsedUrl",null),(0,i._)([(0,d.qq)({type:Boolean,readOnly:!0})],v.prototype,"persistenceEnabled",void 0),(0,i._)([(0,d.qq)({type:Boolean})],v.prototype,"popupEnabled",void 0),(0,i._)([(0,d.qq)({type:Boolean})],v.prototype,"attributionVisible",void 0),(0,i._)([(0,d.qq)({type:f.c})],v.prototype,"spatialReference",void 0),(0,i._)([(0,d.qq)({type:String})],v.prototype,"title",void 0),(0,i._)([(0,d.qq)({readOnly:!0,json:{read:!1}})],v.prototype,"type",void 0),(0,i._)([(0,d.qq)()],v.prototype,"url",void 0),(0,i._)([(0,d.qq)({type:Boolean,nonNullable:!0})],v.prototype,"visible",void 0),v=(0,i._)([(0,y.c)("esri.layers.Layer")],v);const q=v},28584:(e,t,r)=>{r.d(t,{G:()=>s});var i=r(41948),o=r(1580),n=(r(9456),r(66360),r(72052),r(12552));const s=e=>{let t=class extends e{constructor(){super(...arguments),this.customParameters=null}};return(0,i._)([(0,o.qq)({type:Object,json:{write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0)})}}})],t.prototype,"customParameters",void 0),t=(0,i._)([(0,n.c)("esri.layers.mixins.CustomParametersMixin")],t),t}},98768:(e,t,r)=>{r.d(t,{K:()=>b});var i=r(41948),o=r(6220),n=r(47620),s=r(2600),a=r(40196),l=r(20744),p=r(66360),c=r(70680),u=r(10860),d=r(28176),y=r(1580),h=(r(9456),r(72052),r(33600)),m=r(12552),f=r(18996),g=r(71068),v=r(54872),q=r(9764),_=r(53039),w=r(46940);const b=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=(0,c.mG)(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new q.default({id:t.itemId,portal:r?.portal})}writePortalItem(e,t){e?.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem?.id)try{const{load:i}=await Promise.all([r.e(8828),r.e(4132)]).then(r.bind(r,94132));return(0,u.wp)(t),await i({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData,layerModuleTypeMap:e.layerModuleTypeMap},t)}catch(e){throw(0,u.mA)(e)||p.c.getLogger(this).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${e}`),e}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch((e=>((0,u.CE)(e),!0))))}async setUserPrivileges(e,t){if(!o.default.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(t);if(this.url)try{const{features:{edit:r,fullEdit:i},content:{updateItem:o}}=await this._fetchUserPrivileges(e,t);this._set("userHasEditingPrivileges",r),this._set("userHasFullEditingPrivileges",i),this._set("userHasUpdateItemPrivileges",o)}catch(e){(0,u.CE)(e)}}async _fetchUserPrivileges(e,t){let r=this.portalItem;if(!e||!r||!r.loaded||r.sourceUrl)return this._fetchFallbackUserPrivileges(t);const i=e===r.id;if(i&&r.portal.user)return(0,w.CI)(r);let o,s;if(i)o=r.portal.url;else try{o=await(0,g.mK)(this.url,t)}catch(e){(0,u.CE)(e)}if(!o||!(0,d.Cs)(o,r.portal.url))return this._fetchFallbackUserPrivileges(t);try{const e=null!=t?t.signal:null;s=await(n.id?.getCredential(`${o}/sharing`,{prompt:!1,signal:e}))}catch(e){(0,u.CE)(e)}if(!s)return{features:{edit:!0,fullEdit:!1},content:{updateItem:!1}};try{if(i?await r.reload():(r=new q.default({id:e,portal:{url:o}}),await r.load(t)),r.portal.user)return(0,w.CI)(r)}catch(e){(0,u.CE)(e)}return{features:{edit:!0,fullEdit:!1},content:{updateItem:!1}}}async _fetchFallbackUserPrivileges(e){let t=!0;try{t=await this._fetchUserHasEditingPrivileges(e)}catch(e){(0,u.CE)(e)}return{features:{edit:t,fullEdit:!1},content:{updateItem:!1}}}async _fetchUserHasEditingPrivileges(e){const t=this.url?n.id?.findCredential(this.url):null;if(!t)return!0;const r=S.credential===t?S.user:await this._fetchEditingUser(e);return S.credential=t,S.user=r,null==r?.privileges||r.privileges.includes("features:user:edit")}async _fetchEditingUser(e){const t=this.portalItem?.portal?.user;if(t)return t;const r=n.id.findServerInfo(this.url??"");if(!r?.owningSystemUrl)return null;const i=`${r.owningSystemUrl}/sharing/rest`,o=v.c.getDefault();if(o&&o.loaded&&(0,d.k7)(o.restUrl)===(0,d.k7)(i))return o.user;const l=`${i}/community/self`,p=null!=e?e.signal:null,c=await(0,a.aG)((0,s.c)(l,{authMode:"no-prompt",query:{f:"json"},signal:p}));return c.ok?_.c.fromJSON(c.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const r=t?.portal,i=this.portalItem?.id&&(this.portalItem.portal||v.c.getDefault());return r&&i&&!(0,d.kF)(i.restUrl,r.restUrl)?(t.messages&&t.messages.push(new l.c("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return(0,i._)([(0,y.qq)({type:q.default})],t.prototype,"portalItem",null),(0,i._)([(0,h.E)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),(0,i._)([(0,f.G)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),(0,i._)([(0,y.qq)({clonable:!1})],t.prototype,"resourceReferences",void 0),(0,i._)([(0,y.qq)({type:Boolean,readOnly:!0})],t.prototype,"userHasEditingPrivileges",void 0),(0,i._)([(0,y.qq)({type:Boolean,readOnly:!0})],t.prototype,"userHasFullEditingPrivileges",void 0),(0,i._)([(0,y.qq)({type:Boolean,readOnly:!0})],t.prototype,"userHasUpdateItemPrivileges",void 0),t=(0,i._)([(0,m.c)("esri.layers.mixins.PortalLayer")],t),t},S={credential:null,user:null}},3116:(e,t,r)=>{r.d(t,{I:()=>s});var i=r(41948),o=r(1580),n=(r(9456),r(66360),r(72052),r(12552));const s=e=>{let t=class extends e{constructor(){super(...arguments),this.minScale=0,this.maxScale=0}get effectiveScaleRange(){const e={minScale:this.minScale,maxScale:this.maxScale},t=this.parent;t&&"effectiveScaleRange"in t&&function(e,t){e.minScale=e.minScale>0?t.minScale>0?Math.min(e.minScale,t.minScale):e.minScale:t.minScale,e.maxScale=e.maxScale>0?t.maxScale>0?Math.max(e.maxScale,t.maxScale):e.maxScale:t.maxScale}(e,t.effectiveScaleRange);const r=this._get("effectiveScaleRange");return r&&r.minScale===e.minScale&&r.maxScale===e.maxScale?r:e}};return(0,i._)([(0,o.qq)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"minScale",void 0),(0,i._)([(0,o.qq)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"maxScale",void 0),(0,i._)([(0,o.qq)({readOnly:!0})],t.prototype,"effectiveScaleRange",null),t=(0,i._)([(0,n.c)("esri.layers.mixins.ScaleRangeLayer")],t),t}},44104:(e,t,r)=>{r.d(t,{G4:()=>y,a:()=>u,iK:()=>g,yq:()=>l});var i=r(41948),o=r(40504),n=r(1580),s=(r(9456),r(66360),r(72052),r(9968)),a=r(12552);let l=class extends o.am{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};(0,i._)([(0,n.qq)({type:Number})],l.prototype,"nodesPerPage",void 0),(0,i._)([(0,n.qq)({type:Number})],l.prototype,"rootIndex",void 0),(0,i._)([(0,n.qq)({type:String})],l.prototype,"lodSelectionMetricType",void 0),l=(0,i._)([(0,a.c)("esri.layer.support.I3SNodePageDefinition")],l);let p=class extends o.am{constructor(){super(...arguments),this.factor=1}};(0,i._)([(0,n.qq)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],p.prototype,"id",void 0),(0,i._)([(0,n.qq)({type:Number})],p.prototype,"factor",void 0),p=(0,i._)([(0,a.c)("esri.layer.support.I3SMaterialTexture")],p);let c=class extends o.am{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};(0,i._)([(0,n.qq)({type:[Number]})],c.prototype,"baseColorFactor",void 0),(0,i._)([(0,n.qq)({type:p})],c.prototype,"baseColorTexture",void 0),(0,i._)([(0,n.qq)({type:p})],c.prototype,"metallicRoughnessTexture",void 0),(0,i._)([(0,n.qq)({type:Number})],c.prototype,"metallicFactor",void 0),(0,i._)([(0,n.qq)({type:Number})],c.prototype,"roughnessFactor",void 0),c=(0,i._)([(0,a.c)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],c);let u=class extends o.am{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};(0,i._)([(0,s.G)({opaque:"opaque",mask:"mask",blend:"blend"})],u.prototype,"alphaMode",void 0),(0,i._)([(0,n.qq)({type:Number})],u.prototype,"alphaCutoff",void 0),(0,i._)([(0,n.qq)({type:Boolean})],u.prototype,"doubleSided",void 0),(0,i._)([(0,s.G)({none:"none",back:"back",front:"front"})],u.prototype,"cullFace",void 0),(0,i._)([(0,n.qq)({type:p})],u.prototype,"normalTexture",void 0),(0,i._)([(0,n.qq)({type:p})],u.prototype,"occlusionTexture",void 0),(0,i._)([(0,n.qq)({type:p})],u.prototype,"emissiveTexture",void 0),(0,i._)([(0,n.qq)({type:[Number]})],u.prototype,"emissiveFactor",void 0),(0,i._)([(0,n.qq)({type:c})],u.prototype,"pbrMetallicRoughness",void 0),u=(0,i._)([(0,a.c)("esri.layer.support.I3SMaterialDefinition")],u);let d=class extends o.am{};(0,i._)([(0,n.qq)({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:`${t.index}`}}})],d.prototype,"name",void 0),(0,i._)([(0,s.G)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],d.prototype,"format",void 0),d=(0,i._)([(0,a.c)("esri.layer.support.I3STextureFormat")],d);let y=class extends o.am{constructor(){super(...arguments),this.atlas=!1}};(0,i._)([(0,n.qq)({type:[d]})],y.prototype,"formats",void 0),(0,i._)([(0,n.qq)({type:Boolean})],y.prototype,"atlas",void 0),y=(0,i._)([(0,a.c)("esri.layer.support.I3STextureSetDefinition")],y);let h=class extends o.am{};(0,i._)([(0,s.G)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],h.prototype,"type",void 0),(0,i._)([(0,n.qq)({type:Number})],h.prototype,"component",void 0),h=(0,i._)([(0,a.c)("esri.layer.support.I3SGeometryAttribute")],h);let m=class extends o.am{};(0,i._)([(0,s.G)({draco:"draco"})],m.prototype,"encoding",void 0),(0,i._)([(0,n.qq)({type:[String]})],m.prototype,"attributes",void 0),m=(0,i._)([(0,a.c)("esri.layer.support.I3SGeometryCompressedAttributes")],m);let f=class extends o.am{constructor(){super(...arguments),this.offset=0}};(0,i._)([(0,n.qq)({type:Number})],f.prototype,"offset",void 0),(0,i._)([(0,n.qq)({type:h})],f.prototype,"position",void 0),(0,i._)([(0,n.qq)({type:h})],f.prototype,"normal",void 0),(0,i._)([(0,n.qq)({type:h})],f.prototype,"uv0",void 0),(0,i._)([(0,n.qq)({type:h})],f.prototype,"color",void 0),(0,i._)([(0,n.qq)({type:h})],f.prototype,"uvRegion",void 0),(0,i._)([(0,n.qq)({type:h})],f.prototype,"featureId",void 0),(0,i._)([(0,n.qq)({type:h})],f.prototype,"faceRange",void 0),(0,i._)([(0,n.qq)({type:m})],f.prototype,"compressedAttributes",void 0),f=(0,i._)([(0,a.c)("esri.layer.support.I3SGeometryBuffer")],f);let g=class extends o.am{};(0,i._)([(0,s.G)({triangle:"triangle"})],g.prototype,"topology",void 0),(0,i._)([(0,n.qq)()],g.prototype,"geometryBuffers",void 0),g=(0,i._)([(0,a.c)("esri.layer.support.I3SGeometryDefinition")],g)},73960:(e,t,r)=>{r.d(t,{e:()=>o});var i=r(28176);function o(e){return n[function(e){return"json"===e.type?"application/json":"blob"===e.type?e.blob.type:function(e){const t=(0,i.wt)(e);return l[t]||s}(e.url)}(e)]||a}const n={},s="text/plain",a=n[s],l={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const e in l)n[l[e]]=e},69204:(e,t,r)=>{function i(e,t){return function(e,t){return t?.mode?t.mode:function(e){return e?l:p}(e).mode}(null!=e&&e.hasZ,t)}function o(e,t,r){return r&&r.mode!==t?`${e} only support ${t} elevation mode`:null}function n(e,t,r){return r?.mode===t?`${e} do not support ${t} elevation mode`:null}function s(e,t){return null!=t?.featureExpressionInfo&&"0"!==t.featureExpressionInfo.expression?`${e} do not support featureExpressionInfo`:null}function a(e,t){t&&e.warn(".elevationInfo=",t)}r.d(t,{A$:()=>a,Ez:()=>o,W8:()=>s,ay:()=>n,m6:()=>i}),r(24296),r(35764);const l={mode:"absolute-height",offset:0},p={mode:"on-the-ground",offset:null}}}]);