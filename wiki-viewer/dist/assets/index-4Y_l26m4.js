(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function i(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(s){if(s.ep)return;s.ep=!0;const c=i(s);fetch(s.href,c)}})();function Ss(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ga={exports:{}},In={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cp;function xg(){if(Cp)return In;Cp=1;var t=Symbol.for("react.element"),l=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),h=Symbol.iterator;function k(_){return _===null||typeof _!="object"?null:(_=h&&_[h]||_["@@iterator"],typeof _=="function"?_:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,L={};function O(_,B,w){this.props=_,this.context=B,this.refs=L,this.updater=w||S}O.prototype.isReactComponent={},O.prototype.setState=function(_,B){if(typeof _!="object"&&typeof _!="function"&&_!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,_,B,"setState")},O.prototype.forceUpdate=function(_){this.updater.enqueueForceUpdate(this,_,"forceUpdate")};function T(){}T.prototype=O.prototype;function V(_,B,w){this.props=_,this.context=B,this.refs=L,this.updater=w||S}var z=V.prototype=new T;z.constructor=V,E(z,O.prototype),z.isPureReactComponent=!0;var ln=Array.isArray,cn=Object.prototype.hasOwnProperty,D={current:null},J={key:!0,ref:!0,__self:!0,__source:!0};function nn(_,B,w){var gn,Cn={},mn=null,Mn=null;if(B!=null)for(gn in B.ref!==void 0&&(Mn=B.ref),B.key!==void 0&&(mn=""+B.key),B)cn.call(B,gn)&&!J.hasOwnProperty(gn)&&(Cn[gn]=B[gn]);var wn=arguments.length-2;if(wn===1)Cn.children=w;else if(1<wn){for(var Tn=Array(wn),qn=0;qn<wn;qn++)Tn[qn]=arguments[qn+2];Cn.children=Tn}if(_&&_.defaultProps)for(gn in wn=_.defaultProps,wn)Cn[gn]===void 0&&(Cn[gn]=wn[gn]);return{$$typeof:t,type:_,key:mn,ref:Mn,props:Cn,_owner:D.current}}function Q(_,B){return{$$typeof:t,type:_.type,key:B,ref:_.ref,props:_.props,_owner:_._owner}}function P(_){return typeof _=="object"&&_!==null&&_.$$typeof===t}function K(_){var B={"=":"=0",":":"=2"};return"$"+_.replace(/[=:]/g,function(w){return B[w]})}var G=/\/+/g;function q(_,B){return typeof _=="object"&&_!==null&&_.key!=null?K(""+_.key):B.toString(36)}function X(_,B,w,gn,Cn){var mn=typeof _;(mn==="undefined"||mn==="boolean")&&(_=null);var Mn=!1;if(_===null)Mn=!0;else switch(mn){case"string":case"number":Mn=!0;break;case"object":switch(_.$$typeof){case t:case l:Mn=!0}}if(Mn)return Mn=_,Cn=Cn(Mn),_=gn===""?"."+q(Mn,0):gn,ln(Cn)?(w="",_!=null&&(w=_.replace(G,"$&/")+"/"),X(Cn,B,w,"",function(qn){return qn})):Cn!=null&&(P(Cn)&&(Cn=Q(Cn,w+(!Cn.key||Mn&&Mn.key===Cn.key?"":(""+Cn.key).replace(G,"$&/")+"/")+_)),B.push(Cn)),1;if(Mn=0,gn=gn===""?".":gn+":",ln(_))for(var wn=0;wn<_.length;wn++){mn=_[wn];var Tn=gn+q(mn,wn);Mn+=X(mn,B,w,Tn,Cn)}else if(Tn=k(_),typeof Tn=="function")for(_=Tn.call(_),wn=0;!(mn=_.next()).done;)mn=mn.value,Tn=gn+q(mn,wn++),Mn+=X(mn,B,w,Tn,Cn);else if(mn==="object")throw B=String(_),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(_).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return Mn}function rn(_,B,w){if(_==null)return _;var gn=[],Cn=0;return X(_,gn,"","",function(mn){return B.call(w,mn,Cn++)}),gn}function vn(_){if(_._status===-1){var B=_._result;B=B(),B.then(function(w){(_._status===0||_._status===-1)&&(_._status=1,_._result=w)},function(w){(_._status===0||_._status===-1)&&(_._status=2,_._result=w)}),_._status===-1&&(_._status=0,_._result=B)}if(_._status===1)return _._result.default;throw _._result}var yn={current:null},Y={transition:null},un={ReactCurrentDispatcher:yn,ReactCurrentBatchConfig:Y,ReactCurrentOwner:D};function v(){throw Error("act(...) is not supported in production builds of React.")}return In.Children={map:rn,forEach:function(_,B,w){rn(_,function(){B.apply(this,arguments)},w)},count:function(_){var B=0;return rn(_,function(){B++}),B},toArray:function(_){return rn(_,function(B){return B})||[]},only:function(_){if(!P(_))throw Error("React.Children.only expected to receive a single React element child.");return _}},In.Component=O,In.Fragment=i,In.Profiler=s,In.PureComponent=V,In.StrictMode=a,In.Suspense=m,In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=un,In.act=v,In.cloneElement=function(_,B,w){if(_==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+_+".");var gn=E({},_.props),Cn=_.key,mn=_.ref,Mn=_._owner;if(B!=null){if(B.ref!==void 0&&(mn=B.ref,Mn=D.current),B.key!==void 0&&(Cn=""+B.key),_.type&&_.type.defaultProps)var wn=_.type.defaultProps;for(Tn in B)cn.call(B,Tn)&&!J.hasOwnProperty(Tn)&&(gn[Tn]=B[Tn]===void 0&&wn!==void 0?wn[Tn]:B[Tn])}var Tn=arguments.length-2;if(Tn===1)gn.children=w;else if(1<Tn){wn=Array(Tn);for(var qn=0;qn<Tn;qn++)wn[qn]=arguments[qn+2];gn.children=wn}return{$$typeof:t,type:_.type,key:Cn,ref:mn,props:gn,_owner:Mn}},In.createContext=function(_){return _={$$typeof:u,_currentValue:_,_currentValue2:_,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},_.Provider={$$typeof:c,_context:_},_.Consumer=_},In.createElement=nn,In.createFactory=function(_){var B=nn.bind(null,_);return B.type=_,B},In.createRef=function(){return{current:null}},In.forwardRef=function(_){return{$$typeof:f,render:_}},In.isValidElement=P,In.lazy=function(_){return{$$typeof:A,_payload:{_status:-1,_result:_},_init:vn}},In.memo=function(_,B){return{$$typeof:g,type:_,compare:B===void 0?null:B}},In.startTransition=function(_){var B=Y.transition;Y.transition={};try{_()}finally{Y.transition=B}},In.unstable_act=v,In.useCallback=function(_,B){return yn.current.useCallback(_,B)},In.useContext=function(_){return yn.current.useContext(_)},In.useDebugValue=function(){},In.useDeferredValue=function(_){return yn.current.useDeferredValue(_)},In.useEffect=function(_,B){return yn.current.useEffect(_,B)},In.useId=function(){return yn.current.useId()},In.useImperativeHandle=function(_,B,w){return yn.current.useImperativeHandle(_,B,w)},In.useInsertionEffect=function(_,B){return yn.current.useInsertionEffect(_,B)},In.useLayoutEffect=function(_,B){return yn.current.useLayoutEffect(_,B)},In.useMemo=function(_,B){return yn.current.useMemo(_,B)},In.useReducer=function(_,B,w){return yn.current.useReducer(_,B,w)},In.useRef=function(_){return yn.current.useRef(_)},In.useState=function(_){return yn.current.useState(_)},In.useSyncExternalStore=function(_,B,w){return yn.current.useSyncExternalStore(_,B,w)},In.useTransition=function(){return yn.current.useTransition()},In.version="18.3.1",In}var wp;function ks(){return wp||(wp=1,Ga.exports=xg()),Ga.exports}var kn=ks();const Er=Ss(kn);var zl={},Ha={exports:{}},ye={},ja={exports:{}},Ua={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp;function Ig(){return xp||(xp=1,function(t){function l(Y,un){var v=Y.length;Y.push(un);n:for(;0<v;){var _=v-1>>>1,B=Y[_];if(0<s(B,un))Y[_]=un,Y[v]=B,v=_;else break n}}function i(Y){return Y.length===0?null:Y[0]}function a(Y){if(Y.length===0)return null;var un=Y[0],v=Y.pop();if(v!==un){Y[0]=v;n:for(var _=0,B=Y.length,w=B>>>1;_<w;){var gn=2*(_+1)-1,Cn=Y[gn],mn=gn+1,Mn=Y[mn];if(0>s(Cn,v))mn<B&&0>s(Mn,Cn)?(Y[_]=Mn,Y[mn]=v,_=mn):(Y[_]=Cn,Y[gn]=v,_=gn);else if(mn<B&&0>s(Mn,v))Y[_]=Mn,Y[mn]=v,_=mn;else break n}}return un}function s(Y,un){var v=Y.sortIndex-un.sortIndex;return v!==0?v:Y.id-un.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;t.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();t.unstable_now=function(){return u.now()-f}}var m=[],g=[],A=1,h=null,k=3,S=!1,E=!1,L=!1,O=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function z(Y){for(var un=i(g);un!==null;){if(un.callback===null)a(g);else if(un.startTime<=Y)a(g),un.sortIndex=un.expirationTime,l(m,un);else break;un=i(g)}}function ln(Y){if(L=!1,z(Y),!E)if(i(m)!==null)E=!0,vn(cn);else{var un=i(g);un!==null&&yn(ln,un.startTime-Y)}}function cn(Y,un){E=!1,L&&(L=!1,T(nn),nn=-1),S=!0;var v=k;try{for(z(un),h=i(m);h!==null&&(!(h.expirationTime>un)||Y&&!K());){var _=h.callback;if(typeof _=="function"){h.callback=null,k=h.priorityLevel;var B=_(h.expirationTime<=un);un=t.unstable_now(),typeof B=="function"?h.callback=B:h===i(m)&&a(m),z(un)}else a(m);h=i(m)}if(h!==null)var w=!0;else{var gn=i(g);gn!==null&&yn(ln,gn.startTime-un),w=!1}return w}finally{h=null,k=v,S=!1}}var D=!1,J=null,nn=-1,Q=5,P=-1;function K(){return!(t.unstable_now()-P<Q)}function G(){if(J!==null){var Y=t.unstable_now();P=Y;var un=!0;try{un=J(!0,Y)}finally{un?q():(D=!1,J=null)}}else D=!1}var q;if(typeof V=="function")q=function(){V(G)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,rn=X.port2;X.port1.onmessage=G,q=function(){rn.postMessage(null)}}else q=function(){O(G,0)};function vn(Y){J=Y,D||(D=!0,q())}function yn(Y,un){nn=O(function(){Y(t.unstable_now())},un)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(Y){Y.callback=null},t.unstable_continueExecution=function(){E||S||(E=!0,vn(cn))},t.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<Y?Math.floor(1e3/Y):5},t.unstable_getCurrentPriorityLevel=function(){return k},t.unstable_getFirstCallbackNode=function(){return i(m)},t.unstable_next=function(Y){switch(k){case 1:case 2:case 3:var un=3;break;default:un=k}var v=k;k=un;try{return Y()}finally{k=v}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(Y,un){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var v=k;k=Y;try{return un()}finally{k=v}},t.unstable_scheduleCallback=function(Y,un,v){var _=t.unstable_now();switch(typeof v=="object"&&v!==null?(v=v.delay,v=typeof v=="number"&&0<v?_+v:_):v=_,Y){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=v+B,Y={id:A++,callback:un,priorityLevel:Y,startTime:v,expirationTime:B,sortIndex:-1},v>_?(Y.sortIndex=v,l(g,Y),i(m)===null&&Y===i(g)&&(L?(T(nn),nn=-1):L=!0,yn(ln,v-_))):(Y.sortIndex=B,l(m,Y),E||S||(E=!0,vn(cn))),Y},t.unstable_shouldYield=K,t.unstable_wrapCallback=function(Y){var un=k;return function(){var v=k;k=un;try{return Y.apply(this,arguments)}finally{k=v}}}}(Ua)),Ua}var Ip;function Eg(){return Ip||(Ip=1,ja.exports=Ig()),ja.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ep;function _g(){if(Ep)return ye;Ep=1;var t=ks(),l=Eg();function i(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,s={};function c(n,e){u(n,e),u(n+"Capture",e)}function u(n,e){for(s[n]=e,n=0;n<e.length;n++)a.add(e[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,A={},h={};function k(n){return m.call(h,n)?!0:m.call(A,n)?!1:g.test(n)?h[n]=!0:(A[n]=!0,!1)}function S(n,e,r,o){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,e,r,o){if(e===null||typeof e>"u"||S(n,e,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function L(n,e,r,o,p,d,y){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=o,this.attributeNamespace=p,this.mustUseProperty=r,this.propertyName=n,this.type=e,this.sanitizeURL=d,this.removeEmptyString=y}var O={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){O[n]=new L(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];O[e]=new L(e,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){O[n]=new L(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){O[n]=new L(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){O[n]=new L(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){O[n]=new L(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){O[n]=new L(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){O[n]=new L(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){O[n]=new L(n,5,!1,n.toLowerCase(),null,!1,!1)});var T=/[\-:]([a-z])/g;function V(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(T,V);O[e]=new L(e,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(T,V);O[e]=new L(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(T,V);O[e]=new L(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){O[n]=new L(n,1,!1,n.toLowerCase(),null,!1,!1)}),O.xlinkHref=new L("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){O[n]=new L(n,1,!1,n.toLowerCase(),null,!0,!0)});function z(n,e,r,o){var p=O.hasOwnProperty(e)?O[e]:null;(p!==null?p.type!==0:o||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(E(e,r,p,o)&&(r=null),o||p===null?k(e)&&(r===null?n.removeAttribute(e):n.setAttribute(e,""+r)):p.mustUseProperty?n[p.propertyName]=r===null?p.type===3?!1:"":r:(e=p.attributeName,o=p.attributeNamespace,r===null?n.removeAttribute(e):(p=p.type,r=p===3||p===4&&r===!0?"":""+r,o?n.setAttributeNS(o,e,r):n.setAttribute(e,r))))}var ln=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,cn=Symbol.for("react.element"),D=Symbol.for("react.portal"),J=Symbol.for("react.fragment"),nn=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),K=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),rn=Symbol.for("react.memo"),vn=Symbol.for("react.lazy"),yn=Symbol.for("react.offscreen"),Y=Symbol.iterator;function un(n){return n===null||typeof n!="object"?null:(n=Y&&n[Y]||n["@@iterator"],typeof n=="function"?n:null)}var v=Object.assign,_;function B(n){if(_===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);_=e&&e[1]||""}return`
`+_+n}var w=!1;function gn(n,e){if(!n||w)return"";w=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(b){var o=b}Reflect.construct(n,[],e)}else{try{e.call()}catch(b){o=b}n.call(e.prototype)}else{try{throw Error()}catch(b){o=b}n()}}catch(b){if(b&&o&&typeof b.stack=="string"){for(var p=b.stack.split(`
`),d=o.stack.split(`
`),y=p.length-1,C=d.length-1;1<=y&&0<=C&&p[y]!==d[C];)C--;for(;1<=y&&0<=C;y--,C--)if(p[y]!==d[C]){if(y!==1||C!==1)do if(y--,C--,0>C||p[y]!==d[C]){var x=`
`+p[y].replace(" at new "," at ");return n.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",n.displayName)),x}while(1<=y&&0<=C);break}}}finally{w=!1,Error.prepareStackTrace=r}return(n=n?n.displayName||n.name:"")?B(n):""}function Cn(n){switch(n.tag){case 5:return B(n.type);case 16:return B("Lazy");case 13:return B("Suspense");case 19:return B("SuspenseList");case 0:case 2:case 15:return n=gn(n.type,!1),n;case 11:return n=gn(n.type.render,!1),n;case 1:return n=gn(n.type,!0),n;default:return""}}function mn(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case J:return"Fragment";case D:return"Portal";case Q:return"Profiler";case nn:return"StrictMode";case q:return"Suspense";case X:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case K:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case G:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case rn:return e=n.displayName||null,e!==null?e:mn(n.type)||"Memo";case vn:e=n._payload,n=n._init;try{return mn(n(e))}catch{}}return null}function Mn(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mn(e);case 8:return e===nn?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function wn(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Tn(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qn(n){var e=Tn(n)?"checked":"value",r=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),o=""+n[e];if(!n.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var p=r.get,d=r.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return p.call(this)},set:function(y){o=""+y,d.call(this,y)}}),Object.defineProperty(n,e,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(y){o=""+y},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Ye(n){n._valueTracker||(n._valueTracker=qn(n))}function _i(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var r=e.getValue(),o="";return n&&(o=Tn(n)?n.checked?"true":"false":n.value),n=o,n!==r?(e.setValue(n),!0):!1}function Xt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Lr(n,e){var r=e.checked;return v({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??n._wrapperState.initialChecked})}function Mr(n,e){var r=e.defaultValue==null?"":e.defaultValue,o=e.checked!=null?e.checked:e.defaultChecked;r=wn(e.value!=null?e.value:r),n._wrapperState={initialChecked:o,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Rr(n,e){e=e.checked,e!=null&&z(n,"checked",e,!1)}function Zt(n,e){Rr(n,e);var r=wn(e.value),o=e.type;if(r!=null)o==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+r):n.value!==""+r&&(n.value=""+r);else if(o==="submit"||o==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?nr(n,e.type,r):e.hasOwnProperty("defaultValue")&&nr(n,e.type,wn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Pi(n,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var o=e.type;if(!(o!=="submit"&&o!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,r||e===n.value||(n.value=e),n.defaultValue=e}r=n.name,r!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,r!==""&&(n.name=r)}function nr(n,e,r){(e!=="number"||Xt(n.ownerDocument)!==n)&&(r==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+r&&(n.defaultValue=""+r))}var st=Array.isArray;function ut(n,e,r,o){if(n=n.options,e){e={};for(var p=0;p<r.length;p++)e["$"+r[p]]=!0;for(r=0;r<n.length;r++)p=e.hasOwnProperty("$"+n[r].value),n[r].selected!==p&&(n[r].selected=p),p&&o&&(n[r].defaultSelected=!0)}else{for(r=""+wn(r),e=null,p=0;p<n.length;p++){if(n[p].value===r){n[p].selected=!0,o&&(n[p].defaultSelected=!0);return}e!==null||n[p].disabled||(e=n[p])}e!==null&&(e.selected=!0)}}function Tr(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(i(91));return v({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Li(n,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(i(92));if(st(r)){if(1<r.length)throw Error(i(93));r=r[0]}e=r}e==null&&(e=""),r=e}n._wrapperState={initialValue:wn(r)}}function Mi(n,e){var r=wn(e.value),o=wn(e.defaultValue);r!=null&&(r=""+r,r!==n.value&&(n.value=r),e.defaultValue==null&&n.defaultValue!==r&&(n.defaultValue=r)),o!=null&&(n.defaultValue=""+o)}function Ri(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function N(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Z(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?N(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var hn,xn=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,o,p){MSApp.execUnsafeLocalFunction(function(){return n(e,r,o,p)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(hn=hn||document.createElement("div"),hn.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=hn.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Pn(n,e){if(e){var r=n.firstChild;if(r&&r===n.lastChild&&r.nodeType===3){r.nodeValue=e;return}}n.textContent=e}var Zn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xe=["Webkit","ms","Moz","O"];Object.keys(Zn).forEach(function(n){Xe.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Zn[e]=Zn[n]})});function _e(n,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||Zn.hasOwnProperty(n)&&Zn[n]?(""+e).trim():e+"px"}function ct(n,e){n=n.style;for(var r in e)if(e.hasOwnProperty(r)){var o=r.indexOf("--")===0,p=_e(r,e[r],o);r==="float"&&(r="cssFloat"),o?n.setProperty(r,p):n[r]=p}}var Tt=v({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ne(n,e){if(e){if(Tt[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(i(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(i(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(i(61))}if(e.style!=null&&typeof e.style!="object")throw Error(i(62))}}function Ue(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ke=null;function no(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var eo=null,er=null,tr=null;function zs(n){if(n=ni(n)){if(typeof eo!="function")throw Error(i(280));var e=n.stateNode;e&&(e=nl(e),eo(n.stateNode,n.type,e))}}function Gs(n){er?tr?tr.push(n):tr=[n]:er=n}function Hs(){if(er){var n=er,e=tr;if(tr=er=null,zs(n),e)for(n=0;n<e.length;n++)zs(e[n])}}function js(n,e){return n(e)}function Us(){}var to=!1;function Vs(n,e,r){if(to)return n(e,r);to=!0;try{return js(n,e,r)}finally{to=!1,(er!==null||tr!==null)&&(Us(),Hs())}}function br(n,e){var r=n.stateNode;if(r===null)return null;var o=nl(r);if(o===null)return null;r=o[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(n=n.type,o=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!o;break n;default:n=!1}if(n)return null;if(r&&typeof r!="function")throw Error(i(231,e,typeof r));return r}var ro=!1;if(f)try{var Dr={};Object.defineProperty(Dr,"passive",{get:function(){ro=!0}}),window.addEventListener("test",Dr,Dr),window.removeEventListener("test",Dr,Dr)}catch{ro=!1}function Mf(n,e,r,o,p,d,y,C,x){var b=Array.prototype.slice.call(arguments,3);try{e.apply(r,b)}catch(j){this.onError(j)}}var Or=!1,Ti=null,bi=!1,io=null,Rf={onError:function(n){Or=!0,Ti=n}};function Tf(n,e,r,o,p,d,y,C,x){Or=!1,Ti=null,Mf.apply(Rf,arguments)}function bf(n,e,r,o,p,d,y,C,x){if(Tf.apply(this,arguments),Or){if(Or){var b=Ti;Or=!1,Ti=null}else throw Error(i(198));bi||(bi=!0,io=b)}}function bt(n){var e=n,r=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(r=e.return),n=e.return;while(n)}return e.tag===3?r:null}function qs(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Ws(n){if(bt(n)!==n)throw Error(i(188))}function Df(n){var e=n.alternate;if(!e){if(e=bt(n),e===null)throw Error(i(188));return e!==n?null:n}for(var r=n,o=e;;){var p=r.return;if(p===null)break;var d=p.alternate;if(d===null){if(o=p.return,o!==null){r=o;continue}break}if(p.child===d.child){for(d=p.child;d;){if(d===r)return Ws(p),n;if(d===o)return Ws(p),e;d=d.sibling}throw Error(i(188))}if(r.return!==o.return)r=p,o=d;else{for(var y=!1,C=p.child;C;){if(C===r){y=!0,r=p,o=d;break}if(C===o){y=!0,o=p,r=d;break}C=C.sibling}if(!y){for(C=d.child;C;){if(C===r){y=!0,r=d,o=p;break}if(C===o){y=!0,o=d,r=p;break}C=C.sibling}if(!y)throw Error(i(189))}}if(r.alternate!==o)throw Error(i(190))}if(r.tag!==3)throw Error(i(188));return r.stateNode.current===r?n:e}function Js(n){return n=Df(n),n!==null?Qs(n):null}function Qs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Qs(n);if(e!==null)return e;n=n.sibling}return null}var $s=l.unstable_scheduleCallback,Ks=l.unstable_cancelCallback,Of=l.unstable_shouldYield,Nf=l.unstable_requestPaint,Un=l.unstable_now,Ff=l.unstable_getCurrentPriorityLevel,lo=l.unstable_ImmediatePriority,Ys=l.unstable_UserBlockingPriority,Di=l.unstable_NormalPriority,Bf=l.unstable_LowPriority,Xs=l.unstable_IdlePriority,Oi=null,Ve=null;function zf(n){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(Oi,n,void 0,(n.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:jf,Gf=Math.log,Hf=Math.LN2;function jf(n){return n>>>=0,n===0?32:31-(Gf(n)/Hf|0)|0}var Ni=64,Fi=4194304;function Nr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Bi(n,e){var r=n.pendingLanes;if(r===0)return 0;var o=0,p=n.suspendedLanes,d=n.pingedLanes,y=r&268435455;if(y!==0){var C=y&~p;C!==0?o=Nr(C):(d&=y,d!==0&&(o=Nr(d)))}else y=r&~p,y!==0?o=Nr(y):d!==0&&(o=Nr(d));if(o===0)return 0;if(e!==0&&e!==o&&(e&p)===0&&(p=o&-o,d=e&-e,p>=d||p===16&&(d&4194240)!==0))return e;if((o&4)!==0&&(o|=r&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=o;0<e;)r=31-Oe(e),p=1<<r,o|=n[r],e&=~p;return o}function Uf(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vf(n,e){for(var r=n.suspendedLanes,o=n.pingedLanes,p=n.expirationTimes,d=n.pendingLanes;0<d;){var y=31-Oe(d),C=1<<y,x=p[y];x===-1?((C&r)===0||(C&o)!==0)&&(p[y]=Uf(C,e)):x<=e&&(n.expiredLanes|=C),d&=~C}}function oo(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Zs(){var n=Ni;return Ni<<=1,(Ni&4194240)===0&&(Ni=64),n}function ao(n){for(var e=[],r=0;31>r;r++)e.push(n);return e}function Fr(n,e,r){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Oe(e),n[e]=r}function qf(n,e){var r=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var o=n.eventTimes;for(n=n.expirationTimes;0<r;){var p=31-Oe(r),d=1<<p;e[p]=0,o[p]=-1,n[p]=-1,r&=~d}}function so(n,e){var r=n.entangledLanes|=e;for(n=n.entanglements;r;){var o=31-Oe(r),p=1<<o;p&e|n[o]&e&&(n[o]|=e),r&=~p}}var bn=0;function nu(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var eu,uo,tu,ru,iu,co=!1,zi=[],pt=null,dt=null,ft=null,Br=new Map,zr=new Map,mt=[],Wf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lu(n,e){switch(n){case"focusin":case"focusout":pt=null;break;case"dragenter":case"dragleave":dt=null;break;case"mouseover":case"mouseout":ft=null;break;case"pointerover":case"pointerout":Br.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":zr.delete(e.pointerId)}}function Gr(n,e,r,o,p,d){return n===null||n.nativeEvent!==d?(n={blockedOn:e,domEventName:r,eventSystemFlags:o,nativeEvent:d,targetContainers:[p]},e!==null&&(e=ni(e),e!==null&&uo(e)),n):(n.eventSystemFlags|=o,e=n.targetContainers,p!==null&&e.indexOf(p)===-1&&e.push(p),n)}function Jf(n,e,r,o,p){switch(e){case"focusin":return pt=Gr(pt,n,e,r,o,p),!0;case"dragenter":return dt=Gr(dt,n,e,r,o,p),!0;case"mouseover":return ft=Gr(ft,n,e,r,o,p),!0;case"pointerover":var d=p.pointerId;return Br.set(d,Gr(Br.get(d)||null,n,e,r,o,p)),!0;case"gotpointercapture":return d=p.pointerId,zr.set(d,Gr(zr.get(d)||null,n,e,r,o,p)),!0}return!1}function ou(n){var e=Dt(n.target);if(e!==null){var r=bt(e);if(r!==null){if(e=r.tag,e===13){if(e=qs(r),e!==null){n.blockedOn=e,iu(n.priority,function(){tu(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){n.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Gi(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var r=fo(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(r===null){r=n.nativeEvent;var o=new r.constructor(r.type,r);ke=o,r.target.dispatchEvent(o),ke=null}else return e=ni(r),e!==null&&uo(e),n.blockedOn=r,!1;e.shift()}return!0}function au(n,e,r){Gi(n)&&r.delete(e)}function Qf(){co=!1,pt!==null&&Gi(pt)&&(pt=null),dt!==null&&Gi(dt)&&(dt=null),ft!==null&&Gi(ft)&&(ft=null),Br.forEach(au),zr.forEach(au)}function Hr(n,e){n.blockedOn===e&&(n.blockedOn=null,co||(co=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Qf)))}function jr(n){function e(p){return Hr(p,n)}if(0<zi.length){Hr(zi[0],n);for(var r=1;r<zi.length;r++){var o=zi[r];o.blockedOn===n&&(o.blockedOn=null)}}for(pt!==null&&Hr(pt,n),dt!==null&&Hr(dt,n),ft!==null&&Hr(ft,n),Br.forEach(e),zr.forEach(e),r=0;r<mt.length;r++)o=mt[r],o.blockedOn===n&&(o.blockedOn=null);for(;0<mt.length&&(r=mt[0],r.blockedOn===null);)ou(r),r.blockedOn===null&&mt.shift()}var rr=ln.ReactCurrentBatchConfig,Hi=!0;function $f(n,e,r,o){var p=bn,d=rr.transition;rr.transition=null;try{bn=1,po(n,e,r,o)}finally{bn=p,rr.transition=d}}function Kf(n,e,r,o){var p=bn,d=rr.transition;rr.transition=null;try{bn=4,po(n,e,r,o)}finally{bn=p,rr.transition=d}}function po(n,e,r,o){if(Hi){var p=fo(n,e,r,o);if(p===null)Mo(n,e,o,ji,r),lu(n,o);else if(Jf(p,n,e,r,o))o.stopPropagation();else if(lu(n,o),e&4&&-1<Wf.indexOf(n)){for(;p!==null;){var d=ni(p);if(d!==null&&eu(d),d=fo(n,e,r,o),d===null&&Mo(n,e,o,ji,r),d===p)break;p=d}p!==null&&o.stopPropagation()}else Mo(n,e,o,null,r)}}var ji=null;function fo(n,e,r,o){if(ji=null,n=no(o),n=Dt(n),n!==null)if(e=bt(n),e===null)n=null;else if(r=e.tag,r===13){if(n=qs(e),n!==null)return n;n=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return ji=n,null}function su(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ff()){case lo:return 1;case Ys:return 4;case Di:case Bf:return 16;case Xs:return 536870912;default:return 16}default:return 16}}var gt=null,mo=null,Ui=null;function uu(){if(Ui)return Ui;var n,e=mo,r=e.length,o,p="value"in gt?gt.value:gt.textContent,d=p.length;for(n=0;n<r&&e[n]===p[n];n++);var y=r-n;for(o=1;o<=y&&e[r-o]===p[d-o];o++);return Ui=p.slice(n,1<o?1-o:void 0)}function Vi(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function qi(){return!0}function cu(){return!1}function ve(n){function e(r,o,p,d,y){this._reactName=r,this._targetInst=p,this.type=o,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var C in n)n.hasOwnProperty(C)&&(r=n[C],this[C]=r?r(d):d[C]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?qi:cu,this.isPropagationStopped=cu,this}return v(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=qi)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=qi)},persist:function(){},isPersistent:qi}),e}var ir={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},go=ve(ir),Ur=v({},ir,{view:0,detail:0}),Yf=ve(Ur),ho,yo,Vr,Wi=v({},Ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:So,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Vr&&(Vr&&n.type==="mousemove"?(ho=n.screenX-Vr.screenX,yo=n.screenY-Vr.screenY):yo=ho=0,Vr=n),ho)},movementY:function(n){return"movementY"in n?n.movementY:yo}}),pu=ve(Wi),Xf=v({},Wi,{dataTransfer:0}),Zf=ve(Xf),nm=v({},Ur,{relatedTarget:0}),Ao=ve(nm),em=v({},ir,{animationName:0,elapsedTime:0,pseudoElement:0}),tm=ve(em),rm=v({},ir,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),im=ve(rm),lm=v({},ir,{data:0}),du=ve(lm),om={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},am={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function um(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=sm[n])?!!e[n]:!1}function So(){return um}var cm=v({},Ur,{key:function(n){if(n.key){var e=om[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Vi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?am[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:So,charCode:function(n){return n.type==="keypress"?Vi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Vi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),pm=ve(cm),dm=v({},Wi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fu=ve(dm),fm=v({},Ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:So}),mm=ve(fm),gm=v({},ir,{propertyName:0,elapsedTime:0,pseudoElement:0}),hm=ve(gm),ym=v({},Wi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Am=ve(ym),Sm=[9,13,27,32],ko=f&&"CompositionEvent"in window,qr=null;f&&"documentMode"in document&&(qr=document.documentMode);var km=f&&"TextEvent"in window&&!qr,mu=f&&(!ko||qr&&8<qr&&11>=qr),gu=" ",hu=!1;function yu(n,e){switch(n){case"keyup":return Sm.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Au(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var lr=!1;function vm(n,e){switch(n){case"compositionend":return Au(e);case"keypress":return e.which!==32?null:(hu=!0,gu);case"textInput":return n=e.data,n===gu&&hu?null:n;default:return null}}function Cm(n,e){if(lr)return n==="compositionend"||!ko&&yu(n,e)?(n=uu(),Ui=mo=gt=null,lr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return mu&&e.locale!=="ko"?null:e.data;default:return null}}var wm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Su(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!wm[n.type]:e==="textarea"}function ku(n,e,r,o){Gs(o),e=Yi(e,"onChange"),0<e.length&&(r=new go("onChange","change",null,r,o),n.push({event:r,listeners:e}))}var Wr=null,Jr=null;function xm(n){Bu(n,0)}function Ji(n){var e=cr(n);if(_i(e))return n}function Im(n,e){if(n==="change")return e}var vu=!1;if(f){var vo;if(f){var Co="oninput"in document;if(!Co){var Cu=document.createElement("div");Cu.setAttribute("oninput","return;"),Co=typeof Cu.oninput=="function"}vo=Co}else vo=!1;vu=vo&&(!document.documentMode||9<document.documentMode)}function wu(){Wr&&(Wr.detachEvent("onpropertychange",xu),Jr=Wr=null)}function xu(n){if(n.propertyName==="value"&&Ji(Jr)){var e=[];ku(e,Jr,n,no(n)),Vs(xm,e)}}function Em(n,e,r){n==="focusin"?(wu(),Wr=e,Jr=r,Wr.attachEvent("onpropertychange",xu)):n==="focusout"&&wu()}function _m(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ji(Jr)}function Pm(n,e){if(n==="click")return Ji(e)}function Lm(n,e){if(n==="input"||n==="change")return Ji(e)}function Mm(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Ne=typeof Object.is=="function"?Object.is:Mm;function Qr(n,e){if(Ne(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var r=Object.keys(n),o=Object.keys(e);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var p=r[o];if(!m.call(e,p)||!Ne(n[p],e[p]))return!1}return!0}function Iu(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Eu(n,e){var r=Iu(n);n=0;for(var o;r;){if(r.nodeType===3){if(o=n+r.textContent.length,n<=e&&o>=e)return{node:r,offset:e-n};n=o}n:{for(;r;){if(r.nextSibling){r=r.nextSibling;break n}r=r.parentNode}r=void 0}r=Iu(r)}}function _u(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?_u(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Pu(){for(var n=window,e=Xt();e instanceof n.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)n=e.contentWindow;else break;e=Xt(n.document)}return e}function wo(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Rm(n){var e=Pu(),r=n.focusedElem,o=n.selectionRange;if(e!==r&&r&&r.ownerDocument&&_u(r.ownerDocument.documentElement,r)){if(o!==null&&wo(r)){if(e=o.start,n=o.end,n===void 0&&(n=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(n,r.value.length);else if(n=(e=r.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var p=r.textContent.length,d=Math.min(o.start,p);o=o.end===void 0?d:Math.min(o.end,p),!n.extend&&d>o&&(p=o,o=d,d=p),p=Eu(r,d);var y=Eu(r,o);p&&y&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==y.node||n.focusOffset!==y.offset)&&(e=e.createRange(),e.setStart(p.node,p.offset),n.removeAllRanges(),d>o?(n.addRange(e),n.extend(y.node,y.offset)):(e.setEnd(y.node,y.offset),n.addRange(e)))}}for(e=[],n=r;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)n=e[r],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Tm=f&&"documentMode"in document&&11>=document.documentMode,or=null,xo=null,$r=null,Io=!1;function Lu(n,e,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Io||or==null||or!==Xt(o)||(o=or,"selectionStart"in o&&wo(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),$r&&Qr($r,o)||($r=o,o=Yi(xo,"onSelect"),0<o.length&&(e=new go("onSelect","select",null,e,r),n.push({event:e,listeners:o}),e.target=or)))}function Qi(n,e){var r={};return r[n.toLowerCase()]=e.toLowerCase(),r["Webkit"+n]="webkit"+e,r["Moz"+n]="moz"+e,r}var ar={animationend:Qi("Animation","AnimationEnd"),animationiteration:Qi("Animation","AnimationIteration"),animationstart:Qi("Animation","AnimationStart"),transitionend:Qi("Transition","TransitionEnd")},Eo={},Mu={};f&&(Mu=document.createElement("div").style,"AnimationEvent"in window||(delete ar.animationend.animation,delete ar.animationiteration.animation,delete ar.animationstart.animation),"TransitionEvent"in window||delete ar.transitionend.transition);function $i(n){if(Eo[n])return Eo[n];if(!ar[n])return n;var e=ar[n],r;for(r in e)if(e.hasOwnProperty(r)&&r in Mu)return Eo[n]=e[r];return n}var Ru=$i("animationend"),Tu=$i("animationiteration"),bu=$i("animationstart"),Du=$i("transitionend"),Ou=new Map,Nu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ht(n,e){Ou.set(n,e),c(e,[n])}for(var _o=0;_o<Nu.length;_o++){var Po=Nu[_o],bm=Po.toLowerCase(),Dm=Po[0].toUpperCase()+Po.slice(1);ht(bm,"on"+Dm)}ht(Ru,"onAnimationEnd"),ht(Tu,"onAnimationIteration"),ht(bu,"onAnimationStart"),ht("dblclick","onDoubleClick"),ht("focusin","onFocus"),ht("focusout","onBlur"),ht(Du,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Om=new Set("cancel close invalid load scroll toggle".split(" ").concat(Kr));function Fu(n,e,r){var o=n.type||"unknown-event";n.currentTarget=r,bf(o,e,void 0,n),n.currentTarget=null}function Bu(n,e){e=(e&4)!==0;for(var r=0;r<n.length;r++){var o=n[r],p=o.event;o=o.listeners;n:{var d=void 0;if(e)for(var y=o.length-1;0<=y;y--){var C=o[y],x=C.instance,b=C.currentTarget;if(C=C.listener,x!==d&&p.isPropagationStopped())break n;Fu(p,C,b),d=x}else for(y=0;y<o.length;y++){if(C=o[y],x=C.instance,b=C.currentTarget,C=C.listener,x!==d&&p.isPropagationStopped())break n;Fu(p,C,b),d=x}}}if(bi)throw n=io,bi=!1,io=null,n}function Fn(n,e){var r=e[No];r===void 0&&(r=e[No]=new Set);var o=n+"__bubble";r.has(o)||(zu(e,n,2,!1),r.add(o))}function Lo(n,e,r){var o=0;e&&(o|=4),zu(r,n,o,e)}var Ki="_reactListening"+Math.random().toString(36).slice(2);function Yr(n){if(!n[Ki]){n[Ki]=!0,a.forEach(function(r){r!=="selectionchange"&&(Om.has(r)||Lo(r,!1,n),Lo(r,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Ki]||(e[Ki]=!0,Lo("selectionchange",!1,e))}}function zu(n,e,r,o){switch(su(e)){case 1:var p=$f;break;case 4:p=Kf;break;default:p=po}r=p.bind(null,e,r,n),p=void 0,!ro||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(p=!0),o?p!==void 0?n.addEventListener(e,r,{capture:!0,passive:p}):n.addEventListener(e,r,!0):p!==void 0?n.addEventListener(e,r,{passive:p}):n.addEventListener(e,r,!1)}function Mo(n,e,r,o,p){var d=o;if((e&1)===0&&(e&2)===0&&o!==null)n:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var C=o.stateNode.containerInfo;if(C===p||C.nodeType===8&&C.parentNode===p)break;if(y===4)for(y=o.return;y!==null;){var x=y.tag;if((x===3||x===4)&&(x=y.stateNode.containerInfo,x===p||x.nodeType===8&&x.parentNode===p))return;y=y.return}for(;C!==null;){if(y=Dt(C),y===null)return;if(x=y.tag,x===5||x===6){o=d=y;continue n}C=C.parentNode}}o=o.return}Vs(function(){var b=d,j=no(r),U=[];n:{var H=Ou.get(n);if(H!==void 0){var en=go,on=n;switch(n){case"keypress":if(Vi(r)===0)break n;case"keydown":case"keyup":en=pm;break;case"focusin":on="focus",en=Ao;break;case"focusout":on="blur",en=Ao;break;case"beforeblur":case"afterblur":en=Ao;break;case"click":if(r.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":en=pu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":en=Zf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":en=mm;break;case Ru:case Tu:case bu:en=tm;break;case Du:en=hm;break;case"scroll":en=Yf;break;case"wheel":en=Am;break;case"copy":case"cut":case"paste":en=im;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":en=fu}var an=(e&4)!==0,Vn=!an&&n==="scroll",M=an?H!==null?H+"Capture":null:H;an=[];for(var I=b,R;I!==null;){R=I;var $=R.stateNode;if(R.tag===5&&$!==null&&(R=$,M!==null&&($=br(I,M),$!=null&&an.push(Xr(I,$,R)))),Vn)break;I=I.return}0<an.length&&(H=new en(H,on,null,r,j),U.push({event:H,listeners:an}))}}if((e&7)===0){n:{if(H=n==="mouseover"||n==="pointerover",en=n==="mouseout"||n==="pointerout",H&&r!==ke&&(on=r.relatedTarget||r.fromElement)&&(Dt(on)||on[Ze]))break n;if((en||H)&&(H=j.window===j?j:(H=j.ownerDocument)?H.defaultView||H.parentWindow:window,en?(on=r.relatedTarget||r.toElement,en=b,on=on?Dt(on):null,on!==null&&(Vn=bt(on),on!==Vn||on.tag!==5&&on.tag!==6)&&(on=null)):(en=null,on=b),en!==on)){if(an=pu,$="onMouseLeave",M="onMouseEnter",I="mouse",(n==="pointerout"||n==="pointerover")&&(an=fu,$="onPointerLeave",M="onPointerEnter",I="pointer"),Vn=en==null?H:cr(en),R=on==null?H:cr(on),H=new an($,I+"leave",en,r,j),H.target=Vn,H.relatedTarget=R,$=null,Dt(j)===b&&(an=new an(M,I+"enter",on,r,j),an.target=R,an.relatedTarget=Vn,$=an),Vn=$,en&&on)e:{for(an=en,M=on,I=0,R=an;R;R=sr(R))I++;for(R=0,$=M;$;$=sr($))R++;for(;0<I-R;)an=sr(an),I--;for(;0<R-I;)M=sr(M),R--;for(;I--;){if(an===M||M!==null&&an===M.alternate)break e;an=sr(an),M=sr(M)}an=null}else an=null;en!==null&&Gu(U,H,en,an,!1),on!==null&&Vn!==null&&Gu(U,Vn,on,an,!0)}}n:{if(H=b?cr(b):window,en=H.nodeName&&H.nodeName.toLowerCase(),en==="select"||en==="input"&&H.type==="file")var sn=Im;else if(Su(H))if(vu)sn=Lm;else{sn=_m;var pn=Em}else(en=H.nodeName)&&en.toLowerCase()==="input"&&(H.type==="checkbox"||H.type==="radio")&&(sn=Pm);if(sn&&(sn=sn(n,b))){ku(U,sn,r,j);break n}pn&&pn(n,H,b),n==="focusout"&&(pn=H._wrapperState)&&pn.controlled&&H.type==="number"&&nr(H,"number",H.value)}switch(pn=b?cr(b):window,n){case"focusin":(Su(pn)||pn.contentEditable==="true")&&(or=pn,xo=b,$r=null);break;case"focusout":$r=xo=or=null;break;case"mousedown":Io=!0;break;case"contextmenu":case"mouseup":case"dragend":Io=!1,Lu(U,r,j);break;case"selectionchange":if(Tm)break;case"keydown":case"keyup":Lu(U,r,j)}var dn;if(ko)n:{switch(n){case"compositionstart":var An="onCompositionStart";break n;case"compositionend":An="onCompositionEnd";break n;case"compositionupdate":An="onCompositionUpdate";break n}An=void 0}else lr?yu(n,r)&&(An="onCompositionEnd"):n==="keydown"&&r.keyCode===229&&(An="onCompositionStart");An&&(mu&&r.locale!=="ko"&&(lr||An!=="onCompositionStart"?An==="onCompositionEnd"&&lr&&(dn=uu()):(gt=j,mo="value"in gt?gt.value:gt.textContent,lr=!0)),pn=Yi(b,An),0<pn.length&&(An=new du(An,n,null,r,j),U.push({event:An,listeners:pn}),dn?An.data=dn:(dn=Au(r),dn!==null&&(An.data=dn)))),(dn=km?vm(n,r):Cm(n,r))&&(b=Yi(b,"onBeforeInput"),0<b.length&&(j=new du("onBeforeInput","beforeinput",null,r,j),U.push({event:j,listeners:b}),j.data=dn))}Bu(U,e)})}function Xr(n,e,r){return{instance:n,listener:e,currentTarget:r}}function Yi(n,e){for(var r=e+"Capture",o=[];n!==null;){var p=n,d=p.stateNode;p.tag===5&&d!==null&&(p=d,d=br(n,r),d!=null&&o.unshift(Xr(n,d,p)),d=br(n,e),d!=null&&o.push(Xr(n,d,p))),n=n.return}return o}function sr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Gu(n,e,r,o,p){for(var d=e._reactName,y=[];r!==null&&r!==o;){var C=r,x=C.alternate,b=C.stateNode;if(x!==null&&x===o)break;C.tag===5&&b!==null&&(C=b,p?(x=br(r,d),x!=null&&y.unshift(Xr(r,x,C))):p||(x=br(r,d),x!=null&&y.push(Xr(r,x,C)))),r=r.return}y.length!==0&&n.push({event:e,listeners:y})}var Nm=/\r\n?/g,Fm=/\u0000|\uFFFD/g;function Hu(n){return(typeof n=="string"?n:""+n).replace(Nm,`
`).replace(Fm,"")}function Xi(n,e,r){if(e=Hu(e),Hu(n)!==e&&r)throw Error(i(425))}function Zi(){}var Ro=null,To=null;function bo(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Do=typeof setTimeout=="function"?setTimeout:void 0,Bm=typeof clearTimeout=="function"?clearTimeout:void 0,ju=typeof Promise=="function"?Promise:void 0,zm=typeof queueMicrotask=="function"?queueMicrotask:typeof ju<"u"?function(n){return ju.resolve(null).then(n).catch(Gm)}:Do;function Gm(n){setTimeout(function(){throw n})}function Oo(n,e){var r=e,o=0;do{var p=r.nextSibling;if(n.removeChild(r),p&&p.nodeType===8)if(r=p.data,r==="/$"){if(o===0){n.removeChild(p),jr(e);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=p}while(r);jr(e)}function yt(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Uu(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var r=n.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return n;e--}else r==="/$"&&e++}n=n.previousSibling}return null}var ur=Math.random().toString(36).slice(2),qe="__reactFiber$"+ur,Zr="__reactProps$"+ur,Ze="__reactContainer$"+ur,No="__reactEvents$"+ur,Hm="__reactListeners$"+ur,jm="__reactHandles$"+ur;function Dt(n){var e=n[qe];if(e)return e;for(var r=n.parentNode;r;){if(e=r[Ze]||r[qe]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(n=Uu(n);n!==null;){if(r=n[qe])return r;n=Uu(n)}return e}n=r,r=n.parentNode}return null}function ni(n){return n=n[qe]||n[Ze],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function cr(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(i(33))}function nl(n){return n[Zr]||null}var Fo=[],pr=-1;function At(n){return{current:n}}function Bn(n){0>pr||(n.current=Fo[pr],Fo[pr]=null,pr--)}function Nn(n,e){pr++,Fo[pr]=n.current,n.current=e}var St={},re=At(St),de=At(!1),Ot=St;function dr(n,e){var r=n.type.contextTypes;if(!r)return St;var o=n.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===e)return o.__reactInternalMemoizedMaskedChildContext;var p={},d;for(d in r)p[d]=e[d];return o&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=p),p}function fe(n){return n=n.childContextTypes,n!=null}function el(){Bn(de),Bn(re)}function Vu(n,e,r){if(re.current!==St)throw Error(i(168));Nn(re,e),Nn(de,r)}function qu(n,e,r){var o=n.stateNode;if(e=e.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var p in o)if(!(p in e))throw Error(i(108,Mn(n)||"Unknown",p));return v({},r,o)}function tl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||St,Ot=re.current,Nn(re,n),Nn(de,de.current),!0}function Wu(n,e,r){var o=n.stateNode;if(!o)throw Error(i(169));r?(n=qu(n,e,Ot),o.__reactInternalMemoizedMergedChildContext=n,Bn(de),Bn(re),Nn(re,n)):Bn(de),Nn(de,r)}var nt=null,rl=!1,Bo=!1;function Ju(n){nt===null?nt=[n]:nt.push(n)}function Um(n){rl=!0,Ju(n)}function kt(){if(!Bo&&nt!==null){Bo=!0;var n=0,e=bn;try{var r=nt;for(bn=1;n<r.length;n++){var o=r[n];do o=o(!0);while(o!==null)}nt=null,rl=!1}catch(p){throw nt!==null&&(nt=nt.slice(n+1)),$s(lo,kt),p}finally{bn=e,Bo=!1}}return null}var fr=[],mr=0,il=null,ll=0,Pe=[],Le=0,Nt=null,et=1,tt="";function Ft(n,e){fr[mr++]=ll,fr[mr++]=il,il=n,ll=e}function Qu(n,e,r){Pe[Le++]=et,Pe[Le++]=tt,Pe[Le++]=Nt,Nt=n;var o=et;n=tt;var p=32-Oe(o)-1;o&=~(1<<p),r+=1;var d=32-Oe(e)+p;if(30<d){var y=p-p%5;d=(o&(1<<y)-1).toString(32),o>>=y,p-=y,et=1<<32-Oe(e)+p|r<<p|o,tt=d+n}else et=1<<d|r<<p|o,tt=n}function zo(n){n.return!==null&&(Ft(n,1),Qu(n,1,0))}function Go(n){for(;n===il;)il=fr[--mr],fr[mr]=null,ll=fr[--mr],fr[mr]=null;for(;n===Nt;)Nt=Pe[--Le],Pe[Le]=null,tt=Pe[--Le],Pe[Le]=null,et=Pe[--Le],Pe[Le]=null}var Ce=null,we=null,zn=!1,Fe=null;function $u(n,e){var r=be(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=n,e=n.deletions,e===null?(n.deletions=[r],n.flags|=16):e.push(r)}function Ku(n,e){switch(n.tag){case 5:var r=n.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Ce=n,we=yt(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Ce=n,we=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=Nt!==null?{id:et,overflow:tt}:null,n.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=be(18,null,null,0),r.stateNode=e,r.return=n,n.child=r,Ce=n,we=null,!0):!1;default:return!1}}function Ho(n){return(n.mode&1)!==0&&(n.flags&128)===0}function jo(n){if(zn){var e=we;if(e){var r=e;if(!Ku(n,e)){if(Ho(n))throw Error(i(418));e=yt(r.nextSibling);var o=Ce;e&&Ku(n,e)?$u(o,r):(n.flags=n.flags&-4097|2,zn=!1,Ce=n)}}else{if(Ho(n))throw Error(i(418));n.flags=n.flags&-4097|2,zn=!1,Ce=n}}}function Yu(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Ce=n}function ol(n){if(n!==Ce)return!1;if(!zn)return Yu(n),zn=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!bo(n.type,n.memoizedProps)),e&&(e=we)){if(Ho(n))throw Xu(),Error(i(418));for(;e;)$u(n,e),e=yt(e.nextSibling)}if(Yu(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));n:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var r=n.data;if(r==="/$"){if(e===0){we=yt(n.nextSibling);break n}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}n=n.nextSibling}we=null}}else we=Ce?yt(n.stateNode.nextSibling):null;return!0}function Xu(){for(var n=we;n;)n=yt(n.nextSibling)}function gr(){we=Ce=null,zn=!1}function Uo(n){Fe===null?Fe=[n]:Fe.push(n)}var Vm=ln.ReactCurrentBatchConfig;function ei(n,e,r){if(n=r.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(i(309));var o=r.stateNode}if(!o)throw Error(i(147,n));var p=o,d=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===d?e.ref:(e=function(y){var C=p.refs;y===null?delete C[d]:C[d]=y},e._stringRef=d,e)}if(typeof n!="string")throw Error(i(284));if(!r._owner)throw Error(i(290,n))}return n}function al(n,e){throw n=Object.prototype.toString.call(e),Error(i(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Zu(n){var e=n._init;return e(n._payload)}function nc(n){function e(M,I){if(n){var R=M.deletions;R===null?(M.deletions=[I],M.flags|=16):R.push(I)}}function r(M,I){if(!n)return null;for(;I!==null;)e(M,I),I=I.sibling;return null}function o(M,I){for(M=new Map;I!==null;)I.key!==null?M.set(I.key,I):M.set(I.index,I),I=I.sibling;return M}function p(M,I){return M=Pt(M,I),M.index=0,M.sibling=null,M}function d(M,I,R){return M.index=R,n?(R=M.alternate,R!==null?(R=R.index,R<I?(M.flags|=2,I):R):(M.flags|=2,I)):(M.flags|=1048576,I)}function y(M){return n&&M.alternate===null&&(M.flags|=2),M}function C(M,I,R,$){return I===null||I.tag!==6?(I=Da(R,M.mode,$),I.return=M,I):(I=p(I,R),I.return=M,I)}function x(M,I,R,$){var sn=R.type;return sn===J?j(M,I,R.props.children,$,R.key):I!==null&&(I.elementType===sn||typeof sn=="object"&&sn!==null&&sn.$$typeof===vn&&Zu(sn)===I.type)?($=p(I,R.props),$.ref=ei(M,I,R),$.return=M,$):($=Rl(R.type,R.key,R.props,null,M.mode,$),$.ref=ei(M,I,R),$.return=M,$)}function b(M,I,R,$){return I===null||I.tag!==4||I.stateNode.containerInfo!==R.containerInfo||I.stateNode.implementation!==R.implementation?(I=Oa(R,M.mode,$),I.return=M,I):(I=p(I,R.children||[]),I.return=M,I)}function j(M,I,R,$,sn){return I===null||I.tag!==7?(I=qt(R,M.mode,$,sn),I.return=M,I):(I=p(I,R),I.return=M,I)}function U(M,I,R){if(typeof I=="string"&&I!==""||typeof I=="number")return I=Da(""+I,M.mode,R),I.return=M,I;if(typeof I=="object"&&I!==null){switch(I.$$typeof){case cn:return R=Rl(I.type,I.key,I.props,null,M.mode,R),R.ref=ei(M,null,I),R.return=M,R;case D:return I=Oa(I,M.mode,R),I.return=M,I;case vn:var $=I._init;return U(M,$(I._payload),R)}if(st(I)||un(I))return I=qt(I,M.mode,R,null),I.return=M,I;al(M,I)}return null}function H(M,I,R,$){var sn=I!==null?I.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return sn!==null?null:C(M,I,""+R,$);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case cn:return R.key===sn?x(M,I,R,$):null;case D:return R.key===sn?b(M,I,R,$):null;case vn:return sn=R._init,H(M,I,sn(R._payload),$)}if(st(R)||un(R))return sn!==null?null:j(M,I,R,$,null);al(M,R)}return null}function en(M,I,R,$,sn){if(typeof $=="string"&&$!==""||typeof $=="number")return M=M.get(R)||null,C(I,M,""+$,sn);if(typeof $=="object"&&$!==null){switch($.$$typeof){case cn:return M=M.get($.key===null?R:$.key)||null,x(I,M,$,sn);case D:return M=M.get($.key===null?R:$.key)||null,b(I,M,$,sn);case vn:var pn=$._init;return en(M,I,R,pn($._payload),sn)}if(st($)||un($))return M=M.get(R)||null,j(I,M,$,sn,null);al(I,$)}return null}function on(M,I,R,$){for(var sn=null,pn=null,dn=I,An=I=0,Xn=null;dn!==null&&An<R.length;An++){dn.index>An?(Xn=dn,dn=null):Xn=dn.sibling;var Rn=H(M,dn,R[An],$);if(Rn===null){dn===null&&(dn=Xn);break}n&&dn&&Rn.alternate===null&&e(M,dn),I=d(Rn,I,An),pn===null?sn=Rn:pn.sibling=Rn,pn=Rn,dn=Xn}if(An===R.length)return r(M,dn),zn&&Ft(M,An),sn;if(dn===null){for(;An<R.length;An++)dn=U(M,R[An],$),dn!==null&&(I=d(dn,I,An),pn===null?sn=dn:pn.sibling=dn,pn=dn);return zn&&Ft(M,An),sn}for(dn=o(M,dn);An<R.length;An++)Xn=en(dn,M,An,R[An],$),Xn!==null&&(n&&Xn.alternate!==null&&dn.delete(Xn.key===null?An:Xn.key),I=d(Xn,I,An),pn===null?sn=Xn:pn.sibling=Xn,pn=Xn);return n&&dn.forEach(function(Lt){return e(M,Lt)}),zn&&Ft(M,An),sn}function an(M,I,R,$){var sn=un(R);if(typeof sn!="function")throw Error(i(150));if(R=sn.call(R),R==null)throw Error(i(151));for(var pn=sn=null,dn=I,An=I=0,Xn=null,Rn=R.next();dn!==null&&!Rn.done;An++,Rn=R.next()){dn.index>An?(Xn=dn,dn=null):Xn=dn.sibling;var Lt=H(M,dn,Rn.value,$);if(Lt===null){dn===null&&(dn=Xn);break}n&&dn&&Lt.alternate===null&&e(M,dn),I=d(Lt,I,An),pn===null?sn=Lt:pn.sibling=Lt,pn=Lt,dn=Xn}if(Rn.done)return r(M,dn),zn&&Ft(M,An),sn;if(dn===null){for(;!Rn.done;An++,Rn=R.next())Rn=U(M,Rn.value,$),Rn!==null&&(I=d(Rn,I,An),pn===null?sn=Rn:pn.sibling=Rn,pn=Rn);return zn&&Ft(M,An),sn}for(dn=o(M,dn);!Rn.done;An++,Rn=R.next())Rn=en(dn,M,An,Rn.value,$),Rn!==null&&(n&&Rn.alternate!==null&&dn.delete(Rn.key===null?An:Rn.key),I=d(Rn,I,An),pn===null?sn=Rn:pn.sibling=Rn,pn=Rn);return n&&dn.forEach(function(wg){return e(M,wg)}),zn&&Ft(M,An),sn}function Vn(M,I,R,$){if(typeof R=="object"&&R!==null&&R.type===J&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case cn:n:{for(var sn=R.key,pn=I;pn!==null;){if(pn.key===sn){if(sn=R.type,sn===J){if(pn.tag===7){r(M,pn.sibling),I=p(pn,R.props.children),I.return=M,M=I;break n}}else if(pn.elementType===sn||typeof sn=="object"&&sn!==null&&sn.$$typeof===vn&&Zu(sn)===pn.type){r(M,pn.sibling),I=p(pn,R.props),I.ref=ei(M,pn,R),I.return=M,M=I;break n}r(M,pn);break}else e(M,pn);pn=pn.sibling}R.type===J?(I=qt(R.props.children,M.mode,$,R.key),I.return=M,M=I):($=Rl(R.type,R.key,R.props,null,M.mode,$),$.ref=ei(M,I,R),$.return=M,M=$)}return y(M);case D:n:{for(pn=R.key;I!==null;){if(I.key===pn)if(I.tag===4&&I.stateNode.containerInfo===R.containerInfo&&I.stateNode.implementation===R.implementation){r(M,I.sibling),I=p(I,R.children||[]),I.return=M,M=I;break n}else{r(M,I);break}else e(M,I);I=I.sibling}I=Oa(R,M.mode,$),I.return=M,M=I}return y(M);case vn:return pn=R._init,Vn(M,I,pn(R._payload),$)}if(st(R))return on(M,I,R,$);if(un(R))return an(M,I,R,$);al(M,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,I!==null&&I.tag===6?(r(M,I.sibling),I=p(I,R),I.return=M,M=I):(r(M,I),I=Da(R,M.mode,$),I.return=M,M=I),y(M)):r(M,I)}return Vn}var hr=nc(!0),ec=nc(!1),sl=At(null),ul=null,yr=null,Vo=null;function qo(){Vo=yr=ul=null}function Wo(n){var e=sl.current;Bn(sl),n._currentValue=e}function Jo(n,e,r){for(;n!==null;){var o=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,o!==null&&(o.childLanes|=e)):o!==null&&(o.childLanes&e)!==e&&(o.childLanes|=e),n===r)break;n=n.return}}function Ar(n,e){ul=n,Vo=yr=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&e)!==0&&(me=!0),n.firstContext=null)}function Me(n){var e=n._currentValue;if(Vo!==n)if(n={context:n,memoizedValue:e,next:null},yr===null){if(ul===null)throw Error(i(308));yr=n,ul.dependencies={lanes:0,firstContext:n}}else yr=yr.next=n;return e}var Bt=null;function Qo(n){Bt===null?Bt=[n]:Bt.push(n)}function tc(n,e,r,o){var p=e.interleaved;return p===null?(r.next=r,Qo(e)):(r.next=p.next,p.next=r),e.interleaved=r,rt(n,o)}function rt(n,e){n.lanes|=e;var r=n.alternate;for(r!==null&&(r.lanes|=e),r=n,n=n.return;n!==null;)n.childLanes|=e,r=n.alternate,r!==null&&(r.childLanes|=e),r=n,n=n.return;return r.tag===3?r.stateNode:null}var vt=!1;function $o(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rc(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function it(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Ct(n,e,r){var o=n.updateQueue;if(o===null)return null;if(o=o.shared,(Ln&2)!==0){var p=o.pending;return p===null?e.next=e:(e.next=p.next,p.next=e),o.pending=e,rt(n,r)}return p=o.interleaved,p===null?(e.next=e,Qo(o)):(e.next=p.next,p.next=e),o.interleaved=e,rt(n,r)}function cl(n,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var o=e.lanes;o&=n.pendingLanes,r|=o,e.lanes=r,so(n,r)}}function ic(n,e){var r=n.updateQueue,o=n.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var p=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var y={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};d===null?p=d=y:d=d.next=y,r=r.next}while(r!==null);d===null?p=d=e:d=d.next=e}else p=d=e;r={baseState:o.baseState,firstBaseUpdate:p,lastBaseUpdate:d,shared:o.shared,effects:o.effects},n.updateQueue=r;return}n=r.lastBaseUpdate,n===null?r.firstBaseUpdate=e:n.next=e,r.lastBaseUpdate=e}function pl(n,e,r,o){var p=n.updateQueue;vt=!1;var d=p.firstBaseUpdate,y=p.lastBaseUpdate,C=p.shared.pending;if(C!==null){p.shared.pending=null;var x=C,b=x.next;x.next=null,y===null?d=b:y.next=b,y=x;var j=n.alternate;j!==null&&(j=j.updateQueue,C=j.lastBaseUpdate,C!==y&&(C===null?j.firstBaseUpdate=b:C.next=b,j.lastBaseUpdate=x))}if(d!==null){var U=p.baseState;y=0,j=b=x=null,C=d;do{var H=C.lane,en=C.eventTime;if((o&H)===H){j!==null&&(j=j.next={eventTime:en,lane:0,tag:C.tag,payload:C.payload,callback:C.callback,next:null});n:{var on=n,an=C;switch(H=e,en=r,an.tag){case 1:if(on=an.payload,typeof on=="function"){U=on.call(en,U,H);break n}U=on;break n;case 3:on.flags=on.flags&-65537|128;case 0:if(on=an.payload,H=typeof on=="function"?on.call(en,U,H):on,H==null)break n;U=v({},U,H);break n;case 2:vt=!0}}C.callback!==null&&C.lane!==0&&(n.flags|=64,H=p.effects,H===null?p.effects=[C]:H.push(C))}else en={eventTime:en,lane:H,tag:C.tag,payload:C.payload,callback:C.callback,next:null},j===null?(b=j=en,x=U):j=j.next=en,y|=H;if(C=C.next,C===null){if(C=p.shared.pending,C===null)break;H=C,C=H.next,H.next=null,p.lastBaseUpdate=H,p.shared.pending=null}}while(!0);if(j===null&&(x=U),p.baseState=x,p.firstBaseUpdate=b,p.lastBaseUpdate=j,e=p.shared.interleaved,e!==null){p=e;do y|=p.lane,p=p.next;while(p!==e)}else d===null&&(p.shared.lanes=0);Ht|=y,n.lanes=y,n.memoizedState=U}}function lc(n,e,r){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var o=n[e],p=o.callback;if(p!==null){if(o.callback=null,o=r,typeof p!="function")throw Error(i(191,p));p.call(o)}}}var ti={},We=At(ti),ri=At(ti),ii=At(ti);function zt(n){if(n===ti)throw Error(i(174));return n}function Ko(n,e){switch(Nn(ii,e),Nn(ri,n),Nn(We,ti),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Z(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Z(e,n)}Bn(We),Nn(We,e)}function Sr(){Bn(We),Bn(ri),Bn(ii)}function oc(n){zt(ii.current);var e=zt(We.current),r=Z(e,n.type);e!==r&&(Nn(ri,n),Nn(We,r))}function Yo(n){ri.current===n&&(Bn(We),Bn(ri))}var Gn=At(0);function dl(n){for(var e=n;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xo=[];function Zo(){for(var n=0;n<Xo.length;n++)Xo[n]._workInProgressVersionPrimary=null;Xo.length=0}var fl=ln.ReactCurrentDispatcher,na=ln.ReactCurrentBatchConfig,Gt=0,Hn=null,Qn=null,Kn=null,ml=!1,li=!1,oi=0,qm=0;function ie(){throw Error(i(321))}function ea(n,e){if(e===null)return!1;for(var r=0;r<e.length&&r<n.length;r++)if(!Ne(n[r],e[r]))return!1;return!0}function ta(n,e,r,o,p,d){if(Gt=d,Hn=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fl.current=n===null||n.memoizedState===null?$m:Km,n=r(o,p),li){d=0;do{if(li=!1,oi=0,25<=d)throw Error(i(301));d+=1,Kn=Qn=null,e.updateQueue=null,fl.current=Ym,n=r(o,p)}while(li)}if(fl.current=yl,e=Qn!==null&&Qn.next!==null,Gt=0,Kn=Qn=Hn=null,ml=!1,e)throw Error(i(300));return n}function ra(){var n=oi!==0;return oi=0,n}function Je(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Kn===null?Hn.memoizedState=Kn=n:Kn=Kn.next=n,Kn}function Re(){if(Qn===null){var n=Hn.alternate;n=n!==null?n.memoizedState:null}else n=Qn.next;var e=Kn===null?Hn.memoizedState:Kn.next;if(e!==null)Kn=e,Qn=n;else{if(n===null)throw Error(i(310));Qn=n,n={memoizedState:Qn.memoizedState,baseState:Qn.baseState,baseQueue:Qn.baseQueue,queue:Qn.queue,next:null},Kn===null?Hn.memoizedState=Kn=n:Kn=Kn.next=n}return Kn}function ai(n,e){return typeof e=="function"?e(n):e}function ia(n){var e=Re(),r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var o=Qn,p=o.baseQueue,d=r.pending;if(d!==null){if(p!==null){var y=p.next;p.next=d.next,d.next=y}o.baseQueue=p=d,r.pending=null}if(p!==null){d=p.next,o=o.baseState;var C=y=null,x=null,b=d;do{var j=b.lane;if((Gt&j)===j)x!==null&&(x=x.next={lane:0,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null}),o=b.hasEagerState?b.eagerState:n(o,b.action);else{var U={lane:j,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null};x===null?(C=x=U,y=o):x=x.next=U,Hn.lanes|=j,Ht|=j}b=b.next}while(b!==null&&b!==d);x===null?y=o:x.next=C,Ne(o,e.memoizedState)||(me=!0),e.memoizedState=o,e.baseState=y,e.baseQueue=x,r.lastRenderedState=o}if(n=r.interleaved,n!==null){p=n;do d=p.lane,Hn.lanes|=d,Ht|=d,p=p.next;while(p!==n)}else p===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function la(n){var e=Re(),r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var o=r.dispatch,p=r.pending,d=e.memoizedState;if(p!==null){r.pending=null;var y=p=p.next;do d=n(d,y.action),y=y.next;while(y!==p);Ne(d,e.memoizedState)||(me=!0),e.memoizedState=d,e.baseQueue===null&&(e.baseState=d),r.lastRenderedState=d}return[d,o]}function ac(){}function sc(n,e){var r=Hn,o=Re(),p=e(),d=!Ne(o.memoizedState,p);if(d&&(o.memoizedState=p,me=!0),o=o.queue,oa(pc.bind(null,r,o,n),[n]),o.getSnapshot!==e||d||Kn!==null&&Kn.memoizedState.tag&1){if(r.flags|=2048,si(9,cc.bind(null,r,o,p,e),void 0,null),Yn===null)throw Error(i(349));(Gt&30)!==0||uc(r,e,p)}return p}function uc(n,e,r){n.flags|=16384,n={getSnapshot:e,value:r},e=Hn.updateQueue,e===null?(e={lastEffect:null,stores:null},Hn.updateQueue=e,e.stores=[n]):(r=e.stores,r===null?e.stores=[n]:r.push(n))}function cc(n,e,r,o){e.value=r,e.getSnapshot=o,dc(e)&&fc(n)}function pc(n,e,r){return r(function(){dc(e)&&fc(n)})}function dc(n){var e=n.getSnapshot;n=n.value;try{var r=e();return!Ne(n,r)}catch{return!0}}function fc(n){var e=rt(n,1);e!==null&&He(e,n,1,-1)}function mc(n){var e=Je();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ai,lastRenderedState:n},e.queue=n,n=n.dispatch=Qm.bind(null,Hn,n),[e.memoizedState,n]}function si(n,e,r,o){return n={tag:n,create:e,destroy:r,deps:o,next:null},e=Hn.updateQueue,e===null?(e={lastEffect:null,stores:null},Hn.updateQueue=e,e.lastEffect=n.next=n):(r=e.lastEffect,r===null?e.lastEffect=n.next=n:(o=r.next,r.next=n,n.next=o,e.lastEffect=n)),n}function gc(){return Re().memoizedState}function gl(n,e,r,o){var p=Je();Hn.flags|=n,p.memoizedState=si(1|e,r,void 0,o===void 0?null:o)}function hl(n,e,r,o){var p=Re();o=o===void 0?null:o;var d=void 0;if(Qn!==null){var y=Qn.memoizedState;if(d=y.destroy,o!==null&&ea(o,y.deps)){p.memoizedState=si(e,r,d,o);return}}Hn.flags|=n,p.memoizedState=si(1|e,r,d,o)}function hc(n,e){return gl(8390656,8,n,e)}function oa(n,e){return hl(2048,8,n,e)}function yc(n,e){return hl(4,2,n,e)}function Ac(n,e){return hl(4,4,n,e)}function Sc(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function kc(n,e,r){return r=r!=null?r.concat([n]):null,hl(4,4,Sc.bind(null,e,n),r)}function aa(){}function vc(n,e){var r=Re();e=e===void 0?null:e;var o=r.memoizedState;return o!==null&&e!==null&&ea(e,o[1])?o[0]:(r.memoizedState=[n,e],n)}function Cc(n,e){var r=Re();e=e===void 0?null:e;var o=r.memoizedState;return o!==null&&e!==null&&ea(e,o[1])?o[0]:(n=n(),r.memoizedState=[n,e],n)}function wc(n,e,r){return(Gt&21)===0?(n.baseState&&(n.baseState=!1,me=!0),n.memoizedState=r):(Ne(r,e)||(r=Zs(),Hn.lanes|=r,Ht|=r,n.baseState=!0),e)}function Wm(n,e){var r=bn;bn=r!==0&&4>r?r:4,n(!0);var o=na.transition;na.transition={};try{n(!1),e()}finally{bn=r,na.transition=o}}function xc(){return Re().memoizedState}function Jm(n,e,r){var o=Et(n);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},Ic(n))Ec(e,r);else if(r=tc(n,e,r,o),r!==null){var p=ce();He(r,n,o,p),_c(r,e,o)}}function Qm(n,e,r){var o=Et(n),p={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(Ic(n))Ec(e,p);else{var d=n.alternate;if(n.lanes===0&&(d===null||d.lanes===0)&&(d=e.lastRenderedReducer,d!==null))try{var y=e.lastRenderedState,C=d(y,r);if(p.hasEagerState=!0,p.eagerState=C,Ne(C,y)){var x=e.interleaved;x===null?(p.next=p,Qo(e)):(p.next=x.next,x.next=p),e.interleaved=p;return}}catch{}finally{}r=tc(n,e,p,o),r!==null&&(p=ce(),He(r,n,o,p),_c(r,e,o))}}function Ic(n){var e=n.alternate;return n===Hn||e!==null&&e===Hn}function Ec(n,e){li=ml=!0;var r=n.pending;r===null?e.next=e:(e.next=r.next,r.next=e),n.pending=e}function _c(n,e,r){if((r&4194240)!==0){var o=e.lanes;o&=n.pendingLanes,r|=o,e.lanes=r,so(n,r)}}var yl={readContext:Me,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},$m={readContext:Me,useCallback:function(n,e){return Je().memoizedState=[n,e===void 0?null:e],n},useContext:Me,useEffect:hc,useImperativeHandle:function(n,e,r){return r=r!=null?r.concat([n]):null,gl(4194308,4,Sc.bind(null,e,n),r)},useLayoutEffect:function(n,e){return gl(4194308,4,n,e)},useInsertionEffect:function(n,e){return gl(4,2,n,e)},useMemo:function(n,e){var r=Je();return e=e===void 0?null:e,n=n(),r.memoizedState=[n,e],n},useReducer:function(n,e,r){var o=Je();return e=r!==void 0?r(e):e,o.memoizedState=o.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},o.queue=n,n=n.dispatch=Jm.bind(null,Hn,n),[o.memoizedState,n]},useRef:function(n){var e=Je();return n={current:n},e.memoizedState=n},useState:mc,useDebugValue:aa,useDeferredValue:function(n){return Je().memoizedState=n},useTransition:function(){var n=mc(!1),e=n[0];return n=Wm.bind(null,n[1]),Je().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,r){var o=Hn,p=Je();if(zn){if(r===void 0)throw Error(i(407));r=r()}else{if(r=e(),Yn===null)throw Error(i(349));(Gt&30)!==0||uc(o,e,r)}p.memoizedState=r;var d={value:r,getSnapshot:e};return p.queue=d,hc(pc.bind(null,o,d,n),[n]),o.flags|=2048,si(9,cc.bind(null,o,d,r,e),void 0,null),r},useId:function(){var n=Je(),e=Yn.identifierPrefix;if(zn){var r=tt,o=et;r=(o&~(1<<32-Oe(o)-1)).toString(32)+r,e=":"+e+"R"+r,r=oi++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=qm++,e=":"+e+"r"+r.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Km={readContext:Me,useCallback:vc,useContext:Me,useEffect:oa,useImperativeHandle:kc,useInsertionEffect:yc,useLayoutEffect:Ac,useMemo:Cc,useReducer:ia,useRef:gc,useState:function(){return ia(ai)},useDebugValue:aa,useDeferredValue:function(n){var e=Re();return wc(e,Qn.memoizedState,n)},useTransition:function(){var n=ia(ai)[0],e=Re().memoizedState;return[n,e]},useMutableSource:ac,useSyncExternalStore:sc,useId:xc,unstable_isNewReconciler:!1},Ym={readContext:Me,useCallback:vc,useContext:Me,useEffect:oa,useImperativeHandle:kc,useInsertionEffect:yc,useLayoutEffect:Ac,useMemo:Cc,useReducer:la,useRef:gc,useState:function(){return la(ai)},useDebugValue:aa,useDeferredValue:function(n){var e=Re();return Qn===null?e.memoizedState=n:wc(e,Qn.memoizedState,n)},useTransition:function(){var n=la(ai)[0],e=Re().memoizedState;return[n,e]},useMutableSource:ac,useSyncExternalStore:sc,useId:xc,unstable_isNewReconciler:!1};function Be(n,e){if(n&&n.defaultProps){e=v({},e),n=n.defaultProps;for(var r in n)e[r]===void 0&&(e[r]=n[r]);return e}return e}function sa(n,e,r,o){e=n.memoizedState,r=r(o,e),r=r==null?e:v({},e,r),n.memoizedState=r,n.lanes===0&&(n.updateQueue.baseState=r)}var Al={isMounted:function(n){return(n=n._reactInternals)?bt(n)===n:!1},enqueueSetState:function(n,e,r){n=n._reactInternals;var o=ce(),p=Et(n),d=it(o,p);d.payload=e,r!=null&&(d.callback=r),e=Ct(n,d,p),e!==null&&(He(e,n,p,o),cl(e,n,p))},enqueueReplaceState:function(n,e,r){n=n._reactInternals;var o=ce(),p=Et(n),d=it(o,p);d.tag=1,d.payload=e,r!=null&&(d.callback=r),e=Ct(n,d,p),e!==null&&(He(e,n,p,o),cl(e,n,p))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var r=ce(),o=Et(n),p=it(r,o);p.tag=2,e!=null&&(p.callback=e),e=Ct(n,p,o),e!==null&&(He(e,n,o,r),cl(e,n,o))}};function Pc(n,e,r,o,p,d,y){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(o,d,y):e.prototype&&e.prototype.isPureReactComponent?!Qr(r,o)||!Qr(p,d):!0}function Lc(n,e,r){var o=!1,p=St,d=e.contextType;return typeof d=="object"&&d!==null?d=Me(d):(p=fe(e)?Ot:re.current,o=e.contextTypes,d=(o=o!=null)?dr(n,p):St),e=new e(r,d),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Al,n.stateNode=e,e._reactInternals=n,o&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=d),e}function Mc(n,e,r,o){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,o),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,o),e.state!==n&&Al.enqueueReplaceState(e,e.state,null)}function ua(n,e,r,o){var p=n.stateNode;p.props=r,p.state=n.memoizedState,p.refs={},$o(n);var d=e.contextType;typeof d=="object"&&d!==null?p.context=Me(d):(d=fe(e)?Ot:re.current,p.context=dr(n,d)),p.state=n.memoizedState,d=e.getDerivedStateFromProps,typeof d=="function"&&(sa(n,e,d,r),p.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(e=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),e!==p.state&&Al.enqueueReplaceState(p,p.state,null),pl(n,r,p,o),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function kr(n,e){try{var r="",o=e;do r+=Cn(o),o=o.return;while(o);var p=r}catch(d){p=`
Error generating stack: `+d.message+`
`+d.stack}return{value:n,source:e,stack:p,digest:null}}function ca(n,e,r){return{value:n,source:null,stack:r??null,digest:e??null}}function pa(n,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var Xm=typeof WeakMap=="function"?WeakMap:Map;function Rc(n,e,r){r=it(-1,r),r.tag=3,r.payload={element:null};var o=e.value;return r.callback=function(){Il||(Il=!0,Ea=o),pa(n,e)},r}function Tc(n,e,r){r=it(-1,r),r.tag=3;var o=n.type.getDerivedStateFromError;if(typeof o=="function"){var p=e.value;r.payload=function(){return o(p)},r.callback=function(){pa(n,e)}}var d=n.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(r.callback=function(){pa(n,e),typeof o!="function"&&(xt===null?xt=new Set([this]):xt.add(this));var y=e.stack;this.componentDidCatch(e.value,{componentStack:y!==null?y:""})}),r}function bc(n,e,r){var o=n.pingCache;if(o===null){o=n.pingCache=new Xm;var p=new Set;o.set(e,p)}else p=o.get(e),p===void 0&&(p=new Set,o.set(e,p));p.has(r)||(p.add(r),n=dg.bind(null,n,e,r),e.then(n,n))}function Dc(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Oc(n,e,r,o,p){return(n.mode&1)===0?(n===e?n.flags|=65536:(n.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=it(-1,1),e.tag=2,Ct(r,e,1))),r.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var Zm=ln.ReactCurrentOwner,me=!1;function ue(n,e,r,o){e.child=n===null?ec(e,null,r,o):hr(e,n.child,r,o)}function Nc(n,e,r,o,p){r=r.render;var d=e.ref;return Ar(e,p),o=ta(n,e,r,o,d,p),r=ra(),n!==null&&!me?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~p,lt(n,e,p)):(zn&&r&&zo(e),e.flags|=1,ue(n,e,o,p),e.child)}function Fc(n,e,r,o,p){if(n===null){var d=r.type;return typeof d=="function"&&!ba(d)&&d.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=d,Bc(n,e,d,o,p)):(n=Rl(r.type,null,o,e,e.mode,p),n.ref=e.ref,n.return=e,e.child=n)}if(d=n.child,(n.lanes&p)===0){var y=d.memoizedProps;if(r=r.compare,r=r!==null?r:Qr,r(y,o)&&n.ref===e.ref)return lt(n,e,p)}return e.flags|=1,n=Pt(d,o),n.ref=e.ref,n.return=e,e.child=n}function Bc(n,e,r,o,p){if(n!==null){var d=n.memoizedProps;if(Qr(d,o)&&n.ref===e.ref)if(me=!1,e.pendingProps=o=d,(n.lanes&p)!==0)(n.flags&131072)!==0&&(me=!0);else return e.lanes=n.lanes,lt(n,e,p)}return da(n,e,r,o,p)}function zc(n,e,r){var o=e.pendingProps,p=o.children,d=n!==null?n.memoizedState:null;if(o.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Nn(Cr,xe),xe|=r;else{if((r&1073741824)===0)return n=d!==null?d.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Nn(Cr,xe),xe|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=d!==null?d.baseLanes:r,Nn(Cr,xe),xe|=o}else d!==null?(o=d.baseLanes|r,e.memoizedState=null):o=r,Nn(Cr,xe),xe|=o;return ue(n,e,p,r),e.child}function Gc(n,e){var r=e.ref;(n===null&&r!==null||n!==null&&n.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function da(n,e,r,o,p){var d=fe(r)?Ot:re.current;return d=dr(e,d),Ar(e,p),r=ta(n,e,r,o,d,p),o=ra(),n!==null&&!me?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~p,lt(n,e,p)):(zn&&o&&zo(e),e.flags|=1,ue(n,e,r,p),e.child)}function Hc(n,e,r,o,p){if(fe(r)){var d=!0;tl(e)}else d=!1;if(Ar(e,p),e.stateNode===null)kl(n,e),Lc(e,r,o),ua(e,r,o,p),o=!0;else if(n===null){var y=e.stateNode,C=e.memoizedProps;y.props=C;var x=y.context,b=r.contextType;typeof b=="object"&&b!==null?b=Me(b):(b=fe(r)?Ot:re.current,b=dr(e,b));var j=r.getDerivedStateFromProps,U=typeof j=="function"||typeof y.getSnapshotBeforeUpdate=="function";U||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(C!==o||x!==b)&&Mc(e,y,o,b),vt=!1;var H=e.memoizedState;y.state=H,pl(e,o,y,p),x=e.memoizedState,C!==o||H!==x||de.current||vt?(typeof j=="function"&&(sa(e,r,j,o),x=e.memoizedState),(C=vt||Pc(e,r,C,o,H,x,b))?(U||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount()),typeof y.componentDidMount=="function"&&(e.flags|=4194308)):(typeof y.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=o,e.memoizedState=x),y.props=o,y.state=x,y.context=b,o=C):(typeof y.componentDidMount=="function"&&(e.flags|=4194308),o=!1)}else{y=e.stateNode,rc(n,e),C=e.memoizedProps,b=e.type===e.elementType?C:Be(e.type,C),y.props=b,U=e.pendingProps,H=y.context,x=r.contextType,typeof x=="object"&&x!==null?x=Me(x):(x=fe(r)?Ot:re.current,x=dr(e,x));var en=r.getDerivedStateFromProps;(j=typeof en=="function"||typeof y.getSnapshotBeforeUpdate=="function")||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(C!==U||H!==x)&&Mc(e,y,o,x),vt=!1,H=e.memoizedState,y.state=H,pl(e,o,y,p);var on=e.memoizedState;C!==U||H!==on||de.current||vt?(typeof en=="function"&&(sa(e,r,en,o),on=e.memoizedState),(b=vt||Pc(e,r,b,o,H,on,x)||!1)?(j||typeof y.UNSAFE_componentWillUpdate!="function"&&typeof y.componentWillUpdate!="function"||(typeof y.componentWillUpdate=="function"&&y.componentWillUpdate(o,on,x),typeof y.UNSAFE_componentWillUpdate=="function"&&y.UNSAFE_componentWillUpdate(o,on,x)),typeof y.componentDidUpdate=="function"&&(e.flags|=4),typeof y.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof y.componentDidUpdate!="function"||C===n.memoizedProps&&H===n.memoizedState||(e.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||C===n.memoizedProps&&H===n.memoizedState||(e.flags|=1024),e.memoizedProps=o,e.memoizedState=on),y.props=o,y.state=on,y.context=x,o=b):(typeof y.componentDidUpdate!="function"||C===n.memoizedProps&&H===n.memoizedState||(e.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||C===n.memoizedProps&&H===n.memoizedState||(e.flags|=1024),o=!1)}return fa(n,e,r,o,d,p)}function fa(n,e,r,o,p,d){Gc(n,e);var y=(e.flags&128)!==0;if(!o&&!y)return p&&Wu(e,r,!1),lt(n,e,d);o=e.stateNode,Zm.current=e;var C=y&&typeof r.getDerivedStateFromError!="function"?null:o.render();return e.flags|=1,n!==null&&y?(e.child=hr(e,n.child,null,d),e.child=hr(e,null,C,d)):ue(n,e,C,d),e.memoizedState=o.state,p&&Wu(e,r,!0),e.child}function jc(n){var e=n.stateNode;e.pendingContext?Vu(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Vu(n,e.context,!1),Ko(n,e.containerInfo)}function Uc(n,e,r,o,p){return gr(),Uo(p),e.flags|=256,ue(n,e,r,o),e.child}var ma={dehydrated:null,treeContext:null,retryLane:0};function ga(n){return{baseLanes:n,cachePool:null,transitions:null}}function Vc(n,e,r){var o=e.pendingProps,p=Gn.current,d=!1,y=(e.flags&128)!==0,C;if((C=y)||(C=n!==null&&n.memoizedState===null?!1:(p&2)!==0),C?(d=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Nn(Gn,p&1),n===null)return jo(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((e.mode&1)===0?e.lanes=1:n.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(y=o.children,n=o.fallback,d?(o=e.mode,d=e.child,y={mode:"hidden",children:y},(o&1)===0&&d!==null?(d.childLanes=0,d.pendingProps=y):d=Tl(y,o,0,null),n=qt(n,o,r,null),d.return=e,n.return=e,d.sibling=n,e.child=d,e.child.memoizedState=ga(r),e.memoizedState=ma,n):ha(e,y));if(p=n.memoizedState,p!==null&&(C=p.dehydrated,C!==null))return ng(n,e,y,o,C,p,r);if(d){d=o.fallback,y=e.mode,p=n.child,C=p.sibling;var x={mode:"hidden",children:o.children};return(y&1)===0&&e.child!==p?(o=e.child,o.childLanes=0,o.pendingProps=x,e.deletions=null):(o=Pt(p,x),o.subtreeFlags=p.subtreeFlags&14680064),C!==null?d=Pt(C,d):(d=qt(d,y,r,null),d.flags|=2),d.return=e,o.return=e,o.sibling=d,e.child=o,o=d,d=e.child,y=n.child.memoizedState,y=y===null?ga(r):{baseLanes:y.baseLanes|r,cachePool:null,transitions:y.transitions},d.memoizedState=y,d.childLanes=n.childLanes&~r,e.memoizedState=ma,o}return d=n.child,n=d.sibling,o=Pt(d,{mode:"visible",children:o.children}),(e.mode&1)===0&&(o.lanes=r),o.return=e,o.sibling=null,n!==null&&(r=e.deletions,r===null?(e.deletions=[n],e.flags|=16):r.push(n)),e.child=o,e.memoizedState=null,o}function ha(n,e){return e=Tl({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Sl(n,e,r,o){return o!==null&&Uo(o),hr(e,n.child,null,r),n=ha(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function ng(n,e,r,o,p,d,y){if(r)return e.flags&256?(e.flags&=-257,o=ca(Error(i(422))),Sl(n,e,y,o)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(d=o.fallback,p=e.mode,o=Tl({mode:"visible",children:o.children},p,0,null),d=qt(d,p,y,null),d.flags|=2,o.return=e,d.return=e,o.sibling=d,e.child=o,(e.mode&1)!==0&&hr(e,n.child,null,y),e.child.memoizedState=ga(y),e.memoizedState=ma,d);if((e.mode&1)===0)return Sl(n,e,y,null);if(p.data==="$!"){if(o=p.nextSibling&&p.nextSibling.dataset,o)var C=o.dgst;return o=C,d=Error(i(419)),o=ca(d,o,void 0),Sl(n,e,y,o)}if(C=(y&n.childLanes)!==0,me||C){if(o=Yn,o!==null){switch(y&-y){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(o.suspendedLanes|y))!==0?0:p,p!==0&&p!==d.retryLane&&(d.retryLane=p,rt(n,p),He(o,n,p,-1))}return Ta(),o=ca(Error(i(421))),Sl(n,e,y,o)}return p.data==="$?"?(e.flags|=128,e.child=n.child,e=fg.bind(null,n),p._reactRetry=e,null):(n=d.treeContext,we=yt(p.nextSibling),Ce=e,zn=!0,Fe=null,n!==null&&(Pe[Le++]=et,Pe[Le++]=tt,Pe[Le++]=Nt,et=n.id,tt=n.overflow,Nt=e),e=ha(e,o.children),e.flags|=4096,e)}function qc(n,e,r){n.lanes|=e;var o=n.alternate;o!==null&&(o.lanes|=e),Jo(n.return,e,r)}function ya(n,e,r,o,p){var d=n.memoizedState;d===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:p}:(d.isBackwards=e,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=r,d.tailMode=p)}function Wc(n,e,r){var o=e.pendingProps,p=o.revealOrder,d=o.tail;if(ue(n,e,o.children,r),o=Gn.current,(o&2)!==0)o=o&1|2,e.flags|=128;else{if(n!==null&&(n.flags&128)!==0)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&qc(n,r,e);else if(n.tag===19)qc(n,r,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}o&=1}if(Nn(Gn,o),(e.mode&1)===0)e.memoizedState=null;else switch(p){case"forwards":for(r=e.child,p=null;r!==null;)n=r.alternate,n!==null&&dl(n)===null&&(p=r),r=r.sibling;r=p,r===null?(p=e.child,e.child=null):(p=r.sibling,r.sibling=null),ya(e,!1,p,r,d);break;case"backwards":for(r=null,p=e.child,e.child=null;p!==null;){if(n=p.alternate,n!==null&&dl(n)===null){e.child=p;break}n=p.sibling,p.sibling=r,r=p,p=n}ya(e,!0,r,null,d);break;case"together":ya(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function kl(n,e){(e.mode&1)===0&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function lt(n,e,r){if(n!==null&&(e.dependencies=n.dependencies),Ht|=e.lanes,(r&e.childLanes)===0)return null;if(n!==null&&e.child!==n.child)throw Error(i(153));if(e.child!==null){for(n=e.child,r=Pt(n,n.pendingProps),e.child=r,r.return=e;n.sibling!==null;)n=n.sibling,r=r.sibling=Pt(n,n.pendingProps),r.return=e;r.sibling=null}return e.child}function eg(n,e,r){switch(e.tag){case 3:jc(e),gr();break;case 5:oc(e);break;case 1:fe(e.type)&&tl(e);break;case 4:Ko(e,e.stateNode.containerInfo);break;case 10:var o=e.type._context,p=e.memoizedProps.value;Nn(sl,o._currentValue),o._currentValue=p;break;case 13:if(o=e.memoizedState,o!==null)return o.dehydrated!==null?(Nn(Gn,Gn.current&1),e.flags|=128,null):(r&e.child.childLanes)!==0?Vc(n,e,r):(Nn(Gn,Gn.current&1),n=lt(n,e,r),n!==null?n.sibling:null);Nn(Gn,Gn.current&1);break;case 19:if(o=(r&e.childLanes)!==0,(n.flags&128)!==0){if(o)return Wc(n,e,r);e.flags|=128}if(p=e.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Nn(Gn,Gn.current),o)break;return null;case 22:case 23:return e.lanes=0,zc(n,e,r)}return lt(n,e,r)}var Jc,Aa,Qc,$c;Jc=function(n,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)n.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Aa=function(){},Qc=function(n,e,r,o){var p=n.memoizedProps;if(p!==o){n=e.stateNode,zt(We.current);var d=null;switch(r){case"input":p=Lr(n,p),o=Lr(n,o),d=[];break;case"select":p=v({},p,{value:void 0}),o=v({},o,{value:void 0}),d=[];break;case"textarea":p=Tr(n,p),o=Tr(n,o),d=[];break;default:typeof p.onClick!="function"&&typeof o.onClick=="function"&&(n.onclick=Zi)}ne(r,o);var y;r=null;for(b in p)if(!o.hasOwnProperty(b)&&p.hasOwnProperty(b)&&p[b]!=null)if(b==="style"){var C=p[b];for(y in C)C.hasOwnProperty(y)&&(r||(r={}),r[y]="")}else b!=="dangerouslySetInnerHTML"&&b!=="children"&&b!=="suppressContentEditableWarning"&&b!=="suppressHydrationWarning"&&b!=="autoFocus"&&(s.hasOwnProperty(b)?d||(d=[]):(d=d||[]).push(b,null));for(b in o){var x=o[b];if(C=p!=null?p[b]:void 0,o.hasOwnProperty(b)&&x!==C&&(x!=null||C!=null))if(b==="style")if(C){for(y in C)!C.hasOwnProperty(y)||x&&x.hasOwnProperty(y)||(r||(r={}),r[y]="");for(y in x)x.hasOwnProperty(y)&&C[y]!==x[y]&&(r||(r={}),r[y]=x[y])}else r||(d||(d=[]),d.push(b,r)),r=x;else b==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,C=C?C.__html:void 0,x!=null&&C!==x&&(d=d||[]).push(b,x)):b==="children"?typeof x!="string"&&typeof x!="number"||(d=d||[]).push(b,""+x):b!=="suppressContentEditableWarning"&&b!=="suppressHydrationWarning"&&(s.hasOwnProperty(b)?(x!=null&&b==="onScroll"&&Fn("scroll",n),d||C===x||(d=[])):(d=d||[]).push(b,x))}r&&(d=d||[]).push("style",r);var b=d;(e.updateQueue=b)&&(e.flags|=4)}},$c=function(n,e,r,o){r!==o&&(e.flags|=4)};function ui(n,e){if(!zn)switch(n.tailMode){case"hidden":e=n.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?n.tail=null:r.sibling=null;break;case"collapsed":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:o.sibling=null}}function le(n){var e=n.alternate!==null&&n.alternate.child===n.child,r=0,o=0;if(e)for(var p=n.child;p!==null;)r|=p.lanes|p.childLanes,o|=p.subtreeFlags&14680064,o|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)r|=p.lanes|p.childLanes,o|=p.subtreeFlags,o|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=o,n.childLanes=r,e}function tg(n,e,r){var o=e.pendingProps;switch(Go(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(e),null;case 1:return fe(e.type)&&el(),le(e),null;case 3:return o=e.stateNode,Sr(),Bn(de),Bn(re),Zo(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(ol(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Fe!==null&&(La(Fe),Fe=null))),Aa(n,e),le(e),null;case 5:Yo(e);var p=zt(ii.current);if(r=e.type,n!==null&&e.stateNode!=null)Qc(n,e,r,o,p),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!o){if(e.stateNode===null)throw Error(i(166));return le(e),null}if(n=zt(We.current),ol(e)){o=e.stateNode,r=e.type;var d=e.memoizedProps;switch(o[qe]=e,o[Zr]=d,n=(e.mode&1)!==0,r){case"dialog":Fn("cancel",o),Fn("close",o);break;case"iframe":case"object":case"embed":Fn("load",o);break;case"video":case"audio":for(p=0;p<Kr.length;p++)Fn(Kr[p],o);break;case"source":Fn("error",o);break;case"img":case"image":case"link":Fn("error",o),Fn("load",o);break;case"details":Fn("toggle",o);break;case"input":Mr(o,d),Fn("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!d.multiple},Fn("invalid",o);break;case"textarea":Li(o,d),Fn("invalid",o)}ne(r,d),p=null;for(var y in d)if(d.hasOwnProperty(y)){var C=d[y];y==="children"?typeof C=="string"?o.textContent!==C&&(d.suppressHydrationWarning!==!0&&Xi(o.textContent,C,n),p=["children",C]):typeof C=="number"&&o.textContent!==""+C&&(d.suppressHydrationWarning!==!0&&Xi(o.textContent,C,n),p=["children",""+C]):s.hasOwnProperty(y)&&C!=null&&y==="onScroll"&&Fn("scroll",o)}switch(r){case"input":Ye(o),Pi(o,d,!0);break;case"textarea":Ye(o),Ri(o);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(o.onclick=Zi)}o=p,e.updateQueue=o,o!==null&&(e.flags|=4)}else{y=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=N(r)),n==="http://www.w3.org/1999/xhtml"?r==="script"?(n=y.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof o.is=="string"?n=y.createElement(r,{is:o.is}):(n=y.createElement(r),r==="select"&&(y=n,o.multiple?y.multiple=!0:o.size&&(y.size=o.size))):n=y.createElementNS(n,r),n[qe]=e,n[Zr]=o,Jc(n,e,!1,!1),e.stateNode=n;n:{switch(y=Ue(r,o),r){case"dialog":Fn("cancel",n),Fn("close",n),p=o;break;case"iframe":case"object":case"embed":Fn("load",n),p=o;break;case"video":case"audio":for(p=0;p<Kr.length;p++)Fn(Kr[p],n);p=o;break;case"source":Fn("error",n),p=o;break;case"img":case"image":case"link":Fn("error",n),Fn("load",n),p=o;break;case"details":Fn("toggle",n),p=o;break;case"input":Mr(n,o),p=Lr(n,o),Fn("invalid",n);break;case"option":p=o;break;case"select":n._wrapperState={wasMultiple:!!o.multiple},p=v({},o,{value:void 0}),Fn("invalid",n);break;case"textarea":Li(n,o),p=Tr(n,o),Fn("invalid",n);break;default:p=o}ne(r,p),C=p;for(d in C)if(C.hasOwnProperty(d)){var x=C[d];d==="style"?ct(n,x):d==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&xn(n,x)):d==="children"?typeof x=="string"?(r!=="textarea"||x!=="")&&Pn(n,x):typeof x=="number"&&Pn(n,""+x):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(s.hasOwnProperty(d)?x!=null&&d==="onScroll"&&Fn("scroll",n):x!=null&&z(n,d,x,y))}switch(r){case"input":Ye(n),Pi(n,o,!1);break;case"textarea":Ye(n),Ri(n);break;case"option":o.value!=null&&n.setAttribute("value",""+wn(o.value));break;case"select":n.multiple=!!o.multiple,d=o.value,d!=null?ut(n,!!o.multiple,d,!1):o.defaultValue!=null&&ut(n,!!o.multiple,o.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=Zi)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break n;case"img":o=!0;break n;default:o=!1}}o&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return le(e),null;case 6:if(n&&e.stateNode!=null)$c(n,e,n.memoizedProps,o);else{if(typeof o!="string"&&e.stateNode===null)throw Error(i(166));if(r=zt(ii.current),zt(We.current),ol(e)){if(o=e.stateNode,r=e.memoizedProps,o[qe]=e,(d=o.nodeValue!==r)&&(n=Ce,n!==null))switch(n.tag){case 3:Xi(o.nodeValue,r,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Xi(o.nodeValue,r,(n.mode&1)!==0)}d&&(e.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[qe]=e,e.stateNode=o}return le(e),null;case 13:if(Bn(Gn),o=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(zn&&we!==null&&(e.mode&1)!==0&&(e.flags&128)===0)Xu(),gr(),e.flags|=98560,d=!1;else if(d=ol(e),o!==null&&o.dehydrated!==null){if(n===null){if(!d)throw Error(i(318));if(d=e.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(i(317));d[qe]=e}else gr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;le(e),d=!1}else Fe!==null&&(La(Fe),Fe=null),d=!0;if(!d)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=r,e):(o=o!==null,o!==(n!==null&&n.memoizedState!==null)&&o&&(e.child.flags|=8192,(e.mode&1)!==0&&(n===null||(Gn.current&1)!==0?$n===0&&($n=3):Ta())),e.updateQueue!==null&&(e.flags|=4),le(e),null);case 4:return Sr(),Aa(n,e),n===null&&Yr(e.stateNode.containerInfo),le(e),null;case 10:return Wo(e.type._context),le(e),null;case 17:return fe(e.type)&&el(),le(e),null;case 19:if(Bn(Gn),d=e.memoizedState,d===null)return le(e),null;if(o=(e.flags&128)!==0,y=d.rendering,y===null)if(o)ui(d,!1);else{if($n!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(y=dl(n),y!==null){for(e.flags|=128,ui(d,!1),o=y.updateQueue,o!==null&&(e.updateQueue=o,e.flags|=4),e.subtreeFlags=0,o=r,r=e.child;r!==null;)d=r,n=o,d.flags&=14680066,y=d.alternate,y===null?(d.childLanes=0,d.lanes=n,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=y.childLanes,d.lanes=y.lanes,d.child=y.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=y.memoizedProps,d.memoizedState=y.memoizedState,d.updateQueue=y.updateQueue,d.type=y.type,n=y.dependencies,d.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),r=r.sibling;return Nn(Gn,Gn.current&1|2),e.child}n=n.sibling}d.tail!==null&&Un()>wr&&(e.flags|=128,o=!0,ui(d,!1),e.lanes=4194304)}else{if(!o)if(n=dl(y),n!==null){if(e.flags|=128,o=!0,r=n.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),ui(d,!0),d.tail===null&&d.tailMode==="hidden"&&!y.alternate&&!zn)return le(e),null}else 2*Un()-d.renderingStartTime>wr&&r!==1073741824&&(e.flags|=128,o=!0,ui(d,!1),e.lanes=4194304);d.isBackwards?(y.sibling=e.child,e.child=y):(r=d.last,r!==null?r.sibling=y:e.child=y,d.last=y)}return d.tail!==null?(e=d.tail,d.rendering=e,d.tail=e.sibling,d.renderingStartTime=Un(),e.sibling=null,r=Gn.current,Nn(Gn,o?r&1|2:r&1),e):(le(e),null);case 22:case 23:return Ra(),o=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==o&&(e.flags|=8192),o&&(e.mode&1)!==0?(xe&1073741824)!==0&&(le(e),e.subtreeFlags&6&&(e.flags|=8192)):le(e),null;case 24:return null;case 25:return null}throw Error(i(156,e.tag))}function rg(n,e){switch(Go(e),e.tag){case 1:return fe(e.type)&&el(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Sr(),Bn(de),Bn(re),Zo(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 5:return Yo(e),null;case 13:if(Bn(Gn),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(i(340));gr()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Bn(Gn),null;case 4:return Sr(),null;case 10:return Wo(e.type._context),null;case 22:case 23:return Ra(),null;case 24:return null;default:return null}}var vl=!1,oe=!1,ig=typeof WeakSet=="function"?WeakSet:Set,tn=null;function vr(n,e){var r=n.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){jn(n,e,o)}else r.current=null}function Sa(n,e,r){try{r()}catch(o){jn(n,e,o)}}var Kc=!1;function lg(n,e){if(Ro=Hi,n=Pu(),wo(n)){if("selectionStart"in n)var r={start:n.selectionStart,end:n.selectionEnd};else n:{r=(r=n.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var p=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break n}var y=0,C=-1,x=-1,b=0,j=0,U=n,H=null;e:for(;;){for(var en;U!==r||p!==0&&U.nodeType!==3||(C=y+p),U!==d||o!==0&&U.nodeType!==3||(x=y+o),U.nodeType===3&&(y+=U.nodeValue.length),(en=U.firstChild)!==null;)H=U,U=en;for(;;){if(U===n)break e;if(H===r&&++b===p&&(C=y),H===d&&++j===o&&(x=y),(en=U.nextSibling)!==null)break;U=H,H=U.parentNode}U=en}r=C===-1||x===-1?null:{start:C,end:x}}else r=null}r=r||{start:0,end:0}}else r=null;for(To={focusedElem:n,selectionRange:r},Hi=!1,tn=e;tn!==null;)if(e=tn,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,tn=n;else for(;tn!==null;){e=tn;try{var on=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(on!==null){var an=on.memoizedProps,Vn=on.memoizedState,M=e.stateNode,I=M.getSnapshotBeforeUpdate(e.elementType===e.type?an:Be(e.type,an),Vn);M.__reactInternalSnapshotBeforeUpdate=I}break;case 3:var R=e.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch($){jn(e,e.return,$)}if(n=e.sibling,n!==null){n.return=e.return,tn=n;break}tn=e.return}return on=Kc,Kc=!1,on}function ci(n,e,r){var o=e.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var p=o=o.next;do{if((p.tag&n)===n){var d=p.destroy;p.destroy=void 0,d!==void 0&&Sa(e,r,d)}p=p.next}while(p!==o)}}function Cl(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&n)===n){var o=r.create;r.destroy=o()}r=r.next}while(r!==e)}}function ka(n){var e=n.ref;if(e!==null){var r=n.stateNode;switch(n.tag){case 5:n=r;break;default:n=r}typeof e=="function"?e(n):e.current=n}}function Yc(n){var e=n.alternate;e!==null&&(n.alternate=null,Yc(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[qe],delete e[Zr],delete e[No],delete e[Hm],delete e[jm])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Xc(n){return n.tag===5||n.tag===3||n.tag===4}function Zc(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||Xc(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function va(n,e,r){var o=n.tag;if(o===5||o===6)n=n.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(n,e):r.insertBefore(n,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(n,r)):(e=r,e.appendChild(n)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=Zi));else if(o!==4&&(n=n.child,n!==null))for(va(n,e,r),n=n.sibling;n!==null;)va(n,e,r),n=n.sibling}function Ca(n,e,r){var o=n.tag;if(o===5||o===6)n=n.stateNode,e?r.insertBefore(n,e):r.appendChild(n);else if(o!==4&&(n=n.child,n!==null))for(Ca(n,e,r),n=n.sibling;n!==null;)Ca(n,e,r),n=n.sibling}var ee=null,ze=!1;function wt(n,e,r){for(r=r.child;r!==null;)np(n,e,r),r=r.sibling}function np(n,e,r){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(Oi,r)}catch{}switch(r.tag){case 5:oe||vr(r,e);case 6:var o=ee,p=ze;ee=null,wt(n,e,r),ee=o,ze=p,ee!==null&&(ze?(n=ee,r=r.stateNode,n.nodeType===8?n.parentNode.removeChild(r):n.removeChild(r)):ee.removeChild(r.stateNode));break;case 18:ee!==null&&(ze?(n=ee,r=r.stateNode,n.nodeType===8?Oo(n.parentNode,r):n.nodeType===1&&Oo(n,r),jr(n)):Oo(ee,r.stateNode));break;case 4:o=ee,p=ze,ee=r.stateNode.containerInfo,ze=!0,wt(n,e,r),ee=o,ze=p;break;case 0:case 11:case 14:case 15:if(!oe&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){p=o=o.next;do{var d=p,y=d.destroy;d=d.tag,y!==void 0&&((d&2)!==0||(d&4)!==0)&&Sa(r,e,y),p=p.next}while(p!==o)}wt(n,e,r);break;case 1:if(!oe&&(vr(r,e),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(C){jn(r,e,C)}wt(n,e,r);break;case 21:wt(n,e,r);break;case 22:r.mode&1?(oe=(o=oe)||r.memoizedState!==null,wt(n,e,r),oe=o):wt(n,e,r);break;default:wt(n,e,r)}}function ep(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var r=n.stateNode;r===null&&(r=n.stateNode=new ig),e.forEach(function(o){var p=mg.bind(null,n,o);r.has(o)||(r.add(o),o.then(p,p))})}}function Ge(n,e){var r=e.deletions;if(r!==null)for(var o=0;o<r.length;o++){var p=r[o];try{var d=n,y=e,C=y;n:for(;C!==null;){switch(C.tag){case 5:ee=C.stateNode,ze=!1;break n;case 3:ee=C.stateNode.containerInfo,ze=!0;break n;case 4:ee=C.stateNode.containerInfo,ze=!0;break n}C=C.return}if(ee===null)throw Error(i(160));np(d,y,p),ee=null,ze=!1;var x=p.alternate;x!==null&&(x.return=null),p.return=null}catch(b){jn(p,e,b)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)tp(e,n),e=e.sibling}function tp(n,e){var r=n.alternate,o=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ge(e,n),Qe(n),o&4){try{ci(3,n,n.return),Cl(3,n)}catch(an){jn(n,n.return,an)}try{ci(5,n,n.return)}catch(an){jn(n,n.return,an)}}break;case 1:Ge(e,n),Qe(n),o&512&&r!==null&&vr(r,r.return);break;case 5:if(Ge(e,n),Qe(n),o&512&&r!==null&&vr(r,r.return),n.flags&32){var p=n.stateNode;try{Pn(p,"")}catch(an){jn(n,n.return,an)}}if(o&4&&(p=n.stateNode,p!=null)){var d=n.memoizedProps,y=r!==null?r.memoizedProps:d,C=n.type,x=n.updateQueue;if(n.updateQueue=null,x!==null)try{C==="input"&&d.type==="radio"&&d.name!=null&&Rr(p,d),Ue(C,y);var b=Ue(C,d);for(y=0;y<x.length;y+=2){var j=x[y],U=x[y+1];j==="style"?ct(p,U):j==="dangerouslySetInnerHTML"?xn(p,U):j==="children"?Pn(p,U):z(p,j,U,b)}switch(C){case"input":Zt(p,d);break;case"textarea":Mi(p,d);break;case"select":var H=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!d.multiple;var en=d.value;en!=null?ut(p,!!d.multiple,en,!1):H!==!!d.multiple&&(d.defaultValue!=null?ut(p,!!d.multiple,d.defaultValue,!0):ut(p,!!d.multiple,d.multiple?[]:"",!1))}p[Zr]=d}catch(an){jn(n,n.return,an)}}break;case 6:if(Ge(e,n),Qe(n),o&4){if(n.stateNode===null)throw Error(i(162));p=n.stateNode,d=n.memoizedProps;try{p.nodeValue=d}catch(an){jn(n,n.return,an)}}break;case 3:if(Ge(e,n),Qe(n),o&4&&r!==null&&r.memoizedState.isDehydrated)try{jr(e.containerInfo)}catch(an){jn(n,n.return,an)}break;case 4:Ge(e,n),Qe(n);break;case 13:Ge(e,n),Qe(n),p=n.child,p.flags&8192&&(d=p.memoizedState!==null,p.stateNode.isHidden=d,!d||p.alternate!==null&&p.alternate.memoizedState!==null||(Ia=Un())),o&4&&ep(n);break;case 22:if(j=r!==null&&r.memoizedState!==null,n.mode&1?(oe=(b=oe)||j,Ge(e,n),oe=b):Ge(e,n),Qe(n),o&8192){if(b=n.memoizedState!==null,(n.stateNode.isHidden=b)&&!j&&(n.mode&1)!==0)for(tn=n,j=n.child;j!==null;){for(U=tn=j;tn!==null;){switch(H=tn,en=H.child,H.tag){case 0:case 11:case 14:case 15:ci(4,H,H.return);break;case 1:vr(H,H.return);var on=H.stateNode;if(typeof on.componentWillUnmount=="function"){o=H,r=H.return;try{e=o,on.props=e.memoizedProps,on.state=e.memoizedState,on.componentWillUnmount()}catch(an){jn(o,r,an)}}break;case 5:vr(H,H.return);break;case 22:if(H.memoizedState!==null){lp(U);continue}}en!==null?(en.return=H,tn=en):lp(U)}j=j.sibling}n:for(j=null,U=n;;){if(U.tag===5){if(j===null){j=U;try{p=U.stateNode,b?(d=p.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(C=U.stateNode,x=U.memoizedProps.style,y=x!=null&&x.hasOwnProperty("display")?x.display:null,C.style.display=_e("display",y))}catch(an){jn(n,n.return,an)}}}else if(U.tag===6){if(j===null)try{U.stateNode.nodeValue=b?"":U.memoizedProps}catch(an){jn(n,n.return,an)}}else if((U.tag!==22&&U.tag!==23||U.memoizedState===null||U===n)&&U.child!==null){U.child.return=U,U=U.child;continue}if(U===n)break n;for(;U.sibling===null;){if(U.return===null||U.return===n)break n;j===U&&(j=null),U=U.return}j===U&&(j=null),U.sibling.return=U.return,U=U.sibling}}break;case 19:Ge(e,n),Qe(n),o&4&&ep(n);break;case 21:break;default:Ge(e,n),Qe(n)}}function Qe(n){var e=n.flags;if(e&2){try{n:{for(var r=n.return;r!==null;){if(Xc(r)){var o=r;break n}r=r.return}throw Error(i(160))}switch(o.tag){case 5:var p=o.stateNode;o.flags&32&&(Pn(p,""),o.flags&=-33);var d=Zc(n);Ca(n,d,p);break;case 3:case 4:var y=o.stateNode.containerInfo,C=Zc(n);va(n,C,y);break;default:throw Error(i(161))}}catch(x){jn(n,n.return,x)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function og(n,e,r){tn=n,rp(n)}function rp(n,e,r){for(var o=(n.mode&1)!==0;tn!==null;){var p=tn,d=p.child;if(p.tag===22&&o){var y=p.memoizedState!==null||vl;if(!y){var C=p.alternate,x=C!==null&&C.memoizedState!==null||oe;C=vl;var b=oe;if(vl=y,(oe=x)&&!b)for(tn=p;tn!==null;)y=tn,x=y.child,y.tag===22&&y.memoizedState!==null?op(p):x!==null?(x.return=y,tn=x):op(p);for(;d!==null;)tn=d,rp(d),d=d.sibling;tn=p,vl=C,oe=b}ip(n)}else(p.subtreeFlags&8772)!==0&&d!==null?(d.return=p,tn=d):ip(n)}}function ip(n){for(;tn!==null;){var e=tn;if((e.flags&8772)!==0){var r=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:oe||Cl(5,e);break;case 1:var o=e.stateNode;if(e.flags&4&&!oe)if(r===null)o.componentDidMount();else{var p=e.elementType===e.type?r.memoizedProps:Be(e.type,r.memoizedProps);o.componentDidUpdate(p,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var d=e.updateQueue;d!==null&&lc(e,d,o);break;case 3:var y=e.updateQueue;if(y!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}lc(e,y,r)}break;case 5:var C=e.stateNode;if(r===null&&e.flags&4){r=C;var x=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&r.focus();break;case"img":x.src&&(r.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var b=e.alternate;if(b!==null){var j=b.memoizedState;if(j!==null){var U=j.dehydrated;U!==null&&jr(U)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}oe||e.flags&512&&ka(e)}catch(H){jn(e,e.return,H)}}if(e===n){tn=null;break}if(r=e.sibling,r!==null){r.return=e.return,tn=r;break}tn=e.return}}function lp(n){for(;tn!==null;){var e=tn;if(e===n){tn=null;break}var r=e.sibling;if(r!==null){r.return=e.return,tn=r;break}tn=e.return}}function op(n){for(;tn!==null;){var e=tn;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{Cl(4,e)}catch(x){jn(e,r,x)}break;case 1:var o=e.stateNode;if(typeof o.componentDidMount=="function"){var p=e.return;try{o.componentDidMount()}catch(x){jn(e,p,x)}}var d=e.return;try{ka(e)}catch(x){jn(e,d,x)}break;case 5:var y=e.return;try{ka(e)}catch(x){jn(e,y,x)}}}catch(x){jn(e,e.return,x)}if(e===n){tn=null;break}var C=e.sibling;if(C!==null){C.return=e.return,tn=C;break}tn=e.return}}var ag=Math.ceil,wl=ln.ReactCurrentDispatcher,wa=ln.ReactCurrentOwner,Te=ln.ReactCurrentBatchConfig,Ln=0,Yn=null,Wn=null,te=0,xe=0,Cr=At(0),$n=0,pi=null,Ht=0,xl=0,xa=0,di=null,ge=null,Ia=0,wr=1/0,ot=null,Il=!1,Ea=null,xt=null,El=!1,It=null,_l=0,fi=0,_a=null,Pl=-1,Ll=0;function ce(){return(Ln&6)!==0?Un():Pl!==-1?Pl:Pl=Un()}function Et(n){return(n.mode&1)===0?1:(Ln&2)!==0&&te!==0?te&-te:Vm.transition!==null?(Ll===0&&(Ll=Zs()),Ll):(n=bn,n!==0||(n=window.event,n=n===void 0?16:su(n.type)),n)}function He(n,e,r,o){if(50<fi)throw fi=0,_a=null,Error(i(185));Fr(n,r,o),((Ln&2)===0||n!==Yn)&&(n===Yn&&((Ln&2)===0&&(xl|=r),$n===4&&_t(n,te)),he(n,o),r===1&&Ln===0&&(e.mode&1)===0&&(wr=Un()+500,rl&&kt()))}function he(n,e){var r=n.callbackNode;Vf(n,e);var o=Bi(n,n===Yn?te:0);if(o===0)r!==null&&Ks(r),n.callbackNode=null,n.callbackPriority=0;else if(e=o&-o,n.callbackPriority!==e){if(r!=null&&Ks(r),e===1)n.tag===0?Um(sp.bind(null,n)):Ju(sp.bind(null,n)),zm(function(){(Ln&6)===0&&kt()}),r=null;else{switch(nu(o)){case 1:r=lo;break;case 4:r=Ys;break;case 16:r=Di;break;case 536870912:r=Xs;break;default:r=Di}r=hp(r,ap.bind(null,n))}n.callbackPriority=e,n.callbackNode=r}}function ap(n,e){if(Pl=-1,Ll=0,(Ln&6)!==0)throw Error(i(327));var r=n.callbackNode;if(xr()&&n.callbackNode!==r)return null;var o=Bi(n,n===Yn?te:0);if(o===0)return null;if((o&30)!==0||(o&n.expiredLanes)!==0||e)e=Ml(n,o);else{e=o;var p=Ln;Ln|=2;var d=cp();(Yn!==n||te!==e)&&(ot=null,wr=Un()+500,Ut(n,e));do try{cg();break}catch(C){up(n,C)}while(!0);qo(),wl.current=d,Ln=p,Wn!==null?e=0:(Yn=null,te=0,e=$n)}if(e!==0){if(e===2&&(p=oo(n),p!==0&&(o=p,e=Pa(n,p))),e===1)throw r=pi,Ut(n,0),_t(n,o),he(n,Un()),r;if(e===6)_t(n,o);else{if(p=n.current.alternate,(o&30)===0&&!sg(p)&&(e=Ml(n,o),e===2&&(d=oo(n),d!==0&&(o=d,e=Pa(n,d))),e===1))throw r=pi,Ut(n,0),_t(n,o),he(n,Un()),r;switch(n.finishedWork=p,n.finishedLanes=o,e){case 0:case 1:throw Error(i(345));case 2:Vt(n,ge,ot);break;case 3:if(_t(n,o),(o&130023424)===o&&(e=Ia+500-Un(),10<e)){if(Bi(n,0)!==0)break;if(p=n.suspendedLanes,(p&o)!==o){ce(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Do(Vt.bind(null,n,ge,ot),e);break}Vt(n,ge,ot);break;case 4:if(_t(n,o),(o&4194240)===o)break;for(e=n.eventTimes,p=-1;0<o;){var y=31-Oe(o);d=1<<y,y=e[y],y>p&&(p=y),o&=~d}if(o=p,o=Un()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*ag(o/1960))-o,10<o){n.timeoutHandle=Do(Vt.bind(null,n,ge,ot),o);break}Vt(n,ge,ot);break;case 5:Vt(n,ge,ot);break;default:throw Error(i(329))}}}return he(n,Un()),n.callbackNode===r?ap.bind(null,n):null}function Pa(n,e){var r=di;return n.current.memoizedState.isDehydrated&&(Ut(n,e).flags|=256),n=Ml(n,e),n!==2&&(e=ge,ge=r,e!==null&&La(e)),n}function La(n){ge===null?ge=n:ge.push.apply(ge,n)}function sg(n){for(var e=n;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var p=r[o],d=p.getSnapshot;p=p.value;try{if(!Ne(d(),p))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function _t(n,e){for(e&=~xa,e&=~xl,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var r=31-Oe(e),o=1<<r;n[r]=-1,e&=~o}}function sp(n){if((Ln&6)!==0)throw Error(i(327));xr();var e=Bi(n,0);if((e&1)===0)return he(n,Un()),null;var r=Ml(n,e);if(n.tag!==0&&r===2){var o=oo(n);o!==0&&(e=o,r=Pa(n,o))}if(r===1)throw r=pi,Ut(n,0),_t(n,e),he(n,Un()),r;if(r===6)throw Error(i(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Vt(n,ge,ot),he(n,Un()),null}function Ma(n,e){var r=Ln;Ln|=1;try{return n(e)}finally{Ln=r,Ln===0&&(wr=Un()+500,rl&&kt())}}function jt(n){It!==null&&It.tag===0&&(Ln&6)===0&&xr();var e=Ln;Ln|=1;var r=Te.transition,o=bn;try{if(Te.transition=null,bn=1,n)return n()}finally{bn=o,Te.transition=r,Ln=e,(Ln&6)===0&&kt()}}function Ra(){xe=Cr.current,Bn(Cr)}function Ut(n,e){n.finishedWork=null,n.finishedLanes=0;var r=n.timeoutHandle;if(r!==-1&&(n.timeoutHandle=-1,Bm(r)),Wn!==null)for(r=Wn.return;r!==null;){var o=r;switch(Go(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&el();break;case 3:Sr(),Bn(de),Bn(re),Zo();break;case 5:Yo(o);break;case 4:Sr();break;case 13:Bn(Gn);break;case 19:Bn(Gn);break;case 10:Wo(o.type._context);break;case 22:case 23:Ra()}r=r.return}if(Yn=n,Wn=n=Pt(n.current,null),te=xe=e,$n=0,pi=null,xa=xl=Ht=0,ge=di=null,Bt!==null){for(e=0;e<Bt.length;e++)if(r=Bt[e],o=r.interleaved,o!==null){r.interleaved=null;var p=o.next,d=r.pending;if(d!==null){var y=d.next;d.next=p,o.next=y}r.pending=o}Bt=null}return n}function up(n,e){do{var r=Wn;try{if(qo(),fl.current=yl,ml){for(var o=Hn.memoizedState;o!==null;){var p=o.queue;p!==null&&(p.pending=null),o=o.next}ml=!1}if(Gt=0,Kn=Qn=Hn=null,li=!1,oi=0,wa.current=null,r===null||r.return===null){$n=1,pi=e,Wn=null;break}n:{var d=n,y=r.return,C=r,x=e;if(e=te,C.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var b=x,j=C,U=j.tag;if((j.mode&1)===0&&(U===0||U===11||U===15)){var H=j.alternate;H?(j.updateQueue=H.updateQueue,j.memoizedState=H.memoizedState,j.lanes=H.lanes):(j.updateQueue=null,j.memoizedState=null)}var en=Dc(y);if(en!==null){en.flags&=-257,Oc(en,y,C,d,e),en.mode&1&&bc(d,b,e),e=en,x=b;var on=e.updateQueue;if(on===null){var an=new Set;an.add(x),e.updateQueue=an}else on.add(x);break n}else{if((e&1)===0){bc(d,b,e),Ta();break n}x=Error(i(426))}}else if(zn&&C.mode&1){var Vn=Dc(y);if(Vn!==null){(Vn.flags&65536)===0&&(Vn.flags|=256),Oc(Vn,y,C,d,e),Uo(kr(x,C));break n}}d=x=kr(x,C),$n!==4&&($n=2),di===null?di=[d]:di.push(d),d=y;do{switch(d.tag){case 3:d.flags|=65536,e&=-e,d.lanes|=e;var M=Rc(d,x,e);ic(d,M);break n;case 1:C=x;var I=d.type,R=d.stateNode;if((d.flags&128)===0&&(typeof I.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(xt===null||!xt.has(R)))){d.flags|=65536,e&=-e,d.lanes|=e;var $=Tc(d,C,e);ic(d,$);break n}}d=d.return}while(d!==null)}dp(r)}catch(sn){e=sn,Wn===r&&r!==null&&(Wn=r=r.return);continue}break}while(!0)}function cp(){var n=wl.current;return wl.current=yl,n===null?yl:n}function Ta(){($n===0||$n===3||$n===2)&&($n=4),Yn===null||(Ht&268435455)===0&&(xl&268435455)===0||_t(Yn,te)}function Ml(n,e){var r=Ln;Ln|=2;var o=cp();(Yn!==n||te!==e)&&(ot=null,Ut(n,e));do try{ug();break}catch(p){up(n,p)}while(!0);if(qo(),Ln=r,wl.current=o,Wn!==null)throw Error(i(261));return Yn=null,te=0,$n}function ug(){for(;Wn!==null;)pp(Wn)}function cg(){for(;Wn!==null&&!Of();)pp(Wn)}function pp(n){var e=gp(n.alternate,n,xe);n.memoizedProps=n.pendingProps,e===null?dp(n):Wn=e,wa.current=null}function dp(n){var e=n;do{var r=e.alternate;if(n=e.return,(e.flags&32768)===0){if(r=tg(r,e,xe),r!==null){Wn=r;return}}else{if(r=rg(r,e),r!==null){r.flags&=32767,Wn=r;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{$n=6,Wn=null;return}}if(e=e.sibling,e!==null){Wn=e;return}Wn=e=n}while(e!==null);$n===0&&($n=5)}function Vt(n,e,r){var o=bn,p=Te.transition;try{Te.transition=null,bn=1,pg(n,e,r,o)}finally{Te.transition=p,bn=o}return null}function pg(n,e,r,o){do xr();while(It!==null);if((Ln&6)!==0)throw Error(i(327));r=n.finishedWork;var p=n.finishedLanes;if(r===null)return null;if(n.finishedWork=null,n.finishedLanes=0,r===n.current)throw Error(i(177));n.callbackNode=null,n.callbackPriority=0;var d=r.lanes|r.childLanes;if(qf(n,d),n===Yn&&(Wn=Yn=null,te=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||El||(El=!0,hp(Di,function(){return xr(),null})),d=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||d){d=Te.transition,Te.transition=null;var y=bn;bn=1;var C=Ln;Ln|=4,wa.current=null,lg(n,r),tp(r,n),Rm(To),Hi=!!Ro,To=Ro=null,n.current=r,og(r),Nf(),Ln=C,bn=y,Te.transition=d}else n.current=r;if(El&&(El=!1,It=n,_l=p),d=n.pendingLanes,d===0&&(xt=null),zf(r.stateNode),he(n,Un()),e!==null)for(o=n.onRecoverableError,r=0;r<e.length;r++)p=e[r],o(p.value,{componentStack:p.stack,digest:p.digest});if(Il)throw Il=!1,n=Ea,Ea=null,n;return(_l&1)!==0&&n.tag!==0&&xr(),d=n.pendingLanes,(d&1)!==0?n===_a?fi++:(fi=0,_a=n):fi=0,kt(),null}function xr(){if(It!==null){var n=nu(_l),e=Te.transition,r=bn;try{if(Te.transition=null,bn=16>n?16:n,It===null)var o=!1;else{if(n=It,It=null,_l=0,(Ln&6)!==0)throw Error(i(331));var p=Ln;for(Ln|=4,tn=n.current;tn!==null;){var d=tn,y=d.child;if((tn.flags&16)!==0){var C=d.deletions;if(C!==null){for(var x=0;x<C.length;x++){var b=C[x];for(tn=b;tn!==null;){var j=tn;switch(j.tag){case 0:case 11:case 15:ci(8,j,d)}var U=j.child;if(U!==null)U.return=j,tn=U;else for(;tn!==null;){j=tn;var H=j.sibling,en=j.return;if(Yc(j),j===b){tn=null;break}if(H!==null){H.return=en,tn=H;break}tn=en}}}var on=d.alternate;if(on!==null){var an=on.child;if(an!==null){on.child=null;do{var Vn=an.sibling;an.sibling=null,an=Vn}while(an!==null)}}tn=d}}if((d.subtreeFlags&2064)!==0&&y!==null)y.return=d,tn=y;else n:for(;tn!==null;){if(d=tn,(d.flags&2048)!==0)switch(d.tag){case 0:case 11:case 15:ci(9,d,d.return)}var M=d.sibling;if(M!==null){M.return=d.return,tn=M;break n}tn=d.return}}var I=n.current;for(tn=I;tn!==null;){y=tn;var R=y.child;if((y.subtreeFlags&2064)!==0&&R!==null)R.return=y,tn=R;else n:for(y=I;tn!==null;){if(C=tn,(C.flags&2048)!==0)try{switch(C.tag){case 0:case 11:case 15:Cl(9,C)}}catch(sn){jn(C,C.return,sn)}if(C===y){tn=null;break n}var $=C.sibling;if($!==null){$.return=C.return,tn=$;break n}tn=C.return}}if(Ln=p,kt(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(Oi,n)}catch{}o=!0}return o}finally{bn=r,Te.transition=e}}return!1}function fp(n,e,r){e=kr(r,e),e=Rc(n,e,1),n=Ct(n,e,1),e=ce(),n!==null&&(Fr(n,1,e),he(n,e))}function jn(n,e,r){if(n.tag===3)fp(n,n,r);else for(;e!==null;){if(e.tag===3){fp(e,n,r);break}else if(e.tag===1){var o=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(xt===null||!xt.has(o))){n=kr(r,n),n=Tc(e,n,1),e=Ct(e,n,1),n=ce(),e!==null&&(Fr(e,1,n),he(e,n));break}}e=e.return}}function dg(n,e,r){var o=n.pingCache;o!==null&&o.delete(e),e=ce(),n.pingedLanes|=n.suspendedLanes&r,Yn===n&&(te&r)===r&&($n===4||$n===3&&(te&130023424)===te&&500>Un()-Ia?Ut(n,0):xa|=r),he(n,e)}function mp(n,e){e===0&&((n.mode&1)===0?e=1:(e=Fi,Fi<<=1,(Fi&130023424)===0&&(Fi=4194304)));var r=ce();n=rt(n,e),n!==null&&(Fr(n,e,r),he(n,r))}function fg(n){var e=n.memoizedState,r=0;e!==null&&(r=e.retryLane),mp(n,r)}function mg(n,e){var r=0;switch(n.tag){case 13:var o=n.stateNode,p=n.memoizedState;p!==null&&(r=p.retryLane);break;case 19:o=n.stateNode;break;default:throw Error(i(314))}o!==null&&o.delete(e),mp(n,r)}var gp;gp=function(n,e,r){if(n!==null)if(n.memoizedProps!==e.pendingProps||de.current)me=!0;else{if((n.lanes&r)===0&&(e.flags&128)===0)return me=!1,eg(n,e,r);me=(n.flags&131072)!==0}else me=!1,zn&&(e.flags&1048576)!==0&&Qu(e,ll,e.index);switch(e.lanes=0,e.tag){case 2:var o=e.type;kl(n,e),n=e.pendingProps;var p=dr(e,re.current);Ar(e,r),p=ta(null,e,o,n,p,r);var d=ra();return e.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fe(o)?(d=!0,tl(e)):d=!1,e.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,$o(e),p.updater=Al,e.stateNode=p,p._reactInternals=e,ua(e,o,n,r),e=fa(null,e,o,!0,d,r)):(e.tag=0,zn&&d&&zo(e),ue(null,e,p,r),e=e.child),e;case 16:o=e.elementType;n:{switch(kl(n,e),n=e.pendingProps,p=o._init,o=p(o._payload),e.type=o,p=e.tag=hg(o),n=Be(o,n),p){case 0:e=da(null,e,o,n,r);break n;case 1:e=Hc(null,e,o,n,r);break n;case 11:e=Nc(null,e,o,n,r);break n;case 14:e=Fc(null,e,o,Be(o.type,n),r);break n}throw Error(i(306,o,""))}return e;case 0:return o=e.type,p=e.pendingProps,p=e.elementType===o?p:Be(o,p),da(n,e,o,p,r);case 1:return o=e.type,p=e.pendingProps,p=e.elementType===o?p:Be(o,p),Hc(n,e,o,p,r);case 3:n:{if(jc(e),n===null)throw Error(i(387));o=e.pendingProps,d=e.memoizedState,p=d.element,rc(n,e),pl(e,o,null,r);var y=e.memoizedState;if(o=y.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:y.cache,pendingSuspenseBoundaries:y.pendingSuspenseBoundaries,transitions:y.transitions},e.updateQueue.baseState=d,e.memoizedState=d,e.flags&256){p=kr(Error(i(423)),e),e=Uc(n,e,o,r,p);break n}else if(o!==p){p=kr(Error(i(424)),e),e=Uc(n,e,o,r,p);break n}else for(we=yt(e.stateNode.containerInfo.firstChild),Ce=e,zn=!0,Fe=null,r=ec(e,null,o,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(gr(),o===p){e=lt(n,e,r);break n}ue(n,e,o,r)}e=e.child}return e;case 5:return oc(e),n===null&&jo(e),o=e.type,p=e.pendingProps,d=n!==null?n.memoizedProps:null,y=p.children,bo(o,p)?y=null:d!==null&&bo(o,d)&&(e.flags|=32),Gc(n,e),ue(n,e,y,r),e.child;case 6:return n===null&&jo(e),null;case 13:return Vc(n,e,r);case 4:return Ko(e,e.stateNode.containerInfo),o=e.pendingProps,n===null?e.child=hr(e,null,o,r):ue(n,e,o,r),e.child;case 11:return o=e.type,p=e.pendingProps,p=e.elementType===o?p:Be(o,p),Nc(n,e,o,p,r);case 7:return ue(n,e,e.pendingProps,r),e.child;case 8:return ue(n,e,e.pendingProps.children,r),e.child;case 12:return ue(n,e,e.pendingProps.children,r),e.child;case 10:n:{if(o=e.type._context,p=e.pendingProps,d=e.memoizedProps,y=p.value,Nn(sl,o._currentValue),o._currentValue=y,d!==null)if(Ne(d.value,y)){if(d.children===p.children&&!de.current){e=lt(n,e,r);break n}}else for(d=e.child,d!==null&&(d.return=e);d!==null;){var C=d.dependencies;if(C!==null){y=d.child;for(var x=C.firstContext;x!==null;){if(x.context===o){if(d.tag===1){x=it(-1,r&-r),x.tag=2;var b=d.updateQueue;if(b!==null){b=b.shared;var j=b.pending;j===null?x.next=x:(x.next=j.next,j.next=x),b.pending=x}}d.lanes|=r,x=d.alternate,x!==null&&(x.lanes|=r),Jo(d.return,r,e),C.lanes|=r;break}x=x.next}}else if(d.tag===10)y=d.type===e.type?null:d.child;else if(d.tag===18){if(y=d.return,y===null)throw Error(i(341));y.lanes|=r,C=y.alternate,C!==null&&(C.lanes|=r),Jo(y,r,e),y=d.sibling}else y=d.child;if(y!==null)y.return=d;else for(y=d;y!==null;){if(y===e){y=null;break}if(d=y.sibling,d!==null){d.return=y.return,y=d;break}y=y.return}d=y}ue(n,e,p.children,r),e=e.child}return e;case 9:return p=e.type,o=e.pendingProps.children,Ar(e,r),p=Me(p),o=o(p),e.flags|=1,ue(n,e,o,r),e.child;case 14:return o=e.type,p=Be(o,e.pendingProps),p=Be(o.type,p),Fc(n,e,o,p,r);case 15:return Bc(n,e,e.type,e.pendingProps,r);case 17:return o=e.type,p=e.pendingProps,p=e.elementType===o?p:Be(o,p),kl(n,e),e.tag=1,fe(o)?(n=!0,tl(e)):n=!1,Ar(e,r),Lc(e,o,p),ua(e,o,p,r),fa(null,e,o,!0,n,r);case 19:return Wc(n,e,r);case 22:return zc(n,e,r)}throw Error(i(156,e.tag))};function hp(n,e){return $s(n,e)}function gg(n,e,r,o){this.tag=n,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function be(n,e,r,o){return new gg(n,e,r,o)}function ba(n){return n=n.prototype,!(!n||!n.isReactComponent)}function hg(n){if(typeof n=="function")return ba(n)?1:0;if(n!=null){if(n=n.$$typeof,n===G)return 11;if(n===rn)return 14}return 2}function Pt(n,e){var r=n.alternate;return r===null?(r=be(n.tag,e,n.key,n.mode),r.elementType=n.elementType,r.type=n.type,r.stateNode=n.stateNode,r.alternate=n,n.alternate=r):(r.pendingProps=e,r.type=n.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=n.flags&14680064,r.childLanes=n.childLanes,r.lanes=n.lanes,r.child=n.child,r.memoizedProps=n.memoizedProps,r.memoizedState=n.memoizedState,r.updateQueue=n.updateQueue,e=n.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=n.sibling,r.index=n.index,r.ref=n.ref,r}function Rl(n,e,r,o,p,d){var y=2;if(o=n,typeof n=="function")ba(n)&&(y=1);else if(typeof n=="string")y=5;else n:switch(n){case J:return qt(r.children,p,d,e);case nn:y=8,p|=8;break;case Q:return n=be(12,r,e,p|2),n.elementType=Q,n.lanes=d,n;case q:return n=be(13,r,e,p),n.elementType=q,n.lanes=d,n;case X:return n=be(19,r,e,p),n.elementType=X,n.lanes=d,n;case yn:return Tl(r,p,d,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:y=10;break n;case K:y=9;break n;case G:y=11;break n;case rn:y=14;break n;case vn:y=16,o=null;break n}throw Error(i(130,n==null?n:typeof n,""))}return e=be(y,r,e,p),e.elementType=n,e.type=o,e.lanes=d,e}function qt(n,e,r,o){return n=be(7,n,o,e),n.lanes=r,n}function Tl(n,e,r,o){return n=be(22,n,o,e),n.elementType=yn,n.lanes=r,n.stateNode={isHidden:!1},n}function Da(n,e,r){return n=be(6,n,null,e),n.lanes=r,n}function Oa(n,e,r){return e=be(4,n.children!==null?n.children:[],n.key,e),e.lanes=r,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function yg(n,e,r,o,p){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ao(0),this.expirationTimes=ao(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ao(0),this.identifierPrefix=o,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Na(n,e,r,o,p,d,y,C,x){return n=new yg(n,e,r,C,x),e===1?(e=1,d===!0&&(e|=8)):e=0,d=be(3,null,null,e),n.current=d,d.stateNode=n,d.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},$o(d),n}function Ag(n,e,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:o==null?null:""+o,children:n,containerInfo:e,implementation:r}}function yp(n){if(!n)return St;n=n._reactInternals;n:{if(bt(n)!==n||n.tag!==1)throw Error(i(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break n;case 1:if(fe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break n}}e=e.return}while(e!==null);throw Error(i(171))}if(n.tag===1){var r=n.type;if(fe(r))return qu(n,r,e)}return e}function Ap(n,e,r,o,p,d,y,C,x){return n=Na(r,o,!0,n,p,d,y,C,x),n.context=yp(null),r=n.current,o=ce(),p=Et(r),d=it(o,p),d.callback=e??null,Ct(r,d,p),n.current.lanes=p,Fr(n,p,o),he(n,o),n}function bl(n,e,r,o){var p=e.current,d=ce(),y=Et(p);return r=yp(r),e.context===null?e.context=r:e.pendingContext=r,e=it(d,y),e.payload={element:n},o=o===void 0?null:o,o!==null&&(e.callback=o),n=Ct(p,e,y),n!==null&&(He(n,p,y,d),cl(n,p,y)),y}function Dl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Sp(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var r=n.retryLane;n.retryLane=r!==0&&r<e?r:e}}function Fa(n,e){Sp(n,e),(n=n.alternate)&&Sp(n,e)}function Sg(){return null}var kp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ba(n){this._internalRoot=n}Ol.prototype.render=Ba.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(i(409));bl(n,e,null,null)},Ol.prototype.unmount=Ba.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;jt(function(){bl(null,n,null,null)}),e[Ze]=null}};function Ol(n){this._internalRoot=n}Ol.prototype.unstable_scheduleHydration=function(n){if(n){var e=ru();n={blockedOn:null,target:n,priority:e};for(var r=0;r<mt.length&&e!==0&&e<mt[r].priority;r++);mt.splice(r,0,n),r===0&&ou(n)}};function za(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Nl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function vp(){}function kg(n,e,r,o,p){if(p){if(typeof o=="function"){var d=o;o=function(){var b=Dl(y);d.call(b)}}var y=Ap(e,o,n,0,null,!1,!1,"",vp);return n._reactRootContainer=y,n[Ze]=y.current,Yr(n.nodeType===8?n.parentNode:n),jt(),y}for(;p=n.lastChild;)n.removeChild(p);if(typeof o=="function"){var C=o;o=function(){var b=Dl(x);C.call(b)}}var x=Na(n,0,!1,null,null,!1,!1,"",vp);return n._reactRootContainer=x,n[Ze]=x.current,Yr(n.nodeType===8?n.parentNode:n),jt(function(){bl(e,x,r,o)}),x}function Fl(n,e,r,o,p){var d=r._reactRootContainer;if(d){var y=d;if(typeof p=="function"){var C=p;p=function(){var x=Dl(y);C.call(x)}}bl(e,y,n,p)}else y=kg(r,e,n,p,o);return Dl(y)}eu=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var r=Nr(e.pendingLanes);r!==0&&(so(e,r|1),he(e,Un()),(Ln&6)===0&&(wr=Un()+500,kt()))}break;case 13:jt(function(){var o=rt(n,1);if(o!==null){var p=ce();He(o,n,1,p)}}),Fa(n,1)}},uo=function(n){if(n.tag===13){var e=rt(n,134217728);if(e!==null){var r=ce();He(e,n,134217728,r)}Fa(n,134217728)}},tu=function(n){if(n.tag===13){var e=Et(n),r=rt(n,e);if(r!==null){var o=ce();He(r,n,e,o)}Fa(n,e)}},ru=function(){return bn},iu=function(n,e){var r=bn;try{return bn=n,e()}finally{bn=r}},eo=function(n,e,r){switch(e){case"input":if(Zt(n,r),e=r.name,r.type==="radio"&&e!=null){for(r=n;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var o=r[e];if(o!==n&&o.form===n.form){var p=nl(o);if(!p)throw Error(i(90));_i(o),Zt(o,p)}}}break;case"textarea":Mi(n,r);break;case"select":e=r.value,e!=null&&ut(n,!!r.multiple,e,!1)}},js=Ma,Us=jt;var vg={usingClientEntryPoint:!1,Events:[ni,cr,nl,Gs,Hs,Ma]},mi={findFiberByHostInstance:Dt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Cg={bundleType:mi.bundleType,version:mi.version,rendererPackageName:mi.rendererPackageName,rendererConfig:mi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Js(n),n===null?null:n.stateNode},findFiberByHostInstance:mi.findFiberByHostInstance||Sg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bl.isDisabled&&Bl.supportsFiber)try{Oi=Bl.inject(Cg),Ve=Bl}catch{}}return ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vg,ye.createPortal=function(n,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!za(e))throw Error(i(200));return Ag(n,e,null,r)},ye.createRoot=function(n,e){if(!za(n))throw Error(i(299));var r=!1,o="",p=kp;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onRecoverableError!==void 0&&(p=e.onRecoverableError)),e=Na(n,1,!1,null,null,r,!1,o,p),n[Ze]=e.current,Yr(n.nodeType===8?n.parentNode:n),new Ba(e)},ye.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(i(188)):(n=Object.keys(n).join(","),Error(i(268,n)));return n=Js(e),n=n===null?null:n.stateNode,n},ye.flushSync=function(n){return jt(n)},ye.hydrate=function(n,e,r){if(!Nl(e))throw Error(i(200));return Fl(null,n,e,!0,r)},ye.hydrateRoot=function(n,e,r){if(!za(n))throw Error(i(405));var o=r!=null&&r.hydratedSources||null,p=!1,d="",y=kp;if(r!=null&&(r.unstable_strictMode===!0&&(p=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onRecoverableError!==void 0&&(y=r.onRecoverableError)),e=Ap(e,null,n,1,r??null,p,!1,d,y),n[Ze]=e.current,Yr(n),o)for(n=0;n<o.length;n++)r=o[n],p=r._getVersion,p=p(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,p]:e.mutableSourceEagerHydrationData.push(r,p);return new Ol(e)},ye.render=function(n,e,r){if(!Nl(e))throw Error(i(200));return Fl(null,n,e,!1,r)},ye.unmountComponentAtNode=function(n){if(!Nl(n))throw Error(i(40));return n._reactRootContainer?(jt(function(){Fl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ze]=null})}),!0):!1},ye.unstable_batchedUpdates=Ma,ye.unstable_renderSubtreeIntoContainer=function(n,e,r,o){if(!Nl(r))throw Error(i(200));if(n==null||n._reactInternals===void 0)throw Error(i(38));return Fl(n,e,r,!1,o)},ye.version="18.3.1-next-f1338f8080-20240426",ye}var _p;function Pg(){if(_p)return Ha.exports;_p=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(l){console.error(l)}}return t(),Ha.exports=_g(),Ha.exports}var Pp;function Lg(){if(Pp)return zl;Pp=1;var t=Pg();return zl.createRoot=t.createRoot,zl.hydrateRoot=t.hydrateRoot,zl}var Mg=Lg();const Rg=Ss(Mg),Tg=`---
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
`,bg=`---
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
`,Dg=`---
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
`,Ng=`---
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
`,Bg=`---
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
`,Gg=`---
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
`,Hg=`---
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
`,Ug=`---
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
`,Vg=`---
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
`,qg=`---
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
`,Wg=`---
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
`,Jg=`---
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
`,Kg=`---
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
`,Yg=`---
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
`,Xg=`---
type: topic
tags: [StarRocks, 物化视图, 查询改写, 刷新策略, 查询加速, SPJG]
created: 2026-07-08
updated: 2026-07-08
---

# StarRocks 物化视图深度解析：原理、使用与场景

## 概述

StarRocks 的物化视图（Materialized View）是其查询加速体系最核心的能力之一。它将查询结果预计算并物理存储，在后续查询时通过透明改写让查询命中预计算结果，实现**毫秒级响应**。StarRocks 支持两种物化视图：

- **同步物化视图（Rollup）** — 又称 Rollup，本质是带聚合语义的索引
- **异步物化视图（Async MV）** — 强大的独立实体，支持多表 Join、复杂聚合、跨数据源

自 v2.4 起引入异步物化视图，v2.5 起支持查询改写，至今（v4.1）已形成完善的能力体系。

---

## 一、技术原理

### 1.1 两种物化视图对比

| 维度 | 同步物化视图（Rollup） | 异步物化视图（Async MV） |
|------|:--------------------:|:----------------------:|
| 基表 | 仅支持单表 | 支持多表（内表+外表） |
| Join | 不支持 | 全部 Join 类型 |
| 聚合 | 有限聚合函数 | SUM/COUNT/AVG/MIN/MAX/Bitmap/HLL 等全部 |
| 刷新方式 | 基表写入时同步更新 | 定期/手动/基表变更触发 |
| 查询改写 | 自动 | 自动（SPJG 算法） |
| 分区对齐 | 跟随基表分区 | 支持时间粒度上卷对齐 |
| 嵌套 | 不支持 | 支持 |
| 外表支持 | 不支持 | Hive/Iceberg/Hudi/Paimon (v2.5+) |
| 存储 | 跟随基表物理存储 | 独立物理表 |
| 创建代价 | 低（只增加索引） | 较高（独立 ETL 任务） |

### 1.2 异步物化视图的 SPJG 查询改写算法

StarRocks 的异步物化视图采用 **SPJG（Select-Project-Join-GroupBy）** 模式透明查询改写算法，这是目前业界主流的 MV 改写方案。

**核心思想：**

\`\`\`
用户查询 (SQL AST)
       ↓
  优化器解析
       ↓
  与 MV 定义匹配 ──→ 匹配成功 ──→ 改写为 MV 查询
       ↓ 匹配失败
  回退到基表查询
\`\`\`

**改写能力矩阵：**

- **单表改写**（v2.5+）：查询基表的列是 MV 的超集时改写
- **Inner Join 改写**（v2.5+）：Join 列和聚合列匹配
- **聚合改写**（v2.5+）：SUM/MIN/MAX/COUNT 等聚合到 MV 的预聚合
- **UNION 改写**（v2.5+）：谓词补偿 + 分区补偿
- **嵌套 MV 改写**（v2.5+）：MV 上建 MV
- **COUNT DISTINCT 改写**（v2.5.6+）：改写至 Bitmap/HLL 计算
- **View Delta Join**（v2.5.4+）：查询的表是 MV 的子集
- **Join 派生改写**（v2.5.8+）：不同 Join 类型之间的改写
- **Full Outer/Semi/Anti Join 改写**（v3.1+）
- **Avg → Sum/Count 改写**（v3.1+）
- **基于视图的 MV 改写**（v3.2.2+）
- **文本级 MV 改写**（v3.3+）：AST 匹配

### 1.3 查询改写流程

\`\`\`
用户 SQL
   ↓
Parser → AST
   ↓
Analyzer → 绑定元数据
   ↓
Optimizer
   ├── 识别候选 MV（与查询相关的物化视图）
   ├── SPJG 模式匹配（列、Join、聚合、谓词）
   ├── 补偿计算（列缺失补偿、谓词补偿、聚合补偿）
   ├── 等价性验证（结果一致性保证）
   └── 选择最优 MV（CBO 代价评估）
   ↓
最终执行计划（命中 MV 或回退基表）
\`\`\`

**关键参数：**
- \`enable_materialized_view_rewrite\`（默认 true）：开关 MV 改写
- \`materialized_view_rewrite_mode\`（v3.2+）：DEFAULT / LOSELESS / FORCE
- \`optimizer_materialized_view_timelimit\`（默认 1000ms）：改写超时
- \`cbo_materialized_view_rewrite_related_mvs_limit\`（默认 64）：候选 MV 数上限

---

## 二、刷新策略

### 2.1 刷新触发条件

| 触发方式 | 说明 | 场景 |
|---------|------|------|
| 自动刷新 | 基表数据变更时自动触发 | 实时性要求高 |
| 定时刷新 | \`REFRESH ASYNC EVERY(INTERVAL 1 DAY)\` | 固定报表 |
| 手动刷新 | \`REFRESH MATERIALIZED VIEW mv_name\` | 按需 |
| 分区级刷新 | 增量刷新指定分区 | 大表局部更新 |

### 2.2 自动刷新机制

\`\`\`
基表数据变更 (INSERT/UPDATE/DELETE)
       ↓
  FE 检测到分区数据变化
       ↓
  计算需要刷新的分区
       ↓
  提交刷新 Task（每批次 partition_refresh_number 个分区）
       ↓
  BE 执行物化视图计算
       ↓
  更新 MV 数据
\`\`\`

**v3.1.4+ 新增「自动激活」**：
- 对失效 MV 后台自动尝试激活
- 默认 30 秒检测间隔，指数退避至 60 分钟上限

### 2.3 分区对齐策略

| 策略 | 版本 | 说明 |
|------|------|------|
| 等比例对齐 | v2.5+ | MV 分区 = 基表分区，一一对应 |
| 时间上卷对齐 | v2.5+ | MV 分区粒度 > 基表（如天→月） |
| 自定义粒度 | v3.2+ | date_trunc + time_slice/date_slice |
| 多基表对齐 | v3.3+ | 多事实表分区对齐 |
| 多分区列对齐 | v3.5+ | 多维度分区映射 |

### 2.4 增量刷新 vs 全量刷新

\`\`\`
CREATE MATERIALIZED VIEW daily_sales_mv
REFRESH ASYNC EVERY(INTERVAL 1 HOUR)
PARTITION BY date_trunc('day', sale_date)
AS
SELECT ...
\`\`\`

- 基表新增一个分区 → MV 只刷新对应分区（增量）
- 基表历史分区修改 → MV 只刷新被修改的分区（增量）
- 首次创建 → 全量刷新

### 2.5 高级刷新参数

\`\`\`sql
-- 排除非分区维度表，避免全量刷新
CREATE MATERIALIZED VIEW mv_test
PROPERTIES (
    "excluded_trigger_tables" = "dim_tbl",      -- 不触发刷新
    "excluded_refresh_tables" = "dim_tbl"       -- 不参与刷新计算
)
AS
SELECT ...
\`\`\`

---

## 三、使用方式

### 3.1 创建物化视图

\`\`\`sql
CREATE MATERIALIZED VIEW [IF NOT EXISTS] <mv_name>
[COMMENT ""]
[REFRERYED [ASYNC | ASYNC EVERY(INTERVAL <num> <unit>)]]
[PARTITION BY <expr>]
[ORDER BY <col>]
[DISTRIBUTED BY HASH(<col>) BUCKETS <n>]
[PROPERTIES ("key"="value", ...)]
AS <query>;
\`\`\`

### 3.2 创建示例：指标预聚合

\`\`\`sql
-- 基表：订单明细（百亿级）
CREATE TABLE orders (
    order_id BIGINT,
    user_id INT,
    product_id INT,
    amount DECIMAL(12,2),
    order_date DATE
) PRIMARY KEY (order_id)
PARTITION BY date_trunc('month', order_date);

-- 物化视图：天级聚合
CREATE MATERIALIZED VIEW daily_order_summary
REFRESH ASYNC
PARTITION BY dt
AS
SELECT 
    order_date AS dt,
    product_id,
    COUNT(DISTINCT user_id) AS uv,
    SUM(amount) AS revenue,
    COUNT(*) AS order_cnt
FROM orders
GROUP BY order_date, product_id;
\`\`\`

### 3.3 创建示例：多表 Join 加速

\`\`\`sql
-- SSB Schema 场景
CREATE MATERIALIZED VIEW ssb_join_mv
DISTRIBUTED BY HASH(lo_orderkey)
REFRESH ASYNC EVERY(INTERVAL 1 DAY)
AS
SELECT lo_orderkey, lo_revenue, lo_discount,
       c_name, c_city, c_nation,
       p_name, p_category,
       s_name, s_region,
       d_year, d_month
FROM lineorder
JOIN customer ON lo_custkey = c_custkey
JOIN part ON lo_partkey = p_partkey
JOIN supplier ON lo_suppkey = s_suppkey
JOIN dates ON lo_orderdate = d_datekey;
\`\`\`

### 3.4 管理物化视图

\`\`\`sql
-- 查看构建/刷新状态
SELECT * FROM information_schema.task_runs
ORDER BY create_time DESC;

-- 手动刷新（同步模式）
REFRESH MATERIALIZED VIEW mv_name WITH SYNC MODE;

-- 粒子替换（无锁）
ALTER MATERIALIZED VIEW mv_name SWAP WITH mv_new;

-- 激活失效 MV
ALTER MATERIALIZED VIEW mv_name ACTIVE;

-- 修改刷新间隔
ALTER MATERIALIZED VIEW mv_name
REFRESH ASYNC EVERY(INTERVAL 30 MINUTE);

-- 诊断改写失败
TRACE REWRITE <query>;
\`\`\`

### 3.5 改写模式控制

\`\`\`sql
-- 系统级关闭改写
SET enable_materialized_view_rewrite = false;

-- 容忍数据过期（允许使用旧 MV 数据）
SET materialized_view_rewrite_mode = 'LOSELESS';

-- MV 白名单
SET query_including_mv_names = 'mv1,mv2';

-- MV 黑名单
SET query_excluding_mv_names = 'mv_old';
\`\`\`

---

## 四、使用场景

### 场景一：实时报表指标预聚合

**问题**：百亿级订单表，20 个实时看板，每个秒级刷新，直接查基表扛不住。

**方案**：

\`\`\`
订单表 (10亿行/天)
       ↓ 一级聚合
天级销售汇总 MV (聚合产品+地区+渠道)
       ↓ 二级聚合
月级 KPI MV (SUM/COUNT/AVG)
       ↓ 透明改写
看板查询 → 自动命中 MV → 毫秒返回
\`\`\`

**收益**：查询从 10s+ → 50ms，存储压缩比 10:1。

### 场景二：宽表 Join 加速

**问题**：SSB 测试中 5 张表 Join（lineorder + customer + part + supplier + dates），一次 Join 耗时 30s+。

**方案**：创建包含全部 Join 的 MV，配合 \`unique_constraints\` 启用 View Delta Join 改写。

**收益**：Join 查询耗时 30s → 100ms，与宽表查询同级别性能。

### 场景三：湖仓加速（数据湖）

**问题**：Hive/Iceberg 上的探查式查询，每次都要远程读取 Parquet 文件。

**方案**：

\`\`\`sql
CREATE MATERIALIZED VIEW hive_sales_mv
REFRESH ASYNC EVERY(INTERVAL 6 HOUR)
AS
SELECT region, product, SUM(sales) AS total_sales
FROM hive_catalog.db.sales
GROUP BY region, product;
\`\`\`

**收益**：省去远程 IO，物化后查询快 100x+。

### 场景四：冷热数据分层

**问题**：保留 3 年数据，但只高频查最近 3 个月。

**方案**：MV 配合 \`partition_ttl_number=3\`，只保留最近 3 个月预计算，历史查询回退到基表。

\`\`\`sql
-- mv 只保留最近 3 个月分区
-- 3 个月前数据自动淘汰，查询走基表
CREATE MATERIALIZED VIEW hot_sales_mv
REFRESH ASYNC EVERY(INTERVAL 1 HOUR)
PARTITION BY dt
PROPERTIES (
    "partition_ttl_number" = "3"
)
AS SELECT order_date AS dt, ... FROM orders GROUP BY ...;
\`\`\`

### 场景五：嵌套物化视图（分层建模）

\`\`\`
ODS (明细层) → DWD (轻度汇总 MV) → DWS (重度汇总 MV) → ADS (应用层 MV)
\`\`\`

每一层基于上一层 MV 构建，逐层缩减数据量，SQL 透明改写层层命中。

### 场景六：ETL 数据管道替代

用 MV 替代传统 ETL（离线 Spark/Flink 任务）：

- 省去调度系统依赖
- MV 自动感知数据变更
- 分区级增量刷新
- 内置数据一致性保证

---

## 五、最佳实践

### 5.1 设计原则

1. **从高频查询出发**：分析慢查询，识别模式重复的 SQL
2. **合理选择刷新频率**：实时场景用自动刷新，报表场景用定时刷新
3. **分区对齐**：MV 分区与基表对齐，支持增量刷新
4. **维度表排除**：小维度表用 \`excluded_trigger_tables/excluded_refresh_tables\` 避免全量刷新
5. **监控和诊断**：用 \`TRACE REWRITE\` 诊断改写失败原因

### 5.2 性能建议

- MV 创建后自动收集统计信息（v3.0+），但大数据量建议手动 \`ANALYZE TABLE\`
- MV 刷新任务建议分配独立 \`resource_group\`，避免与查询争资源
- \`colocate_with\` 属性可以让 MV 与基表实现 Colocate Join
- 使用 \`partition_refresh_number\` 控制每批次刷新分区数，避免 OOM

### 5.3 已知限制

- 不具备确定性函数（rand/uuid/sleep）不支持改写
- 窗口函数不支持改写
- 外部表 MV 不保证强一致
- JDBC Catalog 上的 MV 不支持查询改写
- 同步 MV（Rollup）不支持多表 Join

---

## 六、版本演进速览

| 版本 | 里程碑 |
|------|--------|
| v2.4 | 异步物化视图首次发布 |
| v2.5 | 查询改写功能上线（Inner Join + 单表聚合 + Union） |
| v2.5.4 | View Delta Join + External Catalog MV |
| v3.0 | JDBC Catalog MV、自动分析统计信息 |
| v3.1 | 排序键、随机分桶、Full Outer Join 改写、SWAP WITH、TTL |
| v3.2 | 自动激活、备份恢复、嵌套 MV |
| v3.3 | 文本级改写、多基表对齐、Auto MV 推荐 |
| v3.4 | 分区级刷新优化、session 属性支持 |
| v3.5 | 多分区列对齐 |
| v4.1 | 持续优化，稳定生产可用 |
`,Zg=`---
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
`,nh=`---
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
`,eh=`---
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
`,th=`---
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
`,rh=`---
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
`,ih=`---
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
`,lh=`---
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
`,oh=`---
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
`,ah=`---
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
`,sh=`---
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
`,uh=`---
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
`,ch=`---
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
`,ph=`---
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
`,fh=`---
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
`,mh=`---
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
`,hh=`---
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
`,yh=`---
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
`,Ah=`---
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
`,Sh=`---
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
`,Ch=`---
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
`,xh=`---
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
`,Ih=`---
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
`,Eh=`---
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
`,_h=`---
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
`,Ph=`---
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
`,Lh=`---
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
`,Mh=`---
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
`,Th=`---
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
`,bh=`---
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
`,Dh=`---
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
`,Nh='# LLM Wiki — 全站索引\n\n> 自动维护，每次 ingest 后更新。按分类组织，每行一条：链接 + 摘要 + 标签。\n\n---\n\n## 实体\n<!-- 人物、模型、工具、数据集、公司/组织 -->\n\n- [Unsloth](wiki/entities/unsloth.md) — 开源 LLM 高效微调框架，CUDA 内核优化实现 2~12 倍训练加速，70%~80% 显存节省 `#工具 #微调 #开源`\n- [Firecrawl](wiki/entities/firecrawl.md) — AI 原生网页数据采集引擎，输出 LLM 可消费的 Markdown/JSON，GitHub 14.2 万 Star `#工具 #网页爬虫 #MCP`\n- [Snail AI](wiki/entities/snail-ai.md) — 基于 Spring Boot 4 + Spring AI 2.0 的 Java 企业级 AI Agent 平台，Apache 2.0 开源 `#工具 #AI-Agent #Java`\n- [OpenSquilla](wiki/entities/opensquilla.md) — AI 编程工具，引入红绿回归证据链实现代码自验证与自修复，成本降低 60%~80% `#工具 #AI编程 #测试驱动`\n- [AutoLink](wiki/entities/autolink.md) — 面向大数据场景的语义 Schema Linking 开源工具，将数据库结构转为向量嵌入实现 NL2SQL `#工具 #Text-to-SQL #开源`\n- [Claude Code](wiki/entities/claude-code.md) — Anthropic 推出的命令行 AI 编程工具，多 Agent 分层架构，支持 subAgent 委派和项目记忆 `#工具 #AI编程 #Agent`\n- [Codex CLI](wiki/entities/codex-cli.md) — GitHub 开源的终端 AI 编程 CLI 工具，支持 Agents/Skills 模式 `#工具 #AI编程 #GitHub`\n- [PageAgent](wiki/entities/pageagent.md) — 阿里开源 32KB JS 网页 AI 操控框架，DOM 脱水技术，比 Browser-use 轻 100 倍 `#工具 #Web自动化 #AI-Agent`\n- [LightRAG](wiki/entities/lightrag.md) — 港大 GraphRAG 框架，知识图谱替代传统 Chunk，EMNLP 2025，36.7k Star `#工具 #RAG #知识图谱`\n- [OpenClaw](wiki/entities/openclaw.md) — 自进化单 Agent 框架，4 层记忆系统（L0-L3），支持 NAS Docker 部署 `#工具 #AI-Agent #记忆系统`\n- [Hermes Agent](wiki/entities/hermes-agent.md) — 清华大学自进化 Agent，自动分析失败原因并修正策略 `#工具 #AI-Agent #自进化`\n- [Superpowers](wiki/entities/superpowers.md) — 116k+ Star AI 编程 Skills 框架，TDD 驱动的模块化能力扩展体系 `#工具 #AI编程 #Skills`\n- [gstack](wiki/entities/gstack.md) — YC CEO Garry Tan 的 Claude Code 技能包，111k Star，角色化 Agent 执行 `#工具 #AI编程 #角色化`\n- [OpenSpec](wiki/entities/openspec.md) — 规范驱动开发（SDD）框架，Spec → Execute → Verify → Archive 五阶段流程 `#工具 #AI编程 #SDD`\n- [Spec Kit](wiki/entities/spec-kit.md) — GitHub 官方开源的规格驱动开发（SDD）工具包，支持 30+ AI Coding Agent，118k Star，MIT 协议 `#工具 #AI编程 #SDD #GitHub`\n- [BMAD](wiki/entities/bmad.md) — 重量级 SDD 平台，BMC 分析 → 架构 → 数据模型 → 代码生成全流程 `#工具 #AI编程 #SDD`\n- [ECC](wiki/entities/ecc.md) — Everything Claude Code，21.7 万 Star 的 Claude Code 最强插件合集 `#工具 #AI编程 #插件`\n- [MUX0](wiki/entities/mux0.md) — 专为 Claude Code 设计的开源 AI 编程终端，基于 Ghostty `#工具 #AI编程 #终端`\n- [MemPalace](wiki/entities/mempalace.md) — 开源 AI 记忆系统，55k Star，ChromaDB + 语义搜索，本地优先 `#工具 #记忆系统 #开源`\n- [Apache Burr](wiki/entities/apache-burr.md) — 状态机驱动的 Agent 框架，LangChain 替代方案 `#工具 #Agent框架 #状态机`\n- [PYTHIA](wiki/entities/pythia.md) — 本地无密钥 AI Agent 工具，融合 Osiris 实时情报与 MiroFish 多智能体预测，Ollama 运行 `#工具 #AI-Agent #实时感知 #开源情报`\n- [UZI-Skill](wiki/entities/uzi-skill.md) — 开源 AI 股票深度分析插件，22维×66评委×22种机构方法，支持 A/港股/美股 `#工具 #股票分析 #投资 #金融`\n- [Comet](wiki/entities/comet.md) — 基于 OpenSpec + Superpowers 的自动化 Spec Skills 编排工具 `#工具 #AI编程 #自动化`\n- [RAG-Anything](wiki/entities/rag-anything.md) — 港大多模态 RAG，知识图谱统一处理文本/图像/表格 `#工具 #RAG #多模态`\n- [cc-switch](wiki/entities/cc-switch.md) — 跨平台 AI 助手桌面工具，104k Star，Rust + Tauri `#工具 #桌面工具 #跨平台`\n- [CC-Connect](wiki/entities/cc-connect.md) — 飞书/微信中调用 AI Agent 编程的桥接工具 `#工具 #AI-Agent #飞书`\n- [GSD](wiki/entities/gsd.md) — Get Shit Done，面向大型项目的上下文工程系统，解决 Context Rot `#工具 #上下文工程 #大型项目`\n- [FlashRT](wiki/entities/flashrt.md) — 高性能实时推理引擎，小批量低延迟，面向具身智能 `#工具 #推理引擎 #低延迟`\n- [SeedER](wiki/entities/seeder.md) — 强化学习驱动的知识图谱结构化检索系统 `#工具 #知识检索 #强化学习`\n- [Huashu Design](wiki/entities/huashu-design.md) — 花叔开源 Claude Code 设计 Skill，19k Star `#工具 #设计 #UI`\n- [khazix-skills](wiki/entities/khazix-skills.md) — 数字生命卡兹克开源 AI Skills 合集 `#工具 #AI编程 #Skills`\n- [Understand Anything](wiki/entities/understand-anything.md) — 代码库 → 交互式知识图谱转换工具 `#工具 #代码分析 #知识图谱`\n- [html-video](wiki/entities/html-video.md) — 把 HTML + CSS 通过 AI Agent 直接渲染为 MP4 视频，本地运行，插件化引擎，21 模板 `#工具 #视频生成 #AI编程`\n- [FuseAI](wiki/entities/fuseai.md) — 中山大学/腾讯发起的开源 LLM 知识融合研究社区 `#模型融合 #开源 #研究`\n- [InfiFusion](wiki/entities/infifusion.md) — Reallm-Labs 的统一 LLM 融合框架，首个融合 4 个 14B+ 异构模型 `#模型融合 #知识蒸馏 #LLM融合`\n- [mergekit](wiki/entities/mergekit.md) — HuggingFace 流行的模型合并工具，SLERP/TIES/DARE 无需 GPU 即可合并 `#模型融合 #工具 #模型合并`\n\n## 概念\n<!-- 技术概念、方法论、理论 -->\n\n- [模型融合](wiki/concepts/model-fusion.md) — 将多个 LLM 通过参数合并或知识蒸馏统一为一个模型，无需从零训练 `#模型融合 #LLM #融合方法`\n- [模型微调](wiki/concepts/model-finetuning.md) — 在预训练大模型上继续训练使之适配下游任务，含 Full Fine-tuning / PEFT / LoRA / QLoRA 等变体 `#训练方法 #LLM`\n- [MCP 模型上下文协议](wiki/concepts/mcp-model-context-protocol.md) — Anthropic 提出的开放协议，标准化 AI 模型与外部工具之间的通信接口，已获 ChatGPT/VS Code/Cursor 等广泛支持 `#协议 #Agent #标准化 #工具集成`\n- [AI Agent](wiki/concepts/ai-agent.md) — 具备自主感知-规划-行动能力的 AI 系统，支持工具使用、记忆管理和多步推理 `#Agent #自动化`\n- [RAG 检索增强生成](wiki/concepts/rag-retrieval-augmented-generation.md) — 检索 + 生成的混合架构，已从独立系统演进为 Agent 组件 `#检索 #知识库 #LLM #Agentic`\n- [红绿回归测试](wiki/concepts/red-green-regression-testing.md) — AI 自动执行红-绿-回归三道测试关卡，通过后才交付代码的验证管道 `#测试 #AI编程 #自动化`\n- [AI 编程](wiki/concepts/ai-programming.md) — LLM 辅助/自动完成代码生成、测试、审查、修复，从补全→自主生成→自验证三个发展阶段 `#AI编程 #开发工具`\n- [混合专家模型 MoE](wiki/concepts/moe-mixture-of-experts.md) — 稀疏激活的神经网络架构，每次推理只激活少数专家，同计算量下大幅扩大模型容量 `#模型架构 #稀疏计算`\n- [测试驱动开发 TDD](wiki/concepts/test-driven-development.md) — 先写测试再写代码的软件开发方法论，红-绿-重构循环 `#测试 #软件工程`\n- [统一开发范式](wiki/concepts/dev-flow-unified-paradigm.md) — 融合 OpenSpec 规范驱动和 Superpowers 纪律驱动的五阶段开发流程 `#开发范式 #AI编程 #规范驱动`\n- [自改进AI Agent](wiki/concepts/self-improving-agent.md) — AI Agent 自动记录学习和错误经验，持续自我修复并将重要知识提升为项目记忆 `#AI-Agent #自我修复 #自动化`\n- [Spec驱动开发 SDD](wiki/concepts/spec-driven-development.md) — 人写规格说明书 → AI 写代码+测试+验证，人类从"写代码"转为"审 Spec" `#AI编程 #SDD #开发范式`\n- [Agent记忆系统](wiki/concepts/agent-memory-system.md) — L0-L3 四层记忆架构，从短期上下文到持久语义记忆 `#AI-Agent #记忆系统 #自进化`\n- [本体论 Ontology](wiki/concepts/ontology.md) — 知识工程中形式化描述领域概念及其关系的框架，AI 时代重新变得关键 `#知识建模 #语义网 #Ontology`\n- [FDE](wiki/concepts/fde.md) — Forward Deployed Engineer，工程师深入客户现场的 AI 落地范式 `#AI落地 #PMF #方法论`\n- [Prompt Caching](wiki/concepts/prompt-caching.md) — AI Agent 工程关键优化技术，缓存系统提示词降低延迟和成本 `#性能优化 #Agent工程 #Claude-Code`\n- [Loop Engineering](wiki/concepts/loop-engineering.md) — 设计 Agent 自主执行循环的方法论，替代单次 Prompt 工程 `#AI-Agent #自动化 #方法论`\n- [Agent工具选择问题](wiki/concepts/agent-tool-selection.md) — 当 Agent 拥有过多 Tool 时的选择困难与解决方向 `#AI-Agent #Tool管理`\n- [AI 网关与模型路由](wiki/concepts/ai-gateway.md) — 聚合多模型提供商，统一 API 接入与自动路由，零成本调用 237 个 AI 免费额度 `#API网关 #模型路由 #成本优化 #Agent基础设施`\n- [上下文工程](wiki/concepts/context-engineering.md) — 系统化管理 AI Agent 在大型项目中的代码上下文，解决 Context Rot `#AI编程 #上下文管理`\n- [OKF 开放知识格式](wiki/concepts/okf-open-knowledge-format.md) — Google 提出的 AI Agent 可消费结构化知识标准 `#知识格式 #Google #AI-Agent`\n- [StarRocks 物化视图深度解析](wiki/concepts/starrocks-materialized-view.md) — 同步/异步物化视图技术原理、SPJG 查询改写算法、刷新策略、使用场景与最佳实践 `#StarRocks #物化视图 #查询改写`\n\n## 主题\n<!-- 技术领域、研究方向、行业动态 -->\n\n- [Unsloth — 消费级 GPU 高效微调大模型](wiki/topics/unsloth-efficient-llm-finetuning.md) — 开源框架让普通显卡也能微调 7B 级大模型，2026 年推出无代码 Web UI `#模型训练 #微调 #开源`\n- [Firecrawl — AI 原生的网页数据采集引擎](wiki/topics/firecrawl-web-scraping.md) — 将任意网站转为 LLM 可消费的结构化数据，配套 MCP Server 接入 Agent 生态 `#网页爬虫 #MCP #AI`\n- [Snail AI — Java 生态的企业级 AI Agent 平台](wiki/topics/snail-ai-agent-platform.md) — 让 Java 开发者不需 Python 就能构建多模型管理、RAG、长时记忆的 Agent 应用 `#AI项目 #Java #Agent`\n- [OpenSquilla — AI 代码生成的自验证与自修复](wiki/topics/opensquilla-ai-self-verification.md) — AI 编程从"生成代码"进化到"验证代码"，红绿回归闭环实现可审计的代码交付 `#AI编程 #测试驱动 #自动化`\n- [万象AI分析平台](wiki/topics/wanxiang-ai-analysis.md) — 基于 MCP 协议的智能数据分析平台，集成流量地图、交叉分析、AI圈人等全链路能力 `#AI分析 #数据平台 #MCP`\n- [AI Agent 技术全景报告 2026](wiki/topics/ai-agent-landscape-2026.md) — 六大趋势 × 架构范式 × 框架对比，基于 50+ 篇技术资料的系统梳理 `#AI-Agent #技术全景 #2026`\n- [Karpathy AI编码方法论](wiki/topics/karpathy-ai-coding-methodology.md) — 65行 CLAUDE.md 定义的四条铁律：先想再写、简洁第一、手术式修改、目标驱动 `#AI编程 #方法论 #Karpathy`\n- [AI Native 研发体系](wiki/topics/ai-native-dev-system.md) — 以 AI 为核心重新设计软件开发全流程，从辅助工具到 Agent 自主执行 `#AI-Native #研发体系 #软件2.0`\n- [Agentic RAG](wiki/topics/agentic-rag.md) — RAG 从独立系统降级为 Agent 工具箱中的组件，由 Agent 自主决定检索策略 `#RAG #Agent #Agentic-RAG`\n- [StarRocks 跨数据源查询方案](wiki/topics/starrocks-cross-data-source-query.md) — StarRocks Catalog 方案实现 Hive/Iceberg/MySQL/ES 等跨源 JOIN 查询，v3.0+ 推荐 `#StarRocks #数据查询 #跨数据源`\n- [StarRocks Catalog 数据加速策略](wiki/topics/starrocks-catalog-acceleration-strategy.md) — 同构(SR→SR)与异构(MySQL→SR) Catalog 的数据加速策略深度分析与选型推荐 `#StarRocks #数据加速 #Catalog #物化视图`\n- [RAG 评估体系与方法论](wiki/topics/rag-evaluation.md) — 评估三维度、LLM-as-Judge / RAGAS / DeepEval 框架对比、论文支撑 `#RAG #评估 #LLM-as-Judge`\n- [Spring AI + MCP 方案研究](wiki/topics/spring-ai-mcp-architecture-research.md) — 基于 Spring AI 2.x 的 MCP 协议接入与接口统一管理三大方案对比，推荐渐进式演进 `#Spring AI #MCP #架构设计`\n\n## 综述\n<!-- 多源对比、综合分析、阶段性总结 -->\n\n- [AI编程Agent框架对比分析](wiki/synthesis/agent-framework-comparison.md) — 从规划、记忆、架构、创新技术四个维度对比 Claude Code / Gemini / Cursor 等主流编程 Agent `#AI编程 #Agent #对比分析`\n- [2026上半年万象项目复盘](wiki/synthesis/2026-h1-wanxiang-review.md) — 万象 AI Agent 能力建设、智能圈人、ChatBI、标签治理四大方向复盘 `#复盘 #万象 #2026`\n- [BMAD vs OpenSpec：航母与特种兵](wiki/synthesis/bmad-vs-openspec.md) — AI 驱动开发两大赛道的多维度对比与选型建议 `#SDD #对比分析 #BMAD #OpenSpec`\n- [AI增强开发三件套](wiki/synthesis/ai-dev-trifecta.md) — OpenSpec + Superpowers + gstack 把 Vibe Coding 拉回工程交付 `#AI编程 #工程交付 #三件套`\n- [LLM 模型融合深度报告](wiki/synthesis/model-fusion-deep-report.md) — 从原理、技术路线、实现方式、评测四维度系统性梳理模型融合全貌 `#模型融合 #综述 #评测`\n\n## 标签\n\n- 📑 [标签索引](tags-index.md) — 按标签浏览分类，共 219+ 个标签\n\n## 工作笔记\n\n- [2026年上半年绩效自评](wiki/topics/h1-2026-performance-review.md) — 万象&Pandas 双线工作绩效汇报，含企业价值观自评与多维总评 `#绩效 #上半年 #万象 #Pandas`\n\n---\n\n_最后更新于 2026-07-08_ | 全站 74 页面，覆盖 AI Agent、AI 编程、RAG、知识图谱、SDD、知识管理方法论、模型融合等核心领域\n',Fh=`# LLM Wiki — 操作日志

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

## [2026-07-08] ingest | StarRocks 物化视图深度解析

- 新增 wiki/concepts/starrocks-materialized-view.md
- 覆盖同步vs异步MV技术原理、SPJG改写算法、刷新策略、使用场景
- 更新 index.md、tags-index.md

## [2026-07-08] ingest | 2026年上半年绩效自评

- 新增 wiki/topics/h1-2026-performance-review.md
- 基于周报复盘撰写绩效汇报，包含企业价值观自评、万象&Pandas工作内容、多维总评
- 更新 index.md

## [2026-07-08] ingest | Spring AI + MCP 接口统一管理方案研究

- 新增 wiki/topics/spring-ai-mcp-architecture-research.md
- 三大方案对比：原生Starter / AI Gateway / 分层Sidecar
- 推荐渐进式演进路线：Phase1原生Starter→Phase2引入Gateway

## [2026-07-08] update | 方案一深度展开：MCP + 接口 + 文档三位一体

- 新增 4.1~4.9 完整展开方案一
- 接口即MCP：@AiApi 统一注解 + 自动桥接处理器
- 分布式MCP调用：McpClientManager + Nacos动态发现
- Streamable HTTP 传输详解与配置
- 三层文档体系：MCP Schema + OpenAPI + Markdown门户
- 完整项目结构、启动验证、推荐实施路线
`,Bh=`---
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
`,Gh=`---
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
`,Hh=`---
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
`,Uh=`# 标签索引

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
- [2026年上半年绩效自评](topics/h1-2026-performance-review.md)
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

## AI Gateway

- [Spring AI 基础上实现 MCP 与接口统一管理 — 方案深度研究报告](topics/spring-ai-mcp-architecture-research.md)

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

## API管理

- [Spring AI 基础上实现 MCP 与接口统一管理 — 方案深度研究报告](topics/spring-ai-mcp-architecture-research.md)

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

- [2026年上半年绩效自评](topics/h1-2026-performance-review.md)
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
- [Spring AI 基础上实现 MCP 与接口统一管理 — 方案深度研究报告](topics/spring-ai-mcp-architecture-research.md)
- [万象AI分析平台](topics/wanxiang-ai-analysis.md)

## Model Context Protocol

- [Spring AI 基础上实现 MCP 与接口统一管理 — 方案深度研究报告](topics/spring-ai-mcp-architecture-research.md)

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

## Pandas

- [2026年上半年绩效自评](topics/h1-2026-performance-review.md)

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

## SPJG

- [StarRocks 物化视图深度解析：原理、使用与场景](concepts/starrocks-materialized-view.md)

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

## Spring AI

- [Spring AI 基础上实现 MCP 与接口统一管理 — 方案深度研究报告](topics/spring-ai-mcp-architecture-research.md)

## Spring Boot

- [Snail AI](entities/snail-ai.md)
- [Snail AI — Java 生态的企业级 AI Agent 平台](topics/snail-ai-agent-platform.md)

## StarRocks

- [StarRocks Catalog 数据加速策略深度分析：同构 vs 异构](topics/starrocks-catalog-acceleration-strategy.md)
- [StarRocks 物化视图深度解析：原理、使用与场景](concepts/starrocks-materialized-view.md)
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
- [2026年上半年绩效自评](topics/h1-2026-performance-review.md)
- [万象AI分析平台](topics/wanxiang-ai-analysis.md)

## 上下文工程

- [GSD (Get Shit Done)](entities/gsd.md)
- [上下文工程 (Context Engineering)](concepts/context-engineering.md)

## 上半年

- [2026年上半年绩效自评](topics/h1-2026-performance-review.md)

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

## 刷新策略

- [StarRocks 物化视图深度解析：原理、使用与场景](concepts/starrocks-materialized-view.md)

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

## 架构设计

- [Spring AI 基础上实现 MCP 与接口统一管理 — 方案深度研究报告](topics/spring-ai-mcp-architecture-research.md)

## 查询加速

- [StarRocks 物化视图深度解析：原理、使用与场景](concepts/starrocks-materialized-view.md)

## 查询改写

- [StarRocks 物化视图深度解析：原理、使用与场景](concepts/starrocks-materialized-view.md)

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
- [StarRocks 物化视图深度解析：原理、使用与场景](concepts/starrocks-materialized-view.md)

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

## 绩效

- [2026年上半年绩效自评](topics/h1-2026-performance-review.md)

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

`,Vh=`---
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
`,qh=`---
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
`,Jh=`---
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
type: work-note
tags: [绩效, 上半年, 万象, Pandas, AI Agent, ChatBI]
created: 2026-07-08
updated: 2026-07-08
---

# 2026年上半年绩效自评

## 一、企业价值观自评

### 价值观一：用户第一（自评：4分）

**基础行为 — 深入一线，洞察需求，打造易用、好用的产品**

- AI合并文件问题修复：解决用户反馈的AI无法合并多个Excel文件的痛点，定位到原因是模型不知道合并文件的使用方式，通过修改数据分析提示词中的工具描述，让模型正确调用合并工具
- ChatBI SSE协议修复：修复Send接口SSE返回格式不兼容问题，以及Poll日志重复拉取问题，使用户获得实时、准确的流式响应体验
- Excel多文件支持：从需求文档到开发上线，完整交付ChatBI多文件上传与解析能力，解决用户多表格联合分析的典型场景

**进阶行为 — 直面艰难问题，积极推动改进**

- 召回置信度修复：面对ChatBI召回置信度判断错误导致图表召回失败的核心痛点，积极定位为提示词问题并修复
- 文件挂载问题解决：解决数据文件不存在、群组分享BSP权限等棘手上线后问题，确保用户正常使用

### 价值观二：简单可信（自评：4分）

**基础行为 — 诚信正直，言出必行，对结果负责**

- 按时完成技术评审、开发、联调、测试各环节交付，每周记录进度与完成状态
- Tag Value Index清理、个推下线标签清理（14个标签）等底层脏活认真完成

**进阶行为 — 不推责，勇于担当，有协作精神**

- 品牌切换标签查找问题：主动定位并解决品牌切换时标签过滤/ID类型不匹配的Bug
- 智能圈人一键生成交互修改：配合产品侧快速迭代，添加一键添加按钮、创建规则时校验
- 协同ailab模型测试：配合ailab完成自有部署模型的验证上线

### 价值观三：成就奋斗者（自评：3分）

**基础行为 — 为奋斗者提供更好的产品、技术、服务**

- Agent能力建设：完成Agent流式输出、subAgent能力、圈选标签能力等基础设施
- Skill推广上线：完成Skill策略从设计到上线的全链路

**进阶行为 — 助力奋斗者获得更高的回报**

- token使用量优化课题研究：主动发起龙虾token优化课题，研究qmd/self-improving-agent/ontology等前沿方案
- Claude Code源码研究：深入研究Claude Code的提示词设计、Agent流程和上下文处理

---

## 二、重点工作内容

### 万象项目

| 方向 | 完成度 | 核心成果 |
|------|:------:|----------|
| AI Agent能力建设 | 80% | Agent流式输出、subAgent能力、圈选标签、AI访问日志、模型切换(deepseek-v4)、Skill推广上线、AutoLink Agent构建 |
| 智能圈人 | 85% | 人群规则生成Agent技术方案、一键生成交互、品牌切换标签匹配修复、流量地图/生命周期/漏斗分析/画像报告等能力接入 |
| 标签治理与渗透 | 90% | 个推下线标签清理(14个)、华为APP投放标签值映射导出、商业标签使用情况整理 |
| 架构技术升级 | 70% | 交叉分析方案、sandbox环境搭建、数据迁移、deepseek-v4切换完成 |

**里程碑：**
- 260227：人群规则生成Agent技术方案完成
- 260312：Agent流式/圈选/日志/模型切换全面上线
- 260317：核心能力文档沉淀（洞察/漏斗/人群/标签）
- 260507：交叉分析+Sandbox环境落地

### Pandas（ChatBI）项目

| 方向 | 完成度 | 核心成果 |
|------|:------:|----------|
| 基础能力建设 | 75% | Excel多文件支持、富文本HTML渲染、多IDS支持、用户级限流控制 |
| 多模态&模型 | 已上线 | ChatGPT-OC多模态能力上线、ailab自有模型测试通过、deepseek-v4切换完成 |
| 召回与质量 | 优化中 | SSE修复、poll日志修复、置信度判断修复、提示词版本管理 |
| 平台扩展 | 已上线 | 数据迁移、Skill链路调整wfs、美事导出 |

**里程碑：**
- 260402：ChatBI-OC + 多模态上线
- 260417：SSE+限流上线
- 260507：Excel多文件+ds-v4切换+富文本HTML
- 260604：ds-v4全量切换完成

---

## 三、绩效总评

### 个人综合

| 维度 | 评价 |
|------|------|
| 目标完成情况 | 上半年整体完成度约78%，核心功能全部上线交付。万象Agent能力从0到1建起框架；Pandas在多文件/多模态/模型切换上取得实质突破。 |
| 工作成果质量 | Agent流式输出、Excel多文件支持、ds-v4切换等高复杂度功能一次上线成功，事故率低。 |
| 工作效率 | 持续迭代节奏稳定，能在同一周期内并行推进万象+Pandas双线工作。 |
| 专业技能 | 掌握Agent全链路开发能力、LLM应用工程、AI Agent架构设计、数据分析平台开发。 |
| 团队角色 | 万象+Pandas双线核心开发者，承担架构设计、方案评审、核心开发、排障修复全链路。 |
| 个人成长 | 从后端到AI应用完成能力跃迁，掌握提示词工程、召回优化、模型评估、多模态接入等核心技术栈。 |

### AI探索实践

- Claude Code源码研究：深入Claude Code提示词架构、Agent执行流程、上下文处理策略
- Token优化课题：研究qmd/self-improving-agent/ontology等前沿方案
- AutoLink Agent构建：schema linking → SQL generate → Web 完整链路独立完成
- 多模型评估与切换：完成deepseek-v4切换，积累模型选型经验

### 总体评分

> 价值观：4 / 4 / 3（用户第一/简单可信/成就奋斗者）
> 工作业绩：3.5分（达标偏上）
> 总评：3.5分
`,$h=`---
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
`,Kh=`---
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
`,Yh=`---
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
`,Xh=`---
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
`,Zh=`---
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
`,ny=`---
type: topic
tags: [Spring AI, MCP, Model Context Protocol, 架构设计, API管理, AI Gateway]
created: 2026-07-08
updated: 2026-07-08
---

# Spring AI 基础上实现 MCP 与接口统一管理 — 方案深度研究报告

## 背景

当前技术栈：Spring AI (2.x) + Spring Boot 4.x + Java 21+。

核心需求：
1. **MCP 协议接入** — 支持 Model Context Protocol，让 AI 模型能标准化调用外部工具和数据源
2. **接口统一管理** — 统一管理多个模型（DeepSeek/ChatGPT/通义等）的接入、路由、鉴权、限流、监控
3. 运维友好、可扩展、适合企业级生产环境

---

## 总体架构参考

Spring AI 2.0 的 MCP 架构分为三层：

\`\`\`
┌─────────────────────────────────────────────┐
│              Host (AI Application)           │
│  ┌──────────┐  ┌─────────────────────────┐   │
│  │ ChatClient│  │  ToolCallbackProvider   │   │
│  └────┬─────┘  └──────────┬──────────────┘   │
│       │                   │                    │
│  ┌────▼───────────────────▼──────────────┐    │
│  │        McpClient (Session Layer)       │    │
│  └────┬───────────────────┬──────────────┘    │
│       │                   │                    │
├───────┼───────────────────┼────────────────────┤
│  ┌────▼────┐       ┌─────▼──────┐             │
│  │ MCP SRV1 │       │ MCP SRV2   │  ...        │
│  │ (Stdio)  │       │ (HTTP SSE) │             │
│  └─────────┘       └───────────┘              │
└─────────────────────────────────────────────┘
\`\`\`

---

## 方案一：原生 Spring AI MCP Boot Starter + Nacos/Consul 注册发现

### 核心思路

完全基于 Spring AI 官方提供的 MCP Boot Starter，利用其注解和自动化配置能力，配合注册中心实现服务的发现与管理。

### 架构

\`\`\`
┌──────────────────────────────────────────────────┐
│                  AI Application (Host)             │
│                                                    │
│  ┌──────────────┐  ┌────────────────────────────┐  │
│  │  ChatClient   │  │  ToolCallbackProvider      │  │
│  │  (统一的AI    │  │  (自动发现所有MCP Server    │  │
│  │   调用入口)   │  │   的Tool并注入)             │  │
│  └──────┬───────┘  └──────────┬─────────────────┘  │
│         │                     │                     │
│  ┌──────▼─────────────────────▼──────────────────┐  │
│  │        McpClientManager                       │  │
│  │  - 连接管理/重连/健康检查                      │  │
│  │  - 通过注册中心发现 MCP Server 地址            │  │
│  └──────┬─────────────────────┬──────────────────┘  │
│         │                     │                     │
│  ┌──────▼──────┐    ┌────────▼─────────┐          │
│  │ MCP Client A│    │  MCP Client B    │  ...      │
│  │ (STREAMABLE)│    │  (STDIO/SSE)     │          │
│  └──────┬──────┘    └────────┬─────────┘          │
└─────────┼─────────────────────┼────────────────────┘
          │                     │
    ┌─────▼──────┐      ┌──────▼───────┐
    │ MCP Server  │      │  MCP Server  │
    │ 业务A(Java) │      │ 业务B(Python)│
    │  @McpTool   │      │              │
    └────────────┘      └──────────────┘
          │                     │
    ┌─────▼─────────────────────▼──────┐
    │  注册中心 (Nacos/Consul/Eureka)  │
    └──────────────────────────────────┘
\`\`\`

### 技术实现

**MCP Server 端：**

\`\`\`java
@SpringBootApplication
public class McpDataServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(McpDataServerApplication.class, args);
    }
}

@McpTool
public class DataQueryTools {
    
    @McpTool(name = "query_user_portrait")
    public String queryUserPortrait(
        @McpParam("user_id") String userId,
        @McpParam("dimensions") List<String> dimensions
    ) {
        // 业务逻辑
        return result;
    }
    
    @McpResource(uri = "wanxiang://users/stats")
    public String getUserStats() {
        return statService.getStats();
    }
}
\`\`\`

**application.yml：**
\`\`\`yaml
spring:
  ai:
    mcp:
      server:
        stdio: false
        protocol: STREAMABLE  # 生产环境推荐
  cloud:
    nacos:
      discovery:
        server-addr: 127.0.0.1:8848
        service: mcp-server-data
\`\`\`

**MCP Client/Host 端：**

\`\`\`java
@Configuration
public class McpClientConfig {
    
    @Bean
    public ToolCallbackProvider dataMcpTools(
            McpClientManager mcpClientManager) {
        // 从注册中心发现服务并创建客户端
        return new SyncMcpToolCallbackProvider(
            mcpClientManager.getClient("mcp-server-data")
        );
    }
}

// 统一模型调用
@RestController
public class AiController {
    
    @Autowired
    private ChatClient chatClient;
    
    @PostMapping("/ai/chat")
    public String chat(@RequestBody ChatRequest request) {
        return chatClient.prompt()
            .user(request.getMessage())
            .tools(dataMcpTools)   // 所有MCP工具自动注入
            .call()
            .content();
    }
}
\`\`\`

**多模型路由：**
\`\`\`java
@Configuration
public class ModelRouterConfig {
    
    @Bean
    @Qualifier("deepseekChat")
    public ChatClient deepseekChat(ChatClient.Builder builder) {
        return builder.defaultSystem("你是DeepSeek模型").build();
    }
    
    @Bean
    @Qualifier("gptChat")
    public ChatClient gptChat(ChatClient.Builder builder) {
        return builder.defaultSystem("你是GPT模型").build();
    }
    
    // 路由策略
    @Bean
    public ChatClient routerChatClient(
            @Qualifier("deepseekChat") ChatClient deepseek,
            @Qualifier("gptChat") ChatClient gpt) {
        return request -> {
            if (request.isCostSensitive()) {
                return deepseek.call(request);  // 便宜模型
            }
            if (request.requiresReasoning()) {
                return deepseek.call(request);   // DeepSeek推理强
            }
            return gpt.call(request);            // GPT兜底
        };
    }
}
\`\`\`

### 优缺点

| 维度 | 评价 |
|------|------|
| 架构简洁度 | ⭐⭐⭐⭐ 纯Spring生态，无额外组件 |
| 学习成本 | ⭐⭐⭐⭐ 熟悉Spring即可上手 |
| MCP 协议兼容 | ⭐⭐⭐⭐⭐ 原生支持，版本跟进快 |
| 接口管理 | ⭐⭐⭐ 依赖注册中心基础能力，治理功能有限 |
| 限流/鉴权 | ⭐⭐ 需自行实现或集成Spring Cloud Gateway |
| 多模型路由 | ⭐⭐⭐ 需代码实现路由策略 |
| 可观测性 | ⭐⭐⭐ Spring Actuator + Micrometer |

---

## 方案二：自定义 Unified AI Gateway + MCP Federation

### 核心思路

构建一个独立的 **AI Gateway** 层，统一接管所有 AI 请求路由、MCP Server 注册、鉴权限流和监控，业务应用只通过 Gateway 调用。

### 架构

\`\`\`
                    ┌─────────────────────────────────────┐
                    │        Clients (Web/App/API)         │
                    └──────────────┬──────────────────────┘
                                   │
                    ┌──────────────▼──────────────────────┐
                    │        Unified AI Gateway            │
                    │                                      │
                    │  ┌────────────────────────────────┐   │
                    │  │    AI Router Engine             │   │
                    │  │  ├─ 模型选择: 成本/延迟/能力    │   │
                    │  │  ├─ Fallback链条                │   │
                    │  │  └─ A/B Test分发               │   │
                    │  └────────────────────────────────┘   │
                    │                                      │
                    │  ┌────────────────────────────────┐   │
                    │  │    MCP Federation Hub           │   │
                    │  │  ├─ MCP Server Registry        │   │
                    │  │  ├─ 统一鉴权 (OAuth2/JWT)      │   │
                    │  │  ├─ 限流 (Token Bucket)        │   │
                    │  │  ├─ 审计日志                    │   │
                    │  │  └─ 健康检查/熔断              │   │
                    │  └────────────────────────────────┘   │
                    │                                      │
                    │  ┌────────────────────────────────┐   │
                    │  │    Unified API Portal           │   │
                    │  │  ├─ 接口文档 (OpenAPI)         │   │
                    │  │  ├─ 在线调试                    │   │
                    │  │  └─ 调用统计                    │   │
                    │  └────────────────────────────────┘   │
                    └──────┬──────────────────────────┬────┘
                           │                          │
              ┌────────────▼────┐          ┌─────────▼──────────┐
              │  AI Model Pool   │          │   MCP Servers      │
              │                   │          │                     │
              │ ├ DeepSeek-V4    │          │ ├ 万象Agent MCP    │
              │ ├ GPT-4o         │          │ ├ ChatBI MCP       │
              │ ├ 通义千问        │          │ ├ 标签服务MCP      │
              │ └ Ollama(本地)    │          │ └ 第三方MCP        │
              └──────────────────┘          └─────────────────────┘
\`\`\`

### 技术实现

**Gateway 核心路由引擎：**

\`\`\`java
@Component
public class AiModelRouter {
    
    private final Map<String, ChatClient> modelPool = new ConcurrentHashMap<>();
    
    @PostConstruct
    public void init() {
        modelPool.put("deepseek-v4", buildDeepSeekClient());
        modelPool.put("gpt-4o", buildGptClient());
        modelPool.put("qwen", buildQwenClient());
    }
    
    public ChatClient route(AiRequest request) {
        // 1. 成本优化路由
        if (request.getMaxCost() < 0.001) {
            return modelPool.get("qwen");
        }
        // 2. 能力感知路由
        if (request.requiresReasoning()) {
            return modelPool.get("deepseek-v4");
        }
        // 3. 延迟优先路由
        if (request.isLatencySensitive()) {
            return modelPool.get("gpt-4o");  // 最快
        }
        // 4. Fallback 链
        return modelPool.get("deepseek-v4")
            .fallbackTo(modelPool.get("gpt-4o"))
            .fallbackTo(modelPool.get("qwen"));
    }
}
\`\`\`

**MCP Federation Registry：**

\`\`\`java
@RestController
@RequestMapping("/mcp-registry")
public class McpRegistryController {
    
    private final McpServiceRegistry registry;
    
    // MCP Server 注册
    @PostMapping("/register")
    public void register(@RequestBody McpServiceSpec spec) {
        registry.register(spec);
    }
    
    // 统一 MCP 调用入口
    @PostMapping("/v1/tools/{serverId}/{toolName}")
    public McpCallResponse callTool(
            @PathVariable String serverId,
            @PathVariable String toolName,
            @RequestBody McpCallRequest request) {
        // 鉴权 → 限流 → 调用 → 审计
        return registry.invoke(serverId, toolName, request);
    }
    
    // Health Check
    @GetMapping("/health")
    public Map<String, McpHealth> healthCheck() {
        return registry.checkAll();
    }
}
\`\`\`

**限流与鉴权（Gateway 层统一管控）：**

\`\`\`java
@Component
public class McpRateLimiter {
    
    private final Map<String, RateLimiter> limiters = new ConcurrentHashMap<>();
    
    public boolean tryAcquire(String apiKey, String endpoint) {
        // 按 API Key + 接口 限流
        String key = apiKey + ":" + endpoint;
        return limiters.computeIfAbsent(key, 
            k -> RateLimiter.create(100, Duration.ofMinutes(1))
        ).tryAcquire();
    }
}
\`\`\`

### 优缺点

| 维度 | 评价 |
|------|------|
| 架构简洁度 | ⭐⭐⭐ 独立 Gateway 组件，架构复杂度增加 |
| 学习成本 | ⭐⭐ 需要理解MCP协议 + Gateway设计 |
| MCP 协议兼容 | ⭐⭐⭐⭐⭐ 完全自定义，协议兼容性可控 |
| 接口管理 | ⭐⭐⭐⭐⭐ 统一注册、鉴权、限流、审计完备 |
| 限流/鉴权 | ⭐⭐⭐⭐⭐ Gateway 层原生支持 |
| 多模型路由 | ⭐⭐⭐⭐⭐ 路由策略高度灵活 |
| 可观测性 | ⭐⭐⭐⭐⭐ 统一审计日志 + Prometheus 指标 |

---

## 方案三：分层架构 — Spring AI + API Gateway + MCP Sidecar

### 核心思路

MCP Server 以 Sidecar 模式部署，每个业务服务附带一个 MCP Sidecar 代理，统一由 API Gateway 管理流量和策略。

### 架构

\`\`\`
                    ┌──────────────────────────────────────┐
                    │         API Gateway (Spring Cloud     │
                    │         Gateway / Zuul)               │
                    │                                      │
                    │  ├ 统一入口 /v1/ai/*                  │
                    │  ├ 鉴权: OAuth2 / JWT                │
                    │  ├ 限流: Redis-based Token Bucket     │
                    │  ├ 路由: /v1/ai/wanxiang → Wanxiang   │
                    │  │           /v1/ai/chatbi → ChatBI   │
                    │  └ 监控: Prometheus + Grafana        │
                    └──────┬──────────────────────┬────────┘
                           │                      │
              ┌────────────▼────┐    ┌────────────▼────┐
              │  业务服务A       │    │  业务服务B       │
              │  (万象Agent)     │    │  (ChatBI/Pandas) │
              │                  │    │                  │
              │ ┌──────────────┐│    │ ┌──────────────┐│
              │ │ Spring AI    ││    │ │ Spring AI    ││
              │ │ ChatClient   ││    │ │ ChatClient   ││
              │ └──────┬───────┘│    │ └──────┬───────┘│
              │        │        │    │        │        │
              │ ┌──────▼───────┐│    │ ┌──────▼───────┐│
              │ │MCP Sidecar   ││    │ │MCP Sidecar   ││
              │ │代理 (本地)    ││    │ │代理 (本地)    ││
              │ │Stdio/HTTP    ││    │ │Stdio/HTTP    ││
              │ └──────────────┘│    │ └──────────────┘│
              └─────────────────┘    └─────────────────┘
                           │                      │
              ┌────────────▼────────────────────▼────┐
              │     MCP Server Pool                  │
              │                                      │
              │ ├ 标签服务 MCP Server                 │
              │ ├ 圈人服务 MCP Server (Python)       │
              │ ├ 数据查询 MCP Server                 │
              │ └ 报表服务 MCP Server                 │
              └──────────────────────────────────────┘
\`\`\`

### 核心特性

**1. Gateway 统一路由：**

\`\`\`yaml
spring:
  cloud:
    gateway:
      routes:
        - id: ai-wanxiang
          uri: lb://wanxiang-service
          predicates:
            - Path=/v1/ai/wanxiang/**
          filters:
            - name: RequestRateLimiter
              args:
                redis-rate-limiter.replenishRate: 100
                redis-rate-limiter.burstCapacity: 200
        - id: ai-chatbi
          uri: lb://chatbi-service
          predicates:
            - Path=/v1/ai/chatbi/**
\`\`\`

**2. MCP Sidecar 代理：**

\`\`\`java
@Component
public class McpSidecarProxy {
    
    private final Map<String, McpClient> clients = new ConcurrentHashMap<>();
    
    @EventListener(ApplicationReadyEvent.class)
    public void init() {
        // 自动发现本地的 MCP 服务器进程
        discoverLocalMcpServers();
    }
    
    public McpResult executeTool(String toolName, McpArgs args) {
        // 本地优先 → 远程MCP Server兜底
        McpClient client = clients.get(toolName);
        if (client == null) {
            client = remoteMcpClient(toolName);
        }
        return client.callTool(toolName, args);
    }
}
\`\`\`

**3. 统一配置中心（Apollo/Nacos）：**

\`\`\`yaml
# 模型配置 - 统一管理
ai:
  models:
    deepseek-v4:
      endpoint: https://api.deepseek.com
      api-key: \${DEEPSEEK_KEY}
      max-tokens: 4096
      cost-per-token: 0.0001
      weight: 80  # 路由权重
    gpt-4o:
      endpoint: https://api.openai.com
      api-key: \${GPT_KEY}
      max-tokens: 4096
      cost-per-token: 0.002
      fallback-only: true  # 仅作为Fallback
\`\`\`

### 优缺点

| 维度 | 评价 |
|------|------|
| 架构简洁度 | ⭐⭐ 三层架构，组件较多 |
| 学习成本 | ⭐⭐ 需要理解Gateway+Sidecar+MCP |
| MCP 协议兼容 | ⭐⭐⭐⭐⭐ 完全兼容 |
| 接口管理 | ⭐⭐⭐⭐⭐ Gateway统一管控 |
| 限流/鉴权 | ⭐⭐⭐⭐⭐ Gateway原生能力 |
| 多模型路由 | ⭐⭐⭐⭐⭐ 配置中心动态下发 |
| 运维成本 | ⭐⭐ 组件多，部署较复杂 |
| 可观测性 | ⭐⭐⭐⭐⭐ 全链路监控 |

---

## 方案对比汇总

| 维度 | 方案一：原生Starter | 方案二：AI Gateway | 方案三：分层Sidecar |
|------|:----------------:|:----------------:|:----------------:|
| **实现复杂度** | ⭐低 | ⭐⭐⭐中高 | ⭐⭐⭐⭐高 |
| **MCP原生支持** | 最强 | 中等（需自定义） | 强 |
| **接口统一管理** | 弱 | 强 | 最强 |
| **多模型路由** | 中等 | 强 | 强 |
| **限流/鉴权** | 弱 | 强 | 最强 |
| **运维成本** | 低 | 中 | 高 |
| **适合团队规模** | 小团队 | 中大型 | 大型 |
| **快速上线** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| **可扩展性** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **与Spring AI版本同步** | 自动 | 手动 | 自动+手动 |

---

## 推荐方案

### 🏆 推荐：方案一 + 渐进式演进

如果是从现有 Spring AI 项目起步，推荐**方案一（原生 Starter）作为第一阶段**，按以下路线演进：

\`\`\`
Phase 1 (1-2周)           Phase 2 (2-4周)           Phase 3 (持续)
───────────────          ───────────────           ──────────────
方案一：原生Starter  →    引入Gateway层       →    完善治理能力
                          (方案二/三子集)
┌──────────────┐       ┌──────────────────┐       ┌──────────────┐
│ Spring AI    │       │ + Spring Cloud   │       │ + MCP Registry│
│ MCP Starter  │       │   Gateway        │       │ + 统一监控    │
│ ChatClient   │  ──►  │ + 注册中心       │  ──►  │ + 模型路由    │
│ @McpTool     │       │ + 基础限流       │       │ + 审计日志    │
│ 单模型       │       │ + Config Center  │       │ + A/B测试     │
└──────────────┘       └──────────────────┘       └──────────────┘
\`\`\`

**推荐理由：**

1. **快速验证** — 原生 Starter 开箱即用，1~2天可跑通完整 MCP 链路
2. **渐进无痛** — 不阻塞业务迭代，后续可平滑引入 Gateway/Sidecar
3. **生态优势** — Spring AI 官方 MCP Starter 随版本持续迭代，社区成熟
4. **适合当前场景** — 万象和 ChatBI 本就是 Spring Boot 生态，集成成本最低

**MVP 快速启动示例：**

\`\`\`xml
<dependency>
    <groupId>org.springframework.ai</groupId>
    <artifactId>spring-ai-starter-mcp-server-webmvc</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.ai</groupId>
    <artifactId>spring-ai-starter-mcp-client-webflux</artifactId>
</dependency>
\`\`\`

\`\`\`yaml
spring:
  ai:
    mcp:
      client:
        # 声明式配置多个 MCP Server
        connections:
          - name: wanxiang-agent
            url: http://mcp-wanxiang:8080
            transport: streamable-http
          - name: chatbi-service
            url: http://mcp-chatbi:8080
            transport: streamable-http
\`\`\`

**关于接口统一管理的 Phase 2 增量：**

\`\`\`yaml
spring:
  cloud:
    gateway:
      routes:
        - id: ai-unified
          uri: lb://ai-host-service
          predicates:
            - Path=/v1/ai/**
          filters:
            - name: RequestRateLimiter  # 限流
            - name: JwtAuthentication   # 统一鉴权
            - name: AiAuditLogger       # 审计日志
\`\`\`

---

## 总结

| 需求 | 方案一 Phase1 | 方案一 Phase2 |
|------|:-----------:|:-----------:|
| MCP 协议接入 | ✅ 原生支持 | ✅ 原生支持 |
| 多模型调用 | ✅ ChatClient统一 | ✅ + 路由策略 |
| 统一鉴权 | ❌ 需自行实现 | ✅ Gateway 统一 |
| 限流控制 | ❌ 需自行实现 | ✅ Gateway 统一 |
| 服务发现 | ✅ Nacos/Consul | ✅ Nacos/Consul |
| 可观测性 | ⚠️ Actuator基础 | ✅ + Prometheus+Grafana |
| 动态配置 | ⚠️ 本地配置 | ✅ 配置中心统一 |

**最终推荐：先用方案一（原生 Spring AI MCP Starter）快速上线，再按需演进到 Gateway 架构。** 不要一开始就追求大而全的 Gateway，防止过度设计耽误业务迭代。

---

## 四、方案一深度展开：MCP + 接口 + 文档三位一体

### 4.1 核心架构理念

方案一的目标是构建一个 **三位一体** 的框架，让每个业务方法同时具备三重身份：

\`\`\`
┌─────────────────────────────────────────────────────────┐
│                     @Service 业务方法                     │
│                                                          │
│           ┌──────────┼────────────┐                      │
│           ▼          ▼            ▼                      │
│    ┌──────────┐ ┌──────────┐ ┌──────────┐               │
│    │ REST API │ │ MCP Tool │ │  文档     │               │
│    │(HTTP JSON)│ │(Streamable)│ │(OpenAPI) │               │
│    └──────────┘ └──────────┘ └──────────┘               │
│                                                          │
│  ┌────────────────────────────────────────────────┐     │
│  │        自动注册 & 文档生成引擎                    │     │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐     │     │
│  │  │OpenAPI   │  │MCP Schema│  │Markdown  │     │     │
│  │  │ 生成器   │  │  生成器  │  │ 文档页   │     │     │
│  │  └──────────┘  └──────────┘  └──────────┘     │     │
│  └────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────┘
\`\`\`

**核心原则：接口即 MCP，一次定义，三处可用。**

---

### 4.2 接口即 MCP：自动桥接

#### 4.2.1 统一注解体系

定义一套统一的注解，一个方法同时注册 REST 和 MCP：

\`\`\`java
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface AiApi {
    String name();                          // 方法名（也是 MCP tool name）
    String path() default "";              // REST 路径，为空则自动生成
    String description() default "";       // 描述
    HttpMethod method() default HttpMethod.POST;  // HTTP 方法
    String[] tags() default {};             // 分组标签
    boolean enableMcp() default true;       // 是否暴露为 MCP Tool
    boolean enableRest() default true;      // 是否暴露为 REST API
}
\`\`\`

#### 4.2.2 自动桥接处理器

\`\`\`java
@Component
public class AiApiBridgeRegistry implements BeanPostProcessor {
    
    private final List<AiApiEndpoint> endpoints = new CopyOnWriteArrayList<>();
    
    @Override
    public Object postProcessAfterInitialization(Object bean, String beanName) {
        for (Method method : bean.getClass().getMethods()) {
            AiApi ann = method.getAnnotation(AiApi.class);
            if (ann == null) continue;
            
            // 1. 注册 REST 端点
            if (ann.enableRest()) {
                registerRestEndpoint(bean, method, ann);
            }
            
            // 2. 注册 MCP Tool
            if (ann.enableMcp()) {
                registerMcpTool(bean, method, ann);
            }
            
            // 3. 生成文档
            endpoints.add(new AiApiEndpoint(bean, method, ann));
        }
        return bean;
    }
    
    private void registerRestEndpoint(Object bean, Method method, AiApi ann) {
        // 动态注册到 Spring MVC
        // 方案：使用 RequestMappingHandlerMapping 动态添加
        log.info("✅ REST端点注册: {} -> {}", ann.path(), method.getName());
    }
    
    private void registerMcpTool(Object bean, Method method, AiApi ann) {
        // 动态注册为 MCP Tool（通过 ToolCallback 注入到 ChatClient）
        // Spring AI 的 ToolCallback 可以编程式注册
        log.info("✅ MCP工具注册: {} -> {}", ann.name(), method.getName());
    }
}
\`\`\`

#### 4.2.3 使用示例

\`\`\`java
@Service
public class UserPortraitService {
    
    @AiApi(
        name = "query_user_portrait",
        path = "/api/wanxiang/portrait",
        description = "查询用户画像标签数据",
        tags = {"万象", "用户画像"}
    )
    public PortraitResult queryPortrait(
        @ApiParam("用户ID") String userId,
        @ApiParam(value = "维度列表", example = "["年龄","性别","消费力"]") List<String> dimensions
    ) {
        // 业务逻辑
        return portraitService.query(userId, dimensions);
    }
    
    @AiApi(
        name = "batch_query_tags",
        path = "/api/wanxiang/tags/batch",
        description = "批量查询标签值"
    )
    public Map<String, Object> batchQueryTags(@RequestBody BatchQueryRequest request) {
        return tagService.batchQuery(request);
    }
}
\`\`\`

#### 4.2.4 自动映射规则

| 维度 | REST API | MCP Tool |
|------|----------|----------|
| 路径 | \`@AiApi.path\` → \`/api/{module}/{name}\` | Streamable HTTP endpoint |
| 参数 | JSON body → Java对象 | JSON Schema 自动生成 |
| 返回 | HTTP Response JSON | \`@McpTool\` 返回值 |
| 鉴权 | JWT/Token拦截器 | MCP Session鉴权 |
| 限流 | Gateway过滤器 | MCP Client限流 |
| 文档 | OpenAPI 3.1 | MCP Schema (JSON-RPC) |

---

### 4.3 分布式 MCP 调用

#### 4.3.1 架构总览

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                   AI Host (统一入口)                         │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              McpClientManager                         │   │
│  │  ┌──────────────────────────────────────────────┐    │   │
│  │  │           MCP Service Discovery                │    │   │
│  │  │  ┌──────────┐ ┌──────────┐ ┌──────────┐      │    │   │
│  │  │  │ 万象服务  │ │ ChatBI   │ │ 标签服务  │      │    │   │
│  │  │  │ MCP Client│ │ MCP      │ │ MCP      │      │    │   │
│  │  │  │           │ │ Client   │ │ Client   │      │    │   │
│  │  │  └─────┬─────┘ └────┬─────┘ └────┬─────┘      │    │   │
│  │  └────────┼────────────┼────────────┼───────────┘    │   │
│  └───────────┼────────────┼────────────┼──────────────┘   │
└──────────────┼────────────┼────────────┼──────────────────┘
               │ Streamable │ Streamable │ Streamable
               │ HTTP       │ HTTP       │ HTTP
    ┌──────────▼──────┐ ┌───▼────────┐ ┌─▼──────────────┐
    │ 万象 MCP Server  │ │ChatBI MCP  │ │ 标签 MCP Server │
    │ (8081)          │ │Server(8082)│ │ (8083)         │
    │                  │ │            │ │                 │
    │ @McpTool        │ │ @McpTool   │ │ @McpTool       │
    │ - queryPortrait │ │ - askBI    │ │ - listTags     │
    │ - batchTags     │ │ - genSQL   │ │ - tagValues    │
    └─────────────────┘ └────────────┘ └─────────────────┘
               │                │                │
         ┌─────┴────────────────┴────────────────┴─────┐
         │          Nacos / Consul 注册中心              │
         │  (服务发现 + 健康检查)                        │
         └──────────────────────────────────────────────┘
\`\`\`

#### 4.3.2 MCP Server 端（每个微服务独立部署）

**依赖：**
\`\`\`xml
<dependency>
    <groupId>org.springframework.ai</groupId>
    <artifactId>spring-ai-starter-mcp-server-webmvc</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
</dependency>
\`\`\`

**配置：**
\`\`\`yaml
server:
  port: 8081

spring:
  application:
    name: mcp-server-wanxiang
  ai:
    mcp:
      server:
        name: wanxiang-agent
        version: 1.0.0
        protocol: STREAMABLE    # ← Streamable HTTP 传输
        transport: streamable-http
        sse-poll-interval: 500  # SSE 轮询间隔(ms)
  cloud:
    nacos:
      discovery:
        server-addr: 127.0.0.1:8848
        service: mcp-server-wanxiang
\`\`\`

**代码：**
\`\`\`java
@SpringBootApplication
@EnableDiscoveryClient
public class WanxiangMcpServer {
    public static void main(String[] args) {
        SpringApplication.run(WanxiangMcpServer.class, args);
    }
}

@McpTool
public class WanxiangAgentTools {
    
    private final UserPortraitService portraitService;
    private final TagService tagService;
    
    @McpTool(
        name = "query_user_portrait",
        description = "查询用户画像标签，支持年龄/性别/消费力/兴趣等维度"
    )
    public PortraitResult queryUserPortrait(
        @McpParam("用户ID（数字格式）") String userId,
        @McpParam("查询维度列表，如 [\\"年龄\\",\\"性别\\",\\"消费力\\"]") 
        @JsonProperty("dimensions") List<String> dimensions
    ) {
        return portraitService.query(userId, dimensions);
    }
    
    @McpTool(name = "batch_query_tags", description = "批量查询标签值")
    public Map<String, Object> batchQueryTags(
        @McpParam("批量查询请求") BatchQueryRequest request
    ) {
        return tagService.batchQuery(request);
    }
}
\`\`\`

#### 4.3.3 MCP Client 端（AI Host，统一发现与调用）

**依赖：**
\`\`\`xml
<dependency>
    <groupId>org.springframework.ai</groupId>
    <artifactId>spring-ai-starter-mcp-client-webflux</artifactId>
</dependency>
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
</dependency>
\`\`\`

**配置：**
\`\`\`yaml
spring:
  ai:
    mcp:
      client:
        # 静态连接配置（适合少量确定的服务）
        connections:
          - name: wanxiang-agent
            url: http://localhost:8081
            transport: streamable-http
          - name: chatbi-service
            url: http://localhost:8082
            transport: streamable-http
\`\`\`

**动态服务发现（从注册中心自动发现 MCP Server）：**
\`\`\`java
@Configuration
public class McpClientAutoDiscovery {
    
    @Bean
    @ConditionalOnBean(NamingService.class)
    public McpClientManager mcpClientManager(
            NamingService namingService,
            ObjectProvider<McpClient.Builder> clientBuilder
    ) {
        return new McpClientManager(namingService, clientBuilder);
    }
}

@Component
public class McpClientManager {
    
    private final Map<String, McpClient> clients = new ConcurrentHashMap<>();
    private final ScheduledExecutorService scheduler = Executors.newSingleThreadScheduledExecutor();
    
    public McpClientManager(NamingService naming, ObjectProvider<McpClient.Builder> builderProvider) {
        // 每 30 秒刷新服务列表
        scheduler.scheduleAtFixedRate(() -> {
            try {
                // 发现所有标记为 MCP 的服务
                List<Instance> instances = naming.getAllInstances(
                    "mcp-server-*", true  // 支持通配符匹配
                );
                for (Instance instance : instances) {
                    String serviceName = instance.getServiceName();
                    if (!clients.containsKey(serviceName)) {
                        McpClient client = builderProvider.getObject()
                            .name(serviceName)
                            .url(String.format("http://%s:%d", 
                                instance.getIp(), instance.getPort()))
                            .transport(McpTransport.STREAMABLE_HTTP)
                            .build();
                        clients.put(serviceName, client);
                        log.info("🔄 MCP Client 自动连接: {} -> {}:{}", 
                            serviceName, instance.getIp(), instance.getPort());
                    }
                }
            } catch (Exception e) {
                log.warn("MCP服务发现刷新失败", e);
            }
        }, 0, 30, TimeUnit.SECONDS);
    }
    
    public McpClient getClient(String serviceName) {
        return clients.get(serviceName);
    }
    
    public Map<String, McpClient> getAllClients() {
        return Collections.unmodifiableMap(clients);
    }
}
\`\`\`

**统一工具注入到 ChatClient：**
\`\`\`java
@Component
public class UnifiedToolInjector {
    
    @Bean
    public ChatClient chatClient(
            ChatClient.Builder builder,
            McpClientManager clientManager) {
        
        // 收集所有 MCP Server 的 ToolCallbackProvider
        List<ToolCallbackProvider> providers = clientManager.getAllCliets()
            .entrySet().stream()
            .map(e -> new SyncMcpToolCallbackProvider(e.getValue()))
            .collect(Collectors.toList());
        
        // 合并所有工具
        ToolCallbackProvider combined = ToolCallbackProvider.combine(providers);
        
        return builder
            .defaultTools(combined)
            .build();
    }
}
\`\`\`

#### 4.3.4 分布式调用流程

\`\`\`
User: "帮我查一下北京地区高消费力男性用户的画像"
       │
       ▼
AI Host ChatClient
       │
       ├── 模型选择路由 → DeepSeek-V4 (推理强)
       │
       ├── 工具发现阶段
       │    └── ToolCallbackProvider 返回所有 MCP Server 的 Tool 列表
       │
       ├── 模型决策 → 需要调用 query_user_portrait
       │
       ├── MCP 调用
       │    ├── 1. McpClientManager 定位服务: mcp-server-wanxiang
       │    ├── 2. 构建 JSON-RPC 请求
       │    │    {
       │    │      "method": "tools/call",
       │    │      "params": {
       │    │        "name": "query_user_portrait",
       │    │        "arguments": {
       │    │          "user_id": "12345",
       │    │          "dimensions": ["年龄","性别","消费力"]
       │    │        }
       │    │      }
       │    │    }
       │    ├── 3. Streamable HTTP 发送 → POST /mcp/v1/tools/call
       │    │    └── 头部: Content-Type: application/json
       │    │    └── 响应: SSE 流式返回或 JSON 一次性返回
       │    ├── 4. 万象 MCP Server 接收
       │    │    ├── 反序列化参数
       │    │    ├── 调用 @McpTool 方法
       │    │    ├── 执行画像查询
       │    │    └── 返回结果
       │    └── 5. 结果返回 AI Model
       │
       └── AI 组织最终回答
\`\`\`

---

### 4.4 Streamable HTTP 传输详解

#### 4.4.1 为什么选择 Streamable HTTP

| 传输方式 | 适用场景 | 优势 | 劣势 |
|---------|---------|------|------|
| STDIO | 本地单进程 | 简单直接 | 不能跨网络 |
| SSE (传统) | 简单推送 | 单向推送 | 连接开销大 |
| **Streamable HTTP** | **分布式生产环境** | **双向、低延迟、可扩展** | **配置略复杂** |

#### 4.4.2 Streamable HTTP 工作原理

\`\`\`
MCP Client (AI Host)                    MCP Server (业务服务)
       │                                       │
       │  1. POST /mcp/v1/tools/list            │
       │  ─────────────────────────────────►    │
       │  ◄─────────────────────────────────    │
       │  Response: Tool[] (JSON)               │
       │                                       │
       │  2. POST /mcp/v1/tools/call             │
       │  Content-Type: application/json        │
       │  {name, arguments}                      │
       │  ─────────────────────────────────►    │
       │                                       │
       │  Option A: 一次性响应                   │
       │  ◄─────────────────────────────────    │
       │  Response: ToolResult (JSON)           │
       │                                       │
       │  Option B: SSE 流式响应                │
       │  ◄──── SSE stream ────────────────    │
       │  data: {"type":"progress",...}        │
       │  data: {"type":"result",...}          │
       │                                       │
       │  3. GET /mcp/v1/events (SSE订阅)       │
       │  (服务端主动推送工具变更通知)            │
       │  ◄──── SSE stream ────────────────    │
       │  data: {"type":"tool_list_changed"}   │
\`\`\`

#### 4.4.3 Spring Boot 配置

\`\`\`yaml
spring:
  ai:
    mcp:
      server:
        protocol: STREAMABLE
        transport: streamable-http
        # 可选：SSE 相关配置
        sse-poll-interval: 500          # 轮询间隔 (ms)
        sse-max-connections: 100        # 最大 SSE 连接数
        idle-timeout: 300000            # 空闲超时 (ms)
\`\`\`

**WebMVC 实现（推荐，适合多数场景）：**
\`\`\`
依赖: spring-ai-starter-mcp-server-webmvc
默认自动配置:
  - POST /mcp/v1/tools/call
  - POST /mcp/v1/tools/list
  - GET  /mcp/v1/events (SSE)
  - GET  /mcp/v1/health
\`\`\`

**WebFlux 实现（高并发）：**
\`\`\`
依赖: spring-ai-starter-mcp-server-webflux
优势: 非阻塞、背压支持、高吞吐
\`\`\`

---

### 4.5 自动文档生成

#### 4.5.1 三层文档体系

\`\`\`
┌──────────────────────────────────────────────────────────┐
│                  统一文档门户                               │
│                                                           │
│  ┌──────────────────┐  ┌──────────────┐  ┌────────────┐  │
│  │  MCP Schema       │  │ OpenAPI 3.1  │  │  Markdown   │  │
│  │  (JSON-RPC)       │  │ (REST)       │  │ (人可读)    │  │
│  │                   │  │              │  │            │  │
│  │ /mcp/v1/tools/list │  │ /v3/api-docs │  │ /docs/mcp  │  │
│  │ 自动 JSON Schema  │  │ SpringDoc    │  │ 格式化文档 │  │
│  └──────────────────┘  └──────────────┘  └────────────┘  │
│                                                           │
│  统一数据源: @AiApi / @McpTool 注解元数据                   │
└──────────────────────────────────────────────────────────┘
\`\`\`

#### 4.5.2 MCP Schema 自动生成

MCP 的 Schema 是自动的——\`@McpTool\` 注解天然生成 JSON Schema：

\`\`\`json
// GET /mcp/v1/tools/list 响应 (自动生成)
{
  "tools": [
    {
      "name": "query_user_portrait",
      "description": "查询用户画像标签",
      "inputSchema": {
        "type": "object",
        "properties": {
          "user_id": {
            "type": "string",
            "description": "用户ID（数字格式）"
          },
          "dimensions": {
            "type": "array",
            "items": {"type": "string"},
            "description": "查询维度列表"
          }
        },
        "required": ["user_id", "dimensions"]
      }
    }
  ]
}
\`\`\`

#### 4.5.3 REST API 文档自动生成（OpenAPI 3.1 + SpringDoc）

依赖：
\`\`\`xml
<dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
    <version>2.8.0</version>
</dependency>
\`\`\`

自动生成 OpenAPI 文档：
\`\`\`yaml
springdoc:
  api-docs:
    path: /v3/api-docs
  swagger-ui:
    path: /swagger-ui.html
    operations-sorter: method
    tags-sorter: alpha
  packages-to-scan: com.yourcompany.mcp
\`\`\`

#### 4.5.4 MCP-OpenAPI 统一描述（关键创新）

将 MCP Tool 映射为 OpenAPI 的 扩展字段，实现 **统一描述**：

\`\`\`yaml
openapi: 3.1.0
info:
  title: 万象 MCP API
  version: 1.0.0
  x-mcp-server: true                    # ← MCP 标记
paths:
  /api/wanxiang/portrait:
    post:
      operationId: query_user_portrait
      x-mcp-tool: true                   # ← 同时也是 MCP Tool
      x-mcp-tool-name: query_user_portrait
      summary: 查询用户画像
      x-mcp-param-mapping:
        # REST body 参数到 MCP arguments 的映射
        body.user_id -> arguments.user_id
        body.dimensions -> arguments.dimensions
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                user_id:
                  type: string
                  description: 用户ID
                dimensions:
                  type: array
                  items:
                    type: string
              required:
                - user_id
                - dimensions
      responses:
        '200':
          description: 查询成功
          x-mcp-result: true             # ← 同时也是 MCP 返回
\`\`\`

#### 4.5.5 文档聚合门户

\`\`\`java
@RestController
@RequestMapping("/docs")
public class ApiDocumentationController {
    
    private final McpServerInstance mcpServer;
    private final List<AiApiEndpoint> endpoints;
    
    // 1. 统一服务列表
    @GetMapping("/services")
    public List<McpServiceDoc> listServices() {
        // 聚合所有已注册的 MCP Server 及其工具
        return mcpServer.discovery();
    }
    
    // 2. MCP Schema 查看器（可读版）
    @GetMapping("/mcp")
    public String mcpDocPage() {
        // 生成 MCP 工具的 Markdown/HTML 文档
        return buildMcpDocPage();
    }
    
    // 3. 接口状态监控
    @GetMapping("/health")
    public Map<String, HealthStatus> healthCheck() {
        // 检查所有注册的 MCP Server 健康状态
        return healthChecker.checkAll();
    }
    
    // 4. 在线调试
    @PostMapping("/playground/try")
    public Object tryTool(@RequestBody McpTryRequest request) {
        // 在线调试 MCP Tool
        return mcpServer.callTool(request.getToolName(), request.getArguments());
    }
}
\`\`\`

**生成的文档内容示例：**

\`\`\`markdown
# 万象 MCP 服务文档

## 服务信息
- 服务名: mcp-server-wanxiang
- 版本: 1.0.0
- 传输协议: Streamable HTTP
- 状态: ✅ 健康 (响应时间 12ms)

## 可用工具 (3)

### 1. query_user_portrait
- **描述**: 查询用户画像标签
- **REST等效**: POST /api/wanxiang/portrait
- **参数**:
  | 名称 | 类型 | 必填 | 描述 |
  |------|------|------|------|
  | user_id | string | ✅ | 用户ID（数字格式）|
  | dimensions | array[string] | ✅ | 查询维度列表 |
- **调试**: [在线测试 →](/docs/playground?tool=query_user_portrait)

### 2. batch_query_tags
- **描述**: 批量查询标签值
...
\`\`\`

---

### 4.6 完整项目结构

\`\`\`
mcp-platform/
├── mcp-api/                          # 公共 API 定义
│   └── src/main/java/.../
│       ├── annotation/
│       │   └── AiApi.java            # 统一注解
│       ├── dto/
│       │   ├── McpRequest.java
│       │   └── McpResponse.java
│       └── bridge/
│           └── AiApiBridgeRegistry.java  # 自动桥接
├── mcp-server-wanxiang/              # 万象 MCP Server
│   ├── pom.xml
│   └── src/main/...
│       ├── WanxiangMcpServer.java
│       ├── tools/
│       │   ├── UserPortraitTools.java   # @McpTool
│       │   └── TagQueryTools.java
│       └── application.yml
├── mcp-server-chatbi/                # ChatBI MCP Server
│   ├── pom.xml
│   └── src/main/...
│       ├── ChatbiMcpServer.java
│       ├── tools/
│       │   ├── ChatBiTools.java
│       │   └── SqlGenTools.java
│       └── application.yml
├── mcp-server-label/                 # 标签 MCP Server
│   └── ...
├── mcp-host/                         # AI Host 统一入口
│   ├── pom.xml
│   └── src/main/...
│       ├── AiHostApplication.java
│       ├── client/
│       │   ├── McpClientManager.java     # 动态发现
│       │   └── UnifiedToolInjector.java   # 统一注入
│       ├── controller/
│       │   └── AiChatController.java     # 对话接口
│       ├── docs/
│       │   └── ApiDocumentationController.java  # 文档门户
│       └── application.yml
└── pom.xml                           # 父 POM
\`\`\`

---

### 4.7 启动与验证

\`\`\`bash
# 1. 启动注册中心
docker compose up -d nacos

# 2. 启动各 MCP Server
cd mcp-server-wanxiang && mvn spring-boot:run  # :8081
cd mcp-server-chatbi  && mvn spring-boot:run  # :8082
cd mcp-server-label   && mvn spring-boot:run  # :8083

# 3. 启动 AI Host
cd mcp-host && mvn spring-boot:run             # :8080

# 4. 验证
curl http://localhost:8080/mcp/v1/tools/list
# → 返回所有已注册 MCP Server 的工具列表

curl http://localhost:8080/docs/services
# → 返回服务列表及文档
\`\`\`

**验证工具自动发现：**
\`\`\`bash
# 手动触发 MCP 调用
curl -X POST http://localhost:8080/mcp/v1/tools/call \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "query_user_portrait",
    "arguments": {
      "user_id": "12345",
      "dimensions": ["年龄", "性别", "消费力"]
    }
  }'
\`\`\`

---

### 4.8 方案一能力覆盖矩阵

| 需求 | 实现方式 | 状态 |
|------|---------|:----:|
| MCP 协议接入 | \`@McpTool\` 注解 + \`spring-ai-starter-mcp-server-webmvc\` | ✅ 原生 |
| Streamable HTTP | \`protocol: STREAMABLE\` + Streamable HTTP transport | ✅ 原生 |
| 分布式 MCP 调用 | 每个微服务独立 MCP Server + Nacos 注册发现 + McpClientManager | ✅ 方案 |
| 接口即 MCP | \`@AiApi\` 统一注解 → 自动注册 REST + MCP | ✅ 框架 |
| MCP Schema 文档 | 自动生成 (\`/mcp/v1/tools/list\`) | ✅ 自动 |
| REST API 文档 | SpringDoc OpenAPI 3.1 (\`/swagger-ui.html\`) | ✅ Spring生态 |
| 统一文档门户 | \`ApiDocumentationController\` 聚合展示 | ✅ 方案 |
| 在线调试 | \`/docs/playground/try\` 端点 | ✅ 方案 |
| 服务健康检查 | \`/mcp/v1/health\` + Nacos 健康检查 | ✅ 自动 |
|

---

### 4.9 推荐实施路线

\`\`\`
第1周                   第2周                   第3-4周
─────────────          ─────────────           ──────────────
搭建 MCP 基础框架       扩展分布式 MCP          完善文档体系
├── 创建 mcp-api 模块   ├── 部署 Nacos          ├── 集成 SpringDoc
├── 实现 @AiApi 注解    ├── 各服务注册发现      ├── 开发文档门户
├── 首个 MCP Server     ├── McpClientManager    ├── 在线调试
├── Streamable HTTP     ├── 统一工具注入        └── 文档部署
└── 端到端验证          └── 分布式调用验证
\`\`\`

---

## 五、Nacos + 域名：统一访问层深度设计

### 5.1 为什么需要域名

在微服务 + MCP 架构中，MCP Server 通过 Nacos 注册后，AI Host 需要访问它们。如果直接使用 IP:Port：

| 问题 | 说明 |
|------|------|
| IP 硬编码 | 扩缩容或重启后 IP 变化，需要手动更新 |
| 无法负载均衡 | 多实例需要自行实现负载均衡 |
| HTTPS/TLS 困难 | 每个实例单独管理证书 |
| 运维割裂 | 服务名与访问地址脱节，排查困难 |

引入域名后：

\`\`\`
用户请求 → https://mcp.yourcompany.com/wanxiang/portrait
                               ↓
                     DNS 解析 → Nacos 服务发现
                               ↓
                   负载均衡 → 具体实例 IP:Port
\`\`\`

### 5.2 四层域名架构

\`\`\`
                            ┌──────────────────────────────┐
                            │        外部 DNS              │
                            │  mcp.yourcompany.com → VIP   │
                            └────────────┬─────────────────┘
                                         │ A记录/CNAME
                            ┌────────────▼─────────────────┐
                            │     负载均衡器 (SLB/Nginx)    │
                            │  - TLS 终结                   │
                            │  - 域名 → 反向代理            │
                            │  - 统一 443 入口              │
                            └────────────┬─────────────────┘
                                         │
            ┌────────────────────────────┼────────────────────────────┐
            │                            │                            │
  ┌─────────▼──────────┐    ┌───────────▼──────────┐    ┌───────────▼──────────┐
  │  API Gateway        │    │   AI Host (MCP Client)│    │   其他内部服务       │
  │  (Spring Cloud GW)  │    │                      │    │                      │
  │  gw.mcp.internal    │    │  host.mcp.internal   │    │  svc.mcp.internal    │
  └─────────┬──────────┘    └───────────┬──────────┘    └───────────┬──────────┘
            │                            │                            │
            └──────────────┬─────────────┴──────────────┬────────────┘
                           │                            │
                  ┌────────▼────────┐          ┌───────▼────────┐
                  │   Nacos Cluster  │          │  CoreDNS       │
                  │   (注册中心)     │          │  (内部DNS)     │
                  │   nacos:8848    │          │                │
                  └────────┬────────┘          └───────┬────────┘
                           │                            │
            ┌──────────────┼────────────────────────────┘
            │              │              Internal DNS 解析:
            │              │              *.mcp.internal → Nacos
            │              │
   ┌────────▼────────┐  ┌──▼──────────┐  ┌──────────────┐
   │ 万象 MCP Server  │  │ ChatBI MCP  │  │ 标签 MCP     │
   │  mcp-wanxiang    │  │ mcp-chatbi  │  │ mcp-label    │
   │  :8081           │  │  :8082      │  │  :8083       │
   └─────────────────┘  └─────────────┘  └──────────────┘
\`\`\`

### 5.3 域名分层设计

| 层级 | 域名 | 用途 | 访问范围 |
|------|------|------|---------|
| **外部** | \`mcp.yourcompany.com\` | 用户/第三方MCP调用入口 | 公网 |
| **Gateway** | \`gw.mcp.internal\` | API Gateway 内部地址 | 内网 |
| **AI Host** | \`host.mcp.internal\` | AI Host MCP Client 访问 | 内网 |
| **服务** | \`mcp-wanxiang.mcp.internal\` | 万象 MCP Server | 内网 |
| **服务** | \`mcp-chatbi.mcp.internal\` | ChatBI MCP Server | 内网 |
| **服务** | \`mcp-label.mcp.internal\` | 标签 MCP Server | 内网 |
| **Nacos** | \`nacos.mcp.internal\` | Nacos 集群 | 内网 |

### 5.4 方案一：CoreDNS + Nacos 插件（推荐）

将 Nacos 注册的服务自动导出为 DNS 域名，CoreDNS 提供服务发现，实现「服务名 ↔ 域名」的自动映射。

#### 架构
\`\`\`
MCP Server 注册到 Nacos
       │
       │ 服务名: mcp-wanxiang
       ▼
Nacos CoreDNS 插件 (sidecar)
       │
       │ 自动注册 DNS 记录
       ▼
CoreDNS 服务器
  mcp-wanxiang.mcp.internal  A  10.0.1.10:8081
  mcp-wanxiang.mcp.internal  A  10.0.1.11:8081  (多实例)
       │
       │ DNS 查询
       ▼
AI Host / Gateway 通过域名访问
\`\`\`

#### 部署 CoreDNS + Nacos 插件

\`\`\`yaml
# CoreDNS Corefile
.:53 {
    errors
    health
    ready
    # Nacos 插件
    nacos {
        # Nacos 服务器地址
        server_addr http://nacos.mcp.internal:8848
        # 域名后缀
        domain_suffix mcp.internal
        # 刷新间隔（秒）
        refresh_interval 30
        # 默认 TTL
        ttl 60
    }
    # 转发外部 DNS
    forward . 8.8.8.8 114.114.114.114
    cache 30
}
\`\`\`

#### Nacos CoreDNS 插件 Pod 配置
\`\`\`yaml
# Kubernetes Deployment
apiVersion: apps/v1
kind: Deployment
metadata:
  name: coredns-nacos
spec:
  replicas: 2
  selector:
    matchLabels:
      app: coredns-nacos
  template:
    metadata:
      labels:
        app: coredns-nacos
    spec:
      containers:
      - name: coredns
        image: coredns/coredns:latest
        args: ["-conf", "/etc/coredns/Corefile"]
        ports:
        - containerPort: 53
          name: dns
          protocol: UDP
        - containerPort: 53
          name: dns-tcp
          protocol: TCP
        volumeMounts:
        - name: config
          mountPath: /etc/coredns
      # Nacos 插件 sidecar
      - name: nacos-dns-sidecar
        image: nacos-group/nacos-coredns-plugin:latest
        env:
        - name: NACOS_SERVER_ADDR
          value: "http://nacos.mcp.internal:8848"
        - name: DOMAIN_SUFFIX
          value: "mcp.internal"
      volumes:
      - name: config
        configMap:
          name: coredns-config
\`\`\`

#### 验证 DNS 解析
\`\`\`bash
# 查询 MCP Server 的 IP
dig mcp-wanxiang.mcp.internal @coredns-ip

# 结果
mcp-wanxiang.mcp.internal. 60 IN A 10.0.1.10
mcp-wanxiang.mcp.internal. 60 IN A 10.0.1.11

# 查询 ChatBI MCP Server
dig mcp-chatbi.mcp.internal @coredns-ip
\`\`\`

#### AI Host 配置（使用域名）
\`\`\`yaml
spring:
  ai:
    mcp:
      client:
        connections:
          - name: wanxiang-agent
            url: http://mcp-wanxiang.mcp.internal:8081
            transport: streamable-http
          - name: chatbi-service
            url: http://mcp-chatbi.mcp.internal:8082
            transport: streamable-http
\`\`\`

### 5.5 方案二：Spring Cloud Gateway + Nacos 统一路由

不直接给 MCP Server 配域名，而是通过 Gateway 统一转发，Gateway 本身暴露一个域名。

#### 架构
\`\`\`
外部请求 → https://mcp.yourcompany.com/wanxiang/query
                                  ↓
                    Spring Cloud Gateway
                    ├── gw.mcp.internal
                    ├── 路由规则:
                    │   /wanxiang/** → mcp-wanxiang:8081
                    │   /chatbi/**   → mcp-chatbi:8082
                    │   /label/**    → mcp-label:8083
                    ├── 统一鉴权 (JWT)
                    ├── 统一限流 (Redis)
                    └── 统一审计
                                  ↓
                    Nacos 服务发现 → 负载均衡
                                  ↓
                    具体 MCP Server 实例
\`\`\`

#### Gateway 配置

\`\`\`yaml
spring:
  application:
    name: mcp-gateway
  cloud:
    nacos:
      discovery:
        server-addr: nacos.mcp.internal:8848
    gateway:
      # 全局默认过滤器
      default-filters:
        - name: RequestRateLimiter
          args:
            redis-rate-limiter.replenishRate: 100
            redis-rate-limiter.burstCapacity: 200
        - name: JwtAuthentication
      routes:
        # ===== MCP 协议代理 =====
        - id: mcp-wanxiang-tools
          uri: lb://mcp-server-wanxiang
          predicates:
            - Path=/wanxiang/mcp/v1/tools/**
          filters:
            - StripPrefix=1
        - id: mcp-wanxiang-call
          uri: lb://mcp-server-wanxiang
          predicates:
            - Path=/wanxiang/mcp/v1/call/**
          filters:
            - StripPrefix=1
        
        # ===== REST 接口代理 =====
        - id: wanxiang-rest
          uri: lb://mcp-server-wanxiang
          predicates:
            - Path=/wanxiang/api/**
          filters:
            - StripPrefix=1
        
        - id: chatbi-rest
          uri: lb://mcp-server-chatbi
          predicates:
            - Path=/chatbi/api/**
          filters:
            - StripPrefix=1

      # 自动服务发现路由
      discovery:
        locator:
          enabled: true
          lower-case-service-id: true
          # 只暴露 MCP 相关服务
          filters:
            - name: McpServiceFilter
\`\`\`

#### 统一的鉴权过滤器

\`\`\`java
@Component
public class JwtAuthenticationFilter implements GatewayFilter, Ordered {
    
    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        String path = exchange.getRequest().getURI().getPath();
        
        // MCP 协议检查
        if (path.contains("/mcp/v1/tools/call")) {
            return checkMcpAuth(exchange, chain);
        }
        // REST API 检查
        return checkRestAuth(exchange, chain);
    }
    
    private Mono<Void> checkMcpAuth(ServerWebExchange exchange, GatewayFilterChain chain) {
        // 从 Header 中提取 MCP Session Token
        String token = exchange.getRequest().getHeaders()
            .getFirst("X-MCP-Auth");
        if (token == null || !validateToken(token)) {
            exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
            return exchange.getResponse().setComplete();
        }
        return chain.filter(exchange);
    }
}
\`\`\`

### 5.6 方案三：Nginx + Nacos Upsync（传统运维友好）

如果团队更熟悉 Nginx 而不是 Spring Cloud Gateway：

\`\`\`nginx
# Nginx 配置
upstream mcp-wanxiang {
    # Nacos upsync 模块动态更新后端列表
    nacos http://nacos.mcp.internal:8848;
    nacos_service_name mcp-server-wanxiang;
    nacos_group DEFAULT_GROUP;
    nacos_subscribe on;
    
    keepalive 64;
}

upstream mcp-chatbi {
    nacos http://nacos.mcp.internal:8848;
    nacos_service_name mcp-server-chatbi;
    nacos_group DEFAULT_GROUP;
    nacos_subscribe on;
}

server {
    listen 443 ssl;
    server_name mcp.yourcompany.com;
    
    ssl_certificate     /etc/ssl/mcp.yourcompany.com.pem;
    ssl_certificate_key /etc/ssl/mcp.yourcompany.com.key;
    
    # 统一请求体大小限制
    client_max_body_size 10m;
    
    # ===== MCP 协议路由 =====
    location ~ ^/wanxiang/mcp/(.*)$ {
        proxy_pass http://mcp-wanxiang/mcp/$1$is_args$args;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-MCP-Forwarded true;
        
        # MCP Streamable HTTP 需要 SSE
        proxy_set_header Connection '';
        proxy_http_version 1.1;
        chunked_transfer_encoding on;
        proxy_buffering off;
        proxy_cache off;
    }
    
    location ~ ^/chatbi/mcp/(.*)$ {
        proxy_pass http://mcp-chatbi/mcp/$1$is_args$args;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Connection '';
        proxy_http_version 1.1;
        proxy_buffering off;
    }
    
    # ===== REST API 路由 =====
    location /wanxiang/api/ {
        proxy_pass http://mcp-wanxiang/api/;
        proxy_set_header Host $host;
    }
    
    location /chatbi/api/ {
        proxy_pass http://mcp-chatbi/api/;
        proxy_set_header Host $host;
    }
}
\`\`\`

安装 Nacos Upsync 模块：
\`\`\`bash
# 编译 Nginx 时添加 upsync 模块
./configure --add-module=/path/to/nginx-upsync-module
make && make install
\`\`\`

### 5.7 三种方案对比

| 维度 | CoreDNS+Nacos | Spring Cloud GW | Nginx+Nacos Upsync |
|------|:-------------:|:---------------:|:------------------:|
| 架构复杂度 | ⭐⭐低 | ⭐⭐⭐中 | ⭐⭐⭐中 |
| 动态路由 | ✅ 自动DNS发现 | ✅ LB:// 自动发现 | ✅ Upsync 自动同步 |
| 统一鉴权 | ❌ 需额外实现 | ✅ 内置过滤器 | ❌ Lua 脚本实现 |
| 限流能力 | ❌ 无 | ✅ Redis RateLimiter | ⚠️ ngx_http_limit_req |
| TLS 终结 | ❌ 需外部 LB | ✅ Gateway 层实现 | ✅ Nginx 原生 |
| 协议支持 | DNS | HTTP/MCP/SSE | HTTP/WS/SSE |
| 运维熟悉度 | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| K8s 友好度 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |

### 5.8 推荐方案

#### 🏆 小规模（< 5 个 MCP Server）：Spring Cloud Gateway

\`\`\`
mcp.yourcompany.com
       ↓
Spring Cloud Gateway  (gw.mcp.internal)
       ├── /wanxiang/**  →  mcp-wanxiang (Nacos LB)
       ├── /chatbi/**    →  mcp-chatbi   (Nacos LB)
       └── /label/**     →  mcp-label    (Nacos LB)
\`\`\`

**理由：** 与 Spring 生态无缝集成，Gateway 自带路由+鉴权+限流，一套代码解决所有问题。

#### 🏆 中大规模（> 5 个 MCP Server + K8s）：CoreDNS + Nacos

\`\`\`
AI Host 通过域名调用:
  mcp-wanxiang.mcp.internal:8081
  mcp-chatbi.mcp.internal:8082

CoreDNS 自动将 Nacos 服务名 → DNS A记录
\`\`\`

**理由：** 服务名即域名，语言无关（Python/Go/Java 都能用 DNS 发现），K8s 原生友好。

#### 🏆 传统运维团队：Nginx + Nacos Upsync

**理由：** 运维最熟悉 Nginx，不引入新组件，Upsync 模块实现动态后端更新。

### 5.9 生产环境推荐架构（完整）

\`\`\`
                                        ┌──────────────────────────┐
                                        │  外部DNS                  │
                                        │  mcp.yourcompany.com     │
                                        │    ↓ A记录               │
                                        └────────┬─────────────────┘
                                                 │
                                        ┌────────▼─────────────────┐
                                        │  SLB / 云负载均衡         │
                                        │  - TLS 443 终结           │
                                        │  - DDoS 防护              │
                                        └────────┬─────────────────┘
                                                 │
                                        ┌────────▼─────────────────┐
                                        │  Spring Cloud Gateway ×2  │
                                        │  - 统一鉴权 (OAuth2)      │
                                        │  - Redis 限流             │
                                        │  - 审计日志               │
                                        └────────┬─────────────────┘
                                                 │
          ┌───────────────────────────────────────┼───────────────────────┐
          │                                       │                       │
  ┌───────▼────────┐                    ┌─────────▼──────┐   ┌───────────▼────┐
  │ AI Host ×2     │                    │ Nacos ×3       │   │ CoreDNS ×2     │
  │ (MCP Client)   │                    │ (Cluster)      │   │ (Nacos Plugin) │
  │ host.mcp.inter │                    │ nacos.mcp.in.. │   │ *.mcp.internal │
  └───────┬────────┘                    └─────────┬──────┘   └───────────┬────┘
          │                ┌──────────────────────┼──────────────────────┘
          │                │                      │
          │                │  DNS: mcp-wanxiang.mcp.internal → 10.0.1.x
          │                │
  ┌───────▼────────────────▼──────────────────────────────────────────────┐
  │                   Kubernetes / 物理机集群                               │
  │                                                                        │
  │  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐        │
  │  │ mcp-wanxiang    │  │ mcp-chatbi      │  │ mcp-label       │        │
  │  │ 2 pods / 2实例  │  │ 2 pods / 2实例  │  │ 1 pod  / 1实例  │        │
  │  │ Streamable HTTP │  │ Streamable HTTP │  │ Streamable HTTP │        │
  │  │ @McpTool        │  │ @McpTool        │  │ @McpTool        │        │
  │  └─────────────────┘  └─────────────────┘  └─────────────────┘        │
  └────────────────────────────────────────────────────────────────────────┘
\`\`\`

### 5.10 配置示例汇总

#### Nacos 配置
\`\`\`yaml
# 所有 MCP Server 统一配置
spring:
  cloud:
    nacos:
      discovery:
        server-addr: nacos.mcp.internal:8848
        namespace: mcp-platform       # 命名空间隔离
        group: MCP_SERVER_GROUP       # 分组
        # 注册时附加元数据
        metadata:
          mcp-protocol: streamable-http
          mcp-version: "1.0"
          mcp-tools: portrait,tags
\`\`\`

#### AI Host 动态发现 + 域名调用
\`\`\`yaml
spring:
  ai:
    mcp:
      client:
        # 方式1：静态域名（推荐 CoreDNS 方案）
        connections:
          - name: wanxiang-agent
            url: http://mcp-wanxiang.mcp.internal:8081
            transport: streamable-http
          - name: chatbi-service
            url: http://mcp-chatbi.mcp.internal:8082
            transport: streamable-http

# 方式2：Nacos 动态发现（Gateway 方案）
# AI Host 通过 Gateway 统一入口
mcp:
  gateway:
    url: https://mcp.yourcompany.com
    auth-token: \${MCP_AUTH_TOKEN}
\`\`\`

#### 外部域名 DNS 配置
\`\`\`
# DNS 解析记录
mcp.yourcompany.com.      300 IN A     <SLB公网IP>
gw.mcp.internal.          300 IN A     10.0.0.10
gw.mcp.internal.          300 IN A     10.0.0.11
host.mcp.internal.        300 IN A     10.0.1.10
host.mcp.internal.        300 IN A     10.0.1.11
nacos.mcp.internal.       300 IN A     10.0.2.10
nacos.mcp.internal.       300 IN A     10.0.2.11
nacos.mcp.internal.       300 IN A     10.0.2.12
\`\`\`
`,ey=`---
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
`,ty=`---
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
`,ry=`---
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
`,iy=`---
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
`;var Va={exports:{}},gi={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function ly(){if(Lp)return gi;Lp=1;var t=ks(),l=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(f,m,g){var A,h={},k=null,S=null;g!==void 0&&(k=""+g),m.key!==void 0&&(k=""+m.key),m.ref!==void 0&&(S=m.ref);for(A in m)a.call(m,A)&&!c.hasOwnProperty(A)&&(h[A]=m[A]);if(f&&f.defaultProps)for(A in m=f.defaultProps,m)h[A]===void 0&&(h[A]=m[A]);return{$$typeof:l,type:f,key:k,ref:S,props:h,_owner:s.current}}return gi.Fragment=i,gi.jsx=u,gi.jsxs=u,gi}var Mp;function oy(){return Mp||(Mp=1,Va.exports=ly()),Va.exports}var F=oy();function Rp({categories:t,activePath:l,onSelect:i,onToggleCategory:a,onSearch:s,pageCount:c,allTags:u,activeTag:f,onTagSelect:m}){const[g,A]=kn.useState(!0),[h,k]=kn.useState("");kn.useEffect(()=>{f&&A(!1)},[f]),kn.useEffect(()=>{g&&k("")},[g]);const S=h.toLowerCase().trim(),E=S.length>=1?u.filter(L=>L.name.toLowerCase().includes(S)):u;return F.jsxs("aside",{className:"sidebar",children:[F.jsxs("div",{className:"sidebar-header",children:[F.jsx("h1",{children:"LLM Wiki"}),F.jsxs("p",{children:[c," 个页面"]})]}),F.jsx("div",{className:"sidebar-search",children:F.jsxs("button",{onClick:s,children:[F.jsx("svg",{width:"16",height:"16",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),F.jsx("span",{children:"搜索页面..."}),F.jsx("kbd",{children:"Ctrl+K"})]})}),F.jsxs("nav",{className:"sidebar-nav",children:[t.map(L=>F.jsxs("div",{style:{marginBottom:4},children:[F.jsxs("button",{onClick:()=>a(L.name),className:"cat-btn",children:[F.jsx("span",{className:`arrow ${L.collapsed?"":"open"}`,children:"▶"}),L.name,F.jsx("span",{className:"count",children:L.pages.length})]}),!L.collapsed&&F.jsx("div",{className:"cat-pages",children:L.pages.map(O=>F.jsx("div",{children:F.jsx("button",{onClick:()=>i(O),className:`page-btn${l===O.path?" active":""}`,title:O.summary||O.title,children:O.title})},O.path))})]},L.name)),u.length>0&&F.jsxs("div",{style:{padding:"8px 0",marginTop:8,borderTop:"1px solid var(--border)"},children:[F.jsxs("button",{onClick:()=>A(!g),className:"cat-btn",style:{marginBottom:4},children:[F.jsx("span",{className:`arrow ${g?"":"open"}`,children:"▶"}),"标签",F.jsx("span",{className:"count",children:u.length})]}),!g&&!f&&F.jsxs("div",{children:[F.jsx("div",{style:{padding:"4px 8px 6px"},children:F.jsx("input",{type:"text",value:h,onChange:L=>k(L.target.value),placeholder:"搜索标签...",className:"tag-search-input"})}),F.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:4,padding:"4px 8px",maxHeight:300,overflowY:"auto"},children:[E.length===0&&F.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",padding:"4px 0"},children:"无匹配标签"}),E.map(L=>F.jsxs("button",{onClick:O=>{O.stopPropagation(),m(L.name)},className:"tag-btn",children:[L.name,F.jsx("span",{className:"tag-count",children:L.count})]},L.name))]})]}),!g&&f&&F.jsxs("div",{style:{padding:"4px 8px",fontSize:12,color:"var(--text-muted)"},children:["已选: ",F.jsxs("strong",{style:{color:"var(--accent)"},children:["#",f]}),F.jsx("button",{onClick:L=>{L.stopPropagation(),m(f)},style:{marginLeft:8,fontSize:11,color:"var(--text-muted)",textDecoration:"underline"},children:"清除"})]}),g&&f&&F.jsxs("div",{style:{padding:"4px 8px",fontSize:12,color:"var(--text-muted)"},children:["已选: ",F.jsxs("strong",{style:{color:"var(--accent)"},children:["#",f]}),F.jsx("button",{onClick:L=>{L.stopPropagation(),m(f)},style:{marginLeft:8,fontSize:11,color:"var(--text-muted)",textDecoration:"underline"},children:"清除"})]})]})]}),F.jsx("div",{className:"sidebar-footer",children:"LLM Wiki Viewer · 自动索引"})]})}function ay(t,l){const i={};return(t[t.length-1]===""?[...t,""]:t).join((i.padRight?" ":"")+","+(i.padLeft===!1?"":" ")).trim()}const sy=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,uy=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,cy={};function Tp(t,l){return(cy.jsx?uy:sy).test(t)}const py=/[ \t\n\f\r]/g;function dy(t){return typeof t=="object"?t.type==="text"?bp(t.value):!1:bp(t)}function bp(t){return t.replace(py,"")===""}class xi{constructor(l,i,a){this.normal=i,this.property=l,a&&(this.space=a)}}xi.prototype.normal={};xi.prototype.property={};xi.prototype.space=void 0;function wd(t,l){const i={},a={};for(const s of t)Object.assign(i,s.property),Object.assign(a,s.normal);return new xi(i,a,l)}function ss(t){return t.toLowerCase()}class Se{constructor(l,i){this.attribute=i,this.property=l}}Se.prototype.attribute="";Se.prototype.booleanish=!1;Se.prototype.boolean=!1;Se.prototype.commaOrSpaceSeparated=!1;Se.prototype.commaSeparated=!1;Se.prototype.defined=!1;Se.prototype.mustUseProperty=!1;Se.prototype.number=!1;Se.prototype.overloadedBoolean=!1;Se.prototype.property="";Se.prototype.spaceSeparated=!1;Se.prototype.space=void 0;let fy=0;const Sn=Yt(),Jn=Yt(),us=Yt(),W=Yt(),Dn=Yt(),Qt=Yt(),Ie=Yt();function Yt(){return 2**++fy}const cs=Object.freeze(Object.defineProperty({__proto__:null,boolean:Sn,booleanish:Jn,commaOrSpaceSeparated:Ie,commaSeparated:Qt,number:W,overloadedBoolean:us,spaceSeparated:Dn},Symbol.toStringTag,{value:"Module"})),qa=Object.keys(cs);class vs extends Se{constructor(l,i,a,s){let c=-1;if(super(l,i),Dp(this,"space",s),typeof a=="number")for(;++c<qa.length;){const u=qa[c];Dp(this,qa[c],(a&cs[u])===cs[u])}}}vs.prototype.defined=!0;function Dp(t,l,i){i&&(t[l]=i)}function _r(t){const l={},i={};for(const[a,s]of Object.entries(t.properties)){const c=new vs(a,t.transform(t.attributes||{},a),s,t.space);t.mustUseProperty&&t.mustUseProperty.includes(a)&&(c.mustUseProperty=!0),l[a]=c,i[ss(a)]=a,i[ss(c.attribute)]=a}return new xi(l,i,t.space)}const xd=_r({properties:{ariaActiveDescendant:null,ariaAtomic:Jn,ariaAutoComplete:null,ariaBusy:Jn,ariaChecked:Jn,ariaColCount:W,ariaColIndex:W,ariaColSpan:W,ariaControls:Dn,ariaCurrent:null,ariaDescribedBy:Dn,ariaDetails:null,ariaDisabled:Jn,ariaDropEffect:Dn,ariaErrorMessage:null,ariaExpanded:Jn,ariaFlowTo:Dn,ariaGrabbed:Jn,ariaHasPopup:null,ariaHidden:Jn,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Dn,ariaLevel:W,ariaLive:null,ariaModal:Jn,ariaMultiLine:Jn,ariaMultiSelectable:Jn,ariaOrientation:null,ariaOwns:Dn,ariaPlaceholder:null,ariaPosInSet:W,ariaPressed:Jn,ariaReadOnly:Jn,ariaRelevant:null,ariaRequired:Jn,ariaRoleDescription:Dn,ariaRowCount:W,ariaRowIndex:W,ariaRowSpan:W,ariaSelected:Jn,ariaSetSize:W,ariaSort:null,ariaValueMax:W,ariaValueMin:W,ariaValueNow:W,ariaValueText:null,role:null},transform(t,l){return l==="role"?l:"aria-"+l.slice(4).toLowerCase()}});function Id(t,l){return l in t?t[l]:l}function Ed(t,l){return Id(t,l.toLowerCase())}const my=_r({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Qt,acceptCharset:Dn,accessKey:Dn,action:null,allow:null,allowFullScreen:Sn,allowPaymentRequest:Sn,allowUserMedia:Sn,alpha:Sn,alt:null,as:null,async:Sn,autoCapitalize:null,autoComplete:Dn,autoFocus:Sn,autoPlay:Sn,blocking:Dn,capture:null,charSet:null,checked:Sn,cite:null,className:Dn,closedBy:null,colorSpace:null,cols:W,colSpan:W,command:null,commandFor:null,content:null,contentEditable:Jn,controls:Sn,controlsList:Dn,coords:W|Qt,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Sn,defer:Sn,dir:null,dirName:null,disabled:Sn,download:us,draggable:Jn,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Sn,formTarget:null,headers:Dn,height:W,hidden:us,high:W,href:null,hrefLang:null,htmlFor:Dn,httpEquiv:Dn,id:null,imageSizes:null,imageSrcSet:null,inert:Sn,inputMode:null,integrity:null,is:null,isMap:Sn,itemId:null,itemProp:Dn,itemRef:Dn,itemScope:Sn,itemType:Dn,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Sn,low:W,manifest:null,max:null,maxLength:W,media:null,method:null,min:null,minLength:W,multiple:Sn,muted:Sn,name:null,nonce:null,noModule:Sn,noValidate:Sn,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Sn,optimum:W,pattern:null,ping:Dn,placeholder:null,playsInline:Sn,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:Sn,referrerPolicy:null,rel:Dn,required:Sn,reversed:Sn,rows:W,rowSpan:W,sandbox:Dn,scope:null,scoped:Sn,seamless:Sn,selected:Sn,shadowRootClonable:Sn,shadowRootCustomElementRegistry:Sn,shadowRootDelegatesFocus:Sn,shadowRootMode:null,shadowRootSerializable:Sn,shape:null,size:W,sizes:null,slot:null,span:W,spellCheck:Jn,src:null,srcDoc:null,srcLang:null,srcSet:null,start:W,step:null,style:null,tabIndex:W,target:null,title:null,translate:null,type:null,typeMustMatch:Sn,useMap:null,value:Jn,width:W,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Dn,axis:null,background:null,bgColor:null,border:W,borderColor:null,bottomMargin:W,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Sn,declare:Sn,event:null,face:null,frame:null,frameBorder:null,hSpace:W,leftMargin:W,link:null,longDesc:null,lowSrc:null,marginHeight:W,marginWidth:W,noResize:Sn,noHref:Sn,noShade:Sn,noWrap:Sn,object:null,profile:null,prompt:null,rev:null,rightMargin:W,rules:null,scheme:null,scrolling:Jn,standby:null,summary:null,text:null,topMargin:W,valueType:null,version:null,vAlign:null,vLink:null,vSpace:W,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:Sn,disablePictureInPicture:Sn,disableRemotePlayback:Sn,exportParts:Qt,part:Dn,prefix:null,property:null,results:W,security:null,unselectable:null},space:"html",transform:Ed}),gy=_r({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",maskType:"mask-type",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Ie,accentHeight:W,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:W,amplitude:W,arabicForm:null,ascent:W,attributeName:null,attributeType:null,azimuth:W,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:W,by:null,calcMode:null,capHeight:W,className:Dn,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:W,diffuseConstant:W,direction:null,display:null,dur:null,divisor:W,dominantBaseline:null,download:Sn,dx:null,dy:null,edgeMode:null,editable:null,elevation:W,enableBackground:null,end:null,event:null,exponent:W,externalResourcesRequired:null,fill:null,fillOpacity:W,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Qt,g2:Qt,glyphName:Qt,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:W,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:W,horizOriginX:W,horizOriginY:W,id:null,ideographic:W,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:W,k:W,k1:W,k2:W,k3:W,k4:W,kernelMatrix:Ie,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:W,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:W,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:W,overlineThickness:W,paintOrder:null,panose1:null,path:null,pathLength:W,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Dn,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:W,pointsAtY:W,pointsAtZ:W,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Ie,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Ie,rev:Ie,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Ie,requiredFeatures:Ie,requiredFonts:Ie,requiredFormats:Ie,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:W,specularExponent:W,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:W,strikethroughThickness:W,string:null,stroke:null,strokeDashArray:Ie,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:W,strokeOpacity:W,strokeWidth:null,style:null,surfaceScale:W,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Ie,tabIndex:W,tableValues:null,target:null,targetX:W,targetY:W,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Ie,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:W,underlineThickness:W,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:W,values:null,vAlphabetic:W,vMathematical:W,vectorEffect:null,vHanging:W,vIdeographic:W,version:null,vertAdvY:W,vertOriginX:W,vertOriginY:W,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:W,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Id}),_d=_r({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(t,l){return"xlink:"+l.slice(5).toLowerCase()}}),Pd=_r({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Ed}),Ld=_r({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(t,l){return"xml:"+l.slice(3).toLowerCase()}}),hy={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},yy=/[A-Z]/g,Op=/-[a-z]/g,Ay=/^data[-\w.:]+$/i;function Sy(t,l){const i=ss(l);let a=l,s=Se;if(i in t.normal)return t.property[t.normal[i]];if(i.length>4&&i.slice(0,4)==="data"&&Ay.test(l)){if(l.charAt(4)==="-"){const c=l.slice(5).replace(Op,vy);a="data"+c.charAt(0).toUpperCase()+c.slice(1)}else{const c=l.slice(4);if(!Op.test(c)){let u=c.replace(yy,ky);u.charAt(0)!=="-"&&(u="-"+u),l="data"+u}}s=vs}return new s(a,l)}function ky(t){return"-"+t.toLowerCase()}function vy(t){return t.charAt(1).toUpperCase()}const Cy=wd([xd,my,_d,Pd,Ld],"html"),Cs=wd([xd,gy,_d,Pd,Ld],"svg");function wy(t){return t.join(" ").trim()}var hi={},Wa,Np;function xy(){if(Np)return Wa;Np=1;var t=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,l=/\n/g,i=/^\s*/,a=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,s=/^:\s*/,c=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,u=/^[;\s]*/,f=/^\s+|\s+$/g,m=`
`,g="/",A="*",h="",k="comment",S="declaration";Wa=function(L,O){if(typeof L!="string")throw new TypeError("First argument must be a string");if(!L)return[];O=O||{};var T=1,V=1;function z(q){var X=q.match(l);X&&(T+=X.length);var rn=q.lastIndexOf(m);V=~rn?q.length-rn:V+q.length}function ln(){var q={line:T,column:V};return function(X){return X.position=new cn(q),nn(),X}}function cn(q){this.start=q,this.end={line:T,column:V},this.source=O.source}cn.prototype.content=L;function D(q){var X=new Error(O.source+":"+T+":"+V+": "+q);if(X.reason=q,X.filename=O.source,X.line=T,X.column=V,X.source=L,!O.silent)throw X}function J(q){var X=q.exec(L);if(X){var rn=X[0];return z(rn),L=L.slice(rn.length),X}}function nn(){J(i)}function Q(q){var X;for(q=q||[];X=P();)X!==!1&&q.push(X);return q}function P(){var q=ln();if(!(g!=L.charAt(0)||A!=L.charAt(1))){for(var X=2;h!=L.charAt(X)&&(A!=L.charAt(X)||g!=L.charAt(X+1));)++X;if(X+=2,h===L.charAt(X-1))return D("End of comment missing");var rn=L.slice(2,X-2);return V+=2,z(rn),L=L.slice(X),V+=2,q({type:k,comment:rn})}}function K(){var q=ln(),X=J(a);if(X){if(P(),!J(s))return D("property missing ':'");var rn=J(c),vn=q({type:S,property:E(X[0].replace(t,h)),value:rn?E(rn[0].replace(t,h)):h});return J(u),vn}}function G(){var q=[];Q(q);for(var X;X=K();)X!==!1&&(q.push(X),Q(q));return q}return nn(),G()};function E(L){return L?L.replace(f,h):h}return Wa}var Ja,Fp;function Iy(){if(Fp)return Ja;Fp=1;var t=xy();function l(i,a){var s=null;if(!i||typeof i!="string")return s;for(var c,u=t(i),f=typeof a=="function",m,g,A=0,h=u.length;A<h;A++)c=u[A],m=c.property,g=c.value,f?a(m,g,c):g&&(s||(s={}),s[m]=g);return s}return Ja=l,Ja}var yi={},Bp;function Ey(){if(Bp)return yi;Bp=1,yi.__esModule=!0,yi.camelCase=void 0;var t=/^--[a-zA-Z0-9-]+$/,l=/-([a-z])/g,i=/^[^-]+$/,a=/^-(webkit|moz|ms|o)-/,s=function(c){return!c||i.test(c)||t.test(c)?c:c.toLowerCase().replace(a,function(u,f){return f+"-"}).replace(l,function(u,f){return f.toUpperCase()})};return yi.camelCase=s,yi}var zp;function _y(){return zp||(zp=1,function(t){var l=hi&&hi.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};t.__esModule=!0;var i=l(Iy()),a=Ey();function s(c){if(!c||typeof c!="string")return{};var u={};return i.default(c,function(f,m){f&&m&&(u[a.camelCase(f)]=m)}),u}t.default=s}(hi)),hi}var Py=_y();const Ly=Ss(Py),Md=Rd("end"),ws=Rd("start");function Rd(t){return l;function l(i){const a=i&&i.position&&i.position[t]||{};if(typeof a.line=="number"&&a.line>0&&typeof a.column=="number"&&a.column>0)return{line:a.line,column:a.column,offset:typeof a.offset=="number"&&a.offset>-1?a.offset:void 0}}}function My(t){const l=ws(t),i=Md(t);if(l&&i)return{start:l,end:i}}function Si(t){return!t||typeof t!="object"?"":"position"in t||"type"in t?Gp(t.position):"start"in t||"end"in t?Gp(t):"line"in t||"column"in t?ps(t):""}function ps(t){return Hp(t&&t.line)+":"+Hp(t&&t.column)}function Gp(t){return ps(t&&t.start)+"-"+ps(t&&t.end)}function Hp(t){return t&&typeof t=="number"?t:1}class se extends Error{constructor(l,i,a){super(),typeof i=="string"&&(a=i,i=void 0);let s="",c={},u=!1;if(i&&("line"in i&&"column"in i?c={place:i}:"start"in i&&"end"in i?c={place:i}:"type"in i?c={ancestors:[i],place:i.position}:c={...i}),typeof l=="string"?s=l:!c.cause&&l&&(u=!0,s=l.message,c.cause=l),!c.ruleId&&!c.source&&typeof a=="string"){const m=a.indexOf(":");m===-1?c.ruleId=a:(c.source=a.slice(0,m),c.ruleId=a.slice(m+1))}if(!c.place&&c.ancestors&&c.ancestors){const m=c.ancestors[c.ancestors.length-1];m&&(c.place=m.position)}const f=c.place&&"start"in c.place?c.place.start:c.place;this.ancestors=c.ancestors||void 0,this.cause=c.cause||void 0,this.column=f?f.column:void 0,this.fatal=void 0,this.file="",this.message=s,this.line=f?f.line:void 0,this.name=Si(c.place)||"1:1",this.place=c.place||void 0,this.reason=this.message,this.ruleId=c.ruleId||void 0,this.source=c.source||void 0,this.stack=u&&c.cause&&typeof c.cause.stack=="string"?c.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}se.prototype.file="";se.prototype.name="";se.prototype.reason="";se.prototype.message="";se.prototype.stack="";se.prototype.column=void 0;se.prototype.line=void 0;se.prototype.ancestors=void 0;se.prototype.cause=void 0;se.prototype.fatal=void 0;se.prototype.place=void 0;se.prototype.ruleId=void 0;se.prototype.source=void 0;const xs={}.hasOwnProperty,Ry=new Map,Ty=/[A-Z]/g,by=new Set(["table","tbody","thead","tfoot","tr"]),Dy=new Set(["td","th"]),Td="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Oy(t,l){if(!l||l.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const i=l.filePath||void 0;let a;if(l.development){if(typeof l.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");a=Uy(i,l.jsxDEV)}else{if(typeof l.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof l.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");a=jy(i,l.jsx,l.jsxs)}const s={Fragment:l.Fragment,ancestors:[],components:l.components||{},create:a,elementAttributeNameCase:l.elementAttributeNameCase||"react",evaluater:l.createEvaluater?l.createEvaluater():void 0,filePath:i,ignoreInvalidStyle:l.ignoreInvalidStyle||!1,passKeys:l.passKeys!==!1,passNode:l.passNode||!1,schema:l.space==="svg"?Cs:Cy,stylePropertyNameCase:l.stylePropertyNameCase||"dom",tableCellAlignToStyle:l.tableCellAlignToStyle!==!1},c=bd(s,t,void 0);return c&&typeof c!="string"?c:s.create(t,s.Fragment,{children:c||void 0},void 0)}function bd(t,l,i){if(l.type==="element")return Ny(t,l,i);if(l.type==="mdxFlowExpression"||l.type==="mdxTextExpression")return Fy(t,l);if(l.type==="mdxJsxFlowElement"||l.type==="mdxJsxTextElement")return zy(t,l,i);if(l.type==="mdxjsEsm")return By(t,l);if(l.type==="root")return Gy(t,l,i);if(l.type==="text")return Hy(t,l)}function Ny(t,l,i){const a=t.schema;let s=a;l.tagName.toLowerCase()==="svg"&&a.space==="html"&&(s=Cs,t.schema=s),t.ancestors.push(l);const c=Od(t,l.tagName,!1),u=Vy(t,l);let f=Es(t,l);return by.has(l.tagName)&&(f=f.filter(function(m){return typeof m=="string"?!dy(m):!0})),Dd(t,u,c,l),Is(u,f),t.ancestors.pop(),t.schema=a,t.create(l,c,u,i)}function Fy(t,l){if(l.data&&l.data.estree&&t.evaluater){const a=l.data.estree.body[0];return a.type,t.evaluater.evaluateExpression(a.expression)}wi(t,l.position)}function By(t,l){if(l.data&&l.data.estree&&t.evaluater)return t.evaluater.evaluateProgram(l.data.estree);wi(t,l.position)}function zy(t,l,i){const a=t.schema;let s=a;l.name==="svg"&&a.space==="html"&&(s=Cs,t.schema=s),t.ancestors.push(l);const c=l.name===null?t.Fragment:Od(t,l.name,!0),u=qy(t,l),f=Es(t,l);return Dd(t,u,c,l),Is(u,f),t.ancestors.pop(),t.schema=a,t.create(l,c,u,i)}function Gy(t,l,i){const a={};return Is(a,Es(t,l)),t.create(l,t.Fragment,a,i)}function Hy(t,l){return l.value}function Dd(t,l,i,a){typeof i!="string"&&i!==t.Fragment&&t.passNode&&(l.node=a)}function Is(t,l){if(l.length>0){const i=l.length>1?l:l[0];i&&(t.children=i)}}function jy(t,l,i){return a;function a(s,c,u,f){const g=Array.isArray(u.children)?i:l;return f?g(c,u,f):g(c,u)}}function Uy(t,l){return i;function i(a,s,c,u){const f=Array.isArray(c.children),m=ws(a);return l(s,c,u,f,{columnNumber:m?m.column-1:void 0,fileName:t,lineNumber:m?m.line:void 0},void 0)}}function Vy(t,l){const i={};let a,s;for(s in l.properties)if(s!=="children"&&xs.call(l.properties,s)){const c=Wy(t,s,l.properties[s]);if(c){const[u,f]=c;t.tableCellAlignToStyle&&u==="align"&&typeof f=="string"&&Dy.has(l.tagName)?a=f:i[u]=f}}if(a){const c=i.style||(i.style={});c[t.stylePropertyNameCase==="css"?"text-align":"textAlign"]=a}return i}function qy(t,l){const i={};for(const a of l.attributes)if(a.type==="mdxJsxExpressionAttribute")if(a.data&&a.data.estree&&t.evaluater){const c=a.data.estree.body[0];c.type;const u=c.expression;u.type;const f=u.properties[0];f.type,Object.assign(i,t.evaluater.evaluateExpression(f.argument))}else wi(t,l.position);else{const s=a.name;let c;if(a.value&&typeof a.value=="object")if(a.value.data&&a.value.data.estree&&t.evaluater){const f=a.value.data.estree.body[0];f.type,c=t.evaluater.evaluateExpression(f.expression)}else wi(t,l.position);else c=a.value===null?!0:a.value;i[s]=c}return i}function Es(t,l){const i=[];let a=-1;const s=t.passKeys?new Map:Ry;for(;++a<l.children.length;){const c=l.children[a];let u;if(t.passKeys){const m=c.type==="element"?c.tagName:c.type==="mdxJsxFlowElement"||c.type==="mdxJsxTextElement"?c.name:void 0;if(m){const g=s.get(m)||0;u=m+"-"+g,s.set(m,g+1)}}const f=bd(t,c,u);f!==void 0&&i.push(f)}return i}function Wy(t,l,i){const a=Sy(t.schema,l);if(!(i==null||typeof i=="number"&&Number.isNaN(i))){if(Array.isArray(i)&&(i=a.commaSeparated?ay(i):wy(i)),a.property==="style"){let s=typeof i=="object"?i:Jy(t,String(i));return t.stylePropertyNameCase==="css"&&(s=Qy(s)),["style",s]}return[t.elementAttributeNameCase==="react"&&a.space?hy[a.property]||a.property:a.attribute,i]}}function Jy(t,l){try{return Ly(l,{reactCompat:!0})}catch(i){if(t.ignoreInvalidStyle)return{};const a=i,s=new se("Cannot parse `style` attribute",{ancestors:t.ancestors,cause:a,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw s.file=t.filePath||void 0,s.url=Td+"#cannot-parse-style-attribute",s}}function Od(t,l,i){let a;if(!i)a={type:"Literal",value:l};else if(l.includes(".")){const s=l.split(".");let c=-1,u;for(;++c<s.length;){const f=Tp(s[c])?{type:"Identifier",name:s[c]}:{type:"Literal",value:s[c]};u=u?{type:"MemberExpression",object:u,property:f,computed:!!(c&&f.type==="Literal"),optional:!1}:f}a=u}else a=Tp(l)&&!/^[a-z]/.test(l)?{type:"Identifier",name:l}:{type:"Literal",value:l};if(a.type==="Literal"){const s=a.value;return xs.call(t.components,s)?t.components[s]:s}if(t.evaluater)return t.evaluater.evaluateExpression(a);wi(t)}function wi(t,l){const i=new se("Cannot handle MDX estrees without `createEvaluater`",{ancestors:t.ancestors,place:l,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw i.file=t.filePath||void 0,i.url=Td+"#cannot-handle-mdx-estrees-without-createevaluater",i}function Qy(t){const l={};let i;for(i in t)xs.call(t,i)&&(l[$y(i)]=t[i]);return l}function $y(t){let l=t.replace(Ty,Ky);return l.slice(0,3)==="ms-"&&(l="-"+l),l}function Ky(t){return"-"+t.toLowerCase()}const Qa={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Yy={};function _s(t,l){const i=Yy,a=typeof i.includeImageAlt=="boolean"?i.includeImageAlt:!0,s=typeof i.includeHtml=="boolean"?i.includeHtml:!0;return Nd(t,a,s)}function Nd(t,l,i){if(Xy(t)){if("value"in t)return t.type==="html"&&!i?"":t.value;if(l&&"alt"in t&&t.alt)return t.alt;if("children"in t)return jp(t.children,l,i)}return Array.isArray(t)?jp(t,l,i):""}function jp(t,l,i){const a=[];let s=-1;for(;++s<t.length;)a[s]=Nd(t[s],l,i);return a.join("")}function Xy(t){return!!(t&&typeof t=="object")}const Up=document.createElement("i");function Ps(t){const l="&"+t+";";Up.innerHTML=l;const i=Up.textContent;return i.charCodeAt(i.length-1)===59&&t!=="semi"||i===l?!1:i}function Ee(t,l,i,a){const s=t.length;let c=0,u;if(l<0?l=-l>s?0:s+l:l=l>s?s:l,i=i>0?i:0,a.length<1e4)u=Array.from(a),u.unshift(l,i),t.splice(...u);else for(i&&t.splice(l,i);c<a.length;)u=a.slice(c,c+1e4),u.unshift(l,0),t.splice(...u),c+=1e4,l+=1e4}function De(t,l){return t.length>0?(Ee(t,t.length,0,l),t):l}const Vp={}.hasOwnProperty;function Fd(t){const l={};let i=-1;for(;++i<t.length;)Zy(l,t[i]);return l}function Zy(t,l){let i;for(i in l){const s=(Vp.call(t,i)?t[i]:void 0)||(t[i]={}),c=l[i];let u;if(c)for(u in c){Vp.call(s,u)||(s[u]=[]);const f=c[u];n0(s[u],Array.isArray(f)?f:f?[f]:[])}}}function n0(t,l){let i=-1;const a=[];for(;++i<l.length;)(l[i].add==="after"?t:a).push(l[i]);Ee(t,0,0,a)}function Bd(t,l){const i=Number.parseInt(t,l);return i<9||i===11||i>13&&i<32||i>126&&i<160||i>55295&&i<57344||i>64975&&i<65008||(i&65535)===65535||(i&65535)===65534||i>1114111?"�":String.fromCharCode(i)}function je(t){return t.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const pe=Rt(/[A-Za-z]/),ae=Rt(/[\dA-Za-z]/),e0=Rt(/[#-'*+\--9=?A-Z^-~]/);function Wl(t){return t!==null&&(t<32||t===127)}const ds=Rt(/\d/),t0=Rt(/[\dA-Fa-f]/),r0=Rt(/[!-/:-@[-`{-~]/);function fn(t){return t!==null&&t<-2}function On(t){return t!==null&&(t<0||t===32)}function En(t){return t===-2||t===-1||t===32}const $l=Rt(new RegExp("\\p{P}","u")),Kt=Rt(/\s/);function Rt(t){return l;function l(i){return i!==null&&i>-1&&t.test(String.fromCharCode(i))}}function Pr(t){const l=[];let i=-1,a=0,s=0;for(;++i<t.length;){const c=t.charCodeAt(i);let u="";if(c===37&&ae(t.charCodeAt(i+1))&&ae(t.charCodeAt(i+2)))s=2;else if(c<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(c))||(u=String.fromCharCode(c));else if(c>55295&&c<57344){const f=t.charCodeAt(i+1);c<56320&&f>56319&&f<57344?(u=String.fromCharCode(c,f),s=1):u="�"}else u=String.fromCharCode(c);u&&(l.push(t.slice(a,i),encodeURIComponent(u)),a=i+s+1,u=""),s&&(i+=s,s=0)}return l.join("")+t.slice(a)}function _n(t,l,i,a){const s=a?a-1:Number.POSITIVE_INFINITY;let c=0;return u;function u(m){return En(m)?(t.enter(i),f(m)):l(m)}function f(m){return En(m)&&c++<s?(t.consume(m),f):(t.exit(i),l(m))}}const i0={tokenize:l0};function l0(t){const l=t.attempt(this.parser.constructs.contentInitial,a,s);let i;return l;function a(f){if(f===null){t.consume(f);return}return t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),_n(t,l,"linePrefix")}function s(f){return t.enter("paragraph"),c(f)}function c(f){const m=t.enter("chunkText",{contentType:"text",previous:i});return i&&(i.next=m),i=m,u(f)}function u(f){if(f===null){t.exit("chunkText"),t.exit("paragraph"),t.consume(f);return}return fn(f)?(t.consume(f),t.exit("chunkText"),c):(t.consume(f),u)}}const o0={tokenize:a0},qp={tokenize:s0};function a0(t){const l=this,i=[];let a=0,s,c,u;return f;function f(z){if(a<i.length){const ln=i[a];return l.containerState=ln[1],t.attempt(ln[0].continuation,m,g)(z)}return g(z)}function m(z){if(a++,l.containerState._closeFlow){l.containerState._closeFlow=void 0,s&&V();const ln=l.events.length;let cn=ln,D;for(;cn--;)if(l.events[cn][0]==="exit"&&l.events[cn][1].type==="chunkFlow"){D=l.events[cn][1].end;break}T(a);let J=ln;for(;J<l.events.length;)l.events[J][1].end=Object.assign({},D),J++;return Ee(l.events,cn+1,0,l.events.slice(ln)),l.events.length=J,g(z)}return f(z)}function g(z){if(a===i.length){if(!s)return k(z);if(s.currentConstruct&&s.currentConstruct.concrete)return E(z);l.interrupt=!!(s.currentConstruct&&!s._gfmTableDynamicInterruptHack)}return l.containerState={},t.check(qp,A,h)(z)}function A(z){return s&&V(),T(a),k(z)}function h(z){return l.parser.lazy[l.now().line]=a!==i.length,u=l.now().offset,E(z)}function k(z){return l.containerState={},t.attempt(qp,S,E)(z)}function S(z){return a++,i.push([l.currentConstruct,l.containerState]),k(z)}function E(z){if(z===null){s&&V(),T(0),t.consume(z);return}return s=s||l.parser.flow(l.now()),t.enter("chunkFlow",{contentType:"flow",previous:c,_tokenizer:s}),L(z)}function L(z){if(z===null){O(t.exit("chunkFlow"),!0),T(0),t.consume(z);return}return fn(z)?(t.consume(z),O(t.exit("chunkFlow")),a=0,l.interrupt=void 0,f):(t.consume(z),L)}function O(z,ln){const cn=l.sliceStream(z);if(ln&&cn.push(null),z.previous=c,c&&(c.next=z),c=z,s.defineSkip(z.start),s.write(cn),l.parser.lazy[z.start.line]){let D=s.events.length;for(;D--;)if(s.events[D][1].start.offset<u&&(!s.events[D][1].end||s.events[D][1].end.offset>u))return;const J=l.events.length;let nn=J,Q,P;for(;nn--;)if(l.events[nn][0]==="exit"&&l.events[nn][1].type==="chunkFlow"){if(Q){P=l.events[nn][1].end;break}Q=!0}for(T(a),D=J;D<l.events.length;)l.events[D][1].end=Object.assign({},P),D++;Ee(l.events,nn+1,0,l.events.slice(J)),l.events.length=D}}function T(z){let ln=i.length;for(;ln-- >z;){const cn=i[ln];l.containerState=cn[1],cn[0].exit.call(l,t)}i.length=z}function V(){s.write([null]),c=void 0,s=void 0,l.containerState._closeFlow=void 0}}function s0(t,l,i){return _n(t,t.attempt(this.parser.constructs.document,l,i),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Jl(t){if(t===null||On(t)||Kt(t))return 1;if($l(t))return 2}function Kl(t,l,i){const a=[];let s=-1;for(;++s<t.length;){const c=t[s].resolveAll;c&&!a.includes(c)&&(l=c(l,i),a.push(c))}return l}const fs={name:"attention",tokenize:c0,resolveAll:u0};function u0(t,l){let i=-1,a,s,c,u,f,m,g,A;for(;++i<t.length;)if(t[i][0]==="enter"&&t[i][1].type==="attentionSequence"&&t[i][1]._close){for(a=i;a--;)if(t[a][0]==="exit"&&t[a][1].type==="attentionSequence"&&t[a][1]._open&&l.sliceSerialize(t[a][1]).charCodeAt(0)===l.sliceSerialize(t[i][1]).charCodeAt(0)){if((t[a][1]._close||t[i][1]._open)&&(t[i][1].end.offset-t[i][1].start.offset)%3&&!((t[a][1].end.offset-t[a][1].start.offset+t[i][1].end.offset-t[i][1].start.offset)%3))continue;m=t[a][1].end.offset-t[a][1].start.offset>1&&t[i][1].end.offset-t[i][1].start.offset>1?2:1;const h=Object.assign({},t[a][1].end),k=Object.assign({},t[i][1].start);Wp(h,-m),Wp(k,m),u={type:m>1?"strongSequence":"emphasisSequence",start:h,end:Object.assign({},t[a][1].end)},f={type:m>1?"strongSequence":"emphasisSequence",start:Object.assign({},t[i][1].start),end:k},c={type:m>1?"strongText":"emphasisText",start:Object.assign({},t[a][1].end),end:Object.assign({},t[i][1].start)},s={type:m>1?"strong":"emphasis",start:Object.assign({},u.start),end:Object.assign({},f.end)},t[a][1].end=Object.assign({},u.start),t[i][1].start=Object.assign({},f.end),g=[],t[a][1].end.offset-t[a][1].start.offset&&(g=De(g,[["enter",t[a][1],l],["exit",t[a][1],l]])),g=De(g,[["enter",s,l],["enter",u,l],["exit",u,l],["enter",c,l]]),g=De(g,Kl(l.parser.constructs.insideSpan.null,t.slice(a+1,i),l)),g=De(g,[["exit",c,l],["enter",f,l],["exit",f,l],["exit",s,l]]),t[i][1].end.offset-t[i][1].start.offset?(A=2,g=De(g,[["enter",t[i][1],l],["exit",t[i][1],l]])):A=0,Ee(t,a-1,i-a+3,g),i=a+g.length-A-2;break}}for(i=-1;++i<t.length;)t[i][1].type==="attentionSequence"&&(t[i][1].type="data");return t}function c0(t,l){const i=this.parser.constructs.attentionMarkers.null,a=this.previous,s=Jl(a);let c;return u;function u(m){return c=m,t.enter("attentionSequence"),f(m)}function f(m){if(m===c)return t.consume(m),f;const g=t.exit("attentionSequence"),A=Jl(m),h=!A||A===2&&s||i.includes(m),k=!s||s===2&&A||i.includes(a);return g._open=!!(c===42?h:h&&(s||!k)),g._close=!!(c===42?k:k&&(A||!h)),l(m)}}function Wp(t,l){t.column+=l,t.offset+=l,t._bufferIndex+=l}const p0={name:"autolink",tokenize:d0};function d0(t,l,i){let a=0;return s;function s(S){return t.enter("autolink"),t.enter("autolinkMarker"),t.consume(S),t.exit("autolinkMarker"),t.enter("autolinkProtocol"),c}function c(S){return pe(S)?(t.consume(S),u):g(S)}function u(S){return S===43||S===45||S===46||ae(S)?(a=1,f(S)):g(S)}function f(S){return S===58?(t.consume(S),a=0,m):(S===43||S===45||S===46||ae(S))&&a++<32?(t.consume(S),f):(a=0,g(S))}function m(S){return S===62?(t.exit("autolinkProtocol"),t.enter("autolinkMarker"),t.consume(S),t.exit("autolinkMarker"),t.exit("autolink"),l):S===null||S===32||S===60||Wl(S)?i(S):(t.consume(S),m)}function g(S){return S===64?(t.consume(S),A):e0(S)?(t.consume(S),g):i(S)}function A(S){return ae(S)?h(S):i(S)}function h(S){return S===46?(t.consume(S),a=0,A):S===62?(t.exit("autolinkProtocol").type="autolinkEmail",t.enter("autolinkMarker"),t.consume(S),t.exit("autolinkMarker"),t.exit("autolink"),l):k(S)}function k(S){if((S===45||ae(S))&&a++<63){const E=S===45?k:h;return t.consume(S),E}return i(S)}}const Ii={tokenize:f0,partial:!0};function f0(t,l,i){return a;function a(c){return En(c)?_n(t,s,"linePrefix")(c):s(c)}function s(c){return c===null||fn(c)?l(c):i(c)}}const zd={name:"blockQuote",tokenize:m0,continuation:{tokenize:g0},exit:h0};function m0(t,l,i){const a=this;return s;function s(u){if(u===62){const f=a.containerState;return f.open||(t.enter("blockQuote",{_container:!0}),f.open=!0),t.enter("blockQuotePrefix"),t.enter("blockQuoteMarker"),t.consume(u),t.exit("blockQuoteMarker"),c}return i(u)}function c(u){return En(u)?(t.enter("blockQuotePrefixWhitespace"),t.consume(u),t.exit("blockQuotePrefixWhitespace"),t.exit("blockQuotePrefix"),l):(t.exit("blockQuotePrefix"),l(u))}}function g0(t,l,i){const a=this;return s;function s(u){return En(u)?_n(t,c,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(u):c(u)}function c(u){return t.attempt(zd,l,i)(u)}}function h0(t){t.exit("blockQuote")}const Gd={name:"characterEscape",tokenize:y0};function y0(t,l,i){return a;function a(c){return t.enter("characterEscape"),t.enter("escapeMarker"),t.consume(c),t.exit("escapeMarker"),s}function s(c){return r0(c)?(t.enter("characterEscapeValue"),t.consume(c),t.exit("characterEscapeValue"),t.exit("characterEscape"),l):i(c)}}const Hd={name:"characterReference",tokenize:A0};function A0(t,l,i){const a=this;let s=0,c,u;return f;function f(h){return t.enter("characterReference"),t.enter("characterReferenceMarker"),t.consume(h),t.exit("characterReferenceMarker"),m}function m(h){return h===35?(t.enter("characterReferenceMarkerNumeric"),t.consume(h),t.exit("characterReferenceMarkerNumeric"),g):(t.enter("characterReferenceValue"),c=31,u=ae,A(h))}function g(h){return h===88||h===120?(t.enter("characterReferenceMarkerHexadecimal"),t.consume(h),t.exit("characterReferenceMarkerHexadecimal"),t.enter("characterReferenceValue"),c=6,u=t0,A):(t.enter("characterReferenceValue"),c=7,u=ds,A(h))}function A(h){if(h===59&&s){const k=t.exit("characterReferenceValue");return u===ae&&!Ps(a.sliceSerialize(k))?i(h):(t.enter("characterReferenceMarker"),t.consume(h),t.exit("characterReferenceMarker"),t.exit("characterReference"),l)}return u(h)&&s++<c?(t.consume(h),A):i(h)}}const Jp={tokenize:k0,partial:!0},Qp={name:"codeFenced",tokenize:S0,concrete:!0};function S0(t,l,i){const a=this,s={tokenize:cn,partial:!0};let c=0,u=0,f;return m;function m(D){return g(D)}function g(D){const J=a.events[a.events.length-1];return c=J&&J[1].type==="linePrefix"?J[2].sliceSerialize(J[1],!0).length:0,f=D,t.enter("codeFenced"),t.enter("codeFencedFence"),t.enter("codeFencedFenceSequence"),A(D)}function A(D){return D===f?(u++,t.consume(D),A):u<3?i(D):(t.exit("codeFencedFenceSequence"),En(D)?_n(t,h,"whitespace")(D):h(D))}function h(D){return D===null||fn(D)?(t.exit("codeFencedFence"),a.interrupt?l(D):t.check(Jp,L,ln)(D)):(t.enter("codeFencedFenceInfo"),t.enter("chunkString",{contentType:"string"}),k(D))}function k(D){return D===null||fn(D)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),h(D)):En(D)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),_n(t,S,"whitespace")(D)):D===96&&D===f?i(D):(t.consume(D),k)}function S(D){return D===null||fn(D)?h(D):(t.enter("codeFencedFenceMeta"),t.enter("chunkString",{contentType:"string"}),E(D))}function E(D){return D===null||fn(D)?(t.exit("chunkString"),t.exit("codeFencedFenceMeta"),h(D)):D===96&&D===f?i(D):(t.consume(D),E)}function L(D){return t.attempt(s,ln,O)(D)}function O(D){return t.enter("lineEnding"),t.consume(D),t.exit("lineEnding"),T}function T(D){return c>0&&En(D)?_n(t,V,"linePrefix",c+1)(D):V(D)}function V(D){return D===null||fn(D)?t.check(Jp,L,ln)(D):(t.enter("codeFlowValue"),z(D))}function z(D){return D===null||fn(D)?(t.exit("codeFlowValue"),V(D)):(t.consume(D),z)}function ln(D){return t.exit("codeFenced"),l(D)}function cn(D,J,nn){let Q=0;return P;function P(rn){return D.enter("lineEnding"),D.consume(rn),D.exit("lineEnding"),K}function K(rn){return D.enter("codeFencedFence"),En(rn)?_n(D,G,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(rn):G(rn)}function G(rn){return rn===f?(D.enter("codeFencedFenceSequence"),q(rn)):nn(rn)}function q(rn){return rn===f?(Q++,D.consume(rn),q):Q>=u?(D.exit("codeFencedFenceSequence"),En(rn)?_n(D,X,"whitespace")(rn):X(rn)):nn(rn)}function X(rn){return rn===null||fn(rn)?(D.exit("codeFencedFence"),J(rn)):nn(rn)}}}function k0(t,l,i){const a=this;return s;function s(u){return u===null?i(u):(t.enter("lineEnding"),t.consume(u),t.exit("lineEnding"),c)}function c(u){return a.parser.lazy[a.now().line]?i(u):l(u)}}const $a={name:"codeIndented",tokenize:C0},v0={tokenize:w0,partial:!0};function C0(t,l,i){const a=this;return s;function s(g){return t.enter("codeIndented"),_n(t,c,"linePrefix",5)(g)}function c(g){const A=a.events[a.events.length-1];return A&&A[1].type==="linePrefix"&&A[2].sliceSerialize(A[1],!0).length>=4?u(g):i(g)}function u(g){return g===null?m(g):fn(g)?t.attempt(v0,u,m)(g):(t.enter("codeFlowValue"),f(g))}function f(g){return g===null||fn(g)?(t.exit("codeFlowValue"),u(g)):(t.consume(g),f)}function m(g){return t.exit("codeIndented"),l(g)}}function w0(t,l,i){const a=this;return s;function s(u){return a.parser.lazy[a.now().line]?i(u):fn(u)?(t.enter("lineEnding"),t.consume(u),t.exit("lineEnding"),s):_n(t,c,"linePrefix",5)(u)}function c(u){const f=a.events[a.events.length-1];return f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?l(u):fn(u)?s(u):i(u)}}const x0={name:"codeText",tokenize:_0,resolve:I0,previous:E0};function I0(t){let l=t.length-4,i=3,a,s;if((t[i][1].type==="lineEnding"||t[i][1].type==="space")&&(t[l][1].type==="lineEnding"||t[l][1].type==="space")){for(a=i;++a<l;)if(t[a][1].type==="codeTextData"){t[i][1].type="codeTextPadding",t[l][1].type="codeTextPadding",i+=2,l-=2;break}}for(a=i-1,l++;++a<=l;)s===void 0?a!==l&&t[a][1].type!=="lineEnding"&&(s=a):(a===l||t[a][1].type==="lineEnding")&&(t[s][1].type="codeTextData",a!==s+2&&(t[s][1].end=t[a-1][1].end,t.splice(s+2,a-s-2),l-=a-s-2,a=s+2),s=void 0);return t}function E0(t){return t!==96||this.events[this.events.length-1][1].type==="characterEscape"}function _0(t,l,i){let a=0,s,c;return u;function u(h){return t.enter("codeText"),t.enter("codeTextSequence"),f(h)}function f(h){return h===96?(t.consume(h),a++,f):(t.exit("codeTextSequence"),m(h))}function m(h){return h===null?i(h):h===32?(t.enter("space"),t.consume(h),t.exit("space"),m):h===96?(c=t.enter("codeTextSequence"),s=0,A(h)):fn(h)?(t.enter("lineEnding"),t.consume(h),t.exit("lineEnding"),m):(t.enter("codeTextData"),g(h))}function g(h){return h===null||h===32||h===96||fn(h)?(t.exit("codeTextData"),m(h)):(t.consume(h),g)}function A(h){return h===96?(t.consume(h),s++,A):s===a?(t.exit("codeTextSequence"),t.exit("codeText"),l(h)):(c.type="codeTextData",g(h))}}function jd(t){const l={};let i=-1,a,s,c,u,f,m,g;for(;++i<t.length;){for(;i in l;)i=l[i];if(a=t[i],i&&a[1].type==="chunkFlow"&&t[i-1][1].type==="listItemPrefix"&&(m=a[1]._tokenizer.events,c=0,c<m.length&&m[c][1].type==="lineEndingBlank"&&(c+=2),c<m.length&&m[c][1].type==="content"))for(;++c<m.length&&m[c][1].type!=="content";)m[c][1].type==="chunkText"&&(m[c][1]._isInFirstContentOfListItem=!0,c++);if(a[0]==="enter")a[1].contentType&&(Object.assign(l,P0(t,i)),i=l[i],g=!0);else if(a[1]._container){for(c=i,s=void 0;c--&&(u=t[c],u[1].type==="lineEnding"||u[1].type==="lineEndingBlank");)u[0]==="enter"&&(s&&(t[s][1].type="lineEndingBlank"),u[1].type="lineEnding",s=c);s&&(a[1].end=Object.assign({},t[s][1].start),f=t.slice(s,i),f.unshift(a),Ee(t,s,i-s+1,f))}}return!g}function P0(t,l){const i=t[l][1],a=t[l][2];let s=l-1;const c=[],u=i._tokenizer||a.parser[i.contentType](i.start),f=u.events,m=[],g={};let A,h,k=-1,S=i,E=0,L=0;const O=[L];for(;S;){for(;t[++s][1]!==S;);c.push(s),S._tokenizer||(A=a.sliceStream(S),S.next||A.push(null),h&&u.defineSkip(S.start),S._isInFirstContentOfListItem&&(u._gfmTasklistFirstContentOfListItem=!0),u.write(A),S._isInFirstContentOfListItem&&(u._gfmTasklistFirstContentOfListItem=void 0)),h=S,S=S.next}for(S=i;++k<f.length;)f[k][0]==="exit"&&f[k-1][0]==="enter"&&f[k][1].type===f[k-1][1].type&&f[k][1].start.line!==f[k][1].end.line&&(L=k+1,O.push(L),S._tokenizer=void 0,S.previous=void 0,S=S.next);for(u.events=[],S?(S._tokenizer=void 0,S.previous=void 0):O.pop(),k=O.length;k--;){const T=f.slice(O[k],O[k+1]),V=c.pop();m.unshift([V,V+T.length-1]),Ee(t,V,2,T)}for(k=-1;++k<m.length;)g[E+m[k][0]]=E+m[k][1],E+=m[k][1]-m[k][0]-1;return g}const L0={tokenize:T0,resolve:R0},M0={tokenize:b0,partial:!0};function R0(t){return jd(t),t}function T0(t,l){let i;return a;function a(f){return t.enter("content"),i=t.enter("chunkContent",{contentType:"content"}),s(f)}function s(f){return f===null?c(f):fn(f)?t.check(M0,u,c)(f):(t.consume(f),s)}function c(f){return t.exit("chunkContent"),t.exit("content"),l(f)}function u(f){return t.consume(f),t.exit("chunkContent"),i.next=t.enter("chunkContent",{contentType:"content",previous:i}),i=i.next,s}}function b0(t,l,i){const a=this;return s;function s(u){return t.exit("chunkContent"),t.enter("lineEnding"),t.consume(u),t.exit("lineEnding"),_n(t,c,"linePrefix")}function c(u){if(u===null||fn(u))return i(u);const f=a.events[a.events.length-1];return!a.parser.constructs.disable.null.includes("codeIndented")&&f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?l(u):t.interrupt(a.parser.constructs.flow,i,l)(u)}}function Ud(t,l,i,a,s,c,u,f,m){const g=m||Number.POSITIVE_INFINITY;let A=0;return h;function h(T){return T===60?(t.enter(a),t.enter(s),t.enter(c),t.consume(T),t.exit(c),k):T===null||T===32||T===41||Wl(T)?i(T):(t.enter(a),t.enter(u),t.enter(f),t.enter("chunkString",{contentType:"string"}),L(T))}function k(T){return T===62?(t.enter(c),t.consume(T),t.exit(c),t.exit(s),t.exit(a),l):(t.enter(f),t.enter("chunkString",{contentType:"string"}),S(T))}function S(T){return T===62?(t.exit("chunkString"),t.exit(f),k(T)):T===null||T===60||fn(T)?i(T):(t.consume(T),T===92?E:S)}function E(T){return T===60||T===62||T===92?(t.consume(T),S):S(T)}function L(T){return!A&&(T===null||T===41||On(T))?(t.exit("chunkString"),t.exit(f),t.exit(u),t.exit(a),l(T)):A<g&&T===40?(t.consume(T),A++,L):T===41?(t.consume(T),A--,L):T===null||T===32||T===40||Wl(T)?i(T):(t.consume(T),T===92?O:L)}function O(T){return T===40||T===41||T===92?(t.consume(T),L):L(T)}}function Vd(t,l,i,a,s,c){const u=this;let f=0,m;return g;function g(S){return t.enter(a),t.enter(s),t.consume(S),t.exit(s),t.enter(c),A}function A(S){return f>999||S===null||S===91||S===93&&!m||S===94&&!f&&"_hiddenFootnoteSupport"in u.parser.constructs?i(S):S===93?(t.exit(c),t.enter(s),t.consume(S),t.exit(s),t.exit(a),l):fn(S)?(t.enter("lineEnding"),t.consume(S),t.exit("lineEnding"),A):(t.enter("chunkString",{contentType:"string"}),h(S))}function h(S){return S===null||S===91||S===93||fn(S)||f++>999?(t.exit("chunkString"),A(S)):(t.consume(S),m||(m=!En(S)),S===92?k:h)}function k(S){return S===91||S===92||S===93?(t.consume(S),f++,h):h(S)}}function qd(t,l,i,a,s,c){let u;return f;function f(k){return k===34||k===39||k===40?(t.enter(a),t.enter(s),t.consume(k),t.exit(s),u=k===40?41:k,m):i(k)}function m(k){return k===u?(t.enter(s),t.consume(k),t.exit(s),t.exit(a),l):(t.enter(c),g(k))}function g(k){return k===u?(t.exit(c),m(u)):k===null?i(k):fn(k)?(t.enter("lineEnding"),t.consume(k),t.exit("lineEnding"),_n(t,g,"linePrefix")):(t.enter("chunkString",{contentType:"string"}),A(k))}function A(k){return k===u||k===null||fn(k)?(t.exit("chunkString"),g(k)):(t.consume(k),k===92?h:A)}function h(k){return k===u||k===92?(t.consume(k),A):A(k)}}function ki(t,l){let i;return a;function a(s){return fn(s)?(t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),i=!0,a):En(s)?_n(t,a,i?"linePrefix":"lineSuffix")(s):l(s)}}const D0={name:"definition",tokenize:N0},O0={tokenize:F0,partial:!0};function N0(t,l,i){const a=this;let s;return c;function c(S){return t.enter("definition"),u(S)}function u(S){return Vd.call(a,t,f,i,"definitionLabel","definitionLabelMarker","definitionLabelString")(S)}function f(S){return s=je(a.sliceSerialize(a.events[a.events.length-1][1]).slice(1,-1)),S===58?(t.enter("definitionMarker"),t.consume(S),t.exit("definitionMarker"),m):i(S)}function m(S){return On(S)?ki(t,g)(S):g(S)}function g(S){return Ud(t,A,i,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(S)}function A(S){return t.attempt(O0,h,h)(S)}function h(S){return En(S)?_n(t,k,"whitespace")(S):k(S)}function k(S){return S===null||fn(S)?(t.exit("definition"),a.parser.defined.push(s),l(S)):i(S)}}function F0(t,l,i){return a;function a(f){return On(f)?ki(t,s)(f):i(f)}function s(f){return qd(t,c,i,"definitionTitle","definitionTitleMarker","definitionTitleString")(f)}function c(f){return En(f)?_n(t,u,"whitespace")(f):u(f)}function u(f){return f===null||fn(f)?l(f):i(f)}}const B0={name:"hardBreakEscape",tokenize:z0};function z0(t,l,i){return a;function a(c){return t.enter("hardBreakEscape"),t.consume(c),s}function s(c){return fn(c)?(t.exit("hardBreakEscape"),l(c)):i(c)}}const G0={name:"headingAtx",tokenize:j0,resolve:H0};function H0(t,l){let i=t.length-2,a=3,s,c;return t[a][1].type==="whitespace"&&(a+=2),i-2>a&&t[i][1].type==="whitespace"&&(i-=2),t[i][1].type==="atxHeadingSequence"&&(a===i-1||i-4>a&&t[i-2][1].type==="whitespace")&&(i-=a+1===i?2:4),i>a&&(s={type:"atxHeadingText",start:t[a][1].start,end:t[i][1].end},c={type:"chunkText",start:t[a][1].start,end:t[i][1].end,contentType:"text"},Ee(t,a,i-a+1,[["enter",s,l],["enter",c,l],["exit",c,l],["exit",s,l]])),t}function j0(t,l,i){let a=0;return s;function s(A){return t.enter("atxHeading"),c(A)}function c(A){return t.enter("atxHeadingSequence"),u(A)}function u(A){return A===35&&a++<6?(t.consume(A),u):A===null||On(A)?(t.exit("atxHeadingSequence"),f(A)):i(A)}function f(A){return A===35?(t.enter("atxHeadingSequence"),m(A)):A===null||fn(A)?(t.exit("atxHeading"),l(A)):En(A)?_n(t,f,"whitespace")(A):(t.enter("atxHeadingText"),g(A))}function m(A){return A===35?(t.consume(A),m):(t.exit("atxHeadingSequence"),f(A))}function g(A){return A===null||A===35||On(A)?(t.exit("atxHeadingText"),f(A)):(t.consume(A),g)}}const U0=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],$p=["pre","script","style","textarea"],V0={name:"htmlFlow",tokenize:Q0,resolveTo:J0,concrete:!0},q0={tokenize:K0,partial:!0},W0={tokenize:$0,partial:!0};function J0(t){let l=t.length;for(;l--&&!(t[l][0]==="enter"&&t[l][1].type==="htmlFlow"););return l>1&&t[l-2][1].type==="linePrefix"&&(t[l][1].start=t[l-2][1].start,t[l+1][1].start=t[l-2][1].start,t.splice(l-2,2)),t}function Q0(t,l,i){const a=this;let s,c,u,f,m;return g;function g(w){return A(w)}function A(w){return t.enter("htmlFlow"),t.enter("htmlFlowData"),t.consume(w),h}function h(w){return w===33?(t.consume(w),k):w===47?(t.consume(w),c=!0,L):w===63?(t.consume(w),s=3,a.interrupt?l:v):pe(w)?(t.consume(w),u=String.fromCharCode(w),O):i(w)}function k(w){return w===45?(t.consume(w),s=2,S):w===91?(t.consume(w),s=5,f=0,E):pe(w)?(t.consume(w),s=4,a.interrupt?l:v):i(w)}function S(w){return w===45?(t.consume(w),a.interrupt?l:v):i(w)}function E(w){const gn="CDATA[";return w===gn.charCodeAt(f++)?(t.consume(w),f===gn.length?a.interrupt?l:G:E):i(w)}function L(w){return pe(w)?(t.consume(w),u=String.fromCharCode(w),O):i(w)}function O(w){if(w===null||w===47||w===62||On(w)){const gn=w===47,Cn=u.toLowerCase();return!gn&&!c&&$p.includes(Cn)?(s=1,a.interrupt?l(w):G(w)):U0.includes(u.toLowerCase())?(s=6,gn?(t.consume(w),T):a.interrupt?l(w):G(w)):(s=7,a.interrupt&&!a.parser.lazy[a.now().line]?i(w):c?V(w):z(w))}return w===45||ae(w)?(t.consume(w),u+=String.fromCharCode(w),O):i(w)}function T(w){return w===62?(t.consume(w),a.interrupt?l:G):i(w)}function V(w){return En(w)?(t.consume(w),V):P(w)}function z(w){return w===47?(t.consume(w),P):w===58||w===95||pe(w)?(t.consume(w),ln):En(w)?(t.consume(w),z):P(w)}function ln(w){return w===45||w===46||w===58||w===95||ae(w)?(t.consume(w),ln):cn(w)}function cn(w){return w===61?(t.consume(w),D):En(w)?(t.consume(w),cn):z(w)}function D(w){return w===null||w===60||w===61||w===62||w===96?i(w):w===34||w===39?(t.consume(w),m=w,J):En(w)?(t.consume(w),D):nn(w)}function J(w){return w===m?(t.consume(w),m=null,Q):w===null||fn(w)?i(w):(t.consume(w),J)}function nn(w){return w===null||w===34||w===39||w===47||w===60||w===61||w===62||w===96||On(w)?cn(w):(t.consume(w),nn)}function Q(w){return w===47||w===62||En(w)?z(w):i(w)}function P(w){return w===62?(t.consume(w),K):i(w)}function K(w){return w===null||fn(w)?G(w):En(w)?(t.consume(w),K):i(w)}function G(w){return w===45&&s===2?(t.consume(w),vn):w===60&&s===1?(t.consume(w),yn):w===62&&s===4?(t.consume(w),_):w===63&&s===3?(t.consume(w),v):w===93&&s===5?(t.consume(w),un):fn(w)&&(s===6||s===7)?(t.exit("htmlFlowData"),t.check(q0,B,q)(w)):w===null||fn(w)?(t.exit("htmlFlowData"),q(w)):(t.consume(w),G)}function q(w){return t.check(W0,X,B)(w)}function X(w){return t.enter("lineEnding"),t.consume(w),t.exit("lineEnding"),rn}function rn(w){return w===null||fn(w)?q(w):(t.enter("htmlFlowData"),G(w))}function vn(w){return w===45?(t.consume(w),v):G(w)}function yn(w){return w===47?(t.consume(w),u="",Y):G(w)}function Y(w){if(w===62){const gn=u.toLowerCase();return $p.includes(gn)?(t.consume(w),_):G(w)}return pe(w)&&u.length<8?(t.consume(w),u+=String.fromCharCode(w),Y):G(w)}function un(w){return w===93?(t.consume(w),v):G(w)}function v(w){return w===62?(t.consume(w),_):w===45&&s===2?(t.consume(w),v):G(w)}function _(w){return w===null||fn(w)?(t.exit("htmlFlowData"),B(w)):(t.consume(w),_)}function B(w){return t.exit("htmlFlow"),l(w)}}function $0(t,l,i){const a=this;return s;function s(u){return fn(u)?(t.enter("lineEnding"),t.consume(u),t.exit("lineEnding"),c):i(u)}function c(u){return a.parser.lazy[a.now().line]?i(u):l(u)}}function K0(t,l,i){return a;function a(s){return t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),t.attempt(Ii,l,i)}}const Y0={name:"htmlText",tokenize:X0};function X0(t,l,i){const a=this;let s,c,u;return f;function f(v){return t.enter("htmlText"),t.enter("htmlTextData"),t.consume(v),m}function m(v){return v===33?(t.consume(v),g):v===47?(t.consume(v),cn):v===63?(t.consume(v),z):pe(v)?(t.consume(v),nn):i(v)}function g(v){return v===45?(t.consume(v),A):v===91?(t.consume(v),c=0,E):pe(v)?(t.consume(v),V):i(v)}function A(v){return v===45?(t.consume(v),S):i(v)}function h(v){return v===null?i(v):v===45?(t.consume(v),k):fn(v)?(u=h,yn(v)):(t.consume(v),h)}function k(v){return v===45?(t.consume(v),S):h(v)}function S(v){return v===62?vn(v):v===45?k(v):h(v)}function E(v){const _="CDATA[";return v===_.charCodeAt(c++)?(t.consume(v),c===_.length?L:E):i(v)}function L(v){return v===null?i(v):v===93?(t.consume(v),O):fn(v)?(u=L,yn(v)):(t.consume(v),L)}function O(v){return v===93?(t.consume(v),T):L(v)}function T(v){return v===62?vn(v):v===93?(t.consume(v),T):L(v)}function V(v){return v===null||v===62?vn(v):fn(v)?(u=V,yn(v)):(t.consume(v),V)}function z(v){return v===null?i(v):v===63?(t.consume(v),ln):fn(v)?(u=z,yn(v)):(t.consume(v),z)}function ln(v){return v===62?vn(v):z(v)}function cn(v){return pe(v)?(t.consume(v),D):i(v)}function D(v){return v===45||ae(v)?(t.consume(v),D):J(v)}function J(v){return fn(v)?(u=J,yn(v)):En(v)?(t.consume(v),J):vn(v)}function nn(v){return v===45||ae(v)?(t.consume(v),nn):v===47||v===62||On(v)?Q(v):i(v)}function Q(v){return v===47?(t.consume(v),vn):v===58||v===95||pe(v)?(t.consume(v),P):fn(v)?(u=Q,yn(v)):En(v)?(t.consume(v),Q):vn(v)}function P(v){return v===45||v===46||v===58||v===95||ae(v)?(t.consume(v),P):K(v)}function K(v){return v===61?(t.consume(v),G):fn(v)?(u=K,yn(v)):En(v)?(t.consume(v),K):Q(v)}function G(v){return v===null||v===60||v===61||v===62||v===96?i(v):v===34||v===39?(t.consume(v),s=v,q):fn(v)?(u=G,yn(v)):En(v)?(t.consume(v),G):(t.consume(v),X)}function q(v){return v===s?(t.consume(v),s=void 0,rn):v===null?i(v):fn(v)?(u=q,yn(v)):(t.consume(v),q)}function X(v){return v===null||v===34||v===39||v===60||v===61||v===96?i(v):v===47||v===62||On(v)?Q(v):(t.consume(v),X)}function rn(v){return v===47||v===62||On(v)?Q(v):i(v)}function vn(v){return v===62?(t.consume(v),t.exit("htmlTextData"),t.exit("htmlText"),l):i(v)}function yn(v){return t.exit("htmlTextData"),t.enter("lineEnding"),t.consume(v),t.exit("lineEnding"),Y}function Y(v){return En(v)?_n(t,un,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(v):un(v)}function un(v){return t.enter("htmlTextData"),u(v)}}const Ls={name:"labelEnd",tokenize:iA,resolveTo:rA,resolveAll:tA},Z0={tokenize:lA},nA={tokenize:oA},eA={tokenize:aA};function tA(t){let l=-1;for(;++l<t.length;){const i=t[l][1];(i.type==="labelImage"||i.type==="labelLink"||i.type==="labelEnd")&&(t.splice(l+1,i.type==="labelImage"?4:2),i.type="data",l++)}return t}function rA(t,l){let i=t.length,a=0,s,c,u,f;for(;i--;)if(s=t[i][1],c){if(s.type==="link"||s.type==="labelLink"&&s._inactive)break;t[i][0]==="enter"&&s.type==="labelLink"&&(s._inactive=!0)}else if(u){if(t[i][0]==="enter"&&(s.type==="labelImage"||s.type==="labelLink")&&!s._balanced&&(c=i,s.type!=="labelLink")){a=2;break}}else s.type==="labelEnd"&&(u=i);const m={type:t[c][1].type==="labelLink"?"link":"image",start:Object.assign({},t[c][1].start),end:Object.assign({},t[t.length-1][1].end)},g={type:"label",start:Object.assign({},t[c][1].start),end:Object.assign({},t[u][1].end)},A={type:"labelText",start:Object.assign({},t[c+a+2][1].end),end:Object.assign({},t[u-2][1].start)};return f=[["enter",m,l],["enter",g,l]],f=De(f,t.slice(c+1,c+a+3)),f=De(f,[["enter",A,l]]),f=De(f,Kl(l.parser.constructs.insideSpan.null,t.slice(c+a+4,u-3),l)),f=De(f,[["exit",A,l],t[u-2],t[u-1],["exit",g,l]]),f=De(f,t.slice(u+1)),f=De(f,[["exit",m,l]]),Ee(t,c,t.length,f),t}function iA(t,l,i){const a=this;let s=a.events.length,c,u;for(;s--;)if((a.events[s][1].type==="labelImage"||a.events[s][1].type==="labelLink")&&!a.events[s][1]._balanced){c=a.events[s][1];break}return f;function f(k){return c?c._inactive?h(k):(u=a.parser.defined.includes(je(a.sliceSerialize({start:c.end,end:a.now()}))),t.enter("labelEnd"),t.enter("labelMarker"),t.consume(k),t.exit("labelMarker"),t.exit("labelEnd"),m):i(k)}function m(k){return k===40?t.attempt(Z0,A,u?A:h)(k):k===91?t.attempt(nA,A,u?g:h)(k):u?A(k):h(k)}function g(k){return t.attempt(eA,A,h)(k)}function A(k){return l(k)}function h(k){return c._balanced=!0,i(k)}}function lA(t,l,i){return a;function a(h){return t.enter("resource"),t.enter("resourceMarker"),t.consume(h),t.exit("resourceMarker"),s}function s(h){return On(h)?ki(t,c)(h):c(h)}function c(h){return h===41?A(h):Ud(t,u,f,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(h)}function u(h){return On(h)?ki(t,m)(h):A(h)}function f(h){return i(h)}function m(h){return h===34||h===39||h===40?qd(t,g,i,"resourceTitle","resourceTitleMarker","resourceTitleString")(h):A(h)}function g(h){return On(h)?ki(t,A)(h):A(h)}function A(h){return h===41?(t.enter("resourceMarker"),t.consume(h),t.exit("resourceMarker"),t.exit("resource"),l):i(h)}}function oA(t,l,i){const a=this;return s;function s(f){return Vd.call(a,t,c,u,"reference","referenceMarker","referenceString")(f)}function c(f){return a.parser.defined.includes(je(a.sliceSerialize(a.events[a.events.length-1][1]).slice(1,-1)))?l(f):i(f)}function u(f){return i(f)}}function aA(t,l,i){return a;function a(c){return t.enter("reference"),t.enter("referenceMarker"),t.consume(c),t.exit("referenceMarker"),s}function s(c){return c===93?(t.enter("referenceMarker"),t.consume(c),t.exit("referenceMarker"),t.exit("reference"),l):i(c)}}const sA={name:"labelStartImage",tokenize:uA,resolveAll:Ls.resolveAll};function uA(t,l,i){const a=this;return s;function s(f){return t.enter("labelImage"),t.enter("labelImageMarker"),t.consume(f),t.exit("labelImageMarker"),c}function c(f){return f===91?(t.enter("labelMarker"),t.consume(f),t.exit("labelMarker"),t.exit("labelImage"),u):i(f)}function u(f){return f===94&&"_hiddenFootnoteSupport"in a.parser.constructs?i(f):l(f)}}const cA={name:"labelStartLink",tokenize:pA,resolveAll:Ls.resolveAll};function pA(t,l,i){const a=this;return s;function s(u){return t.enter("labelLink"),t.enter("labelMarker"),t.consume(u),t.exit("labelMarker"),t.exit("labelLink"),c}function c(u){return u===94&&"_hiddenFootnoteSupport"in a.parser.constructs?i(u):l(u)}}const Ka={name:"lineEnding",tokenize:dA};function dA(t,l){return i;function i(a){return t.enter("lineEnding"),t.consume(a),t.exit("lineEnding"),_n(t,l,"linePrefix")}}const Vl={name:"thematicBreak",tokenize:fA};function fA(t,l,i){let a=0,s;return c;function c(g){return t.enter("thematicBreak"),u(g)}function u(g){return s=g,f(g)}function f(g){return g===s?(t.enter("thematicBreakSequence"),m(g)):a>=3&&(g===null||fn(g))?(t.exit("thematicBreak"),l(g)):i(g)}function m(g){return g===s?(t.consume(g),a++,m):(t.exit("thematicBreakSequence"),En(g)?_n(t,f,"whitespace")(g):f(g))}}const Ae={name:"list",tokenize:hA,continuation:{tokenize:yA},exit:SA},mA={tokenize:kA,partial:!0},gA={tokenize:AA,partial:!0};function hA(t,l,i){const a=this,s=a.events[a.events.length-1];let c=s&&s[1].type==="linePrefix"?s[2].sliceSerialize(s[1],!0).length:0,u=0;return f;function f(S){const E=a.containerState.type||(S===42||S===43||S===45?"listUnordered":"listOrdered");if(E==="listUnordered"?!a.containerState.marker||S===a.containerState.marker:ds(S)){if(a.containerState.type||(a.containerState.type=E,t.enter(E,{_container:!0})),E==="listUnordered")return t.enter("listItemPrefix"),S===42||S===45?t.check(Vl,i,g)(S):g(S);if(!a.interrupt||S===49)return t.enter("listItemPrefix"),t.enter("listItemValue"),m(S)}return i(S)}function m(S){return ds(S)&&++u<10?(t.consume(S),m):(!a.interrupt||u<2)&&(a.containerState.marker?S===a.containerState.marker:S===41||S===46)?(t.exit("listItemValue"),g(S)):i(S)}function g(S){return t.enter("listItemMarker"),t.consume(S),t.exit("listItemMarker"),a.containerState.marker=a.containerState.marker||S,t.check(Ii,a.interrupt?i:A,t.attempt(mA,k,h))}function A(S){return a.containerState.initialBlankLine=!0,c++,k(S)}function h(S){return En(S)?(t.enter("listItemPrefixWhitespace"),t.consume(S),t.exit("listItemPrefixWhitespace"),k):i(S)}function k(S){return a.containerState.size=c+a.sliceSerialize(t.exit("listItemPrefix"),!0).length,l(S)}}function yA(t,l,i){const a=this;return a.containerState._closeFlow=void 0,t.check(Ii,s,c);function s(f){return a.containerState.furtherBlankLines=a.containerState.furtherBlankLines||a.containerState.initialBlankLine,_n(t,l,"listItemIndent",a.containerState.size+1)(f)}function c(f){return a.containerState.furtherBlankLines||!En(f)?(a.containerState.furtherBlankLines=void 0,a.containerState.initialBlankLine=void 0,u(f)):(a.containerState.furtherBlankLines=void 0,a.containerState.initialBlankLine=void 0,t.attempt(gA,l,u)(f))}function u(f){return a.containerState._closeFlow=!0,a.interrupt=void 0,_n(t,t.attempt(Ae,l,i),"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(f)}}function AA(t,l,i){const a=this;return _n(t,s,"listItemIndent",a.containerState.size+1);function s(c){const u=a.events[a.events.length-1];return u&&u[1].type==="listItemIndent"&&u[2].sliceSerialize(u[1],!0).length===a.containerState.size?l(c):i(c)}}function SA(t){t.exit(this.containerState.type)}function kA(t,l,i){const a=this;return _n(t,s,"listItemPrefixWhitespace",a.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function s(c){const u=a.events[a.events.length-1];return!En(c)&&u&&u[1].type==="listItemPrefixWhitespace"?l(c):i(c)}}const Kp={name:"setextUnderline",tokenize:CA,resolveTo:vA};function vA(t,l){let i=t.length,a,s,c;for(;i--;)if(t[i][0]==="enter"){if(t[i][1].type==="content"){a=i;break}t[i][1].type==="paragraph"&&(s=i)}else t[i][1].type==="content"&&t.splice(i,1),!c&&t[i][1].type==="definition"&&(c=i);const u={type:"setextHeading",start:Object.assign({},t[s][1].start),end:Object.assign({},t[t.length-1][1].end)};return t[s][1].type="setextHeadingText",c?(t.splice(s,0,["enter",u,l]),t.splice(c+1,0,["exit",t[a][1],l]),t[a][1].end=Object.assign({},t[c][1].end)):t[a][1]=u,t.push(["exit",u,l]),t}function CA(t,l,i){const a=this;let s;return c;function c(g){let A=a.events.length,h;for(;A--;)if(a.events[A][1].type!=="lineEnding"&&a.events[A][1].type!=="linePrefix"&&a.events[A][1].type!=="content"){h=a.events[A][1].type==="paragraph";break}return!a.parser.lazy[a.now().line]&&(a.interrupt||h)?(t.enter("setextHeadingLine"),s=g,u(g)):i(g)}function u(g){return t.enter("setextHeadingLineSequence"),f(g)}function f(g){return g===s?(t.consume(g),f):(t.exit("setextHeadingLineSequence"),En(g)?_n(t,m,"lineSuffix")(g):m(g))}function m(g){return g===null||fn(g)?(t.exit("setextHeadingLine"),l(g)):i(g)}}const wA={tokenize:xA};function xA(t){const l=this,i=t.attempt(Ii,a,t.attempt(this.parser.constructs.flowInitial,s,_n(t,t.attempt(this.parser.constructs.flow,s,t.attempt(L0,s)),"linePrefix")));return i;function a(c){if(c===null){t.consume(c);return}return t.enter("lineEndingBlank"),t.consume(c),t.exit("lineEndingBlank"),l.currentConstruct=void 0,i}function s(c){if(c===null){t.consume(c);return}return t.enter("lineEnding"),t.consume(c),t.exit("lineEnding"),l.currentConstruct=void 0,i}}const IA={resolveAll:Jd()},EA=Wd("string"),_A=Wd("text");function Wd(t){return{tokenize:l,resolveAll:Jd(t==="text"?PA:void 0)};function l(i){const a=this,s=this.parser.constructs[t],c=i.attempt(s,u,f);return u;function u(A){return g(A)?c(A):f(A)}function f(A){if(A===null){i.consume(A);return}return i.enter("data"),i.consume(A),m}function m(A){return g(A)?(i.exit("data"),c(A)):(i.consume(A),m)}function g(A){if(A===null)return!0;const h=s[A];let k=-1;if(h)for(;++k<h.length;){const S=h[k];if(!S.previous||S.previous.call(a,a.previous))return!0}return!1}}}function Jd(t){return l;function l(i,a){let s=-1,c;for(;++s<=i.length;)c===void 0?i[s]&&i[s][1].type==="data"&&(c=s,s++):(!i[s]||i[s][1].type!=="data")&&(s!==c+2&&(i[c][1].end=i[s-1][1].end,i.splice(c+2,s-c-2),s=c+2),c=void 0);return t?t(i,a):i}}function PA(t,l){let i=0;for(;++i<=t.length;)if((i===t.length||t[i][1].type==="lineEnding")&&t[i-1][1].type==="data"){const a=t[i-1][1],s=l.sliceStream(a);let c=s.length,u=-1,f=0,m;for(;c--;){const g=s[c];if(typeof g=="string"){for(u=g.length;g.charCodeAt(u-1)===32;)f++,u--;if(u)break;u=-1}else if(g===-2)m=!0,f++;else if(g!==-1){c++;break}}if(f){const g={type:i===t.length||m||f<2?"lineSuffix":"hardBreakTrailing",start:{line:a.end.line,column:a.end.column-f,offset:a.end.offset-f,_index:a.start._index+c,_bufferIndex:c?u:a.start._bufferIndex+u},end:Object.assign({},a.end)};a.end=Object.assign({},g.start),a.start.offset===a.end.offset?Object.assign(a,g):(t.splice(i,0,["enter",g,l],["exit",g,l]),i+=2)}i++}return t}function LA(t,l,i){let a=Object.assign(i?Object.assign({},i):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1});const s={},c=[];let u=[],f=[];const m={consume:V,enter:z,exit:ln,attempt:J(cn),check:J(D),interrupt:J(D,{interrupt:!0})},g={previous:null,code:null,containerState:{},events:[],parser:t,sliceStream:S,sliceSerialize:k,now:E,defineSkip:L,write:h};let A=l.tokenize.call(g,m);return l.resolveAll&&c.push(l),g;function h(K){return u=De(u,K),O(),u[u.length-1]!==null?[]:(nn(l,0),g.events=Kl(c,g.events,g),g.events)}function k(K,G){return RA(S(K),G)}function S(K){return MA(u,K)}function E(){const{line:K,column:G,offset:q,_index:X,_bufferIndex:rn}=a;return{line:K,column:G,offset:q,_index:X,_bufferIndex:rn}}function L(K){s[K.line]=K.column,P()}function O(){let K;for(;a._index<u.length;){const G=u[a._index];if(typeof G=="string")for(K=a._index,a._bufferIndex<0&&(a._bufferIndex=0);a._index===K&&a._bufferIndex<G.length;)T(G.charCodeAt(a._bufferIndex));else T(G)}}function T(K){A=A(K)}function V(K){fn(K)?(a.line++,a.column=1,a.offset+=K===-3?2:1,P()):K!==-1&&(a.column++,a.offset++),a._bufferIndex<0?a._index++:(a._bufferIndex++,a._bufferIndex===u[a._index].length&&(a._bufferIndex=-1,a._index++)),g.previous=K}function z(K,G){const q=G||{};return q.type=K,q.start=E(),g.events.push(["enter",q,g]),f.push(q),q}function ln(K){const G=f.pop();return G.end=E(),g.events.push(["exit",G,g]),G}function cn(K,G){nn(K,G.from)}function D(K,G){G.restore()}function J(K,G){return q;function q(X,rn,vn){let yn,Y,un,v;return Array.isArray(X)?B(X):"tokenize"in X?B([X]):_(X);function _(mn){return Mn;function Mn(wn){const Tn=wn!==null&&mn[wn],qn=wn!==null&&mn.null,Ye=[...Array.isArray(Tn)?Tn:Tn?[Tn]:[],...Array.isArray(qn)?qn:qn?[qn]:[]];return B(Ye)(wn)}}function B(mn){return yn=mn,Y=0,mn.length===0?vn:w(mn[Y])}function w(mn){return Mn;function Mn(wn){return v=Q(),un=mn,mn.partial||(g.currentConstruct=mn),mn.name&&g.parser.constructs.disable.null.includes(mn.name)?Cn():mn.tokenize.call(G?Object.assign(Object.create(g),G):g,m,gn,Cn)(wn)}}function gn(mn){return K(un,v),rn}function Cn(mn){return v.restore(),++Y<yn.length?w(yn[Y]):vn}}}function nn(K,G){K.resolveAll&&!c.includes(K)&&c.push(K),K.resolve&&Ee(g.events,G,g.events.length-G,K.resolve(g.events.slice(G),g)),K.resolveTo&&(g.events=K.resolveTo(g.events,g))}function Q(){const K=E(),G=g.previous,q=g.currentConstruct,X=g.events.length,rn=Array.from(f);return{restore:vn,from:X};function vn(){a=K,g.previous=G,g.currentConstruct=q,g.events.length=X,f=rn,P()}}function P(){a.line in s&&a.column<2&&(a.column=s[a.line],a.offset+=s[a.line]-1)}}function MA(t,l){const i=l.start._index,a=l.start._bufferIndex,s=l.end._index,c=l.end._bufferIndex;let u;if(i===s)u=[t[i].slice(a,c)];else{if(u=t.slice(i,s),a>-1){const f=u[0];typeof f=="string"?u[0]=f.slice(a):u.shift()}c>0&&u.push(t[s].slice(0,c))}return u}function RA(t,l){let i=-1;const a=[];let s;for(;++i<t.length;){const c=t[i];let u;if(typeof c=="string")u=c;else switch(c){case-5:{u="\r";break}case-4:{u=`
`;break}case-3:{u=`\r
`;break}case-2:{u=l?" ":"	";break}case-1:{if(!l&&s)continue;u=" ";break}default:u=String.fromCharCode(c)}s=c===-2,a.push(u)}return a.join("")}const TA={42:Ae,43:Ae,45:Ae,48:Ae,49:Ae,50:Ae,51:Ae,52:Ae,53:Ae,54:Ae,55:Ae,56:Ae,57:Ae,62:zd},bA={91:D0},DA={[-2]:$a,[-1]:$a,32:$a},OA={35:G0,42:Vl,45:[Kp,Vl],60:V0,61:Kp,95:Vl,96:Qp,126:Qp},NA={38:Hd,92:Gd},FA={[-5]:Ka,[-4]:Ka,[-3]:Ka,33:sA,38:Hd,42:fs,60:[p0,Y0],91:cA,92:[B0,Gd],93:Ls,95:fs,96:x0},BA={null:[fs,IA]},zA={null:[42,95]},GA={null:[]},HA=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:zA,contentInitial:bA,disable:GA,document:TA,flow:OA,flowInitial:DA,insideSpan:BA,string:NA,text:FA},Symbol.toStringTag,{value:"Module"}));function jA(t){const i=Fd([HA,...(t||{}).extensions||[]]),a={defined:[],lazy:{},constructs:i,content:s(i0),document:s(o0),flow:s(wA),string:s(EA),text:s(_A)};return a;function s(c){return u;function u(f){return LA(a,c,f)}}}function UA(t){for(;!jd(t););return t}const Yp=/[\0\t\n\r]/g;function VA(){let t=1,l="",i=!0,a;return s;function s(c,u,f){const m=[];let g,A,h,k,S;for(c=l+(typeof c=="string"?c.toString():new TextDecoder(u||void 0).decode(c)),h=0,l="",i&&(c.charCodeAt(0)===65279&&h++,i=void 0);h<c.length;){if(Yp.lastIndex=h,g=Yp.exec(c),k=g&&g.index!==void 0?g.index:c.length,S=c.charCodeAt(k),!g){l=c.slice(h);break}if(S===10&&h===k&&a)m.push(-3),a=void 0;else switch(a&&(m.push(-5),a=void 0),h<k&&(m.push(c.slice(h,k)),t+=k-h),S){case 0:{m.push(65533),t++;break}case 9:{for(A=Math.ceil(t/4)*4,m.push(-2);t++<A;)m.push(-1);break}case 10:{m.push(-4),t=1;break}default:a=!0,t=1}h=k+1}return f&&(a&&m.push(-5),l&&m.push(l),m.push(null)),m}}const qA=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function WA(t){return t.replace(qA,JA)}function JA(t,l,i){if(l)return l;if(i.charCodeAt(0)===35){const s=i.charCodeAt(1),c=s===120||s===88;return Bd(i.slice(c?2:1),c?16:10)}return Ps(i)||t}const Qd={}.hasOwnProperty;function QA(t,l,i){return l&&typeof l=="object"&&(i=l,l=void 0),$A(i)(UA(jA(i).document().write(VA()(t,l,!0))))}function $A(t){const l={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:c(nr),autolinkProtocol:Q,autolinkEmail:Q,atxHeading:c(Mr),blockQuote:c(qn),characterEscape:Q,characterReference:Q,codeFenced:c(Ye),codeFencedFenceInfo:u,codeFencedFenceMeta:u,codeIndented:c(Ye,u),codeText:c(_i,u),codeTextData:Q,data:Q,codeFlowValue:Q,definition:c(Xt),definitionDestinationString:u,definitionLabelString:u,definitionTitleString:u,emphasis:c(Lr),hardBreakEscape:c(Rr),hardBreakTrailing:c(Rr),htmlFlow:c(Zt,u),htmlFlowData:Q,htmlText:c(Zt,u),htmlTextData:Q,image:c(Pi),label:u,link:c(nr),listItem:c(ut),listItemValue:k,listOrdered:c(st,h),listUnordered:c(st),paragraph:c(Tr),reference:w,referenceString:u,resourceDestinationString:u,resourceTitleString:u,setextHeading:c(Mr),strong:c(Li),thematicBreak:c(Ri)},exit:{atxHeading:m(),atxHeadingSequence:cn,autolink:m(),autolinkEmail:Tn,autolinkProtocol:wn,blockQuote:m(),characterEscapeValue:P,characterReferenceMarkerHexadecimal:Cn,characterReferenceMarkerNumeric:Cn,characterReferenceValue:mn,characterReference:Mn,codeFenced:m(O),codeFencedFence:L,codeFencedFenceInfo:S,codeFencedFenceMeta:E,codeFlowValue:P,codeIndented:m(T),codeText:m(rn),codeTextData:P,data:P,definition:m(),definitionDestinationString:ln,definitionLabelString:V,definitionTitleString:z,emphasis:m(),hardBreakEscape:m(G),hardBreakTrailing:m(G),htmlFlow:m(q),htmlFlowData:P,htmlText:m(X),htmlTextData:P,image:m(yn),label:un,labelText:Y,lineEnding:K,link:m(vn),listItem:m(),listOrdered:m(),listUnordered:m(),paragraph:m(),referenceString:gn,resourceDestinationString:v,resourceTitleString:_,resource:B,setextHeading:m(nn),setextHeadingLineSequence:J,setextHeadingText:D,strong:m(),thematicBreak:m()}};$d(l,(t||{}).mdastExtensions||[]);const i={};return a;function a(N){let Z={type:"root",children:[]};const hn={stack:[Z],tokenStack:[],config:l,enter:f,exit:g,buffer:u,resume:A,data:i},xn=[];let Pn=-1;for(;++Pn<N.length;)if(N[Pn][1].type==="listOrdered"||N[Pn][1].type==="listUnordered")if(N[Pn][0]==="enter")xn.push(Pn);else{const Zn=xn.pop();Pn=s(N,Zn,Pn)}for(Pn=-1;++Pn<N.length;){const Zn=l[N[Pn][0]];Qd.call(Zn,N[Pn][1].type)&&Zn[N[Pn][1].type].call(Object.assign({sliceSerialize:N[Pn][2].sliceSerialize},hn),N[Pn][1])}if(hn.tokenStack.length>0){const Zn=hn.tokenStack[hn.tokenStack.length-1];(Zn[1]||Xp).call(hn,void 0,Zn[0])}for(Z.position={start:Mt(N.length>0?N[0][1].start:{line:1,column:1,offset:0}),end:Mt(N.length>0?N[N.length-2][1].end:{line:1,column:1,offset:0})},Pn=-1;++Pn<l.transforms.length;)Z=l.transforms[Pn](Z)||Z;return Z}function s(N,Z,hn){let xn=Z-1,Pn=-1,Zn=!1,Xe,_e,ct,Tt;for(;++xn<=hn;){const ne=N[xn];switch(ne[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{ne[0]==="enter"?Pn++:Pn--,Tt=void 0;break}case"lineEndingBlank":{ne[0]==="enter"&&(Xe&&!Tt&&!Pn&&!ct&&(ct=xn),Tt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Tt=void 0}if(!Pn&&ne[0]==="enter"&&ne[1].type==="listItemPrefix"||Pn===-1&&ne[0]==="exit"&&(ne[1].type==="listUnordered"||ne[1].type==="listOrdered")){if(Xe){let Ue=xn;for(_e=void 0;Ue--;){const ke=N[Ue];if(ke[1].type==="lineEnding"||ke[1].type==="lineEndingBlank"){if(ke[0]==="exit")continue;_e&&(N[_e][1].type="lineEndingBlank",Zn=!0),ke[1].type="lineEnding",_e=Ue}else if(!(ke[1].type==="linePrefix"||ke[1].type==="blockQuotePrefix"||ke[1].type==="blockQuotePrefixWhitespace"||ke[1].type==="blockQuoteMarker"||ke[1].type==="listItemIndent"))break}ct&&(!_e||ct<_e)&&(Xe._spread=!0),Xe.end=Object.assign({},_e?N[_e][1].start:ne[1].end),N.splice(_e||xn,0,["exit",Xe,ne[2]]),xn++,hn++}if(ne[1].type==="listItemPrefix"){const Ue={type:"listItem",_spread:!1,start:Object.assign({},ne[1].start),end:void 0};Xe=Ue,N.splice(xn,0,["enter",Ue,ne[2]]),xn++,hn++,ct=void 0,Tt=!0}}}return N[Z][1]._spread=Zn,hn}function c(N,Z){return hn;function hn(xn){f.call(this,N(xn),xn),Z&&Z.call(this,xn)}}function u(){this.stack.push({type:"fragment",children:[]})}function f(N,Z,hn){this.stack[this.stack.length-1].children.push(N),this.stack.push(N),this.tokenStack.push([Z,hn||void 0]),N.position={start:Mt(Z.start),end:void 0}}function m(N){return Z;function Z(hn){N&&N.call(this,hn),g.call(this,hn)}}function g(N,Z){const hn=this.stack.pop(),xn=this.tokenStack.pop();if(xn)xn[0].type!==N.type&&(Z?Z.call(this,N,xn[0]):(xn[1]||Xp).call(this,N,xn[0]));else throw new Error("Cannot close `"+N.type+"` ("+Si({start:N.start,end:N.end})+"): it’s not open");hn.position.end=Mt(N.end)}function A(){return _s(this.stack.pop())}function h(){this.data.expectingFirstListItemValue=!0}function k(N){if(this.data.expectingFirstListItemValue){const Z=this.stack[this.stack.length-2];Z.start=Number.parseInt(this.sliceSerialize(N),10),this.data.expectingFirstListItemValue=void 0}}function S(){const N=this.resume(),Z=this.stack[this.stack.length-1];Z.lang=N}function E(){const N=this.resume(),Z=this.stack[this.stack.length-1];Z.meta=N}function L(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function O(){const N=this.resume(),Z=this.stack[this.stack.length-1];Z.value=N.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function T(){const N=this.resume(),Z=this.stack[this.stack.length-1];Z.value=N.replace(/(\r?\n|\r)$/g,"")}function V(N){const Z=this.resume(),hn=this.stack[this.stack.length-1];hn.label=Z,hn.identifier=je(this.sliceSerialize(N)).toLowerCase()}function z(){const N=this.resume(),Z=this.stack[this.stack.length-1];Z.title=N}function ln(){const N=this.resume(),Z=this.stack[this.stack.length-1];Z.url=N}function cn(N){const Z=this.stack[this.stack.length-1];if(!Z.depth){const hn=this.sliceSerialize(N).length;Z.depth=hn}}function D(){this.data.setextHeadingSlurpLineEnding=!0}function J(N){const Z=this.stack[this.stack.length-1];Z.depth=this.sliceSerialize(N).codePointAt(0)===61?1:2}function nn(){this.data.setextHeadingSlurpLineEnding=void 0}function Q(N){const hn=this.stack[this.stack.length-1].children;let xn=hn[hn.length-1];(!xn||xn.type!=="text")&&(xn=Mi(),xn.position={start:Mt(N.start),end:void 0},hn.push(xn)),this.stack.push(xn)}function P(N){const Z=this.stack.pop();Z.value+=this.sliceSerialize(N),Z.position.end=Mt(N.end)}function K(N){const Z=this.stack[this.stack.length-1];if(this.data.atHardBreak){const hn=Z.children[Z.children.length-1];hn.position.end=Mt(N.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&l.canContainEols.includes(Z.type)&&(Q.call(this,N),P.call(this,N))}function G(){this.data.atHardBreak=!0}function q(){const N=this.resume(),Z=this.stack[this.stack.length-1];Z.value=N}function X(){const N=this.resume(),Z=this.stack[this.stack.length-1];Z.value=N}function rn(){const N=this.resume(),Z=this.stack[this.stack.length-1];Z.value=N}function vn(){const N=this.stack[this.stack.length-1];if(this.data.inReference){const Z=this.data.referenceType||"shortcut";N.type+="Reference",N.referenceType=Z,delete N.url,delete N.title}else delete N.identifier,delete N.label;this.data.referenceType=void 0}function yn(){const N=this.stack[this.stack.length-1];if(this.data.inReference){const Z=this.data.referenceType||"shortcut";N.type+="Reference",N.referenceType=Z,delete N.url,delete N.title}else delete N.identifier,delete N.label;this.data.referenceType=void 0}function Y(N){const Z=this.sliceSerialize(N),hn=this.stack[this.stack.length-2];hn.label=WA(Z),hn.identifier=je(Z).toLowerCase()}function un(){const N=this.stack[this.stack.length-1],Z=this.resume(),hn=this.stack[this.stack.length-1];if(this.data.inReference=!0,hn.type==="link"){const xn=N.children;hn.children=xn}else hn.alt=Z}function v(){const N=this.resume(),Z=this.stack[this.stack.length-1];Z.url=N}function _(){const N=this.resume(),Z=this.stack[this.stack.length-1];Z.title=N}function B(){this.data.inReference=void 0}function w(){this.data.referenceType="collapsed"}function gn(N){const Z=this.resume(),hn=this.stack[this.stack.length-1];hn.label=Z,hn.identifier=je(this.sliceSerialize(N)).toLowerCase(),this.data.referenceType="full"}function Cn(N){this.data.characterReferenceType=N.type}function mn(N){const Z=this.sliceSerialize(N),hn=this.data.characterReferenceType;let xn;hn?(xn=Bd(Z,hn==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):xn=Ps(Z);const Pn=this.stack[this.stack.length-1];Pn.value+=xn}function Mn(N){const Z=this.stack.pop();Z.position.end=Mt(N.end)}function wn(N){P.call(this,N);const Z=this.stack[this.stack.length-1];Z.url=this.sliceSerialize(N)}function Tn(N){P.call(this,N);const Z=this.stack[this.stack.length-1];Z.url="mailto:"+this.sliceSerialize(N)}function qn(){return{type:"blockquote",children:[]}}function Ye(){return{type:"code",lang:null,meta:null,value:""}}function _i(){return{type:"inlineCode",value:""}}function Xt(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Lr(){return{type:"emphasis",children:[]}}function Mr(){return{type:"heading",depth:0,children:[]}}function Rr(){return{type:"break"}}function Zt(){return{type:"html",value:""}}function Pi(){return{type:"image",title:null,url:"",alt:null}}function nr(){return{type:"link",title:null,url:"",children:[]}}function st(N){return{type:"list",ordered:N.type==="listOrdered",start:null,spread:N._spread,children:[]}}function ut(N){return{type:"listItem",spread:N._spread,checked:null,children:[]}}function Tr(){return{type:"paragraph",children:[]}}function Li(){return{type:"strong",children:[]}}function Mi(){return{type:"text",value:""}}function Ri(){return{type:"thematicBreak"}}}function Mt(t){return{line:t.line,column:t.column,offset:t.offset}}function $d(t,l){let i=-1;for(;++i<l.length;){const a=l[i];Array.isArray(a)?$d(t,a):KA(t,a)}}function KA(t,l){let i;for(i in l)if(Qd.call(l,i))switch(i){case"canContainEols":{const a=l[i];a&&t[i].push(...a);break}case"transforms":{const a=l[i];a&&t[i].push(...a);break}case"enter":case"exit":{const a=l[i];a&&Object.assign(t[i],a);break}}}function Xp(t,l){throw t?new Error("Cannot close `"+t.type+"` ("+Si({start:t.start,end:t.end})+"): a different token (`"+l.type+"`, "+Si({start:l.start,end:l.end})+") is open"):new Error("Cannot close document, a token (`"+l.type+"`, "+Si({start:l.start,end:l.end})+") is still open")}function YA(t){const l=this;l.parser=i;function i(a){return QA(a,{...l.data("settings"),...t,extensions:l.data("micromarkExtensions")||[],mdastExtensions:l.data("fromMarkdownExtensions")||[]})}}function XA(t,l){const i={type:"element",tagName:"blockquote",properties:{},children:t.wrap(t.all(l),!0)};return t.patch(l,i),t.applyData(l,i)}function ZA(t,l){const i={type:"element",tagName:"br",properties:{},children:[]};return t.patch(l,i),[t.applyData(l,i),{type:"text",value:`
`}]}function nS(t,l){const i=l.value?l.value+`
`:"",a={},s=l.lang?l.lang.split(/\s+/):[];s.length>0&&(a.className=["language-"+s[0]]);let c={type:"element",tagName:"code",properties:a,children:[{type:"text",value:i}]};return l.meta&&(c.data={meta:l.meta}),t.patch(l,c),c=t.applyData(l,c),c={type:"element",tagName:"pre",properties:{},children:[c]},t.patch(l,c),c}function eS(t,l){const i={type:"element",tagName:"del",properties:{},children:t.all(l)};return t.patch(l,i),t.applyData(l,i)}function tS(t,l){const i={type:"element",tagName:"em",properties:{},children:t.all(l)};return t.patch(l,i),t.applyData(l,i)}function rS(t,l){const i=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",a=String(l.identifier).toUpperCase(),s=Pr(a.toLowerCase()),c=t.footnoteOrder.indexOf(a);let u,f=t.footnoteCounts.get(a);f===void 0?(f=0,t.footnoteOrder.push(a),u=t.footnoteOrder.length):u=c+1,f+=1,t.footnoteCounts.set(a,f);const m={type:"element",tagName:"a",properties:{href:"#"+i+"fn-"+s,id:i+"fnref-"+s+(f>1?"-"+f:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(u)}]};t.patch(l,m);const g={type:"element",tagName:"sup",properties:{},children:[m]};return t.patch(l,g),t.applyData(l,g)}function iS(t,l){const i={type:"element",tagName:"h"+l.depth,properties:{},children:t.all(l)};return t.patch(l,i),t.applyData(l,i)}function lS(t,l){if(t.options.allowDangerousHtml){const i={type:"raw",value:l.value};return t.patch(l,i),t.applyData(l,i)}}function Kd(t,l){const i=l.referenceType;let a="]";if(i==="collapsed"?a+="[]":i==="full"&&(a+="["+(l.label||l.identifier)+"]"),l.type==="imageReference")return[{type:"text",value:"!["+l.alt+a}];const s=t.all(l),c=s[0];c&&c.type==="text"?c.value="["+c.value:s.unshift({type:"text",value:"["});const u=s[s.length-1];return u&&u.type==="text"?u.value+=a:s.push({type:"text",value:a}),s}function oS(t,l){const i=String(l.identifier).toUpperCase(),a=t.definitionById.get(i);if(!a)return Kd(t,l);const s={src:Pr(a.url||""),alt:l.alt};a.title!==null&&a.title!==void 0&&(s.title=a.title);const c={type:"element",tagName:"img",properties:s,children:[]};return t.patch(l,c),t.applyData(l,c)}function aS(t,l){const i={src:Pr(l.url)};l.alt!==null&&l.alt!==void 0&&(i.alt=l.alt),l.title!==null&&l.title!==void 0&&(i.title=l.title);const a={type:"element",tagName:"img",properties:i,children:[]};return t.patch(l,a),t.applyData(l,a)}function sS(t,l){const i={type:"text",value:l.value.replace(/\r?\n|\r/g," ")};t.patch(l,i);const a={type:"element",tagName:"code",properties:{},children:[i]};return t.patch(l,a),t.applyData(l,a)}function uS(t,l){const i=String(l.identifier).toUpperCase(),a=t.definitionById.get(i);if(!a)return Kd(t,l);const s={href:Pr(a.url||"")};a.title!==null&&a.title!==void 0&&(s.title=a.title);const c={type:"element",tagName:"a",properties:s,children:t.all(l)};return t.patch(l,c),t.applyData(l,c)}function cS(t,l){const i={href:Pr(l.url)};l.title!==null&&l.title!==void 0&&(i.title=l.title);const a={type:"element",tagName:"a",properties:i,children:t.all(l)};return t.patch(l,a),t.applyData(l,a)}function pS(t,l,i){const a=t.all(l),s=i?dS(i):Yd(l),c={},u=[];if(typeof l.checked=="boolean"){const A=a[0];let h;A&&A.type==="element"&&A.tagName==="p"?h=A:(h={type:"element",tagName:"p",properties:{},children:[]},a.unshift(h)),h.children.length>0&&h.children.unshift({type:"text",value:" "}),h.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:l.checked,disabled:!0},children:[]}),c.className=["task-list-item"]}let f=-1;for(;++f<a.length;){const A=a[f];(s||f!==0||A.type!=="element"||A.tagName!=="p")&&u.push({type:"text",value:`
`}),A.type==="element"&&A.tagName==="p"&&!s?u.push(...A.children):u.push(A)}const m=a[a.length-1];m&&(s||m.type!=="element"||m.tagName!=="p")&&u.push({type:"text",value:`
`});const g={type:"element",tagName:"li",properties:c,children:u};return t.patch(l,g),t.applyData(l,g)}function dS(t){let l=!1;if(t.type==="list"){l=t.spread||!1;const i=t.children;let a=-1;for(;!l&&++a<i.length;)l=Yd(i[a])}return l}function Yd(t){const l=t.spread;return l??t.children.length>1}function fS(t,l){const i={},a=t.all(l);let s=-1;for(typeof l.start=="number"&&l.start!==1&&(i.start=l.start);++s<a.length;){const u=a[s];if(u.type==="element"&&u.tagName==="li"&&u.properties&&Array.isArray(u.properties.className)&&u.properties.className.includes("task-list-item")){i.className=["contains-task-list"];break}}const c={type:"element",tagName:l.ordered?"ol":"ul",properties:i,children:t.wrap(a,!0)};return t.patch(l,c),t.applyData(l,c)}function mS(t,l){const i={type:"element",tagName:"p",properties:{},children:t.all(l)};return t.patch(l,i),t.applyData(l,i)}function gS(t,l){const i={type:"root",children:t.wrap(t.all(l))};return t.patch(l,i),t.applyData(l,i)}function hS(t,l){const i={type:"element",tagName:"strong",properties:{},children:t.all(l)};return t.patch(l,i),t.applyData(l,i)}function yS(t,l){const i=t.all(l),a=i.shift(),s=[];if(a){const u={type:"element",tagName:"thead",properties:{},children:t.wrap([a],!0)};t.patch(l.children[0],u),s.push(u)}if(i.length>0){const u={type:"element",tagName:"tbody",properties:{},children:t.wrap(i,!0)},f=ws(l.children[1]),m=Md(l.children[l.children.length-1]);f&&m&&(u.position={start:f,end:m}),s.push(u)}const c={type:"element",tagName:"table",properties:{},children:t.wrap(s,!0)};return t.patch(l,c),t.applyData(l,c)}function AS(t,l,i){const a=i?i.children:void 0,c=(a?a.indexOf(l):1)===0?"th":"td",u=i&&i.type==="table"?i.align:void 0,f=u?u.length:l.children.length;let m=-1;const g=[];for(;++m<f;){const h=l.children[m],k={},S=u?u[m]:void 0;S&&(k.align=S);let E={type:"element",tagName:c,properties:k,children:[]};h&&(E.children=t.all(h),t.patch(h,E),E=t.applyData(h,E)),g.push(E)}const A={type:"element",tagName:"tr",properties:{},children:t.wrap(g,!0)};return t.patch(l,A),t.applyData(l,A)}function SS(t,l){const i={type:"element",tagName:"td",properties:{},children:t.all(l)};return t.patch(l,i),t.applyData(l,i)}const Zp=9,nd=32;function kS(t){const l=String(t),i=/\r?\n|\r/g;let a=i.exec(l),s=0;const c=[];for(;a;)c.push(ed(l.slice(s,a.index),s>0,!0),a[0]),s=a.index+a[0].length,a=i.exec(l);return c.push(ed(l.slice(s),s>0,!1)),c.join("")}function ed(t,l,i){let a=0,s=t.length;if(l){let c=t.codePointAt(a);for(;c===Zp||c===nd;)a++,c=t.codePointAt(a)}if(i){let c=t.codePointAt(s-1);for(;c===Zp||c===nd;)s--,c=t.codePointAt(s-1)}return s>a?t.slice(a,s):""}function vS(t,l){const i={type:"text",value:kS(String(l.value))};return t.patch(l,i),t.applyData(l,i)}function CS(t,l){const i={type:"element",tagName:"hr",properties:{},children:[]};return t.patch(l,i),t.applyData(l,i)}const wS={blockquote:XA,break:ZA,code:nS,delete:eS,emphasis:tS,footnoteReference:rS,heading:iS,html:lS,imageReference:oS,image:aS,inlineCode:sS,linkReference:uS,link:cS,listItem:pS,list:fS,paragraph:mS,root:gS,strong:hS,table:yS,tableCell:SS,tableRow:AS,text:vS,thematicBreak:CS,toml:Gl,yaml:Gl,definition:Gl,footnoteDefinition:Gl};function Gl(){}const Xd=-1,Yl=0,vi=1,Ql=2,Ms=3,Rs=4,Ts=5,bs=6,Zd=7,nf=8,xS=typeof self=="object"?self:globalThis,td=(t,l)=>{switch(t){case"Function":case"SharedWorker":case"Worker":case"eval":case"setInterval":case"setTimeout":throw new TypeError("unable to deserialize "+t)}return new xS[t](l)},IS=(t,l)=>{const i=(s,c)=>(t.set(c,s),s),a=s=>{if(t.has(s))return t.get(s);const[c,u]=l[s];switch(c){case Yl:case Xd:return i(u,s);case vi:{const f=i([],s);for(const m of u)f.push(a(m));return f}case Ql:{const f=i({},s);for(const[m,g]of u)f[a(m)]=a(g);return f}case Ms:return i(new Date(u),s);case Rs:{const{source:f,flags:m}=u;return i(new RegExp(f,m),s)}case Ts:{const f=i(new Map,s);for(const[m,g]of u)f.set(a(m),a(g));return f}case bs:{const f=i(new Set,s);for(const m of u)f.add(a(m));return f}case Zd:{const{name:f,message:m}=u;return i(td(f,m),s)}case nf:return i(BigInt(u),s);case"BigInt":return i(Object(BigInt(u)),s);case"ArrayBuffer":return i(new Uint8Array(u).buffer,u);case"DataView":{const{buffer:f}=new Uint8Array(u);return i(new DataView(f),u)}}return i(td(c,u),s)};return a},rd=t=>IS(new Map,t)(0),Jt="",{toString:ES}={},{keys:_S}=Object,Ai=t=>{const l=typeof t;if(l!=="object"||!t)return[Yl,l];const i=ES.call(t).slice(8,-1);switch(i){case"Array":return[vi,Jt];case"Object":return[Ql,Jt];case"Date":return[Ms,Jt];case"RegExp":return[Rs,Jt];case"Map":return[Ts,Jt];case"Set":return[bs,Jt];case"DataView":return[vi,i]}return i.includes("Array")?[vi,i]:i.includes("Error")?[Zd,i]:[Ql,i]},Hl=([t,l])=>t===Yl&&(l==="function"||l==="symbol"),PS=(t,l,i,a)=>{const s=(u,f)=>{const m=a.push(u)-1;return i.set(f,m),m},c=u=>{if(i.has(u))return i.get(u);let[f,m]=Ai(u);switch(f){case Yl:{let A=u;switch(m){case"bigint":f=nf,A=u.toString();break;case"function":case"symbol":if(t)throw new TypeError("unable to serialize "+m);A=null;break;case"undefined":return s([Xd],u)}return s([f,A],u)}case vi:{if(m){let k=u;return m==="DataView"?k=new Uint8Array(u.buffer):m==="ArrayBuffer"&&(k=new Uint8Array(u)),s([m,[...k]],u)}const A=[],h=s([f,A],u);for(const k of u)A.push(c(k));return h}case Ql:{if(m)switch(m){case"BigInt":return s([m,u.toString()],u);case"Boolean":case"Number":case"String":return s([m,u.valueOf()],u)}if(l&&"toJSON"in u)return c(u.toJSON());const A=[],h=s([f,A],u);for(const k of _S(u))(t||!Hl(Ai(u[k])))&&A.push([c(k),c(u[k])]);return h}case Ms:return s([f,isNaN(u.getTime())?Jt:u.toISOString()],u);case Rs:{const{source:A,flags:h}=u;return s([f,{source:A,flags:h}],u)}case Ts:{const A=[],h=s([f,A],u);for(const[k,S]of u)(t||!(Hl(Ai(k))||Hl(Ai(S))))&&A.push([c(k),c(S)]);return h}case bs:{const A=[],h=s([f,A],u);for(const k of u)(t||!Hl(Ai(k)))&&A.push(c(k));return h}}const{message:g}=u;return s([f,{name:m,message:g}],u)};return c},id=(t,{json:l,lossy:i}={})=>{const a=[];return PS(!(l||i),!!l,new Map,a)(t),a},$t=typeof structuredClone=="function"?(t,l)=>l&&("json"in l||"lossy"in l)?rd(id(t,l)):structuredClone(t):(t,l)=>rd(id(t,l));function LS(t,l){const i=[{type:"text",value:"↩"}];return l>1&&i.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(l)}]}),i}function MS(t,l){return"Back to reference "+(t+1)+(l>1?"-"+l:"")}function RS(t){const l=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",i=t.options.footnoteBackContent||LS,a=t.options.footnoteBackLabel||MS,s=t.options.footnoteLabel||"Footnotes",c=t.options.footnoteLabelTagName||"h2",u=t.options.footnoteLabelProperties||{className:["sr-only"]},f=[];let m=-1;for(;++m<t.footnoteOrder.length;){const g=t.footnoteById.get(t.footnoteOrder[m]);if(!g)continue;const A=t.all(g),h=String(g.identifier).toUpperCase(),k=Pr(h.toLowerCase());let S=0;const E=[],L=t.footnoteCounts.get(h);for(;L!==void 0&&++S<=L;){E.length>0&&E.push({type:"text",value:" "});let V=typeof i=="string"?i:i(m,S);typeof V=="string"&&(V={type:"text",value:V}),E.push({type:"element",tagName:"a",properties:{href:"#"+l+"fnref-"+k+(S>1?"-"+S:""),dataFootnoteBackref:"",ariaLabel:typeof a=="string"?a:a(m,S),className:["data-footnote-backref"]},children:Array.isArray(V)?V:[V]})}const O=A[A.length-1];if(O&&O.type==="element"&&O.tagName==="p"){const V=O.children[O.children.length-1];V&&V.type==="text"?V.value+=" ":O.children.push({type:"text",value:" "}),O.children.push(...E)}else A.push(...E);const T={type:"element",tagName:"li",properties:{id:l+"fn-"+k},children:t.wrap(A,!0)};t.patch(g,T),f.push(T)}if(f.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:c,properties:{...$t(u),id:"footnote-label"},children:[{type:"text",value:s}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:t.wrap(f,!0)},{type:"text",value:`
`}]}}const Xl=function(t){if(t==null)return OS;if(typeof t=="function")return Zl(t);if(typeof t=="object")return Array.isArray(t)?TS(t):bS(t);if(typeof t=="string")return DS(t);throw new Error("Expected function, string, or object as test")};function TS(t){const l=[];let i=-1;for(;++i<t.length;)l[i]=Xl(t[i]);return Zl(a);function a(...s){let c=-1;for(;++c<l.length;)if(l[c].apply(this,s))return!0;return!1}}function bS(t){const l=t;return Zl(i);function i(a){const s=a;let c;for(c in t)if(s[c]!==l[c])return!1;return!0}}function DS(t){return Zl(l);function l(i){return i&&i.type===t}}function Zl(t){return l;function l(i,a,s){return!!(NS(i)&&t.call(this,i,typeof a=="number"?a:void 0,s||void 0))}}function OS(){return!0}function NS(t){return t!==null&&typeof t=="object"&&"type"in t}const ef=[],FS=!0,ms=!1,BS="skip";function tf(t,l,i,a){let s;typeof l=="function"&&typeof i!="function"?(a=i,i=l):s=l;const c=Xl(s),u=a?-1:1;f(t,void 0,[])();function f(m,g,A){const h=m&&typeof m=="object"?m:{};if(typeof h.type=="string"){const S=typeof h.tagName=="string"?h.tagName:typeof h.name=="string"?h.name:void 0;Object.defineProperty(k,"name",{value:"node ("+(m.type+(S?"<"+S+">":""))+")"})}return k;function k(){let S=ef,E,L,O;if((!l||c(m,g,A[A.length-1]||void 0))&&(S=zS(i(m,A)),S[0]===ms))return S;if("children"in m&&m.children){const T=m;if(T.children&&S[0]!==BS)for(L=(a?T.children.length:-1)+u,O=A.concat(T);L>-1&&L<T.children.length;){const V=T.children[L];if(E=f(V,L,O)(),E[0]===ms)return E;L=typeof E[1]=="number"?E[1]:L+u}}return S}}}function zS(t){return Array.isArray(t)?t:typeof t=="number"?[FS,t]:t==null?ef:[t]}function Ds(t,l,i,a){let s,c,u;typeof l=="function"&&typeof i!="function"?(c=void 0,u=l,s=i):(c=l,u=i,s=a),tf(t,c,f,s);function f(m,g){const A=g[g.length-1],h=A?A.children.indexOf(m):void 0;return u(m,h,A)}}const gs={}.hasOwnProperty,GS={};function HS(t,l){const i=l||GS,a=new Map,s=new Map,c=new Map,u={...wS,...i.handlers},f={all:g,applyData:US,definitionById:a,footnoteById:s,footnoteCounts:c,footnoteOrder:[],handlers:u,one:m,options:i,patch:jS,wrap:qS};return Ds(t,function(A){if(A.type==="definition"||A.type==="footnoteDefinition"){const h=A.type==="definition"?a:s,k=String(A.identifier).toUpperCase();h.has(k)||h.set(k,A)}}),f;function m(A,h){const k=A.type,S=f.handlers[k];if(gs.call(f.handlers,k)&&S)return S(f,A,h);if(f.options.passThrough&&f.options.passThrough.includes(k)){if("children"in A){const{children:L,...O}=A,T=$t(O);return T.children=f.all(A),T}return $t(A)}return(f.options.unknownHandler||VS)(f,A,h)}function g(A){const h=[];if("children"in A){const k=A.children;let S=-1;for(;++S<k.length;){const E=f.one(k[S],A);if(E){if(S&&k[S-1].type==="break"&&(!Array.isArray(E)&&E.type==="text"&&(E.value=ld(E.value)),!Array.isArray(E)&&E.type==="element")){const L=E.children[0];L&&L.type==="text"&&(L.value=ld(L.value))}Array.isArray(E)?h.push(...E):h.push(E)}}}return h}}function jS(t,l){t.position&&(l.position=My(t))}function US(t,l){let i=l;if(t&&t.data){const a=t.data.hName,s=t.data.hChildren,c=t.data.hProperties;if(typeof a=="string")if(i.type==="element")i.tagName=a;else{const u="children"in i?i.children:[i];i={type:"element",tagName:a,properties:{},children:u}}i.type==="element"&&c&&Object.assign(i.properties,$t(c)),"children"in i&&i.children&&s!==null&&s!==void 0&&(i.children=s)}return i}function VS(t,l){const i=l.data||{},a="value"in l&&!(gs.call(i,"hProperties")||gs.call(i,"hChildren"))?{type:"text",value:l.value}:{type:"element",tagName:"div",properties:{},children:t.all(l)};return t.patch(l,a),t.applyData(l,a)}function qS(t,l){const i=[];let a=-1;for(l&&i.push({type:"text",value:`
`});++a<t.length;)a&&i.push({type:"text",value:`
`}),i.push(t[a]);return l&&t.length>0&&i.push({type:"text",value:`
`}),i}function ld(t){let l=0,i=t.charCodeAt(l);for(;i===9||i===32;)l++,i=t.charCodeAt(l);return t.slice(l)}function od(t,l){const i=HS(t,l),a=i.one(t,void 0),s=RS(i),c=Array.isArray(a)?{type:"root",children:a}:a||{type:"root",children:[]};return s&&c.children.push({type:"text",value:`
`},s),c}function WS(t,l){return t&&"run"in t?async function(i,a){const s=od(i,{file:a,...l});await t.run(s,a)}:function(i,a){return od(i,{file:a,...t||l})}}function ad(t){if(t)throw t}function hs(t){if(typeof t!="object"||t===null)return!1;const l=Object.getPrototypeOf(t);return(l===null||l===Object.prototype||Object.getPrototypeOf(l)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function JS(){const t=[],l={run:i,use:a};return l;function i(...s){let c=-1;const u=s.pop();if(typeof u!="function")throw new TypeError("Expected function as last argument, not "+u);f(null,...s);function f(m,...g){const A=t[++c];let h=-1;if(m){u(m);return}for(;++h<s.length;)(g[h]===null||g[h]===void 0)&&(g[h]=s[h]);s=g,A?QS(A,f)(...g):u(null,...g)}}function a(s){if(typeof s!="function")throw new TypeError("Expected `middelware` to be a function, not "+s);return t.push(s),l}}function QS(t,l){let i;return a;function a(...u){const f=t.length>u.length;let m;f&&u.push(s);try{m=t.apply(this,u)}catch(g){const A=g;if(f&&i)throw A;return s(A)}f||(m&&m.then&&typeof m.then=="function"?m.then(c,s):m instanceof Error?s(m):c(m))}function s(u,...f){i||(i=!0,l(u,...f))}function c(u){s(null,u)}}const $e={basename:$S,dirname:KS,extname:YS,join:XS,sep:"/"};function $S(t,l){if(l!==void 0&&typeof l!="string")throw new TypeError('"ext" argument must be a string');Ei(t);let i=0,a=-1,s=t.length,c;if(l===void 0||l.length===0||l.length>t.length){for(;s--;)if(t.codePointAt(s)===47){if(c){i=s+1;break}}else a<0&&(c=!0,a=s+1);return a<0?"":t.slice(i,a)}if(l===t)return"";let u=-1,f=l.length-1;for(;s--;)if(t.codePointAt(s)===47){if(c){i=s+1;break}}else u<0&&(c=!0,u=s+1),f>-1&&(t.codePointAt(s)===l.codePointAt(f--)?f<0&&(a=s):(f=-1,a=u));return i===a?a=u:a<0&&(a=t.length),t.slice(i,a)}function KS(t){if(Ei(t),t.length===0)return".";let l=-1,i=t.length,a;for(;--i;)if(t.codePointAt(i)===47){if(a){l=i;break}}else a||(a=!0);return l<0?t.codePointAt(0)===47?"/":".":l===1&&t.codePointAt(0)===47?"//":t.slice(0,l)}function YS(t){Ei(t);let l=t.length,i=-1,a=0,s=-1,c=0,u;for(;l--;){const f=t.codePointAt(l);if(f===47){if(u){a=l+1;break}continue}i<0&&(u=!0,i=l+1),f===46?s<0?s=l:c!==1&&(c=1):s>-1&&(c=-1)}return s<0||i<0||c===0||c===1&&s===i-1&&s===a+1?"":t.slice(s,i)}function XS(...t){let l=-1,i;for(;++l<t.length;)Ei(t[l]),t[l]&&(i=i===void 0?t[l]:i+"/"+t[l]);return i===void 0?".":ZS(i)}function ZS(t){Ei(t);const l=t.codePointAt(0)===47;let i=nk(t,!l);return i.length===0&&!l&&(i="."),i.length>0&&t.codePointAt(t.length-1)===47&&(i+="/"),l?"/"+i:i}function nk(t,l){let i="",a=0,s=-1,c=0,u=-1,f,m;for(;++u<=t.length;){if(u<t.length)f=t.codePointAt(u);else{if(f===47)break;f=47}if(f===47){if(!(s===u-1||c===1))if(s!==u-1&&c===2){if(i.length<2||a!==2||i.codePointAt(i.length-1)!==46||i.codePointAt(i.length-2)!==46){if(i.length>2){if(m=i.lastIndexOf("/"),m!==i.length-1){m<0?(i="",a=0):(i=i.slice(0,m),a=i.length-1-i.lastIndexOf("/")),s=u,c=0;continue}}else if(i.length>0){i="",a=0,s=u,c=0;continue}}l&&(i=i.length>0?i+"/..":"..",a=2)}else i.length>0?i+="/"+t.slice(s+1,u):i=t.slice(s+1,u),a=u-s-1;s=u,c=0}else f===46&&c>-1?c++:c=-1}return i}function Ei(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}const ek={cwd:tk};function tk(){return"/"}function ys(t){return!!(t!==null&&typeof t=="object"&&"href"in t&&t.href&&"protocol"in t&&t.protocol&&t.auth===void 0)}function rk(t){if(typeof t=="string")t=new URL(t);else if(!ys(t)){const l=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+t+"`");throw l.code="ERR_INVALID_ARG_TYPE",l}if(t.protocol!=="file:"){const l=new TypeError("The URL must be of scheme file");throw l.code="ERR_INVALID_URL_SCHEME",l}return ik(t)}function ik(t){if(t.hostname!==""){const a=new TypeError('File URL host must be "localhost" or empty on darwin');throw a.code="ERR_INVALID_FILE_URL_HOST",a}const l=t.pathname;let i=-1;for(;++i<l.length;)if(l.codePointAt(i)===37&&l.codePointAt(i+1)===50){const a=l.codePointAt(i+2);if(a===70||a===102){const s=new TypeError("File URL path must not include encoded / characters");throw s.code="ERR_INVALID_FILE_URL_PATH",s}}return decodeURIComponent(l)}const Ya=["history","path","basename","stem","extname","dirname"];class rf{constructor(l){let i;l?ys(l)?i={path:l}:typeof l=="string"||lk(l)?i={value:l}:i=l:i={},this.cwd="cwd"in i?"":ek.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let a=-1;for(;++a<Ya.length;){const c=Ya[a];c in i&&i[c]!==void 0&&i[c]!==null&&(this[c]=c==="history"?[...i[c]]:i[c])}let s;for(s in i)Ya.includes(s)||(this[s]=i[s])}get basename(){return typeof this.path=="string"?$e.basename(this.path):void 0}set basename(l){Za(l,"basename"),Xa(l,"basename"),this.path=$e.join(this.dirname||"",l)}get dirname(){return typeof this.path=="string"?$e.dirname(this.path):void 0}set dirname(l){sd(this.basename,"dirname"),this.path=$e.join(l||"",this.basename)}get extname(){return typeof this.path=="string"?$e.extname(this.path):void 0}set extname(l){if(Xa(l,"extname"),sd(this.dirname,"extname"),l){if(l.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(l.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=$e.join(this.dirname,this.stem+(l||""))}get path(){return this.history[this.history.length-1]}set path(l){ys(l)&&(l=rk(l)),Za(l,"path"),this.path!==l&&this.history.push(l)}get stem(){return typeof this.path=="string"?$e.basename(this.path,this.extname):void 0}set stem(l){Za(l,"stem"),Xa(l,"stem"),this.path=$e.join(this.dirname||"",l+(this.extname||""))}fail(l,i,a){const s=this.message(l,i,a);throw s.fatal=!0,s}info(l,i,a){const s=this.message(l,i,a);return s.fatal=void 0,s}message(l,i,a){const s=new se(l,i,a);return this.path&&(s.name=this.path+":"+s.name,s.file=this.path),s.fatal=!1,this.messages.push(s),s}toString(l){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(l||void 0).decode(this.value)}}function Xa(t,l){if(t&&t.includes($e.sep))throw new Error("`"+l+"` cannot be a path: did not expect `"+$e.sep+"`")}function Za(t,l){if(!t)throw new Error("`"+l+"` cannot be empty")}function sd(t,l){if(!t)throw new Error("Setting `"+l+"` requires `path` to be set too")}function lk(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const ok=function(t){const a=this.constructor.prototype,s=a[t],c=function(){return s.apply(c,arguments)};Object.setPrototypeOf(c,a);const u=Object.getOwnPropertyNames(s);for(const f of u){const m=Object.getOwnPropertyDescriptor(s,f);m&&Object.defineProperty(c,f,m)}return c},ak={}.hasOwnProperty;class Os extends ok{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=JS()}copy(){const l=new Os;let i=-1;for(;++i<this.attachers.length;){const a=this.attachers[i];l.use(...a)}return l.data($t(this.namespace)),l}data(l,i){return typeof l=="string"?arguments.length===2?(ts("data",this.frozen),this.namespace[l]=i,this):ak.call(this.namespace,l)&&this.namespace[l]||void 0:l?(ts("data",this.frozen),this.namespace=l,this):this.namespace}freeze(){if(this.frozen)return this;const l=this;for(;++this.freezeIndex<this.attachers.length;){const[i,...a]=this.attachers[this.freezeIndex];if(a[0]===!1)continue;a[0]===!0&&(a[0]=void 0);const s=i.call(l,...a);typeof s=="function"&&this.transformers.use(s)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(l){this.freeze();const i=jl(l),a=this.parser||this.Parser;return ns("parse",a),a(String(i),i)}process(l,i){const a=this;return this.freeze(),ns("process",this.parser||this.Parser),es("process",this.compiler||this.Compiler),i?s(void 0,i):new Promise(s);function s(c,u){const f=jl(l),m=a.parse(f);a.run(m,f,function(A,h,k){if(A||!h||!k)return g(A);const S=h,E=a.stringify(S,k);ck(E)?k.value=E:k.result=E,g(A,k)});function g(A,h){A||!h?u(A):c?c(h):i(void 0,h)}}}processSync(l){let i=!1,a;return this.freeze(),ns("processSync",this.parser||this.Parser),es("processSync",this.compiler||this.Compiler),this.process(l,s),cd("processSync","process",i),a;function s(c,u){i=!0,ad(c),a=u}}run(l,i,a){ud(l),this.freeze();const s=this.transformers;return!a&&typeof i=="function"&&(a=i,i=void 0),a?c(void 0,a):new Promise(c);function c(u,f){const m=jl(i);s.run(l,m,g);function g(A,h,k){const S=h||l;A?f(A):u?u(S):a(void 0,S,k)}}}runSync(l,i){let a=!1,s;return this.run(l,i,c),cd("runSync","run",a),s;function c(u,f){ad(u),s=f,a=!0}}stringify(l,i){this.freeze();const a=jl(i),s=this.compiler||this.Compiler;return es("stringify",s),ud(l),s(l,a)}use(l,...i){const a=this.attachers,s=this.namespace;if(ts("use",this.frozen),l!=null)if(typeof l=="function")m(l,i);else if(typeof l=="object")Array.isArray(l)?f(l):u(l);else throw new TypeError("Expected usable value, not `"+l+"`");return this;function c(g){if(typeof g=="function")m(g,[]);else if(typeof g=="object")if(Array.isArray(g)){const[A,...h]=g;m(A,h)}else u(g);else throw new TypeError("Expected usable value, not `"+g+"`")}function u(g){if(!("plugins"in g)&&!("settings"in g))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");f(g.plugins),g.settings&&(s.settings={...s.settings,...$t(g.settings)})}function f(g){let A=-1;if(g!=null)if(Array.isArray(g))for(;++A<g.length;){const h=g[A];c(h)}else throw new TypeError("Expected a list of plugins, not `"+g+"`")}function m(g,A){let h=-1,k=-1;for(;++h<a.length;)if(a[h][0]===g){k=h;break}if(k===-1)a.push([g,...A]);else if(A.length>0){let[S,...E]=A;const L=a[k][1];hs(L)&&hs(S)&&(S=$t({...L,...S})),a[k]=[g,S,...E]}}}}const sk=new Os().freeze();function ns(t,l){if(typeof l!="function")throw new TypeError("Cannot `"+t+"` without `parser`")}function es(t,l){if(typeof l!="function")throw new TypeError("Cannot `"+t+"` without `compiler`")}function ts(t,l){if(l)throw new Error("Cannot call `"+t+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function ud(t){if(!hs(t)||typeof t.type!="string")throw new TypeError("Expected node, got `"+t+"`")}function cd(t,l,i){if(!i)throw new Error("`"+t+"` finished async. Use `"+l+"` instead")}function jl(t){return uk(t)?t:new rf(t)}function uk(t){return!!(t&&typeof t=="object"&&"message"in t&&"messages"in t)}function ck(t){return typeof t=="string"||pk(t)}function pk(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const dk="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",pd=[],dd={allowDangerousHtml:!0},fk=/^(https?|ircs?|mailto|xmpp)$/i,mk=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function gk(t){const l=hk(t),i=yk(t);return Ak(l.runSync(l.parse(i),i),t)}function hk(t){const l=t.rehypePlugins||pd,i=t.remarkPlugins||pd,a=t.remarkRehypeOptions?{...t.remarkRehypeOptions,...dd}:dd;return sk().use(YA).use(i).use(WS,a).use(l)}function yk(t){const l=t.children||"",i=new rf;return typeof l=="string"&&(i.value=l),i}function Ak(t,l){const i=l.allowedElements,a=l.allowElement,s=l.components,c=l.disallowedElements,u=l.skipHtml,f=l.unwrapDisallowed,m=l.urlTransform||Sk;for(const A of mk)Object.hasOwn(l,A.from)&&(""+A.from+(A.to?"use `"+A.to+"` instead":"remove it")+dk+A.id,void 0);return l.className&&(t={type:"element",tagName:"div",properties:{className:l.className},children:t.type==="root"?t.children:[t]}),Ds(t,g),Oy(t,{Fragment:F.Fragment,components:s,ignoreInvalidStyle:!0,jsx:F.jsx,jsxs:F.jsxs,passKeys:!0,passNode:!0});function g(A,h,k){if(A.type==="raw"&&k&&typeof h=="number")return u?k.children.splice(h,1):k.children[h]={type:"text",value:A.value},h;if(A.type==="element"){let S;for(S in Qa)if(Object.hasOwn(Qa,S)&&Object.hasOwn(A.properties,S)){const E=A.properties[S],L=Qa[S];(L===null||L.includes(A.tagName))&&(A.properties[S]=m(String(E||""),S,A))}}if(A.type==="element"){let S=i?!i.includes(A.tagName):c?c.includes(A.tagName):!1;if(!S&&a&&typeof h=="number"&&(S=!a(A,h,k)),S&&k&&typeof h=="number")return f&&A.children?k.children.splice(h,1,...A.children):k.children.splice(h,1),h}}}function Sk(t){const l=t.indexOf(":"),i=t.indexOf("?"),a=t.indexOf("#"),s=t.indexOf("/");return l===-1||s!==-1&&l>s||i!==-1&&l>i||a!==-1&&l>a||fk.test(t.slice(0,l))?t:""}function fd(t,l){const i=String(t);if(typeof l!="string")throw new TypeError("Expected character");let a=0,s=i.indexOf(l);for(;s!==-1;)a++,s=i.indexOf(l,s+l.length);return a}function kk(t){if(typeof t!="string")throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function vk(t,l,i){const s=Xl((i||{}).ignore||[]),c=Ck(l);let u=-1;for(;++u<c.length;)tf(t,"text",f);function f(g,A){let h=-1,k;for(;++h<A.length;){const S=A[h],E=k?k.children:void 0;if(s(S,E?E.indexOf(S):void 0,k))return;k=S}if(k)return m(g,A)}function m(g,A){const h=A[A.length-1],k=c[u][0],S=c[u][1];let E=0;const O=h.children.indexOf(g);let T=!1,V=[];k.lastIndex=0;let z=k.exec(g.value);for(;z;){const ln=z.index,cn={index:z.index,input:z.input,stack:[...A,g]};let D=S(...z,cn);if(typeof D=="string"&&(D=D.length>0?{type:"text",value:D}:void 0),D===!1?k.lastIndex=ln+1:(E!==ln&&V.push({type:"text",value:g.value.slice(E,ln)}),Array.isArray(D)?V.push(...D):D&&V.push(D),E=ln+z[0].length,T=!0),!k.global)break;z=k.exec(g.value)}return T?(E<g.value.length&&V.push({type:"text",value:g.value.slice(E)}),h.children.splice(O,1,...V)):V=[g],O+V.length}}function Ck(t){const l=[];if(!Array.isArray(t))throw new TypeError("Expected find and replace tuple or list of tuples");const i=!t[0]||Array.isArray(t[0])?t:[t];let a=-1;for(;++a<i.length;){const s=i[a];l.push([wk(s[0]),xk(s[1])])}return l}function wk(t){return typeof t=="string"?new RegExp(kk(t),"g"):t}function xk(t){return typeof t=="function"?t:function(){return t}}const rs="phrasing",is=["autolink","link","image","label"];function Ik(){return{transforms:[Tk],enter:{literalAutolink:_k,literalAutolinkEmail:ls,literalAutolinkHttp:ls,literalAutolinkWww:ls},exit:{literalAutolink:Rk,literalAutolinkEmail:Mk,literalAutolinkHttp:Pk,literalAutolinkWww:Lk}}}function Ek(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:rs,notInConstruct:is},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:rs,notInConstruct:is},{character:":",before:"[ps]",after:"\\/",inConstruct:rs,notInConstruct:is}]}}function _k(t){this.enter({type:"link",title:null,url:"",children:[]},t)}function ls(t){this.config.enter.autolinkProtocol.call(this,t)}function Pk(t){this.config.exit.autolinkProtocol.call(this,t)}function Lk(t){this.config.exit.data.call(this,t);const l=this.stack[this.stack.length-1];l.type,l.url="http://"+this.sliceSerialize(t)}function Mk(t){this.config.exit.autolinkEmail.call(this,t)}function Rk(t){this.exit(t)}function Tk(t){vk(t,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,bk],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),Dk]],{ignore:["link","linkReference"]})}function bk(t,l,i,a,s){let c="";if(!lf(s)||(/^w/i.test(l)&&(i=l+i,l="",c="http://"),!Ok(i)))return!1;const u=Nk(i+a);if(!u[0])return!1;const f={type:"link",title:null,url:c+l+u[0],children:[{type:"text",value:l+u[0]}]};return u[1]?[f,{type:"text",value:u[1]}]:f}function Dk(t,l,i,a){return!lf(a,!0)||/[-\d_]$/.test(i)?!1:{type:"link",title:null,url:"mailto:"+l+"@"+i,children:[{type:"text",value:l+"@"+i}]}}function Ok(t){const l=t.split(".");return!(l.length<2||l[l.length-1]&&(/_/.test(l[l.length-1])||!/[a-zA-Z\d]/.test(l[l.length-1]))||l[l.length-2]&&(/_/.test(l[l.length-2])||!/[a-zA-Z\d]/.test(l[l.length-2])))}function Nk(t){const l=/[!"&'),.:;<>?\]}]+$/.exec(t);if(!l)return[t,void 0];t=t.slice(0,l.index);let i=l[0],a=i.indexOf(")");const s=fd(t,"(");let c=fd(t,")");for(;a!==-1&&s>c;)t+=i.slice(0,a+1),i=i.slice(a+1),a=i.indexOf(")"),c++;return[t,i]}function lf(t,l){const i=t.input.charCodeAt(t.index-1);return(t.index===0||Kt(i)||$l(i))&&(!l||i!==47)}of.peek=qk;function Fk(){this.buffer()}function Bk(t){this.enter({type:"footnoteReference",identifier:"",label:""},t)}function zk(){this.buffer()}function Gk(t){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},t)}function Hk(t){const l=this.resume(),i=this.stack[this.stack.length-1];i.type,i.identifier=je(this.sliceSerialize(t)).toLowerCase(),i.label=l}function jk(t){this.exit(t)}function Uk(t){const l=this.resume(),i=this.stack[this.stack.length-1];i.type,i.identifier=je(this.sliceSerialize(t)).toLowerCase(),i.label=l}function Vk(t){this.exit(t)}function qk(){return"["}function of(t,l,i,a){const s=i.createTracker(a);let c=s.move("[^");const u=i.enter("footnoteReference"),f=i.enter("reference");return c+=s.move(i.safe(i.associationId(t),{after:"]",before:c})),f(),u(),c+=s.move("]"),c}function Wk(){return{enter:{gfmFootnoteCallString:Fk,gfmFootnoteCall:Bk,gfmFootnoteDefinitionLabelString:zk,gfmFootnoteDefinition:Gk},exit:{gfmFootnoteCallString:Hk,gfmFootnoteCall:jk,gfmFootnoteDefinitionLabelString:Uk,gfmFootnoteDefinition:Vk}}}function Jk(t){let l=!1;return t&&t.firstLineBlank&&(l=!0),{handlers:{footnoteDefinition:i,footnoteReference:of},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function i(a,s,c,u){const f=c.createTracker(u);let m=f.move("[^");const g=c.enter("footnoteDefinition"),A=c.enter("label");return m+=f.move(c.safe(c.associationId(a),{before:m,after:"]"})),A(),m+=f.move("]:"),a.children&&a.children.length>0&&(f.shift(4),m+=f.move((l?`
`:" ")+c.indentLines(c.containerFlow(a,f.current()),l?af:Qk))),g(),m}}function Qk(t,l,i){return l===0?t:af(t,l,i)}function af(t,l,i){return(i?"":"    ")+t}const $k=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];sf.peek=nv;function Kk(){return{canContainEols:["delete"],enter:{strikethrough:Xk},exit:{strikethrough:Zk}}}function Yk(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:$k}],handlers:{delete:sf}}}function Xk(t){this.enter({type:"delete",children:[]},t)}function Zk(t){this.exit(t)}function sf(t,l,i,a){const s=i.createTracker(a),c=i.enter("strikethrough");let u=s.move("~~");return u+=i.containerPhrasing(t,{...s.current(),before:u,after:"~"}),u+=s.move("~~"),c(),u}function nv(){return"~"}function ev(t){return t.length}function tv(t,l){const i=l||{},a=(i.align||[]).concat(),s=i.stringLength||ev,c=[],u=[],f=[],m=[];let g=0,A=-1;for(;++A<t.length;){const L=[],O=[];let T=-1;for(t[A].length>g&&(g=t[A].length);++T<t[A].length;){const V=rv(t[A][T]);if(i.alignDelimiters!==!1){const z=s(V);O[T]=z,(m[T]===void 0||z>m[T])&&(m[T]=z)}L.push(V)}u[A]=L,f[A]=O}let h=-1;if(typeof a=="object"&&"length"in a)for(;++h<g;)c[h]=md(a[h]);else{const L=md(a);for(;++h<g;)c[h]=L}h=-1;const k=[],S=[];for(;++h<g;){const L=c[h];let O="",T="";L===99?(O=":",T=":"):L===108?O=":":L===114&&(T=":");let V=i.alignDelimiters===!1?1:Math.max(1,m[h]-O.length-T.length);const z=O+"-".repeat(V)+T;i.alignDelimiters!==!1&&(V=O.length+V+T.length,V>m[h]&&(m[h]=V),S[h]=V),k[h]=z}u.splice(1,0,k),f.splice(1,0,S),A=-1;const E=[];for(;++A<u.length;){const L=u[A],O=f[A];h=-1;const T=[];for(;++h<g;){const V=L[h]||"";let z="",ln="";if(i.alignDelimiters!==!1){const cn=m[h]-(O[h]||0),D=c[h];D===114?z=" ".repeat(cn):D===99?cn%2?(z=" ".repeat(cn/2+.5),ln=" ".repeat(cn/2-.5)):(z=" ".repeat(cn/2),ln=z):ln=" ".repeat(cn)}i.delimiterStart!==!1&&!h&&T.push("|"),i.padding!==!1&&!(i.alignDelimiters===!1&&V==="")&&(i.delimiterStart!==!1||h)&&T.push(" "),i.alignDelimiters!==!1&&T.push(z),T.push(V),i.alignDelimiters!==!1&&T.push(ln),i.padding!==!1&&T.push(" "),(i.delimiterEnd!==!1||h!==g-1)&&T.push("|")}E.push(i.delimiterEnd===!1?T.join("").replace(/ +$/,""):T.join(""))}return E.join(`
`)}function rv(t){return t==null?"":String(t)}function md(t){const l=typeof t=="string"?t.codePointAt(0):0;return l===67||l===99?99:l===76||l===108?108:l===82||l===114?114:0}function iv(t,l,i,a){const s=i.enter("blockquote"),c=i.createTracker(a);c.move("> "),c.shift(2);const u=i.indentLines(i.containerFlow(t,c.current()),lv);return s(),u}function lv(t,l,i){return">"+(i?"":" ")+t}function ov(t,l){return gd(t,l.inConstruct,!0)&&!gd(t,l.notInConstruct,!1)}function gd(t,l,i){if(typeof l=="string"&&(l=[l]),!l||l.length===0)return i;let a=-1;for(;++a<l.length;)if(t.includes(l[a]))return!0;return!1}function hd(t,l,i,a){let s=-1;for(;++s<i.unsafe.length;)if(i.unsafe[s].character===`
`&&ov(i.stack,i.unsafe[s]))return/[ \t]/.test(a.before)?"":" ";return`\\
`}function av(t,l){const i=String(t);let a=i.indexOf(l),s=a,c=0,u=0;if(typeof l!="string")throw new TypeError("Expected substring");for(;a!==-1;)a===s?++c>u&&(u=c):c=1,s=a+l.length,a=i.indexOf(l,s);return u}function sv(t,l){return!!(l.options.fences===!1&&t.value&&!t.lang&&/[^ \r\n]/.test(t.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(t.value))}function uv(t){const l=t.options.fence||"`";if(l!=="`"&&l!=="~")throw new Error("Cannot serialize code with `"+l+"` for `options.fence`, expected `` ` `` or `~`");return l}function cv(t,l,i,a){const s=uv(i),c=t.value||"",u=s==="`"?"GraveAccent":"Tilde";if(sv(t,i)){const h=i.enter("codeIndented"),k=i.indentLines(c,pv);return h(),k}const f=i.createTracker(a),m=s.repeat(Math.max(av(c,s)+1,3)),g=i.enter("codeFenced");let A=f.move(m);if(t.lang){const h=i.enter(`codeFencedLang${u}`);A+=f.move(i.safe(t.lang,{before:A,after:" ",encode:["`"],...f.current()})),h()}if(t.lang&&t.meta){const h=i.enter(`codeFencedMeta${u}`);A+=f.move(" "),A+=f.move(i.safe(t.meta,{before:A,after:`
`,encode:["`"],...f.current()})),h()}return A+=f.move(`
`),c&&(A+=f.move(c+`
`)),A+=f.move(m),g(),A}function pv(t,l,i){return(i?"":"    ")+t}function Ns(t){const l=t.options.quote||'"';if(l!=='"'&&l!=="'")throw new Error("Cannot serialize title with `"+l+"` for `options.quote`, expected `\"`, or `'`");return l}function dv(t,l,i,a){const s=Ns(i),c=s==='"'?"Quote":"Apostrophe",u=i.enter("definition");let f=i.enter("label");const m=i.createTracker(a);let g=m.move("[");return g+=m.move(i.safe(i.associationId(t),{before:g,after:"]",...m.current()})),g+=m.move("]: "),f(),!t.url||/[\0- \u007F]/.test(t.url)?(f=i.enter("destinationLiteral"),g+=m.move("<"),g+=m.move(i.safe(t.url,{before:g,after:">",...m.current()})),g+=m.move(">")):(f=i.enter("destinationRaw"),g+=m.move(i.safe(t.url,{before:g,after:t.title?" ":`
`,...m.current()}))),f(),t.title&&(f=i.enter(`title${c}`),g+=m.move(" "+s),g+=m.move(i.safe(t.title,{before:g,after:s,...m.current()})),g+=m.move(s),f()),u(),g}function fv(t){const l=t.options.emphasis||"*";if(l!=="*"&&l!=="_")throw new Error("Cannot serialize emphasis with `"+l+"` for `options.emphasis`, expected `*`, or `_`");return l}uf.peek=mv;function uf(t,l,i,a){const s=fv(i),c=i.enter("emphasis"),u=i.createTracker(a);let f=u.move(s);return f+=u.move(i.containerPhrasing(t,{before:f,after:s,...u.current()})),f+=u.move(s),c(),f}function mv(t,l,i){return i.options.emphasis||"*"}function gv(t,l){let i=!1;return Ds(t,function(a){if("value"in a&&/\r?\n|\r/.test(a.value)||a.type==="break")return i=!0,ms}),!!((!t.depth||t.depth<3)&&_s(t)&&(l.options.setext||i))}function hv(t,l,i,a){const s=Math.max(Math.min(6,t.depth||1),1),c=i.createTracker(a);if(gv(t,i)){const A=i.enter("headingSetext"),h=i.enter("phrasing"),k=i.containerPhrasing(t,{...c.current(),before:`
`,after:`
`});return h(),A(),k+`
`+(s===1?"=":"-").repeat(k.length-(Math.max(k.lastIndexOf("\r"),k.lastIndexOf(`
`))+1))}const u="#".repeat(s),f=i.enter("headingAtx"),m=i.enter("phrasing");c.move(u+" ");let g=i.containerPhrasing(t,{before:"# ",after:`
`,...c.current()});return/^[\t ]/.test(g)&&(g="&#x"+g.charCodeAt(0).toString(16).toUpperCase()+";"+g.slice(1)),g=g?u+" "+g:u,i.options.closeAtx&&(g+=" "+u),m(),f(),g}cf.peek=yv;function cf(t){return t.value||""}function yv(){return"<"}pf.peek=Av;function pf(t,l,i,a){const s=Ns(i),c=s==='"'?"Quote":"Apostrophe",u=i.enter("image");let f=i.enter("label");const m=i.createTracker(a);let g=m.move("![");return g+=m.move(i.safe(t.alt,{before:g,after:"]",...m.current()})),g+=m.move("]("),f(),!t.url&&t.title||/[\0- \u007F]/.test(t.url)?(f=i.enter("destinationLiteral"),g+=m.move("<"),g+=m.move(i.safe(t.url,{before:g,after:">",...m.current()})),g+=m.move(">")):(f=i.enter("destinationRaw"),g+=m.move(i.safe(t.url,{before:g,after:t.title?" ":")",...m.current()}))),f(),t.title&&(f=i.enter(`title${c}`),g+=m.move(" "+s),g+=m.move(i.safe(t.title,{before:g,after:s,...m.current()})),g+=m.move(s),f()),g+=m.move(")"),u(),g}function Av(){return"!"}df.peek=Sv;function df(t,l,i,a){const s=t.referenceType,c=i.enter("imageReference");let u=i.enter("label");const f=i.createTracker(a);let m=f.move("![");const g=i.safe(t.alt,{before:m,after:"]",...f.current()});m+=f.move(g+"]["),u();const A=i.stack;i.stack=[],u=i.enter("reference");const h=i.safe(i.associationId(t),{before:m,after:"]",...f.current()});return u(),i.stack=A,c(),s==="full"||!g||g!==h?m+=f.move(h+"]"):s==="shortcut"?m=m.slice(0,-1):m+=f.move("]"),m}function Sv(){return"!"}function kv(t){if(!t._compiled){const l=(t.atBreak?"[\\r\\n][\\t ]*":"")+(t.before?"(?:"+t.before+")":"");t._compiled=new RegExp((l?"("+l+")":"")+(/[|\\{}()[\]^$+*?.-]/.test(t.character)?"\\":"")+t.character+(t.after?"(?:"+t.after+")":""),"g")}return t._compiled}ff.peek=vv;function ff(t,l,i){let a=t.value||"",s="`",c=-1;for(;new RegExp("(^|[^`])"+s+"([^`]|$)").test(a);)s+="`";for(/[^ \r\n]/.test(a)&&(/^[ \r\n]/.test(a)&&/[ \r\n]$/.test(a)||/^`|`$/.test(a))&&(a=" "+a+" ");++c<i.unsafe.length;){const u=i.unsafe[c],f=kv(u);let m;if(u.atBreak)for(;m=f.exec(a);){let g=m.index;a.charCodeAt(g)===10&&a.charCodeAt(g-1)===13&&g--,a=a.slice(0,g)+" "+a.slice(m.index+1)}}return s+a+s}function vv(){return"`"}function mf(t,l){const i=_s(t);return!!(!l.options.resourceLink&&t.url&&!t.title&&t.children&&t.children.length===1&&t.children[0].type==="text"&&(i===t.url||"mailto:"+i===t.url)&&/^[a-z][a-z+.-]+:/i.test(t.url)&&!/[\0- <>\u007F]/.test(t.url))}gf.peek=Cv;function gf(t,l,i,a){const s=Ns(i),c=s==='"'?"Quote":"Apostrophe",u=i.createTracker(a);let f,m;if(mf(t,i)){const A=i.stack;i.stack=[],f=i.enter("autolink");let h=u.move("<");return h+=u.move(i.containerPhrasing(t,{before:h,after:">",...u.current()})),h+=u.move(">"),f(),i.stack=A,h}f=i.enter("link"),m=i.enter("label");let g=u.move("[");return g+=u.move(i.containerPhrasing(t,{before:g,after:"](",...u.current()})),g+=u.move("]("),m(),!t.url&&t.title||/[\0- \u007F]/.test(t.url)?(m=i.enter("destinationLiteral"),g+=u.move("<"),g+=u.move(i.safe(t.url,{before:g,after:">",...u.current()})),g+=u.move(">")):(m=i.enter("destinationRaw"),g+=u.move(i.safe(t.url,{before:g,after:t.title?" ":")",...u.current()}))),m(),t.title&&(m=i.enter(`title${c}`),g+=u.move(" "+s),g+=u.move(i.safe(t.title,{before:g,after:s,...u.current()})),g+=u.move(s),m()),g+=u.move(")"),f(),g}function Cv(t,l,i){return mf(t,i)?"<":"["}hf.peek=wv;function hf(t,l,i,a){const s=t.referenceType,c=i.enter("linkReference");let u=i.enter("label");const f=i.createTracker(a);let m=f.move("[");const g=i.containerPhrasing(t,{before:m,after:"]",...f.current()});m+=f.move(g+"]["),u();const A=i.stack;i.stack=[],u=i.enter("reference");const h=i.safe(i.associationId(t),{before:m,after:"]",...f.current()});return u(),i.stack=A,c(),s==="full"||!g||g!==h?m+=f.move(h+"]"):s==="shortcut"?m=m.slice(0,-1):m+=f.move("]"),m}function wv(){return"["}function Fs(t){const l=t.options.bullet||"*";if(l!=="*"&&l!=="+"&&l!=="-")throw new Error("Cannot serialize items with `"+l+"` for `options.bullet`, expected `*`, `+`, or `-`");return l}function xv(t){const l=Fs(t),i=t.options.bulletOther;if(!i)return l==="*"?"-":"*";if(i!=="*"&&i!=="+"&&i!=="-")throw new Error("Cannot serialize items with `"+i+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(i===l)throw new Error("Expected `bullet` (`"+l+"`) and `bulletOther` (`"+i+"`) to be different");return i}function Iv(t){const l=t.options.bulletOrdered||".";if(l!=="."&&l!==")")throw new Error("Cannot serialize items with `"+l+"` for `options.bulletOrdered`, expected `.` or `)`");return l}function yf(t){const l=t.options.rule||"*";if(l!=="*"&&l!=="-"&&l!=="_")throw new Error("Cannot serialize rules with `"+l+"` for `options.rule`, expected `*`, `-`, or `_`");return l}function Ev(t,l,i,a){const s=i.enter("list"),c=i.bulletCurrent;let u=t.ordered?Iv(i):Fs(i);const f=t.ordered?u==="."?")":".":xv(i);let m=l&&i.bulletLastUsed?u===i.bulletLastUsed:!1;if(!t.ordered){const A=t.children?t.children[0]:void 0;if((u==="*"||u==="-")&&A&&(!A.children||!A.children[0])&&i.stack[i.stack.length-1]==="list"&&i.stack[i.stack.length-2]==="listItem"&&i.stack[i.stack.length-3]==="list"&&i.stack[i.stack.length-4]==="listItem"&&i.indexStack[i.indexStack.length-1]===0&&i.indexStack[i.indexStack.length-2]===0&&i.indexStack[i.indexStack.length-3]===0&&(m=!0),yf(i)===u&&A){let h=-1;for(;++h<t.children.length;){const k=t.children[h];if(k&&k.type==="listItem"&&k.children&&k.children[0]&&k.children[0].type==="thematicBreak"){m=!0;break}}}}m&&(u=f),i.bulletCurrent=u;const g=i.containerFlow(t,a);return i.bulletLastUsed=u,i.bulletCurrent=c,s(),g}function _v(t){const l=t.options.listItemIndent||"one";if(l!=="tab"&&l!=="one"&&l!=="mixed")throw new Error("Cannot serialize items with `"+l+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return l}function Pv(t,l,i,a){const s=_v(i);let c=i.bulletCurrent||Fs(i);l&&l.type==="list"&&l.ordered&&(c=(typeof l.start=="number"&&l.start>-1?l.start:1)+(i.options.incrementListMarker===!1?0:l.children.indexOf(t))+c);let u=c.length+1;(s==="tab"||s==="mixed"&&(l&&l.type==="list"&&l.spread||t.spread))&&(u=Math.ceil(u/4)*4);const f=i.createTracker(a);f.move(c+" ".repeat(u-c.length)),f.shift(u);const m=i.enter("listItem"),g=i.indentLines(i.containerFlow(t,f.current()),A);return m(),g;function A(h,k,S){return k?(S?"":" ".repeat(u))+h:(S?c:c+" ".repeat(u-c.length))+h}}function Lv(t,l,i,a){const s=i.enter("paragraph"),c=i.enter("phrasing"),u=i.containerPhrasing(t,a);return c(),s(),u}const Mv=Xl(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function Rv(t,l,i,a){return(t.children.some(function(u){return Mv(u)})?i.containerPhrasing:i.containerFlow).call(i,t,a)}function Tv(t){const l=t.options.strong||"*";if(l!=="*"&&l!=="_")throw new Error("Cannot serialize strong with `"+l+"` for `options.strong`, expected `*`, or `_`");return l}Af.peek=bv;function Af(t,l,i,a){const s=Tv(i),c=i.enter("strong"),u=i.createTracker(a);let f=u.move(s+s);return f+=u.move(i.containerPhrasing(t,{before:f,after:s,...u.current()})),f+=u.move(s+s),c(),f}function bv(t,l,i){return i.options.strong||"*"}function Dv(t,l,i,a){return i.safe(t.value,a)}function Ov(t){const l=t.options.ruleRepetition||3;if(l<3)throw new Error("Cannot serialize rules with repetition `"+l+"` for `options.ruleRepetition`, expected `3` or more");return l}function Nv(t,l,i){const a=(yf(i)+(i.options.ruleSpaces?" ":"")).repeat(Ov(i));return i.options.ruleSpaces?a.slice(0,-1):a}const Sf={blockquote:iv,break:hd,code:cv,definition:dv,emphasis:uf,hardBreak:hd,heading:hv,html:cf,image:pf,imageReference:df,inlineCode:ff,link:gf,linkReference:hf,list:Ev,listItem:Pv,paragraph:Lv,root:Rv,strong:Af,text:Dv,thematicBreak:Nv};function Fv(){return{enter:{table:Bv,tableData:yd,tableHeader:yd,tableRow:Gv},exit:{codeText:Hv,table:zv,tableData:os,tableHeader:os,tableRow:os}}}function Bv(t){const l=t._align;this.enter({type:"table",align:l.map(function(i){return i==="none"?null:i}),children:[]},t),this.data.inTable=!0}function zv(t){this.exit(t),this.data.inTable=void 0}function Gv(t){this.enter({type:"tableRow",children:[]},t)}function os(t){this.exit(t)}function yd(t){this.enter({type:"tableCell",children:[]},t)}function Hv(t){let l=this.resume();this.data.inTable&&(l=l.replace(/\\([\\|])/g,jv));const i=this.stack[this.stack.length-1];i.type,i.value=l,this.exit(t)}function jv(t,l){return l==="|"?l:t}function Uv(t){const l=t||{},i=l.tableCellPadding,a=l.tablePipeAlign,s=l.stringLength,c=i?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:k,table:u,tableCell:m,tableRow:f}};function u(S,E,L,O){return g(A(S,L,O),S.align)}function f(S,E,L,O){const T=h(S,L,O),V=g([T]);return V.slice(0,V.indexOf(`
`))}function m(S,E,L,O){const T=L.enter("tableCell"),V=L.enter("phrasing"),z=L.containerPhrasing(S,{...O,before:c,after:c});return V(),T(),z}function g(S,E){return tv(S,{align:E,alignDelimiters:a,padding:i,stringLength:s})}function A(S,E,L){const O=S.children;let T=-1;const V=[],z=E.enter("table");for(;++T<O.length;)V[T]=h(O[T],E,L);return z(),V}function h(S,E,L){const O=S.children;let T=-1;const V=[],z=E.enter("tableRow");for(;++T<O.length;)V[T]=m(O[T],S,E,L);return z(),V}function k(S,E,L){let O=Sf.inlineCode(S,E,L);return L.stack.includes("tableCell")&&(O=O.replace(/\|/g,"\\$&")),O}}function Vv(){return{exit:{taskListCheckValueChecked:Ad,taskListCheckValueUnchecked:Ad,paragraph:Wv}}}function qv(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:Jv}}}function Ad(t){const l=this.stack[this.stack.length-2];l.type,l.checked=t.type==="taskListCheckValueChecked"}function Wv(t){const l=this.stack[this.stack.length-2];if(l&&l.type==="listItem"&&typeof l.checked=="boolean"){const i=this.stack[this.stack.length-1];i.type;const a=i.children[0];if(a&&a.type==="text"){const s=l.children;let c=-1,u;for(;++c<s.length;){const f=s[c];if(f.type==="paragraph"){u=f;break}}u===i&&(a.value=a.value.slice(1),a.value.length===0?i.children.shift():i.position&&a.position&&typeof a.position.start.offset=="number"&&(a.position.start.column++,a.position.start.offset++,i.position.start=Object.assign({},a.position.start)))}}this.exit(t)}function Jv(t,l,i,a){const s=t.children[0],c=typeof t.checked=="boolean"&&s&&s.type==="paragraph",u="["+(t.checked?"x":" ")+"] ",f=i.createTracker(a);c&&f.move(u);let m=Sf.listItem(t,l,i,{...a,...f.current()});return c&&(m=m.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,g)),m;function g(A){return A+u}}function Qv(){return[Ik(),Wk(),Kk(),Fv(),Vv()]}function $v(t){return{extensions:[Ek(),Jk(t),Yk(),Uv(t),qv()]}}const Kv={tokenize:tC,partial:!0},kf={tokenize:rC,partial:!0},vf={tokenize:iC,partial:!0},Cf={tokenize:lC,partial:!0},Yv={tokenize:oC,partial:!0},wf={name:"wwwAutolink",tokenize:nC,previous:If},xf={name:"protocolAutolink",tokenize:eC,previous:Ef},at={name:"emailAutolink",tokenize:Zv,previous:_f},Ke={};function Xv(){return{text:Ke}}let Wt=48;for(;Wt<123;)Ke[Wt]=at,Wt++,Wt===58?Wt=65:Wt===91&&(Wt=97);Ke[43]=at;Ke[45]=at;Ke[46]=at;Ke[95]=at;Ke[72]=[at,xf];Ke[104]=[at,xf];Ke[87]=[at,wf];Ke[119]=[at,wf];function Zv(t,l,i){const a=this;let s,c;return u;function u(h){return!As(h)||!_f.call(a,a.previous)||Bs(a.events)?i(h):(t.enter("literalAutolink"),t.enter("literalAutolinkEmail"),f(h))}function f(h){return As(h)?(t.consume(h),f):h===64?(t.consume(h),m):i(h)}function m(h){return h===46?t.check(Yv,A,g)(h):h===45||h===95||ae(h)?(c=!0,t.consume(h),m):A(h)}function g(h){return t.consume(h),s=!0,m}function A(h){return c&&s&&pe(a.previous)?(t.exit("literalAutolinkEmail"),t.exit("literalAutolink"),l(h)):i(h)}}function nC(t,l,i){const a=this;return s;function s(u){return u!==87&&u!==119||!If.call(a,a.previous)||Bs(a.events)?i(u):(t.enter("literalAutolink"),t.enter("literalAutolinkWww"),t.check(Kv,t.attempt(kf,t.attempt(vf,c),i),i)(u))}function c(u){return t.exit("literalAutolinkWww"),t.exit("literalAutolink"),l(u)}}function eC(t,l,i){const a=this;let s="",c=!1;return u;function u(h){return(h===72||h===104)&&Ef.call(a,a.previous)&&!Bs(a.events)?(t.enter("literalAutolink"),t.enter("literalAutolinkHttp"),s+=String.fromCodePoint(h),t.consume(h),f):i(h)}function f(h){if(pe(h)&&s.length<5)return s+=String.fromCodePoint(h),t.consume(h),f;if(h===58){const k=s.toLowerCase();if(k==="http"||k==="https")return t.consume(h),m}return i(h)}function m(h){return h===47?(t.consume(h),c?g:(c=!0,m)):i(h)}function g(h){return h===null||Wl(h)||On(h)||Kt(h)||$l(h)?i(h):t.attempt(kf,t.attempt(vf,A),i)(h)}function A(h){return t.exit("literalAutolinkHttp"),t.exit("literalAutolink"),l(h)}}function tC(t,l,i){let a=0;return s;function s(u){return(u===87||u===119)&&a<3?(a++,t.consume(u),s):u===46&&a===3?(t.consume(u),c):i(u)}function c(u){return u===null?i(u):l(u)}}function rC(t,l,i){let a,s,c;return u;function u(g){return g===46||g===95?t.check(Cf,m,f)(g):g===null||On(g)||Kt(g)||g!==45&&$l(g)?m(g):(c=!0,t.consume(g),u)}function f(g){return g===95?a=!0:(s=a,a=void 0),t.consume(g),u}function m(g){return s||a||!c?i(g):l(g)}}function iC(t,l){let i=0,a=0;return s;function s(u){return u===40?(i++,t.consume(u),s):u===41&&a<i?c(u):u===33||u===34||u===38||u===39||u===41||u===42||u===44||u===46||u===58||u===59||u===60||u===63||u===93||u===95||u===126?t.check(Cf,l,c)(u):u===null||On(u)||Kt(u)?l(u):(t.consume(u),s)}function c(u){return u===41&&a++,t.consume(u),s}}function lC(t,l,i){return a;function a(f){return f===33||f===34||f===39||f===41||f===42||f===44||f===46||f===58||f===59||f===63||f===95||f===126?(t.consume(f),a):f===38?(t.consume(f),c):f===93?(t.consume(f),s):f===60||f===null||On(f)||Kt(f)?l(f):i(f)}function s(f){return f===null||f===40||f===91||On(f)||Kt(f)?l(f):a(f)}function c(f){return pe(f)?u(f):i(f)}function u(f){return f===59?(t.consume(f),a):pe(f)?(t.consume(f),u):i(f)}}function oC(t,l,i){return a;function a(c){return t.consume(c),s}function s(c){return ae(c)?i(c):l(c)}}function If(t){return t===null||t===40||t===42||t===95||t===91||t===93||t===126||On(t)}function Ef(t){return!pe(t)}function _f(t){return!(t===47||As(t))}function As(t){return t===43||t===45||t===46||t===95||ae(t)}function Bs(t){let l=t.length,i=!1;for(;l--;){const a=t[l][1];if((a.type==="labelLink"||a.type==="labelImage")&&!a._balanced){i=!0;break}if(a._gfmAutolinkLiteralWalkedInto){i=!1;break}}return t.length>0&&!i&&(t[t.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),i}const aC={tokenize:gC,partial:!0};function sC(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:dC,continuation:{tokenize:fC},exit:mC}},text:{91:{name:"gfmFootnoteCall",tokenize:pC},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:uC,resolveTo:cC}}}}function uC(t,l,i){const a=this;let s=a.events.length;const c=a.parser.gfmFootnotes||(a.parser.gfmFootnotes=[]);let u;for(;s--;){const m=a.events[s][1];if(m.type==="labelImage"){u=m;break}if(m.type==="gfmFootnoteCall"||m.type==="labelLink"||m.type==="label"||m.type==="image"||m.type==="link")break}return f;function f(m){if(!u||!u._balanced)return i(m);const g=je(a.sliceSerialize({start:u.end,end:a.now()}));return g.codePointAt(0)!==94||!c.includes(g.slice(1))?i(m):(t.enter("gfmFootnoteCallLabelMarker"),t.consume(m),t.exit("gfmFootnoteCallLabelMarker"),l(m))}}function cC(t,l){let i=t.length;for(;i--;)if(t[i][1].type==="labelImage"&&t[i][0]==="enter"){t[i][1];break}t[i+1][1].type="data",t[i+3][1].type="gfmFootnoteCallLabelMarker";const a={type:"gfmFootnoteCall",start:Object.assign({},t[i+3][1].start),end:Object.assign({},t[t.length-1][1].end)},s={type:"gfmFootnoteCallMarker",start:Object.assign({},t[i+3][1].end),end:Object.assign({},t[i+3][1].end)};s.end.column++,s.end.offset++,s.end._bufferIndex++;const c={type:"gfmFootnoteCallString",start:Object.assign({},s.end),end:Object.assign({},t[t.length-1][1].start)},u={type:"chunkString",contentType:"string",start:Object.assign({},c.start),end:Object.assign({},c.end)},f=[t[i+1],t[i+2],["enter",a,l],t[i+3],t[i+4],["enter",s,l],["exit",s,l],["enter",c,l],["enter",u,l],["exit",u,l],["exit",c,l],t[t.length-2],t[t.length-1],["exit",a,l]];return t.splice(i,t.length-i+1,...f),t}function pC(t,l,i){const a=this,s=a.parser.gfmFootnotes||(a.parser.gfmFootnotes=[]);let c=0,u;return f;function f(h){return t.enter("gfmFootnoteCall"),t.enter("gfmFootnoteCallLabelMarker"),t.consume(h),t.exit("gfmFootnoteCallLabelMarker"),m}function m(h){return h!==94?i(h):(t.enter("gfmFootnoteCallMarker"),t.consume(h),t.exit("gfmFootnoteCallMarker"),t.enter("gfmFootnoteCallString"),t.enter("chunkString").contentType="string",g)}function g(h){if(c>999||h===93&&!u||h===null||h===91||On(h))return i(h);if(h===93){t.exit("chunkString");const k=t.exit("gfmFootnoteCallString");return s.includes(je(a.sliceSerialize(k)))?(t.enter("gfmFootnoteCallLabelMarker"),t.consume(h),t.exit("gfmFootnoteCallLabelMarker"),t.exit("gfmFootnoteCall"),l):i(h)}return On(h)||(u=!0),c++,t.consume(h),h===92?A:g}function A(h){return h===91||h===92||h===93?(t.consume(h),c++,g):g(h)}}function dC(t,l,i){const a=this,s=a.parser.gfmFootnotes||(a.parser.gfmFootnotes=[]);let c,u=0,f;return m;function m(E){return t.enter("gfmFootnoteDefinition")._container=!0,t.enter("gfmFootnoteDefinitionLabel"),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(E),t.exit("gfmFootnoteDefinitionLabelMarker"),g}function g(E){return E===94?(t.enter("gfmFootnoteDefinitionMarker"),t.consume(E),t.exit("gfmFootnoteDefinitionMarker"),t.enter("gfmFootnoteDefinitionLabelString"),t.enter("chunkString").contentType="string",A):i(E)}function A(E){if(u>999||E===93&&!f||E===null||E===91||On(E))return i(E);if(E===93){t.exit("chunkString");const L=t.exit("gfmFootnoteDefinitionLabelString");return c=je(a.sliceSerialize(L)),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(E),t.exit("gfmFootnoteDefinitionLabelMarker"),t.exit("gfmFootnoteDefinitionLabel"),k}return On(E)||(f=!0),u++,t.consume(E),E===92?h:A}function h(E){return E===91||E===92||E===93?(t.consume(E),u++,A):A(E)}function k(E){return E===58?(t.enter("definitionMarker"),t.consume(E),t.exit("definitionMarker"),s.includes(c)||s.push(c),_n(t,S,"gfmFootnoteDefinitionWhitespace")):i(E)}function S(E){return l(E)}}function fC(t,l,i){return t.check(Ii,l,t.attempt(aC,l,i))}function mC(t){t.exit("gfmFootnoteDefinition")}function gC(t,l,i){const a=this;return _n(t,s,"gfmFootnoteDefinitionIndent",5);function s(c){const u=a.events[a.events.length-1];return u&&u[1].type==="gfmFootnoteDefinitionIndent"&&u[2].sliceSerialize(u[1],!0).length===4?l(c):i(c)}}function hC(t){let i=(t||{}).singleTilde;const a={name:"strikethrough",tokenize:c,resolveAll:s};return i==null&&(i=!0),{text:{126:a},insideSpan:{null:[a]},attentionMarkers:{null:[126]}};function s(u,f){let m=-1;for(;++m<u.length;)if(u[m][0]==="enter"&&u[m][1].type==="strikethroughSequenceTemporary"&&u[m][1]._close){let g=m;for(;g--;)if(u[g][0]==="exit"&&u[g][1].type==="strikethroughSequenceTemporary"&&u[g][1]._open&&u[m][1].end.offset-u[m][1].start.offset===u[g][1].end.offset-u[g][1].start.offset){u[m][1].type="strikethroughSequence",u[g][1].type="strikethroughSequence";const A={type:"strikethrough",start:Object.assign({},u[g][1].start),end:Object.assign({},u[m][1].end)},h={type:"strikethroughText",start:Object.assign({},u[g][1].end),end:Object.assign({},u[m][1].start)},k=[["enter",A,f],["enter",u[g][1],f],["exit",u[g][1],f],["enter",h,f]],S=f.parser.constructs.insideSpan.null;S&&Ee(k,k.length,0,Kl(S,u.slice(g+1,m),f)),Ee(k,k.length,0,[["exit",h,f],["enter",u[m][1],f],["exit",u[m][1],f],["exit",A,f]]),Ee(u,g-1,m-g+3,k),m=g+k.length-2;break}}for(m=-1;++m<u.length;)u[m][1].type==="strikethroughSequenceTemporary"&&(u[m][1].type="data");return u}function c(u,f,m){const g=this.previous,A=this.events;let h=0;return k;function k(E){return g===126&&A[A.length-1][1].type!=="characterEscape"?m(E):(u.enter("strikethroughSequenceTemporary"),S(E))}function S(E){const L=Jl(g);if(E===126)return h>1?m(E):(u.consume(E),h++,S);if(h<2&&!i)return m(E);const O=u.exit("strikethroughSequenceTemporary"),T=Jl(E);return O._open=!T||T===2&&!!L,O._close=!L||L===2&&!!T,f(E)}}}class yC{constructor(){this.map=[]}add(l,i,a){AC(this,l,i,a)}consume(l){if(this.map.sort(function(c,u){return c[0]-u[0]}),this.map.length===0)return;let i=this.map.length;const a=[];for(;i>0;)i-=1,a.push(l.slice(this.map[i][0]+this.map[i][1]),this.map[i][2]),l.length=this.map[i][0];a.push(l.slice()),l.length=0;let s=a.pop();for(;s;){for(const c of s)l.push(c);s=a.pop()}this.map.length=0}}function AC(t,l,i,a){let s=0;if(!(i===0&&a.length===0)){for(;s<t.map.length;){if(t.map[s][0]===l){t.map[s][1]+=i,t.map[s][2].push(...a);return}s+=1}t.map.push([l,i,a])}}function SC(t,l){let i=!1;const a=[];for(;l<t.length;){const s=t[l];if(i){if(s[0]==="enter")s[1].type==="tableContent"&&a.push(t[l+1][1].type==="tableDelimiterMarker"?"left":"none");else if(s[1].type==="tableContent"){if(t[l-1][1].type==="tableDelimiterMarker"){const c=a.length-1;a[c]=a[c]==="left"?"center":"right"}}else if(s[1].type==="tableDelimiterRow")break}else s[0]==="enter"&&s[1].type==="tableDelimiterRow"&&(i=!0);l+=1}return a}function kC(){return{flow:{null:{name:"table",tokenize:vC,resolveAll:CC}}}}function vC(t,l,i){const a=this;let s=0,c=0,u;return f;function f(P){let K=a.events.length-1;for(;K>-1;){const X=a.events[K][1].type;if(X==="lineEnding"||X==="linePrefix")K--;else break}const G=K>-1?a.events[K][1].type:null,q=G==="tableHead"||G==="tableRow"?D:m;return q===D&&a.parser.lazy[a.now().line]?i(P):q(P)}function m(P){return t.enter("tableHead"),t.enter("tableRow"),g(P)}function g(P){return P===124||(u=!0,c+=1),A(P)}function A(P){return P===null?i(P):fn(P)?c>1?(c=0,a.interrupt=!0,t.exit("tableRow"),t.enter("lineEnding"),t.consume(P),t.exit("lineEnding"),S):i(P):En(P)?_n(t,A,"whitespace")(P):(c+=1,u&&(u=!1,s+=1),P===124?(t.enter("tableCellDivider"),t.consume(P),t.exit("tableCellDivider"),u=!0,A):(t.enter("data"),h(P)))}function h(P){return P===null||P===124||On(P)?(t.exit("data"),A(P)):(t.consume(P),P===92?k:h)}function k(P){return P===92||P===124?(t.consume(P),h):h(P)}function S(P){return a.interrupt=!1,a.parser.lazy[a.now().line]?i(P):(t.enter("tableDelimiterRow"),u=!1,En(P)?_n(t,E,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(P):E(P))}function E(P){return P===45||P===58?O(P):P===124?(u=!0,t.enter("tableCellDivider"),t.consume(P),t.exit("tableCellDivider"),L):cn(P)}function L(P){return En(P)?_n(t,O,"whitespace")(P):O(P)}function O(P){return P===58?(c+=1,u=!0,t.enter("tableDelimiterMarker"),t.consume(P),t.exit("tableDelimiterMarker"),T):P===45?(c+=1,T(P)):P===null||fn(P)?ln(P):cn(P)}function T(P){return P===45?(t.enter("tableDelimiterFiller"),V(P)):cn(P)}function V(P){return P===45?(t.consume(P),V):P===58?(u=!0,t.exit("tableDelimiterFiller"),t.enter("tableDelimiterMarker"),t.consume(P),t.exit("tableDelimiterMarker"),z):(t.exit("tableDelimiterFiller"),z(P))}function z(P){return En(P)?_n(t,ln,"whitespace")(P):ln(P)}function ln(P){return P===124?E(P):P===null||fn(P)?!u||s!==c?cn(P):(t.exit("tableDelimiterRow"),t.exit("tableHead"),l(P)):cn(P)}function cn(P){return i(P)}function D(P){return t.enter("tableRow"),J(P)}function J(P){return P===124?(t.enter("tableCellDivider"),t.consume(P),t.exit("tableCellDivider"),J):P===null||fn(P)?(t.exit("tableRow"),l(P)):En(P)?_n(t,J,"whitespace")(P):(t.enter("data"),nn(P))}function nn(P){return P===null||P===124||On(P)?(t.exit("data"),J(P)):(t.consume(P),P===92?Q:nn)}function Q(P){return P===92||P===124?(t.consume(P),nn):nn(P)}}function CC(t,l){let i=-1,a=!0,s=0,c=[0,0,0,0],u=[0,0,0,0],f=!1,m=0,g,A,h;const k=new yC;for(;++i<t.length;){const S=t[i],E=S[1];S[0]==="enter"?E.type==="tableHead"?(f=!1,m!==0&&(Sd(k,l,m,g,A),A=void 0,m=0),g={type:"table",start:Object.assign({},E.start),end:Object.assign({},E.end)},k.add(i,0,[["enter",g,l]])):E.type==="tableRow"||E.type==="tableDelimiterRow"?(a=!0,h=void 0,c=[0,0,0,0],u=[0,i+1,0,0],f&&(f=!1,A={type:"tableBody",start:Object.assign({},E.start),end:Object.assign({},E.end)},k.add(i,0,[["enter",A,l]])),s=E.type==="tableDelimiterRow"?2:A?3:1):s&&(E.type==="data"||E.type==="tableDelimiterMarker"||E.type==="tableDelimiterFiller")?(a=!1,u[2]===0&&(c[1]!==0&&(u[0]=u[1],h=Ul(k,l,c,s,void 0,h),c=[0,0,0,0]),u[2]=i)):E.type==="tableCellDivider"&&(a?a=!1:(c[1]!==0&&(u[0]=u[1],h=Ul(k,l,c,s,void 0,h)),c=u,u=[c[1],i,0,0])):E.type==="tableHead"?(f=!0,m=i):E.type==="tableRow"||E.type==="tableDelimiterRow"?(m=i,c[1]!==0?(u[0]=u[1],h=Ul(k,l,c,s,i,h)):u[1]!==0&&(h=Ul(k,l,u,s,i,h)),s=0):s&&(E.type==="data"||E.type==="tableDelimiterMarker"||E.type==="tableDelimiterFiller")&&(u[3]=i)}for(m!==0&&Sd(k,l,m,g,A),k.consume(l.events),i=-1;++i<l.events.length;){const S=l.events[i];S[0]==="enter"&&S[1].type==="table"&&(S[1]._align=SC(l.events,i))}return t}function Ul(t,l,i,a,s,c){const u=a===1?"tableHeader":a===2?"tableDelimiter":"tableData",f="tableContent";i[0]!==0&&(c.end=Object.assign({},Ir(l.events,i[0])),t.add(i[0],0,[["exit",c,l]]));const m=Ir(l.events,i[1]);if(c={type:u,start:Object.assign({},m),end:Object.assign({},m)},t.add(i[1],0,[["enter",c,l]]),i[2]!==0){const g=Ir(l.events,i[2]),A=Ir(l.events,i[3]),h={type:f,start:Object.assign({},g),end:Object.assign({},A)};if(t.add(i[2],0,[["enter",h,l]]),a!==2){const k=l.events[i[2]],S=l.events[i[3]];if(k[1].end=Object.assign({},S[1].end),k[1].type="chunkText",k[1].contentType="text",i[3]>i[2]+1){const E=i[2]+1,L=i[3]-i[2]-1;t.add(E,L,[])}}t.add(i[3]+1,0,[["exit",h,l]])}return s!==void 0&&(c.end=Object.assign({},Ir(l.events,s)),t.add(s,0,[["exit",c,l]]),c=void 0),c}function Sd(t,l,i,a,s){const c=[],u=Ir(l.events,i);s&&(s.end=Object.assign({},u),c.push(["exit",s,l])),a.end=Object.assign({},u),c.push(["exit",a,l]),t.add(i+1,0,c)}function Ir(t,l){const i=t[l],a=i[0]==="enter"?"start":"end";return i[1][a]}const wC={name:"tasklistCheck",tokenize:IC};function xC(){return{text:{91:wC}}}function IC(t,l,i){const a=this;return s;function s(m){return a.previous!==null||!a._gfmTasklistFirstContentOfListItem?i(m):(t.enter("taskListCheck"),t.enter("taskListCheckMarker"),t.consume(m),t.exit("taskListCheckMarker"),c)}function c(m){return On(m)?(t.enter("taskListCheckValueUnchecked"),t.consume(m),t.exit("taskListCheckValueUnchecked"),u):m===88||m===120?(t.enter("taskListCheckValueChecked"),t.consume(m),t.exit("taskListCheckValueChecked"),u):i(m)}function u(m){return m===93?(t.enter("taskListCheckMarker"),t.consume(m),t.exit("taskListCheckMarker"),t.exit("taskListCheck"),f):i(m)}function f(m){return fn(m)?l(m):En(m)?t.check({tokenize:EC},l,i)(m):i(m)}}function EC(t,l,i){return _n(t,a,"whitespace");function a(s){return s===null?i(s):l(s)}}function _C(t){return Fd([Xv(),sC(),hC(t),kC(),xC()])}const PC={};function LC(t){const l=this,i=t||PC,a=l.data(),s=a.micromarkExtensions||(a.micromarkExtensions=[]),c=a.fromMarkdownExtensions||(a.fromMarkdownExtensions=[]),u=a.toMarkdownExtensions||(a.toMarkdownExtensions=[]);s.push(_C(i)),c.push(Qv()),u.push($v(i))}let ql=new Map;function MC(t){var c;const l=t.split(`
`),i={};let a=0;if(((c=l[0])==null?void 0:c.trim())==="---"){const u=l.indexOf("---",1);if(u>0){a=u+1;const f=l.slice(1,u);for(const m of f){const g=m.trim();if(!g)continue;const A=g.match(/^([\w_-]+):\s*(.+)$/);if(!A)continue;const h=A[1];let k=A[2].trim();k.startsWith("[")&&k.endsWith("]")&&(k=k.slice(1,-1).split(",").map(S=>S.trim().replace(/^['"]|['"]$/g,""))),i[h]=k}}}const s=l.slice(a).join(`
`);return{data:i,content:s}}function RC(t){ql=t}function Pf(t){if(ql.has(t))return ql.get(t);for(const[l,i]of ql)if(l.toLowerCase()===t.toLowerCase())return i;return null}function kd(t,l){const{data:i,content:a}=MC(t),s={type:i.type||"",tags:i.tags||[],created:i.created||"",updated:i.updated||"",title:i.title||Lf(a)};return{path:l,meta:s,content:a.trim(),raw:t}}function Lf(t){const l=t.match(/^#\s+(.+)$/m);return l?l[1].trim():""}function TC(t){var i;const l=new Map;for(const a of t){const s=a.content.match(/^#\s+(.+)$/m),c=s?s[1].trim():"";c&&l.set(c,a.path);const u=((i=a.path.split("/").pop())==null?void 0:i.replace(".md",""))||"";u&&!l.has(u)&&l.set(u,a.path),a.meta.title&&a.meta.title!==c&&l.set(a.meta.title,a.path)}return l}function bC(t){return t.replace(/\[\[([^\]|]+?)(?:\|(.+?))?\]\]/g,(l,i,a)=>{const s=i.trim(),c=Pf(s),u=(a==null?void 0:a.trim())||s;if(c){const f=c.replace(/.*\/wiki\//,"wiki/");return`[${u}](#wiki:${f})`}return`[${u} (待创建)](#wiki:${s})`})}function DC(t,l){if(!t||t.length<2)return[];const i=t.toLowerCase(),a=[];for(const s of l){if(s.path.includes("index.md")||s.path.includes("log.md"))continue;const c=s.meta.title||Lf(s.content),u=s.content.toLowerCase();let f=0;c.toLowerCase().includes(i)&&(f+=100),s.meta.tags.some(g=>g.toLowerCase().includes(i))&&(f+=50);const m=u.indexOf(i);if(m>=0&&(f+=10),f>0){let g="";if(m>=0){const A=Math.max(0,m-40),h=Math.min(s.content.length,m+i.length+60);g=(A>0?"...":"")+s.content.slice(A,h)+(h<s.content.length?"...":"")}else g=c;a.push({title:c,path:s.path,snippet:g,score:f})}}return a.sort((s,c)=>c.score-s.score).slice(0,10)}function OC({page:t,onNavigate:l,onTagSelect:i}){const a=kn.useRef(null),[s,c]=kn.useState(!1),[u,f]=kn.useState(""),[m,g]=kn.useState(!1),[A,h]=kn.useState("");kn.useEffect(()=>{const Q=a.current;if(!Q)return;const P=K=>{const G=K.target.closest('a[href^="#wiki:"]');if(G){K.preventDefault();const X=G.getAttribute("href").replace("#wiki:","");console.log("[ContentViewer] wikilink clicked, target:",X),l(X)}};return Q.addEventListener("click",P),()=>Q.removeEventListener("click",P)},[l]);const[k,S]=kn.useState(!1),[E,L]=kn.useState(""),O=kn.useRef(null),T=kn.useMemo(()=>{if(!t)return[];const Q=t.content,P=/^(#{2,4})\s+(.+)$/gm,K=[];let G;for(;(G=P.exec(Q))!==null;){const q=G[1].length,X=G[2].trim().replace(/`(.+?)`/g,"$1"),rn=X.toLowerCase().replace(/[^\w\u4e00-\u9fff\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"");K.push({level:q,text:X,id:rn})}return K},[t]),V=kn.useMemo(()=>({h2:({children:Q,...P})=>{const K=Ci(Q),G=as(K);return Er.createElement("h2",{id:G,...P},Q)},h3:({children:Q,...P})=>{const K=Ci(Q),G=as(K);return Er.createElement("h3",{id:G,...P},Q)},h4:({children:Q,...P})=>{const K=Ci(Q),G=as(K);return Er.createElement("h4",{id:G,...P},Q)}}),[]),z=kn.useMemo(()=>t?bC(t.content):"",[t]);kn.useEffect(()=>{const Q=a.current;Q&&(Q.scrollTop=0),L("")},[t==null?void 0:t.path]),kn.useEffect(()=>{var K;const Q=a.current;if(!Q||T.length===0)return;(K=O.current)==null||K.disconnect();const P=new IntersectionObserver(G=>{let q="",X=1/0;for(const rn of G)if(rn.isIntersecting){const vn=rn.boundingClientRect.top;vn>=0&&vn<X&&(X=vn,q=rn.target.id)}q&&L(q)},{root:Q,rootMargin:"-80px 0px -70% 0px",threshold:0});for(const G of T){const q=document.getElementById(G.id);q&&P.observe(q)}return O.current=P,()=>P.disconnect()},[T,t==null?void 0:t.path]);const ln=Q=>{const P=document.getElementById(Q);P&&(P.scrollIntoView({behavior:"smooth",block:"start"}),L(Q))},cn=()=>{f((t==null?void 0:t.raw)||""),c(!0),h("")},D=()=>{c(!1),f(""),h("")},J=async()=>{if(t){g(!0),h("");try{const Q=t.path.replace(/.*\/wiki\//,"wiki/"),P=await fetch("/api/save-page",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:Q,content:u})});if(!P.ok){const K=await P.json();throw new Error(K.error||"save failed")}h("✅ 保存成功！刷新页面查看变更"),g(!1),setTimeout(()=>window.location.reload(),1500)}catch(Q){h("❌ 保存失败: "+Q.message),g(!1)}}};if(!t)return F.jsx("div",{className:"content-empty",children:F.jsxs("div",{style:{textAlign:"center"},children:[F.jsx("svg",{width:"64",height:"64",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})}),F.jsx("p",{style:{fontSize:13},children:"从左侧选择页面开始阅读"})]})});const{meta:nn}=t;return s?F.jsx("div",{ref:a,className:"content",children:F.jsxs("div",{className:"content-inner",children:[F.jsxs("div",{className:"edit-bar",children:[F.jsxs("span",{className:"edit-bar-title",children:["编辑: ",t.path.replace(/.*\/wiki\//,"")]}),F.jsxs("div",{className:"edit-actions",children:[A&&F.jsx("span",{className:"edit-msg",children:A}),F.jsx("button",{className:"edit-btn edit-btn-secondary",onClick:D,disabled:m,children:"取消"}),F.jsx("button",{className:"edit-btn edit-btn-primary",onClick:J,disabled:m,children:m?"保存中...":"💾 保存"})]})]}),F.jsx("textarea",{className:"edit-textarea",value:u,onChange:Q=>f(Q.target.value),spellCheck:!1})]})}):F.jsxs("div",{ref:a,className:"content",children:[T.length>2&&F.jsxs("div",{className:"toc-float",children:[F.jsxs("button",{className:"toc-toggle",onClick:()=>S(!k),title:"目录",children:[F.jsx("svg",{width:"16",height:"16",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})}),F.jsx("span",{className:"toc-toggle-count",children:T.length})]}),!k&&F.jsxs("div",{className:"toc-float-body",children:[F.jsxs("div",{className:"toc-float-header",children:["目录",F.jsx("button",{className:"toc-close",onClick:()=>S(!0),children:"✕"})]}),F.jsx("nav",{className:"toc-float-nav",children:T.map((Q,P)=>F.jsx("a",{href:"#",className:`toc-link toc-level-${Q.level}${E===Q.id?" toc-active":""}`,onClick:K=>{K.preventDefault(),ln(Q.id)},children:Q.text},P))})]})]}),F.jsxs("div",{className:"content-inner",children:[F.jsxs("div",{className:"meta-row",children:[nn.type&&F.jsx("span",{className:`meta-type ${nn.type}`,children:nn.type}),nn.created&&F.jsxs("span",{className:"meta-date",children:["创建: ",nn.created]}),nn.updated&&nn.updated!==nn.created&&F.jsxs("span",{className:"meta-date",children:["更新: ",nn.updated]})]}),nn.tags.length>0&&F.jsx("div",{className:"tags-row",children:nn.tags.map(Q=>F.jsxs("button",{className:"tag tag-clickable",onClick:()=>i(Q),title:"按此标签筛选",children:["#",Q]},Q))}),F.jsx("div",{className:"md-content",children:F.jsx(gk,{remarkPlugins:[LC],components:V,children:z})}),F.jsx("button",{className:"edit-page-btn",onClick:cn,title:"编辑此页面",children:"✏️"})]})]})}function Ci(t){var l;return typeof t=="string"?t:Array.isArray(t)?t.map(Ci).join(""):(l=t==null?void 0:t.props)!=null&&l.children?Ci(t.props.children):""}function as(t){return t.toLowerCase().replace(/[^\w\u4e00-\u9fff\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"")}function NC({open:t,onClose:l,onSearch:i,onSelect:a}){const[s,c]=kn.useState(""),[u,f]=kn.useState([]),[m,g]=kn.useState(0),A=kn.useRef(null);kn.useEffect(()=>{t&&(c(""),f([]),g(0),setTimeout(()=>{var k;return(k=A.current)==null?void 0:k.focus()},100))},[t]),kn.useEffect(()=>{if(!t)return;const k=S=>{S.key==="Escape"&&l(),S.key==="ArrowDown"&&(S.preventDefault(),g(E=>Math.min(E+1,u.length-1))),S.key==="ArrowUp"&&(S.preventDefault(),g(E=>Math.max(E-1,0))),S.key==="Enter"&&u[m]&&(a(u[m].path),l())};return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[t,u,m,l,a]);const h=k=>{c(k),g(0),f(k.length>=2?i(k):[])};return t?F.jsx("div",{className:"modal-overlay",onClick:k=>{k.target===k.currentTarget&&l()},children:F.jsxs("div",{className:"modal",children:[F.jsxs("div",{className:"modal-input",children:[F.jsx("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",style:{color:"var(--text-muted)",flexShrink:0},children:F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),F.jsx("input",{ref:A,type:"text",value:s,onChange:k=>h(k.target.value),placeholder:"搜索页面、概念、实体..."}),F.jsx("kbd",{style:{fontSize:10,padding:"2px 6px",borderRadius:4,background:"var(--surface)",color:"var(--text-muted)"},children:"ESC"})]}),F.jsxs("div",{className:"modal-results",children:[u.length===0&&s.length>=2&&F.jsx("div",{className:"modal-empty",children:"未找到匹配结果"}),u.length===0&&s.length<2&&F.jsx("div",{className:"modal-empty",children:"输入至少 2 个字符搜索"}),u.map((k,S)=>F.jsxs("button",{onClick:()=>{a(k.path),l()},className:"modal-result"+(S===m?" sel":""),children:[F.jsx("div",{className:"rtitle",children:k.title}),F.jsx("div",{className:"rsnippet",children:k.snippet})]},k.path))]})]})}):null}const vd=Object.assign({"../../wiki/concepts/agent-memory-system.md":Tg,"../../wiki/concepts/agent-tool-selection.md":bg,"../../wiki/concepts/ai-agent.md":Dg,"../../wiki/concepts/ai-gateway.md":Og,"../../wiki/concepts/ai-programming.md":Ng,"../../wiki/concepts/context-engineering.md":Fg,"../../wiki/concepts/dev-flow-unified-paradigm.md":Bg,"../../wiki/concepts/fde.md":zg,"../../wiki/concepts/loop-engineering.md":Gg,"../../wiki/concepts/mcp-model-context-protocol.md":Hg,"../../wiki/concepts/model-finetuning.md":jg,"../../wiki/concepts/model-fusion.md":Ug,"../../wiki/concepts/moe-mixture-of-experts.md":Vg,"../../wiki/concepts/okf-open-knowledge-format.md":qg,"../../wiki/concepts/ontology.md":Wg,"../../wiki/concepts/prompt-caching.md":Jg,"../../wiki/concepts/rag-retrieval-augmented-generation.md":Qg,"../../wiki/concepts/red-green-regression-testing.md":$g,"../../wiki/concepts/self-improving-agent.md":Kg,"../../wiki/concepts/spec-driven-development.md":Yg,"../../wiki/concepts/starrocks-materialized-view.md":Xg,"../../wiki/concepts/test-driven-development.md":Zg,"../../wiki/entities/apache-burr.md":nh,"../../wiki/entities/autolink.md":eh,"../../wiki/entities/bmad.md":th,"../../wiki/entities/cc-connect.md":rh,"../../wiki/entities/cc-switch.md":ih,"../../wiki/entities/claude-code.md":lh,"../../wiki/entities/codex-cli.md":oh,"../../wiki/entities/comet.md":ah,"../../wiki/entities/ecc.md":sh,"../../wiki/entities/firecrawl.md":uh,"../../wiki/entities/flashrt.md":ch,"../../wiki/entities/fuseai.md":ph,"../../wiki/entities/gsd.md":dh,"../../wiki/entities/gstack.md":fh,"../../wiki/entities/hermes-agent.md":mh,"../../wiki/entities/html-video.md":gh,"../../wiki/entities/huashu-design.md":hh,"../../wiki/entities/infifusion.md":yh,"../../wiki/entities/khazix-skills.md":Ah,"../../wiki/entities/lightrag.md":Sh,"../../wiki/entities/mempalace.md":kh,"../../wiki/entities/mergekit.md":vh,"../../wiki/entities/mux0.md":Ch,"../../wiki/entities/openclaw.md":wh,"../../wiki/entities/openspec.md":xh,"../../wiki/entities/opensquilla.md":Ih,"../../wiki/entities/pageagent.md":Eh,"../../wiki/entities/pythia.md":_h,"../../wiki/entities/rag-anything.md":Ph,"../../wiki/entities/seeder.md":Lh,"../../wiki/entities/snail-ai.md":Mh,"../../wiki/entities/spec-kit.md":Rh,"../../wiki/entities/superpowers.md":Th,"../../wiki/entities/understand-anything.md":bh,"../../wiki/entities/unsloth.md":Dh,"../../wiki/entities/uzi-skill.md":Oh,"../../wiki/index.md":Nh,"../../wiki/log.md":Fh,"../../wiki/synthesis/2026-h1-wanxiang-review.md":Bh,"../../wiki/synthesis/agent-framework-comparison.md":zh,"../../wiki/synthesis/ai-dev-trifecta.md":Gh,"../../wiki/synthesis/bmad-vs-openspec.md":Hh,"../../wiki/synthesis/model-fusion-deep-report.md":jh,"../../wiki/tags-index.md":Uh,"../../wiki/topics/agentic-rag.md":Vh,"../../wiki/topics/ai-agent-landscape-2026.md":qh,"../../wiki/topics/ai-native-dev-system.md":Wh,"../../wiki/topics/firecrawl-web-scraping.md":Jh,"../../wiki/topics/h1-2026-performance-review.md":Qh,"../../wiki/topics/karpathy-ai-coding-methodology.md":$h,"../../wiki/topics/llm-wiki-methodology.md":Kh,"../../wiki/topics/opensquilla-ai-self-verification.md":Yh,"../../wiki/topics/rag-evaluation.md":Xh,"../../wiki/topics/snail-ai-agent-platform.md":Zh,"../../wiki/topics/spring-ai-mcp-architecture-research.md":ny,"../../wiki/topics/starrocks-catalog-acceleration-strategy.md":ey,"../../wiki/topics/starrocks-cross-data-source-query.md":ty,"../../wiki/topics/unsloth-efficient-llm-finetuning.md":ry,"../../wiki/topics/wanxiang-ai-analysis.md":iy}),FC={entities:"实体",concepts:"概念",papers:"论文",topics:"主题",synthesis:"综述"};function BC(t,l){var A,h;const i=t.split(`
`),a={};let s=0;if(((A=i[0])==null?void 0:A.trim())==="---"){const k=i.indexOf("---",1);if(k>0){const S=i.slice(1,k).join(`
`);s=k+1,S.split(`
`).forEach(E=>{const L=E.match(/^(\w+):\s*(.+)$/);L&&(a[L[1]]=L[2].trim())})}}const u=i.slice(s).join(`
`).match(/^#\s+(.+)/m),f=u?u[1].trim():a.title||((h=l.split("/").pop())==null?void 0:h.replace(".md",""))||"Untitled";l.split("/").slice(-2,-1)[0];let m=[];a.tags&&(Array.isArray(a.tags)?m=a.tags:typeof a.tags=="string"&&(m=a.tags.split(",").map(k=>k.trim())));const g=l.replace(/.*\/wiki\//,"wiki/");return{title:f,path:g,summary:a.summary||"",tags:m}}function Cd(){return window.location.hash.slice(1)||null}function zC(){const[t,l]=kn.useState(()=>Cd()),[i,a]=kn.useState(new Set(["实体","概念","论文","综述"])),[s,c]=kn.useState(!1),[u,f]=kn.useState(!1),[m,g]=kn.useState(null);kn.useEffect(()=>{t?window.location.hash="#"+t:history.replaceState(null,"",window.location.pathname+window.location.search)},[t]),kn.useEffect(()=>{const J=()=>l(Cd());return window.addEventListener("hashchange",J),()=>window.removeEventListener("hashchange",J)},[]);const{allPages:A,categories:h,allTags:k}=kn.useMemo(()=>{const J=[],nn=new Map,Q=new Map;for(const[G,q]of Object.entries(vd)){if(G.includes("/index.md")||G.includes("/log.md"))continue;try{const yn=G.replace(/.*\/wiki\//,"wiki/"),Y=kd(q,yn);J.push(Y)}catch(yn){console.error("[App] Failed to parse:",G,yn)}const X=BC(q,G),rn=G.split("/").slice(-2,-1)[0]||"",vn=FC[rn]||rn;for(const yn of X.tags)Q.set(yn,(Q.get(yn)||0)+1);nn.has(vn)||nn.set(vn,[]),nn.get(vn).push(X)}const P=[];for(const G of["实体","概念","论文","主题","综述"]){const q=nn.get(G);q&&q.length>0&&(P.push({name:G,pages:q,collapsed:i.has(G)}),nn.delete(G))}for(const[G,q]of nn)P.push({name:G,pages:q,collapsed:i.has(G)});const K=Array.from(Q.entries()).map(([G,q])=>({name:G,count:q})).sort((G,q)=>q.count-G.count||G.name.localeCompare(q.name));return{allPages:J,categories:P,allTags:K}},[i]);kn.useEffect(()=>{RC(TC(A))},[A]);const S=kn.useMemo(()=>{if(!t)return null;const J="../../"+t,nn=vd[J];return nn?kd(nn,J):null},[t]),E=kn.useCallback(J=>{l(J.path),g(null),f(!1)},[]),L=kn.useCallback(J=>{const nn=Pf(J);l(nn||J)},[]),O=kn.useCallback(J=>{a(nn=>{const Q=new Set(nn);return Q.has(J)?Q.delete(J):Q.add(J),Q})},[]),T=kn.useCallback(J=>DC(J,A),[A]),V=kn.useCallback(J=>{l(J),g(null)},[]),z=kn.useCallback(J=>{g(m===J?null:J)},[m]);kn.useEffect(()=>{const J=nn=>{nn.key==="k"&&(nn.metaKey||nn.ctrlKey)&&(nn.preventDefault(),c(Q=>!Q))};return window.addEventListener("keydown",J),()=>window.removeEventListener("keydown",J)},[]);const ln=kn.useMemo(()=>m?h.map(J=>({...J,pages:J.pages.filter(nn=>nn.tags.includes(m))})).filter(J=>J.pages.length>0):h,[h,m]),cn=A.length,D=m?ln.reduce((J,nn)=>J+nn.pages.length,0):cn;return F.jsxs("div",{className:"app",children:[F.jsxs("div",{className:"mobile-header",children:[F.jsx("button",{onClick:()=>f(!u),style:{padding:6,borderRadius:8},children:F.jsx("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})}),F.jsx("h1",{style:{fontSize:14,fontWeight:600,color:"var(--accent)"},children:"LLM Wiki"}),F.jsx("button",{onClick:()=>c(!0),style:{marginLeft:"auto",padding:6,borderRadius:8},children:F.jsx("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})]}),F.jsxs("div",{className:"main-area",children:[F.jsx("div",{className:"sidebar-desktop",style:{height:"100%"},children:F.jsx(Rp,{categories:ln,activePath:t,onSelect:E,onToggleCategory:O,onSearch:()=>c(!0),pageCount:D,allTags:k,activeTag:m,onTagSelect:z})}),u&&F.jsxs("div",{className:"mobile-overlay",children:[F.jsx("div",{className:"mobile-overlay-bg",onClick:()=>f(!1)}),F.jsx("div",{className:"mobile-overlay-sidebar",children:F.jsx(Rp,{categories:ln,activePath:t,onSelect:E,onToggleCategory:O,onSearch:()=>{f(!1),c(!0)},pageCount:D,allTags:k,activeTag:m,onTagSelect:z})})]}),F.jsx(OC,{page:S,onNavigate:L,onTagSelect:z})]}),F.jsxs("div",{className:"status-bar",children:[F.jsxs("span",{children:[D," 个页面"]}),m&&F.jsxs(F.Fragment,{children:[F.jsx("span",{children:"·"}),F.jsxs("span",{style:{color:"var(--accent)"},children:["标签: #",m]})]}),S&&!m&&F.jsxs(F.Fragment,{children:[F.jsx("span",{style:{color:"var(--border)"},children:"|"}),F.jsx("span",{children:S.path})]})]}),F.jsx(NC,{open:s,onClose:()=>c(!1),onSearch:T,onSelect:V})]})}Rg.createRoot(document.getElementById("root")).render(Er.createElement(Er.StrictMode,null,Er.createElement(zC)));
