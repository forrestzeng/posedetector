module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1649470129306, function(require, module, exports) {
(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var D;function ba(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var ca="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var G=da(this);function J(a,b){if(b)a:{var c=G;a=a.split(".");for(var d=0;d<a.length-1;d++){var f=a[d];if(!(f in c))break a;c=c[f]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ca(c,a,{configurable:!0,writable:!0,value:b})}}
J("Symbol",function(a){function b(g){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(g||"")+"_"+f++,g)}function c(g,e){this.g=g;ca(this,"description",{configurable:!0,writable:!0,value:e})}if(a)return a;c.prototype.toString=function(){return this.g};var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",f=0;return b});
J("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=G[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ca(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(ba(this))}})}return a});function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
function M(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ba(a)}}function fa(a){if(!(a instanceof Array)){a=M(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}var ha="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},ia;
if("function"==typeof Object.setPrototypeOf)ia=Object.setPrototypeOf;else{var ja;a:{var ka={a:!0},la={};try{la.__proto__=ka;ja=la.a;break a}catch(a){}ja=!1}ia=ja?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ma=ia;
function na(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(ma)ma(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ea=b.prototype}function oa(){this.l=!1;this.i=null;this.h=void 0;this.g=1;this.s=this.m=0;this.j=null}function pa(a){if(a.l)throw new TypeError("Generator is already running");a.l=!0}oa.prototype.o=function(a){this.h=a};
function qa(a,b){a.j={U:b,V:!0};a.g=a.m||a.s}oa.prototype.return=function(a){this.j={return:a};this.g=this.s};function N(a,b,c){a.g=c;return{value:b}}function ra(a){this.g=new oa;this.h=a}function sa(a,b){pa(a.g);var c=a.g.i;if(c)return ta(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);a.g.return(b);return ua(a)}
function ta(a,b,c,d){try{var f=b.call(a.g.i,c);if(!(f instanceof Object))throw new TypeError("Iterator result "+f+" is not an object");if(!f.done)return a.g.l=!1,f;var g=f.value}catch(e){return a.g.i=null,qa(a.g,e),ua(a)}a.g.i=null;d.call(a.g,g);return ua(a)}function ua(a){for(;a.g.g;)try{var b=a.h(a.g);if(b)return a.g.l=!1,{value:b.value,done:!1}}catch(c){a.g.h=void 0,qa(a.g,c)}a.g.l=!1;if(a.g.j){b=a.g.j;a.g.j=null;if(b.V)throw b.U;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function va(a){this.next=function(b){pa(a.g);a.g.i?b=ta(a,a.g.i.next,b,a.g.o):(a.g.o(b),b=ua(a));return b};this.throw=function(b){pa(a.g);a.g.i?b=ta(a,a.g.i["throw"],b,a.g.o):(qa(a.g,b),b=ua(a));return b};this.return=function(b){return sa(a,b)};this[Symbol.iterator]=function(){return this}}function O(a,b){b=new va(new ra(b));ma&&a.prototype&&ma(b,a.prototype);return b}
function wa(a,b){a instanceof String&&(a+="");var c=0,d=!1,f={next:function(){if(!d&&c<a.length){var g=c++;return{value:b(g,a[g]),done:!1}}d=!0;return{done:!0,value:void 0}}};f[Symbol.iterator]=function(){return f};return f}var xa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var f in d)Object.prototype.hasOwnProperty.call(d,f)&&(a[f]=d[f])}return a};J("Object.assign",function(a){return a||xa});
J("Promise",function(a){function b(e){this.h=0;this.i=void 0;this.g=[];this.o=!1;var h=this.j();try{e(h.resolve,h.reject)}catch(k){h.reject(k)}}function c(){this.g=null}function d(e){return e instanceof b?e:new b(function(h){h(e)})}if(a)return a;c.prototype.h=function(e){if(null==this.g){this.g=[];var h=this;this.i(function(){h.l()})}this.g.push(e)};var f=G.setTimeout;c.prototype.i=function(e){f(e,0)};c.prototype.l=function(){for(;this.g&&this.g.length;){var e=this.g;this.g=[];for(var h=0;h<e.length;++h){var k=
e[h];e[h]=null;try{k()}catch(l){this.j(l)}}}this.g=null};c.prototype.j=function(e){this.i(function(){throw e;})};b.prototype.j=function(){function e(l){return function(n){k||(k=!0,l.call(h,n))}}var h=this,k=!1;return{resolve:e(this.C),reject:e(this.l)}};b.prototype.C=function(e){if(e===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(e instanceof b)this.F(e);else{a:switch(typeof e){case "object":var h=null!=e;break a;case "function":h=!0;break a;default:h=!1}h?this.u(e):this.m(e)}};
b.prototype.u=function(e){var h=void 0;try{h=e.then}catch(k){this.l(k);return}"function"==typeof h?this.G(h,e):this.m(e)};b.prototype.l=function(e){this.s(2,e)};b.prototype.m=function(e){this.s(1,e)};b.prototype.s=function(e,h){if(0!=this.h)throw Error("Cannot settle("+e+", "+h+"): Promise already settled in state"+this.h);this.h=e;this.i=h;2===this.h&&this.D();this.A()};b.prototype.D=function(){var e=this;f(function(){if(e.B()){var h=G.console;"undefined"!==typeof h&&h.error(e.i)}},1)};b.prototype.B=
function(){if(this.o)return!1;var e=G.CustomEvent,h=G.Event,k=G.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof e?e=new e("unhandledrejection",{cancelable:!0}):"function"===typeof h?e=new h("unhandledrejection",{cancelable:!0}):(e=G.document.createEvent("CustomEvent"),e.initCustomEvent("unhandledrejection",!1,!0,e));e.promise=this;e.reason=this.i;return k(e)};b.prototype.A=function(){if(null!=this.g){for(var e=0;e<this.g.length;++e)g.h(this.g[e]);this.g=null}};var g=new c;b.prototype.F=
function(e){var h=this.j();e.J(h.resolve,h.reject)};b.prototype.G=function(e,h){var k=this.j();try{e.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};b.prototype.then=function(e,h){function k(w,t){return"function"==typeof w?function(y){try{l(w(y))}catch(m){n(m)}}:t}var l,n,v=new b(function(w,t){l=w;n=t});this.J(k(e,l),k(h,n));return v};b.prototype.catch=function(e){return this.then(void 0,e)};b.prototype.J=function(e,h){function k(){switch(l.h){case 1:e(l.i);break;case 2:h(l.i);break;default:throw Error("Unexpected state: "+
l.h);}}var l=this;null==this.g?g.h(k):this.g.push(k);this.o=!0};b.resolve=d;b.reject=function(e){return new b(function(h,k){k(e)})};b.race=function(e){return new b(function(h,k){for(var l=M(e),n=l.next();!n.done;n=l.next())d(n.value).J(h,k)})};b.all=function(e){var h=M(e),k=h.next();return k.done?d([]):new b(function(l,n){function v(y){return function(m){w[y]=m;t--;0==t&&l(w)}}var w=[],t=0;do w.push(void 0),t++,d(k.value).J(v(w.length-1),n),k=h.next();while(!k.done)})};return b});
J("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});J("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var f=d.length;c=c||0;for(0>c&&(c=Math.max(c+f,0));c<f;c++){var g=d[c];if(g===b||Object.is(g,b))return!0}return!1}});
J("String.prototype.includes",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==this.indexOf(b,c||0)}});J("Array.prototype.keys",function(a){return a?a:function(){return wa(this,function(b){return b})}});var ya=this||self;
function P(a,b){a=a.split(".");var c=ya;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b};function za(a,b){b=String.fromCharCode.apply(null,b);return null==a?b:a+b}var Aa,Ba="undefined"!==typeof TextDecoder,Ca,Da="undefined"!==typeof TextEncoder;
function Ea(a){if(Da)a=(Ca||(Ca=new TextEncoder)).encode(a);else{var b=void 0;b=void 0===b?!1:b;for(var c=0,d=new Uint8Array(3*a.length),f=0;f<a.length;f++){var g=a.charCodeAt(f);if(128>g)d[c++]=g;else{if(2048>g)d[c++]=g>>6|192;else{if(55296<=g&&57343>=g){if(56319>=g&&f<a.length){var e=a.charCodeAt(++f);if(56320<=e&&57343>=e){g=1024*(g-55296)+e-56320+65536;d[c++]=g>>18|240;d[c++]=g>>12&63|128;d[c++]=g>>6&63|128;d[c++]=g&63|128;continue}else f--}if(b)throw Error("Found an unpaired surrogate");g=65533}d[c++]=
g>>12|224;d[c++]=g>>6&63|128}d[c++]=g&63|128}}a=d.subarray(0,c)}return a};var Fa={},Ga=null;function Ha(a,b){void 0===b&&(b=0);Ia();b=Fa[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",f=0,g=0;f<a.length-2;f+=3){var e=a[f],h=a[f+1],k=a[f+2],l=b[e>>2];e=b[(e&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[g++]=l+e+h+k}l=0;k=d;switch(a.length-f){case 2:l=a[f+1],k=b[(l&15)<<2]||d;case 1:a=a[f],c[g]=b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Ka(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),f=0;La(a,function(g){d[f++]=g});return d.subarray(0,f)}
function La(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),n=Ga[l];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}Ia();for(var d=0;;){var f=c(-1),g=c(0),e=c(64),h=c(64);if(64===h&&-1===f)break;b(f<<2|g>>4);64!=e&&(b(g<<4&240|e>>2),64!=h&&b(e<<6&192|h))}}
function Ia(){if(!Ga){Ga={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Fa[c]=d;for(var f=0;f<d.length;f++){var g=d[f];void 0===Ga[g]&&(Ga[g]=f)}}}};var Ma="function"===typeof Uint8Array.prototype.slice,Na;function Oa(a,b,c){return b===c?Na||(Na=new Uint8Array(0)):Ma?a.slice(b,c):new Uint8Array(a.subarray(b,c))}var Q=0,R=0;function Pa(a,b){b=void 0===b?{}:b;b=void 0===b.v?!1:b.v;this.h=null;this.g=this.i=this.j=0;this.l=!1;this.v=b;a&&Qa(this,a)}function Qa(a,b){b=b.constructor===Uint8Array?b:b.constructor===ArrayBuffer?new Uint8Array(b):b.constructor===Array?new Uint8Array(b):b.constructor===String?Ka(b):b instanceof Uint8Array?new Uint8Array(b.buffer,b.byteOffset,b.byteLength):new Uint8Array(0);a.h=b;a.j=0;a.i=a.h.length;a.g=a.j}Pa.prototype.reset=function(){this.g=this.j};
function Ra(a){var b=a.h,c=b[a.g],d=c&127;if(128>c)return a.g+=1,d;c=b[a.g+1];d|=(c&127)<<7;if(128>c)return a.g+=2,d;c=b[a.g+2];d|=(c&127)<<14;if(128>c)return a.g+=3,d;c=b[a.g+3];d|=(c&127)<<21;if(128>c)return a.g+=4,d;c=b[a.g+4];d|=(c&15)<<28;if(128>c)return a.g+=5,d>>>0;a.g+=5;128<=b[a.g++]&&128<=b[a.g++]&&128<=b[a.g++]&&128<=b[a.g++]&&a.g++;return d}
function S(a){var b=a.h[a.g];var c=a.h[a.g+1];var d=a.h[a.g+2],f=a.h[a.g+3];a.g+=4;c=(b<<0|c<<8|d<<16|f<<24)>>>0;a=2*(c>>31)+1;b=c>>>23&255;c&=8388607;return 255==b?c?NaN:Infinity*a:0==b?a*Math.pow(2,-149)*c:a*Math.pow(2,b-150)*(c+Math.pow(2,23))}var Sa=[];function Ta(){this.g=new Uint8Array(64);this.h=0}Ta.prototype.push=function(a){if(!(this.h+1<this.g.length)){var b=this.g;this.g=new Uint8Array(Math.ceil(1+2*this.g.length));this.g.set(b)}this.g[this.h++]=a};Ta.prototype.length=function(){return this.h};Ta.prototype.end=function(){var a=this.g,b=this.h;this.h=0;return Oa(a,0,b)};function T(a,b){for(;127<b;)a.push(b&127|128),b>>>=7;a.push(b)};function Ua(a){var b={},c=void 0===b.N?!1:b.N;this.o={v:void 0===b.v?!1:b.v};this.N=c;b=this.o;Sa.length?(c=Sa.pop(),b&&(c.v=b.v),a&&Qa(c,a),a=c):a=new Pa(a,b);this.g=a;this.m=this.g.g;this.h=this.i=this.l=-1;this.j=!1}Ua.prototype.reset=function(){this.g.reset();this.h=this.l=-1};function Va(a){var b=a.g;(b=b.g==b.i)||(b=a.j)||(b=a.g,b=b.l||0>b.g||b.g>b.i);if(b)return!1;a.m=a.g.g;b=Ra(a.g);var c=b&7;if(0!=c&&5!=c&&1!=c&&2!=c&&3!=c&&4!=c)return a.j=!0,!1;a.i=b;a.l=b>>>3;a.h=c;return!0}
function Wa(a){switch(a.h){case 0:if(0!=a.h)Wa(a);else{for(a=a.g;a.h[a.g]&128;)a.g++;a.g++}break;case 1:1!=a.h?Wa(a):(a=a.g,a.g+=8);break;case 2:if(2!=a.h)Wa(a);else{var b=Ra(a.g);a=a.g;a.g+=b}break;case 5:5!=a.h?Wa(a):(a=a.g,a.g+=4);break;case 3:b=a.l;do{if(!Va(a)){a.j=!0;break}if(4==a.h){a.l!=b&&(a.j=!0);break}Wa(a)}while(1);break;default:a.j=!0}}
function Xa(a,b,c){var d=a.g.i,f=Ra(a.g),g=a.g.g+f;a.g.i=g;c(b,a);c=g-a.g.g;if(0!==c)throw Error("Message parsing ended unexpectedly. Expected to read "+f+" bytes, instead read "+(f-c)+" bytes, either the data ended unexpectedly or the message misreported its own length");a.g.g=g;a.g.i=d;return b}
function Ya(a){var b=Ra(a.g);a=a.g;var c=a.g;a.g+=b;a=a.h;var d;if(Ba)(d=Aa)||(d=Aa=new TextDecoder("utf-8",{fatal:!1})),d=d.decode(a.subarray(c,c+b));else{b=c+b;for(var f=[],g=null,e,h,k;c<b;)e=a[c++],128>e?f.push(e):224>e?c>=b?f.push(65533):(h=a[c++],194>e||128!==(h&192)?(c--,f.push(65533)):f.push((e&31)<<6|h&63)):240>e?c>=b-1?f.push(65533):(h=a[c++],128!==(h&192)||224===e&&160>h||237===e&&160<=h||128!==((d=a[c++])&192)?(c--,f.push(65533)):f.push((e&15)<<12|(h&63)<<6|d&63)):244>=e?c>=b-2?f.push(65533):
(h=a[c++],128!==(h&192)||0!==(e<<28)+(h-144)>>30||128!==((d=a[c++])&192)||128!==((k=a[c++])&192)?(c--,f.push(65533)):(e=(e&7)<<18|(h&63)<<12|(d&63)<<6|k&63,e-=65536,f.push((e>>10&1023)+55296,(e&1023)+56320))):f.push(65533),8192<=f.length&&(g=za(g,f),f.length=0);d=za(g,f)}return d};function Za(){this.h=[];this.i=0;this.g=new Ta}function $a(a,b){0!==b.length&&(a.h.push(b),a.i+=b.length)}function ab(a){var b=a.i+a.g.length();if(0===b)return new Uint8Array(0);b=new Uint8Array(b);for(var c=a.h,d=c.length,f=0,g=0;g<d;g++){var e=c[g];0!==e.length&&(b.set(e,f),f+=e.length)}c=a.g;d=c.h;0!==d&&(b.set(c.g.subarray(0,d),f),c.h=0);a.h=[b];return b}
function U(a,b,c){if(null!=c){T(a.g,8*b+5);a=a.g;var d=c;d=(c=0>d?1:0)?-d:d;0===d?0<1/d?Q=R=0:(R=0,Q=2147483648):isNaN(d)?(R=0,Q=2147483647):3.4028234663852886E38<d?(R=0,Q=(c<<31|2139095040)>>>0):1.1754943508222875E-38>d?(d=Math.round(d/Math.pow(2,-149)),R=0,Q=(c<<31|d)>>>0):(b=Math.floor(Math.log(d)/Math.LN2),d*=Math.pow(2,-b),d=Math.round(8388608*d),16777216<=d&&++b,R=0,Q=(c<<31|b+127<<23|d&8388607)>>>0);c=Q;a.push(c>>>0&255);a.push(c>>>8&255);a.push(c>>>16&255);a.push(c>>>24&255)}};var bb="function"===typeof Uint8Array;function cb(a,b,c){if(null!=a)return"object"===typeof a?bb&&a instanceof Uint8Array?c(a):db(a,b,c):b(a)}function db(a,b,c){if(Array.isArray(a)){for(var d=Array(a.length),f=0;f<a.length;f++)d[f]=cb(a[f],b,c);Array.isArray(a)&&a.W&&eb(d);return d}d={};for(f in a)d[f]=cb(a[f],b,c);return d}function fb(a){return"number"===typeof a?isFinite(a)?a:String(a):a}var gb={W:{value:!0,configurable:!0}};
function eb(a){Array.isArray(a)&&!Object.isFrozen(a)&&Object.defineProperties(a,gb);return a};var hb;function V(a,b,c){var d=hb;hb=null;a||(a=d);d=this.constructor.ca;a||(a=d?[d]:[]);this.j=d?0:-1;this.i=null;this.g=a;a:{d=this.g.length;a=d-1;if(d&&(d=this.g[a],!(null===d||"object"!=typeof d||Array.isArray(d)||bb&&d instanceof Uint8Array))){this.l=a-this.j;this.h=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.j),this.h=null):this.l=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)a=c[b],a<this.l?(a+=this.j,(d=this.g[a])?eb(d):this.g[a]=ib):(jb(this),(d=this.h[a])?eb(d):this.h[a]=ib)}var ib=Object.freeze(eb([]));
function jb(a){var b=a.l+a.j;a.g[b]||(a.h=a.g[b]={})}function W(a,b,c){return-1===b?null:(void 0===c?0:c)||b>=a.l?a.h?a.h[b]:void 0:a.g[b+a.j]}function kb(a){var b=void 0===b?!1:b;var c=W(a,1,b);null==c&&(c=ib);c===ib&&(c=eb([]),X(a,1,c,b));return c}function Y(a,b,c){a=W(a,b);a=null==a?a:+a;return null==a?void 0===c?0:c:a}function X(a,b,c,d){(void 0===d?0:d)||b>=a.l?(jb(a),a.h[b]=c):a.g[b+a.j]=c}
function lb(a,b){a.i||(a.i={});var c=a.i[1];if(!c){var d=kb(a);c=[];for(var f=0;f<d.length;f++)c[f]=new b(d[f]);a.i[1]=c}return c}function mb(a,b,c,d){var f=lb(a,c);b=b?b:new c;a=kb(a);void 0!=d?(f.splice(d,0,b),a.splice(d,0,nb(b,!1))):(f.push(b),a.push(nb(b,!1)))}V.prototype.toJSON=function(){var a=nb(this,!1);return db(a,fb,Ha)};function nb(a,b){if(a.i)for(var c in a.i){var d=a.i[c];if(Array.isArray(d))for(var f=0;f<d.length;f++)d[f]&&nb(d[f],b);else d&&nb(d,b)}return a.g}
V.prototype.toString=function(){return nb(this,!1).toString()};function ob(a,b){a=W(a,b);return null==a?0:a}function pb(a,b){a=W(a,b);return null==a?"":a};function qb(a,b){if(a=a.m){$a(b,b.g.end());for(var c=0;c<a.length;c++)$a(b,a[c])}}function rb(a,b){if(4==b.h)return!1;var c=b.m;Wa(b);b.N||(b=Oa(b.g.h,c,b.g.g),(c=a.m)?c.push(b):a.m=[b]);return!0};function Z(a,b){var c=void 0;return new (c||(c=Promise))(function(d,f){function g(k){try{h(b.next(k))}catch(l){f(l)}}function e(k){try{h(b["throw"](k))}catch(l){f(l)}}function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(g,e)}h((b=b.apply(a,void 0)).next())})};function sb(a){V.call(this,a)}na(sb,V);function tb(a,b){for(;Va(b);)switch(b.i){case 8:var c=Ra(b.g);X(a,1,c);break;case 21:c=S(b.g);X(a,2,c);break;case 26:c=Ya(b);X(a,3,c);break;case 34:c=Ya(b);X(a,4,c);break;default:if(!rb(a,b))return a}return a};function ub(a){V.call(this,a,-1,vb)}na(ub,V);ub.prototype.addClassification=function(a,b){mb(this,a,sb,b);return this};var vb=[1];function wb(a){V.call(this,a)}na(wb,V);function xb(a,b){for(;Va(b);)switch(b.i){case 13:var c=S(b.g);X(a,1,c);break;case 21:c=S(b.g);X(a,2,c);break;case 29:c=S(b.g);X(a,3,c);break;case 37:c=S(b.g);X(a,4,c);break;case 45:c=S(b.g);X(a,5,c);break;default:if(!rb(a,b))return a}return a};function yb(a){V.call(this,a,-1,zb)}na(yb,V);var zb=[1];function Ab(a){V.call(this,a)}na(Ab,V);function Bb(a,b,c){c=a.createShader(0===c?a.VERTEX_SHADER:a.FRAGMENT_SHADER);a.shaderSource(c,b);a.compileShader(c);if(!a.getShaderParameter(c,a.COMPILE_STATUS))throw Error("Could not compile WebGL shader.\n\n"+a.getShaderInfoLog(c));return c};function Cb(a){return lb(a,sb).map(function(b){return{index:ob(b,1),Y:Y(b,2),label:null!=W(b,3)?pb(b,3):void 0,displayName:null!=W(b,4)?pb(b,4):void 0}})};function Db(a){return{x:Y(a,1),y:Y(a,2),z:Y(a,3),visibility:null!=W(a,4)?Y(a,4):void 0}}function Eb(a){a:{var b=new yb;for(a=new Ua(a);Va(a);)switch(a.i){case 10:var c=Xa(a,new wb,xb);mb(b,c,wb,void 0);break;default:if(!rb(b,a))break a}}return lb(b,wb).map(Db)};function Fb(a,b){this.h=a;this.g=b;this.l=0}
function Gb(a,b,c){Hb(a,b);if("function"===typeof a.g.canvas.transferToImageBitmap)return Promise.resolve(a.g.canvas.transferToImageBitmap());if(c)return Promise.resolve(a.g.canvas);if("function"===typeof createImageBitmap)return createImageBitmap(a.g.canvas);void 0===a.i&&(a.i=document.createElement("canvas"));return new Promise(function(d){a.i.height=a.g.canvas.height;a.i.width=a.g.canvas.width;a.i.getContext("2d",{}).drawImage(a.g.canvas,0,0,a.g.canvas.width,a.g.canvas.height);d(a.i)})}
function Hb(a,b){var c=a.g;if(void 0===a.m){var d=Bb(c,"\n  attribute vec2 aVertex;\n  attribute vec2 aTex;\n  varying vec2 vTex;\n  void main(void) {\n    gl_Position = vec4(aVertex, 0.0, 1.0);\n    vTex = aTex;\n  }",0),f=Bb(c,"\n  precision mediump float;\n  varying vec2 vTex;\n  uniform sampler2D sampler0;\n  void main(){\n    gl_FragColor = texture2D(sampler0, vTex);\n  }",1),g=c.createProgram();c.attachShader(g,d);c.attachShader(g,f);c.linkProgram(g);if(!c.getProgramParameter(g,c.LINK_STATUS))throw Error("Could not compile WebGL program.\n\n"+
c.getProgramInfoLog(g));d=a.m=g;c.useProgram(d);f=c.getUniformLocation(d,"sampler0");a.j={I:c.getAttribLocation(d,"aVertex"),H:c.getAttribLocation(d,"aTex"),da:f};a.s=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,a.s);c.enableVertexAttribArray(a.j.I);c.vertexAttribPointer(a.j.I,2,c.FLOAT,!1,0,0);c.bufferData(c.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),c.STATIC_DRAW);c.bindBuffer(c.ARRAY_BUFFER,null);a.o=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,a.o);c.enableVertexAttribArray(a.j.H);c.vertexAttribPointer(a.j.H,
2,c.FLOAT,!1,0,0);c.bufferData(c.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),c.STATIC_DRAW);c.bindBuffer(c.ARRAY_BUFFER,null);c.uniform1i(f,0)}d=a.j;c.useProgram(a.m);c.canvas.width=b.width;c.canvas.height=b.height;c.viewport(0,0,b.width,b.height);c.activeTexture(c.TEXTURE0);a.h.bindTexture2d(b.glName);c.enableVertexAttribArray(d.I);c.bindBuffer(c.ARRAY_BUFFER,a.s);c.vertexAttribPointer(d.I,2,c.FLOAT,!1,0,0);c.enableVertexAttribArray(d.H);c.bindBuffer(c.ARRAY_BUFFER,a.o);c.vertexAttribPointer(d.H,
2,c.FLOAT,!1,0,0);c.bindFramebuffer(c.DRAW_FRAMEBUFFER?c.DRAW_FRAMEBUFFER:c.FRAMEBUFFER,null);c.clearColor(0,0,0,0);c.clear(c.COLOR_BUFFER_BIT);c.colorMask(!0,!0,!0,!0);c.drawArrays(c.TRIANGLE_FAN,0,4);c.disableVertexAttribArray(d.I);c.disableVertexAttribArray(d.H);c.bindBuffer(c.ARRAY_BUFFER,null);a.h.bindTexture2d(0)}function Ib(a){this.g=a};var Jb=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function Kb(a,b){return b+a}function Lb(a,b){window[a]=b}function Mb(a){var b=document.createElement("script");b.setAttribute("src",a);b.setAttribute("crossorigin","anonymous");return new Promise(function(c){b.addEventListener("load",function(){c()},!1);b.addEventListener("error",function(){c()},!1);document.body.appendChild(b)})}
function Nb(){return Z(this,function b(){return O(b,function(c){switch(c.g){case 1:return c.m=2,N(c,WebAssembly.instantiate(Jb),4);case 4:c.g=3;c.m=0;break;case 2:return c.m=0,c.j=null,c.return(!1);case 3:return c.return(!0)}})})}
function Ob(a){this.g=a;this.listeners={};this.j={};this.F={};this.m={};this.s={};this.G=this.o=this.R=!0;this.C=Promise.resolve();this.P="";this.B={};this.locateFile=a&&a.locateFile||Kb;if("object"===typeof window)var b=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if("undefined"!==typeof location)b=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");
this.S=b;if(a.options){b=M(Object.keys(a.options));for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=a.options[c].default;void 0!==d&&(this.j[c]="function"===typeof d?d():d)}}}D=Ob.prototype;D.close=function(){this.i&&this.i.delete();return Promise.resolve()};function Pb(a,b){return void 0===a.g.files?[]:"function"===typeof a.g.files?a.g.files(b):a.g.files}
function Qb(a){return Z(a,function c(){var d=this,f,g,e,h,k,l,n,v,w,t,y;return O(c,function(m){switch(m.g){case 1:f=d;if(!d.R)return m.return();g=Pb(d,d.j);return N(m,Nb(),2);case 2:e=m.h;if("object"===typeof window)return Lb("createMediapipeSolutionsWasm",{locateFile:d.locateFile}),Lb("createMediapipeSolutionsPackedAssets",{locateFile:d.locateFile}),l=g.filter(function(u){return void 0!==u.data}),n=g.filter(function(u){return void 0===u.data}),v=Promise.all(l.map(function(u){var x=Rb(f,u.url);if(void 0!==
u.path){var z=u.path;x=x.then(function(E){f.overrideFile(z,E);return Promise.resolve(E)})}return x})),w=Promise.all(n.map(function(u){return void 0===u.simd||u.simd&&e||!u.simd&&!e?Mb(f.locateFile(u.url,f.S)):Promise.resolve()})).then(function(){return Z(f,function x(){var z,E,F=this;return O(x,function(K){if(1==K.g)return z=window.createMediapipeSolutionsWasm,E=window.createMediapipeSolutionsPackedAssets,N(K,z(E),2);F.h=K.h;K.g=0})})}),t=function(){return Z(f,function x(){var z=this;return O(x,function(E){z.g.graph&&
z.g.graph.url?E=N(E,Rb(z,z.g.graph.url),0):(E.g=0,E=void 0);return E})})}(),N(m,Promise.all([w,v,t]),7);if("function"!==typeof importScripts)throw Error("solutions can only be loaded on a web page or in a web worker");h=g.filter(function(u){return void 0===u.simd||u.simd&&e||!u.simd&&!e}).map(function(u){return f.locateFile(u.url,f.S)});importScripts.apply(null,fa(h));return N(m,createMediapipeSolutionsWasm(Module),6);case 6:d.h=m.h;d.l=new OffscreenCanvas(1,1);d.h.canvas=d.l;k=d.h.GL.createContext(d.l,
{antialias:!1,alpha:!1,ba:"undefined"!==typeof WebGL2RenderingContext?2:1});d.h.GL.makeContextCurrent(k);m.g=4;break;case 7:d.l=document.createElement("canvas");y=d.l.getContext("webgl2",{});if(!y&&(y=d.l.getContext("webgl",{}),!y))return alert("Failed to create WebGL canvas context when passing video frame."),m.return();d.D=y;d.h.canvas=d.l;d.h.createContext(d.l,!0,!0,{});case 4:d.i=new d.h.SolutionWasm,d.R=!1,m.g=0}})})}
function Sb(a){return Z(a,function c(){var d=this,f,g,e,h,k,l,n,v;return O(c,function(w){if(1==w.g){if(d.g.graph&&d.g.graph.url&&d.P===d.g.graph.url)return w.return();d.o=!0;if(!d.g.graph||!d.g.graph.url){w.g=2;return}d.P=d.g.graph.url;return N(w,Rb(d,d.g.graph.url),3)}2!=w.g&&(f=w.h,d.i.loadGraph(f));g=M(Object.keys(d.B));for(e=g.next();!e.done;e=g.next())h=e.value,d.i.overrideFile(h,d.B[h]);d.B={};if(d.g.listeners)for(k=M(d.g.listeners),l=k.next();!l.done;l=k.next())n=l.value,Tb(d,n);v=d.j;d.j=
{};d.setOptions(v);w.g=0})})}D.reset=function(){return Z(this,function b(){var c=this;return O(b,function(d){c.i&&(c.i.reset(),c.m={},c.s={});d.g=0})})};
D.setOptions=function(a,b){var c=this;if(b=b||this.g.options){for(var d=[],f=[],g={},e=M(Object.keys(a)),h=e.next();!h.done;g={K:g.K,L:g.L},h=e.next()){var k=h.value;k in this.j&&this.j[k]===a[k]||(this.j[k]=a[k],h=b[k],void 0!==h&&(h.onChange&&(g.K=h.onChange,g.L=a[k],d.push(function(l){return function(){return Z(c,function v(){var w,t=this;return O(v,function(y){if(1==y.g)return N(y,l.K(l.L),2);w=y.h;!0===w&&(t.o=!0);y.g=0})})}}(g))),h.graphOptionXref&&(k={valueNumber:1===h.type?a[k]:0,valueBoolean:0===
h.type?a[k]:!1,valueString:2===h.type?a[k]:""},h=Object.assign(Object.assign(Object.assign({},{calculatorName:"",calculatorIndex:0}),h.graphOptionXref),k),f.push(h))))}if(0!==d.length||0!==f.length)this.o=!0,this.A=(void 0===this.A?[]:this.A).concat(f),this.u=(void 0===this.u?[]:this.u).concat(d)}};
function Ub(a){return Z(a,function c(){var d=this,f,g,e,h,k,l,n;return O(c,function(v){switch(v.g){case 1:if(!d.o)return v.return();if(!d.u){v.g=2;break}f=M(d.u);g=f.next();case 3:if(g.done){v.g=5;break}e=g.value;return N(v,e(),4);case 4:g=f.next();v.g=3;break;case 5:d.u=void 0;case 2:if(d.A){h=new d.h.GraphOptionChangeRequestList;k=M(d.A);for(l=k.next();!l.done;l=k.next())n=l.value,h.push_back(n);d.i.changeOptions(h);h.delete();d.A=void 0}d.o=!1;v.g=0}})})}
D.initialize=function(){return Z(this,function b(){var c=this;return O(b,function(d){return 1==d.g?N(d,Qb(c),2):3!=d.g?N(d,Sb(c),3):N(d,Ub(c),0)})})};function Rb(a,b){return Z(a,function d(){var f=this,g,e;return O(d,function(h){if(b in f.F)return h.return(f.F[b]);g=f.locateFile(b,"");e=fetch(g).then(function(k){return k.arrayBuffer()});f.F[b]=e;return h.return(e)})})}D.overrideFile=function(a,b){this.i?this.i.overrideFile(a,b):this.B[a]=b};D.clearOverriddenFiles=function(){this.B={};this.i&&this.i.clearOverriddenFiles()};
D.send=function(a,b){return Z(this,function d(){var f=this,g,e,h,k,l,n,v,w,t;return O(d,function(y){switch(y.g){case 1:if(!f.g.inputs)return y.return();g=1E3*(void 0===b||null===b?performance.now():b);return N(y,f.C,2);case 2:return N(y,f.initialize(),3);case 3:e=new f.h.PacketDataList;h=M(Object.keys(a));for(k=h.next();!k.done;k=h.next())if(l=k.value,n=f.g.inputs[l]){a:{var m=f;var u=a[l];switch(n.type){case "video":var x=m.m[n.stream];x||(x=new Fb(m.h,m.D),m.m[n.stream]=x);m=x;0===m.l&&(m.l=m.h.createTexture());
if("undefined"!==typeof HTMLVideoElement&&u instanceof HTMLVideoElement){var z=u.videoWidth;x=u.videoHeight}else"undefined"!==typeof HTMLImageElement&&u instanceof HTMLImageElement?(z=u.naturalWidth,x=u.naturalHeight):(z=u.width,x=u.height);x={glName:m.l,width:z,height:x};z=m.g;z.canvas.width=x.width;z.canvas.height=x.height;z.activeTexture(z.TEXTURE0);m.h.bindTexture2d(m.l);z.texImage2D(z.TEXTURE_2D,0,z.RGBA,z.RGBA,z.UNSIGNED_BYTE,u);m.h.bindTexture2d(0);m=x;break a;case "detections":x=m.m[n.stream];
x||(x=new Ib(m.h),m.m[n.stream]=x);m=x;m.data||(m.data=new m.g.DetectionListData);m.data.reset(u.length);for(x=0;x<u.length;++x){z=u[x];var E=m.data,F=E.setBoundingBox,K=x;var I=z.T;var p=new Ab;X(p,1,I.Z);X(p,2,I.$);X(p,3,I.height);X(p,4,I.width);X(p,5,I.rotation);X(p,6,I.X);var A=I=new Za;U(A,1,W(p,1));U(A,2,W(p,2));U(A,3,W(p,3));U(A,4,W(p,4));U(A,5,W(p,5));var C=W(p,6);if(null!=C&&null!=C){T(A.g,48);var r=A.g,B=C;C=0>B;B=Math.abs(B);var q=B>>>0;B=Math.floor((B-q)/4294967296);B>>>=0;C&&(B=~B>>>
0,q=(~q>>>0)+1,4294967295<q&&(q=0,B++,4294967295<B&&(B=0)));Q=q;R=B;C=Q;for(q=R;0<q||127<C;)r.push(C&127|128),C=(C>>>7|q<<25)>>>0,q>>>=7;r.push(C)}qb(p,A);I=ab(I);F.call(E,K,I);if(z.O)for(E=0;E<z.O.length;++E)p=z.O[E],A=p.visibility?!0:!1,F=m.data,K=F.addNormalizedLandmark,I=x,p=Object.assign(Object.assign({},p),{visibility:A?p.visibility:0}),A=new wb,X(A,1,p.x),X(A,2,p.y),X(A,3,p.z),p.visibility&&X(A,4,p.visibility),r=p=new Za,U(r,1,W(A,1)),U(r,2,W(A,2)),U(r,3,W(A,3)),U(r,4,W(A,4)),U(r,5,W(A,5)),
qb(A,r),p=ab(p),K.call(F,I,p);if(z.M)for(E=0;E<z.M.length;++E){F=m.data;K=F.addClassification;I=x;p=z.M[E];A=new sb;X(A,2,p.Y);p.index&&X(A,1,p.index);p.label&&X(A,3,p.label);p.displayName&&X(A,4,p.displayName);r=p=new Za;q=W(A,1);if(null!=q&&null!=q)if(T(r.g,8),C=r.g,0<=q)T(C,q);else{for(B=0;9>B;B++)C.push(q&127|128),q>>=7;C.push(1)}U(r,2,W(A,2));C=W(A,3);null!=C&&(C=Ea(C),T(r.g,26),T(r.g,C.length),$a(r,r.g.end()),$a(r,C));C=W(A,4);null!=C&&(C=Ea(C),T(r.g,34),T(r.g,C.length),$a(r,r.g.end()),$a(r,
C));qb(A,r);p=ab(p);K.call(F,I,p)}}m=m.data;break a;default:m={}}}v=m;w=n.stream;switch(n.type){case "video":e.pushTexture2d(Object.assign(Object.assign({},v),{stream:w,timestamp:g}));break;case "detections":t=v;t.stream=w;t.timestamp=g;e.pushDetectionList(t);break;default:throw Error("Unknown input config type: '"+n.type+"'");}}f.i.send(e);return N(y,f.C,4);case 4:e.delete(),y.g=0}})})};
function Vb(a,b,c){return Z(a,function f(){var g,e,h,k,l,n,v=this,w,t,y,m,u,x,z,E;return O(f,function(F){switch(F.g){case 1:if(!c)return F.return(b);g={};e=0;h=M(Object.keys(c));for(k=h.next();!k.done;k=h.next())l=k.value,n=c[l],"string"!==typeof n&&"texture"===n.type&&void 0!==b[n.stream]&&++e;1<e&&(v.G=!1);w=M(Object.keys(c));k=w.next();case 2:if(k.done){F.g=4;break}t=k.value;y=c[t];if("string"===typeof y)return z=g,E=t,N(F,Wb(v,t,b[y]),14);m=b[y.stream];if("detection_list"===y.type){if(m){var K=
m.getRectList();for(var I=m.getLandmarksList(),p=m.getClassificationsList(),A=[],C=0;C<K.size();++C){var r=K.get(C);a:{var B=new Ab;for(r=new Ua(r);Va(r);)switch(r.i){case 13:var q=S(r.g);X(B,1,q);break;case 21:q=S(r.g);X(B,2,q);break;case 29:q=S(r.g);X(B,3,q);break;case 37:q=S(r.g);X(B,4,q);break;case 45:q=S(r.g);X(B,5,q);break;case 48:for(var H=r.g,L=128,Ja=0,aa=q=0;4>aa&&128<=L;aa++)L=H.h[H.g++],Ja|=(L&127)<<7*aa;128<=L&&(L=H.h[H.g++],Ja|=(L&127)<<28,q|=(L&127)>>4);if(128<=L)for(aa=0;5>aa&&128<=
L;aa++)L=H.h[H.g++],q|=(L&127)<<7*aa+3;if(128>L){H=Ja>>>0;L=q>>>0;if(q=L&2147483648)H=~H+1>>>0,L=~L>>>0,0==H&&(L=L+1>>>0);H=4294967296*L+(H>>>0);q=q?-H:H}else H.l=!0,q=void 0;X(B,6,q);break;default:if(!rb(B,r))break a}}B={Z:Y(B,1),$:Y(B,2),height:Y(B,3),width:Y(B,4),rotation:Y(B,5,0),X:ob(B,6)};r=Eb(I.get(C));H=p.get(C);a:for(q=new ub,H=new Ua(H);Va(H);)switch(H.i){case 10:q.addClassification(Xa(H,new sb,tb));break;default:if(!rb(q,H))break a}B={T:B,O:r,M:Cb(q)};A.push(B)}K=A}else K=[];g[t]=K;F.g=
7;break}if("proto_list"===y.type){if(m){K=Array(m.size());for(I=0;I<m.size();I++)K[I]=m.get(I);m.delete()}else K=[];g[t]=K;F.g=7;break}if(void 0===m){F.g=3;break}if("float_list"===y.type){g[t]=m;F.g=7;break}if("proto"===y.type){g[t]=m;F.g=7;break}if("texture"!==y.type)throw Error("Unknown output config type: '"+y.type+"'");u=v.s[t];u||(u=new Fb(v.h,v.D),v.s[t]=u);return N(F,Gb(u,m,v.G),13);case 13:x=F.h,g[t]=x;case 7:y.transform&&g[t]&&(g[t]=y.transform(g[t]));F.g=3;break;case 14:z[E]=F.h;case 3:k=
w.next();F.g=2;break;case 4:return F.return(g)}})})}function Wb(a,b,c){return Z(a,function f(){var g=this,e;return O(f,function(h){return"number"===typeof c||c instanceof Uint8Array||c instanceof g.h.Uint8BlobList?h.return(c):c instanceof g.h.Texture2dDataOut?(e=g.s[b],e||(e=new Fb(g.h,g.D),g.s[b]=e),h.return(Gb(e,c,g.G))):h.return(void 0)})})}
function Tb(a,b){for(var c=b.name||"$",d=[].concat(fa(b.wants)),f=new a.h.StringList,g=M(b.wants),e=g.next();!e.done;e=g.next())f.push_back(e.value);g=a.h.PacketListener.implement({onResults:function(h){for(var k={},l=0;l<b.wants.length;++l)k[d[l]]=h.get(l);var n=a.listeners[c];n&&(a.C=Vb(a,k,b.outs).then(function(v){v=n(v);for(var w=0;w<b.wants.length;++w){var t=k[d[w]];"object"===typeof t&&t.hasOwnProperty&&t.hasOwnProperty("delete")&&t.delete()}v&&(a.C=v)}))}});a.i.attachMultiListener(f,g);f.delete()}
D.onResults=function(a,b){this.listeners[b||"$"]=a};P("Solution",Ob);P("OptionType",{BOOL:0,NUMBER:1,aa:2,0:"BOOL",1:"NUMBER",2:"STRING"});function Xb(a){void 0===a&&(a=0);switch(a){case 1:return"pose_landmark_full.tflite";case 2:return"pose_landmark_heavy.tflite";default:return"pose_landmark_lite.tflite"}}
function Yb(a){var b=this;a=a||{};this.g=new Ob({locateFile:a.locateFile,files:function(c){return[{url:"pose_solution_packed_assets_loader.js"},{simd:!1,url:"pose_solution_wasm_bin.js"},{simd:!0,url:"pose_solution_simd_wasm_bin.js"},{data:!0,url:Xb(c.modelComplexity)}]},graph:{url:"pose_web.binarypb"},listeners:[{wants:["pose_landmarks","world_landmarks","segmentation_mask","image_transformed"],outs:{image:{type:"texture",stream:"image_transformed"},poseLandmarks:{type:"proto",stream:"pose_landmarks",
transform:Eb},poseWorldLandmarks:{type:"proto",stream:"world_landmarks",transform:Eb},segmentationMask:{type:"texture",stream:"segmentation_mask"}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},
selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},modelComplexity:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelComplexity",fieldName:"int_value"},onChange:function(c){return Z(b,function f(){var g,e,h=this,k;return O(f,function(l){if(1==l.g)return g=Xb(c),e="third_party/mediapipe/modules/pose_landmark/"+g,N(l,Rb(h.g,g),2);k=l.h;h.g.overrideFile(e,k);return l.return(!0)})})}},
smoothLandmarks:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorSmoothLandmarks",fieldName:"bool_value"}},enableSegmentation:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorEnableSegmentation",fieldName:"bool_value"}},smoothSegmentation:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorSmoothSegmentation",
fieldName:"bool_value"}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"poselandmarkgpu__posedetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"poselandmarkgpu__poselandmarkbyroigpu__tensorstoposelandmarksandsegmentation__ThresholdingCalculator",fieldName:"threshold"}}}})}D=Yb.prototype;D.reset=function(){this.g.reset()};
D.close=function(){this.g.close();return Promise.resolve()};D.onResults=function(a){this.g.onResults(a)};D.initialize=function(){return Z(this,function b(){var c=this;return O(b,function(d){return N(d,c.g.initialize(),0)})})};D.send=function(a,b){return Z(this,function d(){var f=this;return O(d,function(g){return N(g,f.g.send(a,b),0)})})};D.setOptions=function(a){this.g.setOptions(a)};P("Pose",Yb);
P("POSE_CONNECTIONS",[[0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]]);
P("POSE_LANDMARKS",{NOSE:0,LEFT_EYE_INNER:1,LEFT_EYE:2,LEFT_EYE_OUTER:3,RIGHT_EYE_INNER:4,RIGHT_EYE:5,RIGHT_EYE_OUTER:6,LEFT_EAR:7,RIGHT_EAR:8,LEFT_RIGHT:9,RIGHT_LEFT:10,LEFT_SHOULDER:11,RIGHT_SHOULDER:12,LEFT_ELBOW:13,RIGHT_ELBOW:14,LEFT_WRIST:15,RIGHT_WRIST:16,LEFT_PINKY:17,RIGHT_PINKY:18,LEFT_INDEX:19,RIGHT_INDEX:20,LEFT_THUMB:21,RIGHT_THUMB:22,LEFT_HIP:23,RIGHT_HIP:24,LEFT_KNEE:25,RIGHT_KNEE:26,LEFT_ANKLE:27,RIGHT_ANKLE:28,LEFT_HEEL:29,RIGHT_HEEL:30,LEFT_FOOT_INDEX:31,RIGHT_FOOT_INDEX:32});
P("POSE_LANDMARKS_LEFT",{LEFT_EYE_INNER:1,LEFT_EYE:2,LEFT_EYE_OUTER:3,LEFT_EAR:7,LEFT_RIGHT:9,LEFT_SHOULDER:11,LEFT_ELBOW:13,LEFT_WRIST:15,LEFT_PINKY:17,LEFT_INDEX:19,LEFT_THUMB:21,LEFT_HIP:23,LEFT_KNEE:25,LEFT_ANKLE:27,LEFT_HEEL:29,LEFT_FOOT_INDEX:31});
P("POSE_LANDMARKS_RIGHT",{RIGHT_EYE_INNER:4,RIGHT_EYE:5,RIGHT_EYE_OUTER:6,RIGHT_EAR:8,RIGHT_LEFT:10,RIGHT_SHOULDER:12,RIGHT_ELBOW:14,RIGHT_WRIST:16,RIGHT_PINKY:18,RIGHT_INDEX:20,RIGHT_THUMB:22,RIGHT_HIP:24,RIGHT_KNEE:26,RIGHT_ANKLE:28,RIGHT_HEEL:30,RIGHT_FOOT_INDEX:32});P("POSE_LANDMARKS_NEUTRAL",{NOSE:0});P("VERSION","0.4.1633558788");}).call(this);

}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1649470129306);
})()
//miniprogram-npm-outsideDeps=[]
//# sourceMappingURL=index.js.map