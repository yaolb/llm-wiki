(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function i(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(s){if(s.ep)return;s.ep=!0;const c=i(s);fetch(s.href,c)}})();function As(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ga={exports:{}},Cn={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wd;function xm(){if(wd)return Cn;wd=1;var t=Symbol.for("react.element"),l=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),h=Symbol.iterator;function v(L){return L===null||typeof L!="object"?null:(L=h&&L[h]||L["@@iterator"],typeof L=="function"?L:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,_={};function b(L,N,C){this.props=L,this.context=N,this.refs=_,this.updater=C||A}b.prototype.isReactComponent={},b.prototype.setState=function(L,N){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,N,"setState")},b.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function M(){}M.prototype=b.prototype;function U(L,N,C){this.props=L,this.context=N,this.refs=_,this.updater=C||A}var B=U.prototype=new M;B.constructor=U,E(B,b.prototype),B.isPureReactComponent=!0;var rn=Array.isArray,un=Object.prototype.hasOwnProperty,O={current:null},V={key:!0,ref:!0,__self:!0,__source:!0};function en(L,N,C){var mn,vn={},gn=null,Pn=null;if(N!=null)for(mn in N.ref!==void 0&&(Pn=N.ref),N.key!==void 0&&(gn=""+N.key),N)un.call(N,mn)&&!V.hasOwnProperty(mn)&&(vn[mn]=N[mn]);var Sn=arguments.length-2;if(Sn===1)vn.children=C;else if(1<Sn){for(var Tn=Array(Sn),Vn=0;Vn<Sn;Vn++)Tn[Vn]=arguments[Vn+2];vn.children=Tn}if(L&&L.defaultProps)for(mn in Sn=L.defaultProps,Sn)vn[mn]===void 0&&(vn[mn]=Sn[mn]);return{$$typeof:t,type:L,key:gn,ref:Pn,props:vn,_owner:O.current}}function cn(L,N){return{$$typeof:t,type:L.type,key:N,ref:L.ref,props:L.props,_owner:L._owner}}function D(L){return typeof L=="object"&&L!==null&&L.$$typeof===t}function Z(L){var N={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(C){return N[C]})}var Q=/\/+/g;function $(L,N){return typeof L=="object"&&L!==null&&L.key!=null?Z(""+L.key):N.toString(36)}function Y(L,N,C,mn,vn){var gn=typeof L;(gn==="undefined"||gn==="boolean")&&(L=null);var Pn=!1;if(L===null)Pn=!0;else switch(gn){case"string":case"number":Pn=!0;break;case"object":switch(L.$$typeof){case t:case l:Pn=!0}}if(Pn)return Pn=L,vn=vn(Pn),L=mn===""?"."+$(Pn,0):mn,rn(vn)?(C="",L!=null&&(C=L.replace(Q,"$&/")+"/"),Y(vn,N,C,"",function(Vn){return Vn})):vn!=null&&(D(vn)&&(vn=cn(vn,C+(!vn.key||Pn&&Pn.key===vn.key?"":(""+vn.key).replace(Q,"$&/")+"/")+L)),N.push(vn)),1;if(Pn=0,mn=mn===""?".":mn+":",rn(L))for(var Sn=0;Sn<L.length;Sn++){gn=L[Sn];var Tn=mn+$(gn,Sn);Pn+=Y(gn,N,C,Tn,vn)}else if(Tn=v(L),typeof Tn=="function")for(L=Tn.call(L),Sn=0;!(gn=L.next()).done;)gn=gn.value,Tn=mn+$(gn,Sn++),Pn+=Y(gn,N,C,Tn,vn);else if(gn==="object")throw N=String(L),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return Pn}function an(L,N,C){if(L==null)return L;var mn=[],vn=0;return Y(L,mn,"","",function(gn){return N.call(C,gn,vn++)}),mn}function xn(L){if(L._status===-1){var N=L._result;N=N(),N.then(function(C){(L._status===0||L._status===-1)&&(L._status=1,L._result=C)},function(C){(L._status===0||L._status===-1)&&(L._status=2,L._result=C)}),L._status===-1&&(L._status=0,L._result=N)}if(L._status===1)return L._result.default;throw L._result}var yn={current:null},J={transition:null},sn={ReactCurrentDispatcher:yn,ReactCurrentBatchConfig:J,ReactCurrentOwner:O};function S(){throw Error("act(...) is not supported in production builds of React.")}return Cn.Children={map:an,forEach:function(L,N,C){an(L,function(){N.apply(this,arguments)},C)},count:function(L){var N=0;return an(L,function(){N++}),N},toArray:function(L){return an(L,function(N){return N})||[]},only:function(L){if(!D(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},Cn.Component=b,Cn.Fragment=i,Cn.Profiler=s,Cn.PureComponent=U,Cn.StrictMode=a,Cn.Suspense=g,Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sn,Cn.act=S,Cn.cloneElement=function(L,N,C){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var mn=E({},L.props),vn=L.key,gn=L.ref,Pn=L._owner;if(N!=null){if(N.ref!==void 0&&(gn=N.ref,Pn=O.current),N.key!==void 0&&(vn=""+N.key),L.type&&L.type.defaultProps)var Sn=L.type.defaultProps;for(Tn in N)un.call(N,Tn)&&!V.hasOwnProperty(Tn)&&(mn[Tn]=N[Tn]===void 0&&Sn!==void 0?Sn[Tn]:N[Tn])}var Tn=arguments.length-2;if(Tn===1)mn.children=C;else if(1<Tn){Sn=Array(Tn);for(var Vn=0;Vn<Tn;Vn++)Sn[Vn]=arguments[Vn+2];mn.children=Sn}return{$$typeof:t,type:L.type,key:vn,ref:gn,props:mn,_owner:Pn}},Cn.createContext=function(L){return L={$$typeof:u,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:c,_context:L},L.Consumer=L},Cn.createElement=en,Cn.createFactory=function(L){var N=en.bind(null,L);return N.type=L,N},Cn.createRef=function(){return{current:null}},Cn.forwardRef=function(L){return{$$typeof:f,render:L}},Cn.isValidElement=D,Cn.lazy=function(L){return{$$typeof:y,_payload:{_status:-1,_result:L},_init:xn}},Cn.memo=function(L,N){return{$$typeof:m,type:L,compare:N===void 0?null:N}},Cn.startTransition=function(L){var N=J.transition;J.transition={};try{L()}finally{J.transition=N}},Cn.unstable_act=S,Cn.useCallback=function(L,N){return yn.current.useCallback(L,N)},Cn.useContext=function(L){return yn.current.useContext(L)},Cn.useDebugValue=function(){},Cn.useDeferredValue=function(L){return yn.current.useDeferredValue(L)},Cn.useEffect=function(L,N){return yn.current.useEffect(L,N)},Cn.useId=function(){return yn.current.useId()},Cn.useImperativeHandle=function(L,N,C){return yn.current.useImperativeHandle(L,N,C)},Cn.useInsertionEffect=function(L,N){return yn.current.useInsertionEffect(L,N)},Cn.useLayoutEffect=function(L,N){return yn.current.useLayoutEffect(L,N)},Cn.useMemo=function(L,N){return yn.current.useMemo(L,N)},Cn.useReducer=function(L,N,C){return yn.current.useReducer(L,N,C)},Cn.useRef=function(L){return yn.current.useRef(L)},Cn.useState=function(L){return yn.current.useState(L)},Cn.useSyncExternalStore=function(L,N,C){return yn.current.useSyncExternalStore(L,N,C)},Cn.useTransition=function(){return yn.current.useTransition()},Cn.version="18.3.1",Cn}var Cd;function vs(){return Cd||(Cd=1,Ga.exports=xm()),Ga.exports}var En=vs();const Er=As(En);var Bl={},ja={exports:{}},ye={},Ha={exports:{}},Ua={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xd;function Im(){return xd||(xd=1,function(t){function l(J,sn){var S=J.length;J.push(sn);n:for(;0<S;){var L=S-1>>>1,N=J[L];if(0<s(N,sn))J[L]=sn,J[S]=N,S=L;else break n}}function i(J){return J.length===0?null:J[0]}function a(J){if(J.length===0)return null;var sn=J[0],S=J.pop();if(S!==sn){J[0]=S;n:for(var L=0,N=J.length,C=N>>>1;L<C;){var mn=2*(L+1)-1,vn=J[mn],gn=mn+1,Pn=J[gn];if(0>s(vn,S))gn<N&&0>s(Pn,vn)?(J[L]=Pn,J[gn]=S,L=gn):(J[L]=vn,J[mn]=S,L=mn);else if(gn<N&&0>s(Pn,S))J[L]=Pn,J[gn]=S,L=gn;else break n}}return sn}function s(J,sn){var S=J.sortIndex-sn.sortIndex;return S!==0?S:J.id-sn.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;t.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();t.unstable_now=function(){return u.now()-f}}var g=[],m=[],y=1,h=null,v=3,A=!1,E=!1,_=!1,b=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function B(J){for(var sn=i(m);sn!==null;){if(sn.callback===null)a(m);else if(sn.startTime<=J)a(m),sn.sortIndex=sn.expirationTime,l(g,sn);else break;sn=i(m)}}function rn(J){if(_=!1,B(J),!E)if(i(g)!==null)E=!0,xn(un);else{var sn=i(m);sn!==null&&yn(rn,sn.startTime-J)}}function un(J,sn){E=!1,_&&(_=!1,M(en),en=-1),A=!0;var S=v;try{for(B(sn),h=i(g);h!==null&&(!(h.expirationTime>sn)||J&&!Z());){var L=h.callback;if(typeof L=="function"){h.callback=null,v=h.priorityLevel;var N=L(h.expirationTime<=sn);sn=t.unstable_now(),typeof N=="function"?h.callback=N:h===i(g)&&a(g),B(sn)}else a(g);h=i(g)}if(h!==null)var C=!0;else{var mn=i(m);mn!==null&&yn(rn,mn.startTime-sn),C=!1}return C}finally{h=null,v=S,A=!1}}var O=!1,V=null,en=-1,cn=5,D=-1;function Z(){return!(t.unstable_now()-D<cn)}function Q(){if(V!==null){var J=t.unstable_now();D=J;var sn=!0;try{sn=V(!0,J)}finally{sn?$():(O=!1,V=null)}}else O=!1}var $;if(typeof U=="function")$=function(){U(Q)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,an=Y.port2;Y.port1.onmessage=Q,$=function(){an.postMessage(null)}}else $=function(){b(Q,0)};function xn(J){V=J,O||(O=!0,$())}function yn(J,sn){en=b(function(){J(t.unstable_now())},sn)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(J){J.callback=null},t.unstable_continueExecution=function(){E||A||(E=!0,xn(un))},t.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):cn=0<J?Math.floor(1e3/J):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return i(g)},t.unstable_next=function(J){switch(v){case 1:case 2:case 3:var sn=3;break;default:sn=v}var S=v;v=sn;try{return J()}finally{v=S}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(J,sn){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var S=v;v=J;try{return sn()}finally{v=S}},t.unstable_scheduleCallback=function(J,sn,S){var L=t.unstable_now();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?L+S:L):S=L,J){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=S+N,J={id:y++,callback:sn,priorityLevel:J,startTime:S,expirationTime:N,sortIndex:-1},S>L?(J.sortIndex=S,l(m,J),i(g)===null&&J===i(m)&&(_?(M(en),en=-1):_=!0,yn(rn,S-L))):(J.sortIndex=N,l(g,J),E||A||(E=!0,xn(un))),J},t.unstable_shouldYield=Z,t.unstable_wrapCallback=function(J){var sn=v;return function(){var S=v;v=sn;try{return J.apply(this,arguments)}finally{v=S}}}}(Ua)),Ua}var Id;function Em(){return Id||(Id=1,Ha.exports=Im()),Ha.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ed;function Lm(){if(Ed)return ye;Ed=1;var t=vs(),l=Em();function i(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,s={};function c(n,e){u(n,e),u(n+"Capture",e)}function u(n,e){for(s[n]=e,n=0;n<e.length;n++)a.add(e[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},h={};function v(n){return g.call(h,n)?!0:g.call(y,n)?!1:m.test(n)?h[n]=!0:(y[n]=!0,!1)}function A(n,e,r,o){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,e,r,o){if(e===null||typeof e>"u"||A(n,e,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function _(n,e,r,o,d,p,k){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=o,this.attributeNamespace=d,this.mustUseProperty=r,this.propertyName=n,this.type=e,this.sanitizeURL=p,this.removeEmptyString=k}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){b[n]=new _(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];b[e]=new _(e,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){b[n]=new _(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){b[n]=new _(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){b[n]=new _(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){b[n]=new _(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){b[n]=new _(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){b[n]=new _(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){b[n]=new _(n,5,!1,n.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function U(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(M,U);b[e]=new _(e,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(M,U);b[e]=new _(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(M,U);b[e]=new _(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){b[n]=new _(n,1,!1,n.toLowerCase(),null,!1,!1)}),b.xlinkHref=new _("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){b[n]=new _(n,1,!1,n.toLowerCase(),null,!0,!0)});function B(n,e,r,o){var d=b.hasOwnProperty(e)?b[e]:null;(d!==null?d.type!==0:o||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(E(e,r,d,o)&&(r=null),o||d===null?v(e)&&(r===null?n.removeAttribute(e):n.setAttribute(e,""+r)):d.mustUseProperty?n[d.propertyName]=r===null?d.type===3?!1:"":r:(e=d.attributeName,o=d.attributeNamespace,r===null?n.removeAttribute(e):(d=d.type,r=d===3||d===4&&r===!0?"":""+r,o?n.setAttributeNS(o,e,r):n.setAttribute(e,r))))}var rn=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,un=Symbol.for("react.element"),O=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),en=Symbol.for("react.strict_mode"),cn=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),Z=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),an=Symbol.for("react.memo"),xn=Symbol.for("react.lazy"),yn=Symbol.for("react.offscreen"),J=Symbol.iterator;function sn(n){return n===null||typeof n!="object"?null:(n=J&&n[J]||n["@@iterator"],typeof n=="function"?n:null)}var S=Object.assign,L;function N(n){if(L===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);L=e&&e[1]||""}return`
`+L+n}var C=!1;function mn(n,e){if(!n||C)return"";C=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(T){var o=T}Reflect.construct(n,[],e)}else{try{e.call()}catch(T){o=T}n.call(e.prototype)}else{try{throw Error()}catch(T){o=T}n()}}catch(T){if(T&&o&&typeof T.stack=="string"){for(var d=T.stack.split(`
`),p=o.stack.split(`
`),k=d.length-1,w=p.length-1;1<=k&&0<=w&&d[k]!==p[w];)w--;for(;1<=k&&0<=w;k--,w--)if(d[k]!==p[w]){if(k!==1||w!==1)do if(k--,w--,0>w||d[k]!==p[w]){var x=`
`+d[k].replace(" at new "," at ");return n.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",n.displayName)),x}while(1<=k&&0<=w);break}}}finally{C=!1,Error.prepareStackTrace=r}return(n=n?n.displayName||n.name:"")?N(n):""}function vn(n){switch(n.tag){case 5:return N(n.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return n=mn(n.type,!1),n;case 11:return n=mn(n.type.render,!1),n;case 1:return n=mn(n.type,!0),n;default:return""}}function gn(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case V:return"Fragment";case O:return"Portal";case cn:return"Profiler";case en:return"StrictMode";case $:return"Suspense";case Y:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Z:return(n.displayName||"Context")+".Consumer";case D:return(n._context.displayName||"Context")+".Provider";case Q:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case an:return e=n.displayName||null,e!==null?e:gn(n.type)||"Memo";case xn:e=n._payload,n=n._init;try{return gn(n(e))}catch{}}return null}function Pn(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gn(e);case 8:return e===en?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Sn(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Tn(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Vn(n){var e=Tn(n)?"checked":"value",r=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),o=""+n[e];if(!n.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var d=r.get,p=r.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return d.call(this)},set:function(k){o=""+k,p.call(this,k)}}),Object.defineProperty(n,e,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(k){o=""+k},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Ye(n){n._valueTracker||(n._valueTracker=Vn(n))}function Li(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var r=e.getValue(),o="";return n&&(o=Tn(n)?n.checked?"true":"false":n.value),n=o,n!==r?(e.setValue(n),!0):!1}function Xt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Rr(n,e){var r=e.checked;return S({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??n._wrapperState.initialChecked})}function Pr(n,e){var r=e.defaultValue==null?"":e.defaultValue,o=e.checked!=null?e.checked:e.defaultChecked;r=Sn(e.value!=null?e.value:r),n._wrapperState={initialChecked:o,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Dr(n,e){e=e.checked,e!=null&&B(n,"checked",e,!1)}function Zt(n,e){Dr(n,e);var r=Sn(e.value),o=e.type;if(r!=null)o==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+r):n.value!==""+r&&(n.value=""+r);else if(o==="submit"||o==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?nr(n,e.type,r):e.hasOwnProperty("defaultValue")&&nr(n,e.type,Sn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function _i(n,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var o=e.type;if(!(o!=="submit"&&o!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,r||e===n.value||(n.value=e),n.defaultValue=e}r=n.name,r!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,r!==""&&(n.name=r)}function nr(n,e,r){(e!=="number"||Xt(n.ownerDocument)!==n)&&(r==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+r&&(n.defaultValue=""+r))}var st=Array.isArray;function ut(n,e,r,o){if(n=n.options,e){e={};for(var d=0;d<r.length;d++)e["$"+r[d]]=!0;for(r=0;r<n.length;r++)d=e.hasOwnProperty("$"+n[r].value),n[r].selected!==d&&(n[r].selected=d),d&&o&&(n[r].defaultSelected=!0)}else{for(r=""+Sn(r),e=null,d=0;d<n.length;d++){if(n[d].value===r){n[d].selected=!0,o&&(n[d].defaultSelected=!0);return}e!==null||n[d].disabled||(e=n[d])}e!==null&&(e.selected=!0)}}function Tr(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(i(91));return S({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ri(n,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(i(92));if(st(r)){if(1<r.length)throw Error(i(93));r=r[0]}e=r}e==null&&(e=""),r=e}n._wrapperState={initialValue:Sn(r)}}function Pi(n,e){var r=Sn(e.value),o=Sn(e.defaultValue);r!=null&&(r=""+r,r!==n.value&&(n.value=r),e.defaultValue==null&&n.defaultValue!==r&&(n.defaultValue=r)),o!=null&&(n.defaultValue=""+o)}function Di(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function F(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function K(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?F(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var hn,wn=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,o,d){MSApp.execUnsafeLocalFunction(function(){return n(e,r,o,d)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(hn=hn||document.createElement("div"),hn.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=hn.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function _n(n,e){if(e){var r=n.firstChild;if(r&&r===n.lastChild&&r.nodeType===3){r.nodeValue=e;return}}n.textContent=e}var Zn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xe=["Webkit","ms","Moz","O"];Object.keys(Zn).forEach(function(n){Xe.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Zn[e]=Zn[n]})});function Le(n,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||Zn.hasOwnProperty(n)&&Zn[n]?(""+e).trim():e+"px"}function ct(n,e){n=n.style;for(var r in e)if(e.hasOwnProperty(r)){var o=r.indexOf("--")===0,d=Le(r,e[r],o);r==="float"&&(r="cssFloat"),o?n.setProperty(r,d):n[r]=d}}var Tt=S({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ne(n,e){if(e){if(Tt[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(i(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(i(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(i(61))}if(e.style!=null&&typeof e.style!="object")throw Error(i(62))}}function Ue(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ve=null;function no(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var eo=null,er=null,tr=null;function Bs(n){if(n=ni(n)){if(typeof eo!="function")throw Error(i(280));var e=n.stateNode;e&&(e=nl(e),eo(n.stateNode,n.type,e))}}function Gs(n){er?tr?tr.push(n):tr=[n]:er=n}function js(){if(er){var n=er,e=tr;if(tr=er=null,Bs(n),e)for(n=0;n<e.length;n++)Bs(e[n])}}function Hs(n,e){return n(e)}function Us(){}var to=!1;function Ws(n,e,r){if(to)return n(e,r);to=!0;try{return Hs(n,e,r)}finally{to=!1,(er!==null||tr!==null)&&(Us(),js())}}function Mr(n,e){var r=n.stateNode;if(r===null)return null;var o=nl(r);if(o===null)return null;r=o[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(n=n.type,o=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!o;break n;default:n=!1}if(n)return null;if(r&&typeof r!="function")throw Error(i(231,e,typeof r));return r}var ro=!1;if(f)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){ro=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{ro=!1}function Pf(n,e,r,o,d,p,k,w,x){var T=Array.prototype.slice.call(arguments,3);try{e.apply(r,T)}catch(G){this.onError(G)}}var br=!1,Ti=null,Mi=!1,io=null,Df={onError:function(n){br=!0,Ti=n}};function Tf(n,e,r,o,d,p,k,w,x){br=!1,Ti=null,Pf.apply(Df,arguments)}function Mf(n,e,r,o,d,p,k,w,x){if(Tf.apply(this,arguments),br){if(br){var T=Ti;br=!1,Ti=null}else throw Error(i(198));Mi||(Mi=!0,io=T)}}function Mt(n){var e=n,r=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(r=e.return),n=e.return;while(n)}return e.tag===3?r:null}function Vs(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function qs(n){if(Mt(n)!==n)throw Error(i(188))}function Of(n){var e=n.alternate;if(!e){if(e=Mt(n),e===null)throw Error(i(188));return e!==n?null:n}for(var r=n,o=e;;){var d=r.return;if(d===null)break;var p=d.alternate;if(p===null){if(o=d.return,o!==null){r=o;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===r)return qs(d),n;if(p===o)return qs(d),e;p=p.sibling}throw Error(i(188))}if(r.return!==o.return)r=d,o=p;else{for(var k=!1,w=d.child;w;){if(w===r){k=!0,r=d,o=p;break}if(w===o){k=!0,o=d,r=p;break}w=w.sibling}if(!k){for(w=p.child;w;){if(w===r){k=!0,r=p,o=d;break}if(w===o){k=!0,o=p,r=d;break}w=w.sibling}if(!k)throw Error(i(189))}}if(r.alternate!==o)throw Error(i(190))}if(r.tag!==3)throw Error(i(188));return r.stateNode.current===r?n:e}function Qs(n){return n=Of(n),n!==null?Js(n):null}function Js(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Js(n);if(e!==null)return e;n=n.sibling}return null}var $s=l.unstable_scheduleCallback,Ks=l.unstable_cancelCallback,bf=l.unstable_shouldYield,Ff=l.unstable_requestPaint,Un=l.unstable_now,Nf=l.unstable_getCurrentPriorityLevel,lo=l.unstable_ImmediatePriority,Ys=l.unstable_UserBlockingPriority,Oi=l.unstable_NormalPriority,zf=l.unstable_LowPriority,Xs=l.unstable_IdlePriority,bi=null,We=null;function Bf(n){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(bi,n,void 0,(n.current.flags&128)===128)}catch{}}var be=Math.clz32?Math.clz32:Hf,Gf=Math.log,jf=Math.LN2;function Hf(n){return n>>>=0,n===0?32:31-(Gf(n)/jf|0)|0}var Fi=64,Ni=4194304;function Fr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function zi(n,e){var r=n.pendingLanes;if(r===0)return 0;var o=0,d=n.suspendedLanes,p=n.pingedLanes,k=r&268435455;if(k!==0){var w=k&~d;w!==0?o=Fr(w):(p&=k,p!==0&&(o=Fr(p)))}else k=r&~d,k!==0?o=Fr(k):p!==0&&(o=Fr(p));if(o===0)return 0;if(e!==0&&e!==o&&(e&d)===0&&(d=o&-o,p=e&-e,d>=p||d===16&&(p&4194240)!==0))return e;if((o&4)!==0&&(o|=r&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=o;0<e;)r=31-be(e),d=1<<r,o|=n[r],e&=~d;return o}function Uf(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wf(n,e){for(var r=n.suspendedLanes,o=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var k=31-be(p),w=1<<k,x=d[k];x===-1?((w&r)===0||(w&o)!==0)&&(d[k]=Uf(w,e)):x<=e&&(n.expiredLanes|=w),p&=~w}}function oo(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Zs(){var n=Fi;return Fi<<=1,(Fi&4194240)===0&&(Fi=64),n}function ao(n){for(var e=[],r=0;31>r;r++)e.push(n);return e}function Nr(n,e,r){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-be(e),n[e]=r}function Vf(n,e){var r=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var o=n.eventTimes;for(n=n.expirationTimes;0<r;){var d=31-be(r),p=1<<d;e[d]=0,o[d]=-1,n[d]=-1,r&=~p}}function so(n,e){var r=n.entangledLanes|=e;for(n=n.entanglements;r;){var o=31-be(r),d=1<<o;d&e|n[o]&e&&(n[o]|=e),r&=~d}}var Mn=0;function nu(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var eu,uo,tu,ru,iu,co=!1,Bi=[],dt=null,pt=null,ft=null,zr=new Map,Br=new Map,gt=[],qf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lu(n,e){switch(n){case"focusin":case"focusout":dt=null;break;case"dragenter":case"dragleave":pt=null;break;case"mouseover":case"mouseout":ft=null;break;case"pointerover":case"pointerout":zr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Br.delete(e.pointerId)}}function Gr(n,e,r,o,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:e,domEventName:r,eventSystemFlags:o,nativeEvent:p,targetContainers:[d]},e!==null&&(e=ni(e),e!==null&&uo(e)),n):(n.eventSystemFlags|=o,e=n.targetContainers,d!==null&&e.indexOf(d)===-1&&e.push(d),n)}function Qf(n,e,r,o,d){switch(e){case"focusin":return dt=Gr(dt,n,e,r,o,d),!0;case"dragenter":return pt=Gr(pt,n,e,r,o,d),!0;case"mouseover":return ft=Gr(ft,n,e,r,o,d),!0;case"pointerover":var p=d.pointerId;return zr.set(p,Gr(zr.get(p)||null,n,e,r,o,d)),!0;case"gotpointercapture":return p=d.pointerId,Br.set(p,Gr(Br.get(p)||null,n,e,r,o,d)),!0}return!1}function ou(n){var e=Ot(n.target);if(e!==null){var r=Mt(e);if(r!==null){if(e=r.tag,e===13){if(e=Vs(r),e!==null){n.blockedOn=e,iu(n.priority,function(){tu(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){n.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Gi(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var r=fo(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(r===null){r=n.nativeEvent;var o=new r.constructor(r.type,r);ve=o,r.target.dispatchEvent(o),ve=null}else return e=ni(r),e!==null&&uo(e),n.blockedOn=r,!1;e.shift()}return!0}function au(n,e,r){Gi(n)&&r.delete(e)}function Jf(){co=!1,dt!==null&&Gi(dt)&&(dt=null),pt!==null&&Gi(pt)&&(pt=null),ft!==null&&Gi(ft)&&(ft=null),zr.forEach(au),Br.forEach(au)}function jr(n,e){n.blockedOn===e&&(n.blockedOn=null,co||(co=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Jf)))}function Hr(n){function e(d){return jr(d,n)}if(0<Bi.length){jr(Bi[0],n);for(var r=1;r<Bi.length;r++){var o=Bi[r];o.blockedOn===n&&(o.blockedOn=null)}}for(dt!==null&&jr(dt,n),pt!==null&&jr(pt,n),ft!==null&&jr(ft,n),zr.forEach(e),Br.forEach(e),r=0;r<gt.length;r++)o=gt[r],o.blockedOn===n&&(o.blockedOn=null);for(;0<gt.length&&(r=gt[0],r.blockedOn===null);)ou(r),r.blockedOn===null&&gt.shift()}var rr=rn.ReactCurrentBatchConfig,ji=!0;function $f(n,e,r,o){var d=Mn,p=rr.transition;rr.transition=null;try{Mn=1,po(n,e,r,o)}finally{Mn=d,rr.transition=p}}function Kf(n,e,r,o){var d=Mn,p=rr.transition;rr.transition=null;try{Mn=4,po(n,e,r,o)}finally{Mn=d,rr.transition=p}}function po(n,e,r,o){if(ji){var d=fo(n,e,r,o);if(d===null)Po(n,e,o,Hi,r),lu(n,o);else if(Qf(d,n,e,r,o))o.stopPropagation();else if(lu(n,o),e&4&&-1<qf.indexOf(n)){for(;d!==null;){var p=ni(d);if(p!==null&&eu(p),p=fo(n,e,r,o),p===null&&Po(n,e,o,Hi,r),p===d)break;d=p}d!==null&&o.stopPropagation()}else Po(n,e,o,null,r)}}var Hi=null;function fo(n,e,r,o){if(Hi=null,n=no(o),n=Ot(n),n!==null)if(e=Mt(n),e===null)n=null;else if(r=e.tag,r===13){if(n=Vs(e),n!==null)return n;n=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Hi=n,null}function su(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Nf()){case lo:return 1;case Ys:return 4;case Oi:case zf:return 16;case Xs:return 536870912;default:return 16}default:return 16}}var mt=null,go=null,Ui=null;function uu(){if(Ui)return Ui;var n,e=go,r=e.length,o,d="value"in mt?mt.value:mt.textContent,p=d.length;for(n=0;n<r&&e[n]===d[n];n++);var k=r-n;for(o=1;o<=k&&e[r-o]===d[p-o];o++);return Ui=d.slice(n,1<o?1-o:void 0)}function Wi(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Vi(){return!0}function cu(){return!1}function Se(n){function e(r,o,d,p,k){this._reactName=r,this._targetInst=d,this.type=o,this.nativeEvent=p,this.target=k,this.currentTarget=null;for(var w in n)n.hasOwnProperty(w)&&(r=n[w],this[w]=r?r(p):p[w]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Vi:cu,this.isPropagationStopped=cu,this}return S(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Vi)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Vi)},persist:function(){},isPersistent:Vi}),e}var ir={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mo=Se(ir),Ur=S({},ir,{view:0,detail:0}),Yf=Se(Ur),ho,yo,Wr,qi=S({},Ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ao,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Wr&&(Wr&&n.type==="mousemove"?(ho=n.screenX-Wr.screenX,yo=n.screenY-Wr.screenY):yo=ho=0,Wr=n),ho)},movementY:function(n){return"movementY"in n?n.movementY:yo}}),du=Se(qi),Xf=S({},qi,{dataTransfer:0}),Zf=Se(Xf),ng=S({},Ur,{relatedTarget:0}),ko=Se(ng),eg=S({},ir,{animationName:0,elapsedTime:0,pseudoElement:0}),tg=Se(eg),rg=S({},ir,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),ig=Se(rg),lg=S({},ir,{data:0}),pu=Se(lg),og={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ag={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ug(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=sg[n])?!!e[n]:!1}function Ao(){return ug}var cg=S({},Ur,{key:function(n){if(n.key){var e=og[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Wi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?ag[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ao,charCode:function(n){return n.type==="keypress"?Wi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Wi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),dg=Se(cg),pg=S({},qi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fu=Se(pg),fg=S({},Ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ao}),gg=Se(fg),mg=S({},ir,{propertyName:0,elapsedTime:0,pseudoElement:0}),hg=Se(mg),yg=S({},qi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),kg=Se(yg),Ag=[9,13,27,32],vo=f&&"CompositionEvent"in window,Vr=null;f&&"documentMode"in document&&(Vr=document.documentMode);var vg=f&&"TextEvent"in window&&!Vr,gu=f&&(!vo||Vr&&8<Vr&&11>=Vr),mu=" ",hu=!1;function yu(n,e){switch(n){case"keyup":return Ag.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ku(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var lr=!1;function Sg(n,e){switch(n){case"compositionend":return ku(e);case"keypress":return e.which!==32?null:(hu=!0,mu);case"textInput":return n=e.data,n===mu&&hu?null:n;default:return null}}function wg(n,e){if(lr)return n==="compositionend"||!vo&&yu(n,e)?(n=uu(),Ui=go=mt=null,lr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return gu&&e.locale!=="ko"?null:e.data;default:return null}}var Cg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Au(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Cg[n.type]:e==="textarea"}function vu(n,e,r,o){Gs(o),e=Yi(e,"onChange"),0<e.length&&(r=new mo("onChange","change",null,r,o),n.push({event:r,listeners:e}))}var qr=null,Qr=null;function xg(n){zu(n,0)}function Qi(n){var e=cr(n);if(Li(e))return n}function Ig(n,e){if(n==="change")return e}var Su=!1;if(f){var So;if(f){var wo="oninput"in document;if(!wo){var wu=document.createElement("div");wu.setAttribute("oninput","return;"),wo=typeof wu.oninput=="function"}So=wo}else So=!1;Su=So&&(!document.documentMode||9<document.documentMode)}function Cu(){qr&&(qr.detachEvent("onpropertychange",xu),Qr=qr=null)}function xu(n){if(n.propertyName==="value"&&Qi(Qr)){var e=[];vu(e,Qr,n,no(n)),Ws(xg,e)}}function Eg(n,e,r){n==="focusin"?(Cu(),qr=e,Qr=r,qr.attachEvent("onpropertychange",xu)):n==="focusout"&&Cu()}function Lg(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Qi(Qr)}function _g(n,e){if(n==="click")return Qi(e)}function Rg(n,e){if(n==="input"||n==="change")return Qi(e)}function Pg(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Fe=typeof Object.is=="function"?Object.is:Pg;function Jr(n,e){if(Fe(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var r=Object.keys(n),o=Object.keys(e);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var d=r[o];if(!g.call(e,d)||!Fe(n[d],e[d]))return!1}return!0}function Iu(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Eu(n,e){var r=Iu(n);n=0;for(var o;r;){if(r.nodeType===3){if(o=n+r.textContent.length,n<=e&&o>=e)return{node:r,offset:e-n};n=o}n:{for(;r;){if(r.nextSibling){r=r.nextSibling;break n}r=r.parentNode}r=void 0}r=Iu(r)}}function Lu(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Lu(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function _u(){for(var n=window,e=Xt();e instanceof n.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)n=e.contentWindow;else break;e=Xt(n.document)}return e}function Co(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Dg(n){var e=_u(),r=n.focusedElem,o=n.selectionRange;if(e!==r&&r&&r.ownerDocument&&Lu(r.ownerDocument.documentElement,r)){if(o!==null&&Co(r)){if(e=o.start,n=o.end,n===void 0&&(n=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(n,r.value.length);else if(n=(e=r.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var d=r.textContent.length,p=Math.min(o.start,d);o=o.end===void 0?p:Math.min(o.end,d),!n.extend&&p>o&&(d=o,o=p,p=d),d=Eu(r,p);var k=Eu(r,o);d&&k&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==k.node||n.focusOffset!==k.offset)&&(e=e.createRange(),e.setStart(d.node,d.offset),n.removeAllRanges(),p>o?(n.addRange(e),n.extend(k.node,k.offset)):(e.setEnd(k.node,k.offset),n.addRange(e)))}}for(e=[],n=r;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)n=e[r],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Tg=f&&"documentMode"in document&&11>=document.documentMode,or=null,xo=null,$r=null,Io=!1;function Ru(n,e,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Io||or==null||or!==Xt(o)||(o=or,"selectionStart"in o&&Co(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),$r&&Jr($r,o)||($r=o,o=Yi(xo,"onSelect"),0<o.length&&(e=new mo("onSelect","select",null,e,r),n.push({event:e,listeners:o}),e.target=or)))}function Ji(n,e){var r={};return r[n.toLowerCase()]=e.toLowerCase(),r["Webkit"+n]="webkit"+e,r["Moz"+n]="moz"+e,r}var ar={animationend:Ji("Animation","AnimationEnd"),animationiteration:Ji("Animation","AnimationIteration"),animationstart:Ji("Animation","AnimationStart"),transitionend:Ji("Transition","TransitionEnd")},Eo={},Pu={};f&&(Pu=document.createElement("div").style,"AnimationEvent"in window||(delete ar.animationend.animation,delete ar.animationiteration.animation,delete ar.animationstart.animation),"TransitionEvent"in window||delete ar.transitionend.transition);function $i(n){if(Eo[n])return Eo[n];if(!ar[n])return n;var e=ar[n],r;for(r in e)if(e.hasOwnProperty(r)&&r in Pu)return Eo[n]=e[r];return n}var Du=$i("animationend"),Tu=$i("animationiteration"),Mu=$i("animationstart"),Ou=$i("transitionend"),bu=new Map,Fu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ht(n,e){bu.set(n,e),c(e,[n])}for(var Lo=0;Lo<Fu.length;Lo++){var _o=Fu[Lo],Mg=_o.toLowerCase(),Og=_o[0].toUpperCase()+_o.slice(1);ht(Mg,"on"+Og)}ht(Du,"onAnimationEnd"),ht(Tu,"onAnimationIteration"),ht(Mu,"onAnimationStart"),ht("dblclick","onDoubleClick"),ht("focusin","onFocus"),ht("focusout","onBlur"),ht(Ou,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Kr));function Nu(n,e,r){var o=n.type||"unknown-event";n.currentTarget=r,Mf(o,e,void 0,n),n.currentTarget=null}function zu(n,e){e=(e&4)!==0;for(var r=0;r<n.length;r++){var o=n[r],d=o.event;o=o.listeners;n:{var p=void 0;if(e)for(var k=o.length-1;0<=k;k--){var w=o[k],x=w.instance,T=w.currentTarget;if(w=w.listener,x!==p&&d.isPropagationStopped())break n;Nu(d,w,T),p=x}else for(k=0;k<o.length;k++){if(w=o[k],x=w.instance,T=w.currentTarget,w=w.listener,x!==p&&d.isPropagationStopped())break n;Nu(d,w,T),p=x}}}if(Mi)throw n=io,Mi=!1,io=null,n}function Nn(n,e){var r=e[Fo];r===void 0&&(r=e[Fo]=new Set);var o=n+"__bubble";r.has(o)||(Bu(e,n,2,!1),r.add(o))}function Ro(n,e,r){var o=0;e&&(o|=4),Bu(r,n,o,e)}var Ki="_reactListening"+Math.random().toString(36).slice(2);function Yr(n){if(!n[Ki]){n[Ki]=!0,a.forEach(function(r){r!=="selectionchange"&&(bg.has(r)||Ro(r,!1,n),Ro(r,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Ki]||(e[Ki]=!0,Ro("selectionchange",!1,e))}}function Bu(n,e,r,o){switch(su(e)){case 1:var d=$f;break;case 4:d=Kf;break;default:d=po}r=d.bind(null,e,r,n),d=void 0,!ro||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(d=!0),o?d!==void 0?n.addEventListener(e,r,{capture:!0,passive:d}):n.addEventListener(e,r,!0):d!==void 0?n.addEventListener(e,r,{passive:d}):n.addEventListener(e,r,!1)}function Po(n,e,r,o,d){var p=o;if((e&1)===0&&(e&2)===0&&o!==null)n:for(;;){if(o===null)return;var k=o.tag;if(k===3||k===4){var w=o.stateNode.containerInfo;if(w===d||w.nodeType===8&&w.parentNode===d)break;if(k===4)for(k=o.return;k!==null;){var x=k.tag;if((x===3||x===4)&&(x=k.stateNode.containerInfo,x===d||x.nodeType===8&&x.parentNode===d))return;k=k.return}for(;w!==null;){if(k=Ot(w),k===null)return;if(x=k.tag,x===5||x===6){o=p=k;continue n}w=w.parentNode}}o=o.return}Ws(function(){var T=p,G=no(r),H=[];n:{var z=bu.get(n);if(z!==void 0){var X=mo,tn=n;switch(n){case"keypress":if(Wi(r)===0)break n;case"keydown":case"keyup":X=dg;break;case"focusin":tn="focus",X=ko;break;case"focusout":tn="blur",X=ko;break;case"beforeblur":case"afterblur":X=ko;break;case"click":if(r.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":X=du;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":X=Zf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":X=gg;break;case Du:case Tu:case Mu:X=tg;break;case Ou:X=hg;break;case"scroll":X=Yf;break;case"wheel":X=kg;break;case"copy":case"cut":case"paste":X=ig;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":X=fu}var ln=(e&4)!==0,Wn=!ln&&n==="scroll",R=ln?z!==null?z+"Capture":null:z;ln=[];for(var I=T,P;I!==null;){P=I;var q=P.stateNode;if(P.tag===5&&q!==null&&(P=q,R!==null&&(q=Mr(I,R),q!=null&&ln.push(Xr(I,q,P)))),Wn)break;I=I.return}0<ln.length&&(z=new X(z,tn,null,r,G),H.push({event:z,listeners:ln}))}}if((e&7)===0){n:{if(z=n==="mouseover"||n==="pointerover",X=n==="mouseout"||n==="pointerout",z&&r!==ve&&(tn=r.relatedTarget||r.fromElement)&&(Ot(tn)||tn[Ze]))break n;if((X||z)&&(z=G.window===G?G:(z=G.ownerDocument)?z.defaultView||z.parentWindow:window,X?(tn=r.relatedTarget||r.toElement,X=T,tn=tn?Ot(tn):null,tn!==null&&(Wn=Mt(tn),tn!==Wn||tn.tag!==5&&tn.tag!==6)&&(tn=null)):(X=null,tn=T),X!==tn)){if(ln=du,q="onMouseLeave",R="onMouseEnter",I="mouse",(n==="pointerout"||n==="pointerover")&&(ln=fu,q="onPointerLeave",R="onPointerEnter",I="pointer"),Wn=X==null?z:cr(X),P=tn==null?z:cr(tn),z=new ln(q,I+"leave",X,r,G),z.target=Wn,z.relatedTarget=P,q=null,Ot(G)===T&&(ln=new ln(R,I+"enter",tn,r,G),ln.target=P,ln.relatedTarget=Wn,q=ln),Wn=q,X&&tn)e:{for(ln=X,R=tn,I=0,P=ln;P;P=sr(P))I++;for(P=0,q=R;q;q=sr(q))P++;for(;0<I-P;)ln=sr(ln),I--;for(;0<P-I;)R=sr(R),P--;for(;I--;){if(ln===R||R!==null&&ln===R.alternate)break e;ln=sr(ln),R=sr(R)}ln=null}else ln=null;X!==null&&Gu(H,z,X,ln,!1),tn!==null&&Wn!==null&&Gu(H,Wn,tn,ln,!0)}}n:{if(z=T?cr(T):window,X=z.nodeName&&z.nodeName.toLowerCase(),X==="select"||X==="input"&&z.type==="file")var on=Ig;else if(Au(z))if(Su)on=Rg;else{on=Lg;var dn=Eg}else(X=z.nodeName)&&X.toLowerCase()==="input"&&(z.type==="checkbox"||z.type==="radio")&&(on=_g);if(on&&(on=on(n,T))){vu(H,on,r,G);break n}dn&&dn(n,z,T),n==="focusout"&&(dn=z._wrapperState)&&dn.controlled&&z.type==="number"&&nr(z,"number",z.value)}switch(dn=T?cr(T):window,n){case"focusin":(Au(dn)||dn.contentEditable==="true")&&(or=dn,xo=T,$r=null);break;case"focusout":$r=xo=or=null;break;case"mousedown":Io=!0;break;case"contextmenu":case"mouseup":case"dragend":Io=!1,Ru(H,r,G);break;case"selectionchange":if(Tg)break;case"keydown":case"keyup":Ru(H,r,G)}var pn;if(vo)n:{switch(n){case"compositionstart":var kn="onCompositionStart";break n;case"compositionend":kn="onCompositionEnd";break n;case"compositionupdate":kn="onCompositionUpdate";break n}kn=void 0}else lr?yu(n,r)&&(kn="onCompositionEnd"):n==="keydown"&&r.keyCode===229&&(kn="onCompositionStart");kn&&(gu&&r.locale!=="ko"&&(lr||kn!=="onCompositionStart"?kn==="onCompositionEnd"&&lr&&(pn=uu()):(mt=G,go="value"in mt?mt.value:mt.textContent,lr=!0)),dn=Yi(T,kn),0<dn.length&&(kn=new pu(kn,n,null,r,G),H.push({event:kn,listeners:dn}),pn?kn.data=pn:(pn=ku(r),pn!==null&&(kn.data=pn)))),(pn=vg?Sg(n,r):wg(n,r))&&(T=Yi(T,"onBeforeInput"),0<T.length&&(G=new pu("onBeforeInput","beforeinput",null,r,G),H.push({event:G,listeners:T}),G.data=pn))}zu(H,e)})}function Xr(n,e,r){return{instance:n,listener:e,currentTarget:r}}function Yi(n,e){for(var r=e+"Capture",o=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=Mr(n,r),p!=null&&o.unshift(Xr(n,p,d)),p=Mr(n,e),p!=null&&o.push(Xr(n,p,d))),n=n.return}return o}function sr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Gu(n,e,r,o,d){for(var p=e._reactName,k=[];r!==null&&r!==o;){var w=r,x=w.alternate,T=w.stateNode;if(x!==null&&x===o)break;w.tag===5&&T!==null&&(w=T,d?(x=Mr(r,p),x!=null&&k.unshift(Xr(r,x,w))):d||(x=Mr(r,p),x!=null&&k.push(Xr(r,x,w)))),r=r.return}k.length!==0&&n.push({event:e,listeners:k})}var Fg=/\r\n?/g,Ng=/\u0000|\uFFFD/g;function ju(n){return(typeof n=="string"?n:""+n).replace(Fg,`
`).replace(Ng,"")}function Xi(n,e,r){if(e=ju(e),ju(n)!==e&&r)throw Error(i(425))}function Zi(){}var Do=null,To=null;function Mo(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Oo=typeof setTimeout=="function"?setTimeout:void 0,zg=typeof clearTimeout=="function"?clearTimeout:void 0,Hu=typeof Promise=="function"?Promise:void 0,Bg=typeof queueMicrotask=="function"?queueMicrotask:typeof Hu<"u"?function(n){return Hu.resolve(null).then(n).catch(Gg)}:Oo;function Gg(n){setTimeout(function(){throw n})}function bo(n,e){var r=e,o=0;do{var d=r.nextSibling;if(n.removeChild(r),d&&d.nodeType===8)if(r=d.data,r==="/$"){if(o===0){n.removeChild(d),Hr(e);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=d}while(r);Hr(e)}function yt(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Uu(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var r=n.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return n;e--}else r==="/$"&&e++}n=n.previousSibling}return null}var ur=Math.random().toString(36).slice(2),Ve="__reactFiber$"+ur,Zr="__reactProps$"+ur,Ze="__reactContainer$"+ur,Fo="__reactEvents$"+ur,jg="__reactListeners$"+ur,Hg="__reactHandles$"+ur;function Ot(n){var e=n[Ve];if(e)return e;for(var r=n.parentNode;r;){if(e=r[Ze]||r[Ve]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(n=Uu(n);n!==null;){if(r=n[Ve])return r;n=Uu(n)}return e}n=r,r=n.parentNode}return null}function ni(n){return n=n[Ve]||n[Ze],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function cr(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(i(33))}function nl(n){return n[Zr]||null}var No=[],dr=-1;function kt(n){return{current:n}}function zn(n){0>dr||(n.current=No[dr],No[dr]=null,dr--)}function Fn(n,e){dr++,No[dr]=n.current,n.current=e}var At={},re=kt(At),pe=kt(!1),bt=At;function pr(n,e){var r=n.type.contextTypes;if(!r)return At;var o=n.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===e)return o.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in r)d[p]=e[p];return o&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=d),d}function fe(n){return n=n.childContextTypes,n!=null}function el(){zn(pe),zn(re)}function Wu(n,e,r){if(re.current!==At)throw Error(i(168));Fn(re,e),Fn(pe,r)}function Vu(n,e,r){var o=n.stateNode;if(e=e.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var d in o)if(!(d in e))throw Error(i(108,Pn(n)||"Unknown",d));return S({},r,o)}function tl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||At,bt=re.current,Fn(re,n),Fn(pe,pe.current),!0}function qu(n,e,r){var o=n.stateNode;if(!o)throw Error(i(169));r?(n=Vu(n,e,bt),o.__reactInternalMemoizedMergedChildContext=n,zn(pe),zn(re),Fn(re,n)):zn(pe),Fn(pe,r)}var nt=null,rl=!1,zo=!1;function Qu(n){nt===null?nt=[n]:nt.push(n)}function Ug(n){rl=!0,Qu(n)}function vt(){if(!zo&&nt!==null){zo=!0;var n=0,e=Mn;try{var r=nt;for(Mn=1;n<r.length;n++){var o=r[n];do o=o(!0);while(o!==null)}nt=null,rl=!1}catch(d){throw nt!==null&&(nt=nt.slice(n+1)),$s(lo,vt),d}finally{Mn=e,zo=!1}}return null}var fr=[],gr=0,il=null,ll=0,_e=[],Re=0,Ft=null,et=1,tt="";function Nt(n,e){fr[gr++]=ll,fr[gr++]=il,il=n,ll=e}function Ju(n,e,r){_e[Re++]=et,_e[Re++]=tt,_e[Re++]=Ft,Ft=n;var o=et;n=tt;var d=32-be(o)-1;o&=~(1<<d),r+=1;var p=32-be(e)+d;if(30<p){var k=d-d%5;p=(o&(1<<k)-1).toString(32),o>>=k,d-=k,et=1<<32-be(e)+d|r<<d|o,tt=p+n}else et=1<<p|r<<d|o,tt=n}function Bo(n){n.return!==null&&(Nt(n,1),Ju(n,1,0))}function Go(n){for(;n===il;)il=fr[--gr],fr[gr]=null,ll=fr[--gr],fr[gr]=null;for(;n===Ft;)Ft=_e[--Re],_e[Re]=null,tt=_e[--Re],_e[Re]=null,et=_e[--Re],_e[Re]=null}var we=null,Ce=null,Bn=!1,Ne=null;function $u(n,e){var r=Me(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=n,e=n.deletions,e===null?(n.deletions=[r],n.flags|=16):e.push(r)}function Ku(n,e){switch(n.tag){case 5:var r=n.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,we=n,Ce=yt(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,we=n,Ce=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=Ft!==null?{id:et,overflow:tt}:null,n.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=Me(18,null,null,0),r.stateNode=e,r.return=n,n.child=r,we=n,Ce=null,!0):!1;default:return!1}}function jo(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ho(n){if(Bn){var e=Ce;if(e){var r=e;if(!Ku(n,e)){if(jo(n))throw Error(i(418));e=yt(r.nextSibling);var o=we;e&&Ku(n,e)?$u(o,r):(n.flags=n.flags&-4097|2,Bn=!1,we=n)}}else{if(jo(n))throw Error(i(418));n.flags=n.flags&-4097|2,Bn=!1,we=n}}}function Yu(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;we=n}function ol(n){if(n!==we)return!1;if(!Bn)return Yu(n),Bn=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Mo(n.type,n.memoizedProps)),e&&(e=Ce)){if(jo(n))throw Xu(),Error(i(418));for(;e;)$u(n,e),e=yt(e.nextSibling)}if(Yu(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));n:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var r=n.data;if(r==="/$"){if(e===0){Ce=yt(n.nextSibling);break n}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}n=n.nextSibling}Ce=null}}else Ce=we?yt(n.stateNode.nextSibling):null;return!0}function Xu(){for(var n=Ce;n;)n=yt(n.nextSibling)}function mr(){Ce=we=null,Bn=!1}function Uo(n){Ne===null?Ne=[n]:Ne.push(n)}var Wg=rn.ReactCurrentBatchConfig;function ei(n,e,r){if(n=r.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(i(309));var o=r.stateNode}if(!o)throw Error(i(147,n));var d=o,p=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===p?e.ref:(e=function(k){var w=d.refs;k===null?delete w[p]:w[p]=k},e._stringRef=p,e)}if(typeof n!="string")throw Error(i(284));if(!r._owner)throw Error(i(290,n))}return n}function al(n,e){throw n=Object.prototype.toString.call(e),Error(i(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Zu(n){var e=n._init;return e(n._payload)}function nc(n){function e(R,I){if(n){var P=R.deletions;P===null?(R.deletions=[I],R.flags|=16):P.push(I)}}function r(R,I){if(!n)return null;for(;I!==null;)e(R,I),I=I.sibling;return null}function o(R,I){for(R=new Map;I!==null;)I.key!==null?R.set(I.key,I):R.set(I.index,I),I=I.sibling;return R}function d(R,I){return R=_t(R,I),R.index=0,R.sibling=null,R}function p(R,I,P){return R.index=P,n?(P=R.alternate,P!==null?(P=P.index,P<I?(R.flags|=2,I):P):(R.flags|=2,I)):(R.flags|=1048576,I)}function k(R){return n&&R.alternate===null&&(R.flags|=2),R}function w(R,I,P,q){return I===null||I.tag!==6?(I=Oa(P,R.mode,q),I.return=R,I):(I=d(I,P),I.return=R,I)}function x(R,I,P,q){var on=P.type;return on===V?G(R,I,P.props.children,q,P.key):I!==null&&(I.elementType===on||typeof on=="object"&&on!==null&&on.$$typeof===xn&&Zu(on)===I.type)?(q=d(I,P.props),q.ref=ei(R,I,P),q.return=R,q):(q=Dl(P.type,P.key,P.props,null,R.mode,q),q.ref=ei(R,I,P),q.return=R,q)}function T(R,I,P,q){return I===null||I.tag!==4||I.stateNode.containerInfo!==P.containerInfo||I.stateNode.implementation!==P.implementation?(I=ba(P,R.mode,q),I.return=R,I):(I=d(I,P.children||[]),I.return=R,I)}function G(R,I,P,q,on){return I===null||I.tag!==7?(I=Vt(P,R.mode,q,on),I.return=R,I):(I=d(I,P),I.return=R,I)}function H(R,I,P){if(typeof I=="string"&&I!==""||typeof I=="number")return I=Oa(""+I,R.mode,P),I.return=R,I;if(typeof I=="object"&&I!==null){switch(I.$$typeof){case un:return P=Dl(I.type,I.key,I.props,null,R.mode,P),P.ref=ei(R,null,I),P.return=R,P;case O:return I=ba(I,R.mode,P),I.return=R,I;case xn:var q=I._init;return H(R,q(I._payload),P)}if(st(I)||sn(I))return I=Vt(I,R.mode,P,null),I.return=R,I;al(R,I)}return null}function z(R,I,P,q){var on=I!==null?I.key:null;if(typeof P=="string"&&P!==""||typeof P=="number")return on!==null?null:w(R,I,""+P,q);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case un:return P.key===on?x(R,I,P,q):null;case O:return P.key===on?T(R,I,P,q):null;case xn:return on=P._init,z(R,I,on(P._payload),q)}if(st(P)||sn(P))return on!==null?null:G(R,I,P,q,null);al(R,P)}return null}function X(R,I,P,q,on){if(typeof q=="string"&&q!==""||typeof q=="number")return R=R.get(P)||null,w(I,R,""+q,on);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case un:return R=R.get(q.key===null?P:q.key)||null,x(I,R,q,on);case O:return R=R.get(q.key===null?P:q.key)||null,T(I,R,q,on);case xn:var dn=q._init;return X(R,I,P,dn(q._payload),on)}if(st(q)||sn(q))return R=R.get(P)||null,G(I,R,q,on,null);al(I,q)}return null}function tn(R,I,P,q){for(var on=null,dn=null,pn=I,kn=I=0,Xn=null;pn!==null&&kn<P.length;kn++){pn.index>kn?(Xn=pn,pn=null):Xn=pn.sibling;var Dn=z(R,pn,P[kn],q);if(Dn===null){pn===null&&(pn=Xn);break}n&&pn&&Dn.alternate===null&&e(R,pn),I=p(Dn,I,kn),dn===null?on=Dn:dn.sibling=Dn,dn=Dn,pn=Xn}if(kn===P.length)return r(R,pn),Bn&&Nt(R,kn),on;if(pn===null){for(;kn<P.length;kn++)pn=H(R,P[kn],q),pn!==null&&(I=p(pn,I,kn),dn===null?on=pn:dn.sibling=pn,dn=pn);return Bn&&Nt(R,kn),on}for(pn=o(R,pn);kn<P.length;kn++)Xn=X(pn,R,kn,P[kn],q),Xn!==null&&(n&&Xn.alternate!==null&&pn.delete(Xn.key===null?kn:Xn.key),I=p(Xn,I,kn),dn===null?on=Xn:dn.sibling=Xn,dn=Xn);return n&&pn.forEach(function(Rt){return e(R,Rt)}),Bn&&Nt(R,kn),on}function ln(R,I,P,q){var on=sn(P);if(typeof on!="function")throw Error(i(150));if(P=on.call(P),P==null)throw Error(i(151));for(var dn=on=null,pn=I,kn=I=0,Xn=null,Dn=P.next();pn!==null&&!Dn.done;kn++,Dn=P.next()){pn.index>kn?(Xn=pn,pn=null):Xn=pn.sibling;var Rt=z(R,pn,Dn.value,q);if(Rt===null){pn===null&&(pn=Xn);break}n&&pn&&Rt.alternate===null&&e(R,pn),I=p(Rt,I,kn),dn===null?on=Rt:dn.sibling=Rt,dn=Rt,pn=Xn}if(Dn.done)return r(R,pn),Bn&&Nt(R,kn),on;if(pn===null){for(;!Dn.done;kn++,Dn=P.next())Dn=H(R,Dn.value,q),Dn!==null&&(I=p(Dn,I,kn),dn===null?on=Dn:dn.sibling=Dn,dn=Dn);return Bn&&Nt(R,kn),on}for(pn=o(R,pn);!Dn.done;kn++,Dn=P.next())Dn=X(pn,R,kn,Dn.value,q),Dn!==null&&(n&&Dn.alternate!==null&&pn.delete(Dn.key===null?kn:Dn.key),I=p(Dn,I,kn),dn===null?on=Dn:dn.sibling=Dn,dn=Dn);return n&&pn.forEach(function(Cm){return e(R,Cm)}),Bn&&Nt(R,kn),on}function Wn(R,I,P,q){if(typeof P=="object"&&P!==null&&P.type===V&&P.key===null&&(P=P.props.children),typeof P=="object"&&P!==null){switch(P.$$typeof){case un:n:{for(var on=P.key,dn=I;dn!==null;){if(dn.key===on){if(on=P.type,on===V){if(dn.tag===7){r(R,dn.sibling),I=d(dn,P.props.children),I.return=R,R=I;break n}}else if(dn.elementType===on||typeof on=="object"&&on!==null&&on.$$typeof===xn&&Zu(on)===dn.type){r(R,dn.sibling),I=d(dn,P.props),I.ref=ei(R,dn,P),I.return=R,R=I;break n}r(R,dn);break}else e(R,dn);dn=dn.sibling}P.type===V?(I=Vt(P.props.children,R.mode,q,P.key),I.return=R,R=I):(q=Dl(P.type,P.key,P.props,null,R.mode,q),q.ref=ei(R,I,P),q.return=R,R=q)}return k(R);case O:n:{for(dn=P.key;I!==null;){if(I.key===dn)if(I.tag===4&&I.stateNode.containerInfo===P.containerInfo&&I.stateNode.implementation===P.implementation){r(R,I.sibling),I=d(I,P.children||[]),I.return=R,R=I;break n}else{r(R,I);break}else e(R,I);I=I.sibling}I=ba(P,R.mode,q),I.return=R,R=I}return k(R);case xn:return dn=P._init,Wn(R,I,dn(P._payload),q)}if(st(P))return tn(R,I,P,q);if(sn(P))return ln(R,I,P,q);al(R,P)}return typeof P=="string"&&P!==""||typeof P=="number"?(P=""+P,I!==null&&I.tag===6?(r(R,I.sibling),I=d(I,P),I.return=R,R=I):(r(R,I),I=Oa(P,R.mode,q),I.return=R,R=I),k(R)):r(R,I)}return Wn}var hr=nc(!0),ec=nc(!1),sl=kt(null),ul=null,yr=null,Wo=null;function Vo(){Wo=yr=ul=null}function qo(n){var e=sl.current;zn(sl),n._currentValue=e}function Qo(n,e,r){for(;n!==null;){var o=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,o!==null&&(o.childLanes|=e)):o!==null&&(o.childLanes&e)!==e&&(o.childLanes|=e),n===r)break;n=n.return}}function kr(n,e){ul=n,Wo=yr=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&e)!==0&&(ge=!0),n.firstContext=null)}function Pe(n){var e=n._currentValue;if(Wo!==n)if(n={context:n,memoizedValue:e,next:null},yr===null){if(ul===null)throw Error(i(308));yr=n,ul.dependencies={lanes:0,firstContext:n}}else yr=yr.next=n;return e}var zt=null;function Jo(n){zt===null?zt=[n]:zt.push(n)}function tc(n,e,r,o){var d=e.interleaved;return d===null?(r.next=r,Jo(e)):(r.next=d.next,d.next=r),e.interleaved=r,rt(n,o)}function rt(n,e){n.lanes|=e;var r=n.alternate;for(r!==null&&(r.lanes|=e),r=n,n=n.return;n!==null;)n.childLanes|=e,r=n.alternate,r!==null&&(r.childLanes|=e),r=n,n=n.return;return r.tag===3?r.stateNode:null}var St=!1;function $o(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rc(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function it(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function wt(n,e,r){var o=n.updateQueue;if(o===null)return null;if(o=o.shared,(Rn&2)!==0){var d=o.pending;return d===null?e.next=e:(e.next=d.next,d.next=e),o.pending=e,rt(n,r)}return d=o.interleaved,d===null?(e.next=e,Jo(o)):(e.next=d.next,d.next=e),o.interleaved=e,rt(n,r)}function cl(n,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var o=e.lanes;o&=n.pendingLanes,r|=o,e.lanes=r,so(n,r)}}function ic(n,e){var r=n.updateQueue,o=n.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var d=null,p=null;if(r=r.firstBaseUpdate,r!==null){do{var k={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};p===null?d=p=k:p=p.next=k,r=r.next}while(r!==null);p===null?d=p=e:p=p.next=e}else d=p=e;r={baseState:o.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:o.shared,effects:o.effects},n.updateQueue=r;return}n=r.lastBaseUpdate,n===null?r.firstBaseUpdate=e:n.next=e,r.lastBaseUpdate=e}function dl(n,e,r,o){var d=n.updateQueue;St=!1;var p=d.firstBaseUpdate,k=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var x=w,T=x.next;x.next=null,k===null?p=T:k.next=T,k=x;var G=n.alternate;G!==null&&(G=G.updateQueue,w=G.lastBaseUpdate,w!==k&&(w===null?G.firstBaseUpdate=T:w.next=T,G.lastBaseUpdate=x))}if(p!==null){var H=d.baseState;k=0,G=T=x=null,w=p;do{var z=w.lane,X=w.eventTime;if((o&z)===z){G!==null&&(G=G.next={eventTime:X,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});n:{var tn=n,ln=w;switch(z=e,X=r,ln.tag){case 1:if(tn=ln.payload,typeof tn=="function"){H=tn.call(X,H,z);break n}H=tn;break n;case 3:tn.flags=tn.flags&-65537|128;case 0:if(tn=ln.payload,z=typeof tn=="function"?tn.call(X,H,z):tn,z==null)break n;H=S({},H,z);break n;case 2:St=!0}}w.callback!==null&&w.lane!==0&&(n.flags|=64,z=d.effects,z===null?d.effects=[w]:z.push(w))}else X={eventTime:X,lane:z,tag:w.tag,payload:w.payload,callback:w.callback,next:null},G===null?(T=G=X,x=H):G=G.next=X,k|=z;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;z=w,w=z.next,z.next=null,d.lastBaseUpdate=z,d.shared.pending=null}}while(!0);if(G===null&&(x=H),d.baseState=x,d.firstBaseUpdate=T,d.lastBaseUpdate=G,e=d.shared.interleaved,e!==null){d=e;do k|=d.lane,d=d.next;while(d!==e)}else p===null&&(d.shared.lanes=0);jt|=k,n.lanes=k,n.memoizedState=H}}function lc(n,e,r){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var o=n[e],d=o.callback;if(d!==null){if(o.callback=null,o=r,typeof d!="function")throw Error(i(191,d));d.call(o)}}}var ti={},qe=kt(ti),ri=kt(ti),ii=kt(ti);function Bt(n){if(n===ti)throw Error(i(174));return n}function Ko(n,e){switch(Fn(ii,e),Fn(ri,n),Fn(qe,ti),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:K(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=K(e,n)}zn(qe),Fn(qe,e)}function Ar(){zn(qe),zn(ri),zn(ii)}function oc(n){Bt(ii.current);var e=Bt(qe.current),r=K(e,n.type);e!==r&&(Fn(ri,n),Fn(qe,r))}function Yo(n){ri.current===n&&(zn(qe),zn(ri))}var Gn=kt(0);function pl(n){for(var e=n;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xo=[];function Zo(){for(var n=0;n<Xo.length;n++)Xo[n]._workInProgressVersionPrimary=null;Xo.length=0}var fl=rn.ReactCurrentDispatcher,na=rn.ReactCurrentBatchConfig,Gt=0,jn=null,Jn=null,Kn=null,gl=!1,li=!1,oi=0,Vg=0;function ie(){throw Error(i(321))}function ea(n,e){if(e===null)return!1;for(var r=0;r<e.length&&r<n.length;r++)if(!Fe(n[r],e[r]))return!1;return!0}function ta(n,e,r,o,d,p){if(Gt=p,jn=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fl.current=n===null||n.memoizedState===null?$g:Kg,n=r(o,d),li){p=0;do{if(li=!1,oi=0,25<=p)throw Error(i(301));p+=1,Kn=Jn=null,e.updateQueue=null,fl.current=Yg,n=r(o,d)}while(li)}if(fl.current=yl,e=Jn!==null&&Jn.next!==null,Gt=0,Kn=Jn=jn=null,gl=!1,e)throw Error(i(300));return n}function ra(){var n=oi!==0;return oi=0,n}function Qe(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Kn===null?jn.memoizedState=Kn=n:Kn=Kn.next=n,Kn}function De(){if(Jn===null){var n=jn.alternate;n=n!==null?n.memoizedState:null}else n=Jn.next;var e=Kn===null?jn.memoizedState:Kn.next;if(e!==null)Kn=e,Jn=n;else{if(n===null)throw Error(i(310));Jn=n,n={memoizedState:Jn.memoizedState,baseState:Jn.baseState,baseQueue:Jn.baseQueue,queue:Jn.queue,next:null},Kn===null?jn.memoizedState=Kn=n:Kn=Kn.next=n}return Kn}function ai(n,e){return typeof e=="function"?e(n):e}function ia(n){var e=De(),r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var o=Jn,d=o.baseQueue,p=r.pending;if(p!==null){if(d!==null){var k=d.next;d.next=p.next,p.next=k}o.baseQueue=d=p,r.pending=null}if(d!==null){p=d.next,o=o.baseState;var w=k=null,x=null,T=p;do{var G=T.lane;if((Gt&G)===G)x!==null&&(x=x.next={lane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),o=T.hasEagerState?T.eagerState:n(o,T.action);else{var H={lane:G,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null};x===null?(w=x=H,k=o):x=x.next=H,jn.lanes|=G,jt|=G}T=T.next}while(T!==null&&T!==p);x===null?k=o:x.next=w,Fe(o,e.memoizedState)||(ge=!0),e.memoizedState=o,e.baseState=k,e.baseQueue=x,r.lastRenderedState=o}if(n=r.interleaved,n!==null){d=n;do p=d.lane,jn.lanes|=p,jt|=p,d=d.next;while(d!==n)}else d===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function la(n){var e=De(),r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var o=r.dispatch,d=r.pending,p=e.memoizedState;if(d!==null){r.pending=null;var k=d=d.next;do p=n(p,k.action),k=k.next;while(k!==d);Fe(p,e.memoizedState)||(ge=!0),e.memoizedState=p,e.baseQueue===null&&(e.baseState=p),r.lastRenderedState=p}return[p,o]}function ac(){}function sc(n,e){var r=jn,o=De(),d=e(),p=!Fe(o.memoizedState,d);if(p&&(o.memoizedState=d,ge=!0),o=o.queue,oa(dc.bind(null,r,o,n),[n]),o.getSnapshot!==e||p||Kn!==null&&Kn.memoizedState.tag&1){if(r.flags|=2048,si(9,cc.bind(null,r,o,d,e),void 0,null),Yn===null)throw Error(i(349));(Gt&30)!==0||uc(r,e,d)}return d}function uc(n,e,r){n.flags|=16384,n={getSnapshot:e,value:r},e=jn.updateQueue,e===null?(e={lastEffect:null,stores:null},jn.updateQueue=e,e.stores=[n]):(r=e.stores,r===null?e.stores=[n]:r.push(n))}function cc(n,e,r,o){e.value=r,e.getSnapshot=o,pc(e)&&fc(n)}function dc(n,e,r){return r(function(){pc(e)&&fc(n)})}function pc(n){var e=n.getSnapshot;n=n.value;try{var r=e();return!Fe(n,r)}catch{return!0}}function fc(n){var e=rt(n,1);e!==null&&je(e,n,1,-1)}function gc(n){var e=Qe();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ai,lastRenderedState:n},e.queue=n,n=n.dispatch=Jg.bind(null,jn,n),[e.memoizedState,n]}function si(n,e,r,o){return n={tag:n,create:e,destroy:r,deps:o,next:null},e=jn.updateQueue,e===null?(e={lastEffect:null,stores:null},jn.updateQueue=e,e.lastEffect=n.next=n):(r=e.lastEffect,r===null?e.lastEffect=n.next=n:(o=r.next,r.next=n,n.next=o,e.lastEffect=n)),n}function mc(){return De().memoizedState}function ml(n,e,r,o){var d=Qe();jn.flags|=n,d.memoizedState=si(1|e,r,void 0,o===void 0?null:o)}function hl(n,e,r,o){var d=De();o=o===void 0?null:o;var p=void 0;if(Jn!==null){var k=Jn.memoizedState;if(p=k.destroy,o!==null&&ea(o,k.deps)){d.memoizedState=si(e,r,p,o);return}}jn.flags|=n,d.memoizedState=si(1|e,r,p,o)}function hc(n,e){return ml(8390656,8,n,e)}function oa(n,e){return hl(2048,8,n,e)}function yc(n,e){return hl(4,2,n,e)}function kc(n,e){return hl(4,4,n,e)}function Ac(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function vc(n,e,r){return r=r!=null?r.concat([n]):null,hl(4,4,Ac.bind(null,e,n),r)}function aa(){}function Sc(n,e){var r=De();e=e===void 0?null:e;var o=r.memoizedState;return o!==null&&e!==null&&ea(e,o[1])?o[0]:(r.memoizedState=[n,e],n)}function wc(n,e){var r=De();e=e===void 0?null:e;var o=r.memoizedState;return o!==null&&e!==null&&ea(e,o[1])?o[0]:(n=n(),r.memoizedState=[n,e],n)}function Cc(n,e,r){return(Gt&21)===0?(n.baseState&&(n.baseState=!1,ge=!0),n.memoizedState=r):(Fe(r,e)||(r=Zs(),jn.lanes|=r,jt|=r,n.baseState=!0),e)}function qg(n,e){var r=Mn;Mn=r!==0&&4>r?r:4,n(!0);var o=na.transition;na.transition={};try{n(!1),e()}finally{Mn=r,na.transition=o}}function xc(){return De().memoizedState}function Qg(n,e,r){var o=Et(n);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},Ic(n))Ec(e,r);else if(r=tc(n,e,r,o),r!==null){var d=ce();je(r,n,o,d),Lc(r,e,o)}}function Jg(n,e,r){var o=Et(n),d={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(Ic(n))Ec(e,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=e.lastRenderedReducer,p!==null))try{var k=e.lastRenderedState,w=p(k,r);if(d.hasEagerState=!0,d.eagerState=w,Fe(w,k)){var x=e.interleaved;x===null?(d.next=d,Jo(e)):(d.next=x.next,x.next=d),e.interleaved=d;return}}catch{}finally{}r=tc(n,e,d,o),r!==null&&(d=ce(),je(r,n,o,d),Lc(r,e,o))}}function Ic(n){var e=n.alternate;return n===jn||e!==null&&e===jn}function Ec(n,e){li=gl=!0;var r=n.pending;r===null?e.next=e:(e.next=r.next,r.next=e),n.pending=e}function Lc(n,e,r){if((r&4194240)!==0){var o=e.lanes;o&=n.pendingLanes,r|=o,e.lanes=r,so(n,r)}}var yl={readContext:Pe,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},$g={readContext:Pe,useCallback:function(n,e){return Qe().memoizedState=[n,e===void 0?null:e],n},useContext:Pe,useEffect:hc,useImperativeHandle:function(n,e,r){return r=r!=null?r.concat([n]):null,ml(4194308,4,Ac.bind(null,e,n),r)},useLayoutEffect:function(n,e){return ml(4194308,4,n,e)},useInsertionEffect:function(n,e){return ml(4,2,n,e)},useMemo:function(n,e){var r=Qe();return e=e===void 0?null:e,n=n(),r.memoizedState=[n,e],n},useReducer:function(n,e,r){var o=Qe();return e=r!==void 0?r(e):e,o.memoizedState=o.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},o.queue=n,n=n.dispatch=Qg.bind(null,jn,n),[o.memoizedState,n]},useRef:function(n){var e=Qe();return n={current:n},e.memoizedState=n},useState:gc,useDebugValue:aa,useDeferredValue:function(n){return Qe().memoizedState=n},useTransition:function(){var n=gc(!1),e=n[0];return n=qg.bind(null,n[1]),Qe().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,r){var o=jn,d=Qe();if(Bn){if(r===void 0)throw Error(i(407));r=r()}else{if(r=e(),Yn===null)throw Error(i(349));(Gt&30)!==0||uc(o,e,r)}d.memoizedState=r;var p={value:r,getSnapshot:e};return d.queue=p,hc(dc.bind(null,o,p,n),[n]),o.flags|=2048,si(9,cc.bind(null,o,p,r,e),void 0,null),r},useId:function(){var n=Qe(),e=Yn.identifierPrefix;if(Bn){var r=tt,o=et;r=(o&~(1<<32-be(o)-1)).toString(32)+r,e=":"+e+"R"+r,r=oi++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=Vg++,e=":"+e+"r"+r.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Kg={readContext:Pe,useCallback:Sc,useContext:Pe,useEffect:oa,useImperativeHandle:vc,useInsertionEffect:yc,useLayoutEffect:kc,useMemo:wc,useReducer:ia,useRef:mc,useState:function(){return ia(ai)},useDebugValue:aa,useDeferredValue:function(n){var e=De();return Cc(e,Jn.memoizedState,n)},useTransition:function(){var n=ia(ai)[0],e=De().memoizedState;return[n,e]},useMutableSource:ac,useSyncExternalStore:sc,useId:xc,unstable_isNewReconciler:!1},Yg={readContext:Pe,useCallback:Sc,useContext:Pe,useEffect:oa,useImperativeHandle:vc,useInsertionEffect:yc,useLayoutEffect:kc,useMemo:wc,useReducer:la,useRef:mc,useState:function(){return la(ai)},useDebugValue:aa,useDeferredValue:function(n){var e=De();return Jn===null?e.memoizedState=n:Cc(e,Jn.memoizedState,n)},useTransition:function(){var n=la(ai)[0],e=De().memoizedState;return[n,e]},useMutableSource:ac,useSyncExternalStore:sc,useId:xc,unstable_isNewReconciler:!1};function ze(n,e){if(n&&n.defaultProps){e=S({},e),n=n.defaultProps;for(var r in n)e[r]===void 0&&(e[r]=n[r]);return e}return e}function sa(n,e,r,o){e=n.memoizedState,r=r(o,e),r=r==null?e:S({},e,r),n.memoizedState=r,n.lanes===0&&(n.updateQueue.baseState=r)}var kl={isMounted:function(n){return(n=n._reactInternals)?Mt(n)===n:!1},enqueueSetState:function(n,e,r){n=n._reactInternals;var o=ce(),d=Et(n),p=it(o,d);p.payload=e,r!=null&&(p.callback=r),e=wt(n,p,d),e!==null&&(je(e,n,d,o),cl(e,n,d))},enqueueReplaceState:function(n,e,r){n=n._reactInternals;var o=ce(),d=Et(n),p=it(o,d);p.tag=1,p.payload=e,r!=null&&(p.callback=r),e=wt(n,p,d),e!==null&&(je(e,n,d,o),cl(e,n,d))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var r=ce(),o=Et(n),d=it(r,o);d.tag=2,e!=null&&(d.callback=e),e=wt(n,d,o),e!==null&&(je(e,n,o,r),cl(e,n,o))}};function _c(n,e,r,o,d,p,k){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(o,p,k):e.prototype&&e.prototype.isPureReactComponent?!Jr(r,o)||!Jr(d,p):!0}function Rc(n,e,r){var o=!1,d=At,p=e.contextType;return typeof p=="object"&&p!==null?p=Pe(p):(d=fe(e)?bt:re.current,o=e.contextTypes,p=(o=o!=null)?pr(n,d):At),e=new e(r,p),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=kl,n.stateNode=e,e._reactInternals=n,o&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),e}function Pc(n,e,r,o){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,o),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,o),e.state!==n&&kl.enqueueReplaceState(e,e.state,null)}function ua(n,e,r,o){var d=n.stateNode;d.props=r,d.state=n.memoizedState,d.refs={},$o(n);var p=e.contextType;typeof p=="object"&&p!==null?d.context=Pe(p):(p=fe(e)?bt:re.current,d.context=pr(n,p)),d.state=n.memoizedState,p=e.getDerivedStateFromProps,typeof p=="function"&&(sa(n,e,p,r),d.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(e=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),e!==d.state&&kl.enqueueReplaceState(d,d.state,null),dl(n,r,d,o),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function vr(n,e){try{var r="",o=e;do r+=vn(o),o=o.return;while(o);var d=r}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:e,stack:d,digest:null}}function ca(n,e,r){return{value:n,source:null,stack:r??null,digest:e??null}}function da(n,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var Xg=typeof WeakMap=="function"?WeakMap:Map;function Dc(n,e,r){r=it(-1,r),r.tag=3,r.payload={element:null};var o=e.value;return r.callback=function(){Il||(Il=!0,Ea=o),da(n,e)},r}function Tc(n,e,r){r=it(-1,r),r.tag=3;var o=n.type.getDerivedStateFromError;if(typeof o=="function"){var d=e.value;r.payload=function(){return o(d)},r.callback=function(){da(n,e)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(r.callback=function(){da(n,e),typeof o!="function"&&(xt===null?xt=new Set([this]):xt.add(this));var k=e.stack;this.componentDidCatch(e.value,{componentStack:k!==null?k:""})}),r}function Mc(n,e,r){var o=n.pingCache;if(o===null){o=n.pingCache=new Xg;var d=new Set;o.set(e,d)}else d=o.get(e),d===void 0&&(d=new Set,o.set(e,d));d.has(r)||(d.add(r),n=pm.bind(null,n,e,r),e.then(n,n))}function Oc(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function bc(n,e,r,o,d){return(n.mode&1)===0?(n===e?n.flags|=65536:(n.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=it(-1,1),e.tag=2,wt(r,e,1))),r.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Zg=rn.ReactCurrentOwner,ge=!1;function ue(n,e,r,o){e.child=n===null?ec(e,null,r,o):hr(e,n.child,r,o)}function Fc(n,e,r,o,d){r=r.render;var p=e.ref;return kr(e,d),o=ta(n,e,r,o,p,d),r=ra(),n!==null&&!ge?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~d,lt(n,e,d)):(Bn&&r&&Bo(e),e.flags|=1,ue(n,e,o,d),e.child)}function Nc(n,e,r,o,d){if(n===null){var p=r.type;return typeof p=="function"&&!Ma(p)&&p.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=p,zc(n,e,p,o,d)):(n=Dl(r.type,null,o,e,e.mode,d),n.ref=e.ref,n.return=e,e.child=n)}if(p=n.child,(n.lanes&d)===0){var k=p.memoizedProps;if(r=r.compare,r=r!==null?r:Jr,r(k,o)&&n.ref===e.ref)return lt(n,e,d)}return e.flags|=1,n=_t(p,o),n.ref=e.ref,n.return=e,e.child=n}function zc(n,e,r,o,d){if(n!==null){var p=n.memoizedProps;if(Jr(p,o)&&n.ref===e.ref)if(ge=!1,e.pendingProps=o=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(ge=!0);else return e.lanes=n.lanes,lt(n,e,d)}return pa(n,e,r,o,d)}function Bc(n,e,r){var o=e.pendingProps,d=o.children,p=n!==null?n.memoizedState:null;if(o.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Fn(wr,xe),xe|=r;else{if((r&1073741824)===0)return n=p!==null?p.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Fn(wr,xe),xe|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=p!==null?p.baseLanes:r,Fn(wr,xe),xe|=o}else p!==null?(o=p.baseLanes|r,e.memoizedState=null):o=r,Fn(wr,xe),xe|=o;return ue(n,e,d,r),e.child}function Gc(n,e){var r=e.ref;(n===null&&r!==null||n!==null&&n.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function pa(n,e,r,o,d){var p=fe(r)?bt:re.current;return p=pr(e,p),kr(e,d),r=ta(n,e,r,o,p,d),o=ra(),n!==null&&!ge?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~d,lt(n,e,d)):(Bn&&o&&Bo(e),e.flags|=1,ue(n,e,r,d),e.child)}function jc(n,e,r,o,d){if(fe(r)){var p=!0;tl(e)}else p=!1;if(kr(e,d),e.stateNode===null)vl(n,e),Rc(e,r,o),ua(e,r,o,d),o=!0;else if(n===null){var k=e.stateNode,w=e.memoizedProps;k.props=w;var x=k.context,T=r.contextType;typeof T=="object"&&T!==null?T=Pe(T):(T=fe(r)?bt:re.current,T=pr(e,T));var G=r.getDerivedStateFromProps,H=typeof G=="function"||typeof k.getSnapshotBeforeUpdate=="function";H||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(w!==o||x!==T)&&Pc(e,k,o,T),St=!1;var z=e.memoizedState;k.state=z,dl(e,o,k,d),x=e.memoizedState,w!==o||z!==x||pe.current||St?(typeof G=="function"&&(sa(e,r,G,o),x=e.memoizedState),(w=St||_c(e,r,w,o,z,x,T))?(H||typeof k.UNSAFE_componentWillMount!="function"&&typeof k.componentWillMount!="function"||(typeof k.componentWillMount=="function"&&k.componentWillMount(),typeof k.UNSAFE_componentWillMount=="function"&&k.UNSAFE_componentWillMount()),typeof k.componentDidMount=="function"&&(e.flags|=4194308)):(typeof k.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=o,e.memoizedState=x),k.props=o,k.state=x,k.context=T,o=w):(typeof k.componentDidMount=="function"&&(e.flags|=4194308),o=!1)}else{k=e.stateNode,rc(n,e),w=e.memoizedProps,T=e.type===e.elementType?w:ze(e.type,w),k.props=T,H=e.pendingProps,z=k.context,x=r.contextType,typeof x=="object"&&x!==null?x=Pe(x):(x=fe(r)?bt:re.current,x=pr(e,x));var X=r.getDerivedStateFromProps;(G=typeof X=="function"||typeof k.getSnapshotBeforeUpdate=="function")||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(w!==H||z!==x)&&Pc(e,k,o,x),St=!1,z=e.memoizedState,k.state=z,dl(e,o,k,d);var tn=e.memoizedState;w!==H||z!==tn||pe.current||St?(typeof X=="function"&&(sa(e,r,X,o),tn=e.memoizedState),(T=St||_c(e,r,T,o,z,tn,x)||!1)?(G||typeof k.UNSAFE_componentWillUpdate!="function"&&typeof k.componentWillUpdate!="function"||(typeof k.componentWillUpdate=="function"&&k.componentWillUpdate(o,tn,x),typeof k.UNSAFE_componentWillUpdate=="function"&&k.UNSAFE_componentWillUpdate(o,tn,x)),typeof k.componentDidUpdate=="function"&&(e.flags|=4),typeof k.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof k.componentDidUpdate!="function"||w===n.memoizedProps&&z===n.memoizedState||(e.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&z===n.memoizedState||(e.flags|=1024),e.memoizedProps=o,e.memoizedState=tn),k.props=o,k.state=tn,k.context=x,o=T):(typeof k.componentDidUpdate!="function"||w===n.memoizedProps&&z===n.memoizedState||(e.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&z===n.memoizedState||(e.flags|=1024),o=!1)}return fa(n,e,r,o,p,d)}function fa(n,e,r,o,d,p){Gc(n,e);var k=(e.flags&128)!==0;if(!o&&!k)return d&&qu(e,r,!1),lt(n,e,p);o=e.stateNode,Zg.current=e;var w=k&&typeof r.getDerivedStateFromError!="function"?null:o.render();return e.flags|=1,n!==null&&k?(e.child=hr(e,n.child,null,p),e.child=hr(e,null,w,p)):ue(n,e,w,p),e.memoizedState=o.state,d&&qu(e,r,!0),e.child}function Hc(n){var e=n.stateNode;e.pendingContext?Wu(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Wu(n,e.context,!1),Ko(n,e.containerInfo)}function Uc(n,e,r,o,d){return mr(),Uo(d),e.flags|=256,ue(n,e,r,o),e.child}var ga={dehydrated:null,treeContext:null,retryLane:0};function ma(n){return{baseLanes:n,cachePool:null,transitions:null}}function Wc(n,e,r){var o=e.pendingProps,d=Gn.current,p=!1,k=(e.flags&128)!==0,w;if((w=k)||(w=n!==null&&n.memoizedState===null?!1:(d&2)!==0),w?(p=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Fn(Gn,d&1),n===null)return Ho(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((e.mode&1)===0?e.lanes=1:n.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(k=o.children,n=o.fallback,p?(o=e.mode,p=e.child,k={mode:"hidden",children:k},(o&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=k):p=Tl(k,o,0,null),n=Vt(n,o,r,null),p.return=e,n.return=e,p.sibling=n,e.child=p,e.child.memoizedState=ma(r),e.memoizedState=ga,n):ha(e,k));if(d=n.memoizedState,d!==null&&(w=d.dehydrated,w!==null))return nm(n,e,k,o,w,d,r);if(p){p=o.fallback,k=e.mode,d=n.child,w=d.sibling;var x={mode:"hidden",children:o.children};return(k&1)===0&&e.child!==d?(o=e.child,o.childLanes=0,o.pendingProps=x,e.deletions=null):(o=_t(d,x),o.subtreeFlags=d.subtreeFlags&14680064),w!==null?p=_t(w,p):(p=Vt(p,k,r,null),p.flags|=2),p.return=e,o.return=e,o.sibling=p,e.child=o,o=p,p=e.child,k=n.child.memoizedState,k=k===null?ma(r):{baseLanes:k.baseLanes|r,cachePool:null,transitions:k.transitions},p.memoizedState=k,p.childLanes=n.childLanes&~r,e.memoizedState=ga,o}return p=n.child,n=p.sibling,o=_t(p,{mode:"visible",children:o.children}),(e.mode&1)===0&&(o.lanes=r),o.return=e,o.sibling=null,n!==null&&(r=e.deletions,r===null?(e.deletions=[n],e.flags|=16):r.push(n)),e.child=o,e.memoizedState=null,o}function ha(n,e){return e=Tl({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Al(n,e,r,o){return o!==null&&Uo(o),hr(e,n.child,null,r),n=ha(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function nm(n,e,r,o,d,p,k){if(r)return e.flags&256?(e.flags&=-257,o=ca(Error(i(422))),Al(n,e,k,o)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(p=o.fallback,d=e.mode,o=Tl({mode:"visible",children:o.children},d,0,null),p=Vt(p,d,k,null),p.flags|=2,o.return=e,p.return=e,o.sibling=p,e.child=o,(e.mode&1)!==0&&hr(e,n.child,null,k),e.child.memoizedState=ma(k),e.memoizedState=ga,p);if((e.mode&1)===0)return Al(n,e,k,null);if(d.data==="$!"){if(o=d.nextSibling&&d.nextSibling.dataset,o)var w=o.dgst;return o=w,p=Error(i(419)),o=ca(p,o,void 0),Al(n,e,k,o)}if(w=(k&n.childLanes)!==0,ge||w){if(o=Yn,o!==null){switch(k&-k){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(o.suspendedLanes|k))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,rt(n,d),je(o,n,d,-1))}return Ta(),o=ca(Error(i(421))),Al(n,e,k,o)}return d.data==="$?"?(e.flags|=128,e.child=n.child,e=fm.bind(null,n),d._reactRetry=e,null):(n=p.treeContext,Ce=yt(d.nextSibling),we=e,Bn=!0,Ne=null,n!==null&&(_e[Re++]=et,_e[Re++]=tt,_e[Re++]=Ft,et=n.id,tt=n.overflow,Ft=e),e=ha(e,o.children),e.flags|=4096,e)}function Vc(n,e,r){n.lanes|=e;var o=n.alternate;o!==null&&(o.lanes|=e),Qo(n.return,e,r)}function ya(n,e,r,o,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:d}:(p.isBackwards=e,p.rendering=null,p.renderingStartTime=0,p.last=o,p.tail=r,p.tailMode=d)}function qc(n,e,r){var o=e.pendingProps,d=o.revealOrder,p=o.tail;if(ue(n,e,o.children,r),o=Gn.current,(o&2)!==0)o=o&1|2,e.flags|=128;else{if(n!==null&&(n.flags&128)!==0)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Vc(n,r,e);else if(n.tag===19)Vc(n,r,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}o&=1}if(Fn(Gn,o),(e.mode&1)===0)e.memoizedState=null;else switch(d){case"forwards":for(r=e.child,d=null;r!==null;)n=r.alternate,n!==null&&pl(n)===null&&(d=r),r=r.sibling;r=d,r===null?(d=e.child,e.child=null):(d=r.sibling,r.sibling=null),ya(e,!1,d,r,p);break;case"backwards":for(r=null,d=e.child,e.child=null;d!==null;){if(n=d.alternate,n!==null&&pl(n)===null){e.child=d;break}n=d.sibling,d.sibling=r,r=d,d=n}ya(e,!0,r,null,p);break;case"together":ya(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function vl(n,e){(e.mode&1)===0&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function lt(n,e,r){if(n!==null&&(e.dependencies=n.dependencies),jt|=e.lanes,(r&e.childLanes)===0)return null;if(n!==null&&e.child!==n.child)throw Error(i(153));if(e.child!==null){for(n=e.child,r=_t(n,n.pendingProps),e.child=r,r.return=e;n.sibling!==null;)n=n.sibling,r=r.sibling=_t(n,n.pendingProps),r.return=e;r.sibling=null}return e.child}function em(n,e,r){switch(e.tag){case 3:Hc(e),mr();break;case 5:oc(e);break;case 1:fe(e.type)&&tl(e);break;case 4:Ko(e,e.stateNode.containerInfo);break;case 10:var o=e.type._context,d=e.memoizedProps.value;Fn(sl,o._currentValue),o._currentValue=d;break;case 13:if(o=e.memoizedState,o!==null)return o.dehydrated!==null?(Fn(Gn,Gn.current&1),e.flags|=128,null):(r&e.child.childLanes)!==0?Wc(n,e,r):(Fn(Gn,Gn.current&1),n=lt(n,e,r),n!==null?n.sibling:null);Fn(Gn,Gn.current&1);break;case 19:if(o=(r&e.childLanes)!==0,(n.flags&128)!==0){if(o)return qc(n,e,r);e.flags|=128}if(d=e.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Fn(Gn,Gn.current),o)break;return null;case 22:case 23:return e.lanes=0,Bc(n,e,r)}return lt(n,e,r)}var Qc,ka,Jc,$c;Qc=function(n,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)n.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},ka=function(){},Jc=function(n,e,r,o){var d=n.memoizedProps;if(d!==o){n=e.stateNode,Bt(qe.current);var p=null;switch(r){case"input":d=Rr(n,d),o=Rr(n,o),p=[];break;case"select":d=S({},d,{value:void 0}),o=S({},o,{value:void 0}),p=[];break;case"textarea":d=Tr(n,d),o=Tr(n,o),p=[];break;default:typeof d.onClick!="function"&&typeof o.onClick=="function"&&(n.onclick=Zi)}ne(r,o);var k;r=null;for(T in d)if(!o.hasOwnProperty(T)&&d.hasOwnProperty(T)&&d[T]!=null)if(T==="style"){var w=d[T];for(k in w)w.hasOwnProperty(k)&&(r||(r={}),r[k]="")}else T!=="dangerouslySetInnerHTML"&&T!=="children"&&T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&T!=="autoFocus"&&(s.hasOwnProperty(T)?p||(p=[]):(p=p||[]).push(T,null));for(T in o){var x=o[T];if(w=d!=null?d[T]:void 0,o.hasOwnProperty(T)&&x!==w&&(x!=null||w!=null))if(T==="style")if(w){for(k in w)!w.hasOwnProperty(k)||x&&x.hasOwnProperty(k)||(r||(r={}),r[k]="");for(k in x)x.hasOwnProperty(k)&&w[k]!==x[k]&&(r||(r={}),r[k]=x[k])}else r||(p||(p=[]),p.push(T,r)),r=x;else T==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,w=w?w.__html:void 0,x!=null&&w!==x&&(p=p||[]).push(T,x)):T==="children"?typeof x!="string"&&typeof x!="number"||(p=p||[]).push(T,""+x):T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&(s.hasOwnProperty(T)?(x!=null&&T==="onScroll"&&Nn("scroll",n),p||w===x||(p=[])):(p=p||[]).push(T,x))}r&&(p=p||[]).push("style",r);var T=p;(e.updateQueue=T)&&(e.flags|=4)}},$c=function(n,e,r,o){r!==o&&(e.flags|=4)};function ui(n,e){if(!Bn)switch(n.tailMode){case"hidden":e=n.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?n.tail=null:r.sibling=null;break;case"collapsed":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:o.sibling=null}}function le(n){var e=n.alternate!==null&&n.alternate.child===n.child,r=0,o=0;if(e)for(var d=n.child;d!==null;)r|=d.lanes|d.childLanes,o|=d.subtreeFlags&14680064,o|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)r|=d.lanes|d.childLanes,o|=d.subtreeFlags,o|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=o,n.childLanes=r,e}function tm(n,e,r){var o=e.pendingProps;switch(Go(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(e),null;case 1:return fe(e.type)&&el(),le(e),null;case 3:return o=e.stateNode,Ar(),zn(pe),zn(re),Zo(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(ol(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ne!==null&&(Ra(Ne),Ne=null))),ka(n,e),le(e),null;case 5:Yo(e);var d=Bt(ii.current);if(r=e.type,n!==null&&e.stateNode!=null)Jc(n,e,r,o,d),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!o){if(e.stateNode===null)throw Error(i(166));return le(e),null}if(n=Bt(qe.current),ol(e)){o=e.stateNode,r=e.type;var p=e.memoizedProps;switch(o[Ve]=e,o[Zr]=p,n=(e.mode&1)!==0,r){case"dialog":Nn("cancel",o),Nn("close",o);break;case"iframe":case"object":case"embed":Nn("load",o);break;case"video":case"audio":for(d=0;d<Kr.length;d++)Nn(Kr[d],o);break;case"source":Nn("error",o);break;case"img":case"image":case"link":Nn("error",o),Nn("load",o);break;case"details":Nn("toggle",o);break;case"input":Pr(o,p),Nn("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!p.multiple},Nn("invalid",o);break;case"textarea":Ri(o,p),Nn("invalid",o)}ne(r,p),d=null;for(var k in p)if(p.hasOwnProperty(k)){var w=p[k];k==="children"?typeof w=="string"?o.textContent!==w&&(p.suppressHydrationWarning!==!0&&Xi(o.textContent,w,n),d=["children",w]):typeof w=="number"&&o.textContent!==""+w&&(p.suppressHydrationWarning!==!0&&Xi(o.textContent,w,n),d=["children",""+w]):s.hasOwnProperty(k)&&w!=null&&k==="onScroll"&&Nn("scroll",o)}switch(r){case"input":Ye(o),_i(o,p,!0);break;case"textarea":Ye(o),Di(o);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(o.onclick=Zi)}o=d,e.updateQueue=o,o!==null&&(e.flags|=4)}else{k=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=F(r)),n==="http://www.w3.org/1999/xhtml"?r==="script"?(n=k.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof o.is=="string"?n=k.createElement(r,{is:o.is}):(n=k.createElement(r),r==="select"&&(k=n,o.multiple?k.multiple=!0:o.size&&(k.size=o.size))):n=k.createElementNS(n,r),n[Ve]=e,n[Zr]=o,Qc(n,e,!1,!1),e.stateNode=n;n:{switch(k=Ue(r,o),r){case"dialog":Nn("cancel",n),Nn("close",n),d=o;break;case"iframe":case"object":case"embed":Nn("load",n),d=o;break;case"video":case"audio":for(d=0;d<Kr.length;d++)Nn(Kr[d],n);d=o;break;case"source":Nn("error",n),d=o;break;case"img":case"image":case"link":Nn("error",n),Nn("load",n),d=o;break;case"details":Nn("toggle",n),d=o;break;case"input":Pr(n,o),d=Rr(n,o),Nn("invalid",n);break;case"option":d=o;break;case"select":n._wrapperState={wasMultiple:!!o.multiple},d=S({},o,{value:void 0}),Nn("invalid",n);break;case"textarea":Ri(n,o),d=Tr(n,o),Nn("invalid",n);break;default:d=o}ne(r,d),w=d;for(p in w)if(w.hasOwnProperty(p)){var x=w[p];p==="style"?ct(n,x):p==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&wn(n,x)):p==="children"?typeof x=="string"?(r!=="textarea"||x!=="")&&_n(n,x):typeof x=="number"&&_n(n,""+x):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(s.hasOwnProperty(p)?x!=null&&p==="onScroll"&&Nn("scroll",n):x!=null&&B(n,p,x,k))}switch(r){case"input":Ye(n),_i(n,o,!1);break;case"textarea":Ye(n),Di(n);break;case"option":o.value!=null&&n.setAttribute("value",""+Sn(o.value));break;case"select":n.multiple=!!o.multiple,p=o.value,p!=null?ut(n,!!o.multiple,p,!1):o.defaultValue!=null&&ut(n,!!o.multiple,o.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Zi)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break n;case"img":o=!0;break n;default:o=!1}}o&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return le(e),null;case 6:if(n&&e.stateNode!=null)$c(n,e,n.memoizedProps,o);else{if(typeof o!="string"&&e.stateNode===null)throw Error(i(166));if(r=Bt(ii.current),Bt(qe.current),ol(e)){if(o=e.stateNode,r=e.memoizedProps,o[Ve]=e,(p=o.nodeValue!==r)&&(n=we,n!==null))switch(n.tag){case 3:Xi(o.nodeValue,r,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Xi(o.nodeValue,r,(n.mode&1)!==0)}p&&(e.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[Ve]=e,e.stateNode=o}return le(e),null;case 13:if(zn(Gn),o=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Bn&&Ce!==null&&(e.mode&1)!==0&&(e.flags&128)===0)Xu(),mr(),e.flags|=98560,p=!1;else if(p=ol(e),o!==null&&o.dehydrated!==null){if(n===null){if(!p)throw Error(i(318));if(p=e.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(i(317));p[Ve]=e}else mr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;le(e),p=!1}else Ne!==null&&(Ra(Ne),Ne=null),p=!0;if(!p)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=r,e):(o=o!==null,o!==(n!==null&&n.memoizedState!==null)&&o&&(e.child.flags|=8192,(e.mode&1)!==0&&(n===null||(Gn.current&1)!==0?$n===0&&($n=3):Ta())),e.updateQueue!==null&&(e.flags|=4),le(e),null);case 4:return Ar(),ka(n,e),n===null&&Yr(e.stateNode.containerInfo),le(e),null;case 10:return qo(e.type._context),le(e),null;case 17:return fe(e.type)&&el(),le(e),null;case 19:if(zn(Gn),p=e.memoizedState,p===null)return le(e),null;if(o=(e.flags&128)!==0,k=p.rendering,k===null)if(o)ui(p,!1);else{if($n!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(k=pl(n),k!==null){for(e.flags|=128,ui(p,!1),o=k.updateQueue,o!==null&&(e.updateQueue=o,e.flags|=4),e.subtreeFlags=0,o=r,r=e.child;r!==null;)p=r,n=o,p.flags&=14680066,k=p.alternate,k===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=k.childLanes,p.lanes=k.lanes,p.child=k.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=k.memoizedProps,p.memoizedState=k.memoizedState,p.updateQueue=k.updateQueue,p.type=k.type,n=k.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),r=r.sibling;return Fn(Gn,Gn.current&1|2),e.child}n=n.sibling}p.tail!==null&&Un()>Cr&&(e.flags|=128,o=!0,ui(p,!1),e.lanes=4194304)}else{if(!o)if(n=pl(k),n!==null){if(e.flags|=128,o=!0,r=n.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),ui(p,!0),p.tail===null&&p.tailMode==="hidden"&&!k.alternate&&!Bn)return le(e),null}else 2*Un()-p.renderingStartTime>Cr&&r!==1073741824&&(e.flags|=128,o=!0,ui(p,!1),e.lanes=4194304);p.isBackwards?(k.sibling=e.child,e.child=k):(r=p.last,r!==null?r.sibling=k:e.child=k,p.last=k)}return p.tail!==null?(e=p.tail,p.rendering=e,p.tail=e.sibling,p.renderingStartTime=Un(),e.sibling=null,r=Gn.current,Fn(Gn,o?r&1|2:r&1),e):(le(e),null);case 22:case 23:return Da(),o=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==o&&(e.flags|=8192),o&&(e.mode&1)!==0?(xe&1073741824)!==0&&(le(e),e.subtreeFlags&6&&(e.flags|=8192)):le(e),null;case 24:return null;case 25:return null}throw Error(i(156,e.tag))}function rm(n,e){switch(Go(e),e.tag){case 1:return fe(e.type)&&el(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Ar(),zn(pe),zn(re),Zo(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 5:return Yo(e),null;case 13:if(zn(Gn),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(i(340));mr()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return zn(Gn),null;case 4:return Ar(),null;case 10:return qo(e.type._context),null;case 22:case 23:return Da(),null;case 24:return null;default:return null}}var Sl=!1,oe=!1,im=typeof WeakSet=="function"?WeakSet:Set,nn=null;function Sr(n,e){var r=n.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){Hn(n,e,o)}else r.current=null}function Aa(n,e,r){try{r()}catch(o){Hn(n,e,o)}}var Kc=!1;function lm(n,e){if(Do=ji,n=_u(),Co(n)){if("selectionStart"in n)var r={start:n.selectionStart,end:n.selectionEnd};else n:{r=(r=n.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var d=o.anchorOffset,p=o.focusNode;o=o.focusOffset;try{r.nodeType,p.nodeType}catch{r=null;break n}var k=0,w=-1,x=-1,T=0,G=0,H=n,z=null;e:for(;;){for(var X;H!==r||d!==0&&H.nodeType!==3||(w=k+d),H!==p||o!==0&&H.nodeType!==3||(x=k+o),H.nodeType===3&&(k+=H.nodeValue.length),(X=H.firstChild)!==null;)z=H,H=X;for(;;){if(H===n)break e;if(z===r&&++T===d&&(w=k),z===p&&++G===o&&(x=k),(X=H.nextSibling)!==null)break;H=z,z=H.parentNode}H=X}r=w===-1||x===-1?null:{start:w,end:x}}else r=null}r=r||{start:0,end:0}}else r=null;for(To={focusedElem:n,selectionRange:r},ji=!1,nn=e;nn!==null;)if(e=nn,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,nn=n;else for(;nn!==null;){e=nn;try{var tn=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(tn!==null){var ln=tn.memoizedProps,Wn=tn.memoizedState,R=e.stateNode,I=R.getSnapshotBeforeUpdate(e.elementType===e.type?ln:ze(e.type,ln),Wn);R.__reactInternalSnapshotBeforeUpdate=I}break;case 3:var P=e.stateNode.containerInfo;P.nodeType===1?P.textContent="":P.nodeType===9&&P.documentElement&&P.removeChild(P.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(q){Hn(e,e.return,q)}if(n=e.sibling,n!==null){n.return=e.return,nn=n;break}nn=e.return}return tn=Kc,Kc=!1,tn}function ci(n,e,r){var o=e.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var d=o=o.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&Aa(e,r,p)}d=d.next}while(d!==o)}}function wl(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&n)===n){var o=r.create;r.destroy=o()}r=r.next}while(r!==e)}}function va(n){var e=n.ref;if(e!==null){var r=n.stateNode;switch(n.tag){case 5:n=r;break;default:n=r}typeof e=="function"?e(n):e.current=n}}function Yc(n){var e=n.alternate;e!==null&&(n.alternate=null,Yc(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Ve],delete e[Zr],delete e[Fo],delete e[jg],delete e[Hg])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Xc(n){return n.tag===5||n.tag===3||n.tag===4}function Zc(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||Xc(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Sa(n,e,r){var o=n.tag;if(o===5||o===6)n=n.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(n,e):r.insertBefore(n,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(n,r)):(e=r,e.appendChild(n)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=Zi));else if(o!==4&&(n=n.child,n!==null))for(Sa(n,e,r),n=n.sibling;n!==null;)Sa(n,e,r),n=n.sibling}function wa(n,e,r){var o=n.tag;if(o===5||o===6)n=n.stateNode,e?r.insertBefore(n,e):r.appendChild(n);else if(o!==4&&(n=n.child,n!==null))for(wa(n,e,r),n=n.sibling;n!==null;)wa(n,e,r),n=n.sibling}var ee=null,Be=!1;function Ct(n,e,r){for(r=r.child;r!==null;)nd(n,e,r),r=r.sibling}function nd(n,e,r){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(bi,r)}catch{}switch(r.tag){case 5:oe||Sr(r,e);case 6:var o=ee,d=Be;ee=null,Ct(n,e,r),ee=o,Be=d,ee!==null&&(Be?(n=ee,r=r.stateNode,n.nodeType===8?n.parentNode.removeChild(r):n.removeChild(r)):ee.removeChild(r.stateNode));break;case 18:ee!==null&&(Be?(n=ee,r=r.stateNode,n.nodeType===8?bo(n.parentNode,r):n.nodeType===1&&bo(n,r),Hr(n)):bo(ee,r.stateNode));break;case 4:o=ee,d=Be,ee=r.stateNode.containerInfo,Be=!0,Ct(n,e,r),ee=o,Be=d;break;case 0:case 11:case 14:case 15:if(!oe&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){d=o=o.next;do{var p=d,k=p.destroy;p=p.tag,k!==void 0&&((p&2)!==0||(p&4)!==0)&&Aa(r,e,k),d=d.next}while(d!==o)}Ct(n,e,r);break;case 1:if(!oe&&(Sr(r,e),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(w){Hn(r,e,w)}Ct(n,e,r);break;case 21:Ct(n,e,r);break;case 22:r.mode&1?(oe=(o=oe)||r.memoizedState!==null,Ct(n,e,r),oe=o):Ct(n,e,r);break;default:Ct(n,e,r)}}function ed(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var r=n.stateNode;r===null&&(r=n.stateNode=new im),e.forEach(function(o){var d=gm.bind(null,n,o);r.has(o)||(r.add(o),o.then(d,d))})}}function Ge(n,e){var r=e.deletions;if(r!==null)for(var o=0;o<r.length;o++){var d=r[o];try{var p=n,k=e,w=k;n:for(;w!==null;){switch(w.tag){case 5:ee=w.stateNode,Be=!1;break n;case 3:ee=w.stateNode.containerInfo,Be=!0;break n;case 4:ee=w.stateNode.containerInfo,Be=!0;break n}w=w.return}if(ee===null)throw Error(i(160));nd(p,k,d),ee=null,Be=!1;var x=d.alternate;x!==null&&(x.return=null),d.return=null}catch(T){Hn(d,e,T)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)td(e,n),e=e.sibling}function td(n,e){var r=n.alternate,o=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ge(e,n),Je(n),o&4){try{ci(3,n,n.return),wl(3,n)}catch(ln){Hn(n,n.return,ln)}try{ci(5,n,n.return)}catch(ln){Hn(n,n.return,ln)}}break;case 1:Ge(e,n),Je(n),o&512&&r!==null&&Sr(r,r.return);break;case 5:if(Ge(e,n),Je(n),o&512&&r!==null&&Sr(r,r.return),n.flags&32){var d=n.stateNode;try{_n(d,"")}catch(ln){Hn(n,n.return,ln)}}if(o&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,k=r!==null?r.memoizedProps:p,w=n.type,x=n.updateQueue;if(n.updateQueue=null,x!==null)try{w==="input"&&p.type==="radio"&&p.name!=null&&Dr(d,p),Ue(w,k);var T=Ue(w,p);for(k=0;k<x.length;k+=2){var G=x[k],H=x[k+1];G==="style"?ct(d,H):G==="dangerouslySetInnerHTML"?wn(d,H):G==="children"?_n(d,H):B(d,G,H,T)}switch(w){case"input":Zt(d,p);break;case"textarea":Pi(d,p);break;case"select":var z=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var X=p.value;X!=null?ut(d,!!p.multiple,X,!1):z!==!!p.multiple&&(p.defaultValue!=null?ut(d,!!p.multiple,p.defaultValue,!0):ut(d,!!p.multiple,p.multiple?[]:"",!1))}d[Zr]=p}catch(ln){Hn(n,n.return,ln)}}break;case 6:if(Ge(e,n),Je(n),o&4){if(n.stateNode===null)throw Error(i(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(ln){Hn(n,n.return,ln)}}break;case 3:if(Ge(e,n),Je(n),o&4&&r!==null&&r.memoizedState.isDehydrated)try{Hr(e.containerInfo)}catch(ln){Hn(n,n.return,ln)}break;case 4:Ge(e,n),Je(n);break;case 13:Ge(e,n),Je(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Ia=Un())),o&4&&ed(n);break;case 22:if(G=r!==null&&r.memoizedState!==null,n.mode&1?(oe=(T=oe)||G,Ge(e,n),oe=T):Ge(e,n),Je(n),o&8192){if(T=n.memoizedState!==null,(n.stateNode.isHidden=T)&&!G&&(n.mode&1)!==0)for(nn=n,G=n.child;G!==null;){for(H=nn=G;nn!==null;){switch(z=nn,X=z.child,z.tag){case 0:case 11:case 14:case 15:ci(4,z,z.return);break;case 1:Sr(z,z.return);var tn=z.stateNode;if(typeof tn.componentWillUnmount=="function"){o=z,r=z.return;try{e=o,tn.props=e.memoizedProps,tn.state=e.memoizedState,tn.componentWillUnmount()}catch(ln){Hn(o,r,ln)}}break;case 5:Sr(z,z.return);break;case 22:if(z.memoizedState!==null){ld(H);continue}}X!==null?(X.return=z,nn=X):ld(H)}G=G.sibling}n:for(G=null,H=n;;){if(H.tag===5){if(G===null){G=H;try{d=H.stateNode,T?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(w=H.stateNode,x=H.memoizedProps.style,k=x!=null&&x.hasOwnProperty("display")?x.display:null,w.style.display=Le("display",k))}catch(ln){Hn(n,n.return,ln)}}}else if(H.tag===6){if(G===null)try{H.stateNode.nodeValue=T?"":H.memoizedProps}catch(ln){Hn(n,n.return,ln)}}else if((H.tag!==22&&H.tag!==23||H.memoizedState===null||H===n)&&H.child!==null){H.child.return=H,H=H.child;continue}if(H===n)break n;for(;H.sibling===null;){if(H.return===null||H.return===n)break n;G===H&&(G=null),H=H.return}G===H&&(G=null),H.sibling.return=H.return,H=H.sibling}}break;case 19:Ge(e,n),Je(n),o&4&&ed(n);break;case 21:break;default:Ge(e,n),Je(n)}}function Je(n){var e=n.flags;if(e&2){try{n:{for(var r=n.return;r!==null;){if(Xc(r)){var o=r;break n}r=r.return}throw Error(i(160))}switch(o.tag){case 5:var d=o.stateNode;o.flags&32&&(_n(d,""),o.flags&=-33);var p=Zc(n);wa(n,p,d);break;case 3:case 4:var k=o.stateNode.containerInfo,w=Zc(n);Sa(n,w,k);break;default:throw Error(i(161))}}catch(x){Hn(n,n.return,x)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function om(n,e,r){nn=n,rd(n)}function rd(n,e,r){for(var o=(n.mode&1)!==0;nn!==null;){var d=nn,p=d.child;if(d.tag===22&&o){var k=d.memoizedState!==null||Sl;if(!k){var w=d.alternate,x=w!==null&&w.memoizedState!==null||oe;w=Sl;var T=oe;if(Sl=k,(oe=x)&&!T)for(nn=d;nn!==null;)k=nn,x=k.child,k.tag===22&&k.memoizedState!==null?od(d):x!==null?(x.return=k,nn=x):od(d);for(;p!==null;)nn=p,rd(p),p=p.sibling;nn=d,Sl=w,oe=T}id(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,nn=p):id(n)}}function id(n){for(;nn!==null;){var e=nn;if((e.flags&8772)!==0){var r=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:oe||wl(5,e);break;case 1:var o=e.stateNode;if(e.flags&4&&!oe)if(r===null)o.componentDidMount();else{var d=e.elementType===e.type?r.memoizedProps:ze(e.type,r.memoizedProps);o.componentDidUpdate(d,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var p=e.updateQueue;p!==null&&lc(e,p,o);break;case 3:var k=e.updateQueue;if(k!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}lc(e,k,r)}break;case 5:var w=e.stateNode;if(r===null&&e.flags&4){r=w;var x=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&r.focus();break;case"img":x.src&&(r.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var T=e.alternate;if(T!==null){var G=T.memoizedState;if(G!==null){var H=G.dehydrated;H!==null&&Hr(H)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}oe||e.flags&512&&va(e)}catch(z){Hn(e,e.return,z)}}if(e===n){nn=null;break}if(r=e.sibling,r!==null){r.return=e.return,nn=r;break}nn=e.return}}function ld(n){for(;nn!==null;){var e=nn;if(e===n){nn=null;break}var r=e.sibling;if(r!==null){r.return=e.return,nn=r;break}nn=e.return}}function od(n){for(;nn!==null;){var e=nn;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{wl(4,e)}catch(x){Hn(e,r,x)}break;case 1:var o=e.stateNode;if(typeof o.componentDidMount=="function"){var d=e.return;try{o.componentDidMount()}catch(x){Hn(e,d,x)}}var p=e.return;try{va(e)}catch(x){Hn(e,p,x)}break;case 5:var k=e.return;try{va(e)}catch(x){Hn(e,k,x)}}}catch(x){Hn(e,e.return,x)}if(e===n){nn=null;break}var w=e.sibling;if(w!==null){w.return=e.return,nn=w;break}nn=e.return}}var am=Math.ceil,Cl=rn.ReactCurrentDispatcher,Ca=rn.ReactCurrentOwner,Te=rn.ReactCurrentBatchConfig,Rn=0,Yn=null,qn=null,te=0,xe=0,wr=kt(0),$n=0,di=null,jt=0,xl=0,xa=0,pi=null,me=null,Ia=0,Cr=1/0,ot=null,Il=!1,Ea=null,xt=null,El=!1,It=null,Ll=0,fi=0,La=null,_l=-1,Rl=0;function ce(){return(Rn&6)!==0?Un():_l!==-1?_l:_l=Un()}function Et(n){return(n.mode&1)===0?1:(Rn&2)!==0&&te!==0?te&-te:Wg.transition!==null?(Rl===0&&(Rl=Zs()),Rl):(n=Mn,n!==0||(n=window.event,n=n===void 0?16:su(n.type)),n)}function je(n,e,r,o){if(50<fi)throw fi=0,La=null,Error(i(185));Nr(n,r,o),((Rn&2)===0||n!==Yn)&&(n===Yn&&((Rn&2)===0&&(xl|=r),$n===4&&Lt(n,te)),he(n,o),r===1&&Rn===0&&(e.mode&1)===0&&(Cr=Un()+500,rl&&vt()))}function he(n,e){var r=n.callbackNode;Wf(n,e);var o=zi(n,n===Yn?te:0);if(o===0)r!==null&&Ks(r),n.callbackNode=null,n.callbackPriority=0;else if(e=o&-o,n.callbackPriority!==e){if(r!=null&&Ks(r),e===1)n.tag===0?Ug(sd.bind(null,n)):Qu(sd.bind(null,n)),Bg(function(){(Rn&6)===0&&vt()}),r=null;else{switch(nu(o)){case 1:r=lo;break;case 4:r=Ys;break;case 16:r=Oi;break;case 536870912:r=Xs;break;default:r=Oi}r=hd(r,ad.bind(null,n))}n.callbackPriority=e,n.callbackNode=r}}function ad(n,e){if(_l=-1,Rl=0,(Rn&6)!==0)throw Error(i(327));var r=n.callbackNode;if(xr()&&n.callbackNode!==r)return null;var o=zi(n,n===Yn?te:0);if(o===0)return null;if((o&30)!==0||(o&n.expiredLanes)!==0||e)e=Pl(n,o);else{e=o;var d=Rn;Rn|=2;var p=cd();(Yn!==n||te!==e)&&(ot=null,Cr=Un()+500,Ut(n,e));do try{cm();break}catch(w){ud(n,w)}while(!0);Vo(),Cl.current=p,Rn=d,qn!==null?e=0:(Yn=null,te=0,e=$n)}if(e!==0){if(e===2&&(d=oo(n),d!==0&&(o=d,e=_a(n,d))),e===1)throw r=di,Ut(n,0),Lt(n,o),he(n,Un()),r;if(e===6)Lt(n,o);else{if(d=n.current.alternate,(o&30)===0&&!sm(d)&&(e=Pl(n,o),e===2&&(p=oo(n),p!==0&&(o=p,e=_a(n,p))),e===1))throw r=di,Ut(n,0),Lt(n,o),he(n,Un()),r;switch(n.finishedWork=d,n.finishedLanes=o,e){case 0:case 1:throw Error(i(345));case 2:Wt(n,me,ot);break;case 3:if(Lt(n,o),(o&130023424)===o&&(e=Ia+500-Un(),10<e)){if(zi(n,0)!==0)break;if(d=n.suspendedLanes,(d&o)!==o){ce(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Oo(Wt.bind(null,n,me,ot),e);break}Wt(n,me,ot);break;case 4:if(Lt(n,o),(o&4194240)===o)break;for(e=n.eventTimes,d=-1;0<o;){var k=31-be(o);p=1<<k,k=e[k],k>d&&(d=k),o&=~p}if(o=d,o=Un()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*am(o/1960))-o,10<o){n.timeoutHandle=Oo(Wt.bind(null,n,me,ot),o);break}Wt(n,me,ot);break;case 5:Wt(n,me,ot);break;default:throw Error(i(329))}}}return he(n,Un()),n.callbackNode===r?ad.bind(null,n):null}function _a(n,e){var r=pi;return n.current.memoizedState.isDehydrated&&(Ut(n,e).flags|=256),n=Pl(n,e),n!==2&&(e=me,me=r,e!==null&&Ra(e)),n}function Ra(n){me===null?me=n:me.push.apply(me,n)}function sm(n){for(var e=n;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var d=r[o],p=d.getSnapshot;d=d.value;try{if(!Fe(p(),d))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Lt(n,e){for(e&=~xa,e&=~xl,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var r=31-be(e),o=1<<r;n[r]=-1,e&=~o}}function sd(n){if((Rn&6)!==0)throw Error(i(327));xr();var e=zi(n,0);if((e&1)===0)return he(n,Un()),null;var r=Pl(n,e);if(n.tag!==0&&r===2){var o=oo(n);o!==0&&(e=o,r=_a(n,o))}if(r===1)throw r=di,Ut(n,0),Lt(n,e),he(n,Un()),r;if(r===6)throw Error(i(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Wt(n,me,ot),he(n,Un()),null}function Pa(n,e){var r=Rn;Rn|=1;try{return n(e)}finally{Rn=r,Rn===0&&(Cr=Un()+500,rl&&vt())}}function Ht(n){It!==null&&It.tag===0&&(Rn&6)===0&&xr();var e=Rn;Rn|=1;var r=Te.transition,o=Mn;try{if(Te.transition=null,Mn=1,n)return n()}finally{Mn=o,Te.transition=r,Rn=e,(Rn&6)===0&&vt()}}function Da(){xe=wr.current,zn(wr)}function Ut(n,e){n.finishedWork=null,n.finishedLanes=0;var r=n.timeoutHandle;if(r!==-1&&(n.timeoutHandle=-1,zg(r)),qn!==null)for(r=qn.return;r!==null;){var o=r;switch(Go(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&el();break;case 3:Ar(),zn(pe),zn(re),Zo();break;case 5:Yo(o);break;case 4:Ar();break;case 13:zn(Gn);break;case 19:zn(Gn);break;case 10:qo(o.type._context);break;case 22:case 23:Da()}r=r.return}if(Yn=n,qn=n=_t(n.current,null),te=xe=e,$n=0,di=null,xa=xl=jt=0,me=pi=null,zt!==null){for(e=0;e<zt.length;e++)if(r=zt[e],o=r.interleaved,o!==null){r.interleaved=null;var d=o.next,p=r.pending;if(p!==null){var k=p.next;p.next=d,o.next=k}r.pending=o}zt=null}return n}function ud(n,e){do{var r=qn;try{if(Vo(),fl.current=yl,gl){for(var o=jn.memoizedState;o!==null;){var d=o.queue;d!==null&&(d.pending=null),o=o.next}gl=!1}if(Gt=0,Kn=Jn=jn=null,li=!1,oi=0,Ca.current=null,r===null||r.return===null){$n=1,di=e,qn=null;break}n:{var p=n,k=r.return,w=r,x=e;if(e=te,w.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var T=x,G=w,H=G.tag;if((G.mode&1)===0&&(H===0||H===11||H===15)){var z=G.alternate;z?(G.updateQueue=z.updateQueue,G.memoizedState=z.memoizedState,G.lanes=z.lanes):(G.updateQueue=null,G.memoizedState=null)}var X=Oc(k);if(X!==null){X.flags&=-257,bc(X,k,w,p,e),X.mode&1&&Mc(p,T,e),e=X,x=T;var tn=e.updateQueue;if(tn===null){var ln=new Set;ln.add(x),e.updateQueue=ln}else tn.add(x);break n}else{if((e&1)===0){Mc(p,T,e),Ta();break n}x=Error(i(426))}}else if(Bn&&w.mode&1){var Wn=Oc(k);if(Wn!==null){(Wn.flags&65536)===0&&(Wn.flags|=256),bc(Wn,k,w,p,e),Uo(vr(x,w));break n}}p=x=vr(x,w),$n!==4&&($n=2),pi===null?pi=[p]:pi.push(p),p=k;do{switch(p.tag){case 3:p.flags|=65536,e&=-e,p.lanes|=e;var R=Dc(p,x,e);ic(p,R);break n;case 1:w=x;var I=p.type,P=p.stateNode;if((p.flags&128)===0&&(typeof I.getDerivedStateFromError=="function"||P!==null&&typeof P.componentDidCatch=="function"&&(xt===null||!xt.has(P)))){p.flags|=65536,e&=-e,p.lanes|=e;var q=Tc(p,w,e);ic(p,q);break n}}p=p.return}while(p!==null)}pd(r)}catch(on){e=on,qn===r&&r!==null&&(qn=r=r.return);continue}break}while(!0)}function cd(){var n=Cl.current;return Cl.current=yl,n===null?yl:n}function Ta(){($n===0||$n===3||$n===2)&&($n=4),Yn===null||(jt&268435455)===0&&(xl&268435455)===0||Lt(Yn,te)}function Pl(n,e){var r=Rn;Rn|=2;var o=cd();(Yn!==n||te!==e)&&(ot=null,Ut(n,e));do try{um();break}catch(d){ud(n,d)}while(!0);if(Vo(),Rn=r,Cl.current=o,qn!==null)throw Error(i(261));return Yn=null,te=0,$n}function um(){for(;qn!==null;)dd(qn)}function cm(){for(;qn!==null&&!bf();)dd(qn)}function dd(n){var e=md(n.alternate,n,xe);n.memoizedProps=n.pendingProps,e===null?pd(n):qn=e,Ca.current=null}function pd(n){var e=n;do{var r=e.alternate;if(n=e.return,(e.flags&32768)===0){if(r=tm(r,e,xe),r!==null){qn=r;return}}else{if(r=rm(r,e),r!==null){r.flags&=32767,qn=r;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{$n=6,qn=null;return}}if(e=e.sibling,e!==null){qn=e;return}qn=e=n}while(e!==null);$n===0&&($n=5)}function Wt(n,e,r){var o=Mn,d=Te.transition;try{Te.transition=null,Mn=1,dm(n,e,r,o)}finally{Te.transition=d,Mn=o}return null}function dm(n,e,r,o){do xr();while(It!==null);if((Rn&6)!==0)throw Error(i(327));r=n.finishedWork;var d=n.finishedLanes;if(r===null)return null;if(n.finishedWork=null,n.finishedLanes=0,r===n.current)throw Error(i(177));n.callbackNode=null,n.callbackPriority=0;var p=r.lanes|r.childLanes;if(Vf(n,p),n===Yn&&(qn=Yn=null,te=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||El||(El=!0,hd(Oi,function(){return xr(),null})),p=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||p){p=Te.transition,Te.transition=null;var k=Mn;Mn=1;var w=Rn;Rn|=4,Ca.current=null,lm(n,r),td(r,n),Dg(To),ji=!!Do,To=Do=null,n.current=r,om(r),Ff(),Rn=w,Mn=k,Te.transition=p}else n.current=r;if(El&&(El=!1,It=n,Ll=d),p=n.pendingLanes,p===0&&(xt=null),Bf(r.stateNode),he(n,Un()),e!==null)for(o=n.onRecoverableError,r=0;r<e.length;r++)d=e[r],o(d.value,{componentStack:d.stack,digest:d.digest});if(Il)throw Il=!1,n=Ea,Ea=null,n;return(Ll&1)!==0&&n.tag!==0&&xr(),p=n.pendingLanes,(p&1)!==0?n===La?fi++:(fi=0,La=n):fi=0,vt(),null}function xr(){if(It!==null){var n=nu(Ll),e=Te.transition,r=Mn;try{if(Te.transition=null,Mn=16>n?16:n,It===null)var o=!1;else{if(n=It,It=null,Ll=0,(Rn&6)!==0)throw Error(i(331));var d=Rn;for(Rn|=4,nn=n.current;nn!==null;){var p=nn,k=p.child;if((nn.flags&16)!==0){var w=p.deletions;if(w!==null){for(var x=0;x<w.length;x++){var T=w[x];for(nn=T;nn!==null;){var G=nn;switch(G.tag){case 0:case 11:case 15:ci(8,G,p)}var H=G.child;if(H!==null)H.return=G,nn=H;else for(;nn!==null;){G=nn;var z=G.sibling,X=G.return;if(Yc(G),G===T){nn=null;break}if(z!==null){z.return=X,nn=z;break}nn=X}}}var tn=p.alternate;if(tn!==null){var ln=tn.child;if(ln!==null){tn.child=null;do{var Wn=ln.sibling;ln.sibling=null,ln=Wn}while(ln!==null)}}nn=p}}if((p.subtreeFlags&2064)!==0&&k!==null)k.return=p,nn=k;else n:for(;nn!==null;){if(p=nn,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:ci(9,p,p.return)}var R=p.sibling;if(R!==null){R.return=p.return,nn=R;break n}nn=p.return}}var I=n.current;for(nn=I;nn!==null;){k=nn;var P=k.child;if((k.subtreeFlags&2064)!==0&&P!==null)P.return=k,nn=P;else n:for(k=I;nn!==null;){if(w=nn,(w.flags&2048)!==0)try{switch(w.tag){case 0:case 11:case 15:wl(9,w)}}catch(on){Hn(w,w.return,on)}if(w===k){nn=null;break n}var q=w.sibling;if(q!==null){q.return=w.return,nn=q;break n}nn=w.return}}if(Rn=d,vt(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(bi,n)}catch{}o=!0}return o}finally{Mn=r,Te.transition=e}}return!1}function fd(n,e,r){e=vr(r,e),e=Dc(n,e,1),n=wt(n,e,1),e=ce(),n!==null&&(Nr(n,1,e),he(n,e))}function Hn(n,e,r){if(n.tag===3)fd(n,n,r);else for(;e!==null;){if(e.tag===3){fd(e,n,r);break}else if(e.tag===1){var o=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(xt===null||!xt.has(o))){n=vr(r,n),n=Tc(e,n,1),e=wt(e,n,1),n=ce(),e!==null&&(Nr(e,1,n),he(e,n));break}}e=e.return}}function pm(n,e,r){var o=n.pingCache;o!==null&&o.delete(e),e=ce(),n.pingedLanes|=n.suspendedLanes&r,Yn===n&&(te&r)===r&&($n===4||$n===3&&(te&130023424)===te&&500>Un()-Ia?Ut(n,0):xa|=r),he(n,e)}function gd(n,e){e===0&&((n.mode&1)===0?e=1:(e=Ni,Ni<<=1,(Ni&130023424)===0&&(Ni=4194304)));var r=ce();n=rt(n,e),n!==null&&(Nr(n,e,r),he(n,r))}function fm(n){var e=n.memoizedState,r=0;e!==null&&(r=e.retryLane),gd(n,r)}function gm(n,e){var r=0;switch(n.tag){case 13:var o=n.stateNode,d=n.memoizedState;d!==null&&(r=d.retryLane);break;case 19:o=n.stateNode;break;default:throw Error(i(314))}o!==null&&o.delete(e),gd(n,r)}var md;md=function(n,e,r){if(n!==null)if(n.memoizedProps!==e.pendingProps||pe.current)ge=!0;else{if((n.lanes&r)===0&&(e.flags&128)===0)return ge=!1,em(n,e,r);ge=(n.flags&131072)!==0}else ge=!1,Bn&&(e.flags&1048576)!==0&&Ju(e,ll,e.index);switch(e.lanes=0,e.tag){case 2:var o=e.type;vl(n,e),n=e.pendingProps;var d=pr(e,re.current);kr(e,r),d=ta(null,e,o,n,d,r);var p=ra();return e.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fe(o)?(p=!0,tl(e)):p=!1,e.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,$o(e),d.updater=kl,e.stateNode=d,d._reactInternals=e,ua(e,o,n,r),e=fa(null,e,o,!0,p,r)):(e.tag=0,Bn&&p&&Bo(e),ue(null,e,d,r),e=e.child),e;case 16:o=e.elementType;n:{switch(vl(n,e),n=e.pendingProps,d=o._init,o=d(o._payload),e.type=o,d=e.tag=hm(o),n=ze(o,n),d){case 0:e=pa(null,e,o,n,r);break n;case 1:e=jc(null,e,o,n,r);break n;case 11:e=Fc(null,e,o,n,r);break n;case 14:e=Nc(null,e,o,ze(o.type,n),r);break n}throw Error(i(306,o,""))}return e;case 0:return o=e.type,d=e.pendingProps,d=e.elementType===o?d:ze(o,d),pa(n,e,o,d,r);case 1:return o=e.type,d=e.pendingProps,d=e.elementType===o?d:ze(o,d),jc(n,e,o,d,r);case 3:n:{if(Hc(e),n===null)throw Error(i(387));o=e.pendingProps,p=e.memoizedState,d=p.element,rc(n,e),dl(e,o,null,r);var k=e.memoizedState;if(o=k.element,p.isDehydrated)if(p={element:o,isDehydrated:!1,cache:k.cache,pendingSuspenseBoundaries:k.pendingSuspenseBoundaries,transitions:k.transitions},e.updateQueue.baseState=p,e.memoizedState=p,e.flags&256){d=vr(Error(i(423)),e),e=Uc(n,e,o,r,d);break n}else if(o!==d){d=vr(Error(i(424)),e),e=Uc(n,e,o,r,d);break n}else for(Ce=yt(e.stateNode.containerInfo.firstChild),we=e,Bn=!0,Ne=null,r=ec(e,null,o,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(mr(),o===d){e=lt(n,e,r);break n}ue(n,e,o,r)}e=e.child}return e;case 5:return oc(e),n===null&&Ho(e),o=e.type,d=e.pendingProps,p=n!==null?n.memoizedProps:null,k=d.children,Mo(o,d)?k=null:p!==null&&Mo(o,p)&&(e.flags|=32),Gc(n,e),ue(n,e,k,r),e.child;case 6:return n===null&&Ho(e),null;case 13:return Wc(n,e,r);case 4:return Ko(e,e.stateNode.containerInfo),o=e.pendingProps,n===null?e.child=hr(e,null,o,r):ue(n,e,o,r),e.child;case 11:return o=e.type,d=e.pendingProps,d=e.elementType===o?d:ze(o,d),Fc(n,e,o,d,r);case 7:return ue(n,e,e.pendingProps,r),e.child;case 8:return ue(n,e,e.pendingProps.children,r),e.child;case 12:return ue(n,e,e.pendingProps.children,r),e.child;case 10:n:{if(o=e.type._context,d=e.pendingProps,p=e.memoizedProps,k=d.value,Fn(sl,o._currentValue),o._currentValue=k,p!==null)if(Fe(p.value,k)){if(p.children===d.children&&!pe.current){e=lt(n,e,r);break n}}else for(p=e.child,p!==null&&(p.return=e);p!==null;){var w=p.dependencies;if(w!==null){k=p.child;for(var x=w.firstContext;x!==null;){if(x.context===o){if(p.tag===1){x=it(-1,r&-r),x.tag=2;var T=p.updateQueue;if(T!==null){T=T.shared;var G=T.pending;G===null?x.next=x:(x.next=G.next,G.next=x),T.pending=x}}p.lanes|=r,x=p.alternate,x!==null&&(x.lanes|=r),Qo(p.return,r,e),w.lanes|=r;break}x=x.next}}else if(p.tag===10)k=p.type===e.type?null:p.child;else if(p.tag===18){if(k=p.return,k===null)throw Error(i(341));k.lanes|=r,w=k.alternate,w!==null&&(w.lanes|=r),Qo(k,r,e),k=p.sibling}else k=p.child;if(k!==null)k.return=p;else for(k=p;k!==null;){if(k===e){k=null;break}if(p=k.sibling,p!==null){p.return=k.return,k=p;break}k=k.return}p=k}ue(n,e,d.children,r),e=e.child}return e;case 9:return d=e.type,o=e.pendingProps.children,kr(e,r),d=Pe(d),o=o(d),e.flags|=1,ue(n,e,o,r),e.child;case 14:return o=e.type,d=ze(o,e.pendingProps),d=ze(o.type,d),Nc(n,e,o,d,r);case 15:return zc(n,e,e.type,e.pendingProps,r);case 17:return o=e.type,d=e.pendingProps,d=e.elementType===o?d:ze(o,d),vl(n,e),e.tag=1,fe(o)?(n=!0,tl(e)):n=!1,kr(e,r),Rc(e,o,d),ua(e,o,d,r),fa(null,e,o,!0,n,r);case 19:return qc(n,e,r);case 22:return Bc(n,e,r)}throw Error(i(156,e.tag))};function hd(n,e){return $s(n,e)}function mm(n,e,r,o){this.tag=n,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(n,e,r,o){return new mm(n,e,r,o)}function Ma(n){return n=n.prototype,!(!n||!n.isReactComponent)}function hm(n){if(typeof n=="function")return Ma(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Q)return 11;if(n===an)return 14}return 2}function _t(n,e){var r=n.alternate;return r===null?(r=Me(n.tag,e,n.key,n.mode),r.elementType=n.elementType,r.type=n.type,r.stateNode=n.stateNode,r.alternate=n,n.alternate=r):(r.pendingProps=e,r.type=n.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=n.flags&14680064,r.childLanes=n.childLanes,r.lanes=n.lanes,r.child=n.child,r.memoizedProps=n.memoizedProps,r.memoizedState=n.memoizedState,r.updateQueue=n.updateQueue,e=n.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=n.sibling,r.index=n.index,r.ref=n.ref,r}function Dl(n,e,r,o,d,p){var k=2;if(o=n,typeof n=="function")Ma(n)&&(k=1);else if(typeof n=="string")k=5;else n:switch(n){case V:return Vt(r.children,d,p,e);case en:k=8,d|=8;break;case cn:return n=Me(12,r,e,d|2),n.elementType=cn,n.lanes=p,n;case $:return n=Me(13,r,e,d),n.elementType=$,n.lanes=p,n;case Y:return n=Me(19,r,e,d),n.elementType=Y,n.lanes=p,n;case yn:return Tl(r,d,p,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case D:k=10;break n;case Z:k=9;break n;case Q:k=11;break n;case an:k=14;break n;case xn:k=16,o=null;break n}throw Error(i(130,n==null?n:typeof n,""))}return e=Me(k,r,e,d),e.elementType=n,e.type=o,e.lanes=p,e}function Vt(n,e,r,o){return n=Me(7,n,o,e),n.lanes=r,n}function Tl(n,e,r,o){return n=Me(22,n,o,e),n.elementType=yn,n.lanes=r,n.stateNode={isHidden:!1},n}function Oa(n,e,r){return n=Me(6,n,null,e),n.lanes=r,n}function ba(n,e,r){return e=Me(4,n.children!==null?n.children:[],n.key,e),e.lanes=r,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function ym(n,e,r,o,d){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ao(0),this.expirationTimes=ao(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ao(0),this.identifierPrefix=o,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Fa(n,e,r,o,d,p,k,w,x){return n=new ym(n,e,r,w,x),e===1?(e=1,p===!0&&(e|=8)):e=0,p=Me(3,null,null,e),n.current=p,p.stateNode=n,p.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},$o(p),n}function km(n,e,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:o==null?null:""+o,children:n,containerInfo:e,implementation:r}}function yd(n){if(!n)return At;n=n._reactInternals;n:{if(Mt(n)!==n||n.tag!==1)throw Error(i(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break n;case 1:if(fe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break n}}e=e.return}while(e!==null);throw Error(i(171))}if(n.tag===1){var r=n.type;if(fe(r))return Vu(n,r,e)}return e}function kd(n,e,r,o,d,p,k,w,x){return n=Fa(r,o,!0,n,d,p,k,w,x),n.context=yd(null),r=n.current,o=ce(),d=Et(r),p=it(o,d),p.callback=e??null,wt(r,p,d),n.current.lanes=d,Nr(n,d,o),he(n,o),n}function Ml(n,e,r,o){var d=e.current,p=ce(),k=Et(d);return r=yd(r),e.context===null?e.context=r:e.pendingContext=r,e=it(p,k),e.payload={element:n},o=o===void 0?null:o,o!==null&&(e.callback=o),n=wt(d,e,k),n!==null&&(je(n,d,k,p),cl(n,d,k)),k}function Ol(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Ad(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var r=n.retryLane;n.retryLane=r!==0&&r<e?r:e}}function Na(n,e){Ad(n,e),(n=n.alternate)&&Ad(n,e)}function Am(){return null}var vd=typeof reportError=="function"?reportError:function(n){console.error(n)};function za(n){this._internalRoot=n}bl.prototype.render=za.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(i(409));Ml(n,e,null,null)},bl.prototype.unmount=za.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Ht(function(){Ml(null,n,null,null)}),e[Ze]=null}};function bl(n){this._internalRoot=n}bl.prototype.unstable_scheduleHydration=function(n){if(n){var e=ru();n={blockedOn:null,target:n,priority:e};for(var r=0;r<gt.length&&e!==0&&e<gt[r].priority;r++);gt.splice(r,0,n),r===0&&ou(n)}};function Ba(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Fl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Sd(){}function vm(n,e,r,o,d){if(d){if(typeof o=="function"){var p=o;o=function(){var T=Ol(k);p.call(T)}}var k=kd(e,o,n,0,null,!1,!1,"",Sd);return n._reactRootContainer=k,n[Ze]=k.current,Yr(n.nodeType===8?n.parentNode:n),Ht(),k}for(;d=n.lastChild;)n.removeChild(d);if(typeof o=="function"){var w=o;o=function(){var T=Ol(x);w.call(T)}}var x=Fa(n,0,!1,null,null,!1,!1,"",Sd);return n._reactRootContainer=x,n[Ze]=x.current,Yr(n.nodeType===8?n.parentNode:n),Ht(function(){Ml(e,x,r,o)}),x}function Nl(n,e,r,o,d){var p=r._reactRootContainer;if(p){var k=p;if(typeof d=="function"){var w=d;d=function(){var x=Ol(k);w.call(x)}}Ml(e,k,n,d)}else k=vm(r,e,n,d,o);return Ol(k)}eu=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var r=Fr(e.pendingLanes);r!==0&&(so(e,r|1),he(e,Un()),(Rn&6)===0&&(Cr=Un()+500,vt()))}break;case 13:Ht(function(){var o=rt(n,1);if(o!==null){var d=ce();je(o,n,1,d)}}),Na(n,1)}},uo=function(n){if(n.tag===13){var e=rt(n,134217728);if(e!==null){var r=ce();je(e,n,134217728,r)}Na(n,134217728)}},tu=function(n){if(n.tag===13){var e=Et(n),r=rt(n,e);if(r!==null){var o=ce();je(r,n,e,o)}Na(n,e)}},ru=function(){return Mn},iu=function(n,e){var r=Mn;try{return Mn=n,e()}finally{Mn=r}},eo=function(n,e,r){switch(e){case"input":if(Zt(n,r),e=r.name,r.type==="radio"&&e!=null){for(r=n;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var o=r[e];if(o!==n&&o.form===n.form){var d=nl(o);if(!d)throw Error(i(90));Li(o),Zt(o,d)}}}break;case"textarea":Pi(n,r);break;case"select":e=r.value,e!=null&&ut(n,!!r.multiple,e,!1)}},Hs=Pa,Us=Ht;var Sm={usingClientEntryPoint:!1,Events:[ni,cr,nl,Gs,js,Pa]},gi={findFiberByHostInstance:Ot,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wm={bundleType:gi.bundleType,version:gi.version,rendererPackageName:gi.rendererPackageName,rendererConfig:gi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Qs(n),n===null?null:n.stateNode},findFiberByHostInstance:gi.findFiberByHostInstance||Am,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zl.isDisabled&&zl.supportsFiber)try{bi=zl.inject(wm),We=zl}catch{}}return ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sm,ye.createPortal=function(n,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ba(e))throw Error(i(200));return km(n,e,null,r)},ye.createRoot=function(n,e){if(!Ba(n))throw Error(i(299));var r=!1,o="",d=vd;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onRecoverableError!==void 0&&(d=e.onRecoverableError)),e=Fa(n,1,!1,null,null,r,!1,o,d),n[Ze]=e.current,Yr(n.nodeType===8?n.parentNode:n),new za(e)},ye.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(i(188)):(n=Object.keys(n).join(","),Error(i(268,n)));return n=Qs(e),n=n===null?null:n.stateNode,n},ye.flushSync=function(n){return Ht(n)},ye.hydrate=function(n,e,r){if(!Fl(e))throw Error(i(200));return Nl(null,n,e,!0,r)},ye.hydrateRoot=function(n,e,r){if(!Ba(n))throw Error(i(405));var o=r!=null&&r.hydratedSources||null,d=!1,p="",k=vd;if(r!=null&&(r.unstable_strictMode===!0&&(d=!0),r.identifierPrefix!==void 0&&(p=r.identifierPrefix),r.onRecoverableError!==void 0&&(k=r.onRecoverableError)),e=kd(e,null,n,1,r??null,d,!1,p,k),n[Ze]=e.current,Yr(n),o)for(n=0;n<o.length;n++)r=o[n],d=r._getVersion,d=d(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,d]:e.mutableSourceEagerHydrationData.push(r,d);return new bl(e)},ye.render=function(n,e,r){if(!Fl(e))throw Error(i(200));return Nl(null,n,e,!1,r)},ye.unmountComponentAtNode=function(n){if(!Fl(n))throw Error(i(40));return n._reactRootContainer?(Ht(function(){Nl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ze]=null})}),!0):!1},ye.unstable_batchedUpdates=Pa,ye.unstable_renderSubtreeIntoContainer=function(n,e,r,o){if(!Fl(r))throw Error(i(200));if(n==null||n._reactInternals===void 0)throw Error(i(38));return Nl(n,e,r,!1,o)},ye.version="18.3.1-next-f1338f8080-20240426",ye}var Ld;function _m(){if(Ld)return ja.exports;Ld=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(l){console.error(l)}}return t(),ja.exports=Lm(),ja.exports}var _d;function Rm(){if(_d)return Bl;_d=1;var t=_m();return Bl.createRoot=t.createRoot,Bl.hydrateRoot=t.hydrateRoot,Bl}var Pm=Rm();const Dm=As(Pm),Tm=`---
type: concept
tags: [AI Agent, 记忆系统, L0-L3, OpenClaw, 自进化]
created: 2026-07-04
updated: 2026-07-04
---

# Agent记忆系统

## 一句话定义

AI Agent 的记忆系统是 Agent 存储、检索和利用历史信息的能力架构，决定了 Agent 能否从经验中学习和持续改进。

## 4 层记忆架构（OpenClaw 模型）

- **L0 — 短期记忆**：当前对话上下文，类比人脑的工作记忆
- **L1 — 工作记忆**：当前任务的中间状态、工具调用结果和推理链
- **L2 — 情节记忆（Episodic）**：历史交互中存储的经验教训，可被相似场景自动检索
- **L3 — 语义记忆（Semantic）**：被提升为持久知识的事实、规则、设计约束

## 工作流程

\`\`\`
L2 记忆片段示例：
事件: 用户上次要求分析一个 GitHub 仓库
决定: 使用了 repo-analyzer skill
结果: 成功生成了架构图
教训: 大型仓库需要先用 tree 命令获取结构

→ 下次用户再问"分析一个仓库"
→ Agent 从 L2 记忆中检索到相关经验
→ 自动先执行 tree 命令获取结构
\`\`\`

## 记忆提升

从 L2 提升至 L3 的时机：
- 学习经验适用于多个文件或功能模块
- 任何贡献者（人类或 AI）都应具备的知识
- 防止反复出现的错误
- 重要的架构决策或设计约束

## 相关概念
- [[AI Agent]]
- [[自改进AI Agent]]

## 相关实体
- [[OpenClaw]]
- [[Hermes Agent]]
- [[MemPalace]]
`,Mm=`---
type: concept
tags: [AI Agent, Tool选择, Agent MGMT, 编排器]
created: 2026-07-04
updated: 2026-07-04
---

# Agent工具选择问题

## 一句话定义

当 AI Agent 拥有过多 Tool（工具）时，会出现"选择困难"——Agent 不知道哪个工具最适合当前任务，导致效率下降甚至错误调用。这被称为 Agent MGMT（Agent 工具管理）问题。

## 核心问题

\`\`\`
传统思路：给 Agent 加更多 Tool → 能力更强
实际效果：Tool 超过一定数量 → Agent 选不明白 → 效率反而下降
\`\`\`

## 解决方向

- **工具分层**：将工具按领域和粒度分类，Agent 先选类别再选具体工具
- **编排器模式**：引入专门的 Orchestrator Agent 负责工具选择
- **工具收敛**：合并功能重叠的工具，降低选择空间
- **上下文提示**：在工具描述中明确"何时使用/何时不用"

## 相关概念
- [[AI Agent]]
- [[Loop Engineering]]
`,Om=`---
type: concept
tags: [AI, Agent, 自动化]
created: 2026-07-04
updated: 2026-07-06
related_sources: 2
---

# AI Agent（智能体）

## 一句话定义

AI Agent 是具备自主感知、规划、决策和行动能力的人工智能系统，能够在给定目标后，自主选择和使用工具、执行多步操作来完成复杂任务。

## 核心原理

Agent 的核心循环：

\`\`\`
感知（Perceive）→ 规划（Plan）→ 行动（Act）→ 观察结果（Observe）→ 循环
\`\`\`

一个完整的 AI Agent 通常具备以下能力：

1. **推理与规划**：将复杂目标分解为可执行的子任务序列
2. **工具使用**：调用外部 API、数据库、代码执行器等
3. **记忆管理**：
   - 短时记忆：当前对话/任务的上下文
   - 长时记忆：跨会话持久化的知识和经验
4. **反思与纠错**：检查执行结果，发现错误后自行修正

## 关键架构

### 单 Agent 架构
一个 LLM 驱动的 Agent 独立完成任务规划和执行。例如 [[OpenClaw]]、[[Hermes Agent]]。

### 多 Agent 协作
多个专业化 Agent 分工合作，类似团队协作：
- **编排模式**：一个主 Agent 分配任务给子 Agent
- **对等模式**：多个 Agent 平等对话，协商决策
- **模拟模式**：如 PYTHIA 的 MiroFish 引擎，运行上千个 Agent 模拟群体行为用于预测

### Agent 平台
提供 Agent 开发、管理和运行的基础设施：
- [[Snail AI]] — Java 生态的企业级 Agent 平台
- LangChain、LlamaIndex — Python 生态的 Agent 框架

## 分类体系

根据智能程度和决策方式，AI Agent 可分为三类：

### 1. 反应式 Agent（Reactive）
- 无记忆、无内部世界模型，纯条件反射
- 响应快速、实现简单
- 例子：恒温器（温度>阈值→开关空调）、扫地机器人（撞墙→转向）
- 适用：可预测环境中的即时响应任务

### 2. 深思型 Agent（Deliberative）
- 构建并维护内部世界模型，通过逻辑推理规划行动路径
- 包含知识库、推理引擎、规划器
- 例子：自动驾驶（感知→建图→规划→执行）、UZI-Skill 的 66 位 AI 评委（不同投资哲学独立推理）
- 适用：需要战略思维和复杂决策的场景

### 3. 学习型 Agent（Learning Agent）
- 从交互反馈中持续改进性能
- 使用机器学习（监督/无监督/强化学习）更新决策
- 例子：推荐系统、自进化 Agent（[[Hermes Agent]]）
- 适用：动态环境中的多步问题求解

实际生产环境中的 AI Agent 通常是**混合型**，融合以上三类能力。

## Agent 的关键能力维度

### 工具使用（Tool Use）
Agent 通过调用外部工具扩展能力边界。工具可以是 API、代码执行器、数据库、浏览器等。过多的工具会引发"工具选择困难"（[[Agent工具选择问题]]）。

### Agent 技能体系（Skill System）
将能力拆解为独立 Skills，按需组合。代表：[[Superpowers]]、[[gstack]]。UZI-Skill 是垂直领域的深度技能实例。

### 实时感知（Real-time Awareness）
传统 Agent 对现实世界"盲目"，需借助工具获取实时信息。[[PYTHIA]] 通过聚合 30+ 免费数据源解决这一问题。

### 多模型路由
Agent 不硬编码单一模型提供商，通过 [[AI 网关与模型路由]] 弹性切换多个模型，平衡成本与能力。

## 2025-2026 趋势

- **从单一 Prompt 到 Skill 体系**：能力拆解为独立 Skills 按需组合
- **从大模型到小模型突围**：4B 参数模型在 SWE-bench 达 87%，成本断崖式下降
- **从单 Agent 到多 Agent 协作**：架构师 Agent → 编码 Agent → 测试 Agent 流水线
- **从工具到同事**：Agent 定位从被动工具向主动参与者转变
- **本地 Agent 兴起**：Ollama 驱动的完全本地 Agent（如 PYTHIA），零云端依赖

## 相关概念
- [[AI 网关与模型路由]]
- [[MCP 模型上下文协议]]
- [[RAG 检索增强生成]]
- [[Agent工具选择问题]]
- [[Agent记忆系统]]
- [[自改进AI Agent]]

## 相关实体
- [[OpenClaw]]
- [[Hermes Agent]]
- [[PYTHIA]]
- [[UZI-Skill]]
`,bm=`---
type: concept
tags: [API网关, 模型路由, 负载均衡, 成本优化, Agent基础设施]
created: 2026-07-06
updated: 2026-07-06
related_sources: 1
---

# AI 网关与模型路由

## 一句话定义

AI 网关是位于 AI 应用与多个模型提供商之间的中间层服务，统一管理 API 接入、请求路由、负载均衡和额度分配，使应用无需感知底层模型变更。

## 核心原理

\`\`\`
AI 应用 → AI 网关 → 模型 A（如 OpenAI）
                   → 模型 B（如 Claude）
                   → 模型 C（如 Gemini）
                   → ...（自动 fallback）
\`\`\`

网关层处理：
1. **统一接口**：将不同模型的 API 封装为兼容 OpenAI 格式
2. **自动路由**：根据模型能力、成本、延迟、可用性智能分发
3. **额度管理**：监控各 provider 的免费/付费额度，超限自动切换
4. **故障转移**：模型不可用时无缝切换到备用模型

## 常见开源方案

| 项目 | 特点 |
|------|------|
| **One API** / **New API** | 老牌 API Key 管理与路由，自动 fallback |
| **AIClient2API** | 支持 OpenAI/Gemini/Claude/Grok/千问 等，本地一键部署 |
| **APIPark** | LLM 代理/网关，跨平台额度自动调用 |
| **Higress** | 基于 Istio + Envoy 的云原生 AI 网关，Docker 一键启动 |

## 典型应用场景

### 零成本调用（聚合免费额度）

将 237 个 AI 服务的免费额度聚合管理：
- Google AI Studio：Gemini 免费 1500 次/天
- Groq：LPU 推理，极速免费
- Cerebras：每天 100 万 token
- NVIDIA NIM：120+ 开源模型一年免费
- OpenRouter：30+ 免费模型
- xAI Grok：$25 初始 + $150/月
- SiliconFlow：开源模型推理平台

### 企业级多模型管理

- 按任务分配模型（简单任务用小模型省钱，复杂任务用大模型）
- 灰度切换模型版本
- 用量监控与成本分摊

## 与 AI Agent 的关系

AI 网关是 Agent 基础设施的关键组件。Agent 通过网关访问多个模型，而不是硬编码单一 provider，从而获得：
- **弹性**：模型故障自动切换
- **经济性**：优先使用免费/低成本模型
- **兼容性**：新模型出现时无缝接入

## 相关概念
- [[AI Agent]]
- [[MCP 模型上下文协议]]

## 相关实体
- [[OpenClaw]]（内置多模型路由能力）

## 延展阅读
- [One API GitHub](https://github.com/songquanpeng/one-api)
- [Higress 官网](https://higress.ai)
`,Fm=`---
type: concept
tags: [AI编程, 自动化, 开发工具]
created: 2026-07-04
updated: 2026-07-04
related_sources: 1
---

# AI 编程（AI Programming / AI Coding）

## 一句话定义

AI 编程指使用大语言模型（LLM）辅助或自动完成软件开发的各个环节，包括代码生成、代码审查、测试编写、调试修复和文档生成等。

## 核心原理

AI 编程工具通常基于以下能力：

1. **代码生成**：根据自然语言描述生成代码片段或完整函数
2. **代码补全**：在开发者输入时实时预测和补全代码
3. **测试生成**：自动为已有代码生成单元测试
4. **Bug 修复**：分析错误日志和代码，自动修复缺陷
5. **代码审查**：检查代码质量、安全漏洞和最佳实践合规性
6. **文档生成**：根据代码自动生成注释和 API 文档

## 发展阶段

### 第一阶段：辅助补全
GitHub Copilot、Cursor 等工具提供行级/块级代码补全，人类仍是代码的主要作者。

### 第二阶段：自主生成
AI 根据需求描述独立生成完整功能模块（如 Vibe Coding），但仍需人工验证。

### 第三阶段：自验证
AI 不仅生成代码，还**自主验证代码的正确性**。代表：[[OpenSquilla]] 的红绿回归证据链、[[红绿回归测试]]。

## 代表工具

- GitHub Copilot
- Cursor
- Claude Code
- [[OpenSquilla]]

## 相关概念
- [[测试驱动开发 TDD]]
- [[红绿回归测试]]
- [[AI 自验证]]
`,Nm=`---
type: concept
tags: [上下文工程, AI编程, Context Rot, Agent, GSD]
created: 2026-07-04
updated: 2026-07-04
---

# 上下文工程 (Context Engineering)

## 一句话定义

上下文工程是指系统化管理 AI Agent 在大型项目中所需的代码上下文，解决 Context Rot（上下文腐烂）——随着项目规模增长 AI Agent 对代码库的理解逐渐退化的核心问题。

## Context Rot 问题

大型项目中，AI Agent 面临的核心挑战不是模型能力不足，而是有限的上下文窗口无法装载完整的项目理解。随着代码库增长：
- 相关代码超出上下文窗口 → 信息丢失
- 历史决策和约束被遗忘 → 重复踩坑
- 跨模块依赖关系断裂 → 修改不完整

## 解决策略

- **结构化上下文分段**：将项目知识按模块/层级组织
- **按需索引和检索**：类似 RAG，动态注入相关上下文
- **固定规则层**：CLAUDE.md / 项目记忆确保核心约束不被稀释
- **分层上下文**：全局规则 → 模块规则 → 文件规则

## 代表方案

- [[GSD]]（Get Shit Done）：面向大型项目的上下文工程系统
- CLAUDE.md：项目级行为约束和知识基线

## 相关概念
- [[AI编程]]
- [[RAG 检索增强生成]]
`,zm=`---
type: concept
tags: [开发范式, OpenSpec, Superpowers, AI编程, 规范驱动]
created: 2026-07-04
updated: 2026-07-04
---

# 统一开发范式 (OpenSpec × Superpowers)

## 一句话定义

融合 OpenSpec（规范驱动工件管理）和 Superpowers（纪律驱动执行流程）的统一开发范式。核心理念：**规范定义目标，纪律保证质量**。

## 五阶段流程

\`\`\`
PHASE 0 ──→ PHASE 1 ──→ PHASE 2 ──→ PHASE 3 ──→ PHASE 4
Explore     Specify     Execute     Verify      Archive
\`\`\`

- **Phase 0 — Explore（探索）**：理解需求、收集上下文、识别约束条件
- **Phase 1 — Specify（规范）**：定义清晰的工件（spec），明确交付目标和验收标准
- **Phase 2 — Execute（执行）**：严格按照规范实现，遵守纪律约束
- **Phase 3 — Verify（验证）**：对照规范验证产出物，确保质量
- **Phase 4 — Archive（归档）**：归档经验教训，将重要发现提升至项目记忆

## 核心原则

1. **规范驱动**：OpenSpec 管理产出物（specs, proposals, tasks），确保目标清晰可追溯
2. **纪律驱动**：Superpowers 约束执行行为，确保流程不走样
3. **持续改进**：每次执行后的经验教训被记录并提升为共享知识

## 适用场景

- 新功能开发
- Bug 修复
- 重构任务
- 技术方案设计

## 相关概念
- [[自改进AI Agent]]
- [[红绿回归测试]]
- [[AI编程]]
`,Bm=`---
type: concept
tags: [FDE, Forward Deployed Engineer, AI落地, PMF, Agent]
created: 2026-07-04
updated: 2026-07-04
---

# FDE (Forward Deployed Engineer)

## 一句话定义

Forward Deployed Engineer（前方部署工程师）是 AI 时代的 PMF（Product-Market Fit）范式：工程师不再只坐办公室写代码，而是深入客户现场，将 AI 技术与实际业务场景紧密结合，快速迭代落地。OpenAI、Anthropic、Google 三巨头均押注此模式。

## 核心原理

传统 SaaS：产品团队 → 开发 → 发布 → 客户自行使用
FDE 模式：工程师 → 驻扎客户现场 → 理解真实需求 → 现场定制方案 → 快速迭代

## 为什么 AI 时代 FDE 更关键

- AI 产品不是开箱即用的工具，需要与业务深度绑定
- 客户不知道自己需要什么 AI 功能，FDE 负责发现和定义
- AI 落地的瓶颈不是技术，而是理解业务场景和建立信任

## 相关概念
- [[AI Agent]]
`,Gm=`---
type: concept
tags: [Loop Engineering, Prompt, Agent, 自动化, AI编程]
created: 2026-07-04
updated: 2026-07-04
---

# Loop Engineering

## 一句话定义

Loop Engineering 是指设计 AI Agent 的自主执行循环（Loop）而非手写单次 Prompt 的工程方法论。核心理念："别再手动写 Prompt 了，去写 Loop"。

## 核心原理

\`\`\`
传统 Prompt 工程：用户输入 → 一次 Prompt → AI 输出（一次性的、线性的）
Loop Engineering：用户输入 → Agent Loop（思考→行动→观察→思考→...）→ 最终输出（多轮自纠正的）
\`\`\`

## Agent Loop 要素

- **触发条件**：什么情况下启动循环
- **终止条件**：什么情况下结束循环（任务完成/超时/达到最大轮次）
- **工具选择**：每轮可用的工具集
- **验证步骤**：如何判断当前结果是否符合预期
- **错误恢复**：出错后的回退策略

## 相关概念
- [[AI Agent]]
- [[AI编程]]
`,jm=`---
type: concept
tags: [AI, 协议, Agent, 工具集成, 标准化]
created: 2026-07-04
updated: 2026-07-06
related_sources: 2
---

# MCP 模型上下文协议（Model Context Protocol）

## 一句话定义

MCP（Model Context Protocol）是一个开源标准协议，用于连接 AI 应用与外部系统，被比作 **"AI 应用的 USB-C 接口"**——像 USB-C 标准化电子设备连接一样，MCP 标准化 AI 应用与工具/数据源之间的通信。

> 官方定义：*MCP is an open-source standard for connecting AI applications to external systems.*

## 核心架构

MCP 采用三层参与者架构：

\`\`\`
MCP Host（AI 应用）
    ↓  创建多个 MCP Client
MCP Client 1 ←→ MCP Server A（本地，如文件系统）
MCP Client 2 ←→ MCP Server B（远程，如 Sentry）
\`\`\`

### 三大参与者

1. **MCP Host** — AI 应用（Claude Desktop、VS Code Copilot、Cursor 等），协调和管理多个 MCP Client
2. **MCP Client** — Host 内部组件，每个 Server 对应一个 Client，维护专用连接
3. **MCP Server** — 提供上下文和工具的程序，可运行在本地（STDIO）或远程（Streamable HTTP）

### 传输模式

| 模式 | 说明 | 适用场景 |
|------|------|---------|
| STDIO | Server 作为子进程运行，通过标准输入输出通信 | 本地 MCP Server，一对一 |
| Streamable HTTP | Server 作为 HTTP 服务运行 | 远程 MCP Server，多对多 |

协议基于 **JSON-RPC**。

## 能做什么

官方文档列举的实际场景：

- Agent 访问 Google Calendar 和 Notion，成为个性化 AI 助手
- Claude Code 根据 Figma 设计稿生成完整 Web 应用
- 企业聊天机器人连接多个组织内数据库，用户用自然语言分析数据
- AI 模型控制 Blender 进行 3D 设计，并通过 3D 打印机输出

## 生态支持

MCP 已被广泛采用：

- **AI 助手**：Claude Desktop、ChatGPT
- **开发工具**：VS Code (GitHub Copilot)、Cursor、MCPJam
- **社区 Servers**：Puppeteer、GitHub、Notion、Slack、Filesystem、Sentry 等

## 核心价值

- **对开发者**：减少开发时间和复杂度，一次构建到处集成
- **对 AI 应用**：获得数据源和工具的生态，增强能力
- **对终端用户**：获得更强大的 AI 助手，能访问个人数据并代表用户行动

## 完整技术栈

MCP 包含以下项目：
1. **MCP Specification**：协议规范，定义客户端和服务器的实现要求
2. **MCP SDKs**：多种编程语言的 SDK
3. **MCP Inspector**：开发调试工具
4. **MCP Reference Servers**：官方参考实现

> MCP 仅关注上下文交换的协议层面，不规定 AI 应用如何使用 LLM 或管理上下文。

## 相关概念
- [[AI Agent]]
- [[AI 网关与模型路由]]（同为 Agent 基础设施层的标准化协议）

## 相关实体
- [[Firecrawl]]（提供 MCP Server）
`,Hm=`---
type: concept
tags: [训练方法, LLM, 微调]
created: 2026-07-04
updated: 2026-07-04
related_sources: 1
---

# 模型微调（Fine-tuning）

## 一句话定义

模型微调（Fine-tuning）是在预训练大模型的基础上，使用特定领域或任务的数据对模型参数进行进一步训练，使其适配下游任务的技术。

## 核心原理

预训练的大语言模型具备通用语言能力，但缺乏特定领域的知识或行为模式。微调通过在目标任务数据上继续训练，调整模型参数以适配：

- **领域知识**：医学、法律、金融等垂直领域
- **任务格式**：对话、摘要、代码生成等特定格式
- **行为对齐**：遵循指令、拒绝有害请求等

## 关键技术

### 全量微调（Full Fine-tuning）
更新模型的所有参数，效果最好但代价最高。

### 参数高效微调（PEFT）
只更新少量参数，大幅降低训练成本：
- **LoRA**（Low-Rank Adaptation）：在原始权重旁添加低秩矩阵
- **QLoRA**：LoRA + 4-bit 量化，进一步降低显存需求
- **Adapter**：在 Transformer 层间插入小型可训练模块

### 指令微调（Instruction Tuning）
使用（指令-回答）对训练，让模型学会遵循人类指令。

## 变体与演进

- **RLHF**（基于人类反馈的强化学习）：先训练奖励模型，再用 PPO 优化
- **DPO**（直接偏好优化）：省去奖励模型，直接从偏好对中优化
- **SFT**（监督微调）：最简单直接的方式，使用标注数据训练

## 关键工具
- [[Unsloth]] — 消费级 GPU 高效微调框架

## 相关概念
- [[混合专家模型 MoE]]
- [[CUDA 优化]]
- [[RLHF]]
- [[LoRA]]
`,Um=`---
type: concept
tags: [模型融合, LLM, 知识融合, 模型合并]
created: 2026-07-05
updated: 2026-07-05
related_sources: 3
---

# 模型融合（Model Fusion / Model Merging）

## 一句话定义
模型融合是将多个大语言模型（LLM）通过特定算法合并为一个统一模型的技术，旨在整合不同模型的知识和能力，无需从零训练。

## 核心原理
模型融合的核心思想是：**经过独立训练的模型在参数空间中存在互补性**。通过恰当的算法，可以将各自的知识蒸馏或合并到单一模型中。与模型集成（Ensemble）不同，融合后的模型不增加推理开销（仍为单模型）。

## 两条技术路线

### 路线一：参数空间合并（Model Merging）
直接在权重层面合并多个模型，通常**无需额外训练**，计算成本极低。

| 方法 | 原理 | 特点 |
|------|------|------|
| **SLERP** | 球面线性插值，在单位球面上平滑过渡两个模型的权重向量 | 仅支持2个模型，最流行 |
| **TIES-Merging** | 三步：Trim（保留 top-k% 显著参数）→ Elect Sign（统一符号方向）→ Disjoint Merge（排除零值后取平均） | 支持多模型，解决参数冲突 |
| **DARE** | 随机丢弃大部分 delta 参数后重缩放合并 | 减少冗余，适合稀疏融合 |
| **SCE** | Select（选方差最大的 top-k%）→ Calculate（算合并系数）→ Erase（过滤少数方向） | FuseAI 核心算法，矩阵级别的精细融合 |

### 路线二：知识蒸馏融合（Knowledge Fusion）
通过蒸馏训练将多个源模型的知识迁移到目标模型，需要**轻量级训练**。

| 方法 | 原理 | 特点 |
|------|------|------|
| **ULD（Universal Logit Distillation）** | 蒸馏源模型的 logits 输出到目标模型 | InfiFusion 基础 |
| **InfiFusion 增强版** | ULD + Top-K selection + Logits Standardization | 支持融合 4 个异构模型 |
| **FuseChat 双阶段** | SFT 对齐分布 → DPO 学习偏好 | 聊天模型融合 |
| **FuseLLM** | 提取异构模型知识 → 轻量持续训练 | 支持不同架构模型 |

## 核心挑战
1. **异构架构对齐**：不同模型（如 Llama 和 MPT）的 tokenizer 和层结构不同，需统计对齐方法
2. **参数冲突**：不同模型对同一参数的调整方向相反（正 vs 负），需统一的符号裁决
3. **信息损失**：合并过程中会丢失一部分独有知识，需权衡取舍
4. **评估困难**：缺乏标准化的融合质量评估基准

## 技术图谱

\`\`\`
模型融合
├── 参数空间合并（无需训练）
│   ├── SLERP — 球面线性插值（2模型）
│   ├── TIES-Merging — Trim+Elect+Disjoint（多模型）
│   ├── DARE — 随机丢弃+重缩放
│   └── SCE — Select+Calculate+Erase
│
└── 知识蒸馏融合（轻量训练）
    ├── InfiFusion — ULD + Top-K + Logits Standardization
    ├── FuseLLM — 持续蒸馏异构模型
    ├── FuseChat — SFT + DPO 两阶段聊天融合
    └── FuseO1 — Long-Long / Long-Short 推理融合
\`\`\`

## 应用场景
- **低成本创建 SOTA 模型**：Open LLM Leaderboard 榜首多来自模型融合
- **领域能力融合**：如 Base 模型 + 代码模型 + 数学模型的融合
- **推理能力提升**：Long-CoT 与 Short-CoT 模型的推理策略融合
- **模型压缩**：将大模型能力蒸馏到轻量模型（如 70B → 8B）

## 相关实体
- [[FuseAI]]
- [[InfiFusion]]
- [[mergekit]]

## 相关概念
- [[模型微调]]
- [[AI 编程]]

## 延展阅读
- [Merge LLMs with mergekit](https://huggingface.co/blog/mlabonne/merge-models) — HuggingFace 官方教程
- [Model Merging Paper Collection](https://huggingface.co/collections/osanseviero/model-merging-65097893623330a3a51ead66)
`,Wm=`---
type: concept
tags: [模型架构, LLM, 稀疏计算]
created: 2026-07-04
updated: 2026-07-04
related_sources: 1
---

# 混合专家模型（Mixture of Experts, MoE）

## 一句话定义

MoE（混合专家模型）是一种神经网络架构，将模型的不同部分（"专家"）专门化处理不同类型的输入，每次推理时只激活少量专家，从而在不显著增加计算量的前提下大幅扩大模型容量。

## 核心原理

\`\`\`
输入 Token → 路由网络（Gating Network）→ 选择 Top-K 专家 → 专家处理 → 加权合并
\`\`\`

- **专家（Expert）**：独立的前馈网络子模块，每个专家擅长处理特定类型的信息
- **路由网络（Router/Gate）**：决定每个输入 Token 应该由哪些专家处理
- **稀疏激活**：每次只激活少数专家（如 8 个专家中的 2 个），总计算量远低于同等参数量的密集模型

## 变体与演进

- **Sparse MoE**：经典设计，每个 Token 路由到 Top-K 个专家
- **DeepSeek MoE**：引入共享专家 + 细粒度专家分段设计
- **Mixtral**：Mistral AI 的 MoE 开源模型，8×7B 参数，每次激活 2 个专家

## 优势与挑战

**优势**：
- 同计算量下模型容量更大
- 不同专家可专门化不同领域

**挑战**：
- 训练时负载不均衡（某些专家被过度使用）
- 推理时显存占用高（所有专家都需加载）
- [[Unsloth]] 针对 MoE 训练做了专门优化（最高 12 倍加速）

## 相关概念
- [[模型微调]]
- [[CUDA 优化]]
`,Vm=`---
type: concept
tags: [OKF, Open Knowledge Format, Google, AI Agent, 知识格式, 语义搜索]
created: 2026-07-04
updated: 2026-07-04
---

# OKF 开放知识格式

## 一句话定义

OKF（Open Knowledge Format）是 Google 提出的 AI Agent 可消费知识标准，旨在让知识内容以 AI Agent 能直接理解和处理的结构化格式发布，而非传统的人类阅读优化的 HTML/PDF。

## 核心原理

\`\`\`
传统：知识 → HTML/PDF → 人类阅读
OKF：知识 → 结构化语义格式 → AI Agent 直接消费
\`\`\`

OKF 试图解决的核心问题：网页上的知识虽然丰富，但被埋在 HTML 标签、广告、导航栏中，AI Agent 难以高效提取。OKF 提供一套标准让发布者主动为 AI 提供结构化知识。

## 相关概念
- [[AI Agent]]
- [[本体论]]
- [[RAG 检索增强生成]]
`,qm=`---
type: concept
tags: [本体论, Ontology, 语义层, 知识建模, 语义网, OWL]
created: 2026-07-04
updated: 2026-07-04
---

# 本体论 (Ontology)

## 一句话定义

本体论（Ontology）是知识工程中用于形式化描述某一领域内概念及其关系的框架。与语义层（Semantic Layer）不同，本体论侧重概念的哲学定义和形式逻辑，语义层侧重业务指标的映射和查询。

## 核心原理

本体论在 AI 时代重新变得重要，因为它解决了"AI 如何理解世界"的基础问题：
- 定义领域内的实体（类）及其属性
- 定义实体间的关系（对象属性和数据属性）
- 定义推理规则（公理和约束）

## 本体论 vs 语义层

| 维度 | 本体论 (Ontology) | 语义层 (Semantic Layer) |
|---|---|---|
| 关注点 | 概念定义和逻辑关系 | 业务指标和数据映射 |
| 表示语言 | OWL, RDF | SQL, YAML, 元数据配置 |
| 代表工具 | Protégé | Palantir Foundry |
| 经典教材 | Pizza Ontology (斯坦福) | — |

## 在 AI Agent 中的应用

- **知识图谱构建**：本体论为 Agent 提供领域概念的结构化定义
- **Schema Linking**：AutoLink 等工具将数据库结构映射到本体概念
- **语义搜索**：基于本体的查询扩展和推理

## 相关概念
- [[AI Agent]]
- [[RAG 检索增强生成]]

## 相关实体
- [[AutoLink]]
`,Qm=`---
type: concept
tags: [Prompt Caching, Claude Code, 性能优化, Agent工程, 成本控制]
created: 2026-07-04
updated: 2026-07-04
---

# Prompt Caching

## 一句话定义

Prompt Caching 是 AI Agent 工程中的关键性能优化技术：通过缓存系统提示词（System Prompt）和常用上下文来避免重复发送，大幅降低延迟和 Token 消耗。

## 核心原理

AI Agent 每次调用都需携带完整的系统提示词（可达数万 Token）。Claude Code 的系统提示词定义了 Agent 的行为模式、安全策略和工具使用规范。缓存这些重复内容可节省 50%-90% 的输入 Token。

## 重要性

来自 Claude Code 开发团队的经验总结："Prompt caching is everything"——提示词缓存决定了 Agent 的响应速度和经济可行性。

## 关键策略

- 系统提示词缓存（最稳定，命中率最高）
- 工具定义缓存
- 项目记忆文件（CLAUDE.md）缓存
- 长对话历史的增量缓存

## 相关概念
- [[AI编程]]
- [[AI Agent]]

## 相关实体
- [[Claude Code]]
`,Jm=`---
type: concept
tags: [AI, 检索, 知识库, LLM]
created: 2026-07-04
updated: 2026-07-05
related_sources: 2
---

# RAG 检索增强生成（Retrieval-Augmented Generation）

## 一句话定义

RAG（检索增强生成）是一种将信息检索系统与大型语言模型结合的技术架构——在 LLM 生成回答之前，先从外部知识库检索相关文档片段，将其作为上下文注入提示词，从而减少幻觉、提升事实准确性。

## 核心原理

\`\`\`
用户提问 → Embedding 模型向量化 → 向量数据库检索 Top-K 相关片段
         → 将检索结果拼入 Prompt → LLM 生成答案
\`\`\`

### 关键组件

1. **文档处理**：将知识库文档切分为语义块（Chunking）
2. **向量化（Embedding）**：将文本块转换为向量表示
3. **向量检索**：在向量空间中找到与查询最相似的文档块
4. **上下文增强**：将检索结果作为上下文注入 LLM 的 Prompt
5. **答案生成**：LLM 基于检索到的上下文生成回答

## 变体与演进

- **Naive RAG**：最基础的"检索 → 拼接 → 生成"
- **Advanced RAG**：引入查询重写、重排序（Re-ranking）、上下文压缩
- **Graph RAG**：结合知识图谱，增强实体关系推理
- **Agentic RAG**：由 AI Agent 自主决定检索策略和轮次

### Agentic RAG：最重要的范式转变

2025-2026 年间，RAG 经历了一次根本性的角色转变——从**独立系统**降级为 **Agent 架构下的一个组件**。这不是 RAG 的衰落，而是其成熟化的标志：

- **之前**：RAG 是整个 AI 应用的默认核心架构
- **现在**：RAG 是 Agent 工具箱中的一项能力，与代码解释器、API 调用、网页搜索并列
- **Agent 的角色**：作为"大脑"，自主决定何时检索、检索几次、融合哪些结果
- **为什么必须降级**：单一 RAG 无法应对需要多工具协同的复杂任务

详细内容见 [[Agentic RAG：RAG 从独立系统到 Agent 组件]]

## 关键工具
- [[Milvus]] — 高性能向量数据库
- Elasticsearch — 全文检索 + 向量混合搜索
- PgVector — PostgreSQL 向量扩展

## RAG 评估

RAG 系统需要从检索质量、生成质量、端到端系统三个维度进行评估。主流框架包括 [[RAG评估体系与方法论|RAGAS（RAG 专用）和 DeepEval（通用 LLM 评估）]]，核心方法是 LLM-as-a-Judge。

## 相关概念
- [[AI Agent]]
- [[向量数据库]]
- [[模型微调]]
`,$m=`---
type: concept
tags: [AI编程, 测试, 自动化, 质量保证]
created: 2026-07-04
updated: 2026-07-04
related_sources: 1
---

# 红绿回归测试（Red-Green-Regression Pipeline）

## 一句话定义

红绿回归测试是 [[OpenSquilla]] 引入的 AI 代码验证管道：AI 先写预期失败的测试（红），再修改代码使测试通过（绿），最后运行全部已有测试确保无回归（回归），三道关全过才交付代码。

## 核心原理

\`\`\`
需求输入 → [红灯] AI写预期失败测试 → [绿灯] AI改代码通过测试 → [回归] 运行全部旧测试
                ↓ 失败                                   ↓ 失败                  ↓ 失败
           自动分析 → 重试                           自动分析 → 重试         自动分析 → 重试
                                                                                    ↓ 通过
                                                                               ✅ 交付代码
\`\`\`

### 三道关卡

1. **红灯（Red）**：AI 根据需求规格生成单元测试，这些测试在实现代码不存在时必然失败，验证测试本身是正确的（测到了该测的东西）
2. **绿灯（Green）**：AI 修改实现代码使新测试通过，证明代码满足了需求
3. **回归（Regression）**：运行全部已有测试套件，确保新代码没有破坏任何现有功能

### 自动修复闭环

任一阶段失败时，AI 自动分析失败原因 → 修改代码 → 重新运行测试，循环直到全部通过或达到最大重试次数。

## 与传统 TDD 的区别

传统的 [[测试驱动开发 TDD]] 由**人类开发者**按红-绿-重构的节奏编写代码。红绿回归测试将其**自动化**——AI 成为执行 TDD 循环的主体，人类从"写代码的人"变成"审代码的人"。

## 关键指标

- 开发成本降低：60%~80%（据 OpenSquilla 0.4.0 数据）

## 相关概念
- [[测试驱动开发 TDD]]
- [[AI 自验证]]
- [[AI 编程]]
`,Km=`---
type: concept
tags: [AI Agent, 自我修复, 自动化, 经验学习]
created: 2026-07-04
updated: 2026-07-04
---

# 自改进AI Agent

## 一句话定义

一种 AI Agent 设计模式：将学习心得和错误记录到 Markdown 文件中，编码代理自动处理这些记录进行持续改进，重要经验被提升至项目记忆库。

## 核心机制

1. **错误记录**：当出现错误或需要修正时，自动记录到 \`workspace/.learning/\` 目录
2. **自动修复**：AI Agent 读取学习记录，自动修改代码或配置进行修复
3. **经验提升**：跨文件/功能的学习经验，或任何贡献者（人类或 AI）都应知道的知识，被提升至项目记忆

## 提升时机

- 学习经验适用于多个文件或功能模块
- 任何贡献者（人类或 AI）都应具备的知识
- 防止反复出现的错误
- 重要的架构决策或设计约束

## 工作流程

1. 错误发生 → 自动记录错误上下文
2. AI 分析记录 → 生成修复方案
3. 执行修复 → 验证通过
4. 评估经验重要性 → 决定是否提升为项目记忆

## 相关概念
- [[统一开发范式]]
- [[AI Agent]]
- [[红绿回归测试]]
`,Ym=`---
type: concept
tags: [AI编程, SDD, 规范驱动, OpenSpec, 开发范式]
created: 2026-07-04
updated: 2026-07-04
---

# Spec驱动开发 (SDD)

## 一句话定义

Spec-Driven Development（SDD）是一种 AI 时代的软件开发范式：开发者编写规格说明书（Spec），AI 根据 Spec 自动完成代码实现、测试生成和验证，人类从"写代码"转变为"审 Spec"。

## 核心原理

\`\`\`
传统开发：需求 → 人写代码 → 人写测试 → 人验证
SDD 开发：需求 → 人写 Spec → AI 写代码 → AI 写测试 → AI 验证 → 人审 Spec
\`\`\`

关键转变：人类审查的不再是代码，而是规格说明书。Spec 就是"给 AI 的需求文档"。

## 实战数据

得物技术团队半年实战数据：
- 编码效率提升 **10 倍**
- 交付效率仅提升 **13%**（瓶颈在需求理解和验证环节）
- 七个深坑：Spec 写不清楚、过度 Spec、AI 理解偏差、验证覆盖率不足等

## 代表框架

- **OpenSpec**：轻量级 SDD，Spec → Execute → Verify → Archive
- **BMAD**：重量级 SDD 平台，BMC 分析 → 架构 → 数据模型 → 实现

## 相关概念
- [[AI编程]]
- [[统一开发范式]]
- [[测试驱动开发 TDD]]

## 相关实体
- [[OpenSpec]]
- [[BMAD]]
`,Xm=`---
type: concept
tags: [测试, 软件工程, AI编程]
created: 2026-07-04
updated: 2026-07-04
related_sources: 1
---

# 测试驱动开发（Test-Driven Development, TDD）

## 一句话定义

TDD（测试驱动开发）是一种软件开发方法论，要求先编写测试用例，再编写使其通过的最小实现代码，最后进行重构优化——简称"红-绿-重构"循环。

## 核心循环

\`\`\`
[红] 写一个会失败的测试 → [绿] 写最少代码使测试通过 → [重构] 优化代码结构 → 重复
\`\`\`

在 AI 编程语境下，[[OpenSquilla]] 将此循环自动化，扩展为 [[红绿回归测试]]，加入了回归验证和自动修复闭环。

## 相关概念
- [[红绿回归测试]]
- [[AI 编程]]
- [[AI 自验证]]
`,Zm=`---
type: entity
tags: [Agent框架, 状态机, Apache, Python, LangChain替代]
created: 2026-07-04
updated: 2026-07-04
---

# Apache Burr

## 概述

Apache Burr 是一个基于状态机（State Machine）驱动的 AI Agent 框架，定位为 LangChain 的替代方案。通过显式的状态转换图来管理 Agent 的执行流程，提供更高的可预测性和可调试性。

## 核心信息
- **全称**：Apache Burr
- **类型**：AI Agent 框架
- **许可**：Apache 2.0
- **技术栈**：Python
- **核心机制**：状态机驱动

## 设计理念

\`\`\`
LangChain：链式调用 → 隐式状态 → 难以调试
Apache Burr：状态机图 → 显式状态转换 → 可追踪、可回放
\`\`\`

## 核心特性

- **显式状态图**：Agent 行为定义为有限状态机
- **可回放**：每个状态转换被记录，可重放调试
- **类型安全**：通过状态定义确保类型正确性
- **可观测**：内建状态追踪和可视化

## 相关概念
- [[AI Agent]]
`,nh=`---
type: entity
tags: [Text-to-SQL, Schema Linking, 开源, AI, NL2SQL]
created: 2026-07-04
updated: 2026-07-04
source_url: https://github.com/wzy416/AutoLink
---

# AutoLink

## 概述

AutoLink 是一个面向大数据场景的语义 Schema Linking 开源工具，通过将原始数据库结构转换为结构化文档并进行向量嵌入，实现自然语言到数据库 Schema 的智能关联。论文发布于 arXiv（2511.17190）。

## 核心信息
- **全称**：AutoLink
- **类型**：Text-to-SQL / Schema Linking 工具
- **技术栈**：Python
- **论文**：[AutoLink: Schema Linking for Text-to-SQL](https://arxiv.org/abs/2511.17190)
- **博客**：[CSDN 介绍](https://blog.csdn.net/c9Yv2cf9I06K2A9E/article/details/156956625)

## 核心流程

\`\`\`
原始数据库结构 → generate_docs.py → 结构化文档 → embedding_docs.py → 向量嵌入 → retrieve_topk_schema.py → 语义检索
\`\`\`

1. **generate_docs.py**：将数据库 DDL/元数据转换为结构化 Markdown 文档
2. **embedding_docs.py**：对结构化文档进行向量嵌入
3. **add_id.py**：召回结果增强，关联原始 Schema ID
4. **retrieve_topk_schema.py**：基于语义相似度检索 Top-K 相关 Schema

## 应用场景

- NL2SQL 的 Schema 关联
- 大规模数据库的智能查询
- 数据仓库元数据管理

## 相关概念
- [[RAG 检索增强生成]]
- [[AI Agent]]

## 延展阅读
- [AutoLink GitHub](https://github.com/wzy416/AutoLink)
- [AutoLink 论文](https://arxiv.org/abs/2511.17190)
`,eh=`---
type: entity
tags: [AI编程, SDD, 规格驱动, BMAD, OpenSpec, 工作流]
created: 2026-07-04
updated: 2026-07-04
---

# BMAD

## 概述

BMAD 是另一个规格驱动开发（SDD）框架，与 OpenSpec 形成竞争/互补关系。如果说 OpenSpec 是"特种兵"（灵活、轻量），BMAD 就是"航母"（全面、重量级）。

## 核心信息
- **全称**：BMAD（Build-Measure-Analyze-Develop）
- **类型**：规格驱动开发框架
- **定位**：重量级 SDD 平台

## 与 OpenSpec 对比

| 维度 | BMAD | OpenSpec |
|---|---|---|
| 定位 | 航母级全面平台 | 特种兵式轻量工具 |
| 学习曲线 | 陡峭 | 平缓 |
| 集成度 | 高度集成，一站式 | 模块化，按需组合 |
| 适用场景 | 大型企业级项目 | 灵活的个人/团队项目 |
| 工作流 | BMC 分析 → 架构 → 数据模型 → 实现 | Spec → Execute → Verify |

## 相关概念
- [[AI编程]]
- [[统一开发范式]]

## 相关实体
- [[OpenSpec]]
`,th=`---
type: entity
tags: [AI Agent, 飞书, 微信, Claude Code, 编程助手, cc-connect]
created: 2026-07-04
updated: 2026-07-04
---

# CC-Connect

## 概述

CC-Connect 是一个桥接工具，让用户可以在飞书、微信等即时通讯应用中直接调用 Claude Code 等 AI Agent 进行编程，将 AI 编程能力融入日常沟通协作场景。

## 核心信息
- **全称**：CC-Connect
- **类型**：AI Agent 通讯桥接工具
- **支持平台**：飞书、微信等
- **对接后端**：Claude Code / OpenClaw 等

## 适用场景

- 在飞书群聊中 @Agent 执行代码审查
- 在微信中发送代码片段让 Agent 分析
- 非技术用户通过聊天界面使用 AI 编程能力

## 相关实体
- [[Claude Code]]
- [[OpenClaw]]
- [[cc-switch]]
`,rh=`---
type: entity
tags: [AI助手, 桌面工具, Claude Code, OpenClaw, Hermes, Rust, Tauri, 跨平台]
created: 2026-07-04
updated: 2026-07-04
---

# cc-switch

## 概述

cc-switch 是一个跨平台 AI 助手桌面工具，104k Star。基于 Rust + Tauri 构建，支持接入 Claude Code、OpenClaw、Hermes 等多种 AI Agent 后端，提供统一的桌面交互入口。

## 核心信息
- **全称**：cc-switch
- **类型**：AI 编程桌面工具
- **Star**：104k+
- **技术栈**：Rust + Tauri

## 核心特性

- 跨平台（Windows / macOS / Linux）
- 统一接入多种 AI Agent 后端
- 桌面原生体验，轻量高性能

## 相关实体
- [[Claude Code]]
- [[OpenClaw]]
- [[Hermes Agent]]
`,ih=`---
type: entity
tags: [AI编程, CLI, Agent, Anthropic, 工具]
created: 2026-07-04
updated: 2026-07-07
---

# Claude Code

## 概述

Claude Code 是 Anthropic 推出的命令行 AI 编程工具，采用多 Agent 分层架构，通过系统提示词定义行为模式，支持 subAgent 委派、并行工具调用和项目级记忆管理。

## 核心信息
- **全称**：Claude Code (CLI)
- **类型**：AI 编程 CLI 工具
- **开发方**：Anthropic
- **技术架构**：多 Agent 分层架构

## 技术架构

### 系统角色设置
- 在每次交互式会话初始化时构建系统提示词
- 确立身份为软件工程 CLI 工具
- 设定简洁、直接的交互风格
- 建立防御性安全策略边界

### 核心特性
- **SubAgent 机制**：支持将任务委派给子 Agent 并行执行
- **工具调用引擎**：文件读写、代码搜索、Bash 执行等
- **TodoWrite/Read**：任务分解与追踪
- **项目记忆**：CLAUDE.md 定义项目级规则和上下文

## 相关摘要
- [[AI编程Agent框架对比分析]]

## 相关概念
- [[AI编程]]
- [[AI Agent]]
- [[MCP 模型上下文协议]]

## 隐私与遥测配置

Claude Code 会后台上报遥测、错误和反馈调查数据。以下环境变量可关闭全部后台上报，
不影响正常功能：

\`\`\`json
// ~/.claude/settings.json 或 ~/.config/claude-code/settings.json
{
  "env": {
    // 🚫 总开关：一条顶后面所有（更新检测、反馈、崩溃上报、遥测全关）
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1",

    // 🔕 静默运行
    "DISABLE_INSTALLATION_CHECKS": "1",           // 启动不检查环境、不弹警告
    "CLAUDE_CODE_DISABLE_FEEDBACK_SURVEY": "1",   // 不弹满意度问卷

    // 📊 遥测彻底切断
    "CLAUDE_CODE_ENABLE_TELEMETRY": "0",          // 关闭基础遥测
    "CLAUDE_CODE_ENHANCED_TELEMETRY_BETA": "0",   // 关闭 Beta 增强遥测
    "CLAUDE_CODE_BYOC_ENABLE_DATADOG": "0",       // 关闭 Datadog 第三方日志
    "CLAUDE_CODE_PROPAGATE_TRACEPARENT": "0",     // 链路追踪不上传

    // 📡 远程配置
    "DISABLE_GROWTHBOOK": "1",                    // 不拉 A/B 测试开关
    "CLAUDE_CODE_ATTRIBUTION_HEADER": "0",        // 关闭归因 Header

    // ❌ 旧版参数（仍兼容）
    "DISABLE_TELEMETRY": "1",
    "DISABLE_ERROR_REPORTING": "1"
  },
  "includeCoAuthoredBy": false  // Git 提交不添加 Co-Authored-By
}
\`\`\`

**配置作用域（从高到低）：** Managed → 命令行参数 → Local → Project → User

**参考来源：**
- [Claude Code Settings 官方文档](https://code.claude.com/docs/en/settings)
- [Claude Code Data Usage 官方文档](https://code.claude.com/docs/en/data-usage)
- [微信文章：一分钟关掉 Claude Code 的所有后台上报](https://mp.weixin.qq.com/s/OJ1_vGQVwDZyd-7tu0fwqQ)

## 延展阅读
- [Claude Code 分层多Agent架构技术文档](https://github.com/shareAI-lab/analysis_claude_code)
`,lh=`---
type: entity
tags: [AI编程, CLI, Agent, GitHub, 开源, 工具]
created: 2026-07-07
updated: 2026-07-07
---

# Codex CLI

## 概述

Codex CLI 是 GitHub（OpenAI）推出的终端 AI 编程 CLI 工具。开源于 2026 年，支持 Agents / Skills 等模式，与 Claude Code 同为 AI 编程终端赛道的主流工具。

## 隐私与遥测配置

Codex CLI 默认会上报遥测数据。通过 \`~/.codex/config.toml\` 可关闭：

\`\`\`toml
[analytics]
enabled = false

[otel]
exporter = "none"
trace_exporter = "none"
metrics_exporter = "none"
log_user_prompt = false      # 提示词内容不记录不上报

[feedback]
enabled = false

[features]
tool_suggest = false         # 关闭云端工具建议
remote_plugin = false        # 关闭远程插件加载（只跑本地，防供应链风险）
\`\`\`

## 参考

- [微信文章：一分钟关掉 Claude Code 的所有后台上报](https://mp.weixin.qq.com/s/OJ1_vGQVwDZyd-7tu0fwqQ)（含 Codex 配置）
- [Codex CLI GitHub](https://github.com/github/codex-cli)
`,oh=`---
type: entity
tags: [AI编程, 自动化, OpenSpec, Superpowers, AI Agent]
created: 2026-07-04
updated: 2026-07-04
---

# Comet

## 概述

Comet 是基于 OpenSpec + Superpowers 的自动化 Spec Skills 工具，实现从 Spec 定义到代码生成的端到端自动化编排。

## 核心信息
- **全称**：Comet
- **类型**：AI 编程自动化编排工具
- **基于**：OpenSpec + Superpowers

## 工作流

\`\`\`
Spec 定义 → Comet 编排 → Superpowers Skill 执行 → 代码产出 → 自动验证
\`\`\`

通过嵌套 Skill 机制，将多个 Skills 串联为完整的自动化流水线。

## 生态组合

AI 增强开发三件套：OpenSpec + Superpowers + gstack，Comet 负责三者间的编排调度。

## 相关概念
- [[AI编程]]
- [[统一开发范式]]
`,ah=`---
type: entity
tags: [AI编程, Claude Code, 插件库, Skills, Agent, Hooks, MCP]
created: 2026-07-04
updated: 2026-07-04
---

# ECC (Everything Claude Code)

## 概述

ECC（Everything Claude Code）是 Claude Code 生态中最大的插件集合库，GitHub 21.7 万 Star。汇聚了社区贡献的 Skills、Hooks、MCP 配置、CLAUDE.md 模板等，是 Claude Code 用户的"应用商店"。

## 核心信息
- **全称**：Everything Claude Code (ECC)
- **类型**：Claude Code 插件集合
- **Star**：217k+

## 内容体系

- **Skills 合集**：社区贡献的各领域 AI 编程 Skills
- **Hooks 库**：事件驱动的自动化钩子
- **MCP 配置**：Model Context Protocol Server 配置模板
- **CLAUDE.md 模板**：项目记忆文件的最佳实践模板
- **工作流示例**：完整的 AI 编程工作流参考实现

## 相关实体
- [[Claude Code]]
- [[Superpowers]]
- [[gstack]]

## 相关概念
- [[AI编程]]
- [[MCP 模型上下文协议]]
`,sh=`---
type: entity
tags: [工具, 网页爬虫, AI, MCP, 开源]
created: 2026-07-04
updated: 2026-07-04
related_sources: 1
---

# Firecrawl

## 概述

Firecrawl 是一个面向 AI 的网页数据采集引擎，将网站内容转换为 LLM 可消费的 Markdown/JSON 格式。提供托管云 API 和自托管开源版本。GitHub 14.2 万 Star。

## 核心信息
- **全称**：Firecrawl
- **类型**：工具（网页数据采集）
- **相关方**：开源社区，firecrawl-mcp-server 生态
- **时间线**：2026 年推出 MCP Server（6.8k Star）

## 详细说明

### 技术架构

- 基于 TypeScript 构建
- 使用 Playwright 处理 JavaScript 渲染页面
- 输出格式：Markdown、JSON（LLM 友好）
- 部署方式：托管云 API + 开源自托管

### 生态扩展

- **firecrawl-mcp-server**（6.8k Star）：为 AI Agent 提供标准 MCP 接口
- **Firesearch**：多页聚合深度研究工具

## 相关摘要
- [[Firecrawl — AI 原生的网页数据采集引擎]]

## 延展阅读
- [Firecrawl GitHub](https://github.com/mendableai/firecrawl)
- [Firecrawl 官网](https://www.firecrawl.dev)
`,uh=`---
type: entity
tags: [推理引擎, 实时推理, 低延迟, VLA, 具身智能]
created: 2026-07-04
updated: 2026-07-04
---

# FlashRT

## 概述

FlashRT 是一个高性能实时推理引擎，专注于小批量、低延迟场景的 AI 推理优化。面向具身智能（VLA）、实时对话等对延迟敏感的应用场景。

## 核心信息
- **全称**：FlashRT
- **类型**：AI 推理引擎
- **优化方向**：小批量、低延迟
- **应用场景**：具身智能、实时对话、Agent 实时响应

## 核心特性

- 针对小 batch size 场景优化（传统推理引擎在大量并发时效率高，小批量延迟大）
- 适用于 Agent 场景中的高频工具调用（每次调用都是小批量推理）
- 支持 VLA（Vision-Language-Action）模型的实时推理

## 相关概念
- [[AI Agent]]
`,ch=`---
type: entity
tags: [模型融合, 开源社区, 中山大学, 腾讯]
created: 2026-07-05
updated: 2026-07-05
related_sources: 3
---

# FuseAI

## 概述
FuseAI 是一个开源模型融合研究社区，由中山大学和腾讯 AI Lab 发起，专注于将多个异构大模型的知识和能力融合为统一模型。其核心理念是：与其从头训练新模型，不如将已有模型的独特能力融合在一起。

## 核心信息
- **全称**：FuseAI: Knowledge Fusion of Large Language Models
- **类型**：开源研究社区
- **相关方**：中山大学、腾讯 AI Lab、Fanqi Wan 等
- **时间线**：
  - 2024.08 — FuseChat (arXiv 2408.07990) 发布
  - 2024.12 — FuseChat-3.0 发布（SOTA 8B LLM）
  - 2025.01 — FuseO1-Preview 发布（AIME24 74.0分）
  - 2025.02 — WRPO 论文被 ICLR 2025 录用

## 关键项目

### FuseLLM（ICLR 2024）
首个将不同架构的 LLM 进行知识融合的工作。融合了 Llama-2-7B、OpenLLaMA-7B、MPT-7B 三个异构模型。
- **方法**：从多个源模型中提取知识，通过轻量级持续训练合并到统一模型
- **关键创新**：统计对齐方法解决了不同 tokenizer / 词表的对齐难题

### FuseChat
聚焦于聊天模型的知识融合。
- **FuseChat-3.0**：采用隐式融合方法（SFT + DPO），将 4 个 70B+ 大模型（Gemma-2-27B / Mistral-Large / Qwen-2.5-72B / Llama-3.1-70B）的能力蒸馏到 1B~8B 的小模型中
- **关键成果**：Llama-3.1-8B 融合后在 AlpacaEval-2 / Arena-Hard 上达到 SOTA

### FuseO1-Preview
专注于 System-II 推理能力的融合。
- **Long-Long 推理融合**：多个 Long-CoT 推理模型融合 → AIME24 74.0（接近 OpenAI o1 的 79.2）
- **Long-Short 推理融合**：Long-CoT 与 Short-CoT 模型融合 → 兼具两种推理模式能力
- **核心技术**：SCE 合并算法

## 核心技术：SCE 合并（Select-Calculate-Erase）
FuseAI 在参数空间合并阶段的核心算法：
1. **Select（选择）**：筛选出方差最大的 top-k% 参数元素（最显著的变化方向）
2. **Calculate（计算）**：基于选中元素的平方和为每个目标模型确定合并系数
3. **Erase（擦除）**：过滤"少数方向"的参数冲突，统一全局符号

无需额外训练即可实现矩阵级别的精细融合。

## 相关概念
- [[模型融合]]
- [[Spec驱动开发 SDD]]

## 延展阅读
- [FuseAI HuggingFace](https://huggingface.co/FuseAI)
- [FuseChat Paper](https://arxiv.org/abs/2408.07990)
- [FuseO1-Preview Blog](https://huggingface.co/blog/Wanfq/fuseo1-preview)
`,dh=`---
type: entity
tags: [上下文工程, AI编程, 大型项目, GSD, 工作流]
created: 2026-07-04
updated: 2026-07-04
---

# GSD (Get Shit Done)

## 概述

GSD（Get Shit Done）是一个面向大型项目的上下文工程系统，解决 AI 编程中"上下文腐烂"（Context Rot）问题——随着项目规模增长，AI Agent 对代码库的理解逐渐退化。

## 核心信息
- **全称**：Get Shit Done (GSD)
- **类型**：上下文工程系统
- **核心问题**：Context Rot（上下文腐烂）

## 核心理念

大型项目中，AI Agent 面临的核心挑战不是模型能力不足，而是上下文窗口内无法装载完整的项目理解。GSD 通过结构化的上下文分段、索引和注入机制，保持 AI Agent 对大型代码库的全局认知。

## 相关概念
- [[AI编程]]
`,ph=`---
type: entity
tags: [AI编程, Claude Code, Skills, Y Combinator, 技能包, 角色化]
created: 2026-07-04
updated: 2026-07-04
---

# gstack

## 概述

gstack 是 Y Combinator CEO Garry Tan 开源的 Claude Code 技能包，GitHub 111k Star。通过角色化（Persona）方式让 AI Agent 扮演不同专业角色（架构师、前端专家、DevOps 等），提供精准的代码生成和审查能力。

## 核心信息
- **全称**：gstack
- **类型**：Claude Code Skills 技能包
- **作者**：Garry Tan（YC CEO）
- **Star**：111k+

## 设计理念

角色化执行：为不同任务类型定义专门的 Agent 角色，每个角色有自己的行为规范、代码风格和领域知识。

\`\`\`
通用 Agent → "帮我写个登录页面"
gstack Agent → 前端专家角色 → 带着 UI/UX 约束写登录页面
\`\`\`

## 生态组合

AI 增强开发三件套：
- **OpenSpec** — 规范驱动（定义做什么）
- **Superpowers** — 纪律驱动（定义怎么做）
- **gstack** — 角色化执行（谁来做）

## 相关概念
- [[AI编程]]
- [[统一开发范式]]

## 相关实体
- [[Claude Code]]
- [[Superpowers]]
`,fh=`---
type: entity
tags: [AI Agent, 自进化, 清华大学, Hermes, 记忆系统, Skills]
created: 2026-07-04
updated: 2026-07-04
---

# Hermes Agent

## 概述

Hermes Agent 是清华大学推出的自进化 AI Agent 框架。与 OpenClaw 不同，Hermes 的核心创新在于 Agent 能**自动分析失败原因并修正自身策略**，无需人工干预即可持续进化。

## 核心信息
- **全称**：Hermes Agent
- **类型**：自进化 AI Agent 框架
- **开发方**：清华大学
- **相关论文**：SkillEvolver、EmbodiSkill

## 自进化机制

传统 Agent vs Hermes Agent：

\`\`\`
传统：用户反馈 → 人工修改 Prompt/Skill → Agent 更新
Hermes：用户反馈 → Agent 自动分析失败原因 → Agent 自动修正策略 → 下次不再犯同样错误
\`\`\`

## 核心特性

- **自动错误分析**：Agent 自动诊断任务失败的根本原因
- **策略自修正**：根据诊断结果自动调整行为策略，无需人工修改 Prompt
- **Skill 自进化**：配合 SkillEvolver / EmbodiSkill 论文，实现技能的自动生成和优化
- **元技能**：学习"如何学习"的能力，跨任务泛化

## 与 OpenClaw 对比

| 维度 | Hermes Agent | OpenClaw |
|---|---|---|
| 自进化方式 | 自动分析失败→修正策略 | 4层记忆→经验检索 |
| 记忆架构 | 任务级策略修正 | L0-L3 分层记忆 |
| 学习粒度 | 策略/Skill 级 | 交互经验级 |
| 开发方 | 清华大学 | 社区开源 |

## 相关概念
- [[AI Agent]]
- [[自改进AI Agent]]

## 相关实体
- [[OpenClaw]]
`,gh=`---
type: entity
tags: [视频生成, AI编程, 开源工具, Open Design, html-to-video]
created: 2026-07-07
updated: 2026-07-07
---

# html-video

## 概述

html-video 是 nexu-io / Open Design 团队开源的项目，让你通过 AI Coding Agent 将 HTML + CSS + 数据直接渲染为真实 MP4 视频——全在本地运行，无按次渲染费，无厂商锁定。Apache-2.0 协议。

## 核心信息

- **全称**：html-video
- **类型**：HTML 转视频工具
- **相关方**：[nexu-io](https://github.com/nexu-io) / [Open Design](https://open-design.ai)
- **Star**：⭐ 3,855 (2026-07-07)
- **协议**：Apache-2.0
- **主语言**：HTML
- **创建时间**：2026-05-27

## 核心理念

**视频即代码（Video as Code）**——Agent 根据你的描述，自动选模板、填充内容、渲染为 MP4。支持直接丢一个文章链接或 GitHub 仓库链接，自动转成视频。

## 支持的 Agent

Open Design · Windsurf CLI · Trae CLI · Claude Code · Cursor · Codex · Gemini · Grok · Qwen · OpenCode · Copilot · Aider · Hermes · Anthropic API

## 渲染引擎架构

插件化设计，统一 \`render(input, ctx)\` 契约：

| 引擎 | 范式 | 状态 |
|------|------|------|
| **Hyperframes** | HTML + CSS + GSAP | ✅ 默认（无头 Chromium + ffmpeg） |
| Remotion | React 组件 | 🗺️ 计划中 |
| Motion Canvas / Revideo | TypeScript Canvas | 🗺️ 计划中 |
| Manim | 数学/3D | 🔬 调研中 |

## 模板系统

内置 21 个模板，涵盖：数据可视化（NYT 风格折线图等）、片头/片尾、电影级效果（胶片颗粒 + 漏光）、代码演示（打字机 + 终端光标 VFX）、产品宣传等。

## 参考

- [GitHub 项目](https://github.com/nexu-io/html-video)
- [Open Design 官网](https://open-design.ai)
`,mh=`---
type: entity
tags: [设计, Skill, Claude Code, UI, 原型, 动画, 开源]
created: 2026-07-04
updated: 2026-07-04
---

# Huashu Design

## 概述

Huashu Design（花叔）是一个开源的 Claude Code 设计 Skill，19k Star。让 AI Agent 获得 UI 设计、原型生成和动画能力，在代码生成的同时产出高质量的界面设计。

## 核心信息
- **全称**：Huashu Design（花叔）
- **类型**：Claude Code 设计 Skill
- **Star**：19k+
- **作者**：花叔

## 核心能力

- UI 原型生成
- 交互动画设计
- 设计系统组件化
- 与 Claude Code 的代码生成无缝集成

## 相关实体
- [[Claude Code]]
- [[Superpowers]]
`,hh=`---
type: entity
tags: [模型融合, 知识蒸馏, Reallm-Labs, LLM融合框架]
created: 2026-07-05
updated: 2026-07-05
related_sources: 1
---

# InfiFusion

## 概述
InfiFusion 是由 Reallm-Labs (InfiX-ai) 提出的统一 LLM 融合框架，首个能够**同时融合多达 4 个 14B~24B 异构模型**的系统。核心创新在于增强版 Universal Logit Distillation (ULD) 配合 Top-K selection 和 Logits Standardization。

## 核心信息
- **全称**：InfiFusion: A Unified Framework for Enhanced Cross-Model Reasoning via LLM Fusion
- **类型**：模型 / 融合框架
- **相关方**：Reallm-Labs (InfiX-ai)
- **时间线**：
  - 2025.01 — arXiv 论文发布 (arXiv:2501.02795)
- **论文**：[InfiFusion](https://arxiv.org/abs/2501.02795)
- **模型**：[InfiFusion-14B](https://huggingface.co/InfiX-ai/InfiFusion-14B)
- **许可证**：MIT

## 核心技术方案

### 融合框架
InfiFusion 提出两种融合策略：
1. **Pairwise Fusion (InfiFusion_p)**：逐个源模型分别蒸馏到 pivot 模型，然后合并
2. **Unified Fusion (InfiFusion_u)**：所有源模型同时蒸馏到 pivot 模型

### 关键技术
- **Universal Logit Distillation (ULD)** — 统一 logits 蒸馏，不受模型架构差异影响
- **Top-K Selection** — 只取 logits 分布中置信度最高的 K 个 token 参与蒸馏，过滤噪声
- **Logits Standardization** — 不同模型的 logits 分布标准化后再参与蒸馏，解决量纲不一致问题

### 训练数据
构建了 130K 条多任务训练数据：
| 领域 | 数据量 | 来源 |
|------|--------|------|
| 通用推理 | 52K | Infinity-Instruct |
| 数学 | 39K | NuminaMath-1.5，DeepSeek-R1 蒸馏答案 |
| 代码 | 39K | KodCode-V1-SFT-R1，沙箱验证过滤 |

### 惊人效率
- 完整训练仅需 **160 H800 GPU 小时**（约 1 天单机完成）
- 传统 LLM 训练需要数百万 GPU 小时

## 性能表现
在 11 个基准测试（推理/编码/数学/指令遵循）中超越 Qwen-2.5-14B-Instruct 和 Phi-4 等 SOTA 模型。

## 模型参数
- 参数量：14B
- 架构：密集 Decoder-only Transformer
- 最大上下文：16K tokens
- 融合输入长度：4K tokens
- 数据类型：bfloat16

## 相关概念
- [[模型融合]]

## 延展阅读
- [InfiFusion-14B](https://huggingface.co/InfiX-ai/InfiFusion-14B) — HuggingFace 模型页面
- [InfiFusion Collection](https://huggingface.co/collections/InfiX-ai/infifusion-model-fusion-and-model-merging)
`,yh=`---
type: entity
tags: [AI Skills, 开源, Claude Code, 技能合集, 数字生命卡兹克]
created: 2026-07-04
updated: 2026-07-04
---

# khazix-skills

## 概述

khazix-skills 是"数字生命卡兹克"开源的个人 AI Skills 合集，包含多个实用 Claude Code Skills，覆盖代码分析、自动化、数据处理等场景。

## 核心信息
- **全称**：khazix-skills
- **类型**：Claude Code Skills 合集
- **作者**：数字生命卡兹克

## 相关实体
- [[Claude Code]]
- [[Superpowers]]
- [[gstack]]
`,kh=`---
type: entity
tags: [RAG, 知识图谱, 检索增强生成, 港大, GraphRAG, 开源]
created: 2026-07-04
updated: 2026-07-04
---

# LightRAG

## 概述

LightRAG 是香港大学推出的基于知识图谱的检索增强生成（GraphRAG）框架，将知识图谱引入 RAG 流程，解决传统 chunk-based RAG 的上下文割裂问题。GitHub 36.7k Star，发表于 EMNLP 2025。

## 核心信息
- **全称**：LightRAG
- **类型**：RAG 框架 / 知识图谱检索
- **开发方**：香港大学
- **版本**：1.5
- **Star**：36.7k+

## 核心技术

LightRAG 用知识图谱替代传统的文本分块（chunking）方式：

\`\`\`
传统 RAG：文档 → 切Chunk → 向量化 → 检索 → LLM生成
LightRAG：文档 → 实体/关系抽取 → 知识图谱 → 图检索 → LLM生成
\`\`\`

优势：
- 保留文档间的语义关系，而非机械切分
- 支持多跳推理：从实体 A 到关系 R 到实体 B
- 检索结果更具上下文完整性

## 相关概念
- [[RAG 检索增强生成]]
- [[AI Agent]]

## 延展阅读
- [LightRAG GitHub](https://github.com/HKUDS/LightRAG)
`,Ah=`---
type: entity
tags: [AI记忆, 记忆系统, 开源, ChromaDB, 语义搜索, 本地优先]
created: 2026-07-04
updated: 2026-07-04
---

# MemPalace

## 概述

MemPalace 是一个开源的 AI 记忆系统，55k Star，本地优先架构。基于 ChromaDB 向量数据库实现语义搜索和记忆管理，为 AI Agent 提供持久化的长期记忆能力。

## 核心信息
- **全称**：MemPalace
- **类型**：AI 记忆系统
- **Star**：55k+
- **技术栈**：ChromaDB + 语义搜索
- **架构**：本地优先（local-first）

## 核心特性

- **语义记忆搜索**：基于向量相似度的记忆检索
- **本地优先**：数据存储在本地，隐私可控
- **Agent 集成**：可嵌入 AI Agent 提供持久记忆层
- **自动索引**：记忆条目自动向量化和索引

## 相关概念
- [[AI Agent]]
- [[自改进AI Agent]]

## 相关实体
- [[OpenClaw]]
- [[Hermes Agent]]
`,vh=`---
type: entity
tags: [模型融合, 工具, 模型合并, 开源]
created: 2026-07-05
updated: 2026-07-05
related_sources: 1
---

# mergekit

## 概述
mergekit 是 HuggingFace 生态中最流行的模型合并工具库，支持 SLERP / TIES / DARE / Linear 等多种合并算法。其最大优势是**无需 GPU 即可合并模型**，只需 CPU 即可完成。

## 核心信息
- **全称**：mergekit
- **类型**：工具
- **维护者**：Charles Goddard
- **仓库**：[GitHub: cg123/mergekit](https://github.com/cg123/mergekit)
- **许可证**：MIT

## 支持的合并算法

| 算法 | 说明 | 多模型支持 |
|------|------|-----------|
| **SLERP** | 球面线性插值，最流行的方法 | ❌ 仅2模型 |
| **TIES-Merging** | Trim+Elect+Disjoint 三步法 | ✅ |
| **DARE** | 随机丢弃 + 重缩放 | ✅ |
| **Linear** | 线性加权平均 | ✅ |
| **Task Arithmetic** | 任务向量算术运算 | ✅ |
| **Passthrough** | 跨层传递（合并不同层数模型） | ❌ |

## 配置示例

### SLERP 配置
\`\`\`yaml
slices:
  - sources:
    - model: OpenPipe/mistral-ft-optimized-1218
      layer_range: [0, 32]
    - model: mlabonne/NeuralHermes-2.5-Mistral-7B
      layer_range: [0, 32]
merge_method: slerp
base_model: OpenPipe/mistral-ft-optimized-1218
parameters:
  t:
    - filter: self_attn
      value: [0, 0.5, 0.3, 0.7, 1]
    - filter: mlp
      value: [1, 0.5, 0.7, 0.3, 0]
    - value: 0.5
dtype: bfloat16
\`\`\`

### TIES 配置
\`\`\`yaml
models:
  - model: mistralai/Mistral-7B-v0.1
  - model: OpenPipe/mistral-ft-optimized-1218
    parameters:
      density: 0.5
      weight: 0.5
  - model: mlabonne/NeuralHermes-2.5-Mistral-7B
    parameters:
      density: 0.5
      weight: 0.3
merge_method: ties
base_model: mistralai/Mistral-7B-v0.1
parameters:
  normalize: true
dtype: float16
\`\`\`

## 使用方式
\`\`\`bash
# 安装
pip install mergekit

# 合并（需要 YAML 配置文件和指定合并方法）
mergekit-yaml config.yml output-model
\`\`\`

## 影响与地位
- Open LLM Leaderboard 上大量 SOTA 模型由 mergekit 合并产生
- 使得模型融合成为社区级平民化技术（一台 MacBook 就能操作）
- 被 HuggingFace 官方教程列为推荐的模型创建方式

## 相关概念
- [[模型融合]]

## 延展阅读
- [Merge LLMs with mergekit](https://huggingface.co/blog/mlabonne/merge-models) — HuggingFace 官方教程
- [LazyMergekit](https://colab.research.google.com/drive/1obulZ1ROXHjYLn6PPZJwRR6GzgQogxxb?usp=sharing) — 一键式 Colab 脚本
`,Sh=`---
type: entity
tags: [AI编程, 终端, Claude Code, 开源, Ghostty]
created: 2026-07-04
updated: 2026-07-04
---

# MUX0

## 概述

MUX0 是专为 Claude Code 设计的开源 AI 编程终端，基于 Ghostty 终端框架，为 AI Agent 提供优化的命令行交互环境。

## 核心信息
- **全称**：MUX0
- **类型**：AI 编程终端
- **技术栈**：基于 Ghostty
- **定位**：Claude Code / OpenCode / Codex 专用终端

## 核心特性

- 为 AI Agent 工具调用优化（文件读写、代码搜索、Bash 执行）
- 支持多 Agent 会话管理
- 原生集成 Claude Code 的工具链

## 相关实体
- [[Claude Code]]
`,wh=`---
type: entity
tags: [AI Agent, 自进化, 记忆系统, Skills, OpenClaw, NAS]
created: 2026-07-04
updated: 2026-07-04
---

# OpenClaw

## 概述

OpenClaw 是一个支持自进化的单 Agent 框架，核心特色是 4 层记忆系统（L0-L3），让 Agent 能从每次交互中学习和改进。支持 Docker 部署（含 NAS），通过 Telegram 等渠道接入。

## 核心信息
- **全称**：OpenClaw
- **类型**：AI Agent 框架
- **架构**：单 Agent + 4 层记忆系统
- **部署**：Docker，支持 NAS（群晖）

## 4 层记忆系统

- **L0 — 短期记忆**：当前对话上下文
- **L1 — 工作记忆**：当前任务的中间状态和工具调用结果
- **L2 — 情节记忆**：历史交互的经验教训，自动检索相似场景
- **L3 — 语义记忆**：提升为项目级知识的事实、规则和约束

## 核心特性

- **Skills 体系**：能力拆解为独立 Skills，按需组合
- **自进化**：从 L2 记忆中学习，下次遇到类似场景自动应用经验
- **Gateway 模式**：统一接入层，对接 Telegram / 微信 / 飞书等渠道
- **本地部署**：NAS Docker 一键部署，数据本地可控

## 部署要点

- Docker 镜像：\`1panel/openclaw\`
- 端口：18789
- 启动命令：\`openclaw gateway --allow-unconfigured\`
- 需配置 gateway.token 确保安全

## 相关概念
- [[AI Agent]]
- [[自改进AI Agent]]

## 对比
- [[Hermes Agent]] — 清华自进化单Agent，不同记忆架构
`,Ch=`---
type: entity
tags: [AI编程, OpenSpec, 规范驱动, SDD, AI Agent]
created: 2026-07-04
updated: 2026-07-04
---

# OpenSpec

## 概述

OpenSpec 是规范驱动开发（Spec-Driven Development, SDD）的开源框架。开发者编写规格说明书（Spec），AI 根据 Spec 自动生成代码、测试和文档。已在实际项目中验证：编码效率提升 10 倍，交付效率提升 13%。

## 核心信息
- **全称**：OpenSpec
- **类型**：规范驱动开发框架
- **定位**：SDD 工件管理层

## 工作流

\`\`\`
Phase 0: Explore（探索需求）
Phase 1: Specify（编写 Spec）
Phase 2: Execute（AI 实现）
Phase 3: Verify（自动验证）
Phase 4: Archive（归档经验）
\`\`\`

## 核心价值

Spec 驱动的关键不在"写代码更快"，而在"让 AI 理解需求更准"。痛点已从"怎么写代码"转移到"怎么说清楚需求"。

- **编码效率**：提升 10 倍
- **交付效率**：提升 13%（瓶颈在需求理解和验证）
- **可追溯性**：Spec → 代码 → 测试，每一步可审计

## 生态组合

AI 增强开发三件套：**OpenSpec**（规范驱动）+ **Superpowers**（纪律驱动）+ **gstack**（角色化执行）

## 相关概念
- [[AI编程]]
- [[统一开发范式]]
- [[测试驱动开发 TDD]]

## 相关实体
- [[Superpowers]]
- [[BMAD]] — 另一 SDD 框架，对比分析
`,xh=`---
type: entity
tags: [工具, AI编程, 测试驱动, 自我修复, 自动化]
created: 2026-07-04
updated: 2026-07-04
related_sources: 1
---

# OpenSquilla

## 概述

OpenSquilla 是一个 AI 编程工具，在 0.4.0 版本中率先引入了**红绿回归证据链**机制，让 AI 生成的代码经过"写测试 → 改代码 → 回归验证"三道关卡后才交付，实现自我验证 + 自我修复闭环。成本降低 60%~80%。

## 核心信息
- **全称**：OpenSquilla
- **类型**：工具（AI 编程）
- **当前版本**：0.4.0
- **核心理念**：红绿回归证据链（Red-Green-Regression Pipeline）

## 详细说明

### 红绿回归证据链

1. **红（Red）**：AI 生成预期失败的单元测试
2. **绿（Green）**：AI 修改代码使测试通过
3. **回归（Regression）**：运行全部已有测试确保无回归
4. **自动修复闭环**：失败 → 分析 → 修改 → 重测 → 循环

### 关键指标

- 开发成本降低：60%~80%
- 代码交付需通过三道验证关卡
- AI 从"生成代码"进化到"验证代码"

## 相关摘要
- [[OpenSquilla — AI 代码生成的自验证与自修复]]

## 延展阅读
- 暂无外部链接（待补充）
`,Ih=`---
type: entity
tags: [AI Agent, Web自动化, JavaScript, 阿里开源, 浏览器操控]
created: 2026-07-04
updated: 2026-07-04
source_url: https://github.com/alibaba/page-agent
---

# PageAgent

## 概述

PageAgent 是阿里巴巴开源的轻量级 JavaScript 库，仅 32KB（gzip），让 AI Agent 直接在网页内部操控界面，无需浏览器扩展、Python 后端或无头浏览器。

## 核心信息
- **全称**：PageAgent
- **类型**：AI Web 操控框架
- **开发方**：阿里巴巴
- **技术栈**：JavaScript
- **大小**：32KB gzip

## 核心特性

- **极简集成**：仅需一个 \`<script>\` 标签或 npm 引入
- **DOM 脱水技术**：纯文本 DOM 操控，无需截图或多模态模型
- **模型无关**：支持 GPT-4、Claude、通义千问等主流模型
- **可选 Chrome 扩展**：支持跨标签页多页面任务
- **MCP Server (Beta)**：外部客户端可控制浏览器

## 与传统方案对比

| 方案 | 大小 | 依赖 |
|---|---|---|
| PageAgent | 32KB | 无 |
| Browser-use (Python) | ~200MB | Python + Playwright |
| Playwright/Puppeteer | 几十MB | Node/Python |

部署成本降低 100 倍以上，SaaS 产品可零成本嵌入 AI Copilot。

## 适用场景

- SaaS 产品 AI Copilot
- 复杂表单一键填写（ERP/CRM）
- 无障碍辅助（语音操控）
- 跨标签页网页自动化

## 相关概念
- [[AI Agent]]
- [[MCP 模型上下文协议]]

## 延展阅读
- [PageAgent GitHub](https://github.com/alibaba/page-agent)
`,Eh=`---
type: entity
tags: [工具, AI-Agent, 实时感知, 开源情报, 预测]
created: 2026-07-06
updated: 2026-07-06
related_sources: 1
---

# PYTHIA（本地 AI Agent 实时感知工具）

## 概述

PYTHIA 是一个本地、无密钥的 AI Agent 工具，融合 Osiris（实时全球情报仪表盘）和 MiroFish（多智能体预测引擎），通过单次 API 调用向 Agent 提供整个实时世界的信息和未来预测。完全在本地硬件上通过 Ollama 运行。

## 核心信息

- **全称**：PYTHIA
- **类型**：工具（AI Agent 增强框架）
- **架构**：Osiris（情报采集）+ MiroFish（预测引擎）
- **运行方式**：本地 Ollama，零云端依赖
- **开源协议**：MIT
- **适用平台**：支持 Ollama 的任何本地 AI Agent

## 核心能力

### 实时感知：30+ 免费无密钥数据源

| 类别 | 数据源 |
|------|--------|
| 冲突与安全 | GDELT、DeepStateMap（乌克兰）、网络威胁、GPS 干扰、核基础设施 |
| 自然灾害 | USGS 地震、NWS 风暴/洪水、FIRMS 野火、EONET 灾害、辐射监测 |
| 市场 | 石油/指数/大宗商品/加密货币、Polymarket 赔率 |
| 人道主义 | UNHCR 流离失所、WHO 疾病、WFP 粮食安全、世界银行（通胀/失业/GDP/贫困） |
| 动向 | 航班（民用/私人/军用）、卫星追踪、海事情报、实时新闻/CCTV |

### 预测能力（MiroFish）

- 构建高保真数字平行世界
- 数千个 AI 智能体，各有不同性格、记忆和行为逻辑
- 模拟集体人类行为，预测事件走向
- 预测范围：24 小时 / 一周 / 一月 / 一年
- "委员会"评分机制（策略师、经济学家、自然主义者、怀疑论者）
- 支持完全本地运行（MiroFish-Offline，Neo4j + Ollama）

### Agent 集成

单次 API 调用即可让 AI Agent 获得完整实时世界信息，无需管理多个数据源 API key。

## 相关概念
- [[AI Agent]]
- [[多 Agent 协作]]

## 延展阅读
- Reddit r/SelfHostedAI — PYTHIA 讨论帖
- GitHub: MiroFish、Osiris
`,Lh=`---
type: entity
tags: [RAG, 多模态, 知识图谱, 港大, 文档理解, LightRAG]
created: 2026-07-04
updated: 2026-07-04
---

# RAG-Anything

## 概述

RAG-Anything 是香港大学继 LightRAG 之后推出的多模态 RAG 框架。核心理念是用知识图谱终结传统的文本切块（chunking）方式，支持图像、表格、文本等多模态内容的统一知识图谱检索。

## 核心信息
- **全称**：RAG-Anything
- **类型**：多模态 RAG 框架
- **开发方**：香港大学
- **基于**：LightRAG 知识图谱架构

## 核心理念

传统 RAG 将文档机械切分为 chunk，破坏了文档内在的语义结构和跨模态关联。RAG-Anything 将文档中所有模态的内容统一抽取为知识图谱中的实体和关系，实现真正的"理解"而非"检索"。

## 相关实体
- [[LightRAG]]

## 相关概念
- [[RAG 检索增强生成]]
`,_h=`---
type: entity
tags: [SeedER, 知识图谱, 知识检索, 强化学习, GNN, RAG, 多跳推理]
created: 2026-07-04
updated: 2026-07-04
---

# SeedER

## 概述

SeedER 是一个基于强化学习的知识图谱结构化检索系统。通过 GNN（图神经网络）和强化学习驱动，实现对知识图谱中多跳关系的精准推理和检索。

## 核心信息
- **全称**：SeedER
- **类型**：知识图谱检索系统
- **核心技术**：强化学习 + GNN
- **应用**：多跳推理、结构化知识检索

## 核心技术

SeedER 将知识图谱检索建模为强化学习问题：
- **状态**：当前在图谱中的位置
- **动作**：沿关系边移动到相邻实体
- **奖励**：检索结果的相关性

通过 RL 训练 Agent 学会在图中高效导航，找到多跳关系路径。

## 相关概念
- [[RAG 检索增强生成]]
- [[本体论]]

## 相关实体
- [[LightRAG]]
`,Rh=`---
type: entity
tags: [工具, AI项目, Java, Spring Boot, AI Agent, RAG]
created: 2026-07-04
updated: 2026-07-04
related_sources: 1
---

# Snail AI

## 概述

Snail AI 是由"爱组搭"团队开发的开源企业级 AI Agent 平台，基于 Java 17+ / Spring Boot 4 / Spring AI 2.0 / gRPC 技术栈，让 Java 开发者无需转 Python 即可构建 AI Agent 应用。

## 核心信息
- **全称**：Snail AI
- **类型**：工具（AI Agent 平台）
- **相关方**：爱组搭团队
- **协议**：Apache 2.0
- **技术栈**：Java 17+ / Spring Boot 4 / Spring AI 2.0 / gRPC

## 详细说明

### 核心功能

- **多模型管理**：统一接入多种 LLM 提供商
- **Agent 编排**：可视化设计 + 工作流编排
- **RAG 知识库**：Milvus / Elasticsearch / PgVector
- **长时记忆**：Agent 持久化记忆管理
- **技能管理**：可扩展的技能系统
- **分布式架构**：gRPC 通信，水平扩展

### 定位

在 Python 生态（LangChain、LlamaIndex）垄断 AI Agent 领域的背景下，Snail AI 为 Java 企业级开发提供了原生方案。

## 相关摘要
- [[Snail AI — Java 生态的企业级 AI Agent 平台]]

## 延展阅读
- [Snail AI GitHub](https://github.com/aizuda/snail-ai)
`,Ph=`---
type: entity
tags: [AI编程, SDD, 规范驱动, GitHub, 开源工具]
created: 2026-07-07
updated: 2026-07-07
---

# GitHub Spec Kit

## 概述

GitHub Spec Kit 是 GitHub 官方开源的规格驱动开发（Spec-Driven Development, SDD）工具包。让开发者先写规格说明书（Spec），再由 AI Agent 按图纸施工，终结纯靠感觉的 vibe coding。118k+ Star，MIT 协议。

## 核心信息

- **全称**：GitHub Spec Kit
- **类型**：规范驱动开发工具包
- **相关方**：[GitHub](https://github.com/github/spec-kit)
- **Star**：⭐ 118,424 (2026-07-07)
- **协议**：MIT License
- **主语言**：Python
- **创建时间**：2025-08-21

## 核心理念

SDD 颠覆了传统软件开发范式：

- **传统模式**：代码为王，规格说明只是临时脚手架
- **SDD 模式**：规格说明成为可执行的核心资产，直接从规格生成代码

## 工作流

\`\`\`
Specify（规格） → Plan（规划） → Tasks（任务） → Implement（实现）
\`\`\`

四个阶段均设门控验证（Gate Check），防止"需求漂移"。

## 关键特性

- **Agent 无关**：支持 30+ AI Coding Agent（Copilot / Claude Code / Gemini CLI / Cursor / Windsurf 等）
- **扩展与预设系统**（Extensions & Presets）：社区可贡献功能扩展
- **角色绑定 Bundle**：按角色（PM / Dev / QA）提供预设配置
- **Specify CLI**：命令行工具，\`specify init / specifiy self upgrade\`

## 快速开始

\`\`\`bash
# 安装
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git@vX.Y.Z

# 初始化
specify init my-project --integration copilot

# 在 Agent 中使用 slash 命令
/speckit.constitution  # 建立项目基本原则
/speckit.specify       # 描述要构建的内容
\`\`\`

## 相关实体

- [[OpenSpec]] — 同领域 SDD 框架，不同流派
- [[BMAD]] — 重量级 SDD 平台
- [[Superpowers]] — TDD 驱动的 Skills 框架，可与 Spec Kit 互补
- [[统一开发范式]] — 融合 SDD + TDD 的开发方法论

## 参考

- [GitHub 项目页](https://github.com/github/spec-kit)
- [官方文档](https://github.github.io/spec-kit/)
- [GitHub Blog 介绍文章](https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/)
`,Dh=`---
type: entity
tags: [AI编程, Skills, Claude Code, TDD, 工作流, 开源]
created: 2026-07-04
updated: 2026-07-04
---

# Superpowers

## 概述

Superpowers 是 GitHub 上 116k+ Star 的 AI 编程 Skills 框架，为 Claude Code 等 AI 编程工具提供结构化的能力扩展体系。核心理念：将 AI 编程能力拆解为独立、可组合的 Skills，按需加载执行。

## 核心信息
- **全称**：Superpowers
- **类型**：AI 编程 Skills 框架
- **Star**：116k+
- **生态位置**：Claude Code 核心 Skills 基础设施

## 设计理念

\`\`\`
传统方式：一个大 Prompt 搞定所有 → 提示词臃肿、效果不稳定
Superpowers：Skill A + Skill B + Skill C → 按需组合，精准执行
\`\`\`

## 核心特性

- **模块化 Skill**：每个 Skill 专注一个能力（代码审查、测试生成、Java 转换等）
- **TDD 驱动**：内建测试驱动开发流程，红-绿-重构循环
- **纪律约束**：强制执行编码规范和行为边界
- **可组合**：多个 Skill 可嵌套、串联形成复杂工作流

## 代表 Skills

- code-review.skill — 代码审查
- test-writer.skill — 测试编写
- java-converter.skill — Java 代码转换
- 配合 OpenSpec 实现 Spec → Code → Test 完整闭环

## 生态组合

AI 增强开发三件套：**OpenSpec**（规范驱动）+ **Superpowers**（纪律驱动）+ **gstack**（角色化执行）

## 相关概念
- [[AI编程]]
- [[统一开发范式]]
- [[测试驱动开发 TDD]]

## 相关实体
- [[Claude Code]]
`,Th=`---
type: entity
tags: [代码理解, 知识图谱, Claude Code, Skills, 代码分析]
created: 2026-07-04
updated: 2026-07-04
---

# Understand Anything

## 概述

Understand Anything 是一个代码库分析工具，将任意代码仓库转换为交互式知识图谱，帮助开发者和 AI Agent 理解代码结构和模块间依赖关系。

## 核心信息
- **全称**：Understand Anything
- **类型**：代码知识图谱工具
- **集成**：Claude Code Skills / OpenClaw

## 核心能力

- 代码库 → 知识图谱自动转换
- 交互式可视化浏览
- 模块依赖关系分析
- 作为 Skill 嵌入 AI Agent 工作流

## 相关概念
- [[AI编程]]
- [[上下文工程]]

## 相关实体
- [[Claude Code]]
`,Mh=`---
type: entity
tags: [工具, LLM, 微调, 开源]
created: 2026-07-04
updated: 2026-07-04
related_sources: 1
---

# Unsloth

## 概述

Unsloth 是一个开源的大语言模型高效微调框架，通过 CUDA/Triton 内核级优化，在消费级 GPU 上实现训练速度 2~5 倍提升、显存占用降低 70%~80%。2026 年推出无代码 Web UI "Unsloth Studio"。

## 核心信息
- **全称**：Unsloth
- **类型**：工具（模型训练/微调框架）
- **相关方**：开源社区
- **时间线**：2026 年推出 Unsloth Studio

## 详细说明

### 技术原理

通过手动优化 CUDA 和 Triton 算子，替换 PyTorch 默认实现中的低效部分。重点优化注意力机制和前馈网络中的矩阵运算。

### 兼容模型

Llama-3、Mistral、Phi-4、Gemma、Qwen、DeepSeek 等主流开源 LLM。

### 性能指标

- 标准模型训练：2~5 倍加速
- MoE 模型训练：最高 12 倍加速
- 显存节省：70%~80%
- 最低硬件要求：3GB RAM

## 相关摘要
- [[Unsloth — 消费级 GPU 高效微调大模型]]

## 延展阅读
- [Unsloth 官网](https://unsloth.ai)
- [Unsloth GitHub](https://github.com/unslothai/unsloth)
`,Oh=`---
type: entity
tags: [工具, 股票分析, 金融, 投资, AI-Agent]
created: 2026-07-06
updated: 2026-07-06
related_sources: 1
---

# UZI-Skill（游资技能库）

## 概述

UZI-Skill 是一个开源的 AI 股票深度分析插件（游资技能库），为个人投资者提供机构级的投研能力。覆盖 A 股、港股和美股，全免费数据源、零 API key。

## 核心信息

- **全称**：UZI-Skill / 游资技能库
- **类型**：工具（AI Agent 技能/插件）
- **作者**：FloatFu-true (wbh604)
- **版本**：v3.9.1
- **开源协议**：MIT
- **仓库**：[GitHub](https://github.com/wbh604/UZI-Skill)
- **数据源**：akshare、东方财富、雪球、巨潮资讯、港交所新闻等
- **支持平台**：Claude Code、Cursor、Gemini CLI、**OpenClaw**、Hermes Agent、OpenAI Codex、CLI 直用

## 核心能力

### 22 维数据分析
涵盖财务、估值、技术面、资金面、行业对比、机构持仓等多维度。

### 66 位 AI 评审团 × 9 大流派
模拟不同投资风格的大佬（巴菲特、索罗斯、赵老哥、a16z、马斯克、黄仁勋、高瓴张磊、Michael Burry、Chanos 等）独立打分辩论。最新版含 Serenity AI 卡位猎手组（8 罚分因子 + 3 级证据阶梯 + 供应链 8 层分层）。

### 22 种机构级估值方法
DCF、Comps、LBO、DDM、EVA、SOTP、Risk-Adjusted PE、Monte Carlo 等。

### 输出形式
- 自包含 HTML 报告（Bloomberg 风格，离线可用）
- 朋友圈竖图（1080×1920）
- 微信群战报（1920×1080）
- 一句话摘要

### 主要命令
| 命令 | 功能 | 耗时 |
|------|------|------|
| \`analyze-stock <代码>\` | 完整 22 维 × 66 评委分析 | 5-8 min |
| \`quick-scan <代码>\` | 30 秒速判 | ~30s |
| \`scan-trap <代码>\` | 杀猪盘排查 | ~1 min |
| \`dcf <代码>\` | DCF 估值专项 | ~2 min |

## 相关概念
- [[AI Agent]]
- [[AI 投资分析]]
- [[OpenClaw]]

## 延展阅读
- [GitHub 仓库](https://github.com/wbh604/UZI-Skill)
- README 中文版
`,bh='# LLM Wiki — 全站索引\n\n> 自动维护，每次 ingest 后更新。按分类组织，每行一条：链接 + 摘要 + 标签。\n\n---\n\n## 实体\n<!-- 人物、模型、工具、数据集、公司/组织 -->\n\n- [Unsloth](wiki/entities/unsloth.md) — 开源 LLM 高效微调框架，CUDA 内核优化实现 2~12 倍训练加速，70%~80% 显存节省 `#工具 #微调 #开源`\n- [Firecrawl](wiki/entities/firecrawl.md) — AI 原生网页数据采集引擎，输出 LLM 可消费的 Markdown/JSON，GitHub 14.2 万 Star `#工具 #网页爬虫 #MCP`\n- [Snail AI](wiki/entities/snail-ai.md) — 基于 Spring Boot 4 + Spring AI 2.0 的 Java 企业级 AI Agent 平台，Apache 2.0 开源 `#工具 #AI-Agent #Java`\n- [OpenSquilla](wiki/entities/opensquilla.md) — AI 编程工具，引入红绿回归证据链实现代码自验证与自修复，成本降低 60%~80% `#工具 #AI编程 #测试驱动`\n- [AutoLink](wiki/entities/autolink.md) — 面向大数据场景的语义 Schema Linking 开源工具，将数据库结构转为向量嵌入实现 NL2SQL `#工具 #Text-to-SQL #开源`\n- [Claude Code](wiki/entities/claude-code.md) — Anthropic 推出的命令行 AI 编程工具，多 Agent 分层架构，支持 subAgent 委派和项目记忆 `#工具 #AI编程 #Agent`\n- [Codex CLI](wiki/entities/codex-cli.md) — GitHub 开源的终端 AI 编程 CLI 工具，支持 Agents/Skills 模式 `#工具 #AI编程 #GitHub`\n- [PageAgent](wiki/entities/pageagent.md) — 阿里开源 32KB JS 网页 AI 操控框架，DOM 脱水技术，比 Browser-use 轻 100 倍 `#工具 #Web自动化 #AI-Agent`\n- [LightRAG](wiki/entities/lightrag.md) — 港大 GraphRAG 框架，知识图谱替代传统 Chunk，EMNLP 2025，36.7k Star `#工具 #RAG #知识图谱`\n- [OpenClaw](wiki/entities/openclaw.md) — 自进化单 Agent 框架，4 层记忆系统（L0-L3），支持 NAS Docker 部署 `#工具 #AI-Agent #记忆系统`\n- [Hermes Agent](wiki/entities/hermes-agent.md) — 清华大学自进化 Agent，自动分析失败原因并修正策略 `#工具 #AI-Agent #自进化`\n- [Superpowers](wiki/entities/superpowers.md) — 116k+ Star AI 编程 Skills 框架，TDD 驱动的模块化能力扩展体系 `#工具 #AI编程 #Skills`\n- [gstack](wiki/entities/gstack.md) — YC CEO Garry Tan 的 Claude Code 技能包，111k Star，角色化 Agent 执行 `#工具 #AI编程 #角色化`\n- [OpenSpec](wiki/entities/openspec.md) — 规范驱动开发（SDD）框架，Spec → Execute → Verify → Archive 五阶段流程 `#工具 #AI编程 #SDD`\n- [Spec Kit](wiki/entities/spec-kit.md) — GitHub 官方开源的规格驱动开发（SDD）工具包，支持 30+ AI Coding Agent，118k Star，MIT 协议 `#工具 #AI编程 #SDD #GitHub`\n- [BMAD](wiki/entities/bmad.md) — 重量级 SDD 平台，BMC 分析 → 架构 → 数据模型 → 代码生成全流程 `#工具 #AI编程 #SDD`\n- [ECC](wiki/entities/ecc.md) — Everything Claude Code，21.7 万 Star 的 Claude Code 最强插件合集 `#工具 #AI编程 #插件`\n- [MUX0](wiki/entities/mux0.md) — 专为 Claude Code 设计的开源 AI 编程终端，基于 Ghostty `#工具 #AI编程 #终端`\n- [MemPalace](wiki/entities/mempalace.md) — 开源 AI 记忆系统，55k Star，ChromaDB + 语义搜索，本地优先 `#工具 #记忆系统 #开源`\n- [Apache Burr](wiki/entities/apache-burr.md) — 状态机驱动的 Agent 框架，LangChain 替代方案 `#工具 #Agent框架 #状态机`\n- [PYTHIA](wiki/entities/pythia.md) — 本地无密钥 AI Agent 工具，融合 Osiris 实时情报与 MiroFish 多智能体预测，Ollama 运行 `#工具 #AI-Agent #实时感知 #开源情报`\n- [UZI-Skill](wiki/entities/uzi-skill.md) — 开源 AI 股票深度分析插件，22维×66评委×22种机构方法，支持 A/港股/美股 `#工具 #股票分析 #投资 #金融`\n- [Comet](wiki/entities/comet.md) — 基于 OpenSpec + Superpowers 的自动化 Spec Skills 编排工具 `#工具 #AI编程 #自动化`\n- [RAG-Anything](wiki/entities/rag-anything.md) — 港大多模态 RAG，知识图谱统一处理文本/图像/表格 `#工具 #RAG #多模态`\n- [cc-switch](wiki/entities/cc-switch.md) — 跨平台 AI 助手桌面工具，104k Star，Rust + Tauri `#工具 #桌面工具 #跨平台`\n- [CC-Connect](wiki/entities/cc-connect.md) — 飞书/微信中调用 AI Agent 编程的桥接工具 `#工具 #AI-Agent #飞书`\n- [GSD](wiki/entities/gsd.md) — Get Shit Done，面向大型项目的上下文工程系统，解决 Context Rot `#工具 #上下文工程 #大型项目`\n- [FlashRT](wiki/entities/flashrt.md) — 高性能实时推理引擎，小批量低延迟，面向具身智能 `#工具 #推理引擎 #低延迟`\n- [SeedER](wiki/entities/seeder.md) — 强化学习驱动的知识图谱结构化检索系统 `#工具 #知识检索 #强化学习`\n- [Huashu Design](wiki/entities/huashu-design.md) — 花叔开源 Claude Code 设计 Skill，19k Star `#工具 #设计 #UI`\n- [khazix-skills](wiki/entities/khazix-skills.md) — 数字生命卡兹克开源 AI Skills 合集 `#工具 #AI编程 #Skills`\n- [Understand Anything](wiki/entities/understand-anything.md) — 代码库 → 交互式知识图谱转换工具 `#工具 #代码分析 #知识图谱`\n- [html-video](wiki/entities/html-video.md) — 把 HTML + CSS 通过 AI Agent 直接渲染为 MP4 视频，本地运行，插件化引擎，21 模板 `#工具 #视频生成 #AI编程`\n- [FuseAI](wiki/entities/fuseai.md) — 中山大学/腾讯发起的开源 LLM 知识融合研究社区 `#模型融合 #开源 #研究`\n- [InfiFusion](wiki/entities/infifusion.md) — Reallm-Labs 的统一 LLM 融合框架，首个融合 4 个 14B+ 异构模型 `#模型融合 #知识蒸馏 #LLM融合`\n- [mergekit](wiki/entities/mergekit.md) — HuggingFace 流行的模型合并工具，SLERP/TIES/DARE 无需 GPU 即可合并 `#模型融合 #工具 #模型合并`\n\n## 概念\n<!-- 技术概念、方法论、理论 -->\n\n- [模型融合](wiki/concepts/model-fusion.md) — 将多个 LLM 通过参数合并或知识蒸馏统一为一个模型，无需从零训练 `#模型融合 #LLM #融合方法`\n- [模型微调](wiki/concepts/model-finetuning.md) — 在预训练大模型上继续训练使之适配下游任务，含 Full Fine-tuning / PEFT / LoRA / QLoRA 等变体 `#训练方法 #LLM`\n- [MCP 模型上下文协议](wiki/concepts/mcp-model-context-protocol.md) — Anthropic 提出的开放协议，标准化 AI 模型与外部工具之间的通信接口，已获 ChatGPT/VS Code/Cursor 等广泛支持 `#协议 #Agent #标准化 #工具集成`\n- [AI Agent](wiki/concepts/ai-agent.md) — 具备自主感知-规划-行动能力的 AI 系统，支持工具使用、记忆管理和多步推理 `#Agent #自动化`\n- [RAG 检索增强生成](wiki/concepts/rag-retrieval-augmented-generation.md) — 检索 + 生成的混合架构，已从独立系统演进为 Agent 组件 `#检索 #知识库 #LLM #Agentic`\n- [红绿回归测试](wiki/concepts/red-green-regression-testing.md) — AI 自动执行红-绿-回归三道测试关卡，通过后才交付代码的验证管道 `#测试 #AI编程 #自动化`\n- [AI 编程](wiki/concepts/ai-programming.md) — LLM 辅助/自动完成代码生成、测试、审查、修复，从补全→自主生成→自验证三个发展阶段 `#AI编程 #开发工具`\n- [混合专家模型 MoE](wiki/concepts/moe-mixture-of-experts.md) — 稀疏激活的神经网络架构，每次推理只激活少数专家，同计算量下大幅扩大模型容量 `#模型架构 #稀疏计算`\n- [测试驱动开发 TDD](wiki/concepts/test-driven-development.md) — 先写测试再写代码的软件开发方法论，红-绿-重构循环 `#测试 #软件工程`\n- [统一开发范式](wiki/concepts/dev-flow-unified-paradigm.md) — 融合 OpenSpec 规范驱动和 Superpowers 纪律驱动的五阶段开发流程 `#开发范式 #AI编程 #规范驱动`\n- [自改进AI Agent](wiki/concepts/self-improving-agent.md) — AI Agent 自动记录学习和错误经验，持续自我修复并将重要知识提升为项目记忆 `#AI-Agent #自我修复 #自动化`\n- [Spec驱动开发 SDD](wiki/concepts/spec-driven-development.md) — 人写规格说明书 → AI 写代码+测试+验证，人类从"写代码"转为"审 Spec" `#AI编程 #SDD #开发范式`\n- [Agent记忆系统](wiki/concepts/agent-memory-system.md) — L0-L3 四层记忆架构，从短期上下文到持久语义记忆 `#AI-Agent #记忆系统 #自进化`\n- [本体论 Ontology](wiki/concepts/ontology.md) — 知识工程中形式化描述领域概念及其关系的框架，AI 时代重新变得关键 `#知识建模 #语义网 #Ontology`\n- [FDE](wiki/concepts/fde.md) — Forward Deployed Engineer，工程师深入客户现场的 AI 落地范式 `#AI落地 #PMF #方法论`\n- [Prompt Caching](wiki/concepts/prompt-caching.md) — AI Agent 工程关键优化技术，缓存系统提示词降低延迟和成本 `#性能优化 #Agent工程 #Claude-Code`\n- [Loop Engineering](wiki/concepts/loop-engineering.md) — 设计 Agent 自主执行循环的方法论，替代单次 Prompt 工程 `#AI-Agent #自动化 #方法论`\n- [Agent工具选择问题](wiki/concepts/agent-tool-selection.md) — 当 Agent 拥有过多 Tool 时的选择困难与解决方向 `#AI-Agent #Tool管理`\n- [AI 网关与模型路由](wiki/concepts/ai-gateway.md) — 聚合多模型提供商，统一 API 接入与自动路由，零成本调用 237 个 AI 免费额度 `#API网关 #模型路由 #成本优化 #Agent基础设施`\n- [上下文工程](wiki/concepts/context-engineering.md) — 系统化管理 AI Agent 在大型项目中的代码上下文，解决 Context Rot `#AI编程 #上下文管理`\n- [OKF 开放知识格式](wiki/concepts/okf-open-knowledge-format.md) — Google 提出的 AI Agent 可消费结构化知识标准 `#知识格式 #Google #AI-Agent`\n\n## 主题\n<!-- 技术领域、研究方向、行业动态 -->\n\n- [Unsloth — 消费级 GPU 高效微调大模型](wiki/topics/unsloth-efficient-llm-finetuning.md) — 开源框架让普通显卡也能微调 7B 级大模型，2026 年推出无代码 Web UI `#模型训练 #微调 #开源`\n- [Firecrawl — AI 原生的网页数据采集引擎](wiki/topics/firecrawl-web-scraping.md) — 将任意网站转为 LLM 可消费的结构化数据，配套 MCP Server 接入 Agent 生态 `#网页爬虫 #MCP #AI`\n- [Snail AI — Java 生态的企业级 AI Agent 平台](wiki/topics/snail-ai-agent-platform.md) — 让 Java 开发者不需 Python 就能构建多模型管理、RAG、长时记忆的 Agent 应用 `#AI项目 #Java #Agent`\n- [OpenSquilla — AI 代码生成的自验证与自修复](wiki/topics/opensquilla-ai-self-verification.md) — AI 编程从"生成代码"进化到"验证代码"，红绿回归闭环实现可审计的代码交付 `#AI编程 #测试驱动 #自动化`\n- [万象AI分析平台](wiki/topics/wanxiang-ai-analysis.md) — 基于 MCP 协议的智能数据分析平台，集成流量地图、交叉分析、AI圈人等全链路能力 `#AI分析 #数据平台 #MCP`\n- [AI Agent 技术全景报告 2026](wiki/topics/ai-agent-landscape-2026.md) — 六大趋势 × 架构范式 × 框架对比，基于 50+ 篇技术资料的系统梳理 `#AI-Agent #技术全景 #2026`\n- [Karpathy AI编码方法论](wiki/topics/karpathy-ai-coding-methodology.md) — 65行 CLAUDE.md 定义的四条铁律：先想再写、简洁第一、手术式修改、目标驱动 `#AI编程 #方法论 #Karpathy`\n- [AI Native 研发体系](wiki/topics/ai-native-dev-system.md) — 以 AI 为核心重新设计软件开发全流程，从辅助工具到 Agent 自主执行 `#AI-Native #研发体系 #软件2.0`\n- [Agentic RAG](wiki/topics/agentic-rag.md) — RAG 从独立系统降级为 Agent 工具箱中的组件，由 Agent 自主决定检索策略 `#RAG #Agent #Agentic-RAG`\n- [StarRocks 跨数据源查询方案](wiki/topics/starrocks-cross-data-source-query.md) — StarRocks Catalog 方案实现 Hive/Iceberg/MySQL/ES 等跨源 JOIN 查询，v3.0+ 推荐 `#StarRocks #数据查询 #跨数据源`\n- [StarRocks Catalog 数据加速策略](wiki/topics/starrocks-catalog-acceleration-strategy.md) — 同构(SR→SR)与异构(MySQL→SR) Catalog 的数据加速策略深度分析与选型推荐 `#StarRocks #数据加速 #Catalog #物化视图`\n- [RAG 评估体系与方法论](wiki/topics/rag-evaluation.md) — 评估三维度、LLM-as-Judge / RAGAS / DeepEval 框架对比、论文支撑 `#RAG #评估 #LLM-as-Judge`\n\n## 综述\n<!-- 多源对比、综合分析、阶段性总结 -->\n\n- [AI编程Agent框架对比分析](wiki/synthesis/agent-framework-comparison.md) — 从规划、记忆、架构、创新技术四个维度对比 Claude Code / Gemini / Cursor 等主流编程 Agent `#AI编程 #Agent #对比分析`\n- [2026上半年万象项目复盘](wiki/synthesis/2026-h1-wanxiang-review.md) — 万象 AI Agent 能力建设、智能圈人、ChatBI、标签治理四大方向复盘 `#复盘 #万象 #2026`\n- [BMAD vs OpenSpec：航母与特种兵](wiki/synthesis/bmad-vs-openspec.md) — AI 驱动开发两大赛道的多维度对比与选型建议 `#SDD #对比分析 #BMAD #OpenSpec`\n- [AI增强开发三件套](wiki/synthesis/ai-dev-trifecta.md) — OpenSpec + Superpowers + gstack 把 Vibe Coding 拉回工程交付 `#AI编程 #工程交付 #三件套`\n- [LLM 模型融合深度报告](wiki/synthesis/model-fusion-deep-report.md) — 从原理、技术路线、实现方式、评测四维度系统性梳理模型融合全貌 `#模型融合 #综述 #评测`\n\n## 标签\n\n- 📑 [标签索引](tags-index.md) — 按标签浏览分类，共 210+ 个标签\n\n---\n\n_最后更新于 2026-07-07_ | 全站 73 页面，覆盖 AI Agent、AI 编程、RAG、知识图谱、SDD、知识管理方法论、模型融合等核心领域\n',Fh=`# LLM Wiki — 操作日志

> 纯追加，不修改历史。记录每次 ingest / query / lint / update。

---

## [2026-07-06] ingest | AI Agent 概念补充 + PYTHIA / UZI-Skill / AI 网关
- 新增实体页：[[PYTHIA]]（本地无密钥实时感知 Agent）、[[UZI-Skill]]（股票深度分析插件）
- 新增概念页：[[AI 网关与模型路由]]（聚合多模型免费额度，自动路由与 fallback）
- 更新概念页：[[AI Agent]]（补充反应式/深思型/学习型分类体系 + 关键能力维度 + 2026 趋势）
- 更新主题页：[[AI Agent 技术全景报告 2026]]（新增本地 Agent 与实时感知趋势）
- 保存3份原始素材到 raw/
- 全站累计：31 实体 + 21 概念 + 11 主题 + 5 综述 = 69 页面
- 更新 index.md

## [2026-07-07] ingest | Spec Kit / html-video / StarRocks 跨源查询
- 新增实体页：[[Spec Kit]]（GitHub 官方 SDD 工具包，118k Star）、[[html-video]]（HTML 转 MP4 视频工具）
- 新增主题页：[[StarRocks 跨数据源查询方案]]（Catalog 方案实现跨源 JOIN，587 行深度调研）
- 更新实体页：[[Claude Code]]（新增隐私与遥测配置章节）
- 全站累计：30 实体 + 21 概念 + 12 主题 + 5 综述 = 72 页面
- 更新 index.md

## [2026-07-07] update | Claude Code 隐私配置 + Codex CLI 实体
- 更新实体页：[[Claude Code]]（完整补充 10+ 隐私环境变量配置）
- 新增实体页：[[Codex CLI]]（GitHub 开源终端 AI 编程工具 + 隐私配置）
- 来源：微信公众号「灵感回路」
- 全站累计：31 实体 + 21 概念 + 12 主题 + 5 综述 = 73 页面
- 更新 index.md

## [2026-07-06] update | MCP 概念页 — 官方文档更新
- 保存原始素材到 raw/mcp-official-intro.md
- 更新概念页：[[MCP 模型上下文协议]]（补充官方定义

## [2026-07-04] init | Wiki 初始化
- 创建项目骨架
- 初始化目录结构和模板
- 编写 Schema (CLAUDE.md)

## [2026-07-04] ingest | 能能的知识库 — 首批 4 条内容摄入
- 来源：Notion 数据库「📚 能能的知识库」，通过 MCP 自动化导入
- 创建 4 个主题摘要页：Unsloth、Firecrawl、Snail AI、OpenSquilla
- 创建 4 个实体页：同一组工具/项目
- 创建 8 个概念页：模型微调、MCP、AI Agent、RAG、红绿回归测试、AI 编程、MoE、TDD
- 更新全站索引 index.md

## [2026-07-04] ingest | 第二批内容摄入 — 从 Notion 工作区深度提取
- 来源：Notion 工作区非数据库页面（Quick Note / agentic / llm / 开发 等节点树）
- 创建 2 个实体页：AutoLink、Claude Code
- 创建 2 个概念页：统一开发范式（OpenSpec × Superpowers）、自改进AI Agent
- 创建 1 个主题页：万象AI分析平台
- 创建 2 个综述页：AI编程Agent框架对比分析、2026上半年万象项目复盘
- 全站总计：6 实体 + 10 概念 + 5 主题 + 2 综述 = 23 页面
- 更新 index.md

## [2026-07-04] ingest | 第三批内容摄入 — Notion 数据库 59 条全量导入
- 来源：Notion 数据库「📚 能能的知识库」全部 59 条记录
- 补齐前 3 条数据库属性（主题/标签/摘要/状态等）
- 创建 22 个实体页：PageAgent、LightRAG、OpenClaw、Hermes Agent、Superpowers、gstack、OpenSpec、BMAD、ECC、MUX0、MemPalace、Apache Burr、Comet、RAG-Anything、cc-switch、CC-Connect、GSD、FlashRT、SeedER、Huashu Design、khazix-skills、Understand Anything
- 创建 9 个概念页：Spec驱动开发、Agent记忆系统、本体论、FDE、Prompt Caching、Loop Engineering、Agent工具选择、上下文工程、OKF开放知识格式
- 创建 3 个主题页：AI Agent 技术全景报告 2026、Karpathy AI编码方法论、AI Native 研发体系
- 创建 2 个综述页：BMAD vs OpenSpec对比、AI增强开发三件套
- 全站总计：28 实体 + 19 概念 + 8 主题 + 4 综述 = 59 页面
- 更新 index.md

## [2026-07-05] setup | OpenClaw 集成 — 自动化同步技能就绪
- 克隆仓库到 OpenClaw 工作区
- 创建 llm-wiki skill（skills/llm-wiki/SKILL.md）
- 设定规则：更新 Notion 时同步更新 llm-wiki 并提交 GitHub
- 工作流：按 CLAUDE.md 规范执行 Ingest → 更新页面 → commit & push

## [2026-07-05] ingest | Karpathy LLM Wiki 方法论 Gist
- 来源：https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
- 保存原始素材到 raw/karpathy-llm-wiki-methodology.md
- 创建主题页：LLM Wiki 方法论（三层架构、三大工作流、RAG vs Wiki 对比）
- 更新 Karpathy AI编码方法论页：添加相关主题链接
- 全站总计：28 实体 + 19 概念 + 9 主题 + 4 综述 = 60 页面

## [2026-07-05] ingest | HuggingFace 模型融合技术生态
- 来源：HuggingFace 官网 & arXiv 论文
- 创建概念页「模型融合」涵盖参数合并（SLERP/TIES/DARE/SCE）和知识蒸馏（InfiFusion/FuseLLM/FuseChat/FuseO1）两条技术路线
- 创建 3 个实体页：FuseAI、InfiFusion、mergekit
- 全站累计：29 实体 + 20 概念 + 9 主题 + 4 综述 = 63 页面
- 更新 index.md
- 更新 index.md

## [2026-07-05] ingest | LLM 模型融合深度报告（综述）
- 来源：arXiv 论文 (TIES/DARE/InfiFusion/FuseChat) + HuggingFace 博客 + NVIDIA 技术文章
- 创建综述页「LLM 模型融合深度报告」：原理、参数合并 vs 知识蒸馏两条技术路线、实现方式、评测对比、选型指南
- 全站累计：29 实体 + 20 概念 + 9 主题 + 5 综述 = 64 页面
- 更新 index.md

## [2026-07-05] ingest | Agentic RAG — RAG 从独立系统到 Agent 组件
- 来源：微信公众号"算法狗"《RAG没死，它藏在了Agent架构底下》
- 保存原始素材到 raw/rag-as-agent-component.md
- 创建主题页「Agentic RAG」：RAG 从独立系统降级为 Agent 组件，Agentic RAG 架构、对比传统 RAG
- 更新 RAG 概念页：新增 Agentic RAG 章节
- 全站累计：29 实体 + 20 概念 + 10 主题 + 5 综述 = 65 页面
- 更新 index.md

## [2026-07-05] ingest | RAG 评估体系深度分析
- 来源：G-Eval (arXiv:2303.16634) + LLM-as-Judge (arXiv:2306.05685) + RAGAS (arXiv:2309.15217) + 多篇综述
- 创建主题页「RAG 评估体系与方法论」：评估三维度、4 种方法、RAGAS vs DeepEval 对比、10 篇论文清单
- 更新 RAG 概念页：新增评估相关链接
- 全站累计：29 实体 + 20 概念 + 11 主题 + 5 综述 = 66 页面
- 更新 index.md

## [2026-07-08] feat | 增加标签云功能

- wiki-viewer: 侧边栏增加标签云，点击标签按标签筛选文档
- wiki-viewer: 页面标签可点击，点击后自动按标签过滤
- wiki: 新增 tags-index.md 标签索引页（自动生成）
- scripts: 新增 regenerate-tags.sh 脚本

## [2026-07-08] ingest | StarRocks Catalog 数据加速策略分析

- 新增 wiki/topics/starrocks-catalog-acceleration-strategy.md
- 分析同构(SR→SR)与异构(MySQL→SR) Catalog 的加速方案对比
- 更新 index.md 和 tags-index.md
`,Nh=`---
type: synthesis
tags: [万象, 复盘, 2026, AI Agent, 数据平台]
created: 2026-07-04
updated: 2026-07-04
---

# 2026上半年万象项目复盘

## 项目整体概览

2026 上半年万象项目主要围绕 **AI Agent 能力建设、智能圈人、万象AI分析（ChatBI/Pandas）、标签治理与渗透推广** 四大方向推进，同时涉及个推下线标签清理、模型切换、架构升级等基础工作。

## 各方向完成情况

### 1. AI Agent 能力建设（完成度 80%）
- **已上线**：Agent 流式输出、subAgent 能力、圈选标签能力、AI 访问日志、Agent 模型切换为公司模型、Skill 推广上线、AutoLink Agent 构建
- **进行中**：Token 使用量优化

### 2. 智能圈人（完成度 85%）
- **已完成**：人群规则生成 Agent 技术方案、一键生成交互修改、品牌切换标签查找问题解决
- **进行中**：自动生成人群规则、多圈选能力集成

### 3. ChatBI/Pandas 分析（完成度 75%）
- **已上线**：ChatBI-OC、ailab 模型测试、SSE 修复、限流控制、用户流程编排方案、Excel 多文件支持、富文本 HTML
- **进行中**：召回置信度优化、提示词版本管理、SQL 生成能力

### 4. 标签治理与渗透（完成度 90%）
- **已完成**：个推下线标签清理、标签质量监控、标签使用渗透率提升

## 关键成果

- 基于 MCP 协议构建了 AI 分析工具调用链
- AutoLink Schema Linking 工具实现自然语言到数据库的智能关联
- 测试驱动开发（红绿回归）在 Agent 开发中验证有效

## 相关概念
- [[AI Agent]]
- [[MCP 模型上下文协议]]
- [[万象AI分析平台]]
- [[AutoLink]]
`,zh=`---
type: synthesis
tags: [AI编程, Agent, Claude Code, Gemini, Cursor, 对比分析]
created: 2026-07-04
updated: 2026-07-04
---

# AI编程Agent框架对比分析

## 概述

从规划能力、记忆能力、技术架构、创新技术四个维度对主流 AI 编程 Agent 进行系统分析，包括 Claude Code、Gemini、Cursor 等。

## 分析框架

### 系统角色设置
- **运行时机**：会话初始化时设置
- **优先级**：最高，是所有后续交互的基础
- **持续性**：整个会话期间持续有效
- **作用**：身份定义、行为规范、安全约束、工具使用指导

### 规划能力
- 任务分解与编排
- 子任务并行执行
- 动态调整计划

### 记忆能力
- 项目级记忆（CLAUDE.md / Rules）
- 会话级记忆
- 跨会话经验积累

### 技术架构
- SubAgent 机制
- 工具调用引擎
- 文件编辑策略

## 代表框架

- **Claude Code**：多 Agent 分层架构，系统提示词驱动，支持 subAgent 委派任务
- **Cursor**：IDE 原生集成，实时代码补全 + 上下文感知
- **Gemini CLI**：Google 生态集成，多模态能力

## 相关概念
- [[AI编程]]
- [[AI Agent]]
- [[MCP 模型上下文协议]]
`,Bh=`---
type: synthesis
tags: [AI增强开发, OpenSpec, Superpowers, gstack, 工程交付, Vibe Coding]
created: 2026-07-04
updated: 2026-07-04
---

# AI增强开发三件套：把Vibe Coding拉回工程交付

## 问题背景

"Vibe Coding"（随性编程）是 AI 编程的常见现象：开发者用自然语言描述需求，AI 生成代码，但没有规范、没有测试、没有交付标准。这种方式在小功能上很快，但在正式项目中不可维护。

## 三件套分工

\`\`\`
OpenSpec      → 规范驱动 → "做什么"   → 产出 Spec 文档
Superpowers   → 纪律驱动 → "怎么做"   → 约束执行流程
gstack        → 角色化执行 → "谁来做"  → 领域专家 Agent
\`\`\`

三者配合形成从需求到交付的完整闭环：
\`\`\`
Spec 定义 → Role 分配 → Skill 执行 → 验证 → 交付
(OpenSpec)  (gstack)   (Superpowers)  (TDD)
\`\`\`

## 为什么三件套有效

1. **OpenSpec 解决"说不清需求"**：人类用 Spec 而非模糊的自然语言描述需求
2. **Superpowers 解决"执行不规范"**：强制执行 TDD、代码审查、风格检查等纪律
3. **gstack 解决"啥都干的通才不行"**：不同任务用不同角色 Agent，每个角色有领域专长

## 实战效果

将 Vibe Coding（"帮我做个登录页面"）拉回工程交付（"这是 Spec，按前端专家角色，走 TDD 流程实现"），让 AI 编程从"玩具"变成"工具"。

## 相关实体
- [[OpenSpec]]
- [[Superpowers]]
- [[gstack]]

## 相关概念
- [[AI编程]]
- [[Spec驱动开发]]
- [[测试驱动开发 TDD]]
- [[统一开发范式]]
`,Gh=`---
type: synthesis
tags: [BMAD, OpenSpec, SDD, 规格驱动, AI编程, 对比分析]
created: 2026-07-04
updated: 2026-07-04
---

# BMAD vs OpenSpec：AI驱动开发的航母与特种兵

## 定位差异

- **BMAD**：航母级平台，提供从需求分析（BMC）到架构设计、数据建模、代码生成的完整闭环
- **OpenSpec**：特种兵式轻量工具，专注于 Spec → Execute → Verify 的核心链路

## 多维度对比

| 维度 | BMAD | OpenSpec |
|---|---|---|
| 定位 | 重量级 SDD 平台 | 轻量级 SDD 工具 |
| 工作流 | BMC 分析 → 架构 → 数据模型 → 实现 | Explore → Specify → Execute → Verify → Archive |
| 学习曲线 | 陡峭，需要系统学习 | 平缓，即开即用 |
| 集成度 | 高度集成，一站式 | 模块化，按需组合 |
| 适用场景 | 大型企业级项目 | 灵活的个人/团队项目 |
| 生态系统 | 独立完整 | 与 Superpowers + gstack 组合 |
| 灵活性 | 较低（受限于平台规范） | 高（自由组合 Skills） |
| 审计能力 | 强（全流程可追溯） | 中（核心链路可追溯） |

## 选型建议

- **选 BMAD**：大型组织、需要全流程管控、愿意投入学习成本
- **选 OpenSpec**：小团队/个人开发者、需要快速启动、已有 Skills 生态
- **组合使用**：BMAD 做顶层规划 + OpenSpec 做具体执行

## 相关实体
- [[BMAD]]
- [[OpenSpec]]

## 相关概念
- [[Spec驱动开发]]
- [[AI编程]]
`,jh=`---
type: synthesis
tags: [模型融合, LLM融合, 综述, 对比分析, 评估]
created: 2026-07-05
updated: 2026-07-05
related_sources: 6
---

# LLM 模型融合深度报告：原理、路线、实现与评测

## 概述

模型融合（Model Fusion / Model Merging）是 LLM 领域 2024-2025 年间发展最快的技术方向之一。其核心思想很简单：**与其从头训练一个新模型，不如把多个已经训练好的模型"合体"**。这使得在几乎没有额外训练成本的情况下，创造出性能更强的模型成为可能。

本报告从原理、技术路线、实现方式、评测四个维度进行系统性梳理。

---

## 一、背景与动机

### 为什么需要模型融合？

| 挑战 | 融合方案 |
|------|---------|
| 训练一个 SOTA 模型需数百万 GPU 小时 | 融合只需几小时到几天 |
| 不同模型有不同专长（数学、代码、对话） | 融合可整合多模型能力于一身 |
| 微调多个模型成本高，部署多个模型成本更高 | 融合后单模型推理，不增加部署成本 |
| 模型集成（Ensemble）推理开销翻倍 | 融合后推理速度与单模型一致 |

### 核心洞察

研究者在实践中发现一个反直觉的现象：**多个独立微调的模型在参数空间中存在显著的互补性**。这意味着它们在权重层面的简单组合，往往能保留甚至超过各自的独立能力。这与传统机器学习中"模型集成"的思想一脉相承，但效果更惊人——因为是在参数空间而非输出空间进行融合。

---

## 二、核心技术路线

模型融合技术主要分为两大类路线，它们在原理、成本和适用场景上有着本质区别。

### 路线一：参数空间合并（Parameter-Space Merging）

**无需训练**，直接在权重层面将多个模型合并为一。

\`\`\`
模型A权重 + 模型B权重 → 合并算法 → 融合模型（单模型推理）
\`\`\`

#### 核心挑战

参数合并面临两个根本问题：
1. **参数冗余**：微调后的大部分参数变化极小（delta 参数的 90%+ 是冗余的）
2. **符号冲突**：模型A想让某个参数增加，模型B想让同一参数减少，直接平均会相互抵消

#### 主要方法

| 方法 | 论文 | 年份 | 核心思想 | 多模型支持 | 是否需GPU |
|------|------|------|---------|-----------|----------|
| **Linear** | Model Soups (Wortsman et al.) | 2022 | 直接加权平均 | ✅ | ❌ |
| **Task Arithmetic** | Task Arithmetic (Ilharco et al.) | 2022 | 用任务向量做算术运算 | ✅ | ❌ |
| **SLERP** | — | 2023 | 球面线性插值，保持几何特性 | ❌（仅2模型） | ❌ |
| **TIES-Merging** | TIES-Merging (Yadav et al.) | 2023 | Trim+Elect+Merge，解决参数冲突 | ✅ | ❌ |
| **DARE** | Drop And REscale (Yu et al.) | 2023 | 随机丢弃99% delta参数后重缩放 | ✅（作为插件） | ❌ |
| **SCE** | FuseChat (Wan et al.) | 2024 | Select+Calculate+Erase，矩阵级精细融合 | ✅ | ❌ |
| **Frankenmerge** | — | 2024 | 跨模型层级别的非标准合并（混合不同层） | ❌ | ❌ |

##### SLERP（球面线性插值）

最流行、最简单的合并方法。将两个模型的权重向量视为球面上的点，沿着球面弧线进行插值。

**数学原理**：
\`\`\`
1. 将权重向量归一化为单位长度
2. 用点积计算两向量夹角 θ
3. 如果 θ≈0（几乎共线），退化到线性插值
4. 否则：merged = sin((1-t)θ)/sin(θ) × v1 + sin(tθ)/sin(θ) × v2
\`\`\`

**核心优势**：在高维空间中保持几何特性，避免线性插值导致的幅值衰减。

**局限**：只能合并两个模型，但可以通过层级嵌套实现多模型合并。

##### TIES-Merging

三步法解决参数冲突问题：

1. **Trim（修剪）**：保留 delta 参数中 top-k%（通常 20%）最显著的参数，其余重置为 0
2. **Elect Sign（选举符号）**：统计所有模型中该参数的符号方向，以累计幅度最大的方向为统一符号
3. **Disjoint Merge（不相交合并）**：仅保留与统一符号一致的参数值做平均，排除冲突参数

**评测结果**：在 NLP 和视觉任务上比 Task Arithmetic 平均提升 2.3%（in-domain）和 1.0-4.4%（out-of-domain）。

##### DARE（Drop And REscale）

最"暴力"的方法，核心发现是：**delta 参数中高达 99% 是冗余的**。

\`\`\`
1. 用伯努利分布随机丢弃 p% 的 delta 参数（p 可达 0.99）
2. 剩余参数缩放 1/(1-p) 倍以保持期望
3. 将稀疏化的 delta 加回基础模型
\`\`\`

**重要特点**：DARE 通常作为**插件**与 TIES 搭配使用（即 DARE-TIES），先随机稀疏化再解决符号冲突。这种组合是当前性能最好的参数合并方案之一。

##### SCE（Select-Calculate-Erase）

FuseAI 社区的核⼼算法，比 TIES 更进一步：

1. **Select**：选择方差最大的 top-k% 参数元素
2. **Calculate**：基于选中元素平方和计算每个模型的合并系数
3. **Erase**：过滤"少数方向"的参数冲突

**独特优势**：矩阵级别的精细控制，无需额外训练。

### 路线二：知识蒸馏融合（Knowledge Fusion / Distillation）

**需要轻量级训练**（几小时到几天），通过蒸馏将多个源模型的知识迁移到目标模型。

\`\`\`
源模型A ──┐
源模型B ──┤── 蒸馏训练 ──→ 目标模型（可不同参数量、不同架构）
源模型C ──┘
\`\`\`

#### 主要方法

| 方法 | 训练需求 | 模型架构 | 核心创新 |
|------|---------|---------|---------|
| **FuseLLM** | ~几小时 | 支持异构 | 统计对齐解决不同 tokenizer 问题 |
| **FuseChat** | ~1天 | 支持异构 | SFT + DPO 两阶段偏好融合 |
| **InfiFusion** | 160 GPU小时 | 支持异构 | ULD + Top-K + Logits Standardization |
| **FuseO1** | — | 支持异构 | Long-Long / Long-Short 推理融合 |

##### FuseLLM（ICLR 2024）

首个将**不同架构**的 LLM 进行知识融合的工作。

**关键创新**：统计对齐方法（Statistics-based Token Alignment）——不同模型使用不同 tokenizer，词表没有天然对齐关系。FuseLLM 通过统计 token 在大量语料上的共现关系，建立跨模型的对齐映射。

**实验**：融合 Llama-2-7B、OpenLLaMA-7B、MPT-7B 三个异构模型 → 融合模型超越所有源模型。

##### FuseChat（SFT + DPO 两阶段）

专注于聊天模型的融合，最实用的方案之一。

**第一阶段 - SFT 对齐**：用源模型的输出构造监督微调数据，消除目标模型与源模型之间的分布差异。

**第二阶段 - DPO 对齐**：用源模型对同一问题的不同回答构建偏好对（好/坏），通过直接偏好优化（DPO）学习源模型的偏好。

**FuseChat-3.0 成果**：
- 源模型：Gemma-2-27B + Mistral-Large-2407 + Qwen-2.5-72B + Llama-3.1-70B
- 目标模型：Llama-3.1-8B / Gemma-2-9B / Qwen-2.5-7B / Llama-3.2-3B / Llama-3.2-1B
- 结果：AlpacaEval-2 / Arena-Hard 达到 8B 级别 SOTA

##### InfiFusion（ULD + Top-K + Logits Standardization）

当前最先进的蒸馏融合框架，由 Reallm-Labs 提出。

**核心创新**：
1. **Universal Logit Distillation (ULD)** — 统一 logits 蒸馏框架，不受模型架构差异影响
2. **Top-K Selection** — 只取 logits 分布中置信度最高的 K 个 token 参与蒸馏，过滤噪声
3. **Logits Standardization** — 不同模型的 logits 分布标准化后再参与蒸馏，解决量纲不一致问题

**两种融合策略**：
- **InfiFusion_p（Pairwise）**：逐个源模型分别蒸馏到 pivot 模型，然后合并
- **InfiFusion_u（Unified）**：所有源模型同时蒸馏到 pivot 模型

**训练数据**：130K 条（52K 通用推理 + 39K 数学 + 39K 代码）

**效率**：仅 160 H800 GPU 小时，极低成本。

##### FuseO1-Preview（推理能力融合）

专注于 System-II 推理能力的融合，2025 年 1 月发布。

**两种策略**：
1. **Long-Long 推理融合**：融合多个 Long-CoT 推理模型（如 DeepSeek-R1 + QwQ + SkyT1）→ AIME24 74.0 分（接近 OpenAI o1 的 79.2）
2. **Long-Short 推理融合**：Long-CoT 与 Short-CoT 模型融合 → 同时具备两种推理模式

---

## 三、技术路线对比

### 总览对比

| 维度 | 参数空间合并 | 知识蒸馏融合 |
|------|------------|------------|
| **训练需求** | 无需训练 | 需轻量训练（几小时~几天） |
| **硬件要求** | CPU only | GPU（蒸馏需要模型推理） |
| **模型架构要求** | 通常需同架构 | 支持异构架构 |
| **模型大小** | 与源模型一致 | 目标模型可更小（如 70B→8B） |
| **性能上限** | 受源模型组合限制 | 可超越源模型（蒸馏提炼） |
| **部署成本** | 与源模型相同 | 可大幅降低 |
| **可解释性** | 较低（权重层面的黑箱） | 较低 |
| **稳定性** | 偶有性能崩塌 | 较稳定 |

### 适用场景

\`\`\`
参数空间合并 → 快速尝鲜、零成本提升、已有同架构模型
                     │
知识蒸馏融合 → 需要压缩模型、异构模型整合、追求极致性能
                     │
混合方案(DARE-TIES) → 当前社区最流行，兼顾简单与效果
\`\`\`

---

## 四、实现方式

### mergekit 工具链（参数合并）

HuggingFace 生态中最流行的合并工具，由 Charles Goddard 维护。

**安装与使用**：
\`\`\`bash
pip install mergekit
mergekit-yaml config.yml output-model
\`\`\`

**核心配置**（以 DARE-TIES 为例）：
\`\`\`yaml
models:
  - model: base-model  # 基础模型（未微调的版本）
  - model: model-a
    parameters:
      density: 0.5     # 保留 50% 的 delta 参数
      weight: 0.5      # 权重系数
  - model: model-b
    parameters:
      density: 0.5
      weight: 0.3
merge_method: dare_ties
base_model: base-model
parameters:
  normalize: true
dtype: bfloat16
\`\`\`

**参数调试要点**：
- \`density\`（密度）：保留的 delta 参数比例，0.1~0.9，通常 0.5 左右效果较好
- \`weight\`（权重）：每个模型在融合中的贡献比例，合计不一定需要 = 1
- \`normalize\`：是否自动归一化权重
- 不同层类型（self_attn vs mlp）可使用不同的插值系数，需实验调优

### 社区自动化工具

- **Automerger**（HuggingFace Space）— 自动从 Open LLM Leaderboard Top-20 中随机选两个模型合并，自动评估
- **LazyMergekit**（Colab 脚本）— 一键式模型合并环境
- **MergeKit GUI** — 参数合并的 Web 界面

### 蒸馏融合实现（以 FuseChat 为例）

\`\`\`python
# 第一阶段：SFT 构建训练数据
for each source_model:
    for each prompt in training_set:
        response = source_model.generate(prompt)
        training_data.append((prompt, response))

# 在目标模型上 SFT
trainer = SFTTrainer(model=target_model, train_dataset=training_data)
trainer.train()

# 第二阶段：DPO 构建偏好数据
for each prompt:
    good = source_model_A.generate(prompt)
    bad  = source_model_B.generate(prompt)
    preference_data.append((prompt, good, bad))

# 在目标模型上 DPO
trainer = DPOTrainer(model=target_model_after_sft, train_dataset=preference_data)
trainer.train()
\`\`\`

---

## 五、评测体系

### 常用评测基准

| 基准 | 考查维度 | 说明 |
|------|---------|------|
| **TruthfulQA** | 真实性 | 检查模型是否会传播常见误解 |
| **BigBench** | 广泛推理 | 200+ 任务：自动分类、作者验证等 |
| **GPT4All** | 综合能力 | HellaSwag + WinoGrande + BoolQ 等综合 |
| **AGIEval** | 人类认知 | 数学测试、法律考试等人类水平认知 |
| **AlpacaEval 2.0** | 指令遵循 | 自动评估对指令的遵循程度 |
| **Arena-Hard** | 对话质量 | 与 GPT-4/Claude 的对比胜率 |
| **AIME 2024** | 高难度数学 | 竞赛级数学推理能力 |
| **SWE-bench** | 编程能力 | 真实 GitHub Issue 解决能力 |

### 参数合并评测结果（Automerger 数据）

基于 HuggingFace Automerger 对 110 个合并模型的统计分析（Kostis Gourgoulias, 2024）：

- **SLERP vs DARE-TIES**：SLERP 在右尾（最佳表现）略占优势，但差异不显著
- **TruthfulQA 与 GPT4All 呈负相关**（r≈-0.6）：越"真实"的模型在综合能力上反而可能越弱
- **BigBench 与其他基准相关性低**：独立维度，不能仅靠单一基准评估

### 蒸馏融合评测结果

**InfiFusion-14B**（11 个基准测试）：
- 超越 Qwen-2.5-14B-Instruct、Phi-4 等 SOTA 模型
- 在所有推理/编码/数学/指令遵循任务上表现一致

**FuseO1-Preview-32B**（AIME24）：
- 74.0 Pass@1（OpenAI o1-mini: 63.4, o1-preview: 44.6, o1: 79.2）
- 接近完整 o1 水平，远超其他开源方案

**FuseChat-3.0-8B**（AlpacaEval-2 / Arena-Hard）：
- 在 8B 参数级别达到 SOTA
- 接近 70B 级别模型的对话质量

---

## 六、选型指南

### 场景一：零成本快速提升模型性能

\`\`\`
推荐：SLERP 或 DARE-TIES
工具：mergekit
成本：0 美元（仅需 CPU）
时间：几分钟
条件：需要同架构模型（如两个 Mistral-7B 的微调版本）
\`\`\`

### 场景二：将多个大模型能力灌入小模型

\`\`\`
推荐：FuseChat-3.0 方案
工具：TRL (SFTTrainer + DPOTrainer)
成本：~100 GPU 小时
时间：1-2 天
特点：可以大幅降低推理成本
\`\`\`

### 场景三：融合不同架构的异构模型

\`\`\`
推荐：FuseLLM 或 InfiFusion
工具：自定义蒸馏训练
成本：160-500 GPU 小时
时间：1-7 天
特点：最灵活，但实现复杂度最高
\`\`\`

### 场景四：提升复杂推理能力（数学/编程）

\`\`\`
推荐：FuseO1 或 InfiFusion
特点：Long-CoT 推理融合效果最显著
注意：需要 CoT 数据集的蒸馏，训练成本较高
\`\`\`

---

## 七、关键发现与趋势

### 已证实的经验

1. **99% 的 delta 参数是冗余的**（DARE 发现）— 参数空间存在巨大压缩空间
2. **符号冲突是合并失败的主因**（TIES 发现）— 解决符号冲突后效果显著提升
3. **蒸馏融合通常优于参数合并** — 但成本增加，并非所有场景都值得
4. **同基础模型的微调版本合并效果最好** — 参数空间邻近度是成功的关键
5. **模型越大，合并效果越好** — 大模型的参数冗余度更高，DARE 在更大模型上效果更稳定

### 发展趋势

| 趋势 | 说明 |
|------|------|
| **自动化合并** | 自动搜索最优合并参数（权重、密度、层级别参数） |
| **可微分合并** | 将合并过程融入训练（Differentiable DARE-TIES） |
| **跨架构融合** | 不仅是参数空间，更关注功能层面的知识融合 |
| **推理策略融合** | 融合不同推理路径（Long-CoT + Short-CoT + Fast思考） |
| **多模态融合** | 文本、图像、代码等多模态模型的融合 |

### 未解决的问题

- **理论基础薄弱**：为什么参数合并有效？目前缺乏理论解释
- **反向链接缺失**：合并后的模型"忘掉"了什么能力？如何检测？
- **规模化规律不明**：融合更多模型（>4个）是否还能继续提升？
- **评估不完整**：缺乏安全、偏见、鲁棒性等维度的系统评测

---

## 八、总结

模型融合是当前 LLM 研究中最具"性价比"的方向之一。两条技术路线各有适用场景：

- **参数空间合并**适合快速原型、零成本提升，是社区最活跃的方向
- **知识蒸馏融合**适合模型压缩、异构模型整合、追求极致性能

两者并非互斥——在实际工程中，可以先参数合并快速验证，再用蒸馏融合进一步优化。随着工具的成熟（mergekit、FuseAI 生态），模型融合正在从"黑科技"变成每个开发者都可以使用的常规手段。

---

## 相关实体
- [[FuseAI]]
- [[InfiFusion]]
- [[mergekit]]

## 相关概念
- [[模型融合]]
- [[模型微调]]
- [[AI 编程]]

## 延展阅读
- [TIES-Merging Paper](https://arxiv.org/abs/2306.01708)
- [DARE Paper](https://arxiv.org/abs/2311.03099)
- [InfiFusion Paper](https://arxiv.org/abs/2501.02795)
- [Merge LLMs with mergekit](https://huggingface.co/blog/mlabonne/merge-models)
- [NVIDIA: Introduction to Model Merging](https://developer.nvidia.com/blog/an-introduction-to-model-merging-for-llms/)
- [Automerger Analysis](https://huggingface.co/blog/kgourgou/a-first-look-at-automerger-data)
`,Hh=`# 标签索引

> 按标签浏览 Wiki 页面，自动生成。

---

## 2026

- [2026上半年万象项目复盘](synthesis/2026-h1-wanxiang-review.md)
- [AI Agent 技术全景报告 2026](topics/ai-agent-landscape-2026.md)

## AI

- [AI Agent（智能体）](concepts/ai-agent.md)
- [AutoLink](entities/autolink.md)
- [Firecrawl](entities/firecrawl.md)
- [Firecrawl — AI 原生的网页数据采集引擎](topics/firecrawl-web-scraping.md)
- [MCP 模型上下文协议（Model Context Protocol）](concepts/mcp-model-context-protocol.md)
- [RAG 检索增强生成（Retrieval-Augmented Generation）](concepts/rag-retrieval-augmented-generation.md)

## AI Agent

- [2026上半年万象项目复盘](synthesis/2026-h1-wanxiang-review.md)
- [AI Agent 技术全景报告 2026](topics/ai-agent-landscape-2026.md)
- [Agent工具选择问题](concepts/agent-tool-selection.md)
- [Agent记忆系统](concepts/agent-memory-system.md)
- [CC-Connect](entities/cc-connect.md)
- [Comet](entities/comet.md)
- [Hermes Agent](entities/hermes-agent.md)
- [OKF 开放知识格式](concepts/okf-open-knowledge-format.md)
- [OpenClaw](entities/openclaw.md)
- [OpenSpec](entities/openspec.md)
- [PageAgent](entities/pageagent.md)
- [Snail AI](entities/snail-ai.md)
- [Snail AI — Java 生态的企业级 AI Agent 平台](topics/snail-ai-agent-platform.md)
- [自改进AI Agent](concepts/self-improving-agent.md)

## AI Native

- [AI Native 研发体系](topics/ai-native-dev-system.md)

## AI Skills

- [khazix-skills](entities/khazix-skills.md)

## AI-Agent

- [PYTHIA（本地 AI Agent 实时感知工具）](entities/pythia.md)
- [UZI-Skill（游资技能库）](entities/uzi-skill.md)

## AI分析

- [万象AI分析平台](topics/wanxiang-ai-analysis.md)

## AI助手

- [cc-switch](entities/cc-switch.md)

## AI增强开发

- [AI增强开发三件套：把Vibe Coding拉回工程交付](synthesis/ai-dev-trifecta.md)

## AI编程

- [AI 编程（AI Programming / AI Coding）](concepts/ai-programming.md)
- [AI编程Agent框架对比分析](synthesis/agent-framework-comparison.md)
- [BMAD](entities/bmad.md)
- [BMAD vs OpenSpec：AI驱动开发的航母与特种兵](synthesis/bmad-vs-openspec.md)
- [Claude Code](entities/claude-code.md)
- [Codex CLI](entities/codex-cli.md)
- [Comet](entities/comet.md)
- [ECC (Everything Claude Code)](entities/ecc.md)
- [GSD (Get Shit Done)](entities/gsd.md)
- [GitHub Spec Kit](entities/spec-kit.md)
- [Karpathy AI编码方法论](topics/karpathy-ai-coding-methodology.md)
- [Loop Engineering](concepts/loop-engineering.md)
- [MUX0](entities/mux0.md)
- [OpenSpec](entities/openspec.md)
- [OpenSquilla](entities/opensquilla.md)
- [OpenSquilla — AI 代码生成的自验证与自修复](topics/opensquilla-ai-self-verification.md)
- [Spec驱动开发 (SDD)](concepts/spec-driven-development.md)
- [Superpowers](entities/superpowers.md)
- [gstack](entities/gstack.md)
- [html-video](entities/html-video.md)
- [上下文工程 (Context Engineering)](concepts/context-engineering.md)
- [测试驱动开发（Test-Driven Development, TDD）](concepts/test-driven-development.md)
- [红绿回归测试（Red-Green-Regression Pipeline）](concepts/red-green-regression-testing.md)
- [统一开发范式 (OpenSpec × Superpowers)](concepts/dev-flow-unified-paradigm.md)

## AI落地

- [FDE (Forward Deployed Engineer)](concepts/fde.md)

## AI记忆

- [MemPalace](entities/mempalace.md)

## AI项目

- [Snail AI](entities/snail-ai.md)
- [Snail AI — Java 生态的企业级 AI Agent 平台](topics/snail-ai-agent-platform.md)

## API网关

- [AI 网关与模型路由](concepts/ai-gateway.md)

## Agent

- [AI Agent（智能体）](concepts/ai-agent.md)
- [AI编程Agent框架对比分析](synthesis/agent-framework-comparison.md)
- [Agentic RAG：RAG 从独立系统到 Agent 组件](topics/agentic-rag.md)
- [Claude Code](entities/claude-code.md)
- [Codex CLI](entities/codex-cli.md)
- [ECC (Everything Claude Code)](entities/ecc.md)
- [FDE (Forward Deployed Engineer)](concepts/fde.md)
- [Loop Engineering](concepts/loop-engineering.md)
- [MCP 模型上下文协议（Model Context Protocol）](concepts/mcp-model-context-protocol.md)
- [万象AI分析平台](topics/wanxiang-ai-analysis.md)
- [上下文工程 (Context Engineering)](concepts/context-engineering.md)

## Agent MGMT

- [Agent工具选择问题](concepts/agent-tool-selection.md)

## Agentic-RAG

- [Agentic RAG：RAG 从独立系统到 Agent 组件](topics/agentic-rag.md)

## Agent基础设施

- [AI 网关与模型路由](concepts/ai-gateway.md)

## Agent工程

- [Prompt Caching](concepts/prompt-caching.md)

## Agent架构

- [AI Agent 技术全景报告 2026](topics/ai-agent-landscape-2026.md)

## Agent框架

- [Apache Burr](entities/apache-burr.md)

## Agent行为规范

- [Karpathy AI编码方法论](topics/karpathy-ai-coding-methodology.md)

## Anthropic

- [Claude Code](entities/claude-code.md)

## Apache

- [Apache Burr](entities/apache-burr.md)

## BMAD

- [BMAD](entities/bmad.md)
- [BMAD vs OpenSpec：AI驱动开发的航母与特种兵](synthesis/bmad-vs-openspec.md)

## CLAUDE.md

- [Karpathy AI编码方法论](topics/karpathy-ai-coding-methodology.md)

## CLI

- [Claude Code](entities/claude-code.md)
- [Codex CLI](entities/codex-cli.md)

## Catalog

- [StarRocks Catalog 数据加速策略深度分析：同构 vs 异构](topics/starrocks-catalog-acceleration-strategy.md)

## ChatBI

- [万象AI分析平台](topics/wanxiang-ai-analysis.md)

## ChromaDB

- [MemPalace](entities/mempalace.md)

## Claude Code

- [AI编程Agent框架对比分析](synthesis/agent-framework-comparison.md)
- [CC-Connect](entities/cc-connect.md)
- [ECC (Everything Claude Code)](entities/ecc.md)
- [Huashu Design](entities/huashu-design.md)
- [MUX0](entities/mux0.md)
- [Prompt Caching](concepts/prompt-caching.md)
- [Superpowers](entities/superpowers.md)
- [Understand Anything](entities/understand-anything.md)
- [cc-switch](entities/cc-switch.md)
- [gstack](entities/gstack.md)
- [khazix-skills](entities/khazix-skills.md)

## Colocate Join

- [StarRocks Catalog 数据加速策略深度分析：同构 vs 异构](topics/starrocks-catalog-acceleration-strategy.md)

## Context Rot

- [上下文工程 (Context Engineering)](concepts/context-engineering.md)

## Cursor

- [AI编程Agent框架对比分析](synthesis/agent-framework-comparison.md)

## Data Cache

- [StarRocks Catalog 数据加速策略深度分析：同构 vs 异构](topics/starrocks-catalog-acceleration-strategy.md)

## DeepEval

- [RAG 评估体系与方法论](topics/rag-evaluation.md)

## FDE

- [FDE (Forward Deployed Engineer)](concepts/fde.md)

## Forward Deployed Engineer

- [FDE (Forward Deployed Engineer)](concepts/fde.md)

## G-Eval

- [RAG 评估体系与方法论](topics/rag-evaluation.md)

## GNN

- [SeedER](entities/seeder.md)

## GSD

- [GSD (Get Shit Done)](entities/gsd.md)
- [上下文工程 (Context Engineering)](concepts/context-engineering.md)

## Gemini

- [AI编程Agent框架对比分析](synthesis/agent-framework-comparison.md)

## Ghostty

- [MUX0](entities/mux0.md)

## GitHub

- [Codex CLI](entities/codex-cli.md)
- [GitHub Spec Kit](entities/spec-kit.md)

## Google

- [OKF 开放知识格式](concepts/okf-open-knowledge-format.md)

## GraphRAG

- [LightRAG](entities/lightrag.md)

## Hermes

- [Hermes Agent](entities/hermes-agent.md)
- [cc-switch](entities/cc-switch.md)

## Hooks

- [ECC (Everything Claude Code)](entities/ecc.md)

## Java

- [Snail AI](entities/snail-ai.md)
- [Snail AI — Java 生态的企业级 AI Agent 平台](topics/snail-ai-agent-platform.md)

## JavaScript

- [PageAgent](entities/pageagent.md)

## Karpathy

- [Karpathy AI编码方法论](topics/karpathy-ai-coding-methodology.md)
- [LLM Wiki — 基于 LLM 的结构化知识库方法论](topics/llm-wiki-methodology.md)

## L0-L3

- [Agent记忆系统](concepts/agent-memory-system.md)

## LLM

- [RAG 检索增强生成（Retrieval-Augmented Generation）](concepts/rag-retrieval-augmented-generation.md)
- [Unsloth](entities/unsloth.md)
- [Unsloth — 消费级 GPU 高效微调大模型](topics/unsloth-efficient-llm-finetuning.md)
- [模型微调（Fine-tuning）](concepts/model-finetuning.md)
- [模型融合（Model Fusion / Model Merging）](concepts/model-fusion.md)
- [混合专家模型（Mixture of Experts, MoE）](concepts/moe-mixture-of-experts.md)

## LLM-Wiki

- [LLM Wiki — 基于 LLM 的结构化知识库方法论](topics/llm-wiki-methodology.md)

## LLM-as-Judge

- [RAG 评估体系与方法论](topics/rag-evaluation.md)

## LLM融合

- [LLM 模型融合深度报告：原理、路线、实现与评测](synthesis/model-fusion-deep-report.md)

## LLM融合框架

- [InfiFusion](entities/infifusion.md)

## LangChain替代

- [Apache Burr](entities/apache-burr.md)

## LightRAG

- [RAG-Anything](entities/rag-anything.md)

## Loop Engineering

- [Loop Engineering](concepts/loop-engineering.md)

## MCP

- [ECC (Everything Claude Code)](entities/ecc.md)
- [Firecrawl](entities/firecrawl.md)
- [Firecrawl — AI 原生的网页数据采集引擎](topics/firecrawl-web-scraping.md)
- [万象AI分析平台](topics/wanxiang-ai-analysis.md)

## NAS

- [OpenClaw](entities/openclaw.md)

## NL2SQL

- [AutoLink](entities/autolink.md)

## OKF

- [OKF 开放知识格式](concepts/okf-open-knowledge-format.md)

## OWL

- [本体论 (Ontology)](concepts/ontology.md)

## Ontology

- [本体论 (Ontology)](concepts/ontology.md)

## Open Design

- [html-video](entities/html-video.md)

## Open Knowledge Format

- [OKF 开放知识格式](concepts/okf-open-knowledge-format.md)

## OpenClaw

- [Agent记忆系统](concepts/agent-memory-system.md)
- [OpenClaw](entities/openclaw.md)
- [cc-switch](entities/cc-switch.md)

## OpenSpec

- [AI增强开发三件套：把Vibe Coding拉回工程交付](synthesis/ai-dev-trifecta.md)
- [BMAD](entities/bmad.md)
- [BMAD vs OpenSpec：AI驱动开发的航母与特种兵](synthesis/bmad-vs-openspec.md)
- [Comet](entities/comet.md)
- [OpenSpec](entities/openspec.md)
- [Spec驱动开发 (SDD)](concepts/spec-driven-development.md)
- [统一开发范式 (OpenSpec × Superpowers)](concepts/dev-flow-unified-paradigm.md)

## PMF

- [FDE (Forward Deployed Engineer)](concepts/fde.md)

## Prompt

- [Loop Engineering](concepts/loop-engineering.md)

## Prompt Caching

- [Prompt Caching](concepts/prompt-caching.md)

## Python

- [Apache Burr](entities/apache-burr.md)

## RAG

- [Agentic RAG：RAG 从独立系统到 Agent 组件](topics/agentic-rag.md)
- [LLM Wiki — 基于 LLM 的结构化知识库方法论](topics/llm-wiki-methodology.md)
- [LightRAG](entities/lightrag.md)
- [RAG 评估体系与方法论](topics/rag-evaluation.md)
- [RAG-Anything](entities/rag-anything.md)
- [SeedER](entities/seeder.md)
- [Snail AI](entities/snail-ai.md)
- [Snail AI — Java 生态的企业级 AI Agent 平台](topics/snail-ai-agent-platform.md)

## RAGAS

- [RAG 评估体系与方法论](topics/rag-evaluation.md)

## Reallm-Labs

- [InfiFusion](entities/infifusion.md)

## Rust

- [cc-switch](entities/cc-switch.md)

## SDD

- [BMAD](entities/bmad.md)
- [BMAD vs OpenSpec：AI驱动开发的航母与特种兵](synthesis/bmad-vs-openspec.md)
- [GitHub Spec Kit](entities/spec-kit.md)
- [OpenSpec](entities/openspec.md)
- [Spec驱动开发 (SDD)](concepts/spec-driven-development.md)

## Schema Linking

- [AutoLink](entities/autolink.md)

## SeedER

- [SeedER](entities/seeder.md)

## Skill

- [Huashu Design](entities/huashu-design.md)

## Skills

- [ECC (Everything Claude Code)](entities/ecc.md)
- [Hermes Agent](entities/hermes-agent.md)
- [OpenClaw](entities/openclaw.md)
- [Superpowers](entities/superpowers.md)
- [Understand Anything](entities/understand-anything.md)
- [gstack](entities/gstack.md)

## Skill体系

- [AI Agent 技术全景报告 2026](topics/ai-agent-landscape-2026.md)

## Spec驱动

- [AI Agent 技术全景报告 2026](topics/ai-agent-landscape-2026.md)

## Spring Boot

- [Snail AI](entities/snail-ai.md)
- [Snail AI — Java 生态的企业级 AI Agent 平台](topics/snail-ai-agent-platform.md)

## StarRocks

- [StarRocks Catalog 数据加速策略深度分析：同构 vs 异构](topics/starrocks-catalog-acceleration-strategy.md)
- [StarRocks 跨数据源查询方案（深度调研）](topics/starrocks-cross-data-source-query.md)

## Superpowers

- [AI增强开发三件套：把Vibe Coding拉回工程交付](synthesis/ai-dev-trifecta.md)
- [Comet](entities/comet.md)
- [统一开发范式 (OpenSpec × Superpowers)](concepts/dev-flow-unified-paradigm.md)

## TDD

- [Superpowers](entities/superpowers.md)

## Tauri

- [cc-switch](entities/cc-switch.md)

## Text-to-SQL

- [AutoLink](entities/autolink.md)

## Tool选择

- [Agent工具选择问题](concepts/agent-tool-selection.md)

## UI

- [Huashu Design](entities/huashu-design.md)

## VLA

- [FlashRT](entities/flashrt.md)

## Vibe Coding

- [AI增强开发三件套：把Vibe Coding拉回工程交付](synthesis/ai-dev-trifecta.md)

## Web自动化

- [PageAgent](entities/pageagent.md)

## Y Combinator

- [gstack](entities/gstack.md)

## cc-connect

- [CC-Connect](entities/cc-connect.md)

## gstack

- [AI增强开发三件套：把Vibe Coding拉回工程交付](synthesis/ai-dev-trifecta.md)

## html-to-video

- [html-video](entities/html-video.md)

## 万象

- [2026上半年万象项目复盘](synthesis/2026-h1-wanxiang-review.md)
- [万象AI分析平台](topics/wanxiang-ai-analysis.md)

## 上下文工程

- [GSD (Get Shit Done)](entities/gsd.md)
- [上下文工程 (Context Engineering)](concepts/context-engineering.md)

## 中山大学

- [FuseAI](entities/fuseai.md)

## 代码分析

- [Understand Anything](entities/understand-anything.md)

## 代码理解

- [Understand Anything](entities/understand-anything.md)

## 企业实践

- [AI Native 研发体系](topics/ai-native-dev-system.md)

## 低延迟

- [FlashRT](entities/flashrt.md)

## 具身智能

- [FlashRT](entities/flashrt.md)

## 动画

- [Huashu Design](entities/huashu-design.md)

## 协议

- [MCP 模型上下文协议（Model Context Protocol）](concepts/mcp-model-context-protocol.md)

## 原型

- [Huashu Design](entities/huashu-design.md)

## 复盘

- [2026上半年万象项目复盘](synthesis/2026-h1-wanxiang-review.md)

## 多Agent协作

- [AI Agent 技术全景报告 2026](topics/ai-agent-landscape-2026.md)

## 多模态

- [RAG-Anything](entities/rag-anything.md)

## 多跳推理

- [SeedER](entities/seeder.md)

## 大型项目

- [GSD (Get Shit Done)](entities/gsd.md)

## 实时感知

- [PYTHIA（本地 AI Agent 实时感知工具）](entities/pythia.md)

## 实时推理

- [FlashRT](entities/flashrt.md)

## 对比分析

- [AI编程Agent框架对比分析](synthesis/agent-framework-comparison.md)
- [BMAD vs OpenSpec：AI驱动开发的航母与特种兵](synthesis/bmad-vs-openspec.md)
- [LLM 模型融合深度报告：原理、路线、实现与评测](synthesis/model-fusion-deep-report.md)

## 工作流

- [BMAD](entities/bmad.md)
- [GSD (Get Shit Done)](entities/gsd.md)
- [Superpowers](entities/superpowers.md)

## 工具

- [Claude Code](entities/claude-code.md)
- [Codex CLI](entities/codex-cli.md)
- [Firecrawl](entities/firecrawl.md)
- [OpenSquilla](entities/opensquilla.md)
- [PYTHIA（本地 AI Agent 实时感知工具）](entities/pythia.md)
- [Snail AI](entities/snail-ai.md)
- [UZI-Skill（游资技能库）](entities/uzi-skill.md)
- [Unsloth](entities/unsloth.md)
- [mergekit](entities/mergekit.md)

## 工具集成

- [MCP 模型上下文协议（Model Context Protocol）](concepts/mcp-model-context-protocol.md)

## 工程交付

- [AI增强开发三件套：把Vibe Coding拉回工程交付](synthesis/ai-dev-trifecta.md)

## 开发工具

- [AI 编程（AI Programming / AI Coding）](concepts/ai-programming.md)

## 开发范式

- [Spec驱动开发 (SDD)](concepts/spec-driven-development.md)
- [统一开发范式 (OpenSpec × Superpowers)](concepts/dev-flow-unified-paradigm.md)

## 开源

- [AutoLink](entities/autolink.md)
- [Codex CLI](entities/codex-cli.md)
- [Firecrawl](entities/firecrawl.md)
- [Firecrawl — AI 原生的网页数据采集引擎](topics/firecrawl-web-scraping.md)
- [Huashu Design](entities/huashu-design.md)
- [LightRAG](entities/lightrag.md)
- [MUX0](entities/mux0.md)
- [MemPalace](entities/mempalace.md)
- [Snail AI — Java 生态的企业级 AI Agent 平台](topics/snail-ai-agent-platform.md)
- [Superpowers](entities/superpowers.md)
- [Unsloth](entities/unsloth.md)
- [Unsloth — 消费级 GPU 高效微调大模型](topics/unsloth-efficient-llm-finetuning.md)
- [khazix-skills](entities/khazix-skills.md)
- [mergekit](entities/mergekit.md)

## 开源工具

- [GitHub Spec Kit](entities/spec-kit.md)
- [html-video](entities/html-video.md)

## 开源情报

- [PYTHIA（本地 AI Agent 实时感知工具）](entities/pythia.md)

## 开源社区

- [FuseAI](entities/fuseai.md)

## 强化学习

- [SeedER](entities/seeder.md)

## 微信

- [CC-Connect](entities/cc-connect.md)

## 微调

- [Unsloth](entities/unsloth.md)
- [Unsloth — 消费级 GPU 高效微调大模型](topics/unsloth-efficient-llm-finetuning.md)
- [模型微调（Fine-tuning）](concepts/model-finetuning.md)

## 性能优化

- [Prompt Caching](concepts/prompt-caching.md)

## 成本优化

- [AI 网关与模型路由](concepts/ai-gateway.md)

## 成本控制

- [Prompt Caching](concepts/prompt-caching.md)

## 技术全景

- [AI Agent 技术全景报告 2026](topics/ai-agent-landscape-2026.md)

## 技能包

- [gstack](entities/gstack.md)

## 技能合集

- [khazix-skills](entities/khazix-skills.md)

## 投资

- [UZI-Skill（游资技能库）](entities/uzi-skill.md)

## 推理引擎

- [FlashRT](entities/flashrt.md)

## 插件库

- [ECC (Everything Claude Code)](entities/ecc.md)

## 数字生命卡兹克

- [khazix-skills](entities/khazix-skills.md)

## 数据加速

- [StarRocks Catalog 数据加速策略深度分析：同构 vs 异构](topics/starrocks-catalog-acceleration-strategy.md)

## 数据平台

- [2026上半年万象项目复盘](synthesis/2026-h1-wanxiang-review.md)
- [万象AI分析平台](topics/wanxiang-ai-analysis.md)

## 数据查询

- [StarRocks 跨数据源查询方案（深度调研）](topics/starrocks-cross-data-source-query.md)

## 数据湖

- [StarRocks 跨数据源查询方案（深度调研）](topics/starrocks-cross-data-source-query.md)

## 文档理解

- [RAG-Anything](entities/rag-anything.md)

## 方法论

- [LLM Wiki — 基于 LLM 的结构化知识库方法论](topics/llm-wiki-methodology.md)

## 最佳实践

- [Karpathy AI编码方法论](topics/karpathy-ai-coding-methodology.md)

## 本体论

- [本体论 (Ontology)](concepts/ontology.md)

## 本地优先

- [MemPalace](entities/mempalace.md)

## 架构演进

- [Agentic RAG：RAG 从独立系统到 Agent 组件](topics/agentic-rag.md)

## 标准化

- [MCP 模型上下文协议（Model Context Protocol）](concepts/mcp-model-context-protocol.md)

## 桌面工具

- [cc-switch](entities/cc-switch.md)

## 检索

- [RAG 检索增强生成（Retrieval-Augmented Generation）](concepts/rag-retrieval-augmented-generation.md)

## 检索增强

- [Agentic RAG：RAG 从独立系统到 Agent 组件](topics/agentic-rag.md)

## 检索增强生成

- [LightRAG](entities/lightrag.md)

## 模型合并

- [mergekit](entities/mergekit.md)
- [模型融合（Model Fusion / Model Merging）](concepts/model-fusion.md)

## 模型架构

- [混合专家模型（Mixture of Experts, MoE）](concepts/moe-mixture-of-experts.md)

## 模型融合

- [FuseAI](entities/fuseai.md)
- [InfiFusion](entities/infifusion.md)
- [LLM 模型融合深度报告：原理、路线、实现与评测](synthesis/model-fusion-deep-report.md)
- [mergekit](entities/mergekit.md)
- [模型融合（Model Fusion / Model Merging）](concepts/model-fusion.md)

## 模型训练

- [Unsloth — 消费级 GPU 高效微调大模型](topics/unsloth-efficient-llm-finetuning.md)

## 模型路由

- [AI 网关与模型路由](concepts/ai-gateway.md)

## 测试

- [测试驱动开发（Test-Driven Development, TDD）](concepts/test-driven-development.md)
- [红绿回归测试（Red-Green-Regression Pipeline）](concepts/red-green-regression-testing.md)

## 测试驱动

- [OpenSquilla](entities/opensquilla.md)
- [OpenSquilla — AI 代码生成的自验证与自修复](topics/opensquilla-ai-self-verification.md)

## 浏览器操控

- [PageAgent](entities/pageagent.md)

## 清华大学

- [Hermes Agent](entities/hermes-agent.md)

## 港大

- [LightRAG](entities/lightrag.md)
- [RAG-Anything](entities/rag-anything.md)

## 湖仓一体

- [StarRocks 跨数据源查询方案（深度调研）](topics/starrocks-cross-data-source-query.md)

## 物化视图

- [StarRocks Catalog 数据加速策略深度分析：同构 vs 异构](topics/starrocks-catalog-acceleration-strategy.md)

## 状态机

- [Apache Burr](entities/apache-burr.md)

## 知识图谱

- [LightRAG](entities/lightrag.md)
- [RAG-Anything](entities/rag-anything.md)
- [SeedER](entities/seeder.md)
- [Understand Anything](entities/understand-anything.md)

## 知识库

- [Firecrawl — AI 原生的网页数据采集引擎](topics/firecrawl-web-scraping.md)
- [RAG 检索增强生成（Retrieval-Augmented Generation）](concepts/rag-retrieval-augmented-generation.md)

## 知识建模

- [本体论 (Ontology)](concepts/ontology.md)

## 知识格式

- [OKF 开放知识格式](concepts/okf-open-knowledge-format.md)

## 知识检索

- [SeedER](entities/seeder.md)

## 知识管理

- [LLM Wiki — 基于 LLM 的结构化知识库方法论](topics/llm-wiki-methodology.md)

## 知识蒸馏

- [InfiFusion](entities/infifusion.md)

## 知识融合

- [模型融合（Model Fusion / Model Merging）](concepts/model-fusion.md)

## 研发体系

- [AI Native 研发体系](topics/ai-native-dev-system.md)

## 稀疏计算

- [混合专家模型（Mixture of Experts, MoE）](concepts/moe-mixture-of-experts.md)

## 组织级

- [AI Native 研发体系](topics/ai-native-dev-system.md)

## 终端

- [MUX0](entities/mux0.md)

## 经验学习

- [自改进AI Agent](concepts/self-improving-agent.md)

## 结构化知识

- [LLM Wiki — 基于 LLM 的结构化知识库方法论](topics/llm-wiki-methodology.md)

## 综述

- [LLM 模型融合深度报告：原理、路线、实现与评测](synthesis/model-fusion-deep-report.md)

## 编排器

- [Agent工具选择问题](concepts/agent-tool-selection.md)

## 编程助手

- [CC-Connect](entities/cc-connect.md)

## 网页爬虫

- [Firecrawl](entities/firecrawl.md)
- [Firecrawl — AI 原生的网页数据采集引擎](topics/firecrawl-web-scraping.md)

## 联邦查询

- [StarRocks Catalog 数据加速策略深度分析：同构 vs 异构](topics/starrocks-catalog-acceleration-strategy.md)
- [StarRocks 跨数据源查询方案（深度调研）](topics/starrocks-cross-data-source-query.md)

## 股票分析

- [UZI-Skill（游资技能库）](entities/uzi-skill.md)

## 腾讯

- [FuseAI](entities/fuseai.md)

## 自动化

- [AI Agent（智能体）](concepts/ai-agent.md)
- [AI 编程（AI Programming / AI Coding）](concepts/ai-programming.md)
- [Comet](entities/comet.md)
- [Loop Engineering](concepts/loop-engineering.md)
- [OpenSquilla](entities/opensquilla.md)
- [OpenSquilla — AI 代码生成的自验证与自修复](topics/opensquilla-ai-self-verification.md)
- [红绿回归测试（Red-Green-Regression Pipeline）](concepts/red-green-regression-testing.md)
- [自改进AI Agent](concepts/self-improving-agent.md)

## 自我修复

- [OpenSquilla](entities/opensquilla.md)
- [OpenSquilla — AI 代码生成的自验证与自修复](topics/opensquilla-ai-self-verification.md)
- [自改进AI Agent](concepts/self-improving-agent.md)

## 自进化

- [Agent记忆系统](concepts/agent-memory-system.md)
- [Hermes Agent](entities/hermes-agent.md)
- [OpenClaw](entities/openclaw.md)

## 规格驱动

- [BMAD](entities/bmad.md)
- [BMAD vs OpenSpec：AI驱动开发的航母与特种兵](synthesis/bmad-vs-openspec.md)

## 规范驱动

- [GitHub Spec Kit](entities/spec-kit.md)
- [OpenSpec](entities/openspec.md)
- [Spec驱动开发 (SDD)](concepts/spec-driven-development.md)
- [统一开发范式 (OpenSpec × Superpowers)](concepts/dev-flow-unified-paradigm.md)

## 视频生成

- [html-video](entities/html-video.md)

## 角色化

- [gstack](entities/gstack.md)

## 训练方法

- [模型微调（Fine-tuning）](concepts/model-finetuning.md)

## 记忆系统

- [Agent记忆系统](concepts/agent-memory-system.md)
- [Hermes Agent](entities/hermes-agent.md)
- [MemPalace](entities/mempalace.md)
- [OpenClaw](entities/openclaw.md)

## 设计

- [Huashu Design](entities/huashu-design.md)

## 评估

- [LLM 模型融合深度报告：原理、路线、实现与评测](synthesis/model-fusion-deep-report.md)
- [RAG 评估体系与方法论](topics/rag-evaluation.md)

## 语义层

- [本体论 (Ontology)](concepts/ontology.md)

## 语义搜索

- [MemPalace](entities/mempalace.md)
- [OKF 开放知识格式](concepts/okf-open-knowledge-format.md)

## 语义网

- [本体论 (Ontology)](concepts/ontology.md)

## 负载均衡

- [AI 网关与模型路由](concepts/ai-gateway.md)

## 质量保证

- [红绿回归测试（Red-Green-Regression Pipeline）](concepts/red-green-regression-testing.md)

## 跨平台

- [cc-switch](entities/cc-switch.md)

## 跨数据源

- [StarRocks 跨数据源查询方案（深度调研）](topics/starrocks-cross-data-source-query.md)

## 软件2.0

- [AI Native 研发体系](topics/ai-native-dev-system.md)

## 软件工程

- [测试驱动开发（Test-Driven Development, TDD）](concepts/test-driven-development.md)

## 金融

- [UZI-Skill（游资技能库）](entities/uzi-skill.md)

## 阿里开源

- [PageAgent](entities/pageagent.md)

## 预测

- [PYTHIA（本地 AI Agent 实时感知工具）](entities/pythia.md)

## 飞书

- [CC-Connect](entities/cc-connect.md)

`,Uh=`---
type: topic
tags: [RAG, Agent, Agentic-RAG, 架构演进, 检索增强]
created: 2026-07-05
updated: 2026-07-05
related_sources: 1
---

# Agentic RAG：RAG 从独立系统到 Agent 组件

## 核心论断
RAG 没有"死亡"，而是从**独立系统**降级成了 **Agent 架构下的一个组件**。它不再是整个 AI 应用的核心，而是隐藏在更大的 Agent 架构底下，作为 Agent 工具箱中的一项能力。

## 演进脉络

\`\`\`
Naive RAG                → 检索+拼接+生成（独立系统）
    ↓
Advanced RAG             → 查询重写、重排序、压缩（独立系统增强）
    ↓
Graph RAG                → 知识图谱增强检索（独立系统增强）
    ↓
Agentic RAG ★ ← 你现在在这里
    RAG 从"独立系统"降级为 Agent 的"组件"
\`\`\`

## Agentic RAG 架构

\`\`\`
用户输入 → AI Agent（大脑/控制器）
              │
              ├─ 工具①：RAG 检索（知识库）
              ├─ 工具②：代码解释器
              ├─ 工具③：API 调用
              ├─ 工具④：网页搜索
              └─ ...
              
Agent 自主决定：
1. 是否需要检索（用 RAG 工具还是其他工具？）
2. 检索几次（单次 → 多轮迭代）
3. 检索什么（选择不同的知识库/检索策略）
4. 如何融合结果（RAG + 代码执行 + API 输出的综合）
\`\`\`

### 关键变化

| 维度 | 传统 RAG | Agentic RAG |
|------|---------|------------|
| **角色** | 独立系统 / 核心架构 | Agent 工具箱中的一个能力 |
| **控制权** | 外部编排 | Agent 自主决定 |
| **检索策略** | 固定流程（Retrieve → Read） | 动态、自适应、多轮 |
| **工具粒度** | 一个检索入口 | 多个检索策略可选 |
| **与其他工具关系** | 独立运行 | 与代码执行/API调用协同 |
| **适用复杂性** | 简单问答 | 复杂多步推理 |

## 为什么 RAG 必须"降级"？

1. **单一 RAG 无法应对复杂任务** — 很多问题需要检索 + 代码执行 + 实时数据查询的组合
2. **Agent 需要选择权** — Agent 应自主判断：这个问题用 RAG 还是搜索引擎？还是直接靠模型自身知识？
3. **多步推理需要迭代检索** — 复杂问题需要"检索→思考→再检索→验证"的循环，Agent 比固定流水线更适合
4. **工具生态的自然演变** — 就像操作系统不是"文件管理器"，而是"管理文件管理器 + 浏览器 + 终端"的更高层次

## RAG 不可替代的价值

即使"降级"为组件，RAG 在以下场景仍是**最佳选择**：
- **海量非结构化数据处理**（文档、PDF、邮件）
- **实时知识更新**（搜索引擎时效性不够细粒度）
- **高合规性溯源**（需要精确引用来源，不可凭空捏造）
- **私有知识库访问**（外部模型不能直接访问的企业内部数据）

## 相关概念
- [[RAG 检索增强生成]]
- [[AI Agent]]

## 延展阅读
- [Agentic RAG — Weaviate](https://weaviate.io/blog/what-is-agentic-rag)
- [Agentic RAG — IBM](https://www.ibm.com/think/topics/agentic-rag)
- [RAG 没死：从独立系统到 Agent 组件](https://mp.weixin.qq.com/s/IzheS512kExzwXzRy-fBiw)
`,Wh=`---
type: topic
tags: [AI Agent, Agent架构, 多Agent协作, Skill体系, Spec驱动, 技术全景, 2026]
created: 2026-07-04
updated: 2026-07-06
---

# AI Agent 技术全景报告 2026

## 概述

2025-2026 年，AI Agent 技术栈经历了从"概念验证"到"工程落地"的质变。本报告基于 50+ 篇技术资料，从架构范式、框架对比、记忆系统、浏览器操控、底层模型进展、落地误区六大维度进行全景梳理。

## 六大核心趋势

### 1. 从单一 Prompt 到 Skill 体系

- 过去：写一个复杂 Prompt，期望 LLM 一次搞定所有事
- 现在：把能力拆解为独立 Skills，按需组合
- 代表：[[Superpowers]]、[[gstack]]、[[ECC]]

### 2. 从外部调用到内嵌运行

- 过去：Agent 通过 Playwright/Selenium 从外部操控浏览器（~200MB 依赖）
- 现在：Agent 直接在网页内部运行（32KB）
- 代表：[[PageAgent]]

### 3. 从大模型依赖到小模型突围

- 传统认知：只有 GPT-4/Claude 级别才能做 Agent
- 现实突破：4B 参数模型在 SWE-bench 达到 87%，27B 模型单卡跑 SWE-bench 67%
- 成本从"每轮几毛钱"降到"一次部署终身使用"

### 4. 从手写代码到 Spec 驱动

- 传统：人写代码，AI 辅助
- 现在：人写 Spec，AI 写代码 + 测试 + 验证
- 得物实战：编码效率 10×，交付效率仅 13%（瓶颈在需求理解）

### 5. 从单 Agent 到多 Agent 协作

- 编排层调度多个专业 Agent：架构师 Agent → 编码 Agent → 测试 Agent → Review Agent
- 代表：architect-loop（Claude 5 做架构师 + Codex 做建造者）、[[Comet]]

### 6. 从工具到同事

- Agent 定位转变：被动工具 → 主动参与者 → 同事
- 自进化 Agent（[[Hermes Agent]]、[[OpenClaw]]）能自主学习和改进

### 7. 本地 Agent 与实时感知

- 本地 Agent 崛起：Ollama 驱动的完全本地 Agent，零云端依赖
- [[PYTHIA]] 融合 Osiris（实时情报）和 MiroFish（多智能体预测），解决 Agent 对现实世界

## Agent 架构范式

### ReAct 循环（基础模型）

\`\`\`
[感知] → [思考] → [行动] → [观察] → [再思考] → ... → 任务完成
\`\`\`

几乎所有 Agent 架构都建立在 ReAct（Reasoning + Acting）之上。

### 单 Agent 架构 vs 多 Agent 架构

- **单 Agent**（[[OpenClaw]]、[[Hermes Agent]]）：简洁、可调试、适合明确任务
- **多 Agent**（architect-loop、[[Comet]]）：各司其职、突破单模型天花板

## 关键挑战

- Agent 工具选择：Tool 太多时反而选不明白（Agent MGMT）
- 上下文腐烂（Context Rot）：大型项目中 Agent 理解逐渐退化
- Spec 写不清楚：SDD 的瓶颈不在 AI 而在人的需求表达
- Token 成本：提示词缓存（[[Prompt Caching]]）是工程化的关键

## 相关概念
- [[AI Agent]]
- [[Agent记忆系统]]
- [[Spec驱动开发]]
- [[Loop Engineering]]
- [[FDE]]

## 相关实体
- [[OpenClaw]]
- [[Hermes Agent]]
- [[Superpowers]]
- [[OpenSpec]]
- [[PageAgent]]
- [[PYTHIA]]
- [[UZI-Skill]]
`,Vh=`---
type: topic
tags: [AI Native, 研发体系, 软件2.0, 组织级, 企业实践]
created: 2026-07-04
updated: 2026-07-04
---

# AI Native 研发体系

## 概述

AI Native 研发体系是指以 AI 为核心重新设计软件开发全流程，而非在传统流程上"叠加 AI 辅助"。这不仅是技术变革，更是组织文化和工程范式的重构。

## 发展路径

### 阶段一：AI 作为 Tool（辅助工具）
- AI 帮写代码片段、查文档、写注释
- 人类主导，AI 辅助

### 阶段二：AI 作为 Copilot（协作伙伴）
- AI 参与代码审查、测试生成、Bug 修复
- 人机协作，共同决策

### 阶段三：AI 作为 Agent（自主执行者）
- AI 独立完成从 Spec 到交付的完整流程
- 人类从"写代码"转为"审 Spec"

### 阶段四：AI Native 组织
- 研发流程围绕 AI 能力重新设计
- 组织结构适配 AI Agent 协作模式
- FDE 模式：工程师深入业务现场

## 核心要素

- **Spec 驱动**：用规格说明书替代传统需求文档
- **Agent 编排**：多 Agent 协作取代单一开发角色
- **自进化**：Agent 从每次执行中学习改进
- **上下文工程**：管理 AI 对大型项目的全局认知

## 实战案例

- 得物技术：Spec 驱动半年，编码效率 10×
- Anthropic：FDE 模式，工程师驻场加速 AI 落地
- 万象平台：基于 MCP 的 AI 分析工具链

## 相关概念
- [[AI编程]]
- [[Spec驱动开发]]
- [[FDE]]
- [[统一开发范式]]
`,qh=`---
type: topic
tags: [网页爬虫, AI, MCP, 开源, 知识库]
created: 2026-07-04
updated: 2026-07-04
related_sources: 1
source_url: https://app.notion.com/p/Firecrawl-GitHub-14-3912a6ec1af88143a7bbece4ff065442
---

# Firecrawl — AI 原生的网页数据采集引擎

## 概述

Firecrawl 是一个面向 AI 的网页数据采集接口，将任意网站内容转换为 LLM 可直接消费的 **Markdown / JSON** 结构化数据。基于 TypeScript 构建，使用 Playwright 处理 JavaScript 渲染页面。提供托管云 API 和自托管开源两个版本。

截至 2026 年在 GitHub 上获得 **14.2 万 Star**，生态扩展包括 \`firecrawl-mcp-server\`（6.8k Star）和 Firesearch 深度研究工具。

## 核心能力

1. **AI 原生输出**：将网页内容转换为 Markdown/JSON，LLM 可直接消费
2. **JS 渲染支持**：基于 Playwright，能处理 SPA 和动态内容
3. **双模式部署**：托管云 API（免运维）+ 开源自托管
4. **MCP 集成**：提供 \`firecrawl-mcp-server\`，让 AI Agent 直接调用爬取能力
5. **深度研究**：Firesearch 工具支持多页聚合分析

## 关键数据

- GitHub Stars：**142,000+**
- MCP Server Stars：**6,800+**
- 技术栈：TypeScript + Playwright

## 当前状态

Firecrawl 已成为 AI 生态中**网页数据采集的事实标准**之一，MCP Server 的推出进一步巩固了其在 AI Agent 工作流中的位置。

## 相关实体
- [[Firecrawl]]
- [[firecrawl-mcp-server]]
- [[Playwright]]

## 相关概念
- [[MCP 模型上下文协议]]
- [[LLM 网页数据采集]]
- [[AI Agent]]
`,Qh=`---
type: topic
tags: [Karpathy, CLAUDE.md, AI编程, 最佳实践, Agent行为规范]
created: 2026-07-04
updated: 2026-07-04
---

# Karpathy AI编码方法论

## 概述

Andrej Karpathy（前 Tesla AI 总监、OpenAI 创始成员）用一个仅 65 行的 CLAUDE.md 文件定义了 AI 编码 Agent 的 4 条行为准则，在 GitHub 获得 22 万+ Star，成为 2026 年 AI 编码领域的现象级项目。

## 背景：LLM 编码的四大缺陷

- 跳过思考直接编码 — 大部分错误来自假设错误而非能力不足
- 过度工程化 — 不必要的抽象/工厂模式/以防万一的灵活性
- Scope Creep — 改一处代码顺手把周围全重写了
- 缺乏目标驱动 — 没有"写个测试验证它真的好了"的闭环

## 四条铁律

### 1. Think Before Coding（先想再写）

不猜测、不隐藏困惑、暴露权衡：
- 明确写出假设，不确定就问
- 有多个解释就列出，别默默选一个
- 有更简单的方法就说出来
- 不清楚就停下来，说出困惑然后问

### 2. Simplicity First（简洁第一）

最少代码解决问题，不写推测性功能：
- 不写超出需求的功能
- 不为单次使用场景做抽象
- 不写没被要求的灵活性
- 如果写了 200 行但 50 行能搞定，重写

### 3. Surgical Changes（手术式修改）

只改必须改的，只清理自己的烂摊子：
- 不改没坏的代码
- 不顺手优化周围的注释和格式
- 匹配现有风格，即使自己会写的不一样
- 每行改动必须直接追溯到用户需求

### 4. Goal-Driven Execution（目标驱动执行）

先定义成功标准，循环直到验证通过：
- 加验证 → 先写测试用例再让它通过
- 修 bug → 先写重现 bug 的测试再让它通过
- 多步骤任务配验证计划

## 为什么重要

2026 年 AI 编码 Agent 爆发，瓶颈不是模型不够强而是"太愿干活了"。Karpathy 的方法论是一种"反内卷宣言"：更少假设、更少抽象、更多克制 > 更大窗口、更多工具、更强推理。

## 相关概念
- [[AI编程]]
- [[测试驱动开发 TDD]]
- [[统一开发范式]]

## 相关主题
- [[LLM Wiki 方法论]] — Karpathy 提出的结构化知识库构建模式

## 相关实体
- [[Claude Code]]
`,Jh=`---
type: topic
tags: [知识管理, LLM-Wiki, 方法论, Karpathy, RAG, 结构化知识]
source_url: https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
ingested: 2026-07-05
---

# LLM Wiki — 基于 LLM 的结构化知识库方法论

## 概述

Andrej Karpathy 提出的 **LLM Wiki** 模式，核心思想是用 LLM 增量构建和维护一个**持久化的、结构化交叉引用的 Markdown 知识库**，替代传统 RAG 的"查一次拼一次"模式。LLM 负责所有写作和维护，人类负责素材收集和方向引导。

## RAG vs LLM Wiki

| 维度 | 传统 RAG | LLM Wiki |
|---|---|---|
| 知识状态 | 每次查询从头检索 | 持久化、持续更新的结构化资产 |
| 交叉引用 | 无，每次临时拼凑 | 预先建立，双向链接 |
| 矛盾处理 | 可能检索出矛盾的片段 | 摄入时标注、对比、仲裁 |
| 查询质量 | 受检索引擎和 chunk 策略影响 | LLM 先读索引定位再深入，结果稳定可引用 |
| 维护成本 | 无需维护但结果不稳定 | LLM 自动维护，人类几乎零成本 |
| 积累效应 | 无 — 每次独立 | 有 — wiki 随素材增加越来越丰富 |

## 三层架构

\`\`\`
原始素材 (raw/)   →  Wiki (wiki/)   →  Schema (CLAUDE.md)
 不可变，仅追加        LLM 生成/维护      规范与约定
\`\`\`

- **原始素材层**：文章、论文、笔记、图片等，LLM 只读不写
- **Wiki 层**：摘要 → 实体/概念/主题/综述，含 index.md 全局目录 + log.md 操作日志
- **Schema 层**：一份给 LLM 看的规范文档（CLAUDE.md），定义页面结构、工作流、命名约定

## 三大工作流

### Ingest（摄入）
1. 新素材放入 \`raw/\`
2. LLM 读取 → 讨论关键点 → 写摘要页
3. 更新涉及的实体页和概念页（可能触达 10-15 个页面）
4. 更新 index.md + log.md

### Query（查询）
1. LLM 先读 index.md 定位相关页面
2. 深入阅读后合成答案，附带引用
3. 有价值的问答归档为 \`synthesis/\` 下的新页面

### Lint（体检）
- 矛盾检测、过时信息、孤立页面、缺失页面、断链、内容缺口、格式合规
- LLM 输出报告，按严重程度排序

## 关键设计

- **index.md**：全站目录，每行 = 链接 + 摘要 + 标签，LLM 查询时先读此文件定位
- **log.md**：纯追加操作日志，\`## [YYYY-MM-DD] 操作 | 简述\` 格式，可被 grep 解析
- **Wikilink**：\`[[页面名]]\` 内部引用，与 Obsidian 双向链接兼容
- **YAML Frontmatter**：每个页面包含 type/tags/created/updated 元数据

## 适用场景

- 个人知识管理（追踪目标、健康、心理等）
- 学术研究（深度阅读论文，增量构建知识库）
- 读书笔记（按章节归档，构建角色/主题/情节的关联 Wiki）
- 团队内部 Wiki（LLM 消化 Slack/会议/文档后自动维护）
- 竞品分析、课程笔记、深度爱好研究等

## 为什么有效

人类放弃 Wiki 的原因是维护负担增长快于价值。LLM 不会无聊、不会忘记更新引用、一次能触达 15 个文件。维护成本趋近于零，Wiki 始终保持健康。

## 本项目的应用

llm-wiki 完全遵循此方法论构建：
- CLAUDE.md 定义了完整的工作流和质量规范
- 59 个页面覆盖 AI Agent、AI 编程、RAG、知识图谱、SDD 等核心领域
- 每次文件变更自动 Git 同步
- 同时维护 Notion 端镜像（Database + Properties + Relations）

## 相关实体
- [[Claude Code]] — 本项目使用的 LLM Agent
- [[Obsidian]] — 配合使用的知识库浏览器

## 相关概念
- [[RAG 检索增强生成]] — LLM Wiki 要替代的传统检索模式
- [[上下文工程]] — 系统化管理 AI 在大型项目中的代码上下文
- [[AI Agent]] — LLM Wiki 的维护者本质上是一个 Agent
- [[本体论 Ontology]] — 知识的结构化形式化描述
- [[Agent记忆系统]] — L0-L3 记忆架构与 Wiki 持久化存储互补

## 拓展阅读
- [Karpathy Gist 原文](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)
- [Vannevar Bush — As We May Think (1945)](https://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/) — Memex 概念
`,$h=`---
type: topic
tags: [AI编程, 测试驱动, 自我修复, 自动化]
created: 2026-07-04
updated: 2026-07-04
related_sources: 1
source_url: https://app.notion.com/p/OpenSquilla-0-4-0-AI-3912a6ec1af8816f82e7cfaa28bfdd77
---

# OpenSquilla — AI 代码生成的自验证与自修复

## 概述

OpenSquilla 0.4.0 引入了一套**红绿回归证据链（Red-Green-Regression Pipeline）**机制，让 AI 编程从"生成代码"进化到"验证代码"的可审计阶段。

核心流程：AI 先写预期失败的测试（红）→ 修改代码让测试通过（绿）→ 跑全部已有测试确保无回归（回归）。三道关全过才交付。测试未通过时，AI 自动进入**修复闭环**：重改 → 再测 → 直到通过。

## 核心机制

1. **红灯阶段（Red）**：AI 根据需求生成预期会失败的单元测试
2. **绿灯阶段（Green）**：AI 修改实现代码使新测试通过
3. **回归阶段（Regression）**：运行全部已有测试，确保未破坏现有功能
4. **自动修复闭环**：任一阶段失败 → AI 自动分析原因 → 重新修改代码 → 重新测试，循环直到全部通过

## 关键数据

- 成本降低：**60%~80%**
- 版本：0.4.0
- 核心理念：AI 代码生成从"概率正确"到"可审计验证"

## 当前状态

OpenSquilla 代表了 AI 编程从"辅助生成"向"自主验证"的关键跨越。传统 AI 编程关注"代码写得快不快"，OpenSquilla 关注"代码写得对不对"。

## 相关实体
- [[OpenSquilla]]

## 相关概念
- [[红绿回归测试]]
- [[AI 自验证]]
- [[测试驱动开发 TDD]]
- [[AI 编程]]
`,Kh=`---
type: topic
tags: [RAG, 评估, LLM-as-Judge, RAGAS, DeepEval, G-Eval]
created: 2026-07-05
updated: 2026-07-05
related_sources: 3
---

# RAG 评估体系与方法论

## 概述
RAG 评估比传统 LLM 评估更复杂，因为它涉及检索、生成两个环节的协同效果。评估体系覆盖检索质量、生成质量和端到端系统三个维度。

---

## 一、评估三维度

\`\`\`
用户问题
    │
    ▼
┌─────────┐    检索质量
│  检索   │ ←─── Context Precision / Recall / Relevancy
│ (Retrieve)│
└────┬────┘
    │
    ▼
┌─────────┐    生成质量
│  生成   │ ←─── Faithfulness / Answer Relevancy / Correctness
│ (Generate)│
└─────────┘
    │
    ▼
┌─────────┐    端到端
│  整体   │ ←─── Latency / Cost / Safety / Citation Accuracy
└─────────┘
\`\`\`

---

## 二、核心指标详解

### 检索质量指标

| 指标 | 衡量什么 | 解释 |
|------|---------|------|
| **Context Precision** | 检索到的文档有多少是相关的 | 越高 → 噪声越少 |
| **Context Recall** | 所有相关文档被检索到多少 | 越高 → 信息越完整 |
| **Context Relevancy** | 检索内容是否有效回答查询 | 综合判断检索段落的针对性 |
| **Precision@K** | Top-K 中相关文档比例 | 经典 IR 指标 |
| **MRR** | 第一个相关结果的排名位置 | 排名敏感场景重要 |
| **NDCG** | 排序质量（考虑位置权重） | 检索排序越靠前越好 |

### 生成质量指标

| 指标 | 衡量什么 | 解释 |
|------|---------|------|
| **Faithfulness** | 答案是否忠于检索到的文档 | **最重要的指标**，检测幻觉 |
| **Answer Relevancy** | 答案是否回答了用户问题 | 答非所问 → 低分 |
| **Answer Correctness** | 答案是否正确 | 需要参考答案对比 |
| **Attribution** | 答案是否引用了具体来源 | 溯源能力 |
| **Hallucination Rate** | 幻觉比例 | 无依据内容的占比 |

### 系统指标

- **Latency**：检索 + 生成的端到端耗时
- **Cost**：Token 消耗 + API 调用费用
- **Token Usage**：Context 长度和生成长度
- **Safety**：安全合规、毒性、偏见检测

---

## 三、评估方法

### 方法一：LLM-as-a-Judge（最主流）
用 GPT-4 / Claude 等模型当裁判，对 RAG 输出打分。

**优势**：可扩展、语义理解好
**劣势**：裁判模型偏见、成本高
**起源论文**：Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena (LMSYS, 2023)

### 方法二：人工评估（最可靠）
人类专家逐条评价 Faithfulness / Relevancy / Completeness。

**优势**：最准确，发现自动化无法发现的问题
**劣势**：成本高、扩展性差

### 方法三：参考答案对比
生成答案 vs 参考答案 → BLEU / ROUGE / BERTScore。

**局限**：BLEU/ROUGE 对 RAG 效果有限，语义正确但措辞不同也会扣分

### 方法四：持续监控（生产环境）
生产中的 RAG 系统需要持续监控——知识库在变、用户查询在变。

- 定期用自动化评估器跑生产流量
- 监控指标趋势变化（如 Faithfulness 突然下降 → 提醒）
- A/B 测试不同策略

---

## 四、主流评估框架

### RAGAS（RAG 专用）

开源、Reference-Free 的 RAG 评估框架。

**论文**：RAGAS: Automated Evaluation of Retrieval Augmented Generation (arXiv:2309.15217, 2023)
**核心**：4 个指标 + evaluate() 函数，简单易用
**指标**：Faithfulness / Answer Relevancy / Context Precision / Context Recall

\`\`\`python
from ragas import evaluate
from ragas.metrics import faithfulness, answer_relevancy
result = evaluate(dataset=rag_dataset, metrics=[faithfulness, answer_relevancy])
\`\`\`

### DeepEval（通用 LLM 评估）

定位为 **LLM 的 Pytest**——写断言、跑 CI、治回归。

**论文支撑**：
- G-Eval (arXiv:2303.16634, EMNLP 2023) — CoT + Form-Filling 打分
- JudgeBench (arXiv:2410.12784, 2024) — 裁判模型评估基准
- LLMs-as-Judges Survey (arXiv:2412.05579, 2024) — LLM-as-Judge 全综述

**核心技术**（三合一方案）：
1. **G-Eval** — CoT 推理逐步打分，输出分数 + 推理理由
2. **DAGMetric** — 有向无环图决策树，处理复杂多分支评估条件
3. **QAG-Style** — 将评估拆解为多个"是/否"封闭问题逐一判断

**特点**：
- 50+ 指标（RAG / Agent / 多轮对话 / 安全 / 偏见）
- pytest 断言集成（\`assert_test()\`）→ 原生 CI/CD 支持
- 内置数据合成器

\`\`\`python
from deepeval import assert_test
from deepeval.metrics import FaithfulnessMetric

def test_rag_output():
    assert_test(test_case, [FaithfulnessMetric()])
\`\`\`

### 其他框架

| 框架 | 特点 | 适用场景 |
|------|------|---------|
| **TruLens** | 关注反馈循环，可追踪每次调用 | 调试 RAG 管道 |
| **Giskard** | 开源，侧重安全/可信 | 合规要求高 |
| **Maxim AI** | 企业级，支持模拟/监控 | 生产环境 |
| **Galileo** | Context Adherence + Chunk Attribution | 细粒度检索分析 |
| **Phoenix** | 可观测性，识别问题模式 | 生产监控 |

---

## 五、RAGAS vs DeepEval 对比

| 维度 | RAGAS | DeepEval |
|------|-------|----------|
| **定位** | RAG 专用评估 | 通用 LLM 评估框架（含 RAG） |
| **指标数量** | ~10 个 | 50+ 个 |
| **核心技术** | 单一 LLM-as-Judge | G-Eval + DAGMetric + QAG 三合一 |
| **使用方式** | evaluate() 函数 | pytest 断言（assert_test）|
| **CI/CD 集成** | 需手动编排 | 原生支持 |
| **多轮对话** | 有限 | 原生支持（Turn* 指标）|
| **自定义** | 有限 | 高度可定制（自定义指标 + 裁判 prompt）|
| **可解释性** | 分数 | **分数 + 推理理由** |
| **数据合成** | 基础 | 内置合成器 |
| **论文** | RAGAS (2309.15217) | 基于 G-Eval (2303.16634) + 多篇 |

---

## 六、RAG 评估实操指南

### 第一步：选指标
\`\`\`
必选: Faithfulness + Context Precision + Context Recall
可选: Answer Relevancy + Latency + Hallucination Rate
\`\`\`

### 第二步：构造数据集
- 至少 100~200 条有代表性的用户问题
- 覆盖不同场景（简单/复杂、事实性/推理型）

### 第三步：选框架并评估
\`\`\`
快速验证 → RAGAS（零成本，4 个指标）
生产级   → DeepEval（pytest CI/CD，50+ 指标）
\`\`\`

### 第四步：分析定位
\`\`\`
Faithfulness 低？
  → Context Recall 低？→ 检索覆盖不够（调 chunk / embedding）
  → Context Precision 低？→ 噪声多（加重排序）
  → Recall 和 Precision 都正常？→ 生成模型问题（优化 prompt / 换模型）
\`\`\`

### 第五步：持续监控
- 生产环境定期评估
- 跟踪指标趋势
- 指标异常 → 告警

---

## 七、关键论文清单

| 论文 | arXiv | 会议 | 意义 |
|------|-------|------|------|
| G-Eval: NLG Evaluation using GPT-4 (Liu et al.) | 2303.16634 | EMNLP 2023 | CoT 打分方法论文，DeepEval 核心技术来源 |
| Judging LLM-as-a-Judge (Zheng et al.) | 2306.05685 | NeurIPS 2023 | 验证了 LLM-as-Judge 可行性，发现偏见问题 |
| RAGAS (Espinosa-Anke et al.) | 2309.15217 | — | RAG 评估的开创性框架 |
| LLMs-as-Judges Survey (Li et al.) | 2412.05579 | — | LLM-as-Judge 全面综述 |
| A Survey on LLM-as-a-Judge (Jiang et al.) | 2411.15594 | — | 构建可信裁判系统的方法论 |
| JudgeBench (Tan et al.) | 2410.12784 | — | 评估裁判模型本身的基准 |
| Judging the Judges (Thakur et al.) | 2406.12624 | — | 系统评估裁判偏见和脆弱性 |
| TIES-Merging (Yadav et al.) | 2306.01708 | — | 参数合并解决符号冲突 |
| DARE (Yu et al.) | 2311.03099 | — | 99% delta 参数可丢弃 |
| InfiFusion (Yan et al.) | 2501.02795 | — | ULD + Top-K 蒸馏融合 |

---

## 相关概念
- [[RAG 检索增强生成]]
- [[AI Agent]]

## 延展阅读
- [RAGAS Docs](https://docs.ragas.io/)
- [DeepEval Docs](https://deepeval.com/docs/introduction)
- [What Matters for Model Merging at Scale? (Yadav et al., 2024)](https://arxiv.org/abs/2410.03617)
`,Yh=`---
type: topic
tags: [AI项目, Java, Spring Boot, AI Agent, RAG, 开源]
created: 2026-07-04
updated: 2026-07-04
related_sources: 1
source_url: https://app.notion.com/p/Snail-AI-Spring-Boot-4-Spring-AI-AI-Agent-3912a6ec1af88170a0a3d330bb2bb10b
---

# Snail AI — Java 生态的企业级 AI Agent 平台

## 概述

Snail AI 是由"爱组搭"团队开发的开源项目（Apache 2.0 协议），基于 **Java 17+ / Spring Boot 4 / Spring AI 2.0 / gRPC** 技术栈构建。核心目标：让 Java 开发者无需转 Python 就能构建 AI Agent 应用。

## 核心能力

1. **多模型管理**：统一接入多种 LLM 提供商
2. **Agent 编排**：可视化设计 + 编排 Agent 工作流
3. **RAG 知识库**：支持 Milvus / Elasticsearch / PgVector 三种向量存储
4. **长时记忆与技能管理**：Agent 具备持久化记忆和可扩展技能
5. **分布式架构**：基于 gRPC 实现服务间通信，支持水平扩展

## 关键技术栈

| 层级 | 技术 |
|------|------|
| 语言 | Java 17+ |
| 框架 | Spring Boot 4 |
| AI 框架 | Spring AI 2.0 |
| 通信 | gRPC |
| 向量存储 | Milvus / ES / PgVector |
| 协议 | Apache 2.0 |

## 当前状态

Snail AI 代表了 Java 生态在 AI Agent 领域的追赶——此前该领域几乎被 Python 生态（LangChain、LlamaIndex 等）垄断。

## 相关实体
- [[Snail AI]]
- [[Spring AI]]
- [[Milvus]]

## 相关概念
- [[AI Agent]]
- [[RAG 检索增强生成]]
- [[gRPC]]
- [[向量数据库]]
`,Xh=`---
type: topic
tags: [StarRocks, 数据加速, Catalog, 物化视图, Colocate Join, Data Cache, 联邦查询]
created: 2026-07-08
updated: 2026-07-08
---

# StarRocks Catalog 数据加速策略深度分析：同构 vs 异构

## 场景定义

| 维度 | 同构场景（SR → SR） | 异构场景（MySQL → SR） |
|------|---------------------|----------------------|
| 源端 | StarRocks 集群 A | MySQL / PostgreSQL / Oracle |
| 目标端 | StarRocks 集群 B（查询端） | StarRocks（查询端） |
| 核心诉求 | 跨集群查询加速、数据分发 | 实时分析加速、替代 MySQL 分析负载 |
| 数据形态 | 已具备 SR 优势（列存/向量化） | 行存、无物化视图、索引模式不同 |

## 同构场景：SR Catalog → SR

### 方案一：Internal Table + 物化视图 + Colocate Join（推荐）

**技术栈：**
- 数据通过 SMT/Flink CDC 迁移至目标集群 Internal Table
- 使用 Aggregate / Primary Key 模型设计存储
- Colocate Join 加速多表关联
- 异步物化视图透明改写查询

**执行路径：**
\`\`\`
源SR → SMT/CDC → 目标SR Internal Table
                    ↓
          Colocate Group (关联键同分桶)
                    ↓
           异步物化视图 (预聚合/预关联)
                    ↓
            查询透明改写 → 命中 MV
\`\`\`

**优势：**
- 完全利用 SR 原生能力：向量化、CBO、列存压缩
- 物化视图自动改写，业务零侵入
- Colocate Join 避免 Shuffle，10亿级表 Join 无压力
- 增量刷新，实时性高

**劣势：**
- 需要同步全量数据，有存储开销
- 数据迁移有延迟（分钟级）

**最佳场景：** 核心业务宽表关联、实时报表、高并发查询

### 方案二：StarRocks External Table（跨集群联邦查询）

目标集群通过 \`CREATE TABLE ... ENGINE=starrocks\` 映射源集群表。

**优势：** 零数据迁移，即查即用；无存储冗余。
**劣势：** 无法使用 Colocate Join（跨集群）；无法创建物化视图；依赖源集群稳定性。

**最佳场景：** 低频临时查询、跨集群数据探查

### 方案三：异步物化视图 + 跨湖加速

源 SR 数据同步至 Iceberg/Paimon，目标 SR 通过 Iceberg Catalog 读取，在 External Catalog 表上创建异步物化视图。

**优势：** 数据湖统一存储、存算分离；物化视图支持 External Table 增量刷新。
**劣势：** 架构复杂；查询路径更长；运维成本高。

**最佳场景：** 数据湖仓一体架构、冷热分离需求

## 异构场景：MySQL → SR

### 方案一：Flink CDC 实时同步 + Internal Table（推荐）

**技术栈：**
- Flink CDC 实时捕获 MySQL Binlog
- 写入 SR Primary Key 模型（支持 Upsert）
- 配合异步物化视图做预聚合/预关联
- Data Cache 加速热数据访问

\`\`\`
MySQL Binlog → Flink CDC → SR Primary Table
                              ↓
                       异步物化视图（小时级/天级聚合）
                              ↓
                        查询透明改写加速
\`\`\`

**优势：**
- 实时性高（秒级延迟），Exactly-Once 语义
- 完全利用 SR 列存+向量化能力
- 物化视图透明改写，业务 SQL 无需改
- 支持复杂 ETL（Join + 聚合 + 过滤）

**劣势：**
- 需要维护 Flink 任务
- 全量同步初始开销较大

**最佳场景：** MySQL 实时报表、替代原 MySQL 分析查询

### 方案二：JDBC Catalog 直连查询

通过 \`CREATE EXTERNAL CATALOG jdbc_mysql\` 直连 MySQL，依赖 Data Cache 做本地缓存。

\`\`\`sql
CREATE EXTERNAL CATALOG jdbc_mysql
PROPERTIES (
    "type"="jdbc",
    "user"="root",
    "password"="xxx",
    "jdbc_uri"="jdbc:mysql://127.0.0.1:3306",
    "driver_class"="com.mysql.cj.jdbc.Driver"
);
\`\`\`

**优势：** 零迁移，秒级接入；Data Cache 块级缓存减少远程 IO。
**劣势：** MySQL 行存+行执行引擎，复杂分析慢；无法创建物化视图；并发高可能打爆 MySQL。

**最佳场景：** 临时探查、MySQL 小表联邦查询、迁移过渡方案

### 方案三：DataX/CloudCanal 定时批量同步 + Aggregate Table

DataX 定时 T+1/T+0 同步，SR 端使用 Aggregate 模型预聚合。

**优势：** 架构简单，查询极快。
**劣势：** 非实时；不支持复杂 Join 预聚合。

**最佳场景：** 运营报表、固定维度 KPI 看板、日汇总

## 核心加速机制对比

| 加速机制 | 同构(SR→SR) | 异构(MySQL→SR) |
|----------|:----------:|:-------------:|
| 列存+向量化引擎 | ✅ 原生 | ✅ 需导入 |
| 物化视图(透明改写) | ✅ 强 | ❌ JDBC不支持 |
| Colocate Join | ✅ 强 | ❌ 不适用 |
| Data Cache | ✅ 存算分离 | ✅ JDBC可用 |
| Primary Key Upsert | ✅ | ✅ Flink CDC后 |
| 聚合表(Aggregate Key) | ✅ | ✅ 批量导入后 |
| 分区裁剪 | ✅ | ✅ 部分下推 |
| 索引(前缀/Zonemap/Bitmap) | ✅ 全部 | ❌ 有限下推 |

## 推荐总结

> 同构选 **Internal Table + 物化视图 + Colocate Join**
> 异构选 **Flink CDC + Primary Key + 物化视图**
> 临时/轻量选 **JDBC Catalog + Data Cache**
`,Zh=`---
type: topic
tags: [StarRocks, 数据查询, 跨数据源, 联邦查询, 数据湖, 湖仓一体]
created: 2026-07-07
updated: 2026-07-07
related_sources: 11
---

# StarRocks 跨数据源查询方案（深度调研）

> 基于 StarRocks 官方文档（Latest v4.1）及社区实践整理
> 2026-07-07 更新

---

## 一、概述

StarRocks 自 v2.3 引入 Catalog 机制，到 v3.0+ 全面成熟的跨数据源联邦查询（Federated Query）能力，使 StarRocks 可以作为**统一 SQL 分析引擎**，直接查询 Hive / Iceberg / Hudi / Delta Lake / MySQL / PostgreSQL / ES 等外部数据源，无需数据迁移。

**核心能力矩阵：**

| 能力 | 说明 |
|------|------|
| 零数据迁移 | 直接查询外部数据，无需导入 StarRocks |
| 跨源 JOIN | 同一 SQL 中 JOIN 内部表 + N 个外部数据源 |
| CBO 优化 | 基于代价的优化器，自动选择最佳 Join 策略 |
| Runtime Filter | 运行时过滤下推，减少 Join 数据量 |
| Data Cache | 热数据本地缓存，加速重复查询 |
| 物化视图 | 预计算跨源 JOIN 结果，透明改写加速 |

**参考来源：**
- [StarRocks Catalog 概述](https://docs.starrocks.io/docs/data_source/catalog/catalog_overview/) — 官方核心文档
- [Federated Querying Blog](https://www.starrocks.io/blog/federated-querying-across-apache-iceberg-apache-hudi-apache-hive-delta-lake-apache-paimon-jdbc-based-database-and-others-with-starrocks/index.html) — 官方博客确认跨 Catalog 查询支持

---

## 二、方案一：Catalog（推荐，v3.0+）

### 2.1 架构原理

\`\`\`
┌─────────────────────────────────────────────────────────────────┐
│                      StarRocks FE                               │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  SQL Parser → CBO Optimizer → 执行计划生成                 │  │
│  │     ↓ 读取元数据    ↓ 选择 Join 策略   ↓ Runtime Filter    │  │
│  └──────────┬────────────────────────────────────────────────┘  │
└─────────────┼───────────────────────────────────────────────────┘
              │ 调度执行计划
    ┌─────────┴─────────┐
    ▼                   ▼
┌─────────┐      ┌─────────┐
│  BE/CN  │ ...  │  BE/CN  │  ← MPP 并行执行
│  node 1 │      │  node n │
└────┬────┘      └────┬────┘
     │                │
     ├── HDFS/S3 ← 读取外部数据文件
     ├── JDBC   ← 下推谓词到 MySQL/PostgreSQL
     └── ES     ← 下推查询到 Elasticsearch
\`\`\`

**关键流程：**
1. **元数据获取**：FE 连接外部 Metastore（Hive Metastore / AWS Glue 等），获取表 Schema、分区信息
2. **查询优化**：CBO 基于统计信息，选择 Broadcast Join / Shuffle Join / Colocate Join 等策略
3. **执行下推**：BE/CN 并行从外部存储读取数据，向量化执行引擎处理

**参考来源：**
- [StarRocks CBO 优化器](https://docs.starrocks.io/docs/using_starrocks/Cost_based_optimizer/)
- [StarRocks Inside Scoop: SQL 执行流程](https://medium.com/starrocks-engineering/starrocks-inside-scoop-the-magic-journey-of-an-sql-statement-in-starrocks-c0b713f49c35)

### 2.2 支持的 Catalog 类型（详细）

| Catalog 类型 | 数据源 | 元数据服务 | 最低版本 | 数据存储支持 |
|-------------|--------|-----------|---------|------------|
| **Hive Catalog** | Apache Hive | Hive Metastore / AWS Glue | v2.4 → v3.0 推荐 | HDFS / S3 / GCS / OSS |
| **Iceberg Catalog** | Apache Iceberg | Hive Metastore / AWS Glue / REST / Glue | v2.4 → v3.0 推荐 | HDFS / S3 / GCS / OSS |
| **Hudi Catalog** | Apache Hudi | Hive Metastore / AWS Glue | v3.0 | HDFS / S3 / GCS / OSS |
| **Delta Lake Catalog** | Delta Lake | Hive Metastore / AWS Glue | v3.0 | HDFS / S3 / GCS / OSS |
| **JDBC Catalog** | MySQL / PostgreSQL / Oracle / SQL Server / ClickHouse | 直连 JDBC | v3.0 (MySQL/PG) / v3.2.9 (Oracle/SQL Server) / v3.3.0 (ClickHouse 实验) | — |
| **Elasticsearch Catalog** | Elasticsearch | 直连 ES | v3.1 | — |
| **Paimon Catalog** | Apache Paimon | 文件系统/Hive Metastore | v3.1 | HDFS / S3 / OSS |
| **Unified Catalog** | Hive + Iceberg + Hudi + Delta Lake 统一接入 | Hive Metastore / AWS Glue | v3.2 | HDFS / S3 / GCS / OSS |

**参考来源：**
- [CREATE EXTERNAL CATALOG 语法](https://docs.starrocks.io/docs/sql-reference/sql-statements/Catalog/CREATE_EXTERNAL_CATALOG/) — 所有 Catalog 类型的完整创建语法和样例
- [Unified Catalog 文档](https://docs.starrocks.io/docs/data_source/catalog/unified_catalog/)
- [阿里云 EMR Serverless StarRocks Catalog 使用](https://help.aliyun.com/zh/emr/emr-serverless-starrocks/data-catalog/) — 国内云环境实践

### 2.3 各 Catalog 创建与配置详解

#### 2.3.1 Hive Catalog

\`\`\`sql
-- 基于 Hive Metastore（最常见）
CREATE EXTERNAL CATALOG hive_catalog
PROPERTIES (
    "type" = "hive",
    "hive.metastore.uris" = "thrift://<metastore_host>:9083"
);

-- 基于 AWS Glue
CREATE EXTERNAL CATALOG hive_glue
PROPERTIES (
    "type" = "hive",
    "hive.metastore.type" = "glue",
    "aws.hive.metastore.glue.aws-access-key" = "xxxxx",
    "aws.hive.metastore.glue.aws-secret-key" = "xxxxx",
    "aws.hive.metastore.glue.endpoint" = "https://glue.us-east-1.amazonaws.com"
);
\`\`\`

#### 2.3.2 JDBC Catalog（常用于 MySQL/PostgreSQL）

\`\`\`sql
-- MySQL 示例
CREATE EXTERNAL CATALOG mysql_catalog
PROPERTIES (
    "type" = "jdbc",
    "user" = "root",
    "password" = "xxxx",
    "jdbc_uri" = "jdbc:mysql://192.168.1.100:3306",
    "driver_url" = "https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.30/mysql-connector-java-8.0.30.jar",
    "driver_class" = "com.mysql.cj.jdbc.Driver"
);

-- PostgreSQL 示例
CREATE EXTERNAL CATALOG pg_catalog
PROPERTIES (
    "type" = "jdbc",
    "user" = "postgres",
    "password" = "changeme",
    "jdbc_uri" = "jdbc:postgresql://192.168.1.100:5432/mydb",
    "driver_url" = "https://repo1.maven.org/maven2/org/postgresql/postgresql/42.3.3/postgresql-42.3.3.jar",
    "driver_class" = "org.postgresql.Driver"
);
\`\`\`

**⚠️ 注意事项：**
- BE/CN 节点需要能访问 \`driver_url\` 下载驱动 JAR
- BE/CN 节点需要配置 \`JAVA_HOME\` 为 JDK 绝对路径（不是 JRE）
- 修改后需重启 BE/CN

#### 2.3.3 Iceberg Catalog

\`\`\`sql
-- 基于 Hive Metastore
CREATE EXTERNAL CATALOG iceberg_catalog
PROPERTIES (
    "type" = "iceberg",
    "iceberg.catalog.type" = "hive",
    "iceberg.catalog.hive.metastore.uris" = "thrift://<host>:9083"
);

-- 基于 Iceberg REST Catalog
CREATE EXTERNAL CATALOG iceberg_rest
PROPERTIES (
    "type" = "iceberg",
    "iceberg.catalog.type" = "rest",
    "iceberg.catalog.uri" = "http://<rest_host>:8181/api/catalog"
);
\`\`\`

#### 2.3.4 Unified Catalog（统一接入多种湖格式）

\`\`\`sql
CREATE EXTERNAL CATALOG unified_catalog
PROPERTIES (
    "type" = "unified",
    "hive.metastore.uris" = "thrift://<metastore_host>:9083"
);
\`\`\`

Unified Catalog 可以在同一个 Catalog 下访问 Hive / Iceberg / Hudi / Delta Lake 四种格式的表。

#### 2.3.5 Elasticsearch Catalog

\`\`\`sql
CREATE EXTERNAL CATALOG es_catalog
PROPERTIES (
    "type" = "es",
    "elasticsearch.hosts" = "http://<es_host>:9200",
    "elasticsearch.user" = "username",
    "elasticsearch.password" = "password"
);
\`\`\`

**参考来源：**
- [JDBC Catalog 完整配置](https://docs.starrocks.io/docs/data_source/catalog/jdbc_catalog/)
- [Hive Catalog 配置](https://docs.starrocks.io/docs/data_source/catalog/hive_catalog/)
- [Iceberg Catalog 配置](https://docs.starrocks.io/docs/data_source/catalog/iceberg/iceberg_catalog/)
- [Elasticsearch Catalog 配置](https://docs.starrocks.io/docs/data_source/catalog/elasticsearch_catalog/)

---

## 三、跨数据源查询 SQL 模式详解

### 3.1 基础查询

\`\`\`sql
-- 查看所有 Catalog
SHOW CATALOGS;

-- 切换 Catalog
SET CATALOG hive_catalog;

-- 三段式直接查询
SELECT * FROM hive_catalog.hive_db.orders LIMIT 10;

-- 切换到默认 Catalog 后查询外部表
SET CATALOG default_catalog;
SELECT * FROM hive_catalog.hive_db.orders WHERE dt = '2026-07-07';
\`\`\`

### 3.2 跨 Catalog JOIN（核心能力）

\`\`\`sql
-- 场景1：Hive 订单表 × StarRocks 用户表 × MySQL 商品表
SELECT
    o.order_id,
    o.order_amount,
    u.user_name,
    u.user_level,
    p.product_name,
    p.category
FROM hive_catalog.hive_db.orders o                    -- Hive 外部表
JOIN default_catalog.olap_db.dim_users u              -- StarRocks 内部表
  ON o.user_id = u.user_id
JOIN mysql_catalog.mysql_db.dim_products p            -- MySQL 外部表
  ON o.product_id = p.product_id
WHERE o.order_date >= '2026-01-01'
  AND u.user_level = 'VIP'
  AND p.category = 'Electronics';
\`\`\`

### 3.3 跨 Catalog 子查询

\`\`\`sql
-- Hive 子查询 × StarRocks 主查询
SELECT *
FROM default_catalog.olap_db.sales s
WHERE s.product_id IN (
    SELECT product_id
    FROM hive_catalog.hive_db.products
    WHERE category = 'Hot'
);
\`\`\`

### 3.4 跨 Catalog CTE（公共表表达式）

\`\`\`sql
WITH vip_users AS (
    SELECT user_id, user_name
    FROM mysql_catalog.mysql_db.dim_users
    WHERE level = 'VIP'
),
recent_orders AS (
    SELECT *
    FROM hive_catalog.hive_db.orders
    WHERE order_date >= '2026-06-01'
)
SELECT
    v.user_name,
    COUNT(*) AS order_count,
    SUM(o.amount) AS total_amount
FROM vip_users v
JOIN recent_orders o ON v.user_id = o.user_id
GROUP BY v.user_name
ORDER BY total_amount DESC;
\`\`\`

### 3.5 将外部表数据导入 StarRocks（物化）

\`\`\`sql
-- INSERT INTO SELECT 实现批量导入
INSERT INTO default_catalog.olap_db.internal_orders
SELECT * FROM hive_catalog.hive_db.orders
WHERE dt = '2026-07-07';

-- CTAS（Create Table As Select）
CREATE TABLE default_catalog.olap_db.order_summary AS
SELECT
    o.order_date,
    p.category,
    SUM(o.amount) AS total_amount,
    COUNT(*) AS order_count
FROM hive_catalog.hive_db.orders o
JOIN mysql_catalog.mysql_db.dim_products p ON o.product_id = p.product_id
GROUP BY o.order_date, p.category;
\`\`\`

**参考来源：**
- [查询外部数据](https://docs.starrocks.io/docs/data_source/catalog/query_external_data/) — 官方查询语法指南
- [SELECT JOIN](https://docs.starrocks.io/docs/sql-reference/sql-statements/table_bucket_part_index/SELECT/SELECT_JOIN/) — JOIN 语法官方文档

---

## 四、方案二：外部表（v2.3–v3.0 方案，已不推荐）

> ⚠️ **StarRocks 官方已明确不推荐使用外部表**，除 StarRocks 集群间写入外，所有场景都应迁移到 Catalog。

**详见官方说明：**
- [External Table 文档](https://docs.starrocks.io/docs/data_source/External_table/) — 明确标注"From v3.0 onwards, we recommend that you use catalogs"

### 唯一的保留场景：跨 StarRocks 集群写入

用于**读写分离**和**跨集群同步**：

\`\`\`sql
-- 目标集群：创建目标表
CREATE TABLE t (k1 DATE, k2 INT, k3 VARCHAR(2048))
ENGINE=olap
DISTRIBUTED BY HASH(k1);

-- 源集群：创建外部表
CREATE EXTERNAL TABLE external_t
(k1 DATE, k2 INT, k3 VARCHAR(2048))
ENGINE=olap
DISTRIBUTED BY HASH(k1)
PROPERTIES (
    "host" = "127.0.0.1",  -- 目标集群 FE 地址
    "port" = "9020",        -- FE RPC 端口
    "user" = "user",
    "password" = "passwd",
    "database" = "db_test",
    "table" = "t"
);

-- 写入数据
INSERT INTO external_t SELECT * FROM source_table;
\`\`\`

**限制：** 只能 INSERT INTO / SHOW CREATE TABLE，**不能查询/DDL**，元数据每 10 秒同步。

---

## 五、性能优化深度分析

### 5.1 Data Cache（数据缓存）

> **核心机制**：将远程存储的热数据缓存到 BE/CN 本地磁盘，避免重复的远程 I/O。

从 v3.3.0 起默认启用，由两个组件构成：

| 组件 | 存储介质 | 缓存策略 | 缓存内容 |
|------|---------|---------|---------|
| **Page Cache** | 内存 | LRU | 解压后的数据页、索引页、外部表 Footer |
| **Block Cache** | 本地磁盘（推荐 NVMe） | LRU / SLRU | 远程数据文件的分块（固定大小） |

**配置参数（BE 配置）：**

\`\`\`properties
# Data Cache 总开关（v3.3+ 默认 true）
datacache_enable = true

# 内存上限
datacache_mem_size = 2GB

# 磁盘上限
datacache_disk_size = 100GB

# SLRU 策略更优（抵抗突发稀疏流量穿透热数据）
block_cache_eviction_strategy = slru
\`\`\`

**SLRU vs LRU：** SLRU（Segmented LRU）将缓存分为驱逐段和保护段，第二次访问的数据提升到保护段，防止"一次性临时数据"把热数据挤出。

**参考来源：**
- [Data Cache 官方文档](https://docs.starrocks.io/docs/data_source/data_cache/) — 包含 Page Cache + Block Cache 完整原理

### 5.2 CBO 优化器与 Join 策略

StarRocks 基于 **Cascades 框架**的 CBO 优化器（自研），支持：

| Join 策略 | 适用场景 | 说明 |
|-----------|---------|------|
| **Broadcast Join** | 小表 JOIN 大表 | 小表广播到所有 BE 节点，避免 Shuffle |
| **Shuffle Join** | 大表 JOIN 大表 | 按 Join Key 重新分布数据 |
| **Colocate Join** | Co-located 表 JOIN | 数据已按 Key 分布在同一节点，零网络传输 |
| **Replicated Join** | 小表复制 | 小表全量复制到每个节点 |

**对于跨 Catalog 查询**，CBO 支持：

1. **统计信息收集**（v3.2.0+）：可从 Hive / Iceberg / Hudi 等外部表采集统计信息，辅助 CBO 决策
2. **Runtime Filter 下推**：Hash Join 构建右表 Hash Table 后，将过滤条件下推到左表 Scan 阶段，大幅减少扫描数据量
3. **Join 顺序优化**：自动选择最优的 Join 顺序

**参考来源：**
- [CBO 优化器文档](https://docs.starrocks.io/docs/using_starrocks/Cost_based_optimizer/)
- [Why Joins Are Faster in StarRocks](https://www.starrocks.io/blog/inside-starrocks-why-joins-are-faster-than-youd-expect/index.html)
- [CMU 对 StarRocks CBO 的技术分析](https://kangkaisen.com/post/cmu-starrocks-query-optimizer) — 详细技术博客

### 5.3 谓词下推（Predicate Pushdown）

| 数据源 | 下推能力 | 说明 |
|--------|---------|------|
| Hive（Parquet/ORC） | ✅ 分区裁剪 + 谓词下推 | 利用 Parquet/ORC 的 min/max 统计信息 |
| JDBC（MySQL/PostgreSQL） | ✅ 支持下推 | WHERE 条件下推到外部数据库执行 |
| Elasticsearch | ✅ 支持下推 | 查询条件推送到 ES |
| Iceberg | ✅ 分区裁剪 + 谓词下推 | 支持 Iceberg 的 manifest 过滤 |
| Hudi | ✅ 支持 | 利用 Hudi 的元数据索引 |

**JDBC JOIN 下推（v3.x 实验功能）：**

\`\`\`sql
-- 开启 JDBC JOIN 下推
SET enable_jdbc_join_push_down = true;
\`\`\`

允许某些 INNER JOIN / CROSS JOIN 下推到 JDBC 外部数据库执行，利用外部数据库的索引加速。

### 5.4 物化视图加速跨源查询

从 v3.1 起，StarRocks 支持在**外部表/多源 Join 之上**创建异步物化视图，实现透明查询改写加速：

\`\`\`sql
-- 跨数据源物化视图
CREATE MATERIALIZED VIEW mv_order_analysis
DISTRIBUTED BY HASH(order_date)
REFRESH ASYNC EVERY 10 MINUTES
AS
SELECT
    o.order_date,
    p.category,
    u.city,
    SUM(o.amount) AS revenue,
    COUNT(DISTINCT o.user_id) AS user_count
FROM hive_catalog.hive_db.orders o
JOIN mysql_catalog.mysql_db.dim_products p ON o.product_id = p.product_id
JOIN default_catalog.olap_db.dim_users u ON o.user_id = u.user_id
GROUP BY o.order_date, p.category, u.city;
\`\`\`

查询会自动改写：后续查询该 JOIN 结果的 SQL 会被路由到物化视图，无需重新执行 Join。

**参考来源：**
- [阿里云 EMR StarRocks 物化视图加速数据湖](https://help.aliyun.com/zh/emr/emr-serverless-starrocks/use-materialized-views-to-accelerate-data-lake-queries)

### 5.5 查询调优实践

\`\`\`sql
-- 查看执行计划
EXPLAIN SELECT * FROM hive_catalog.hive_db.orders WHERE dt = '2026-07-07';

-- 查看详细 Profile（执行后）
SHOW PROFILELAST;
-- 或通过 Query Profile 页面查看

-- 启用 Runtime Filter（默认开启）
SET enable_global_runtime_filter = true;

-- 调整广播阈值（用于 Broadcast Join 优化）
SET broadcast_row_limit = 15000000;
\`\`\`

**调优要点：**
1. 避免 \`SELECT *\`，只查询需要的列
2. 尽量使用分区裁剪（Partition Pruning）
3. 对频繁查询的外部数据，使用 Data Cache 加速
4. 对跨源 JOIN 的场景，考虑建物化视图预计算

**参考来源：**
- [StarRocks 查询调优最佳实践](https://www.starrocks.io/blog/starrocks-best-practices-queries/index.html)
- [StarRocks 查询调优文档](https://docs.starrocks.io/docs/category/query-tuning/)

---

## 六、对比分析：Catalog vs 外部表 vs Trino Connector

| 维度 | **Catalog（推荐）** | **外部表（旧）** | **Trino Connector** |
|------|-------------------|----------------|-------------------|
| 引入版本 | v3.0+ | v2.3 | 任意 |
| 方向 | StarRocks 查外部数据 | StarRocks 查外部数据（旧） | Trino 查 StarRocks 数据 |
| 使用复杂度 | 低（创建一次 Catalog） | 中（每个表建一次） | 低（安装插件） |
| 性能 | 优（Data Cache / CBO） | 一般（无 Data Cache 优化） | 取决于 Trino |
| 跨源 JOIN | ✅ 原生支持 | ❌ 不推荐 | ✅ Trino 端支持 |
| 数据写入外部 | ❌ 不支持 | ✅ 仅限 StarRocks→StarRocks | ✅ Trino INSERT |
| 官方推荐度 | ✅ 强烈推荐 | ⚠️ 已不推荐 | 适用 Trino 生态 |

---

## 七、生产环境最佳实践

### 7.1 部署建议

| 组件 | 建议 |
|------|------|
| **StarRocks 版本** | ≥ v3.2（支持 Unified Catalog + 物化视图 + 外部表统计信息） |
| **BE 磁盘** | 启用 Data Cache 时，推荐 NVMe SSD 作为缓存盘 |
| **网络** | StarRocks BE ↔ 外部存储（HDFS/S3）之间的带宽要充足 |
| **元数据服务** | Hive Metastore 建议独立部署，避免查询压力影响源系统 |

### 7.2 选型决策树

\`\`\`
需要查询的数据源是什么？
├── Hive / Iceberg / Hudi / Delta Lake
│   └── 使用对应的 Catalog（或 Unified Catalog）
├── MySQL / PostgreSQL / Oracle / SQL Server
│   └── 使用 JDBC Catalog
├── Elasticsearch
│   └── 使用 Elasticsearch Catalog
├── Apache Paimon
│   └── 使用 Paimon Catalog
├── 多种湖格式混用（Hive + Iceberg + Hudi + Delta Lake）
│   └── 使用 Unified Catalog（v3.2+）
└── 跨 StarRocks 集群写入
    └── 使用 StarRocks External Table（唯一保留场景）
\`\`\`

### 7.3 性能优化检查清单

- [ ] Data Cache 是否已启用并分配足够磁盘空间？
- [ ] 外部表是否采集了统计信息？（\`ANALYZE TABLE\`）
- [ ] 查询是否利用了分区裁剪？（WHERE 条件包含分区字段）
- [ ] Runtime Filter 是否开启？
- [ ] 是否创建了合适的物化视图？
- [ ] 频繁读取的 JDBC 源是否开启了 JOIN 下推？
- [ ] BE 节点磁盘是否使用 NVMe？

### 7.4 已知限制

1. **JDBC Catalog 不支持 Data Cache**（数据不上缓存盘）
2. **外部表不支持创建索引**
3. **跨 Catalog 写入**：仅 StarRocks 外部表支持 INSERT INTO
4. **物化视图刷新**：异步物化视图有数据延迟（分钟级）
5. **JDBC 连接数**：每个 BE 节点会建立到 JDBC 源的连接，注意连接池限制

---

## 八、社区案例参考

| 公司 | 场景 | 方案 |
|------|------|------|
| **理想汽车** | 加速 Hive 数据查询 | StarRocks Catalog 直接查询 Hive 表 |
| **同程旅行** | 用户画像分析 | Unified Catalog 整合 Hive + MySQL |
| **七猫** | 用户行为分析 | StarRocks 跨数据源 JOIN 分析 |
| **多个云厂商** | 湖仓一体化 | EMR Serverless StarRocks + Catalog |

**参考来源：**
- [StarRocks 用户实践合集](https://forum.mirrorship.cn/t/topic/12153)
- [Apache Polaris + StarRocks 一体化湖仓](https://polaris.apache.org/blog/2025/10/21/starrocks-and-apache-polaris-integration-building-a-unified-high-performance-data-lakehouse/)

---

## 九、参考资料汇总

### 官方文档（StarRocks v4.1）

| 文档 | 链接 |
|------|------|
| Catalog 概述 | https://docs.starrocks.io/docs/data_source/catalog/catalog_overview/ |
| CREATE EXTERNAL CATALOG | https://docs.starrocks.io/docs/sql-reference/sql-statements/Catalog/CREATE_EXTERNAL_CATALOG/ |
| 查询外部数据 | https://docs.starrocks.io/docs/data_source/catalog/query_external_data/ |
| Data Cache | https://docs.starrocks.io/docs/data_source/data_cache/ |
| CBO 优化器 | https://docs.starrocks.io/docs/using_starrocks/Cost_based_optimizer/ |
| 查询调优 | https://docs.starrocks.io/docs/category/query-tuning/ |
| 外部表（旧） | https://docs.starrocks.io/docs/data_source/External_table/ |
| JDBC Catalog | https://docs.starrocks.io/docs/data_source/catalog/jdbc_catalog/ |
| Hive Catalog | https://docs.starrocks.io/docs/data_source/catalog/hive_catalog/ |
| Iceberg Catalog | https://docs.starrocks.io/docs/data_source/catalog/iceberg/iceberg_catalog/ |
| Hudi Catalog | https://docs.starrocks.io/docs/data_source/catalog/hudi_catalog/ |
| Delta Lake Catalog | https://docs.starrocks.io/docs/data_source/catalog/deltalake_catalog/ |
| Unified Catalog | https://docs.starrocks.io/docs/data_source/catalog/unified_catalog/ |
| ES Catalog | https://docs.starrocks.io/docs/data_source/catalog/elasticsearch_catalog/ |
| Paimon Catalog | https://docs.starrocks.io/docs/data_source/catalog/paimon_catalog/ |
| StarRocks SELECT JOIN | https://docs.starrocks.io/docs/sql-reference/sql-statements/table_bucket_part_index/SELECT/SELECT_JOIN/ |

### 官方博客

| 文章 | 链接 |
|------|------|
| Federated Querying（联邦查询） | https://www.starrocks.io/blog/federated-querying-across-apache-iceberg-apache-hudi-apache-hive-delta-lake-apache-paimon-jdbc-based-database-and-others-with-starrocks/index.html |
| Why Joins Are Faster | https://www.starrocks.io/blog/inside-starrocks-why-joins-are-faster-than-youd-expect/index.html |
| 查询最佳实践 | https://www.starrocks.io/blog/starrocks-best-practices-queries/index.html |
| StarRocks 整体介绍 | https://www.starrocks.io/blog/introduction_to_starrocks/index.html |
| SQL 在 StarRocks 的执行旅程 | https://medium.com/starrocks-engineering/starrocks-inside-scoop-the-magic-journey-of-an-sql-statement-in-starrocks-c0b713f49c35 |

### 第三方资料

| 来源 | 链接 |
|------|------|
| 阿里云 EMR StarRocks Catalog | https://help.aliyun.com/zh/emr/emr-serverless-starrocks/data-catalog/ |
| 阿里云 EMR 物化视图加速数据湖 | https://help.aliyun.com/zh/emr/emr-serverless-starrocks/use-materialized-views-to-accelerate-data-lake-queries |
| Apache Polaris + StarRocks 湖仓一体 | https://polaris.apache.org/blog/2025/10/21/starrocks-and-apache-polaris-integration-building-a-unified-high-performance-data-lakehouse/ |
| StarRocks vs Redshift 多源联邦查询对比 | https://medium.com/@indomitability/why-starrocks-is-better-than-redshift-for-multi-source-data-federation-968caadb31b9 |
| CMU 对 StarRocks CBO 的技术分析 | https://kangkaisen.com/post/cmu-starrocks-query-optimizer |
| StarRocks 社区论坛实践案例 | https://forum.mirrorship.cn/t/topic/12153 |
`,ny=`---
type: topic
tags: [模型训练, LLM, 微调, 开源]
created: 2026-07-04
updated: 2026-07-04
related_sources: 1
source_url: https://app.notion.com/p/Unsloth-3912a6ec1af881d19976f9166662acd2
---

# Unsloth — 消费级 GPU 高效微调大模型

## 概述

Unsloth 是一个开源框架，专注在**消费级 GPU** 上高效微调大语言模型（LLM）。通过内核级优化（手动编写 CUDA/Triton 算子），训练速度提升 2~5 倍，MoE（混合专家）模型可达 12 倍，显存占用减少 70%~80%。兼容 Llama-3、Mistral、Phi-4、Gemma、Qwen、DeepSeek 等主流模型。

2026 年推出 **Unsloth Studio** 无代码 Web UI，支持 Mac/Windows/Linux，最低仅需 3GB RAM 即可运行。

## 核心能力

1. **速度优化**：训练速度 2~5 倍提升，MoE 模型加速高达 12 倍
2. **显存效率**：显存占用降低 70%~80%，使消费级 GPU（如 RTX 3060）也能微调 7B 级别模型
3. **广泛兼容**：支持 Llama-3、Mistral、Phi-4、Gemma、Qwen、DeepSeek 等主流开源模型
4. **无代码界面**：Unsloth Studio 让非技术用户也能进行模型微调

## 关键数据

- MoE 模型训练加速：最高 **12 倍**
- 显存节省：**70%~80%**
- 最低运行要求：**3GB RAM**
- 平台支持：Mac / Windows / Linux

## 当前状态

2026 年推出的 Unsloth Studio 标志着该项目从命令行工具向**全民化 AI 训练**的转变——不再局限于开发者群体。

## 相关实体
- [[Unsloth]]
- [[Llama-3]]（待创建）
- [[Mistral]]（待创建）
- [[DeepSeek]]（待创建）
- [[Qwen]]（待创建）

## 相关概念
- [[模型微调]]
- [[混合专家模型 MoE]]
- [[CUDA 优化]]
`,ey=`---
type: topic
tags: [万象, AI分析, MCP, ChatBI, Agent, 数据平台]
created: 2026-07-04
updated: 2026-07-04
---

# 万象AI分析平台

## 概述

万象AI分析是基于 MCP 协议构建的智能数据分析平台，集成流量地图、交叉分析、群体画像、AI圈人、智能圈人等能力，实现从数据分析到运营执行的完整闭环。

## 核心能力

1. **流量地图**：分析业务相关性，推荐交叉业务
2. **交叉分析**：通过交叉分析结果实现自动圈人，进行群体分析
3. **群体画像**：特征分析和推荐，支撑人群圈选和业务推荐
4. **AI圈人**：AI 自主选择标签，生成人群包，查找相似人群规则
5. **智能圈人**：基于效果数据反馈，正向迭代优化圈选策略

## 技术架构

- **AI Agent 能力**：流式输出、subAgent、圈选标签、MCP 工具调用
- **ChatBI / Pandas**：自然语言数据分析，支持 Excel 多文件、富文本 HTML 输出
- **Schema Linking**：基于语义检索的数据库 Schema 智能关联
- **MCP 工具并行调用**：AI 自主确定并行工具调用 → 回收结果 → 下一步调用，循环至最终结果

## 数据源

- 万象标签数据 / 标签值数据
- 流量地图数据
- 交叉分析数据
- 投放效果数据
- 万象元数据（标签、人群规则/人群包、运营计划）
- 伏羲事件 / 埋点数据
- 用户数据（SR 即席查询）

## 当前状态

2026 上半年已完成 AI Agent 能力建设 80%、智能圈人 85%、ChatBI 75%、标签治理 90%。

## 相关实体
- [[AutoLink]]

## 相关概念
- [[AI Agent]]
- [[MCP 模型上下文协议]]
- [[RAG 检索增强生成]]
`;var Wa={exports:{}},mi={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rd;function ty(){if(Rd)return mi;Rd=1;var t=vs(),l=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(f,g,m){var y,h={},v=null,A=null;m!==void 0&&(v=""+m),g.key!==void 0&&(v=""+g.key),g.ref!==void 0&&(A=g.ref);for(y in g)a.call(g,y)&&!c.hasOwnProperty(y)&&(h[y]=g[y]);if(f&&f.defaultProps)for(y in g=f.defaultProps,g)h[y]===void 0&&(h[y]=g[y]);return{$$typeof:l,type:f,key:v,ref:A,props:h,_owner:s.current}}return mi.Fragment=i,mi.jsx=u,mi.jsxs=u,mi}var Pd;function ry(){return Pd||(Pd=1,Wa.exports=ty()),Wa.exports}var j=ry();function Dd({categories:t,activePath:l,onSelect:i,onToggleCategory:a,onSearch:s,pageCount:c,allTags:u,activeTag:f,onTagSelect:g}){const[m,y]=En.useState(!0),[h,v]=En.useState("");En.useEffect(()=>{f&&y(!1)},[f]),En.useEffect(()=>{m&&v("")},[m]);const A=h.toLowerCase().trim(),E=A.length>=1?u.filter(_=>_.name.toLowerCase().includes(A)):u;return j.jsxs("aside",{className:"sidebar",children:[j.jsxs("div",{className:"sidebar-header",children:[j.jsx("h1",{children:"LLM Wiki"}),j.jsxs("p",{children:[c," 个页面"]})]}),j.jsx("div",{className:"sidebar-search",children:j.jsxs("button",{onClick:s,children:[j.jsx("svg",{width:"16",height:"16",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:j.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),j.jsx("span",{children:"搜索页面..."}),j.jsx("kbd",{children:"Ctrl+K"})]})}),j.jsxs("nav",{className:"sidebar-nav",children:[t.map(_=>j.jsxs("div",{style:{marginBottom:4},children:[j.jsxs("button",{onClick:()=>a(_.name),className:"cat-btn",children:[j.jsx("span",{className:`arrow ${_.collapsed?"":"open"}`,children:"▶"}),_.name,j.jsx("span",{className:"count",children:_.pages.length})]}),!_.collapsed&&j.jsx("div",{className:"cat-pages",children:_.pages.map(b=>j.jsx("div",{children:j.jsx("button",{onClick:()=>i(b),className:`page-btn${l===b.path?" active":""}`,title:b.summary||b.title,children:b.title})},b.path))})]},_.name)),u.length>0&&j.jsxs("div",{style:{padding:"8px 0",marginTop:8,borderTop:"1px solid var(--border)"},children:[j.jsxs("button",{onClick:()=>y(!m),className:"cat-btn",style:{marginBottom:4},children:[j.jsx("span",{className:`arrow ${m?"":"open"}`,children:"▶"}),"标签",j.jsx("span",{className:"count",children:u.length})]}),!m&&!f&&j.jsxs("div",{children:[j.jsx("div",{style:{padding:"4px 8px 6px"},children:j.jsx("input",{type:"text",value:h,onChange:_=>v(_.target.value),placeholder:"搜索标签...",className:"tag-search-input"})}),j.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:4,padding:"4px 8px",maxHeight:300,overflowY:"auto"},children:[E.length===0&&j.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",padding:"4px 0"},children:"无匹配标签"}),E.map(_=>j.jsxs("button",{onClick:b=>{b.stopPropagation(),g(_.name)},className:"tag-btn",children:[_.name,j.jsx("span",{className:"tag-count",children:_.count})]},_.name))]})]}),!m&&f&&j.jsxs("div",{style:{padding:"4px 8px",fontSize:12,color:"var(--text-muted)"},children:["已选: ",j.jsxs("strong",{style:{color:"var(--accent)"},children:["#",f]}),j.jsx("button",{onClick:_=>{_.stopPropagation(),g(f)},style:{marginLeft:8,fontSize:11,color:"var(--text-muted)",textDecoration:"underline"},children:"清除"})]}),m&&f&&j.jsxs("div",{style:{padding:"4px 8px",fontSize:12,color:"var(--text-muted)"},children:["已选: ",j.jsxs("strong",{style:{color:"var(--accent)"},children:["#",f]}),j.jsx("button",{onClick:_=>{_.stopPropagation(),g(f)},style:{marginLeft:8,fontSize:11,color:"var(--text-muted)",textDecoration:"underline"},children:"清除"})]})]})]}),j.jsx("div",{className:"sidebar-footer",children:"LLM Wiki Viewer · 自动索引"})]})}function iy(t,l){const i={};return(t[t.length-1]===""?[...t,""]:t).join((i.padRight?" ":"")+","+(i.padLeft===!1?"":" ")).trim()}const ly=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,oy=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,ay={};function Td(t,l){return(ay.jsx?oy:ly).test(t)}const sy=/[ \t\n\f\r]/g;function uy(t){return typeof t=="object"?t.type==="text"?Md(t.value):!1:Md(t)}function Md(t){return t.replace(sy,"")===""}class xi{constructor(l,i,a){this.normal=i,this.property=l,a&&(this.space=a)}}xi.prototype.normal={};xi.prototype.property={};xi.prototype.space=void 0;function Cp(t,l){const i={},a={};for(const s of t)Object.assign(i,s.property),Object.assign(a,s.normal);return new xi(i,a,l)}function ss(t){return t.toLowerCase()}class Ae{constructor(l,i){this.attribute=i,this.property=l}}Ae.prototype.attribute="";Ae.prototype.booleanish=!1;Ae.prototype.boolean=!1;Ae.prototype.commaOrSpaceSeparated=!1;Ae.prototype.commaSeparated=!1;Ae.prototype.defined=!1;Ae.prototype.mustUseProperty=!1;Ae.prototype.number=!1;Ae.prototype.overloadedBoolean=!1;Ae.prototype.property="";Ae.prototype.spaceSeparated=!1;Ae.prototype.space=void 0;let cy=0;const An=Yt(),Qn=Yt(),us=Yt(),W=Yt(),On=Yt(),Jt=Yt(),Ie=Yt();function Yt(){return 2**++cy}const cs=Object.freeze(Object.defineProperty({__proto__:null,boolean:An,booleanish:Qn,commaOrSpaceSeparated:Ie,commaSeparated:Jt,number:W,overloadedBoolean:us,spaceSeparated:On},Symbol.toStringTag,{value:"Module"})),Va=Object.keys(cs);class Ss extends Ae{constructor(l,i,a,s){let c=-1;if(super(l,i),Od(this,"space",s),typeof a=="number")for(;++c<Va.length;){const u=Va[c];Od(this,Va[c],(a&cs[u])===cs[u])}}}Ss.prototype.defined=!0;function Od(t,l,i){i&&(t[l]=i)}function Lr(t){const l={},i={};for(const[a,s]of Object.entries(t.properties)){const c=new Ss(a,t.transform(t.attributes||{},a),s,t.space);t.mustUseProperty&&t.mustUseProperty.includes(a)&&(c.mustUseProperty=!0),l[a]=c,i[ss(a)]=a,i[ss(c.attribute)]=a}return new xi(l,i,t.space)}const xp=Lr({properties:{ariaActiveDescendant:null,ariaAtomic:Qn,ariaAutoComplete:null,ariaBusy:Qn,ariaChecked:Qn,ariaColCount:W,ariaColIndex:W,ariaColSpan:W,ariaControls:On,ariaCurrent:null,ariaDescribedBy:On,ariaDetails:null,ariaDisabled:Qn,ariaDropEffect:On,ariaErrorMessage:null,ariaExpanded:Qn,ariaFlowTo:On,ariaGrabbed:Qn,ariaHasPopup:null,ariaHidden:Qn,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:On,ariaLevel:W,ariaLive:null,ariaModal:Qn,ariaMultiLine:Qn,ariaMultiSelectable:Qn,ariaOrientation:null,ariaOwns:On,ariaPlaceholder:null,ariaPosInSet:W,ariaPressed:Qn,ariaReadOnly:Qn,ariaRelevant:null,ariaRequired:Qn,ariaRoleDescription:On,ariaRowCount:W,ariaRowIndex:W,ariaRowSpan:W,ariaSelected:Qn,ariaSetSize:W,ariaSort:null,ariaValueMax:W,ariaValueMin:W,ariaValueNow:W,ariaValueText:null,role:null},transform(t,l){return l==="role"?l:"aria-"+l.slice(4).toLowerCase()}});function Ip(t,l){return l in t?t[l]:l}function Ep(t,l){return Ip(t,l.toLowerCase())}const dy=Lr({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Jt,acceptCharset:On,accessKey:On,action:null,allow:null,allowFullScreen:An,allowPaymentRequest:An,allowUserMedia:An,alpha:An,alt:null,as:null,async:An,autoCapitalize:null,autoComplete:On,autoFocus:An,autoPlay:An,blocking:On,capture:null,charSet:null,checked:An,cite:null,className:On,closedBy:null,colorSpace:null,cols:W,colSpan:W,command:null,commandFor:null,content:null,contentEditable:Qn,controls:An,controlsList:On,coords:W|Jt,crossOrigin:null,data:null,dateTime:null,decoding:null,default:An,defer:An,dir:null,dirName:null,disabled:An,download:us,draggable:Qn,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:An,formTarget:null,headers:On,height:W,hidden:us,high:W,href:null,hrefLang:null,htmlFor:On,httpEquiv:On,id:null,imageSizes:null,imageSrcSet:null,inert:An,inputMode:null,integrity:null,is:null,isMap:An,itemId:null,itemProp:On,itemRef:On,itemScope:An,itemType:On,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:An,low:W,manifest:null,max:null,maxLength:W,media:null,method:null,min:null,minLength:W,multiple:An,muted:An,name:null,nonce:null,noModule:An,noValidate:An,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:An,optimum:W,pattern:null,ping:On,placeholder:null,playsInline:An,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:An,referrerPolicy:null,rel:On,required:An,reversed:An,rows:W,rowSpan:W,sandbox:On,scope:null,scoped:An,seamless:An,selected:An,shadowRootClonable:An,shadowRootCustomElementRegistry:An,shadowRootDelegatesFocus:An,shadowRootMode:null,shadowRootSerializable:An,shape:null,size:W,sizes:null,slot:null,span:W,spellCheck:Qn,src:null,srcDoc:null,srcLang:null,srcSet:null,start:W,step:null,style:null,tabIndex:W,target:null,title:null,translate:null,type:null,typeMustMatch:An,useMap:null,value:Qn,width:W,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:On,axis:null,background:null,bgColor:null,border:W,borderColor:null,bottomMargin:W,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:An,declare:An,event:null,face:null,frame:null,frameBorder:null,hSpace:W,leftMargin:W,link:null,longDesc:null,lowSrc:null,marginHeight:W,marginWidth:W,noResize:An,noHref:An,noShade:An,noWrap:An,object:null,profile:null,prompt:null,rev:null,rightMargin:W,rules:null,scheme:null,scrolling:Qn,standby:null,summary:null,text:null,topMargin:W,valueType:null,version:null,vAlign:null,vLink:null,vSpace:W,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:An,disablePictureInPicture:An,disableRemotePlayback:An,exportParts:Jt,part:On,prefix:null,property:null,results:W,security:null,unselectable:null},space:"html",transform:Ep}),py=Lr({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",maskType:"mask-type",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Ie,accentHeight:W,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:W,amplitude:W,arabicForm:null,ascent:W,attributeName:null,attributeType:null,azimuth:W,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:W,by:null,calcMode:null,capHeight:W,className:On,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:W,diffuseConstant:W,direction:null,display:null,dur:null,divisor:W,dominantBaseline:null,download:An,dx:null,dy:null,edgeMode:null,editable:null,elevation:W,enableBackground:null,end:null,event:null,exponent:W,externalResourcesRequired:null,fill:null,fillOpacity:W,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Jt,g2:Jt,glyphName:Jt,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:W,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:W,horizOriginX:W,horizOriginY:W,id:null,ideographic:W,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:W,k:W,k1:W,k2:W,k3:W,k4:W,kernelMatrix:Ie,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:W,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:W,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:W,overlineThickness:W,paintOrder:null,panose1:null,path:null,pathLength:W,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:On,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:W,pointsAtY:W,pointsAtZ:W,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Ie,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Ie,rev:Ie,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Ie,requiredFeatures:Ie,requiredFonts:Ie,requiredFormats:Ie,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:W,specularExponent:W,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:W,strikethroughThickness:W,string:null,stroke:null,strokeDashArray:Ie,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:W,strokeOpacity:W,strokeWidth:null,style:null,surfaceScale:W,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Ie,tabIndex:W,tableValues:null,target:null,targetX:W,targetY:W,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Ie,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:W,underlineThickness:W,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:W,values:null,vAlphabetic:W,vMathematical:W,vectorEffect:null,vHanging:W,vIdeographic:W,version:null,vertAdvY:W,vertOriginX:W,vertOriginY:W,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:W,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Ip}),Lp=Lr({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(t,l){return"xlink:"+l.slice(5).toLowerCase()}}),_p=Lr({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Ep}),Rp=Lr({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(t,l){return"xml:"+l.slice(3).toLowerCase()}}),fy={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},gy=/[A-Z]/g,bd=/-[a-z]/g,my=/^data[-\w.:]+$/i;function hy(t,l){const i=ss(l);let a=l,s=Ae;if(i in t.normal)return t.property[t.normal[i]];if(i.length>4&&i.slice(0,4)==="data"&&my.test(l)){if(l.charAt(4)==="-"){const c=l.slice(5).replace(bd,ky);a="data"+c.charAt(0).toUpperCase()+c.slice(1)}else{const c=l.slice(4);if(!bd.test(c)){let u=c.replace(gy,yy);u.charAt(0)!=="-"&&(u="-"+u),l="data"+u}}s=Ss}return new s(a,l)}function yy(t){return"-"+t.toLowerCase()}function ky(t){return t.charAt(1).toUpperCase()}const Ay=Cp([xp,dy,Lp,_p,Rp],"html"),ws=Cp([xp,py,Lp,_p,Rp],"svg");function vy(t){return t.join(" ").trim()}var hi={},qa,Fd;function Sy(){if(Fd)return qa;Fd=1;var t=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,l=/\n/g,i=/^\s*/,a=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,s=/^:\s*/,c=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,u=/^[;\s]*/,f=/^\s+|\s+$/g,g=`
`,m="/",y="*",h="",v="comment",A="declaration";qa=function(_,b){if(typeof _!="string")throw new TypeError("First argument must be a string");if(!_)return[];b=b||{};var M=1,U=1;function B($){var Y=$.match(l);Y&&(M+=Y.length);var an=$.lastIndexOf(g);U=~an?$.length-an:U+$.length}function rn(){var $={line:M,column:U};return function(Y){return Y.position=new un($),en(),Y}}function un($){this.start=$,this.end={line:M,column:U},this.source=b.source}un.prototype.content=_;function O($){var Y=new Error(b.source+":"+M+":"+U+": "+$);if(Y.reason=$,Y.filename=b.source,Y.line=M,Y.column=U,Y.source=_,!b.silent)throw Y}function V($){var Y=$.exec(_);if(Y){var an=Y[0];return B(an),_=_.slice(an.length),Y}}function en(){V(i)}function cn($){var Y;for($=$||[];Y=D();)Y!==!1&&$.push(Y);return $}function D(){var $=rn();if(!(m!=_.charAt(0)||y!=_.charAt(1))){for(var Y=2;h!=_.charAt(Y)&&(y!=_.charAt(Y)||m!=_.charAt(Y+1));)++Y;if(Y+=2,h===_.charAt(Y-1))return O("End of comment missing");var an=_.slice(2,Y-2);return U+=2,B(an),_=_.slice(Y),U+=2,$({type:v,comment:an})}}function Z(){var $=rn(),Y=V(a);if(Y){if(D(),!V(s))return O("property missing ':'");var an=V(c),xn=$({type:A,property:E(Y[0].replace(t,h)),value:an?E(an[0].replace(t,h)):h});return V(u),xn}}function Q(){var $=[];cn($);for(var Y;Y=Z();)Y!==!1&&($.push(Y),cn($));return $}return en(),Q()};function E(_){return _?_.replace(f,h):h}return qa}var Qa,Nd;function wy(){if(Nd)return Qa;Nd=1;var t=Sy();function l(i,a){var s=null;if(!i||typeof i!="string")return s;for(var c,u=t(i),f=typeof a=="function",g,m,y=0,h=u.length;y<h;y++)c=u[y],g=c.property,m=c.value,f?a(g,m,c):m&&(s||(s={}),s[g]=m);return s}return Qa=l,Qa}var yi={},zd;function Cy(){if(zd)return yi;zd=1,yi.__esModule=!0,yi.camelCase=void 0;var t=/^--[a-zA-Z0-9-]+$/,l=/-([a-z])/g,i=/^[^-]+$/,a=/^-(webkit|moz|ms|o)-/,s=function(c){return!c||i.test(c)||t.test(c)?c:c.toLowerCase().replace(a,function(u,f){return f+"-"}).replace(l,function(u,f){return f.toUpperCase()})};return yi.camelCase=s,yi}var Bd;function xy(){return Bd||(Bd=1,function(t){var l=hi&&hi.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};t.__esModule=!0;var i=l(wy()),a=Cy();function s(c){if(!c||typeof c!="string")return{};var u={};return i.default(c,function(f,g){f&&g&&(u[a.camelCase(f)]=g)}),u}t.default=s}(hi)),hi}var Iy=xy();const Ey=As(Iy),Pp=Dp("end"),Cs=Dp("start");function Dp(t){return l;function l(i){const a=i&&i.position&&i.position[t]||{};if(typeof a.line=="number"&&a.line>0&&typeof a.column=="number"&&a.column>0)return{line:a.line,column:a.column,offset:typeof a.offset=="number"&&a.offset>-1?a.offset:void 0}}}function Ly(t){const l=Cs(t),i=Pp(t);if(l&&i)return{start:l,end:i}}function Ai(t){return!t||typeof t!="object"?"":"position"in t||"type"in t?Gd(t.position):"start"in t||"end"in t?Gd(t):"line"in t||"column"in t?ds(t):""}function ds(t){return jd(t&&t.line)+":"+jd(t&&t.column)}function Gd(t){return ds(t&&t.start)+"-"+ds(t&&t.end)}function jd(t){return t&&typeof t=="number"?t:1}class se extends Error{constructor(l,i,a){super(),typeof i=="string"&&(a=i,i=void 0);let s="",c={},u=!1;if(i&&("line"in i&&"column"in i?c={place:i}:"start"in i&&"end"in i?c={place:i}:"type"in i?c={ancestors:[i],place:i.position}:c={...i}),typeof l=="string"?s=l:!c.cause&&l&&(u=!0,s=l.message,c.cause=l),!c.ruleId&&!c.source&&typeof a=="string"){const g=a.indexOf(":");g===-1?c.ruleId=a:(c.source=a.slice(0,g),c.ruleId=a.slice(g+1))}if(!c.place&&c.ancestors&&c.ancestors){const g=c.ancestors[c.ancestors.length-1];g&&(c.place=g.position)}const f=c.place&&"start"in c.place?c.place.start:c.place;this.ancestors=c.ancestors||void 0,this.cause=c.cause||void 0,this.column=f?f.column:void 0,this.fatal=void 0,this.file="",this.message=s,this.line=f?f.line:void 0,this.name=Ai(c.place)||"1:1",this.place=c.place||void 0,this.reason=this.message,this.ruleId=c.ruleId||void 0,this.source=c.source||void 0,this.stack=u&&c.cause&&typeof c.cause.stack=="string"?c.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}se.prototype.file="";se.prototype.name="";se.prototype.reason="";se.prototype.message="";se.prototype.stack="";se.prototype.column=void 0;se.prototype.line=void 0;se.prototype.ancestors=void 0;se.prototype.cause=void 0;se.prototype.fatal=void 0;se.prototype.place=void 0;se.prototype.ruleId=void 0;se.prototype.source=void 0;const xs={}.hasOwnProperty,_y=new Map,Ry=/[A-Z]/g,Py=new Set(["table","tbody","thead","tfoot","tr"]),Dy=new Set(["td","th"]),Tp="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Ty(t,l){if(!l||l.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const i=l.filePath||void 0;let a;if(l.development){if(typeof l.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");a=Gy(i,l.jsxDEV)}else{if(typeof l.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof l.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");a=By(i,l.jsx,l.jsxs)}const s={Fragment:l.Fragment,ancestors:[],components:l.components||{},create:a,elementAttributeNameCase:l.elementAttributeNameCase||"react",evaluater:l.createEvaluater?l.createEvaluater():void 0,filePath:i,ignoreInvalidStyle:l.ignoreInvalidStyle||!1,passKeys:l.passKeys!==!1,passNode:l.passNode||!1,schema:l.space==="svg"?ws:Ay,stylePropertyNameCase:l.stylePropertyNameCase||"dom",tableCellAlignToStyle:l.tableCellAlignToStyle!==!1},c=Mp(s,t,void 0);return c&&typeof c!="string"?c:s.create(t,s.Fragment,{children:c||void 0},void 0)}function Mp(t,l,i){if(l.type==="element")return My(t,l,i);if(l.type==="mdxFlowExpression"||l.type==="mdxTextExpression")return Oy(t,l);if(l.type==="mdxJsxFlowElement"||l.type==="mdxJsxTextElement")return Fy(t,l,i);if(l.type==="mdxjsEsm")return by(t,l);if(l.type==="root")return Ny(t,l,i);if(l.type==="text")return zy(t,l)}function My(t,l,i){const a=t.schema;let s=a;l.tagName.toLowerCase()==="svg"&&a.space==="html"&&(s=ws,t.schema=s),t.ancestors.push(l);const c=bp(t,l.tagName,!1),u=jy(t,l);let f=Es(t,l);return Py.has(l.tagName)&&(f=f.filter(function(g){return typeof g=="string"?!uy(g):!0})),Op(t,u,c,l),Is(u,f),t.ancestors.pop(),t.schema=a,t.create(l,c,u,i)}function Oy(t,l){if(l.data&&l.data.estree&&t.evaluater){const a=l.data.estree.body[0];return a.type,t.evaluater.evaluateExpression(a.expression)}Ci(t,l.position)}function by(t,l){if(l.data&&l.data.estree&&t.evaluater)return t.evaluater.evaluateProgram(l.data.estree);Ci(t,l.position)}function Fy(t,l,i){const a=t.schema;let s=a;l.name==="svg"&&a.space==="html"&&(s=ws,t.schema=s),t.ancestors.push(l);const c=l.name===null?t.Fragment:bp(t,l.name,!0),u=Hy(t,l),f=Es(t,l);return Op(t,u,c,l),Is(u,f),t.ancestors.pop(),t.schema=a,t.create(l,c,u,i)}function Ny(t,l,i){const a={};return Is(a,Es(t,l)),t.create(l,t.Fragment,a,i)}function zy(t,l){return l.value}function Op(t,l,i,a){typeof i!="string"&&i!==t.Fragment&&t.passNode&&(l.node=a)}function Is(t,l){if(l.length>0){const i=l.length>1?l:l[0];i&&(t.children=i)}}function By(t,l,i){return a;function a(s,c,u,f){const m=Array.isArray(u.children)?i:l;return f?m(c,u,f):m(c,u)}}function Gy(t,l){return i;function i(a,s,c,u){const f=Array.isArray(c.children),g=Cs(a);return l(s,c,u,f,{columnNumber:g?g.column-1:void 0,fileName:t,lineNumber:g?g.line:void 0},void 0)}}function jy(t,l){const i={};let a,s;for(s in l.properties)if(s!=="children"&&xs.call(l.properties,s)){const c=Uy(t,s,l.properties[s]);if(c){const[u,f]=c;t.tableCellAlignToStyle&&u==="align"&&typeof f=="string"&&Dy.has(l.tagName)?a=f:i[u]=f}}if(a){const c=i.style||(i.style={});c[t.stylePropertyNameCase==="css"?"text-align":"textAlign"]=a}return i}function Hy(t,l){const i={};for(const a of l.attributes)if(a.type==="mdxJsxExpressionAttribute")if(a.data&&a.data.estree&&t.evaluater){const c=a.data.estree.body[0];c.type;const u=c.expression;u.type;const f=u.properties[0];f.type,Object.assign(i,t.evaluater.evaluateExpression(f.argument))}else Ci(t,l.position);else{const s=a.name;let c;if(a.value&&typeof a.value=="object")if(a.value.data&&a.value.data.estree&&t.evaluater){const f=a.value.data.estree.body[0];f.type,c=t.evaluater.evaluateExpression(f.expression)}else Ci(t,l.position);else c=a.value===null?!0:a.value;i[s]=c}return i}function Es(t,l){const i=[];let a=-1;const s=t.passKeys?new Map:_y;for(;++a<l.children.length;){const c=l.children[a];let u;if(t.passKeys){const g=c.type==="element"?c.tagName:c.type==="mdxJsxFlowElement"||c.type==="mdxJsxTextElement"?c.name:void 0;if(g){const m=s.get(g)||0;u=g+"-"+m,s.set(g,m+1)}}const f=Mp(t,c,u);f!==void 0&&i.push(f)}return i}function Uy(t,l,i){const a=hy(t.schema,l);if(!(i==null||typeof i=="number"&&Number.isNaN(i))){if(Array.isArray(i)&&(i=a.commaSeparated?iy(i):vy(i)),a.property==="style"){let s=typeof i=="object"?i:Wy(t,String(i));return t.stylePropertyNameCase==="css"&&(s=Vy(s)),["style",s]}return[t.elementAttributeNameCase==="react"&&a.space?fy[a.property]||a.property:a.attribute,i]}}function Wy(t,l){try{return Ey(l,{reactCompat:!0})}catch(i){if(t.ignoreInvalidStyle)return{};const a=i,s=new se("Cannot parse `style` attribute",{ancestors:t.ancestors,cause:a,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw s.file=t.filePath||void 0,s.url=Tp+"#cannot-parse-style-attribute",s}}function bp(t,l,i){let a;if(!i)a={type:"Literal",value:l};else if(l.includes(".")){const s=l.split(".");let c=-1,u;for(;++c<s.length;){const f=Td(s[c])?{type:"Identifier",name:s[c]}:{type:"Literal",value:s[c]};u=u?{type:"MemberExpression",object:u,property:f,computed:!!(c&&f.type==="Literal"),optional:!1}:f}a=u}else a=Td(l)&&!/^[a-z]/.test(l)?{type:"Identifier",name:l}:{type:"Literal",value:l};if(a.type==="Literal"){const s=a.value;return xs.call(t.components,s)?t.components[s]:s}if(t.evaluater)return t.evaluater.evaluateExpression(a);Ci(t)}function Ci(t,l){const i=new se("Cannot handle MDX estrees without `createEvaluater`",{ancestors:t.ancestors,place:l,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw i.file=t.filePath||void 0,i.url=Tp+"#cannot-handle-mdx-estrees-without-createevaluater",i}function Vy(t){const l={};let i;for(i in t)xs.call(t,i)&&(l[qy(i)]=t[i]);return l}function qy(t){let l=t.replace(Ry,Qy);return l.slice(0,3)==="ms-"&&(l="-"+l),l}function Qy(t){return"-"+t.toLowerCase()}const Ja={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Jy={};function Ls(t,l){const i=Jy,a=typeof i.includeImageAlt=="boolean"?i.includeImageAlt:!0,s=typeof i.includeHtml=="boolean"?i.includeHtml:!0;return Fp(t,a,s)}function Fp(t,l,i){if($y(t)){if("value"in t)return t.type==="html"&&!i?"":t.value;if(l&&"alt"in t&&t.alt)return t.alt;if("children"in t)return Hd(t.children,l,i)}return Array.isArray(t)?Hd(t,l,i):""}function Hd(t,l,i){const a=[];let s=-1;for(;++s<t.length;)a[s]=Fp(t[s],l,i);return a.join("")}function $y(t){return!!(t&&typeof t=="object")}const Ud=document.createElement("i");function _s(t){const l="&"+t+";";Ud.innerHTML=l;const i=Ud.textContent;return i.charCodeAt(i.length-1)===59&&t!=="semi"||i===l?!1:i}function Ee(t,l,i,a){const s=t.length;let c=0,u;if(l<0?l=-l>s?0:s+l:l=l>s?s:l,i=i>0?i:0,a.length<1e4)u=Array.from(a),u.unshift(l,i),t.splice(...u);else for(i&&t.splice(l,i);c<a.length;)u=a.slice(c,c+1e4),u.unshift(l,0),t.splice(...u),c+=1e4,l+=1e4}function Oe(t,l){return t.length>0?(Ee(t,t.length,0,l),t):l}const Wd={}.hasOwnProperty;function Np(t){const l={};let i=-1;for(;++i<t.length;)Ky(l,t[i]);return l}function Ky(t,l){let i;for(i in l){const s=(Wd.call(t,i)?t[i]:void 0)||(t[i]={}),c=l[i];let u;if(c)for(u in c){Wd.call(s,u)||(s[u]=[]);const f=c[u];Yy(s[u],Array.isArray(f)?f:f?[f]:[])}}}function Yy(t,l){let i=-1;const a=[];for(;++i<l.length;)(l[i].add==="after"?t:a).push(l[i]);Ee(t,0,0,a)}function zp(t,l){const i=Number.parseInt(t,l);return i<9||i===11||i>13&&i<32||i>126&&i<160||i>55295&&i<57344||i>64975&&i<65008||(i&65535)===65535||(i&65535)===65534||i>1114111?"�":String.fromCharCode(i)}function He(t){return t.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const de=Dt(/[A-Za-z]/),ae=Dt(/[\dA-Za-z]/),Xy=Dt(/[#-'*+\--9=?A-Z^-~]/);function ql(t){return t!==null&&(t<32||t===127)}const ps=Dt(/\d/),Zy=Dt(/[\dA-Fa-f]/),n0=Dt(/[!-/:-@[-`{-~]/);function fn(t){return t!==null&&t<-2}function bn(t){return t!==null&&(t<0||t===32)}function In(t){return t===-2||t===-1||t===32}const $l=Dt(new RegExp("\\p{P}","u")),Kt=Dt(/\s/);function Dt(t){return l;function l(i){return i!==null&&i>-1&&t.test(String.fromCharCode(i))}}function _r(t){const l=[];let i=-1,a=0,s=0;for(;++i<t.length;){const c=t.charCodeAt(i);let u="";if(c===37&&ae(t.charCodeAt(i+1))&&ae(t.charCodeAt(i+2)))s=2;else if(c<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(c))||(u=String.fromCharCode(c));else if(c>55295&&c<57344){const f=t.charCodeAt(i+1);c<56320&&f>56319&&f<57344?(u=String.fromCharCode(c,f),s=1):u="�"}else u=String.fromCharCode(c);u&&(l.push(t.slice(a,i),encodeURIComponent(u)),a=i+s+1,u=""),s&&(i+=s,s=0)}return l.join("")+t.slice(a)}function Ln(t,l,i,a){const s=a?a-1:Number.POSITIVE_INFINITY;let c=0;return u;function u(g){return In(g)?(t.enter(i),f(g)):l(g)}function f(g){return In(g)&&c++<s?(t.consume(g),f):(t.exit(i),l(g))}}const e0={tokenize:t0};function t0(t){const l=t.attempt(this.parser.constructs.contentInitial,a,s);let i;return l;function a(f){if(f===null){t.consume(f);return}return t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),Ln(t,l,"linePrefix")}function s(f){return t.enter("paragraph"),c(f)}function c(f){const g=t.enter("chunkText",{contentType:"text",previous:i});return i&&(i.next=g),i=g,u(f)}function u(f){if(f===null){t.exit("chunkText"),t.exit("paragraph"),t.consume(f);return}return fn(f)?(t.consume(f),t.exit("chunkText"),c):(t.consume(f),u)}}const r0={tokenize:i0},Vd={tokenize:l0};function i0(t){const l=this,i=[];let a=0,s,c,u;return f;function f(B){if(a<i.length){const rn=i[a];return l.containerState=rn[1],t.attempt(rn[0].continuation,g,m)(B)}return m(B)}function g(B){if(a++,l.containerState._closeFlow){l.containerState._closeFlow=void 0,s&&U();const rn=l.events.length;let un=rn,O;for(;un--;)if(l.events[un][0]==="exit"&&l.events[un][1].type==="chunkFlow"){O=l.events[un][1].end;break}M(a);let V=rn;for(;V<l.events.length;)l.events[V][1].end=Object.assign({},O),V++;return Ee(l.events,un+1,0,l.events.slice(rn)),l.events.length=V,m(B)}return f(B)}function m(B){if(a===i.length){if(!s)return v(B);if(s.currentConstruct&&s.currentConstruct.concrete)return E(B);l.interrupt=!!(s.currentConstruct&&!s._gfmTableDynamicInterruptHack)}return l.containerState={},t.check(Vd,y,h)(B)}function y(B){return s&&U(),M(a),v(B)}function h(B){return l.parser.lazy[l.now().line]=a!==i.length,u=l.now().offset,E(B)}function v(B){return l.containerState={},t.attempt(Vd,A,E)(B)}function A(B){return a++,i.push([l.currentConstruct,l.containerState]),v(B)}function E(B){if(B===null){s&&U(),M(0),t.consume(B);return}return s=s||l.parser.flow(l.now()),t.enter("chunkFlow",{contentType:"flow",previous:c,_tokenizer:s}),_(B)}function _(B){if(B===null){b(t.exit("chunkFlow"),!0),M(0),t.consume(B);return}return fn(B)?(t.consume(B),b(t.exit("chunkFlow")),a=0,l.interrupt=void 0,f):(t.consume(B),_)}function b(B,rn){const un=l.sliceStream(B);if(rn&&un.push(null),B.previous=c,c&&(c.next=B),c=B,s.defineSkip(B.start),s.write(un),l.parser.lazy[B.start.line]){let O=s.events.length;for(;O--;)if(s.events[O][1].start.offset<u&&(!s.events[O][1].end||s.events[O][1].end.offset>u))return;const V=l.events.length;let en=V,cn,D;for(;en--;)if(l.events[en][0]==="exit"&&l.events[en][1].type==="chunkFlow"){if(cn){D=l.events[en][1].end;break}cn=!0}for(M(a),O=V;O<l.events.length;)l.events[O][1].end=Object.assign({},D),O++;Ee(l.events,en+1,0,l.events.slice(V)),l.events.length=O}}function M(B){let rn=i.length;for(;rn-- >B;){const un=i[rn];l.containerState=un[1],un[0].exit.call(l,t)}i.length=B}function U(){s.write([null]),c=void 0,s=void 0,l.containerState._closeFlow=void 0}}function l0(t,l,i){return Ln(t,t.attempt(this.parser.constructs.document,l,i),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Ql(t){if(t===null||bn(t)||Kt(t))return 1;if($l(t))return 2}function Kl(t,l,i){const a=[];let s=-1;for(;++s<t.length;){const c=t[s].resolveAll;c&&!a.includes(c)&&(l=c(l,i),a.push(c))}return l}const fs={name:"attention",tokenize:a0,resolveAll:o0};function o0(t,l){let i=-1,a,s,c,u,f,g,m,y;for(;++i<t.length;)if(t[i][0]==="enter"&&t[i][1].type==="attentionSequence"&&t[i][1]._close){for(a=i;a--;)if(t[a][0]==="exit"&&t[a][1].type==="attentionSequence"&&t[a][1]._open&&l.sliceSerialize(t[a][1]).charCodeAt(0)===l.sliceSerialize(t[i][1]).charCodeAt(0)){if((t[a][1]._close||t[i][1]._open)&&(t[i][1].end.offset-t[i][1].start.offset)%3&&!((t[a][1].end.offset-t[a][1].start.offset+t[i][1].end.offset-t[i][1].start.offset)%3))continue;g=t[a][1].end.offset-t[a][1].start.offset>1&&t[i][1].end.offset-t[i][1].start.offset>1?2:1;const h=Object.assign({},t[a][1].end),v=Object.assign({},t[i][1].start);qd(h,-g),qd(v,g),u={type:g>1?"strongSequence":"emphasisSequence",start:h,end:Object.assign({},t[a][1].end)},f={type:g>1?"strongSequence":"emphasisSequence",start:Object.assign({},t[i][1].start),end:v},c={type:g>1?"strongText":"emphasisText",start:Object.assign({},t[a][1].end),end:Object.assign({},t[i][1].start)},s={type:g>1?"strong":"emphasis",start:Object.assign({},u.start),end:Object.assign({},f.end)},t[a][1].end=Object.assign({},u.start),t[i][1].start=Object.assign({},f.end),m=[],t[a][1].end.offset-t[a][1].start.offset&&(m=Oe(m,[["enter",t[a][1],l],["exit",t[a][1],l]])),m=Oe(m,[["enter",s,l],["enter",u,l],["exit",u,l],["enter",c,l]]),m=Oe(m,Kl(l.parser.constructs.insideSpan.null,t.slice(a+1,i),l)),m=Oe(m,[["exit",c,l],["enter",f,l],["exit",f,l],["exit",s,l]]),t[i][1].end.offset-t[i][1].start.offset?(y=2,m=Oe(m,[["enter",t[i][1],l],["exit",t[i][1],l]])):y=0,Ee(t,a-1,i-a+3,m),i=a+m.length-y-2;break}}for(i=-1;++i<t.length;)t[i][1].type==="attentionSequence"&&(t[i][1].type="data");return t}function a0(t,l){const i=this.parser.constructs.attentionMarkers.null,a=this.previous,s=Ql(a);let c;return u;function u(g){return c=g,t.enter("attentionSequence"),f(g)}function f(g){if(g===c)return t.consume(g),f;const m=t.exit("attentionSequence"),y=Ql(g),h=!y||y===2&&s||i.includes(g),v=!s||s===2&&y||i.includes(a);return m._open=!!(c===42?h:h&&(s||!v)),m._close=!!(c===42?v:v&&(y||!h)),l(g)}}function qd(t,l){t.column+=l,t.offset+=l,t._bufferIndex+=l}const s0={name:"autolink",tokenize:u0};function u0(t,l,i){let a=0;return s;function s(A){return t.enter("autolink"),t.enter("autolinkMarker"),t.consume(A),t.exit("autolinkMarker"),t.enter("autolinkProtocol"),c}function c(A){return de(A)?(t.consume(A),u):m(A)}function u(A){return A===43||A===45||A===46||ae(A)?(a=1,f(A)):m(A)}function f(A){return A===58?(t.consume(A),a=0,g):(A===43||A===45||A===46||ae(A))&&a++<32?(t.consume(A),f):(a=0,m(A))}function g(A){return A===62?(t.exit("autolinkProtocol"),t.enter("autolinkMarker"),t.consume(A),t.exit("autolinkMarker"),t.exit("autolink"),l):A===null||A===32||A===60||ql(A)?i(A):(t.consume(A),g)}function m(A){return A===64?(t.consume(A),y):Xy(A)?(t.consume(A),m):i(A)}function y(A){return ae(A)?h(A):i(A)}function h(A){return A===46?(t.consume(A),a=0,y):A===62?(t.exit("autolinkProtocol").type="autolinkEmail",t.enter("autolinkMarker"),t.consume(A),t.exit("autolinkMarker"),t.exit("autolink"),l):v(A)}function v(A){if((A===45||ae(A))&&a++<63){const E=A===45?v:h;return t.consume(A),E}return i(A)}}const Ii={tokenize:c0,partial:!0};function c0(t,l,i){return a;function a(c){return In(c)?Ln(t,s,"linePrefix")(c):s(c)}function s(c){return c===null||fn(c)?l(c):i(c)}}const Bp={name:"blockQuote",tokenize:d0,continuation:{tokenize:p0},exit:f0};function d0(t,l,i){const a=this;return s;function s(u){if(u===62){const f=a.containerState;return f.open||(t.enter("blockQuote",{_container:!0}),f.open=!0),t.enter("blockQuotePrefix"),t.enter("blockQuoteMarker"),t.consume(u),t.exit("blockQuoteMarker"),c}return i(u)}function c(u){return In(u)?(t.enter("blockQuotePrefixWhitespace"),t.consume(u),t.exit("blockQuotePrefixWhitespace"),t.exit("blockQuotePrefix"),l):(t.exit("blockQuotePrefix"),l(u))}}function p0(t,l,i){const a=this;return s;function s(u){return In(u)?Ln(t,c,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(u):c(u)}function c(u){return t.attempt(Bp,l,i)(u)}}function f0(t){t.exit("blockQuote")}const Gp={name:"characterEscape",tokenize:g0};function g0(t,l,i){return a;function a(c){return t.enter("characterEscape"),t.enter("escapeMarker"),t.consume(c),t.exit("escapeMarker"),s}function s(c){return n0(c)?(t.enter("characterEscapeValue"),t.consume(c),t.exit("characterEscapeValue"),t.exit("characterEscape"),l):i(c)}}const jp={name:"characterReference",tokenize:m0};function m0(t,l,i){const a=this;let s=0,c,u;return f;function f(h){return t.enter("characterReference"),t.enter("characterReferenceMarker"),t.consume(h),t.exit("characterReferenceMarker"),g}function g(h){return h===35?(t.enter("characterReferenceMarkerNumeric"),t.consume(h),t.exit("characterReferenceMarkerNumeric"),m):(t.enter("characterReferenceValue"),c=31,u=ae,y(h))}function m(h){return h===88||h===120?(t.enter("characterReferenceMarkerHexadecimal"),t.consume(h),t.exit("characterReferenceMarkerHexadecimal"),t.enter("characterReferenceValue"),c=6,u=Zy,y):(t.enter("characterReferenceValue"),c=7,u=ps,y(h))}function y(h){if(h===59&&s){const v=t.exit("characterReferenceValue");return u===ae&&!_s(a.sliceSerialize(v))?i(h):(t.enter("characterReferenceMarker"),t.consume(h),t.exit("characterReferenceMarker"),t.exit("characterReference"),l)}return u(h)&&s++<c?(t.consume(h),y):i(h)}}const Qd={tokenize:y0,partial:!0},Jd={name:"codeFenced",tokenize:h0,concrete:!0};function h0(t,l,i){const a=this,s={tokenize:un,partial:!0};let c=0,u=0,f;return g;function g(O){return m(O)}function m(O){const V=a.events[a.events.length-1];return c=V&&V[1].type==="linePrefix"?V[2].sliceSerialize(V[1],!0).length:0,f=O,t.enter("codeFenced"),t.enter("codeFencedFence"),t.enter("codeFencedFenceSequence"),y(O)}function y(O){return O===f?(u++,t.consume(O),y):u<3?i(O):(t.exit("codeFencedFenceSequence"),In(O)?Ln(t,h,"whitespace")(O):h(O))}function h(O){return O===null||fn(O)?(t.exit("codeFencedFence"),a.interrupt?l(O):t.check(Qd,_,rn)(O)):(t.enter("codeFencedFenceInfo"),t.enter("chunkString",{contentType:"string"}),v(O))}function v(O){return O===null||fn(O)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),h(O)):In(O)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),Ln(t,A,"whitespace")(O)):O===96&&O===f?i(O):(t.consume(O),v)}function A(O){return O===null||fn(O)?h(O):(t.enter("codeFencedFenceMeta"),t.enter("chunkString",{contentType:"string"}),E(O))}function E(O){return O===null||fn(O)?(t.exit("chunkString"),t.exit("codeFencedFenceMeta"),h(O)):O===96&&O===f?i(O):(t.consume(O),E)}function _(O){return t.attempt(s,rn,b)(O)}function b(O){return t.enter("lineEnding"),t.consume(O),t.exit("lineEnding"),M}function M(O){return c>0&&In(O)?Ln(t,U,"linePrefix",c+1)(O):U(O)}function U(O){return O===null||fn(O)?t.check(Qd,_,rn)(O):(t.enter("codeFlowValue"),B(O))}function B(O){return O===null||fn(O)?(t.exit("codeFlowValue"),U(O)):(t.consume(O),B)}function rn(O){return t.exit("codeFenced"),l(O)}function un(O,V,en){let cn=0;return D;function D(an){return O.enter("lineEnding"),O.consume(an),O.exit("lineEnding"),Z}function Z(an){return O.enter("codeFencedFence"),In(an)?Ln(O,Q,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(an):Q(an)}function Q(an){return an===f?(O.enter("codeFencedFenceSequence"),$(an)):en(an)}function $(an){return an===f?(cn++,O.consume(an),$):cn>=u?(O.exit("codeFencedFenceSequence"),In(an)?Ln(O,Y,"whitespace")(an):Y(an)):en(an)}function Y(an){return an===null||fn(an)?(O.exit("codeFencedFence"),V(an)):en(an)}}}function y0(t,l,i){const a=this;return s;function s(u){return u===null?i(u):(t.enter("lineEnding"),t.consume(u),t.exit("lineEnding"),c)}function c(u){return a.parser.lazy[a.now().line]?i(u):l(u)}}const $a={name:"codeIndented",tokenize:A0},k0={tokenize:v0,partial:!0};function A0(t,l,i){const a=this;return s;function s(m){return t.enter("codeIndented"),Ln(t,c,"linePrefix",5)(m)}function c(m){const y=a.events[a.events.length-1];return y&&y[1].type==="linePrefix"&&y[2].sliceSerialize(y[1],!0).length>=4?u(m):i(m)}function u(m){return m===null?g(m):fn(m)?t.attempt(k0,u,g)(m):(t.enter("codeFlowValue"),f(m))}function f(m){return m===null||fn(m)?(t.exit("codeFlowValue"),u(m)):(t.consume(m),f)}function g(m){return t.exit("codeIndented"),l(m)}}function v0(t,l,i){const a=this;return s;function s(u){return a.parser.lazy[a.now().line]?i(u):fn(u)?(t.enter("lineEnding"),t.consume(u),t.exit("lineEnding"),s):Ln(t,c,"linePrefix",5)(u)}function c(u){const f=a.events[a.events.length-1];return f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?l(u):fn(u)?s(u):i(u)}}const S0={name:"codeText",tokenize:x0,resolve:w0,previous:C0};function w0(t){let l=t.length-4,i=3,a,s;if((t[i][1].type==="lineEnding"||t[i][1].type==="space")&&(t[l][1].type==="lineEnding"||t[l][1].type==="space")){for(a=i;++a<l;)if(t[a][1].type==="codeTextData"){t[i][1].type="codeTextPadding",t[l][1].type="codeTextPadding",i+=2,l-=2;break}}for(a=i-1,l++;++a<=l;)s===void 0?a!==l&&t[a][1].type!=="lineEnding"&&(s=a):(a===l||t[a][1].type==="lineEnding")&&(t[s][1].type="codeTextData",a!==s+2&&(t[s][1].end=t[a-1][1].end,t.splice(s+2,a-s-2),l-=a-s-2,a=s+2),s=void 0);return t}function C0(t){return t!==96||this.events[this.events.length-1][1].type==="characterEscape"}function x0(t,l,i){let a=0,s,c;return u;function u(h){return t.enter("codeText"),t.enter("codeTextSequence"),f(h)}function f(h){return h===96?(t.consume(h),a++,f):(t.exit("codeTextSequence"),g(h))}function g(h){return h===null?i(h):h===32?(t.enter("space"),t.consume(h),t.exit("space"),g):h===96?(c=t.enter("codeTextSequence"),s=0,y(h)):fn(h)?(t.enter("lineEnding"),t.consume(h),t.exit("lineEnding"),g):(t.enter("codeTextData"),m(h))}function m(h){return h===null||h===32||h===96||fn(h)?(t.exit("codeTextData"),g(h)):(t.consume(h),m)}function y(h){return h===96?(t.consume(h),s++,y):s===a?(t.exit("codeTextSequence"),t.exit("codeText"),l(h)):(c.type="codeTextData",m(h))}}function Hp(t){const l={};let i=-1,a,s,c,u,f,g,m;for(;++i<t.length;){for(;i in l;)i=l[i];if(a=t[i],i&&a[1].type==="chunkFlow"&&t[i-1][1].type==="listItemPrefix"&&(g=a[1]._tokenizer.events,c=0,c<g.length&&g[c][1].type==="lineEndingBlank"&&(c+=2),c<g.length&&g[c][1].type==="content"))for(;++c<g.length&&g[c][1].type!=="content";)g[c][1].type==="chunkText"&&(g[c][1]._isInFirstContentOfListItem=!0,c++);if(a[0]==="enter")a[1].contentType&&(Object.assign(l,I0(t,i)),i=l[i],m=!0);else if(a[1]._container){for(c=i,s=void 0;c--&&(u=t[c],u[1].type==="lineEnding"||u[1].type==="lineEndingBlank");)u[0]==="enter"&&(s&&(t[s][1].type="lineEndingBlank"),u[1].type="lineEnding",s=c);s&&(a[1].end=Object.assign({},t[s][1].start),f=t.slice(s,i),f.unshift(a),Ee(t,s,i-s+1,f))}}return!m}function I0(t,l){const i=t[l][1],a=t[l][2];let s=l-1;const c=[],u=i._tokenizer||a.parser[i.contentType](i.start),f=u.events,g=[],m={};let y,h,v=-1,A=i,E=0,_=0;const b=[_];for(;A;){for(;t[++s][1]!==A;);c.push(s),A._tokenizer||(y=a.sliceStream(A),A.next||y.push(null),h&&u.defineSkip(A.start),A._isInFirstContentOfListItem&&(u._gfmTasklistFirstContentOfListItem=!0),u.write(y),A._isInFirstContentOfListItem&&(u._gfmTasklistFirstContentOfListItem=void 0)),h=A,A=A.next}for(A=i;++v<f.length;)f[v][0]==="exit"&&f[v-1][0]==="enter"&&f[v][1].type===f[v-1][1].type&&f[v][1].start.line!==f[v][1].end.line&&(_=v+1,b.push(_),A._tokenizer=void 0,A.previous=void 0,A=A.next);for(u.events=[],A?(A._tokenizer=void 0,A.previous=void 0):b.pop(),v=b.length;v--;){const M=f.slice(b[v],b[v+1]),U=c.pop();g.unshift([U,U+M.length-1]),Ee(t,U,2,M)}for(v=-1;++v<g.length;)m[E+g[v][0]]=E+g[v][1],E+=g[v][1]-g[v][0]-1;return m}const E0={tokenize:R0,resolve:_0},L0={tokenize:P0,partial:!0};function _0(t){return Hp(t),t}function R0(t,l){let i;return a;function a(f){return t.enter("content"),i=t.enter("chunkContent",{contentType:"content"}),s(f)}function s(f){return f===null?c(f):fn(f)?t.check(L0,u,c)(f):(t.consume(f),s)}function c(f){return t.exit("chunkContent"),t.exit("content"),l(f)}function u(f){return t.consume(f),t.exit("chunkContent"),i.next=t.enter("chunkContent",{contentType:"content",previous:i}),i=i.next,s}}function P0(t,l,i){const a=this;return s;function s(u){return t.exit("chunkContent"),t.enter("lineEnding"),t.consume(u),t.exit("lineEnding"),Ln(t,c,"linePrefix")}function c(u){if(u===null||fn(u))return i(u);const f=a.events[a.events.length-1];return!a.parser.constructs.disable.null.includes("codeIndented")&&f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?l(u):t.interrupt(a.parser.constructs.flow,i,l)(u)}}function Up(t,l,i,a,s,c,u,f,g){const m=g||Number.POSITIVE_INFINITY;let y=0;return h;function h(M){return M===60?(t.enter(a),t.enter(s),t.enter(c),t.consume(M),t.exit(c),v):M===null||M===32||M===41||ql(M)?i(M):(t.enter(a),t.enter(u),t.enter(f),t.enter("chunkString",{contentType:"string"}),_(M))}function v(M){return M===62?(t.enter(c),t.consume(M),t.exit(c),t.exit(s),t.exit(a),l):(t.enter(f),t.enter("chunkString",{contentType:"string"}),A(M))}function A(M){return M===62?(t.exit("chunkString"),t.exit(f),v(M)):M===null||M===60||fn(M)?i(M):(t.consume(M),M===92?E:A)}function E(M){return M===60||M===62||M===92?(t.consume(M),A):A(M)}function _(M){return!y&&(M===null||M===41||bn(M))?(t.exit("chunkString"),t.exit(f),t.exit(u),t.exit(a),l(M)):y<m&&M===40?(t.consume(M),y++,_):M===41?(t.consume(M),y--,_):M===null||M===32||M===40||ql(M)?i(M):(t.consume(M),M===92?b:_)}function b(M){return M===40||M===41||M===92?(t.consume(M),_):_(M)}}function Wp(t,l,i,a,s,c){const u=this;let f=0,g;return m;function m(A){return t.enter(a),t.enter(s),t.consume(A),t.exit(s),t.enter(c),y}function y(A){return f>999||A===null||A===91||A===93&&!g||A===94&&!f&&"_hiddenFootnoteSupport"in u.parser.constructs?i(A):A===93?(t.exit(c),t.enter(s),t.consume(A),t.exit(s),t.exit(a),l):fn(A)?(t.enter("lineEnding"),t.consume(A),t.exit("lineEnding"),y):(t.enter("chunkString",{contentType:"string"}),h(A))}function h(A){return A===null||A===91||A===93||fn(A)||f++>999?(t.exit("chunkString"),y(A)):(t.consume(A),g||(g=!In(A)),A===92?v:h)}function v(A){return A===91||A===92||A===93?(t.consume(A),f++,h):h(A)}}function Vp(t,l,i,a,s,c){let u;return f;function f(v){return v===34||v===39||v===40?(t.enter(a),t.enter(s),t.consume(v),t.exit(s),u=v===40?41:v,g):i(v)}function g(v){return v===u?(t.enter(s),t.consume(v),t.exit(s),t.exit(a),l):(t.enter(c),m(v))}function m(v){return v===u?(t.exit(c),g(u)):v===null?i(v):fn(v)?(t.enter("lineEnding"),t.consume(v),t.exit("lineEnding"),Ln(t,m,"linePrefix")):(t.enter("chunkString",{contentType:"string"}),y(v))}function y(v){return v===u||v===null||fn(v)?(t.exit("chunkString"),m(v)):(t.consume(v),v===92?h:y)}function h(v){return v===u||v===92?(t.consume(v),y):y(v)}}function vi(t,l){let i;return a;function a(s){return fn(s)?(t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),i=!0,a):In(s)?Ln(t,a,i?"linePrefix":"lineSuffix")(s):l(s)}}const D0={name:"definition",tokenize:M0},T0={tokenize:O0,partial:!0};function M0(t,l,i){const a=this;let s;return c;function c(A){return t.enter("definition"),u(A)}function u(A){return Wp.call(a,t,f,i,"definitionLabel","definitionLabelMarker","definitionLabelString")(A)}function f(A){return s=He(a.sliceSerialize(a.events[a.events.length-1][1]).slice(1,-1)),A===58?(t.enter("definitionMarker"),t.consume(A),t.exit("definitionMarker"),g):i(A)}function g(A){return bn(A)?vi(t,m)(A):m(A)}function m(A){return Up(t,y,i,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(A)}function y(A){return t.attempt(T0,h,h)(A)}function h(A){return In(A)?Ln(t,v,"whitespace")(A):v(A)}function v(A){return A===null||fn(A)?(t.exit("definition"),a.parser.defined.push(s),l(A)):i(A)}}function O0(t,l,i){return a;function a(f){return bn(f)?vi(t,s)(f):i(f)}function s(f){return Vp(t,c,i,"definitionTitle","definitionTitleMarker","definitionTitleString")(f)}function c(f){return In(f)?Ln(t,u,"whitespace")(f):u(f)}function u(f){return f===null||fn(f)?l(f):i(f)}}const b0={name:"hardBreakEscape",tokenize:F0};function F0(t,l,i){return a;function a(c){return t.enter("hardBreakEscape"),t.consume(c),s}function s(c){return fn(c)?(t.exit("hardBreakEscape"),l(c)):i(c)}}const N0={name:"headingAtx",tokenize:B0,resolve:z0};function z0(t,l){let i=t.length-2,a=3,s,c;return t[a][1].type==="whitespace"&&(a+=2),i-2>a&&t[i][1].type==="whitespace"&&(i-=2),t[i][1].type==="atxHeadingSequence"&&(a===i-1||i-4>a&&t[i-2][1].type==="whitespace")&&(i-=a+1===i?2:4),i>a&&(s={type:"atxHeadingText",start:t[a][1].start,end:t[i][1].end},c={type:"chunkText",start:t[a][1].start,end:t[i][1].end,contentType:"text"},Ee(t,a,i-a+1,[["enter",s,l],["enter",c,l],["exit",c,l],["exit",s,l]])),t}function B0(t,l,i){let a=0;return s;function s(y){return t.enter("atxHeading"),c(y)}function c(y){return t.enter("atxHeadingSequence"),u(y)}function u(y){return y===35&&a++<6?(t.consume(y),u):y===null||bn(y)?(t.exit("atxHeadingSequence"),f(y)):i(y)}function f(y){return y===35?(t.enter("atxHeadingSequence"),g(y)):y===null||fn(y)?(t.exit("atxHeading"),l(y)):In(y)?Ln(t,f,"whitespace")(y):(t.enter("atxHeadingText"),m(y))}function g(y){return y===35?(t.consume(y),g):(t.exit("atxHeadingSequence"),f(y))}function m(y){return y===null||y===35||bn(y)?(t.exit("atxHeadingText"),f(y)):(t.consume(y),m)}}const G0=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],$d=["pre","script","style","textarea"],j0={name:"htmlFlow",tokenize:V0,resolveTo:W0,concrete:!0},H0={tokenize:Q0,partial:!0},U0={tokenize:q0,partial:!0};function W0(t){let l=t.length;for(;l--&&!(t[l][0]==="enter"&&t[l][1].type==="htmlFlow"););return l>1&&t[l-2][1].type==="linePrefix"&&(t[l][1].start=t[l-2][1].start,t[l+1][1].start=t[l-2][1].start,t.splice(l-2,2)),t}function V0(t,l,i){const a=this;let s,c,u,f,g;return m;function m(C){return y(C)}function y(C){return t.enter("htmlFlow"),t.enter("htmlFlowData"),t.consume(C),h}function h(C){return C===33?(t.consume(C),v):C===47?(t.consume(C),c=!0,_):C===63?(t.consume(C),s=3,a.interrupt?l:S):de(C)?(t.consume(C),u=String.fromCharCode(C),b):i(C)}function v(C){return C===45?(t.consume(C),s=2,A):C===91?(t.consume(C),s=5,f=0,E):de(C)?(t.consume(C),s=4,a.interrupt?l:S):i(C)}function A(C){return C===45?(t.consume(C),a.interrupt?l:S):i(C)}function E(C){const mn="CDATA[";return C===mn.charCodeAt(f++)?(t.consume(C),f===mn.length?a.interrupt?l:Q:E):i(C)}function _(C){return de(C)?(t.consume(C),u=String.fromCharCode(C),b):i(C)}function b(C){if(C===null||C===47||C===62||bn(C)){const mn=C===47,vn=u.toLowerCase();return!mn&&!c&&$d.includes(vn)?(s=1,a.interrupt?l(C):Q(C)):G0.includes(u.toLowerCase())?(s=6,mn?(t.consume(C),M):a.interrupt?l(C):Q(C)):(s=7,a.interrupt&&!a.parser.lazy[a.now().line]?i(C):c?U(C):B(C))}return C===45||ae(C)?(t.consume(C),u+=String.fromCharCode(C),b):i(C)}function M(C){return C===62?(t.consume(C),a.interrupt?l:Q):i(C)}function U(C){return In(C)?(t.consume(C),U):D(C)}function B(C){return C===47?(t.consume(C),D):C===58||C===95||de(C)?(t.consume(C),rn):In(C)?(t.consume(C),B):D(C)}function rn(C){return C===45||C===46||C===58||C===95||ae(C)?(t.consume(C),rn):un(C)}function un(C){return C===61?(t.consume(C),O):In(C)?(t.consume(C),un):B(C)}function O(C){return C===null||C===60||C===61||C===62||C===96?i(C):C===34||C===39?(t.consume(C),g=C,V):In(C)?(t.consume(C),O):en(C)}function V(C){return C===g?(t.consume(C),g=null,cn):C===null||fn(C)?i(C):(t.consume(C),V)}function en(C){return C===null||C===34||C===39||C===47||C===60||C===61||C===62||C===96||bn(C)?un(C):(t.consume(C),en)}function cn(C){return C===47||C===62||In(C)?B(C):i(C)}function D(C){return C===62?(t.consume(C),Z):i(C)}function Z(C){return C===null||fn(C)?Q(C):In(C)?(t.consume(C),Z):i(C)}function Q(C){return C===45&&s===2?(t.consume(C),xn):C===60&&s===1?(t.consume(C),yn):C===62&&s===4?(t.consume(C),L):C===63&&s===3?(t.consume(C),S):C===93&&s===5?(t.consume(C),sn):fn(C)&&(s===6||s===7)?(t.exit("htmlFlowData"),t.check(H0,N,$)(C)):C===null||fn(C)?(t.exit("htmlFlowData"),$(C)):(t.consume(C),Q)}function $(C){return t.check(U0,Y,N)(C)}function Y(C){return t.enter("lineEnding"),t.consume(C),t.exit("lineEnding"),an}function an(C){return C===null||fn(C)?$(C):(t.enter("htmlFlowData"),Q(C))}function xn(C){return C===45?(t.consume(C),S):Q(C)}function yn(C){return C===47?(t.consume(C),u="",J):Q(C)}function J(C){if(C===62){const mn=u.toLowerCase();return $d.includes(mn)?(t.consume(C),L):Q(C)}return de(C)&&u.length<8?(t.consume(C),u+=String.fromCharCode(C),J):Q(C)}function sn(C){return C===93?(t.consume(C),S):Q(C)}function S(C){return C===62?(t.consume(C),L):C===45&&s===2?(t.consume(C),S):Q(C)}function L(C){return C===null||fn(C)?(t.exit("htmlFlowData"),N(C)):(t.consume(C),L)}function N(C){return t.exit("htmlFlow"),l(C)}}function q0(t,l,i){const a=this;return s;function s(u){return fn(u)?(t.enter("lineEnding"),t.consume(u),t.exit("lineEnding"),c):i(u)}function c(u){return a.parser.lazy[a.now().line]?i(u):l(u)}}function Q0(t,l,i){return a;function a(s){return t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),t.attempt(Ii,l,i)}}const J0={name:"htmlText",tokenize:$0};function $0(t,l,i){const a=this;let s,c,u;return f;function f(S){return t.enter("htmlText"),t.enter("htmlTextData"),t.consume(S),g}function g(S){return S===33?(t.consume(S),m):S===47?(t.consume(S),un):S===63?(t.consume(S),B):de(S)?(t.consume(S),en):i(S)}function m(S){return S===45?(t.consume(S),y):S===91?(t.consume(S),c=0,E):de(S)?(t.consume(S),U):i(S)}function y(S){return S===45?(t.consume(S),A):i(S)}function h(S){return S===null?i(S):S===45?(t.consume(S),v):fn(S)?(u=h,yn(S)):(t.consume(S),h)}function v(S){return S===45?(t.consume(S),A):h(S)}function A(S){return S===62?xn(S):S===45?v(S):h(S)}function E(S){const L="CDATA[";return S===L.charCodeAt(c++)?(t.consume(S),c===L.length?_:E):i(S)}function _(S){return S===null?i(S):S===93?(t.consume(S),b):fn(S)?(u=_,yn(S)):(t.consume(S),_)}function b(S){return S===93?(t.consume(S),M):_(S)}function M(S){return S===62?xn(S):S===93?(t.consume(S),M):_(S)}function U(S){return S===null||S===62?xn(S):fn(S)?(u=U,yn(S)):(t.consume(S),U)}function B(S){return S===null?i(S):S===63?(t.consume(S),rn):fn(S)?(u=B,yn(S)):(t.consume(S),B)}function rn(S){return S===62?xn(S):B(S)}function un(S){return de(S)?(t.consume(S),O):i(S)}function O(S){return S===45||ae(S)?(t.consume(S),O):V(S)}function V(S){return fn(S)?(u=V,yn(S)):In(S)?(t.consume(S),V):xn(S)}function en(S){return S===45||ae(S)?(t.consume(S),en):S===47||S===62||bn(S)?cn(S):i(S)}function cn(S){return S===47?(t.consume(S),xn):S===58||S===95||de(S)?(t.consume(S),D):fn(S)?(u=cn,yn(S)):In(S)?(t.consume(S),cn):xn(S)}function D(S){return S===45||S===46||S===58||S===95||ae(S)?(t.consume(S),D):Z(S)}function Z(S){return S===61?(t.consume(S),Q):fn(S)?(u=Z,yn(S)):In(S)?(t.consume(S),Z):cn(S)}function Q(S){return S===null||S===60||S===61||S===62||S===96?i(S):S===34||S===39?(t.consume(S),s=S,$):fn(S)?(u=Q,yn(S)):In(S)?(t.consume(S),Q):(t.consume(S),Y)}function $(S){return S===s?(t.consume(S),s=void 0,an):S===null?i(S):fn(S)?(u=$,yn(S)):(t.consume(S),$)}function Y(S){return S===null||S===34||S===39||S===60||S===61||S===96?i(S):S===47||S===62||bn(S)?cn(S):(t.consume(S),Y)}function an(S){return S===47||S===62||bn(S)?cn(S):i(S)}function xn(S){return S===62?(t.consume(S),t.exit("htmlTextData"),t.exit("htmlText"),l):i(S)}function yn(S){return t.exit("htmlTextData"),t.enter("lineEnding"),t.consume(S),t.exit("lineEnding"),J}function J(S){return In(S)?Ln(t,sn,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(S):sn(S)}function sn(S){return t.enter("htmlTextData"),u(S)}}const Rs={name:"labelEnd",tokenize:ek,resolveTo:nk,resolveAll:Z0},K0={tokenize:tk},Y0={tokenize:rk},X0={tokenize:ik};function Z0(t){let l=-1;for(;++l<t.length;){const i=t[l][1];(i.type==="labelImage"||i.type==="labelLink"||i.type==="labelEnd")&&(t.splice(l+1,i.type==="labelImage"?4:2),i.type="data",l++)}return t}function nk(t,l){let i=t.length,a=0,s,c,u,f;for(;i--;)if(s=t[i][1],c){if(s.type==="link"||s.type==="labelLink"&&s._inactive)break;t[i][0]==="enter"&&s.type==="labelLink"&&(s._inactive=!0)}else if(u){if(t[i][0]==="enter"&&(s.type==="labelImage"||s.type==="labelLink")&&!s._balanced&&(c=i,s.type!=="labelLink")){a=2;break}}else s.type==="labelEnd"&&(u=i);const g={type:t[c][1].type==="labelLink"?"link":"image",start:Object.assign({},t[c][1].start),end:Object.assign({},t[t.length-1][1].end)},m={type:"label",start:Object.assign({},t[c][1].start),end:Object.assign({},t[u][1].end)},y={type:"labelText",start:Object.assign({},t[c+a+2][1].end),end:Object.assign({},t[u-2][1].start)};return f=[["enter",g,l],["enter",m,l]],f=Oe(f,t.slice(c+1,c+a+3)),f=Oe(f,[["enter",y,l]]),f=Oe(f,Kl(l.parser.constructs.insideSpan.null,t.slice(c+a+4,u-3),l)),f=Oe(f,[["exit",y,l],t[u-2],t[u-1],["exit",m,l]]),f=Oe(f,t.slice(u+1)),f=Oe(f,[["exit",g,l]]),Ee(t,c,t.length,f),t}function ek(t,l,i){const a=this;let s=a.events.length,c,u;for(;s--;)if((a.events[s][1].type==="labelImage"||a.events[s][1].type==="labelLink")&&!a.events[s][1]._balanced){c=a.events[s][1];break}return f;function f(v){return c?c._inactive?h(v):(u=a.parser.defined.includes(He(a.sliceSerialize({start:c.end,end:a.now()}))),t.enter("labelEnd"),t.enter("labelMarker"),t.consume(v),t.exit("labelMarker"),t.exit("labelEnd"),g):i(v)}function g(v){return v===40?t.attempt(K0,y,u?y:h)(v):v===91?t.attempt(Y0,y,u?m:h)(v):u?y(v):h(v)}function m(v){return t.attempt(X0,y,h)(v)}function y(v){return l(v)}function h(v){return c._balanced=!0,i(v)}}function tk(t,l,i){return a;function a(h){return t.enter("resource"),t.enter("resourceMarker"),t.consume(h),t.exit("resourceMarker"),s}function s(h){return bn(h)?vi(t,c)(h):c(h)}function c(h){return h===41?y(h):Up(t,u,f,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(h)}function u(h){return bn(h)?vi(t,g)(h):y(h)}function f(h){return i(h)}function g(h){return h===34||h===39||h===40?Vp(t,m,i,"resourceTitle","resourceTitleMarker","resourceTitleString")(h):y(h)}function m(h){return bn(h)?vi(t,y)(h):y(h)}function y(h){return h===41?(t.enter("resourceMarker"),t.consume(h),t.exit("resourceMarker"),t.exit("resource"),l):i(h)}}function rk(t,l,i){const a=this;return s;function s(f){return Wp.call(a,t,c,u,"reference","referenceMarker","referenceString")(f)}function c(f){return a.parser.defined.includes(He(a.sliceSerialize(a.events[a.events.length-1][1]).slice(1,-1)))?l(f):i(f)}function u(f){return i(f)}}function ik(t,l,i){return a;function a(c){return t.enter("reference"),t.enter("referenceMarker"),t.consume(c),t.exit("referenceMarker"),s}function s(c){return c===93?(t.enter("referenceMarker"),t.consume(c),t.exit("referenceMarker"),t.exit("reference"),l):i(c)}}const lk={name:"labelStartImage",tokenize:ok,resolveAll:Rs.resolveAll};function ok(t,l,i){const a=this;return s;function s(f){return t.enter("labelImage"),t.enter("labelImageMarker"),t.consume(f),t.exit("labelImageMarker"),c}function c(f){return f===91?(t.enter("labelMarker"),t.consume(f),t.exit("labelMarker"),t.exit("labelImage"),u):i(f)}function u(f){return f===94&&"_hiddenFootnoteSupport"in a.parser.constructs?i(f):l(f)}}const ak={name:"labelStartLink",tokenize:sk,resolveAll:Rs.resolveAll};function sk(t,l,i){const a=this;return s;function s(u){return t.enter("labelLink"),t.enter("labelMarker"),t.consume(u),t.exit("labelMarker"),t.exit("labelLink"),c}function c(u){return u===94&&"_hiddenFootnoteSupport"in a.parser.constructs?i(u):l(u)}}const Ka={name:"lineEnding",tokenize:uk};function uk(t,l){return i;function i(a){return t.enter("lineEnding"),t.consume(a),t.exit("lineEnding"),Ln(t,l,"linePrefix")}}const Wl={name:"thematicBreak",tokenize:ck};function ck(t,l,i){let a=0,s;return c;function c(m){return t.enter("thematicBreak"),u(m)}function u(m){return s=m,f(m)}function f(m){return m===s?(t.enter("thematicBreakSequence"),g(m)):a>=3&&(m===null||fn(m))?(t.exit("thematicBreak"),l(m)):i(m)}function g(m){return m===s?(t.consume(m),a++,g):(t.exit("thematicBreakSequence"),In(m)?Ln(t,f,"whitespace")(m):f(m))}}const ke={name:"list",tokenize:fk,continuation:{tokenize:gk},exit:hk},dk={tokenize:yk,partial:!0},pk={tokenize:mk,partial:!0};function fk(t,l,i){const a=this,s=a.events[a.events.length-1];let c=s&&s[1].type==="linePrefix"?s[2].sliceSerialize(s[1],!0).length:0,u=0;return f;function f(A){const E=a.containerState.type||(A===42||A===43||A===45?"listUnordered":"listOrdered");if(E==="listUnordered"?!a.containerState.marker||A===a.containerState.marker:ps(A)){if(a.containerState.type||(a.containerState.type=E,t.enter(E,{_container:!0})),E==="listUnordered")return t.enter("listItemPrefix"),A===42||A===45?t.check(Wl,i,m)(A):m(A);if(!a.interrupt||A===49)return t.enter("listItemPrefix"),t.enter("listItemValue"),g(A)}return i(A)}function g(A){return ps(A)&&++u<10?(t.consume(A),g):(!a.interrupt||u<2)&&(a.containerState.marker?A===a.containerState.marker:A===41||A===46)?(t.exit("listItemValue"),m(A)):i(A)}function m(A){return t.enter("listItemMarker"),t.consume(A),t.exit("listItemMarker"),a.containerState.marker=a.containerState.marker||A,t.check(Ii,a.interrupt?i:y,t.attempt(dk,v,h))}function y(A){return a.containerState.initialBlankLine=!0,c++,v(A)}function h(A){return In(A)?(t.enter("listItemPrefixWhitespace"),t.consume(A),t.exit("listItemPrefixWhitespace"),v):i(A)}function v(A){return a.containerState.size=c+a.sliceSerialize(t.exit("listItemPrefix"),!0).length,l(A)}}function gk(t,l,i){const a=this;return a.containerState._closeFlow=void 0,t.check(Ii,s,c);function s(f){return a.containerState.furtherBlankLines=a.containerState.furtherBlankLines||a.containerState.initialBlankLine,Ln(t,l,"listItemIndent",a.containerState.size+1)(f)}function c(f){return a.containerState.furtherBlankLines||!In(f)?(a.containerState.furtherBlankLines=void 0,a.containerState.initialBlankLine=void 0,u(f)):(a.containerState.furtherBlankLines=void 0,a.containerState.initialBlankLine=void 0,t.attempt(pk,l,u)(f))}function u(f){return a.containerState._closeFlow=!0,a.interrupt=void 0,Ln(t,t.attempt(ke,l,i),"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(f)}}function mk(t,l,i){const a=this;return Ln(t,s,"listItemIndent",a.containerState.size+1);function s(c){const u=a.events[a.events.length-1];return u&&u[1].type==="listItemIndent"&&u[2].sliceSerialize(u[1],!0).length===a.containerState.size?l(c):i(c)}}function hk(t){t.exit(this.containerState.type)}function yk(t,l,i){const a=this;return Ln(t,s,"listItemPrefixWhitespace",a.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function s(c){const u=a.events[a.events.length-1];return!In(c)&&u&&u[1].type==="listItemPrefixWhitespace"?l(c):i(c)}}const Kd={name:"setextUnderline",tokenize:Ak,resolveTo:kk};function kk(t,l){let i=t.length,a,s,c;for(;i--;)if(t[i][0]==="enter"){if(t[i][1].type==="content"){a=i;break}t[i][1].type==="paragraph"&&(s=i)}else t[i][1].type==="content"&&t.splice(i,1),!c&&t[i][1].type==="definition"&&(c=i);const u={type:"setextHeading",start:Object.assign({},t[s][1].start),end:Object.assign({},t[t.length-1][1].end)};return t[s][1].type="setextHeadingText",c?(t.splice(s,0,["enter",u,l]),t.splice(c+1,0,["exit",t[a][1],l]),t[a][1].end=Object.assign({},t[c][1].end)):t[a][1]=u,t.push(["exit",u,l]),t}function Ak(t,l,i){const a=this;let s;return c;function c(m){let y=a.events.length,h;for(;y--;)if(a.events[y][1].type!=="lineEnding"&&a.events[y][1].type!=="linePrefix"&&a.events[y][1].type!=="content"){h=a.events[y][1].type==="paragraph";break}return!a.parser.lazy[a.now().line]&&(a.interrupt||h)?(t.enter("setextHeadingLine"),s=m,u(m)):i(m)}function u(m){return t.enter("setextHeadingLineSequence"),f(m)}function f(m){return m===s?(t.consume(m),f):(t.exit("setextHeadingLineSequence"),In(m)?Ln(t,g,"lineSuffix")(m):g(m))}function g(m){return m===null||fn(m)?(t.exit("setextHeadingLine"),l(m)):i(m)}}const vk={tokenize:Sk};function Sk(t){const l=this,i=t.attempt(Ii,a,t.attempt(this.parser.constructs.flowInitial,s,Ln(t,t.attempt(this.parser.constructs.flow,s,t.attempt(E0,s)),"linePrefix")));return i;function a(c){if(c===null){t.consume(c);return}return t.enter("lineEndingBlank"),t.consume(c),t.exit("lineEndingBlank"),l.currentConstruct=void 0,i}function s(c){if(c===null){t.consume(c);return}return t.enter("lineEnding"),t.consume(c),t.exit("lineEnding"),l.currentConstruct=void 0,i}}const wk={resolveAll:Qp()},Ck=qp("string"),xk=qp("text");function qp(t){return{tokenize:l,resolveAll:Qp(t==="text"?Ik:void 0)};function l(i){const a=this,s=this.parser.constructs[t],c=i.attempt(s,u,f);return u;function u(y){return m(y)?c(y):f(y)}function f(y){if(y===null){i.consume(y);return}return i.enter("data"),i.consume(y),g}function g(y){return m(y)?(i.exit("data"),c(y)):(i.consume(y),g)}function m(y){if(y===null)return!0;const h=s[y];let v=-1;if(h)for(;++v<h.length;){const A=h[v];if(!A.previous||A.previous.call(a,a.previous))return!0}return!1}}}function Qp(t){return l;function l(i,a){let s=-1,c;for(;++s<=i.length;)c===void 0?i[s]&&i[s][1].type==="data"&&(c=s,s++):(!i[s]||i[s][1].type!=="data")&&(s!==c+2&&(i[c][1].end=i[s-1][1].end,i.splice(c+2,s-c-2),s=c+2),c=void 0);return t?t(i,a):i}}function Ik(t,l){let i=0;for(;++i<=t.length;)if((i===t.length||t[i][1].type==="lineEnding")&&t[i-1][1].type==="data"){const a=t[i-1][1],s=l.sliceStream(a);let c=s.length,u=-1,f=0,g;for(;c--;){const m=s[c];if(typeof m=="string"){for(u=m.length;m.charCodeAt(u-1)===32;)f++,u--;if(u)break;u=-1}else if(m===-2)g=!0,f++;else if(m!==-1){c++;break}}if(f){const m={type:i===t.length||g||f<2?"lineSuffix":"hardBreakTrailing",start:{line:a.end.line,column:a.end.column-f,offset:a.end.offset-f,_index:a.start._index+c,_bufferIndex:c?u:a.start._bufferIndex+u},end:Object.assign({},a.end)};a.end=Object.assign({},m.start),a.start.offset===a.end.offset?Object.assign(a,m):(t.splice(i,0,["enter",m,l],["exit",m,l]),i+=2)}i++}return t}function Ek(t,l,i){let a=Object.assign(i?Object.assign({},i):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1});const s={},c=[];let u=[],f=[];const g={consume:U,enter:B,exit:rn,attempt:V(un),check:V(O),interrupt:V(O,{interrupt:!0})},m={previous:null,code:null,containerState:{},events:[],parser:t,sliceStream:A,sliceSerialize:v,now:E,defineSkip:_,write:h};let y=l.tokenize.call(m,g);return l.resolveAll&&c.push(l),m;function h(Z){return u=Oe(u,Z),b(),u[u.length-1]!==null?[]:(en(l,0),m.events=Kl(c,m.events,m),m.events)}function v(Z,Q){return _k(A(Z),Q)}function A(Z){return Lk(u,Z)}function E(){const{line:Z,column:Q,offset:$,_index:Y,_bufferIndex:an}=a;return{line:Z,column:Q,offset:$,_index:Y,_bufferIndex:an}}function _(Z){s[Z.line]=Z.column,D()}function b(){let Z;for(;a._index<u.length;){const Q=u[a._index];if(typeof Q=="string")for(Z=a._index,a._bufferIndex<0&&(a._bufferIndex=0);a._index===Z&&a._bufferIndex<Q.length;)M(Q.charCodeAt(a._bufferIndex));else M(Q)}}function M(Z){y=y(Z)}function U(Z){fn(Z)?(a.line++,a.column=1,a.offset+=Z===-3?2:1,D()):Z!==-1&&(a.column++,a.offset++),a._bufferIndex<0?a._index++:(a._bufferIndex++,a._bufferIndex===u[a._index].length&&(a._bufferIndex=-1,a._index++)),m.previous=Z}function B(Z,Q){const $=Q||{};return $.type=Z,$.start=E(),m.events.push(["enter",$,m]),f.push($),$}function rn(Z){const Q=f.pop();return Q.end=E(),m.events.push(["exit",Q,m]),Q}function un(Z,Q){en(Z,Q.from)}function O(Z,Q){Q.restore()}function V(Z,Q){return $;function $(Y,an,xn){let yn,J,sn,S;return Array.isArray(Y)?N(Y):"tokenize"in Y?N([Y]):L(Y);function L(gn){return Pn;function Pn(Sn){const Tn=Sn!==null&&gn[Sn],Vn=Sn!==null&&gn.null,Ye=[...Array.isArray(Tn)?Tn:Tn?[Tn]:[],...Array.isArray(Vn)?Vn:Vn?[Vn]:[]];return N(Ye)(Sn)}}function N(gn){return yn=gn,J=0,gn.length===0?xn:C(gn[J])}function C(gn){return Pn;function Pn(Sn){return S=cn(),sn=gn,gn.partial||(m.currentConstruct=gn),gn.name&&m.parser.constructs.disable.null.includes(gn.name)?vn():gn.tokenize.call(Q?Object.assign(Object.create(m),Q):m,g,mn,vn)(Sn)}}function mn(gn){return Z(sn,S),an}function vn(gn){return S.restore(),++J<yn.length?C(yn[J]):xn}}}function en(Z,Q){Z.resolveAll&&!c.includes(Z)&&c.push(Z),Z.resolve&&Ee(m.events,Q,m.events.length-Q,Z.resolve(m.events.slice(Q),m)),Z.resolveTo&&(m.events=Z.resolveTo(m.events,m))}function cn(){const Z=E(),Q=m.previous,$=m.currentConstruct,Y=m.events.length,an=Array.from(f);return{restore:xn,from:Y};function xn(){a=Z,m.previous=Q,m.currentConstruct=$,m.events.length=Y,f=an,D()}}function D(){a.line in s&&a.column<2&&(a.column=s[a.line],a.offset+=s[a.line]-1)}}function Lk(t,l){const i=l.start._index,a=l.start._bufferIndex,s=l.end._index,c=l.end._bufferIndex;let u;if(i===s)u=[t[i].slice(a,c)];else{if(u=t.slice(i,s),a>-1){const f=u[0];typeof f=="string"?u[0]=f.slice(a):u.shift()}c>0&&u.push(t[s].slice(0,c))}return u}function _k(t,l){let i=-1;const a=[];let s;for(;++i<t.length;){const c=t[i];let u;if(typeof c=="string")u=c;else switch(c){case-5:{u="\r";break}case-4:{u=`
`;break}case-3:{u=`\r
`;break}case-2:{u=l?" ":"	";break}case-1:{if(!l&&s)continue;u=" ";break}default:u=String.fromCharCode(c)}s=c===-2,a.push(u)}return a.join("")}const Rk={42:ke,43:ke,45:ke,48:ke,49:ke,50:ke,51:ke,52:ke,53:ke,54:ke,55:ke,56:ke,57:ke,62:Bp},Pk={91:D0},Dk={[-2]:$a,[-1]:$a,32:$a},Tk={35:N0,42:Wl,45:[Kd,Wl],60:j0,61:Kd,95:Wl,96:Jd,126:Jd},Mk={38:jp,92:Gp},Ok={[-5]:Ka,[-4]:Ka,[-3]:Ka,33:lk,38:jp,42:fs,60:[s0,J0],91:ak,92:[b0,Gp],93:Rs,95:fs,96:S0},bk={null:[fs,wk]},Fk={null:[42,95]},Nk={null:[]},zk=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:Fk,contentInitial:Pk,disable:Nk,document:Rk,flow:Tk,flowInitial:Dk,insideSpan:bk,string:Mk,text:Ok},Symbol.toStringTag,{value:"Module"}));function Bk(t){const i=Np([zk,...(t||{}).extensions||[]]),a={defined:[],lazy:{},constructs:i,content:s(e0),document:s(r0),flow:s(vk),string:s(Ck),text:s(xk)};return a;function s(c){return u;function u(f){return Ek(a,c,f)}}}function Gk(t){for(;!Hp(t););return t}const Yd=/[\0\t\n\r]/g;function jk(){let t=1,l="",i=!0,a;return s;function s(c,u,f){const g=[];let m,y,h,v,A;for(c=l+(typeof c=="string"?c.toString():new TextDecoder(u||void 0).decode(c)),h=0,l="",i&&(c.charCodeAt(0)===65279&&h++,i=void 0);h<c.length;){if(Yd.lastIndex=h,m=Yd.exec(c),v=m&&m.index!==void 0?m.index:c.length,A=c.charCodeAt(v),!m){l=c.slice(h);break}if(A===10&&h===v&&a)g.push(-3),a=void 0;else switch(a&&(g.push(-5),a=void 0),h<v&&(g.push(c.slice(h,v)),t+=v-h),A){case 0:{g.push(65533),t++;break}case 9:{for(y=Math.ceil(t/4)*4,g.push(-2);t++<y;)g.push(-1);break}case 10:{g.push(-4),t=1;break}default:a=!0,t=1}h=v+1}return f&&(a&&g.push(-5),l&&g.push(l),g.push(null)),g}}const Hk=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Uk(t){return t.replace(Hk,Wk)}function Wk(t,l,i){if(l)return l;if(i.charCodeAt(0)===35){const s=i.charCodeAt(1),c=s===120||s===88;return zp(i.slice(c?2:1),c?16:10)}return _s(i)||t}const Jp={}.hasOwnProperty;function Vk(t,l,i){return l&&typeof l=="object"&&(i=l,l=void 0),qk(i)(Gk(Bk(i).document().write(jk()(t,l,!0))))}function qk(t){const l={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:c(nr),autolinkProtocol:cn,autolinkEmail:cn,atxHeading:c(Pr),blockQuote:c(Vn),characterEscape:cn,characterReference:cn,codeFenced:c(Ye),codeFencedFenceInfo:u,codeFencedFenceMeta:u,codeIndented:c(Ye,u),codeText:c(Li,u),codeTextData:cn,data:cn,codeFlowValue:cn,definition:c(Xt),definitionDestinationString:u,definitionLabelString:u,definitionTitleString:u,emphasis:c(Rr),hardBreakEscape:c(Dr),hardBreakTrailing:c(Dr),htmlFlow:c(Zt,u),htmlFlowData:cn,htmlText:c(Zt,u),htmlTextData:cn,image:c(_i),label:u,link:c(nr),listItem:c(ut),listItemValue:v,listOrdered:c(st,h),listUnordered:c(st),paragraph:c(Tr),reference:C,referenceString:u,resourceDestinationString:u,resourceTitleString:u,setextHeading:c(Pr),strong:c(Ri),thematicBreak:c(Di)},exit:{atxHeading:g(),atxHeadingSequence:un,autolink:g(),autolinkEmail:Tn,autolinkProtocol:Sn,blockQuote:g(),characterEscapeValue:D,characterReferenceMarkerHexadecimal:vn,characterReferenceMarkerNumeric:vn,characterReferenceValue:gn,characterReference:Pn,codeFenced:g(b),codeFencedFence:_,codeFencedFenceInfo:A,codeFencedFenceMeta:E,codeFlowValue:D,codeIndented:g(M),codeText:g(an),codeTextData:D,data:D,definition:g(),definitionDestinationString:rn,definitionLabelString:U,definitionTitleString:B,emphasis:g(),hardBreakEscape:g(Q),hardBreakTrailing:g(Q),htmlFlow:g($),htmlFlowData:D,htmlText:g(Y),htmlTextData:D,image:g(yn),label:sn,labelText:J,lineEnding:Z,link:g(xn),listItem:g(),listOrdered:g(),listUnordered:g(),paragraph:g(),referenceString:mn,resourceDestinationString:S,resourceTitleString:L,resource:N,setextHeading:g(en),setextHeadingLineSequence:V,setextHeadingText:O,strong:g(),thematicBreak:g()}};$p(l,(t||{}).mdastExtensions||[]);const i={};return a;function a(F){let K={type:"root",children:[]};const hn={stack:[K],tokenStack:[],config:l,enter:f,exit:m,buffer:u,resume:y,data:i},wn=[];let _n=-1;for(;++_n<F.length;)if(F[_n][1].type==="listOrdered"||F[_n][1].type==="listUnordered")if(F[_n][0]==="enter")wn.push(_n);else{const Zn=wn.pop();_n=s(F,Zn,_n)}for(_n=-1;++_n<F.length;){const Zn=l[F[_n][0]];Jp.call(Zn,F[_n][1].type)&&Zn[F[_n][1].type].call(Object.assign({sliceSerialize:F[_n][2].sliceSerialize},hn),F[_n][1])}if(hn.tokenStack.length>0){const Zn=hn.tokenStack[hn.tokenStack.length-1];(Zn[1]||Xd).call(hn,void 0,Zn[0])}for(K.position={start:Pt(F.length>0?F[0][1].start:{line:1,column:1,offset:0}),end:Pt(F.length>0?F[F.length-2][1].end:{line:1,column:1,offset:0})},_n=-1;++_n<l.transforms.length;)K=l.transforms[_n](K)||K;return K}function s(F,K,hn){let wn=K-1,_n=-1,Zn=!1,Xe,Le,ct,Tt;for(;++wn<=hn;){const ne=F[wn];switch(ne[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{ne[0]==="enter"?_n++:_n--,Tt=void 0;break}case"lineEndingBlank":{ne[0]==="enter"&&(Xe&&!Tt&&!_n&&!ct&&(ct=wn),Tt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Tt=void 0}if(!_n&&ne[0]==="enter"&&ne[1].type==="listItemPrefix"||_n===-1&&ne[0]==="exit"&&(ne[1].type==="listUnordered"||ne[1].type==="listOrdered")){if(Xe){let Ue=wn;for(Le=void 0;Ue--;){const ve=F[Ue];if(ve[1].type==="lineEnding"||ve[1].type==="lineEndingBlank"){if(ve[0]==="exit")continue;Le&&(F[Le][1].type="lineEndingBlank",Zn=!0),ve[1].type="lineEnding",Le=Ue}else if(!(ve[1].type==="linePrefix"||ve[1].type==="blockQuotePrefix"||ve[1].type==="blockQuotePrefixWhitespace"||ve[1].type==="blockQuoteMarker"||ve[1].type==="listItemIndent"))break}ct&&(!Le||ct<Le)&&(Xe._spread=!0),Xe.end=Object.assign({},Le?F[Le][1].start:ne[1].end),F.splice(Le||wn,0,["exit",Xe,ne[2]]),wn++,hn++}if(ne[1].type==="listItemPrefix"){const Ue={type:"listItem",_spread:!1,start:Object.assign({},ne[1].start),end:void 0};Xe=Ue,F.splice(wn,0,["enter",Ue,ne[2]]),wn++,hn++,ct=void 0,Tt=!0}}}return F[K][1]._spread=Zn,hn}function c(F,K){return hn;function hn(wn){f.call(this,F(wn),wn),K&&K.call(this,wn)}}function u(){this.stack.push({type:"fragment",children:[]})}function f(F,K,hn){this.stack[this.stack.length-1].children.push(F),this.stack.push(F),this.tokenStack.push([K,hn||void 0]),F.position={start:Pt(K.start),end:void 0}}function g(F){return K;function K(hn){F&&F.call(this,hn),m.call(this,hn)}}function m(F,K){const hn=this.stack.pop(),wn=this.tokenStack.pop();if(wn)wn[0].type!==F.type&&(K?K.call(this,F,wn[0]):(wn[1]||Xd).call(this,F,wn[0]));else throw new Error("Cannot close `"+F.type+"` ("+Ai({start:F.start,end:F.end})+"): it’s not open");hn.position.end=Pt(F.end)}function y(){return Ls(this.stack.pop())}function h(){this.data.expectingFirstListItemValue=!0}function v(F){if(this.data.expectingFirstListItemValue){const K=this.stack[this.stack.length-2];K.start=Number.parseInt(this.sliceSerialize(F),10),this.data.expectingFirstListItemValue=void 0}}function A(){const F=this.resume(),K=this.stack[this.stack.length-1];K.lang=F}function E(){const F=this.resume(),K=this.stack[this.stack.length-1];K.meta=F}function _(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function b(){const F=this.resume(),K=this.stack[this.stack.length-1];K.value=F.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function M(){const F=this.resume(),K=this.stack[this.stack.length-1];K.value=F.replace(/(\r?\n|\r)$/g,"")}function U(F){const K=this.resume(),hn=this.stack[this.stack.length-1];hn.label=K,hn.identifier=He(this.sliceSerialize(F)).toLowerCase()}function B(){const F=this.resume(),K=this.stack[this.stack.length-1];K.title=F}function rn(){const F=this.resume(),K=this.stack[this.stack.length-1];K.url=F}function un(F){const K=this.stack[this.stack.length-1];if(!K.depth){const hn=this.sliceSerialize(F).length;K.depth=hn}}function O(){this.data.setextHeadingSlurpLineEnding=!0}function V(F){const K=this.stack[this.stack.length-1];K.depth=this.sliceSerialize(F).codePointAt(0)===61?1:2}function en(){this.data.setextHeadingSlurpLineEnding=void 0}function cn(F){const hn=this.stack[this.stack.length-1].children;let wn=hn[hn.length-1];(!wn||wn.type!=="text")&&(wn=Pi(),wn.position={start:Pt(F.start),end:void 0},hn.push(wn)),this.stack.push(wn)}function D(F){const K=this.stack.pop();K.value+=this.sliceSerialize(F),K.position.end=Pt(F.end)}function Z(F){const K=this.stack[this.stack.length-1];if(this.data.atHardBreak){const hn=K.children[K.children.length-1];hn.position.end=Pt(F.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&l.canContainEols.includes(K.type)&&(cn.call(this,F),D.call(this,F))}function Q(){this.data.atHardBreak=!0}function $(){const F=this.resume(),K=this.stack[this.stack.length-1];K.value=F}function Y(){const F=this.resume(),K=this.stack[this.stack.length-1];K.value=F}function an(){const F=this.resume(),K=this.stack[this.stack.length-1];K.value=F}function xn(){const F=this.stack[this.stack.length-1];if(this.data.inReference){const K=this.data.referenceType||"shortcut";F.type+="Reference",F.referenceType=K,delete F.url,delete F.title}else delete F.identifier,delete F.label;this.data.referenceType=void 0}function yn(){const F=this.stack[this.stack.length-1];if(this.data.inReference){const K=this.data.referenceType||"shortcut";F.type+="Reference",F.referenceType=K,delete F.url,delete F.title}else delete F.identifier,delete F.label;this.data.referenceType=void 0}function J(F){const K=this.sliceSerialize(F),hn=this.stack[this.stack.length-2];hn.label=Uk(K),hn.identifier=He(K).toLowerCase()}function sn(){const F=this.stack[this.stack.length-1],K=this.resume(),hn=this.stack[this.stack.length-1];if(this.data.inReference=!0,hn.type==="link"){const wn=F.children;hn.children=wn}else hn.alt=K}function S(){const F=this.resume(),K=this.stack[this.stack.length-1];K.url=F}function L(){const F=this.resume(),K=this.stack[this.stack.length-1];K.title=F}function N(){this.data.inReference=void 0}function C(){this.data.referenceType="collapsed"}function mn(F){const K=this.resume(),hn=this.stack[this.stack.length-1];hn.label=K,hn.identifier=He(this.sliceSerialize(F)).toLowerCase(),this.data.referenceType="full"}function vn(F){this.data.characterReferenceType=F.type}function gn(F){const K=this.sliceSerialize(F),hn=this.data.characterReferenceType;let wn;hn?(wn=zp(K,hn==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):wn=_s(K);const _n=this.stack[this.stack.length-1];_n.value+=wn}function Pn(F){const K=this.stack.pop();K.position.end=Pt(F.end)}function Sn(F){D.call(this,F);const K=this.stack[this.stack.length-1];K.url=this.sliceSerialize(F)}function Tn(F){D.call(this,F);const K=this.stack[this.stack.length-1];K.url="mailto:"+this.sliceSerialize(F)}function Vn(){return{type:"blockquote",children:[]}}function Ye(){return{type:"code",lang:null,meta:null,value:""}}function Li(){return{type:"inlineCode",value:""}}function Xt(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Rr(){return{type:"emphasis",children:[]}}function Pr(){return{type:"heading",depth:0,children:[]}}function Dr(){return{type:"break"}}function Zt(){return{type:"html",value:""}}function _i(){return{type:"image",title:null,url:"",alt:null}}function nr(){return{type:"link",title:null,url:"",children:[]}}function st(F){return{type:"list",ordered:F.type==="listOrdered",start:null,spread:F._spread,children:[]}}function ut(F){return{type:"listItem",spread:F._spread,checked:null,children:[]}}function Tr(){return{type:"paragraph",children:[]}}function Ri(){return{type:"strong",children:[]}}function Pi(){return{type:"text",value:""}}function Di(){return{type:"thematicBreak"}}}function Pt(t){return{line:t.line,column:t.column,offset:t.offset}}function $p(t,l){let i=-1;for(;++i<l.length;){const a=l[i];Array.isArray(a)?$p(t,a):Qk(t,a)}}function Qk(t,l){let i;for(i in l)if(Jp.call(l,i))switch(i){case"canContainEols":{const a=l[i];a&&t[i].push(...a);break}case"transforms":{const a=l[i];a&&t[i].push(...a);break}case"enter":case"exit":{const a=l[i];a&&Object.assign(t[i],a);break}}}function Xd(t,l){throw t?new Error("Cannot close `"+t.type+"` ("+Ai({start:t.start,end:t.end})+"): a different token (`"+l.type+"`, "+Ai({start:l.start,end:l.end})+") is open"):new Error("Cannot close document, a token (`"+l.type+"`, "+Ai({start:l.start,end:l.end})+") is still open")}function Jk(t){const l=this;l.parser=i;function i(a){return Vk(a,{...l.data("settings"),...t,extensions:l.data("micromarkExtensions")||[],mdastExtensions:l.data("fromMarkdownExtensions")||[]})}}function $k(t,l){const i={type:"element",tagName:"blockquote",properties:{},children:t.wrap(t.all(l),!0)};return t.patch(l,i),t.applyData(l,i)}function Kk(t,l){const i={type:"element",tagName:"br",properties:{},children:[]};return t.patch(l,i),[t.applyData(l,i),{type:"text",value:`
`}]}function Yk(t,l){const i=l.value?l.value+`
`:"",a={},s=l.lang?l.lang.split(/\s+/):[];s.length>0&&(a.className=["language-"+s[0]]);let c={type:"element",tagName:"code",properties:a,children:[{type:"text",value:i}]};return l.meta&&(c.data={meta:l.meta}),t.patch(l,c),c=t.applyData(l,c),c={type:"element",tagName:"pre",properties:{},children:[c]},t.patch(l,c),c}function Xk(t,l){const i={type:"element",tagName:"del",properties:{},children:t.all(l)};return t.patch(l,i),t.applyData(l,i)}function Zk(t,l){const i={type:"element",tagName:"em",properties:{},children:t.all(l)};return t.patch(l,i),t.applyData(l,i)}function nA(t,l){const i=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",a=String(l.identifier).toUpperCase(),s=_r(a.toLowerCase()),c=t.footnoteOrder.indexOf(a);let u,f=t.footnoteCounts.get(a);f===void 0?(f=0,t.footnoteOrder.push(a),u=t.footnoteOrder.length):u=c+1,f+=1,t.footnoteCounts.set(a,f);const g={type:"element",tagName:"a",properties:{href:"#"+i+"fn-"+s,id:i+"fnref-"+s+(f>1?"-"+f:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(u)}]};t.patch(l,g);const m={type:"element",tagName:"sup",properties:{},children:[g]};return t.patch(l,m),t.applyData(l,m)}function eA(t,l){const i={type:"element",tagName:"h"+l.depth,properties:{},children:t.all(l)};return t.patch(l,i),t.applyData(l,i)}function tA(t,l){if(t.options.allowDangerousHtml){const i={type:"raw",value:l.value};return t.patch(l,i),t.applyData(l,i)}}function Kp(t,l){const i=l.referenceType;let a="]";if(i==="collapsed"?a+="[]":i==="full"&&(a+="["+(l.label||l.identifier)+"]"),l.type==="imageReference")return[{type:"text",value:"!["+l.alt+a}];const s=t.all(l),c=s[0];c&&c.type==="text"?c.value="["+c.value:s.unshift({type:"text",value:"["});const u=s[s.length-1];return u&&u.type==="text"?u.value+=a:s.push({type:"text",value:a}),s}function rA(t,l){const i=String(l.identifier).toUpperCase(),a=t.definitionById.get(i);if(!a)return Kp(t,l);const s={src:_r(a.url||""),alt:l.alt};a.title!==null&&a.title!==void 0&&(s.title=a.title);const c={type:"element",tagName:"img",properties:s,children:[]};return t.patch(l,c),t.applyData(l,c)}function iA(t,l){const i={src:_r(l.url)};l.alt!==null&&l.alt!==void 0&&(i.alt=l.alt),l.title!==null&&l.title!==void 0&&(i.title=l.title);const a={type:"element",tagName:"img",properties:i,children:[]};return t.patch(l,a),t.applyData(l,a)}function lA(t,l){const i={type:"text",value:l.value.replace(/\r?\n|\r/g," ")};t.patch(l,i);const a={type:"element",tagName:"code",properties:{},children:[i]};return t.patch(l,a),t.applyData(l,a)}function oA(t,l){const i=String(l.identifier).toUpperCase(),a=t.definitionById.get(i);if(!a)return Kp(t,l);const s={href:_r(a.url||"")};a.title!==null&&a.title!==void 0&&(s.title=a.title);const c={type:"element",tagName:"a",properties:s,children:t.all(l)};return t.patch(l,c),t.applyData(l,c)}function aA(t,l){const i={href:_r(l.url)};l.title!==null&&l.title!==void 0&&(i.title=l.title);const a={type:"element",tagName:"a",properties:i,children:t.all(l)};return t.patch(l,a),t.applyData(l,a)}function sA(t,l,i){const a=t.all(l),s=i?uA(i):Yp(l),c={},u=[];if(typeof l.checked=="boolean"){const y=a[0];let h;y&&y.type==="element"&&y.tagName==="p"?h=y:(h={type:"element",tagName:"p",properties:{},children:[]},a.unshift(h)),h.children.length>0&&h.children.unshift({type:"text",value:" "}),h.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:l.checked,disabled:!0},children:[]}),c.className=["task-list-item"]}let f=-1;for(;++f<a.length;){const y=a[f];(s||f!==0||y.type!=="element"||y.tagName!=="p")&&u.push({type:"text",value:`
`}),y.type==="element"&&y.tagName==="p"&&!s?u.push(...y.children):u.push(y)}const g=a[a.length-1];g&&(s||g.type!=="element"||g.tagName!=="p")&&u.push({type:"text",value:`
`});const m={type:"element",tagName:"li",properties:c,children:u};return t.patch(l,m),t.applyData(l,m)}function uA(t){let l=!1;if(t.type==="list"){l=t.spread||!1;const i=t.children;let a=-1;for(;!l&&++a<i.length;)l=Yp(i[a])}return l}function Yp(t){const l=t.spread;return l??t.children.length>1}function cA(t,l){const i={},a=t.all(l);let s=-1;for(typeof l.start=="number"&&l.start!==1&&(i.start=l.start);++s<a.length;){const u=a[s];if(u.type==="element"&&u.tagName==="li"&&u.properties&&Array.isArray(u.properties.className)&&u.properties.className.includes("task-list-item")){i.className=["contains-task-list"];break}}const c={type:"element",tagName:l.ordered?"ol":"ul",properties:i,children:t.wrap(a,!0)};return t.patch(l,c),t.applyData(l,c)}function dA(t,l){const i={type:"element",tagName:"p",properties:{},children:t.all(l)};return t.patch(l,i),t.applyData(l,i)}function pA(t,l){const i={type:"root",children:t.wrap(t.all(l))};return t.patch(l,i),t.applyData(l,i)}function fA(t,l){const i={type:"element",tagName:"strong",properties:{},children:t.all(l)};return t.patch(l,i),t.applyData(l,i)}function gA(t,l){const i=t.all(l),a=i.shift(),s=[];if(a){const u={type:"element",tagName:"thead",properties:{},children:t.wrap([a],!0)};t.patch(l.children[0],u),s.push(u)}if(i.length>0){const u={type:"element",tagName:"tbody",properties:{},children:t.wrap(i,!0)},f=Cs(l.children[1]),g=Pp(l.children[l.children.length-1]);f&&g&&(u.position={start:f,end:g}),s.push(u)}const c={type:"element",tagName:"table",properties:{},children:t.wrap(s,!0)};return t.patch(l,c),t.applyData(l,c)}function mA(t,l,i){const a=i?i.children:void 0,c=(a?a.indexOf(l):1)===0?"th":"td",u=i&&i.type==="table"?i.align:void 0,f=u?u.length:l.children.length;let g=-1;const m=[];for(;++g<f;){const h=l.children[g],v={},A=u?u[g]:void 0;A&&(v.align=A);let E={type:"element",tagName:c,properties:v,children:[]};h&&(E.children=t.all(h),t.patch(h,E),E=t.applyData(h,E)),m.push(E)}const y={type:"element",tagName:"tr",properties:{},children:t.wrap(m,!0)};return t.patch(l,y),t.applyData(l,y)}function hA(t,l){const i={type:"element",tagName:"td",properties:{},children:t.all(l)};return t.patch(l,i),t.applyData(l,i)}const Zd=9,np=32;function yA(t){const l=String(t),i=/\r?\n|\r/g;let a=i.exec(l),s=0;const c=[];for(;a;)c.push(ep(l.slice(s,a.index),s>0,!0),a[0]),s=a.index+a[0].length,a=i.exec(l);return c.push(ep(l.slice(s),s>0,!1)),c.join("")}function ep(t,l,i){let a=0,s=t.length;if(l){let c=t.codePointAt(a);for(;c===Zd||c===np;)a++,c=t.codePointAt(a)}if(i){let c=t.codePointAt(s-1);for(;c===Zd||c===np;)s--,c=t.codePointAt(s-1)}return s>a?t.slice(a,s):""}function kA(t,l){const i={type:"text",value:yA(String(l.value))};return t.patch(l,i),t.applyData(l,i)}function AA(t,l){const i={type:"element",tagName:"hr",properties:{},children:[]};return t.patch(l,i),t.applyData(l,i)}const vA={blockquote:$k,break:Kk,code:Yk,delete:Xk,emphasis:Zk,footnoteReference:nA,heading:eA,html:tA,imageReference:rA,image:iA,inlineCode:lA,linkReference:oA,link:aA,listItem:sA,list:cA,paragraph:dA,root:pA,strong:fA,table:gA,tableCell:hA,tableRow:mA,text:kA,thematicBreak:AA,toml:Gl,yaml:Gl,definition:Gl,footnoteDefinition:Gl};function Gl(){}const Xp=-1,Yl=0,Si=1,Jl=2,Ps=3,Ds=4,Ts=5,Ms=6,Zp=7,nf=8,SA=typeof self=="object"?self:globalThis,tp=(t,l)=>{switch(t){case"Function":case"SharedWorker":case"Worker":case"eval":case"setInterval":case"setTimeout":throw new TypeError("unable to deserialize "+t)}return new SA[t](l)},wA=(t,l)=>{const i=(s,c)=>(t.set(c,s),s),a=s=>{if(t.has(s))return t.get(s);const[c,u]=l[s];switch(c){case Yl:case Xp:return i(u,s);case Si:{const f=i([],s);for(const g of u)f.push(a(g));return f}case Jl:{const f=i({},s);for(const[g,m]of u)f[a(g)]=a(m);return f}case Ps:return i(new Date(u),s);case Ds:{const{source:f,flags:g}=u;return i(new RegExp(f,g),s)}case Ts:{const f=i(new Map,s);for(const[g,m]of u)f.set(a(g),a(m));return f}case Ms:{const f=i(new Set,s);for(const g of u)f.add(a(g));return f}case Zp:{const{name:f,message:g}=u;return i(tp(f,g),s)}case nf:return i(BigInt(u),s);case"BigInt":return i(Object(BigInt(u)),s);case"ArrayBuffer":return i(new Uint8Array(u).buffer,u);case"DataView":{const{buffer:f}=new Uint8Array(u);return i(new DataView(f),u)}}return i(tp(c,u),s)};return a},rp=t=>wA(new Map,t)(0),Qt="",{toString:CA}={},{keys:xA}=Object,ki=t=>{const l=typeof t;if(l!=="object"||!t)return[Yl,l];const i=CA.call(t).slice(8,-1);switch(i){case"Array":return[Si,Qt];case"Object":return[Jl,Qt];case"Date":return[Ps,Qt];case"RegExp":return[Ds,Qt];case"Map":return[Ts,Qt];case"Set":return[Ms,Qt];case"DataView":return[Si,i]}return i.includes("Array")?[Si,i]:i.includes("Error")?[Zp,i]:[Jl,i]},jl=([t,l])=>t===Yl&&(l==="function"||l==="symbol"),IA=(t,l,i,a)=>{const s=(u,f)=>{const g=a.push(u)-1;return i.set(f,g),g},c=u=>{if(i.has(u))return i.get(u);let[f,g]=ki(u);switch(f){case Yl:{let y=u;switch(g){case"bigint":f=nf,y=u.toString();break;case"function":case"symbol":if(t)throw new TypeError("unable to serialize "+g);y=null;break;case"undefined":return s([Xp],u)}return s([f,y],u)}case Si:{if(g){let v=u;return g==="DataView"?v=new Uint8Array(u.buffer):g==="ArrayBuffer"&&(v=new Uint8Array(u)),s([g,[...v]],u)}const y=[],h=s([f,y],u);for(const v of u)y.push(c(v));return h}case Jl:{if(g)switch(g){case"BigInt":return s([g,u.toString()],u);case"Boolean":case"Number":case"String":return s([g,u.valueOf()],u)}if(l&&"toJSON"in u)return c(u.toJSON());const y=[],h=s([f,y],u);for(const v of xA(u))(t||!jl(ki(u[v])))&&y.push([c(v),c(u[v])]);return h}case Ps:return s([f,isNaN(u.getTime())?Qt:u.toISOString()],u);case Ds:{const{source:y,flags:h}=u;return s([f,{source:y,flags:h}],u)}case Ts:{const y=[],h=s([f,y],u);for(const[v,A]of u)(t||!(jl(ki(v))||jl(ki(A))))&&y.push([c(v),c(A)]);return h}case Ms:{const y=[],h=s([f,y],u);for(const v of u)(t||!jl(ki(v)))&&y.push(c(v));return h}}const{message:m}=u;return s([f,{name:g,message:m}],u)};return c},ip=(t,{json:l,lossy:i}={})=>{const a=[];return IA(!(l||i),!!l,new Map,a)(t),a},$t=typeof structuredClone=="function"?(t,l)=>l&&("json"in l||"lossy"in l)?rp(ip(t,l)):structuredClone(t):(t,l)=>rp(ip(t,l));function EA(t,l){const i=[{type:"text",value:"↩"}];return l>1&&i.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(l)}]}),i}function LA(t,l){return"Back to reference "+(t+1)+(l>1?"-"+l:"")}function _A(t){const l=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",i=t.options.footnoteBackContent||EA,a=t.options.footnoteBackLabel||LA,s=t.options.footnoteLabel||"Footnotes",c=t.options.footnoteLabelTagName||"h2",u=t.options.footnoteLabelProperties||{className:["sr-only"]},f=[];let g=-1;for(;++g<t.footnoteOrder.length;){const m=t.footnoteById.get(t.footnoteOrder[g]);if(!m)continue;const y=t.all(m),h=String(m.identifier).toUpperCase(),v=_r(h.toLowerCase());let A=0;const E=[],_=t.footnoteCounts.get(h);for(;_!==void 0&&++A<=_;){E.length>0&&E.push({type:"text",value:" "});let U=typeof i=="string"?i:i(g,A);typeof U=="string"&&(U={type:"text",value:U}),E.push({type:"element",tagName:"a",properties:{href:"#"+l+"fnref-"+v+(A>1?"-"+A:""),dataFootnoteBackref:"",ariaLabel:typeof a=="string"?a:a(g,A),className:["data-footnote-backref"]},children:Array.isArray(U)?U:[U]})}const b=y[y.length-1];if(b&&b.type==="element"&&b.tagName==="p"){const U=b.children[b.children.length-1];U&&U.type==="text"?U.value+=" ":b.children.push({type:"text",value:" "}),b.children.push(...E)}else y.push(...E);const M={type:"element",tagName:"li",properties:{id:l+"fn-"+v},children:t.wrap(y,!0)};t.patch(m,M),f.push(M)}if(f.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:c,properties:{...$t(u),id:"footnote-label"},children:[{type:"text",value:s}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:t.wrap(f,!0)},{type:"text",value:`
`}]}}const Xl=function(t){if(t==null)return TA;if(typeof t=="function")return Zl(t);if(typeof t=="object")return Array.isArray(t)?RA(t):PA(t);if(typeof t=="string")return DA(t);throw new Error("Expected function, string, or object as test")};function RA(t){const l=[];let i=-1;for(;++i<t.length;)l[i]=Xl(t[i]);return Zl(a);function a(...s){let c=-1;for(;++c<l.length;)if(l[c].apply(this,s))return!0;return!1}}function PA(t){const l=t;return Zl(i);function i(a){const s=a;let c;for(c in t)if(s[c]!==l[c])return!1;return!0}}function DA(t){return Zl(l);function l(i){return i&&i.type===t}}function Zl(t){return l;function l(i,a,s){return!!(MA(i)&&t.call(this,i,typeof a=="number"?a:void 0,s||void 0))}}function TA(){return!0}function MA(t){return t!==null&&typeof t=="object"&&"type"in t}const ef=[],OA=!0,gs=!1,bA="skip";function tf(t,l,i,a){let s;typeof l=="function"&&typeof i!="function"?(a=i,i=l):s=l;const c=Xl(s),u=a?-1:1;f(t,void 0,[])();function f(g,m,y){const h=g&&typeof g=="object"?g:{};if(typeof h.type=="string"){const A=typeof h.tagName=="string"?h.tagName:typeof h.name=="string"?h.name:void 0;Object.defineProperty(v,"name",{value:"node ("+(g.type+(A?"<"+A+">":""))+")"})}return v;function v(){let A=ef,E,_,b;if((!l||c(g,m,y[y.length-1]||void 0))&&(A=FA(i(g,y)),A[0]===gs))return A;if("children"in g&&g.children){const M=g;if(M.children&&A[0]!==bA)for(_=(a?M.children.length:-1)+u,b=y.concat(M);_>-1&&_<M.children.length;){const U=M.children[_];if(E=f(U,_,b)(),E[0]===gs)return E;_=typeof E[1]=="number"?E[1]:_+u}}return A}}}function FA(t){return Array.isArray(t)?t:typeof t=="number"?[OA,t]:t==null?ef:[t]}function Os(t,l,i,a){let s,c,u;typeof l=="function"&&typeof i!="function"?(c=void 0,u=l,s=i):(c=l,u=i,s=a),tf(t,c,f,s);function f(g,m){const y=m[m.length-1],h=y?y.children.indexOf(g):void 0;return u(g,h,y)}}const ms={}.hasOwnProperty,NA={};function zA(t,l){const i=l||NA,a=new Map,s=new Map,c=new Map,u={...vA,...i.handlers},f={all:m,applyData:GA,definitionById:a,footnoteById:s,footnoteCounts:c,footnoteOrder:[],handlers:u,one:g,options:i,patch:BA,wrap:HA};return Os(t,function(y){if(y.type==="definition"||y.type==="footnoteDefinition"){const h=y.type==="definition"?a:s,v=String(y.identifier).toUpperCase();h.has(v)||h.set(v,y)}}),f;function g(y,h){const v=y.type,A=f.handlers[v];if(ms.call(f.handlers,v)&&A)return A(f,y,h);if(f.options.passThrough&&f.options.passThrough.includes(v)){if("children"in y){const{children:_,...b}=y,M=$t(b);return M.children=f.all(y),M}return $t(y)}return(f.options.unknownHandler||jA)(f,y,h)}function m(y){const h=[];if("children"in y){const v=y.children;let A=-1;for(;++A<v.length;){const E=f.one(v[A],y);if(E){if(A&&v[A-1].type==="break"&&(!Array.isArray(E)&&E.type==="text"&&(E.value=lp(E.value)),!Array.isArray(E)&&E.type==="element")){const _=E.children[0];_&&_.type==="text"&&(_.value=lp(_.value))}Array.isArray(E)?h.push(...E):h.push(E)}}}return h}}function BA(t,l){t.position&&(l.position=Ly(t))}function GA(t,l){let i=l;if(t&&t.data){const a=t.data.hName,s=t.data.hChildren,c=t.data.hProperties;if(typeof a=="string")if(i.type==="element")i.tagName=a;else{const u="children"in i?i.children:[i];i={type:"element",tagName:a,properties:{},children:u}}i.type==="element"&&c&&Object.assign(i.properties,$t(c)),"children"in i&&i.children&&s!==null&&s!==void 0&&(i.children=s)}return i}function jA(t,l){const i=l.data||{},a="value"in l&&!(ms.call(i,"hProperties")||ms.call(i,"hChildren"))?{type:"text",value:l.value}:{type:"element",tagName:"div",properties:{},children:t.all(l)};return t.patch(l,a),t.applyData(l,a)}function HA(t,l){const i=[];let a=-1;for(l&&i.push({type:"text",value:`
`});++a<t.length;)a&&i.push({type:"text",value:`
`}),i.push(t[a]);return l&&t.length>0&&i.push({type:"text",value:`
`}),i}function lp(t){let l=0,i=t.charCodeAt(l);for(;i===9||i===32;)l++,i=t.charCodeAt(l);return t.slice(l)}function op(t,l){const i=zA(t,l),a=i.one(t,void 0),s=_A(i),c=Array.isArray(a)?{type:"root",children:a}:a||{type:"root",children:[]};return s&&c.children.push({type:"text",value:`
`},s),c}function UA(t,l){return t&&"run"in t?async function(i,a){const s=op(i,{file:a,...l});await t.run(s,a)}:function(i,a){return op(i,{file:a,...t||l})}}function ap(t){if(t)throw t}function hs(t){if(typeof t!="object"||t===null)return!1;const l=Object.getPrototypeOf(t);return(l===null||l===Object.prototype||Object.getPrototypeOf(l)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function WA(){const t=[],l={run:i,use:a};return l;function i(...s){let c=-1;const u=s.pop();if(typeof u!="function")throw new TypeError("Expected function as last argument, not "+u);f(null,...s);function f(g,...m){const y=t[++c];let h=-1;if(g){u(g);return}for(;++h<s.length;)(m[h]===null||m[h]===void 0)&&(m[h]=s[h]);s=m,y?VA(y,f)(...m):u(null,...m)}}function a(s){if(typeof s!="function")throw new TypeError("Expected `middelware` to be a function, not "+s);return t.push(s),l}}function VA(t,l){let i;return a;function a(...u){const f=t.length>u.length;let g;f&&u.push(s);try{g=t.apply(this,u)}catch(m){const y=m;if(f&&i)throw y;return s(y)}f||(g&&g.then&&typeof g.then=="function"?g.then(c,s):g instanceof Error?s(g):c(g))}function s(u,...f){i||(i=!0,l(u,...f))}function c(u){s(null,u)}}const $e={basename:qA,dirname:QA,extname:JA,join:$A,sep:"/"};function qA(t,l){if(l!==void 0&&typeof l!="string")throw new TypeError('"ext" argument must be a string');Ei(t);let i=0,a=-1,s=t.length,c;if(l===void 0||l.length===0||l.length>t.length){for(;s--;)if(t.codePointAt(s)===47){if(c){i=s+1;break}}else a<0&&(c=!0,a=s+1);return a<0?"":t.slice(i,a)}if(l===t)return"";let u=-1,f=l.length-1;for(;s--;)if(t.codePointAt(s)===47){if(c){i=s+1;break}}else u<0&&(c=!0,u=s+1),f>-1&&(t.codePointAt(s)===l.codePointAt(f--)?f<0&&(a=s):(f=-1,a=u));return i===a?a=u:a<0&&(a=t.length),t.slice(i,a)}function QA(t){if(Ei(t),t.length===0)return".";let l=-1,i=t.length,a;for(;--i;)if(t.codePointAt(i)===47){if(a){l=i;break}}else a||(a=!0);return l<0?t.codePointAt(0)===47?"/":".":l===1&&t.codePointAt(0)===47?"//":t.slice(0,l)}function JA(t){Ei(t);let l=t.length,i=-1,a=0,s=-1,c=0,u;for(;l--;){const f=t.codePointAt(l);if(f===47){if(u){a=l+1;break}continue}i<0&&(u=!0,i=l+1),f===46?s<0?s=l:c!==1&&(c=1):s>-1&&(c=-1)}return s<0||i<0||c===0||c===1&&s===i-1&&s===a+1?"":t.slice(s,i)}function $A(...t){let l=-1,i;for(;++l<t.length;)Ei(t[l]),t[l]&&(i=i===void 0?t[l]:i+"/"+t[l]);return i===void 0?".":KA(i)}function KA(t){Ei(t);const l=t.codePointAt(0)===47;let i=YA(t,!l);return i.length===0&&!l&&(i="."),i.length>0&&t.codePointAt(t.length-1)===47&&(i+="/"),l?"/"+i:i}function YA(t,l){let i="",a=0,s=-1,c=0,u=-1,f,g;for(;++u<=t.length;){if(u<t.length)f=t.codePointAt(u);else{if(f===47)break;f=47}if(f===47){if(!(s===u-1||c===1))if(s!==u-1&&c===2){if(i.length<2||a!==2||i.codePointAt(i.length-1)!==46||i.codePointAt(i.length-2)!==46){if(i.length>2){if(g=i.lastIndexOf("/"),g!==i.length-1){g<0?(i="",a=0):(i=i.slice(0,g),a=i.length-1-i.lastIndexOf("/")),s=u,c=0;continue}}else if(i.length>0){i="",a=0,s=u,c=0;continue}}l&&(i=i.length>0?i+"/..":"..",a=2)}else i.length>0?i+="/"+t.slice(s+1,u):i=t.slice(s+1,u),a=u-s-1;s=u,c=0}else f===46&&c>-1?c++:c=-1}return i}function Ei(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}const XA={cwd:ZA};function ZA(){return"/"}function ys(t){return!!(t!==null&&typeof t=="object"&&"href"in t&&t.href&&"protocol"in t&&t.protocol&&t.auth===void 0)}function nv(t){if(typeof t=="string")t=new URL(t);else if(!ys(t)){const l=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+t+"`");throw l.code="ERR_INVALID_ARG_TYPE",l}if(t.protocol!=="file:"){const l=new TypeError("The URL must be of scheme file");throw l.code="ERR_INVALID_URL_SCHEME",l}return ev(t)}function ev(t){if(t.hostname!==""){const a=new TypeError('File URL host must be "localhost" or empty on darwin');throw a.code="ERR_INVALID_FILE_URL_HOST",a}const l=t.pathname;let i=-1;for(;++i<l.length;)if(l.codePointAt(i)===37&&l.codePointAt(i+1)===50){const a=l.codePointAt(i+2);if(a===70||a===102){const s=new TypeError("File URL path must not include encoded / characters");throw s.code="ERR_INVALID_FILE_URL_PATH",s}}return decodeURIComponent(l)}const Ya=["history","path","basename","stem","extname","dirname"];class rf{constructor(l){let i;l?ys(l)?i={path:l}:typeof l=="string"||tv(l)?i={value:l}:i=l:i={},this.cwd="cwd"in i?"":XA.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let a=-1;for(;++a<Ya.length;){const c=Ya[a];c in i&&i[c]!==void 0&&i[c]!==null&&(this[c]=c==="history"?[...i[c]]:i[c])}let s;for(s in i)Ya.includes(s)||(this[s]=i[s])}get basename(){return typeof this.path=="string"?$e.basename(this.path):void 0}set basename(l){Za(l,"basename"),Xa(l,"basename"),this.path=$e.join(this.dirname||"",l)}get dirname(){return typeof this.path=="string"?$e.dirname(this.path):void 0}set dirname(l){sp(this.basename,"dirname"),this.path=$e.join(l||"",this.basename)}get extname(){return typeof this.path=="string"?$e.extname(this.path):void 0}set extname(l){if(Xa(l,"extname"),sp(this.dirname,"extname"),l){if(l.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(l.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=$e.join(this.dirname,this.stem+(l||""))}get path(){return this.history[this.history.length-1]}set path(l){ys(l)&&(l=nv(l)),Za(l,"path"),this.path!==l&&this.history.push(l)}get stem(){return typeof this.path=="string"?$e.basename(this.path,this.extname):void 0}set stem(l){Za(l,"stem"),Xa(l,"stem"),this.path=$e.join(this.dirname||"",l+(this.extname||""))}fail(l,i,a){const s=this.message(l,i,a);throw s.fatal=!0,s}info(l,i,a){const s=this.message(l,i,a);return s.fatal=void 0,s}message(l,i,a){const s=new se(l,i,a);return this.path&&(s.name=this.path+":"+s.name,s.file=this.path),s.fatal=!1,this.messages.push(s),s}toString(l){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(l||void 0).decode(this.value)}}function Xa(t,l){if(t&&t.includes($e.sep))throw new Error("`"+l+"` cannot be a path: did not expect `"+$e.sep+"`")}function Za(t,l){if(!t)throw new Error("`"+l+"` cannot be empty")}function sp(t,l){if(!t)throw new Error("Setting `"+l+"` requires `path` to be set too")}function tv(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const rv=function(t){const a=this.constructor.prototype,s=a[t],c=function(){return s.apply(c,arguments)};Object.setPrototypeOf(c,a);const u=Object.getOwnPropertyNames(s);for(const f of u){const g=Object.getOwnPropertyDescriptor(s,f);g&&Object.defineProperty(c,f,g)}return c},iv={}.hasOwnProperty;class bs extends rv{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=WA()}copy(){const l=new bs;let i=-1;for(;++i<this.attachers.length;){const a=this.attachers[i];l.use(...a)}return l.data($t(this.namespace)),l}data(l,i){return typeof l=="string"?arguments.length===2?(ts("data",this.frozen),this.namespace[l]=i,this):iv.call(this.namespace,l)&&this.namespace[l]||void 0:l?(ts("data",this.frozen),this.namespace=l,this):this.namespace}freeze(){if(this.frozen)return this;const l=this;for(;++this.freezeIndex<this.attachers.length;){const[i,...a]=this.attachers[this.freezeIndex];if(a[0]===!1)continue;a[0]===!0&&(a[0]=void 0);const s=i.call(l,...a);typeof s=="function"&&this.transformers.use(s)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(l){this.freeze();const i=Hl(l),a=this.parser||this.Parser;return ns("parse",a),a(String(i),i)}process(l,i){const a=this;return this.freeze(),ns("process",this.parser||this.Parser),es("process",this.compiler||this.Compiler),i?s(void 0,i):new Promise(s);function s(c,u){const f=Hl(l),g=a.parse(f);a.run(g,f,function(y,h,v){if(y||!h||!v)return m(y);const A=h,E=a.stringify(A,v);av(E)?v.value=E:v.result=E,m(y,v)});function m(y,h){y||!h?u(y):c?c(h):i(void 0,h)}}}processSync(l){let i=!1,a;return this.freeze(),ns("processSync",this.parser||this.Parser),es("processSync",this.compiler||this.Compiler),this.process(l,s),cp("processSync","process",i),a;function s(c,u){i=!0,ap(c),a=u}}run(l,i,a){up(l),this.freeze();const s=this.transformers;return!a&&typeof i=="function"&&(a=i,i=void 0),a?c(void 0,a):new Promise(c);function c(u,f){const g=Hl(i);s.run(l,g,m);function m(y,h,v){const A=h||l;y?f(y):u?u(A):a(void 0,A,v)}}}runSync(l,i){let a=!1,s;return this.run(l,i,c),cp("runSync","run",a),s;function c(u,f){ap(u),s=f,a=!0}}stringify(l,i){this.freeze();const a=Hl(i),s=this.compiler||this.Compiler;return es("stringify",s),up(l),s(l,a)}use(l,...i){const a=this.attachers,s=this.namespace;if(ts("use",this.frozen),l!=null)if(typeof l=="function")g(l,i);else if(typeof l=="object")Array.isArray(l)?f(l):u(l);else throw new TypeError("Expected usable value, not `"+l+"`");return this;function c(m){if(typeof m=="function")g(m,[]);else if(typeof m=="object")if(Array.isArray(m)){const[y,...h]=m;g(y,h)}else u(m);else throw new TypeError("Expected usable value, not `"+m+"`")}function u(m){if(!("plugins"in m)&&!("settings"in m))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");f(m.plugins),m.settings&&(s.settings={...s.settings,...$t(m.settings)})}function f(m){let y=-1;if(m!=null)if(Array.isArray(m))for(;++y<m.length;){const h=m[y];c(h)}else throw new TypeError("Expected a list of plugins, not `"+m+"`")}function g(m,y){let h=-1,v=-1;for(;++h<a.length;)if(a[h][0]===m){v=h;break}if(v===-1)a.push([m,...y]);else if(y.length>0){let[A,...E]=y;const _=a[v][1];hs(_)&&hs(A)&&(A=$t({..._,...A})),a[v]=[m,A,...E]}}}}const lv=new bs().freeze();function ns(t,l){if(typeof l!="function")throw new TypeError("Cannot `"+t+"` without `parser`")}function es(t,l){if(typeof l!="function")throw new TypeError("Cannot `"+t+"` without `compiler`")}function ts(t,l){if(l)throw new Error("Cannot call `"+t+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function up(t){if(!hs(t)||typeof t.type!="string")throw new TypeError("Expected node, got `"+t+"`")}function cp(t,l,i){if(!i)throw new Error("`"+t+"` finished async. Use `"+l+"` instead")}function Hl(t){return ov(t)?t:new rf(t)}function ov(t){return!!(t&&typeof t=="object"&&"message"in t&&"messages"in t)}function av(t){return typeof t=="string"||sv(t)}function sv(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const uv="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",dp=[],pp={allowDangerousHtml:!0},cv=/^(https?|ircs?|mailto|xmpp)$/i,dv=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function pv(t){const l=fv(t),i=gv(t);return mv(l.runSync(l.parse(i),i),t)}function fv(t){const l=t.rehypePlugins||dp,i=t.remarkPlugins||dp,a=t.remarkRehypeOptions?{...t.remarkRehypeOptions,...pp}:pp;return lv().use(Jk).use(i).use(UA,a).use(l)}function gv(t){const l=t.children||"",i=new rf;return typeof l=="string"&&(i.value=l),i}function mv(t,l){const i=l.allowedElements,a=l.allowElement,s=l.components,c=l.disallowedElements,u=l.skipHtml,f=l.unwrapDisallowed,g=l.urlTransform||hv;for(const y of dv)Object.hasOwn(l,y.from)&&(""+y.from+(y.to?"use `"+y.to+"` instead":"remove it")+uv+y.id,void 0);return l.className&&(t={type:"element",tagName:"div",properties:{className:l.className},children:t.type==="root"?t.children:[t]}),Os(t,m),Ty(t,{Fragment:j.Fragment,components:s,ignoreInvalidStyle:!0,jsx:j.jsx,jsxs:j.jsxs,passKeys:!0,passNode:!0});function m(y,h,v){if(y.type==="raw"&&v&&typeof h=="number")return u?v.children.splice(h,1):v.children[h]={type:"text",value:y.value},h;if(y.type==="element"){let A;for(A in Ja)if(Object.hasOwn(Ja,A)&&Object.hasOwn(y.properties,A)){const E=y.properties[A],_=Ja[A];(_===null||_.includes(y.tagName))&&(y.properties[A]=g(String(E||""),A,y))}}if(y.type==="element"){let A=i?!i.includes(y.tagName):c?c.includes(y.tagName):!1;if(!A&&a&&typeof h=="number"&&(A=!a(y,h,v)),A&&v&&typeof h=="number")return f&&y.children?v.children.splice(h,1,...y.children):v.children.splice(h,1),h}}}function hv(t){const l=t.indexOf(":"),i=t.indexOf("?"),a=t.indexOf("#"),s=t.indexOf("/");return l===-1||s!==-1&&l>s||i!==-1&&l>i||a!==-1&&l>a||cv.test(t.slice(0,l))?t:""}function fp(t,l){const i=String(t);if(typeof l!="string")throw new TypeError("Expected character");let a=0,s=i.indexOf(l);for(;s!==-1;)a++,s=i.indexOf(l,s+l.length);return a}function yv(t){if(typeof t!="string")throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function kv(t,l,i){const s=Xl((i||{}).ignore||[]),c=Av(l);let u=-1;for(;++u<c.length;)tf(t,"text",f);function f(m,y){let h=-1,v;for(;++h<y.length;){const A=y[h],E=v?v.children:void 0;if(s(A,E?E.indexOf(A):void 0,v))return;v=A}if(v)return g(m,y)}function g(m,y){const h=y[y.length-1],v=c[u][0],A=c[u][1];let E=0;const b=h.children.indexOf(m);let M=!1,U=[];v.lastIndex=0;let B=v.exec(m.value);for(;B;){const rn=B.index,un={index:B.index,input:B.input,stack:[...y,m]};let O=A(...B,un);if(typeof O=="string"&&(O=O.length>0?{type:"text",value:O}:void 0),O===!1?v.lastIndex=rn+1:(E!==rn&&U.push({type:"text",value:m.value.slice(E,rn)}),Array.isArray(O)?U.push(...O):O&&U.push(O),E=rn+B[0].length,M=!0),!v.global)break;B=v.exec(m.value)}return M?(E<m.value.length&&U.push({type:"text",value:m.value.slice(E)}),h.children.splice(b,1,...U)):U=[m],b+U.length}}function Av(t){const l=[];if(!Array.isArray(t))throw new TypeError("Expected find and replace tuple or list of tuples");const i=!t[0]||Array.isArray(t[0])?t:[t];let a=-1;for(;++a<i.length;){const s=i[a];l.push([vv(s[0]),Sv(s[1])])}return l}function vv(t){return typeof t=="string"?new RegExp(yv(t),"g"):t}function Sv(t){return typeof t=="function"?t:function(){return t}}const rs="phrasing",is=["autolink","link","image","label"];function wv(){return{transforms:[Rv],enter:{literalAutolink:xv,literalAutolinkEmail:ls,literalAutolinkHttp:ls,literalAutolinkWww:ls},exit:{literalAutolink:_v,literalAutolinkEmail:Lv,literalAutolinkHttp:Iv,literalAutolinkWww:Ev}}}function Cv(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:rs,notInConstruct:is},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:rs,notInConstruct:is},{character:":",before:"[ps]",after:"\\/",inConstruct:rs,notInConstruct:is}]}}function xv(t){this.enter({type:"link",title:null,url:"",children:[]},t)}function ls(t){this.config.enter.autolinkProtocol.call(this,t)}function Iv(t){this.config.exit.autolinkProtocol.call(this,t)}function Ev(t){this.config.exit.data.call(this,t);const l=this.stack[this.stack.length-1];l.type,l.url="http://"+this.sliceSerialize(t)}function Lv(t){this.config.exit.autolinkEmail.call(this,t)}function _v(t){this.exit(t)}function Rv(t){kv(t,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,Pv],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),Dv]],{ignore:["link","linkReference"]})}function Pv(t,l,i,a,s){let c="";if(!lf(s)||(/^w/i.test(l)&&(i=l+i,l="",c="http://"),!Tv(i)))return!1;const u=Mv(i+a);if(!u[0])return!1;const f={type:"link",title:null,url:c+l+u[0],children:[{type:"text",value:l+u[0]}]};return u[1]?[f,{type:"text",value:u[1]}]:f}function Dv(t,l,i,a){return!lf(a,!0)||/[-\d_]$/.test(i)?!1:{type:"link",title:null,url:"mailto:"+l+"@"+i,children:[{type:"text",value:l+"@"+i}]}}function Tv(t){const l=t.split(".");return!(l.length<2||l[l.length-1]&&(/_/.test(l[l.length-1])||!/[a-zA-Z\d]/.test(l[l.length-1]))||l[l.length-2]&&(/_/.test(l[l.length-2])||!/[a-zA-Z\d]/.test(l[l.length-2])))}function Mv(t){const l=/[!"&'),.:;<>?\]}]+$/.exec(t);if(!l)return[t,void 0];t=t.slice(0,l.index);let i=l[0],a=i.indexOf(")");const s=fp(t,"(");let c=fp(t,")");for(;a!==-1&&s>c;)t+=i.slice(0,a+1),i=i.slice(a+1),a=i.indexOf(")"),c++;return[t,i]}function lf(t,l){const i=t.input.charCodeAt(t.index-1);return(t.index===0||Kt(i)||$l(i))&&(!l||i!==47)}of.peek=Hv;function Ov(){this.buffer()}function bv(t){this.enter({type:"footnoteReference",identifier:"",label:""},t)}function Fv(){this.buffer()}function Nv(t){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},t)}function zv(t){const l=this.resume(),i=this.stack[this.stack.length-1];i.type,i.identifier=He(this.sliceSerialize(t)).toLowerCase(),i.label=l}function Bv(t){this.exit(t)}function Gv(t){const l=this.resume(),i=this.stack[this.stack.length-1];i.type,i.identifier=He(this.sliceSerialize(t)).toLowerCase(),i.label=l}function jv(t){this.exit(t)}function Hv(){return"["}function of(t,l,i,a){const s=i.createTracker(a);let c=s.move("[^");const u=i.enter("footnoteReference"),f=i.enter("reference");return c+=s.move(i.safe(i.associationId(t),{after:"]",before:c})),f(),u(),c+=s.move("]"),c}function Uv(){return{enter:{gfmFootnoteCallString:Ov,gfmFootnoteCall:bv,gfmFootnoteDefinitionLabelString:Fv,gfmFootnoteDefinition:Nv},exit:{gfmFootnoteCallString:zv,gfmFootnoteCall:Bv,gfmFootnoteDefinitionLabelString:Gv,gfmFootnoteDefinition:jv}}}function Wv(t){let l=!1;return t&&t.firstLineBlank&&(l=!0),{handlers:{footnoteDefinition:i,footnoteReference:of},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function i(a,s,c,u){const f=c.createTracker(u);let g=f.move("[^");const m=c.enter("footnoteDefinition"),y=c.enter("label");return g+=f.move(c.safe(c.associationId(a),{before:g,after:"]"})),y(),g+=f.move("]:"),a.children&&a.children.length>0&&(f.shift(4),g+=f.move((l?`
`:" ")+c.indentLines(c.containerFlow(a,f.current()),l?af:Vv))),m(),g}}function Vv(t,l,i){return l===0?t:af(t,l,i)}function af(t,l,i){return(i?"":"    ")+t}const qv=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];sf.peek=Yv;function Qv(){return{canContainEols:["delete"],enter:{strikethrough:$v},exit:{strikethrough:Kv}}}function Jv(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:qv}],handlers:{delete:sf}}}function $v(t){this.enter({type:"delete",children:[]},t)}function Kv(t){this.exit(t)}function sf(t,l,i,a){const s=i.createTracker(a),c=i.enter("strikethrough");let u=s.move("~~");return u+=i.containerPhrasing(t,{...s.current(),before:u,after:"~"}),u+=s.move("~~"),c(),u}function Yv(){return"~"}function Xv(t){return t.length}function Zv(t,l){const i=l||{},a=(i.align||[]).concat(),s=i.stringLength||Xv,c=[],u=[],f=[],g=[];let m=0,y=-1;for(;++y<t.length;){const _=[],b=[];let M=-1;for(t[y].length>m&&(m=t[y].length);++M<t[y].length;){const U=nS(t[y][M]);if(i.alignDelimiters!==!1){const B=s(U);b[M]=B,(g[M]===void 0||B>g[M])&&(g[M]=B)}_.push(U)}u[y]=_,f[y]=b}let h=-1;if(typeof a=="object"&&"length"in a)for(;++h<m;)c[h]=gp(a[h]);else{const _=gp(a);for(;++h<m;)c[h]=_}h=-1;const v=[],A=[];for(;++h<m;){const _=c[h];let b="",M="";_===99?(b=":",M=":"):_===108?b=":":_===114&&(M=":");let U=i.alignDelimiters===!1?1:Math.max(1,g[h]-b.length-M.length);const B=b+"-".repeat(U)+M;i.alignDelimiters!==!1&&(U=b.length+U+M.length,U>g[h]&&(g[h]=U),A[h]=U),v[h]=B}u.splice(1,0,v),f.splice(1,0,A),y=-1;const E=[];for(;++y<u.length;){const _=u[y],b=f[y];h=-1;const M=[];for(;++h<m;){const U=_[h]||"";let B="",rn="";if(i.alignDelimiters!==!1){const un=g[h]-(b[h]||0),O=c[h];O===114?B=" ".repeat(un):O===99?un%2?(B=" ".repeat(un/2+.5),rn=" ".repeat(un/2-.5)):(B=" ".repeat(un/2),rn=B):rn=" ".repeat(un)}i.delimiterStart!==!1&&!h&&M.push("|"),i.padding!==!1&&!(i.alignDelimiters===!1&&U==="")&&(i.delimiterStart!==!1||h)&&M.push(" "),i.alignDelimiters!==!1&&M.push(B),M.push(U),i.alignDelimiters!==!1&&M.push(rn),i.padding!==!1&&M.push(" "),(i.delimiterEnd!==!1||h!==m-1)&&M.push("|")}E.push(i.delimiterEnd===!1?M.join("").replace(/ +$/,""):M.join(""))}return E.join(`
`)}function nS(t){return t==null?"":String(t)}function gp(t){const l=typeof t=="string"?t.codePointAt(0):0;return l===67||l===99?99:l===76||l===108?108:l===82||l===114?114:0}function eS(t,l,i,a){const s=i.enter("blockquote"),c=i.createTracker(a);c.move("> "),c.shift(2);const u=i.indentLines(i.containerFlow(t,c.current()),tS);return s(),u}function tS(t,l,i){return">"+(i?"":" ")+t}function rS(t,l){return mp(t,l.inConstruct,!0)&&!mp(t,l.notInConstruct,!1)}function mp(t,l,i){if(typeof l=="string"&&(l=[l]),!l||l.length===0)return i;let a=-1;for(;++a<l.length;)if(t.includes(l[a]))return!0;return!1}function hp(t,l,i,a){let s=-1;for(;++s<i.unsafe.length;)if(i.unsafe[s].character===`
`&&rS(i.stack,i.unsafe[s]))return/[ \t]/.test(a.before)?"":" ";return`\\
`}function iS(t,l){const i=String(t);let a=i.indexOf(l),s=a,c=0,u=0;if(typeof l!="string")throw new TypeError("Expected substring");for(;a!==-1;)a===s?++c>u&&(u=c):c=1,s=a+l.length,a=i.indexOf(l,s);return u}function lS(t,l){return!!(l.options.fences===!1&&t.value&&!t.lang&&/[^ \r\n]/.test(t.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(t.value))}function oS(t){const l=t.options.fence||"`";if(l!=="`"&&l!=="~")throw new Error("Cannot serialize code with `"+l+"` for `options.fence`, expected `` ` `` or `~`");return l}function aS(t,l,i,a){const s=oS(i),c=t.value||"",u=s==="`"?"GraveAccent":"Tilde";if(lS(t,i)){const h=i.enter("codeIndented"),v=i.indentLines(c,sS);return h(),v}const f=i.createTracker(a),g=s.repeat(Math.max(iS(c,s)+1,3)),m=i.enter("codeFenced");let y=f.move(g);if(t.lang){const h=i.enter(`codeFencedLang${u}`);y+=f.move(i.safe(t.lang,{before:y,after:" ",encode:["`"],...f.current()})),h()}if(t.lang&&t.meta){const h=i.enter(`codeFencedMeta${u}`);y+=f.move(" "),y+=f.move(i.safe(t.meta,{before:y,after:`
`,encode:["`"],...f.current()})),h()}return y+=f.move(`
`),c&&(y+=f.move(c+`
`)),y+=f.move(g),m(),y}function sS(t,l,i){return(i?"":"    ")+t}function Fs(t){const l=t.options.quote||'"';if(l!=='"'&&l!=="'")throw new Error("Cannot serialize title with `"+l+"` for `options.quote`, expected `\"`, or `'`");return l}function uS(t,l,i,a){const s=Fs(i),c=s==='"'?"Quote":"Apostrophe",u=i.enter("definition");let f=i.enter("label");const g=i.createTracker(a);let m=g.move("[");return m+=g.move(i.safe(i.associationId(t),{before:m,after:"]",...g.current()})),m+=g.move("]: "),f(),!t.url||/[\0- \u007F]/.test(t.url)?(f=i.enter("destinationLiteral"),m+=g.move("<"),m+=g.move(i.safe(t.url,{before:m,after:">",...g.current()})),m+=g.move(">")):(f=i.enter("destinationRaw"),m+=g.move(i.safe(t.url,{before:m,after:t.title?" ":`
`,...g.current()}))),f(),t.title&&(f=i.enter(`title${c}`),m+=g.move(" "+s),m+=g.move(i.safe(t.title,{before:m,after:s,...g.current()})),m+=g.move(s),f()),u(),m}function cS(t){const l=t.options.emphasis||"*";if(l!=="*"&&l!=="_")throw new Error("Cannot serialize emphasis with `"+l+"` for `options.emphasis`, expected `*`, or `_`");return l}uf.peek=dS;function uf(t,l,i,a){const s=cS(i),c=i.enter("emphasis"),u=i.createTracker(a);let f=u.move(s);return f+=u.move(i.containerPhrasing(t,{before:f,after:s,...u.current()})),f+=u.move(s),c(),f}function dS(t,l,i){return i.options.emphasis||"*"}function pS(t,l){let i=!1;return Os(t,function(a){if("value"in a&&/\r?\n|\r/.test(a.value)||a.type==="break")return i=!0,gs}),!!((!t.depth||t.depth<3)&&Ls(t)&&(l.options.setext||i))}function fS(t,l,i,a){const s=Math.max(Math.min(6,t.depth||1),1),c=i.createTracker(a);if(pS(t,i)){const y=i.enter("headingSetext"),h=i.enter("phrasing"),v=i.containerPhrasing(t,{...c.current(),before:`
`,after:`
`});return h(),y(),v+`
`+(s===1?"=":"-").repeat(v.length-(Math.max(v.lastIndexOf("\r"),v.lastIndexOf(`
`))+1))}const u="#".repeat(s),f=i.enter("headingAtx"),g=i.enter("phrasing");c.move(u+" ");let m=i.containerPhrasing(t,{before:"# ",after:`
`,...c.current()});return/^[\t ]/.test(m)&&(m="&#x"+m.charCodeAt(0).toString(16).toUpperCase()+";"+m.slice(1)),m=m?u+" "+m:u,i.options.closeAtx&&(m+=" "+u),g(),f(),m}cf.peek=gS;function cf(t){return t.value||""}function gS(){return"<"}df.peek=mS;function df(t,l,i,a){const s=Fs(i),c=s==='"'?"Quote":"Apostrophe",u=i.enter("image");let f=i.enter("label");const g=i.createTracker(a);let m=g.move("![");return m+=g.move(i.safe(t.alt,{before:m,after:"]",...g.current()})),m+=g.move("]("),f(),!t.url&&t.title||/[\0- \u007F]/.test(t.url)?(f=i.enter("destinationLiteral"),m+=g.move("<"),m+=g.move(i.safe(t.url,{before:m,after:">",...g.current()})),m+=g.move(">")):(f=i.enter("destinationRaw"),m+=g.move(i.safe(t.url,{before:m,after:t.title?" ":")",...g.current()}))),f(),t.title&&(f=i.enter(`title${c}`),m+=g.move(" "+s),m+=g.move(i.safe(t.title,{before:m,after:s,...g.current()})),m+=g.move(s),f()),m+=g.move(")"),u(),m}function mS(){return"!"}pf.peek=hS;function pf(t,l,i,a){const s=t.referenceType,c=i.enter("imageReference");let u=i.enter("label");const f=i.createTracker(a);let g=f.move("![");const m=i.safe(t.alt,{before:g,after:"]",...f.current()});g+=f.move(m+"]["),u();const y=i.stack;i.stack=[],u=i.enter("reference");const h=i.safe(i.associationId(t),{before:g,after:"]",...f.current()});return u(),i.stack=y,c(),s==="full"||!m||m!==h?g+=f.move(h+"]"):s==="shortcut"?g=g.slice(0,-1):g+=f.move("]"),g}function hS(){return"!"}function yS(t){if(!t._compiled){const l=(t.atBreak?"[\\r\\n][\\t ]*":"")+(t.before?"(?:"+t.before+")":"");t._compiled=new RegExp((l?"("+l+")":"")+(/[|\\{}()[\]^$+*?.-]/.test(t.character)?"\\":"")+t.character+(t.after?"(?:"+t.after+")":""),"g")}return t._compiled}ff.peek=kS;function ff(t,l,i){let a=t.value||"",s="`",c=-1;for(;new RegExp("(^|[^`])"+s+"([^`]|$)").test(a);)s+="`";for(/[^ \r\n]/.test(a)&&(/^[ \r\n]/.test(a)&&/[ \r\n]$/.test(a)||/^`|`$/.test(a))&&(a=" "+a+" ");++c<i.unsafe.length;){const u=i.unsafe[c],f=yS(u);let g;if(u.atBreak)for(;g=f.exec(a);){let m=g.index;a.charCodeAt(m)===10&&a.charCodeAt(m-1)===13&&m--,a=a.slice(0,m)+" "+a.slice(g.index+1)}}return s+a+s}function kS(){return"`"}function gf(t,l){const i=Ls(t);return!!(!l.options.resourceLink&&t.url&&!t.title&&t.children&&t.children.length===1&&t.children[0].type==="text"&&(i===t.url||"mailto:"+i===t.url)&&/^[a-z][a-z+.-]+:/i.test(t.url)&&!/[\0- <>\u007F]/.test(t.url))}mf.peek=AS;function mf(t,l,i,a){const s=Fs(i),c=s==='"'?"Quote":"Apostrophe",u=i.createTracker(a);let f,g;if(gf(t,i)){const y=i.stack;i.stack=[],f=i.enter("autolink");let h=u.move("<");return h+=u.move(i.containerPhrasing(t,{before:h,after:">",...u.current()})),h+=u.move(">"),f(),i.stack=y,h}f=i.enter("link"),g=i.enter("label");let m=u.move("[");return m+=u.move(i.containerPhrasing(t,{before:m,after:"](",...u.current()})),m+=u.move("]("),g(),!t.url&&t.title||/[\0- \u007F]/.test(t.url)?(g=i.enter("destinationLiteral"),m+=u.move("<"),m+=u.move(i.safe(t.url,{before:m,after:">",...u.current()})),m+=u.move(">")):(g=i.enter("destinationRaw"),m+=u.move(i.safe(t.url,{before:m,after:t.title?" ":")",...u.current()}))),g(),t.title&&(g=i.enter(`title${c}`),m+=u.move(" "+s),m+=u.move(i.safe(t.title,{before:m,after:s,...u.current()})),m+=u.move(s),g()),m+=u.move(")"),f(),m}function AS(t,l,i){return gf(t,i)?"<":"["}hf.peek=vS;function hf(t,l,i,a){const s=t.referenceType,c=i.enter("linkReference");let u=i.enter("label");const f=i.createTracker(a);let g=f.move("[");const m=i.containerPhrasing(t,{before:g,after:"]",...f.current()});g+=f.move(m+"]["),u();const y=i.stack;i.stack=[],u=i.enter("reference");const h=i.safe(i.associationId(t),{before:g,after:"]",...f.current()});return u(),i.stack=y,c(),s==="full"||!m||m!==h?g+=f.move(h+"]"):s==="shortcut"?g=g.slice(0,-1):g+=f.move("]"),g}function vS(){return"["}function Ns(t){const l=t.options.bullet||"*";if(l!=="*"&&l!=="+"&&l!=="-")throw new Error("Cannot serialize items with `"+l+"` for `options.bullet`, expected `*`, `+`, or `-`");return l}function SS(t){const l=Ns(t),i=t.options.bulletOther;if(!i)return l==="*"?"-":"*";if(i!=="*"&&i!=="+"&&i!=="-")throw new Error("Cannot serialize items with `"+i+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(i===l)throw new Error("Expected `bullet` (`"+l+"`) and `bulletOther` (`"+i+"`) to be different");return i}function wS(t){const l=t.options.bulletOrdered||".";if(l!=="."&&l!==")")throw new Error("Cannot serialize items with `"+l+"` for `options.bulletOrdered`, expected `.` or `)`");return l}function yf(t){const l=t.options.rule||"*";if(l!=="*"&&l!=="-"&&l!=="_")throw new Error("Cannot serialize rules with `"+l+"` for `options.rule`, expected `*`, `-`, or `_`");return l}function CS(t,l,i,a){const s=i.enter("list"),c=i.bulletCurrent;let u=t.ordered?wS(i):Ns(i);const f=t.ordered?u==="."?")":".":SS(i);let g=l&&i.bulletLastUsed?u===i.bulletLastUsed:!1;if(!t.ordered){const y=t.children?t.children[0]:void 0;if((u==="*"||u==="-")&&y&&(!y.children||!y.children[0])&&i.stack[i.stack.length-1]==="list"&&i.stack[i.stack.length-2]==="listItem"&&i.stack[i.stack.length-3]==="list"&&i.stack[i.stack.length-4]==="listItem"&&i.indexStack[i.indexStack.length-1]===0&&i.indexStack[i.indexStack.length-2]===0&&i.indexStack[i.indexStack.length-3]===0&&(g=!0),yf(i)===u&&y){let h=-1;for(;++h<t.children.length;){const v=t.children[h];if(v&&v.type==="listItem"&&v.children&&v.children[0]&&v.children[0].type==="thematicBreak"){g=!0;break}}}}g&&(u=f),i.bulletCurrent=u;const m=i.containerFlow(t,a);return i.bulletLastUsed=u,i.bulletCurrent=c,s(),m}function xS(t){const l=t.options.listItemIndent||"one";if(l!=="tab"&&l!=="one"&&l!=="mixed")throw new Error("Cannot serialize items with `"+l+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return l}function IS(t,l,i,a){const s=xS(i);let c=i.bulletCurrent||Ns(i);l&&l.type==="list"&&l.ordered&&(c=(typeof l.start=="number"&&l.start>-1?l.start:1)+(i.options.incrementListMarker===!1?0:l.children.indexOf(t))+c);let u=c.length+1;(s==="tab"||s==="mixed"&&(l&&l.type==="list"&&l.spread||t.spread))&&(u=Math.ceil(u/4)*4);const f=i.createTracker(a);f.move(c+" ".repeat(u-c.length)),f.shift(u);const g=i.enter("listItem"),m=i.indentLines(i.containerFlow(t,f.current()),y);return g(),m;function y(h,v,A){return v?(A?"":" ".repeat(u))+h:(A?c:c+" ".repeat(u-c.length))+h}}function ES(t,l,i,a){const s=i.enter("paragraph"),c=i.enter("phrasing"),u=i.containerPhrasing(t,a);return c(),s(),u}const LS=Xl(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function _S(t,l,i,a){return(t.children.some(function(u){return LS(u)})?i.containerPhrasing:i.containerFlow).call(i,t,a)}function RS(t){const l=t.options.strong||"*";if(l!=="*"&&l!=="_")throw new Error("Cannot serialize strong with `"+l+"` for `options.strong`, expected `*`, or `_`");return l}kf.peek=PS;function kf(t,l,i,a){const s=RS(i),c=i.enter("strong"),u=i.createTracker(a);let f=u.move(s+s);return f+=u.move(i.containerPhrasing(t,{before:f,after:s,...u.current()})),f+=u.move(s+s),c(),f}function PS(t,l,i){return i.options.strong||"*"}function DS(t,l,i,a){return i.safe(t.value,a)}function TS(t){const l=t.options.ruleRepetition||3;if(l<3)throw new Error("Cannot serialize rules with repetition `"+l+"` for `options.ruleRepetition`, expected `3` or more");return l}function MS(t,l,i){const a=(yf(i)+(i.options.ruleSpaces?" ":"")).repeat(TS(i));return i.options.ruleSpaces?a.slice(0,-1):a}const Af={blockquote:eS,break:hp,code:aS,definition:uS,emphasis:uf,hardBreak:hp,heading:fS,html:cf,image:df,imageReference:pf,inlineCode:ff,link:mf,linkReference:hf,list:CS,listItem:IS,paragraph:ES,root:_S,strong:kf,text:DS,thematicBreak:MS};function OS(){return{enter:{table:bS,tableData:yp,tableHeader:yp,tableRow:NS},exit:{codeText:zS,table:FS,tableData:os,tableHeader:os,tableRow:os}}}function bS(t){const l=t._align;this.enter({type:"table",align:l.map(function(i){return i==="none"?null:i}),children:[]},t),this.data.inTable=!0}function FS(t){this.exit(t),this.data.inTable=void 0}function NS(t){this.enter({type:"tableRow",children:[]},t)}function os(t){this.exit(t)}function yp(t){this.enter({type:"tableCell",children:[]},t)}function zS(t){let l=this.resume();this.data.inTable&&(l=l.replace(/\\([\\|])/g,BS));const i=this.stack[this.stack.length-1];i.type,i.value=l,this.exit(t)}function BS(t,l){return l==="|"?l:t}function GS(t){const l=t||{},i=l.tableCellPadding,a=l.tablePipeAlign,s=l.stringLength,c=i?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:v,table:u,tableCell:g,tableRow:f}};function u(A,E,_,b){return m(y(A,_,b),A.align)}function f(A,E,_,b){const M=h(A,_,b),U=m([M]);return U.slice(0,U.indexOf(`
`))}function g(A,E,_,b){const M=_.enter("tableCell"),U=_.enter("phrasing"),B=_.containerPhrasing(A,{...b,before:c,after:c});return U(),M(),B}function m(A,E){return Zv(A,{align:E,alignDelimiters:a,padding:i,stringLength:s})}function y(A,E,_){const b=A.children;let M=-1;const U=[],B=E.enter("table");for(;++M<b.length;)U[M]=h(b[M],E,_);return B(),U}function h(A,E,_){const b=A.children;let M=-1;const U=[],B=E.enter("tableRow");for(;++M<b.length;)U[M]=g(b[M],A,E,_);return B(),U}function v(A,E,_){let b=Af.inlineCode(A,E,_);return _.stack.includes("tableCell")&&(b=b.replace(/\|/g,"\\$&")),b}}function jS(){return{exit:{taskListCheckValueChecked:kp,taskListCheckValueUnchecked:kp,paragraph:US}}}function HS(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:WS}}}function kp(t){const l=this.stack[this.stack.length-2];l.type,l.checked=t.type==="taskListCheckValueChecked"}function US(t){const l=this.stack[this.stack.length-2];if(l&&l.type==="listItem"&&typeof l.checked=="boolean"){const i=this.stack[this.stack.length-1];i.type;const a=i.children[0];if(a&&a.type==="text"){const s=l.children;let c=-1,u;for(;++c<s.length;){const f=s[c];if(f.type==="paragraph"){u=f;break}}u===i&&(a.value=a.value.slice(1),a.value.length===0?i.children.shift():i.position&&a.position&&typeof a.position.start.offset=="number"&&(a.position.start.column++,a.position.start.offset++,i.position.start=Object.assign({},a.position.start)))}}this.exit(t)}function WS(t,l,i,a){const s=t.children[0],c=typeof t.checked=="boolean"&&s&&s.type==="paragraph",u="["+(t.checked?"x":" ")+"] ",f=i.createTracker(a);c&&f.move(u);let g=Af.listItem(t,l,i,{...a,...f.current()});return c&&(g=g.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,m)),g;function m(y){return y+u}}function VS(){return[wv(),Uv(),Qv(),OS(),jS()]}function qS(t){return{extensions:[Cv(),Wv(t),Jv(),GS(t),HS()]}}const QS={tokenize:ZS,partial:!0},vf={tokenize:n1,partial:!0},Sf={tokenize:e1,partial:!0},wf={tokenize:t1,partial:!0},JS={tokenize:r1,partial:!0},Cf={name:"wwwAutolink",tokenize:YS,previous:If},xf={name:"protocolAutolink",tokenize:XS,previous:Ef},at={name:"emailAutolink",tokenize:KS,previous:Lf},Ke={};function $S(){return{text:Ke}}let qt=48;for(;qt<123;)Ke[qt]=at,qt++,qt===58?qt=65:qt===91&&(qt=97);Ke[43]=at;Ke[45]=at;Ke[46]=at;Ke[95]=at;Ke[72]=[at,xf];Ke[104]=[at,xf];Ke[87]=[at,Cf];Ke[119]=[at,Cf];function KS(t,l,i){const a=this;let s,c;return u;function u(h){return!ks(h)||!Lf.call(a,a.previous)||zs(a.events)?i(h):(t.enter("literalAutolink"),t.enter("literalAutolinkEmail"),f(h))}function f(h){return ks(h)?(t.consume(h),f):h===64?(t.consume(h),g):i(h)}function g(h){return h===46?t.check(JS,y,m)(h):h===45||h===95||ae(h)?(c=!0,t.consume(h),g):y(h)}function m(h){return t.consume(h),s=!0,g}function y(h){return c&&s&&de(a.previous)?(t.exit("literalAutolinkEmail"),t.exit("literalAutolink"),l(h)):i(h)}}function YS(t,l,i){const a=this;return s;function s(u){return u!==87&&u!==119||!If.call(a,a.previous)||zs(a.events)?i(u):(t.enter("literalAutolink"),t.enter("literalAutolinkWww"),t.check(QS,t.attempt(vf,t.attempt(Sf,c),i),i)(u))}function c(u){return t.exit("literalAutolinkWww"),t.exit("literalAutolink"),l(u)}}function XS(t,l,i){const a=this;let s="",c=!1;return u;function u(h){return(h===72||h===104)&&Ef.call(a,a.previous)&&!zs(a.events)?(t.enter("literalAutolink"),t.enter("literalAutolinkHttp"),s+=String.fromCodePoint(h),t.consume(h),f):i(h)}function f(h){if(de(h)&&s.length<5)return s+=String.fromCodePoint(h),t.consume(h),f;if(h===58){const v=s.toLowerCase();if(v==="http"||v==="https")return t.consume(h),g}return i(h)}function g(h){return h===47?(t.consume(h),c?m:(c=!0,g)):i(h)}function m(h){return h===null||ql(h)||bn(h)||Kt(h)||$l(h)?i(h):t.attempt(vf,t.attempt(Sf,y),i)(h)}function y(h){return t.exit("literalAutolinkHttp"),t.exit("literalAutolink"),l(h)}}function ZS(t,l,i){let a=0;return s;function s(u){return(u===87||u===119)&&a<3?(a++,t.consume(u),s):u===46&&a===3?(t.consume(u),c):i(u)}function c(u){return u===null?i(u):l(u)}}function n1(t,l,i){let a,s,c;return u;function u(m){return m===46||m===95?t.check(wf,g,f)(m):m===null||bn(m)||Kt(m)||m!==45&&$l(m)?g(m):(c=!0,t.consume(m),u)}function f(m){return m===95?a=!0:(s=a,a=void 0),t.consume(m),u}function g(m){return s||a||!c?i(m):l(m)}}function e1(t,l){let i=0,a=0;return s;function s(u){return u===40?(i++,t.consume(u),s):u===41&&a<i?c(u):u===33||u===34||u===38||u===39||u===41||u===42||u===44||u===46||u===58||u===59||u===60||u===63||u===93||u===95||u===126?t.check(wf,l,c)(u):u===null||bn(u)||Kt(u)?l(u):(t.consume(u),s)}function c(u){return u===41&&a++,t.consume(u),s}}function t1(t,l,i){return a;function a(f){return f===33||f===34||f===39||f===41||f===42||f===44||f===46||f===58||f===59||f===63||f===95||f===126?(t.consume(f),a):f===38?(t.consume(f),c):f===93?(t.consume(f),s):f===60||f===null||bn(f)||Kt(f)?l(f):i(f)}function s(f){return f===null||f===40||f===91||bn(f)||Kt(f)?l(f):a(f)}function c(f){return de(f)?u(f):i(f)}function u(f){return f===59?(t.consume(f),a):de(f)?(t.consume(f),u):i(f)}}function r1(t,l,i){return a;function a(c){return t.consume(c),s}function s(c){return ae(c)?i(c):l(c)}}function If(t){return t===null||t===40||t===42||t===95||t===91||t===93||t===126||bn(t)}function Ef(t){return!de(t)}function Lf(t){return!(t===47||ks(t))}function ks(t){return t===43||t===45||t===46||t===95||ae(t)}function zs(t){let l=t.length,i=!1;for(;l--;){const a=t[l][1];if((a.type==="labelLink"||a.type==="labelImage")&&!a._balanced){i=!0;break}if(a._gfmAutolinkLiteralWalkedInto){i=!1;break}}return t.length>0&&!i&&(t[t.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),i}const i1={tokenize:p1,partial:!0};function l1(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:u1,continuation:{tokenize:c1},exit:d1}},text:{91:{name:"gfmFootnoteCall",tokenize:s1},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:o1,resolveTo:a1}}}}function o1(t,l,i){const a=this;let s=a.events.length;const c=a.parser.gfmFootnotes||(a.parser.gfmFootnotes=[]);let u;for(;s--;){const g=a.events[s][1];if(g.type==="labelImage"){u=g;break}if(g.type==="gfmFootnoteCall"||g.type==="labelLink"||g.type==="label"||g.type==="image"||g.type==="link")break}return f;function f(g){if(!u||!u._balanced)return i(g);const m=He(a.sliceSerialize({start:u.end,end:a.now()}));return m.codePointAt(0)!==94||!c.includes(m.slice(1))?i(g):(t.enter("gfmFootnoteCallLabelMarker"),t.consume(g),t.exit("gfmFootnoteCallLabelMarker"),l(g))}}function a1(t,l){let i=t.length;for(;i--;)if(t[i][1].type==="labelImage"&&t[i][0]==="enter"){t[i][1];break}t[i+1][1].type="data",t[i+3][1].type="gfmFootnoteCallLabelMarker";const a={type:"gfmFootnoteCall",start:Object.assign({},t[i+3][1].start),end:Object.assign({},t[t.length-1][1].end)},s={type:"gfmFootnoteCallMarker",start:Object.assign({},t[i+3][1].end),end:Object.assign({},t[i+3][1].end)};s.end.column++,s.end.offset++,s.end._bufferIndex++;const c={type:"gfmFootnoteCallString",start:Object.assign({},s.end),end:Object.assign({},t[t.length-1][1].start)},u={type:"chunkString",contentType:"string",start:Object.assign({},c.start),end:Object.assign({},c.end)},f=[t[i+1],t[i+2],["enter",a,l],t[i+3],t[i+4],["enter",s,l],["exit",s,l],["enter",c,l],["enter",u,l],["exit",u,l],["exit",c,l],t[t.length-2],t[t.length-1],["exit",a,l]];return t.splice(i,t.length-i+1,...f),t}function s1(t,l,i){const a=this,s=a.parser.gfmFootnotes||(a.parser.gfmFootnotes=[]);let c=0,u;return f;function f(h){return t.enter("gfmFootnoteCall"),t.enter("gfmFootnoteCallLabelMarker"),t.consume(h),t.exit("gfmFootnoteCallLabelMarker"),g}function g(h){return h!==94?i(h):(t.enter("gfmFootnoteCallMarker"),t.consume(h),t.exit("gfmFootnoteCallMarker"),t.enter("gfmFootnoteCallString"),t.enter("chunkString").contentType="string",m)}function m(h){if(c>999||h===93&&!u||h===null||h===91||bn(h))return i(h);if(h===93){t.exit("chunkString");const v=t.exit("gfmFootnoteCallString");return s.includes(He(a.sliceSerialize(v)))?(t.enter("gfmFootnoteCallLabelMarker"),t.consume(h),t.exit("gfmFootnoteCallLabelMarker"),t.exit("gfmFootnoteCall"),l):i(h)}return bn(h)||(u=!0),c++,t.consume(h),h===92?y:m}function y(h){return h===91||h===92||h===93?(t.consume(h),c++,m):m(h)}}function u1(t,l,i){const a=this,s=a.parser.gfmFootnotes||(a.parser.gfmFootnotes=[]);let c,u=0,f;return g;function g(E){return t.enter("gfmFootnoteDefinition")._container=!0,t.enter("gfmFootnoteDefinitionLabel"),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(E),t.exit("gfmFootnoteDefinitionLabelMarker"),m}function m(E){return E===94?(t.enter("gfmFootnoteDefinitionMarker"),t.consume(E),t.exit("gfmFootnoteDefinitionMarker"),t.enter("gfmFootnoteDefinitionLabelString"),t.enter("chunkString").contentType="string",y):i(E)}function y(E){if(u>999||E===93&&!f||E===null||E===91||bn(E))return i(E);if(E===93){t.exit("chunkString");const _=t.exit("gfmFootnoteDefinitionLabelString");return c=He(a.sliceSerialize(_)),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(E),t.exit("gfmFootnoteDefinitionLabelMarker"),t.exit("gfmFootnoteDefinitionLabel"),v}return bn(E)||(f=!0),u++,t.consume(E),E===92?h:y}function h(E){return E===91||E===92||E===93?(t.consume(E),u++,y):y(E)}function v(E){return E===58?(t.enter("definitionMarker"),t.consume(E),t.exit("definitionMarker"),s.includes(c)||s.push(c),Ln(t,A,"gfmFootnoteDefinitionWhitespace")):i(E)}function A(E){return l(E)}}function c1(t,l,i){return t.check(Ii,l,t.attempt(i1,l,i))}function d1(t){t.exit("gfmFootnoteDefinition")}function p1(t,l,i){const a=this;return Ln(t,s,"gfmFootnoteDefinitionIndent",5);function s(c){const u=a.events[a.events.length-1];return u&&u[1].type==="gfmFootnoteDefinitionIndent"&&u[2].sliceSerialize(u[1],!0).length===4?l(c):i(c)}}function f1(t){let i=(t||{}).singleTilde;const a={name:"strikethrough",tokenize:c,resolveAll:s};return i==null&&(i=!0),{text:{126:a},insideSpan:{null:[a]},attentionMarkers:{null:[126]}};function s(u,f){let g=-1;for(;++g<u.length;)if(u[g][0]==="enter"&&u[g][1].type==="strikethroughSequenceTemporary"&&u[g][1]._close){let m=g;for(;m--;)if(u[m][0]==="exit"&&u[m][1].type==="strikethroughSequenceTemporary"&&u[m][1]._open&&u[g][1].end.offset-u[g][1].start.offset===u[m][1].end.offset-u[m][1].start.offset){u[g][1].type="strikethroughSequence",u[m][1].type="strikethroughSequence";const y={type:"strikethrough",start:Object.assign({},u[m][1].start),end:Object.assign({},u[g][1].end)},h={type:"strikethroughText",start:Object.assign({},u[m][1].end),end:Object.assign({},u[g][1].start)},v=[["enter",y,f],["enter",u[m][1],f],["exit",u[m][1],f],["enter",h,f]],A=f.parser.constructs.insideSpan.null;A&&Ee(v,v.length,0,Kl(A,u.slice(m+1,g),f)),Ee(v,v.length,0,[["exit",h,f],["enter",u[g][1],f],["exit",u[g][1],f],["exit",y,f]]),Ee(u,m-1,g-m+3,v),g=m+v.length-2;break}}for(g=-1;++g<u.length;)u[g][1].type==="strikethroughSequenceTemporary"&&(u[g][1].type="data");return u}function c(u,f,g){const m=this.previous,y=this.events;let h=0;return v;function v(E){return m===126&&y[y.length-1][1].type!=="characterEscape"?g(E):(u.enter("strikethroughSequenceTemporary"),A(E))}function A(E){const _=Ql(m);if(E===126)return h>1?g(E):(u.consume(E),h++,A);if(h<2&&!i)return g(E);const b=u.exit("strikethroughSequenceTemporary"),M=Ql(E);return b._open=!M||M===2&&!!_,b._close=!_||_===2&&!!M,f(E)}}}class g1{constructor(){this.map=[]}add(l,i,a){m1(this,l,i,a)}consume(l){if(this.map.sort(function(c,u){return c[0]-u[0]}),this.map.length===0)return;let i=this.map.length;const a=[];for(;i>0;)i-=1,a.push(l.slice(this.map[i][0]+this.map[i][1]),this.map[i][2]),l.length=this.map[i][0];a.push(l.slice()),l.length=0;let s=a.pop();for(;s;){for(const c of s)l.push(c);s=a.pop()}this.map.length=0}}function m1(t,l,i,a){let s=0;if(!(i===0&&a.length===0)){for(;s<t.map.length;){if(t.map[s][0]===l){t.map[s][1]+=i,t.map[s][2].push(...a);return}s+=1}t.map.push([l,i,a])}}function h1(t,l){let i=!1;const a=[];for(;l<t.length;){const s=t[l];if(i){if(s[0]==="enter")s[1].type==="tableContent"&&a.push(t[l+1][1].type==="tableDelimiterMarker"?"left":"none");else if(s[1].type==="tableContent"){if(t[l-1][1].type==="tableDelimiterMarker"){const c=a.length-1;a[c]=a[c]==="left"?"center":"right"}}else if(s[1].type==="tableDelimiterRow")break}else s[0]==="enter"&&s[1].type==="tableDelimiterRow"&&(i=!0);l+=1}return a}function y1(){return{flow:{null:{name:"table",tokenize:k1,resolveAll:A1}}}}function k1(t,l,i){const a=this;let s=0,c=0,u;return f;function f(D){let Z=a.events.length-1;for(;Z>-1;){const Y=a.events[Z][1].type;if(Y==="lineEnding"||Y==="linePrefix")Z--;else break}const Q=Z>-1?a.events[Z][1].type:null,$=Q==="tableHead"||Q==="tableRow"?O:g;return $===O&&a.parser.lazy[a.now().line]?i(D):$(D)}function g(D){return t.enter("tableHead"),t.enter("tableRow"),m(D)}function m(D){return D===124||(u=!0,c+=1),y(D)}function y(D){return D===null?i(D):fn(D)?c>1?(c=0,a.interrupt=!0,t.exit("tableRow"),t.enter("lineEnding"),t.consume(D),t.exit("lineEnding"),A):i(D):In(D)?Ln(t,y,"whitespace")(D):(c+=1,u&&(u=!1,s+=1),D===124?(t.enter("tableCellDivider"),t.consume(D),t.exit("tableCellDivider"),u=!0,y):(t.enter("data"),h(D)))}function h(D){return D===null||D===124||bn(D)?(t.exit("data"),y(D)):(t.consume(D),D===92?v:h)}function v(D){return D===92||D===124?(t.consume(D),h):h(D)}function A(D){return a.interrupt=!1,a.parser.lazy[a.now().line]?i(D):(t.enter("tableDelimiterRow"),u=!1,In(D)?Ln(t,E,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(D):E(D))}function E(D){return D===45||D===58?b(D):D===124?(u=!0,t.enter("tableCellDivider"),t.consume(D),t.exit("tableCellDivider"),_):un(D)}function _(D){return In(D)?Ln(t,b,"whitespace")(D):b(D)}function b(D){return D===58?(c+=1,u=!0,t.enter("tableDelimiterMarker"),t.consume(D),t.exit("tableDelimiterMarker"),M):D===45?(c+=1,M(D)):D===null||fn(D)?rn(D):un(D)}function M(D){return D===45?(t.enter("tableDelimiterFiller"),U(D)):un(D)}function U(D){return D===45?(t.consume(D),U):D===58?(u=!0,t.exit("tableDelimiterFiller"),t.enter("tableDelimiterMarker"),t.consume(D),t.exit("tableDelimiterMarker"),B):(t.exit("tableDelimiterFiller"),B(D))}function B(D){return In(D)?Ln(t,rn,"whitespace")(D):rn(D)}function rn(D){return D===124?E(D):D===null||fn(D)?!u||s!==c?un(D):(t.exit("tableDelimiterRow"),t.exit("tableHead"),l(D)):un(D)}function un(D){return i(D)}function O(D){return t.enter("tableRow"),V(D)}function V(D){return D===124?(t.enter("tableCellDivider"),t.consume(D),t.exit("tableCellDivider"),V):D===null||fn(D)?(t.exit("tableRow"),l(D)):In(D)?Ln(t,V,"whitespace")(D):(t.enter("data"),en(D))}function en(D){return D===null||D===124||bn(D)?(t.exit("data"),V(D)):(t.consume(D),D===92?cn:en)}function cn(D){return D===92||D===124?(t.consume(D),en):en(D)}}function A1(t,l){let i=-1,a=!0,s=0,c=[0,0,0,0],u=[0,0,0,0],f=!1,g=0,m,y,h;const v=new g1;for(;++i<t.length;){const A=t[i],E=A[1];A[0]==="enter"?E.type==="tableHead"?(f=!1,g!==0&&(Ap(v,l,g,m,y),y=void 0,g=0),m={type:"table",start:Object.assign({},E.start),end:Object.assign({},E.end)},v.add(i,0,[["enter",m,l]])):E.type==="tableRow"||E.type==="tableDelimiterRow"?(a=!0,h=void 0,c=[0,0,0,0],u=[0,i+1,0,0],f&&(f=!1,y={type:"tableBody",start:Object.assign({},E.start),end:Object.assign({},E.end)},v.add(i,0,[["enter",y,l]])),s=E.type==="tableDelimiterRow"?2:y?3:1):s&&(E.type==="data"||E.type==="tableDelimiterMarker"||E.type==="tableDelimiterFiller")?(a=!1,u[2]===0&&(c[1]!==0&&(u[0]=u[1],h=Ul(v,l,c,s,void 0,h),c=[0,0,0,0]),u[2]=i)):E.type==="tableCellDivider"&&(a?a=!1:(c[1]!==0&&(u[0]=u[1],h=Ul(v,l,c,s,void 0,h)),c=u,u=[c[1],i,0,0])):E.type==="tableHead"?(f=!0,g=i):E.type==="tableRow"||E.type==="tableDelimiterRow"?(g=i,c[1]!==0?(u[0]=u[1],h=Ul(v,l,c,s,i,h)):u[1]!==0&&(h=Ul(v,l,u,s,i,h)),s=0):s&&(E.type==="data"||E.type==="tableDelimiterMarker"||E.type==="tableDelimiterFiller")&&(u[3]=i)}for(g!==0&&Ap(v,l,g,m,y),v.consume(l.events),i=-1;++i<l.events.length;){const A=l.events[i];A[0]==="enter"&&A[1].type==="table"&&(A[1]._align=h1(l.events,i))}return t}function Ul(t,l,i,a,s,c){const u=a===1?"tableHeader":a===2?"tableDelimiter":"tableData",f="tableContent";i[0]!==0&&(c.end=Object.assign({},Ir(l.events,i[0])),t.add(i[0],0,[["exit",c,l]]));const g=Ir(l.events,i[1]);if(c={type:u,start:Object.assign({},g),end:Object.assign({},g)},t.add(i[1],0,[["enter",c,l]]),i[2]!==0){const m=Ir(l.events,i[2]),y=Ir(l.events,i[3]),h={type:f,start:Object.assign({},m),end:Object.assign({},y)};if(t.add(i[2],0,[["enter",h,l]]),a!==2){const v=l.events[i[2]],A=l.events[i[3]];if(v[1].end=Object.assign({},A[1].end),v[1].type="chunkText",v[1].contentType="text",i[3]>i[2]+1){const E=i[2]+1,_=i[3]-i[2]-1;t.add(E,_,[])}}t.add(i[3]+1,0,[["exit",h,l]])}return s!==void 0&&(c.end=Object.assign({},Ir(l.events,s)),t.add(s,0,[["exit",c,l]]),c=void 0),c}function Ap(t,l,i,a,s){const c=[],u=Ir(l.events,i);s&&(s.end=Object.assign({},u),c.push(["exit",s,l])),a.end=Object.assign({},u),c.push(["exit",a,l]),t.add(i+1,0,c)}function Ir(t,l){const i=t[l],a=i[0]==="enter"?"start":"end";return i[1][a]}const v1={name:"tasklistCheck",tokenize:w1};function S1(){return{text:{91:v1}}}function w1(t,l,i){const a=this;return s;function s(g){return a.previous!==null||!a._gfmTasklistFirstContentOfListItem?i(g):(t.enter("taskListCheck"),t.enter("taskListCheckMarker"),t.consume(g),t.exit("taskListCheckMarker"),c)}function c(g){return bn(g)?(t.enter("taskListCheckValueUnchecked"),t.consume(g),t.exit("taskListCheckValueUnchecked"),u):g===88||g===120?(t.enter("taskListCheckValueChecked"),t.consume(g),t.exit("taskListCheckValueChecked"),u):i(g)}function u(g){return g===93?(t.enter("taskListCheckMarker"),t.consume(g),t.exit("taskListCheckMarker"),t.exit("taskListCheck"),f):i(g)}function f(g){return fn(g)?l(g):In(g)?t.check({tokenize:C1},l,i)(g):i(g)}}function C1(t,l,i){return Ln(t,a,"whitespace");function a(s){return s===null?i(s):l(s)}}function x1(t){return Np([$S(),l1(),f1(t),y1(),S1()])}const I1={};function E1(t){const l=this,i=t||I1,a=l.data(),s=a.micromarkExtensions||(a.micromarkExtensions=[]),c=a.fromMarkdownExtensions||(a.fromMarkdownExtensions=[]),u=a.toMarkdownExtensions||(a.toMarkdownExtensions=[]);s.push(x1(i)),c.push(VS()),u.push(qS(i))}let Vl=new Map;function L1(t){var c;const l=t.split(`
`),i={};let a=0;if(((c=l[0])==null?void 0:c.trim())==="---"){const u=l.indexOf("---",1);if(u>0){a=u+1;const f=l.slice(1,u);for(const g of f){const m=g.trim();if(!m)continue;const y=m.match(/^([\w_-]+):\s*(.+)$/);if(!y)continue;const h=y[1];let v=y[2].trim();v.startsWith("[")&&v.endsWith("]")&&(v=v.slice(1,-1).split(",").map(A=>A.trim().replace(/^['"]|['"]$/g,""))),i[h]=v}}}const s=l.slice(a).join(`
`);return{data:i,content:s}}function _1(t){Vl=t}function _f(t){if(Vl.has(t))return Vl.get(t);for(const[l,i]of Vl)if(l.toLowerCase()===t.toLowerCase())return i;return null}function vp(t,l){const{data:i,content:a}=L1(t),s={type:i.type||"",tags:i.tags||[],created:i.created||"",updated:i.updated||"",title:i.title||Rf(a)};return{path:l,meta:s,content:a.trim(),raw:t}}function Rf(t){const l=t.match(/^#\s+(.+)$/m);return l?l[1].trim():""}function R1(t){var i;const l=new Map;for(const a of t){const s=a.content.match(/^#\s+(.+)$/m),c=s?s[1].trim():"";c&&l.set(c,a.path);const u=((i=a.path.split("/").pop())==null?void 0:i.replace(".md",""))||"";u&&!l.has(u)&&l.set(u,a.path),a.meta.title&&a.meta.title!==c&&l.set(a.meta.title,a.path)}return l}function P1(t){return t.replace(/\[\[([^\]|]+?)(?:\|(.+?))?\]\]/g,(l,i,a)=>{const s=i.trim(),c=_f(s),u=(a==null?void 0:a.trim())||s;if(c){const f=c.replace(/.*\/wiki\//,"wiki/");return`[${u}](#wiki:${f})`}return`[${u} (待创建)](#wiki:${s})`})}function D1(t,l){if(!t||t.length<2)return[];const i=t.toLowerCase(),a=[];for(const s of l){if(s.path.includes("index.md")||s.path.includes("log.md"))continue;const c=s.meta.title||Rf(s.content),u=s.content.toLowerCase();let f=0;c.toLowerCase().includes(i)&&(f+=100),s.meta.tags.some(m=>m.toLowerCase().includes(i))&&(f+=50);const g=u.indexOf(i);if(g>=0&&(f+=10),f>0){let m="";if(g>=0){const y=Math.max(0,g-40),h=Math.min(s.content.length,g+i.length+60);m=(y>0?"...":"")+s.content.slice(y,h)+(h<s.content.length?"...":"")}else m=c;a.push({title:c,path:s.path,snippet:m,score:f})}}return a.sort((s,c)=>c.score-s.score).slice(0,10)}function T1({page:t,onNavigate:l,onTagSelect:i}){const a=En.useRef(null);En.useEffect(()=>{const y=a.current;if(!y)return;const h=v=>{const A=v.target.closest('a[href^="#wiki:"]');if(A){v.preventDefault();const _=A.getAttribute("href").replace("#wiki:","");console.log("[ContentViewer] wikilink clicked, target:",_),l(_)}};return y.addEventListener("click",h),()=>y.removeEventListener("click",h)},[l]);const[s,c]=En.useState(!1),u=En.useMemo(()=>{if(!t)return[];const y=t.content,h=/^(#{2,4})\s+(.+)$/gm,v=[];let A;for(;(A=h.exec(y))!==null;){const E=A[1].length,_=A[2].trim().replace(/`(.+?)`/g,"$1"),b=_.toLowerCase().replace(/[^\w\u4e00-\u9fff\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"");v.push({level:E,text:_,id:b})}return v},[t]),f=En.useMemo(()=>({h2:({children:y,...h})=>{const v=wi(y),A=as(v);return Er.createElement("h2",{id:A,...h},y)},h3:({children:y,...h})=>{const v=wi(y),A=as(v);return Er.createElement("h3",{id:A,...h},y)},h4:({children:y,...h})=>{const v=wi(y),A=as(v);return Er.createElement("h4",{id:A,...h},y)}}),[]),g=En.useMemo(()=>t?P1(t.content):"",[t]);if(En.useEffect(()=>{const y=a.current;y&&(y.scrollTop=0)},[t==null?void 0:t.path]),!t)return j.jsx("div",{className:"content-empty",children:j.jsxs("div",{style:{textAlign:"center"},children:[j.jsx("svg",{width:"64",height:"64",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:j.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})}),j.jsx("p",{style:{fontSize:13},children:"从左侧选择页面开始阅读"})]})});const{meta:m}=t;return j.jsx("div",{ref:a,className:"content",children:j.jsxs("div",{className:"content-inner",children:[j.jsxs("div",{className:"meta-row",children:[m.type&&j.jsx("span",{className:`meta-type ${m.type}`,children:m.type}),m.created&&j.jsxs("span",{className:"meta-date",children:["创建: ",m.created]}),m.updated&&m.updated!==m.created&&j.jsxs("span",{className:"meta-date",children:["更新: ",m.updated]})]}),m.tags.length>0&&j.jsx("div",{className:"tags-row",children:m.tags.map(y=>j.jsxs("button",{className:"tag tag-clickable",onClick:()=>i(y),title:"按此标签筛选",children:["#",y]},y))}),u.length>2&&j.jsxs("div",{className:"toc",children:[j.jsxs("button",{className:"toc-header",onClick:()=>c(!s),children:[j.jsx("span",{className:`arrow ${s?"":"open"}`,children:"▶"}),"目录",j.jsx("span",{className:"count",children:u.length})]}),!s&&j.jsx("nav",{className:"toc-body",children:u.map((y,h)=>j.jsx("a",{href:"#",className:`toc-link toc-level-${y.level}`,onClick:v=>{v.preventDefault();const A=document.getElementById(y.id);A&&A.scrollIntoView({behavior:"smooth",block:"start"})},children:y.text},h))})]}),j.jsx("div",{className:"md-content",children:j.jsx(pv,{remarkPlugins:[E1],components:f,children:g})})]})})}function wi(t){var l;return typeof t=="string"?t:Array.isArray(t)?t.map(wi).join(""):(l=t==null?void 0:t.props)!=null&&l.children?wi(t.props.children):""}function as(t){return t.toLowerCase().replace(/[^\w\u4e00-\u9fff\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"")}function M1({open:t,onClose:l,onSearch:i,onSelect:a}){const[s,c]=En.useState(""),[u,f]=En.useState([]),[g,m]=En.useState(0),y=En.useRef(null);En.useEffect(()=>{t&&(c(""),f([]),m(0),setTimeout(()=>{var v;return(v=y.current)==null?void 0:v.focus()},100))},[t]),En.useEffect(()=>{if(!t)return;const v=A=>{A.key==="Escape"&&l(),A.key==="ArrowDown"&&(A.preventDefault(),m(E=>Math.min(E+1,u.length-1))),A.key==="ArrowUp"&&(A.preventDefault(),m(E=>Math.max(E-1,0))),A.key==="Enter"&&u[g]&&(a(u[g].path),l())};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[t,u,g,l,a]);const h=v=>{c(v),m(0),f(v.length>=2?i(v):[])};return t?j.jsx("div",{className:"modal-overlay",onClick:v=>{v.target===v.currentTarget&&l()},children:j.jsxs("div",{className:"modal",children:[j.jsxs("div",{className:"modal-input",children:[j.jsx("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",style:{color:"var(--text-muted)",flexShrink:0},children:j.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),j.jsx("input",{ref:y,type:"text",value:s,onChange:v=>h(v.target.value),placeholder:"搜索页面、概念、实体..."}),j.jsx("kbd",{style:{fontSize:10,padding:"2px 6px",borderRadius:4,background:"var(--surface)",color:"var(--text-muted)"},children:"ESC"})]}),j.jsxs("div",{className:"modal-results",children:[u.length===0&&s.length>=2&&j.jsx("div",{className:"modal-empty",children:"未找到匹配结果"}),u.length===0&&s.length<2&&j.jsx("div",{className:"modal-empty",children:"输入至少 2 个字符搜索"}),u.map((v,A)=>j.jsxs("button",{onClick:()=>{a(v.path),l()},className:"modal-result"+(A===g?" sel":""),children:[j.jsx("div",{className:"rtitle",children:v.title}),j.jsx("div",{className:"rsnippet",children:v.snippet})]},v.path))]})]})}):null}const Sp=Object.assign({"../../wiki/concepts/agent-memory-system.md":Tm,"../../wiki/concepts/agent-tool-selection.md":Mm,"../../wiki/concepts/ai-agent.md":Om,"../../wiki/concepts/ai-gateway.md":bm,"../../wiki/concepts/ai-programming.md":Fm,"../../wiki/concepts/context-engineering.md":Nm,"../../wiki/concepts/dev-flow-unified-paradigm.md":zm,"../../wiki/concepts/fde.md":Bm,"../../wiki/concepts/loop-engineering.md":Gm,"../../wiki/concepts/mcp-model-context-protocol.md":jm,"../../wiki/concepts/model-finetuning.md":Hm,"../../wiki/concepts/model-fusion.md":Um,"../../wiki/concepts/moe-mixture-of-experts.md":Wm,"../../wiki/concepts/okf-open-knowledge-format.md":Vm,"../../wiki/concepts/ontology.md":qm,"../../wiki/concepts/prompt-caching.md":Qm,"../../wiki/concepts/rag-retrieval-augmented-generation.md":Jm,"../../wiki/concepts/red-green-regression-testing.md":$m,"../../wiki/concepts/self-improving-agent.md":Km,"../../wiki/concepts/spec-driven-development.md":Ym,"../../wiki/concepts/test-driven-development.md":Xm,"../../wiki/entities/apache-burr.md":Zm,"../../wiki/entities/autolink.md":nh,"../../wiki/entities/bmad.md":eh,"../../wiki/entities/cc-connect.md":th,"../../wiki/entities/cc-switch.md":rh,"../../wiki/entities/claude-code.md":ih,"../../wiki/entities/codex-cli.md":lh,"../../wiki/entities/comet.md":oh,"../../wiki/entities/ecc.md":ah,"../../wiki/entities/firecrawl.md":sh,"../../wiki/entities/flashrt.md":uh,"../../wiki/entities/fuseai.md":ch,"../../wiki/entities/gsd.md":dh,"../../wiki/entities/gstack.md":ph,"../../wiki/entities/hermes-agent.md":fh,"../../wiki/entities/html-video.md":gh,"../../wiki/entities/huashu-design.md":mh,"../../wiki/entities/infifusion.md":hh,"../../wiki/entities/khazix-skills.md":yh,"../../wiki/entities/lightrag.md":kh,"../../wiki/entities/mempalace.md":Ah,"../../wiki/entities/mergekit.md":vh,"../../wiki/entities/mux0.md":Sh,"../../wiki/entities/openclaw.md":wh,"../../wiki/entities/openspec.md":Ch,"../../wiki/entities/opensquilla.md":xh,"../../wiki/entities/pageagent.md":Ih,"../../wiki/entities/pythia.md":Eh,"../../wiki/entities/rag-anything.md":Lh,"../../wiki/entities/seeder.md":_h,"../../wiki/entities/snail-ai.md":Rh,"../../wiki/entities/spec-kit.md":Ph,"../../wiki/entities/superpowers.md":Dh,"../../wiki/entities/understand-anything.md":Th,"../../wiki/entities/unsloth.md":Mh,"../../wiki/entities/uzi-skill.md":Oh,"../../wiki/index.md":bh,"../../wiki/log.md":Fh,"../../wiki/synthesis/2026-h1-wanxiang-review.md":Nh,"../../wiki/synthesis/agent-framework-comparison.md":zh,"../../wiki/synthesis/ai-dev-trifecta.md":Bh,"../../wiki/synthesis/bmad-vs-openspec.md":Gh,"../../wiki/synthesis/model-fusion-deep-report.md":jh,"../../wiki/tags-index.md":Hh,"../../wiki/topics/agentic-rag.md":Uh,"../../wiki/topics/ai-agent-landscape-2026.md":Wh,"../../wiki/topics/ai-native-dev-system.md":Vh,"../../wiki/topics/firecrawl-web-scraping.md":qh,"../../wiki/topics/karpathy-ai-coding-methodology.md":Qh,"../../wiki/topics/llm-wiki-methodology.md":Jh,"../../wiki/topics/opensquilla-ai-self-verification.md":$h,"../../wiki/topics/rag-evaluation.md":Kh,"../../wiki/topics/snail-ai-agent-platform.md":Yh,"../../wiki/topics/starrocks-catalog-acceleration-strategy.md":Xh,"../../wiki/topics/starrocks-cross-data-source-query.md":Zh,"../../wiki/topics/unsloth-efficient-llm-finetuning.md":ny,"../../wiki/topics/wanxiang-ai-analysis.md":ey}),O1={entities:"实体",concepts:"概念",papers:"论文",topics:"主题",synthesis:"综述"};function b1(t,l){var y,h;const i=t.split(`
`),a={};let s=0;if(((y=i[0])==null?void 0:y.trim())==="---"){const v=i.indexOf("---",1);if(v>0){const A=i.slice(1,v).join(`
`);s=v+1,A.split(`
`).forEach(E=>{const _=E.match(/^(\w+):\s*(.+)$/);_&&(a[_[1]]=_[2].trim())})}}const u=i.slice(s).join(`
`).match(/^#\s+(.+)/m),f=u?u[1].trim():a.title||((h=l.split("/").pop())==null?void 0:h.replace(".md",""))||"Untitled";l.split("/").slice(-2,-1)[0];let g=[];a.tags&&(Array.isArray(a.tags)?g=a.tags:typeof a.tags=="string"&&(g=a.tags.split(",").map(v=>v.trim())));const m=l.replace(/.*\/wiki\//,"wiki/");return{title:f,path:m,summary:a.summary||"",tags:g}}function wp(){return window.location.hash.slice(1)||null}function F1(){const[t,l]=En.useState(()=>wp()),[i,a]=En.useState(new Set(["实体","概念","论文","综述"])),[s,c]=En.useState(!1),[u,f]=En.useState(!1),[g,m]=En.useState(null);En.useEffect(()=>{t?window.location.hash="#"+t:history.replaceState(null,"",window.location.pathname+window.location.search)},[t]),En.useEffect(()=>{const V=()=>l(wp());return window.addEventListener("hashchange",V),()=>window.removeEventListener("hashchange",V)},[]);const{allPages:y,categories:h,allTags:v}=En.useMemo(()=>{const V=[],en=new Map,cn=new Map;for(const[Q,$]of Object.entries(Sp)){if(Q.includes("/index.md")||Q.includes("/log.md"))continue;try{const yn=Q.replace(/.*\/wiki\//,"wiki/"),J=vp($,yn);V.push(J)}catch(yn){console.error("[App] Failed to parse:",Q,yn)}const Y=b1($,Q),an=Q.split("/").slice(-2,-1)[0]||"",xn=O1[an]||an;for(const yn of Y.tags)cn.set(yn,(cn.get(yn)||0)+1);en.has(xn)||en.set(xn,[]),en.get(xn).push(Y)}const D=[];for(const Q of["实体","概念","论文","主题","综述"]){const $=en.get(Q);$&&$.length>0&&(D.push({name:Q,pages:$,collapsed:i.has(Q)}),en.delete(Q))}for(const[Q,$]of en)D.push({name:Q,pages:$,collapsed:i.has(Q)});const Z=Array.from(cn.entries()).map(([Q,$])=>({name:Q,count:$})).sort((Q,$)=>$.count-Q.count||Q.name.localeCompare($.name));return{allPages:V,categories:D,allTags:Z}},[i]);En.useEffect(()=>{_1(R1(y))},[y]);const A=En.useMemo(()=>{if(!t)return null;const V="../../"+t,en=Sp[V];return en?vp(en,V):null},[t]),E=En.useCallback(V=>{l(V.path),m(null),f(!1)},[]),_=En.useCallback(V=>{const en=_f(V);l(en||V)},[]),b=En.useCallback(V=>{a(en=>{const cn=new Set(en);return cn.has(V)?cn.delete(V):cn.add(V),cn})},[]),M=En.useCallback(V=>D1(V,y),[y]),U=En.useCallback(V=>{l(V),m(null)},[]),B=En.useCallback(V=>{m(g===V?null:V)},[g]);En.useEffect(()=>{const V=en=>{en.key==="k"&&(en.metaKey||en.ctrlKey)&&(en.preventDefault(),c(cn=>!cn))};return window.addEventListener("keydown",V),()=>window.removeEventListener("keydown",V)},[]);const rn=En.useMemo(()=>g?h.map(V=>({...V,pages:V.pages.filter(en=>en.tags.includes(g))})).filter(V=>V.pages.length>0):h,[h,g]),un=y.length,O=g?rn.reduce((V,en)=>V+en.pages.length,0):un;return j.jsxs("div",{className:"app",children:[j.jsxs("div",{className:"mobile-header",children:[j.jsx("button",{onClick:()=>f(!u),style:{padding:6,borderRadius:8},children:j.jsx("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:j.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})}),j.jsx("h1",{style:{fontSize:14,fontWeight:600,color:"var(--accent)"},children:"LLM Wiki"}),j.jsx("button",{onClick:()=>c(!0),style:{marginLeft:"auto",padding:6,borderRadius:8},children:j.jsx("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:j.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})]}),j.jsxs("div",{className:"main-area",children:[j.jsx("div",{className:"sidebar-desktop",style:{height:"100%"},children:j.jsx(Dd,{categories:rn,activePath:t,onSelect:E,onToggleCategory:b,onSearch:()=>c(!0),pageCount:O,allTags:v,activeTag:g,onTagSelect:B})}),u&&j.jsxs("div",{className:"mobile-overlay",children:[j.jsx("div",{className:"mobile-overlay-bg",onClick:()=>f(!1)}),j.jsx("div",{className:"mobile-overlay-sidebar",children:j.jsx(Dd,{categories:rn,activePath:t,onSelect:E,onToggleCategory:b,onSearch:()=>{f(!1),c(!0)},pageCount:O,allTags:v,activeTag:g,onTagSelect:B})})]}),j.jsx(T1,{page:A,onNavigate:_,onTagSelect:B})]}),j.jsxs("div",{className:"status-bar",children:[j.jsxs("span",{children:[O," 个页面"]}),g&&j.jsxs(j.Fragment,{children:[j.jsx("span",{children:"·"}),j.jsxs("span",{style:{color:"var(--accent)"},children:["标签: #",g]})]}),A&&!g&&j.jsxs(j.Fragment,{children:[j.jsx("span",{style:{color:"var(--border)"},children:"|"}),j.jsx("span",{children:A.path})]})]}),j.jsx(M1,{open:s,onClose:()=>c(!1),onSearch:M,onSelect:U})]})}Dm.createRoot(document.getElementById("root")).render(Er.createElement(Er.StrictMode,null,Er.createElement(F1)));
