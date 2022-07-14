"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[9263,8860],{27135:(e,n,t)=>{t.d(n,{J:()=>i});var s=t(43404),r=t(49861);function i(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const t=e instanceof s.X?e:new s.X(e,n),i={type:n?.ignoreUnknown??1?t.apiValues:String,json:{type:t.jsonValues,read:!n?.readOnly&&{reader:t.read},write:{writer:t.write}}};return void 0!==n?.readOnly&&(i.readOnly=!!n.readOnly),void 0!==n?.default&&(i.json.default=n.default),void 0!==n?.name&&(i.json.name=n.name),(0,r.Cb)(i)}},29616:(e,n,t)=>{t.d(n,{Qc:()=>u,WU:()=>c,lt:()=>o,ti:()=>a});var s=t(643),r=t(36257);const i={ar:[".",","],bg:[",","\xa0"],bs:[",","."],ca:[",","."],cs:[",","\xa0"],da:[",","."],de:[",","."],"de-ch":[".","\u2019"],el:[",","."],en:[".",","],"en-au":[".",","],es:[",","."],"es-mx":[".",","],et:[",","\xa0"],fi:[",","\xa0"],fr:[",","\u202f"],"fr-ch":[",","\u202f"],he:[".",","],hi:[".",",","#,##,##0.###"],hr:[",","."],hu:[",","\xa0"],id:[",","."],it:[",","."],"it-ch":[".","\u2019"],ja:[".",","],ko:[".",","],lt:[",","\xa0"],lv:[",","\xa0"],mk:[",","."],nb:[",","\xa0"],nl:[",","."],pl:[",","\xa0"],pt:[",","."],"pt-pt":[",","\xa0"],ro:[",","."],ru:[",","\xa0"],sk:[",","\xa0"],sl:[",","."],sr:[",","."],sv:[",","\xa0"],th:[".",","],tr:[",","."],uk:[",","\xa0"],vi:[",","."],zh:[".",","]};function a(e){e||(e=(0,r.Kd)());let n=e in i;if(!n){const t=e.split("-");t.length>1&&t[0]in i&&(e=t[0],n=!0),n||(e="en")}const[t,s,a="#,##0.###"]=i[e];return{decimal:t,group:s,pattern:a}}function c(e,n){const t=a((n={...n}).locale);n.customs=t;const s=n.pattern||t.pattern;return isNaN(e)||Math.abs(e)===1/0?null:function(e,n,t){const s=(t=t||{}).customs.group,r=t.customs.decimal,i=n.split(";"),a=i[0];if((n=i[e<0?1:0]||"-"+a).includes("%"))e*=100;else if(n.includes("\u2030"))e*=1e3;else{if(n.includes("\xa4"))throw new Error("currency notation not supported");if(n.includes("E"))throw new Error("exponential notation not supported")}const c=l,o=a.match(c);if(!o)throw new Error("unable to find a number expression in pattern: "+n);return!1===t.fractional&&(t.places=0),n.replace(c,function(e,n,t){!0===(t=t||{}).places&&(t.places=0),t.places===1/0&&(t.places=6);const s=n.split("."),r="string"==typeof t.places&&t.places.indexOf(",");let i=t.places;r?i=t.places.substring(r+1):i>=0||(i=(s[1]||[]).length),t.round<0||(e=Number(e.toFixed(Number(i))));const a=String(Math.abs(e)).split("."),c=a[1]||"";if(s[1]||t.places){r&&(t.places=t.places.substring(0,r));const e=void 0!==t.places?t.places:s[1]&&s[1].lastIndexOf("0")+1;e>c.length&&(a[1]=c.padEnd(Number(e),"0")),i<c.length&&(a[1]=c.substr(0,Number(i)))}else a[1]&&a.pop();const l=s[0].replace(",","");let o=l.indexOf("0");-1!==o&&(o=l.length-o,o>a[0].length&&(a[0]=a[0].padStart(o,"0")),l.includes("#")||(a[0]=a[0].substr(a[0].length-o)));let u,f,d=s[0].lastIndexOf(",");if(-1!==d){u=s[0].length-d-1;const e=s[0].substr(0,d);d=e.lastIndexOf(","),-1!==d&&(f=e.length-d-1)}const p=[];for(let m=a[0];m;){const e=m.length-u;p.push(e>0?m.substr(e):m),m=e>0?m.slice(0,e):"",f&&(u=f,f=void 0)}return a[0]=p.reverse().join(t.group||","),a.join(t.decimal||".")}(e,o[0],{decimal:r,group:s,places:t.places,round:t.round}))}(e,s,n)}const l=/[#0,]*[#0](?:\.0*#*)?/;function o(e){const n=a((e=e||{}).locale),t=e.pattern||n.pattern,r=n.group,i=n.decimal;let c=1;if(t.includes("%"))c/=100;else if(t.includes("\u2030"))c/=1e3;else if(t.includes("\xa4"))throw new Error("currency notation not supported");const o=t.split(";");1===o.length&&o.push("-"+o[0]);const u=d(o,(n=>(n="(?:"+(0,s.Qs)(n,".")+")").replace(l,(n=>{const t={signed:!1,separator:e.strict?r:[r,""],fractional:e.fractional,decimal:i,exponent:!1},s=n.split(".");let a=e.places;1===s.length&&1!==c&&(s[1]="###"),1===s.length||0===a?t.fractional=!1:(void 0===a&&(a=e.pattern?s[1].lastIndexOf("0")+1:1/0),a&&null==e.fractional&&(t.fractional=!0),!e.places&&a<s[1].length&&(a+=","+s[1].length),t.places=a);const l=s[0].split(",");return l.length>1&&(t.groupSize=l.pop().length,l.length>1&&(t.groupSize2=l.pop().length)),"("+function(e){"places"in(e=e||{})||(e.places=1/0),"string"!=typeof e.decimal&&(e.decimal="."),"fractional"in e&&!/^0/.test(String(e.places))||(e.fractional=[!0,!1]),"exponent"in e||(e.exponent=[!0,!1]),"eSigned"in e||(e.eSigned=[!0,!1]);const n=f(e),t=d(e.fractional,(n=>{let t="";return n&&0!==e.places&&(t="\\"+e.decimal,e.places===1/0?t="(?:"+t+"\\d+)?":t+="\\d{"+e.places+"}"),t}),!0);let s=n+t;return t&&(s="(?:(?:"+s+")|(?:"+t+"))"),s+d(e.exponent,(n=>n?"([eE]"+f({signed:e.eSigned})+")":""))}(t)+")"}))),!0);return{regexp:u.replace(/[\xa0 ]/g,"[\\s\\xa0]"),group:r,decimal:i,factor:c}}function u(e,n){const t=o(n),s=new RegExp("^"+t.regexp+"$").exec(e);if(!s)return NaN;let r=s[1];if(!s[1]){if(!s[2])return NaN;r=s[2],t.factor*=-1}return r=r.replace(new RegExp("["+t.group+"\\s\\xa0]","g"),"").replace(t.decimal,"."),Number(r)*t.factor}function f(e){return"signed"in(e=e||{})||(e.signed=[!0,!1]),"separator"in e?"groupSize"in e||(e.groupSize=3):e.separator="",d(e.signed,(e=>e?"[-+]":""),!0)+d(e.separator,(n=>{if(!n)return"(?:\\d+)";" "===(n=(0,s.Qs)(n))?n="\\s":"\xa0"===n&&(n="\\s\\xa0");const t=e.groupSize,r=e.groupSize2;if(r){const e="(?:0|[1-9]\\d{0,"+(r-1)+"}(?:["+n+"]\\d{"+r+"})*["+n+"]\\d{"+t+"})";return t-r>0?"(?:"+e+"|(?:0|[1-9]\\d{0,"+(t-1)+"}))":e}return"(?:0|[1-9]\\d{0,"+(t-1)+"}(?:["+n+"]\\d{"+t+"})*)"}),!0)}const d=(e,n,t)=>{if(!(e instanceof Array))return n(e);const s=[];for(let r=0;r<e.length;r++)s.push(n(e[r]));return p(s.join("|"),t)},p=(e,n)=>"("+(n?"?:":"")+e+")"},68860:(e,n,t)=>{t.d(n,{$C:()=>P,En:()=>I,FN:()=>M,Jo:()=>K,KU:()=>x,OG:()=>O,RG:()=>X,UF:()=>v,Yl:()=>G,ZO:()=>B,_R:()=>_,c9:()=>C,cM:()=>A,fN:()=>q,gV:()=>J,hd:()=>u,j5:()=>Z,oD:()=>w,oq:()=>V,qE:()=>Y,qv:()=>T,tQ:()=>N,ty:()=>R,y:()=>j});t(93169);var s=t(43404),r=t(92026),i=t(92183),a=t(78952),c=t(22186),l=t(92975),o=t(89093);const u=39.37,f=c.sv.radius*Math.PI/200,d=/UNIT\[([^\]]+)\]\]$/i,p=o.Z,m=/UNIT\[([^\]]+)\]/i,h=new Set([4261,4305,4807,4810,4811,4812,4816,4819,4821,4901,4902,37225,104139,104140]),g=(0,s.w)()({meter:"meters",foot:"feet",foot_us:"us-feet",foot_clarke:"clarke-feet",yard_clarke:"clarke-yards",link_clarke:"clarke-links",yard_sears:"sears-yards",foot_sears:"sears-feet",chain_sears:"sears-chains",chain_benoit_1895_b:"benoit-1895-b-chains",yard_indian:"indian-yards",yard_indian_1937:"indian-1937-yards",foot_gold_coast:"gold-coast-feet",chain_sears_1922_truncated:"sears-1922-truncated-chains","50_kilometers":"50-kilometers","150_kilometers":"150-kilometers"}),U=e=>e*e,S=e=>e*e*e,b={length:{baseUnit:"meters",units:{millimeters:{inBaseUnits:.001},centimeters:{inBaseUnits:.01},decimeters:{inBaseUnits:.1},meters:{inBaseUnits:1},kilometers:{inBaseUnits:1e3},inches:{inBaseUnits:.0254},feet:{inBaseUnits:.3048},yards:{inBaseUnits:.9144},miles:{inBaseUnits:1609.344},"nautical-miles":{inBaseUnits:1852},"us-feet":{inBaseUnits:1200/3937}}},area:{baseUnit:"square-meters",units:{"square-millimeters":{inBaseUnits:U(.001)},"square-centimeters":{inBaseUnits:U(.01)},"square-decimeters":{inBaseUnits:U(.1)},"square-meters":{inBaseUnits:1},"square-kilometers":{inBaseUnits:U(1e3)},"square-inches":{inBaseUnits:U(.0254)},"square-feet":{inBaseUnits:U(.3048)},"square-yards":{inBaseUnits:U(.9144)},"square-miles":{inBaseUnits:U(1609.344)},"square-us-feet":{inBaseUnits:U(1200/3937)},acres:{inBaseUnits:.0015625*U(1609.344)},ares:{inBaseUnits:100},hectares:{inBaseUnits:1e4}}},volume:{baseUnit:"liters",units:{liters:{inBaseUnits:1},"cubic-millimeters":{inBaseUnits:1e3*S(.001)},"cubic-centimeters":{inBaseUnits:1e3*S(.01)},"cubic-decimeters":{inBaseUnits:1e3*S(.1)},"cubic-meters":{inBaseUnits:1e3},"cubic-kilometers":{inBaseUnits:1e3*S(1e3)},"cubic-inches":{inBaseUnits:1e3*S(.0254)},"cubic-feet":{inBaseUnits:1e3*S(.3048)},"cubic-yards":{inBaseUnits:1e3*S(.9144)},"cubic-miles":{inBaseUnits:1e3*S(1609.344)}}},angle:{baseUnit:"radians",units:{radians:{inBaseUnits:1},degrees:{inBaseUnits:Math.PI/180}}}},k=(()=>{const e={};for(const n in b)for(const t in b[n].units)e[t]=n;return e})();const q=["metric","imperial","square-inches","square-feet","square-yards","square-miles","square-us-feet","square-meters","square-kilometers","acres","ares","hectares"],w=["metric","imperial","inches","feet","yards","miles","nautical-miles","us-feet","meters","kilometers"],y=new Map([["meters","square-meters"],["feet","square-feet"],["us-feet","square-us-feet"]]);function B(e){return"imperial"===e||"metric"===e}function v(e){const n=k[e];if(!n)throw new Error("unknown type");return n}function E(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return n=n||v(e),b[n].baseUnit===e}function I(e,n,t){if(n===t)return e;const s=v(n);if(s!==v(t))throw new Error("incompatible units");const r=E(n,s)?e:function(e,n,t){return e*b[t].units[n].inBaseUnits}(e,n,s);return E(t,s)?r:function(e,n,t){return e/b[t].units[n].inBaseUnits}(r,t,s)}function x(e,n){const t=I(e,n,"meters");return Math.abs(t)<3e3?"meters":"kilometers"}function O(e,n){const t=I(e,n,"meters");return Math.abs(t)<1e5?"meters":"kilometers"}function M(e,n){const t=I(e,n,"feet");return Math.abs(t)<1e3?"feet":"miles"}function T(e,n){const t=I(e,n,"feet");return Math.abs(t)<1e5?"feet":"miles"}function N(e,n){const t=I(e,n,"square-meters");return Math.abs(t)<3e6?"square-meters":"square-kilometers"}function G(e,n){const t=I(e,n,"square-feet");return Math.abs(t)<1e6?"square-feet":"square-miles"}function R(e,n,t){return I(e,n,"meters")/(t*Math.PI/180)}function P(e){return g.fromJSON(e.toLowerCase())||null}function _(e){if(e&&"object"==typeof e&&!(0,l.N$)(e))return 1;const n=C(e);return n>1e5?1:n}function A(e){return C(e)>=(e instanceof a.Z?(0,i.Iu)(e).metersPerDegree:1e5)?"meters":Y(e)}function C(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.sv.metersPerDegree;return(0,r.Pt)(z(e,!0),n)}function z(e){let n,t,s=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=null;if(null!=e&&("object"==typeof e?(n=e.wkid,t=e.wkt):"number"==typeof e?n=e:"string"==typeof e&&(t=e)),n){if((0,l.o$)(n))return c.yr.metersPerDegree;if((0,l.ME)(n))return c.Z1.metersPerDegree;r=p.values[p[n]],!r&&s&&h.has(n)&&(r=f)}else t&&(F(t)?r=D(d.exec(t),r):W(t)&&(r=D(m.exec(t),r)));return r}function D(e,n){return e&&e[1]?H(e[1]):n}function H(e){return parseFloat(e.split(",")[1])}function Y(e){let n,t,s=null;if(null!=e&&("object"==typeof e?(n=e.wkid,t=e.wkt):"number"==typeof e?n=e:"string"==typeof e&&(t=e)),n)s=p.units[p[n]];else if(t){const e=F(t)?d:W(t)?m:null;if(e){const n=e.exec(t);n&&n[1]&&(s=function(e){const n=/[\\"\\']{1}([^\\"\\']+)/.exec(e);let t=n&&n[1];if(!t||!p.units.includes(t)){const n=H(e);t=null;const s=p.values;for(let e=0;e<s.length;++e)if(Math.abs(n-s[e])<1e-7){t=p.units[e];break}}return t}(n[1]))}}return(0,r.pC)(s)?P(s):null}function Z(e){const n=Y(e);return(0,r.Wi)(n)||!w.includes(n)?null:n}function j(e){const n=A(e);return(0,r.Wi)(n)||!w.includes(n)?null:n}function V(e){const n=Y(e);return(0,r.Wi)(n)?null:y.get(n)}function W(e){return/^GEOCCS/i.test(e)}function F(e){return/^PROJCS/i.test(e)}function X(e){const n="metric";if((0,r.Wi)(e))return n;const t=e.map,s=t&&"portalItem"in t?t.portalItem?.portal:null;if(s)switch(s?.user?.units??s.units){case n:return n;case"english":return"imperial"}return(0,r.Pt)(function(e){const n=Y(e);if((0,r.Wi)(n))return null;switch(n){case"feet":case"us-feet":case"clarke-feet":case"clarke-yards":case"clarke-links":case"sears-yards":case"sears-feet":case"sears-chains":case"benoit-1895-b-chains":case"indian-yards":case"indian-1937-yards":case"gold-coast-feet":case"sears-1922-truncated-chains":return"imperial";case"50-kilometers":case"150-kilometers":case"meters":return"metric"}return null}(e.spatialReference),n)}const $={esriAcres:"acres",esriAres:"ares",esriHectares:"hectares",esriSquareCentimeters:"square-centimeters",esriSquareDecimeters:"square-decimeters",esriSquareFeet:"square-feet",esriSquareInches:"square-inches",esriSquareKilometers:"square-kilometers",esriSquareMeters:"square-meters",esriSquareMiles:"square-miles",esriSquareMillimeters:"square-millimeters",esriSquareUsFeet:"square-us-feet",esriSquareYards:"square-yards"},Q={esriCentimeters:"centimeters",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriYards:"yards"},J=(0,s.w)()($),K=(0,s.w)()(Q);(0,s.w)()({...$,...Q})},92183:(e,n,t)=>{t.d(n,{GG:()=>c,HQ:()=>l,Iu:()=>d,VY:()=>o,e8:()=>p,rS:()=>f,wY:()=>u});var s=t(78952),r=t(22186),i=t(92975);function a(e){return new s.Z({wkt:`GEOCCS["Spherical geocentric",\n    DATUM["Not specified",\n      SPHEROID["Sphere",${e.radius},0]],\n    PRIMEM["Greenwich",0.0,\n      AUTHORITY["EPSG","8901"]],\n    UNIT["m",1.0],\n    AXIS["Geocentric X",OTHER],\n    AXIS["Geocentric Y",EAST],\n    AXIS["Geocentric Z",NORTH]\n  ]`})}const c=a(r.sv),l=a(r.yr),o=a(r.Z1),u=new s.Z({wkt:`GEOCCS["WGS 84",\n  DATUM["WGS_1984",\n    SPHEROID["WGS 84",${r.sv.radius},298.257223563,\n      AUTHORITY["EPSG","7030"]],\n    AUTHORITY["EPSG","6326"]],\n  PRIMEM["Greenwich",0,\n    AUTHORITY["EPSG","8901"]],\n  UNIT["m",1.0,\n    AUTHORITY["EPSG","9001"]],\n  AXIS["Geocentric X",OTHER],\n  AXIS["Geocentric Y",OTHER],\n  AXIS["Geocentric Z",NORTH],\n  AUTHORITY["EPSG","4978"]\n]`});function f(e){return e&&((0,i.BZ)(e)||e===l)?l:e&&((0,i.V2)(e)||e===o)?o:c}function d(e){return e&&((0,i.BZ)(e)||e===l)?r.yr:e&&((0,i.V2)(e)||e===o)?r.Z1:r.sv}function p(e){return(0,i.o$)(e)?r.yr:(0,i.ME)(e)?r.Z1:r.sv}},80724:(e,n,t)=>{var s,r;function i(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function a(e){return null!=e&&!isNaN(e)&&isFinite(e)}function c(e){return e.valueExpression?s.Expression:e.field&&"string"==typeof e.field?s.Field:s.Unknown}function l(e,n){const t=n||c(e),i=e.valueUnit||"unknown";return t===s.Unknown?r.Constant:e.stops?r.Stops:null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?r.ClampedLinear:"unknown"===i?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?r.Proportional:r.Additive:r.Identity:r.RealWorldSize}t.d(n,{PS:()=>c,QW:()=>l,RY:()=>s,hL:()=>r,iY:()=>i,qh:()=>a}),function(e){e.Unknown="unknown",e.Expression="expression",e.Field="field"}(s||(s={})),function(e){e.Unknown="unknown",e.Stops="stops",e.ClampedLinear="clamped-linear",e.Proportional="proportional",e.Additive="additive",e.Constant="constant",e.Identity="identity",e.RealWorldSize="real-world-size"}(r||(r={}))}}]);
//# sourceMappingURL=9263.bf1e71cf.chunk.js.map