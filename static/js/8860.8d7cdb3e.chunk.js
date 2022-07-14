"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[8860],{68860:(e,s,t)=>{t.d(s,{$C:()=>v,En:()=>G,FN:()=>_,Jo:()=>L,KU:()=>E,OG:()=>g,RG:()=>V,UF:()=>M,Yl:()=>R,ZO:()=>w,_R:()=>H,c9:()=>Y,cM:()=>C,fN:()=>y,gV:()=>Q,hd:()=>l,j5:()=>X,oD:()=>p,oq:()=>F,qE:()=>W,qv:()=>O,tQ:()=>P,ty:()=>A,y:()=>$});t(93169);var n=t(43404),r=t(92026),i=t(92183),a=t(78952),c=t(22186),u=t(92975),o=t(89093);const l=39.37,m=c.sv.radius*Math.PI/200,f=/UNIT\[([^\]]+)\]\]$/i,U=o.Z,d=/UNIT\[([^\]]+)\]/i,h=new Set([4261,4305,4807,4810,4811,4812,4816,4819,4821,4901,4902,37225,104139,104140]),q=(0,n.w)()({meter:"meters",foot:"feet",foot_us:"us-feet",foot_clarke:"clarke-feet",yard_clarke:"clarke-yards",link_clarke:"clarke-links",yard_sears:"sears-yards",foot_sears:"sears-feet",chain_sears:"sears-chains",chain_benoit_1895_b:"benoit-1895-b-chains",yard_indian:"indian-yards",yard_indian_1937:"indian-1937-yards",foot_gold_coast:"gold-coast-feet",chain_sears_1922_truncated:"sears-1922-truncated-chains","50_kilometers":"50-kilometers","150_kilometers":"150-kilometers"}),k=e=>e*e,B=e=>e*e*e,b={length:{baseUnit:"meters",units:{millimeters:{inBaseUnits:.001},centimeters:{inBaseUnits:.01},decimeters:{inBaseUnits:.1},meters:{inBaseUnits:1},kilometers:{inBaseUnits:1e3},inches:{inBaseUnits:.0254},feet:{inBaseUnits:.3048},yards:{inBaseUnits:.9144},miles:{inBaseUnits:1609.344},"nautical-miles":{inBaseUnits:1852},"us-feet":{inBaseUnits:1200/3937}}},area:{baseUnit:"square-meters",units:{"square-millimeters":{inBaseUnits:k(.001)},"square-centimeters":{inBaseUnits:k(.01)},"square-decimeters":{inBaseUnits:k(.1)},"square-meters":{inBaseUnits:1},"square-kilometers":{inBaseUnits:k(1e3)},"square-inches":{inBaseUnits:k(.0254)},"square-feet":{inBaseUnits:k(.3048)},"square-yards":{inBaseUnits:k(.9144)},"square-miles":{inBaseUnits:k(1609.344)},"square-us-feet":{inBaseUnits:k(1200/3937)},acres:{inBaseUnits:.0015625*k(1609.344)},ares:{inBaseUnits:100},hectares:{inBaseUnits:1e4}}},volume:{baseUnit:"liters",units:{liters:{inBaseUnits:1},"cubic-millimeters":{inBaseUnits:1e3*B(.001)},"cubic-centimeters":{inBaseUnits:1e3*B(.01)},"cubic-decimeters":{inBaseUnits:1e3*B(.1)},"cubic-meters":{inBaseUnits:1e3},"cubic-kilometers":{inBaseUnits:1e3*B(1e3)},"cubic-inches":{inBaseUnits:1e3*B(.0254)},"cubic-feet":{inBaseUnits:1e3*B(.3048)},"cubic-yards":{inBaseUnits:1e3*B(.9144)},"cubic-miles":{inBaseUnits:1e3*B(1609.344)}}},angle:{baseUnit:"radians",units:{radians:{inBaseUnits:1},degrees:{inBaseUnits:Math.PI/180}}}},S=(()=>{const e={};for(const s in b)for(const t in b[s].units)e[t]=s;return e})();const y=["metric","imperial","square-inches","square-feet","square-yards","square-miles","square-us-feet","square-meters","square-kilometers","acres","ares","hectares"],p=["metric","imperial","inches","feet","yards","miles","nautical-miles","us-feet","meters","kilometers"],I=new Map([["meters","square-meters"],["feet","square-feet"],["us-feet","square-us-feet"]]);function w(e){return"imperial"===e||"metric"===e}function M(e){const s=S[e];if(!s)throw new Error("unknown type");return s}function T(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return s=s||M(e),b[s].baseUnit===e}function G(e,s,t){if(s===t)return e;const n=M(s);if(n!==M(t))throw new Error("incompatible units");const r=T(s,n)?e:function(e,s,t){return e*b[t].units[s].inBaseUnits}(e,s,n);return T(t,n)?r:function(e,s,t){return e/b[t].units[s].inBaseUnits}(r,t,n)}function E(e,s){const t=G(e,s,"meters");return Math.abs(t)<3e3?"meters":"kilometers"}function g(e,s){const t=G(e,s,"meters");return Math.abs(t)<1e5?"meters":"kilometers"}function _(e,s){const t=G(e,s,"feet");return Math.abs(t)<1e3?"feet":"miles"}function O(e,s){const t=G(e,s,"feet");return Math.abs(t)<1e5?"feet":"miles"}function P(e,s){const t=G(e,s,"square-meters");return Math.abs(t)<3e6?"square-meters":"square-kilometers"}function R(e,s){const t=G(e,s,"square-feet");return Math.abs(t)<1e6?"square-feet":"square-miles"}function A(e,s,t){return G(e,s,"meters")/(t*Math.PI/180)}function v(e){return q.fromJSON(e.toLowerCase())||null}function H(e){if(e&&"object"==typeof e&&!(0,u.N$)(e))return 1;const s=Y(e);return s>1e5?1:s}function C(e){return Y(e)>=(e instanceof a.Z?(0,i.Iu)(e).metersPerDegree:1e5)?"meters":W(e)}function Y(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.sv.metersPerDegree;return(0,r.Pt)(Z(e,!0),s)}function Z(e){let s,t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=null;if(null!=e&&("object"==typeof e?(s=e.wkid,t=e.wkt):"number"==typeof e?s=e:"string"==typeof e&&(t=e)),s){if((0,u.o$)(s))return c.yr.metersPerDegree;if((0,u.ME)(s))return c.Z1.metersPerDegree;r=U.values[U[s]],!r&&n&&h.has(s)&&(r=m)}else t&&(x(t)?r=N(f.exec(t),r):j(t)&&(r=N(d.exec(t),r)));return r}function N(e,s){return e&&e[1]?D(e[1]):s}function D(e){return parseFloat(e.split(",")[1])}function W(e){let s,t,n=null;if(null!=e&&("object"==typeof e?(s=e.wkid,t=e.wkt):"number"==typeof e?s=e:"string"==typeof e&&(t=e)),s)n=U.units[U[s]];else if(t){const e=x(t)?f:j(t)?d:null;if(e){const s=e.exec(t);s&&s[1]&&(n=function(e){const s=/[\\"\\']{1}([^\\"\\']+)/.exec(e);let t=s&&s[1];if(!t||!U.units.includes(t)){const s=D(e);t=null;const n=U.values;for(let e=0;e<n.length;++e)if(Math.abs(s-n[e])<1e-7){t=U.units[e];break}}return t}(s[1]))}}return(0,r.pC)(n)?v(n):null}function X(e){const s=W(e);return(0,r.Wi)(s)||!p.includes(s)?null:s}function $(e){const s=C(e);return(0,r.Wi)(s)||!p.includes(s)?null:s}function F(e){const s=W(e);return(0,r.Wi)(s)?null:I.get(s)}function j(e){return/^GEOCCS/i.test(e)}function x(e){return/^PROJCS/i.test(e)}function V(e){const s="metric";if((0,r.Wi)(e))return s;const t=e.map,n=t&&"portalItem"in t?t.portalItem?.portal:null;if(n)switch(n?.user?.units??n.units){case s:return s;case"english":return"imperial"}return(0,r.Pt)(function(e){const s=W(e);if((0,r.Wi)(s))return null;switch(s){case"feet":case"us-feet":case"clarke-feet":case"clarke-yards":case"clarke-links":case"sears-yards":case"sears-feet":case"sears-chains":case"benoit-1895-b-chains":case"indian-yards":case"indian-1937-yards":case"gold-coast-feet":case"sears-1922-truncated-chains":return"imperial";case"50-kilometers":case"150-kilometers":case"meters":return"metric"}return null}(e.spatialReference),s)}const J={esriAcres:"acres",esriAres:"ares",esriHectares:"hectares",esriSquareCentimeters:"square-centimeters",esriSquareDecimeters:"square-decimeters",esriSquareFeet:"square-feet",esriSquareInches:"square-inches",esriSquareKilometers:"square-kilometers",esriSquareMeters:"square-meters",esriSquareMiles:"square-miles",esriSquareMillimeters:"square-millimeters",esriSquareUsFeet:"square-us-feet",esriSquareYards:"square-yards"},K={esriCentimeters:"centimeters",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriYards:"yards"},Q=(0,n.w)()(J),L=(0,n.w)()(K);(0,n.w)()({...J,...K})},92183:(e,s,t)=>{t.d(s,{GG:()=>c,HQ:()=>u,Iu:()=>f,VY:()=>o,e8:()=>U,rS:()=>m,wY:()=>l});var n=t(78952),r=t(22186),i=t(92975);function a(e){return new n.Z({wkt:`GEOCCS["Spherical geocentric",\n    DATUM["Not specified",\n      SPHEROID["Sphere",${e.radius},0]],\n    PRIMEM["Greenwich",0.0,\n      AUTHORITY["EPSG","8901"]],\n    UNIT["m",1.0],\n    AXIS["Geocentric X",OTHER],\n    AXIS["Geocentric Y",EAST],\n    AXIS["Geocentric Z",NORTH]\n  ]`})}const c=a(r.sv),u=a(r.yr),o=a(r.Z1),l=new n.Z({wkt:`GEOCCS["WGS 84",\n  DATUM["WGS_1984",\n    SPHEROID["WGS 84",${r.sv.radius},298.257223563,\n      AUTHORITY["EPSG","7030"]],\n    AUTHORITY["EPSG","6326"]],\n  PRIMEM["Greenwich",0,\n    AUTHORITY["EPSG","8901"]],\n  UNIT["m",1.0,\n    AUTHORITY["EPSG","9001"]],\n  AXIS["Geocentric X",OTHER],\n  AXIS["Geocentric Y",OTHER],\n  AXIS["Geocentric Z",NORTH],\n  AUTHORITY["EPSG","4978"]\n]`});function m(e){return e&&((0,i.BZ)(e)||e===u)?u:e&&((0,i.V2)(e)||e===o)?o:c}function f(e){return e&&((0,i.BZ)(e)||e===u)?r.yr:e&&((0,i.V2)(e)||e===o)?r.Z1:r.sv}function U(e){return(0,i.o$)(e)?r.yr:(0,i.ME)(e)?r.Z1:r.sv}}}]);
//# sourceMappingURL=8860.8d7cdb3e.chunk.js.map