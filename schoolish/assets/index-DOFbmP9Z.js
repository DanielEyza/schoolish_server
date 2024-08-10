function Bh(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var pi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Hh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vh={exports:{}},Go={},Wh={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var es=Symbol.for("react.element"),Sv=Symbol.for("react.portal"),Ev=Symbol.for("react.fragment"),_v=Symbol.for("react.strict_mode"),kv=Symbol.for("react.profiler"),Iv=Symbol.for("react.provider"),Cv=Symbol.for("react.context"),bv=Symbol.for("react.forward_ref"),xv=Symbol.for("react.suspense"),Tv=Symbol.for("react.memo"),Pv=Symbol.for("react.lazy"),td=Symbol.iterator;function Ov(e){return e===null||typeof e!="object"?null:(e=td&&e[td]||e["@@iterator"],typeof e=="function"?e:null)}var Kh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qh=Object.assign,Gh={};function Br(e,t,n){this.props=e,this.context=t,this.refs=Gh,this.updater=n||Kh}Br.prototype.isReactComponent={};Br.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Br.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Jh(){}Jh.prototype=Br.prototype;function ju(e,t,n){this.props=e,this.context=t,this.refs=Gh,this.updater=n||Kh}var Mu=ju.prototype=new Jh;Mu.constructor=ju;qh(Mu,Br.prototype);Mu.isPureReactComponent=!0;var nd=Array.isArray,Qh=Object.prototype.hasOwnProperty,$u={current:null},Yh={key:!0,ref:!0,__self:!0,__source:!0};function Xh(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Qh.call(t,r)&&!Yh.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:es,type:e,key:s,ref:o,props:i,_owner:$u.current}}function Rv(e,t){return{$$typeof:es,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Uu(e){return typeof e=="object"&&e!==null&&e.$$typeof===es}function Nv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var rd=/\/+/g;function ba(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Nv(""+e.key):t.toString(36)}function Us(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case es:case Sv:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+ba(o,0):r,nd(i)?(n="",e!=null&&(n=e.replace(rd,"$&/")+"/"),Us(i,t,n,"",function(u){return u})):i!=null&&(Uu(i)&&(i=Rv(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(rd,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",nd(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+ba(s,a);o+=Us(s,t,n,l,i)}else if(l=Ov(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+ba(s,a++),o+=Us(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function gs(e,t,n){if(e==null)return e;var r=[],i=0;return Us(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Av(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var be={current:null},Fs={transition:null},Lv={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:Fs,ReactCurrentOwner:$u};function Zh(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:gs,forEach:function(e,t,n){gs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return gs(e,function(){t++}),t},toArray:function(e){return gs(e,function(t){return t})||[]},only:function(e){if(!Uu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=Br;U.Fragment=Ev;U.Profiler=kv;U.PureComponent=ju;U.StrictMode=_v;U.Suspense=xv;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lv;U.act=Zh;U.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=qh({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=$u.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Qh.call(t,l)&&!Yh.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:es,type:e.type,key:i,ref:s,props:r,_owner:o}};U.createContext=function(e){return e={$$typeof:Cv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Iv,_context:e},e.Consumer=e};U.createElement=Xh;U.createFactory=function(e){var t=Xh.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:bv,render:e}};U.isValidElement=Uu;U.lazy=function(e){return{$$typeof:Pv,_payload:{_status:-1,_result:e},_init:Av}};U.memo=function(e,t){return{$$typeof:Tv,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=Fs.transition;Fs.transition={};try{e()}finally{Fs.transition=t}};U.unstable_act=Zh;U.useCallback=function(e,t){return be.current.useCallback(e,t)};U.useContext=function(e){return be.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return be.current.useDeferredValue(e)};U.useEffect=function(e,t){return be.current.useEffect(e,t)};U.useId=function(){return be.current.useId()};U.useImperativeHandle=function(e,t,n){return be.current.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return be.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return be.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return be.current.useMemo(e,t)};U.useReducer=function(e,t,n){return be.current.useReducer(e,t,n)};U.useRef=function(e){return be.current.useRef(e)};U.useState=function(e){return be.current.useState(e)};U.useSyncExternalStore=function(e,t,n){return be.current.useSyncExternalStore(e,t,n)};U.useTransition=function(){return be.current.useTransition()};U.version="18.3.1";Wh.exports=U;var P=Wh.exports;const Lt=Hh(P),Dv=Bh({__proto__:null,default:Lt},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jv=P,Mv=Symbol.for("react.element"),$v=Symbol.for("react.fragment"),Uv=Object.prototype.hasOwnProperty,Fv=jv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zv={key:!0,ref:!0,__self:!0,__source:!0};function ep(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Uv.call(t,r)&&!zv.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Mv,type:e,key:s,ref:o,props:i,_owner:Fv.current}}Go.Fragment=$v;Go.jsx=ep;Go.jsxs=ep;Vh.exports=Go;var S=Vh.exports,tp={exports:{}},He={},np={exports:{}},rp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,R){var N=b.length;b.push(R);e:for(;0<N;){var F=N-1>>>1,V=b[F];if(0<i(V,R))b[F]=R,b[N]=V,N=F;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var R=b[0],N=b.pop();if(N!==R){b[0]=N;e:for(var F=0,V=b.length,ie=V>>>1;F<ie;){var me=2*(F+1)-1,Kt=b[me],je=me+1,Ct=b[je];if(0>i(Kt,N))je<V&&0>i(Ct,Kt)?(b[F]=Ct,b[je]=N,F=je):(b[F]=Kt,b[me]=N,F=me);else if(je<V&&0>i(Ct,N))b[F]=Ct,b[je]=N,F=je;else break e}}return R}function i(b,R){var N=b.sortIndex-R.sortIndex;return N!==0?N:b.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,d=3,m=!1,y=!1,v=!1,_=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(b){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=b)r(u),R.sortIndex=R.expirationTime,t(l,R);else break;R=n(u)}}function w(b){if(v=!1,g(b),!y)if(n(l)!==null)y=!0,x(I);else{var R=n(u);R!==null&&j(w,R.startTime-b)}}function I(b,R){y=!1,v&&(v=!1,p(O),O=-1),m=!0;var N=d;try{for(g(R),f=n(l);f!==null&&(!(f.expirationTime>R)||b&&!B());){var F=f.callback;if(typeof F=="function"){f.callback=null,d=f.priorityLevel;var V=F(f.expirationTime<=R);R=e.unstable_now(),typeof V=="function"?f.callback=V:f===n(l)&&r(l),g(R)}else r(l);f=n(l)}if(f!==null)var ie=!0;else{var me=n(u);me!==null&&j(w,me.startTime-R),ie=!1}return ie}finally{f=null,d=N,m=!1}}var C=!1,k=null,O=-1,D=5,L=-1;function B(){return!(e.unstable_now()-L<D)}function re(){if(k!==null){var b=e.unstable_now();L=b;var R=!0;try{R=k(!0,b)}finally{R?Ze():(C=!1,k=null)}}else C=!1}var Ze;if(typeof h=="function")Ze=function(){h(re)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,E=Te.port2;Te.port1.onmessage=re,Ze=function(){E.postMessage(null)}}else Ze=function(){_(re,0)};function x(b){k=b,C||(C=!0,Ze())}function j(b,R){O=_(function(){b(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){y||m||(y=!0,x(I))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(b){switch(d){case 1:case 2:case 3:var R=3;break;default:R=d}var N=d;d=R;try{return b()}finally{d=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,R){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var N=d;d=b;try{return R()}finally{d=N}},e.unstable_scheduleCallback=function(b,R,N){var F=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?F+N:F):N=F,b){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=N+V,b={id:c++,callback:R,priorityLevel:b,startTime:N,expirationTime:V,sortIndex:-1},N>F?(b.sortIndex=N,t(u,b),n(l)===null&&b===n(u)&&(v?(p(O),O=-1):v=!0,j(w,N-F))):(b.sortIndex=V,t(l,b),y||m||(y=!0,x(I))),b},e.unstable_shouldYield=B,e.unstable_wrapCallback=function(b){var R=d;return function(){var N=d;d=R;try{return b.apply(this,arguments)}finally{d=N}}}})(rp);np.exports=rp;var Bv=np.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hv=P,Be=Bv;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ip=new Set,Pi={};function Qn(e,t){Tr(e,t),Tr(e+"Capture",t)}function Tr(e,t){for(Pi[e]=t,e=0;e<t.length;e++)ip.add(t[e])}var $t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yl=Object.prototype.hasOwnProperty,Vv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,id={},sd={};function Wv(e){return yl.call(sd,e)?!0:yl.call(id,e)?!1:Vv.test(e)?sd[e]=!0:(id[e]=!0,!1)}function Kv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function qv(e,t,n,r){if(t===null||typeof t>"u"||Kv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ge[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ge[t]=new xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ge[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ge[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ge[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ge[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ge[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ge[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ge[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fu=/[\-:]([a-z])/g;function zu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Fu,zu);ge[t]=new xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Fu,zu);ge[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Fu,zu);ge[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ge[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});ge.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ge[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Bu(e,t,n,r){var i=ge.hasOwnProperty(t)?ge[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(qv(t,n,i,r)&&(n=null),r||i===null?Wv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Vt=Hv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ms=Symbol.for("react.element"),sr=Symbol.for("react.portal"),or=Symbol.for("react.fragment"),Hu=Symbol.for("react.strict_mode"),vl=Symbol.for("react.profiler"),sp=Symbol.for("react.provider"),op=Symbol.for("react.context"),Vu=Symbol.for("react.forward_ref"),wl=Symbol.for("react.suspense"),Sl=Symbol.for("react.suspense_list"),Wu=Symbol.for("react.memo"),Yt=Symbol.for("react.lazy"),ap=Symbol.for("react.offscreen"),od=Symbol.iterator;function Yr(e){return e===null||typeof e!="object"?null:(e=od&&e[od]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,xa;function oi(e){if(xa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);xa=t&&t[1]||""}return`
`+xa+e}var Ta=!1;function Pa(e,t){if(!e||Ta)return"";Ta=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ta=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?oi(e):""}function Gv(e){switch(e.tag){case 5:return oi(e.type);case 16:return oi("Lazy");case 13:return oi("Suspense");case 19:return oi("SuspenseList");case 0:case 2:case 15:return e=Pa(e.type,!1),e;case 11:return e=Pa(e.type.render,!1),e;case 1:return e=Pa(e.type,!0),e;default:return""}}function El(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case or:return"Fragment";case sr:return"Portal";case vl:return"Profiler";case Hu:return"StrictMode";case wl:return"Suspense";case Sl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case op:return(e.displayName||"Context")+".Consumer";case sp:return(e._context.displayName||"Context")+".Provider";case Vu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Wu:return t=e.displayName||null,t!==null?t:El(e.type)||"Memo";case Yt:t=e._payload,e=e._init;try{return El(e(t))}catch{}}return null}function Jv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return El(t);case 8:return t===Hu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function wn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function lp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Qv(e){var t=lp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ys(e){e._valueTracker||(e._valueTracker=Qv(e))}function up(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=lp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function oo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function _l(e,t){var n=t.checked;return ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ad(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=wn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function cp(e,t){t=t.checked,t!=null&&Bu(e,"checked",t,!1)}function kl(e,t){cp(e,t);var n=wn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Il(e,t.type,n):t.hasOwnProperty("defaultValue")&&Il(e,t.type,wn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ld(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Il(e,t,n){(t!=="number"||oo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ai=Array.isArray;function wr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+wn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Cl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ud(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(ai(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:wn(n)}}function dp(e,t){var n=wn(t.value),r=wn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function cd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vs,hp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(vs=vs||document.createElement("div"),vs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=vs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Oi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var gi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yv=["Webkit","ms","Moz","O"];Object.keys(gi).forEach(function(e){Yv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),gi[t]=gi[e]})});function pp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||gi.hasOwnProperty(e)&&gi[e]?(""+t).trim():t+"px"}function gp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=pp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Xv=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xl(e,t){if(t){if(Xv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function Tl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pl=null;function Ku(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ol=null,Sr=null,Er=null;function dd(e){if(e=rs(e)){if(typeof Ol!="function")throw Error(T(280));var t=e.stateNode;t&&(t=Zo(t),Ol(e.stateNode,e.type,t))}}function mp(e){Sr?Er?Er.push(e):Er=[e]:Sr=e}function yp(){if(Sr){var e=Sr,t=Er;if(Er=Sr=null,dd(e),t)for(e=0;e<t.length;e++)dd(t[e])}}function vp(e,t){return e(t)}function wp(){}var Oa=!1;function Sp(e,t,n){if(Oa)return e(t,n);Oa=!0;try{return vp(e,t,n)}finally{Oa=!1,(Sr!==null||Er!==null)&&(wp(),yp())}}function Ri(e,t){var n=e.stateNode;if(n===null)return null;var r=Zo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var Rl=!1;if($t)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){Rl=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{Rl=!1}function Zv(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var mi=!1,ao=null,lo=!1,Nl=null,e0={onError:function(e){mi=!0,ao=e}};function t0(e,t,n,r,i,s,o,a,l){mi=!1,ao=null,Zv.apply(e0,arguments)}function n0(e,t,n,r,i,s,o,a,l){if(t0.apply(this,arguments),mi){if(mi){var u=ao;mi=!1,ao=null}else throw Error(T(198));lo||(lo=!0,Nl=u)}}function Yn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ep(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fd(e){if(Yn(e)!==e)throw Error(T(188))}function r0(e){var t=e.alternate;if(!t){if(t=Yn(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return fd(i),e;if(s===r)return fd(i),t;s=s.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function _p(e){return e=r0(e),e!==null?kp(e):null}function kp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=kp(e);if(t!==null)return t;e=e.sibling}return null}var Ip=Be.unstable_scheduleCallback,hd=Be.unstable_cancelCallback,i0=Be.unstable_shouldYield,s0=Be.unstable_requestPaint,ne=Be.unstable_now,o0=Be.unstable_getCurrentPriorityLevel,qu=Be.unstable_ImmediatePriority,Cp=Be.unstable_UserBlockingPriority,uo=Be.unstable_NormalPriority,a0=Be.unstable_LowPriority,bp=Be.unstable_IdlePriority,Jo=null,yt=null;function l0(e){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(Jo,e,void 0,(e.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:d0,u0=Math.log,c0=Math.LN2;function d0(e){return e>>>=0,e===0?32:31-(u0(e)/c0|0)|0}var ws=64,Ss=4194304;function li(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function co(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=li(a):(s&=o,s!==0&&(r=li(s)))}else o=n&~i,o!==0?r=li(o):s!==0&&(r=li(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ot(t),i=1<<n,r|=e[n],t&=~i;return r}function f0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function h0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-ot(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=f0(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function Al(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function xp(){var e=ws;return ws<<=1,!(ws&4194240)&&(ws=64),e}function Ra(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ts(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ot(t),e[t]=n}function p0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ot(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Gu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ot(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var W=0;function Tp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Pp,Ju,Op,Rp,Np,Ll=!1,Es=[],un=null,cn=null,dn=null,Ni=new Map,Ai=new Map,Zt=[],g0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pd(e,t){switch(e){case"focusin":case"focusout":un=null;break;case"dragenter":case"dragleave":cn=null;break;case"mouseover":case"mouseout":dn=null;break;case"pointerover":case"pointerout":Ni.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ai.delete(t.pointerId)}}function Zr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=rs(t),t!==null&&Ju(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function m0(e,t,n,r,i){switch(t){case"focusin":return un=Zr(un,e,t,n,r,i),!0;case"dragenter":return cn=Zr(cn,e,t,n,r,i),!0;case"mouseover":return dn=Zr(dn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ni.set(s,Zr(Ni.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ai.set(s,Zr(Ai.get(s)||null,e,t,n,r,i)),!0}return!1}function Ap(e){var t=Tn(e.target);if(t!==null){var n=Yn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ep(n),t!==null){e.blockedOn=t,Np(e.priority,function(){Op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Dl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Pl=r,n.target.dispatchEvent(r),Pl=null}else return t=rs(n),t!==null&&Ju(t),e.blockedOn=n,!1;t.shift()}return!0}function gd(e,t,n){zs(e)&&n.delete(t)}function y0(){Ll=!1,un!==null&&zs(un)&&(un=null),cn!==null&&zs(cn)&&(cn=null),dn!==null&&zs(dn)&&(dn=null),Ni.forEach(gd),Ai.forEach(gd)}function ei(e,t){e.blockedOn===t&&(e.blockedOn=null,Ll||(Ll=!0,Be.unstable_scheduleCallback(Be.unstable_NormalPriority,y0)))}function Li(e){function t(i){return ei(i,e)}if(0<Es.length){ei(Es[0],e);for(var n=1;n<Es.length;n++){var r=Es[n];r.blockedOn===e&&(r.blockedOn=null)}}for(un!==null&&ei(un,e),cn!==null&&ei(cn,e),dn!==null&&ei(dn,e),Ni.forEach(t),Ai.forEach(t),n=0;n<Zt.length;n++)r=Zt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Zt.length&&(n=Zt[0],n.blockedOn===null);)Ap(n),n.blockedOn===null&&Zt.shift()}var _r=Vt.ReactCurrentBatchConfig,fo=!0;function v0(e,t,n,r){var i=W,s=_r.transition;_r.transition=null;try{W=1,Qu(e,t,n,r)}finally{W=i,_r.transition=s}}function w0(e,t,n,r){var i=W,s=_r.transition;_r.transition=null;try{W=4,Qu(e,t,n,r)}finally{W=i,_r.transition=s}}function Qu(e,t,n,r){if(fo){var i=Dl(e,t,n,r);if(i===null)za(e,t,r,ho,n),pd(e,r);else if(m0(i,e,t,n,r))r.stopPropagation();else if(pd(e,r),t&4&&-1<g0.indexOf(e)){for(;i!==null;){var s=rs(i);if(s!==null&&Pp(s),s=Dl(e,t,n,r),s===null&&za(e,t,r,ho,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else za(e,t,r,null,n)}}var ho=null;function Dl(e,t,n,r){if(ho=null,e=Ku(r),e=Tn(e),e!==null)if(t=Yn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ep(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ho=e,null}function Lp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(o0()){case qu:return 1;case Cp:return 4;case uo:case a0:return 16;case bp:return 536870912;default:return 16}default:return 16}}var on=null,Yu=null,Bs=null;function Dp(){if(Bs)return Bs;var e,t=Yu,n=t.length,r,i="value"in on?on.value:on.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Bs=i.slice(e,1<r?1-r:void 0)}function Hs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _s(){return!0}function md(){return!1}function Ve(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_s:md,this.isPropagationStopped=md,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_s)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_s)},persist:function(){},isPersistent:_s}),t}var Hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xu=Ve(Hr),ns=ee({},Hr,{view:0,detail:0}),S0=Ve(ns),Na,Aa,ti,Qo=ee({},ns,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ti&&(ti&&e.type==="mousemove"?(Na=e.screenX-ti.screenX,Aa=e.screenY-ti.screenY):Aa=Na=0,ti=e),Na)},movementY:function(e){return"movementY"in e?e.movementY:Aa}}),yd=Ve(Qo),E0=ee({},Qo,{dataTransfer:0}),_0=Ve(E0),k0=ee({},ns,{relatedTarget:0}),La=Ve(k0),I0=ee({},Hr,{animationName:0,elapsedTime:0,pseudoElement:0}),C0=Ve(I0),b0=ee({},Hr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),x0=Ve(b0),T0=ee({},Hr,{data:0}),vd=Ve(T0),P0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},O0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},R0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function N0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=R0[e])?!!t[e]:!1}function Zu(){return N0}var A0=ee({},ns,{key:function(e){if(e.key){var t=P0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?O0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zu,charCode:function(e){return e.type==="keypress"?Hs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),L0=Ve(A0),D0=ee({},Qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wd=Ve(D0),j0=ee({},ns,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zu}),M0=Ve(j0),$0=ee({},Hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),U0=Ve($0),F0=ee({},Qo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),z0=Ve(F0),B0=[9,13,27,32],ec=$t&&"CompositionEvent"in window,yi=null;$t&&"documentMode"in document&&(yi=document.documentMode);var H0=$t&&"TextEvent"in window&&!yi,jp=$t&&(!ec||yi&&8<yi&&11>=yi),Sd=" ",Ed=!1;function Mp(e,t){switch(e){case"keyup":return B0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $p(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ar=!1;function V0(e,t){switch(e){case"compositionend":return $p(t);case"keypress":return t.which!==32?null:(Ed=!0,Sd);case"textInput":return e=t.data,e===Sd&&Ed?null:e;default:return null}}function W0(e,t){if(ar)return e==="compositionend"||!ec&&Mp(e,t)?(e=Dp(),Bs=Yu=on=null,ar=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return jp&&t.locale!=="ko"?null:t.data;default:return null}}var K0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _d(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!K0[e.type]:t==="textarea"}function Up(e,t,n,r){mp(r),t=po(t,"onChange"),0<t.length&&(n=new Xu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var vi=null,Di=null;function q0(e){Qp(e,0)}function Yo(e){var t=cr(e);if(up(t))return e}function G0(e,t){if(e==="change")return t}var Fp=!1;if($t){var Da;if($t){var ja="oninput"in document;if(!ja){var kd=document.createElement("div");kd.setAttribute("oninput","return;"),ja=typeof kd.oninput=="function"}Da=ja}else Da=!1;Fp=Da&&(!document.documentMode||9<document.documentMode)}function Id(){vi&&(vi.detachEvent("onpropertychange",zp),Di=vi=null)}function zp(e){if(e.propertyName==="value"&&Yo(Di)){var t=[];Up(t,Di,e,Ku(e)),Sp(q0,t)}}function J0(e,t,n){e==="focusin"?(Id(),vi=t,Di=n,vi.attachEvent("onpropertychange",zp)):e==="focusout"&&Id()}function Q0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yo(Di)}function Y0(e,t){if(e==="click")return Yo(t)}function X0(e,t){if(e==="input"||e==="change")return Yo(t)}function Z0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:Z0;function ji(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!yl.call(t,i)||!ut(e[i],t[i]))return!1}return!0}function Cd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bd(e,t){var n=Cd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cd(n)}}function Bp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hp(){for(var e=window,t=oo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=oo(e.document)}return t}function tc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ew(e){var t=Hp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Bp(n.ownerDocument.documentElement,n)){if(r!==null&&tc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=bd(n,s);var o=bd(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var tw=$t&&"documentMode"in document&&11>=document.documentMode,lr=null,jl=null,wi=null,Ml=!1;function xd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ml||lr==null||lr!==oo(r)||(r=lr,"selectionStart"in r&&tc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wi&&ji(wi,r)||(wi=r,r=po(jl,"onSelect"),0<r.length&&(t=new Xu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=lr)))}function ks(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ur={animationend:ks("Animation","AnimationEnd"),animationiteration:ks("Animation","AnimationIteration"),animationstart:ks("Animation","AnimationStart"),transitionend:ks("Transition","TransitionEnd")},Ma={},Vp={};$t&&(Vp=document.createElement("div").style,"AnimationEvent"in window||(delete ur.animationend.animation,delete ur.animationiteration.animation,delete ur.animationstart.animation),"TransitionEvent"in window||delete ur.transitionend.transition);function Xo(e){if(Ma[e])return Ma[e];if(!ur[e])return e;var t=ur[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vp)return Ma[e]=t[n];return e}var Wp=Xo("animationend"),Kp=Xo("animationiteration"),qp=Xo("animationstart"),Gp=Xo("transitionend"),Jp=new Map,Td="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function En(e,t){Jp.set(e,t),Qn(t,[e])}for(var $a=0;$a<Td.length;$a++){var Ua=Td[$a],nw=Ua.toLowerCase(),rw=Ua[0].toUpperCase()+Ua.slice(1);En(nw,"on"+rw)}En(Wp,"onAnimationEnd");En(Kp,"onAnimationIteration");En(qp,"onAnimationStart");En("dblclick","onDoubleClick");En("focusin","onFocus");En("focusout","onBlur");En(Gp,"onTransitionEnd");Tr("onMouseEnter",["mouseout","mouseover"]);Tr("onMouseLeave",["mouseout","mouseover"]);Tr("onPointerEnter",["pointerout","pointerover"]);Tr("onPointerLeave",["pointerout","pointerover"]);Qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iw=new Set("cancel close invalid load scroll toggle".split(" ").concat(ui));function Pd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,n0(r,t,void 0,e),e.currentTarget=null}function Qp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Pd(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Pd(i,a,u),s=l}}}if(lo)throw e=Nl,lo=!1,Nl=null,e}function G(e,t){var n=t[Bl];n===void 0&&(n=t[Bl]=new Set);var r=e+"__bubble";n.has(r)||(Yp(t,e,2,!1),n.add(r))}function Fa(e,t,n){var r=0;t&&(r|=4),Yp(n,e,r,t)}var Is="_reactListening"+Math.random().toString(36).slice(2);function Mi(e){if(!e[Is]){e[Is]=!0,ip.forEach(function(n){n!=="selectionchange"&&(iw.has(n)||Fa(n,!1,e),Fa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Is]||(t[Is]=!0,Fa("selectionchange",!1,t))}}function Yp(e,t,n,r){switch(Lp(t)){case 1:var i=v0;break;case 4:i=w0;break;default:i=Qu}n=i.bind(null,t,n,e),i=void 0,!Rl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function za(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Tn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Sp(function(){var u=s,c=Ku(n),f=[];e:{var d=Jp.get(e);if(d!==void 0){var m=Xu,y=e;switch(e){case"keypress":if(Hs(n)===0)break e;case"keydown":case"keyup":m=L0;break;case"focusin":y="focus",m=La;break;case"focusout":y="blur",m=La;break;case"beforeblur":case"afterblur":m=La;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=_0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=M0;break;case Wp:case Kp:case qp:m=C0;break;case Gp:m=U0;break;case"scroll":m=S0;break;case"wheel":m=z0;break;case"copy":case"cut":case"paste":m=x0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=wd}var v=(t&4)!==0,_=!v&&e==="scroll",p=v?d!==null?d+"Capture":null:d;v=[];for(var h=u,g;h!==null;){g=h;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,p!==null&&(w=Ri(h,p),w!=null&&v.push($i(h,w,g)))),_)break;h=h.return}0<v.length&&(d=new m(d,y,null,n,c),f.push({event:d,listeners:v}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",d&&n!==Pl&&(y=n.relatedTarget||n.fromElement)&&(Tn(y)||y[Ut]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?Tn(y):null,y!==null&&(_=Yn(y),y!==_||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(v=yd,w="onMouseLeave",p="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(v=wd,w="onPointerLeave",p="onPointerEnter",h="pointer"),_=m==null?d:cr(m),g=y==null?d:cr(y),d=new v(w,h+"leave",m,n,c),d.target=_,d.relatedTarget=g,w=null,Tn(c)===u&&(v=new v(p,h+"enter",y,n,c),v.target=g,v.relatedTarget=_,w=v),_=w,m&&y)t:{for(v=m,p=y,h=0,g=v;g;g=tr(g))h++;for(g=0,w=p;w;w=tr(w))g++;for(;0<h-g;)v=tr(v),h--;for(;0<g-h;)p=tr(p),g--;for(;h--;){if(v===p||p!==null&&v===p.alternate)break t;v=tr(v),p=tr(p)}v=null}else v=null;m!==null&&Od(f,d,m,v,!1),y!==null&&_!==null&&Od(f,_,y,v,!0)}}e:{if(d=u?cr(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var I=G0;else if(_d(d))if(Fp)I=X0;else{I=Q0;var C=J0}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(I=Y0);if(I&&(I=I(e,u))){Up(f,I,n,c);break e}C&&C(e,d,u),e==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&Il(d,"number",d.value)}switch(C=u?cr(u):window,e){case"focusin":(_d(C)||C.contentEditable==="true")&&(lr=C,jl=u,wi=null);break;case"focusout":wi=jl=lr=null;break;case"mousedown":Ml=!0;break;case"contextmenu":case"mouseup":case"dragend":Ml=!1,xd(f,n,c);break;case"selectionchange":if(tw)break;case"keydown":case"keyup":xd(f,n,c)}var k;if(ec)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else ar?Mp(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(jp&&n.locale!=="ko"&&(ar||O!=="onCompositionStart"?O==="onCompositionEnd"&&ar&&(k=Dp()):(on=c,Yu="value"in on?on.value:on.textContent,ar=!0)),C=po(u,O),0<C.length&&(O=new vd(O,e,null,n,c),f.push({event:O,listeners:C}),k?O.data=k:(k=$p(n),k!==null&&(O.data=k)))),(k=H0?V0(e,n):W0(e,n))&&(u=po(u,"onBeforeInput"),0<u.length&&(c=new vd("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=k))}Qp(f,t)})}function $i(e,t,n){return{instance:e,listener:t,currentTarget:n}}function po(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ri(e,n),s!=null&&r.unshift($i(e,s,i)),s=Ri(e,t),s!=null&&r.push($i(e,s,i))),e=e.return}return r}function tr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Od(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ri(n,s),l!=null&&o.unshift($i(n,l,a))):i||(l=Ri(n,s),l!=null&&o.push($i(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var sw=/\r\n?/g,ow=/\u0000|\uFFFD/g;function Rd(e){return(typeof e=="string"?e:""+e).replace(sw,`
`).replace(ow,"")}function Cs(e,t,n){if(t=Rd(t),Rd(e)!==t&&n)throw Error(T(425))}function go(){}var $l=null,Ul=null;function Fl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zl=typeof setTimeout=="function"?setTimeout:void 0,aw=typeof clearTimeout=="function"?clearTimeout:void 0,Nd=typeof Promise=="function"?Promise:void 0,lw=typeof queueMicrotask=="function"?queueMicrotask:typeof Nd<"u"?function(e){return Nd.resolve(null).then(e).catch(uw)}:zl;function uw(e){setTimeout(function(){throw e})}function Ba(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Li(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Li(t)}function fn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ad(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Vr=Math.random().toString(36).slice(2),pt="__reactFiber$"+Vr,Ui="__reactProps$"+Vr,Ut="__reactContainer$"+Vr,Bl="__reactEvents$"+Vr,cw="__reactListeners$"+Vr,dw="__reactHandles$"+Vr;function Tn(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ut]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ad(e);e!==null;){if(n=e[pt])return n;e=Ad(e)}return t}e=n,n=e.parentNode}return null}function rs(e){return e=e[pt]||e[Ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function cr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function Zo(e){return e[Ui]||null}var Hl=[],dr=-1;function _n(e){return{current:e}}function Q(e){0>dr||(e.current=Hl[dr],Hl[dr]=null,dr--)}function q(e,t){dr++,Hl[dr]=e.current,e.current=t}var Sn={},Ee=_n(Sn),Ne=_n(!1),Un=Sn;function Pr(e,t){var n=e.type.contextTypes;if(!n)return Sn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ae(e){return e=e.childContextTypes,e!=null}function mo(){Q(Ne),Q(Ee)}function Ld(e,t,n){if(Ee.current!==Sn)throw Error(T(168));q(Ee,t),q(Ne,n)}function Xp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(T(108,Jv(e)||"Unknown",i));return ee({},n,r)}function yo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Sn,Un=Ee.current,q(Ee,e),q(Ne,Ne.current),!0}function Dd(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=Xp(e,t,Un),r.__reactInternalMemoizedMergedChildContext=e,Q(Ne),Q(Ee),q(Ee,e)):Q(Ne),q(Ne,n)}var Tt=null,ea=!1,Ha=!1;function Zp(e){Tt===null?Tt=[e]:Tt.push(e)}function fw(e){ea=!0,Zp(e)}function kn(){if(!Ha&&Tt!==null){Ha=!0;var e=0,t=W;try{var n=Tt;for(W=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Tt=null,ea=!1}catch(i){throw Tt!==null&&(Tt=Tt.slice(e+1)),Ip(qu,kn),i}finally{W=t,Ha=!1}}return null}var fr=[],hr=0,vo=null,wo=0,Ke=[],qe=0,Fn=null,Pt=1,Ot="";function Cn(e,t){fr[hr++]=wo,fr[hr++]=vo,vo=e,wo=t}function eg(e,t,n){Ke[qe++]=Pt,Ke[qe++]=Ot,Ke[qe++]=Fn,Fn=e;var r=Pt;e=Ot;var i=32-ot(r)-1;r&=~(1<<i),n+=1;var s=32-ot(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Pt=1<<32-ot(t)+i|n<<i|r,Ot=s+e}else Pt=1<<s|n<<i|r,Ot=e}function nc(e){e.return!==null&&(Cn(e,1),eg(e,1,0))}function rc(e){for(;e===vo;)vo=fr[--hr],fr[hr]=null,wo=fr[--hr],fr[hr]=null;for(;e===Fn;)Fn=Ke[--qe],Ke[qe]=null,Ot=Ke[--qe],Ke[qe]=null,Pt=Ke[--qe],Ke[qe]=null}var Fe=null,Ue=null,Y=!1,it=null;function tg(e,t){var n=Ge(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function jd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Fe=e,Ue=fn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Fe=e,Ue=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Fn!==null?{id:Pt,overflow:Ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ge(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Fe=e,Ue=null,!0):!1;default:return!1}}function Vl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Wl(e){if(Y){var t=Ue;if(t){var n=t;if(!jd(e,t)){if(Vl(e))throw Error(T(418));t=fn(n.nextSibling);var r=Fe;t&&jd(e,t)?tg(r,n):(e.flags=e.flags&-4097|2,Y=!1,Fe=e)}}else{if(Vl(e))throw Error(T(418));e.flags=e.flags&-4097|2,Y=!1,Fe=e}}}function Md(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Fe=e}function bs(e){if(e!==Fe)return!1;if(!Y)return Md(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Fl(e.type,e.memoizedProps)),t&&(t=Ue)){if(Vl(e))throw ng(),Error(T(418));for(;t;)tg(e,t),t=fn(t.nextSibling)}if(Md(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ue=fn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ue=null}}else Ue=Fe?fn(e.stateNode.nextSibling):null;return!0}function ng(){for(var e=Ue;e;)e=fn(e.nextSibling)}function Or(){Ue=Fe=null,Y=!1}function ic(e){it===null?it=[e]:it.push(e)}var hw=Vt.ReactCurrentBatchConfig;function ni(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function xs(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function $d(e){var t=e._init;return t(e._payload)}function rg(e){function t(p,h){if(e){var g=p.deletions;g===null?(p.deletions=[h],p.flags|=16):g.push(h)}}function n(p,h){if(!e)return null;for(;h!==null;)t(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=mn(p,h),p.index=0,p.sibling=null,p}function s(p,h,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<h?(p.flags|=2,h):g):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,h,g,w){return h===null||h.tag!==6?(h=Qa(g,p.mode,w),h.return=p,h):(h=i(h,g),h.return=p,h)}function l(p,h,g,w){var I=g.type;return I===or?c(p,h,g.props.children,w,g.key):h!==null&&(h.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Yt&&$d(I)===h.type)?(w=i(h,g.props),w.ref=ni(p,h,g),w.return=p,w):(w=Qs(g.type,g.key,g.props,null,p.mode,w),w.ref=ni(p,h,g),w.return=p,w)}function u(p,h,g,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=Ya(g,p.mode,w),h.return=p,h):(h=i(h,g.children||[]),h.return=p,h)}function c(p,h,g,w,I){return h===null||h.tag!==7?(h=Ln(g,p.mode,w,I),h.return=p,h):(h=i(h,g),h.return=p,h)}function f(p,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Qa(""+h,p.mode,g),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ms:return g=Qs(h.type,h.key,h.props,null,p.mode,g),g.ref=ni(p,null,h),g.return=p,g;case sr:return h=Ya(h,p.mode,g),h.return=p,h;case Yt:var w=h._init;return f(p,w(h._payload),g)}if(ai(h)||Yr(h))return h=Ln(h,p.mode,g,null),h.return=p,h;xs(p,h)}return null}function d(p,h,g,w){var I=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return I!==null?null:a(p,h,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ms:return g.key===I?l(p,h,g,w):null;case sr:return g.key===I?u(p,h,g,w):null;case Yt:return I=g._init,d(p,h,I(g._payload),w)}if(ai(g)||Yr(g))return I!==null?null:c(p,h,g,w,null);xs(p,g)}return null}function m(p,h,g,w,I){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(g)||null,a(h,p,""+w,I);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ms:return p=p.get(w.key===null?g:w.key)||null,l(h,p,w,I);case sr:return p=p.get(w.key===null?g:w.key)||null,u(h,p,w,I);case Yt:var C=w._init;return m(p,h,g,C(w._payload),I)}if(ai(w)||Yr(w))return p=p.get(g)||null,c(h,p,w,I,null);xs(h,w)}return null}function y(p,h,g,w){for(var I=null,C=null,k=h,O=h=0,D=null;k!==null&&O<g.length;O++){k.index>O?(D=k,k=null):D=k.sibling;var L=d(p,k,g[O],w);if(L===null){k===null&&(k=D);break}e&&k&&L.alternate===null&&t(p,k),h=s(L,h,O),C===null?I=L:C.sibling=L,C=L,k=D}if(O===g.length)return n(p,k),Y&&Cn(p,O),I;if(k===null){for(;O<g.length;O++)k=f(p,g[O],w),k!==null&&(h=s(k,h,O),C===null?I=k:C.sibling=k,C=k);return Y&&Cn(p,O),I}for(k=r(p,k);O<g.length;O++)D=m(k,p,O,g[O],w),D!==null&&(e&&D.alternate!==null&&k.delete(D.key===null?O:D.key),h=s(D,h,O),C===null?I=D:C.sibling=D,C=D);return e&&k.forEach(function(B){return t(p,B)}),Y&&Cn(p,O),I}function v(p,h,g,w){var I=Yr(g);if(typeof I!="function")throw Error(T(150));if(g=I.call(g),g==null)throw Error(T(151));for(var C=I=null,k=h,O=h=0,D=null,L=g.next();k!==null&&!L.done;O++,L=g.next()){k.index>O?(D=k,k=null):D=k.sibling;var B=d(p,k,L.value,w);if(B===null){k===null&&(k=D);break}e&&k&&B.alternate===null&&t(p,k),h=s(B,h,O),C===null?I=B:C.sibling=B,C=B,k=D}if(L.done)return n(p,k),Y&&Cn(p,O),I;if(k===null){for(;!L.done;O++,L=g.next())L=f(p,L.value,w),L!==null&&(h=s(L,h,O),C===null?I=L:C.sibling=L,C=L);return Y&&Cn(p,O),I}for(k=r(p,k);!L.done;O++,L=g.next())L=m(k,p,O,L.value,w),L!==null&&(e&&L.alternate!==null&&k.delete(L.key===null?O:L.key),h=s(L,h,O),C===null?I=L:C.sibling=L,C=L);return e&&k.forEach(function(re){return t(p,re)}),Y&&Cn(p,O),I}function _(p,h,g,w){if(typeof g=="object"&&g!==null&&g.type===or&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ms:e:{for(var I=g.key,C=h;C!==null;){if(C.key===I){if(I=g.type,I===or){if(C.tag===7){n(p,C.sibling),h=i(C,g.props.children),h.return=p,p=h;break e}}else if(C.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Yt&&$d(I)===C.type){n(p,C.sibling),h=i(C,g.props),h.ref=ni(p,C,g),h.return=p,p=h;break e}n(p,C);break}else t(p,C);C=C.sibling}g.type===or?(h=Ln(g.props.children,p.mode,w,g.key),h.return=p,p=h):(w=Qs(g.type,g.key,g.props,null,p.mode,w),w.ref=ni(p,h,g),w.return=p,p=w)}return o(p);case sr:e:{for(C=g.key;h!==null;){if(h.key===C)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(p,h.sibling),h=i(h,g.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else t(p,h);h=h.sibling}h=Ya(g,p.mode,w),h.return=p,p=h}return o(p);case Yt:return C=g._init,_(p,h,C(g._payload),w)}if(ai(g))return y(p,h,g,w);if(Yr(g))return v(p,h,g,w);xs(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,g),h.return=p,p=h):(n(p,h),h=Qa(g,p.mode,w),h.return=p,p=h),o(p)):n(p,h)}return _}var Rr=rg(!0),ig=rg(!1),So=_n(null),Eo=null,pr=null,sc=null;function oc(){sc=pr=Eo=null}function ac(e){var t=So.current;Q(So),e._currentValue=t}function Kl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function kr(e,t){Eo=e,sc=pr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Oe=!0),e.firstContext=null)}function Qe(e){var t=e._currentValue;if(sc!==e)if(e={context:e,memoizedValue:t,next:null},pr===null){if(Eo===null)throw Error(T(308));pr=e,Eo.dependencies={lanes:0,firstContext:e}}else pr=pr.next=e;return t}var Pn=null;function lc(e){Pn===null?Pn=[e]:Pn.push(e)}function sg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,lc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ft(e,r)}function Ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Xt=!1;function uc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function og(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Dt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function hn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ft(e,n)}return i=r.interleaved,i===null?(t.next=t,lc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ft(e,n)}function Vs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gu(e,n)}}function Ud(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function _o(e,t,n,r){var i=e.updateQueue;Xt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,v=a;switch(d=t,m=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){f=y.call(m,f,d);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(m,f,d):y,d==null)break e;f=ee({},f,d);break e;case 2:Xt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=f):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Bn|=o,e.lanes=o,e.memoizedState=f}}function Fd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var is={},vt=_n(is),Fi=_n(is),zi=_n(is);function On(e){if(e===is)throw Error(T(174));return e}function cc(e,t){switch(q(zi,t),q(Fi,e),q(vt,is),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:bl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=bl(t,e)}Q(vt),q(vt,t)}function Nr(){Q(vt),Q(Fi),Q(zi)}function ag(e){On(zi.current);var t=On(vt.current),n=bl(t,e.type);t!==n&&(q(Fi,e),q(vt,n))}function dc(e){Fi.current===e&&(Q(vt),Q(Fi))}var X=_n(0);function ko(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Va=[];function fc(){for(var e=0;e<Va.length;e++)Va[e]._workInProgressVersionPrimary=null;Va.length=0}var Ws=Vt.ReactCurrentDispatcher,Wa=Vt.ReactCurrentBatchConfig,zn=0,Z=null,le=null,ce=null,Io=!1,Si=!1,Bi=0,pw=0;function ye(){throw Error(T(321))}function hc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ut(e[n],t[n]))return!1;return!0}function pc(e,t,n,r,i,s){if(zn=s,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ws.current=e===null||e.memoizedState===null?vw:ww,e=n(r,i),Si){s=0;do{if(Si=!1,Bi=0,25<=s)throw Error(T(301));s+=1,ce=le=null,t.updateQueue=null,Ws.current=Sw,e=n(r,i)}while(Si)}if(Ws.current=Co,t=le!==null&&le.next!==null,zn=0,ce=le=Z=null,Io=!1,t)throw Error(T(300));return e}function gc(){var e=Bi!==0;return Bi=0,e}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?Z.memoizedState=ce=e:ce=ce.next=e,ce}function Ye(){if(le===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=ce===null?Z.memoizedState:ce.next;if(t!==null)ce=t,le=e;else{if(e===null)throw Error(T(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},ce===null?Z.memoizedState=ce=e:ce=ce.next=e}return ce}function Hi(e,t){return typeof t=="function"?t(e):t}function Ka(e){var t=Ye(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=le,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((zn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,Z.lanes|=c,Bn|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,ut(r,t.memoizedState)||(Oe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Z.lanes|=s,Bn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function qa(e){var t=Ye(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);ut(s,t.memoizedState)||(Oe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function lg(){}function ug(e,t){var n=Z,r=Ye(),i=t(),s=!ut(r.memoizedState,i);if(s&&(r.memoizedState=i,Oe=!0),r=r.queue,mc(fg.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||ce!==null&&ce.memoizedState.tag&1){if(n.flags|=2048,Vi(9,dg.bind(null,n,r,i,t),void 0,null),fe===null)throw Error(T(349));zn&30||cg(n,t,i)}return i}function cg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function dg(e,t,n,r){t.value=n,t.getSnapshot=r,hg(t)&&pg(e)}function fg(e,t,n){return n(function(){hg(t)&&pg(e)})}function hg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ut(e,n)}catch{return!0}}function pg(e){var t=Ft(e,1);t!==null&&at(t,e,1,-1)}function zd(e){var t=ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:e},t.queue=e,e=e.dispatch=yw.bind(null,Z,e),[t.memoizedState,e]}function Vi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function gg(){return Ye().memoizedState}function Ks(e,t,n,r){var i=ft();Z.flags|=e,i.memoizedState=Vi(1|t,n,void 0,r===void 0?null:r)}function ta(e,t,n,r){var i=Ye();r=r===void 0?null:r;var s=void 0;if(le!==null){var o=le.memoizedState;if(s=o.destroy,r!==null&&hc(r,o.deps)){i.memoizedState=Vi(t,n,s,r);return}}Z.flags|=e,i.memoizedState=Vi(1|t,n,s,r)}function Bd(e,t){return Ks(8390656,8,e,t)}function mc(e,t){return ta(2048,8,e,t)}function mg(e,t){return ta(4,2,e,t)}function yg(e,t){return ta(4,4,e,t)}function vg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wg(e,t,n){return n=n!=null?n.concat([e]):null,ta(4,4,vg.bind(null,t,e),n)}function yc(){}function Sg(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&hc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Eg(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&hc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function _g(e,t,n){return zn&21?(ut(n,t)||(n=xp(),Z.lanes|=n,Bn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Oe=!0),e.memoizedState=n)}function gw(e,t){var n=W;W=n!==0&&4>n?n:4,e(!0);var r=Wa.transition;Wa.transition={};try{e(!1),t()}finally{W=n,Wa.transition=r}}function kg(){return Ye().memoizedState}function mw(e,t,n){var r=gn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ig(e))Cg(t,n);else if(n=sg(e,t,n,r),n!==null){var i=Ce();at(n,e,r,i),bg(n,t,r)}}function yw(e,t,n){var r=gn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ig(e))Cg(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,ut(a,o)){var l=t.interleaved;l===null?(i.next=i,lc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=sg(e,t,i,r),n!==null&&(i=Ce(),at(n,e,r,i),bg(n,t,r))}}function Ig(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function Cg(e,t){Si=Io=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function bg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gu(e,n)}}var Co={readContext:Qe,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},vw={readContext:Qe,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:Qe,useEffect:Bd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ks(4194308,4,vg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ks(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ks(4,2,e,t)},useMemo:function(e,t){var n=ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ft();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=mw.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:zd,useDebugValue:yc,useDeferredValue:function(e){return ft().memoizedState=e},useTransition:function(){var e=zd(!1),t=e[0];return e=gw.bind(null,e[1]),ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Z,i=ft();if(Y){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),fe===null)throw Error(T(349));zn&30||cg(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Bd(fg.bind(null,r,s,e),[e]),r.flags|=2048,Vi(9,dg.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=ft(),t=fe.identifierPrefix;if(Y){var n=Ot,r=Pt;n=(r&~(1<<32-ot(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Bi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=pw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ww={readContext:Qe,useCallback:Sg,useContext:Qe,useEffect:mc,useImperativeHandle:wg,useInsertionEffect:mg,useLayoutEffect:yg,useMemo:Eg,useReducer:Ka,useRef:gg,useState:function(){return Ka(Hi)},useDebugValue:yc,useDeferredValue:function(e){var t=Ye();return _g(t,le.memoizedState,e)},useTransition:function(){var e=Ka(Hi)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:lg,useSyncExternalStore:ug,useId:kg,unstable_isNewReconciler:!1},Sw={readContext:Qe,useCallback:Sg,useContext:Qe,useEffect:mc,useImperativeHandle:wg,useInsertionEffect:mg,useLayoutEffect:yg,useMemo:Eg,useReducer:qa,useRef:gg,useState:function(){return qa(Hi)},useDebugValue:yc,useDeferredValue:function(e){var t=Ye();return le===null?t.memoizedState=e:_g(t,le.memoizedState,e)},useTransition:function(){var e=qa(Hi)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:lg,useSyncExternalStore:ug,useId:kg,unstable_isNewReconciler:!1};function nt(e,t){if(e&&e.defaultProps){t=ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ql(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var na={isMounted:function(e){return(e=e._reactInternals)?Yn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ce(),i=gn(e),s=Dt(r,i);s.payload=t,n!=null&&(s.callback=n),t=hn(e,s,i),t!==null&&(at(t,e,i,r),Vs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ce(),i=gn(e),s=Dt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=hn(e,s,i),t!==null&&(at(t,e,i,r),Vs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ce(),r=gn(e),i=Dt(n,r);i.tag=2,t!=null&&(i.callback=t),t=hn(e,i,r),t!==null&&(at(t,e,r,n),Vs(t,e,r))}};function Hd(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!ji(n,r)||!ji(i,s):!0}function xg(e,t,n){var r=!1,i=Sn,s=t.contextType;return typeof s=="object"&&s!==null?s=Qe(s):(i=Ae(t)?Un:Ee.current,r=t.contextTypes,s=(r=r!=null)?Pr(e,i):Sn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=na,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Vd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&na.enqueueReplaceState(t,t.state,null)}function Gl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},uc(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Qe(s):(s=Ae(t)?Un:Ee.current,i.context=Pr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(ql(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&na.enqueueReplaceState(i,i.state,null),_o(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ar(e,t){try{var n="",r=t;do n+=Gv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Ga(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Jl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ew=typeof WeakMap=="function"?WeakMap:Map;function Tg(e,t,n){n=Dt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){xo||(xo=!0,su=r),Jl(e,t)},n}function Pg(e,t,n){n=Dt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Jl(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Jl(e,t),typeof r!="function"&&(pn===null?pn=new Set([this]):pn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Wd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ew;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Dw.bind(null,e,t,n),t.then(e,e))}function Kd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Dt(-1,1),t.tag=2,hn(n,t,1))),n.lanes|=1),e)}var _w=Vt.ReactCurrentOwner,Oe=!1;function Ie(e,t,n,r){t.child=e===null?ig(t,null,n,r):Rr(t,e.child,n,r)}function Gd(e,t,n,r,i){n=n.render;var s=t.ref;return kr(t,i),r=pc(e,t,n,r,s,i),n=gc(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,zt(e,t,i)):(Y&&n&&nc(t),t.flags|=1,Ie(e,t,r,i),t.child)}function Jd(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Cc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Og(e,t,s,r,i)):(e=Qs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ji,n(o,r)&&e.ref===t.ref)return zt(e,t,i)}return t.flags|=1,e=mn(s,r),e.ref=t.ref,e.return=t,t.child=e}function Og(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(ji(s,r)&&e.ref===t.ref)if(Oe=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Oe=!0);else return t.lanes=e.lanes,zt(e,t,i)}return Ql(e,t,n,r,i)}function Rg(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(mr,$e),$e|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,q(mr,$e),$e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,q(mr,$e),$e|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,q(mr,$e),$e|=r;return Ie(e,t,i,n),t.child}function Ng(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ql(e,t,n,r,i){var s=Ae(n)?Un:Ee.current;return s=Pr(t,s),kr(t,i),n=pc(e,t,n,r,s,i),r=gc(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,zt(e,t,i)):(Y&&r&&nc(t),t.flags|=1,Ie(e,t,n,i),t.child)}function Qd(e,t,n,r,i){if(Ae(n)){var s=!0;yo(t)}else s=!1;if(kr(t,i),t.stateNode===null)qs(e,t),xg(t,n,r),Gl(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Qe(u):(u=Ae(n)?Un:Ee.current,u=Pr(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Vd(t,o,r,u),Xt=!1;var d=t.memoizedState;o.state=d,_o(t,r,o,i),l=t.memoizedState,a!==r||d!==l||Ne.current||Xt?(typeof c=="function"&&(ql(t,n,c,r),l=t.memoizedState),(a=Xt||Hd(t,n,a,r,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,og(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:nt(t.type,a),o.props=u,f=t.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Qe(l):(l=Ae(n)?Un:Ee.current,l=Pr(t,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Vd(t,o,r,l),Xt=!1,d=t.memoizedState,o.state=d,_o(t,r,o,i);var y=t.memoizedState;a!==f||d!==y||Ne.current||Xt?(typeof m=="function"&&(ql(t,n,m,r),y=t.memoizedState),(u=Xt||Hd(t,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Yl(e,t,n,r,s,i)}function Yl(e,t,n,r,i,s){Ng(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Dd(t,n,!1),zt(e,t,s);r=t.stateNode,_w.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Rr(t,e.child,null,s),t.child=Rr(t,null,a,s)):Ie(e,t,a,s),t.memoizedState=r.state,i&&Dd(t,n,!0),t.child}function Ag(e){var t=e.stateNode;t.pendingContext?Ld(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ld(e,t.context,!1),cc(e,t.containerInfo)}function Yd(e,t,n,r,i){return Or(),ic(i),t.flags|=256,Ie(e,t,n,r),t.child}var Xl={dehydrated:null,treeContext:null,retryLane:0};function Zl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Lg(e,t,n){var r=t.pendingProps,i=X.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),q(X,i&1),e===null)return Wl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=sa(o,r,0,null),e=Ln(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Zl(n),t.memoizedState=Xl,e):vc(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return kw(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=mn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=mn(a,s):(s=Ln(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Zl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Xl,r}return s=e.child,e=s.sibling,r=mn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function vc(e,t){return t=sa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ts(e,t,n,r){return r!==null&&ic(r),Rr(t,e.child,null,n),e=vc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kw(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=Ga(Error(T(422))),Ts(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=sa({mode:"visible",children:r.children},i,0,null),s=Ln(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Rr(t,e.child,null,o),t.child.memoizedState=Zl(o),t.memoizedState=Xl,s);if(!(t.mode&1))return Ts(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(T(419)),r=Ga(s,r,void 0),Ts(e,t,o,r)}if(a=(o&e.childLanes)!==0,Oe||a){if(r=fe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ft(e,i),at(r,e,i,-1))}return Ic(),r=Ga(Error(T(421))),Ts(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=jw.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Ue=fn(i.nextSibling),Fe=t,Y=!0,it=null,e!==null&&(Ke[qe++]=Pt,Ke[qe++]=Ot,Ke[qe++]=Fn,Pt=e.id,Ot=e.overflow,Fn=t),t=vc(t,r.children),t.flags|=4096,t)}function Xd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Kl(e.return,t,n)}function Ja(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Dg(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Ie(e,t,r.children,n),r=X.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xd(e,n,t);else if(e.tag===19)Xd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(X,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ko(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ja(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ko(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ja(t,!0,n,null,s);break;case"together":Ja(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Bn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=mn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Iw(e,t,n){switch(t.tag){case 3:Ag(t),Or();break;case 5:ag(t);break;case 1:Ae(t.type)&&yo(t);break;case 4:cc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;q(So,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(q(X,X.current&1),t.flags|=128,null):n&t.child.childLanes?Lg(e,t,n):(q(X,X.current&1),e=zt(e,t,n),e!==null?e.sibling:null);q(X,X.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Dg(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),q(X,X.current),r)break;return null;case 22:case 23:return t.lanes=0,Rg(e,t,n)}return zt(e,t,n)}var jg,eu,Mg,$g;jg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};eu=function(){};Mg=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,On(vt.current);var s=null;switch(n){case"input":i=_l(e,i),r=_l(e,r),s=[];break;case"select":i=ee({},i,{value:void 0}),r=ee({},r,{value:void 0}),s=[];break;case"textarea":i=Cl(e,i),r=Cl(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=go)}xl(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Pi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Pi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&G("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};$g=function(e,t,n,r){n!==r&&(t.flags|=4)};function ri(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Cw(e,t,n){var r=t.pendingProps;switch(rc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return Ae(t.type)&&mo(),ve(t),null;case 3:return r=t.stateNode,Nr(),Q(Ne),Q(Ee),fc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(bs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,it!==null&&(lu(it),it=null))),eu(e,t),ve(t),null;case 5:dc(t);var i=On(zi.current);if(n=t.type,e!==null&&t.stateNode!=null)Mg(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return ve(t),null}if(e=On(vt.current),bs(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[pt]=t,r[Ui]=s,e=(t.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(i=0;i<ui.length;i++)G(ui[i],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":ad(r,s),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},G("invalid",r);break;case"textarea":ud(r,s),G("invalid",r)}xl(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Cs(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Cs(r.textContent,a,e),i=["children",""+a]):Pi.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&G("scroll",r)}switch(n){case"input":ys(r),ld(r,s,!0);break;case"textarea":ys(r),cd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=go)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[pt]=t,e[Ui]=r,jg(e,t,!1,!1),t.stateNode=e;e:{switch(o=Tl(n,r),n){case"dialog":G("cancel",e),G("close",e),i=r;break;case"iframe":case"object":case"embed":G("load",e),i=r;break;case"video":case"audio":for(i=0;i<ui.length;i++)G(ui[i],e);i=r;break;case"source":G("error",e),i=r;break;case"img":case"image":case"link":G("error",e),G("load",e),i=r;break;case"details":G("toggle",e),i=r;break;case"input":ad(e,r),i=_l(e,r),G("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ee({},r,{value:void 0}),G("invalid",e);break;case"textarea":ud(e,r),i=Cl(e,r),G("invalid",e);break;default:i=r}xl(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?gp(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&hp(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Oi(e,l):typeof l=="number"&&Oi(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Pi.hasOwnProperty(s)?l!=null&&s==="onScroll"&&G("scroll",e):l!=null&&Bu(e,s,l,o))}switch(n){case"input":ys(e),ld(e,r,!1);break;case"textarea":ys(e),cd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+wn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?wr(e,!!r.multiple,s,!1):r.defaultValue!=null&&wr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=go)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)$g(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=On(zi.current),On(vt.current),bs(t)){if(r=t.stateNode,n=t.memoizedProps,r[pt]=t,(s=r.nodeValue!==n)&&(e=Fe,e!==null))switch(e.tag){case 3:Cs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Cs(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pt]=t,t.stateNode=r}return ve(t),null;case 13:if(Q(X),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Ue!==null&&t.mode&1&&!(t.flags&128))ng(),Or(),t.flags|=98560,s=!1;else if(s=bs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(T(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(T(317));s[pt]=t}else Or(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),s=!1}else it!==null&&(lu(it),it=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||X.current&1?ue===0&&(ue=3):Ic())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return Nr(),eu(e,t),e===null&&Mi(t.stateNode.containerInfo),ve(t),null;case 10:return ac(t.type._context),ve(t),null;case 17:return Ae(t.type)&&mo(),ve(t),null;case 19:if(Q(X),s=t.memoizedState,s===null)return ve(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)ri(s,!1);else{if(ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ko(e),o!==null){for(t.flags|=128,ri(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return q(X,X.current&1|2),t.child}e=e.sibling}s.tail!==null&&ne()>Lr&&(t.flags|=128,r=!0,ri(s,!1),t.lanes=4194304)}else{if(!r)if(e=ko(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ri(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Y)return ve(t),null}else 2*ne()-s.renderingStartTime>Lr&&n!==1073741824&&(t.flags|=128,r=!0,ri(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ne(),t.sibling=null,n=X.current,q(X,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return kc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?$e&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function bw(e,t){switch(rc(t),t.tag){case 1:return Ae(t.type)&&mo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Nr(),Q(Ne),Q(Ee),fc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return dc(t),null;case 13:if(Q(X),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));Or()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(X),null;case 4:return Nr(),null;case 10:return ac(t.type._context),null;case 22:case 23:return kc(),null;case 24:return null;default:return null}}var Ps=!1,we=!1,xw=typeof WeakSet=="function"?WeakSet:Set,A=null;function gr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(e,t,r)}else n.current=null}function tu(e,t,n){try{n()}catch(r){te(e,t,r)}}var Zd=!1;function Tw(e,t){if($l=fo,e=Hp(),tc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=e,d=null;t:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)d=f,f=m;for(;;){if(f===e)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(m=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ul={focusedElem:e,selectionRange:n},fo=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,_=y.memoizedState,p=t.stateNode,h=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:nt(t.type,v),_);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(w){te(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return y=Zd,Zd=!1,y}function Ei(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&tu(t,n,s)}i=i.next}while(i!==r)}}function ra(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function nu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ug(e){var t=e.alternate;t!==null&&(e.alternate=null,Ug(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pt],delete t[Ui],delete t[Bl],delete t[cw],delete t[dw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fg(e){return e.tag===5||e.tag===3||e.tag===4}function ef(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ru(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=go));else if(r!==4&&(e=e.child,e!==null))for(ru(e,t,n),e=e.sibling;e!==null;)ru(e,t,n),e=e.sibling}function iu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(iu(e,t,n),e=e.sibling;e!==null;)iu(e,t,n),e=e.sibling}var he=null,rt=!1;function Gt(e,t,n){for(n=n.child;n!==null;)zg(e,t,n),n=n.sibling}function zg(e,t,n){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(Jo,n)}catch{}switch(n.tag){case 5:we||gr(n,t);case 6:var r=he,i=rt;he=null,Gt(e,t,n),he=r,rt=i,he!==null&&(rt?(e=he,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(rt?(e=he,n=n.stateNode,e.nodeType===8?Ba(e.parentNode,n):e.nodeType===1&&Ba(e,n),Li(e)):Ba(he,n.stateNode));break;case 4:r=he,i=rt,he=n.stateNode.containerInfo,rt=!0,Gt(e,t,n),he=r,rt=i;break;case 0:case 11:case 14:case 15:if(!we&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&tu(n,t,o),i=i.next}while(i!==r)}Gt(e,t,n);break;case 1:if(!we&&(gr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){te(n,t,a)}Gt(e,t,n);break;case 21:Gt(e,t,n);break;case 22:n.mode&1?(we=(r=we)||n.memoizedState!==null,Gt(e,t,n),we=r):Gt(e,t,n);break;default:Gt(e,t,n)}}function tf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new xw),t.forEach(function(r){var i=Mw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function et(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:he=a.stateNode,rt=!1;break e;case 3:he=a.stateNode.containerInfo,rt=!0;break e;case 4:he=a.stateNode.containerInfo,rt=!0;break e}a=a.return}if(he===null)throw Error(T(160));zg(s,o,i),he=null,rt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){te(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bg(t,e),t=t.sibling}function Bg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(et(t,e),dt(e),r&4){try{Ei(3,e,e.return),ra(3,e)}catch(v){te(e,e.return,v)}try{Ei(5,e,e.return)}catch(v){te(e,e.return,v)}}break;case 1:et(t,e),dt(e),r&512&&n!==null&&gr(n,n.return);break;case 5:if(et(t,e),dt(e),r&512&&n!==null&&gr(n,n.return),e.flags&32){var i=e.stateNode;try{Oi(i,"")}catch(v){te(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&cp(i,s),Tl(a,o);var u=Tl(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?gp(i,f):c==="dangerouslySetInnerHTML"?hp(i,f):c==="children"?Oi(i,f):Bu(i,c,f,u)}switch(a){case"input":kl(i,s);break;case"textarea":dp(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?wr(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?wr(i,!!s.multiple,s.defaultValue,!0):wr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ui]=s}catch(v){te(e,e.return,v)}}break;case 6:if(et(t,e),dt(e),r&4){if(e.stateNode===null)throw Error(T(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(v){te(e,e.return,v)}}break;case 3:if(et(t,e),dt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Li(t.containerInfo)}catch(v){te(e,e.return,v)}break;case 4:et(t,e),dt(e);break;case 13:et(t,e),dt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ec=ne())),r&4&&tf(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(we=(u=we)||c,et(t,e),we=u):et(t,e),dt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(A=e,c=e.child;c!==null;){for(f=A=c;A!==null;){switch(d=A,m=d.child,d.tag){case 0:case 11:case 14:case 15:Ei(4,d,d.return);break;case 1:gr(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){te(r,n,v)}}break;case 5:gr(d,d.return);break;case 22:if(d.memoizedState!==null){rf(f);continue}}m!==null?(m.return=d,A=m):rf(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=pp("display",o))}catch(v){te(e,e.return,v)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(v){te(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:et(t,e),dt(e),r&4&&tf(e);break;case 21:break;default:et(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Fg(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Oi(i,""),r.flags&=-33);var s=ef(e);iu(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=ef(e);ru(e,a,o);break;default:throw Error(T(161))}}catch(l){te(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Pw(e,t,n){A=e,Hg(e)}function Hg(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var i=A,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ps;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||we;a=Ps;var u=we;if(Ps=o,(we=l)&&!u)for(A=i;A!==null;)o=A,l=o.child,o.tag===22&&o.memoizedState!==null?sf(i):l!==null?(l.return=o,A=l):sf(i);for(;s!==null;)A=s,Hg(s),s=s.sibling;A=i,Ps=a,we=u}nf(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,A=s):nf(e)}}function nf(e){for(;A!==null;){var t=A;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:we||ra(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!we)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:nt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Fd(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Fd(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Li(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}we||t.flags&512&&nu(t)}catch(d){te(t,t.return,d)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function rf(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function sf(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ra(4,t)}catch(l){te(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){te(t,i,l)}}var s=t.return;try{nu(t)}catch(l){te(t,s,l)}break;case 5:var o=t.return;try{nu(t)}catch(l){te(t,o,l)}}}catch(l){te(t,t.return,l)}if(t===e){A=null;break}var a=t.sibling;if(a!==null){a.return=t.return,A=a;break}A=t.return}}var Ow=Math.ceil,bo=Vt.ReactCurrentDispatcher,wc=Vt.ReactCurrentOwner,Je=Vt.ReactCurrentBatchConfig,z=0,fe=null,oe=null,pe=0,$e=0,mr=_n(0),ue=0,Wi=null,Bn=0,ia=0,Sc=0,_i=null,Pe=null,Ec=0,Lr=1/0,bt=null,xo=!1,su=null,pn=null,Os=!1,an=null,To=0,ki=0,ou=null,Gs=-1,Js=0;function Ce(){return z&6?ne():Gs!==-1?Gs:Gs=ne()}function gn(e){return e.mode&1?z&2&&pe!==0?pe&-pe:hw.transition!==null?(Js===0&&(Js=xp()),Js):(e=W,e!==0||(e=window.event,e=e===void 0?16:Lp(e.type)),e):1}function at(e,t,n,r){if(50<ki)throw ki=0,ou=null,Error(T(185));ts(e,n,r),(!(z&2)||e!==fe)&&(e===fe&&(!(z&2)&&(ia|=n),ue===4&&en(e,pe)),Le(e,r),n===1&&z===0&&!(t.mode&1)&&(Lr=ne()+500,ea&&kn()))}function Le(e,t){var n=e.callbackNode;h0(e,t);var r=co(e,e===fe?pe:0);if(r===0)n!==null&&hd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&hd(n),t===1)e.tag===0?fw(of.bind(null,e)):Zp(of.bind(null,e)),lw(function(){!(z&6)&&kn()}),n=null;else{switch(Tp(r)){case 1:n=qu;break;case 4:n=Cp;break;case 16:n=uo;break;case 536870912:n=bp;break;default:n=uo}n=Yg(n,Vg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Vg(e,t){if(Gs=-1,Js=0,z&6)throw Error(T(327));var n=e.callbackNode;if(Ir()&&e.callbackNode!==n)return null;var r=co(e,e===fe?pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Po(e,r);else{t=r;var i=z;z|=2;var s=Kg();(fe!==e||pe!==t)&&(bt=null,Lr=ne()+500,An(e,t));do try{Aw();break}catch(a){Wg(e,a)}while(!0);oc(),bo.current=s,z=i,oe!==null?t=0:(fe=null,pe=0,t=ue)}if(t!==0){if(t===2&&(i=Al(e),i!==0&&(r=i,t=au(e,i))),t===1)throw n=Wi,An(e,0),en(e,r),Le(e,ne()),n;if(t===6)en(e,r);else{if(i=e.current.alternate,!(r&30)&&!Rw(i)&&(t=Po(e,r),t===2&&(s=Al(e),s!==0&&(r=s,t=au(e,s))),t===1))throw n=Wi,An(e,0),en(e,r),Le(e,ne()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:bn(e,Pe,bt);break;case 3:if(en(e,r),(r&130023424)===r&&(t=Ec+500-ne(),10<t)){if(co(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ce(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=zl(bn.bind(null,e,Pe,bt),t);break}bn(e,Pe,bt);break;case 4:if(en(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-ot(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ow(r/1960))-r,10<r){e.timeoutHandle=zl(bn.bind(null,e,Pe,bt),r);break}bn(e,Pe,bt);break;case 5:bn(e,Pe,bt);break;default:throw Error(T(329))}}}return Le(e,ne()),e.callbackNode===n?Vg.bind(null,e):null}function au(e,t){var n=_i;return e.current.memoizedState.isDehydrated&&(An(e,t).flags|=256),e=Po(e,t),e!==2&&(t=Pe,Pe=n,t!==null&&lu(t)),e}function lu(e){Pe===null?Pe=e:Pe.push.apply(Pe,e)}function Rw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ut(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function en(e,t){for(t&=~Sc,t&=~ia,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ot(t),r=1<<n;e[n]=-1,t&=~r}}function of(e){if(z&6)throw Error(T(327));Ir();var t=co(e,0);if(!(t&1))return Le(e,ne()),null;var n=Po(e,t);if(e.tag!==0&&n===2){var r=Al(e);r!==0&&(t=r,n=au(e,r))}if(n===1)throw n=Wi,An(e,0),en(e,t),Le(e,ne()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,bn(e,Pe,bt),Le(e,ne()),null}function _c(e,t){var n=z;z|=1;try{return e(t)}finally{z=n,z===0&&(Lr=ne()+500,ea&&kn())}}function Hn(e){an!==null&&an.tag===0&&!(z&6)&&Ir();var t=z;z|=1;var n=Je.transition,r=W;try{if(Je.transition=null,W=1,e)return e()}finally{W=r,Je.transition=n,z=t,!(z&6)&&kn()}}function kc(){$e=mr.current,Q(mr)}function An(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,aw(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(rc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&mo();break;case 3:Nr(),Q(Ne),Q(Ee),fc();break;case 5:dc(r);break;case 4:Nr();break;case 13:Q(X);break;case 19:Q(X);break;case 10:ac(r.type._context);break;case 22:case 23:kc()}n=n.return}if(fe=e,oe=e=mn(e.current,null),pe=$e=t,ue=0,Wi=null,Sc=ia=Bn=0,Pe=_i=null,Pn!==null){for(t=0;t<Pn.length;t++)if(n=Pn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Pn=null}return e}function Wg(e,t){do{var n=oe;try{if(oc(),Ws.current=Co,Io){for(var r=Z.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Io=!1}if(zn=0,ce=le=Z=null,Si=!1,Bi=0,wc.current=null,n===null||n.return===null){ue=1,Wi=t,oe=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=pe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Kd(o);if(m!==null){m.flags&=-257,qd(m,o,a,s,t),m.mode&1&&Wd(s,u,t),t=m,l=u;var y=t.updateQueue;if(y===null){var v=new Set;v.add(l),t.updateQueue=v}else y.add(l);break e}else{if(!(t&1)){Wd(s,u,t),Ic();break e}l=Error(T(426))}}else if(Y&&a.mode&1){var _=Kd(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),qd(_,o,a,s,t),ic(Ar(l,a));break e}}s=l=Ar(l,a),ue!==4&&(ue=2),_i===null?_i=[s]:_i.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var p=Tg(s,l,t);Ud(s,p);break e;case 1:a=l;var h=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(pn===null||!pn.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var w=Pg(s,a,t);Ud(s,w);break e}}s=s.return}while(s!==null)}Gg(n)}catch(I){t=I,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(!0)}function Kg(){var e=bo.current;return bo.current=Co,e===null?Co:e}function Ic(){(ue===0||ue===3||ue===2)&&(ue=4),fe===null||!(Bn&268435455)&&!(ia&268435455)||en(fe,pe)}function Po(e,t){var n=z;z|=2;var r=Kg();(fe!==e||pe!==t)&&(bt=null,An(e,t));do try{Nw();break}catch(i){Wg(e,i)}while(!0);if(oc(),z=n,bo.current=r,oe!==null)throw Error(T(261));return fe=null,pe=0,ue}function Nw(){for(;oe!==null;)qg(oe)}function Aw(){for(;oe!==null&&!i0();)qg(oe)}function qg(e){var t=Qg(e.alternate,e,$e);e.memoizedProps=e.pendingProps,t===null?Gg(e):oe=t,wc.current=null}function Gg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=bw(n,t),n!==null){n.flags&=32767,oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ue=6,oe=null;return}}else if(n=Cw(n,t,$e),n!==null){oe=n;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);ue===0&&(ue=5)}function bn(e,t,n){var r=W,i=Je.transition;try{Je.transition=null,W=1,Lw(e,t,n,r)}finally{Je.transition=i,W=r}return null}function Lw(e,t,n,r){do Ir();while(an!==null);if(z&6)throw Error(T(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(p0(e,s),e===fe&&(oe=fe=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Os||(Os=!0,Yg(uo,function(){return Ir(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Je.transition,Je.transition=null;var o=W;W=1;var a=z;z|=4,wc.current=null,Tw(e,n),Bg(n,e),ew(Ul),fo=!!$l,Ul=$l=null,e.current=n,Pw(n),s0(),z=a,W=o,Je.transition=s}else e.current=n;if(Os&&(Os=!1,an=e,To=i),s=e.pendingLanes,s===0&&(pn=null),l0(n.stateNode),Le(e,ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(xo)throw xo=!1,e=su,su=null,e;return To&1&&e.tag!==0&&Ir(),s=e.pendingLanes,s&1?e===ou?ki++:(ki=0,ou=e):ki=0,kn(),null}function Ir(){if(an!==null){var e=Tp(To),t=Je.transition,n=W;try{if(Je.transition=null,W=16>e?16:e,an===null)var r=!1;else{if(e=an,an=null,To=0,z&6)throw Error(T(331));var i=z;for(z|=4,A=e.current;A!==null;){var s=A,o=s.child;if(A.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(A=u;A!==null;){var c=A;switch(c.tag){case 0:case 11:case 15:Ei(8,c,s)}var f=c.child;if(f!==null)f.return=c,A=f;else for(;A!==null;){c=A;var d=c.sibling,m=c.return;if(Ug(c),c===u){A=null;break}if(d!==null){d.return=m,A=d;break}A=m}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var _=v.sibling;v.sibling=null,v=_}while(v!==null)}}A=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,A=o;else e:for(;A!==null;){if(s=A,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ei(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,A=p;break e}A=s.return}}var h=e.current;for(A=h;A!==null;){o=A;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,A=g;else e:for(o=h;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ra(9,a)}}catch(I){te(a,a.return,I)}if(a===o){A=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,A=w;break e}A=a.return}}if(z=i,kn(),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(Jo,e)}catch{}r=!0}return r}finally{W=n,Je.transition=t}}return!1}function af(e,t,n){t=Ar(n,t),t=Tg(e,t,1),e=hn(e,t,1),t=Ce(),e!==null&&(ts(e,1,t),Le(e,t))}function te(e,t,n){if(e.tag===3)af(e,e,n);else for(;t!==null;){if(t.tag===3){af(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pn===null||!pn.has(r))){e=Ar(n,e),e=Pg(t,e,1),t=hn(t,e,1),e=Ce(),t!==null&&(ts(t,1,e),Le(t,e));break}}t=t.return}}function Dw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ce(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(pe&n)===n&&(ue===4||ue===3&&(pe&130023424)===pe&&500>ne()-Ec?An(e,0):Sc|=n),Le(e,t)}function Jg(e,t){t===0&&(e.mode&1?(t=Ss,Ss<<=1,!(Ss&130023424)&&(Ss=4194304)):t=1);var n=Ce();e=Ft(e,t),e!==null&&(ts(e,t,n),Le(e,n))}function jw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Jg(e,n)}function Mw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),Jg(e,n)}var Qg;Qg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ne.current)Oe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Oe=!1,Iw(e,t,n);Oe=!!(e.flags&131072)}else Oe=!1,Y&&t.flags&1048576&&eg(t,wo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;qs(e,t),e=t.pendingProps;var i=Pr(t,Ee.current);kr(t,n),i=pc(null,t,r,e,i,n);var s=gc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ae(r)?(s=!0,yo(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,uc(t),i.updater=na,t.stateNode=i,i._reactInternals=t,Gl(t,r,e,n),t=Yl(null,t,r,!0,s,n)):(t.tag=0,Y&&s&&nc(t),Ie(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(qs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Uw(r),e=nt(r,e),i){case 0:t=Ql(null,t,r,e,n);break e;case 1:t=Qd(null,t,r,e,n);break e;case 11:t=Gd(null,t,r,e,n);break e;case 14:t=Jd(null,t,r,nt(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nt(r,i),Ql(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nt(r,i),Qd(e,t,r,i,n);case 3:e:{if(Ag(t),e===null)throw Error(T(387));r=t.pendingProps,s=t.memoizedState,i=s.element,og(e,t),_o(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Ar(Error(T(423)),t),t=Yd(e,t,r,n,i);break e}else if(r!==i){i=Ar(Error(T(424)),t),t=Yd(e,t,r,n,i);break e}else for(Ue=fn(t.stateNode.containerInfo.firstChild),Fe=t,Y=!0,it=null,n=ig(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Or(),r===i){t=zt(e,t,n);break e}Ie(e,t,r,n)}t=t.child}return t;case 5:return ag(t),e===null&&Wl(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Fl(r,i)?o=null:s!==null&&Fl(r,s)&&(t.flags|=32),Ng(e,t),Ie(e,t,o,n),t.child;case 6:return e===null&&Wl(t),null;case 13:return Lg(e,t,n);case 4:return cc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Rr(t,null,r,n):Ie(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nt(r,i),Gd(e,t,r,i,n);case 7:return Ie(e,t,t.pendingProps,n),t.child;case 8:return Ie(e,t,t.pendingProps.children,n),t.child;case 12:return Ie(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,q(So,r._currentValue),r._currentValue=o,s!==null)if(ut(s.value,o)){if(s.children===i.children&&!Ne.current){t=zt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Dt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Kl(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(T(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Kl(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ie(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,kr(t,n),i=Qe(i),r=r(i),t.flags|=1,Ie(e,t,r,n),t.child;case 14:return r=t.type,i=nt(r,t.pendingProps),i=nt(r.type,i),Jd(e,t,r,i,n);case 15:return Og(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nt(r,i),qs(e,t),t.tag=1,Ae(r)?(e=!0,yo(t)):e=!1,kr(t,n),xg(t,r,i),Gl(t,r,i,n),Yl(null,t,r,!0,e,n);case 19:return Dg(e,t,n);case 22:return Rg(e,t,n)}throw Error(T(156,t.tag))};function Yg(e,t){return Ip(e,t)}function $w(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ge(e,t,n,r){return new $w(e,t,n,r)}function Cc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Uw(e){if(typeof e=="function")return Cc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Vu)return 11;if(e===Wu)return 14}return 2}function mn(e,t){var n=e.alternate;return n===null?(n=Ge(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Qs(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")Cc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case or:return Ln(n.children,i,s,t);case Hu:o=8,i|=8;break;case vl:return e=Ge(12,n,t,i|2),e.elementType=vl,e.lanes=s,e;case wl:return e=Ge(13,n,t,i),e.elementType=wl,e.lanes=s,e;case Sl:return e=Ge(19,n,t,i),e.elementType=Sl,e.lanes=s,e;case ap:return sa(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case sp:o=10;break e;case op:o=9;break e;case Vu:o=11;break e;case Wu:o=14;break e;case Yt:o=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=Ge(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Ln(e,t,n,r){return e=Ge(7,e,r,t),e.lanes=n,e}function sa(e,t,n,r){return e=Ge(22,e,r,t),e.elementType=ap,e.lanes=n,e.stateNode={isHidden:!1},e}function Qa(e,t,n){return e=Ge(6,e,null,t),e.lanes=n,e}function Ya(e,t,n){return t=Ge(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ra(0),this.expirationTimes=Ra(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ra(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function bc(e,t,n,r,i,s,o,a,l){return e=new Fw(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ge(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},uc(s),e}function zw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:sr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Xg(e){if(!e)return Sn;e=e._reactInternals;e:{if(Yn(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ae(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(Ae(n))return Xp(e,n,t)}return t}function Zg(e,t,n,r,i,s,o,a,l){return e=bc(n,r,!0,e,i,s,o,a,l),e.context=Xg(null),n=e.current,r=Ce(),i=gn(n),s=Dt(r,i),s.callback=t??null,hn(n,s,i),e.current.lanes=i,ts(e,i,r),Le(e,r),e}function oa(e,t,n,r){var i=t.current,s=Ce(),o=gn(i);return n=Xg(n),t.context===null?t.context=n:t.pendingContext=n,t=Dt(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=hn(i,t,o),e!==null&&(at(e,i,o,s),Vs(e,i,o)),o}function Oo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function lf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function xc(e,t){lf(e,t),(e=e.alternate)&&lf(e,t)}function Bw(){return null}var em=typeof reportError=="function"?reportError:function(e){console.error(e)};function Tc(e){this._internalRoot=e}aa.prototype.render=Tc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));oa(e,t,null,null)};aa.prototype.unmount=Tc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hn(function(){oa(null,e,null,null)}),t[Ut]=null}};function aa(e){this._internalRoot=e}aa.prototype.unstable_scheduleHydration=function(e){if(e){var t=Rp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Zt.length&&t!==0&&t<Zt[n].priority;n++);Zt.splice(n,0,e),n===0&&Ap(e)}};function Pc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function la(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function uf(){}function Hw(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Oo(o);s.call(u)}}var o=Zg(t,r,e,0,null,!1,!1,"",uf);return e._reactRootContainer=o,e[Ut]=o.current,Mi(e.nodeType===8?e.parentNode:e),Hn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Oo(l);a.call(u)}}var l=bc(e,0,!1,null,null,!1,!1,"",uf);return e._reactRootContainer=l,e[Ut]=l.current,Mi(e.nodeType===8?e.parentNode:e),Hn(function(){oa(t,l,n,r)}),l}function ua(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Oo(o);a.call(l)}}oa(t,o,e,i)}else o=Hw(n,t,e,i,r);return Oo(o)}Pp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=li(t.pendingLanes);n!==0&&(Gu(t,n|1),Le(t,ne()),!(z&6)&&(Lr=ne()+500,kn()))}break;case 13:Hn(function(){var r=Ft(e,1);if(r!==null){var i=Ce();at(r,e,1,i)}}),xc(e,1)}};Ju=function(e){if(e.tag===13){var t=Ft(e,134217728);if(t!==null){var n=Ce();at(t,e,134217728,n)}xc(e,134217728)}};Op=function(e){if(e.tag===13){var t=gn(e),n=Ft(e,t);if(n!==null){var r=Ce();at(n,e,t,r)}xc(e,t)}};Rp=function(){return W};Np=function(e,t){var n=W;try{return W=e,t()}finally{W=n}};Ol=function(e,t,n){switch(t){case"input":if(kl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Zo(r);if(!i)throw Error(T(90));up(r),kl(r,i)}}}break;case"textarea":dp(e,n);break;case"select":t=n.value,t!=null&&wr(e,!!n.multiple,t,!1)}};vp=_c;wp=Hn;var Vw={usingClientEntryPoint:!1,Events:[rs,cr,Zo,mp,yp,_c]},ii={findFiberByHostInstance:Tn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ww={bundleType:ii.bundleType,version:ii.version,rendererPackageName:ii.rendererPackageName,rendererConfig:ii.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=_p(e),e===null?null:e.stateNode},findFiberByHostInstance:ii.findFiberByHostInstance||Bw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rs.isDisabled&&Rs.supportsFiber)try{Jo=Rs.inject(Ww),yt=Rs}catch{}}He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vw;He.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pc(t))throw Error(T(200));return zw(e,t,null,n)};He.createRoot=function(e,t){if(!Pc(e))throw Error(T(299));var n=!1,r="",i=em;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=bc(e,1,!1,null,null,n,!1,r,i),e[Ut]=t.current,Mi(e.nodeType===8?e.parentNode:e),new Tc(t)};He.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=_p(t),e=e===null?null:e.stateNode,e};He.flushSync=function(e){return Hn(e)};He.hydrate=function(e,t,n){if(!la(t))throw Error(T(200));return ua(null,e,t,!0,n)};He.hydrateRoot=function(e,t,n){if(!Pc(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=em;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Zg(t,null,e,1,n??null,i,!1,s,o),e[Ut]=t.current,Mi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new aa(t)};He.render=function(e,t,n){if(!la(t))throw Error(T(200));return ua(null,e,t,!1,n)};He.unmountComponentAtNode=function(e){if(!la(e))throw Error(T(40));return e._reactRootContainer?(Hn(function(){ua(null,null,e,!1,function(){e._reactRootContainer=null,e[Ut]=null})}),!0):!1};He.unstable_batchedUpdates=_c;He.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!la(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return ua(e,t,n,!1,r)};He.version="18.3.1-next-f1338f8080-20240426";function tm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tm)}catch(e){console.error(e)}}tm(),tp.exports=He;var Kw=tp.exports,nm,cf=Kw;nm=cf.createRoot,cf.hydrateRoot;/**
 * @remix-run/router v1.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ki(){return Ki=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ki.apply(this,arguments)}var ln;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ln||(ln={}));const df="popstate";function qw(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return uu("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:im(i)}return Jw(t,n,null,e)}function ae(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function rm(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Gw(){return Math.random().toString(36).substr(2,8)}function ff(e,t){return{usr:e.state,key:e.key,idx:t}}function uu(e,t,n,r){return n===void 0&&(n=null),Ki({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Wr(t):t,{state:n,key:t&&t.key||r||Gw()})}function im(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Wr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Jw(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=ln.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Ki({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){a=ln.Pop;let _=c(),p=_==null?null:_-u;u=_,l&&l({action:a,location:v.location,delta:p})}function d(_,p){a=ln.Push;let h=uu(v.location,_,p);u=c()+1;let g=ff(h,u),w=v.createHref(h);try{o.pushState(g,"",w)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(w)}s&&l&&l({action:a,location:v.location,delta:1})}function m(_,p){a=ln.Replace;let h=uu(v.location,_,p);u=c();let g=ff(h,u),w=v.createHref(h);o.replaceState(g,"",w),s&&l&&l({action:a,location:v.location,delta:0})}function y(_){let p=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof _=="string"?_:im(_);return h=h.replace(/ $/,"%20"),ae(p,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,p)}let v={get action(){return a},get location(){return e(i,o)},listen(_){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(df,f),l=_,()=>{i.removeEventListener(df,f),l=null}},createHref(_){return t(i,_)},createURL:y,encodeLocation(_){let p=y(_);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:m,go(_){return o.go(_)}};return v}var hf;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(hf||(hf={}));function Qw(e,t,n){return n===void 0&&(n="/"),Yw(e,t,n,!1)}function Yw(e,t,n,r){let i=typeof t=="string"?Wr(t):t,s=am(i.pathname||"/",n);if(s==null)return null;let o=sm(e);Xw(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=u1(s);a=a1(o[l],u,r)}return a}function sm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ae(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Dn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ae(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),sm(s.children,t,c,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:s1(u,s.index),routesMeta:c})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of om(s.path))i(s,o,l)}),t}function om(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=om(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function Xw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:o1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Zw=/^:[\w-]+$/,e1=3,t1=2,n1=1,r1=10,i1=-2,pf=e=>e==="*";function s1(e,t){let n=e.split("/"),r=n.length;return n.some(pf)&&(r+=i1),t&&(r+=t1),n.filter(i=>!pf(i)).reduce((i,s)=>i+(Zw.test(s)?e1:s===""?n1:r1),r)}function o1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function a1(e,t,n){let{routesMeta:r}=e,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,c=s==="/"?t:t.slice(s.length)||"/",f=gf({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),d=l.route;if(!f&&u&&n&&!r[r.length-1].route.index&&(f=gf({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},c)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Dn([s,f.pathname]),pathnameBase:h1(Dn([s,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(s=Dn([s,f.pathnameBase]))}return o}function gf(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=l1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{let{paramName:d,isOptional:m}=c;if(d==="*"){let v=a[f]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const y=a[f];return m&&!y?u[d]=void 0:u[d]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:e}}function l1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),rm(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function u1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return rm(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function am(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function c1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Wr(e):e;return{pathname:n?n.startsWith("/")?n:d1(n,t):t,search:p1(r),hash:g1(i)}}function d1(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Xa(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function f1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function lm(e,t){let n=f1(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function um(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Wr(e):(i=Ki({},e),ae(!i.pathname||!i.pathname.includes("?"),Xa("?","pathname","search",i)),ae(!i.pathname||!i.pathname.includes("#"),Xa("#","pathname","hash",i)),ae(!i.search||!i.search.includes("#"),Xa("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=t.length-1;if(!r&&o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),f-=1;i.pathname=d.join("/")}a=f>=0?t[f]:"/"}let l=c1(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Dn=e=>e.join("/").replace(/\/\/+/g,"/"),h1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),p1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,g1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function m1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const cm=["post","put","patch","delete"];new Set(cm);const y1=["get",...cm];new Set(y1);/**
 * React Router v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qi(){return qi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qi.apply(this,arguments)}const Oc=P.createContext(null),v1=P.createContext(null),ss=P.createContext(null),ca=P.createContext(null),Xn=P.createContext({outlet:null,matches:[],isDataRoute:!1}),dm=P.createContext(null);function os(){return P.useContext(ca)!=null}function Rc(){return os()||ae(!1),P.useContext(ca).location}function fm(e){P.useContext(ss).static||P.useLayoutEffect(e)}function w1(){let{isDataRoute:e}=P.useContext(Xn);return e?N1():S1()}function S1(){os()||ae(!1);let e=P.useContext(Oc),{basename:t,future:n,navigator:r}=P.useContext(ss),{matches:i}=P.useContext(Xn),{pathname:s}=Rc(),o=JSON.stringify(lm(i,n.v7_relativeSplatPath)),a=P.useRef(!1);return fm(()=>{a.current=!0}),P.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=um(u,JSON.parse(o),s,c.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Dn([t,f.pathname])),(c.replace?r.replace:r.push)(f,c.state,c)},[t,r,o,s,e])}function E1(e,t){return _1(e,t)}function _1(e,t,n,r){os()||ae(!1);let{navigator:i}=P.useContext(ss),{matches:s}=P.useContext(Xn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Rc(),c;if(t){var f;let _=typeof t=="string"?Wr(t):t;l==="/"||(f=_.pathname)!=null&&f.startsWith(l)||ae(!1),c=_}else c=u;let d=c.pathname||"/",m=d;if(l!=="/"){let _=l.replace(/^\//,"").split("/");m="/"+d.replace(/^\//,"").split("/").slice(_.length).join("/")}let y=Qw(e,{pathname:m}),v=x1(y&&y.map(_=>Object.assign({},_,{params:Object.assign({},a,_.params),pathname:Dn([l,i.encodeLocation?i.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?l:Dn([l,i.encodeLocation?i.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),s,n,r);return t&&v?P.createElement(ca.Provider,{value:{location:qi({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:ln.Pop}},v):v}function k1(){let e=R1(),t=m1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},t),n?P.createElement("pre",{style:i},n):null,null)}const I1=P.createElement(k1,null);class C1 extends P.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?P.createElement(Xn.Provider,{value:this.props.routeContext},P.createElement(dm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function b1(e){let{routeContext:t,match:n,children:r}=e,i=P.useContext(Oc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(Xn.Provider,{value:t},r)}function x1(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);c>=0||ae(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let f=o[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=c),f.route.id){let{loaderData:d,errors:m}=n,y=f.route.loader&&d[f.route.id]===void 0&&(!m||m[f.route.id]===void 0);if(f.route.lazy||y){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,f,d)=>{let m,y=!1,v=null,_=null;n&&(m=a&&f.route.id?a[f.route.id]:void 0,v=f.route.errorElement||I1,l&&(u<0&&d===0?(y=!0,_=null):u===d&&(y=!0,_=f.route.hydrateFallbackElement||null)));let p=t.concat(o.slice(0,d+1)),h=()=>{let g;return m?g=v:y?g=_:f.route.Component?g=P.createElement(f.route.Component,null):f.route.element?g=f.route.element:g=c,P.createElement(b1,{match:f,routeContext:{outlet:c,matches:p,isDataRoute:n!=null},children:g})};return n&&(f.route.ErrorBoundary||f.route.errorElement||d===0)?P.createElement(C1,{location:n.location,revalidation:n.revalidation,component:v,error:m,children:h(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):h()},null)}var hm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(hm||{}),Ro=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ro||{});function T1(e){let t=P.useContext(Oc);return t||ae(!1),t}function P1(e){let t=P.useContext(v1);return t||ae(!1),t}function O1(e){let t=P.useContext(Xn);return t||ae(!1),t}function pm(e){let t=O1(),n=t.matches[t.matches.length-1];return n.route.id||ae(!1),n.route.id}function R1(){var e;let t=P.useContext(dm),n=P1(Ro.UseRouteError),r=pm(Ro.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function N1(){let{router:e}=T1(hm.UseNavigateStable),t=pm(Ro.UseNavigateStable),n=P.useRef(!1);return fm(()=>{n.current=!0}),P.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,qi({fromRouteId:t},s)))},[e,t])}function Nc(e){let{to:t,replace:n,state:r,relative:i}=e;os()||ae(!1);let{future:s,static:o}=P.useContext(ss),{matches:a}=P.useContext(Xn),{pathname:l}=Rc(),u=w1(),c=um(t,lm(a,s.v7_relativeSplatPath),l,i==="path"),f=JSON.stringify(c);return P.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:i}),[u,f,i,n,r]),null}function ci(e){ae(!1)}function A1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=ln.Pop,navigator:s,static:o=!1,future:a}=e;os()&&ae(!1);let l=t.replace(/^\/*/,"/"),u=P.useMemo(()=>({basename:l,navigator:s,static:o,future:qi({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Wr(r));let{pathname:c="/",search:f="",hash:d="",state:m=null,key:y="default"}=r,v=P.useMemo(()=>{let _=am(c,l);return _==null?null:{location:{pathname:_,search:f,hash:d,state:m,key:y},navigationType:i}},[l,c,f,d,m,y,i]);return v==null?null:P.createElement(ss.Provider,{value:u},P.createElement(ca.Provider,{children:n,value:v}))}function L1(e){let{children:t,location:n}=e;return E1(cu(t),n)}new Promise(()=>{});function cu(e,t){t===void 0&&(t=[]);let n=[];return P.Children.forEach(e,(r,i)=>{if(!P.isValidElement(r))return;let s=[...t,i];if(r.type===P.Fragment){n.push.apply(n,cu(r.props.children,s));return}r.type!==ci&&ae(!1),!r.props.index||!r.props.children||ae(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=cu(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const D1="6";try{window.__reactRouterVersion=D1}catch{}const j1="startTransition",mf=Dv[j1];function M1(e){let{basename:t,children:n,future:r,window:i}=e,s=P.useRef();s.current==null&&(s.current=qw({window:i,v5Compat:!0}));let o=s.current,[a,l]=P.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=P.useCallback(f=>{u&&mf?mf(()=>l(f)):l(f)},[l,u]);return P.useLayoutEffect(()=>o.listen(c),[o,c]),P.createElement(A1,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var yf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(yf||(yf={}));var vf;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(vf||(vf={}));var $1="@vercel/speed-insights",U1="1.0.12",F1=()=>{window.si||(window.si=function(...t){(window.siq=window.siq||[]).push(t)})};function z1(){return typeof window<"u"}function B1(){try{const e="production"}catch{}return"production"}function wf(){return B1()==="development"}var gm="https://va.vercel-scripts.com/v1/speed-insights",H1=`${gm}/script.js`,V1=`${gm}/script.debug.js`,W1="/_vercel/speed-insights/script.js";function K1(e={}){var t;if(!z1()||e.route===null)return null;F1();const r=!!e.dsn?H1:W1,i=e.scriptSrc||(wf()?V1:r);if(document.head.querySelector(`script[src*="${i}"]`))return null;e.beforeSend&&((t=window.si)==null||t.call(window,"beforeSend",e.beforeSend));const s=document.createElement("script");return s.src=i,s.defer=!0,s.dataset.sdkn=$1+(e.framework?`/${e.framework}`:""),s.dataset.sdkv=U1,e.sampleRate&&(s.dataset.sampleRate=e.sampleRate.toString()),e.route&&(s.dataset.route=e.route),e.endpoint&&(s.dataset.endpoint=e.endpoint),e.dsn&&(s.dataset.dsn=e.dsn),wf()&&e.debug===!1&&(s.dataset.debug="false"),s.onerror=()=>{console.log(`[Vercel Speed Insights] Failed to load script from ${i}. Please check if any content blockers are enabled and try again.`)},document.head.appendChild(s),{setRoute:o=>{s.dataset.route=o??void 0}}}function q1(e){const t=P.useRef(null);return P.useEffect(()=>{if(t.current)e.route&&t.current(e.route);else{const n=K1({framework:e.framework||"react",...e});n&&(t.current=n.setRoute)}},[e.route]),null}function G1(){return S.jsx("div",{className:"loading",children:S.jsx("div",{className:"loader"})})}var Re=function(){return Re=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},Re.apply(this,arguments)};function No(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var J="-ms-",Ii="-moz-",H="-webkit-",mm="comm",da="rule",Ac="decl",J1="@import",ym="@keyframes",Q1="@layer",vm=Math.abs,Lc=String.fromCharCode,du=Object.assign;function Y1(e,t){return de(e,0)^45?(((t<<2^de(e,0))<<2^de(e,1))<<2^de(e,2))<<2^de(e,3):0}function wm(e){return e.trim()}function xt(e,t){return(e=t.exec(e))?e[0]:e}function $(e,t,n){return e.replace(t,n)}function Ys(e,t,n){return e.indexOf(t,n)}function de(e,t){return e.charCodeAt(t)|0}function Dr(e,t,n){return e.slice(t,n)}function ht(e){return e.length}function Sm(e){return e.length}function di(e,t){return t.push(e),e}function X1(e,t){return e.map(t).join("")}function Sf(e,t){return e.filter(function(n){return!xt(n,t)})}var fa=1,jr=1,Em=0,Xe=0,se=0,Kr="";function ha(e,t,n,r,i,s,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:fa,column:jr,length:o,return:"",siblings:a}}function Qt(e,t){return du(ha("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function nr(e){for(;e.root;)e=Qt(e.root,{children:[e]});di(e,e.siblings)}function Z1(){return se}function eS(){return se=Xe>0?de(Kr,--Xe):0,jr--,se===10&&(jr=1,fa--),se}function lt(){return se=Xe<Em?de(Kr,Xe++):0,jr++,se===10&&(jr=1,fa++),se}function jn(){return de(Kr,Xe)}function Xs(){return Xe}function pa(e,t){return Dr(Kr,e,t)}function fu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function tS(e){return fa=jr=1,Em=ht(Kr=e),Xe=0,[]}function nS(e){return Kr="",e}function Za(e){return wm(pa(Xe-1,hu(e===91?e+2:e===40?e+1:e)))}function rS(e){for(;(se=jn())&&se<33;)lt();return fu(e)>2||fu(se)>3?"":" "}function iS(e,t){for(;--t&&lt()&&!(se<48||se>102||se>57&&se<65||se>70&&se<97););return pa(e,Xs()+(t<6&&jn()==32&&lt()==32))}function hu(e){for(;lt();)switch(se){case e:return Xe;case 34:case 39:e!==34&&e!==39&&hu(se);break;case 40:e===41&&hu(e);break;case 92:lt();break}return Xe}function sS(e,t){for(;lt()&&e+se!==57;)if(e+se===84&&jn()===47)break;return"/*"+pa(t,Xe-1)+"*"+Lc(e===47?e:lt())}function oS(e){for(;!fu(jn());)lt();return pa(e,Xe)}function aS(e){return nS(Zs("",null,null,null,[""],e=tS(e),0,[0],e))}function Zs(e,t,n,r,i,s,o,a,l){for(var u=0,c=0,f=o,d=0,m=0,y=0,v=1,_=1,p=1,h=0,g="",w=i,I=s,C=r,k=g;_;)switch(y=h,h=lt()){case 40:if(y!=108&&de(k,f-1)==58){Ys(k+=$(Za(h),"&","&\f"),"&\f",vm(u?a[u-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:k+=Za(h);break;case 9:case 10:case 13:case 32:k+=rS(y);break;case 92:k+=iS(Xs()-1,7);continue;case 47:switch(jn()){case 42:case 47:di(lS(sS(lt(),Xs()),t,n,l),l);break;default:k+="/"}break;case 123*v:a[u++]=ht(k)*p;case 125*v:case 59:case 0:switch(h){case 0:case 125:_=0;case 59+c:p==-1&&(k=$(k,/\f/g,"")),m>0&&ht(k)-f&&di(m>32?_f(k+";",r,n,f-1,l):_f($(k," ","")+";",r,n,f-2,l),l);break;case 59:k+=";";default:if(di(C=Ef(k,t,n,u,c,i,a,g,w=[],I=[],f,s),s),h===123)if(c===0)Zs(k,t,C,C,w,s,f,a,I);else switch(d===99&&de(k,3)===110?100:d){case 100:case 108:case 109:case 115:Zs(e,C,C,r&&di(Ef(e,C,C,0,0,i,a,g,i,w=[],f,I),I),i,I,f,a,r?w:I);break;default:Zs(k,C,C,C,[""],I,0,a,I)}}u=c=m=0,v=p=1,g=k="",f=o;break;case 58:f=1+ht(k),m=y;default:if(v<1){if(h==123)--v;else if(h==125&&v++==0&&eS()==125)continue}switch(k+=Lc(h),h*v){case 38:p=c>0?1:(k+="\f",-1);break;case 44:a[u++]=(ht(k)-1)*p,p=1;break;case 64:jn()===45&&(k+=Za(lt())),d=jn(),c=f=ht(g=k+=oS(Xs())),h++;break;case 45:y===45&&ht(k)==2&&(v=0)}}return s}function Ef(e,t,n,r,i,s,o,a,l,u,c,f){for(var d=i-1,m=i===0?s:[""],y=Sm(m),v=0,_=0,p=0;v<r;++v)for(var h=0,g=Dr(e,d+1,d=vm(_=o[v])),w=e;h<y;++h)(w=wm(_>0?m[h]+" "+g:$(g,/&\f/g,m[h])))&&(l[p++]=w);return ha(e,t,n,i===0?da:a,l,u,c,f)}function lS(e,t,n,r){return ha(e,t,n,mm,Lc(Z1()),Dr(e,2,-2),0,r)}function _f(e,t,n,r,i){return ha(e,t,n,Ac,Dr(e,0,r),Dr(e,r+1,-1),r,i)}function _m(e,t,n){switch(Y1(e,t)){case 5103:return H+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return H+e+e;case 4789:return Ii+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return H+e+Ii+e+J+e+e;case 5936:switch(de(e,t+11)){case 114:return H+e+J+$(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return H+e+J+$(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return H+e+J+$(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return H+e+J+e+e;case 6165:return H+e+J+"flex-"+e+e;case 5187:return H+e+$(e,/(\w+).+(:[^]+)/,H+"box-$1$2"+J+"flex-$1$2")+e;case 5443:return H+e+J+"flex-item-"+$(e,/flex-|-self/g,"")+(xt(e,/flex-|baseline/)?"":J+"grid-row-"+$(e,/flex-|-self/g,""))+e;case 4675:return H+e+J+"flex-line-pack"+$(e,/align-content|flex-|-self/g,"")+e;case 5548:return H+e+J+$(e,"shrink","negative")+e;case 5292:return H+e+J+$(e,"basis","preferred-size")+e;case 6060:return H+"box-"+$(e,"-grow","")+H+e+J+$(e,"grow","positive")+e;case 4554:return H+$(e,/([^-])(transform)/g,"$1"+H+"$2")+e;case 6187:return $($($(e,/(zoom-|grab)/,H+"$1"),/(image-set)/,H+"$1"),e,"")+e;case 5495:case 3959:return $(e,/(image-set\([^]*)/,H+"$1$`$1");case 4968:return $($(e,/(.+:)(flex-)?(.*)/,H+"box-pack:$3"+J+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+H+e+e;case 4200:if(!xt(e,/flex-|baseline/))return J+"grid-column-align"+Dr(e,t)+e;break;case 2592:case 3360:return J+$(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,xt(r.props,/grid-\w+-end/)})?~Ys(e+(n=n[t].value),"span",0)?e:J+$(e,"-start","")+e+J+"grid-row-span:"+(~Ys(n,"span",0)?xt(n,/\d+/):+xt(n,/\d+/)-+xt(e,/\d+/))+";":J+$(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return xt(r.props,/grid-\w+-start/)})?e:J+$($(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return $(e,/(.+)-inline(.+)/,H+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ht(e)-1-t>6)switch(de(e,t+1)){case 109:if(de(e,t+4)!==45)break;case 102:return $(e,/(.+:)(.+)-([^]+)/,"$1"+H+"$2-$3$1"+Ii+(de(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ys(e,"stretch",0)?_m($(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return $(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return J+i+":"+s+u+(o?J+i+"-span:"+(a?l:+l-+s)+u:"")+e});case 4949:if(de(e,t+6)===121)return $(e,":",":"+H)+e;break;case 6444:switch(de(e,de(e,14)===45?18:11)){case 120:return $(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+H+(de(e,14)===45?"inline-":"")+"box$3$1"+H+"$2$3$1"+J+"$2box$3")+e;case 100:return $(e,":",":"+J)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return $(e,"scroll-","scroll-snap-")+e}return e}function Ao(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function uS(e,t,n,r){switch(e.type){case Q1:if(e.children.length)break;case J1:case Ac:return e.return=e.return||e.value;case mm:return"";case ym:return e.return=e.value+"{"+Ao(e.children,r)+"}";case da:if(!ht(e.value=e.props.join(",")))return""}return ht(n=Ao(e.children,r))?e.return=e.value+"{"+n+"}":""}function cS(e){var t=Sm(e);return function(n,r,i,s){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,s)||"";return o}}function dS(e){return function(t){t.root||(t=t.return)&&e(t)}}function fS(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Ac:e.return=_m(e.value,e.length,n);return;case ym:return Ao([Qt(e,{value:$(e.value,"@","@"+H)})],r);case da:if(e.length)return X1(n=e.props,function(i){switch(xt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":nr(Qt(e,{props:[$(i,/:(read-\w+)/,":"+Ii+"$1")]})),nr(Qt(e,{props:[i]})),du(e,{props:Sf(n,r)});break;case"::placeholder":nr(Qt(e,{props:[$(i,/:(plac\w+)/,":"+H+"input-$1")]})),nr(Qt(e,{props:[$(i,/:(plac\w+)/,":"+Ii+"$1")]})),nr(Qt(e,{props:[$(i,/:(plac\w+)/,J+"input-$1")]})),nr(Qt(e,{props:[i]})),du(e,{props:Sf(n,r)});break}return""})}}var hS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Me={},Mr=typeof process<"u"&&Me!==void 0&&(Me.REACT_APP_SC_ATTR||Me.SC_ATTR)||"data-styled",km="active",Im="data-styled-version",ga="6.1.12",Dc=`/*!sc*/
`,Lo=typeof window<"u"&&"HTMLElement"in window,pS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Me!==void 0&&Me.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Me.REACT_APP_SC_DISABLE_SPEEDY!==""?Me.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Me.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Me!==void 0&&Me.SC_DISABLE_SPEEDY!==void 0&&Me.SC_DISABLE_SPEEDY!==""&&Me.SC_DISABLE_SPEEDY!=="false"&&Me.SC_DISABLE_SPEEDY),ma=Object.freeze([]),$r=Object.freeze({});function gS(e,t,n){return n===void 0&&(n=$r),e.theme!==n.theme&&e.theme||t||n.theme}var Cm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),mS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,yS=/(^-|-$)/g;function kf(e){return e.replace(mS,"-").replace(yS,"")}var vS=/(a)(d)/gi,Ns=52,If=function(e){return String.fromCharCode(e+(e>25?39:97))};function pu(e){var t,n="";for(t=Math.abs(e);t>Ns;t=t/Ns|0)n=If(t%Ns)+n;return(If(t%Ns)+n).replace(vS,"$1-$2")}var el,bm=5381,yr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},xm=function(e){return yr(bm,e)};function wS(e){return pu(xm(e)>>>0)}function SS(e){return e.displayName||e.name||"Component"}function tl(e){return typeof e=="string"&&!0}var Tm=typeof Symbol=="function"&&Symbol.for,Pm=Tm?Symbol.for("react.memo"):60115,ES=Tm?Symbol.for("react.forward_ref"):60112,_S={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},kS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Om={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},IS=((el={})[ES]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},el[Pm]=Om,el);function Cf(e){return("type"in(t=e)&&t.type.$$typeof)===Pm?Om:"$$typeof"in e?IS[e.$$typeof]:_S;var t}var CS=Object.defineProperty,bS=Object.getOwnPropertyNames,bf=Object.getOwnPropertySymbols,xS=Object.getOwnPropertyDescriptor,TS=Object.getPrototypeOf,xf=Object.prototype;function Rm(e,t,n){if(typeof t!="string"){if(xf){var r=TS(t);r&&r!==xf&&Rm(e,r,n)}var i=bS(t);bf&&(i=i.concat(bf(t)));for(var s=Cf(e),o=Cf(t),a=0;a<i.length;++a){var l=i[a];if(!(l in kS||n&&n[l]||o&&l in o||s&&l in s)){var u=xS(t,l);try{CS(e,l,u)}catch{}}}}return e}function Ur(e){return typeof e=="function"}function jc(e){return typeof e=="object"&&"styledComponentId"in e}function Rn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Tf(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Gi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function gu(e,t,n){if(n===void 0&&(n=!1),!n&&!Gi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=gu(e[r],t[r]);else if(Gi(t))for(var r in t)e[r]=gu(e[r],t[r]);return e}function Mc(e,t){Object.defineProperty(e,"toString",{value:t})}function as(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var PS=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;t>=s;)if((s<<=1)<0)throw as(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(t+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(Dc);return n},e}(),eo=new Map,Do=new Map,to=1,As=function(e){if(eo.has(e))return eo.get(e);for(;Do.has(to);)to++;var t=to++;return eo.set(e,t),Do.set(t,e),t},OS=function(e,t){to=t+1,eo.set(e,t),Do.set(t,e)},RS="style[".concat(Mr,"][").concat(Im,'="').concat(ga,'"]'),NS=new RegExp("^".concat(Mr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),AS=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},LS=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Dc),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(NS);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(OS(c,u),AS(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}},Pf=function(e){for(var t=document.querySelectorAll(RS),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Mr)!==km&&(LS(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function DS(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Nm=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Mr,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Mr,km),r.setAttribute(Im,ga);var o=DS();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},jS=function(){function e(t){this.element=Nm(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw as(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),MS=function(){function e(t){this.element=Nm(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),$S=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Of=Lo,US={isServer:!Lo,useCSSOMInjection:!pS},Am=function(){function e(t,n,r){t===void 0&&(t=$r),n===void 0&&(n={});var i=this;this.options=Re(Re({},US),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Lo&&Of&&(Of=!1,Pf(this)),Mc(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(f){var d=function(p){return Do.get(p)}(f);if(d===void 0)return"continue";var m=s.names.get(d),y=o.getGroup(f);if(m===void 0||!m.size||y.length===0)return"continue";var v="".concat(Mr,".g").concat(f,'[id="').concat(d,'"]'),_="";m!==void 0&&m.forEach(function(p){p.length>0&&(_+="".concat(p,","))}),l+="".concat(y).concat(v,'{content:"').concat(_,'"}').concat(Dc)},c=0;c<a;c++)u(c);return l}(i)})}return e.registerId=function(t){return As(t)},e.prototype.rehydrate=function(){!this.server&&Lo&&Pf(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Re(Re({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new $S(i):r?new jS(i):new MS(i)}(this.options),new PS(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(As(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(As(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(As(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),FS=/&/g,zS=/^\s*\/\/.*$/gm;function Lm(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Lm(n.children,t)),n})}function BS(e){var t,n,r,i=$r,s=i.options,o=s===void 0?$r:s,a=i.plugins,l=a===void 0?ma:a,u=function(d,m,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):d},c=l.slice();c.push(function(d){d.type===da&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(FS,n).replace(r,u))}),o.prefix&&c.push(fS),c.push(uS);var f=function(d,m,y,v){m===void 0&&(m=""),y===void 0&&(y=""),v===void 0&&(v="&"),t=v,n=m,r=new RegExp("\\".concat(n,"\\b"),"g");var _=d.replace(zS,""),p=aS(y||m?"".concat(y," ").concat(m," { ").concat(_," }"):_);o.namespace&&(p=Lm(p,o.namespace));var h=[];return Ao(p,cS(c.concat(dS(function(g){return h.push(g)})))),h};return f.hash=l.length?l.reduce(function(d,m){return m.name||as(15),yr(d,m.name)},bm).toString():"",f}var HS=new Am,mu=BS(),Dm=Lt.createContext({shouldForwardProp:void 0,styleSheet:HS,stylis:mu});Dm.Consumer;Lt.createContext(void 0);function Rf(){return P.useContext(Dm)}var VS=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=mu);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Mc(this,function(){throw as(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=mu),this.name+t.hash},e}(),WS=function(e){return e>="A"&&e<="Z"};function Nf(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;WS(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var jm=function(e){return e==null||e===!1||e===""},Mm=function(e){var t,n,r=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!jm(s)&&(Array.isArray(s)&&s.isCss||Ur(s)?r.push("".concat(Nf(i),":"),s,";"):Gi(s)?r.push.apply(r,No(No(["".concat(i," {")],Mm(s),!1),["}"],!1)):r.push("".concat(Nf(i),": ").concat((t=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in hS||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Mn(e,t,n,r){if(jm(e))return[];if(jc(e))return[".".concat(e.styledComponentId)];if(Ur(e)){if(!Ur(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return Mn(i,t,n,r)}var s;return e instanceof VS?n?(e.inject(n,r),[e.getName(r)]):[e]:Gi(e)?Mm(e):Array.isArray(e)?Array.prototype.concat.apply(ma,e.map(function(o){return Mn(o,t,n,r)})):[e.toString()]}function KS(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ur(n)&&!jc(n))return!1}return!0}var qS=xm(ga),GS=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&KS(t),this.componentId=n,this.baseHash=yr(qS,n),this.baseStyle=r,Am.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Rn(i,this.staticRulesId);else{var s=Tf(Mn(this.rules,t,n,r)),o=pu(yr(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=Rn(i,o),this.staticRulesId=o}else{for(var l=yr(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var f=this.rules[c];if(typeof f=="string")u+=f;else if(f){var d=Tf(Mn(f,t,n,r));l=yr(l,d+c),u+=d}}if(u){var m=pu(l>>>0);n.hasNameForId(this.componentId,m)||n.insertRules(this.componentId,m,r(u,".".concat(m),void 0,this.componentId)),i=Rn(i,m)}}return i},e}(),$m=Lt.createContext(void 0);$m.Consumer;var nl={};function JS(e,t,n){var r=jc(e),i=e,s=!tl(e),o=t.attrs,a=o===void 0?ma:o,l=t.componentId,u=l===void 0?function(w,I){var C=typeof w!="string"?"sc":kf(w);nl[C]=(nl[C]||0)+1;var k="".concat(C,"-").concat(wS(ga+C+nl[C]));return I?"".concat(I,"-").concat(k):k}(t.displayName,t.parentComponentId):l,c=t.displayName,f=c===void 0?function(w){return tl(w)?"styled.".concat(w):"Styled(".concat(SS(w),")")}(e):c,d=t.displayName&&t.componentId?"".concat(kf(t.displayName),"-").concat(t.componentId):t.componentId||u,m=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(t.shouldForwardProp){var _=t.shouldForwardProp;y=function(w,I){return v(w,I)&&_(w,I)}}else y=v}var p=new GS(n,d,r?i.componentStyle:void 0);function h(w,I){return function(C,k,O){var D=C.attrs,L=C.componentStyle,B=C.defaultProps,re=C.foldedComponentIds,Ze=C.styledComponentId,Te=C.target,E=Lt.useContext($m),x=Rf(),j=C.shouldForwardProp||x.shouldForwardProp,b=gS(k,E,B)||$r,R=function(Kt,je,Ct){for(var Qr,In=Re(Re({},je),{className:void 0,theme:Ct}),Ca=0;Ca<Kt.length;Ca+=1){var ps=Ur(Qr=Kt[Ca])?Qr(In):Qr;for(var qt in ps)In[qt]=qt==="className"?Rn(In[qt],ps[qt]):qt==="style"?Re(Re({},In[qt]),ps[qt]):ps[qt]}return je.className&&(In.className=Rn(In.className,je.className)),In}(D,k,b),N=R.as||Te,F={};for(var V in R)R[V]===void 0||V[0]==="$"||V==="as"||V==="theme"&&R.theme===b||(V==="forwardedAs"?F.as=R.forwardedAs:j&&!j(V,N)||(F[V]=R[V]));var ie=function(Kt,je){var Ct=Rf(),Qr=Kt.generateAndInjectStyles(je,Ct.styleSheet,Ct.stylis);return Qr}(L,R),me=Rn(re,Ze);return ie&&(me+=" "+ie),R.className&&(me+=" "+R.className),F[tl(N)&&!Cm.has(N)?"class":"className"]=me,F.ref=O,P.createElement(N,F)}(g,w,I)}h.displayName=f;var g=Lt.forwardRef(h);return g.attrs=m,g.componentStyle=p,g.displayName=f,g.shouldForwardProp=y,g.foldedComponentIds=r?Rn(i.foldedComponentIds,i.styledComponentId):"",g.styledComponentId=d,g.target=r?i.target:e,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(I){for(var C=[],k=1;k<arguments.length;k++)C[k-1]=arguments[k];for(var O=0,D=C;O<D.length;O++)gu(I,D[O],!0);return I}({},i.defaultProps,w):w}}),Mc(g,function(){return".".concat(g.styledComponentId)}),s&&Rm(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function Af(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Lf=function(e){return Object.assign(e,{isCss:!0})};function QS(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ur(e)||Gi(e))return Lf(Mn(Af(ma,No([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Mn(r):Lf(Mn(Af(r,t)))}function yu(e,t,n){if(n===void 0&&(n=$r),!t)throw as(1,t);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return e(t,n,QS.apply(void 0,No([i],s,!1)))};return r.attrs=function(i){return yu(e,t,Re(Re({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return yu(e,t,Re(Re({},n),i))},r}var Um=function(e){return yu(JS,e)},qr=Um;Cm.forEach(function(e){qr[e]=Um(e)});function vu(){return vu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vu.apply(this,arguments)}var YS={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(e){},onComplete:function(e){},preStringTyped:function(e,t){},onStringTyped:function(e,t){},onLastStringBackspaced:function(e){},onTypingPaused:function(e,t){},onTypingResumed:function(e,t){},onReset:function(e){},onStop:function(e,t){},onStart:function(e,t){},onDestroy:function(e){}},XS=new(function(){function e(){}var t=e.prototype;return t.load=function(n,r,i){if(n.el=typeof i=="string"?document.querySelector(i):i,n.options=vu({},YS,r),n.isInput=n.el.tagName.toLowerCase()==="input",n.attr=n.options.attr,n.bindInputFocusEvents=n.options.bindInputFocusEvents,n.showCursor=!n.isInput&&n.options.showCursor,n.cursorChar=n.options.cursorChar,n.cursorBlinking=!0,n.elContent=n.attr?n.el.getAttribute(n.attr):n.el.textContent,n.contentType=n.options.contentType,n.typeSpeed=n.options.typeSpeed,n.startDelay=n.options.startDelay,n.backSpeed=n.options.backSpeed,n.smartBackspace=n.options.smartBackspace,n.backDelay=n.options.backDelay,n.fadeOut=n.options.fadeOut,n.fadeOutClass=n.options.fadeOutClass,n.fadeOutDelay=n.options.fadeOutDelay,n.isPaused=!1,n.strings=n.options.strings.map(function(u){return u.trim()}),n.stringsElement=typeof n.options.stringsElement=="string"?document.querySelector(n.options.stringsElement):n.options.stringsElement,n.stringsElement){n.strings=[],n.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var s=Array.prototype.slice.apply(n.stringsElement.children),o=s.length;if(o)for(var a=0;a<o;a+=1)n.strings.push(s[a].innerHTML.trim())}for(var l in n.strPos=0,n.currentElContent=this.getCurrentElContent(n),n.currentElContent&&n.currentElContent.length>0&&(n.strPos=n.currentElContent.length-1,n.strings.unshift(n.currentElContent)),n.sequence=[],n.strings)n.sequence[l]=l;n.arrayPos=0,n.stopNum=0,n.loop=n.options.loop,n.loopCount=n.options.loopCount,n.curLoop=0,n.shuffle=n.options.shuffle,n.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},n.typingComplete=!1,n.autoInsertCss=n.options.autoInsertCss,n.autoInsertCss&&(this.appendCursorAnimationCss(n),this.appendFadeOutAnimationCss(n))},t.getCurrentElContent=function(n){return n.attr?n.el.getAttribute(n.attr):n.isInput?n.el.value:n.contentType==="html"?n.el.innerHTML:n.el.textContent},t.appendCursorAnimationCss=function(n){var r="data-typed-js-cursor-css";if(n.showCursor&&!document.querySelector("["+r+"]")){var i=document.createElement("style");i.setAttribute(r,"true"),i.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(i)}},t.appendFadeOutAnimationCss=function(n){var r="data-typed-fadeout-js-css";if(n.fadeOut&&!document.querySelector("["+r+"]")){var i=document.createElement("style");i.setAttribute(r,"true"),i.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(i)}},e}()),Df=new(function(){function e(){}var t=e.prototype;return t.typeHtmlChars=function(n,r,i){if(i.contentType!=="html")return r;var s=n.substring(r).charAt(0);if(s==="<"||s==="&"){var o;for(o=s==="<"?">":";";n.substring(r+1).charAt(0)!==o&&!(1+ ++r>n.length););r++}return r},t.backSpaceHtmlChars=function(n,r,i){if(i.contentType!=="html")return r;var s=n.substring(r).charAt(0);if(s===">"||s===";"){var o;for(o=s===">"?"<":"&";n.substring(r-1).charAt(0)!==o&&!(--r<0););r--}return r},e}()),ZS=function(){function e(n,r){XS.load(this,r,n),this.begin()}var t=e.prototype;return t.toggle=function(){this.pause.status?this.start():this.stop()},t.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},t.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},t.destroy=function(){this.reset(!1),this.options.onDestroy(this)},t.reset=function(n){n===void 0&&(n=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,n&&(this.insertCursor(),this.options.onReset(this),this.begin())},t.begin=function(){var n=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){n.strPos===0?n.typewrite(n.strings[n.sequence[n.arrayPos]],n.strPos):n.backspace(n.strings[n.sequence[n.arrayPos]],n.strPos)},this.startDelay)},t.typewrite=function(n,r){var i=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var s=this.humanizer(this.typeSpeed),o=1;this.pause.status!==!0?this.timeout=setTimeout(function(){r=Df.typeHtmlChars(n,r,i);var a=0,l=n.substring(r);if(l.charAt(0)==="^"&&/^\^\d+/.test(l)){var u=1;u+=(l=/\d+/.exec(l)[0]).length,a=parseInt(l),i.temporaryPause=!0,i.options.onTypingPaused(i.arrayPos,i),n=n.substring(0,r)+n.substring(r+u),i.toggleBlinking(!0)}if(l.charAt(0)==="`"){for(;n.substring(r+o).charAt(0)!=="`"&&(o++,!(r+o>n.length)););var c=n.substring(0,r),f=n.substring(c.length+1,r+o),d=n.substring(r+o+1);n=c+f+d,o--}i.timeout=setTimeout(function(){i.toggleBlinking(!1),r>=n.length?i.doneTyping(n,r):i.keepTyping(n,r,o),i.temporaryPause&&(i.temporaryPause=!1,i.options.onTypingResumed(i.arrayPos,i))},a)},s):this.setPauseStatus(n,r,!0)},t.keepTyping=function(n,r,i){r===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var s=n.substring(0,r+=i);this.replaceText(s),this.typewrite(n,r)},t.doneTyping=function(n,r){var i=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){i.backspace(n,r)},this.backDelay))},t.backspace=function(n,r){var i=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var s=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){r=Df.backSpaceHtmlChars(n,r,i);var o=n.substring(0,r);if(i.replaceText(o),i.smartBackspace){var a=i.strings[i.arrayPos+1];i.stopNum=a&&o===a.substring(0,r)?r:0}r>i.stopNum?(r--,i.backspace(n,r)):r<=i.stopNum&&(i.arrayPos++,i.arrayPos===i.strings.length?(i.arrayPos=0,i.options.onLastStringBackspaced(),i.shuffleStringsIfNeeded(),i.begin()):i.typewrite(i.strings[i.sequence[i.arrayPos]],r))},s)}else this.setPauseStatus(n,r,!1)},t.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},t.setPauseStatus=function(n,r,i){this.pause.typewrite=i,this.pause.curString=n,this.pause.curStrPos=r},t.toggleBlinking=function(n){this.cursor&&(this.pause.status||this.cursorBlinking!==n&&(this.cursorBlinking=n,n?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},t.humanizer=function(n){return Math.round(Math.random()*n/2)+n},t.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},t.initFadeOut=function(){var n=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){n.arrayPos++,n.replaceText(""),n.strings.length>n.arrayPos?n.typewrite(n.strings[n.sequence[n.arrayPos]],0):(n.typewrite(n.strings[0],0),n.arrayPos=0)},this.fadeOutDelay)},t.replaceText=function(n){this.attr?this.el.setAttribute(this.attr,n):this.isInput?this.el.value=n:this.contentType==="html"?this.el.innerHTML=n:this.el.textContent=n},t.bindFocusEvents=function(){var n=this;this.isInput&&(this.el.addEventListener("focus",function(r){n.stop()}),this.el.addEventListener("blur",function(r){n.el.value&&n.el.value.length!==0||n.start()}))},t.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},e}();const eE=P.memo(({style:e,className:t,typedRef:n,parseRef:r,stopped:i,children:s,startWhenVisible:o,...a})=>{const l=P.useRef(null),u=P.useMemo(()=>{var f;return[...Object.values(a).filter(d=>typeof d=="boolean"||typeof d=="number"||typeof d=="string"),(f=a.strings)==null?void 0:f.join(",")]},[a]);P.useEffect(()=>{const f=r&&r(l)||l.current,d=new ZS(f,{...a});if((i||o)&&(d==null||d.stop()),o){const m=new IntersectionObserver(([y])=>{y.isIntersecting&&(d==null||d.start(),m.disconnect())});m.observe(f)}return n&&d&&n(d),()=>{d.destroy()}},u);const c=s?Lt.cloneElement(s,{ref:l}):Lt.createElement("span",{style:e,ref:l});return Lt.createElement("span",{style:e,className:t,"data-testid":"react-typed"},c)}),tE=(...e)=>{console!=null&&console.warn&&($n(e[0])&&(e[0]=`react-i18next:: ${e[0]}`),console.warn(...e))},jf={},wu=(...e)=>{$n(e[0])&&jf[e[0]]||($n(e[0])&&(jf[e[0]]=new Date),tE(...e))},Fm=(e,t)=>()=>{if(e.isInitialized)t();else{const n=()=>{setTimeout(()=>{e.off("initialized",n)},0),t()};e.on("initialized",n)}},Mf=(e,t,n)=>{e.loadNamespaces(t,Fm(e,n))},$f=(e,t,n,r)=>{$n(n)&&(n=[n]),n.forEach(i=>{e.options.ns.indexOf(i)<0&&e.options.ns.push(i)}),e.loadLanguages(t,Fm(e,r))},nE=(e,t,n={})=>!t.languages||!t.languages.length?(wu("i18n.languages were undefined or empty",t.languages),!0):t.hasLoadedNamespace(e,{lng:n.lng,precheck:(r,i)=>{var s;if(((s=n.bindI18n)==null?void 0:s.indexOf("languageChanging"))>-1&&r.services.backendConnector.backend&&r.isLanguageChangingTo&&!i(r.isLanguageChangingTo,e))return!1}}),$n=e=>typeof e=="string",rE=e=>typeof e=="object"&&e!==null,iE=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,sE={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},oE=e=>sE[e],aE=e=>e.replace(iE,oE);let Su={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:aE};const lE=(e={})=>{Su={...Su,...e}},uE=()=>Su;let zm;const cE=e=>{zm=e},dE=()=>zm,fE={type:"3rdParty",init(e){lE(e.options.react),cE(e)}},hE=P.createContext();class pE{constructor(){this.usedNamespaces={}}addUsedNamespaces(t){t.forEach(n=>{var r;(r=this.usedNamespaces)[n]??(r[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const gE=(e,t)=>{const n=P.useRef();return P.useEffect(()=>{n.current=e},[e,t]),n.current},Bm=(e,t,n,r)=>e.getFixedT(t,n,r),mE=(e,t,n,r)=>P.useCallback(Bm(e,t,n,r),[e,t,n,r]),Hm=(e,t={})=>{var w,I,C,k;const{i18n:n}=t,{i18n:r,defaultNS:i}=P.useContext(hE)||{},s=n||r||dE();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new pE),!s){wu("You will need to pass in an i18next instance by using initReactI18next");const O=(L,B)=>$n(B)?B:rE(B)&&$n(B.defaultValue)?B.defaultValue:Array.isArray(L)?L[L.length-1]:L,D=[O,{},!1];return D.t=O,D.i18n={},D.ready=!1,D}(w=s.options.react)!=null&&w.wait&&wu("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const o={...uE(),...s.options.react,...t},{useSuspense:a,keyPrefix:l}=o;let u=i||((I=s.options)==null?void 0:I.defaultNS);u=$n(u)?[u]:u||["translation"],(k=(C=s.reportNamespaces).addUsedNamespaces)==null||k.call(C,u);const c=(s.isInitialized||s.initializedStoreOnce)&&u.every(O=>nE(O,s,o)),f=mE(s,t.lng||null,o.nsMode==="fallback"?u:u[0],l),d=()=>f,m=()=>Bm(s,t.lng||null,o.nsMode==="fallback"?u:u[0],l),[y,v]=P.useState(d);let _=u.join();t.lng&&(_=`${t.lng}${_}`);const p=gE(_),h=P.useRef(!0);P.useEffect(()=>{const{bindI18n:O,bindI18nStore:D}=o;h.current=!0,!c&&!a&&(t.lng?$f(s,t.lng,u,()=>{h.current&&v(m)}):Mf(s,u,()=>{h.current&&v(m)})),c&&p&&p!==_&&h.current&&v(m);const L=()=>{h.current&&v(m)};return O&&(s==null||s.on(O,L)),D&&(s==null||s.store.on(D,L)),()=>{h.current=!1,s&&(O==null||O.split(" ").forEach(B=>s.off(B,L))),D&&s&&D.split(" ").forEach(B=>s.store.off(B,L))}},[s,_]),P.useEffect(()=>{h.current&&c&&v(d)},[s,l,c]);const g=[y,s,c];if(g.t=y,g.i18n=s,g.ready=c,c||!c&&!a)return g;throw new Promise(O=>{t.lng?$f(s,t.lng,u,()=>O()):Mf(s,u,()=>O())})},Se={mainColor:"rgb(150, 0, 200)",mainColorLight:"rgb(100, 100, 200)",secondaryColor:"rgb(200, 150, 250)",textColor:"rgb(250, 250, 250)",alerts:{error:"rgb(255, 100, 100)",warning:"rgb(255, 255, 100)",success:"rgb(50, 128, 50)"}};function yE(){const e=P.useRef(null),t=()=>{e.current.classList.toggle("responsive_nav")};return S.jsxs(vE,{children:[S.jsx("h3",{children:"Schoolish"}),S.jsxs("nav",{ref:e,children:[S.jsx("a",{href:"/#",children:S.jsx("span",{children:"Home"})}),S.jsx("a",{href:"/#",children:S.jsx("span",{children:"My work"})}),S.jsx("a",{href:"/#",children:S.jsx("span",{children:"Blog"})}),S.jsx("a",{href:"/#",children:S.jsx("span",{children:"About me"})}),S.jsx("button",{className:"nav-btn nav-close-btn",onClick:t,children:S.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",viewBox:"0 0 16 16",children:S.jsx("path",{d:"M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"})})})]}),S.jsx("button",{className:"nav-btn",onClick:t,children:S.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",viewBox:"0 0 16 16",children:S.jsx("path",{fillRule:"evenodd",d:"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"})})})]})}const vE=qr.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  width: 100vw;
  padding: 0 2rem;
  background-color: ${Se.mainColor};
  color: ${Se.textColor};
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;

  z-index: 1000;
`;function tt({height:e}){return S.jsx("div",{className:"separator",style:{height:e}})}function Ls({title:e,subtitle:t,text:n,image:r}){return S.jsxs("div",{className:"homeBlock",children:[S.jsxs("div",{className:"texts",children:[S.jsx("div",{className:"subtitle",style:{display:"flex",alignItems:"center"},children:S.jsx("span",{style:{color:t.color||"black",fontWeight:t.weight,textTransform:"uppercase"},children:t.text})}),S.jsx(tt,{height:"10px"}),S.jsx("h1",{style:{color:e.color||"black",fontWeight:e.weight},children:e.text}),S.jsx(tt,{height:"5px"}),S.jsx("p",{style:{color:n.color||"black",fontWeight:n.weight},children:n.text})]}),S.jsx("div",{className:"image",children:r.imageURL&&S.jsx("img",{src:r.imageURL,alt:r.imageAlt})})]})}/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var Vm=SE,Uf=EE,wE=Object.prototype.toString,Ds=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function SE(e,t){if(typeof e!="string")throw new TypeError("argument str must be a string");for(var n={},r=t||{},i=r.decode||_E,s=0;s<e.length;){var o=e.indexOf("=",s);if(o===-1)break;var a=e.indexOf(";",s);if(a===-1)a=e.length;else if(a<o){s=e.lastIndexOf(";",o-1)+1;continue}var l=e.slice(s,o).trim();if(n[l]===void 0){var u=e.slice(o+1,a).trim();u.charCodeAt(0)===34&&(u=u.slice(1,-1)),n[l]=CE(u,i)}s=a+1}return n}function EE(e,t,n){var r=n||{},i=r.encode||kE;if(typeof i!="function")throw new TypeError("option encode is invalid");if(!Ds.test(e))throw new TypeError("argument name is invalid");var s=i(t);if(s&&!Ds.test(s))throw new TypeError("argument val is invalid");var o=e+"="+s;if(r.maxAge!=null){var a=r.maxAge-0;if(isNaN(a)||!isFinite(a))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(a)}if(r.domain){if(!Ds.test(r.domain))throw new TypeError("option domain is invalid");o+="; Domain="+r.domain}if(r.path){if(!Ds.test(r.path))throw new TypeError("option path is invalid");o+="; Path="+r.path}if(r.expires){var l=r.expires;if(!IE(l)||isNaN(l.valueOf()))throw new TypeError("option expires is invalid");o+="; Expires="+l.toUTCString()}if(r.httpOnly&&(o+="; HttpOnly"),r.secure&&(o+="; Secure"),r.partitioned&&(o+="; Partitioned"),r.priority){var u=typeof r.priority=="string"?r.priority.toLowerCase():r.priority;switch(u){case"low":o+="; Priority=Low";break;case"medium":o+="; Priority=Medium";break;case"high":o+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(r.sameSite){var c=typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite;switch(c){case!0:o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"strict":o+="; SameSite=Strict";break;case"none":o+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return o}function _E(e){return e.indexOf("%")!==-1?decodeURIComponent(e):e}function kE(e){return encodeURIComponent(e)}function IE(e){return wE.call(e)==="[object Date]"||e instanceof Date}function CE(e,t){try{return t(e)}catch{return e}}function bE(){const e=typeof global>"u"?void 0:global.TEST_HAS_DOCUMENT_COOKIE;return typeof e=="boolean"?e:typeof document=="object"&&typeof document.cookie=="string"}function xE(e){return typeof e=="string"?Vm(e):typeof e=="object"&&e!==null?e:{}}function rl(e,t={}){const n=TE(e);if(!t.doNotParse)try{return JSON.parse(n)}catch{}return e}function TE(e){return e&&e[0]==="j"&&e[1]===":"?e.substr(2):e}class PE{constructor(t,n={}){this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.update=()=>{if(!this.HAS_DOCUMENT_COOKIE)return;const i=this.cookies;this.cookies=Vm(document.cookie),this._checkChanges(i)};const r=typeof document>"u"?"":document.cookie;this.cookies=xE(t||r),this.defaultSetOptions=n,this.HAS_DOCUMENT_COOKIE=bE()}_emitChange(t){for(let n=0;n<this.changeListeners.length;++n)this.changeListeners[n](t)}_checkChanges(t){new Set(Object.keys(t).concat(Object.keys(this.cookies))).forEach(r=>{t[r]!==this.cookies[r]&&this._emitChange({name:r,value:rl(this.cookies[r])})})}_startPolling(){this.pollingInterval=setInterval(this.update,300)}_stopPolling(){this.pollingInterval&&clearInterval(this.pollingInterval)}get(t,n={}){return n.doNotUpdate||this.update(),rl(this.cookies[t],n)}getAll(t={}){t.doNotUpdate||this.update();const n={};for(let r in this.cookies)n[r]=rl(this.cookies[r],t);return n}set(t,n,r){r?r=Object.assign(Object.assign({},this.defaultSetOptions),r):r=this.defaultSetOptions;const i=typeof n=="string"?n:JSON.stringify(n);this.cookies=Object.assign(Object.assign({},this.cookies),{[t]:i}),this.HAS_DOCUMENT_COOKIE&&(document.cookie=Uf(t,i,r)),this._emitChange({name:t,value:n,options:r})}remove(t,n){const r=n=Object.assign(Object.assign(Object.assign({},this.defaultSetOptions),n),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=Object.assign({},this.cookies),delete this.cookies[t],this.HAS_DOCUMENT_COOKIE&&(document.cookie=Uf(t,"",r)),this._emitChange({name:t,value:void 0,options:n})}addChangeListener(t){this.changeListeners.push(t),this.HAS_DOCUMENT_COOKIE&&this.changeListeners.length===1&&(typeof window=="object"&&"cookieStore"in window?window.cookieStore.addEventListener("change",this.update):this._startPolling())}removeChangeListener(t){const n=this.changeListeners.indexOf(t);n>=0&&this.changeListeners.splice(n,1),this.HAS_DOCUMENT_COOKIE&&this.changeListeners.length===0&&(typeof window=="object"&&"cookieStore"in window?window.cookieStore.removeEventListener("change",this.update):this._stopPolling())}}const OE={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){console&&console[e]&&console[e].apply(console,t)}};let RE=class Eu{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(t,n)}init(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=n.prefix||"i18next:",this.logger=t||OE,this.options=n,this.debug=n.debug}log(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"log","",!0)}warn(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"warn","",!0)}error(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"error","")}deprecate(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"warn","WARNING DEPRECATED: ",!0)}forward(t,n,r,i){return i&&!this.debug?null:(typeof t[0]=="string"&&(t[0]=`${r}${this.prefix} ${t[0]}`),this.logger[n](t))}create(t){return new Eu(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new Eu(this.logger,t)}};var gt=new RE;class ya{constructor(){this.observers={}}on(t,n){return t.split(" ").forEach(r=>{this.observers[r]||(this.observers[r]=new Map);const i=this.observers[r].get(n)||0;this.observers[r].set(n,i+1)}),this}off(t,n){if(this.observers[t]){if(!n){delete this.observers[t];return}this.observers[t].delete(n)}}emit(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];this.observers[t]&&Array.from(this.observers[t].entries()).forEach(o=>{let[a,l]=o;for(let u=0;u<l;u++)a(...r)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(o=>{let[a,l]=o;for(let u=0;u<l;u++)a.apply(a,[t,...r])})}}function si(){let e,t;const n=new Promise((r,i)=>{e=r,t=i});return n.resolve=e,n.reject=t,n}function Ff(e){return e==null?"":""+e}function NE(e,t,n){e.forEach(r=>{t[r]&&(n[r]=t[r])})}const AE=/###/g;function Ci(e,t,n){function r(a){return a&&a.indexOf("###")>-1?a.replace(AE,"."):a}function i(){return!e||typeof e=="string"}const s=typeof t!="string"?t:t.split(".");let o=0;for(;o<s.length-1;){if(i())return{};const a=r(s[o]);!e[a]&&n&&(e[a]=new n),Object.prototype.hasOwnProperty.call(e,a)?e=e[a]:e={},++o}return i()?{}:{obj:e,k:r(s[o])}}function zf(e,t,n){const{obj:r,k:i}=Ci(e,t,Object);if(r!==void 0||t.length===1){r[i]=n;return}let s=t[t.length-1],o=t.slice(0,t.length-1),a=Ci(e,o,Object);for(;a.obj===void 0&&o.length;)s=`${o[o.length-1]}.${s}`,o=o.slice(0,o.length-1),a=Ci(e,o,Object),a&&a.obj&&typeof a.obj[`${a.k}.${s}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${s}`]=n}function LE(e,t,n,r){const{obj:i,k:s}=Ci(e,t,Object);i[s]=i[s]||[],i[s].push(n)}function jo(e,t){const{obj:n,k:r}=Ci(e,t);if(n)return n[r]}function DE(e,t,n){const r=jo(e,n);return r!==void 0?r:jo(t,n)}function Wm(e,t,n){for(const r in t)r!=="__proto__"&&r!=="constructor"&&(r in e?typeof e[r]=="string"||e[r]instanceof String||typeof t[r]=="string"||t[r]instanceof String?n&&(e[r]=t[r]):Wm(e[r],t[r],n):e[r]=t[r]);return e}function rr(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var jE={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function ME(e){return typeof e=="string"?e.replace(/[&<>"'\/]/g,t=>jE[t]):e}class $E{constructor(t){this.capacity=t,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(t){const n=this.regExpMap.get(t);if(n!==void 0)return n;const r=new RegExp(t);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(t,r),this.regExpQueue.push(t),r}}const UE=[" ",",","?","!",";"],FE=new $E(20);function zE(e,t,n){t=t||"",n=n||"";const r=UE.filter(o=>t.indexOf(o)<0&&n.indexOf(o)<0);if(r.length===0)return!0;const i=FE.getRegExp(`(${r.map(o=>o==="?"?"\\?":o).join("|")})`);let s=!i.test(e);if(!s){const o=e.indexOf(n);o>0&&!i.test(e.substring(0,o))&&(s=!0)}return s}function _u(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!e)return;if(e[t])return e[t];const r=t.split(n);let i=e;for(let s=0;s<r.length;){if(!i||typeof i!="object")return;let o,a="";for(let l=s;l<r.length;++l)if(l!==s&&(a+=n),a+=r[l],o=i[a],o!==void 0){if(["string","number","boolean"].indexOf(typeof o)>-1&&l<r.length-1)continue;s+=l-s+1;break}i=o}return i}function Mo(e){return e&&e.indexOf("_")>0?e.replace("_","-"):e}class Bf extends ya{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const n=this.options.ns.indexOf(t);n>-1&&this.options.ns.splice(n,1)}getResource(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const s=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,o=i.ignoreJSONStructure!==void 0?i.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;t.indexOf(".")>-1?a=t.split("."):(a=[t,n],r&&(Array.isArray(r)?a.push(...r):typeof r=="string"&&s?a.push(...r.split(s)):a.push(r)));const l=jo(this.data,a);return!l&&!n&&!r&&t.indexOf(".")>-1&&(t=a[0],n=a[1],r=a.slice(2).join(".")),l||!o||typeof r!="string"?l:_u(this.data&&this.data[t]&&this.data[t][n],r,s)}addResource(t,n,r,i){let s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const o=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator;let a=[t,n];r&&(a=a.concat(o?r.split(o):r)),t.indexOf(".")>-1&&(a=t.split("."),i=n,n=a[1]),this.addNamespaces(n),zf(this.data,a,i),s.silent||this.emit("added",t,n,r,i)}addResources(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const s in r)(typeof r[s]=="string"||Array.isArray(r[s]))&&this.addResource(t,n,s,r[s],{silent:!0});i.silent||this.emit("added",t,n,r)}addResourceBundle(t,n,r,i,s){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},a=[t,n];t.indexOf(".")>-1&&(a=t.split("."),i=r,r=n,n=a[1]),this.addNamespaces(n);let l=jo(this.data,a)||{};o.skipCopy||(r=JSON.parse(JSON.stringify(r))),i?Wm(l,r,s):l={...l,...r},zf(this.data,a,l),o.silent||this.emit("added",t,n,r)}removeResourceBundle(t,n){this.hasResourceBundle(t,n)&&delete this.data[t][n],this.removeNamespaces(n),this.emit("removed",t,n)}hasResourceBundle(t,n){return this.getResource(t,n)!==void 0}getResourceBundle(t,n){return n||(n=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(t,n)}:this.getResource(t,n)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const n=this.getDataByLanguage(t);return!!(n&&Object.keys(n)||[]).find(i=>n[i]&&Object.keys(n[i]).length>0)}toJSON(){return this.data}}var Km={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,i){return e.forEach(s=>{this.processors[s]&&(t=this.processors[s].process(t,n,r,i))}),t}};const Hf={};class $o extends ya{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),NE(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=gt.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(t==null)return!1;const r=this.resolve(t,n);return r&&r.res!==void 0}extractFromKey(t,n){let r=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;r===void 0&&(r=":");const i=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let s=n.ns||this.options.defaultNS||[];const o=r&&t.indexOf(r)>-1,a=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!zE(t,r,i);if(o&&!a){const l=t.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:t,namespaces:s};const u=t.split(r);(r!==i||r===i&&this.options.ns.indexOf(u[0])>-1)&&(s=u.shift()),t=u.join(i)}return typeof s=="string"&&(s=[s]),{key:t,namespaces:s}}translate(t,n,r){if(typeof n!="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof n=="object"&&(n={...n}),n||(n={}),t==null)return"";Array.isArray(t)||(t=[String(t)]);const i=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,s=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,{key:o,namespaces:a}=this.extractFromKey(t[t.length-1],n),l=a[a.length-1],u=n.lng||this.language,c=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(u&&u.toLowerCase()==="cimode"){if(c){const w=n.nsSeparator||this.options.nsSeparator;return i?{res:`${l}${w}${o}`,usedKey:o,exactUsedKey:o,usedLng:u,usedNS:l,usedParams:this.getUsedParamsDetails(n)}:`${l}${w}${o}`}return i?{res:o,usedKey:o,exactUsedKey:o,usedLng:u,usedNS:l,usedParams:this.getUsedParamsDetails(n)}:o}const f=this.resolve(t,n);let d=f&&f.res;const m=f&&f.usedKey||o,y=f&&f.exactUsedKey||o,v=Object.prototype.toString.apply(d),_=["[object Number]","[object Function]","[object RegExp]"],p=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,h=!this.i18nFormat||this.i18nFormat.handleAsObject;if(h&&d&&(typeof d!="string"&&typeof d!="boolean"&&typeof d!="number")&&_.indexOf(v)<0&&!(typeof p=="string"&&Array.isArray(d))){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const w=this.options.returnedObjectHandler?this.options.returnedObjectHandler(m,d,{...n,ns:a}):`key '${o} (${this.language})' returned an object instead of string.`;return i?(f.res=w,f.usedParams=this.getUsedParamsDetails(n),f):w}if(s){const w=Array.isArray(d),I=w?[]:{},C=w?y:m;for(const k in d)if(Object.prototype.hasOwnProperty.call(d,k)){const O=`${C}${s}${k}`;I[k]=this.translate(O,{...n,joinArrays:!1,ns:a}),I[k]===O&&(I[k]=d[k])}d=I}}else if(h&&typeof p=="string"&&Array.isArray(d))d=d.join(p),d&&(d=this.extendTranslation(d,t,n,r));else{let w=!1,I=!1;const C=n.count!==void 0&&typeof n.count!="string",k=$o.hasDefaultValue(n),O=C?this.pluralResolver.getSuffix(u,n.count,n):"",D=n.ordinal&&C?this.pluralResolver.getSuffix(u,n.count,{ordinal:!1}):"",L=C&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),B=L&&n[`defaultValue${this.options.pluralSeparator}zero`]||n[`defaultValue${O}`]||n[`defaultValue${D}`]||n.defaultValue;!this.isValidLookup(d)&&k&&(w=!0,d=B),this.isValidLookup(d)||(I=!0,d=o);const Ze=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&I?void 0:d,Te=k&&B!==d&&this.options.updateMissing;if(I||w||Te){if(this.logger.log(Te?"updateKey":"missingKey",u,l,o,Te?B:d),s){const b=this.resolve(o,{...n,keySeparator:!1});b&&b.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let E=[];const x=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&x&&x[0])for(let b=0;b<x.length;b++)E.push(x[b]);else this.options.saveMissingTo==="all"?E=this.languageUtils.toResolveHierarchy(n.lng||this.language):E.push(n.lng||this.language);const j=(b,R,N)=>{const F=k&&N!==d?N:Ze;this.options.missingKeyHandler?this.options.missingKeyHandler(b,l,R,F,Te,n):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(b,l,R,F,Te,n),this.emit("missingKey",b,l,R,d)};this.options.saveMissing&&(this.options.saveMissingPlurals&&C?E.forEach(b=>{const R=this.pluralResolver.getSuffixes(b,n);L&&n[`defaultValue${this.options.pluralSeparator}zero`]&&R.indexOf(`${this.options.pluralSeparator}zero`)<0&&R.push(`${this.options.pluralSeparator}zero`),R.forEach(N=>{j([b],o+N,n[`defaultValue${N}`]||B)})}):j(E,o,B))}d=this.extendTranslation(d,t,n,f,r),I&&d===o&&this.options.appendNamespaceToMissingKey&&(d=`${l}:${o}`),(I||w)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?d=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${o}`:o,w?d:void 0):d=this.options.parseMissingKeyHandler(d))}return i?(f.res=d,f.usedParams=this.getUsedParamsDetails(n),f):d}extendTranslation(t,n,r,i,s){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...r},r.lng||this.language||i.usedLng,i.usedNS,i.usedKey,{resolved:i});else if(!r.skipInterpolation){r.interpolation&&this.interpolator.init({...r,interpolation:{...this.options.interpolation,...r.interpolation}});const u=typeof t=="string"&&(r&&r.interpolation&&r.interpolation.skipOnVariables!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let c;if(u){const d=t.match(this.interpolator.nestingRegexp);c=d&&d.length}let f=r.replace&&typeof r.replace!="string"?r.replace:r;if(this.options.interpolation.defaultVariables&&(f={...this.options.interpolation.defaultVariables,...f}),t=this.interpolator.interpolate(t,f,r.lng||this.language||i.usedLng,r),u){const d=t.match(this.interpolator.nestingRegexp),m=d&&d.length;c<m&&(r.nest=!1)}!r.lng&&this.options.compatibilityAPI!=="v1"&&i&&i.res&&(r.lng=this.language||i.usedLng),r.nest!==!1&&(t=this.interpolator.nest(t,function(){for(var d=arguments.length,m=new Array(d),y=0;y<d;y++)m[y]=arguments[y];return s&&s[0]===m[0]&&!r.context?(o.logger.warn(`It seems you are nesting recursively key: ${m[0]} in key: ${n[0]}`),null):o.translate(...m,n)},r)),r.interpolation&&this.interpolator.reset()}const a=r.postProcess||this.options.postProcess,l=typeof a=="string"?[a]:a;return t!=null&&l&&l.length&&r.applyPostProcessor!==!1&&(t=Km.handle(l,t,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...i,usedParams:this.getUsedParamsDetails(r)},...r}:r,this)),t}resolve(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r,i,s,o,a;return typeof t=="string"&&(t=[t]),t.forEach(l=>{if(this.isValidLookup(r))return;const u=this.extractFromKey(l,n),c=u.key;i=c;let f=u.namespaces;this.options.fallbackNS&&(f=f.concat(this.options.fallbackNS));const d=n.count!==void 0&&typeof n.count!="string",m=d&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),y=n.context!==void 0&&(typeof n.context=="string"||typeof n.context=="number")&&n.context!=="",v=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);f.forEach(_=>{this.isValidLookup(r)||(a=_,!Hf[`${v[0]}-${_}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(a)&&(Hf[`${v[0]}-${_}`]=!0,this.logger.warn(`key "${i}" for languages "${v.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),v.forEach(p=>{if(this.isValidLookup(r))return;o=p;const h=[c];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(h,c,p,_,n);else{let w;d&&(w=this.pluralResolver.getSuffix(p,n.count,n));const I=`${this.options.pluralSeparator}zero`,C=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(d&&(h.push(c+w),n.ordinal&&w.indexOf(C)===0&&h.push(c+w.replace(C,this.options.pluralSeparator)),m&&h.push(c+I)),y){const k=`${c}${this.options.contextSeparator}${n.context}`;h.push(k),d&&(h.push(k+w),n.ordinal&&w.indexOf(C)===0&&h.push(k+w.replace(C,this.options.pluralSeparator)),m&&h.push(k+I))}}let g;for(;g=h.pop();)this.isValidLookup(r)||(s=g,r=this.getResource(p,_,g,n))}))})}),{res:r,usedKey:i,exactUsedKey:s,usedLng:o,usedNS:a}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(t,n,r,i):this.resourceStore.getResource(t,n,r,i)}getUsedParamsDetails(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],r=t.replace&&typeof t.replace!="string";let i=r?t.replace:t;if(r&&typeof t.count<"u"&&(i.count=t.count),this.options.interpolation.defaultVariables&&(i={...this.options.interpolation.defaultVariables,...i}),!r){i={...i};for(const s of n)delete i[s]}return i}static hasDefaultValue(t){const n="defaultValue";for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&n===r.substring(0,n.length)&&t[r]!==void 0)return!0;return!1}}function il(e){return e.charAt(0).toUpperCase()+e.slice(1)}class Vf{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=gt.create("languageUtils")}getScriptPartFromCode(t){if(t=Mo(t),!t||t.indexOf("-")<0)return null;const n=t.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(t){if(t=Mo(t),!t||t.indexOf("-")<0)return t;const n=t.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(t){if(typeof t=="string"&&t.indexOf("-")>-1){const n=["hans","hant","latn","cyrl","cans","mong","arab"];let r=t.split("-");return this.options.lowerCaseLng?r=r.map(i=>i.toLowerCase()):r.length===2?(r[0]=r[0].toLowerCase(),r[1]=r[1].toUpperCase(),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=il(r[1].toLowerCase()))):r.length===3&&(r[0]=r[0].toLowerCase(),r[1].length===2&&(r[1]=r[1].toUpperCase()),r[0]!=="sgn"&&r[2].length===2&&(r[2]=r[2].toUpperCase()),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=il(r[1].toLowerCase())),n.indexOf(r[2].toLowerCase())>-1&&(r[2]=il(r[2].toLowerCase()))),r.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let n;return t.forEach(r=>{if(n)return;const i=this.formatLanguageCode(r);(!this.options.supportedLngs||this.isSupportedCode(i))&&(n=i)}),!n&&this.options.supportedLngs&&t.forEach(r=>{if(n)return;const i=this.getLanguagePartFromCode(r);if(this.isSupportedCode(i))return n=i;n=this.options.supportedLngs.find(s=>{if(s===i)return s;if(!(s.indexOf("-")<0&&i.indexOf("-")<0)&&(s.indexOf("-")>0&&i.indexOf("-")<0&&s.substring(0,s.indexOf("-"))===i||s.indexOf(i)===0&&i.length>1))return s})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(t,n){if(!t)return[];if(typeof t=="function"&&(t=t(n)),typeof t=="string"&&(t=[t]),Array.isArray(t))return t;if(!n)return t.default||[];let r=t[n];return r||(r=t[this.getScriptPartFromCode(n)]),r||(r=t[this.formatLanguageCode(n)]),r||(r=t[this.getLanguagePartFromCode(n)]),r||(r=t.default),r||[]}toResolveHierarchy(t,n){const r=this.getFallbackCodes(n||this.options.fallbackLng||[],t),i=[],s=o=>{o&&(this.isSupportedCode(o)?i.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return typeof t=="string"&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&s(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&s(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&s(this.getLanguagePartFromCode(t))):typeof t=="string"&&s(this.formatLanguageCode(t)),r.forEach(o=>{i.indexOf(o)<0&&s(this.formatLanguageCode(o))}),i}}let BE=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],HE={1:function(e){return+(e>1)},2:function(e){return+(e!=1)},3:function(e){return 0},4:function(e){return e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2},5:function(e){return e==0?0:e==1?1:e==2?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5},6:function(e){return e==1?0:e>=2&&e<=4?1:2},7:function(e){return e==1?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2},8:function(e){return e==1?0:e==2?1:e!=8&&e!=11?2:3},9:function(e){return+(e>=2)},10:function(e){return e==1?0:e==2?1:e<7?2:e<11?3:4},11:function(e){return e==1||e==11?0:e==2||e==12?1:e>2&&e<20?2:3},12:function(e){return+(e%10!=1||e%100==11)},13:function(e){return+(e!==0)},14:function(e){return e==1?0:e==2?1:e==3?2:3},15:function(e){return e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2},16:function(e){return e%10==1&&e%100!=11?0:e!==0?1:2},17:function(e){return e==1||e%10==1&&e%100!=11?0:1},18:function(e){return e==0?0:e==1?1:2},19:function(e){return e==1?0:e==0||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3},20:function(e){return e==1?0:e==0||e%100>0&&e%100<20?1:2},21:function(e){return e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0},22:function(e){return e==1?0:e==2?1:(e<0||e>10)&&e%10==0?2:3}};const VE=["v1","v2","v3"],WE=["v4"],Wf={zero:0,one:1,two:2,few:3,many:4,other:5};function KE(){const e={};return BE.forEach(t=>{t.lngs.forEach(n=>{e[n]={numbers:t.nr,plurals:HE[t.fc]}})}),e}class qE{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=t,this.options=n,this.logger=gt.create("pluralResolver"),(!this.options.compatibilityJSON||WE.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=KE()}addRule(t,n){this.rules[t]=n}getRule(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(Mo(t==="dev"?"en":t),{type:n.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[t]||this.rules[this.languageUtils.getLanguagePartFromCode(t)]}needsPlural(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(t,n);return this.shouldUseIntlApi()?r&&r.resolvedOptions().pluralCategories.length>1:r&&r.numbers.length>1}getPluralFormsOfKey(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(t,r).map(i=>`${n}${i}`)}getSuffixes(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(t,n);return r?this.shouldUseIntlApi()?r.resolvedOptions().pluralCategories.sort((i,s)=>Wf[i]-Wf[s]).map(i=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${i}`):r.numbers.map(i=>this.getSuffix(t,i,n)):[]}getSuffix(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const i=this.getRule(t,r);return i?this.shouldUseIntlApi()?`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${i.select(n)}`:this.getSuffixRetroCompatible(i,n):(this.logger.warn(`no plural rule found for: ${t}`),"")}getSuffixRetroCompatible(t,n){const r=t.noAbs?t.plurals(n):t.plurals(Math.abs(n));let i=t.numbers[r];this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1&&(i===2?i="plural":i===1&&(i=""));const s=()=>this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString();return this.options.compatibilityJSON==="v1"?i===1?"":typeof i=="number"?`_plural_${i.toString()}`:s():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1?s():this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString()}shouldUseIntlApi(){return!VE.includes(this.options.compatibilityJSON)}}function Kf(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,s=DE(e,t,n);return!s&&i&&typeof n=="string"&&(s=_u(e,n,r),s===void 0&&(s=_u(t,n,r))),s}class GE{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=gt.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||(n=>n),this.init(t)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const{escape:n,escapeValue:r,useRawValueToEscape:i,prefix:s,prefixEscaped:o,suffix:a,suffixEscaped:l,formatSeparator:u,unescapeSuffix:c,unescapePrefix:f,nestingPrefix:d,nestingPrefixEscaped:m,nestingSuffix:y,nestingSuffixEscaped:v,nestingOptionsSeparator:_,maxReplaces:p,alwaysFormat:h}=t.interpolation;this.escape=n!==void 0?n:ME,this.escapeValue=r!==void 0?r:!0,this.useRawValueToEscape=i!==void 0?i:!1,this.prefix=s?rr(s):o||"{{",this.suffix=a?rr(a):l||"}}",this.formatSeparator=u||",",this.unescapePrefix=c?"":f||"-",this.unescapeSuffix=this.unescapePrefix?"":c||"",this.nestingPrefix=d?rr(d):m||rr("$t("),this.nestingSuffix=y?rr(y):v||rr(")"),this.nestingOptionsSeparator=_||",",this.maxReplaces=p||1e3,this.alwaysFormat=h!==void 0?h:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=(n,r)=>n&&n.source===r?(n.lastIndex=0,n):new RegExp(r,"g");this.regexp=t(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=t(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=t(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(t,n,r,i){let s,o,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function u(y){return y.replace(/\$/g,"$$$$")}const c=y=>{if(y.indexOf(this.formatSeparator)<0){const h=Kf(n,l,y,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(h,void 0,r,{...i,...n,interpolationkey:y}):h}const v=y.split(this.formatSeparator),_=v.shift().trim(),p=v.join(this.formatSeparator).trim();return this.format(Kf(n,l,_,this.options.keySeparator,this.options.ignoreJSONStructure),p,r,{...i,...n,interpolationkey:_})};this.resetRegExp();const f=i&&i.missingInterpolationHandler||this.options.missingInterpolationHandler,d=i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:y=>u(y)},{regex:this.regexp,safeValue:y=>this.escapeValue?u(this.escape(y)):u(y)}].forEach(y=>{for(a=0;s=y.regex.exec(t);){const v=s[1].trim();if(o=c(v),o===void 0)if(typeof f=="function"){const p=f(t,s,i);o=typeof p=="string"?p:""}else if(i&&Object.prototype.hasOwnProperty.call(i,v))o="";else if(d){o=s[0];continue}else this.logger.warn(`missed to pass in variable ${v} for interpolating ${t}`),o="";else typeof o!="string"&&!this.useRawValueToEscape&&(o=Ff(o));const _=y.safeValue(o);if(t=t.replace(s[0],_),d?(y.regex.lastIndex+=o.length,y.regex.lastIndex-=s[0].length):y.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),t}nest(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i,s,o;function a(l,u){const c=this.nestingOptionsSeparator;if(l.indexOf(c)<0)return l;const f=l.split(new RegExp(`${c}[ ]*{`));let d=`{${f[1]}`;l=f[0],d=this.interpolate(d,o);const m=d.match(/'/g),y=d.match(/"/g);(m&&m.length%2===0&&!y||y.length%2!==0)&&(d=d.replace(/'/g,'"'));try{o=JSON.parse(d),u&&(o={...u,...o})}catch(v){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,v),`${l}${c}${d}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,l}for(;i=this.nestingRegexp.exec(t);){let l=[];o={...r},o=o.replace&&typeof o.replace!="string"?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let u=!1;if(i[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(i[1])){const c=i[1].split(this.formatSeparator).map(f=>f.trim());i[1]=c.shift(),l=c,u=!0}if(s=n(a.call(this,i[1].trim(),o),o),s&&i[0]===t&&typeof s!="string")return s;typeof s!="string"&&(s=Ff(s)),s||(this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`),s=""),u&&(s=l.reduce((c,f)=>this.format(c,f,r.lng,{...r,interpolationkey:i[1].trim()}),s.trim())),t=t.replace(i[0],s),this.regexp.lastIndex=0}return t}}function JE(e){let t=e.toLowerCase().trim();const n={};if(e.indexOf("(")>-1){const r=e.split("(");t=r[0].toLowerCase().trim();const i=r[1].substring(0,r[1].length-1);t==="currency"&&i.indexOf(":")<0?n.currency||(n.currency=i.trim()):t==="relativetime"&&i.indexOf(":")<0?n.range||(n.range=i.trim()):i.split(";").forEach(o=>{if(o){const[a,...l]=o.split(":"),u=l.join(":").trim().replace(/^'+|'+$/g,""),c=a.trim();n[c]||(n[c]=u),u==="false"&&(n[c]=!1),u==="true"&&(n[c]=!0),isNaN(u)||(n[c]=parseInt(u,10))}})}return{formatName:t,formatOptions:n}}function ir(e){const t={};return function(r,i,s){const o=i+JSON.stringify(s);let a=t[o];return a||(a=e(Mo(i),s),t[o]=a),a(r)}}class QE{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=gt.create("formatter"),this.options=t,this.formats={number:ir((n,r)=>{const i=new Intl.NumberFormat(n,{...r});return s=>i.format(s)}),currency:ir((n,r)=>{const i=new Intl.NumberFormat(n,{...r,style:"currency"});return s=>i.format(s)}),datetime:ir((n,r)=>{const i=new Intl.DateTimeFormat(n,{...r});return s=>i.format(s)}),relativetime:ir((n,r)=>{const i=new Intl.RelativeTimeFormat(n,{...r});return s=>i.format(s,r.range||"day")}),list:ir((n,r)=>{const i=new Intl.ListFormat(n,{...r});return s=>i.format(s)})},this.init(t)}init(t){const r=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}}).interpolation;this.formatSeparator=r.formatSeparator?r.formatSeparator:r.formatSeparator||","}add(t,n){this.formats[t.toLowerCase().trim()]=n}addCached(t,n){this.formats[t.toLowerCase().trim()]=ir(n)}format(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return n.split(this.formatSeparator).reduce((a,l)=>{const{formatName:u,formatOptions:c}=JE(l);if(this.formats[u]){let f=a;try{const d=i&&i.formatParams&&i.formatParams[i.interpolationkey]||{},m=d.locale||d.lng||i.locale||i.lng||r;f=this.formats[u](a,m,{...c,...i,...d})}catch(d){this.logger.warn(d)}return f}else this.logger.warn(`there was no format function for ${u}`);return a},t)}}function YE(e,t){e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)}class XE extends ya{constructor(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=t,this.store=n,this.services=r,this.languageUtils=r.languageUtils,this.options=i,this.logger=gt.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=i.maxParallelReads||10,this.readingCalls=0,this.maxRetries=i.maxRetries>=0?i.maxRetries:5,this.retryTimeout=i.retryTimeout>=1?i.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(r,i.backend,i)}queueLoad(t,n,r,i){const s={},o={},a={},l={};return t.forEach(u=>{let c=!0;n.forEach(f=>{const d=`${u}|${f}`;!r.reload&&this.store.hasResourceBundle(u,f)?this.state[d]=2:this.state[d]<0||(this.state[d]===1?o[d]===void 0&&(o[d]=!0):(this.state[d]=1,c=!1,o[d]===void 0&&(o[d]=!0),s[d]===void 0&&(s[d]=!0),l[f]===void 0&&(l[f]=!0)))}),c||(a[u]=!0)}),(Object.keys(s).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:i}),{toLoad:Object.keys(s),pending:Object.keys(o),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(t,n,r){const i=t.split("|"),s=i[0],o=i[1];n&&this.emit("failedLoading",s,o,n),r&&this.store.addResourceBundle(s,o,r,void 0,void 0,{skipCopy:!0}),this.state[t]=n?-1:2;const a={};this.queue.forEach(l=>{LE(l.loaded,[s],o),YE(l,t),n&&l.errors.push(n),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(u=>{a[u]||(a[u]={});const c=l.loaded[u];c.length&&c.forEach(f=>{a[u][f]===void 0&&(a[u][f]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!t.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:n,fcName:r,tried:i,wait:s,callback:o});return}this.readingCalls++;const a=(u,c)=>{if(this.readingCalls--,this.waitingReads.length>0){const f=this.waitingReads.shift();this.read(f.lng,f.ns,f.fcName,f.tried,f.wait,f.callback)}if(u&&c&&i<this.maxRetries){setTimeout(()=>{this.read.call(this,t,n,r,i+1,s*2,o)},s);return}o(u,c)},l=this.backend[r].bind(this.backend);if(l.length===2){try{const u=l(t,n);u&&typeof u.then=="function"?u.then(c=>a(null,c)).catch(a):a(null,u)}catch(u){a(u)}return}return l(t,n,a)}prepareLoading(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),i&&i();typeof t=="string"&&(t=this.languageUtils.toResolveHierarchy(t)),typeof n=="string"&&(n=[n]);const s=this.queueLoad(t,n,r,i);if(!s.toLoad.length)return s.pending.length||i(),null;s.toLoad.forEach(o=>{this.loadOne(o)})}load(t,n,r){this.prepareLoading(t,n,{},r)}reload(t,n,r){this.prepareLoading(t,n,{reload:!0},r)}loadOne(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const r=t.split("|"),i=r[0],s=r[1];this.read(i,s,"read",void 0,void 0,(o,a)=>{o&&this.logger.warn(`${n}loading namespace ${s} for language ${i} failed`,o),!o&&a&&this.logger.log(`${n}loaded namespace ${s} for language ${i}`,a),this.loaded(t,o,a)})}saveMissing(t,n,r,i,s){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(n)){this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(r==null||r==="")){if(this.backend&&this.backend.create){const l={...o,isUpdate:s},u=this.backend.create.bind(this.backend);if(u.length<6)try{let c;u.length===5?c=u(t,n,r,i,l):c=u(t,n,r,i),c&&typeof c.then=="function"?c.then(f=>a(null,f)).catch(a):a(null,c)}catch(c){a(c)}else u(t,n,r,i,a,l)}!t||!t[0]||this.store.addResource(t[0],n,r,i)}}}function qf(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(t){let n={};if(typeof t[1]=="object"&&(n=t[1]),typeof t[1]=="string"&&(n.defaultValue=t[1]),typeof t[2]=="string"&&(n.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const r=t[3]||t[2];Object.keys(r).forEach(i=>{n[i]=r[i]})}return n},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function Gf(e){return typeof e.ns=="string"&&(e.ns=[e.ns]),typeof e.fallbackLng=="string"&&(e.fallbackLng=[e.fallbackLng]),typeof e.fallbackNS=="string"&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function js(){}function ZE(e){Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(n=>{typeof e[n]=="function"&&(e[n]=e[n].bind(e))})}class Ji extends ya{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Gf(t),this.services={},this.logger=gt,this.modules={external:[]},ZE(this),n&&!this.isInitialized&&!t.isClone){if(!this.options.initImmediate)return this.init(t,n),this;setTimeout(()=>{this.init(t,n)},0)}}init(){var t=this;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof n=="function"&&(r=n,n={}),!n.defaultNS&&n.defaultNS!==!1&&n.ns&&(typeof n.ns=="string"?n.defaultNS=n.ns:n.ns.indexOf("translation")<0&&(n.defaultNS=n.ns[0]));const i=qf();this.options={...i,...this.options,...Gf(n)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...i.interpolation,...this.options.interpolation}),n.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=n.keySeparator),n.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=n.nsSeparator);function s(c){return c?typeof c=="function"?new c:c:null}if(!this.options.isClone){this.modules.logger?gt.init(s(this.modules.logger),this.options):gt.init(null,this.options);let c;this.modules.formatter?c=this.modules.formatter:typeof Intl<"u"&&(c=QE);const f=new Vf(this.options);this.store=new Bf(this.options.resources,this.options);const d=this.services;d.logger=gt,d.resourceStore=this.store,d.languageUtils=f,d.pluralResolver=new qE(f,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),c&&(!this.options.interpolation.format||this.options.interpolation.format===i.interpolation.format)&&(d.formatter=s(c),d.formatter.init(d,this.options),this.options.interpolation.format=d.formatter.format.bind(d.formatter)),d.interpolator=new GE(this.options),d.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},d.backendConnector=new XE(s(this.modules.backend),d.resourceStore,d,this.options),d.backendConnector.on("*",function(m){for(var y=arguments.length,v=new Array(y>1?y-1:0),_=1;_<y;_++)v[_-1]=arguments[_];t.emit(m,...v)}),this.modules.languageDetector&&(d.languageDetector=s(this.modules.languageDetector),d.languageDetector.init&&d.languageDetector.init(d,this.options.detection,this.options)),this.modules.i18nFormat&&(d.i18nFormat=s(this.modules.i18nFormat),d.i18nFormat.init&&d.i18nFormat.init(this)),this.translator=new $o(this.services,this.options),this.translator.on("*",function(m){for(var y=arguments.length,v=new Array(y>1?y-1:0),_=1;_<y;_++)v[_-1]=arguments[_];t.emit(m,...v)}),this.modules.external.forEach(m=>{m.init&&m.init(this)})}if(this.format=this.options.interpolation.format,r||(r=js),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const c=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);c.length>0&&c[0]!=="dev"&&(this.options.lng=c[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(c=>{this[c]=function(){return t.store[c](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(c=>{this[c]=function(){return t.store[c](...arguments),t}});const l=si(),u=()=>{const c=(f,d)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(d),r(f,d)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return c(null,this.t.bind(this));this.changeLanguage(this.options.lng,c)};return this.options.resources||!this.options.initImmediate?u():setTimeout(u,0),l}loadResources(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:js;const i=typeof t=="string"?t:this.language;if(typeof t=="function"&&(r=t),!this.options.resources||this.options.partialBundledLanguages){if(i&&i.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return r();const s=[],o=a=>{if(!a||a==="cimode")return;this.services.languageUtils.toResolveHierarchy(a).forEach(u=>{u!=="cimode"&&s.indexOf(u)<0&&s.push(u)})};i?o(i):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>o(l)),this.options.preload&&this.options.preload.forEach(a=>o(a)),this.services.backendConnector.load(s,this.options.ns,a=>{!a&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),r(a)})}else r(null)}reloadResources(t,n,r){const i=si();return t||(t=this.languages),n||(n=this.options.ns),r||(r=js),this.services.backendConnector.reload(t,n,s=>{i.resolve(),r(s)}),i}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&Km.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1))for(let n=0;n<this.languages.length;n++){const r=this.languages[n];if(!(["cimode","dev"].indexOf(r)>-1)&&this.store.hasLanguageSomeTranslations(r)){this.resolvedLanguage=r;break}}}changeLanguage(t,n){var r=this;this.isLanguageChangingTo=t;const i=si();this.emit("languageChanging",t);const s=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},o=(l,u)=>{u?(s(u),this.translator.changeLanguage(u),this.isLanguageChangingTo=void 0,this.emit("languageChanged",u),this.logger.log("languageChanged",u)):this.isLanguageChangingTo=void 0,i.resolve(function(){return r.t(...arguments)}),n&&n(l,function(){return r.t(...arguments)})},a=l=>{!t&&!l&&this.services.languageDetector&&(l=[]);const u=typeof l=="string"?l:this.services.languageUtils.getBestMatchFromCodes(l);u&&(this.language||s(u),this.translator.language||this.translator.changeLanguage(u),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(u)),this.loadResources(u,c=>{o(c,u)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(t),i}getFixedT(t,n,r){var i=this;const s=function(o,a){let l;if(typeof a!="object"){for(var u=arguments.length,c=new Array(u>2?u-2:0),f=2;f<u;f++)c[f-2]=arguments[f];l=i.options.overloadTranslationOptionHandler([o,a].concat(c))}else l={...a};l.lng=l.lng||s.lng,l.lngs=l.lngs||s.lngs,l.ns=l.ns||s.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||r||s.keyPrefix);const d=i.options.keySeparator||".";let m;return l.keyPrefix&&Array.isArray(o)?m=o.map(y=>`${l.keyPrefix}${d}${y}`):m=l.keyPrefix?`${l.keyPrefix}${d}${o}`:o,i.t(m,l)};return typeof t=="string"?s.lng=t:s.lngs=t,s.ns=n,s.keyPrefix=r,s}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const r=n.lng||this.resolvedLanguage||this.languages[0],i=this.options?this.options.fallbackLng:!1,s=this.languages[this.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const o=(a,l)=>{const u=this.services.backendConnector.state[`${a}|${l}`];return u===-1||u===2};if(n.precheck){const a=n.precheck(this,o);if(a!==void 0)return a}return!!(this.hasResourceBundle(r,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(r,t)&&(!i||o(s,t)))}loadNamespaces(t,n){const r=si();return this.options.ns?(typeof t=="string"&&(t=[t]),t.forEach(i=>{this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}),this.loadResources(i=>{r.resolve(),n&&n(i)}),r):(n&&n(),Promise.resolve())}loadLanguages(t,n){const r=si();typeof t=="string"&&(t=[t]);const i=this.options.preload||[],s=t.filter(o=>i.indexOf(o)<0&&this.services.languageUtils.isSupportedCode(o));return s.length?(this.options.preload=i.concat(s),this.loadResources(o=>{r.resolve(),n&&n(o)}),r):(n&&n(),Promise.resolve())}dir(t){if(t||(t=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!t)return"rtl";const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],r=this.services&&this.services.languageUtils||new Vf(qf());return n.indexOf(r.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new Ji(t,n)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:js;const r=t.forkResourceStore;r&&delete t.forkResourceStore;const i={...this.options,...t,isClone:!0},s=new Ji(i);return(t.debug!==void 0||t.prefix!==void 0)&&(s.logger=s.logger.clone(t)),["store","services","language"].forEach(a=>{s[a]=this[a]}),s.services={...this.services},s.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},r&&(s.store=new Bf(this.store.data,i),s.services.resourceStore=s.store),s.translator=new $o(s.services,i),s.translator.on("*",function(a){for(var l=arguments.length,u=new Array(l>1?l-1:0),c=1;c<l;c++)u[c-1]=arguments[c];s.emit(a,...u)}),s.init(i,n),s.translator.options=i,s.translator.backendConnector.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},s}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const ke=Ji.createInstance();ke.createInstance=Ji.createInstance;ke.createInstance;ke.dir;ke.init;ke.loadResources;ke.reloadResources;ke.use;ke.changeLanguage;ke.getFixedT;ke.t;ke.exists;ke.setDefaultNamespace;ke.hasLoadedNamespace;ke.loadNamespaces;ke.loadLanguages;function ku(e){"@babel/helpers - typeof";return ku=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ku(e)}function qm(){return typeof XMLHttpRequest=="function"||(typeof XMLHttpRequest>"u"?"undefined":ku(XMLHttpRequest))==="object"}function e_(e){return!!e&&typeof e.then=="function"}function t_(e){return e_(e)?e:Promise.resolve(e)}function n_(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Iu={exports:{}},Ms={exports:{}},Jf;function r_(){return Jf||(Jf=1,function(e,t){var n=typeof globalThis<"u"&&globalThis||typeof self<"u"&&self||typeof pi<"u"&&pi,r=function(){function s(){this.fetch=!1,this.DOMException=n.DOMException}return s.prototype=n,new s}();(function(s){(function(o){var a=typeof s<"u"&&s||typeof self<"u"&&self||typeof a<"u"&&a,l={searchParams:"URLSearchParams"in a,iterable:"Symbol"in a&&"iterator"in Symbol,blob:"FileReader"in a&&"Blob"in a&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in a,arrayBuffer:"ArrayBuffer"in a};function u(E){return E&&DataView.prototype.isPrototypeOf(E)}if(l.arrayBuffer)var c=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],f=ArrayBuffer.isView||function(E){return E&&c.indexOf(Object.prototype.toString.call(E))>-1};function d(E){if(typeof E!="string"&&(E=String(E)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(E)||E==="")throw new TypeError('Invalid character in header field name: "'+E+'"');return E.toLowerCase()}function m(E){return typeof E!="string"&&(E=String(E)),E}function y(E){var x={next:function(){var j=E.shift();return{done:j===void 0,value:j}}};return l.iterable&&(x[Symbol.iterator]=function(){return x}),x}function v(E){this.map={},E instanceof v?E.forEach(function(x,j){this.append(j,x)},this):Array.isArray(E)?E.forEach(function(x){this.append(x[0],x[1])},this):E&&Object.getOwnPropertyNames(E).forEach(function(x){this.append(x,E[x])},this)}v.prototype.append=function(E,x){E=d(E),x=m(x);var j=this.map[E];this.map[E]=j?j+", "+x:x},v.prototype.delete=function(E){delete this.map[d(E)]},v.prototype.get=function(E){return E=d(E),this.has(E)?this.map[E]:null},v.prototype.has=function(E){return this.map.hasOwnProperty(d(E))},v.prototype.set=function(E,x){this.map[d(E)]=m(x)},v.prototype.forEach=function(E,x){for(var j in this.map)this.map.hasOwnProperty(j)&&E.call(x,this.map[j],j,this)},v.prototype.keys=function(){var E=[];return this.forEach(function(x,j){E.push(j)}),y(E)},v.prototype.values=function(){var E=[];return this.forEach(function(x){E.push(x)}),y(E)},v.prototype.entries=function(){var E=[];return this.forEach(function(x,j){E.push([j,x])}),y(E)},l.iterable&&(v.prototype[Symbol.iterator]=v.prototype.entries);function _(E){if(E.bodyUsed)return Promise.reject(new TypeError("Already read"));E.bodyUsed=!0}function p(E){return new Promise(function(x,j){E.onload=function(){x(E.result)},E.onerror=function(){j(E.error)}})}function h(E){var x=new FileReader,j=p(x);return x.readAsArrayBuffer(E),j}function g(E){var x=new FileReader,j=p(x);return x.readAsText(E),j}function w(E){for(var x=new Uint8Array(E),j=new Array(x.length),b=0;b<x.length;b++)j[b]=String.fromCharCode(x[b]);return j.join("")}function I(E){if(E.slice)return E.slice(0);var x=new Uint8Array(E.byteLength);return x.set(new Uint8Array(E)),x.buffer}function C(){return this.bodyUsed=!1,this._initBody=function(E){this.bodyUsed=this.bodyUsed,this._bodyInit=E,E?typeof E=="string"?this._bodyText=E:l.blob&&Blob.prototype.isPrototypeOf(E)?this._bodyBlob=E:l.formData&&FormData.prototype.isPrototypeOf(E)?this._bodyFormData=E:l.searchParams&&URLSearchParams.prototype.isPrototypeOf(E)?this._bodyText=E.toString():l.arrayBuffer&&l.blob&&u(E)?(this._bodyArrayBuffer=I(E.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):l.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(E)||f(E))?this._bodyArrayBuffer=I(E):this._bodyText=E=Object.prototype.toString.call(E):this._bodyText="",this.headers.get("content-type")||(typeof E=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):l.searchParams&&URLSearchParams.prototype.isPrototypeOf(E)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},l.blob&&(this.blob=function(){var E=_(this);if(E)return E;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var E=_(this);return E||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}else return this.blob().then(h)}),this.text=function(){var E=_(this);if(E)return E;if(this._bodyBlob)return g(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(w(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},l.formData&&(this.formData=function(){return this.text().then(L)}),this.json=function(){return this.text().then(JSON.parse)},this}var k=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function O(E){var x=E.toUpperCase();return k.indexOf(x)>-1?x:E}function D(E,x){if(!(this instanceof D))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');x=x||{};var j=x.body;if(E instanceof D){if(E.bodyUsed)throw new TypeError("Already read");this.url=E.url,this.credentials=E.credentials,x.headers||(this.headers=new v(E.headers)),this.method=E.method,this.mode=E.mode,this.signal=E.signal,!j&&E._bodyInit!=null&&(j=E._bodyInit,E.bodyUsed=!0)}else this.url=String(E);if(this.credentials=x.credentials||this.credentials||"same-origin",(x.headers||!this.headers)&&(this.headers=new v(x.headers)),this.method=O(x.method||this.method||"GET"),this.mode=x.mode||this.mode||null,this.signal=x.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&j)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(j),(this.method==="GET"||this.method==="HEAD")&&(x.cache==="no-store"||x.cache==="no-cache")){var b=/([?&])_=[^&]*/;if(b.test(this.url))this.url=this.url.replace(b,"$1_="+new Date().getTime());else{var R=/\?/;this.url+=(R.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}D.prototype.clone=function(){return new D(this,{body:this._bodyInit})};function L(E){var x=new FormData;return E.trim().split("&").forEach(function(j){if(j){var b=j.split("="),R=b.shift().replace(/\+/g," "),N=b.join("=").replace(/\+/g," ");x.append(decodeURIComponent(R),decodeURIComponent(N))}}),x}function B(E){var x=new v,j=E.replace(/\r?\n[\t ]+/g," ");return j.split("\r").map(function(b){return b.indexOf(`
`)===0?b.substr(1,b.length):b}).forEach(function(b){var R=b.split(":"),N=R.shift().trim();if(N){var F=R.join(":").trim();x.append(N,F)}}),x}C.call(D.prototype);function re(E,x){if(!(this instanceof re))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');x||(x={}),this.type="default",this.status=x.status===void 0?200:x.status,this.ok=this.status>=200&&this.status<300,this.statusText=x.statusText===void 0?"":""+x.statusText,this.headers=new v(x.headers),this.url=x.url||"",this._initBody(E)}C.call(re.prototype),re.prototype.clone=function(){return new re(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new v(this.headers),url:this.url})},re.error=function(){var E=new re(null,{status:0,statusText:""});return E.type="error",E};var Ze=[301,302,303,307,308];re.redirect=function(E,x){if(Ze.indexOf(x)===-1)throw new RangeError("Invalid status code");return new re(null,{status:x,headers:{location:E}})},o.DOMException=a.DOMException;try{new o.DOMException}catch{o.DOMException=function(x,j){this.message=x,this.name=j;var b=Error(x);this.stack=b.stack},o.DOMException.prototype=Object.create(Error.prototype),o.DOMException.prototype.constructor=o.DOMException}function Te(E,x){return new Promise(function(j,b){var R=new D(E,x);if(R.signal&&R.signal.aborted)return b(new o.DOMException("Aborted","AbortError"));var N=new XMLHttpRequest;function F(){N.abort()}N.onload=function(){var ie={status:N.status,statusText:N.statusText,headers:B(N.getAllResponseHeaders()||"")};ie.url="responseURL"in N?N.responseURL:ie.headers.get("X-Request-URL");var me="response"in N?N.response:N.responseText;setTimeout(function(){j(new re(me,ie))},0)},N.onerror=function(){setTimeout(function(){b(new TypeError("Network request failed"))},0)},N.ontimeout=function(){setTimeout(function(){b(new TypeError("Network request failed"))},0)},N.onabort=function(){setTimeout(function(){b(new o.DOMException("Aborted","AbortError"))},0)};function V(ie){try{return ie===""&&a.location.href?a.location.href:ie}catch{return ie}}N.open(R.method,V(R.url),!0),R.credentials==="include"?N.withCredentials=!0:R.credentials==="omit"&&(N.withCredentials=!1),"responseType"in N&&(l.blob?N.responseType="blob":l.arrayBuffer&&R.headers.get("Content-Type")&&R.headers.get("Content-Type").indexOf("application/octet-stream")!==-1&&(N.responseType="arraybuffer")),x&&typeof x.headers=="object"&&!(x.headers instanceof v)?Object.getOwnPropertyNames(x.headers).forEach(function(ie){N.setRequestHeader(ie,m(x.headers[ie]))}):R.headers.forEach(function(ie,me){N.setRequestHeader(me,ie)}),R.signal&&(R.signal.addEventListener("abort",F),N.onreadystatechange=function(){N.readyState===4&&R.signal.removeEventListener("abort",F)}),N.send(typeof R._bodyInit>"u"?null:R._bodyInit)})}return Te.polyfill=!0,a.fetch||(a.fetch=Te,a.Headers=v,a.Request=D,a.Response=re),o.Headers=v,o.Request=D,o.Response=re,o.fetch=Te,o})({})})(r),r.fetch.ponyfill=!0,delete r.fetch.polyfill;var i=n.fetch?n:r;t=i.fetch,t.default=i.fetch,t.fetch=i.fetch,t.Headers=i.Headers,t.Request=i.Request,t.Response=i.Response,e.exports=t}(Ms,Ms.exports)),Ms.exports}(function(e,t){var n;if(typeof fetch=="function"&&(typeof pi<"u"&&pi.fetch?n=pi.fetch:typeof window<"u"&&window.fetch?n=window.fetch:n=fetch),typeof n_<"u"&&typeof window>"u"){var r=n||r_();r.default&&(r=r.default),t.default=r,e.exports=t.default}})(Iu,Iu.exports);var Gm=Iu.exports;const Jm=Hh(Gm),Qf=Bh({__proto__:null,default:Jm},[Gm]);function Yf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Xf(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Yf(Object(n),!0).forEach(function(r){i_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Yf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function i_(e,t,n){return t=s_(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s_(e){var t=o_(e,"string");return Vn(t)=="symbol"?t:t+""}function o_(e,t){if(Vn(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Vn(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Vn(e){"@babel/helpers - typeof";return Vn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Vn(e)}var jt;typeof fetch=="function"&&(typeof global<"u"&&global.fetch?jt=global.fetch:typeof window<"u"&&window.fetch?jt=window.fetch:jt=fetch);var Qi;qm()&&(typeof global<"u"&&global.XMLHttpRequest?Qi=global.XMLHttpRequest:typeof window<"u"&&window.XMLHttpRequest&&(Qi=window.XMLHttpRequest));var Uo;typeof ActiveXObject=="function"&&(typeof global<"u"&&global.ActiveXObject?Uo=global.ActiveXObject:typeof window<"u"&&window.ActiveXObject&&(Uo=window.ActiveXObject));!jt&&Qf&&!Qi&&!Uo&&(jt=Jm||Qf);typeof jt!="function"&&(jt=void 0);var Cu=function(t,n){if(n&&Vn(n)==="object"){var r="";for(var i in n)r+="&"+encodeURIComponent(i)+"="+encodeURIComponent(n[i]);if(!r)return t;t=t+(t.indexOf("?")!==-1?"&":"?")+r.slice(1)}return t},Zf=function(t,n,r,i){var s=function(l){if(!l.ok)return r(l.statusText||"Error",{status:l.status});l.text().then(function(u){r(null,{status:l.status,data:u})}).catch(r)};if(i){var o=i(t,n);if(o instanceof Promise){o.then(s).catch(r);return}}typeof fetch=="function"?fetch(t,n).then(s).catch(r):jt(t,n).then(s).catch(r)},eh=!1,a_=function(t,n,r,i){t.queryStringParams&&(n=Cu(n,t.queryStringParams));var s=Xf({},typeof t.customHeaders=="function"?t.customHeaders():t.customHeaders);typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(s["User-Agent"]="i18next-http-backend (node/".concat(global.process.version,"; ").concat(global.process.platform," ").concat(global.process.arch,")")),r&&(s["Content-Type"]="application/json");var o=typeof t.requestOptions=="function"?t.requestOptions(r):t.requestOptions,a=Xf({method:r?"POST":"GET",body:r?t.stringify(r):void 0,headers:s},eh?{}:o),l=typeof t.alternateFetch=="function"&&t.alternateFetch.length>=1?t.alternateFetch:void 0;try{Zf(n,a,i,l)}catch(u){if(!o||Object.keys(o).length===0||!u.message||u.message.indexOf("not implemented")<0)return i(u);try{Object.keys(o).forEach(function(c){delete a[c]}),Zf(n,a,i,l),eh=!0}catch(c){i(c)}}},l_=function(t,n,r,i){r&&Vn(r)==="object"&&(r=Cu("",r).slice(1)),t.queryStringParams&&(n=Cu(n,t.queryStringParams));try{var s;Qi?s=new Qi:s=new Uo("MSXML2.XMLHTTP.3.0"),s.open(r?"POST":"GET",n,1),t.crossDomain||s.setRequestHeader("X-Requested-With","XMLHttpRequest"),s.withCredentials=!!t.withCredentials,r&&s.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),s.overrideMimeType&&s.overrideMimeType("application/json");var o=t.customHeaders;if(o=typeof o=="function"?o():o,o)for(var a in o)s.setRequestHeader(a,o[a]);s.onreadystatechange=function(){s.readyState>3&&i(s.status>=400?s.statusText:null,{status:s.status,data:s.responseText})},s.send(r)}catch(l){console&&console.log(l)}},u_=function(t,n,r,i){if(typeof r=="function"&&(i=r,r=void 0),i=i||function(){},jt&&n.indexOf("file:")!==0)return a_(t,n,r,i);if(qm()||typeof ActiveXObject=="function")return l_(t,n,r,i);i(new Error("No fetch and no xhr implementation found!"))};function Fr(e){"@babel/helpers - typeof";return Fr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Fr(e)}function th(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function sl(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?th(Object(n),!0).forEach(function(r){Qm(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):th(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function c_(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d_(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Ym(r.key),r)}}function f_(e,t,n){return t&&d_(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Qm(e,t,n){return t=Ym(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ym(e){var t=h_(e,"string");return Fr(t)=="symbol"?t:t+""}function h_(e,t){if(Fr(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Fr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var p_=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:function(n){return JSON.parse(n)},stringify:JSON.stringify,parsePayload:function(n,r,i){return Qm({},r,i||"")},parseLoadPayload:function(n,r){},request:u_,reloadInterval:typeof window<"u"?!1:60*60*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},Xm=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};c_(this,e),this.services=t,this.options=n,this.allOptions=r,this.type="backend",this.init(t,n,r)}return f_(e,[{key:"init",value:function(n){var r=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(this.services=n,this.options=sl(sl(sl({},p_()),this.options||{}),i),this.allOptions=s,this.services&&this.options.reloadInterval){var o=setInterval(function(){return r.reload()},this.options.reloadInterval);Fr(o)==="object"&&typeof o.unref=="function"&&o.unref()}}},{key:"readMulti",value:function(n,r,i){this._readAny(n,n,r,r,i)}},{key:"read",value:function(n,r,i){this._readAny([n],n,[r],r,i)}},{key:"_readAny",value:function(n,r,i,s,o){var a=this,l=this.options.loadPath;typeof this.options.loadPath=="function"&&(l=this.options.loadPath(n,i)),l=t_(l),l.then(function(u){if(!u)return o(null,{});var c=a.services.interpolator.interpolate(u,{lng:n.join("+"),ns:i.join("+")});a.loadUrl(c,o,r,s)})}},{key:"loadUrl",value:function(n,r,i,s){var o=this,a=typeof i=="string"?[i]:i,l=typeof s=="string"?[s]:s,u=this.options.parseLoadPayload(a,l);this.options.request(this.options,n,u,function(c,f){if(f&&(f.status>=500&&f.status<600||!f.status))return r("failed loading "+n+"; status code: "+f.status,!0);if(f&&f.status>=400&&f.status<500)return r("failed loading "+n+"; status code: "+f.status,!1);if(!f&&c&&c.message&&c.message.indexOf("Failed to fetch")>-1)return r("failed loading "+n+": "+c.message,!0);if(c)return r(c,!1);var d,m;try{typeof f.data=="string"?d=o.options.parse(f.data,i,s):d=f.data}catch{m="failed parsing "+n+" to json"}if(m)return r(m,!1);r(null,d)})}},{key:"create",value:function(n,r,i,s,o){var a=this;if(this.options.addPath){typeof n=="string"&&(n=[n]);var l=this.options.parsePayload(r,i,s),u=0,c=[],f=[];n.forEach(function(d){var m=a.options.addPath;typeof a.options.addPath=="function"&&(m=a.options.addPath(d,r));var y=a.services.interpolator.interpolate(m,{lng:d,ns:r});a.options.request(a.options,y,l,function(v,_){u+=1,c.push(v),f.push(_),u===n.length&&typeof o=="function"&&o(c,f)})})}}},{key:"reload",value:function(){var n=this,r=this.services,i=r.backendConnector,s=r.languageUtils,o=r.logger,a=i.language;if(!(a&&a.toLowerCase()==="cimode")){var l=[],u=function(f){var d=s.toResolveHierarchy(f);d.forEach(function(m){l.indexOf(m)<0&&l.push(m)})};u(a),this.allOptions.preload&&this.allOptions.preload.forEach(function(c){return u(c)}),l.forEach(function(c){n.allOptions.ns.forEach(function(f){i.read(c,f,"read",null,null,function(d,m){d&&o.warn("loading namespace ".concat(f," for language ").concat(c," failed"),d),!d&&m&&o.log("loaded namespace ".concat(f," for language ").concat(c),m),i.loaded("".concat(c,"|").concat(f),d,m)})})})}}}])}();Xm.type="backend";ke.use(Xm).use(fE).init({fallbackLng:"en",lng:"en",interpolation:{escapeValue:!1},backend:{loadPath:`${window.location.origin}/locales/{{lng}}.json`},detection:{order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag","path","subdomain"],lookupQuerystring:"lng",lookupCookie:"?",lookupLocalStorage:"schoolish-language",lookupSessionStorage:"schoolish-language",lookupFromPathIndex:0,lookupFromSubdomainIndex:0,caches:["localStorage","cookie"],excludeCacheFor:["cimode"],cookieMinutes:60*24*7,cookieDomain:window.location.hostname,htmlTag:document.documentElement,cookieOptions:{path:"/",sameSite:"strict"}}});const ol=[{label:"English",code:"en"},{label:"Português (Brasil)",code:"ptbr"},{label:"Italiano",code:"it"},{label:"हिंदी",code:"hi"},{label:"Español",code:"es"},{label:"Français",code:"fr"},{label:"বাংলা",code:"bn"},{label:"Русский",code:"ru"}].sort((e,t)=>e.label.localeCompare(t.label,void 0,{sensitivity:"base"}));function g_(){const e=P.useMemo(()=>new PE,[]),{i18n:t,t:n}=Hm();return P.useEffect(()=>{e.get("schoolish-language")&&ol.map(({code:r})=>r).includes(e.get("schoolish-language"))?t.changeLanguage(e.get("schoolish-language")):e.set("schoolish-language",t.language)},[e,t]),S.jsxs(S.Fragment,{children:[S.jsx(m_,{children:S.jsxs("div",{className:"columns",children:[S.jsxs("div",{className:"column",children:[S.jsx("h1",{children:n("Who we are?")}),S.jsxs("div",{children:[S.jsx("a",{href:"/about",children:n("About Schoolish")}),S.jsx("div",{className:"underline-decoration"})]}),S.jsxs("div",{children:[S.jsx("a",{href:"/about#vision",children:n("Vision")}),S.jsx("div",{className:"underline-decoration"})]}),S.jsxs("div",{children:[S.jsx("a",{href:"/about#social_media",children:n("Social Media")}),S.jsx("div",{className:"underline-decoration"})]}),S.jsxs("div",{children:[S.jsx("a",{href:"/about#branding",children:n("Branding")}),S.jsx("div",{className:"underline-decoration"})]})]}),S.jsxs("div",{className:"column",children:[S.jsx("h1",{children:n("Important Pages")}),S.jsx("a",{href:"/schoolish-for/teachers",children:n("Schoolish for Teachers")}),S.jsx("a",{href:"/schoolish-for/students",children:n("Schoolish for Students")}),S.jsx("a",{href:"/why_schoolish",children:n("Why Schoolish?")})]}),S.jsxs("div",{className:"column",children:[S.jsx("h1",{children:n("Policies")}),S.jsx("a",{href:"/policies/cookies",children:n("Cookie Policy")}),S.jsx("a",{href:"/policies/terms-of-use",children:n("Schoolish Terms of Use")}),S.jsx("a",{href:"/policies/privacy-policy",children:n("Schoolish Privacy Policy")}),S.jsx("a",{href:"/policies/partners-privacy-policy",children:n("Partner Privacy Policy")}),S.jsx("a",{href:"/policies/dont-sell-my-data",children:n("DSMD")})]}),S.jsxs("div",{className:"column",children:[S.jsx("h1",{children:n("Contact")}),S.jsx("a",{href:"/contact#whatsapp",children:n("WhatsApp")}),S.jsx("a",{href:"/contact#email",children:n("Email")}),S.jsx("a",{href:"/contact#location",children:n("Location")}),S.jsx("a",{href:"/contact#online-chat",children:n("Online chat")}),S.jsx("a",{href:"/contact#form",children:n("Contact form")})]})]})}),S.jsx("div",{className:"footer-bar",style:{backgroundColor:"black",color:"white",textAlign:"center",width:"100vw",padding:"15px"},children:S.jsx("select",{defaultValue:e.get("schoolish-language")&&ol.map(({code:r})=>r).includes(e.get("schoolish-language"))?e.get("schoolish-language"):t.language,onChange:r=>{t.changeLanguage(r.target.value),e.set("schoolish-language",r.target.value)},children:ol.map(({code:r,label:i})=>S.jsx("option",{value:r,children:i},r))})})]})}const m_=qr.footer`
  background-color: #cfcfcf;
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 25px;

  & .columns {
    display: flex;
    flex-direction: column;
    font-size: medium;
    color: var(--main-color);

    & a {
      text-decoration: none;
      color: #000000;
      font-size: 17px;
    }

    & h1 {
      text-transform: uppercase;
      margin-bottom: 7px;
      color: ${Se.mainColor};
      font-weight: bolder;
    }

    & .column {
      margin-bottom: 30px;
      display: flex;
      flex-direction: column;
    }
  }
`;function y_(){const{t:e}=Hm();return S.jsxs("div",{children:[S.jsx(yE,{}),S.jsx(tt,{height:"80px"}),S.jsx(v_,{children:S.jsxs("div",{children:[S.jsx("div",{className:"typingContainer",style:{display:"flex"},children:S.jsx(eE,{strings:[e("Organize your classes with ease!"),e("Organize your classes from anywhere!"),e("Organize your schedule quickly!"),e("Organize your school routine with Schoolish!")],typeSpeed:20,loop:!0,backSpeed:20,showCursor:!0,style:{fontSize:"35px",fontWeight:"bolder"}})}),S.jsx(tt,{height:"25px"}),S.jsxs("h3",{style:{fontWeight:"normal"},children:[e("Meet Schoolish, the new platform designed to help teachers better organize their classes and groups. With Schoolish, you can manage schedules, plan lessons efficiently and keep all important information in one place. Simplify your school routine and have more time to focus on what really matters:")," ",S.jsx("span",{style:{fontWeight:"bolder",textDecoration:"underline"},children:e("teaching")}),"."]}),S.jsx(tt,{height:"25px"}),S.jsxs("div",{className:"cta",style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[S.jsx("button",{style:{marginRight:"10px",height:"50px",width:"250px",borderRadius:"5px",border:"none",color:"white",fontWeight:"bold",cursor:"pointer",fontSize:"16px",backgroundColor:Se.mainColor},className:"signupButton",onClick:()=>{window.location.href="/signup"},children:e("Create a free account")}),S.jsx("span",{style:{fontWeight:"bold",cursor:"pointer",marginLeft:"10px",fontSize:"16px",textDecoration:"underline",color:Se.mainColor,textAlign:"center"},onClick:()=>{var t;(t=document.getElementById("whySchoolish"))==null||t.scrollIntoView({behavior:"smooth"})},children:e("Why Schoolish?")})]})]})}),S.jsxs("section",{id:"whySchoolish",style:{scrollMarginTop:"90px",display:"flex",flexDirection:"column",justifyContent:"center"},children:[S.jsx(Ls,{title:{text:e("Bye bye, papers scattered across the table!"),color:"#000",weight:"bold"},subtitle:{text:e("Organization"),color:"#a200ff",weight:"bold"},text:{text:e("With Schoolish, teachers can centralize all relevant information in one place. This includes schedules, class materials, student grades, and more. No more papers scattered across your desk!"),color:"#000",weight:"normal"},image:{imageURL:"https://via.placeholder.com/150",imageAlt:"Agenda"}}),S.jsx(tt,{height:"50px"}),S.jsx(Ls,{title:{text:e("Easy preparation and efficient execution!"),color:"#000",weight:"bold"},subtitle:{text:e("Planning"),color:"#a200ff",weight:"bold"},text:{text:e("Our platform enables teachers to plan their lessons more effectively. They can create detailed schedules, set goals, and track student progress."),color:"#000",weight:"normal"},image:{imageURL:"https://via.placeholder.com/150",imageAlt:"Agenda"}}),S.jsx(tt,{height:"50px"}),S.jsx(Ls,{title:{text:e("Work from anywhere!"),color:"#000",weight:"bold"},subtitle:{text:e("Remote access"),color:"#a200ff",weight:"bold"},text:{text:e("With the ability to access Schoolish from anywhere, teachers don’t need to be in-person to manage their classes. This is especially helpful for those working in hybrid or remote learning."),color:"#000",weight:"normal"},image:{imageURL:"https://via.placeholder.com/150",imageAlt:"Agenda"}}),S.jsx(tt,{height:"50px"}),S.jsx(Ls,{title:{text:e("Protection for confidential information!"),color:"#000",weight:"bold"},subtitle:{text:e("Data Security"),color:"#a200ff",weight:"bold"},text:{text:e("Schoolish offers robust security to protect sensitive student data. Information is stored in encrypted form, giving teachers peace of mind and keeping everyone private."),color:"#000",weight:"normal"},image:{imageURL:"https://via.placeholder.com/150",imageAlt:"Agenda"}}),S.jsx(tt,{height:"50px"}),S.jsxs("span",{style:{fontWeight:"bold",cursor:"pointer",marginLeft:"10px",fontSize:"16px",textDecoration:"underline",textAlign:"center",display:"flex",flexDirection:"row",justifyContent:"center",borderColor:"#000000"},onClick:()=>window.location.href="/why_schoolish",children:[e("Find out how Schoolish can help you in your school life")," ",S.jsx("div",{className:"arrow arrow-right"})]}),S.jsx(tt,{height:"25px"}),S.jsx("button",{style:{marginRight:"10px",height:"50px",width:"calc(100vw - 100px)",borderRadius:"25px",border:"none",color:"white",fontWeight:"bold",cursor:"pointer",fontSize:"16px",margin:"0 auto",backgroundColor:`${Se.mainColor}`},className:"signupButton",onClick:()=>{window.location.href="/signup"},children:e("Create a free account")}),S.jsx(tt,{height:"50px"})]}),S.jsx(g_,{})]})}const v_=qr.main`
  width: calc(100vw - 40px);
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  margin: 0 auto;
`;var nh={};/**
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
 */const Zm=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},w_=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},ey={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=s>>2,f=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(d=64)),r.push(n[c],n[f],n[d],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Zm(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):w_(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new S_;const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),f!==64){const y=u<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class S_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const E_=function(e){const t=Zm(e);return ey.encodeByteArray(t,!0)},ty=function(e){return E_(e).replace(/\./g,"")},ny=function(e){try{return ey.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function __(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const k_=()=>__().__FIREBASE_DEFAULTS__,I_=()=>{if(typeof process>"u"||typeof nh>"u")return;const e=nh.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},C_=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&ny(e[1]);return t&&JSON.parse(t)},$c=()=>{try{return k_()||I_()||C_()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},b_=e=>{var t,n;return(n=(t=$c())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},ry=()=>{var e;return(e=$c())===null||e===void 0?void 0:e.config},iy=e=>{var t;return(t=$c())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class x_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function _e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function T_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_e())}function sy(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function P_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function O_(){const e=_e();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function oy(){try{return typeof indexedDB=="object"}catch{return!1}}function ay(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function R_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const N_="FirebaseError";class kt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=N_,Object.setPrototypeOf(this,kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zn.prototype.create)}}class Zn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?A_(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new kt(i,a,r)}}function A_(e,t){return e.replace(L_,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const L_=/\{\$([^}]+)}/g;function D_(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Yi(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(rh(s)&&rh(o)){if(!Yi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function rh(e){return e!==null&&typeof e=="object"}/**
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
 */function ls(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function fi(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function hi(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function j_(e,t){const n=new M_(e,t);return n.subscribe.bind(n)}class M_{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");$_(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=al),i.error===void 0&&(i.error=al),i.complete===void 0&&(i.complete=al);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $_(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function al(){}/**
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
 */const U_=1e3,F_=2,z_=4*60*60*1e3,B_=.5;function ih(e,t=U_,n=F_){const r=t*Math.pow(n,e),i=Math.round(B_*r*(Math.random()-.5)*2);return Math.min(z_,r+i)}/**
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
 */function We(e){return e&&e._delegate?e._delegate:e}class _t{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const xn="[DEFAULT]";/**
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
 */class H_{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new x_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(W_(t))try{this.getOrInitializeService({instanceIdentifier:xn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=xn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=xn){return this.instances.has(t)}getOptions(t=xn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:V_(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=xn){return this.component?this.component.multipleInstances?t:xn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function V_(e){return e===xn?void 0:e}function W_(e){return e.instantiationMode==="EAGER"}/**
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
 */class K_{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new H_(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var K;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(K||(K={}));const q_={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},G_=K.INFO,J_={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},Q_=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=J_[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Uc{constructor(t){this.name=t,this._logLevel=G_,this._logHandler=Q_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in K))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?q_[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...t),this._logHandler(this,K.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...t),this._logHandler(this,K.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,K.INFO,...t),this._logHandler(this,K.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,K.WARN,...t),this._logHandler(this,K.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...t),this._logHandler(this,K.ERROR,...t)}}const Y_=(e,t)=>t.some(n=>e instanceof n);let sh,oh;function X_(){return sh||(sh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Z_(){return oh||(oh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ly=new WeakMap,bu=new WeakMap,uy=new WeakMap,ll=new WeakMap,Fc=new WeakMap;function ek(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(yn(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&ly.set(n,e)}).catch(()=>{}),Fc.set(t,e),t}function tk(e){if(bu.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});bu.set(e,t)}let xu={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return bu.get(e);if(t==="objectStoreNames")return e.objectStoreNames||uy.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function nk(e){xu=e(xu)}function rk(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ul(this),t,...n);return uy.set(r,t.sort?t.sort():[t]),yn(r)}:Z_().includes(e)?function(...t){return e.apply(ul(this),t),yn(ly.get(this))}:function(...t){return yn(e.apply(ul(this),t))}}function ik(e){return typeof e=="function"?rk(e):(e instanceof IDBTransaction&&tk(e),Y_(e,X_())?new Proxy(e,xu):e)}function yn(e){if(e instanceof IDBRequest)return ek(e);if(ll.has(e))return ll.get(e);const t=ik(e);return t!==e&&(ll.set(e,t),Fc.set(t,e)),t}const ul=e=>Fc.get(e);function cy(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=yn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(yn(o.result),l.oldVersion,l.newVersion,yn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const sk=["get","getKey","getAll","getAllKeys","count"],ok=["put","add","delete","clear"],cl=new Map;function ah(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(cl.get(t))return cl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=ok.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||sk.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return cl.set(t,s),s}nk(e=>({...e,get:(t,n,r)=>ah(t,n)||e.get(t,n,r),has:(t,n)=>!!ah(t,n)||e.has(t,n)}));/**
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
 */class ak{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function lk(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Tu="@firebase/app",lh="0.10.8";/**
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
 */const Wn=new Uc("@firebase/app"),uk="@firebase/app-compat",ck="@firebase/analytics-compat",dk="@firebase/analytics",fk="@firebase/app-check-compat",hk="@firebase/app-check",pk="@firebase/auth",gk="@firebase/auth-compat",mk="@firebase/database",yk="@firebase/database-compat",vk="@firebase/functions",wk="@firebase/functions-compat",Sk="@firebase/installations",Ek="@firebase/installations-compat",_k="@firebase/messaging",kk="@firebase/messaging-compat",Ik="@firebase/performance",Ck="@firebase/performance-compat",bk="@firebase/remote-config",xk="@firebase/remote-config-compat",Tk="@firebase/storage",Pk="@firebase/storage-compat",Ok="@firebase/firestore",Rk="@firebase/vertexai-preview",Nk="@firebase/firestore-compat",Ak="firebase",Lk="10.12.5";/**
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
 */const Pu="[DEFAULT]",Dk={[Tu]:"fire-core",[uk]:"fire-core-compat",[dk]:"fire-analytics",[ck]:"fire-analytics-compat",[hk]:"fire-app-check",[fk]:"fire-app-check-compat",[pk]:"fire-auth",[gk]:"fire-auth-compat",[mk]:"fire-rtdb",[yk]:"fire-rtdb-compat",[vk]:"fire-fn",[wk]:"fire-fn-compat",[Sk]:"fire-iid",[Ek]:"fire-iid-compat",[_k]:"fire-fcm",[kk]:"fire-fcm-compat",[Ik]:"fire-perf",[Ck]:"fire-perf-compat",[bk]:"fire-rc",[xk]:"fire-rc-compat",[Tk]:"fire-gcs",[Pk]:"fire-gcs-compat",[Ok]:"fire-fst",[Nk]:"fire-fst-compat",[Rk]:"fire-vertex","fire-js":"fire-js",[Ak]:"fire-js-all"};/**
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
 */const Fo=new Map,jk=new Map,Ou=new Map;function uh(e,t){try{e.container.addComponent(t)}catch(n){Wn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Bt(e){const t=e.name;if(Ou.has(t))return Wn.debug(`There were multiple attempts to register component ${t}.`),!1;Ou.set(t,e);for(const n of Fo.values())uh(n,e);for(const n of jk.values())uh(n,e);return!0}function Gr(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function mt(e){return e.settings!==void 0}/**
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
 */const Mk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vn=new Zn("app","Firebase",Mk);/**
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
 */class $k{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _t("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw vn.create("app-deleted",{appName:this._name})}}/**
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
 */const us=Lk;function dy(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Pu,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw vn.create("bad-app-name",{appName:String(i)});if(n||(n=ry()),!n)throw vn.create("no-options");const s=Fo.get(i);if(s){if(Yi(n,s.options)&&Yi(r,s.config))return s;throw vn.create("duplicate-app",{appName:i})}const o=new K_(i);for(const l of Ou.values())o.addComponent(l);const a=new $k(n,r,o);return Fo.set(i,a),a}function fy(e=Pu){const t=Fo.get(e);if(!t&&e===Pu&&ry())return dy();if(!t)throw vn.create("no-app",{appName:e});return t}function wt(e,t,n){var r;let i=(r=Dk[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Wn.warn(a.join(" "));return}Bt(new _t(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Uk="firebase-heartbeat-database",Fk=1,Xi="firebase-heartbeat-store";let dl=null;function hy(){return dl||(dl=cy(Uk,Fk,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Xi)}catch(n){console.warn(n)}}}}).catch(e=>{throw vn.create("idb-open",{originalErrorMessage:e.message})})),dl}async function zk(e){try{const n=(await hy()).transaction(Xi),r=await n.objectStore(Xi).get(py(e));return await n.done,r}catch(t){if(t instanceof kt)Wn.warn(t.message);else{const n=vn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Wn.warn(n.message)}}}async function ch(e,t){try{const r=(await hy()).transaction(Xi,"readwrite");await r.objectStore(Xi).put(t,py(e)),await r.done}catch(n){if(n instanceof kt)Wn.warn(n.message);else{const r=vn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Wn.warn(r.message)}}}function py(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Bk=1024,Hk=30*24*60*60*1e3;class Vk{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Kk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=dh();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Hk}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=dh(),{heartbeatsToSend:r,unsentEntries:i}=Wk(this._heartbeatsCache.heartbeats),s=ty(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function dh(){return new Date().toISOString().substring(0,10)}function Wk(e,t=Bk){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),fh(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),fh(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Kk{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oy()?ay().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await zk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ch(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ch(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function fh(e){return ty(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function qk(e){Bt(new _t("platform-logger",t=>new ak(t),"PRIVATE")),Bt(new _t("heartbeat",t=>new Vk(t),"PRIVATE")),wt(Tu,lh,e),wt(Tu,lh,"esm2017"),wt("fire-js","")}qk("");var Gk="firebase",Jk="10.12.5";/**
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
 */wt(Gk,Jk,"app");function zc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function gy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qk=gy,my=new Zn("auth","Firebase",gy());/**
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
 */const zo=new Uc("@firebase/auth");function Yk(e,...t){zo.logLevel<=K.WARN&&zo.warn(`Auth (${us}): ${e}`,...t)}function no(e,...t){zo.logLevel<=K.ERROR&&zo.error(`Auth (${us}): ${e}`,...t)}/**
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
 */function ct(e,...t){throw Bc(e,...t)}function St(e,...t){return Bc(e,...t)}function yy(e,t,n){const r=Object.assign(Object.assign({},Qk()),{[t]:n});return new Zn("auth","Firebase",r).create(t,{appName:e.name})}function Mt(e){return yy(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Bc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return my.create(e,...t)}function M(e,t,...n){if(!e)throw Bc(t,...n)}function Rt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw no(t),new Error(t)}function Ht(e,t){e||Rt(t)}/**
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
 */function Ru(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Xk(){return hh()==="http:"||hh()==="https:"}function hh(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function Zk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Xk()||sy()||"connection"in navigator)?navigator.onLine:!0}function eI(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class cs{constructor(t,n){this.shortDelay=t,this.longDelay=n,Ht(n>t,"Short delay should be less than long delay!"),this.isMobile=T_()||P_()}get(){return Zk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Hc(e,t){Ht(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class vy{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const tI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const nI=new cs(3e4,6e4);function Wt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function It(e,t,n,r,i={}){return wy(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=ls(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),vy.fetch()(Sy(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function wy(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},tI),t);try{const i=new iI(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw $s(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw $s(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw $s(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw $s(e,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw yy(e,c,u);ct(e,c)}}catch(i){if(i instanceof kt)throw i;ct(e,"network-request-failed",{message:String(i)})}}async function ds(e,t,n,r,i={}){const s=await It(e,t,n,r,i);return"mfaPendingCredential"in s&&ct(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Sy(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Hc(e.config,i):`${e.config.apiScheme}://${i}`}function rI(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class iI{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(St(this.auth,"network-request-failed")),nI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $s(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=St(e,t,r);return i.customData._tokenResponse=n,i}function ph(e){return e!==void 0&&e.enterprise!==void 0}class sI{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return rI(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function oI(e,t){return It(e,"GET","/v2/recaptchaConfig",Wt(e,t))}/**
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
 */async function aI(e,t){return It(e,"POST","/v1/accounts:delete",t)}async function Ey(e,t){return It(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function bi(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function lI(e,t=!1){const n=We(e),r=await n.getIdToken(t),i=Vc(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:bi(fl(i.auth_time)),issuedAtTime:bi(fl(i.iat)),expirationTime:bi(fl(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function fl(e){return Number(e)*1e3}function Vc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return no("JWT malformed, contained fewer than 3 sections"),null;try{const i=ny(n);return i?JSON.parse(i):(no("Failed to decode base64 JWT payload"),null)}catch(i){return no("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function gh(e){const t=Vc(e);return M(t,"internal-error"),M(typeof t.exp<"u","internal-error"),M(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function zr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof kt&&uI(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function uI({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class cI{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Nu{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=bi(this.lastLoginAt),this.creationTime=bi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Bo(e){var t;const n=e.auth,r=await e.getIdToken(),i=await zr(e,Ey(n,{idToken:r}));M(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?_y(s.providerUserInfo):[],a=fI(e.providerData,o),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Nu(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(e,f)}async function dI(e){const t=We(e);await Bo(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function fI(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function _y(e){return e.map(t=>{var{providerId:n}=t,r=zc(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function hI(e,t){const n=await wy(e,{},async()=>{const r=ls({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=Sy(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",vy.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function pI(e,t){return It(e,"POST","/v2/accounts:revokeToken",Wt(e,t))}/**
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
 */class Cr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){M(t.idToken,"internal-error"),M(typeof t.idToken<"u","internal-error"),M(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):gh(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){M(t.length!==0,"internal-error");const n=gh(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await hI(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Cr;return r&&(M(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Cr,this.toJSON())}_performRefresh(){return Rt("not implemented")}}/**
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
 */function Jt(e,t){M(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Nt{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=zc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Nu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await zr(this,this.stsTokenManager.getToken(this.auth,t));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return lI(this,t)}reload(){return dI(this)}_assign(t){this!==t&&(M(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Nt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Bo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mt(this.auth.app))return Promise.reject(Mt(this.auth));const t=await this.getIdToken();return await zr(this,aI(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:w,isAnonymous:I,providerData:C,stsTokenManager:k}=n;M(g&&k,t,"internal-error");const O=Cr.fromJSON(this.name,k);M(typeof g=="string",t,"internal-error"),Jt(f,t.name),Jt(d,t.name),M(typeof w=="boolean",t,"internal-error"),M(typeof I=="boolean",t,"internal-error"),Jt(m,t.name),Jt(y,t.name),Jt(v,t.name),Jt(_,t.name),Jt(p,t.name),Jt(h,t.name);const D=new Nt({uid:g,auth:t,email:d,emailVerified:w,displayName:f,isAnonymous:I,photoURL:y,phoneNumber:m,tenantId:v,stsTokenManager:O,createdAt:p,lastLoginAt:h});return C&&Array.isArray(C)&&(D.providerData=C.map(L=>Object.assign({},L))),_&&(D._redirectEventId=_),D}static async _fromIdTokenResponse(t,n,r=!1){const i=new Cr;i.updateFromServerResponse(n);const s=new Nt({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Bo(s),s}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];M(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?_y(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Cr;a.updateFromIdToken(r);const l=new Nt({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Nu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
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
 */const mh=new Map;function At(e){Ht(e instanceof Function,"Expected a class definition");let t=mh.get(e);return t?(Ht(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,mh.set(e,t),t)}/**
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
 */class ky{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}ky.type="NONE";const yh=ky;/**
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
 */function ro(e,t,n){return`firebase:${e}:${t}:${n}`}class br{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ro(this.userKey,i.apiKey,s),this.fullPersistenceKey=ro("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Nt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new br(At(yh),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||At(yh);const o=ro(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const f=Nt._fromJSON(t,c);u!==s&&(a=f),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new br(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new br(s,t,r))}}/**
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
 */function vh(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(by(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Iy(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ty(t))return"Blackberry";if(Py(t))return"Webos";if(Wc(t))return"Safari";if((t.includes("chrome/")||Cy(t))&&!t.includes("edge/"))return"Chrome";if(xy(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Iy(e=_e()){return/firefox\//i.test(e)}function Wc(e=_e()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Cy(e=_e()){return/crios\//i.test(e)}function by(e=_e()){return/iemobile/i.test(e)}function xy(e=_e()){return/android/i.test(e)}function Ty(e=_e()){return/blackberry/i.test(e)}function Py(e=_e()){return/webos/i.test(e)}function va(e=_e()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function gI(e=_e()){var t;return va(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function mI(){return O_()&&document.documentMode===10}function Oy(e=_e()){return va(e)||xy(e)||Py(e)||Ty(e)||/windows phone/i.test(e)||by(e)}function yI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ry(e,t=[]){let n;switch(e){case"Browser":n=vh(_e());break;case"Worker":n=`${vh(_e())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${us}/${r}`}/**
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
 */class vI{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function wI(e,t={}){return It(e,"GET","/v2/passwordPolicy",Wt(e,t))}/**
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
 */const SI=6;class EI{constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:SI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
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
 */class _I{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wh(this),this.idTokenSubscription=new wh(this),this.beforeStateQueue=new vI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=my,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=At(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await br.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Ey(this,{idToken:t}),r=await Nt._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(mt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Bo(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=eI()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(mt(this.app))return Promise.reject(Mt(this));const n=t?We(t):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&M(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return mt(this.app)?Promise.reject(Mt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return mt(this.app)?Promise.reject(Mt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(At(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await wI(this),n=new EI(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Zn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await pI(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&At(t)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await br.create(this,[At(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ry(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&Yk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function er(e){return We(e)}class wh{constructor(t){this.auth=t,this.observer=null,this.addObserver=j_(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let wa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kI(e){wa=e}function Ny(e){return wa.loadJS(e)}function II(){return wa.recaptchaEnterpriseScript}function CI(){return wa.gapiScript}function bI(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const xI="recaptcha-enterprise",TI="NO_RECAPTCHA";class PI{constructor(t){this.type=xI,this.auth=er(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{oI(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new sI(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;ph(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(u=>{o(u)}).catch(()=>{o(TI)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&ph(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=II();l.length!==0&&(l+=a),Ny(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Sh(e,t,n,r=!1){const i=new PI(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Au(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Sh(e,t,n,n==="getOobCode");return r(e,s)}else return r(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Sh(e,t,n,n==="getOobCode");return r(e,o)}else return Promise.reject(s)})}/**
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
 */function OI(e,t){const n=Gr(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Yi(s,t??{}))return i;ct(i,"already-initialized")}return n.initialize({options:t})}function RI(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(At);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Ay(e,t,n){const r=er(e);M(r._canInitEmulator,r,"emulator-config-failed"),M(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,s=Ly(t),{host:o,port:a}=NI(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),AI()}function Ly(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function NI(e){const t=Ly(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Eh(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Eh(o)}}}function Eh(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function AI(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Kc{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Rt("not implemented")}_getIdTokenResponse(t){return Rt("not implemented")}_linkToIdToken(t,n){return Rt("not implemented")}_getReauthenticationResolver(t){return Rt("not implemented")}}async function LI(e,t){return It(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function DI(e,t){return ds(e,"POST","/v1/accounts:signInWithPassword",Wt(e,t))}async function jI(e,t){return It(e,"POST","/v1/accounts:sendOobCode",Wt(e,t))}async function MI(e,t){return jI(e,t)}/**
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
 */async function $I(e,t){return ds(e,"POST","/v1/accounts:signInWithEmailLink",Wt(e,t))}async function UI(e,t){return ds(e,"POST","/v1/accounts:signInWithEmailLink",Wt(e,t))}/**
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
 */class Zi extends Kc{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Zi(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Zi(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Au(t,n,"signInWithPassword",DI);case"emailLink":return $I(t,{email:this._email,oobCode:this._password});default:ct(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Au(t,r,"signUpPassword",LI);case"emailLink":return UI(t,{idToken:n,email:this._email,oobCode:this._password});default:ct(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function xr(e,t){return ds(e,"POST","/v1/accounts:signInWithIdp",Wt(e,t))}/**
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
 */const FI="http://localhost";class Kn extends Kc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Kn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=zc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Kn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return xr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,xr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,xr(t,n)}buildRequest(){const t={requestUri:FI,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ls(n)}return t}}/**
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
 */function zI(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function BI(e){const t=fi(hi(e)).link,n=t?fi(hi(t)).deep_link_id:null,r=fi(hi(e)).deep_link_id;return(r?fi(hi(r)).link:null)||r||n||t||e}class qc{constructor(t){var n,r,i,s,o,a;const l=fi(hi(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,f=zI((i=l.mode)!==null&&i!==void 0?i:null);M(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=BI(t);try{return new qc(n)}catch{return null}}}/**
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
 */class Jr{constructor(){this.providerId=Jr.PROVIDER_ID}static credential(t,n){return Zi._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=qc.parseLink(n);return M(r,"argument-error"),Zi._fromEmailAndCode(t,r.code,r.tenantId)}}Jr.PROVIDER_ID="password";Jr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Jr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Dy{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class fs extends Dy{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class tn extends fs{constructor(){super("facebook.com")}static credential(t){return Kn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return tn.credentialFromTaggedObject(t)}static credentialFromError(t){return tn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return tn.credential(t.oauthAccessToken)}catch{return null}}}tn.FACEBOOK_SIGN_IN_METHOD="facebook.com";tn.PROVIDER_ID="facebook.com";/**
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
 */class nn extends fs{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Kn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return nn.credentialFromTaggedObject(t)}static credentialFromError(t){return nn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return nn.credential(n,r)}catch{return null}}}nn.GOOGLE_SIGN_IN_METHOD="google.com";nn.PROVIDER_ID="google.com";/**
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
 */class rn extends fs{constructor(){super("github.com")}static credential(t){return Kn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return rn.credentialFromTaggedObject(t)}static credentialFromError(t){return rn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return rn.credential(t.oauthAccessToken)}catch{return null}}}rn.GITHUB_SIGN_IN_METHOD="github.com";rn.PROVIDER_ID="github.com";/**
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
 */class sn extends fs{constructor(){super("twitter.com")}static credential(t,n){return Kn._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return sn.credentialFromTaggedObject(t)}static credentialFromError(t){return sn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return sn.credential(n,r)}catch{return null}}}sn.TWITTER_SIGN_IN_METHOD="twitter.com";sn.PROVIDER_ID="twitter.com";/**
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
 */async function HI(e,t){return ds(e,"POST","/v1/accounts:signUp",Wt(e,t))}/**
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
 */class qn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await Nt._fromIdTokenResponse(t,r,i),o=_h(r);return new qn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=_h(r);return new qn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function _h(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Ho extends kt{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ho.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Ho(t,n,r,i)}}function jy(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ho._fromErrorAndOperation(e,s,t,r):s})}async function VI(e,t,n=!1){const r=await zr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return qn._forOperation(e,"link",r)}/**
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
 */async function WI(e,t,n=!1){const{auth:r}=e;if(mt(r.app))return Promise.reject(Mt(r));const i="reauthenticate";try{const s=await zr(e,jy(r,i,t,e),n);M(s.idToken,r,"internal-error");const o=Vc(s.idToken);M(o,r,"internal-error");const{sub:a}=o;return M(e.uid===a,r,"user-mismatch"),qn._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ct(r,"user-mismatch"),s}}/**
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
 */async function My(e,t,n=!1){if(mt(e.app))return Promise.reject(Mt(e));const r="signIn",i=await jy(e,r,t),s=await qn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function KI(e,t){return My(er(e),t)}/**
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
 */async function $y(e){const t=er(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function qI(e,t,n){if(mt(e.app))return Promise.reject(Mt(e));const r=er(e),o=await Au(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",HI).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&$y(e),l}),a=await qn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function GI(e,t,n){return mt(e.app)?Promise.reject(Mt(e)):KI(We(e),Jr.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&$y(e),r})}async function JI(e,t){const n=We(e),i={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()},{email:s}=await MI(n.auth,i);s!==e.email&&await e.reload()}/**
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
 */async function QI(e,t){return It(e,"POST","/v1/accounts:update",t)}/**
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
 */async function YI(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const r=We(e),s={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},o=await zr(r,QI(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}/**
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
 */function Uy(e,t){return We(e).setPersistence(t)}function XI(e,t,n,r){return We(e).onIdTokenChanged(t,n,r)}function ZI(e,t,n){return We(e).beforeAuthStateChanged(t,n)}function Fy(e,t,n,r){return We(e).onAuthStateChanged(t,n,r)}const Vo="__sak";/**
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
 */class zy{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Vo,"1"),this.storage.removeItem(Vo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function eC(){const e=_e();return Wc(e)||va(e)}const tC=1e3,nC=10;class By extends zy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=eC()&&yI(),this.fallbackToPolling=Oy(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);mI()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,nC):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},tC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}By.type="LOCAL";const rC=By;/**
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
 */class Hy extends zy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Hy.type="SESSION";const Sa=Hy;/**
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
 */function iC(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ea{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Ea(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await iC(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ea.receivers=[];/**
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
 */function Gc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class sC{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Gc("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Et(){return window}function oC(e){Et().location.href=e}/**
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
 */function Vy(){return typeof Et().WorkerGlobalScope<"u"&&typeof Et().importScripts=="function"}async function aC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lC(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function uC(){return Vy()?self:null}/**
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
 */const Wy="firebaseLocalStorageDb",cC=1,Wo="firebaseLocalStorage",Ky="fbase_key";class hs{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _a(e,t){return e.transaction([Wo],t?"readwrite":"readonly").objectStore(Wo)}function dC(){const e=indexedDB.deleteDatabase(Wy);return new hs(e).toPromise()}function Lu(){const e=indexedDB.open(Wy,cC);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Wo,{keyPath:Ky})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Wo)?t(r):(r.close(),await dC(),t(await Lu()))})})}async function kh(e,t,n){const r=_a(e,!0).put({[Ky]:t,value:n});return new hs(r).toPromise()}async function fC(e,t){const n=_a(e,!1).get(t),r=await new hs(n).toPromise();return r===void 0?null:r.value}function Ih(e,t){const n=_a(e,!0).delete(t);return new hs(n).toPromise()}const hC=800,pC=3;class qy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lu(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>pC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ea._getInstance(uC()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await aC(),!this.activeServiceWorker)return;this.sender=new sC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||lC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Lu();return await kh(t,Vo,"1"),await Ih(t,Vo),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>kh(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>fC(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ih(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=_a(i,!1).getAll();return new hs(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qy.type="LOCAL";const gC=qy;new cs(3e4,6e4);/**
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
 */function mC(e,t){return t?At(t):(M(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Jc extends Kc{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return xr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return xr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return xr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function yC(e){return My(e.auth,new Jc(e),e.bypassAuthState)}function vC(e){const{auth:t,user:n}=e;return M(n,t,"internal-error"),WI(n,new Jc(e),e.bypassAuthState)}async function wC(e){const{auth:t,user:n}=e;return M(n,t,"internal-error"),VI(n,new Jc(e),e.bypassAuthState)}/**
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
 */class Gy{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return yC;case"linkViaPopup":case"linkViaRedirect":return wC;case"reauthViaPopup":case"reauthViaRedirect":return vC;default:ct(this.auth,"internal-error")}}resolve(t){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const SC=new cs(2e3,1e4);class vr extends Gy{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,vr.currentPopupAction&&vr.currentPopupAction.cancel(),vr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return M(t,this.auth,"internal-error"),t}async onExecution(){Ht(this.filter.length===1,"Popup operations only handle one event");const t=Gc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(St(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(St(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(St(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,SC.get())};t()}}vr.currentPopupAction=null;/**
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
 */const EC="pendingRedirect",io=new Map;class _C extends Gy{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=io.get(this.auth._key());if(!t){try{const r=await kC(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}io.set(this.auth._key(),t)}return this.bypassAuthState||io.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kC(e,t){const n=bC(t),r=CC(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function IC(e,t){io.set(e._key(),t)}function CC(e){return At(e._redirectPersistence)}function bC(e){return ro(EC,e.config.apiKey,e.name)}async function xC(e,t,n=!1){if(mt(e.app))return Promise.reject(Mt(e));const r=er(e),i=mC(r,t),o=await new _C(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const TC=10*60*1e3;class PC{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!OC(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Jy(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(St(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=TC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ch(t))}saveEventToCache(t){this.cachedEventUids.add(Ch(t)),this.lastProcessedEventTime=Date.now()}}function Ch(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Jy({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function OC(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jy(e);default:return!1}}/**
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
 */async function RC(e,t={}){return It(e,"GET","/v1/projects",t)}/**
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
 */const NC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,AC=/^https?/;async function LC(e){if(e.config.emulator)return;const{authorizedDomains:t}=await RC(e);for(const n of t)try{if(DC(n))return}catch{}ct(e,"unauthorized-domain")}function DC(e){const t=Ru(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!AC.test(n))return!1;if(NC.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const jC=new cs(3e4,6e4);function bh(){const e=Et().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function MC(e){return new Promise((t,n)=>{var r,i,s;function o(){bh(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{bh(),n(St(e,"network-request-failed"))},timeout:jC.get()})}if(!((i=(r=Et().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=Et().gapi)===null||s===void 0)&&s.load)o();else{const a=bI("iframefcb");return Et()[a]=()=>{gapi.load?o():n(St(e,"network-request-failed"))},Ny(`${CI()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw so=null,t})}let so=null;function $C(e){return so=so||MC(e),so}/**
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
 */const UC=new cs(5e3,15e3),FC="__/auth/iframe",zC="emulator/auth/iframe",BC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},HC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function VC(e){const t=e.config;M(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Hc(t,zC):`https://${e.config.authDomain}/${FC}`,r={apiKey:t.apiKey,appName:e.name,v:us},i=HC.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ls(r).slice(1)}`}async function WC(e){const t=await $C(e),n=Et().gapi;return M(n,e,"internal-error"),t.open({where:document.body,url:VC(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=St(e,"network-request-failed"),a=Et().setTimeout(()=>{s(o)},UC.get());function l(){Et().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const KC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qC=500,GC=600,JC="_blank",QC="http://localhost";class xh{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YC(e,t,n,r=qC,i=GC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},KC),{width:r.toString(),height:i.toString(),top:s,left:o}),u=_e().toLowerCase();n&&(a=Cy(u)?JC:n),Iy(u)&&(t=t||QC,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[m,y])=>`${d}${m}=${y},`,"");if(gI(u)&&a!=="_self")return XC(t||"",a),new xh(null);const f=window.open(t||"",a,c);M(f,e,"popup-blocked");try{f.focus()}catch{}return new xh(f)}function XC(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const ZC="__/auth/handler",eb="emulator/auth/handler",tb=encodeURIComponent("fac");async function Th(e,t,n,r,i,s){M(e.config.authDomain,e,"auth-domain-config-required"),M(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:us,eventId:i};if(t instanceof Dy){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",D_(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,f]of Object.entries({}))o[c]=f}if(t instanceof fs){const c=t.getScopes().filter(f=>f!=="");c.length>0&&(o.scopes=c.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await e._getAppCheckToken(),u=l?`#${tb}=${encodeURIComponent(l)}`:"";return`${nb(e)}?${ls(a).slice(1)}${u}`}function nb({config:e}){return e.emulator?Hc(e,eb):`https://${e.authDomain}/${ZC}`}/**
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
 */const hl="webStorageSupport";class rb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sa,this._completeRedirectFn=xC,this._overrideRedirectResult=IC}async _openPopup(t,n,r,i){var s;Ht((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Th(t,n,r,Ru(),i);return YC(t,o,Gc())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await Th(t,n,r,Ru(),i);return oC(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ht(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await WC(t),r=new PC(t);return n.register("authEvent",i=>(M(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(hl,{type:hl},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[hl];o!==void 0&&n(!!o),ct(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=LC(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Oy()||Wc()||va()}}const ib=rb;var Ph="@firebase/auth",Oh="1.7.6";/**
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
 */class sb{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ob(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ab(e){Bt(new _t("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ry(e)},u=new _I(r,i,s,l);return RI(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Bt(new _t("auth-internal",t=>{const n=er(t.getProvider("auth").getImmediate());return(r=>new sb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wt(Ph,Oh,ob(e)),wt(Ph,Oh,"esm2017")}/**
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
 */const lb=5*60,ub=iy("authIdTokenMaxAge")||lb;let Rh=null;const cb=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ub)return;const i=n==null?void 0:n.token;Rh!==i&&(Rh=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function db(e=fy()){const t=Gr(e,"auth");if(t.isInitialized())return t.getImmediate();const n=OI(e,{popupRedirectResolver:ib,persistence:[gC,rC,Sa]}),r=iy("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=cb(s.toString());ZI(n,o,()=>o(n.currentUser)),XI(n,a=>o(a))}}const i=b_("auth");return i&&Ay(n,`http://${i}`),n}function fb(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}kI({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=St("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",fb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ab("Browser");const Qy="@firebase/installations",Qc="0.6.8";/**
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
 */const Yy=1e4,Xy=`w:${Qc}`,Zy="FIS_v2",hb="https://firebaseinstallations.googleapis.com/v1",pb=60*60*1e3,gb="installations",mb="Installations";/**
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
 */const yb={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Gn=new Zn(gb,mb,yb);function ev(e){return e instanceof kt&&e.code.includes("request-failed")}/**
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
 */function tv({projectId:e}){return`${hb}/projects/${e}/installations`}function nv(e){return{token:e.token,requestStatus:2,expiresIn:wb(e.expiresIn),creationTime:Date.now()}}async function rv(e,t){const r=(await t.json()).error;return Gn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function iv({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function vb(e,{refreshToken:t}){const n=iv(e);return n.append("Authorization",Sb(t)),n}async function sv(e){const t=await e();return t.status>=500&&t.status<600?e():t}function wb(e){return Number(e.replace("s","000"))}function Sb(e){return`${Zy} ${e}`}/**
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
 */async function Eb({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=tv(e),i=iv(e),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Zy,appId:e.appId,sdkVersion:Xy},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await sv(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:nv(u.authToken)}}else throw await rv("Create Installation",l)}/**
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
 */function ov(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function _b(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const kb=/^[cdef][\w-]{21}$/,Du="";function Ib(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Cb(e);return kb.test(n)?n:Du}catch{return Du}}function Cb(e){return _b(e).substr(0,22)}/**
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
 */function ka(e){return`${e.appName}!${e.appId}`}/**
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
 */const av=new Map;function lv(e,t){const n=ka(e);uv(n,t),bb(n,t)}function uv(e,t){const n=av.get(e);if(n)for(const r of n)r(t)}function bb(e,t){const n=xb();n&&n.postMessage({key:e,fid:t}),Tb()}let Nn=null;function xb(){return!Nn&&"BroadcastChannel"in self&&(Nn=new BroadcastChannel("[Firebase] FID Change"),Nn.onmessage=e=>{uv(e.data.key,e.data.fid)}),Nn}function Tb(){av.size===0&&Nn&&(Nn.close(),Nn=null)}/**
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
 */const Pb="firebase-installations-database",Ob=1,Jn="firebase-installations-store";let pl=null;function Yc(){return pl||(pl=cy(Pb,Ob,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Jn)}}})),pl}async function Ko(e,t){const n=ka(e),i=(await Yc()).transaction(Jn,"readwrite"),s=i.objectStore(Jn),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&lv(e,t.fid),t}async function cv(e){const t=ka(e),r=(await Yc()).transaction(Jn,"readwrite");await r.objectStore(Jn).delete(t),await r.done}async function Ia(e,t){const n=ka(e),i=(await Yc()).transaction(Jn,"readwrite"),s=i.objectStore(Jn),o=await s.get(n),a=t(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&lv(e,a.fid),a}/**
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
 */async function Xc(e){let t;const n=await Ia(e.appConfig,r=>{const i=Rb(r),s=Nb(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===Du?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Rb(e){const t=e||{fid:Ib(),registrationStatus:0};return dv(t)}function Nb(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Gn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Ab(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Lb(e)}:{installationEntry:t}}async function Ab(e,t){try{const n=await Eb(e,t);return Ko(e.appConfig,n)}catch(n){throw ev(n)&&n.customData.serverCode===409?await cv(e.appConfig):await Ko(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Lb(e){let t=await Nh(e.appConfig);for(;t.registrationStatus===1;)await ov(100),t=await Nh(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Xc(e);return r||n}return t}function Nh(e){return Ia(e,t=>{if(!t)throw Gn.create("installation-not-found");return dv(t)})}function dv(e){return Db(e)?{fid:e.fid,registrationStatus:0}:e}function Db(e){return e.registrationStatus===1&&e.registrationTime+Yy<Date.now()}/**
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
 */async function jb({appConfig:e,heartbeatServiceProvider:t},n){const r=Mb(e,n),i=vb(e,n),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:Xy,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await sv(()=>fetch(r,a));if(l.ok){const u=await l.json();return nv(u)}else throw await rv("Generate Auth Token",l)}function Mb(e,{fid:t}){return`${tv(e)}/${t}/authTokens:generate`}/**
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
 */async function Zc(e,t=!1){let n;const r=await Ia(e.appConfig,s=>{if(!fv(s))throw Gn.create("not-registered");const o=s.authToken;if(!t&&Fb(o))return s;if(o.requestStatus===1)return n=$b(e,t),s;{if(!navigator.onLine)throw Gn.create("app-offline");const a=Bb(s);return n=Ub(e,a),a}});return n?await n:r.authToken}async function $b(e,t){let n=await Ah(e.appConfig);for(;n.authToken.requestStatus===1;)await ov(100),n=await Ah(e.appConfig);const r=n.authToken;return r.requestStatus===0?Zc(e,t):r}function Ah(e){return Ia(e,t=>{if(!fv(t))throw Gn.create("not-registered");const n=t.authToken;return Hb(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Ub(e,t){try{const n=await jb(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Ko(e.appConfig,r),n}catch(n){if(ev(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await cv(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Ko(e.appConfig,r)}throw n}}function fv(e){return e!==void 0&&e.registrationStatus===2}function Fb(e){return e.requestStatus===2&&!zb(e)}function zb(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+pb}function Bb(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Hb(e){return e.requestStatus===1&&e.requestTime+Yy<Date.now()}/**
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
 */async function Vb(e){const t=e,{installationEntry:n,registrationPromise:r}=await Xc(t);return r?r.catch(console.error):Zc(t).catch(console.error),n.fid}/**
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
 */async function Wb(e,t=!1){const n=e;return await Kb(n),(await Zc(n,t)).token}async function Kb(e){const{registrationPromise:t}=await Xc(e);t&&await t}/**
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
 */function qb(e){if(!e||!e.options)throw gl("App Configuration");if(!e.name)throw gl("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw gl(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function gl(e){return Gn.create("missing-app-config-values",{valueName:e})}/**
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
 */const hv="installations",Gb="installations-internal",Jb=e=>{const t=e.getProvider("app").getImmediate(),n=qb(t),r=Gr(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Qb=e=>{const t=e.getProvider("app").getImmediate(),n=Gr(t,hv).getImmediate();return{getId:()=>Vb(n),getToken:i=>Wb(n,i)}};function Yb(){Bt(new _t(hv,Jb,"PUBLIC")),Bt(new _t(Gb,Qb,"PRIVATE"))}Yb();wt(Qy,Qc);wt(Qy,Qc,"esm2017");/**
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
 */const qo="analytics",Xb="firebase_id",Zb="origin",ex=60*1e3,tx="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ed="https://www.googletagmanager.com/gtag/js";/**
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
 */const De=new Uc("@firebase/analytics");/**
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
 */const nx={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ze=new Zn("analytics","Analytics",nx);/**
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
 */function rx(e){if(!e.startsWith(ed)){const t=ze.create("invalid-gtag-resource",{gtagURL:e});return De.warn(t.message),""}return e}function pv(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function ix(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function sx(e,t){const n=ix("firebase-js-sdk-policy",{createScriptURL:rx}),r=document.createElement("script"),i=`${ed}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function ox(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function ax(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const l=(await pv(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){De.error(a)}e("config",i,s)}async function lx(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await pv(n);for(const l of o){const u=a.find(f=>f.measurementId===l),c=u&&t[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){De.error(s)}}function ux(e,t,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await lx(e,t,n,a,l)}else if(s==="config"){const[a,l]=o;await ax(e,t,n,r,a,l)}else if(s==="consent"){const[a,l]=o;e("consent",a,l)}else if(s==="get"){const[a,l,u]=o;e("get",a,l,u)}else if(s==="set"){const[a]=o;e("set",a)}else e(s,...o)}catch(a){De.error(a)}}return i}function cx(e,t,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=ux(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function dx(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(ed)&&n.src.includes(e))return n;return null}/**
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
 */const fx=30,hx=1e3;class px{constructor(t={},n=hx){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const gv=new px;function gx(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function mx(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:gx(r)},s=tx.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw ze.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function yx(e,t=gv,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw ze.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw ze.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Sx;return setTimeout(async()=>{a.abort()},ex),mv({appId:r,apiKey:i,measurementId:s},o,a,t)}async function mv(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=gv){var s;const{appId:o,measurementId:a}=e;try{await vx(r,t)}catch(l){if(a)return De.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await mx(e);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!wx(u)){if(i.deleteThrottleMetadata(o),a)return De.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?ih(n,i.intervalMillis,fx):ih(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,f),De.debug(`Calling attemptFetch again in ${c} millis`),mv(e,f,r,i)}}function vx(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(ze.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function wx(e){if(!(e instanceof kt)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Sx{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Ex(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,o=Object.assign(Object.assign({},r),{send_to:s});e("event",n,o)}}/**
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
 */async function _x(){if(oy())try{await ay()}catch(e){return De.warn(ze.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return De.warn(ze.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function kx(e,t,n,r,i,s,o){var a;const l=yx(e);l.then(m=>{n[m.measurementId]=m.appId,e.options.measurementId&&m.measurementId!==e.options.measurementId&&De.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>De.error(m)),t.push(l);const u=_x().then(m=>{if(m)return r.getId()}),[c,f]=await Promise.all([l,u]);dx(s)||sx(s,c.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[Zb]="firebase",d.update=!0,f!=null&&(d[Xb]=f),i("config",c.measurementId,d),c.measurementId}/**
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
 */class Ix{constructor(t){this.app=t}_delete(){return delete xi[this.app.options.appId],Promise.resolve()}}let xi={},Lh=[];const Dh={};let ml="dataLayer",Cx="gtag",jh,yv,Mh=!1;function bx(){const e=[];if(sy()&&e.push("This is a browser extension environment."),R_()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=ze.create("invalid-analytics-context",{errorInfo:t});De.warn(n.message)}}function xx(e,t,n){bx();const r=e.options.appId;if(!r)throw ze.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)De.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ze.create("no-api-key");if(xi[r]!=null)throw ze.create("already-exists",{id:r});if(!Mh){ox(ml);const{wrappedGtag:s,gtagCore:o}=cx(xi,Lh,Dh,ml,Cx);yv=s,jh=o,Mh=!0}return xi[r]=kx(e,Lh,Dh,t,jh,ml,n),new Ix(e)}function Tx(e=fy()){e=We(e);const t=Gr(e,qo);return t.isInitialized()?t.getImmediate():Px(e)}function Px(e,t={}){const n=Gr(e,qo);if(n.isInitialized()){const i=n.getImmediate();if(Yi(t,n.getOptions()))return i;throw ze.create("already-initialized")}return n.initialize({options:t})}function Ox(e,t,n,r){e=We(e),Ex(yv,xi[e.app.options.appId],t,n,r).catch(i=>De.error(i))}const $h="@firebase/analytics",Uh="0.10.7";function Rx(){Bt(new _t(qo,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return xx(r,i,n)},"PUBLIC")),Bt(new _t("analytics-internal",e,"PRIVATE")),wt($h,Uh),wt($h,Uh,"esm2017");function e(t){try{const n=t.getProvider(qo).getImmediate();return{logEvent:(r,i,s)=>Ox(n,r,i,s)}}catch(n){throw ze.create("interop-component-reg-failed",{reason:n})}}}Rx();const Nx={apiKey:"AIzaSyCLNRhky8snqJ4QXB31Sa9sIvD3DiIkBwo",authDomain:"schoolish-official.firebaseapp.com",projectId:"schoolish-official",storageBucket:"schoolish-official.appspot.com",messagingSenderId:"510922615291",appId:"1:510922615291:web:cf12894c2209f700b9435e",measurementId:"G-N0JH48SBJX"},vv=dy(Nx);Tx(vv);const st=db(vv),Fh={getUserData:()=>st.currentUser||null},zh=window.location.hostname,Ax=["localhost","127.0.0.1","::1"],Lx=/^(?:192\.168|10|172\.(?:1[6-9]|2\d|3[01]))\.\d{1,3}\.\d{1,3}$/;(Ax.includes(zh)||Lx.test(zh))&&Ay(st,"http://127.0.0.1:9099");const wv={auth:{"auth/admin-restricted-operation":"Esta operação é restrita a administradores.","auth/argument-error":"Argumentos inválidos fornecidos.","auth/app-not-authorized":"Este aplicativo não está autorizado a usar o Firebase.","auth/app-not-installed":"Este aplicativo não está instalado no seu dispositivo.","auth/captcha-check-failed":"A verificação do Google reCAPTCHA falhou.","auth/code-expired":"O código fornecido expirou.","auth/cordova-not-ready":"O Cordova não está pronto.","auth/cors-unsupported":"O CORS não é suportado pelo seu navegador.","auth/credential-already-in-use":"Esta credencial já está associada a outra conta.","auth/custom-token-mismatch":"O token personalizado e a chave da API não match.","auth/requires-recent-login":"Faça login novamente, pois seu último login foi há muito tempo.","auth/dependent-sdk-initialized-before-auth":"Inicialize o Firebase Auth SDK antes de outros SDKs dependentes.","auth/dynamic-link-not-activated":"Links dinâmicos não estão ativados.","auth/email-change-needs-verification":"Verifique seu novo endereço de e-mail.","auth/email-already-in-use":"O endereço de e-mail já está em uso.","auth/emulator-config-failed":"Falha na configuração do emulador.","auth/expired-action-code":"O código de ação expirou.","auth/cancelled-popup-request":"A solicitação de pop-up foi cancelada.","auth/internal-error":"Ocorreu um erro interno.","auth/invalid-api-key":"A chave de API fornecida é inválida.","auth/invalid-app-credential":"A credencial do aplicativo é inválida.","auth/invalid-app-id":"O ID do aplicativo é inválido.","auth/invalid-user-token":"Token de usuário inválido.","auth/invalid-auth-event":"Evento de autenticação inválido.","auth/invalid-cert-hash":"Hash de certificado inválido.","auth/invalid-verification-code":"O código de verificação fornecido é inválido.","auth/invalid-continue-uri":"A URL de continuação é inválida.","auth/invalid-cordova-configuration":"Configuração do Cordova inválida.","auth/invalid-custom-token":"O token personalizado é inválido.","auth/invalid-dynamic-link-domain":"O domínio do link dinâmico é inválido.","auth/invalid-email":"Endereço de e-mail inválido.","auth/invalid-emulator-scheme":"Esquema de emulador inválido.","auth/invalid-credential":"Resposta do provedor de identidade inválida.","auth/invalid-message-payload":"Carga útil da mensagem inválida.","auth/invalid-multi-factor-session":"Sessão de autenticação multifator inválida.","auth/invalid-oauth-client-id":"ID do cliente OAuth inválido.","auth/invalid-oauth-provider":"Provedor OAuth inválido.","auth/invalid-action-code":"O código de ação de redefinição de senha é inválido.","auth/unauthorized-domain":"Não autorizado domínio.","auth/wrong-password":"Senha incorreta.","auth/invalid-persistence-type":"Tipo de persistência inválido.","auth/invalid-phone-number":"Número de telefone inválido.","auth/invalid-provider-id":"ID do provedor inválido.","auth/invalid-recipient-email":"E-mail do destinatário inválido.","auth/invalid-sender":"Remetente inválido.","auth/invalid-verification-id":"ID de verificação inválido.","auth/invalid-tenant-id":"ID do locatário inválido.","auth/multi-factor-info-not-found":"Informações de autenticação multifator não encontradas.","auth/multi-factor-auth-required":"A autenticação multifator é necessária.","auth/missing-android-pkg-name":"Nome do pacote Android ausente.","auth/missing-app-credential":"Credencial do aplicativo ausente.","auth/auth-domain-config-required":"Configuração do domínio de autenticação ausente.","auth/missing-verification-code":"Código de verificação ausente.","auth/missing-continue-uri":"URL de continuação ausente.","auth/missing-iframe-start":"Início do iframe ausente.","auth/missing-ios-bundle-id":"ID do pacote iOS ausente.","auth/missing-or-invalid-nonce":"Nonce ausente ou inválido.","auth/missing-multi-factor-info":"Informações de autenticação multifator ausentes.","auth/missing-multi-factor-session":"Sessão de autenticação multifator ausente.","auth/missing-phone-number":"Número de telefone ausente.","auth/missing-verification-id":"ID de verificação ausente.","auth/app-deleted":"O módulo de autenticação foi excluído.","auth/account-exists-with-different-credential":"Uma conta com este e-mail já existe com uma credencial diferente.","auth/network-request-failed":"Uma solicitação de rede falhou.","auth/null-user":"Nenhum usuário está conectado no momento.","auth/no-auth-event":"Nenhum evento de autenticação.","auth/no-such-provider":"Nenhum Provedor de Identidade.","auth/operation-not-allowed":"Esta operação não é permitida.","auth/operation-not-supported-in-this-environment":"Esta operação não é suportada em seu ambiente atual.","auth/popup-blocked":"Popup bloqueado pelo navegador.","auth/popup-closed-by-user":"Popup fechado pelo usuário.","auth/provider-already-linked":"Este provedor já está vinculado à sua conta.","auth/quota-exceeded":"Cota excedida.","auth/redirect-cancelled-by-user":"Redirecionamento cancelado pelo usuário.","auth/redirect-operation-pending":"A operação de redirecionamento está pendente.","auth/rejected-credential":"Credencial rejeitada.","auth/second-factor-already-in-use":"Método de autenticação de segundo fator já em uso.","auth/maximum-second-factor-count-exceeded":"Número máximo de métodos de segundo fator excedido.","auth/tenant-id-mismatch":"Incompatibilidade de ID do locatário.","auth/timeout":"Ocorreu um tempo limite.","auth/user-token-expired":"O token do usuário expirou.","auth/too-many-requests":"Muitas tentativas. Tente novamente mais tarde.","auth/unauthorized-continue-uri":"Não autorizado continuar URL.","auth/unsupported-first-factor":"Método de autenticação de primeiro fator não suportado.","auth/unsupported-persistence-type":"Tipo de persistência não suportado.","auth/unsupported-tenant-operation":"Operação de locatário não suportada.","auth/unverified-email":"Endereço de e-mail não verificado.","auth/user-cancelled":"O usuário cancelou a autenticação.","auth/user-not-found":"Usuário não encontrado.","auth/user-disabled":"A conta do usuário está desabilitada.","auth/user-mismatch":"Incompatibilidade de usuário.","auth/user-signed-out":"O usuário saiu.","auth/weak-password":"A senha é fraca.","auth/web-storage-unsupported":"O armazenamento na Web não é suportado pelo seu navegador.","auth/already-initialized":"O Firebase Auth já foi inicializado.","auth/recaptcha-not-enabled":"O Google reCAPTCHA não está habilitado.","auth/missing-recaptcha-token":"Token Google reCAPTCHA ausente.","auth/invalid-recaptcha-token":"Token Google reCAPTCHA inválido.","auth/invalid-recaptcha-action":"Ação Google reCAPTCHA inválida.","auth/missing-client-type":"Tipo de cliente ausente.","auth/missing-recaptcha-version":"Versão Google reCAPTCHA ausente.","auth/invalid-recaptcha-version":"Versão Google reCAPTCHA inválida.","auth/invalid-req-type":"Solicitação inválida tipo."}};function Dx(){var e;return S.jsxs(S.Fragment,{children:[!Fh.getUserData()&&S.jsx(Nc,{to:"/login",replace:!0}),S.jsx("h1",{children:"Dashboard"}),S.jsx("p",{children:(e=Fh.getUserData())==null?void 0:e.email})]})}function Ti(e){const t=e.ref.current;t.innerHTML=`
      <div class="${e.type==="error"?"alert-danger":e.type==="warning"?"alert-warning":e.type==="info"?"alert-info":"alert-success"} alert d-flex align-items-center fade show" role="alert" style="justify-content: space-between;">
      ${e.message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"style="margin-left: 5px;"></button>
    </div>
    `}function jx(){const[e,t]=P.useState(""),[n,r]=P.useState(""),[i,s]=P.useState(!1),o=P.useRef(null);P.useEffect(()=>{const l=Fy(st,u=>{s(!!u)});return()=>l()},[]);function a(l){if(l.preventDefault(),!e||!n){Ti({ref:o,type:"info",message:"Preencha todos os campos."});return}Uy(st,Sa).then(async()=>{await GI(st,e,n).then(()=>{s(!0)}).catch(u=>{const c=String(u.message).replace("Firebase: Error (","").replace(").",""),f=wv.auth[c]||"Erro desconhecido. Tente novamente mais tarde ou <a href=''>atualize a página</a>.";Ti({ref:o,type:"warning",message:f})})})}return S.jsxs(Mx,{children:[i&&S.jsx(Nc,{to:"/dashboard",replace:!0}),S.jsxs("div",{className:"form-structor",children:[S.jsxs("form",{className:"signup",onSubmit:a,children:[S.jsx("h2",{className:"form-title",id:"signup",style:{fontWeight:"bolder",marginBottom:"20px"},children:"Seja bem-vindo!"}),S.jsx("div",{className:"alertMessageBox",ref:o}),S.jsxs("div",{className:"form-holder",children:[S.jsx("input",{type:"email",className:"input",placeholder:"E-mail",onInput:l=>t(l.currentTarget.value),value:e}),S.jsx("input",{type:"password",className:"input",placeholder:"Senha",onInput:l=>r(l.currentTarget.value),value:n})]}),S.jsx("button",{className:"submit-btn",type:"submit",children:"Entrar"})]}),S.jsx("div",{className:"login slide-up",children:S.jsx("div",{className:"center",children:S.jsxs("h2",{className:"form-title",id:"login",children:["ou ",S.jsx("strong",{onClick:()=>window.location.href="/signup",children:"cadastre-se"})]})})})]})]})}const Mx=qr.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #e3e3e3;

  .form-structor {
    background-color: #222;
    border-radius: 15px;
    height: 650px;
    width: 450px;
    position: relative;
    overflow: hidden;

    @media (max-width: 600px) {
      height: 100vh;
      width: 100vw;
      border-radius: 0px;
    }


    &::after {
      content: "";
      opacity: 0.5;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 1000px;
      background-image: url("https://images.unsplash.com/photo-1554042317-efd62f19bc95?q=80&w=1982&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    }

    .signup {
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      width: 65%;
      z-index: 5;
      -webkit-transition: all 0.3s ease;
      transition: all 0.3s ease;

      &.slide-up {
        top: 5%;
        -webkit-transform: translate(-50%, 0%);
        transform: translate(-50%, 0%);
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      &.slide-up .form-holder,
      &.slide-up .submit-btn {
        opacity: 0;
        visibility: hidden;
      }

      &.slide-up .form-title {
        font-size: 1em;
        cursor: pointer;
      }

      &.slide-up .form-title span {
        margin-right: 5px;
        opacity: 1;
        visibility: visible;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .form-title {
        color: #fff;
        font-size: 1.7em;
        text-align: center;

        span {
          color: #fff;
          opacity: 0;
          visibility: hidden;
          -webkit-transition: all 0.3s ease;
          transition: all 0.3s ease;
        }
      }

      .form-holder {
        border-radius: 15px;
        background-color: ${Se.mainColor};
        overflow: hidden;
        margin-top: 50px;
        opacity: 1;
        visibility: visible;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;

        .input {
          border: 0;
          outline: none;
          box-shadow: none;
          display: block;
          height: 50px;
          line-height: 30px;
          padding: 8px 15px;
          border-bottom: 1px solid #eee;
          width: 100%;
          font-size: 12px;

          &:last-child {
            border-bottom: 0;
          }
          &::-webkit-input-placeholder {
            color: rgba(0, 0, 0, 0.4);
          }
        }
      }

      .submit-btn {
        background-color: ${Se.mainColor};
        color: white;
        border: 0;
        border-radius: 15px;
        display: block;
        margin: 15px auto;
        padding: 15px 45px;
        width: 100%;
        font-size: 13px;
        font-weight: bolder;
        cursor: pointer;
        opacity: 1;
        visibility: visible;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;

        &:hover {
          transition: all 0.3s ease;
          background-color: ${Se.secondaryColor};
        }
      }
    }

    .login {
      position: absolute;
      top: 20%;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #fff;
      z-index: 5;
      transition: all 0.3s ease;
      -webkit-transition: all 0.3s ease;

      display: flex;
      justify-content: center;
      align-items: center;

      &::before {
        content: "";
        position: absolute;
        left: 50%;
        top: -20px;
        -webkit-transform: translate(-50%, 0);
        transform: translate(-50%, 0);
        background-color: ${Se.mainColor};
        width: 200%;
        height: 250px;
        border-radius: 50%;
        z-index: 4;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;

      }

      .center {
        position: absolute;
        top: calc(50% - 10%);
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        width: 65%;
        z-index: 5;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;

        .form-title {
          color: #fff;
          font-size: 1.7em;
          text-align: center;

          span {
            color: #fff;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            -webkit-transition: all 0.3s ease;
          }
        }

        .form-holder {
          border-radius: 15px;
          background-color: ${Se.mainColorLight};
          border: 1px solid #eee;
          overflow: hidden;
          margin-top: 50px;
          opacity: 1;
          visibility: visible;
          -webkit-transition: all 0.3s ease;
          transition: all 0.3s ease;

          .input {
            border: 0;
            outline: none;
            box-shadow: none;
            display: block;
            height: 30px;
            line-height: 30px;
            padding: 8px 15px;
            border-bottom: 1px solid #eee;
            width: 100%;
            font-size: 12px;

            &:last-child {
              border-bottom: 0;
            }
            &::-webkit-input-placeholder {
              color: rgba(0, 0, 0, 0.4);
            }
          }
        }

        .submit-btn {
          background-color: #6b92a4;
          color: white;
          border: 0;
          border-radius: 15px;
          display: block;
          margin: 15px auto;
          padding: 15px 45px;
          width: 100%;
          font-size: 13px;
          font-weight: bolder;
          cursor: pointer;
          opacity: 1;
          visibility: visible;
          transition: all 0.3s ease;
          -webkit-transition: all 0.3s ease;

          &:hover {
            transition: all 0.3s ease;
            background-color: rgba(0, 0, 0, 0.8);
          }
        }
      }

      &.slide-up {
        top: 90%;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;
      }

      &.slide-up .center {
        top: 10%;
        -webkit-transform: translate(-50%, 0%);
        transform: translate(-50%, 0%);
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      &.slide-up .form-holder,
      &.slide-up .submit-btn {
        opacity: 0;
        visibility: hidden;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      &.slide-up .form-title {
        font-size: 1em;
        margin: 0;
        padding: 0;
        cursor: pointer;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;
      }

      &.slide-up .form-title span {
        margin-right: 5px;
        opacity: 1;
        visibility: visible;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;
      }
    }
  }
`;function $x(){const[e,t]=P.useState(""),[n,r]=P.useState(""),[i,s]=P.useState(!1),[o,a]=P.useState(""),l=P.useRef(null);P.useEffect(()=>{const c=Fy(st,f=>{s(!!f)});return()=>c()},[]);function u(c){if(c.preventDefault(),!e||!n){Ti({ref:l,type:"info",message:"Preencha todos os campos."});return}Uy(st,Sa).then(async()=>{await qI(st,e,n).then(()=>{st.currentUser&&(YI(st.currentUser,{displayName:o}),JI(st.currentUser).then(()=>{Ti({ref:l,type:"info",message:"Enviamos um e-mail de verificação para você. Verifique sua caixa de entrada e <i>span</i>."})}))}).catch(f=>{const d=String(f.message).replace("Firebase: Error (","").replace(").",""),m=wv.auth[d]||"Erro desconhecido. Tente novamente mais tarde ou <a href=''>atualize a página</a>.";Ti({ref:l,type:"warning",message:m})})})}return S.jsxs(Ux,{children:[i&&S.jsx(Nc,{to:"/dashboard",replace:!0}),S.jsxs("div",{className:"form-structor",children:[S.jsxs("form",{className:"signup",onSubmit:u,children:[S.jsx("h2",{className:"form-title",id:"signup",style:{fontWeight:"bolder",marginBottom:"20px"},children:"Sua primeira vez aqui?"}),S.jsx("div",{className:"alertMessageBox",ref:l}),S.jsxs("div",{className:"form-holder",children:[S.jsx("input",{type:"text",className:"input",placeholder:"Nome",onInput:c=>a(c.currentTarget.value),value:o}),S.jsx("input",{type:"email",className:"input",placeholder:"E-mail",onInput:c=>t(c.currentTarget.value),value:e}),S.jsx("input",{type:"password",className:"input",placeholder:"Senha",onInput:c=>r(c.currentTarget.value),value:n})]}),S.jsx("button",{className:"submit-btn",type:"submit",children:"Cadastrar"})]}),S.jsx("div",{className:"login slide-up",children:S.jsx("div",{className:"center",children:S.jsxs("h2",{className:"form-title",id:"login",children:["ou ",S.jsx("strong",{onClick:()=>window.location.href="/login",children:"faça login"})]})})})]})]})}const Ux=qr.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #e3e3e3;

  .form-structor {
    background-color: #222;
    border-radius: 15px;
    height: 650px;
    width: 450px;
    position: relative;
    overflow: hidden;

    @media (max-width: 600px) {
      height: 100vh;
      width: 100vw;
      border-radius: 0px;
    }

    &::after {
      content: "";
      opacity: 0.5;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 1000px;
      background-image: url("https://images.unsplash.com/photo-1554042317-efd62f19bc95?q=80&w=1982&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    }

    .signup {
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      width: 65%;
      z-index: 5;
      -webkit-transition: all 0.3s ease;
      transition: all 0.3s ease;

      &.slide-up {
        top: 5%;
        -webkit-transform: translate(-50%, 0%);
        transform: translate(-50%, 0%);
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      &.slide-up .form-holder,
      &.slide-up .submit-btn {
        opacity: 0;
        visibility: hidden;
      }

      &.slide-up .form-title {
        font-size: 1em;
        cursor: pointer;
      }

      &.slide-up .form-title span {
        margin-right: 5px;
        opacity: 1;
        visibility: visible;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .form-title {
        color: #fff;
        font-size: 1.7em;
        text-align: center;

        span {
          color: #fff;
          opacity: 0;
          visibility: hidden;
          -webkit-transition: all 0.3s ease;
          transition: all 0.3s ease;
        }
      }

      .form-holder {
        border-radius: 15px;
        background-color: ${Se.mainColor};
        overflow: hidden;
        margin-top: 50px;
        opacity: 1;
        visibility: visible;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;

        .input {
          border: 0;
          outline: none;
          box-shadow: none;
          display: block;
          height: 50px;
          line-height: 30px;
          padding: 8px 15px;
          border-bottom: 1px solid #eee;
          width: 100%;
          font-size: 12px;

          &:last-child {
            border-bottom: 0;
          }
          &::-webkit-input-placeholder {
            color: rgba(0, 0, 0, 0.4);
          }
        }
      }

      .submit-btn {
        background-color: ${Se.mainColor};
        color: white;
        border: 0;
        border-radius: 15px;
        display: block;
        margin: 15px auto;
        padding: 15px 45px;
        width: 100%;
        font-size: 13px;
        font-weight: bolder;
        cursor: pointer;
        opacity: 1;
        visibility: visible;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;

        &:hover {
          transition: all 0.3s ease;
          background-color: ${Se.secondaryColor};
        }
      }
    }

    .login {
      position: absolute;
      top: 20%;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #fff;
      z-index: 5;
      transition: all 0.3s ease;
      -webkit-transition: all 0.3s ease;

      display: flex;
      justify-content: center;
      align-items: center;

      &::before {
        content: "";
        position: absolute;
        left: 50%;
        top: -20px;
        -webkit-transform: translate(-50%, 0);
        transform: translate(-50%, 0);
        background-color: ${Se.mainColor};
        width: 200%;
        height: 250px;
        border-radius: 50%;
        z-index: 4;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;
      }

      .center {
        position: absolute;
        top: calc(50% - 10%);
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        width: 65%;
        z-index: 5;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;

        .form-title {
          color: #fff;
          font-size: 1.7em;
          text-align: center;

          span {
            color: #fff;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            -webkit-transition: all 0.3s ease;
          }
        }

        .form-holder {
          border-radius: 15px;
          background-color: ${Se.mainColorLight};
          border: 1px solid #eee;
          overflow: hidden;
          margin-top: 50px;
          opacity: 1;
          visibility: visible;
          -webkit-transition: all 0.3s ease;
          transition: all 0.3s ease;

          .input {
            border: 0;
            outline: none;
            box-shadow: none;
            display: block;
            height: 30px;
            line-height: 30px;
            padding: 8px 15px;
            border-bottom: 1px solid #eee;
            width: 100%;
            font-size: 12px;

            &:last-child {
              border-bottom: 0;
            }
            &::-webkit-input-placeholder {
              color: rgba(0, 0, 0, 0.4);
            }
          }
        }

        .submit-btn {
          background-color: #6b92a4;
          color: white;
          border: 0;
          border-radius: 15px;
          display: block;
          margin: 15px auto;
          padding: 15px 45px;
          width: 100%;
          font-size: 13px;
          font-weight: bolder;
          cursor: pointer;
          opacity: 1;
          visibility: visible;
          transition: all 0.3s ease;
          -webkit-transition: all 0.3s ease;

          &:hover {
            transition: all 0.3s ease;
            background-color: rgba(0, 0, 0, 0.8);
          }
        }
      }

      &.slide-up {
        top: 90%;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;
      }

      &.slide-up .center {
        top: 10%;
        -webkit-transform: translate(-50%, 0%);
        transform: translate(-50%, 0%);
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      &.slide-up .form-holder,
      &.slide-up .submit-btn {
        opacity: 0;
        visibility: hidden;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      &.slide-up .form-title {
        font-size: 1em;
        margin: 0;
        padding: 0;
        cursor: pointer;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;
      }

      &.slide-up .form-title span {
        margin-right: 5px;
        opacity: 1;
        visibility: visible;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;
      }
    }
  }
`;function Fx(){return S.jsx(S.Fragment,{children:S.jsx(P.Suspense,{fallback:S.jsx(G1,{}),children:S.jsxs(M1,{children:[S.jsx(q1,{}),S.jsxs(L1,{children:[S.jsx(ci,{path:"/",element:S.jsx(y_,{})}),S.jsx(ci,{path:"/signup",element:S.jsx($x,{})}),S.jsx(ci,{path:"/login",element:S.jsx(jx,{})}),S.jsx(ci,{path:"/dashboard",element:S.jsx(Dx,{})})]})]})})})}nm(document.getElementById("root")).render(S.jsx(P.StrictMode,{children:S.jsx(Fx,{})}));
