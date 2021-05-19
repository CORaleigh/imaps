(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[253],{1199:function(e,n,t){"use strict";t.r(n),t.d(n,"createLabelFunction",(function(){return b})),t.d(n,"formatField",(function(){return x}));var r=t(79),s=t(89),a=t(147),u=t(110),i=t(246),o=t(241),l=t(209),c=t(234);const p=r.a.getLogger("esri.layers.support.labelFormatUtils"),f={type:"simple",evaluate:()=>null},d={getAttribute:(e,n)=>e.field(n)};async function b(e,n,r){if(!e||!e.symbol)return f;const i=e.where,o=Object(c.b)(e),b=i?await t.e(11).then(t.bind(null,272)):null;let g;if("arcade"===o.type){const e=await Object(a.c)(o.expression,r,n);g={type:"arcade",evaluate(t){try{const n=e.evaluate({$feature:"attributes"in t?e.repurposeFeature(t):e.repurposeAdapter(t)});if(null!=n)return n.toString()}catch(n){p.error(new s.a("bad-arcade-expression","Encountered an error when evaluating label expression for feature",{feature:t,expression:o}))}return null},needsHydrationToEvaluate:()=>null==Object(c.e)(o.expression)}}else g={type:"simple",evaluate:e=>o.expression.replace(/{[^}]*}/g,(t=>{const r=t.slice(1,-1),s=Object(u.q)(n,r);if(!s)return t;let a=null;return"attributes"in e?e&&e.attributes&&(a=e.attributes[s.name]):a=e.field(s.name),null==a?"":x(a,s)}))};if(i){let e;try{e=b.WhereClause.create(i,new l.a(n))}catch(w){return f}const t=g.evaluate;g.evaluate=n=>{const r="attributes"in n?void 0:d;return e.testFeature(n,r)?t(n):null}}return g}function x(e,n){if(null==e)return"";const t=n.domain;if(t)if("codedValue"===t.type||"coded-value"===t.type){const n=e;for(const e of t.codedValues)if(e.code===n)return e.name}else if("range"===t.type){const n=+e,r="range"in t?t.range[0]:t.minValue,s="range"in t?t.range[1]:t.maxValue;if(r<=n&&n<=s)return t.name}let r=e;return"date"===n.type||"esriFieldTypeDate"===n.type?r=Object(i.b)(r,Object(i.a)("short-date")):Object(u.v)(n)&&(r=Object(o.b)(+r)),r||""}},234:function(e,n,t){"use strict";t.d(n,"a",(function(){return x})),t.d(n,"b",(function(){return f})),t.d(n,"c",(function(){return d})),t.d(n,"d",(function(){return b})),t.d(n,"e",(function(){return v})),t.d(n,"f",(function(){return p}));var r=t(137);const s="__begin__",a="__end__",u=new RegExp(s,"ig"),i=new RegExp(a,"ig"),o=new RegExp("^"+s,"i"),l=new RegExp(a+"$","i"),c='"';function p(e){return e.replace(new RegExp("\\{","g"),"[").replace(new RegExp("\\}","g"),"]")}function f(e){const n={expression:"",type:"none"};return e.labelExpressionInfo?e.labelExpressionInfo.value?(n.expression=e.labelExpressionInfo.value,n.type="conventional"):e.labelExpressionInfo.expression&&(n.expression=e.labelExpressionInfo.expression,n.type="arcade"):null!=e.labelExpression&&(n.expression=function(e){return e.replace(new RegExp("\\[","g"),"{").replace(new RegExp("\\]","g"),"}")}(e.labelExpression),n.type="conventional"),n}function d(e){const n=f(e);if(!n)return null;switch(n.type){case"conventional":return x(n.expression);case"arcade":return n.expression}return null}function b(e){const n=f(e);if(!n)return null;switch(n.type){case"conventional":return function(e){const n=e.match(g);return n&&n[1].trim()||null}(n.expression);case"arcade":return v(n.expression)}return null}function x(e){let n;return e?(n=Object(r.c)(e,(e=>s+'$feature["'+e+'"]'+a)),n=o.test(n)?n.replace(o,""):c+n,n=l.test(n)?n.replace(l,""):n+c,n=n.replace(u,'" + ').replace(i,' + "')):n='""',n}const g=/^\s*\{([^}]+)\}\s*$/i;const w=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*$/i,y=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,m=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])([\w\s]+)(\1)\s*\));?\s*$/i;function v(e){if(!e)return null;let n=w.exec(e)||y.exec(e);return n?n[1]||n[3]:(n=m.exec(e),n?n[2]:null)}}}]);
//# sourceMappingURL=253.7e6fcde8.chunk.js.map