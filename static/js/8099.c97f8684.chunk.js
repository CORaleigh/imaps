"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[8099,8860],{52639:(e,t,i)=>{i.d(t,{Z:()=>y});var s=i(27366),r=i(59486),n=i(44055),a=i(51508),o=i(11582),u=i(46784),l=i(92026),c=i(95439),m=i(49861),h=(i(63780),i(93169),i(25243),i(69912)),f=i(77981);function p(e){if(!(0,l.pC)(e))return null;const t={};for(const i in e){const s=e[i];s&&(t[i]=s.toJSON())}return 0!==Object.keys(t).length?t:null}let d=class extends((0,o.J)(u.wq)){constructor(){super(...arguments),this.isAggregate=!1,this.layer=null,this.popupTemplate=null,this.sourceLayer=null,Object.defineProperty(this,"uid",{value:(0,c.D)(),configurable:!0})}normalizeCtorArgs(e,t,i,s){return e&&!e.declaredClass?e:{geometry:e,symbol:t,attributes:i,popupTemplate:s}}set aggregateGeometries(e){const t=this._get("aggregateGeometries");JSON.stringify(t)!==JSON.stringify(e)&&this._set("aggregateGeometries",e)}set attributes(e){const t=this._get("attributes");t!==e&&(this._set("attributes",e),this._notifyLayer("attributes",t,e))}set geometry(e){const t=this._get("geometry");t!==e&&(this._set("geometry",e),this._notifyLayer("geometry",t,e))}set symbol(e){const t=this._get("symbol");t!==e&&(this._set("symbol",e),this._notifyLayer("symbol",t,e))}set visible(e){const t=this._get("visible");t!==e&&(this._set("visible",e),this._notifyLayer("visible",t,e))}getEffectivePopupTemplate(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.popupTemplate)return this.popupTemplate;for(const t of[this.sourceLayer,this.layer])if(t){if("popupTemplate"in t&&t.popupTemplate)return t.popupTemplate;if(e&&"defaultPopupTemplate"in t&&(0,l.pC)(t.defaultPopupTemplate))return t.defaultPopupTemplate}return null}getAttribute(e){return this.attributes&&this.attributes[e]}setAttribute(e,t){if(this.attributes){const i=this.getAttribute(e);this.attributes[e]=t,this._notifyLayer("attributes",i,t,e)}else this.attributes={[e]:t},this._notifyLayer("attributes",void 0,t,e)}getObjectId(){return this.sourceLayer&&"objectIdField"in this.sourceLayer&&this.sourceLayer.objectIdField?this.getAttribute(this.sourceLayer.objectIdField):null}toJSON(){return{aggregateGeometries:p(this.aggregateGeometries),geometry:(0,l.pC)(this.geometry)?this.geometry.toJSON():null,symbol:(0,l.pC)(this.symbol)?this.symbol.toJSON():null,attributes:{...this.attributes},popupTemplate:this.popupTemplate&&this.popupTemplate.toJSON()}}notifyGeometryChanged(){this._notifyLayer("geometry",this.geometry,this.geometry)}notifyMeshTransformChanged(){(0,l.pC)(this.geometry)&&"mesh"===this.geometry.type&&this._notifyLayer("transform",this.geometry.transform,this.geometry.transform)}_notifyLayer(e,t,i,s){if(!this.layer||!("graphicChanged"in this.layer))return;const r={graphic:this,property:e,oldValue:t,newValue:i};"attributes"===e&&(r.attributeName=s),this.layer.graphicChanged(r)}};(0,s._)([(0,m.Cb)({value:null,json:{read:function(e){if(!e)return null;const t={};for(const i in e){const s=(0,f.im)(e[i]);s&&(t[i]=s)}return 0!==Object.keys(t).length?t:null}}})],d.prototype,"aggregateGeometries",null),(0,s._)([(0,m.Cb)({value:null})],d.prototype,"attributes",null),(0,s._)([(0,m.Cb)({value:null,types:r.qM,json:{read:f.im}})],d.prototype,"geometry",null),(0,s._)([(0,m.Cb)({type:Boolean})],d.prototype,"isAggregate",void 0),(0,s._)([(0,m.Cb)({clonable:"reference"})],d.prototype,"layer",void 0),(0,s._)([(0,m.Cb)({type:n.Z})],d.prototype,"popupTemplate",void 0),(0,s._)([(0,m.Cb)({clonable:"reference"})],d.prototype,"sourceLayer",void 0),(0,s._)([(0,m.Cb)({value:null,types:a.LB})],d.prototype,"symbol",null),(0,s._)([(0,m.Cb)({type:Boolean,value:!0})],d.prototype,"visible",null),d=(0,s._)([(0,h.j)("esri.Graphic")],d),(d||(d={})).generateUID=c.D;const y=d},53283:(e,t,i)=>{i.d(t,{M:()=>p,e:()=>h,f:()=>n,i:()=>m,p:()=>d,r:()=>o,t:()=>a,w:()=>u});var s=i(92026),r=i(35995);function n(e,t){const i=t&&t.url&&t.url.path;if(e&&i&&(e=(0,r.hF)(e,i,{preserveProtocolRelative:!0}),t.portalItem&&t.readResourcePaths)){const i=(0,r.PF)(e,t.portalItem.itemUrl);c.test(i)&&t.readResourcePaths.push(t.portalItem.resourceFromPath(i).path)}return f(e,t&&t.portal)}function a(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:p.YES;if(!e)return e;!(0,r.YP)(e)&&t&&t.blockedRelativeUrls&&t.blockedRelativeUrls.push(e);let s=(0,r.hF)(e);if(t){const i=t.verifyItemRelativeUrls&&t.verifyItemRelativeUrls.rootPath||t.url&&t.url.path;if(i){const n=f(i,t.portal);s=(0,r.PF)(f(s,t.portal),n,n),s!==e&&t.verifyItemRelativeUrls&&t.verifyItemRelativeUrls.writtenUrls.push(s)}}return s=h(s,t&&t.portal),(0,r.YP)(s)&&(s=(0,r.Fv)(s)),t?.resources&&t?.portalItem&&!(0,r.YP)(s)&&!(0,r.HK)(s)&&i===p.YES&&t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(s)}),s}function o(e,t,i){return n(e,i)}function u(e,t,i,s){const r=a(e,s);void 0!==r&&(t[i]=r)}const l=/\/items\/([^\/]+)\/resources\//,c=/^\.\/resources\//;function m(e){const t=(0,s.pC)(e)?e.match(l):null;return(0,s.pC)(t)?t[1]:null}function h(e,t){return t&&!t.isPortal&&t.urlKey&&t.customBaseUrl?(0,r.Ie)(e,`${t.urlKey}.${t.customBaseUrl}`,t.portalHostname):e}function f(e,t){if(!t||t.isPortal||!t.urlKey||!t.customBaseUrl)return e;const i=`${t.urlKey}.${t.customBaseUrl}`,s=(0,r.TI)();return(0,r.D6)(s,`${s.scheme}://${i}`)?(0,r.Ie)(e,t.portalHostname,i):(0,r.Ie)(e,i,t.portalHostname)}var p;!function(e){e[e.YES=0]="YES",e[e.NO=1]="NO"}(p||(p={}));const d=Object.freeze(Object.defineProperty({__proto__:null,fromJSON:n,toJSON:a,read:o,write:u,itemIdFromResourceUrl:m,ensureMainOnlineDomain:h,get MarkKeep(){return p}},Symbol.toStringTag,{value:"Module"}))},79056:(e,t,i)=>{i.d(t,{IG:()=>a});var s=i(27366),r=i(69912);let n=0;const a=e=>{let t=class extends e{constructor(){super(...arguments),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+n++})}};return t=(0,s._)([(0,r.j)("esri.core.Identifiable")],t),t};let o=class extends(a(class{})){};o=(0,s._)([(0,r.j)("esri.core.Identifiable")],o)},8025:(e,t,i)=>{i.d(t,{B:()=>r});var s=i(49861);function r(e,t){const i=t?{...t,source:e}:e;return(0,s.Cb)({aliasOf:i})}},68860:(e,t,i)=>{i.d(t,{$C:()=>N,En:()=>B,FN:()=>k,Jo:()=>z,KU:()=>C,OG:()=>O,RG:()=>K,UF:()=>S,Yl:()=>P,ZO:()=>T,_R:()=>E,c9:()=>A,cM:()=>R,fN:()=>U,gV:()=>X,hd:()=>c,j5:()=>H,oD:()=>M,oq:()=>L,qE:()=>Y,qv:()=>w,tQ:()=>x,ty:()=>G,y:()=>D});i(93169);var s=i(43404),r=i(92026),n=i(92183),a=i(78952),o=i(22186),u=i(92975),l=i(89093);const c=39.37,m=o.sv.radius*Math.PI/200,h=/UNIT\[([^\]]+)\]\]$/i,f=l.Z,p=/UNIT\[([^\]]+)\]/i,d=new Set([4261,4305,4807,4810,4811,4812,4816,4819,4821,4901,4902,37225,104139,104140]),y=(0,s.w)()({meter:"meters",foot:"feet",foot_us:"us-feet",foot_clarke:"clarke-feet",yard_clarke:"clarke-yards",link_clarke:"clarke-links",yard_sears:"sears-yards",foot_sears:"sears-feet",chain_sears:"sears-chains",chain_benoit_1895_b:"benoit-1895-b-chains",yard_indian:"indian-yards",yard_indian_1937:"indian-1937-yards",foot_gold_coast:"gold-coast-feet",chain_sears_1922_truncated:"sears-1922-truncated-chains","50_kilometers":"50-kilometers","150_kilometers":"150-kilometers"}),b=e=>e*e,g=e=>e*e*e,v={length:{baseUnit:"meters",units:{millimeters:{inBaseUnits:.001},centimeters:{inBaseUnits:.01},decimeters:{inBaseUnits:.1},meters:{inBaseUnits:1},kilometers:{inBaseUnits:1e3},inches:{inBaseUnits:.0254},feet:{inBaseUnits:.3048},yards:{inBaseUnits:.9144},miles:{inBaseUnits:1609.344},"nautical-miles":{inBaseUnits:1852},"us-feet":{inBaseUnits:1200/3937}}},area:{baseUnit:"square-meters",units:{"square-millimeters":{inBaseUnits:b(.001)},"square-centimeters":{inBaseUnits:b(.01)},"square-decimeters":{inBaseUnits:b(.1)},"square-meters":{inBaseUnits:1},"square-kilometers":{inBaseUnits:b(1e3)},"square-inches":{inBaseUnits:b(.0254)},"square-feet":{inBaseUnits:b(.3048)},"square-yards":{inBaseUnits:b(.9144)},"square-miles":{inBaseUnits:b(1609.344)},"square-us-feet":{inBaseUnits:b(1200/3937)},acres:{inBaseUnits:.0015625*b(1609.344)},ares:{inBaseUnits:100},hectares:{inBaseUnits:1e4}}},volume:{baseUnit:"liters",units:{liters:{inBaseUnits:1},"cubic-millimeters":{inBaseUnits:1e3*g(.001)},"cubic-centimeters":{inBaseUnits:1e3*g(.01)},"cubic-decimeters":{inBaseUnits:1e3*g(.1)},"cubic-meters":{inBaseUnits:1e3},"cubic-kilometers":{inBaseUnits:1e3*g(1e3)},"cubic-inches":{inBaseUnits:1e3*g(.0254)},"cubic-feet":{inBaseUnits:1e3*g(.3048)},"cubic-yards":{inBaseUnits:1e3*g(.9144)},"cubic-miles":{inBaseUnits:1e3*g(1609.344)}}},angle:{baseUnit:"radians",units:{radians:{inBaseUnits:1},degrees:{inBaseUnits:Math.PI/180}}}},_=(()=>{const e={};for(const t in v)for(const i in v[t].units)e[i]=t;return e})();const U=["metric","imperial","square-inches","square-feet","square-yards","square-miles","square-us-feet","square-meters","square-kilometers","acres","ares","hectares"],M=["metric","imperial","inches","feet","yards","miles","nautical-miles","us-feet","meters","kilometers"],I=new Map([["meters","square-meters"],["feet","square-feet"],["us-feet","square-us-feet"]]);function T(e){return"imperial"===e||"metric"===e}function S(e){const t=_[e];if(!t)throw new Error("unknown type");return t}function q(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return t=t||S(e),v[t].baseUnit===e}function B(e,t,i){if(t===i)return e;const s=S(t);if(s!==S(i))throw new Error("incompatible units");const r=q(t,s)?e:function(e,t,i){return e*v[i].units[t].inBaseUnits}(e,t,s);return q(i,s)?r:function(e,t,i){return e/v[i].units[t].inBaseUnits}(r,i,s)}function C(e,t){const i=B(e,t,"meters");return Math.abs(i)<3e3?"meters":"kilometers"}function O(e,t){const i=B(e,t,"meters");return Math.abs(i)<1e5?"meters":"kilometers"}function k(e,t){const i=B(e,t,"feet");return Math.abs(i)<1e3?"feet":"miles"}function w(e,t){const i=B(e,t,"feet");return Math.abs(i)<1e5?"feet":"miles"}function x(e,t){const i=B(e,t,"square-meters");return Math.abs(i)<3e6?"square-meters":"square-kilometers"}function P(e,t){const i=B(e,t,"square-feet");return Math.abs(i)<1e6?"square-feet":"square-miles"}function G(e,t,i){return B(e,t,"meters")/(i*Math.PI/180)}function N(e){return y.fromJSON(e.toLowerCase())||null}function E(e){if(e&&"object"==typeof e&&!(0,u.N$)(e))return 1;const t=A(e);return t>1e5?1:t}function R(e){return A(e)>=(e instanceof a.Z?(0,n.Iu)(e).metersPerDegree:1e5)?"meters":Y(e)}function A(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.sv.metersPerDegree;return(0,r.Pt)(j(e,!0),t)}function j(e){let t,i,s=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=null;if(null!=e&&("object"==typeof e?(t=e.wkid,i=e.wkt):"number"==typeof e?t=e:"string"==typeof e&&(i=e)),t){if((0,u.o$)(t))return o.yr.metersPerDegree;if((0,u.ME)(t))return o.Z1.metersPerDegree;r=f.values[f[t]],!r&&s&&d.has(t)&&(r=m)}else i&&($(i)?r=Z(h.exec(i),r):J(i)&&(r=Z(p.exec(i),r)));return r}function Z(e,t){return e&&e[1]?F(e[1]):t}function F(e){return parseFloat(e.split(",")[1])}function Y(e){let t,i,s=null;if(null!=e&&("object"==typeof e?(t=e.wkid,i=e.wkt):"number"==typeof e?t=e:"string"==typeof e&&(i=e)),t)s=f.units[f[t]];else if(i){const e=$(i)?h:J(i)?p:null;if(e){const t=e.exec(i);t&&t[1]&&(s=function(e){const t=/[\\"\\']{1}([^\\"\\']+)/.exec(e);let i=t&&t[1];if(!i||!f.units.includes(i)){const t=F(e);i=null;const s=f.values;for(let e=0;e<s.length;++e)if(Math.abs(t-s[e])<1e-7){i=f.units[e];break}}return i}(t[1]))}}return(0,r.pC)(s)?N(s):null}function H(e){const t=Y(e);return(0,r.Wi)(t)||!M.includes(t)?null:t}function D(e){const t=R(e);return(0,r.Wi)(t)||!M.includes(t)?null:t}function L(e){const t=Y(e);return(0,r.Wi)(t)?null:I.get(t)}function J(e){return/^GEOCCS/i.test(e)}function $(e){return/^PROJCS/i.test(e)}function K(e){const t="metric";if((0,r.Wi)(e))return t;const i=e.map,s=i&&"portalItem"in i?i.portalItem?.portal:null;if(s)switch(s?.user?.units??s.units){case t:return t;case"english":return"imperial"}return(0,r.Pt)(function(e){const t=Y(e);if((0,r.Wi)(t))return null;switch(t){case"feet":case"us-feet":case"clarke-feet":case"clarke-yards":case"clarke-links":case"sears-yards":case"sears-feet":case"sears-chains":case"benoit-1895-b-chains":case"indian-yards":case"indian-1937-yards":case"gold-coast-feet":case"sears-1922-truncated-chains":return"imperial";case"50-kilometers":case"150-kilometers":case"meters":return"metric"}return null}(e.spatialReference),t)}const W={esriAcres:"acres",esriAres:"ares",esriHectares:"hectares",esriSquareCentimeters:"square-centimeters",esriSquareDecimeters:"square-decimeters",esriSquareFeet:"square-feet",esriSquareInches:"square-inches",esriSquareKilometers:"square-kilometers",esriSquareMeters:"square-meters",esriSquareMiles:"square-miles",esriSquareMillimeters:"square-millimeters",esriSquareUsFeet:"square-us-feet",esriSquareYards:"square-yards"},V={esriCentimeters:"centimeters",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriYards:"yards"},X=(0,s.w)()(W),z=(0,s.w)()(V);(0,s.w)()({...W,...V})},92183:(e,t,i)=>{i.d(t,{GG:()=>o,HQ:()=>u,Iu:()=>h,VY:()=>l,e8:()=>f,rS:()=>m,wY:()=>c});var s=i(78952),r=i(22186),n=i(92975);function a(e){return new s.Z({wkt:`GEOCCS["Spherical geocentric",\n    DATUM["Not specified",\n      SPHEROID["Sphere",${e.radius},0]],\n    PRIMEM["Greenwich",0.0,\n      AUTHORITY["EPSG","8901"]],\n    UNIT["m",1.0],\n    AXIS["Geocentric X",OTHER],\n    AXIS["Geocentric Y",EAST],\n    AXIS["Geocentric Z",NORTH]\n  ]`})}const o=a(r.sv),u=a(r.yr),l=a(r.Z1),c=new s.Z({wkt:`GEOCCS["WGS 84",\n  DATUM["WGS_1984",\n    SPHEROID["WGS 84",${r.sv.radius},298.257223563,\n      AUTHORITY["EPSG","7030"]],\n    AUTHORITY["EPSG","6326"]],\n  PRIMEM["Greenwich",0,\n    AUTHORITY["EPSG","8901"]],\n  UNIT["m",1.0,\n    AUTHORITY["EPSG","9001"]],\n  AXIS["Geocentric X",OTHER],\n  AXIS["Geocentric Y",OTHER],\n  AXIS["Geocentric Z",NORTH],\n  AUTHORITY["EPSG","4978"]\n]`});function m(e){return e&&((0,n.BZ)(e)||e===u)?u:e&&((0,n.V2)(e)||e===l)?l:o}function h(e){return e&&((0,n.BZ)(e)||e===u)?r.yr:e&&((0,n.V2)(e)||e===l)?r.Z1:r.sv}function f(e){return(0,n.o$)(e)?r.yr:(0,n.ME)(e)?r.Z1:r.sv}},41414:(e,t,i)=>{i.d(t,{BD:()=>M,G1:()=>h,Gv:()=>E,HH:()=>u,JR:()=>x,KE:()=>q,TC:()=>l,Tn:()=>C,Ue:()=>a,VK:()=>c,Wi:()=>f,Zp:()=>I,aO:()=>U,al:()=>o,bA:()=>S,be:()=>v,cS:()=>k,cv:()=>T,dp:()=>_,fS:()=>N,op:()=>B,pp:()=>m,sU:()=>p,t8:()=>O,wp:()=>G,wz:()=>g,xE:()=>R,y8:()=>w});var s=i(92026),r=i(53866),n=i(65156);function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R;return[e[0],e[1],e[2],e[3],e[4],e[5]]}function o(e,t,i,s,r,n){let o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:a();return o[0]=e,o[1]=t,o[2]=i,o[3]=s,o[4]=r,o[5]=n,o}function u(e,t){const i=isFinite(e[2])||isFinite(e[5]);return new r.Z(i?{xmin:e[0],xmax:e[3],ymin:e[1],ymax:e[4],zmin:e[2],zmax:e[5],spatialReference:t}:{xmin:e[0],xmax:e[3],ymin:e[1],ymax:e[4],spatialReference:t})}function l(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[3]),e[4]=Math.max(e[4],t[4]),e[5]=Math.max(e[5],t[5])}function c(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[3]=Math.max(e[3],t[2]),e[4]=Math.max(e[4],t[3])}function m(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[0]),e[4]=Math.max(e[4],t[1]),e[5]=Math.max(e[5],t[2])}function h(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.length/3,r=e[0],n=e[1],a=e[2],o=e[3],u=e[4],l=e[5];for(let c=0;c<s;c++)r=Math.min(r,t[i+3*c]),n=Math.min(n,t[i+3*c+1]),a=Math.min(a,t[i+3*c+2]),o=Math.max(o,t[i+3*c]),u=Math.max(u,t[i+3*c+1]),l=Math.max(l,t[i+3*c+2]);e[0]=r,e[1]=n,e[2]=a,e[3]=o,e[4]=u,e[5]=l}function f(e,t,i){const s=t.length;let r=e[0],n=e[1],a=e[2],o=e[3],u=e[4],l=e[5];if(i)for(let c=0;c<s;c++){const e=t[c];r=Math.min(r,e[0]),n=Math.min(n,e[1]),a=Math.min(a,e[2]),o=Math.max(o,e[0]),u=Math.max(u,e[1]),l=Math.max(l,e[2])}else for(let c=0;c<s;c++){const e=t[c];r=Math.min(r,e[0]),n=Math.min(n,e[1]),o=Math.max(o,e[0]),u=Math.max(u,e[1])}e[0]=r,e[1]=n,e[2]=a,e[3]=o,e[4]=u,e[5]=l}function p(e){for(let t=0;t<6;t++)if(!isFinite(e[t]))return!1;return!0}function d(e){return e[0]>=e[3]?0:e[3]-e[0]}function y(e){return e[1]>=e[4]?0:e[4]-e[1]}function b(e){return e[2]>=e[5]?0:e[5]-e[2]}function g(e){const t=d(e),i=b(e),s=y(e);return Math.sqrt(t*t+i*i+s*s)}function v(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0,0];return t[0]=e[0]+d(e)/2,t[1]=e[1]+y(e)/2,t[2]=e[2]+b(e)/2,t}function _(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0,0];return t[0]=d(e),t[1]=y(e),t[2]=b(e),t}function U(e){return Math.max(d(e),b(e),y(e))}function M(e,t){return t[0]>=e[0]&&t[1]>=e[1]&&t[2]>=e[2]&&t[0]<=e[3]&&t[1]<=e[4]&&t[2]<=e[5]}function I(e,t){return!!(0,s.Wi)(t)||function(e,t){return Math.max(t[0],e[0])<=Math.min(t[3],e[3])&&Math.max(t[1],e[1])<=Math.min(t[4],e[4])&&Math.max(t[2],e[2])<=Math.min(t[5],e[5])}(e,t)}function T(e,t,i,s){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e;return r[0]=e[0]+t,r[1]=e[1]+i,r[2]=e[2]+s,r[3]=e[3]+t,r[4]=e[4]+i,r[5]=e[5]+s,r}function S(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e;const s=e[0]+d(e)/2,r=e[1]+y(e)/2,n=e[2]+b(e)/2;return i[0]=s+(e[0]-s)*t,i[1]=r+(e[1]-r)*t,i[2]=n+(e[2]-n)*t,i[3]=s+(e[3]-s)*t,i[4]=r+(e[4]-r)*t,i[5]=n+(e[5]-n)*t,i}function q(e,t){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function B(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e;return i[0]=t[0],i[1]=t[1],i[2]=t[2],i!==e&&(i[3]=e[3],i[4]=e[4],i[5]=e[5]),i}function C(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e;return i[3]=t[0],i[4]=t[1],i[5]=t[2],i!==e&&(i[0]=e[0],i[1]=e[1],i[2]=e[2]),e}function O(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e}function k(e){return e?O(e,E):a(E)}function w(e,t){return t||(t=(0,n.Ue)()),t[0]=e[0],t[1]=e[1],t[2]=e[3],t[3]=e[4],t}function x(e,t){return e[0]=t[0],e[1]=t[1],e[2]=Number.NEGATIVE_INFINITY,e[3]=t[2],e[4]=t[3],e[5]=Number.POSITIVE_INFINITY,e}function P(e){return 6===e.length}function G(e){return 0===d(e)&&0===y(e)&&0===b(e)}function N(e,t,i){if((0,s.Wi)(e)||(0,s.Wi)(t))return e===t;if(!P(e)||!P(t))return!1;if(i){for(let s=0;s<e.length;s++)if(!i(e[s],t[s]))return!1}else for(let s=0;s<e.length;s++)if(e[s]!==t[s])return!1;return!0}const E=[1/0,1/0,1/0,-1/0,-1/0,-1/0],R=[0,0,0,0,0,0];a()},57976:(e,t,i)=>{i.d(t,{Z:()=>c});var s,r=i(27366),n=i(85015),a=i(79056),o=i(49861),u=(i(63780),i(93169),i(25243),i(69912));let l=s=class extends((0,a.IG)(n.Z)){constructor(e){super(e),this.active=!1,this.className=null,this.disabled=!1,this.id=null,this.indicator=!1,this.title=null,this.type=null,this.visible=!0}clone(){return new s({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible})}};(0,r._)([(0,o.Cb)()],l.prototype,"active",void 0),(0,r._)([(0,o.Cb)()],l.prototype,"className",void 0),(0,r._)([(0,o.Cb)()],l.prototype,"disabled",void 0),(0,r._)([(0,o.Cb)()],l.prototype,"id",void 0),(0,r._)([(0,o.Cb)()],l.prototype,"indicator",void 0),(0,r._)([(0,o.Cb)()],l.prototype,"title",void 0),(0,r._)([(0,o.Cb)()],l.prototype,"type",void 0),(0,r._)([(0,o.Cb)()],l.prototype,"visible",void 0),l=s=(0,r._)([(0,u.j)("esri.support.actions.ActionBase")],l);const c=l},6945:(e,t,i)=>{i.d(t,{Z:()=>l});var s,r=i(27366),n=i(49861),a=(i(63780),i(93169),i(25243),i(69912)),o=i(57976);let u=s=class extends o.Z{constructor(e){super(e),this.image=null,this.type="button"}clone(){return new s({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,image:this.image})}};(0,r._)([(0,n.Cb)()],u.prototype,"image",void 0),u=s=(0,r._)([(0,a.j)("esri.support.Action.ActionButton")],u);const l=u},9676:(e,t,i)=>{i.d(t,{Z:()=>l});var s,r=i(27366),n=i(49861),a=(i(63780),i(93169),i(25243),i(69912)),o=i(57976);let u=s=class extends o.Z{constructor(e){super(e),this.image=null,this.type="toggle",this.value=!1}clone(){return new s({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,image:this.image,value:this.value})}};(0,r._)([(0,n.Cb)()],u.prototype,"image",void 0),(0,r._)([(0,n.Cb)()],u.prototype,"value",void 0),u=s=(0,r._)([(0,a.j)("esri.support.Action.ActionToggle")],u);const l=u},99505:(e,t,i)=>{i.d(t,{_:()=>a});var s=i(27366),r=i(49861),n=(i(63780),i(93169),i(25243),i(69912));const a=e=>{let t=class extends e{constructor(){super(...arguments),this.goToOverride=null,this.view=null}callGoTo(e){const{view:t}=this;return this.goToOverride?this.goToOverride(t,e):t.goTo(e.target,e.options)}};return(0,s._)([(0,r.Cb)()],t.prototype,"goToOverride",void 0),(0,s._)([(0,r.Cb)()],t.prototype,"view",void 0),t=(0,s._)([(0,n.j)("esri.widgets.support.GoTo")],t),t}}}]);
//# sourceMappingURL=8099.c97f8684.chunk.js.map