(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[173,239,240,241],{620:function(n,t){},693:function(n,t,e){"use strict";e.r(t),function(n,r){e.d(t,"l",(function(){return f}));var o,i,u,a={exports:{}};o=a,i=function(){return{load:function(t){const i=t.locateFile,u={};var a=void 0!==a?a:{};const c=(()=>{let n;return{resolve:t=>n(t),promise:new Promise((t=>n=t))}})();a.locateFile=i,a.onRuntimeInitialized=()=>{c.resolve(u)},u.Module=a,u.whenLoaded=()=>c.promise;var f,s={};for(f in a)a.hasOwnProperty(f)&&(s[f]=a[f]);var l,p,h,m,d,y="object"==typeof window,g="function"==typeof importScripts,v="object"==typeof n&&"object"==typeof n.versions&&"string"==typeof n.versions.node,w="";v?(w=g?e(620).dirname(w)+"/":r+"/",l=function(n,t){return m||(m=e(721)),d||(d=e(620)),n=d.normalize(n),m.readFileSync(n,t?null:"utf8")},h=function(n){var t=l(n,!0);return t.buffer||(t=new Uint8Array(t)),function(n,t){n||D("Assertion failed: "+t)}(t.buffer),t},p=function(n,t,r){m||(m=e(721)),d||(d=e(620)),n=d.normalize(n),m.readFile(n,(function(n,e){n?r(n):t(e.buffer)}))},n.argv.length>1&&n.argv[1].replace(/\\/g,"/"),n.argv.slice(2),o.exports=a,n.on("uncaughtException",(function(n){if(!(n instanceof nn))throw n})),n.on("unhandledRejection",D),a.inspect=function(){return"[Emscripten Module object]"}):(y||g)&&(g?w=self.location.href:"undefined"!=typeof document&&document.currentScript&&(w=document.currentScript.src),w=0!==w.indexOf("blob:")?w.substr(0,w.lastIndexOf("/")+1):"",l=function(n){var t=new XMLHttpRequest;return t.open("GET",n,!1),t.send(null),t.responseText},g&&(h=function(n){var t=new XMLHttpRequest;return t.open("GET",n,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),p=function(n,t,e){var r=new XMLHttpRequest;r.open("GET",n,!0),r.responseType="arraybuffer",r.onload=function(){200==r.status||0==r.status&&r.response?t(r.response):e()},r.onerror=e,r.send(null)});var b=a.print||console.log.bind(console),A=a.printErr||console.warn.bind(console);for(f in s)s.hasOwnProperty(f)&&(a[f]=s[f]);s=null,a.arguments,a.thisProgram,a.quit;var E,T,R=0;a.wasmBinary&&(E=a.wasmBinary),a.noExitRuntime,"object"!=typeof WebAssembly&&D("no native wasm support detected");var _,P,S,x,I=!1,j="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function H(n,t,e){for(var r=t+e,o=t;n[o]&&!(o>=r);)++o;if(o-t>16&&n.subarray&&j)return j.decode(n.subarray(t,o));for(var i="";t<o;){var u=n[t++];if(128&u){var a=63&n[t++];if(192!=(224&u)){var c=63&n[t++];if((u=224==(240&u)?(15&u)<<12|a<<6|c:(7&u)<<18|a<<12|c<<6|63&n[t++])<65536)i+=String.fromCharCode(u);else{var f=u-65536;i+=String.fromCharCode(55296|f>>10,56320|1023&f)}}else i+=String.fromCharCode((31&u)<<6|a)}else i+=String.fromCharCode(u)}return i}function L(n,t){return n%t>0&&(n+=t-n%t),n}function M(n){_=n,a.HEAP8=new Int8Array(n),a.HEAP16=new Int16Array(n),a.HEAP32=S=new Int32Array(n),a.HEAPU8=P=new Uint8Array(n),a.HEAPU16=new Uint16Array(n),a.HEAPU32=new Uint32Array(n),a.HEAPF32=new Float32Array(n),a.HEAPF64=new Float64Array(n)}a.INITIAL_MEMORY;var F=[],k=[],C=[];function W(n){F.unshift(n)}function O(n){C.unshift(n)}var U,B=0,z=null;function D(n){throw a.onAbort&&a.onAbort(n),A(n+=""),I=!0,n="abort("+n+"). Build with -s ASSERTIONS=1 for more info.",new WebAssembly.RuntimeError(n)}function q(n){return n.startsWith("data:application/octet-stream;base64,")}function N(n){return n.startsWith("file://")}function G(n){try{if(n==U&&E)return new Uint8Array(E);if(h)return h(n);throw"both async and sync fetching of the wasm failed"}catch(A){D(A)}}function X(n){for(;n.length>0;){var t=n.shift();if("function"!=typeof t){var e=t.func;"number"==typeof e?void 0===t.arg?x.get(e)():x.get(e)(t.arg):e(void 0===t.arg?null:t.arg)}else t(a)}}function Y(n){try{return T.grow(n-_.byteLength+65535>>>16),M(T.buffer),1}catch(t){}}a.preloadedImages={},a.preloadedAudios={},q(U="libtess.wasm")||(U=function(n){return a.locateFile?a.locateFile(n,w):w+n}(U));var J={mappings:{},buffers:[null,[],[]],printChar:function(n,t){var e=J.buffers[n];0===t||10===t?((1===n?b:A)(H(e,0)),e.length=0):e.push(t)},varargs:void 0,get:function(){return J.varargs+=4,S[J.varargs-4>>2]},getStr:function(n){return function(n,t){return n?H(P,n,t):""}(n)},get64:function(n,t){return n}},K={h:function(){throw"longjmp"},l:function(n,t,e){P.copyWithin(n,t,t+e)},g:function(n){var t=P.length,e=2147483648;if((n>>>=0)>e)return!1;for(var r=1;r<=4;r*=2){var o=t*(1+.2/r);if(o=Math.min(o,n+100663296),Y(Math.min(e,L(Math.max(n,o),65536))))return!0}return!1},f:function(n,t,e,r){for(var o=0,i=0;i<e;i++){for(var u=S[t+8*i>>2],a=S[t+(8*i+4)>>2],c=0;c<a;c++)J.printChar(n,P[u+c]);o+=a}return S[r>>2]=o,0},b:function(){return R},k:function(n){var t=V();try{return x.get(n)()}catch(i){if(Z(t),i!==i+0&&"longjmp"!==i)throw i;$(1,0)}},d:function(n,t){var e=V();try{return x.get(n)(t)}catch(u){if(Z(e),u!==u+0&&"longjmp"!==u)throw u;$(1,0)}},j:function(n,t,e){var r=V();try{return x.get(n)(t,e)}catch(a){if(Z(r),a!==a+0&&"longjmp"!==a)throw a;$(1,0)}},i:function(n,t,e,r){var o=V();try{return x.get(n)(t,e,r)}catch(c){if(Z(o),c!==c+0&&"longjmp"!==c)throw c;$(1,0)}},e:function(n,t){var e=V();try{x.get(n)(t)}catch(u){if(Z(e),u!==u+0&&"longjmp"!==u)throw u;$(1,0)}},c:function(n,t,e){var r=V();try{x.get(n)(t,e)}catch(a){if(Z(r),a!==a+0&&"longjmp"!==a)throw a;$(1,0)}},a:function(n){!function(n){R=n}(n)}};(function(){var n={a:K};function t(n,t){var e=n.exports;a.asm=e,M((T=a.asm.m).buffer),x=a.asm.q,function(n){k.unshift(n)}(a.asm.n),function(n){if(B--,a.monitorRunDependencies&&a.monitorRunDependencies(B),0==B&&z){var t=z;z=null,t()}}()}function e(n){t(n.instance)}function r(t){return function(){if(!E&&(y||g)){if("function"==typeof fetch&&!N(U))return fetch(U,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw"failed to load wasm binary file at '"+U+"'";return n.arrayBuffer()})).catch((function(){return G(U)}));if(p)return new Promise((function(n,t){p(U,(function(t){n(new Uint8Array(t))}),t)}))}return Promise.resolve().then((function(){return G(U)}))}().then((function(t){return WebAssembly.instantiate(t,n)})).then(t,(function(n){A("failed to asynchronously prepare wasm: "+n),D(n)}))}if(B++,a.monitorRunDependencies&&a.monitorRunDependencies(B),a.instantiateWasm)try{return a.instantiateWasm(n,t)}catch(o){return A("Module.instantiateWasm callback failed with error: "+o),!1}E||"function"!=typeof WebAssembly.instantiateStreaming||q(U)||N(U)||"function"!=typeof fetch?r(e):fetch(U,{credentials:"same-origin"}).then((function(t){return WebAssembly.instantiateStreaming(t,n).then(e,(function(n){return A("wasm streaming compile failed: "+n),A("falling back to ArrayBuffer instantiation"),r(e)}))}))})(),a.___wasm_call_ctors=function(){return(a.___wasm_call_ctors=a.asm.n).apply(null,arguments)},a._malloc=function(){return(a._malloc=a.asm.o).apply(null,arguments)},a._free=function(){return(a._free=a.asm.p).apply(null,arguments)},a._triangulate=function(){return(a._triangulate=a.asm.r).apply(null,arguments)};var Q,V=a.stackSave=function(){return(V=a.stackSave=a.asm.s).apply(null,arguments)},Z=a.stackRestore=function(){return(Z=a.stackRestore=a.asm.t).apply(null,arguments)},$=a._setThrew=function(){return($=a._setThrew=a.asm.u).apply(null,arguments)};function nn(n){this.name="ExitStatus",this.message="Program terminated with exit("+n+")",this.status=n}function tn(n){function t(){Q||(Q=!0,a.calledRun=!0,I||(X(k),a.onRuntimeInitialized&&a.onRuntimeInitialized(),function(){if(a.postRun)for("function"==typeof a.postRun&&(a.postRun=[a.postRun]);a.postRun.length;)O(a.postRun.shift());X(C)}()))}B>0||(function(){if(a.preRun)for("function"==typeof a.preRun&&(a.preRun=[a.preRun]);a.preRun.length;)W(a.preRun.shift());X(F)}(),B>0||(a.setStatus?(a.setStatus("Running..."),setTimeout((function(){setTimeout((function(){a.setStatus("")}),1),t()}),1)):t()))}if(z=function n(){Q||tn(),Q||(z=n)},a.run=tn,a.preInit)for("function"==typeof a.preInit&&(a.preInit=[a.preInit]);a.preInit.length>0;)a.preInit.pop()();tn();let en=null,rn=null,on=null,un=null;const an=u.Module;let cn=0;return u.triangulate=(n,t,e)=>{en||(en=an._triangulate);let r=an.HEAPF32;const o=an.HEAP32.BYTES_PER_ELEMENT,i=r.BYTES_PER_ELEMENT;e>cn&&(cn=e,on&&(an._free(on),on=0),rn&&(an._free(rn),rn=0)),on||(on=an._malloc(e*i)),un||(un=an._malloc(1e3*o)),rn||(rn=an._malloc(e*i)),r=an.HEAPF32,r.set(n,on/i),an.HEAP32.set(t,un/o);const u=en(on,un,t.length,2,rn),a=2*u;r=an.HEAPF32;const c=r.slice(rn/i,rn/i+a),f={};return f.buffer=c,f.vertexCount=u,f},u.whenLoaded()}}},void 0!==(u=i())&&(o.exports=u);var c=a.exports,f=Object.freeze(Object.assign(Object.create(null),a.exports,{default:c}))}.call(this,e(720),"/")},720:function(n,t){var e,r,o=n.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function a(n){if(e===setTimeout)return setTimeout(n,0);if((e===i||!e)&&setTimeout)return e=setTimeout,setTimeout(n,0);try{return e(n,0)}catch(t){try{return e.call(null,n,0)}catch(t){return e.call(this,n,0)}}}!function(){try{e="function"===typeof setTimeout?setTimeout:i}catch(n){e=i}try{r="function"===typeof clearTimeout?clearTimeout:u}catch(n){r=u}}();var c,f=[],s=!1,l=-1;function p(){s&&c&&(s=!1,c.length?f=c.concat(f):l=-1,f.length&&h())}function h(){if(!s){var n=a(p);s=!0;for(var t=f.length;t;){for(c=f,f=[];++l<t;)c&&c[l].run();l=-1,t=f.length}c=null,s=!1,function(n){if(r===clearTimeout)return clearTimeout(n);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(n);try{r(n)}catch(t){try{return r.call(null,n)}catch(t){return r.call(this,n)}}}(n)}}function m(n,t){this.fun=n,this.array=t}function d(){}o.nextTick=function(n){var t=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)t[e-1]=arguments[e];f.push(new m(n,t)),1!==f.length||s||a(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=d,o.addListener=d,o.once=d,o.off=d,o.removeListener=d,o.removeAllListeners=d,o.emit=d,o.prependListener=d,o.prependOnceListener=d,o.listeners=function(n){return[]},o.binding=function(n){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(n){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},721:function(n,t){}}]);
//# sourceMappingURL=173.3307a50f.chunk.js.map