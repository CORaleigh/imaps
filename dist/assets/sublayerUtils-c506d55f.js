import{at as f,h_ as l}from"./index-3baec1e8.js";function g(e,o,r){return o.flatten(({sublayers:i})=>i).length!==e.length?!0:!!e.some(i=>i.originIdOf("minScale")>r||i.originIdOf("maxScale")>r||i.originIdOf("renderer")>r||i.originIdOf("labelingInfo")>r||i.originIdOf("opacity")>r||i.originIdOf("labelsVisible")>r||i.originIdOf("source")>r)||!a(e,o)}function d(e,o,r){return!!e.some(n=>{const i=n.source;return!(!i||i.type==="map-layer"&&i.mapLayerId===n.id&&(f(i.gdbVersion)||i.gdbVersion===r))||n.originIdOf("renderer")>l.SERVICE||n.originIdOf("labelingInfo")>l.SERVICE||n.originIdOf("opacity")>l.SERVICE||n.originIdOf("labelsVisible")>l.SERVICE})||!a(e,o)}function a(e,o){if(!e||!e.length||f(o))return!0;const r=o.slice().reverse().flatten(({sublayers:t})=>t&&t.toArray().reverse()).map(t=>t.id).toArray();if(e.length>r.length)return!1;let n=0;const i=r.length;for(const{id:t}of e){for(;n<i&&r[n]!==t;)n++;if(n>=i)return!1}return!0}function u(e){return!!e&&e.some(o=>o.minScale!=null||o.layerDefinition&&o.layerDefinition.minScale!=null)}export{d as i,g as n,u as t};
