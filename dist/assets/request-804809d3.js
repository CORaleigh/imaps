import{aw as d,ae as b}from"./index-3baec1e8.js";let c;function w(n,s){let e=s.responseType;e?e!=="array-buffer"&&e!=="blob"&&e!=="json"&&e!=="native"&&e!=="native-request-init"&&e!=="text"&&(e="text"):e="json",s.responseType=e;const p=d(s.signal);return delete s.signal,globalThis.invokeStaticMessage("request",{url:n,options:s},{signal:p}).then(async t=>{let i,r,l,u,a;if(t.data)if(t.data instanceof ArrayBuffer){if(!(e!=="json"&&e!=="text"&&e!=="blob"||(i=new Blob([t.data]),e!=="json"&&e!=="text"||(c||(c=new FileReaderSync),u=c.readAsText(i),e!=="json")))){try{r=JSON.parse(u||null)}catch(o){const f={...o,url:n,requestOptions:s};throw new b("request:server",o.message,f)}if(r.error){const o={...r.error,url:n,requestOptions:s};throw new b("request:server",r.error.message,o)}}}else e==="native"&&(t.data.signal=p,l=await fetch(t.data.url,t.data),t.httpStatus=l.status);switch(e){case"blob":a=i;break;case"json":a=r;break;case"native":a=l;break;case"text":a=u;break;default:a=t.data}return{data:a,httpStatus:t.httpStatus,requestOptions:s,ssl:t.ssl,url:n}})}export{w as execute};
