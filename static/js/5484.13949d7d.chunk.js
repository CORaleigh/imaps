/*! For license information please see 5484.13949d7d.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[5484,1913],{85484:(r,n,e)=>{e.r(n),e.d(n,{a:()=>u,d:()=>s,g:()=>p,l:()=>g});var t=e(91913),u=["ar","bg","bs","ca","cs","da","de","de-CH","el","en","en-AU","en-CA","en-GB","es","es-MX","et","fi","fr","fr-CH","he","hi","hr","hu","id","it","it-CH","ja","ko","lt","lv","mk","nb","nl","pl","pt","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],i=new RegExp("[.](?=.*[.])","g"),a=new RegExp("[^0-9-.]","g"),c=new RegExp(",","g"),o=(new Intl.NumberFormat).resolvedOptions().numberingSystem;function f(r,n){return void 0===n&&(n=o),new Intl.NumberFormat(r,{minimumFractionDigits:0,maximumFractionDigits:20,numberingSystem:n})}function s(r,n){return(0,t.a)(r,(function(r){var e=r.replace(m(n),"-").replace(l(n),"").replace(p(n),".").replace(i,"").replace(a,"");return(0,t.i)(e)?e:r}))}function l(r){var n=f(r).formatToParts(1234567).find((function(r){return"group"===r.type})).value;return 0===n.trim().length?" ":n}function p(r){return f(r).formatToParts(1.1).find((function(r){return"decimal"===r.type})).value}function m(r){return f(r).formatToParts(-9).find((function(r){return"minusSign"===r.type})).value}function g(r,n,e,u){return void 0===e&&(e=!1),(0,t.a)(r,(function(r){if(r){var i=Number((0,t.b)(r.replace(c,"")));if(!isNaN(i)){var a=f(n,u).formatToParts(i).map((function(r){var t=r.type,u=r.value;switch(t){case"group":return e?l(n):"";case"decimal":return p(n);case"minusSign":return m(n);default:return u}})).reduce((function(r,n){return r+n}));return a}}return r}))}},91913:(r,n,e)=>{function t(r){return"Enter"===r||" "===r}e.r(n),e.d(n,{a:()=>f,b:()=>c,c:()=>t,i:()=>i,n:()=>u,p:()=>a,s:()=>o});var u=["0","1","2","3","4","5","6","7","8","9"];function i(r){return!(!r||isNaN(Number(r)))}function a(r){return r&&function(r){return u.some((function(n){return r.includes(n)}))}(r)?f(r,(function(r){var n=!1,e=r.split("").filter((function(r,e){return r.match(/\./g)&&!n?(n=!0,!0):!(!r.match(/\-/g)||0!==e)||u.includes(r)})).reduce((function(r,n){return r+n}));return i(e)?Number(e).toString():""})):""}function c(r){return r.replace(/(?!^\.)\.$/,"")}function o(r){return f(r,(function(r){var n=function(r){return r.replace(/(?!^-)-/g,"")}(c(function(r){return r.replace(/^([-0])0+(?=\d)/,"$1")}(r)));return i(n)?/^-\b0\b\.?0*$/.test(n)?n:Number(n).toString():r}))}function f(r,n){if(!r)return r;var e=r.toLowerCase().indexOf("e")+1;return r.replace(/[eE]*$/g,"").substring(0,e).concat(r.slice(e).replace(/[eE]/g,"")).split(/[eE]/).map((function(r,e){return n(1===e?r.replace(/\./g,""):r)})).join("e").replace(/^e/,"1e")}}}]);
//# sourceMappingURL=5484.13949d7d.chunk.js.map