!function(n){var e={};function t(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:r})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="./",t(t.s=0)}([function(n,e,t){"use strict";var r=t(1),i=t(2);r({locateFile:function(n){switch(n.substr(n.lastIndexOf(".")+1)){case"wasm":return i;default:return n}}})},function(n,e){var t,r=(t="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,function(n){var e;n=n||{},e||(e=void 0!==n?n:{});var r={b:0,f:1,c:2};function i(n,e,t){n({error:{code:e,message:t}})}e.g=function(n,e,t){if(n instanceof ArrayBuffer)e(n);else{var r=new XMLHttpRequest;r.open("GET",n,!0),r.responseType="arraybuffer",r.onload=function(){200<=this.status&&300>this.status?e(this.response):i(t,1,this.statusText)},r.onerror=function(){i(t,1,this.statusText)},r.send()}},e.decode=function(n,t,a){switch(Q(r.b,new Uint8Array(n)),n=e._nativeDecode(r.b,n.byteLength,r.f,r.c)){case 0:(a=K[r.c])&&(TextDecoder?(a=new TextDecoder("utf-8").decode(a.buffer),console.log(a)):console.error("TextDecoder unsupported. Cannot log debug message from decoder.")),t(K[r.f]);break;default:i(a,2,"Decoding image data failed with interal error: "+n)}Object.keys(r).forEach(function(n){K[r[n]]=null})};var a=[];"undefined"!=typeof self&&(e.onRuntimeInitialized=function(){a.forEach(function(n){n()}),a=null},self.onmessage=function(n){!function(n){a?a.push(n):n()}(function(){e.h(n.data)})}),e.h=function(n){function t(n){n.url=i;var e=n.transferables;delete n.transferables,self.postMessage(n,e)}function r(n){n.url=i,self.postMessage(n)}var i=n instanceof ArrayBuffer?"<ArrayBuffer>":n;e.g(n,function(n){e.decode(n,t,r)},r)};var o,u={};for(o in e)e.hasOwnProperty(o)&&(u[o]=e[o]);var l,c,s=!1,f=!1;s="object"==typeof window,f="function"==typeof importScripts,l="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node&&!s&&!f,c=!s&&!l&&!f;var p,d,m,y,_="";l?(_=__dirname+"/",p=function(n,e){return m||(m=require("fs")),y||(y=require("path")),n=y.normalize(n),n=m.readFileSync(n),e?n:n.toString()},d=function(n){return(n=p(n,!0)).buffer||(n=new Uint8Array(n)),n.buffer||q("Assertion failed: undefined"),n},1<process.argv.length&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(n){throw n}),process.on("unhandledRejection",q),e.inspect=function(){return"[Emscripten Module object]"}):c?("undefined"!=typeof read&&(p=function(n){return read(n)}),d=function(n){return"function"==typeof readbuffer?new Uint8Array(readbuffer(n)):("object"==typeof(n=read(n,"binary"))||q("Assertion failed: undefined"),n)},"undefined"!=typeof print&&("undefined"==typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!=typeof printErr?printErr:print)):(s||f)&&(f?_=self.location.href:document.currentScript&&(_=document.currentScript.src),t&&(_=t),_=0!==_.indexOf("blob:")?_.substr(0,_.lastIndexOf("/")+1):"",p=function(n){var e=new XMLHttpRequest;return e.open("GET",n,!1),e.send(null),e.responseText},f&&(d=function(n){var e=new XMLHttpRequest;return e.open("GET",n,!1),e.responseType="arraybuffer",e.send(null),new Uint8Array(e.response)}));var b=e.print||console.log.bind(console),h=e.printErr||console.warn.bind(console);for(o in u)u.hasOwnProperty(o)&&(e[o]=u[o]);u=null;var v,g={"f64-rem":function(n,e){return n%e},debugger:function(){}},w=0;e.wasmBinary&&(v=e.wasmBinary),"object"!=typeof WebAssembly&&h("no native wasm support detected");var A,S,C,x,R,k=new WebAssembly.Table({initial:213,maximum:213,element:"anyfunc"}),T=!1,E="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function I(n){if(n){for(var e=x,t=n+void 0,r=n;e[r]&&!(r>=t);)++r;if(16<r-n&&e.subarray&&E)n=E.decode(e.subarray(n,r));else{for(t="";n<r;){var i=e[n++];if(128&i){var a=63&e[n++];if(192==(224&i))t+=String.fromCharCode((31&i)<<6|a);else{var o=63&e[n++];65536>(i=224==(240&i)?(15&i)<<12|a<<6|o:(7&i)<<18|a<<12|o<<6|63&e[n++])?t+=String.fromCharCode(i):(i-=65536,t+=String.fromCharCode(55296|i>>10,56320|1023&i))}}else t+=String.fromCharCode(i)}n=t}}else n="";return n}function D(n){return 0<n%65536&&(n+=65536-n%65536),n}function M(n){S=n,e.HEAP8=C=new Int8Array(n),e.HEAP16=new Int16Array(n),e.HEAP32=R=new Int32Array(n),e.HEAPU8=x=new Uint8Array(n),e.HEAPU16=new Uint16Array(n),e.HEAPU32=new Uint32Array(n),e.HEAPF32=new Float32Array(n),e.HEAPF64=new Float64Array(n)}"undefined"!=typeof TextDecoder&&new TextDecoder("utf-16le");var P=e.TOTAL_MEMORY||16777216;function j(n){for(;0<n.length;){var t=n.shift();if("function"==typeof t)t();else{var r=t.i;"number"==typeof r?void 0===t.a?e.dynCall_v(r):e.dynCall_vi(r,t.a):r(void 0===t.a?null:t.a)}}}(A=e.wasmMemory?e.wasmMemory:new WebAssembly.Memory({initial:P/65536}))&&(S=A.buffer),P=S.byteLength,M(S),R[4244]=5260064;var O=[],W=[],U=[],H=[];function B(){var n=e.preRun.shift();O.unshift(n)}var F=0,z=null,L=null;function q(n){throw e.onAbort&&e.onAbort(n),b(n),h(n),T=!0,"abort("+n+"). Build with -s ASSERTIONS=1 for more info."}function J(){var n=N;return String.prototype.startsWith?n.startsWith("data:application/octet-stream;base64,"):0===n.indexOf("data:application/octet-stream;base64,")}e.preloadedImages={},e.preloadedAudios={};var N="SparklerWeb-WebPDecoder.wasm";if(!J()){var G=N;N=e.locateFile?e.locateFile(G,_):_+G}function X(){try{if(v)return new Uint8Array(v);if(d)return d(N);throw"both async and sync fetching of the wasm failed"}catch(n){q(n)}}function Z(n){return n.replace(/\b__Z[\w\d_]+/g,function(n){return n==n?n:n+" ["+n+"]"})}function Y(){var n=Error();if(!n.stack){try{throw Error(0)}catch(e){n=e}if(!n.stack)return"(no stack trace available)"}return n.stack.toString()}e.asm=function(){function n(n){e.asm=n.exports,F--,e.monitorRunDependencies&&e.monitorRunDependencies(F),0==F&&(null!==z&&(clearInterval(z),z=null),L&&(n=L,L=null,n()))}function t(e){n(e.instance)}function r(n){return(v||!s&&!f||"function"!=typeof fetch?new Promise(function(n){n(X())}):fetch(N,{credentials:"same-origin"}).then(function(n){if(!n.ok)throw"failed to load wasm binary file at '"+N+"'";return n.arrayBuffer()}).catch(function(){return X()})).then(function(n){return WebAssembly.instantiate(n,i)}).then(n,function(n){h("failed to asynchronously prepare wasm: "+n),q(n)})}var i={env:en,wasi_unstable:en,global:{NaN:NaN,Infinity:1/0},"global.Math":Math,asm2wasm:g};if(F++,e.monitorRunDependencies&&e.monitorRunDependencies(F),e.instantiateWasm)try{return e.instantiateWasm(i,n)}catch(n){return h("Module.instantiateWasm callback failed with error: "+n),!1}return function(){if(v||"function"!=typeof WebAssembly.instantiateStreaming||J()||"function"!=typeof fetch)return r(t);fetch(N,{credentials:"same-origin"}).then(function(n){return WebAssembly.instantiateStreaming(n,i).then(t,function(n){h("wasm streaming compile failed: "+n),h("falling back to ArrayBuffer instantiation"),r(t)})})}(),{}};var K={};function Q(n,e){K[n]=e}function V(){return C.length}function $(n){try{return A.grow(n-S.byteLength+65535>>16),M(A.buffer),1}catch(n){}}var nn,en={___assert_fail:function(n,e,t,r){q("Assertion failed: "+I(n)+", at: "+[e?I(e):"unknown filename",t,r?I(r):"unknown function"])},___gxx_personality_v0:function(){},__memory_base:1024,__table_base:0,_abort:function(){q()},_createJSDecodedImageData:function(n,e,t,r){K[n]={format:e,width:t,height:r,planes:[],transferables:[]}},_emscripten_get_heap_size:V,_emscripten_memcpy_big:function(n,e,t){x.set(x.subarray(e,e+t),n)},_emscripten_resize_heap:function(n){if(2147418112<n)return!1;for(var e=Math.max(V(),16777216);e<n;)e=536870912>=e?D(2*e):Math.min(D((3*e+2147483648)/4),2147418112);return!!$(e)},_pushJSImagePlane:function(n,t,r,i,a,o){n=K[n];var u=new Uint8Array(r);i={data:u,width:i,height:a,rowBytes:o},u.set(e.HEAPU8.subarray(t,t+r)),n.planes.push(i),n.transferables.push(u.buffer)},_readFromJSBuffer:function(n,t){e.HEAPU8.set(K[n],t)},abort:q,abortOnCannotGrowMemory:function(){q("OOM")},demangle:function(n){return n},demangleAll:Z,emscripten_realloc_buffer:$,getJSRef:function(n){return K[n]},getTempRet0:function(){return w},jsStackTrace:Y,memory:A,setJSRef:Q,setTempRet0:function(n){w=n},stackTrace:function(){var n=Y();return e.extraStackTrace&&(n+="\n"+e.extraStackTrace()),Z(n)},table:k,tempDoublePtr:17168},tn=e.asm({},en,S);function rn(){function n(){if(!nn&&(nn=!0,!T)){if(j(W),j(U),e.onRuntimeInitialized&&e.onRuntimeInitialized(),e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var n=e.postRun.shift();H.unshift(n)}j(H)}}if(!(0<F)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)B();j(O),0<F||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1),n()},1)):n())}}if(e.asm=tn,e.__ZSt18uncaught_exceptionv=function(){return e.asm.__ZSt18uncaught_exceptionv.apply(null,arguments)},e.___cxa_can_catch=function(){return e.asm.___cxa_can_catch.apply(null,arguments)},e.___cxa_is_pointer_type=function(){return e.asm.___cxa_is_pointer_type.apply(null,arguments)},e._emscripten_get_sbrk_ptr=function(){return e.asm._emscripten_get_sbrk_ptr.apply(null,arguments)},e._emscripten_replace_memory=function(){return e.asm._emscripten_replace_memory.apply(null,arguments)},e._free=function(){return e.asm._free.apply(null,arguments)},e._llvm_bswap_i32=function(){return e.asm._llvm_bswap_i32.apply(null,arguments)},e._malloc=function(){return e.asm._malloc.apply(null,arguments)},e._memcpy=function(){return e.asm._memcpy.apply(null,arguments)},e._memmove=function(){return e.asm._memmove.apply(null,arguments)},e._memset=function(){return e.asm._memset.apply(null,arguments)},e._nativeDecode=function(){return e.asm._nativeDecode.apply(null,arguments)},e.establishStackSpace=function(){return e.asm.establishStackSpace.apply(null,arguments)},e.stackAlloc=function(){return e.asm.stackAlloc.apply(null,arguments)},e.stackRestore=function(){return e.asm.stackRestore.apply(null,arguments)},e.stackSave=function(){return e.asm.stackSave.apply(null,arguments)},e.dynCall_ii=function(){return e.asm.dynCall_ii.apply(null,arguments)},e.dynCall_iii=function(){return e.asm.dynCall_iii.apply(null,arguments)},e.dynCall_iiii=function(){return e.asm.dynCall_iiii.apply(null,arguments)},e.dynCall_iiiiiii=function(){return e.asm.dynCall_iiiiiii.apply(null,arguments)},e.dynCall_jiiii=function(){return e.asm.dynCall_jiiii.apply(null,arguments)},e.dynCall_v=function(){return e.asm.dynCall_v.apply(null,arguments)},e.dynCall_vi=function(){return e.asm.dynCall_vi.apply(null,arguments)},e.dynCall_vii=function(){return e.asm.dynCall_vii.apply(null,arguments)},e.dynCall_viii=function(){return e.asm.dynCall_viii.apply(null,arguments)},e.dynCall_viiii=function(){return e.asm.dynCall_viiii.apply(null,arguments)},e.dynCall_viiiii=function(){return e.asm.dynCall_viiiii.apply(null,arguments)},e.dynCall_viiiiii=function(){return e.asm.dynCall_viiiiii.apply(null,arguments)},e.dynCall_viiiiiiiii=function(){return e.asm.dynCall_viiiiiiiii.apply(null,arguments)},e.asm=tn,e.then=function(n){if(nn)n(e);else{var t=e.onRuntimeInitialized;e.onRuntimeInitialized=function(){t&&t(),n(e)}}return e},L=function n(){nn||rn(),nn||(L=n)},e.run=rn,e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();return rn(),n});"object"==typeof e&&"object"==typeof n?n.exports=r:"function"==typeof define&&define.amd?define([],function(){return r}):"object"==typeof e&&(e.Module=r)},function(n,e,t){n.exports=t.p+"SparklerWeb-WebPDecoder.wasm"}]);