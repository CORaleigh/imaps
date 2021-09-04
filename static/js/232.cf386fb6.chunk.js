(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[232],{1230:function(e,n,t){"use strict";t.r(n),t.d(n,"createLabelFunction",(function(){return d})),t.d(n,"formatField",(function(){return x}));var r=t(88),s=t(80),a=t(217),u=t(205),i=t(116),o=t(254),l=t(157);const c=s.a.getLogger("esri.layers.support.labelFormatUtils"),p={type:"simple",evaluate:()=>null},f={getAttribute:(e,n)=>e.field(n)};async function d(e,n,s){if(!e||!e.symbol)return p;const a=e.where,u=Object(o.b)(e),i=a?await t.e(11).then(t.bind(null,349)):null;let d;if("arcade"===u.type){const e=await Object(l.c)(u.expression,s,n);d={type:"arcade",evaluate(n){try{const t=e.evaluate({$feature:"attributes"in n?e.repurposeFeature(n):e.repurposeAdapter(n)});if(null!=t)return t.toString()}catch(s){c.error(new r.a("bad-arcade-expression","Encountered an error when evaluating label expression for feature",{feature:n,expression:u}))}return null},needsHydrationToEvaluate:()=>null==Object(o.e)(u.expression)}}else d={type:"simple",evaluate:e=>u.expression.replace(/{[^}]*}/g,(t=>{const r=t.slice(1,-1),s=n.get(r);if(!s)return t;let a=null;return"attributes"in e?e&&e.attributes&&(a=e.attributes[s.name]):a=e.field(s.name),null==a?"":x(a,s)}))};if(a){let e;try{e=i.WhereClause.create(a,n)}catch(b){return p}const t=d.evaluate;d.evaluate=n=>{const r="attributes"in n?void 0:f;return e.testFeature(n,r)?t(n):null}}return d}function x(e,n){if(null==e)return"";const t=n.domain;if(t)if("codedValue"===t.type||"coded-value"===t.type){const n=e;for(const e of t.codedValues)if(e.code===n)return e.name}else if("range"===t.type){const n=+e,r="range"in t?t.range[0]:t.minValue,s="range"in t?t.range[1]:t.maxValue;if(r<=n&&n<=s)return t.name}let r=e;return"date"===n.type||"esriFieldTypeDate"===n.type?r=Object(a.b)(r,Object(a.a)("short-date")):Object(i.u)(n)&&(r=Object(u.b)(+r)),r||""}},254:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return f})),t.d(n,"c",(function(){return d})),t.d(n,"d",(function(){return x})),t.d(n,"e",(function(){return v})),t.d(n,"f",(function(){return p}));var r=t(140);const s="__begin__",a="__end__",u=new RegExp(s,"ig"),i=new RegExp(a,"ig"),o=new RegExp("^"+s,"i"),l=new RegExp(a+"$","i"),c='"';function p(e){return e.replace(new RegExp("\\{","g"),"[").replace(new RegExp("\\}","g"),"]")}function f(e){const n={expression:"",type:"none"};return e.labelExpressionInfo?e.labelExpressionInfo.value?(n.expression=e.labelExpressionInfo.value,n.type="conventional"):e.labelExpressionInfo.expression&&(n.expression=e.labelExpressionInfo.expression,n.type="arcade"):null!=e.labelExpression&&(n.expression=function(e){return e.replace(new RegExp("\\[","g"),"{").replace(new RegExp("\\]","g"),"}")}(e.labelExpression),n.type="conventional"),n}function d(e){const n=f(e);if(!n)return null;switch(n.type){case"conventional":return b(n.expression);case"arcade":return n.expression}return null}function x(e){const n=f(e);if(!n)return null;switch(n.type){case"conventional":return function(e){const n=e.match(g);return n&&n[1].trim()||null}(n.expression);case"arcade":return v(n.expression)}return null}function b(e){let n;return e?(n=Object(r.c)(e,(e=>s+'$feature["'+e+'"]'+a)),n=o.test(n)?n.replace(o,""):c+n,n=l.test(n)?n.replace(l,""):n+c,n=n.replace(u,'" + ').replace(i,' + "')):n='""',n}const g=/^\s*\{([^}]+)\}\s*$/i;const w=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*$/i,y=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,m=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])([\w\s]+)(\1)\s*\));?\s*$/i;function v(e){if(!e)return null;let n=w.exec(e)||y.exec(e);return n?n[1]||n[3]:(n=m.exec(e),n?n[2]:null)}}}]);
//# sourceMappingURL=232.cf386fb6.chunk.js.map