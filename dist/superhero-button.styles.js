!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.superheroButton=e():t.superheroButton=e()}(window,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=18)}([function(t,e,r){t.exports=r(6)},function(t,e){function r(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function u(t){r(a,o,i,u,c,"next",t)}function c(t){r(a,o,i,u,c,"throw",t)}u(void 0)}))}}},function(t,e,r){var n=r(7),o=r(8),i=r(9),a=r(11);t.exports=function(t,e){return n(t)||o(t,e)||i(t,e)||a()}},function(t,e,r){var n=r(12);t.exports=function(t,e){if(null==t)return{};var r,o,i=n(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}},function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return p}));var n=function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),o=0;for(e=0;e<r;e++)for(var i=arguments[e],a=0,u=i.length;a<u;a++,o++)n[o]=i[a];return n},o=function(t,e,r){this.name=t,this.version=e,this.os=r,this.type="browser"},i=function(e){this.version=e,this.type="node",this.name="node",this.os=t.platform},a=function(t,e,r,n){this.name=t,this.version=e,this.os=r,this.bot=n,this.type="bot-device"},u=function(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null},c=function(){this.type="react-native",this.name="react-native",this.version=null,this.os=null},s=/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,l=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/Edg\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FBAV\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],f=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function p(e){return e?h(e):"undefined"==typeof document&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product?new c:"undefined"!=typeof navigator?h(navigator.userAgent):void 0!==t&&t.version?new i(t.version.slice(1)):null}function d(t){return""!==t&&l.reduce((function(e,r){var n=r[0],o=r[1];if(e)return e;var i=o.exec(t);return!!i&&[n,i]}),!1)}function h(t){var e=d(t);if(!e)return null;var r=e[0],i=e[1];if("searchbot"===r)return new u;var c=i[1]&&i[1].split(/[._]/).slice(0,3);c?c.length<3&&(c=n(c,function(t){for(var e=[],r=0;r<t;r++)e.push("0");return e}(3-c.length))):c=[];var l=c.join("."),p=function(t){for(var e=0,r=f.length;e<r;e++){var n=f[e],o=n[0];if(n[1].exec(t))return o}return null}(t),h=s.exec(t);return h&&h[1]?new a(r,l,p,h[1]):new o(r,l,p)}}).call(this,r(17))},function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),a=new S(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return E()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=w(a,r);if(u){if(u===l)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var l={};function f(){}function p(){}function d(){}var h={};h[o]=function(){return this};var v=Object.getPrototypeOf,m=v&&v(v(A([])));m&&m!==e&&r.call(m,o)&&(h=m);var g=d.prototype=f.prototype=Object.create(h);function y(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,u){var c=s(t[o],t,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,u)}))}u(c.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function A(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:E}}function E(){return{value:void 0,done:!0}}return p.prototype=g.constructor=d,d.constructor=p,p.displayName=u(d,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,a,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},y(b.prototype),b.prototype[i]=function(){return this},t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new b(c(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},y(g),u(g,a,"Generator"),g[o]=function(){return this},g.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=A,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:A(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}}},function(t,e,r){var n=r(10);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e){t.exports=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}},function(t,e,r){var n=r(14),o=r(15);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1};n(o,i);t.exports=o.locals||{}},function(t,e,r){"use strict";var n,o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},i=function(){var t={};return function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}t[e]=r}return t[e]}}(),a=[];function u(t){for(var e=-1,r=0;r<a.length;r++)if(a[r].identifier===t){e=r;break}return e}function c(t,e){for(var r={},n=[],o=0;o<t.length;o++){var i=t[o],c=e.base?i[0]+e.base:i[0],s=r[c]||0,l="".concat(c," ").concat(s);r[c]=s+1;var f=u(l),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(p)):a.push({identifier:l,updater:m(p,e),references:1}),n.push(l)}return n}function s(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var o=r.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,f=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function p(t,e,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=f(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function d(t,e,r){var n=r.css,o=r.media,i=r.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var h=null,v=0;function m(t,e){var r,n,o;if(e.singleton){var i=v++;r=h||(h=s(e)),n=p.bind(null,r,i,!1),o=p.bind(null,r,i,!0)}else r=s(e),n=d.bind(null,r,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(r)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var r=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<r.length;n++){var o=u(r[n]);a[o].references--}for(var i=c(t,e),s=0;s<r.length;s++){var l=u(r[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}r=i}}}},function(t,e,r){(e=r(16)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap);"]),e.push([t.i,'div.superhero-button{padding:0;border:none;background:transparent;display:inline-block;font-family:"Roboto",sans-serif}div.superhero-button .tips-amount{font-size:32px;font-weight:400;line-height:22px;position:relative;text-align:center;padding:19px 0;border:1px solid #babac0;border-radius:5px;margin-bottom:14px;background-color:#fff;color:#000}div.superhero-button .tips-amount .ae{color:#2a9cff}div.superhero-button .tips-amount:after{content:"";width:12px;height:12px;position:absolute;bottom:-7.2px;left:50%;background:#fff;border-left:1px solid #babac0;border-bottom:1px solid #babac0;transform:translateX(-50%) rotate(-45deg);-webkit-transform:translateX(-50%) rotate(-45deg);-ms-transform:translateX(-50%) rotate(-45deg)}div.superhero-button a{background:#1c1c24;color:#fff;border:none;outline:none;padding:10px 16px 10px 13px;border-radius:5px;font-size:15px;font-weight:900;line-height:20px;display:flex;align-items:center;cursor:pointer;text-decoration:none}div.superhero-button a span{margin-left:7px}div.superhero-button.medium,div.superhero-button.small{display:inline-flex;align-items:stretch}div.superhero-button.medium .tips-amount:after,div.superhero-button.small .tips-amount:after{transform:translateY(-50%) rotate(-45deg);-webkit-transform:translateY(-50%) rotate(-45deg);-ms-transform:translateY(-50%) rotate(-45deg);border:none;border-left:1px solid #babac0;border-top:1px solid #babac0;bottom:auto}div.superhero-button.medium .tips-amount{display:inline-block;font-size:15px;padding:11px 10px;margin-bottom:0;margin-left:15px;line-height:17px}div.superhero-button.medium .tips-amount:after{width:9px;height:9px;left:-6px;top:50%}div.superhero-button.small .tips-amount{display:inline-block;font-size:13px;line-height:13px;padding:8px 5px;margin-bottom:0;margin-left:15px}div.superhero-button.small .tips-amount:after{width:9px;height:9px;left:-6px;top:50%}div.superhero-button.small a{font-size:13px;padding:7px 13px 7px 8px}div.superhero-button.small a img{width:18px;height:14px}div.superhero-button.icon{width:40px;height:40px}div.superhero-button.icon a{padding:9px 7px}',""]),t.exports=e},function(t,e,r){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=function(t,e){var r=t[1]||"",n=t[3];if(!n)return r;if(e&&"function"==typeof btoa){var o=(a=n,u=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(c," */")),i=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(t," */")}));return[r].concat(i).concat([o]).join("\n")}var a,u,c;return[r].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(t,r,n){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(n)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var u=0;u<t.length;u++){var c=[].concat(t[u]);n&&o[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),e.push(c))}},e}},function(t,e){var r,n,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(t){if(r===setTimeout)return setTimeout(t,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(t){r=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(t){n=a}}();var c,s=[],l=!1,f=-1;function p(){l&&c&&(l=!1,c.length?s=c.concat(s):f=-1,s.length&&d())}function d(){if(!l){var t=u(p);l=!0;for(var e=s.length;e;){for(c=s,s=[];++f<e;)c&&c[f].run();f=-1,e=s.length}c=null,l=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function v(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];s.push(new h(t,e)),1!==s.length||l||u(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e,r){"use strict";r.r(e);var n=r(4),o=r.n(n),i=r(0),a=r.n(i),u=r(1),c=r.n(u),s=r(2),l=r.n(s),f=r(3),p=r.n(f),d=r(5),h=(r(13),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAVCAYAAAC33pUlAAAABHNCSVQICAgIfAhkiAAAAdlJREFUSEudlT9SwkAUxr+X0GgjNzB0JI1wAuEGeAJhTKz1BMIJHFvBAW+AJxBPoDaEEm6ADTSQ5+wOySRh2Q1slWTf21++928JqeW9cg0WPgGU099PeY4IndkdjdK+lH5x+zwhwvUphyt8lisblXmHlvFeAqv2uWGRVGVczPgikuqvtMaM3jSg7h7MHfCcgEsTiRl/XELN2mJshAHLyEZ91qG5OFcqq75x22IMTSCxz8BN6NPYGzAXtH8PfWonsKKqwPiYBtTaFdJ3EZiwiWxUhDpy+/xAhGeTIwOLtY2aSPgx+d1FQ6oTsCURLkywiNGcBTQRdl6fuyA8mXwy+xHq5A54RMCtzpGBl9Cnh9imOmQHGzi5Hupq2uZ3ZaMhC8QAlIbpfsn/mCGsiX/SZweBEerTe/rRKfcGLPZVPZf50ewEUYSUAZmn9Ap9asbvmvztRSQDKxBS0WeL0CeZL00LKEO/BzMBxagKA2pImDp8B3OshGmBcWOry19bTAdhB4GMXlTCyNpCTJD0VWSsWi1MFSpmPAJo5XrKCEpmo66snSGXz7eyIuPSFvfTUYri843KhKECGPsXUnQUTAUU99q6BEc3WfIRK6QsdhIKzzYYg+BQhJZpsuRh/+Yf6NdXKezDAAAAAElFTkSuQmCC");function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var g,y=!navigator.userAgent.includes("Mobi")&&{firefox:"https://addons.mozilla.org/en-US/firefox/addon/superhero-wallet/",chrome:"https://chrome.google.com/webstore/detail/superhero/mnhmmkepfddpifjkamaligfeemcbhdne"}[Object(d.a)().name],b=function(t){var e=t.url,r=p()(t,["url"]),n=new URL("https://wallet.superhero.com/tip");return n.searchParams.set("url",e),n.searchParams.set("x-success",e),n.searchParams.set("x-cancel",e),Object.entries(r).filter((function(t){var e=l()(t,2)[1];return![void 0,null].includes(e)})).forEach((function(t){var e=l()(t,2),r=e[0],o=e[1];return n.searchParams.set(r,o)})),n},w=function(){var t=c()(a.a.mark((function t(e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(g){t.next=6;break}return t.next=3,fetch("https://raendom-backend.z52da5wt.xyz/cache/stats");case 3:return t.next=5,t.sent.json();case 5:g=t.sent.by_url;case 6:return t.abrupt("return",(null===(r=g.find((function(t){return t.url===e})))||void 0===r?void 0:r.total_amount)||0);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(t){var e=t.size,r=void 0===e?"icon":e,n=t.url,o=void 0===n?window.location.href:n,i=t.account,u=p()(t,["size","url","account"]),s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return'\n    <a\n      target="_blank"\n      href="'.concat(y||b(m({url:o},u)),'"\n      ').concat(i?'data-account="'.concat(i,'"'):"",'\n      data-url="').concat(o,'"\n    >\n      <img alt="Superhero Icon" src="').concat(h,'" />\n      ').concat(t&&"<span>".concat(t,"</span>"),"\n    </a>")},l='\n    <div class="tips-amount">\n      <span class="tips">0</span>\n      <span class="ae">AE</span>\n    </div>',f={icon:s(),small:s("Donate")+l,medium:s("Donate Now")+l,large:l+s("Donate Now")};if(!f[r])throw new Error("Unsupported size");var d=document.createElement("div");return d.innerHTML=f[r],d.className="superhero-button ".concat(r),c()(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=d.querySelector(".tips"))){t.next=5;break}return t.next=4,w(o);case 4:e.innerHTML=t.sent;case 5:case"end":return t.stop()}}),t)})))(),d};e.default=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r="string"==typeof t?document.querySelectorAll(t):t,n=function(t){var r=x(e);return t.replaceWith(r),r};return NodeList.prototype.isPrototypeOf(r)?Array.from(r).map(n):n(r)}}]).default}));