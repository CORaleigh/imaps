(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[224],{436:function(e,t,a){"use strict";function n(e){return e=e||globalThis.location.hostname,i.some((t=>{var a;return null!=(null==(a=e)?void 0:a.match(t))}))}function s(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(l)||null!=t.match(c)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(r)||null!=t.match(o)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return n}));const l=/^devext.arcgis.com$/,r=/^qaext.arcgis.com$/,c=/^[\w-]*\.mapsdevext.arcgis.com$/,o=/^[\w-]*\.mapsqa.arcgis.com$/,i=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,l,r,/^jsapps.esri.com$/,c,o]},667:function(e,t,a){"use strict";a.r(t),a.d(t,"getPatternDescriptor",(function(){return x})),a.d(t,"getSymbolLayerFill",(function(){return w})),a.d(t,"previewSymbol3D",(function(){return D}));var n=a(151),s=a(462),l=(a(82),a(88)),r=a(87),c=a(85),o=a(91),i=a(101),u=a(472),p=a(931),h=a(880),m=a(886),b=a(730),y=a(396),f=a(843);const d=22,j=120,O=r.a.getLogger("esri.symbols.support.previewSymbol3D");function g(e){const t=e.outline,a=Object(c.l)(e.material)?e.material.color:null,n=Object(c.l)(a)?a.toHex():null;if(Object(c.k)(t)||"pattern"in t&&Object(c.l)(t.pattern)&&"style"===t.pattern.type&&"none"===t.pattern.style)return"fill"===e.type&&"#ffffff"===n?{color:"#bdc3c7",width:.75}:null;const s=Object(i.g)(t.size)||0;return{color:"rgba("+(Object(c.l)(t.color)?t.color.toRgba():"255,255,255,1")+")",width:Math.min(s,80),style:"pattern"in t&&Object(c.l)(t.pattern)&&"style"===t.pattern.type?Object(u.b)(t.pattern.style):null,join:"butt",cap:"patternCap"in t?t.patternCap:"butt"}}function v(e,t=1){const a=e.a,n=Object(s.b)(e),l=n.h,r=n.s/t,c=100-(100-n.v)/t,{r:o,g:i,b:u}=Object(s.e)({h:l,s:r,v:c});return[o,i,u,a]}function k(e){return"water"===e.type?Object(c.k)(e.color)?null:e.color:Object(c.k)(e.material)||Object(c.k)(e.material.color)?null:e.material.color}function w(e,t=0){const a=k(e);if(!a){if("fill"===e.type)return null;const a=u.a.r,n=Object(m.b)(a,t);return[n,n,n,100]}const n=a.toRgba();for(let s=0;s<3;s++)n[s]=Object(m.b)(n[s],t);return n}async function x(e,t){const a=e.style;return"none"===a?null:{type:"pattern",x:0,y:0,src:await Object(u.d)(Object(n.a)(`esri/symbols/patterns/${a}.png`),t.toCss(!0)),width:5,height:5}}function M(e){return e.outline?g(e):{color:"rgba(0, 0, 0, 1)",width:1.5}}function L(e,t){const a=k(e);if(!a)return null;let n="rgba(";return n+=Object(m.b)(a.r,t)+",",n+=Object(m.b)(a.g,t)+",",n+=Object(m.b)(a.b,t)+",",n+a.a+");"}function z(e,t){const a=L(e,t);return a?"pattern"in e&&Object(c.l)(e.pattern)&&"style"===e.pattern.type&&"none"===e.pattern.style?null:{color:a,width:Math.min(e.size?Object(i.g)(e.size):.75,80),style:"pattern"in e&&Object(c.l)(e.pattern)&&"style"===e.pattern.type?Object(u.b)(e.pattern.style):null,cap:"cap"in e?e.cap:null,join:"join"in e?"miter"===e.join?Object(i.g)(2):e.join:null}:{}}function S(e,t,a){const n=.75*a;return{type:"linear",x1:n?.25*n:0,y1:n?.5*n:0,x2:n||4,y2:n?.5*n:4,colors:[{color:e,offset:0},{color:t,offset:1}]}}function P(e,t){const a=t&&t.size?Object(i.g)(t.size):null,s=t&&t.maxSize?Object(i.g)(t.maxSize):null,l=t&&t.disableUpsampling,r=e.symbolLayers,c=[];let u=0,v=0;const k=r.getItemAt(r.length-1);let x;return k&&"icon"===k.type&&(x=k.size&&Object(i.g)(k.size)),r.forEach((r=>{if("icon"!==r.type&&"object"!==r.type)return;const o="icon"===r.type?r.size&&Object(i.g)(r.size):0,O=a||o?Math.ceil(Math.min(a||o,s||j)):d;if(r&&r.resource&&r.resource.href){const t=function(e,t){const a=t&&t.resource,s=a&&a.href;if(e.thumbnail&&e.thumbnail.url)return Promise.resolve(e.thumbnail.url);if(s&&"object"!==t.type)return Promise.resolve(Object(y.g)(e,t));const l=Object(n.a)("esri/images/Legend/legend3dsymboldefault.png");return e.styleOrigin&&(e.styleOrigin.styleName||e.styleOrigin.styleUrl)?Object(f.resolveWebStyleSymbol)(e.styleOrigin,{portal:e.styleOrigin.portal},"webRef").catch((e=>e)).then((e=>{var t;return(null==e||null==(t=e.thumbnail)?void 0:t.url)||l})):Promise.resolve(l)}(e,r).then((function(e){const t=r.get("material.color"),a=function(e){return"icon"===e.type?"multiply":"tint"}(r);return Object(b.b)(e,O,t,a,l)})).then((function(e){const t=e.width,a=e.height;return u=Math.max(u,t),v=Math.max(v,a),[{shape:{type:"image",x:0,y:0,width:t,height:a,src:e.url},fill:null,stroke:null}]}));c.push(t)}else{var k;let e=O;"icon"===r.type&&x&&a&&(e=O*(o/x));const n="tall"===(null==t?void 0:t.symbolConfig)||(null==t||null==(k=t.symbolConfig)?void 0:k.isTall)||"object"===r.type&&function(e){const t=e.depth,a=e.height,n=e.width;return n&&t&&a&&n===t&&n<a}(r);u=Math.max(u,n?20:e),v=Math.max(v,e),c.push(Promise.resolve(function(e,t,a){const n=[];if(!e)return n;switch(e.type){case"icon":{const a=0,s=0,l=t,r=t;switch(e.resource&&e.resource.primitive||p.b){case"circle":n.push({shape:{type:"circle",cx:0,cy:0,r:.5*t},fill:w(e,0),stroke:g(e)});break;case"square":n.push({shape:{type:"path",path:[{command:"M",values:[a,r]},{command:"L",values:[a,s]},{command:"L",values:[l,s]},{command:"L",values:[l,r]},{command:"Z",values:[]}]},fill:w(e,0),stroke:g(e)});break;case"triangle":n.push({shape:{type:"path",path:[{command:"M",values:[a,r]},{command:"L",values:[.5*l,s]},{command:"L",values:[l,r]},{command:"Z",values:[]}]},fill:w(e,0),stroke:g(e)});break;case"cross":n.push({shape:{type:"path",path:[{command:"M",values:[.5*l,s]},{command:"L",values:[.5*l,r]},{command:"M",values:[a,.5*r]},{command:"L",values:[l,.5*r]}]},stroke:M(e)});break;case"x":n.push({shape:{type:"path",path:[{command:"M",values:[a,s]},{command:"L",values:[l,r]},{command:"M",values:[l,s]},{command:"L",values:[a,r]}]},stroke:M(e)});break;case"kite":n.push({shape:{type:"path",path:[{command:"M",values:[a,.5*r]},{command:"L",values:[.5*l,s]},{command:"L",values:[l,.5*r]},{command:"L",values:[.5*l,r]},{command:"Z",values:[]}]},fill:w(e,0),stroke:g(e)})}break}case"object":switch(e.resource&&e.resource.primitive||h.b){case"cone":{const s=S(w(e,0),w(e,-.6),a?20:t),l=Object(m.c)(t,a);n.push({shape:l[0],fill:s}),n.push({shape:l[1],fill:s});break}case"inverted-cone":{const a=w(e,0),s=S(a,w(e,-.6),t),l=Object(m.h)(t);n.push({shape:l[0],fill:s}),n.push({shape:l[1],fill:a});break}case"cube":{const s=Object(m.d)(t,a);n.push({shape:s[0],fill:w(e,0)}),n.push({shape:s[1],fill:w(e,-.3)}),n.push({shape:s[2],fill:w(e,-.5)});break}case"cylinder":{const s=S(w(e,0),w(e,-.6),a?20:t),l=Object(m.e)(t,a);n.push({shape:l[0],fill:s}),n.push({shape:l[1],fill:s}),n.push({shape:l[2],fill:w(e,0)});break}case"diamond":{const a=Object(m.f)(t);n.push({shape:a[0],fill:w(e,-.3)}),n.push({shape:a[1],fill:w(e,0)}),n.push({shape:a[2],fill:w(e,-.3)}),n.push({shape:a[3],fill:w(e,-.7)});break}case"sphere":{const a=S(w(e,0),w(e,-.6));a.x1=0,a.y1=0,a.x2=.25*t,a.y2=.25*t,n.push({shape:{type:"circle",cx:0,cy:0,r:.5*t},fill:a});break}case"tetrahedron":{const a=Object(m.j)(t);n.push({shape:a[0],fill:w(e,-.3)}),n.push({shape:a[1],fill:w(e,0)}),n.push({shape:a[2],fill:w(e,-.6)});break}}}return n}(r,e,n)))}})),Object(o.i)(c).then((function(e){const a=[];return e.forEach((function(e){e.value?a.push(e.value):e.error&&O.warn("error while building swatchInfo!",e.error)})),Object(b.a)(a,[u,v],{node:t&&t.node,scale:!1,opacity:t&&t.opacity})}))}function D(e,t){if(0===e.symbolLayers.length)return Promise.reject(new l.a("symbolPreview: renderPreviewHTML3D","No symbolLayers in the symbol."));switch(e.type){case"point-3d":return P(e,t);case"line-3d":return function(e,t){const a=e.symbolLayers,n=[],s=Object(y.i)(e),l=t&&t.size?Object(i.g)(t.size):null,r=(t&&t.maxSize?Object(i.g)(t.maxSize):null)||80;let o,u=0,p=0;return a.forEach(((e,t)=>{if(!e)return;if("line"!==e.type&&"path"!==e.type)return;const a=[];switch(e.type){case"line":{const n=z(e,0);if(Object(c.k)(n))break;const s=n&&n.width||0;0===t&&(o=s);const i=Math.min(l||s,r),h=0===t?i:l?i*(s/o):i,m=h>20?2*h:40;p=Math.max(p,h),u=Math.max(u,m),n.width=h,a.push({shape:{type:"path",path:[{command:"M",values:[0,.5*p]},{command:"L",values:[u,.5*p]}]},stroke:n});break}case"path":{const t=Math.min(l||d,r),n=w(e,0),s=w(e,-.2),c=L(e,-.4),o=c?{color:c,width:1}:{};if("quad"===e.profile){const t=e.width,l=e.height,r=Object(m.i)(t&&l?t/l:1,0===l,0===t),c={...o,join:"bevel"};a.push({shape:r[0],fill:s,stroke:c}),a.push({shape:r[1],fill:s,stroke:c}),a.push({shape:r[2],fill:n,stroke:c})}else a.push({shape:m.l.pathSymbol3DLayer[0],fill:s,stroke:o}),a.push({shape:m.l.pathSymbol3DLayer[1],fill:n,stroke:o});p=Math.max(p,t),u=p}}n.push(a)})),Promise.resolve(Object(b.a)(n,[u,p],{node:t&&t.node,scale:s,opacity:t&&t.opacity}))}(e,t);case"polygon-3d":case"mesh-3d":return async function(e,t){const a="mesh-3d"===e.type,n=e.symbolLayers,s=t&&t.size?Object(i.g)(t.size):null,l=t&&t.maxSize?Object(i.g)(t.maxSize):null,r=s||d,o=[];let u=0,p=0,h=!1;for(let i=0;i<n.length;i++){const e=n.getItemAt(i),t=[];if(a&&"fill"!==e.type)continue;const s=m.l.fill[0];switch(e.type){case"fill":{const n=g(e),o=Math.min(r,l||j);u=Math.max(u,o),p=Math.max(p,o),h=!0;let i=w(e,0);const m="pattern"in e&&e.pattern,b=k(e);!a&&Object(c.l)(m)&&"style"===m.type&&"solid"!==m.style&&b&&(i=await x(m,b)),t.push({shape:s,fill:i,stroke:n});break}case"line":{const a=z(e,0);if(Object(c.k)(a))break;const n={stroke:a,shape:s};u=Math.max(u,d),p=Math.max(p,d),t.push(n);break}case"extrude":{const a={join:"round",width:1,...z(e,-.4)},n=w(e,0),s=w(e,-.2),c=Math.min(r,l||j),o=Object(m.g)(c);a.width=1,t.push({shape:o[0],fill:s,stroke:a}),t.push({shape:o[1],fill:s,stroke:a}),t.push({shape:o[2],fill:n,stroke:a});const i=d,h=.7*d+.5*c;u=Math.max(u,i),p=Math.max(p,h);break}case"water":{const a=k(e),n=v(a),s=v(a,2),c=v(a,3),o=Object(m.k)();h=!0,t.push({shape:o[0],fill:n}),t.push({shape:o[1],fill:s}),t.push({shape:o[2],fill:c});const i=Math.min(r,l||j);u=Math.max(u,i),p=Math.max(p,i);break}}o.push(t)}return Promise.resolve(Object(b.a)(o,[u,p],{node:t&&t.node,scale:h,opacity:t&&t.opacity}))}(e,t)}return Promise.reject(new l.a("symbolPreview: swatchInfo3D","symbol not supported."))}},843:function(e,t,a){"use strict";a.r(t),a.d(t,"fetchSymbolFromStyle",(function(){return b})),a.d(t,"resolveWebStyleSymbol",(function(){return m}));var n=a(111),s=a(436),l=a(88),r=a(100),c=a(172),o=a(160),i=a(202),u=a(933),p=a(259),h=a(881);function m(e,t,a,n){return e.name?e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName?function(e,t,a){const n=p.a.replace(/\{SymbolName\}/gi,e.name);return Object(p.d)(n,a).then((e=>{const a=Object(p.c)(e.data);return Object(i.a)(a,{portal:t.portal,url:Object(r.K)(Object(r.G)(n)),origin:"portal-item"})}))}(e,t,n):Object(p.b)(e,t,n).then((s=>b(s,e.name,t,a,n))):Promise.reject(new l.a("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function b(e,t,a,m,b){const y=e.data,f={portal:a&&a.portal||c.a.getDefault(),url:Object(r.K)(e.baseUrl),origin:"portal-item"},d=y.items.find((e=>e.name===t));if(!d){const e=`The symbol name '${t}' could not be found`;return Promise.reject(new l.a("symbolstyleutils:symbol-name-not-found",e,{symbolName:t}))}let j=Object(o.a)(Object(p.e)(d,m),f),O=d.thumbnail&&d.thumbnail.href;const g=d.thumbnail&&d.thumbnail.imageData;Object(s.b)()&&(j=Object(s.a)(j),O=Object(s.a)(O));const v={portal:a.portal,url:Object(r.K)(Object(r.G)(j)),origin:"portal-item"};return Object(p.d)(j,b).then((s=>{const l="cimRef"===m?Object(p.c)(s.data):s.data,r=Object(i.a)(l,v);if(r&&Object(n.c)(r)){if(O){const e=Object(o.a)(O,f);r.thumbnail=new h.a({url:e})}else g&&(r.thumbnail=new h.a({url:`data:image/png;base64,${g}`}));e.styleUrl?r.styleOrigin=new u.a({portal:a.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(r.styleOrigin=new u.a({portal:a.portal,styleName:e.styleName,name:t}))}return r}))}}}]);
//# sourceMappingURL=224.074a4c7e.chunk.js.map