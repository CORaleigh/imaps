import{kB as k,kC as P,kD as N,kE as d,kF as x,kG as _,kH as O,iw as R,kI as $,kr as y,kJ as b,kK as S,h1 as j,kL as F,_ as J,kM as E}from"./index-7753bab1.js";import{t as f}from"./resourceExtension-c4ba4cb6.js";function H(e){const o=(e==null?void 0:e.origins)??[void 0];return(t,n)=>{const s=A(e,t,n);for(const a of o){const i=k(t,a,n);for(const r in s)i[r]=s[r]}}}function A(e,o,t){if((e==null?void 0:e.type)==="resource")return B(e,o,t);switch((e==null?void 0:e.type)??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:n,write:s}=E;return{read:n,write:s}}}}function B(e,o,t){const n=P(o,t);return{type:String,read:(s,a,i)=>{const r=N(s,a,i);return n.type===String?r:typeof n.type=="function"?new n.type({url:r}):void 0},write:{writer(s,a,i,r){if(!r||!r.resources)return typeof s=="string"?void(a[i]=d(s,r)):void(a[i]=s.write({},r));const l=T(s),p=d(l,{...r,verifyItemRelativeUrls:r&&r.verifyItemRelativeUrls?{writtenUrls:r.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},x.NO),c=n.type!==String&&(!_(this)||r&&r.origin&&this.originIdOf(t)>O(r.origin)),u={object:this,propertyName:t,value:s,targetUrl:p,dest:a,targetPropertyName:i,context:r,params:e};r&&r.portalItem&&p&&!R(p)?c?D(u):K(u):r&&r.portalItem&&(p==null||$(p)!=null||y(p)||c)?g(u):a[i]=p}}}}function g(e){const{targetUrl:o,params:t,value:n,context:s,dest:a,targetPropertyName:i}=e;if(!s.portalItem)return;const r=b(o),l=(r==null?void 0:r.filename)??S(),p=(t==null?void 0:t.prefix)??(r==null?void 0:r.prefix),c=v(n,o,s),u=j(p,l),w=`${u}.${f(c)}`,m=s.portalItem.resourceFromPath(w);y(o)&&s.resources&&s.resources.pendingOperations.push(L(o).then(U=>{m.path=`${u}.${f(U)}`,a[i]=m.itemRelativeUrl}).catch(()=>{}));const I=(t==null?void 0:t.compress)??!1;s.resources&&h({...e,resource:m,content:c,compress:I,updates:s.resources.toAdd}),a[i]=m.itemRelativeUrl}function D(e){const{context:o,targetUrl:t,params:n,value:s,dest:a,targetPropertyName:i}=e;if(!o.portalItem)return;const r=o.portalItem.resourceFromPath(t),l=v(s,t,o),p=f(l),c=F(r.path),u=(n==null?void 0:n.compress)??!1;p===c?(o.resources&&h({...e,resource:r,content:l,compress:u,updates:o.resources.toUpdate}),a[i]=t):g(e)}function K({context:e,targetUrl:o,dest:t,targetPropertyName:n}){e.portalItem&&e.resources&&(e.resources.toKeep.push({resource:e.portalItem.resourceFromPath(o),compress:!1}),t[n]=o)}function h({object:e,propertyName:o,updates:t,resource:n,content:s,compress:a}){t.push({resource:n,content:s,compress:a,finish:i=>{V(e,o,i)}})}function v(e,o,t){return typeof e=="string"?{url:o}:new Blob([JSON.stringify(e.toJSON(t))],{type:"application/json"})}async function L(e){const o=(await J(()=>import("./index-7753bab1.js").then(n=>n.sW),["assets/index-7753bab1.js","assets/index-0be7f32f.css"])).default,{data:t}=await o(e,{responseType:"blob"});return t}function T(e){return e==null?null:typeof e=="string"?e:e.url}function V(e,o,t){typeof e[o]=="string"?e[o]=t.url:e[o].url=t.url}export{H as g};
