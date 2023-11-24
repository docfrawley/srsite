"use strict";(self["webpackChunksrsite"]=self["webpackChunksrsite"]||[]).push([[998],{4444:(e,t,n)=>{n.d(t,{BH:()=>w,L:()=>c,LL:()=>x,P0:()=>g,Pz:()=>v,Sg:()=>b,ZR:()=>O,aH:()=>y,b$:()=>T,eu:()=>A,hl:()=>k,m9:()=>q,ne:()=>U,pd:()=>F,q4:()=>m,ru:()=>S,tV:()=>u,uI:()=>_,vZ:()=>D,w1:()=>I,xO:()=>M,xb:()=>N,z$:()=>E,zd:()=>j});
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
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],o=i+1<e.length,s=o?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|s>>4;let h=(15&s)<<2|c>>6,d=63&c;a||(d=64,o||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],o=i<e.length,a=o?n[e.charAt(i)]:0;++i;const c=i<e.length,u=c?n[e.charAt(i)]:64;++i;const l=i<e.length,h=l?n[e.charAt(i)]:64;if(++i,null==t||null==a||null==u||null==h)throw new s;const d=t<<2|a>>4;if(r.push(d),64!==u){const e=a<<4&240|u>>2;if(r.push(e),64!==h){const e=u<<6&192|h;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
 */class s extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(e){const t=r(e);return o.encodeByteArray(t,!0)},c=function(e){return a(e).replace(/\./g,"")},u=function(e){try{return o.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
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
function l(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
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
 */const h=()=>l().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},f=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&u(e[1]);return t&&JSON.parse(t)},p=()=>{try{return h()||d()||f()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},m=e=>{var t,n;return null===(n=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},g=e=>{const t=m(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},y=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config},v=e=>{var t;return null===(t=p())||void 0===t?void 0:t[`_${e}`]};
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
class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
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
 */function b(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[c(JSON.stringify(n)),c(JSON.stringify(s)),a].join(".")}
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
 */function E(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function _(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(E())}function S(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function T(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function I(){const e=E();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function k(){try{return"object"===typeof indexedDB}catch(e){return!1}}function A(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
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
const C="FirebaseError";class O extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=C,Object.setPrototypeOf(this,O.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,x.prototype.create)}}class x{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?R(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new O(r,s,n);return a}}function R(e,t){return e.replace(P,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const P=/\{\$([^}]+)}/g;
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
 */function N(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function D(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(L(n)&&L(o)){if(!D(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function L(e){return null!==e&&"object"===typeof e}
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
function M(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function j(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function F(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */function U(e,t){const n=new V(e,t);return n.subscribe.bind(n)}class V{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=$(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=B),void 0===r.error&&(r.error=B),void 0===r.complete&&(r.complete=B);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function $(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function B(){}
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
function q(e){return e&&e._delegate?e._delegate:e}},1804:(e,t,n)=>{var r="auto",i=["auto","bg","cs","da","de","el","en","en-GB","es","es-419","et","fi","fr","fr-CA","hu","id","it","ja","lt","lv","ms","mt","nb","nl","pl","pt","pt-BR","ro","ru","sk","sl","sv","tr","zh","zh-HK","zh-TW"],o=["auto","book","donate","pay"],s=["required","auto"],a={base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}},c=n(732).i8,u={name:"vue-stripe",version:c,url:"https://vuestripe.com",partner_id:"pp_partner_IqtOXpBSuz0IE2"},l={install:function(e,t){var n=t.pk,r=t.stripeAccount,i=t.apiVersion,o=t.locale,s=window.Stripe(n,{stripeAccount:r,apiVersion:i,locale:o});s.registerAppInfo(u),e.prototype.$stripe=s}};function h(e,t){return e(t={exports:{}},t.exports),t.exports}var d=h((function(e){var t=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function c(e,t,n,r){var i=t&&t.prototype instanceof m?t:m,o=Object.create(i.prototype),s=new A(r||[]);return o._invoke=function(e,t,n){var r=l;return function(i,o){if(r===d)throw new Error("Generator is already running");if(r===f){if("throw"===i)throw o;return O()}for(n.method=i,n.arg=o;;){var s=n.delegate;if(s){var a=T(s,n);if(a){if(a===p)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=u(e,t,n);if("normal"===c.type){if(r=n.done?f:h,c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=f,n.method="throw",n.arg=c.arg)}}}(e,n,s),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var l="suspendedStart",h="suspendedYield",d="executing",f="completed",p={};function m(){}function g(){}function y(){}var v={};v[o]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(C([])));b&&b!==n&&r.call(b,o)&&(v=b);var E=y.prototype=m.prototype=Object.create(v);function _(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function S(e){var t;this._invoke=function(n,i){function o(){return new Promise((function(t,o){!function t(n,i,o,s){var a=u(e[n],e,i);if("throw"!==a.type){var c=a.arg,l=c.value;return l&&"object"==typeof l&&r.call(l,"__await")?Promise.resolve(l.__await).then((function(e){t("next",e,o,s)}),(function(e){t("throw",e,o,s)})):Promise.resolve(l).then((function(e){c.value=e,o(c)}),(function(e){return t("throw",e,o,s)}))}s(a.arg)}(n,i,t,o)}))}return t=t?t.then(o,o):o()}}function T(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,T(e,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var i=u(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,p;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,p):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function I(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(I,this),this.reset(!0)}function C(e){if(e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,s=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return s.next=s}}return{next:O}}function O(){return{value:t,done:!0}}return g.prototype=E.constructor=y,y.constructor=g,y[a]=g.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,a in e||(e[a]="GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},_(S.prototype),S.prototype[s]=function(){return this},e.AsyncIterator=S,e.async=function(t,n,r,i){var o=new S(c(t,n,r,i));return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},_(E),E[a]="Generator",E[o]=function(){return this},E.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=C,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(k),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return a.type="throw",a.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion;if("root"===s.tryLoc)return i("end");if(s.tryLoc<=this.prev){var c=r.call(s,"catchLoc"),u=r.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return i(s.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=e,s.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),k(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;k(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:C(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),p}},e}(e.exports);try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}})),f=d;function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var m,g="https://js.stripe.com/v3",y=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,v="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",w=function(){for(var e=document.querySelectorAll('script[src^="'.concat(g,'"]')),t=0;t<e.length;t++){var n=e[t];if(y.test(n.src))return n}return null},b=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(g).concat(t);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(n),n},E=function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.13.2",startTime:t})},_=null,S=function(e){return null!==_?_:_=new Promise((function(t,n){if("undefined"!=typeof window)if(window.Stripe&&e&&console.warn(v),window.Stripe)t(window.Stripe);else try{var r=w();r&&e?console.warn(v):r||(r=b(e)),r.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),r.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(e){return void n(e)}else t(null)}))},T=function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return E(r,n),r},I=function(e){var t="invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(JSON.stringify(e),"\n");if(null===e||"object"!==p(e))throw new Error(t);if(1===Object.keys(e).length&&"boolean"==typeof e.advancedFraudSignals)return e;throw new Error(t)},k=!1,A=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];k=!0;var r=Date.now();return S(m).then((function(e){return T(e,t,r)}))};A.setLoadParameters=function(e){if(k)throw new Error("You cannot change load parameters after calling loadStripe");m=I(e)};
/**
 * vue-coerce-props v1.0.0
 * (c) 2018 Eduardo San Martin Morote <posva13@gmail.com>
 * @license MIT
 */
var C={beforeCreate:function(){var e=this.$options.props;e&&(this._$coertions=Object.keys(e).filter((function(t){return e[t].coerce})).map((function(t){return[t,e[t].coerce]})))},computed:{$coerced:function(){var e=this;return this._$coertions.reduce((function(t,n){var r=n[0],i=n[1];return t[r]=i.call(e,e.$props[r]),t}),{})}}},O={pk:{type:String,required:!0},mode:{type:String,validator:function(e){return["payment","subscription"].includes(e)}},lineItems:{type:Array,default:void 0},items:{type:Array},successUrl:{type:String,default:window.location.href},cancelUrl:{type:String,default:window.location.href},submitType:{type:String,validator:function(e){return o.includes(e)}},billingAddressCollection:{type:String,default:"auto",validator:function(e){return s.includes(e)}},clientReferenceId:{type:String},customerEmail:{type:String},sessionId:{type:String},stripeAccount:{type:String,default:void 0},apiVersion:{type:String,default:void 0},locale:{type:String,default:r,coerce:function(e){return i.includes(e)?e:(console.warn("VueStripe Warning: '".concat(e,"' is not supported by Stripe yet. Falling back to default '").concat(r,"'.")),r)}},shippingAddressCollection:{type:Object,validator:function(e){return Object.prototype.hasOwnProperty.call(e,"allowedCountries")}},disableAdvancedFraudDetection:{type:Boolean},stripeOptions:{type:Object,default:null}},x={props:O,mixins:[C],render:function(e){return e},methods:{redirectToCheckout:function(){var e,t,n;return f.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,this.$emit("loading",!0),this.disableAdvancedFraudDetection&&A.setLoadParameters({advancedFraudSignals:!1}),e={stripeAccount:this.stripeAccount,apiVersion:this.apiVersion,locale:this.locale},r.next=6,f.awrap(A(this.pk,e));case 6:if((t=r.sent).registerAppInfo(u),!this.sessionId){r.next=11;break}return t.redirectToCheckout({sessionId:this.sessionId}),r.abrupt("return");case 11:if(!this.lineItems||!this.lineItems.length||this.mode){r.next=14;break}return console.error("Error: Property 'mode' is required when using 'lineItems'. See https://stripe.com/docs/js/checkout/redirect_to_checkout#stripe_checkout_redirect_to_checkout-options-mode"),r.abrupt("return");case 14:return n={billingAddressCollection:this.billingAddressCollection,cancelUrl:this.cancelUrl,clientReferenceId:this.clientReferenceId,customerEmail:this.customerEmail,items:this.items,lineItems:this.lineItems,locale:this.$coerced.locale,mode:this.mode,shippingAddressCollection:this.shippingAddressCollection,submitType:this.submitType,successUrl:this.successUrl},r.abrupt("return",t.redirectToCheckout(n));case 18:r.prev=18,r.t0=r.catch(0),console.error(r.t0),this.$emit("error",r.t0);case 22:case"end":return r.stop()}}),null,this,[[0,18]])}}};function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P=R;function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){P(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L="card",M={props:{pk:{type:String,required:!0},testMode:{type:Boolean,default:!1},stripeAccount:{type:String,default:void 0},apiVersion:{type:String,default:void 0},locale:{type:String,default:"auto"},elementsOptions:{type:Object,default:function(){return{}}},tokenData:{type:Object,default:function(){return{}}},disableAdvancedFraudDetection:{type:Boolean},classes:{type:Object,default:function(){return{}}},elementStyle:{type:Object,default:function(){return a}},value:{type:String,default:void 0},hidePostalCode:Boolean,iconStyle:{type:String,default:"default",validator:function(e){return["solid","default"].includes(e)}},hideIcon:Boolean,disabled:Boolean},data:function(){return{loading:!1,stripe:null,elements:null,element:null,card:null}},computed:{form:function(){return document.getElementById("stripe-element-form")}},mounted:function(){var e,t,n=this;return f.async((function(r){for(;;)switch(r.prev=r.next){case 0:return this.disableAdvancedFraudDetection&&A.setLoadParameters({advancedFraudSignals:!1}),e={stripeAccount:this.stripeAccount,apiVersion:this.apiVersion,locale:this.locale},t={classes:this.classes,style:this.elementStyle,value:this.value,hidePostalCode:this.hidePostalCode,iconStyle:this.iconStyle,hideIcon:this.hideIcon,disabled:this.disabled},r.next=5,f.awrap(A(this.pk,e));case 5:this.stripe=r.sent,this.stripe.registerAppInfo(u),this.elements=this.stripe.elements(this.elementsOptions),this.element=this.elements.create(L,t),this.element.mount("#stripe-element-mount-point"),this.element.on("change",(function(e){var t=document.getElementById("stripe-element-errors");e.error?t.textContent=e.error.message:t.textContent="",n.onChange(e)})),this.element.on("blur",this.onBlur),this.element.on("click",this.onClick),this.element.on("escape",this.onEscape),this.element.on("focus",this.onFocus),this.element.on("ready",this.onReady),this.form.addEventListener("submit",(function(e){var t,r,i,o;return f.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,n.$emit("loading",!0),e.preventDefault(),t=D({},n.element),n.amount&&(t.amount=n.amount),s.next=7,f.awrap(n.stripe.createToken(t,n.tokenData));case 7:if(r=s.sent,i=r.token,!(o=r.error)){s.next=15;break}return document.getElementById("stripe-element-errors").textContent=o.message,n.$emit("error",o),s.abrupt("return");case 15:n.$emit("token",i),s.next=22;break;case 18:s.prev=18,s.t0=s.catch(0),console.error(s.t0),n.$emit("error",s.t0);case 22:return s.prev=22,n.$emit("loading",!1),s.finish(22);case 25:case"end":return s.stop()}}),null,null,[[0,18,22,25]])}));case 17:case"end":return r.stop()}}),null,this)},methods:{submit:function(){this.$refs.submitButtonRef.click()},clear:function(){this.element.clear()},destroy:function(){this.element.destroy()},focus:function(){console.warn("This method will currently not work on iOS 13+ due to a system limitation."),this.element.focus()},unmount:function(){this.element.unmount()},update:function(e){this.element.update(e)},onChange:function(e){this.$emit("element-change",e)},onReady:function(e){this.$emit("element-ready",e)},onFocus:function(e){this.$emit("element-focus",e)},onBlur:function(e){this.$emit("element-blur",e)},onEscape:function(e){this.$emit("element-escape",e)},onClick:function(e){this.$emit("element-click",e)}}};function j(e,t,n,r,i,o,s,a,c,u){"boolean"!=typeof s&&(c=a,a=s,s=!1);const l="function"==typeof n?n.options:n;let h;if(e&&e.render&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,i&&(l.functional=!0)),r&&(l._scopeId=r),o?(h=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=h):t&&(h=s?function(e){t.call(this,u(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,a(e))}),h)if(l.functional){const e=l.render;l.render=function(t,n){return h.call(n),e(t,n)}}else{const e=l.beforeCreate;l.beforeCreate=e?[].concat(e,h):[h]}return n}const F="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function U(e){return(e,t)=>B(e,t)}let V;const $={};function B(e,t){const n=F?t.media||"default":e,r=$[n]||($[n]={ids:new Set,styles:[]});if(!r.ids.has(e)){r.ids.add(e);let n=t.source;if(t.map&&(n+="\n/*# sourceURL="+t.map.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",t.media&&r.element.setAttribute("media",t.media),void 0===V&&(V=document.head||document.getElementsByTagName("head")[0]),V.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(n),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{const e=r.ids.size-1,t=document.createTextNode(n),i=r.element.childNodes;i[e]&&r.element.removeChild(i[e]),i.length?r.element.insertBefore(t,i[e]):r.element.appendChild(t)}}}const q=M;var z=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("form",{attrs:{id:"stripe-element-form"}},[t("div",{attrs:{id:"stripe-element-mount-point"}}),this._v(" "),this._t("stripe-element-errors",[t("div",{attrs:{id:"stripe-element-errors",role:"alert"}})]),this._v(" "),t("button",{ref:"submitButtonRef",staticClass:"hide",attrs:{type:"submit"}})],2)])},H=[];z._withStripped=!0;const G=function(e){e&&e("data-v-4dd8360e_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/**\n * The CSS shown here will not be introduced in the Quickstart guide, but shows\n * how you can use CSS to style your Element's container.\n */\n.StripeElement[data-v-4dd8360e] {\n  box-sizing: border-box;\n\n  height: 40px;\n\n  padding: 10px 12px;\n\n  border: 1px solid transparent;\n  border-radius: 4px;\n  background-color: white;\n\n  box-shadow: 0 1px 3px 0 #e6ebf1;\n  -webkit-transition: box-shadow 150ms ease;\n  transition: box-shadow 150ms ease;\n}\n.StripeElement--focus[data-v-4dd8360e] {\n  box-shadow: 0 1px 3px 0 #cfd7df;\n}\n.StripeElement--invalid[data-v-4dd8360e] {\n  border-color: #fa755a;\n}\n.StripeElement--webkit-autofill[data-v-4dd8360e] {\n  background-color: #fefde5 !important;\n}\n.hide[data-v-4dd8360e] {\n  display: none;\n}\n",map:{version:3,sources:["/home/runner/work/vue-stripe/vue-stripe/src/elements/Card.vue"],names:[],mappings:";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAsPA;;;EAGA;AACA;EACA,sBAAA;;EAEA,YAAA;;EAEA,kBAAA;;EAEA,6BAAA;EACA,kBAAA;EACA,uBAAA;;EAEA,+BAAA;EACA,yCAAA;EACA,iCAAA;AACA;AAEA;EACA,+BAAA;AACA;AAEA;EACA,qBAAA;AACA;AAEA;EACA,oCAAA;AACA;AAEA;EACA,aAAA;AACA",file:"Card.vue",sourcesContent:["<template>\n  <div>\n    <form id=\"stripe-element-form\">\n      <div id=\"stripe-element-mount-point\" />\n      <slot name=\"stripe-element-errors\">\n        <div\n          id=\"stripe-element-errors\"\n          role=\"alert\"\n        />\n      </slot>\n      <button\n        ref=\"submitButtonRef\"\n        type=\"submit\"\n        class=\"hide\"\n      />\n    </form>\n  </div>\n</template>\n\n<script>\nimport { loadStripe } from '@stripe/stripe-js/dist/pure.esm.js';\n// import { isSecureHost } from '../utils';\nimport {\n  DEFAULT_ELEMENT_STYLE,\n  STRIPE_PARTNER_DETAILS,\n  // INSECURE_HOST_ERROR_MESSAGE,\n} from '../constants';\nconst ELEMENT_TYPE = 'card';\nexport default {\n  props: {\n    pk: {\n      type: String,\n      required: true,\n    },\n    testMode: {\n      type: Boolean,\n      default: false,\n    },\n    stripeAccount: {\n      type: String,\n      default: undefined,\n    },\n    apiVersion: {\n      type: String,\n      default: undefined,\n    },\n    locale: {\n      type: String,\n      default: 'auto',\n    },\n    elementsOptions: {\n      type: Object,\n      default: () => ({}),\n    },\n    tokenData: {\n      type: Object,\n      default: () => ({}),\n    },\n    disableAdvancedFraudDetection: {\n      type: Boolean,\n    },\n    // element specific options\n    classes: {\n      type: Object,\n      default: () => ({}),\n    },\n    elementStyle: {\n      type: Object,\n      default: () => (DEFAULT_ELEMENT_STYLE),\n    },\n    value: {\n      type: String,\n      default: undefined,\n    },\n    hidePostalCode: Boolean,\n    iconStyle: {\n      type: String,\n      default: 'default',\n      validator: value => ['solid', 'default'].includes(value),\n    },\n    hideIcon: Boolean,\n    disabled: Boolean,\n  },\n  data () {\n    return {\n      loading: false,\n      stripe: null,\n      elements: null,\n      element: null,\n      card: null,\n    };\n  },\n  computed: {\n    form () {\n      return document.getElementById('stripe-element-form');\n    },\n  },\n  async mounted () {\n    // FIXME: temporarily remove to avoid problems with remote non-production deployments\n    // if (!isSecureHost(this.testMode)) {\n    //   document.getElementById('stripe-element-mount-point').innerHTML = `<p style=\"color: red\">${INSECURE_HOST_ERROR_MESSAGE}</p>`;\n    //   return;\n    // }\n\n    if (this.disableAdvancedFraudDetection) loadStripe.setLoadParameters({ advancedFraudSignals: false });\n\n    const stripeOptions = {\n      stripeAccount: this.stripeAccount,\n      apiVersion: this.apiVersion,\n      locale: this.locale,\n    };\n    const createOptions = {\n      classes: this.classes,\n      style: this.elementStyle,\n      value: this.value,\n      hidePostalCode: this.hidePostalCode,\n      iconStyle: this.iconStyle,\n      hideIcon: this.hideIcon,\n      disabled: this.disabled,\n    };\n\n    this.stripe = await loadStripe(this.pk, stripeOptions);\n    this.stripe.registerAppInfo(STRIPE_PARTNER_DETAILS);\n    this.elements = this.stripe.elements(this.elementsOptions);\n    this.element = this.elements.create(ELEMENT_TYPE, createOptions);\n    this.element.mount('#stripe-element-mount-point');\n\n    this.element.on('change', (event) => {\n      var displayError = document.getElementById('stripe-element-errors');\n      if (event.error) {\n        displayError.textContent = event.error.message;\n      } else {\n        displayError.textContent = '';\n      }\n      this.onChange(event);\n    });\n\n    this.element.on('blur', this.onBlur);\n    this.element.on('click', this.onClick);\n    this.element.on('escape', this.onEscape);\n    this.element.on('focus', this.onFocus);\n    this.element.on('ready', this.onReady);\n\n    this.form.addEventListener('submit', async (event) => {\n      try {\n        this.$emit('loading', true);\n        event.preventDefault();\n        const data = {\n          ...this.element,\n        };\n        if (this.amount) data.amount = this.amount;\n        const { token, error } = await this.stripe.createToken(data, this.tokenData);\n        if (error) {\n          const errorElement = document.getElementById('stripe-element-errors');\n          errorElement.textContent = error.message;\n          this.$emit('error', error);\n          return;\n        }\n        this.$emit('token', token);\n      } catch (error) {\n        console.error(error);\n        this.$emit('error', error);\n      } finally {\n        this.$emit('loading', false);\n      }\n    });\n  },\n  methods: {\n    /**\n     * Triggers the submission of the form\n     * @return {void}\n     */\n    submit () {\n      this.$refs.submitButtonRef.click();\n    },\n    /**\n     * Clears the element\n     * @return {void}\n     */\n    clear () {\n      this.element.clear();\n    },\n    /**\n     * Destroys the element\n     * @return {void}\n     */\n    destroy () {\n      this.element.destroy();\n    },\n    /**\n     * Focuses on the element\n     * @return {void}\n     */\n    focus () {\n      console.warn('This method will currently not work on iOS 13+ due to a system limitation.');\n      this.element.focus();\n    },\n    /**\n     * Unmounts the element\n     * @return {void}\n     */\n    unmount () {\n      this.element.unmount();\n    },\n    /**\n     * Updates the element\n     * @param {string} opts.classes.base The base class applied to the container. Defaults to StripeElement.\n     * @param {string} opts.classes.complete The class name to apply when the Element is complete. Defaults to StripeElement--complete.\n     * @param {string} opts.classes.empty The class name to apply when the Element is empty. Defaults to StripeElement--empty.\n     * @param {string} opts.classes.focus The class name to apply when the Element is focused. Defaults to StripeElement--focus.\n     * @param {string} opts.classes.invalid The class name to apply when the Element is invalid. Defaults to StripeElement--invalid.\n     * @param {string} opts.classes.webkitAutoFill The class name to apply when the Element has its value autofilled by the browser (only on Chrome and Safari). Defaults to StripeElement--webkit-autofill.\n     * @param {Object} opts.style Customize the appearance of this element using CSS properties passed in a Style object.\n     * @param {string} opts.value A pre-filled set of values to include in the input (e.g., {postalCode: '94110'}). Note that sensitive card information (card number, CVC, and expiration date) cannot be pre-filled\n     * @param {boolean} opts.hidePostalCode Hide the postal code field. Default is false. If you are already collecting a full billing address or postal code elsewhere, set this to true.\n     * @param {string} opts.iconStyle Appearance of the icon in the Element. Either solid or default.\n     * @param {boolean} opts.hideIcon Hides the icon in the Element. Default is false.\n     * @param {boolean} opts.disabled Applies a disabled state to the Element such that user input is not accepted. Default is false.\n     */\n    update (opts) {\n      this.element.update(opts);\n    },\n    // events\n    onChange (e) {\n      this.$emit('element-change', e);\n    },\n    onReady (e) {\n      this.$emit('element-ready', e);\n    },\n    onFocus (e) {\n      this.$emit('element-focus', e);\n    },\n    onBlur (e) {\n      this.$emit('element-blur', e);\n    },\n    onEscape (e) {\n      this.$emit('element-escape', e);\n    },\n    onClick (e) {\n      this.$emit('element-click', e);\n    },\n  },\n};\n<\/script>\n\n<style scoped>\n/**\n * The CSS shown here will not be introduced in the Quickstart guide, but shows\n * how you can use CSS to style your Element's container.\n */\n.StripeElement {\n  box-sizing: border-box;\n\n  height: 40px;\n\n  padding: 10px 12px;\n\n  border: 1px solid transparent;\n  border-radius: 4px;\n  background-color: white;\n\n  box-shadow: 0 1px 3px 0 #e6ebf1;\n  -webkit-transition: box-shadow 150ms ease;\n  transition: box-shadow 150ms ease;\n}\n\n.StripeElement--focus {\n  box-shadow: 0 1px 3px 0 #cfd7df;\n}\n\n.StripeElement--invalid {\n  border-color: #fa755a;\n}\n\n.StripeElement--webkit-autofill {\n  background-color: #fefde5 !important;\n}\n\n.hide {\n  display: none;\n}\n</style>\n"]},media:void 0})},K="data-v-4dd8360e",W=j({render:z,staticRenderFns:H},G,q,K,!1,void 0,!1,U,void 0,void 0);var J="payment",Q={props:{pk:{type:String,required:!0},testMode:{type:Boolean,default:!1},elementsOptions:{type:Object,required:!0,default:function(){return{}}},confirmParams:{type:Object,required:!0,default:function(){return{}}},redirect:{type:String,default:"always"},createOptions:{type:Object,default:function(){return{}}},stripeAccount:{type:String,default:void 0},apiVersion:{type:String,default:void 0},locale:{type:String,default:"auto"},disableAdvancedFraudDetection:{type:Boolean}},data:function(){return{loading:!1,stripe:null,elements:null,element:null}},computed:{form:function(){return document.getElementById("stripe-payment-element-form")}},mounted:function(){var e,t=this;return f.async((function(n){for(;;)switch(n.prev=n.next){case 0:return this.disableAdvancedFraudDetection&&A.setLoadParameters({advancedFraudSignals:!1}),e={stripeAccount:this.stripeAccount,apiVersion:this.apiVersion,locale:this.locale},n.next=4,f.awrap(A(this.pk,e));case 4:this.stripe=n.sent,this.stripe.registerAppInfo(u),this.elements=this.stripe.elements(this.elementsOptions),this.element=this.elements.create(J,this.createOptions),this.element.mount("#stripe-payment-element-mount-point"),this.element.on("change",(function(e){var n=document.getElementById("stripe-payment-element-errors");e.error?n.textContent=e.error.message:n.textContent="",t.onChange(e)})),this.element.on("blur",this.onBlur),this.element.on("click",this.onClick),this.element.on("escape",this.onEscape),this.element.on("focus",this.onFocus),this.element.on("ready",this.onReady),this.form.addEventListener("submit",(function(e){var n,r,i;return f.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,t.$emit("loading",!0),e.preventDefault(),o.next=5,f.awrap(t.stripe.confirmPayment({elements:t.elements,confirmParams:t.confirmParams,redirect:t.redirect}));case 5:if(n=o.sent,r=n.error,i=n.paymentIntent,!r){o.next=15;break}return document.getElementById("stripe-payment-element-errors").textContent=r.message,t.$emit("error",r),o.abrupt("return");case 15:i&&t.$emit("confirmed",i);case 16:o.next=22;break;case 18:o.prev=18,o.t0=o.catch(0),console.error(o.t0),t.$emit("error",o.t0);case 22:return o.prev=22,t.$emit("loading",!1),o.finish(22);case 25:case"end":return o.stop()}}),null,null,[[0,18,22,25]])}));case 16:case"end":return n.stop()}}),null,this)},methods:{submit:function(){this.$refs.submitButtonRef.click()},clear:function(){this.element.clear()},destroy:function(){this.element.destroy()},focus:function(){console.warn("This method will currently not work on iOS 13+ due to a system limitation."),this.element.focus()},collapse:function(){this.element.collapse()},getElement:function(){this.element.getElement()},unmount:function(){this.element.unmount()},update:function(e){this.element.update(e)},onChange:function(e){this.$emit("element-change",e)},onReady:function(e){this.$emit("element-ready",e)},onFocus:function(e){this.$emit("element-focus",e)},onBlur:function(e){this.$emit("element-blur",e)},onEscape:function(e){this.$emit("element-escape",e)},onClick:function(e){this.$emit("element-click",e)}}};const Y=Q;var X=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("form",{attrs:{id:"stripe-payment-element-form"}},[t("div",{attrs:{id:"stripe-payment-element-mount-point"}}),this._v(" "),this._t("stripe-payment-element-errors",[t("div",{attrs:{id:"stripe-payment-element-errors",role:"alert"}})]),this._v(" "),t("button",{ref:"submitButtonRef",staticClass:"hide",attrs:{type:"submit"}})],2)])},Z=[];X._withStripped=!0;const ee=function(e){e&&e("data-v-171d7aec_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/**\n * The CSS shown here will not be introduced in the Quickstart guide, but shows\n * how you can use CSS to style your Element's container.\n */\n.hide[data-v-171d7aec] {\n  display: none;\n}\n",map:{version:3,sources:["/home/runner/work/vue-stripe/vue-stripe/src/elements/Payment.vue"],names:[],mappings:";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA6QA;;;EAGA;AACA;EACA,aAAA;AACA",file:"Payment.vue",sourcesContent:["<template>\n  <div>\n    <form id=\"stripe-payment-element-form\">\n      <div id=\"stripe-payment-element-mount-point\" />\n      <slot name=\"stripe-payment-element-errors\">\n        <div\n          id=\"stripe-payment-element-errors\"\n          role=\"alert\"\n        />\n      </slot>\n      <button\n        ref=\"submitButtonRef\"\n        type=\"submit\"\n        class=\"hide\"\n      />\n    </form>\n  </div>\n</template>\n\n<script>\nimport { loadStripe } from '@stripe/stripe-js/dist/pure.esm.js';\n// import { isSecureHost } from '../utils';\nimport {\n  STRIPE_PARTNER_DETAILS,\n  // INSECURE_HOST_ERROR_MESSAGE,\n} from '../constants';\nconst ELEMENT_TYPE = 'payment';\nexport default {\n  props: {\n    pk: {\n      type: String,\n      required: true,\n    },\n    testMode: {\n      type: Boolean,\n      default: false,\n    },\n    elementsOptions: {\n      type: Object,\n      required: true,\n      default: () => ({}),\n    },\n    confirmParams: {\n      type: Object,\n      required: true,\n      default: () => ({}),\n    },\n    redirect: {\n      type: String,\n      default: 'always',\n    },\n    createOptions: {\n      type: Object,\n      default: () => ({}),\n    },\n    stripeAccount: {\n      type: String,\n      default: undefined,\n    },\n    apiVersion: {\n      type: String,\n      default: undefined,\n    },\n    locale: {\n      type: String,\n      default: 'auto',\n    },\n    disableAdvancedFraudDetection: {\n      type: Boolean,\n    },\n  },\n  data () {\n    return {\n      loading: false,\n      stripe: null,\n      elements: null,\n      element: null,\n    };\n  },\n  computed: {\n    form () {\n      return document.getElementById('stripe-payment-element-form');\n    },\n  },\n  async mounted () {\n    // FIXME: temporarily remove to avoid problems with remote non-production deployments\n    // if (!isSecureHost(this.testMode)) {\n    //   document.getElementById(\n    //     'stripe-payment-element-mount-point',\n    //   ).innerHTML = `<p style=\"color: red\">${INSECURE_HOST_ERROR_MESSAGE}</p>`;\n    //   return;\n    // }\n\n    if (this.disableAdvancedFraudDetection) {\n      loadStripe.setLoadParameters({ advancedFraudSignals: false });\n    }\n\n    const stripeOptions = {\n      stripeAccount: this.stripeAccount,\n      apiVersion: this.apiVersion,\n      locale: this.locale,\n    };\n\n    this.stripe = await loadStripe(this.pk, stripeOptions);\n    this.stripe.registerAppInfo(STRIPE_PARTNER_DETAILS);\n\n    this.elements = this.stripe.elements(this.elementsOptions);\n    this.element = this.elements.create(ELEMENT_TYPE, this.createOptions);\n    this.element.mount('#stripe-payment-element-mount-point');\n\n    this.element.on('change', event => {\n      var displayError = document.getElementById(\n        'stripe-payment-element-errors',\n      );\n      if (event.error) {\n        displayError.textContent = event.error.message;\n      } else {\n        displayError.textContent = '';\n      }\n      this.onChange(event);\n    });\n\n    this.element.on('blur', this.onBlur);\n    this.element.on('click', this.onClick);\n    this.element.on('escape', this.onEscape);\n    this.element.on('focus', this.onFocus);\n    this.element.on('ready', this.onReady);\n\n    this.form.addEventListener('submit', async event => {\n      try {\n        this.$emit('loading', true);\n        event.preventDefault();\n        const { error, paymentIntent } = await this.stripe.confirmPayment({\n          elements: this.elements,\n          confirmParams: this.confirmParams,\n          redirect: this.redirect,\n        });\n\n        // if the response is an error\n        if (error) {\n          const errorElement = document.getElementById(\n            'stripe-payment-element-errors',\n          );\n          errorElement.textContent = error.message;\n          this.$emit('error', error);\n          return;\n        } else if (paymentIntent) {\n          // if the user has passed prop redirect=\"if_required\"\n          // and the payment confirmation was successful\n          // and the payment method is not forced to redirect\n          // then stripe.confirmPayment resolves with a paymentIntent\n          // so we sould pass it back up to the caller for consumption\n          // https://stripe.com/docs/js/payment_intents/confirm_payment?type=pii#confirm_payment_intent-options-redirect\n          this.$emit('confirmed', paymentIntent);\n        }\n      } catch (error) {\n        console.error(error);\n        this.$emit('error', error);\n      } finally {\n        this.$emit('loading', false);\n      }\n    });\n  },\n  methods: {\n    /**\n     * Triggers the submission of the form\n     * @return {void}\n     */\n    submit () {\n      this.$refs.submitButtonRef.click();\n    },\n    /**\n     * Clears the element\n     * @return {void}\n     */\n    clear () {\n      this.element.clear();\n    },\n    /**\n     * Destroys the element\n     * @return {void}\n     */\n    destroy () {\n      this.element.destroy();\n    },\n    /**\n     * Focuses on the element\n     * @return {void}\n     */\n    focus () {\n      console.warn(\n        'This method will currently not work on iOS 13+ due to a system limitation.',\n      );\n      this.element.focus();\n    },\n    /**\n     * Collapses the Payment Element into a row of payment method tabs\n     * @return {void}\n     */\n    collapse () {\n      this.element.collapse();\n    },\n    /**\n     * Retrieves a previously created element\n     */\n    getElement () {\n      this.element.getElement();\n    },\n    /**\n     * Unmounts the element\n     * @return {void}\n     */\n    unmount () {\n      this.element.unmount();\n    },\n    /**\n     * Updates the element. See official docs for more detail: https://site-admin.stripe.com/docs/js/elements_object/update_payment_element\n     * @param {string} opts.business.name  Information about your business that will be displayed in the Payment Element. This information will be retrieved from the Stripe account if not provided.\n     * @param {array} opts.paymentMethodOrder Sets order in which payment methods are displayed. Otherwise payment methods are ordered dynamically to optimize for conversion.\n     * @param {string | Object} opts.fields.billingDetails The Payment Element automatically creates input fields to collect required billing information for some payment methods like SEPA debit. Specify 'never' to avoid collecting billing details in the Payment Element if you're collecting them outside of the Payment Element.\n     * @param {string} opts.fields.billingDetails.name Specify 'never' to avoid collecting a name as part of the billing details in the Payment Element.\n     * @param {string} opts.fields.billingDetails.email Specify 'never' to avoid collecting an email address as part of the billing details in the Payment Element.\n     * @param {string} opts.fields.billingDetails.phone Specify 'never' to avoid collecting a phone number as part of the billing details in the Payment Element.\n     * @param {string | Object} opts.fields.billingDetails.address Specify 'never' to avoid collecting an address as part of the billing details in the Payment Element.\n     * @param {string} opts.fields.billingDetails.address.line1 Specify 'never' to avoid collecting an address line1 as part of the billing details in the Payment Element.\n     * @param {string} opts.fields.billingDetails.address.line2 Specify 'never' to avoid collecting an address line2 as part of the billing details in the Payment Element.\n     * @param {string} opts.fields.billingDetails.address.city Specify 'never' to avoid collecting an address city as part of the billing details in the Payment Element.\n     * @param {string} opts.fields.billingDetails.address.state Specify 'never' to avoid collecting an address state as part of the billing details in the Payment Element.\n     * @param {string} opts.fields.billingDetails.address.country Specify 'never' to avoid collecting an address country as part of the billing details in the Payment Element.\n     * @param {string} opts.fields.billingDetails.address.postalCode Specify 'never' to avoid collecting an address postal code as part of the billing details in the Payment Element.\n     * @param {string} opts.fields.terms The Payment Element automatically displays mandates or other legal agreements when required by the payment method, like SEPA debit. Specify 'never' to never show legal agreements.\n     * @param {string} opts.fields.terms.auBecsDebit Specify 'never' to never show legal agreements for the BECS Debit payment method.\n     * @param {string} opts.fields.terms.bancontact Specify 'never' to never show legal agreements for the Bancontact payment method.\n     * @param {string} opts.fields.terms.card Specify 'never' to never show legal agreements for the credit card payment method.\n     * @param {string} opts.fields.terms.ideal Specify 'never' to never show legal agreements for the iDEAL payment method.\n     * @param {string} opts.fields.terms.sepaDebit Specify 'never' to never show legal agreements for the SEPA Debit payment method.\n     * @param {string} opts.fields.terms.sofort Specify 'never' to never show legal agreements for the SOFORT payment method.\n     * @param {string} opts.fields.terms.usBankAccount Specify 'never' to never show legal agreements for the US Bank accounts payment method.\n     * @param {string} opts.wallets Specify 'never' to never show digital wallet payment methods like Apple Pay and Google Pay.\n     * @param {string} opts.wallets.applePay Specify 'never' to never show the Apple Pay digital wallet payment method.\n     * @param {string} opts.wallets.googlePay Specify 'never' to never show the Google Pay digital wallet payment method.\n     */\n    update (opts) {\n      this.element.update(opts);\n    },\n    // events\n    onChange (e) {\n      this.$emit('element-change', e);\n    },\n    onReady (e) {\n      this.$emit('element-ready', e);\n    },\n    onFocus (e) {\n      this.$emit('element-focus', e);\n    },\n    onBlur (e) {\n      this.$emit('element-blur', e);\n    },\n    onEscape (e) {\n      this.$emit('element-escape', e);\n    },\n    onClick (e) {\n      this.$emit('element-click', e);\n    },\n  },\n};\n<\/script>\n\n<style scoped>\n/**\n * The CSS shown here will not be introduced in the Quickstart guide, but shows\n * how you can use CSS to style your Element's container.\n */\n.hide {\n  display: none;\n}\n</style>\n"]},media:void 0})},te=j({render:X,staticRenderFns:Z},ee,Y,"data-v-171d7aec",!1,void 0,!1,U,void 0,void 0);var ne={install:function(e,t){var n,r,i,o,s,a,c;return f.async((function(l){for(;;)switch(l.prev=l.next){case 0:n=t.pk,r=t.stripeAccount,i=t.apiVersion,o=t.locale,s=t.elementsOptions,(a=window.Stripe(n,{stripeAccount:r,apiVersion:i,locale:o})).registerAppInfo(u),c=a.elements(s),e.prototype.$stripe=a,e.prototype.$stripeElements=c;case 6:case"end":return l.stop()}}))}};t.ki=x},2262:(e,t,n)=>{n.d(t,{B:()=>s,BK:()=>Ve,Bj:()=>o,EB:()=>u,Fl:()=>Ge,IU:()=>ke,Jd:()=>k,PG:()=>_e,SU:()=>je,Um:()=>we,Vh:()=>qe,WL:()=>Ue,X$:()=>x,X3:()=>Ie,XI:()=>De,Xl:()=>Ae,dq:()=>Pe,iH:()=>Ne,j:()=>C,lk:()=>A,nZ:()=>c,qj:()=>ve,qq:()=>_,yT:()=>Te});var r=n(3577);let i;class o{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function s(e){return new o(e)}function a(e,t=i){t&&t.active&&t.effects.push(e)}function c(){return i}function u(e){i&&i.cleanups.push(e)}const l=e=>{const t=new Set(e);return t.w=0,t.n=0,t},h=e=>(e.w&y)>0,d=e=>(e.n&y)>0,f=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=y},p=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];h(i)&&!d(i)?i.delete(e):t[n++]=i,i.w&=~y,i.n&=~y}t.length=n}},m=new WeakMap;let g=0,y=1;const v=30;let w;const b=Symbol(""),E=Symbol("");class _{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,a(this,n)}run(){if(!this.active)return this.fn();let e=w,t=T;while(e){if(e===this)return;e=e.parent}try{return this.parent=w,w=this,T=!0,y=1<<++g,g<=v?f(this):S(this),this.fn()}finally{g<=v&&p(this),y=1<<--g,w=this.parent,T=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){w===this?this.deferStop=!0:this.active&&(S(this),this.onStop&&this.onStop(),this.active=!1)}}function S(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let T=!0;const I=[];function k(){I.push(T),T=!1}function A(){const e=I.pop();T=void 0===e||e}function C(e,t,n){if(T&&w){let t=m.get(e);t||m.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=l());const i=void 0;O(r,i)}}function O(e,t){let n=!1;g<=v?d(e)||(e.n|=y,n=!h(e)):n=!e.has(w),n&&(e.add(w),w.deps.push(e))}function x(e,t,n,i,o,s){const a=m.get(e);if(!a)return;let c=[];if("clear"===t)c=[...a.values()];else if("length"===n&&(0,r.kJ)(e)){const e=Number(i);a.forEach(((t,n)=>{("length"===n||!(0,r.yk)(n)&&n>=e)&&c.push(t)}))}else switch(void 0!==n&&c.push(a.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&c.push(a.get("length")):(c.push(a.get(b)),(0,r._N)(e)&&c.push(a.get(E)));break;case"delete":(0,r.kJ)(e)||(c.push(a.get(b)),(0,r._N)(e)&&c.push(a.get(E)));break;case"set":(0,r._N)(e)&&c.push(a.get(b));break}if(1===c.length)c[0]&&R(c[0]);else{const e=[];for(const t of c)t&&e.push(...t);R(l(e))}}function R(e,t){const n=(0,r.kJ)(e)?e:[...e];for(const r of n)r.computed&&P(r,t);for(const r of n)r.computed||P(r,t)}function P(e,t){(e!==w||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function N(e,t){var n;return null==(n=m.get(e))?void 0:n.get(t)}const D=(0,r.fY)("__proto__,__v_isRef,__isVue"),L=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.yk)),M=j();function j(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=ke(this);for(let t=0,i=this.length;t<i;t++)C(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(ke)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){k();const n=ke(this)[t].apply(this,e);return A(),n}})),e}function F(e){const t=ke(this);return C(t,"has",e),t.hasOwnProperty(e)}class U{constructor(e=!1,t=!1){this._isReadonly=e,this._shallow=t}get(e,t,n){const i=this._isReadonly,o=this._shallow;if("__v_isReactive"===t)return!i;if("__v_isReadonly"===t)return i;if("__v_isShallow"===t)return o;if("__v_raw"===t&&n===(i?o?me:pe:o?fe:de).get(e))return e;const s=(0,r.kJ)(e);if(!i){if(s&&(0,r.RI)(M,t))return Reflect.get(M,t,n);if("hasOwnProperty"===t)return F}const a=Reflect.get(e,t,n);return((0,r.yk)(t)?L.has(t):D(t))?a:(i||C(e,"get",t),o?a:Pe(a)?s&&(0,r.S0)(t)?a:a.value:(0,r.Kn)(a)?i?be(a):ve(a):a)}}class V extends U{constructor(e=!1){super(!1,e)}set(e,t,n,i){let o=e[t];if(Se(o)&&Pe(o)&&!Pe(n))return!1;if(!this._shallow&&(Te(n)||Se(n)||(o=ke(o),n=ke(n)),!(0,r.kJ)(e)&&Pe(o)&&!Pe(n)))return o.value=n,!0;const s=(0,r.kJ)(e)&&(0,r.S0)(t)?Number(t)<e.length:(0,r.RI)(e,t),a=Reflect.set(e,t,n,i);return e===ke(i)&&(s?(0,r.aU)(n,o)&&x(e,"set",t,n,o):x(e,"add",t,n)),a}deleteProperty(e,t){const n=(0,r.RI)(e,t),i=e[t],o=Reflect.deleteProperty(e,t);return o&&n&&x(e,"delete",t,void 0,i),o}has(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&L.has(t)||C(e,"has",t),n}ownKeys(e){return C(e,"iterate",(0,r.kJ)(e)?"length":b),Reflect.ownKeys(e)}}class $ extends U{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const B=new V,q=new $,z=new V(!0),H=e=>e,G=e=>Reflect.getPrototypeOf(e);function K(e,t,n=!1,i=!1){e=e["__v_raw"];const o=ke(e),s=ke(t);n||((0,r.aU)(t,s)&&C(o,"get",t),C(o,"get",s));const{has:a}=G(o),c=i?H:n?Oe:Ce;return a.call(o,t)?c(e.get(t)):a.call(o,s)?c(e.get(s)):void(e!==o&&e.get(t))}function W(e,t=!1){const n=this["__v_raw"],i=ke(n),o=ke(e);return t||((0,r.aU)(e,o)&&C(i,"has",e),C(i,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function J(e,t=!1){return e=e["__v_raw"],!t&&C(ke(e),"iterate",b),Reflect.get(e,"size",e)}function Q(e){e=ke(e);const t=ke(this),n=G(t),r=n.has.call(t,e);return r||(t.add(e),x(t,"add",e,e)),this}function Y(e,t){t=ke(t);const n=ke(this),{has:i,get:o}=G(n);let s=i.call(n,e);s||(e=ke(e),s=i.call(n,e));const a=o.call(n,e);return n.set(e,t),s?(0,r.aU)(t,a)&&x(n,"set",e,t,a):x(n,"add",e,t),this}function X(e){const t=ke(this),{has:n,get:r}=G(t);let i=n.call(t,e);i||(e=ke(e),i=n.call(t,e));const o=r?r.call(t,e):void 0,s=t.delete(e);return i&&x(t,"delete",e,void 0,o),s}function Z(){const e=ke(this),t=0!==e.size,n=void 0,r=e.clear();return t&&x(e,"clear",void 0,void 0,n),r}function ee(e,t){return function(n,r){const i=this,o=i["__v_raw"],s=ke(o),a=t?H:e?Oe:Ce;return!e&&C(s,"iterate",b),o.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function te(e,t,n){return function(...i){const o=this["__v_raw"],s=ke(o),a=(0,r._N)(s),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=o[e](...i),h=n?H:t?Oe:Ce;return!t&&C(s,"iterate",u?E:b),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function ne(e){return function(...t){return"delete"!==e&&this}}function re(){const e={get(e){return K(this,e)},get size(){return J(this)},has:W,add:Q,set:Y,delete:X,clear:Z,forEach:ee(!1,!1)},t={get(e){return K(this,e,!1,!0)},get size(){return J(this)},has:W,add:Q,set:Y,delete:X,clear:Z,forEach:ee(!1,!0)},n={get(e){return K(this,e,!0)},get size(){return J(this,!0)},has(e){return W.call(this,e,!0)},add:ne("add"),set:ne("set"),delete:ne("delete"),clear:ne("clear"),forEach:ee(!0,!1)},r={get(e){return K(this,e,!0,!0)},get size(){return J(this,!0)},has(e){return W.call(this,e,!0)},add:ne("add"),set:ne("set"),delete:ne("delete"),clear:ne("clear"),forEach:ee(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=te(i,!1,!1),n[i]=te(i,!0,!1),t[i]=te(i,!1,!0),r[i]=te(i,!0,!0)})),[e,n,t,r]}const[ie,oe,se,ae]=re();function ce(e,t){const n=t?e?ae:se:e?oe:ie;return(t,i,o)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.RI)(n,i)&&i in t?n:t,i,o)}const ue={get:ce(!1,!1)},le={get:ce(!1,!0)},he={get:ce(!0,!1)};const de=new WeakMap,fe=new WeakMap,pe=new WeakMap,me=new WeakMap;function ge(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ye(e){return e["__v_skip"]||!Object.isExtensible(e)?0:ge((0,r.W7)(e))}function ve(e){return Se(e)?e:Ee(e,!1,B,ue,de)}function we(e){return Ee(e,!1,z,le,fe)}function be(e){return Ee(e,!0,q,he,pe)}function Ee(e,t,n,i,o){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const s=o.get(e);if(s)return s;const a=ye(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return o.set(e,c),c}function _e(e){return Se(e)?_e(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Se(e){return!(!e||!e["__v_isReadonly"])}function Te(e){return!(!e||!e["__v_isShallow"])}function Ie(e){return _e(e)||Se(e)}function ke(e){const t=e&&e["__v_raw"];return t?ke(t):e}function Ae(e){return(0,r.Nj)(e,"__v_skip",!0),e}const Ce=e=>(0,r.Kn)(e)?ve(e):e,Oe=e=>(0,r.Kn)(e)?be(e):e;function xe(e){T&&w&&(e=ke(e),O(e.dep||(e.dep=l())))}function Re(e,t){e=ke(e);const n=e.dep;n&&R(n)}function Pe(e){return!(!e||!0!==e.__v_isRef)}function Ne(e){return Le(e,!1)}function De(e){return Le(e,!0)}function Le(e,t){return Pe(e)?e:new Me(e,t)}class Me{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:ke(e),this._value=t?e:Ce(e)}get value(){return xe(this),this._value}set value(e){const t=this.__v_isShallow||Te(e)||Se(e);e=t?e:ke(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Ce(e),Re(this,e))}}function je(e){return Pe(e)?e.value:e}const Fe={get:(e,t,n)=>je(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Pe(i)&&!Pe(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Ue(e){return _e(e)?e:new Proxy(e,Fe)}function Ve(e){const t=(0,r.kJ)(e)?new Array(e.length):{};for(const n in e)t[n]=ze(e,n);return t}class $e{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this.__v_isRef=!0}get value(){const e=this._object[this._key];return void 0===e?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return N(ke(this._object),this._key)}}class Be{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function qe(e,t,n){return Pe(e)?e:(0,r.mf)(e)?new Be(e):(0,r.Kn)(e)&&arguments.length>1?ze(e,t,n):Ne(e)}function ze(e,t,n){const r=e[t];return Pe(r)?r:new $e(e,t,n)}class He{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this["__v_isReadonly"]=!1,this._dirty=!0,this.effect=new _(e,(()=>{this._dirty||(this._dirty=!0,Re(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=ke(this);return xe(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ge(e,t,n=!1){let i,o;const s=(0,r.mf)(e);s?(i=e,o=r.dG):(i=e.get,o=e.set);const a=new He(i,o,s||!o,n);return a}},6252:(e,t,n)=>{n.d(t,{$d:()=>s,Cn:()=>M,EM:()=>pt,FN:()=>xn,Fl:()=>Jn,HY:()=>Jt,JJ:()=>dt,Jd:()=>Le,Ko:()=>$e,P$:()=>de,Q6:()=>ve,U2:()=>pe,Uk:()=>wn,Us:()=>Dt,Wm:()=>mn,Y3:()=>v,Y8:()=>ce,YP:()=>Z,_:()=>pn,aZ:()=>we,bv:()=>Pe,dD:()=>L,f3:()=>ft,h:()=>Qn,iD:()=>an,ic:()=>De,j4:()=>cn,kq:()=>bn,lR:()=>Kt,m0:()=>Y,nJ:()=>le,nK:()=>ye,up:()=>H,w5:()=>j,wg:()=>tn,wy:()=>ie});var r=n(2262),i=n(3577);function o(e,t,n,r){let i;try{i=r?e(...r):e()}catch(o){a(o,t,n)}return i}function s(e,t,n,r){if((0,i.mf)(e)){const s=o(e,t,n,r);return s&&(0,i.tI)(s)&&s.catch((e=>{a(e,t,n)})),s}const c=[];for(let i=0;i<e.length;i++)c.push(s(e[i],t,n,r));return c}function a(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,s=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,s))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void o(a,null,10,[e,i,s])}c(e,n,i,r)}function c(e,t,n,r=!0){console.error(e)}let u=!1,l=!1;const h=[];let d=0;const f=[];let p=null,m=0;const g=Promise.resolve();let y=null;function v(e){const t=y||g;return e?t.then(this?e.bind(this):e):t}function w(e){let t=d+1,n=h.length;while(t<n){const r=t+n>>>1,i=h[r],o=k(i);o<e||o===e&&i.pre?t=r+1:n=r}return t}function b(e){h.length&&h.includes(e,u&&e.allowRecurse?d+1:d)||(null==e.id?h.push(e):h.splice(w(e.id),0,e),E())}function E(){u||l||(l=!0,y=g.then(C))}function _(e){const t=h.indexOf(e);t>d&&h.splice(t,1)}function S(e){(0,i.kJ)(e)?f.push(...e):p&&p.includes(e,e.allowRecurse?m+1:m)||f.push(e),E()}function T(e,t=(u?d+1:0)){for(0;t<h.length;t++){const e=h[t];e&&e.pre&&(h.splice(t,1),t--,e())}}function I(e){if(f.length){const e=[...new Set(f)];if(f.length=0,p)return void p.push(...e);for(p=e,p.sort(((e,t)=>k(e)-k(t))),m=0;m<p.length;m++)p[m]();p=null,m=0}}const k=e=>null==e.id?1/0:e.id,A=(e,t)=>{const n=k(e)-k(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function C(e){l=!1,u=!0,h.sort(A);i.dG;try{for(d=0;d<h.length;d++){const e=h[d];e&&!1!==e.active&&o(e,null,14)}}finally{d=0,h.length=0,I(e),u=!1,y=null,(h.length||f.length)&&C(e)}}function O(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.kT;let o=n;const a=t.startsWith("update:"),c=a&&t.slice(7);if(c&&c in r){const e=`${"modelValue"===c?"model":c}Modifiers`,{number:t,trim:s}=r[e]||i.kT;s&&(o=n.map((e=>(0,i.HD)(e)?e.trim():e))),t&&(o=n.map(i.h5))}let u;let l=r[u=(0,i.hR)(t)]||r[u=(0,i.hR)((0,i._A)(t))];!l&&a&&(l=r[u=(0,i.hR)((0,i.rs)(t))]),l&&s(l,e,6,o);const h=r[u+"Once"];if(h){if(e.emitted){if(e.emitted[u])return}else e.emitted={};e.emitted[u]=!0,s(h,e,6,o)}}function x(e,t,n=!1){const r=t.emitsCache,o=r.get(e);if(void 0!==o)return o;const s=e.emits;let a={},c=!1;if(!(0,i.mf)(e)){const r=e=>{const n=x(e,t,!0);n&&(c=!0,(0,i.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return s||c?((0,i.kJ)(s)?s.forEach((e=>a[e]=null)):(0,i.l7)(a,s),(0,i.Kn)(e)&&r.set(e,a),a):((0,i.Kn)(e)&&r.set(e,null),null)}function R(e,t){return!(!e||!(0,i.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,i.RI)(e,(0,i.rs)(t))||(0,i.RI)(e,t))}let P=null,N=null;function D(e){const t=P;return P=e,N=e&&e.type.__scopeId||null,t}function L(e){N=e}function M(){N=null}function j(e,t=P,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&on(-1);const i=D(t);let o;try{o=e(...n)}finally{D(i),r._d&&on(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function F(e){const{type:t,vnode:n,proxy:r,withProxy:o,props:s,propsOptions:[c],slots:u,attrs:l,emit:h,render:d,renderCache:f,data:p,setupState:m,ctx:g,inheritAttrs:y}=e;let v,w;const b=D(e);try{if(4&n.shapeFlag){const e=o||r;v=En(d.call(e,e,f,s,m,p,g)),w=l}else{const e=t;0,v=En(e.length>1?e(s,{attrs:l,slots:u,emit:h}):e(s,null)),w=t.props?l:U(l)}}catch(_){Zt.length=0,a(_,e,1),v=mn(Yt)}let E=v;if(w&&!1!==y){const e=Object.keys(w),{shapeFlag:t}=E;e.length&&7&t&&(c&&e.some(i.tR)&&(w=V(w,c)),E=vn(E,w))}return n.dirs&&(E=vn(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),v=E,D(b),v}const U=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.F7)(n))&&((t||(t={}))[n]=e[n]);return t},V=(e,t)=>{const n={};for(const r in e)(0,i.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function $(e,t,n){const{props:r,children:i,component:o}=e,{props:s,children:a,patchFlag:c}=t,u=o.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==s&&(r?!s||B(r,s,u):!!s);if(1024&c)return!0;if(16&c)return r?B(r,s,u):!!s;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(s[n]!==r[n]&&!R(u,n))return!0}}return!1}function B(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(t[o]!==e[o]&&!R(n,o))return!0}return!1}function q({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const z="components";function H(e,t){return K(z,e,!0,t)||e}const G=Symbol.for("v-ndc");function K(e,t,n=!0,r=!1){const o=P||On;if(o){const n=o.type;if(e===z){const e=Kn(n,!1);if(e&&(e===t||e===(0,i._A)(t)||e===(0,i.kC)((0,i._A)(t))))return n}const s=W(o[e]||n[e],t)||W(o.appContext[e],t);return!s&&r?n:s}}function W(e,t){return e&&(e[t]||e[(0,i._A)(t)]||e[(0,i.kC)((0,i._A)(t))])}const J=e=>e.__isSuspense;function Q(e,t){t&&t.pendingBranch?(0,i.kJ)(e)?t.effects.push(...e):t.effects.push(e):S(e)}function Y(e,t){return ee(e,null,t)}const X={};function Z(e,t,n){return ee(e,t,n)}function ee(e,t,{immediate:n,deep:a,flush:c,onTrack:u,onTrigger:l}=i.kT){var h;const d=(0,r.nZ)()===(null==(h=On)?void 0:h.scope)?On:null;let f,p,m=!1,g=!1;if((0,r.dq)(e)?(f=()=>e.value,m=(0,r.yT)(e)):(0,r.PG)(e)?(f=()=>e,a=!0):(0,i.kJ)(e)?(g=!0,m=e.some((e=>(0,r.PG)(e)||(0,r.yT)(e))),f=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?re(e):(0,i.mf)(e)?o(e,d,2):void 0))):f=(0,i.mf)(e)?t?()=>o(e,d,2):()=>{if(!d||!d.isUnmounted)return p&&p(),s(e,d,3,[v])}:i.dG,t&&a){const e=f;f=()=>re(e())}let y,v=e=>{p=S.onStop=()=>{o(e,d,4)}};if(Un){if(v=i.dG,t?n&&s(t,d,3,[f(),g?[]:void 0,v]):f(),"sync"!==c)return i.dG;{const e=Xn();y=e.__watcherHandles||(e.__watcherHandles=[])}}let w=g?new Array(e.length).fill(X):X;const E=()=>{if(S.active)if(t){const e=S.run();(a||m||(g?e.some(((e,t)=>(0,i.aU)(e,w[t]))):(0,i.aU)(e,w)))&&(p&&p(),s(t,d,3,[e,w===X?void 0:g&&w[0]===X?[]:w,v]),w=e)}else S.run()};let _;E.allowRecurse=!!t,"sync"===c?_=E:"post"===c?_=()=>Nt(E,d&&d.suspense):(E.pre=!0,d&&(E.id=d.uid),_=()=>b(E));const S=new r.qq(f,_);t?n?E():w=S.run():"post"===c?Nt(S.run.bind(S),d&&d.suspense):S.run();const T=()=>{S.stop(),d&&d.scope&&(0,i.Od)(d.scope.effects,S)};return y&&y.push(T),T}function te(e,t,n){const r=this.proxy,o=(0,i.HD)(e)?e.includes(".")?ne(r,e):()=>r[e]:e.bind(r,r);let s;(0,i.mf)(t)?s=t:(s=t.handler,n=t);const a=On;Dn(this);const c=ee(o,s.bind(r),n);return a?Dn(a):Ln(),c}function ne(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function re(e,t){if(!(0,i.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))re(e.value,t);else if((0,i.kJ)(e))for(let n=0;n<e.length;n++)re(e[n],t);else if((0,i.DM)(e)||(0,i._N)(e))e.forEach((e=>{re(e,t)}));else if((0,i.PO)(e))for(const n in e)re(e[n],t);return e}function ie(e,t){const n=P;if(null===n)return e;const r=Gn(n)||n.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,n,a,c=i.kT]=t[s];e&&((0,i.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&re(n),o.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c}))}return e}function oe(e,t,n,i){const o=e.dirs,a=t&&t.dirs;for(let c=0;c<o.length;c++){const u=o[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.Jd)(),s(l,n,8,[e.el,u,e,t]),(0,r.lk)())}}const se=Symbol("_leaveCb"),ae=Symbol("_enterCb");function ce(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Pe((()=>{e.isMounted=!0})),Le((()=>{e.isUnmounting=!0})),e}const ue=[Function,Array],le={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ue,onEnter:ue,onAfterEnter:ue,onEnterCancelled:ue,onBeforeLeave:ue,onLeave:ue,onAfterLeave:ue,onLeaveCancelled:ue,onBeforeAppear:ue,onAppear:ue,onAfterAppear:ue,onAppearCancelled:ue},he={name:"BaseTransition",props:le,setup(e,{slots:t}){const n=xn(),i=ce();let o;return()=>{const s=t.default&&ve(t.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){let e=!1;for(const t of s)if(t.type!==Yt){0,a=t,e=!0;break}}const c=(0,r.IU)(e),{mode:u}=c;if(i.isLeaving)return me(a);const l=ge(a);if(!l)return me(a);const h=pe(l,c,i,n);ye(l,h);const d=n.subTree,f=d&&ge(d);let p=!1;const{getTransitionKey:m}=l.type;if(m){const e=m();void 0===o?o=e:e!==o&&(o=e,p=!0)}if(f&&f.type!==Yt&&(!ln(l,f)||p)){const e=pe(f,c,i,n);if(ye(f,e),"out-in"===u)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,!1!==n.update.active&&n.update()},me(a);"in-out"===u&&l.type!==Yt&&(e.delayLeave=(e,t,n)=>{const r=fe(i,f);r[String(f.key)]=f,e[se]=()=>{t(),e[se]=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},de=he;function fe(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function pe(e,t,n,r){const{appear:o,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:l,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:y,onAppear:v,onAfterAppear:w,onAppearCancelled:b}=t,E=String(e.key),_=fe(n,e),S=(e,t)=>{e&&s(e,r,9,t)},T=(e,t)=>{const n=t[1];S(e,t),(0,i.kJ)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},I={mode:a,persisted:c,beforeEnter(t){let r=u;if(!n.isMounted){if(!o)return;r=y||u}t[se]&&t[se](!0);const i=_[E];i&&ln(e,i)&&i.el[se]&&i.el[se](),S(r,[t])},enter(e){let t=l,r=h,i=d;if(!n.isMounted){if(!o)return;t=v||l,r=w||h,i=b||d}let s=!1;const a=e[ae]=t=>{s||(s=!0,S(t?i:r,[e]),I.delayedLeave&&I.delayedLeave(),e[ae]=void 0)};t?T(t,[e,a]):a()},leave(t,r){const i=String(e.key);if(t[ae]&&t[ae](!0),n.isUnmounting)return r();S(f,[t]);let o=!1;const s=t[se]=n=>{o||(o=!0,r(),S(n?g:m,[t]),t[se]=void 0,_[i]===e&&delete _[i])};_[i]=e,p?T(p,[t,s]):s()},clone(e){return pe(e,t,n,r)}};return I}function me(e){if(Ee(e))return e=vn(e),e.children=null,e}function ge(e){return Ee(e)?e.children?e.children[0]:void 0:e}function ye(e,t){6&e.shapeFlag&&e.component?ye(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ve(e,t=!1,n){let r=[],i=0;for(let o=0;o<e.length;o++){let s=e[o];const a=null==n?s.key:String(n)+String(null!=s.key?s.key:o);s.type===Jt?(128&s.patchFlag&&i++,r=r.concat(ve(s.children,t,a))):(t||s.type!==Yt)&&r.push(null!=a?vn(s,{key:a}):s)}if(i>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}
/*! #__NO_SIDE_EFFECTS__ */function we(e,t){return(0,i.mf)(e)?(()=>(0,i.l7)({name:e.name},t,{setup:e}))():e}const be=e=>!!e.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const Ee=e=>e.type.__isKeepAlive;RegExp,RegExp;function _e(e,t){return(0,i.kJ)(e)?e.some((e=>_e(e,t))):(0,i.HD)(e)?e.split(",").includes(t):!!(0,i.Kj)(e)&&e.test(t)}function Se(e,t){Ie(e,"a",t)}function Te(e,t){Ie(e,"da",t)}function Ie(e,t,n=On){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(Oe(t,r,n),n){let e=n.parent;while(e&&e.parent)Ee(e.parent.vnode)&&ke(r,t,n,e),e=e.parent}}function ke(e,t,n,r){const o=Oe(t,e,r,!0);Me((()=>{(0,i.Od)(r[t],o)}),n)}function Ae(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Ce(e){return 128&e.shapeFlag?e.ssContent:e}function Oe(e,t,n=On,i=!1){if(n){const o=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),Dn(n);const o=s(t,n,e,i);return Ln(),(0,r.lk)(),o});return i?o.unshift(a):o.push(a),a}}const xe=e=>(t,n=On)=>(!Un||"sp"===e)&&Oe(e,((...e)=>t(...e)),n),Re=xe("bm"),Pe=xe("m"),Ne=xe("bu"),De=xe("u"),Le=xe("bum"),Me=xe("um"),je=xe("sp"),Fe=xe("rtg"),Ue=xe("rtc");function Ve(e,t=On){Oe("ec",e,t)}function $e(e,t,n,r){let o;const s=n&&n[r];if((0,i.kJ)(e)||(0,i.HD)(e)){o=new Array(e.length);for(let n=0,r=e.length;n<r;n++)o[n]=t(e[n],n,void 0,s&&s[n])}else if("number"===typeof e){0,o=new Array(e);for(let n=0;n<e;n++)o[n]=t(n+1,n,void 0,s&&s[n])}else if((0,i.Kn)(e))if(e[Symbol.iterator])o=Array.from(e,((e,n)=>t(e,n,void 0,s&&s[n])));else{const n=Object.keys(e);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=t(e[i],i,r,s&&s[r])}}else o=[];return n&&(n[r]=o),o}const Be=e=>e?Mn(e)?Gn(e)||e.proxy:Be(e.parent):null,qe=(0,i.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Be(e.parent),$root:e=>Be(e.root),$emit:e=>e.emit,$options:e=>Xe(e),$forceUpdate:e=>e.f||(e.f=()=>b(e.update)),$nextTick:e=>e.n||(e.n=v.bind(e.proxy)),$watch:e=>te.bind(e)}),ze=(e,t)=>e!==i.kT&&!e.__isScriptSetup&&(0,i.RI)(e,t),He={get({_:e},t){const{ctx:n,setupState:o,data:s,props:a,accessCache:c,type:u,appContext:l}=e;let h;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return o[t];case 2:return s[t];case 4:return n[t];case 3:return a[t]}else{if(ze(o,t))return c[t]=1,o[t];if(s!==i.kT&&(0,i.RI)(s,t))return c[t]=2,s[t];if((h=e.propsOptions[0])&&(0,i.RI)(h,t))return c[t]=3,a[t];if(n!==i.kT&&(0,i.RI)(n,t))return c[t]=4,n[t];Ke&&(c[t]=0)}}const d=qe[t];let f,p;return d?("$attrs"===t&&(0,r.j)(e,"get",t),d(e)):(f=u.__cssModules)&&(f=f[t])?f:n!==i.kT&&(0,i.RI)(n,t)?(c[t]=4,n[t]):(p=l.config.globalProperties,(0,i.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:o,ctx:s}=e;return ze(o,t)?(o[t]=n,!0):r!==i.kT&&(0,i.RI)(r,t)?(r[t]=n,!0):!(0,i.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:s}},a){let c;return!!n[a]||e!==i.kT&&(0,i.RI)(e,a)||ze(t,a)||(c=s[0])&&(0,i.RI)(c,a)||(0,i.RI)(r,a)||(0,i.RI)(qe,a)||(0,i.RI)(o.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ge(e){return(0,i.kJ)(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let Ke=!0;function We(e){const t=Xe(e),n=e.proxy,o=e.ctx;Ke=!1,t.beforeCreate&&Qe(t.beforeCreate,e,"bc");const{data:s,computed:a,methods:c,watch:u,provide:l,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:m,updated:g,activated:y,deactivated:v,beforeDestroy:w,beforeUnmount:b,destroyed:E,unmounted:_,render:S,renderTracked:T,renderTriggered:I,errorCaptured:k,serverPrefetch:A,expose:C,inheritAttrs:O,components:x,directives:R,filters:P}=t,N=null;if(h&&Je(h,o,N),c)for(const r in c){const e=c[r];(0,i.mf)(e)&&(o[r]=e.bind(n))}if(s){0;const t=s.call(n,n);0,(0,i.Kn)(t)&&(e.data=(0,r.qj)(t))}if(Ke=!0,a)for(const r in a){const e=a[r],t=(0,i.mf)(e)?e.bind(n,n):(0,i.mf)(e.get)?e.get.bind(n,n):i.dG;0;const s=!(0,i.mf)(e)&&(0,i.mf)(e.set)?e.set.bind(n):i.dG,c=Jn({get:t,set:s});Object.defineProperty(o,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(u)for(const r in u)Ye(u[r],o,n,r);if(l){const e=(0,i.mf)(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{dt(t,e[t])}))}function D(e,t){(0,i.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&Qe(d,e,"c"),D(Re,f),D(Pe,p),D(Ne,m),D(De,g),D(Se,y),D(Te,v),D(Ve,k),D(Ue,T),D(Fe,I),D(Le,b),D(Me,_),D(je,A),(0,i.kJ)(C))if(C.length){const t=e.exposed||(e.exposed={});C.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});S&&e.render===i.dG&&(e.render=S),null!=O&&(e.inheritAttrs=O),x&&(e.components=x),R&&(e.directives=R)}function Je(e,t,n=i.dG){(0,i.kJ)(e)&&(e=rt(e));for(const o in e){const n=e[o];let s;s=(0,i.Kn)(n)?"default"in n?ft(n.from||o,n.default,!0):ft(n.from||o):ft(n),(0,r.dq)(s)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[o]=s}}function Qe(e,t,n){s((0,i.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Ye(e,t,n,r){const o=r.includes(".")?ne(n,r):()=>n[r];if((0,i.HD)(e)){const n=t[e];(0,i.mf)(n)&&Z(o,n)}else if((0,i.mf)(e))Z(o,e.bind(n));else if((0,i.Kn)(e))if((0,i.kJ)(e))e.forEach((e=>Ye(e,t,n,r)));else{const r=(0,i.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.mf)(r)&&Z(o,r,e)}else 0}function Xe(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,c=s.get(t);let u;return c?u=c:o.length||n||r?(u={},o.length&&o.forEach((e=>Ze(u,e,a,!0))),Ze(u,t,a)):u=t,(0,i.Kn)(t)&&s.set(t,u),u}function Ze(e,t,n,r=!1){const{mixins:i,extends:o}=t;o&&Ze(e,o,n,!0),i&&i.forEach((t=>Ze(e,t,n,!0)));for(const s in t)if(r&&"expose"===s);else{const r=et[s]||n&&n[s];e[s]=r?r(e[s],t[s]):t[s]}return e}const et={data:tt,props:st,emits:st,methods:ot,computed:ot,beforeCreate:it,created:it,beforeMount:it,mounted:it,beforeUpdate:it,updated:it,beforeDestroy:it,beforeUnmount:it,destroyed:it,unmounted:it,activated:it,deactivated:it,errorCaptured:it,serverPrefetch:it,components:ot,directives:ot,watch:at,provide:tt,inject:nt};function tt(e,t){return t?e?function(){return(0,i.l7)((0,i.mf)(e)?e.call(this,this):e,(0,i.mf)(t)?t.call(this,this):t)}:t:e}function nt(e,t){return ot(rt(e),rt(t))}function rt(e){if((0,i.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function it(e,t){return e?[...new Set([].concat(e,t))]:t}function ot(e,t){return e?(0,i.l7)(Object.create(null),e,t):t}function st(e,t){return e?(0,i.kJ)(e)&&(0,i.kJ)(t)?[...new Set([...e,...t])]:(0,i.l7)(Object.create(null),Ge(e),Ge(null!=t?t:{})):t}function at(e,t){if(!e)return t;if(!t)return e;const n=(0,i.l7)(Object.create(null),e);for(const r in t)n[r]=it(e[r],t[r]);return n}function ct(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ut=0;function lt(e,t){return function(n,r=null){(0,i.mf)(n)||(n=(0,i.l7)({},n)),null==r||(0,i.Kn)(r)||(r=null);const o=ct();const s=new WeakSet;let a=!1;const c=o.app={_uid:ut++,_component:n,_props:r,_container:null,_context:o,_instance:null,version:Zn,get config(){return o.config},set config(e){0},use(e,...t){return s.has(e)||(e&&(0,i.mf)(e.install)?(s.add(e),e.install(c,...t)):(0,i.mf)(e)&&(s.add(e),e(c,...t))),c},mixin(e){return o.mixins.includes(e)||o.mixins.push(e),c},component(e,t){return t?(o.components[e]=t,c):o.components[e]},directive(e,t){return t?(o.directives[e]=t,c):o.directives[e]},mount(i,s,u){if(!a){0;const l=mn(n,r);return l.appContext=o,s&&t?t(l,i):e(l,i,u),a=!0,c._container=i,i.__vue_app__=c,Gn(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return o.provides[e]=t,c},runWithContext(e){ht=c;try{return e()}finally{ht=null}}};return c}}let ht=null;function dt(e,t){if(On){let n=On.provides;const r=On.parent&&On.parent.provides;r===n&&(n=On.provides=Object.create(r)),n[e]=t}else 0}function ft(e,t,n=!1){const r=On||P;if(r||ht){const o=r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:ht._context.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&(0,i.mf)(t)?t.call(r&&r.proxy):t}else 0}function pt(){return!!(On||P||ht)}function mt(e,t,n,o=!1){const s={},a={};(0,i.Nj)(a,hn,1),e.propsDefaults=Object.create(null),yt(e,t,s,a);for(const r in e.propsOptions[0])r in s||(s[r]=void 0);n?e.props=o?s:(0,r.Um)(s):e.type.props?e.props=s:e.props=a,e.attrs=a}function gt(e,t,n,o){const{props:s,attrs:a,vnode:{patchFlag:c}}=e,u=(0,r.IU)(s),[l]=e.propsOptions;let h=!1;if(!(o||c>0)||16&c){let r;yt(e,t,s,a)&&(h=!0);for(const o in u)t&&((0,i.RI)(t,o)||(r=(0,i.rs)(o))!==o&&(0,i.RI)(t,r))||(l?!n||void 0===n[o]&&void 0===n[r]||(s[o]=vt(l,u,o,void 0,e,!0)):delete s[o]);if(a!==u)for(const e in a)t&&(0,i.RI)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(R(e.emitsOptions,o))continue;const c=t[o];if(l)if((0,i.RI)(a,o))c!==a[o]&&(a[o]=c,h=!0);else{const t=(0,i._A)(o);s[t]=vt(l,u,t,c,e,!1)}else c!==a[o]&&(a[o]=c,h=!0)}}h&&(0,r.X$)(e,"set","$attrs")}function yt(e,t,n,o){const[s,a]=e.propsOptions;let c,u=!1;if(t)for(let r in t){if((0,i.Gg)(r))continue;const l=t[r];let h;s&&(0,i.RI)(s,h=(0,i._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:R(e.emitsOptions,r)||r in o&&l===o[r]||(o[r]=l,u=!0)}if(a){const t=(0,r.IU)(n),o=c||i.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=vt(s,t,c,o[c],e,!(0,i.RI)(o,c))}}return u}function vt(e,t,n,r,o,s){const a=e[n];if(null!=a){const e=(0,i.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.mf)(e)){const{propsDefaults:i}=o;n in i?r=i[n]:(Dn(o),r=i[n]=e.call(null,t),Ln())}else r=e}a[0]&&(s&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function wt(e,t,n=!1){const r=t.propsCache,o=r.get(e);if(o)return o;const s=e.props,a={},c=[];let u=!1;if(!(0,i.mf)(e)){const r=e=>{u=!0;const[n,r]=wt(e,t,!0);(0,i.l7)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!s&&!u)return(0,i.Kn)(e)&&r.set(e,i.Z6),i.Z6;if((0,i.kJ)(s))for(let h=0;h<s.length;h++){0;const e=(0,i._A)(s[h]);bt(e)&&(a[e]=i.kT)}else if(s){0;for(const e in s){const t=(0,i._A)(e);if(bt(t)){const n=s[e],r=a[t]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:(0,i.l7)({},n);if(r){const e=St(Boolean,r.type),n=St(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.RI)(r,"default"))&&c.push(t)}}}}const l=[a,c];return(0,i.Kn)(e)&&r.set(e,l),l}function bt(e){return"$"!==e[0]}function Et(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:null===e?"null":""}function _t(e,t){return Et(e)===Et(t)}function St(e,t){return(0,i.kJ)(t)?t.findIndex((t=>_t(t,e))):(0,i.mf)(t)&&_t(t,e)?0:-1}const Tt=e=>"_"===e[0]||"$stable"===e,It=e=>(0,i.kJ)(e)?e.map(En):[En(e)],kt=(e,t,n)=>{if(t._n)return t;const r=j(((...e)=>It(t(...e))),n);return r._c=!1,r},At=(e,t,n)=>{const r=e._ctx;for(const o in e){if(Tt(o))continue;const n=e[o];if((0,i.mf)(n))t[o]=kt(o,n,r);else if(null!=n){0;const e=It(n);t[o]=()=>e}}},Ct=(e,t)=>{const n=It(t);e.slots.default=()=>n},Ot=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,i.Nj)(t,"_",n)):At(t,e.slots={})}else e.slots={},t&&Ct(e,t);(0,i.Nj)(e.slots,hn,1)},xt=(e,t,n)=>{const{vnode:r,slots:o}=e;let s=!0,a=i.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?s=!1:((0,i.l7)(o,t),n||1!==e||delete o._):(s=!t.$stable,At(t,o)),a=t}else t&&(Ct(e,t),a={default:1});if(s)for(const i in o)Tt(i)||null!=a[i]||delete o[i]};function Rt(e,t,n,s,a=!1){if((0,i.kJ)(e))return void e.forEach(((e,r)=>Rt(e,t&&((0,i.kJ)(t)?t[r]:t),n,s,a)));if(be(s)&&!a)return;const c=4&s.shapeFlag?Gn(s.component)||s.component.proxy:s.el,u=a?null:c,{i:l,r:h}=e;const d=t&&t.r,f=l.refs===i.kT?l.refs={}:l.refs,p=l.setupState;if(null!=d&&d!==h&&((0,i.HD)(d)?(f[d]=null,(0,i.RI)(p,d)&&(p[d]=null)):(0,r.dq)(d)&&(d.value=null)),(0,i.mf)(h))o(h,l,12,[u,f]);else{const t=(0,i.HD)(h),o=(0,r.dq)(h);if(t||o){const r=()=>{if(e.f){const n=t?(0,i.RI)(p,h)?p[h]:f[h]:h.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,c):(0,i.kJ)(n)?n.includes(c)||n.push(c):t?(f[h]=[c],(0,i.RI)(p,h)&&(p[h]=f[h])):(h.value=[c],e.k&&(f[e.k]=h.value))}else t?(f[h]=u,(0,i.RI)(p,h)&&(p[h]=u)):o&&(h.value=u,e.k&&(f[e.k]=u))};u?(r.id=-1,Nt(r,n)):r()}else 0}}function Pt(){}const Nt=Q;function Dt(e){return Lt(e)}function Lt(e,t){Pt();const n=(0,i.E9)();n.__VUE__=!0;const{insert:o,remove:s,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:m=i.dG,insertStaticContent:g}=e,y=(e,t,n,r=null,i=null,o=null,s=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!ln(e,t)&&(r=X(e),K(e,i,o,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=t;switch(u){case Qt:v(e,t,n,r);break;case Yt:w(e,t,n,r);break;case Xt:null==e&&E(t,n,r,s);break;case Jt:D(e,t,n,r,i,o,s,a,c);break;default:1&h?A(e,t,n,r,i,o,s,a,c):6&h?L(e,t,n,r,i,o,s,a,c):(64&h||128&h)&&u.process(e,t,n,r,i,o,s,a,c,ee)}null!=l&&i&&Rt(l,e&&e.ref,o,t||e,!t)},v=(e,t,n,r)=>{if(null==e)o(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},w=(e,t,n,r)=>{null==e?o(t.el=l(t.children||""),n,r):t.el=e.el},E=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),o(e,n,r),e=i;o(t,n,r)},k=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),s(e),e=n;s(t)},A=(e,t,n,r,i,o,s,a,c)=>{s=s||"svg"===t.type,null==e?C(t,n,r,i,o,s,a,c):R(e,t,i,o,s,a,c)},C=(e,t,n,r,s,u,l,h)=>{let f,p;const{type:m,props:g,shapeFlag:y,transition:v,dirs:w}=e;if(f=e.el=c(e.type,u,g&&g.is,g),8&y?d(f,e.children):16&y&&x(e.children,f,null,r,s,u&&"foreignObject"!==m,l,h),w&&oe(e,null,r,"created"),O(f,e,e.scopeId,l,r),g){for(const t in g)"value"===t||(0,i.Gg)(t)||a(f,t,null,g[t],u,e.children,r,s,Y);"value"in g&&a(f,"value",null,g.value),(p=g.onVnodeBeforeMount)&&In(p,r,e)}w&&oe(e,null,r,"beforeMount");const b=jt(s,v);b&&v.beforeEnter(f),o(f,t,n),((p=g&&g.onVnodeMounted)||b||w)&&Nt((()=>{p&&In(p,r,e),b&&v.enter(f),w&&oe(e,null,r,"mounted")}),s)},O=(e,t,n,r,i)=>{if(n&&m(e,n),r)for(let o=0;o<r.length;o++)m(e,r[o]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;O(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},x=(e,t,n,r,i,o,s,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?_n(e[u]):En(e[u]);y(null,c,t,n,r,i,o,s,a)}},R=(e,t,n,r,o,s,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:h,dirs:f}=t;l|=16&e.patchFlag;const p=e.props||i.kT,m=t.props||i.kT;let g;n&&Mt(n,!1),(g=m.onVnodeBeforeUpdate)&&In(g,n,t,e),f&&oe(t,e,n,"beforeUpdate"),n&&Mt(n,!0);const y=o&&"foreignObject"!==t.type;if(h?P(e.dynamicChildren,h,u,n,r,y,s):c||B(e,t,u,null,n,r,y,s,!1),l>0){if(16&l)N(u,t,p,m,n,r,o);else if(2&l&&p.class!==m.class&&a(u,"class",null,m.class,o),4&l&&a(u,"style",p.style,m.style,o),8&l){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const s=i[t],c=p[s],l=m[s];l===c&&"value"!==s||a(u,s,c,l,o,e.children,n,r,Y)}}1&l&&e.children!==t.children&&d(u,t.children)}else c||null!=h||N(u,t,p,m,n,r,o);((g=m.onVnodeUpdated)||f)&&Nt((()=>{g&&In(g,n,t,e),f&&oe(t,e,n,"updated")}),r)},P=(e,t,n,r,i,o,s)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===Jt||!ln(c,u)||70&c.shapeFlag)?f(c.el):n;y(c,u,l,null,r,i,o,s,!0)}},N=(e,t,n,r,o,s,c)=>{if(n!==r){if(n!==i.kT)for(const u in n)(0,i.Gg)(u)||u in r||a(e,u,n[u],null,c,t.children,o,s,Y);for(const u in r){if((0,i.Gg)(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&a(e,u,h,l,c,t.children,o,s,Y)}"value"in r&&a(e,"value",n.value,r.value)}},D=(e,t,n,r,i,s,a,c,l)=>{const h=t.el=e?e.el:u(""),d=t.anchor=e?e.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(c=c?c.concat(m):m),null==e?(o(h,n,r),o(d,n,r),x(t.children,n,d,i,s,a,c,l)):f>0&&64&f&&p&&e.dynamicChildren?(P(e.dynamicChildren,p,n,i,s,a,c),(null!=t.key||i&&t===i.subTree)&&Ft(e,t,!0)):B(e,t,n,d,i,s,a,c,l)},L=(e,t,n,r,i,o,s,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,s,c):M(t,n,r,i,o,s,c):j(e,t,c)},M=(e,t,n,r,i,o,s)=>{const a=e.component=Cn(e,r,i);if(Ee(e)&&(a.ctx.renderer=ee),Vn(a),a.asyncDep){if(i&&i.registerDep(a,U),!e.el){const e=a.subTree=mn(Yt);w(null,e,t,n)}}else U(a,e,t,n,i,o,s)},j=(e,t,n)=>{const r=t.component=e.component;if($(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void V(r,t,n);r.next=t,_(r.update),r.update()}else t.el=e.el,r.vnode=t},U=(e,t,n,o,s,a,c)=>{const u=()=>{if(e.isMounted){let t,{next:n,bu:r,u:o,parent:u,vnode:l}=e,h=n;0,Mt(e,!1),n?(n.el=l.el,V(e,n,c)):n=l,r&&(0,i.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&In(t,u,n,l),Mt(e,!0);const d=F(e);0;const p=e.subTree;e.subTree=d,y(p,d,f(p.el),X(p),e,s,a),n.el=d.el,null===h&&q(e,d.el),o&&Nt(o,s),(t=n.props&&n.props.onVnodeUpdated)&&Nt((()=>In(t,u,n,l)),s)}else{let r;const{el:c,props:u}=t,{bm:l,m:h,parent:d}=e,f=be(t);if(Mt(e,!1),l&&(0,i.ir)(l),!f&&(r=u&&u.onVnodeBeforeMount)&&In(r,d,t),Mt(e,!0),c&&ne){const n=()=>{e.subTree=F(e),ne(c,e.subTree,e,s,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=F(e);0,y(null,r,n,o,e,s,a),t.el=r.el}if(h&&Nt(h,s),!f&&(r=u&&u.onVnodeMounted)){const e=t;Nt((()=>In(r,d,e)),s)}(256&t.shapeFlag||d&&be(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&Nt(e.a,s),e.isMounted=!0,t=n=o=null}},l=e.effect=new r.qq(u,(()=>b(h)),e.scope),h=e.update=()=>l.run();h.id=e.uid,Mt(e,!0),h()},V=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,gt(e,t.props,i,n),xt(e,t.children,n),(0,r.Jd)(),T(),(0,r.lk)()},B=(e,t,n,r,i,o,s,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void H(u,h,n,r,i,o,s,a,c);if(256&f)return void z(u,h,n,r,i,o,s,a,c)}8&p?(16&l&&Y(u,i,o),h!==u&&d(n,h)):16&l?16&p?H(u,h,n,r,i,o,s,a,c):Y(u,i,o,!0):(8&l&&d(n,""),16&p&&x(h,n,r,i,o,s,a,c))},z=(e,t,n,r,o,s,a,c,u)=>{e=e||i.Z6,t=t||i.Z6;const l=e.length,h=t.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=t[f]=u?_n(t[f]):En(t[f]);y(e[f],r,n,null,o,s,a,c,u)}l>h?Y(e,o,s,!0,!1,d):x(t,n,r,o,s,a,c,u,d)},H=(e,t,n,r,o,s,a,c,u)=>{let l=0;const h=t.length;let d=e.length-1,f=h-1;while(l<=d&&l<=f){const r=e[l],i=t[l]=u?_n(t[l]):En(t[l]);if(!ln(r,i))break;y(r,i,n,null,o,s,a,c,u),l++}while(l<=d&&l<=f){const r=e[d],i=t[f]=u?_n(t[f]):En(t[f]);if(!ln(r,i))break;y(r,i,n,null,o,s,a,c,u),d--,f--}if(l>d){if(l<=f){const e=f+1,i=e<h?t[e].el:r;while(l<=f)y(null,t[l]=u?_n(t[l]):En(t[l]),n,i,o,s,a,c,u),l++}}else if(l>f)while(l<=d)K(e[l],o,s,!0),l++;else{const p=l,m=l,g=new Map;for(l=m;l<=f;l++){const e=t[l]=u?_n(t[l]):En(t[l]);null!=e.key&&g.set(e.key,l)}let v,w=0;const b=f-m+1;let E=!1,_=0;const S=new Array(b);for(l=0;l<b;l++)S[l]=0;for(l=p;l<=d;l++){const r=e[l];if(w>=b){K(r,o,s,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(v=m;v<=f;v++)if(0===S[v-m]&&ln(r,t[v])){i=v;break}void 0===i?K(r,o,s,!0):(S[i-m]=l+1,i>=_?_=i:E=!0,y(r,t[i],n,null,o,s,a,c,u),w++)}const T=E?Ut(S):i.Z6;for(v=T.length-1,l=b-1;l>=0;l--){const e=m+l,i=t[e],d=e+1<h?t[e+1].el:r;0===S[l]?y(null,i,n,d,o,s,a,c,u):E&&(v<0||l!==T[v]?G(i,n,d,2):v--)}}},G=(e,t,n,r,i=null)=>{const{el:s,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void G(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,ee);if(a===Jt){o(s,t,n);for(let e=0;e<u.length;e++)G(u[e],t,n,r);return void o(e.anchor,t,n)}if(a===Xt)return void S(e,t,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(s),o(s,t,n),Nt((()=>c.enter(s)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>o(s,t,n),u=()=>{e(s,(()=>{a(),i&&i()}))};r?r(s,a,u):u()}else o(s,t,n)},K=(e,t,n,r=!1,i=!1)=>{const{type:o,props:s,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=e;if(null!=a&&Rt(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const f=1&l&&d,p=!be(e);let m;if(p&&(m=s&&s.onVnodeBeforeUnmount)&&In(m,t,e),6&l)Q(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);f&&oe(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,i,ee,r):u&&(o!==Jt||h>0&&64&h)?Y(u,t,n,!1,!0):(o===Jt&&384&h||!i&&16&l)&&Y(c,t,n),r&&W(e)}(p&&(m=s&&s.onVnodeUnmounted)||f)&&Nt((()=>{m&&In(m,t,e),f&&oe(e,null,t,"unmounted")}),n)},W=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Jt)return void J(n,r);if(t===Xt)return void k(e);const o=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,s=()=>t(n,o);r?r(e.el,o,s):s()}else o()},J=(e,t)=>{let n;while(e!==t)n=p(e),s(e),e=n;s(t)},Q=(e,t,n)=>{const{bum:r,scope:o,update:s,subTree:a,um:c}=e;r&&(0,i.ir)(r),o.stop(),s&&(s.active=!1,K(a,e,t,n)),c&&Nt(c,t),Nt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Y=(e,t,n,r=!1,i=!1,o=0)=>{for(let s=o;s<e.length;s++)K(e[s],t,n,r,i)},X=e=>6&e.shapeFlag?X(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),Z=(e,t,n)=>{null==e?t._vnode&&K(t._vnode,null,null,!0):y(t._vnode||null,e,t,null,null,null,n),T(),I(),t._vnode=e},ee={p:y,um:K,m:G,r:W,mt:M,mc:x,pc:B,pbc:P,n:X,o:e};let te,ne;return t&&([te,ne]=t(ee)),{render:Z,hydrate:te,createApp:lt(Z,te)}}function Mt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function jt(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ft(e,t,n=!1){const r=e.children,o=t.children;if((0,i.kJ)(r)&&(0,i.kJ)(o))for(let i=0;i<r.length;i++){const e=r[i];let t=o[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=o[i]=_n(o[i]),t.el=e.el),n||Ft(e,t)),t.type===Qt&&(t.el=e.el)}}function Ut(e){const t=e.slice(),n=[0];let r,i,o,s,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}o=0,s=n.length-1;while(o<s)a=o+s>>1,e[n[a]]<c?o=a+1:s=a;c<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}o=n.length,s=n[o-1];while(o-- >0)n[o]=s,s=t[s];return n}const Vt=e=>e.__isTeleport,$t=e=>e&&(e.disabled||""===e.disabled),Bt=e=>"undefined"!==typeof SVGElement&&e instanceof SVGElement,qt=(e,t)=>{const n=e&&e.to;if((0,i.HD)(n)){if(t){const e=t(n);return e}return null}return n},zt={__isTeleport:!0,process(e,t,n,r,i,o,s,a,c,u){const{mc:l,pc:h,pbc:d,o:{insert:f,querySelector:p,createText:m,createComment:g}}=u,y=$t(t.props);let{shapeFlag:v,children:w,dynamicChildren:b}=t;if(null==e){const e=t.el=m(""),u=t.anchor=m("");f(e,n,r),f(u,n,r);const h=t.target=qt(t.props,p),d=t.targetAnchor=m("");h&&(f(d,h),s=s||Bt(h));const g=(e,t)=>{16&v&&l(w,e,t,i,o,s,a,c)};y?g(n,u):h&&g(h,d)}else{t.el=e.el;const r=t.anchor=e.anchor,l=t.target=e.target,f=t.targetAnchor=e.targetAnchor,m=$t(e.props),g=m?n:l,v=m?r:f;if(s=s||Bt(l),b?(d(e.dynamicChildren,b,g,i,o,s,a),Ft(e,t,!0)):c||h(e,t,g,v,i,o,s,a,!1),y)m?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Ht(t,n,r,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const e=t.target=qt(t.props,p);e&&Ht(t,e,null,u,0)}else m&&Ht(t,l,f,u,1)}Wt(t)},remove(e,t,n,r,{um:i,o:{remove:o}},s){const{shapeFlag:a,children:c,anchor:u,targetAnchor:l,target:h,props:d}=e;if(h&&o(l),s&&o(u),16&a){const e=s||!$t(d);for(let r=0;r<c.length;r++){const o=c[r];i(o,t,n,e,!!o.dynamicChildren)}}},move:Ht,hydrate:Gt};function Ht(e,t,n,{o:{insert:r},m:i},o=2){0===o&&r(e.targetAnchor,t,n);const{el:s,anchor:a,shapeFlag:c,children:u,props:l}=e,h=2===o;if(h&&r(s,t,n),(!h||$t(l))&&16&c)for(let d=0;d<u.length;d++)i(u[d],t,n,2);h&&r(a,t,n)}function Gt(e,t,n,r,i,o,{o:{nextSibling:s,parentNode:a,querySelector:c}},u){const l=t.target=qt(t.props,c);if(l){const c=l._lpa||l.firstChild;if(16&t.shapeFlag)if($t(t.props))t.anchor=u(s(e),t,a(e),n,r,i,o),t.targetAnchor=c;else{t.anchor=s(e);let a=c;while(a)if(a=s(a),a&&8===a.nodeType&&"teleport anchor"===a.data){t.targetAnchor=a,l._lpa=t.targetAnchor&&s(t.targetAnchor);break}u(c,t,l,n,r,i,o)}Wt(t)}return t.anchor&&s(t.anchor)}const Kt=zt;function Wt(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;while(n&&n!==e.targetAnchor)1===n.nodeType&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const Jt=Symbol.for("v-fgt"),Qt=Symbol.for("v-txt"),Yt=Symbol.for("v-cmt"),Xt=Symbol.for("v-stc"),Zt=[];let en=null;function tn(e=!1){Zt.push(en=e?null:[])}function nn(){Zt.pop(),en=Zt[Zt.length-1]||null}let rn=1;function on(e){rn+=e}function sn(e){return e.dynamicChildren=rn>0?en||i.Z6:null,nn(),rn>0&&en&&en.push(e),e}function an(e,t,n,r,i,o){return sn(pn(e,t,n,r,i,o,!0))}function cn(e,t,n,r,i){return sn(mn(e,t,n,r,i,!0))}function un(e){return!!e&&!0===e.__v_isVNode}function ln(e,t){return e.type===t.type&&e.key===t.key}const hn="__vInternal",dn=({key:e})=>null!=e?e:null,fn=({ref:e,ref_key:t,ref_for:n})=>("number"===typeof e&&(e=""+e),null!=e?(0,i.HD)(e)||(0,r.dq)(e)||(0,i.mf)(e)?{i:P,r:e,k:t,f:!!n}:e:null);function pn(e,t=null,n=null,r=0,o=null,s=(e===Jt?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&dn(t),ref:t&&fn(t),scopeId:N,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:P};return c?(Sn(u,n),128&s&&e.normalize(u)):n&&(u.shapeFlag|=(0,i.HD)(n)?8:16),rn>0&&!a&&en&&(u.patchFlag>0||6&s)&&32!==u.patchFlag&&en.push(u),u}const mn=gn;function gn(e,t=null,n=null,o=0,s=null,a=!1){if(e&&e!==G||(e=Yt),un(e)){const r=vn(e,t,!0);return n&&Sn(r,n),rn>0&&!a&&en&&(6&r.shapeFlag?en[en.indexOf(e)]=r:en.push(r)),r.patchFlag|=-2,r}if(Wn(e)&&(e=e.__vccOpts),t){t=yn(t);let{class:e,style:n}=t;e&&!(0,i.HD)(e)&&(t.class=(0,i.C_)(e)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),t.style=(0,i.j5)(n))}const c=(0,i.HD)(e)?1:J(e)?128:Vt(e)?64:(0,i.Kn)(e)?4:(0,i.mf)(e)?2:0;return pn(e,t,n,o,s,c,a,!0)}function yn(e){return e?(0,r.X3)(e)||hn in e?(0,i.l7)({},e):e:null}function vn(e,t,n=!1){const{props:r,ref:o,patchFlag:s,children:a}=e,c=t?Tn(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&dn(c),ref:t&&t.ref?n&&o?(0,i.kJ)(o)?o.concat(fn(t)):[o,fn(t)]:fn(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Jt?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&vn(e.ssContent),ssFallback:e.ssFallback&&vn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u}function wn(e=" ",t=0){return mn(Qt,null,e,t)}function bn(e="",t=!1){return t?(tn(),cn(Yt,null,e)):mn(Yt,null,e)}function En(e){return null==e||"boolean"===typeof e?mn(Yt):(0,i.kJ)(e)?mn(Jt,null,e.slice()):"object"===typeof e?_n(e):mn(Qt,null,String(e))}function _n(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:vn(e)}function Sn(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),Sn(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||hn in t?3===r&&P&&(1===P.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=P}}else(0,i.mf)(t)?(t={default:t,_ctx:P},n=32):(t=String(t),64&r?(n=16,t=[wn(t)]):n=8);e.children=t,e.shapeFlag|=n}function Tn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C_)([t.class,r.class]));else if("style"===e)t.style=(0,i.j5)([t.style,r.style]);else if((0,i.F7)(e)){const n=t[e],o=r[e];!o||n===o||(0,i.kJ)(n)&&n.includes(o)||(t[e]=n?[].concat(n,o):o)}else""!==e&&(t[e]=r[e])}return t}function In(e,t,n,r=null){s(e,t,7,[n,r])}const kn=ct();let An=0;function Cn(e,t,n){const o=e.type,s=(t?t.appContext:e.appContext)||kn,a={uid:An++,vnode:e,type:o,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wt(o,s),emitsOptions:x(o,s),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:o.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=O.bind(null,a),e.ce&&e.ce(a),a}let On=null;const xn=()=>On||P;let Rn,Pn,Nn="__VUE_INSTANCE_SETTERS__";(Pn=(0,i.E9)()[Nn])||(Pn=(0,i.E9)()[Nn]=[]),Pn.push((e=>On=e)),Rn=e=>{Pn.length>1?Pn.forEach((t=>t(e))):Pn[0](e)};const Dn=e=>{Rn(e),e.scope.on()},Ln=()=>{On&&On.scope.off(),Rn(null)};function Mn(e){return 4&e.vnode.shapeFlag}let jn,Fn,Un=!1;function Vn(e,t=!1){Un=t;const{props:n,children:r}=e.vnode,i=Mn(e);mt(e,n,i,t),Ot(e,r);const o=i?$n(e,t):void 0;return Un=!1,o}function $n(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,He));const{setup:s}=n;if(s){const n=e.setupContext=s.length>1?Hn(e):null;Dn(e),(0,r.Jd)();const c=o(s,e,0,[e.props,n]);if((0,r.lk)(),Ln(),(0,i.tI)(c)){if(c.then(Ln,Ln),t)return c.then((n=>{Bn(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=c}else Bn(e,c,t)}else qn(e,t)}function Bn(e,t,n){(0,i.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Kn)(t)&&(e.setupState=(0,r.WL)(t)),qn(e,n)}function qn(e,t,n){const o=e.type;if(!e.render){if(!t&&jn&&!o.render){const t=o.template||Xe(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:s,compilerOptions:a}=o,c=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:s},r),a);o.render=jn(t,c)}}e.render=o.render||i.dG,Fn&&Fn(e)}Dn(e),(0,r.Jd)();try{We(e)}finally{(0,r.lk)(),Ln()}}function zn(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}}))}function Hn(e){const t=t=>{e.exposed=t||{}};return{get attrs(){return zn(e)},slots:e.slots,emit:e.emit,expose:t}}function Gn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in qe?qe[n](e):void 0},has(e,t){return t in e||t in qe}}))}function Kn(e,t=!0){return(0,i.mf)(e)?e.displayName||e.name:e.name||t&&e.__name}function Wn(e){return(0,i.mf)(e)&&"__vccOpts"in e}const Jn=(e,t)=>(0,r.Fl)(e,t,Un);function Qn(e,t,n){const r=arguments.length;return 2===r?(0,i.Kn)(t)&&!(0,i.kJ)(t)?un(t)?mn(e,null,[t]):mn(e,t):mn(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&un(n)&&(n=[n]),mn(e,t,n))}const Yn=Symbol.for("v-scx"),Xn=()=>{{const e=ft(Yn);return e}};const Zn="3.3.8"},9963:(e,t,n)=>{n.d(t,{F8:()=>P,e8:()=>ye,iM:()=>Se,nr:()=>ge,ri:()=>Ae,uT:()=>f});var r=n(6252),i=n(3577),o=n(2262);const s="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,c=a&&a.createElement("template"),u={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?a.createElementNS(s,e):a.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>a.createTextNode(e),createComment:e=>a.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>a.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,o){const s=n?n.previousSibling:t.lastChild;if(i&&(i===o||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===o||!(i=i.nextSibling))break}else{c.innerHTML=r?`<svg>${e}</svg>`:e;const i=c.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},l="transition",h="animation",d=Symbol("_vtc"),f=(e,{slots:t})=>(0,r.h)(r.P$,v(e),t);f.displayName="Transition";const p={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},m=f.props=(0,i.l7)({},r.nJ,p),g=(e,t=[])=>{(0,i.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)},y=e=>!!e&&((0,i.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function v(e){const t={};for(const i in e)i in p||(t[i]=e[i]);if(!1===e.css)return t;const{name:n="v",type:r,duration:o,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=s,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,v=w(o),b=v&&v[0],T=v&&v[1],{onBeforeEnter:k,onEnter:A,onEnterCancelled:C,onLeave:x,onLeaveCancelled:R,onBeforeAppear:P=k,onAppear:N=A,onAppearCancelled:D=C}=t,L=(e,t,n)=>{_(e,t?h:c),_(e,t?l:a),n&&n()},M=(e,t)=>{e._isLeaving=!1,_(e,d),_(e,m),_(e,f),t&&t()},j=e=>(t,n)=>{const i=e?N:A,o=()=>L(t,e,n);g(i,[t,o]),S((()=>{_(t,e?u:s),E(t,e?h:c),y(i)||I(t,r,b,o)}))};return(0,i.l7)(t,{onBeforeEnter(e){g(k,[e]),E(e,s),E(e,a)},onBeforeAppear(e){g(P,[e]),E(e,u),E(e,l)},onEnter:j(!1),onAppear:j(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>M(e,t);E(e,d),O(),E(e,f),S((()=>{e._isLeaving&&(_(e,d),E(e,m),y(x)||I(e,r,T,n))})),g(x,[e,n])},onEnterCancelled(e){L(e,!1),g(C,[e])},onAppearCancelled(e){L(e,!0),g(D,[e])},onLeaveCancelled(e){M(e),g(R,[e])}})}function w(e){if(null==e)return null;if((0,i.Kn)(e))return[b(e.enter),b(e.leave)];{const t=b(e);return[t,t]}}function b(e){const t=(0,i.He)(e);return t}function E(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e[d]||(e[d]=new Set)).add(t)}function _(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const n=e[d];n&&(n.delete(t),n.size||(e[d]=void 0))}function S(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let T=0;function I(e,t,n,r){const i=e._endId=++T,o=()=>{i===e._endId&&r()};if(n)return setTimeout(o,n);const{type:s,timeout:a,propCount:c}=k(e,t);if(!s)return r();const u=s+"end";let l=0;const h=()=>{e.removeEventListener(u,d),o()},d=t=>{t.target===e&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),e.addEventListener(u,d)}function k(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(`${l}Delay`),o=r(`${l}Duration`),s=A(i,o),a=r(`${h}Delay`),c=r(`${h}Duration`),u=A(a,c);let d=null,f=0,p=0;t===l?s>0&&(d=l,f=s,p=o.length):t===h?u>0&&(d=h,f=u,p=c.length):(f=Math.max(s,u),d=f>0?s>u?l:h:null,p=d?d===l?o.length:c.length:0);const m=d===l&&/\b(transform|all)(,|$)/.test(r(`${l}Property`).toString());return{type:d,timeout:f,propCount:p,hasTransform:m}}function A(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>C(t)+C(e[n]))))}function C(e){return"auto"===e?0:1e3*Number(e.slice(0,-1).replace(",","."))}function O(){return document.body.offsetHeight}function x(e,t,n){const r=e[d];r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const R=Symbol("_vod"),P={beforeMount(e,{value:t},{transition:n}){e[R]="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):N(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!==!n&&(r?t?(r.beforeEnter(e),N(e,!0),r.enter(e)):r.leave(e,(()=>{N(e,!1)})):N(e,t))},beforeUnmount(e,{value:t}){N(e,t)}};function N(e,t){e.style.display=t?e[R]:"none"}function D(e,t,n){const r=e.style,o=(0,i.HD)(n);if(n&&!o){if(t&&!(0,i.HD)(t))for(const e in t)null==n[e]&&M(r,e,"");for(const e in n)M(r,e,n[e])}else{const i=r.display;o?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),R in e&&(r.display=i)}}const L=/\s*!important$/;function M(e,t,n){if((0,i.kJ)(n))n.forEach((n=>M(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=U(e,t);L.test(n)?e.setProperty((0,i.rs)(r),n.replace(L,""),"important"):e[r]=n}}const j=["Webkit","Moz","ms"],F={};function U(e,t){const n=F[t];if(n)return n;let r=(0,i._A)(t);if("filter"!==r&&r in e)return F[t]=r;r=(0,i.kC)(r);for(let i=0;i<j.length;i++){const n=j[i]+r;if(n in e)return F[t]=n}return t}const V="http://www.w3.org/1999/xlink";function $(e,t,n,r,o){if(r&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(V,t.slice(6,t.length)):e.setAttributeNS(V,t,n);else{const r=(0,i.Pq)(t);null==n||r&&!(0,i.yA)(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function B(e,t,n,r,o,s,a){if("innerHTML"===t||"textContent"===t)return r&&a(r,o,s),void(e[t]=null==n?"":n);const c=e.tagName;if("value"===t&&"PROGRESS"!==c&&!c.includes("-")){e._value=n;const r="OPTION"===c?e.getAttribute("value"):e.value,i=null==n?"":n;return r!==i&&(e.value=i),void(null==n&&e.removeAttribute(t))}let u=!1;if(""===n||null==n){const r=typeof e[t];"boolean"===r?n=(0,i.yA)(n):null==n&&"string"===r?(n="",u=!0):"number"===r&&(n=0,u=!0)}try{e[t]=n}catch(l){0}u&&e.removeAttribute(t)}function q(e,t,n,r){e.addEventListener(t,n,r)}function z(e,t,n,r){e.removeEventListener(t,n,r)}const H=Symbol("_vei");function G(e,t,n,r,i=null){const o=e[H]||(e[H]={}),s=o[t];if(r&&s)s.value=r;else{const[n,a]=W(t);if(r){const s=o[t]=X(r,i);q(e,n,s,a)}else s&&(z(e,n,s,a),o[t]=void 0)}}const K=/(?:Once|Passive|Capture)$/;function W(e){let t;if(K.test(e)){let n;t={};while(n=e.match(K))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,i.rs)(e.slice(2));return[n,t]}let J=0;const Q=Promise.resolve(),Y=()=>J||(Q.then((()=>J=0)),J=Date.now());function X(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,r.$d)(Z(e,n.value),t,5,[e])};return n.value=e,n.attached=Y(),n}function Z(e,t){if((0,i.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const ee=/^on[a-z]/,te=(e,t,n,r,o=!1,s,a,c,u)=>{"class"===t?x(e,r,o):"style"===t?D(e,n,r):(0,i.F7)(t)?(0,i.tR)(t)||G(e,t,n,r,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):ne(e,t,r,o))?B(e,t,r,s,a,c,u):("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),$(e,t,r,o))};function ne(e,t,n,r){return r?"innerHTML"===t||"textContent"===t||!!(t in e&&ee.test(t)&&(0,i.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!ee.test(t)||!(0,i.HD)(n))&&t in e))))}
/*! #__NO_SIDE_EFFECTS__ */
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;const re=new WeakMap,ie=new WeakMap,oe=Symbol("_moveCb"),se=Symbol("_enterCb"),ae={name:"TransitionGroup",props:(0,i.l7)({},m,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,r.FN)(),i=(0,r.Y8)();let s,a;return(0,r.ic)((()=>{if(!s.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!he(s[0].el,n.vnode.el,t))return;s.forEach(ce),s.forEach(ue);const r=s.filter(le);O(),r.forEach((e=>{const n=e.el,r=n.style;E(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const i=n[oe]=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",i),n[oe]=null,_(n,t))};n.addEventListener("transitionend",i)}))})),()=>{const c=(0,o.IU)(e),u=v(c);let l=c.tag||r.HY;s=a,a=t.default?(0,r.Q6)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,r.nK)(t,(0,r.U2)(t,u,i,n))}if(s)for(let e=0;e<s.length;e++){const t=s[e];(0,r.nK)(t,(0,r.U2)(t,u,i,n)),re.set(t,t.el.getBoundingClientRect())}return(0,r.Wm)(l,null,a)}}};ae.props;function ce(e){const t=e.el;t[oe]&&t[oe](),t[se]&&t[se]()}function ue(e){ie.set(e,e.el.getBoundingClientRect())}function le(e){const t=re.get(e),n=ie.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${i}px)`,t.transitionDuration="0s",e}}function he(e,t,n){const r=e.cloneNode(),i=e[d];i&&i.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const o=1===t.nodeType?t:t.parentNode;o.appendChild(r);const{hasTransform:s}=k(r);return o.removeChild(r),s}const de=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,i.kJ)(t)?e=>(0,i.ir)(t,e):t};function fe(e){e.target.composing=!0}function pe(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const me=Symbol("_assign"),ge={created(e,{modifiers:{lazy:t,trim:n,number:r}},o){e[me]=de(o);const s=r||o.props&&"number"===o.props.type;q(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;n&&(r=r.trim()),s&&(r=(0,i.h5)(r)),e[me](r)})),n&&q(e,"change",(()=>{e.value=e.value.trim()})),t||(q(e,"compositionstart",fe),q(e,"compositionend",pe),q(e,"change",pe))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:o}},s){if(e[me]=de(s),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(n)return;if(r&&e.value.trim()===t)return;if((o||"number"===e.type)&&(0,i.h5)(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}},ye={deep:!0,created(e,t,n){e[me]=de(n),q(e,"change",(()=>{const t=e._modelValue,n=we(e),r=e.checked,o=e[me];if((0,i.kJ)(t)){const e=(0,i.hq)(t,n),s=-1!==e;if(r&&!s)o(t.concat(n));else if(!r&&s){const n=[...t];n.splice(e,1),o(n)}}else if((0,i.DM)(t)){const e=new Set(t);r?e.add(n):e.delete(n),o(e)}else o(be(e,r))}))},mounted:ve,beforeUpdate(e,t,n){e[me]=de(n),ve(e,t,n)}};function ve(e,{value:t,oldValue:n},r){e._modelValue=t,(0,i.kJ)(t)?e.checked=(0,i.hq)(t,r.props.value)>-1:(0,i.DM)(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=(0,i.WV)(t,be(e,!0)))}function we(e){return"_value"in e?e._value:e.value}function be(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Ee=["ctrl","shift","alt","meta"],_e={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>Ee.some((n=>e[`${n}Key`]&&!t.includes(n)))},Se=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=_e[t[e]];if(r&&r(n,t))return}return e(n,...r)},Te=(0,i.l7)({patchProp:te},u);let Ie;function ke(){return Ie||(Ie=(0,r.Us)(Te))}const Ae=(...e)=>{const t=ke().createApp(...e);const{mount:n}=t;return t.mount=e=>{const r=Ce(e);if(!r)return;const o=t._component;(0,i.mf)(o)||o.render||o.template||(o.template=r.innerHTML),r.innerHTML="";const s=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},t};function Ce(e){if((0,i.HD)(e)){const t=document.querySelector(e);return t}return e}},3577:(e,t,n)=>{function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,{C_:()=>X,DM:()=>y,E9:()=>z,F7:()=>u,Gg:()=>x,HD:()=>E,He:()=>B,Kj:()=>w,Kn:()=>S,NO:()=>a,Nj:()=>V,Od:()=>d,PO:()=>C,Pq:()=>ee,RI:()=>p,S0:()=>O,W7:()=>A,WV:()=>re,Z6:()=>o,_A:()=>N,_N:()=>g,aU:()=>F,dG:()=>s,fY:()=>r,h5:()=>$,hR:()=>j,hq:()=>ie,ir:()=>U,j5:()=>K,kC:()=>M,kJ:()=>m,kT:()=>i,l7:()=>h,mf:()=>b,rs:()=>L,tI:()=>T,tR:()=>l,yA:()=>te,yk:()=>_,yl:()=>G,zw:()=>oe});const i={},o=[],s=()=>{},a=()=>!1,c=/^on[^a-z]/,u=e=>c.test(e),l=e=>e.startsWith("onUpdate:"),h=Object.assign,d=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},f=Object.prototype.hasOwnProperty,p=(e,t)=>f.call(e,t),m=Array.isArray,g=e=>"[object Map]"===k(e),y=e=>"[object Set]"===k(e),v=e=>"[object Date]"===k(e),w=e=>"[object RegExp]"===k(e),b=e=>"function"===typeof e,E=e=>"string"===typeof e,_=e=>"symbol"===typeof e,S=e=>null!==e&&"object"===typeof e,T=e=>(S(e)||b(e))&&b(e.then)&&b(e.catch),I=Object.prototype.toString,k=e=>I.call(e),A=e=>k(e).slice(8,-1),C=e=>"[object Object]"===k(e),O=e=>E(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,x=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),R=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},P=/-(\w)/g,N=R((e=>e.replace(P,((e,t)=>t?t.toUpperCase():"")))),D=/\B([A-Z])/g,L=R((e=>e.replace(D,"-$1").toLowerCase())),M=R((e=>e.charAt(0).toUpperCase()+e.slice(1))),j=R((e=>{const t=e?`on${M(e)}`:"";return t})),F=(e,t)=>!Object.is(e,t),U=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},V=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},$=e=>{const t=parseFloat(e);return isNaN(t)?e:t},B=e=>{const t=E(e)?Number(e):NaN;return isNaN(t)?e:t};let q;const z=()=>q||(q="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const H="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console",G=r(H);function K(e){if(m(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=E(r)?Y(r):K(r);if(i)for(const e in i)t[e]=i[e]}return t}if(E(e)||S(e))return e}const W=/;(?![^(]*\))/g,J=/:([^]+)/,Q=/\/\*[^]*?\*\//g;function Y(e){const t={};return e.replace(Q,"").split(W).forEach((e=>{if(e){const n=e.split(J);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function X(e){let t="";if(E(e))t=e;else if(m(e))for(let n=0;n<e.length;n++){const r=X(e[n]);r&&(t+=r+" ")}else if(S(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Z="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ee=r(Z);function te(e){return!!e||""===e}function ne(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=re(e[r],t[r]);return n}function re(e,t){if(e===t)return!0;let n=v(e),r=v(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=_(e),r=_(t),n||r)return e===t;if(n=m(e),r=m(t),n||r)return!(!n||!r)&&ne(e,t);if(n=S(e),r=S(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!re(e[n],t[n]))return!1}}return String(e)===String(t)}function ie(e,t){return e.findIndex((e=>re(e,t)))}const oe=e=>E(e)?e:null==e?"":m(e)||S(e)&&(e.toString===I||!b(e.toString))?JSON.stringify(e,se,2):String(e),se=(e,t)=>t&&t.__v_isRef?se(e,t.value):g(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:y(t)?{[`Set(${t.size})`]:[...t.values()]}:!S(t)||m(t)||C(t)?t:String(t)},3744:(e,t)=>{t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},7793:(e,t,n)=>{n.d(t,{P:()=>de});var r=n(2262),i=n(6252);
/*! @vimeo/player v2.20.1 | (c) 2023 Vimeo | MIT License | https://github.com/vimeo/player.js */
function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(){a=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(O){u=function(e,t,n){return e[t]=n}}function l(e,t,n,i){var o=t&&t.prototype instanceof f?t:f,s=Object.create(o.prototype),a=new k(i||[]);return r(s,"_invoke",{value:_(e,n,a)}),s}function h(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(O){return{type:"throw",arg:O}}}e.wrap=l;var d={};function f(){}function p(){}function m(){}var g={};u(g,o,(function(){return this}));var y=Object.getPrototypeOf,v=y&&y(y(A([])));v&&v!==t&&n.call(v,o)&&(g=v);var w=m.prototype=f.prototype=Object.create(g);function b(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function i(r,o,s,a){var c=h(e[r],e,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then((function(e){i("next",e,s,a)}),(function(e){i("throw",e,s,a)})):t.resolve(l).then((function(e){u.value=e,s(u)}),(function(e){return i("throw",e,s,a)}))}a(c.arg)}var o;r(this,"_invoke",{value:function(e,n){function r(){return new t((function(t,r){i(e,n,t,r)}))}return o=o?o.then(r,r):r()}})}function _(e,t,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return C()}for(n.method=i,n.arg=o;;){var s=n.delegate;if(s){var a=S(s,n);if(a){if(a===d)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=h(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function S(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,S(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var i=h(r,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,d;var o=i.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function I(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function A(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:C}}function C(){return{value:void 0,done:!0}}return p.prototype=m,r(w,"constructor",{value:m,configurable:!0}),r(m,"constructor",{value:p,configurable:!0}),p.displayName=u(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,c,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},b(E.prototype),u(E.prototype,s,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var s=new E(l(t,n,r,i),o);return e.isGeneratorFunction(n)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},b(w),u(w,c,"Generator"),u(w,o,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=A,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(I),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return s.type="throw",s.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],s=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var a=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=e,s.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),I(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;I(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:A(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}function c(e,t,n,r,i,o,s){try{var a=e[o](s),c=a.value}catch(u){return void n(u)}a.done?t(c):Promise.resolve(c).then(r,i)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function s(e){c(o,r,i,s,a,"next",e)}function a(e){c(o,r,i,s,a,"throw",e)}s(void 0)}))}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,I(r.key),r)}}function d(e,t,n){return t&&h(e.prototype,t),n&&h(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function f(e,t,n){return t=I(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function y(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function v(e,t,n){return v=y()?Reflect.construct.bind():function(e,t,n){var r=[null];r.push.apply(r,t);var i=Function.bind.apply(e,r),o=new i;return n&&g(o,n.prototype),o},v.apply(null,arguments)}function w(e){return-1!==Function.toString.call(e).indexOf("[native code]")}function b(e){var t="function"===typeof Map?new Map:void 0;return b=function(e){if(null===e||!w(e))return e;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return v(e,arguments,m(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),g(n,e)},b(e)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e,t){if(t&&("object"===typeof t||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return E(e)}function S(e){var t=y();return function(){var n,r=m(e);if(t){var i=m(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return _(this,n)}}function T(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function I(e){var t=T(e,"string");return"symbol"===typeof t?t:String(t)}var k="undefined"!==typeof n.g&&"[object global]"==={}.toString.call(n.g);function A(e,t){return 0===e.indexOf(t.toLowerCase())?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}function C(e){return Boolean(e&&1===e.nodeType&&"nodeName"in e&&e.ownerDocument&&e.ownerDocument.defaultView)}function O(e){return!isNaN(parseFloat(e))&&isFinite(e)&&Math.floor(e)==e}function x(e){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)}function R(e){var t=/^https:\/\/player\.vimeo\.com\/video\/\d+/;return t.test(e)}function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=e.url,r=t||n;if(!r)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(O(r))return"https://vimeo.com/".concat(r);if(x(r))return r.replace("http:","https:");if(t)throw new TypeError("“".concat(t,"” is not a valid video id."));throw new TypeError("“".concat(r,"” is not a vimeo.com url."))}var N=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"addEventListener",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"removeEventListener",o="string"===typeof t?[t]:t;return o.forEach((function(t){e[r](t,n)})),{cancel:function(){return o.forEach((function(t){return e[i](t,n)}))}}},D="undefined"!==typeof Array.prototype.indexOf,L="undefined"!==typeof window&&"undefined"!==typeof window.postMessage;if(!k&&(!D||!L))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var M="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{};function j(e,t){return t={exports:{}},e(t,t.exports),t.exports
/*!
 * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */}(function(e){if(!e.WeakMap){var t=Object.prototype.hasOwnProperty,n=Object.defineProperty&&function(){try{return 1===Object.defineProperty({},"x",{value:1}).x}catch(e){}}(),r=function(e,t,r){n?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:r}):e[t]=r};e.WeakMap=function(){function e(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(r(this,"_id",o("_WeakMap")),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function n(e,n){if(!i(e)||!t.call(e,"_id"))throw new TypeError(n+" method called on incompatible receiver "+typeof e)}function o(e){return e+"_"+s()+"."+s()}function s(){return Math.random().toString().substring(2)}return r(e.prototype,"delete",(function(e){if(n(this,"delete"),!i(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)&&(delete e[this._id],!0)})),r(e.prototype,"get",(function(e){if(n(this,"get"),i(e)){var t=e[this._id];return t&&t[0]===e?t[1]:void 0}})),r(e.prototype,"has",(function(e){if(n(this,"has"),!i(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)})),r(e.prototype,"set",(function(e,t){if(n(this,"set"),!i(e))throw new TypeError("Invalid value used as weak map key");var o=e[this._id];return o&&o[0]===e?(o[1]=t,this):(r(e,this._id,[e,t]),this)})),r(e,"_polyfill",!0),e}()}function i(e){return Object(e)===e}})("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:M);var F=j((function(e){
/*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/
(function(t,n,r){n[t]=n[t]||r(),e.exports&&(e.exports=n[t])})("Promise",M,(function(){var e,t,n,r=Object.prototype.toString,i="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),e=function(e,t,n,r){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:!1!==r})}}catch(g){e=function(e,t,n){return e[t]=n,e}}function o(e,r){n.add(e,r),t||(t=i(n.drain))}function s(e){var t,n=typeof e;return null==e||"object"!=n&&"function"!=n||(t=e.then),"function"==typeof t&&t}function a(){for(var e=0;e<this.chain.length;e++)c(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function c(e,t,n){var r,i;try{!1===t?n.reject(e.msg):(r=!0===t?e.msg:t.call(void 0,e.msg),r===n.promise?n.reject(TypeError("Promise-chain cycle")):(i=s(r))?i.call(r,n.resolve,n.reject):n.resolve(r))}catch(g){n.reject(g)}}function u(e){var t,n=this;if(!n.triggered){n.triggered=!0,n.def&&(n=n.def);try{(t=s(e))?o((function(){var r=new d(n);try{t.call(e,(function(){u.apply(r,arguments)}),(function(){l.apply(r,arguments)}))}catch(g){l.call(r,g)}})):(n.msg=e,n.state=1,n.chain.length>0&&o(a,n))}catch(g){l.call(new d(n),g)}}}function l(e){var t=this;t.triggered||(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,t.chain.length>0&&o(a,t))}function h(e,t,n,r){for(var i=0;i<t.length;i++)(function(i){e.resolve(t[i]).then((function(e){n(i,e)}),r)})(i)}function d(e){this.def=e,this.triggered=!1}function f(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function p(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var t=new f(this);this["then"]=function(e,n){var r={success:"function"!=typeof e||e,failure:"function"==typeof n&&n};return r.promise=new this.constructor((function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");r.resolve=e,r.reject=t})),t.chain.push(r),0!==t.state&&o(a,t),r.promise},this["catch"]=function(e){return this.then(void 0,e)};try{e.call(void 0,(function(e){u.call(t,e)}),(function(e){l.call(t,e)}))}catch(g){l.call(t,g)}}n=function(){var e,n,r;function i(e,t){this.fn=e,this.self=t,this.next=void 0}return{add:function(t,o){r=new i(t,o),n?n.next=r:e=r,n=r,r=void 0},drain:function(){var r=e;e=n=t=void 0;while(r)r.fn.call(r.self),r=r.next}}}();var m=e({},"constructor",p,!1);return p.prototype=m,e(m,"__NPO__",0,!1),e(p,"resolve",(function(e){var t=this;return e&&"object"==typeof e&&1===e.__NPO__?e:new t((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");t(e)}))})),e(p,"reject",(function(e){return new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");n(e)}))})),e(p,"all",(function(e){var t=this;return"[object Array]"!=r.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t((function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");var i=e.length,o=Array(i),s=0;h(t,e,(function(e,t){o[e]=t,++s===i&&n(o)}),r)}))})),e(p,"race",(function(e){var t=this;return"[object Array]"!=r.call(e)?t.reject(TypeError("Not an array")):new t((function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");h(t,e,(function(e,t){n(t)}),r)}))})),p}))})),U=new WeakMap;function V(e,t,n){var r=U.get(e.element)||{};t in r||(r[t]=[]),r[t].push(n),U.set(e.element,r)}function $(e,t){var n=U.get(e.element)||{};return n[t]||[]}function B(e,t,n){var r=U.get(e.element)||{};if(!r[t])return!0;if(!n)return r[t]=[],U.set(e.element,r),!0;var i=r[t].indexOf(n);return-1!==i&&r[t].splice(i,1),U.set(e.element,r),r[t]&&0===r[t].length}function q(e,t){var n=$(e,t);if(n.length<1)return!1;var r=n.shift();return B(e,t,r),r}function z(e,t){var n=U.get(e);U.set(t,n),U.delete(e)}function H(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){return console.warn(t),{}}return e}function G(e,t,n){if(e.element.contentWindow&&e.element.contentWindow.postMessage){var r={method:t};void 0!==n&&(r.value=n);var i=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));i>=8&&i<10&&(r=JSON.stringify(r)),e.element.contentWindow.postMessage(r,e.origin)}}function K(e,t){t=H(t);var n,r=[];if(t.event){if("error"===t.event){var i=$(e,t.data.method);i.forEach((function(n){var r=new Error(t.data.message);r.name=t.data.name,n.reject(r),B(e,t.data.method,n)}))}r=$(e,"event:".concat(t.event)),n=t.data}else if(t.method){var o=q(e,t.method);o&&(r.push(o),n=t.value)}r.forEach((function(t){try{if("function"===typeof t)return void t.call(e,n);t.resolve(n)}catch(r){}}))}var W=["autopause","autoplay","background","byline","color","colors","controls","dnt","height","id","interactive_params","keyboard","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];function J(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return W.reduce((function(t,n){var r=e.getAttribute("data-vimeo-".concat(n));return(r||""===r)&&(t[n]=""===r?1:r),t}),t)}function Q(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var r=document.createElement("div");return r.innerHTML=n,t.appendChild(r.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function Y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return new Promise((function(r,i){if(!x(e))throw new TypeError("“".concat(e,"” is not a vimeo.com url."));var o="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e));for(var s in t)t.hasOwnProperty(s)&&(o+="&".concat(s,"=").concat(encodeURIComponent(t[s])));var a="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;a.open("GET",o,!0),a.onload=function(){if(404!==a.status)if(403!==a.status)try{var t=JSON.parse(a.responseText);if(403===t.domain_status_code)return Q(t,n),void i(new Error("“".concat(e,"” is not embeddable.")));r(t)}catch(o){i(o)}else i(new Error("“".concat(e,"” is not embeddable.")));else i(new Error("“".concat(e,"” was not found.")))},a.onerror=function(){var e=a.status?" (".concat(a.status,")"):"";i(new Error("There was an error fetching the embed code from Vimeo".concat(e,".")))},a.send()}))}function X(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),n=function(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))};t.forEach((function(e){try{if(null!==e.getAttribute("data-vimeo-defer"))return;var t=J(e),r=P(t);Y(r,t,e).then((function(t){return Q(t,e)})).catch(n)}catch(i){n(i)}}))}function Z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoPlayerResizeEmbeds_){window.VimeoPlayerResizeEmbeds_=!0;var t=function(t){if(x(t.origin)&&t.data&&"spacechange"===t.data.event)for(var n=e.querySelectorAll("iframe"),r=0;r<n.length;r++)if(n[r].contentWindow===t.source){var i=n[r].parentElement;i.style.paddingBottom="".concat(t.data.data[0].bottom,"px");break}};window.addEventListener("message",t)}}function ee(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoSeoMetadataAppended){window.VimeoSeoMetadataAppended=!0;var t=function(t){if(x(t.origin)){var n=H(t.data);if(n&&"ready"===n.event)for(var r=e.querySelectorAll("iframe"),i=0;i<r.length;i++){var o=r[i],s=o.contentWindow===t.source;if(R(o.src)&&s){var a=new ce(o);a.callMethod("appendVideoMetadata",window.location.href)}}}};window.addEventListener("message",t)}}function te(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoCheckedUrlTimeParam){window.VimeoCheckedUrlTimeParam=!0;var t=function(e){"console"in window&&console.error&&console.error("There was an error getting video Id: ".concat(e))},n=function(n){if(x(n.origin)){var r=H(n.data);if(r&&"ready"===r.event)for(var i=e.querySelectorAll("iframe"),o=function(){var e=i[s],r=e.contentWindow===n.source;if(R(e.src)&&r){var o=new ce(e);o.getVideoId().then((function(e){var t=new RegExp("[?&]vimeo_t_".concat(e,"=([^&#]*)")).exec(window.location.href);if(t&&t[1]){var n=decodeURI(t[1]);o.setCurrentTime(n)}})).catch(t)}},s=0;s<i.length;s++)o()}};window.addEventListener("message",n)}}function ne(){var e=function(){for(var e,t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=0,r=t.length,i={};n<r;n++)if(e=t[n],e&&e[1]in document){for(n=0;n<e.length;n++)i[t[0][n]]=e[n];return i}return!1}(),t={fullscreenchange:e.fullscreenchange,fullscreenerror:e.fullscreenerror},n={request:function(t){return new Promise((function(r,i){var o=function e(){n.off("fullscreenchange",e),r()};n.on("fullscreenchange",o),t=t||document.documentElement;var s=t[e.requestFullscreen]();s instanceof Promise&&s.then(o).catch(i)}))},exit:function(){return new Promise((function(t,r){if(n.isFullscreen){var i=function e(){n.off("fullscreenchange",e),t()};n.on("fullscreenchange",i);var o=document[e.exitFullscreen]();o instanceof Promise&&o.then(i).catch(r)}else t()}))},on:function(e,n){var r=t[e];r&&document.addEventListener(r,n)},off:function(e,n){var r=t[e];r&&document.removeEventListener(r,n)}};return Object.defineProperties(n,{isFullscreen:{get:function(){return Boolean(document[e.fullscreenElement])}},element:{enumerable:!0,get:function(){return document[e.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(document[e.fullscreenEnabled])}}}),n}var re={role:"viewer",autoPlayMuted:!0,allowedDrift:.3,maxAllowedDrift:1,minCheckInterval:.1,maxRateAdjustment:.2,maxTimeToCatchUp:1},ie=function(e){p(n,e);var t=S(n);function n(e,r){var i,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},c=arguments.length>3?arguments[3]:void 0;return l(this,n),i=t.call(this),f(E(i),"logger",void 0),f(E(i),"speedAdjustment",0),f(E(i),"adjustSpeed",function(){var e=u(a().mark((function e(t,n){var r;return a().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i.speedAdjustment!==n){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.getPlaybackRate();case 4:return e.t0=e.sent,e.t1=i.speedAdjustment,e.t2=e.t0-e.t1,e.t3=n,r=e.t2+e.t3,i.log("New playbackRate:  ".concat(r)),e.next=12,t.setPlaybackRate(r);case 12:i.speedAdjustment=n;case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),i.logger=c,i.init(r,e,s(s({},re),o)),i}return d(n,[{key:"disconnect",value:function(){this.dispatchEvent(new Event("disconnect"))}},{key:"init",value:function(){var e=u(a().mark((function e(t,n,r){var i,o,s,c=this;return a().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.waitForTOReadyState(t,"open");case 2:if("viewer"!==r.role){e.next=10;break}return e.next=5,this.updatePlayer(t,n,r);case 5:i=N(t,"change",(function(){return c.updatePlayer(t,n,r)})),o=this.maintainPlaybackPosition(t,n,r),this.addEventListener("disconnect",(function(){o.cancel(),i.cancel()})),e.next=14;break;case 10:return e.next=12,this.updateTimingObject(t,n);case 12:s=N(n,["seeked","play","pause","ratechange"],(function(){return c.updateTimingObject(t,n)}),"on","off"),this.addEventListener("disconnect",(function(){return s.cancel()}));case 14:case"end":return e.stop()}}),e,this)})));function t(t,n,r){return e.apply(this,arguments)}return t}()},{key:"updateTimingObject",value:function(){var e=u(a().mark((function e(t,n){return a().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,n.getCurrentTime();case 3:return e.t1=e.sent,e.next=6,n.getPaused();case 6:if(!e.sent){e.next=10;break}e.t2=0,e.next=13;break;case 10:return e.next=12,n.getPlaybackRate();case 12:e.t2=e.sent;case 13:e.t3=e.t2,e.t4={position:e.t1,velocity:e.t3},e.t0.update.call(e.t0,e.t4);case 16:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"updatePlayer",value:function(){var e=u(a().mark((function e(t,n,r){var i,o,s;return a().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=t.query(),o=i.position,s=i.velocity,"number"===typeof o&&n.setCurrentTime(o),"number"!==typeof s){e.next=25;break}if(0!==s){e.next=11;break}return e.next=6,n.getPaused();case 6:if(e.t0=e.sent,!1!==e.t0){e.next=9;break}n.pause();case 9:e.next=25;break;case 11:if(!(s>0)){e.next=25;break}return e.next=14,n.getPaused();case 14:if(e.t1=e.sent,!0!==e.t1){e.next=19;break}return e.next=18,n.play().catch(function(){var e=u(a().mark((function e(t){return a().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("NotAllowedError"!==t.name||!r.autoPlayMuted){e.next=5;break}return e.next=3,n.setMuted(!0);case 3:return e.next=5,n.play().catch((function(e){return console.error("Couldn't play the video from TimingSrcConnector. Error:",e)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 18:this.updatePlayer(t,n,r);case 19:return e.next=21,n.getPlaybackRate();case 21:if(e.t2=e.sent,e.t3=s,e.t2===e.t3){e.next=25;break}n.setPlaybackRate(s);case 25:case"end":return e.stop()}}),e,this)})));function t(t,n,r){return e.apply(this,arguments)}return t}()},{key:"maintainPlaybackPosition",value:function(e,t,n){var r=this,i=n.allowedDrift,o=n.maxAllowedDrift,s=n.minCheckInterval,c=n.maxRateAdjustment,l=n.maxTimeToCatchUp,h=1e3*Math.min(l,Math.max(s,o)),d=function(){var n=u(a().mark((function n(){var s,u,h,d,f;return a().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(n.t0=0===e.query().velocity,n.t0){n.next=6;break}return n.next=4,t.getPaused();case 4:n.t1=n.sent,n.t0=!0===n.t1;case 6:if(!n.t0){n.next=8;break}return n.abrupt("return");case 8:return n.t2=e.query().position,n.next=11,t.getCurrentTime();case 11:if(n.t3=n.sent,s=n.t2-n.t3,u=Math.abs(s),r.log("Drift: ".concat(s)),!(u>o)){n.next=22;break}return n.next=18,r.adjustSpeed(t,0);case 18:t.setCurrentTime(e.query().position),r.log("Resync by currentTime"),n.next=29;break;case 22:if(!(u>i)){n.next=29;break}return h=u/l,d=c,f=h<d?(d-h)/2:d,n.next=28,r.adjustSpeed(t,f*Math.sign(s));case 28:r.log("Resync by playbackRate");case 29:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=setInterval((function(){return d()}),h);return{cancel:function(){return clearInterval(f)}}}},{key:"log",value:function(e){var t;null===(t=this.logger)||void 0===t||t.call(this,"TimingSrcConnector: ".concat(e))}},{key:"waitForTOReadyState",value:function(e,t){return new Promise((function(n){var r=function r(){e.readyState===t?n():e.addEventListener("readystatechange",r,{once:!0})};r()}))}}]),n}(b(EventTarget)),oe=new WeakMap,se=new WeakMap,ae={},ce=function(){function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(l(this,e),window.jQuery&&t instanceof jQuery&&(t.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),t=t[0]),"undefined"!==typeof document&&"string"===typeof t&&(t=document.getElementById(t)),!C(t))throw new TypeError("You must pass either a valid element or a valid id.");if("IFRAME"!==t.nodeName){var i=t.querySelector("iframe");i&&(t=i)}if("IFRAME"===t.nodeName&&!x(t.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(oe.has(t))return oe.get(t);this._window=t.ownerDocument.defaultView,this.element=t,this.origin="*";var o=new F((function(e,i){if(n._onMessage=function(t){if(x(t.origin)&&n.element.contentWindow===t.source){"*"===n.origin&&(n.origin=t.origin);var r=H(t.data),o=r&&"error"===r.event,s=o&&r.data&&"ready"===r.data.method;if(s){var a=new Error(r.data.message);return a.name=r.data.name,void i(a)}var c=r&&"ready"===r.event,u=r&&"ping"===r.method;if(c||u)return n.element.setAttribute("data-ready","true"),void e();K(n,r)}},n._window.addEventListener("message",n._onMessage),"IFRAME"!==n.element.nodeName){var o=J(t,r),s=P(o);Y(s,o,t).then((function(e){var r=Q(e,t);return n.element=r,n._originalElement=t,z(t,r),oe.set(n.element,n),e})).catch(i)}}));if(se.set(this,o),oe.set(this.element,this),"IFRAME"===this.element.nodeName&&G(this,"ping"),ae.isEnabled){var s=function(){return ae.exit()};this.fullscreenchangeHandler=function(){ae.isFullscreen?V(n,"event:exitFullscreen",s):B(n,"event:exitFullscreen",s),n.ready().then((function(){G(n,"fullscreenchange",ae.isFullscreen)}))},ae.on("fullscreenchange",this.fullscreenchangeHandler)}return this}return d(e,[{key:"callMethod",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new F((function(r,i){return t.ready().then((function(){V(t,e,{resolve:r,reject:i}),G(t,e,n)})).catch(i)}))}},{key:"get",value:function(e){var t=this;return new F((function(n,r){return e=A(e,"get"),t.ready().then((function(){V(t,e,{resolve:n,reject:r}),G(t,e)})).catch(r)}))}},{key:"set",value:function(e,t){var n=this;return new F((function(r,i){if(e=A(e,"set"),void 0===t||null===t)throw new TypeError("There must be a value to set.");return n.ready().then((function(){V(n,e,{resolve:r,reject:i}),G(n,e,t)})).catch(i)}))}},{key:"on",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(!t)throw new TypeError("You must pass a callback function.");if("function"!==typeof t)throw new TypeError("The callback must be a function.");var n=$(this,"event:".concat(e));0===n.length&&this.callMethod("addEventListener",e).catch((function(){})),V(this,"event:".concat(e),t)}},{key:"off",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!==typeof t)throw new TypeError("The callback must be a function.");var n=B(this,"event:".concat(e),t);n&&this.callMethod("removeEventListener",e).catch((function(e){}))}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var e=se.get(this)||new F((function(e,t){t(new Error("Unknown player. Probably unloaded."))}));return F.resolve(e)}},{key:"addCuePoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.callMethod("addCuePoint",{time:e,data:t})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"requestFullscreen",value:function(){return ae.isEnabled?ae.request(this.element):this.callMethod("requestFullscreen")}},{key:"exitFullscreen",value:function(){return ae.isEnabled?ae.exit():this.callMethod("exitFullscreen")}},{key:"getFullscreen",value:function(){return ae.isEnabled?F.resolve(ae.isFullscreen):this.get("fullscreen")}},{key:"requestPictureInPicture",value:function(){return this.callMethod("requestPictureInPicture")}},{key:"exitPictureInPicture",value:function(){return this.callMethod("exitPictureInPicture")}},{key:"getPictureInPicture",value:function(){return this.get("pictureInPicture")}},{key:"remotePlaybackPrompt",value:function(){return this.callMethod("remotePlaybackPrompt")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var e=this;return new F((function(t){if(se.delete(e),oe.delete(e.element),e._originalElement&&(oe.delete(e._originalElement),e._originalElement.removeAttribute("data-vimeo-initialized")),e.element&&"IFRAME"===e.element.nodeName&&e.element.parentNode&&(e.element.parentNode.parentNode&&e._originalElement&&e._originalElement!==e.element.parentNode?e.element.parentNode.parentNode.removeChild(e.element.parentNode):e.element.parentNode.removeChild(e.element)),e.element&&"DIV"===e.element.nodeName&&e.element.parentNode){e.element.removeAttribute("data-vimeo-initialized");var n=e.element.querySelector("iframe");n&&n.parentNode&&(n.parentNode.parentNode&&e._originalElement&&e._originalElement!==n.parentNode?n.parentNode.parentNode.removeChild(n.parentNode):n.parentNode.removeChild(n))}e._window.removeEventListener("message",e._onMessage),ae.isEnabled&&ae.off("fullscreenchange",e.fullscreenchangeHandler),t()}))}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getBuffered",value:function(){return this.get("buffered")}},{key:"getCameraProps",value:function(){return this.get("cameraProps")}},{key:"setCameraProps",value:function(e){return this.set("cameraProps",e)}},{key:"getChapters",value:function(){return this.get("chapters")}},{key:"getCurrentChapter",value:function(){return this.get("currentChapter")}},{key:"getColor",value:function(){return this.get("color")}},{key:"getColors",value:function(){return F.all([this.get("colorOne"),this.get("colorTwo"),this.get("colorThree"),this.get("colorFour")])}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"setColors",value:function(e){if(!Array.isArray(e))return new F((function(e,t){return t(new TypeError("Argument must be an array."))}));var t=new F((function(e){return e(null)})),n=[e[0]?this.set("colorOne",e[0]):t,e[1]?this.set("colorTwo",e[1]):t,e[2]?this.set("colorThree",e[2]):t,e[3]?this.set("colorFour",e[3]):t];return F.all(n)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"setMuted",value:function(e){return this.set("muted",e)}},{key:"getMuted",value:function(){return this.get("muted")}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(e){return this.set("playbackRate",e)}},{key:"getPlayed",value:function(){return this.get("played")}},{key:"getQualities",value:function(){return this.get("qualities")}},{key:"getQuality",value:function(){return this.get("quality")}},{key:"setQuality",value:function(e){return this.set("quality",e)}},{key:"getRemotePlaybackAvailability",value:function(){return this.get("remotePlaybackAvailability")}},{key:"getRemotePlaybackState",value:function(){return this.get("remotePlaybackState")}},{key:"getSeekable",value:function(){return this.get("seekable")}},{key:"getSeeking",value:function(){return this.get("seeking")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}},{key:"setTimingSrc",value:function(){var e=u(a().mark((function e(t,n){var r,i=this;return a().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw new TypeError("A Timing Object must be provided.");case 2:return e.next=4,this.ready();case 4:return r=new ie(this,t,n),G(this,"notifyTimingObjectConnect"),r.addEventListener("disconnect",(function(){return G(i,"notifyTimingObjectDisconnect")})),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()}]),e}();k||(ae=ne(),X(),Z(),ee(),te());const ue=ce;function le(e){var t=e.player,n=e.event,r=e.emit;t.on(n,(function(e){return r(n,e,t)}))}var he=["play","playing","pause","ended","timeupdate","progress","seeking","seeked","texttrackchange","chapterchange","cuechange","cuepoint","volumechange","playbackratechange","bufferstart","bufferend","error","loaded","durationchange","fullscreenchange","qualitychange","camerachange","resize"],de={name:"VimeoPlayer",props:{playerHeight:{type:Number,default:320},playerWidth:{type:Number,default:640},options:{type:Object,default:function(){return{}}},videoId:{type:String,default:""},videoUrl:{type:String,default:""},loop:{type:Boolean,default:!1},autoplay:{type:Boolean,default:!1},controls:{type:Boolean,default:!0},eventsToEmit:{type:Array,default:function(){return he}}},setup:function(e,t){var n,o=t.emit,s=(0,r.iH)(null),a=(0,r.BK)(e),c=a.videoId,u=a.videoUrl;e.videoId||e.videoUrl||console.warn("[VueVimeoPlayer: You mist provide at least a videoId or a videoUrl prop]");var l=function(t){var n=t.id,i=t.url,o={width:e.playerWidth,height:e.playerHeight,loop:e.loop,autoplay:e.autoplay,controls:e.controls};return(0,r.SU)(i)&&(o.url=(0,r.SU)(i)),(0,r.SU)(n)&&(o.id=(0,r.SU)(n)),Object.assign(o,e.options)},h=function(){return n.play()},d=function(){return n.pause()},f=function(){return n.setVolume(0)},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.5;return n.setVolume(e)},m=function(){n.ready().then((function(){o("ready",n)}))["catch"]((function(e){o("error",e,n)})),e.eventsToEmit.forEach((function(e){return le({player:n,event:e,emit:o})}))};(0,i.bv)((function(){n=new ue(s.value,l({id:e.videoId,url:e.videoUrl})),m()})),(0,i.Jd)((function(){return n.unload()})),(0,i.YP)(c,(function(e){return n.loadVideo(l({id:e}))})),(0,i.YP)(u,(function(e){return n.loadVideo(l({url:e}))})),(0,i.YP)((0,r.Vh)(e,"controls"),(function(){return n.loadVideo(l({url:u,id:c}))}));var g=function(e){return n.loadVideo(l({id:e}))};return{update:g,play:h,pause:d,mute:f,unmute:p,elementRef:s,player:n}}},fe={ref:"elementRef"};function pe(e,t,n,r,o,s){return(0,i.wg)(),(0,i.iD)("div",fe,null,512)}function me(e){e.component(de.name,de)}de.render=pe,me.version="1.1.2"},509:(e,t,n)=>{var r=n(9985),i=n(3691),o=TypeError;e.exports=function(e){if(r(e))return e;throw new o(i(e)+" is not a function")}},2655:(e,t,n)=>{var r=n(9429),i=n(3691),o=TypeError;e.exports=function(e){if(r(e))return e;throw new o(i(e)+" is not a constructor")}},3550:(e,t,n)=>{var r=n(9985),i=String,o=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw new o("Can't set "+i(e)+" as a prototype")}},7370:(e,t,n)=>{var r=n(4201),i=n(5391),o=n(2560).f,s=r("unscopables"),a=Array.prototype;void 0===a[s]&&o(a,s,{configurable:!0,value:i(null)}),e.exports=function(e){a[s][e]=!0}},767:(e,t,n)=>{var r=n(3622),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw new i("Incorrect invocation")}},5027:(e,t,n)=>{var r=n(8999),i=String,o=TypeError;e.exports=function(e){if(r(e))return e;throw new o(i(e)+" is not an object")}},7612:(e,t,n)=>{var r=n(2960).forEach,i=n(6834),o=i("forEach");e.exports=o?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},4328:(e,t,n)=>{var r=n(5290),i=n(7578),o=n(6310),s=function(e){return function(t,n,s){var a,c=r(t),u=o(c),l=i(s,u);if(e&&n!==n){while(u>l)if(a=c[l++],a!==a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},2960:(e,t,n)=>{var r=n(4071),i=n(8844),o=n(4413),s=n(690),a=n(6310),c=n(7120),u=i([].push),l=function(e){var t=1===e,n=2===e,i=3===e,l=4===e,h=6===e,d=7===e,f=5===e||h;return function(p,m,g,y){for(var v,w,b=s(p),E=o(b),_=r(m,g),S=a(E),T=0,I=y||c,k=t?I(p,S):n||d?I(p,0):void 0;S>T;T++)if((f||T in E)&&(v=E[T],w=_(v,T,b),e))if(t)k[T]=w;else if(w)switch(e){case 3:return!0;case 5:return v;case 6:return T;case 2:u(k,v)}else switch(e){case 4:return!1;case 7:u(k,v)}return h?-1:i||l?l:k}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},9042:(e,t,n)=>{var r=n(3689),i=n(4201),o=n(3615),s=i("species");e.exports=function(e){return o>=51||!r((function(){var t=[],n=t.constructor={};return n[s]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},6834:(e,t,n)=>{var r=n(3689);e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){return 1},1)}))}},5649:(e,t,n)=>{var r=n(7697),i=n(2297),o=TypeError,s=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!s(e,"length").writable)throw new o("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},9015:(e,t,n)=>{var r=n(7578),i=n(6310),o=n(6522),s=Array,a=Math.max;e.exports=function(e,t,n){for(var c=i(e),u=r(t,c),l=r(void 0===n?c:n,c),h=s(a(l-u,0)),d=0;u<l;u++,d++)o(h,d,e[u]);return h.length=d,h}},6004:(e,t,n)=>{var r=n(8844);e.exports=r([].slice)},382:(e,t,n)=>{var r=n(9015),i=Math.floor,o=function(e,t){var n=e.length,c=i(n/2);return n<8?s(e,t):a(e,o(r(e,0,c),t),o(r(e,c),t),t)},s=function(e,t){var n,r,i=e.length,o=1;while(o<i){r=o,n=e[o];while(r&&t(e[r-1],n)>0)e[r]=e[--r];r!==o++&&(e[r]=n)}return e},a=function(e,t,n,r){var i=t.length,o=n.length,s=0,a=0;while(s<i||a<o)e[s+a]=s<i&&a<o?r(t[s],n[a])<=0?t[s++]:n[a++]:s<i?t[s++]:n[a++];return e};e.exports=o},5271:(e,t,n)=>{var r=n(2297),i=n(9429),o=n(8999),s=n(4201),a=s("species"),c=Array;e.exports=function(e){var t;return r(e)&&(t=e.constructor,i(t)&&(t===c||r(t.prototype))?t=void 0:o(t)&&(t=t[a],null===t&&(t=void 0))),void 0===t?c:t}},7120:(e,t,n)=>{var r=n(5271);e.exports=function(e,t){return new(r(e))(0===t?0:t)}},6431:(e,t,n)=>{var r=n(4201),i=r("iterator"),o=!1;try{var s=0,a={next:function(){return{done:!!s++}},return:function(){o=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}e.exports=function(e,t){try{if(!t&&!o)return!1}catch(c){return!1}var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(c){}return n}},6648:(e,t,n)=>{var r=n(8844),i=r({}.toString),o=r("".slice);e.exports=function(e){return o(i(e),8,-1)}},926:(e,t,n)=>{var r=n(3043),i=n(9985),o=n(6648),s=n(4201),a=s("toStringTag"),c=Object,u="Arguments"===o(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(n){}};e.exports=r?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=l(t=c(e),a))?n:u?o(t):"Object"===(r=o(t))&&i(t.callee)?"Arguments":r}},8758:(e,t,n)=>{var r=n(6812),i=n(9152),o=n(2474),s=n(2560);e.exports=function(e,t,n){for(var a=i(t),c=s.f,u=o.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},1748:(e,t,n)=>{var r=n(3689);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},7807:e=>{e.exports=function(e,t){return{value:e,done:t}}},5773:(e,t,n)=>{var r=n(7697),i=n(2560),o=n(5684);e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},5684:e=>{e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},6522:(e,t,n)=>{var r=n(8360),i=n(2560),o=n(5684);e.exports=function(e,t,n){var s=r(t);s in e?i.f(e,s,o(0,n)):e[s]=n}},1797:(e,t,n)=>{var r=n(5027),i=n(5899),o=TypeError;e.exports=function(e){if(r(this),"string"===e||"default"===e)e="string";else if("number"!==e)throw new o("Incorrect hint");return i(this,e)}},2148:(e,t,n)=>{var r=n(8702),i=n(2560);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),i.f(e,t,n)}},1880:(e,t,n)=>{var r=n(9985),i=n(2560),o=n(8702),s=n(5014);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&o(n,u,a),a.global)c?e[t]=n:s(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(l){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},5014:(e,t,n)=>{var r=n(9037),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},8494:(e,t,n)=>{var r=n(3691),i=TypeError;e.exports=function(e,t){if(!delete e[t])throw new i("Cannot delete property "+r(t)+" of "+r(e))}},7697:(e,t,n)=>{var r=n(3689);e.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},2659:e=>{var t="object"==typeof document&&document.all,n="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},6420:(e,t,n)=>{var r=n(9037),i=n(8999),o=r.document,s=i(o)&&i(o.createElement);e.exports=function(e){return s?o.createElement(e):{}}},5565:e=>{var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},6338:e=>{e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},3265:(e,t,n)=>{var r=n(6420),i=r("span").classList,o=i&&i.constructor&&i.constructor.prototype;e.exports=o===Object.prototype?void 0:o},7365:(e,t,n)=>{var r=n(71),i=r.match(/firefox\/(\d+)/i);e.exports=!!i&&+i[1]},2532:(e,t,n)=>{var r=n(8563),i=n(806);e.exports=!r&&!i&&"object"==typeof window&&"object"==typeof document},8563:e=>{e.exports="object"==typeof Deno&&Deno&&"object"==typeof Deno.version},7298:(e,t,n)=>{var r=n(71);e.exports=/MSIE|Trident/.test(r)},3221:(e,t,n)=>{var r=n(71);e.exports=/ipad|iphone|ipod/i.test(r)&&"undefined"!=typeof Pebble},4764:(e,t,n)=>{var r=n(71);e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},806:(e,t,n)=>{var r=n(9037),i=n(6648);e.exports="process"===i(r.process)},7486:(e,t,n)=>{var r=n(71);e.exports=/web0s(?!.*chrome)/i.test(r)},71:e=>{e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},3615:(e,t,n)=>{var r,i,o=n(9037),s=n(71),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},7922:(e,t,n)=>{var r=n(71),i=r.match(/AppleWebKit\/(\d+)\./);e.exports=!!i&&+i[1]},2739:e=>{e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},6610:(e,t,n)=>{var r=n(8844),i=Error,o=r("".replace),s=function(e){return String(new i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(s);e.exports=function(e,t){if(c&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=o(e,a,"");return e}},5411:(e,t,n)=>{var r=n(5773),i=n(6610),o=n(9599),s=Error.captureStackTrace;e.exports=function(e,t,n,a){o&&(s?s(e,t):r(e,"stack",i(n,a)))}},9599:(e,t,n)=>{var r=n(3689),i=n(5684);e.exports=!r((function(){var e=new Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",i(1,7)),7!==e.stack)}))},445:(e,t,n)=>{var r=n(7697),i=n(3689),o=n(5027),s=n(3841),a=Error.prototype.toString,c=i((function(){if(r){var e=Object.create(Object.defineProperty({},"name",{get:function(){return this===e}}));if("true"!==a.call(e))return!0}return"2: 1"!==a.call({message:1,name:2})||"Error"!==a.call({})}));e.exports=c?function(){var e=o(this),t=s(e.name,"Error"),n=s(e.message);return t?n?t+": "+n:t:n}:a},9989:(e,t,n)=>{var r=n(9037),i=n(2474).f,o=n(5773),s=n(1880),a=n(5014),c=n(8758),u=n(5266);e.exports=function(e,t){var n,l,h,d,f,p,m=e.target,g=e.global,y=e.stat;if(l=g?r:y?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(g?h:m+(y?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&o(f,"sham",!0),s(l,h,f,e)}}},3689:e=>{e.exports=function(e){try{return!!e()}catch(t){return!0}}},1735:(e,t,n)=>{var r=n(7215),i=Function.prototype,o=i.apply,s=i.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?s.bind(o):function(){return s.apply(o,arguments)})},4071:(e,t,n)=>{var r=n(6576),i=n(509),o=n(7215),s=r(r.bind);e.exports=function(e,t){return i(e),void 0===t?e:o?s(e,t):function(){return e.apply(t,arguments)}}},7215:(e,t,n)=>{var r=n(3689);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},2615:(e,t,n)=>{var r=n(7215),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},1236:(e,t,n)=>{var r=n(7697),i=n(6812),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(o,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},2743:(e,t,n)=>{var r=n(8844),i=n(509);e.exports=function(e,t,n){try{return r(i(Object.getOwnPropertyDescriptor(e,t)[n]))}catch(o){}}},6576:(e,t,n)=>{var r=n(6648),i=n(8844);e.exports=function(e){if("Function"===r(e))return i(e)}},8844:(e,t,n)=>{var r=n(7215),i=Function.prototype,o=i.call,s=r&&i.bind.bind(o,o);e.exports=r?s:function(e){return function(){return o.apply(e,arguments)}}},6058:(e,t,n)=>{var r=n(9037),i=n(9985),o=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e]):r[e]&&r[e][t]}},1664:(e,t,n)=>{var r=n(926),i=n(4849),o=n(981),s=n(9478),a=n(4201),c=a("iterator");e.exports=function(e){if(!o(e))return i(e,c)||i(e,"@@iterator")||s[r(e)]}},5185:(e,t,n)=>{var r=n(2615),i=n(509),o=n(5027),s=n(3691),a=n(1664),c=TypeError;e.exports=function(e,t){var n=arguments.length<2?a(e):t;if(i(n))return o(r(n,e));throw new c(s(e)+" is not iterable")}},2643:(e,t,n)=>{var r=n(8844),i=n(2297),o=n(9985),s=n(6648),a=n(4327),c=r([].push);e.exports=function(e){if(o(e))return e;if(i(e)){for(var t=e.length,n=[],r=0;r<t;r++){var u=e[r];"string"==typeof u?c(n,u):"number"!=typeof u&&"Number"!==s(u)&&"String"!==s(u)||c(n,a(u))}var l=n.length,h=!0;return function(e,t){if(h)return h=!1,t;if(i(this))return t;for(var r=0;r<l;r++)if(n[r]===e)return t}}}},4849:(e,t,n)=>{var r=n(509),i=n(981);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},9037:function(e,t,n){var r=function(e){return e&&e.Math===Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},6812:(e,t,n)=>{var r=n(8844),i=n(690),o=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return o(i(e),t)}},7248:e=>{e.exports={}},920:e=>{e.exports=function(e,t){try{1===arguments.length?console.error(e):console.error(e,t)}catch(n){}}},2688:(e,t,n)=>{var r=n(6058);e.exports=r("document","documentElement")},8506:(e,t,n)=>{var r=n(7697),i=n(3689),o=n(6420);e.exports=!r&&!i((function(){return 7!==Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},4413:(e,t,n)=>{var r=n(8844),i=n(3689),o=n(6648),s=Object,a=r("".split);e.exports=i((function(){return!s("z").propertyIsEnumerable(0)}))?function(e){return"String"===o(e)?a(e,""):s(e)}:s},3457:(e,t,n)=>{var r=n(9985),i=n(8999),o=n(9385);e.exports=function(e,t,n){var s,a;return o&&r(s=t.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&o(e,a),e}},6738:(e,t,n)=>{var r=n(8844),i=n(9985),o=n(4091),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(e){return s(e)}),e.exports=o.inspectSource},2570:(e,t,n)=>{var r=n(8999),i=n(5773);e.exports=function(e,t){r(t)&&"cause"in t&&i(e,"cause",t.cause)}},618:(e,t,n)=>{var r,i,o,s=n(9834),a=n(9037),c=n(8999),u=n(5773),l=n(6812),h=n(4091),d=n(2713),f=n(7248),p="Object already initialized",m=a.TypeError,g=a.WeakMap,y=function(e){return o(e)?i(e):r(e,{})},v=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw new m("Incompatible receiver, "+e+" required");return n}};if(s||h.state){var w=h.state||(h.state=new g);w.get=w.get,w.has=w.has,w.set=w.set,r=function(e,t){if(w.has(e))throw new m(p);return t.facade=e,w.set(e,t),t},i=function(e){return w.get(e)||{}},o=function(e){return w.has(e)}}else{var b=d("state");f[b]=!0,r=function(e,t){if(l(e,b))throw new m(p);return t.facade=e,u(e,b,t),t},i=function(e){return l(e,b)?e[b]:{}},o=function(e){return l(e,b)}}e.exports={set:r,get:i,has:o,enforce:y,getterFor:v}},3292:(e,t,n)=>{var r=n(4201),i=n(9478),o=r("iterator"),s=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||s[o]===e)}},2297:(e,t,n)=>{var r=n(6648);e.exports=Array.isArray||function(e){return"Array"===r(e)}},9985:(e,t,n)=>{var r=n(2659),i=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===i}:function(e){return"function"==typeof e}},9429:(e,t,n)=>{var r=n(8844),i=n(3689),o=n(9985),s=n(926),a=n(6058),c=n(6738),u=function(){},l=[],h=a("Reflect","construct"),d=/^\s*(?:class|function)\b/,f=r(d.exec),p=!d.test(u),m=function(e){if(!o(e))return!1;try{return h(u,l,e),!0}catch(t){return!1}},g=function(e){if(!o(e))return!1;switch(s(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!f(d,c(e))}catch(t){return!0}};g.sham=!0,e.exports=!h||i((function(){var e;return m(m.call)||!m(Object)||!m((function(){e=!0}))||e}))?g:m},5266:(e,t,n)=>{var r=n(3689),i=n(9985),o=/#|\.prototype\./,s=function(e,t){var n=c[a(e)];return n===l||n!==u&&(i(t)?r(t):!!t)},a=s.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";e.exports=s},981:e=>{e.exports=function(e){return null===e||void 0===e}},8999:(e,t,n)=>{var r=n(9985),i=n(2659),o=i.all;e.exports=i.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===o}:function(e){return"object"==typeof e?null!==e:r(e)}},3931:e=>{e.exports=!1},734:(e,t,n)=>{var r=n(6058),i=n(9985),o=n(3622),s=n(9525),a=Object;e.exports=s?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&o(t.prototype,a(e))}},8734:(e,t,n)=>{var r=n(4071),i=n(2615),o=n(5027),s=n(3691),a=n(3292),c=n(6310),u=n(3622),l=n(5185),h=n(1664),d=n(2125),f=TypeError,p=function(e,t){this.stopped=e,this.result=t},m=p.prototype;e.exports=function(e,t,n){var g,y,v,w,b,E,_,S=n&&n.that,T=!(!n||!n.AS_ENTRIES),I=!(!n||!n.IS_RECORD),k=!(!n||!n.IS_ITERATOR),A=!(!n||!n.INTERRUPTED),C=r(t,S),O=function(e){return g&&d(g,"normal",e),new p(!0,e)},x=function(e){return T?(o(e),A?C(e[0],e[1],O):C(e[0],e[1])):A?C(e,O):C(e)};if(I)g=e.iterator;else if(k)g=e;else{if(y=h(e),!y)throw new f(s(e)+" is not iterable");if(a(y)){for(v=0,w=c(e);w>v;v++)if(b=x(e[v]),b&&u(m,b))return b;return new p(!1)}g=l(e,y)}E=I?e.next:g.next;while(!(_=i(E,g)).done){try{b=x(_.value)}catch(R){d(g,"throw",R)}if("object"==typeof b&&b&&u(m,b))return b}return new p(!1)}},2125:(e,t,n)=>{var r=n(2615),i=n(5027),o=n(4849);e.exports=function(e,t,n){var s,a;i(e);try{if(s=o(e,"return"),!s){if("throw"===t)throw n;return n}s=r(s,e)}catch(c){a=!0,s=c}if("throw"===t)throw n;if(a)throw s;return i(s),n}},974:(e,t,n)=>{var r=n(2013).IteratorPrototype,i=n(5391),o=n(5684),s=n(5997),a=n(9478),c=function(){return this};e.exports=function(e,t,n,u){var l=t+" Iterator";return e.prototype=i(r,{next:o(+!u,n)}),s(e,l,!1,!0),a[l]=c,e}},1934:(e,t,n)=>{var r=n(9989),i=n(2615),o=n(3931),s=n(1236),a=n(9985),c=n(974),u=n(1868),l=n(9385),h=n(5997),d=n(5773),f=n(1880),p=n(4201),m=n(9478),g=n(2013),y=s.PROPER,v=s.CONFIGURABLE,w=g.IteratorPrototype,b=g.BUGGY_SAFARI_ITERATORS,E=p("iterator"),_="keys",S="values",T="entries",I=function(){return this};e.exports=function(e,t,n,s,p,g,k){c(n,t,s);var A,C,O,x=function(e){if(e===p&&L)return L;if(!b&&e&&e in N)return N[e];switch(e){case _:return function(){return new n(this,e)};case S:return function(){return new n(this,e)};case T:return function(){return new n(this,e)}}return function(){return new n(this)}},R=t+" Iterator",P=!1,N=e.prototype,D=N[E]||N["@@iterator"]||p&&N[p],L=!b&&D||x(p),M="Array"===t&&N.entries||D;if(M&&(A=u(M.call(new e)),A!==Object.prototype&&A.next&&(o||u(A)===w||(l?l(A,w):a(A[E])||f(A,E,I)),h(A,R,!0,!0),o&&(m[R]=I))),y&&p===S&&D&&D.name!==S&&(!o&&v?d(N,"name",S):(P=!0,L=function(){return i(D,this)})),p)if(C={values:x(S),keys:g?L:x(_),entries:x(T)},k)for(O in C)(b||P||!(O in N))&&f(N,O,C[O]);else r({target:t,proto:!0,forced:b||P},C);return o&&!k||N[E]===L||f(N,E,L,{name:p}),m[t]=L,C}},2013:(e,t,n)=>{var r,i,o,s=n(3689),a=n(9985),c=n(8999),u=n(5391),l=n(1868),h=n(1880),d=n(4201),f=n(3931),p=d("iterator"),m=!1;[].keys&&(o=[].keys(),"next"in o?(i=l(l(o)),i!==Object.prototype&&(r=i)):m=!0);var g=!c(r)||s((function(){var e={};return r[p].call(e)!==e}));g?r={}:f&&(r=u(r)),a(r[p])||h(r,p,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:m}},9478:e=>{e.exports={}},6310:(e,t,n)=>{var r=n(3126);e.exports=function(e){return r(e.length)}},8702:(e,t,n)=>{var r=n(8844),i=n(3689),o=n(9985),s=n(6812),a=n(7697),c=n(1236).CONFIGURABLE,u=n(6738),l=n(618),h=l.enforce,d=l.get,f=String,p=Object.defineProperty,m=r("".slice),g=r("".replace),y=r([].join),v=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),w=String(String).split("String"),b=e.exports=function(e,t,n){"Symbol("===m(f(t),0,7)&&(t="["+g(f(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!s(e,"name")||c&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),v&&n&&s(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=h(e);return s(r,"source")||(r.source=y(w,"string"==typeof t?t:"")),e};Function.prototype.toString=b((function(){return o(this)&&d(this).source||u(this)}),"toString")},8828:e=>{var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},231:(e,t,n)=>{var r,i,o,s,a,c=n(9037),u=n(4071),l=n(2474).f,h=n(9886).set,d=n(4410),f=n(4764),p=n(3221),m=n(7486),g=n(806),y=c.MutationObserver||c.WebKitMutationObserver,v=c.document,w=c.process,b=c.Promise,E=l(c,"queueMicrotask"),_=E&&E.value;if(!_){var S=new d,T=function(){var e,t;g&&(e=w.domain)&&e.exit();while(t=S.get())try{t()}catch(n){throw S.head&&r(),n}e&&e.enter()};f||g||m||!y||!v?!p&&b&&b.resolve?(s=b.resolve(void 0),s.constructor=b,a=u(s.then,s),r=function(){a(T)}):g?r=function(){w.nextTick(T)}:(h=u(h,c),r=function(){h(T)}):(i=!0,o=v.createTextNode(""),new y(T).observe(o,{characterData:!0}),r=function(){o.data=i=!i}),_=function(e){S.head||r(),S.add(e)}}e.exports=_},8742:(e,t,n)=>{var r=n(509),i=TypeError,o=function(e){var t,n;this.promise=new e((function(e,r){if(void 0!==t||void 0!==n)throw new i("Bad Promise constructor");t=e,n=r})),this.resolve=r(t),this.reject=r(n)};e.exports.f=function(e){return new o(e)}},3841:(e,t,n)=>{var r=n(4327);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},7897:(e,t,n)=>{var r=n(9037),i=n(3689),o=n(8844),s=n(4327),a=n(1435).trim,c=n(6350),u=r.parseInt,l=r.Symbol,h=l&&l.iterator,d=/^[+-]?0x/i,f=o(d.exec),p=8!==u(c+"08")||22!==u(c+"0x16")||h&&!i((function(){u(Object(h))}));e.exports=p?function(e,t){var n=a(s(e));return u(n,t>>>0||(f(d,n)?16:10))}:u},5394:(e,t,n)=>{var r=n(7697),i=n(8844),o=n(2615),s=n(3689),a=n(300),c=n(7518),u=n(9556),l=n(690),h=n(4413),d=Object.assign,f=Object.defineProperty,p=i([].concat);e.exports=!d||s((function(){if(r&&1!==d({b:1},d(f({},"a",{enumerable:!0,get:function(){f(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol("assign detection"),i="abcdefghijklmnopqrst";return e[n]=7,i.split("").forEach((function(e){t[e]=e})),7!==d({},e)[n]||a(d({},t)).join("")!==i}))?function(e,t){var n=l(e),i=arguments.length,s=1,d=c.f,f=u.f;while(i>s){var m,g=h(arguments[s++]),y=d?p(a(g),d(g)):a(g),v=y.length,w=0;while(v>w)m=y[w++],r&&!o(f,g,m)||(n[m]=g[m])}return n}:d},5391:(e,t,n)=>{var r,i=n(5027),o=n(8920),s=n(2739),a=n(7248),c=n(2688),u=n(6420),l=n(2713),h=">",d="<",f="prototype",p="script",m=l("IE_PROTO"),g=function(){},y=function(e){return d+p+h+e+d+"/"+p+h},v=function(e){e.write(y("")),e.close();var t=e.parentWindow.Object;return e=null,t},w=function(){var e,t=u("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(y("document.F=Object")),e.close(),e.F},b=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}b="undefined"!=typeof document?document.domain&&r?v(r):w():v(r);var e=s.length;while(e--)delete b[f][s[e]];return b()};a[m]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(g[f]=i(e),n=new g,g[f]=null,n[m]=e):n=b(),void 0===t?n:o.f(n,t)}},8920:(e,t,n)=>{var r=n(7697),i=n(5648),o=n(2560),s=n(5027),a=n(5290),c=n(300);t.f=r&&!i?Object.defineProperties:function(e,t){s(e);var n,r=a(t),i=c(t),u=i.length,l=0;while(u>l)o.f(e,n=i[l++],r[n]);return e}},2560:(e,t,n)=>{var r=n(7697),i=n(8506),o=n(5648),s=n(5027),a=n(8360),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?o?function(e,t,n){if(s(e),t=a(t),s(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=l(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(s(e),t=a(t),s(n),i)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},2474:(e,t,n)=>{var r=n(7697),i=n(2615),o=n(9556),s=n(5684),a=n(5290),c=n(8360),u=n(6812),l=n(8506),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return s(!i(o.f,e,t),e[t])}},6062:(e,t,n)=>{var r=n(6648),i=n(5290),o=n(2741).f,s=n(9015),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(e){try{return o(e)}catch(t){return s(a)}};e.exports.f=function(e){return a&&"Window"===r(e)?c(e):o(i(e))}},2741:(e,t,n)=>{var r=n(4948),i=n(2739),o=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},7518:(e,t)=>{t.f=Object.getOwnPropertySymbols},1868:(e,t,n)=>{var r=n(6812),i=n(9985),o=n(690),s=n(2713),a=n(1748),c=s("IE_PROTO"),u=Object,l=u.prototype;e.exports=a?u.getPrototypeOf:function(e){var t=o(e);if(r(t,c))return t[c];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof u?l:null}},3622:(e,t,n)=>{var r=n(8844);e.exports=r({}.isPrototypeOf)},4948:(e,t,n)=>{var r=n(8844),i=n(6812),o=n(5290),s=n(4328).indexOf,a=n(7248),c=r([].push);e.exports=function(e,t){var n,r=o(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~s(l,n)||c(l,n));return l}},300:(e,t,n)=>{var r=n(4948),i=n(2739);e.exports=Object.keys||function(e){return r(e,i)}},9556:(e,t)=>{var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},9385:(e,t,n)=>{var r=n(2743),i=n(5027),o=n(3550);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.prototype,"__proto__","set"),e(n,[]),t=n instanceof Array}catch(s){}return function(n,r){return i(n),o(r),t?e(n,r):n.__proto__=r,n}}():void 0)},5073:(e,t,n)=>{var r=n(3043),i=n(926);e.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},5899:(e,t,n)=>{var r=n(2615),i=n(9985),o=n(8999),s=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!o(a=r(n,e)))return a;if(i(n=e.valueOf)&&!o(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!o(a=r(n,e)))return a;throw new s("Can't convert object to primitive value")}},9152:(e,t,n)=>{var r=n(6058),i=n(8844),o=n(2741),s=n(7518),a=n(5027),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(a(e)),n=s.f;return n?c(t,n(e)):t}},496:(e,t,n)=>{var r=n(9037);e.exports=r},9302:e=>{e.exports=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}}},7073:(e,t,n)=>{var r=n(9037),i=n(7919),o=n(9985),s=n(5266),a=n(6738),c=n(4201),u=n(2532),l=n(8563),h=n(3931),d=n(3615),f=i&&i.prototype,p=c("species"),m=!1,g=o(r.PromiseRejectionEvent),y=s("Promise",(function(){var e=a(i),t=e!==String(i);if(!t&&66===d)return!0;if(h&&(!f["catch"]||!f["finally"]))return!0;if(!d||d<51||!/native code/.test(e)){var n=new i((function(e){e(1)})),r=function(e){e((function(){}),(function(){}))},o=n.constructor={};if(o[p]=r,m=n.then((function(){}))instanceof r,!m)return!0}return!t&&(u||l)&&!g}));e.exports={CONSTRUCTOR:y,REJECTION_EVENT:g,SUBCLASSING:m}},7919:(e,t,n)=>{var r=n(9037);e.exports=r.Promise},2945:(e,t,n)=>{var r=n(5027),i=n(8999),o=n(8742);e.exports=function(e,t){if(r(e),i(t)&&t.constructor===e)return t;var n=o.f(e),s=n.resolve;return s(t),n.promise}},562:(e,t,n)=>{var r=n(7919),i=n(6431),o=n(7073).CONSTRUCTOR;e.exports=o||!i((function(e){r.all(e).then(void 0,(function(){}))}))},8055:(e,t,n)=>{var r=n(2560).f;e.exports=function(e,t,n){n in e||r(e,n,{configurable:!0,get:function(){return t[n]},set:function(e){t[n]=e}})}},4410:e=>{var t=function(){this.head=null,this.tail=null};t.prototype={add:function(e){var t={item:e,next:null},n=this.tail;n?n.next=t:this.head=t,this.tail=t},get:function(){var e=this.head;if(e){var t=this.head=e.next;return null===t&&(this.tail=null),e.item}}},e.exports=t},9633:(e,t,n)=>{var r=n(5027);e.exports=function(){var e=r(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},3477:(e,t,n)=>{var r=n(2615),i=n(6812),o=n(3622),s=n(9633),a=RegExp.prototype;e.exports=function(e){var t=e.flags;return void 0!==t||"flags"in a||i(e,"flags")||!o(a,e)?t:r(s,e)}},4684:(e,t,n)=>{var r=n(981),i=TypeError;e.exports=function(e){if(r(e))throw new i("Can't call method on "+e);return e}},4241:(e,t,n)=>{var r=n(6058),i=n(2148),o=n(4201),s=n(7697),a=o("species");e.exports=function(e){var t=r(e);s&&t&&!t[a]&&i(t,a,{configurable:!0,get:function(){return this}})}},5997:(e,t,n)=>{var r=n(2560).f,i=n(6812),o=n(4201),s=o("toStringTag");e.exports=function(e,t,n){e&&!n&&(e=e.prototype),e&&!i(e,s)&&r(e,s,{configurable:!0,value:t})}},2713:(e,t,n)=>{var r=n(3430),i=n(4630),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},4091:(e,t,n)=>{var r=n(9037),i=n(5014),o="__core-js_shared__",s=r[o]||i(o,{});e.exports=s},3430:(e,t,n)=>{var r=n(3931),i=n(4091);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.33.3",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.3/LICENSE",source:"https://github.com/zloirock/core-js"})},6373:(e,t,n)=>{var r=n(5027),i=n(2655),o=n(981),s=n(4201),a=s("species");e.exports=function(e,t){var n,s=r(e).constructor;return void 0===s||o(n=r(s)[a])?t:i(n)}},730:(e,t,n)=>{var r=n(8844),i=n(8700),o=n(4327),s=n(4684),a=r("".charAt),c=r("".charCodeAt),u=r("".slice),l=function(e){return function(t,n){var r,l,h=o(s(t)),d=i(n),f=h.length;return d<0||d>=f?e?"":void 0:(r=c(h,d),r<55296||r>56319||d+1===f||(l=c(h,d+1))<56320||l>57343?e?a(h,d):r:e?u(h,d,d+2):l-56320+(r-55296<<10)+65536)}};e.exports={codeAt:l(!1),charAt:l(!0)}},534:(e,t,n)=>{var r=n(8700),i=n(4327),o=n(4684),s=RangeError;e.exports=function(e){var t=i(o(this)),n="",a=r(e);if(a<0||a===1/0)throw new s("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(t+=t))1&a&&(n+=t);return n}},5984:(e,t,n)=>{var r=n(1236).PROPER,i=n(3689),o=n(6350),s="​᠎";e.exports=function(e){return i((function(){return!!o[e]()||s[e]()!==s||r&&o[e].name!==e}))}},1435:(e,t,n)=>{var r=n(8844),i=n(4684),o=n(4327),s=n(6350),a=r("".replace),c=RegExp("^["+s+"]+"),u=RegExp("(^|[^"+s+"])["+s+"]+$"),l=function(e){return function(t){var n=o(i(t));return 1&e&&(n=a(n,c,"")),2&e&&(n=a(n,u,"$1")),n}};e.exports={start:l(1),end:l(2),trim:l(3)}},146:(e,t,n)=>{var r=n(3615),i=n(3689),o=n(9037),s=o.String;e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol("symbol detection");return!s(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},3032:(e,t,n)=>{var r=n(2615),i=n(6058),o=n(4201),s=n(1880);e.exports=function(){var e=i("Symbol"),t=e&&e.prototype,n=t&&t.valueOf,a=o("toPrimitive");t&&!t[a]&&s(t,a,(function(e){return r(n,this)}),{arity:1})}},6549:(e,t,n)=>{var r=n(146);e.exports=r&&!!Symbol["for"]&&!!Symbol.keyFor},9886:(e,t,n)=>{var r,i,o,s,a=n(9037),c=n(1735),u=n(4071),l=n(9985),h=n(6812),d=n(3689),f=n(2688),p=n(6004),m=n(6420),g=n(1500),y=n(4764),v=n(806),w=a.setImmediate,b=a.clearImmediate,E=a.process,_=a.Dispatch,S=a.Function,T=a.MessageChannel,I=a.String,k=0,A={},C="onreadystatechange";d((function(){r=a.location}));var O=function(e){if(h(A,e)){var t=A[e];delete A[e],t()}},x=function(e){return function(){O(e)}},R=function(e){O(e.data)},P=function(e){a.postMessage(I(e),r.protocol+"//"+r.host)};w&&b||(w=function(e){g(arguments.length,1);var t=l(e)?e:S(e),n=p(arguments,1);return A[++k]=function(){c(t,void 0,n)},i(k),k},b=function(e){delete A[e]},v?i=function(e){E.nextTick(x(e))}:_&&_.now?i=function(e){_.now(x(e))}:T&&!y?(o=new T,s=o.port2,o.port1.onmessage=R,i=u(s.postMessage,s)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!d(P)?(i=P,a.addEventListener("message",R,!1)):i=C in m("script")?function(e){f.appendChild(m("script"))[C]=function(){f.removeChild(this),O(e)}}:function(e){setTimeout(x(e),0)}),e.exports={set:w,clear:b}},3648:(e,t,n)=>{var r=n(8844);e.exports=r(1..valueOf)},7578:(e,t,n)=>{var r=n(8700),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},5290:(e,t,n)=>{var r=n(4413),i=n(4684);e.exports=function(e){return r(i(e))}},8700:(e,t,n)=>{var r=n(8828);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},3126:(e,t,n)=>{var r=n(8700),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},690:(e,t,n)=>{var r=n(4684),i=Object;e.exports=function(e){return i(r(e))}},8732:(e,t,n)=>{var r=n(2615),i=n(8999),o=n(734),s=n(4849),a=n(5899),c=n(4201),u=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!i(e)||o(e))return e;var n,c=s(e,l);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||o(n))return n;throw new u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},8360:(e,t,n)=>{var r=n(8732),i=n(734);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},3043:(e,t,n)=>{var r=n(4201),i=r("toStringTag"),o={};o[i]="z",e.exports="[object z]"===String(o)},4327:(e,t,n)=>{var r=n(926),i=String;e.exports=function(e){if("Symbol"===r(e))throw new TypeError("Cannot convert a Symbol value to a string");return i(e)}},3691:e=>{var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},4630:(e,t,n)=>{var r=n(8844),i=0,o=Math.random(),s=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++i+o,36)}},9525:(e,t,n)=>{var r=n(146);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5648:(e,t,n)=>{var r=n(7697),i=n(3689);e.exports=r&&i((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},1500:e=>{var t=TypeError;e.exports=function(e,n){if(e<n)throw new t("Not enough arguments");return e}},9834:(e,t,n)=>{var r=n(9037),i=n(9985),o=r.WeakMap;e.exports=i(o)&&/native code/.test(String(o))},5405:(e,t,n)=>{var r=n(496),i=n(6812),o=n(6145),s=n(2560).f;e.exports=function(e){var t=r.Symbol||(r.Symbol={});i(t,e)||s(t,e,{value:o.f(e)})}},6145:(e,t,n)=>{var r=n(4201);t.f=r},4201:(e,t,n)=>{var r=n(9037),i=n(3430),o=n(6812),s=n(4630),a=n(146),c=n(9525),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||s;e.exports=function(e){return o(l,e)||(l[e]=a&&o(u,e)?u[e]:h("Symbol."+e)),l[e]}},6350:e=>{e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},1064:(e,t,n)=>{var r=n(6058),i=n(6812),o=n(5773),s=n(3622),a=n(9385),c=n(8758),u=n(8055),l=n(3457),h=n(3841),d=n(2570),f=n(5411),p=n(7697),m=n(3931);e.exports=function(e,t,n,g){var y="stackTraceLimit",v=g?2:1,w=e.split("."),b=w[w.length-1],E=r.apply(null,w);if(E){var _=E.prototype;if(!m&&i(_,"cause")&&delete _.cause,!n)return E;var S=r("Error"),T=t((function(e,t){var n=h(g?t:e,void 0),r=g?new E(e):new E;return void 0!==n&&o(r,"message",n),f(r,T,r.stack,2),this&&s(_,this)&&l(r,this,T),arguments.length>v&&d(r,arguments[v]),r}));if(T.prototype=_,"Error"!==b?a?a(T,S):c(T,S,{name:!0}):p&&y in E&&(u(T,E,y),u(T,E,"prepareStackTrace")),c(T,E),!m)try{_.name!==b&&o(_,"name",b),_.constructor=T}catch(I){}return T}}},8077:(e,t,n)=>{var r=n(9989),i=n(2960).filter,o=n(9042),s=o("filter");r({target:"Array",proto:!0,forced:!s},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},9772:(e,t,n)=>{var r=n(9989),i=n(2960).findIndex,o=n(7370),s="findIndex",a=!0;s in[]&&Array(1)[s]((function(){a=!1})),r({target:"Array",proto:!0,forced:a},{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),o(s)},5728:(e,t,n)=>{var r=n(9989),i=n(2960).find,o=n(7370),s="find",a=!0;s in[]&&Array(1)[s]((function(){a=!1})),r({target:"Array",proto:!0,forced:a},{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),o(s)},9693:(e,t,n)=>{var r=n(9989),i=n(7612);r({target:"Array",proto:!0,forced:[].forEach!==i},{forEach:i})},4253:(e,t,n)=>{var r=n(9989),i=n(2297);r({target:"Array",stat:!0},{isArray:i})},752:(e,t,n)=>{var r=n(5290),i=n(7370),o=n(9478),s=n(618),a=n(2560).f,c=n(1934),u=n(7807),l=n(3931),h=n(7697),d="Array Iterator",f=s.set,p=s.getterFor(d);e.exports=c(Array,"Array",(function(e,t){f(this,{type:d,target:r(e),index:0,kind:t})}),(function(){var e=p(this),t=e.target,n=e.index++;if(!t||n>=t.length)return e.target=void 0,u(void 0,!0);switch(e.kind){case"keys":return u(n,!1);case"values":return u(t[n],!1)}return u([n,t[n]],!1)}),"values");var m=o.Arguments=o.Array;if(i("keys"),i("values"),i("entries"),!l&&h&&"values"!==m.name)try{a(m,"name",{value:"values"})}catch(g){}},560:(e,t,n)=>{var r=n(9989),i=n(690),o=n(6310),s=n(5649),a=n(5565),c=n(3689),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=i(this),n=o(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return s(t,n),n}})},3374:(e,t,n)=>{var r=n(9989),i=n(8844),o=n(2297),s=i([].reverse),a=[1,2];r({target:"Array",proto:!0,forced:String(a)===String(a.reverse())},{reverse:function(){return o(this)&&(this.length=this.length),s(this)}})},9730:(e,t,n)=>{var r=n(9989),i=n(2297),o=n(9429),s=n(8999),a=n(7578),c=n(6310),u=n(5290),l=n(6522),h=n(4201),d=n(9042),f=n(6004),p=d("slice"),m=h("species"),g=Array,y=Math.max;r({target:"Array",proto:!0,forced:!p},{slice:function(e,t){var n,r,h,d=u(this),p=c(d),v=a(e,p),w=a(void 0===t?p:t,p);if(i(d)&&(n=d.constructor,o(n)&&(n===g||i(n.prototype))?n=void 0:s(n)&&(n=n[m],null===n&&(n=void 0)),n===g||void 0===n))return f(d,v,w);for(r=new(void 0===n?g:n)(y(w-v,0)),h=0;v<w;v++,h++)v in d&&l(r,h,d[v]);return r.length=h,r}})},5137:(e,t,n)=>{var r=n(9989),i=n(8844),o=n(509),s=n(690),a=n(6310),c=n(8494),u=n(4327),l=n(3689),h=n(382),d=n(6834),f=n(7365),p=n(7298),m=n(3615),g=n(7922),y=[],v=i(y.sort),w=i(y.push),b=l((function(){y.sort(void 0)})),E=l((function(){y.sort(null)})),_=d("sort"),S=!l((function(){if(m)return m<70;if(!(f&&f>3)){if(p)return!0;if(g)return g<603;var e,t,n,r,i="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(r=0;r<47;r++)y.push({k:t+r,v:n})}for(y.sort((function(e,t){return t.v-e.v})),r=0;r<y.length;r++)t=y[r].k.charAt(0),i.charAt(i.length-1)!==t&&(i+=t);return"DGBEFHACIJK"!==i}})),T=b||!E||!_||!S,I=function(e){return function(t,n){return void 0===n?-1:void 0===t?1:void 0!==e?+e(t,n)||0:u(t)>u(n)?1:-1}};r({target:"Array",proto:!0,forced:T},{sort:function(e){void 0!==e&&o(e);var t=s(this);if(S)return void 0===e?v(t):v(t,e);var n,r,i=[],u=a(t);for(r=0;r<u;r++)r in t&&w(i,t[r]);h(i,I(e)),n=a(i),r=0;while(r<n)t[r]=i[r++];while(r<u)c(t,r++);return t}})},2506:(e,t,n)=>{var r=n(9989),i=n(690),o=n(7578),s=n(8700),a=n(6310),c=n(5649),u=n(5565),l=n(7120),h=n(6522),d=n(8494),f=n(9042),p=f("splice"),m=Math.max,g=Math.min;r({target:"Array",proto:!0,forced:!p},{splice:function(e,t){var n,r,f,p,y,v,w=i(this),b=a(w),E=o(e,b),_=arguments.length;for(0===_?n=r=0:1===_?(n=0,r=b-E):(n=_-2,r=g(m(s(t),0),b-E)),u(b+n-r),f=l(w,r),p=0;p<r;p++)y=E+p,y in w&&h(f,p,w[y]);if(f.length=r,n<r){for(p=E;p<b-r;p++)y=p+r,v=p+n,y in w?w[v]=w[y]:d(w,v);for(p=b;p>b-r+n;p--)d(w,p-1)}else if(n>r)for(p=b-r;p>E;p--)y=p+r-1,v=p+n-1,y in w?w[v]=w[y]:d(w,v);for(p=0;p<n;p++)w[p+E]=arguments[p+2];return c(w,b-r+n),f}})},9903:(e,t,n)=>{var r=n(6812),i=n(1880),o=n(1797),s=n(4201),a=s("toPrimitive"),c=Date.prototype;r(c,a)||i(c,a,o)},24:(e,t,n)=>{var r=n(8844),i=n(1880),o=Date.prototype,s="Invalid Date",a="toString",c=r(o[a]),u=r(o.getTime);String(new Date(NaN))!==s&&i(o,a,(function(){var e=u(this);return e===e?c(this):s}))},1057:(e,t,n)=>{var r=n(9989),i=n(9037),o=n(1735),s=n(1064),a="WebAssembly",c=i[a],u=7!==new Error("e",{cause:7}).cause,l=function(e,t){var n={};n[e]=s(e,t,u),r({global:!0,constructor:!0,arity:1,forced:u},n)},h=function(e,t){if(c&&c[e]){var n={};n[e]=s(a+"."+e,t,u),r({target:a,stat:!0,constructor:!0,arity:1,forced:u},n)}};l("Error",(function(e){return function(t){return o(e,this,arguments)}})),l("EvalError",(function(e){return function(t){return o(e,this,arguments)}})),l("RangeError",(function(e){return function(t){return o(e,this,arguments)}})),l("ReferenceError",(function(e){return function(t){return o(e,this,arguments)}})),l("SyntaxError",(function(e){return function(t){return o(e,this,arguments)}})),l("TypeError",(function(e){return function(t){return o(e,this,arguments)}})),l("URIError",(function(e){return function(t){return o(e,this,arguments)}})),h("CompileError",(function(e){return function(t){return o(e,this,arguments)}})),h("LinkError",(function(e){return function(t){return o(e,this,arguments)}})),h("RuntimeError",(function(e){return function(t){return o(e,this,arguments)}}))},8932:(e,t,n)=>{var r=n(1880),i=n(445),o=Error.prototype;o.toString!==i&&r(o,"toString",i)},4284:(e,t,n)=>{var r=n(7697),i=n(1236).EXISTS,o=n(8844),s=n(2148),a=Function.prototype,c=o(a.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=o(u.exec),h="name";r&&!i&&s(a,h,{configurable:!0,get:function(){try{return l(u,c(this))[1]}catch(e){return""}}})},8324:(e,t,n)=>{var r=n(9989),i=n(6058),o=n(1735),s=n(2615),a=n(8844),c=n(3689),u=n(9985),l=n(734),h=n(6004),d=n(2643),f=n(146),p=String,m=i("JSON","stringify"),g=a(/./.exec),y=a("".charAt),v=a("".charCodeAt),w=a("".replace),b=a(1..toString),E=/[\uD800-\uDFFF]/g,_=/^[\uD800-\uDBFF]$/,S=/^[\uDC00-\uDFFF]$/,T=!f||c((function(){var e=i("Symbol")("stringify detection");return"[null]"!==m([e])||"{}"!==m({a:e})||"{}"!==m(Object(e))})),I=c((function(){return'"\\udf06\\ud834"'!==m("\udf06\ud834")||'"\\udead"'!==m("\udead")})),k=function(e,t){var n=h(arguments),r=d(t);if(u(r)||void 0!==e&&!l(e))return n[1]=function(e,t){if(u(r)&&(t=s(r,this,p(e),t)),!l(t))return t},o(m,null,n)},A=function(e,t,n){var r=y(n,t-1),i=y(n,t+1);return g(_,e)&&!g(S,i)||g(S,e)&&!g(_,r)?"\\u"+b(v(e,0),16):e};m&&r({target:"JSON",stat:!0,arity:3,forced:T||I},{stringify:function(e,t,n){var r=h(arguments),i=o(T?k:m,null,r);return I&&"string"==typeof i?w(i,E,A):i}})},7629:(e,t,n)=>{var r=n(9037),i=n(5997);i(r.JSON,"JSON",!0)},7509:(e,t,n)=>{var r=n(5997);r(Math,"Math",!0)},9288:(e,t,n)=>{var r=n(9989),i=n(3931),o=n(7697),s=n(9037),a=n(496),c=n(8844),u=n(5266),l=n(6812),h=n(3457),d=n(3622),f=n(734),p=n(8732),m=n(3689),g=n(2741).f,y=n(2474).f,v=n(2560).f,w=n(3648),b=n(1435).trim,E="Number",_=s[E],S=a[E],T=_.prototype,I=s.TypeError,k=c("".slice),A=c("".charCodeAt),C=function(e){var t=p(e,"number");return"bigint"==typeof t?t:O(t)},O=function(e){var t,n,r,i,o,s,a,c,u=p(e,"number");if(f(u))throw new I("Cannot convert a Symbol value to a number");if("string"==typeof u&&u.length>2)if(u=b(u),t=A(u,0),43===t||45===t){if(n=A(u,2),88===n||120===n)return NaN}else if(48===t){switch(A(u,1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+u}for(o=k(u,2),s=o.length,a=0;a<s;a++)if(c=A(o,a),c<48||c>i)return NaN;return parseInt(o,r)}return+u},x=u(E,!_(" 0o1")||!_("0b1")||_("+0x1")),R=function(e){return d(T,e)&&m((function(){w(e)}))},P=function(e){var t=arguments.length<1?0:_(C(e));return R(this)?h(Object(t),this,P):t};P.prototype=T,x&&!i&&(T.constructor=P),r({global:!0,constructor:!0,wrap:!0,forced:x},{Number:P});var N=function(e,t){for(var n,r=o?g(t):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),i=0;r.length>i;i++)l(t,n=r[i])&&!l(e,n)&&v(e,n,y(t,n))};i&&S&&N(a[E],S),(x||i)&&N(a[E],_)},7389:(e,t,n)=>{var r=n(9989),i=n(8844),o=n(8700),s=n(3648),a=n(534),c=n(3689),u=RangeError,l=String,h=Math.floor,d=i(a),f=i("".slice),p=i(1..toFixed),m=function(e,t,n){return 0===t?n:t%2===1?m(e,t-1,n*e):m(e*e,t/2,n)},g=function(e){var t=0,n=e;while(n>=4096)t+=12,n/=4096;while(n>=2)t+=1,n/=2;return t},y=function(e,t,n){var r=-1,i=n;while(++r<6)i+=t*e[r],e[r]=i%1e7,i=h(i/1e7)},v=function(e,t){var n=6,r=0;while(--n>=0)r+=e[n],e[n]=h(r/t),r=r%t*1e7},w=function(e){var t=6,n="";while(--t>=0)if(""!==n||0===t||0!==e[t]){var r=l(e[t]);n=""===n?r:n+d("0",7-r.length)+r}return n},b=c((function(){return"0.000"!==p(8e-5,3)||"1"!==p(.9,0)||"1.25"!==p(1.255,2)||"1000000000000000128"!==p(0xde0b6b3a7640080,0)}))||!c((function(){p({})}));r({target:"Number",proto:!0,forced:b},{toFixed:function(e){var t,n,r,i,a=s(this),c=o(e),h=[0,0,0,0,0,0],p="",b="0";if(c<0||c>20)throw new u("Incorrect fraction digits");if(a!==a)return"NaN";if(a<=-1e21||a>=1e21)return l(a);if(a<0&&(p="-",a=-a),a>1e-21)if(t=g(a*m(2,69,1))-69,n=t<0?a*m(2,-t,1):a/m(2,t,1),n*=4503599627370496,t=52-t,t>0){y(h,0,n),r=c;while(r>=7)y(h,1e7,0),r-=7;y(h,m(10,r,1),0),r=t-1;while(r>=23)v(h,1<<23),r-=23;v(h,1<<r),y(h,1,1),v(h,2),b=w(h)}else y(h,0,n),y(h,1<<-t,0),b=w(h)+d("0",c);return c>0?(i=b.length,b=p+(i<=c?"0."+d("0",c-i)+b:f(b,0,i-c)+"."+f(b,i-c))):b=p+b,b}})},429:(e,t,n)=>{var r=n(9989),i=n(5394);r({target:"Object",stat:!0,arity:2,forced:Object.assign!==i},{assign:i})},1013:(e,t,n)=>{var r=n(9989),i=n(7697),o=n(5391);r({target:"Object",stat:!0,sham:!i},{create:o})},5082:(e,t,n)=>{var r=n(9989),i=n(7697),o=n(8920).f;r({target:"Object",stat:!0,forced:Object.defineProperties!==o,sham:!i},{defineProperties:o})},739:(e,t,n)=>{var r=n(9989),i=n(7697),o=n(2560).f;r({target:"Object",stat:!0,forced:Object.defineProperty!==o,sham:!i},{defineProperty:o})},1919:(e,t,n)=>{var r=n(9989),i=n(3689),o=n(5290),s=n(2474).f,a=n(7697),c=!a||i((function(){s(1)}));r({target:"Object",stat:!0,forced:c,sham:!a},{getOwnPropertyDescriptor:function(e,t){return s(o(e),t)}})},9474:(e,t,n)=>{var r=n(9989),i=n(7697),o=n(9152),s=n(5290),a=n(2474),c=n(6522);r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(e){var t,n,r=s(e),i=a.f,u=o(r),l={},h=0;while(u.length>h)n=i(r,t=u[h++]),void 0!==n&&c(l,t,n);return l}})},9434:(e,t,n)=>{var r=n(9989),i=n(146),o=n(3689),s=n(7518),a=n(690),c=!i||o((function(){s.f(1)}));r({target:"Object",stat:!0,forced:c},{getOwnPropertySymbols:function(e){var t=s.f;return t?t(a(e)):[]}})},8052:(e,t,n)=>{var r=n(9989),i=n(3689),o=n(690),s=n(1868),a=n(1748),c=i((function(){s(1)}));r({target:"Object",stat:!0,forced:c,sham:!a},{getPrototypeOf:function(e){return s(o(e))}})},9358:(e,t,n)=>{var r=n(9989),i=n(690),o=n(300),s=n(3689),a=s((function(){o(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(e){return o(i(e))}})},9330:(e,t,n)=>{var r=n(7697),i=n(2148),o=n(8999),s=n(690),a=n(4684),c=Object.getPrototypeOf,u=Object.setPrototypeOf,l=Object.prototype,h="__proto__";if(r&&c&&u&&!(h in l))try{i(l,h,{configurable:!0,get:function(){return c(s(this))},set:function(e){var t=a(this);(o(e)||null===e)&&o(t)&&u(t,e)}})}catch(d){}},5399:(e,t,n)=>{var r=n(9989),i=n(9385);r({target:"Object",stat:!0},{setPrototypeOf:i})},228:(e,t,n)=>{var r=n(3043),i=n(1880),o=n(5073);r||i(Object.prototype,"toString",o,{unsafe:!0})},2320:(e,t,n)=>{var r=n(9989),i=n(7897);r({global:!0,forced:parseInt!==i},{parseInt:i})},1692:(e,t,n)=>{var r=n(9989),i=n(2615),o=n(509),s=n(8742),a=n(9302),c=n(8734),u=n(562);r({target:"Promise",stat:!0,forced:u},{all:function(e){var t=this,n=s.f(t),r=n.resolve,u=n.reject,l=a((function(){var n=o(t.resolve),s=[],a=0,l=1;c(e,(function(e){var o=a++,c=!1;l++,i(n,t,e).then((function(e){c||(c=!0,s[o]=e,--l||r(s))}),u)})),--l||r(s)}));return l.error&&u(l.value),n.promise}})},5089:(e,t,n)=>{var r=n(9989),i=n(3931),o=n(7073).CONSTRUCTOR,s=n(7919),a=n(6058),c=n(9985),u=n(1880),l=s&&s.prototype;if(r({target:"Promise",proto:!0,forced:o,real:!0},{catch:function(e){return this.then(void 0,e)}}),!i&&c(s)){var h=a("Promise").prototype["catch"];l["catch"]!==h&&u(l,"catch",h,{unsafe:!0})}},6697:(e,t,n)=>{var r,i,o,s,a=n(9989),c=n(3931),u=n(806),l=n(9037),h=n(2615),d=n(1880),f=n(9385),p=n(5997),m=n(4241),g=n(509),y=n(9985),v=n(8999),w=n(767),b=n(6373),E=n(9886).set,_=n(231),S=n(920),T=n(9302),I=n(4410),k=n(618),A=n(7919),C=n(7073),O=n(8742),x="Promise",R=C.CONSTRUCTOR,P=C.REJECTION_EVENT,N=C.SUBCLASSING,D=k.getterFor(x),L=k.set,M=A&&A.prototype,j=A,F=M,U=l.TypeError,V=l.document,$=l.process,B=O.f,q=B,z=!!(V&&V.createEvent&&l.dispatchEvent),H="unhandledrejection",G="rejectionhandled",K=0,W=1,J=2,Q=1,Y=2,X=function(e){var t;return!(!v(e)||!y(t=e.then))&&t},Z=function(e,t){var n,r,i,o=t.value,s=t.state===W,a=s?e.ok:e.fail,c=e.resolve,u=e.reject,l=e.domain;try{a?(s||(t.rejection===Y&&ie(t),t.rejection=Q),!0===a?n=o:(l&&l.enter(),n=a(o),l&&(l.exit(),i=!0)),n===e.promise?u(new U("Promise-chain cycle")):(r=X(n))?h(r,n,c,u):c(n)):u(o)}catch(d){l&&!i&&l.exit(),u(d)}},ee=function(e,t){e.notified||(e.notified=!0,_((function(){var n,r=e.reactions;while(n=r.get())Z(n,e);e.notified=!1,t&&!e.rejection&&ne(e)})))},te=function(e,t,n){var r,i;z?(r=V.createEvent("Event"),r.promise=t,r.reason=n,r.initEvent(e,!1,!0),l.dispatchEvent(r)):r={promise:t,reason:n},!P&&(i=l["on"+e])?i(r):e===H&&S("Unhandled promise rejection",n)},ne=function(e){h(E,l,(function(){var t,n=e.facade,r=e.value,i=re(e);if(i&&(t=T((function(){u?$.emit("unhandledRejection",r,n):te(H,n,r)})),e.rejection=u||re(e)?Y:Q,t.error))throw t.value}))},re=function(e){return e.rejection!==Q&&!e.parent},ie=function(e){h(E,l,(function(){var t=e.facade;u?$.emit("rejectionHandled",t):te(G,t,e.value)}))},oe=function(e,t,n){return function(r){e(t,r,n)}},se=function(e,t,n){e.done||(e.done=!0,n&&(e=n),e.value=t,e.state=J,ee(e,!0))},ae=function(e,t,n){if(!e.done){e.done=!0,n&&(e=n);try{if(e.facade===t)throw new U("Promise can't be resolved itself");var r=X(t);r?_((function(){var n={done:!1};try{h(r,t,oe(ae,n,e),oe(se,n,e))}catch(i){se(n,i,e)}})):(e.value=t,e.state=W,ee(e,!1))}catch(i){se({done:!1},i,e)}}};if(R&&(j=function(e){w(this,F),g(e),h(r,this);var t=D(this);try{e(oe(ae,t),oe(se,t))}catch(n){se(t,n)}},F=j.prototype,r=function(e){L(this,{type:x,done:!1,notified:!1,parent:!1,reactions:new I,rejection:!1,state:K,value:void 0})},r.prototype=d(F,"then",(function(e,t){var n=D(this),r=B(b(this,j));return n.parent=!0,r.ok=!y(e)||e,r.fail=y(t)&&t,r.domain=u?$.domain:void 0,n.state===K?n.reactions.add(r):_((function(){Z(r,n)})),r.promise})),i=function(){var e=new r,t=D(e);this.promise=e,this.resolve=oe(ae,t),this.reject=oe(se,t)},O.f=B=function(e){return e===j||e===o?new i(e):q(e)},!c&&y(A)&&M!==Object.prototype)){s=M.then,N||d(M,"then",(function(e,t){var n=this;return new j((function(e,t){h(s,n,e,t)})).then(e,t)}),{unsafe:!0});try{delete M.constructor}catch(ce){}f&&f(M,F)}a({global:!0,constructor:!0,wrap:!0,forced:R},{Promise:j}),p(j,x,!1,!0),m(x)},6409:(e,t,n)=>{var r=n(9989),i=n(3931),o=n(7919),s=n(3689),a=n(6058),c=n(9985),u=n(6373),l=n(2945),h=n(1880),d=o&&o.prototype,f=!!o&&s((function(){d["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:f},{finally:function(e){var t=u(this,a("Promise")),n=c(e);return this.then(n?function(n){return l(t,e()).then((function(){return n}))}:e,n?function(n){return l(t,e()).then((function(){throw n}))}:e)}}),!i&&c(o)){var p=a("Promise").prototype["finally"];d["finally"]!==p&&h(d,"finally",p,{unsafe:!0})}},3964:(e,t,n)=>{n(6697),n(1692),n(5089),n(8829),n(2092),n(7905)},8829:(e,t,n)=>{var r=n(9989),i=n(2615),o=n(509),s=n(8742),a=n(9302),c=n(8734),u=n(562);r({target:"Promise",stat:!0,forced:u},{race:function(e){var t=this,n=s.f(t),r=n.reject,u=a((function(){var s=o(t.resolve);c(e,(function(e){i(s,t,e).then(n.resolve,r)}))}));return u.error&&r(u.value),n.promise}})},2092:(e,t,n)=>{var r=n(9989),i=n(2615),o=n(8742),s=n(7073).CONSTRUCTOR;r({target:"Promise",stat:!0,forced:s},{reject:function(e){var t=o.f(this);return i(t.reject,void 0,e),t.promise}})},7905:(e,t,n)=>{var r=n(9989),i=n(6058),o=n(3931),s=n(7919),a=n(7073).CONSTRUCTOR,c=n(2945),u=i("Promise"),l=o&&!a;r({target:"Promise",stat:!0,forced:o||a},{resolve:function(e){return c(l&&this===u?s:this,e)}})},2826:(e,t,n)=>{var r=n(1236).PROPER,i=n(1880),o=n(5027),s=n(4327),a=n(3689),c=n(3477),u="toString",l=RegExp.prototype,h=l[u],d=a((function(){return"/a/b"!==h.call({source:"a",flags:"b"})})),f=r&&h.name!==u;(d||f)&&i(RegExp.prototype,u,(function(){var e=o(this),t=s(e.source),n=s(c(e));return"/"+t+"/"+n}),{unsafe:!0})},1694:(e,t,n)=>{var r=n(730).charAt,i=n(4327),o=n(618),s=n(1934),a=n(7807),c="String Iterator",u=o.set,l=o.getterFor(c);s(String,"String",(function(e){u(this,{type:c,string:i(e),index:0})}),(function(){var e,t=l(this),n=t.string,i=t.index;return i>=n.length?a(void 0,!0):(e=r(n,i),t.index+=e.length,a(e,!1))}))},8436:(e,t,n)=>{var r=n(9989),i=n(1435).trim,o=n(5984);r({target:"String",proto:!0,forced:o("trim")},{trim:function(){return i(this)}})},8373:(e,t,n)=>{var r=n(5405);r("asyncIterator")},7855:(e,t,n)=>{var r=n(9989),i=n(9037),o=n(2615),s=n(8844),a=n(3931),c=n(7697),u=n(146),l=n(3689),h=n(6812),d=n(3622),f=n(5027),p=n(5290),m=n(8360),g=n(4327),y=n(5684),v=n(5391),w=n(300),b=n(2741),E=n(6062),_=n(7518),S=n(2474),T=n(2560),I=n(8920),k=n(9556),A=n(1880),C=n(2148),O=n(3430),x=n(2713),R=n(7248),P=n(4630),N=n(4201),D=n(6145),L=n(5405),M=n(3032),j=n(5997),F=n(618),U=n(2960).forEach,V=x("hidden"),$="Symbol",B="prototype",q=F.set,z=F.getterFor($),H=Object[B],G=i.Symbol,K=G&&G[B],W=i.RangeError,J=i.TypeError,Q=i.QObject,Y=S.f,X=T.f,Z=E.f,ee=k.f,te=s([].push),ne=O("symbols"),re=O("op-symbols"),ie=O("wks"),oe=!Q||!Q[B]||!Q[B].findChild,se=function(e,t,n){var r=Y(H,t);r&&delete H[t],X(e,t,n),r&&e!==H&&X(H,t,r)},ae=c&&l((function(){return 7!==v(X({},"a",{get:function(){return X(this,"a",{value:7}).a}})).a}))?se:X,ce=function(e,t){var n=ne[e]=v(K);return q(n,{type:$,tag:e,description:t}),c||(n.description=t),n},ue=function(e,t,n){e===H&&ue(re,t,n),f(e);var r=m(t);return f(n),h(ne,r)?(n.enumerable?(h(e,V)&&e[V][r]&&(e[V][r]=!1),n=v(n,{enumerable:y(0,!1)})):(h(e,V)||X(e,V,y(1,{})),e[V][r]=!0),ae(e,r,n)):X(e,r,n)},le=function(e,t){f(e);var n=p(t),r=w(n).concat(me(n));return U(r,(function(t){c&&!o(de,n,t)||ue(e,t,n[t])})),e},he=function(e,t){return void 0===t?v(e):le(v(e),t)},de=function(e){var t=m(e),n=o(ee,this,t);return!(this===H&&h(ne,t)&&!h(re,t))&&(!(n||!h(this,t)||!h(ne,t)||h(this,V)&&this[V][t])||n)},fe=function(e,t){var n=p(e),r=m(t);if(n!==H||!h(ne,r)||h(re,r)){var i=Y(n,r);return!i||!h(ne,r)||h(n,V)&&n[V][r]||(i.enumerable=!0),i}},pe=function(e){var t=Z(p(e)),n=[];return U(t,(function(e){h(ne,e)||h(R,e)||te(n,e)})),n},me=function(e){var t=e===H,n=Z(t?re:p(e)),r=[];return U(n,(function(e){!h(ne,e)||t&&!h(H,e)||te(r,ne[e])})),r};u||(G=function(){if(d(K,this))throw new J("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?g(arguments[0]):void 0,t=P(e),n=function(e){var r=void 0===this?i:this;r===H&&o(n,re,e),h(r,V)&&h(r[V],t)&&(r[V][t]=!1);var s=y(1,e);try{ae(r,t,s)}catch(a){if(!(a instanceof W))throw a;se(r,t,s)}};return c&&oe&&ae(H,t,{configurable:!0,set:n}),ce(t,e)},K=G[B],A(K,"toString",(function(){return z(this).tag})),A(G,"withoutSetter",(function(e){return ce(P(e),e)})),k.f=de,T.f=ue,I.f=le,S.f=fe,b.f=E.f=pe,_.f=me,D.f=function(e){return ce(N(e),e)},c&&(C(K,"description",{configurable:!0,get:function(){return z(this).description}}),a||A(H,"propertyIsEnumerable",de,{unsafe:!0}))),r({global:!0,constructor:!0,wrap:!0,forced:!u,sham:!u},{Symbol:G}),U(w(ie),(function(e){L(e)})),r({target:$,stat:!0,forced:!u},{useSetter:function(){oe=!0},useSimple:function(){oe=!1}}),r({target:"Object",stat:!0,forced:!u,sham:!c},{create:he,defineProperty:ue,defineProperties:le,getOwnPropertyDescriptor:fe}),r({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:pe}),M(),j(G,$),R[V]=!0},6544:(e,t,n)=>{var r=n(9989),i=n(7697),o=n(9037),s=n(8844),a=n(6812),c=n(9985),u=n(3622),l=n(4327),h=n(2148),d=n(8758),f=o.Symbol,p=f&&f.prototype;if(i&&c(f)&&(!("description"in p)||void 0!==f().description)){var m={},g=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:l(arguments[0]),t=u(p,this)?new f(e):void 0===e?f():f(e);return""===e&&(m[t]=!0),t};d(g,f),g.prototype=p,p.constructor=g;var y="Symbol(description detection)"===String(f("description detection")),v=s(p.valueOf),w=s(p.toString),b=/^Symbol\((.*)\)[^)]+$/,E=s("".replace),_=s("".slice);h(p,"description",{configurable:!0,get:function(){var e=v(this);if(a(m,e))return"";var t=w(e),n=y?_(t,7,-1):E(t,b,"$1");return""===n?void 0:n}}),r({global:!0,constructor:!0,forced:!0},{Symbol:g})}},3975:(e,t,n)=>{var r=n(9989),i=n(6058),o=n(6812),s=n(4327),a=n(3430),c=n(6549),u=a("string-to-symbol-registry"),l=a("symbol-to-string-registry");r({target:"Symbol",stat:!0,forced:!c},{for:function(e){var t=s(e);if(o(u,t))return u[t];var n=i("Symbol")(t);return u[t]=n,l[n]=t,n}})},4254:(e,t,n)=>{var r=n(5405);r("iterator")},9749:(e,t,n)=>{n(7855),n(3975),n(1445),n(8324),n(9434)},1445:(e,t,n)=>{var r=n(9989),i=n(6812),o=n(734),s=n(3691),a=n(3430),c=n(6549),u=a("symbol-to-string-registry");r({target:"Symbol",stat:!0,forced:!c},{keyFor:function(e){if(!o(e))throw new TypeError(s(e)+" is not a symbol");if(i(u,e))return u[e]}})},9373:(e,t,n)=>{var r=n(5405),i=n(3032);r("toPrimitive"),i()},6793:(e,t,n)=>{var r=n(6058),i=n(5405),o=n(5997);i("toStringTag"),o(r("Symbol"),"Symbol")},7522:(e,t,n)=>{var r=n(9037),i=n(6338),o=n(3265),s=n(7612),a=n(5773),c=function(e){if(e&&e.forEach!==s)try{a(e,"forEach",s)}catch(t){e.forEach=s}};for(var u in i)i[u]&&c(r[u]&&r[u].prototype);c(o)},6265:(e,t,n)=>{var r=n(9037),i=n(6338),o=n(3265),s=n(752),a=n(5773),c=n(4201),u=c("iterator"),l=c("toStringTag"),h=s.values,d=function(e,t){if(e){if(e[u]!==h)try{a(e,u,h)}catch(r){e[u]=h}if(e[l]||a(e,l,t),i[t])for(var n in s)if(e[n]!==s[n])try{a(e,n,s[n])}catch(r){e[n]=s[n]}}};for(var f in i)d(r[f]&&r[f].prototype,f);d(o,"DOMTokenList")},5816:(e,t,n)=>{n.d(t,{Jn:()=>me,qX:()=>he,Xd:()=>le,Mq:()=>ye,ZF:()=>ge,KN:()=>ve});var r=n(8463),i=n(3333),o=n(4444);const s=(e,t)=>t.some((t=>e instanceof t));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function g(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(_(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),m.set(t,e),t}function y(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));d.set(e,t)}let v={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function w(e){v=e(v)}function b(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(S(this),t),_(h.get(this))}:function(...t){return _(e.apply(S(this),t))}:function(t,...n){const r=e.call(S(this),t,...n);return f.set(r,t.sort?t.sort():[t]),_(r)}}function E(e){return"function"===typeof e?b(e):(e instanceof IDBTransaction&&y(e),s(e,u())?new Proxy(e,v):e)}function _(e){if(e instanceof IDBRequest)return g(e);if(p.has(e))return p.get(e);const t=E(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}const S=e=>m.get(e);function T(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=_(s);return r&&s.addEventListener("upgradeneeded",(e=>{r(_(s.result),e.oldVersion,e.newVersion,_(s.transaction),e)})),n&&s.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{o&&e.addEventListener("close",(()=>o())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const I=["get","getKey","getAll","getAllKeys","count"],k=["put","add","delete","clear"],A=new Map;function C(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(A.get(t))return A.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=k.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!I.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),i&&o.done]))[0]};return A.set(t,o),o}w((e=>({...e,get:(t,n,r)=>C(t,n)||e.get(t,n,r),has:(t,n)=>!!C(t,n)||e.has(t,n)})));
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
class O{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(x(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function x(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const R="@firebase/app",P="0.9.13",N=new i.Yd("@firebase/app"),D="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",j="@firebase/app-check-compat",F="@firebase/app-check",U="@firebase/auth",V="@firebase/auth-compat",$="@firebase/database",B="@firebase/database-compat",q="@firebase/functions",z="@firebase/functions-compat",H="@firebase/installations",G="@firebase/installations-compat",K="@firebase/messaging",W="@firebase/messaging-compat",J="@firebase/performance",Q="@firebase/performance-compat",Y="@firebase/remote-config",X="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="9.23.0",oe="[DEFAULT]",se={[R]:"fire-core",[D]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[F]:"fire-app-check",[j]:"fire-app-check-compat",[U]:"fire-auth",[V]:"fire-auth-compat",[$]:"fire-rtdb",[B]:"fire-rtdb-compat",[q]:"fire-fn",[z]:"fire-fn-compat",[H]:"fire-iid",[G]:"fire-iid-compat",[K]:"fire-fcm",[W]:"fire-fcm-compat",[J]:"fire-perf",[Q]:"fire-perf-compat",[Y]:"fire-rc",[X]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){N.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function le(e){const t=e.name;if(ce.has(t))return N.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())ue(n,e);return!0}function he(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
const de={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},fe=new o.LL("app","Firebase",de);
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
class pe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fe.create("app-deleted",{appName:this._name})}}
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
 */const me=ie;function ge(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:oe,automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!==typeof s||!s)throw fe.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.aH)()),!n)throw fe.create("no-options");const a=ae.get(s);if(a){if((0,o.vZ)(n,a.options)&&(0,o.vZ)(i,a.config))return a;throw fe.create("duplicate-app",{appName:s})}const c=new r.H0(s);for(const r of ce.values())c.addComponent(r);const u=new pe(n,i,c);return ae.set(s,u),u}function ye(e=oe){const t=ae.get(e);if(!t&&e===oe&&(0,o.aH)())return ge();if(!t)throw fe.create("no-app",{appName:e});return t}function ve(e,t,n){var i;let o=null!==(i=se[e])&&void 0!==i?i:e;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void N.warn(e.join(" "))}le(new r.wA(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}
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
const we="firebase-heartbeat-database",be=1,Ee="firebase-heartbeat-store";let _e=null;function Se(){return _e||(_e=T(we,be,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ee)}}}).catch((e=>{throw fe.create("idb-open",{originalErrorMessage:e.message})}))),_e}async function Te(e){try{const t=await Se(),n=await t.transaction(Ee).objectStore(Ee).get(ke(e));return n}catch(t){if(t instanceof o.ZR)N.warn(t.message);else{const e=fe.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});N.warn(e.message)}}}async function Ie(e,t){try{const n=await Se(),r=n.transaction(Ee,"readwrite"),i=r.objectStore(Ee);await i.put(t,ke(e)),await r.done}catch(n){if(n instanceof o.ZR)N.warn(n.message);else{const e=fe.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});N.warn(e.message)}}}function ke(e){return`${e.name}!${e.options.appId}`}
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
 */const Ae=1024,Ce=2592e6;class Oe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Pe(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=xe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Ce})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=xe(),{heartbeatsToSend:t,unsentEntries:n}=Re(this._heartbeatsCache.heartbeats),r=(0,o.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function xe(){const e=new Date;return e.toISOString().substring(0,10)}function Re(e,t=Ae){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Ne(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ne(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Pe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.hl)()&&(0,o.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Te(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ie(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ie(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Ne(e){return(0,o.L)(JSON.stringify({version:2,heartbeats:e})).length}
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
 */function De(e){le(new r.wA("platform-logger",(e=>new O(e)),"PRIVATE")),le(new r.wA("heartbeat",(e=>new Oe(e)),"PRIVATE")),ve(R,P,e),ve(R,P,"esm2017"),ve("fire-js","")}De("")},8463:(e,t,n)=>{n.d(t,{H0:()=>u,wA:()=>i});var r=n(4444);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */const o="[DEFAULT]";
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
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&o.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===o?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
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
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3333:(e,t,n)=>{n.d(t,{Yd:()=>u,in:()=>i});
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
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}},3977:(e,t,n)=>{n.d(t,{ZF:()=>r.ZF});var r=n(5816),i="firebase",o="9.23.0";
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
(0,r.KN)(i,o,"app")},9451:(e,t,n)=>{n.d(t,{Xb:()=>xt,v0:()=>Wr,Aj:()=>Ut,w$:()=>Pt,LS:()=>Ot,e5:()=>Rt,w7:()=>Vt,s:()=>Lt,ck:()=>Dt});var r=n(4444),i=n(5816);function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var s=n(3333),a=n(8463);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r.LL("auth","Firebase",c()),h=new s.Yd("@firebase/auth");function d(e,...t){h.logLevel<=s["in"].WARN&&h.warn(`Auth (${i.Jn}): ${e}`,...t)}function f(e,...t){h.logLevel<=s["in"].ERROR&&h.error(`Auth (${i.Jn}): ${e}`,...t)}
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
 */function p(e,...t){throw y(e,...t)}function m(e,...t){return y(e,...t)}function g(e,t,n){const i=Object.assign(Object.assign({},u()),{[t]:n}),o=new r.LL("auth","Firebase",i);return o.create(t,{appName:e.name})}function y(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return l.create(e,...t)}function v(e,t,...n){if(!e)throw y(t,...n)}function w(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function b(e,t){e||w(t)}
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
 */function E(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function _(){return"http:"===S()||"https:"===S()}function S(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function T(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(_()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function I(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
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
 */class k{constructor(e,t){this.shortDelay=e,this.longDelay=t,b(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return T()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function A(e,t){b(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class C{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void w("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void w("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void w("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const O={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},x=new k(3e4,6e4);
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
 */function R(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function P(e,t,n,i,o={}){return N(e,o,(async()=>{let o={},s={};i&&("GET"===t?s=i:o={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),C.fetch()(L(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},o))}))}async function N(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},O),t);try{const t=new M(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw j(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const t=r.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw j(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw j(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw j(e,"user-disabled",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw g(e,a,s);p(e,a)}}catch(o){if(o instanceof r.ZR)throw o;p(e,"network-request-failed",{message:String(o)})}}async function D(e,t,n,r,i={}){const o=await P(e,t,n,r,i);return"mfaPendingCredential"in o&&p(e,"multi-factor-auth-required",{_serverResponse:o}),o}function L(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?A(e.config,i):`${e.config.apiScheme}://${i}`}class M{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(m(this.auth,"network-request-failed"))),x.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function j(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=m(e,t,r);return i.customData._tokenResponse=n,i}
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
 */async function F(e,t){return P(e,"POST","/v1/accounts:delete",t)}async function U(e,t){return P(e,"POST","/v1/accounts:lookup",t)}
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
 */function V(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
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
 */async function $(e,t=!1){const n=(0,r.m9)(e),i=await n.getIdToken(t),o=q(i);v(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:i,authTime:V(B(o.auth_time)),issuedAtTime:V(B(o.iat)),expirationTime:V(B(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function B(e){return 1e3*Number(e)}function q(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(n);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(o){return f("Caught error parsing JWT payload as JSON",null===o||void 0===o?void 0:o.toString()),null}}function z(e){const t=q(e);return v(t,"internal-error"),v("undefined"!==typeof t.exp,"internal-error"),v("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
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
 */async function H(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r.ZR&&G(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function G({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */class K{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
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
 */class W{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=V(this.lastLoginAt),this.creationTime=V(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function J(e){var t;const n=e.auth,r=await e.getIdToken(),i=await H(e,U(n,{idToken:r}));v(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?X(o.providerUserInfo):[],a=Y(e.providerData,s),c=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new W(o.createdAt,o.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function Q(e){const t=(0,r.m9)(e);await J(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Y(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function X(e){return e.map((e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
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
 */async function Z(e,t){const n=await N(e,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=L(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",C.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
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
 */class ee{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v("undefined"!==typeof e.idToken,"internal-error"),v("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):z(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return v(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await Z(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new ee;return n&&(v("string"===typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(v("string"===typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(v("number"===typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ee,this.toJSON())}_performRefresh(){return w("not implemented")}}
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
 */function te(e,t){v("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ne{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new K(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new W(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await H(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return $(this,e)}reload(){return Q(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ne(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await J(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await H(this,F(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:w,emailVerified:b,isAnonymous:E,providerData:_,stsTokenManager:S}=t;v(w&&S,e,"internal-error");const T=ee.fromJSON(this.name,S);v("string"===typeof w,e,"internal-error"),te(l,e.name),te(h,e.name),v("boolean"===typeof b,e,"internal-error"),v("boolean"===typeof E,e,"internal-error"),te(d,e.name),te(f,e.name),te(p,e.name),te(m,e.name),te(g,e.name),te(y,e.name);const I=new ne({uid:w,auth:e,email:h,emailVerified:b,displayName:l,isAnonymous:E,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:y});return _&&Array.isArray(_)&&(I.providerData=_.map((e=>Object.assign({},e)))),m&&(I._redirectEventId=m),I}static async _fromIdTokenResponse(e,t,n=!1){const r=new ee;r.updateFromServerResponse(t);const i=new ne({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await J(i),i}}
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
 */const re=new Map;function ie(e){b(e instanceof Function,"Expected a class definition");let t=re.get(e);return t?(b(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,re.set(e,t),t)}
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
 */class oe{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}oe.type="NONE";const se=oe;
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
 */function ae(e,t,n){return`firebase:${e}:${t}:${n}`}class ce{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ae(this.userKey,r.apiKey,i),this.fullPersistenceKey=ae("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ne._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ce(ie(se),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||ie(se);const o=ae(n,e.config.apiKey,e.name);let s=null;for(const u of t)try{const t=await u._get(o);if(t){const n=ne._fromJSON(e,t);u!==i&&(s=n),i=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(o)}catch(c){}}))),new ce(i,e,n)):new ce(i,e,n)}}
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
 */function ue(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(fe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(le(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(me(t))return"Blackberry";if(ge(t))return"Webos";if(he(t))return"Safari";if((t.includes("chrome/")||de(t))&&!t.includes("edge/"))return"Chrome";if(pe(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function le(e=(0,r.z$)()){return/firefox\//i.test(e)}function he(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function de(e=(0,r.z$)()){return/crios\//i.test(e)}function fe(e=(0,r.z$)()){return/iemobile/i.test(e)}function pe(e=(0,r.z$)()){return/android/i.test(e)}function me(e=(0,r.z$)()){return/blackberry/i.test(e)}function ge(e=(0,r.z$)()){return/webos/i.test(e)}function ye(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ve(e=(0,r.z$)()){var t;return ye(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function we(){return(0,r.w1)()&&10===document.documentMode}function be(e=(0,r.z$)()){return ye(e)||pe(e)||ge(e)||me(e)||/windows phone/i.test(e)||fe(e)}function Ee(){try{return!(!window||window===window.top)}catch(e){return!1}}
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
 */function _e(e,t=[]){let n;switch(e){case"Browser":n=ue((0,r.z$)());break;case"Worker":n=`${ue((0,r.z$)())}-${e}`;break;default:n=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.Jn}/${o}`}
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
 */async function Se(e,t){return P(e,"GET","/v2/recaptchaConfig",R(e,t))}
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
 */function Te(e){return void 0!==e&&void 0!==e.enterprise}class Ie{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
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
 */function ke(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Ae(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=m("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",ke().appendChild(r)}))}function Ce(e){return`__${e}${Math.floor(1e6*Math.random())}`}const Oe="https://www.google.com/recaptcha/enterprise.js?render=",xe="recaptcha-enterprise",Re="NO_RECAPTCHA";class Pe{constructor(e){this.type=xe,this.auth=Me(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{Se(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new Ie(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const i=window.grecaptcha;Te(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(Re)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{n(this.auth).then((n=>{if(!t&&Te(window.grecaptcha))r(n,e,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));Ae(Oe+n).then((()=>{r(n,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function Ne(e,t,n,r=!1){const i=new Pe(e);let o;try{o=await i.verify(n)}catch(a){o=await i.verify(n,!0)}const s=Object.assign({},t);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}
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
 */class De{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
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
 */class Le{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new je(this),this.idTokenSubscription=new je(this),this.beforeStateQueue=new De(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ie(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ce.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null===r||void 0===r?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==o||!(null===s||void 0===s?void 0:s.user)||(r=s.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(o)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await J(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=I()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(ie(e))}))}async initializeRecaptchaConfig(){const e=await Se(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Ie(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){const e=new Pe(this);e.verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ie(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await ce.create(this,[ie(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return v(o,this,"internal-error"),o.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_e(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&d(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function Me(e){return(0,r.m9)(e)}class je{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
 */function Fe(e,t){const n=(0,i.qX)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==t&&void 0!==t?t:{}))return e;p(e,"already-initialized")}const o=n.initialize({options:t});return o}function Ue(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ie);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}function Ve(e,t,n){const r=Me(e);v(r._canInitEmulator,r,"emulator-config-failed"),v(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),o=$e(t),{host:s,port:a}=Be(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${o}//${s}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||ze()}function $e(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Be(e){const t=$e(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:qe(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:qe(t)}}}function qe(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function ze(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */class He{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return w("not implemented")}_getIdTokenResponse(e){return w("not implemented")}_linkToIdToken(e,t){return w("not implemented")}_getReauthenticationResolver(e){return w("not implemented")}}
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
 */async function Ge(e,t){return P(e,"POST","/v1/accounts:update",t)}
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
async function Ke(e,t){return D(e,"POST","/v1/accounts:signInWithPassword",R(e,t))}async function We(e,t){return P(e,"POST","/v1/accounts:sendOobCode",R(e,t))}async function Je(e,t){return We(e,t)}async function Qe(e,t){return We(e,t)}
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
async function Ye(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",R(e,t))}async function Xe(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",R(e,t))}
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
 */class Ze extends He{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ze(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ze(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await Ne(e,n,"signInWithPassword");return Ke(e,t)}return Ke(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await Ne(e,n,"signInWithPassword");return Ke(e,t)}return Promise.reject(t)}));case"emailLink":return Ye(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ge(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Xe(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function et(e,t){return D(e,"POST","/v1/accounts:signInWithIdp",R(e,t))}
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
 */const tt="http://localhost";class nt extends He{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new nt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=o(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new nt(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return et(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,et(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,et(e,t)}buildRequest(){const e={requestUri:tt,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
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
 */async function rt(e,t){return P(e,"POST","/v1/accounts:sendVerificationCode",R(e,t))}async function it(e,t){return D(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,t))}async function ot(e,t){const n=await D(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,t));if(n.temporaryProof)throw j(e,"account-exists-with-different-credential",n);return n}const st={["USER_NOT_FOUND"]:"user-not-found"};async function at(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return D(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,n),st)}
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
 */class ct extends He{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ct({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ct({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return it(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return ot(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return at(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new ct({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
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
 */function ut(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lt(e){const t=(0,r.zd)((0,r.pd)(e))["link"],n=t?(0,r.zd)((0,r.pd)(t))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(e))["deep_link_id"],o=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return o||i||n||t||e}class ht{constructor(e){var t,n,i,o,s,a;const c=(0,r.zd)((0,r.pd)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=ut(null!==(i=c["mode"])&&void 0!==i?i:null);v(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=lt(e);try{return new ht(t)}catch(n){return null}}}
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
class dt{constructor(){this.providerId=dt.PROVIDER_ID}static credential(e,t){return Ze._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ht.parseLink(t);return v(n,"argument-error"),Ze._fromEmailAndCode(e,n.code,n.tenantId)}}dt.PROVIDER_ID="password",dt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",dt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class ft{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class pt extends ft{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
class mt extends pt{constructor(){super("facebook.com")}static credential(e){return nt._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch(t){return null}}}mt.FACEBOOK_SIGN_IN_METHOD="facebook.com",mt.PROVIDER_ID="facebook.com";
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
class gt extends pt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return nt._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return gt.credential(t,n)}catch(r){return null}}}gt.GOOGLE_SIGN_IN_METHOD="google.com",gt.PROVIDER_ID="google.com";
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
class yt extends pt{constructor(){super("github.com")}static credential(e){return nt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch(t){return null}}}yt.GITHUB_SIGN_IN_METHOD="github.com",yt.PROVIDER_ID="github.com";
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
class vt extends pt{constructor(){super("twitter.com")}static credential(e,t){return nt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return vt.credential(t,n)}catch(r){return null}}}
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
async function wt(e,t){return D(e,"POST","/v1/accounts:signUp",R(e,t))}
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
 */vt.TWITTER_SIGN_IN_METHOD="twitter.com",vt.PROVIDER_ID="twitter.com";class bt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await ne._fromIdTokenResponse(e,n,r),o=Et(n),s=new bt({user:i,providerId:o,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Et(n);return new bt({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Et(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class _t extends r.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,_t.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new _t(e,t,n,r)}}function St(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw _t._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */async function Tt(e,t,n=!1){const r=await H(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return bt._forOperation(e,"link",r)}
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
async function It(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await H(e,St(r,i,t,e),n);v(o.idToken,r,"internal-error");const s=q(o.idToken);v(s,r,"internal-error");const{sub:a}=s;return v(e.uid===a,r,"user-mismatch"),bt._forOperation(e,i,o)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&p(r,"user-mismatch"),o}}
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
 */async function kt(e,t,n=!1){const r="signIn",i=await St(e,r,t),o=await bt._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function At(e,t){return kt(Me(e),t)}
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
function Ct(e,t,n){var r;v((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),v("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(v(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(v(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
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
 */async function Ot(e,t,n){var r;const i=Me(e),o={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await Ne(i,o,"getOobCode",!0);n&&Ct(i,e,n),await Qe(i,e)}else n&&Ct(i,o,n),await Qe(i,o).catch((async e=>{if("auth/missing-recaptcha-token"!==e.code)return Promise.reject(e);{console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const e=await Ne(i,o,"getOobCode",!0);n&&Ct(i,e,n),await Qe(i,e)}}))}async function xt(e,t,n){var r;const i=Me(e),o={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let s;if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await Ne(i,o,"signUpPassword");s=wt(i,e)}else s=wt(i,o).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await Ne(i,o,"signUpPassword");return wt(i,e)}return Promise.reject(e)}));const a=await s.catch((e=>Promise.reject(e))),c=await bt._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function Rt(e,t,n){return At((0,r.m9)(e),dt.credential(t,n))}
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
 */async function Pt(e,t){const n=(0,r.m9)(e),i=await e.getIdToken(),o={requestType:"VERIFY_EMAIL",idToken:i};t&&Ct(n.auth,o,t);const{email:s}=await Je(n.auth,o);s!==e.email&&await e.reload()}
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
async function Nt(e,t){return P(e,"POST","/v1/accounts:update",t)}
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
 */async function Dt(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=(0,r.m9)(e),o=await i.getIdToken(),s={idToken:o,displayName:t,photoUrl:n,returnSecureToken:!0},a=await H(i,Nt(i.auth,s));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const c=i.providerData.find((({providerId:e})=>"password"===e));c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function Lt(e,t){return Mt((0,r.m9)(e),t,null)}async function Mt(e,t,n){const{auth:r}=e,i=await e.getIdToken(),o={idToken:i,returnSecureToken:!0};t&&(o.email=t),n&&(o.password=n);const s=await H(e,Ge(r,o));await e._updateTokensIfNecessary(s,!0)}
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
 */function jt(e,t,n,i){return(0,r.m9)(e).onIdTokenChanged(t,n,i)}function Ft(e,t,n){return(0,r.m9)(e).beforeAuthStateChanged(t,n)}function Ut(e,t,n,i){return(0,r.m9)(e).onAuthStateChanged(t,n,i)}function Vt(e){return(0,r.m9)(e).signOut()}
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
function $t(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:start",R(e,t))}function Bt(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:finalize",R(e,t))}function qt(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:start",R(e,t))}function zt(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:finalize",R(e,t))}new WeakMap;const Ht="__sak";
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
 */class Gt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ht,"1"),this.storage.removeItem(Ht),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */function Kt(){const e=(0,r.z$)();return he(e)||ye(e)}const Wt=1e3,Jt=10;class Qt extends Gt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Kt()&&Ee(),this.fallbackToPolling=be(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);we()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Jt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Wt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qt.type="LOCAL";const Yt=Qt;
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
 */class Xt extends Gt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Xt.type="SESSION";const Zt=Xt;
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
 */function en(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
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
 */class tn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new tn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map((async e=>e(t.origin,i))),a=await en(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function nn(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
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
 */tn.receivers=[];class rn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((s,a)=>{const c=nn("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
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
 */function on(){return window}function sn(e){on().location.href=e}
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
 */function an(){return"undefined"!==typeof on()["WorkerGlobalScope"]&&"function"===typeof on()["importScripts"]}async function cn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function un(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function ln(){return an()?self:null}
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
 */const hn="firebaseLocalStorageDb",dn=1,fn="firebaseLocalStorage",pn="fbase_key";class mn{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function gn(e,t){return e.transaction([fn],t?"readwrite":"readonly").objectStore(fn)}function yn(){const e=indexedDB.deleteDatabase(hn);return new mn(e).toPromise()}function vn(){const e=indexedDB.open(hn,dn);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(fn,{keyPath:pn})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(fn)?t(n):(n.close(),await yn(),t(await vn()))}))}))}async function wn(e,t,n){const r=gn(e,!0).put({[pn]:t,value:n});return new mn(r).toPromise()}async function bn(e,t){const n=gn(e,!1).get(t),r=await new mn(n).toPromise();return void 0===r?null:r.value}function En(e,t){const n=gn(e,!0).delete(t);return new mn(n).toPromise()}const _n=800,Sn=3;class Tn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await vn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Sn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return an()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tn._getInstance(ln()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await cn(),!this.activeServiceWorker)return;this.sender=new rn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&un()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vn();return await wn(e,Ht,"1"),await En(e,Ht),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>wn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>bn(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>En(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=gn(e,!1).getAll();return new mn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),_n)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Tn.type="LOCAL";const In=Tn;
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
 */function kn(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:start",R(e,t))}function An(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:finalize",R(e,t))}function Cn(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:finalize",R(e,t))}
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
Ce("rcb"),new k(3e4,6e4);
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
const On="recaptcha";async function xn(e,t,n){var r;const i=await n.verify();try{let o;if(v("string"===typeof i,e,"argument-error"),v(n.type===On,e,"argument-error"),o="string"===typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){v("enroll"===t.type,e,"internal-error");const n=await $t(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{v("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;v(n,e,"missing-multi-factor-info");const s=await kn(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await rt(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
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
class Rn{constructor(e){this.providerId=Rn.PROVIDER_ID,this.auth=Me(e)}verifyPhoneNumber(e,t){return xn(this.auth,e,(0,r.m9)(t))}static credential(e,t){return ct._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Rn.credentialFromTaggedObject(t)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?ct._fromTokenResponse(t,n):null}}
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
function Pn(e,t){return t?ie(t):(v(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */Rn.PROVIDER_ID="phone",Rn.PHONE_SIGN_IN_METHOD="phone";class Nn extends He{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return et(e,this._buildIdpRequest())}_linkToIdToken(e,t){return et(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return et(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Dn(e){return kt(e.auth,new Nn(e),e.bypassAuthState)}function Ln(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),It(n,new Nn(e),e.bypassAuthState)}async function Mn(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),Tt(n,new Nn(e),e.bypassAuthState)}
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
 */class jn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Dn;case"linkViaPopup":case"linkViaRedirect":return Mn;case"reauthViaPopup":case"reauthViaRedirect":return Ln;default:p(this.auth,"internal-error")}}resolve(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const Fn=new k(2e3,1e4);class Un extends jn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Un.currentPopupAction&&Un.currentPopupAction.cancel(),Un.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const e=nn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(m(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(m(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Un.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(m(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Fn.get())};e()}}Un.currentPopupAction=null;
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
const Vn="pendingRedirect",$n=new Map;class Bn extends jn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=$n.get(this.auth._key());if(!e){try{const t=await qn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}$n.set(this.auth._key(),e)}return this.bypassAuthState||$n.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function qn(e,t){const n=Gn(t),r=Hn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function zn(e,t){$n.set(e._key(),t)}function Hn(e){return ie(e._redirectPersistence)}function Gn(e){return ae(Vn,e.config.apiKey,e.name)}
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
 */async function Kn(e,t,n=!1){const r=Me(e),i=Pn(r,t),o=new Bn(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}
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
const Wn=6e5;class Jn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Xn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Yn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(m(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Wn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qn(e))}saveEventToCache(e){this.cachedEventUids.add(Qn(e)),this.lastProcessedEventTime=Date.now()}}function Qn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Yn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Xn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yn(e);default:return!1}}
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
 */async function Zn(e,t={}){return P(e,"GET","/v1/projects",t)}
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
 */const er=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tr=/^https?/;async function nr(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Zn(e);for(const r of t)try{if(rr(r))return}catch(n){}p(e,"unauthorized-domain")}function rr(e){const t=E(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!tr.test(n))return!1;if(er.test(e))return r===e;const i=e.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
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
 */const ir=new k(3e4,6e4);function or(){const e=on().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function sr(e){return new Promise(((t,n)=>{var r,i,o;function s(){or(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{or(),n(m(e,"network-request-failed"))},timeout:ir.get()})}if(null===(i=null===(r=on().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=on().gapi)||void 0===o?void 0:o.load)){const t=Ce("iframefcb");return on()[t]=()=>{gapi.load?s():n(m(e,"network-request-failed"))},Ae(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw ar=null,e}))}let ar=null;function cr(e){return ar=ar||sr(e),ar}
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
 */const ur=new k(5e3,15e3),lr="__/auth/iframe",hr="emulator/auth/iframe",dr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pr(e){const t=e.config;v(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?A(t,hr):`https://${e.config.authDomain}/${lr}`,o={apiKey:t.apiKey,appName:e.name,v:i.Jn},s=fr.get(e.config.apiHost);s&&(o.eid=s);const a=e._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${(0,r.xO)(o).slice(1)}`}async function mr(e){const t=await cr(e),n=on().gapi;return v(n,e,"internal-error"),t.open({where:document.body,url:pr(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dr,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=m(e,"network-request-failed"),o=on().setTimeout((()=>{r(i)}),ur.get());function s(){on().clearTimeout(o),n(t)}t.ping(s).then(s,(()=>{r(i)}))}))))}
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
 */const gr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yr=500,vr=600,wr="_blank",br="http://localhost";class Er{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function _r(e,t,n,i=yr,o=vr){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},gr),{width:i.toString(),height:o.toString(),top:s,left:a}),l=(0,r.z$)().toLowerCase();n&&(c=de(l)?wr:n),le(l)&&(t=t||br,u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(ve(l)&&"_self"!==c)return Sr(t||"",c),new Er(null);const d=window.open(t||"",c,h);v(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Er(d)}function Sr(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */const Tr="__/auth/handler",Ir="emulator/auth/handler",kr=encodeURIComponent("fac");async function Ar(e,t,n,o,s,a){v(e.config.authDomain,e,"auth-domain-config-required"),v(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:o,v:i.Jn,eventId:s};if(t instanceof ft){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof pt){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];const l=await e._getAppCheckToken(),h=l?`#${kr}=${encodeURIComponent(l)}`:"";return`${Cr(e)}?${(0,r.xO)(u).slice(1)}${h}`}function Cr({config:e}){return e.emulator?A(e,Ir):`https://${e.authDomain}/${Tr}`}
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
 */const Or="webStorageSupport";class xr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zt,this._completeRedirectFn=Kn,this._overrideRedirectResult=zn}async _openPopup(e,t,n,r){var i;b(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ar(e,t,n,E(),r);return _r(e,o,nn())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await Ar(e,t,n,E(),r);return sn(i),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await mr(e),n=new Jn(e);return t.register("authEvent",(t=>{v(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Or,{type:Or},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Or];void 0!==i&&t(!!i),p(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=nr(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return be()||he()||ye()}}const Rr=xr;class Pr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return w("unexpected MultiFactorSessionType")}}}class Nr extends Pr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Nr(e)}_finalizeEnroll(e,t,n){return Bt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return An(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Dr{constructor(){}static assertion(e){return Nr._fromCredential(e)}}Dr.FACTOR_ID="phone";class Lr{static assertionForEnrollment(e,t){return Mr._fromSecret(e,t)}static assertionForSignIn(e,t){return Mr._fromEnrollmentId(e,t)}static async generateSecret(e){const t=e;v("undefined"!==typeof t.auth,"internal-error");const n=await qt(t.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return jr._fromStartTotpMfaEnrollmentResponse(n,t.auth)}}Lr.FACTOR_ID="totp";class Mr extends Pr{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new Mr(t,void 0,e)}static _fromEnrollmentId(e,t){return new Mr(t,e)}async _finalizeEnroll(e,t,n){return v("undefined"!==typeof this.secret,e,"argument-error"),zt(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){v(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return Cn(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class jr{constructor(e,t,n,r,i,o,s){this.sessionInfo=o,this.auth=s,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new jr(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(Fr(e)||Fr(t))&&(r=!0),r&&(Fr(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Fr(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Fr(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var Ur="@firebase/auth",Vr="0.23.2";
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
class $r{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
 */function Br(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function qr(e){(0,i.Xd)(new a.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;v(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_e(e)},u=new Le(r,i,o,c);return Ue(u,n),u}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,i.Xd)(new a.wA("auth-internal",(e=>{const t=Me(e.getProvider("auth").getImmediate());return(e=>new $r(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(Ur,Vr,Br(e)),(0,i.KN)(Ur,Vr,"esm2017")}
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
 */const zr=300,Hr=(0,r.Pz)("authIdTokenMaxAge")||zr;let Gr=null;const Kr=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Hr)return;const i=null===n||void 0===n?void 0:n.token;Gr!==i&&(Gr=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Wr(e=(0,i.Mq)()){const t=(0,i.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Fe(e,{popupRedirectResolver:Rr,persistence:[In,Yt,Zt]}),o=(0,r.Pz)("authTokenSyncURL");if(o){const e=Kr(o);Ft(n,e,(()=>e(n.currentUser))),jt(n,(t=>e(t)))}const s=(0,r.q4)("auth");return s&&Ve(n,`http://${s}`),n}qr("Browser")},6100:(e,t,n)=>{n.d(t,{EK:()=>Ei,ET:()=>vd,Ab:()=>Td,vr:()=>Sd,hJ:()=>ch,oe:()=>yd,JU:()=>uh,QT:()=>dd,PL:()=>pd,ad:()=>fh,cf:()=>wd,IO:()=>Yh,Bt:()=>_d,pl:()=>md,r7:()=>gd,ar:()=>Zh});var r,i=n(5816),o=n(8463),s=n(3333),a=n(4444),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},u={},l=l||{},h=c||self;function d(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function f(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function p(e){return Object.prototype.hasOwnProperty.call(e,m)&&e[m]||(e[m]=++g)}var m="closure_uid_"+(1e9*Math.random()>>>0),g=0;function y(e,t,n){return e.call.apply(e.bind,arguments)}function v(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function w(e,t,n){return w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:v,w.apply(null,arguments)}function b(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function E(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return t.prototype[n].apply(e,i)}}function _(){this.s=this.s,this.o=this.o}var S=0;_.prototype.s=!1,_.prototype.sa=function(){this.s||(this.s=!0,this.N(),0==S)||p(this)},_.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const T=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function I(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function k(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(d(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function A(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{h.addEventListener("test",(()=>{}),t),h.removeEventListener("test",(()=>{}),t)}catch(n){}return e}();function O(e){return/^[\s\xa0]*$/.test(e)}function x(){var e=h.navigator;return e&&(e=e.userAgent)?e:""}function R(e){return-1!=x().indexOf(e)}function P(e){return P[" "](e),e}function N(e,t){var n=br;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}P[" "]=function(){};var D,L,M=R("Opera"),j=R("Trident")||R("MSIE"),F=R("Edge"),U=F||j,V=R("Gecko")&&!(-1!=x().toLowerCase().indexOf("webkit")&&!R("Edge"))&&!(R("Trident")||R("MSIE"))&&!R("Edge"),$=-1!=x().toLowerCase().indexOf("webkit")&&!R("Edge");function B(){var e=h.document;return e?e.documentMode:void 0}e:{var q="",z=function(){var e=x();return V?/rv:([^\);]+)(\)|;)/.exec(e):F?/Edge\/([\d\.]+)/.exec(e):j?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):$?/WebKit\/(\S+)/.exec(e):M?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(z&&(q=z?z[1]:""),j){var H=B();if(null!=H&&H>parseFloat(q)){D=String(H);break e}}D=q}if(h.document&&j){var G=B();L=G||(parseInt(D,10)||void 0)}else L=void 0;var K=L;function W(e,t){if(A.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(V){e:{try{P(t.nodeName);var i=!0;break e}catch(o){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:J[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&W.$.h.call(this)}}E(W,A);var J={2:"touch",3:"pen",4:"mouse"};W.prototype.h=function(){W.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Q="closure_listenable_"+(1e6*Math.random()|0),Y=0;function X(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++Y,this.fa=this.ia=!1}function Z(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function ee(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function te(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function ne(e){const t={};for(const n in e)t[n]=e[n];return t}const re="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ie(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<re.length;t++)n=re[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function oe(e){this.src=e,this.g={},this.h=0}function se(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],o=T(i,t);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(Z(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ae(e,t,n,r){for(var i=0;i<e.length;++i){var o=e[i];if(!o.fa&&o.listener==t&&o.capture==!!n&&o.la==r)return i}return-1}oe.prototype.add=function(e,t,n,r,i){var o=e.toString();e=this.g[o],e||(e=this.g[o]=[],this.h++);var s=ae(e,t,r,i);return-1<s?(t=e[s],n||(t.ia=!1)):(t=new X(t,this.src,o,!!r,i),t.ia=n,e.push(t)),t};var ce="closure_lm_"+(1e6*Math.random()|0),ue={};function le(e,t,n,r,i){if(r&&r.once)return fe(e,t,n,r,i);if(Array.isArray(t)){for(var o=0;o<t.length;o++)le(e,t[o],n,r,i);return null}return n=be(n),e&&e[Q]?e.O(t,n,f(r)?!!r.capture:!!r,i):he(e,t,n,!1,r,i)}function he(e,t,n,r,i,o){if(!t)throw Error("Invalid event type");var s=f(i)?!!i.capture:!!i,a=ve(e);if(a||(e[ce]=a=new oe(e)),n=a.add(t,n,r,s,o),n.proxy)return n;if(r=de(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)C||(i=s),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(ge(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function de(){function e(n){return t.call(e.src,e.listener,n)}const t=ye;return e}function fe(e,t,n,r,i){if(Array.isArray(t)){for(var o=0;o<t.length;o++)fe(e,t[o],n,r,i);return null}return n=be(n),e&&e[Q]?e.P(t,n,f(r)?!!r.capture:!!r,i):he(e,t,n,!0,r,i)}function pe(e,t,n,r,i){if(Array.isArray(t))for(var o=0;o<t.length;o++)pe(e,t[o],n,r,i);else r=f(r)?!!r.capture:!!r,n=be(n),e&&e[Q]?(e=e.i,t=String(t).toString(),t in e.g&&(o=e.g[t],n=ae(o,n,r,i),-1<n&&(Z(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete e.g[t],e.h--)))):e&&(e=ve(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ae(t,n,r,i)),(n=-1<e?t[e]:null)&&me(n))}function me(e){if("number"!==typeof e&&e&&!e.fa){var t=e.src;if(t&&t[Q])se(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ge(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ve(t))?(se(n,e),0==n.h&&(n.src=null,t[ce]=null)):Z(e)}}}function ge(e){return e in ue?ue[e]:ue[e]="on"+e}function ye(e,t){if(e.fa)e=!0;else{t=new W(t,this);var n=e.listener,r=e.la||e.src;e.ia&&me(e),e=n.call(r,t)}return e}function ve(e){return e=e[ce],e instanceof oe?e:null}var we="__closure_events_fn_"+(1e9*Math.random()>>>0);function be(e){return"function"===typeof e?e:(e[we]||(e[we]=function(t){return e.handleEvent(t)}),e[we])}function Ee(){_.call(this),this.i=new oe(this),this.S=this,this.J=null}function _e(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,"string"===typeof t)t=new A(t,e);else if(t instanceof A)t.target=t.target||e;else{var i=t;t=new A(r,e),ie(t,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=t.g=n[o];i=Se(s,r,!0,t)&&i}if(s=t.g=e,i=Se(s,r,!0,t)&&i,i=Se(s,r,!1,t)&&i,n)for(o=0;o<n.length;o++)s=t.g=n[o],i=Se(s,r,!1,t)&&i}function Se(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,o=0;o<t.length;++o){var s=t[o];if(s&&!s.fa&&s.capture==n){var a=s.listener,c=s.la||s.src;s.ia&&se(e.i,s),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}E(Ee,_),Ee.prototype[Q]=!0,Ee.prototype.removeEventListener=function(e,t,n,r){pe(this,e,t,n,r)},Ee.prototype.N=function(){if(Ee.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Z(n[r]);delete t.g[e],t.h--}}this.J=null},Ee.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Ee.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Te=h.JSON.stringify;class Ie{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function ke(){var e=De;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Ae{constructor(){this.h=this.g=null}add(e,t){const n=Ce.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Ce=new Ie((()=>new Oe),(e=>e.reset()));class Oe{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function xe(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Re(e){h.setTimeout((()=>{throw e}),0)}let Pe,Ne=!1,De=new Ae,Le=()=>{const e=h.Promise.resolve(void 0);Pe=()=>{e.then(Me)}};var Me=()=>{for(var e;e=ke();){try{e.h.call(e.g)}catch(n){Re(n)}var t=Ce;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ne=!1};function je(e,t){Ee.call(this),this.h=e||1,this.g=t||h,this.j=w(this.qb,this),this.l=Date.now()}function Fe(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function Ue(e,t,n){if("function"===typeof e)n&&(e=w(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=w(e.handleEvent,e)}return 2147483647<Number(t)?-1:h.setTimeout(e,t||0)}function Ve(e){e.g=Ue((()=>{e.g=null,e.i&&(e.i=!1,Ve(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}E(je,Ee),r=je.prototype,r.ga=!1,r.T=null,r.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),_e(this,"tick"),this.ga&&(Fe(this),this.start()))}},r.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.N=function(){je.$.N.call(this),Fe(this),delete this.g};class $e extends _{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ve(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Be(e){_.call(this),this.h=e,this.g={}}E(Be,_);var qe=[];function ze(e,t,n,r){Array.isArray(n)||(n&&(qe[0]=n.toString()),n=qe);for(var i=0;i<n.length;i++){var o=le(t,n[i],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}}function He(e){ee(e.g,(function(e,t){this.g.hasOwnProperty(t)&&me(e)}),e),e.g={}}function Ge(){this.g=!0}function Ke(e,t,n,r,i,o){e.info((function(){if(e.g)if(o)for(var s="",a=o.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");s=2<=h.length&&"type"==h[1]?s+(l+"=")+u+"&":s+(l+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+s}))}function We(e,t,n,r,i,o,s){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+o+" "+s}))}function Je(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+Ye(e,n)+(r?" "+r:"")}))}function Qe(e,t){e.info((function(){return"TIMEOUT: "+t}))}function Ye(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<i.length;s++)i[s]=""}}}return Te(n)}catch(a){return t}}Be.prototype.N=function(){Be.$.N.call(this),He(this)},Be.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ge.prototype.Ea=function(){this.g=!1},Ge.prototype.info=function(){};var Xe={},Ze=null;function et(){return Ze=Ze||new Ee}function tt(e){A.call(this,Xe.Ta,e)}function nt(e){const t=et();_e(t,new tt(t))}function rt(e,t){A.call(this,Xe.STAT_EVENT,e),this.stat=t}function it(e){const t=et();_e(t,new rt(t,e))}function ot(e,t){A.call(this,Xe.Ua,e),this.size=t}function st(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){e()}),t)}Xe.Ta="serverreachability",E(tt,A),Xe.STAT_EVENT="statevent",E(rt,A),Xe.Ua="timingevent",E(ot,A);var at={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ct={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ut(){}function lt(e){return e.h||(e.h=e.i())}function ht(){}ut.prototype.h=null;var dt,ft={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function pt(){A.call(this,"d")}function mt(){A.call(this,"c")}function gt(){}function yt(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Be(this),this.P=wt,e=U?125:void 0,this.V=new je(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new vt}function vt(){this.i=null,this.g="",this.h=!1}E(pt,A),E(mt,A),E(gt,ut),gt.prototype.g=function(){return new XMLHttpRequest},gt.prototype.i=function(){return{}},dt=new gt;var wt=45e3,bt={},Et={};function _t(e,t,n){e.L=1,e.v=zt(Ut(t)),e.s=n,e.S=!0,St(e,null)}function St(e,t){e.G=Date.now(),At(e),e.A=Ut(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),rn(n.i,"t",r),e.C=0,n=e.l.J,e.h=new vt,e.g=ur(e.l,n?t:null,!e.s),0<e.O&&(e.M=new $e(w(e.Pa,e,e.g),e.O)),ze(e.U,e.g,"readystatechange",e.nb),t=e.I?ne(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),nt(),Ke(e.j,e.u,e.A,e.m,e.W,e.s)}function Tt(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function It(e,t,n){let r,i=!0;for(;!e.J&&e.C<n.length;){if(r=kt(e,n),r==Et){4==t&&(e.o=4,it(14),i=!1),Je(e.j,e.m,null,"[Incomplete Response]");break}if(r==bt){e.o=4,it(15),Je(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Je(e.j,e.m,r,null),Pt(e,r)}Tt(e)&&r!=Et&&r!=bt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,it(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),tr(t),t.M=!0,it(11))):(Je(e.j,e.m,n,"[Invalid Chunked Response]"),Rt(e),xt(e))}function kt(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Et:(n=Number(t.substring(n,r)),isNaN(n)?bt:(r+=1,r+n>t.length?Et:(t=t.slice(r,r+n),e.C=r+n,t)))}function At(e){e.Y=Date.now()+e.P,Ct(e,e.P)}function Ct(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=st(w(e.lb,e),t)}function Ot(e){e.B&&(h.clearTimeout(e.B),e.B=null)}function xt(e){0==e.l.H||e.J||ir(e.l,e)}function Rt(e){Ot(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,Fe(e.V),He(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Pt(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||dn(n.i,e)))if(!e.K&&dn(n.i,e)&&3==n.H){try{var r=n.Ja.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;rr(n),Gn(n)}er(n),it(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=st(w(n.ib,n),6e3));if(1>=hn(n.i)&&n.oa){try{n.oa()}catch(u){}n.oa=void 0}}else sr(n,11)}else if((e.K||n.g==e)&&rr(n),!O(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.K=u[1],n.pa=u[2];const t=u[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));const i=u[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var o=r.i;o.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(o.j=o.l,o.g=new Set,o.h&&(fn(o,o.h),o.h=null))}if(r.F){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.Da=e,qt(r.I,r.F,e))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var s=e;if(r.wa=cr(r,r.J?r.pa:null,r.Y),s.K){pn(r.i,s);var a=s,c=r.L;c&&a.setTimeout(c),a.B&&(Ot(a),At(a)),r.g=s}else Zn(r);0<n.j.length&&Wn(n)}else"stop"!=u[0]&&"close"!=u[0]||sr(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?sr(n,7):Hn(n):"noop"!=u[0]&&n.h&&n.h.Aa(u),n.A=0)}nt(4)}catch(u){}}function Nt(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(d(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Dt(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(d(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Lt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(d(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=Dt(e),r=Nt(e),i=r.length,o=0;o<i;o++)t.call(void 0,r[o],n&&n[o],e)}r=yt.prototype,r.setTimeout=function(e){this.P=e},r.nb=function(e){e=e.target;const t=this.M;t&&3==Fn(e)?t.l():this.Pa(e)},r.Pa=function(e){try{if(e==this.g)e:{const l=Fn(this.g);var t=this.g.Ia();const d=this.g.da();if(!(3>l)&&(3!=l||U||this.g&&(this.h.h||this.g.ja()||Un(this.g)))){this.J||4!=l||7==t||nt(8==t||0>=d?3:2),Ot(this);var n=this.g.da();this.ca=n;t:if(Tt(this)){var r=Un(this.g);e="";var i=r.length,o=4==Fn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Rt(this),xt(this);var s="";break t}this.h.i=new h.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:o&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,s=this.h.g}else s=this.g.ja();if(this.i=200==n,We(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,it(12),Rt(this),xt(this);break e}Je(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Pt(this,n)}this.S?(It(this,l,s),U&&this.i&&3==l&&(ze(this.U,this.V,"tick",this.mb),this.V.start())):(Je(this.j,this.m,s,null),Pt(this,s)),4==l&&Rt(this),this.i&&!this.J&&(4==l?ir(this.l,this):(this.i=!1,At(this)))}else Vn(this.g),400==n&&0<s.indexOf("Unknown SID")?(this.o=3,it(12)):(this.o=0,it(13)),Rt(this),xt(this)}}}catch(l){}},r.mb=function(){if(this.g){var e=Fn(this.g),t=this.g.ja();this.C<t.length&&(Ot(this),It(this,e,t),this.i&&4!=e&&At(this))}},r.cancel=function(){this.J=!0,Rt(this)},r.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Qe(this.j,this.A),2!=this.L&&(nt(),it(17)),Rt(this),this.o=2,xt(this)):Ct(this,this.Y-e)};var Mt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var o=e[n].substring(0,r);i=e[n].substring(r+1)}else o=e[n];t(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ft(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ft){this.h=e.h,Vt(this,e.j),this.s=e.s,this.g=e.g,$t(this,e.m),this.l=e.l;var t=e.i,n=new Zt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Bt(this,n),this.o=e.o}else e&&(t=String(e).match(Mt))?(this.h=!1,Vt(this,t[1]||"",!0),this.s=Ht(t[2]||""),this.g=Ht(t[3]||"",!0),$t(this,t[4]),this.l=Ht(t[5]||"",!0),Bt(this,t[6]||"",!0),this.o=Ht(t[7]||"")):(this.h=!1,this.i=new Zt(null,this.h))}function Ut(e){return new Ft(e)}function Vt(e,t,n){e.j=n?Ht(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function $t(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Bt(e,t,n){t instanceof Zt?(e.i=t,sn(e.i,e.h)):(n||(t=Gt(t,Yt)),e.i=new Zt(t,e.h))}function qt(e,t,n){e.i.set(t,n)}function zt(e){return qt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ht(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Gt(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Kt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Kt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Ft.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Gt(t,Wt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Gt(t,Wt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Gt(n,"/"==n.charAt(0)?Qt:Jt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Gt(n,Xt)),e.join("")};var Wt=/[#\/\?@]/g,Jt=/[#\?:]/g,Qt=/[#\?]/g,Yt=/[#\?@]/g,Xt=/#/g;function Zt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function en(e){e.g||(e.g=new Map,e.h=0,e.i&&jt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function tn(e,t){en(e),t=on(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function nn(e,t){return en(e),t=on(e,t),e.g.has(t)}function rn(e,t,n){tn(e,t),0<n.length&&(e.i=null,e.g.set(on(e,t),I(n)),e.h+=n.length)}function on(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function sn(e,t){t&&!e.j&&(en(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(tn(this,t),rn(this,n,e))}),e)),e.j=t}r=Zt.prototype,r.add=function(e,t){en(this),this.i=null,e=on(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){en(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},r.ta=function(){en(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},r.Z=function(e){en(this);let t=[];if("string"===typeof e)nn(this,e)&&(t=t.concat(this.g.get(on(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},r.set=function(e,t){return en(this),this.i=null,e=on(this,e),nn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const o=encodeURIComponent(String(r)),s=this.Z(r);for(r=0;r<s.length;r++){var i=o;""!==s[r]&&(i+="="+encodeURIComponent(String(s[r]))),e.push(i)}}return this.i=e.join("&")};var an=class{constructor(e,t){this.g=e,this.map=t}};function cn(e){this.l=e||un,h.PerformanceNavigationTiming?(e=h.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(h.g&&h.g.Ka&&h.g.Ka()&&h.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var un=10;function ln(e){return!!e.h||!!e.g&&e.g.size>=e.j}function hn(e){return e.h?1:e.g?e.g.size:0}function dn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function fn(e,t){e.g?e.g.add(t):e.h=t}function pn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function mn(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return I(e.i)}cn.prototype.cancel=function(){if(this.i=mn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var gn=class{stringify(e){return h.JSON.stringify(e,void 0)}parse(e){return h.JSON.parse(e,void 0)}};function yn(){this.g=new gn}function vn(e,t,n){const r=n||"";try{Lt(e,(function(e,n){let i=e;f(e)&&(i=Te(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function wn(e,t){const n=new Ge;if(h.Image){const r=new Image;r.onload=b(bn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=b(bn,n,r,"TestLoadImage: error",!1,t),r.onabort=b(bn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=b(bn,n,r,"TestLoadImage: timeout",!1,t),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function bn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(o){}}function En(e){this.l=e.fc||null,this.j=e.ob||!1}function _n(e,t){Ee.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Sn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}E(En,ut),En.prototype.g=function(){return new _n(this.l,this.j)},En.prototype.i=function(e){return function(){return e}}({}),E(_n,Ee);var Sn=0;function Tn(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function In(e){e.readyState=4,e.l=null,e.j=null,e.A=null,kn(e)}function kn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=_n.prototype,r.open=function(e,t){if(this.readyState!=Sn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,kn(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||h).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,In(this)),this.readyState=Sn},r.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,kn(this)),this.g&&(this.readyState=3,kn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Tn(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},r.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?In(this):kn(this),3==this.readyState&&Tn(this)}},r.Za=function(e){this.g&&(this.response=this.responseText=e,In(this))},r.Ya=function(e){this.g&&(this.response=e,In(this))},r.ka=function(){this.g&&In(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(_n.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var An=h.JSON.parse;function Cn(e){Ee.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=On,this.L=this.M=!1}E(Cn,Ee);var On="",xn=/^https?$/i,Rn=["POST","PUT"];function Pn(e){return j&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Nn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Dn(e),Mn(e)}function Dn(e){e.F||(e.F=!0,_e(e,"complete"),_e(e,"error"))}function Ln(e){if(e.h&&"undefined"!=typeof l&&(!e.C[1]||4!=Fn(e)||2!=e.da()))if(e.v&&4==Fn(e))Ue(e.La,0,e);else if(_e(e,"readystatechange"),4==Fn(e)){e.h=!1;try{const a=e.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var i=String(e.I).match(Mt)[1]||null;!i&&h.self&&h.self.location&&(i=h.self.location.protocol.slice(0,-1)),r=!xn.test(i?i.toLowerCase():"")}n=r}if(n)_e(e,"complete"),_e(e,"success");else{e.m=6;try{var o=2<Fn(e)?e.g.statusText:""}catch(s){o=""}e.j=o+" ["+e.da()+"]",Dn(e)}}finally{Mn(e)}}}function Mn(e,t){if(e.g){jn(e);const r=e.g,i=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||_e(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function jn(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(h.clearTimeout(e.A),e.A=null)}function Fn(e){return e.g?e.g.readyState:0}function Un(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case On:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(Wr){return null}}function Vn(e){const t={};e=(e.g&&2<=Fn(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(O(e[r]))continue;var n=xe(e[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const o=t[i]||[];t[i]=o,o.push(n)}te(t,(function(e){return e.join(", ")}))}function $n(e){let t="";return ee(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Bn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=$n(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):qt(e,t,n))}function qn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function zn(e){this.Ga=0,this.j=[],this.l=new Ge,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=qn("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=qn("baseRetryDelayMs",5e3,e),this.hb=qn("retryDelaySeedMs",1e4,e),this.eb=qn("forwardChannelMaxRetries",2,e),this.xa=qn("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new cn(e&&e.concurrentRequestLimit),this.Ja=new yn,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Hn(e){if(Kn(e),3==e.H){var t=e.W++,n=Ut(e.I);if(qt(n,"SID",e.K),qt(n,"RID",t),qt(n,"TYPE","terminate"),Yn(e,n),t=new yt(e,e.l,t),t.L=2,t.v=zt(Ut(n)),n=!1,h.navigator&&h.navigator.sendBeacon)try{n=h.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&h.Image&&((new Image).src=t.v,n=!0),n||(t.g=ur(t.l,null),t.g.ha(t.v)),t.G=Date.now(),At(t)}ar(e)}function Gn(e){e.g&&(tr(e),e.g.cancel(),e.g=null)}function Kn(e){Gn(e),e.u&&(h.clearTimeout(e.u),e.u=null),rr(e),e.i.cancel(),e.m&&("number"===typeof e.m&&h.clearTimeout(e.m),e.m=null)}function Wn(e){if(!ln(e.i)&&!e.m){e.m=!0;var t=e.Na;Pe||Le(),Ne||(Pe(),Ne=!0),De.add(t,e),e.C=0}}function Jn(e,t){return!(hn(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=t.F.concat(e.j),!0):!(1==e.H||2==e.H||e.C>=(e.cb?0:e.eb))&&(e.m=st(w(e.Na,e,t),or(e,e.C)),e.C++,!0))}function Qn(e,t){var n;n=t?t.m:e.W++;const r=Ut(e.I);qt(r,"SID",e.K),qt(r,"RID",n),qt(r,"AID",e.V),Yn(e,r),e.o&&e.s&&Bn(r,e.o,e.s),n=new yt(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Xn(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),fn(e.i,n),_t(n,r,t)}function Yn(e,t){e.na&&ee(e.na,(function(e,n){qt(t,n,e)})),e.h&&Lt({},(function(e,n){qt(t,n,e)}))}function Xn(e,t,n){n=Math.min(e.j.length,n);var r=e.h?w(e.h.Va,e.h,e):null;e:{var i=e.j;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let s=0;s<n;s++){let n=i[s].g;const a=i[s].map;if(n-=t,0>n)t=Math.max(0,i[s].g-100),o=!1;else try{vn(a,e,"req"+n+"_")}catch(oi){r&&r(a)}}if(o){r=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function Zn(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Pe||Le(),Ne||(Pe(),Ne=!0),De.add(t,e),e.A=0}}function er(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=st(w(e.Ma,e),or(e,e.A)),e.A++,!0)}function tr(e){null!=e.B&&(h.clearTimeout(e.B),e.B=null)}function nr(e){e.g=new yt(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=Ut(e.wa);qt(t,"RID","rpc"),qt(t,"SID",e.K),qt(t,"AID",e.V),qt(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&qt(t,"TO",e.qa),qt(t,"TYPE","xmlhttp"),Yn(e,t),e.o&&e.s&&Bn(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=zt(Ut(t)),n.s=null,n.S=!0,St(n,e)}function rr(e){null!=e.v&&(h.clearTimeout(e.v),e.v=null)}function ir(e,t){var n=null;if(e.g==t){rr(e),tr(e),e.g=null;var r=2}else{if(!dn(e.i,t))return;n=t.F,pn(e.i,t),r=1}if(0!=e.H)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=et(),_e(r,new ot(r,n)),Wn(e)}else Zn(e);else if(i=t.o,3==i||0==i&&0<t.ca||!(1==r&&Jn(e,t)||2==r&&er(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:sr(e,5);break;case 4:sr(e,10);break;case 3:sr(e,6);break;default:sr(e,2)}}function or(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function sr(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var r=w(e.pb,e);n||(n=new Ft("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||Vt(n,"https"),zt(n)),wn(n.toString(),r)}else it(2);e.H=0,e.h&&e.h.za(t),ar(e),Kn(e)}function ar(e){if(e.H=0,e.ma=[],e.h){const t=mn(e.i);0==t.length&&0==e.j.length||(k(e.ma,t),k(e.ma,e.j),e.i.i.length=0,I(e.j),e.j.length=0),e.h.ya()}}function cr(e,t,n){var r=n instanceof Ft?Ut(n):new Ft(n);if(""!=r.g)t&&(r.g=t+"."+r.g),$t(r,r.m);else{var i=h.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var o=new Ft(null);r&&Vt(o,r),t&&(o.g=t),i&&$t(o,i),n&&(o.l=n),r=o}return n=e.F,t=e.Da,n&&t&&qt(r,n,t),qt(r,"VER",e.ra),Yn(e,r),r}function ur(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new Cn(new En({ob:!0})):new Cn(e.va),t.Oa(e.J),t}function lr(){}function hr(){if(j&&!(10<=Number(K)))throw Error("Environmental error: no available transport.")}function dr(e,t){Ee.call(this),this.g=new zn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!O(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!O(t)&&(this.g.F=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new mr(this)}function fr(e){pt.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function pr(){mt.call(this),this.status=1}function mr(e){this.g=e}function gr(){this.blockSize=-1}function yr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function vr(e,t,n){n||(n=0);var r=Array(16);if("string"===typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var o=e.g[3],s=t+(o^n&(i^o))+r[0]+3614090360&4294967295;t=n+(s<<7&4294967295|s>>>25),s=o+(i^t&(n^i))+r[1]+3905402710&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[2]+606105819&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(t^i&(o^t))+r[3]+3250441966&4294967295,n=i+(s<<22&4294967295|s>>>10),s=t+(o^n&(i^o))+r[4]+4118548399&4294967295,t=n+(s<<7&4294967295|s>>>25),s=o+(i^t&(n^i))+r[5]+1200080426&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[6]+2821735955&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(t^i&(o^t))+r[7]+4249261313&4294967295,n=i+(s<<22&4294967295|s>>>10),s=t+(o^n&(i^o))+r[8]+1770035416&4294967295,t=n+(s<<7&4294967295|s>>>25),s=o+(i^t&(n^i))+r[9]+2336552879&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[10]+4294925233&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(t^i&(o^t))+r[11]+2304563134&4294967295,n=i+(s<<22&4294967295|s>>>10),s=t+(o^n&(i^o))+r[12]+1804603682&4294967295,t=n+(s<<7&4294967295|s>>>25),s=o+(i^t&(n^i))+r[13]+4254626195&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[14]+2792965006&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(t^i&(o^t))+r[15]+1236535329&4294967295,n=i+(s<<22&4294967295|s>>>10),s=t+(i^o&(n^i))+r[1]+4129170786&4294967295,t=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(t^n))+r[6]+3225465664&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[11]+643717713&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^t&(i^o))+r[0]+3921069994&4294967295,n=i+(s<<20&4294967295|s>>>12),s=t+(i^o&(n^i))+r[5]+3593408605&4294967295,t=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(t^n))+r[10]+38016083&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[15]+3634488961&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^t&(i^o))+r[4]+3889429448&4294967295,n=i+(s<<20&4294967295|s>>>12),s=t+(i^o&(n^i))+r[9]+568446438&4294967295,t=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(t^n))+r[14]+3275163606&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[3]+4107603335&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^t&(i^o))+r[8]+1163531501&4294967295,n=i+(s<<20&4294967295|s>>>12),s=t+(i^o&(n^i))+r[13]+2850285829&4294967295,t=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(t^n))+r[2]+4243563512&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[7]+1735328473&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^t&(i^o))+r[12]+2368359562&4294967295,n=i+(s<<20&4294967295|s>>>12),s=t+(n^i^o)+r[5]+4294588738&4294967295,t=n+(s<<4&4294967295|s>>>28),s=o+(t^n^i)+r[8]+2272392833&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[11]+1839030562&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^t)+r[14]+4259657740&4294967295,n=i+(s<<23&4294967295|s>>>9),s=t+(n^i^o)+r[1]+2763975236&4294967295,t=n+(s<<4&4294967295|s>>>28),s=o+(t^n^i)+r[4]+1272893353&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[7]+4139469664&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^t)+r[10]+3200236656&4294967295,n=i+(s<<23&4294967295|s>>>9),s=t+(n^i^o)+r[13]+681279174&4294967295,t=n+(s<<4&4294967295|s>>>28),s=o+(t^n^i)+r[0]+3936430074&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[3]+3572445317&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^t)+r[6]+76029189&4294967295,n=i+(s<<23&4294967295|s>>>9),s=t+(n^i^o)+r[9]+3654602809&4294967295,t=n+(s<<4&4294967295|s>>>28),s=o+(t^n^i)+r[12]+3873151461&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[15]+530742520&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^t)+r[2]+3299628645&4294967295,n=i+(s<<23&4294967295|s>>>9),s=t+(i^(n|~o))+r[0]+4096336452&4294967295,t=n+(s<<6&4294967295|s>>>26),s=o+(n^(t|~i))+r[7]+1126891415&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[14]+2878612391&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~t))+r[5]+4237533241&4294967295,n=i+(s<<21&4294967295|s>>>11),s=t+(i^(n|~o))+r[12]+1700485571&4294967295,t=n+(s<<6&4294967295|s>>>26),s=o+(n^(t|~i))+r[3]+2399980690&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[10]+4293915773&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~t))+r[1]+2240044497&4294967295,n=i+(s<<21&4294967295|s>>>11),s=t+(i^(n|~o))+r[8]+1873313359&4294967295,t=n+(s<<6&4294967295|s>>>26),s=o+(n^(t|~i))+r[15]+4264355552&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[6]+2734768916&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~t))+r[13]+1309151649&4294967295,n=i+(s<<21&4294967295|s>>>11),s=t+(i^(n|~o))+r[4]+4149444226&4294967295,t=n+(s<<6&4294967295|s>>>26),s=o+(n^(t|~i))+r[11]+3174756917&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[2]+718787259&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(s<<21&4294967295|s>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+o&4294967295}function wr(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var o=0|e[i];r&&o==t||(n[i]=o,r=!1)}this.g=n}r=Cn.prototype,r.Oa=function(e){this.M=e},r.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():dt.g(),this.C=this.u?lt(this.u):lt(dt),this.g.onreadystatechange=w(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(o){return void Nn(this,o)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=h.FormData&&e instanceof h.FormData,!(0<=T(Rn,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,a]of n)this.g.setRequestHeader(s,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{jn(this),0<this.B&&((this.L=Pn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=w(this.ua,this)):this.A=Ue(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(o){Nn(this,o)}},r.ua=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,_e(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,_e(this,"complete"),_e(this,"abort"),Mn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Mn(this,!0)),Cn.$.N.call(this)},r.La=function(){this.s||(this.G||this.v||this.l?Ln(this):this.kb())},r.kb=function(){Ln(this)},r.isActive=function(){return!!this.g},r.da=function(){try{return 2<Fn(this)?this.g.status:-1}catch(e){return-1}},r.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),An(t)}},r.Ia=function(){return this.m},r.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=zn.prototype,r.ra=8,r.H=1,r.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new yt(this,this.l,e);let o=this.s;if(this.U&&(o?(o=ne(o),ie(o,this.U)):o=this.U),null!==this.o||this.O||(i.I=o,o=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){var r=this.j[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Xn(this,i,t),n=Ut(this.I),qt(n,"RID",e),qt(n,"CVER",22),this.F&&qt(n,"X-HTTP-Session-Id",this.F),Yn(this,n),o&&(this.O?t="headers="+encodeURIComponent(String($n(o)))+"&"+t:this.o&&Bn(n,this.o,o)),fn(this.i,i),this.bb&&qt(n,"TYPE","init"),this.P?(qt(n,"$req",t),qt(n,"SID","null"),i.aa=!0,_t(i,n,null)):_t(i,n,t),this.H=2}}else 3==this.H&&(e?Qn(this,e):0==this.j.length||ln(this.i)||Qn(this))},r.Ma=function(){if(this.u=null,nr(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=st(w(this.jb,this),e)}},r.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,it(10),Gn(this),nr(this))},r.ib=function(){null!=this.v&&(this.v=null,Gn(this),er(this),it(19))},r.pb=function(e){e?(this.l.info("Successfully pinged google.com"),it(2)):(this.l.info("Failed to ping google.com"),it(1))},r.isActive=function(){return!!this.h&&this.h.isActive(this)},r=lr.prototype,r.Ba=function(){},r.Aa=function(){},r.za=function(){},r.ya=function(){},r.isActive=function(){return!0},r.Va=function(){},hr.prototype.g=function(e,t){return new dr(e,t)},E(dr,Ee),dr.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;it(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=cr(e,null,e.Y),Wn(e)},dr.prototype.close=function(){Hn(this.g)},dr.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Te(e),e=n);t.j.push(new an(t.fb++,e)),3==t.H&&Wn(t)},dr.prototype.N=function(){this.g.h=null,delete this.j,Hn(this.g),delete this.g,dr.$.N.call(this)},E(fr,pt),E(pr,mt),E(mr,lr),mr.prototype.Ba=function(){_e(this.g,"a")},mr.prototype.Aa=function(e){_e(this.g,new fr(e))},mr.prototype.za=function(e){_e(this.g,new pr)},mr.prototype.ya=function(){_e(this.g,"b")},E(yr,gr),yr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},yr.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,o=0;o<t;){if(0==i)for(;o<=n;)vr(this,e,o),o+=this.blockSize;if("string"===typeof e){for(;o<t;)if(r[i++]=e.charCodeAt(o++),i==this.blockSize){vr(this,r),i=0;break}}else for(;o<t;)if(r[i++]=e[o++],i==this.blockSize){vr(this,r),i=0;break}}this.h=i,this.i+=t},yr.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var br={};function Er(e){return-128<=e&&128>e?N(e,(function(e){return new wr([0|e],0>e?-1:0)})):new wr([0|e],0>e?-1:0)}function _r(e){if(isNaN(e)||!isFinite(e))return Ir;if(0>e)return xr(_r(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Tr;return new wr(t,0)}function Sr(e,t){if(0==e.length)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if("-"==e.charAt(0))return xr(Sr(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=_r(Math.pow(t,8)),r=Ir,i=0;i<e.length;i+=8){var o=Math.min(8,e.length-i),s=parseInt(e.substring(i,i+o),t);8>o?(o=_r(Math.pow(t,o)),r=r.R(o).add(_r(s))):(r=r.R(n),r=r.add(_r(s)))}return r}var Tr=4294967296,Ir=Er(0),kr=Er(1),Ar=Er(16777216);function Cr(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function Or(e){return-1==e.h}function xr(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new wr(n,~e.h).add(kr)}function Rr(e,t){return e.add(xr(t))}function Pr(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Nr(e,t){this.g=e,this.h=t}function Dr(e,t){if(Cr(t))throw Error("division by zero");if(Cr(e))return new Nr(Ir,Ir);if(Or(e))return t=Dr(xr(e),t),new Nr(xr(t.g),xr(t.h));if(Or(t))return t=Dr(e,xr(t)),new Nr(xr(t.g),t.h);if(30<e.g.length){if(Or(e)||Or(t))throw Error("slowDivide_ only works with positive integers.");for(var n=kr,r=t;0>=r.X(e);)n=Lr(n),r=Lr(r);var i=Mr(n,1),o=Mr(r,1);for(r=Mr(r,2),n=Mr(n,2);!Cr(r);){var s=o.add(r);0>=s.X(e)&&(i=i.add(n),o=s),r=Mr(r,1),n=Mr(n,1)}return t=Rr(e,i.R(t)),new Nr(i,t)}for(i=Ir;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),o=_r(n),s=o.R(t);Or(s)||0<s.X(e);)n-=r,o=_r(n),s=o.R(t);Cr(o)&&(o=kr),i=i.add(o),e=Rr(e,s)}return new Nr(i,e)}function Lr(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new wr(n,e.h)}function Mr(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],o=0;o<r;o++)i[o]=0<t?e.D(o+n)>>>t|e.D(o+n+1)<<32-t:e.D(o+n);return new wr(i,e.h)}r=wr.prototype,r.ea=function(){if(Or(this))return-xr(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Tr+r)*t,t*=Tr}return e},r.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Cr(this))return"0";if(Or(this))return"-"+xr(this).toString(e);for(var t=_r(Math.pow(e,6)),n=this,r="";;){var i=Dr(n,t).g;n=Rr(n,i.R(t));var o=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Cr(n))return o+r;for(;6>o.length;)o="0"+o;r=o+r}},r.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},r.X=function(e){return e=Rr(this,e),Or(e)?-1:Cr(e)?0:1},r.abs=function(){return Or(this)?xr(this):this},r.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var o=r+(65535&this.D(i))+(65535&e.D(i)),s=(o>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=s>>>16,o&=65535,s&=65535,n[i]=s<<16|o}return new wr(n,-2147483648&n[n.length-1]?-1:0)},r.R=function(e){if(Cr(this)||Cr(e))return Ir;if(Or(this))return Or(e)?xr(this).R(xr(e)):xr(xr(this).R(e));if(Or(e))return xr(this.R(xr(e)));if(0>this.X(Ar)&&0>e.X(Ar))return _r(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var o=this.D(r)>>>16,s=65535&this.D(r),a=e.D(i)>>>16,c=65535&e.D(i);n[2*r+2*i]+=s*c,Pr(n,2*r+2*i),n[2*r+2*i+1]+=o*c,Pr(n,2*r+2*i+1),n[2*r+2*i+1]+=s*a,Pr(n,2*r+2*i+1),n[2*r+2*i+2]+=o*a,Pr(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new wr(n,0)},r.gb=function(e){return Dr(this,e).h},r.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new wr(n,this.h&e.h)},r.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new wr(n,this.h|e.h)},r.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new wr(n,this.h^e.h)},hr.prototype.createWebChannel=hr.prototype.g,dr.prototype.send=dr.prototype.u,dr.prototype.open=dr.prototype.m,dr.prototype.close=dr.prototype.close,at.NO_ERROR=0,at.TIMEOUT=8,at.HTTP_ERROR=6,ct.COMPLETE="complete",ht.EventType=ft,ft.OPEN="a",ft.CLOSE="b",ft.ERROR="c",ft.MESSAGE="d",Ee.prototype.listen=Ee.prototype.O,Cn.prototype.listenOnce=Cn.prototype.P,Cn.prototype.getLastError=Cn.prototype.Sa,Cn.prototype.getLastErrorCode=Cn.prototype.Ia,Cn.prototype.getStatus=Cn.prototype.da,Cn.prototype.getResponseJson=Cn.prototype.Wa,Cn.prototype.getResponseText=Cn.prototype.ja,Cn.prototype.send=Cn.prototype.ha,Cn.prototype.setWithCredentials=Cn.prototype.Oa,yr.prototype.digest=yr.prototype.l,yr.prototype.reset=yr.prototype.reset,yr.prototype.update=yr.prototype.j,wr.prototype.add=wr.prototype.add,wr.prototype.multiply=wr.prototype.R,wr.prototype.modulo=wr.prototype.gb,wr.prototype.compare=wr.prototype.X,wr.prototype.toNumber=wr.prototype.ea,wr.prototype.toString=wr.prototype.toString,wr.prototype.getBits=wr.prototype.D,wr.fromNumber=_r,wr.fromString=Sr;var jr=u.createWebChannelTransport=function(){return new hr},Fr=u.getStatEventTarget=function(){return et()},Ur=u.ErrorCode=at,Vr=u.EventType=ct,$r=u.Event=Xe,Br=u.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},qr=u.FetchXmlHttpFactory=En,zr=u.WebChannel=ht,Hr=u.XhrIo=Cn,Gr=u.Md5=yr,Kr=u.Integer=wr;const Wr="@firebase/firestore";
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
 */class Jr{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Jr.UNAUTHENTICATED=new Jr(null),Jr.GOOGLE_CREDENTIALS=new Jr("google-credentials-uid"),Jr.FIRST_PARTY=new Jr("first-party-uid"),Jr.MOCK_USER=new Jr("mock-user");
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
let Qr="9.23.0";
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
 */const Yr=new s.Yd("@firebase/firestore");function Xr(){return Yr.logLevel}function Zr(e,...t){if(Yr.logLevel<=s["in"].DEBUG){const n=t.map(ni);Yr.debug(`Firestore (${Qr}): ${e}`,...n)}}function ei(e,...t){if(Yr.logLevel<=s["in"].ERROR){const n=t.map(ni);Yr.error(`Firestore (${Qr}): ${e}`,...n)}}function ti(e,...t){if(Yr.logLevel<=s["in"].WARN){const n=t.map(ni);Yr.warn(`Firestore (${Qr}): ${e}`,...n)}}function ni(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
 */var t}
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
 */function ri(e="Unexpected state"){const t=`FIRESTORE (${Qr}) INTERNAL ASSERTION FAILED: `+e;throw ei(t),new Error(t)}function ii(e,t){e||ri()}function oi(e,t){return e}
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
 */const si={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ai extends a.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class ci{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */class ui{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class li{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Jr.UNAUTHENTICATED)))}shutdown(){}}class hi{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class di{constructor(e){this.t=e,this.currentUser=Jr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new ci;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ci,e.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},s=e=>{Zr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit((e=>s(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?s(e):(Zr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ci)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Zr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(ii("string"==typeof t.accessToken),new ui(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ii(null===e||"string"==typeof e),new Jr(e)}}class fi{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=Jr.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class pi{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new fi(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(Jr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class mi{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gi{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const n=e=>{null!=e.error&&Zr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.T;return this.T=e.token,Zr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Zr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?r(e):Zr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(ii("string"==typeof e.token),this.T=e.token,new mi(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
function yi(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */class vi{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=yi(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function wi(e,t){return e<t?-1:e>t?1:0}function bi(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
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
class Ei{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ai(si.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ai(si.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ai(si.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ai(si.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ei.fromMillis(Date.now())}static fromDate(e){return Ei.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Ei(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?wi(this.nanoseconds,e.nanoseconds):wi(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class _i{constructor(e){this.timestamp=e}static fromTimestamp(e){return new _i(e)}static min(){return new _i(new Ei(0,0))}static max(){return new _i(new Ei(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */class Si{constructor(e,t,n){void 0===t?t=0:t>e.length&&ri(),void 0===n?n=e.length-t:n>e.length-t&&ri(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Si.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Si?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ti extends Si{construct(e,t,n){return new Ti(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new ai(si.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Ti(t)}static emptyPath(){return new Ti([])}}const Ii=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ki extends Si{construct(e,t,n){return new ki(e,t,n)}static isValidIdentifier(e){return Ii.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ki.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ki(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new ai(si.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new ai(si.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new ai(si.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(o=!o,r++):"."!==t||o?(n+=t,r++):(i(),r++)}if(i(),o)throw new ai(si.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ki(t)}static emptyPath(){return new ki([])}}
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
 */class Ai{constructor(e){this.path=e}static fromPath(e){return new Ai(Ti.fromString(e))}static fromName(e){return new Ai(Ti.fromString(e).popFirst(5))}static empty(){return new Ai(Ti.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Ti.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Ti.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ai(new Ti(e.slice()))}}
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
 */class Ci{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}Ci.UNKNOWN_ID=-1;function Oi(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=_i.fromTimestamp(1e9===r?new Ei(n+1,0):new Ei(n,r));return new Ri(i,Ai.empty(),t)}function xi(e){return new Ri(e.readTime,e.key,-1)}class Ri{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Ri(_i.min(),Ai.empty(),-1)}static max(){return new Ri(_i.max(),Ai.empty(),-1)}}function Pi(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Ai.comparator(e.documentKey,t.documentKey),0!==n?n:wi(e.largestBatchId,t.largestBatchId))}
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
 */const Ni="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Di{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
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
 */async function Li(e){if(e.code!==si.FAILED_PRECONDITION||e.message!==Ni)throw e;Zr("LocalStore","Unexpectedly lost primary lease")}
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
 */class Mi{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ri(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Mi(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Mi?t:Mi.resolve(t)}catch(e){return Mi.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Mi.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Mi.reject(t)}static resolve(e){return new Mi(((t,n)=>{t(e)}))}static reject(e){return new Mi(((t,n)=>{n(e)}))}static waitFor(e){return new Mi(((t,n)=>{let r=0,i=0,o=!1;e.forEach((e=>{++r,e.next((()=>{++i,o&&i===r&&t()}),(e=>n(e)))})),o=!0,i===r&&t()}))}static or(e){let t=Mi.resolve(!1);for(const n of e)t=t.next((e=>e?Mi.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new Mi(((n,r)=>{const i=e.length,o=new Array(i);let s=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{o[c]=e,++s,s===i&&n(o)}),(e=>r(e)))}}))}static doWhile(e,t){return new Mi(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
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
 */function ji(e){return"IndexedDbTransactionError"===e.name}
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
 */
class Fi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}function Ui(e){return null==e}function Vi(e){return 0===e&&1/e==-1/0}function $i(e){return"number"==typeof e&&Number.isInteger(e)&&!Vi(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
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
 */Fi.ct=-1;const Bi=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],qi=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],zi=qi;
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
function Hi(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Gi(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Ki(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
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
 */class Wi{constructor(e,t){this.comparator=e,this.root=t||Qi.EMPTY}insert(e,t){return new Wi(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Qi.BLACK,null,null))}remove(e){return new Wi(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qi.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ji(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ji(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ji(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ji(this.root,e,this.comparator,!0)}}class Ji{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qi{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Qi.RED,this.left=null!=r?r:Qi.EMPTY,this.right=null!=i?i:Qi.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Qi(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Qi.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Qi.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qi.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ri();if(this.right.isRed())throw ri();const e=this.left.check();if(e!==this.right.check())throw ri();return e+(this.isRed()?0:1)}}Qi.EMPTY=null,Qi.RED=!0,Qi.BLACK=!1,Qi.EMPTY=new class{constructor(){this.size=0}get key(){throw ri()}get value(){throw ri()}get color(){throw ri()}get left(){throw ri()}get right(){throw ri()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Qi(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Yi{constructor(e){this.comparator=e,this.data=new Wi(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Xi(this.data.getIterator())}getIteratorFrom(e){return new Xi(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Yi))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Yi(this.comparator);return t.data=e,t}}class Xi{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
class Zi{constructor(e){this.fields=e,e.sort(ki.comparator)}static empty(){return new Zi([])}unionWith(e){let t=new Yi(ki.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Zi(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return bi(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
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
 */class eo extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
class to{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new eo("Invalid base64 string: "+e):e}}(e);return new to(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new to(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return wi(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}to.EMPTY_BYTE_STRING=new to("");const no=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ro(e){if(ii(!!e),"string"==typeof e){let t=0;const n=no.exec(e);if(ii(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:io(e.seconds),nanos:io(e.nanos)}}function io(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function oo(e){return"string"==typeof e?to.fromBase64String(e):to.fromUint8Array(e)}
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
 */function so(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ao(e){const t=e.mapValue.fields.__previous_value__;return so(t)?ao(t):t}function co(e){const t=ro(e.mapValue.fields.__local_write_time__.timestampValue);return new Ei(t.seconds,t.nanos)}
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
 */class uo{constructor(e,t,n,r,i,o,s,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.longPollingOptions=a,this.useFetchStreams=c}}class lo{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new lo("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof lo&&e.projectId===this.projectId&&e.database===this.database}}
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
 */const ho={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function fo(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?so(e)?4:Ao(e)?9007199254740991:10:ri()}function po(e,t){if(e===t)return!0;const n=fo(e);if(n!==fo(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return co(e).isEqual(co(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=ro(e.timestampValue),r=ro(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return oo(e.bytesValue).isEqual(oo(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return io(e.geoPointValue.latitude)===io(t.geoPointValue.latitude)&&io(e.geoPointValue.longitude)===io(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return io(e.integerValue)===io(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=io(e.doubleValue),r=io(t.doubleValue);return n===r?Vi(n)===Vi(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return bi(e.arrayValue.values||[],t.arrayValue.values||[],po);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Hi(n)!==Hi(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!po(n[i],r[i])))return!1;return!0}(e,t);default:return ri()}}function mo(e,t){return void 0!==(e.values||[]).find((e=>po(e,t)))}function go(e,t){if(e===t)return 0;const n=fo(e),r=fo(t);if(n!==r)return wi(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return wi(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=io(e.integerValue||e.doubleValue),r=io(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return yo(e.timestampValue,t.timestampValue);case 4:return yo(co(e),co(t));case 5:return wi(e.stringValue,t.stringValue);case 6:return function(e,t){const n=oo(e),r=oo(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=wi(n[i],r[i]);if(0!==e)return e}return wi(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=wi(io(e.latitude),io(t.latitude));return 0!==n?n:wi(io(e.longitude),io(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=go(n[i],r[i]);if(e)return e}return wi(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===ho.mapValue&&t===ho.mapValue)return 0;if(e===ho.mapValue)return 1;if(t===ho.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},o=Object.keys(i);r.sort(),o.sort();for(let s=0;s<r.length&&s<o.length;++s){const e=wi(r[s],o[s]);if(0!==e)return e;const t=go(n[r[s]],i[o[s]]);if(0!==t)return t}return wi(r.length,o.length)}(e.mapValue,t.mapValue);default:throw ri()}}function yo(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return wi(e,t);const n=ro(e),r=ro(t),i=wi(n.seconds,r.seconds);return 0!==i?i:wi(n.nanos,r.nanos)}function vo(e){return wo(e)}function wo(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=ro(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?oo(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Ai.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=wo(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${wo(e.fields[i])}`;return n+"}"}(e.mapValue):ri();var t,n}function bo(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Eo(e){return!!e&&"integerValue"in e}function _o(e){return!!e&&"arrayValue"in e}function So(e){return!!e&&"nullValue"in e}function To(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Io(e){return!!e&&"mapValue"in e}function ko(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Gi(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=ko(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ko(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Ao(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class Co{constructor(e){this.value=e}static empty(){return new Co({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Io(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ko(t)}setAll(e){let t=ki.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=ko(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Io(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return po(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Io(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Gi(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new Co(ko(this.value))}}function Oo(e){const t=[];return Gi(e.fields,((e,n)=>{const r=new ki([e]);if(Io(n)){const e=Oo(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Zi(t)
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
 */}class xo{constructor(e,t,n,r,i,o,s){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=o,this.documentState=s}static newInvalidDocument(e){return new xo(e,0,_i.min(),_i.min(),_i.min(),Co.empty(),0)}static newFoundDocument(e,t,n,r){return new xo(e,1,t,_i.min(),n,r,0)}static newNoDocument(e,t){return new xo(e,2,t,_i.min(),_i.min(),Co.empty(),0)}static newUnknownDocument(e,t){return new xo(e,3,t,_i.min(),_i.min(),Co.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(_i.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Co.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Co.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_i.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof xo&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xo(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class Ro{constructor(e,t){this.position=e,this.inclusive=t}}function Po(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const o=t[i],s=e.position[i];if(r=o.field.isKeyField()?Ai.comparator(Ai.fromName(s.referenceValue),n.key):go(s,n.data.field(o.field)),"desc"===o.dir&&(r*=-1),0!==r)break}return r}function No(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!po(e.position[n],t.position[n]))return!1;return!0}
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
 */class Do{constructor(e,t="asc"){this.field=e,this.dir=t}}function Lo(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
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
 */class Mo{}class jo extends Mo{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Ho(e,t,n):"array-contains"===t?new Jo(e,n):"in"===t?new Qo(e,n):"not-in"===t?new Yo(e,n):"array-contains-any"===t?new Xo(e,n):new jo(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Go(e,n):new Ko(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(go(t,this.value)):null!==t&&fo(this.value)===fo(t)&&this.matchesComparison(go(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return ri()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Fo extends Mo{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new Fo(e,t)}matches(e){return Uo(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft((e=>e.isInequality()));return null!==e?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Uo(e){return"and"===e.op}function Vo(e){return $o(e)&&Uo(e)}function $o(e){for(const t of e.filters)if(t instanceof Fo)return!1;return!0}function Bo(e){if(e instanceof jo)return e.field.canonicalString()+e.op.toString()+vo(e.value);if(Vo(e))return e.filters.map((e=>Bo(e))).join(",");{const t=e.filters.map((e=>Bo(e))).join(",");return`${e.op}(${t})`}}function qo(e,t){return e instanceof jo?function(e,t){return t instanceof jo&&e.op===t.op&&e.field.isEqual(t.field)&&po(e.value,t.value)}(e,t):e instanceof Fo?function(e,t){return t instanceof Fo&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&qo(n,t.filters[r])),!0)}(e,t):void ri()}function zo(e){return e instanceof jo?function(e){return`${e.field.canonicalString()} ${e.op} ${vo(e.value)}`}(e):e instanceof Fo?function(e){return e.op.toString()+" {"+e.getFilters().map(zo).join(" ,")+"}"}(e):"Filter"}class Ho extends jo{constructor(e,t,n){super(e,t,n),this.key=Ai.fromName(n.referenceValue)}matches(e){const t=Ai.comparator(e.key,this.key);return this.matchesComparison(t)}}class Go extends jo{constructor(e,t){super(e,"in",t),this.keys=Wo("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Ko extends jo{constructor(e,t){super(e,"not-in",t),this.keys=Wo("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Wo(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Ai.fromName(e.referenceValue)))}class Jo extends jo{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return _o(t)&&mo(t.arrayValue,this.value)}}class Qo extends jo{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&mo(this.value.arrayValue,t)}}class Yo extends jo{constructor(e,t){super(e,"not-in",t)}matches(e){if(mo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!mo(this.value.arrayValue,t)}}class Xo extends jo{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!_o(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>mo(this.value.arrayValue,e)))}}
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
 */class Zo{constructor(e,t=null,n=[],r=[],i=null,o=null,s=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=s,this.dt=null}}function es(e,t=null,n=[],r=[],i=null,o=null,s=null){return new Zo(e,t,n,r,i,o,s)}function ts(e){const t=oi(e);if(null===t.dt){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>Bo(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Ui(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>vo(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>vo(e))).join(",")),t.dt=e}return t.dt}function ns(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Lo(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!qo(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!No(e.startAt,t.startAt)&&No(e.endAt,t.endAt)}function rs(e){return Ai.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
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
class is{constructor(e,t=null,n=[],r=[],i=null,o="F",s=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=s,this.endAt=a,this.wt=null,this._t=null,this.startAt,this.endAt}}function os(e,t,n,r,i,o,s,a){return new is(e,t,n,r,i,o,s,a)}function ss(e){return new is(e)}function as(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function cs(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function us(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function ls(e){return null!==e.collectionGroup}function hs(e){const t=oi(e);if(null===t.wt){t.wt=[];const e=us(t),n=cs(t);if(null!==e&&null===n)e.isKeyField()||t.wt.push(new Do(e)),t.wt.push(new Do(ki.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.wt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new Do(ki.keyField(),e))}}}return t.wt}function ds(e){const t=oi(e);if(!t._t)if("F"===t.limitType)t._t=es(t.path,t.collectionGroup,hs(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of hs(t)){const t="desc"===i.dir?"asc":"desc";e.push(new Do(i.field,t))}const n=t.endAt?new Ro(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ro(t.startAt.position,t.startAt.inclusive):null;t._t=es(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t._t}function fs(e,t){t.getFirstInequalityField(),us(e);const n=e.filters.concat([t]);return new is(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function ps(e,t,n){return new is(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function ms(e,t){return ns(ds(e),ds(t))&&e.limitType===t.limitType}function gs(e){return`${ts(ds(e))}|lt:${e.limitType}`}function ys(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>zo(e))).join(", ")}]`),Ui(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>vo(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>vo(e))).join(",")),`Target(${t})`}(ds(e))}; limitType=${e.limitType})`}function vs(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Ai.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of hs(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=Po(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,hs(e),t))&&!(e.endAt&&!function(e,t,n){const r=Po(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,hs(e),t))}(e,t)}function ws(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function bs(e){return(t,n)=>{let r=!1;for(const i of hs(e)){const e=Es(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Es(e,t,n){const r=e.field.isKeyField()?Ai.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?go(r,i):ri()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return ri()}}
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
 */class _s{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Gi(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return Ki(this.inner)}size(){return this.innerSize}}
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
 */const Ss=new Wi(Ai.comparator);function Ts(){return Ss}const Is=new Wi(Ai.comparator);function ks(...e){let t=Is;for(const n of e)t=t.insert(n.key,n);return t}function As(e){let t=Is;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Cs(){return xs()}function Os(){return xs()}function xs(){return new _s((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Rs=new Wi(Ai.comparator),Ps=new Yi(Ai.comparator);function Ns(...e){let t=Ps;for(const n of e)t=t.add(n);return t}const Ds=new Yi(wi);function Ls(){return Ds}
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
 */function Ms(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vi(t)?"-0":t}}function js(e){return{integerValue:""+e}}function Fs(e,t){return $i(t)?js(t):Ms(e,t)}
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
 */class Us{constructor(){this._=void 0}}function Vs(e,t,n){return e instanceof qs?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&so(t)&&(t=ao(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof zs?Hs(e,t):e instanceof Gs?Ks(e,t):function(e,t){const n=Bs(e,t),r=Js(n)+Js(e.gt);return Eo(n)&&Eo(e.gt)?js(r):Ms(e.serializer,r)}(e,t)}function $s(e,t,n){return e instanceof zs?Hs(e,t):e instanceof Gs?Ks(e,t):n}function Bs(e,t){return e instanceof Ws?Eo(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class qs extends Us{}class zs extends Us{constructor(e){super(),this.elements=e}}function Hs(e,t){const n=Qs(t);for(const r of e.elements)n.some((e=>po(e,r)))||n.push(r);return{arrayValue:{values:n}}}class Gs extends Us{constructor(e){super(),this.elements=e}}function Ks(e,t){let n=Qs(t);for(const r of e.elements)n=n.filter((e=>!po(e,r)));return{arrayValue:{values:n}}}class Ws extends Us{constructor(e,t){super(),this.serializer=e,this.gt=t}}function Js(e){return io(e.integerValue||e.doubleValue)}function Qs(e){return _o(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
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
 */class Ys{constructor(e,t){this.field=e,this.transform=t}}function Xs(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof zs&&t instanceof zs||e instanceof Gs&&t instanceof Gs?bi(e.elements,t.elements,po):e instanceof Ws&&t instanceof Ws?po(e.gt,t.gt):e instanceof qs&&t instanceof qs}(e.transform,t.transform)}class Zs{constructor(e,t){this.version=e,this.transformResults=t}}class ea{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ea}static exists(e){return new ea(void 0,e)}static updateTime(e){return new ea(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ta(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class na{}function ra(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new fa(e.key,ea.none()):new ca(e.key,e.data,ea.none());{const n=e.data,r=Co.empty();let i=new Yi(ki.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new ua(e.key,r,new Zi(i.toArray()),ea.none())}}function ia(e,t,n){e instanceof ca?function(e,t,n){const r=e.value.clone(),i=ha(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof ua?function(e,t,n){if(!ta(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=ha(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(la(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function oa(e,t,n,r){return e instanceof ca?function(e,t,n,r){if(!ta(e.precondition,t))return n;const i=e.value.clone(),o=da(e.fieldTransforms,r,t);return i.setAll(o),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof ua?function(e,t,n,r){if(!ta(e.precondition,t))return n;const i=da(e.fieldTransforms,r,t),o=t.data;return o.setAll(la(e)),o.setAll(i),t.convertToFoundDocument(t.version,o).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return ta(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function sa(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Bs(r.transform,e||null);null!=i&&(null===n&&(n=Co.empty()),n.set(r.field,i))}return n||null}function aa(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&bi(e,t,((e,t)=>Xs(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class ca extends na{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ua extends na{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function la(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function ha(e,t,n){const r=new Map;ii(e.length===n.length);for(let i=0;i<n.length;i++){const o=e[i],s=o.transform,a=t.data.field(o.field);r.set(o.field,$s(s,a,n[i]))}return r}function da(e,t,n){const r=new Map;for(const i of e){const e=i.transform,o=n.data.field(i.field);r.set(i.field,Vs(e,o,t))}return r}class fa extends na{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pa extends na{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class ma{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&ia(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=oa(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=oa(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Os();return this.mutations.forEach((r=>{const i=e.get(r.key),o=i.overlayedDocument;let s=this.applyToLocalView(o,i.mutatedFields);s=t.has(r.key)?null:s;const a=ra(o,s);null!==a&&n.set(r.key,a),o.isValidDocument()||o.convertToNoDocument(_i.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ns())}isEqual(e){return this.batchId===e.batchId&&bi(this.mutations,e.mutations,((e,t)=>aa(e,t)))&&bi(this.baseMutations,e.baseMutations,((e,t)=>aa(e,t)))}}class ga{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){ii(e.mutations.length===n.length);let r=Rs;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,n[o].version);return new ga(e,t,n,r)}}
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
 */class ya{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
class va{constructor(e,t){this.count=e,this.unchangedNames=t}}
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
 */var wa,ba;function Ea(e){switch(e){default:return ri();case si.CANCELLED:case si.UNKNOWN:case si.DEADLINE_EXCEEDED:case si.RESOURCE_EXHAUSTED:case si.INTERNAL:case si.UNAVAILABLE:case si.UNAUTHENTICATED:return!1;case si.INVALID_ARGUMENT:case si.NOT_FOUND:case si.ALREADY_EXISTS:case si.PERMISSION_DENIED:case si.FAILED_PRECONDITION:case si.ABORTED:case si.OUT_OF_RANGE:case si.UNIMPLEMENTED:case si.DATA_LOSS:return!0}}function _a(e){if(void 0===e)return ei("GRPC error has no .code"),si.UNKNOWN;switch(e){case wa.OK:return si.OK;case wa.CANCELLED:return si.CANCELLED;case wa.UNKNOWN:return si.UNKNOWN;case wa.DEADLINE_EXCEEDED:return si.DEADLINE_EXCEEDED;case wa.RESOURCE_EXHAUSTED:return si.RESOURCE_EXHAUSTED;case wa.INTERNAL:return si.INTERNAL;case wa.UNAVAILABLE:return si.UNAVAILABLE;case wa.UNAUTHENTICATED:return si.UNAUTHENTICATED;case wa.INVALID_ARGUMENT:return si.INVALID_ARGUMENT;case wa.NOT_FOUND:return si.NOT_FOUND;case wa.ALREADY_EXISTS:return si.ALREADY_EXISTS;case wa.PERMISSION_DENIED:return si.PERMISSION_DENIED;case wa.FAILED_PRECONDITION:return si.FAILED_PRECONDITION;case wa.ABORTED:return si.ABORTED;case wa.OUT_OF_RANGE:return si.OUT_OF_RANGE;case wa.UNIMPLEMENTED:return si.UNIMPLEMENTED;case wa.DATA_LOSS:return si.DATA_LOSS;default:return ri()}}(ba=wa||(wa={}))[ba.OK=0]="OK",ba[ba.CANCELLED=1]="CANCELLED",ba[ba.UNKNOWN=2]="UNKNOWN",ba[ba.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ba[ba.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ba[ba.NOT_FOUND=5]="NOT_FOUND",ba[ba.ALREADY_EXISTS=6]="ALREADY_EXISTS",ba[ba.PERMISSION_DENIED=7]="PERMISSION_DENIED",ba[ba.UNAUTHENTICATED=16]="UNAUTHENTICATED",ba[ba.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ba[ba.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ba[ba.ABORTED=10]="ABORTED",ba[ba.OUT_OF_RANGE=11]="OUT_OF_RANGE",ba[ba.UNIMPLEMENTED=12]="UNIMPLEMENTED",ba[ba.INTERNAL=13]="INTERNAL",ba[ba.UNAVAILABLE=14]="UNAVAILABLE",ba[ba.DATA_LOSS=15]="DATA_LOSS";
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
 */
class Sa{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ta}static getOrCreateInstance(){return null===Ta&&(Ta=new Sa),Ta}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}}let Ta=null;
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
 */function Ia(){return new TextEncoder}
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
 */const ka=new Kr([4294967295,4294967295],0);function Aa(e){const t=Ia().encode(e),n=new Gr;return n.update(t),new Uint8Array(n.digest())}function Ca(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Kr([n,r],0),new Kr([i,o],0)]}class Oa{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new xa(`Invalid padding: ${t}`);if(n<0)throw new xa(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new xa(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new xa(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=Kr.fromNumber(this.It)}Et(e,t,n){let r=e.add(t.multiply(Kr.fromNumber(n)));return 1===r.compare(ka)&&(r=new Kr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}vt(e){if(0===this.It)return!1;const t=Aa(e),[n,r]=Ca(t);for(let i=0;i<this.hashCount;i++){const e=this.Et(n,r,i);if(!this.At(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Oa(i,r,t);return n.forEach((e=>o.insert(e))),o}insert(e){if(0===this.It)return;const t=Aa(e),[n,r]=Ca(t);for(let i=0;i<this.hashCount;i++){const e=this.Et(n,r,i);this.Rt(e)}}Rt(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class xa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
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
 */class Ra{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Pa.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Ra(_i.min(),r,new Wi(wi),Ts(),Ns())}}class Pa{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Pa(n,t,Ns(),Ns(),Ns())}}
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
 */class Na{constructor(e,t,n,r){this.Pt=e,this.removedTargetIds=t,this.key=n,this.bt=r}}class Da{constructor(e,t){this.targetId=e,this.Vt=t}}class La{constructor(e,t,n=to.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Ma{constructor(){this.St=0,this.Dt=Ua(),this.Ct=to.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return 0!==this.St}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=Ns(),t=Ns(),n=Ns();return this.Dt.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:ri()}})),new Pa(this.Ct,this.xt,e,t,n)}Ft(){this.Nt=!1,this.Dt=Ua()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class ja{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Ts(),this.zt=Fa(),this.Wt=new Wi(wi)}Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,(t=>{const n=this.Zt(t);switch(e.state){case 0:this.te(t)&&n.$t(e.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(e.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(t);break;case 3:this.te(t)&&(n.Kt(),n.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),n.$t(e.resumeToken));break;default:ri()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach(((e,n)=>{this.te(n)&&t(n)}))}ne(e){var t;const n=e.targetId,r=e.Vt.count,i=this.se(n);if(i){const o=i.target;if(rs(o))if(0===r){const e=new Ai(o.path);this.Yt(n,e,xo.newNoDocument(e,_i.min()))}else ii(1===r);else{const i=this.ie(n);if(i!==r){const r=this.re(e,i);if(0!==r){this.ee(n);const e=2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,e)}null===(t=Sa.instance)||void 0===t||t.notifyOnExistenceFilterMismatch(function(e,t,n){var r,i,o,s,a,c;const u={localCacheCount:t,existenceFilterCount:n.count},l=n.unchangedNames;return l&&(u.bloomFilter={applied:0===e,hashCount:null!==(r=null==l?void 0:l.hashCount)&&void 0!==r?r:0,bitmapLength:null!==(s=null===(o=null===(i=null==l?void 0:l.bits)||void 0===i?void 0:i.bitmap)||void 0===o?void 0:o.length)&&void 0!==s?s:0,padding:null!==(c=null===(a=null==l?void 0:l.bits)||void 0===a?void 0:a.padding)&&void 0!==c?c:0}),u}
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
 */(r,i,e.Vt))}}}}re(e,t){const{unchangedNames:n,count:r}=e.Vt;if(!n||!n.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:s=0}=n;let a,c;try{a=oo(i).toUint8Array()}catch(e){if(e instanceof eo)return ti("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw e}try{c=new Oa(a,o,s)}catch(e){return ti(e instanceof xa?"BloomFilter error: ":"Applying bloom filter failed: ",e),1}return 0===c.It?1:r!==t-this.oe(e.targetId,c)?2:0}oe(e,t){const n=this.Gt.getRemoteKeysForTarget(e);let r=0;return n.forEach((n=>{const i=this.Gt.ue(),o=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;t.vt(o)||(this.Yt(e,n,null),r++)})),r}ce(e){const t=new Map;this.Qt.forEach(((n,r)=>{const i=this.se(r);if(i){if(n.current&&rs(i.target)){const t=new Ai(i.target.path);null!==this.jt.get(t)||this.ae(r,t)||this.Yt(r,t,xo.newNoDocument(t,e))}n.Mt&&(t.set(r,n.Ot()),n.Ft())}}));let n=Ns();this.zt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.se(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.jt.forEach(((t,n)=>n.setReadTime(e)));const r=new Ra(e,t,this.Wt,this.jt,n);return this.jt=Ts(),this.zt=Fa(),this.Wt=new Wi(wi),r}Jt(e,t){if(!this.te(e))return;const n=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,n),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,n){if(!this.te(e))return;const r=this.Zt(e);this.ae(e,t)?r.Bt(t,1):r.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),n&&(this.jt=this.jt.insert(t,n))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new Ma,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new Yi(wi),this.zt=this.zt.insert(e,t)),t}te(e){const t=null!==this.se(e);return t||Zr("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Ma),this.Gt.getRemoteKeysForTarget(e).forEach((t=>{this.Yt(e,t,null)}))}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function Fa(){return new Wi(Ai.comparator)}function Ua(){return new Wi(Ai.comparator)}const Va=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),$a=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),Ba=(()=>{const e={and:"AND",or:"OR"};return e})();class qa{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function za(e,t){return e.useProto3Json||Ui(t)?t:{value:t}}function Ha(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ga(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Ka(e,t){return Ha(e,t.toTimestamp())}function Wa(e){return ii(!!e),_i.fromTimestamp(function(e){const t=ro(e);return new Ei(t.seconds,t.nanos)}(e))}function Ja(e,t){return function(e){return new Ti(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Qa(e){const t=Ti.fromString(e);return ii(wc(t)),t}function Ya(e,t){return Ja(e.databaseId,t.path)}function Xa(e,t){const n=Qa(t);if(n.get(1)!==e.databaseId.projectId)throw new ai(si.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new ai(si.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Ai(nc(n))}function Za(e,t){return Ja(e.databaseId,t)}function ec(e){const t=Qa(e);return 4===t.length?Ti.emptyPath():nc(t)}function tc(e){return new Ti(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function nc(e){return ii(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function rc(e,t,n){return{name:Ya(e,t),fields:n.value.mapValue.fields}}function ic(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:ri()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(e,t){return e.useProto3Json?(ii(void 0===t||"string"==typeof t),to.fromBase64String(t||"")):(ii(void 0===t||t instanceof Uint8Array),to.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),s=t.targetChange.cause,a=s&&function(e){const t=void 0===e.code?si.UNKNOWN:_a(e.code);return new ai(t,e.message||"")}(s);n=new La(r,i,o,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Xa(e,r.document.name),o=Wa(r.document.updateTime),s=r.document.createTime?Wa(r.document.createTime):_i.min(),a=new Co({mapValue:{fields:r.document.fields}}),c=xo.newFoundDocument(i,o,s,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Na(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Xa(e,r.document),o=r.readTime?Wa(r.readTime):_i.min(),s=xo.newNoDocument(i,o),a=r.removedTargetIds||[];n=new Na([],a,s.key,s)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Xa(e,r.document),o=r.removedTargetIds||[];n=new Na([],o,i,null)}else{if(!("filter"in t))return ri();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,o=new va(r,i),s=e.targetId;n=new Da(s,o)}}return n}function oc(e,t){let n;if(t instanceof ca)n={update:rc(e,t.key,t.value)};else if(t instanceof fa)n={delete:Ya(e,t.key)};else if(t instanceof ua)n={update:rc(e,t.key,t.data),updateMask:vc(t.fieldMask)};else{if(!(t instanceof pa))return ri();n={verify:Ya(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof qs)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof zs)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Gs)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Ws)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw ri()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Ka(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:ri()}(e,t.precondition)),n}function sc(e,t){return e&&e.length>0?(ii(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Wa(e.updateTime):Wa(t);return n.isEqual(_i.min())&&(n=Wa(t)),new Zs(n,e.transformResults||[])}(e,t)))):[]}function ac(e,t){return{documents:[Za(e,t.path)]}}function cc(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Za(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Za(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0!==e.length)return yc(Fo.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const o=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:mc(e.field),direction:dc(e.dir)}}(e)))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const s=za(e,t.limit);var a;return null!==s&&(n.structuredQuery.limit=s),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function uc(e){let t=ec(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ii(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let o=[];n.where&&(o=function(e){const t=hc(e);return t instanceof Fo&&Vo(t)?t.getFilters():[t]}(n.where));let s=[];n.orderBy&&(s=n.orderBy.map((e=>function(e){return new Do(gc(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Ui(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Ro(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Ro(n,t)}(n.endAt)),os(t,i,s,o,a,"F",c,u)}function lc(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ri()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}function hc(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=gc(e.unaryFilter.field);return jo.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=gc(e.unaryFilter.field);return jo.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=gc(e.unaryFilter.field);return jo.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=gc(e.unaryFilter.field);return jo.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ri()}}(e):void 0!==e.fieldFilter?function(e){return jo.create(gc(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ri()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Fo.create(e.compositeFilter.filters.map((e=>hc(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return ri()}}(e.compositeFilter.op))}(e):ri()}function dc(e){return Va[e]}function fc(e){return $a[e]}function pc(e){return Ba[e]}function mc(e){return{fieldPath:e.canonicalString()}}function gc(e){return ki.fromServerFormat(e.fieldPath)}function yc(e){return e instanceof jo?function(e){if("=="===e.op){if(To(e.value))return{unaryFilter:{field:mc(e.field),op:"IS_NAN"}};if(So(e.value))return{unaryFilter:{field:mc(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(To(e.value))return{unaryFilter:{field:mc(e.field),op:"IS_NOT_NAN"}};if(So(e.value))return{unaryFilter:{field:mc(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mc(e.field),op:fc(e.op),value:e.value}}}(e):e instanceof Fo?function(e){const t=e.getFilters().map((e=>yc(e)));return 1===t.length?t[0]:{compositeFilter:{op:pc(e.op),filters:t}}}(e):ri()}function vc(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function wc(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
 */class bc{constructor(e,t,n,r,i=_i.min(),o=_i.min(),s=to.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=s,this.expectedCount=a}withSequenceNumber(e){return new bc(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new bc(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new bc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new bc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
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
 */class Ec{constructor(e){this.fe=e}}function _c(e){const t=uc({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?ps(t,t.limit,"L"):t}
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
class Sc{constructor(){}_e(e,t){this.me(e,t),t.ge()}me(e,t){if("nullValue"in e)this.ye(t,5);else if("booleanValue"in e)this.ye(t,10),t.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(t,15),t.pe(io(e.integerValue));else if("doubleValue"in e){const n=io(e.doubleValue);isNaN(n)?this.ye(t,13):(this.ye(t,15),Vi(n)?t.pe(0):t.pe(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ye(t,20),"string"==typeof n?t.Ie(n):(t.Ie(`${n.seconds||""}`),t.pe(n.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,t),this.Ee(t);else if("bytesValue"in e)this.ye(t,30),t.Ae(oo(e.bytesValue)),this.Ee(t);else if("referenceValue"in e)this.ve(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ye(t,45),t.pe(n.latitude||0),t.pe(n.longitude||0)}else"mapValue"in e?Ao(e)?this.ye(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Ee(t)):"arrayValue"in e?(this.Pe(e.arrayValue,t),this.Ee(t)):ri()}Te(e,t){this.ye(t,25),this.be(e,t)}be(e,t){t.Ie(e)}Re(e,t){const n=e.fields||{};this.ye(t,55);for(const r of Object.keys(n))this.Te(r,t),this.me(n[r],t)}Pe(e,t){const n=e.values||[];this.ye(t,50);for(const r of n)this.me(r,t)}ve(e,t){this.ye(t,37),Ai.fromName(e).path.forEach((e=>{this.ye(t,60),this.be(e,t)}))}ye(e,t){e.pe(t)}Ee(e){e.pe(2)}}Sc.Ve=new Sc;
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
class Tc{constructor(){this.rn=new Ic}addToCollectionParentIndex(e,t){return this.rn.add(t),Mi.resolve()}getCollectionParents(e,t){return Mi.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return Mi.resolve()}deleteFieldIndex(e,t){return Mi.resolve()}getDocumentsMatchingTarget(e,t){return Mi.resolve(null)}getIndexType(e,t){return Mi.resolve(0)}getFieldIndexes(e,t){return Mi.resolve([])}getNextCollectionGroupToUpdate(e){return Mi.resolve(null)}getMinOffset(e,t){return Mi.resolve(Ri.min())}getMinOffsetFromCollectionGroup(e,t){return Mi.resolve(Ri.min())}updateCollectionGroup(e,t,n){return Mi.resolve()}updateIndexEntries(e,t){return Mi.resolve()}}class Ic{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Yi(Ti.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Yi(Ti.comparator)).toArray()}}
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
 */new Uint8Array(0);class kc{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new kc(e,kc.DEFAULT_COLLECTION_PERCENTILE,kc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */kc.DEFAULT_COLLECTION_PERCENTILE=10,kc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,kc.DEFAULT=new kc(41943040,kc.DEFAULT_COLLECTION_PERCENTILE,kc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),kc.DISABLED=new kc(-1,0,0);
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
class Ac{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Ac(0)}static Mn(){return new Ac(-1)}}
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
class Cc{constructor(){this.changes=new _s((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,xo.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Mi.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
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
class Oc{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
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
 */class xc{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&oa(n.mutation,e,Zi.empty(),Ei.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Ns()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Ns()){const r=Cs();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=ks();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Cs();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Ns())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=Ts();const o=xs(),s=xs();return t.forEach(((e,t)=>{const s=n.get(t.key);r.has(t.key)&&(void 0===s||s.mutation instanceof ua)?i=i.insert(t.key,t):void 0!==s?(o.set(t.key,s.mutation.getFieldMask()),oa(s.mutation,t,s.mutation.getFieldMask(),Ei.now())):o.set(t.key,Zi.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>o.set(e,t))),t.forEach(((e,t)=>{var n;return s.set(e,new Oc(t,null!==(n=o.get(e))&&void 0!==n?n:null))})),s)))}recalculateAndSaveOverlays(e,t){const n=xs();let r=new Wi(((e,t)=>e-t)),i=Ns();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const o=t.get(e);if(null===o)return;let s=n.get(e)||Zi.empty();s=i.applyToLocalView(o,s),n.set(e,s);const a=(r.get(i.batchId)||Ns()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const o=[],s=r.getReverseIterator();for(;s.hasNext();){const r=s.getNext(),a=r.key,c=r.value,u=Os();c.forEach((e=>{if(!i.has(e)){const r=ra(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),o.push(this.documentOverlayCache.saveOverlays(e,a,u))}return Mi.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return Ai.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ls(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Mi.resolve(Cs());let s=-1,a=i;return o.next((t=>Mi.forEach(t,((t,n)=>(s<n.largestBatchId&&(s=n.largestBatchId),i.get(t)?Mi.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,Ns()))).next((e=>({batchId:s,changes:As(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ai(t)).next((e=>{let t=ks();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=ks();return this.indexManager.getCollectionParents(e,r).next((o=>Mi.forEach(o,(o=>{const s=function(e,t){return new is(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,o.child(r));return this.getDocumentsMatchingCollectionQuery(e,s,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r)))).next((e=>{r.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,xo.newInvalidDocument(r)))}));let n=ks();return e.forEach(((e,i)=>{const o=r.get(e);void 0!==o&&oa(o.mutation,i,Zi.empty(),Ei.now()),vs(t,i)&&(n=n.insert(e,i))})),n}))}}
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
 */class Rc{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return Mi.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var n;return this.cs.set(t.id,{id:(n=t).id,version:n.version,createTime:Wa(n.createTime)}),Mi.resolve()}getNamedQuery(e,t){return Mi.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,function(e){return{name:e.name,query:_c(e.bundledQuery),readTime:Wa(e.readTime)}}(t)),Mi.resolve()}}
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
 */class Pc{constructor(){this.overlays=new Wi(Ai.comparator),this.ls=new Map}getOverlay(e,t){return Mi.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Cs();return Mi.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.we(e,t,r)})),Mi.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.ls.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.ls.delete(n)),Mi.resolve()}getOverlaysForCollection(e,t,n){const r=Cs(),i=t.length+1,o=new Ai(t.child("")),s=this.overlays.getIteratorFrom(o);for(;s.hasNext();){const e=s.getNext().value,o=e.getKey();if(!t.isPrefixOf(o.path))break;o.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Mi.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Wi(((e,t)=>e-t));const o=this.overlays.getIterator();for(;o.hasNext();){const e=o.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Cs(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const s=Cs(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>s.set(e,t))),s.size()>=r)break;return Mi.resolve(s)}we(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.ls.get(r.largestBatchId).delete(n.key);this.ls.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new ya(t,n));let i=this.ls.get(t);void 0===i&&(i=Ns(),this.ls.set(t,i)),this.ls.set(t,i.add(n.key))}}
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
 */class Nc{constructor(){this.fs=new Yi(Dc.ds),this.ws=new Yi(Dc._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){const n=new Dc(e,t);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.ys(new Dc(e,t))}ps(e,t){e.forEach((e=>this.removeReference(e,t)))}Is(e){const t=new Ai(new Ti([])),n=new Dc(t,e),r=new Dc(t,e+1),i=[];return this.ws.forEachInRange([n,r],(e=>{this.ys(e),i.push(e.key)})),i}Ts(){this.fs.forEach((e=>this.ys(e)))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new Ai(new Ti([])),n=new Dc(t,e),r=new Dc(t,e+1);let i=Ns();return this.ws.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new Dc(e,0),n=this.fs.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Dc{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return Ai.comparator(e.key,t.key)||wi(e.As,t.As)}static _s(e,t){return wi(e.As,t.As)||Ai.comparator(e.key,t.key)}}
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
 */class Lc{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new Yi(Dc.ds)}checkEmpty(e){return Mi.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ma(i,t,n,r);this.mutationQueue.push(o);for(const s of r)this.Rs=this.Rs.add(new Dc(s.key,i)),this.indexManager.addToCollectionParentIndex(e,s.key.path.popLast());return Mi.resolve(o)}lookupMutationBatch(e,t){return Mi.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.bs(n),i=r<0?0:r;return Mi.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Mi.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(e){return Mi.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Dc(t,0),r=new Dc(t,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([n,r],(e=>{const t=this.Ps(e.As);i.push(t)})),Mi.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Yi(wi);return t.forEach((e=>{const t=new Dc(e,0),r=new Dc(e,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([t,r],(e=>{n=n.add(e.As)}))})),Mi.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Ai.isDocumentKey(i)||(i=i.child(""));const o=new Dc(new Ai(i),0);let s=new Yi(wi);return this.Rs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(s=s.add(e.As)),!0)}),o),Mi.resolve(this.Vs(s))}Vs(e){const t=[];return e.forEach((e=>{const n=this.Ps(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){ii(0===this.Ss(t.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return Mi.forEach(t.mutations,(r=>{const i=new Dc(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Rs=n}))}Cn(e){}containsKey(e,t){const n=new Dc(t,0),r=this.Rs.firstAfterOrEqual(n);return Mi.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Mi.resolve()}Ss(e,t){return this.bs(e)}bs(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
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
 */class Mc{constructor(e){this.Ds=e,this.docs=new Wi(Ai.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,o=this.Ds(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Mi.resolve(n?n.document.mutableCopy():xo.newInvalidDocument(t))}getEntries(e,t){let n=Ts();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():xo.newInvalidDocument(e))})),Mi.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=Ts();const o=t.path,s=new Ai(o.child("")),a=this.docs.getIteratorFrom(s);for(;a.hasNext();){const{key:e,value:{document:s}}=a.getNext();if(!o.isPrefixOf(e.path))break;e.path.length>o.length+1||Pi(xi(s),n)<=0||(r.has(s.key)||vs(t,s))&&(i=i.insert(s.key,s.mutableCopy()))}return Mi.resolve(i)}getAllFromCollectionGroup(e,t,n,r){ri()}Cs(e,t){return Mi.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new jc(this)}getSize(e){return Mi.resolve(this.size)}}class jc extends Cc{constructor(e){super(),this.os=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.os.addEntry(e,r)):this.os.removeEntry(n)})),Mi.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}
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
 */class Fc{constructor(e){this.persistence=e,this.xs=new _s((e=>ts(e)),ns),this.lastRemoteSnapshotVersion=_i.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Nc,this.targetCount=0,this.Ms=Ac.kn()}forEachTarget(e,t){return this.xs.forEach(((e,n)=>t(n))),Mi.resolve()}getLastRemoteSnapshotVersion(e){return Mi.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Mi.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),Mi.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Ns&&(this.Ns=t),Mi.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new Ac(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,Mi.resolve()}updateTargetData(e,t){return this.Fn(t),Mi.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,Mi.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.xs.forEach(((o,s)=>{s.sequenceNumber<=t&&null===n.get(s.targetId)&&(this.xs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,s.targetId)),r++)})),Mi.waitFor(i).next((()=>r))}getTargetCount(e){return Mi.resolve(this.targetCount)}getTargetData(e,t){const n=this.xs.get(t)||null;return Mi.resolve(n)}addMatchingKeys(e,t,n){return this.ks.gs(t,n),Mi.resolve()}removeMatchingKeys(e,t,n){this.ks.ps(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Mi.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),Mi.resolve()}getMatchingKeysForTargetId(e,t){const n=this.ks.Es(t);return Mi.resolve(n)}containsKey(e,t){return Mi.resolve(this.ks.containsKey(t))}}
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
 */class Uc{constructor(e,t){this.$s={},this.overlays={},this.Os=new Fi(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new Fc(this),this.indexManager=new Tc,this.remoteDocumentCache=function(e){return new Mc(e)}((e=>this.referenceDelegate.Ls(e))),this.serializer=new Ec(t),this.qs=new Rc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Pc,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.$s[e.toKey()];return n||(n=new Lc(t,this.referenceDelegate),this.$s[e.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,n){Zr("MemoryPersistence","Starting transaction:",e);const r=new Vc(this.Os.next());return this.referenceDelegate.Us(),n(r).next((e=>this.referenceDelegate.Ks(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Gs(e,t){return Mi.or(Object.values(this.$s).map((n=>()=>n.containsKey(e,t))))}}class Vc extends Di{constructor(e){super(),this.currentSequenceNumber=e}}class $c{constructor(e){this.persistence=e,this.Qs=new Nc,this.js=null}static zs(e){return new $c(e)}get Ws(){if(this.js)return this.js;throw ri()}addReference(e,t,n){return this.Qs.addReference(n,t),this.Ws.delete(n.toString()),Mi.resolve()}removeReference(e,t,n){return this.Qs.removeReference(n,t),this.Ws.add(n.toString()),Mi.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),Mi.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach((e=>this.Ws.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ws.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Mi.forEach(this.Ws,(n=>{const r=Ai.fromPath(n);return this.Hs(e,r).next((e=>{e||t.removeEntry(r,_i.min())}))})).next((()=>(this.js=null,t.apply(e))))}updateLimboDocument(e,t){return this.Hs(e,t).next((e=>{e?this.Ws.delete(t.toString()):this.Ws.add(t.toString())}))}Ls(e){return 0}Hs(e,t){return Mi.or([()=>Mi.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}
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
class Bc{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Fi=n,this.Bi=r}static Li(e,t){let n=Ns(),r=Ns();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Bc(e,t.fromCache,n,r)}}
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
 */class qc{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Ki(e,t).next((i=>i||this.Gi(e,t,r,n))).next((n=>n||this.Qi(e,t)))}Ki(e,t){if(as(t))return Mi.resolve(null);let n=ds(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=ps(t,null,"F"),n=ds(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=Ns(...r);return this.Ui.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const o=this.ji(t,r);return this.zi(t,o,i,n.readTime)?this.Ki(e,ps(t,null,"F")):this.Wi(e,o,t,n)}))))})))))}Gi(e,t,n,r){return as(t)||r.isEqual(_i.min())?this.Qi(e,t):this.Ui.getDocuments(e,n).next((i=>{const o=this.ji(t,i);return this.zi(t,o,n,r)?this.Qi(e,t):(Xr()<=s["in"].DEBUG&&Zr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ys(t)),this.Wi(e,o,t,Oi(r,-1)))}))}ji(e,t){let n=new Yi(bs(e));return t.forEach(((t,r)=>{vs(e,r)&&(n=n.add(r))})),n}zi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(e,t){return Xr()<=s["in"].DEBUG&&Zr("QueryEngine","Using full collection scan to execute query:",ys(t)),this.Ui.getDocumentsMatchingQuery(e,t,Ri.min())}Wi(e,t,n,r){return this.Ui.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
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
 */class zc{constructor(e,t,n,r){this.persistence=e,this.Hi=t,this.serializer=r,this.Ji=new Wi(wi),this.Yi=new _s((e=>ts(e)),ns),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(n)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new xc(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ji)))}}function Hc(e,t,n,r){return new zc(e,t,n,r)}async function Gc(e,t){const n=oi(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.tr(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],o=[];let s=Ns();for(const e of r){i.push(e.batchId);for(const t of e.mutations)s=s.add(t.key)}for(const e of t){o.push(e.batchId);for(const t of e.mutations)s=s.add(t.key)}return n.localDocuments.getDocuments(e,s).next((e=>({er:e,removedBatchIds:i,addedBatchIds:o})))}))}))}function Kc(e,t){const n=oi(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,o=i.keys();let s=Mi.resolve();return o.forEach((e=>{s=s.next((()=>r.getEntry(t,e))).next((t=>{const o=n.docVersions.get(e);ii(null!==o),t.version.compareTo(o)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),s.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Ns();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function Wc(e){const t=oi(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Bs.getLastRemoteSnapshotVersion(e)))}function Jc(e,t){const n=oi(e),r=t.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const s=[];t.targetChanges.forEach(((o,a)=>{const c=i.get(a);if(!c)return;s.push(n.Bs.removeMatchingKeys(e,o.removedDocuments,a).next((()=>n.Bs.addMatchingKeys(e,o.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?u=u.withResumeToken(to.EMPTY_BYTE_STRING,_i.min()).withLastLimboFreeSnapshotVersion(_i.min()):o.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(o.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,o)&&s.push(n.Bs.updateTargetData(e,u))}));let a=Ts(),c=Ns();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&s.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),s.push(Qc(e,o,t.documentUpdates).next((e=>{a=e.nr,c=e.sr}))),!r.isEqual(_i.min())){const t=n.Bs.getLastRemoteSnapshotVersion(e).next((t=>n.Bs.setTargetsMetadata(e,e.currentSequenceNumber,r)));s.push(t)}return Mi.waitFor(s).next((()=>o.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.Ji=i,e)))}function Qc(e,t,n){let r=Ns(),i=Ns();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Ts();return n.forEach(((n,o)=>{const s=e.get(n);o.isFoundDocument()!==s.isFoundDocument()&&(i=i.add(n)),o.isNoDocument()&&o.version.isEqual(_i.min())?(t.removeEntry(n,o.readTime),r=r.insert(n,o)):!s.isValidDocument()||o.version.compareTo(s.version)>0||0===o.version.compareTo(s.version)&&s.hasPendingWrites?(t.addEntry(o),r=r.insert(n,o)):Zr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",o.version)})),{nr:r,sr:i}}))}function Yc(e,t){const n=oi(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function Xc(e,t){const n=oi(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Bs.getTargetData(e,t).next((i=>i?(r=i,Mi.resolve(r)):n.Bs.allocateTargetId(e).next((i=>(r=new bc(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Bs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Ji.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(e.targetId,e),n.Yi.set(t,e.targetId)),e}))}async function Zc(e,t,n){const r=oi(e),i=r.Ji.get(t),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!ji(e))throw e;Zr("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Ji=r.Ji.remove(t),r.Yi.delete(i.target)}function eu(e,t,n){const r=oi(e);let i=_i.min(),o=Ns();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=oi(e),i=r.Yi.get(n);return void 0!==i?Mi.resolve(r.Ji.get(i)):r.Bs.getTargetData(t,n)}(r,e,ds(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{o=e}))})).next((()=>r.Hi.getDocumentsMatchingQuery(e,t,n?i:_i.min(),n?o:Ns()))).next((e=>(tu(r,ws(t),e),{documents:e,ir:o})))))}function tu(e,t,n){let r=e.Xi.get(t)||_i.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Xi.set(t,r)}class nu{constructor(){this.activeTargetIds=Ls()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ru{constructor(){this.Hr=new nu,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,n){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new nu,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
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
 */class iu{Yr(e){}shutdown(){}}
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
 */class ou{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){Zr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){Zr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */let su=null;function au(){return null===su?su=268435456+Math.round(2147483648*Math.random()):su++,"0x"+su.toString(16)
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
 */}const cu={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
 */class uu{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}
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
 */const lu="WebChannelConnection";class hu extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,n,r,i){const o=au(),s=this.To(e,t);Zr("RestConnection",`Sending RPC '${e}' ${o}:`,s,n);const a={};return this.Eo(a,r,i),this.Ao(e,s,a,n).then((t=>(Zr("RestConnection",`Received RPC '${e}' ${o}: `,t),t)),(t=>{throw ti("RestConnection",`RPC '${e}' ${o} failed with error: `,t,"url: ",s,"request:",n),t}))}vo(e,t,n,r,i,o){return this.Io(e,t,n,r,i)}Eo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Qr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}To(e,t){const n=cu[e];return`${this.mo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,n,r){const i=au();return new Promise(((o,s)=>{const a=new Hr;a.setWithCredentials(!0),a.listenOnce(Vr.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Ur.NO_ERROR:const t=a.getResponseJson();Zr(lu,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),o(t);break;case Ur.TIMEOUT:Zr(lu,`RPC '${e}' ${i} timed out`),s(new ai(si.DEADLINE_EXCEEDED,"Request time out"));break;case Ur.HTTP_ERROR:const n=a.getStatus();if(Zr(lu,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(si).indexOf(t)>=0?t:si.UNKNOWN}(t.status);s(new ai(e,t.message))}else s(new ai(si.UNKNOWN,"Server responded with status "+a.getStatus()))}else s(new ai(si.UNAVAILABLE,"Connection failed."));break;default:ri()}}finally{Zr(lu,`RPC '${e}' ${i} completed.`)}}));const c=JSON.stringify(r);Zr(lu,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",c,n,15)}))}Ro(e,t,n){const r=au(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=jr(),s=Fr(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new qr({})),this.Eo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const u=i.join("");Zr(lu,`Creating RPC '${e}' stream ${r}: ${u}`,a);const l=o.createWebChannel(u,a);let h=!1,d=!1;const f=new uu({ro:t=>{d?Zr(lu,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(Zr(lu,`Opening RPC '${e}' stream ${r} transport.`),l.open(),h=!0),Zr(lu,`RPC '${e}' stream ${r} sending:`,t),l.send(t))},oo:()=>l.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(l,zr.EventType.OPEN,(()=>{d||Zr(lu,`RPC '${e}' stream ${r} transport opened.`)})),p(l,zr.EventType.CLOSE,(()=>{d||(d=!0,Zr(lu,`RPC '${e}' stream ${r} transport closed`),f.wo())})),p(l,zr.EventType.ERROR,(t=>{d||(d=!0,ti(lu,`RPC '${e}' stream ${r} transport errored:`,t),f.wo(new ai(si.UNAVAILABLE,"The operation could not be completed")))})),p(l,zr.EventType.MESSAGE,(t=>{var n;if(!d){const i=t.data[0];ii(!!i);const o=i,s=o.error||(null===(n=o[0])||void 0===n?void 0:n.error);if(s){Zr(lu,`RPC '${e}' stream ${r} received error:`,s);const t=s.status;let n=function(e){const t=wa[e];if(void 0!==t)return _a(t)}(t),i=s.message;void 0===n&&(n=si.INTERNAL,i="Unknown error status: "+t+" with message "+s.message),d=!0,f.wo(new ai(n,i)),l.close()}else Zr(lu,`RPC '${e}' stream ${r} received:`,i),f._o(i)}})),p(s,$r.STAT_EVENT,(t=>{t.stat===Br.PROXY?Zr(lu,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===Br.NOPROXY&&Zr(lu,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.fo()}),0),f}}
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
 */function du(){return"undefined"!=typeof document?document:null}
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
 */function fu(e){return new qa(e,!0)}
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
 */class pu{constructor(e,t,n=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=t,this.Po=n,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),r=Math.max(0,t-n);r>0&&Zr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,(()=>(this.Co=Date.now(),e()))),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}
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
 */class mu{constructor(e,t,n,r,i,o,s,a){this.ii=e,this.$o=n,this.Oo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=s,this.listener=a,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new pu(e,t)}Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,(()=>this.zo())))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==e?this.qo.reset():t&&t.code===si.RESOURCE_EXHAUSTED?(ei(t.toString()),ei("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===si.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Fo===t&&this.Zo(e,n)}),(t=>{e((()=>{const e=new ai(si.UNKNOWN,"Fetching auth token failed: "+t.message);return this.tu(e)}))}))}Zo(e,t){const n=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo((()=>{n((()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,(()=>(this.Ko()&&(this.state=3),Promise.resolve()))),this.listener.uo())))})),this.stream.ao((e=>{n((()=>this.tu(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Go(){this.state=5,this.qo.No((async()=>{this.state=0,this.start()}))}tu(e){return Zr("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget((()=>this.Fo===e?t():(Zr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class gu extends mu{constructor(e,t,n,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,o),this.serializer=i}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=ic(this.serializer,e),n=function(e){if(!("targetChange"in e))return _i.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?_i.min():t.readTime?Wa(t.readTime):_i.min()}(e);return this.listener.nu(t,n)}su(e){const t={};t.database=tc(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=rs(r)?{documents:ac(e,r)}:{query:cc(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Ga(e,t.resumeToken);const r=za(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(_i.min())>0){n.readTime=Ha(e,t.snapshotVersion.toTimestamp());const r=za(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=lc(this.serializer,e);n&&(t.labels=n),this.Wo(t)}iu(e){const t={};t.database=tc(this.serializer),t.removeTarget=e,this.Wo(t)}}class yu extends mu{constructor(e,t,n,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,o),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(ii(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const t=sc(e.writeResults,e.commitTime),n=Wa(e.commitTime);return this.listener.cu(n,t)}return ii(!e.writeResults||0===e.writeResults.length),this.ru=!0,this.listener.au()}hu(){const e={};e.database=tc(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>oc(this.serializer,e)))};this.Wo(t)}}
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
 */class vu extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new ai(si.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.Io(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===si.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ai(si.UNKNOWN,e.toString())}))}vo(e,t,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.vo(e,t,n,i,o,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===si.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ai(si.UNKNOWN,e.toString())}))}terminate(){this.lu=!0}}class wu{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve()))))}Iu(e){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,"Online"===e&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(ei(t),this.mu=!1):Zr("OnlineStateTracker",t)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}}
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
 */class bu{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr((e=>{n.enqueueAndForget((async()=>{Ou(this)&&(Zr("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=oi(e);t.vu.add(4),await _u(t),t.bu.set("Unknown"),t.vu.delete(4),await Eu(t)}(this))}))})),this.bu=new wu(n,r)}}async function Eu(e){if(Ou(e))for(const t of e.Ru)await t(!0)}async function _u(e){for(const t of e.Ru)await t(!1)}function Su(e,t){const n=oi(e);n.Au.has(t.targetId)||(n.Au.set(t.targetId,t),Cu(n)?Au(n):Ku(n).Ko()&&Iu(n,t))}function Tu(e,t){const n=oi(e),r=Ku(n);n.Au.delete(t),r.Ko()&&ku(n,t),0===n.Au.size&&(r.Ko()?r.jo():Ou(n)&&n.bu.set("Unknown"))}function Iu(e,t){if(e.Vu.qt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(_i.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Ku(e).su(t)}function ku(e,t){e.Vu.qt(t),Ku(e).iu(t)}function Au(e){e.Vu=new ja({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),le:t=>e.Au.get(t)||null,ue:()=>e.datastore.serializer.databaseId}),Ku(e).start(),e.bu.gu()}function Cu(e){return Ou(e)&&!Ku(e).Uo()&&e.Au.size>0}function Ou(e){return 0===oi(e).vu.size}function xu(e){e.Vu=void 0}async function Ru(e){e.Au.forEach(((t,n)=>{Iu(e,t)}))}async function Pu(e,t){xu(e),Cu(e)?(e.bu.Iu(t),Au(e)):e.bu.set("Unknown")}async function Nu(e,t,n){if(e.bu.set("Online"),t instanceof La&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Au.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Au.delete(r),e.Vu.removeTarget(r))}(e,t)}catch(n){Zr("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Du(e,n)}else if(t instanceof Na?e.Vu.Ht(t):t instanceof Da?e.Vu.ne(t):e.Vu.Xt(t),!n.isEqual(_i.min()))try{const t=await Wc(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Vu.ce(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Au.get(r);i&&e.Au.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.Au.get(t);if(!r)return;e.Au.set(t,r.withResumeToken(to.EMPTY_BYTE_STRING,r.snapshotVersion)),ku(e,t);const i=new bc(r.target,t,n,r.sequenceNumber);Iu(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Zr("RemoteStore","Failed to raise snapshot:",t),await Du(e,t)}}async function Du(e,t,n){if(!ji(t))throw t;e.vu.add(1),await _u(e),e.bu.set("Offline"),n||(n=()=>Wc(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Zr("RemoteStore","Retrying IndexedDB access"),await n(),e.vu.delete(1),await Eu(e)}))}function Lu(e,t){return t().catch((n=>Du(e,n,t)))}async function Mu(e){const t=oi(e),n=Wu(t);let r=t.Eu.length>0?t.Eu[t.Eu.length-1].batchId:-1;for(;ju(t);)try{const e=await Yc(t.localStore,r);if(null===e){0===t.Eu.length&&n.jo();break}r=e.batchId,Fu(t,e)}catch(e){await Du(t,e)}Uu(t)&&Vu(t)}function ju(e){return Ou(e)&&e.Eu.length<10}function Fu(e,t){e.Eu.push(t);const n=Wu(e);n.Ko()&&n.ou&&n.uu(t.mutations)}function Uu(e){return Ou(e)&&!Wu(e).Uo()&&e.Eu.length>0}function Vu(e){Wu(e).start()}async function $u(e){Wu(e).hu()}async function Bu(e){const t=Wu(e);for(const n of e.Eu)t.uu(n.mutations)}async function qu(e,t,n){const r=e.Eu.shift(),i=ga.from(r,t,n);await Lu(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await Mu(e)}async function zu(e,t){t&&Wu(e).ou&&await async function(e,t){if(n=t.code,Ea(n)&&n!==si.ABORTED){const n=e.Eu.shift();Wu(e).Qo(),await Lu(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Mu(e)}var n}(e,t),Uu(e)&&Vu(e)}async function Hu(e,t){const n=oi(e);n.asyncQueue.verifyOperationInProgress(),Zr("RemoteStore","RemoteStore received new credentials");const r=Ou(n);n.vu.add(3),await _u(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.vu.delete(3),await Eu(n)}async function Gu(e,t){const n=oi(e);t?(n.vu.delete(2),await Eu(n)):t||(n.vu.add(2),await _u(n),n.bu.set("Unknown"))}function Ku(e){return e.Su||(e.Su=function(e,t,n){const r=oi(e);return r.fu(),new gu(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
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
 */}(e.datastore,e.asyncQueue,{uo:Ru.bind(null,e),ao:Pu.bind(null,e),nu:Nu.bind(null,e)}),e.Ru.push((async t=>{t?(e.Su.Qo(),Cu(e)?Au(e):e.bu.set("Unknown")):(await e.Su.stop(),xu(e))}))),e.Su}function Wu(e){return e.Du||(e.Du=function(e,t,n){const r=oi(e);return r.fu(),new yu(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{uo:$u.bind(null,e),ao:zu.bind(null,e),au:Bu.bind(null,e),cu:qu.bind(null,e)}),e.Ru.push((async t=>{t?(e.Du.Qo(),await Mu(e)):(await e.Du.stop(),e.Eu.length>0&&(Zr("RemoteStore",`Stopping write stream with ${e.Eu.length} pending writes`),e.Eu=[]))}))),e.Du
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
 */}class Ju{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new ci,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const o=Date.now()+n,s=new Ju(e,t,o,r,i);return s.start(n),s}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ai(si.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qu(e,t){if(ei("AsyncQueue",`${t}: ${e}`),ji(e))return new ai(si.UNAVAILABLE,`${t}: ${e}`);throw e}
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
 */class Yu{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Ai.comparator(t.key,n.key):(e,t)=>Ai.comparator(e.key,t.key),this.keyedMap=ks(),this.sortedSet=new Wi(this.comparator)}static emptySet(e){return new Yu(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Yu))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Yu;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
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
 */class Xu{constructor(){this.Cu=new Wi(Ai.comparator)}track(e){const t=e.doc.key,n=this.Cu.get(t);n?0!==e.type&&3===n.type?this.Cu=this.Cu.insert(t,e):3===e.type&&1!==n.type?this.Cu=this.Cu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Cu=this.Cu.remove(t):1===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):ri():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Zu{constructor(e,t,n,r,i,o,s,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=s,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const o=[];return t.forEach((e=>{o.push({type:0,doc:e})})),new Zu(e,t,Yu.emptySet(t),o,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ms(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
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
 */class el{constructor(){this.Nu=void 0,this.listeners=[]}}class tl{constructor(){this.queries=new _s((e=>gs(e)),ms),this.onlineState="Unknown",this.ku=new Set}}async function nl(e,t){const n=oi(e),r=t.query;let i=!1,o=n.queries.get(r);if(o||(i=!0,o=new el),i)try{o.Nu=await n.onListen(r)}catch(e){const n=Qu(e,`Initialization of query '${ys(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,o),o.listeners.push(t),t.Mu(n.onlineState),o.Nu&&t.$u(o.Nu)&&sl(n)}async function rl(e,t){const n=oi(e),r=t.query;let i=!1;const o=n.queries.get(r);if(o){const e=o.listeners.indexOf(t);e>=0&&(o.listeners.splice(e,1),i=0===o.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function il(e,t){const n=oi(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.$u(i)&&(r=!0);t.Nu=i}}r&&sl(n)}function ol(e,t,n){const r=oi(e),i=r.queries.get(t);if(i)for(const o of i.listeners)o.onError(n);r.queries.delete(t)}function sl(e){e.ku.forEach((e=>{e.next()}))}class al{constructor(e,t,n){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}$u(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Zu(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Ku||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Uu(e){e=Zu.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}
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
class cl{constructor(e){this.key=e}}class ul{constructor(e){this.key=e}}class ll{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=Ns(),this.mutatedKeys=Ns(),this.tc=bs(e),this.ec=new Yu(this.tc)}get nc(){return this.Yu}sc(e,t){const n=t?t.ic:new Xu,r=t?t.ec:this.ec;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,s=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=vs(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.rc(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.tc(l,a)>0||c&&this.tc(l,c)<0)&&(s=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(s=!0)),f&&(l?(o=o.add(l),i=d?i.add(e):i.delete(e)):(o=o.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;o.size>this.query.limit;){const e="F"===this.query.limitType?o.last():o.first();o=o.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{ec:o,ic:n,zi:s,mutatedKeys:i}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ri()}};return n(e)-n(t)}
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
 */(e.type,t.type)||this.tc(e.doc,t.doc))),this.oc(n);const o=t?this.uc():[],s=0===this.Zu.size&&this.current?1:0,a=s!==this.Xu;return this.Xu=s,0!==i.length||a?{snapshot:new Zu(this.query,e.ec,r,i,e.mutatedKeys,0===s,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Xu,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach((e=>this.Yu=this.Yu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Yu=this.Yu.delete(e))),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=Ns(),this.ec.forEach((e=>{this.ac(e.key)&&(this.Zu=this.Zu.add(e.key))}));const t=[];return e.forEach((e=>{this.Zu.has(e)||t.push(new ul(e))})),this.Zu.forEach((n=>{e.has(n)||t.push(new cl(n))})),t}hc(e){this.Yu=e.ir,this.Zu=Ns();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return Zu.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}}class hl{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class dl{constructor(e){this.key=e,this.fc=!1}}class fl{constructor(e,t,n,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new _s((e=>gs(e)),ms),this._c=new Map,this.mc=new Set,this.gc=new Wi(Ai.comparator),this.yc=new Map,this.Ic=new Nc,this.Tc={},this.Ec=new Map,this.Ac=Ac.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return!0===this.vc}}async function pl(e,t){const n=Nl(e);let r,i;const o=n.wc.get(t);if(o)r=o.targetId,n.sharedClientState.addLocalQueryTarget(r),i=o.view.lc();else{const e=await Xc(n.localStore,ds(t)),o=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await ml(n,t,r,"current"===o,e.resumeToken),n.isPrimaryClient&&Su(n.remoteStore,e)}return i}async function ml(e,t,n,r,i){e.Rc=(t,n,r)=>async function(e,t,n,r){let i=t.view.sc(n);i.zi&&(i=await eu(e.localStore,t.query,!1).then((({documents:e})=>t.view.sc(e,i))));const o=r&&r.targetChanges.get(t.targetId),s=t.view.applyChanges(i,e.isPrimaryClient,o);return Al(e,t.targetId,s.cc),s.snapshot}(e,t,n,r);const o=await eu(e.localStore,t,!0),s=new ll(t,o.ir),a=s.sc(o.documents),c=Pa.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=s.applyChanges(a,e.isPrimaryClient,c);Al(e,n,u.cc);const l=new hl(t,n,s);return e.wc.set(t,l),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),u.snapshot}async function gl(e,t){const n=oi(e),r=n.wc.get(t),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter((e=>!ms(e,t)))),void n.wc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Zc(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Tu(n.remoteStore,r.targetId),Il(n,r.targetId)})).catch(Li)):(Il(n,r.targetId),await Zc(n.localStore,r.targetId,!0))}async function yl(e,t,n){const r=Dl(e);try{const e=await function(e,t){const n=oi(e),r=Ei.now(),i=t.reduce(((e,t)=>e.add(t.key)),Ns());let o,s;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Ts(),c=Ns();return n.Zi.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{o=i;const s=[];for(const e of t){const t=sa(e,o.get(e.key).overlayedDocument);null!=t&&s.push(new ua(e.key,t,Oo(t.value.mapValue),ea.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,s,t)})).next((t=>{s=t;const r=t.applyToLocalDocumentSet(o,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:s.batchId,changes:As(o)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Tc[e.currentUser.toKey()];r||(r=new Wi(wi)),r=r.insert(t,n),e.Tc[e.currentUser.toKey()]=r}(r,e.batchId,n),await xl(r,e.changes),await Mu(r.remoteStore)}catch(e){const t=Qu(e,"Failed to persist write");n.reject(t)}}async function vl(e,t){const n=oi(e);try{const e=await Jc(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.yc.get(t);r&&(ii(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.fc=!0:e.modifiedDocuments.size>0?ii(r.fc):e.removedDocuments.size>0&&(ii(r.fc),r.fc=!1))})),await xl(n,e,t)}catch(e){await Li(e)}}function wl(e,t,n){const r=oi(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.wc.forEach(((n,r)=>{const i=r.view.Mu(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=oi(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.Mu(t)&&(r=!0)})),r&&sl(n)}(r.eventManager,t),e.length&&r.dc.nu(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function bl(e,t,n){const r=oi(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.yc.get(t),o=i&&i.key;if(o){let e=new Wi(Ai.comparator);e=e.insert(o,xo.newNoDocument(o,_i.min()));const n=Ns().add(o),i=new Ra(_i.min(),new Map,new Wi(wi),e,n);await vl(r,i),r.gc=r.gc.remove(o),r.yc.delete(t),Ol(r)}else await Zc(r.localStore,t,!1).then((()=>Il(r,t,n))).catch(Li)}async function El(e,t){const n=oi(e),r=t.batch.batchId;try{const e=await Kc(n.localStore,t);Tl(n,r,null),Sl(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await xl(n,e)}catch(e){await Li(e)}}async function _l(e,t,n){const r=oi(e);try{const e=await function(e,t){const n=oi(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(ii(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);Tl(r,t,n),Sl(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await xl(r,e)}catch(n){await Li(n)}}function Sl(e,t){(e.Ec.get(t)||[]).forEach((e=>{e.resolve()})),e.Ec.delete(t)}function Tl(e,t,n){const r=oi(e);let i=r.Tc[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Tc[r.currentUser.toKey()]=i}}function Il(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e._c.get(t))e.wc.delete(r),n&&e.dc.Pc(r,n);e._c.delete(t),e.isPrimaryClient&&e.Ic.Is(t).forEach((t=>{e.Ic.containsKey(t)||kl(e,t)}))}function kl(e,t){e.mc.delete(t.path.canonicalString());const n=e.gc.get(t);null!==n&&(Tu(e.remoteStore,n),e.gc=e.gc.remove(t),e.yc.delete(n),Ol(e))}function Al(e,t,n){for(const r of n)r instanceof cl?(e.Ic.addReference(r.key,t),Cl(e,r)):r instanceof ul?(Zr("SyncEngine","Document no longer in limbo: "+r.key),e.Ic.removeReference(r.key,t),e.Ic.containsKey(r.key)||kl(e,r.key)):ri()}function Cl(e,t){const n=t.key,r=n.path.canonicalString();e.gc.get(n)||e.mc.has(r)||(Zr("SyncEngine","New document in limbo: "+n),e.mc.add(r),Ol(e))}function Ol(e){for(;e.mc.size>0&&e.gc.size<e.maxConcurrentLimboResolutions;){const t=e.mc.values().next().value;e.mc.delete(t);const n=new Ai(Ti.fromString(t)),r=e.Ac.next();e.yc.set(r,new dl(n)),e.gc=e.gc.insert(n,r),Su(e.remoteStore,new bc(ds(ss(n.path)),r,"TargetPurposeLimboResolution",Fi.ct))}}async function xl(e,t,n){const r=oi(e),i=[],o=[],s=[];r.wc.isEmpty()||(r.wc.forEach(((e,a)=>{s.push(r.Rc(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=Bc.Li(a.targetId,e);o.push(t)}})))})),await Promise.all(s),r.dc.nu(i),await async function(e,t){const n=oi(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Mi.forEach(t,(t=>Mi.forEach(t.Fi,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Mi.forEach(t.Bi,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!ji(e))throw e;Zr("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.Ji.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Ji=n.Ji.insert(e,i)}}}(r.localStore,o))}async function Rl(e,t){const n=oi(e);if(!n.currentUser.isEqual(t)){Zr("SyncEngine","User change. New user:",t.toKey());const e=await Gc(n.localStore,t);n.currentUser=t,function(e,t){e.Ec.forEach((e=>{e.forEach((e=>{e.reject(new ai(si.CANCELLED,t))}))})),e.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await xl(n,e.er)}}function Pl(e,t){const n=oi(e),r=n.yc.get(t);if(r&&r.fc)return Ns().add(r.key);{let e=Ns();const r=n._c.get(t);if(!r)return e;for(const t of r){const r=n.wc.get(t);e=e.unionWith(r.view.nc)}return e}}function Nl(e){const t=oi(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=vl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Pl.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=bl.bind(null,t),t.dc.nu=il.bind(null,t.eventManager),t.dc.Pc=ol.bind(null,t.eventManager),t}function Dl(e){const t=oi(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=El.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=_l.bind(null,t),t}class Ll{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=fu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Hc(this.persistence,new qc,e.initialUser,this.serializer)}createPersistence(e){return new Uc($c.zs,this.serializer)}createSharedClientState(e){return new ru}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ml{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>wl(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Rl.bind(null,this.syncEngine),await Gu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new tl}createDatastore(e){const t=fu(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new hu(r));var r;return function(e,t,n,r){return new vu(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>wl(this.syncEngine,e,0),o=ou.D()?new ou:new iu,new bu(t,n,r,i,o);var t,n,r,i,o}createSyncEngine(e,t){return function(e,t,n,r,i,o,s){const a=new fl(e,t,n,r,i,o);return s&&(a.vc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=oi(e);Zr("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await _u(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}
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
class jl{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):ei("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
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
class Fl{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Jr.UNAUTHENTICATED,this.clientId=vi.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Zr("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Zr("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ai(si.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ci;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Qu(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Ul(e,t){e.asyncQueue.verifyOperationInProgress(),Zr("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await Gc(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Vl(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Bl(e);Zr("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>Hu(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Hu(t.remoteStore,n))),e._onlineComponents=t}function $l(e){return"FirebaseError"===e.name?e.code===si.FAILED_PRECONDITION||e.code===si.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function Bl(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Zr("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ul(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!$l(n))throw n;ti("Error using user provided cache. Falling back to memory cache: "+n),await Ul(e,new Ll)}}else Zr("FirestoreClient","Using default OfflineComponentProvider"),await Ul(e,new Ll);return e._offlineComponents}async function ql(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Zr("FirestoreClient","Using user provided OnlineComponentProvider"),await Vl(e,e._uninitializedComponentsProvider._online)):(Zr("FirestoreClient","Using default OnlineComponentProvider"),await Vl(e,new Ml))),e._onlineComponents}function zl(e){return ql(e).then((e=>e.syncEngine))}async function Hl(e){const t=await ql(e),n=t.eventManager;return n.onListen=pl.bind(null,t.syncEngine),n.onUnlisten=gl.bind(null,t.syncEngine),n}function Gl(e,t,n={}){const r=new ci;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const o=new jl({next:o=>{t.enqueueAndForget((()=>rl(e,s)));const a=o.docs.has(n);!a&&o.fromCache?i.reject(new ai(si.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&o.fromCache&&r&&"server"===r.source?i.reject(new ai(si.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(o)},error:e=>i.reject(e)}),s=new al(ss(n.path),o,{includeMetadataChanges:!0,Ku:!0});return nl(e,s)}(await Hl(e),e.asyncQueue,t,n,r))),r.promise}function Kl(e,t,n={}){const r=new ci;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const o=new jl({next:n=>{t.enqueueAndForget((()=>rl(e,s))),n.fromCache&&"server"===r.source?i.reject(new ai(si.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),s=new al(n,o,{includeMetadataChanges:!0,Ku:!0});return nl(e,s)}(await Hl(e),e.asyncQueue,t,n,r))),r.promise}
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
 */
function Wl(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
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
 */}const Jl=new Map;
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
 */function Ql(e,t,n){if(!n)throw new ai(si.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Yl(e,t,n,r){if(!0===t&&!0===r)throw new ai(si.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Xl(e){if(!Ai.isDocumentKey(e))throw new ai(si.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Zl(e){if(Ai.isDocumentKey(e))throw new ai(si.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function eh(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":ri()}function th(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new ai(si.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=eh(e);throw new ai(si.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
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
class nh{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new ai(si.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new ai(si.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Yl("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Wl(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new ai(si.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new ai(si.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new ai(si.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
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
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}class rh{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ai(si.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new ai(si.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nh(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new li;switch(e.type){case"firstParty":return new pi(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new ai(si.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Jl.get(e);t&&(Zr("ComponentProvider","Removing Datastore"),Jl.delete(e),t.terminate())}(this),Promise.resolve()}}function ih(e,t,n,r={}){var i;const o=(e=th(e,rh))._getSettings(),s=`${t}:${n}`;if("firestore.googleapis.com"!==o.host&&o.host!==s&&ti("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Jr.MOCK_USER;else{t=(0,a.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const o=r.mockUserToken.sub||r.mockUserToken.user_id;if(!o)throw new ai(si.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Jr(o)}e._authCredentials=new hi(new ui(t,n))}}
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
 */class oh{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ah(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new oh(this.firestore,e,this._key)}}class sh{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new sh(this.firestore,e,this._query)}}class ah extends sh{constructor(e,t,n){super(e,t,ss(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new oh(this.firestore,null,new Ai(e))}withConverter(e){return new ah(this.firestore,e,this._path)}}function ch(e,t,...n){if(e=(0,a.m9)(e),Ql("collection","path",t),e instanceof rh){const r=Ti.fromString(t,...n);return Zl(r),new ah(e,null,r)}{if(!(e instanceof oh||e instanceof ah))throw new ai(si.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ti.fromString(t,...n));return Zl(r),new ah(e.firestore,null,r)}}function uh(e,t,...n){if(e=(0,a.m9)(e),1===arguments.length&&(t=vi.A()),Ql("doc","path",t),e instanceof rh){const r=Ti.fromString(t,...n);return Xl(r),new oh(e,null,new Ai(r))}{if(!(e instanceof oh||e instanceof ah))throw new ai(si.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ti.fromString(t,...n));return Xl(r),new oh(e.firestore,e instanceof ah?e.converter:null,new Ai(r))}}
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
class lh{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new pu(this,"async_queue_retry"),this.Xc=()=>{const e=du();e&&Zr("AsyncQueue","Visibility state changed to "+e.visibilityState),this.qo.Mo()};const e=du();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=du();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise((()=>{}));const t=new ci;return this.ta((()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Qc.push(e),this.ea())))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!ji(e))throw e;Zr("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No((()=>this.ea()))}}ta(e){const t=this.Gc.then((()=>(this.Hc=!0,e().catch((e=>{this.Wc=e,this.Hc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
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
 */(e);throw ei("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Hc=!1,e))))));return this.Gc=t,t}enqueueAfterDelay(e,t,n){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const r=Ju.createAndSchedule(this,e,t,n,(e=>this.na(e)));return this.zc.push(r),r}Zc(){this.Wc&&ri()}verifyOperationInProgress(){}async sa(){let e;do{e=this.Gc,await e}while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then((()=>{this.zc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.zc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.sa()}))}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}function hh(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
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
 */(e,["next","error","complete"])}class dh extends rh{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new lh,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||mh(this),this._firestoreClient.terminate()}}function fh(e,t){const n="object"==typeof e?e:(0,i.Mq)(),r="string"==typeof e?e:t||"(default)",o=(0,i.qX)(n,"firestore").getImmediate({identifier:r});if(!o._initialized){const e=(0,a.P0)("firestore");e&&ih(o,...e)}return o}function ph(e){return e._firestoreClient||mh(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function mh(e){var t,n,r;const i=e._freezeSettings(),o=function(e,t,n,r){return new uo(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Wl(r.experimentalLongPollingOptions),r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new Fl(e._authCredentials,e._appCheckCredentials,e._queue,o),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}
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
class gh{constructor(e){this._byteString=e}static fromBase64String(e){try{return new gh(to.fromBase64String(e))}catch(e){throw new ai(si.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new gh(to.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
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
 */class yh{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new ai(si.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ki(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
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
class vh{constructor(e){this._methodName=e}}
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
 */class wh{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ai(si.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ai(si.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return wi(this._lat,e._lat)||wi(this._long,e._long)}}
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
 */const bh=/^__.*__$/;class Eh{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new ua(e,this.data,this.fieldMask,t,this.fieldTransforms):new ca(e,this.data,t,this.fieldTransforms)}}class _h{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new ua(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Sh(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ri()}}class Th{constructor(e,t,n,r,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Th(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.aa({path:n,la:!1});return r.fa(e),r}da(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.aa({path:n,la:!1});return r.ua(),r}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return qh(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(0===e.length)throw this._a("Document fields must not be empty");if(Sh(this.ca)&&bh.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class Ih{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||fu(e)}ya(e,t,n,r=!1){return new Th({ca:e,methodName:t,ga:n,path:ki.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function kh(e){const t=e._freezeSettings(),n=fu(e._databaseId);return new Ih(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Ah(e,t,n,r,i,o={}){const s=e.ya(o.merge||o.mergeFields?2:0,t,n,i);Uh("Data must be an object, but it was:",s,r);const a=jh(r,s);let c,u;if(o.merge)c=new Zi(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const e=[];for(const r of o.mergeFields){const i=Vh(t,r,n);if(!s.contains(i))throw new ai(si.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);zh(e,i)||e.push(i)}c=new Zi(e),u=s.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=s.fieldTransforms;return new Eh(new Co(a),c,u)}class Ch extends vh{_toFieldTransform(e){if(2!==e.ca)throw 1===e.ca?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ch}}function Oh(e,t,n){return new Th({ca:3,ga:t.settings.ga,methodName:e._methodName,la:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class xh extends vh{_toFieldTransform(e){return new Ys(e.path,new qs)}isEqual(e){return e instanceof xh}}class Rh extends vh{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=Oh(this,e,!0),n=this.pa.map((e=>Mh(e,t))),r=new zs(n);return new Ys(e.path,r)}isEqual(e){return this===e}}class Ph extends vh{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=Oh(this,e,!0),n=this.pa.map((e=>Mh(e,t))),r=new Gs(n);return new Ys(e.path,r)}isEqual(e){return this===e}}function Nh(e,t,n,r){const i=e.ya(1,t,n);Uh("Data must be an object, but it was:",i,r);const o=[],s=Co.empty();Gi(r,((e,r)=>{const c=Bh(t,e,n);r=(0,a.m9)(r);const u=i.da(c);if(r instanceof Ch)o.push(c);else{const e=Mh(r,u);null!=e&&(o.push(c),s.set(c,e))}}));const c=new Zi(o);return new _h(s,c,i.fieldTransforms)}function Dh(e,t,n,r,i,o){const s=e.ya(1,t,n),c=[Vh(t,r,n)],u=[i];if(o.length%2!=0)throw new ai(si.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<o.length;a+=2)c.push(Vh(t,o[a])),u.push(o[a+1]);const l=[],h=Co.empty();for(let f=c.length-1;f>=0;--f)if(!zh(l,c[f])){const e=c[f];let t=u[f];t=(0,a.m9)(t);const n=s.da(e);if(t instanceof Ch)l.push(e);else{const r=Mh(t,n);null!=r&&(l.push(e),h.set(e,r))}}const d=new Zi(l);return new _h(h,d,s.fieldTransforms)}function Lh(e,t,n,r=!1){return Mh(n,e.ya(r?4:3,t))}function Mh(e,t){if(Fh(e=(0,a.m9)(e)))return Uh("Unsupported field value:",t,e),jh(e,t);if(e instanceof vh)return function(e,t){if(!Sh(t.ca))throw t._a(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t._a(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&4!==t.ca)throw t._a("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Mh(i,t.wa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,a.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Fs(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Ei.fromDate(e);return{timestampValue:Ha(t.serializer,n)}}if(e instanceof Ei){const n=new Ei(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Ha(t.serializer,n)}}if(e instanceof wh)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof gh)return{bytesValue:Ga(t.serializer,e._byteString)};if(e instanceof oh){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Ja(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t._a(`Unsupported field value: ${eh(e)}`)}(e,t)}function jh(e,t){const n={};return Ki(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Gi(e,((e,r)=>{const i=Mh(r,t.ha(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Fh(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Ei||e instanceof wh||e instanceof gh||e instanceof oh||e instanceof vh)}function Uh(e,t,n){if(!Fh(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=eh(n);throw"an object"===r?t._a(e+" a custom object"):t._a(e+" "+r)}}function Vh(e,t,n){if((t=(0,a.m9)(t))instanceof yh)return t._internalPath;if("string"==typeof t)return Bh(e,t);throw qh("Field path arguments must be of type string or ",e,!1,void 0,n)}const $h=new RegExp("[~\\*/\\[\\]]");function Bh(e,t,n){if(t.search($h)>=0)throw qh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new yh(...t.split("."))._internalPath}catch(r){throw qh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function qh(e,t,n,r,i){const o=r&&!r.isEmpty(),s=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(o||s)&&(c+=" (found",o&&(c+=` in field ${r}`),s&&(c+=` in document ${i}`),c+=")"),new ai(si.INVALID_ARGUMENT,a+e+c)}function zh(e,t){return e.some((e=>e.isEqual(t)))}
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
 */class Hh{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new oh(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Gh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Kh("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Gh extends Hh{data(){return super.data()}}function Kh(e,t){return"string"==typeof t?Bh(e,t):t instanceof yh?t._internalPath:t._delegate._internalPath}
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
 */function Wh(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new ai(si.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Jh{}class Qh extends Jh{}function Yh(e,t,...n){let r=[];t instanceof Jh&&r.push(t),r=r.concat(n),function(e){const t=e.filter((e=>e instanceof ed)).length,n=e.filter((e=>e instanceof Xh)).length;if(t>1||t>0&&n>0)throw new ai(si.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
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
 */(r);for(const i of r)e=i._apply(e);return e}class Xh extends Qh{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Xh(e,t,n)}_apply(e){const t=this._parse(e);return rd(e._query,t),new sh(e.firestore,e.converter,fs(e._query,t))}_parse(e){const t=kh(e.firestore),n=function(e,t,n,r,i,o,s){let a;if(i.isKeyField()){if("array-contains"===o||"array-contains-any"===o)throw new ai(si.INVALID_ARGUMENT,`Invalid Query. You can't perform '${o}' queries on documentId().`);if("in"===o||"not-in"===o){nd(s,o);const t=[];for(const n of s)t.push(td(r,e,n));a={arrayValue:{values:t}}}else a=td(r,e,s)}else"in"!==o&&"not-in"!==o&&"array-contains-any"!==o||nd(s,o),a=Lh(n,t,s,"in"===o||"not-in"===o);return jo.create(i,o,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function Zh(e,t,n){const r=t,i=Kh("where",e);return Xh._create(i,r,n)}class ed extends Jh{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ed(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:Fo.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const i of r)rd(n,i),n=fs(n,i)}(e._query,t),new sh(e.firestore,e.converter,fs(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function td(e,t,n){if("string"==typeof(n=(0,a.m9)(n))){if(""===n)throw new ai(si.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ls(t)&&-1!==n.indexOf("/"))throw new ai(si.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Ti.fromString(n));if(!Ai.isDocumentKey(r))throw new ai(si.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return bo(e,new Ai(r))}if(n instanceof oh)return bo(e,n._key);throw new ai(si.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${eh(n)}.`)}function nd(e,t){if(!Array.isArray(e)||0===e.length)throw new ai(si.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function rd(e,t){if(t.isInequality()){const n=us(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new ai(si.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const i=cs(e);null!==i&&id(e,r,i)}const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new ai(si.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new ai(si.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function id(e,t,n){if(!n.isEqual(t))throw new ai(si.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class od{convertValue(e,t="none"){switch(fo(e)){case 0:return null;case 1:return e.booleanValue;case 2:return io(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(oo(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw ri()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Gi(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new wh(io(e.latitude),io(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ao(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(co(e));default:return null}}convertTimestamp(e){const t=ro(e);return new Ei(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Ti.fromString(e);ii(wc(n));const r=new lo(n.get(1),n.get(3)),i=new Ai(n.popFirst(5));return r.isEqual(t)||ei(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
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
 */function sd(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}
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
class ad{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class cd extends Hh{constructor(e,t,n,r,i,o){super(e,t,n,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ud(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Kh("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class ud extends cd{data(e={}){return super.data(e)}}class ld{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new ad(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new ud(this._firestore,this._userDataWriter,n.key,n,new ad(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ai(si.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new ud(e._firestore,e._userDataWriter,n.doc.key,n.doc,new ad(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new ud(e._firestore,e._userDataWriter,t.doc.key,t.doc,new ad(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,o=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),o=n.indexOf(t.doc.key)),{type:hd(t.type),doc:r,oldIndex:i,newIndex:o}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function hd(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ri()}}
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
function dd(e){e=th(e,oh);const t=th(e.firestore,dh);return Gl(ph(t),e._key).then((n=>Ed(t,e,n)))}class fd extends od{constructor(e){super(),this.firestore=e}convertBytes(e){return new gh(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new oh(this.firestore,null,t)}}function pd(e){e=th(e,sh);const t=th(e.firestore,dh),n=ph(t),r=new fd(t);return Wh(e._query),Kl(n,e._query).then((n=>new ld(t,r,e,n)))}function md(e,t,n){e=th(e,oh);const r=th(e.firestore,dh),i=sd(e.converter,t,n);return bd(r,[Ah(kh(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,ea.none())])}function gd(e,t,n,...r){e=th(e,oh);const i=th(e.firestore,dh),o=kh(i);let s;return s="string"==typeof(t=(0,a.m9)(t))||t instanceof yh?Dh(o,"updateDoc",e._key,t,n,r):Nh(o,"updateDoc",e._key,t),bd(i,[s.toMutation(e._key,ea.exists(!0))])}function yd(e){return bd(th(e.firestore,dh),[new fa(e._key,ea.none())])}function vd(e,t){const n=th(e.firestore,dh),r=uh(e),i=sd(e.converter,t);return bd(n,[Ah(kh(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,ea.exists(!1))]).then((()=>r))}function wd(e,...t){var n,r,i;e=(0,a.m9)(e);let o={includeMetadataChanges:!1},s=0;"object"!=typeof t[s]||hh(t[s])||(o=t[s],s++);const c={includeMetadataChanges:o.includeMetadataChanges};if(hh(t[s])){const e=t[s];t[s]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[s+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[s+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let u,l,h;if(e instanceof oh)l=th(e.firestore,dh),h=ss(e._key.path),u={next:n=>{t[s]&&t[s](Ed(l,e,n))},error:t[s+1],complete:t[s+2]};else{const n=th(e,sh);l=th(n.firestore,dh),h=n._query;const r=new fd(l);u={next:e=>{t[s]&&t[s](new ld(l,r,n,e))},error:t[s+1],complete:t[s+2]},Wh(e._query)}return function(e,t,n,r){const i=new jl(r),o=new al(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>nl(await Hl(e),o))),()=>{i.Dc(),e.asyncQueue.enqueueAndForget((async()=>rl(await Hl(e),o)))}}(ph(l),h,c,u)}function bd(e,t){return function(e,t){const n=new ci;return e.asyncQueue.enqueueAndForget((async()=>yl(await zl(e),t,n))),n.promise}(ph(e),t)}function Ed(e,t,n){const r=n.docs.get(t._key),i=new fd(e);return new cd(e,i,t._key,r,new ad(n.hasPendingWrites,n.fromCache),t.converter)}
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
 */function _d(){return new xh("serverTimestamp")}function Sd(...e){return new Rh("arrayUnion",e)}function Td(...e){return new Ph("arrayRemove",e)}!function(e,t=!0){!function(e){Qr=e}(i.Jn),(0,i.Xd)(new o.wA("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),o=new dh(new di(e.getProvider("auth-internal")),new gi(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new ai(si.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new lo(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o}),"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(Wr,"3.13.0",e),(0,i.KN)(Wr,"3.13.0","esm2017")}()},3704:(e,t,n)=>{n.d(t,{Z:()=>w});var r=Object.defineProperty,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,a=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&a(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&a(e,n,t[n]);return e};function u(e){return"object"===typeof e&&null!==e}function l(e){return e}function h(e,t){return e=u(e)?e:Object.create(null),new Proxy(e,{get(e,n,r){var i;return"key"===n?(null!=(i=t.key)?i:l)(Reflect.get(e,n,r)):Reflect.get(e,n,r)||Reflect.get(t,n,r)}})}function d(e){return null!==e&&"object"===typeof e}function f(e,t){const n=Array.isArray(e)&&Array.isArray(t),r=d(e)&&d(t);if(!n&&!r)throw new Error("Can only merge object with object or array with array");const i=n?[]:{},o=[...Object.keys(e),...Object.keys(t)];return o.forEach((n=>{Array.isArray(e[n])&&Array.isArray(t[n])?i[n]=[...Object.values(f(e[n],t[n]))]:null!==t[n]&&"object"===typeof t[n]&&"object"===typeof e[n]?i[n]=f(e[n],t[n]):void 0!==e[n]&&void 0===t[n]?i[n]=e[n]:void 0===e[n]&&void 0!==t[n]&&(i[n]=t[n])})),i}function p(e,t){return t.reduce(((e,t)=>"[]"===t&&Array.isArray(e)?e:null==e?void 0:e[t]),e)}function m(e,t,n){const r=t.slice(0,-1).reduce(((e,t)=>/^(__proto__)$/.test(t)?{}:e[t]=e[t]||{}),e);if(Array.isArray(r[t[t.length-1]])&&Array.isArray(n)){const e=r[t[t.length-1]].map(((e,t)=>Array.isArray(e)&&"object"!==typeof e?[...e,...n[t]]:"object"===typeof e&&null!==e&&Object.keys(e).some((t=>Array.isArray(e[t])))?f(e,n[t]):c(c({},e),n[t])));r[t[t.length-1]]=e}else void 0===t[t.length-1]&&Array.isArray(r)&&Array.isArray(n)?r.push(...n):r[t[t.length-1]]=n;return e}function g(e,t){return t.reduce(((t,n)=>{const r=n.split(".");if(!r.includes("[]"))return m(t,r,p(e,r));const i=r.indexOf("[]"),o=r.slice(0,i),s=r.slice(0,i+1),a=r.slice(i+1),c=p(e,s),u=[];for(const e of c)0===a.length||!Array.isArray(e)&&"object"!==typeof e?u.push(e):u.push(g(e,[a.join(".")]));return m(t,o,u)}),Array.isArray(e)?[]:{})}function y(e,t,n,r,i){try{const i=null==t?void 0:t.getItem(r);i&&e.$patch(null==n?void 0:n.deserialize(i))}catch(o){i&&console.error(o)}}function v(e={}){return t=>{const{options:{persist:n},store:r}=t;if(!n)return;const i=(Array.isArray(n)?n.map((t=>h(t,e))):[h(n,e)]).map((({storage:e=localStorage,beforeRestore:t=null,afterRestore:n=null,serializer:i={serialize:JSON.stringify,deserialize:JSON.parse},key:o=r.$id,paths:s=null,debug:a=!1})=>({storage:e,beforeRestore:t,afterRestore:n,serializer:i,key:o,paths:s,debug:a})));i.forEach((e=>{const{storage:n,serializer:i,key:o,paths:s,beforeRestore:a,afterRestore:c,debug:u}=e;null==a||a(t),y(r,n,i,o,u),null==c||c(t),r.$subscribe(((e,t)=>{try{const e=Array.isArray(s)?g(t,s):t;n.setItem(o,i.serialize(e))}catch(r){u&&console.error(r)}}),{detached:!0})})),r.$hydrate=({runHooks:e=!0}={})=>{i.forEach((n=>{const{beforeRestore:i,afterRestore:o,storage:s,serializer:a,key:c,debug:u}=n;e&&(null==i||i(t)),y(r,s,a,c,u),e&&(null==o||o(t))}))}}}var w=v()},9876:(e,t,n)=>{n.d(t,{WB:()=>de,Q_:()=>Ie});var r=n(2262),i=n(6252),o=!1;function s(e,t,n){return Array.isArray(e)?(e.length=Math.max(e.length,t),e.splice(t,1,n),n):(e[t]=n,n)}function a(){return c().__VUE_DEVTOOLS_GLOBAL_HOOK__}function c(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}}const u="function"===typeof Proxy,l="devtools-plugin:setup",h="plugin:settings:set";let d,f,p;function m(){var e;return void 0!==d||("undefined"!==typeof window&&window.performance?(d=!0,f=window.performance):"undefined"!==typeof n.g&&(null===(e=n.g.perf_hooks)||void 0===e?void 0:e.performance)?(d=!0,f=n.g.perf_hooks.performance):d=!1),d}function g(){return m()?f.now():Date.now()}class y{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const s in e.settings){const t=e.settings[s];n[s]=t.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},n);try{const e=localStorage.getItem(r),t=JSON.parse(e);Object.assign(i,t)}catch(o){}this.fallbacks={getSettings(){return i},setSettings(e){try{localStorage.setItem(r,JSON.stringify(e))}catch(o){}i=e},now(){return g()}},t&&t.on(h,((e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)})),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise((n=>{this.targetQueue.push({method:t,args:e,resolve:n})}))})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function v(e,t){const n=e,r=c(),i=a(),o=u&&n.enableEarlyProxy;if(!i||!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&o){const e=o?new y(n,i):null,s=r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[];s.push({pluginDescriptor:n,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else i.emit(l,e,t)}const w=e=>p=e,b=Symbol();function E(e){return e&&"object"===typeof e&&"[object Object]"===Object.prototype.toString.call(e)&&"function"!==typeof e.toJSON}var _;(function(e){e["direct"]="direct",e["patchObject"]="patch object",e["patchFunction"]="patch function"})(_||(_={}));const S="undefined"!==typeof window,T=!1,I=(()=>"object"===typeof window&&window.window===window?window:"object"===typeof self&&self.self===self?self:"object"===typeof global&&global.global===global?global:"object"===typeof globalThis?globalThis:{HTMLElement:null})();function k(e,{autoBom:t=!1}={}){return t&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e}function A(e,t,n){const r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){P(r.response,t,n)},r.onerror=function(){console.error("could not download file")},r.send()}function C(e){const t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(n){}return t.status>=200&&t.status<=299}function O(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){const n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(n)}}const x="object"===typeof navigator?navigator:{userAgent:""},R=(()=>/Macintosh/.test(x.userAgent)&&/AppleWebKit/.test(x.userAgent)&&!/Safari/.test(x.userAgent))(),P=S?"undefined"!==typeof HTMLAnchorElement&&"download"in HTMLAnchorElement.prototype&&!R?N:"msSaveOrOpenBlob"in x?D:L:()=>{};function N(e,t="download",n){const r=document.createElement("a");r.download=t,r.rel="noopener","string"===typeof e?(r.href=e,r.origin!==location.origin?C(r.href)?A(e,t,n):(r.target="_blank",O(r)):O(r)):(r.href=URL.createObjectURL(e),setTimeout((function(){URL.revokeObjectURL(r.href)}),4e4),setTimeout((function(){O(r)}),0))}function D(e,t="download",n){if("string"===typeof e)if(C(e))A(e,t,n);else{const t=document.createElement("a");t.href=e,t.target="_blank",setTimeout((function(){O(t)}))}else navigator.msSaveOrOpenBlob(k(e,n),t)}function L(e,t,n,r){if(r=r||open("","_blank"),r&&(r.document.title=r.document.body.innerText="downloading..."),"string"===typeof e)return A(e,t,n);const i="application/octet-stream"===e.type,o=/constructor/i.test(String(I.HTMLElement))||"safari"in I,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||i&&o||R)&&"undefined"!==typeof FileReader){const t=new FileReader;t.onloadend=function(){let e=t.result;if("string"!==typeof e)throw r=null,new Error("Wrong reader.result type");e=s?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location.assign(e),r=null},t.readAsDataURL(e)}else{const t=URL.createObjectURL(e);r?r.location.assign(t):location.href=t,r=null,setTimeout((function(){URL.revokeObjectURL(t)}),4e4)}}function M(e,t){const n="🍍 "+e;"function"===typeof __VUE_DEVTOOLS_TOAST__?__VUE_DEVTOOLS_TOAST__(n,t):"error"===t?console.error(n):"warn"===t?console.warn(n):console.log(n)}function j(e){return"_a"in e&&"install"in e}function F(){if(!("clipboard"in navigator))return M("Your browser doesn't support the Clipboard API","error"),!0}function U(e){return!!(e instanceof Error&&e.message.toLowerCase().includes("document is not focused"))&&(M('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.',"warn"),!0)}async function V(e){if(!F())try{await navigator.clipboard.writeText(JSON.stringify(e.state.value)),M("Global state copied to clipboard.")}catch(t){if(U(t))return;M("Failed to serialize the state. Check the console for more details.","error"),console.error(t)}}async function $(e){if(!F())try{G(e,JSON.parse(await navigator.clipboard.readText())),M("Global state pasted from clipboard.")}catch(t){if(U(t))return;M("Failed to deserialize the state from clipboard. Check the console for more details.","error"),console.error(t)}}async function B(e){try{P(new Blob([JSON.stringify(e.state.value)],{type:"text/plain;charset=utf-8"}),"pinia-state.json")}catch(t){M("Failed to export the state as JSON. Check the console for more details.","error"),console.error(t)}}let q;function z(){function e(){return new Promise(((e,t)=>{q.onchange=async()=>{const t=q.files;if(!t)return e(null);const n=t.item(0);return e(n?{text:await n.text(),file:n}:null)},q.oncancel=()=>e(null),q.onerror=t,q.click()}))}return q||(q=document.createElement("input"),q.type="file",q.accept=".json"),e}async function H(e){try{const t=z(),n=await t();if(!n)return;const{text:r,file:i}=n;G(e,JSON.parse(r)),M(`Global state imported from "${i.name}".`)}catch(t){M("Failed to import the state from JSON. Check the console for more details.","error"),console.error(t)}}function G(e,t){for(const n in t){const r=e.state.value[n];r?Object.assign(r,t[n]):e.state.value[n]=t[n]}}function K(e){return{_custom:{display:e}}}const W="🍍 Pinia (root)",J="_root";function Q(e){return j(e)?{id:J,label:W}:{id:e.$id,label:e.$id}}function Y(e){if(j(e)){const t=Array.from(e._s.keys()),n=e._s,r={state:t.map((t=>({editable:!0,key:t,value:e.state.value[t]}))),getters:t.filter((e=>n.get(e)._getters)).map((e=>{const t=n.get(e);return{editable:!1,key:e,value:t._getters.reduce(((e,n)=>(e[n]=t[n],e)),{})}}))};return r}const t={state:Object.keys(e.$state).map((t=>({editable:!0,key:t,value:e.$state[t]})))};return e._getters&&e._getters.length&&(t.getters=e._getters.map((t=>({editable:!1,key:t,value:e[t]})))),e._customProperties.size&&(t.customProperties=Array.from(e._customProperties).map((t=>({editable:!0,key:t,value:e[t]})))),t}function X(e){return e?Array.isArray(e)?e.reduce(((e,t)=>(e.keys.push(t.key),e.operations.push(t.type),e.oldValue[t.key]=t.oldValue,e.newValue[t.key]=t.newValue,e)),{oldValue:{},keys:[],operations:[],newValue:{}}):{operation:K(e.type),key:K(e.key),oldValue:e.oldValue,newValue:e.newValue}:{}}function Z(e){switch(e){case _.direct:return"mutation";case _.patchFunction:return"$patch";case _.patchObject:return"$patch";default:return"unknown"}}let ee=!0;const te=[],ne="pinia:mutations",re="pinia",{assign:ie}=Object,oe=e=>"🍍 "+e;function se(e,t){v({id:"dev.esm.pinia",label:"Pinia 🍍",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:te,app:e},(n=>{"function"!==typeof n.now&&M("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),n.addTimelineLayer({id:ne,label:"Pinia 🍍",color:15064968}),n.addInspector({id:re,label:"Pinia 🍍",icon:"storage",treeFilterPlaceholder:"Search stores",actions:[{icon:"content_copy",action:()=>{V(t)},tooltip:"Serialize and copy the state"},{icon:"content_paste",action:async()=>{await $(t),n.sendInspectorTree(re),n.sendInspectorState(re)},tooltip:"Replace the state with the content of your clipboard"},{icon:"save",action:()=>{B(t)},tooltip:"Save the state as a JSON file"},{icon:"folder_open",action:async()=>{await H(t),n.sendInspectorTree(re),n.sendInspectorState(re)},tooltip:"Import the state from a JSON file"}],nodeActions:[{icon:"restore",tooltip:'Reset the state (with "$reset")',action:e=>{const n=t._s.get(e);n?"function"!==typeof n.$reset?M(`Cannot reset "${e}" store because it doesn't have a "$reset" method implemented.`,"warn"):(n.$reset(),M(`Store "${e}" reset.`)):M(`Cannot reset "${e}" store because it wasn't found.`,"warn")}}]}),n.on.inspectComponent(((e,t)=>{const n=e.componentInstance&&e.componentInstance.proxy;if(n&&n._pStores){const t=e.componentInstance.proxy._pStores;Object.values(t).forEach((t=>{e.instanceData.state.push({type:oe(t.$id),key:"state",editable:!0,value:t._isOptionsAPI?{_custom:{value:(0,r.IU)(t.$state),actions:[{icon:"restore",tooltip:"Reset the state of this store",action:()=>t.$reset()}]}}:Object.keys(t.$state).reduce(((e,n)=>(e[n]=t.$state[n],e)),{})}),t._getters&&t._getters.length&&e.instanceData.state.push({type:oe(t.$id),key:"getters",editable:!1,value:t._getters.reduce(((e,n)=>{try{e[n]=t[n]}catch(r){e[n]=r}return e}),{})})}))}})),n.on.getInspectorTree((n=>{if(n.app===e&&n.inspectorId===re){let e=[t];e=e.concat(Array.from(t._s.values())),n.rootNodes=(n.filter?e.filter((e=>"$id"in e?e.$id.toLowerCase().includes(n.filter.toLowerCase()):W.toLowerCase().includes(n.filter.toLowerCase()))):e).map(Q)}})),n.on.getInspectorState((n=>{if(n.app===e&&n.inspectorId===re){const e=n.nodeId===J?t:t._s.get(n.nodeId);if(!e)return;e&&(n.state=Y(e))}})),n.on.editInspectorState(((n,r)=>{if(n.app===e&&n.inspectorId===re){const e=n.nodeId===J?t:t._s.get(n.nodeId);if(!e)return M(`store "${n.nodeId}" not found`,"error");const{path:r}=n;j(e)?r.unshift("state"):1===r.length&&e._customProperties.has(r[0])&&!(r[0]in e.$state)||r.unshift("$state"),ee=!1,n.set(e,r,n.state.value),ee=!0}})),n.on.editComponentState((e=>{if(e.type.startsWith("🍍")){const n=e.type.replace(/^🍍\s*/,""),r=t._s.get(n);if(!r)return M(`store "${n}" not found`,"error");const{path:i}=e;if("state"!==i[0])return M(`Invalid path for store "${n}":\n${i}\nOnly state can be modified.`);i[0]="$state",ee=!1,e.set(r,i,e.state.value),ee=!0}}))}))}function ae(e,t){te.includes(oe(t.$id))||te.push(oe(t.$id)),v({id:"dev.esm.pinia",label:"Pinia 🍍",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:te,app:e,settings:{logStoreChanges:{label:"Notify about new/deleted stores",type:"boolean",defaultValue:!0}}},(e=>{const n="function"===typeof e.now?e.now.bind(e):Date.now;t.$onAction((({after:r,onError:i,name:o,args:s})=>{const a=ue++;e.addTimelineEvent({layerId:ne,event:{time:n(),title:"🛫 "+o,subtitle:"start",data:{store:K(t.$id),action:K(o),args:s},groupId:a}}),r((r=>{ce=void 0,e.addTimelineEvent({layerId:ne,event:{time:n(),title:"🛬 "+o,subtitle:"end",data:{store:K(t.$id),action:K(o),args:s,result:r},groupId:a}})})),i((r=>{ce=void 0,e.addTimelineEvent({layerId:ne,event:{time:n(),logType:"error",title:"💥 "+o,subtitle:"end",data:{store:K(t.$id),action:K(o),args:s,error:r},groupId:a}})}))}),!0),t._customProperties.forEach((o=>{(0,i.YP)((()=>(0,r.SU)(t[o])),((t,r)=>{e.notifyComponentUpdate(),e.sendInspectorState(re),ee&&e.addTimelineEvent({layerId:ne,event:{time:n(),title:"Change",subtitle:o,data:{newValue:t,oldValue:r},groupId:ce}})}),{deep:!0})})),t.$subscribe((({events:r,type:i},o)=>{if(e.notifyComponentUpdate(),e.sendInspectorState(re),!ee)return;const s={time:n(),title:Z(i),data:ie({store:K(t.$id)},X(r)),groupId:ce};i===_.patchFunction?s.subtitle="⤵️":i===_.patchObject?s.subtitle="🧩":r&&!Array.isArray(r)&&(s.subtitle=r.type),r&&(s.data["rawEvent(s)"]={_custom:{display:"DebuggerEvent",type:"object",tooltip:"raw DebuggerEvent[]",value:r}}),e.addTimelineEvent({layerId:ne,event:s})}),{detached:!0,flush:"sync"});const o=t._hotUpdate;t._hotUpdate=(0,r.Xl)((r=>{o(r),e.addTimelineEvent({layerId:ne,event:{time:n(),title:"🔥 "+t.$id,subtitle:"HMR update",data:{store:K(t.$id),info:K("HMR update")}}}),e.notifyComponentUpdate(),e.sendInspectorTree(re),e.sendInspectorState(re)}));const{$dispose:s}=t;t.$dispose=()=>{s(),e.notifyComponentUpdate(),e.sendInspectorTree(re),e.sendInspectorState(re),e.getSettings().logStoreChanges&&M(`Disposed "${t.$id}" store 🗑`)},e.notifyComponentUpdate(),e.sendInspectorTree(re),e.sendInspectorState(re),e.getSettings().logStoreChanges&&M(`"${t.$id}" store installed 🆕`)}))}let ce,ue=0;function le(e,t,n){const i=t.reduce(((t,n)=>(t[n]=(0,r.IU)(e)[n],t)),{});for(const r in i)e[r]=function(){const t=ue,o=n?new Proxy(e,{get(...e){return ce=t,Reflect.get(...e)},set(...e){return ce=t,Reflect.set(...e)}}):e;ce=t;const s=i[r].apply(o,arguments);return ce=void 0,s}}function he({app:e,store:t,options:n}){if(t.$id.startsWith("__hot:"))return;t._isOptionsAPI=!!n.state,le(t,Object.keys(n.actions),t._isOptionsAPI);const i=t._hotUpdate;(0,r.IU)(t)._hotUpdate=function(e){i.apply(this,arguments),le(t,Object.keys(e._hmrPayload.actions),!!t._isOptionsAPI)},ae(e,t)}function de(){const e=(0,r.B)(!0),t=e.run((()=>(0,r.iH)({})));let n=[],i=[];const s=(0,r.Xl)({install(e){w(s),o||(s._a=e,e.provide(b,s),e.config.globalProperties.$pinia=s,T&&se(e,s),i.forEach((e=>n.push(e))),i=[])},use(e){return this._a||o?n.push(e):i.push(e),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return T&&"undefined"!==typeof Proxy&&s.use(he),s}const fe=()=>{};function pe(e,t,n,i=fe){e.push(t);const o=()=>{const n=e.indexOf(t);n>-1&&(e.splice(n,1),i())};return!n&&(0,r.nZ)()&&(0,r.EB)(o),o}function me(e,...t){e.slice().forEach((e=>{e(...t)}))}const ge=e=>e();function ye(e,t){e instanceof Map&&t instanceof Map&&t.forEach(((t,n)=>e.set(n,t))),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const i=t[n],o=e[n];E(o)&&E(i)&&e.hasOwnProperty(n)&&!(0,r.dq)(i)&&!(0,r.PG)(i)?e[n]=ye(o,i):e[n]=i}return e}const ve=Symbol(),we=new WeakMap;function be(e){return o?!we.has(e):!E(e)||!e.hasOwnProperty(ve)}const{assign:Ee}=Object;function _e(e){return!(!(0,r.dq)(e)||!e.effect)}function Se(e,t,n,a){const{state:c,actions:u,getters:l}=t,h=n.state.value[e];let d;function f(){h||(o?s(n.state.value,e,c?c():{}):n.state.value[e]=c?c():{});const t=(0,r.BK)(n.state.value[e]);return Ee(t,u,Object.keys(l||{}).reduce(((t,s)=>(t[s]=(0,r.Xl)((0,i.Fl)((()=>{w(n);const t=n._s.get(e);if(!o||t._r)return l[s].call(t,t)}))),t)),{}))}return d=Te(e,f,t,n,a,!0),d}function Te(e,t,n={},a,c,u){let l;const h=Ee({actions:{}},n);const d={deep:!0};let f,p;let m,g=[],y=[];const v=a.state.value[e];u||v||(o?s(a.state.value,e,{}):a.state.value[e]={});const b=(0,r.iH)({});let E;function S(t){let n;f=p=!1,"function"===typeof t?(t(a.state.value[e]),n={type:_.patchFunction,storeId:e,events:m}):(ye(a.state.value[e],t),n={type:_.patchObject,payload:t,storeId:e,events:m});const r=E=Symbol();(0,i.Y3)().then((()=>{E===r&&(f=!0)})),p=!0,me(g,n,a.state.value[e])}const I=u?function(){const{state:e}=n,t=e?e():{};this.$patch((e=>{Ee(e,t)}))}:fe;function k(){l.stop(),g=[],y=[],a._s.delete(e)}function A(t,n){return function(){w(a);const r=Array.from(arguments),i=[],o=[];function s(e){i.push(e)}function c(e){o.push(e)}let u;me(y,{args:r,name:t,store:x,after:s,onError:c});try{u=n.apply(this&&this.$id===e?this:x,r)}catch(l){throw me(o,l),l}return u instanceof Promise?u.then((e=>(me(i,e),e))).catch((e=>(me(o,e),Promise.reject(e)))):(me(i,u),u)}}const C=(0,r.Xl)({actions:{},getters:{},state:[],hotState:b}),O={_p:a,$id:e,$onAction:pe.bind(null,y),$patch:S,$reset:I,$subscribe(t,n={}){const r=pe(g,t,n.detached,(()=>o())),o=l.run((()=>(0,i.YP)((()=>a.state.value[e]),(r=>{("sync"===n.flush?p:f)&&t({storeId:e,type:_.direct,events:m},r)}),Ee({},d,n))));return r},$dispose:k};o&&(O._r=!1);const x=(0,r.qj)(T?Ee({_hmrPayload:C,_customProperties:(0,r.Xl)(new Set)},O):O);a._s.set(e,x);const R=a._a&&a._a.runWithContext||ge,P=R((()=>a._e.run((()=>(l=(0,r.B)()).run(t)))));for(const i in P){const t=P[i];if((0,r.dq)(t)&&!_e(t)||(0,r.PG)(t))u||(v&&be(t)&&((0,r.dq)(t)?t.value=v[i]:ye(t,v[i])),o?s(a.state.value[e],i,t):a.state.value[e][i]=t);else if("function"===typeof t){const e=A(i,t);o?s(P,i,e):P[i]=e,h.actions[i]=t}else 0}if(o?Object.keys(P).forEach((e=>{s(x,e,P[e])})):(Ee(x,P),Ee((0,r.IU)(x),P)),Object.defineProperty(x,"$state",{get:()=>a.state.value[e],set:e=>{S((t=>{Ee(t,e)}))}}),T){const e={writable:!0,configurable:!0,enumerable:!1};["_p","_hmrPayload","_getters","_customProperties"].forEach((t=>{Object.defineProperty(x,t,Ee({value:x[t]},e))}))}return o&&(x._r=!0),a._p.forEach((e=>{if(T){const t=l.run((()=>e({store:x,app:a._a,pinia:a,options:h})));Object.keys(t||{}).forEach((e=>x._customProperties.add(e))),Ee(x,t)}else Ee(x,l.run((()=>e({store:x,app:a._a,pinia:a,options:h}))))})),v&&u&&n.hydrate&&n.hydrate(x.$state,v),f=!0,p=!0,x}function Ie(e,t,n){let r,o;const s="function"===typeof t;function a(e,n){const a=(0,i.EM)();e=e||(a?(0,i.f3)(b,null):null),e&&w(e),e=p,e._s.has(r)||(s?Te(r,t,o,e):Se(r,o,e));const c=e._s.get(r);return c}return"string"===typeof e?(r=e,o=s?n:t):(o=e,r=e.id),a.$id=r,a}},8534:(e,t,n)=>{n.d(t,{Z:()=>i});n(228);function r(e,t,n,r,i,o,s){try{var a=e[o](s),c=a.value}catch(u){return void n(u)}a.done?t(c):Promise.resolve(c).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var s=e.apply(t,n);function a(e){r(s,i,o,a,c,"next",e)}function c(e){r(s,i,o,a,c,"throw",e)}a(void 0)}))}}},3144:(e,t,n)=>{n.d(t,{Z:()=>c});n(9358),n(9749),n(8077),n(228),n(1919),n(560),n(9693),n(7522),n(9474),n(5082),n(739);var r=n(3336);n(9373),n(9903),n(6544),n(1057),n(8932),n(9288);function i(e,t){if("object"!==(0,r.Z)(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==(0,r.Z)(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function o(e){var t=i(e,"string");return"symbol"===(0,r.Z)(t)?t:String(t)}function s(e,t,n){return t=o(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},124:(e,t,n)=>{n.d(t,{Z:()=>i});n(739),n(9749),n(6544),n(228),n(4254),n(1694),n(6265),n(8373),n(6793),n(7629),n(7509),n(1013),n(8052),n(9693),n(1057),n(8932),n(560),n(7522),n(4284),n(5399),n(9330),n(3374),n(9730);var r=n(3336);function i(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
i=function(){return t};var e,t={},n=Object.prototype,o=n.hasOwnProperty,s=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function h(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{h({},"")}catch(e){h=function(e,t,n){return e[t]=n}}function d(e,t,n,r){var i=t&&t.prototype instanceof w?t:w,o=Object.create(i.prototype),a=new P(r||[]);return s(o,"_invoke",{value:C(e,n,a)}),o}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=d;var p="suspendedStart",m="suspendedYield",g="executing",y="completed",v={};function w(){}function b(){}function E(){}var _={};h(_,c,(function(){return this}));var S=Object.getPrototypeOf,T=S&&S(S(N([])));T&&T!==n&&o.call(T,c)&&(_=T);var I=E.prototype=w.prototype=Object.create(_);function k(e){["next","throw","return"].forEach((function(t){h(e,t,(function(e){return this._invoke(t,e)}))}))}function A(e,t){function n(i,s,a,c){var u=f(e[i],e,s);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==(0,r.Z)(h)&&o.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,a,c)}),(function(e){n("throw",e,a,c)})):t.resolve(h).then((function(e){l.value=e,a(l)}),(function(e){return n("throw",e,a,c)}))}c(u.arg)}var i;s(this,"_invoke",{value:function(e,r){function o(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(o,o):o()}})}function C(t,n,r){var i=p;return function(o,s){if(i===g)throw new Error("Generator is already running");if(i===y){if("throw"===o)throw s;return{value:e,done:!0}}for(r.method=o,r.arg=s;;){var a=r.delegate;if(a){var c=O(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===p)throw i=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=g;var u=f(t,n,r);if("normal"===u.type){if(i=r.done?y:m,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(i=y,r.method="throw",r.arg=u.arg)}}}function O(t,n){var r=n.method,i=t.iterator[r];if(i===e)return n.delegate=null,"throw"===r&&t.iterator["return"]&&(n.method="return",n.arg=e,O(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var o=f(i,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var s=o.arg;return s?s.done?(n[t.resultName]=s.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):s:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function R(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function N(t){if(t||""===t){var n=t[c];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,s=function n(){for(;++i<t.length;)if(o.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return s.next=s}}throw new TypeError((0,r.Z)(t)+" is not iterable")}return b.prototype=E,s(I,"constructor",{value:E,configurable:!0}),s(E,"constructor",{value:b,configurable:!0}),b.displayName=h(E,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,E):(e.__proto__=E,h(e,l,"GeneratorFunction")),e.prototype=Object.create(I),e},t.awrap=function(e){return{__await:e}},k(A.prototype),h(A.prototype,u,(function(){return this})),t.AsyncIterator=A,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var s=new A(d(e,n,r,i),o);return t.isGeneratorFunction(n)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},k(I),h(I,l,"Generator"),h(I,c,(function(){return this})),h(I,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=N,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(R),!t)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,i){return a.type="throw",a.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],a=s.completion;if("root"===s.tryLoc)return r("end");if(s.tryLoc<=this.prev){var c=o.call(s,"catchLoc"),u=o.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return r(s.catchLoc,!0);if(this.prev<s.finallyLoc)return r(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return r(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return r(s.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=e,s.arg=t,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),R(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;R(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:N(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}},3336:(e,t,n)=>{n.d(t,{Z:()=>r});n(9749),n(6544),n(228),n(4254),n(1694),n(6265);function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}},2201:(e,t,n)=>{n.d(t,{PO:()=>U,p7:()=>tt,tv:()=>rt});var r=n(6252),i=n(2262);
/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const o="undefined"!==typeof window;function s(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function c(e,t){const n={};for(const r in t){const i=t[r];n[r]=l(i)?i.map(e):e(i)}return n}const u=()=>{},l=Array.isArray;const h=/\/$/,d=e=>e.replace(h,"");function f(e,t,n="/"){let r,i={},o="",s="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),o=t.slice(c+1,a>-1?a:t.length),i=e(o)),a>-1&&(r=r||t.slice(0,a),s=t.slice(a,t.length)),r=E(null!=r?r:t,n),{fullPath:r+(o&&"?")+o+s,path:r,query:i,hash:s}}function p(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function m(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function g(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&y(t.matched[r],n.matched[i])&&v(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function y(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function v(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!w(e[n],t[n]))return!1;return!0}function w(e,t){return l(e)?b(e,t):l(t)?b(t,e):e===t}function b(e,t){return l(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function E(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];".."!==i&&"."!==i||r.push("");let o,s,a=n.length-1;for(o=0;o<r.length;o++)if(s=r[o],"."!==s){if(".."!==s)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var _,S;(function(e){e["pop"]="pop",e["push"]="push"})(_||(_={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(S||(S={}));function T(e){if(!e)if(o){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),d(e)}const I=/^[^#]+#/;function k(e,t){return e.replace(I,"#")+t}function A(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const C=()=>({left:window.pageXOffset,top:window.pageYOffset});function O(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=A(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function x(e,t){const n=history.state?history.state.position-t:-1;return n+e}const R=new Map;function P(e,t){R.set(e,t)}function N(e){const t=R.get(e);return R.delete(e),t}let D=()=>location.protocol+"//"+location.host;function L(e,t){const{pathname:n,search:r,hash:i}=t,o=e.indexOf("#");if(o>-1){let t=i.includes(e.slice(o))?e.slice(o).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),m(n,"")}const s=m(n,e);return s+r+i}function M(e,t,n,r){let i=[],o=[],s=null;const c=({state:o})=>{const a=L(e,location),c=n.value,u=t.value;let l=0;if(o){if(n.value=a,t.value=o,s&&s===c)return void(s=null);l=u?o.position-u.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:l,type:_.pop,direction:l?l>0?S.forward:S.back:S.unknown})}))};function u(){s=n.value}function l(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return o.push(t),t}function h(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:C()}),"")}function d(){for(const e of o)e();o=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:u,listen:l,destroy:d}}function j(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?C():null}}function F(e){const{history:t,location:n}=window,r={value:L(e,n)},i={value:t.state};function o(r,o,s){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:D()+e+r;try{t[s?"replaceState":"pushState"](o,"",c),i.value=o}catch(u){console.error(u),n[s?"replace":"assign"](c)}}function s(e,n){const s=a({},t.state,j(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});o(e,s,!0),r.value=e}function c(e,n){const s=a({},i.value,t.state,{forward:e,scroll:C()});o(s.current,s,!0);const c=a({},j(r.value,e,null),{position:s.position+1},n);o(e,c,!1),r.value=e}return i.value||o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:c,replace:s}}function U(e){e=T(e);const t=F(e),n=M(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=a({location:"",base:e,go:r,createHref:k.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function V(e){return"string"===typeof e||e&&"object"===typeof e}function $(e){return"string"===typeof e||"symbol"===typeof e}const B={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},q=Symbol("");var z;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(z||(z={}));function H(e,t){return a(new Error,{type:e,[q]:!0},t)}function G(e,t){return e instanceof Error&&q in e&&(null==t||!!(e.type&t))}const K="[^/]+?",W={sensitive:!1,strict:!1,start:!0,end:!0},J=/[.+*?^${}()[\]/\\]/g;function Q(e,t){const n=a({},W,t),r=[];let i=n.start?"^":"";const o=[];for(const a of e){const e=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let t=0;t<a.length;t++){const r=a[t];let s=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(J,"\\$&"),s+=40;else if(1===r.type){const{value:e,repeatable:n,optional:c,regexp:u}=r;o.push({name:e,repeatable:n,optional:c});const l=u||K;if(l!==K){s+=10;try{new RegExp(`(${l})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${e}" (${l}): `+h.message)}}let d=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;t||(d=c&&a.length<2?`(?:/${d})`:"/"+d),c&&(d+="?"),i+=d,s+=20,c&&(s+=-8),n&&(s+=-20),".*"===l&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const s=new RegExp(i,n.sensitive?"":"i");function c(e){const t=e.match(s),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=o[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function u(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:o,repeatable:s,optional:a}=e,c=o in t?t[o]:"";if(l(c)&&!s)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const u=l(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${o}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:s,score:r,keys:o,parse:c,stringify:u}}function Y(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function X(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=Y(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(Z(r))return 1;if(Z(i))return-1}return i.length-r.length}function Z(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const ee={type:0,value:""},te=/[a-zA-Z0-9_]/;function ne(e){if(!e)return[[]];if("/"===e)return[[ee]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const i=[];let o;function s(){o&&i.push(o),o=[]}let a,c=0,u="",l="";function h(){u&&(0===n?o.push({type:0,value:u}):1===n||2===n||3===n?(o.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),s()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:te.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),h(),s(),i}function re(e,t,n){const r=Q(ne(e.path),n);const i=a(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function ie(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function o(e,n,r){const i=!r,c=se(e);c.aliasOf=r&&r.record;const h=le(t,e),d=[c];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)d.push(a({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c}))}let f,p;for(const t of d){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&r+a)}if(f=re(t,n,h),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),i&&e.name&&!ce(f)&&s(e.name)),c.children){const e=c.children;for(let t=0;t<e.length;t++)o(e[t],f,r&&r.children[t])}r=r||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&l(f)}return p?()=>{s(p)}:u}function s(e){if($(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function c(){return n}function l(e){let t=0;while(t<n.length&&X(e,n[t])>=0&&(e.record.path!==n[t].record.path||!he(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!ce(e)&&r.set(e.record.name,e)}function h(e,t){let i,o,s,c={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw H(1,{location:e});0,s=i.record.name,c=a(oe(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&oe(e.params,i.keys.map((e=>e.name)))),o=i.stringify(c)}else if("path"in e)o=e.path,i=n.find((e=>e.re.test(o))),i&&(c=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw H(1,{location:e,currentLocation:t});s=i.record.name,c=a({},t.params,e.params),o=i.stringify(c)}const u=[];let l=i;while(l)u.unshift(l.record),l=l.parent;return{name:s,path:o,params:c,matched:u,meta:ue(u)}}return t=le({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>o(e))),{addRoute:o,resolve:h,removeRoute:s,getRoutes:c,getRecordMatcher:i}}function oe(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function se(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ae(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ae(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="object"===typeof n?n[r]:n;return t}function ce(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ue(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function le(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function he(e,t){return t.children.some((t=>t===e||he(e,t)))}const de=/#/g,fe=/&/g,pe=/\//g,me=/=/g,ge=/\?/g,ye=/\+/g,ve=/%5B/g,we=/%5D/g,be=/%5E/g,Ee=/%60/g,_e=/%7B/g,Se=/%7C/g,Te=/%7D/g,Ie=/%20/g;function ke(e){return encodeURI(""+e).replace(Se,"|").replace(ve,"[").replace(we,"]")}function Ae(e){return ke(e).replace(_e,"{").replace(Te,"}").replace(be,"^")}function Ce(e){return ke(e).replace(ye,"%2B").replace(Ie,"+").replace(de,"%23").replace(fe,"%26").replace(Ee,"`").replace(_e,"{").replace(Te,"}").replace(be,"^")}function Oe(e){return Ce(e).replace(me,"%3D")}function xe(e){return ke(e).replace(de,"%23").replace(ge,"%3F")}function Re(e){return null==e?"":xe(e).replace(pe,"%2F")}function Pe(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Ne(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(ye," "),n=e.indexOf("="),o=Pe(n<0?e:e.slice(0,n)),s=n<0?null:Pe(e.slice(n+1));if(o in t){let e=t[o];l(e)||(e=t[o]=[e]),e.push(s)}else t[o]=s}return t}function De(e){let t="";for(let n in e){const r=e[n];if(n=Oe(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=l(r)?r.map((e=>e&&Ce(e))):[r&&Ce(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Le(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=l(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Me=Symbol(""),je=Symbol(""),Fe=Symbol(""),Ue=Symbol(""),Ve=Symbol("");function $e(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Be(e,t,n,r,i){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((s,a)=>{const c=e=>{!1===e?a(H(4,{from:n,to:t})):e instanceof Error?a(e):V(e)?a(H(2,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&"function"===typeof e&&o.push(e),s())},u=e.call(r&&r.instances[i],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch((e=>a(e)))}))}function qe(e,t,n,r){const i=[];for(const o of e){0;for(const e in o.components){let a=o.components[e];if("beforeRouteEnter"===t||o.instances[e])if(ze(a)){const s=a.__vccOpts||a,c=s[t];c&&i.push(Be(c,n,r,o,e))}else{let c=a();0,i.push((()=>c.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${o.path}"`));const a=s(i)?i.default:i;o.components[e]=a;const c=a.__vccOpts||a,u=c[t];return u&&Be(u,n,r,o,e)()}))))}}}return i}function ze(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function He(e){const t=(0,r.f3)(Fe),n=(0,r.f3)(Ue),o=(0,r.Fl)((()=>t.resolve((0,i.SU)(e.to)))),s=(0,r.Fl)((()=>{const{matched:e}=o.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const s=i.findIndex(y.bind(null,r));if(s>-1)return s;const a=Qe(e[t-2]);return t>1&&Qe(r)===a&&i[i.length-1].path!==a?i.findIndex(y.bind(null,e[t-2])):s})),a=(0,r.Fl)((()=>s.value>-1&&Je(n.params,o.value.params))),c=(0,r.Fl)((()=>s.value>-1&&s.value===n.matched.length-1&&v(n.params,o.value.params)));function l(n={}){return We(n)?t[(0,i.SU)(e.replace)?"replace":"push"]((0,i.SU)(e.to)).catch(u):Promise.resolve()}return{route:o,href:(0,r.Fl)((()=>o.value.href)),isActive:a,isExactActive:c,navigate:l}}const Ge=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:He,setup(e,{slots:t}){const n=(0,i.qj)(He(e)),{options:o}=(0,r.f3)(Fe),s=(0,r.Fl)((()=>({[Ye(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[Ye(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Ke=Ge;function We(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Je(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!l(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Qe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ye=(e,t,n)=>null!=e?e:null!=t?t:n,Xe=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const o=(0,r.f3)(Ve),s=(0,r.Fl)((()=>e.route||o.value)),c=(0,r.f3)(je,0),u=(0,r.Fl)((()=>{let e=(0,i.SU)(c);const{matched:t}=s.value;let n;while((n=t[e])&&!n.components)e++;return e})),l=(0,r.Fl)((()=>s.value.matched[u.value]));(0,r.JJ)(je,(0,r.Fl)((()=>u.value+1))),(0,r.JJ)(Me,l),(0,r.JJ)(Ve,s);const h=(0,i.iH)();return(0,r.YP)((()=>[h.value,l.value,e.name]),(([e,t,n],[r,i,o])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&y(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=s.value,o=e.name,c=l.value,u=c&&c.components[o];if(!u)return Ze(n.default,{Component:u,route:i});const d=c.props[o],f=d?!0===d?i.params:"function"===typeof d?d(i):d:null,p=e=>{e.component.isUnmounted&&(c.instances[o]=null)},m=(0,r.h)(u,a({},f,t,{onVnodeUnmounted:p,ref:h}));return Ze(n.default,{Component:m,route:i})||m}}});function Ze(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const et=Xe;function tt(e){const t=ie(e.routes,e),n=e.parseQuery||Ne,s=e.stringifyQuery||De,h=e.history;const d=$e(),m=$e(),y=$e(),v=(0,i.XI)(B);let w=B;o&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const b=c.bind(null,(e=>""+e)),E=c.bind(null,Re),S=c.bind(null,Pe);function T(e,n){let r,i;return $(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function I(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function k(){return t.getRoutes().map((e=>e.record))}function A(e){return!!t.getRecordMatcher(e)}function R(e,r){if(r=a({},r||v.value),"string"===typeof e){const i=f(n,e,r.path),o=t.resolve({path:i.path},r),s=h.createHref(i.fullPath);return a(i,o,{params:S(o.params),hash:Pe(i.hash),redirectedFrom:void 0,href:s})}let i;if("path"in e)i=a({},e,{path:f(n,e.path,r.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];i=a({},e,{params:E(t)}),r.params=E(r.params)}const o=t.resolve(i,r),c=e.hash||"";o.params=b(S(o.params));const u=p(s,a({},e,{hash:Ae(c),path:o.path})),l=h.createHref(u);return a({fullPath:u,hash:c,query:s===De?Le(e.query):e.query||{}},o,{redirectedFrom:void 0,href:l})}function D(e){return"string"===typeof e?f(n,e,v.value.path):a({},e)}function L(e,t){if(w!==e)return H(8,{from:t,to:e})}function M(e){return U(e)}function j(e){return M(a(D(e),{replace:!0}))}function F(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=D(r):{path:r},r.params={}),a({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function U(e,t){const n=w=R(e),r=v.value,i=e.state,o=e.force,c=!0===e.replace,u=F(n);if(u)return U(a(D(u),{state:"object"===typeof u?a({},i,u.state):i,force:o,replace:c}),t||n);const l=n;let h;return l.redirectedFrom=t,!o&&g(s,r,n)&&(h=H(16,{to:l,from:r}),re(r,r,!0,!1)),(h?Promise.resolve(h):z(l,r)).catch((e=>G(e)?G(e,2)?e:ne(e):ee(e,l,r))).then((e=>{if(e){if(G(e,2))return U(a({replace:c},D(e.to),{state:"object"===typeof e.to?a({},i,e.to.state):i,force:o}),t||l)}else e=W(l,r,!0,c,i);return K(l,r,e),e}))}function V(e,t){const n=L(e,t);return n?Promise.reject(n):Promise.resolve()}function q(e){const t=ae.values().next().value;return t&&"function"===typeof t.runWithContext?t.runWithContext(e):e()}function z(e,t){let n;const[r,i,o]=nt(e,t);n=qe(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(Be(r,e,t))}));const s=V.bind(null,e,t);return n.push(s),ue(n).then((()=>{n=[];for(const r of d.list())n.push(Be(r,e,t));return n.push(s),ue(n)})).then((()=>{n=qe(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(Be(r,e,t))}));return n.push(s),ue(n)})).then((()=>{n=[];for(const r of o)if(r.beforeEnter)if(l(r.beforeEnter))for(const i of r.beforeEnter)n.push(Be(i,e,t));else n.push(Be(r.beforeEnter,e,t));return n.push(s),ue(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=qe(o,"beforeRouteEnter",e,t),n.push(s),ue(n)))).then((()=>{n=[];for(const r of m.list())n.push(Be(r,e,t));return n.push(s),ue(n)})).catch((e=>G(e,8)?e:Promise.reject(e)))}function K(e,t,n){y.list().forEach((r=>q((()=>r(e,t,n)))))}function W(e,t,n,r,i){const s=L(e,t);if(s)return s;const c=t===B,u=o?history.state:{};n&&(r||c?h.replace(e.fullPath,a({scroll:c&&u&&u.scroll},i)):h.push(e.fullPath,i)),v.value=e,re(e,t,n,c),ne()}let J;function Q(){J||(J=h.listen(((e,t,n)=>{if(!ce.listening)return;const r=R(e),i=F(r);if(i)return void U(a(i,{replace:!0}),r).catch(u);w=r;const s=v.value;o&&P(x(s.fullPath,n.delta),C()),z(r,s).catch((e=>G(e,12)?e:G(e,2)?(U(e.to,r).then((e=>{G(e,20)&&!n.delta&&n.type===_.pop&&h.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&h.go(-n.delta,!1),ee(e,r,s)))).then((e=>{e=e||W(r,s,!1),e&&(n.delta&&!G(e,8)?h.go(-n.delta,!1):n.type===_.pop&&G(e,20)&&h.go(-1,!1)),K(r,s,e)})).catch(u)})))}let Y,X=$e(),Z=$e();function ee(e,t,n){ne(e);const r=Z.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function te(){return Y&&v.value!==B?Promise.resolve():new Promise(((e,t)=>{X.add([e,t])}))}function ne(e){return Y||(Y=!e,Q(),X.list().forEach((([t,n])=>e?n(e):t())),X.reset()),e}function re(t,n,i,s){const{scrollBehavior:a}=e;if(!o||!a)return Promise.resolve();const c=!i&&N(x(t.fullPath,0))||(s||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(t,n,c))).then((e=>e&&O(e))).catch((e=>ee(e,t,n)))}const oe=e=>h.go(e);let se;const ae=new Set,ce={currentRoute:v,listening:!0,addRoute:T,removeRoute:I,hasRoute:A,getRoutes:k,resolve:R,options:e,push:M,replace:j,go:oe,back:()=>oe(-1),forward:()=>oe(1),beforeEach:d.add,beforeResolve:m.add,afterEach:y.add,onError:Z.add,isReady:te,install(e){const t=this;e.component("RouterLink",Ke),e.component("RouterView",et),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(v)}),o&&!se&&v.value===B&&(se=!0,M(h.location).catch((e=>{0})));const n={};for(const i in B)Object.defineProperty(n,i,{get:()=>v.value[i],enumerable:!0});e.provide(Fe,t),e.provide(Ue,(0,i.Um)(n)),e.provide(Ve,v);const r=e.unmount;ae.add(e),e.unmount=function(){ae.delete(e),ae.size<1&&(w=B,J&&J(),J=null,v.value=B,se=!1,Y=!1),r()}}};function ue(e){return e.reduce(((e,t)=>e.then((()=>q(t)))),Promise.resolve())}return ce}function nt(e,t){const n=[],r=[],i=[],o=Math.max(t.matched.length,e.matched.length);for(let s=0;s<o;s++){const o=t.matched[s];o&&(e.matched.find((e=>y(e,o)))?r.push(o):n.push(o));const a=e.matched[s];a&&(t.matched.find((e=>y(e,a)))||i.push(a))}return[n,r,i]}function rt(){return(0,r.f3)(Fe)}},732:e=>{e.exports={i8:"4.5.0"}}}]);
//# sourceMappingURL=chunk-vendors.fc49188e.js.map