const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/TodoList-DFG04T7g.js","assets/index-TKIKcJZ6.js"])))=>i.map(i=>d[i]);
import{f as Ze,r as B,_ as Ye,u as X,a as et,j as g,s as Q,b as tt,c as nt}from"./index-TKIKcJZ6.js";function Pe(e,t){return function(){return e.apply(t,arguments)}}const{toString:rt}=Object.prototype,{getPrototypeOf:ue}=Object,V=(e=>t=>{const r=rt.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),x=e=>(e=e.toLowerCase(),t=>V(t)===e),K=e=>t=>typeof t===e,{isArray:D}=Array,q=K("undefined");function st(e){return e!==null&&!q(e)&&e.constructor!==null&&!q(e.constructor)&&O(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ne=x("ArrayBuffer");function ot(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ne(e.buffer),t}const it=K("string"),O=K("function"),_e=K("number"),W=e=>e!==null&&typeof e=="object",at=e=>e===!0||e===!1,M=e=>{if(V(e)!=="object")return!1;const t=ue(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ct=x("Date"),ut=x("File"),lt=x("Blob"),ft=x("FileList"),dt=e=>W(e)&&O(e.pipe),pt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||O(e.append)&&((t=V(e))==="formdata"||t==="object"&&O(e.toString)&&e.toString()==="[object FormData]"))},ht=x("URLSearchParams"),[mt,yt,wt,bt]=["ReadableStream","Request","Response","Headers"].map(x),Et=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function H(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,s;if(typeof e!="object"&&(e=[e]),D(e))for(n=0,s=e.length;n<s;n++)t.call(null,e[n],n,e);else{const o=r?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let u;for(n=0;n<i;n++)u=o[n],t.call(null,e[u],u,e)}}function Le(e,t){t=t.toLowerCase();const r=Object.keys(e);let n=r.length,s;for(;n-- >0;)if(s=r[n],t===s.toLowerCase())return s;return null}const Fe=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Be=e=>!q(e)&&e!==Fe;function ne(){const{caseless:e}=Be(this)&&this||{},t={},r=(n,s)=>{const o=e&&Le(t,s)||s;M(t[o])&&M(n)?t[o]=ne(t[o],n):M(n)?t[o]=ne({},n):D(n)?t[o]=n.slice():t[o]=n};for(let n=0,s=arguments.length;n<s;n++)arguments[n]&&H(arguments[n],r);return t}const Rt=(e,t,r,{allOwnKeys:n}={})=>(H(t,(s,o)=>{r&&O(s)?e[o]=Pe(s,r):e[o]=s},{allOwnKeys:n}),e),St=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),gt=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},Tt=(e,t,r,n)=>{let s,o,i;const u={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!n||n(i,e,t))&&!u[i]&&(t[i]=e[i],u[i]=!0);e=r!==!1&&ue(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},Ot=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},At=e=>{if(!e)return null;if(D(e))return e;let t=e.length;if(!_e(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},xt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ue(Uint8Array)),Ct=(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=n.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Pt=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},Nt=x("HTMLFormElement"),_t=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,s){return n.toUpperCase()+s}),me=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),Lt=x("RegExp"),De=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};H(r,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(n[o]=i||s)}),Object.defineProperties(e,n)},Ft=e=>{De(e,(t,r)=>{if(O(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(O(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},Bt=(e,t)=>{const r={},n=s=>{s.forEach(o=>{r[o]=!0})};return D(e)?n(e):n(String(e).split(t)),r},Dt=()=>{},jt=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Z="abcdefghijklmnopqrstuvwxyz",ye="0123456789",je={DIGIT:ye,ALPHA:Z,ALPHA_DIGIT:Z+Z.toUpperCase()+ye},Ut=(e=16,t=je.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r};function kt(e){return!!(e&&O(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const qt=e=>{const t=new Array(10),r=(n,s)=>{if(W(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[s]=n;const o=D(n)?[]:{};return H(n,(i,u)=>{const f=r(i,s+1);!q(f)&&(o[u]=f)}),t[s]=void 0,o}}return n};return r(e,0)},Ht=x("AsyncFunction"),It=e=>e&&(W(e)||O(e))&&O(e.then)&&O(e.catch),a={isArray:D,isArrayBuffer:Ne,isBuffer:st,isFormData:pt,isArrayBufferView:ot,isString:it,isNumber:_e,isBoolean:at,isObject:W,isPlainObject:M,isReadableStream:mt,isRequest:yt,isResponse:wt,isHeaders:bt,isUndefined:q,isDate:ct,isFile:ut,isBlob:lt,isRegExp:Lt,isFunction:O,isStream:dt,isURLSearchParams:ht,isTypedArray:xt,isFileList:ft,forEach:H,merge:ne,extend:Rt,trim:Et,stripBOM:St,inherits:gt,toFlatObject:Tt,kindOf:V,kindOfTest:x,endsWith:Ot,toArray:At,forEachEntry:Ct,matchAll:Pt,isHTMLForm:Nt,hasOwnProperty:me,hasOwnProp:me,reduceDescriptors:De,freezeMethods:Ft,toObjectSet:Bt,toCamelCase:_t,noop:Dt,toFiniteNumber:jt,findKey:Le,global:Fe,isContextDefined:Be,ALPHABET:je,generateString:Ut,isSpecCompliantForm:kt,toJSONObject:qt,isAsyncFn:Ht,isThenable:It};function h(e,t,r,n,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),s&&(this.response=s)}a.inherits(h,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ue=h.prototype,ke={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ke[e]={value:e}});Object.defineProperties(h,ke);Object.defineProperty(Ue,"isAxiosError",{value:!0});h.from=(e,t,r,n,s,o)=>{const i=Object.create(Ue);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},u=>u!=="isAxiosError"),h.call(i,e.message,t,r,n,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Mt=null;function re(e){return a.isPlainObject(e)||a.isArray(e)}function qe(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function we(e,t,r){return e?e.concat(t).map(function(s,o){return s=qe(s),!r&&o?"["+s+"]":s}).join(r?".":""):t}function zt(e){return a.isArray(e)&&!e.some(re)}const Jt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function $(e,t,r){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=a.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,R){return!a.isUndefined(R[m])});const n=r.metaTokens,s=r.visitor||c,o=r.dots,i=r.indexes,f=(r.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function l(d){if(d===null)return"";if(a.isDate(d))return d.toISOString();if(!f&&a.isBlob(d))throw new h("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(d)||a.isTypedArray(d)?f&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function c(d,m,R){let S=d;if(d&&!R&&typeof d=="object"){if(a.endsWith(m,"{}"))m=n?m:m.slice(0,-2),d=JSON.stringify(d);else if(a.isArray(d)&&zt(d)||(a.isFileList(d)||a.endsWith(m,"[]"))&&(S=a.toArray(d)))return m=qe(m),S.forEach(function(w,U){!(a.isUndefined(w)||w===null)&&t.append(i===!0?we([m],U,o):i===null?m:m+"[]",l(w))}),!1}return re(d)?!0:(t.append(we(R,m,o),l(d)),!1)}const p=[],b=Object.assign(Jt,{defaultVisitor:c,convertValue:l,isVisitable:re});function y(d,m){if(!a.isUndefined(d)){if(p.indexOf(d)!==-1)throw Error("Circular reference detected in "+m.join("."));p.push(d),a.forEach(d,function(S,C){(!(a.isUndefined(S)||S===null)&&s.call(t,S,a.isString(C)?C.trim():C,m,b))===!0&&y(S,m?m.concat(C):[C])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function be(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function le(e,t){this._pairs=[],e&&$(e,this,t)}const He=le.prototype;He.append=function(t,r){this._pairs.push([t,r])};He.toString=function(t){const r=t?function(n){return t.call(this,n,be)}:be;return this._pairs.map(function(s){return r(s[0])+"="+r(s[1])},"").join("&")};function vt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ie(e,t,r){if(!t)return e;const n=r&&r.encode||vt,s=r&&r.serialize;let o;if(s?o=s(t,r):o=a.isURLSearchParams(t)?t.toString():new le(t,r).toString(n),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Ee{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(n){n!==null&&t(n)})}}const Me={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Vt=typeof URLSearchParams<"u"?URLSearchParams:le,Kt=typeof FormData<"u"?FormData:null,Wt=typeof Blob<"u"?Blob:null,$t={isBrowser:!0,classes:{URLSearchParams:Vt,FormData:Kt,Blob:Wt},protocols:["http","https","file","blob","url","data"]},fe=typeof window<"u"&&typeof document<"u",Gt=(e=>fe&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Xt=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Qt=fe&&window.location.href||"http://localhost",Zt=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:fe,hasStandardBrowserEnv:Gt,hasStandardBrowserWebWorkerEnv:Xt,origin:Qt},Symbol.toStringTag,{value:"Module"})),A={...Zt,...$t};function Yt(e,t){return $(e,new A.classes.URLSearchParams,Object.assign({visitor:function(r,n,s,o){return A.isNode&&a.isBuffer(r)?(this.append(n,r.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function en(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function tn(e){const t={},r=Object.keys(e);let n;const s=r.length;let o;for(n=0;n<s;n++)o=r[n],t[o]=e[o];return t}function ze(e){function t(r,n,s,o){let i=r[o++];if(i==="__proto__")return!0;const u=Number.isFinite(+i),f=o>=r.length;return i=!i&&a.isArray(s)?s.length:i,f?(a.hasOwnProp(s,i)?s[i]=[s[i],n]:s[i]=n,!u):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(r,n,s[i],o)&&a.isArray(s[i])&&(s[i]=tn(s[i])),!u)}if(a.isFormData(e)&&a.isFunction(e.entries)){const r={};return a.forEachEntry(e,(n,s)=>{t(en(n),s,r,0)}),r}return null}function nn(e,t,r){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const I={transitional:Me,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const n=r.getContentType()||"",s=n.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(ze(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Yt(t,this.formSerializer).toString();if((u=a.isFileList(t))||n.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return $(u?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||s?(r.setContentType("application/json",!1),nn(t)):t}],transformResponse:[function(t){const r=this.transitional||I.transitional,n=r&&r.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(n&&!this.responseType||s)){const i=!(r&&r.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(u){if(i)throw u.name==="SyntaxError"?h.from(u,h.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:A.classes.FormData,Blob:A.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{I.headers[e]={}});const rn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),sn=e=>{const t={};let r,n,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),r=i.substring(0,s).trim().toLowerCase(),n=i.substring(s+1).trim(),!(!r||t[r]&&rn[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},Re=Symbol("internals");function k(e){return e&&String(e).trim().toLowerCase()}function z(e){return e===!1||e==null?e:a.isArray(e)?e.map(z):String(e)}function on(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const an=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Y(e,t,r,n,s){if(a.isFunction(n))return n.call(this,t,r);if(s&&(t=r),!!a.isString(t)){if(a.isString(n))return t.indexOf(n)!==-1;if(a.isRegExp(n))return n.test(t)}}function cn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function un(e,t){const r=a.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(s,o,i){return this[n].call(this,t,s,o,i)},configurable:!0})})}class T{constructor(t){t&&this.set(t)}set(t,r,n){const s=this;function o(u,f,l){const c=k(f);if(!c)throw new Error("header name must be a non-empty string");const p=a.findKey(s,c);(!p||s[p]===void 0||l===!0||l===void 0&&s[p]!==!1)&&(s[p||f]=z(u))}const i=(u,f)=>a.forEach(u,(l,c)=>o(l,c,f));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,r);else if(a.isString(t)&&(t=t.trim())&&!an(t))i(sn(t),r);else if(a.isHeaders(t))for(const[u,f]of t.entries())o(f,u,n);else t!=null&&o(r,t,n);return this}get(t,r){if(t=k(t),t){const n=a.findKey(this,t);if(n){const s=this[n];if(!r)return s;if(r===!0)return on(s);if(a.isFunction(r))return r.call(this,s,n);if(a.isRegExp(r))return r.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=k(t),t){const n=a.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||Y(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let s=!1;function o(i){if(i=k(i),i){const u=a.findKey(n,i);u&&(!r||Y(n,n[u],u,r))&&(delete n[u],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const r=Object.keys(this);let n=r.length,s=!1;for(;n--;){const o=r[n];(!t||Y(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const r=this,n={};return a.forEach(this,(s,o)=>{const i=a.findKey(n,o);if(i){r[i]=z(s),delete r[o];return}const u=t?cn(o):String(o).trim();u!==o&&delete r[o],r[u]=z(s),n[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return a.forEach(this,(n,s)=>{n!=null&&n!==!1&&(r[s]=t&&a.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(s=>n.set(s)),n}static accessor(t){const n=(this[Re]=this[Re]={accessors:{}}).accessors,s=this.prototype;function o(i){const u=k(i);n[u]||(un(s,i),n[u]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}T.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(T.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});a.freezeMethods(T);function ee(e,t){const r=this||I,n=t||r,s=T.from(n.headers);let o=n.data;return a.forEach(e,function(u){o=u.call(r,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Je(e){return!!(e&&e.__CANCEL__)}function j(e,t,r){h.call(this,e??"canceled",h.ERR_CANCELED,t,r),this.name="CanceledError"}a.inherits(j,h,{__CANCEL__:!0});function ve(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new h("Request failed with status code "+r.status,[h.ERR_BAD_REQUEST,h.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function ln(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function fn(e,t){e=e||10;const r=new Array(e),n=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(f){const l=Date.now(),c=n[o];i||(i=l),r[s]=f,n[s]=l;let p=o,b=0;for(;p!==s;)b+=r[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const y=c&&l-c;return y?Math.round(b*1e3/y):void 0}}function dn(e,t){let r=0;const n=1e3/t;let s=null;return function(){const i=this===!0,u=Date.now();if(i||u-r>n)return s&&(clearTimeout(s),s=null),r=u,e.apply(null,arguments);s||(s=setTimeout(()=>(s=null,r=Date.now(),e.apply(null,arguments)),n-(u-r)))}}const J=(e,t,r=3)=>{let n=0;const s=fn(50,250);return dn(o=>{const i=o.loaded,u=o.lengthComputable?o.total:void 0,f=i-n,l=s(f),c=i<=u;n=i;const p={loaded:i,total:u,progress:u?i/u:void 0,bytes:f,rate:l||void 0,estimated:l&&u&&c?(u-i)/l:void 0,event:o,lengthComputable:u!=null};p[t?"download":"upload"]=!0,e(p)},r)},pn=A.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");let n;function s(o){let i=o;return t&&(r.setAttribute("href",i),i=r.href),r.setAttribute("href",i),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=s(window.location.href),function(i){const u=a.isString(i)?s(i):i;return u.protocol===n.protocol&&u.host===n.host}}():function(){return function(){return!0}}(),hn=A.hasStandardBrowserEnv?{write(e,t,r,n,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),a.isString(n)&&i.push("path="+n),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function mn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function yn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Ve(e,t){return e&&!mn(t)?yn(e,t):t}const Se=e=>e instanceof T?{...e}:e;function L(e,t){t=t||{};const r={};function n(l,c,p){return a.isPlainObject(l)&&a.isPlainObject(c)?a.merge.call({caseless:p},l,c):a.isPlainObject(c)?a.merge({},c):a.isArray(c)?c.slice():c}function s(l,c,p){if(a.isUndefined(c)){if(!a.isUndefined(l))return n(void 0,l,p)}else return n(l,c,p)}function o(l,c){if(!a.isUndefined(c))return n(void 0,c)}function i(l,c){if(a.isUndefined(c)){if(!a.isUndefined(l))return n(void 0,l)}else return n(void 0,c)}function u(l,c,p){if(p in t)return n(l,c);if(p in e)return n(void 0,l)}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:u,headers:(l,c)=>s(Se(l),Se(c),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(c){const p=f[c]||s,b=p(e[c],t[c],c);a.isUndefined(b)&&p!==u||(r[c]=b)}),r}const Ke=e=>{const t=L({},e);let{data:r,withXSRFToken:n,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:u}=t;t.headers=i=T.from(i),t.url=Ie(Ve(t.baseURL,t.url),e.params,e.paramsSerializer),u&&i.set("Authorization","Basic "+btoa((u.username||"")+":"+(u.password?unescape(encodeURIComponent(u.password)):"")));let f;if(a.isFormData(r)){if(A.hasStandardBrowserEnv||A.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((f=i.getContentType())!==!1){const[l,...c]=f?f.split(";").map(p=>p.trim()).filter(Boolean):[];i.setContentType([l||"multipart/form-data",...c].join("; "))}}if(A.hasStandardBrowserEnv&&(n&&a.isFunction(n)&&(n=n(t)),n||n!==!1&&pn(t.url))){const l=s&&o&&hn.read(o);l&&i.set(s,l)}return t},wn=typeof XMLHttpRequest<"u",bn=wn&&function(e){return new Promise(function(r,n){const s=Ke(e);let o=s.data;const i=T.from(s.headers).normalize();let{responseType:u}=s,f;function l(){s.cancelToken&&s.cancelToken.unsubscribe(f),s.signal&&s.signal.removeEventListener("abort",f)}let c=new XMLHttpRequest;c.open(s.method.toUpperCase(),s.url,!0),c.timeout=s.timeout;function p(){if(!c)return;const y=T.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),m={data:!u||u==="text"||u==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:e,request:c};ve(function(S){r(S),l()},function(S){n(S),l()},m),c=null}"onloadend"in c?c.onloadend=p:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(p)},c.onabort=function(){c&&(n(new h("Request aborted",h.ECONNABORTED,s,c)),c=null)},c.onerror=function(){n(new h("Network Error",h.ERR_NETWORK,s,c)),c=null},c.ontimeout=function(){let d=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const m=s.transitional||Me;s.timeoutErrorMessage&&(d=s.timeoutErrorMessage),n(new h(d,m.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,s,c)),c=null},o===void 0&&i.setContentType(null),"setRequestHeader"in c&&a.forEach(i.toJSON(),function(d,m){c.setRequestHeader(m,d)}),a.isUndefined(s.withCredentials)||(c.withCredentials=!!s.withCredentials),u&&u!=="json"&&(c.responseType=s.responseType),typeof s.onDownloadProgress=="function"&&c.addEventListener("progress",J(s.onDownloadProgress,!0)),typeof s.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",J(s.onUploadProgress)),(s.cancelToken||s.signal)&&(f=y=>{c&&(n(!y||y.type?new j(null,e,c):y),c.abort(),c=null)},s.cancelToken&&s.cancelToken.subscribe(f),s.signal&&(s.signal.aborted?f():s.signal.addEventListener("abort",f)));const b=ln(s.url);if(b&&A.protocols.indexOf(b)===-1){n(new h("Unsupported protocol "+b+":",h.ERR_BAD_REQUEST,e));return}c.send(o||null)})},En=(e,t)=>{let r=new AbortController,n;const s=function(f){if(!n){n=!0,i();const l=f instanceof Error?f:this.reason;r.abort(l instanceof h?l:new j(l instanceof Error?l.message:l))}};let o=t&&setTimeout(()=>{s(new h(`timeout ${t} of ms exceeded`,h.ETIMEDOUT))},t);const i=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(f=>{f&&(f.removeEventListener?f.removeEventListener("abort",s):f.unsubscribe(s))}),e=null)};e.forEach(f=>f&&f.addEventListener&&f.addEventListener("abort",s));const{signal:u}=r;return u.unsubscribe=i,[u,()=>{o&&clearTimeout(o),o=null}]},Rn=function*(e,t){let r=e.byteLength;if(!t||r<t){yield e;return}let n=0,s;for(;n<r;)s=n+t,yield e.slice(n,s),n=s},Sn=async function*(e,t,r){for await(const n of e)yield*Rn(ArrayBuffer.isView(n)?n:await r(String(n)),t)},ge=(e,t,r,n,s)=>{const o=Sn(e,t,s);let i=0;return new ReadableStream({type:"bytes",async pull(u){const{done:f,value:l}=await o.next();if(f){u.close(),n();return}let c=l.byteLength;r&&r(i+=c),u.enqueue(new Uint8Array(l))},cancel(u){return n(u),o.return()}},{highWaterMark:2})},Te=(e,t)=>{const r=e!=null;return n=>setTimeout(()=>t({lengthComputable:r,total:e,loaded:n}))},G=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",We=G&&typeof ReadableStream=="function",se=G&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),gn=We&&(()=>{let e=!1;const t=new Request(A.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),Oe=64*1024,oe=We&&!!(()=>{try{return a.isReadableStream(new Response("").body)}catch{}})(),v={stream:oe&&(e=>e.body)};G&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!v[t]&&(v[t]=a.isFunction(e[t])?r=>r[t]():(r,n)=>{throw new h(`Response type '${t}' is not supported`,h.ERR_NOT_SUPPORT,n)})})})(new Response);const Tn=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(a.isArrayBufferView(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await se(e)).byteLength},On=async(e,t)=>{const r=a.toFiniteNumber(e.getContentLength());return r??Tn(t)},An=G&&(async e=>{let{url:t,method:r,data:n,signal:s,cancelToken:o,timeout:i,onDownloadProgress:u,onUploadProgress:f,responseType:l,headers:c,withCredentials:p="same-origin",fetchOptions:b}=Ke(e);l=l?(l+"").toLowerCase():"text";let[y,d]=s||o||i?En([s,o],i):[],m,R;const S=()=>{!m&&setTimeout(()=>{y&&y.unsubscribe()}),m=!0};let C;try{if(f&&gn&&r!=="get"&&r!=="head"&&(C=await On(c,n))!==0){let P=new Request(t,{method:"POST",body:n,duplex:"half"}),F;a.isFormData(n)&&(F=P.headers.get("content-type"))&&c.setContentType(F),P.body&&(n=ge(P.body,Oe,Te(C,J(f)),null,se))}a.isString(p)||(p=p?"cors":"omit"),R=new Request(t,{...b,signal:y,method:r.toUpperCase(),headers:c.normalize().toJSON(),body:n,duplex:"half",withCredentials:p});let w=await fetch(R);const U=oe&&(l==="stream"||l==="response");if(oe&&(u||U)){const P={};["status","statusText","headers"].forEach(he=>{P[he]=w[he]});const F=a.toFiniteNumber(w.headers.get("content-length"));w=new Response(ge(w.body,Oe,u&&Te(F,J(u,!0)),U&&S,se),P)}l=l||"text";let Qe=await v[a.findKey(v,l)||"text"](w,e);return!U&&S(),d&&d(),await new Promise((P,F)=>{ve(P,F,{data:Qe,headers:T.from(w.headers),status:w.status,statusText:w.statusText,config:e,request:R})})}catch(w){throw S(),w&&w.name==="TypeError"&&/fetch/i.test(w.message)?Object.assign(new h("Network Error",h.ERR_NETWORK,e,R),{cause:w.cause||w}):h.from(w,w&&w.code,e,R)}}),ie={http:Mt,xhr:bn,fetch:An};a.forEach(ie,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ae=e=>`- ${e}`,xn=e=>a.isFunction(e)||e===null||e===!1,$e={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let r,n;const s={};for(let o=0;o<t;o++){r=e[o];let i;if(n=r,!xn(r)&&(n=ie[(i=String(r)).toLowerCase()],n===void 0))throw new h(`Unknown adapter '${i}'`);if(n)break;s[i||"#"+o]=n}if(!n){const o=Object.entries(s).map(([u,f])=>`adapter ${u} `+(f===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Ae).join(`
`):" "+Ae(o[0]):"as no adapter specified";throw new h("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return n},adapters:ie};function te(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new j(null,e)}function xe(e){return te(e),e.headers=T.from(e.headers),e.data=ee.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),$e.getAdapter(e.adapter||I.adapter)(e).then(function(n){return te(e),n.data=ee.call(e,e.transformResponse,n),n.headers=T.from(n.headers),n},function(n){return Je(n)||(te(e),n&&n.response&&(n.response.data=ee.call(e,e.transformResponse,n.response),n.response.headers=T.from(n.response.headers))),Promise.reject(n)})}const Ge="1.7.2",de={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{de[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const Ce={};de.transitional=function(t,r,n){function s(o,i){return"[Axios v"+Ge+"] Transitional option '"+o+"'"+i+(n?". "+n:"")}return(o,i,u)=>{if(t===!1)throw new h(s(i," has been removed"+(r?" in "+r:"")),h.ERR_DEPRECATED);return r&&!Ce[i]&&(Ce[i]=!0,console.warn(s(i," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(o,i,u):!0}};function Cn(e,t,r){if(typeof e!="object")throw new h("options must be an object",h.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let s=n.length;for(;s-- >0;){const o=n[s],i=t[o];if(i){const u=e[o],f=u===void 0||i(u,o,e);if(f!==!0)throw new h("option "+o+" must be "+f,h.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new h("Unknown option "+o,h.ERR_BAD_OPTION)}}const ae={assertOptions:Cn,validators:de},N=ae.validators;class _{constructor(t){this.defaults=t,this.interceptors={request:new Ee,response:new Ee}}async request(t,r){try{return await this._request(t,r)}catch(n){if(n instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{n.stack?o&&!String(n.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+o):n.stack=o}catch{}}throw n}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=L(this.defaults,r);const{transitional:n,paramsSerializer:s,headers:o}=r;n!==void 0&&ae.assertOptions(n,{silentJSONParsing:N.transitional(N.boolean),forcedJSONParsing:N.transitional(N.boolean),clarifyTimeoutError:N.transitional(N.boolean)},!1),s!=null&&(a.isFunction(s)?r.paramsSerializer={serialize:s}:ae.assertOptions(s,{encode:N.function,serialize:N.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[r.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],d=>{delete o[d]}),r.headers=T.concat(i,o);const u=[];let f=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(r)===!1||(f=f&&m.synchronous,u.unshift(m.fulfilled,m.rejected))});const l=[];this.interceptors.response.forEach(function(m){l.push(m.fulfilled,m.rejected)});let c,p=0,b;if(!f){const d=[xe.bind(this),void 0];for(d.unshift.apply(d,u),d.push.apply(d,l),b=d.length,c=Promise.resolve(r);p<b;)c=c.then(d[p++],d[p++]);return c}b=u.length;let y=r;for(p=0;p<b;){const d=u[p++],m=u[p++];try{y=d(y)}catch(R){m.call(this,R);break}}try{c=xe.call(this,y)}catch(d){return Promise.reject(d)}for(p=0,b=l.length;p<b;)c=c.then(l[p++],l[p++]);return c}getUri(t){t=L(this.defaults,t);const r=Ve(t.baseURL,t.url);return Ie(r,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){_.prototype[t]=function(r,n){return this.request(L(n||{},{method:t,url:r,data:(n||{}).data}))}});a.forEach(["post","put","patch"],function(t){function r(n){return function(o,i,u){return this.request(L(u||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}_.prototype[t]=r(),_.prototype[t+"Form"]=r(!0)});class pe{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(o){r=o});const n=this;this.promise.then(s=>{if(!n._listeners)return;let o=n._listeners.length;for(;o-- >0;)n._listeners[o](s);n._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(u=>{n.subscribe(u),o=u}).then(s);return i.cancel=function(){n.unsubscribe(o)},i},t(function(o,i,u){n.reason||(n.reason=new j(o,i,u),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new pe(function(s){t=s}),cancel:t}}}function Pn(e){return function(r){return e.apply(null,r)}}function Nn(e){return a.isObject(e)&&e.isAxiosError===!0}const ce={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ce).forEach(([e,t])=>{ce[t]=e});function Xe(e){const t=new _(e),r=Pe(_.prototype.request,t);return a.extend(r,_.prototype,t,{allOwnKeys:!0}),a.extend(r,t,null,{allOwnKeys:!0}),r.create=function(s){return Xe(L(e,s))},r}const E=Xe(I);E.Axios=_;E.CanceledError=j;E.CancelToken=pe;E.isCancel=Je;E.VERSION=Ge;E.toFormData=$;E.AxiosError=h;E.Cancel=E.CanceledError;E.all=function(t){return Promise.all(t)};E.spread=Pn;E.isAxiosError=Nn;E.mergeConfig=L;E.AxiosHeaders=T;E.formToJSON=e=>ze(a.isHTMLForm(e)?new FormData(e):e);E.getAdapter=$e.getAdapter;E.HttpStatusCode=ce;E.default=E;const _n=()=>async e=>{try{const t=await E.get("https://jsonplaceholder.typicode.com/todos");e(Ze(t.data))}catch(t){console.error("Error fetching todos:",t)}},Ln=B.lazy(()=>Ye(()=>import("./TodoList-DFG04T7g.js"),__vite__mapDeps([0,1])));function Dn(){const e=X(c=>c.todos),t=X(c=>c.filter),r=X(c=>c.search),n=et(),[s,o]=B.useState(""),i=B.useRef(null);B.useEffect(()=>{n(_n())},[n]);const u=()=>{var c;s.trim()&&(n(nt(s)),o(""),(c=i.current)==null||c.focus())},f=c=>{c.key==="Enter"&&u()},l=e.filter(c=>t==="completed"?c.completed:t==="active"?!c.completed:!0).filter(c=>c.title.toLowerCase().includes(r.toLowerCase()));return g.jsx(g.Fragment,{children:g.jsxs("div",{className:"App",children:[g.jsx("h1",{children:"Todo App"}),g.jsx("input",{ref:i,type:"text",value:s,onChange:c=>o(c.target.value),onKeyPress:f,placeholder:"Add a new todo"}),g.jsx("button",{onClick:u,children:"Add"}),g.jsxs("div",{children:[g.jsx("button",{onClick:()=>n(Q("all")),children:"All"}),g.jsx("button",{onClick:()=>n(Q("active")),children:"Active"}),g.jsx("button",{onClick:()=>n(Q("completed")),children:"Completed"})]}),g.jsx("input",{type:"text",value:r,onChange:c=>n(tt(c.target.value)),placeholder:"Search todos"}),g.jsx(B.Suspense,{fallback:g.jsx("div",{children:"Loading..."}),children:g.jsx(Fn,{todos:l})})]})})}const Fn=B.memo(Ln);export{Dn as default};
