/*! For license information please see 0af5d2f792b83f7dd0aa.js.LICENSE.txt */
"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[6336],{52832:(e,t,n)=>{n.d(t,{d:()=>u});var i=n(6132),s=n(2696),r=n(54648);const a={},o={},c={s:16,m:24,l:32};const l=(0,i.Kv)(class extends i.C{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.textLabel=void 0,this.pathData=void 0,this.visible=!1}connectedCallback(){this.waitUntilVisible((()=>{this.visible=!0,this.loadIconPathData()}))}disconnectedCallback(){this.intersectionObserver?.disconnect(),this.intersectionObserver=null}async componentWillLoad(){this.loadIconPathData()}render(){const{el:e,flipRtl:t,pathData:n,scale:r,textLabel:a}=this,o=(0,s.a)(e),l=c[r],u=!!a,h=[].concat(n||"");return(0,i.h)(i.q4,{"aria-hidden":(0,s.t)(!u),"aria-label":u?a:null,role:u?"img":null},(0,i.h)("svg",{"aria-hidden":"true",class:{"flip-rtl":"rtl"===o&&t,svg:!0},fill:"currentColor",height:"100%",viewBox:`0 0 ${l} ${l}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},h.map((e=>"string"==typeof e?(0,i.h)("path",{d:e}):(0,i.h)("path",{d:e.d,opacity:"opacity"in e?e.opacity:1})))))}async loadIconPathData(){const{icon:e,scale:t,visible:n}=this;if(!i.qe.isBrowser||!e||!n)return;const s=await async function({icon:e,scale:t}){const n=c[t],s=function(e){const t=!isNaN(Number(e.charAt(0))),n=e.split("-");if(n.length>0){const t=/[a-z]/i;e=n.map(((e,n)=>e.replace(t,(function(e,t){return 0===n&&0===t?e:e.toUpperCase()})))).join("")}return t?`i${e}`:e}(e),r="F"===s.charAt(s.length-1),l=`${r?s.substring(0,s.length-1):s}${n}${r?"F":""}`;if(a[l])return a[l];o[l]||(o[l]=fetch((0,i.sL)(`./assets/icon/${l}.json`)).then((e=>e.json())).catch((()=>(console.error(`"${l}" is not a valid calcite-ui-icon name`),""))));const u=await o[l];return a[l]=u,u}({icon:e,scale:t});e===this.icon&&(this.pathData=s)}waitUntilVisible(e){this.intersectionObserver=(0,r.c)("intersection",(t=>{t.forEach((t=>{t.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,e())}))}),{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):e()}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return":host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]},void 0,{icon:["loadIconPathData"],scale:["loadIconPathData"]}]);function u(){"undefined"!=typeof customElements&&["calcite-icon"].forEach((e=>{"calcite-icon"===e&&(customElements.get(e)||customElements.define(e,l))}))}u()},236:(e,t,n)=>{n.d(t,{n:()=>i});const i=["0","1","2","3","4","5","6","7","8","9"]},82640:(e,t,n)=>{n.d(t,{a:()=>o,c:()=>c,s:()=>a});var i=n(6132);const s=new WeakMap,r=new WeakMap;function a(e){r.set(e,new Promise((t=>s.set(e,t))))}function o(e){s.get(e)()}async function c(e){if(await function(e){return r.get(e)}(e),i.qe.isBrowser)return(0,i.am)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}},44608:(e,t,n)=>{n.d(t,{B:()=>c,a:()=>v,c:()=>D,d:()=>F,g:()=>O,i:()=>l,n:()=>k,p:()=>u,s:()=>f});var i=n(2696),s=n(236),r=n(54648);const a=new RegExp("\\.(0+)?$"),o=new RegExp("0+$");class c{constructor(e){if(e instanceof c)return e;const[t,n]=function(e){const t=e.split(/[eE]/);if(1===t.length)return e;const n=+e;if(Number.isSafeInteger(n))return`${n}`;const i="-"===e.charAt(0),s=+t[1],r=t[0].split("."),o=(i?r[0].substring(1):r[0])||"",c=r[1]||"",l=s>0?`${o}${((e,t)=>{const n=t>e.length?`${e}${"0".repeat(t-e.length)}`:e;return`${n.slice(0,t)}.${n.slice(t)}`})(c,s)}`:`${((e,t)=>{const n=Math.abs(t)-e.length,i=n>0?`${"0".repeat(n)}${e}`:e;return`${i.slice(0,t)}.${i.slice(t)}`})(o,s)}${c}`;return`${i?"-":""}${"."===l.charAt(0)?"0":""}${l.replace(a,"").replace(h,"")}`}(e).split(".").concat("");this.value=BigInt(t+n.padEnd(c.DECIMALS,"0").slice(0,c.DECIMALS))+BigInt(c.ROUNDED&&n[c.DECIMALS]>="5"),this.isNegative="-"===e.charAt(0)}getIntegersAndDecimals(){const e=this.value.toString().replace("-","").padStart(c.DECIMALS+1,"0");return{integers:e.slice(0,-c.DECIMALS),decimals:e.slice(-c.DECIMALS).replace(o,"")}}toString(){const{integers:e,decimals:t}=this.getIntegersAndDecimals();return`${this.isNegative?"-":""}${e}${t.length?"."+t:""}`}formatToParts(e){const{integers:t,decimals:n}=this.getIntegersAndDecimals(),i=e.numberFormatter.formatToParts(BigInt(t));return this.isNegative&&i.unshift({type:"minusSign",value:e.minusSign}),n.length&&(i.push({type:"decimal",value:e.decimal}),n.split("").forEach((e=>i.push({type:"fraction",value:e})))),i}format(e){const{integers:t,decimals:n}=this.getIntegersAndDecimals();return`${this.isNegative?e.minusSign:""}${e.numberFormatter.format(BigInt(t))}${n.length?`${e.decimal}${n.split("").map((t=>e.numberFormatter.format(Number(t)))).join("")}`:""}`}add(e){return c.fromBigInt(this.value+new c(e).value)}subtract(e){return c.fromBigInt(this.value-new c(e).value)}multiply(e){return c._divRound(this.value*new c(e).value,c.SHIFT)}divide(e){return c._divRound(this.value*c.SHIFT,new c(e).value)}}function l(e){return!(!e||isNaN(Number(e)))}function u(e){return e&&(t=e,s.n.some((e=>t.includes(e))))?b(e,(e=>{let t=!1;const n=e.split("").filter(((e,n)=>e.match(/\./g)&&!t?(t=!0,!0):!(!e.match(/\-/g)||0!==n)||s.n.includes(e))).join("");return l(n)?new c(n).toString():""})):"";var t}c.DECIMALS=100,c.ROUNDED=!0,c.SHIFT=BigInt("1"+"0".repeat(c.DECIMALS)),c._divRound=(e,t)=>c.fromBigInt(e/t+(c.ROUNDED?e*BigInt(2)/t%BigInt(2):BigInt(0))),c.fromBigInt=e=>Object.assign(Object.create(c.prototype),{value:e,isNegative:e<BigInt(0)});const h=/^([-0])0+(?=\d)/,g=/(?!^\.)\.$/,m=/(?!^-)-/g,p=/^-\b0\b\.?0*$/,d=/0*$/,f=e=>b(e,(e=>{const t=e.replace(m,"").replace(g,"").replace(h,"$1");return l(t)?p.test(t)?t:function(e){const t=e.split(".")[1],n=new c(e).toString(),[i,s]=n.split(".");return t&&s!==t?`${i}.${t}`:n}(t):e}));function b(e,t){if(!e)return e;const n=e.toLowerCase().indexOf("e")+1;return n?e.replace(/[eE]*$/g,"").substring(0,n).concat(e.slice(n).replace(/[eE]/g,"")).split(/[eE]/).map(((e,n)=>t(1===n?e.replace(/\./g,""):e))).join("e").replace(/^e/,"1e"):t(e)}function v(e,t,n){const i=t.split(".")[1];if(i){const s=i.match(d)[0];if(s&&n.delocalize(e).length!==t.length&&-1===i.indexOf("e")){const t=n.decimal;return(e=e.includes(t)?e:`${e}${t}`).padEnd(e.length+s.length,n.localize("0"))}}return e}const w="en",$=["ar","bg","bs","ca","cs","da","de","el",w,"es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","no","nl","pl","pt-BR","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],I=["ar","bg","bs","ca","cs","da","de","de-AT","de-CH","el",w,"en-AU","en-CA","en-GB","es","es-MX","et","fi","fr","fr-CH","he","hi","hr","hu","id","it","it-CH","ja","ko","lt","lv","mk","no","nl","pl","pt","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],_=["arab","arabext","latn"],y=e=>_.includes(e),E=(new Intl.NumberFormat).resolvedOptions().numberingSystem,S="arab"!==E&&y(E)?E:"latn";function O(e,t="cldr"){const n="cldr"===t?I:$;return e?n.includes(e)?e:"nb"===(e=e.toLowerCase())?"no":"t9n"===t&&"pt"===e?"pt-BR":(e.includes("-")&&(e=e.replace(/(\w+)-(\w+)/,((e,t,n)=>`${t}-${n.toUpperCase()}`)),n.includes(e)||(e=e.split("-")[0])),"zh"===e?"zh-CN":n.includes(e)?e:(console.warn(`Translations for the "${e}" locale are not available and will fall back to the default, English (en).`),w)):w}const x=new Set;function D(e){!function(e){e.effectiveLocale=function(e){return e.el.lang||(0,i.c)(e.el,"[lang]")?.lang||document.documentElement.lang||w}(e)}(e),0===x.size&&C?.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"],subtree:!0}),x.add(e)}function F(e){x.delete(e),0===x.size&&C.disconnect()}const C=(0,r.c)("mutation",(e=>{e.forEach((e=>{const t=e.target;x.forEach((e=>{if(!(0,i.b)(t,e.el))return;const n=(0,i.c)(e.el,"[lang]");if(!n)return void(e.effectiveLocale=w);const s=n.lang;e.effectiveLocale=n.hasAttribute("lang")&&""===s?w:s}))}))})),k=new class{constructor(){this.delocalize=e=>this._numberFormatOptions?b(e,(e=>e.replace(new RegExp(`[${this._minusSign}]`,"g"),"-").replace(new RegExp(`[${this._group}]`,"g"),"").replace(new RegExp(`[${this._decimal}]`,"g"),".").replace(new RegExp(`[${this._digits.join("")}]`,"g"),this._getDigitIndex))):e,this.localize=e=>this._numberFormatOptions?b(e,(e=>l(e.trim())?new c(e.trim()).format(this).replace(new RegExp(`[${this._actualGroup}]`,"g"),this._group):e)):e}get group(){return this._group}get decimal(){return this._decimal}get minusSign(){return this._minusSign}get digits(){return this._digits}get numberFormatter(){return this._numberFormatter}get numberFormatOptions(){return this._numberFormatOptions}set numberFormatOptions(e){var t;if(e.locale=O(e?.locale),e.numberingSystem=(t=e?.numberingSystem,y(t)?t:S),!this._numberFormatOptions&&e.locale===w&&e.numberingSystem===S&&2===Object.keys(e).length||JSON.stringify(this._numberFormatOptions)===JSON.stringify(e))return;this._numberFormatOptions=e,this._numberFormatter=new Intl.NumberFormat(this._numberFormatOptions.locale,this._numberFormatOptions),this._digits=[...new Intl.NumberFormat(this._numberFormatOptions.locale,{useGrouping:!1,numberingSystem:this._numberFormatOptions.numberingSystem}).format(9876543210)].reverse();const n=new Map(this._digits.map(((e,t)=>[e,t]))),i=new Intl.NumberFormat(this._numberFormatOptions.locale,{numberingSystem:this._numberFormatOptions.numberingSystem}).formatToParts(-12345678.9);this._actualGroup=i.find((e=>"group"===e.type)).value,this._group=0===this._actualGroup.trim().length||" "==this._actualGroup?" ":this._actualGroup,this._decimal=i.find((e=>"decimal"===e.type)).value,this._minusSign=i.find((e=>"minusSign"===e.type)).value,this._getDigitIndex=e=>n.get(e)}}},54648:(e,t,n)=>{n.d(t,{c:()=>s});var i=n(6132);function s(e,t,n){if(!i.qe.isBrowser)return;const s=function(e){class t extends window.MutationObserver{constructor(e){super(e),this.observedEntry=[],this.callback=e}observe(e,t){return this.observedEntry.push({target:e,options:t}),super.observe(e,t)}unobserve(e){const t=this.observedEntry.filter((t=>t.target!==e));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),t.forEach((e=>this.observe(e.target,e.options)))}}return"intersection"===e?window.IntersectionObserver:"mutation"===e?t:window.ResizeObserver}(e);return new s(t,n)}},40968:(e,t,n)=>{n.d(t,{c:()=>h,d:()=>g,s:()=>c,u:()=>u});var i=n(6132),s=n(44608);const r={};function a(){throw new Error("could not fetch component message bundle")}function o(e){e.messages={...e.defaultMessages,...e.messageOverrides}}async function c(e){e.defaultMessages=await l(e,e.effectiveLocale),o(e)}async function l(e,t){if(!i.qe.isBrowser)return{};const{el:n}=e,o=n.tagName.toLowerCase().replace("calcite-","");return async function(e,t){const n=`${t}_${e}`;return r[n]||(r[n]=fetch((0,i.sL)(`./assets/${t}/t9n/messages_${e}.json`)).then((e=>(e.ok||a(),e.json()))).catch((()=>a()))),r[n]}((0,s.g)(t,"t9n"),o)}async function u(e,t){e.defaultMessages=await l(e,t),o(e)}function h(e){e.onMessagesChange=m}function g(e){e.onMessagesChange=void 0}function m(){o(this)}}}]);