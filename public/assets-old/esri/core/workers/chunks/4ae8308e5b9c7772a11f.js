"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[4695],{42033:(e,n,r)=>{async function t(e,n){const{WhereClause:t}=await Promise.all([r.e(8968),r.e(8592)]).then(r.bind(r,8968));return t.create(e,n)}function l(e,n){return null!=e?null!=n?`(${e}) AND (${n})`:e:n}r.d(n,{E:()=>t,_:()=>l})},14695:(e,n,r)=>{r.d(n,{createLabelFunction:()=>d});var t=r(20102),l=r(92604),s=r(42033),a=r(90344),u=r(18848),o=r(58311),i=r(69165),c=r(8813),p=r(59266);const f=l.Z.getLogger("esri.layers.support.labelFormatUtils"),x={type:"simple",evaluate:()=>null},w={getAttribute:(e,n)=>e.field(n)};async function d(e,n,r){if(!e||!e.symbol||!n)return x;const l=e.where,d=(0,c.hV)(e);let g;if("arcade"===d.type){const e=await(0,p.WW)(d.expression,r,n);if(null==e)return x;g={type:"arcade",evaluate(n,r){try{const t="attributes"in n?e.repurposeFeature(n):n;t.contextTimeZone=r??null;const l=e.evaluate({$view:{timeZone:r},$feature:t},e.services);if(null!=l)return l.toString()}catch(e){f.error(new t.Z("arcade-expression-error","Encountered an error when evaluating label expression for feature",{error:e,feature:n,expression:d}))}return null},needsHydrationToEvaluate:()=>null==(0,c.el)(d.expression)}}else g={type:"simple",evaluate:e=>d.expression.replaceAll(/{[^}]*}/g,(r=>{const t=r.slice(1,-1),l=n.get(t);if(!l)return r;let s=null;return"attributes"in e?e&&e.attributes&&(s=e.attributes[l.name]):s=e.field(l.name),null==s?"":function(e,n){if(null==e)return"";const r=n.domain;if(r)if("codedValue"===r.type||"coded-value"===r.type){const n=e;for(const e of r.codedValues)if(e.code===n)return e.name}else if("range"===r.type){const{max:t,min:l}=(0,o.D3)(n),s=+e;if(null!=l&&null!=t&&l<=s&&s<=t)return r.name}let t=e;return(0,i.y2)(n)?t=(0,a.p6)(t,(0,a.Ze)("short-date")):(0,i.H7)(n)&&(t=(0,u.uf)(+t)),t||""}(s,l)}))};if(l){let e;try{e=await(0,s.E)(l,n)}catch(e){return f.error(new t.Z("bad-where-clause","Encountered an error when evaluating where clause, ignoring",{where:l,error:e})),x}const r=g.evaluate;g.evaluate=(n,s)=>{const a="attributes"in n?void 0:w;try{if(e.testFeature(n,a))return r(n,s)}catch(e){f.error(new t.Z("bad-where-clause","Encountered an error when evaluating where clause for feature",{where:l,feature:n,error:e}))}return null}}return g}},8813:(e,n,r)=>{r.d(n,{UO:()=>g,YI:()=>d,dI:()=>h,el:()=>E,hV:()=>w,z7:()=>x});var t=r(19153);const l="__begin__",s="__end__",a=new RegExp(l,"ig"),u=new RegExp(s,"ig"),o=new RegExp("^"+l,"i"),i=new RegExp(s+"$","i"),c='"',p=c+" + ",f=" + "+c;function x(e){return e.replaceAll(new RegExp("\\{","g"),"[").replaceAll(new RegExp("\\}","g"),"]")}function w(e){const n={expression:"",type:"none"};return e.labelExpressionInfo?e.labelExpressionInfo.value?(n.expression=e.labelExpressionInfo.value,n.type="conventional"):e.labelExpressionInfo.expression&&(n.expression=e.labelExpressionInfo.expression,n.type="arcade"):null!=e.labelExpression&&(n.expression=function(e){return e.replaceAll(new RegExp("\\[","g"),"{").replaceAll(new RegExp("\\]","g"),"}")}(e.labelExpression),n.type="conventional"),n}function d(e){const n=w(e);if(!n)return null;switch(n.type){case"conventional":return h(n.expression);case"arcade":return n.expression}return null}function g(e){const n=w(e);if(!n)return null;switch(n.type){case"conventional":return function(e){const n=e?.match(b);return n?.[1].trim()||null}(n.expression);case"arcade":return E(n.expression)}return null}function h(e){let n;return e?(n=(0,t.gx)(e,(e=>l+'$feature["'+e+'"]'+s)),n=o.test(n)?n.replace(o,""):c+n,n=i.test(n)?n.replace(i,""):n+c,n=n.replaceAll(a,p).replaceAll(u,f)):n='""',n}const b=/^\s*\{([^}]+)\}\s*$/i,m=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*$/i,v=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,y=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])([\w\s]+)(\1)\s*\));?\s*$/i;function E(e){if(!e)return null;let n=m.exec(e)||v.exec(e);return n?n[1]||n[3]:(n=y.exec(e),n?n[2]:null)}}}]);