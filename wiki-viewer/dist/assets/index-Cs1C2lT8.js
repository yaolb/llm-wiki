(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function i(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(s){if(s.ep)return;s.ep=!0;const c=i(s);fetch(s.href,c)}})();function ys(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var za={exports:{}},Cn={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vd;function Cg(){if(vd)return Cn;vd=1;var t=Symbol.for("react.element"),l=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),h=Symbol.iterator;function v(_){return _===null||typeof _!="object"?null:(_=h&&_[h]||_["@@iterator"],typeof _=="function"?_:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,R={};function F(_,N,C){this.props=_,this.context=N,this.refs=R,this.updater=C||A}F.prototype.isReactComponent={},F.prototype.setState=function(_,N){if(typeof _!="object"&&typeof _!="function"&&_!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,_,N,"setState")},F.prototype.forceUpdate=function(_){this.updater.enqueueForceUpdate(this,_,"forceUpdate")};function M(){}M.prototype=F.prototype;function U(_,N,C){this.props=_,this.context=N,this.refs=R,this.updater=C||A}var B=U.prototype=new M;B.constructor=U,E(B,F.prototype),B.isPureReactComponent=!0;var rn=Array.isArray,un=Object.prototype.hasOwnProperty,O={current:null},V={key:!0,ref:!0,__self:!0,__source:!0};function en(_,N,C){var gn,vn={},mn=null,Rn=null;if(N!=null)for(gn in N.ref!==void 0&&(Rn=N.ref),N.key!==void 0&&(mn=""+N.key),N)un.call(N,gn)&&!V.hasOwnProperty(gn)&&(vn[gn]=N[gn]);var Sn=arguments.length-2;if(Sn===1)vn.children=C;else if(1<Sn){for(var Tn=Array(Sn),Vn=0;Vn<Sn;Vn++)Tn[Vn]=arguments[Vn+2];vn.children=Tn}if(_&&_.defaultProps)for(gn in Sn=_.defaultProps,Sn)vn[gn]===void 0&&(vn[gn]=Sn[gn]);return{$$typeof:t,type:_,key:mn,ref:Rn,props:vn,_owner:O.current}}function cn(_,N){return{$$typeof:t,type:_.type,key:N,ref:_.ref,props:_.props,_owner:_._owner}}function D(_){return typeof _=="object"&&_!==null&&_.$$typeof===t}function Z(_){var N={"=":"=0",":":"=2"};return"$"+_.replace(/[=:]/g,function(C){return N[C]})}var Q=/\/+/g;function J(_,N){return typeof _=="object"&&_!==null&&_.key!=null?Z(""+_.key):N.toString(36)}function Y(_,N,C,gn,vn){var mn=typeof _;(mn==="undefined"||mn==="boolean")&&(_=null);var Rn=!1;if(_===null)Rn=!0;else switch(mn){case"string":case"number":Rn=!0;break;case"object":switch(_.$$typeof){case t:case l:Rn=!0}}if(Rn)return Rn=_,vn=vn(Rn),_=gn===""?"."+J(Rn,0):gn,rn(vn)?(C="",_!=null&&(C=_.replace(Q,"$&/")+"/"),Y(vn,N,C,"",function(Vn){return Vn})):vn!=null&&(D(vn)&&(vn=cn(vn,C+(!vn.key||Rn&&Rn.key===vn.key?"":(""+vn.key).replace(Q,"$&/")+"/")+_)),N.push(vn)),1;if(Rn=0,gn=gn===""?".":gn+":",rn(_))for(var Sn=0;Sn<_.length;Sn++){mn=_[Sn];var Tn=gn+J(mn,Sn);Rn+=Y(mn,N,C,Tn,vn)}else if(Tn=v(_),typeof Tn=="function")for(_=Tn.call(_),Sn=0;!(mn=_.next()).done;)mn=mn.value,Tn=gn+J(mn,Sn++),Rn+=Y(mn,N,C,Tn,vn);else if(mn==="object")throw N=String(_),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(_).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return Rn}function an(_,N,C){if(_==null)return _;var gn=[],vn=0;return Y(_,gn,"","",function(mn){return N.call(C,mn,vn++)}),gn}function xn(_){if(_._status===-1){var N=_._result;N=N(),N.then(function(C){(_._status===0||_._status===-1)&&(_._status=1,_._result=C)},function(C){(_._status===0||_._status===-1)&&(_._status=2,_._result=C)}),_._status===-1&&(_._status=0,_._result=N)}if(_._status===1)return _._result.default;throw _._result}var yn={current:null},$={transition:null},sn={ReactCurrentDispatcher:yn,ReactCurrentBatchConfig:$,ReactCurrentOwner:O};function S(){throw Error("act(...) is not supported in production builds of React.")}return Cn.Children={map:an,forEach:function(_,N,C){an(_,function(){N.apply(this,arguments)},C)},count:function(_){var N=0;return an(_,function(){N++}),N},toArray:function(_){return an(_,function(N){return N})||[]},only:function(_){if(!D(_))throw Error("React.Children.only expected to receive a single React element child.");return _}},Cn.Component=F,Cn.Fragment=i,Cn.Profiler=s,Cn.PureComponent=U,Cn.StrictMode=a,Cn.Suspense=m,Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sn,Cn.act=S,Cn.cloneElement=function(_,N,C){if(_==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+_+".");var gn=E({},_.props),vn=_.key,mn=_.ref,Rn=_._owner;if(N!=null){if(N.ref!==void 0&&(mn=N.ref,Rn=O.current),N.key!==void 0&&(vn=""+N.key),_.type&&_.type.defaultProps)var Sn=_.type.defaultProps;for(Tn in N)un.call(N,Tn)&&!V.hasOwnProperty(Tn)&&(gn[Tn]=N[Tn]===void 0&&Sn!==void 0?Sn[Tn]:N[Tn])}var Tn=arguments.length-2;if(Tn===1)gn.children=C;else if(1<Tn){Sn=Array(Tn);for(var Vn=0;Vn<Tn;Vn++)Sn[Vn]=arguments[Vn+2];gn.children=Sn}return{$$typeof:t,type:_.type,key:vn,ref:mn,props:gn,_owner:Rn}},Cn.createContext=function(_){return _={$$typeof:u,_currentValue:_,_currentValue2:_,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},_.Provider={$$typeof:c,_context:_},_.Consumer=_},Cn.createElement=en,Cn.createFactory=function(_){var N=en.bind(null,_);return N.type=_,N},Cn.createRef=function(){return{current:null}},Cn.forwardRef=function(_){return{$$typeof:f,render:_}},Cn.isValidElement=D,Cn.lazy=function(_){return{$$typeof:k,_payload:{_status:-1,_result:_},_init:xn}},Cn.memo=function(_,N){return{$$typeof:g,type:_,compare:N===void 0?null:N}},Cn.startTransition=function(_){var N=$.transition;$.transition={};try{_()}finally{$.transition=N}},Cn.unstable_act=S,Cn.useCallback=function(_,N){return yn.current.useCallback(_,N)},Cn.useContext=function(_){return yn.current.useContext(_)},Cn.useDebugValue=function(){},Cn.useDeferredValue=function(_){return yn.current.useDeferredValue(_)},Cn.useEffect=function(_,N){return yn.current.useEffect(_,N)},Cn.useId=function(){return yn.current.useId()},Cn.useImperativeHandle=function(_,N,C){return yn.current.useImperativeHandle(_,N,C)},Cn.useInsertionEffect=function(_,N){return yn.current.useInsertionEffect(_,N)},Cn.useLayoutEffect=function(_,N){return yn.current.useLayoutEffect(_,N)},Cn.useMemo=function(_,N){return yn.current.useMemo(_,N)},Cn.useReducer=function(_,N,C){return yn.current.useReducer(_,N,C)},Cn.useRef=function(_){return yn.current.useRef(_)},Cn.useState=function(_){return yn.current.useState(_)},Cn.useSyncExternalStore=function(_,N,C){return yn.current.useSyncExternalStore(_,N,C)},Cn.useTransition=function(){return yn.current.useTransition()},Cn.version="18.3.1",Cn}var Sd;function ks(){return Sd||(Sd=1,za.exports=Cg()),za.exports}var Dn=ks();const Ba=ys(Dn);var Nl={},Ga={exports:{}},ye={},ja={exports:{}},Ha={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wd;function xg(){return wd||(wd=1,function(t){function l($,sn){var S=$.length;$.push(sn);n:for(;0<S;){var _=S-1>>>1,N=$[_];if(0<s(N,sn))$[_]=sn,$[S]=N,S=_;else break n}}function i($){return $.length===0?null:$[0]}function a($){if($.length===0)return null;var sn=$[0],S=$.pop();if(S!==sn){$[0]=S;n:for(var _=0,N=$.length,C=N>>>1;_<C;){var gn=2*(_+1)-1,vn=$[gn],mn=gn+1,Rn=$[mn];if(0>s(vn,S))mn<N&&0>s(Rn,vn)?($[_]=Rn,$[mn]=S,_=mn):($[_]=vn,$[gn]=S,_=gn);else if(mn<N&&0>s(Rn,S))$[_]=Rn,$[mn]=S,_=mn;else break n}}return sn}function s($,sn){var S=$.sortIndex-sn.sortIndex;return S!==0?S:$.id-sn.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;t.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();t.unstable_now=function(){return u.now()-f}}var m=[],g=[],k=1,h=null,v=3,A=!1,E=!1,R=!1,F=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function B($){for(var sn=i(g);sn!==null;){if(sn.callback===null)a(g);else if(sn.startTime<=$)a(g),sn.sortIndex=sn.expirationTime,l(m,sn);else break;sn=i(g)}}function rn($){if(R=!1,B($),!E)if(i(m)!==null)E=!0,xn(un);else{var sn=i(g);sn!==null&&yn(rn,sn.startTime-$)}}function un($,sn){E=!1,R&&(R=!1,M(en),en=-1),A=!0;var S=v;try{for(B(sn),h=i(m);h!==null&&(!(h.expirationTime>sn)||$&&!Z());){var _=h.callback;if(typeof _=="function"){h.callback=null,v=h.priorityLevel;var N=_(h.expirationTime<=sn);sn=t.unstable_now(),typeof N=="function"?h.callback=N:h===i(m)&&a(m),B(sn)}else a(m);h=i(m)}if(h!==null)var C=!0;else{var gn=i(g);gn!==null&&yn(rn,gn.startTime-sn),C=!1}return C}finally{h=null,v=S,A=!1}}var O=!1,V=null,en=-1,cn=5,D=-1;function Z(){return!(t.unstable_now()-D<cn)}function Q(){if(V!==null){var $=t.unstable_now();D=$;var sn=!0;try{sn=V(!0,$)}finally{sn?J():(O=!1,V=null)}}else O=!1}var J;if(typeof U=="function")J=function(){U(Q)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,an=Y.port2;Y.port1.onmessage=Q,J=function(){an.postMessage(null)}}else J=function(){F(Q,0)};function xn($){V=$,O||(O=!0,J())}function yn($,sn){en=F(function(){$(t.unstable_now())},sn)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){E||A||(E=!0,xn(un))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):cn=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return i(m)},t.unstable_next=function($){switch(v){case 1:case 2:case 3:var sn=3;break;default:sn=v}var S=v;v=sn;try{return $()}finally{v=S}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,sn){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var S=v;v=$;try{return sn()}finally{v=S}},t.unstable_scheduleCallback=function($,sn,S){var _=t.unstable_now();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?_+S:_):S=_,$){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=S+N,$={id:k++,callback:sn,priorityLevel:$,startTime:S,expirationTime:N,sortIndex:-1},S>_?($.sortIndex=S,l(g,$),i(m)===null&&$===i(g)&&(R?(M(en),en=-1):R=!0,yn(rn,S-_))):($.sortIndex=N,l(m,$),E||A||(E=!0,xn(un))),$},t.unstable_shouldYield=Z,t.unstable_wrapCallback=function($){var sn=v;return function(){var S=v;v=sn;try{return $.apply(this,arguments)}finally{v=S}}}}(Ha)),Ha}var Cd;function Ig(){return Cd||(Cd=1,ja.exports=xg()),ja.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xd;function Eg(){if(xd)return ye;xd=1;var t=ks(),l=Ig();function i(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,s={};function c(n,e){u(n,e),u(n+"Capture",e)}function u(n,e){for(s[n]=e,n=0;n<e.length;n++)a.add(e[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,k={},h={};function v(n){return m.call(h,n)?!0:m.call(k,n)?!1:g.test(n)?h[n]=!0:(k[n]=!0,!1)}function A(n,e,r,o){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,e,r,o){if(e===null||typeof e>"u"||A(n,e,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function R(n,e,r,o,d,p,y){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=o,this.attributeNamespace=d,this.mustUseProperty=r,this.propertyName=n,this.type=e,this.sanitizeURL=p,this.removeEmptyString=y}var F={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){F[n]=new R(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];F[e]=new R(e,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){F[n]=new R(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){F[n]=new R(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){F[n]=new R(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){F[n]=new R(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){F[n]=new R(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){F[n]=new R(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){F[n]=new R(n,5,!1,n.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function U(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(M,U);F[e]=new R(e,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(M,U);F[e]=new R(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(M,U);F[e]=new R(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){F[n]=new R(n,1,!1,n.toLowerCase(),null,!1,!1)}),F.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){F[n]=new R(n,1,!1,n.toLowerCase(),null,!0,!0)});function B(n,e,r,o){var d=F.hasOwnProperty(e)?F[e]:null;(d!==null?d.type!==0:o||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(E(e,r,d,o)&&(r=null),o||d===null?v(e)&&(r===null?n.removeAttribute(e):n.setAttribute(e,""+r)):d.mustUseProperty?n[d.propertyName]=r===null?d.type===3?!1:"":r:(e=d.attributeName,o=d.attributeNamespace,r===null?n.removeAttribute(e):(d=d.type,r=d===3||d===4&&r===!0?"":""+r,o?n.setAttributeNS(o,e,r):n.setAttribute(e,r))))}var rn=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,un=Symbol.for("react.element"),O=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),en=Symbol.for("react.strict_mode"),cn=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),Z=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),an=Symbol.for("react.memo"),xn=Symbol.for("react.lazy"),yn=Symbol.for("react.offscreen"),$=Symbol.iterator;function sn(n){return n===null||typeof n!="object"?null:(n=$&&n[$]||n["@@iterator"],typeof n=="function"?n:null)}var S=Object.assign,_;function N(n){if(_===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);_=e&&e[1]||""}return`
`+_+n}var C=!1;function gn(n,e){if(!n||C)return"";C=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(T){var o=T}Reflect.construct(n,[],e)}else{try{e.call()}catch(T){o=T}n.call(e.prototype)}else{try{throw Error()}catch(T){o=T}n()}}catch(T){if(T&&o&&typeof T.stack=="string"){for(var d=T.stack.split(`
`),p=o.stack.split(`
`),y=d.length-1,w=p.length-1;1<=y&&0<=w&&d[y]!==p[w];)w--;for(;1<=y&&0<=w;y--,w--)if(d[y]!==p[w]){if(y!==1||w!==1)do if(y--,w--,0>w||d[y]!==p[w]){var x=`
`+d[y].replace(" at new "," at ");return n.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",n.displayName)),x}while(1<=y&&0<=w);break}}}finally{C=!1,Error.prepareStackTrace=r}return(n=n?n.displayName||n.name:"")?N(n):""}function vn(n){switch(n.tag){case 5:return N(n.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return n=gn(n.type,!1),n;case 11:return n=gn(n.type.render,!1),n;case 1:return n=gn(n.type,!0),n;default:return""}}function mn(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case V:return"Fragment";case O:return"Portal";case cn:return"Profiler";case en:return"StrictMode";case J:return"Suspense";case Y:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Z:return(n.displayName||"Context")+".Consumer";case D:return(n._context.displayName||"Context")+".Provider";case Q:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case an:return e=n.displayName||null,e!==null?e:mn(n.type)||"Memo";case xn:e=n._payload,n=n._init;try{return mn(n(e))}catch{}}return null}function Rn(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mn(e);case 8:return e===en?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Sn(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Tn(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Vn(n){var e=Tn(n)?"checked":"value",r=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),o=""+n[e];if(!n.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var d=r.get,p=r.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return d.call(this)},set:function(y){o=""+y,p.call(this,y)}}),Object.defineProperty(n,e,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(y){o=""+y},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Ye(n){n._valueTracker||(n._valueTracker=Vn(n))}function Ii(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var r=e.getValue(),o="";return n&&(o=Tn(n)?n.checked?"true":"false":n.value),n=o,n!==r?(e.setValue(n),!0):!1}function Xt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Lr(n,e){var r=e.checked;return S({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??n._wrapperState.initialChecked})}function Rr(n,e){var r=e.defaultValue==null?"":e.defaultValue,o=e.checked!=null?e.checked:e.defaultChecked;r=Sn(e.value!=null?e.value:r),n._wrapperState={initialChecked:o,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Pr(n,e){e=e.checked,e!=null&&B(n,"checked",e,!1)}function Zt(n,e){Pr(n,e);var r=Sn(e.value),o=e.type;if(r!=null)o==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+r):n.value!==""+r&&(n.value=""+r);else if(o==="submit"||o==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?nr(n,e.type,r):e.hasOwnProperty("defaultValue")&&nr(n,e.type,Sn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Ei(n,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var o=e.type;if(!(o!=="submit"&&o!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,r||e===n.value||(n.value=e),n.defaultValue=e}r=n.name,r!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,r!==""&&(n.name=r)}function nr(n,e,r){(e!=="number"||Xt(n.ownerDocument)!==n)&&(r==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+r&&(n.defaultValue=""+r))}var st=Array.isArray;function ut(n,e,r,o){if(n=n.options,e){e={};for(var d=0;d<r.length;d++)e["$"+r[d]]=!0;for(r=0;r<n.length;r++)d=e.hasOwnProperty("$"+n[r].value),n[r].selected!==d&&(n[r].selected=d),d&&o&&(n[r].defaultSelected=!0)}else{for(r=""+Sn(r),e=null,d=0;d<n.length;d++){if(n[d].value===r){n[d].selected=!0,o&&(n[d].defaultSelected=!0);return}e!==null||n[d].disabled||(e=n[d])}e!==null&&(e.selected=!0)}}function Dr(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(i(91));return S({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function _i(n,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(i(92));if(st(r)){if(1<r.length)throw Error(i(93));r=r[0]}e=r}e==null&&(e=""),r=e}n._wrapperState={initialValue:Sn(r)}}function Li(n,e){var r=Sn(e.value),o=Sn(e.defaultValue);r!=null&&(r=""+r,r!==n.value&&(n.value=r),e.defaultValue==null&&n.defaultValue!==r&&(n.defaultValue=r)),o!=null&&(n.defaultValue=""+o)}function Ri(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function b(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function K(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?b(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var hn,wn=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,o,d){MSApp.execUnsafeLocalFunction(function(){return n(e,r,o,d)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(hn=hn||document.createElement("div"),hn.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=hn.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function _n(n,e){if(e){var r=n.firstChild;if(r&&r===n.lastChild&&r.nodeType===3){r.nodeValue=e;return}}n.textContent=e}var Zn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xe=["Webkit","ms","Moz","O"];Object.keys(Zn).forEach(function(n){Xe.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Zn[e]=Zn[n]})});function _e(n,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||Zn.hasOwnProperty(n)&&Zn[n]?(""+e).trim():e+"px"}function ct(n,e){n=n.style;for(var r in e)if(e.hasOwnProperty(r)){var o=r.indexOf("--")===0,d=_e(r,e[r],o);r==="float"&&(r="cssFloat"),o?n.setProperty(r,d):n[r]=d}}var Tt=S({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ne(n,e){if(e){if(Tt[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(i(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(i(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(i(61))}if(e.style!=null&&typeof e.style!="object")throw Error(i(62))}}function Ue(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ve=null;function Xl(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Zl=null,er=null,tr=null;function Ns(n){if(n=Zr(n)){if(typeof Zl!="function")throw Error(i(280));var e=n.stateNode;e&&(e=Xi(e),Zl(n.stateNode,n.type,e))}}function zs(n){er?tr?tr.push(n):tr=[n]:er=n}function Bs(){if(er){var n=er,e=tr;if(tr=er=null,Ns(n),e)for(n=0;n<e.length;n++)Ns(e[n])}}function Gs(n,e){return n(e)}function js(){}var no=!1;function Hs(n,e,r){if(no)return n(e,r);no=!0;try{return Gs(n,e,r)}finally{no=!1,(er!==null||tr!==null)&&(js(),Bs())}}function Tr(n,e){var r=n.stateNode;if(r===null)return null;var o=Xi(r);if(o===null)return null;r=o[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(n=n.type,o=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!o;break n;default:n=!1}if(n)return null;if(r&&typeof r!="function")throw Error(i(231,e,typeof r));return r}var eo=!1;if(f)try{var Mr={};Object.defineProperty(Mr,"passive",{get:function(){eo=!0}}),window.addEventListener("test",Mr,Mr),window.removeEventListener("test",Mr,Mr)}catch{eo=!1}function Rf(n,e,r,o,d,p,y,w,x){var T=Array.prototype.slice.call(arguments,3);try{e.apply(r,T)}catch(G){this.onError(G)}}var Or=!1,Pi=null,Di=!1,to=null,Pf={onError:function(n){Or=!0,Pi=n}};function Df(n,e,r,o,d,p,y,w,x){Or=!1,Pi=null,Rf.apply(Pf,arguments)}function Tf(n,e,r,o,d,p,y,w,x){if(Df.apply(this,arguments),Or){if(Or){var T=Pi;Or=!1,Pi=null}else throw Error(i(198));Di||(Di=!0,to=T)}}function Mt(n){var e=n,r=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(r=e.return),n=e.return;while(n)}return e.tag===3?r:null}function Us(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Ws(n){if(Mt(n)!==n)throw Error(i(188))}function Mf(n){var e=n.alternate;if(!e){if(e=Mt(n),e===null)throw Error(i(188));return e!==n?null:n}for(var r=n,o=e;;){var d=r.return;if(d===null)break;var p=d.alternate;if(p===null){if(o=d.return,o!==null){r=o;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===r)return Ws(d),n;if(p===o)return Ws(d),e;p=p.sibling}throw Error(i(188))}if(r.return!==o.return)r=d,o=p;else{for(var y=!1,w=d.child;w;){if(w===r){y=!0,r=d,o=p;break}if(w===o){y=!0,o=d,r=p;break}w=w.sibling}if(!y){for(w=p.child;w;){if(w===r){y=!0,r=p,o=d;break}if(w===o){y=!0,o=p,r=d;break}w=w.sibling}if(!y)throw Error(i(189))}}if(r.alternate!==o)throw Error(i(190))}if(r.tag!==3)throw Error(i(188));return r.stateNode.current===r?n:e}function Vs(n){return n=Mf(n),n!==null?qs(n):null}function qs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=qs(n);if(e!==null)return e;n=n.sibling}return null}var Qs=l.unstable_scheduleCallback,$s=l.unstable_cancelCallback,Of=l.unstable_shouldYield,bf=l.unstable_requestPaint,Un=l.unstable_now,Ff=l.unstable_getCurrentPriorityLevel,ro=l.unstable_ImmediatePriority,Js=l.unstable_UserBlockingPriority,Ti=l.unstable_NormalPriority,Nf=l.unstable_LowPriority,Ks=l.unstable_IdlePriority,Mi=null,We=null;function zf(n){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(Mi,n,void 0,(n.current.flags&128)===128)}catch{}}var be=Math.clz32?Math.clz32:jf,Bf=Math.log,Gf=Math.LN2;function jf(n){return n>>>=0,n===0?32:31-(Bf(n)/Gf|0)|0}var Oi=64,bi=4194304;function br(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Fi(n,e){var r=n.pendingLanes;if(r===0)return 0;var o=0,d=n.suspendedLanes,p=n.pingedLanes,y=r&268435455;if(y!==0){var w=y&~d;w!==0?o=br(w):(p&=y,p!==0&&(o=br(p)))}else y=r&~d,y!==0?o=br(y):p!==0&&(o=br(p));if(o===0)return 0;if(e!==0&&e!==o&&(e&d)===0&&(d=o&-o,p=e&-e,d>=p||d===16&&(p&4194240)!==0))return e;if((o&4)!==0&&(o|=r&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=o;0<e;)r=31-be(e),d=1<<r,o|=n[r],e&=~d;return o}function Hf(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Uf(n,e){for(var r=n.suspendedLanes,o=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var y=31-be(p),w=1<<y,x=d[y];x===-1?((w&r)===0||(w&o)!==0)&&(d[y]=Hf(w,e)):x<=e&&(n.expiredLanes|=w),p&=~w}}function io(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ys(){var n=Oi;return Oi<<=1,(Oi&4194240)===0&&(Oi=64),n}function lo(n){for(var e=[],r=0;31>r;r++)e.push(n);return e}function Fr(n,e,r){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-be(e),n[e]=r}function Wf(n,e){var r=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var o=n.eventTimes;for(n=n.expirationTimes;0<r;){var d=31-be(r),p=1<<d;e[d]=0,o[d]=-1,n[d]=-1,r&=~p}}function oo(n,e){var r=n.entangledLanes|=e;for(n=n.entanglements;r;){var o=31-be(r),d=1<<o;d&e|n[o]&e&&(n[o]|=e),r&=~d}}var Mn=0;function Xs(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Zs,ao,nu,eu,tu,so=!1,Ni=[],dt=null,pt=null,ft=null,Nr=new Map,zr=new Map,mt=[],Vf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ru(n,e){switch(n){case"focusin":case"focusout":dt=null;break;case"dragenter":case"dragleave":pt=null;break;case"mouseover":case"mouseout":ft=null;break;case"pointerover":case"pointerout":Nr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":zr.delete(e.pointerId)}}function Br(n,e,r,o,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:e,domEventName:r,eventSystemFlags:o,nativeEvent:p,targetContainers:[d]},e!==null&&(e=Zr(e),e!==null&&ao(e)),n):(n.eventSystemFlags|=o,e=n.targetContainers,d!==null&&e.indexOf(d)===-1&&e.push(d),n)}function qf(n,e,r,o,d){switch(e){case"focusin":return dt=Br(dt,n,e,r,o,d),!0;case"dragenter":return pt=Br(pt,n,e,r,o,d),!0;case"mouseover":return ft=Br(ft,n,e,r,o,d),!0;case"pointerover":var p=d.pointerId;return Nr.set(p,Br(Nr.get(p)||null,n,e,r,o,d)),!0;case"gotpointercapture":return p=d.pointerId,zr.set(p,Br(zr.get(p)||null,n,e,r,o,d)),!0}return!1}function iu(n){var e=Ot(n.target);if(e!==null){var r=Mt(e);if(r!==null){if(e=r.tag,e===13){if(e=Us(r),e!==null){n.blockedOn=e,tu(n.priority,function(){nu(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){n.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}n.blockedOn=null}function zi(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var r=co(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(r===null){r=n.nativeEvent;var o=new r.constructor(r.type,r);ve=o,r.target.dispatchEvent(o),ve=null}else return e=Zr(r),e!==null&&ao(e),n.blockedOn=r,!1;e.shift()}return!0}function lu(n,e,r){zi(n)&&r.delete(e)}function Qf(){so=!1,dt!==null&&zi(dt)&&(dt=null),pt!==null&&zi(pt)&&(pt=null),ft!==null&&zi(ft)&&(ft=null),Nr.forEach(lu),zr.forEach(lu)}function Gr(n,e){n.blockedOn===e&&(n.blockedOn=null,so||(so=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Qf)))}function jr(n){function e(d){return Gr(d,n)}if(0<Ni.length){Gr(Ni[0],n);for(var r=1;r<Ni.length;r++){var o=Ni[r];o.blockedOn===n&&(o.blockedOn=null)}}for(dt!==null&&Gr(dt,n),pt!==null&&Gr(pt,n),ft!==null&&Gr(ft,n),Nr.forEach(e),zr.forEach(e),r=0;r<mt.length;r++)o=mt[r],o.blockedOn===n&&(o.blockedOn=null);for(;0<mt.length&&(r=mt[0],r.blockedOn===null);)iu(r),r.blockedOn===null&&mt.shift()}var rr=rn.ReactCurrentBatchConfig,Bi=!0;function $f(n,e,r,o){var d=Mn,p=rr.transition;rr.transition=null;try{Mn=1,uo(n,e,r,o)}finally{Mn=d,rr.transition=p}}function Jf(n,e,r,o){var d=Mn,p=rr.transition;rr.transition=null;try{Mn=4,uo(n,e,r,o)}finally{Mn=d,rr.transition=p}}function uo(n,e,r,o){if(Bi){var d=co(n,e,r,o);if(d===null)Lo(n,e,o,Gi,r),ru(n,o);else if(qf(d,n,e,r,o))o.stopPropagation();else if(ru(n,o),e&4&&-1<Vf.indexOf(n)){for(;d!==null;){var p=Zr(d);if(p!==null&&Zs(p),p=co(n,e,r,o),p===null&&Lo(n,e,o,Gi,r),p===d)break;d=p}d!==null&&o.stopPropagation()}else Lo(n,e,o,null,r)}}var Gi=null;function co(n,e,r,o){if(Gi=null,n=Xl(o),n=Ot(n),n!==null)if(e=Mt(n),e===null)n=null;else if(r=e.tag,r===13){if(n=Us(e),n!==null)return n;n=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Gi=n,null}function ou(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ff()){case ro:return 1;case Js:return 4;case Ti:case Nf:return 16;case Ks:return 536870912;default:return 16}default:return 16}}var gt=null,po=null,ji=null;function au(){if(ji)return ji;var n,e=po,r=e.length,o,d="value"in gt?gt.value:gt.textContent,p=d.length;for(n=0;n<r&&e[n]===d[n];n++);var y=r-n;for(o=1;o<=y&&e[r-o]===d[p-o];o++);return ji=d.slice(n,1<o?1-o:void 0)}function Hi(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Ui(){return!0}function su(){return!1}function Se(n){function e(r,o,d,p,y){this._reactName=r,this._targetInst=d,this.type=o,this.nativeEvent=p,this.target=y,this.currentTarget=null;for(var w in n)n.hasOwnProperty(w)&&(r=n[w],this[w]=r?r(p):p[w]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Ui:su,this.isPropagationStopped=su,this}return S(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ui)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ui)},persist:function(){},isPersistent:Ui}),e}var ir={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fo=Se(ir),Hr=S({},ir,{view:0,detail:0}),Kf=Se(Hr),mo,go,Ur,Wi=S({},Hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yo,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ur&&(Ur&&n.type==="mousemove"?(mo=n.screenX-Ur.screenX,go=n.screenY-Ur.screenY):go=mo=0,Ur=n),mo)},movementY:function(n){return"movementY"in n?n.movementY:go}}),uu=Se(Wi),Yf=S({},Wi,{dataTransfer:0}),Xf=Se(Yf),Zf=S({},Hr,{relatedTarget:0}),ho=Se(Zf),nm=S({},ir,{animationName:0,elapsedTime:0,pseudoElement:0}),em=Se(nm),tm=S({},ir,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),rm=Se(tm),im=S({},ir,{data:0}),cu=Se(im),lm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},om={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},am={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sm(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=am[n])?!!e[n]:!1}function yo(){return sm}var um=S({},Hr,{key:function(n){if(n.key){var e=lm[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Hi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?om[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yo,charCode:function(n){return n.type==="keypress"?Hi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Hi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),cm=Se(um),dm=S({},Wi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),du=Se(dm),pm=S({},Hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yo}),fm=Se(pm),mm=S({},ir,{propertyName:0,elapsedTime:0,pseudoElement:0}),gm=Se(mm),hm=S({},Wi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),ym=Se(hm),km=[9,13,27,32],ko=f&&"CompositionEvent"in window,Wr=null;f&&"documentMode"in document&&(Wr=document.documentMode);var Am=f&&"TextEvent"in window&&!Wr,pu=f&&(!ko||Wr&&8<Wr&&11>=Wr),fu=" ",mu=!1;function gu(n,e){switch(n){case"keyup":return km.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hu(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var lr=!1;function vm(n,e){switch(n){case"compositionend":return hu(e);case"keypress":return e.which!==32?null:(mu=!0,fu);case"textInput":return n=e.data,n===fu&&mu?null:n;default:return null}}function Sm(n,e){if(lr)return n==="compositionend"||!ko&&gu(n,e)?(n=au(),ji=po=gt=null,lr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return pu&&e.locale!=="ko"?null:e.data;default:return null}}var wm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yu(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!wm[n.type]:e==="textarea"}function ku(n,e,r,o){zs(o),e=Ji(e,"onChange"),0<e.length&&(r=new fo("onChange","change",null,r,o),n.push({event:r,listeners:e}))}var Vr=null,qr=null;function Cm(n){Fu(n,0)}function Vi(n){var e=cr(n);if(Ii(e))return n}function xm(n,e){if(n==="change")return e}var Au=!1;if(f){var Ao;if(f){var vo="oninput"in document;if(!vo){var vu=document.createElement("div");vu.setAttribute("oninput","return;"),vo=typeof vu.oninput=="function"}Ao=vo}else Ao=!1;Au=Ao&&(!document.documentMode||9<document.documentMode)}function Su(){Vr&&(Vr.detachEvent("onpropertychange",wu),qr=Vr=null)}function wu(n){if(n.propertyName==="value"&&Vi(qr)){var e=[];ku(e,qr,n,Xl(n)),Hs(Cm,e)}}function Im(n,e,r){n==="focusin"?(Su(),Vr=e,qr=r,Vr.attachEvent("onpropertychange",wu)):n==="focusout"&&Su()}function Em(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Vi(qr)}function _m(n,e){if(n==="click")return Vi(e)}function Lm(n,e){if(n==="input"||n==="change")return Vi(e)}function Rm(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Fe=typeof Object.is=="function"?Object.is:Rm;function Qr(n,e){if(Fe(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var r=Object.keys(n),o=Object.keys(e);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var d=r[o];if(!m.call(e,d)||!Fe(n[d],e[d]))return!1}return!0}function Cu(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function xu(n,e){var r=Cu(n);n=0;for(var o;r;){if(r.nodeType===3){if(o=n+r.textContent.length,n<=e&&o>=e)return{node:r,offset:e-n};n=o}n:{for(;r;){if(r.nextSibling){r=r.nextSibling;break n}r=r.parentNode}r=void 0}r=Cu(r)}}function Iu(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Iu(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Eu(){for(var n=window,e=Xt();e instanceof n.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)n=e.contentWindow;else break;e=Xt(n.document)}return e}function So(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Pm(n){var e=Eu(),r=n.focusedElem,o=n.selectionRange;if(e!==r&&r&&r.ownerDocument&&Iu(r.ownerDocument.documentElement,r)){if(o!==null&&So(r)){if(e=o.start,n=o.end,n===void 0&&(n=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(n,r.value.length);else if(n=(e=r.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var d=r.textContent.length,p=Math.min(o.start,d);o=o.end===void 0?p:Math.min(o.end,d),!n.extend&&p>o&&(d=o,o=p,p=d),d=xu(r,p);var y=xu(r,o);d&&y&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==y.node||n.focusOffset!==y.offset)&&(e=e.createRange(),e.setStart(d.node,d.offset),n.removeAllRanges(),p>o?(n.addRange(e),n.extend(y.node,y.offset)):(e.setEnd(y.node,y.offset),n.addRange(e)))}}for(e=[],n=r;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)n=e[r],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Dm=f&&"documentMode"in document&&11>=document.documentMode,or=null,wo=null,$r=null,Co=!1;function _u(n,e,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Co||or==null||or!==Xt(o)||(o=or,"selectionStart"in o&&So(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),$r&&Qr($r,o)||($r=o,o=Ji(wo,"onSelect"),0<o.length&&(e=new fo("onSelect","select",null,e,r),n.push({event:e,listeners:o}),e.target=or)))}function qi(n,e){var r={};return r[n.toLowerCase()]=e.toLowerCase(),r["Webkit"+n]="webkit"+e,r["Moz"+n]="moz"+e,r}var ar={animationend:qi("Animation","AnimationEnd"),animationiteration:qi("Animation","AnimationIteration"),animationstart:qi("Animation","AnimationStart"),transitionend:qi("Transition","TransitionEnd")},xo={},Lu={};f&&(Lu=document.createElement("div").style,"AnimationEvent"in window||(delete ar.animationend.animation,delete ar.animationiteration.animation,delete ar.animationstart.animation),"TransitionEvent"in window||delete ar.transitionend.transition);function Qi(n){if(xo[n])return xo[n];if(!ar[n])return n;var e=ar[n],r;for(r in e)if(e.hasOwnProperty(r)&&r in Lu)return xo[n]=e[r];return n}var Ru=Qi("animationend"),Pu=Qi("animationiteration"),Du=Qi("animationstart"),Tu=Qi("transitionend"),Mu=new Map,Ou="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ht(n,e){Mu.set(n,e),c(e,[n])}for(var Io=0;Io<Ou.length;Io++){var Eo=Ou[Io],Tm=Eo.toLowerCase(),Mm=Eo[0].toUpperCase()+Eo.slice(1);ht(Tm,"on"+Mm)}ht(Ru,"onAnimationEnd"),ht(Pu,"onAnimationIteration"),ht(Du,"onAnimationStart"),ht("dblclick","onDoubleClick"),ht("focusin","onFocus"),ht("focusout","onBlur"),ht(Tu,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Om=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jr));function bu(n,e,r){var o=n.type||"unknown-event";n.currentTarget=r,Tf(o,e,void 0,n),n.currentTarget=null}function Fu(n,e){e=(e&4)!==0;for(var r=0;r<n.length;r++){var o=n[r],d=o.event;o=o.listeners;n:{var p=void 0;if(e)for(var y=o.length-1;0<=y;y--){var w=o[y],x=w.instance,T=w.currentTarget;if(w=w.listener,x!==p&&d.isPropagationStopped())break n;bu(d,w,T),p=x}else for(y=0;y<o.length;y++){if(w=o[y],x=w.instance,T=w.currentTarget,w=w.listener,x!==p&&d.isPropagationStopped())break n;bu(d,w,T),p=x}}}if(Di)throw n=to,Di=!1,to=null,n}function Nn(n,e){var r=e[Oo];r===void 0&&(r=e[Oo]=new Set);var o=n+"__bubble";r.has(o)||(Nu(e,n,2,!1),r.add(o))}function _o(n,e,r){var o=0;e&&(o|=4),Nu(r,n,o,e)}var $i="_reactListening"+Math.random().toString(36).slice(2);function Kr(n){if(!n[$i]){n[$i]=!0,a.forEach(function(r){r!=="selectionchange"&&(Om.has(r)||_o(r,!1,n),_o(r,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[$i]||(e[$i]=!0,_o("selectionchange",!1,e))}}function Nu(n,e,r,o){switch(ou(e)){case 1:var d=$f;break;case 4:d=Jf;break;default:d=uo}r=d.bind(null,e,r,n),d=void 0,!eo||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(d=!0),o?d!==void 0?n.addEventListener(e,r,{capture:!0,passive:d}):n.addEventListener(e,r,!0):d!==void 0?n.addEventListener(e,r,{passive:d}):n.addEventListener(e,r,!1)}function Lo(n,e,r,o,d){var p=o;if((e&1)===0&&(e&2)===0&&o!==null)n:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var w=o.stateNode.containerInfo;if(w===d||w.nodeType===8&&w.parentNode===d)break;if(y===4)for(y=o.return;y!==null;){var x=y.tag;if((x===3||x===4)&&(x=y.stateNode.containerInfo,x===d||x.nodeType===8&&x.parentNode===d))return;y=y.return}for(;w!==null;){if(y=Ot(w),y===null)return;if(x=y.tag,x===5||x===6){o=p=y;continue n}w=w.parentNode}}o=o.return}Hs(function(){var T=p,G=Xl(r),j=[];n:{var z=Mu.get(n);if(z!==void 0){var X=fo,tn=n;switch(n){case"keypress":if(Hi(r)===0)break n;case"keydown":case"keyup":X=cm;break;case"focusin":tn="focus",X=ho;break;case"focusout":tn="blur",X=ho;break;case"beforeblur":case"afterblur":X=ho;break;case"click":if(r.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":X=uu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":X=Xf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":X=fm;break;case Ru:case Pu:case Du:X=em;break;case Tu:X=gm;break;case"scroll":X=Kf;break;case"wheel":X=ym;break;case"copy":case"cut":case"paste":X=rm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":X=du}var ln=(e&4)!==0,Wn=!ln&&n==="scroll",L=ln?z!==null?z+"Capture":null:z;ln=[];for(var I=T,P;I!==null;){P=I;var q=P.stateNode;if(P.tag===5&&q!==null&&(P=q,L!==null&&(q=Tr(I,L),q!=null&&ln.push(Yr(I,q,P)))),Wn)break;I=I.return}0<ln.length&&(z=new X(z,tn,null,r,G),j.push({event:z,listeners:ln}))}}if((e&7)===0){n:{if(z=n==="mouseover"||n==="pointerover",X=n==="mouseout"||n==="pointerout",z&&r!==ve&&(tn=r.relatedTarget||r.fromElement)&&(Ot(tn)||tn[Ze]))break n;if((X||z)&&(z=G.window===G?G:(z=G.ownerDocument)?z.defaultView||z.parentWindow:window,X?(tn=r.relatedTarget||r.toElement,X=T,tn=tn?Ot(tn):null,tn!==null&&(Wn=Mt(tn),tn!==Wn||tn.tag!==5&&tn.tag!==6)&&(tn=null)):(X=null,tn=T),X!==tn)){if(ln=uu,q="onMouseLeave",L="onMouseEnter",I="mouse",(n==="pointerout"||n==="pointerover")&&(ln=du,q="onPointerLeave",L="onPointerEnter",I="pointer"),Wn=X==null?z:cr(X),P=tn==null?z:cr(tn),z=new ln(q,I+"leave",X,r,G),z.target=Wn,z.relatedTarget=P,q=null,Ot(G)===T&&(ln=new ln(L,I+"enter",tn,r,G),ln.target=P,ln.relatedTarget=Wn,q=ln),Wn=q,X&&tn)e:{for(ln=X,L=tn,I=0,P=ln;P;P=sr(P))I++;for(P=0,q=L;q;q=sr(q))P++;for(;0<I-P;)ln=sr(ln),I--;for(;0<P-I;)L=sr(L),P--;for(;I--;){if(ln===L||L!==null&&ln===L.alternate)break e;ln=sr(ln),L=sr(L)}ln=null}else ln=null;X!==null&&zu(j,z,X,ln,!1),tn!==null&&Wn!==null&&zu(j,Wn,tn,ln,!0)}}n:{if(z=T?cr(T):window,X=z.nodeName&&z.nodeName.toLowerCase(),X==="select"||X==="input"&&z.type==="file")var on=xm;else if(yu(z))if(Au)on=Lm;else{on=Em;var dn=Im}else(X=z.nodeName)&&X.toLowerCase()==="input"&&(z.type==="checkbox"||z.type==="radio")&&(on=_m);if(on&&(on=on(n,T))){ku(j,on,r,G);break n}dn&&dn(n,z,T),n==="focusout"&&(dn=z._wrapperState)&&dn.controlled&&z.type==="number"&&nr(z,"number",z.value)}switch(dn=T?cr(T):window,n){case"focusin":(yu(dn)||dn.contentEditable==="true")&&(or=dn,wo=T,$r=null);break;case"focusout":$r=wo=or=null;break;case"mousedown":Co=!0;break;case"contextmenu":case"mouseup":case"dragend":Co=!1,_u(j,r,G);break;case"selectionchange":if(Dm)break;case"keydown":case"keyup":_u(j,r,G)}var pn;if(ko)n:{switch(n){case"compositionstart":var kn="onCompositionStart";break n;case"compositionend":kn="onCompositionEnd";break n;case"compositionupdate":kn="onCompositionUpdate";break n}kn=void 0}else lr?gu(n,r)&&(kn="onCompositionEnd"):n==="keydown"&&r.keyCode===229&&(kn="onCompositionStart");kn&&(pu&&r.locale!=="ko"&&(lr||kn!=="onCompositionStart"?kn==="onCompositionEnd"&&lr&&(pn=au()):(gt=G,po="value"in gt?gt.value:gt.textContent,lr=!0)),dn=Ji(T,kn),0<dn.length&&(kn=new cu(kn,n,null,r,G),j.push({event:kn,listeners:dn}),pn?kn.data=pn:(pn=hu(r),pn!==null&&(kn.data=pn)))),(pn=Am?vm(n,r):Sm(n,r))&&(T=Ji(T,"onBeforeInput"),0<T.length&&(G=new cu("onBeforeInput","beforeinput",null,r,G),j.push({event:G,listeners:T}),G.data=pn))}Fu(j,e)})}function Yr(n,e,r){return{instance:n,listener:e,currentTarget:r}}function Ji(n,e){for(var r=e+"Capture",o=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=Tr(n,r),p!=null&&o.unshift(Yr(n,p,d)),p=Tr(n,e),p!=null&&o.push(Yr(n,p,d))),n=n.return}return o}function sr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function zu(n,e,r,o,d){for(var p=e._reactName,y=[];r!==null&&r!==o;){var w=r,x=w.alternate,T=w.stateNode;if(x!==null&&x===o)break;w.tag===5&&T!==null&&(w=T,d?(x=Tr(r,p),x!=null&&y.unshift(Yr(r,x,w))):d||(x=Tr(r,p),x!=null&&y.push(Yr(r,x,w)))),r=r.return}y.length!==0&&n.push({event:e,listeners:y})}var bm=/\r\n?/g,Fm=/\u0000|\uFFFD/g;function Bu(n){return(typeof n=="string"?n:""+n).replace(bm,`
`).replace(Fm,"")}function Ki(n,e,r){if(e=Bu(e),Bu(n)!==e&&r)throw Error(i(425))}function Yi(){}var Ro=null,Po=null;function Do(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var To=typeof setTimeout=="function"?setTimeout:void 0,Nm=typeof clearTimeout=="function"?clearTimeout:void 0,Gu=typeof Promise=="function"?Promise:void 0,zm=typeof queueMicrotask=="function"?queueMicrotask:typeof Gu<"u"?function(n){return Gu.resolve(null).then(n).catch(Bm)}:To;function Bm(n){setTimeout(function(){throw n})}function Mo(n,e){var r=e,o=0;do{var d=r.nextSibling;if(n.removeChild(r),d&&d.nodeType===8)if(r=d.data,r==="/$"){if(o===0){n.removeChild(d),jr(e);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=d}while(r);jr(e)}function yt(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function ju(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var r=n.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return n;e--}else r==="/$"&&e++}n=n.previousSibling}return null}var ur=Math.random().toString(36).slice(2),Ve="__reactFiber$"+ur,Xr="__reactProps$"+ur,Ze="__reactContainer$"+ur,Oo="__reactEvents$"+ur,Gm="__reactListeners$"+ur,jm="__reactHandles$"+ur;function Ot(n){var e=n[Ve];if(e)return e;for(var r=n.parentNode;r;){if(e=r[Ze]||r[Ve]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(n=ju(n);n!==null;){if(r=n[Ve])return r;n=ju(n)}return e}n=r,r=n.parentNode}return null}function Zr(n){return n=n[Ve]||n[Ze],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function cr(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(i(33))}function Xi(n){return n[Xr]||null}var bo=[],dr=-1;function kt(n){return{current:n}}function zn(n){0>dr||(n.current=bo[dr],bo[dr]=null,dr--)}function Fn(n,e){dr++,bo[dr]=n.current,n.current=e}var At={},re=kt(At),pe=kt(!1),bt=At;function pr(n,e){var r=n.type.contextTypes;if(!r)return At;var o=n.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===e)return o.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in r)d[p]=e[p];return o&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=d),d}function fe(n){return n=n.childContextTypes,n!=null}function Zi(){zn(pe),zn(re)}function Hu(n,e,r){if(re.current!==At)throw Error(i(168));Fn(re,e),Fn(pe,r)}function Uu(n,e,r){var o=n.stateNode;if(e=e.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var d in o)if(!(d in e))throw Error(i(108,Rn(n)||"Unknown",d));return S({},r,o)}function nl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||At,bt=re.current,Fn(re,n),Fn(pe,pe.current),!0}function Wu(n,e,r){var o=n.stateNode;if(!o)throw Error(i(169));r?(n=Uu(n,e,bt),o.__reactInternalMemoizedMergedChildContext=n,zn(pe),zn(re),Fn(re,n)):zn(pe),Fn(pe,r)}var nt=null,el=!1,Fo=!1;function Vu(n){nt===null?nt=[n]:nt.push(n)}function Hm(n){el=!0,Vu(n)}function vt(){if(!Fo&&nt!==null){Fo=!0;var n=0,e=Mn;try{var r=nt;for(Mn=1;n<r.length;n++){var o=r[n];do o=o(!0);while(o!==null)}nt=null,el=!1}catch(d){throw nt!==null&&(nt=nt.slice(n+1)),Qs(ro,vt),d}finally{Mn=e,Fo=!1}}return null}var fr=[],mr=0,tl=null,rl=0,Le=[],Re=0,Ft=null,et=1,tt="";function Nt(n,e){fr[mr++]=rl,fr[mr++]=tl,tl=n,rl=e}function qu(n,e,r){Le[Re++]=et,Le[Re++]=tt,Le[Re++]=Ft,Ft=n;var o=et;n=tt;var d=32-be(o)-1;o&=~(1<<d),r+=1;var p=32-be(e)+d;if(30<p){var y=d-d%5;p=(o&(1<<y)-1).toString(32),o>>=y,d-=y,et=1<<32-be(e)+d|r<<d|o,tt=p+n}else et=1<<p|r<<d|o,tt=n}function No(n){n.return!==null&&(Nt(n,1),qu(n,1,0))}function zo(n){for(;n===tl;)tl=fr[--mr],fr[mr]=null,rl=fr[--mr],fr[mr]=null;for(;n===Ft;)Ft=Le[--Re],Le[Re]=null,tt=Le[--Re],Le[Re]=null,et=Le[--Re],Le[Re]=null}var we=null,Ce=null,Bn=!1,Ne=null;function Qu(n,e){var r=Me(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=n,e=n.deletions,e===null?(n.deletions=[r],n.flags|=16):e.push(r)}function $u(n,e){switch(n.tag){case 5:var r=n.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,we=n,Ce=yt(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,we=n,Ce=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=Ft!==null?{id:et,overflow:tt}:null,n.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=Me(18,null,null,0),r.stateNode=e,r.return=n,n.child=r,we=n,Ce=null,!0):!1;default:return!1}}function Bo(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Go(n){if(Bn){var e=Ce;if(e){var r=e;if(!$u(n,e)){if(Bo(n))throw Error(i(418));e=yt(r.nextSibling);var o=we;e&&$u(n,e)?Qu(o,r):(n.flags=n.flags&-4097|2,Bn=!1,we=n)}}else{if(Bo(n))throw Error(i(418));n.flags=n.flags&-4097|2,Bn=!1,we=n}}}function Ju(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;we=n}function il(n){if(n!==we)return!1;if(!Bn)return Ju(n),Bn=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Do(n.type,n.memoizedProps)),e&&(e=Ce)){if(Bo(n))throw Ku(),Error(i(418));for(;e;)Qu(n,e),e=yt(e.nextSibling)}if(Ju(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));n:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var r=n.data;if(r==="/$"){if(e===0){Ce=yt(n.nextSibling);break n}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}n=n.nextSibling}Ce=null}}else Ce=we?yt(n.stateNode.nextSibling):null;return!0}function Ku(){for(var n=Ce;n;)n=yt(n.nextSibling)}function gr(){Ce=we=null,Bn=!1}function jo(n){Ne===null?Ne=[n]:Ne.push(n)}var Um=rn.ReactCurrentBatchConfig;function ni(n,e,r){if(n=r.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(i(309));var o=r.stateNode}if(!o)throw Error(i(147,n));var d=o,p=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===p?e.ref:(e=function(y){var w=d.refs;y===null?delete w[p]:w[p]=y},e._stringRef=p,e)}if(typeof n!="string")throw Error(i(284));if(!r._owner)throw Error(i(290,n))}return n}function ll(n,e){throw n=Object.prototype.toString.call(e),Error(i(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Yu(n){var e=n._init;return e(n._payload)}function Xu(n){function e(L,I){if(n){var P=L.deletions;P===null?(L.deletions=[I],L.flags|=16):P.push(I)}}function r(L,I){if(!n)return null;for(;I!==null;)e(L,I),I=I.sibling;return null}function o(L,I){for(L=new Map;I!==null;)I.key!==null?L.set(I.key,I):L.set(I.index,I),I=I.sibling;return L}function d(L,I){return L=Lt(L,I),L.index=0,L.sibling=null,L}function p(L,I,P){return L.index=P,n?(P=L.alternate,P!==null?(P=P.index,P<I?(L.flags|=2,I):P):(L.flags|=2,I)):(L.flags|=1048576,I)}function y(L){return n&&L.alternate===null&&(L.flags|=2),L}function w(L,I,P,q){return I===null||I.tag!==6?(I=Ta(P,L.mode,q),I.return=L,I):(I=d(I,P),I.return=L,I)}function x(L,I,P,q){var on=P.type;return on===V?G(L,I,P.props.children,q,P.key):I!==null&&(I.elementType===on||typeof on=="object"&&on!==null&&on.$$typeof===xn&&Yu(on)===I.type)?(q=d(I,P.props),q.ref=ni(L,I,P),q.return=L,q):(q=Rl(P.type,P.key,P.props,null,L.mode,q),q.ref=ni(L,I,P),q.return=L,q)}function T(L,I,P,q){return I===null||I.tag!==4||I.stateNode.containerInfo!==P.containerInfo||I.stateNode.implementation!==P.implementation?(I=Ma(P,L.mode,q),I.return=L,I):(I=d(I,P.children||[]),I.return=L,I)}function G(L,I,P,q,on){return I===null||I.tag!==7?(I=Vt(P,L.mode,q,on),I.return=L,I):(I=d(I,P),I.return=L,I)}function j(L,I,P){if(typeof I=="string"&&I!==""||typeof I=="number")return I=Ta(""+I,L.mode,P),I.return=L,I;if(typeof I=="object"&&I!==null){switch(I.$$typeof){case un:return P=Rl(I.type,I.key,I.props,null,L.mode,P),P.ref=ni(L,null,I),P.return=L,P;case O:return I=Ma(I,L.mode,P),I.return=L,I;case xn:var q=I._init;return j(L,q(I._payload),P)}if(st(I)||sn(I))return I=Vt(I,L.mode,P,null),I.return=L,I;ll(L,I)}return null}function z(L,I,P,q){var on=I!==null?I.key:null;if(typeof P=="string"&&P!==""||typeof P=="number")return on!==null?null:w(L,I,""+P,q);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case un:return P.key===on?x(L,I,P,q):null;case O:return P.key===on?T(L,I,P,q):null;case xn:return on=P._init,z(L,I,on(P._payload),q)}if(st(P)||sn(P))return on!==null?null:G(L,I,P,q,null);ll(L,P)}return null}function X(L,I,P,q,on){if(typeof q=="string"&&q!==""||typeof q=="number")return L=L.get(P)||null,w(I,L,""+q,on);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case un:return L=L.get(q.key===null?P:q.key)||null,x(I,L,q,on);case O:return L=L.get(q.key===null?P:q.key)||null,T(I,L,q,on);case xn:var dn=q._init;return X(L,I,P,dn(q._payload),on)}if(st(q)||sn(q))return L=L.get(P)||null,G(I,L,q,on,null);ll(I,q)}return null}function tn(L,I,P,q){for(var on=null,dn=null,pn=I,kn=I=0,Xn=null;pn!==null&&kn<P.length;kn++){pn.index>kn?(Xn=pn,pn=null):Xn=pn.sibling;var Pn=z(L,pn,P[kn],q);if(Pn===null){pn===null&&(pn=Xn);break}n&&pn&&Pn.alternate===null&&e(L,pn),I=p(Pn,I,kn),dn===null?on=Pn:dn.sibling=Pn,dn=Pn,pn=Xn}if(kn===P.length)return r(L,pn),Bn&&Nt(L,kn),on;if(pn===null){for(;kn<P.length;kn++)pn=j(L,P[kn],q),pn!==null&&(I=p(pn,I,kn),dn===null?on=pn:dn.sibling=pn,dn=pn);return Bn&&Nt(L,kn),on}for(pn=o(L,pn);kn<P.length;kn++)Xn=X(pn,L,kn,P[kn],q),Xn!==null&&(n&&Xn.alternate!==null&&pn.delete(Xn.key===null?kn:Xn.key),I=p(Xn,I,kn),dn===null?on=Xn:dn.sibling=Xn,dn=Xn);return n&&pn.forEach(function(Rt){return e(L,Rt)}),Bn&&Nt(L,kn),on}function ln(L,I,P,q){var on=sn(P);if(typeof on!="function")throw Error(i(150));if(P=on.call(P),P==null)throw Error(i(151));for(var dn=on=null,pn=I,kn=I=0,Xn=null,Pn=P.next();pn!==null&&!Pn.done;kn++,Pn=P.next()){pn.index>kn?(Xn=pn,pn=null):Xn=pn.sibling;var Rt=z(L,pn,Pn.value,q);if(Rt===null){pn===null&&(pn=Xn);break}n&&pn&&Rt.alternate===null&&e(L,pn),I=p(Rt,I,kn),dn===null?on=Rt:dn.sibling=Rt,dn=Rt,pn=Xn}if(Pn.done)return r(L,pn),Bn&&Nt(L,kn),on;if(pn===null){for(;!Pn.done;kn++,Pn=P.next())Pn=j(L,Pn.value,q),Pn!==null&&(I=p(Pn,I,kn),dn===null?on=Pn:dn.sibling=Pn,dn=Pn);return Bn&&Nt(L,kn),on}for(pn=o(L,pn);!Pn.done;kn++,Pn=P.next())Pn=X(pn,L,kn,Pn.value,q),Pn!==null&&(n&&Pn.alternate!==null&&pn.delete(Pn.key===null?kn:Pn.key),I=p(Pn,I,kn),dn===null?on=Pn:dn.sibling=Pn,dn=Pn);return n&&pn.forEach(function(wg){return e(L,wg)}),Bn&&Nt(L,kn),on}function Wn(L,I,P,q){if(typeof P=="object"&&P!==null&&P.type===V&&P.key===null&&(P=P.props.children),typeof P=="object"&&P!==null){switch(P.$$typeof){case un:n:{for(var on=P.key,dn=I;dn!==null;){if(dn.key===on){if(on=P.type,on===V){if(dn.tag===7){r(L,dn.sibling),I=d(dn,P.props.children),I.return=L,L=I;break n}}else if(dn.elementType===on||typeof on=="object"&&on!==null&&on.$$typeof===xn&&Yu(on)===dn.type){r(L,dn.sibling),I=d(dn,P.props),I.ref=ni(L,dn,P),I.return=L,L=I;break n}r(L,dn);break}else e(L,dn);dn=dn.sibling}P.type===V?(I=Vt(P.props.children,L.mode,q,P.key),I.return=L,L=I):(q=Rl(P.type,P.key,P.props,null,L.mode,q),q.ref=ni(L,I,P),q.return=L,L=q)}return y(L);case O:n:{for(dn=P.key;I!==null;){if(I.key===dn)if(I.tag===4&&I.stateNode.containerInfo===P.containerInfo&&I.stateNode.implementation===P.implementation){r(L,I.sibling),I=d(I,P.children||[]),I.return=L,L=I;break n}else{r(L,I);break}else e(L,I);I=I.sibling}I=Ma(P,L.mode,q),I.return=L,L=I}return y(L);case xn:return dn=P._init,Wn(L,I,dn(P._payload),q)}if(st(P))return tn(L,I,P,q);if(sn(P))return ln(L,I,P,q);ll(L,P)}return typeof P=="string"&&P!==""||typeof P=="number"?(P=""+P,I!==null&&I.tag===6?(r(L,I.sibling),I=d(I,P),I.return=L,L=I):(r(L,I),I=Ta(P,L.mode,q),I.return=L,L=I),y(L)):r(L,I)}return Wn}var hr=Xu(!0),Zu=Xu(!1),ol=kt(null),al=null,yr=null,Ho=null;function Uo(){Ho=yr=al=null}function Wo(n){var e=ol.current;zn(ol),n._currentValue=e}function Vo(n,e,r){for(;n!==null;){var o=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,o!==null&&(o.childLanes|=e)):o!==null&&(o.childLanes&e)!==e&&(o.childLanes|=e),n===r)break;n=n.return}}function kr(n,e){al=n,Ho=yr=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&e)!==0&&(me=!0),n.firstContext=null)}function Pe(n){var e=n._currentValue;if(Ho!==n)if(n={context:n,memoizedValue:e,next:null},yr===null){if(al===null)throw Error(i(308));yr=n,al.dependencies={lanes:0,firstContext:n}}else yr=yr.next=n;return e}var zt=null;function qo(n){zt===null?zt=[n]:zt.push(n)}function nc(n,e,r,o){var d=e.interleaved;return d===null?(r.next=r,qo(e)):(r.next=d.next,d.next=r),e.interleaved=r,rt(n,o)}function rt(n,e){n.lanes|=e;var r=n.alternate;for(r!==null&&(r.lanes|=e),r=n,n=n.return;n!==null;)n.childLanes|=e,r=n.alternate,r!==null&&(r.childLanes|=e),r=n,n=n.return;return r.tag===3?r.stateNode:null}var St=!1;function Qo(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ec(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function it(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function wt(n,e,r){var o=n.updateQueue;if(o===null)return null;if(o=o.shared,(Ln&2)!==0){var d=o.pending;return d===null?e.next=e:(e.next=d.next,d.next=e),o.pending=e,rt(n,r)}return d=o.interleaved,d===null?(e.next=e,qo(o)):(e.next=d.next,d.next=e),o.interleaved=e,rt(n,r)}function sl(n,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var o=e.lanes;o&=n.pendingLanes,r|=o,e.lanes=r,oo(n,r)}}function tc(n,e){var r=n.updateQueue,o=n.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var d=null,p=null;if(r=r.firstBaseUpdate,r!==null){do{var y={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};p===null?d=p=y:p=p.next=y,r=r.next}while(r!==null);p===null?d=p=e:p=p.next=e}else d=p=e;r={baseState:o.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:o.shared,effects:o.effects},n.updateQueue=r;return}n=r.lastBaseUpdate,n===null?r.firstBaseUpdate=e:n.next=e,r.lastBaseUpdate=e}function ul(n,e,r,o){var d=n.updateQueue;St=!1;var p=d.firstBaseUpdate,y=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var x=w,T=x.next;x.next=null,y===null?p=T:y.next=T,y=x;var G=n.alternate;G!==null&&(G=G.updateQueue,w=G.lastBaseUpdate,w!==y&&(w===null?G.firstBaseUpdate=T:w.next=T,G.lastBaseUpdate=x))}if(p!==null){var j=d.baseState;y=0,G=T=x=null,w=p;do{var z=w.lane,X=w.eventTime;if((o&z)===z){G!==null&&(G=G.next={eventTime:X,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});n:{var tn=n,ln=w;switch(z=e,X=r,ln.tag){case 1:if(tn=ln.payload,typeof tn=="function"){j=tn.call(X,j,z);break n}j=tn;break n;case 3:tn.flags=tn.flags&-65537|128;case 0:if(tn=ln.payload,z=typeof tn=="function"?tn.call(X,j,z):tn,z==null)break n;j=S({},j,z);break n;case 2:St=!0}}w.callback!==null&&w.lane!==0&&(n.flags|=64,z=d.effects,z===null?d.effects=[w]:z.push(w))}else X={eventTime:X,lane:z,tag:w.tag,payload:w.payload,callback:w.callback,next:null},G===null?(T=G=X,x=j):G=G.next=X,y|=z;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;z=w,w=z.next,z.next=null,d.lastBaseUpdate=z,d.shared.pending=null}}while(!0);if(G===null&&(x=j),d.baseState=x,d.firstBaseUpdate=T,d.lastBaseUpdate=G,e=d.shared.interleaved,e!==null){d=e;do y|=d.lane,d=d.next;while(d!==e)}else p===null&&(d.shared.lanes=0);jt|=y,n.lanes=y,n.memoizedState=j}}function rc(n,e,r){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var o=n[e],d=o.callback;if(d!==null){if(o.callback=null,o=r,typeof d!="function")throw Error(i(191,d));d.call(o)}}}var ei={},qe=kt(ei),ti=kt(ei),ri=kt(ei);function Bt(n){if(n===ei)throw Error(i(174));return n}function $o(n,e){switch(Fn(ri,e),Fn(ti,n),Fn(qe,ei),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:K(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=K(e,n)}zn(qe),Fn(qe,e)}function Ar(){zn(qe),zn(ti),zn(ri)}function ic(n){Bt(ri.current);var e=Bt(qe.current),r=K(e,n.type);e!==r&&(Fn(ti,n),Fn(qe,r))}function Jo(n){ti.current===n&&(zn(qe),zn(ti))}var Gn=kt(0);function cl(n){for(var e=n;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ko=[];function Yo(){for(var n=0;n<Ko.length;n++)Ko[n]._workInProgressVersionPrimary=null;Ko.length=0}var dl=rn.ReactCurrentDispatcher,Xo=rn.ReactCurrentBatchConfig,Gt=0,jn=null,$n=null,Kn=null,pl=!1,ii=!1,li=0,Wm=0;function ie(){throw Error(i(321))}function Zo(n,e){if(e===null)return!1;for(var r=0;r<e.length&&r<n.length;r++)if(!Fe(n[r],e[r]))return!1;return!0}function na(n,e,r,o,d,p){if(Gt=p,jn=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,dl.current=n===null||n.memoizedState===null?$m:Jm,n=r(o,d),ii){p=0;do{if(ii=!1,li=0,25<=p)throw Error(i(301));p+=1,Kn=$n=null,e.updateQueue=null,dl.current=Km,n=r(o,d)}while(ii)}if(dl.current=gl,e=$n!==null&&$n.next!==null,Gt=0,Kn=$n=jn=null,pl=!1,e)throw Error(i(300));return n}function ea(){var n=li!==0;return li=0,n}function Qe(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Kn===null?jn.memoizedState=Kn=n:Kn=Kn.next=n,Kn}function De(){if($n===null){var n=jn.alternate;n=n!==null?n.memoizedState:null}else n=$n.next;var e=Kn===null?jn.memoizedState:Kn.next;if(e!==null)Kn=e,$n=n;else{if(n===null)throw Error(i(310));$n=n,n={memoizedState:$n.memoizedState,baseState:$n.baseState,baseQueue:$n.baseQueue,queue:$n.queue,next:null},Kn===null?jn.memoizedState=Kn=n:Kn=Kn.next=n}return Kn}function oi(n,e){return typeof e=="function"?e(n):e}function ta(n){var e=De(),r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var o=$n,d=o.baseQueue,p=r.pending;if(p!==null){if(d!==null){var y=d.next;d.next=p.next,p.next=y}o.baseQueue=d=p,r.pending=null}if(d!==null){p=d.next,o=o.baseState;var w=y=null,x=null,T=p;do{var G=T.lane;if((Gt&G)===G)x!==null&&(x=x.next={lane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),o=T.hasEagerState?T.eagerState:n(o,T.action);else{var j={lane:G,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null};x===null?(w=x=j,y=o):x=x.next=j,jn.lanes|=G,jt|=G}T=T.next}while(T!==null&&T!==p);x===null?y=o:x.next=w,Fe(o,e.memoizedState)||(me=!0),e.memoizedState=o,e.baseState=y,e.baseQueue=x,r.lastRenderedState=o}if(n=r.interleaved,n!==null){d=n;do p=d.lane,jn.lanes|=p,jt|=p,d=d.next;while(d!==n)}else d===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function ra(n){var e=De(),r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var o=r.dispatch,d=r.pending,p=e.memoizedState;if(d!==null){r.pending=null;var y=d=d.next;do p=n(p,y.action),y=y.next;while(y!==d);Fe(p,e.memoizedState)||(me=!0),e.memoizedState=p,e.baseQueue===null&&(e.baseState=p),r.lastRenderedState=p}return[p,o]}function lc(){}function oc(n,e){var r=jn,o=De(),d=e(),p=!Fe(o.memoizedState,d);if(p&&(o.memoizedState=d,me=!0),o=o.queue,ia(uc.bind(null,r,o,n),[n]),o.getSnapshot!==e||p||Kn!==null&&Kn.memoizedState.tag&1){if(r.flags|=2048,ai(9,sc.bind(null,r,o,d,e),void 0,null),Yn===null)throw Error(i(349));(Gt&30)!==0||ac(r,e,d)}return d}function ac(n,e,r){n.flags|=16384,n={getSnapshot:e,value:r},e=jn.updateQueue,e===null?(e={lastEffect:null,stores:null},jn.updateQueue=e,e.stores=[n]):(r=e.stores,r===null?e.stores=[n]:r.push(n))}function sc(n,e,r,o){e.value=r,e.getSnapshot=o,cc(e)&&dc(n)}function uc(n,e,r){return r(function(){cc(e)&&dc(n)})}function cc(n){var e=n.getSnapshot;n=n.value;try{var r=e();return!Fe(n,r)}catch{return!0}}function dc(n){var e=rt(n,1);e!==null&&je(e,n,1,-1)}function pc(n){var e=Qe();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oi,lastRenderedState:n},e.queue=n,n=n.dispatch=Qm.bind(null,jn,n),[e.memoizedState,n]}function ai(n,e,r,o){return n={tag:n,create:e,destroy:r,deps:o,next:null},e=jn.updateQueue,e===null?(e={lastEffect:null,stores:null},jn.updateQueue=e,e.lastEffect=n.next=n):(r=e.lastEffect,r===null?e.lastEffect=n.next=n:(o=r.next,r.next=n,n.next=o,e.lastEffect=n)),n}function fc(){return De().memoizedState}function fl(n,e,r,o){var d=Qe();jn.flags|=n,d.memoizedState=ai(1|e,r,void 0,o===void 0?null:o)}function ml(n,e,r,o){var d=De();o=o===void 0?null:o;var p=void 0;if($n!==null){var y=$n.memoizedState;if(p=y.destroy,o!==null&&Zo(o,y.deps)){d.memoizedState=ai(e,r,p,o);return}}jn.flags|=n,d.memoizedState=ai(1|e,r,p,o)}function mc(n,e){return fl(8390656,8,n,e)}function ia(n,e){return ml(2048,8,n,e)}function gc(n,e){return ml(4,2,n,e)}function hc(n,e){return ml(4,4,n,e)}function yc(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function kc(n,e,r){return r=r!=null?r.concat([n]):null,ml(4,4,yc.bind(null,e,n),r)}function la(){}function Ac(n,e){var r=De();e=e===void 0?null:e;var o=r.memoizedState;return o!==null&&e!==null&&Zo(e,o[1])?o[0]:(r.memoizedState=[n,e],n)}function vc(n,e){var r=De();e=e===void 0?null:e;var o=r.memoizedState;return o!==null&&e!==null&&Zo(e,o[1])?o[0]:(n=n(),r.memoizedState=[n,e],n)}function Sc(n,e,r){return(Gt&21)===0?(n.baseState&&(n.baseState=!1,me=!0),n.memoizedState=r):(Fe(r,e)||(r=Ys(),jn.lanes|=r,jt|=r,n.baseState=!0),e)}function Vm(n,e){var r=Mn;Mn=r!==0&&4>r?r:4,n(!0);var o=Xo.transition;Xo.transition={};try{n(!1),e()}finally{Mn=r,Xo.transition=o}}function wc(){return De().memoizedState}function qm(n,e,r){var o=Et(n);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},Cc(n))xc(e,r);else if(r=nc(n,e,r,o),r!==null){var d=ce();je(r,n,o,d),Ic(r,e,o)}}function Qm(n,e,r){var o=Et(n),d={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(Cc(n))xc(e,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=e.lastRenderedReducer,p!==null))try{var y=e.lastRenderedState,w=p(y,r);if(d.hasEagerState=!0,d.eagerState=w,Fe(w,y)){var x=e.interleaved;x===null?(d.next=d,qo(e)):(d.next=x.next,x.next=d),e.interleaved=d;return}}catch{}finally{}r=nc(n,e,d,o),r!==null&&(d=ce(),je(r,n,o,d),Ic(r,e,o))}}function Cc(n){var e=n.alternate;return n===jn||e!==null&&e===jn}function xc(n,e){ii=pl=!0;var r=n.pending;r===null?e.next=e:(e.next=r.next,r.next=e),n.pending=e}function Ic(n,e,r){if((r&4194240)!==0){var o=e.lanes;o&=n.pendingLanes,r|=o,e.lanes=r,oo(n,r)}}var gl={readContext:Pe,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},$m={readContext:Pe,useCallback:function(n,e){return Qe().memoizedState=[n,e===void 0?null:e],n},useContext:Pe,useEffect:mc,useImperativeHandle:function(n,e,r){return r=r!=null?r.concat([n]):null,fl(4194308,4,yc.bind(null,e,n),r)},useLayoutEffect:function(n,e){return fl(4194308,4,n,e)},useInsertionEffect:function(n,e){return fl(4,2,n,e)},useMemo:function(n,e){var r=Qe();return e=e===void 0?null:e,n=n(),r.memoizedState=[n,e],n},useReducer:function(n,e,r){var o=Qe();return e=r!==void 0?r(e):e,o.memoizedState=o.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},o.queue=n,n=n.dispatch=qm.bind(null,jn,n),[o.memoizedState,n]},useRef:function(n){var e=Qe();return n={current:n},e.memoizedState=n},useState:pc,useDebugValue:la,useDeferredValue:function(n){return Qe().memoizedState=n},useTransition:function(){var n=pc(!1),e=n[0];return n=Vm.bind(null,n[1]),Qe().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,r){var o=jn,d=Qe();if(Bn){if(r===void 0)throw Error(i(407));r=r()}else{if(r=e(),Yn===null)throw Error(i(349));(Gt&30)!==0||ac(o,e,r)}d.memoizedState=r;var p={value:r,getSnapshot:e};return d.queue=p,mc(uc.bind(null,o,p,n),[n]),o.flags|=2048,ai(9,sc.bind(null,o,p,r,e),void 0,null),r},useId:function(){var n=Qe(),e=Yn.identifierPrefix;if(Bn){var r=tt,o=et;r=(o&~(1<<32-be(o)-1)).toString(32)+r,e=":"+e+"R"+r,r=li++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=Wm++,e=":"+e+"r"+r.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Jm={readContext:Pe,useCallback:Ac,useContext:Pe,useEffect:ia,useImperativeHandle:kc,useInsertionEffect:gc,useLayoutEffect:hc,useMemo:vc,useReducer:ta,useRef:fc,useState:function(){return ta(oi)},useDebugValue:la,useDeferredValue:function(n){var e=De();return Sc(e,$n.memoizedState,n)},useTransition:function(){var n=ta(oi)[0],e=De().memoizedState;return[n,e]},useMutableSource:lc,useSyncExternalStore:oc,useId:wc,unstable_isNewReconciler:!1},Km={readContext:Pe,useCallback:Ac,useContext:Pe,useEffect:ia,useImperativeHandle:kc,useInsertionEffect:gc,useLayoutEffect:hc,useMemo:vc,useReducer:ra,useRef:fc,useState:function(){return ra(oi)},useDebugValue:la,useDeferredValue:function(n){var e=De();return $n===null?e.memoizedState=n:Sc(e,$n.memoizedState,n)},useTransition:function(){var n=ra(oi)[0],e=De().memoizedState;return[n,e]},useMutableSource:lc,useSyncExternalStore:oc,useId:wc,unstable_isNewReconciler:!1};function ze(n,e){if(n&&n.defaultProps){e=S({},e),n=n.defaultProps;for(var r in n)e[r]===void 0&&(e[r]=n[r]);return e}return e}function oa(n,e,r,o){e=n.memoizedState,r=r(o,e),r=r==null?e:S({},e,r),n.memoizedState=r,n.lanes===0&&(n.updateQueue.baseState=r)}var hl={isMounted:function(n){return(n=n._reactInternals)?Mt(n)===n:!1},enqueueSetState:function(n,e,r){n=n._reactInternals;var o=ce(),d=Et(n),p=it(o,d);p.payload=e,r!=null&&(p.callback=r),e=wt(n,p,d),e!==null&&(je(e,n,d,o),sl(e,n,d))},enqueueReplaceState:function(n,e,r){n=n._reactInternals;var o=ce(),d=Et(n),p=it(o,d);p.tag=1,p.payload=e,r!=null&&(p.callback=r),e=wt(n,p,d),e!==null&&(je(e,n,d,o),sl(e,n,d))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var r=ce(),o=Et(n),d=it(r,o);d.tag=2,e!=null&&(d.callback=e),e=wt(n,d,o),e!==null&&(je(e,n,o,r),sl(e,n,o))}};function Ec(n,e,r,o,d,p,y){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(o,p,y):e.prototype&&e.prototype.isPureReactComponent?!Qr(r,o)||!Qr(d,p):!0}function _c(n,e,r){var o=!1,d=At,p=e.contextType;return typeof p=="object"&&p!==null?p=Pe(p):(d=fe(e)?bt:re.current,o=e.contextTypes,p=(o=o!=null)?pr(n,d):At),e=new e(r,p),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hl,n.stateNode=e,e._reactInternals=n,o&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),e}function Lc(n,e,r,o){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,o),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,o),e.state!==n&&hl.enqueueReplaceState(e,e.state,null)}function aa(n,e,r,o){var d=n.stateNode;d.props=r,d.state=n.memoizedState,d.refs={},Qo(n);var p=e.contextType;typeof p=="object"&&p!==null?d.context=Pe(p):(p=fe(e)?bt:re.current,d.context=pr(n,p)),d.state=n.memoizedState,p=e.getDerivedStateFromProps,typeof p=="function"&&(oa(n,e,p,r),d.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(e=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),e!==d.state&&hl.enqueueReplaceState(d,d.state,null),ul(n,r,d,o),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function vr(n,e){try{var r="",o=e;do r+=vn(o),o=o.return;while(o);var d=r}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:e,stack:d,digest:null}}function sa(n,e,r){return{value:n,source:null,stack:r??null,digest:e??null}}function ua(n,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var Ym=typeof WeakMap=="function"?WeakMap:Map;function Rc(n,e,r){r=it(-1,r),r.tag=3,r.payload={element:null};var o=e.value;return r.callback=function(){Cl||(Cl=!0,xa=o),ua(n,e)},r}function Pc(n,e,r){r=it(-1,r),r.tag=3;var o=n.type.getDerivedStateFromError;if(typeof o=="function"){var d=e.value;r.payload=function(){return o(d)},r.callback=function(){ua(n,e)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(r.callback=function(){ua(n,e),typeof o!="function"&&(xt===null?xt=new Set([this]):xt.add(this));var y=e.stack;this.componentDidCatch(e.value,{componentStack:y!==null?y:""})}),r}function Dc(n,e,r){var o=n.pingCache;if(o===null){o=n.pingCache=new Ym;var d=new Set;o.set(e,d)}else d=o.get(e),d===void 0&&(d=new Set,o.set(e,d));d.has(r)||(d.add(r),n=dg.bind(null,n,e,r),e.then(n,n))}function Tc(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Mc(n,e,r,o,d){return(n.mode&1)===0?(n===e?n.flags|=65536:(n.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=it(-1,1),e.tag=2,wt(r,e,1))),r.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Xm=rn.ReactCurrentOwner,me=!1;function ue(n,e,r,o){e.child=n===null?Zu(e,null,r,o):hr(e,n.child,r,o)}function Oc(n,e,r,o,d){r=r.render;var p=e.ref;return kr(e,d),o=na(n,e,r,o,p,d),r=ea(),n!==null&&!me?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~d,lt(n,e,d)):(Bn&&r&&No(e),e.flags|=1,ue(n,e,o,d),e.child)}function bc(n,e,r,o,d){if(n===null){var p=r.type;return typeof p=="function"&&!Da(p)&&p.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=p,Fc(n,e,p,o,d)):(n=Rl(r.type,null,o,e,e.mode,d),n.ref=e.ref,n.return=e,e.child=n)}if(p=n.child,(n.lanes&d)===0){var y=p.memoizedProps;if(r=r.compare,r=r!==null?r:Qr,r(y,o)&&n.ref===e.ref)return lt(n,e,d)}return e.flags|=1,n=Lt(p,o),n.ref=e.ref,n.return=e,e.child=n}function Fc(n,e,r,o,d){if(n!==null){var p=n.memoizedProps;if(Qr(p,o)&&n.ref===e.ref)if(me=!1,e.pendingProps=o=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(me=!0);else return e.lanes=n.lanes,lt(n,e,d)}return ca(n,e,r,o,d)}function Nc(n,e,r){var o=e.pendingProps,d=o.children,p=n!==null?n.memoizedState:null;if(o.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Fn(wr,xe),xe|=r;else{if((r&1073741824)===0)return n=p!==null?p.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Fn(wr,xe),xe|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=p!==null?p.baseLanes:r,Fn(wr,xe),xe|=o}else p!==null?(o=p.baseLanes|r,e.memoizedState=null):o=r,Fn(wr,xe),xe|=o;return ue(n,e,d,r),e.child}function zc(n,e){var r=e.ref;(n===null&&r!==null||n!==null&&n.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function ca(n,e,r,o,d){var p=fe(r)?bt:re.current;return p=pr(e,p),kr(e,d),r=na(n,e,r,o,p,d),o=ea(),n!==null&&!me?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~d,lt(n,e,d)):(Bn&&o&&No(e),e.flags|=1,ue(n,e,r,d),e.child)}function Bc(n,e,r,o,d){if(fe(r)){var p=!0;nl(e)}else p=!1;if(kr(e,d),e.stateNode===null)kl(n,e),_c(e,r,o),aa(e,r,o,d),o=!0;else if(n===null){var y=e.stateNode,w=e.memoizedProps;y.props=w;var x=y.context,T=r.contextType;typeof T=="object"&&T!==null?T=Pe(T):(T=fe(r)?bt:re.current,T=pr(e,T));var G=r.getDerivedStateFromProps,j=typeof G=="function"||typeof y.getSnapshotBeforeUpdate=="function";j||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(w!==o||x!==T)&&Lc(e,y,o,T),St=!1;var z=e.memoizedState;y.state=z,ul(e,o,y,d),x=e.memoizedState,w!==o||z!==x||pe.current||St?(typeof G=="function"&&(oa(e,r,G,o),x=e.memoizedState),(w=St||Ec(e,r,w,o,z,x,T))?(j||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount()),typeof y.componentDidMount=="function"&&(e.flags|=4194308)):(typeof y.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=o,e.memoizedState=x),y.props=o,y.state=x,y.context=T,o=w):(typeof y.componentDidMount=="function"&&(e.flags|=4194308),o=!1)}else{y=e.stateNode,ec(n,e),w=e.memoizedProps,T=e.type===e.elementType?w:ze(e.type,w),y.props=T,j=e.pendingProps,z=y.context,x=r.contextType,typeof x=="object"&&x!==null?x=Pe(x):(x=fe(r)?bt:re.current,x=pr(e,x));var X=r.getDerivedStateFromProps;(G=typeof X=="function"||typeof y.getSnapshotBeforeUpdate=="function")||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(w!==j||z!==x)&&Lc(e,y,o,x),St=!1,z=e.memoizedState,y.state=z,ul(e,o,y,d);var tn=e.memoizedState;w!==j||z!==tn||pe.current||St?(typeof X=="function"&&(oa(e,r,X,o),tn=e.memoizedState),(T=St||Ec(e,r,T,o,z,tn,x)||!1)?(G||typeof y.UNSAFE_componentWillUpdate!="function"&&typeof y.componentWillUpdate!="function"||(typeof y.componentWillUpdate=="function"&&y.componentWillUpdate(o,tn,x),typeof y.UNSAFE_componentWillUpdate=="function"&&y.UNSAFE_componentWillUpdate(o,tn,x)),typeof y.componentDidUpdate=="function"&&(e.flags|=4),typeof y.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof y.componentDidUpdate!="function"||w===n.memoizedProps&&z===n.memoizedState||(e.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&z===n.memoizedState||(e.flags|=1024),e.memoizedProps=o,e.memoizedState=tn),y.props=o,y.state=tn,y.context=x,o=T):(typeof y.componentDidUpdate!="function"||w===n.memoizedProps&&z===n.memoizedState||(e.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&z===n.memoizedState||(e.flags|=1024),o=!1)}return da(n,e,r,o,p,d)}function da(n,e,r,o,d,p){zc(n,e);var y=(e.flags&128)!==0;if(!o&&!y)return d&&Wu(e,r,!1),lt(n,e,p);o=e.stateNode,Xm.current=e;var w=y&&typeof r.getDerivedStateFromError!="function"?null:o.render();return e.flags|=1,n!==null&&y?(e.child=hr(e,n.child,null,p),e.child=hr(e,null,w,p)):ue(n,e,w,p),e.memoizedState=o.state,d&&Wu(e,r,!0),e.child}function Gc(n){var e=n.stateNode;e.pendingContext?Hu(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Hu(n,e.context,!1),$o(n,e.containerInfo)}function jc(n,e,r,o,d){return gr(),jo(d),e.flags|=256,ue(n,e,r,o),e.child}var pa={dehydrated:null,treeContext:null,retryLane:0};function fa(n){return{baseLanes:n,cachePool:null,transitions:null}}function Hc(n,e,r){var o=e.pendingProps,d=Gn.current,p=!1,y=(e.flags&128)!==0,w;if((w=y)||(w=n!==null&&n.memoizedState===null?!1:(d&2)!==0),w?(p=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Fn(Gn,d&1),n===null)return Go(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((e.mode&1)===0?e.lanes=1:n.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(y=o.children,n=o.fallback,p?(o=e.mode,p=e.child,y={mode:"hidden",children:y},(o&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=y):p=Pl(y,o,0,null),n=Vt(n,o,r,null),p.return=e,n.return=e,p.sibling=n,e.child=p,e.child.memoizedState=fa(r),e.memoizedState=pa,n):ma(e,y));if(d=n.memoizedState,d!==null&&(w=d.dehydrated,w!==null))return Zm(n,e,y,o,w,d,r);if(p){p=o.fallback,y=e.mode,d=n.child,w=d.sibling;var x={mode:"hidden",children:o.children};return(y&1)===0&&e.child!==d?(o=e.child,o.childLanes=0,o.pendingProps=x,e.deletions=null):(o=Lt(d,x),o.subtreeFlags=d.subtreeFlags&14680064),w!==null?p=Lt(w,p):(p=Vt(p,y,r,null),p.flags|=2),p.return=e,o.return=e,o.sibling=p,e.child=o,o=p,p=e.child,y=n.child.memoizedState,y=y===null?fa(r):{baseLanes:y.baseLanes|r,cachePool:null,transitions:y.transitions},p.memoizedState=y,p.childLanes=n.childLanes&~r,e.memoizedState=pa,o}return p=n.child,n=p.sibling,o=Lt(p,{mode:"visible",children:o.children}),(e.mode&1)===0&&(o.lanes=r),o.return=e,o.sibling=null,n!==null&&(r=e.deletions,r===null?(e.deletions=[n],e.flags|=16):r.push(n)),e.child=o,e.memoizedState=null,o}function ma(n,e){return e=Pl({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function yl(n,e,r,o){return o!==null&&jo(o),hr(e,n.child,null,r),n=ma(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Zm(n,e,r,o,d,p,y){if(r)return e.flags&256?(e.flags&=-257,o=sa(Error(i(422))),yl(n,e,y,o)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(p=o.fallback,d=e.mode,o=Pl({mode:"visible",children:o.children},d,0,null),p=Vt(p,d,y,null),p.flags|=2,o.return=e,p.return=e,o.sibling=p,e.child=o,(e.mode&1)!==0&&hr(e,n.child,null,y),e.child.memoizedState=fa(y),e.memoizedState=pa,p);if((e.mode&1)===0)return yl(n,e,y,null);if(d.data==="$!"){if(o=d.nextSibling&&d.nextSibling.dataset,o)var w=o.dgst;return o=w,p=Error(i(419)),o=sa(p,o,void 0),yl(n,e,y,o)}if(w=(y&n.childLanes)!==0,me||w){if(o=Yn,o!==null){switch(y&-y){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(o.suspendedLanes|y))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,rt(n,d),je(o,n,d,-1))}return Pa(),o=sa(Error(i(421))),yl(n,e,y,o)}return d.data==="$?"?(e.flags|=128,e.child=n.child,e=pg.bind(null,n),d._reactRetry=e,null):(n=p.treeContext,Ce=yt(d.nextSibling),we=e,Bn=!0,Ne=null,n!==null&&(Le[Re++]=et,Le[Re++]=tt,Le[Re++]=Ft,et=n.id,tt=n.overflow,Ft=e),e=ma(e,o.children),e.flags|=4096,e)}function Uc(n,e,r){n.lanes|=e;var o=n.alternate;o!==null&&(o.lanes|=e),Vo(n.return,e,r)}function ga(n,e,r,o,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:d}:(p.isBackwards=e,p.rendering=null,p.renderingStartTime=0,p.last=o,p.tail=r,p.tailMode=d)}function Wc(n,e,r){var o=e.pendingProps,d=o.revealOrder,p=o.tail;if(ue(n,e,o.children,r),o=Gn.current,(o&2)!==0)o=o&1|2,e.flags|=128;else{if(n!==null&&(n.flags&128)!==0)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Uc(n,r,e);else if(n.tag===19)Uc(n,r,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}o&=1}if(Fn(Gn,o),(e.mode&1)===0)e.memoizedState=null;else switch(d){case"forwards":for(r=e.child,d=null;r!==null;)n=r.alternate,n!==null&&cl(n)===null&&(d=r),r=r.sibling;r=d,r===null?(d=e.child,e.child=null):(d=r.sibling,r.sibling=null),ga(e,!1,d,r,p);break;case"backwards":for(r=null,d=e.child,e.child=null;d!==null;){if(n=d.alternate,n!==null&&cl(n)===null){e.child=d;break}n=d.sibling,d.sibling=r,r=d,d=n}ga(e,!0,r,null,p);break;case"together":ga(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function kl(n,e){(e.mode&1)===0&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function lt(n,e,r){if(n!==null&&(e.dependencies=n.dependencies),jt|=e.lanes,(r&e.childLanes)===0)return null;if(n!==null&&e.child!==n.child)throw Error(i(153));if(e.child!==null){for(n=e.child,r=Lt(n,n.pendingProps),e.child=r,r.return=e;n.sibling!==null;)n=n.sibling,r=r.sibling=Lt(n,n.pendingProps),r.return=e;r.sibling=null}return e.child}function ng(n,e,r){switch(e.tag){case 3:Gc(e),gr();break;case 5:ic(e);break;case 1:fe(e.type)&&nl(e);break;case 4:$o(e,e.stateNode.containerInfo);break;case 10:var o=e.type._context,d=e.memoizedProps.value;Fn(ol,o._currentValue),o._currentValue=d;break;case 13:if(o=e.memoizedState,o!==null)return o.dehydrated!==null?(Fn(Gn,Gn.current&1),e.flags|=128,null):(r&e.child.childLanes)!==0?Hc(n,e,r):(Fn(Gn,Gn.current&1),n=lt(n,e,r),n!==null?n.sibling:null);Fn(Gn,Gn.current&1);break;case 19:if(o=(r&e.childLanes)!==0,(n.flags&128)!==0){if(o)return Wc(n,e,r);e.flags|=128}if(d=e.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Fn(Gn,Gn.current),o)break;return null;case 22:case 23:return e.lanes=0,Nc(n,e,r)}return lt(n,e,r)}var Vc,ha,qc,Qc;Vc=function(n,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)n.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},ha=function(){},qc=function(n,e,r,o){var d=n.memoizedProps;if(d!==o){n=e.stateNode,Bt(qe.current);var p=null;switch(r){case"input":d=Lr(n,d),o=Lr(n,o),p=[];break;case"select":d=S({},d,{value:void 0}),o=S({},o,{value:void 0}),p=[];break;case"textarea":d=Dr(n,d),o=Dr(n,o),p=[];break;default:typeof d.onClick!="function"&&typeof o.onClick=="function"&&(n.onclick=Yi)}ne(r,o);var y;r=null;for(T in d)if(!o.hasOwnProperty(T)&&d.hasOwnProperty(T)&&d[T]!=null)if(T==="style"){var w=d[T];for(y in w)w.hasOwnProperty(y)&&(r||(r={}),r[y]="")}else T!=="dangerouslySetInnerHTML"&&T!=="children"&&T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&T!=="autoFocus"&&(s.hasOwnProperty(T)?p||(p=[]):(p=p||[]).push(T,null));for(T in o){var x=o[T];if(w=d!=null?d[T]:void 0,o.hasOwnProperty(T)&&x!==w&&(x!=null||w!=null))if(T==="style")if(w){for(y in w)!w.hasOwnProperty(y)||x&&x.hasOwnProperty(y)||(r||(r={}),r[y]="");for(y in x)x.hasOwnProperty(y)&&w[y]!==x[y]&&(r||(r={}),r[y]=x[y])}else r||(p||(p=[]),p.push(T,r)),r=x;else T==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,w=w?w.__html:void 0,x!=null&&w!==x&&(p=p||[]).push(T,x)):T==="children"?typeof x!="string"&&typeof x!="number"||(p=p||[]).push(T,""+x):T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&(s.hasOwnProperty(T)?(x!=null&&T==="onScroll"&&Nn("scroll",n),p||w===x||(p=[])):(p=p||[]).push(T,x))}r&&(p=p||[]).push("style",r);var T=p;(e.updateQueue=T)&&(e.flags|=4)}},Qc=function(n,e,r,o){r!==o&&(e.flags|=4)};function si(n,e){if(!Bn)switch(n.tailMode){case"hidden":e=n.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?n.tail=null:r.sibling=null;break;case"collapsed":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:o.sibling=null}}function le(n){var e=n.alternate!==null&&n.alternate.child===n.child,r=0,o=0;if(e)for(var d=n.child;d!==null;)r|=d.lanes|d.childLanes,o|=d.subtreeFlags&14680064,o|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)r|=d.lanes|d.childLanes,o|=d.subtreeFlags,o|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=o,n.childLanes=r,e}function eg(n,e,r){var o=e.pendingProps;switch(zo(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(e),null;case 1:return fe(e.type)&&Zi(),le(e),null;case 3:return o=e.stateNode,Ar(),zn(pe),zn(re),Yo(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(il(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ne!==null&&(_a(Ne),Ne=null))),ha(n,e),le(e),null;case 5:Jo(e);var d=Bt(ri.current);if(r=e.type,n!==null&&e.stateNode!=null)qc(n,e,r,o,d),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!o){if(e.stateNode===null)throw Error(i(166));return le(e),null}if(n=Bt(qe.current),il(e)){o=e.stateNode,r=e.type;var p=e.memoizedProps;switch(o[Ve]=e,o[Xr]=p,n=(e.mode&1)!==0,r){case"dialog":Nn("cancel",o),Nn("close",o);break;case"iframe":case"object":case"embed":Nn("load",o);break;case"video":case"audio":for(d=0;d<Jr.length;d++)Nn(Jr[d],o);break;case"source":Nn("error",o);break;case"img":case"image":case"link":Nn("error",o),Nn("load",o);break;case"details":Nn("toggle",o);break;case"input":Rr(o,p),Nn("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!p.multiple},Nn("invalid",o);break;case"textarea":_i(o,p),Nn("invalid",o)}ne(r,p),d=null;for(var y in p)if(p.hasOwnProperty(y)){var w=p[y];y==="children"?typeof w=="string"?o.textContent!==w&&(p.suppressHydrationWarning!==!0&&Ki(o.textContent,w,n),d=["children",w]):typeof w=="number"&&o.textContent!==""+w&&(p.suppressHydrationWarning!==!0&&Ki(o.textContent,w,n),d=["children",""+w]):s.hasOwnProperty(y)&&w!=null&&y==="onScroll"&&Nn("scroll",o)}switch(r){case"input":Ye(o),Ei(o,p,!0);break;case"textarea":Ye(o),Ri(o);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(o.onclick=Yi)}o=d,e.updateQueue=o,o!==null&&(e.flags|=4)}else{y=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=b(r)),n==="http://www.w3.org/1999/xhtml"?r==="script"?(n=y.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof o.is=="string"?n=y.createElement(r,{is:o.is}):(n=y.createElement(r),r==="select"&&(y=n,o.multiple?y.multiple=!0:o.size&&(y.size=o.size))):n=y.createElementNS(n,r),n[Ve]=e,n[Xr]=o,Vc(n,e,!1,!1),e.stateNode=n;n:{switch(y=Ue(r,o),r){case"dialog":Nn("cancel",n),Nn("close",n),d=o;break;case"iframe":case"object":case"embed":Nn("load",n),d=o;break;case"video":case"audio":for(d=0;d<Jr.length;d++)Nn(Jr[d],n);d=o;break;case"source":Nn("error",n),d=o;break;case"img":case"image":case"link":Nn("error",n),Nn("load",n),d=o;break;case"details":Nn("toggle",n),d=o;break;case"input":Rr(n,o),d=Lr(n,o),Nn("invalid",n);break;case"option":d=o;break;case"select":n._wrapperState={wasMultiple:!!o.multiple},d=S({},o,{value:void 0}),Nn("invalid",n);break;case"textarea":_i(n,o),d=Dr(n,o),Nn("invalid",n);break;default:d=o}ne(r,d),w=d;for(p in w)if(w.hasOwnProperty(p)){var x=w[p];p==="style"?ct(n,x):p==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&wn(n,x)):p==="children"?typeof x=="string"?(r!=="textarea"||x!=="")&&_n(n,x):typeof x=="number"&&_n(n,""+x):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(s.hasOwnProperty(p)?x!=null&&p==="onScroll"&&Nn("scroll",n):x!=null&&B(n,p,x,y))}switch(r){case"input":Ye(n),Ei(n,o,!1);break;case"textarea":Ye(n),Ri(n);break;case"option":o.value!=null&&n.setAttribute("value",""+Sn(o.value));break;case"select":n.multiple=!!o.multiple,p=o.value,p!=null?ut(n,!!o.multiple,p,!1):o.defaultValue!=null&&ut(n,!!o.multiple,o.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Yi)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break n;case"img":o=!0;break n;default:o=!1}}o&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return le(e),null;case 6:if(n&&e.stateNode!=null)Qc(n,e,n.memoizedProps,o);else{if(typeof o!="string"&&e.stateNode===null)throw Error(i(166));if(r=Bt(ri.current),Bt(qe.current),il(e)){if(o=e.stateNode,r=e.memoizedProps,o[Ve]=e,(p=o.nodeValue!==r)&&(n=we,n!==null))switch(n.tag){case 3:Ki(o.nodeValue,r,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ki(o.nodeValue,r,(n.mode&1)!==0)}p&&(e.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[Ve]=e,e.stateNode=o}return le(e),null;case 13:if(zn(Gn),o=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Bn&&Ce!==null&&(e.mode&1)!==0&&(e.flags&128)===0)Ku(),gr(),e.flags|=98560,p=!1;else if(p=il(e),o!==null&&o.dehydrated!==null){if(n===null){if(!p)throw Error(i(318));if(p=e.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(i(317));p[Ve]=e}else gr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;le(e),p=!1}else Ne!==null&&(_a(Ne),Ne=null),p=!0;if(!p)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=r,e):(o=o!==null,o!==(n!==null&&n.memoizedState!==null)&&o&&(e.child.flags|=8192,(e.mode&1)!==0&&(n===null||(Gn.current&1)!==0?Jn===0&&(Jn=3):Pa())),e.updateQueue!==null&&(e.flags|=4),le(e),null);case 4:return Ar(),ha(n,e),n===null&&Kr(e.stateNode.containerInfo),le(e),null;case 10:return Wo(e.type._context),le(e),null;case 17:return fe(e.type)&&Zi(),le(e),null;case 19:if(zn(Gn),p=e.memoizedState,p===null)return le(e),null;if(o=(e.flags&128)!==0,y=p.rendering,y===null)if(o)si(p,!1);else{if(Jn!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(y=cl(n),y!==null){for(e.flags|=128,si(p,!1),o=y.updateQueue,o!==null&&(e.updateQueue=o,e.flags|=4),e.subtreeFlags=0,o=r,r=e.child;r!==null;)p=r,n=o,p.flags&=14680066,y=p.alternate,y===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=y.childLanes,p.lanes=y.lanes,p.child=y.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=y.memoizedProps,p.memoizedState=y.memoizedState,p.updateQueue=y.updateQueue,p.type=y.type,n=y.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),r=r.sibling;return Fn(Gn,Gn.current&1|2),e.child}n=n.sibling}p.tail!==null&&Un()>Cr&&(e.flags|=128,o=!0,si(p,!1),e.lanes=4194304)}else{if(!o)if(n=cl(y),n!==null){if(e.flags|=128,o=!0,r=n.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),si(p,!0),p.tail===null&&p.tailMode==="hidden"&&!y.alternate&&!Bn)return le(e),null}else 2*Un()-p.renderingStartTime>Cr&&r!==1073741824&&(e.flags|=128,o=!0,si(p,!1),e.lanes=4194304);p.isBackwards?(y.sibling=e.child,e.child=y):(r=p.last,r!==null?r.sibling=y:e.child=y,p.last=y)}return p.tail!==null?(e=p.tail,p.rendering=e,p.tail=e.sibling,p.renderingStartTime=Un(),e.sibling=null,r=Gn.current,Fn(Gn,o?r&1|2:r&1),e):(le(e),null);case 22:case 23:return Ra(),o=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==o&&(e.flags|=8192),o&&(e.mode&1)!==0?(xe&1073741824)!==0&&(le(e),e.subtreeFlags&6&&(e.flags|=8192)):le(e),null;case 24:return null;case 25:return null}throw Error(i(156,e.tag))}function tg(n,e){switch(zo(e),e.tag){case 1:return fe(e.type)&&Zi(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Ar(),zn(pe),zn(re),Yo(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 5:return Jo(e),null;case 13:if(zn(Gn),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(i(340));gr()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return zn(Gn),null;case 4:return Ar(),null;case 10:return Wo(e.type._context),null;case 22:case 23:return Ra(),null;case 24:return null;default:return null}}var Al=!1,oe=!1,rg=typeof WeakSet=="function"?WeakSet:Set,nn=null;function Sr(n,e){var r=n.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){Hn(n,e,o)}else r.current=null}function ya(n,e,r){try{r()}catch(o){Hn(n,e,o)}}var $c=!1;function ig(n,e){if(Ro=Bi,n=Eu(),So(n)){if("selectionStart"in n)var r={start:n.selectionStart,end:n.selectionEnd};else n:{r=(r=n.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var d=o.anchorOffset,p=o.focusNode;o=o.focusOffset;try{r.nodeType,p.nodeType}catch{r=null;break n}var y=0,w=-1,x=-1,T=0,G=0,j=n,z=null;e:for(;;){for(var X;j!==r||d!==0&&j.nodeType!==3||(w=y+d),j!==p||o!==0&&j.nodeType!==3||(x=y+o),j.nodeType===3&&(y+=j.nodeValue.length),(X=j.firstChild)!==null;)z=j,j=X;for(;;){if(j===n)break e;if(z===r&&++T===d&&(w=y),z===p&&++G===o&&(x=y),(X=j.nextSibling)!==null)break;j=z,z=j.parentNode}j=X}r=w===-1||x===-1?null:{start:w,end:x}}else r=null}r=r||{start:0,end:0}}else r=null;for(Po={focusedElem:n,selectionRange:r},Bi=!1,nn=e;nn!==null;)if(e=nn,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,nn=n;else for(;nn!==null;){e=nn;try{var tn=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(tn!==null){var ln=tn.memoizedProps,Wn=tn.memoizedState,L=e.stateNode,I=L.getSnapshotBeforeUpdate(e.elementType===e.type?ln:ze(e.type,ln),Wn);L.__reactInternalSnapshotBeforeUpdate=I}break;case 3:var P=e.stateNode.containerInfo;P.nodeType===1?P.textContent="":P.nodeType===9&&P.documentElement&&P.removeChild(P.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(q){Hn(e,e.return,q)}if(n=e.sibling,n!==null){n.return=e.return,nn=n;break}nn=e.return}return tn=$c,$c=!1,tn}function ui(n,e,r){var o=e.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var d=o=o.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&ya(e,r,p)}d=d.next}while(d!==o)}}function vl(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&n)===n){var o=r.create;r.destroy=o()}r=r.next}while(r!==e)}}function ka(n){var e=n.ref;if(e!==null){var r=n.stateNode;switch(n.tag){case 5:n=r;break;default:n=r}typeof e=="function"?e(n):e.current=n}}function Jc(n){var e=n.alternate;e!==null&&(n.alternate=null,Jc(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Ve],delete e[Xr],delete e[Oo],delete e[Gm],delete e[jm])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Kc(n){return n.tag===5||n.tag===3||n.tag===4}function Yc(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||Kc(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Aa(n,e,r){var o=n.tag;if(o===5||o===6)n=n.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(n,e):r.insertBefore(n,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(n,r)):(e=r,e.appendChild(n)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=Yi));else if(o!==4&&(n=n.child,n!==null))for(Aa(n,e,r),n=n.sibling;n!==null;)Aa(n,e,r),n=n.sibling}function va(n,e,r){var o=n.tag;if(o===5||o===6)n=n.stateNode,e?r.insertBefore(n,e):r.appendChild(n);else if(o!==4&&(n=n.child,n!==null))for(va(n,e,r),n=n.sibling;n!==null;)va(n,e,r),n=n.sibling}var ee=null,Be=!1;function Ct(n,e,r){for(r=r.child;r!==null;)Xc(n,e,r),r=r.sibling}function Xc(n,e,r){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(Mi,r)}catch{}switch(r.tag){case 5:oe||Sr(r,e);case 6:var o=ee,d=Be;ee=null,Ct(n,e,r),ee=o,Be=d,ee!==null&&(Be?(n=ee,r=r.stateNode,n.nodeType===8?n.parentNode.removeChild(r):n.removeChild(r)):ee.removeChild(r.stateNode));break;case 18:ee!==null&&(Be?(n=ee,r=r.stateNode,n.nodeType===8?Mo(n.parentNode,r):n.nodeType===1&&Mo(n,r),jr(n)):Mo(ee,r.stateNode));break;case 4:o=ee,d=Be,ee=r.stateNode.containerInfo,Be=!0,Ct(n,e,r),ee=o,Be=d;break;case 0:case 11:case 14:case 15:if(!oe&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){d=o=o.next;do{var p=d,y=p.destroy;p=p.tag,y!==void 0&&((p&2)!==0||(p&4)!==0)&&ya(r,e,y),d=d.next}while(d!==o)}Ct(n,e,r);break;case 1:if(!oe&&(Sr(r,e),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(w){Hn(r,e,w)}Ct(n,e,r);break;case 21:Ct(n,e,r);break;case 22:r.mode&1?(oe=(o=oe)||r.memoizedState!==null,Ct(n,e,r),oe=o):Ct(n,e,r);break;default:Ct(n,e,r)}}function Zc(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var r=n.stateNode;r===null&&(r=n.stateNode=new rg),e.forEach(function(o){var d=fg.bind(null,n,o);r.has(o)||(r.add(o),o.then(d,d))})}}function Ge(n,e){var r=e.deletions;if(r!==null)for(var o=0;o<r.length;o++){var d=r[o];try{var p=n,y=e,w=y;n:for(;w!==null;){switch(w.tag){case 5:ee=w.stateNode,Be=!1;break n;case 3:ee=w.stateNode.containerInfo,Be=!0;break n;case 4:ee=w.stateNode.containerInfo,Be=!0;break n}w=w.return}if(ee===null)throw Error(i(160));Xc(p,y,d),ee=null,Be=!1;var x=d.alternate;x!==null&&(x.return=null),d.return=null}catch(T){Hn(d,e,T)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)nd(e,n),e=e.sibling}function nd(n,e){var r=n.alternate,o=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ge(e,n),$e(n),o&4){try{ui(3,n,n.return),vl(3,n)}catch(ln){Hn(n,n.return,ln)}try{ui(5,n,n.return)}catch(ln){Hn(n,n.return,ln)}}break;case 1:Ge(e,n),$e(n),o&512&&r!==null&&Sr(r,r.return);break;case 5:if(Ge(e,n),$e(n),o&512&&r!==null&&Sr(r,r.return),n.flags&32){var d=n.stateNode;try{_n(d,"")}catch(ln){Hn(n,n.return,ln)}}if(o&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,y=r!==null?r.memoizedProps:p,w=n.type,x=n.updateQueue;if(n.updateQueue=null,x!==null)try{w==="input"&&p.type==="radio"&&p.name!=null&&Pr(d,p),Ue(w,y);var T=Ue(w,p);for(y=0;y<x.length;y+=2){var G=x[y],j=x[y+1];G==="style"?ct(d,j):G==="dangerouslySetInnerHTML"?wn(d,j):G==="children"?_n(d,j):B(d,G,j,T)}switch(w){case"input":Zt(d,p);break;case"textarea":Li(d,p);break;case"select":var z=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var X=p.value;X!=null?ut(d,!!p.multiple,X,!1):z!==!!p.multiple&&(p.defaultValue!=null?ut(d,!!p.multiple,p.defaultValue,!0):ut(d,!!p.multiple,p.multiple?[]:"",!1))}d[Xr]=p}catch(ln){Hn(n,n.return,ln)}}break;case 6:if(Ge(e,n),$e(n),o&4){if(n.stateNode===null)throw Error(i(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(ln){Hn(n,n.return,ln)}}break;case 3:if(Ge(e,n),$e(n),o&4&&r!==null&&r.memoizedState.isDehydrated)try{jr(e.containerInfo)}catch(ln){Hn(n,n.return,ln)}break;case 4:Ge(e,n),$e(n);break;case 13:Ge(e,n),$e(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Ca=Un())),o&4&&Zc(n);break;case 22:if(G=r!==null&&r.memoizedState!==null,n.mode&1?(oe=(T=oe)||G,Ge(e,n),oe=T):Ge(e,n),$e(n),o&8192){if(T=n.memoizedState!==null,(n.stateNode.isHidden=T)&&!G&&(n.mode&1)!==0)for(nn=n,G=n.child;G!==null;){for(j=nn=G;nn!==null;){switch(z=nn,X=z.child,z.tag){case 0:case 11:case 14:case 15:ui(4,z,z.return);break;case 1:Sr(z,z.return);var tn=z.stateNode;if(typeof tn.componentWillUnmount=="function"){o=z,r=z.return;try{e=o,tn.props=e.memoizedProps,tn.state=e.memoizedState,tn.componentWillUnmount()}catch(ln){Hn(o,r,ln)}}break;case 5:Sr(z,z.return);break;case 22:if(z.memoizedState!==null){rd(j);continue}}X!==null?(X.return=z,nn=X):rd(j)}G=G.sibling}n:for(G=null,j=n;;){if(j.tag===5){if(G===null){G=j;try{d=j.stateNode,T?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(w=j.stateNode,x=j.memoizedProps.style,y=x!=null&&x.hasOwnProperty("display")?x.display:null,w.style.display=_e("display",y))}catch(ln){Hn(n,n.return,ln)}}}else if(j.tag===6){if(G===null)try{j.stateNode.nodeValue=T?"":j.memoizedProps}catch(ln){Hn(n,n.return,ln)}}else if((j.tag!==22&&j.tag!==23||j.memoizedState===null||j===n)&&j.child!==null){j.child.return=j,j=j.child;continue}if(j===n)break n;for(;j.sibling===null;){if(j.return===null||j.return===n)break n;G===j&&(G=null),j=j.return}G===j&&(G=null),j.sibling.return=j.return,j=j.sibling}}break;case 19:Ge(e,n),$e(n),o&4&&Zc(n);break;case 21:break;default:Ge(e,n),$e(n)}}function $e(n){var e=n.flags;if(e&2){try{n:{for(var r=n.return;r!==null;){if(Kc(r)){var o=r;break n}r=r.return}throw Error(i(160))}switch(o.tag){case 5:var d=o.stateNode;o.flags&32&&(_n(d,""),o.flags&=-33);var p=Yc(n);va(n,p,d);break;case 3:case 4:var y=o.stateNode.containerInfo,w=Yc(n);Aa(n,w,y);break;default:throw Error(i(161))}}catch(x){Hn(n,n.return,x)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function lg(n,e,r){nn=n,ed(n)}function ed(n,e,r){for(var o=(n.mode&1)!==0;nn!==null;){var d=nn,p=d.child;if(d.tag===22&&o){var y=d.memoizedState!==null||Al;if(!y){var w=d.alternate,x=w!==null&&w.memoizedState!==null||oe;w=Al;var T=oe;if(Al=y,(oe=x)&&!T)for(nn=d;nn!==null;)y=nn,x=y.child,y.tag===22&&y.memoizedState!==null?id(d):x!==null?(x.return=y,nn=x):id(d);for(;p!==null;)nn=p,ed(p),p=p.sibling;nn=d,Al=w,oe=T}td(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,nn=p):td(n)}}function td(n){for(;nn!==null;){var e=nn;if((e.flags&8772)!==0){var r=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:oe||vl(5,e);break;case 1:var o=e.stateNode;if(e.flags&4&&!oe)if(r===null)o.componentDidMount();else{var d=e.elementType===e.type?r.memoizedProps:ze(e.type,r.memoizedProps);o.componentDidUpdate(d,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var p=e.updateQueue;p!==null&&rc(e,p,o);break;case 3:var y=e.updateQueue;if(y!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}rc(e,y,r)}break;case 5:var w=e.stateNode;if(r===null&&e.flags&4){r=w;var x=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&r.focus();break;case"img":x.src&&(r.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var T=e.alternate;if(T!==null){var G=T.memoizedState;if(G!==null){var j=G.dehydrated;j!==null&&jr(j)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}oe||e.flags&512&&ka(e)}catch(z){Hn(e,e.return,z)}}if(e===n){nn=null;break}if(r=e.sibling,r!==null){r.return=e.return,nn=r;break}nn=e.return}}function rd(n){for(;nn!==null;){var e=nn;if(e===n){nn=null;break}var r=e.sibling;if(r!==null){r.return=e.return,nn=r;break}nn=e.return}}function id(n){for(;nn!==null;){var e=nn;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{vl(4,e)}catch(x){Hn(e,r,x)}break;case 1:var o=e.stateNode;if(typeof o.componentDidMount=="function"){var d=e.return;try{o.componentDidMount()}catch(x){Hn(e,d,x)}}var p=e.return;try{ka(e)}catch(x){Hn(e,p,x)}break;case 5:var y=e.return;try{ka(e)}catch(x){Hn(e,y,x)}}}catch(x){Hn(e,e.return,x)}if(e===n){nn=null;break}var w=e.sibling;if(w!==null){w.return=e.return,nn=w;break}nn=e.return}}var og=Math.ceil,Sl=rn.ReactCurrentDispatcher,Sa=rn.ReactCurrentOwner,Te=rn.ReactCurrentBatchConfig,Ln=0,Yn=null,qn=null,te=0,xe=0,wr=kt(0),Jn=0,ci=null,jt=0,wl=0,wa=0,di=null,ge=null,Ca=0,Cr=1/0,ot=null,Cl=!1,xa=null,xt=null,xl=!1,It=null,Il=0,pi=0,Ia=null,El=-1,_l=0;function ce(){return(Ln&6)!==0?Un():El!==-1?El:El=Un()}function Et(n){return(n.mode&1)===0?1:(Ln&2)!==0&&te!==0?te&-te:Um.transition!==null?(_l===0&&(_l=Ys()),_l):(n=Mn,n!==0||(n=window.event,n=n===void 0?16:ou(n.type)),n)}function je(n,e,r,o){if(50<pi)throw pi=0,Ia=null,Error(i(185));Fr(n,r,o),((Ln&2)===0||n!==Yn)&&(n===Yn&&((Ln&2)===0&&(wl|=r),Jn===4&&_t(n,te)),he(n,o),r===1&&Ln===0&&(e.mode&1)===0&&(Cr=Un()+500,el&&vt()))}function he(n,e){var r=n.callbackNode;Uf(n,e);var o=Fi(n,n===Yn?te:0);if(o===0)r!==null&&$s(r),n.callbackNode=null,n.callbackPriority=0;else if(e=o&-o,n.callbackPriority!==e){if(r!=null&&$s(r),e===1)n.tag===0?Hm(od.bind(null,n)):Vu(od.bind(null,n)),zm(function(){(Ln&6)===0&&vt()}),r=null;else{switch(Xs(o)){case 1:r=ro;break;case 4:r=Js;break;case 16:r=Ti;break;case 536870912:r=Ks;break;default:r=Ti}r=md(r,ld.bind(null,n))}n.callbackPriority=e,n.callbackNode=r}}function ld(n,e){if(El=-1,_l=0,(Ln&6)!==0)throw Error(i(327));var r=n.callbackNode;if(xr()&&n.callbackNode!==r)return null;var o=Fi(n,n===Yn?te:0);if(o===0)return null;if((o&30)!==0||(o&n.expiredLanes)!==0||e)e=Ll(n,o);else{e=o;var d=Ln;Ln|=2;var p=sd();(Yn!==n||te!==e)&&(ot=null,Cr=Un()+500,Ut(n,e));do try{ug();break}catch(w){ad(n,w)}while(!0);Uo(),Sl.current=p,Ln=d,qn!==null?e=0:(Yn=null,te=0,e=Jn)}if(e!==0){if(e===2&&(d=io(n),d!==0&&(o=d,e=Ea(n,d))),e===1)throw r=ci,Ut(n,0),_t(n,o),he(n,Un()),r;if(e===6)_t(n,o);else{if(d=n.current.alternate,(o&30)===0&&!ag(d)&&(e=Ll(n,o),e===2&&(p=io(n),p!==0&&(o=p,e=Ea(n,p))),e===1))throw r=ci,Ut(n,0),_t(n,o),he(n,Un()),r;switch(n.finishedWork=d,n.finishedLanes=o,e){case 0:case 1:throw Error(i(345));case 2:Wt(n,ge,ot);break;case 3:if(_t(n,o),(o&130023424)===o&&(e=Ca+500-Un(),10<e)){if(Fi(n,0)!==0)break;if(d=n.suspendedLanes,(d&o)!==o){ce(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=To(Wt.bind(null,n,ge,ot),e);break}Wt(n,ge,ot);break;case 4:if(_t(n,o),(o&4194240)===o)break;for(e=n.eventTimes,d=-1;0<o;){var y=31-be(o);p=1<<y,y=e[y],y>d&&(d=y),o&=~p}if(o=d,o=Un()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*og(o/1960))-o,10<o){n.timeoutHandle=To(Wt.bind(null,n,ge,ot),o);break}Wt(n,ge,ot);break;case 5:Wt(n,ge,ot);break;default:throw Error(i(329))}}}return he(n,Un()),n.callbackNode===r?ld.bind(null,n):null}function Ea(n,e){var r=di;return n.current.memoizedState.isDehydrated&&(Ut(n,e).flags|=256),n=Ll(n,e),n!==2&&(e=ge,ge=r,e!==null&&_a(e)),n}function _a(n){ge===null?ge=n:ge.push.apply(ge,n)}function ag(n){for(var e=n;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var d=r[o],p=d.getSnapshot;d=d.value;try{if(!Fe(p(),d))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function _t(n,e){for(e&=~wa,e&=~wl,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var r=31-be(e),o=1<<r;n[r]=-1,e&=~o}}function od(n){if((Ln&6)!==0)throw Error(i(327));xr();var e=Fi(n,0);if((e&1)===0)return he(n,Un()),null;var r=Ll(n,e);if(n.tag!==0&&r===2){var o=io(n);o!==0&&(e=o,r=Ea(n,o))}if(r===1)throw r=ci,Ut(n,0),_t(n,e),he(n,Un()),r;if(r===6)throw Error(i(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Wt(n,ge,ot),he(n,Un()),null}function La(n,e){var r=Ln;Ln|=1;try{return n(e)}finally{Ln=r,Ln===0&&(Cr=Un()+500,el&&vt())}}function Ht(n){It!==null&&It.tag===0&&(Ln&6)===0&&xr();var e=Ln;Ln|=1;var r=Te.transition,o=Mn;try{if(Te.transition=null,Mn=1,n)return n()}finally{Mn=o,Te.transition=r,Ln=e,(Ln&6)===0&&vt()}}function Ra(){xe=wr.current,zn(wr)}function Ut(n,e){n.finishedWork=null,n.finishedLanes=0;var r=n.timeoutHandle;if(r!==-1&&(n.timeoutHandle=-1,Nm(r)),qn!==null)for(r=qn.return;r!==null;){var o=r;switch(zo(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Zi();break;case 3:Ar(),zn(pe),zn(re),Yo();break;case 5:Jo(o);break;case 4:Ar();break;case 13:zn(Gn);break;case 19:zn(Gn);break;case 10:Wo(o.type._context);break;case 22:case 23:Ra()}r=r.return}if(Yn=n,qn=n=Lt(n.current,null),te=xe=e,Jn=0,ci=null,wa=wl=jt=0,ge=di=null,zt!==null){for(e=0;e<zt.length;e++)if(r=zt[e],o=r.interleaved,o!==null){r.interleaved=null;var d=o.next,p=r.pending;if(p!==null){var y=p.next;p.next=d,o.next=y}r.pending=o}zt=null}return n}function ad(n,e){do{var r=qn;try{if(Uo(),dl.current=gl,pl){for(var o=jn.memoizedState;o!==null;){var d=o.queue;d!==null&&(d.pending=null),o=o.next}pl=!1}if(Gt=0,Kn=$n=jn=null,ii=!1,li=0,Sa.current=null,r===null||r.return===null){Jn=1,ci=e,qn=null;break}n:{var p=n,y=r.return,w=r,x=e;if(e=te,w.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var T=x,G=w,j=G.tag;if((G.mode&1)===0&&(j===0||j===11||j===15)){var z=G.alternate;z?(G.updateQueue=z.updateQueue,G.memoizedState=z.memoizedState,G.lanes=z.lanes):(G.updateQueue=null,G.memoizedState=null)}var X=Tc(y);if(X!==null){X.flags&=-257,Mc(X,y,w,p,e),X.mode&1&&Dc(p,T,e),e=X,x=T;var tn=e.updateQueue;if(tn===null){var ln=new Set;ln.add(x),e.updateQueue=ln}else tn.add(x);break n}else{if((e&1)===0){Dc(p,T,e),Pa();break n}x=Error(i(426))}}else if(Bn&&w.mode&1){var Wn=Tc(y);if(Wn!==null){(Wn.flags&65536)===0&&(Wn.flags|=256),Mc(Wn,y,w,p,e),jo(vr(x,w));break n}}p=x=vr(x,w),Jn!==4&&(Jn=2),di===null?di=[p]:di.push(p),p=y;do{switch(p.tag){case 3:p.flags|=65536,e&=-e,p.lanes|=e;var L=Rc(p,x,e);tc(p,L);break n;case 1:w=x;var I=p.type,P=p.stateNode;if((p.flags&128)===0&&(typeof I.getDerivedStateFromError=="function"||P!==null&&typeof P.componentDidCatch=="function"&&(xt===null||!xt.has(P)))){p.flags|=65536,e&=-e,p.lanes|=e;var q=Pc(p,w,e);tc(p,q);break n}}p=p.return}while(p!==null)}cd(r)}catch(on){e=on,qn===r&&r!==null&&(qn=r=r.return);continue}break}while(!0)}function sd(){var n=Sl.current;return Sl.current=gl,n===null?gl:n}function Pa(){(Jn===0||Jn===3||Jn===2)&&(Jn=4),Yn===null||(jt&268435455)===0&&(wl&268435455)===0||_t(Yn,te)}function Ll(n,e){var r=Ln;Ln|=2;var o=sd();(Yn!==n||te!==e)&&(ot=null,Ut(n,e));do try{sg();break}catch(d){ad(n,d)}while(!0);if(Uo(),Ln=r,Sl.current=o,qn!==null)throw Error(i(261));return Yn=null,te=0,Jn}function sg(){for(;qn!==null;)ud(qn)}function ug(){for(;qn!==null&&!Of();)ud(qn)}function ud(n){var e=fd(n.alternate,n,xe);n.memoizedProps=n.pendingProps,e===null?cd(n):qn=e,Sa.current=null}function cd(n){var e=n;do{var r=e.alternate;if(n=e.return,(e.flags&32768)===0){if(r=eg(r,e,xe),r!==null){qn=r;return}}else{if(r=tg(r,e),r!==null){r.flags&=32767,qn=r;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Jn=6,qn=null;return}}if(e=e.sibling,e!==null){qn=e;return}qn=e=n}while(e!==null);Jn===0&&(Jn=5)}function Wt(n,e,r){var o=Mn,d=Te.transition;try{Te.transition=null,Mn=1,cg(n,e,r,o)}finally{Te.transition=d,Mn=o}return null}function cg(n,e,r,o){do xr();while(It!==null);if((Ln&6)!==0)throw Error(i(327));r=n.finishedWork;var d=n.finishedLanes;if(r===null)return null;if(n.finishedWork=null,n.finishedLanes=0,r===n.current)throw Error(i(177));n.callbackNode=null,n.callbackPriority=0;var p=r.lanes|r.childLanes;if(Wf(n,p),n===Yn&&(qn=Yn=null,te=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||xl||(xl=!0,md(Ti,function(){return xr(),null})),p=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||p){p=Te.transition,Te.transition=null;var y=Mn;Mn=1;var w=Ln;Ln|=4,Sa.current=null,ig(n,r),nd(r,n),Pm(Po),Bi=!!Ro,Po=Ro=null,n.current=r,lg(r),bf(),Ln=w,Mn=y,Te.transition=p}else n.current=r;if(xl&&(xl=!1,It=n,Il=d),p=n.pendingLanes,p===0&&(xt=null),zf(r.stateNode),he(n,Un()),e!==null)for(o=n.onRecoverableError,r=0;r<e.length;r++)d=e[r],o(d.value,{componentStack:d.stack,digest:d.digest});if(Cl)throw Cl=!1,n=xa,xa=null,n;return(Il&1)!==0&&n.tag!==0&&xr(),p=n.pendingLanes,(p&1)!==0?n===Ia?pi++:(pi=0,Ia=n):pi=0,vt(),null}function xr(){if(It!==null){var n=Xs(Il),e=Te.transition,r=Mn;try{if(Te.transition=null,Mn=16>n?16:n,It===null)var o=!1;else{if(n=It,It=null,Il=0,(Ln&6)!==0)throw Error(i(331));var d=Ln;for(Ln|=4,nn=n.current;nn!==null;){var p=nn,y=p.child;if((nn.flags&16)!==0){var w=p.deletions;if(w!==null){for(var x=0;x<w.length;x++){var T=w[x];for(nn=T;nn!==null;){var G=nn;switch(G.tag){case 0:case 11:case 15:ui(8,G,p)}var j=G.child;if(j!==null)j.return=G,nn=j;else for(;nn!==null;){G=nn;var z=G.sibling,X=G.return;if(Jc(G),G===T){nn=null;break}if(z!==null){z.return=X,nn=z;break}nn=X}}}var tn=p.alternate;if(tn!==null){var ln=tn.child;if(ln!==null){tn.child=null;do{var Wn=ln.sibling;ln.sibling=null,ln=Wn}while(ln!==null)}}nn=p}}if((p.subtreeFlags&2064)!==0&&y!==null)y.return=p,nn=y;else n:for(;nn!==null;){if(p=nn,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:ui(9,p,p.return)}var L=p.sibling;if(L!==null){L.return=p.return,nn=L;break n}nn=p.return}}var I=n.current;for(nn=I;nn!==null;){y=nn;var P=y.child;if((y.subtreeFlags&2064)!==0&&P!==null)P.return=y,nn=P;else n:for(y=I;nn!==null;){if(w=nn,(w.flags&2048)!==0)try{switch(w.tag){case 0:case 11:case 15:vl(9,w)}}catch(on){Hn(w,w.return,on)}if(w===y){nn=null;break n}var q=w.sibling;if(q!==null){q.return=w.return,nn=q;break n}nn=w.return}}if(Ln=d,vt(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(Mi,n)}catch{}o=!0}return o}finally{Mn=r,Te.transition=e}}return!1}function dd(n,e,r){e=vr(r,e),e=Rc(n,e,1),n=wt(n,e,1),e=ce(),n!==null&&(Fr(n,1,e),he(n,e))}function Hn(n,e,r){if(n.tag===3)dd(n,n,r);else for(;e!==null;){if(e.tag===3){dd(e,n,r);break}else if(e.tag===1){var o=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(xt===null||!xt.has(o))){n=vr(r,n),n=Pc(e,n,1),e=wt(e,n,1),n=ce(),e!==null&&(Fr(e,1,n),he(e,n));break}}e=e.return}}function dg(n,e,r){var o=n.pingCache;o!==null&&o.delete(e),e=ce(),n.pingedLanes|=n.suspendedLanes&r,Yn===n&&(te&r)===r&&(Jn===4||Jn===3&&(te&130023424)===te&&500>Un()-Ca?Ut(n,0):wa|=r),he(n,e)}function pd(n,e){e===0&&((n.mode&1)===0?e=1:(e=bi,bi<<=1,(bi&130023424)===0&&(bi=4194304)));var r=ce();n=rt(n,e),n!==null&&(Fr(n,e,r),he(n,r))}function pg(n){var e=n.memoizedState,r=0;e!==null&&(r=e.retryLane),pd(n,r)}function fg(n,e){var r=0;switch(n.tag){case 13:var o=n.stateNode,d=n.memoizedState;d!==null&&(r=d.retryLane);break;case 19:o=n.stateNode;break;default:throw Error(i(314))}o!==null&&o.delete(e),pd(n,r)}var fd;fd=function(n,e,r){if(n!==null)if(n.memoizedProps!==e.pendingProps||pe.current)me=!0;else{if((n.lanes&r)===0&&(e.flags&128)===0)return me=!1,ng(n,e,r);me=(n.flags&131072)!==0}else me=!1,Bn&&(e.flags&1048576)!==0&&qu(e,rl,e.index);switch(e.lanes=0,e.tag){case 2:var o=e.type;kl(n,e),n=e.pendingProps;var d=pr(e,re.current);kr(e,r),d=na(null,e,o,n,d,r);var p=ea();return e.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fe(o)?(p=!0,nl(e)):p=!1,e.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Qo(e),d.updater=hl,e.stateNode=d,d._reactInternals=e,aa(e,o,n,r),e=da(null,e,o,!0,p,r)):(e.tag=0,Bn&&p&&No(e),ue(null,e,d,r),e=e.child),e;case 16:o=e.elementType;n:{switch(kl(n,e),n=e.pendingProps,d=o._init,o=d(o._payload),e.type=o,d=e.tag=gg(o),n=ze(o,n),d){case 0:e=ca(null,e,o,n,r);break n;case 1:e=Bc(null,e,o,n,r);break n;case 11:e=Oc(null,e,o,n,r);break n;case 14:e=bc(null,e,o,ze(o.type,n),r);break n}throw Error(i(306,o,""))}return e;case 0:return o=e.type,d=e.pendingProps,d=e.elementType===o?d:ze(o,d),ca(n,e,o,d,r);case 1:return o=e.type,d=e.pendingProps,d=e.elementType===o?d:ze(o,d),Bc(n,e,o,d,r);case 3:n:{if(Gc(e),n===null)throw Error(i(387));o=e.pendingProps,p=e.memoizedState,d=p.element,ec(n,e),ul(e,o,null,r);var y=e.memoizedState;if(o=y.element,p.isDehydrated)if(p={element:o,isDehydrated:!1,cache:y.cache,pendingSuspenseBoundaries:y.pendingSuspenseBoundaries,transitions:y.transitions},e.updateQueue.baseState=p,e.memoizedState=p,e.flags&256){d=vr(Error(i(423)),e),e=jc(n,e,o,r,d);break n}else if(o!==d){d=vr(Error(i(424)),e),e=jc(n,e,o,r,d);break n}else for(Ce=yt(e.stateNode.containerInfo.firstChild),we=e,Bn=!0,Ne=null,r=Zu(e,null,o,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(gr(),o===d){e=lt(n,e,r);break n}ue(n,e,o,r)}e=e.child}return e;case 5:return ic(e),n===null&&Go(e),o=e.type,d=e.pendingProps,p=n!==null?n.memoizedProps:null,y=d.children,Do(o,d)?y=null:p!==null&&Do(o,p)&&(e.flags|=32),zc(n,e),ue(n,e,y,r),e.child;case 6:return n===null&&Go(e),null;case 13:return Hc(n,e,r);case 4:return $o(e,e.stateNode.containerInfo),o=e.pendingProps,n===null?e.child=hr(e,null,o,r):ue(n,e,o,r),e.child;case 11:return o=e.type,d=e.pendingProps,d=e.elementType===o?d:ze(o,d),Oc(n,e,o,d,r);case 7:return ue(n,e,e.pendingProps,r),e.child;case 8:return ue(n,e,e.pendingProps.children,r),e.child;case 12:return ue(n,e,e.pendingProps.children,r),e.child;case 10:n:{if(o=e.type._context,d=e.pendingProps,p=e.memoizedProps,y=d.value,Fn(ol,o._currentValue),o._currentValue=y,p!==null)if(Fe(p.value,y)){if(p.children===d.children&&!pe.current){e=lt(n,e,r);break n}}else for(p=e.child,p!==null&&(p.return=e);p!==null;){var w=p.dependencies;if(w!==null){y=p.child;for(var x=w.firstContext;x!==null;){if(x.context===o){if(p.tag===1){x=it(-1,r&-r),x.tag=2;var T=p.updateQueue;if(T!==null){T=T.shared;var G=T.pending;G===null?x.next=x:(x.next=G.next,G.next=x),T.pending=x}}p.lanes|=r,x=p.alternate,x!==null&&(x.lanes|=r),Vo(p.return,r,e),w.lanes|=r;break}x=x.next}}else if(p.tag===10)y=p.type===e.type?null:p.child;else if(p.tag===18){if(y=p.return,y===null)throw Error(i(341));y.lanes|=r,w=y.alternate,w!==null&&(w.lanes|=r),Vo(y,r,e),y=p.sibling}else y=p.child;if(y!==null)y.return=p;else for(y=p;y!==null;){if(y===e){y=null;break}if(p=y.sibling,p!==null){p.return=y.return,y=p;break}y=y.return}p=y}ue(n,e,d.children,r),e=e.child}return e;case 9:return d=e.type,o=e.pendingProps.children,kr(e,r),d=Pe(d),o=o(d),e.flags|=1,ue(n,e,o,r),e.child;case 14:return o=e.type,d=ze(o,e.pendingProps),d=ze(o.type,d),bc(n,e,o,d,r);case 15:return Fc(n,e,e.type,e.pendingProps,r);case 17:return o=e.type,d=e.pendingProps,d=e.elementType===o?d:ze(o,d),kl(n,e),e.tag=1,fe(o)?(n=!0,nl(e)):n=!1,kr(e,r),_c(e,o,d),aa(e,o,d,r),da(null,e,o,!0,n,r);case 19:return Wc(n,e,r);case 22:return Nc(n,e,r)}throw Error(i(156,e.tag))};function md(n,e){return Qs(n,e)}function mg(n,e,r,o){this.tag=n,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(n,e,r,o){return new mg(n,e,r,o)}function Da(n){return n=n.prototype,!(!n||!n.isReactComponent)}function gg(n){if(typeof n=="function")return Da(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Q)return 11;if(n===an)return 14}return 2}function Lt(n,e){var r=n.alternate;return r===null?(r=Me(n.tag,e,n.key,n.mode),r.elementType=n.elementType,r.type=n.type,r.stateNode=n.stateNode,r.alternate=n,n.alternate=r):(r.pendingProps=e,r.type=n.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=n.flags&14680064,r.childLanes=n.childLanes,r.lanes=n.lanes,r.child=n.child,r.memoizedProps=n.memoizedProps,r.memoizedState=n.memoizedState,r.updateQueue=n.updateQueue,e=n.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=n.sibling,r.index=n.index,r.ref=n.ref,r}function Rl(n,e,r,o,d,p){var y=2;if(o=n,typeof n=="function")Da(n)&&(y=1);else if(typeof n=="string")y=5;else n:switch(n){case V:return Vt(r.children,d,p,e);case en:y=8,d|=8;break;case cn:return n=Me(12,r,e,d|2),n.elementType=cn,n.lanes=p,n;case J:return n=Me(13,r,e,d),n.elementType=J,n.lanes=p,n;case Y:return n=Me(19,r,e,d),n.elementType=Y,n.lanes=p,n;case yn:return Pl(r,d,p,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case D:y=10;break n;case Z:y=9;break n;case Q:y=11;break n;case an:y=14;break n;case xn:y=16,o=null;break n}throw Error(i(130,n==null?n:typeof n,""))}return e=Me(y,r,e,d),e.elementType=n,e.type=o,e.lanes=p,e}function Vt(n,e,r,o){return n=Me(7,n,o,e),n.lanes=r,n}function Pl(n,e,r,o){return n=Me(22,n,o,e),n.elementType=yn,n.lanes=r,n.stateNode={isHidden:!1},n}function Ta(n,e,r){return n=Me(6,n,null,e),n.lanes=r,n}function Ma(n,e,r){return e=Me(4,n.children!==null?n.children:[],n.key,e),e.lanes=r,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function hg(n,e,r,o,d){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=lo(0),this.expirationTimes=lo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lo(0),this.identifierPrefix=o,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Oa(n,e,r,o,d,p,y,w,x){return n=new hg(n,e,r,w,x),e===1?(e=1,p===!0&&(e|=8)):e=0,p=Me(3,null,null,e),n.current=p,p.stateNode=n,p.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qo(p),n}function yg(n,e,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:o==null?null:""+o,children:n,containerInfo:e,implementation:r}}function gd(n){if(!n)return At;n=n._reactInternals;n:{if(Mt(n)!==n||n.tag!==1)throw Error(i(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break n;case 1:if(fe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break n}}e=e.return}while(e!==null);throw Error(i(171))}if(n.tag===1){var r=n.type;if(fe(r))return Uu(n,r,e)}return e}function hd(n,e,r,o,d,p,y,w,x){return n=Oa(r,o,!0,n,d,p,y,w,x),n.context=gd(null),r=n.current,o=ce(),d=Et(r),p=it(o,d),p.callback=e??null,wt(r,p,d),n.current.lanes=d,Fr(n,d,o),he(n,o),n}function Dl(n,e,r,o){var d=e.current,p=ce(),y=Et(d);return r=gd(r),e.context===null?e.context=r:e.pendingContext=r,e=it(p,y),e.payload={element:n},o=o===void 0?null:o,o!==null&&(e.callback=o),n=wt(d,e,y),n!==null&&(je(n,d,y,p),sl(n,d,y)),y}function Tl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function yd(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var r=n.retryLane;n.retryLane=r!==0&&r<e?r:e}}function ba(n,e){yd(n,e),(n=n.alternate)&&yd(n,e)}function kg(){return null}var kd=typeof reportError=="function"?reportError:function(n){console.error(n)};function Fa(n){this._internalRoot=n}Ml.prototype.render=Fa.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(i(409));Dl(n,e,null,null)},Ml.prototype.unmount=Fa.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Ht(function(){Dl(null,n,null,null)}),e[Ze]=null}};function Ml(n){this._internalRoot=n}Ml.prototype.unstable_scheduleHydration=function(n){if(n){var e=eu();n={blockedOn:null,target:n,priority:e};for(var r=0;r<mt.length&&e!==0&&e<mt[r].priority;r++);mt.splice(r,0,n),r===0&&iu(n)}};function Na(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ol(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Ad(){}function Ag(n,e,r,o,d){if(d){if(typeof o=="function"){var p=o;o=function(){var T=Tl(y);p.call(T)}}var y=hd(e,o,n,0,null,!1,!1,"",Ad);return n._reactRootContainer=y,n[Ze]=y.current,Kr(n.nodeType===8?n.parentNode:n),Ht(),y}for(;d=n.lastChild;)n.removeChild(d);if(typeof o=="function"){var w=o;o=function(){var T=Tl(x);w.call(T)}}var x=Oa(n,0,!1,null,null,!1,!1,"",Ad);return n._reactRootContainer=x,n[Ze]=x.current,Kr(n.nodeType===8?n.parentNode:n),Ht(function(){Dl(e,x,r,o)}),x}function bl(n,e,r,o,d){var p=r._reactRootContainer;if(p){var y=p;if(typeof d=="function"){var w=d;d=function(){var x=Tl(y);w.call(x)}}Dl(e,y,n,d)}else y=Ag(r,e,n,d,o);return Tl(y)}Zs=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var r=br(e.pendingLanes);r!==0&&(oo(e,r|1),he(e,Un()),(Ln&6)===0&&(Cr=Un()+500,vt()))}break;case 13:Ht(function(){var o=rt(n,1);if(o!==null){var d=ce();je(o,n,1,d)}}),ba(n,1)}},ao=function(n){if(n.tag===13){var e=rt(n,134217728);if(e!==null){var r=ce();je(e,n,134217728,r)}ba(n,134217728)}},nu=function(n){if(n.tag===13){var e=Et(n),r=rt(n,e);if(r!==null){var o=ce();je(r,n,e,o)}ba(n,e)}},eu=function(){return Mn},tu=function(n,e){var r=Mn;try{return Mn=n,e()}finally{Mn=r}},Zl=function(n,e,r){switch(e){case"input":if(Zt(n,r),e=r.name,r.type==="radio"&&e!=null){for(r=n;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var o=r[e];if(o!==n&&o.form===n.form){var d=Xi(o);if(!d)throw Error(i(90));Ii(o),Zt(o,d)}}}break;case"textarea":Li(n,r);break;case"select":e=r.value,e!=null&&ut(n,!!r.multiple,e,!1)}},Gs=La,js=Ht;var vg={usingClientEntryPoint:!1,Events:[Zr,cr,Xi,zs,Bs,La]},fi={findFiberByHostInstance:Ot,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Sg={bundleType:fi.bundleType,version:fi.version,rendererPackageName:fi.rendererPackageName,rendererConfig:fi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Vs(n),n===null?null:n.stateNode},findFiberByHostInstance:fi.findFiberByHostInstance||kg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fl.isDisabled&&Fl.supportsFiber)try{Mi=Fl.inject(Sg),We=Fl}catch{}}return ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vg,ye.createPortal=function(n,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Na(e))throw Error(i(200));return yg(n,e,null,r)},ye.createRoot=function(n,e){if(!Na(n))throw Error(i(299));var r=!1,o="",d=kd;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onRecoverableError!==void 0&&(d=e.onRecoverableError)),e=Oa(n,1,!1,null,null,r,!1,o,d),n[Ze]=e.current,Kr(n.nodeType===8?n.parentNode:n),new Fa(e)},ye.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(i(188)):(n=Object.keys(n).join(","),Error(i(268,n)));return n=Vs(e),n=n===null?null:n.stateNode,n},ye.flushSync=function(n){return Ht(n)},ye.hydrate=function(n,e,r){if(!Ol(e))throw Error(i(200));return bl(null,n,e,!0,r)},ye.hydrateRoot=function(n,e,r){if(!Na(n))throw Error(i(405));var o=r!=null&&r.hydratedSources||null,d=!1,p="",y=kd;if(r!=null&&(r.unstable_strictMode===!0&&(d=!0),r.identifierPrefix!==void 0&&(p=r.identifierPrefix),r.onRecoverableError!==void 0&&(y=r.onRecoverableError)),e=hd(e,null,n,1,r??null,d,!1,p,y),n[Ze]=e.current,Kr(n),o)for(n=0;n<o.length;n++)r=o[n],d=r._getVersion,d=d(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,d]:e.mutableSourceEagerHydrationData.push(r,d);return new Ml(e)},ye.render=function(n,e,r){if(!Ol(e))throw Error(i(200));return bl(null,n,e,!1,r)},ye.unmountComponentAtNode=function(n){if(!Ol(n))throw Error(i(40));return n._reactRootContainer?(Ht(function(){bl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ze]=null})}),!0):!1},ye.unstable_batchedUpdates=La,ye.unstable_renderSubtreeIntoContainer=function(n,e,r,o){if(!Ol(r))throw Error(i(200));if(n==null||n._reactInternals===void 0)throw Error(i(38));return bl(n,e,r,!1,o)},ye.version="18.3.1-next-f1338f8080-20240426",ye}var Id;function _g(){if(Id)return Ga.exports;Id=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(l){console.error(l)}}return t(),Ga.exports=Eg(),Ga.exports}var Ed;function Lg(){if(Ed)return Nl;Ed=1;var t=_g();return Nl.createRoot=t.createRoot,Nl.hydrateRoot=t.hydrateRoot,Nl}var Rg=Lg();const Pg=ys(Rg),Dg=`---
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
`,Tg=`---
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
`,Mg=`---
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
`,Og=`---
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
`,bg=`---
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
`,Fg=`---
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
`,Ng=`---
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
`,zg=`---
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
`,Bg=`---
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
`,Gg=`---
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
`,jg=`---
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
`,Hg=`---
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
`,Ug=`---
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
`,Wg=`---
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
`,Vg=`---
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
`,qg=`---
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
`,Qg=`---
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
`,$g=`---
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
`,Jg=`---
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
`,Kg=`---
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
`,Yg=`---
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
`,Xg=`---
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
`,Zg=`---
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
`,nh=`---
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
`,eh=`---
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
`,th=`---
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
`,rh=`---
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
`,ih=`---
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
`,lh=`---
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
`,oh=`---
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
`,ah=`---
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
`,sh=`---
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
`,uh=`---
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
`,ch=`---
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
`,dh=`---
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
`,ph=`---
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
`,fh=`---
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
`,gh=`---
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
`,hh=`---
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
`,yh=`---
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
`,kh=`---
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
`,Ah=`---
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
`,vh=`---
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
`,Sh=`---
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
`,wh=`---
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
`,Ch=`---
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
`,xh=`---
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
`,Ih=`---
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
`,Eh=`---
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
`,Lh=`---
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
`,Rh=`---
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
`,Ph=`---
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
`,Dh=`---
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
`,Th=`---
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
`,Mh=`---
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
`,Oh='# LLM Wiki — 全站索引\n\n> 自动维护，每次 ingest 后更新。按分类组织，每行一条：链接 + 摘要 + 标签。\n\n---\n\n## 实体\n<!-- 人物、模型、工具、数据集、公司/组织 -->\n\n- [Unsloth](wiki/entities/unsloth.md) — 开源 LLM 高效微调框架，CUDA 内核优化实现 2~12 倍训练加速，70%~80% 显存节省 `#工具 #微调 #开源`\n- [Firecrawl](wiki/entities/firecrawl.md) — AI 原生网页数据采集引擎，输出 LLM 可消费的 Markdown/JSON，GitHub 14.2 万 Star `#工具 #网页爬虫 #MCP`\n- [Snail AI](wiki/entities/snail-ai.md) — 基于 Spring Boot 4 + Spring AI 2.0 的 Java 企业级 AI Agent 平台，Apache 2.0 开源 `#工具 #AI-Agent #Java`\n- [OpenSquilla](wiki/entities/opensquilla.md) — AI 编程工具，引入红绿回归证据链实现代码自验证与自修复，成本降低 60%~80% `#工具 #AI编程 #测试驱动`\n- [AutoLink](wiki/entities/autolink.md) — 面向大数据场景的语义 Schema Linking 开源工具，将数据库结构转为向量嵌入实现 NL2SQL `#工具 #Text-to-SQL #开源`\n- [Claude Code](wiki/entities/claude-code.md) — Anthropic 推出的命令行 AI 编程工具，多 Agent 分层架构，支持 subAgent 委派和项目记忆 `#工具 #AI编程 #Agent`\n- [Codex CLI](wiki/entities/codex-cli.md) — GitHub 开源的终端 AI 编程 CLI 工具，支持 Agents/Skills 模式 `#工具 #AI编程 #GitHub`\n- [PageAgent](wiki/entities/pageagent.md) — 阿里开源 32KB JS 网页 AI 操控框架，DOM 脱水技术，比 Browser-use 轻 100 倍 `#工具 #Web自动化 #AI-Agent`\n- [LightRAG](wiki/entities/lightrag.md) — 港大 GraphRAG 框架，知识图谱替代传统 Chunk，EMNLP 2025，36.7k Star `#工具 #RAG #知识图谱`\n- [OpenClaw](wiki/entities/openclaw.md) — 自进化单 Agent 框架，4 层记忆系统（L0-L3），支持 NAS Docker 部署 `#工具 #AI-Agent #记忆系统`\n- [Hermes Agent](wiki/entities/hermes-agent.md) — 清华大学自进化 Agent，自动分析失败原因并修正策略 `#工具 #AI-Agent #自进化`\n- [Superpowers](wiki/entities/superpowers.md) — 116k+ Star AI 编程 Skills 框架，TDD 驱动的模块化能力扩展体系 `#工具 #AI编程 #Skills`\n- [gstack](wiki/entities/gstack.md) — YC CEO Garry Tan 的 Claude Code 技能包，111k Star，角色化 Agent 执行 `#工具 #AI编程 #角色化`\n- [OpenSpec](wiki/entities/openspec.md) — 规范驱动开发（SDD）框架，Spec → Execute → Verify → Archive 五阶段流程 `#工具 #AI编程 #SDD`\n- [Spec Kit](wiki/entities/spec-kit.md) — GitHub 官方开源的规格驱动开发（SDD）工具包，支持 30+ AI Coding Agent，118k Star，MIT 协议 `#工具 #AI编程 #SDD #GitHub`\n- [BMAD](wiki/entities/bmad.md) — 重量级 SDD 平台，BMC 分析 → 架构 → 数据模型 → 代码生成全流程 `#工具 #AI编程 #SDD`\n- [ECC](wiki/entities/ecc.md) — Everything Claude Code，21.7 万 Star 的 Claude Code 最强插件合集 `#工具 #AI编程 #插件`\n- [MUX0](wiki/entities/mux0.md) — 专为 Claude Code 设计的开源 AI 编程终端，基于 Ghostty `#工具 #AI编程 #终端`\n- [MemPalace](wiki/entities/mempalace.md) — 开源 AI 记忆系统，55k Star，ChromaDB + 语义搜索，本地优先 `#工具 #记忆系统 #开源`\n- [Apache Burr](wiki/entities/apache-burr.md) — 状态机驱动的 Agent 框架，LangChain 替代方案 `#工具 #Agent框架 #状态机`\n- [PYTHIA](wiki/entities/pythia.md) — 本地无密钥 AI Agent 工具，融合 Osiris 实时情报与 MiroFish 多智能体预测，Ollama 运行 `#工具 #AI-Agent #实时感知 #开源情报`\n- [UZI-Skill](wiki/entities/uzi-skill.md) — 开源 AI 股票深度分析插件，22维×66评委×22种机构方法，支持 A/港股/美股 `#工具 #股票分析 #投资 #金融`\n- [Comet](wiki/entities/comet.md) — 基于 OpenSpec + Superpowers 的自动化 Spec Skills 编排工具 `#工具 #AI编程 #自动化`\n- [RAG-Anything](wiki/entities/rag-anything.md) — 港大多模态 RAG，知识图谱统一处理文本/图像/表格 `#工具 #RAG #多模态`\n- [cc-switch](wiki/entities/cc-switch.md) — 跨平台 AI 助手桌面工具，104k Star，Rust + Tauri `#工具 #桌面工具 #跨平台`\n- [CC-Connect](wiki/entities/cc-connect.md) — 飞书/微信中调用 AI Agent 编程的桥接工具 `#工具 #AI-Agent #飞书`\n- [GSD](wiki/entities/gsd.md) — Get Shit Done，面向大型项目的上下文工程系统，解决 Context Rot `#工具 #上下文工程 #大型项目`\n- [FlashRT](wiki/entities/flashrt.md) — 高性能实时推理引擎，小批量低延迟，面向具身智能 `#工具 #推理引擎 #低延迟`\n- [SeedER](wiki/entities/seeder.md) — 强化学习驱动的知识图谱结构化检索系统 `#工具 #知识检索 #强化学习`\n- [Huashu Design](wiki/entities/huashu-design.md) — 花叔开源 Claude Code 设计 Skill，19k Star `#工具 #设计 #UI`\n- [khazix-skills](wiki/entities/khazix-skills.md) — 数字生命卡兹克开源 AI Skills 合集 `#工具 #AI编程 #Skills`\n- [Understand Anything](wiki/entities/understand-anything.md) — 代码库 → 交互式知识图谱转换工具 `#工具 #代码分析 #知识图谱`\n- [html-video](wiki/entities/html-video.md) — 把 HTML + CSS 通过 AI Agent 直接渲染为 MP4 视频，本地运行，插件化引擎，21 模板 `#工具 #视频生成 #AI编程`\n- [FuseAI](wiki/entities/fuseai.md) — 中山大学/腾讯发起的开源 LLM 知识融合研究社区 `#模型融合 #开源 #研究`\n- [InfiFusion](wiki/entities/infifusion.md) — Reallm-Labs 的统一 LLM 融合框架，首个融合 4 个 14B+ 异构模型 `#模型融合 #知识蒸馏 #LLM融合`\n- [mergekit](wiki/entities/mergekit.md) — HuggingFace 流行的模型合并工具，SLERP/TIES/DARE 无需 GPU 即可合并 `#模型融合 #工具 #模型合并`\n\n## 概念\n<!-- 技术概念、方法论、理论 -->\n\n- [模型融合](wiki/concepts/model-fusion.md) — 将多个 LLM 通过参数合并或知识蒸馏统一为一个模型，无需从零训练 `#模型融合 #LLM #融合方法`\n- [模型微调](wiki/concepts/model-finetuning.md) — 在预训练大模型上继续训练使之适配下游任务，含 Full Fine-tuning / PEFT / LoRA / QLoRA 等变体 `#训练方法 #LLM`\n- [MCP 模型上下文协议](wiki/concepts/mcp-model-context-protocol.md) — Anthropic 提出的开放协议，标准化 AI 模型与外部工具之间的通信接口，已获 ChatGPT/VS Code/Cursor 等广泛支持 `#协议 #Agent #标准化 #工具集成`\n- [AI Agent](wiki/concepts/ai-agent.md) — 具备自主感知-规划-行动能力的 AI 系统，支持工具使用、记忆管理和多步推理 `#Agent #自动化`\n- [RAG 检索增强生成](wiki/concepts/rag-retrieval-augmented-generation.md) — 检索 + 生成的混合架构，已从独立系统演进为 Agent 组件 `#检索 #知识库 #LLM #Agentic`\n- [红绿回归测试](wiki/concepts/red-green-regression-testing.md) — AI 自动执行红-绿-回归三道测试关卡，通过后才交付代码的验证管道 `#测试 #AI编程 #自动化`\n- [AI 编程](wiki/concepts/ai-programming.md) — LLM 辅助/自动完成代码生成、测试、审查、修复，从补全→自主生成→自验证三个发展阶段 `#AI编程 #开发工具`\n- [混合专家模型 MoE](wiki/concepts/moe-mixture-of-experts.md) — 稀疏激活的神经网络架构，每次推理只激活少数专家，同计算量下大幅扩大模型容量 `#模型架构 #稀疏计算`\n- [测试驱动开发 TDD](wiki/concepts/test-driven-development.md) — 先写测试再写代码的软件开发方法论，红-绿-重构循环 `#测试 #软件工程`\n- [统一开发范式](wiki/concepts/dev-flow-unified-paradigm.md) — 融合 OpenSpec 规范驱动和 Superpowers 纪律驱动的五阶段开发流程 `#开发范式 #AI编程 #规范驱动`\n- [自改进AI Agent](wiki/concepts/self-improving-agent.md) — AI Agent 自动记录学习和错误经验，持续自我修复并将重要知识提升为项目记忆 `#AI-Agent #自我修复 #自动化`\n- [Spec驱动开发 SDD](wiki/concepts/spec-driven-development.md) — 人写规格说明书 → AI 写代码+测试+验证，人类从"写代码"转为"审 Spec" `#AI编程 #SDD #开发范式`\n- [Agent记忆系统](wiki/concepts/agent-memory-system.md) — L0-L3 四层记忆架构，从短期上下文到持久语义记忆 `#AI-Agent #记忆系统 #自进化`\n- [本体论 Ontology](wiki/concepts/ontology.md) — 知识工程中形式化描述领域概念及其关系的框架，AI 时代重新变得关键 `#知识建模 #语义网 #Ontology`\n- [FDE](wiki/concepts/fde.md) — Forward Deployed Engineer，工程师深入客户现场的 AI 落地范式 `#AI落地 #PMF #方法论`\n- [Prompt Caching](wiki/concepts/prompt-caching.md) — AI Agent 工程关键优化技术，缓存系统提示词降低延迟和成本 `#性能优化 #Agent工程 #Claude-Code`\n- [Loop Engineering](wiki/concepts/loop-engineering.md) — 设计 Agent 自主执行循环的方法论，替代单次 Prompt 工程 `#AI-Agent #自动化 #方法论`\n- [Agent工具选择问题](wiki/concepts/agent-tool-selection.md) — 当 Agent 拥有过多 Tool 时的选择困难与解决方向 `#AI-Agent #Tool管理`\n- [AI 网关与模型路由](wiki/concepts/ai-gateway.md) — 聚合多模型提供商，统一 API 接入与自动路由，零成本调用 237 个 AI 免费额度 `#API网关 #模型路由 #成本优化 #Agent基础设施`\n- [上下文工程](wiki/concepts/context-engineering.md) — 系统化管理 AI Agent 在大型项目中的代码上下文，解决 Context Rot `#AI编程 #上下文管理`\n- [OKF 开放知识格式](wiki/concepts/okf-open-knowledge-format.md) — Google 提出的 AI Agent 可消费结构化知识标准 `#知识格式 #Google #AI-Agent`\n\n## 主题\n<!-- 技术领域、研究方向、行业动态 -->\n\n- [Unsloth — 消费级 GPU 高效微调大模型](wiki/topics/unsloth-efficient-llm-finetuning.md) — 开源框架让普通显卡也能微调 7B 级大模型，2026 年推出无代码 Web UI `#模型训练 #微调 #开源`\n- [Firecrawl — AI 原生的网页数据采集引擎](wiki/topics/firecrawl-web-scraping.md) — 将任意网站转为 LLM 可消费的结构化数据，配套 MCP Server 接入 Agent 生态 `#网页爬虫 #MCP #AI`\n- [Snail AI — Java 生态的企业级 AI Agent 平台](wiki/topics/snail-ai-agent-platform.md) — 让 Java 开发者不需 Python 就能构建多模型管理、RAG、长时记忆的 Agent 应用 `#AI项目 #Java #Agent`\n- [OpenSquilla — AI 代码生成的自验证与自修复](wiki/topics/opensquilla-ai-self-verification.md) — AI 编程从"生成代码"进化到"验证代码"，红绿回归闭环实现可审计的代码交付 `#AI编程 #测试驱动 #自动化`\n- [万象AI分析平台](wiki/topics/wanxiang-ai-analysis.md) — 基于 MCP 协议的智能数据分析平台，集成流量地图、交叉分析、AI圈人等全链路能力 `#AI分析 #数据平台 #MCP`\n- [AI Agent 技术全景报告 2026](wiki/topics/ai-agent-landscape-2026.md) — 六大趋势 × 架构范式 × 框架对比，基于 50+ 篇技术资料的系统梳理 `#AI-Agent #技术全景 #2026`\n- [Karpathy AI编码方法论](wiki/topics/karpathy-ai-coding-methodology.md) — 65行 CLAUDE.md 定义的四条铁律：先想再写、简洁第一、手术式修改、目标驱动 `#AI编程 #方法论 #Karpathy`\n- [AI Native 研发体系](wiki/topics/ai-native-dev-system.md) — 以 AI 为核心重新设计软件开发全流程，从辅助工具到 Agent 自主执行 `#AI-Native #研发体系 #软件2.0`\n- [Agentic RAG](wiki/topics/agentic-rag.md) — RAG 从独立系统降级为 Agent 工具箱中的组件，由 Agent 自主决定检索策略 `#RAG #Agent #Agentic-RAG`\n- [StarRocks 跨数据源查询方案](wiki/topics/starrocks-cross-data-source-query.md) — StarRocks Catalog 方案实现 Hive/Iceberg/MySQL/ES 等跨源 JOIN 查询，v3.0+ 推荐 `#StarRocks #数据查询 #跨数据源`\n- [RAG 评估体系与方法论](wiki/topics/rag-evaluation.md) — 评估三维度、LLM-as-Judge / RAGAS / DeepEval 框架对比、论文支撑 `#RAG #评估 #LLM-as-Judge`\n\n## 综述\n<!-- 多源对比、综合分析、阶段性总结 -->\n\n- [AI编程Agent框架对比分析](wiki/synthesis/agent-framework-comparison.md) — 从规划、记忆、架构、创新技术四个维度对比 Claude Code / Gemini / Cursor 等主流编程 Agent `#AI编程 #Agent #对比分析`\n- [2026上半年万象项目复盘](wiki/synthesis/2026-h1-wanxiang-review.md) — 万象 AI Agent 能力建设、智能圈人、ChatBI、标签治理四大方向复盘 `#复盘 #万象 #2026`\n- [BMAD vs OpenSpec：航母与特种兵](wiki/synthesis/bmad-vs-openspec.md) — AI 驱动开发两大赛道的多维度对比与选型建议 `#SDD #对比分析 #BMAD #OpenSpec`\n- [AI增强开发三件套](wiki/synthesis/ai-dev-trifecta.md) — OpenSpec + Superpowers + gstack 把 Vibe Coding 拉回工程交付 `#AI编程 #工程交付 #三件套`\n- [LLM 模型融合深度报告](wiki/synthesis/model-fusion-deep-report.md) — 从原理、技术路线、实现方式、评测四维度系统性梳理模型融合全貌 `#模型融合 #综述 #评测`\n\n---\n\n_最后更新于 2026-07-07_ | 全站 73 页面，覆盖 AI Agent、AI 编程、RAG、知识图谱、SDD、知识管理方法论、模型融合等核心领域\n',bh=`# LLM Wiki — 操作日志

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
`,Fh=`---
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
`,Nh=`---
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
`,zh=`---
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
`,Bh=`---
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
`,Gh=`---
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
`,jh=`---
title: 标签索引
summary: 按标签浏览所有 Wiki 页面
---

# 标签索引

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

## Context Rot

- [上下文工程 (Context Engineering)](concepts/context-engineering.md)

## Cursor

- [AI编程Agent框架对比分析](synthesis/agent-framework-comparison.md)

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

`,Hh=`---
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
`,Uh=`---
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
`,Wh=`---
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
`,Vh=`---
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
`,qh=`---
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
`,Qh=`---
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
`,Jh=`---
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
`,Kh=`---
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
`,Yh=`---
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
`,Xh=`---
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
`,Zh=`---
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
`;var Ua={exports:{}},mi={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _d;function ny(){if(_d)return mi;_d=1;var t=ks(),l=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(f,m,g){var k,h={},v=null,A=null;g!==void 0&&(v=""+g),m.key!==void 0&&(v=""+m.key),m.ref!==void 0&&(A=m.ref);for(k in m)a.call(m,k)&&!c.hasOwnProperty(k)&&(h[k]=m[k]);if(f&&f.defaultProps)for(k in m=f.defaultProps,m)h[k]===void 0&&(h[k]=m[k]);return{$$typeof:l,type:f,key:v,ref:A,props:h,_owner:s.current}}return mi.Fragment=i,mi.jsx=u,mi.jsxs=u,mi}var Ld;function ey(){return Ld||(Ld=1,Ua.exports=ny()),Ua.exports}var H=ey();const Rd={title:"📑 标签索引",path:"wiki/tags-index.md",summary:"按标签浏览所有页面",tags:[]};function Pd({categories:t,activePath:l,onSelect:i,onToggleCategory:a,onSearch:s,pageCount:c,allTags:u,activeTag:f,onTagSelect:m}){const[g,k]=Dn.useState(!0),[h,v]=Dn.useState("");Dn.useEffect(()=>{f&&k(!1)},[f]),Dn.useEffect(()=>{g&&v("")},[g]);const A=h.toLowerCase().trim(),E=A.length>=1?u.filter(R=>R.name.toLowerCase().includes(A)):u;return H.jsxs("aside",{className:"sidebar",children:[H.jsxs("div",{className:"sidebar-header",children:[H.jsx("h1",{children:"LLM Wiki"}),H.jsxs("p",{children:[c," 个页面"]})]}),H.jsx("div",{className:"sidebar-search",children:H.jsxs("button",{onClick:s,children:[H.jsx("svg",{width:"16",height:"16",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:H.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),H.jsx("span",{children:"搜索页面..."}),H.jsx("kbd",{children:"Ctrl+K"})]})}),H.jsxs("nav",{className:"sidebar-nav",children:[t.map(R=>H.jsxs("div",{style:{marginBottom:4},children:[H.jsxs("button",{onClick:()=>a(R.name),className:"cat-btn",children:[H.jsx("span",{className:`arrow ${R.collapsed?"":"open"}`,children:"▶"}),R.name,H.jsx("span",{className:"count",children:R.pages.length})]}),!R.collapsed&&H.jsx("div",{className:"cat-pages",children:R.pages.map(F=>H.jsx("div",{children:H.jsx("button",{onClick:()=>i(F),className:`page-btn${l===F.path?" active":""}`,title:F.summary||F.title,children:F.title})},F.path))})]},R.name)),u.length>0&&H.jsxs("div",{style:{padding:"8px 0",marginTop:8,borderTop:"1px solid var(--border)"},children:[H.jsxs("button",{onClick:()=>k(!g),className:"cat-btn",style:{marginBottom:4},children:[H.jsx("span",{className:`arrow ${g?"":"open"}`,children:"▶"}),"标签",H.jsx("span",{className:"count",children:u.length})]}),!g&&!f&&H.jsxs("div",{children:[H.jsx("div",{style:{padding:"4px 8px 6px"},children:H.jsx("input",{type:"text",value:h,onChange:R=>v(R.target.value),placeholder:"搜索标签...",className:"tag-search-input"})}),H.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:4,padding:"4px 8px",maxHeight:300,overflowY:"auto"},children:[E.length===0&&H.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",padding:"4px 0"},children:"无匹配标签"}),E.map(R=>H.jsxs("button",{onClick:F=>{F.stopPropagation(),m(R.name)},className:"tag-btn",children:[R.name,H.jsx("span",{className:"tag-count",children:R.count})]},R.name))]})]}),!g&&f&&H.jsxs("div",{style:{padding:"4px 8px",fontSize:12,color:"var(--text-muted)"},children:["已选: ",H.jsxs("strong",{style:{color:"var(--accent)"},children:["#",f]}),H.jsx("button",{onClick:R=>{R.stopPropagation(),m(f)},style:{marginLeft:8,fontSize:11,color:"var(--text-muted)",textDecoration:"underline"},children:"清除"})]}),g&&f&&H.jsxs("div",{style:{padding:"4px 8px",fontSize:12,color:"var(--text-muted)"},children:["已选: ",H.jsxs("strong",{style:{color:"var(--accent)"},children:["#",f]}),H.jsx("button",{onClick:R=>{R.stopPropagation(),m(f)},style:{marginLeft:8,fontSize:11,color:"var(--text-muted)",textDecoration:"underline"},children:"清除"})]}),H.jsx("button",{onClick:()=>{i(Rd)},className:`page-btn${l===Rd.path?" active":""}`,style:{margin:"4px 8px",fontSize:12},title:"按标签浏览所有页面",children:"📑 标签索引"})]})]}),H.jsx("div",{className:"sidebar-footer",children:"LLM Wiki Viewer · 自动索引"})]})}function ty(t,l){const i={};return(t[t.length-1]===""?[...t,""]:t).join((i.padRight?" ":"")+","+(i.padLeft===!1?"":" ")).trim()}const ry=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,iy=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,ly={};function Dd(t,l){return(ly.jsx?iy:ry).test(t)}const oy=/[ \t\n\f\r]/g;function ay(t){return typeof t=="object"?t.type==="text"?Td(t.value):!1:Td(t)}function Td(t){return t.replace(oy,"")===""}class wi{constructor(l,i,a){this.normal=i,this.property=l,a&&(this.space=a)}}wi.prototype.normal={};wi.prototype.property={};wi.prototype.space=void 0;function wp(t,l){const i={},a={};for(const s of t)Object.assign(i,s.property),Object.assign(a,s.normal);return new wi(i,a,l)}function os(t){return t.toLowerCase()}class Ae{constructor(l,i){this.attribute=i,this.property=l}}Ae.prototype.attribute="";Ae.prototype.booleanish=!1;Ae.prototype.boolean=!1;Ae.prototype.commaOrSpaceSeparated=!1;Ae.prototype.commaSeparated=!1;Ae.prototype.defined=!1;Ae.prototype.mustUseProperty=!1;Ae.prototype.number=!1;Ae.prototype.overloadedBoolean=!1;Ae.prototype.property="";Ae.prototype.spaceSeparated=!1;Ae.prototype.space=void 0;let sy=0;const An=Yt(),Qn=Yt(),as=Yt(),W=Yt(),On=Yt(),$t=Yt(),Ie=Yt();function Yt(){return 2**++sy}const ss=Object.freeze(Object.defineProperty({__proto__:null,boolean:An,booleanish:Qn,commaOrSpaceSeparated:Ie,commaSeparated:$t,number:W,overloadedBoolean:as,spaceSeparated:On},Symbol.toStringTag,{value:"Module"})),Wa=Object.keys(ss);class As extends Ae{constructor(l,i,a,s){let c=-1;if(super(l,i),Md(this,"space",s),typeof a=="number")for(;++c<Wa.length;){const u=Wa[c];Md(this,Wa[c],(a&ss[u])===ss[u])}}}As.prototype.defined=!0;function Md(t,l,i){i&&(t[l]=i)}function Er(t){const l={},i={};for(const[a,s]of Object.entries(t.properties)){const c=new As(a,t.transform(t.attributes||{},a),s,t.space);t.mustUseProperty&&t.mustUseProperty.includes(a)&&(c.mustUseProperty=!0),l[a]=c,i[os(a)]=a,i[os(c.attribute)]=a}return new wi(l,i,t.space)}const Cp=Er({properties:{ariaActiveDescendant:null,ariaAtomic:Qn,ariaAutoComplete:null,ariaBusy:Qn,ariaChecked:Qn,ariaColCount:W,ariaColIndex:W,ariaColSpan:W,ariaControls:On,ariaCurrent:null,ariaDescribedBy:On,ariaDetails:null,ariaDisabled:Qn,ariaDropEffect:On,ariaErrorMessage:null,ariaExpanded:Qn,ariaFlowTo:On,ariaGrabbed:Qn,ariaHasPopup:null,ariaHidden:Qn,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:On,ariaLevel:W,ariaLive:null,ariaModal:Qn,ariaMultiLine:Qn,ariaMultiSelectable:Qn,ariaOrientation:null,ariaOwns:On,ariaPlaceholder:null,ariaPosInSet:W,ariaPressed:Qn,ariaReadOnly:Qn,ariaRelevant:null,ariaRequired:Qn,ariaRoleDescription:On,ariaRowCount:W,ariaRowIndex:W,ariaRowSpan:W,ariaSelected:Qn,ariaSetSize:W,ariaSort:null,ariaValueMax:W,ariaValueMin:W,ariaValueNow:W,ariaValueText:null,role:null},transform(t,l){return l==="role"?l:"aria-"+l.slice(4).toLowerCase()}});function xp(t,l){return l in t?t[l]:l}function Ip(t,l){return xp(t,l.toLowerCase())}const uy=Er({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:$t,acceptCharset:On,accessKey:On,action:null,allow:null,allowFullScreen:An,allowPaymentRequest:An,allowUserMedia:An,alpha:An,alt:null,as:null,async:An,autoCapitalize:null,autoComplete:On,autoFocus:An,autoPlay:An,blocking:On,capture:null,charSet:null,checked:An,cite:null,className:On,closedBy:null,colorSpace:null,cols:W,colSpan:W,command:null,commandFor:null,content:null,contentEditable:Qn,controls:An,controlsList:On,coords:W|$t,crossOrigin:null,data:null,dateTime:null,decoding:null,default:An,defer:An,dir:null,dirName:null,disabled:An,download:as,draggable:Qn,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:An,formTarget:null,headers:On,height:W,hidden:as,high:W,href:null,hrefLang:null,htmlFor:On,httpEquiv:On,id:null,imageSizes:null,imageSrcSet:null,inert:An,inputMode:null,integrity:null,is:null,isMap:An,itemId:null,itemProp:On,itemRef:On,itemScope:An,itemType:On,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:An,low:W,manifest:null,max:null,maxLength:W,media:null,method:null,min:null,minLength:W,multiple:An,muted:An,name:null,nonce:null,noModule:An,noValidate:An,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:An,optimum:W,pattern:null,ping:On,placeholder:null,playsInline:An,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:An,referrerPolicy:null,rel:On,required:An,reversed:An,rows:W,rowSpan:W,sandbox:On,scope:null,scoped:An,seamless:An,selected:An,shadowRootClonable:An,shadowRootCustomElementRegistry:An,shadowRootDelegatesFocus:An,shadowRootMode:null,shadowRootSerializable:An,shape:null,size:W,sizes:null,slot:null,span:W,spellCheck:Qn,src:null,srcDoc:null,srcLang:null,srcSet:null,start:W,step:null,style:null,tabIndex:W,target:null,title:null,translate:null,type:null,typeMustMatch:An,useMap:null,value:Qn,width:W,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:On,axis:null,background:null,bgColor:null,border:W,borderColor:null,bottomMargin:W,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:An,declare:An,event:null,face:null,frame:null,frameBorder:null,hSpace:W,leftMargin:W,link:null,longDesc:null,lowSrc:null,marginHeight:W,marginWidth:W,noResize:An,noHref:An,noShade:An,noWrap:An,object:null,profile:null,prompt:null,rev:null,rightMargin:W,rules:null,scheme:null,scrolling:Qn,standby:null,summary:null,text:null,topMargin:W,valueType:null,version:null,vAlign:null,vLink:null,vSpace:W,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:An,disablePictureInPicture:An,disableRemotePlayback:An,exportParts:$t,part:On,prefix:null,property:null,results:W,security:null,unselectable:null},space:"html",transform:Ip}),cy=Er({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",maskType:"mask-type",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Ie,accentHeight:W,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:W,amplitude:W,arabicForm:null,ascent:W,attributeName:null,attributeType:null,azimuth:W,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:W,by:null,calcMode:null,capHeight:W,className:On,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:W,diffuseConstant:W,direction:null,display:null,dur:null,divisor:W,dominantBaseline:null,download:An,dx:null,dy:null,edgeMode:null,editable:null,elevation:W,enableBackground:null,end:null,event:null,exponent:W,externalResourcesRequired:null,fill:null,fillOpacity:W,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:$t,g2:$t,glyphName:$t,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:W,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:W,horizOriginX:W,horizOriginY:W,id:null,ideographic:W,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:W,k:W,k1:W,k2:W,k3:W,k4:W,kernelMatrix:Ie,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:W,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:W,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:W,overlineThickness:W,paintOrder:null,panose1:null,path:null,pathLength:W,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:On,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:W,pointsAtY:W,pointsAtZ:W,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Ie,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Ie,rev:Ie,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Ie,requiredFeatures:Ie,requiredFonts:Ie,requiredFormats:Ie,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:W,specularExponent:W,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:W,strikethroughThickness:W,string:null,stroke:null,strokeDashArray:Ie,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:W,strokeOpacity:W,strokeWidth:null,style:null,surfaceScale:W,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Ie,tabIndex:W,tableValues:null,target:null,targetX:W,targetY:W,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Ie,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:W,underlineThickness:W,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:W,values:null,vAlphabetic:W,vMathematical:W,vectorEffect:null,vHanging:W,vIdeographic:W,version:null,vertAdvY:W,vertOriginX:W,vertOriginY:W,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:W,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:xp}),Ep=Er({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(t,l){return"xlink:"+l.slice(5).toLowerCase()}}),_p=Er({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Ip}),Lp=Er({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(t,l){return"xml:"+l.slice(3).toLowerCase()}}),dy={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},py=/[A-Z]/g,Od=/-[a-z]/g,fy=/^data[-\w.:]+$/i;function my(t,l){const i=os(l);let a=l,s=Ae;if(i in t.normal)return t.property[t.normal[i]];if(i.length>4&&i.slice(0,4)==="data"&&fy.test(l)){if(l.charAt(4)==="-"){const c=l.slice(5).replace(Od,hy);a="data"+c.charAt(0).toUpperCase()+c.slice(1)}else{const c=l.slice(4);if(!Od.test(c)){let u=c.replace(py,gy);u.charAt(0)!=="-"&&(u="-"+u),l="data"+u}}s=As}return new s(a,l)}function gy(t){return"-"+t.toLowerCase()}function hy(t){return t.charAt(1).toUpperCase()}const yy=wp([Cp,uy,Ep,_p,Lp],"html"),vs=wp([Cp,cy,Ep,_p,Lp],"svg");function ky(t){return t.join(" ").trim()}var gi={},Va,bd;function Ay(){if(bd)return Va;bd=1;var t=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,l=/\n/g,i=/^\s*/,a=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,s=/^:\s*/,c=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,u=/^[;\s]*/,f=/^\s+|\s+$/g,m=`
`,g="/",k="*",h="",v="comment",A="declaration";Va=function(R,F){if(typeof R!="string")throw new TypeError("First argument must be a string");if(!R)return[];F=F||{};var M=1,U=1;function B(J){var Y=J.match(l);Y&&(M+=Y.length);var an=J.lastIndexOf(m);U=~an?J.length-an:U+J.length}function rn(){var J={line:M,column:U};return function(Y){return Y.position=new un(J),en(),Y}}function un(J){this.start=J,this.end={line:M,column:U},this.source=F.source}un.prototype.content=R;function O(J){var Y=new Error(F.source+":"+M+":"+U+": "+J);if(Y.reason=J,Y.filename=F.source,Y.line=M,Y.column=U,Y.source=R,!F.silent)throw Y}function V(J){var Y=J.exec(R);if(Y){var an=Y[0];return B(an),R=R.slice(an.length),Y}}function en(){V(i)}function cn(J){var Y;for(J=J||[];Y=D();)Y!==!1&&J.push(Y);return J}function D(){var J=rn();if(!(g!=R.charAt(0)||k!=R.charAt(1))){for(var Y=2;h!=R.charAt(Y)&&(k!=R.charAt(Y)||g!=R.charAt(Y+1));)++Y;if(Y+=2,h===R.charAt(Y-1))return O("End of comment missing");var an=R.slice(2,Y-2);return U+=2,B(an),R=R.slice(Y),U+=2,J({type:v,comment:an})}}function Z(){var J=rn(),Y=V(a);if(Y){if(D(),!V(s))return O("property missing ':'");var an=V(c),xn=J({type:A,property:E(Y[0].replace(t,h)),value:an?E(an[0].replace(t,h)):h});return V(u),xn}}function Q(){var J=[];cn(J);for(var Y;Y=Z();)Y!==!1&&(J.push(Y),cn(J));return J}return en(),Q()};function E(R){return R?R.replace(f,h):h}return Va}var qa,Fd;function vy(){if(Fd)return qa;Fd=1;var t=Ay();function l(i,a){var s=null;if(!i||typeof i!="string")return s;for(var c,u=t(i),f=typeof a=="function",m,g,k=0,h=u.length;k<h;k++)c=u[k],m=c.property,g=c.value,f?a(m,g,c):g&&(s||(s={}),s[m]=g);return s}return qa=l,qa}var hi={},Nd;function Sy(){if(Nd)return hi;Nd=1,hi.__esModule=!0,hi.camelCase=void 0;var t=/^--[a-zA-Z0-9-]+$/,l=/-([a-z])/g,i=/^[^-]+$/,a=/^-(webkit|moz|ms|o)-/,s=function(c){return!c||i.test(c)||t.test(c)?c:c.toLowerCase().replace(a,function(u,f){return f+"-"}).replace(l,function(u,f){return f.toUpperCase()})};return hi.camelCase=s,hi}var zd;function wy(){return zd||(zd=1,function(t){var l=gi&&gi.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};t.__esModule=!0;var i=l(vy()),a=Sy();function s(c){if(!c||typeof c!="string")return{};var u={};return i.default(c,function(f,m){f&&m&&(u[a.camelCase(f)]=m)}),u}t.default=s}(gi)),gi}var Cy=wy();const xy=ys(Cy),Rp=Pp("end"),Ss=Pp("start");function Pp(t){return l;function l(i){const a=i&&i.position&&i.position[t]||{};if(typeof a.line=="number"&&a.line>0&&typeof a.column=="number"&&a.column>0)return{line:a.line,column:a.column,offset:typeof a.offset=="number"&&a.offset>-1?a.offset:void 0}}}function Iy(t){const l=Ss(t),i=Rp(t);if(l&&i)return{start:l,end:i}}function ki(t){return!t||typeof t!="object"?"":"position"in t||"type"in t?Bd(t.position):"start"in t||"end"in t?Bd(t):"line"in t||"column"in t?us(t):""}function us(t){return Gd(t&&t.line)+":"+Gd(t&&t.column)}function Bd(t){return us(t&&t.start)+"-"+us(t&&t.end)}function Gd(t){return t&&typeof t=="number"?t:1}class se extends Error{constructor(l,i,a){super(),typeof i=="string"&&(a=i,i=void 0);let s="",c={},u=!1;if(i&&("line"in i&&"column"in i?c={place:i}:"start"in i&&"end"in i?c={place:i}:"type"in i?c={ancestors:[i],place:i.position}:c={...i}),typeof l=="string"?s=l:!c.cause&&l&&(u=!0,s=l.message,c.cause=l),!c.ruleId&&!c.source&&typeof a=="string"){const m=a.indexOf(":");m===-1?c.ruleId=a:(c.source=a.slice(0,m),c.ruleId=a.slice(m+1))}if(!c.place&&c.ancestors&&c.ancestors){const m=c.ancestors[c.ancestors.length-1];m&&(c.place=m.position)}const f=c.place&&"start"in c.place?c.place.start:c.place;this.ancestors=c.ancestors||void 0,this.cause=c.cause||void 0,this.column=f?f.column:void 0,this.fatal=void 0,this.file="",this.message=s,this.line=f?f.line:void 0,this.name=ki(c.place)||"1:1",this.place=c.place||void 0,this.reason=this.message,this.ruleId=c.ruleId||void 0,this.source=c.source||void 0,this.stack=u&&c.cause&&typeof c.cause.stack=="string"?c.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}se.prototype.file="";se.prototype.name="";se.prototype.reason="";se.prototype.message="";se.prototype.stack="";se.prototype.column=void 0;se.prototype.line=void 0;se.prototype.ancestors=void 0;se.prototype.cause=void 0;se.prototype.fatal=void 0;se.prototype.place=void 0;se.prototype.ruleId=void 0;se.prototype.source=void 0;const ws={}.hasOwnProperty,Ey=new Map,_y=/[A-Z]/g,Ly=new Set(["table","tbody","thead","tfoot","tr"]),Ry=new Set(["td","th"]),Dp="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Py(t,l){if(!l||l.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const i=l.filePath||void 0;let a;if(l.development){if(typeof l.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");a=zy(i,l.jsxDEV)}else{if(typeof l.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof l.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");a=Ny(i,l.jsx,l.jsxs)}const s={Fragment:l.Fragment,ancestors:[],components:l.components||{},create:a,elementAttributeNameCase:l.elementAttributeNameCase||"react",evaluater:l.createEvaluater?l.createEvaluater():void 0,filePath:i,ignoreInvalidStyle:l.ignoreInvalidStyle||!1,passKeys:l.passKeys!==!1,passNode:l.passNode||!1,schema:l.space==="svg"?vs:yy,stylePropertyNameCase:l.stylePropertyNameCase||"dom",tableCellAlignToStyle:l.tableCellAlignToStyle!==!1},c=Tp(s,t,void 0);return c&&typeof c!="string"?c:s.create(t,s.Fragment,{children:c||void 0},void 0)}function Tp(t,l,i){if(l.type==="element")return Dy(t,l,i);if(l.type==="mdxFlowExpression"||l.type==="mdxTextExpression")return Ty(t,l);if(l.type==="mdxJsxFlowElement"||l.type==="mdxJsxTextElement")return Oy(t,l,i);if(l.type==="mdxjsEsm")return My(t,l);if(l.type==="root")return by(t,l,i);if(l.type==="text")return Fy(t,l)}function Dy(t,l,i){const a=t.schema;let s=a;l.tagName.toLowerCase()==="svg"&&a.space==="html"&&(s=vs,t.schema=s),t.ancestors.push(l);const c=Op(t,l.tagName,!1),u=By(t,l);let f=xs(t,l);return Ly.has(l.tagName)&&(f=f.filter(function(m){return typeof m=="string"?!ay(m):!0})),Mp(t,u,c,l),Cs(u,f),t.ancestors.pop(),t.schema=a,t.create(l,c,u,i)}function Ty(t,l){if(l.data&&l.data.estree&&t.evaluater){const a=l.data.estree.body[0];return a.type,t.evaluater.evaluateExpression(a.expression)}Si(t,l.position)}function My(t,l){if(l.data&&l.data.estree&&t.evaluater)return t.evaluater.evaluateProgram(l.data.estree);Si(t,l.position)}function Oy(t,l,i){const a=t.schema;let s=a;l.name==="svg"&&a.space==="html"&&(s=vs,t.schema=s),t.ancestors.push(l);const c=l.name===null?t.Fragment:Op(t,l.name,!0),u=Gy(t,l),f=xs(t,l);return Mp(t,u,c,l),Cs(u,f),t.ancestors.pop(),t.schema=a,t.create(l,c,u,i)}function by(t,l,i){const a={};return Cs(a,xs(t,l)),t.create(l,t.Fragment,a,i)}function Fy(t,l){return l.value}function Mp(t,l,i,a){typeof i!="string"&&i!==t.Fragment&&t.passNode&&(l.node=a)}function Cs(t,l){if(l.length>0){const i=l.length>1?l:l[0];i&&(t.children=i)}}function Ny(t,l,i){return a;function a(s,c,u,f){const g=Array.isArray(u.children)?i:l;return f?g(c,u,f):g(c,u)}}function zy(t,l){return i;function i(a,s,c,u){const f=Array.isArray(c.children),m=Ss(a);return l(s,c,u,f,{columnNumber:m?m.column-1:void 0,fileName:t,lineNumber:m?m.line:void 0},void 0)}}function By(t,l){const i={};let a,s;for(s in l.properties)if(s!=="children"&&ws.call(l.properties,s)){const c=jy(t,s,l.properties[s]);if(c){const[u,f]=c;t.tableCellAlignToStyle&&u==="align"&&typeof f=="string"&&Ry.has(l.tagName)?a=f:i[u]=f}}if(a){const c=i.style||(i.style={});c[t.stylePropertyNameCase==="css"?"text-align":"textAlign"]=a}return i}function Gy(t,l){const i={};for(const a of l.attributes)if(a.type==="mdxJsxExpressionAttribute")if(a.data&&a.data.estree&&t.evaluater){const c=a.data.estree.body[0];c.type;const u=c.expression;u.type;const f=u.properties[0];f.type,Object.assign(i,t.evaluater.evaluateExpression(f.argument))}else Si(t,l.position);else{const s=a.name;let c;if(a.value&&typeof a.value=="object")if(a.value.data&&a.value.data.estree&&t.evaluater){const f=a.value.data.estree.body[0];f.type,c=t.evaluater.evaluateExpression(f.expression)}else Si(t,l.position);else c=a.value===null?!0:a.value;i[s]=c}return i}function xs(t,l){const i=[];let a=-1;const s=t.passKeys?new Map:Ey;for(;++a<l.children.length;){const c=l.children[a];let u;if(t.passKeys){const m=c.type==="element"?c.tagName:c.type==="mdxJsxFlowElement"||c.type==="mdxJsxTextElement"?c.name:void 0;if(m){const g=s.get(m)||0;u=m+"-"+g,s.set(m,g+1)}}const f=Tp(t,c,u);f!==void 0&&i.push(f)}return i}function jy(t,l,i){const a=my(t.schema,l);if(!(i==null||typeof i=="number"&&Number.isNaN(i))){if(Array.isArray(i)&&(i=a.commaSeparated?ty(i):ky(i)),a.property==="style"){let s=typeof i=="object"?i:Hy(t,String(i));return t.stylePropertyNameCase==="css"&&(s=Uy(s)),["style",s]}return[t.elementAttributeNameCase==="react"&&a.space?dy[a.property]||a.property:a.attribute,i]}}function Hy(t,l){try{return xy(l,{reactCompat:!0})}catch(i){if(t.ignoreInvalidStyle)return{};const a=i,s=new se("Cannot parse `style` attribute",{ancestors:t.ancestors,cause:a,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw s.file=t.filePath||void 0,s.url=Dp+"#cannot-parse-style-attribute",s}}function Op(t,l,i){let a;if(!i)a={type:"Literal",value:l};else if(l.includes(".")){const s=l.split(".");let c=-1,u;for(;++c<s.length;){const f=Dd(s[c])?{type:"Identifier",name:s[c]}:{type:"Literal",value:s[c]};u=u?{type:"MemberExpression",object:u,property:f,computed:!!(c&&f.type==="Literal"),optional:!1}:f}a=u}else a=Dd(l)&&!/^[a-z]/.test(l)?{type:"Identifier",name:l}:{type:"Literal",value:l};if(a.type==="Literal"){const s=a.value;return ws.call(t.components,s)?t.components[s]:s}if(t.evaluater)return t.evaluater.evaluateExpression(a);Si(t)}function Si(t,l){const i=new se("Cannot handle MDX estrees without `createEvaluater`",{ancestors:t.ancestors,place:l,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw i.file=t.filePath||void 0,i.url=Dp+"#cannot-handle-mdx-estrees-without-createevaluater",i}function Uy(t){const l={};let i;for(i in t)ws.call(t,i)&&(l[Wy(i)]=t[i]);return l}function Wy(t){let l=t.replace(_y,Vy);return l.slice(0,3)==="ms-"&&(l="-"+l),l}function Vy(t){return"-"+t.toLowerCase()}const Qa={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},qy={};function Is(t,l){const i=qy,a=typeof i.includeImageAlt=="boolean"?i.includeImageAlt:!0,s=typeof i.includeHtml=="boolean"?i.includeHtml:!0;return bp(t,a,s)}function bp(t,l,i){if(Qy(t)){if("value"in t)return t.type==="html"&&!i?"":t.value;if(l&&"alt"in t&&t.alt)return t.alt;if("children"in t)return jd(t.children,l,i)}return Array.isArray(t)?jd(t,l,i):""}function jd(t,l,i){const a=[];let s=-1;for(;++s<t.length;)a[s]=bp(t[s],l,i);return a.join("")}function Qy(t){return!!(t&&typeof t=="object")}const Hd=document.createElement("i");function Es(t){const l="&"+t+";";Hd.innerHTML=l;const i=Hd.textContent;return i.charCodeAt(i.length-1)===59&&t!=="semi"||i===l?!1:i}function Ee(t,l,i,a){const s=t.length;let c=0,u;if(l<0?l=-l>s?0:s+l:l=l>s?s:l,i=i>0?i:0,a.length<1e4)u=Array.from(a),u.unshift(l,i),t.splice(...u);else for(i&&t.splice(l,i);c<a.length;)u=a.slice(c,c+1e4),u.unshift(l,0),t.splice(...u),c+=1e4,l+=1e4}function Oe(t,l){return t.length>0?(Ee(t,t.length,0,l),t):l}const Ud={}.hasOwnProperty;function Fp(t){const l={};let i=-1;for(;++i<t.length;)$y(l,t[i]);return l}function $y(t,l){let i;for(i in l){const s=(Ud.call(t,i)?t[i]:void 0)||(t[i]={}),c=l[i];let u;if(c)for(u in c){Ud.call(s,u)||(s[u]=[]);const f=c[u];Jy(s[u],Array.isArray(f)?f:f?[f]:[])}}}function Jy(t,l){let i=-1;const a=[];for(;++i<l.length;)(l[i].add==="after"?t:a).push(l[i]);Ee(t,0,0,a)}function Np(t,l){const i=Number.parseInt(t,l);return i<9||i===11||i>13&&i<32||i>126&&i<160||i>55295&&i<57344||i>64975&&i<65008||(i&65535)===65535||(i&65535)===65534||i>1114111?"�":String.fromCharCode(i)}function He(t){return t.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const de=Dt(/[A-Za-z]/),ae=Dt(/[\dA-Za-z]/),Ky=Dt(/[#-'*+\--9=?A-Z^-~]/);function Wl(t){return t!==null&&(t<32||t===127)}const cs=Dt(/\d/),Yy=Dt(/[\dA-Fa-f]/),Xy=Dt(/[!-/:-@[-`{-~]/);function fn(t){return t!==null&&t<-2}function bn(t){return t!==null&&(t<0||t===32)}function In(t){return t===-2||t===-1||t===32}const Ql=Dt(new RegExp("\\p{P}","u")),Kt=Dt(/\s/);function Dt(t){return l;function l(i){return i!==null&&i>-1&&t.test(String.fromCharCode(i))}}function _r(t){const l=[];let i=-1,a=0,s=0;for(;++i<t.length;){const c=t.charCodeAt(i);let u="";if(c===37&&ae(t.charCodeAt(i+1))&&ae(t.charCodeAt(i+2)))s=2;else if(c<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(c))||(u=String.fromCharCode(c));else if(c>55295&&c<57344){const f=t.charCodeAt(i+1);c<56320&&f>56319&&f<57344?(u=String.fromCharCode(c,f),s=1):u="�"}else u=String.fromCharCode(c);u&&(l.push(t.slice(a,i),encodeURIComponent(u)),a=i+s+1,u=""),s&&(i+=s,s=0)}return l.join("")+t.slice(a)}function En(t,l,i,a){const s=a?a-1:Number.POSITIVE_INFINITY;let c=0;return u;function u(m){return In(m)?(t.enter(i),f(m)):l(m)}function f(m){return In(m)&&c++<s?(t.consume(m),f):(t.exit(i),l(m))}}const Zy={tokenize:n0};function n0(t){const l=t.attempt(this.parser.constructs.contentInitial,a,s);let i;return l;function a(f){if(f===null){t.consume(f);return}return t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),En(t,l,"linePrefix")}function s(f){return t.enter("paragraph"),c(f)}function c(f){const m=t.enter("chunkText",{contentType:"text",previous:i});return i&&(i.next=m),i=m,u(f)}function u(f){if(f===null){t.exit("chunkText"),t.exit("paragraph"),t.consume(f);return}return fn(f)?(t.consume(f),t.exit("chunkText"),c):(t.consume(f),u)}}const e0={tokenize:t0},Wd={tokenize:r0};function t0(t){const l=this,i=[];let a=0,s,c,u;return f;function f(B){if(a<i.length){const rn=i[a];return l.containerState=rn[1],t.attempt(rn[0].continuation,m,g)(B)}return g(B)}function m(B){if(a++,l.containerState._closeFlow){l.containerState._closeFlow=void 0,s&&U();const rn=l.events.length;let un=rn,O;for(;un--;)if(l.events[un][0]==="exit"&&l.events[un][1].type==="chunkFlow"){O=l.events[un][1].end;break}M(a);let V=rn;for(;V<l.events.length;)l.events[V][1].end=Object.assign({},O),V++;return Ee(l.events,un+1,0,l.events.slice(rn)),l.events.length=V,g(B)}return f(B)}function g(B){if(a===i.length){if(!s)return v(B);if(s.currentConstruct&&s.currentConstruct.concrete)return E(B);l.interrupt=!!(s.currentConstruct&&!s._gfmTableDynamicInterruptHack)}return l.containerState={},t.check(Wd,k,h)(B)}function k(B){return s&&U(),M(a),v(B)}function h(B){return l.parser.lazy[l.now().line]=a!==i.length,u=l.now().offset,E(B)}function v(B){return l.containerState={},t.attempt(Wd,A,E)(B)}function A(B){return a++,i.push([l.currentConstruct,l.containerState]),v(B)}function E(B){if(B===null){s&&U(),M(0),t.consume(B);return}return s=s||l.parser.flow(l.now()),t.enter("chunkFlow",{contentType:"flow",previous:c,_tokenizer:s}),R(B)}function R(B){if(B===null){F(t.exit("chunkFlow"),!0),M(0),t.consume(B);return}return fn(B)?(t.consume(B),F(t.exit("chunkFlow")),a=0,l.interrupt=void 0,f):(t.consume(B),R)}function F(B,rn){const un=l.sliceStream(B);if(rn&&un.push(null),B.previous=c,c&&(c.next=B),c=B,s.defineSkip(B.start),s.write(un),l.parser.lazy[B.start.line]){let O=s.events.length;for(;O--;)if(s.events[O][1].start.offset<u&&(!s.events[O][1].end||s.events[O][1].end.offset>u))return;const V=l.events.length;let en=V,cn,D;for(;en--;)if(l.events[en][0]==="exit"&&l.events[en][1].type==="chunkFlow"){if(cn){D=l.events[en][1].end;break}cn=!0}for(M(a),O=V;O<l.events.length;)l.events[O][1].end=Object.assign({},D),O++;Ee(l.events,en+1,0,l.events.slice(V)),l.events.length=O}}function M(B){let rn=i.length;for(;rn-- >B;){const un=i[rn];l.containerState=un[1],un[0].exit.call(l,t)}i.length=B}function U(){s.write([null]),c=void 0,s=void 0,l.containerState._closeFlow=void 0}}function r0(t,l,i){return En(t,t.attempt(this.parser.constructs.document,l,i),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Vl(t){if(t===null||bn(t)||Kt(t))return 1;if(Ql(t))return 2}function $l(t,l,i){const a=[];let s=-1;for(;++s<t.length;){const c=t[s].resolveAll;c&&!a.includes(c)&&(l=c(l,i),a.push(c))}return l}const ds={name:"attention",tokenize:l0,resolveAll:i0};function i0(t,l){let i=-1,a,s,c,u,f,m,g,k;for(;++i<t.length;)if(t[i][0]==="enter"&&t[i][1].type==="attentionSequence"&&t[i][1]._close){for(a=i;a--;)if(t[a][0]==="exit"&&t[a][1].type==="attentionSequence"&&t[a][1]._open&&l.sliceSerialize(t[a][1]).charCodeAt(0)===l.sliceSerialize(t[i][1]).charCodeAt(0)){if((t[a][1]._close||t[i][1]._open)&&(t[i][1].end.offset-t[i][1].start.offset)%3&&!((t[a][1].end.offset-t[a][1].start.offset+t[i][1].end.offset-t[i][1].start.offset)%3))continue;m=t[a][1].end.offset-t[a][1].start.offset>1&&t[i][1].end.offset-t[i][1].start.offset>1?2:1;const h=Object.assign({},t[a][1].end),v=Object.assign({},t[i][1].start);Vd(h,-m),Vd(v,m),u={type:m>1?"strongSequence":"emphasisSequence",start:h,end:Object.assign({},t[a][1].end)},f={type:m>1?"strongSequence":"emphasisSequence",start:Object.assign({},t[i][1].start),end:v},c={type:m>1?"strongText":"emphasisText",start:Object.assign({},t[a][1].end),end:Object.assign({},t[i][1].start)},s={type:m>1?"strong":"emphasis",start:Object.assign({},u.start),end:Object.assign({},f.end)},t[a][1].end=Object.assign({},u.start),t[i][1].start=Object.assign({},f.end),g=[],t[a][1].end.offset-t[a][1].start.offset&&(g=Oe(g,[["enter",t[a][1],l],["exit",t[a][1],l]])),g=Oe(g,[["enter",s,l],["enter",u,l],["exit",u,l],["enter",c,l]]),g=Oe(g,$l(l.parser.constructs.insideSpan.null,t.slice(a+1,i),l)),g=Oe(g,[["exit",c,l],["enter",f,l],["exit",f,l],["exit",s,l]]),t[i][1].end.offset-t[i][1].start.offset?(k=2,g=Oe(g,[["enter",t[i][1],l],["exit",t[i][1],l]])):k=0,Ee(t,a-1,i-a+3,g),i=a+g.length-k-2;break}}for(i=-1;++i<t.length;)t[i][1].type==="attentionSequence"&&(t[i][1].type="data");return t}function l0(t,l){const i=this.parser.constructs.attentionMarkers.null,a=this.previous,s=Vl(a);let c;return u;function u(m){return c=m,t.enter("attentionSequence"),f(m)}function f(m){if(m===c)return t.consume(m),f;const g=t.exit("attentionSequence"),k=Vl(m),h=!k||k===2&&s||i.includes(m),v=!s||s===2&&k||i.includes(a);return g._open=!!(c===42?h:h&&(s||!v)),g._close=!!(c===42?v:v&&(k||!h)),l(m)}}function Vd(t,l){t.column+=l,t.offset+=l,t._bufferIndex+=l}const o0={name:"autolink",tokenize:a0};function a0(t,l,i){let a=0;return s;function s(A){return t.enter("autolink"),t.enter("autolinkMarker"),t.consume(A),t.exit("autolinkMarker"),t.enter("autolinkProtocol"),c}function c(A){return de(A)?(t.consume(A),u):g(A)}function u(A){return A===43||A===45||A===46||ae(A)?(a=1,f(A)):g(A)}function f(A){return A===58?(t.consume(A),a=0,m):(A===43||A===45||A===46||ae(A))&&a++<32?(t.consume(A),f):(a=0,g(A))}function m(A){return A===62?(t.exit("autolinkProtocol"),t.enter("autolinkMarker"),t.consume(A),t.exit("autolinkMarker"),t.exit("autolink"),l):A===null||A===32||A===60||Wl(A)?i(A):(t.consume(A),m)}function g(A){return A===64?(t.consume(A),k):Ky(A)?(t.consume(A),g):i(A)}function k(A){return ae(A)?h(A):i(A)}function h(A){return A===46?(t.consume(A),a=0,k):A===62?(t.exit("autolinkProtocol").type="autolinkEmail",t.enter("autolinkMarker"),t.consume(A),t.exit("autolinkMarker"),t.exit("autolink"),l):v(A)}function v(A){if((A===45||ae(A))&&a++<63){const E=A===45?v:h;return t.consume(A),E}return i(A)}}const Ci={tokenize:s0,partial:!0};function s0(t,l,i){return a;function a(c){return In(c)?En(t,s,"linePrefix")(c):s(c)}function s(c){return c===null||fn(c)?l(c):i(c)}}const zp={name:"blockQuote",tokenize:u0,continuation:{tokenize:c0},exit:d0};function u0(t,l,i){const a=this;return s;function s(u){if(u===62){const f=a.containerState;return f.open||(t.enter("blockQuote",{_container:!0}),f.open=!0),t.enter("blockQuotePrefix"),t.enter("blockQuoteMarker"),t.consume(u),t.exit("blockQuoteMarker"),c}return i(u)}function c(u){return In(u)?(t.enter("blockQuotePrefixWhitespace"),t.consume(u),t.exit("blockQuotePrefixWhitespace"),t.exit("blockQuotePrefix"),l):(t.exit("blockQuotePrefix"),l(u))}}function c0(t,l,i){const a=this;return s;function s(u){return In(u)?En(t,c,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(u):c(u)}function c(u){return t.attempt(zp,l,i)(u)}}function d0(t){t.exit("blockQuote")}const Bp={name:"characterEscape",tokenize:p0};function p0(t,l,i){return a;function a(c){return t.enter("characterEscape"),t.enter("escapeMarker"),t.consume(c),t.exit("escapeMarker"),s}function s(c){return Xy(c)?(t.enter("characterEscapeValue"),t.consume(c),t.exit("characterEscapeValue"),t.exit("characterEscape"),l):i(c)}}const Gp={name:"characterReference",tokenize:f0};function f0(t,l,i){const a=this;let s=0,c,u;return f;function f(h){return t.enter("characterReference"),t.enter("characterReferenceMarker"),t.consume(h),t.exit("characterReferenceMarker"),m}function m(h){return h===35?(t.enter("characterReferenceMarkerNumeric"),t.consume(h),t.exit("characterReferenceMarkerNumeric"),g):(t.enter("characterReferenceValue"),c=31,u=ae,k(h))}function g(h){return h===88||h===120?(t.enter("characterReferenceMarkerHexadecimal"),t.consume(h),t.exit("characterReferenceMarkerHexadecimal"),t.enter("characterReferenceValue"),c=6,u=Yy,k):(t.enter("characterReferenceValue"),c=7,u=cs,k(h))}function k(h){if(h===59&&s){const v=t.exit("characterReferenceValue");return u===ae&&!Es(a.sliceSerialize(v))?i(h):(t.enter("characterReferenceMarker"),t.consume(h),t.exit("characterReferenceMarker"),t.exit("characterReference"),l)}return u(h)&&s++<c?(t.consume(h),k):i(h)}}const qd={tokenize:g0,partial:!0},Qd={name:"codeFenced",tokenize:m0,concrete:!0};function m0(t,l,i){const a=this,s={tokenize:un,partial:!0};let c=0,u=0,f;return m;function m(O){return g(O)}function g(O){const V=a.events[a.events.length-1];return c=V&&V[1].type==="linePrefix"?V[2].sliceSerialize(V[1],!0).length:0,f=O,t.enter("codeFenced"),t.enter("codeFencedFence"),t.enter("codeFencedFenceSequence"),k(O)}function k(O){return O===f?(u++,t.consume(O),k):u<3?i(O):(t.exit("codeFencedFenceSequence"),In(O)?En(t,h,"whitespace")(O):h(O))}function h(O){return O===null||fn(O)?(t.exit("codeFencedFence"),a.interrupt?l(O):t.check(qd,R,rn)(O)):(t.enter("codeFencedFenceInfo"),t.enter("chunkString",{contentType:"string"}),v(O))}function v(O){return O===null||fn(O)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),h(O)):In(O)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),En(t,A,"whitespace")(O)):O===96&&O===f?i(O):(t.consume(O),v)}function A(O){return O===null||fn(O)?h(O):(t.enter("codeFencedFenceMeta"),t.enter("chunkString",{contentType:"string"}),E(O))}function E(O){return O===null||fn(O)?(t.exit("chunkString"),t.exit("codeFencedFenceMeta"),h(O)):O===96&&O===f?i(O):(t.consume(O),E)}function R(O){return t.attempt(s,rn,F)(O)}function F(O){return t.enter("lineEnding"),t.consume(O),t.exit("lineEnding"),M}function M(O){return c>0&&In(O)?En(t,U,"linePrefix",c+1)(O):U(O)}function U(O){return O===null||fn(O)?t.check(qd,R,rn)(O):(t.enter("codeFlowValue"),B(O))}function B(O){return O===null||fn(O)?(t.exit("codeFlowValue"),U(O)):(t.consume(O),B)}function rn(O){return t.exit("codeFenced"),l(O)}function un(O,V,en){let cn=0;return D;function D(an){return O.enter("lineEnding"),O.consume(an),O.exit("lineEnding"),Z}function Z(an){return O.enter("codeFencedFence"),In(an)?En(O,Q,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(an):Q(an)}function Q(an){return an===f?(O.enter("codeFencedFenceSequence"),J(an)):en(an)}function J(an){return an===f?(cn++,O.consume(an),J):cn>=u?(O.exit("codeFencedFenceSequence"),In(an)?En(O,Y,"whitespace")(an):Y(an)):en(an)}function Y(an){return an===null||fn(an)?(O.exit("codeFencedFence"),V(an)):en(an)}}}function g0(t,l,i){const a=this;return s;function s(u){return u===null?i(u):(t.enter("lineEnding"),t.consume(u),t.exit("lineEnding"),c)}function c(u){return a.parser.lazy[a.now().line]?i(u):l(u)}}const $a={name:"codeIndented",tokenize:y0},h0={tokenize:k0,partial:!0};function y0(t,l,i){const a=this;return s;function s(g){return t.enter("codeIndented"),En(t,c,"linePrefix",5)(g)}function c(g){const k=a.events[a.events.length-1];return k&&k[1].type==="linePrefix"&&k[2].sliceSerialize(k[1],!0).length>=4?u(g):i(g)}function u(g){return g===null?m(g):fn(g)?t.attempt(h0,u,m)(g):(t.enter("codeFlowValue"),f(g))}function f(g){return g===null||fn(g)?(t.exit("codeFlowValue"),u(g)):(t.consume(g),f)}function m(g){return t.exit("codeIndented"),l(g)}}function k0(t,l,i){const a=this;return s;function s(u){return a.parser.lazy[a.now().line]?i(u):fn(u)?(t.enter("lineEnding"),t.consume(u),t.exit("lineEnding"),s):En(t,c,"linePrefix",5)(u)}function c(u){const f=a.events[a.events.length-1];return f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?l(u):fn(u)?s(u):i(u)}}const A0={name:"codeText",tokenize:w0,resolve:v0,previous:S0};function v0(t){let l=t.length-4,i=3,a,s;if((t[i][1].type==="lineEnding"||t[i][1].type==="space")&&(t[l][1].type==="lineEnding"||t[l][1].type==="space")){for(a=i;++a<l;)if(t[a][1].type==="codeTextData"){t[i][1].type="codeTextPadding",t[l][1].type="codeTextPadding",i+=2,l-=2;break}}for(a=i-1,l++;++a<=l;)s===void 0?a!==l&&t[a][1].type!=="lineEnding"&&(s=a):(a===l||t[a][1].type==="lineEnding")&&(t[s][1].type="codeTextData",a!==s+2&&(t[s][1].end=t[a-1][1].end,t.splice(s+2,a-s-2),l-=a-s-2,a=s+2),s=void 0);return t}function S0(t){return t!==96||this.events[this.events.length-1][1].type==="characterEscape"}function w0(t,l,i){let a=0,s,c;return u;function u(h){return t.enter("codeText"),t.enter("codeTextSequence"),f(h)}function f(h){return h===96?(t.consume(h),a++,f):(t.exit("codeTextSequence"),m(h))}function m(h){return h===null?i(h):h===32?(t.enter("space"),t.consume(h),t.exit("space"),m):h===96?(c=t.enter("codeTextSequence"),s=0,k(h)):fn(h)?(t.enter("lineEnding"),t.consume(h),t.exit("lineEnding"),m):(t.enter("codeTextData"),g(h))}function g(h){return h===null||h===32||h===96||fn(h)?(t.exit("codeTextData"),m(h)):(t.consume(h),g)}function k(h){return h===96?(t.consume(h),s++,k):s===a?(t.exit("codeTextSequence"),t.exit("codeText"),l(h)):(c.type="codeTextData",g(h))}}function jp(t){const l={};let i=-1,a,s,c,u,f,m,g;for(;++i<t.length;){for(;i in l;)i=l[i];if(a=t[i],i&&a[1].type==="chunkFlow"&&t[i-1][1].type==="listItemPrefix"&&(m=a[1]._tokenizer.events,c=0,c<m.length&&m[c][1].type==="lineEndingBlank"&&(c+=2),c<m.length&&m[c][1].type==="content"))for(;++c<m.length&&m[c][1].type!=="content";)m[c][1].type==="chunkText"&&(m[c][1]._isInFirstContentOfListItem=!0,c++);if(a[0]==="enter")a[1].contentType&&(Object.assign(l,C0(t,i)),i=l[i],g=!0);else if(a[1]._container){for(c=i,s=void 0;c--&&(u=t[c],u[1].type==="lineEnding"||u[1].type==="lineEndingBlank");)u[0]==="enter"&&(s&&(t[s][1].type="lineEndingBlank"),u[1].type="lineEnding",s=c);s&&(a[1].end=Object.assign({},t[s][1].start),f=t.slice(s,i),f.unshift(a),Ee(t,s,i-s+1,f))}}return!g}function C0(t,l){const i=t[l][1],a=t[l][2];let s=l-1;const c=[],u=i._tokenizer||a.parser[i.contentType](i.start),f=u.events,m=[],g={};let k,h,v=-1,A=i,E=0,R=0;const F=[R];for(;A;){for(;t[++s][1]!==A;);c.push(s),A._tokenizer||(k=a.sliceStream(A),A.next||k.push(null),h&&u.defineSkip(A.start),A._isInFirstContentOfListItem&&(u._gfmTasklistFirstContentOfListItem=!0),u.write(k),A._isInFirstContentOfListItem&&(u._gfmTasklistFirstContentOfListItem=void 0)),h=A,A=A.next}for(A=i;++v<f.length;)f[v][0]==="exit"&&f[v-1][0]==="enter"&&f[v][1].type===f[v-1][1].type&&f[v][1].start.line!==f[v][1].end.line&&(R=v+1,F.push(R),A._tokenizer=void 0,A.previous=void 0,A=A.next);for(u.events=[],A?(A._tokenizer=void 0,A.previous=void 0):F.pop(),v=F.length;v--;){const M=f.slice(F[v],F[v+1]),U=c.pop();m.unshift([U,U+M.length-1]),Ee(t,U,2,M)}for(v=-1;++v<m.length;)g[E+m[v][0]]=E+m[v][1],E+=m[v][1]-m[v][0]-1;return g}const x0={tokenize:_0,resolve:E0},I0={tokenize:L0,partial:!0};function E0(t){return jp(t),t}function _0(t,l){let i;return a;function a(f){return t.enter("content"),i=t.enter("chunkContent",{contentType:"content"}),s(f)}function s(f){return f===null?c(f):fn(f)?t.check(I0,u,c)(f):(t.consume(f),s)}function c(f){return t.exit("chunkContent"),t.exit("content"),l(f)}function u(f){return t.consume(f),t.exit("chunkContent"),i.next=t.enter("chunkContent",{contentType:"content",previous:i}),i=i.next,s}}function L0(t,l,i){const a=this;return s;function s(u){return t.exit("chunkContent"),t.enter("lineEnding"),t.consume(u),t.exit("lineEnding"),En(t,c,"linePrefix")}function c(u){if(u===null||fn(u))return i(u);const f=a.events[a.events.length-1];return!a.parser.constructs.disable.null.includes("codeIndented")&&f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?l(u):t.interrupt(a.parser.constructs.flow,i,l)(u)}}function Hp(t,l,i,a,s,c,u,f,m){const g=m||Number.POSITIVE_INFINITY;let k=0;return h;function h(M){return M===60?(t.enter(a),t.enter(s),t.enter(c),t.consume(M),t.exit(c),v):M===null||M===32||M===41||Wl(M)?i(M):(t.enter(a),t.enter(u),t.enter(f),t.enter("chunkString",{contentType:"string"}),R(M))}function v(M){return M===62?(t.enter(c),t.consume(M),t.exit(c),t.exit(s),t.exit(a),l):(t.enter(f),t.enter("chunkString",{contentType:"string"}),A(M))}function A(M){return M===62?(t.exit("chunkString"),t.exit(f),v(M)):M===null||M===60||fn(M)?i(M):(t.consume(M),M===92?E:A)}function E(M){return M===60||M===62||M===92?(t.consume(M),A):A(M)}function R(M){return!k&&(M===null||M===41||bn(M))?(t.exit("chunkString"),t.exit(f),t.exit(u),t.exit(a),l(M)):k<g&&M===40?(t.consume(M),k++,R):M===41?(t.consume(M),k--,R):M===null||M===32||M===40||Wl(M)?i(M):(t.consume(M),M===92?F:R)}function F(M){return M===40||M===41||M===92?(t.consume(M),R):R(M)}}function Up(t,l,i,a,s,c){const u=this;let f=0,m;return g;function g(A){return t.enter(a),t.enter(s),t.consume(A),t.exit(s),t.enter(c),k}function k(A){return f>999||A===null||A===91||A===93&&!m||A===94&&!f&&"_hiddenFootnoteSupport"in u.parser.constructs?i(A):A===93?(t.exit(c),t.enter(s),t.consume(A),t.exit(s),t.exit(a),l):fn(A)?(t.enter("lineEnding"),t.consume(A),t.exit("lineEnding"),k):(t.enter("chunkString",{contentType:"string"}),h(A))}function h(A){return A===null||A===91||A===93||fn(A)||f++>999?(t.exit("chunkString"),k(A)):(t.consume(A),m||(m=!In(A)),A===92?v:h)}function v(A){return A===91||A===92||A===93?(t.consume(A),f++,h):h(A)}}function Wp(t,l,i,a,s,c){let u;return f;function f(v){return v===34||v===39||v===40?(t.enter(a),t.enter(s),t.consume(v),t.exit(s),u=v===40?41:v,m):i(v)}function m(v){return v===u?(t.enter(s),t.consume(v),t.exit(s),t.exit(a),l):(t.enter(c),g(v))}function g(v){return v===u?(t.exit(c),m(u)):v===null?i(v):fn(v)?(t.enter("lineEnding"),t.consume(v),t.exit("lineEnding"),En(t,g,"linePrefix")):(t.enter("chunkString",{contentType:"string"}),k(v))}function k(v){return v===u||v===null||fn(v)?(t.exit("chunkString"),g(v)):(t.consume(v),v===92?h:k)}function h(v){return v===u||v===92?(t.consume(v),k):k(v)}}function Ai(t,l){let i;return a;function a(s){return fn(s)?(t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),i=!0,a):In(s)?En(t,a,i?"linePrefix":"lineSuffix")(s):l(s)}}const R0={name:"definition",tokenize:D0},P0={tokenize:T0,partial:!0};function D0(t,l,i){const a=this;let s;return c;function c(A){return t.enter("definition"),u(A)}function u(A){return Up.call(a,t,f,i,"definitionLabel","definitionLabelMarker","definitionLabelString")(A)}function f(A){return s=He(a.sliceSerialize(a.events[a.events.length-1][1]).slice(1,-1)),A===58?(t.enter("definitionMarker"),t.consume(A),t.exit("definitionMarker"),m):i(A)}function m(A){return bn(A)?Ai(t,g)(A):g(A)}function g(A){return Hp(t,k,i,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(A)}function k(A){return t.attempt(P0,h,h)(A)}function h(A){return In(A)?En(t,v,"whitespace")(A):v(A)}function v(A){return A===null||fn(A)?(t.exit("definition"),a.parser.defined.push(s),l(A)):i(A)}}function T0(t,l,i){return a;function a(f){return bn(f)?Ai(t,s)(f):i(f)}function s(f){return Wp(t,c,i,"definitionTitle","definitionTitleMarker","definitionTitleString")(f)}function c(f){return In(f)?En(t,u,"whitespace")(f):u(f)}function u(f){return f===null||fn(f)?l(f):i(f)}}const M0={name:"hardBreakEscape",tokenize:O0};function O0(t,l,i){return a;function a(c){return t.enter("hardBreakEscape"),t.consume(c),s}function s(c){return fn(c)?(t.exit("hardBreakEscape"),l(c)):i(c)}}const b0={name:"headingAtx",tokenize:N0,resolve:F0};function F0(t,l){let i=t.length-2,a=3,s,c;return t[a][1].type==="whitespace"&&(a+=2),i-2>a&&t[i][1].type==="whitespace"&&(i-=2),t[i][1].type==="atxHeadingSequence"&&(a===i-1||i-4>a&&t[i-2][1].type==="whitespace")&&(i-=a+1===i?2:4),i>a&&(s={type:"atxHeadingText",start:t[a][1].start,end:t[i][1].end},c={type:"chunkText",start:t[a][1].start,end:t[i][1].end,contentType:"text"},Ee(t,a,i-a+1,[["enter",s,l],["enter",c,l],["exit",c,l],["exit",s,l]])),t}function N0(t,l,i){let a=0;return s;function s(k){return t.enter("atxHeading"),c(k)}function c(k){return t.enter("atxHeadingSequence"),u(k)}function u(k){return k===35&&a++<6?(t.consume(k),u):k===null||bn(k)?(t.exit("atxHeadingSequence"),f(k)):i(k)}function f(k){return k===35?(t.enter("atxHeadingSequence"),m(k)):k===null||fn(k)?(t.exit("atxHeading"),l(k)):In(k)?En(t,f,"whitespace")(k):(t.enter("atxHeadingText"),g(k))}function m(k){return k===35?(t.consume(k),m):(t.exit("atxHeadingSequence"),f(k))}function g(k){return k===null||k===35||bn(k)?(t.exit("atxHeadingText"),f(k)):(t.consume(k),g)}}const z0=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],$d=["pre","script","style","textarea"],B0={name:"htmlFlow",tokenize:U0,resolveTo:H0,concrete:!0},G0={tokenize:V0,partial:!0},j0={tokenize:W0,partial:!0};function H0(t){let l=t.length;for(;l--&&!(t[l][0]==="enter"&&t[l][1].type==="htmlFlow"););return l>1&&t[l-2][1].type==="linePrefix"&&(t[l][1].start=t[l-2][1].start,t[l+1][1].start=t[l-2][1].start,t.splice(l-2,2)),t}function U0(t,l,i){const a=this;let s,c,u,f,m;return g;function g(C){return k(C)}function k(C){return t.enter("htmlFlow"),t.enter("htmlFlowData"),t.consume(C),h}function h(C){return C===33?(t.consume(C),v):C===47?(t.consume(C),c=!0,R):C===63?(t.consume(C),s=3,a.interrupt?l:S):de(C)?(t.consume(C),u=String.fromCharCode(C),F):i(C)}function v(C){return C===45?(t.consume(C),s=2,A):C===91?(t.consume(C),s=5,f=0,E):de(C)?(t.consume(C),s=4,a.interrupt?l:S):i(C)}function A(C){return C===45?(t.consume(C),a.interrupt?l:S):i(C)}function E(C){const gn="CDATA[";return C===gn.charCodeAt(f++)?(t.consume(C),f===gn.length?a.interrupt?l:Q:E):i(C)}function R(C){return de(C)?(t.consume(C),u=String.fromCharCode(C),F):i(C)}function F(C){if(C===null||C===47||C===62||bn(C)){const gn=C===47,vn=u.toLowerCase();return!gn&&!c&&$d.includes(vn)?(s=1,a.interrupt?l(C):Q(C)):z0.includes(u.toLowerCase())?(s=6,gn?(t.consume(C),M):a.interrupt?l(C):Q(C)):(s=7,a.interrupt&&!a.parser.lazy[a.now().line]?i(C):c?U(C):B(C))}return C===45||ae(C)?(t.consume(C),u+=String.fromCharCode(C),F):i(C)}function M(C){return C===62?(t.consume(C),a.interrupt?l:Q):i(C)}function U(C){return In(C)?(t.consume(C),U):D(C)}function B(C){return C===47?(t.consume(C),D):C===58||C===95||de(C)?(t.consume(C),rn):In(C)?(t.consume(C),B):D(C)}function rn(C){return C===45||C===46||C===58||C===95||ae(C)?(t.consume(C),rn):un(C)}function un(C){return C===61?(t.consume(C),O):In(C)?(t.consume(C),un):B(C)}function O(C){return C===null||C===60||C===61||C===62||C===96?i(C):C===34||C===39?(t.consume(C),m=C,V):In(C)?(t.consume(C),O):en(C)}function V(C){return C===m?(t.consume(C),m=null,cn):C===null||fn(C)?i(C):(t.consume(C),V)}function en(C){return C===null||C===34||C===39||C===47||C===60||C===61||C===62||C===96||bn(C)?un(C):(t.consume(C),en)}function cn(C){return C===47||C===62||In(C)?B(C):i(C)}function D(C){return C===62?(t.consume(C),Z):i(C)}function Z(C){return C===null||fn(C)?Q(C):In(C)?(t.consume(C),Z):i(C)}function Q(C){return C===45&&s===2?(t.consume(C),xn):C===60&&s===1?(t.consume(C),yn):C===62&&s===4?(t.consume(C),_):C===63&&s===3?(t.consume(C),S):C===93&&s===5?(t.consume(C),sn):fn(C)&&(s===6||s===7)?(t.exit("htmlFlowData"),t.check(G0,N,J)(C)):C===null||fn(C)?(t.exit("htmlFlowData"),J(C)):(t.consume(C),Q)}function J(C){return t.check(j0,Y,N)(C)}function Y(C){return t.enter("lineEnding"),t.consume(C),t.exit("lineEnding"),an}function an(C){return C===null||fn(C)?J(C):(t.enter("htmlFlowData"),Q(C))}function xn(C){return C===45?(t.consume(C),S):Q(C)}function yn(C){return C===47?(t.consume(C),u="",$):Q(C)}function $(C){if(C===62){const gn=u.toLowerCase();return $d.includes(gn)?(t.consume(C),_):Q(C)}return de(C)&&u.length<8?(t.consume(C),u+=String.fromCharCode(C),$):Q(C)}function sn(C){return C===93?(t.consume(C),S):Q(C)}function S(C){return C===62?(t.consume(C),_):C===45&&s===2?(t.consume(C),S):Q(C)}function _(C){return C===null||fn(C)?(t.exit("htmlFlowData"),N(C)):(t.consume(C),_)}function N(C){return t.exit("htmlFlow"),l(C)}}function W0(t,l,i){const a=this;return s;function s(u){return fn(u)?(t.enter("lineEnding"),t.consume(u),t.exit("lineEnding"),c):i(u)}function c(u){return a.parser.lazy[a.now().line]?i(u):l(u)}}function V0(t,l,i){return a;function a(s){return t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),t.attempt(Ci,l,i)}}const q0={name:"htmlText",tokenize:Q0};function Q0(t,l,i){const a=this;let s,c,u;return f;function f(S){return t.enter("htmlText"),t.enter("htmlTextData"),t.consume(S),m}function m(S){return S===33?(t.consume(S),g):S===47?(t.consume(S),un):S===63?(t.consume(S),B):de(S)?(t.consume(S),en):i(S)}function g(S){return S===45?(t.consume(S),k):S===91?(t.consume(S),c=0,E):de(S)?(t.consume(S),U):i(S)}function k(S){return S===45?(t.consume(S),A):i(S)}function h(S){return S===null?i(S):S===45?(t.consume(S),v):fn(S)?(u=h,yn(S)):(t.consume(S),h)}function v(S){return S===45?(t.consume(S),A):h(S)}function A(S){return S===62?xn(S):S===45?v(S):h(S)}function E(S){const _="CDATA[";return S===_.charCodeAt(c++)?(t.consume(S),c===_.length?R:E):i(S)}function R(S){return S===null?i(S):S===93?(t.consume(S),F):fn(S)?(u=R,yn(S)):(t.consume(S),R)}function F(S){return S===93?(t.consume(S),M):R(S)}function M(S){return S===62?xn(S):S===93?(t.consume(S),M):R(S)}function U(S){return S===null||S===62?xn(S):fn(S)?(u=U,yn(S)):(t.consume(S),U)}function B(S){return S===null?i(S):S===63?(t.consume(S),rn):fn(S)?(u=B,yn(S)):(t.consume(S),B)}function rn(S){return S===62?xn(S):B(S)}function un(S){return de(S)?(t.consume(S),O):i(S)}function O(S){return S===45||ae(S)?(t.consume(S),O):V(S)}function V(S){return fn(S)?(u=V,yn(S)):In(S)?(t.consume(S),V):xn(S)}function en(S){return S===45||ae(S)?(t.consume(S),en):S===47||S===62||bn(S)?cn(S):i(S)}function cn(S){return S===47?(t.consume(S),xn):S===58||S===95||de(S)?(t.consume(S),D):fn(S)?(u=cn,yn(S)):In(S)?(t.consume(S),cn):xn(S)}function D(S){return S===45||S===46||S===58||S===95||ae(S)?(t.consume(S),D):Z(S)}function Z(S){return S===61?(t.consume(S),Q):fn(S)?(u=Z,yn(S)):In(S)?(t.consume(S),Z):cn(S)}function Q(S){return S===null||S===60||S===61||S===62||S===96?i(S):S===34||S===39?(t.consume(S),s=S,J):fn(S)?(u=Q,yn(S)):In(S)?(t.consume(S),Q):(t.consume(S),Y)}function J(S){return S===s?(t.consume(S),s=void 0,an):S===null?i(S):fn(S)?(u=J,yn(S)):(t.consume(S),J)}function Y(S){return S===null||S===34||S===39||S===60||S===61||S===96?i(S):S===47||S===62||bn(S)?cn(S):(t.consume(S),Y)}function an(S){return S===47||S===62||bn(S)?cn(S):i(S)}function xn(S){return S===62?(t.consume(S),t.exit("htmlTextData"),t.exit("htmlText"),l):i(S)}function yn(S){return t.exit("htmlTextData"),t.enter("lineEnding"),t.consume(S),t.exit("lineEnding"),$}function $(S){return In(S)?En(t,sn,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(S):sn(S)}function sn(S){return t.enter("htmlTextData"),u(S)}}const _s={name:"labelEnd",tokenize:Z0,resolveTo:X0,resolveAll:Y0},$0={tokenize:nk},J0={tokenize:ek},K0={tokenize:tk};function Y0(t){let l=-1;for(;++l<t.length;){const i=t[l][1];(i.type==="labelImage"||i.type==="labelLink"||i.type==="labelEnd")&&(t.splice(l+1,i.type==="labelImage"?4:2),i.type="data",l++)}return t}function X0(t,l){let i=t.length,a=0,s,c,u,f;for(;i--;)if(s=t[i][1],c){if(s.type==="link"||s.type==="labelLink"&&s._inactive)break;t[i][0]==="enter"&&s.type==="labelLink"&&(s._inactive=!0)}else if(u){if(t[i][0]==="enter"&&(s.type==="labelImage"||s.type==="labelLink")&&!s._balanced&&(c=i,s.type!=="labelLink")){a=2;break}}else s.type==="labelEnd"&&(u=i);const m={type:t[c][1].type==="labelLink"?"link":"image",start:Object.assign({},t[c][1].start),end:Object.assign({},t[t.length-1][1].end)},g={type:"label",start:Object.assign({},t[c][1].start),end:Object.assign({},t[u][1].end)},k={type:"labelText",start:Object.assign({},t[c+a+2][1].end),end:Object.assign({},t[u-2][1].start)};return f=[["enter",m,l],["enter",g,l]],f=Oe(f,t.slice(c+1,c+a+3)),f=Oe(f,[["enter",k,l]]),f=Oe(f,$l(l.parser.constructs.insideSpan.null,t.slice(c+a+4,u-3),l)),f=Oe(f,[["exit",k,l],t[u-2],t[u-1],["exit",g,l]]),f=Oe(f,t.slice(u+1)),f=Oe(f,[["exit",m,l]]),Ee(t,c,t.length,f),t}function Z0(t,l,i){const a=this;let s=a.events.length,c,u;for(;s--;)if((a.events[s][1].type==="labelImage"||a.events[s][1].type==="labelLink")&&!a.events[s][1]._balanced){c=a.events[s][1];break}return f;function f(v){return c?c._inactive?h(v):(u=a.parser.defined.includes(He(a.sliceSerialize({start:c.end,end:a.now()}))),t.enter("labelEnd"),t.enter("labelMarker"),t.consume(v),t.exit("labelMarker"),t.exit("labelEnd"),m):i(v)}function m(v){return v===40?t.attempt($0,k,u?k:h)(v):v===91?t.attempt(J0,k,u?g:h)(v):u?k(v):h(v)}function g(v){return t.attempt(K0,k,h)(v)}function k(v){return l(v)}function h(v){return c._balanced=!0,i(v)}}function nk(t,l,i){return a;function a(h){return t.enter("resource"),t.enter("resourceMarker"),t.consume(h),t.exit("resourceMarker"),s}function s(h){return bn(h)?Ai(t,c)(h):c(h)}function c(h){return h===41?k(h):Hp(t,u,f,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(h)}function u(h){return bn(h)?Ai(t,m)(h):k(h)}function f(h){return i(h)}function m(h){return h===34||h===39||h===40?Wp(t,g,i,"resourceTitle","resourceTitleMarker","resourceTitleString")(h):k(h)}function g(h){return bn(h)?Ai(t,k)(h):k(h)}function k(h){return h===41?(t.enter("resourceMarker"),t.consume(h),t.exit("resourceMarker"),t.exit("resource"),l):i(h)}}function ek(t,l,i){const a=this;return s;function s(f){return Up.call(a,t,c,u,"reference","referenceMarker","referenceString")(f)}function c(f){return a.parser.defined.includes(He(a.sliceSerialize(a.events[a.events.length-1][1]).slice(1,-1)))?l(f):i(f)}function u(f){return i(f)}}function tk(t,l,i){return a;function a(c){return t.enter("reference"),t.enter("referenceMarker"),t.consume(c),t.exit("referenceMarker"),s}function s(c){return c===93?(t.enter("referenceMarker"),t.consume(c),t.exit("referenceMarker"),t.exit("reference"),l):i(c)}}const rk={name:"labelStartImage",tokenize:ik,resolveAll:_s.resolveAll};function ik(t,l,i){const a=this;return s;function s(f){return t.enter("labelImage"),t.enter("labelImageMarker"),t.consume(f),t.exit("labelImageMarker"),c}function c(f){return f===91?(t.enter("labelMarker"),t.consume(f),t.exit("labelMarker"),t.exit("labelImage"),u):i(f)}function u(f){return f===94&&"_hiddenFootnoteSupport"in a.parser.constructs?i(f):l(f)}}const lk={name:"labelStartLink",tokenize:ok,resolveAll:_s.resolveAll};function ok(t,l,i){const a=this;return s;function s(u){return t.enter("labelLink"),t.enter("labelMarker"),t.consume(u),t.exit("labelMarker"),t.exit("labelLink"),c}function c(u){return u===94&&"_hiddenFootnoteSupport"in a.parser.constructs?i(u):l(u)}}const Ja={name:"lineEnding",tokenize:ak};function ak(t,l){return i;function i(a){return t.enter("lineEnding"),t.consume(a),t.exit("lineEnding"),En(t,l,"linePrefix")}}const Hl={name:"thematicBreak",tokenize:sk};function sk(t,l,i){let a=0,s;return c;function c(g){return t.enter("thematicBreak"),u(g)}function u(g){return s=g,f(g)}function f(g){return g===s?(t.enter("thematicBreakSequence"),m(g)):a>=3&&(g===null||fn(g))?(t.exit("thematicBreak"),l(g)):i(g)}function m(g){return g===s?(t.consume(g),a++,m):(t.exit("thematicBreakSequence"),In(g)?En(t,f,"whitespace")(g):f(g))}}const ke={name:"list",tokenize:dk,continuation:{tokenize:pk},exit:mk},uk={tokenize:gk,partial:!0},ck={tokenize:fk,partial:!0};function dk(t,l,i){const a=this,s=a.events[a.events.length-1];let c=s&&s[1].type==="linePrefix"?s[2].sliceSerialize(s[1],!0).length:0,u=0;return f;function f(A){const E=a.containerState.type||(A===42||A===43||A===45?"listUnordered":"listOrdered");if(E==="listUnordered"?!a.containerState.marker||A===a.containerState.marker:cs(A)){if(a.containerState.type||(a.containerState.type=E,t.enter(E,{_container:!0})),E==="listUnordered")return t.enter("listItemPrefix"),A===42||A===45?t.check(Hl,i,g)(A):g(A);if(!a.interrupt||A===49)return t.enter("listItemPrefix"),t.enter("listItemValue"),m(A)}return i(A)}function m(A){return cs(A)&&++u<10?(t.consume(A),m):(!a.interrupt||u<2)&&(a.containerState.marker?A===a.containerState.marker:A===41||A===46)?(t.exit("listItemValue"),g(A)):i(A)}function g(A){return t.enter("listItemMarker"),t.consume(A),t.exit("listItemMarker"),a.containerState.marker=a.containerState.marker||A,t.check(Ci,a.interrupt?i:k,t.attempt(uk,v,h))}function k(A){return a.containerState.initialBlankLine=!0,c++,v(A)}function h(A){return In(A)?(t.enter("listItemPrefixWhitespace"),t.consume(A),t.exit("listItemPrefixWhitespace"),v):i(A)}function v(A){return a.containerState.size=c+a.sliceSerialize(t.exit("listItemPrefix"),!0).length,l(A)}}function pk(t,l,i){const a=this;return a.containerState._closeFlow=void 0,t.check(Ci,s,c);function s(f){return a.containerState.furtherBlankLines=a.containerState.furtherBlankLines||a.containerState.initialBlankLine,En(t,l,"listItemIndent",a.containerState.size+1)(f)}function c(f){return a.containerState.furtherBlankLines||!In(f)?(a.containerState.furtherBlankLines=void 0,a.containerState.initialBlankLine=void 0,u(f)):(a.containerState.furtherBlankLines=void 0,a.containerState.initialBlankLine=void 0,t.attempt(ck,l,u)(f))}function u(f){return a.containerState._closeFlow=!0,a.interrupt=void 0,En(t,t.attempt(ke,l,i),"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(f)}}function fk(t,l,i){const a=this;return En(t,s,"listItemIndent",a.containerState.size+1);function s(c){const u=a.events[a.events.length-1];return u&&u[1].type==="listItemIndent"&&u[2].sliceSerialize(u[1],!0).length===a.containerState.size?l(c):i(c)}}function mk(t){t.exit(this.containerState.type)}function gk(t,l,i){const a=this;return En(t,s,"listItemPrefixWhitespace",a.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function s(c){const u=a.events[a.events.length-1];return!In(c)&&u&&u[1].type==="listItemPrefixWhitespace"?l(c):i(c)}}const Jd={name:"setextUnderline",tokenize:yk,resolveTo:hk};function hk(t,l){let i=t.length,a,s,c;for(;i--;)if(t[i][0]==="enter"){if(t[i][1].type==="content"){a=i;break}t[i][1].type==="paragraph"&&(s=i)}else t[i][1].type==="content"&&t.splice(i,1),!c&&t[i][1].type==="definition"&&(c=i);const u={type:"setextHeading",start:Object.assign({},t[s][1].start),end:Object.assign({},t[t.length-1][1].end)};return t[s][1].type="setextHeadingText",c?(t.splice(s,0,["enter",u,l]),t.splice(c+1,0,["exit",t[a][1],l]),t[a][1].end=Object.assign({},t[c][1].end)):t[a][1]=u,t.push(["exit",u,l]),t}function yk(t,l,i){const a=this;let s;return c;function c(g){let k=a.events.length,h;for(;k--;)if(a.events[k][1].type!=="lineEnding"&&a.events[k][1].type!=="linePrefix"&&a.events[k][1].type!=="content"){h=a.events[k][1].type==="paragraph";break}return!a.parser.lazy[a.now().line]&&(a.interrupt||h)?(t.enter("setextHeadingLine"),s=g,u(g)):i(g)}function u(g){return t.enter("setextHeadingLineSequence"),f(g)}function f(g){return g===s?(t.consume(g),f):(t.exit("setextHeadingLineSequence"),In(g)?En(t,m,"lineSuffix")(g):m(g))}function m(g){return g===null||fn(g)?(t.exit("setextHeadingLine"),l(g)):i(g)}}const kk={tokenize:Ak};function Ak(t){const l=this,i=t.attempt(Ci,a,t.attempt(this.parser.constructs.flowInitial,s,En(t,t.attempt(this.parser.constructs.flow,s,t.attempt(x0,s)),"linePrefix")));return i;function a(c){if(c===null){t.consume(c);return}return t.enter("lineEndingBlank"),t.consume(c),t.exit("lineEndingBlank"),l.currentConstruct=void 0,i}function s(c){if(c===null){t.consume(c);return}return t.enter("lineEnding"),t.consume(c),t.exit("lineEnding"),l.currentConstruct=void 0,i}}const vk={resolveAll:qp()},Sk=Vp("string"),wk=Vp("text");function Vp(t){return{tokenize:l,resolveAll:qp(t==="text"?Ck:void 0)};function l(i){const a=this,s=this.parser.constructs[t],c=i.attempt(s,u,f);return u;function u(k){return g(k)?c(k):f(k)}function f(k){if(k===null){i.consume(k);return}return i.enter("data"),i.consume(k),m}function m(k){return g(k)?(i.exit("data"),c(k)):(i.consume(k),m)}function g(k){if(k===null)return!0;const h=s[k];let v=-1;if(h)for(;++v<h.length;){const A=h[v];if(!A.previous||A.previous.call(a,a.previous))return!0}return!1}}}function qp(t){return l;function l(i,a){let s=-1,c;for(;++s<=i.length;)c===void 0?i[s]&&i[s][1].type==="data"&&(c=s,s++):(!i[s]||i[s][1].type!=="data")&&(s!==c+2&&(i[c][1].end=i[s-1][1].end,i.splice(c+2,s-c-2),s=c+2),c=void 0);return t?t(i,a):i}}function Ck(t,l){let i=0;for(;++i<=t.length;)if((i===t.length||t[i][1].type==="lineEnding")&&t[i-1][1].type==="data"){const a=t[i-1][1],s=l.sliceStream(a);let c=s.length,u=-1,f=0,m;for(;c--;){const g=s[c];if(typeof g=="string"){for(u=g.length;g.charCodeAt(u-1)===32;)f++,u--;if(u)break;u=-1}else if(g===-2)m=!0,f++;else if(g!==-1){c++;break}}if(f){const g={type:i===t.length||m||f<2?"lineSuffix":"hardBreakTrailing",start:{line:a.end.line,column:a.end.column-f,offset:a.end.offset-f,_index:a.start._index+c,_bufferIndex:c?u:a.start._bufferIndex+u},end:Object.assign({},a.end)};a.end=Object.assign({},g.start),a.start.offset===a.end.offset?Object.assign(a,g):(t.splice(i,0,["enter",g,l],["exit",g,l]),i+=2)}i++}return t}function xk(t,l,i){let a=Object.assign(i?Object.assign({},i):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1});const s={},c=[];let u=[],f=[];const m={consume:U,enter:B,exit:rn,attempt:V(un),check:V(O),interrupt:V(O,{interrupt:!0})},g={previous:null,code:null,containerState:{},events:[],parser:t,sliceStream:A,sliceSerialize:v,now:E,defineSkip:R,write:h};let k=l.tokenize.call(g,m);return l.resolveAll&&c.push(l),g;function h(Z){return u=Oe(u,Z),F(),u[u.length-1]!==null?[]:(en(l,0),g.events=$l(c,g.events,g),g.events)}function v(Z,Q){return Ek(A(Z),Q)}function A(Z){return Ik(u,Z)}function E(){const{line:Z,column:Q,offset:J,_index:Y,_bufferIndex:an}=a;return{line:Z,column:Q,offset:J,_index:Y,_bufferIndex:an}}function R(Z){s[Z.line]=Z.column,D()}function F(){let Z;for(;a._index<u.length;){const Q=u[a._index];if(typeof Q=="string")for(Z=a._index,a._bufferIndex<0&&(a._bufferIndex=0);a._index===Z&&a._bufferIndex<Q.length;)M(Q.charCodeAt(a._bufferIndex));else M(Q)}}function M(Z){k=k(Z)}function U(Z){fn(Z)?(a.line++,a.column=1,a.offset+=Z===-3?2:1,D()):Z!==-1&&(a.column++,a.offset++),a._bufferIndex<0?a._index++:(a._bufferIndex++,a._bufferIndex===u[a._index].length&&(a._bufferIndex=-1,a._index++)),g.previous=Z}function B(Z,Q){const J=Q||{};return J.type=Z,J.start=E(),g.events.push(["enter",J,g]),f.push(J),J}function rn(Z){const Q=f.pop();return Q.end=E(),g.events.push(["exit",Q,g]),Q}function un(Z,Q){en(Z,Q.from)}function O(Z,Q){Q.restore()}function V(Z,Q){return J;function J(Y,an,xn){let yn,$,sn,S;return Array.isArray(Y)?N(Y):"tokenize"in Y?N([Y]):_(Y);function _(mn){return Rn;function Rn(Sn){const Tn=Sn!==null&&mn[Sn],Vn=Sn!==null&&mn.null,Ye=[...Array.isArray(Tn)?Tn:Tn?[Tn]:[],...Array.isArray(Vn)?Vn:Vn?[Vn]:[]];return N(Ye)(Sn)}}function N(mn){return yn=mn,$=0,mn.length===0?xn:C(mn[$])}function C(mn){return Rn;function Rn(Sn){return S=cn(),sn=mn,mn.partial||(g.currentConstruct=mn),mn.name&&g.parser.constructs.disable.null.includes(mn.name)?vn():mn.tokenize.call(Q?Object.assign(Object.create(g),Q):g,m,gn,vn)(Sn)}}function gn(mn){return Z(sn,S),an}function vn(mn){return S.restore(),++$<yn.length?C(yn[$]):xn}}}function en(Z,Q){Z.resolveAll&&!c.includes(Z)&&c.push(Z),Z.resolve&&Ee(g.events,Q,g.events.length-Q,Z.resolve(g.events.slice(Q),g)),Z.resolveTo&&(g.events=Z.resolveTo(g.events,g))}function cn(){const Z=E(),Q=g.previous,J=g.currentConstruct,Y=g.events.length,an=Array.from(f);return{restore:xn,from:Y};function xn(){a=Z,g.previous=Q,g.currentConstruct=J,g.events.length=Y,f=an,D()}}function D(){a.line in s&&a.column<2&&(a.column=s[a.line],a.offset+=s[a.line]-1)}}function Ik(t,l){const i=l.start._index,a=l.start._bufferIndex,s=l.end._index,c=l.end._bufferIndex;let u;if(i===s)u=[t[i].slice(a,c)];else{if(u=t.slice(i,s),a>-1){const f=u[0];typeof f=="string"?u[0]=f.slice(a):u.shift()}c>0&&u.push(t[s].slice(0,c))}return u}function Ek(t,l){let i=-1;const a=[];let s;for(;++i<t.length;){const c=t[i];let u;if(typeof c=="string")u=c;else switch(c){case-5:{u="\r";break}case-4:{u=`
`;break}case-3:{u=`\r
`;break}case-2:{u=l?" ":"	";break}case-1:{if(!l&&s)continue;u=" ";break}default:u=String.fromCharCode(c)}s=c===-2,a.push(u)}return a.join("")}const _k={42:ke,43:ke,45:ke,48:ke,49:ke,50:ke,51:ke,52:ke,53:ke,54:ke,55:ke,56:ke,57:ke,62:zp},Lk={91:R0},Rk={[-2]:$a,[-1]:$a,32:$a},Pk={35:b0,42:Hl,45:[Jd,Hl],60:B0,61:Jd,95:Hl,96:Qd,126:Qd},Dk={38:Gp,92:Bp},Tk={[-5]:Ja,[-4]:Ja,[-3]:Ja,33:rk,38:Gp,42:ds,60:[o0,q0],91:lk,92:[M0,Bp],93:_s,95:ds,96:A0},Mk={null:[ds,vk]},Ok={null:[42,95]},bk={null:[]},Fk=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:Ok,contentInitial:Lk,disable:bk,document:_k,flow:Pk,flowInitial:Rk,insideSpan:Mk,string:Dk,text:Tk},Symbol.toStringTag,{value:"Module"}));function Nk(t){const i=Fp([Fk,...(t||{}).extensions||[]]),a={defined:[],lazy:{},constructs:i,content:s(Zy),document:s(e0),flow:s(kk),string:s(Sk),text:s(wk)};return a;function s(c){return u;function u(f){return xk(a,c,f)}}}function zk(t){for(;!jp(t););return t}const Kd=/[\0\t\n\r]/g;function Bk(){let t=1,l="",i=!0,a;return s;function s(c,u,f){const m=[];let g,k,h,v,A;for(c=l+(typeof c=="string"?c.toString():new TextDecoder(u||void 0).decode(c)),h=0,l="",i&&(c.charCodeAt(0)===65279&&h++,i=void 0);h<c.length;){if(Kd.lastIndex=h,g=Kd.exec(c),v=g&&g.index!==void 0?g.index:c.length,A=c.charCodeAt(v),!g){l=c.slice(h);break}if(A===10&&h===v&&a)m.push(-3),a=void 0;else switch(a&&(m.push(-5),a=void 0),h<v&&(m.push(c.slice(h,v)),t+=v-h),A){case 0:{m.push(65533),t++;break}case 9:{for(k=Math.ceil(t/4)*4,m.push(-2);t++<k;)m.push(-1);break}case 10:{m.push(-4),t=1;break}default:a=!0,t=1}h=v+1}return f&&(a&&m.push(-5),l&&m.push(l),m.push(null)),m}}const Gk=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function jk(t){return t.replace(Gk,Hk)}function Hk(t,l,i){if(l)return l;if(i.charCodeAt(0)===35){const s=i.charCodeAt(1),c=s===120||s===88;return Np(i.slice(c?2:1),c?16:10)}return Es(i)||t}const Qp={}.hasOwnProperty;function Uk(t,l,i){return l&&typeof l=="object"&&(i=l,l=void 0),Wk(i)(zk(Nk(i).document().write(Bk()(t,l,!0))))}function Wk(t){const l={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:c(nr),autolinkProtocol:cn,autolinkEmail:cn,atxHeading:c(Rr),blockQuote:c(Vn),characterEscape:cn,characterReference:cn,codeFenced:c(Ye),codeFencedFenceInfo:u,codeFencedFenceMeta:u,codeIndented:c(Ye,u),codeText:c(Ii,u),codeTextData:cn,data:cn,codeFlowValue:cn,definition:c(Xt),definitionDestinationString:u,definitionLabelString:u,definitionTitleString:u,emphasis:c(Lr),hardBreakEscape:c(Pr),hardBreakTrailing:c(Pr),htmlFlow:c(Zt,u),htmlFlowData:cn,htmlText:c(Zt,u),htmlTextData:cn,image:c(Ei),label:u,link:c(nr),listItem:c(ut),listItemValue:v,listOrdered:c(st,h),listUnordered:c(st),paragraph:c(Dr),reference:C,referenceString:u,resourceDestinationString:u,resourceTitleString:u,setextHeading:c(Rr),strong:c(_i),thematicBreak:c(Ri)},exit:{atxHeading:m(),atxHeadingSequence:un,autolink:m(),autolinkEmail:Tn,autolinkProtocol:Sn,blockQuote:m(),characterEscapeValue:D,characterReferenceMarkerHexadecimal:vn,characterReferenceMarkerNumeric:vn,characterReferenceValue:mn,characterReference:Rn,codeFenced:m(F),codeFencedFence:R,codeFencedFenceInfo:A,codeFencedFenceMeta:E,codeFlowValue:D,codeIndented:m(M),codeText:m(an),codeTextData:D,data:D,definition:m(),definitionDestinationString:rn,definitionLabelString:U,definitionTitleString:B,emphasis:m(),hardBreakEscape:m(Q),hardBreakTrailing:m(Q),htmlFlow:m(J),htmlFlowData:D,htmlText:m(Y),htmlTextData:D,image:m(yn),label:sn,labelText:$,lineEnding:Z,link:m(xn),listItem:m(),listOrdered:m(),listUnordered:m(),paragraph:m(),referenceString:gn,resourceDestinationString:S,resourceTitleString:_,resource:N,setextHeading:m(en),setextHeadingLineSequence:V,setextHeadingText:O,strong:m(),thematicBreak:m()}};$p(l,(t||{}).mdastExtensions||[]);const i={};return a;function a(b){let K={type:"root",children:[]};const hn={stack:[K],tokenStack:[],config:l,enter:f,exit:g,buffer:u,resume:k,data:i},wn=[];let _n=-1;for(;++_n<b.length;)if(b[_n][1].type==="listOrdered"||b[_n][1].type==="listUnordered")if(b[_n][0]==="enter")wn.push(_n);else{const Zn=wn.pop();_n=s(b,Zn,_n)}for(_n=-1;++_n<b.length;){const Zn=l[b[_n][0]];Qp.call(Zn,b[_n][1].type)&&Zn[b[_n][1].type].call(Object.assign({sliceSerialize:b[_n][2].sliceSerialize},hn),b[_n][1])}if(hn.tokenStack.length>0){const Zn=hn.tokenStack[hn.tokenStack.length-1];(Zn[1]||Yd).call(hn,void 0,Zn[0])}for(K.position={start:Pt(b.length>0?b[0][1].start:{line:1,column:1,offset:0}),end:Pt(b.length>0?b[b.length-2][1].end:{line:1,column:1,offset:0})},_n=-1;++_n<l.transforms.length;)K=l.transforms[_n](K)||K;return K}function s(b,K,hn){let wn=K-1,_n=-1,Zn=!1,Xe,_e,ct,Tt;for(;++wn<=hn;){const ne=b[wn];switch(ne[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{ne[0]==="enter"?_n++:_n--,Tt=void 0;break}case"lineEndingBlank":{ne[0]==="enter"&&(Xe&&!Tt&&!_n&&!ct&&(ct=wn),Tt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Tt=void 0}if(!_n&&ne[0]==="enter"&&ne[1].type==="listItemPrefix"||_n===-1&&ne[0]==="exit"&&(ne[1].type==="listUnordered"||ne[1].type==="listOrdered")){if(Xe){let Ue=wn;for(_e=void 0;Ue--;){const ve=b[Ue];if(ve[1].type==="lineEnding"||ve[1].type==="lineEndingBlank"){if(ve[0]==="exit")continue;_e&&(b[_e][1].type="lineEndingBlank",Zn=!0),ve[1].type="lineEnding",_e=Ue}else if(!(ve[1].type==="linePrefix"||ve[1].type==="blockQuotePrefix"||ve[1].type==="blockQuotePrefixWhitespace"||ve[1].type==="blockQuoteMarker"||ve[1].type==="listItemIndent"))break}ct&&(!_e||ct<_e)&&(Xe._spread=!0),Xe.end=Object.assign({},_e?b[_e][1].start:ne[1].end),b.splice(_e||wn,0,["exit",Xe,ne[2]]),wn++,hn++}if(ne[1].type==="listItemPrefix"){const Ue={type:"listItem",_spread:!1,start:Object.assign({},ne[1].start),end:void 0};Xe=Ue,b.splice(wn,0,["enter",Ue,ne[2]]),wn++,hn++,ct=void 0,Tt=!0}}}return b[K][1]._spread=Zn,hn}function c(b,K){return hn;function hn(wn){f.call(this,b(wn),wn),K&&K.call(this,wn)}}function u(){this.stack.push({type:"fragment",children:[]})}function f(b,K,hn){this.stack[this.stack.length-1].children.push(b),this.stack.push(b),this.tokenStack.push([K,hn||void 0]),b.position={start:Pt(K.start),end:void 0}}function m(b){return K;function K(hn){b&&b.call(this,hn),g.call(this,hn)}}function g(b,K){const hn=this.stack.pop(),wn=this.tokenStack.pop();if(wn)wn[0].type!==b.type&&(K?K.call(this,b,wn[0]):(wn[1]||Yd).call(this,b,wn[0]));else throw new Error("Cannot close `"+b.type+"` ("+ki({start:b.start,end:b.end})+"): it’s not open");hn.position.end=Pt(b.end)}function k(){return Is(this.stack.pop())}function h(){this.data.expectingFirstListItemValue=!0}function v(b){if(this.data.expectingFirstListItemValue){const K=this.stack[this.stack.length-2];K.start=Number.parseInt(this.sliceSerialize(b),10),this.data.expectingFirstListItemValue=void 0}}function A(){const b=this.resume(),K=this.stack[this.stack.length-1];K.lang=b}function E(){const b=this.resume(),K=this.stack[this.stack.length-1];K.meta=b}function R(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function F(){const b=this.resume(),K=this.stack[this.stack.length-1];K.value=b.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function M(){const b=this.resume(),K=this.stack[this.stack.length-1];K.value=b.replace(/(\r?\n|\r)$/g,"")}function U(b){const K=this.resume(),hn=this.stack[this.stack.length-1];hn.label=K,hn.identifier=He(this.sliceSerialize(b)).toLowerCase()}function B(){const b=this.resume(),K=this.stack[this.stack.length-1];K.title=b}function rn(){const b=this.resume(),K=this.stack[this.stack.length-1];K.url=b}function un(b){const K=this.stack[this.stack.length-1];if(!K.depth){const hn=this.sliceSerialize(b).length;K.depth=hn}}function O(){this.data.setextHeadingSlurpLineEnding=!0}function V(b){const K=this.stack[this.stack.length-1];K.depth=this.sliceSerialize(b).codePointAt(0)===61?1:2}function en(){this.data.setextHeadingSlurpLineEnding=void 0}function cn(b){const hn=this.stack[this.stack.length-1].children;let wn=hn[hn.length-1];(!wn||wn.type!=="text")&&(wn=Li(),wn.position={start:Pt(b.start),end:void 0},hn.push(wn)),this.stack.push(wn)}function D(b){const K=this.stack.pop();K.value+=this.sliceSerialize(b),K.position.end=Pt(b.end)}function Z(b){const K=this.stack[this.stack.length-1];if(this.data.atHardBreak){const hn=K.children[K.children.length-1];hn.position.end=Pt(b.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&l.canContainEols.includes(K.type)&&(cn.call(this,b),D.call(this,b))}function Q(){this.data.atHardBreak=!0}function J(){const b=this.resume(),K=this.stack[this.stack.length-1];K.value=b}function Y(){const b=this.resume(),K=this.stack[this.stack.length-1];K.value=b}function an(){const b=this.resume(),K=this.stack[this.stack.length-1];K.value=b}function xn(){const b=this.stack[this.stack.length-1];if(this.data.inReference){const K=this.data.referenceType||"shortcut";b.type+="Reference",b.referenceType=K,delete b.url,delete b.title}else delete b.identifier,delete b.label;this.data.referenceType=void 0}function yn(){const b=this.stack[this.stack.length-1];if(this.data.inReference){const K=this.data.referenceType||"shortcut";b.type+="Reference",b.referenceType=K,delete b.url,delete b.title}else delete b.identifier,delete b.label;this.data.referenceType=void 0}function $(b){const K=this.sliceSerialize(b),hn=this.stack[this.stack.length-2];hn.label=jk(K),hn.identifier=He(K).toLowerCase()}function sn(){const b=this.stack[this.stack.length-1],K=this.resume(),hn=this.stack[this.stack.length-1];if(this.data.inReference=!0,hn.type==="link"){const wn=b.children;hn.children=wn}else hn.alt=K}function S(){const b=this.resume(),K=this.stack[this.stack.length-1];K.url=b}function _(){const b=this.resume(),K=this.stack[this.stack.length-1];K.title=b}function N(){this.data.inReference=void 0}function C(){this.data.referenceType="collapsed"}function gn(b){const K=this.resume(),hn=this.stack[this.stack.length-1];hn.label=K,hn.identifier=He(this.sliceSerialize(b)).toLowerCase(),this.data.referenceType="full"}function vn(b){this.data.characterReferenceType=b.type}function mn(b){const K=this.sliceSerialize(b),hn=this.data.characterReferenceType;let wn;hn?(wn=Np(K,hn==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):wn=Es(K);const _n=this.stack[this.stack.length-1];_n.value+=wn}function Rn(b){const K=this.stack.pop();K.position.end=Pt(b.end)}function Sn(b){D.call(this,b);const K=this.stack[this.stack.length-1];K.url=this.sliceSerialize(b)}function Tn(b){D.call(this,b);const K=this.stack[this.stack.length-1];K.url="mailto:"+this.sliceSerialize(b)}function Vn(){return{type:"blockquote",children:[]}}function Ye(){return{type:"code",lang:null,meta:null,value:""}}function Ii(){return{type:"inlineCode",value:""}}function Xt(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Lr(){return{type:"emphasis",children:[]}}function Rr(){return{type:"heading",depth:0,children:[]}}function Pr(){return{type:"break"}}function Zt(){return{type:"html",value:""}}function Ei(){return{type:"image",title:null,url:"",alt:null}}function nr(){return{type:"link",title:null,url:"",children:[]}}function st(b){return{type:"list",ordered:b.type==="listOrdered",start:null,spread:b._spread,children:[]}}function ut(b){return{type:"listItem",spread:b._spread,checked:null,children:[]}}function Dr(){return{type:"paragraph",children:[]}}function _i(){return{type:"strong",children:[]}}function Li(){return{type:"text",value:""}}function Ri(){return{type:"thematicBreak"}}}function Pt(t){return{line:t.line,column:t.column,offset:t.offset}}function $p(t,l){let i=-1;for(;++i<l.length;){const a=l[i];Array.isArray(a)?$p(t,a):Vk(t,a)}}function Vk(t,l){let i;for(i in l)if(Qp.call(l,i))switch(i){case"canContainEols":{const a=l[i];a&&t[i].push(...a);break}case"transforms":{const a=l[i];a&&t[i].push(...a);break}case"enter":case"exit":{const a=l[i];a&&Object.assign(t[i],a);break}}}function Yd(t,l){throw t?new Error("Cannot close `"+t.type+"` ("+ki({start:t.start,end:t.end})+"): a different token (`"+l.type+"`, "+ki({start:l.start,end:l.end})+") is open"):new Error("Cannot close document, a token (`"+l.type+"`, "+ki({start:l.start,end:l.end})+") is still open")}function qk(t){const l=this;l.parser=i;function i(a){return Uk(a,{...l.data("settings"),...t,extensions:l.data("micromarkExtensions")||[],mdastExtensions:l.data("fromMarkdownExtensions")||[]})}}function Qk(t,l){const i={type:"element",tagName:"blockquote",properties:{},children:t.wrap(t.all(l),!0)};return t.patch(l,i),t.applyData(l,i)}function $k(t,l){const i={type:"element",tagName:"br",properties:{},children:[]};return t.patch(l,i),[t.applyData(l,i),{type:"text",value:`
`}]}function Jk(t,l){const i=l.value?l.value+`
`:"",a={},s=l.lang?l.lang.split(/\s+/):[];s.length>0&&(a.className=["language-"+s[0]]);let c={type:"element",tagName:"code",properties:a,children:[{type:"text",value:i}]};return l.meta&&(c.data={meta:l.meta}),t.patch(l,c),c=t.applyData(l,c),c={type:"element",tagName:"pre",properties:{},children:[c]},t.patch(l,c),c}function Kk(t,l){const i={type:"element",tagName:"del",properties:{},children:t.all(l)};return t.patch(l,i),t.applyData(l,i)}function Yk(t,l){const i={type:"element",tagName:"em",properties:{},children:t.all(l)};return t.patch(l,i),t.applyData(l,i)}function Xk(t,l){const i=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",a=String(l.identifier).toUpperCase(),s=_r(a.toLowerCase()),c=t.footnoteOrder.indexOf(a);let u,f=t.footnoteCounts.get(a);f===void 0?(f=0,t.footnoteOrder.push(a),u=t.footnoteOrder.length):u=c+1,f+=1,t.footnoteCounts.set(a,f);const m={type:"element",tagName:"a",properties:{href:"#"+i+"fn-"+s,id:i+"fnref-"+s+(f>1?"-"+f:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(u)}]};t.patch(l,m);const g={type:"element",tagName:"sup",properties:{},children:[m]};return t.patch(l,g),t.applyData(l,g)}function Zk(t,l){const i={type:"element",tagName:"h"+l.depth,properties:{},children:t.all(l)};return t.patch(l,i),t.applyData(l,i)}function nA(t,l){if(t.options.allowDangerousHtml){const i={type:"raw",value:l.value};return t.patch(l,i),t.applyData(l,i)}}function Jp(t,l){const i=l.referenceType;let a="]";if(i==="collapsed"?a+="[]":i==="full"&&(a+="["+(l.label||l.identifier)+"]"),l.type==="imageReference")return[{type:"text",value:"!["+l.alt+a}];const s=t.all(l),c=s[0];c&&c.type==="text"?c.value="["+c.value:s.unshift({type:"text",value:"["});const u=s[s.length-1];return u&&u.type==="text"?u.value+=a:s.push({type:"text",value:a}),s}function eA(t,l){const i=String(l.identifier).toUpperCase(),a=t.definitionById.get(i);if(!a)return Jp(t,l);const s={src:_r(a.url||""),alt:l.alt};a.title!==null&&a.title!==void 0&&(s.title=a.title);const c={type:"element",tagName:"img",properties:s,children:[]};return t.patch(l,c),t.applyData(l,c)}function tA(t,l){const i={src:_r(l.url)};l.alt!==null&&l.alt!==void 0&&(i.alt=l.alt),l.title!==null&&l.title!==void 0&&(i.title=l.title);const a={type:"element",tagName:"img",properties:i,children:[]};return t.patch(l,a),t.applyData(l,a)}function rA(t,l){const i={type:"text",value:l.value.replace(/\r?\n|\r/g," ")};t.patch(l,i);const a={type:"element",tagName:"code",properties:{},children:[i]};return t.patch(l,a),t.applyData(l,a)}function iA(t,l){const i=String(l.identifier).toUpperCase(),a=t.definitionById.get(i);if(!a)return Jp(t,l);const s={href:_r(a.url||"")};a.title!==null&&a.title!==void 0&&(s.title=a.title);const c={type:"element",tagName:"a",properties:s,children:t.all(l)};return t.patch(l,c),t.applyData(l,c)}function lA(t,l){const i={href:_r(l.url)};l.title!==null&&l.title!==void 0&&(i.title=l.title);const a={type:"element",tagName:"a",properties:i,children:t.all(l)};return t.patch(l,a),t.applyData(l,a)}function oA(t,l,i){const a=t.all(l),s=i?aA(i):Kp(l),c={},u=[];if(typeof l.checked=="boolean"){const k=a[0];let h;k&&k.type==="element"&&k.tagName==="p"?h=k:(h={type:"element",tagName:"p",properties:{},children:[]},a.unshift(h)),h.children.length>0&&h.children.unshift({type:"text",value:" "}),h.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:l.checked,disabled:!0},children:[]}),c.className=["task-list-item"]}let f=-1;for(;++f<a.length;){const k=a[f];(s||f!==0||k.type!=="element"||k.tagName!=="p")&&u.push({type:"text",value:`
`}),k.type==="element"&&k.tagName==="p"&&!s?u.push(...k.children):u.push(k)}const m=a[a.length-1];m&&(s||m.type!=="element"||m.tagName!=="p")&&u.push({type:"text",value:`
`});const g={type:"element",tagName:"li",properties:c,children:u};return t.patch(l,g),t.applyData(l,g)}function aA(t){let l=!1;if(t.type==="list"){l=t.spread||!1;const i=t.children;let a=-1;for(;!l&&++a<i.length;)l=Kp(i[a])}return l}function Kp(t){const l=t.spread;return l??t.children.length>1}function sA(t,l){const i={},a=t.all(l);let s=-1;for(typeof l.start=="number"&&l.start!==1&&(i.start=l.start);++s<a.length;){const u=a[s];if(u.type==="element"&&u.tagName==="li"&&u.properties&&Array.isArray(u.properties.className)&&u.properties.className.includes("task-list-item")){i.className=["contains-task-list"];break}}const c={type:"element",tagName:l.ordered?"ol":"ul",properties:i,children:t.wrap(a,!0)};return t.patch(l,c),t.applyData(l,c)}function uA(t,l){const i={type:"element",tagName:"p",properties:{},children:t.all(l)};return t.patch(l,i),t.applyData(l,i)}function cA(t,l){const i={type:"root",children:t.wrap(t.all(l))};return t.patch(l,i),t.applyData(l,i)}function dA(t,l){const i={type:"element",tagName:"strong",properties:{},children:t.all(l)};return t.patch(l,i),t.applyData(l,i)}function pA(t,l){const i=t.all(l),a=i.shift(),s=[];if(a){const u={type:"element",tagName:"thead",properties:{},children:t.wrap([a],!0)};t.patch(l.children[0],u),s.push(u)}if(i.length>0){const u={type:"element",tagName:"tbody",properties:{},children:t.wrap(i,!0)},f=Ss(l.children[1]),m=Rp(l.children[l.children.length-1]);f&&m&&(u.position={start:f,end:m}),s.push(u)}const c={type:"element",tagName:"table",properties:{},children:t.wrap(s,!0)};return t.patch(l,c),t.applyData(l,c)}function fA(t,l,i){const a=i?i.children:void 0,c=(a?a.indexOf(l):1)===0?"th":"td",u=i&&i.type==="table"?i.align:void 0,f=u?u.length:l.children.length;let m=-1;const g=[];for(;++m<f;){const h=l.children[m],v={},A=u?u[m]:void 0;A&&(v.align=A);let E={type:"element",tagName:c,properties:v,children:[]};h&&(E.children=t.all(h),t.patch(h,E),E=t.applyData(h,E)),g.push(E)}const k={type:"element",tagName:"tr",properties:{},children:t.wrap(g,!0)};return t.patch(l,k),t.applyData(l,k)}function mA(t,l){const i={type:"element",tagName:"td",properties:{},children:t.all(l)};return t.patch(l,i),t.applyData(l,i)}const Xd=9,Zd=32;function gA(t){const l=String(t),i=/\r?\n|\r/g;let a=i.exec(l),s=0;const c=[];for(;a;)c.push(np(l.slice(s,a.index),s>0,!0),a[0]),s=a.index+a[0].length,a=i.exec(l);return c.push(np(l.slice(s),s>0,!1)),c.join("")}function np(t,l,i){let a=0,s=t.length;if(l){let c=t.codePointAt(a);for(;c===Xd||c===Zd;)a++,c=t.codePointAt(a)}if(i){let c=t.codePointAt(s-1);for(;c===Xd||c===Zd;)s--,c=t.codePointAt(s-1)}return s>a?t.slice(a,s):""}function hA(t,l){const i={type:"text",value:gA(String(l.value))};return t.patch(l,i),t.applyData(l,i)}function yA(t,l){const i={type:"element",tagName:"hr",properties:{},children:[]};return t.patch(l,i),t.applyData(l,i)}const kA={blockquote:Qk,break:$k,code:Jk,delete:Kk,emphasis:Yk,footnoteReference:Xk,heading:Zk,html:nA,imageReference:eA,image:tA,inlineCode:rA,linkReference:iA,link:lA,listItem:oA,list:sA,paragraph:uA,root:cA,strong:dA,table:pA,tableCell:mA,tableRow:fA,text:hA,thematicBreak:yA,toml:zl,yaml:zl,definition:zl,footnoteDefinition:zl};function zl(){}const Yp=-1,Jl=0,vi=1,ql=2,Ls=3,Rs=4,Ps=5,Ds=6,Xp=7,Zp=8,AA=typeof self=="object"?self:globalThis,ep=(t,l)=>{switch(t){case"Function":case"SharedWorker":case"Worker":case"eval":case"setInterval":case"setTimeout":throw new TypeError("unable to deserialize "+t)}return new AA[t](l)},vA=(t,l)=>{const i=(s,c)=>(t.set(c,s),s),a=s=>{if(t.has(s))return t.get(s);const[c,u]=l[s];switch(c){case Jl:case Yp:return i(u,s);case vi:{const f=i([],s);for(const m of u)f.push(a(m));return f}case ql:{const f=i({},s);for(const[m,g]of u)f[a(m)]=a(g);return f}case Ls:return i(new Date(u),s);case Rs:{const{source:f,flags:m}=u;return i(new RegExp(f,m),s)}case Ps:{const f=i(new Map,s);for(const[m,g]of u)f.set(a(m),a(g));return f}case Ds:{const f=i(new Set,s);for(const m of u)f.add(a(m));return f}case Xp:{const{name:f,message:m}=u;return i(ep(f,m),s)}case Zp:return i(BigInt(u),s);case"BigInt":return i(Object(BigInt(u)),s);case"ArrayBuffer":return i(new Uint8Array(u).buffer,u);case"DataView":{const{buffer:f}=new Uint8Array(u);return i(new DataView(f),u)}}return i(ep(c,u),s)};return a},tp=t=>vA(new Map,t)(0),Qt="",{toString:SA}={},{keys:wA}=Object,yi=t=>{const l=typeof t;if(l!=="object"||!t)return[Jl,l];const i=SA.call(t).slice(8,-1);switch(i){case"Array":return[vi,Qt];case"Object":return[ql,Qt];case"Date":return[Ls,Qt];case"RegExp":return[Rs,Qt];case"Map":return[Ps,Qt];case"Set":return[Ds,Qt];case"DataView":return[vi,i]}return i.includes("Array")?[vi,i]:i.includes("Error")?[Xp,i]:[ql,i]},Bl=([t,l])=>t===Jl&&(l==="function"||l==="symbol"),CA=(t,l,i,a)=>{const s=(u,f)=>{const m=a.push(u)-1;return i.set(f,m),m},c=u=>{if(i.has(u))return i.get(u);let[f,m]=yi(u);switch(f){case Jl:{let k=u;switch(m){case"bigint":f=Zp,k=u.toString();break;case"function":case"symbol":if(t)throw new TypeError("unable to serialize "+m);k=null;break;case"undefined":return s([Yp],u)}return s([f,k],u)}case vi:{if(m){let v=u;return m==="DataView"?v=new Uint8Array(u.buffer):m==="ArrayBuffer"&&(v=new Uint8Array(u)),s([m,[...v]],u)}const k=[],h=s([f,k],u);for(const v of u)k.push(c(v));return h}case ql:{if(m)switch(m){case"BigInt":return s([m,u.toString()],u);case"Boolean":case"Number":case"String":return s([m,u.valueOf()],u)}if(l&&"toJSON"in u)return c(u.toJSON());const k=[],h=s([f,k],u);for(const v of wA(u))(t||!Bl(yi(u[v])))&&k.push([c(v),c(u[v])]);return h}case Ls:return s([f,isNaN(u.getTime())?Qt:u.toISOString()],u);case Rs:{const{source:k,flags:h}=u;return s([f,{source:k,flags:h}],u)}case Ps:{const k=[],h=s([f,k],u);for(const[v,A]of u)(t||!(Bl(yi(v))||Bl(yi(A))))&&k.push([c(v),c(A)]);return h}case Ds:{const k=[],h=s([f,k],u);for(const v of u)(t||!Bl(yi(v)))&&k.push(c(v));return h}}const{message:g}=u;return s([f,{name:m,message:g}],u)};return c},rp=(t,{json:l,lossy:i}={})=>{const a=[];return CA(!(l||i),!!l,new Map,a)(t),a},Jt=typeof structuredClone=="function"?(t,l)=>l&&("json"in l||"lossy"in l)?tp(rp(t,l)):structuredClone(t):(t,l)=>tp(rp(t,l));function xA(t,l){const i=[{type:"text",value:"↩"}];return l>1&&i.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(l)}]}),i}function IA(t,l){return"Back to reference "+(t+1)+(l>1?"-"+l:"")}function EA(t){const l=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",i=t.options.footnoteBackContent||xA,a=t.options.footnoteBackLabel||IA,s=t.options.footnoteLabel||"Footnotes",c=t.options.footnoteLabelTagName||"h2",u=t.options.footnoteLabelProperties||{className:["sr-only"]},f=[];let m=-1;for(;++m<t.footnoteOrder.length;){const g=t.footnoteById.get(t.footnoteOrder[m]);if(!g)continue;const k=t.all(g),h=String(g.identifier).toUpperCase(),v=_r(h.toLowerCase());let A=0;const E=[],R=t.footnoteCounts.get(h);for(;R!==void 0&&++A<=R;){E.length>0&&E.push({type:"text",value:" "});let U=typeof i=="string"?i:i(m,A);typeof U=="string"&&(U={type:"text",value:U}),E.push({type:"element",tagName:"a",properties:{href:"#"+l+"fnref-"+v+(A>1?"-"+A:""),dataFootnoteBackref:"",ariaLabel:typeof a=="string"?a:a(m,A),className:["data-footnote-backref"]},children:Array.isArray(U)?U:[U]})}const F=k[k.length-1];if(F&&F.type==="element"&&F.tagName==="p"){const U=F.children[F.children.length-1];U&&U.type==="text"?U.value+=" ":F.children.push({type:"text",value:" "}),F.children.push(...E)}else k.push(...E);const M={type:"element",tagName:"li",properties:{id:l+"fn-"+v},children:t.wrap(k,!0)};t.patch(g,M),f.push(M)}if(f.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:c,properties:{...Jt(u),id:"footnote-label"},children:[{type:"text",value:s}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:t.wrap(f,!0)},{type:"text",value:`
`}]}}const Kl=function(t){if(t==null)return PA;if(typeof t=="function")return Yl(t);if(typeof t=="object")return Array.isArray(t)?_A(t):LA(t);if(typeof t=="string")return RA(t);throw new Error("Expected function, string, or object as test")};function _A(t){const l=[];let i=-1;for(;++i<t.length;)l[i]=Kl(t[i]);return Yl(a);function a(...s){let c=-1;for(;++c<l.length;)if(l[c].apply(this,s))return!0;return!1}}function LA(t){const l=t;return Yl(i);function i(a){const s=a;let c;for(c in t)if(s[c]!==l[c])return!1;return!0}}function RA(t){return Yl(l);function l(i){return i&&i.type===t}}function Yl(t){return l;function l(i,a,s){return!!(DA(i)&&t.call(this,i,typeof a=="number"?a:void 0,s||void 0))}}function PA(){return!0}function DA(t){return t!==null&&typeof t=="object"&&"type"in t}const nf=[],TA=!0,ps=!1,MA="skip";function ef(t,l,i,a){let s;typeof l=="function"&&typeof i!="function"?(a=i,i=l):s=l;const c=Kl(s),u=a?-1:1;f(t,void 0,[])();function f(m,g,k){const h=m&&typeof m=="object"?m:{};if(typeof h.type=="string"){const A=typeof h.tagName=="string"?h.tagName:typeof h.name=="string"?h.name:void 0;Object.defineProperty(v,"name",{value:"node ("+(m.type+(A?"<"+A+">":""))+")"})}return v;function v(){let A=nf,E,R,F;if((!l||c(m,g,k[k.length-1]||void 0))&&(A=OA(i(m,k)),A[0]===ps))return A;if("children"in m&&m.children){const M=m;if(M.children&&A[0]!==MA)for(R=(a?M.children.length:-1)+u,F=k.concat(M);R>-1&&R<M.children.length;){const U=M.children[R];if(E=f(U,R,F)(),E[0]===ps)return E;R=typeof E[1]=="number"?E[1]:R+u}}return A}}}function OA(t){return Array.isArray(t)?t:typeof t=="number"?[TA,t]:t==null?nf:[t]}function Ts(t,l,i,a){let s,c,u;typeof l=="function"&&typeof i!="function"?(c=void 0,u=l,s=i):(c=l,u=i,s=a),ef(t,c,f,s);function f(m,g){const k=g[g.length-1],h=k?k.children.indexOf(m):void 0;return u(m,h,k)}}const fs={}.hasOwnProperty,bA={};function FA(t,l){const i=l||bA,a=new Map,s=new Map,c=new Map,u={...kA,...i.handlers},f={all:g,applyData:zA,definitionById:a,footnoteById:s,footnoteCounts:c,footnoteOrder:[],handlers:u,one:m,options:i,patch:NA,wrap:GA};return Ts(t,function(k){if(k.type==="definition"||k.type==="footnoteDefinition"){const h=k.type==="definition"?a:s,v=String(k.identifier).toUpperCase();h.has(v)||h.set(v,k)}}),f;function m(k,h){const v=k.type,A=f.handlers[v];if(fs.call(f.handlers,v)&&A)return A(f,k,h);if(f.options.passThrough&&f.options.passThrough.includes(v)){if("children"in k){const{children:R,...F}=k,M=Jt(F);return M.children=f.all(k),M}return Jt(k)}return(f.options.unknownHandler||BA)(f,k,h)}function g(k){const h=[];if("children"in k){const v=k.children;let A=-1;for(;++A<v.length;){const E=f.one(v[A],k);if(E){if(A&&v[A-1].type==="break"&&(!Array.isArray(E)&&E.type==="text"&&(E.value=ip(E.value)),!Array.isArray(E)&&E.type==="element")){const R=E.children[0];R&&R.type==="text"&&(R.value=ip(R.value))}Array.isArray(E)?h.push(...E):h.push(E)}}}return h}}function NA(t,l){t.position&&(l.position=Iy(t))}function zA(t,l){let i=l;if(t&&t.data){const a=t.data.hName,s=t.data.hChildren,c=t.data.hProperties;if(typeof a=="string")if(i.type==="element")i.tagName=a;else{const u="children"in i?i.children:[i];i={type:"element",tagName:a,properties:{},children:u}}i.type==="element"&&c&&Object.assign(i.properties,Jt(c)),"children"in i&&i.children&&s!==null&&s!==void 0&&(i.children=s)}return i}function BA(t,l){const i=l.data||{},a="value"in l&&!(fs.call(i,"hProperties")||fs.call(i,"hChildren"))?{type:"text",value:l.value}:{type:"element",tagName:"div",properties:{},children:t.all(l)};return t.patch(l,a),t.applyData(l,a)}function GA(t,l){const i=[];let a=-1;for(l&&i.push({type:"text",value:`
`});++a<t.length;)a&&i.push({type:"text",value:`
`}),i.push(t[a]);return l&&t.length>0&&i.push({type:"text",value:`
`}),i}function ip(t){let l=0,i=t.charCodeAt(l);for(;i===9||i===32;)l++,i=t.charCodeAt(l);return t.slice(l)}function lp(t,l){const i=FA(t,l),a=i.one(t,void 0),s=EA(i),c=Array.isArray(a)?{type:"root",children:a}:a||{type:"root",children:[]};return s&&c.children.push({type:"text",value:`
`},s),c}function jA(t,l){return t&&"run"in t?async function(i,a){const s=lp(i,{file:a,...l});await t.run(s,a)}:function(i,a){return lp(i,{file:a,...t||l})}}function op(t){if(t)throw t}function ms(t){if(typeof t!="object"||t===null)return!1;const l=Object.getPrototypeOf(t);return(l===null||l===Object.prototype||Object.getPrototypeOf(l)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function HA(){const t=[],l={run:i,use:a};return l;function i(...s){let c=-1;const u=s.pop();if(typeof u!="function")throw new TypeError("Expected function as last argument, not "+u);f(null,...s);function f(m,...g){const k=t[++c];let h=-1;if(m){u(m);return}for(;++h<s.length;)(g[h]===null||g[h]===void 0)&&(g[h]=s[h]);s=g,k?UA(k,f)(...g):u(null,...g)}}function a(s){if(typeof s!="function")throw new TypeError("Expected `middelware` to be a function, not "+s);return t.push(s),l}}function UA(t,l){let i;return a;function a(...u){const f=t.length>u.length;let m;f&&u.push(s);try{m=t.apply(this,u)}catch(g){const k=g;if(f&&i)throw k;return s(k)}f||(m&&m.then&&typeof m.then=="function"?m.then(c,s):m instanceof Error?s(m):c(m))}function s(u,...f){i||(i=!0,l(u,...f))}function c(u){s(null,u)}}const Je={basename:WA,dirname:VA,extname:qA,join:QA,sep:"/"};function WA(t,l){if(l!==void 0&&typeof l!="string")throw new TypeError('"ext" argument must be a string');xi(t);let i=0,a=-1,s=t.length,c;if(l===void 0||l.length===0||l.length>t.length){for(;s--;)if(t.codePointAt(s)===47){if(c){i=s+1;break}}else a<0&&(c=!0,a=s+1);return a<0?"":t.slice(i,a)}if(l===t)return"";let u=-1,f=l.length-1;for(;s--;)if(t.codePointAt(s)===47){if(c){i=s+1;break}}else u<0&&(c=!0,u=s+1),f>-1&&(t.codePointAt(s)===l.codePointAt(f--)?f<0&&(a=s):(f=-1,a=u));return i===a?a=u:a<0&&(a=t.length),t.slice(i,a)}function VA(t){if(xi(t),t.length===0)return".";let l=-1,i=t.length,a;for(;--i;)if(t.codePointAt(i)===47){if(a){l=i;break}}else a||(a=!0);return l<0?t.codePointAt(0)===47?"/":".":l===1&&t.codePointAt(0)===47?"//":t.slice(0,l)}function qA(t){xi(t);let l=t.length,i=-1,a=0,s=-1,c=0,u;for(;l--;){const f=t.codePointAt(l);if(f===47){if(u){a=l+1;break}continue}i<0&&(u=!0,i=l+1),f===46?s<0?s=l:c!==1&&(c=1):s>-1&&(c=-1)}return s<0||i<0||c===0||c===1&&s===i-1&&s===a+1?"":t.slice(s,i)}function QA(...t){let l=-1,i;for(;++l<t.length;)xi(t[l]),t[l]&&(i=i===void 0?t[l]:i+"/"+t[l]);return i===void 0?".":$A(i)}function $A(t){xi(t);const l=t.codePointAt(0)===47;let i=JA(t,!l);return i.length===0&&!l&&(i="."),i.length>0&&t.codePointAt(t.length-1)===47&&(i+="/"),l?"/"+i:i}function JA(t,l){let i="",a=0,s=-1,c=0,u=-1,f,m;for(;++u<=t.length;){if(u<t.length)f=t.codePointAt(u);else{if(f===47)break;f=47}if(f===47){if(!(s===u-1||c===1))if(s!==u-1&&c===2){if(i.length<2||a!==2||i.codePointAt(i.length-1)!==46||i.codePointAt(i.length-2)!==46){if(i.length>2){if(m=i.lastIndexOf("/"),m!==i.length-1){m<0?(i="",a=0):(i=i.slice(0,m),a=i.length-1-i.lastIndexOf("/")),s=u,c=0;continue}}else if(i.length>0){i="",a=0,s=u,c=0;continue}}l&&(i=i.length>0?i+"/..":"..",a=2)}else i.length>0?i+="/"+t.slice(s+1,u):i=t.slice(s+1,u),a=u-s-1;s=u,c=0}else f===46&&c>-1?c++:c=-1}return i}function xi(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}const KA={cwd:YA};function YA(){return"/"}function gs(t){return!!(t!==null&&typeof t=="object"&&"href"in t&&t.href&&"protocol"in t&&t.protocol&&t.auth===void 0)}function XA(t){if(typeof t=="string")t=new URL(t);else if(!gs(t)){const l=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+t+"`");throw l.code="ERR_INVALID_ARG_TYPE",l}if(t.protocol!=="file:"){const l=new TypeError("The URL must be of scheme file");throw l.code="ERR_INVALID_URL_SCHEME",l}return ZA(t)}function ZA(t){if(t.hostname!==""){const a=new TypeError('File URL host must be "localhost" or empty on darwin');throw a.code="ERR_INVALID_FILE_URL_HOST",a}const l=t.pathname;let i=-1;for(;++i<l.length;)if(l.codePointAt(i)===37&&l.codePointAt(i+1)===50){const a=l.codePointAt(i+2);if(a===70||a===102){const s=new TypeError("File URL path must not include encoded / characters");throw s.code="ERR_INVALID_FILE_URL_PATH",s}}return decodeURIComponent(l)}const Ka=["history","path","basename","stem","extname","dirname"];class tf{constructor(l){let i;l?gs(l)?i={path:l}:typeof l=="string"||n1(l)?i={value:l}:i=l:i={},this.cwd="cwd"in i?"":KA.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let a=-1;for(;++a<Ka.length;){const c=Ka[a];c in i&&i[c]!==void 0&&i[c]!==null&&(this[c]=c==="history"?[...i[c]]:i[c])}let s;for(s in i)Ka.includes(s)||(this[s]=i[s])}get basename(){return typeof this.path=="string"?Je.basename(this.path):void 0}set basename(l){Xa(l,"basename"),Ya(l,"basename"),this.path=Je.join(this.dirname||"",l)}get dirname(){return typeof this.path=="string"?Je.dirname(this.path):void 0}set dirname(l){ap(this.basename,"dirname"),this.path=Je.join(l||"",this.basename)}get extname(){return typeof this.path=="string"?Je.extname(this.path):void 0}set extname(l){if(Ya(l,"extname"),ap(this.dirname,"extname"),l){if(l.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(l.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Je.join(this.dirname,this.stem+(l||""))}get path(){return this.history[this.history.length-1]}set path(l){gs(l)&&(l=XA(l)),Xa(l,"path"),this.path!==l&&this.history.push(l)}get stem(){return typeof this.path=="string"?Je.basename(this.path,this.extname):void 0}set stem(l){Xa(l,"stem"),Ya(l,"stem"),this.path=Je.join(this.dirname||"",l+(this.extname||""))}fail(l,i,a){const s=this.message(l,i,a);throw s.fatal=!0,s}info(l,i,a){const s=this.message(l,i,a);return s.fatal=void 0,s}message(l,i,a){const s=new se(l,i,a);return this.path&&(s.name=this.path+":"+s.name,s.file=this.path),s.fatal=!1,this.messages.push(s),s}toString(l){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(l||void 0).decode(this.value)}}function Ya(t,l){if(t&&t.includes(Je.sep))throw new Error("`"+l+"` cannot be a path: did not expect `"+Je.sep+"`")}function Xa(t,l){if(!t)throw new Error("`"+l+"` cannot be empty")}function ap(t,l){if(!t)throw new Error("Setting `"+l+"` requires `path` to be set too")}function n1(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const e1=function(t){const a=this.constructor.prototype,s=a[t],c=function(){return s.apply(c,arguments)};Object.setPrototypeOf(c,a);const u=Object.getOwnPropertyNames(s);for(const f of u){const m=Object.getOwnPropertyDescriptor(s,f);m&&Object.defineProperty(c,f,m)}return c},t1={}.hasOwnProperty;class Ms extends e1{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=HA()}copy(){const l=new Ms;let i=-1;for(;++i<this.attachers.length;){const a=this.attachers[i];l.use(...a)}return l.data(Jt(this.namespace)),l}data(l,i){return typeof l=="string"?arguments.length===2?(es("data",this.frozen),this.namespace[l]=i,this):t1.call(this.namespace,l)&&this.namespace[l]||void 0:l?(es("data",this.frozen),this.namespace=l,this):this.namespace}freeze(){if(this.frozen)return this;const l=this;for(;++this.freezeIndex<this.attachers.length;){const[i,...a]=this.attachers[this.freezeIndex];if(a[0]===!1)continue;a[0]===!0&&(a[0]=void 0);const s=i.call(l,...a);typeof s=="function"&&this.transformers.use(s)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(l){this.freeze();const i=Gl(l),a=this.parser||this.Parser;return Za("parse",a),a(String(i),i)}process(l,i){const a=this;return this.freeze(),Za("process",this.parser||this.Parser),ns("process",this.compiler||this.Compiler),i?s(void 0,i):new Promise(s);function s(c,u){const f=Gl(l),m=a.parse(f);a.run(m,f,function(k,h,v){if(k||!h||!v)return g(k);const A=h,E=a.stringify(A,v);l1(E)?v.value=E:v.result=E,g(k,v)});function g(k,h){k||!h?u(k):c?c(h):i(void 0,h)}}}processSync(l){let i=!1,a;return this.freeze(),Za("processSync",this.parser||this.Parser),ns("processSync",this.compiler||this.Compiler),this.process(l,s),up("processSync","process",i),a;function s(c,u){i=!0,op(c),a=u}}run(l,i,a){sp(l),this.freeze();const s=this.transformers;return!a&&typeof i=="function"&&(a=i,i=void 0),a?c(void 0,a):new Promise(c);function c(u,f){const m=Gl(i);s.run(l,m,g);function g(k,h,v){const A=h||l;k?f(k):u?u(A):a(void 0,A,v)}}}runSync(l,i){let a=!1,s;return this.run(l,i,c),up("runSync","run",a),s;function c(u,f){op(u),s=f,a=!0}}stringify(l,i){this.freeze();const a=Gl(i),s=this.compiler||this.Compiler;return ns("stringify",s),sp(l),s(l,a)}use(l,...i){const a=this.attachers,s=this.namespace;if(es("use",this.frozen),l!=null)if(typeof l=="function")m(l,i);else if(typeof l=="object")Array.isArray(l)?f(l):u(l);else throw new TypeError("Expected usable value, not `"+l+"`");return this;function c(g){if(typeof g=="function")m(g,[]);else if(typeof g=="object")if(Array.isArray(g)){const[k,...h]=g;m(k,h)}else u(g);else throw new TypeError("Expected usable value, not `"+g+"`")}function u(g){if(!("plugins"in g)&&!("settings"in g))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");f(g.plugins),g.settings&&(s.settings={...s.settings,...Jt(g.settings)})}function f(g){let k=-1;if(g!=null)if(Array.isArray(g))for(;++k<g.length;){const h=g[k];c(h)}else throw new TypeError("Expected a list of plugins, not `"+g+"`")}function m(g,k){let h=-1,v=-1;for(;++h<a.length;)if(a[h][0]===g){v=h;break}if(v===-1)a.push([g,...k]);else if(k.length>0){let[A,...E]=k;const R=a[v][1];ms(R)&&ms(A)&&(A=Jt({...R,...A})),a[v]=[g,A,...E]}}}}const r1=new Ms().freeze();function Za(t,l){if(typeof l!="function")throw new TypeError("Cannot `"+t+"` without `parser`")}function ns(t,l){if(typeof l!="function")throw new TypeError("Cannot `"+t+"` without `compiler`")}function es(t,l){if(l)throw new Error("Cannot call `"+t+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function sp(t){if(!ms(t)||typeof t.type!="string")throw new TypeError("Expected node, got `"+t+"`")}function up(t,l,i){if(!i)throw new Error("`"+t+"` finished async. Use `"+l+"` instead")}function Gl(t){return i1(t)?t:new tf(t)}function i1(t){return!!(t&&typeof t=="object"&&"message"in t&&"messages"in t)}function l1(t){return typeof t=="string"||o1(t)}function o1(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const a1="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",cp=[],dp={allowDangerousHtml:!0},s1=/^(https?|ircs?|mailto|xmpp)$/i,u1=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function c1(t){const l=d1(t),i=p1(t);return f1(l.runSync(l.parse(i),i),t)}function d1(t){const l=t.rehypePlugins||cp,i=t.remarkPlugins||cp,a=t.remarkRehypeOptions?{...t.remarkRehypeOptions,...dp}:dp;return r1().use(qk).use(i).use(jA,a).use(l)}function p1(t){const l=t.children||"",i=new tf;return typeof l=="string"&&(i.value=l),i}function f1(t,l){const i=l.allowedElements,a=l.allowElement,s=l.components,c=l.disallowedElements,u=l.skipHtml,f=l.unwrapDisallowed,m=l.urlTransform||m1;for(const k of u1)Object.hasOwn(l,k.from)&&(""+k.from+(k.to?"use `"+k.to+"` instead":"remove it")+a1+k.id,void 0);return l.className&&(t={type:"element",tagName:"div",properties:{className:l.className},children:t.type==="root"?t.children:[t]}),Ts(t,g),Py(t,{Fragment:H.Fragment,components:s,ignoreInvalidStyle:!0,jsx:H.jsx,jsxs:H.jsxs,passKeys:!0,passNode:!0});function g(k,h,v){if(k.type==="raw"&&v&&typeof h=="number")return u?v.children.splice(h,1):v.children[h]={type:"text",value:k.value},h;if(k.type==="element"){let A;for(A in Qa)if(Object.hasOwn(Qa,A)&&Object.hasOwn(k.properties,A)){const E=k.properties[A],R=Qa[A];(R===null||R.includes(k.tagName))&&(k.properties[A]=m(String(E||""),A,k))}}if(k.type==="element"){let A=i?!i.includes(k.tagName):c?c.includes(k.tagName):!1;if(!A&&a&&typeof h=="number"&&(A=!a(k,h,v)),A&&v&&typeof h=="number")return f&&k.children?v.children.splice(h,1,...k.children):v.children.splice(h,1),h}}}function m1(t){const l=t.indexOf(":"),i=t.indexOf("?"),a=t.indexOf("#"),s=t.indexOf("/");return l===-1||s!==-1&&l>s||i!==-1&&l>i||a!==-1&&l>a||s1.test(t.slice(0,l))?t:""}function pp(t,l){const i=String(t);if(typeof l!="string")throw new TypeError("Expected character");let a=0,s=i.indexOf(l);for(;s!==-1;)a++,s=i.indexOf(l,s+l.length);return a}function g1(t){if(typeof t!="string")throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function h1(t,l,i){const s=Kl((i||{}).ignore||[]),c=y1(l);let u=-1;for(;++u<c.length;)ef(t,"text",f);function f(g,k){let h=-1,v;for(;++h<k.length;){const A=k[h],E=v?v.children:void 0;if(s(A,E?E.indexOf(A):void 0,v))return;v=A}if(v)return m(g,k)}function m(g,k){const h=k[k.length-1],v=c[u][0],A=c[u][1];let E=0;const F=h.children.indexOf(g);let M=!1,U=[];v.lastIndex=0;let B=v.exec(g.value);for(;B;){const rn=B.index,un={index:B.index,input:B.input,stack:[...k,g]};let O=A(...B,un);if(typeof O=="string"&&(O=O.length>0?{type:"text",value:O}:void 0),O===!1?v.lastIndex=rn+1:(E!==rn&&U.push({type:"text",value:g.value.slice(E,rn)}),Array.isArray(O)?U.push(...O):O&&U.push(O),E=rn+B[0].length,M=!0),!v.global)break;B=v.exec(g.value)}return M?(E<g.value.length&&U.push({type:"text",value:g.value.slice(E)}),h.children.splice(F,1,...U)):U=[g],F+U.length}}function y1(t){const l=[];if(!Array.isArray(t))throw new TypeError("Expected find and replace tuple or list of tuples");const i=!t[0]||Array.isArray(t[0])?t:[t];let a=-1;for(;++a<i.length;){const s=i[a];l.push([k1(s[0]),A1(s[1])])}return l}function k1(t){return typeof t=="string"?new RegExp(g1(t),"g"):t}function A1(t){return typeof t=="function"?t:function(){return t}}const ts="phrasing",rs=["autolink","link","image","label"];function v1(){return{transforms:[_1],enter:{literalAutolink:w1,literalAutolinkEmail:is,literalAutolinkHttp:is,literalAutolinkWww:is},exit:{literalAutolink:E1,literalAutolinkEmail:I1,literalAutolinkHttp:C1,literalAutolinkWww:x1}}}function S1(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:ts,notInConstruct:rs},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:ts,notInConstruct:rs},{character:":",before:"[ps]",after:"\\/",inConstruct:ts,notInConstruct:rs}]}}function w1(t){this.enter({type:"link",title:null,url:"",children:[]},t)}function is(t){this.config.enter.autolinkProtocol.call(this,t)}function C1(t){this.config.exit.autolinkProtocol.call(this,t)}function x1(t){this.config.exit.data.call(this,t);const l=this.stack[this.stack.length-1];l.type,l.url="http://"+this.sliceSerialize(t)}function I1(t){this.config.exit.autolinkEmail.call(this,t)}function E1(t){this.exit(t)}function _1(t){h1(t,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,L1],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),R1]],{ignore:["link","linkReference"]})}function L1(t,l,i,a,s){let c="";if(!rf(s)||(/^w/i.test(l)&&(i=l+i,l="",c="http://"),!P1(i)))return!1;const u=D1(i+a);if(!u[0])return!1;const f={type:"link",title:null,url:c+l+u[0],children:[{type:"text",value:l+u[0]}]};return u[1]?[f,{type:"text",value:u[1]}]:f}function R1(t,l,i,a){return!rf(a,!0)||/[-\d_]$/.test(i)?!1:{type:"link",title:null,url:"mailto:"+l+"@"+i,children:[{type:"text",value:l+"@"+i}]}}function P1(t){const l=t.split(".");return!(l.length<2||l[l.length-1]&&(/_/.test(l[l.length-1])||!/[a-zA-Z\d]/.test(l[l.length-1]))||l[l.length-2]&&(/_/.test(l[l.length-2])||!/[a-zA-Z\d]/.test(l[l.length-2])))}function D1(t){const l=/[!"&'),.:;<>?\]}]+$/.exec(t);if(!l)return[t,void 0];t=t.slice(0,l.index);let i=l[0],a=i.indexOf(")");const s=pp(t,"(");let c=pp(t,")");for(;a!==-1&&s>c;)t+=i.slice(0,a+1),i=i.slice(a+1),a=i.indexOf(")"),c++;return[t,i]}function rf(t,l){const i=t.input.charCodeAt(t.index-1);return(t.index===0||Kt(i)||Ql(i))&&(!l||i!==47)}lf.peek=G1;function T1(){this.buffer()}function M1(t){this.enter({type:"footnoteReference",identifier:"",label:""},t)}function O1(){this.buffer()}function b1(t){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},t)}function F1(t){const l=this.resume(),i=this.stack[this.stack.length-1];i.type,i.identifier=He(this.sliceSerialize(t)).toLowerCase(),i.label=l}function N1(t){this.exit(t)}function z1(t){const l=this.resume(),i=this.stack[this.stack.length-1];i.type,i.identifier=He(this.sliceSerialize(t)).toLowerCase(),i.label=l}function B1(t){this.exit(t)}function G1(){return"["}function lf(t,l,i,a){const s=i.createTracker(a);let c=s.move("[^");const u=i.enter("footnoteReference"),f=i.enter("reference");return c+=s.move(i.safe(i.associationId(t),{after:"]",before:c})),f(),u(),c+=s.move("]"),c}function j1(){return{enter:{gfmFootnoteCallString:T1,gfmFootnoteCall:M1,gfmFootnoteDefinitionLabelString:O1,gfmFootnoteDefinition:b1},exit:{gfmFootnoteCallString:F1,gfmFootnoteCall:N1,gfmFootnoteDefinitionLabelString:z1,gfmFootnoteDefinition:B1}}}function H1(t){let l=!1;return t&&t.firstLineBlank&&(l=!0),{handlers:{footnoteDefinition:i,footnoteReference:lf},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function i(a,s,c,u){const f=c.createTracker(u);let m=f.move("[^");const g=c.enter("footnoteDefinition"),k=c.enter("label");return m+=f.move(c.safe(c.associationId(a),{before:m,after:"]"})),k(),m+=f.move("]:"),a.children&&a.children.length>0&&(f.shift(4),m+=f.move((l?`
`:" ")+c.indentLines(c.containerFlow(a,f.current()),l?of:U1))),g(),m}}function U1(t,l,i){return l===0?t:of(t,l,i)}function of(t,l,i){return(i?"":"    ")+t}const W1=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];af.peek=J1;function V1(){return{canContainEols:["delete"],enter:{strikethrough:Q1},exit:{strikethrough:$1}}}function q1(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:W1}],handlers:{delete:af}}}function Q1(t){this.enter({type:"delete",children:[]},t)}function $1(t){this.exit(t)}function af(t,l,i,a){const s=i.createTracker(a),c=i.enter("strikethrough");let u=s.move("~~");return u+=i.containerPhrasing(t,{...s.current(),before:u,after:"~"}),u+=s.move("~~"),c(),u}function J1(){return"~"}function K1(t){return t.length}function Y1(t,l){const i=l||{},a=(i.align||[]).concat(),s=i.stringLength||K1,c=[],u=[],f=[],m=[];let g=0,k=-1;for(;++k<t.length;){const R=[],F=[];let M=-1;for(t[k].length>g&&(g=t[k].length);++M<t[k].length;){const U=X1(t[k][M]);if(i.alignDelimiters!==!1){const B=s(U);F[M]=B,(m[M]===void 0||B>m[M])&&(m[M]=B)}R.push(U)}u[k]=R,f[k]=F}let h=-1;if(typeof a=="object"&&"length"in a)for(;++h<g;)c[h]=fp(a[h]);else{const R=fp(a);for(;++h<g;)c[h]=R}h=-1;const v=[],A=[];for(;++h<g;){const R=c[h];let F="",M="";R===99?(F=":",M=":"):R===108?F=":":R===114&&(M=":");let U=i.alignDelimiters===!1?1:Math.max(1,m[h]-F.length-M.length);const B=F+"-".repeat(U)+M;i.alignDelimiters!==!1&&(U=F.length+U+M.length,U>m[h]&&(m[h]=U),A[h]=U),v[h]=B}u.splice(1,0,v),f.splice(1,0,A),k=-1;const E=[];for(;++k<u.length;){const R=u[k],F=f[k];h=-1;const M=[];for(;++h<g;){const U=R[h]||"";let B="",rn="";if(i.alignDelimiters!==!1){const un=m[h]-(F[h]||0),O=c[h];O===114?B=" ".repeat(un):O===99?un%2?(B=" ".repeat(un/2+.5),rn=" ".repeat(un/2-.5)):(B=" ".repeat(un/2),rn=B):rn=" ".repeat(un)}i.delimiterStart!==!1&&!h&&M.push("|"),i.padding!==!1&&!(i.alignDelimiters===!1&&U==="")&&(i.delimiterStart!==!1||h)&&M.push(" "),i.alignDelimiters!==!1&&M.push(B),M.push(U),i.alignDelimiters!==!1&&M.push(rn),i.padding!==!1&&M.push(" "),(i.delimiterEnd!==!1||h!==g-1)&&M.push("|")}E.push(i.delimiterEnd===!1?M.join("").replace(/ +$/,""):M.join(""))}return E.join(`
`)}function X1(t){return t==null?"":String(t)}function fp(t){const l=typeof t=="string"?t.codePointAt(0):0;return l===67||l===99?99:l===76||l===108?108:l===82||l===114?114:0}function Z1(t,l,i,a){const s=i.enter("blockquote"),c=i.createTracker(a);c.move("> "),c.shift(2);const u=i.indentLines(i.containerFlow(t,c.current()),nv);return s(),u}function nv(t,l,i){return">"+(i?"":" ")+t}function ev(t,l){return mp(t,l.inConstruct,!0)&&!mp(t,l.notInConstruct,!1)}function mp(t,l,i){if(typeof l=="string"&&(l=[l]),!l||l.length===0)return i;let a=-1;for(;++a<l.length;)if(t.includes(l[a]))return!0;return!1}function gp(t,l,i,a){let s=-1;for(;++s<i.unsafe.length;)if(i.unsafe[s].character===`
`&&ev(i.stack,i.unsafe[s]))return/[ \t]/.test(a.before)?"":" ";return`\\
`}function tv(t,l){const i=String(t);let a=i.indexOf(l),s=a,c=0,u=0;if(typeof l!="string")throw new TypeError("Expected substring");for(;a!==-1;)a===s?++c>u&&(u=c):c=1,s=a+l.length,a=i.indexOf(l,s);return u}function rv(t,l){return!!(l.options.fences===!1&&t.value&&!t.lang&&/[^ \r\n]/.test(t.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(t.value))}function iv(t){const l=t.options.fence||"`";if(l!=="`"&&l!=="~")throw new Error("Cannot serialize code with `"+l+"` for `options.fence`, expected `` ` `` or `~`");return l}function lv(t,l,i,a){const s=iv(i),c=t.value||"",u=s==="`"?"GraveAccent":"Tilde";if(rv(t,i)){const h=i.enter("codeIndented"),v=i.indentLines(c,ov);return h(),v}const f=i.createTracker(a),m=s.repeat(Math.max(tv(c,s)+1,3)),g=i.enter("codeFenced");let k=f.move(m);if(t.lang){const h=i.enter(`codeFencedLang${u}`);k+=f.move(i.safe(t.lang,{before:k,after:" ",encode:["`"],...f.current()})),h()}if(t.lang&&t.meta){const h=i.enter(`codeFencedMeta${u}`);k+=f.move(" "),k+=f.move(i.safe(t.meta,{before:k,after:`
`,encode:["`"],...f.current()})),h()}return k+=f.move(`
`),c&&(k+=f.move(c+`
`)),k+=f.move(m),g(),k}function ov(t,l,i){return(i?"":"    ")+t}function Os(t){const l=t.options.quote||'"';if(l!=='"'&&l!=="'")throw new Error("Cannot serialize title with `"+l+"` for `options.quote`, expected `\"`, or `'`");return l}function av(t,l,i,a){const s=Os(i),c=s==='"'?"Quote":"Apostrophe",u=i.enter("definition");let f=i.enter("label");const m=i.createTracker(a);let g=m.move("[");return g+=m.move(i.safe(i.associationId(t),{before:g,after:"]",...m.current()})),g+=m.move("]: "),f(),!t.url||/[\0- \u007F]/.test(t.url)?(f=i.enter("destinationLiteral"),g+=m.move("<"),g+=m.move(i.safe(t.url,{before:g,after:">",...m.current()})),g+=m.move(">")):(f=i.enter("destinationRaw"),g+=m.move(i.safe(t.url,{before:g,after:t.title?" ":`
`,...m.current()}))),f(),t.title&&(f=i.enter(`title${c}`),g+=m.move(" "+s),g+=m.move(i.safe(t.title,{before:g,after:s,...m.current()})),g+=m.move(s),f()),u(),g}function sv(t){const l=t.options.emphasis||"*";if(l!=="*"&&l!=="_")throw new Error("Cannot serialize emphasis with `"+l+"` for `options.emphasis`, expected `*`, or `_`");return l}sf.peek=uv;function sf(t,l,i,a){const s=sv(i),c=i.enter("emphasis"),u=i.createTracker(a);let f=u.move(s);return f+=u.move(i.containerPhrasing(t,{before:f,after:s,...u.current()})),f+=u.move(s),c(),f}function uv(t,l,i){return i.options.emphasis||"*"}function cv(t,l){let i=!1;return Ts(t,function(a){if("value"in a&&/\r?\n|\r/.test(a.value)||a.type==="break")return i=!0,ps}),!!((!t.depth||t.depth<3)&&Is(t)&&(l.options.setext||i))}function dv(t,l,i,a){const s=Math.max(Math.min(6,t.depth||1),1),c=i.createTracker(a);if(cv(t,i)){const k=i.enter("headingSetext"),h=i.enter("phrasing"),v=i.containerPhrasing(t,{...c.current(),before:`
`,after:`
`});return h(),k(),v+`
`+(s===1?"=":"-").repeat(v.length-(Math.max(v.lastIndexOf("\r"),v.lastIndexOf(`
`))+1))}const u="#".repeat(s),f=i.enter("headingAtx"),m=i.enter("phrasing");c.move(u+" ");let g=i.containerPhrasing(t,{before:"# ",after:`
`,...c.current()});return/^[\t ]/.test(g)&&(g="&#x"+g.charCodeAt(0).toString(16).toUpperCase()+";"+g.slice(1)),g=g?u+" "+g:u,i.options.closeAtx&&(g+=" "+u),m(),f(),g}uf.peek=pv;function uf(t){return t.value||""}function pv(){return"<"}cf.peek=fv;function cf(t,l,i,a){const s=Os(i),c=s==='"'?"Quote":"Apostrophe",u=i.enter("image");let f=i.enter("label");const m=i.createTracker(a);let g=m.move("![");return g+=m.move(i.safe(t.alt,{before:g,after:"]",...m.current()})),g+=m.move("]("),f(),!t.url&&t.title||/[\0- \u007F]/.test(t.url)?(f=i.enter("destinationLiteral"),g+=m.move("<"),g+=m.move(i.safe(t.url,{before:g,after:">",...m.current()})),g+=m.move(">")):(f=i.enter("destinationRaw"),g+=m.move(i.safe(t.url,{before:g,after:t.title?" ":")",...m.current()}))),f(),t.title&&(f=i.enter(`title${c}`),g+=m.move(" "+s),g+=m.move(i.safe(t.title,{before:g,after:s,...m.current()})),g+=m.move(s),f()),g+=m.move(")"),u(),g}function fv(){return"!"}df.peek=mv;function df(t,l,i,a){const s=t.referenceType,c=i.enter("imageReference");let u=i.enter("label");const f=i.createTracker(a);let m=f.move("![");const g=i.safe(t.alt,{before:m,after:"]",...f.current()});m+=f.move(g+"]["),u();const k=i.stack;i.stack=[],u=i.enter("reference");const h=i.safe(i.associationId(t),{before:m,after:"]",...f.current()});return u(),i.stack=k,c(),s==="full"||!g||g!==h?m+=f.move(h+"]"):s==="shortcut"?m=m.slice(0,-1):m+=f.move("]"),m}function mv(){return"!"}function gv(t){if(!t._compiled){const l=(t.atBreak?"[\\r\\n][\\t ]*":"")+(t.before?"(?:"+t.before+")":"");t._compiled=new RegExp((l?"("+l+")":"")+(/[|\\{}()[\]^$+*?.-]/.test(t.character)?"\\":"")+t.character+(t.after?"(?:"+t.after+")":""),"g")}return t._compiled}pf.peek=hv;function pf(t,l,i){let a=t.value||"",s="`",c=-1;for(;new RegExp("(^|[^`])"+s+"([^`]|$)").test(a);)s+="`";for(/[^ \r\n]/.test(a)&&(/^[ \r\n]/.test(a)&&/[ \r\n]$/.test(a)||/^`|`$/.test(a))&&(a=" "+a+" ");++c<i.unsafe.length;){const u=i.unsafe[c],f=gv(u);let m;if(u.atBreak)for(;m=f.exec(a);){let g=m.index;a.charCodeAt(g)===10&&a.charCodeAt(g-1)===13&&g--,a=a.slice(0,g)+" "+a.slice(m.index+1)}}return s+a+s}function hv(){return"`"}function ff(t,l){const i=Is(t);return!!(!l.options.resourceLink&&t.url&&!t.title&&t.children&&t.children.length===1&&t.children[0].type==="text"&&(i===t.url||"mailto:"+i===t.url)&&/^[a-z][a-z+.-]+:/i.test(t.url)&&!/[\0- <>\u007F]/.test(t.url))}mf.peek=yv;function mf(t,l,i,a){const s=Os(i),c=s==='"'?"Quote":"Apostrophe",u=i.createTracker(a);let f,m;if(ff(t,i)){const k=i.stack;i.stack=[],f=i.enter("autolink");let h=u.move("<");return h+=u.move(i.containerPhrasing(t,{before:h,after:">",...u.current()})),h+=u.move(">"),f(),i.stack=k,h}f=i.enter("link"),m=i.enter("label");let g=u.move("[");return g+=u.move(i.containerPhrasing(t,{before:g,after:"](",...u.current()})),g+=u.move("]("),m(),!t.url&&t.title||/[\0- \u007F]/.test(t.url)?(m=i.enter("destinationLiteral"),g+=u.move("<"),g+=u.move(i.safe(t.url,{before:g,after:">",...u.current()})),g+=u.move(">")):(m=i.enter("destinationRaw"),g+=u.move(i.safe(t.url,{before:g,after:t.title?" ":")",...u.current()}))),m(),t.title&&(m=i.enter(`title${c}`),g+=u.move(" "+s),g+=u.move(i.safe(t.title,{before:g,after:s,...u.current()})),g+=u.move(s),m()),g+=u.move(")"),f(),g}function yv(t,l,i){return ff(t,i)?"<":"["}gf.peek=kv;function gf(t,l,i,a){const s=t.referenceType,c=i.enter("linkReference");let u=i.enter("label");const f=i.createTracker(a);let m=f.move("[");const g=i.containerPhrasing(t,{before:m,after:"]",...f.current()});m+=f.move(g+"]["),u();const k=i.stack;i.stack=[],u=i.enter("reference");const h=i.safe(i.associationId(t),{before:m,after:"]",...f.current()});return u(),i.stack=k,c(),s==="full"||!g||g!==h?m+=f.move(h+"]"):s==="shortcut"?m=m.slice(0,-1):m+=f.move("]"),m}function kv(){return"["}function bs(t){const l=t.options.bullet||"*";if(l!=="*"&&l!=="+"&&l!=="-")throw new Error("Cannot serialize items with `"+l+"` for `options.bullet`, expected `*`, `+`, or `-`");return l}function Av(t){const l=bs(t),i=t.options.bulletOther;if(!i)return l==="*"?"-":"*";if(i!=="*"&&i!=="+"&&i!=="-")throw new Error("Cannot serialize items with `"+i+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(i===l)throw new Error("Expected `bullet` (`"+l+"`) and `bulletOther` (`"+i+"`) to be different");return i}function vv(t){const l=t.options.bulletOrdered||".";if(l!=="."&&l!==")")throw new Error("Cannot serialize items with `"+l+"` for `options.bulletOrdered`, expected `.` or `)`");return l}function hf(t){const l=t.options.rule||"*";if(l!=="*"&&l!=="-"&&l!=="_")throw new Error("Cannot serialize rules with `"+l+"` for `options.rule`, expected `*`, `-`, or `_`");return l}function Sv(t,l,i,a){const s=i.enter("list"),c=i.bulletCurrent;let u=t.ordered?vv(i):bs(i);const f=t.ordered?u==="."?")":".":Av(i);let m=l&&i.bulletLastUsed?u===i.bulletLastUsed:!1;if(!t.ordered){const k=t.children?t.children[0]:void 0;if((u==="*"||u==="-")&&k&&(!k.children||!k.children[0])&&i.stack[i.stack.length-1]==="list"&&i.stack[i.stack.length-2]==="listItem"&&i.stack[i.stack.length-3]==="list"&&i.stack[i.stack.length-4]==="listItem"&&i.indexStack[i.indexStack.length-1]===0&&i.indexStack[i.indexStack.length-2]===0&&i.indexStack[i.indexStack.length-3]===0&&(m=!0),hf(i)===u&&k){let h=-1;for(;++h<t.children.length;){const v=t.children[h];if(v&&v.type==="listItem"&&v.children&&v.children[0]&&v.children[0].type==="thematicBreak"){m=!0;break}}}}m&&(u=f),i.bulletCurrent=u;const g=i.containerFlow(t,a);return i.bulletLastUsed=u,i.bulletCurrent=c,s(),g}function wv(t){const l=t.options.listItemIndent||"one";if(l!=="tab"&&l!=="one"&&l!=="mixed")throw new Error("Cannot serialize items with `"+l+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return l}function Cv(t,l,i,a){const s=wv(i);let c=i.bulletCurrent||bs(i);l&&l.type==="list"&&l.ordered&&(c=(typeof l.start=="number"&&l.start>-1?l.start:1)+(i.options.incrementListMarker===!1?0:l.children.indexOf(t))+c);let u=c.length+1;(s==="tab"||s==="mixed"&&(l&&l.type==="list"&&l.spread||t.spread))&&(u=Math.ceil(u/4)*4);const f=i.createTracker(a);f.move(c+" ".repeat(u-c.length)),f.shift(u);const m=i.enter("listItem"),g=i.indentLines(i.containerFlow(t,f.current()),k);return m(),g;function k(h,v,A){return v?(A?"":" ".repeat(u))+h:(A?c:c+" ".repeat(u-c.length))+h}}function xv(t,l,i,a){const s=i.enter("paragraph"),c=i.enter("phrasing"),u=i.containerPhrasing(t,a);return c(),s(),u}const Iv=Kl(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function Ev(t,l,i,a){return(t.children.some(function(u){return Iv(u)})?i.containerPhrasing:i.containerFlow).call(i,t,a)}function _v(t){const l=t.options.strong||"*";if(l!=="*"&&l!=="_")throw new Error("Cannot serialize strong with `"+l+"` for `options.strong`, expected `*`, or `_`");return l}yf.peek=Lv;function yf(t,l,i,a){const s=_v(i),c=i.enter("strong"),u=i.createTracker(a);let f=u.move(s+s);return f+=u.move(i.containerPhrasing(t,{before:f,after:s,...u.current()})),f+=u.move(s+s),c(),f}function Lv(t,l,i){return i.options.strong||"*"}function Rv(t,l,i,a){return i.safe(t.value,a)}function Pv(t){const l=t.options.ruleRepetition||3;if(l<3)throw new Error("Cannot serialize rules with repetition `"+l+"` for `options.ruleRepetition`, expected `3` or more");return l}function Dv(t,l,i){const a=(hf(i)+(i.options.ruleSpaces?" ":"")).repeat(Pv(i));return i.options.ruleSpaces?a.slice(0,-1):a}const kf={blockquote:Z1,break:gp,code:lv,definition:av,emphasis:sf,hardBreak:gp,heading:dv,html:uf,image:cf,imageReference:df,inlineCode:pf,link:mf,linkReference:gf,list:Sv,listItem:Cv,paragraph:xv,root:Ev,strong:yf,text:Rv,thematicBreak:Dv};function Tv(){return{enter:{table:Mv,tableData:hp,tableHeader:hp,tableRow:bv},exit:{codeText:Fv,table:Ov,tableData:ls,tableHeader:ls,tableRow:ls}}}function Mv(t){const l=t._align;this.enter({type:"table",align:l.map(function(i){return i==="none"?null:i}),children:[]},t),this.data.inTable=!0}function Ov(t){this.exit(t),this.data.inTable=void 0}function bv(t){this.enter({type:"tableRow",children:[]},t)}function ls(t){this.exit(t)}function hp(t){this.enter({type:"tableCell",children:[]},t)}function Fv(t){let l=this.resume();this.data.inTable&&(l=l.replace(/\\([\\|])/g,Nv));const i=this.stack[this.stack.length-1];i.type,i.value=l,this.exit(t)}function Nv(t,l){return l==="|"?l:t}function zv(t){const l=t||{},i=l.tableCellPadding,a=l.tablePipeAlign,s=l.stringLength,c=i?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:v,table:u,tableCell:m,tableRow:f}};function u(A,E,R,F){return g(k(A,R,F),A.align)}function f(A,E,R,F){const M=h(A,R,F),U=g([M]);return U.slice(0,U.indexOf(`
`))}function m(A,E,R,F){const M=R.enter("tableCell"),U=R.enter("phrasing"),B=R.containerPhrasing(A,{...F,before:c,after:c});return U(),M(),B}function g(A,E){return Y1(A,{align:E,alignDelimiters:a,padding:i,stringLength:s})}function k(A,E,R){const F=A.children;let M=-1;const U=[],B=E.enter("table");for(;++M<F.length;)U[M]=h(F[M],E,R);return B(),U}function h(A,E,R){const F=A.children;let M=-1;const U=[],B=E.enter("tableRow");for(;++M<F.length;)U[M]=m(F[M],A,E,R);return B(),U}function v(A,E,R){let F=kf.inlineCode(A,E,R);return R.stack.includes("tableCell")&&(F=F.replace(/\|/g,"\\$&")),F}}function Bv(){return{exit:{taskListCheckValueChecked:yp,taskListCheckValueUnchecked:yp,paragraph:jv}}}function Gv(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:Hv}}}function yp(t){const l=this.stack[this.stack.length-2];l.type,l.checked=t.type==="taskListCheckValueChecked"}function jv(t){const l=this.stack[this.stack.length-2];if(l&&l.type==="listItem"&&typeof l.checked=="boolean"){const i=this.stack[this.stack.length-1];i.type;const a=i.children[0];if(a&&a.type==="text"){const s=l.children;let c=-1,u;for(;++c<s.length;){const f=s[c];if(f.type==="paragraph"){u=f;break}}u===i&&(a.value=a.value.slice(1),a.value.length===0?i.children.shift():i.position&&a.position&&typeof a.position.start.offset=="number"&&(a.position.start.column++,a.position.start.offset++,i.position.start=Object.assign({},a.position.start)))}}this.exit(t)}function Hv(t,l,i,a){const s=t.children[0],c=typeof t.checked=="boolean"&&s&&s.type==="paragraph",u="["+(t.checked?"x":" ")+"] ",f=i.createTracker(a);c&&f.move(u);let m=kf.listItem(t,l,i,{...a,...f.current()});return c&&(m=m.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,g)),m;function g(k){return k+u}}function Uv(){return[v1(),j1(),V1(),Tv(),Bv()]}function Wv(t){return{extensions:[S1(),H1(t),q1(),zv(t),Gv()]}}const Vv={tokenize:Yv,partial:!0},Af={tokenize:Xv,partial:!0},vf={tokenize:Zv,partial:!0},Sf={tokenize:nS,partial:!0},qv={tokenize:eS,partial:!0},wf={name:"wwwAutolink",tokenize:Jv,previous:xf},Cf={name:"protocolAutolink",tokenize:Kv,previous:If},at={name:"emailAutolink",tokenize:$v,previous:Ef},Ke={};function Qv(){return{text:Ke}}let qt=48;for(;qt<123;)Ke[qt]=at,qt++,qt===58?qt=65:qt===91&&(qt=97);Ke[43]=at;Ke[45]=at;Ke[46]=at;Ke[95]=at;Ke[72]=[at,Cf];Ke[104]=[at,Cf];Ke[87]=[at,wf];Ke[119]=[at,wf];function $v(t,l,i){const a=this;let s,c;return u;function u(h){return!hs(h)||!Ef.call(a,a.previous)||Fs(a.events)?i(h):(t.enter("literalAutolink"),t.enter("literalAutolinkEmail"),f(h))}function f(h){return hs(h)?(t.consume(h),f):h===64?(t.consume(h),m):i(h)}function m(h){return h===46?t.check(qv,k,g)(h):h===45||h===95||ae(h)?(c=!0,t.consume(h),m):k(h)}function g(h){return t.consume(h),s=!0,m}function k(h){return c&&s&&de(a.previous)?(t.exit("literalAutolinkEmail"),t.exit("literalAutolink"),l(h)):i(h)}}function Jv(t,l,i){const a=this;return s;function s(u){return u!==87&&u!==119||!xf.call(a,a.previous)||Fs(a.events)?i(u):(t.enter("literalAutolink"),t.enter("literalAutolinkWww"),t.check(Vv,t.attempt(Af,t.attempt(vf,c),i),i)(u))}function c(u){return t.exit("literalAutolinkWww"),t.exit("literalAutolink"),l(u)}}function Kv(t,l,i){const a=this;let s="",c=!1;return u;function u(h){return(h===72||h===104)&&If.call(a,a.previous)&&!Fs(a.events)?(t.enter("literalAutolink"),t.enter("literalAutolinkHttp"),s+=String.fromCodePoint(h),t.consume(h),f):i(h)}function f(h){if(de(h)&&s.length<5)return s+=String.fromCodePoint(h),t.consume(h),f;if(h===58){const v=s.toLowerCase();if(v==="http"||v==="https")return t.consume(h),m}return i(h)}function m(h){return h===47?(t.consume(h),c?g:(c=!0,m)):i(h)}function g(h){return h===null||Wl(h)||bn(h)||Kt(h)||Ql(h)?i(h):t.attempt(Af,t.attempt(vf,k),i)(h)}function k(h){return t.exit("literalAutolinkHttp"),t.exit("literalAutolink"),l(h)}}function Yv(t,l,i){let a=0;return s;function s(u){return(u===87||u===119)&&a<3?(a++,t.consume(u),s):u===46&&a===3?(t.consume(u),c):i(u)}function c(u){return u===null?i(u):l(u)}}function Xv(t,l,i){let a,s,c;return u;function u(g){return g===46||g===95?t.check(Sf,m,f)(g):g===null||bn(g)||Kt(g)||g!==45&&Ql(g)?m(g):(c=!0,t.consume(g),u)}function f(g){return g===95?a=!0:(s=a,a=void 0),t.consume(g),u}function m(g){return s||a||!c?i(g):l(g)}}function Zv(t,l){let i=0,a=0;return s;function s(u){return u===40?(i++,t.consume(u),s):u===41&&a<i?c(u):u===33||u===34||u===38||u===39||u===41||u===42||u===44||u===46||u===58||u===59||u===60||u===63||u===93||u===95||u===126?t.check(Sf,l,c)(u):u===null||bn(u)||Kt(u)?l(u):(t.consume(u),s)}function c(u){return u===41&&a++,t.consume(u),s}}function nS(t,l,i){return a;function a(f){return f===33||f===34||f===39||f===41||f===42||f===44||f===46||f===58||f===59||f===63||f===95||f===126?(t.consume(f),a):f===38?(t.consume(f),c):f===93?(t.consume(f),s):f===60||f===null||bn(f)||Kt(f)?l(f):i(f)}function s(f){return f===null||f===40||f===91||bn(f)||Kt(f)?l(f):a(f)}function c(f){return de(f)?u(f):i(f)}function u(f){return f===59?(t.consume(f),a):de(f)?(t.consume(f),u):i(f)}}function eS(t,l,i){return a;function a(c){return t.consume(c),s}function s(c){return ae(c)?i(c):l(c)}}function xf(t){return t===null||t===40||t===42||t===95||t===91||t===93||t===126||bn(t)}function If(t){return!de(t)}function Ef(t){return!(t===47||hs(t))}function hs(t){return t===43||t===45||t===46||t===95||ae(t)}function Fs(t){let l=t.length,i=!1;for(;l--;){const a=t[l][1];if((a.type==="labelLink"||a.type==="labelImage")&&!a._balanced){i=!0;break}if(a._gfmAutolinkLiteralWalkedInto){i=!1;break}}return t.length>0&&!i&&(t[t.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),i}const tS={tokenize:cS,partial:!0};function rS(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:aS,continuation:{tokenize:sS},exit:uS}},text:{91:{name:"gfmFootnoteCall",tokenize:oS},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:iS,resolveTo:lS}}}}function iS(t,l,i){const a=this;let s=a.events.length;const c=a.parser.gfmFootnotes||(a.parser.gfmFootnotes=[]);let u;for(;s--;){const m=a.events[s][1];if(m.type==="labelImage"){u=m;break}if(m.type==="gfmFootnoteCall"||m.type==="labelLink"||m.type==="label"||m.type==="image"||m.type==="link")break}return f;function f(m){if(!u||!u._balanced)return i(m);const g=He(a.sliceSerialize({start:u.end,end:a.now()}));return g.codePointAt(0)!==94||!c.includes(g.slice(1))?i(m):(t.enter("gfmFootnoteCallLabelMarker"),t.consume(m),t.exit("gfmFootnoteCallLabelMarker"),l(m))}}function lS(t,l){let i=t.length;for(;i--;)if(t[i][1].type==="labelImage"&&t[i][0]==="enter"){t[i][1];break}t[i+1][1].type="data",t[i+3][1].type="gfmFootnoteCallLabelMarker";const a={type:"gfmFootnoteCall",start:Object.assign({},t[i+3][1].start),end:Object.assign({},t[t.length-1][1].end)},s={type:"gfmFootnoteCallMarker",start:Object.assign({},t[i+3][1].end),end:Object.assign({},t[i+3][1].end)};s.end.column++,s.end.offset++,s.end._bufferIndex++;const c={type:"gfmFootnoteCallString",start:Object.assign({},s.end),end:Object.assign({},t[t.length-1][1].start)},u={type:"chunkString",contentType:"string",start:Object.assign({},c.start),end:Object.assign({},c.end)},f=[t[i+1],t[i+2],["enter",a,l],t[i+3],t[i+4],["enter",s,l],["exit",s,l],["enter",c,l],["enter",u,l],["exit",u,l],["exit",c,l],t[t.length-2],t[t.length-1],["exit",a,l]];return t.splice(i,t.length-i+1,...f),t}function oS(t,l,i){const a=this,s=a.parser.gfmFootnotes||(a.parser.gfmFootnotes=[]);let c=0,u;return f;function f(h){return t.enter("gfmFootnoteCall"),t.enter("gfmFootnoteCallLabelMarker"),t.consume(h),t.exit("gfmFootnoteCallLabelMarker"),m}function m(h){return h!==94?i(h):(t.enter("gfmFootnoteCallMarker"),t.consume(h),t.exit("gfmFootnoteCallMarker"),t.enter("gfmFootnoteCallString"),t.enter("chunkString").contentType="string",g)}function g(h){if(c>999||h===93&&!u||h===null||h===91||bn(h))return i(h);if(h===93){t.exit("chunkString");const v=t.exit("gfmFootnoteCallString");return s.includes(He(a.sliceSerialize(v)))?(t.enter("gfmFootnoteCallLabelMarker"),t.consume(h),t.exit("gfmFootnoteCallLabelMarker"),t.exit("gfmFootnoteCall"),l):i(h)}return bn(h)||(u=!0),c++,t.consume(h),h===92?k:g}function k(h){return h===91||h===92||h===93?(t.consume(h),c++,g):g(h)}}function aS(t,l,i){const a=this,s=a.parser.gfmFootnotes||(a.parser.gfmFootnotes=[]);let c,u=0,f;return m;function m(E){return t.enter("gfmFootnoteDefinition")._container=!0,t.enter("gfmFootnoteDefinitionLabel"),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(E),t.exit("gfmFootnoteDefinitionLabelMarker"),g}function g(E){return E===94?(t.enter("gfmFootnoteDefinitionMarker"),t.consume(E),t.exit("gfmFootnoteDefinitionMarker"),t.enter("gfmFootnoteDefinitionLabelString"),t.enter("chunkString").contentType="string",k):i(E)}function k(E){if(u>999||E===93&&!f||E===null||E===91||bn(E))return i(E);if(E===93){t.exit("chunkString");const R=t.exit("gfmFootnoteDefinitionLabelString");return c=He(a.sliceSerialize(R)),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(E),t.exit("gfmFootnoteDefinitionLabelMarker"),t.exit("gfmFootnoteDefinitionLabel"),v}return bn(E)||(f=!0),u++,t.consume(E),E===92?h:k}function h(E){return E===91||E===92||E===93?(t.consume(E),u++,k):k(E)}function v(E){return E===58?(t.enter("definitionMarker"),t.consume(E),t.exit("definitionMarker"),s.includes(c)||s.push(c),En(t,A,"gfmFootnoteDefinitionWhitespace")):i(E)}function A(E){return l(E)}}function sS(t,l,i){return t.check(Ci,l,t.attempt(tS,l,i))}function uS(t){t.exit("gfmFootnoteDefinition")}function cS(t,l,i){const a=this;return En(t,s,"gfmFootnoteDefinitionIndent",5);function s(c){const u=a.events[a.events.length-1];return u&&u[1].type==="gfmFootnoteDefinitionIndent"&&u[2].sliceSerialize(u[1],!0).length===4?l(c):i(c)}}function dS(t){let i=(t||{}).singleTilde;const a={name:"strikethrough",tokenize:c,resolveAll:s};return i==null&&(i=!0),{text:{126:a},insideSpan:{null:[a]},attentionMarkers:{null:[126]}};function s(u,f){let m=-1;for(;++m<u.length;)if(u[m][0]==="enter"&&u[m][1].type==="strikethroughSequenceTemporary"&&u[m][1]._close){let g=m;for(;g--;)if(u[g][0]==="exit"&&u[g][1].type==="strikethroughSequenceTemporary"&&u[g][1]._open&&u[m][1].end.offset-u[m][1].start.offset===u[g][1].end.offset-u[g][1].start.offset){u[m][1].type="strikethroughSequence",u[g][1].type="strikethroughSequence";const k={type:"strikethrough",start:Object.assign({},u[g][1].start),end:Object.assign({},u[m][1].end)},h={type:"strikethroughText",start:Object.assign({},u[g][1].end),end:Object.assign({},u[m][1].start)},v=[["enter",k,f],["enter",u[g][1],f],["exit",u[g][1],f],["enter",h,f]],A=f.parser.constructs.insideSpan.null;A&&Ee(v,v.length,0,$l(A,u.slice(g+1,m),f)),Ee(v,v.length,0,[["exit",h,f],["enter",u[m][1],f],["exit",u[m][1],f],["exit",k,f]]),Ee(u,g-1,m-g+3,v),m=g+v.length-2;break}}for(m=-1;++m<u.length;)u[m][1].type==="strikethroughSequenceTemporary"&&(u[m][1].type="data");return u}function c(u,f,m){const g=this.previous,k=this.events;let h=0;return v;function v(E){return g===126&&k[k.length-1][1].type!=="characterEscape"?m(E):(u.enter("strikethroughSequenceTemporary"),A(E))}function A(E){const R=Vl(g);if(E===126)return h>1?m(E):(u.consume(E),h++,A);if(h<2&&!i)return m(E);const F=u.exit("strikethroughSequenceTemporary"),M=Vl(E);return F._open=!M||M===2&&!!R,F._close=!R||R===2&&!!M,f(E)}}}class pS{constructor(){this.map=[]}add(l,i,a){fS(this,l,i,a)}consume(l){if(this.map.sort(function(c,u){return c[0]-u[0]}),this.map.length===0)return;let i=this.map.length;const a=[];for(;i>0;)i-=1,a.push(l.slice(this.map[i][0]+this.map[i][1]),this.map[i][2]),l.length=this.map[i][0];a.push(l.slice()),l.length=0;let s=a.pop();for(;s;){for(const c of s)l.push(c);s=a.pop()}this.map.length=0}}function fS(t,l,i,a){let s=0;if(!(i===0&&a.length===0)){for(;s<t.map.length;){if(t.map[s][0]===l){t.map[s][1]+=i,t.map[s][2].push(...a);return}s+=1}t.map.push([l,i,a])}}function mS(t,l){let i=!1;const a=[];for(;l<t.length;){const s=t[l];if(i){if(s[0]==="enter")s[1].type==="tableContent"&&a.push(t[l+1][1].type==="tableDelimiterMarker"?"left":"none");else if(s[1].type==="tableContent"){if(t[l-1][1].type==="tableDelimiterMarker"){const c=a.length-1;a[c]=a[c]==="left"?"center":"right"}}else if(s[1].type==="tableDelimiterRow")break}else s[0]==="enter"&&s[1].type==="tableDelimiterRow"&&(i=!0);l+=1}return a}function gS(){return{flow:{null:{name:"table",tokenize:hS,resolveAll:yS}}}}function hS(t,l,i){const a=this;let s=0,c=0,u;return f;function f(D){let Z=a.events.length-1;for(;Z>-1;){const Y=a.events[Z][1].type;if(Y==="lineEnding"||Y==="linePrefix")Z--;else break}const Q=Z>-1?a.events[Z][1].type:null,J=Q==="tableHead"||Q==="tableRow"?O:m;return J===O&&a.parser.lazy[a.now().line]?i(D):J(D)}function m(D){return t.enter("tableHead"),t.enter("tableRow"),g(D)}function g(D){return D===124||(u=!0,c+=1),k(D)}function k(D){return D===null?i(D):fn(D)?c>1?(c=0,a.interrupt=!0,t.exit("tableRow"),t.enter("lineEnding"),t.consume(D),t.exit("lineEnding"),A):i(D):In(D)?En(t,k,"whitespace")(D):(c+=1,u&&(u=!1,s+=1),D===124?(t.enter("tableCellDivider"),t.consume(D),t.exit("tableCellDivider"),u=!0,k):(t.enter("data"),h(D)))}function h(D){return D===null||D===124||bn(D)?(t.exit("data"),k(D)):(t.consume(D),D===92?v:h)}function v(D){return D===92||D===124?(t.consume(D),h):h(D)}function A(D){return a.interrupt=!1,a.parser.lazy[a.now().line]?i(D):(t.enter("tableDelimiterRow"),u=!1,In(D)?En(t,E,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(D):E(D))}function E(D){return D===45||D===58?F(D):D===124?(u=!0,t.enter("tableCellDivider"),t.consume(D),t.exit("tableCellDivider"),R):un(D)}function R(D){return In(D)?En(t,F,"whitespace")(D):F(D)}function F(D){return D===58?(c+=1,u=!0,t.enter("tableDelimiterMarker"),t.consume(D),t.exit("tableDelimiterMarker"),M):D===45?(c+=1,M(D)):D===null||fn(D)?rn(D):un(D)}function M(D){return D===45?(t.enter("tableDelimiterFiller"),U(D)):un(D)}function U(D){return D===45?(t.consume(D),U):D===58?(u=!0,t.exit("tableDelimiterFiller"),t.enter("tableDelimiterMarker"),t.consume(D),t.exit("tableDelimiterMarker"),B):(t.exit("tableDelimiterFiller"),B(D))}function B(D){return In(D)?En(t,rn,"whitespace")(D):rn(D)}function rn(D){return D===124?E(D):D===null||fn(D)?!u||s!==c?un(D):(t.exit("tableDelimiterRow"),t.exit("tableHead"),l(D)):un(D)}function un(D){return i(D)}function O(D){return t.enter("tableRow"),V(D)}function V(D){return D===124?(t.enter("tableCellDivider"),t.consume(D),t.exit("tableCellDivider"),V):D===null||fn(D)?(t.exit("tableRow"),l(D)):In(D)?En(t,V,"whitespace")(D):(t.enter("data"),en(D))}function en(D){return D===null||D===124||bn(D)?(t.exit("data"),V(D)):(t.consume(D),D===92?cn:en)}function cn(D){return D===92||D===124?(t.consume(D),en):en(D)}}function yS(t,l){let i=-1,a=!0,s=0,c=[0,0,0,0],u=[0,0,0,0],f=!1,m=0,g,k,h;const v=new pS;for(;++i<t.length;){const A=t[i],E=A[1];A[0]==="enter"?E.type==="tableHead"?(f=!1,m!==0&&(kp(v,l,m,g,k),k=void 0,m=0),g={type:"table",start:Object.assign({},E.start),end:Object.assign({},E.end)},v.add(i,0,[["enter",g,l]])):E.type==="tableRow"||E.type==="tableDelimiterRow"?(a=!0,h=void 0,c=[0,0,0,0],u=[0,i+1,0,0],f&&(f=!1,k={type:"tableBody",start:Object.assign({},E.start),end:Object.assign({},E.end)},v.add(i,0,[["enter",k,l]])),s=E.type==="tableDelimiterRow"?2:k?3:1):s&&(E.type==="data"||E.type==="tableDelimiterMarker"||E.type==="tableDelimiterFiller")?(a=!1,u[2]===0&&(c[1]!==0&&(u[0]=u[1],h=jl(v,l,c,s,void 0,h),c=[0,0,0,0]),u[2]=i)):E.type==="tableCellDivider"&&(a?a=!1:(c[1]!==0&&(u[0]=u[1],h=jl(v,l,c,s,void 0,h)),c=u,u=[c[1],i,0,0])):E.type==="tableHead"?(f=!0,m=i):E.type==="tableRow"||E.type==="tableDelimiterRow"?(m=i,c[1]!==0?(u[0]=u[1],h=jl(v,l,c,s,i,h)):u[1]!==0&&(h=jl(v,l,u,s,i,h)),s=0):s&&(E.type==="data"||E.type==="tableDelimiterMarker"||E.type==="tableDelimiterFiller")&&(u[3]=i)}for(m!==0&&kp(v,l,m,g,k),v.consume(l.events),i=-1;++i<l.events.length;){const A=l.events[i];A[0]==="enter"&&A[1].type==="table"&&(A[1]._align=mS(l.events,i))}return t}function jl(t,l,i,a,s,c){const u=a===1?"tableHeader":a===2?"tableDelimiter":"tableData",f="tableContent";i[0]!==0&&(c.end=Object.assign({},Ir(l.events,i[0])),t.add(i[0],0,[["exit",c,l]]));const m=Ir(l.events,i[1]);if(c={type:u,start:Object.assign({},m),end:Object.assign({},m)},t.add(i[1],0,[["enter",c,l]]),i[2]!==0){const g=Ir(l.events,i[2]),k=Ir(l.events,i[3]),h={type:f,start:Object.assign({},g),end:Object.assign({},k)};if(t.add(i[2],0,[["enter",h,l]]),a!==2){const v=l.events[i[2]],A=l.events[i[3]];if(v[1].end=Object.assign({},A[1].end),v[1].type="chunkText",v[1].contentType="text",i[3]>i[2]+1){const E=i[2]+1,R=i[3]-i[2]-1;t.add(E,R,[])}}t.add(i[3]+1,0,[["exit",h,l]])}return s!==void 0&&(c.end=Object.assign({},Ir(l.events,s)),t.add(s,0,[["exit",c,l]]),c=void 0),c}function kp(t,l,i,a,s){const c=[],u=Ir(l.events,i);s&&(s.end=Object.assign({},u),c.push(["exit",s,l])),a.end=Object.assign({},u),c.push(["exit",a,l]),t.add(i+1,0,c)}function Ir(t,l){const i=t[l],a=i[0]==="enter"?"start":"end";return i[1][a]}const kS={name:"tasklistCheck",tokenize:vS};function AS(){return{text:{91:kS}}}function vS(t,l,i){const a=this;return s;function s(m){return a.previous!==null||!a._gfmTasklistFirstContentOfListItem?i(m):(t.enter("taskListCheck"),t.enter("taskListCheckMarker"),t.consume(m),t.exit("taskListCheckMarker"),c)}function c(m){return bn(m)?(t.enter("taskListCheckValueUnchecked"),t.consume(m),t.exit("taskListCheckValueUnchecked"),u):m===88||m===120?(t.enter("taskListCheckValueChecked"),t.consume(m),t.exit("taskListCheckValueChecked"),u):i(m)}function u(m){return m===93?(t.enter("taskListCheckMarker"),t.consume(m),t.exit("taskListCheckMarker"),t.exit("taskListCheck"),f):i(m)}function f(m){return fn(m)?l(m):In(m)?t.check({tokenize:SS},l,i)(m):i(m)}}function SS(t,l,i){return En(t,a,"whitespace");function a(s){return s===null?i(s):l(s)}}function wS(t){return Fp([Qv(),rS(),dS(t),gS(),AS()])}const CS={};function xS(t){const l=this,i=t||CS,a=l.data(),s=a.micromarkExtensions||(a.micromarkExtensions=[]),c=a.fromMarkdownExtensions||(a.fromMarkdownExtensions=[]),u=a.toMarkdownExtensions||(a.toMarkdownExtensions=[]);s.push(wS(i)),c.push(Uv()),u.push(Wv(i))}let Ul=new Map;function IS(t){var c;const l=t.split(`
`),i={};let a=0;if(((c=l[0])==null?void 0:c.trim())==="---"){const u=l.indexOf("---",1);if(u>0){a=u+1;const f=l.slice(1,u);for(const m of f){const g=m.trim();if(!g)continue;const k=g.match(/^([\w_-]+):\s*(.+)$/);if(!k)continue;const h=k[1];let v=k[2].trim();v.startsWith("[")&&v.endsWith("]")&&(v=v.slice(1,-1).split(",").map(A=>A.trim().replace(/^['"]|['"]$/g,""))),i[h]=v}}}const s=l.slice(a).join(`
`);return{data:i,content:s}}function ES(t){Ul=t}function _f(t){if(Ul.has(t))return Ul.get(t);for(const[l,i]of Ul)if(l.toLowerCase()===t.toLowerCase())return i;return null}function Ap(t,l){const{data:i,content:a}=IS(t),s={type:i.type||"",tags:i.tags||[],created:i.created||"",updated:i.updated||"",title:i.title||Lf(a)};return{path:l,meta:s,content:a.trim(),raw:t}}function Lf(t){const l=t.match(/^#\s+(.+)$/m);return l?l[1].trim():""}function _S(t){var i;const l=new Map;for(const a of t){const s=a.content.match(/^#\s+(.+)$/m),c=s?s[1].trim():"";c&&l.set(c,a.path);const u=((i=a.path.split("/").pop())==null?void 0:i.replace(".md",""))||"";u&&!l.has(u)&&l.set(u,a.path),a.meta.title&&a.meta.title!==c&&l.set(a.meta.title,a.path)}return l}function LS(t){return t.replace(/\[\[([^\]|]+?)(?:\|(.+?))?\]\]/g,(l,i,a)=>{const s=i.trim(),c=_f(s),u=(a==null?void 0:a.trim())||s;if(c){const f=c.replace(/.*\/wiki\//,"wiki/");return`[${u}](#wiki:${f})`}return`[${u} (待创建)](#wiki:${s})`})}function RS(t,l){if(!t||t.length<2)return[];const i=t.toLowerCase(),a=[];for(const s of l){if(s.path.includes("index.md")||s.path.includes("log.md"))continue;const c=s.meta.title||Lf(s.content),u=s.content.toLowerCase();let f=0;c.toLowerCase().includes(i)&&(f+=100),s.meta.tags.some(g=>g.toLowerCase().includes(i))&&(f+=50);const m=u.indexOf(i);if(m>=0&&(f+=10),f>0){let g="";if(m>=0){const k=Math.max(0,m-40),h=Math.min(s.content.length,m+i.length+60);g=(k>0?"...":"")+s.content.slice(k,h)+(h<s.content.length?"...":"")}else g=c;a.push({title:c,path:s.path,snippet:g,score:f})}}return a.sort((s,c)=>c.score-s.score).slice(0,10)}function PS({page:t,onNavigate:l,onTagSelect:i}){const a=Dn.useRef(null);Dn.useEffect(()=>{const u=a.current;if(!u)return;const f=m=>{const g=m.target.closest('a[href^="#wiki:"]');if(g){m.preventDefault();const h=g.getAttribute("href").replace("#wiki:","");console.log("[ContentViewer] wikilink clicked, target:",h),l(h)}};return u.addEventListener("click",f),()=>u.removeEventListener("click",f)},[l]);const s=Dn.useMemo(()=>t?LS(t.content):"",[t]);if(!t)return H.jsx("div",{className:"content-empty",children:H.jsxs("div",{style:{textAlign:"center"},children:[H.jsx("svg",{width:"64",height:"64",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:H.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})}),H.jsx("p",{style:{fontSize:13},children:"从左侧选择页面开始阅读"})]})});const{meta:c}=t;return H.jsx("div",{ref:a,className:"content",children:H.jsxs("div",{className:"content-inner",children:[H.jsxs("div",{className:"meta-row",children:[c.type&&H.jsx("span",{className:`meta-type ${c.type}`,children:c.type}),c.created&&H.jsxs("span",{className:"meta-date",children:["创建: ",c.created]}),c.updated&&c.updated!==c.created&&H.jsxs("span",{className:"meta-date",children:["更新: ",c.updated]})]}),c.tags.length>0&&H.jsx("div",{className:"tags-row",children:c.tags.map(u=>H.jsxs("button",{className:"tag tag-clickable",onClick:()=>i(u),title:"按此标签筛选",children:["#",u]},u))}),H.jsx("div",{className:"md-content",children:H.jsx(c1,{remarkPlugins:[xS],children:s})})]})})}function DS({open:t,onClose:l,onSearch:i,onSelect:a}){const[s,c]=Dn.useState(""),[u,f]=Dn.useState([]),[m,g]=Dn.useState(0),k=Dn.useRef(null);Dn.useEffect(()=>{t&&(c(""),f([]),g(0),setTimeout(()=>{var v;return(v=k.current)==null?void 0:v.focus()},100))},[t]),Dn.useEffect(()=>{if(!t)return;const v=A=>{A.key==="Escape"&&l(),A.key==="ArrowDown"&&(A.preventDefault(),g(E=>Math.min(E+1,u.length-1))),A.key==="ArrowUp"&&(A.preventDefault(),g(E=>Math.max(E-1,0))),A.key==="Enter"&&u[m]&&(a(u[m].path),l())};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[t,u,m,l,a]);const h=v=>{c(v),g(0),f(v.length>=2?i(v):[])};return t?H.jsx("div",{className:"modal-overlay",onClick:v=>{v.target===v.currentTarget&&l()},children:H.jsxs("div",{className:"modal",children:[H.jsxs("div",{className:"modal-input",children:[H.jsx("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",style:{color:"var(--text-muted)",flexShrink:0},children:H.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),H.jsx("input",{ref:k,type:"text",value:s,onChange:v=>h(v.target.value),placeholder:"搜索页面、概念、实体..."}),H.jsx("kbd",{style:{fontSize:10,padding:"2px 6px",borderRadius:4,background:"var(--surface)",color:"var(--text-muted)"},children:"ESC"})]}),H.jsxs("div",{className:"modal-results",children:[u.length===0&&s.length>=2&&H.jsx("div",{className:"modal-empty",children:"未找到匹配结果"}),u.length===0&&s.length<2&&H.jsx("div",{className:"modal-empty",children:"输入至少 2 个字符搜索"}),u.map((v,A)=>H.jsxs("button",{onClick:()=>{a(v.path),l()},className:"modal-result"+(A===m?" sel":""),children:[H.jsx("div",{className:"rtitle",children:v.title}),H.jsx("div",{className:"rsnippet",children:v.snippet})]},v.path))]})]})}):null}const vp=Object.assign({"../../wiki/concepts/agent-memory-system.md":Dg,"../../wiki/concepts/agent-tool-selection.md":Tg,"../../wiki/concepts/ai-agent.md":Mg,"../../wiki/concepts/ai-gateway.md":Og,"../../wiki/concepts/ai-programming.md":bg,"../../wiki/concepts/context-engineering.md":Fg,"../../wiki/concepts/dev-flow-unified-paradigm.md":Ng,"../../wiki/concepts/fde.md":zg,"../../wiki/concepts/loop-engineering.md":Bg,"../../wiki/concepts/mcp-model-context-protocol.md":Gg,"../../wiki/concepts/model-finetuning.md":jg,"../../wiki/concepts/model-fusion.md":Hg,"../../wiki/concepts/moe-mixture-of-experts.md":Ug,"../../wiki/concepts/okf-open-knowledge-format.md":Wg,"../../wiki/concepts/ontology.md":Vg,"../../wiki/concepts/prompt-caching.md":qg,"../../wiki/concepts/rag-retrieval-augmented-generation.md":Qg,"../../wiki/concepts/red-green-regression-testing.md":$g,"../../wiki/concepts/self-improving-agent.md":Jg,"../../wiki/concepts/spec-driven-development.md":Kg,"../../wiki/concepts/test-driven-development.md":Yg,"../../wiki/entities/apache-burr.md":Xg,"../../wiki/entities/autolink.md":Zg,"../../wiki/entities/bmad.md":nh,"../../wiki/entities/cc-connect.md":eh,"../../wiki/entities/cc-switch.md":th,"../../wiki/entities/claude-code.md":rh,"../../wiki/entities/codex-cli.md":ih,"../../wiki/entities/comet.md":lh,"../../wiki/entities/ecc.md":oh,"../../wiki/entities/firecrawl.md":ah,"../../wiki/entities/flashrt.md":sh,"../../wiki/entities/fuseai.md":uh,"../../wiki/entities/gsd.md":ch,"../../wiki/entities/gstack.md":dh,"../../wiki/entities/hermes-agent.md":ph,"../../wiki/entities/html-video.md":fh,"../../wiki/entities/huashu-design.md":mh,"../../wiki/entities/infifusion.md":gh,"../../wiki/entities/khazix-skills.md":hh,"../../wiki/entities/lightrag.md":yh,"../../wiki/entities/mempalace.md":kh,"../../wiki/entities/mergekit.md":Ah,"../../wiki/entities/mux0.md":vh,"../../wiki/entities/openclaw.md":Sh,"../../wiki/entities/openspec.md":wh,"../../wiki/entities/opensquilla.md":Ch,"../../wiki/entities/pageagent.md":xh,"../../wiki/entities/pythia.md":Ih,"../../wiki/entities/rag-anything.md":Eh,"../../wiki/entities/seeder.md":_h,"../../wiki/entities/snail-ai.md":Lh,"../../wiki/entities/spec-kit.md":Rh,"../../wiki/entities/superpowers.md":Ph,"../../wiki/entities/understand-anything.md":Dh,"../../wiki/entities/unsloth.md":Th,"../../wiki/entities/uzi-skill.md":Mh,"../../wiki/index.md":Oh,"../../wiki/log.md":bh,"../../wiki/synthesis/2026-h1-wanxiang-review.md":Fh,"../../wiki/synthesis/agent-framework-comparison.md":Nh,"../../wiki/synthesis/ai-dev-trifecta.md":zh,"../../wiki/synthesis/bmad-vs-openspec.md":Bh,"../../wiki/synthesis/model-fusion-deep-report.md":Gh,"../../wiki/tags-index.md":jh,"../../wiki/topics/agentic-rag.md":Hh,"../../wiki/topics/ai-agent-landscape-2026.md":Uh,"../../wiki/topics/ai-native-dev-system.md":Wh,"../../wiki/topics/firecrawl-web-scraping.md":Vh,"../../wiki/topics/karpathy-ai-coding-methodology.md":qh,"../../wiki/topics/llm-wiki-methodology.md":Qh,"../../wiki/topics/opensquilla-ai-self-verification.md":$h,"../../wiki/topics/rag-evaluation.md":Jh,"../../wiki/topics/snail-ai-agent-platform.md":Kh,"../../wiki/topics/starrocks-cross-data-source-query.md":Yh,"../../wiki/topics/unsloth-efficient-llm-finetuning.md":Xh,"../../wiki/topics/wanxiang-ai-analysis.md":Zh}),TS={entities:"实体",concepts:"概念",papers:"论文",topics:"主题",synthesis:"综述"};function MS(t,l){var k,h;const i=t.split(`
`),a={};let s=0;if(((k=i[0])==null?void 0:k.trim())==="---"){const v=i.indexOf("---",1);if(v>0){const A=i.slice(1,v).join(`
`);s=v+1,A.split(`
`).forEach(E=>{const R=E.match(/^(\w+):\s*(.+)$/);R&&(a[R[1]]=R[2].trim())})}}const u=i.slice(s).join(`
`).match(/^#\s+(.+)/m),f=u?u[1].trim():a.title||((h=l.split("/").pop())==null?void 0:h.replace(".md",""))||"Untitled";l.split("/").slice(-2,-1)[0];let m=[];a.tags&&(Array.isArray(a.tags)?m=a.tags:typeof a.tags=="string"&&(m=a.tags.split(",").map(v=>v.trim())));const g=l.replace(/.*\/wiki\//,"wiki/");return{title:f,path:g,summary:a.summary||"",tags:m}}function Sp(){return window.location.hash.slice(1)||null}function OS(){const[t,l]=Dn.useState(()=>Sp()),[i,a]=Dn.useState(new Set(["综述"])),[s,c]=Dn.useState(!1),[u,f]=Dn.useState(!1),[m,g]=Dn.useState(null);Dn.useEffect(()=>{t?window.location.hash="#"+t:history.replaceState(null,"",window.location.pathname+window.location.search)},[t]),Dn.useEffect(()=>{const V=()=>l(Sp());return window.addEventListener("hashchange",V),()=>window.removeEventListener("hashchange",V)},[]);const{allPages:k,categories:h,allTags:v}=Dn.useMemo(()=>{const V=[],en=new Map,cn=new Map;for(const[Q,J]of Object.entries(vp)){if(Q.includes("/index.md")||Q.includes("/log.md"))continue;try{const yn=Q.replace(/.*\/wiki\//,"wiki/"),$=Ap(J,yn);V.push($)}catch(yn){console.error("[App] Failed to parse:",Q,yn)}const Y=MS(J,Q),an=Q.split("/").slice(-2,-1)[0]||"",xn=TS[an]||an;for(const yn of Y.tags)cn.set(yn,(cn.get(yn)||0)+1);en.has(xn)||en.set(xn,[]),en.get(xn).push(Y)}const D=[];for(const Q of["实体","概念","论文","主题","综述"]){const J=en.get(Q);J&&J.length>0&&(D.push({name:Q,pages:J,collapsed:i.has(Q)}),en.delete(Q))}for(const[Q,J]of en)D.push({name:Q,pages:J,collapsed:i.has(Q)});const Z=Array.from(cn.entries()).map(([Q,J])=>({name:Q,count:J})).sort((Q,J)=>J.count-Q.count||Q.name.localeCompare(J.name));return{allPages:V,categories:D,allTags:Z}},[i]);Dn.useEffect(()=>{ES(_S(k))},[k]);const A=Dn.useMemo(()=>{if(!t)return null;const V="../../"+t,en=vp[V];return en?Ap(en,V):null},[t]),E=Dn.useCallback(V=>{l(V.path),g(null),f(!1)},[]),R=Dn.useCallback(V=>{const en=_f(V);l(en||V)},[]),F=Dn.useCallback(V=>{a(en=>{const cn=new Set(en);return cn.has(V)?cn.delete(V):cn.add(V),cn})},[]),M=Dn.useCallback(V=>RS(V,k),[k]),U=Dn.useCallback(V=>{l(V),g(null)},[]),B=Dn.useCallback(V=>{g(m===V?null:V)},[m]);Dn.useEffect(()=>{const V=en=>{en.key==="k"&&(en.metaKey||en.ctrlKey)&&(en.preventDefault(),c(cn=>!cn))};return window.addEventListener("keydown",V),()=>window.removeEventListener("keydown",V)},[]);const rn=Dn.useMemo(()=>m?h.map(V=>({...V,pages:V.pages.filter(en=>en.tags.includes(m))})).filter(V=>V.pages.length>0):h,[h,m]),un=k.length,O=m?rn.reduce((V,en)=>V+en.pages.length,0):un;return H.jsxs("div",{className:"app",children:[H.jsxs("div",{className:"mobile-header",children:[H.jsx("button",{onClick:()=>f(!u),style:{padding:6,borderRadius:8},children:H.jsx("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:H.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})}),H.jsx("h1",{style:{fontSize:14,fontWeight:600,color:"var(--accent)"},children:"LLM Wiki"}),H.jsx("button",{onClick:()=>c(!0),style:{marginLeft:"auto",padding:6,borderRadius:8},children:H.jsx("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:H.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})]}),H.jsxs("div",{className:"main-area",children:[H.jsx("div",{className:"sidebar-desktop",style:{height:"100%"},children:H.jsx(Pd,{categories:rn,activePath:t,onSelect:E,onToggleCategory:F,onSearch:()=>c(!0),pageCount:O,allTags:v,activeTag:m,onTagSelect:B})}),u&&H.jsxs("div",{className:"mobile-overlay",children:[H.jsx("div",{className:"mobile-overlay-bg",onClick:()=>f(!1)}),H.jsx("div",{className:"mobile-overlay-sidebar",children:H.jsx(Pd,{categories:rn,activePath:t,onSelect:E,onToggleCategory:F,onSearch:()=>{f(!1),c(!0)},pageCount:O,allTags:v,activeTag:m,onTagSelect:B})})]}),H.jsx(PS,{page:A,onNavigate:R,onTagSelect:B})]}),H.jsxs("div",{className:"status-bar",children:[H.jsxs("span",{children:[O," 个页面"]}),m&&H.jsxs(H.Fragment,{children:[H.jsx("span",{children:"·"}),H.jsxs("span",{style:{color:"var(--accent)"},children:["标签: #",m]})]}),A&&!m&&H.jsxs(H.Fragment,{children:[H.jsx("span",{style:{color:"var(--border)"},children:"|"}),H.jsx("span",{children:A.path})]})]}),H.jsx(DS,{open:s,onClose:()=>c(!1),onSearch:M,onSelect:U})]})}Pg.createRoot(document.getElementById("root")).render(Ba.createElement(Ba.StrictMode,null,Ba.createElement(OS)));
