(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[20],{823:function(e,t,r){"use strict";r.r(t),r.d(t,"addOrUpdateResource",(function(){return u})),r.d(t,"contentToBlob",(function(){return f})),r.d(t,"fetchResources",(function(){return c})),r.d(t,"getSiblingOfSameType",(function(){return m})),r.d(t,"getSiblingOfSameTypeI",(function(){return h})),r.d(t,"removeAllResources",(function(){return l})),r.d(t,"removeResource",(function(){return i})),r.d(t,"splitPrefixFileNameAndExtension",(function(){return d}));var a=r(138),n=r(140),o=r(132),s=r(151);async function c(e,t={},r){await e.load(r);const n=Object(o.y)(e.itemUrl,"resources"),{start:s=1,num:c=10,sortOrder:u="asc",sortField:i="created"}=t,l={query:{start:s,num:c,sortOrder:u,sortField:i},signal:Object(a.i)(r,"signal")},p=await e.portal._request(n,l);return{total:p.total,nextStart:p.nextStart,resources:p.resources.map((({created:t,size:r,resource:a})=>({created:new Date(t),size:r,resource:e.resourceFromPath(a)})))}}async function u(e,t,r,s){if(!e.hasPath())throw new n.a(`portal-item-resource-${t}:invalid-path`,"Resource does not have a valid path");await e.portalItem.load(s);const c=Object(o.y)(e.portalItem.userItemUrl,"add"===t?"addResources":"updateResources"),[u,i]=p(e.path),l=await f(r),d=new FormData;return u&&"."!==u&&d.append("resourcesPrefix",u),d.append("fileName",i),d.append("file",l,i),d.append("f","json"),Object(a.k)(s)&&s.access&&d.append("access",s.access),await e.portalItem.portal._request(c,{method:"post",body:d,signal:Object(a.i)(s,"signal")}),e}async function i(e,t,r){if(!t.hasPath())throw new n.a("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const s=Object(o.y)(e.userItemUrl,"removeResources");await e.portal._request(s,{method:"post",query:{resource:t.path},signal:Object(a.i)(r,"signal")}),t.portalItem=null}async function l(e,t){await e.load(t);const r=Object(o.y)(e.userItemUrl,"removeResources");return e.portal._request(r,{method:"post",query:{deleteAll:!0},signal:Object(a.i)(t,"signal")})}function p(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function d(e){const[t,r]=function(e){const t=Object(o.n)(e);return Object(a.j)(t)?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}(e),[n,s]=p(t);return[n,s,r]}async function f(e){return e instanceof Blob?e:(await Object(s.default)(e.url,{responseType:"blob"})).data}function m(e,t){if(!e.hasPath())return null;const[r,,a]=d(e.path);return e.portalItem.resourceFromPath(Object(o.y)(r,t+a))}function h(e,t){if(!e.hasPath())return null;const[r,,a]=d(e.path);return e.portalItem.resourceFromPath(Object(o.y)(r,t+a))}}}]);
//# sourceMappingURL=20.8b07d2bc.chunk.js.map