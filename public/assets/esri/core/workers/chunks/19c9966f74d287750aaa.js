"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[4998],{92835:(t,e,n)=>{n.d(e,{Z:()=>h});var r,i=n(43697),o=n(96674),s=n(35463),l=n(5600),a=(n(75215),n(67676),n(80442),n(71715)),u=n(52011),c=n(30556),p=n(25031);let d=r=class extends o.wq{static get allTime(){return y}static get empty(){return f}constructor(t){super(t),this.end=null,this.start=null}readEnd(t,e){return null!=e.end?new Date(e.end):null}writeEnd(t,e){e.end=t?.getTime()??null}get isAllTime(){return this.equals(r.allTime)}get isEmpty(){return this.equals(r.empty)}readStart(t,e){return null!=e.start?new Date(e.start):null}writeStart(t,e){e.start=t?.getTime()??null}clone(){return new r({end:this.end,start:this.start})}equals(t){if(!t)return!1;const e=this.start?.getTime()??this.start,n=this.end?.getTime()??this.end,r=t.start?.getTime()??t.start,i=t.end?.getTime()??t.end;return e===r&&n===i}expandTo(t,e=p.By){if(this.isEmpty||this.isAllTime)return this.clone();let n=this.start;n&&(n=(0,s.JE)(n,t,e));let i=this.end;if(i){const n=(0,s.JE)(i,t,e);i=i.getTime()===n.getTime()?n:(0,s.Nm)(n,1,t,e)}return new r({start:n,end:i})}intersection(t){if(!t)return this.clone();if(this.isEmpty||t.isEmpty)return r.empty;if(this.isAllTime)return t.clone();if(t.isAllTime)return this.clone();const e=this.start?.getTime()??-1/0,n=this.end?.getTime()??1/0,i=t.start?.getTime()??-1/0,o=t.end?.getTime()??1/0;let s,l;if(i>=e&&i<=n?s=i:e>=i&&e<=o&&(s=e),n>=i&&n<=o?l=n:o>=e&&o<=n&&(l=o),null!=s&&null!=l&&!isNaN(s)&&!isNaN(l)){const t=new r;return t.start=s===-1/0?null:new Date(s),t.end=l===1/0?null:new Date(l),t}return r.empty}offset(t,e,n=p.By){if(this.isEmpty||this.isAllTime)return this.clone();const i=new r,{start:o,end:l}=this;return null!=o&&(i.start=(0,s.Nm)(o,t,e,n)),null!=l&&(i.end=(0,s.Nm)(l,t,e,n)),i}union(t){if(!t||t.isEmpty)return this.clone();if(this.isEmpty)return t.clone();if(this.isAllTime||t.isAllTime)return y.clone();const e=null!=this.start&&null!=t.start?new Date(Math.min(this.start.getTime(),t.start.getTime())):null,n=null!=this.end&&null!=t.end?new Date(Math.max(this.end.getTime(),t.end.getTime())):null;return new r({start:e,end:n})}};(0,i._)([(0,l.Cb)({type:Date,json:{write:{allowNull:!0}}})],d.prototype,"end",void 0),(0,i._)([(0,a.r)("end")],d.prototype,"readEnd",null),(0,i._)([(0,c.c)("end")],d.prototype,"writeEnd",null),(0,i._)([(0,l.Cb)({readOnly:!0,json:{read:!1}})],d.prototype,"isAllTime",null),(0,i._)([(0,l.Cb)({readOnly:!0,json:{read:!1}})],d.prototype,"isEmpty",null),(0,i._)([(0,l.Cb)({type:Date,json:{write:{allowNull:!0}}})],d.prototype,"start",void 0),(0,i._)([(0,a.r)("start")],d.prototype,"readStart",null),(0,i._)([(0,c.c)("start")],d.prototype,"writeStart",null),d=r=(0,i._)([(0,u.j)("esri.TimeExtent")],d);const y=new d,f=new d({start:void 0,end:void 0}),h=d},4757:(t,e,n)=>{n.d(e,{Z:()=>y});var r=n(43697),i=n(92036),o=n(67676),s=n(2368),l=n(10699),a=n(96674),u=n(5600),c=(n(75215),n(80442),n(52011));let p=0,d=class extends((0,a.eC)((0,s.J)((0,l.IG)(i.Z)))){constructor(t){super(t),this.id=`${Date.now().toString(16)}-analysis-${p++}`,this.title=null}get parent(){return this._get("parent")}set parent(t){const e=this.parent;if(null!=e)switch(e.type){case"line-of-sight":case"dimension":e.releaseAnalysis(this);break;case"2d":case"3d":e.analyses.includes(this)&&e.analyses.remove(this)}this._set("parent",t)}get isEditable(){return this.requiredPropertiesForEditing.every(o.pC)}};(0,r._)([(0,u.Cb)({type:String,constructOnly:!0,clonable:!1})],d.prototype,"id",void 0),(0,r._)([(0,u.Cb)({type:String})],d.prototype,"title",void 0),(0,r._)([(0,u.Cb)({constructOnly:!0})],d.prototype,"type",void 0),(0,r._)([(0,u.Cb)({clonable:!1,value:null})],d.prototype,"parent",null),(0,r._)([(0,u.Cb)({readOnly:!0})],d.prototype,"isEditable",null),(0,r._)([(0,u.Cb)({readOnly:!0})],d.prototype,"requiredPropertiesForEditing",void 0),d=(0,r._)([(0,c.j)("esri.analysis.Analysis")],d);const y=d},2368:(t,e,n)=>{n.d(e,{J:()=>c,j:()=>p});var r=n(43697),i=n(92036),o=(n(80442),n(22974)),s=(n(92604),n(70586)),l=n(31263),a=n(1153),u=n(52011);const c=t=>{let e=class extends t{clone(){const t=(0,a.vw)(this);(0,s.O3)(t,"unable to clone instance of non-accessor class");const e=t.metadatas,n=t.store,r={},i=new Map;for(const t in e){const s=e[t],a=n?.originOf(t),u=s.clonable;if(s.readOnly||!1===u||a!==l.s3.USER&&a!==l.s3.DEFAULTS&&a!==l.s3.WEB_MAP&&a!==l.s3.WEB_SCENE)continue;const c=this[t];let p=null;p="function"==typeof u?u(c):"reference"===u?c:(0,o.Vo)(c),null!=c&&null==p||(a===l.s3.DEFAULTS?i.set(t,p):r[t]=p)}const u=new(0,Object.getPrototypeOf(this).constructor)(r);if(i.size){const t=(0,a.vw)(u)?.store;if(t)for(const[e,n]of i)t.set(e,n,l.s3.DEFAULTS)}return u}};return e=(0,r._)([(0,u.j)("esri.core.Clonable")],e),e};let p=class extends(c(i.Z)){};p=(0,r._)([(0,u.j)("esri.core.Clonable")],p)},10699:(t,e,n)=>{n.d(e,{IG:()=>s,iv:()=>l});var r=n(43697),i=n(52011);let o=0;const s=t=>{let e=class extends t{constructor(...t){super(...t),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+o++})}};return e=(0,r._)([(0,i.j)("esri.core.Identifiable")],e),e},l=t=>{let e=class extends t{constructor(...t){super(...t),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:o++})}};return e=(0,r._)([(0,i.j)("esri.core.NumericIdentifiable")],e),e};let a=class extends(s(class{})){};a=(0,r._)([(0,i.j)("esri.core.Identifiable")],a)},44543:(t,e,n)=>{n.d(e,{F:()=>h,M:()=>r});const r={Base64:0,Hex:1,String:2,Raw:3},i=8,o=(1<<i)-1;function s(t,e){const n=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(n>>16)<<16|65535&n}function l(t){const e=[];for(let n=0,r=t.length*i;n<r;n+=i)e[n>>5]|=(t.charCodeAt(n/i)&o)<<n%32;return e}function a(t){const e=[];for(let n=0,r=32*t.length;n<r;n+=i)e.push(String.fromCharCode(t[n>>5]>>>n%32&o));return e.join("")}function u(t,e,n,r,i,o){return s(function(t,e){return t<<e|t>>>32-e}(s(s(e,t),s(r,o)),i),n)}function c(t,e,n,r,i,o,s){return u(e&n|~e&r,t,e,i,o,s)}function p(t,e,n,r,i,o,s){return u(e&r|n&~r,t,e,i,o,s)}function d(t,e,n,r,i,o,s){return u(e^n^r,t,e,i,o,s)}function y(t,e,n,r,i,o,s){return u(n^(e|~r),t,e,i,o,s)}function f(t,e){t[e>>5]|=128<<e%32,t[14+(e+64>>>9<<4)]=e;let n=1732584193,r=-271733879,i=-1732584194,o=271733878;for(let e=0;e<t.length;e+=16){const l=n,a=r,u=i,f=o;n=c(n,r,i,o,t[e],7,-680876936),o=c(o,n,r,i,t[e+1],12,-389564586),i=c(i,o,n,r,t[e+2],17,606105819),r=c(r,i,o,n,t[e+3],22,-1044525330),n=c(n,r,i,o,t[e+4],7,-176418897),o=c(o,n,r,i,t[e+5],12,1200080426),i=c(i,o,n,r,t[e+6],17,-1473231341),r=c(r,i,o,n,t[e+7],22,-45705983),n=c(n,r,i,o,t[e+8],7,1770035416),o=c(o,n,r,i,t[e+9],12,-1958414417),i=c(i,o,n,r,t[e+10],17,-42063),r=c(r,i,o,n,t[e+11],22,-1990404162),n=c(n,r,i,o,t[e+12],7,1804603682),o=c(o,n,r,i,t[e+13],12,-40341101),i=c(i,o,n,r,t[e+14],17,-1502002290),r=c(r,i,o,n,t[e+15],22,1236535329),n=p(n,r,i,o,t[e+1],5,-165796510),o=p(o,n,r,i,t[e+6],9,-1069501632),i=p(i,o,n,r,t[e+11],14,643717713),r=p(r,i,o,n,t[e],20,-373897302),n=p(n,r,i,o,t[e+5],5,-701558691),o=p(o,n,r,i,t[e+10],9,38016083),i=p(i,o,n,r,t[e+15],14,-660478335),r=p(r,i,o,n,t[e+4],20,-405537848),n=p(n,r,i,o,t[e+9],5,568446438),o=p(o,n,r,i,t[e+14],9,-1019803690),i=p(i,o,n,r,t[e+3],14,-187363961),r=p(r,i,o,n,t[e+8],20,1163531501),n=p(n,r,i,o,t[e+13],5,-1444681467),o=p(o,n,r,i,t[e+2],9,-51403784),i=p(i,o,n,r,t[e+7],14,1735328473),r=p(r,i,o,n,t[e+12],20,-1926607734),n=d(n,r,i,o,t[e+5],4,-378558),o=d(o,n,r,i,t[e+8],11,-2022574463),i=d(i,o,n,r,t[e+11],16,1839030562),r=d(r,i,o,n,t[e+14],23,-35309556),n=d(n,r,i,o,t[e+1],4,-1530992060),o=d(o,n,r,i,t[e+4],11,1272893353),i=d(i,o,n,r,t[e+7],16,-155497632),r=d(r,i,o,n,t[e+10],23,-1094730640),n=d(n,r,i,o,t[e+13],4,681279174),o=d(o,n,r,i,t[e],11,-358537222),i=d(i,o,n,r,t[e+3],16,-722521979),r=d(r,i,o,n,t[e+6],23,76029189),n=d(n,r,i,o,t[e+9],4,-640364487),o=d(o,n,r,i,t[e+12],11,-421815835),i=d(i,o,n,r,t[e+15],16,530742520),r=d(r,i,o,n,t[e+2],23,-995338651),n=y(n,r,i,o,t[e],6,-198630844),o=y(o,n,r,i,t[e+7],10,1126891415),i=y(i,o,n,r,t[e+14],15,-1416354905),r=y(r,i,o,n,t[e+5],21,-57434055),n=y(n,r,i,o,t[e+12],6,1700485571),o=y(o,n,r,i,t[e+3],10,-1894986606),i=y(i,o,n,r,t[e+10],15,-1051523),r=y(r,i,o,n,t[e+1],21,-2054922799),n=y(n,r,i,o,t[e+8],6,1873313359),o=y(o,n,r,i,t[e+15],10,-30611744),i=y(i,o,n,r,t[e+6],15,-1560198380),r=y(r,i,o,n,t[e+13],21,1309151649),n=y(n,r,i,o,t[e+4],6,-145523070),o=y(o,n,r,i,t[e+11],10,-1120210379),i=y(i,o,n,r,t[e+2],15,718787259),r=y(r,i,o,n,t[e+9],21,-343485551),n=s(n,l),r=s(r,a),i=s(i,u),o=s(o,f)}return[n,r,i,o]}function h(t,e=r.Hex){const n=e||r.Base64,o=f(l(t),t.length*i);switch(n){case r.Raw:return o;case r.Hex:return function(t){const e="0123456789abcdef",n=[];for(let r=0,i=4*t.length;r<i;r++)n.push(e.charAt(t[r>>2]>>r%4*8+4&15)+e.charAt(t[r>>2]>>r%4*8&15));return n.join("")}(o);case r.String:return a(o);case r.Base64:return function(t){const e=[];for(let n=0,r=4*t.length;n<r;n+=3){const r=(t[n>>2]>>n%4*8&255)<<16|(t[n+1>>2]>>(n+1)%4*8&255)<<8|t[n+2>>2]>>(n+2)%4*8&255;for(let i=0;i<4;i++)8*n+6*i>32*t.length?e.push("="):e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(r>>6*(3-i)&63))}return e.join("")}(o)}}},28576:(t,e,n)=>{n.d(e,{B:()=>y});var r=n(20102),i=n(44543),o=n(81153),s=n(17452),l=n(41123),a=n(7628),u=n(31263),c=n(5600),p=n(66094),d=n(25929);function y(t){const e=t?.origins??[void 0];return(n,r)=>{const i=function(t,e,n){if("resource"===t?.type)return function(t,e,n){const r=(0,a.Oe)(e,n);return{type:String,read:(t,e,n)=>{const i=(0,d.r)(t,e,n);return r.type===String?i:"function"==typeof r.type?new r.type({url:i}):void 0},write:{writer(e,i,l,a){if(!a?.resources)return"string"==typeof e?void(i[l]=(0,d.t)(e,a)):void(i[l]=e.write({},a));const c=function(t){return null==t?null:"string"==typeof t?t:t.url}(e),y=(0,d.t)(c,{...a,verifyItemRelativeUrls:a?.verifyItemRelativeUrls?{writtenUrls:a.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},d.M.NO),g=r.type!==String&&(!(0,o.l)(this)||a?.origin&&this.originIdOf(n)>(0,u.M9)(a.origin)),b={object:this,propertyName:n,value:e,targetUrl:y,dest:i,targetPropertyName:l,context:a,params:t};a?.portalItem&&y&&!(0,s.YP)(y)?g&&t?.contentAddressed?f(b):g?function(t){const{context:e,targetUrl:n,params:r,value:i,dest:o,targetPropertyName:l}=t;if(!e.portalItem)return;const a=e.portalItem.resourceFromPath(n),u=m(i,n,e),c=(0,p.B)(u),d=(0,s.Ml)(a.path),y=r?.compress??!1;c===d?(e.resources&&h({...t,resource:a,content:u,compress:y,updates:e.resources.toUpdate}),o[l]=n):f(t)}(b):function({context:t,targetUrl:e,dest:n,targetPropertyName:r}){t.portalItem&&t.resources&&(t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(e),compress:!1}),n[r]=e)}(b):a?.portalItem&&(null==y||null!=(0,d.i)(y)||(0,s.jc)(y)||g)?f(b):i[l]=y}}}}(t,e,n);switch(t?.type??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:t,write:e}=d.a;return{read:t,write:e}}}}(t,n,r);for(const t of e){const e=(0,c.CJ)(n,t,r);for(const t in i)e[t]=i[t]}}}function f(t){const{targetUrl:e,params:n,value:o,context:a,dest:u,targetPropertyName:c}=t;if(!a.portalItem)return;const y=(0,d.p)(e),f=m(o,e,a);if(n?.contentAddressed&&"json"!==f.type)return void a.messages?.push(new r.Z("persistable:contentAddressingUnsupported",`Property "${c}" is trying to serializing a resource with content of type ${f.type} with content addressing. Content addressing is only supported for json resources.`,{content:f}));const g=n?.contentAddressed&&"json"===f.type?(0,i.F)(f.jsonString):y?.filename??(0,l.D)(),b=(0,s.v_)(n?.prefix??y?.prefix,g),v=`${b}.${(0,p.B)(f)}`;if(n?.contentAddressed&&a.resources&&"json"===f.type){const t=a.resources.toKeep.find((t=>t.resource.path===v))??a.resources.toAdd.find((t=>t.resource.path===v));if(t)return void(u[c]=t.resource.itemRelativeUrl)}const w=a.portalItem.resourceFromPath(v);(0,s.jc)(e)&&a.resources&&a.resources.pendingOperations.push((0,s.gi)(e).then((t=>{w.path=`${b}.${(0,p.B)({type:"blob",blob:t})}`,u[c]=w.itemRelativeUrl})).catch((()=>{})));const _=n?.compress??!1;a.resources&&h({...t,resource:w,content:f,compress:_,updates:a.resources.toAdd}),u[c]=w.itemRelativeUrl}function h({object:t,propertyName:e,updates:n,resource:r,content:i,compress:o}){n.push({resource:r,content:i,compress:o,finish:n=>{!function(t,e,n){"string"==typeof t[e]?t[e]=n.url:t[e].url=n.url}(t,e,n)}})}function m(t,e,n){return"string"==typeof t?{type:"url",url:e}:{type:"json",jsonString:JSON.stringify(t.toJSON(n))}}},81153:(t,e,n)=>{function r(t){return t&&"getAtOrigin"in t&&"originOf"in t}n.d(e,{l:()=>r})},17445:(t,e,n)=>{n.d(e,{N1:()=>d,YP:()=>a,Z_:()=>h,gx:()=>u,nn:()=>m,on:()=>p,tX:()=>g}),n(66643),n(46791);var r=n(91460),i=n(50758),o=n(70586),s=n(95330),l=n(26258);function a(t,e,n={}){return c(t,e,n,y)}function u(t,e,n={}){return c(t,e,n,f)}function c(t,e,n={},r){let i=null;const s=n.once?(t,n)=>{r(t)&&((0,o.hw)(i),e(t,n))}:(t,n)=>{r(t)&&e(t,n)};if(i=(0,l.aQ)(t,s,n.sync,n.equals),n.initial){const e=t();s(e,e)}return i}function p(t,e,n,s={}){let l=null,u=null,c=null;function p(){l&&u&&(u.remove(),s.onListenerRemove?.(l),l=null,u=null)}function d(t){s.once&&s.once&&(0,o.hw)(c),n(t)}const y=a(t,((t,n)=>{p(),(0,r.vT)(t)&&(l=t,u=(0,r.on)(t,e,d),s.onListenerAdd?.(t))}),{sync:s.sync,initial:!0});return c=(0,i.kB)((()=>{y.remove(),p()})),c}function d(t,e){return function(t,e,n){if((0,s.Hc)(n))return Promise.reject((0,s.zE)());const r=t();if(e?.(r))return Promise.resolve(r);let l=null;function a(){l=(0,o.hw)(l)}return new Promise(((r,o)=>{l=(0,i.AL)([(0,s.fu)(n,(()=>{a(),o((0,s.zE)())})),c(t,(t=>{a(),r(t)}),{sync:!1,once:!0},e??y)])}))}(t,f,e)}function y(t){return!0}function f(t){return!!t}n(87538);const h={sync:!0},m={initial:!0},g={sync:!0,initial:!0}},41123:(t,e,n)=>{n.d(e,{D:()=>i,z:()=>o});const r="randomUUID"in crypto;function i(){if(r)return crypto.randomUUID();const t=crypto.getRandomValues(new Uint16Array(8));t[3]=4095&t[3]|16384,t[4]=16383&t[4]|32768;const e=e=>t[e].toString(16).padStart(4,"0");return e(0)+e(1)+"-"+e(2)+"-"+e(3)+"-"+e(4)+"-"+e(5)+e(6)+e(7)}function o(){return`{${i()}}`}},60437:(t,e,n)=>{n.d(e,{G_:()=>b,HH:()=>s,JR:()=>f,TC:()=>l,Tn:()=>p,Ue:()=>i,al:()=>o,bZ:()=>h,cS:()=>y,dp:()=>u,fS:()=>g,is:()=>m,op:()=>c,pp:()=>a,t8:()=>d});var r=n(6570);function i(t=v){return[t[0],t[1],t[2],t[3],t[4],t[5]]}function o(t,e,n,r,o,s,l=i()){return l[0]=t,l[1]=e,l[2]=n,l[3]=r,l[4]=o,l[5]=s,l}function s(t,e){const n=isFinite(t[2])||isFinite(t[5]);return new r.Z(n?{xmin:t[0],xmax:t[3],ymin:t[1],ymax:t[4],zmin:t[2],zmax:t[5],spatialReference:e}:{xmin:t[0],xmax:t[3],ymin:t[1],ymax:t[4],spatialReference:e})}function l(t,e){t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.min(t[2],e[2]),t[3]=Math.max(t[3],e[3]),t[4]=Math.max(t[4],e[4]),t[5]=Math.max(t[5],e[5])}function a(t,e){t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.min(t[2],e[2]),t[3]=Math.max(t[3],e[0]),t[4]=Math.max(t[4],e[1]),t[5]=Math.max(t[5],e[2])}function u(t,e=[0,0,0]){return e[0]=function(t){return t[0]>=t[3]?0:t[3]-t[0]}(t),e[1]=function(t){return t[1]>=t[4]?0:t[4]-t[1]}(t),e[2]=function(t){return t[2]>=t[5]?0:t[5]-t[2]}(t),e}function c(t,e,n=t){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n!==t&&(n[3]=t[3],n[4]=t[4],n[5]=t[5]),n}function p(t,e,n=t){return n[3]=e[0],n[4]=e[1],n[5]=e[2],n!==t&&(n[0]=t[0],n[1]=t[1],n[2]=t[2]),t}function d(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t}function y(t){return t?d(t,b):i(b)}function f(t,e){return t[0]=e[0],t[1]=e[1],t[2]=Number.NEGATIVE_INFINITY,t[3]=e[2],t[4]=e[3],t[5]=Number.POSITIVE_INFINITY,t}function h(t,e,n,r,i){return t[0]=e,t[1]=n,t[2]=Number.NEGATIVE_INFINITY,t[3]=r,t[4]=i,t[5]=Number.POSITIVE_INFINITY,t}function m(t){return 6===t.length}function g(t,e,n){if(null==t||null==e)return t===e;if(!m(t)||!m(e))return!1;if(n){for(let r=0;r<t.length;r++)if(!n(t[r],e[r]))return!1}else for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}n(24470);const b=[1/0,1/0,1/0,-1/0,-1/0,-1/0],v=[0,0,0,0,0,0];i()},87085:(t,e,n)=>{n.d(e,{Z:()=>v});var r=n(43697),i=(n(66577),n(3172)),o=n(20102),s=n(32448),l=n(10699),a=n(83379),u=n(92604),c=n(95330),p=n(17452),d=n(5600),y=(n(75215),n(67676),n(80442),n(52011)),f=n(68773),h=n(6570),m=n(82971);let g=0,b=class extends(s.Z.EventedMixin((0,l.IG)(a.Z))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new h.Z(-180,-90,180,90,m.Z.WGS84),this.id=Date.now().toString(16)+"-layer-"+g++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.persistenceEnabled=!1,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=m.Z.WGS84,this.title=null,this.type=null,this.url=null,this.visible=!0}static async fromArcGISServerUrl(t){const e="string"==typeof t?{url:t}:t;return(await n.e(3529).then(n.bind(n,63529))).fromUrl(e)}static fromPortalItem(t){return async function(t){const e="portalItem"in t?t:{portalItem:t},{fromItem:r}=await n.e(8008).then(n.bind(n,28008));try{return await r(e)}catch(t){const n=e&&e.portalItem,r=n?.id||"unset",i=n&&n.portal&&n.portal.url||f.default.portalUrl;throw u.Z.getLogger("esri.layers.support.fromPortalItem").error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+i+"', id: '"+r+"')",t),t}}(t)}initialize(){this.when().catch((t=>{(0,c.D_)(t)||u.Z.getLogger(this).error("#load()",`Failed to load layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}')`,{error:t})}))}destroy(){const t=this.parent;if(t){const e=this;"layers"in t&&t.layers.includes(e)?t.layers.remove(e):"tables"in t&&t.tables.includes(e)?t.tables.remove(e):"baseLayers"in t&&t.baseLayers.includes(e)?t.baseLayers.remove(e):"referenceLayers"in t&&t.referenceLayers.includes(e)&&t.referenceLayers.remove(e),this._set("parent",null)}}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){return(0,p.mN)(this.url)}async fetchAttributionData(){const t=this.attributionDataUrl;if(this.hasAttributionData&&t)return(await(0,i.Z)(t,{query:{f:"json"},responseType:"json"})).data;throw new o.Z("layer:no-attribution-data","Layer does not have attribution data")}};(0,r._)([(0,d.Cb)({type:String})],b.prototype,"attributionDataUrl",void 0),(0,r._)([(0,d.Cb)({type:h.Z})],b.prototype,"fullExtent",void 0),(0,r._)([(0,d.Cb)({readOnly:!0})],b.prototype,"hasAttributionData",null),(0,r._)([(0,d.Cb)({type:String,clonable:!1})],b.prototype,"id",void 0),(0,r._)([(0,d.Cb)({type:Boolean,nonNullable:!0})],b.prototype,"legendEnabled",void 0),(0,r._)([(0,d.Cb)({type:["show","hide","hide-children"]})],b.prototype,"listMode",void 0),(0,r._)([(0,d.Cb)({type:Number,range:{min:0,max:1},nonNullable:!0})],b.prototype,"opacity",void 0),(0,r._)([(0,d.Cb)({clonable:!1})],b.prototype,"parent",void 0),(0,r._)([(0,d.Cb)({readOnly:!0})],b.prototype,"parsedUrl",null),(0,r._)([(0,d.Cb)({type:Boolean,readOnly:!0})],b.prototype,"persistenceEnabled",void 0),(0,r._)([(0,d.Cb)({type:Boolean})],b.prototype,"popupEnabled",void 0),(0,r._)([(0,d.Cb)({type:Boolean})],b.prototype,"attributionVisible",void 0),(0,r._)([(0,d.Cb)({type:m.Z})],b.prototype,"spatialReference",void 0),(0,r._)([(0,d.Cb)({type:String})],b.prototype,"title",void 0),(0,r._)([(0,d.Cb)({readOnly:!0,json:{read:!1}})],b.prototype,"type",void 0),(0,r._)([(0,d.Cb)()],b.prototype,"url",void 0),(0,r._)([(0,d.Cb)({type:Boolean,nonNullable:!0})],b.prototype,"visible",void 0),b=(0,r._)([(0,y.j)("esri.layers.Layer")],b);const v=b},21786:(t,e,n)=>{n.r(e),n.d(e,{default:()=>R});var r=n(43697),i=n(4757);function o(t,e){return s(t)===s(e)}function s(t){if(null==t)return null;const e=null!=t.layer?t.layer.id:"";let n=null;return n=null!=t.objectId?t.objectId:null!=t.layer&&"objectIdField"in t.layer&&null!=t.layer.objectIdField&&null!=t.attributes?t.attributes[t.layer.objectIdField]:t.uid,null==n?null:`o-${e}-${n}`}const l={json:{write:{writer:function(t,e){null!=t?.layer?.objectIdField&&null!=t.attributes&&(e.feature={layerId:t.layer.id,objectId:t.attributes[t.layer.objectIdField]})},target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:function(t){if(null!=t.layerId&&null!=t.objectId)return{uid:null,layer:{id:t.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:t.objectId}}}}}}};var a=n(92036),u=n(2368),c=n(96674),p=n(70586),d=n(5600),y=(n(75215),n(67676),n(80442),n(52011)),f=n(28576),h=n(94139),m=n(86787);let g=class extends((0,c.eC)((0,u.J)(a.Z))){constructor(t){super(t),this.position=null,this.elevationInfo=null,this.feature=null}equals(t){return(0,p._W)(this.position,t.position)&&(0,p._W)(this.elevationInfo,t.elevationInfo)&&o(this.feature,t.feature)}};(0,r._)([(0,d.Cb)({type:h.Z,json:{write:{isRequired:!0}}})],g.prototype,"position",void 0),(0,r._)([(0,d.Cb)({type:m.Z}),(0,f.B)()],g.prototype,"elevationInfo",void 0),(0,r._)([(0,d.Cb)(l)],g.prototype,"feature",void 0),g=(0,r._)([(0,y.j)("esri.analysis.LineOfSightAnalysisObserver")],g);const b=g;let v=class extends((0,c.eC)(u.j)){constructor(t){super(t),this.position=null,this.elevationInfo=null,this.feature=null}equals(t){return(0,p._W)(this.position,t.position)&&(0,p._W)(this.elevationInfo,t.elevationInfo)&&o(this.feature,t.feature)}};(0,r._)([(0,d.Cb)({type:h.Z}),(0,f.B)()],v.prototype,"position",void 0),(0,r._)([(0,d.Cb)({type:m.Z}),(0,f.B)()],v.prototype,"elevationInfo",void 0),(0,r._)([(0,d.Cb)(l)],v.prototype,"feature",void 0),v=(0,r._)([(0,y.j)("esri.analysis.LineOfSightAnalysisTarget")],v);const w=v;var _=n(46791),I=n(70921),x=n(17445),j=n(73615),C=n(60437),E=n(36405);const T=_.Z.ofType(w);let O=class extends i.Z{constructor(t){super(t),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles((0,x.YP)((()=>this._computeExtent()),(t=>{null==t?.pending&&this._set("extent",null!=t?t.extent:null)}),x.tX))}get targets(){return this._get("targets")||new T}set targets(t){this._set("targets",(0,I.Z)(t,this.targets,T))}get spatialReference(){return null!=this.observer?.position?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){return[this.observer?.position]}async waitComputeExtent(){const t=this._computeExtent();return null!=t?t.pending:Promise.resolve()}_computeExtent(){const t=this.spatialReference;if(null==this.observer?.position||null==t)return null;const e=t=>"absolute-height"===(0,E.VW)(t.position,t.elevationInfo),n=this.observer.position,r=(0,C.al)(n.x,n.y,n.z,n.x,n.y,n.z);for(const e of this.targets)if(null!=e.position){const n=(0,j.projectOrLoad)(e.position,t);if(null!=n.pending)return{pending:n.pending,extent:null};if(null!=n.geometry){const{x:t,y:e,z:i}=n.geometry;(0,C.pp)(r,[t,e,i])}}const i=(0,C.HH)(r,t);return e(this.observer)&&this.targets.every(e)||(i.zmin=void 0,i.zmax=void 0),{pending:null,extent:i}}clear(){this.observer=null,this.targets.removeAll()}};(0,r._)([(0,d.Cb)({type:["line-of-sight"]})],O.prototype,"type",void 0),(0,r._)([(0,d.Cb)({type:b,json:{read:!0,write:!0}})],O.prototype,"observer",void 0),(0,r._)([(0,d.Cb)({cast:I.R,type:T,nonNullable:!0,json:{read:!0,write:!0}})],O.prototype,"targets",null),(0,r._)([(0,d.Cb)({value:null,readOnly:!0})],O.prototype,"extent",void 0),(0,r._)([(0,d.Cb)({readOnly:!0})],O.prototype,"spatialReference",null),(0,r._)([(0,d.Cb)({readOnly:!0})],O.prototype,"requiredPropertiesForEditing",null),O=(0,r._)([(0,y.j)("esri.analysis.LineOfSightAnalysis")],O);const S=O;var N=n(16453),A=n(87085),U=n(38009);const Z=_.Z.ofType(w);let P=class extends((0,U.q)((0,N.R)(A.Z))){constructor(t){super(t),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new S,this.opacity=1}initialize(){this.addHandles((0,x.YP)((()=>this.analysis),((t,e)=>{null!=e&&e.parent===this&&(e.parent=null),null!=t&&(t.parent=this)}),x.tX))}async load(){return null!=this.analysis&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){return this.analysis?.observer}set observer(t){const{analysis:e}=this;e&&(e.observer=t)}get targets(){return null!=this.analysis?this.analysis.targets:new _.Z}set targets(t){(0,I.Z)(t,this.analysis?.targets)}get fullExtent(){return null!=this.analysis?this.analysis.extent:null}get spatialReference(){return null!=this.analysis?this.analysis.spatialReference:null}releaseAnalysis(t){this.analysis===t&&(this.analysis=new S)}};(0,r._)([(0,d.Cb)({json:{read:!1},readOnly:!0})],P.prototype,"type",void 0),(0,r._)([(0,d.Cb)({type:["LineOfSightLayer"]})],P.prototype,"operationalLayerType",void 0),(0,r._)([(0,d.Cb)({type:b,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],P.prototype,"observer",null),(0,r._)([(0,d.Cb)({type:Z,json:{read:!0,write:{ignoreOrigin:!0}}})],P.prototype,"targets",null),(0,r._)([(0,d.Cb)({nonNullable:!0,json:{read:!1,write:!1}})],P.prototype,"analysis",void 0),(0,r._)([(0,d.Cb)({readOnly:!0})],P.prototype,"fullExtent",null),(0,r._)([(0,d.Cb)({readOnly:!0})],P.prototype,"spatialReference",null),(0,r._)([(0,d.Cb)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],P.prototype,"opacity",void 0),(0,r._)([(0,d.Cb)({type:["show","hide"]})],P.prototype,"listMode",void 0),P=(0,r._)([(0,y.j)("esri.layers.LineOfSightLayer")],P);const R=P},66094:(t,e,n)=>{n.d(e,{B:()=>i});var r=n(17452);function i(t){return o[function(t){return"json"===t.type?"application/json":"blob"===t.type?t.blob.type:function(t){const e=(0,r.Ml)(t);return a[e]||s}(t.url)}(t)]||l}const o={},s="text/plain",l=o[s],a={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const t in a)o[a[t]]=t},36405:(t,e,n)=>{function r(t,e){return e?.mode?e.mode:function(t){return t?u:c}(t).mode}function i(t,e){return r(null!=t&&t.hasZ,e)}function o(t,e,n){return n&&n.mode!==e?`${t} only support ${e} elevation mode`:null}function s(t,e,n){return n?.mode===e?`${t} do not support ${e} elevation mode`:null}function l(t,e){return null!=e?.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression?`${t} do not support featureExpressionInfo`:null}function a(t,e){e&&t.warn(".elevationInfo=",e)}n.d(e,{LR:()=>a,Uy:()=>o,VW:()=>i,Wb:()=>s,kf:()=>l}),n(12541);const u={mode:"absolute-height",offset:0},c={mode:"on-the-ground",offset:null}}}]);