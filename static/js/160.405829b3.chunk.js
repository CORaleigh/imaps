(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[160],{101:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return f})),t.d(n,"c",(function(){return d})),t.d(n,"d",(function(){return o})),t.d(n,"e",(function(){return u})),t.d(n,"f",(function(){return c})),t.d(n,"g",(function(){return i})),t.d(n,"h",(function(){return a})),t.d(n,"i",(function(){return m})),t.d(n,"j",(function(){return s}));const r=/^-?(\d+(\.\d+)?)\s*((px)|(pt))?$/i;function i(e){return e?e/72*96:0}function a(e){return e?72*e/96:0}function s(e){if("string"==typeof e){const n=e.match(r);if(n){const t=Number(n[1]),r=n[3]&&n[3].toLowerCase(),i="-"===e.charAt(0),s="px"===r?a(t):t;return i?-s:s}return console.warn("screenUtils.toPt: input not recognized!"),null}return e}function u(e=0,n=0){return{x:e,y:n}}function c(e=0,n=0){return[e,n]}function o(e=0,n=0,t=0){return[e,n,t]}function l(e){return e}function f(e){return e}function d(e){return e}function m(e,n){return n?(n[0]=e.x,n[1]=e.y,n.length>2&&(n[2]=0),n):[e.x,e.y]}},105:function(e,n,t){"use strict";t.d(n,"a",(function(){return L})),t.d(n,"b",(function(){return C})),t.d(n,"c",(function(){return M})),t.d(n,"d",(function(){return x})),t.d(n,"e",(function(){return U})),t.d(n,"f",(function(){return p})),t.d(n,"g",(function(){return b})),t.d(n,"h",(function(){return _})),t.d(n,"i",(function(){return q})),t.d(n,"j",(function(){return O})),t.d(n,"k",(function(){return ee})),t.d(n,"l",(function(){return h})),t.d(n,"m",(function(){return l})),t.d(n,"n",(function(){return d})),t.d(n,"o",(function(){return I})),t.d(n,"p",(function(){return S})),t.d(n,"q",(function(){return T})),t.d(n,"r",(function(){return w})),t.d(n,"s",(function(){return X})),t.d(n,"t",(function(){return $})),t.d(n,"u",(function(){return P})),t.d(n,"v",(function(){return V})),t.d(n,"w",(function(){return R})),t.d(n,"x",(function(){return Y})),t.d(n,"y",(function(){return y})),t.d(n,"z",(function(){return H})),t.d(n,"A",(function(){return Q}));var r=t(88),i=t(85),a=t(124),s=t(265),u=t(126);const c=["field","field2","field3","normalizationField","rotationInfo.field","proportionalSymbolInfo.field","proportionalSymbolInfo.normalizationField","colorInfo.field","colorInfo.normalizationField"],o=["field","normalizationField"];function l(e,n){if(null!=e&&null!=n)for(const t of Array.isArray(e)?e:[e])if(f(c,t,n),"visualVariables"in t&&t.visualVariables)for(const e of t.visualVariables)f(o,e,n)}function f(e,n,t){if(e)for(const r of e){const e=Object(a.b)(r,n),i=e&&"function"!=typeof e&&t.get(e);i&&Object(a.c)(r,i.name,n)}}function d(e,n){if(null!=e&&null!=n&&n.fields.length)if("startField"in e){const t=n.get(e.startField),r=n.get(e.endField);e.startField=t&&t.name||null,e.endField=r&&r.name||null}else{const t=n.get(e.startTimeField),r=n.get(e.endTimeField);e.startTimeField=t&&t.name||null,e.endTimeField=r&&r.name||null}}const m=new Set;function h(e,n){return e&&n?(m.clear(),b(m,e,n),Array.from(m).sort()):[]}function b(e,n,t){var r;if(t)if(null!=n&&null!=(r=n.fields)&&r.length)if(t.includes("*"))for(const{name:i}of n.fields)e.add(i);else for(const i of t)p(e,n,i);else{if(t.includes("*"))return e.clear(),void e.add("*");for(const n of t)e.add(n)}}function p(e,n,t){if("string"==typeof t)if(n){const r=n.get(t);r&&e.add(r.name)}else e.add(t)}function y(e,n){return Object(i.k)(n)||Object(i.k)(e)?[]:n.includes("*")?e.fields.map((e=>e.name)):n}async function M(e,n,t){var r;if(!t)return;const{arcadeUtils:i}=await Object(u.e)(),a=i.extractFieldNames(t,null==n||null==(r=n.fields)?void 0:r.map((e=>e.name)));for(const s of a)p(e,n,s)}async function g(e,n,i){if(i&&"1=1"!==i){const a=(await Promise.all([t.e(11),t.e(240)]).then(t.bind(null,316))).WhereClause.create(i,n);if(!a.isStandardized)throw new r.a("fieldUtils:collectFilterFields","Where clause is not standardized");b(e,n,a.fieldNames)}}function I({displayField:e,fields:n}){return e||(n&&n.length?F(n,"name-or-title")||F(n,"unique-identifier")||F(n,"type-or-category")||function(e){for(const n of e){if(!n||!n.name)continue;const e=n.name.toLowerCase();if(e.indexOf("name")>-1||e.indexOf("title")>-1)return n.name}return null}(n):null)}function F(e,n){for(const t of e)if(t&&t.valueType&&t.valueType===n)return t.name;return null}async function x(e,n){if(!n)return;const t=Object(a.b)("elevationInfo.featureExpressionInfo",n);return t?t.collectRequiredFields(e,n.fieldsIndex):void 0}async function U(e,n,t){var r,i;if(!n||!t||"cluster"!==t.type)return;const a=[];if(null!=(r=t.popupTemplate)&&r.expressionInfos&&a.push(...t.popupTemplate.expressionInfos.map((t=>M(e,n.fieldsIndex,t.expression)))),Array.isArray(null==(i=t.popupTemplate)?void 0:i.content)){const r=t.popupTemplate.content;for(const t of r)"expression"===t.type&&t.expressionInfo&&a.push(M(e,n.fieldsIndex,t.expressionInfo.expression))}t.fields&&a.push(...t.fields.map((t=>async function(e,n,t){t.outStatistic.onStatisticValueExpression?M(e,n,t.outStatistic.onStatisticValueExpression):e.add(t.outStatistic.onStatisticField)}(e,n.fieldsIndex,t)))),await Promise.all(a)}async function _(e,n,t){n&&(n.timeInfo&&Object(i.l)(t)&&t.timeExtent&&b(e,n.fieldsIndex,[n.timeInfo.startField,n.timeInfo.endField]),n.floorInfo&&b(e,n.fieldsIndex,[n.floorInfo.floorField]),Object(i.l)(t)&&Object(i.l)(t.where)&&await g(e,n.fieldsIndex,t.where))}async function O(e,n,t){n&&t&&await Promise.all(t.map((t=>async function(e,n,t){n&&t&&(t.valueExpression?await M(e,n.fieldsIndex,t.valueExpression):t.field&&p(e,n.fieldsIndex,t.field))}(e,n,t))))}function S(e){if(!e)return[];const n="editFieldsInfo"in e&&e.editFieldsInfo;return n?h(e.fieldsIndex,[n&&n.creatorField,n&&n.creationDateField,n&&n.editorField,n&&n.editDateField]):[]}function T(e){if(!e)return[];const n=e.geometryFieldsInfo;return n?h(e.fieldsIndex,[n.shapeAreaField,n.shapeLengthField]):[]}async function q(e,n){const{labelingInfo:t,fieldsIndex:r}=n;t&&t.length&&await Promise.all(t.map((n=>async function(e,n,t){if(!t)return;const r=t.getLabelExpression(),i=t.where;if("arcade"===r.type)await M(e,n,r.expression);else{const t=r.expression.match(/{[^}]*}/g);t&&t.forEach((t=>{p(e,n,t.slice(1,-1))}))}await g(e,n,i)}(e,r,n))))}function w(e){const n=e.defaultValue;return void 0!==n&&N(e,n)?n:e.nullable?null:void 0}function v(e){return"number"==typeof e&&!isNaN(e)&&isFinite(e)}function A(e){return null===e||v(e)}const k="isInteger"in Number?Number.isInteger:e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e;function E(e){return null===e||k(e)}function j(e){return null!=e&&"string"==typeof e}function D(e){return null===e||j(e)}function B(){return!0}function N(e,n){let t;switch(e.type){case"date":case"integer":case"long":case"small-integer":case"esriFieldTypeDate":case"esriFieldTypeInteger":case"esriFieldTypeLong":case"esriFieldTypeSmallInteger":t=e.nullable?E:k;break;case"double":case"single":case"esriFieldTypeSingle":case"esriFieldTypeDouble":t=e.nullable?A:v;break;case"string":case"esriFieldTypeString":t=e.nullable?D:j;break;default:t=B}return 1===arguments.length?t:t(n)}const R=["integer","small-integer","single","double"],G=new Set([...R,"esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]);function P(e){return null!=e&&G.has(e.type)}function V(e){return null!=e&&("string"===e.type||"esriFieldTypeString"===e.type)}function $(e){return null!=e&&("date"===e.type||"esriFieldTypeDate"===e.type)}var L,C;function Y(e){return null==e||"number"==typeof e&&isNaN(e)?null:e}function H(e,n){return e.nullable&&null===n?null:P(e)&&!function(e,n){const t="string"==typeof e?z(e):e;return!!t&&(t.isInteger?k(n)&&n>=t.min&&n<=t.max:n>=t.min&&n<=t.max)}(e.type,Number(n))?L.OUT_OF_RANGE:N(e,n)?e.domain?Object(s.c)(e.domain,n):null:C.INVALID_TYPE}function X(e){return Object(s.b)(e.domain)||(P(e)?z(e.type):void 0)}function z(e){switch(e){case"esriFieldTypeSmallInteger":case"small-integer":return J;case"esriFieldTypeInteger":case"integer":return W;case"esriFieldTypeSingle":case"single":return Z;case"esriFieldTypeDouble":case"double":return K}}(L||(L={})).OUT_OF_RANGE="numeric-range-validation-error::out-of-range",function(e){e.INVALID_TYPE="type-validation-error::invalid-type"}(C||(C={}));const J={min:-32768,max:32767,isInteger:!0},W={min:-2147483648,max:2147483647,isInteger:!0},Z={min:-34e37,max:12e37,isInteger:!1},K={min:-Number.MAX_VALUE,max:Number.MAX_VALUE,isInteger:!1};function Q(e,n,t){switch(e){case s.a.INVALID_CODED_VALUE:return`Value ${t} is not in the coded domain - field: ${n.name}, domain: ${JSON.stringify(n.domain)}`;case s.a.VALUE_OUT_OF_RANGE:return`Value ${t} is out of the range of valid values - field: ${n.name}, domain: ${JSON.stringify(n.domain)}`;case C.INVALID_TYPE:return`Value ${t} is not a valid value for the field type - field: ${n.name}, type: ${n.type}, nullable: ${n.nullable}`;case L.OUT_OF_RANGE:{const{min:e,max:r}=z(n.type);return`Value ${t} is out of range for the number type - field: ${n.name}, type: ${n.type}, value range is ${e} to ${r}`}}}function ee(e,n){return!function(e,n,t){if(!n||!n.attributes||!e){if(Object(i.l)(t))for(const n of e)t.add(n);return!0}const r=n.attributes;let a=!1;for(const s of e)if(!(s in r)){if(a=!0,!Object(i.l)(t))break;t.add(s)}return a}(e,n,null)}},114:function(e,n,t){"use strict";t.d(n,"a",(function(){return X})),t.d(n,"b",(function(){return S})),t.d(n,"c",(function(){return C})),t.d(n,"d",(function(){return R})),t.d(n,"e",(function(){return N})),t.d(n,"f",(function(){return D})),t.d(n,"g",(function(){return V})),t.d(n,"h",(function(){return B})),t.d(n,"i",(function(){return l})),t.d(n,"j",(function(){return U})),t.d(n,"k",(function(){return E})),t.d(n,"l",(function(){return z})),t.d(n,"m",(function(){return F})),t.d(n,"n",(function(){return x})),t.d(n,"o",(function(){return k})),t.d(n,"p",(function(){return w})),t.d(n,"q",(function(){return v})),t.d(n,"r",(function(){return A})),t.d(n,"s",(function(){return T})),t.d(n,"t",(function(){return q})),t.d(n,"u",(function(){return j}));t(82);var r=t(90),i=t(85),a=t(197),s=t(94),u=t(138),c=t(110),o=t(284);const l=39.37,f=u.a.radius*Math.PI/200,d=/UNIT\[([^\]]+)\]\]$/i,m=o.a,h=/UNIT\[([^\]]+)\]/i,b=new Set([4261,4305,4807,4810,4811,4812,4816,4819,4821,4901,4902,37225,104139,104140]),p=Object(r.b)()({meter:"meters",foot:"feet",foot_us:"us-feet",foot_clarke:"clarke-feet",yard_clarke:"clarke-yards",link_clarke:"clarke-links",yard_sears:"sears-yards",foot_sears:"sears-feet",chain_sears:"sears-chains",chain_benoit_1895_b:"benoit-1895-b-chains",yard_indian:"indian-yards",yard_indian_1937:"indian-1937-yards",foot_gold_coast:"gold-coast-feet",chain_sears_1922_truncated:"sears-1922-truncated-chains","50_kilometers":"50-kilometers","150_kilometers":"150-kilometers"}),y=e=>e*e,M=e=>e*e*e,g={length:{baseUnit:"meters",units:{millimeters:{inBaseUnits:.001},centimeters:{inBaseUnits:.01},decimeters:{inBaseUnits:.1},meters:{inBaseUnits:1},kilometers:{inBaseUnits:1e3},inches:{inBaseUnits:.0254},feet:{inBaseUnits:.3048},yards:{inBaseUnits:.9144},miles:{inBaseUnits:1609.344},"nautical-miles":{inBaseUnits:1852},"us-feet":{inBaseUnits:1200/3937}}},area:{baseUnit:"square-meters",units:{"square-millimeters":{inBaseUnits:y(.001)},"square-centimeters":{inBaseUnits:y(.01)},"square-decimeters":{inBaseUnits:y(.1)},"square-meters":{inBaseUnits:1},"square-kilometers":{inBaseUnits:y(1e3)},"square-inches":{inBaseUnits:y(.0254)},"square-feet":{inBaseUnits:y(.3048)},"square-yards":{inBaseUnits:y(.9144)},"square-miles":{inBaseUnits:y(1609.344)},"square-us-feet":{inBaseUnits:y(1200/3937)},acres:{inBaseUnits:.0015625*y(1609.344)},ares:{inBaseUnits:100},hectares:{inBaseUnits:1e4}}},volume:{baseUnit:"liters",units:{liters:{inBaseUnits:1},"cubic-millimeters":{inBaseUnits:1e3*M(.001)},"cubic-centimeters":{inBaseUnits:1e3*M(.01)},"cubic-decimeters":{inBaseUnits:1e3*M(.1)},"cubic-meters":{inBaseUnits:1e3},"cubic-kilometers":{inBaseUnits:1e3*M(1e3)},"cubic-inches":{inBaseUnits:1e3*M(.0254)},"cubic-feet":{inBaseUnits:1e3*M(.3048)},"cubic-yards":{inBaseUnits:1e3*M(.9144)},"cubic-miles":{inBaseUnits:1e3*M(1609.344)}}},angle:{baseUnit:"radians",units:{radians:{inBaseUnits:1},degrees:{inBaseUnits:Math.PI/180}}}},I=function(){const e={};for(const n in g)for(const t in g[n].units)e[t]=n;return e}();const F=["metric","imperial","square-inches","square-feet","square-yards","square-miles","square-us-feet","square-meters","square-kilometers","acres","ares","hectares"],x=["metric","imperial","inches","feet","yards","miles","nautical-miles","us-feet","meters","kilometers"];function U(e){return"imperial"===e||"metric"===e}function _(e){const n=I[e];if(n)return n;throw new Error("unknown measure")}function O(e,n=null){return n=n||_(e),g[n].baseUnit===e}function S(e,n,t){if(n===t)return e;const r=_(n);if(r!==_(t))throw new Error("incompatible units");const i=O(n,r)?e:function(e,n,t){return e*g[t].units[n].inBaseUnits}(e,n,r);return O(t,r)?i:function(e,n,t){return e/g[t].units[n].inBaseUnits}(i,t,r)}function T(e,n){return S(e,n,"meters")<3e3?"meters":"kilometers"}function q(e,n){return S(e,n,"meters")<1e5?"meters":"kilometers"}function w(e,n){return S(e,n,"feet")<1e3?"feet":"miles"}function v(e,n){return S(e,n,"feet")<1e5?"feet":"miles"}function A(e,n){return S(e,n,"square-meters")<3e6?"square-meters":"square-kilometers"}function k(e,n){return S(e,n,"square-feet")<1e6?"square-feet":"square-miles"}function E(e,n,t){return S(e,n,"meters")/(t*Math.PI/180)}function j(e){return p.fromJSON(e.toLowerCase())||null}function D(e){if(e&&"object"==typeof e&&!Object(c.g)(e))return 1;const n=N(e);return n>1e5?1:n}function B(e){return N(e)>=(e instanceof s.a?Object(a.e)(e).metersPerDegree:1e5)?"meters":V(e)}function N(e,n=u.a.metersPerDegree){return R(e,!0)||n}function R(e,n=!1){let t,r,i=null;if(null!=e&&("object"==typeof e?(t=e.wkid,r=e.wkt):"number"==typeof e?t=e:"string"==typeof e&&(r=e)),t){if(Object(c.n)(t))return u.b.metersPerDegree;if(Object(c.o)(t))return u.c.metersPerDegree;i=m.values[m[t]],!i&&n&&b.has(t)&&(i=f)}else r&&(L(r)?i=G(d.exec(r),i):$(r)&&(i=G(h.exec(r),i)));return i}function G(e,n){return e&&e[1]?P(e[1]):n}function P(e){return parseFloat(e.split(",")[1])}function V(e){let n,t,r=null;if(null!=e&&("object"==typeof e?(n=e.wkid,t=e.wkt):"number"==typeof e?n=e:"string"==typeof e&&(t=e)),n)r=m.units[m[n]];else if(t){const e=L(t)?d:$(t)?h:null;if(e){const n=e.exec(t);n&&n[1]&&(r=function(e){const n=/[\\"\\']{1}([^\\"\\']+)/.exec(e);let t=n&&n[1];if(!t||-1===m.units.indexOf(t)){const n=P(e);t=null;const r=m.values;for(let e=0;e<r.length;++e)if(Math.abs(n-r[e])<1e-7){t=m.units[e];break}}return t}(n[1]))}}return Object(i.l)(r)?j(r):null}function $(e){return/^GEOCCS/i.test(e)}function L(e){return/^PROJCS/i.test(e)}function C(e){if(!e)return null;switch(V(e)){case"feet":case"us-feet":case"clarke-feet":case"clarke-yards":case"clarke-links":case"sears-yards":case"sears-feet":case"sears-chains":case"benoit-1895-b-chains":case"indian-yards":case"indian-1937-yards":case"gold-coast-feet":case"sears-1922-truncated-chains":return"imperial";case"50-kilometers":case"150-kilometers":case"meters":return"metric";case null:case void 0:return null}return null}const Y={esriAcres:"acres",esriAres:"ares",esriHectares:"hectares",esriSquareCentimeters:"square-centimeters",esriSquareDecimeters:"square-decimeters",esriSquareFeet:"square-feet",esriSquareInches:"square-inches",esriSquareKilometers:"square-kilometers",esriSquareMeters:"square-meters",esriSquareMiles:"square-miles",esriSquareMillimeters:"square-millimeters",esriSquareUsFeet:"square-us-feet",esriSquareYards:"square-yards"},H={esriCentimeters:"centimeters",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriYards:"yards"},X=Object(r.b)()(Y),z=Object(r.b)()(H);Object(r.b)()({...Y,...H})},126:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return u})),t.d(n,"d",(function(){return c})),t.d(n,"e",(function(){return s}));t(97);var r=t(85),i=t(94);let a;function s(){return a||(a=(async()=>{const e=await Promise.all([t.e(41),t.e(123),t.e(196)]).then(t.bind(null,369));return{arcade:e.arcade,arcadeUtils:e,Dictionary:e.Dictionary,Feature:e.arcadeFeature}})()),a}const u=(e,n,t)=>l.create(e,n,t,null,["$feature"]),c=(e,n,t)=>l.create(e,n,t,null,["$feature","$view"]),o=(e,n,t,r)=>l.create(e,n,t,r,["$feature","$view"]);class l{constructor(e,n,t,r,i,a,s,u){this.script=e,this.evaluate=i;const c=Array.isArray(s)?s:s.fields;this.fields=c,this._syntaxTree=r,this._arcade=n,this._arcadeDictionary=t,this._arcadeFeature=a,this._spatialReference=u,this._referencesGeometry=n.scriptTouchesGeometry(this._syntaxTree),this._referencesScale=this._arcade.referencesMember(this._syntaxTree,"scale")}static async create(e,n,t,a,u,c){const{arcade:o,Feature:f,Dictionary:d}=await s(),m=i.a.fromJSON(n),h=o.parseScript(e,c),b=u.reduce(((e,n)=>({...e,[n]:null})),{});let p=null;Object(r.l)(a)&&(p=new d(a),p.immutable=!0,b.$config=null);const y=o.scriptUsesGeometryEngine(h)&&o.enableGeometrySupport(),M=o.scriptUsesFeatureSet(h)&&o.enableFeatureSetSupport(),g=o.scriptIsAsync(h)&&o.enableAsyncSupport(),I={vars:b,spatialReference:m,useAsync:!!g},F=new d;F.immutable=!1,F.setField("scale",0);const x=o.compileScript(h,I);return await Promise.all([y,M,g]),new l(e,o,d,h,(e=>("$view"in e&&e.$view&&(F.setField("scale",e.$view.scale),e.$view=F),p&&(e.$config=p),x({vars:e,spatialReference:m}))),new f,t,m)}repurposeFeature(e){return e.geometry&&!e.geometry.spatialReference&&(e.geometry.spatialReference=this._spatialReference),this._arcadeFeature.repurposeFromGraphicLikeObject(e.geometry,e.attributes,{fields:this.fields}),this._arcadeFeature}repurposeAdapter(e){return this._arcadeFeature.repurposeFromAdapter(e,{fields:this.fields}),this._arcadeFeature}createDictionary(){return new this._arcadeDictionary}referencesMember(e){return this._arcade.referencesMember(this._syntaxTree,e)}referencesFunction(e){return this._arcade.referencesFunction(this._syntaxTree,e)}referencesGeometry(){return this._referencesGeometry}referencesScale(){return this._referencesScale}extractFieldLiterals(){return this._arcade.extractExpectedFieldLiterals(this._syntaxTree)}}},149:function(e,n,t){"use strict";t.d(n,"a",(function(){return I})),t.d(n,"b",(function(){return f})),t.d(n,"c",(function(){return o})),t.d(n,"d",(function(){return a})),t.d(n,"e",(function(){return h})),t.d(n,"f",(function(){return m})),t.d(n,"g",(function(){return d})),t.d(n,"h",(function(){return U})),t.d(n,"i",(function(){return _})),t.d(n,"j",(function(){return u})),t.d(n,"k",(function(){return b})),t.d(n,"l",(function(){return v})),t.d(n,"m",(function(){return S})),t.d(n,"n",(function(){return l})),t.d(n,"o",(function(){return w})),t.d(n,"p",(function(){return O})),t.d(n,"q",(function(){return q})),t.d(n,"r",(function(){return p})),t.d(n,"s",(function(){return s})),t.d(n,"t",(function(){return c})),t.d(n,"u",(function(){return g})),t.d(n,"v",(function(){return y})),t.d(n,"w",(function(){return M}));var r=t(106),i=t(176);function a(e,n){return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],e}function s(e,n,t,r,i,a,s,u,c,o,l,f,d,m,h,b,p){return e[0]=n,e[1]=t,e[2]=r,e[3]=i,e[4]=a,e[5]=s,e[6]=u,e[7]=c,e[8]=o,e[9]=l,e[10]=f,e[11]=d,e[12]=m,e[13]=h,e[14]=b,e[15]=p,e}function u(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function c(e,n){if(e===n){const t=n[1],r=n[2],i=n[3],a=n[6],s=n[7],u=n[11];e[1]=n[4],e[2]=n[8],e[3]=n[12],e[4]=t,e[6]=n[9],e[7]=n[13],e[8]=r,e[9]=a,e[11]=n[14],e[12]=i,e[13]=s,e[14]=u}else e[0]=n[0],e[1]=n[4],e[2]=n[8],e[3]=n[12],e[4]=n[1],e[5]=n[5],e[6]=n[9],e[7]=n[13],e[8]=n[2],e[9]=n[6],e[10]=n[10],e[11]=n[14],e[12]=n[3],e[13]=n[7],e[14]=n[11],e[15]=n[15];return e}function o(e,n){const t=n[0],r=n[1],i=n[2],a=n[3],s=n[4],u=n[5],c=n[6],o=n[7],l=n[8],f=n[9],d=n[10],m=n[11],h=n[12],b=n[13],p=n[14],y=n[15],M=t*u-r*s,g=t*c-i*s,I=t*o-a*s,F=r*c-i*u,x=r*o-a*u,U=i*o-a*c,_=l*b-f*h,O=l*p-d*h,S=l*y-m*h,T=f*p-d*b,q=f*y-m*b,w=d*y-m*p;let v=M*w-g*q+I*T+F*S-x*O+U*_;return v?(v=1/v,e[0]=(u*w-c*q+o*T)*v,e[1]=(i*q-r*w-a*T)*v,e[2]=(b*U-p*x+y*F)*v,e[3]=(d*x-f*U-m*F)*v,e[4]=(c*S-s*w-o*O)*v,e[5]=(t*w-i*S+a*O)*v,e[6]=(p*I-h*U-y*g)*v,e[7]=(l*U-d*I+m*g)*v,e[8]=(s*q-u*S+o*_)*v,e[9]=(r*S-t*q-a*_)*v,e[10]=(h*x-b*I+y*M)*v,e[11]=(f*I-l*x-m*M)*v,e[12]=(u*O-s*T-c*_)*v,e[13]=(t*T-r*O+i*_)*v,e[14]=(b*g-h*F-p*M)*v,e[15]=(l*F-f*g+d*M)*v,e):null}function l(e,n,t){const r=n[0],i=n[1],a=n[2],s=n[3],u=n[4],c=n[5],o=n[6],l=n[7],f=n[8],d=n[9],m=n[10],h=n[11],b=n[12],p=n[13],y=n[14],M=n[15];let g=t[0],I=t[1],F=t[2],x=t[3];return e[0]=g*r+I*u+F*f+x*b,e[1]=g*i+I*c+F*d+x*p,e[2]=g*a+I*o+F*m+x*y,e[3]=g*s+I*l+F*h+x*M,g=t[4],I=t[5],F=t[6],x=t[7],e[4]=g*r+I*u+F*f+x*b,e[5]=g*i+I*c+F*d+x*p,e[6]=g*a+I*o+F*m+x*y,e[7]=g*s+I*l+F*h+x*M,g=t[8],I=t[9],F=t[10],x=t[11],e[8]=g*r+I*u+F*f+x*b,e[9]=g*i+I*c+F*d+x*p,e[10]=g*a+I*o+F*m+x*y,e[11]=g*s+I*l+F*h+x*M,g=t[12],I=t[13],F=t[14],x=t[15],e[12]=g*r+I*u+F*f+x*b,e[13]=g*i+I*c+F*d+x*p,e[14]=g*a+I*o+F*m+x*y,e[15]=g*s+I*l+F*h+x*M,e}function f(e,n,t){const r=t[0],i=t[1],a=t[2];let s,u,c,o,l,f,d,m,h,b,p,y;return n===e?(e[12]=n[0]*r+n[4]*i+n[8]*a+n[12],e[13]=n[1]*r+n[5]*i+n[9]*a+n[13],e[14]=n[2]*r+n[6]*i+n[10]*a+n[14],e[15]=n[3]*r+n[7]*i+n[11]*a+n[15]):(s=n[0],u=n[1],c=n[2],o=n[3],l=n[4],f=n[5],d=n[6],m=n[7],h=n[8],b=n[9],p=n[10],y=n[11],e[0]=s,e[1]=u,e[2]=c,e[3]=o,e[4]=l,e[5]=f,e[6]=d,e[7]=m,e[8]=h,e[9]=b,e[10]=p,e[11]=y,e[12]=s*r+l*i+h*a+n[12],e[13]=u*r+f*i+b*a+n[13],e[14]=c*r+d*i+p*a+n[14],e[15]=o*r+m*i+y*a+n[15]),e}function d(e,n,t){const r=t[0],i=t[1],a=t[2];return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=n[3]*r,e[4]=n[4]*i,e[5]=n[5]*i,e[6]=n[6]*i,e[7]=n[7]*i,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=n[11]*a,e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],e}function m(e,n,t,r){let a,s,u,c,o,l,f,d,m,h,b,p,y,M,g,I,F,x,U,_,O,S,T,q,w=r[0],v=r[1],A=r[2],k=Math.sqrt(w*w+v*v+A*A);return k<i.a?null:(k=1/k,w*=k,v*=k,A*=k,a=Math.sin(t),s=Math.cos(t),u=1-s,c=n[0],o=n[1],l=n[2],f=n[3],d=n[4],m=n[5],h=n[6],b=n[7],p=n[8],y=n[9],M=n[10],g=n[11],I=w*w*u+s,F=v*w*u+A*a,x=A*w*u-v*a,U=w*v*u-A*a,_=v*v*u+s,O=A*v*u+w*a,S=w*A*u+v*a,T=v*A*u-w*a,q=A*A*u+s,e[0]=c*I+d*F+p*x,e[1]=o*I+m*F+y*x,e[2]=l*I+h*F+M*x,e[3]=f*I+b*F+g*x,e[4]=c*U+d*_+p*O,e[5]=o*U+m*_+y*O,e[6]=l*U+h*_+M*O,e[7]=f*U+b*_+g*O,e[8]=c*S+d*T+p*q,e[9]=o*S+m*T+y*q,e[10]=l*S+h*T+M*q,e[11]=f*S+b*T+g*q,n!==e&&(e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15]),e)}function h(e,n,t){const r=Math.sin(t),i=Math.cos(t),a=n[4],s=n[5],u=n[6],c=n[7],o=n[8],l=n[9],f=n[10],d=n[11];return n!==e&&(e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15]),e[4]=a*i+o*r,e[5]=s*i+l*r,e[6]=u*i+f*r,e[7]=c*i+d*r,e[8]=o*i-a*r,e[9]=l*i-s*r,e[10]=f*i-u*r,e[11]=d*i-c*r,e}function b(e,n,t){const r=Math.sin(t),i=Math.cos(t),a=n[0],s=n[1],u=n[2],c=n[3],o=n[8],l=n[9],f=n[10],d=n[11];return n!==e&&(e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15]),e[0]=a*i-o*r,e[1]=s*i-l*r,e[2]=u*i-f*r,e[3]=c*i-d*r,e[8]=a*r+o*i,e[9]=s*r+l*i,e[10]=u*r+f*i,e[11]=c*r+d*i,e}function p(e,n,t){const r=Math.sin(t),i=Math.cos(t),a=n[0],s=n[1],u=n[2],c=n[3],o=n[4],l=n[5],f=n[6],d=n[7];return n!==e&&(e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15]),e[0]=a*i+o*r,e[1]=s*i+l*r,e[2]=u*i+f*r,e[3]=c*i+d*r,e[4]=o*i-a*r,e[5]=l*i-s*r,e[6]=f*i-u*r,e[7]=d*i-c*r,e}function y(e,n){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=n[0],e[13]=n[1],e[14]=n[2],e[15]=1,e}function M(e,n){return e[0]=n[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=n[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=n[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function g(e,n){const t=Math.sin(n),r=Math.cos(n);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=r,e[6]=t,e[7]=0,e[8]=0,e[9]=-t,e[10]=r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function I(e,n){const t=Math.sin(n),r=Math.cos(n);return e[0]=r,e[1]=t,e[2]=0,e[3]=0,e[4]=-t,e[5]=r,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function F(e,n,t){const r=n[0],i=n[1],a=n[2],s=n[3],u=r+r,c=i+i,o=a+a,l=r*u,f=r*c,d=r*o,m=i*c,h=i*o,b=a*o,p=s*u,y=s*c,M=s*o;return e[0]=1-(m+b),e[1]=f+M,e[2]=d-y,e[3]=0,e[4]=f-M,e[5]=1-(l+b),e[6]=h+p,e[7]=0,e[8]=d+y,e[9]=h-p,e[10]=1-(l+m),e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}const x=Object(r.f)();function U(e,n){const t=n[0],r=n[1],i=n[2],a=n[3],s=t+t,u=r+r,c=i+i,o=t*s,l=r*s,f=r*u,d=i*s,m=i*u,h=i*c,b=a*s,p=a*u,y=a*c;return e[0]=1-f-h,e[1]=l+y,e[2]=d-p,e[3]=0,e[4]=l-y,e[5]=1-o-h,e[6]=m+b,e[7]=0,e[8]=d+p,e[9]=m-b,e[10]=1-o-f,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function _(e,n,t,r,i,a,s){const u=1/(t-n),c=1/(i-r),o=1/(a-s);return e[0]=2*a*u,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=2*a*c,e[6]=0,e[7]=0,e[8]=(t+n)*u,e[9]=(i+r)*c,e[10]=(s+a)*o,e[11]=-1,e[12]=0,e[13]=0,e[14]=s*a*2*o,e[15]=0,e}function O(e,n,t,r,i,a,s){const u=1/(n-t),c=1/(r-i),o=1/(a-s);return e[0]=-2*u,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*c,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*o,e[11]=0,e[12]=(n+t)*u,e[13]=(i+r)*c,e[14]=(s+a)*o,e[15]=1,e}function S(e,n,t,r){let a,s,c,o,l,f,d,m,h,b;const p=n[0],y=n[1],M=n[2],g=r[0],I=r[1],F=r[2],x=t[0],U=t[1],_=t[2];return Math.abs(p-x)<i.a&&Math.abs(y-U)<i.a&&Math.abs(M-_)<i.a?u(e):(d=p-x,m=y-U,h=M-_,b=1/Math.sqrt(d*d+m*m+h*h),d*=b,m*=b,h*=b,a=I*h-F*m,s=F*d-g*h,c=g*m-I*d,b=Math.sqrt(a*a+s*s+c*c),b?(b=1/b,a*=b,s*=b,c*=b):(a=0,s=0,c=0),o=m*c-h*s,l=h*a-d*c,f=d*s-m*a,b=Math.sqrt(o*o+l*l+f*f),b?(b=1/b,o*=b,l*=b,f*=b):(o=0,l=0,f=0),e[0]=a,e[1]=o,e[2]=d,e[3]=0,e[4]=s,e[5]=l,e[6]=m,e[7]=0,e[8]=c,e[9]=f,e[10]=h,e[11]=0,e[12]=-(a*p+s*y+c*M),e[13]=-(o*p+l*y+f*M),e[14]=-(d*p+m*y+h*M),e[15]=1,e)}function T(e,n,t){return e[0]=n[0]-t[0],e[1]=n[1]-t[1],e[2]=n[2]-t[2],e[3]=n[3]-t[3],e[4]=n[4]-t[4],e[5]=n[5]-t[5],e[6]=n[6]-t[6],e[7]=n[7]-t[7],e[8]=n[8]-t[8],e[9]=n[9]-t[9],e[10]=n[10]-t[10],e[11]=n[11]-t[11],e[12]=n[12]-t[12],e[13]=n[13]-t[13],e[14]=n[14]-t[14],e[15]=n[15]-t[15],e}function q(e,n){return e[0]===n[0]&&e[1]===n[1]&&e[2]===n[2]&&e[3]===n[3]&&e[4]===n[4]&&e[5]===n[5]&&e[6]===n[6]&&e[7]===n[7]&&e[8]===n[8]&&e[9]===n[9]&&e[10]===n[10]&&e[11]===n[11]&&e[12]===n[12]&&e[13]===n[13]&&e[14]===n[14]&&e[15]===n[15]}function w(e,n){if(e===n)return!0;const t=e[0],r=e[1],a=e[2],s=e[3],u=e[4],c=e[5],o=e[6],l=e[7],f=e[8],d=e[9],m=e[10],h=e[11],b=e[12],p=e[13],y=e[14],M=e[15],g=n[0],I=n[1],F=n[2],x=n[3],U=n[4],_=n[5],O=n[6],S=n[7],T=n[8],q=n[9],w=n[10],v=n[11],A=n[12],k=n[13],E=n[14],j=n[15];return Math.abs(t-g)<=i.a*Math.max(1,Math.abs(t),Math.abs(g))&&Math.abs(r-I)<=i.a*Math.max(1,Math.abs(r),Math.abs(I))&&Math.abs(a-F)<=i.a*Math.max(1,Math.abs(a),Math.abs(F))&&Math.abs(s-x)<=i.a*Math.max(1,Math.abs(s),Math.abs(x))&&Math.abs(u-U)<=i.a*Math.max(1,Math.abs(u),Math.abs(U))&&Math.abs(c-_)<=i.a*Math.max(1,Math.abs(c),Math.abs(_))&&Math.abs(o-O)<=i.a*Math.max(1,Math.abs(o),Math.abs(O))&&Math.abs(l-S)<=i.a*Math.max(1,Math.abs(l),Math.abs(S))&&Math.abs(f-T)<=i.a*Math.max(1,Math.abs(f),Math.abs(T))&&Math.abs(d-q)<=i.a*Math.max(1,Math.abs(d),Math.abs(q))&&Math.abs(m-w)<=i.a*Math.max(1,Math.abs(m),Math.abs(w))&&Math.abs(h-v)<=i.a*Math.max(1,Math.abs(h),Math.abs(v))&&Math.abs(b-A)<=i.a*Math.max(1,Math.abs(b),Math.abs(A))&&Math.abs(p-k)<=i.a*Math.max(1,Math.abs(p),Math.abs(k))&&Math.abs(y-E)<=i.a*Math.max(1,Math.abs(y),Math.abs(E))&&Math.abs(M-j)<=i.a*Math.max(1,Math.abs(M),Math.abs(j))}function v(e){const n=i.a,t=e[0],r=e[1],a=e[2],s=e[4],u=e[5],c=e[6],o=e[8],l=e[9],f=e[10];return Math.abs(1-(t*t+s*s+o*o))<=n&&Math.abs(1-(r*r+u*u+l*l))<=n&&Math.abs(1-(a*a+c*c+f*f))<=n}const A=l,k=T;Object.freeze({__proto__:null,copy:a,set:s,identity:u,transpose:c,invert:o,adjoint:function(e,n){const t=n[0],r=n[1],i=n[2],a=n[3],s=n[4],u=n[5],c=n[6],o=n[7],l=n[8],f=n[9],d=n[10],m=n[11],h=n[12],b=n[13],p=n[14],y=n[15];return e[0]=u*(d*y-m*p)-f*(c*y-o*p)+b*(c*m-o*d),e[1]=-(r*(d*y-m*p)-f*(i*y-a*p)+b*(i*m-a*d)),e[2]=r*(c*y-o*p)-u*(i*y-a*p)+b*(i*o-a*c),e[3]=-(r*(c*m-o*d)-u*(i*m-a*d)+f*(i*o-a*c)),e[4]=-(s*(d*y-m*p)-l*(c*y-o*p)+h*(c*m-o*d)),e[5]=t*(d*y-m*p)-l*(i*y-a*p)+h*(i*m-a*d),e[6]=-(t*(c*y-o*p)-s*(i*y-a*p)+h*(i*o-a*c)),e[7]=t*(c*m-o*d)-s*(i*m-a*d)+l*(i*o-a*c),e[8]=s*(f*y-m*b)-l*(u*y-o*b)+h*(u*m-o*f),e[9]=-(t*(f*y-m*b)-l*(r*y-a*b)+h*(r*m-a*f)),e[10]=t*(u*y-o*b)-s*(r*y-a*b)+h*(r*o-a*u),e[11]=-(t*(u*m-o*f)-s*(r*m-a*f)+l*(r*o-a*u)),e[12]=-(s*(f*p-d*b)-l*(u*p-c*b)+h*(u*d-c*f)),e[13]=t*(f*p-d*b)-l*(r*p-i*b)+h*(r*d-i*f),e[14]=-(t*(u*p-c*b)-s*(r*p-i*b)+h*(r*c-i*u)),e[15]=t*(u*d-c*f)-s*(r*d-i*f)+l*(r*c-i*u),e},determinant:function(e){const n=e[0],t=e[1],r=e[2],i=e[3],a=e[4],s=e[5],u=e[6],c=e[7],o=e[8],l=e[9],f=e[10],d=e[11],m=e[12],h=e[13],b=e[14],p=e[15];return(n*s-t*a)*(f*p-d*b)-(n*u-r*a)*(l*p-d*h)+(n*c-i*a)*(l*b-f*h)+(t*u-r*s)*(o*p-d*m)-(t*c-i*s)*(o*b-f*m)+(r*c-i*u)*(o*h-l*m)},multiply:l,translate:f,scale:d,rotate:m,rotateX:h,rotateY:b,rotateZ:p,fromTranslation:y,fromScaling:M,fromRotation:function(e,n,t){let r,a,s,u=t[0],c=t[1],o=t[2],l=Math.sqrt(u*u+c*c+o*o);return l<i.a?null:(l=1/l,u*=l,c*=l,o*=l,r=Math.sin(n),a=Math.cos(n),s=1-a,e[0]=u*u*s+a,e[1]=c*u*s+o*r,e[2]=o*u*s-c*r,e[3]=0,e[4]=u*c*s-o*r,e[5]=c*c*s+a,e[6]=o*c*s+u*r,e[7]=0,e[8]=u*o*s+c*r,e[9]=c*o*s-u*r,e[10]=o*o*s+a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)},fromXRotation:g,fromYRotation:function(e,n){const t=Math.sin(n),r=Math.cos(n);return e[0]=r,e[1]=0,e[2]=-t,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=t,e[9]=0,e[10]=r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e},fromZRotation:I,fromRotationTranslation:F,fromQuat2:function(e,n){const t=x,r=-n[0],i=-n[1],a=-n[2],s=n[3],u=n[4],c=n[5],o=n[6],l=n[7],f=r*r+i*i+a*a+s*s;return f>0?(t[0]=2*(u*s+l*r+c*a-o*i)/f,t[1]=2*(c*s+l*i+o*r-u*a)/f,t[2]=2*(o*s+l*a+u*i-c*r)/f):(t[0]=2*(u*s+l*r+c*a-o*i),t[1]=2*(c*s+l*i+o*r-u*a),t[2]=2*(o*s+l*a+u*i-c*r)),F(e,n,t),e},getTranslation:function(e,n){return e[0]=n[12],e[1]=n[13],e[2]=n[14],e},getScaling:function(e,n){const t=n[0],r=n[1],i=n[2],a=n[4],s=n[5],u=n[6],c=n[8],o=n[9],l=n[10];return e[0]=Math.sqrt(t*t+r*r+i*i),e[1]=Math.sqrt(a*a+s*s+u*u),e[2]=Math.sqrt(c*c+o*o+l*l),e},getRotation:function(e,n){const t=n[0]+n[5]+n[10];let r=0;return t>0?(r=2*Math.sqrt(t+1),e[3]=.25*r,e[0]=(n[6]-n[9])/r,e[1]=(n[8]-n[2])/r,e[2]=(n[1]-n[4])/r):n[0]>n[5]&&n[0]>n[10]?(r=2*Math.sqrt(1+n[0]-n[5]-n[10]),e[3]=(n[6]-n[9])/r,e[0]=.25*r,e[1]=(n[1]+n[4])/r,e[2]=(n[8]+n[2])/r):n[5]>n[10]?(r=2*Math.sqrt(1+n[5]-n[0]-n[10]),e[3]=(n[8]-n[2])/r,e[0]=(n[1]+n[4])/r,e[1]=.25*r,e[2]=(n[6]+n[9])/r):(r=2*Math.sqrt(1+n[10]-n[0]-n[5]),e[3]=(n[1]-n[4])/r,e[0]=(n[8]+n[2])/r,e[1]=(n[6]+n[9])/r,e[2]=.25*r),e},fromRotationTranslationScale:function(e,n,t,r){const i=n[0],a=n[1],s=n[2],u=n[3],c=i+i,o=a+a,l=s+s,f=i*c,d=i*o,m=i*l,h=a*o,b=a*l,p=s*l,y=u*c,M=u*o,g=u*l,I=r[0],F=r[1],x=r[2];return e[0]=(1-(h+p))*I,e[1]=(d+g)*I,e[2]=(m-M)*I,e[3]=0,e[4]=(d-g)*F,e[5]=(1-(f+p))*F,e[6]=(b+y)*F,e[7]=0,e[8]=(m+M)*x,e[9]=(b-y)*x,e[10]=(1-(f+h))*x,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e},fromRotationTranslationScaleOrigin:function(e,n,t,r,i){const a=n[0],s=n[1],u=n[2],c=n[3],o=a+a,l=s+s,f=u+u,d=a*o,m=a*l,h=a*f,b=s*l,p=s*f,y=u*f,M=c*o,g=c*l,I=c*f,F=r[0],x=r[1],U=r[2],_=i[0],O=i[1],S=i[2],T=(1-(b+y))*F,q=(m+I)*F,w=(h-g)*F,v=(m-I)*x,A=(1-(d+y))*x,k=(p+M)*x,E=(h+g)*U,j=(p-M)*U,D=(1-(d+b))*U;return e[0]=T,e[1]=q,e[2]=w,e[3]=0,e[4]=v,e[5]=A,e[6]=k,e[7]=0,e[8]=E,e[9]=j,e[10]=D,e[11]=0,e[12]=t[0]+_-(T*_+v*O+E*S),e[13]=t[1]+O-(q*_+A*O+j*S),e[14]=t[2]+S-(w*_+k*O+D*S),e[15]=1,e},fromQuat:U,frustum:_,perspective:function(e,n,t,r,i){const a=1/Math.tan(n/2);let s;return e[0]=a/t,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,null!=i&&i!==1/0?(s=1/(r-i),e[10]=(i+r)*s,e[14]=2*i*r*s):(e[10]=-1,e[14]=-2*r),e},perspectiveFromFieldOfView:function(e,n,t,r){const i=Math.tan(n.upDegrees*Math.PI/180),a=Math.tan(n.downDegrees*Math.PI/180),s=Math.tan(n.leftDegrees*Math.PI/180),u=Math.tan(n.rightDegrees*Math.PI/180),c=2/(s+u),o=2/(i+a);return e[0]=c,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=o,e[6]=0,e[7]=0,e[8]=-(s-u)*c*.5,e[9]=(i-a)*o*.5,e[10]=r/(t-r),e[11]=-1,e[12]=0,e[13]=0,e[14]=r*t/(t-r),e[15]=0,e},ortho:O,lookAt:S,targetTo:function(e,n,t,r){const i=n[0],a=n[1],s=n[2],u=r[0],c=r[1],o=r[2];let l=i-t[0],f=a-t[1],d=s-t[2],m=l*l+f*f+d*d;m>0&&(m=1/Math.sqrt(m),l*=m,f*=m,d*=m);let h=c*d-o*f,b=o*l-u*d,p=u*f-c*l;return m=h*h+b*b+p*p,m>0&&(m=1/Math.sqrt(m),h*=m,b*=m,p*=m),e[0]=h,e[1]=b,e[2]=p,e[3]=0,e[4]=f*p-d*b,e[5]=d*h-l*p,e[6]=l*b-f*h,e[7]=0,e[8]=l,e[9]=f,e[10]=d,e[11]=0,e[12]=i,e[13]=a,e[14]=s,e[15]=1,e},str:function(e){return"mat4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+", "+e[9]+", "+e[10]+", "+e[11]+", "+e[12]+", "+e[13]+", "+e[14]+", "+e[15]+")"},frob:function(e){return Math.sqrt(e[0]**2+e[1]**2+e[2]**2+e[3]**2+e[4]**2+e[5]**2+e[6]**2+e[7]**2+e[8]**2+e[9]**2+e[10]**2+e[11]**2+e[12]**2+e[13]**2+e[14]**2+e[15]**2)},add:function(e,n,t){return e[0]=n[0]+t[0],e[1]=n[1]+t[1],e[2]=n[2]+t[2],e[3]=n[3]+t[3],e[4]=n[4]+t[4],e[5]=n[5]+t[5],e[6]=n[6]+t[6],e[7]=n[7]+t[7],e[8]=n[8]+t[8],e[9]=n[9]+t[9],e[10]=n[10]+t[10],e[11]=n[11]+t[11],e[12]=n[12]+t[12],e[13]=n[13]+t[13],e[14]=n[14]+t[14],e[15]=n[15]+t[15],e},subtract:T,multiplyScalar:function(e,n,t){return e[0]=n[0]*t,e[1]=n[1]*t,e[2]=n[2]*t,e[3]=n[3]*t,e[4]=n[4]*t,e[5]=n[5]*t,e[6]=n[6]*t,e[7]=n[7]*t,e[8]=n[8]*t,e[9]=n[9]*t,e[10]=n[10]*t,e[11]=n[11]*t,e[12]=n[12]*t,e[13]=n[13]*t,e[14]=n[14]*t,e[15]=n[15]*t,e},multiplyScalarAndAdd:function(e,n,t,r){return e[0]=n[0]+t[0]*r,e[1]=n[1]+t[1]*r,e[2]=n[2]+t[2]*r,e[3]=n[3]+t[3]*r,e[4]=n[4]+t[4]*r,e[5]=n[5]+t[5]*r,e[6]=n[6]+t[6]*r,e[7]=n[7]+t[7]*r,e[8]=n[8]+t[8]*r,e[9]=n[9]+t[9]*r,e[10]=n[10]+t[10]*r,e[11]=n[11]+t[11]*r,e[12]=n[12]+t[12]*r,e[13]=n[13]+t[13]*r,e[14]=n[14]+t[14]*r,e[15]=n[15]+t[15]*r,e},exactEquals:q,equals:w,isOrthoNormal:v,mul:A,sub:k})},197:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return o})),t.d(n,"d",(function(){return l})),t.d(n,"e",(function(){return m})),t.d(n,"f",(function(){return h})),t.d(n,"g",(function(){return d})),t.d(n,"h",(function(){return f}));var r=t(94),i=t(138),a=t(110);function s(e){return new r.a({wkt:`GEOCCS["Spherical geocentric",\n    DATUM["Not specified",\n      SPHEROID["Sphere",${e.radius},0]],\n    PRIMEM["Greenwich",0.0,\n      AUTHORITY["EPSG","8901"]],\n    UNIT["m",1.0],\n    AXIS["Geocentric X",OTHER],\n    AXIS["Geocentric Y",EAST],\n    AXIS["Geocentric Z",NORTH]\n  ]`})}const u=s(i.a),c=s(i.b),o=s(i.c),l=new r.a({wkt:`GEOCCS["WGS 84",\n  DATUM["WGS_1984",\n    SPHEROID["WGS 84",${i.a.radius},298.257223563,\n      AUTHORITY["EPSG","7030"]],\n    AUTHORITY["EPSG","6326"]],\n  PRIMEM["Greenwich",0,\n    AUTHORITY["EPSG","8901"]],\n  UNIT["m",1.0,\n    AUTHORITY["EPSG","9001"]],\n  AXIS["Geocentric X",OTHER],\n  AXIS["Geocentric Y",OTHER],\n  AXIS["Geocentric Z",NORTH],\n  AUTHORITY["EPSG","4978"]\n]`});function f(e){return e&&e===i.b?c:e&&e===i.c?o:u}function d(e){return e&&(Object(a.i)(e)||e===c)?c:e&&(Object(a.j)(e)||e===o)?o:u}function m(e){return e&&(Object(a.i)(e)||e===c)?i.b:e&&(Object(a.j)(e)||e===o)?i.c:i.a}function h(e){return Object(a.n)(e)?i.b:Object(a.o)(e)?i.c:i.a}},265:function(e,n,t){"use strict";var r;function i(e,n){switch(e.type){case"range":{const t="range"in e?e.range[0]:e.minValue,i="range"in e?e.range[1]:e.maxValue;if(+n<t||+n>i)return r.VALUE_OUT_OF_RANGE;break}case"coded-value":case"codedValue":if(null==e.codedValues||e.codedValues.every((e=>null==e||e.code!==n)))return r.INVALID_CODED_VALUE}return null}function a(e){if(e&&"range"===e.type)return{min:"range"in e?e.range[0]:e.minValue,max:"range"in e?e.range[1]:e.maxValue}}t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return i})),function(e){e.VALUE_OUT_OF_RANGE="domain-validation-error::value-out-of-range",e.INVALID_CODED_VALUE="domain-validation-error::invalid-coded-value"}(r||(r={}))}}]);
//# sourceMappingURL=160.405829b3.chunk.js.map