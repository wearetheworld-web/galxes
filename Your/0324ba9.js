(window.webpackJsonp=window.webpackJsonp||[]).push([[1213],{1300:function(e,n,t){"use strict";var r=t(300);t(129),t(36),t(16),t(86),t(71),t(91),Object.defineProperty(n,"__esModule",{value:!0}),n.getWindowMetadata=void 0;var o=t(368);n.getWindowMetadata=function(){var e,n;try{e=o.getDocumentOrThrow(),n=o.getLocationOrThrow()}catch(e){return null}function t(){for(var n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];for(var c=e.getElementsByTagName("meta"),f=function(i){var e=c[i],n=["itemprop","property","name"].map((function(n){return e.getAttribute(n)})).filter((function(e){return!!e&&t.includes(e)}));if(n.length&&n){var content=e.getAttribute("content");if(content)return{v:content}}},i=0;i<c.length;i++){var l=f(i);if("object"===r(l))return l.v}return""}var c=function(){var n=t("name","og:site_name","og:title","twitter:title");return n||(n=e.title),n}();return{description:t("description","og:description","twitter:description","keywords"),url:n.origin,icons:function(){for(var t=e.getElementsByTagName("link"),r=[],i=0;i<t.length;i++){var link=t[i],o=link.getAttribute("rel");if(o&&o.toLowerCase().indexOf("icon")>-1){var c=link.getAttribute("href");if(c)if(-1===c.toLowerCase().indexOf("https:")&&-1===c.toLowerCase().indexOf("http:")&&0!==c.indexOf("//")){var f=n.protocol+"//"+n.host;if(0===c.indexOf("/"))f+=c;else{var path=n.pathname.split("/");path.pop(),f+=path.join("/")+"/"+c}r.push(f)}else if(0===c.indexOf("//")){var l=n.protocol+c;r.push(l)}else r.push(c)}}return r}(),name:c}}},2062:function(e,n,t){"use strict";t(43),t(99),t(16),t(85),e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},368:function(e,n,t){"use strict";function r(e){var n=void 0;return"undefined"!=typeof window&&void 0!==window[e]&&(n=window[e]),n}function o(e){var n=r(e);if(!n)throw new Error("".concat(e," is not defined in Window"));return n}Object.defineProperty(n,"__esModule",{value:!0}),n.getLocalStorage=n.getLocalStorageOrThrow=n.getCrypto=n.getCryptoOrThrow=n.getLocation=n.getLocationOrThrow=n.getNavigator=n.getNavigatorOrThrow=n.getDocument=n.getDocumentOrThrow=n.getFromWindowOrThrow=n.getFromWindow=void 0,n.getFromWindow=r,n.getFromWindowOrThrow=o,n.getDocumentOrThrow=function(){return o("document")},n.getDocument=function(){return r("document")},n.getNavigatorOrThrow=function(){return o("navigator")},n.getNavigator=function(){return r("navigator")},n.getLocationOrThrow=function(){return o("location")},n.getLocation=function(){return r("location")},n.getCryptoOrThrow=function(){return o("crypto")},n.getCrypto=function(){return r("crypto")},n.getLocalStorageOrThrow=function(){return o("localStorage")},n.getLocalStorage=function(){return r("localStorage")}},5:function(e,n,t){"use strict";(function(e,r){t.d(n,"a",(function(){return A})),t.d(n,"b",(function(){return D})),t.d(n,"c",(function(){return je})),t.d(n,"d",(function(){return me})),t.d(n,"e",(function(){return ye})),t.d(n,"f",(function(){return V})),t.d(n,"g",(function(){return W})),t.d(n,"h",(function(){return L})),t.d(n,"i",(function(){return G})),t.d(n,"j",(function(){return H})),t.d(n,"k",(function(){return Se})),t.d(n,"l",(function(){return he})),t.d(n,"m",(function(){return de})),t.d(n,"n",(function(){return Oe})),t.d(n,"o",(function(){return Me})),t.d(n,"p",(function(){return M})),t.d(n,"q",(function(){return x})),t.d(n,"r",(function(){return P})),t.d(n,"s",(function(){return fe})),t.d(n,"t",(function(){return qe})),t.d(n,"u",(function(){return Ue})),t.d(n,"v",(function(){return Te})),t.d(n,"w",(function(){return Le})),t.d(n,"x",(function(){return We})),t.d(n,"y",(function(){return Ne})),t.d(n,"z",(function(){return K})),t.d(n,"A",(function(){return F})),t.d(n,"B",(function(){return ae})),t.d(n,"C",(function(){return Ke})),t.d(n,"D",(function(){return On})),t.d(n,"E",(function(){return Ee})),t.d(n,"F",(function(){return ie})),t.d(n,"G",(function(){return Ye})),t.d(n,"H",(function(){return ue})),t.d(n,"I",(function(){return Qe})),t.d(n,"J",(function(){return Xe})),t.d(n,"K",(function(){return J})),t.d(n,"L",(function(){return $e})),t.d(n,"M",(function(){return Ge})),t.d(n,"N",(function(){return en})),t.d(n,"O",(function(){return dn})),t.d(n,"P",(function(){return bn})),t.d(n,"Q",(function(){return fn})),t.d(n,"R",(function(){return un})),t.d(n,"S",(function(){return mn})),t.d(n,"T",(function(){return gn})),t.d(n,"U",(function(){return yn})),t.d(n,"V",(function(){return Be})),t.d(n,"W",(function(){return ln})),t.d(n,"X",(function(){return an})),t.d(n,"Y",(function(){return sn})),t.d(n,"Z",(function(){return pn})),t.d(n,"ab",(function(){return jn})),t.d(n,"bb",(function(){return cn})),t.d(n,"cb",(function(){return vn})),t.d(n,"db",(function(){return Je})),t.d(n,"eb",(function(){return Ze})),t.d(n,"fb",(function(){return ve})),t.d(n,"gb",(function(){return we})),t.d(n,"hb",(function(){return be})),t.d(n,"ib",(function(){return rt})),t.d(n,"jb",(function(){return Fe})),t.d(n,"kb",(function(){return Ce})),t.d(n,"lb",(function(){return B})),t.d(n,"mb",(function(){return $}));t(107),t(111),t(116);var o=t(1),c=t(8),f=t(52),l=t(35),d=(t(66),t(43),t(196),t(129),t(16),t(37),t(71),t(39),t(91),t(86),t(36),t(80),t(87),t(42),t(99),t(46),t(165),t(1377),t(77),t(322),t(73),t(323),t(324),t(325),t(326),t(327),t(328),t(329),t(330),t(331),t(332),t(333),t(334),t(335),t(337),t(144),t(114),t(156),t(2017),t(48),t(546),t(547),t(548),t(549),t(550),t(551),t(552),t(553),t(554),t(555),t(556),t(557),t(558),t(559),t(560),t(561),t(562),t(51),t(264),t(702),t(703),t(2018),t(543),t(290),t(85),t(336),t(875)),v=t(1299),m=t(252),y=t(690),O=t(876),h=t(113),j=t(1302),E=t(47),S=t(368),w=t(1300),N=t(508),I=t(1301);function T(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return U(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return U(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,f=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return c=e.done,e},e:function(e){f=!0,o=e},f:function(){try{c||null==t.return||t.return()}finally{if(f)throw o}}}}function U(e,n){(null==n||n>e.length)&&(n=e.length);for(var i=0,t=new Array(n);i<n;i++)t[i]=e[i];return t}function P(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=[];return Object.keys(e).forEach((function(r){if(!n.length||n.includes(r)){var o=e[r];t.push.apply(t,Object(f.a)(o.accounts))}})),t}function _(e,n){return e.includes(":")?[e]:n.chains||[]}var k="base10",A="base16",R="base64pad",C="utf8",D=1;function M(){var e=O.generateKeyPair();return{privateKey:Object(h.toString)(e.secretKey,A),publicKey:Object(h.toString)(e.publicKey,A)}}function x(){var e=Object(m.randomBytes)(32);return Object(h.toString)(e,A)}function L(e,n){var t=O.sharedKey(Object(h.fromString)(e,A),Object(h.fromString)(n,A)),r=new v.HKDF(y.SHA256,t).expand(32);return Object(h.toString)(r,A)}function K(e){var n=Object(y.hash)(Object(h.fromString)(e,A));return Object(h.toString)(n,A)}function F(e){var n=Object(y.hash)(Object(h.fromString)(e,C));return Object(h.toString)(n,A)}function V(e){return Number(Object(h.toString)(e,k))}function H(e){var n=function(e){return Object(h.fromString)("".concat(e),k)}(Object(c.a)(e.type)<"u"?e.type:0);if(V(n)===D&&Object(c.a)(e.senderPublicKey)>"u")throw new Error("Missing sender public key for type 1 envelope");var t=Object(c.a)(e.senderPublicKey)<"u"?Object(h.fromString)(e.senderPublicKey,A):void 0,r=Object(c.a)(e.iv)<"u"?Object(h.fromString)(e.iv,A):Object(m.randomBytes)(12);return function(e){if(V(e.type)===D){if(Object(c.a)(e.senderPublicKey)>"u")throw new Error("Missing sender public key for type 1 envelope");return Object(h.toString)(Object(h.concat)([e.type,e.senderPublicKey,e.iv,e.sealed]),R)}return Object(h.toString)(Object(h.concat)([e.type,e.iv,e.sealed]),R)}({type:n,sealed:new d.ChaCha20Poly1305(Object(h.fromString)(e.symKey,A)).seal(r,Object(h.fromString)(e.message,C)),iv:r,senderPublicKey:t})}function W(e){var n=new d.ChaCha20Poly1305(Object(h.fromString)(e.symKey,A)),t=G(e.encoded),r=t.sealed,o=t.iv,c=n.open(o,r);if(null===c)throw new Error("Failed to decrypt");return Object(h.toString)(c,C)}function G(e){var n=Object(h.fromString)(e,R),t=n.slice(0,1);if(V(t)===D){var r=n.slice(1,33),u=n.slice(33,45);return{type:t,sealed:n.slice(45),iv:u,senderPublicKey:r}}var s=n.slice(1,13);return{type:t,sealed:n.slice(13),iv:s}}function B(e,n){var t=G(e);return $({type:V(t.type),senderPublicKey:Object(c.a)(t.senderPublicKey)<"u"?Object(h.toString)(t.senderPublicKey,A):void 0,receiverPublicKey:null==n?void 0:n.receiverPublicKey})}function $(e){var n=(null==e?void 0:e.type)||0;if(n===D){if(Object(c.a)(null==e?void 0:e.senderPublicKey)>"u")throw new Error("missing sender public key");if(Object(c.a)(null==e?void 0:e.receiverPublicKey)>"u")throw new Error("missing receiver public key")}return{type:n,senderPublicKey:null==e?void 0:e.senderPublicKey,receiverPublicKey:null==e?void 0:e.receiverPublicKey}}function J(e){return e.type===D&&"string"==typeof e.senderPublicKey&&"string"==typeof e.receiverPublicKey}var z=Object.defineProperty,Q=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable,X=function(e,n,t){return n in e?z(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t},ee=function(e,n){for(var t in n||(n={}))Z.call(n,t)&&X(e,t,n[t]);if(Q){var r,o=T(Q(n));try{for(o.s();!(r=o.n()).done;){t=r.value;Y.call(n,t)&&X(e,t,n[t])}}catch(e){o.e(e)}finally{o.f()}}return e},ne="react-native",te="node",re="browser",oe="unknown",ce="js";function ie(){return(void 0===e?"undefined":Object(c.a)(e))<"u"&&Object(c.a)(e.versions)<"u"&&Object(c.a)(e.versions.node)<"u"}function ue(){return!Object(S.getDocument)()&&!!Object(S.getNavigator)()&&"ReactNative"===navigator.product}function ae(){return!ie()&&!!Object(S.getNavigator)()}function se(){return ue()?ne:ie()?te:ae()?re:oe}function fe(){return Object(w.getWindowMetadata)()||{name:"",description:"",url:"",icons:[""]}}function le(e,n,t){var r=function(){var e=Object(j.a)();if(null===e)return"unknown";var n=e.os?e.os.replace(" ","").toLowerCase():"unknown";return"browser"===e.type?[n,e.name,e.version].join("-"):[n,e.version].join("-")}(),o=function(){var e,n=se();return n===re?[n,(null==(e=Object(S.getLocation)())?void 0:e.host)||"unknown"].join(":"):n}();return[[e,n].join("-"),[ce,t].join("-"),r,o].join("/")}function de(e){var n=e.protocol,t=e.version,r=e.relayUrl,o=e.sdkVersion,c=e.auth,s=e.projectId,i=e.useOnCloseEvent,f=r.split("?"),l={auth:c,ua:le(n,t,o),projectId:s,useOnCloseEvent:i||void 0},u=function(e,n){var t=N.parse(e);return t=ee(ee({},t),n),N.stringify(t)}(f[1]||"",l);return f[0]+"?"+u}function pe(e,n){return e.filter((function(e){return n.includes(e)})).length===e.length}function ve(e){return Object.fromEntries(e.entries())}function be(e){return new Map(Object.entries(e))}function me(){var e,n,s,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E.FIVE_MINUTES,r=arguments.length>1?arguments[1]:void 0,o=Object(E.toMiliseconds)(t||E.FIVE_MINUTES);return{resolve:function(i){s&&e&&(clearTimeout(s),e(i))},reject:function(i){s&&n&&(clearTimeout(s),n(i))},done:function(){return new Promise((function(i,t){s=setTimeout((function(){t(new Error(r))}),o),e=i,n=t}))}}}function ye(e,n,t){return new Promise(function(){var r=Object(o.a)(regeneratorRuntime.mark((function r(o,c){var s,i;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s=setTimeout((function(){return c(new Error(t))}),n),r.prev=1,r.next=4,e;case 4:i=r.sent,o(i),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),c(r.t0);case 11:clearTimeout(s);case 12:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(e,n){return r.apply(this,arguments)}}())}function ge(e,n){if("string"==typeof n&&n.startsWith("".concat(e,":")))return n;if("topic"===e.toLowerCase()){if("string"!=typeof n)throw new Error('Value must be "string" for expirer target type: topic');return"topic:".concat(n)}if("id"===e.toLowerCase()){if("number"!=typeof n)throw new Error('Value must be "number" for expirer target type: id');return"id:".concat(n)}throw new Error("Unknown expirer target type: ".concat(e))}function Oe(e){return ge("topic",e)}function he(e){return ge("id",e)}function rt(e){var n=e.split(":"),t=Object(l.a)(n,2),r=t[0],o=t[1],c={id:void 0,topic:void 0};if("topic"===r&&"string"==typeof o)c.topic=o;else{if("id"!==r||!Number.isInteger(Number(o)))throw new Error("Invalid target, expected id:number or topic:string, got ".concat(r,":").concat(o));c.id=Number(o)}return c}function je(e,n){return Object(E.fromMiliseconds)((n||Date.now())+Object(E.toMiliseconds)(e))}function Ee(e){return Date.now()>=Object(E.toMiliseconds)(e)}function Se(e,n){return"".concat(e).concat(n?":".concat(n):"")}function we(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(f.a)(new Set([].concat(Object(f.a)(e),Object(f.a)(n))))}function Ne(e){return Ie.apply(this,arguments)}function Ie(){return(Ie=Object(o.a)(regeneratorRuntime.mark((function e(n){var t,o,f,l,d,s,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.id,o=n.topic,f=n.wcDeepLink,e.prev=1,f){e.next=4;break}return e.abrupt("return");case 4:if(l="string"==typeof f?JSON.parse(f):f,"string"==typeof(d=null==l?void 0:l.href)){e.next=8;break}return e.abrupt("return");case 8:if(d.endsWith("/")&&(d=d.slice(0,-1)),s="".concat(d,"/wc?requestId=").concat(t,"&sessionTopic=").concat(o),(i=se())!==re){e.next=14;break}window.open(s,"_self","noreferrer noopener"),e.next=18;break;case 14:if(e.t0=i===ne&&Object(c.a)(null==r?void 0:r.Linking)<"u",!e.t0){e.next=18;break}return e.next=18,r.Linking.openURL(s);case 18:e.next=23;break;case 20:e.prev=20,e.t1=e.catch(1),console.error(e.t1);case 23:case"end":return e.stop()}}),e,null,[[1,20]])})))).apply(this,arguments)}function Te(e){return(null==e?void 0:e.relay)||{protocol:"irn"}}function Ue(e){var n=I.RELAY_JSONRPC[e];if(Object(c.a)(n)>"u")throw new Error("Relay Protocol not supported: ".concat(e));return n}var dt=Object.defineProperty,Pe=Object.getOwnPropertySymbols,_e=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable,Ae=function(e,n,t){return n in e?dt(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t};function Re(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",t={},r="relay"+n;return Object.keys(e).forEach((function(n){if(n.startsWith(r)){var s=n.replace(r,""),i=e[n];t[s]=i}})),t}function Ce(e){var n=e.indexOf(":"),t=-1!==e.indexOf("?")?e.indexOf("?"):void 0,r=e.substring(0,n),o=e.substring(n+1,t).split("@"),s=Object(c.a)(t)<"u"?e.substring(t):"",i=N.parse(s);return{protocol:r,topic:De(o[0]),version:parseInt(o[1],10),symKey:i.symKey,relay:Re(i)}}function De(e){return e.startsWith("//")?e.substring(2):e}function Me(e){return"".concat(e.protocol,":").concat(e.topic,"@").concat(e.version,"?")+N.stringify(function(e,n){for(var t in n||(n={}))_e.call(n,t)&&Ae(e,t,n[t]);if(Pe){var r,o=T(Pe(n));try{for(o.s();!(r=o.n()).done;)t=r.value,ke.call(n,t)&&Ae(e,t,n[t])}catch(e){o.e(e)}finally{o.f()}}return e}({symKey:e.symKey},function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",t="relay",r={};return Object.keys(e).forEach((function(o){var s=t+n+o;e[o]&&(r[s]=e[o])})),r}(e.relay)))}Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;function xe(e){var n=[];return e.forEach((function(e){var t=e.split(":"),r=Object(l.a)(t,2),o=r[0],c=r[1];n.push("".concat(o,":").concat(c))})),n}function Le(e,n){var t=un(e,n);if(t)throw new Error(t.message);for(var r={},o=0,c=Object.entries(e);o<c.length;o++){var f=Object(l.a)(c[o],2),d=f[0],s=f[1];r[d]={methods:s.methods,events:s.events,chains:s.accounts.map((function(i){return"".concat(i.split(":")[0],":").concat(i.split(":")[1])}))}}return r}function Ke(e){return e.includes(":")}function Fe(e){return Ke(e)?e.split(":")[0]:e}var Ve={INVALID_METHOD:{message:"Invalid method.",code:1001},INVALID_EVENT:{message:"Invalid event.",code:1002},INVALID_UPDATE_REQUEST:{message:"Invalid update request.",code:1003},INVALID_EXTEND_REQUEST:{message:"Invalid extend request.",code:1004},INVALID_SESSION_SETTLE_REQUEST:{message:"Invalid session settle request.",code:1005},UNAUTHORIZED_METHOD:{message:"Unauthorized method.",code:3001},UNAUTHORIZED_EVENT:{message:"Unauthorized event.",code:3002},UNAUTHORIZED_UPDATE_REQUEST:{message:"Unauthorized update request.",code:3003},UNAUTHORIZED_EXTEND_REQUEST:{message:"Unauthorized extend request.",code:3004},USER_REJECTED:{message:"User rejected.",code:5e3},USER_REJECTED_CHAINS:{message:"User rejected chains.",code:5001},USER_REJECTED_METHODS:{message:"User rejected methods.",code:5002},USER_REJECTED_EVENTS:{message:"User rejected events.",code:5003},UNSUPPORTED_CHAINS:{message:"Unsupported chains.",code:5100},UNSUPPORTED_METHODS:{message:"Unsupported methods.",code:5101},UNSUPPORTED_EVENTS:{message:"Unsupported events.",code:5102},UNSUPPORTED_ACCOUNTS:{message:"Unsupported accounts.",code:5103},UNSUPPORTED_NAMESPACE_KEY:{message:"Unsupported namespace key.",code:5104},USER_DISCONNECTED:{message:"User disconnected.",code:6e3},SESSION_SETTLEMENT_FAILED:{message:"Session settlement failed.",code:7e3},WC_METHOD_UNSUPPORTED:{message:"Unsupported wc_ method.",code:10001}},He={NOT_INITIALIZED:{message:"Not initialized.",code:1},NO_MATCHING_KEY:{message:"No matching key.",code:2},RESTORE_WILL_OVERRIDE:{message:"Restore will override.",code:3},RESUBSCRIBED:{message:"Resubscribed.",code:4},MISSING_OR_INVALID:{message:"Missing or invalid.",code:5},EXPIRED:{message:"Expired.",code:6},UNKNOWN_TYPE:{message:"Unknown type.",code:7},MISMATCHED_TOPIC:{message:"Mismatched topic.",code:8},NON_CONFORMING_NAMESPACES:{message:"Non conforming namespaces.",code:9}};function qe(e,n){var t=He[e],r=t.message,o=t.code;return{message:n?"".concat(r," ").concat(n):r,code:o}}function We(e,n){var t=Ve[e],r=t.message,o=t.code;return{message:n?"".concat(r," ").concat(n):r,code:o}}function Ge(e,n){return!!Array.isArray(e)&&(!(Object(c.a)(n)<"u"&&e.length)||e.every(n))}function Be(e){return Object.getPrototypeOf(e)===Object.prototype&&Object.keys(e).length}function $e(e){return Object(c.a)(e)>"u"}function Je(e,n){return!(!n||!$e(e))||"string"==typeof e&&!!e.trim().length}function ze(e,n){return!(!n||!$e(e))||"number"==typeof e&&!isNaN(e)}function Qe(e,n){var t=n.requiredNamespaces,r=Object.keys(e.namespaces),o=Object.keys(t),s=!0;return!!pe(o,r)&&(r.forEach((function(i){var n=e.namespaces[i],r=n.accounts,o=n.methods,c=n.events,u=xe(r),a=t[i];pe(_(i,a),u)&&pe(a.methods,o)&&pe(a.events,c)||(s=!1)})),s)}function q(e){return!(!Je(e,!1)||!e.includes(":"))&&2===e.split(":").length}function Ze(e){if(Je(e,!1))try{return Object(c.a)(new URL(e))<"u"}catch(e){return!1}return!1}function Ye(e){var n;return null==(n=null==e?void 0:e.proposer)?void 0:n.publicKey}function Xe(e){return null==e?void 0:e.topic}function en(e,n){var t=null;return Je(null==e?void 0:e.publicKey,!1)||(t=qe("MISSING_OR_INVALID","".concat(n," controller public key should be a string"))),t}function nn(e){var n=!0;return Ge(e)?e.length&&(n=e.every((function(e){return Je(e,!1)}))):n=!1,n}function tn(e,n){var t=null;return Object.entries(e).forEach((function(e){var r=Object(l.a)(e,2),o=r[0],c=r[1];if(!t){var s=function(e,n,t){var r=null;return Ge(n)?n.forEach((function(n){r||(!q(n)||!n.includes(e))&&(r=We("UNSUPPORTED_CHAINS","".concat(t,", chain ").concat(n,' should be a string and conform to "namespace:chainId" format')))})):r=We("UNSUPPORTED_CHAINS","".concat(t,", chains ").concat(n,' should be an array of strings conforming to "namespace:chainId" format')),r}(o,_(o,c),"".concat(n," requiredNamespace"));s&&(t=s)}})),t}function rn(e,n){var t=null;return Ge(e)?e.forEach((function(e){t||function(e){if(Je(e,!1)&&e.includes(":")){var n=e.split(":");if(3===n.length){var t=n[0]+":"+n[1];return!!n[2]&&q(t)}}return!1}(e)||(t=We("UNSUPPORTED_ACCOUNTS","".concat(n,", account ").concat(e,' should be a string and conform to "namespace:chainId:address" format')))})):t=We("UNSUPPORTED_ACCOUNTS","".concat(n,', accounts should be an array of strings conforming to "namespace:chainId:address" format')),t}function on(e,n){var t=null;return Object.values(e).forEach((function(e){if(!t){var r=function(e,n){var t=null;return nn(null==e?void 0:e.methods)?nn(null==e?void 0:e.events)||(t=We("UNSUPPORTED_EVENTS","".concat(n,", events should be an array of strings or empty array for no events"))):t=We("UNSUPPORTED_METHODS","".concat(n,", methods should be an array of strings or empty array for no methods")),t}(e,"".concat(n,", namespace"));r&&(t=r)}})),t}function cn(e,n,t){var r=null;if(e&&Be(e)){var o=on(e,n);o&&(r=o);var s=tn(e,n);s&&(r=s)}else r=qe("MISSING_OR_INVALID","".concat(n,", ").concat(t," should be an object with data"));return r}function un(e,n){var t=null;if(e&&Be(e)){var r=on(e,n);r&&(t=r);var o=function(e,n){var t=null;return Object.values(e).forEach((function(e){if(!t){var r=rn(null==e?void 0:e.accounts,"".concat(n," namespace"));r&&(t=r)}})),t}(e,n);o&&(t=o)}else t=qe("MISSING_OR_INVALID","".concat(n,", namespaces should be an object with data"));return t}function an(e){return Je(e.protocol,!0)}function sn(e,n){var t=!1;return n&&!e?t=!0:e&&Ge(e)&&e.length&&e.forEach((function(e){t=an(e)})),t}function fn(e){return"number"==typeof e}function ln(e){return Object(c.a)(e)<"u"&&null!==Object(c.a)(e)}function dn(e){return!!(e&&"object"==Object(c.a)(e)&&e.code&&ze(e.code,!1)&&e.message&&Je(e.message,!1))}function pn(e){return!($e(e)||!Je(e.method,!1))}function vn(e){return!($e(e)||$e(e.result)&&$e(e.error)||!ze(e.id,!1)||!Je(e.jsonrpc,!1))}function bn(e){return!($e(e)||!Je(e.name,!1))}function mn(e,n){return!(!q(n)||!function(e){var n=[];return Object.values(e).forEach((function(e){n.push.apply(n,Object(f.a)(xe(e.accounts)))})),n}(e).includes(n))}function yn(e,n,t){return!!Je(t,!1)&&function(e,n){var t=[];return Object.values(e).forEach((function(e){xe(e.accounts).includes(n)&&t.push.apply(t,Object(f.a)(e.methods))})),t}(e,n).includes(t)}function gn(e,n,t){return!!Je(t,!1)&&function(e,n){var t=[];return Object.values(e).forEach((function(e){xe(e.accounts).includes(n)&&t.push.apply(t,Object(f.a)(e.events))})),t}(e,n).includes(t)}function On(e,n,t){var r=null,o=function(e){var n={};return Object.keys(e).forEach((function(t){var r;t.includes(":")?n[t]=e[t]:null==(r=e[t].chains)||r.forEach((function(r){n[r]={methods:e[t].methods,events:e[t].events}}))})),n}(e),s=function(e){var n={};return Object.keys(e).forEach((function(t){if(t.includes(":"))n[t]=e[t];else{var r=xe(e[t].accounts);null==r||r.forEach((function(r){n[r]={accounts:e[t].accounts.filter((function(s){return s.includes("".concat(r,":"))})),methods:e[t].methods,events:e[t].events}}))}})),n}(n),i=Object.keys(o),c=Object.keys(s),f=hn(Object.keys(e)),l=hn(Object.keys(n)),u=f.filter((function(a){return!l.includes(a)}));return u.length&&(r=qe("NON_CONFORMING_NAMESPACES","".concat(t," namespaces keys don't satisfy requiredNamespaces.\n      Required: ").concat(u.toString(),"\n      Received: ").concat(Object.keys(n).toString()))),pe(i,c)||(r=qe("NON_CONFORMING_NAMESPACES","".concat(t," namespaces chains don't satisfy required namespaces.\n      Required: ").concat(i.toString(),"\n      Approved: ").concat(c.toString()))),Object.keys(n).forEach((function(a){if(a.includes(":")&&!r){var g=xe(n[a].accounts);g.includes(a)||(r=qe("NON_CONFORMING_NAMESPACES","".concat(t," namespaces accounts don't satisfy namespace accounts for ").concat(a,"\n        Required: ").concat(a,"\n        Approved: ").concat(g.toString())))}})),i.forEach((function(a){r||(pe(o[a].methods,s[a].methods)?pe(o[a].events,s[a].events)||(r=qe("NON_CONFORMING_NAMESPACES","".concat(t," namespaces events don't satisfy namespace events for ").concat(a))):r=qe("NON_CONFORMING_NAMESPACES","".concat(t," namespaces methods don't satisfy namespace methods for ").concat(a)))})),r}function hn(e){return Object(f.a)(new Set(e.map((function(e){return e.includes(":")?e.split(":")[0]:e}))))}function jn(e,n){return ze(e,!1)&&e<=n.max&&e>=n.min}}).call(this,t(74),t(31))},508:function(e,n,t){"use strict";t(46),t(107),t(73),t(116),t(77);var r=t(78),o=t(1176),c=t(300),f=t(2058);function l(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return d(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return d(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,f=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return c=e.done,e},e:function(e){f=!0,o=e},f:function(){try{c||null==t.return||t.return()}finally{if(f)throw o}}}}function d(e,n){(null==n||n>e.length)&&(n=e.length);for(var i=0,t=new Array(n);i<n;i++)t[i]=e[i];return t}t(42),t(111),t(16),t(48),t(129),t(43),t(99),t(71),t(91),t(86),t(196),t(377),t(39),t(80),t(87),t(1366),t(144),t(36);var v=t(2062),m=t(2063),y=t(2064),O=t(2065),h=Symbol("encodeFragmentIdentifier");function j(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function E(e,n){return n.encode?n.strict?v(e):encodeURIComponent(e):e}function S(e,n){return n.decode?m(e):e}function w(input){return Array.isArray(input)?input.sort():"object"===c(input)?w(Object.keys(input)).sort((function(a,b){return Number(a)-Number(b)})).map((function(e){return input[e]})):input}function N(input){var e=input.indexOf("#");return-1!==e&&(input=input.slice(0,e)),input}function I(input){var e=(input=N(input)).indexOf("?");return-1===e?"":input.slice(e+1)}function T(e,n){return n.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!n.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function U(e,n){j((n=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},n)).arrayFormatSeparator);var t=function(e){var n;switch(e.arrayFormat){case"index":return function(e,t,r){n=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),n?(void 0===r[e]&&(r[e]={}),r[e][n[1]]=t):r[e]=t};case"bracket":return function(e,t,r){n=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),n?void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=[t]:r[e]=t};case"colon-list-separator":return function(e,t,r){n=/(:list)$/.exec(e),e=e.replace(/:list$/,""),n?void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=[t]:r[e]=t};case"comma":case"separator":return function(n,t,r){var o="string"==typeof t&&t.includes(e.arrayFormatSeparator),c="string"==typeof t&&!o&&S(t,e).includes(e.arrayFormatSeparator);t=c?S(t,e):t;var f=o||c?t.split(e.arrayFormatSeparator).map((function(n){return S(n,e)})):null===t?t:S(t,e);r[n]=f};case"bracket-separator":return function(n,t,r){var o=/(\[\])$/.test(n);if(n=n.replace(/\[\]$/,""),o){var c=null===t?[]:t.split(e.arrayFormatSeparator).map((function(n){return S(n,e)}));void 0!==r[n]?r[n]=[].concat(r[n],c):r[n]=c}else r[n]=t?S(t,e):t};default:return function(e,n,t){void 0!==t[e]?t[e]=[].concat(t[e],n):t[e]=n}}}(n),r=Object.create(null);if("string"!=typeof e)return r;if(!(e=e.trim().replace(/^[?#&]/,"")))return r;var f,d=l(e.split("&"));try{for(d.s();!(f=d.n()).done;){var param=f.value;if(""!==param){var v=y(n.decode?param.replace(/\+/g," "):param,"="),m=o(v,2),O=m[0],h=m[1];h=void 0===h?null:["comma","separator","bracket-separator"].includes(n.arrayFormat)?h:S(h,n),t(S(O,n),h,r)}}}catch(e){d.e(e)}finally{d.f()}for(var E=0,N=Object.keys(r);E<N.length;E++){var I=N[E],U=r[I];if("object"===c(U)&&null!==U)for(var P=0,_=Object.keys(U);P<_.length;P++){var k=_[P];U[k]=T(U[k],n)}else r[I]=T(U,n)}return!1===n.sort?r:(!0===n.sort?Object.keys(r).sort():Object.keys(r).sort(n.sort)).reduce((function(e,n){var t=r[n];return Boolean(t)&&"object"===c(t)&&!Array.isArray(t)?e[n]=w(t):e[n]=t,e}),Object.create(null))}n.extract=I,n.parse=U,n.stringify=function(object,e){if(!object)return"";j((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);for(var n=function(n){return e.skipNull&&null==object[n]||e.skipEmptyString&&""===object[n]},t=function(e){switch(e.arrayFormat){case"index":return function(n){return function(t,r){var o=t.length;return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?t:[].concat(f(t),null===r?[[E(n,e),"[",o,"]"].join("")]:[[E(n,e),"[",E(o,e),"]=",E(r,e)].join("")])}};case"bracket":return function(n){return function(t,r){return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?t:[].concat(f(t),null===r?[[E(n,e),"[]"].join("")]:[[E(n,e),"[]=",E(r,e)].join("")])}};case"colon-list-separator":return function(n){return function(t,r){return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?t:[].concat(f(t),null===r?[[E(n,e),":list="].join("")]:[[E(n,e),":list=",E(r,e)].join("")])}};case"comma":case"separator":case"bracket-separator":var n="bracket-separator"===e.arrayFormat?"[]=":"=";return function(t){return function(r,o){return void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?r:(o=null===o?"":o,0===r.length?[[E(t,e),n,E(o,e)].join("")]:[[r,E(o,e)].join(e.arrayFormatSeparator)])}};default:return function(n){return function(t,r){return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?t:[].concat(f(t),null===r?[E(n,e)]:[[E(n,e),"=",E(r,e)].join("")])}}}}(e),r={},o=0,c=Object.keys(object);o<c.length;o++){var l=c[o];n(l)||(r[l]=object[l])}var d=Object.keys(r);return!1!==e.sort&&d.sort(e.sort),d.map((function(n){var r=object[n];return void 0===r?"":null===r?E(n,e):Array.isArray(r)?0===r.length&&"bracket-separator"===e.arrayFormat?E(n,e)+"[]":r.reduce(t(n),[]).join("&"):E(n,e)+"="+E(r,e)})).filter((function(e){return e.length>0})).join("&")},n.parseUrl=function(e,n){n=Object.assign({decode:!0},n);var t=y(e,"#"),r=o(t,2),c=r[0],f=r[1];return Object.assign({url:c.split("?")[0]||"",query:U(I(e),n)},n&&n.parseFragmentIdentifier&&f?{fragmentIdentifier:S(f,n)}:{})},n.stringifyUrl=function(object,e){e=Object.assign(r({encode:!0,strict:!0},h,!0),e);var t=N(object.url).split("?")[0]||"",o=n.extract(object.url),c=n.parse(o,{sort:!1}),f=Object.assign(c,object.query),l=n.stringify(f,e);l&&(l="?".concat(l));var d=function(e){var n="",t=e.indexOf("#");return-1!==t&&(n=e.slice(t)),n}(object.url);return object.fragmentIdentifier&&(d="#".concat(e[h]?E(object.fragmentIdentifier,e):object.fragmentIdentifier)),"".concat(t).concat(l).concat(d)},n.pick=function(input,filter,e){e=Object.assign(r({parseFragmentIdentifier:!0},h,!1),e);var t=n.parseUrl(input,e),o=t.url,c=t.query,f=t.fragmentIdentifier;return n.stringifyUrl({url:o,query:O(c,filter),fragmentIdentifier:f},e)},n.exclude=function(input,filter,e){var t=Array.isArray(filter)?function(e){return!filter.includes(e)}:function(e,n){return!filter(e,n)};return n.pick(input,t,e)}}}]);