(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[120],{1194:function(t,n,r){"use strict";r.r(n),function(t,e,i){r.d(n,"b",(function(){return u}));var o=r(351),a=Object(o.b)((function(n,o){var a,u=(a=(a="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0)||t,function(t){var n,o=void 0!==(t=t||{})?t:{},u={};for(n in o)o.hasOwnProperty(n)&&(u[n]=o[n]);var s,c,l,f;s="object"==typeof window,c="function"==typeof importScripts,l="object"==typeof e&&"object"==typeof e.versions&&"string"==typeof e.versions.node,f=!s&&!l&&!c;var p,d,h,y,v="";l?(v=c?r(959).dirname(v)+"/":i+"/",p=function(t,n){return h||(h=r(1043)),y||(y=r(959)),t=y.normalize(t),h.readFileSync(t,n?null:"utf8")},d=function(t){var n=p(t,!0);return n.buffer||(n=new Uint8Array(n)),$(n.buffer),n},e.argv.length>1&&e.argv[1].replace(/\\/g,"/"),e.argv.slice(2),e.on("uncaughtException",(function(t){if(!(t instanceof Hn))throw t})),e.on("unhandledRejection",et),o.inspect=function(){return"[Emscripten Module object]"}):f?("undefined"!=typeof read&&(p=function(t){return read(t)}),d=function(t){var n;return"function"==typeof readbuffer?new Uint8Array(readbuffer(t)):($("object"==typeof(n=read(t,"binary"))),n)},"undefined"!=typeof scriptArgs&&scriptArgs,"undefined"!=typeof print&&("undefined"==typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!=typeof printErr?printErr:print)):(s||c)&&(c?v=self.location.href:document.currentScript&&(v=document.currentScript.src),a&&(v=a),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",p=function(t){var n=new XMLHttpRequest;return n.open("GET",t,!1),n.send(null),n.responseText},c&&(d=function(t){var n=new XMLHttpRequest;return n.open("GET",t,!1),n.responseType="arraybuffer",n.send(null),new Uint8Array(n.response)}));var m,g,w=o.print||console.log.bind(console),b=o.printErr||console.warn.bind(console);for(n in u)u.hasOwnProperty(n)&&(o[n]=u[n]);u=null,o.arguments&&o.arguments,o.thisProgram&&o.thisProgram,o.quit&&o.quit,o.wasmBinary&&(m=o.wasmBinary),o.noExitRuntime&&o.noExitRuntime,"object"!=typeof WebAssembly&&b("no native wasm support detected");var C=new WebAssembly.Table({initial:59,maximum:59,element:"anyfunc"}),T=!1;function $(t,n){t||et("Assertion failed: "+n)}var P="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function _(t,n,r){for(var e=n+r,i=n;t[i]&&!(i>=e);)++i;if(i-n>16&&t.subarray&&P)return P.decode(t.subarray(n,i));for(var o="";n<i;){var a=t[n++];if(128&a){var u=63&t[n++];if(192!=(224&a)){var s=63&t[n++];if((a=224==(240&a)?(15&a)<<12|u<<6|s:(7&a)<<18|u<<12|s<<6|63&t[n++])<65536)o+=String.fromCharCode(a);else{var c=a-65536;o+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else o+=String.fromCharCode((31&a)<<6|u)}else o+=String.fromCharCode(a)}return o}function A(t,n){return t?_(x,t,n):""}var E="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function W(t){for(var n=t,r=n>>1;D[r];)++r;if((n=r<<1)-t>32&&E)return E.decode(x.subarray(t,n));for(var e=0,i="";;){var o=D[t+2*e>>1];if(0==o)return i;++e,i+=String.fromCharCode(o)}}function S(t,n,r){if(void 0===r&&(r=2147483647),r<2)return 0;for(var e=n,i=(r-=2)<2*t.length?r/2:t.length,o=0;o<i;++o){var a=t.charCodeAt(o);D[n>>1]=a,n+=2}return D[n>>1]=0,n-e}function F(t){return 2*t.length}function O(t){for(var n=0,r="";;){var e=M[t+4*n>>2];if(0==e)return r;if(++n,e>=65536){var i=e-65536;r+=String.fromCharCode(55296|i>>10,56320|1023&i)}else r+=String.fromCharCode(e)}}function k(t,n,r){if(void 0===r&&(r=2147483647),r<4)return 0;for(var e=n,i=e+r-4,o=0;o<t.length;++o){var a=t.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&t.charCodeAt(++o)),M[n>>2]=a,(n+=4)+4>i)break}return M[n>>2]=0,n-e}function j(t){for(var n=0,r=0;r<t.length;++r){var e=t.charCodeAt(r);e>=55296&&e<=57343&&++r,n+=4}return n}var R,I,x,D,U,M,V,z,H;function L(t,n){return t%n>0&&(t+=n-t%n),t}function B(t){R=t,o.HEAP8=I=new Int8Array(t),o.HEAP16=D=new Int16Array(t),o.HEAP32=M=new Int32Array(t),o.HEAPU8=x=new Uint8Array(t),o.HEAPU16=U=new Uint16Array(t),o.HEAPU32=V=new Uint32Array(t),o.HEAPF32=z=new Float32Array(t),o.HEAPF64=H=new Float64Array(t)}var q=o.INITIAL_MEMORY||16777216;function G(t){for(;t.length>0;){var n=t.shift();if("function"!=typeof n){var r=n.func;"number"==typeof r?void 0===n.arg?o.dynCall_v(r):o.dynCall_vi(r,n.arg):r(void 0===n.arg?null:n.arg)}else n()}}(g=o.wasmMemory?o.wasmMemory:new WebAssembly.Memory({initial:q/65536}))&&(R=g.buffer),q=R.byteLength,B(R),M[79544]=5561216;var N=[],J=[],X=[],Y=[];function Z(t){N.unshift(t)}function K(t){Y.unshift(t)}var Q=Math.ceil,tt=Math.floor,nt=0,rt=null;function et(t){throw o.onAbort&&o.onAbort(t),w(t+=""),b(t),T=!0,t="abort("+t+"). Build with -s ASSERTIONS=1 for more info.",new WebAssembly.RuntimeError(t)}o.preloadedImages={},o.preloadedAudios={};var it="data:application/octet-stream;base64,";function ot(t){return String.prototype.startsWith?t.startsWith(it):0===t.indexOf(it)}var at="basis_transcoder.wasm";function ut(){try{if(m)return new Uint8Array(m);if(d)return d(at);throw"both async and sync fetching of the wasm failed"}catch(b){et(b)}}function st(){return m||!s&&!c||"function"!=typeof fetch?new Promise((function(t,n){t(ut())})):fetch(at,{credentials:"same-origin"}).then((function(t){if(!t.ok)throw"failed to load wasm binary file at '"+at+"'";return t.arrayBuffer()})).catch((function(){return ut()}))}function ct(t){switch(t){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+t)}}ot(at)||(at=function(t){return o.locateFile?o.locateFile(t,v):v+t}(at)),J.push({func:function(){Un()}});var lt=void 0;function ft(t){for(var n="",r=t;x[r];)n+=lt[x[r++]];return n}var pt={},dt={},ht={};function yt(t){if(void 0===t)return"_unknown";var n=(t=t.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return n>=48&&n<=57?"_"+t:t}function vt(t,n){return t=yt(t),new Function("body","return function "+t+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(n)}function mt(t,n){var r=vt(n,(function(t){this.name=n,this.message=t;var r=new Error(t).stack;void 0!==r&&(this.stack=this.toString()+"\n"+r.replace(/^Error(:[^\n]*)?\n/,""))}));return r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},r}var gt=void 0;function wt(t){throw new gt(t)}var bt=void 0;function Ct(t){throw new bt(t)}function Tt(t,n,r){function e(n){var e=r(n);e.length!==t.length&&Ct("Mismatched type converter count");for(var i=0;i<t.length;++i)$t(t[i],e[i])}t.forEach((function(t){ht[t]=n}));var i=new Array(n.length),o=[],a=0;n.forEach((function(t,n){dt.hasOwnProperty(t)?i[n]=dt[t]:(o.push(t),pt.hasOwnProperty(t)||(pt[t]=[]),pt[t].push((function(){i[n]=dt[t],++a===o.length&&e(i)})))})),0===o.length&&e(i)}function $t(t,n,r){if(r=r||{},!("argPackAdvance"in n))throw new TypeError("registerType registeredInstance requires argPackAdvance");var e=n.name;if(t||wt('type "'+e+'" must have a positive integer typeid pointer'),dt.hasOwnProperty(t)){if(r.ignoreDuplicateRegistrations)return;wt("Cannot register type '"+e+"' twice")}if(dt[t]=n,delete ht[t],pt.hasOwnProperty(t)){var i=pt[t];delete pt[t],i.forEach((function(t){t()}))}}function Pt(t){if(!(this instanceof Ut))return!1;if(!(t instanceof Ut))return!1;for(var n=this.$$.ptrType.registeredClass,r=this.$$.ptr,e=t.$$.ptrType.registeredClass,i=t.$$.ptr;n.baseClass;)r=n.upcast(r),n=n.baseClass;for(;e.baseClass;)i=e.upcast(i),e=e.baseClass;return n===e&&r===i}function _t(t){return{count:t.count,deleteScheduled:t.deleteScheduled,preservePointerOnDelete:t.preservePointerOnDelete,ptr:t.ptr,ptrType:t.ptrType,smartPtr:t.smartPtr,smartPtrType:t.smartPtrType}}function At(t){wt(function(t){return t.$$.ptrType.registeredClass.name}(t)+" instance already deleted")}var Et=!1;function Wt(t){}function St(t){t.count.value-=1,0===t.count.value&&function(t){t.smartPtr?t.smartPtrType.rawDestructor(t.smartPtr):t.ptrType.registeredClass.rawDestructor(t.ptr)}(t)}function Ft(t){return"undefined"==typeof FinalizationGroup?(Ft=function(t){return t},t):(Et=new FinalizationGroup((function(t){for(var n=t.next();!n.done;n=t.next()){var r=n.value;r.ptr?St(r):console.warn("object already deleted: "+r.ptr)}})),Wt=function(t){Et.unregister(t.$$)},(Ft=function(t){return Et.register(t,t.$$,t.$$),t})(t))}function Ot(){if(this.$$.ptr||At(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var t=Ft(Object.create(Object.getPrototypeOf(this),{$$:{value:_t(this.$$)}}));return t.$$.count.value+=1,t.$$.deleteScheduled=!1,t}function kt(){this.$$.ptr||At(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&wt("Object already scheduled for deletion"),Wt(this),St(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function jt(){return!this.$$.ptr}var Rt=void 0,It=[];function xt(){for(;It.length;){var t=It.pop();t.$$.deleteScheduled=!1,t.delete()}}function Dt(){return this.$$.ptr||At(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&wt("Object already scheduled for deletion"),It.push(this),1===It.length&&Rt&&Rt(xt),this.$$.deleteScheduled=!0,this}function Ut(){}var Mt={};function Vt(t,n,r){if(void 0===t[n].overloadTable){var e=t[n];t[n]=function(){return t[n].overloadTable.hasOwnProperty(arguments.length)||wt("Function '"+r+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+t[n].overloadTable+")!"),t[n].overloadTable[arguments.length].apply(this,arguments)},t[n].overloadTable=[],t[n].overloadTable[e.argCount]=e}}function zt(t,n,r){o.hasOwnProperty(t)?((void 0===r||void 0!==o[t].overloadTable&&void 0!==o[t].overloadTable[r])&&wt("Cannot register public name '"+t+"' twice"),Vt(o,t,t),o.hasOwnProperty(r)&&wt("Cannot register multiple overloads of a function with the same number of arguments ("+r+")!"),o[t].overloadTable[r]=n):(o[t]=n,void 0!==r&&(o[t].numArguments=r))}function Ht(t,n,r,e,i,o,a,u){this.name=t,this.constructor=n,this.instancePrototype=r,this.rawDestructor=e,this.baseClass=i,this.getActualType=o,this.upcast=a,this.downcast=u,this.pureVirtualFunctions=[]}function Lt(t,n,r){for(;n!==r;)n.upcast||wt("Expected null or instance of "+r.name+", got an instance of "+n.name),t=n.upcast(t),n=n.baseClass;return t}function Bt(t,n){if(null===n)return this.isReference&&wt("null is not a valid "+this.name),0;n.$$||wt('Cannot pass "'+Tn(n)+'" as a '+this.name),n.$$.ptr||wt("Cannot pass deleted object as a pointer of type "+this.name);var r=n.$$.ptrType.registeredClass;return Lt(n.$$.ptr,r,this.registeredClass)}function qt(t,n){var r;if(null===n)return this.isReference&&wt("null is not a valid "+this.name),this.isSmartPointer?(r=this.rawConstructor(),null!==t&&t.push(this.rawDestructor,r),r):0;n.$$||wt('Cannot pass "'+Tn(n)+'" as a '+this.name),n.$$.ptr||wt("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&n.$$.ptrType.isConst&&wt("Cannot convert argument of type "+(n.$$.smartPtrType?n.$$.smartPtrType.name:n.$$.ptrType.name)+" to parameter type "+this.name);var e=n.$$.ptrType.registeredClass;if(r=Lt(n.$$.ptr,e,this.registeredClass),this.isSmartPointer)switch(void 0===n.$$.smartPtr&&wt("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:n.$$.smartPtrType===this?r=n.$$.smartPtr:wt("Cannot convert argument of type "+(n.$$.smartPtrType?n.$$.smartPtrType.name:n.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:r=n.$$.smartPtr;break;case 2:if(n.$$.smartPtrType===this)r=n.$$.smartPtr;else{var i=n.clone();r=this.rawShare(r,Cn((function(){i.delete()}))),null!==t&&t.push(this.rawDestructor,r)}break;default:wt("Unsupporting sharing policy")}return r}function Gt(t,n){if(null===n)return this.isReference&&wt("null is not a valid "+this.name),0;n.$$||wt('Cannot pass "'+Tn(n)+'" as a '+this.name),n.$$.ptr||wt("Cannot pass deleted object as a pointer of type "+this.name),n.$$.ptrType.isConst&&wt("Cannot convert argument of type "+n.$$.ptrType.name+" to parameter type "+this.name);var r=n.$$.ptrType.registeredClass;return Lt(n.$$.ptr,r,this.registeredClass)}function Nt(t){return this.fromWireType(V[t>>2])}function Jt(t){return this.rawGetPointee&&(t=this.rawGetPointee(t)),t}function Xt(t){this.rawDestructor&&this.rawDestructor(t)}function Yt(t){null!==t&&t.delete()}function Zt(t,n,r){if(n===r)return t;if(void 0===r.baseClass)return null;var e=Zt(t,n,r.baseClass);return null===e?null:r.downcast(e)}function Kt(){return Object.keys(nn).length}function Qt(){var t=[];for(var n in nn)nn.hasOwnProperty(n)&&t.push(nn[n]);return t}function tn(t){Rt=t,It.length&&Rt&&Rt(xt)}var nn={};function rn(t,n){return n=function(t,n){for(void 0===n&&wt("ptr should not be undefined");t.baseClass;)n=t.upcast(n),t=t.baseClass;return n}(t,n),nn[n]}function en(t,n){return n.ptrType&&n.ptr||Ct("makeClassHandle requires ptr and ptrType"),!!n.smartPtrType!=!!n.smartPtr&&Ct("Both smartPtrType and smartPtr must be specified"),n.count={value:1},Ft(Object.create(t,{$$:{value:n}}))}function on(t){var n=this.getPointee(t);if(!n)return this.destructor(t),null;var r=rn(this.registeredClass,n);if(void 0!==r){if(0===r.$$.count.value)return r.$$.ptr=n,r.$$.smartPtr=t,r.clone();var e=r.clone();return this.destructor(t),e}function i(){return this.isSmartPointer?en(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:n,smartPtrType:this,smartPtr:t}):en(this.registeredClass.instancePrototype,{ptrType:this,ptr:t})}var o,a=this.registeredClass.getActualType(n),u=Mt[a];if(!u)return i.call(this);o=this.isConst?u.constPointerType:u.pointerType;var s=Zt(n,this.registeredClass,o.registeredClass);return null===s?i.call(this):this.isSmartPointer?en(o.registeredClass.instancePrototype,{ptrType:o,ptr:s,smartPtrType:this,smartPtr:t}):en(o.registeredClass.instancePrototype,{ptrType:o,ptr:s})}function an(t,n,r,e,i,o,a,u,s,c,l){this.name=t,this.registeredClass=n,this.isReference=r,this.isConst=e,this.isSmartPointer=i,this.pointeeType=o,this.sharingPolicy=a,this.rawGetPointee=u,this.rawConstructor=s,this.rawShare=c,this.rawDestructor=l,i||void 0!==n.baseClass?this.toWireType=qt:e?(this.toWireType=Bt,this.destructorFunction=null):(this.toWireType=Gt,this.destructorFunction=null)}function un(t,n,r){o.hasOwnProperty(t)||Ct("Replacing nonexistant public symbol"),void 0!==o[t].overloadTable&&void 0!==r?o[t].overloadTable[r]=n:(o[t]=n,o[t].argCount=r)}function sn(t,n){t=ft(t);var r=function(r){for(var e=[],i=1;i<t.length;++i)e.push("a"+i);var o="return function dynCall_"+t+"_"+n+"("+e.join(", ")+") {\n";return o+="    return dynCall(rawFunction"+(e.length?", ":"")+e.join(", ")+");\n",o+="};\n",new Function("dynCall","rawFunction",o)(r,n)}(o["dynCall_"+t]);return"function"!=typeof r&&wt("unknown function pointer with signature "+t+": "+n),r}var cn=void 0;function ln(t){var n=zn(t),r=ft(n);return Vn(n),r}function fn(t,n){var r=[],e={};throw n.forEach((function t(n){e[n]||dt[n]||(ht[n]?ht[n].forEach(t):(r.push(n),e[n]=!0))})),new cn(t+": "+r.map(ln).join([", "]))}function pn(t,n){for(var r=[],e=0;e<t;e++)r.push(M[(n>>2)+e]);return r}function dn(t){for(;t.length;){var n=t.pop();t.pop()(n)}}function hn(t,n){if(!(t instanceof Function))throw new TypeError("new_ called with constructor type "+typeof t+" which is not a function");var r=vt(t.name||"unknownFunctionName",(function(){}));r.prototype=t.prototype;var e=new r,i=t.apply(e,n);return i instanceof Object?i:e}function yn(t,n,r,e,i){var o=n.length;o<2&&wt("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=null!==n[1]&&null!==r,u=!1,s=1;s<n.length;++s)if(null!==n[s]&&void 0===n[s].destructorFunction){u=!0;break}var c="void"!==n[0].name,l="",f="";for(s=0;s<o-2;++s)l+=(0!==s?", ":"")+"arg"+s,f+=(0!==s?", ":"")+"arg"+s+"Wired";var p="return function "+yt(t)+"("+l+") {\nif (arguments.length !== "+(o-2)+") {\nthrowBindingError('function "+t+" called with ' + arguments.length + ' arguments, expected "+(o-2)+" args!');\n}\n";u&&(p+="var destructors = [];\n");var d=u?"destructors":"null",h=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],y=[wt,e,i,dn,n[0],n[1]];for(a&&(p+="var thisWired = classParam.toWireType("+d+", this);\n"),s=0;s<o-2;++s)p+="var arg"+s+"Wired = argType"+s+".toWireType("+d+", arg"+s+"); // "+n[s+2].name+"\n",h.push("argType"+s),y.push(n[s+2]);if(a&&(f="thisWired"+(f.length>0?", ":"")+f),p+=(c?"var rv = ":"")+"invoker(fn"+(f.length>0?", ":"")+f+");\n",u)p+="runDestructors(destructors);\n";else for(s=a?1:2;s<n.length;++s){var v=1===s?"thisWired":"arg"+(s-2)+"Wired";null!==n[s].destructorFunction&&(p+=v+"_dtor("+v+"); // "+n[s].name+"\n",h.push(v+"_dtor"),y.push(n[s].destructorFunction))}return c&&(p+="var ret = retType.fromWireType(rv);\nreturn ret;\n"),p+="}\n",h.push(p),hn(Function,h).apply(null,y)}var vn=[],mn=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function gn(t){t>4&&0==--mn[t].refcount&&(mn[t]=void 0,vn.push(t))}function wn(){for(var t=0,n=5;n<mn.length;++n)void 0!==mn[n]&&++t;return t}function bn(){for(var t=5;t<mn.length;++t)if(void 0!==mn[t])return mn[t];return null}function Cn(t){switch(t){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var n=vn.length?vn.pop():mn.length;return mn[n]={refcount:1,value:t},n}}function Tn(t){if(null===t)return"null";var n=typeof t;return"object"===n||"array"===n||"function"===n?t.toString():""+t}function $n(t,n){switch(n){case 2:return function(t){return this.fromWireType(z[t>>2])};case 3:return function(t){return this.fromWireType(H[t>>3])};default:throw new TypeError("Unknown float type: "+t)}}function Pn(t,n,r){switch(n){case 0:return r?function(t){return I[t]}:function(t){return x[t]};case 1:return r?function(t){return D[t>>1]}:function(t){return U[t>>1]};case 2:return r?function(t){return M[t>>2]}:function(t){return V[t>>2]};default:throw new TypeError("Unknown integer type: "+t)}}function _n(t){return t||wt("Cannot use deleted val. handle = "+t),mn[t].value}function An(t,n){var r=dt[t];return void 0===r&&wt(n+" has unknown type "+ln(t)),r}var En={};function Wn(t){var n=En[t];return void 0===n?ft(t):n}var Sn=[];function Fn(){return"object"==typeof globalThis?globalThis:Function("return this")()}function On(t){for(var n="",r=0;r<t;++r)n+=(0!==r?", ":"")+"arg"+r;var e="return function emval_allocator_"+t+"(constructor, argTypes, args) {\n";for(r=0;r<t;++r)e+="var argType"+r+" = requireRegisteredType(Module['HEAP32'][(argTypes >> 2) + "+r+'], "parameter '+r+'");\nvar arg'+r+" = argType"+r+".readValueFromPointer(args);\nargs += argType"+r+"['argPackAdvance'];\n";return e+="var obj = new constructor("+n+");\nreturn __emval_register(obj);\n}\n",new Function("requireRegisteredType","Module","__emval_register",e)(An,o,Cn)}var kn={};function jn(t){try{return g.grow(t-R.byteLength+65535>>16),B(g.buffer),1}catch(n){}}var Rn={mappings:{},buffers:[null,[],[]],printChar:function(t,n){var r=Rn.buffers[t];0===n||10===n?((1===t?w:b)(_(r,0)),r.length=0):r.push(n)},varargs:void 0,get:function(){return Rn.varargs+=4,M[Rn.varargs-4>>2]},getStr:function(t){return A(t)},get64:function(t,n){return t}};(function(){for(var t=new Array(256),n=0;n<256;++n)t[n]=String.fromCharCode(n);lt=t})(),gt=o.BindingError=mt(Error,"BindingError"),bt=o.InternalError=mt(Error,"InternalError"),Ut.prototype.isAliasOf=Pt,Ut.prototype.clone=Ot,Ut.prototype.delete=kt,Ut.prototype.isDeleted=jt,Ut.prototype.deleteLater=Dt,an.prototype.getPointee=Jt,an.prototype.destructor=Xt,an.prototype.argPackAdvance=8,an.prototype.readValueFromPointer=Nt,an.prototype.deleteObject=Yt,an.prototype.fromWireType=on,o.getInheritedInstanceCount=Kt,o.getLiveInheritedInstances=Qt,o.flushPendingDeletes=xt,o.setDelayFunction=tn,cn=o.UnboundTypeError=mt(Error,"UnboundTypeError"),o.count_emval_handles=wn,o.get_first_emval=bn;var In={G:function(t){return Mn(t)},D:function(t,n,r){throw t},A:function(t,n,r,e,i){var o=ct(r);$t(t,{name:n=ft(n),fromWireType:function(t){return!!t},toWireType:function(t,n){return n?e:i},argPackAdvance:8,readValueFromPointer:function(t){var e;if(1===r)e=I;else if(2===r)e=D;else{if(4!==r)throw new TypeError("Unknown boolean type size: "+n);e=M}return this.fromWireType(e[t>>o])},destructorFunction:null})},t:function(t,n,r,e,i,o,a,u,s,c,l,f,p){l=ft(l),o=sn(i,o),u&&(u=sn(a,u)),c&&(c=sn(s,c)),p=sn(f,p);var d=yt(l);zt(d,(function(){fn("Cannot construct "+l+" due to unbound types",[e])})),Tt([t,n,r],e?[e]:[],(function(n){var r,i;n=n[0],i=e?(r=n.registeredClass).instancePrototype:Ut.prototype;var a=vt(d,(function(){if(Object.getPrototypeOf(this)!==s)throw new gt("Use 'new' to construct "+l);if(void 0===f.constructor_body)throw new gt(l+" has no accessible constructor");var t=f.constructor_body[arguments.length];if(void 0===t)throw new gt("Tried to invoke ctor of "+l+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(f.constructor_body).toString()+") parameters instead!");return t.apply(this,arguments)})),s=Object.create(i,{constructor:{value:a}});a.prototype=s;var f=new Ht(l,a,s,p,r,o,u,c),h=new an(l,f,!0,!1,!1),y=new an(l+"*",f,!1,!1,!1),v=new an(l+" const*",f,!1,!0,!1);return Mt[t]={pointerType:y,constPointerType:v},un(d,a),[h,y,v]}))},s:function(t,n,r,e,i,o){$(n>0);var a=pn(n,r);i=sn(e,i);var u=[o],s=[];Tt([],[t],(function(t){var r="constructor "+(t=t[0]).name;if(void 0===t.registeredClass.constructor_body&&(t.registeredClass.constructor_body=[]),void 0!==t.registeredClass.constructor_body[n-1])throw new gt("Cannot register multiple constructors with identical number of parameters ("+(n-1)+") for class '"+t.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return t.registeredClass.constructor_body[n-1]=function(){fn("Cannot construct "+t.name+" due to unbound types",a)},Tt([],a,(function(e){return t.registeredClass.constructor_body[n-1]=function(){arguments.length!==n-1&&wt(r+" called with "+arguments.length+" arguments, expected "+(n-1)),s.length=0,u.length=n;for(var t=1;t<n;++t)u[t]=e[t].toWireType(s,arguments[t-1]);var o=i.apply(null,u);return dn(s),e[0].fromWireType(o)},[]})),[]}))},c:function(t,n,r,e,i,o,a,u){var s=pn(r,e);n=ft(n),o=sn(i,o),Tt([],[t],(function(t){var e=(t=t[0]).name+"."+n;function i(){fn("Cannot call "+e+" due to unbound types",s)}u&&t.registeredClass.pureVirtualFunctions.push(n);var c=t.registeredClass.instancePrototype,l=c[n];return void 0===l||void 0===l.overloadTable&&l.className!==t.name&&l.argCount===r-2?(i.argCount=r-2,i.className=t.name,c[n]=i):(Vt(c,n,e),c[n].overloadTable[r-2]=i),Tt([],s,(function(i){var u=yn(e,i,t,o,a);return void 0===c[n].overloadTable?(u.argCount=r-2,c[n]=u):c[n].overloadTable[r-2]=u,[]})),[]}))},z:function(t,n){$t(t,{name:n=ft(n),fromWireType:function(t){var n=mn[t].value;return gn(t),n},toWireType:function(t,n){return Cn(n)},argPackAdvance:8,readValueFromPointer:Nt,destructorFunction:null})},j:function(t,n,r){var e=ct(r);$t(t,{name:n=ft(n),fromWireType:function(t){return t},toWireType:function(t,n){if("number"!=typeof n&&"boolean"!=typeof n)throw new TypeError('Cannot convert "'+Tn(n)+'" to '+this.name);return n},argPackAdvance:8,readValueFromPointer:$n(n,e),destructorFunction:null})},x:function(t,n,r,e,i,o){var a=pn(n,r);t=ft(t),i=sn(e,i),zt(t,(function(){fn("Cannot call "+t+" due to unbound types",a)}),n-1),Tt([],a,(function(r){var e=[r[0],null].concat(r.slice(1));return un(t,yn(t,e,null,i,o),n-1),[]}))},d:function(t,n,r,e,i){n=ft(n),-1===i&&(i=4294967295);var o=ct(r),a=function(t){return t};if(0===e){var u=32-8*r;a=function(t){return t<<u>>>u}}var s=-1!=n.indexOf("unsigned");$t(t,{name:n,fromWireType:a,toWireType:function(t,r){if("number"!=typeof r&&"boolean"!=typeof r)throw new TypeError('Cannot convert "'+Tn(r)+'" to '+this.name);if(r<e||r>i)throw new TypeError('Passing a number "'+Tn(r)+'" from JS side to C/C++ side to an argument of type "'+n+'", which is outside the valid range ['+e+", "+i+"]!");return s?r>>>0:0|r},argPackAdvance:8,readValueFromPointer:Pn(n,o,0!==e),destructorFunction:null})},b:function(t,n,r){var e=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][n];function i(t){var n=V,r=n[t>>=2],i=n[t+1];return new e(R,i,r)}$t(t,{name:r=ft(r),fromWireType:i,argPackAdvance:8,readValueFromPointer:i},{ignoreDuplicateRegistrations:!0})},k:function(t,n){var r="std::string"===(n=ft(n));$t(t,{name:n,fromWireType:function(t){var n,e=V[t>>2];if(r){var i=x[t+4+e],o=0;0!=i&&(o=i,x[t+4+e]=0);for(var a=t+4,u=0;u<=e;++u){var s=t+4+u;if(0==x[s]){var c=A(a);void 0===n?n=c:(n+=String.fromCharCode(0),n+=c),a=s+1}}0!=o&&(x[t+4+e]=o)}else{var l=new Array(e);for(u=0;u<e;++u)l[u]=String.fromCharCode(x[t+4+u]);n=l.join("")}return Vn(t),n},toWireType:function(t,n){n instanceof ArrayBuffer&&(n=new Uint8Array(n));var e="string"==typeof n;e||n instanceof Uint8Array||n instanceof Uint8ClampedArray||n instanceof Int8Array||wt("Cannot pass non-string to std::string");var i=(r&&e?function(){return function(t){for(var n=0,r=0;r<t.length;++r){var e=t.charCodeAt(r);e>=55296&&e<=57343&&(e=65536+((1023&e)<<10)|1023&t.charCodeAt(++r)),e<=127?++n:n+=e<=2047?2:e<=65535?3:4}return n}(n)}:function(){return n.length})(),o=Mn(4+i+1);if(V[o>>2]=i,r&&e)!function(t,n,r){(function(t,n,r,e){if(!(e>0))return 0;for(var i=r,o=r+e-1,a=0;a<t.length;++a){var u=t.charCodeAt(a);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&t.charCodeAt(++a)),u<=127){if(r>=o)break;n[r++]=u}else if(u<=2047){if(r+1>=o)break;n[r++]=192|u>>6,n[r++]=128|63&u}else if(u<=65535){if(r+2>=o)break;n[r++]=224|u>>12,n[r++]=128|u>>6&63,n[r++]=128|63&u}else{if(r+3>=o)break;n[r++]=240|u>>18,n[r++]=128|u>>12&63,n[r++]=128|u>>6&63,n[r++]=128|63&u}}n[r]=0})(t,x,n,r)}(n,o+4,i+1);else if(e)for(var a=0;a<i;++a){var u=n.charCodeAt(a);u>255&&(Vn(o),wt("String has UTF-16 code units that do not fit in 8 bits")),x[o+4+a]=u}else for(a=0;a<i;++a)x[o+4+a]=n[a];return null!==t&&t.push(Vn,o),o},argPackAdvance:8,readValueFromPointer:Nt,destructorFunction:function(t){Vn(t)}})},i:function(t,n,r){var e,i,o,a,u;r=ft(r),2===n?(e=W,i=S,a=F,o=function(){return U},u=1):4===n&&(e=O,i=k,a=j,o=function(){return V},u=2),$t(t,{name:r,fromWireType:function(t){var r,i=V[t>>2],a=o(),s=a[t+4+i*n>>u],c=0;0!=s&&(c=s,a[t+4+i*n>>u]=0);for(var l=t+4,f=0;f<=i;++f){var p=t+4+f*n;if(0==a[p>>u]){var d=e(l);void 0===r?r=d:(r+=String.fromCharCode(0),r+=d),l=p+n}}return 0!=c&&(a[t+4+i*n>>u]=c),Vn(t),r},toWireType:function(t,e){"string"!=typeof e&&wt("Cannot pass non-string to C++ string type "+r);var o=a(e),s=Mn(4+o+n);return V[s>>2]=o>>u,i(e,s+4,o+n),null!==t&&t.push(Vn,s),s},argPackAdvance:8,readValueFromPointer:Nt,destructorFunction:function(t){Vn(t)}})},B:function(t,n){$t(t,{isVoid:!0,name:n=ft(n),argPackAdvance:0,fromWireType:function(){},toWireType:function(t,n){}})},r:function(t,n,r){t=_n(t),n=An(n,"emval::as");var e=[],i=Cn(e);return M[r>>2]=i,n.toWireType(e,t)},m:function(t,n,r,e){(t=Sn[t])(n=_n(n),r=Wn(r),null,e)},a:gn,F:function(t){return 0===t?Cn(Fn()):(t=Wn(t),Cn(Fn()[t]))},n:function(t,n){for(var r=function(t,n){for(var r=new Array(t),e=0;e<t;++e)r[e]=An(M[(n>>2)+e],"parameter "+e);return r}(t,n),e=r[0],i=e.name+"_$"+r.slice(1).map((function(t){return t.name})).join("_")+"$",o=["retType"],a=[e],u="",s=0;s<t-1;++s)u+=(0!==s?", ":"")+"arg"+s,o.push("argType"+s),a.push(r[1+s]);var c="return function "+yt("methodCaller_"+i)+"(handle, name, destructors, args) {\n",l=0;for(s=0;s<t-1;++s)c+="    var arg"+s+" = argType"+s+".readValueFromPointer(args"+(l?"+"+l:"")+");\n",l+=r[s+1].argPackAdvance;for(c+="    var rv = handle[name]("+u+");\n",s=0;s<t-1;++s)r[s+1].deleteObject&&(c+="    argType"+s+".deleteObject(arg"+s+");\n");return e.isVoid||(c+="    return retType.toWireType(destructors, rv);\n"),c+="};\n",o.push(c),function(t){var n=Sn.length;return Sn.push(t),n}(hn(Function,o).apply(null,a))},p:function(t){return t=Wn(t),Cn(o[t])},f:function(t,n){return Cn((t=_n(t))[n=_n(n)])},h:function(t){t>4&&(mn[t].refcount+=1)},o:function(t,n,r,e){t=_n(t);var i=kn[n];return i||(i=On(n),kn[n]=i),i(t,r,e)},g:function(t){return Cn(Wn(t))},q:function(t){dn(mn[t].value),gn(t)},E:function(){et()},w:function(t,n,r){x.copyWithin(t,n,n+r)},y:function(t){var n=x.length,r=2147418112;if(t>r)return!1;for(var e=1;e<=4;e*=2){var i=n*(1+.2/e);if(i=Math.min(i,t+100663296),jn(Math.min(r,L(Math.max(16777216,t,i),65536))))return!0}return!1},C:function(t){return 0},u:function(t,n,r,e,i){},l:function(t,n,r,e){for(var i=0,o=0;o<r;o++){for(var a=M[n+8*o>>2],u=M[n+(8*o+4)>>2],s=0;s<u;s++)Rn.printChar(t,x[a+s]);i+=u}return M[e>>2]=i,0},memory:g,e:function(t){return(t=+t)>=0?+tt(t+.5):+Q(t-.5)},v:function(t){},table:C},xn=function(){var t={a:In};function n(t,n){var r=t.exports;o.asm=r,function(t){if(nt--,o.monitorRunDependencies&&o.monitorRunDependencies(nt),0==nt&&rt){var n=rt;rt=null,n()}}()}function r(t){n(t.instance)}function e(n){return st().then((function(n){return WebAssembly.instantiate(n,t)})).then(n,(function(t){b("failed to asynchronously prepare wasm: "+t),et(t)}))}if(nt++,o.monitorRunDependencies&&o.monitorRunDependencies(nt),o.instantiateWasm)try{return o.instantiateWasm(t,n)}catch(c){return b("Module.instantiateWasm callback failed with error: "+c),!1}return function(){if(m||"function"!=typeof WebAssembly.instantiateStreaming||ot(at)||"function"!=typeof fetch)return e(r);fetch(at,{credentials:"same-origin"}).then((function(n){return WebAssembly.instantiateStreaming(n,t).then(r,(function(t){b("wasm streaming compile failed: "+t),b("falling back to ArrayBuffer instantiation"),e(r)}))}))}(),{}}();o.asm=xn;var Dn,Un=o.___wasm_call_ctors=function(){return(Un=o.___wasm_call_ctors=o.asm.H).apply(null,arguments)},Mn=o._malloc=function(){return(Mn=o._malloc=o.asm.I).apply(null,arguments)},Vn=o._free=function(){return(Vn=o._free=o.asm.J).apply(null,arguments)},zn=o.___getTypeName=function(){return(zn=o.___getTypeName=o.asm.K).apply(null,arguments)};function Hn(t){this.name="ExitStatus",this.message="Program terminated with exit("+t+")",this.status=t}function Ln(t){function n(){Dn||(Dn=!0,o.calledRun=!0,T||(G(J),G(X),o.onRuntimeInitialized&&o.onRuntimeInitialized(),function(){if(o.postRun)for("function"==typeof o.postRun&&(o.postRun=[o.postRun]);o.postRun.length;)K(o.postRun.shift());G(Y)}()))}nt>0||(function(){if(o.preRun)for("function"==typeof o.preRun&&(o.preRun=[o.preRun]);o.preRun.length;)Z(o.preRun.shift());G(N)}(),nt>0||(o.setStatus?(o.setStatus("Running..."),setTimeout((function(){setTimeout((function(){o.setStatus("")}),1),n()}),1)):n()))}if(o.___embind_register_native_and_builtin_types=function(){return(o.___embind_register_native_and_builtin_types=o.asm.L).apply(null,arguments)},o.dynCall_viii=function(){return(o.dynCall_viii=o.asm.M).apply(null,arguments)},o.dynCall_ii=function(){return(o.dynCall_ii=o.asm.N).apply(null,arguments)},o.dynCall_vi=function(){return(o.dynCall_vi=o.asm.O).apply(null,arguments)},o.dynCall_v=function(){return(o.dynCall_v=o.asm.P).apply(null,arguments)},o.dynCall_iii=function(){return(o.dynCall_iii=o.asm.Q).apply(null,arguments)},o.dynCall_vii=function(){return(o.dynCall_vii=o.asm.R).apply(null,arguments)},o.dynCall_iiii=function(){return(o.dynCall_iiii=o.asm.S).apply(null,arguments)},o.dynCall_iiiii=function(){return(o.dynCall_iiiii=o.asm.T).apply(null,arguments)},o.dynCall_iiiiii=function(){return(o.dynCall_iiiiii=o.asm.U).apply(null,arguments)},o.dynCall_iiiiiiii=function(){return(o.dynCall_iiiiiiii=o.asm.V).apply(null,arguments)},o.dynCall_iiiiiiiii=function(){return(o.dynCall_iiiiiiiii=o.asm.W).apply(null,arguments)},o.dynCall_iidiiii=function(){return(o.dynCall_iidiiii=o.asm.X).apply(null,arguments)},o.dynCall_jiji=function(){return(o.dynCall_jiji=o.asm.Y).apply(null,arguments)},o.dynCall_viiiiii=function(){return(o.dynCall_viiiiii=o.asm.Z).apply(null,arguments)},o.dynCall_viiiii=function(){return(o.dynCall_viiiii=o.asm._).apply(null,arguments)},o.dynCall_viiii=function(){return(o.dynCall_viiii=o.asm.$).apply(null,arguments)},o.asm=xn,o.then=function(t){if(Dn)t(o);else{var n=o.onRuntimeInitialized;o.onRuntimeInitialized=function(){n&&n(),t(o)}}return o},rt=function t(){Dn||Ln(),Dn||(rt=t)},o.run=Ln,o.preInit)for("function"==typeof o.preInit&&(o.preInit=[o.preInit]);o.preInit.length>0;)o.preInit.pop()();return Ln(),t});n.exports=u})),u=Object.freeze(Object.assign(Object.create(null),a,{default:a}))}.call(this,"/index.js",r(958),"/")},958:function(t,n){var r,e,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(t){if(r===setTimeout)return setTimeout(t,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(n){try{return r.call(null,t,0)}catch(n){return r.call(this,t,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:o}catch(t){r=o}try{e="function"===typeof clearTimeout?clearTimeout:a}catch(t){e=a}}();var s,c=[],l=!1,f=-1;function p(){l&&s&&(l=!1,s.length?c=s.concat(c):f=-1,c.length&&d())}function d(){if(!l){var t=u(p);l=!0;for(var n=c.length;n;){for(s=c,c=[];++f<n;)s&&s[f].run();f=-1,n=c.length}s=null,l=!1,function(t){if(e===clearTimeout)return clearTimeout(t);if((e===a||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{e(t)}catch(n){try{return e.call(null,t)}catch(n){return e.call(this,t)}}}(t)}}function h(t,n){this.fun=t,this.array=n}function y(){}i.nextTick=function(t){var n=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)n[r-1]=arguments[r];c.push(new h(t,n)),1!==c.length||l||u(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=y,i.addListener=y,i.once=y,i.off=y,i.removeListener=y,i.removeAllListeners=y,i.emit=y,i.prependListener=y,i.prependOnceListener=y,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}}}]);
//# sourceMappingURL=120.108de2e4.chunk.js.map