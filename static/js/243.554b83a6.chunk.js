(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[243],{1101:function(e,t,a){"use strict";a.r(t),a.d(t,"createCircle",(function(){return g})),a.d(t,"createEllipse",(function(){return R})),a.d(t,"createMultipoint",(function(){return O})),a.d(t,"createPoint",(function(){return h})),a.d(t,"createPolygon",(function(){return d})),a.d(t,"createPolyline",(function(){return M})),a.d(t,"createRectangle",(function(){return m})),a.d(t,"createSquare",(function(){return v})),a.d(t,"makeMapPoint",(function(){return j}));var n=a(21),r=a(6),c=a(107),i=a(56),o=a(43),u=a(203),b=a(143),l=a(95),s=a(97),y=(a(78),a(62)),x=a(595),f=a(404),p=a(575);function j(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return Object(r.k)(a)?[e,t,a]:[e,t]}function h(e,t){var a=new o.a({x:e[0],y:e[1],spatialReference:t});return e.length>2&&(a.z=e[2]),a}function O(e,t){return new u.a({points:e,spatialReference:t})}function M(e,t,a){var n=new s.a({paths:e,spatialReference:t});return a&&Object(b.i)(n),n}function d(e,t,a){var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=Object(n.a)(e);o.forEach((function(e){var t=e[0],a=e[e.length-1];Object(c.c)(t,a)&&1!==e.length||e.push(e[0])}));var u=new l.a({rings:o,spatialReference:t});return u.rings.forEach((function(e){Object(b.g)(e,!1,!1)||e.reverse()})),a&&Object(b.i)(u),r&&u.isSelfIntersecting&&Object(i.i)(t)&&(u=Object(f.simplify)(u)),u}function v(e,t,a){var n=t.mapToLocalMultiple(e),c=[],i={x:n[0].x,y:n[0].y},o=n[1].x,u=n[1].y,b=Math.round(o-i.x),l=Math.round(u-i.y),s=Math.max(Math.abs(b),Math.abs(l));if(a){var y={x:i.x+s,y:i.y+s},x={x:i.x-s,y:i.y-s};c.push(Object(p.b)(y.x,x.y),Object(p.b)(x.x,x.y),Object(p.b)(x.x,y.y),Object(p.b)(y.x,y.y))}else{var f={x:b>0?i.x+s:i.x-s,y:l>0?i.y+s:i.y-s};c.push(Object(p.b)(i.x,i.y),Object(p.b)(f.x,i.y),Object(p.b)(f.x,f.y),Object(p.b)(i.x,f.y))}return d([Object(r.g)(c.map((function(e){return t.localToMap(e)})))],t.spatialReference,t.doUnnormalization,!0)}function m(e,t,a){var n=t.mapToLocalMultiple(e);if(1===n.length){var c=48,i=n[0];n=[Object(p.b)(i.x-c,i.y+c),Object(p.b)(i.x+c,i.y-c),Object(p.b)(i.x+c,i.y-c),Object(p.b)(i.x-c,i.y+c)]}var o=[],u={x:n[0].x,y:n[0].y},b={x:n[1].x,y:n[1].y};if(a){var l=Math.round(b.x-u.x),s=Math.round(b.y-u.y);o.push(Object(p.b)(u.x-l,u.y-s),Object(p.b)(b.x,u.y-s),Object(p.b)(b.x,b.y),Object(p.b)(u.x-l,b.y))}else o.push(Object(p.b)(u.x,u.y),Object(p.b)(b.x,u.y),Object(p.b)(b.x,b.y),Object(p.b)(u.x,b.y));return d([Object(r.g)(o.map((function(e){return t.localToMap(e)})))],t.spatialReference,t.doUnnormalization,!0)}function g(e,t,a,n){var c=t.mapToLocalMultiple(e),o=null,u=null;if(a)o=c[0],u=c[1];else{var l=c[0],s=c[1],j=Math.round(s.x-l.x),O=Math.round(s.y-l.y),M=Math.max(Math.abs(j),Math.abs(O));o=Object(p.b)(j>0?l.x+M/2:l.x-M/2,O>0?l.y+M/2:l.y-M/2),u=Object(p.b)(Math.abs(j)>Math.abs(O)?o.x-M/2:o.x,Math.abs(j)>Math.abs(O)?o.y:o.y-M/2)}var v=t.localToMap(o),m=t.localToMap(u);if(Object(r.j)(v)||Object(r.j)(m))return null;t.doUnnormalization&&Object(b.j)([[v,m]],t.spatialReference);var g=h(v,t.spatialReference),R=h(m,t.spatialReference),T=Object(y.f)(t.spatialReference),w=0;if(Object(i.i)(t.spatialReference))w=T*Object(f.distance)(g,R,null);else{var z=o.x-u.x,P=o.y-u.y;w=T*Math.sqrt(z*z+P*P)*(n||1)}var U=new x.a({center:g,radius:w,radiusUnit:"meters",spatialReference:t.spatialReference});return d(U.rings,U.spatialReference,!1)}function R(e,t,a){for(var n=t.mapToLocalMultiple(e),c=n[0],i=n[1],o=Math.round(i.x-c.x),u=Math.round(i.y-c.y),b=Object(p.b)(a?c.x:c.x+o/2,a?c.y:c.y+u/2),l=a?o:o/2,s=a?u:u/2,y=[],x=2*Math.PI/60,f=0;f<60;f++){var j=Math.cos(f*x),h=Math.sin(f*x),O=Object(p.b)(l*j+b.x,s*h+b.y);y.push(O)}return y.push(y[0]),d([Object(r.g)(y.map((function(e){return t.localToMap(e)})))],t.spatialReference,t.doUnnormalization,!1)}}}]);
//# sourceMappingURL=243.554b83a6.chunk.js.map