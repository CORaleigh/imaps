(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[127],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return C})),n.d(t,"b",(function(){return v})),n.d(t,"c",(function(){return U})),n.d(t,"d",(function(){return A})),n.d(t,"e",(function(){return _})),n.d(t,"f",(function(){return E})),n.d(t,"g",(function(){return P})),n.d(t,"h",(function(){return R})),n.d(t,"i",(function(){return B})),n.d(t,"j",(function(){return c})),n.d(t,"k",(function(){return k})),n.d(t,"l",(function(){return I})),n.d(t,"m",(function(){return M})),n.d(t,"n",(function(){return L})),n.d(t,"o",(function(){return T})),n.d(t,"p",(function(){return j})),n.d(t,"q",(function(){return w})),n.d(t,"r",(function(){return F})),n.d(t,"s",(function(){return N})),n.d(t,"t",(function(){return G})),n.d(t,"u",(function(){return V})),n.d(t,"v",(function(){return S})),n.d(t,"w",(function(){return q})),n.d(t,"x",(function(){return x}));n(79);var r=n(90),s=n(180),i=n(93),o=n(139),u=n(106),a=n(266);const c=39.37,l=o.a.radius*Math.PI/200,d=/UNIT\[([^\]]+)\]\]$/i,f=a.a,h=/UNIT\[([^\]]+)\]/i,m=new Set([4261,4305,4807,4810,4811,4812,4816,4819,4821,4901,4902,37225,104139,104140]),g=Object(r.b)()({meter:"meters",foot:"feet",foot_us:"us-feet",foot_clarke:"clarke-feet",yard_clarke:"clarke-yards",link_clarke:"clarke-links",yard_sears:"sears-yards",foot_sears:"sears-feet",chain_sears:"sears-chains",chain_benoit_1895_b:"benoit-1895-b-chains",yard_indian:"indian-yards",yard_indian_1937:"indian-1937-yards",foot_gold_coast:"gold-coast-feet",chain_sears_1922_truncated:"sears-1922-truncated-chains","50_kilometers":"50-kilometers","150_kilometers":"150-kilometers"}),p=e=>e*e,y=e=>e*e*e,b={length:{baseUnit:"meters",units:{millimeters:{inBaseUnits:.001},centimeters:{inBaseUnits:.01},decimeters:{inBaseUnits:.1},meters:{inBaseUnits:1},kilometers:{inBaseUnits:1e3},inches:{inBaseUnits:.0254},feet:{inBaseUnits:.3048},yards:{inBaseUnits:.9144},miles:{inBaseUnits:1609.344},"nautical-miles":{inBaseUnits:1852},"us-feet":{inBaseUnits:1200/3937}}},area:{baseUnit:"square-meters",units:{"square-millimeters":{inBaseUnits:p(.001)},"square-centimeters":{inBaseUnits:p(.01)},"square-decimeters":{inBaseUnits:p(.1)},"square-meters":{inBaseUnits:1},"square-kilometers":{inBaseUnits:p(1e3)},"square-inches":{inBaseUnits:p(.0254)},"square-feet":{inBaseUnits:p(.3048)},"square-yards":{inBaseUnits:p(.9144)},"square-miles":{inBaseUnits:p(1609.344)},"square-us-feet":{inBaseUnits:p(1200/3937)},acres:{inBaseUnits:.0015625*p(1609.344)},ares:{inBaseUnits:100},hectares:{inBaseUnits:1e4}}},volume:{baseUnit:"liters",units:{liters:{inBaseUnits:1},"cubic-millimeters":{inBaseUnits:1e3*y(.001)},"cubic-centimeters":{inBaseUnits:1e3*y(.01)},"cubic-decimeters":{inBaseUnits:1e3*y(.1)},"cubic-meters":{inBaseUnits:1e3},"cubic-kilometers":{inBaseUnits:1e3*y(1e3)},"cubic-inches":{inBaseUnits:1e3*y(.0254)},"cubic-feet":{inBaseUnits:1e3*y(.3048)},"cubic-yards":{inBaseUnits:1e3*y(.9144)},"cubic-miles":{inBaseUnits:1e3*y(1609.344)}}},angle:{baseUnit:"radians",units:{radians:{inBaseUnits:1},degrees:{inBaseUnits:Math.PI/180}}}},O=function(){const e={};for(const t in b)for(const n in b[t].units)e[n]=t;return e}();const j=["metric","imperial","square-inches","square-feet","square-yards","square-miles","square-us-feet","square-meters","square-kilometers","acres","ares","hectares"],w=["metric","imperial","inches","feet","yards","miles","nautical-miles","us-feet","meters","kilometers"];function I(e){return"imperial"===e||"metric"===e}function T(e){const t=O[e];if(t)return t;throw new Error("unknown measure")}function v(e){return function(e){return b[e].baseUnit}(T(e))}function k(e,t=null){return t=t||T(e),b[t].baseUnit===e}function U(e,t,n){if(t===n)return e;const r=T(t);if(r!==T(n))throw new Error("incompatible units");const s=k(t,r)?e:function(e,t,n){return e*b[n].units[t].inBaseUnits}(e,t,r);return k(n,r)?s:function(e,t,n){return e/b[n].units[t].inBaseUnits}(s,n,r)}function S(e,t){return U(e,t,"meters")<3e3?"meters":"kilometers"}function q(e,t){return U(e,t,"meters")<1e5?"meters":"kilometers"}function N(e,t){return U(e,t,"feet")<1e3?"feet":"miles"}function G(e,t){return U(e,t,"feet")<1e5?"feet":"miles"}function V(e,t){return U(e,t,"square-meters")<3e6?"square-meters":"square-kilometers"}function F(e,t){return U(e,t,"square-feet")<1e6?"square-feet":"square-miles"}function M(e,t,n){return U(e,t,"meters")/(n*Math.PI/180)}function x(e){return g.fromJSON(e.toLowerCase())||null}function P(e){if(e&&"object"==typeof e&&!Object(u.g)(e))return 1;const t=E(e);return t>1e5?1:t}function B(e){return E(e)>=(e instanceof i.a?Object(s.e)(e).metersPerDegree:1e5)?"meters":R(e)}function E(e,t=o.a.metersPerDegree){return _(e,!0)||t}function _(e,t=!1){let n,r,s=null;if(null!=e&&("object"==typeof e?(n=e.wkid,r=e.wkt):"number"==typeof e?n=e:"string"==typeof e&&(r=e)),n){if(Object(u.n)(n))return o.b.metersPerDegree;if(Object(u.o)(n))return o.c.metersPerDegree;s=f.values[f[n]],!s&&t&&m.has(n)&&(s=l)}else if(r)if(-1!==r.search(/^PROJCS/i)){const e=d.exec(r);e&&e[1]&&(s=parseFloat(e[1].split(",")[1]))}else if(-1!==r.search(/^GEOCCS/i)){const e=h.exec(r);e&&e[1]&&(s=parseFloat(e[1].split(",")[1]))}return s}function R(e){let t,n,r=null;if(null!=e&&("object"==typeof e?(t=e.wkid,n=e.wkt):"number"==typeof e?t=e:"string"==typeof e&&(n=e)),t)r=f.units[f[t]];else if(n&&-1!==n.search(/^PROJCS/i)){let e=d.exec(n);e&&e[1]&&(e=/[\\"\\']{1}([^\\"\\']+)/.exec(e[1]),r=e&&e[1])}return r?x(r):null}function A(e){if(!e)return null;switch(R(e)){case"feet":case"us-feet":case"clarke-feet":case"clarke-yards":case"clarke-links":case"sears-yards":case"sears-feet":case"sears-chains":case"benoit-1895-b-chains":case"indian-yards":case"indian-1937-yards":case"gold-coast-feet":case"sears-1922-truncated-chains":return"imperial";case"50-kilometers":case"150-kilometers":case"meters":return"metric";case null:case void 0:return null}return null}const D={esriAcres:"acres",esriAres:"ares",esriHectares:"hectares",esriSquareCentimeters:"square-centimeters",esriSquareDecimeters:"square-decimeters",esriSquareFeet:"square-feet",esriSquareInches:"square-inches",esriSquareKilometers:"square-kilometers",esriSquareMeters:"square-meters",esriSquareMiles:"square-miles",esriSquareMillimeters:"square-millimeters",esriSquareUsFeet:"square-us-feet",esriSquareYards:"square-yards"},Z={esriCentimeters:"centimeters",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriYards:"yards"},C=Object(r.b)()(D),L=Object(r.b)()(Z);Object(r.b)()({...D,...Z})},113:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(81),s=n(90),i=n(86),o=n(83),u=(n(79),n(84),n(80),n(97)),a=n(82);const c=new s.a({inherited:"inherited",codedValue:"coded-value",range:"range"});let l=class extends i.a{constructor(e){super(e),this.name=null,this.type=null}};Object(r.a)([Object(o.b)({type:String,json:{write:!0}})],l.prototype,"name",void 0),Object(r.a)([Object(u.a)(c)],l.prototype,"type",void 0),l=Object(r.a)([Object(a.a)("esri.layers.support.Domain")],l);var d=l},135:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r,s=n(81),i=n(87),o=n(83),u=(n(84),n(79),n(80),n(97)),a=n(82),c=n(86);let l=r=class extends c.a{constructor(e){super(e),this.name=null,this.code=null}clone(){return new r({name:this.name,code:this.code})}};Object(s.a)([Object(o.b)({type:String,json:{write:!0}})],l.prototype,"name",void 0),Object(s.a)([Object(o.b)({type:[String,Number],json:{write:!0}})],l.prototype,"code",void 0),l=r=Object(s.a)([Object(a.a)("esri.layers.support.CodedValue")],l);var d,f=l,h=n(113);let m=d=class extends h.a{constructor(e){super(e),this.codedValues=null,this.type="coded-value"}getName(e){let t=null;if(this.codedValues){const n=String(e);this.codedValues.some((e=>(String(e.code)===n&&(t=e.name),!!t)))}return t}clone(){return new d({codedValues:Object(i.a)(this.codedValues),name:this.name})}};Object(s.a)([Object(o.b)({type:[f],json:{write:!0}})],m.prototype,"codedValues",void 0),Object(s.a)([Object(u.a)({codedValue:"coded-value"})],m.prototype,"type",void 0),m=d=Object(s.a)([Object(a.a)("esri.layers.support.CodedValueDomain")],m);var g=m},136:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r,s=n(81),i=(n(83),n(79),n(84),n(80),n(97)),o=n(82),u=n(113);let a=r=class extends u.a{constructor(e){super(e),this.type="inherited"}clone(){return new r}};Object(s.a)([Object(i.a)({inherited:"inherited"})],a.prototype,"type",void 0),a=r=Object(s.a)([Object(o.a)("esri.layers.support.InheritedDomain")],a);var c=a},137:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r,s=n(81),i=n(83),o=(n(79),n(84),n(80),n(97)),u=n(82),a=n(113);let c=r=class extends a.a{constructor(e){super(e),this.maxValue=null,this.minValue=null,this.type="range"}clone(){return new r({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}};Object(s.a)([Object(i.b)({type:Number,json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range&&t.range[1]},write:{enabled:!1,overridePolicy(){return{enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer(e,t,n){t[n]=[this.minValue||0,e]}}}})],c.prototype,"maxValue",void 0),Object(s.a)([Object(i.b)({type:Number,json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range&&t.range[0]},write:{target:"range",writer(e,t,n){t[n]=[e,this.maxValue||0]}}}})],c.prototype,"minValue",void 0),Object(s.a)([Object(o.a)({range:"range"})],c.prototype,"type",void 0),c=r=Object(s.a)([Object(u.a)("esri.layers.support.RangeDomain")],c);var l=c},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r,s=n(81),i=n(90),o=n(86),u=n(83),a=(n(79),n(84)),c=(n(80),n(97)),l=n(94),d=n(82),f=n(164),h=n(250);const m=new i.a({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});let g=r=class extends o.a{constructor(e){super(e),this.alias=null,this.defaultValue=void 0,this.description=null,this.domain=null,this.editable=!0,this.length=-1,this.name=null,this.nullable=!0,this.type=null,this.valueType=null}readDescription(e,{description:t}){let n;try{n=JSON.parse(t)}catch(r){}return n?n.value:null}readValueType(e,{description:t}){let n;try{n=JSON.parse(t)}catch(r){}return n?m.fromJSON(n.fieldValueType):null}clone(){return new r({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType})}};Object(s.a)([Object(u.b)({type:String,json:{write:!0}})],g.prototype,"alias",void 0),Object(s.a)([Object(u.b)({type:[String,Number],json:{write:{allowNull:!0}}})],g.prototype,"defaultValue",void 0),Object(s.a)([Object(u.b)()],g.prototype,"description",void 0),Object(s.a)([Object(l.a)("description")],g.prototype,"readDescription",null),Object(s.a)([Object(u.b)({types:f.d,json:{read:{reader:f.b},write:!0}})],g.prototype,"domain",void 0),Object(s.a)([Object(u.b)({type:Boolean,json:{write:!0}})],g.prototype,"editable",void 0),Object(s.a)([Object(u.b)({type:a.a,json:{write:!0}})],g.prototype,"length",void 0),Object(s.a)([Object(u.b)({type:String,json:{write:!0}})],g.prototype,"name",void 0),Object(s.a)([Object(u.b)({type:Boolean,json:{write:!0}})],g.prototype,"nullable",void 0),Object(s.a)([Object(c.a)(h.a)],g.prototype,"type",void 0),Object(s.a)([Object(u.b)()],g.prototype,"valueType",void 0),Object(s.a)([Object(l.a)("valueType",["description"])],g.prototype,"readValueType",null),g=r=Object(s.a)([Object(d.a)("esri.layers.support.Field")],g);var p=g},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return c}));n(79);var r,s,i=n(135),o=n(113),u=n(136),a=n(137);function c(e,t){switch(e.type){case"range":{const n="range"in e?e.range[0]:e.minValue,s="range"in e?e.range[1]:e.maxValue;if(+t<n||+t>s)return r.VALUE_OUT_OF_RANGE;break}case"coded-value":case"codedValue":if(null==e.codedValues||e.codedValues.every((e=>null==e||e.code!==t)))return r.INVALID_CODED_VALUE}return null}(s=r||(r={})).VALUE_OUT_OF_RANGE="domain-validation-error::value-out-of-range",s.INVALID_CODED_VALUE="domain-validation-error::invalid-coded-value";const l={key:"type",base:o.a,typeMap:{range:a.a,"coded-value":i.a,inherited:u.a}};function d(e){if(e&&"range"===e.type)return{min:"range"in e?e.range[0]:e.minValue,max:"range"in e?e.range[1]:e.maxValue}}function f(e){if(!e||!e.type)return null;switch(e.type){case"range":return a.a.fromJSON(e);case"codedValue":return i.a.fromJSON(e);case"inherited":return u.a.fromJSON(e)}return null}},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return Y})),n.d(t,"b",(function(){return Q})),n.d(t,"c",(function(){return z})),n.d(t,"d",(function(){return J})),n.d(t,"e",(function(){return H})),n.d(t,"f",(function(){return Z})),n.d(t,"g",(function(){return D})),n.d(t,"h",(function(){return _})),n.d(t,"i",(function(){return X})),n.d(t,"j",(function(){return K})),n.d(t,"k",(function(){return $})),n.d(t,"l",(function(){return M})),n.d(t,"m",(function(){return I})),n.d(t,"n",(function(){return R})),n.d(t,"o",(function(){return B})),n.d(t,"p",(function(){return de})),n.d(t,"q",(function(){return re})),n.d(t,"r",(function(){return oe})),n.d(t,"s",(function(){return le})),n.d(t,"t",(function(){return te})),n.d(t,"u",(function(){return ne})),n.d(t,"v",(function(){return b})),n.d(t,"w",(function(){return O})),n.d(t,"x",(function(){return ae})),n.d(t,"y",(function(){return ee})),n.d(t,"z",(function(){return ue}));var r=n(88),s=n(80),i=n(85),o=n(95),u=n(237),a=n(279),c=n(167);function l(e,t){return e?t?4:3:t?3:2}const d=s.a.getLogger("esri.tasks.support.optimizedFeatureSet"),f={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0},h=(e,t,n,r,s,i)=>{e[n]=s,e[n+1]=i},m=(e,t,n,r,s,i)=>{e[n]=s,e[n+1]=i,e[n+2]=t[r+2]},g=(e,t,n,r,s,i)=>{e[n]=s,e[n+1]=i,e[n+2]=t[r+3]},p=(e,t,n,r,s,i)=>{e[n]=s,e[n+1]=i,e[n+2]=t[r+2],e[n+3]=t[r+3]};function y(e,t,n,r){if(e){if(n)return t&&r?p:m;if(t&&r)return g}else if(t&&r)return m;return h}function b({scale:e,translate:t},n){return Math.round((n-t[0])/e[0])}function O({scale:e,translate:t},n){return Math.round((t[1]-n)/e[1])}function j({scale:e,translate:t},n){return n*e[0]+t[0]}function w({scale:e,translate:t},n){return t[1]-n*e[1]}function I(e,t,n){return e?t?n?N(e):k(e):n?S(e):T(e):null}function T(e){const t=e.coords;return{x:t[0],y:t[1]}}function v(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e}function k(e){const t=e.coords;return{x:t[0],y:t[1],z:t[2]}}function U(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e}function S(e){const t=e.coords;return{x:t[0],y:t[1],m:t[2]}}function q(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.m,e}function N(e){const t=e.coords;return{x:t[0],y:t[1],z:t[2],m:t[3]}}function G(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e.coords[3]=t.m,e}function V(e,t){return e&&t?G:e?U:t?q:v}function F(e,t,n,r,s){const i=V(n,r);for(const o of t){const{geometry:t,attributes:n}=o;let r;t&&(r=i(new c.a,t)),e.push(new u.b(r,n,null,n[s]))}return e}function M(e,t,n){if(Object(i.j)(e))return null;const r=l(t,n),s=[];for(let i=0;i<e.coords.length;i+=r){const t=[];for(let n=0;n<r;n++)t.push(e.coords[i+n]);s.push(t)}return t?n?{points:s,hasZ:t,hasM:n}:{points:s,hasZ:t}:n?{points:s,hasM:n}:{points:s}}function x(e,t,n,r,s){const i=l(n,r);for(const o of t){const t=o.geometry,n=o.attributes;let r;t&&(r=P(new c.a,t,i)),e.push(new u.b(r,n,null,n[s]))}return e}function P(e,t,n=l(t.hasZ,t.hasM)){e.lengths[0]=t.points.length;const r=e.coords;let s=0;for(const i of t.points)for(let e=0;e<n;e++)r[s++]=i[e];return e}function B(e,t,n){if(!e)return null;const r=l(t,n),{coords:s,lengths:i}=e,o=[];let u=0;for(const a of i){const e=[];for(let t=0;t<a;t++){const t=[];for(let e=0;e<r;e++)t.push(s[u++]);e.push(t)}o.push(e)}return t?n?{paths:o,hasZ:t,hasM:n}:{paths:o,hasZ:t}:n?{paths:o,hasM:n}:{paths:o}}function E(e,t,n,r,s){const i=l(n,r);for(const o of t){const t=o.geometry,n=o.attributes;let r;t&&(r=_(new c.a,t,i)),e.push(new u.b(r,n,null,n[s]))}return e}function _(e,t,n=l(t.hasZ,t.hasM)){const{lengths:r,coords:s}=e;let i=0;for(const o of t.paths){for(const e of o)for(let t=0;t<n;t++)s[i++]=e[t];r.push(o.length)}return e}function R(e,t,n){if(!e)return null;const r=l(t,n),{coords:s,lengths:i}=e,o=[];let u=0;for(const a of i){const e=[];for(let t=0;t<a;t++){const t=[];for(let e=0;e<r;e++)t.push(s[u++]);e.push(t)}o.push(e)}return t?n?{rings:o,hasZ:t,hasM:n}:{rings:o,hasZ:t}:n?{rings:o,hasM:n}:{rings:o}}function A(e,t,n,r,s){for(const o of t){const t=o.geometry,a=o.centroid,l=o.attributes;let d;t&&(d=D(new c.a,t,n,r)),Object(i.k)(a)?e.push(new u.b(d,l,v(new c.a,a),l[s])):e.push(new u.b(d,l,null,l[s]))}return e}function D(e,t,n=t.hasZ,r=t.hasM){return Z(e,t.rings,n,r),e}function Z(e,t,n,r){const s=l(n,r),{lengths:i,coords:o}=e;let u=0;i.length=o.length=0;for(const a of t){for(const e of a)for(let t=0;t<s;t++)o[u++]=e[t];i.push(a.length)}return e}const C=[],L=[];function Y(e,t,n,r,s){C[0]=e;const[i]=z(L,C,t,n,r,s);return C.length=L.length=0,i}function z(e,t,n,s,i,o){if(e.length=0,!n){for(const n of t){const t=n.attributes[o];e.push(new u.b(null,n.attributes,null,t))}return e}switch(n){case"esriGeometryPoint":return F(e,t,s,i,o);case"esriGeometryMultipoint":return x(e,t,s,i,o);case"esriGeometryPolyline":return E(e,t,s,i,o);case"esriGeometryPolygon":return A(e,t,s,i,o);default:d.error("convertToFeatureSet:unknown-geometry",new r.a(`Unable to parse unknown geometry type '${n}'`)),e.length=0}return e}function H(e,t,n,s,i,o){const u=e.length;switch(n){case"esriGeometryPoint":F(e,t,s,i,o);break;case"esriGeometryMultipoint":x(e,t,s,i,o);break;case"esriGeometryPolyline":E(e,t,s,i,o);break;case"esriGeometryPolygon":A(e,t,s,i,o);break;default:d.error("convertToFeatureSet:unknown-geometry",new r.a(`Unable to parse unknown geometry type '${n}'`))}for(let r=0;r<t.length;r++)e[r+u].geometryType=n,e[r+u].insertAfter=t[r].insertAfter,e[r+u].groupId=t[r].groupId;return e}function X(e,t,n,r){L[0]=e,W(C,L,t,n,r);const s=C[0];return C.length=L.length=0,s}function J(e,t,n){if(Object(i.j)(e))return null;const s=new c.a;return"hasZ"in e&&null==t&&(t=e.hasZ),"hasM"in e&&null==n&&(n=e.hasM),Object(o.f)(e)?V(null!=t?t:null!=e.z,null!=n?n:null!=e.m)(s,e):Object(o.g)(e)?D(s,e,t,n):Object(o.h)(e)?_(s,e,l(t,n)):Object(o.e)(e)?P(s,e,l(t,n)):void d.error("convertFromGeometry:unknown-geometry",new r.a(`Unable to parse unknown geometry type '${e}'`))}function $(e,t,n,s){const o=e&&("coords"in e?e:e.geometry);if(Object(i.j)(o))return null;switch(t){case"esriGeometryPoint":{let e=T;return n&&s?e=N:n?e=k:s&&(e=S),e(o)}case"esriGeometryMultipoint":return M(o,n,s);case"esriGeometryPolyline":return B(o,n,s);case"esriGeometryPolygon":return R(o,n,s);default:return void d.error("convertToGeometry:unknown-geometry",new r.a(`Unable to parse unknown geometry type '${t}'`))}}function W(e,t,n,s,o){if(e.length=0,Object(i.j)(n))return function(e,t){for(const n of t)e.push({attributes:n.attributes});return e}(e,t);switch(n){case"esriGeometryPoint":return function(e,t,n,r){let s=T;n&&r?s=N:n?s=k:r&&(s=S);for(const o of t){const{geometry:t,attributes:n}=o,r=Object(i.k)(t)?s(t):null;e.push({attributes:n,geometry:r})}return e}(e,t,s,o);case"esriGeometryMultipoint":return function(e,t,n,r){for(const s of t){const{geometry:t,attributes:i}=s;let o;t&&(o=M(t,n,r)),e.push({attributes:i,geometry:o})}return e}(e,t,s,o);case"esriGeometryPolyline":return function(e,t,n,r){for(const s of t){const{geometry:t,attributes:o}=s;let u;Object(i.k)(t)&&(u=B(t,n,r)),e.push({attributes:o,geometry:u})}return e}(e,t,s,o);case"esriGeometryPolygon":return function(e,t,n,r){for(const s of t){const{geometry:t,attributes:o,centroid:u}=s;let a;if(Object(i.k)(t)&&(a=R(t,n,r)),u){const t=T(u);e.push({attributes:o,centroid:t,geometry:a})}else e.push({attributes:o,geometry:a})}return e}(e,t,s,o);default:d.error("convertToFeatureSet:unknown-geometry",new r.a(`Unable to parse unknown geometry type '${n}'`))}return e}function K(e){const{objectIdFieldName:t,spatialReference:n,transform:r,fields:s,hasM:i,hasZ:o,features:u,geometryType:a,exceededTransferLimit:c,uniqueIdField:l,queryGeometry:d,queryGeometryType:f}=e,h={features:W([],u,a,o,i),fields:s,geometryType:a,objectIdFieldName:t,spatialReference:n,uniqueIdField:l,queryGeometry:$(d,f,!1,!1)};return r&&(h.transform=r),c&&(h.exceededTransferLimit=c),i&&(h.hasM=i),o&&(h.hasZ=o),h}function Q(e,t){const n=new a.a,{hasM:s,hasZ:i,features:o,objectIdFieldName:u,spatialReference:c,geometryType:l,exceededTransferLimit:f,transform:h,fields:m}=e;return m&&(n.fields=m),n.geometryType=l,n.objectIdFieldName=u||t,n.spatialReference=c,n.objectIdFieldName?(o&&z(n.features,o,l,i,s,n.objectIdFieldName),f&&(n.exceededTransferLimit=f),s&&(n.hasM=s),i&&(n.hasZ=i),h&&(n.transform=h),n):(d.error(new r.a("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),n)}function ee(e){const{transform:t,features:n,hasM:r,hasZ:s}=e;if(!t)return e;for(const o of n)Object(i.k)(o.geometry)&&ue(o.geometry,o.geometry,r,s,t),o.centroid&&ue(o.centroid,o.centroid,r,s,t);return e.transform=null,e}function te(e,t){const{geometryType:n,features:r,hasM:s,hasZ:i}=t;if(!e)return t;for(let o=0;o<r.length;o++){const t=r[o],u=t.weakClone();u.geometry=new c.a,ne(u.geometry,t.geometry,s,i,n,e),t.centroid&&(u.centroid=new c.a,ne(u.centroid,t.centroid,s,i,"esriGeometryPoint",e)),r[o]=u}return t.transform=e,t}function ne(e,t,n,r,s,o,u=n,a=r){if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),Object(i.j)(t)||!t.coords.length)return null;const c=f[s],{coords:d,lengths:h}=t,m=l(n,r),g=l(n&&u,r&&a),p=y(n,r,u,a);if(!h.length)return p(e.coords,d,0,0,b(o,d[0]),O(o,d[1])),e.lengths.length&&(e.lengths.length=0),e.coords.length=m,e;let j,w,I,T,v=0,k=0,U=k;for(const i of h){if(i<c)continue;let t=0;k=U,I=j=b(o,d[v]),T=w=O(o,d[v+1]),p(e.coords,d,k,v,I,T),t++,v+=m,k+=g;for(let n=1;n<i;n++,v+=m)I=b(o,d[v]),T=O(o,d[v+1]),I===j&&T===w||(p(e.coords,d,k,v,I-j,T-w),k+=g,t++,j=I,w=T);t>=c&&(e.lengths.push(t),U=k)}return e.coords.length=U,e.coords.length?e:null}function re(e,t,n,r,s,i,o=n,u=r){if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),!t||!t.coords.length)return null;const a=f[s],{coords:c,lengths:d}=t,h=l(n,r),m=l(n&&o,r&&u),g=y(n,r,o,u);if(!d.length)return g(e.coords,c,0,0,c[0],c[1]),e.lengths.length&&(e.lengths.length=0),e.coords.length=h,e;let p=0;const b=i*i;for(const l of d){if(l<a){p+=l*h;continue}const t=e.coords.length/m,n=p,r=p+(l-1)*h;g(e.coords,c,e.coords.length,n,c[n],c[n+1]),ie(e.coords,c,h,b,g,n,r),g(e.coords,c,e.coords.length,r,c[r],c[r+1]);const s=e.coords.length/m-t;s>=a?e.lengths.push(s):e.coords.length=t*m,p+=l*h}return e.coords.length?e:null}function se(e,t,n,r){const s=e[t],i=e[t+1],o=e[n],u=e[n+1],a=e[r],c=e[r+1];let l=o,d=u,f=a-l,h=c-d;if(0!==f||0!==h){const e=((s-l)*f+(i-d)*h)/(f*f+h*h);e>1?(l=a,d=c):e>0&&(l+=f*e,d+=h*e)}return f=s-l,h=i-d,f*f+h*h}function ie(e,t,n,r,s,i,o){let u,a=r,c=0;for(let l=i+n;l<o;l+=n)u=se(t,l,i,o),u>a&&(c=l,a=u);a>r&&(c-i>n&&ie(e,t,n,r,s,i,c),s(e,t,e.length,c,t[c],t[c+1]),o-c>n&&ie(e,t,n,r,s,c,o))}function oe(e,t,n,r){if(Object(i.j)(t)||!t.coords||!t.coords.length)return null;const s=l(n,r);let o=Number.POSITIVE_INFINITY,u=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,c=Number.NEGATIVE_INFINITY;if(t&&t.coords){const e=t.coords;for(let t=0;t<e.length;t+=s){const n=e[t],r=e[t+1];o=Math.min(o,n),a=Math.max(a,n),u=Math.min(u,r),c=Math.max(c,r)}}return e[0]=o,e[1]=u,e[2]=a,e[3]=c,e}function ue(e,t,n,r,s){const{coords:i,lengths:o}=t,u=n?r?p:m:r?m:h,a=l(n,r);if(!i.length)return e!==t&&(e.lengths.length=0,e.coords.length=0),e;if(!o.length)return u(e.coords,i,0,0,j(s,i[0]),w(s,i[1])),e!==t&&(e.lengths.length=0,e.coords.length=a),e;const[c,d]=s.scale;let f=0;for(let l=0;l<o.length;l++){const t=o[l];e.lengths[l]=t;let n=j(s,i[f]),r=w(s,i[f+1]);u(e.coords,i,f,f,n,r),f+=a;for(let s=1;s<t;s++,f+=a)n+=i[f]*c,r-=i[f+1]*d,u(e.coords,i,f,f,n,r)}return e!==t&&(e.lengths.length=o.length,e.coords.length=i.length),e}function ae(e,t,n,r,s,i){const o=l(n,r),u=y(n,r,s,i),a=t.coords;e.coords.length=0,e.lengths.length=0,e.lengths.push(...t.lengths);for(let c=0;c<a.length;c+=o)u(e.coords,a,e.coords.length,c,a[c],a[c+1]);return e}function ce(e,t,n,r){let s=0,i=e[r*t],o=e[r*(t+1)];for(let u=1;u<n;u++){const n=i+e[r*(t+u)],a=o+e[r*(t+u)+1],c=(n-i)*(a+o);i=n,o=a,s+=c}return.5*s}function le(e,t){const{coords:n,lengths:r}=e;let s=0,i=0;for(let o=0;o<r.length;o++)i+=ce(n,s,r[o],t),s+=o;return Math.abs(i)}function de(e,t){if(Object(i.j)(e))return null;const n=e.clone(),r=e.coords,s=e.lengths;let o=0;for(let i=0;i<s.length;i++){const e=s[i];let u=r[t*o],a=r[t*o+1];for(let s=1;s<e;s++){const e=u+r[t*(o+s)],i=a+r[t*(o+s)+1];n.coords[t*(o+s)]=e,n.coords[t*(o+s)+1]=i,u=e,a=i}o+=e}return n}},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));class r{constructor(e=[],t=[],n=!1){this.lengths=null!=e?e:[],this.coords=null!=t?t:[],this.hasIndeterminateRingOrder=n}get isPoint(){return 0===this.lengths.length}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce(((e,t)=>e+t))}forEachVertex(e){let t=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(let n=0;n<this.lengths.length;n++){const r=this.lengths[n];for(let n=0;n<r;n++)e(this.coords[2*(n+t)],this.coords[2*(n+t)+1]);t+=r}}clone(e){return e?(e.set(this.coords),new r(this.lengths.slice(),e,this.hasIndeterminateRingOrder)):new r(this.lengths.slice(),this.coords.slice(),this.hasIndeterminateRingOrder)}}},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return h})),n.d(t,"f",(function(){return m})),n.d(t,"g",(function(){return f})),n.d(t,"h",(function(){return d}));var r=n(93),s=n(139),i=n(106);function o(e){return new r.a({wkt:`GEOCCS["Spherical geocentric",\n    DATUM["Not specified",\n      SPHEROID["Sphere",${e.radius},0]],\n    PRIMEM["Greenwich",0.0,\n      AUTHORITY["EPSG","8901"]],\n    UNIT["m",1.0],\n    AXIS["Geocentric X",OTHER],\n    AXIS["Geocentric Y",EAST],\n    AXIS["Geocentric Z",NORTH]\n  ]`})}const u=o(s.a),a=o(s.b),c=o(s.c),l=new r.a({wkt:`GEOCCS["WGS 84",\n  DATUM["WGS_1984",\n    SPHEROID["WGS 84",${s.a.radius},298.257223563,\n      AUTHORITY["EPSG","7030"]],\n    AUTHORITY["EPSG","6326"]],\n  PRIMEM["Greenwich",0,\n    AUTHORITY["EPSG","8901"]],\n  UNIT["m",1.0,\n    AUTHORITY["EPSG","9001"]],\n  AXIS["Geocentric X",OTHER],\n  AXIS["Geocentric Y",OTHER],\n  AXIS["Geocentric Z",NORTH],\n  AUTHORITY["EPSG","4978"]\n]`});function d(e){return e&&e===s.b?a:e&&e===s.c?c:u}function f(e){return e&&(Object(i.i)(e)||e===a)?a:e&&(Object(i.j)(e)||e===c)?c:u}function h(e){return e&&(Object(i.i)(e)||e===a)?s.b:e&&(Object(i.j)(e)||e===c)?s.c:s.a}function m(e){return Object(i.n)(e)?s.b:Object(i.o)(e)?s.c:s.a}},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return i}));var r=n(85);class s{constructor(e=null,t={},n,r){this.geometry=e,this.attributes=t,this.centroid=n,this.objectId=r,this.displayId=0,this.geohashX=0,this.geohashY=0}weakClone(){const e=new s(this.geometry,this.attributes,this.centroid,this.objectId);return e.displayId=this.displayId,e.geohashX=this.geohashX,e.geohashY=this.geohashY,e}}function i(e){return!(Object(r.j)(e.geometry)||!e.geometry.coords||!e.geometry.coords.length)}class o extends s{}},250:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=new(n(90).a)({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml"})},254:function(e,t,n){"use strict";function r(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function s(e){return null!=e&&!isNaN(e)&&isFinite(e)}function i(e){return e.valueExpression?"expression":e.field&&"string"==typeof e.field?"field":"unknown"}function o(e,t){const n=t||i(e),r=e.valueUnit||"unknown";return"unknown"===n?"constant":e.stops?"stops":null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?"clamped-linear":"unknown"===r?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?"proportional":"additive":"identity":"real-world-size"}n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return s}))},279:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));class r{constructor(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}weakClone(){const e=new r;return e.objectIdFieldName=this.objectIdFieldName,e.globalIdFieldName=this.globalIdFieldName,e.geohashFieldName=this.geohashFieldName,e.geometryProperties=this.geometryProperties,e.geometryType=this.geometryType,e.spatialReference=this.spatialReference,e.hasZ=this.hasZ,e.hasM=this.hasM,e.features=this.features,e.fields=this.fields,e.transform=this.transform,e.exceededTransferLimit=this.exceededTransferLimit,e.uniqueIdField=this.uniqueIdField,e.queryGeometry=this.queryGeometry,e.queryGeometryType=this.queryGeometryType,e}}},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(90),s=n(83);function i(e,t={}){var n;const i=e instanceof r.a?e:new r.a(e,t),o={type:null==(n=null==t?void 0:t.ignoreUnknown)||n?i.apiValues:String,readOnly:null==t?void 0:t.readOnly,json:{type:i.jsonValues,read:(null==t||!t.readOnly)&&{reader:i.read},write:{writer:i.write}}};return void 0!==(null==t?void 0:t.default)&&(o.json.default=t.default),void 0!==(null==t?void 0:t.name)&&(o.json.name=t.name),Object(s.b)(o)}}}]);
//# sourceMappingURL=127.4838b19e.chunk.js.map