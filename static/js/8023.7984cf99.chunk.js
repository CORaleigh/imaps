"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[8023],{28023:(e,t,s)=>{s.r(t),s.d(t,{execute:()=>i});var a=s(10064),r=s(92026);let n;function i(e,t){let s=t.responseType;s?"array-buffer"!==s&&"blob"!==s&&"json"!==s&&"native"!==s&&"native-request-init"!==s&&"text"!==s&&(s="text"):s="json",t.responseType=s;const i=(0,r.Wg)(t.signal);return delete t.signal,globalThis.invokeStaticMessage("request",{url:e,options:t},{signal:i}).then((async r=>{let o,l,u,c,b;if(r.data)if(r.data instanceof ArrayBuffer){if(!("json"!==s&&"text"!==s&&"blob"!==s||(o=new Blob([r.data]),"json"!==s&&"text"!==s||(n||(n=new FileReaderSync),c=n.readAsText(o),"json"!==s)))){try{l=JSON.parse(c||null)}catch(p){const s={...p,url:e,requestOptions:t};throw new a.Z("request:server",p.message,s)}if(l.error){const s={...l.error,url:e,requestOptions:t};throw new a.Z("request:server",l.error.message,s)}}}else"native"===s&&(r.data.signal=i,u=await fetch(r.data.url,r.data),r.httpStatus=u.status);switch(s){case"blob":b=o;break;case"json":b=l;break;case"native":b=u;break;case"text":b=c;break;default:b=r.data}return{data:b,httpStatus:r.httpStatus,requestOptions:t,ssl:r.ssl,url:e}}))}}}]);
//# sourceMappingURL=8023.7984cf99.chunk.js.map