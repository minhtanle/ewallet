"use strict";(self["webpackChunkewallet"]=self["webpackChunkewallet"]||[]).push([[998],{444:function(e,c,t){t.d(c,{BH:function(){return H},G6:function(){return x},L:function(){return o},LL:function(){return A},Pz:function(){return g},Sg:function(){return V},UG:function(){return L},ZB:function(){return f},ZR:function(){return I},aH:function(){return z},b$:function(){return w},eu:function(){return S},hl:function(){return _},jU:function(){return y},m9:function(){return $},ne:function(){return B},pd:function(){return q},r3:function(){return R},ru:function(){return b},tV:function(){return l},uI:function(){return M},vZ:function(){return D},w1:function(){return N},xO:function(){return F},xb:function(){return P},z$:function(){return C},zd:function(){return U}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const n=function(e){const c=[];let t=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?c[t++]=i:i<2048?(c[t++]=i>>6|192,c[t++]=63&i|128):55296===(64512&i)&&n+1<e.length&&56320===(64512&e.charCodeAt(n+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),c[t++]=i>>18|240,c[t++]=i>>12&63|128,c[t++]=i>>6&63|128,c[t++]=63&i|128):(c[t++]=i>>12|224,c[t++]=i>>6&63|128,c[t++]=63&i|128)}return c},i=function(e){const c=[];let t=0,n=0;while(t<e.length){const i=e[t++];if(i<128)c[n++]=String.fromCharCode(i);else if(i>191&&i<224){const a=e[t++];c[n++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){const a=e[t++],s=e[t++],r=e[t++],o=((7&i)<<18|(63&a)<<12|(63&s)<<6|63&r)-65536;c[n++]=String.fromCharCode(55296+(o>>10)),c[n++]=String.fromCharCode(56320+(1023&o))}else{const a=e[t++],s=e[t++];c[n++]=String.fromCharCode((15&i)<<12|(63&a)<<6|63&s)}}return c.join("")},a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,c){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=c?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<e.length;i+=3){const c=e[i],a=i+1<e.length,s=a?e[i+1]:0,r=i+2<e.length,o=r?e[i+2]:0,l=c>>2,f=(3&c)<<4|s>>4;let u=(15&s)<<2|o>>6,h=63&o;r||(h=64,a||(u=64)),n.push(t[l],t[f],t[u],t[h])}return n.join("")},encodeString(e,c){return this.HAS_NATIVE_SUPPORT&&!c?btoa(e):this.encodeByteArray(n(e),c)},decodeString(e,c){return this.HAS_NATIVE_SUPPORT&&!c?atob(e):i(this.decodeStringToByteArray(e,c))},decodeStringToByteArray(e,c){this.init_();const t=c?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<e.length;){const c=t[e.charAt(i++)],a=i<e.length,r=a?t[e.charAt(i)]:0;++i;const o=i<e.length,l=o?t[e.charAt(i)]:64;++i;const f=i<e.length,u=f?t[e.charAt(i)]:64;if(++i,null==c||null==r||null==l||null==u)throw new s;const h=c<<2|r>>4;if(n.push(h),64!==l){const e=r<<4&240|l>>2;if(n.push(e),64!==u){const e=l<<6&192|u;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const r=function(e){const c=n(e);return a.encodeByteArray(c,!0)},o=function(e){return r(e).replace(/\./g,"")},l=function(e){try{return a.decodeString(e,!0)}catch(c){console.error("base64Decode failed: ",c)}return null};function f(e,c){if(!(c instanceof Object))return c;switch(c.constructor){case Date:const t=c;return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return c}for(const t in c)c.hasOwnProperty(t)&&u(t)&&(e[t]=f(e[t],c[t]));return e}function u(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof t.g)return t.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m=()=>h().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/ewallet/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},p=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const c=e&&l(e[1]);return c&&JSON.parse(c)},v=()=>{try{return m()||d()||p()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},z=()=>{var e;return null===(e=v())||void 0===e?void 0:e.config},g=e=>{var c;return null===(c=v())||void 0===c?void 0:c[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class H{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,c)=>{this.resolve=e,this.reject=c}))}wrapCallback(e){return(c,t)=>{c?this.reject(c):this.resolve(t),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(c):e(c,t))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e,c){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=c||"demo-project",i=e.iat||0,a=e.sub||e.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},e),r="";return[o(JSON.stringify(t)),o(JSON.stringify(s)),r].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function M(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(C())}function L(){var e;const c=null===(e=v())||void 0===e?void 0:e.forceEnvironment;if("node"===c)return!0;if("browser"===c)return!1;try{return"[object process]"===Object.prototype.toString.call(t.g.process)}catch(n){return!1}}function y(){return"object"===typeof self&&self.self===self}function b(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function w(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function N(){const e=C();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function x(){return!L()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _(){try{return"object"===typeof indexedDB}catch(e){return!1}}function S(){return new Promise(((e,c)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var e;c((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(t){c(t)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const k="FirebaseError";class I extends Error{constructor(e,c,t){super(c),this.code=e,this.customData=t,this.name=k,Object.setPrototypeOf(this,I.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,A.prototype.create)}}class A{constructor(e,c,t){this.service=e,this.serviceName=c,this.errors=t}create(e,...c){const t=c[0]||{},n=`${this.service}/${e}`,i=this.errors[e],a=i?T(i,t):"Error",s=`${this.serviceName}: ${a} (${n}).`,r=new I(n,s,t);return r}}function T(e,c){return e.replace(E,((e,t)=>{const n=c[t];return null!=n?String(n):`<${t}?>`}))}const E=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function R(e,c){return Object.prototype.hasOwnProperty.call(e,c)}function P(e){for(const c in e)if(Object.prototype.hasOwnProperty.call(e,c))return!1;return!0}function D(e,c){if(e===c)return!0;const t=Object.keys(e),n=Object.keys(c);for(const i of t){if(!n.includes(i))return!1;const t=e[i],a=c[i];if(O(t)&&O(a)){if(!D(t,a))return!1}else if(t!==a)return!1}for(const i of n)if(!t.includes(i))return!1;return!0}function O(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function F(e){const c=[];for(const[t,n]of Object.entries(e))Array.isArray(n)?n.forEach((e=>{c.push(encodeURIComponent(t)+"="+encodeURIComponent(e))})):c.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return c.length?"&"+c.join("&"):""}function U(e){const c={},t=e.replace(/^\?/,"").split("&");return t.forEach((e=>{if(e){const[t,n]=e.split("=");c[decodeURIComponent(t)]=decodeURIComponent(n)}})),c}function q(e){const c=e.indexOf("?");if(!c)return"";const t=e.indexOf("#",c);return e.substring(c,t>0?t:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(e,c){const t=new j(e,c);return t.subscribe.bind(t)}class j{constructor(e,c){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=c,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((c=>{c.next(e)}))}error(e){this.forEachObserver((c=>{c.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,c,t){let n;if(void 0===e&&void 0===c&&void 0===t)throw new Error("Missing Observer.");n=G(e,["next","error","complete"])?e:{next:e,error:c,complete:t},void 0===n.next&&(n.next=W),void 0===n.error&&(n.error=W),void 0===n.complete&&(n.complete=W);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}})),this.observers.push(n),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let c=0;c<this.observers.length;c++)this.sendOne(c,e)}sendOne(e,c){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{c(this.observers[e])}catch(t){"undefined"!==typeof console&&console.error&&console.error(t)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function G(e,c){if("object"!==typeof e||null===e)return!1;for(const t of c)if(t in e&&"function"===typeof e[t])return!0;return!1}function W(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $(e){return e&&e._delegate?e._delegate:e}},810:function(e,c,t){t.d(c,{GN:function(){return _}});var n=t(636),i=t(252);function a(e,c){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);c&&(n=n.filter((function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var c=1;c<arguments.length;c++){var t=null!=arguments[c]?arguments[c]:{};c%2?a(Object(t),!0).forEach((function(c){o(e,c,t[c])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(c){Object.defineProperty(e,c,Object.getOwnPropertyDescriptor(t,c))}))}return e}function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,c,t){return c in e?Object.defineProperty(e,c,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[c]=t,e}function l(e,c){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],c.indexOf(t)>=0||(i[t]=e[t]);return i}function f(e,c){if(null==e)return{};var t,n,i=l(e,c);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],c.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function u(e){return h(e)||m(e)||d(e)||v()}function h(e){if(Array.isArray(e))return p(e)}function m(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function d(e,c){if(e){if("string"===typeof e)return p(e,c);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?p(e,c):void 0}}function p(e,c){(null==c||c>e.length)&&(c=e.length);for(var t=0,n=new Array(c);t<c;t++)n[t]=e[t];return n}function v(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var z="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t.g?t.g:"undefined"!==typeof self?self:{},g={exports:{}};(function(e){(function(c){var t=function(e,c,n){if(!l(c)||u(c)||h(c)||m(c)||o(c))return c;var i,a=0,s=0;if(f(c))for(i=[],s=c.length;a<s;a++)i.push(t(e,c[a],n));else for(var r in i={},c)Object.prototype.hasOwnProperty.call(c,r)&&(i[e(r,n)]=t(e,c[r],n));return i},n=function(e,c){c=c||{};var t=c.separator||"_",n=c.split||/(?=[A-Z])/;return e.split(n).join(t)},i=function(e){return d(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,c){return c?c.toUpperCase():""})),e.substr(0,1).toLowerCase()+e.substr(1))},a=function(e){var c=i(e);return c.substr(0,1).toUpperCase()+c.substr(1)},s=function(e,c){return n(e,c).toLowerCase()},r=Object.prototype.toString,o=function(e){return"function"===typeof e},l=function(e){return e===Object(e)},f=function(e){return"[object Array]"==r.call(e)},u=function(e){return"[object Date]"==r.call(e)},h=function(e){return"[object RegExp]"==r.call(e)},m=function(e){return"[object Boolean]"==r.call(e)},d=function(e){return e-=0,e===e},p=function(e,c){var t=c&&"process"in c?c.process:c;return"function"!==typeof t?e:function(c,n){return t(c,e,n)}},v={camelize:i,decamelize:s,pascalize:a,depascalize:s,camelizeKeys:function(e,c){return t(p(i,c),e)},decamelizeKeys:function(e,c){return t(p(s,c),e,c)},pascalizeKeys:function(e,c){return t(p(a,c),e)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=v:c.humps=v})(z)})(g);var H=g.exports,V=["class","style"];function C(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,c){var t=c.indexOf(":"),n=H.camelize(c.slice(0,t)),i=c.slice(t+1).trim();return e[n]=i,e}),{})}function M(e){return e.split(/\s+/).reduce((function(e,c){return e[c]=!0,e}),{})}function L(e){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof e)return e;var n=(e.children||[]).map((function(e){return L(e)})),a=Object.keys(e.attributes||{}).reduce((function(c,t){var n=e.attributes[t];switch(t){case"class":c.class=M(n);break;case"style":c.style=C(n);break;default:c.attrs[t]=n}return c}),{attrs:{},class:{},style:{}});t.class;var r=t.style,o=void 0===r?{}:r,l=f(t,V);return(0,i.h)(e.tag,s(s(s({},c),{},{class:a.class,style:s(s({},a.style),o)},a.attrs),l),n)}var y=!1;try{y=!0}catch(S){}function b(){var e;!y&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}function w(e,c){return Array.isArray(c)&&c.length>0||!Array.isArray(c)&&c?o({},e,c):{}}function N(e){var c,t=(c={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":!0===e.flip,"fa-flip-horizontal":"horizontal"===e.flip||"both"===e.flip,"fa-flip-vertical":"vertical"===e.flip||"both"===e.flip},o(c,"fa-".concat(e.size),null!==e.size),o(c,"fa-rotate-".concat(e.rotation),null!==e.rotation),o(c,"fa-pull-".concat(e.pull),null!==e.pull),o(c,"fa-swap-opacity",e.swapOpacity),o(c,"fa-bounce",e.bounce),o(c,"fa-shake",e.shake),o(c,"fa-beat",e.beat),o(c,"fa-fade",e.fade),o(c,"fa-beat-fade",e.beatFade),o(c,"fa-flash",e.flash),o(c,"fa-spin-pulse",e.spinPulse),o(c,"fa-spin-reverse",e.spinReverse),c);return Object.keys(t).map((function(e){return t[e]?e:null})).filter((function(e){return e}))}function x(e){return e&&"object"===r(e)&&e.prefix&&e.iconName&&e.icon?e:n.Qc.icon?n.Qc.icon(e):null===e?null:"object"===r(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}var _=(0,i.aZ)({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,c){var t=c.attrs,a=(0,i.Fl)((function(){return x(e.icon)})),r=(0,i.Fl)((function(){return w("classes",N(e))})),o=(0,i.Fl)((function(){return w("transform","string"===typeof e.transform?n.Qc.transform(e.transform):e.transform)})),l=(0,i.Fl)((function(){return w("mask",x(e.mask))})),f=(0,i.Fl)((function(){return(0,n.qv)(a.value,s(s(s(s({},r.value),o.value),l.value),{},{symbol:e.symbol,title:e.title}))}));(0,i.YP)(f,(function(e){if(!e)return b("Could not find one or more icon(s)",a.value,l.value)}),{immediate:!0});var u=(0,i.Fl)((function(){return f.value?L(f.value.abstract[0],{},t):null}));return function(){return u.value}}});(0,i.aZ)({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,c){var t=c.slots,a=n.vc.familyPrefix,s=(0,i.Fl)((function(){return["".concat(a,"-layers")].concat(u(e.fixedWidth?["".concat(a,"-fw")]:[]))}));return function(){return(0,i.h)("div",{class:s.value},t.default?t.default():[])}}}),(0,i.aZ)({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,c){var t=c.attrs,a=n.vc.familyPrefix,r=(0,i.Fl)((function(){return w("classes",[].concat(u(e.counter?["".concat(a,"-layers-counter")]:[]),u(e.position?["".concat(a,"-layers-").concat(e.position)]:[])))})),o=(0,i.Fl)((function(){return w("transform","string"===typeof e.transform?n.Qc.transform(e.transform):e.transform)})),l=(0,i.Fl)((function(){var c=(0,n.fL)(e.value.toString(),s(s({},o.value),r.value)),t=c.abstract;return e.counter&&(t[0].attributes.class=t[0].attributes.class.replace("fa-layers-text","")),t[0]})),f=(0,i.Fl)((function(){return L(l.value,{},t)}));return function(){return f.value}}})},262:function(e,c,t){t.d(c,{B:function(){return s},Bj:function(){return a},Fl:function(){return We},IU:function(){return ke},Jd:function(){return b},PG:function(){return Ne},SU:function(){return qe},Um:function(){return ye},WL:function(){return je},X$:function(){return _},X3:function(){return Se},XI:function(){return Oe},Xl:function(){return Ie},dq:function(){return Pe},iH:function(){return De},j:function(){return N},lk:function(){return w},nZ:function(){return o},qj:function(){return Le},qq:function(){return C},yT:function(){return _e}});var n=t(577);let i;class a{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const c=i;try{return i=this,e()}finally{i=c}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this._active){let c,t;for(c=0,t=this.effects.length;c<t;c++)this.effects[c].stop();for(c=0,t=this.cleanups.length;c<t;c++)this.cleanups[c]();if(this.scopes)for(c=0,t=this.scopes.length;c<t;c++)this.scopes[c].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function s(e){return new a(e)}function r(e,c=i){c&&c.active&&c.effects.push(e)}function o(){return i}const l=e=>{const c=new Set(e);return c.w=0,c.n=0,c},f=e=>(e.w&v)>0,u=e=>(e.n&v)>0,h=({deps:e})=>{if(e.length)for(let c=0;c<e.length;c++)e[c].w|=v},m=e=>{const{deps:c}=e;if(c.length){let t=0;for(let n=0;n<c.length;n++){const i=c[n];f(i)&&!u(i)?i.delete(e):c[t++]=i,i.w&=~v,i.n&=~v}c.length=t}},d=new WeakMap;let p=0,v=1;const z=30;let g;const H=Symbol(""),V=Symbol("");class C{constructor(e,c=null,t){this.fn=e,this.scheduler=c,this.active=!0,this.deps=[],this.parent=void 0,r(this,t)}run(){if(!this.active)return this.fn();let e=g,c=L;while(e){if(e===this)return;e=e.parent}try{return this.parent=g,g=this,L=!0,v=1<<++p,p<=z?h(this):M(this),this.fn()}finally{p<=z&&m(this),v=1<<--p,g=this.parent,L=c,this.parent=void 0,this.deferStop&&this.stop()}}stop(){g===this?this.deferStop=!0:this.active&&(M(this),this.onStop&&this.onStop(),this.active=!1)}}function M(e){const{deps:c}=e;if(c.length){for(let t=0;t<c.length;t++)c[t].delete(e);c.length=0}}let L=!0;const y=[];function b(){y.push(L),L=!1}function w(){const e=y.pop();L=void 0===e||e}function N(e,c,t){if(L&&g){let c=d.get(e);c||d.set(e,c=new Map);let n=c.get(t);n||c.set(t,n=l());const i=void 0;x(n,i)}}function x(e,c){let t=!1;p<=z?u(e)||(e.n|=v,t=!f(e)):t=!e.has(g),t&&(e.add(g),g.deps.push(e))}function _(e,c,t,i,a,s){const r=d.get(e);if(!r)return;let o=[];if("clear"===c)o=[...r.values()];else if("length"===t&&(0,n.kJ)(e)){const e=Number(i);r.forEach(((c,t)=>{("length"===t||t>=e)&&o.push(c)}))}else switch(void 0!==t&&o.push(r.get(t)),c){case"add":(0,n.kJ)(e)?(0,n.S0)(t)&&o.push(r.get("length")):(o.push(r.get(H)),(0,n._N)(e)&&o.push(r.get(V)));break;case"delete":(0,n.kJ)(e)||(o.push(r.get(H)),(0,n._N)(e)&&o.push(r.get(V)));break;case"set":(0,n._N)(e)&&o.push(r.get(H));break}if(1===o.length)o[0]&&S(o[0]);else{const e=[];for(const c of o)c&&e.push(...c);S(l(e))}}function S(e,c){const t=(0,n.kJ)(e)?e:[...e];for(const n of t)n.computed&&k(n,c);for(const n of t)n.computed||k(n,c)}function k(e,c){(e!==g||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const I=(0,n.fY)("__proto__,__v_isRef,__isVue"),A=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(n.yk)),T=F(),E=F(!1,!0),R=F(!0),P=D();function D(){const e={};return["includes","indexOf","lastIndexOf"].forEach((c=>{e[c]=function(...e){const t=ke(this);for(let c=0,i=this.length;c<i;c++)N(t,"get",c+"");const n=t[c](...e);return-1===n||!1===n?t[c](...e.map(ke)):n}})),["push","pop","shift","unshift","splice"].forEach((c=>{e[c]=function(...e){b();const t=ke(this)[c].apply(this,e);return w(),t}})),e}function O(e){const c=ke(this);return N(c,"has",e),c.hasOwnProperty(e)}function F(e=!1,c=!1){return function(t,i,a){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return c;if("__v_raw"===i&&a===(e?c?Ve:He:c?ge:ze).get(t))return t;const s=(0,n.kJ)(t);if(!e){if(s&&(0,n.RI)(P,i))return Reflect.get(P,i,a);if("hasOwnProperty"===i)return O}const r=Reflect.get(t,i,a);return((0,n.yk)(i)?A.has(i):I(i))?r:(e||N(t,"get",i),c?r:Pe(r)?s&&(0,n.S0)(i)?r:r.value:(0,n.Kn)(r)?e?be(r):Le(r):r)}}const U=B(),q=B(!0);function B(e=!1){return function(c,t,i,a){let s=c[t];if(xe(s)&&Pe(s)&&!Pe(i))return!1;if(!e&&(_e(i)||xe(i)||(s=ke(s),i=ke(i)),!(0,n.kJ)(c)&&Pe(s)&&!Pe(i)))return s.value=i,!0;const r=(0,n.kJ)(c)&&(0,n.S0)(t)?Number(t)<c.length:(0,n.RI)(c,t),o=Reflect.set(c,t,i,a);return c===ke(a)&&(r?(0,n.aU)(i,s)&&_(c,"set",t,i,s):_(c,"add",t,i)),o}}function j(e,c){const t=(0,n.RI)(e,c),i=e[c],a=Reflect.deleteProperty(e,c);return a&&t&&_(e,"delete",c,void 0,i),a}function G(e,c){const t=Reflect.has(e,c);return(0,n.yk)(c)&&A.has(c)||N(e,"has",c),t}function W(e){return N(e,"iterate",(0,n.kJ)(e)?"length":H),Reflect.ownKeys(e)}const $={get:T,set:U,deleteProperty:j,has:G,ownKeys:W},K={get:R,set(e,c){return!0},deleteProperty(e,c){return!0}},Z=(0,n.l7)({},$,{get:E,set:q}),Y=e=>e,Q=e=>Reflect.getPrototypeOf(e);function J(e,c,t=!1,n=!1){e=e["__v_raw"];const i=ke(e),a=ke(c);t||(c!==a&&N(i,"get",c),N(i,"get",a));const{has:s}=Q(i),r=n?Y:t?Te:Ae;return s.call(i,c)?r(e.get(c)):s.call(i,a)?r(e.get(a)):void(e!==i&&e.get(c))}function X(e,c=!1){const t=this["__v_raw"],n=ke(t),i=ke(e);return c||(e!==i&&N(n,"has",e),N(n,"has",i)),e===i?t.has(e):t.has(e)||t.has(i)}function ee(e,c=!1){return e=e["__v_raw"],!c&&N(ke(e),"iterate",H),Reflect.get(e,"size",e)}function ce(e){e=ke(e);const c=ke(this),t=Q(c),n=t.has.call(c,e);return n||(c.add(e),_(c,"add",e,e)),this}function te(e,c){c=ke(c);const t=ke(this),{has:i,get:a}=Q(t);let s=i.call(t,e);s||(e=ke(e),s=i.call(t,e));const r=a.call(t,e);return t.set(e,c),s?(0,n.aU)(c,r)&&_(t,"set",e,c,r):_(t,"add",e,c),this}function ne(e){const c=ke(this),{has:t,get:n}=Q(c);let i=t.call(c,e);i||(e=ke(e),i=t.call(c,e));const a=n?n.call(c,e):void 0,s=c.delete(e);return i&&_(c,"delete",e,void 0,a),s}function ie(){const e=ke(this),c=0!==e.size,t=void 0,n=e.clear();return c&&_(e,"clear",void 0,void 0,t),n}function ae(e,c){return function(t,n){const i=this,a=i["__v_raw"],s=ke(a),r=c?Y:e?Te:Ae;return!e&&N(s,"iterate",H),a.forEach(((e,c)=>t.call(n,r(e),r(c),i)))}}function se(e,c,t){return function(...i){const a=this["__v_raw"],s=ke(a),r=(0,n._N)(s),o="entries"===e||e===Symbol.iterator&&r,l="keys"===e&&r,f=a[e](...i),u=t?Y:c?Te:Ae;return!c&&N(s,"iterate",l?V:H),{next(){const{value:e,done:c}=f.next();return c?{value:e,done:c}:{value:o?[u(e[0]),u(e[1])]:u(e),done:c}},[Symbol.iterator](){return this}}}}function re(e){return function(...c){return"delete"!==e&&this}}function oe(){const e={get(e){return J(this,e)},get size(){return ee(this)},has:X,add:ce,set:te,delete:ne,clear:ie,forEach:ae(!1,!1)},c={get(e){return J(this,e,!1,!0)},get size(){return ee(this)},has:X,add:ce,set:te,delete:ne,clear:ie,forEach:ae(!1,!0)},t={get(e){return J(this,e,!0)},get size(){return ee(this,!0)},has(e){return X.call(this,e,!0)},add:re("add"),set:re("set"),delete:re("delete"),clear:re("clear"),forEach:ae(!0,!1)},n={get(e){return J(this,e,!0,!0)},get size(){return ee(this,!0)},has(e){return X.call(this,e,!0)},add:re("add"),set:re("set"),delete:re("delete"),clear:re("clear"),forEach:ae(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=se(i,!1,!1),t[i]=se(i,!0,!1),c[i]=se(i,!1,!0),n[i]=se(i,!0,!0)})),[e,t,c,n]}const[le,fe,ue,he]=oe();function me(e,c){const t=c?e?he:ue:e?fe:le;return(c,i,a)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?c:Reflect.get((0,n.RI)(t,i)&&i in c?t:c,i,a)}const de={get:me(!1,!1)},pe={get:me(!1,!0)},ve={get:me(!0,!1)};const ze=new WeakMap,ge=new WeakMap,He=new WeakMap,Ve=new WeakMap;function Ce(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Me(e){return e["__v_skip"]||!Object.isExtensible(e)?0:Ce((0,n.W7)(e))}function Le(e){return xe(e)?e:we(e,!1,$,de,ze)}function ye(e){return we(e,!1,Z,pe,ge)}function be(e){return we(e,!0,K,ve,He)}function we(e,c,t,i,a){if(!(0,n.Kn)(e))return e;if(e["__v_raw"]&&(!c||!e["__v_isReactive"]))return e;const s=a.get(e);if(s)return s;const r=Me(e);if(0===r)return e;const o=new Proxy(e,2===r?i:t);return a.set(e,o),o}function Ne(e){return xe(e)?Ne(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function xe(e){return!(!e||!e["__v_isReadonly"])}function _e(e){return!(!e||!e["__v_isShallow"])}function Se(e){return Ne(e)||xe(e)}function ke(e){const c=e&&e["__v_raw"];return c?ke(c):e}function Ie(e){return(0,n.Nj)(e,"__v_skip",!0),e}const Ae=e=>(0,n.Kn)(e)?Le(e):e,Te=e=>(0,n.Kn)(e)?be(e):e;function Ee(e){L&&g&&(e=ke(e),x(e.dep||(e.dep=l())))}function Re(e,c){e=ke(e);const t=e.dep;t&&S(t)}function Pe(e){return!(!e||!0!==e.__v_isRef)}function De(e){return Fe(e,!1)}function Oe(e){return Fe(e,!0)}function Fe(e,c){return Pe(e)?e:new Ue(e,c)}class Ue{constructor(e,c){this.__v_isShallow=c,this.dep=void 0,this.__v_isRef=!0,this._rawValue=c?e:ke(e),this._value=c?e:Ae(e)}get value(){return Ee(this),this._value}set value(e){const c=this.__v_isShallow||_e(e)||xe(e);e=c?e:ke(e),(0,n.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=c?e:Ae(e),Re(this,e))}}function qe(e){return Pe(e)?e.value:e}const Be={get:(e,c,t)=>qe(Reflect.get(e,c,t)),set:(e,c,t,n)=>{const i=e[c];return Pe(i)&&!Pe(t)?(i.value=t,!0):Reflect.set(e,c,t,n)}};function je(e){return Ne(e)?e:new Proxy(e,Be)}class Ge{constructor(e,c,t,n){this._setter=c,this.dep=void 0,this.__v_isRef=!0,this["__v_isReadonly"]=!1,this._dirty=!0,this.effect=new C(e,(()=>{this._dirty||(this._dirty=!0,Re(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!n,this["__v_isReadonly"]=t}get value(){const e=ke(this);return Ee(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function We(e,c,t=!1){let i,a;const s=(0,n.mf)(e);s?(i=e,a=n.dG):(i=e.get,a=e.set);const r=new Ge(i,a,s||!a,t);return r}},252:function(e,c,t){t.d(c,{$d:function(){return s},Ah:function(){return _e},FN:function(){return Mt},Fl:function(){return Ut},HY:function(){return qc},Ho:function(){return ft},JJ:function(){return pc},Ko:function(){return qe},LL:function(){return De},P$:function(){return ne},Q2:function(){return Oe},Q6:function(){return le},RC:function(){return he},U2:function(){return ae},Uk:function(){return ut},Us:function(){return Rc},WI:function(){return Be},Wm:function(){return rt},Y3:function(){return g},Y8:function(){return X},YP:function(){return W},_:function(){return st},aZ:function(){return fe},bv:function(){return be},dG:function(){return vt},f3:function(){return vc},h:function(){return qt},iD:function(){return Xc},ic:function(){return Ne},j4:function(){return et},kq:function(){return ht},lA:function(){return ct},m0:function(){return j},nJ:function(){return ce},nK:function(){return oe},up:function(){return Re},w5:function(){return E},wF:function(){return ye},wg:function(){return Kc},wy:function(){return Q},xv:function(){return Bc}});var n=t(262),i=t(577);function a(e,c,t,n){let i;try{i=n?e(...n):e()}catch(a){r(a,c,t)}return i}function s(e,c,t,n){if((0,i.mf)(e)){const s=a(e,c,t,n);return s&&(0,i.tI)(s)&&s.catch((e=>{r(e,c,t)})),s}const o=[];for(let i=0;i<e.length;i++)o.push(s(e[i],c,t,n));return o}function r(e,c,t,n=!0){const i=c?c.vnode:null;if(c){let n=c.parent;const i=c.proxy,s=t;while(n){const c=n.ec;if(c)for(let t=0;t<c.length;t++)if(!1===c[t](e,i,s))return;n=n.parent}const r=c.appContext.config.errorHandler;if(r)return void a(r,null,10,[e,i,s])}o(e,t,i,n)}function o(e,c,t,n=!0){console.error(e)}let l=!1,f=!1;const u=[];let h=0;const m=[];let d=null,p=0;const v=Promise.resolve();let z=null;function g(e){const c=z||v;return e?c.then(this?e.bind(this):e):c}function H(e){let c=h+1,t=u.length;while(c<t){const n=c+t>>>1,i=w(u[n]);i<e?c=n+1:t=n}return c}function V(e){u.length&&u.includes(e,l&&e.allowRecurse?h+1:h)||(null==e.id?u.push(e):u.splice(H(e.id),0,e),C())}function C(){l||f||(f=!0,z=v.then(x))}function M(e){const c=u.indexOf(e);c>h&&u.splice(c,1)}function L(e){(0,i.kJ)(e)?m.push(...e):d&&d.includes(e,e.allowRecurse?p+1:p)||m.push(e),C()}function y(e,c=(l?h+1:0)){for(0;c<u.length;c++){const e=u[c];e&&e.pre&&(u.splice(c,1),c--,e())}}function b(e){if(m.length){const e=[...new Set(m)];if(m.length=0,d)return void d.push(...e);for(d=e,d.sort(((e,c)=>w(e)-w(c))),p=0;p<d.length;p++)d[p]();d=null,p=0}}const w=e=>null==e.id?1/0:e.id,N=(e,c)=>{const t=w(e)-w(c);if(0===t){if(e.pre&&!c.pre)return-1;if(c.pre&&!e.pre)return 1}return t};function x(e){f=!1,l=!0,u.sort(N);i.dG;try{for(h=0;h<u.length;h++){const e=u[h];e&&!1!==e.active&&a(e,null,14)}}finally{h=0,u.length=0,b(e),l=!1,z=null,(u.length||m.length)&&x(e)}}function _(e,c,...t){if(e.isUnmounted)return;const n=e.vnode.props||i.kT;let a=t;const r=c.startsWith("update:"),o=r&&c.slice(7);if(o&&o in n){const e=`${"modelValue"===o?"model":o}Modifiers`,{number:c,trim:s}=n[e]||i.kT;s&&(a=t.map((e=>(0,i.HD)(e)?e.trim():e))),c&&(a=t.map(i.h5))}let l;let f=n[l=(0,i.hR)(c)]||n[l=(0,i.hR)((0,i._A)(c))];!f&&r&&(f=n[l=(0,i.hR)((0,i.rs)(c))]),f&&s(f,e,6,a);const u=n[l+"Once"];if(u){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,s(u,e,6,a)}}function S(e,c,t=!1){const n=c.emitsCache,a=n.get(e);if(void 0!==a)return a;const s=e.emits;let r={},o=!1;if(!(0,i.mf)(e)){const n=e=>{const t=S(e,c,!0);t&&(o=!0,(0,i.l7)(r,t))};!t&&c.mixins.length&&c.mixins.forEach(n),e.extends&&n(e.extends),e.mixins&&e.mixins.forEach(n)}return s||o?((0,i.kJ)(s)?s.forEach((e=>r[e]=null)):(0,i.l7)(r,s),(0,i.Kn)(e)&&n.set(e,r),r):((0,i.Kn)(e)&&n.set(e,null),null)}function k(e,c){return!(!e||!(0,i.F7)(c))&&(c=c.slice(2).replace(/Once$/,""),(0,i.RI)(e,c[0].toLowerCase()+c.slice(1))||(0,i.RI)(e,(0,i.rs)(c))||(0,i.RI)(e,c))}let I=null,A=null;function T(e){const c=I;return I=e,A=e&&e.type.__scopeId||null,c}function E(e,c=I,t){if(!c)return e;if(e._n)return e;const n=(...t)=>{n._d&&Qc(-1);const i=T(c);let a;try{a=e(...t)}finally{T(i),n._d&&Qc(1)}return a};return n._n=!0,n._c=!0,n._d=!0,n}function R(e){const{type:c,vnode:t,proxy:n,withProxy:a,props:s,propsOptions:[o],slots:l,attrs:f,emit:u,render:h,renderCache:m,data:d,setupState:p,ctx:v,inheritAttrs:z}=e;let g,H;const V=T(e);try{if(4&t.shapeFlag){const e=a||n;g=mt(h.call(e,e,m,s,p,d,v)),H=f}else{const e=c;0,g=mt(e.length>1?e(s,{attrs:f,slots:l,emit:u}):e(s,null)),H=c.props?f:P(f)}}catch(M){Wc.length=0,r(M,e,1),g=rt(jc)}let C=g;if(H&&!1!==z){const e=Object.keys(H),{shapeFlag:c}=C;e.length&&7&c&&(o&&e.some(i.tR)&&(H=D(H,o)),C=ft(C,H))}return t.dirs&&(C=ft(C),C.dirs=C.dirs?C.dirs.concat(t.dirs):t.dirs),t.transition&&(C.transition=t.transition),g=C,T(V),g}const P=e=>{let c;for(const t in e)("class"===t||"style"===t||(0,i.F7)(t))&&((c||(c={}))[t]=e[t]);return c},D=(e,c)=>{const t={};for(const n in e)(0,i.tR)(n)&&n.slice(9)in c||(t[n]=e[n]);return t};function O(e,c,t){const{props:n,children:i,component:a}=e,{props:s,children:r,patchFlag:o}=c,l=a.emitsOptions;if(c.dirs||c.transition)return!0;if(!(t&&o>=0))return!(!i&&!r||r&&r.$stable)||n!==s&&(n?!s||F(n,s,l):!!s);if(1024&o)return!0;if(16&o)return n?F(n,s,l):!!s;if(8&o){const e=c.dynamicProps;for(let c=0;c<e.length;c++){const t=e[c];if(s[t]!==n[t]&&!k(l,t))return!0}}return!1}function F(e,c,t){const n=Object.keys(c);if(n.length!==Object.keys(e).length)return!0;for(let i=0;i<n.length;i++){const a=n[i];if(c[a]!==e[a]&&!k(t,a))return!0}return!1}function U({vnode:e,parent:c},t){while(c&&c.subTree===e)(e=c.vnode).el=t,c=c.parent}const q=e=>e.__isSuspense;function B(e,c){c&&c.pendingBranch?(0,i.kJ)(e)?c.effects.push(...e):c.effects.push(e):L(e)}function j(e,c){return $(e,null,c)}const G={};function W(e,c,t){return $(e,c,t)}function $(e,c,{immediate:t,deep:r,flush:o,onTrack:l,onTrigger:f}=i.kT){var u;const h=(0,n.nZ)()===(null==(u=Ct)?void 0:u.scope)?Ct:null;let m,d,p=!1,v=!1;if((0,n.dq)(e)?(m=()=>e.value,p=(0,n.yT)(e)):(0,n.PG)(e)?(m=()=>e,r=!0):(0,i.kJ)(e)?(v=!0,p=e.some((e=>(0,n.PG)(e)||(0,n.yT)(e))),m=()=>e.map((e=>(0,n.dq)(e)?e.value:(0,n.PG)(e)?Y(e):(0,i.mf)(e)?a(e,h,2):void 0))):m=(0,i.mf)(e)?c?()=>a(e,h,2):()=>{if(!h||!h.isUnmounted)return d&&d(),s(e,h,3,[g])}:i.dG,c&&r){const e=m;m=()=>Y(e())}let z,g=e=>{d=L.onStop=()=>{a(e,h,4)}};if(kt){if(g=i.dG,c?t&&s(c,h,3,[m(),v?[]:void 0,g]):m(),"sync"!==o)return i.dG;{const e=jt();z=e.__watcherHandles||(e.__watcherHandles=[])}}let H=v?new Array(e.length).fill(G):G;const C=()=>{if(L.active)if(c){const e=L.run();(r||p||(v?e.some(((e,c)=>(0,i.aU)(e,H[c]))):(0,i.aU)(e,H)))&&(d&&d(),s(c,h,3,[e,H===G?void 0:v&&H[0]===G?[]:H,g]),H=e)}else L.run()};let M;C.allowRecurse=!!c,"sync"===o?M=C:"post"===o?M=()=>Ec(C,h&&h.suspense):(C.pre=!0,h&&(C.id=h.uid),M=()=>V(C));const L=new n.qq(m,M);c?t?C():H=L.run():"post"===o?Ec(L.run.bind(L),h&&h.suspense):L.run();const y=()=>{L.stop(),h&&h.scope&&(0,i.Od)(h.scope.effects,L)};return z&&z.push(y),y}function K(e,c,t){const n=this.proxy,a=(0,i.HD)(e)?e.includes(".")?Z(n,e):()=>n[e]:e.bind(n,n);let s;(0,i.mf)(c)?s=c:(s=c.handler,t=c);const r=Ct;wt(this);const o=$(a,s.bind(n),t);return r?wt(r):Nt(),o}function Z(e,c){const t=c.split(".");return()=>{let c=e;for(let e=0;e<t.length&&c;e++)c=c[t[e]];return c}}function Y(e,c){if(!(0,i.Kn)(e)||e["__v_skip"])return e;if(c=c||new Set,c.has(e))return e;if(c.add(e),(0,n.dq)(e))Y(e.value,c);else if((0,i.kJ)(e))for(let t=0;t<e.length;t++)Y(e[t],c);else if((0,i.DM)(e)||(0,i._N)(e))e.forEach((e=>{Y(e,c)}));else if((0,i.PO)(e))for(const t in e)Y(e[t],c);return e}function Q(e,c){const t=I;if(null===t)return e;const n=Dt(t)||t.proxy,a=e.dirs||(e.dirs=[]);for(let s=0;s<c.length;s++){let[e,t,r,o=i.kT]=c[s];e&&((0,i.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&Y(t),a.push({dir:e,instance:n,value:t,oldValue:void 0,arg:r,modifiers:o}))}return e}function J(e,c,t,i){const a=e.dirs,r=c&&c.dirs;for(let o=0;o<a.length;o++){const l=a[o];r&&(l.oldValue=r[o].value);let f=l.dir[i];f&&((0,n.Jd)(),s(f,t,8,[e.el,l,e,c]),(0,n.lk)())}}function X(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return be((()=>{e.isMounted=!0})),xe((()=>{e.isUnmounting=!0})),e}const ee=[Function,Array],ce={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ee,onEnter:ee,onAfterEnter:ee,onEnterCancelled:ee,onBeforeLeave:ee,onLeave:ee,onAfterLeave:ee,onLeaveCancelled:ee,onBeforeAppear:ee,onAppear:ee,onAfterAppear:ee,onAppearCancelled:ee},te={name:"BaseTransition",props:ce,setup(e,{slots:c}){const t=Mt(),i=X();let a;return()=>{const s=c.default&&le(c.default(),!0);if(!s||!s.length)return;let r=s[0];if(s.length>1){let e=!1;for(const c of s)if(c.type!==jc){0,r=c,e=!0;break}}const o=(0,n.IU)(e),{mode:l}=o;if(i.isLeaving)return se(r);const f=re(r);if(!f)return se(r);const u=ae(f,o,i,t);oe(f,u);const h=t.subTree,m=h&&re(h);let d=!1;const{getTransitionKey:p}=f.type;if(p){const e=p();void 0===a?a=e:e!==a&&(a=e,d=!0)}if(m&&m.type!==jc&&(!tt(f,m)||d)){const e=ae(m,o,i,t);if(oe(m,e),"out-in"===l)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,!1!==t.update.active&&t.update()},se(r);"in-out"===l&&f.type!==jc&&(e.delayLeave=(e,c,t)=>{const n=ie(i,m);n[String(m.key)]=m,e._leaveCb=()=>{c(),e._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=t})}return r}}},ne=te;function ie(e,c){const{leavingVNodes:t}=e;let n=t.get(c.type);return n||(n=Object.create(null),t.set(c.type,n)),n}function ae(e,c,t,n){const{appear:a,mode:r,persisted:o=!1,onBeforeEnter:l,onEnter:f,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:m,onLeave:d,onAfterLeave:p,onLeaveCancelled:v,onBeforeAppear:z,onAppear:g,onAfterAppear:H,onAppearCancelled:V}=c,C=String(e.key),M=ie(t,e),L=(e,c)=>{e&&s(e,n,9,c)},y=(e,c)=>{const t=c[1];L(e,c),(0,i.kJ)(e)?e.every((e=>e.length<=1))&&t():e.length<=1&&t()},b={mode:r,persisted:o,beforeEnter(c){let n=l;if(!t.isMounted){if(!a)return;n=z||l}c._leaveCb&&c._leaveCb(!0);const i=M[C];i&&tt(e,i)&&i.el._leaveCb&&i.el._leaveCb(),L(n,[c])},enter(e){let c=f,n=u,i=h;if(!t.isMounted){if(!a)return;c=g||f,n=H||u,i=V||h}let s=!1;const r=e._enterCb=c=>{s||(s=!0,L(c?i:n,[e]),b.delayedLeave&&b.delayedLeave(),e._enterCb=void 0)};c?y(c,[e,r]):r()},leave(c,n){const i=String(e.key);if(c._enterCb&&c._enterCb(!0),t.isUnmounting)return n();L(m,[c]);let a=!1;const s=c._leaveCb=t=>{a||(a=!0,n(),L(t?v:p,[c]),c._leaveCb=void 0,M[i]===e&&delete M[i])};M[i]=e,d?y(d,[c,s]):s()},clone(e){return ae(e,c,t,n)}};return b}function se(e){if(de(e))return e=ft(e),e.children=null,e}function re(e){return de(e)?e.children?e.children[0]:void 0:e}function oe(e,c){6&e.shapeFlag&&e.component?oe(e.component.subTree,c):128&e.shapeFlag?(e.ssContent.transition=c.clone(e.ssContent),e.ssFallback.transition=c.clone(e.ssFallback)):e.transition=c}function le(e,c=!1,t){let n=[],i=0;for(let a=0;a<e.length;a++){let s=e[a];const r=null==t?s.key:String(t)+String(null!=s.key?s.key:a);s.type===qc?(128&s.patchFlag&&i++,n=n.concat(le(s.children,c,r))):(c||s.type!==jc)&&n.push(null!=r?ft(s,{key:r}):s)}if(i>1)for(let a=0;a<n.length;a++)n[a].patchFlag=-2;return n}function fe(e,c){return(0,i.mf)(e)?(()=>(0,i.l7)({name:e.name},c,{setup:e}))():e}const ue=e=>!!e.type.__asyncLoader;function he(e){(0,i.mf)(e)&&(e={loader:e});const{loader:c,loadingComponent:t,errorComponent:a,delay:s=200,timeout:o,suspensible:l=!0,onError:f}=e;let u,h=null,m=0;const d=()=>(m++,h=null,p()),p=()=>{let e;return h||(e=h=c().catch((e=>{if(e=e instanceof Error?e:new Error(String(e)),f)return new Promise(((c,t)=>{const n=()=>c(d()),i=()=>t(e);f(e,n,i,m+1)}));throw e})).then((c=>e!==h&&h?h:(c&&(c.__esModule||"Module"===c[Symbol.toStringTag])&&(c=c.default),u=c,c))))};return fe({name:"AsyncComponentWrapper",__asyncLoader:p,get __asyncResolved(){return u},setup(){const e=Ct;if(u)return()=>me(u,e);const c=c=>{h=null,r(c,e,13,!a)};if(l&&e.suspense||kt)return p().then((c=>()=>me(c,e))).catch((e=>(c(e),()=>a?rt(a,{error:e}):null)));const i=(0,n.iH)(!1),f=(0,n.iH)(),m=(0,n.iH)(!!s);return s&&setTimeout((()=>{m.value=!1}),s),null!=o&&setTimeout((()=>{if(!i.value&&!f.value){const e=new Error(`Async component timed out after ${o}ms.`);c(e),f.value=e}}),o),p().then((()=>{i.value=!0,e.parent&&de(e.parent.vnode)&&V(e.parent.update)})).catch((e=>{c(e),f.value=e})),()=>i.value&&u?me(u,e):f.value&&a?rt(a,{error:f.value}):t&&!m.value?rt(t):void 0}})}function me(e,c){const{ref:t,props:n,children:i,ce:a}=c.vnode,s=rt(e,n,i);return s.ref=t,s.ce=a,delete c.vnode.ce,s}const de=e=>e.type.__isKeepAlive;RegExp,RegExp;function pe(e,c){return(0,i.kJ)(e)?e.some((e=>pe(e,c))):(0,i.HD)(e)?e.split(",").includes(c):!!(0,i.Kj)(e)&&e.test(c)}function ve(e,c){ge(e,"a",c)}function ze(e,c){ge(e,"da",c)}function ge(e,c,t=Ct){const n=e.__wdc||(e.__wdc=()=>{let c=t;while(c){if(c.isDeactivated)return;c=c.parent}return e()});if(Me(c,n,t),t){let e=t.parent;while(e&&e.parent)de(e.parent.vnode)&&He(n,c,t,e),e=e.parent}}function He(e,c,t,n){const a=Me(c,e,n,!0);_e((()=>{(0,i.Od)(n[c],a)}),t)}function Ve(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Ce(e){return 128&e.shapeFlag?e.ssContent:e}function Me(e,c,t=Ct,i=!1){if(t){const a=t[e]||(t[e]=[]),r=c.__weh||(c.__weh=(...i)=>{if(t.isUnmounted)return;(0,n.Jd)(),wt(t);const a=s(c,t,e,i);return Nt(),(0,n.lk)(),a});return i?a.unshift(r):a.push(r),r}}const Le=e=>(c,t=Ct)=>(!kt||"sp"===e)&&Me(e,((...e)=>c(...e)),t),ye=Le("bm"),be=Le("m"),we=Le("bu"),Ne=Le("u"),xe=Le("bum"),_e=Le("um"),Se=Le("sp"),ke=Le("rtg"),Ie=Le("rtc");function Ae(e,c=Ct){Me("ec",e,c)}const Te="components",Ee="directives";function Re(e,c){return Fe(Te,e,!0,c)||e}const Pe=Symbol.for("v-ndc");function De(e){return(0,i.HD)(e)?Fe(Te,e,!1)||e:e||Pe}function Oe(e){return Fe(Ee,e)}function Fe(e,c,t=!0,n=!1){const a=I||Ct;if(a){const t=a.type;if(e===Te){const e=Ot(t,!1);if(e&&(e===c||e===(0,i._A)(c)||e===(0,i.kC)((0,i._A)(c))))return t}const s=Ue(a[e]||t[e],c)||Ue(a.appContext[e],c);return!s&&n?t:s}}function Ue(e,c){return e&&(e[c]||e[(0,i._A)(c)]||e[(0,i.kC)((0,i._A)(c))])}function qe(e,c,t,n){let a;const s=t&&t[n];if((0,i.kJ)(e)||(0,i.HD)(e)){a=new Array(e.length);for(let t=0,n=e.length;t<n;t++)a[t]=c(e[t],t,void 0,s&&s[t])}else if("number"===typeof e){0,a=new Array(e);for(let t=0;t<e;t++)a[t]=c(t+1,t,void 0,s&&s[t])}else if((0,i.Kn)(e))if(e[Symbol.iterator])a=Array.from(e,((e,t)=>c(e,t,void 0,s&&s[t])));else{const t=Object.keys(e);a=new Array(t.length);for(let n=0,i=t.length;n<i;n++){const i=t[n];a[n]=c(e[i],i,n,s&&s[n])}}else a=[];return t&&(t[n]=a),a}function Be(e,c,t={},n,i){if(I.isCE||I.parent&&ue(I.parent)&&I.parent.isCE)return"default"!==c&&(t.name=c),rt("slot",t,n&&n());let a=e[c];a&&a._c&&(a._d=!1),Kc();const s=a&&je(a(t)),r=et(qc,{key:t.key||s&&s.key||`_${c}`},s||(n?n():[]),s&&1===e._?64:-2);return!i&&r.scopeId&&(r.slotScopeIds=[r.scopeId+"-s"]),a&&a._c&&(a._d=!0),r}function je(e){return e.some((e=>!ct(e)||e.type!==jc&&!(e.type===qc&&!je(e.children))))?e:null}const Ge=e=>e?xt(e)?Dt(e)||e.proxy:Ge(e.parent):null,We=(0,i.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ge(e.parent),$root:e=>Ge(e.root),$emit:e=>e.emit,$options:e=>cc(e),$forceUpdate:e=>e.f||(e.f=()=>V(e.update)),$nextTick:e=>e.n||(e.n=g.bind(e.proxy)),$watch:e=>K.bind(e)}),$e=(e,c)=>e!==i.kT&&!e.__isScriptSetup&&(0,i.RI)(e,c),Ke={get({_:e},c){const{ctx:t,setupState:a,data:s,props:r,accessCache:o,type:l,appContext:f}=e;let u;if("$"!==c[0]){const n=o[c];if(void 0!==n)switch(n){case 1:return a[c];case 2:return s[c];case 4:return t[c];case 3:return r[c]}else{if($e(a,c))return o[c]=1,a[c];if(s!==i.kT&&(0,i.RI)(s,c))return o[c]=2,s[c];if((u=e.propsOptions[0])&&(0,i.RI)(u,c))return o[c]=3,r[c];if(t!==i.kT&&(0,i.RI)(t,c))return o[c]=4,t[c];Ye&&(o[c]=0)}}const h=We[c];let m,d;return h?("$attrs"===c&&(0,n.j)(e,"get",c),h(e)):(m=l.__cssModules)&&(m=m[c])?m:t!==i.kT&&(0,i.RI)(t,c)?(o[c]=4,t[c]):(d=f.config.globalProperties,(0,i.RI)(d,c)?d[c]:void 0)},set({_:e},c,t){const{data:n,setupState:a,ctx:s}=e;return $e(a,c)?(a[c]=t,!0):n!==i.kT&&(0,i.RI)(n,c)?(n[c]=t,!0):!(0,i.RI)(e.props,c)&&(("$"!==c[0]||!(c.slice(1)in e))&&(s[c]=t,!0))},has({_:{data:e,setupState:c,accessCache:t,ctx:n,appContext:a,propsOptions:s}},r){let o;return!!t[r]||e!==i.kT&&(0,i.RI)(e,r)||$e(c,r)||(o=s[0])&&(0,i.RI)(o,r)||(0,i.RI)(n,r)||(0,i.RI)(We,r)||(0,i.RI)(a.config.globalProperties,r)},defineProperty(e,c,t){return null!=t.get?e._.accessCache[c]=0:(0,i.RI)(t,"value")&&this.set(e,c,t.value,null),Reflect.defineProperty(e,c,t)}};function Ze(e){return(0,i.kJ)(e)?e.reduce(((e,c)=>(e[c]=null,e)),{}):e}let Ye=!0;function Qe(e){const c=cc(e),t=e.proxy,a=e.ctx;Ye=!1,c.beforeCreate&&Xe(c.beforeCreate,e,"bc");const{data:s,computed:r,methods:o,watch:l,provide:f,inject:u,created:h,beforeMount:m,mounted:d,beforeUpdate:p,updated:v,activated:z,deactivated:g,beforeDestroy:H,beforeUnmount:V,destroyed:C,unmounted:M,render:L,renderTracked:y,renderTriggered:b,errorCaptured:w,serverPrefetch:N,expose:x,inheritAttrs:_,components:S,directives:k,filters:I}=c,A=null;if(u&&Je(u,a,A),o)for(const n in o){const e=o[n];(0,i.mf)(e)&&(a[n]=e.bind(t))}if(s){0;const c=s.call(t,t);0,(0,i.Kn)(c)&&(e.data=(0,n.qj)(c))}if(Ye=!0,r)for(const n in r){const e=r[n],c=(0,i.mf)(e)?e.bind(t,t):(0,i.mf)(e.get)?e.get.bind(t,t):i.dG;0;const s=!(0,i.mf)(e)&&(0,i.mf)(e.set)?e.set.bind(t):i.dG,o=Ut({get:c,set:s});Object.defineProperty(a,n,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e})}if(l)for(const n in l)ec(l[n],a,t,n);if(f){const e=(0,i.mf)(f)?f.call(t):f;Reflect.ownKeys(e).forEach((c=>{pc(c,e[c])}))}function T(e,c){(0,i.kJ)(c)?c.forEach((c=>e(c.bind(t)))):c&&e(c.bind(t))}if(h&&Xe(h,e,"c"),T(ye,m),T(be,d),T(we,p),T(Ne,v),T(ve,z),T(ze,g),T(Ae,w),T(Ie,y),T(ke,b),T(xe,V),T(_e,M),T(Se,N),(0,i.kJ)(x))if(x.length){const c=e.exposed||(e.exposed={});x.forEach((e=>{Object.defineProperty(c,e,{get:()=>t[e],set:c=>t[e]=c})}))}else e.exposed||(e.exposed={});L&&e.render===i.dG&&(e.render=L),null!=_&&(e.inheritAttrs=_),S&&(e.components=S),k&&(e.directives=k)}function Je(e,c,t=i.dG){(0,i.kJ)(e)&&(e=sc(e));for(const a in e){const t=e[a];let s;s=(0,i.Kn)(t)?"default"in t?vc(t.from||a,t.default,!0):vc(t.from||a):vc(t),(0,n.dq)(s)?Object.defineProperty(c,a,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):c[a]=s}}function Xe(e,c,t){s((0,i.kJ)(e)?e.map((e=>e.bind(c.proxy))):e.bind(c.proxy),c,t)}function ec(e,c,t,n){const a=n.includes(".")?Z(t,n):()=>t[n];if((0,i.HD)(e)){const t=c[e];(0,i.mf)(t)&&W(a,t)}else if((0,i.mf)(e))W(a,e.bind(t));else if((0,i.Kn)(e))if((0,i.kJ)(e))e.forEach((e=>ec(e,c,t,n)));else{const n=(0,i.mf)(e.handler)?e.handler.bind(t):c[e.handler];(0,i.mf)(n)&&W(a,n,e)}else 0}function cc(e){const c=e.type,{mixins:t,extends:n}=c,{mixins:a,optionsCache:s,config:{optionMergeStrategies:r}}=e.appContext,o=s.get(c);let l;return o?l=o:a.length||t||n?(l={},a.length&&a.forEach((e=>tc(l,e,r,!0))),tc(l,c,r)):l=c,(0,i.Kn)(c)&&s.set(c,l),l}function tc(e,c,t,n=!1){const{mixins:i,extends:a}=c;a&&tc(e,a,t,!0),i&&i.forEach((c=>tc(e,c,t,!0)));for(const s in c)if(n&&"expose"===s);else{const n=nc[s]||t&&t[s];e[s]=n?n(e[s],c[s]):c[s]}return e}const nc={data:ic,props:lc,emits:lc,methods:oc,computed:oc,beforeCreate:rc,created:rc,beforeMount:rc,mounted:rc,beforeUpdate:rc,updated:rc,beforeDestroy:rc,beforeUnmount:rc,destroyed:rc,unmounted:rc,activated:rc,deactivated:rc,errorCaptured:rc,serverPrefetch:rc,components:oc,directives:oc,watch:fc,provide:ic,inject:ac};function ic(e,c){return c?e?function(){return(0,i.l7)((0,i.mf)(e)?e.call(this,this):e,(0,i.mf)(c)?c.call(this,this):c)}:c:e}function ac(e,c){return oc(sc(e),sc(c))}function sc(e){if((0,i.kJ)(e)){const c={};for(let t=0;t<e.length;t++)c[e[t]]=e[t];return c}return e}function rc(e,c){return e?[...new Set([].concat(e,c))]:c}function oc(e,c){return e?(0,i.l7)(Object.create(null),e,c):c}function lc(e,c){return e?(0,i.kJ)(e)&&(0,i.kJ)(c)?[...new Set([...e,...c])]:(0,i.l7)(Object.create(null),Ze(e),Ze(null!=c?c:{})):c}function fc(e,c){if(!e)return c;if(!c)return e;const t=(0,i.l7)(Object.create(null),e);for(const n in c)t[n]=rc(e[n],c[n]);return t}function uc(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hc=0;function mc(e,c){return function(t,n=null){(0,i.mf)(t)||(t=(0,i.l7)({},t)),null==n||(0,i.Kn)(n)||(n=null);const a=uc();const s=new Set;let r=!1;const o=a.app={_uid:hc++,_component:t,_props:n,_container:null,_context:a,_instance:null,version:Gt,get config(){return a.config},set config(e){0},use(e,...c){return s.has(e)||(e&&(0,i.mf)(e.install)?(s.add(e),e.install(o,...c)):(0,i.mf)(e)&&(s.add(e),e(o,...c))),o},mixin(e){return a.mixins.includes(e)||a.mixins.push(e),o},component(e,c){return c?(a.components[e]=c,o):a.components[e]},directive(e,c){return c?(a.directives[e]=c,o):a.directives[e]},mount(i,s,l){if(!r){0;const f=rt(t,n);return f.appContext=a,s&&c?c(f,i):e(f,i,l),r=!0,o._container=i,i.__vue_app__=o,Dt(f.component)||f.component.proxy}},unmount(){r&&(e(null,o._container),delete o._container.__vue_app__)},provide(e,c){return a.provides[e]=c,o},runWithContext(e){dc=o;try{return e()}finally{dc=null}}};return o}}let dc=null;function pc(e,c){if(Ct){let t=Ct.provides;const n=Ct.parent&&Ct.parent.provides;n===t&&(t=Ct.provides=Object.create(n)),t[e]=c}else 0}function vc(e,c,t=!1){const n=Ct||I;if(n||dc){const a=n?null==n.parent?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:dc._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return t&&(0,i.mf)(c)?c.call(n&&n.proxy):c}else 0}function zc(e,c,t,a=!1){const s={},r={};(0,i.Nj)(r,nt,1),e.propsDefaults=Object.create(null),Hc(e,c,s,r);for(const n in e.propsOptions[0])n in s||(s[n]=void 0);t?e.props=a?s:(0,n.Um)(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function gc(e,c,t,a){const{props:s,attrs:r,vnode:{patchFlag:o}}=e,l=(0,n.IU)(s),[f]=e.propsOptions;let u=!1;if(!(a||o>0)||16&o){let n;Hc(e,c,s,r)&&(u=!0);for(const a in l)c&&((0,i.RI)(c,a)||(n=(0,i.rs)(a))!==a&&(0,i.RI)(c,n))||(f?!t||void 0===t[a]&&void 0===t[n]||(s[a]=Vc(f,l,a,void 0,e,!0)):delete s[a]);if(r!==l)for(const e in r)c&&(0,i.RI)(c,e)||(delete r[e],u=!0)}else if(8&o){const t=e.vnode.dynamicProps;for(let n=0;n<t.length;n++){let a=t[n];if(k(e.emitsOptions,a))continue;const o=c[a];if(f)if((0,i.RI)(r,a))o!==r[a]&&(r[a]=o,u=!0);else{const c=(0,i._A)(a);s[c]=Vc(f,l,c,o,e,!1)}else o!==r[a]&&(r[a]=o,u=!0)}}u&&(0,n.X$)(e,"set","$attrs")}function Hc(e,c,t,a){const[s,r]=e.propsOptions;let o,l=!1;if(c)for(let n in c){if((0,i.Gg)(n))continue;const f=c[n];let u;s&&(0,i.RI)(s,u=(0,i._A)(n))?r&&r.includes(u)?(o||(o={}))[u]=f:t[u]=f:k(e.emitsOptions,n)||n in a&&f===a[n]||(a[n]=f,l=!0)}if(r){const c=(0,n.IU)(t),a=o||i.kT;for(let n=0;n<r.length;n++){const o=r[n];t[o]=Vc(s,c,o,a[o],e,!(0,i.RI)(a,o))}}return l}function Vc(e,c,t,n,a,s){const r=e[t];if(null!=r){const e=(0,i.RI)(r,"default");if(e&&void 0===n){const e=r.default;if(r.type!==Function&&!r.skipFactory&&(0,i.mf)(e)){const{propsDefaults:i}=a;t in i?n=i[t]:(wt(a),n=i[t]=e.call(null,c),Nt())}else n=e}r[0]&&(s&&!e?n=!1:!r[1]||""!==n&&n!==(0,i.rs)(t)||(n=!0))}return n}function Cc(e,c,t=!1){const n=c.propsCache,a=n.get(e);if(a)return a;const s=e.props,r={},o=[];let l=!1;if(!(0,i.mf)(e)){const n=e=>{l=!0;const[t,n]=Cc(e,c,!0);(0,i.l7)(r,t),n&&o.push(...n)};!t&&c.mixins.length&&c.mixins.forEach(n),e.extends&&n(e.extends),e.mixins&&e.mixins.forEach(n)}if(!s&&!l)return(0,i.Kn)(e)&&n.set(e,i.Z6),i.Z6;if((0,i.kJ)(s))for(let u=0;u<s.length;u++){0;const e=(0,i._A)(s[u]);Mc(e)&&(r[e]=i.kT)}else if(s){0;for(const e in s){const c=(0,i._A)(e);if(Mc(c)){const t=s[e],n=r[c]=(0,i.kJ)(t)||(0,i.mf)(t)?{type:t}:(0,i.l7)({},t);if(n){const e=bc(Boolean,n.type),t=bc(String,n.type);n[0]=e>-1,n[1]=t<0||e<t,(e>-1||(0,i.RI)(n,"default"))&&o.push(c)}}}}const f=[r,o];return(0,i.Kn)(e)&&n.set(e,f),f}function Mc(e){return"$"!==e[0]}function Lc(e){const c=e&&e.toString().match(/^\s*(function|class) (\w+)/);return c?c[2]:null===e?"null":""}function yc(e,c){return Lc(e)===Lc(c)}function bc(e,c){return(0,i.kJ)(c)?c.findIndex((c=>yc(c,e))):(0,i.mf)(c)&&yc(c,e)?0:-1}const wc=e=>"_"===e[0]||"$stable"===e,Nc=e=>(0,i.kJ)(e)?e.map(mt):[mt(e)],xc=(e,c,t)=>{if(c._n)return c;const n=E(((...e)=>Nc(c(...e))),t);return n._c=!1,n},_c=(e,c,t)=>{const n=e._ctx;for(const a in e){if(wc(a))continue;const t=e[a];if((0,i.mf)(t))c[a]=xc(a,t,n);else if(null!=t){0;const e=Nc(t);c[a]=()=>e}}},Sc=(e,c)=>{const t=Nc(c);e.slots.default=()=>t},kc=(e,c)=>{if(32&e.vnode.shapeFlag){const t=c._;t?(e.slots=(0,n.IU)(c),(0,i.Nj)(c,"_",t)):_c(c,e.slots={})}else e.slots={},c&&Sc(e,c);(0,i.Nj)(e.slots,nt,1)},Ic=(e,c,t)=>{const{vnode:n,slots:a}=e;let s=!0,r=i.kT;if(32&n.shapeFlag){const e=c._;e?t&&1===e?s=!1:((0,i.l7)(a,c),t||1!==e||delete a._):(s=!c.$stable,_c(c,a)),r=c}else c&&(Sc(e,c),r={default:1});if(s)for(const i in a)wc(i)||i in r||delete a[i]};function Ac(e,c,t,s,r=!1){if((0,i.kJ)(e))return void e.forEach(((e,n)=>Ac(e,c&&((0,i.kJ)(c)?c[n]:c),t,s,r)));if(ue(s)&&!r)return;const o=4&s.shapeFlag?Dt(s.component)||s.component.proxy:s.el,l=r?null:o,{i:f,r:u}=e;const h=c&&c.r,m=f.refs===i.kT?f.refs={}:f.refs,d=f.setupState;if(null!=h&&h!==u&&((0,i.HD)(h)?(m[h]=null,(0,i.RI)(d,h)&&(d[h]=null)):(0,n.dq)(h)&&(h.value=null)),(0,i.mf)(u))a(u,f,12,[l,m]);else{const c=(0,i.HD)(u),a=(0,n.dq)(u);if(c||a){const n=()=>{if(e.f){const t=c?(0,i.RI)(d,u)?d[u]:m[u]:u.value;r?(0,i.kJ)(t)&&(0,i.Od)(t,o):(0,i.kJ)(t)?t.includes(o)||t.push(o):c?(m[u]=[o],(0,i.RI)(d,u)&&(d[u]=m[u])):(u.value=[o],e.k&&(m[e.k]=u.value))}else c?(m[u]=l,(0,i.RI)(d,u)&&(d[u]=l)):a&&(u.value=l,e.k&&(m[e.k]=l))};l?(n.id=-1,Ec(n,t)):n()}else 0}}function Tc(){}const Ec=B;function Rc(e){return Pc(e)}function Pc(e,c){Tc();const t=(0,i.E9)();t.__VUE__=!0;const{insert:a,remove:s,patchProp:r,createElement:o,createText:l,createComment:f,setText:u,setElementText:h,parentNode:m,nextSibling:d,setScopeId:p=i.dG,insertStaticContent:v}=e,z=(e,c,t,n=null,i=null,a=null,s=!1,r=null,o=!!c.dynamicChildren)=>{if(e===c)return;e&&!tt(e,c)&&(n=X(e),$(e,i,a,!0),e=null),-2===c.patchFlag&&(o=!1,c.dynamicChildren=null);const{type:l,ref:f,shapeFlag:u}=c;switch(l){case Bc:g(e,c,t,n);break;case jc:H(e,c,t,n);break;case Gc:null==e&&C(c,t,n,s);break;case qc:T(e,c,t,n,i,a,s,r,o);break;default:1&u?N(e,c,t,n,i,a,s,r,o):6&u?E(e,c,t,n,i,a,s,r,o):(64&u||128&u)&&l.process(e,c,t,n,i,a,s,r,o,ce)}null!=f&&i&&Ac(f,e&&e.ref,a,c||e,!c)},g=(e,c,t,n)=>{if(null==e)a(c.el=l(c.children),t,n);else{const t=c.el=e.el;c.children!==e.children&&u(t,c.children)}},H=(e,c,t,n)=>{null==e?a(c.el=f(c.children||""),t,n):c.el=e.el},C=(e,c,t,n)=>{[e.el,e.anchor]=v(e.children,c,t,n,e.el,e.anchor)},L=({el:e,anchor:c},t,n)=>{let i;while(e&&e!==c)i=d(e),a(e,t,n),e=i;a(c,t,n)},w=({el:e,anchor:c})=>{let t;while(e&&e!==c)t=d(e),s(e),e=t;s(c)},N=(e,c,t,n,i,a,s,r,o)=>{s=s||"svg"===c.type,null==e?x(c,t,n,i,a,s,r,o):k(e,c,i,a,s,r,o)},x=(e,c,t,n,s,l,f,u)=>{let m,d;const{type:p,props:v,shapeFlag:z,transition:g,dirs:H}=e;if(m=e.el=o(e.type,l,v&&v.is,v),8&z?h(m,e.children):16&z&&S(e.children,m,null,n,s,l&&"foreignObject"!==p,f,u),H&&J(e,null,n,"created"),_(m,e,e.scopeId,f,n),v){for(const c in v)"value"===c||(0,i.Gg)(c)||r(m,c,null,v[c],l,e.children,n,s,Q);"value"in v&&r(m,"value",null,v.value),(d=v.onVnodeBeforeMount)&&zt(d,n,e)}H&&J(e,null,n,"beforeMount");const V=(!s||s&&!s.pendingBranch)&&g&&!g.persisted;V&&g.beforeEnter(m),a(m,c,t),((d=v&&v.onVnodeMounted)||V||H)&&Ec((()=>{d&&zt(d,n,e),V&&g.enter(m),H&&J(e,null,n,"mounted")}),s)},_=(e,c,t,n,i)=>{if(t&&p(e,t),n)for(let a=0;a<n.length;a++)p(e,n[a]);if(i){let t=i.subTree;if(c===t){const c=i.vnode;_(e,c,c.scopeId,c.slotScopeIds,i.parent)}}},S=(e,c,t,n,i,a,s,r,o=0)=>{for(let l=o;l<e.length;l++){const o=e[l]=r?dt(e[l]):mt(e[l]);z(null,o,c,t,n,i,a,s,r)}},k=(e,c,t,n,a,s,o)=>{const l=c.el=e.el;let{patchFlag:f,dynamicChildren:u,dirs:m}=c;f|=16&e.patchFlag;const d=e.props||i.kT,p=c.props||i.kT;let v;t&&Dc(t,!1),(v=p.onVnodeBeforeUpdate)&&zt(v,t,c,e),m&&J(c,e,t,"beforeUpdate"),t&&Dc(t,!0);const z=a&&"foreignObject"!==c.type;if(u?I(e.dynamicChildren,u,l,t,n,z,s):o||B(e,c,l,null,t,n,z,s,!1),f>0){if(16&f)A(l,c,d,p,t,n,a);else if(2&f&&d.class!==p.class&&r(l,"class",null,p.class,a),4&f&&r(l,"style",d.style,p.style,a),8&f){const i=c.dynamicProps;for(let c=0;c<i.length;c++){const s=i[c],o=d[s],f=p[s];f===o&&"value"!==s||r(l,s,o,f,a,e.children,t,n,Q)}}1&f&&e.children!==c.children&&h(l,c.children)}else o||null!=u||A(l,c,d,p,t,n,a);((v=p.onVnodeUpdated)||m)&&Ec((()=>{v&&zt(v,t,c,e),m&&J(c,e,t,"updated")}),n)},I=(e,c,t,n,i,a,s)=>{for(let r=0;r<c.length;r++){const o=e[r],l=c[r],f=o.el&&(o.type===qc||!tt(o,l)||70&o.shapeFlag)?m(o.el):t;z(o,l,f,null,n,i,a,s,!0)}},A=(e,c,t,n,a,s,o)=>{if(t!==n){if(t!==i.kT)for(const l in t)(0,i.Gg)(l)||l in n||r(e,l,t[l],null,o,c.children,a,s,Q);for(const l in n){if((0,i.Gg)(l))continue;const f=n[l],u=t[l];f!==u&&"value"!==l&&r(e,l,u,f,o,c.children,a,s,Q)}"value"in n&&r(e,"value",t.value,n.value)}},T=(e,c,t,n,i,s,r,o,f)=>{const u=c.el=e?e.el:l(""),h=c.anchor=e?e.anchor:l("");let{patchFlag:m,dynamicChildren:d,slotScopeIds:p}=c;p&&(o=o?o.concat(p):p),null==e?(a(u,t,n),a(h,t,n),S(c.children,t,h,i,s,r,o,f)):m>0&&64&m&&d&&e.dynamicChildren?(I(e.dynamicChildren,d,t,i,s,r,o),(null!=c.key||i&&c===i.subTree)&&Oc(e,c,!0)):B(e,c,t,h,i,s,r,o,f)},E=(e,c,t,n,i,a,s,r,o)=>{c.slotScopeIds=r,null==e?512&c.shapeFlag?i.ctx.activate(c,t,n,s,o):P(c,t,n,i,a,s,o):D(e,c,o)},P=(e,c,t,n,i,a,s)=>{const r=e.component=Vt(e,n,i);if(de(e)&&(r.ctx.renderer=ce),It(r),r.asyncDep){if(i&&i.registerDep(r,F),!e.el){const e=r.subTree=rt(jc);H(null,e,c,t)}}else F(r,e,c,t,i,a,s)},D=(e,c,t)=>{const n=c.component=e.component;if(O(e,c,t)){if(n.asyncDep&&!n.asyncResolved)return void q(n,c,t);n.next=c,M(n.update),n.update()}else c.el=e.el,n.vnode=c},F=(e,c,t,a,s,r,o)=>{const l=()=>{if(e.isMounted){let c,{next:t,bu:n,u:a,parent:l,vnode:f}=e,u=t;0,Dc(e,!1),t?(t.el=f.el,q(e,t,o)):t=f,n&&(0,i.ir)(n),(c=t.props&&t.props.onVnodeBeforeUpdate)&&zt(c,l,t,f),Dc(e,!0);const h=R(e);0;const d=e.subTree;e.subTree=h,z(d,h,m(d.el),X(d),e,s,r),t.el=h.el,null===u&&U(e,h.el),a&&Ec(a,s),(c=t.props&&t.props.onVnodeUpdated)&&Ec((()=>zt(c,l,t,f)),s)}else{let n;const{el:o,props:l}=c,{bm:f,m:u,parent:h}=e,m=ue(c);if(Dc(e,!1),f&&(0,i.ir)(f),!m&&(n=l&&l.onVnodeBeforeMount)&&zt(n,h,c),Dc(e,!0),o&&ne){const t=()=>{e.subTree=R(e),ne(o,e.subTree,e,s,null)};m?c.type.__asyncLoader().then((()=>!e.isUnmounted&&t())):t()}else{0;const n=e.subTree=R(e);0,z(null,n,t,a,e,s,r),c.el=n.el}if(u&&Ec(u,s),!m&&(n=l&&l.onVnodeMounted)){const e=c;Ec((()=>zt(n,h,e)),s)}(256&c.shapeFlag||h&&ue(h.vnode)&&256&h.vnode.shapeFlag)&&e.a&&Ec(e.a,s),e.isMounted=!0,c=t=a=null}},f=e.effect=new n.qq(l,(()=>V(u)),e.scope),u=e.update=()=>f.run();u.id=e.uid,Dc(e,!0),u()},q=(e,c,t)=>{c.component=e;const i=e.vnode.props;e.vnode=c,e.next=null,gc(e,c.props,i,t),Ic(e,c.children,t),(0,n.Jd)(),y(),(0,n.lk)()},B=(e,c,t,n,i,a,s,r,o=!1)=>{const l=e&&e.children,f=e?e.shapeFlag:0,u=c.children,{patchFlag:m,shapeFlag:d}=c;if(m>0){if(128&m)return void G(l,u,t,n,i,a,s,r,o);if(256&m)return void j(l,u,t,n,i,a,s,r,o)}8&d?(16&f&&Q(l,i,a),u!==l&&h(t,u)):16&f?16&d?G(l,u,t,n,i,a,s,r,o):Q(l,i,a,!0):(8&f&&h(t,""),16&d&&S(u,t,n,i,a,s,r,o))},j=(e,c,t,n,a,s,r,o,l)=>{e=e||i.Z6,c=c||i.Z6;const f=e.length,u=c.length,h=Math.min(f,u);let m;for(m=0;m<h;m++){const n=c[m]=l?dt(c[m]):mt(c[m]);z(e[m],n,t,null,a,s,r,o,l)}f>u?Q(e,a,s,!0,!1,h):S(c,t,n,a,s,r,o,l,h)},G=(e,c,t,n,a,s,r,o,l)=>{let f=0;const u=c.length;let h=e.length-1,m=u-1;while(f<=h&&f<=m){const n=e[f],i=c[f]=l?dt(c[f]):mt(c[f]);if(!tt(n,i))break;z(n,i,t,null,a,s,r,o,l),f++}while(f<=h&&f<=m){const n=e[h],i=c[m]=l?dt(c[m]):mt(c[m]);if(!tt(n,i))break;z(n,i,t,null,a,s,r,o,l),h--,m--}if(f>h){if(f<=m){const e=m+1,i=e<u?c[e].el:n;while(f<=m)z(null,c[f]=l?dt(c[f]):mt(c[f]),t,i,a,s,r,o,l),f++}}else if(f>m)while(f<=h)$(e[f],a,s,!0),f++;else{const d=f,p=f,v=new Map;for(f=p;f<=m;f++){const e=c[f]=l?dt(c[f]):mt(c[f]);null!=e.key&&v.set(e.key,f)}let g,H=0;const V=m-p+1;let C=!1,M=0;const L=new Array(V);for(f=0;f<V;f++)L[f]=0;for(f=d;f<=h;f++){const n=e[f];if(H>=V){$(n,a,s,!0);continue}let i;if(null!=n.key)i=v.get(n.key);else for(g=p;g<=m;g++)if(0===L[g-p]&&tt(n,c[g])){i=g;break}void 0===i?$(n,a,s,!0):(L[i-p]=f+1,i>=M?M=i:C=!0,z(n,c[i],t,null,a,s,r,o,l),H++)}const y=C?Fc(L):i.Z6;for(g=y.length-1,f=V-1;f>=0;f--){const e=p+f,i=c[e],h=e+1<u?c[e+1].el:n;0===L[f]?z(null,i,t,h,a,s,r,o,l):C&&(g<0||f!==y[g]?W(i,t,h,2):g--)}}},W=(e,c,t,n,i=null)=>{const{el:s,type:r,transition:o,children:l,shapeFlag:f}=e;if(6&f)return void W(e.component.subTree,c,t,n);if(128&f)return void e.suspense.move(c,t,n);if(64&f)return void r.move(e,c,t,ce);if(r===qc){a(s,c,t);for(let e=0;e<l.length;e++)W(l[e],c,t,n);return void a(e.anchor,c,t)}if(r===Gc)return void L(e,c,t);const u=2!==n&&1&f&&o;if(u)if(0===n)o.beforeEnter(s),a(s,c,t),Ec((()=>o.enter(s)),i);else{const{leave:e,delayLeave:n,afterLeave:i}=o,r=()=>a(s,c,t),l=()=>{e(s,(()=>{r(),i&&i()}))};n?n(s,r,l):l()}else a(s,c,t)},$=(e,c,t,n=!1,i=!1)=>{const{type:a,props:s,ref:r,children:o,dynamicChildren:l,shapeFlag:f,patchFlag:u,dirs:h}=e;if(null!=r&&Ac(r,null,t,e,!0),256&f)return void c.ctx.deactivate(e);const m=1&f&&h,d=!ue(e);let p;if(d&&(p=s&&s.onVnodeBeforeUnmount)&&zt(p,c,e),6&f)Y(e.component,t,n);else{if(128&f)return void e.suspense.unmount(t,n);m&&J(e,null,c,"beforeUnmount"),64&f?e.type.remove(e,c,t,i,ce,n):l&&(a!==qc||u>0&&64&u)?Q(l,c,t,!1,!0):(a===qc&&384&u||!i&&16&f)&&Q(o,c,t),n&&K(e)}(d&&(p=s&&s.onVnodeUnmounted)||m)&&Ec((()=>{p&&zt(p,c,e),m&&J(e,null,c,"unmounted")}),t)},K=e=>{const{type:c,el:t,anchor:n,transition:i}=e;if(c===qc)return void Z(t,n);if(c===Gc)return void w(e);const a=()=>{s(t),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:c,delayLeave:n}=i,s=()=>c(t,a);n?n(e.el,a,s):s()}else a()},Z=(e,c)=>{let t;while(e!==c)t=d(e),s(e),e=t;s(c)},Y=(e,c,t)=>{const{bum:n,scope:a,update:s,subTree:r,um:o}=e;n&&(0,i.ir)(n),a.stop(),s&&(s.active=!1,$(r,e,c,t)),o&&Ec(o,c),Ec((()=>{e.isUnmounted=!0}),c),c&&c.pendingBranch&&!c.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===c.pendingId&&(c.deps--,0===c.deps&&c.resolve())},Q=(e,c,t,n=!1,i=!1,a=0)=>{for(let s=a;s<e.length;s++)$(e[s],c,t,n,i)},X=e=>6&e.shapeFlag?X(e.component.subTree):128&e.shapeFlag?e.suspense.next():d(e.anchor||e.el),ee=(e,c,t)=>{null==e?c._vnode&&$(c._vnode,null,null,!0):z(c._vnode||null,e,c,null,null,null,t),y(),b(),c._vnode=e},ce={p:z,um:$,m:W,r:K,mt:P,mc:S,pc:B,pbc:I,n:X,o:e};let te,ne;return c&&([te,ne]=c(ce)),{render:ee,hydrate:te,createApp:mc(ee,te)}}function Dc({effect:e,update:c},t){e.allowRecurse=c.allowRecurse=t}function Oc(e,c,t=!1){const n=e.children,a=c.children;if((0,i.kJ)(n)&&(0,i.kJ)(a))for(let i=0;i<n.length;i++){const e=n[i];let c=a[i];1&c.shapeFlag&&!c.dynamicChildren&&((c.patchFlag<=0||32===c.patchFlag)&&(c=a[i]=dt(a[i]),c.el=e.el),t||Oc(e,c)),c.type===Bc&&(c.el=e.el)}}function Fc(e){const c=e.slice(),t=[0];let n,i,a,s,r;const o=e.length;for(n=0;n<o;n++){const o=e[n];if(0!==o){if(i=t[t.length-1],e[i]<o){c[n]=i,t.push(n);continue}a=0,s=t.length-1;while(a<s)r=a+s>>1,e[t[r]]<o?a=r+1:s=r;o<e[t[a]]&&(a>0&&(c[n]=t[a-1]),t[a]=n)}}a=t.length,s=t[a-1];while(a-- >0)t[a]=s,s=c[s];return t}const Uc=e=>e.__isTeleport;const qc=Symbol.for("v-fgt"),Bc=Symbol.for("v-txt"),jc=Symbol.for("v-cmt"),Gc=Symbol.for("v-stc"),Wc=[];let $c=null;function Kc(e=!1){Wc.push($c=e?null:[])}function Zc(){Wc.pop(),$c=Wc[Wc.length-1]||null}let Yc=1;function Qc(e){Yc+=e}function Jc(e){return e.dynamicChildren=Yc>0?$c||i.Z6:null,Zc(),Yc>0&&$c&&$c.push(e),e}function Xc(e,c,t,n,i,a){return Jc(st(e,c,t,n,i,a,!0))}function et(e,c,t,n,i){return Jc(rt(e,c,t,n,i,!0))}function ct(e){return!!e&&!0===e.__v_isVNode}function tt(e,c){return e.type===c.type&&e.key===c.key}const nt="__vInternal",it=({key:e})=>null!=e?e:null,at=({ref:e,ref_key:c,ref_for:t})=>("number"===typeof e&&(e=""+e),null!=e?(0,i.HD)(e)||(0,n.dq)(e)||(0,i.mf)(e)?{i:I,r:e,k:c,f:!!t}:e:null);function st(e,c=null,t=null,n=0,a=null,s=(e===qc?0:1),r=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:c,key:c&&it(c),ref:c&&at(c),scopeId:A,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:I};return o?(pt(l,t),128&s&&e.normalize(l)):t&&(l.shapeFlag|=(0,i.HD)(t)?8:16),Yc>0&&!r&&$c&&(l.patchFlag>0||6&s)&&32!==l.patchFlag&&$c.push(l),l}const rt=ot;function ot(e,c=null,t=null,a=0,s=null,r=!1){if(e&&e!==Pe||(e=jc),ct(e)){const n=ft(e,c,!0);return t&&pt(n,t),Yc>0&&!r&&$c&&(6&n.shapeFlag?$c[$c.indexOf(e)]=n:$c.push(n)),n.patchFlag|=-2,n}if(Ft(e)&&(e=e.__vccOpts),c){c=lt(c);let{class:e,style:t}=c;e&&!(0,i.HD)(e)&&(c.class=(0,i.C_)(e)),(0,i.Kn)(t)&&((0,n.X3)(t)&&!(0,i.kJ)(t)&&(t=(0,i.l7)({},t)),c.style=(0,i.j5)(t))}const o=(0,i.HD)(e)?1:q(e)?128:Uc(e)?64:(0,i.Kn)(e)?4:(0,i.mf)(e)?2:0;return st(e,c,t,a,s,o,r,!0)}function lt(e){return e?(0,n.X3)(e)||nt in e?(0,i.l7)({},e):e:null}function ft(e,c,t=!1){const{props:n,ref:a,patchFlag:s,children:r}=e,o=c?vt(n||{},c):n,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&it(o),ref:c&&c.ref?t&&a?(0,i.kJ)(a)?a.concat(at(c)):[a,at(c)]:at(c):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:c&&e.type!==qc?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ft(e.ssContent),ssFallback:e.ssFallback&&ft(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l}function ut(e=" ",c=0){return rt(Bc,null,e,c)}function ht(e="",c=!1){return c?(Kc(),et(jc,null,e)):rt(jc,null,e)}function mt(e){return null==e||"boolean"===typeof e?rt(jc):(0,i.kJ)(e)?rt(qc,null,e.slice()):"object"===typeof e?dt(e):rt(Bc,null,String(e))}function dt(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:ft(e)}function pt(e,c){let t=0;const{shapeFlag:n}=e;if(null==c)c=null;else if((0,i.kJ)(c))t=16;else if("object"===typeof c){if(65&n){const t=c.default;return void(t&&(t._c&&(t._d=!1),pt(e,t()),t._c&&(t._d=!0)))}{t=32;const n=c._;n||nt in c?3===n&&I&&(1===I.slots._?c._=1:(c._=2,e.patchFlag|=1024)):c._ctx=I}}else(0,i.mf)(c)?(c={default:c,_ctx:I},t=32):(c=String(c),64&n?(t=16,c=[ut(c)]):t=8);e.children=c,e.shapeFlag|=t}function vt(...e){const c={};for(let t=0;t<e.length;t++){const n=e[t];for(const e in n)if("class"===e)c.class!==n.class&&(c.class=(0,i.C_)([c.class,n.class]));else if("style"===e)c.style=(0,i.j5)([c.style,n.style]);else if((0,i.F7)(e)){const t=c[e],a=n[e];!a||t===a||(0,i.kJ)(t)&&t.includes(a)||(c[e]=t?[].concat(t,a):a)}else""!==e&&(c[e]=n[e])}return c}function zt(e,c,t,n=null){s(e,c,7,[t,n])}const gt=uc();let Ht=0;function Vt(e,c,t){const a=e.type,s=(c?c.appContext:e.appContext)||gt,r={uid:Ht++,vnode:e,type:a,parent:c,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new n.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:c?c.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cc(a,s),emitsOptions:S(a,s),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:a.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=c?c.root:r,r.emit=_.bind(null,r),e.ce&&e.ce(r),r}let Ct=null;const Mt=()=>Ct||I;let Lt,yt,bt="__VUE_INSTANCE_SETTERS__";(yt=(0,i.E9)()[bt])||(yt=(0,i.E9)()[bt]=[]),yt.push((e=>Ct=e)),Lt=e=>{yt.length>1?yt.forEach((c=>c(e))):yt[0](e)};const wt=e=>{Lt(e),e.scope.on()},Nt=()=>{Ct&&Ct.scope.off(),Lt(null)};function xt(e){return 4&e.vnode.shapeFlag}let _t,St,kt=!1;function It(e,c=!1){kt=c;const{props:t,children:n}=e.vnode,i=xt(e);zc(e,t,i,c),kc(e,n);const a=i?At(e,c):void 0;return kt=!1,a}function At(e,c){const t=e.type;e.accessCache=Object.create(null),e.proxy=(0,n.Xl)(new Proxy(e.ctx,Ke));const{setup:s}=t;if(s){const t=e.setupContext=s.length>1?Pt(e):null;wt(e),(0,n.Jd)();const o=a(s,e,0,[e.props,t]);if((0,n.lk)(),Nt(),(0,i.tI)(o)){if(o.then(Nt,Nt),c)return o.then((t=>{Tt(e,t,c)})).catch((c=>{r(c,e,0)}));e.asyncDep=o}else Tt(e,o,c)}else Et(e,c)}function Tt(e,c,t){(0,i.mf)(c)?e.type.__ssrInlineRender?e.ssrRender=c:e.render=c:(0,i.Kn)(c)&&(e.setupState=(0,n.WL)(c)),Et(e,t)}function Et(e,c,t){const a=e.type;if(!e.render){if(!c&&_t&&!a.render){const c=a.template||cc(e).template;if(c){0;const{isCustomElement:t,compilerOptions:n}=e.appContext.config,{delimiters:s,compilerOptions:r}=a,o=(0,i.l7)((0,i.l7)({isCustomElement:t,delimiters:s},n),r);a.render=_t(c,o)}}e.render=a.render||i.dG,St&&St(e)}wt(e),(0,n.Jd)(),Qe(e),(0,n.lk)(),Nt()}function Rt(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(c,t){return(0,n.j)(e,"get","$attrs"),c[t]}}))}function Pt(e){const c=c=>{e.exposed=c||{}};return{get attrs(){return Rt(e)},slots:e.slots,emit:e.emit,expose:c}}function Dt(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,n.WL)((0,n.Xl)(e.exposed)),{get(c,t){return t in c?c[t]:t in We?We[t](e):void 0},has(e,c){return c in e||c in We}}))}function Ot(e,c=!0){return(0,i.mf)(e)?e.displayName||e.name:e.name||c&&e.__name}function Ft(e){return(0,i.mf)(e)&&"__vccOpts"in e}const Ut=(e,c)=>(0,n.Fl)(e,c,kt);function qt(e,c,t){const n=arguments.length;return 2===n?(0,i.Kn)(c)&&!(0,i.kJ)(c)?ct(c)?rt(e,null,[c]):rt(e,c):rt(e,null,c):(n>3?t=Array.prototype.slice.call(arguments,2):3===n&&ct(t)&&(t=[t]),rt(e,c,t))}const Bt=Symbol.for("v-scx"),jt=()=>{{const e=vc(Bt);return e}};const Gt="3.3.4"},963:function(e,c,t){t.d(c,{iM:function(){return ue},nr:function(){return oe},ri:function(){return pe},uT:function(){return E}});var n=t(577),i=t(252),a=t(262);const s="http://www.w3.org/2000/svg",r="undefined"!==typeof document?document:null,o=r&&r.createElement("template"),l={insert:(e,c,t)=>{c.insertBefore(e,t||null)},remove:e=>{const c=e.parentNode;c&&c.removeChild(e)},createElement:(e,c,t,n)=>{const i=c?r.createElementNS(s,e):r.createElement(e,t?{is:t}:void 0);return"select"===e&&n&&null!=n.multiple&&i.setAttribute("multiple",n.multiple),i},createText:e=>r.createTextNode(e),createComment:e=>r.createComment(e),setText:(e,c)=>{e.nodeValue=c},setElementText:(e,c)=>{e.textContent=c},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>r.querySelector(e),setScopeId(e,c){e.setAttribute(c,"")},insertStaticContent(e,c,t,n,i,a){const s=t?t.previousSibling:c.lastChild;if(i&&(i===a||i.nextSibling)){while(1)if(c.insertBefore(i.cloneNode(!0),t),i===a||!(i=i.nextSibling))break}else{o.innerHTML=n?`<svg>${e}</svg>`:e;const i=o.content;if(n){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}c.insertBefore(i,t)}return[s?s.nextSibling:c.firstChild,t?t.previousSibling:c.lastChild]}};function f(e,c,t){const n=e._vtc;n&&(c=(c?[c,...n]:[...n]).join(" ")),null==c?e.removeAttribute("class"):t?e.setAttribute("class",c):e.className=c}function u(e,c,t){const i=e.style,a=(0,n.HD)(t);if(t&&!a){if(c&&!(0,n.HD)(c))for(const e in c)null==t[e]&&m(i,e,"");for(const e in t)m(i,e,t[e])}else{const n=i.display;a?c!==t&&(i.cssText=t):c&&e.removeAttribute("style"),"_vod"in e&&(i.display=n)}}const h=/\s*!important$/;function m(e,c,t){if((0,n.kJ)(t))t.forEach((t=>m(e,c,t)));else if(null==t&&(t=""),c.startsWith("--"))e.setProperty(c,t);else{const i=v(e,c);h.test(t)?e.setProperty((0,n.rs)(i),t.replace(h,""),"important"):e[i]=t}}const d=["Webkit","Moz","ms"],p={};function v(e,c){const t=p[c];if(t)return t;let i=(0,n._A)(c);if("filter"!==i&&i in e)return p[c]=i;i=(0,n.kC)(i);for(let n=0;n<d.length;n++){const t=d[n]+i;if(t in e)return p[c]=t}return c}const z="http://www.w3.org/1999/xlink";function g(e,c,t,i,a){if(i&&c.startsWith("xlink:"))null==t?e.removeAttributeNS(z,c.slice(6,c.length)):e.setAttributeNS(z,c,t);else{const i=(0,n.Pq)(c);null==t||i&&!(0,n.yA)(t)?e.removeAttribute(c):e.setAttribute(c,i?"":t)}}function H(e,c,t,i,a,s,r){if("innerHTML"===c||"textContent"===c)return i&&r(i,a,s),void(e[c]=null==t?"":t);const o=e.tagName;if("value"===c&&"PROGRESS"!==o&&!o.includes("-")){e._value=t;const n="OPTION"===o?e.getAttribute("value"):e.value,i=null==t?"":t;return n!==i&&(e.value=i),void(null==t&&e.removeAttribute(c))}let l=!1;if(""===t||null==t){const i=typeof e[c];"boolean"===i?t=(0,n.yA)(t):null==t&&"string"===i?(t="",l=!0):"number"===i&&(t=0,l=!0)}try{e[c]=t}catch(f){0}l&&e.removeAttribute(c)}function V(e,c,t,n){e.addEventListener(c,t,n)}function C(e,c,t,n){e.removeEventListener(c,t,n)}function M(e,c,t,n,i=null){const a=e._vei||(e._vei={}),s=a[c];if(n&&s)s.value=n;else{const[t,r]=y(c);if(n){const s=a[c]=x(n,i);V(e,t,s,r)}else s&&(C(e,t,s,r),a[c]=void 0)}}const L=/(?:Once|Passive|Capture)$/;function y(e){let c;if(L.test(e)){let t;c={};while(t=e.match(L))e=e.slice(0,e.length-t[0].length),c[t[0].toLowerCase()]=!0}const t=":"===e[2]?e.slice(3):(0,n.rs)(e.slice(2));return[t,c]}let b=0;const w=Promise.resolve(),N=()=>b||(w.then((()=>b=0)),b=Date.now());function x(e,c){const t=e=>{if(e._vts){if(e._vts<=t.attached)return}else e._vts=Date.now();(0,i.$d)(_(e,t.value),c,5,[e])};return t.value=e,t.attached=N(),t}function _(e,c){if((0,n.kJ)(c)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},c.map((e=>c=>!c._stopped&&e&&e(c)))}return c}const S=/^on[a-z]/,k=(e,c,t,i,a=!1,s,r,o,l)=>{"class"===c?f(e,i,a):"style"===c?u(e,t,i):(0,n.F7)(c)?(0,n.tR)(c)||M(e,c,t,i,r):("."===c[0]?(c=c.slice(1),1):"^"===c[0]?(c=c.slice(1),0):I(e,c,i,a))?H(e,c,i,s,r,o,l):("true-value"===c?e._trueValue=i:"false-value"===c&&(e._falseValue=i),g(e,c,i,a))};function I(e,c,t,i){return i?"innerHTML"===c||"textContent"===c||!!(c in e&&S.test(c)&&(0,n.mf)(t)):"spellcheck"!==c&&"draggable"!==c&&"translate"!==c&&("form"!==c&&(("list"!==c||"INPUT"!==e.tagName)&&(("type"!==c||"TEXTAREA"!==e.tagName)&&((!S.test(c)||!(0,n.HD)(t))&&c in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const A="transition",T="animation",E=(e,{slots:c})=>(0,i.h)(i.P$,F(e),c);E.displayName="Transition";const R={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},P=E.props=(0,n.l7)({},i.nJ,R),D=(e,c=[])=>{(0,n.kJ)(e)?e.forEach((e=>e(...c))):e&&e(...c)},O=e=>!!e&&((0,n.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function F(e){const c={};for(const n in e)n in R||(c[n]=e[n]);if(!1===e.css)return c;const{name:t="v",type:i,duration:a,enterFromClass:s=`${t}-enter-from`,enterActiveClass:r=`${t}-enter-active`,enterToClass:o=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:f=r,appearToClass:u=o,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:m=`${t}-leave-active`,leaveToClass:d=`${t}-leave-to`}=e,p=U(a),v=p&&p[0],z=p&&p[1],{onBeforeEnter:g,onEnter:H,onEnterCancelled:V,onLeave:C,onLeaveCancelled:M,onBeforeAppear:L=g,onAppear:y=H,onAppearCancelled:b=V}=c,w=(e,c,t)=>{j(e,c?u:o),j(e,c?f:r),t&&t()},N=(e,c)=>{e._isLeaving=!1,j(e,h),j(e,d),j(e,m),c&&c()},x=e=>(c,t)=>{const n=e?y:H,a=()=>w(c,e,t);D(n,[c,a]),G((()=>{j(c,e?l:s),B(c,e?u:o),O(n)||$(c,i,v,a)}))};return(0,n.l7)(c,{onBeforeEnter(e){D(g,[e]),B(e,s),B(e,r)},onBeforeAppear(e){D(L,[e]),B(e,l),B(e,f)},onEnter:x(!1),onAppear:x(!0),onLeave(e,c){e._isLeaving=!0;const t=()=>N(e,c);B(e,h),Q(),B(e,m),G((()=>{e._isLeaving&&(j(e,h),B(e,d),O(C)||$(e,i,z,t))})),D(C,[e,t])},onEnterCancelled(e){w(e,!1),D(V,[e])},onAppearCancelled(e){w(e,!0),D(b,[e])},onLeaveCancelled(e){N(e),D(M,[e])}})}function U(e){if(null==e)return null;if((0,n.Kn)(e))return[q(e.enter),q(e.leave)];{const c=q(e);return[c,c]}}function q(e){const c=(0,n.He)(e);return c}function B(e,c){c.split(/\s+/).forEach((c=>c&&e.classList.add(c))),(e._vtc||(e._vtc=new Set)).add(c)}function j(e,c){c.split(/\s+/).forEach((c=>c&&e.classList.remove(c)));const{_vtc:t}=e;t&&(t.delete(c),t.size||(e._vtc=void 0))}function G(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let W=0;function $(e,c,t,n){const i=e._endId=++W,a=()=>{i===e._endId&&n()};if(t)return setTimeout(a,t);const{type:s,timeout:r,propCount:o}=K(e,c);if(!s)return n();const l=s+"end";let f=0;const u=()=>{e.removeEventListener(l,h),a()},h=c=>{c.target===e&&++f>=o&&u()};setTimeout((()=>{f<o&&u()}),r+1),e.addEventListener(l,h)}function K(e,c){const t=window.getComputedStyle(e),n=e=>(t[e]||"").split(", "),i=n(`${A}Delay`),a=n(`${A}Duration`),s=Z(i,a),r=n(`${T}Delay`),o=n(`${T}Duration`),l=Z(r,o);let f=null,u=0,h=0;c===A?s>0&&(f=A,u=s,h=a.length):c===T?l>0&&(f=T,u=l,h=o.length):(u=Math.max(s,l),f=u>0?s>l?A:T:null,h=f?f===A?a.length:o.length:0);const m=f===A&&/\b(transform|all)(,|$)/.test(n(`${A}Property`).toString());return{type:f,timeout:u,propCount:h,hasTransform:m}}function Z(e,c){while(e.length<c.length)e=e.concat(e);return Math.max(...c.map(((c,t)=>Y(c)+Y(e[t]))))}function Y(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Q(){return document.body.offsetHeight}const J=new WeakMap,X=new WeakMap,ee={name:"TransitionGroup",props:(0,n.l7)({},P,{tag:String,moveClass:String}),setup(e,{slots:c}){const t=(0,i.FN)(),n=(0,i.Y8)();let s,r;return(0,i.ic)((()=>{if(!s.length)return;const c=e.moveClass||`${e.name||"v"}-move`;if(!ie(s[0].el,t.vnode.el,c))return;s.forEach(ce),s.forEach(te);const n=s.filter(ne);Q(),n.forEach((e=>{const t=e.el,n=t.style;B(t,c),n.transform=n.webkitTransform=n.transitionDuration="";const i=t._moveCb=e=>{e&&e.target!==t||e&&!/transform$/.test(e.propertyName)||(t.removeEventListener("transitionend",i),t._moveCb=null,j(t,c))};t.addEventListener("transitionend",i)}))})),()=>{const o=(0,a.IU)(e),l=F(o);let f=o.tag||i.HY;s=r,r=c.default?(0,i.Q6)(c.default()):[];for(let e=0;e<r.length;e++){const c=r[e];null!=c.key&&(0,i.nK)(c,(0,i.U2)(c,l,n,t))}if(s)for(let e=0;e<s.length;e++){const c=s[e];(0,i.nK)(c,(0,i.U2)(c,l,n,t)),J.set(c,c.el.getBoundingClientRect())}return(0,i.Wm)(f,null,r)}}};ee.props;function ce(e){const c=e.el;c._moveCb&&c._moveCb(),c._enterCb&&c._enterCb()}function te(e){X.set(e,e.el.getBoundingClientRect())}function ne(e){const c=J.get(e),t=X.get(e),n=c.left-t.left,i=c.top-t.top;if(n||i){const c=e.el.style;return c.transform=c.webkitTransform=`translate(${n}px,${i}px)`,c.transitionDuration="0s",e}}function ie(e,c,t){const n=e.cloneNode();e._vtc&&e._vtc.forEach((e=>{e.split(/\s+/).forEach((e=>e&&n.classList.remove(e)))})),t.split(/\s+/).forEach((e=>e&&n.classList.add(e))),n.style.display="none";const i=1===c.nodeType?c:c.parentNode;i.appendChild(n);const{hasTransform:a}=K(n);return i.removeChild(n),a}const ae=e=>{const c=e.props["onUpdate:modelValue"]||!1;return(0,n.kJ)(c)?e=>(0,n.ir)(c,e):c};function se(e){e.target.composing=!0}function re(e){const c=e.target;c.composing&&(c.composing=!1,c.dispatchEvent(new Event("input")))}const oe={created(e,{modifiers:{lazy:c,trim:t,number:i}},a){e._assign=ae(a);const s=i||a.props&&"number"===a.props.type;V(e,c?"change":"input",(c=>{if(c.target.composing)return;let i=e.value;t&&(i=i.trim()),s&&(i=(0,n.h5)(i)),e._assign(i)})),t&&V(e,"change",(()=>{e.value=e.value.trim()})),c||(V(e,"compositionstart",se),V(e,"compositionend",re),V(e,"change",re))},mounted(e,{value:c}){e.value=null==c?"":c},beforeUpdate(e,{value:c,modifiers:{lazy:t,trim:i,number:a}},s){if(e._assign=ae(s),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(t)return;if(i&&e.value.trim()===c)return;if((a||"number"===e.type)&&(0,n.h5)(e.value)===c)return}const r=null==c?"":c;e.value!==r&&(e.value=r)}};const le=["ctrl","shift","alt","meta"],fe={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,c)=>le.some((t=>e[`${t}Key`]&&!c.includes(t)))},ue=(e,c)=>(t,...n)=>{for(let e=0;e<c.length;e++){const n=fe[c[e]];if(n&&n(t,c))return}return e(t,...n)};const he=(0,n.l7)({patchProp:k},l);let me;function de(){return me||(me=(0,i.Us)(he))}const pe=(...e)=>{const c=de().createApp(...e);const{mount:t}=c;return c.mount=e=>{const i=ve(e);if(!i)return;const a=c._component;(0,n.mf)(a)||a.render||a.template||(a.template=i.innerHTML),i.innerHTML="";const s=t(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},c};function ve(e){if((0,n.HD)(e)){const c=document.querySelector(e);return c}return e}},577:function(e,c,t){function n(e,c){const t=Object.create(null),n=e.split(",");for(let i=0;i<n.length;i++)t[n[i]]=!0;return c?e=>!!t[e.toLowerCase()]:e=>!!t[e]}t.d(c,{C_:function(){return J},DM:function(){return z},E9:function(){return j},F7:function(){return l},Gg:function(){return S},HD:function(){return C},He:function(){return q},Kj:function(){return H},Kn:function(){return L},NO:function(){return r},Nj:function(){return F},Od:function(){return h},PO:function(){return x},Pq:function(){return ee},RI:function(){return d},S0:function(){return _},W7:function(){return N},WV:function(){return ne},Z6:function(){return a},_A:function(){return A},_N:function(){return v},aU:function(){return D},dG:function(){return s},e1:function(){return W},fY:function(){return n},h5:function(){return U},hR:function(){return P},hq:function(){return ie},ir:function(){return O},j5:function(){return $},kC:function(){return R},kJ:function(){return p},kT:function(){return i},l7:function(){return u},mf:function(){return V},rs:function(){return E},tI:function(){return y},tR:function(){return f},yA:function(){return ce},yk:function(){return M},zw:function(){return ae}});const i={},a=[],s=()=>{},r=()=>!1,o=/^on[^a-z]/,l=e=>o.test(e),f=e=>e.startsWith("onUpdate:"),u=Object.assign,h=(e,c)=>{const t=e.indexOf(c);t>-1&&e.splice(t,1)},m=Object.prototype.hasOwnProperty,d=(e,c)=>m.call(e,c),p=Array.isArray,v=e=>"[object Map]"===w(e),z=e=>"[object Set]"===w(e),g=e=>"[object Date]"===w(e),H=e=>"[object RegExp]"===w(e),V=e=>"function"===typeof e,C=e=>"string"===typeof e,M=e=>"symbol"===typeof e,L=e=>null!==e&&"object"===typeof e,y=e=>L(e)&&V(e.then)&&V(e.catch),b=Object.prototype.toString,w=e=>b.call(e),N=e=>w(e).slice(8,-1),x=e=>"[object Object]"===w(e),_=e=>C(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,S=n(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),k=e=>{const c=Object.create(null);return t=>{const n=c[t];return n||(c[t]=e(t))}},I=/-(\w)/g,A=k((e=>e.replace(I,((e,c)=>c?c.toUpperCase():"")))),T=/\B([A-Z])/g,E=k((e=>e.replace(T,"-$1").toLowerCase())),R=k((e=>e.charAt(0).toUpperCase()+e.slice(1))),P=k((e=>e?`on${R(e)}`:"")),D=(e,c)=>!Object.is(e,c),O=(e,c)=>{for(let t=0;t<e.length;t++)e[t](c)},F=(e,c,t)=>{Object.defineProperty(e,c,{configurable:!0,enumerable:!1,value:t})},U=e=>{const c=parseFloat(e);return isNaN(c)?e:c},q=e=>{const c=C(e)?Number(e):NaN;return isNaN(c)?e:c};let B;const j=()=>B||(B="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof t.g?t.g:{});const G="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console",W=n(G);function $(e){if(p(e)){const c={};for(let t=0;t<e.length;t++){const n=e[t],i=C(n)?Q(n):$(n);if(i)for(const e in i)c[e]=i[e]}return c}return C(e)||L(e)?e:void 0}const K=/;(?![^(]*\))/g,Z=/:([^]+)/,Y=/\/\*[^]*?\*\//g;function Q(e){const c={};return e.replace(Y,"").split(K).forEach((e=>{if(e){const t=e.split(Z);t.length>1&&(c[t[0].trim()]=t[1].trim())}})),c}function J(e){let c="";if(C(e))c=e;else if(p(e))for(let t=0;t<e.length;t++){const n=J(e[t]);n&&(c+=n+" ")}else if(L(e))for(const t in e)e[t]&&(c+=t+" ");return c.trim()}const X="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ee=n(X);function ce(e){return!!e||""===e}function te(e,c){if(e.length!==c.length)return!1;let t=!0;for(let n=0;t&&n<e.length;n++)t=ne(e[n],c[n]);return t}function ne(e,c){if(e===c)return!0;let t=g(e),n=g(c);if(t||n)return!(!t||!n)&&e.getTime()===c.getTime();if(t=M(e),n=M(c),t||n)return e===c;if(t=p(e),n=p(c),t||n)return!(!t||!n)&&te(e,c);if(t=L(e),n=L(c),t||n){if(!t||!n)return!1;const i=Object.keys(e).length,a=Object.keys(c).length;if(i!==a)return!1;for(const t in e){const n=e.hasOwnProperty(t),i=c.hasOwnProperty(t);if(n&&!i||!n&&i||!ne(e[t],c[t]))return!1}}return String(e)===String(c)}function ie(e,c){return e.findIndex((e=>ne(e,c)))}const ae=e=>C(e)?e:null==e?"":p(e)||L(e)&&(e.toString===b||!V(e.toString))?JSON.stringify(e,se,2):String(e),se=(e,c)=>c&&c.__v_isRef?se(e,c.value):v(c)?{[`Map(${c.size})`]:[...c.entries()].reduce(((e,[c,t])=>(e[`${c} =>`]=t,e)),{})}:z(c)?{[`Set(${c.size})`]:[...c.values()]}:!L(c)||p(c)||x(c)?c:String(c)},150:function(e,c,t){t.d(c,{o:function(){return Lt}});
/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const n="undefined"!==typeof window;const i="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,a=e=>i?Symbol(e):e,s=(e,c,t)=>r({l:e,k:c,s:t}),r=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),o=e=>"number"===typeof e&&isFinite(e),l=e=>"[object Date]"===b(e),f=e=>"[object RegExp]"===b(e),u=e=>w(e)&&0===Object.keys(e).length;function h(e,c){"undefined"!==typeof console&&(console.warn("[intlify] "+e),c&&console.warn(c.stack))}const m=Object.assign;let d;const p=()=>d||(d="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof t.g?t.g:{});function v(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const z=Object.prototype.hasOwnProperty;function g(e,c){return z.call(e,c)}const H=Array.isArray,V=e=>"function"===typeof e,C=e=>"string"===typeof e,M=e=>"boolean"===typeof e,L=e=>null!==e&&"object"===typeof e,y=Object.prototype.toString,b=e=>y.call(e),w=e=>"[object Object]"===b(e),N=e=>null==e?"":H(e)||w(e)&&e.toString===y?JSON.stringify(e,null,2):String(e);
/*!
  * message-compiler v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const x={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,__EXTEND_POINT__:15};x.EXPECTED_TOKEN,x.INVALID_TOKEN_IN_PLACEHOLDER,x.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,x.UNKNOWN_ESCAPE_SEQUENCE,x.INVALID_UNICODE_ESCAPE_SEQUENCE,x.UNBALANCED_CLOSING_BRACE,x.UNTERMINATED_CLOSING_BRACE,x.EMPTY_PLACEHOLDER,x.NOT_ALLOW_NEST_PLACEHOLDER,x.INVALID_LINKED_FORMAT,x.MUST_HAVE_MESSAGES_IN_PLURAL,x.UNEXPECTED_EMPTY_LINKED_MODIFIER,x.UNEXPECTED_EMPTY_LINKED_KEY,x.UNEXPECTED_LEXICAL_ANALYSIS;function _(e,c,t={}){const{domain:n,messages:i,args:a}=t,s=e,r=new SyntaxError(String(s));return r.code=e,c&&(r.location=c),r.domain=n,r}function S(e){throw e}function k(e,c,t){return{line:e,column:c,offset:t}}function I(e,c,t){const n={start:e,end:c};return null!=t&&(n.source=t),n}const A=" ",T="\r",E="\n",R=String.fromCharCode(8232),P=String.fromCharCode(8233);function D(e){const c=e;let t=0,n=1,i=1,a=0;const s=e=>c[e]===T&&c[e+1]===E,r=e=>c[e]===E,o=e=>c[e]===P,l=e=>c[e]===R,f=e=>s(e)||r(e)||o(e)||l(e),u=()=>t,h=()=>n,m=()=>i,d=()=>a,p=e=>s(e)||o(e)||l(e)?E:c[e],v=()=>p(t),z=()=>p(t+a);function g(){return a=0,f(t)&&(n++,i=0),s(t)&&t++,t++,i++,c[t]}function H(){return s(t+a)&&a++,a++,c[t+a]}function V(){t=0,n=1,i=1,a=0}function C(e=0){a=e}function M(){const e=t+a;while(e!==t)g();a=0}return{index:u,line:h,column:m,peekOffset:d,charAt:p,currentChar:v,currentPeek:z,next:g,peek:H,reset:V,resetPeek:C,skipToPeek:M}}const O=void 0,F="'",U="tokenizer";function q(e,c={}){const t=!1!==c.location,n=D(e),i=()=>n.index(),a=()=>k(n.line(),n.column(),n.index()),s=a(),r=i(),o={currentType:14,offset:r,startLoc:s,endLoc:s,lastType:14,lastOffset:r,lastStartLoc:s,lastEndLoc:s,braceNest:0,inLinked:!1,text:""},l=()=>o,{onError:f}=c;function u(e,c,t,...n){const i=l();if(c.column+=t,c.offset+=t,f){const t=I(i.startLoc,c),a=_(e,t,{domain:U,args:n});f(a)}}function h(e,c,n){e.endLoc=a(),e.currentType=c;const i={type:c};return t&&(i.loc=I(e.startLoc,e.endLoc)),null!=n&&(i.value=n),i}const m=e=>h(e,14);function d(e,c){return e.currentChar()===c?(e.next(),c):(u(x.EXPECTED_TOKEN,a(),0,c),"")}function p(e){let c="";while(e.currentPeek()===A||e.currentPeek()===E)c+=e.currentPeek(),e.peek();return c}function v(e){const c=p(e);return e.skipToPeek(),c}function z(e){if(e===O)return!1;const c=e.charCodeAt(0);return c>=97&&c<=122||c>=65&&c<=90||95===c}function g(e){if(e===O)return!1;const c=e.charCodeAt(0);return c>=48&&c<=57}function H(e,c){const{currentType:t}=c;if(2!==t)return!1;p(e);const n=z(e.currentPeek());return e.resetPeek(),n}function V(e,c){const{currentType:t}=c;if(2!==t)return!1;p(e);const n="-"===e.currentPeek()?e.peek():e.currentPeek(),i=g(n);return e.resetPeek(),i}function C(e,c){const{currentType:t}=c;if(2!==t)return!1;p(e);const n=e.currentPeek()===F;return e.resetPeek(),n}function M(e,c){const{currentType:t}=c;if(8!==t)return!1;p(e);const n="."===e.currentPeek();return e.resetPeek(),n}function L(e,c){const{currentType:t}=c;if(9!==t)return!1;p(e);const n=z(e.currentPeek());return e.resetPeek(),n}function y(e,c){const{currentType:t}=c;if(8!==t&&12!==t)return!1;p(e);const n=":"===e.currentPeek();return e.resetPeek(),n}function b(e,c){const{currentType:t}=c;if(10!==t)return!1;const n=()=>{const c=e.currentPeek();return"{"===c?z(e.peek()):!("@"===c||"%"===c||"|"===c||":"===c||"."===c||c===A||!c)&&(c===E?(e.peek(),n()):z(c))},i=n();return e.resetPeek(),i}function w(e){p(e);const c="|"===e.currentPeek();return e.resetPeek(),c}function N(e){const c=p(e),t="%"===e.currentPeek()&&"{"===e.peek();return e.resetPeek(),{isModulo:t,hasSpace:c.length>0}}function S(e,c=!0){const t=(c=!1,n="",i=!1)=>{const a=e.currentPeek();return"{"===a?"%"!==n&&c:"@"!==a&&a?"%"===a?(e.peek(),t(c,"%",!0)):"|"===a?!("%"!==n&&!i)||!(n===A||n===E):a===A?(e.peek(),t(!0,A,i)):a!==E||(e.peek(),t(!0,E,i)):"%"===n||c},n=t();return c&&e.resetPeek(),n}function T(e,c){const t=e.currentChar();return t===O?O:c(t)?(e.next(),t):null}function R(e){const c=e=>{const c=e.charCodeAt(0);return c>=97&&c<=122||c>=65&&c<=90||c>=48&&c<=57||95===c||36===c};return T(e,c)}function P(e){const c=e=>{const c=e.charCodeAt(0);return c>=48&&c<=57};return T(e,c)}function q(e){const c=e=>{const c=e.charCodeAt(0);return c>=48&&c<=57||c>=65&&c<=70||c>=97&&c<=102};return T(e,c)}function B(e){let c="",t="";while(c=P(e))t+=c;return t}function j(e){v(e);const c=e.currentChar();return"%"!==c&&u(x.EXPECTED_TOKEN,a(),0,c),e.next(),"%"}function G(e){let c="";while(1){const t=e.currentChar();if("{"===t||"}"===t||"@"===t||"|"===t||!t)break;if("%"===t){if(!S(e))break;c+=t,e.next()}else if(t===A||t===E)if(S(e))c+=t,e.next();else{if(w(e))break;c+=t,e.next()}else c+=t,e.next()}return c}function W(e){v(e);let c="",t="";while(c=R(e))t+=c;return e.currentChar()===O&&u(x.UNTERMINATED_CLOSING_BRACE,a(),0),t}function $(e){v(e);let c="";return"-"===e.currentChar()?(e.next(),c+=`-${B(e)}`):c+=B(e),e.currentChar()===O&&u(x.UNTERMINATED_CLOSING_BRACE,a(),0),c}function K(e){v(e),d(e,"'");let c="",t="";const n=e=>e!==F&&e!==E;while(c=T(e,n))t+="\\"===c?Z(e):c;const i=e.currentChar();return i===E||i===O?(u(x.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,a(),0),i===E&&(e.next(),d(e,"'")),t):(d(e,"'"),t)}function Z(e){const c=e.currentChar();switch(c){case"\\":case"'":return e.next(),`\\${c}`;case"u":return Y(e,c,4);case"U":return Y(e,c,6);default:return u(x.UNKNOWN_ESCAPE_SEQUENCE,a(),0,c),""}}function Y(e,c,t){d(e,c);let n="";for(let i=0;i<t;i++){const t=q(e);if(!t){u(x.INVALID_UNICODE_ESCAPE_SEQUENCE,a(),0,`\\${c}${n}${e.currentChar()}`);break}n+=t}return`\\${c}${n}`}function Q(e){v(e);let c="",t="";const n=e=>"{"!==e&&"}"!==e&&e!==A&&e!==E;while(c=T(e,n))t+=c;return t}function J(e){let c="",t="";while(c=R(e))t+=c;return t}function X(e){const c=(t=!1,n)=>{const i=e.currentChar();return"{"!==i&&"%"!==i&&"@"!==i&&"|"!==i&&i?i===A?n:i===E?(n+=i,e.next(),c(t,n)):(n+=i,e.next(),c(!0,n)):n};return c(!1,"")}function ee(e){v(e);const c=d(e,"|");return v(e),c}function ce(e,c){let t=null;const n=e.currentChar();switch(n){case"{":return c.braceNest>=1&&u(x.NOT_ALLOW_NEST_PLACEHOLDER,a(),0),e.next(),t=h(c,2,"{"),v(e),c.braceNest++,t;case"}":return c.braceNest>0&&2===c.currentType&&u(x.EMPTY_PLACEHOLDER,a(),0),e.next(),t=h(c,3,"}"),c.braceNest--,c.braceNest>0&&v(e),c.inLinked&&0===c.braceNest&&(c.inLinked=!1),t;case"@":return c.braceNest>0&&u(x.UNTERMINATED_CLOSING_BRACE,a(),0),t=te(e,c)||m(c),c.braceNest=0,t;default:let n=!0,i=!0,s=!0;if(w(e))return c.braceNest>0&&u(x.UNTERMINATED_CLOSING_BRACE,a(),0),t=h(c,1,ee(e)),c.braceNest=0,c.inLinked=!1,t;if(c.braceNest>0&&(5===c.currentType||6===c.currentType||7===c.currentType))return u(x.UNTERMINATED_CLOSING_BRACE,a(),0),c.braceNest=0,ne(e,c);if(n=H(e,c))return t=h(c,5,W(e)),v(e),t;if(i=V(e,c))return t=h(c,6,$(e)),v(e),t;if(s=C(e,c))return t=h(c,7,K(e)),v(e),t;if(!n&&!i&&!s)return t=h(c,13,Q(e)),u(x.INVALID_TOKEN_IN_PLACEHOLDER,a(),0,t.value),v(e),t;break}return t}function te(e,c){const{currentType:t}=c;let n=null;const i=e.currentChar();switch(8!==t&&9!==t&&12!==t&&10!==t||i!==E&&i!==A||u(x.INVALID_LINKED_FORMAT,a(),0),i){case"@":return e.next(),n=h(c,8,"@"),c.inLinked=!0,n;case".":return v(e),e.next(),h(c,9,".");case":":return v(e),e.next(),h(c,10,":");default:return w(e)?(n=h(c,1,ee(e)),c.braceNest=0,c.inLinked=!1,n):M(e,c)||y(e,c)?(v(e),te(e,c)):L(e,c)?(v(e),h(c,12,J(e))):b(e,c)?(v(e),"{"===i?ce(e,c)||n:h(c,11,X(e))):(8===t&&u(x.INVALID_LINKED_FORMAT,a(),0),c.braceNest=0,c.inLinked=!1,ne(e,c))}}function ne(e,c){let t={type:14};if(c.braceNest>0)return ce(e,c)||m(c);if(c.inLinked)return te(e,c)||m(c);const n=e.currentChar();switch(n){case"{":return ce(e,c)||m(c);case"}":return u(x.UNBALANCED_CLOSING_BRACE,a(),0),e.next(),h(c,3,"}");case"@":return te(e,c)||m(c);default:if(w(e))return t=h(c,1,ee(e)),c.braceNest=0,c.inLinked=!1,t;const{isModulo:n,hasSpace:i}=N(e);if(n)return i?h(c,0,G(e)):h(c,4,j(e));if(S(e))return h(c,0,G(e));break}return t}function ie(){const{currentType:e,offset:c,startLoc:t,endLoc:s}=o;return o.lastType=e,o.lastOffset=c,o.lastStartLoc=t,o.lastEndLoc=s,o.offset=i(),o.startLoc=a(),n.currentChar()===O?h(o,14):ne(n,o)}return{nextToken:ie,currentOffset:i,currentPosition:a,context:l}}const B="parser",j=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function G(e,c,t){switch(e){case"\\\\":return"\\";case"\\'":return"'";default:{const e=parseInt(c||t,16);return e<=55295||e>=57344?String.fromCodePoint(e):"�"}}}function W(e={}){const c=!1!==e.location,{onError:t}=e;function n(e,c,n,i,...a){const s=e.currentPosition();if(s.offset+=i,s.column+=i,t){const e=I(n,s),i=_(c,e,{domain:B,args:a});t(i)}}function i(e,t,n){const i={type:e,start:t,end:t};return c&&(i.loc={start:n,end:n}),i}function a(e,t,n,i){e.end=t,i&&(e.type=i),c&&e.loc&&(e.loc.end=n)}function s(e,c){const t=e.context(),n=i(3,t.offset,t.startLoc);return n.value=c,a(n,e.currentOffset(),e.currentPosition()),n}function r(e,c){const t=e.context(),{lastOffset:n,lastStartLoc:s}=t,r=i(5,n,s);return r.index=parseInt(c,10),e.nextToken(),a(r,e.currentOffset(),e.currentPosition()),r}function o(e,c){const t=e.context(),{lastOffset:n,lastStartLoc:s}=t,r=i(4,n,s);return r.key=c,e.nextToken(),a(r,e.currentOffset(),e.currentPosition()),r}function l(e,c){const t=e.context(),{lastOffset:n,lastStartLoc:s}=t,r=i(9,n,s);return r.value=c.replace(j,G),e.nextToken(),a(r,e.currentOffset(),e.currentPosition()),r}function f(e){const c=e.nextToken(),t=e.context(),{lastOffset:s,lastStartLoc:r}=t,o=i(8,s,r);return 12!==c.type?(n(e,x.UNEXPECTED_EMPTY_LINKED_MODIFIER,t.lastStartLoc,0),o.value="",a(o,s,r),{nextConsumeToken:c,node:o}):(null==c.value&&n(e,x.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,$(c)),o.value=c.value||"",a(o,e.currentOffset(),e.currentPosition()),{node:o})}function u(e,c){const t=e.context(),n=i(7,t.offset,t.startLoc);return n.value=c,a(n,e.currentOffset(),e.currentPosition()),n}function h(e){const c=e.context(),t=i(6,c.offset,c.startLoc);let s=e.nextToken();if(9===s.type){const c=f(e);t.modifier=c.node,s=c.nextConsumeToken||e.nextToken()}switch(10!==s.type&&n(e,x.UNEXPECTED_LEXICAL_ANALYSIS,c.lastStartLoc,0,$(s)),s=e.nextToken(),2===s.type&&(s=e.nextToken()),s.type){case 11:null==s.value&&n(e,x.UNEXPECTED_LEXICAL_ANALYSIS,c.lastStartLoc,0,$(s)),t.key=u(e,s.value||"");break;case 5:null==s.value&&n(e,x.UNEXPECTED_LEXICAL_ANALYSIS,c.lastStartLoc,0,$(s)),t.key=o(e,s.value||"");break;case 6:null==s.value&&n(e,x.UNEXPECTED_LEXICAL_ANALYSIS,c.lastStartLoc,0,$(s)),t.key=r(e,s.value||"");break;case 7:null==s.value&&n(e,x.UNEXPECTED_LEXICAL_ANALYSIS,c.lastStartLoc,0,$(s)),t.key=l(e,s.value||"");break;default:n(e,x.UNEXPECTED_EMPTY_LINKED_KEY,c.lastStartLoc,0);const f=e.context(),h=i(7,f.offset,f.startLoc);return h.value="",a(h,f.offset,f.startLoc),t.key=h,a(t,f.offset,f.startLoc),{nextConsumeToken:s,node:t}}return a(t,e.currentOffset(),e.currentPosition()),{node:t}}function d(e){const c=e.context(),t=1===c.currentType?e.currentOffset():c.offset,f=1===c.currentType?c.endLoc:c.startLoc,u=i(2,t,f);u.items=[];let m=null;do{const t=m||e.nextToken();switch(m=null,t.type){case 0:null==t.value&&n(e,x.UNEXPECTED_LEXICAL_ANALYSIS,c.lastStartLoc,0,$(t)),u.items.push(s(e,t.value||""));break;case 6:null==t.value&&n(e,x.UNEXPECTED_LEXICAL_ANALYSIS,c.lastStartLoc,0,$(t)),u.items.push(r(e,t.value||""));break;case 5:null==t.value&&n(e,x.UNEXPECTED_LEXICAL_ANALYSIS,c.lastStartLoc,0,$(t)),u.items.push(o(e,t.value||""));break;case 7:null==t.value&&n(e,x.UNEXPECTED_LEXICAL_ANALYSIS,c.lastStartLoc,0,$(t)),u.items.push(l(e,t.value||""));break;case 8:const i=h(e);u.items.push(i.node),m=i.nextConsumeToken||null;break}}while(14!==c.currentType&&1!==c.currentType);const d=1===c.currentType?c.lastOffset:e.currentOffset(),p=1===c.currentType?c.lastEndLoc:e.currentPosition();return a(u,d,p),u}function p(e,c,t,s){const r=e.context();let o=0===s.items.length;const l=i(1,c,t);l.cases=[],l.cases.push(s);do{const c=d(e);o||(o=0===c.items.length),l.cases.push(c)}while(14!==r.currentType);return o&&n(e,x.MUST_HAVE_MESSAGES_IN_PLURAL,t,0),a(l,e.currentOffset(),e.currentPosition()),l}function v(e){const c=e.context(),{offset:t,startLoc:n}=c,i=d(e);return 14===c.currentType?i:p(e,t,n,i)}function z(t){const s=q(t,m({},e)),r=s.context(),o=i(0,r.offset,r.startLoc);return c&&o.loc&&(o.loc.source=t),o.body=v(s),14!==r.currentType&&n(s,x.UNEXPECTED_LEXICAL_ANALYSIS,r.lastStartLoc,0,t[r.offset]||""),a(o,s.currentOffset(),s.currentPosition()),o}return{parse:z}}function $(e){if(14===e.type)return"EOF";const c=(e.value||"").replace(/\r?\n/gu,"\\n");return c.length>10?c.slice(0,9)+"…":c}function K(e,c={}){const t={ast:e,helpers:new Set},n=()=>t,i=e=>(t.helpers.add(e),e);return{context:n,helper:i}}function Z(e,c){for(let t=0;t<e.length;t++)Y(e[t],c)}function Y(e,c){switch(e.type){case 1:Z(e.cases,c),c.helper("plural");break;case 2:Z(e.items,c);break;case 6:const t=e;Y(t.key,c),c.helper("linked"),c.helper("type");break;case 5:c.helper("interpolate"),c.helper("list");break;case 4:c.helper("interpolate"),c.helper("named");break}}function Q(e,c={}){const t=K(e);t.helper("normalize"),e.body&&Y(e.body,t);const n=t.context();e.helpers=Array.from(n.helpers)}function J(e,c){const{sourceMap:t,filename:n,breakLineCode:i,needIndent:a}=c,s={source:e.loc.source,filename:n,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:i,needIndent:a,indentLevel:0},r=()=>s;function o(e,c){s.code+=e}function l(e,c=!0){const t=c?i:"";o(a?t+"  ".repeat(e):t)}function f(e=!0){const c=++s.indentLevel;e&&l(c)}function u(e=!0){const c=--s.indentLevel;e&&l(c)}function h(){l(s.indentLevel)}const m=e=>`_${e}`,d=()=>s.needIndent;return{context:r,push:o,indent:f,deindent:u,newline:h,helper:m,needIndent:d}}function X(e,c){const{helper:t}=e;e.push(`${t("linked")}(`),ne(e,c.key),c.modifier?(e.push(", "),ne(e,c.modifier),e.push(", _type")):e.push(", undefined, _type"),e.push(")")}function ee(e,c){const{helper:t,needIndent:n}=e;e.push(`${t("normalize")}([`),e.indent(n());const i=c.items.length;for(let a=0;a<i;a++){if(ne(e,c.items[a]),a===i-1)break;e.push(", ")}e.deindent(n()),e.push("])")}function ce(e,c){const{helper:t,needIndent:n}=e;if(c.cases.length>1){e.push(`${t("plural")}([`),e.indent(n());const i=c.cases.length;for(let t=0;t<i;t++){if(ne(e,c.cases[t]),t===i-1)break;e.push(", ")}e.deindent(n()),e.push("])")}}function te(e,c){c.body?ne(e,c.body):e.push("null")}function ne(e,c){const{helper:t}=e;switch(c.type){case 0:te(e,c);break;case 1:ce(e,c);break;case 2:ee(e,c);break;case 6:X(e,c);break;case 8:e.push(JSON.stringify(c.value),c);break;case 7:e.push(JSON.stringify(c.value),c);break;case 5:e.push(`${t("interpolate")}(${t("list")}(${c.index}))`,c);break;case 4:e.push(`${t("interpolate")}(${t("named")}(${JSON.stringify(c.key)}))`,c);break;case 9:e.push(JSON.stringify(c.value),c);break;case 3:e.push(JSON.stringify(c.value),c);break;default:0}}const ie=(e,c={})=>{const t=C(c.mode)?c.mode:"normal",n=C(c.filename)?c.filename:"message.intl",i=!!c.sourceMap,a=null!=c.breakLineCode?c.breakLineCode:"arrow"===t?";":"\n",s=c.needIndent?c.needIndent:"arrow"!==t,r=e.helpers||[],o=J(e,{mode:t,filename:n,sourceMap:i,breakLineCode:a,needIndent:s});o.push("normal"===t?"function __msg__ (ctx) {":"(ctx) => {"),o.indent(s),r.length>0&&(o.push(`const { ${r.map((e=>`${e}: _${e}`)).join(", ")} } = ctx`),o.newline()),o.push("return "),ne(o,e),o.deindent(s),o.push("}");const{code:l,map:f}=o.context();return{ast:e,code:l,map:f?f.toJSON():void 0}};function ae(e,c={}){const t=m({},c),n=W(t),i=n.parse(e);return Q(i,t),ie(i,t)}
/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const se={I18nInit:"i18n:init",FunctionTranslate:"function:translate"},re=[];re[0]={["w"]:[0],["i"]:[3,0],["["]:[4],["o"]:[7]},re[1]={["w"]:[1],["."]:[2],["["]:[4],["o"]:[7]},re[2]={["w"]:[2],["i"]:[3,0],["0"]:[3,0]},re[3]={["i"]:[3,0],["0"]:[3,0],["w"]:[1,1],["."]:[2,1],["["]:[4,1],["o"]:[7,1]},re[4]={["'"]:[5,0],['"']:[6,0],["["]:[4,2],["]"]:[1,3],["o"]:8,["l"]:[4,0]},re[5]={["'"]:[4,0],["o"]:8,["l"]:[5,0]},re[6]={['"']:[4,0],["o"]:8,["l"]:[6,0]};const oe=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function le(e){return oe.test(e)}function fe(e){const c=e.charCodeAt(0),t=e.charCodeAt(e.length-1);return c!==t||34!==c&&39!==c?e:e.slice(1,-1)}function ue(e){if(void 0===e||null===e)return"o";const c=e.charCodeAt(0);switch(c){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function he(e){const c=e.trim();return("0"!==e.charAt(0)||!isNaN(parseInt(e)))&&(le(c)?fe(c):"*"+c)}function me(e){const c=[];let t,n,i,a,s,r,o,l=-1,f=0,u=0;const h=[];function m(){const c=e[l+1];if(5===f&&"'"===c||6===f&&'"'===c)return l++,i="\\"+c,h[0](),!0}h[0]=()=>{void 0===n?n=i:n+=i},h[1]=()=>{void 0!==n&&(c.push(n),n=void 0)},h[2]=()=>{h[0](),u++},h[3]=()=>{if(u>0)u--,f=4,h[0]();else{if(u=0,void 0===n)return!1;if(n=he(n),!1===n)return!1;h[1]()}};while(null!==f)if(l++,t=e[l],"\\"!==t||!m()){if(a=ue(t),o=re[f],s=o[a]||o["l"]||8,8===s)return;if(f=s[0],void 0!==s[1]&&(r=h[s[1]],r&&(i=t,!1===r())))return;if(7===f)return c}}const de=new Map;function pe(e,c){return L(e)?e[c]:null}function ve(e,c){if(!L(e))return null;let t=de.get(c);if(t||(t=me(c),t&&de.set(c,t)),!t)return null;const n=t.length;let i=e,a=0;while(a<n){const e=i[t[a]];if(void 0===e)return null;i=e,a++}return i}const ze=e=>e,ge=e=>"",He="text",Ve=e=>0===e.length?"":e.join(""),Ce=N;function Me(e,c){return e=Math.abs(e),2===c?e?e>1?1:0:1:e?Math.min(e,2):0}function Le(e){const c=o(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(o(e.named.count)||o(e.named.n))?o(e.named.count)?e.named.count:o(e.named.n)?e.named.n:c:c}function ye(e,c){c.count||(c.count=e),c.n||(c.n=e)}function be(e={}){const c=e.locale,t=Le(e),n=L(e.pluralRules)&&C(c)&&V(e.pluralRules[c])?e.pluralRules[c]:Me,i=L(e.pluralRules)&&C(c)&&V(e.pluralRules[c])?Me:void 0,a=e=>e[n(t,e.length,i)],s=e.list||[],r=e=>s[e],l=e.named||{};o(e.pluralIndex)&&ye(t,l);const f=e=>l[e];function u(c){const t=V(e.messages)?e.messages(c):!!L(e.messages)&&e.messages[c];return t||(e.parent?e.parent.message(c):ge)}const h=c=>e.modifiers?e.modifiers[c]:ze,m=w(e.processor)&&V(e.processor.normalize)?e.processor.normalize:Ve,d=w(e.processor)&&V(e.processor.interpolate)?e.processor.interpolate:Ce,p=w(e.processor)&&C(e.processor.type)?e.processor.type:He,v=(e,...c)=>{const[t,n]=c;let i="text",a="";1===c.length?L(t)?(a=t.modifier||a,i=t.type||i):C(t)&&(a=t||a):2===c.length&&(C(t)&&(a=t||a),C(n)&&(i=n||i));let s=u(e)(z);return"vnode"===i&&H(s)&&a&&(s=s[0]),a?h(a)(s,i):s},z={["list"]:r,["named"]:f,["plural"]:a,["linked"]:v,["message"]:u,["type"]:p,["interpolate"]:d,["normalize"]:m};return z}let we=null;function Ne(e){we=e}function xe(e,c,t){we&&we.emit(se.I18nInit,{timestamp:Date.now(),i18n:e,version:c,meta:t})}const _e=Se(se.FunctionTranslate);function Se(e){return c=>we&&we.emit(e,c)}const ke={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,__EXTEND_POINT__:7};ke.NOT_FOUND_KEY,ke.FALLBACK_TO_TRANSLATE,ke.CANNOT_FORMAT_NUMBER,ke.FALLBACK_TO_NUMBER_FORMAT,ke.CANNOT_FORMAT_DATE,ke.FALLBACK_TO_DATE_FORMAT;function Ie(e,c,t){return[...new Set([t,...H(c)?c:L(c)?Object.keys(c):C(c)?[c]:[t]])]}function Ae(e,c,t){const n=C(t)?t:Oe,i=e;i.__localeChainCache||(i.__localeChainCache=new Map);let a=i.__localeChainCache.get(n);if(!a){a=[];let e=[t];while(H(e))e=Te(a,e,c);const s=H(c)||!w(c)?c:c["default"]?c["default"]:null;e=C(s)?[s]:s,H(e)&&Te(a,e,!1),i.__localeChainCache.set(n,a)}return a}function Te(e,c,t){let n=!0;for(let i=0;i<c.length&&M(n);i++){const a=c[i];C(a)&&(n=Ee(e,c[i],t))}return n}function Ee(e,c,t){let n;const i=c.split("-");do{const c=i.join("-");n=Re(e,c,t),i.splice(-1,1)}while(i.length&&!0===n);return n}function Re(e,c,t){let n=!1;if(!e.includes(c)&&(n=!0,c)){n="!"!==c[c.length-1];const i=c.replace(/!/g,"");e.push(i),(H(t)||w(t))&&t[i]&&(n=t[i])}return n}const Pe="9.2.2",De=-1,Oe="en-US",Fe="",Ue=e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;function qe(){return{upper:(e,c)=>"text"===c&&C(e)?e.toUpperCase():"vnode"===c&&L(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,c)=>"text"===c&&C(e)?e.toLowerCase():"vnode"===c&&L(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,c)=>"text"===c&&C(e)?Ue(e):"vnode"===c&&L(e)&&"__v_isVNode"in e?Ue(e.children):e}}let Be,je,Ge;function We(e){Be=e}function $e(e){je=e}function Ke(e){Ge=e}let Ze=null;const Ye=e=>{Ze=e},Qe=()=>Ze;let Je=null;const Xe=e=>{Je=e},ec=()=>Je;let cc=0;function tc(e={}){const c=C(e.version)?e.version:Pe,t=C(e.locale)?e.locale:Oe,n=H(e.fallbackLocale)||w(e.fallbackLocale)||C(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:t,i=w(e.messages)?e.messages:{[t]:{}},a=w(e.datetimeFormats)?e.datetimeFormats:{[t]:{}},s=w(e.numberFormats)?e.numberFormats:{[t]:{}},r=m({},e.modifiers||{},qe()),o=e.pluralRules||{},l=V(e.missing)?e.missing:null,u=!M(e.missingWarn)&&!f(e.missingWarn)||e.missingWarn,d=!M(e.fallbackWarn)&&!f(e.fallbackWarn)||e.fallbackWarn,p=!!e.fallbackFormat,v=!!e.unresolving,z=V(e.postTranslation)?e.postTranslation:null,g=w(e.processor)?e.processor:null,y=!M(e.warnHtmlMessage)||e.warnHtmlMessage,b=!!e.escapeParameter,N=V(e.messageCompiler)?e.messageCompiler:Be,x=V(e.messageResolver)?e.messageResolver:je||pe,_=V(e.localeFallbacker)?e.localeFallbacker:Ge||Ie,S=L(e.fallbackContext)?e.fallbackContext:void 0,k=V(e.onWarn)?e.onWarn:h,I=e,A=L(I.__datetimeFormatters)?I.__datetimeFormatters:new Map,T=L(I.__numberFormatters)?I.__numberFormatters:new Map,E=L(I.__meta)?I.__meta:{};cc++;const R={version:c,cid:cc,locale:t,fallbackLocale:n,messages:i,modifiers:r,pluralRules:o,missing:l,missingWarn:u,fallbackWarn:d,fallbackFormat:p,unresolving:v,postTranslation:z,processor:g,warnHtmlMessage:y,escapeParameter:b,messageCompiler:N,messageResolver:x,localeFallbacker:_,fallbackContext:S,onWarn:k,__meta:E};return R.datetimeFormats=a,R.numberFormats=s,R.__datetimeFormatters=A,R.__numberFormatters=T,__INTLIFY_PROD_DEVTOOLS__&&xe(R,c,E),R}function nc(e,c,t,n,i){const{missing:a,onWarn:s}=e;if(null!==a){const n=a(e,t,c,i);return C(n)?n:c}return c}function ic(e,c,t){const n=e;n.__localeChainCache=new Map,e.localeFallbacker(e,t,c)}const ac=e=>e;let sc=Object.create(null);function rc(e,c={}){{const t=c.onCacheKey||ac,n=t(e),i=sc[n];if(i)return i;let a=!1;const s=c.onError||S;c.onError=e=>{a=!0,s(e)};const{code:r}=ae(e,c),o=new Function(`return ${r}`)();return a?o:sc[n]=o}}let oc=x.__EXTEND_POINT__;const lc=()=>++oc,fc={INVALID_ARGUMENT:oc,INVALID_DATE_ARGUMENT:lc(),INVALID_ISO_DATE_ARGUMENT:lc(),__EXTEND_POINT__:lc()};function uc(e){return _(e,null,void 0)}fc.INVALID_ARGUMENT,fc.INVALID_DATE_ARGUMENT,fc.INVALID_ISO_DATE_ARGUMENT;const hc=()=>"",mc=e=>V(e);function dc(e,...c){const{fallbackFormat:t,postTranslation:n,unresolving:i,messageCompiler:a,fallbackLocale:s,messages:r}=e,[o,l]=Hc(...c),f=M(l.missingWarn)?l.missingWarn:e.missingWarn,u=M(l.fallbackWarn)?l.fallbackWarn:e.fallbackWarn,h=M(l.escapeParameter)?l.escapeParameter:e.escapeParameter,d=!!l.resolvedMessage,p=C(l.default)||M(l.default)?M(l.default)?a?o:()=>o:l.default:t?a?o:()=>o:"",v=t||""!==p,z=C(l.locale)?l.locale:e.locale;h&&pc(l);let[g,H,V]=d?[o,z,r[z]||{}]:vc(e,o,z,s,u,f),L=g,y=o;if(d||C(L)||mc(L)||v&&(L=p,y=L),!d&&(!C(L)&&!mc(L)||!C(H)))return i?De:o;let b=!1;const w=()=>{b=!0},N=mc(L)?L:zc(e,o,H,L,y,w);if(b)return L;const x=Cc(e,H,V,l),_=be(x),S=gc(e,N,_),k=n?n(S,o):S;if(__INTLIFY_PROD_DEVTOOLS__){const c={timestamp:Date.now(),key:C(o)?o:mc(L)?L.key:"",locale:H||(mc(L)?L.locale:""),format:C(L)?L:mc(L)?L.source:"",message:k};c.meta=m({},e.__meta,Qe()||{}),_e(c)}return k}function pc(e){H(e.list)?e.list=e.list.map((e=>C(e)?v(e):e)):L(e.named)&&Object.keys(e.named).forEach((c=>{C(e.named[c])&&(e.named[c]=v(e.named[c]))}))}function vc(e,c,t,n,i,a){const{messages:s,onWarn:r,messageResolver:o,localeFallbacker:l}=e,f=l(e,n,t);let u,h={},m=null,d=t,p=null;const v="translate";for(let z=0;z<f.length;z++){u=p=f[z],h=s[u]||{};if(null===(m=o(h,c))&&(m=h[c]),C(m)||V(m))break;const t=nc(e,c,u,a,v);t!==c&&(m=t),d=p}return[m,u,h]}function zc(e,c,t,n,i,a){const{messageCompiler:s,warnHtmlMessage:r}=e;if(mc(n)){const e=n;return e.locale=e.locale||t,e.key=e.key||c,e}if(null==s){const e=()=>n;return e.locale=t,e.key=c,e}const o=s(n,Vc(e,t,i,n,r,a));return o.locale=t,o.key=c,o.source=n,o}function gc(e,c,t){const n=c(t);return n}function Hc(...e){const[c,t,n]=e,i={};if(!C(c)&&!o(c)&&!mc(c))throw uc(fc.INVALID_ARGUMENT);const a=o(c)?String(c):(mc(c),c);return o(t)?i.plural=t:C(t)?i.default=t:w(t)&&!u(t)?i.named=t:H(t)&&(i.list=t),o(n)?i.plural=n:C(n)?i.default=n:w(n)&&m(i,n),[a,i]}function Vc(e,c,t,n,i,a){return{warnHtmlMessage:i,onError:e=>{throw a&&a(e),e},onCacheKey:e=>s(c,t,e)}}function Cc(e,c,t,n){const{modifiers:i,pluralRules:a,messageResolver:s,fallbackLocale:r,fallbackWarn:l,missingWarn:f,fallbackContext:u}=e,h=n=>{let i=s(t,n);if(null==i&&u){const[,,e]=vc(u,n,c,r,l,f);i=s(e,n)}if(C(i)){let t=!1;const a=()=>{t=!0},s=zc(e,n,c,i,n,a);return t?hc:s}return mc(i)?i:hc},m={locale:c,modifiers:i,pluralRules:a,messages:h};return e.processor&&(m.processor=e.processor),n.list&&(m.list=n.list),n.named&&(m.named=n.named),o(n.plural)&&(m.pluralIndex=n.plural),m}const Mc="undefined"!==typeof Intl;Mc&&Intl.DateTimeFormat,Mc&&Intl.NumberFormat;function Lc(e,...c){const{datetimeFormats:t,unresolving:n,fallbackLocale:i,onWarn:a,localeFallbacker:s}=e,{__datetimeFormatters:r}=e;const[o,l,f,h]=bc(...c),d=M(f.missingWarn)?f.missingWarn:e.missingWarn,p=(M(f.fallbackWarn)?f.fallbackWarn:e.fallbackWarn,!!f.part),v=C(f.locale)?f.locale:e.locale,z=s(e,i,v);if(!C(o)||""===o)return new Intl.DateTimeFormat(v,h).format(l);let g,H={},V=null,L=v,y=null;const b="datetime format";for(let u=0;u<z.length;u++){if(g=y=z[u],H=t[g]||{},V=H[o],w(V))break;nc(e,o,g,d,b),L=y}if(!w(V)||!C(g))return n?De:o;let N=`${g}__${o}`;u(h)||(N=`${N}__${JSON.stringify(h)}`);let x=r.get(N);return x||(x=new Intl.DateTimeFormat(g,m({},V,h)),r.set(N,x)),p?x.formatToParts(l):x.format(l)}const yc=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function bc(...e){const[c,t,n,i]=e,a={};let s,r={};if(C(c)){const e=c.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!e)throw uc(fc.INVALID_ISO_DATE_ARGUMENT);const t=e[3]?e[3].trim().startsWith("T")?`${e[1].trim()}${e[3].trim()}`:`${e[1].trim()}T${e[3].trim()}`:e[1].trim();s=new Date(t);try{s.toISOString()}catch(f){throw uc(fc.INVALID_ISO_DATE_ARGUMENT)}}else if(l(c)){if(isNaN(c.getTime()))throw uc(fc.INVALID_DATE_ARGUMENT);s=c}else{if(!o(c))throw uc(fc.INVALID_ARGUMENT);s=c}return C(t)?a.key=t:w(t)&&Object.keys(t).forEach((e=>{yc.includes(e)?r[e]=t[e]:a[e]=t[e]})),C(n)?a.locale=n:w(n)&&(r=n),w(i)&&(r=i),[a.key||"",s,a,r]}function wc(e,c,t){const n=e;for(const i in t){const e=`${c}__${i}`;n.__datetimeFormatters.has(e)&&n.__datetimeFormatters.delete(e)}}function Nc(e,...c){const{numberFormats:t,unresolving:n,fallbackLocale:i,onWarn:a,localeFallbacker:s}=e,{__numberFormatters:r}=e;const[o,l,f,h]=_c(...c),d=M(f.missingWarn)?f.missingWarn:e.missingWarn,p=(M(f.fallbackWarn)?f.fallbackWarn:e.fallbackWarn,!!f.part),v=C(f.locale)?f.locale:e.locale,z=s(e,i,v);if(!C(o)||""===o)return new Intl.NumberFormat(v,h).format(l);let g,H={},V=null,L=v,y=null;const b="number format";for(let u=0;u<z.length;u++){if(g=y=z[u],H=t[g]||{},V=H[o],w(V))break;nc(e,o,g,d,b),L=y}if(!w(V)||!C(g))return n?De:o;let N=`${g}__${o}`;u(h)||(N=`${N}__${JSON.stringify(h)}`);let x=r.get(N);return x||(x=new Intl.NumberFormat(g,m({},V,h)),r.set(N,x)),p?x.formatToParts(l):x.format(l)}const xc=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function _c(...e){const[c,t,n,i]=e,a={};let s={};if(!o(c))throw uc(fc.INVALID_ARGUMENT);const r=c;return C(t)?a.key=t:w(t)&&Object.keys(t).forEach((e=>{xc.includes(e)?s[e]=t[e]:a[e]=t[e]})),C(n)?a.locale=n:w(n)&&(s=n),w(i)&&(s=i),[a.key||"",r,a,s]}function Sc(e,c,t){const n=e;for(const i in t){const e=`${c}__${i}`;n.__numberFormatters.has(e)&&n.__numberFormatters.delete(e)}}"boolean"!==typeof __INTLIFY_PROD_DEVTOOLS__&&(p().__INTLIFY_PROD_DEVTOOLS__=!1);var kc=t(252),Ic=t(262);
/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const Ac="9.2.2";function Tc(){let e=!1;"boolean"!==typeof __VUE_I18N_FULL_INSTALL__&&(e=!0,p().__VUE_I18N_FULL_INSTALL__=!0),"boolean"!==typeof __VUE_I18N_LEGACY_API__&&(e=!0,p().__VUE_I18N_LEGACY_API__=!0),"boolean"!==typeof __INTLIFY_PROD_DEVTOOLS__&&(p().__INTLIFY_PROD_DEVTOOLS__=!1)}let Ec=ke.__EXTEND_POINT__;const Rc=()=>++Ec,Pc={FALLBACK_TO_ROOT:Ec,NOT_SUPPORTED_PRESERVE:Rc(),NOT_SUPPORTED_FORMATTER:Rc(),NOT_SUPPORTED_PRESERVE_DIRECTIVE:Rc(),NOT_SUPPORTED_GET_CHOICE_INDEX:Rc(),COMPONENT_NAME_LEGACY_COMPATIBLE:Rc(),NOT_FOUND_PARENT_SCOPE:Rc()};Pc.FALLBACK_TO_ROOT,Pc.NOT_SUPPORTED_PRESERVE,Pc.NOT_SUPPORTED_FORMATTER,Pc.NOT_SUPPORTED_PRESERVE_DIRECTIVE,Pc.NOT_SUPPORTED_GET_CHOICE_INDEX,Pc.COMPONENT_NAME_LEGACY_COMPATIBLE,Pc.NOT_FOUND_PARENT_SCOPE;let Dc=x.__EXTEND_POINT__;const Oc=()=>++Dc,Fc={UNEXPECTED_RETURN_TYPE:Dc,INVALID_ARGUMENT:Oc(),MUST_BE_CALL_SETUP_TOP:Oc(),NOT_INSLALLED:Oc(),NOT_AVAILABLE_IN_LEGACY_MODE:Oc(),REQUIRED_VALUE:Oc(),INVALID_VALUE:Oc(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:Oc(),NOT_INSLALLED_WITH_PROVIDE:Oc(),UNEXPECTED_ERROR:Oc(),NOT_COMPATIBLE_LEGACY_VUE_I18N:Oc(),BRIDGE_SUPPORT_VUE_2_ONLY:Oc(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:Oc(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:Oc(),__EXTEND_POINT__:Oc()};function Uc(e,...c){return _(e,null,void 0)}Fc.UNEXPECTED_RETURN_TYPE,Fc.INVALID_ARGUMENT,Fc.MUST_BE_CALL_SETUP_TOP,Fc.NOT_INSLALLED,Fc.UNEXPECTED_ERROR,Fc.NOT_AVAILABLE_IN_LEGACY_MODE,Fc.REQUIRED_VALUE,Fc.INVALID_VALUE,Fc.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN,Fc.NOT_INSLALLED_WITH_PROVIDE,Fc.NOT_COMPATIBLE_LEGACY_VUE_I18N,Fc.BRIDGE_SUPPORT_VUE_2_ONLY,Fc.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION,Fc.NOT_AVAILABLE_COMPOSITION_IN_LEGACY;const qc=a("__transrateVNode"),Bc=a("__datetimeParts"),jc=a("__numberParts"),Gc=a("__setPluralRules");a("__intlifyMeta");const Wc=a("__injectWithOption");function $c(e){if(!L(e))return e;for(const c in e)if(g(e,c))if(c.includes(".")){const t=c.split("."),n=t.length-1;let i=e;for(let e=0;e<n;e++)t[e]in i||(i[t[e]]={}),i=i[t[e]];i[t[n]]=e[c],delete e[c],L(i[t[n]])&&$c(i[t[n]])}else L(e[c])&&$c(e[c]);return e}function Kc(e,c){const{messages:t,__i18n:n,messageResolver:i,flatJson:a}=c,s=w(t)?t:H(n)?{}:{[e]:{}};if(H(n)&&n.forEach((e=>{if("locale"in e&&"resource"in e){const{locale:c,resource:t}=e;c?(s[c]=s[c]||{},Yc(t,s[c])):Yc(t,s)}else C(e)&&Yc(JSON.parse(e),s)})),null==i&&a)for(const r in s)g(s,r)&&$c(s[r]);return s}const Zc=e=>!L(e)||H(e);function Yc(e,c){if(Zc(e)||Zc(c))throw Uc(Fc.INVALID_VALUE);for(const t in e)g(e,t)&&(Zc(e[t])||Zc(c[t])?c[t]=e[t]:Yc(e[t],c[t]))}function Qc(e){return e.type}function Jc(e,c,t){let n=L(c.messages)?c.messages:{};"__i18nGlobal"in t&&(n=Kc(e.locale.value,{messages:n,__i18n:t.__i18nGlobal}));const i=Object.keys(n);if(i.length&&i.forEach((c=>{e.mergeLocaleMessage(c,n[c])})),L(c.datetimeFormats)){const t=Object.keys(c.datetimeFormats);t.length&&t.forEach((t=>{e.mergeDateTimeFormat(t,c.datetimeFormats[t])}))}if(L(c.numberFormats)){const t=Object.keys(c.numberFormats);t.length&&t.forEach((t=>{e.mergeNumberFormat(t,c.numberFormats[t])}))}}function Xc(e){return(0,kc.Wm)(kc.xv,null,e,0)}const et="__INTLIFY_META__";let ct=0;function tt(e){return(c,t,n,i)=>e(t,n,(0,kc.FN)()||void 0,i)}const nt=()=>{const e=(0,kc.FN)();let c=null;return e&&(c=Qc(e)[et])?{[et]:c}:null};function it(e={},c){const{__root:t}=e,i=void 0===t;let a=!M(e.inheritLocale)||e.inheritLocale;const s=(0,Ic.iH)(t&&a?t.locale.value:C(e.locale)?e.locale:Oe),r=(0,Ic.iH)(t&&a?t.fallbackLocale.value:C(e.fallbackLocale)||H(e.fallbackLocale)||w(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:s.value),l=(0,Ic.iH)(Kc(s.value,e)),u=(0,Ic.iH)(w(e.datetimeFormats)?e.datetimeFormats:{[s.value]:{}}),h=(0,Ic.iH)(w(e.numberFormats)?e.numberFormats:{[s.value]:{}});let d=t?t.missingWarn:!M(e.missingWarn)&&!f(e.missingWarn)||e.missingWarn,p=t?t.fallbackWarn:!M(e.fallbackWarn)&&!f(e.fallbackWarn)||e.fallbackWarn,v=t?t.fallbackRoot:!M(e.fallbackRoot)||e.fallbackRoot,z=!!e.fallbackFormat,g=V(e.missing)?e.missing:null,y=V(e.missing)?tt(e.missing):null,b=V(e.postTranslation)?e.postTranslation:null,N=t?t.warnHtmlMessage:!M(e.warnHtmlMessage)||e.warnHtmlMessage,x=!!e.escapeParameter;const _=t?t.modifiers:w(e.modifiers)?e.modifiers:{};let S,k=e.pluralRules||t&&t.pluralRules;const I=()=>{i&&Xe(null);const c={version:Ac,locale:s.value,fallbackLocale:r.value,messages:l.value,modifiers:_,pluralRules:k,missing:null===y?void 0:y,missingWarn:d,fallbackWarn:p,fallbackFormat:z,unresolving:!0,postTranslation:null===b?void 0:b,warnHtmlMessage:N,escapeParameter:x,messageResolver:e.messageResolver,__meta:{framework:"vue"}};c.datetimeFormats=u.value,c.numberFormats=h.value,c.__datetimeFormatters=w(S)?S.__datetimeFormatters:void 0,c.__numberFormatters=w(S)?S.__numberFormatters:void 0;const t=tc(c);return i&&Xe(t),t};function A(){return[s.value,r.value,l.value,u.value,h.value]}S=I(),ic(S,s.value,r.value);const T=(0,kc.Fl)({get:()=>s.value,set:e=>{s.value=e,S.locale=s.value}}),E=(0,kc.Fl)({get:()=>r.value,set:e=>{r.value=e,S.fallbackLocale=r.value,ic(S,s.value,e)}}),R=(0,kc.Fl)((()=>l.value)),P=(0,kc.Fl)((()=>u.value)),D=(0,kc.Fl)((()=>h.value));function O(){return V(b)?b:null}function F(e){b=e,S.postTranslation=e}function U(){return g}function q(e){null!==e&&(y=tt(e)),g=e,S.missing=y}const B=(e,c,n,a,s,r)=>{let l;if(A(),__INTLIFY_PROD_DEVTOOLS__)try{Ye(nt()),i||(S.fallbackContext=t?ec():void 0),l=e(S)}finally{Ye(null),i||(S.fallbackContext=void 0)}else l=e(S);if(o(l)&&l===De){const[e,n]=c();return t&&v?a(t):s(e)}if(r(l))return l;throw Uc(Fc.UNEXPECTED_RETURN_TYPE)};function j(...e){return B((c=>Reflect.apply(dc,null,[c,...e])),(()=>Hc(...e)),"translate",(c=>Reflect.apply(c.t,c,[...e])),(e=>e),(e=>C(e)))}function G(...e){const[c,t,n]=e;if(n&&!L(n))throw Uc(Fc.INVALID_ARGUMENT);return j(c,t,m({resolvedMessage:!0},n||{}))}function W(...e){return B((c=>Reflect.apply(Lc,null,[c,...e])),(()=>bc(...e)),"datetime format",(c=>Reflect.apply(c.d,c,[...e])),(()=>Fe),(e=>C(e)))}function $(...e){return B((c=>Reflect.apply(Nc,null,[c,...e])),(()=>_c(...e)),"number format",(c=>Reflect.apply(c.n,c,[...e])),(()=>Fe),(e=>C(e)))}function K(e){return e.map((e=>C(e)||o(e)||M(e)?Xc(String(e)):e))}const Z=e=>e,Y={normalize:K,interpolate:Z,type:"vnode"};function Q(...e){return B((c=>{let t;const n=c;try{n.processor=Y,t=Reflect.apply(dc,null,[n,...e])}finally{n.processor=null}return t}),(()=>Hc(...e)),"translate",(c=>c[qc](...e)),(e=>[Xc(e)]),(e=>H(e)))}function J(...e){return B((c=>Reflect.apply(Nc,null,[c,...e])),(()=>_c(...e)),"number format",(c=>c[jc](...e)),(()=>[]),(e=>C(e)||H(e)))}function X(...e){return B((c=>Reflect.apply(Lc,null,[c,...e])),(()=>bc(...e)),"datetime format",(c=>c[Bc](...e)),(()=>[]),(e=>C(e)||H(e)))}function ee(e){k=e,S.pluralRules=k}function ce(e,c){const t=C(c)?c:s.value,n=ie(t);return null!==S.messageResolver(n,e)}function te(e){let c=null;const t=Ae(S,r.value,s.value);for(let n=0;n<t.length;n++){const i=l.value[t[n]]||{},a=S.messageResolver(i,e);if(null!=a){c=a;break}}return c}function ne(e){const c=te(e);return null!=c?c:t&&t.tm(e)||{}}function ie(e){return l.value[e]||{}}function ae(e,c){l.value[e]=c,S.messages=l.value}function se(e,c){l.value[e]=l.value[e]||{},Yc(c,l.value[e]),S.messages=l.value}function re(e){return u.value[e]||{}}function oe(e,c){u.value[e]=c,S.datetimeFormats=u.value,wc(S,e,c)}function le(e,c){u.value[e]=m(u.value[e]||{},c),S.datetimeFormats=u.value,wc(S,e,c)}function fe(e){return h.value[e]||{}}function ue(e,c){h.value[e]=c,S.numberFormats=h.value,Sc(S,e,c)}function he(e,c){h.value[e]=m(h.value[e]||{},c),S.numberFormats=h.value,Sc(S,e,c)}ct++,t&&n&&((0,kc.YP)(t.locale,(e=>{a&&(s.value=e,S.locale=e,ic(S,s.value,r.value))})),(0,kc.YP)(t.fallbackLocale,(e=>{a&&(r.value=e,S.fallbackLocale=e,ic(S,s.value,r.value))})));const me={id:ct,locale:T,fallbackLocale:E,get inheritLocale(){return a},set inheritLocale(e){a=e,e&&t&&(s.value=t.locale.value,r.value=t.fallbackLocale.value,ic(S,s.value,r.value))},get availableLocales(){return Object.keys(l.value).sort()},messages:R,get modifiers(){return _},get pluralRules(){return k||{}},get isGlobal(){return i},get missingWarn(){return d},set missingWarn(e){d=e,S.missingWarn=d},get fallbackWarn(){return p},set fallbackWarn(e){p=e,S.fallbackWarn=p},get fallbackRoot(){return v},set fallbackRoot(e){v=e},get fallbackFormat(){return z},set fallbackFormat(e){z=e,S.fallbackFormat=z},get warnHtmlMessage(){return N},set warnHtmlMessage(e){N=e,S.warnHtmlMessage=e},get escapeParameter(){return x},set escapeParameter(e){x=e,S.escapeParameter=e},t:j,getLocaleMessage:ie,setLocaleMessage:ae,mergeLocaleMessage:se,getPostTranslationHandler:O,setPostTranslationHandler:F,getMissingHandler:U,setMissingHandler:q,[Gc]:ee};return me.datetimeFormats=P,me.numberFormats=D,me.rt=G,me.te=ce,me.tm=ne,me.d=W,me.n=$,me.getDateTimeFormat=re,me.setDateTimeFormat=oe,me.mergeDateTimeFormat=le,me.getNumberFormat=fe,me.setNumberFormat=ue,me.mergeNumberFormat=he,me[Wc]=e.__injectWithOption,me[qc]=Q,me[Bc]=X,me[jc]=J,me}function at(e){const c=C(e.locale)?e.locale:Oe,t=C(e.fallbackLocale)||H(e.fallbackLocale)||w(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:c,n=V(e.missing)?e.missing:void 0,i=!M(e.silentTranslationWarn)&&!f(e.silentTranslationWarn)||!e.silentTranslationWarn,a=!M(e.silentFallbackWarn)&&!f(e.silentFallbackWarn)||!e.silentFallbackWarn,s=!M(e.fallbackRoot)||e.fallbackRoot,r=!!e.formatFallbackMessages,o=w(e.modifiers)?e.modifiers:{},l=e.pluralizationRules,u=V(e.postTranslation)?e.postTranslation:void 0,h=!C(e.warnHtmlInMessage)||"off"!==e.warnHtmlInMessage,d=!!e.escapeParameterHtml,p=!M(e.sync)||e.sync;let v=e.messages;if(w(e.sharedMessages)){const c=e.sharedMessages,t=Object.keys(c);v=t.reduce(((e,t)=>{const n=e[t]||(e[t]={});return m(n,c[t]),e}),v||{})}const{__i18n:z,__root:g,__injectWithOption:L}=e,y=e.datetimeFormats,b=e.numberFormats,N=e.flatJson;return{locale:c,fallbackLocale:t,messages:v,flatJson:N,datetimeFormats:y,numberFormats:b,missing:n,missingWarn:i,fallbackWarn:a,fallbackRoot:s,fallbackFormat:r,modifiers:o,pluralRules:l,postTranslation:u,warnHtmlMessage:h,escapeParameter:d,messageResolver:e.messageResolver,inheritLocale:p,__i18n:z,__root:g,__injectWithOption:L}}function st(e={},c){{const c=it(at(e)),t={id:c.id,get locale(){return c.locale.value},set locale(e){c.locale.value=e},get fallbackLocale(){return c.fallbackLocale.value},set fallbackLocale(e){c.fallbackLocale.value=e},get messages(){return c.messages.value},get datetimeFormats(){return c.datetimeFormats.value},get numberFormats(){return c.numberFormats.value},get availableLocales(){return c.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(e){},get missing(){return c.getMissingHandler()},set missing(e){c.setMissingHandler(e)},get silentTranslationWarn(){return M(c.missingWarn)?!c.missingWarn:c.missingWarn},set silentTranslationWarn(e){c.missingWarn=M(e)?!e:e},get silentFallbackWarn(){return M(c.fallbackWarn)?!c.fallbackWarn:c.fallbackWarn},set silentFallbackWarn(e){c.fallbackWarn=M(e)?!e:e},get modifiers(){return c.modifiers},get formatFallbackMessages(){return c.fallbackFormat},set formatFallbackMessages(e){c.fallbackFormat=e},get postTranslation(){return c.getPostTranslationHandler()},set postTranslation(e){c.setPostTranslationHandler(e)},get sync(){return c.inheritLocale},set sync(e){c.inheritLocale=e},get warnHtmlInMessage(){return c.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(e){c.warnHtmlMessage="off"!==e},get escapeParameterHtml(){return c.escapeParameter},set escapeParameterHtml(e){c.escapeParameter=e},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(e){},get pluralizationRules(){return c.pluralRules||{}},__composer:c,t(...e){const[t,n,i]=e,a={};let s=null,r=null;if(!C(t))throw Uc(Fc.INVALID_ARGUMENT);const o=t;return C(n)?a.locale=n:H(n)?s=n:w(n)&&(r=n),H(i)?s=i:w(i)&&(r=i),Reflect.apply(c.t,c,[o,s||r||{},a])},rt(...e){return Reflect.apply(c.rt,c,[...e])},tc(...e){const[t,n,i]=e,a={plural:1};let s=null,r=null;if(!C(t))throw Uc(Fc.INVALID_ARGUMENT);const l=t;return C(n)?a.locale=n:o(n)?a.plural=n:H(n)?s=n:w(n)&&(r=n),C(i)?a.locale=i:H(i)?s=i:w(i)&&(r=i),Reflect.apply(c.t,c,[l,s||r||{},a])},te(e,t){return c.te(e,t)},tm(e){return c.tm(e)},getLocaleMessage(e){return c.getLocaleMessage(e)},setLocaleMessage(e,t){c.setLocaleMessage(e,t)},mergeLocaleMessage(e,t){c.mergeLocaleMessage(e,t)},d(...e){return Reflect.apply(c.d,c,[...e])},getDateTimeFormat(e){return c.getDateTimeFormat(e)},setDateTimeFormat(e,t){c.setDateTimeFormat(e,t)},mergeDateTimeFormat(e,t){c.mergeDateTimeFormat(e,t)},n(...e){return Reflect.apply(c.n,c,[...e])},getNumberFormat(e){return c.getNumberFormat(e)},setNumberFormat(e,t){c.setNumberFormat(e,t)},mergeNumberFormat(e,t){c.mergeNumberFormat(e,t)},getChoiceIndex(e,c){return-1},__onComponentInstanceCreated(c){const{componentInstanceCreatedListener:n}=e;n&&n(c,t)}};return t}}const rt={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>"parent"===e||"global"===e,default:"parent"},i18n:{type:Object}};function ot({slots:e},c){if(1===c.length&&"default"===c[0]){const c=e.default?e.default():[];return c.reduce(((e,c)=>[...e,...H(c.children)?c.children:[c]]),[])}return c.reduce(((c,t)=>{const n=e[t];return n&&(c[t]=n()),c}),{})}function lt(e){return kc.HY}const ft={name:"i18n-t",props:m({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>o(e)||!isNaN(e)}},rt),setup(e,c){const{slots:t,attrs:n}=c,i=e.i18n||yt({useScope:e.scope,__useComponent:!0});return()=>{const a=Object.keys(t).filter((e=>"_"!==e)),s={};e.locale&&(s.locale=e.locale),void 0!==e.plural&&(s.plural=C(e.plural)?+e.plural:e.plural);const r=ot(c,a),o=i[qc](e.keypath,r,s),l=m({},n),f=C(e.tag)||L(e.tag)?e.tag:lt();return(0,kc.h)(f,l,o)}}};function ut(e){return H(e)&&!C(e[0])}function ht(e,c,t,n){const{slots:i,attrs:a}=c;return()=>{const c={part:!0};let s={};e.locale&&(c.locale=e.locale),C(e.format)?c.key=e.format:L(e.format)&&(C(e.format.key)&&(c.key=e.format.key),s=Object.keys(e.format).reduce(((c,n)=>t.includes(n)?m({},c,{[n]:e.format[n]}):c),{}));const r=n(e.value,c,s);let o=[c.key];H(r)?o=r.map(((e,c)=>{const t=i[e.type],n=t?t({[e.type]:e.value,index:c,parts:r}):[e.value];return ut(n)&&(n[0].key=`${e.type}-${c}`),n})):C(r)&&(o=[r]);const l=m({},a),f=C(e.tag)||L(e.tag)?e.tag:lt();return(0,kc.h)(f,l,o)}}const mt={name:"i18n-n",props:m({value:{type:Number,required:!0},format:{type:[String,Object]}},rt),setup(e,c){const t=e.i18n||yt({useScope:"parent",__useComponent:!0});return ht(e,c,xc,((...e)=>t[jc](...e)))}},dt={name:"i18n-d",props:m({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},rt),setup(e,c){const t=e.i18n||yt({useScope:"parent",__useComponent:!0});return ht(e,c,yc,((...e)=>t[Bc](...e)))}};function pt(e,c){const t=e;if("composition"===e.mode)return t.__getInstance(c)||e.global;{const n=t.__getInstance(c);return null!=n?n.__composer:e.global.__composer}}function vt(e){const c=c=>{const{instance:t,modifiers:n,value:i}=c;if(!t||!t.$)throw Uc(Fc.UNEXPECTED_ERROR);const a=pt(e,t.$);const s=zt(i);return[Reflect.apply(a.t,a,[...gt(s)]),a]},t=(t,i)=>{const[a,s]=c(i);n&&e.global===s&&(t.__i18nWatcher=(0,kc.YP)(s.locale,(()=>{i.instance&&i.instance.$forceUpdate()}))),t.__composer=s,t.textContent=a},i=e=>{n&&e.__i18nWatcher&&(e.__i18nWatcher(),e.__i18nWatcher=void 0,delete e.__i18nWatcher),e.__composer&&(e.__composer=void 0,delete e.__composer)},a=(e,{value:c})=>{if(e.__composer){const t=e.__composer,n=zt(c);e.textContent=Reflect.apply(t.t,t,[...gt(n)])}},s=e=>{const[t]=c(e);return{textContent:t}};return{created:t,unmounted:i,beforeUpdate:a,getSSRProps:s}}function zt(e){if(C(e))return{path:e};if(w(e)){if(!("path"in e))throw Uc(Fc.REQUIRED_VALUE,"path");return e}throw Uc(Fc.INVALID_VALUE)}function gt(e){const{path:c,locale:t,args:n,choice:i,plural:a}=e,s={},r=n||{};return C(t)&&(s.locale=t),o(i)&&(s.plural=i),o(a)&&(s.plural=a),[c,r,s]}function Ht(e,c,...t){const n=w(t[0])?t[0]:{},i=!!n.useI18nComponentName,a=!M(n.globalInstall)||n.globalInstall;a&&(e.component(i?"i18n":ft.name,ft),e.component(mt.name,mt),e.component(dt.name,dt)),e.directive("t",vt(c))}function Vt(e,c,t){return{beforeCreate(){const n=(0,kc.FN)();if(!n)throw Uc(Fc.UNEXPECTED_ERROR);const i=this.$options;if(i.i18n){const t=i.i18n;i.__i18n&&(t.__i18n=i.__i18n),t.__root=c,this===this.$root?this.$i18n=Ct(e,t):(t.__injectWithOption=!0,this.$i18n=st(t))}else i.__i18n?this===this.$root?this.$i18n=Ct(e,i):this.$i18n=st({__i18n:i.__i18n,__injectWithOption:!0,__root:c}):this.$i18n=e;i.__i18nGlobal&&Jc(c,i,i),e.__onComponentInstanceCreated(this.$i18n),t.__setInstance(n,this.$i18n),this.$t=(...e)=>this.$i18n.t(...e),this.$rt=(...e)=>this.$i18n.rt(...e),this.$tc=(...e)=>this.$i18n.tc(...e),this.$te=(e,c)=>this.$i18n.te(e,c),this.$d=(...e)=>this.$i18n.d(...e),this.$n=(...e)=>this.$i18n.n(...e),this.$tm=e=>this.$i18n.tm(e)},mounted(){0},unmounted(){const e=(0,kc.FN)();if(!e)throw Uc(Fc.UNEXPECTED_ERROR);delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,t.__deleteInstance(e),delete this.$i18n}}}function Ct(e,c){e.locale=c.locale||e.locale,e.fallbackLocale=c.fallbackLocale||e.fallbackLocale,e.missing=c.missing||e.missing,e.silentTranslationWarn=c.silentTranslationWarn||e.silentFallbackWarn,e.silentFallbackWarn=c.silentFallbackWarn||e.silentFallbackWarn,e.formatFallbackMessages=c.formatFallbackMessages||e.formatFallbackMessages,e.postTranslation=c.postTranslation||e.postTranslation,e.warnHtmlInMessage=c.warnHtmlInMessage||e.warnHtmlInMessage,e.escapeParameterHtml=c.escapeParameterHtml||e.escapeParameterHtml,e.sync=c.sync||e.sync,e.__composer[Gc](c.pluralizationRules||e.pluralizationRules);const t=Kc(e.locale,{messages:c.messages,__i18n:c.__i18n});return Object.keys(t).forEach((c=>e.mergeLocaleMessage(c,t[c]))),c.datetimeFormats&&Object.keys(c.datetimeFormats).forEach((t=>e.mergeDateTimeFormat(t,c.datetimeFormats[t]))),c.numberFormats&&Object.keys(c.numberFormats).forEach((t=>e.mergeNumberFormat(t,c.numberFormats[t]))),e}const Mt=a("global-vue-i18n");function Lt(e={},c){const t=__VUE_I18N_LEGACY_API__&&M(e.legacy)?e.legacy:__VUE_I18N_LEGACY_API__,n=!M(e.globalInjection)||e.globalInjection,i=!__VUE_I18N_LEGACY_API__||!t||!!e.allowComposition,s=new Map,[r,o]=bt(e,t),l=a("");function f(e){return s.get(e)||null}function u(e,c){s.set(e,c)}function h(e){s.delete(e)}{const e={get mode(){return __VUE_I18N_LEGACY_API__&&t?"legacy":"composition"},get allowComposition(){return i},async install(c,...i){c.__VUE_I18N_SYMBOL__=l,c.provide(c.__VUE_I18N_SYMBOL__,e),!t&&n&&Tt(c,e.global),__VUE_I18N_FULL_INSTALL__&&Ht(c,e,...i),__VUE_I18N_LEGACY_API__&&t&&c.mixin(Vt(o,o.__composer,e));const a=c.unmount;c.unmount=()=>{e.dispose(),a()}},get global(){return o},dispose(){r.stop()},__instances:s,__getInstance:f,__setInstance:u,__deleteInstance:h};return e}}function yt(e={}){const c=(0,kc.FN)();if(null==c)throw Uc(Fc.MUST_BE_CALL_SETUP_TOP);if(!c.isCE&&null!=c.appContext.app&&!c.appContext.app.__VUE_I18N_SYMBOL__)throw Uc(Fc.NOT_INSLALLED);const t=wt(c),n=xt(t),i=Qc(c),a=Nt(e,i);if(__VUE_I18N_LEGACY_API__&&"legacy"===t.mode&&!e.__useComponent){if(!t.allowComposition)throw Uc(Fc.NOT_AVAILABLE_IN_LEGACY_MODE);return kt(c,a,n,e)}if("global"===a)return Jc(n,e,i),n;if("parent"===a){let i=_t(t,c,e.__useComponent);return null==i&&(i=n),i}const s=t;let r=s.__getInstance(c);if(null==r){const t=m({},e);"__i18n"in i&&(t.__i18n=i.__i18n),n&&(t.__root=n),r=it(t),St(s,c,r),s.__setInstance(c,r)}return r}function bt(e,c,t){const n=(0,Ic.B)();{const t=__VUE_I18N_LEGACY_API__&&c?n.run((()=>st(e))):n.run((()=>it(e)));if(null==t)throw Uc(Fc.UNEXPECTED_ERROR);return[n,t]}}function wt(e){{const c=(0,kc.f3)(e.isCE?Mt:e.appContext.app.__VUE_I18N_SYMBOL__);if(!c)throw Uc(e.isCE?Fc.NOT_INSLALLED_WITH_PROVIDE:Fc.UNEXPECTED_ERROR);return c}}function Nt(e,c){return u(e)?"__i18n"in c?"local":"global":e.useScope?e.useScope:"local"}function xt(e){return"composition"===e.mode?e.global:e.global.__composer}function _t(e,c,t=!1){let n=null;const i=c.root;let a=c.parent;while(null!=a){const c=e;if("composition"===e.mode)n=c.__getInstance(a);else if(__VUE_I18N_LEGACY_API__){const e=c.__getInstance(a);null!=e&&(n=e.__composer,t&&n&&!n[Wc]&&(n=null))}if(null!=n)break;if(i===a)break;a=a.parent}return n}function St(e,c,t){(0,kc.bv)((()=>{0}),c),(0,kc.Ah)((()=>{e.__deleteInstance(c)}),c)}function kt(e,c,t,n={}){const i="local"===c,a=(0,Ic.XI)(null);if(i&&e.proxy&&!e.proxy.$options.i18n&&!e.proxy.$options.__i18n)throw Uc(Fc.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const s=!M(n.inheritLocale)||n.inheritLocale,r=(0,Ic.iH)(i&&s?t.locale.value:C(n.locale)?n.locale:Oe),o=(0,Ic.iH)(i&&s?t.fallbackLocale.value:C(n.fallbackLocale)||H(n.fallbackLocale)||w(n.fallbackLocale)||!1===n.fallbackLocale?n.fallbackLocale:r.value),l=(0,Ic.iH)(Kc(r.value,n)),u=(0,Ic.iH)(w(n.datetimeFormats)?n.datetimeFormats:{[r.value]:{}}),h=(0,Ic.iH)(w(n.numberFormats)?n.numberFormats:{[r.value]:{}}),m=i?t.missingWarn:!M(n.missingWarn)&&!f(n.missingWarn)||n.missingWarn,d=i?t.fallbackWarn:!M(n.fallbackWarn)&&!f(n.fallbackWarn)||n.fallbackWarn,p=i?t.fallbackRoot:!M(n.fallbackRoot)||n.fallbackRoot,v=!!n.fallbackFormat,z=V(n.missing)?n.missing:null,g=V(n.postTranslation)?n.postTranslation:null,L=i?t.warnHtmlMessage:!M(n.warnHtmlMessage)||n.warnHtmlMessage,y=!!n.escapeParameter,b=i?t.modifiers:w(n.modifiers)?n.modifiers:{},N=n.pluralRules||i&&t.pluralRules;function x(){return[r.value,o.value,l.value,u.value,h.value]}const _=(0,kc.Fl)({get:()=>a.value?a.value.locale.value:r.value,set:e=>{a.value&&(a.value.locale.value=e),r.value=e}}),S=(0,kc.Fl)({get:()=>a.value?a.value.fallbackLocale.value:o.value,set:e=>{a.value&&(a.value.fallbackLocale.value=e),o.value=e}}),k=(0,kc.Fl)((()=>a.value?a.value.messages.value:l.value)),I=(0,kc.Fl)((()=>u.value)),A=(0,kc.Fl)((()=>h.value));function T(){return a.value?a.value.getPostTranslationHandler():g}function E(e){a.value&&a.value.setPostTranslationHandler(e)}function R(){return a.value?a.value.getMissingHandler():z}function P(e){a.value&&a.value.setMissingHandler(e)}function D(e){return x(),e()}function O(...e){return a.value?D((()=>Reflect.apply(a.value.t,null,[...e]))):D((()=>""))}function F(...e){return a.value?Reflect.apply(a.value.rt,null,[...e]):""}function U(...e){return a.value?D((()=>Reflect.apply(a.value.d,null,[...e]))):D((()=>""))}function q(...e){return a.value?D((()=>Reflect.apply(a.value.n,null,[...e]))):D((()=>""))}function B(e){return a.value?a.value.tm(e):{}}function j(e,c){return!!a.value&&a.value.te(e,c)}function G(e){return a.value?a.value.getLocaleMessage(e):{}}function W(e,c){a.value&&(a.value.setLocaleMessage(e,c),l.value[e]=c)}function $(e,c){a.value&&a.value.mergeLocaleMessage(e,c)}function K(e){return a.value?a.value.getDateTimeFormat(e):{}}function Z(e,c){a.value&&(a.value.setDateTimeFormat(e,c),u.value[e]=c)}function Y(e,c){a.value&&a.value.mergeDateTimeFormat(e,c)}function Q(e){return a.value?a.value.getNumberFormat(e):{}}function J(e,c){a.value&&(a.value.setNumberFormat(e,c),h.value[e]=c)}function X(e,c){a.value&&a.value.mergeNumberFormat(e,c)}const ee={get id(){return a.value?a.value.id:-1},locale:_,fallbackLocale:S,messages:k,datetimeFormats:I,numberFormats:A,get inheritLocale(){return a.value?a.value.inheritLocale:s},set inheritLocale(e){a.value&&(a.value.inheritLocale=e)},get availableLocales(){return a.value?a.value.availableLocales:Object.keys(l.value)},get modifiers(){return a.value?a.value.modifiers:b},get pluralRules(){return a.value?a.value.pluralRules:N},get isGlobal(){return!!a.value&&a.value.isGlobal},get missingWarn(){return a.value?a.value.missingWarn:m},set missingWarn(e){a.value&&(a.value.missingWarn=e)},get fallbackWarn(){return a.value?a.value.fallbackWarn:d},set fallbackWarn(e){a.value&&(a.value.missingWarn=e)},get fallbackRoot(){return a.value?a.value.fallbackRoot:p},set fallbackRoot(e){a.value&&(a.value.fallbackRoot=e)},get fallbackFormat(){return a.value?a.value.fallbackFormat:v},set fallbackFormat(e){a.value&&(a.value.fallbackFormat=e)},get warnHtmlMessage(){return a.value?a.value.warnHtmlMessage:L},set warnHtmlMessage(e){a.value&&(a.value.warnHtmlMessage=e)},get escapeParameter(){return a.value?a.value.escapeParameter:y},set escapeParameter(e){a.value&&(a.value.escapeParameter=e)},t:O,getPostTranslationHandler:T,setPostTranslationHandler:E,getMissingHandler:R,setMissingHandler:P,rt:F,d:U,n:q,tm:B,te:j,getLocaleMessage:G,setLocaleMessage:W,mergeLocaleMessage:$,getDateTimeFormat:K,setDateTimeFormat:Z,mergeDateTimeFormat:Y,getNumberFormat:Q,setNumberFormat:J,mergeNumberFormat:X};function ce(e){e.locale.value=r.value,e.fallbackLocale.value=o.value,Object.keys(l.value).forEach((c=>{e.mergeLocaleMessage(c,l.value[c])})),Object.keys(u.value).forEach((c=>{e.mergeDateTimeFormat(c,u.value[c])})),Object.keys(h.value).forEach((c=>{e.mergeNumberFormat(c,h.value[c])})),e.escapeParameter=y,e.fallbackFormat=v,e.fallbackRoot=p,e.fallbackWarn=d,e.missingWarn=m,e.warnHtmlMessage=L}return(0,kc.wF)((()=>{if(null==e.proxy||null==e.proxy.$i18n)throw Uc(Fc.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const t=a.value=e.proxy.$i18n.__composer;"global"===c?(r.value=t.locale.value,o.value=t.fallbackLocale.value,l.value=t.messages.value,u.value=t.datetimeFormats.value,h.value=t.numberFormats.value):i&&ce(t)})),ee}const It=["locale","fallbackLocale","availableLocales"],At=["t","rt","d","n","tm"];function Tt(e,c){const t=Object.create(null);It.forEach((e=>{const n=Object.getOwnPropertyDescriptor(c,e);if(!n)throw Uc(Fc.UNEXPECTED_ERROR);const i=(0,Ic.dq)(n.value)?{get(){return n.value.value},set(e){n.value.value=e}}:{get(){return n.get&&n.get()}};Object.defineProperty(t,e,i)})),e.config.globalProperties.$i18n=t,At.forEach((t=>{const n=Object.getOwnPropertyDescriptor(c,t);if(!n||!n.value)throw Uc(Fc.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${t}`,n)}))}if(We(rc),$e(ve),Ke(Ae),Tc(),__INTLIFY_PROD_DEVTOOLS__){const e=p();e.__INTLIFY__=!0,Ne(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}},744:function(e,c){c.Z=(e,c)=>{const t=e.__vccOpts||e;for(const[n,i]of c)t[n]=i;return t}},180:function(e,c,t){t.d(c,{Z:function(){return z}});var n=t(444),i=t(463),a=t(816),s=t(333);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class r{constructor(e,c){this._delegate=e,this.firebase=c,(0,a._addComponent)(e,new i.wA("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,a.deleteApp)(this._delegate))))}_getService(e,c=a._DEFAULT_ENTRY_NAME){var t;this._delegate.checkDestroyed();const n=this._delegate.container.getProvider(e);return n.isInitialized()||"EXPLICIT"!==(null===(t=n.getComponent())||void 0===t?void 0:t.instantiationMode)||n.initialize(),n.getImmediate({identifier:c})}_removeServiceInstance(e,c=a._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(c)}_addComponent(e){(0,a._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,a._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},l=new n.LL("app-compat","Firebase",o);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function f(e){const c={},t={__esModule:!0,initializeApp:r,app:s,registerVersion:a.registerVersion,setLogLevel:a.setLogLevel,onLog:a.onLog,apps:null,SDK_VERSION:a.SDK_VERSION,INTERNAL:{registerComponent:f,removeApp:i,useAsService:u,modularAPIs:a}};function i(e){delete c[e]}function s(e){if(e=e||a._DEFAULT_ENTRY_NAME,!(0,n.r3)(c,e))throw l.create("no-app",{appName:e});return c[e]}function r(i,s={}){const r=a.initializeApp(i,s);if((0,n.r3)(c,r.name))return c[r.name];const o=new e(r,t);return c[r.name]=o,o}function o(){return Object.keys(c).map((e=>c[e]))}function f(c){const i=c.name,r=i.replace("-compat","");if(a._registerComponent(c)&&"PUBLIC"===c.type){const a=(e=s())=>{if("function"!==typeof e[r])throw l.create("invalid-app-argument",{appName:i});return e[r]()};void 0!==c.serviceProps&&(0,n.ZB)(a,c.serviceProps),t[r]=a,e.prototype[r]=function(...e){const t=this._getService.bind(this,i);return t.apply(this,c.multipleInstances?e:[])}}return"PUBLIC"===c.type?t[r]:null}function u(e,c){if("serverAuth"===c)return null;const t=c;return t}return t["default"]=t,Object.defineProperty(t,"apps",{get:o}),s["App"]=e,t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(){const e=f(r);function c(c){(0,n.ZB)(e,c)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:u,extendNamespace:c,createSubscribe:n.ne,ErrorFactory:n.LL,deepExtend:n.ZB}),e}const h=u(),m=new s.Yd("@firebase/app-compat"),d="@firebase/app-compat",p="0.2.15";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function v(e){(0,a.registerVersion)(d,p,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if((0,n.jU)()&&void 0!==self.firebase){m.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&m.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const z=h;v()},816:function(e,c,t){t.r(c),t.d(c,{FirebaseError:function(){return a.ZR},SDK_VERSION:function(){return ge},_DEFAULT_ENTRY_NAME:function(){return ae},_addComponent:function(){return le},_addOrOverwriteComponent:function(){return fe},_apps:function(){return re},_clearComponents:function(){return de},_components:function(){return oe},_getProvider:function(){return he},_registerComponent:function(){return ue},_removeServiceInstance:function(){return me},deleteApp:function(){return Me},getApp:function(){return Ve},getApps:function(){return Ce},initializeApp:function(){return He},onLog:function(){return ye},registerVersion:function(){return Le},setLogLevel:function(){return be}});var n=t(463),i=t(333),a=t(444);const s=(e,c)=>c.some((c=>e instanceof c));let r,o;function l(){return r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function f(){return o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const u=new WeakMap,h=new WeakMap,m=new WeakMap,d=new WeakMap,p=new WeakMap;function v(e){const c=new Promise(((c,t)=>{const n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{c(M(e.result)),n()},a=()=>{t(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",a)}));return c.then((c=>{c instanceof IDBCursor&&u.set(c,e)})).catch((()=>{})),p.set(c,e),c}function z(e){if(h.has(e))return;const c=new Promise(((c,t)=>{const n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{c(),n()},a=()=>{t(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));h.set(e,c)}let g={get(e,c,t){if(e instanceof IDBTransaction){if("done"===c)return h.get(e);if("objectStoreNames"===c)return e.objectStoreNames||m.get(e);if("store"===c)return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return M(e[c])},set(e,c,t){return e[c]=t,!0},has(e,c){return e instanceof IDBTransaction&&("done"===c||"store"===c)||c in e}};function H(e){g=e(g)}function V(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?f().includes(e)?function(...c){return e.apply(L(this),c),M(u.get(this))}:function(...c){return M(e.apply(L(this),c))}:function(c,...t){const n=e.call(L(this),c,...t);return m.set(n,c.sort?c.sort():[c]),M(n)}}function C(e){return"function"===typeof e?V(e):(e instanceof IDBTransaction&&z(e),s(e,l())?new Proxy(e,g):e)}function M(e){if(e instanceof IDBRequest)return v(e);if(d.has(e))return d.get(e);const c=C(e);return c!==e&&(d.set(e,c),p.set(c,e)),c}const L=e=>p.get(e);function y(e,c,{blocked:t,upgrade:n,blocking:i,terminated:a}={}){const s=indexedDB.open(e,c),r=M(s);return n&&s.addEventListener("upgradeneeded",(e=>{n(M(s.result),e.oldVersion,e.newVersion,M(s.transaction),e)})),t&&s.addEventListener("blocked",(e=>t(e.oldVersion,e.newVersion,e))),r.then((e=>{a&&e.addEventListener("close",(()=>a())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),r}const b=["get","getKey","getAll","getAllKeys","count"],w=["put","add","delete","clear"],N=new Map;function x(e,c){if(!(e instanceof IDBDatabase)||c in e||"string"!==typeof c)return;if(N.get(c))return N.get(c);const t=c.replace(/FromIndex$/,""),n=c!==t,i=w.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!i&&!b.includes(t))return;const a=async function(e,...c){const a=this.transaction(e,i?"readwrite":"readonly");let s=a.store;return n&&(s=s.index(c.shift())),(await Promise.all([s[t](...c),i&&a.done]))[0]};return N.set(c,a),a}H((e=>({...e,get:(c,t,n)=>x(c,t)||e.get(c,t,n),has:(c,t)=>!!x(c,t)||e.has(c,t)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(S(e)){const c=e.getImmediate();return`${c.library}/${c.version}`}return null})).filter((e=>e)).join(" ")}}function S(e){const c=e.getComponent();return"VERSION"===(null===c||void 0===c?void 0:c.type)}const k="@firebase/app",I="0.9.15",A=new i.Yd("@firebase/app"),T="@firebase/app-compat",E="@firebase/analytics-compat",R="@firebase/analytics",P="@firebase/app-check-compat",D="@firebase/app-check",O="@firebase/auth",F="@firebase/auth-compat",U="@firebase/database",q="@firebase/database-compat",B="@firebase/functions",j="@firebase/functions-compat",G="@firebase/installations",W="@firebase/installations-compat",$="@firebase/messaging",K="@firebase/messaging-compat",Z="@firebase/performance",Y="@firebase/performance-compat",Q="@firebase/remote-config",J="@firebase/remote-config-compat",X="@firebase/storage",ee="@firebase/storage-compat",ce="@firebase/firestore",te="@firebase/firestore-compat",ne="firebase",ie="10.1.0",ae="[DEFAULT]",se={[k]:"fire-core",[T]:"fire-core-compat",[R]:"fire-analytics",[E]:"fire-analytics-compat",[D]:"fire-app-check",[P]:"fire-app-check-compat",[O]:"fire-auth",[F]:"fire-auth-compat",[U]:"fire-rtdb",[q]:"fire-rtdb-compat",[B]:"fire-fn",[j]:"fire-fn-compat",[G]:"fire-iid",[W]:"fire-iid-compat",[$]:"fire-fcm",[K]:"fire-fcm-compat",[Z]:"fire-perf",[Y]:"fire-perf-compat",[Q]:"fire-rc",[J]:"fire-rc-compat",[X]:"fire-gcs",[ee]:"fire-gcs-compat",[ce]:"fire-fst",[te]:"fire-fst-compat","fire-js":"fire-js",[ne]:"fire-js-all"},re=new Map,oe=new Map;function le(e,c){try{e.container.addComponent(c)}catch(t){A.debug(`Component ${c.name} failed to register with FirebaseApp ${e.name}`,t)}}function fe(e,c){e.container.addOrOverwriteComponent(c)}function ue(e){const c=e.name;if(oe.has(c))return A.debug(`There were multiple attempts to register component ${c}.`),!1;oe.set(c,e);for(const t of re.values())le(t,e);return!0}function he(e,c){const t=e.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),e.container.getProvider(c)}function me(e,c,t=ae){he(e,c).clearInstance(t)}function de(){oe.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ve=new a.LL("app","Firebase",pe);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ze{constructor(e,c,t){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},c),this._name=c.name,this._automaticDataCollectionEnabled=c.automaticDataCollectionEnabled,this._container=t,this.container.addComponent(new n.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ve.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge=ie;function He(e,c={}){let t=e;if("object"!==typeof c){const e=c;c={name:e}}const i=Object.assign({name:ae,automaticDataCollectionEnabled:!1},c),s=i.name;if("string"!==typeof s||!s)throw ve.create("bad-app-name",{appName:String(s)});if(t||(t=(0,a.aH)()),!t)throw ve.create("no-options");const r=re.get(s);if(r){if((0,a.vZ)(t,r.options)&&(0,a.vZ)(i,r.config))return r;throw ve.create("duplicate-app",{appName:s})}const o=new n.H0(s);for(const n of oe.values())o.addComponent(n);const l=new ze(t,i,o);return re.set(s,l),l}function Ve(e=ae){const c=re.get(e);if(!c&&e===ae&&(0,a.aH)())return He();if(!c)throw ve.create("no-app",{appName:e});return c}function Ce(){return Array.from(re.values())}async function Me(e){const c=e.name;re.has(c)&&(re.delete(c),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function Le(e,c,t){var i;let a=null!==(i=se[e])&&void 0!==i?i:e;t&&(a+=`-${t}`);const s=a.match(/\s|\//),r=c.match(/\s|\//);if(s||r){const e=[`Unable to register library "${a}" with version "${c}":`];return s&&e.push(`library name "${a}" contains illegal characters (whitespace or "/")`),s&&r&&e.push("and"),r&&e.push(`version name "${c}" contains illegal characters (whitespace or "/")`),void A.warn(e.join(" "))}ue(new n.wA(`${a}-version`,(()=>({library:a,version:c})),"VERSION"))}function ye(e,c){if(null!==e&&"function"!==typeof e)throw ve.create("invalid-log-argument");(0,i.Am)(e,c)}function be(e){(0,i.Ub)(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we="firebase-heartbeat-database",Ne=1,xe="firebase-heartbeat-store";let _e=null;function Se(){return _e||(_e=y(we,Ne,{upgrade:(e,c)=>{switch(c){case 0:e.createObjectStore(xe)}}}).catch((e=>{throw ve.create("idb-open",{originalErrorMessage:e.message})}))),_e}async function ke(e){try{const c=await Se(),t=await c.transaction(xe).objectStore(xe).get(Ae(e));return t}catch(c){if(c instanceof a.ZR)A.warn(c.message);else{const e=ve.create("idb-get",{originalErrorMessage:null===c||void 0===c?void 0:c.message});A.warn(e.message)}}}async function Ie(e,c){try{const t=await Se(),n=t.transaction(xe,"readwrite"),i=n.objectStore(xe);await i.put(c,Ae(e)),await n.done}catch(t){if(t instanceof a.ZR)A.warn(t.message);else{const e=ve.create("idb-set",{originalErrorMessage:null===t||void 0===t?void 0:t.message});A.warn(e.message)}}}function Ae(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te=1024,Ee=2592e6;class Re{constructor(e){this.container=e,this._heartbeatsCache=null;const c=this.container.getProvider("app").getImmediate();this._storage=new Oe(c),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),c=e.getPlatformInfoString(),t=Pe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:c}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const c=new Date(e.date).valueOf(),t=Date.now();return t-c<=Ee})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Pe(),{heartbeatsToSend:c,unsentEntries:t}=De(this._heartbeatsCache.heartbeats),n=(0,a.L)(JSON.stringify({version:2,heartbeats:c}));return this._heartbeatsCache.lastSentHeartbeatDate=e,t.length>0?(this._heartbeatsCache.heartbeats=t,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function Pe(){const e=new Date;return e.toISOString().substring(0,10)}function De(e,c=Te){const t=[];let n=e.slice();for(const i of e){const e=t.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Fe(t)>c){e.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Fe(t)>c){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Oe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,a.hl)()&&(0,a.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await ke(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var c;const t=await this._canUseIndexedDBPromise;if(t){const t=await this.read();return Ie(this.app,{lastSentHeartbeatDate:null!==(c=e.lastSentHeartbeatDate)&&void 0!==c?c:t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var c;const t=await this._canUseIndexedDBPromise;if(t){const t=await this.read();return Ie(this.app,{lastSentHeartbeatDate:null!==(c=e.lastSentHeartbeatDate)&&void 0!==c?c:t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}}}function Fe(e){return(0,a.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(e){ue(new n.wA("platform-logger",(e=>new _(e)),"PRIVATE")),ue(new n.wA("heartbeat",(e=>new Re(e)),"PRIVATE")),Le(k,I,e),Le(k,I,"esm2017"),Le("fire-js","")}Ue("")},463:function(e,c,t){t.d(c,{H0:function(){return l},wA:function(){return i}});var n=t(444);class i{constructor(e,c,t){this.name=e,this.instanceFactory=c,this.type=t,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e,c){this.name=e,this.container=c,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const c=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(c)){const e=new n.BH;if(this.instancesDeferred.set(c,e),this.isInitialized(c)||this.shouldAutoInitialize())try{const t=this.getOrInitializeService({instanceIdentifier:c});t&&e.resolve(t)}catch(t){}}return this.instancesDeferred.get(c).promise}getImmediate(e){var c;const t=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),n=null!==(c=null===e||void 0===e?void 0:e.optional)&&void 0!==c&&c;if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(n)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(o(e))try{this.getOrInitializeService({instanceIdentifier:a})}catch(c){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(c){}}}}clearInstance(e=a){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=a){return this.instances.has(e)}getOptions(e=a){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:c={}}=e,t=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(t))throw Error(`${this.name}(${t}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:t,options:c});for(const[i,a]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);t===e&&a.resolve(n)}return n}onInit(e,c){var t;const n=this.normalizeInstanceIdentifier(c),i=null!==(t=this.onInitCallbacks.get(n))&&void 0!==t?t:new Set;i.add(e),this.onInitCallbacks.set(n,i);const a=this.instances.get(n);return a&&e(a,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,c){const t=this.onInitCallbacks.get(c);if(t)for(const i of t)try{i(e,c)}catch(n){}}getOrInitializeService({instanceIdentifier:e,options:c={}}){let t=this.instances.get(e);if(!t&&this.component&&(t=this.component.instanceFactory(this.container,{instanceIdentifier:r(e),options:c}),this.instances.set(e,t),this.instancesOptions.set(e,c),this.invokeOnInitCallbacks(t,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,t)}catch(n){}return t||null}normalizeInstanceIdentifier(e=a){return this.component?this.component.multipleInstances?e:a:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function r(e){return e===a?void 0:e}function o(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const c=this.getProvider(e.name);if(c.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);c.setComponent(e)}addOrOverwriteComponent(e){const c=this.getProvider(e.name);c.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const c=new s(e,this);return this.providers.set(e,c),c}getProviders(){return Array.from(this.providers.values())}}},333:function(e,c,t){t.d(c,{Am:function(){return u},Ub:function(){return f},Yd:function(){return l},in:function(){return i}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n.Z.registerVersion(i,a,"app-compat")},952:function(e,c,t){var n=t(180),i=t(444),a=t(816);function s(e,c){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&c.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)c.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var r=t(333),o=t(463);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const l={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},f={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function h(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const m=u,d=h,p=new i.LL("auth","Firebase",h()),v=new r.Yd("@firebase/auth");function z(e,...c){v.logLevel<=r["in"].WARN&&v.warn(`Auth (${a.SDK_VERSION}): ${e}`,...c)}function g(e,...c){v.logLevel<=r["in"].ERROR&&v.error(`Auth (${a.SDK_VERSION}): ${e}`,...c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e,...c){throw L(e,...c)}function V(e,...c){return L(e,...c)}function C(e,c,t){const n=Object.assign(Object.assign({},d()),{[c]:t}),a=new i.LL("auth","Firebase",n);return a.create(c,{appName:e.name})}function M(e,c,t){const n=t;if(!(c instanceof n))throw n.name!==c.constructor.name&&H(e,"argument-error"),C(e,"argument-error",`Type of ${c.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function L(e,...c){if("string"!==typeof e){const t=c[0],n=[...c.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(t,...n)}return p.create(e,...c)}function y(e,c,...t){if(!e)throw L(c,...t)}function b(e){const c="INTERNAL ASSERTION FAILED: "+e;throw g(c),new Error(c)}function w(e,c){e||b(c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function x(){return"http:"===_()||"https:"===_()}function _(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(x()||(0,i.ru)()||"connection"in navigator))||navigator.onLine}function k(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e,c){this.shortDelay=e,this.longDelay=c,w(c>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return S()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e,c){w(e.emulator,"Emulator should always be set here");const{url:t}=e.emulator;return c?`${t}${c.startsWith("/")?c.slice(1):c}`:t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{static initialize(e,c,t){this.fetchImpl=e,c&&(this.headersImpl=c),t&&(this.responseImpl=t)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},R=new I(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e,c){return e.tenantId&&!c.tenantId?Object.assign(Object.assign({},c),{tenantId:e.tenantId}):c}async function D(e,c,t,n,a={}){return O(e,a,(async()=>{let a={},s={};n&&("GET"===c?s=n:a={body:JSON.stringify(n)});const r=(0,i.xO)(Object.assign({key:e.config.apiKey},s)).slice(1),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/json",e.languageCode&&(o["X-Firebase-Locale"]=e.languageCode),T.fetch()(U(e,e.config.apiHost,t,r),Object.assign({method:c,headers:o,referrerPolicy:"no-referrer"},a))}))}async function O(e,c,t){e._canInitEmulator=!1;const n=Object.assign(Object.assign({},E),c);try{const c=new q(e),i=await Promise.race([t(),c.promise]);c.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw B(e,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[t,s]=c.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===t)throw B(e,"credential-already-in-use",a);if("EMAIL_EXISTS"===t)throw B(e,"email-already-in-use",a);if("USER_DISABLED"===t)throw B(e,"user-disabled",a);const r=n[t]||t.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw C(e,r,s);H(e,r)}}catch(a){if(a instanceof i.ZR)throw a;H(e,"network-request-failed",{message:String(a)})}}async function F(e,c,t,n,i={}){const a=await D(e,c,t,n,i);return"mfaPendingCredential"in a&&H(e,"multi-factor-auth-required",{_serverResponse:a}),a}function U(e,c,t,n){const i=`${c}${t}?${n}`;return e.config.emulator?A(e.config,i):`${e.config.apiScheme}://${i}`}class q{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,c)=>{this.timer=setTimeout((()=>c(V(this.auth,"network-request-failed"))),R.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function B(e,c,t){const n={appName:e.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const i=V(e,c,n);return i.customData._tokenResponse=t,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j(e,c){return D(e,"POST","/v1/accounts:delete",c)}async function G(e,c){return D(e,"POST","/v1/accounts:update",c)}async function W(e,c){return D(e,"POST","/v1/accounts:lookup",c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e){if(e)try{const c=new Date(Number(e));if(!isNaN(c.getTime()))return c.toUTCString()}catch(c){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,c=!1){const t=(0,i.m9)(e),n=await t.getIdToken(c),a=Y(n);y(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const s="object"===typeof a.firebase?a.firebase:void 0,r=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:a,token:n,authTime:$(Z(a.auth_time)),issuedAtTime:$(Z(a.iat)),expirationTime:$(Z(a.exp)),signInProvider:r||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function Z(e){return 1e3*Number(e)}function Y(e){const[c,t,n]=e.split(".");if(void 0===c||void 0===t||void 0===n)return g("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.tV)(t);return e?JSON.parse(e):(g("Failed to decode base64 JWT payload"),null)}catch(a){return g("Caught error parsing JWT payload as JSON",null===a||void 0===a?void 0:a.toString()),null}}function Q(e){const c=Y(e);return y(c,"internal-error"),y("undefined"!==typeof c.exp,"internal-error"),y("undefined"!==typeof c.iat,"internal-error"),Number(c.exp)-Number(c.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(e,c,t=!1){if(t)return c;try{return await c}catch(n){throw n instanceof i.ZR&&X(n)&&e.auth.currentUser===e&&await e.auth.signOut(),n}}function X({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var c;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(c=this.user.stsTokenManager.expirationTime)&&void 0!==c?c:0,t=e-Date.now()-3e5;return Math.max(0,t)}}schedule(e=!1){if(!this.isRunning)return;const c=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),c)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,c){this.createdAt=e,this.lastLoginAt=c,this._initializeTime()}_initializeTime(){this.lastSignInTime=$(this.lastLoginAt),this.creationTime=$(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function te(e){var c;const t=e.auth,n=await e.getIdToken(),i=await J(e,W(t,{idToken:n}));y(null===i||void 0===i?void 0:i.users.length,t,"internal-error");const a=i.users[0];e._notifyReloadListener(a);const s=(null===(c=a.providerUserInfo)||void 0===c?void 0:c.length)?ae(a.providerUserInfo):[],r=ie(e.providerData,s),o=e.isAnonymous,l=!(e.email&&a.passwordHash)&&!(null===r||void 0===r?void 0:r.length),f=!!o&&l,u={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:r,metadata:new ce(a.createdAt,a.lastLoginAt),isAnonymous:f};Object.assign(e,u)}async function ne(e){const c=(0,i.m9)(e);await te(c),await c.auth._persistUserIfCurrent(c),c.auth._notifyListenersIfCurrent(c)}function ie(e,c){const t=e.filter((e=>!c.some((c=>c.providerId===e.providerId))));return[...t,...c]}function ae(e){return e.map((e=>{var{providerId:c}=e,t=s(e,["providerId"]);return{providerId:c,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function se(e,c){const t=await O(e,{},(async()=>{const t=(0,i.xO)({grant_type:"refresh_token",refresh_token:c}).slice(1),{tokenApiHost:n,apiKey:a}=e.config,s=U(e,n,"/v1/token",`key=${a}`),r=await e._getAdditionalHeaders();return r["Content-Type"]="application/x-www-form-urlencoded",T.fetch()(s,{method:"POST",headers:r,body:t})}));return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y("undefined"!==typeof e.idToken,"internal-error"),y("undefined"!==typeof e.refreshToken,"internal-error");const c="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):Q(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,c)}async getToken(e,c=!1){return y(!this.accessToken||this.refreshToken,e,"user-token-expired"),c||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,c){const{accessToken:t,refreshToken:n,expiresIn:i}=await se(e,c);this.updateTokensAndExpiration(t,n,Number(i))}updateTokensAndExpiration(e,c,t){this.refreshToken=c||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*t}static fromJSON(e,c){const{refreshToken:t,accessToken:n,expirationTime:i}=c,a=new re;return t&&(y("string"===typeof t,"internal-error",{appName:e}),a.refreshToken=t),n&&(y("string"===typeof n,"internal-error",{appName:e}),a.accessToken=n),i&&(y("number"===typeof i,"internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e,c){y("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:c})}class le{constructor(e){var{uid:c,auth:t,stsTokenManager:n}=e,i=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ee(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=c,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ce(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const c=await J(this,this.stsTokenManager.getToken(this.auth,e));return y(c,this.auth,"internal-error"),this.accessToken!==c&&(this.accessToken=c,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),c}getIdTokenResult(e){return K(this,e)}reload(){return ne(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const c=new le(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return c.metadata._copy(this.metadata),c}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,c=!1){let t=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),t=!0),c&&await te(this),await this.auth._persistUserIfCurrent(this),t&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await J(this,j(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,c){var t,n,i,a,s,r,o,l;const f=null!==(t=c.displayName)&&void 0!==t?t:void 0,u=null!==(n=c.email)&&void 0!==n?n:void 0,h=null!==(i=c.phoneNumber)&&void 0!==i?i:void 0,m=null!==(a=c.photoURL)&&void 0!==a?a:void 0,d=null!==(s=c.tenantId)&&void 0!==s?s:void 0,p=null!==(r=c._redirectEventId)&&void 0!==r?r:void 0,v=null!==(o=c.createdAt)&&void 0!==o?o:void 0,z=null!==(l=c.lastLoginAt)&&void 0!==l?l:void 0,{uid:g,emailVerified:H,isAnonymous:V,providerData:C,stsTokenManager:M}=c;y(g&&M,e,"internal-error");const L=re.fromJSON(this.name,M);y("string"===typeof g,e,"internal-error"),oe(f,e.name),oe(u,e.name),y("boolean"===typeof H,e,"internal-error"),y("boolean"===typeof V,e,"internal-error"),oe(h,e.name),oe(m,e.name),oe(d,e.name),oe(p,e.name),oe(v,e.name),oe(z,e.name);const b=new le({uid:g,auth:e,email:u,emailVerified:H,displayName:f,isAnonymous:V,photoURL:m,phoneNumber:h,tenantId:d,stsTokenManager:L,createdAt:v,lastLoginAt:z});return C&&Array.isArray(C)&&(b.providerData=C.map((e=>Object.assign({},e)))),p&&(b._redirectEventId=p),b}static async _fromIdTokenResponse(e,c,t=!1){const n=new re;n.updateFromServerResponse(c);const i=new le({uid:c.localId,auth:e,stsTokenManager:n,isAnonymous:t});return await te(i),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe=new Map;function ue(e){w(e instanceof Function,"Expected a class definition");let c=fe.get(e);return c?(w(c instanceof e,"Instance stored in cache mismatched with class"),c):(c=new e,fe.set(e,c),c)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,c){this.storage[e]=c}async _get(e){const c=this.storage[e];return void 0===c?null:c}async _remove(e){delete this.storage[e]}_addListener(e,c){}_removeListener(e,c){}}he.type="NONE";const me=he;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(e,c,t){return`firebase:${e}:${c}:${t}`}class pe{constructor(e,c,t){this.persistence=e,this.auth=c,this.userKey=t;const{config:n,name:i}=this.auth;this.fullUserKey=de(this.userKey,n.apiKey,i),this.fullPersistenceKey=de("persistence",n.apiKey,i),this.boundEventHandler=c._onStorageEvent.bind(c),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?le._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const c=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,c?this.setCurrentUser(c):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,c,t="authUser"){if(!c.length)return new pe(ue(me),e,t);const n=(await Promise.all(c.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=n[0]||ue(me);const a=de(t,e.config.apiKey,e.name);let s=null;for(const l of c)try{const c=await l._get(a);if(c){const t=le._fromJSON(e,c);l!==i&&(s=t),i=l;break}}catch(o){}const r=n.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&r.length?(i=r[0],s&&await i._set(a,s.toJSON()),await Promise.all(c.map((async e=>{if(e!==i)try{await e._remove(a)}catch(o){}}))),new pe(i,e,t)):new pe(i,e,t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(e){const c=e.toLowerCase();if(c.includes("opera/")||c.includes("opr/")||c.includes("opios/"))return"Opera";if(Ve(c))return"IEMobile";if(c.includes("msie")||c.includes("trident/"))return"IE";if(c.includes("edge/"))return"Edge";if(ze(c))return"Firefox";if(c.includes("silk/"))return"Silk";if(Me(c))return"Blackberry";if(Le(c))return"Webos";if(ge(c))return"Safari";if((c.includes("chrome/")||He(c))&&!c.includes("edge/"))return"Chrome";if(Ce(c))return"Android";{const c=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,t=e.match(c);if(2===(null===t||void 0===t?void 0:t.length))return t[1]}return"Other"}function ze(e=(0,i.z$)()){return/firefox\//i.test(e)}function ge(e=(0,i.z$)()){const c=e.toLowerCase();return c.includes("safari/")&&!c.includes("chrome/")&&!c.includes("crios/")&&!c.includes("android")}function He(e=(0,i.z$)()){return/crios\//i.test(e)}function Ve(e=(0,i.z$)()){return/iemobile/i.test(e)}function Ce(e=(0,i.z$)()){return/android/i.test(e)}function Me(e=(0,i.z$)()){return/blackberry/i.test(e)}function Le(e=(0,i.z$)()){return/webos/i.test(e)}function ye(e=(0,i.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function be(e=(0,i.z$)()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function we(e=(0,i.z$)()){var c;return ye(e)&&!!(null===(c=window.navigator)||void 0===c?void 0:c.standalone)}function Ne(){return(0,i.w1)()&&10===document.documentMode}function xe(e=(0,i.z$)()){return ye(e)||Ce(e)||Le(e)||Me(e)||/windows phone/i.test(e)||Ve(e)}function _e(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(e,c=[]){let t;switch(e){case"Browser":t=ve((0,i.z$)());break;case"Worker":t=`${ve((0,i.z$)())}-${e}`;break;default:t=e}const n=c.length?c.join(","):"FirebaseCore-web";return`${t}/JsCore/${a.SDK_VERSION}/${n}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ke(e){return(await D(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Ie(e,c){return D(e,"GET","/v2/recaptchaConfig",P(e,c))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(e){return void 0!==e&&void 0!==e.getResponse}function Te(e){return void 0!==e&&void 0!==e.enterprise}class Ee{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(){var e,c;return null!==(c=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==c?c:document}function Pe(e){return new Promise(((c,t)=>{const n=document.createElement("script");n.setAttribute("src",e),n.onload=c,n.onerror=e=>{const c=V("internal-error");c.customData=e,t(c)},n.type="text/javascript",n.charset="UTF-8",Re().appendChild(n)}))}function De(e){return`__${e}${Math.floor(1e6*Math.random())}`}const Oe="https://www.google.com/recaptcha/enterprise.js?render=",Fe="recaptcha-enterprise",Ue="NO_RECAPTCHA";class qe{constructor(e){this.type=Fe,this.auth=We(e)}async verify(e="verify",c=!1){async function t(e){if(!c){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(c,t)=>{Ie(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((n=>{if(void 0!==n.recaptchaKey){const t=new Ee(n);return null==e.tenantId?e._agentRecaptchaConfig=t:e._tenantRecaptchaConfigs[e.tenantId]=t,c(t.siteKey)}t(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{t(e)}))}))}function n(c,t,n){const i=window.grecaptcha;Te(i)?i.enterprise.ready((()=>{i.enterprise.execute(c,{action:e}).then((e=>{t(e)})).catch((()=>{t(Ue)}))})):n(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{t(this.auth).then((t=>{if(!c&&Te(window.grecaptcha))n(t,e,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));Pe(Oe+t).then((()=>{n(t,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function Be(e,c,t,n=!1){const i=new qe(e);let a;try{a=await i.verify(t)}catch(r){a=await i.verify(t,!0)}const s=Object.assign({},c);return n?Object.assign(s,{captchaResp:a}):Object.assign(s,{captchaResponse:a}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,c){const t=c=>new Promise(((t,n)=>{try{const n=e(c);t(n)}catch(i){n(i)}}));t.onAbort=c,this.queue.push(t);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const c=[];try{for(const t of this.queue)await t(e),t.onAbort&&c.push(t.onAbort)}catch(t){c.reverse();for(const e of c)try{e()}catch(n){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===t||void 0===t?void 0:t.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,c,t,n){this.app=e,this.heartbeatServiceProvider=c,this.appCheckServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $e(this),this.idTokenSubscription=new $e(this),this.beforeStateQueue=new je(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,c){return c&&(this._popupRedirectResolver=ue(c)),this._initializationPromise=this.queue((async()=>{var t,n;if(!this._deleted&&(this.persistenceManager=await pe.create(this,e),!this._deleted)){if(null===(t=this._popupRedirectResolver)||void 0===t?void 0:t._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(c),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var c;const t=await this.assertedPersistence.getCurrentUser();let n=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const t=null===(c=this.redirectUser)||void 0===c?void 0:c._redirectEventId,a=null===n||void 0===n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);t&&t!==a||!(null===s||void 0===s?void 0:s.user)||(n=s.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(a){n=t,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(a)))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let c=null;try{c=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(t){await this._setRedirectUser(null)}return c}async reloadAndSetCurrentUserOrClear(e){try{await te(e)}catch(c){if("auth/network-request-failed"!==(null===c||void 0===c?void 0:c.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=k()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const c=e?(0,i.m9)(e):null;return c&&y(c.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(c&&c._clone(this))}async _updateCurrentUser(e,c=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),c||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(ue(e))}))}async initializeRecaptchaConfig(){const e=await Ie(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),c=new Ee(e);if(null==this.tenantId?this._agentRecaptchaConfig=c:this._tenantRecaptchaConfigs[this.tenantId]=c,c.emailPasswordEnabled){const e=new qe(this);e.verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.LL("auth","Firebase",e())}onAuthStateChanged(e,c,t){return this.registerStateListener(this.authStateSubscription,e,c,t)}beforeAuthStateChanged(e,c){return this.beforeStateQueue.pushCallback(e,c)}onIdTokenChanged(e,c,t){return this.registerStateListener(this.idTokenSubscription,e,c,t)}authStateReady(){return new Promise(((e,c)=>{if(this.currentUser)e();else{const t=this.onAuthStateChanged((()=>{t(),e()}),c)}}))}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,c){const t=await this.getOrInitRedirectPersistenceManager(c);return null===e?t.removeCurrentUser():t.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const c=e&&ue(e)||this._popupRedirectResolver;y(c,this,"argument-error"),this.redirectPersistenceManager=await pe.create(this,[ue(c._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var c,t;return this._isInitialized&&await this.queue((async()=>{})),(null===(c=this._currentUser)||void 0===c?void 0:c._redirectEventId)===e?this._currentUser:(null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,c;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=null!==(c=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==c?c:null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,c,t,n){if(this._deleted)return()=>{};const i="function"===typeof c?c:c.next.bind(c),a=this._isInitialized?Promise.resolve():this._initializationPromise;return y(a,this,"internal-error"),a.then((()=>i(this.currentUser))),"function"===typeof c?e.addObserver(c,t,n):e.addObserver(c)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Se(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const c={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(c["X-Firebase-gmpid"]=this.app.options.appId);const t=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());t&&(c["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(c["X-Firebase-AppCheck"]=n),c}async _getAppCheckToken(){var e;const c=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===c||void 0===c?void 0:c.error)&&z(`Error while retrieving App Check token: ${c.error}`),null===c||void 0===c?void 0:c.token}}function We(e){return(0,i.m9)(e)}class $e{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.ne)((e=>this.observer=e))}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(e,c){const t=(null===c||void 0===c?void 0:c.persistence)||[],n=(Array.isArray(t)?t:[t]).map(ue);(null===c||void 0===c?void 0:c.errorMap)&&e._updateErrorMap(c.errorMap),e._initializeWithPersistence(n,null===c||void 0===c?void 0:c.popupRedirectResolver)}function Ze(e,c,t){const n=We(e);y(n._canInitEmulator,n,"emulator-config-failed"),y(/^https?:\/\//.test(c),n,"invalid-emulator-scheme");const i=!!(null===t||void 0===t?void 0:t.disableWarnings),a=Ye(c),{host:s,port:r}=Qe(c),o=null===r?"":`:${r}`;n.config.emulator={url:`${a}//${s}${o}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:s,port:r,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Xe()}function Ye(e){const c=e.indexOf(":");return c<0?"":e.substr(0,c+1)}function Qe(e){const c=Ye(e),t=/(\/\/)?([^?#/]+)/.exec(e.substr(c.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const e=i[1];return{host:e,port:Je(n.substr(e.length+1))}}{const[e,c]=n.split(":");return{host:e,port:Je(c)}}}function Je(e){if(!e)return null;const c=Number(e);return isNaN(c)?null:c}function Xe(){function e(){const e=document.createElement("p"),c=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",c.position="fixed",c.width="100%",c.backgroundColor="#ffffff",c.border=".1em solid #000000",c.color="#b50000",c.bottom="0px",c.left="0px",c.margin="0px",c.zIndex="10000",c.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,c){this.providerId=e,this.signInMethod=c}toJSON(){return b("not implemented")}_getIdTokenResponse(e){return b("not implemented")}_linkToIdToken(e,c){return b("not implemented")}_getReauthenticationResolver(e){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cc(e,c){return D(e,"POST","/v1/accounts:resetPassword",P(e,c))}async function tc(e,c){return D(e,"POST","/v1/accounts:update",c)}async function nc(e,c){return D(e,"POST","/v1/accounts:update",P(e,c))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ic(e,c){return F(e,"POST","/v1/accounts:signInWithPassword",P(e,c))}async function ac(e,c){return D(e,"POST","/v1/accounts:sendOobCode",P(e,c))}async function sc(e,c){return ac(e,c)}async function rc(e,c){return ac(e,c)}async function oc(e,c){return ac(e,c)}async function lc(e,c){return ac(e,c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fc(e,c){return F(e,"POST","/v1/accounts:signInWithEmailLink",P(e,c))}async function uc(e,c){return F(e,"POST","/v1/accounts:signInWithEmailLink",P(e,c))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc extends ec{constructor(e,c,t,n=null){super("password",t),this._email=e,this._password=c,this._tenantId=n}static _fromEmailAndPassword(e,c){return new hc(e,c,"password")}static _fromEmailAndCode(e,c,t=null){return new hc(e,c,"emailLink",t)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const c="string"===typeof e?JSON.parse(e):e;if((null===c||void 0===c?void 0:c.email)&&(null===c||void 0===c?void 0:c.password)){if("password"===c.signInMethod)return this._fromEmailAndPassword(c.email,c.password);if("emailLink"===c.signInMethod)return this._fromEmailAndCode(c.email,c.password,c.tenantId)}return null}async _getIdTokenResponse(e){var c;switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(c=e._getRecaptchaConfig())||void 0===c?void 0:c.emailPasswordEnabled){const c=await Be(e,t,"signInWithPassword");return ic(e,c)}return ic(e,t).catch((async c=>{if("auth/missing-recaptcha-token"===c.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const c=await Be(e,t,"signInWithPassword");return ic(e,c)}return Promise.reject(c)}));case"emailLink":return fc(e,{email:this._email,oobCode:this._password});default:H(e,"internal-error")}}async _linkToIdToken(e,c){switch(this.signInMethod){case"password":return tc(e,{idToken:c,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return uc(e,{idToken:c,email:this._email,oobCode:this._password});default:H(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mc(e,c){return F(e,"POST","/v1/accounts:signInWithIdp",P(e,c))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc="http://localhost";class pc extends ec{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const c=new pc(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(c.idToken=e.idToken),e.accessToken&&(c.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(c.nonce=e.nonce),e.pendingToken&&(c.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(c.accessToken=e.oauthToken,c.secret=e.oauthTokenSecret):H("argument-error"),c}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const c="string"===typeof e?JSON.parse(e):e,{providerId:t,signInMethod:n}=c,i=s(c,["providerId","signInMethod"]);if(!t||!n)return null;const a=new pc(t,n);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const c=this.buildRequest();return mc(e,c)}_linkToIdToken(e,c){const t=this.buildRequest();return t.idToken=c,mc(e,t)}_getReauthenticationResolver(e){const c=this.buildRequest();return c.autoCreate=!1,mc(e,c)}buildRequest(){const e={requestUri:dc,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const c={};this.idToken&&(c["id_token"]=this.idToken),this.accessToken&&(c["access_token"]=this.accessToken),this.secret&&(c["oauth_token_secret"]=this.secret),c["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(c["nonce"]=this.nonce),e.postBody=(0,i.xO)(c)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vc(e,c){return D(e,"POST","/v1/accounts:sendVerificationCode",P(e,c))}async function zc(e,c){return F(e,"POST","/v1/accounts:signInWithPhoneNumber",P(e,c))}async function gc(e,c){const t=await F(e,"POST","/v1/accounts:signInWithPhoneNumber",P(e,c));if(t.temporaryProof)throw B(e,"account-exists-with-different-credential",t);return t}const Hc={["USER_NOT_FOUND"]:"user-not-found"};async function Vc(e,c){const t=Object.assign(Object.assign({},c),{operation:"REAUTH"});return F(e,"POST","/v1/accounts:signInWithPhoneNumber",P(e,t),Hc)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc extends ec{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,c){return new Cc({verificationId:e,verificationCode:c})}static _fromTokenResponse(e,c){return new Cc({phoneNumber:e,temporaryProof:c})}_getIdTokenResponse(e){return zc(e,this._makeVerificationRequest())}_linkToIdToken(e,c){return gc(e,Object.assign({idToken:c},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Vc(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:c,verificationId:t,verificationCode:n}=this.params;return e&&c?{temporaryProof:e,phoneNumber:c}:{sessionInfo:t,code:n}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:c,verificationCode:t,phoneNumber:n,temporaryProof:i}=e;return t||c||n||i?new Cc({verificationId:c,verificationCode:t,phoneNumber:n,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Lc(e){const c=(0,i.zd)((0,i.pd)(e))["link"],t=c?(0,i.zd)((0,i.pd)(c))["deep_link_id"]:null,n=(0,i.zd)((0,i.pd)(e))["deep_link_id"],a=n?(0,i.zd)((0,i.pd)(n))["link"]:null;return a||n||t||c||e}class yc{constructor(e){var c,t,n,a,s,r;const o=(0,i.zd)((0,i.pd)(e)),l=null!==(c=o["apiKey"])&&void 0!==c?c:null,f=null!==(t=o["oobCode"])&&void 0!==t?t:null,u=Mc(null!==(n=o["mode"])&&void 0!==n?n:null);y(l&&f&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=f,this.continueUrl=null!==(a=o["continueUrl"])&&void 0!==a?a:null,this.languageCode=null!==(s=o["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(r=o["tenantId"])&&void 0!==r?r:null}static parseLink(e){const c=Lc(e);try{return new yc(c)}catch(t){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bc{constructor(){this.providerId=bc.PROVIDER_ID}static credential(e,c){return hc._fromEmailAndPassword(e,c)}static credentialWithLink(e,c){const t=yc.parseLink(c);return y(t,"argument-error"),hc._fromEmailAndCode(e,t.code,t.tenantId)}}bc.PROVIDER_ID="password",bc.EMAIL_PASSWORD_SIGN_IN_METHOD="password",bc.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc extends wc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class xc extends Nc{static credentialFromJSON(e){const c="string"===typeof e?JSON.parse(e):e;return y("providerId"in c&&"signInMethod"in c,"argument-error"),pc._fromParams(c)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return y(e.idToken||e.accessToken,"argument-error"),pc._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return xc.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return xc.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:c,oauthAccessToken:t,oauthTokenSecret:n,pendingToken:i,nonce:a,providerId:s}=e;if(!t&&!n&&!c&&!i)return null;if(!s)return null;try{return new xc(s)._credential({idToken:c,accessToken:t,nonce:a,pendingToken:i})}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c extends Nc{constructor(){super("facebook.com")}static credential(e){return pc._fromParams({providerId:_c.PROVIDER_ID,signInMethod:_c.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _c.credentialFromTaggedObject(e)}static credentialFromError(e){return _c.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return _c.credential(e.oauthAccessToken)}catch(c){return null}}}_c.FACEBOOK_SIGN_IN_METHOD="facebook.com",_c.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sc extends Nc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,c){return pc._fromParams({providerId:Sc.PROVIDER_ID,signInMethod:Sc.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:c})}static credentialFromResult(e){return Sc.credentialFromTaggedObject(e)}static credentialFromError(e){return Sc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:c,oauthAccessToken:t}=e;if(!c&&!t)return null;try{return Sc.credential(c,t)}catch(n){return null}}}Sc.GOOGLE_SIGN_IN_METHOD="google.com",Sc.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kc extends Nc{constructor(){super("github.com")}static credential(e){return pc._fromParams({providerId:kc.PROVIDER_ID,signInMethod:kc.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kc.credentialFromTaggedObject(e)}static credentialFromError(e){return kc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return kc.credential(e.oauthAccessToken)}catch(c){return null}}}kc.GITHUB_SIGN_IN_METHOD="github.com",kc.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ic="http://localhost";class Ac extends ec{constructor(e,c){super(e,e),this.pendingToken=c}_getIdTokenResponse(e){const c=this.buildRequest();return mc(e,c)}_linkToIdToken(e,c){const t=this.buildRequest();return t.idToken=c,mc(e,t)}_getReauthenticationResolver(e){const c=this.buildRequest();return c.autoCreate=!1,mc(e,c)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const c="string"===typeof e?JSON.parse(e):e,{providerId:t,signInMethod:n,pendingToken:i}=c;return t&&n&&i&&t===n?new Ac(t,i):null}static _create(e,c){return new Ac(e,c)}buildRequest(){return{requestUri:Ic,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc="saml.";class Ec extends wc{constructor(e){y(e.startsWith(Tc),"argument-error"),super(e)}static credentialFromResult(e){return Ec.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Ec.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const c=Ac.fromJSON(e);return y(c,"argument-error"),c}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:c,providerId:t}=e;if(!c||!t)return null;try{return Ac._create(t,c)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc extends Nc{constructor(){super("twitter.com")}static credential(e,c){return pc._fromParams({providerId:Rc.PROVIDER_ID,signInMethod:Rc.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:c})}static credentialFromResult(e){return Rc.credentialFromTaggedObject(e)}static credentialFromError(e){return Rc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:c,oauthTokenSecret:t}=e;if(!c||!t)return null;try{return Rc.credential(c,t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Pc(e,c){return F(e,"POST","/v1/accounts:signUp",P(e,c))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rc.TWITTER_SIGN_IN_METHOD="twitter.com",Rc.PROVIDER_ID="twitter.com";class Dc{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,c,t,n=!1){const i=await le._fromIdTokenResponse(e,t,n),a=Oc(t),s=new Dc({user:i,providerId:a,_tokenResponse:t,operationType:c});return s}static async _forOperation(e,c,t){await e._updateTokensIfNecessary(t,!0);const n=Oc(t);return new Dc({user:e,providerId:n,_tokenResponse:t,operationType:c})}}function Oc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fc(e){var c;const t=We(e);if(await t._initializationPromise,null===(c=t.currentUser)||void 0===c?void 0:c.isAnonymous)return new Dc({user:t.currentUser,providerId:null,operationType:"signIn"});const n=await Pc(t,{returnSecureToken:!0}),i=await Dc._fromIdTokenResponse(t,"signIn",n,!0);return await t._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc extends i.ZR{constructor(e,c,t,n){var i;super(c.code,c.message),this.operationType=t,this.user=n,Object.setPrototypeOf(this,Uc.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:c.customData._serverResponse,operationType:t}}static _fromErrorAndOperation(e,c,t,n){return new Uc(e,c,t,n)}}function qc(e,c,t,n){const i="reauthenticate"===c?t._getReauthenticationResolver(e):t._getIdTokenResponse(e);return i.catch((t=>{if("auth/multi-factor-auth-required"===t.code)throw Uc._fromErrorAndOperation(e,t,c,n);throw t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jc(e,c){const t=(0,i.m9)(e);await Wc(!0,t,c);const{providerUserInfo:n}=await G(t.auth,{idToken:await t.getIdToken(),deleteProvider:[c]}),a=Bc(n||[]);return t.providerData=t.providerData.filter((e=>a.has(e.providerId))),a.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Gc(e,c,t=!1){const n=await J(e,c._linkToIdToken(e.auth,await e.getIdToken()),t);return Dc._forOperation(e,"link",n)}async function Wc(e,c,t){await te(c);const n=Bc(c.providerData),i=!1===e?"provider-already-linked":"no-such-provider";y(n.has(t)===e,c.auth,i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $c(e,c,t=!1){const{auth:n}=e,i="reauthenticate";try{const a=await J(e,qc(n,i,c,e),t);y(a.idToken,n,"internal-error");const s=Y(a.idToken);y(s,n,"internal-error");const{sub:r}=s;return y(e.uid===r,n,"user-mismatch"),Dc._forOperation(e,i,a)}catch(a){throw"auth/user-not-found"===(null===a||void 0===a?void 0:a.code)&&H(n,"user-mismatch"),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kc(e,c,t=!1){const n="signIn",i=await qc(e,n,c),a=await Dc._fromIdTokenResponse(e,n,i);return t||await e._updateCurrentUser(a.user),a}async function Zc(e,c){return Kc(We(e),c)}async function Yc(e,c){const t=(0,i.m9)(e);return await Wc(!1,t,c.providerId),Gc(t,c)}async function Qc(e,c){return $c((0,i.m9)(e),c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jc(e,c){return F(e,"POST","/v1/accounts:signInWithCustomToken",P(e,c))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xc(e,c){const t=We(e),n=await Jc(t,{token:c,returnSecureToken:!0}),i=await Dc._fromIdTokenResponse(t,"signIn",n);return await t._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,c){this.factorId=e,this.uid=c.mfaEnrollmentId,this.enrollmentTime=new Date(c.enrolledAt).toUTCString(),this.displayName=c.displayName}static _fromServerResponse(e,c){return"phoneInfo"in c?ct._fromServerResponse(e,c):"totpInfo"in c?tt._fromServerResponse(e,c):H(e,"internal-error")}}class ct extends et{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,c){return new ct(c)}}class tt extends et{constructor(e){super("totp",e)}static _fromServerResponse(e,c){return new tt(c)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(e,c,t){var n;y((null===(n=t.url)||void 0===n?void 0:n.length)>0,e,"invalid-continue-uri"),y("undefined"===typeof t.dynamicLinkDomain||t.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),c.continueUrl=t.url,c.dynamicLinkDomain=t.dynamicLinkDomain,c.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(y(t.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),c.iOSBundleId=t.iOS.bundleId),t.android&&(y(t.android.packageName.length>0,e,"missing-android-pkg-name"),c.androidInstallApp=t.android.installApp,c.androidMinimumVersionCode=t.android.minimumVersion,c.androidPackageName=t.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function it(e,c,t){var n;const i=We(e),a={requestType:"PASSWORD_RESET",email:c,clientType:"CLIENT_TYPE_WEB"};if(null===(n=i._getRecaptchaConfig())||void 0===n?void 0:n.emailPasswordEnabled){const e=await Be(i,a,"getOobCode",!0);t&&nt(i,e,t),await rc(i,e)}else t&&nt(i,a,t),await rc(i,a).catch((async e=>{if("auth/missing-recaptcha-token"!==e.code)return Promise.reject(e);{console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const e=await Be(i,a,"getOobCode",!0);t&&nt(i,e,t),await rc(i,e)}}))}async function at(e,c,t){await cc((0,i.m9)(e),{oobCode:c,newPassword:t})}async function st(e,c){await nc((0,i.m9)(e),{oobCode:c})}async function rt(e,c){const t=(0,i.m9)(e),n=await cc(t,{oobCode:c}),a=n.requestType;switch(y(a,t,"internal-error"),a){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":y(n.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":y(n.mfaInfo,t,"internal-error");default:y(n.email,t,"internal-error")}let s=null;return n.mfaInfo&&(s=et._fromServerResponse(We(t),n.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===n.requestType?n.newEmail:n.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===n.requestType?n.email:n.newEmail)||null,multiFactorInfo:s},operation:a}}async function ot(e,c){const{data:t}=await rt((0,i.m9)(e),c);return t.email}async function lt(e,c,t){var n;const i=We(e),a={returnSecureToken:!0,email:c,password:t,clientType:"CLIENT_TYPE_WEB"};let s;if(null===(n=i._getRecaptchaConfig())||void 0===n?void 0:n.emailPasswordEnabled){const e=await Be(i,a,"signUpPassword");s=Pc(i,e)}else s=Pc(i,a).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await Be(i,a,"signUpPassword");return Pc(i,e)}return Promise.reject(e)}));const r=await s.catch((e=>Promise.reject(e))),o=await Dc._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(o.user),o}function ft(e,c,t){return Zc((0,i.m9)(e),bc.credential(c,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ut(e,c,t){var n;const i=We(e),a={requestType:"EMAIL_SIGNIN",email:c,clientType:"CLIENT_TYPE_WEB"};function s(e,c){y(c.handleCodeInApp,i,"argument-error"),c&&nt(i,e,c)}if(null===(n=i._getRecaptchaConfig())||void 0===n?void 0:n.emailPasswordEnabled){const e=await Be(i,a,"getOobCode",!0);s(e,t),await oc(i,e)}else s(a,t),await oc(i,a).catch((async e=>{if("auth/missing-recaptcha-token"!==e.code)return Promise.reject(e);{console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const e=await Be(i,a,"getOobCode",!0);s(e,t),await oc(i,e)}}))}function ht(e,c){const t=yc.parseLink(c);return"EMAIL_SIGNIN"===(null===t||void 0===t?void 0:t.operation)}async function mt(e,c,t){const n=(0,i.m9)(e),a=bc.credentialWithLink(c,t||N());return y(a._tenantId===(n.tenantId||null),n,"tenant-id-mismatch"),Zc(n,a)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dt(e,c){return D(e,"POST","/v1/accounts:createAuthUri",P(e,c))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pt(e,c){const t=x()?N():"http://localhost",n={identifier:c,continueUri:t},{signinMethods:a}=await dt((0,i.m9)(e),n);return a||[]}async function vt(e,c){const t=(0,i.m9)(e),n=await e.getIdToken(),a={requestType:"VERIFY_EMAIL",idToken:n};c&&nt(t.auth,a,c);const{email:s}=await sc(t.auth,a);s!==e.email&&await e.reload()}async function zt(e,c,t){const n=(0,i.m9)(e),a=await e.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:a,newEmail:c};t&&nt(n.auth,s,t);const{email:r}=await lc(n.auth,s);r!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gt(e,c){return D(e,"POST","/v1/accounts:update",c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ht(e,{displayName:c,photoURL:t}){if(void 0===c&&void 0===t)return;const n=(0,i.m9)(e),a=await n.getIdToken(),s={idToken:a,displayName:c,photoUrl:t,returnSecureToken:!0},r=await J(n,gt(n.auth,s));n.displayName=r.displayName||null,n.photoURL=r.photoUrl||null;const o=n.providerData.find((({providerId:e})=>"password"===e));o&&(o.displayName=n.displayName,o.photoURL=n.photoURL),await n._updateTokensIfNecessary(r)}function Vt(e,c){return Mt((0,i.m9)(e),c,null)}function Ct(e,c){return Mt((0,i.m9)(e),null,c)}async function Mt(e,c,t){const{auth:n}=e,i=await e.getIdToken(),a={idToken:i,returnSecureToken:!0};c&&(a.email=c),t&&(a.password=t);const s=await J(e,tc(n,a));await e._updateTokensIfNecessary(s,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(e){var c,t;if(!e)return null;const{providerId:n}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},a=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!n&&(null===e||void 0===e?void 0:e.idToken)){const n=null===(t=null===(c=Y(e.idToken))||void 0===c?void 0:c.firebase)||void 0===t?void 0:t["sign_in_provider"];if(n){const e="anonymous"!==n&&"custom"!==n?n:null;return new yt(a,e)}}if(!n)return null;switch(n){case"facebook.com":return new wt(a,i);case"github.com":return new Nt(a,i);case"google.com":return new xt(a,i);case"twitter.com":return new _t(a,i,e.screenName||null);case"custom":case"anonymous":return new yt(a,null);default:return new yt(a,n,i)}}class yt{constructor(e,c,t={}){this.isNewUser=e,this.providerId=c,this.profile=t}}class bt extends yt{constructor(e,c,t,n){super(e,c,t),this.username=n}}class wt extends yt{constructor(e,c){super(e,"facebook.com",c)}}class Nt extends bt{constructor(e,c){super(e,"github.com",c,"string"===typeof(null===c||void 0===c?void 0:c.login)?null===c||void 0===c?void 0:c.login:null)}}class xt extends yt{constructor(e,c){super(e,"google.com",c)}}class _t extends bt{constructor(e,c,t){super(e,"twitter.com",c,t)}}function St(e){const{user:c,_tokenResponse:t}=e;return c.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:Lt(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kt{constructor(e,c,t){this.type=e,this.credential=c,this.user=t}static _fromIdtoken(e,c){return new kt("enroll",e,c)}static _fromMfaPendingCredential(e){return new kt("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var c,t;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(c=e.multiFactorSession)||void 0===c?void 0:c.pendingCredential)return kt._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.idToken)return kt._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,c,t){this.session=e,this.hints=c,this.signInResolver=t}static _fromError(e,c){const t=We(e),n=c.customData._serverResponse,i=(n.mfaInfo||[]).map((e=>et._fromServerResponse(t,e)));y(n.mfaPendingCredential,t,"internal-error");const a=kt._fromMfaPendingCredential(n.mfaPendingCredential);return new It(a,i,(async e=>{const i=await e._process(t,a);delete n.mfaInfo,delete n.mfaPendingCredential;const s=Object.assign(Object.assign({},n),{idToken:i.idToken,refreshToken:i.refreshToken});switch(c.operationType){case"signIn":const e=await Dc._fromIdTokenResponse(t,c.operationType,s);return await t._updateCurrentUser(e.user),e;case"reauthenticate":return y(c.user,t,"internal-error"),Dc._forOperation(c.user,c.operationType,s);default:H(t,"internal-error")}}))}async resolveSignIn(e){const c=e;return this.signInResolver(c)}}function At(e,c){var t;const n=(0,i.m9)(e),a=c;return y(c.customData.operationType,n,"argument-error"),y(null===(t=a.customData._serverResponse)||void 0===t?void 0:t.mfaPendingCredential,n,"argument-error"),It._fromError(n,a)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(e,c){return D(e,"POST","/v2/accounts/mfaEnrollment:start",P(e,c))}function Et(e,c){return D(e,"POST","/v2/accounts/mfaEnrollment:finalize",P(e,c))}function Rt(e,c){return D(e,"POST","/v2/accounts/mfaEnrollment:start",P(e,c))}function Pt(e,c){return D(e,"POST","/v2/accounts/mfaEnrollment:finalize",P(e,c))}function Dt(e,c){return D(e,"POST","/v2/accounts/mfaEnrollment:withdraw",P(e,c))}class Ot{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((c=>{c.mfaInfo&&(this.enrolledFactors=c.mfaInfo.map((c=>et._fromServerResponse(e.auth,c))))}))}static _fromUser(e){return new Ot(e)}async getSession(){return kt._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,c){const t=e,n=await this.getSession(),i=await J(this.user,t._process(this.user.auth,n,c));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const c="string"===typeof e?e:e.uid,t=await this.user.getIdToken();try{const e=await J(this.user,Dt(this.user.auth,{idToken:t,mfaEnrollmentId:c}));this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==c)),await this.user._updateTokensIfNecessary(e),await this.user.reload()}catch(n){throw n}}}const Ft=new WeakMap;function Ut(e){const c=(0,i.m9)(e);return Ft.has(c)||Ft.set(c,Ot._fromUser(c)),Ft.get(c)}const qt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,c){this.storageRetriever=e,this.type=c}_isAvailable(){try{return this.storage?(this.storage.setItem(qt,"1"),this.storage.removeItem(qt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,c){return this.storage.setItem(e,JSON.stringify(c)),Promise.resolve()}_get(e){const c=this.storage.getItem(e);return Promise.resolve(c?JSON.parse(c):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){const e=(0,i.z$)();return ge(e)||ye(e)}const Gt=1e3,Wt=10;class $t extends Bt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,c)=>this.onStorageEvent(e,c),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=jt()&&_e(),this.fallbackToPolling=xe(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const c of Object.keys(this.listeners)){const t=this.storage.getItem(c),n=this.localCache[c];t!==n&&e(c,n,t)}}onStorageEvent(e,c=!1){if(!e.key)return void this.forAllChangedKeys(((e,c,t)=>{this.notifyListeners(e,t)}));const t=e.key;if(c?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const n=this.storage.getItem(t);if(e.newValue!==n)null!==e.newValue?this.storage.setItem(t,e.newValue):this.storage.removeItem(t);else if(this.localCache[t]===e.newValue&&!c)return}const n=()=>{const e=this.storage.getItem(t);(c||this.localCache[t]!==e)&&this.notifyListeners(t,e)},i=this.storage.getItem(t);Ne()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,Wt):n()}notifyListeners(e,c){this.localCache[e]=c;const t=this.listeners[e];if(t)for(const n of Array.from(t))n(c?JSON.parse(c):c)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,c,t)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:c,newValue:t}),!0)}))}),Gt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,c){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(c)}_removeListener(e,c){this.listeners[e]&&(this.listeners[e].delete(c),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,c){await super._set(e,c),this.localCache[e]=JSON.stringify(c)}async _get(e){const c=await super._get(e);return this.localCache[e]=JSON.stringify(c),c}async _remove(e){await super._remove(e),delete this.localCache[e]}}$t.type="LOCAL";const Kt=$t;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends Bt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,c){}_removeListener(e,c){}}Zt.type="SESSION";const Yt=Zt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(e){return Promise.all(e.map((async e=>{try{const c=await e;return{fulfilled:!0,value:c}}catch(c){return{fulfilled:!1,reason:c}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const c=this.receivers.find((c=>c.isListeningto(e)));if(c)return c;const t=new Jt(e);return this.receivers.push(t),t}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const c=e,{eventId:t,eventType:n,data:i}=c.data,a=this.handlersMap[n];if(!(null===a||void 0===a?void 0:a.size))return;c.ports[0].postMessage({status:"ack",eventId:t,eventType:n});const s=Array.from(a).map((async e=>e(c.origin,i))),r=await Qt(s);c.ports[0].postMessage({status:"done",eventId:t,eventType:n,response:r})}_subscribe(e,c){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(c)}_unsubscribe(e,c){this.handlersMap[e]&&c&&this.handlersMap[e].delete(c),c&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xt(e="",c=10){let t="";for(let n=0;n<c;n++)t+=Math.floor(10*Math.random());return e+t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jt.receivers=[];class en{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,c,t=50){const n="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let i,a;return new Promise(((s,r)=>{const o=Xt("",20);n.port1.start();const l=setTimeout((()=>{r(new Error("unsupported_event"))}),t);a={messageChannel:n,onMessage(e){const c=e;if(c.data.eventId===o)switch(c.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{r(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),s(c.data.response);break;default:clearTimeout(l),clearTimeout(i),r(new Error("invalid_response"));break}}},this.handlers.add(a),n.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:o,data:c},[n.port2])})).finally((()=>{a&&this.removeMessageHandler(a)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(){return window}function tn(e){cn().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(){return"undefined"!==typeof cn()["WorkerGlobalScope"]&&"function"===typeof cn()["importScripts"]}async function an(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function sn(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function rn(){return nn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on="firebaseLocalStorageDb",ln=1,fn="firebaseLocalStorage",un="fbase_key";class hn{constructor(e){this.request=e}toPromise(){return new Promise(((e,c)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{c(this.request.error)}))}))}}function mn(e,c){return e.transaction([fn],c?"readwrite":"readonly").objectStore(fn)}function dn(){const e=indexedDB.deleteDatabase(on);return new hn(e).toPromise()}function pn(){const e=indexedDB.open(on,ln);return new Promise(((c,t)=>{e.addEventListener("error",(()=>{t(e.error)})),e.addEventListener("upgradeneeded",(()=>{const c=e.result;try{c.createObjectStore(fn,{keyPath:un})}catch(n){t(n)}})),e.addEventListener("success",(async()=>{const t=e.result;t.objectStoreNames.contains(fn)?c(t):(t.close(),await dn(),c(await pn()))}))}))}async function vn(e,c,t){const n=mn(e,!0).put({[un]:c,value:t});return new hn(n).toPromise()}async function zn(e,c){const t=mn(e,!1).get(c),n=await new hn(t).toPromise();return void 0===n?null:n.value}function gn(e,c){const t=mn(e,!0).delete(c);return new hn(t).toPromise()}const Hn=800,Vn=3;class Cn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await pn()),this.db}async _withRetries(e){let c=0;while(1)try{const c=await this._openDb();return await e(c)}catch(t){if(c++>Vn)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jt._getInstance(rn()),this.receiver._subscribe("keyChanged",(async(e,c)=>{const t=await this._poll();return{keyProcessed:t.includes(c.key)}})),this.receiver._subscribe("ping",(async(e,c)=>["keyChanged"]))}async initializeSender(){var e,c;if(this.activeServiceWorker=await an(),!this.activeServiceWorker)return;this.sender=new en(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(null===(e=t[0])||void 0===e?void 0:e.fulfilled)&&(null===(c=t[0])||void 0===c?void 0:c.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&sn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(c){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pn();return await vn(e,qt,"1"),await gn(e,qt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,c){return this._withPendingWrite((async()=>(await this._withRetries((t=>vn(t,e,c))),this.localCache[e]=c,this.notifyServiceWorker(e))))}async _get(e){const c=await this._withRetries((c=>zn(c,e)));return this.localCache[e]=c,c}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((c=>gn(c,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const c=mn(e,!1).getAll();return new hn(c).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const c=[],t=new Set;for(const{fbase_key:n,value:i}of e)t.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(i)&&(this.notifyListeners(n,i),c.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!t.has(n)&&(this.notifyListeners(n,null),c.push(n));return c}notifyListeners(e,c){this.localCache[e]=c;const t=this.listeners[e];if(t)for(const n of Array.from(t))n(c)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Hn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,c){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(c)}_removeListener(e,c){this.listeners[e]&&(this.listeners[e].delete(c),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Cn.type="LOCAL";const Mn=Cn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(e,c){return D(e,"POST","/v2/accounts/mfaSignIn:start",P(e,c))}function yn(e,c){return D(e,"POST","/v2/accounts/mfaSignIn:finalize",P(e,c))}function bn(e,c){return D(e,"POST","/v2/accounts/mfaSignIn:finalize",P(e,c))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=500,Nn=6e4,xn=1e12;class _n{constructor(e){this.auth=e,this.counter=xn,this._widgets=new Map}render(e,c){const t=this.counter;return this._widgets.set(t,new Sn(e,this.auth.name,c||{})),this.counter++,t}reset(e){var c;const t=e||xn;null===(c=this._widgets.get(t))||void 0===c||c.delete(),this._widgets.delete(t)}getResponse(e){var c;const t=e||xn;return(null===(c=this._widgets.get(t))||void 0===c?void 0:c.getResponse())||""}async execute(e){var c;const t=e||xn;return null===(c=this._widgets.get(t))||void 0===c||c.execute(),""}}class Sn{constructor(e,c,t){this.params=t,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const n="string"===typeof e?document.getElementById(e):e;y(n,"argument-error",{appName:c}),this.container=n,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=kn(50);const{callback:e,"expired-callback":c}=this.params;if(e)try{e(this.responseToken)}catch(t){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,c)try{c()}catch(t){}this.isVisible&&this.execute()}),Nn)}),wn))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function kn(e){const c=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<e;n++)c.push(t.charAt(Math.floor(Math.random()*t.length)));return c.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=De("rcb"),An=new I(3e4,6e4),Tn="https://www.google.com/recaptcha/api.js?";class En{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=cn().grecaptcha)||void 0===e?void 0:e.render)}load(e,c=""){return y(Rn(c),e,"argument-error"),this.shouldResolveImmediately(c)&&Ae(cn().grecaptcha)?Promise.resolve(cn().grecaptcha):new Promise(((t,n)=>{const a=cn().setTimeout((()=>{n(V(e,"network-request-failed"))}),An.get());cn()[In]=()=>{cn().clearTimeout(a),delete cn()[In];const i=cn().grecaptcha;if(!i||!Ae(i))return void n(V(e,"internal-error"));const s=i.render;i.render=(e,c)=>{const t=s(e,c);return this.counter++,t},this.hostLanguage=c,t(i)};const s=`${Tn}?${(0,i.xO)({onload:In,render:"explicit",hl:c})}`;Pe(s).catch((()=>{clearTimeout(a),n(V(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var c;return!!(null===(c=cn().grecaptcha)||void 0===c?void 0:c.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Rn(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class Pn{async load(e){return new _n(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn="recaptcha",On={theme:"light",type:"image"};class Fn{constructor(e,c,t=Object.assign({},On)){this.parameters=t,this.type=Dn,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=We(e),this.isInvisible="invisible"===this.parameters.size,y("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const n="string"===typeof c?document.getElementById(c):c;y(n,this.auth,"argument-error"),this.container=n,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Pn:new En,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),c=this.getAssertedRecaptcha(),t=c.getResponse(e);return t||new Promise((t=>{const n=e=>{e&&(this.tokenChangeListeners.delete(n),t(e))};this.tokenChangeListeners.add(n),this.isInvisible&&c.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){y(!this.parameters.sitekey,this.auth,"argument-error"),y(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),y("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return c=>{if(this.tokenChangeListeners.forEach((e=>e(c))),"function"===typeof e)e(c);else if("string"===typeof e){const t=cn()[e];"function"===typeof t&&t(c)}}}assertNotDestroyed(){y(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const c=document.createElement("div");e.appendChild(c),e=c}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){y(x()&&!nn(),this.auth,"internal-error"),await Un(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await ke(this.auth);y(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return y(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Un(){let e=null;return new Promise((c=>{"complete"!==document.readyState?(e=()=>c(),window.addEventListener("load",e)):c()})).catch((c=>{throw e&&window.removeEventListener("load",e),c}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,c){this.verificationId=e,this.onConfirmation=c}confirm(e){const c=Cc._fromVerification(this.verificationId,e);return this.onConfirmation(c)}}async function Bn(e,c,t){const n=We(e),a=await Wn(n,c,(0,i.m9)(t));return new qn(a,(e=>Zc(n,e)))}async function jn(e,c,t){const n=(0,i.m9)(e);await Wc(!1,n,"phone");const a=await Wn(n.auth,c,(0,i.m9)(t));return new qn(a,(e=>Yc(n,e)))}async function Gn(e,c,t){const n=(0,i.m9)(e),a=await Wn(n.auth,c,(0,i.m9)(t));return new qn(a,(e=>Qc(n,e)))}async function Wn(e,c,t){var n;const i=await t.verify();try{let a;if(y("string"===typeof i,e,"argument-error"),y(t.type===Dn,e,"argument-error"),a="string"===typeof c?{phoneNumber:c}:c,"session"in a){const c=a.session;if("phoneNumber"in a){y("enroll"===c.type,e,"internal-error");const t=await Tt(e,{idToken:c.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:i}});return t.phoneSessionInfo.sessionInfo}{y("signin"===c.type,e,"internal-error");const t=(null===(n=a.multiFactorHint)||void 0===n?void 0:n.uid)||a.multiFactorUid;y(t,e,"missing-multi-factor-info");const s=await Ln(e,{mfaPendingCredential:c.credential,mfaEnrollmentId:t,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:c}=await vc(e,{phoneNumber:a.phoneNumber,recaptchaToken:i});return c}}finally{t._reset()}}async function $n(e,c){await Gc((0,i.m9)(e),c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e){this.providerId=Kn.PROVIDER_ID,this.auth=We(e)}verifyPhoneNumber(e,c){return Wn(this.auth,e,(0,i.m9)(c))}static credential(e,c){return Cc._fromVerification(e,c)}static credentialFromResult(e){const c=e;return Kn.credentialFromTaggedObject(c)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:c,temporaryProof:t}=e;return c&&t?Cc._fromTokenResponse(c,t):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zn(e,c){return c?ue(c):(y(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kn.PROVIDER_ID="phone",Kn.PHONE_SIGN_IN_METHOD="phone";class Yn extends ec{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mc(e,this._buildIdpRequest())}_linkToIdToken(e,c){return mc(e,this._buildIdpRequest(c))}_getReauthenticationResolver(e){return mc(e,this._buildIdpRequest())}_buildIdpRequest(e){const c={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(c.idToken=e),c}}function Qn(e){return Kc(e.auth,new Yn(e),e.bypassAuthState)}function Jn(e){const{auth:c,user:t}=e;return y(t,c,"internal-error"),$c(t,new Yn(e),e.bypassAuthState)}async function Xn(e){const{auth:c,user:t}=e;return y(t,c,"internal-error"),Gc(t,new Yn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,c,t,n,i=!1){this.auth=e,this.resolver=t,this.user=n,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(c)?c:[c]}execute(){return new Promise((async(e,c)=>{this.pendingPromise={resolve:e,reject:c};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(e){const{urlResponse:c,sessionId:t,postBody:n,tenantId:i,error:a,type:s}=e;if(a)return void this.reject(a);const r={auth:this.auth,requestUri:c,sessionId:t,tenantId:i||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(r))}catch(o){this.reject(o)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Qn;case"linkViaPopup":case"linkViaRedirect":return Xn;case"reauthViaPopup":case"reauthViaRedirect":return Jn;default:H(this.auth,"internal-error")}}resolve(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=new I(2e3,1e4);async function ti(e,c,t){const n=We(e);M(e,c,wc);const i=Zn(n,t),a=new ai(n,"signInViaPopup",c,i);return a.executeNotNull()}async function ni(e,c,t){const n=(0,i.m9)(e);M(n.auth,c,wc);const a=Zn(n.auth,t),s=new ai(n.auth,"reauthViaPopup",c,a,n);return s.executeNotNull()}async function ii(e,c,t){const n=(0,i.m9)(e);M(n.auth,c,wc);const a=Zn(n.auth,t),s=new ai(n.auth,"linkViaPopup",c,a,n);return s.executeNotNull()}class ai extends ei{constructor(e,c,t,n,i){super(e,c,n,i),this.provider=t,this.authWindow=null,this.pollId=null,ai.currentPopupAction&&ai.currentPopupAction.cancel(),ai.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){w(1===this.filter.length,"Popup operations only handle one event");const e=Xt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(V(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(V(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ai.currentPopupAction=null}pollUserCancellation(){const e=()=>{var c,t;(null===(t=null===(c=this.authWindow)||void 0===c?void 0:c.window)||void 0===t?void 0:t.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(V(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,ci.get())};e()}}ai.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const si="pendingRedirect",ri=new Map;class oi extends ei{constructor(e,c,t=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],c,void 0,t),this.eventId=null}async execute(){let e=ri.get(this.auth._key());if(!e){try{const c=await li(this.resolver,this.auth),t=c?await super.execute():null;e=()=>Promise.resolve(t)}catch(c){e=()=>Promise.reject(c)}ri.set(this.auth._key(),e)}return this.bypassAuthState||ri.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const c=await this.auth._redirectUserForId(e.eventId);if(c)return this.user=c,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function li(e,c){const t=di(c),n=mi(e);if(!await n._isAvailable())return!1;const i="true"===await n._get(t);return await n._remove(t),i}async function fi(e,c){return mi(e)._set(di(c),"true")}function ui(){ri.clear()}function hi(e,c){ri.set(e._key(),c)}function mi(e){return ue(e._redirectPersistence)}function di(e){return de(si,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(e,c,t){return vi(e,c,t)}async function vi(e,c,t){const n=We(e);M(e,c,wc),await n._initializationPromise;const i=Zn(n,t);return await fi(i,n),i._openRedirect(n,c,"signInViaRedirect")}function zi(e,c,t){return gi(e,c,t)}async function gi(e,c,t){const n=(0,i.m9)(e);M(n.auth,c,wc),await n.auth._initializationPromise;const a=Zn(n.auth,t);await fi(a,n.auth);const s=await Li(n);return a._openRedirect(n.auth,c,"reauthViaRedirect",s)}function Hi(e,c,t){return Vi(e,c,t)}async function Vi(e,c,t){const n=(0,i.m9)(e);M(n.auth,c,wc),await n.auth._initializationPromise;const a=Zn(n.auth,t);await Wc(!1,n,c.providerId),await fi(a,n.auth);const s=await Li(n);return a._openRedirect(n.auth,c,"linkViaRedirect",s)}async function Ci(e,c){return await We(e)._initializationPromise,Mi(e,c,!1)}async function Mi(e,c,t=!1){const n=We(e),i=Zn(n,c),a=new oi(n,i,t),s=await a.execute();return s&&!t&&(delete s.user._redirectEventId,await n._persistUserIfCurrent(s.user),await n._setRedirectUser(null,c)),s}async function Li(e){const c=Xt(`${e.uid}:::`);return e._redirectEventId=c,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),c}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=6e5;class bi{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let c=!1;return this.consumers.forEach((t=>{this.isEventForConsumer(e,t)&&(c=!0,this.sendToConsumer(e,t),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!xi(e)||(this.hasHandledPotentialRedirect=!0,c||(this.queuedRedirectEvent=e,c=!0)),c}sendToConsumer(e,c){var t;if(e.error&&!Ni(e)){const n=(null===(t=e.error.code)||void 0===t?void 0:t.split("auth/")[1])||"internal-error";c.onError(V(this.auth,n))}else c.onAuthEvent(e)}isEventForConsumer(e,c){const t=null===c.eventId||!!e.eventId&&e.eventId===c.eventId;return c.filter.includes(e.type)&&t}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yi&&this.cachedEventUids.clear(),this.cachedEventUids.has(wi(e))}saveEventToCache(e){this.cachedEventUids.add(wi(e)),this.lastProcessedEventTime=Date.now()}}function wi(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Ni({type:e,error:c}){return"unknown"===e&&"auth/no-auth-event"===(null===c||void 0===c?void 0:c.code)}function xi(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ni(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _i(e,c={}){return D(e,"GET","/v1/projects",c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ki=/^https?/;async function Ii(e){if(e.config.emulator)return;const{authorizedDomains:c}=await _i(e);for(const n of c)try{if(Ai(n))return}catch(t){}H(e,"unauthorized-domain")}function Ai(e){const c=N(),{protocol:t,hostname:n}=new URL(c);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===n?"chrome-extension:"===t&&e.replace("chrome-extension://","")===c.replace("chrome-extension://",""):"chrome-extension:"===t&&i.hostname===n}if(!ki.test(t))return!1;if(Si.test(e))return n===e;const i=e.replace(/\./g,"\\."),a=new RegExp("^(.+\\."+i+"|"+i+")$","i");return a.test(n)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=new I(3e4,6e4);function Ei(){const e=cn().___jsl;if(null===e||void 0===e?void 0:e.H)for(const c of Object.keys(e.H))if(e.H[c].r=e.H[c].r||[],e.H[c].L=e.H[c].L||[],e.H[c].r=[...e.H[c].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function Ri(e){return new Promise(((c,t)=>{var n,i,a;function s(){Ei(),gapi.load("gapi.iframes",{callback:()=>{c(gapi.iframes.getContext())},ontimeout:()=>{Ei(),t(V(e,"network-request-failed"))},timeout:Ti.get()})}if(null===(i=null===(n=cn().gapi)||void 0===n?void 0:n.iframes)||void 0===i?void 0:i.Iframe)c(gapi.iframes.getContext());else{if(!(null===(a=cn().gapi)||void 0===a?void 0:a.load)){const c=De("iframefcb");return cn()[c]=()=>{gapi.load?s():t(V(e,"network-request-failed"))},Pe(`https://apis.google.com/js/api.js?onload=${c}`).catch((e=>t(e)))}s()}})).catch((e=>{throw Pi=null,e}))}let Pi=null;function Di(e){return Pi=Pi||Ri(e),Pi}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=new I(5e3,15e3),Fi="__/auth/iframe",Ui="emulator/auth/iframe",qi={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Bi=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ji(e){const c=e.config;y(c.authDomain,e,"auth-domain-config-required");const t=c.emulator?A(c,Ui):`https://${e.config.authDomain}/${Fi}`,n={apiKey:c.apiKey,appName:e.name,v:a.SDK_VERSION},s=Bi.get(e.config.apiHost);s&&(n.eid=s);const r=e._getFrameworks();return r.length&&(n.fw=r.join(",")),`${t}?${(0,i.xO)(n).slice(1)}`}async function Gi(e){const c=await Di(e),t=cn().gapi;return y(t,e,"internal-error"),c.open({where:document.body,url:ji(e),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qi,dontclear:!0},(c=>new Promise((async(t,n)=>{await c.restyle({setHideOnLeave:!1});const i=V(e,"network-request-failed"),a=cn().setTimeout((()=>{n(i)}),Oi.get());function s(){cn().clearTimeout(a),t(c)}c.ping(s).then(s,(()=>{n(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$i=500,Ki=600,Zi="_blank",Yi="http://localhost";class Qi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Ji(e,c,t,n=$i,a=Ki){const s=Math.max((window.screen.availHeight-a)/2,0).toString(),r=Math.max((window.screen.availWidth-n)/2,0).toString();let o="";const l=Object.assign(Object.assign({},Wi),{width:n.toString(),height:a.toString(),top:s,left:r}),f=(0,i.z$)().toLowerCase();t&&(o=He(f)?Zi:t),ze(f)&&(c=c||Yi,l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[c,t])=>`${e}${c}=${t},`),"");if(we(f)&&"_self"!==o)return Xi(c||"",o),new Qi(null);const h=window.open(c||"",o,u);y(h,e,"popup-blocked");try{h.focus()}catch(m){}return new Qi(h)}function Xi(e,c){const t=document.createElement("a");t.href=e,t.target=c;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea="__/auth/handler",ca="emulator/auth/handler",ta=encodeURIComponent("fac");async function na(e,c,t,n,s,r){y(e.config.authDomain,e,"auth-domain-config-required"),y(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:t,redirectUrl:n,v:a.SDK_VERSION,eventId:s};if(c instanceof wc){c.setDefaultLanguage(e.languageCode),o.providerId=c.providerId||"",(0,i.xb)(c.getCustomParameters())||(o.customParameters=JSON.stringify(c.getCustomParameters()));for(const[e,c]of Object.entries(r||{}))o[e]=c}if(c instanceof Nc){const e=c.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const l=o;for(const i of Object.keys(l))void 0===l[i]&&delete l[i];const f=await e._getAppCheckToken(),u=f?`#${ta}=${encodeURIComponent(f)}`:"";return`${ia(e)}?${(0,i.xO)(l).slice(1)}${u}`}function ia({config:e}){return e.emulator?A(e,ca):`https://${e.authDomain}/${ea}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa="webStorageSupport";class sa{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yt,this._completeRedirectFn=Mi,this._overrideRedirectResult=hi}async _openPopup(e,c,t,n){var i;w(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await na(e,c,t,N(),n);return Ji(e,a,Xt())}async _openRedirect(e,c,t,n){await this._originValidation(e);const i=await na(e,c,t,N(),n);return tn(i),new Promise((()=>{}))}_initialize(e){const c=e._key();if(this.eventManagers[c]){const{manager:e,promise:t}=this.eventManagers[c];return e?Promise.resolve(e):(w(t,"If manager is not set, promise should be"),t)}const t=this.initAndGetManager(e);return this.eventManagers[c]={promise:t},t.catch((()=>{delete this.eventManagers[c]})),t}async initAndGetManager(e){const c=await Gi(e),t=new bi(e);return c.register("authEvent",(c=>{y(null===c||void 0===c?void 0:c.authEvent,e,"invalid-auth-event");const n=t.onEvent(c.authEvent);return{status:n?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:t},this.iframes[e._key()]=c,t}_isIframeWebStorageSupported(e,c){const t=this.iframes[e._key()];t.send(aa,{type:aa},(t=>{var n;const i=null===(n=null===t||void 0===t?void 0:t[0])||void 0===n?void 0:n[aa];void 0!==i&&c(!!i),H(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const c=e._key();return this.originValidationPromises[c]||(this.originValidationPromises[c]=Ii(e)),this.originValidationPromises[c]}get _shouldInitProactively(){return xe()||ge()||ye()}}const ra=sa;class oa{constructor(e){this.factorId=e}_process(e,c,t){switch(c.type){case"enroll":return this._finalizeEnroll(e,c.credential,t);case"signin":return this._finalizeSignIn(e,c.credential);default:return b("unexpected MultiFactorSessionType")}}}class la extends oa{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new la(e)}_finalizeEnroll(e,c,t){return Et(e,{idToken:c,displayName:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,c){return yn(e,{mfaPendingCredential:c,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class fa{constructor(){}static assertion(e){return la._fromCredential(e)}}fa.FACTOR_ID="phone";class ua{static assertionForEnrollment(e,c){return ha._fromSecret(e,c)}static assertionForSignIn(e,c){return ha._fromEnrollmentId(e,c)}static async generateSecret(e){var c;const t=e;y("undefined"!==typeof(null===(c=t.user)||void 0===c?void 0:c.auth),"internal-error");const n=await Rt(t.user.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return ma._fromStartTotpMfaEnrollmentResponse(n,t.user.auth)}}ua.FACTOR_ID="totp";class ha extends oa{constructor(e,c,t){super("totp"),this.otp=e,this.enrollmentId=c,this.secret=t}static _fromSecret(e,c){return new ha(c,void 0,e)}static _fromEnrollmentId(e,c){return new ha(c,e)}async _finalizeEnroll(e,c,t){return y("undefined"!==typeof this.secret,e,"argument-error"),Pt(e,{idToken:c,displayName:t,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,c){y(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const t={verificationCode:this.otp};return bn(e,{mfaPendingCredential:c,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:t})}}class ma{constructor(e,c,t,n,i,a,s){this.sessionInfo=a,this.auth=s,this.secretKey=e,this.hashingAlgorithm=c,this.codeLength=t,this.codeIntervalSeconds=n,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,c){return new ma(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,c)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,c){var t;let n=!1;return(da(e)||da(c))&&(n=!0),n&&(da(e)&&(e=(null===(t=this.auth.currentUser)||void 0===t?void 0:t.email)||"unknownuser"),da(c)&&(c=this.auth.name)),`otpauth://totp/${c}:${e}?secret=${this.secretKey}&issuer=${c}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function da(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var pa="@firebase/auth",va="1.1.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class za{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const c=await this.auth.currentUser.getIdToken(e);return{accessToken:c}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const c=this.auth.onIdTokenChanged((c=>{e((null===c||void 0===c?void 0:c.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,c),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const c=this.internalListeners.get(e);c&&(this.internalListeners.delete(e),c(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ha(e){(0,a._registerComponent)(new o.wA("auth",((c,{options:t})=>{const n=c.getProvider("app").getImmediate(),i=c.getProvider("heartbeat"),a=c.getProvider("app-check-internal"),{apiKey:s,authDomain:r}=n.options;y(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const o={apiKey:s,authDomain:r,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Se(e)},l=new Ge(n,i,a,o);return Ke(l,t),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,c,t)=>{const n=e.getProvider("auth-internal");n.initialize()}))),(0,a._registerComponent)(new o.wA("auth-internal",(e=>{const c=We(e.getProvider("auth").getImmediate());return(e=>new za(e))(c)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,a.registerVersion)(pa,va,ga(e)),(0,a.registerVersion)(pa,va,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va=300;(0,i.Pz)("authIdTokenMaxAge");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ca(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ha("Browser");const Ma=2e3;async function La(e,c,t){var n;const{BuildInfo:i}=Ca();w(c.sessionId,"AuthEvent did not contain a session ID");const a=await xa(c.sessionId),s={};return ye()?s["ibi"]=i.packageName:Ce()?s["apn"]=i.packageName:H(e,"operation-not-supported-in-this-environment"),i.displayName&&(s["appDisplayName"]=i.displayName),s["sessionId"]=a,na(e,t,c.type,void 0,null!==(n=c.eventId)&&void 0!==n?n:void 0,s)}async function ya(e){const{BuildInfo:c}=Ca(),t={};ye()?t.iosBundleId=c.packageName:Ce()?t.androidPackageName=c.packageName:H(e,"operation-not-supported-in-this-environment"),await _i(e,t)}function ba(e){const{cordova:c}=Ca();return new Promise((t=>{c.plugins.browsertab.isAvailable((n=>{let i=null;n?c.plugins.browsertab.openUrl(e):i=c.InAppBrowser.open(e,be()?"_blank":"_system","location=yes"),t(i)}))}))}async function wa(e,c,t){const{cordova:n}=Ca();let i=()=>{};try{await new Promise(((a,s)=>{let r=null;function o(){var e;a();const c=null===(e=n.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof c&&c(),"function"===typeof(null===t||void 0===t?void 0:t.close)&&t.close()}function l(){r||(r=window.setTimeout((()=>{s(V(e,"redirect-cancelled-by-user"))}),Ma))}function f(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&l()}c.addPassiveListener(o),document.addEventListener("resume",l,!1),Ce()&&document.addEventListener("visibilitychange",f,!1),i=()=>{c.removePassiveListener(o),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",f,!1),r&&window.clearTimeout(r)}}))}finally{i()}}function Na(e){var c,t,n,i,a,s,r,o,l,f;const u=Ca();y("function"===typeof(null===(c=null===u||void 0===u?void 0:u.universalLinks)||void 0===c?void 0:c.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),y("undefined"!==typeof(null===(t=null===u||void 0===u?void 0:u.BuildInfo)||void 0===t?void 0:t.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),y("function"===typeof(null===(a=null===(i=null===(n=null===u||void 0===u?void 0:u.cordova)||void 0===n?void 0:n.plugins)||void 0===i?void 0:i.browsertab)||void 0===a?void 0:a.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),y("function"===typeof(null===(o=null===(r=null===(s=null===u||void 0===u?void 0:u.cordova)||void 0===s?void 0:s.plugins)||void 0===r?void 0:r.browsertab)||void 0===o?void 0:o.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),y("function"===typeof(null===(f=null===(l=null===u||void 0===u?void 0:u.cordova)||void 0===l?void 0:l.InAppBrowser)||void 0===f?void 0:f.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function xa(e){const c=_a(e),t=await crypto.subtle.digest("SHA-256",c),n=Array.from(new Uint8Array(t));return n.map((e=>e.toString(16).padStart(2,"0"))).join("")}function _a(e){if(w(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const c=new ArrayBuffer(e.length),t=new Uint8Array(c);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=20;class ka extends bi{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((c=>c(e))),super.onEvent(e)}async initialized(){await this.initPromise}}function Ia(e,c,t=null){return{type:c,eventId:t,urlResponse:null,sessionId:Ra(),postBody:null,tenantId:e.tenantId,error:V(e,"no-auth-event")}}function Aa(e,c){return Pa()._set(Da(e),c)}async function Ta(e){const c=await Pa()._get(Da(e));return c&&await Pa()._remove(Da(e)),c}function Ea(e,c){var t,n;const i=Fa(c);if(i.includes("/__/auth/callback")){const c=Ua(i),a=c["firebaseError"]?Oa(decodeURIComponent(c["firebaseError"])):null,s=null===(n=null===(t=null===a||void 0===a?void 0:a["code"])||void 0===t?void 0:t.split("auth/"))||void 0===n?void 0:n[1],r=s?V(s):null;return r?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:r,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}function Ra(){const e=[],c="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<Sa;t++){const t=Math.floor(Math.random()*c.length);e.push(c.charAt(t))}return e.join("")}function Pa(){return ue(Kt)}function Da(e){return de("authEvent",e.config.apiKey,e.name)}function Oa(e){try{return JSON.parse(e)}catch(c){return null}}function Fa(e){const c=Ua(e),t=c["link"]?decodeURIComponent(c["link"]):void 0,n=Ua(t)["link"],i=c["deep_link_id"]?decodeURIComponent(c["deep_link_id"]):void 0,a=Ua(i)["link"];return a||i||n||t||e}function Ua(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[c,...t]=e.split("?");return(0,i.zd)(t.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa=500;class Ba{constructor(){this._redirectPersistence=Yt,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Mi,this._overrideRedirectResult=hi}async _initialize(e){const c=e._key();let t=this.eventManagers.get(c);return t||(t=new ka(e),this.eventManagers.set(c,t),this.attachCallbackListeners(e,t)),t}_openPopup(e){H(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,c,t,n){Na(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),ui(),await this._originValidation(e);const a=Ia(e,t,n);await Aa(e,a);const s=await La(e,a,c),r=await ba(s);return wa(e,i,r)}_isIframeWebStorageSupported(e,c){throw new Error("Method not implemented.")}_originValidation(e){const c=e._key();return this.originValidationPromises[c]||(this.originValidationPromises[c]=ya(e)),this.originValidationPromises[c]}attachCallbackListeners(e,c){const{universalLinks:t,handleOpenURL:n,BuildInfo:i}=Ca(),a=setTimeout((async()=>{await Ta(e),c.onEvent(Ga())}),qa),s=async t=>{clearTimeout(a);const n=await Ta(e);let i=null;n&&(null===t||void 0===t?void 0:t["url"])&&(i=Ea(n,t["url"])),c.onEvent(i||Ga())};"undefined"!==typeof t&&"function"===typeof t.subscribe&&t.subscribe(null,s);const r=n,o=`${i.packageName.toLowerCase()}://`;Ca().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(o)&&s({url:e}),"function"===typeof r)try{r(e)}catch(c){console.error(c)}}}}const ja=Ba;function Ga(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:V("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(e,c){We(e)._logFramework(c)}var $a="@firebase/auth-compat",Ka="0.4.4";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Za=1e3;function Ya(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function Qa(){return"http:"===Ya()||"https:"===Ya()}function Ja(e=(0,i.z$)()){return!("file:"!==Ya()&&"ionic:"!==Ya()&&"capacitor:"!==Ya()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function Xa(){return(0,i.b$)()||(0,i.UG)()}function es(){return(0,i.w1)()&&11===(null===document||void 0===document?void 0:document.documentMode)}function cs(e=(0,i.z$)()){return/Edge\/\d+/.test(e)}function ts(e=(0,i.z$)()){return es()||cs(e)}function ns(){try{const e=self.localStorage,c=Xt();if(e)return e["setItem"](c,"1"),e["removeItem"](c),!ts()||(0,i.hl)()}catch(e){return is()&&(0,i.hl)()}return!1}function is(){return"undefined"!==typeof t.g&&"WorkerGlobalScope"in t.g&&"importScripts"in t.g}function as(){return(Qa()||(0,i.ru)()||Ja())&&!Xa()&&ns()&&!is()}function ss(){return Ja()&&"undefined"!==typeof document}async function rs(){return!!ss()&&new Promise((e=>{const c=setTimeout((()=>{e(!1)}),Za);document.addEventListener("deviceready",(()=>{clearTimeout(c),e(!0)}))}))}function os(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls={LOCAL:"local",NONE:"none",SESSION:"session"},fs=y,us="persistence";function hs(e,c){fs(Object.values(ls).includes(c),e,"invalid-persistence-type"),(0,i.b$)()?fs(c!==ls.SESSION,e,"unsupported-persistence-type"):(0,i.UG)()?fs(c===ls.NONE,e,"unsupported-persistence-type"):is()?fs(c===ls.NONE||c===ls.LOCAL&&(0,i.hl)(),e,"unsupported-persistence-type"):fs(c===ls.NONE||ns(),e,"unsupported-persistence-type")}async function ms(e){await e._initializationPromise;const c=ps(),t=de(us,e.config.apiKey,e.name);c&&c.setItem(t,e._getPersistence())}function ds(e,c){const t=ps();if(!t)return[];const n=de(us,e,c),i=t.getItem(n);switch(i){case ls.NONE:return[me];case ls.LOCAL:return[Mn,Yt];case ls.SESSION:return[Yt];default:return[]}}function ps(){var e;try{return(null===(e=os())||void 0===e?void 0:e.sessionStorage)||null}catch(c){return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=y;class zs{constructor(){this.browserResolver=ue(ra),this.cordovaResolver=ue(ja),this.underlyingResolver=null,this._redirectPersistence=Yt,this._completeRedirectFn=Mi,this._overrideRedirectResult=hi}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,c,t,n){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,c,t,n)}async _openRedirect(e,c,t,n){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,c,t,n)}_isIframeWebStorageSupported(e,c){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,c)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return ss()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return vs(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await rs();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(e){return e.unwrap()}function Hs(e){return e.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(e){return Ms(e)}function Cs(e,c){var t;const n=null===(t=c.customData)||void 0===t?void 0:t._tokenResponse;if("auth/multi-factor-auth-required"===(null===c||void 0===c?void 0:c.code)){const t=c;t.resolver=new bs(e,At(e,c))}else if(n){const e=Ms(c),t=c;e&&(t.credential=e,t.tenantId=n.tenantId||void 0,t.email=n.email||void 0,t.phoneNumber=n.phoneNumber||void 0)}}function Ms(e){const{_tokenResponse:c}=e instanceof i.ZR?e.customData:e;if(!c)return null;if(!(e instanceof i.ZR)&&"temporaryProof"in c&&"phoneNumber"in c)return Kn.credentialFromResult(e);const t=c.providerId;if(!t||t===l.PASSWORD)return null;let n;switch(t){case l.GOOGLE:n=Sc;break;case l.FACEBOOK:n=_c;break;case l.GITHUB:n=kc;break;case l.TWITTER:n=Rc;break;default:const{oauthIdToken:e,oauthAccessToken:i,oauthTokenSecret:a,pendingToken:s,nonce:r}=c;return i||a||e||s?s?t.startsWith("saml.")?Ac._create(t,s):pc._fromParams({providerId:t,signInMethod:t,pendingToken:s,idToken:e,accessToken:i}):new xc(t).credential({idToken:e,accessToken:i,rawNonce:r}):null}return e instanceof i.ZR?n.credentialFromError(e):n.credentialFromResult(e)}function Ls(e,c){return c.catch((c=>{throw c instanceof i.ZR&&Cs(e,c),c})).then((e=>{const c=e.operationType,t=e.user;return{operationType:c,credential:Vs(e),additionalUserInfo:St(e),user:ws.getOrCreate(t)}}))}async function ys(e,c){const t=await c;return{verificationId:t.verificationId,confirm:c=>Ls(e,t.confirm(c))}}class bs{constructor(e,c){this.resolver=c,this.auth=Hs(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Ls(gs(this.auth),this.resolver.resolveSignIn(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e){this._delegate=e,this.multiFactor=Ut(e)}static getOrCreate(e){return ws.USER_MAP.has(e)||ws.USER_MAP.set(e,new ws(e)),ws.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Ls(this.auth,Yc(this._delegate,e))}async linkWithPhoneNumber(e,c){return ys(this.auth,jn(this._delegate,e,c))}async linkWithPopup(e){return Ls(this.auth,ii(this._delegate,e,zs))}async linkWithRedirect(e){return await ms(We(this.auth)),Hi(this._delegate,e,zs)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Ls(this.auth,Qc(this._delegate,e))}reauthenticateWithPhoneNumber(e,c){return ys(this.auth,Gn(this._delegate,e,c))}reauthenticateWithPopup(e){return Ls(this.auth,ni(this._delegate,e,zs))}async reauthenticateWithRedirect(e){return await ms(We(this.auth)),zi(this._delegate,e,zs)}sendEmailVerification(e){return vt(this._delegate,e)}async unlink(e){return await jc(this._delegate,e),this}updateEmail(e){return Vt(this._delegate,e)}updatePassword(e){return Ct(this._delegate,e)}updatePhoneNumber(e){return $n(this._delegate,e)}updateProfile(e){return Ht(this._delegate,e)}verifyBeforeUpdateEmail(e,c){return zt(this._delegate,e,c)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}ws.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ns=y;class xs{constructor(e,c){if(this.app=e,c.isInitialized())return this._delegate=c.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:t}=e.options;Ns(t,"invalid-api-key",{appName:e.name}),Ns(t,"invalid-api-key",{appName:e.name});const n="undefined"!==typeof window?zs:void 0;this._delegate=c.initialize({options:{persistence:Ss(t,e.name),popupRedirectResolver:n}}),this._delegate._updateErrorMap(m),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?ws.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,c){Ze(this._delegate,e,c)}applyActionCode(e){return st(this._delegate,e)}checkActionCode(e){return rt(this._delegate,e)}confirmPasswordReset(e,c){return at(this._delegate,e,c)}async createUserWithEmailAndPassword(e,c){return Ls(this._delegate,lt(this._delegate,e,c))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return pt(this._delegate,e)}isSignInWithEmailLink(e){return ht(this._delegate,e)}async getRedirectResult(){Ns(as(),this._delegate,"operation-not-supported-in-this-environment");const e=await Ci(this._delegate,zs);return e?Ls(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){Wa(this._delegate,e)}onAuthStateChanged(e,c,t){const{next:n,error:i,complete:a}=_s(e,c,t);return this._delegate.onAuthStateChanged(n,i,a)}onIdTokenChanged(e,c,t){const{next:n,error:i,complete:a}=_s(e,c,t);return this._delegate.onIdTokenChanged(n,i,a)}sendSignInLinkToEmail(e,c){return ut(this._delegate,e,c)}sendPasswordResetEmail(e,c){return it(this._delegate,e,c||void 0)}async setPersistence(e){let c;switch(hs(this._delegate,e),e){case ls.SESSION:c=Yt;break;case ls.LOCAL:const e=await ue(Mn)._isAvailable();c=e?Mn:Kt;break;case ls.NONE:c=me;break;default:return H("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(c)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Ls(this._delegate,Fc(this._delegate))}signInWithCredential(e){return Ls(this._delegate,Zc(this._delegate,e))}signInWithCustomToken(e){return Ls(this._delegate,Xc(this._delegate,e))}signInWithEmailAndPassword(e,c){return Ls(this._delegate,ft(this._delegate,e,c))}signInWithEmailLink(e,c){return Ls(this._delegate,mt(this._delegate,e,c))}signInWithPhoneNumber(e,c){return ys(this._delegate,Bn(this._delegate,e,c))}async signInWithPopup(e){return Ns(as(),this._delegate,"operation-not-supported-in-this-environment"),Ls(this._delegate,ti(this._delegate,e,zs))}async signInWithRedirect(e){return Ns(as(),this._delegate,"operation-not-supported-in-this-environment"),await ms(this._delegate),pi(this._delegate,e,zs)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return ot(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function _s(e,c,t){let n=e;"function"!==typeof e&&({next:n,error:c,complete:t}=e);const i=n,a=e=>i(e&&ws.getOrCreate(e));return{next:a,error:c,complete:t}}function Ss(e,c){const t=ds(e,c);if("undefined"===typeof self||t.includes(Mn)||t.push(Mn),"undefined"!==typeof window)for(const n of[Kt,Yt])t.includes(n)||t.push(n);return t.includes(me)||t.push(me),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xs.Persistence=ls;class ks{constructor(){this.providerId="phone",this._delegate=new Kn(gs(n.Z.auth()))}static credential(e,c){return Kn.credential(e,c)}verifyPhoneNumber(e,c){return this._delegate.verifyPhoneNumber(e,c)}unwrap(){return this._delegate}}ks.PHONE_SIGN_IN_METHOD=Kn.PHONE_SIGN_IN_METHOD,ks.PROVIDER_ID=Kn.PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Is=y;class As{constructor(e,c,t=n.Z.app()){var i;Is(null===(i=t.options)||void 0===i?void 0:i.apiKey,"invalid-api-key",{appName:t.name}),this._delegate=new Fn(t.auth(),e,c),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts="auth-compat";function Es(e){e.INTERNAL.registerComponent(new o.wA(Ts,(e=>{const c=e.getProvider("app-compat").getImmediate(),t=e.getProvider("auth");return new xs(c,t)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:f.EMAIL_SIGNIN,PASSWORD_RESET:f.PASSWORD_RESET,RECOVER_EMAIL:f.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:f.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:f.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:f.VERIFY_EMAIL}},EmailAuthProvider:bc,FacebookAuthProvider:_c,GithubAuthProvider:kc,GoogleAuthProvider:Sc,OAuthProvider:xc,SAMLAuthProvider:Ec,PhoneAuthProvider:ks,PhoneMultiFactorGenerator:fa,RecaptchaVerifier:As,TwitterAuthProvider:Rc,Auth:xs,AuthCredential:ec,Error:i.ZR}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion($a,Ka)}Es(n.Z)},673:function(e,c,t){var n,i=t(180),a=t(816),s=t(463),r=t(333),o=t(444),l="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},f={},u=u||{},h=l||self;function m(e){var c=typeof e;return c="object"!=c?c:e?Array.isArray(e)?"array":c:"null","array"==c||"object"==c&&"number"==typeof e.length}function d(e){var c=typeof e;return"object"==c&&null!=e||"function"==c}function p(e){return Object.prototype.hasOwnProperty.call(e,v)&&e[v]||(e[v]=++z)}var v="closure_uid_"+(1e9*Math.random()>>>0),z=0;function g(e,c,t){return e.call.apply(e.bind,arguments)}function H(e,c,t){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var t=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(t,n),e.apply(c,t)}}return function(){return e.apply(c,arguments)}}function V(e,c,t){return V=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g:H,V.apply(null,arguments)}function C(e,c){var t=Array.prototype.slice.call(arguments,1);return function(){var c=t.slice();return c.push.apply(c,arguments),e.apply(this,c)}}function M(e,c){function t(){}t.prototype=c.prototype,e.$=c.prototype,e.prototype=new t,e.prototype.constructor=e,e.ac=function(e,t,n){for(var i=Array(arguments.length-2),a=2;a<arguments.length;a++)i[a-2]=arguments[a];return c.prototype[t].apply(e,i)}}function L(){this.s=this.s,this.o=this.o}var y=0;L.prototype.s=!1,L.prototype.sa=function(){this.s||(this.s=!0,this.N(),0==y)||p(this)},L.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const b=Array.prototype.indexOf?function(e,c){return Array.prototype.indexOf.call(e,c,void 0)}:function(e,c){if("string"===typeof e)return"string"!==typeof c||1!=c.length?-1:e.indexOf(c,0);for(let t=0;t<e.length;t++)if(t in e&&e[t]===c)return t;return-1};function w(e){const c=e.length;if(0<c){const t=Array(c);for(let n=0;n<c;n++)t[n]=e[n];return t}return[]}function N(e,c){for(let t=1;t<arguments.length;t++){const c=arguments[t];if(m(c)){const t=e.length||0,n=c.length||0;e.length=t+n;for(let i=0;i<n;i++)e[t+i]=c[i]}else e.push(c)}}function x(e,c){this.type=e,this.g=this.target=c,this.defaultPrevented=!1}x.prototype.h=function(){this.defaultPrevented=!0};var _=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var e=!1,c=Object.defineProperty({},"passive",{get:function(){e=!0}});try{h.addEventListener("test",(()=>{}),c),h.removeEventListener("test",(()=>{}),c)}catch(t){}return e}();function S(e){return/^[\s\xa0]*$/.test(e)}function k(){var e=h.navigator;return e&&(e=e.userAgent)?e:""}function I(e){return-1!=k().indexOf(e)}function A(e){return A[" "](e),e}function T(e,c){var t=Cn;return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=c(e)}A[" "]=function(){};var E,R,P=I("Opera"),D=I("Trident")||I("MSIE"),O=I("Edge"),F=O||D,U=I("Gecko")&&!(-1!=k().toLowerCase().indexOf("webkit")&&!I("Edge"))&&!(I("Trident")||I("MSIE"))&&!I("Edge"),q=-1!=k().toLowerCase().indexOf("webkit")&&!I("Edge");function B(){var e=h.document;return e?e.documentMode:void 0}e:{var j="",G=function(){var e=k();return U?/rv:([^\);]+)(\)|;)/.exec(e):O?/Edge\/([\d\.]+)/.exec(e):D?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):q?/WebKit\/(\S+)/.exec(e):P?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(G&&(j=G?G[1]:""),D){var W=B();if(null!=W&&W>parseFloat(j)){E=String(W);break e}}E=j}if(h.document&&D){var $=B();R=$||(parseInt(E,10)||void 0)}else R=void 0;var K=R;function Z(e,c){if(x.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var t=this.type=e.type,n=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=c,c=e.relatedTarget){if(U){e:{try{A(c.nodeName);var i=!0;break e}catch(a){}i=!1}i||(c=null)}}else"mouseover"==t?c=e.fromElement:"mouseout"==t&&(c=e.toElement);this.relatedTarget=c,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:Y[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Z.$.h.call(this)}}M(Z,x);var Y={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Q="closure_listenable_"+(1e6*Math.random()|0),J=0;function X(e,c,t,n,i){this.listener=e,this.proxy=null,this.src=c,this.type=t,this.capture=!!n,this.la=i,this.key=++J,this.fa=this.ia=!1}function ee(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function ce(e,c,t){for(const n in e)c.call(t,e[n],n,e)}function te(e,c){for(const t in e)c.call(void 0,e[t],t,e)}function ne(e){const c={};for(const t in e)c[t]=e[t];return c}const ie="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ae(e,c){let t,n;for(let i=1;i<arguments.length;i++){for(t in n=arguments[i],n)e[t]=n[t];for(let c=0;c<ie.length;c++)t=ie[c],Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}}function se(e){this.src=e,this.g={},this.h=0}function re(e,c){var t=c.type;if(t in e.g){var n,i=e.g[t],a=b(i,c);(n=0<=a)&&Array.prototype.splice.call(i,a,1),n&&(ee(c),0==e.g[t].length&&(delete e.g[t],e.h--))}}function oe(e,c,t,n){for(var i=0;i<e.length;++i){var a=e[i];if(!a.fa&&a.listener==c&&a.capture==!!t&&a.la==n)return i}return-1}se.prototype.add=function(e,c,t,n,i){var a=e.toString();e=this.g[a],e||(e=this.g[a]=[],this.h++);var s=oe(e,c,n,i);return-1<s?(c=e[s],t||(c.ia=!1)):(c=new X(c,this.src,a,!!n,i),c.ia=t,e.push(c)),c};var le="closure_lm_"+(1e6*Math.random()|0),fe={};function ue(e,c,t,n,i){if(n&&n.once)return de(e,c,t,n,i);if(Array.isArray(c)){for(var a=0;a<c.length;a++)ue(e,c[a],t,n,i);return null}return t=Ce(t),e&&e[Q]?e.O(c,t,d(n)?!!n.capture:!!n,i):he(e,c,t,!1,n,i)}function he(e,c,t,n,i,a){if(!c)throw Error("Invalid event type");var s=d(i)?!!i.capture:!!i,r=He(e);if(r||(e[le]=r=new se(e)),t=r.add(c,t,n,s,a),t.proxy)return t;if(n=me(),t.proxy=n,n.src=e,n.listener=t,e.addEventListener)_||(i=s),void 0===i&&(i=!1),e.addEventListener(c.toString(),n,i);else if(e.attachEvent)e.attachEvent(ze(c.toString()),n);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(n)}return t}function me(){function e(t){return c.call(e.src,e.listener,t)}const c=ge;return e}function de(e,c,t,n,i){if(Array.isArray(c)){for(var a=0;a<c.length;a++)de(e,c[a],t,n,i);return null}return t=Ce(t),e&&e[Q]?e.P(c,t,d(n)?!!n.capture:!!n,i):he(e,c,t,!0,n,i)}function pe(e,c,t,n,i){if(Array.isArray(c))for(var a=0;a<c.length;a++)pe(e,c[a],t,n,i);else n=d(n)?!!n.capture:!!n,t=Ce(t),e&&e[Q]?(e=e.i,c=String(c).toString(),c in e.g&&(a=e.g[c],t=oe(a,t,n,i),-1<t&&(ee(a[t]),Array.prototype.splice.call(a,t,1),0==a.length&&(delete e.g[c],e.h--)))):e&&(e=He(e))&&(c=e.g[c.toString()],e=-1,c&&(e=oe(c,t,n,i)),(t=-1<e?c[e]:null)&&ve(t))}function ve(e){if("number"!==typeof e&&e&&!e.fa){var c=e.src;if(c&&c[Q])re(c.i,e);else{var t=e.type,n=e.proxy;c.removeEventListener?c.removeEventListener(t,n,e.capture):c.detachEvent?c.detachEvent(ze(t),n):c.addListener&&c.removeListener&&c.removeListener(n),(t=He(c))?(re(t,e),0==t.h&&(t.src=null,c[le]=null)):ee(e)}}}function ze(e){return e in fe?fe[e]:fe[e]="on"+e}function ge(e,c){if(e.fa)e=!0;else{c=new Z(c,this);var t=e.listener,n=e.la||e.src;e.ia&&ve(e),e=t.call(n,c)}return e}function He(e){return e=e[le],e instanceof se?e:null}var Ve="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ce(e){return"function"===typeof e?e:(e[Ve]||(e[Ve]=function(c){return e.handleEvent(c)}),e[Ve])}function Me(){L.call(this),this.i=new se(this),this.S=this,this.J=null}function Le(e,c){var t,n=e.J;if(n)for(t=[];n;n=n.J)t.push(n);if(e=e.S,n=c.type||c,"string"===typeof c)c=new x(c,e);else if(c instanceof x)c.target=c.target||e;else{var i=c;c=new x(n,e),ae(c,i)}if(i=!0,t)for(var a=t.length-1;0<=a;a--){var s=c.g=t[a];i=ye(s,n,!0,c)&&i}if(s=c.g=e,i=ye(s,n,!0,c)&&i,i=ye(s,n,!1,c)&&i,t)for(a=0;a<t.length;a++)s=c.g=t[a],i=ye(s,n,!1,c)&&i}function ye(e,c,t,n){if(c=e.i.g[String(c)],!c)return!0;c=c.concat();for(var i=!0,a=0;a<c.length;++a){var s=c[a];if(s&&!s.fa&&s.capture==t){var r=s.listener,o=s.la||s.src;s.ia&&re(e.i,s),i=!1!==r.call(o,n)&&i}}return i&&!n.defaultPrevented}M(Me,L),Me.prototype[Q]=!0,Me.prototype.removeEventListener=function(e,c,t,n){pe(this,e,c,t,n)},Me.prototype.N=function(){if(Me.$.N.call(this),this.i){var e,c=this.i;for(e in c.g){for(var t=c.g[e],n=0;n<t.length;n++)ee(t[n]);delete c.g[e],c.h--}}this.J=null},Me.prototype.O=function(e,c,t,n){return this.i.add(String(e),c,!1,t,n)},Me.prototype.P=function(e,c,t,n){return this.i.add(String(e),c,!0,t,n)};var be=h.JSON.stringify;class we{constructor(e,c){this.i=e,this.j=c,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Ne(){var e=Ee;let c=null;return e.g&&(c=e.g,e.g=e.g.next,e.g||(e.h=null),c.next=null),c}class xe{constructor(){this.h=this.g=null}add(e,c){const t=_e.get();t.set(e,c),this.h?this.h.next=t:this.g=t,this.h=t}}var _e=new we((()=>new Se),(e=>e.reset()));class Se{constructor(){this.next=this.g=this.h=null}set(e,c){this.h=e,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}function ke(e){var c=1;e=e.split(":");const t=[];for(;0<c&&e.length;)t.push(e.shift()),c--;return e.length&&t.push(e.join(":")),t}function Ie(e){h.setTimeout((()=>{throw e}),0)}let Ae,Te=!1,Ee=new xe,Re=()=>{const e=h.Promise.resolve(void 0);Ae=()=>{e.then(Pe)}};var Pe=()=>{for(var e;e=Ne();){try{e.h.call(e.g)}catch(t){Ie(t)}var c=_e;c.j(e),100>c.h&&(c.h++,e.next=c.g,c.g=e)}Te=!1};function De(e,c){Me.call(this),this.h=e||1,this.g=c||h,this.j=V(this.qb,this),this.l=Date.now()}function Oe(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function Fe(e,c,t){if("function"===typeof e)t&&(e=V(e,t));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=V(e.handleEvent,e)}return 2147483647<Number(c)?-1:h.setTimeout(e,c||0)}function Ue(e){e.g=Fe((()=>{e.g=null,e.i&&(e.i=!1,Ue(e))}),e.j);const c=e.h;e.h=null,e.m.apply(null,c)}M(De,Me),n=De.prototype,n.ga=!1,n.T=null,n.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Le(this,"tick"),this.ga&&(Oe(this),this.start()))}},n.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},n.N=function(){De.$.N.call(this),Oe(this),delete this.g};class qe extends L{constructor(e,c){super(),this.m=e,this.j=c,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ue(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Be(e){L.call(this),this.h=e,this.g={}}M(Be,L);var je=[];function Ge(e,c,t,n){Array.isArray(t)||(t&&(je[0]=t.toString()),t=je);for(var i=0;i<t.length;i++){var a=ue(c,t[i],n||e.handleEvent,!1,e.h||e);if(!a)break;e.g[a.key]=a}}function We(e){ce(e.g,(function(e,c){this.g.hasOwnProperty(c)&&ve(e)}),e),e.g={}}function $e(){this.g=!0}function Ke(e,c,t,n,i,a){e.info((function(){if(e.g)if(a)for(var s="",r=a.split("&"),o=0;o<r.length;o++){var l=r[o].split("=");if(1<l.length){var f=l[0];l=l[1];var u=f.split("_");s=2<=u.length&&"type"==u[1]?s+(f+"=")+l+"&":s+(f+"=redacted&")}}else s=null;else s=a;return"XMLHTTP REQ ("+n+") [attempt "+i+"]: "+c+"\n"+t+"\n"+s}))}function Ze(e,c,t,n,i,a,s){e.info((function(){return"XMLHTTP RESP ("+n+") [ attempt "+i+"]: "+c+"\n"+t+"\n"+a+" "+s}))}function Ye(e,c,t,n){e.info((function(){return"XMLHTTP TEXT ("+c+"): "+Je(e,t)+(n?" "+n:"")}))}function Qe(e,c){e.info((function(){return"TIMEOUT: "+c}))}function Je(e,c){if(!e.g)return c;if(!c)return null;try{var t=JSON.parse(c);if(t)for(e=0;e<t.length;e++)if(Array.isArray(t[e])){var n=t[e];if(!(2>n.length)){var i=n[1];if(Array.isArray(i)&&!(1>i.length)){var a=i[0];if("noop"!=a&&"stop"!=a&&"close"!=a)for(var s=1;s<i.length;s++)i[s]=""}}}return be(t)}catch(r){return c}}Be.prototype.N=function(){Be.$.N.call(this),We(this)},Be.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},$e.prototype.Ea=function(){this.g=!1},$e.prototype.info=function(){};var Xe={},ec=null;function cc(){return ec=ec||new Me}function tc(e){x.call(this,Xe.Ta,e)}function nc(e){const c=cc();Le(c,new tc(c))}function ic(e,c){x.call(this,Xe.STAT_EVENT,e),this.stat=c}function ac(e){const c=cc();Le(c,new ic(c,e))}function sc(e,c){x.call(this,Xe.Ua,e),this.size=c}function rc(e,c){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){e()}),c)}Xe.Ta="serverreachability",M(tc,x),Xe.STAT_EVENT="statevent",M(ic,x),Xe.Ua="timingevent",M(sc,x);var oc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},lc={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function fc(){}function uc(e){return e.h||(e.h=e.i())}function hc(){}fc.prototype.h=null;var mc,dc={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function pc(){x.call(this,"d")}function vc(){x.call(this,"c")}function zc(){}function gc(e,c,t,n){this.l=e,this.j=c,this.m=t,this.W=n||1,this.U=new Be(this),this.P=Vc,e=F?125:void 0,this.V=new De(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Hc}function Hc(){this.i=null,this.g="",this.h=!1}M(pc,x),M(vc,x),M(zc,fc),zc.prototype.g=function(){return new XMLHttpRequest},zc.prototype.i=function(){return{}},mc=new zc;var Vc=45e3,Cc={},Mc={};function Lc(e,c,t){e.L=1,e.v=Gc(Fc(c)),e.s=t,e.S=!0,yc(e,null)}function yc(e,c){e.G=Date.now(),xc(e),e.A=Fc(e.v);var t=e.A,n=e.W;Array.isArray(n)||(n=[String(n)]),it(t.i,"t",n),e.C=0,t=e.l.J,e.h=new Hc,e.g=fn(e.l,t?c:null,!e.s),0<e.O&&(e.M=new qe(V(e.Pa,e,e.g),e.O)),Ge(e.U,e.g,"readystatechange",e.nb),c=e.I?ne(e.I):{},e.s?(e.u||(e.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,c)):(e.u="GET",e.g.ha(e.A,e.u,null,c)),nc(),Ke(e.j,e.u,e.A,e.m,e.W,e.s)}function bc(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function wc(e,c,t){let n,i=!0;for(;!e.J&&e.C<t.length;){if(n=Nc(e,t),n==Mc){4==c&&(e.o=4,ac(14),i=!1),Ye(e.j,e.m,null,"[Incomplete Response]");break}if(n==Cc){e.o=4,ac(15),Ye(e.j,e.m,t,"[Invalid Chunk]"),i=!1;break}Ye(e.j,e.m,n,null),Ac(e,n)}bc(e)&&n!=Mc&&n!=Cc&&(e.h.g="",e.C=0),4!=c||0!=t.length||e.h.h||(e.o=1,ac(16),i=!1),e.i=e.i&&i,i?0<t.length&&!e.ba&&(e.ba=!0,c=e.l,c.g==e&&c.ca&&!c.M&&(c.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),cn(c),c.M=!0,ac(11))):(Ye(e.j,e.m,t,"[Invalid Chunked Response]"),Ic(e),kc(e))}function Nc(e,c){var t=e.C,n=c.indexOf("\n",t);return-1==n?Mc:(t=Number(c.substring(t,n)),isNaN(t)?Cc:(n+=1,n+t>c.length?Mc:(c=c.slice(n,n+t),e.C=n+t,c)))}function xc(e){e.Y=Date.now()+e.P,_c(e,e.P)}function _c(e,c){if(null!=e.B)throw Error("WatchDog timer not null");e.B=rc(V(e.lb,e),c)}function Sc(e){e.B&&(h.clearTimeout(e.B),e.B=null)}function kc(e){0==e.l.H||e.J||an(e.l,e)}function Ic(e){Sc(e);var c=e.M;c&&"function"==typeof c.sa&&c.sa(),e.M=null,Oe(e.V),We(e.U),e.g&&(c=e.g,e.g=null,c.abort(),c.sa())}function Ac(e,c){try{var t=e.l;if(0!=t.H&&(t.g==e||ht(t.i,e)))if(!e.K&&ht(t.i,e)&&3==t.H){try{var n=t.Ja.g.parse(c)}catch(l){n=null}if(Array.isArray(n)&&3==n.length){var i=n;if(0==i[0]){e:if(!t.u){if(t.g){if(!(t.g.G+3e3<e.G))break e;nn(t),Wt(t)}en(t),ac(18)}}else t.Fa=i[1],0<t.Fa-t.V&&37500>i[2]&&t.G&&0==t.A&&!t.v&&(t.v=rc(V(t.ib,t),6e3));if(1>=ut(t.i)&&t.oa){try{t.oa()}catch(l){}t.oa=void 0}}else rn(t,11)}else if((e.K||t.g==e)&&nn(t),!S(c))for(i=t.Ja.g.parse(c),c=0;c<i.length;c++){let l=i[c];if(t.V=l[0],l=l[1],2==t.H)if("c"==l[0]){t.K=l[1],t.pa=l[2];const c=l[3];null!=c&&(t.ra=c,t.l.info("VER="+t.ra));const i=l[4];null!=i&&(t.Ga=i,t.l.info("SVER="+t.Ga));const f=l[5];null!=f&&"number"===typeof f&&0<f&&(n=1.5*f,t.L=n,t.l.info("backChannelRequestTimeoutMs_="+n)),n=t;const u=e.g;if(u){const e=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var a=n.i;a.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(a.j=a.l,a.g=new Set,a.h&&(mt(a,a.h),a.h=null))}if(n.F){const e=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(n.Da=e,jc(n.I,n.F,e))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-e.G,t.l.info("Handshake RTT: "+t.S+"ms")),n=t;var s=e;if(n.wa=ln(n,n.J?n.pa:null,n.Y),s.K){dt(n.i,s);var r=s,o=n.L;o&&r.setTimeout(o),r.B&&(Sc(r),xc(r)),n.g=s}else Xt(n);0<t.j.length&&Kt(t)}else"stop"!=l[0]&&"close"!=l[0]||rn(t,7);else 3==t.H&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?rn(t,7):Gt(t):"noop"!=l[0]&&t.h&&t.h.Aa(l),t.A=0)}nc(4)}catch(l){}}function Tc(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(m(e)){for(var c=[],t=e.length,n=0;n<t;n++)c.push(e[n]);return c}for(n in c=[],t=0,e)c[t++]=e[n];return c}function Ec(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(m(e)||"string"===typeof e){var c=[];e=e.length;for(var t=0;t<e;t++)c.push(t);return c}c=[],t=0;for(const n in e)c[t++]=n;return c}}}function Rc(e,c){if(e.forEach&&"function"==typeof e.forEach)e.forEach(c,void 0);else if(m(e)||"string"===typeof e)Array.prototype.forEach.call(e,c,void 0);else for(var t=Ec(e),n=Tc(e),i=n.length,a=0;a<i;a++)c.call(void 0,n[a],t&&t[a],e)}n=gc.prototype,n.setTimeout=function(e){this.P=e},n.nb=function(e){e=e.target;const c=this.M;c&&3==Dt(e)?c.l():this.Pa(e)},n.Pa=function(e){try{if(e==this.g)e:{const f=Dt(this.g);var c=this.g.Ia();const u=this.g.da();if(!(3>f)&&(3!=f||F||this.g&&(this.h.h||this.g.ja()||Ot(this.g)))){this.J||4!=f||7==c||nc(8==c||0>=u?3:2),Sc(this);var t=this.g.da();this.ca=t;c:if(bc(this)){var n=Ot(this.g);e="";var i=n.length,a=4==Dt(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Ic(this),kc(this);var s="";break c}this.h.i=new h.TextDecoder}for(c=0;c<i;c++)this.h.h=!0,e+=this.h.i.decode(n[c],{stream:a&&c==i-1});n.splice(0,i),this.h.g+=e,this.C=0,s=this.h.g}else s=this.g.ja();if(this.i=200==t,Ze(this.j,this.u,this.A,this.m,this.W,f,t),this.i){if(this.aa&&!this.K){c:{if(this.g){var r,o=this.g;if((r=o.g?o.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(r)){var l=r;break c}}l=null}if(!(t=l)){this.i=!1,this.o=3,ac(12),Ic(this),kc(this);break e}Ye(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ac(this,t)}this.S?(wc(this,f,s),F&&this.i&&3==f&&(Ge(this.U,this.V,"tick",this.mb),this.V.start())):(Ye(this.j,this.m,s,null),Ac(this,s)),4==f&&Ic(this),this.i&&!this.J&&(4==f?an(this.l,this):(this.i=!1,xc(this)))}else Ft(this.g),400==t&&0<s.indexOf("Unknown SID")?(this.o=3,ac(12)):(this.o=0,ac(13)),Ic(this),kc(this)}}}catch(f){}},n.mb=function(){if(this.g){var e=Dt(this.g),c=this.g.ja();this.C<c.length&&(Sc(this),wc(this,e,c),this.i&&4!=e&&xc(this))}},n.cancel=function(){this.J=!0,Ic(this)},n.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Qe(this.j,this.A),2!=this.L&&(nc(),ac(17)),Ic(this),this.o=2,kc(this)):_c(this,this.Y-e)};var Pc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Dc(e,c){if(e){e=e.split("&");for(var t=0;t<e.length;t++){var n=e[t].indexOf("="),i=null;if(0<=n){var a=e[t].substring(0,n);i=e[t].substring(n+1)}else a=e[t];c(a,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Oc(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Oc){this.h=e.h,Uc(this,e.j),this.s=e.s,this.g=e.g,qc(this,e.m),this.l=e.l;var c=e.i,t=new et;t.i=c.i,c.g&&(t.g=new Map(c.g),t.h=c.h),Bc(this,t),this.o=e.o}else e&&(c=String(e).match(Pc))?(this.h=!1,Uc(this,c[1]||"",!0),this.s=Wc(c[2]||""),this.g=Wc(c[3]||"",!0),qc(this,c[4]),this.l=Wc(c[5]||"",!0),Bc(this,c[6]||"",!0),this.o=Wc(c[7]||"")):(this.h=!1,this.i=new et(null,this.h))}function Fc(e){return new Oc(e)}function Uc(e,c,t){e.j=t?Wc(c,!0):c,e.j&&(e.j=e.j.replace(/:$/,""))}function qc(e,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);e.m=c}else e.m=null}function Bc(e,c,t){c instanceof et?(e.i=c,st(e.i,e.h)):(t||(c=$c(c,Jc)),e.i=new et(c,e.h))}function jc(e,c,t){e.i.set(c,t)}function Gc(e){return jc(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Wc(e,c){return e?c?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function $c(e,c,t){return"string"===typeof e?(e=encodeURI(e).replace(c,Kc),t&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Kc(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Oc.prototype.toString=function(){var e=[],c=this.j;c&&e.push($c(c,Zc,!0),":");var t=this.g;return(t||"file"==c)&&(e.push("//"),(c=this.s)&&e.push($c(c,Zc,!0),"@"),e.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,null!=t&&e.push(":",String(t))),(t=this.l)&&(this.g&&"/"!=t.charAt(0)&&e.push("/"),e.push($c(t,"/"==t.charAt(0)?Qc:Yc,!0))),(t=this.i.toString())&&e.push("?",t),(t=this.o)&&e.push("#",$c(t,Xc)),e.join("")};var Zc=/[#\/\?@]/g,Yc=/[#\?:]/g,Qc=/[#\?]/g,Jc=/[#\?@]/g,Xc=/#/g;function et(e,c){this.h=this.g=null,this.i=e||null,this.j=!!c}function ct(e){e.g||(e.g=new Map,e.h=0,e.i&&Dc(e.i,(function(c,t){e.add(decodeURIComponent(c.replace(/\+/g," ")),t)})))}function tt(e,c){ct(e),c=at(e,c),e.g.has(c)&&(e.i=null,e.h-=e.g.get(c).length,e.g.delete(c))}function nt(e,c){return ct(e),c=at(e,c),e.g.has(c)}function it(e,c,t){tt(e,c),0<t.length&&(e.i=null,e.g.set(at(e,c),w(t)),e.h+=t.length)}function at(e,c){return c=String(c),e.j&&(c=c.toLowerCase()),c}function st(e,c){c&&!e.j&&(ct(e),e.i=null,e.g.forEach((function(e,c){var t=c.toLowerCase();c!=t&&(tt(this,c),it(this,t,e))}),e)),e.j=c}n=et.prototype,n.add=function(e,c){ct(this),this.i=null,e=at(this,e);var t=this.g.get(e);return t||this.g.set(e,t=[]),t.push(c),this.h+=1,this},n.forEach=function(e,c){ct(this),this.g.forEach((function(t,n){t.forEach((function(t){e.call(c,t,n,this)}),this)}),this)},n.ta=function(){ct(this);const e=Array.from(this.g.values()),c=Array.from(this.g.keys()),t=[];for(let n=0;n<c.length;n++){const i=e[n];for(let e=0;e<i.length;e++)t.push(c[n])}return t},n.Z=function(e){ct(this);let c=[];if("string"===typeof e)nt(this,e)&&(c=c.concat(this.g.get(at(this,e))));else{e=Array.from(this.g.values());for(let t=0;t<e.length;t++)c=c.concat(e[t])}return c},n.set=function(e,c){return ct(this),this.i=null,e=at(this,e),nt(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[c]),this.h+=1,this},n.get=function(e,c){return e?(e=this.Z(e),0<e.length?String(e[0]):c):c},n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],c=Array.from(this.g.keys());for(var t=0;t<c.length;t++){var n=c[t];const a=encodeURIComponent(String(n)),s=this.Z(n);for(n=0;n<s.length;n++){var i=a;""!==s[n]&&(i+="="+encodeURIComponent(String(s[n]))),e.push(i)}}return this.i=e.join("&")};var rt=class{constructor(e,c){this.g=e,this.map=c}};function ot(e){this.l=e||lt,h.PerformanceNavigationTiming?(e=h.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(h.g&&h.g.Ka&&h.g.Ka()&&h.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var lt=10;function ft(e){return!!e.h||!!e.g&&e.g.size>=e.j}function ut(e){return e.h?1:e.g?e.g.size:0}function ht(e,c){return e.h?e.h==c:!!e.g&&e.g.has(c)}function mt(e,c){e.g?e.g.add(c):e.h=c}function dt(e,c){e.h&&e.h==c?e.h=null:e.g&&e.g.has(c)&&e.g.delete(c)}function pt(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let c=e.i;for(const t of e.g.values())c=c.concat(t.F);return c}return w(e.i)}ot.prototype.cancel=function(){if(this.i=pt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var vt=class{stringify(e){return h.JSON.stringify(e,void 0)}parse(e){return h.JSON.parse(e,void 0)}};function zt(){this.g=new vt}function gt(e,c,t){const n=t||"";try{Rc(e,(function(e,t){let i=e;d(e)&&(i=be(e)),c.push(n+t+"="+encodeURIComponent(i))}))}catch(i){throw c.push(n+"type="+encodeURIComponent("_badmap")),i}}function Ht(e,c){const t=new $e;if(h.Image){const n=new Image;n.onload=C(Vt,t,n,"TestLoadImage: loaded",!0,c),n.onerror=C(Vt,t,n,"TestLoadImage: error",!1,c),n.onabort=C(Vt,t,n,"TestLoadImage: abort",!1,c),n.ontimeout=C(Vt,t,n,"TestLoadImage: timeout",!1,c),h.setTimeout((function(){n.ontimeout&&n.ontimeout()}),1e4),n.src=e}else c(!1)}function Vt(e,c,t,n,i){try{c.onload=null,c.onerror=null,c.onabort=null,c.ontimeout=null,i(n)}catch(a){}}function Ct(e){this.l=e.fc||null,this.j=e.ob||!1}function Mt(e,c){Me.call(this),this.F=e,this.u=c,this.m=void 0,this.readyState=Lt,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}M(Ct,fc),Ct.prototype.g=function(){return new Mt(this.l,this.j)},Ct.prototype.i=function(e){return function(){return e}}({}),M(Mt,Me);var Lt=0;function yt(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function bt(e){e.readyState=4,e.l=null,e.j=null,e.A=null,wt(e)}function wt(e){e.onreadystatechange&&e.onreadystatechange.call(e)}n=Mt.prototype,n.open=function(e,c){if(this.readyState!=Lt)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=c,this.readyState=1,wt(this)},n.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(c.body=e),(this.F||h).fetch(new Request(this.B,c)).then(this.$a.bind(this),this.ka.bind(this))},n.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,bt(this)),this.readyState=Lt},n.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,wt(this)),this.g&&(this.readyState=3,wt(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;yt(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},n.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var c=e.value?e.value:new Uint8Array(0);(c=this.A.decode(c,{stream:!e.done}))&&(this.response=this.responseText+=c)}e.done?bt(this):wt(this),3==this.readyState&&yt(this)}},n.Za=function(e){this.g&&(this.response=this.responseText=e,bt(this))},n.Ya=function(e){this.g&&(this.response=e,bt(this))},n.ka=function(){this.g&&bt(this)},n.setRequestHeader=function(e,c){this.v.append(e,c)},n.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],c=this.h.entries();for(var t=c.next();!t.done;)t=t.value,e.push(t[0]+": "+t[1]),t=c.next();return e.join("\r\n")},Object.defineProperty(Mt.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Nt=h.JSON.parse;function xt(e){Me.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=_t,this.L=this.M=!1}M(xt,Me);var _t="",St=/^https?$/i,kt=["POST","PUT"];function It(e){return D&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function At(e,c){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=c,e.m=5,Tt(e),Rt(e)}function Tt(e){e.F||(e.F=!0,Le(e,"complete"),Le(e,"error"))}function Et(e){if(e.h&&"undefined"!=typeof u&&(!e.C[1]||4!=Dt(e)||2!=e.da()))if(e.v&&4==Dt(e))Fe(e.La,0,e);else if(Le(e,"readystatechange"),4==Dt(e)){e.h=!1;try{const r=e.da();e:switch(r){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var t;if(!(t=c)){var n;if(n=0===r){var i=String(e.I).match(Pc)[1]||null;!i&&h.self&&h.self.location&&(i=h.self.location.protocol.slice(0,-1)),n=!St.test(i?i.toLowerCase():"")}t=n}if(t)Le(e,"complete"),Le(e,"success");else{e.m=6;try{var a=2<Dt(e)?e.g.statusText:""}catch(s){a=""}e.j=a+" ["+e.da()+"]",Tt(e)}}finally{Rt(e)}}}function Rt(e,c){if(e.g){Pt(e);const n=e.g,i=e.C[0]?()=>{}:null;e.g=null,e.C=null,c||Le(e,"ready");try{n.onreadystatechange=i}catch(t){}}}function Pt(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(h.clearTimeout(e.A),e.A=null)}function Dt(e){return e.g?e.g.readyState:0}function Ot(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case _t:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(Qn){return null}}function Ft(e){const c={};e=(e.g&&2<=Dt(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let n=0;n<e.length;n++){if(S(e[n]))continue;var t=ke(e[n]);const i=t[0];if(t=t[1],"string"!==typeof t)continue;t=t.trim();const a=c[i]||[];c[i]=a,a.push(t)}te(c,(function(e){return e.join(", ")}))}function Ut(e){let c="";return ce(e,(function(e,t){c+=t,c+=":",c+=e,c+="\r\n"})),c}function qt(e,c,t){e:{for(n in t){var n=!1;break e}n=!0}n||(t=Ut(t),"string"===typeof e?null!=t&&encodeURIComponent(String(t)):jc(e,c,t))}function Bt(e,c,t){return t&&t.internalChannelParams&&t.internalChannelParams[e]||c}function jt(e){this.Ga=0,this.j=[],this.l=new $e,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Bt("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Bt("baseRetryDelayMs",5e3,e),this.hb=Bt("retryDelaySeedMs",1e4,e),this.eb=Bt("forwardChannelMaxRetries",2,e),this.xa=Bt("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new ot(e&&e.concurrentRequestLimit),this.Ja=new zt,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Gt(e){if($t(e),3==e.H){var c=e.W++,t=Fc(e.I);if(jc(t,"SID",e.K),jc(t,"RID",c),jc(t,"TYPE","terminate"),Qt(e,t),c=new gc(e,e.l,c),c.L=2,c.v=Gc(Fc(t)),t=!1,h.navigator&&h.navigator.sendBeacon)try{t=h.navigator.sendBeacon(c.v.toString(),"")}catch(n){}!t&&h.Image&&((new Image).src=c.v,t=!0),t||(c.g=fn(c.l,null),c.g.ha(c.v)),c.G=Date.now(),xc(c)}on(e)}function Wt(e){e.g&&(cn(e),e.g.cancel(),e.g=null)}function $t(e){Wt(e),e.u&&(h.clearTimeout(e.u),e.u=null),nn(e),e.i.cancel(),e.m&&("number"===typeof e.m&&h.clearTimeout(e.m),e.m=null)}function Kt(e){if(!ft(e.i)&&!e.m){e.m=!0;var c=e.Na;Ae||Re(),Te||(Ae(),Te=!0),Ee.add(c,e),e.C=0}}function Zt(e,c){return!(ut(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=c.F.concat(e.j),!0):!(1==e.H||2==e.H||e.C>=(e.cb?0:e.eb))&&(e.m=rc(V(e.Na,e,c),sn(e,e.C)),e.C++,!0))}function Yt(e,c){var t;t=c?c.m:e.W++;const n=Fc(e.I);jc(n,"SID",e.K),jc(n,"RID",t),jc(n,"AID",e.V),Qt(e,n),e.o&&e.s&&qt(n,e.o,e.s),t=new gc(e,e.l,t,e.C+1),null===e.o&&(t.I=e.s),c&&(e.j=c.F.concat(e.j)),c=Jt(e,t,1e3),t.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),mt(e.i,t),Lc(t,n,c)}function Qt(e,c){e.na&&ce(e.na,(function(e,t){jc(c,t,e)})),e.h&&Rc({},(function(e,t){jc(c,t,e)}))}function Jt(e,c,t){t=Math.min(e.j.length,t);var n=e.h?V(e.h.Va,e.h,e):null;e:{var i=e.j;let c=-1;for(;;){const e=["count="+t];-1==c?0<t?(c=i[0].g,e.push("ofs="+c)):c=0:e.push("ofs="+c);let a=!0;for(let s=0;s<t;s++){let t=i[s].g;const r=i[s].map;if(t-=c,0>t)c=Math.max(0,i[s].g-100),a=!1;else try{gt(r,e,"req"+t+"_")}catch(va){n&&n(r)}}if(a){n=e.join("&");break e}}}return e=e.j.splice(0,t),c.F=e,n}function Xt(e){if(!e.g&&!e.u){e.ba=1;var c=e.Ma;Ae||Re(),Te||(Ae(),Te=!0),Ee.add(c,e),e.A=0}}function en(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=rc(V(e.Ma,e),sn(e,e.A)),e.A++,!0)}function cn(e){null!=e.B&&(h.clearTimeout(e.B),e.B=null)}function tn(e){e.g=new gc(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var c=Fc(e.wa);jc(c,"RID","rpc"),jc(c,"SID",e.K),jc(c,"AID",e.V),jc(c,"CI",e.G?"0":"1"),!e.G&&e.qa&&jc(c,"TO",e.qa),jc(c,"TYPE","xmlhttp"),Qt(e,c),e.o&&e.s&&qt(c,e.o,e.s),e.L&&e.g.setTimeout(e.L);var t=e.g;e=e.pa,t.L=1,t.v=Gc(Fc(c)),t.s=null,t.S=!0,yc(t,e)}function nn(e){null!=e.v&&(h.clearTimeout(e.v),e.v=null)}function an(e,c){var t=null;if(e.g==c){nn(e),cn(e),e.g=null;var n=2}else{if(!ht(e.i,c))return;t=c.F,dt(e.i,c),n=1}if(0!=e.H)if(c.i)if(1==n){t=c.s?c.s.length:0,c=Date.now()-c.G;var i=e.C;n=cc(),Le(n,new sc(n,t)),Kt(e)}else Xt(e);else if(i=c.o,3==i||0==i&&0<c.ca||!(1==n&&Zt(e,c)||2==n&&en(e)))switch(t&&0<t.length&&(c=e.i,c.i=c.i.concat(t)),i){case 1:rn(e,5);break;case 4:rn(e,10);break;case 3:rn(e,6);break;default:rn(e,2)}}function sn(e,c){let t=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(t*=2),t*c}function rn(e,c){if(e.l.info("Error code "+c),2==c){var t=null;e.h&&(t=null);var n=V(e.pb,e);t||(t=new Oc("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||Uc(t,"https"),Gc(t)),Ht(t.toString(),n)}else ac(2);e.H=0,e.h&&e.h.za(c),on(e),$t(e)}function on(e){if(e.H=0,e.ma=[],e.h){const c=pt(e.i);0==c.length&&0==e.j.length||(N(e.ma,c),N(e.ma,e.j),e.i.i.length=0,w(e.j),e.j.length=0),e.h.ya()}}function ln(e,c,t){var n=t instanceof Oc?Fc(t):new Oc(t);if(""!=n.g)c&&(n.g=c+"."+n.g),qc(n,n.m);else{var i=h.location;n=i.protocol,c=c?c+"."+i.hostname:i.hostname,i=+i.port;var a=new Oc(null);n&&Uc(a,n),c&&(a.g=c),i&&qc(a,i),t&&(a.l=t),n=a}return t=e.F,c=e.Da,t&&c&&jc(n,t,c),jc(n,"VER",e.ra),Qt(e,n),n}function fn(e,c,t){if(c&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=t&&e.Ha&&!e.va?new xt(new Ct({ob:!0})):new xt(e.va),c.Oa(e.J),c}function un(){}function hn(){if(D&&!(10<=Number(K)))throw Error("Environmental error: no available transport.")}function mn(e,c){Me.call(this),this.g=new jt(c),this.l=e,this.h=c&&c.messageUrlParams||null,e=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(e?e["X-WebChannel-Content-Type"]=c.messageContentType:e={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.Ca&&(e?e["X-WebChannel-Client-Profile"]=c.Ca:e={"X-WebChannel-Client-Profile":c.Ca}),this.g.U=e,(e=c&&c.cc)&&!S(e)&&(this.g.o=e),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!S(c)&&(this.g.F=c,e=this.h,null!==e&&c in e&&(e=this.h,c in e&&delete e[c])),this.j=new vn(this)}function dn(e){pc.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var c=e.__sm__;if(c){e:{for(const t in c){e=t;break e}e=void 0}(this.i=e)&&(e=this.i,c=null!==c&&e in c?c[e]:void 0),this.data=c}else this.data=e}function pn(){vc.call(this),this.status=1}function vn(e){this.g=e}function zn(){this.blockSize=-1}function gn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function Hn(e,c,t){t||(t=0);var n=Array(16);if("string"===typeof c)for(var i=0;16>i;++i)n[i]=c.charCodeAt(t++)|c.charCodeAt(t++)<<8|c.charCodeAt(t++)<<16|c.charCodeAt(t++)<<24;else for(i=0;16>i;++i)n[i]=c[t++]|c[t++]<<8|c[t++]<<16|c[t++]<<24;c=e.g[0],t=e.g[1],i=e.g[2];var a=e.g[3],s=c+(a^t&(i^a))+n[0]+3614090360&4294967295;c=t+(s<<7&4294967295|s>>>25),s=a+(i^c&(t^i))+n[1]+3905402710&4294967295,a=c+(s<<12&4294967295|s>>>20),s=i+(t^a&(c^t))+n[2]+606105819&4294967295,i=a+(s<<17&4294967295|s>>>15),s=t+(c^i&(a^c))+n[3]+3250441966&4294967295,t=i+(s<<22&4294967295|s>>>10),s=c+(a^t&(i^a))+n[4]+4118548399&4294967295,c=t+(s<<7&4294967295|s>>>25),s=a+(i^c&(t^i))+n[5]+1200080426&4294967295,a=c+(s<<12&4294967295|s>>>20),s=i+(t^a&(c^t))+n[6]+2821735955&4294967295,i=a+(s<<17&4294967295|s>>>15),s=t+(c^i&(a^c))+n[7]+4249261313&4294967295,t=i+(s<<22&4294967295|s>>>10),s=c+(a^t&(i^a))+n[8]+1770035416&4294967295,c=t+(s<<7&4294967295|s>>>25),s=a+(i^c&(t^i))+n[9]+2336552879&4294967295,a=c+(s<<12&4294967295|s>>>20),s=i+(t^a&(c^t))+n[10]+4294925233&4294967295,i=a+(s<<17&4294967295|s>>>15),s=t+(c^i&(a^c))+n[11]+2304563134&4294967295,t=i+(s<<22&4294967295|s>>>10),s=c+(a^t&(i^a))+n[12]+1804603682&4294967295,c=t+(s<<7&4294967295|s>>>25),s=a+(i^c&(t^i))+n[13]+4254626195&4294967295,a=c+(s<<12&4294967295|s>>>20),s=i+(t^a&(c^t))+n[14]+2792965006&4294967295,i=a+(s<<17&4294967295|s>>>15),s=t+(c^i&(a^c))+n[15]+1236535329&4294967295,t=i+(s<<22&4294967295|s>>>10),s=c+(i^a&(t^i))+n[1]+4129170786&4294967295,c=t+(s<<5&4294967295|s>>>27),s=a+(t^i&(c^t))+n[6]+3225465664&4294967295,a=c+(s<<9&4294967295|s>>>23),s=i+(c^t&(a^c))+n[11]+643717713&4294967295,i=a+(s<<14&4294967295|s>>>18),s=t+(a^c&(i^a))+n[0]+3921069994&4294967295,t=i+(s<<20&4294967295|s>>>12),s=c+(i^a&(t^i))+n[5]+3593408605&4294967295,c=t+(s<<5&4294967295|s>>>27),s=a+(t^i&(c^t))+n[10]+38016083&4294967295,a=c+(s<<9&4294967295|s>>>23),s=i+(c^t&(a^c))+n[15]+3634488961&4294967295,i=a+(s<<14&4294967295|s>>>18),s=t+(a^c&(i^a))+n[4]+3889429448&4294967295,t=i+(s<<20&4294967295|s>>>12),s=c+(i^a&(t^i))+n[9]+568446438&4294967295,c=t+(s<<5&4294967295|s>>>27),s=a+(t^i&(c^t))+n[14]+3275163606&4294967295,a=c+(s<<9&4294967295|s>>>23),s=i+(c^t&(a^c))+n[3]+4107603335&4294967295,i=a+(s<<14&4294967295|s>>>18),s=t+(a^c&(i^a))+n[8]+1163531501&4294967295,t=i+(s<<20&4294967295|s>>>12),s=c+(i^a&(t^i))+n[13]+2850285829&4294967295,c=t+(s<<5&4294967295|s>>>27),s=a+(t^i&(c^t))+n[2]+4243563512&4294967295,a=c+(s<<9&4294967295|s>>>23),s=i+(c^t&(a^c))+n[7]+1735328473&4294967295,i=a+(s<<14&4294967295|s>>>18),s=t+(a^c&(i^a))+n[12]+2368359562&4294967295,t=i+(s<<20&4294967295|s>>>12),s=c+(t^i^a)+n[5]+4294588738&4294967295,c=t+(s<<4&4294967295|s>>>28),s=a+(c^t^i)+n[8]+2272392833&4294967295,a=c+(s<<11&4294967295|s>>>21),s=i+(a^c^t)+n[11]+1839030562&4294967295,i=a+(s<<16&4294967295|s>>>16),s=t+(i^a^c)+n[14]+4259657740&4294967295,t=i+(s<<23&4294967295|s>>>9),s=c+(t^i^a)+n[1]+2763975236&4294967295,c=t+(s<<4&4294967295|s>>>28),s=a+(c^t^i)+n[4]+1272893353&4294967295,a=c+(s<<11&4294967295|s>>>21),s=i+(a^c^t)+n[7]+4139469664&4294967295,i=a+(s<<16&4294967295|s>>>16),s=t+(i^a^c)+n[10]+3200236656&4294967295,t=i+(s<<23&4294967295|s>>>9),s=c+(t^i^a)+n[13]+681279174&4294967295,c=t+(s<<4&4294967295|s>>>28),s=a+(c^t^i)+n[0]+3936430074&4294967295,a=c+(s<<11&4294967295|s>>>21),s=i+(a^c^t)+n[3]+3572445317&4294967295,i=a+(s<<16&4294967295|s>>>16),s=t+(i^a^c)+n[6]+76029189&4294967295,t=i+(s<<23&4294967295|s>>>9),s=c+(t^i^a)+n[9]+3654602809&4294967295,c=t+(s<<4&4294967295|s>>>28),s=a+(c^t^i)+n[12]+3873151461&4294967295,a=c+(s<<11&4294967295|s>>>21),s=i+(a^c^t)+n[15]+530742520&4294967295,i=a+(s<<16&4294967295|s>>>16),s=t+(i^a^c)+n[2]+3299628645&4294967295,t=i+(s<<23&4294967295|s>>>9),s=c+(i^(t|~a))+n[0]+4096336452&4294967295,c=t+(s<<6&4294967295|s>>>26),s=a+(t^(c|~i))+n[7]+1126891415&4294967295,a=c+(s<<10&4294967295|s>>>22),s=i+(c^(a|~t))+n[14]+2878612391&4294967295,i=a+(s<<15&4294967295|s>>>17),s=t+(a^(i|~c))+n[5]+4237533241&4294967295,t=i+(s<<21&4294967295|s>>>11),s=c+(i^(t|~a))+n[12]+1700485571&4294967295,c=t+(s<<6&4294967295|s>>>26),s=a+(t^(c|~i))+n[3]+2399980690&4294967295,a=c+(s<<10&4294967295|s>>>22),s=i+(c^(a|~t))+n[10]+4293915773&4294967295,i=a+(s<<15&4294967295|s>>>17),s=t+(a^(i|~c))+n[1]+2240044497&4294967295,t=i+(s<<21&4294967295|s>>>11),s=c+(i^(t|~a))+n[8]+1873313359&4294967295,c=t+(s<<6&4294967295|s>>>26),s=a+(t^(c|~i))+n[15]+4264355552&4294967295,a=c+(s<<10&4294967295|s>>>22),s=i+(c^(a|~t))+n[6]+2734768916&4294967295,i=a+(s<<15&4294967295|s>>>17),s=t+(a^(i|~c))+n[13]+1309151649&4294967295,t=i+(s<<21&4294967295|s>>>11),s=c+(i^(t|~a))+n[4]+4149444226&4294967295,c=t+(s<<6&4294967295|s>>>26),s=a+(t^(c|~i))+n[11]+3174756917&4294967295,a=c+(s<<10&4294967295|s>>>22),s=i+(c^(a|~t))+n[2]+718787259&4294967295,i=a+(s<<15&4294967295|s>>>17),s=t+(a^(i|~c))+n[9]+3951481745&4294967295,e.g[0]=e.g[0]+c&4294967295,e.g[1]=e.g[1]+(i+(s<<21&4294967295|s>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+a&4294967295}function Vn(e,c){this.h=c;for(var t=[],n=!0,i=e.length-1;0<=i;i--){var a=0|e[i];n&&a==c||(t[i]=a,n=!1)}this.g=t}n=xt.prototype,n.Oa=function(e){this.M=e},n.ha=function(e,c,t,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);c=c?c.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():mc.g(),this.C=this.u?uc(this.u):uc(mc),this.g.onreadystatechange=V(this.La,this);try{this.G=!0,this.g.open(c,String(e),!0),this.G=!1}catch(a){return void At(this,a)}if(e=t||"",t=new Map(this.headers),n)if(Object.getPrototypeOf(n)===Object.prototype)for(var i in n)t.set(i,n[i]);else{if("function"!==typeof n.keys||"function"!==typeof n.get)throw Error("Unknown input type for opt_headers: "+String(n));for(const e of n.keys())t.set(e,n.get(e))}n=Array.from(t.keys()).find((e=>"content-type"==e.toLowerCase())),i=h.FormData&&e instanceof h.FormData,!(0<=b(kt,c))||n||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,r]of t)this.g.setRequestHeader(s,r);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Pt(this),0<this.B&&((this.L=It(this.g))?(this.g.timeout=this.B,this.g.ontimeout=V(this.ua,this)):this.A=Fe(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(a){At(this,a)}},n.ua=function(){"undefined"!=typeof u&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Le(this,"timeout"),this.abort(8))},n.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Le(this,"complete"),Le(this,"abort"),Rt(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Rt(this,!0)),xt.$.N.call(this)},n.La=function(){this.s||(this.G||this.v||this.l?Et(this):this.kb())},n.kb=function(){Et(this)},n.isActive=function(){return!!this.g},n.da=function(){try{return 2<Dt(this)?this.g.status:-1}catch(e){return-1}},n.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},n.Wa=function(e){if(this.g){var c=this.g.responseText;return e&&0==c.indexOf(e)&&(c=c.substring(e.length)),Nt(c)}},n.Ia=function(){return this.m},n.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},n=jt.prototype,n.ra=8,n.H=1,n.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new gc(this,this.l,e);let a=this.s;if(this.U&&(a?(a=ne(a),ae(a,this.U)):a=this.U),null!==this.o||this.O||(i.I=a,a=null),this.P)e:{for(var c=0,t=0;t<this.j.length;t++){var n=this.j[t];if(n="__data__"in n.map&&(n=n.map.__data__,"string"===typeof n)?n.length:void 0,void 0===n)break;if(c+=n,4096<c){c=t;break e}if(4096===c||t===this.j.length-1){c=t+1;break e}}c=1e3}else c=1e3;c=Jt(this,i,c),t=Fc(this.I),jc(t,"RID",e),jc(t,"CVER",22),this.F&&jc(t,"X-HTTP-Session-Id",this.F),Qt(this,t),a&&(this.O?c="headers="+encodeURIComponent(String(Ut(a)))+"&"+c:this.o&&qt(t,this.o,a)),mt(this.i,i),this.bb&&jc(t,"TYPE","init"),this.P?(jc(t,"$req",c),jc(t,"SID","null"),i.aa=!0,Lc(i,t,null)):Lc(i,t,c),this.H=2}}else 3==this.H&&(e?Yt(this,e):0==this.j.length||ft(this.i)||Yt(this))},n.Ma=function(){if(this.u=null,tn(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=rc(V(this.jb,this),e)}},n.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ac(10),Wt(this),tn(this))},n.ib=function(){null!=this.v&&(this.v=null,Wt(this),en(this),ac(19))},n.pb=function(e){e?(this.l.info("Successfully pinged google.com"),ac(2)):(this.l.info("Failed to ping google.com"),ac(1))},n.isActive=function(){return!!this.h&&this.h.isActive(this)},n=un.prototype,n.Ba=function(){},n.Aa=function(){},n.za=function(){},n.ya=function(){},n.isActive=function(){return!0},n.Va=function(){},hn.prototype.g=function(e,c){return new mn(e,c)},M(mn,Me),mn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,c=this.l,t=this.h||void 0;ac(0),e.Y=c,e.na=t||{},e.G=e.aa,e.I=ln(e,null,e.Y),Kt(e)},mn.prototype.close=function(){Gt(this.g)},mn.prototype.u=function(e){var c=this.g;if("string"===typeof e){var t={};t.__data__=e,e=t}else this.v&&(t={},t.__data__=be(e),e=t);c.j.push(new rt(c.fb++,e)),3==c.H&&Kt(c)},mn.prototype.N=function(){this.g.h=null,delete this.j,Gt(this.g),delete this.g,mn.$.N.call(this)},M(dn,pc),M(pn,vc),M(vn,un),vn.prototype.Ba=function(){Le(this.g,"a")},vn.prototype.Aa=function(e){Le(this.g,new dn(e))},vn.prototype.za=function(e){Le(this.g,new pn)},vn.prototype.ya=function(){Le(this.g,"b")},M(gn,zn),gn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},gn.prototype.j=function(e,c){void 0===c&&(c=e.length);for(var t=c-this.blockSize,n=this.m,i=this.h,a=0;a<c;){if(0==i)for(;a<=t;)Hn(this,e,a),a+=this.blockSize;if("string"===typeof e){for(;a<c;)if(n[i++]=e.charCodeAt(a++),i==this.blockSize){Hn(this,n),i=0;break}}else for(;a<c;)if(n[i++]=e[a++],i==this.blockSize){Hn(this,n),i=0;break}}this.h=i,this.i+=c},gn.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var c=1;c<e.length-8;++c)e[c]=0;var t=8*this.i;for(c=e.length-8;c<e.length;++c)e[c]=255&t,t/=256;for(this.j(e),e=Array(16),c=t=0;4>c;++c)for(var n=0;32>n;n+=8)e[t++]=this.g[c]>>>n&255;return e};var Cn={};function Mn(e){return-128<=e&&128>e?T(e,(function(e){return new Vn([0|e],0>e?-1:0)})):new Vn([0|e],0>e?-1:0)}function Ln(e){if(isNaN(e)||!isFinite(e))return wn;if(0>e)return kn(Ln(-e));for(var c=[],t=1,n=0;e>=t;n++)c[n]=e/t|0,t*=bn;return new Vn(c,0)}function yn(e,c){if(0==e.length)throw Error("number format error: empty string");if(c=c||10,2>c||36<c)throw Error("radix out of range: "+c);if("-"==e.charAt(0))return kn(yn(e.substring(1),c));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=Ln(Math.pow(c,8)),n=wn,i=0;i<e.length;i+=8){var a=Math.min(8,e.length-i),s=parseInt(e.substring(i,i+a),c);8>a?(a=Ln(Math.pow(c,a)),n=n.R(a).add(Ln(s))):(n=n.R(t),n=n.add(Ln(s)))}return n}var bn=4294967296,wn=Mn(0),Nn=Mn(1),xn=Mn(16777216);function _n(e){if(0!=e.h)return!1;for(var c=0;c<e.g.length;c++)if(0!=e.g[c])return!1;return!0}function Sn(e){return-1==e.h}function kn(e){for(var c=e.g.length,t=[],n=0;n<c;n++)t[n]=~e.g[n];return new Vn(t,~e.h).add(Nn)}function In(e,c){return e.add(kn(c))}function An(e,c){for(;(65535&e[c])!=e[c];)e[c+1]+=e[c]>>>16,e[c]&=65535,c++}function Tn(e,c){this.g=e,this.h=c}function En(e,c){if(_n(c))throw Error("division by zero");if(_n(e))return new Tn(wn,wn);if(Sn(e))return c=En(kn(e),c),new Tn(kn(c.g),kn(c.h));if(Sn(c))return c=En(e,kn(c)),new Tn(kn(c.g),c.h);if(30<e.g.length){if(Sn(e)||Sn(c))throw Error("slowDivide_ only works with positive integers.");for(var t=Nn,n=c;0>=n.X(e);)t=Rn(t),n=Rn(n);var i=Pn(t,1),a=Pn(n,1);for(n=Pn(n,2),t=Pn(t,2);!_n(n);){var s=a.add(n);0>=s.X(e)&&(i=i.add(t),a=s),n=Pn(n,1),t=Pn(t,1)}return c=In(e,i.R(c)),new Tn(i,c)}for(i=wn;0<=e.X(c);){for(t=Math.max(1,Math.floor(e.ea()/c.ea())),n=Math.ceil(Math.log(t)/Math.LN2),n=48>=n?1:Math.pow(2,n-48),a=Ln(t),s=a.R(c);Sn(s)||0<s.X(e);)t-=n,a=Ln(t),s=a.R(c);_n(a)&&(a=Nn),i=i.add(a),e=In(e,s)}return new Tn(i,e)}function Rn(e){for(var c=e.g.length+1,t=[],n=0;n<c;n++)t[n]=e.D(n)<<1|e.D(n-1)>>>31;return new Vn(t,e.h)}function Pn(e,c){var t=c>>5;c%=32;for(var n=e.g.length-t,i=[],a=0;a<n;a++)i[a]=0<c?e.D(a+t)>>>c|e.D(a+t+1)<<32-c:e.D(a+t);return new Vn(i,e.h)}n=Vn.prototype,n.ea=function(){if(Sn(this))return-kn(this).ea();for(var e=0,c=1,t=0;t<this.g.length;t++){var n=this.D(t);e+=(0<=n?n:bn+n)*c,c*=bn}return e},n.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(_n(this))return"0";if(Sn(this))return"-"+kn(this).toString(e);for(var c=Ln(Math.pow(e,6)),t=this,n="";;){var i=En(t,c).g;t=In(t,i.R(c));var a=((0<t.g.length?t.g[0]:t.h)>>>0).toString(e);if(t=i,_n(t))return a+n;for(;6>a.length;)a="0"+a;n=a+n}},n.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},n.X=function(e){return e=In(this,e),Sn(e)?-1:_n(e)?0:1},n.abs=function(){return Sn(this)?kn(this):this},n.add=function(e){for(var c=Math.max(this.g.length,e.g.length),t=[],n=0,i=0;i<=c;i++){var a=n+(65535&this.D(i))+(65535&e.D(i)),s=(a>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);n=s>>>16,a&=65535,s&=65535,t[i]=s<<16|a}return new Vn(t,-2147483648&t[t.length-1]?-1:0)},n.R=function(e){if(_n(this)||_n(e))return wn;if(Sn(this))return Sn(e)?kn(this).R(kn(e)):kn(kn(this).R(e));if(Sn(e))return kn(this.R(kn(e)));if(0>this.X(xn)&&0>e.X(xn))return Ln(this.ea()*e.ea());for(var c=this.g.length+e.g.length,t=[],n=0;n<2*c;n++)t[n]=0;for(n=0;n<this.g.length;n++)for(var i=0;i<e.g.length;i++){var a=this.D(n)>>>16,s=65535&this.D(n),r=e.D(i)>>>16,o=65535&e.D(i);t[2*n+2*i]+=s*o,An(t,2*n+2*i),t[2*n+2*i+1]+=a*o,An(t,2*n+2*i+1),t[2*n+2*i+1]+=s*r,An(t,2*n+2*i+1),t[2*n+2*i+2]+=a*r,An(t,2*n+2*i+2)}for(n=0;n<c;n++)t[n]=t[2*n+1]<<16|t[2*n];for(n=c;n<2*c;n++)t[n]=0;return new Vn(t,0)},n.gb=function(e){return En(this,e).h},n.and=function(e){for(var c=Math.max(this.g.length,e.g.length),t=[],n=0;n<c;n++)t[n]=this.D(n)&e.D(n);return new Vn(t,this.h&e.h)},n.or=function(e){for(var c=Math.max(this.g.length,e.g.length),t=[],n=0;n<c;n++)t[n]=this.D(n)|e.D(n);return new Vn(t,this.h|e.h)},n.xor=function(e){for(var c=Math.max(this.g.length,e.g.length),t=[],n=0;n<c;n++)t[n]=this.D(n)^e.D(n);return new Vn(t,this.h^e.h)},hn.prototype.createWebChannel=hn.prototype.g,mn.prototype.send=mn.prototype.u,mn.prototype.open=mn.prototype.m,mn.prototype.close=mn.prototype.close,oc.NO_ERROR=0,oc.TIMEOUT=8,oc.HTTP_ERROR=6,lc.COMPLETE="complete",hc.EventType=dc,dc.OPEN="a",dc.CLOSE="b",dc.ERROR="c",dc.MESSAGE="d",Me.prototype.listen=Me.prototype.O,xt.prototype.listenOnce=xt.prototype.P,xt.prototype.getLastError=xt.prototype.Sa,xt.prototype.getLastErrorCode=xt.prototype.Ia,xt.prototype.getStatus=xt.prototype.da,xt.prototype.getResponseJson=xt.prototype.Wa,xt.prototype.getResponseText=xt.prototype.ja,xt.prototype.send=xt.prototype.ha,xt.prototype.setWithCredentials=xt.prototype.Oa,gn.prototype.digest=gn.prototype.l,gn.prototype.reset=gn.prototype.reset,gn.prototype.update=gn.prototype.j,Vn.prototype.add=Vn.prototype.add,Vn.prototype.multiply=Vn.prototype.R,Vn.prototype.modulo=Vn.prototype.gb,Vn.prototype.compare=Vn.prototype.X,Vn.prototype.toNumber=Vn.prototype.ea,Vn.prototype.toString=Vn.prototype.toString,Vn.prototype.getBits=Vn.prototype.D,Vn.fromNumber=Ln,Vn.fromString=yn;var Dn=f.createWebChannelTransport=function(){return new hn},On=f.getStatEventTarget=function(){return cc()},Fn=f.ErrorCode=oc,Un=f.EventType=lc,qn=f.Event=Xe,Bn=f.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},jn=f.FetchXmlHttpFactory=Ct,Gn=f.WebChannel=hc,Wn=f.XhrIo=xt,$n=f.Md5=gn,Kn=f.Integer=Vn;const Zn="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Yn.UNAUTHENTICATED=new Yn(null),Yn.GOOGLE_CREDENTIALS=new Yn("google-credentials-uid"),Yn.FIRST_PARTY=new Yn("first-party-uid"),Yn.MOCK_USER=new Yn("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Qn="10.1.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=new r.Yd("@firebase/firestore");function Xn(){return Jn.logLevel}function ei(e){Jn.setLogLevel(e)}function ci(e,...c){if(Jn.logLevel<=r["in"].DEBUG){const t=c.map(ii);Jn.debug(`Firestore (${Qn}): ${e}`,...t)}}function ti(e,...c){if(Jn.logLevel<=r["in"].ERROR){const t=c.map(ii);Jn.error(`Firestore (${Qn}): ${e}`,...t)}}function ni(e,...c){if(Jn.logLevel<=r["in"].WARN){const t=c.map(ii);Jn.warn(`Firestore (${Qn}): ${e}`,...t)}}function ii(e){if("string"==typeof e)return e;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(e){return JSON.stringify(e)}(e)}catch(c){return e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(e="Unexpected state"){const c=`FIRESTORE (${Qn}) INTERNAL ASSERTION FAILED: `+e;throw ti(c),new Error(c)}function si(e,c){e||ai()}function ri(e,c){e||ai()}function oi(e,c){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class fi extends o.ZR{constructor(e,c){super(e,c),this.code=e,this.message=c,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(){this.promise=new Promise(((e,c)=>{this.resolve=e,this.reject=c}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,c){this.user=c,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mi{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,c){e.enqueueRetryable((()=>c(Yn.UNAUTHENTICATED)))}shutdown(){}}class di{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,c){this.changeListener=c,e.enqueueRetryable((()=>c(this.token.user)))}shutdown(){this.changeListener=null}}class pi{constructor(e){this.t=e,this.currentUser=Yn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,c){let t=this.i;const n=e=>this.i!==t?(t=this.i,c(e)):Promise.resolve();let i=new ui;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ui,e.enqueueRetryable((()=>n(this.currentUser)))};const a=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await n(this.currentUser)}))},s=e=>{ci("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit((e=>s(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?s(e):(ci("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ui)}}),0),a()}getToken(){const e=this.i,c=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(c).then((c=>this.i!==e?(ci("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):c?(si("string"==typeof c.accessToken),new hi(c.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return si(null===e||"string"==typeof e),new Yn(e)}}class vi{constructor(e,c,t){this.l=e,this.h=c,this.P=t,this.type="FirstParty",this.user=Yn.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class zi{constructor(e,c,t){this.l=e,this.h=c,this.P=t}getToken(){return Promise.resolve(new vi(this.l,this.h,this.P))}start(e,c){e.enqueueRetryable((()=>c(Yn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class gi{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Hi{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,c){const t=e=>{null!=e.error&&ci("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const t=e.token!==this.R;return this.R=e.token,ci("FirebaseAppCheckTokenProvider",`Received ${t?"new":"existing"} token.`),t?c(e.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable((()=>t(c)))};const n=e=>{ci("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>n(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?n(e):ci("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(si("string"==typeof e.token),this.R=e.token,new gi(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Vi(e){const c="undefined"!=typeof self&&(self.crypto||self.msCrypto),t=new Uint8Array(e);if(c&&"function"==typeof c.getRandomValues)c.getRandomValues(t);else for(let n=0;n<e;n++)t[n]=Math.floor(256*Math.random());return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=Math.floor(256/e.length)*e.length;let t="";for(;t.length<20;){const n=Vi(40);for(let i=0;i<n.length;++i)t.length<20&&n[i]<c&&(t+=e.charAt(n[i]%e.length))}return t}}function Mi(e,c){return e<c?-1:e>c?1:0}function Li(e,c,t){return e.length===c.length&&e.every(((e,n)=>t(e,c[n])))}function yi(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,c){if(this.seconds=e,this.nanoseconds=c,c<0)throw new fi(li.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+c);if(c>=1e9)throw new fi(li.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+c);if(e<-62135596800)throw new fi(li.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new fi(li.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return bi.fromMillis(Date.now())}static fromDate(e){return bi.fromMillis(e.getTime())}static fromMillis(e){const c=Math.floor(e/1e3),t=Math.floor(1e6*(e-1e3*c));return new bi(c,t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Mi(this.nanoseconds,e.nanoseconds):Mi(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e){this.timestamp=e}static fromTimestamp(e){return new wi(e)}static min(){return new wi(new bi(0,0))}static max(){return new wi(new bi(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,c,t){void 0===c?c=0:c>e.length&&ai(),void 0===t?t=e.length-c:t>e.length-c&&ai(),this.segments=e,this.offset=c,this.len=t}get length(){return this.len}isEqual(e){return 0===Ni.comparator(this,e)}child(e){const c=this.segments.slice(this.offset,this.limit());return e instanceof Ni?e.forEach((e=>{c.push(e)})):c.push(e),this.construct(c)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let c=0;c<this.length;c++)if(this.get(c)!==e.get(c))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let c=0;c<this.length;c++)if(this.get(c)!==e.get(c))return!1;return!0}forEach(e){for(let c=this.offset,t=this.limit();c<t;c++)e(this.segments[c])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,c){const t=Math.min(e.length,c.length);for(let n=0;n<t;n++){const t=e.get(n),i=c.get(n);if(t<i)return-1;if(t>i)return 1}return e.length<c.length?-1:e.length>c.length?1:0}}class xi extends Ni{construct(e,c,t){return new xi(e,c,t)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const c=[];for(const t of e){if(t.indexOf("//")>=0)throw new fi(li.INVALID_ARGUMENT,`Invalid segment (${t}). Paths must not contain // in them.`);c.push(...t.split("/").filter((e=>e.length>0)))}return new xi(c)}static emptyPath(){return new xi([])}}const _i=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Si extends Ni{construct(e,c,t){return new Si(e,c,t)}static isValidIdentifier(e){return _i.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Si.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Si(["__name__"])}static fromServerFormat(e){const c=[];let t="",n=0;const i=()=>{if(0===t.length)throw new fi(li.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);c.push(t),t=""};let a=!1;for(;n<e.length;){const c=e[n];if("\\"===c){if(n+1===e.length)throw new fi(li.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[n+1];if("\\"!==c&&"."!==c&&"`"!==c)throw new fi(li.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);t+=c,n+=2}else"`"===c?(a=!a,n++):"."!==c||a?(t+=c,n++):(i(),n++)}if(i(),a)throw new fi(li.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Si(c)}static emptyPath(){return new Si([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e){this.path=e}static fromPath(e){return new ki(xi.fromString(e))}static fromName(e){return new ki(xi.fromString(e).popFirst(5))}static empty(){return new ki(xi.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===xi.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,c){return xi.comparator(e.path,c.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ki(new xi(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,c,t,n){this.indexId=e,this.collectionGroup=c,this.fields=t,this.indexState=n}}function Ai(e){return e.fields.find((e=>2===e.kind))}function Ti(e){return e.fields.filter((e=>2!==e.kind))}Ii.UNKNOWN_ID=-1;class Ei{constructor(e,c){this.fieldPath=e,this.kind=c}}class Ri{constructor(e,c){this.sequenceNumber=e,this.offset=c}static empty(){return new Ri(0,Oi.min())}}function Pi(e,c){const t=e.toTimestamp().seconds,n=e.toTimestamp().nanoseconds+1,i=wi.fromTimestamp(1e9===n?new bi(t+1,0):new bi(t,n));return new Oi(i,ki.empty(),c)}function Di(e){return new Oi(e.readTime,e.key,-1)}class Oi{constructor(e,c,t){this.readTime=e,this.documentKey=c,this.largestBatchId=t}static min(){return new Oi(wi.min(),ki.empty(),-1)}static max(){return new Oi(wi.max(),ki.empty(),-1)}}function Fi(e,c){let t=e.readTime.compareTo(c.readTime);return 0!==t?t:(t=ki.comparator(e.documentKey,c.documentKey),0!==t?t:Mi(e.largestBatchId,c.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qi{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bi(e){if(e.code!==li.FAILED_PRECONDITION||e.message!==Ui)throw e;ci("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,c){return this.callbackAttached&&ai(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(c,this.error):this.wrapSuccess(e,this.result):new ji(((t,n)=>{this.nextCallback=c=>{this.wrapSuccess(e,c).next(t,n)},this.catchCallback=e=>{this.wrapFailure(c,e).next(t,n)}}))}toPromise(){return new Promise(((e,c)=>{this.next(e,c)}))}wrapUserFunction(e){try{const c=e();return c instanceof ji?c:ji.resolve(c)}catch(e){return ji.reject(e)}}wrapSuccess(e,c){return e?this.wrapUserFunction((()=>e(c))):ji.resolve(c)}wrapFailure(e,c){return e?this.wrapUserFunction((()=>e(c))):ji.reject(c)}static resolve(e){return new ji(((c,t)=>{c(e)}))}static reject(e){return new ji(((c,t)=>{t(e)}))}static waitFor(e){return new ji(((c,t)=>{let n=0,i=0,a=!1;e.forEach((e=>{++n,e.next((()=>{++i,a&&i===n&&c()}),(e=>t(e)))})),a=!0,i===n&&c()}))}static or(e){let c=ji.resolve(!1);for(const t of e)c=c.next((e=>e?ji.resolve(e):t()));return c}static forEach(e,c){const t=[];return e.forEach(((e,n)=>{t.push(c.call(this,e,n))})),this.waitFor(t)}static mapArray(e,c){return new ji(((t,n)=>{const i=e.length,a=new Array(i);let s=0;for(let r=0;r<i;r++){const o=r;c(e[o]).next((e=>{a[o]=e,++s,s===i&&t(a)}),(e=>n(e)))}}))}static doWhile(e,c){return new ji(((t,n)=>{const i=()=>{!0===e()?c().next((()=>{i()}),n):t()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,c){this.action=e,this.transaction=c,this.aborted=!1,this.m=new ui,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{c.error?this.m.reject(new Ki(e,c.error)):this.m.resolve()},this.transaction.onerror=c=>{const t=Xi(c.target.error);this.m.reject(new Ki(e,t))}}static open(e,c,t,n){try{return new Gi(c,e.transaction(n,t))}catch(e){throw new Ki(c,e)}}get g(){return this.m.promise}abort(e){e&&this.m.reject(e),this.aborted||(ci("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}p(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const c=this.transaction.objectStore(e);return new Yi(c)}}class Wi{constructor(e,c,t){this.name=e,this.version=c,this.S=t,12.2===Wi.D((0,o.z$)())&&ti("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return ci("SimpleDb","Removing database:",e),Qi(window.indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!(0,o.hl)())return!1;if(Wi.C())return!0;const e=(0,o.z$)(),c=Wi.D(e),t=0<c&&c<10,n=Wi.F(e),i=0<n&&n<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||t||i)}static C(){var e;return"undefined"!=typeof process&&"YES"===(null===(e={NODE_ENV:"production",BASE_URL:"/ewallet/"})||void 0===e?void 0:e.M)}static O(e,c){return e.store(c)}static D(e){const c=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),t=c?c[1].split("_").slice(0,2).join("."):"-1";return Number(t)}static F(e){const c=e.match(/Android ([\d.]+)/i),t=c?c[1].split(".").slice(0,2).join("."):"-1";return Number(t)}async N(e){return this.db||(ci("SimpleDb","Opening database:",this.name),this.db=await new Promise(((c,t)=>{const n=indexedDB.open(this.name,this.version);n.onsuccess=e=>{const t=e.target.result;c(t)},n.onblocked=()=>{t(new Ki(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},n.onerror=c=>{const n=c.target.error;"VersionError"===n.name?t(new fi(li.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===n.name?t(new fi(li.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+n)):t(new Ki(e,n))},n.onupgradeneeded=e=>{ci("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const c=e.target.result;this.S.B(c,n.transaction,e.oldVersion,this.version).next((()=>{ci("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.L&&(this.db.onversionchange=e=>this.L(e)),this.db}k(e){this.L=e,this.db&&(this.db.onversionchange=c=>e(c))}async runTransaction(e,c,t,n){const i="readonly"===c;let a=0;for(;;){++a;try{this.db=await this.N(e);const c=Gi.open(this.db,e,i?"readonly":"readwrite",t),a=n(c).next((e=>(c.p(),e))).catch((e=>(c.abort(e),ji.reject(e)))).toPromise();return a.catch((()=>{})),await c.g,a}catch(e){const c=e,t="FirebaseError"!==c.name&&a<3;if(ci("SimpleDb","Transaction failed with error:",c.message,"Retrying:",t),this.close(),!t)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class $i{constructor(e){this.q=e,this.K=!1,this.$=null}get isDone(){return this.K}get U(){return this.$}set cursor(e){this.q=e}done(){this.K=!0}W(e){this.$=e}delete(){return Qi(this.q.delete())}}class Ki extends fi{constructor(e,c){super(li.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${c}`),this.name="IndexedDbTransactionError"}}function Zi(e){return"IndexedDbTransactionError"===e.name}class Yi{constructor(e){this.store=e}put(e,c){let t;return void 0!==c?(ci("SimpleDb","PUT",this.store.name,e,c),t=this.store.put(c,e)):(ci("SimpleDb","PUT",this.store.name,"<auto-key>",e),t=this.store.put(e)),Qi(t)}add(e){return ci("SimpleDb","ADD",this.store.name,e,e),Qi(this.store.add(e))}get(e){return Qi(this.store.get(e)).next((c=>(void 0===c&&(c=null),ci("SimpleDb","GET",this.store.name,e,c),c)))}delete(e){return ci("SimpleDb","DELETE",this.store.name,e),Qi(this.store.delete(e))}count(){return ci("SimpleDb","COUNT",this.store.name),Qi(this.store.count())}G(e,c){const t=this.options(e,c);if(t.index||"function"!=typeof this.store.getAll){const e=this.cursor(t),c=[];return this.j(e,((e,t)=>{c.push(t)})).next((()=>c))}{const e=this.store.getAll(t.range);return new ji(((c,t)=>{e.onerror=e=>{t(e.target.error)},e.onsuccess=e=>{c(e.target.result)}}))}}H(e,c){const t=this.store.getAll(e,null===c?void 0:c);return new ji(((e,c)=>{t.onerror=e=>{c(e.target.error)},t.onsuccess=c=>{e(c.target.result)}}))}J(e,c){ci("SimpleDb","DELETE ALL",this.store.name);const t=this.options(e,c);t.Y=!1;const n=this.cursor(t);return this.j(n,((e,c,t)=>t.delete()))}Z(e,c){let t;c?t=e:(t={},c=e);const n=this.cursor(t);return this.j(n,c)}X(e){const c=this.cursor({});return new ji(((t,n)=>{c.onerror=e=>{const c=Xi(e.target.error);n(c)},c.onsuccess=c=>{const n=c.target.result;n?e(n.primaryKey,n.value).next((e=>{e?n.continue():t()})):t()}}))}j(e,c){const t=[];return new ji(((n,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void n();const a=new $i(i),s=c(i.primaryKey,i.value,a);if(s instanceof ji){const e=s.catch((e=>(a.done(),ji.reject(e))));t.push(e)}a.isDone?n():null===a.U?i.continue():i.continue(a.U)}})).next((()=>ji.waitFor(t)))}options(e,c){let t;return void 0!==e&&("string"==typeof e?t=e:c=e),{index:t,range:c}}cursor(e){let c="next";if(e.reverse&&(c="prev"),e.index){const t=this.store.index(e.index);return e.Y?t.openKeyCursor(e.range,c):t.openCursor(e.range,c)}return this.store.openCursor(e.range,c)}}function Qi(e){return new ji(((c,t)=>{e.onsuccess=e=>{const t=e.target.result;c(t)},e.onerror=e=>{const c=Xi(e.target.error);t(c)}}))}let Ji=!1;function Xi(e){const c=Wi.D((0,o.z$)());if(c>=12.2&&c<13){const c="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(c)>=0){const e=new fi("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${c}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Ji||(Ji=!0,setTimeout((()=>{throw e}),0)),e}}return e}class ea{constructor(e,c){this.asyncQueue=e,this.ee=c,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}te(e){ci("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{ci("IndexBackiller",`Documents written: ${await this.ee.ne()}`)}catch(e){Zi(e)?ci("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await Bi(e)}await this.te(6e4)}))}}class ca{constructor(e,c){this.localStore=e,this.persistence=c}async ne(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(c=>this.re(c,e)))}re(e,c){const t=new Set;let n=c,i=!0;return ji.doWhile((()=>!0===i&&n>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((c=>{if(null!==c&&!t.has(c))return ci("IndexBackiller",`Processing collection: ${c}`),this.ie(e,c,n).next((e=>{n-=e,t.add(c)}));i=!1})))).next((()=>c-n))}ie(e,c,t){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,c).next((n=>this.localStore.localDocuments.getNextDocuments(e,c,n,t).next((t=>{const i=t.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next((()=>this.se(n,t))).next((t=>(ci("IndexBackiller",`Updating offset: ${t}`),this.localStore.indexManager.updateCollectionGroup(e,c,t)))).next((()=>i.size))}))))}se(e,c){let t=e;return c.changes.forEach(((e,c)=>{const n=Di(c);Fi(n,t)>0&&(t=n)})),new Oi(t.readTime,t.documentKey,Math.max(c.batchId,e.largestBatchId))}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,c){this.previousValue=e,c&&(c.sequenceNumberHandler=e=>this.oe(e),this._e=e=>c.writeSequenceNumber(e))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}function na(e){return null==e}function ia(e){return 0===e&&1/e==-1/0}function aa(e){return"number"==typeof e&&Number.isInteger(e)&&!ia(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(e){let c="";for(let t=0;t<e.length;t++)c.length>0&&(c=oa(c)),c=ra(e.get(t),c);return oa(c)}function ra(e,c){let t=c;const n=e.length;for(let i=0;i<n;i++){const c=e.charAt(i);switch(c){case"\0":t+="";break;case"":t+="";break;default:t+=c}}return t}function oa(e){return e+""}function la(e){const c=e.length;if(si(c>=2),2===c)return si(""===e.charAt(0)&&""===e.charAt(1)),xi.emptyPath();const t=c-2,n=[];let i="";for(let a=0;a<c;){const c=e.indexOf("",a);switch((c<0||c>t)&&ai(),e.charAt(c+1)){case"":const t=e.substring(a,c);let s;0===i.length?s=t:(i+=t,s=i,i=""),n.push(s);break;case"":i+=e.substring(a,c),i+="\0";break;case"":i+=e.substring(a,c+1);break;default:ai()}a=c+2}return new xi(n)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ta.ae=-1;const fa=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(e,c){return[e,sa(c)]}function ha(e,c,t){return[e,sa(c),t]}const ma={},da=["prefixPath","collectionGroup","readTime","documentId"],pa=["prefixPath","collectionGroup","documentId"],va=["collectionGroup","readTime","prefixPath","documentId"],za=["canonicalId","targetId"],ga=["targetId","path"],Ha=["path","targetId"],Va=["collectionId","parent"],Ca=["indexId","uid"],Ma=["uid","sequenceNumber"],La=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],ya=["indexId","uid","orderedDocumentKey"],ba=["userId","collectionPath","documentId"],wa=["userId","collectionPath","largestBatchId"],Na=["userId","collectionGroup","largestBatchId"],xa=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],_a=[...xa,"documentOverlays"],Sa=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ka=Sa,Ia=[...ka,"indexConfiguration","indexState","indexEntries"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa extends qi{constructor(e,c){super(),this.ue=e,this.currentSequenceNumber=c}}function Ta(e,c){const t=oi(e);return Wi.O(t.ue,c)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(e){let c=0;for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&c++;return c}function Ra(e,c){for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&c(t,e[t])}function Pa(e){for(const c in e)if(Object.prototype.hasOwnProperty.call(e,c))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,c){this.comparator=e,this.root=c||Fa.EMPTY}insert(e,c){return new Da(this.comparator,this.root.insert(e,c,this.comparator).copy(null,null,Fa.BLACK,null,null))}remove(e){return new Da(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Fa.BLACK,null,null))}get(e){let c=this.root;for(;!c.isEmpty();){const t=this.comparator(e,c.key);if(0===t)return c.value;t<0?c=c.left:t>0&&(c=c.right)}return null}indexOf(e){let c=0,t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return c+t.left.size;n<0?t=t.left:(c+=t.left.size+1,t=t.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((c,t)=>(e(c,t),!1)))}toString(){const e=[];return this.inorderTraversal(((c,t)=>(e.push(`${c}:${t}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Oa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Oa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Oa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Oa(this.root,e,this.comparator,!0)}}class Oa{constructor(e,c,t,n){this.isReverse=n,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=c?t(e.key,c):1,c&&n&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const c={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return c}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Fa{constructor(e,c,t,n,i){this.key=e,this.value=c,this.color=null!=t?t:Fa.RED,this.left=null!=n?n:Fa.EMPTY,this.right=null!=i?i:Fa.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,c,t,n,i){return new Fa(null!=e?e:this.key,null!=c?c:this.value,null!=t?t:this.color,null!=n?n:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,c,t){let n=this;const i=t(e,n.key);return n=i<0?n.copy(null,null,null,n.left.insert(e,c,t),null):0===i?n.copy(null,c,null,null,null):n.copy(null,null,null,null,n.right.insert(e,c,t)),n.fixUp()}removeMin(){if(this.left.isEmpty())return Fa.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,c){let t,n=this;if(c(e,n.key)<0)n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,c),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===c(e,n.key)){if(n.right.isEmpty())return Fa.EMPTY;t=n.right.min(),n=n.copy(t.key,t.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,c))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Fa.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Fa.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),c=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,c)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ai();if(this.right.isRed())throw ai();const e=this.left.check();if(e!==this.right.check())throw ai();return e+(this.isRed()?0:1)}}Fa.EMPTY=null,Fa.RED=!0,Fa.BLACK=!1,Fa.EMPTY=new class{constructor(){this.size=0}get key(){throw ai()}get value(){throw ai()}get color(){throw ai()}get left(){throw ai()}get right(){throw ai()}copy(e,c,t,n,i){return this}insert(e,c,t){return new Fa(e,c)}remove(e,c){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ua{constructor(e){this.comparator=e,this.data=new Da(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((c,t)=>(e(c),!1)))}forEachInRange(e,c){const t=this.data.getIteratorFrom(e[0]);for(;t.hasNext();){const n=t.getNext();if(this.comparator(n.key,e[1])>=0)return;c(n.key)}}forEachWhile(e,c){let t;for(t=void 0!==c?this.data.getIteratorFrom(c):this.data.getIterator();t.hasNext();)if(!e(t.getNext().key))return}firstAfterOrEqual(e){const c=this.data.getIteratorFrom(e);return c.hasNext()?c.getNext().key:null}getIterator(){return new qa(this.data.getIterator())}getIteratorFrom(e){return new qa(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let c=this;return c.size<e.size&&(c=e,e=this),e.forEach((e=>{c=c.add(e)})),c}isEqual(e){if(!(e instanceof Ua))return!1;if(this.size!==e.size)return!1;const c=this.data.getIterator(),t=e.data.getIterator();for(;c.hasNext();){const e=c.getNext().key,n=t.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){const e=[];return this.forEach((c=>{e.push(c)})),e}toString(){const e=[];return this.forEach((c=>e.push(c))),"SortedSet("+e.toString()+")"}copy(e){const c=new Ua(this.comparator);return c.data=e,c}}class qa{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Ba(e){return e.hasNext()?e.getNext():void 0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e){this.fields=e,e.sort(Si.comparator)}static empty(){return new ja([])}unionWith(e){let c=new Ua(Si.comparator);for(const t of this.fields)c=c.add(t);for(const t of e)c=c.add(t);return new ja(c.toArray())}covers(e){for(const c of this.fields)if(c.isPrefixOf(e))return!0;return!1}isEqual(e){return Li(this.fields,e.fields,((e,c)=>e.isEqual(c)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e){this.binaryString=e}static fromBase64String(e){const c=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Ga("Invalid base64 string: "+e):e}}(e);return new $a(c)}static fromUint8Array(e){const c=function(e){let c="";for(let t=0;t<e.length;++t)c+=String.fromCharCode(e[t]);return c}(e);return new $a(c)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const c=new Uint8Array(e.length);for(let t=0;t<e.length;t++)c[t]=e.charCodeAt(t);return c}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Mi(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$a.EMPTY_BYTE_STRING=new $a("");const Ka=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Za(e){if(si(!!e),"string"==typeof e){let c=0;const t=Ka.exec(e);if(si(!!t),t[1]){let e=t[1];e=(e+"000000000").substr(0,9),c=Number(e)}const n=new Date(e);return{seconds:Math.floor(n.getTime()/1e3),nanos:c}}return{seconds:Ya(e.seconds),nanos:Ya(e.nanos)}}function Ya(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Qa(e){return"string"==typeof e?$a.fromBase64String(e):$a.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(e){var c,t;return"server_timestamp"===(null===(t=((null===(c=null==e?void 0:e.mapValue)||void 0===c?void 0:c.fields)||{}).__type__)||void 0===t?void 0:t.stringValue)}function Xa(e){const c=e.mapValue.fields.__previous_value__;return Ja(c)?Xa(c):c}function es(e){const c=Za(e.mapValue.fields.__local_write_time__.timestampValue);return new bi(c.seconds,c.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,c,t,n,i,a,s,r,o){this.databaseId=e,this.appId=c,this.persistenceKey=t,this.host=n,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=s,this.longPollingOptions=r,this.useFetchStreams=o}}class ts{constructor(e,c){this.projectId=e,this.database=c||"(default)"}static empty(){return new ts("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof ts&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},is={nullValue:"NULL_VALUE"};function as(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ja(e)?4:Hs(e)?9007199254740991:10:ai()}function ss(e,c){if(e===c)return!0;const t=as(e);if(t!==as(c))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===c.booleanValue;case 4:return es(e).isEqual(es(c));case 3:return function(e,c){if("string"==typeof e.timestampValue&&"string"==typeof c.timestampValue&&e.timestampValue.length===c.timestampValue.length)return e.timestampValue===c.timestampValue;const t=Za(e.timestampValue),n=Za(c.timestampValue);return t.seconds===n.seconds&&t.nanos===n.nanos}(e,c);case 5:return e.stringValue===c.stringValue;case 6:return function(e,c){return Qa(e.bytesValue).isEqual(Qa(c.bytesValue))}(e,c);case 7:return e.referenceValue===c.referenceValue;case 8:return function(e,c){return Ya(e.geoPointValue.latitude)===Ya(c.geoPointValue.latitude)&&Ya(e.geoPointValue.longitude)===Ya(c.geoPointValue.longitude)}(e,c);case 2:return function(e,c){if("integerValue"in e&&"integerValue"in c)return Ya(e.integerValue)===Ya(c.integerValue);if("doubleValue"in e&&"doubleValue"in c){const t=Ya(e.doubleValue),n=Ya(c.doubleValue);return t===n?ia(t)===ia(n):isNaN(t)&&isNaN(n)}return!1}(e,c);case 9:return Li(e.arrayValue.values||[],c.arrayValue.values||[],ss);case 10:return function(e,c){const t=e.mapValue.fields||{},n=c.mapValue.fields||{};if(Ea(t)!==Ea(n))return!1;for(const i in t)if(t.hasOwnProperty(i)&&(void 0===n[i]||!ss(t[i],n[i])))return!1;return!0}(e,c);default:return ai()}}function rs(e,c){return void 0!==(e.values||[]).find((e=>ss(e,c)))}function os(e,c){if(e===c)return 0;const t=as(e),n=as(c);if(t!==n)return Mi(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return Mi(e.booleanValue,c.booleanValue);case 2:return function(e,c){const t=Ya(e.integerValue||e.doubleValue),n=Ya(c.integerValue||c.doubleValue);return t<n?-1:t>n?1:t===n?0:isNaN(t)?isNaN(n)?0:-1:1}(e,c);case 3:return ls(e.timestampValue,c.timestampValue);case 4:return ls(es(e),es(c));case 5:return Mi(e.stringValue,c.stringValue);case 6:return function(e,c){const t=Qa(e),n=Qa(c);return t.compareTo(n)}(e.bytesValue,c.bytesValue);case 7:return function(e,c){const t=e.split("/"),n=c.split("/");for(let i=0;i<t.length&&i<n.length;i++){const e=Mi(t[i],n[i]);if(0!==e)return e}return Mi(t.length,n.length)}(e.referenceValue,c.referenceValue);case 8:return function(e,c){const t=Mi(Ya(e.latitude),Ya(c.latitude));return 0!==t?t:Mi(Ya(e.longitude),Ya(c.longitude))}(e.geoPointValue,c.geoPointValue);case 9:return function(e,c){const t=e.values||[],n=c.values||[];for(let i=0;i<t.length&&i<n.length;++i){const e=os(t[i],n[i]);if(e)return e}return Mi(t.length,n.length)}(e.arrayValue,c.arrayValue);case 10:return function(e,c){if(e===ns.mapValue&&c===ns.mapValue)return 0;if(e===ns.mapValue)return 1;if(c===ns.mapValue)return-1;const t=e.fields||{},n=Object.keys(t),i=c.fields||{},a=Object.keys(i);n.sort(),a.sort();for(let s=0;s<n.length&&s<a.length;++s){const e=Mi(n[s],a[s]);if(0!==e)return e;const c=os(t[n[s]],i[a[s]]);if(0!==c)return c}return Mi(n.length,a.length)}(e.mapValue,c.mapValue);default:throw ai()}}function ls(e,c){if("string"==typeof e&&"string"==typeof c&&e.length===c.length)return Mi(e,c);const t=Za(e),n=Za(c),i=Mi(t.seconds,n.seconds);return 0!==i?i:Mi(t.nanos,n.nanos)}function fs(e){return us(e)}function us(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const c=Za(e);return`time(${c.seconds},${c.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return Qa(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return ki.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let c="[",t=!0;for(const n of e.values||[])t?t=!1:c+=",",c+=us(n);return c+"]"}(e.arrayValue):"mapValue"in e?function(e){const c=Object.keys(e.fields||{}).sort();let t="{",n=!0;for(const i of c)n?n=!1:t+=",",t+=`${i}:${us(e.fields[i])}`;return t+"}"}(e.mapValue):ai()}function hs(e,c){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${c.path.canonicalString()}`}}function ms(e){return!!e&&"integerValue"in e}function ds(e){return!!e&&"arrayValue"in e}function ps(e){return!!e&&"nullValue"in e}function vs(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function zs(e){return!!e&&"mapValue"in e}function gs(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const c={mapValue:{fields:{}}};return Ra(e.mapValue.fields,((e,t)=>c.mapValue.fields[e]=gs(t))),c}if(e.arrayValue){const c={arrayValue:{values:[]}};for(let t=0;t<(e.arrayValue.values||[]).length;++t)c.arrayValue.values[t]=gs(e.arrayValue.values[t]);return c}return Object.assign({},e)}function Hs(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function Vs(e){return"nullValue"in e?is:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?hs(ts.empty(),ki.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?{mapValue:{}}:ai()}function Cs(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?hs(ts.empty(),ki.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?{mapValue:{}}:"mapValue"in e?ns:ai()}function Ms(e,c){const t=os(e.value,c.value);return 0!==t?t:e.inclusive&&!c.inclusive?-1:!e.inclusive&&c.inclusive?1:0}function Ls(e,c){const t=os(e.value,c.value);return 0!==t?t:e.inclusive&&!c.inclusive?1:!e.inclusive&&c.inclusive?-1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e){this.value=e}static empty(){return new ys({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let c=this.value;for(let t=0;t<e.length-1;++t)if(c=(c.mapValue.fields||{})[e.get(t)],!zs(c))return null;return c=(c.mapValue.fields||{})[e.lastSegment()],c||null}}set(e,c){this.getFieldsMap(e.popLast())[e.lastSegment()]=gs(c)}setAll(e){let c=Si.emptyPath(),t={},n=[];e.forEach(((e,i)=>{if(!c.isImmediateParentOf(i)){const e=this.getFieldsMap(c);this.applyChanges(e,t,n),t={},n=[],c=i.popLast()}e?t[i.lastSegment()]=gs(e):n.push(i.lastSegment())}));const i=this.getFieldsMap(c);this.applyChanges(i,t,n)}delete(e){const c=this.field(e.popLast());zs(c)&&c.mapValue.fields&&delete c.mapValue.fields[e.lastSegment()]}isEqual(e){return ss(this.value,e.value)}getFieldsMap(e){let c=this.value;c.mapValue.fields||(c.mapValue={fields:{}});for(let t=0;t<e.length;++t){let n=c.mapValue.fields[e.get(t)];zs(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},c.mapValue.fields[e.get(t)]=n),c=n}return c.mapValue.fields}applyChanges(e,c,t){Ra(c,((c,t)=>e[c]=t));for(const n of t)delete e[n]}clone(){return new ys(gs(this.value))}}function bs(e){const c=[];return Ra(e.fields,((e,t)=>{const n=new Si([e]);if(zs(t)){const e=bs(t.mapValue).fields;if(0===e.length)c.push(n);else for(const t of e)c.push(n.child(t))}else c.push(n)})),new ja(c)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ws{constructor(e,c,t,n,i,a,s){this.key=e,this.documentType=c,this.version=t,this.readTime=n,this.createTime=i,this.data=a,this.documentState=s}static newInvalidDocument(e){return new ws(e,0,wi.min(),wi.min(),wi.min(),ys.empty(),0)}static newFoundDocument(e,c,t,n){return new ws(e,1,c,wi.min(),t,n,0)}static newNoDocument(e,c){return new ws(e,2,c,wi.min(),wi.min(),ys.empty(),0)}static newUnknownDocument(e,c){return new ws(e,3,c,wi.min(),wi.min(),ys.empty(),2)}convertToFoundDocument(e,c){return!this.createTime.isEqual(wi.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=c,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ys.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ys.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=wi.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof ws&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ws(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,c){this.position=e,this.inclusive=c}}function xs(e,c,t){let n=0;for(let i=0;i<e.position.length;i++){const a=c[i],s=e.position[i];if(n=a.field.isKeyField()?ki.comparator(ki.fromName(s.referenceValue),t.key):os(s,t.data.field(a.field)),"desc"===a.dir&&(n*=-1),0!==n)break}return n}function _s(e,c){if(null===e)return null===c;if(null===c)return!1;if(e.inclusive!==c.inclusive||e.position.length!==c.position.length)return!1;for(let t=0;t<e.position.length;t++)if(!ss(e.position[t],c.position[t]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,c="asc"){this.field=e,this.dir=c}}function ks(e,c){return e.dir===c.dir&&e.field.isEqual(c.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * You may obtain a copy of the License at
 *