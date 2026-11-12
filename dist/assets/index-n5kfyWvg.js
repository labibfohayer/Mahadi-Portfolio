var hx=Object.defineProperty;var dx=(o,e,t)=>e in o?hx(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var Be=(o,e,t)=>dx(o,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function Q1(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var qf={exports:{}},Oa={},$f={exports:{}},ht={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e0;function px(){if(e0)return ht;e0=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),g=Symbol.iterator;function _(F){return F===null||typeof F!="object"?null:(F=g&&F[g]||F["@@iterator"],typeof F=="function"?F:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function v(F,V,q){this.props=F,this.context=V,this.refs=M,this.updater=q||S}v.prototype.isReactComponent={},v.prototype.setState=function(F,V){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,V,"setState")},v.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function x(){}x.prototype=v.prototype;function A(F,V,q){this.props=F,this.context=V,this.refs=M,this.updater=q||S}var T=A.prototype=new x;T.constructor=A,E(T,v.prototype),T.isPureReactComponent=!0;var L=Array.isArray,O=Object.prototype.hasOwnProperty,I={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function Y(F,V,q){var J,he={},Se=null,Ee=null;if(V!=null)for(J in V.ref!==void 0&&(Ee=V.ref),V.key!==void 0&&(Se=""+V.key),V)O.call(V,J)&&!N.hasOwnProperty(J)&&(he[J]=V[J]);var Re=arguments.length-2;if(Re===1)he.children=q;else if(1<Re){for(var De=Array(Re),ke=0;ke<Re;ke++)De[ke]=arguments[ke+2];he.children=De}if(F&&F.defaultProps)for(J in Re=F.defaultProps,Re)he[J]===void 0&&(he[J]=Re[J]);return{$$typeof:o,type:F,key:Se,ref:Ee,props:he,_owner:I.current}}function C(F,V){return{$$typeof:o,type:F.type,key:V,ref:F.ref,props:F.props,_owner:F._owner}}function P(F){return typeof F=="object"&&F!==null&&F.$$typeof===o}function ne(F){var V={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(q){return V[q]})}var le=/\/+/g;function fe(F,V){return typeof F=="object"&&F!==null&&F.key!=null?ne(""+F.key):V.toString(36)}function B(F,V,q,J,he){var Se=typeof F;(Se==="undefined"||Se==="boolean")&&(F=null);var Ee=!1;if(F===null)Ee=!0;else switch(Se){case"string":case"number":Ee=!0;break;case"object":switch(F.$$typeof){case o:case e:Ee=!0}}if(Ee)return Ee=F,he=he(Ee),F=J===""?"."+fe(Ee,0):J,L(he)?(q="",F!=null&&(q=F.replace(le,"$&/")+"/"),B(he,V,q,"",function(ke){return ke})):he!=null&&(P(he)&&(he=C(he,q+(!he.key||Ee&&Ee.key===he.key?"":(""+he.key).replace(le,"$&/")+"/")+F)),V.push(he)),1;if(Ee=0,J=J===""?".":J+":",L(F))for(var Re=0;Re<F.length;Re++){Se=F[Re];var De=J+fe(Se,Re);Ee+=B(Se,V,q,De,he)}else if(De=_(F),typeof De=="function")for(F=De.call(F),Re=0;!(Se=F.next()).done;)Se=Se.value,De=J+fe(Se,Re++),Ee+=B(Se,V,q,De,he);else if(Se==="object")throw V=String(F),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.");return Ee}function $(F,V,q){if(F==null)return F;var J=[],he=0;return B(F,J,"","",function(Se){return V.call(q,Se,he++)}),J}function te(F){if(F._status===-1){var V=F._result;V=V(),V.then(function(q){(F._status===0||F._status===-1)&&(F._status=1,F._result=q)},function(q){(F._status===0||F._status===-1)&&(F._status=2,F._result=q)}),F._status===-1&&(F._status=0,F._result=V)}if(F._status===1)return F._result.default;throw F._result}var K={current:null},H={transition:null},j={ReactCurrentDispatcher:K,ReactCurrentBatchConfig:H,ReactCurrentOwner:I};function X(){throw Error("act(...) is not supported in production builds of React.")}return ht.Children={map:$,forEach:function(F,V,q){$(F,function(){V.apply(this,arguments)},q)},count:function(F){var V=0;return $(F,function(){V++}),V},toArray:function(F){return $(F,function(V){return V})||[]},only:function(F){if(!P(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},ht.Component=v,ht.Fragment=t,ht.Profiler=s,ht.PureComponent=A,ht.StrictMode=i,ht.Suspense=h,ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j,ht.act=X,ht.cloneElement=function(F,V,q){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var J=E({},F.props),he=F.key,Se=F.ref,Ee=F._owner;if(V!=null){if(V.ref!==void 0&&(Se=V.ref,Ee=I.current),V.key!==void 0&&(he=""+V.key),F.type&&F.type.defaultProps)var Re=F.type.defaultProps;for(De in V)O.call(V,De)&&!N.hasOwnProperty(De)&&(J[De]=V[De]===void 0&&Re!==void 0?Re[De]:V[De])}var De=arguments.length-2;if(De===1)J.children=q;else if(1<De){Re=Array(De);for(var ke=0;ke<De;ke++)Re[ke]=arguments[ke+2];J.children=Re}return{$$typeof:o,type:F.type,key:he,ref:Se,props:J,_owner:Ee}},ht.createContext=function(F){return F={$$typeof:c,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:a,_context:F},F.Consumer=F},ht.createElement=Y,ht.createFactory=function(F){var V=Y.bind(null,F);return V.type=F,V},ht.createRef=function(){return{current:null}},ht.forwardRef=function(F){return{$$typeof:u,render:F}},ht.isValidElement=P,ht.lazy=function(F){return{$$typeof:p,_payload:{_status:-1,_result:F},_init:te}},ht.memo=function(F,V){return{$$typeof:d,type:F,compare:V===void 0?null:V}},ht.startTransition=function(F){var V=H.transition;H.transition={};try{F()}finally{H.transition=V}},ht.unstable_act=X,ht.useCallback=function(F,V){return K.current.useCallback(F,V)},ht.useContext=function(F){return K.current.useContext(F)},ht.useDebugValue=function(){},ht.useDeferredValue=function(F){return K.current.useDeferredValue(F)},ht.useEffect=function(F,V){return K.current.useEffect(F,V)},ht.useId=function(){return K.current.useId()},ht.useImperativeHandle=function(F,V,q){return K.current.useImperativeHandle(F,V,q)},ht.useInsertionEffect=function(F,V){return K.current.useInsertionEffect(F,V)},ht.useLayoutEffect=function(F,V){return K.current.useLayoutEffect(F,V)},ht.useMemo=function(F,V){return K.current.useMemo(F,V)},ht.useReducer=function(F,V,q){return K.current.useReducer(F,V,q)},ht.useRef=function(F){return K.current.useRef(F)},ht.useState=function(F){return K.current.useState(F)},ht.useSyncExternalStore=function(F,V,q){return K.current.useSyncExternalStore(F,V,q)},ht.useTransition=function(){return K.current.useTransition()},ht.version="18.3.1",ht}var t0;function sd(){return t0||(t0=1,$f.exports=px()),$f.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n0;function mx(){if(n0)return Oa;n0=1;var o=sd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,h,d){var p,g={},_=null,S=null;d!==void 0&&(_=""+d),h.key!==void 0&&(_=""+h.key),h.ref!==void 0&&(S=h.ref);for(p in h)i.call(h,p)&&!a.hasOwnProperty(p)&&(g[p]=h[p]);if(u&&u.defaultProps)for(p in h=u.defaultProps,h)g[p]===void 0&&(g[p]=h[p]);return{$$typeof:e,type:u,key:_,ref:S,props:g,_owner:s.current}}return Oa.Fragment=t,Oa.jsx=c,Oa.jsxs=c,Oa}var i0;function gx(){return i0||(i0=1,qf.exports=mx()),qf.exports}var R=gx(),jn=sd();const _x=Q1(jn);var xu={},Zf={exports:{}},Gn={},Kf={exports:{}},Qf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r0;function vx(){return r0||(r0=1,(function(o){function e(H,j){var X=H.length;H.push(j);e:for(;0<X;){var F=X-1>>>1,V=H[F];if(0<s(V,j))H[F]=j,H[X]=V,X=F;else break e}}function t(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var j=H[0],X=H.pop();if(X!==j){H[0]=X;e:for(var F=0,V=H.length,q=V>>>1;F<q;){var J=2*(F+1)-1,he=H[J],Se=J+1,Ee=H[Se];if(0>s(he,X))Se<V&&0>s(Ee,he)?(H[F]=Ee,H[Se]=X,F=Se):(H[F]=he,H[J]=X,F=J);else if(Se<V&&0>s(Ee,X))H[F]=Ee,H[Se]=X,F=Se;else break e}}return j}function s(H,j){var X=H.sortIndex-j.sortIndex;return X!==0?X:H.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;o.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();o.unstable_now=function(){return c.now()-u}}var h=[],d=[],p=1,g=null,_=3,S=!1,E=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(H){for(var j=t(d);j!==null;){if(j.callback===null)i(d);else if(j.startTime<=H)i(d),j.sortIndex=j.expirationTime,e(h,j);else break;j=t(d)}}function L(H){if(M=!1,T(H),!E)if(t(h)!==null)E=!0,te(O);else{var j=t(d);j!==null&&K(L,j.startTime-H)}}function O(H,j){E=!1,M&&(M=!1,x(Y),Y=-1),S=!0;var X=_;try{for(T(j),g=t(h);g!==null&&(!(g.expirationTime>j)||H&&!ne());){var F=g.callback;if(typeof F=="function"){g.callback=null,_=g.priorityLevel;var V=F(g.expirationTime<=j);j=o.unstable_now(),typeof V=="function"?g.callback=V:g===t(h)&&i(h),T(j)}else i(h);g=t(h)}if(g!==null)var q=!0;else{var J=t(d);J!==null&&K(L,J.startTime-j),q=!1}return q}finally{g=null,_=X,S=!1}}var I=!1,N=null,Y=-1,C=5,P=-1;function ne(){return!(o.unstable_now()-P<C)}function le(){if(N!==null){var H=o.unstable_now();P=H;var j=!0;try{j=N(!0,H)}finally{j?fe():(I=!1,N=null)}}else I=!1}var fe;if(typeof A=="function")fe=function(){A(le)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,$=B.port2;B.port1.onmessage=le,fe=function(){$.postMessage(null)}}else fe=function(){v(le,0)};function te(H){N=H,I||(I=!0,fe())}function K(H,j){Y=v(function(){H(o.unstable_now())},j)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(H){H.callback=null},o.unstable_continueExecution=function(){E||S||(E=!0,te(O))},o.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<H?Math.floor(1e3/H):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_getFirstCallbackNode=function(){return t(h)},o.unstable_next=function(H){switch(_){case 1:case 2:case 3:var j=3;break;default:j=_}var X=_;_=j;try{return H()}finally{_=X}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(H,j){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var X=_;_=H;try{return j()}finally{_=X}},o.unstable_scheduleCallback=function(H,j,X){var F=o.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?F+X:F):X=F,H){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=X+V,H={id:p++,callback:j,priorityLevel:H,startTime:X,expirationTime:V,sortIndex:-1},X>F?(H.sortIndex=X,e(d,H),t(h)===null&&H===t(d)&&(M?(x(Y),Y=-1):M=!0,K(L,X-F))):(H.sortIndex=V,e(h,H),E||S||(E=!0,te(O))),H},o.unstable_shouldYield=ne,o.unstable_wrapCallback=function(H){var j=_;return function(){var X=_;_=j;try{return H.apply(this,arguments)}finally{_=X}}}})(Qf)),Qf}var s0;function xx(){return s0||(s0=1,Kf.exports=vx()),Kf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o0;function yx(){if(o0)return Gn;o0=1;var o=sd(),e=xx();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function a(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},g={};function _(n){return h.call(g,n)?!0:h.call(p,n)?!1:d.test(n)?g[n]=!0:(p[n]=!0,!1)}function S(n,r,l,f){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,r,l,f){if(r===null||typeof r>"u"||S(n,r,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function M(n,r,l,f,m,y,w){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=f,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=y,this.removeEmptyString=w}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){v[n]=new M(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];v[r]=new M(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){v[n]=new M(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){v[n]=new M(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){v[n]=new M(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){v[n]=new M(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){v[n]=new M(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){v[n]=new M(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){v[n]=new M(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function A(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(x,A);v[r]=new M(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(x,A);v[r]=new M(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(x,A);v[r]=new M(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){v[n]=new M(n,1,!1,n.toLowerCase(),null,!1,!1)}),v.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){v[n]=new M(n,1,!1,n.toLowerCase(),null,!0,!0)});function T(n,r,l,f){var m=v.hasOwnProperty(r)?v[r]:null;(m!==null?m.type!==0:f||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(E(r,l,m,f)&&(l=null),f||m===null?_(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):m.mustUseProperty?n[m.propertyName]=l===null?m.type===3?!1:"":l:(r=m.attributeName,f=m.attributeNamespace,l===null?n.removeAttribute(r):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,f?n.setAttributeNS(f,r,l):n.setAttribute(r,l))))}var L=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,O=Symbol.for("react.element"),I=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),ne=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),fe=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),H=Symbol.iterator;function j(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var X=Object.assign,F;function V(n){if(F===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);F=r&&r[1]||""}return`
`+F+n}var q=!1;function J(n,r){if(!n||q)return"";q=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(re){var f=re}Reflect.construct(n,[],r)}else{try{r.call()}catch(re){f=re}n.call(r.prototype)}else{try{throw Error()}catch(re){f=re}n()}}catch(re){if(re&&f&&typeof re.stack=="string"){for(var m=re.stack.split(`
`),y=f.stack.split(`
`),w=m.length-1,k=y.length-1;1<=w&&0<=k&&m[w]!==y[k];)k--;for(;1<=w&&0<=k;w--,k--)if(m[w]!==y[k]){if(w!==1||k!==1)do if(w--,k--,0>k||m[w]!==y[k]){var z=`
`+m[w].replace(" at new "," at ");return n.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",n.displayName)),z}while(1<=w&&0<=k);break}}}finally{q=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?V(n):""}function he(n){switch(n.tag){case 5:return V(n.type);case 16:return V("Lazy");case 13:return V("Suspense");case 19:return V("SuspenseList");case 0:case 2:case 15:return n=J(n.type,!1),n;case 11:return n=J(n.type.render,!1),n;case 1:return n=J(n.type,!0),n;default:return""}}function Se(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case I:return"Portal";case C:return"Profiler";case Y:return"StrictMode";case fe:return"Suspense";case B:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case ne:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case le:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case $:return r=n.displayName||null,r!==null?r:Se(n.type)||"Memo";case te:r=n._payload,n=n._init;try{return Se(n(r))}catch{}}return null}function Ee(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(r);case 8:return r===Y?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Re(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function De(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function ke(n){var r=De(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),f=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,y=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return m.call(this)},set:function(w){f=""+w,y.call(this,w)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(w){f=""+w},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function ft(n){n._valueTracker||(n._valueTracker=ke(n))}function se(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),f="";return n&&(f=De(n)?n.checked?"true":"false":n.value),n=f,n!==l?(r.setValue(n),!0):!1}function Kt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function je(n,r){var l=r.checked;return X({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function tt(n,r){var l=r.defaultValue==null?"":r.defaultValue,f=r.checked!=null?r.checked:r.defaultChecked;l=Re(r.value!=null?r.value:l),n._wrapperState={initialChecked:f,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function He(n,r){r=r.checked,r!=null&&T(n,"checked",r,!1)}function At(n,r){He(n,r);var l=Re(r.value),f=r.type;if(l!=null)f==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(f==="submit"||f==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?U(n,r.type,l):r.hasOwnProperty("defaultValue")&&U(n,r.type,Re(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function rt(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var f=r.type;if(!(f!=="submit"&&f!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function U(n,r,l){(r!=="number"||Kt(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var b=Array.isArray;function ie(n,r,l,f){if(n=n.options,r){r={};for(var m=0;m<l.length;m++)r["$"+l[m]]=!0;for(l=0;l<n.length;l++)m=r.hasOwnProperty("$"+n[l].value),n[l].selected!==m&&(n[l].selected=m),m&&f&&(n[l].defaultSelected=!0)}else{for(l=""+Re(l),r=null,m=0;m<n.length;m++){if(n[m].value===l){n[m].selected=!0,f&&(n[m].defaultSelected=!0);return}r!==null||n[m].disabled||(r=n[m])}r!==null&&(r.selected=!0)}}function ve(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return X({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ge(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(b(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:Re(l)}}function xe(n,r){var l=Re(r.value),f=Re(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),f!=null&&(n.defaultValue=""+f)}function Ve(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function Ae(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ue(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?Ae(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Xe,st=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,f,m){MSApp.execUnsafeLocalFunction(function(){return n(r,l,f,m)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Xe=Xe||document.createElement("div"),Xe.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Xe.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function me(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var mt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ct=["Webkit","ms","Moz","O"];Object.keys(mt).forEach(function(n){ct.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),mt[r]=mt[n]})});function Je(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||mt.hasOwnProperty(n)&&mt[n]?(""+r).trim():r+"px"}function We(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var f=l.indexOf("--")===0,m=Je(l,r[l],f);l==="float"&&(l="cssFloat"),f?n.setProperty(l,m):n[l]=m}}var Oe=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nt(n,r){if(r){if(Oe[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function _t(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lt=null;function ot(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Me=null,G=null,we=null;function Ce(n){if(n=Sa(n)){if(typeof Me!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Ul(r),Me(n.stateNode,n.type,r))}}function Ke(n){G?we?we.push(n):we=[n]:G=n}function Ye(){if(G){var n=G,r=we;if(we=G=null,Ce(n),r)for(n=0;n<r.length;n++)Ce(r[n])}}function St(n,r){return n(r)}function Mt(){}var Wt=!1;function ln(n,r,l){if(Wt)return n(r,l);Wt=!0;try{return St(n,r,l)}finally{Wt=!1,(G!==null||we!==null)&&(Mt(),Ye())}}function xt(n,r){var l=n.stateNode;if(l===null)return null;var f=Ul(l);if(f===null)return null;l=f[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(n=n.type,f=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!f;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var tn=!1;if(u)try{var xn={};Object.defineProperty(xn,"passive",{get:function(){tn=!0}}),window.addEventListener("test",xn,xn),window.removeEventListener("test",xn,xn)}catch{tn=!1}function dl(n,r,l,f,m,y,w,k,z){var re=Array.prototype.slice.call(arguments,3);try{r.apply(l,re)}catch(pe){this.onError(pe)}}var cs=!1,Ki=null,fs=!1,Sr=null,pl={onError:function(n){cs=!0,Ki=n}};function ml(n,r,l,f,m,y,w,k,z){cs=!1,Ki=null,dl.apply(pl,arguments)}function mc(n,r,l,f,m,y,w,k,z){if(ml.apply(this,arguments),cs){if(cs){var re=Ki;cs=!1,Ki=null}else throw Error(t(198));fs||(fs=!0,Sr=re)}}function Qi(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function gl(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function D(n){if(Qi(n)!==n)throw Error(t(188))}function Q(n){var r=n.alternate;if(!r){if(r=Qi(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,f=r;;){var m=l.return;if(m===null)break;var y=m.alternate;if(y===null){if(f=m.return,f!==null){l=f;continue}break}if(m.child===y.child){for(y=m.child;y;){if(y===l)return D(m),n;if(y===f)return D(m),r;y=y.sibling}throw Error(t(188))}if(l.return!==f.return)l=m,f=y;else{for(var w=!1,k=m.child;k;){if(k===l){w=!0,l=m,f=y;break}if(k===f){w=!0,f=m,l=y;break}k=k.sibling}if(!w){for(k=y.child;k;){if(k===l){w=!0,l=y,f=m;break}if(k===f){w=!0,f=y,l=m;break}k=k.sibling}if(!w)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function ae(n){return n=Q(n),n!==null?ue(n):null}function ue(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=ue(n);if(r!==null)return r;n=n.sibling}return null}var oe=e.unstable_scheduleCallback,be=e.unstable_cancelCallback,Ge=e.unstable_shouldYield,Ze=e.unstable_requestPaint,Pe=e.unstable_now,at=e.unstable_getCurrentPriorityLevel,et=e.unstable_ImmediatePriority,it=e.unstable_UserBlockingPriority,Pt=e.unstable_NormalPriority,Rn=e.unstable_LowPriority,qt=e.unstable_IdlePriority,On=null,gt=null;function lt(n){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(On,n,void 0,(n.current.flags&128)===128)}catch{}}var bn=Math.clz32?Math.clz32:_l,Ot=Math.log,Ji=Math.LN2;function _l(n){return n>>>=0,n===0?32:31-(Ot(n)/Ji|0)|0}var zi=64,Mr=4194304;function jt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function di(n,r){var l=n.pendingLanes;if(l===0)return 0;var f=0,m=n.suspendedLanes,y=n.pingedLanes,w=l&268435455;if(w!==0){var k=w&~m;k!==0?f=jt(k):(y&=w,y!==0&&(f=jt(y)))}else w=l&~m,w!==0?f=jt(w):y!==0&&(f=jt(y));if(f===0)return 0;if(r!==0&&r!==f&&(r&m)===0&&(m=f&-f,y=r&-r,m>=y||m===16&&(y&4194240)!==0))return r;if((f&4)!==0&&(f|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=f;0<r;)l=31-bn(r),m=1<<l,f|=n[l],r&=~m;return f}function ia(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fn(n,r){for(var l=n.suspendedLanes,f=n.pingedLanes,m=n.expirationTimes,y=n.pendingLanes;0<y;){var w=31-bn(y),k=1<<w,z=m[w];z===-1?((k&l)===0||(k&f)!==0)&&(m[w]=ia(k,r)):z<=r&&(n.expiredLanes|=k),y&=~k}}function hs(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function vl(){var n=zi;return zi<<=1,(zi&4194240)===0&&(zi=64),n}function qs(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function ra(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-bn(r),n[r]=l}function D_(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var f=n.eventTimes;for(n=n.expirationTimes;0<l;){var m=31-bn(l),y=1<<m;r[m]=0,f[m]=-1,n[m]=-1,l&=~y}}function gc(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var f=31-bn(l),m=1<<f;m&r|n[f]&r&&(n[f]|=r),l&=~m}}var Et=0;function Nd(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Dd,_c,Ud,Id,Od,vc=!1,xl=[],Er=null,wr=null,Tr=null,sa=new Map,oa=new Map,Cr=[],U_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fd(n,r){switch(n){case"focusin":case"focusout":Er=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":sa.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":oa.delete(r.pointerId)}}function aa(n,r,l,f,m,y){return n===null||n.nativeEvent!==y?(n={blockedOn:r,domEventName:l,eventSystemFlags:f,nativeEvent:y,targetContainers:[m]},r!==null&&(r=Sa(r),r!==null&&_c(r)),n):(n.eventSystemFlags|=f,r=n.targetContainers,m!==null&&r.indexOf(m)===-1&&r.push(m),n)}function I_(n,r,l,f,m){switch(r){case"focusin":return Er=aa(Er,n,r,l,f,m),!0;case"dragenter":return wr=aa(wr,n,r,l,f,m),!0;case"mouseover":return Tr=aa(Tr,n,r,l,f,m),!0;case"pointerover":var y=m.pointerId;return sa.set(y,aa(sa.get(y)||null,n,r,l,f,m)),!0;case"gotpointercapture":return y=m.pointerId,oa.set(y,aa(oa.get(y)||null,n,r,l,f,m)),!0}return!1}function kd(n){var r=ds(n.target);if(r!==null){var l=Qi(r);if(l!==null){if(r=l.tag,r===13){if(r=gl(l),r!==null){n.blockedOn=r,Od(n.priority,function(){Ud(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function yl(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=yc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var f=new l.constructor(l.type,l);Lt=f,l.target.dispatchEvent(f),Lt=null}else return r=Sa(l),r!==null&&_c(r),n.blockedOn=l,!1;r.shift()}return!0}function zd(n,r,l){yl(n)&&l.delete(r)}function O_(){vc=!1,Er!==null&&yl(Er)&&(Er=null),wr!==null&&yl(wr)&&(wr=null),Tr!==null&&yl(Tr)&&(Tr=null),sa.forEach(zd),oa.forEach(zd)}function la(n,r){n.blockedOn===r&&(n.blockedOn=null,vc||(vc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,O_)))}function ua(n){function r(m){return la(m,n)}if(0<xl.length){la(xl[0],n);for(var l=1;l<xl.length;l++){var f=xl[l];f.blockedOn===n&&(f.blockedOn=null)}}for(Er!==null&&la(Er,n),wr!==null&&la(wr,n),Tr!==null&&la(Tr,n),sa.forEach(r),oa.forEach(r),l=0;l<Cr.length;l++)f=Cr[l],f.blockedOn===n&&(f.blockedOn=null);for(;0<Cr.length&&(l=Cr[0],l.blockedOn===null);)kd(l),l.blockedOn===null&&Cr.shift()}var $s=L.ReactCurrentBatchConfig,Sl=!0;function F_(n,r,l,f){var m=Et,y=$s.transition;$s.transition=null;try{Et=1,xc(n,r,l,f)}finally{Et=m,$s.transition=y}}function k_(n,r,l,f){var m=Et,y=$s.transition;$s.transition=null;try{Et=4,xc(n,r,l,f)}finally{Et=m,$s.transition=y}}function xc(n,r,l,f){if(Sl){var m=yc(n,r,l,f);if(m===null)Fc(n,r,f,Ml,l),Fd(n,f);else if(I_(m,n,r,l,f))f.stopPropagation();else if(Fd(n,f),r&4&&-1<U_.indexOf(n)){for(;m!==null;){var y=Sa(m);if(y!==null&&Dd(y),y=yc(n,r,l,f),y===null&&Fc(n,r,f,Ml,l),y===m)break;m=y}m!==null&&f.stopPropagation()}else Fc(n,r,f,null,l)}}var Ml=null;function yc(n,r,l,f){if(Ml=null,n=ot(f),n=ds(n),n!==null)if(r=Qi(n),r===null)n=null;else if(l=r.tag,l===13){if(n=gl(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Ml=n,null}function Bd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(at()){case et:return 1;case it:return 4;case Pt:case Rn:return 16;case qt:return 536870912;default:return 16}default:return 16}}var Ar=null,Sc=null,El=null;function Hd(){if(El)return El;var n,r=Sc,l=r.length,f,m="value"in Ar?Ar.value:Ar.textContent,y=m.length;for(n=0;n<l&&r[n]===m[n];n++);var w=l-n;for(f=1;f<=w&&r[l-f]===m[y-f];f++);return El=m.slice(n,1<f?1-f:void 0)}function wl(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Tl(){return!0}function Vd(){return!1}function Jn(n){function r(l,f,m,y,w){this._reactName=l,this._targetInst=m,this.type=f,this.nativeEvent=y,this.target=w,this.currentTarget=null;for(var k in n)n.hasOwnProperty(k)&&(l=n[k],this[k]=l?l(y):y[k]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?Tl:Vd,this.isPropagationStopped=Vd,this}return X(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Tl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Tl)},persist:function(){},isPersistent:Tl}),r}var Zs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mc=Jn(Zs),ca=X({},Zs,{view:0,detail:0}),z_=Jn(ca),Ec,wc,fa,Cl=X({},ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==fa&&(fa&&n.type==="mousemove"?(Ec=n.screenX-fa.screenX,wc=n.screenY-fa.screenY):wc=Ec=0,fa=n),Ec)},movementY:function(n){return"movementY"in n?n.movementY:wc}}),Gd=Jn(Cl),B_=X({},Cl,{dataTransfer:0}),H_=Jn(B_),V_=X({},ca,{relatedTarget:0}),Tc=Jn(V_),G_=X({},Zs,{animationName:0,elapsedTime:0,pseudoElement:0}),W_=Jn(G_),j_=X({},Zs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),X_=Jn(j_),Y_=X({},Zs,{data:0}),Wd=Jn(Y_),q_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Z_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function K_(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Z_[n])?!!r[n]:!1}function Cc(){return K_}var Q_=X({},ca,{key:function(n){if(n.key){var r=q_[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=wl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?$_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cc,charCode:function(n){return n.type==="keypress"?wl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?wl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),J_=Jn(Q_),ev=X({},Cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jd=Jn(ev),tv=X({},ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cc}),nv=Jn(tv),iv=X({},Zs,{propertyName:0,elapsedTime:0,pseudoElement:0}),rv=Jn(iv),sv=X({},Cl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),ov=Jn(sv),av=[9,13,27,32],Ac=u&&"CompositionEvent"in window,ha=null;u&&"documentMode"in document&&(ha=document.documentMode);var lv=u&&"TextEvent"in window&&!ha,Xd=u&&(!Ac||ha&&8<ha&&11>=ha),Yd=" ",qd=!1;function $d(n,r){switch(n){case"keyup":return av.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ks=!1;function uv(n,r){switch(n){case"compositionend":return Zd(r);case"keypress":return r.which!==32?null:(qd=!0,Yd);case"textInput":return n=r.data,n===Yd&&qd?null:n;default:return null}}function cv(n,r){if(Ks)return n==="compositionend"||!Ac&&$d(n,r)?(n=Hd(),El=Sc=Ar=null,Ks=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Xd&&r.locale!=="ko"?null:r.data;default:return null}}var fv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kd(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!fv[n.type]:r==="textarea"}function Qd(n,r,l,f){Ke(f),r=Pl(r,"onChange"),0<r.length&&(l=new Mc("onChange","change",null,l,f),n.push({event:l,listeners:r}))}var da=null,pa=null;function hv(n){gp(n,0)}function Al(n){var r=no(n);if(se(r))return n}function dv(n,r){if(n==="change")return r}var Jd=!1;if(u){var Rc;if(u){var bc="oninput"in document;if(!bc){var ep=document.createElement("div");ep.setAttribute("oninput","return;"),bc=typeof ep.oninput=="function"}Rc=bc}else Rc=!1;Jd=Rc&&(!document.documentMode||9<document.documentMode)}function tp(){da&&(da.detachEvent("onpropertychange",np),pa=da=null)}function np(n){if(n.propertyName==="value"&&Al(pa)){var r=[];Qd(r,pa,n,ot(n)),ln(hv,r)}}function pv(n,r,l){n==="focusin"?(tp(),da=r,pa=l,da.attachEvent("onpropertychange",np)):n==="focusout"&&tp()}function mv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Al(pa)}function gv(n,r){if(n==="click")return Al(r)}function _v(n,r){if(n==="input"||n==="change")return Al(r)}function vv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Ai=typeof Object.is=="function"?Object.is:vv;function ma(n,r){if(Ai(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),f=Object.keys(r);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var m=l[f];if(!h.call(r,m)||!Ai(n[m],r[m]))return!1}return!0}function ip(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function rp(n,r){var l=ip(n);n=0;for(var f;l;){if(l.nodeType===3){if(f=n+l.textContent.length,n<=r&&f>=r)return{node:l,offset:r-n};n=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=ip(l)}}function sp(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?sp(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function op(){for(var n=window,r=Kt();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=Kt(n.document)}return r}function Lc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function xv(n){var r=op(),l=n.focusedElem,f=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&sp(l.ownerDocument.documentElement,l)){if(f!==null&&Lc(l)){if(r=f.start,n=f.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var m=l.textContent.length,y=Math.min(f.start,m);f=f.end===void 0?y:Math.min(f.end,m),!n.extend&&y>f&&(m=f,f=y,y=m),m=rp(l,y);var w=rp(l,f);m&&w&&(n.rangeCount!==1||n.anchorNode!==m.node||n.anchorOffset!==m.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(r=r.createRange(),r.setStart(m.node,m.offset),n.removeAllRanges(),y>f?(n.addRange(r),n.extend(w.node,w.offset)):(r.setEnd(w.node,w.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var yv=u&&"documentMode"in document&&11>=document.documentMode,Qs=null,Pc=null,ga=null,Nc=!1;function ap(n,r,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Nc||Qs==null||Qs!==Kt(f)||(f=Qs,"selectionStart"in f&&Lc(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),ga&&ma(ga,f)||(ga=f,f=Pl(Pc,"onSelect"),0<f.length&&(r=new Mc("onSelect","select",null,r,l),n.push({event:r,listeners:f}),r.target=Qs)))}function Rl(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var Js={animationend:Rl("Animation","AnimationEnd"),animationiteration:Rl("Animation","AnimationIteration"),animationstart:Rl("Animation","AnimationStart"),transitionend:Rl("Transition","TransitionEnd")},Dc={},lp={};u&&(lp=document.createElement("div").style,"AnimationEvent"in window||(delete Js.animationend.animation,delete Js.animationiteration.animation,delete Js.animationstart.animation),"TransitionEvent"in window||delete Js.transitionend.transition);function bl(n){if(Dc[n])return Dc[n];if(!Js[n])return n;var r=Js[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in lp)return Dc[n]=r[l];return n}var up=bl("animationend"),cp=bl("animationiteration"),fp=bl("animationstart"),hp=bl("transitionend"),dp=new Map,pp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(n,r){dp.set(n,r),a(r,[n])}for(var Uc=0;Uc<pp.length;Uc++){var Ic=pp[Uc],Sv=Ic.toLowerCase(),Mv=Ic[0].toUpperCase()+Ic.slice(1);Rr(Sv,"on"+Mv)}Rr(up,"onAnimationEnd"),Rr(cp,"onAnimationIteration"),Rr(fp,"onAnimationStart"),Rr("dblclick","onDoubleClick"),Rr("focusin","onFocus"),Rr("focusout","onBlur"),Rr(hp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ev=new Set("cancel close invalid load scroll toggle".split(" ").concat(_a));function mp(n,r,l){var f=n.type||"unknown-event";n.currentTarget=l,mc(f,r,void 0,n),n.currentTarget=null}function gp(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var f=n[l],m=f.event;f=f.listeners;e:{var y=void 0;if(r)for(var w=f.length-1;0<=w;w--){var k=f[w],z=k.instance,re=k.currentTarget;if(k=k.listener,z!==y&&m.isPropagationStopped())break e;mp(m,k,re),y=z}else for(w=0;w<f.length;w++){if(k=f[w],z=k.instance,re=k.currentTarget,k=k.listener,z!==y&&m.isPropagationStopped())break e;mp(m,k,re),y=z}}}if(fs)throw n=Sr,fs=!1,Sr=null,n}function Dt(n,r){var l=r[Gc];l===void 0&&(l=r[Gc]=new Set);var f=n+"__bubble";l.has(f)||(_p(r,n,2,!1),l.add(f))}function Oc(n,r,l){var f=0;r&&(f|=4),_p(l,n,f,r)}var Ll="_reactListening"+Math.random().toString(36).slice(2);function va(n){if(!n[Ll]){n[Ll]=!0,i.forEach(function(l){l!=="selectionchange"&&(Ev.has(l)||Oc(l,!1,n),Oc(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Ll]||(r[Ll]=!0,Oc("selectionchange",!1,r))}}function _p(n,r,l,f){switch(Bd(r)){case 1:var m=F_;break;case 4:m=k_;break;default:m=xc}l=m.bind(null,r,l,n),m=void 0,!tn||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(m=!0),f?m!==void 0?n.addEventListener(r,l,{capture:!0,passive:m}):n.addEventListener(r,l,!0):m!==void 0?n.addEventListener(r,l,{passive:m}):n.addEventListener(r,l,!1)}function Fc(n,r,l,f,m){var y=f;if((r&1)===0&&(r&2)===0&&f!==null)e:for(;;){if(f===null)return;var w=f.tag;if(w===3||w===4){var k=f.stateNode.containerInfo;if(k===m||k.nodeType===8&&k.parentNode===m)break;if(w===4)for(w=f.return;w!==null;){var z=w.tag;if((z===3||z===4)&&(z=w.stateNode.containerInfo,z===m||z.nodeType===8&&z.parentNode===m))return;w=w.return}for(;k!==null;){if(w=ds(k),w===null)return;if(z=w.tag,z===5||z===6){f=y=w;continue e}k=k.parentNode}}f=f.return}ln(function(){var re=y,pe=ot(l),_e=[];e:{var de=dp.get(n);if(de!==void 0){var Le=Mc,Ie=n;switch(n){case"keypress":if(wl(l)===0)break e;case"keydown":case"keyup":Le=J_;break;case"focusin":Ie="focus",Le=Tc;break;case"focusout":Ie="blur",Le=Tc;break;case"beforeblur":case"afterblur":Le=Tc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Le=Gd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Le=H_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Le=nv;break;case up:case cp:case fp:Le=W_;break;case hp:Le=rv;break;case"scroll":Le=z_;break;case"wheel":Le=ov;break;case"copy":case"cut":case"paste":Le=X_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Le=jd}var Fe=(r&4)!==0,$t=!Fe&&n==="scroll",Z=Fe?de!==null?de+"Capture":null:de;Fe=[];for(var W=re,ee;W!==null;){ee=W;var ye=ee.stateNode;if(ee.tag===5&&ye!==null&&(ee=ye,Z!==null&&(ye=xt(W,Z),ye!=null&&Fe.push(xa(W,ye,ee)))),$t)break;W=W.return}0<Fe.length&&(de=new Le(de,Ie,null,l,pe),_e.push({event:de,listeners:Fe}))}}if((r&7)===0){e:{if(de=n==="mouseover"||n==="pointerover",Le=n==="mouseout"||n==="pointerout",de&&l!==Lt&&(Ie=l.relatedTarget||l.fromElement)&&(ds(Ie)||Ie[er]))break e;if((Le||de)&&(de=pe.window===pe?pe:(de=pe.ownerDocument)?de.defaultView||de.parentWindow:window,Le?(Ie=l.relatedTarget||l.toElement,Le=re,Ie=Ie?ds(Ie):null,Ie!==null&&($t=Qi(Ie),Ie!==$t||Ie.tag!==5&&Ie.tag!==6)&&(Ie=null)):(Le=null,Ie=re),Le!==Ie)){if(Fe=Gd,ye="onMouseLeave",Z="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(Fe=jd,ye="onPointerLeave",Z="onPointerEnter",W="pointer"),$t=Le==null?de:no(Le),ee=Ie==null?de:no(Ie),de=new Fe(ye,W+"leave",Le,l,pe),de.target=$t,de.relatedTarget=ee,ye=null,ds(pe)===re&&(Fe=new Fe(Z,W+"enter",Ie,l,pe),Fe.target=ee,Fe.relatedTarget=$t,ye=Fe),$t=ye,Le&&Ie)t:{for(Fe=Le,Z=Ie,W=0,ee=Fe;ee;ee=eo(ee))W++;for(ee=0,ye=Z;ye;ye=eo(ye))ee++;for(;0<W-ee;)Fe=eo(Fe),W--;for(;0<ee-W;)Z=eo(Z),ee--;for(;W--;){if(Fe===Z||Z!==null&&Fe===Z.alternate)break t;Fe=eo(Fe),Z=eo(Z)}Fe=null}else Fe=null;Le!==null&&vp(_e,de,Le,Fe,!1),Ie!==null&&$t!==null&&vp(_e,$t,Ie,Fe,!0)}}e:{if(de=re?no(re):window,Le=de.nodeName&&de.nodeName.toLowerCase(),Le==="select"||Le==="input"&&de.type==="file")var ze=dv;else if(Kd(de))if(Jd)ze=_v;else{ze=mv;var qe=pv}else(Le=de.nodeName)&&Le.toLowerCase()==="input"&&(de.type==="checkbox"||de.type==="radio")&&(ze=gv);if(ze&&(ze=ze(n,re))){Qd(_e,ze,l,pe);break e}qe&&qe(n,de,re),n==="focusout"&&(qe=de._wrapperState)&&qe.controlled&&de.type==="number"&&U(de,"number",de.value)}switch(qe=re?no(re):window,n){case"focusin":(Kd(qe)||qe.contentEditable==="true")&&(Qs=qe,Pc=re,ga=null);break;case"focusout":ga=Pc=Qs=null;break;case"mousedown":Nc=!0;break;case"contextmenu":case"mouseup":case"dragend":Nc=!1,ap(_e,l,pe);break;case"selectionchange":if(yv)break;case"keydown":case"keyup":ap(_e,l,pe)}var $e;if(Ac)e:{switch(n){case"compositionstart":var Qe="onCompositionStart";break e;case"compositionend":Qe="onCompositionEnd";break e;case"compositionupdate":Qe="onCompositionUpdate";break e}Qe=void 0}else Ks?$d(n,l)&&(Qe="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(Qe="onCompositionStart");Qe&&(Xd&&l.locale!=="ko"&&(Ks||Qe!=="onCompositionStart"?Qe==="onCompositionEnd"&&Ks&&($e=Hd()):(Ar=pe,Sc="value"in Ar?Ar.value:Ar.textContent,Ks=!0)),qe=Pl(re,Qe),0<qe.length&&(Qe=new Wd(Qe,n,null,l,pe),_e.push({event:Qe,listeners:qe}),$e?Qe.data=$e:($e=Zd(l),$e!==null&&(Qe.data=$e)))),($e=lv?uv(n,l):cv(n,l))&&(re=Pl(re,"onBeforeInput"),0<re.length&&(pe=new Wd("onBeforeInput","beforeinput",null,l,pe),_e.push({event:pe,listeners:re}),pe.data=$e))}gp(_e,r)})}function xa(n,r,l){return{instance:n,listener:r,currentTarget:l}}function Pl(n,r){for(var l=r+"Capture",f=[];n!==null;){var m=n,y=m.stateNode;m.tag===5&&y!==null&&(m=y,y=xt(n,l),y!=null&&f.unshift(xa(n,y,m)),y=xt(n,r),y!=null&&f.push(xa(n,y,m))),n=n.return}return f}function eo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function vp(n,r,l,f,m){for(var y=r._reactName,w=[];l!==null&&l!==f;){var k=l,z=k.alternate,re=k.stateNode;if(z!==null&&z===f)break;k.tag===5&&re!==null&&(k=re,m?(z=xt(l,y),z!=null&&w.unshift(xa(l,z,k))):m||(z=xt(l,y),z!=null&&w.push(xa(l,z,k)))),l=l.return}w.length!==0&&n.push({event:r,listeners:w})}var wv=/\r\n?/g,Tv=/\u0000|\uFFFD/g;function xp(n){return(typeof n=="string"?n:""+n).replace(wv,`
`).replace(Tv,"")}function Nl(n,r,l){if(r=xp(r),xp(n)!==r&&l)throw Error(t(425))}function Dl(){}var kc=null,zc=null;function Bc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Hc=typeof setTimeout=="function"?setTimeout:void 0,Cv=typeof clearTimeout=="function"?clearTimeout:void 0,yp=typeof Promise=="function"?Promise:void 0,Av=typeof queueMicrotask=="function"?queueMicrotask:typeof yp<"u"?function(n){return yp.resolve(null).then(n).catch(Rv)}:Hc;function Rv(n){setTimeout(function(){throw n})}function Vc(n,r){var l=r,f=0;do{var m=l.nextSibling;if(n.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(f===0){n.removeChild(m),ua(r);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=m}while(l);ua(r)}function br(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Sp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var to=Math.random().toString(36).slice(2),Bi="__reactFiber$"+to,ya="__reactProps$"+to,er="__reactContainer$"+to,Gc="__reactEvents$"+to,bv="__reactListeners$"+to,Lv="__reactHandles$"+to;function ds(n){var r=n[Bi];if(r)return r;for(var l=n.parentNode;l;){if(r=l[er]||l[Bi]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=Sp(n);n!==null;){if(l=n[Bi])return l;n=Sp(n)}return r}n=l,l=n.parentNode}return null}function Sa(n){return n=n[Bi]||n[er],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function no(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ul(n){return n[ya]||null}var Wc=[],io=-1;function Lr(n){return{current:n}}function Ut(n){0>io||(n.current=Wc[io],Wc[io]=null,io--)}function Nt(n,r){io++,Wc[io]=n.current,n.current=r}var Pr={},yn=Lr(Pr),kn=Lr(!1),ps=Pr;function ro(n,r){var l=n.type.contextTypes;if(!l)return Pr;var f=n.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===r)return f.__reactInternalMemoizedMaskedChildContext;var m={},y;for(y in l)m[y]=r[y];return f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=m),m}function zn(n){return n=n.childContextTypes,n!=null}function Il(){Ut(kn),Ut(yn)}function Mp(n,r,l){if(yn.current!==Pr)throw Error(t(168));Nt(yn,r),Nt(kn,l)}function Ep(n,r,l){var f=n.stateNode;if(r=r.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var m in f)if(!(m in r))throw Error(t(108,Ee(n)||"Unknown",m));return X({},l,f)}function Ol(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Pr,ps=yn.current,Nt(yn,n),Nt(kn,kn.current),!0}function wp(n,r,l){var f=n.stateNode;if(!f)throw Error(t(169));l?(n=Ep(n,r,ps),f.__reactInternalMemoizedMergedChildContext=n,Ut(kn),Ut(yn),Nt(yn,n)):Ut(kn),Nt(kn,l)}var tr=null,Fl=!1,jc=!1;function Tp(n){tr===null?tr=[n]:tr.push(n)}function Pv(n){Fl=!0,Tp(n)}function Nr(){if(!jc&&tr!==null){jc=!0;var n=0,r=Et;try{var l=tr;for(Et=1;n<l.length;n++){var f=l[n];do f=f(!0);while(f!==null)}tr=null,Fl=!1}catch(m){throw tr!==null&&(tr=tr.slice(n+1)),oe(et,Nr),m}finally{Et=r,jc=!1}}return null}var so=[],oo=0,kl=null,zl=0,pi=[],mi=0,ms=null,nr=1,ir="";function gs(n,r){so[oo++]=zl,so[oo++]=kl,kl=n,zl=r}function Cp(n,r,l){pi[mi++]=nr,pi[mi++]=ir,pi[mi++]=ms,ms=n;var f=nr;n=ir;var m=32-bn(f)-1;f&=~(1<<m),l+=1;var y=32-bn(r)+m;if(30<y){var w=m-m%5;y=(f&(1<<w)-1).toString(32),f>>=w,m-=w,nr=1<<32-bn(r)+m|l<<m|f,ir=y+n}else nr=1<<y|l<<m|f,ir=n}function Xc(n){n.return!==null&&(gs(n,1),Cp(n,1,0))}function Yc(n){for(;n===kl;)kl=so[--oo],so[oo]=null,zl=so[--oo],so[oo]=null;for(;n===ms;)ms=pi[--mi],pi[mi]=null,ir=pi[--mi],pi[mi]=null,nr=pi[--mi],pi[mi]=null}var ei=null,ti=null,Ft=!1,Ri=null;function Ap(n,r){var l=xi(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function Rp(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,ei=n,ti=br(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,ei=n,ti=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=ms!==null?{id:nr,overflow:ir}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=xi(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,ei=n,ti=null,!0):!1;default:return!1}}function qc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function $c(n){if(Ft){var r=ti;if(r){var l=r;if(!Rp(n,r)){if(qc(n))throw Error(t(418));r=br(l.nextSibling);var f=ei;r&&Rp(n,r)?Ap(f,l):(n.flags=n.flags&-4097|2,Ft=!1,ei=n)}}else{if(qc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ft=!1,ei=n}}}function bp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ei=n}function Bl(n){if(n!==ei)return!1;if(!Ft)return bp(n),Ft=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Bc(n.type,n.memoizedProps)),r&&(r=ti)){if(qc(n))throw Lp(),Error(t(418));for(;r;)Ap(n,r),r=br(r.nextSibling)}if(bp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){ti=br(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}ti=null}}else ti=ei?br(n.stateNode.nextSibling):null;return!0}function Lp(){for(var n=ti;n;)n=br(n.nextSibling)}function ao(){ti=ei=null,Ft=!1}function Zc(n){Ri===null?Ri=[n]:Ri.push(n)}var Nv=L.ReactCurrentBatchConfig;function Ma(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,n));var m=f,y=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===y?r.ref:(r=function(w){var k=m.refs;w===null?delete k[y]:k[y]=w},r._stringRef=y,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function Hl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Pp(n){var r=n._init;return r(n._payload)}function Np(n){function r(Z,W){if(n){var ee=Z.deletions;ee===null?(Z.deletions=[W],Z.flags|=16):ee.push(W)}}function l(Z,W){if(!n)return null;for(;W!==null;)r(Z,W),W=W.sibling;return null}function f(Z,W){for(Z=new Map;W!==null;)W.key!==null?Z.set(W.key,W):Z.set(W.index,W),W=W.sibling;return Z}function m(Z,W){return Z=Br(Z,W),Z.index=0,Z.sibling=null,Z}function y(Z,W,ee){return Z.index=ee,n?(ee=Z.alternate,ee!==null?(ee=ee.index,ee<W?(Z.flags|=2,W):ee):(Z.flags|=2,W)):(Z.flags|=1048576,W)}function w(Z){return n&&Z.alternate===null&&(Z.flags|=2),Z}function k(Z,W,ee,ye){return W===null||W.tag!==6?(W=Vf(ee,Z.mode,ye),W.return=Z,W):(W=m(W,ee),W.return=Z,W)}function z(Z,W,ee,ye){var ze=ee.type;return ze===N?pe(Z,W,ee.props.children,ye,ee.key):W!==null&&(W.elementType===ze||typeof ze=="object"&&ze!==null&&ze.$$typeof===te&&Pp(ze)===W.type)?(ye=m(W,ee.props),ye.ref=Ma(Z,W,ee),ye.return=Z,ye):(ye=fu(ee.type,ee.key,ee.props,null,Z.mode,ye),ye.ref=Ma(Z,W,ee),ye.return=Z,ye)}function re(Z,W,ee,ye){return W===null||W.tag!==4||W.stateNode.containerInfo!==ee.containerInfo||W.stateNode.implementation!==ee.implementation?(W=Gf(ee,Z.mode,ye),W.return=Z,W):(W=m(W,ee.children||[]),W.return=Z,W)}function pe(Z,W,ee,ye,ze){return W===null||W.tag!==7?(W=ws(ee,Z.mode,ye,ze),W.return=Z,W):(W=m(W,ee),W.return=Z,W)}function _e(Z,W,ee){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Vf(""+W,Z.mode,ee),W.return=Z,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case O:return ee=fu(W.type,W.key,W.props,null,Z.mode,ee),ee.ref=Ma(Z,null,W),ee.return=Z,ee;case I:return W=Gf(W,Z.mode,ee),W.return=Z,W;case te:var ye=W._init;return _e(Z,ye(W._payload),ee)}if(b(W)||j(W))return W=ws(W,Z.mode,ee,null),W.return=Z,W;Hl(Z,W)}return null}function de(Z,W,ee,ye){var ze=W!==null?W.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return ze!==null?null:k(Z,W,""+ee,ye);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case O:return ee.key===ze?z(Z,W,ee,ye):null;case I:return ee.key===ze?re(Z,W,ee,ye):null;case te:return ze=ee._init,de(Z,W,ze(ee._payload),ye)}if(b(ee)||j(ee))return ze!==null?null:pe(Z,W,ee,ye,null);Hl(Z,ee)}return null}function Le(Z,W,ee,ye,ze){if(typeof ye=="string"&&ye!==""||typeof ye=="number")return Z=Z.get(ee)||null,k(W,Z,""+ye,ze);if(typeof ye=="object"&&ye!==null){switch(ye.$$typeof){case O:return Z=Z.get(ye.key===null?ee:ye.key)||null,z(W,Z,ye,ze);case I:return Z=Z.get(ye.key===null?ee:ye.key)||null,re(W,Z,ye,ze);case te:var qe=ye._init;return Le(Z,W,ee,qe(ye._payload),ze)}if(b(ye)||j(ye))return Z=Z.get(ee)||null,pe(W,Z,ye,ze,null);Hl(W,ye)}return null}function Ie(Z,W,ee,ye){for(var ze=null,qe=null,$e=W,Qe=W=0,fn=null;$e!==null&&Qe<ee.length;Qe++){$e.index>Qe?(fn=$e,$e=null):fn=$e.sibling;var yt=de(Z,$e,ee[Qe],ye);if(yt===null){$e===null&&($e=fn);break}n&&$e&&yt.alternate===null&&r(Z,$e),W=y(yt,W,Qe),qe===null?ze=yt:qe.sibling=yt,qe=yt,$e=fn}if(Qe===ee.length)return l(Z,$e),Ft&&gs(Z,Qe),ze;if($e===null){for(;Qe<ee.length;Qe++)$e=_e(Z,ee[Qe],ye),$e!==null&&(W=y($e,W,Qe),qe===null?ze=$e:qe.sibling=$e,qe=$e);return Ft&&gs(Z,Qe),ze}for($e=f(Z,$e);Qe<ee.length;Qe++)fn=Le($e,Z,Qe,ee[Qe],ye),fn!==null&&(n&&fn.alternate!==null&&$e.delete(fn.key===null?Qe:fn.key),W=y(fn,W,Qe),qe===null?ze=fn:qe.sibling=fn,qe=fn);return n&&$e.forEach(function(Hr){return r(Z,Hr)}),Ft&&gs(Z,Qe),ze}function Fe(Z,W,ee,ye){var ze=j(ee);if(typeof ze!="function")throw Error(t(150));if(ee=ze.call(ee),ee==null)throw Error(t(151));for(var qe=ze=null,$e=W,Qe=W=0,fn=null,yt=ee.next();$e!==null&&!yt.done;Qe++,yt=ee.next()){$e.index>Qe?(fn=$e,$e=null):fn=$e.sibling;var Hr=de(Z,$e,yt.value,ye);if(Hr===null){$e===null&&($e=fn);break}n&&$e&&Hr.alternate===null&&r(Z,$e),W=y(Hr,W,Qe),qe===null?ze=Hr:qe.sibling=Hr,qe=Hr,$e=fn}if(yt.done)return l(Z,$e),Ft&&gs(Z,Qe),ze;if($e===null){for(;!yt.done;Qe++,yt=ee.next())yt=_e(Z,yt.value,ye),yt!==null&&(W=y(yt,W,Qe),qe===null?ze=yt:qe.sibling=yt,qe=yt);return Ft&&gs(Z,Qe),ze}for($e=f(Z,$e);!yt.done;Qe++,yt=ee.next())yt=Le($e,Z,Qe,yt.value,ye),yt!==null&&(n&&yt.alternate!==null&&$e.delete(yt.key===null?Qe:yt.key),W=y(yt,W,Qe),qe===null?ze=yt:qe.sibling=yt,qe=yt);return n&&$e.forEach(function(fx){return r(Z,fx)}),Ft&&gs(Z,Qe),ze}function $t(Z,W,ee,ye){if(typeof ee=="object"&&ee!==null&&ee.type===N&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case O:e:{for(var ze=ee.key,qe=W;qe!==null;){if(qe.key===ze){if(ze=ee.type,ze===N){if(qe.tag===7){l(Z,qe.sibling),W=m(qe,ee.props.children),W.return=Z,Z=W;break e}}else if(qe.elementType===ze||typeof ze=="object"&&ze!==null&&ze.$$typeof===te&&Pp(ze)===qe.type){l(Z,qe.sibling),W=m(qe,ee.props),W.ref=Ma(Z,qe,ee),W.return=Z,Z=W;break e}l(Z,qe);break}else r(Z,qe);qe=qe.sibling}ee.type===N?(W=ws(ee.props.children,Z.mode,ye,ee.key),W.return=Z,Z=W):(ye=fu(ee.type,ee.key,ee.props,null,Z.mode,ye),ye.ref=Ma(Z,W,ee),ye.return=Z,Z=ye)}return w(Z);case I:e:{for(qe=ee.key;W!==null;){if(W.key===qe)if(W.tag===4&&W.stateNode.containerInfo===ee.containerInfo&&W.stateNode.implementation===ee.implementation){l(Z,W.sibling),W=m(W,ee.children||[]),W.return=Z,Z=W;break e}else{l(Z,W);break}else r(Z,W);W=W.sibling}W=Gf(ee,Z.mode,ye),W.return=Z,Z=W}return w(Z);case te:return qe=ee._init,$t(Z,W,qe(ee._payload),ye)}if(b(ee))return Ie(Z,W,ee,ye);if(j(ee))return Fe(Z,W,ee,ye);Hl(Z,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,W!==null&&W.tag===6?(l(Z,W.sibling),W=m(W,ee),W.return=Z,Z=W):(l(Z,W),W=Vf(ee,Z.mode,ye),W.return=Z,Z=W),w(Z)):l(Z,W)}return $t}var lo=Np(!0),Dp=Np(!1),Vl=Lr(null),Gl=null,uo=null,Kc=null;function Qc(){Kc=uo=Gl=null}function Jc(n){var r=Vl.current;Ut(Vl),n._currentValue=r}function ef(n,r,l){for(;n!==null;){var f=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,f!==null&&(f.childLanes|=r)):f!==null&&(f.childLanes&r)!==r&&(f.childLanes|=r),n===l)break;n=n.return}}function co(n,r){Gl=n,Kc=uo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Bn=!0),n.firstContext=null)}function gi(n){var r=n._currentValue;if(Kc!==n)if(n={context:n,memoizedValue:r,next:null},uo===null){if(Gl===null)throw Error(t(308));uo=n,Gl.dependencies={lanes:0,firstContext:n}}else uo=uo.next=n;return r}var _s=null;function tf(n){_s===null?_s=[n]:_s.push(n)}function Up(n,r,l,f){var m=r.interleaved;return m===null?(l.next=l,tf(r)):(l.next=m.next,m.next=l),r.interleaved=l,rr(n,f)}function rr(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var Dr=!1;function nf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ip(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function sr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Ur(n,r,l){var f=n.updateQueue;if(f===null)return null;if(f=f.shared,(vt&2)!==0){var m=f.pending;return m===null?r.next=r:(r.next=m.next,m.next=r),f.pending=r,rr(n,l)}return m=f.interleaved,m===null?(r.next=r,tf(f)):(r.next=m.next,m.next=r),f.interleaved=r,rr(n,l)}function Wl(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var f=r.lanes;f&=n.pendingLanes,l|=f,r.lanes=l,gc(n,l)}}function Op(n,r){var l=n.updateQueue,f=n.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var m=null,y=null;if(l=l.firstBaseUpdate,l!==null){do{var w={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};y===null?m=y=w:y=y.next=w,l=l.next}while(l!==null);y===null?m=y=r:y=y.next=r}else m=y=r;l={baseState:f.baseState,firstBaseUpdate:m,lastBaseUpdate:y,shared:f.shared,effects:f.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function jl(n,r,l,f){var m=n.updateQueue;Dr=!1;var y=m.firstBaseUpdate,w=m.lastBaseUpdate,k=m.shared.pending;if(k!==null){m.shared.pending=null;var z=k,re=z.next;z.next=null,w===null?y=re:w.next=re,w=z;var pe=n.alternate;pe!==null&&(pe=pe.updateQueue,k=pe.lastBaseUpdate,k!==w&&(k===null?pe.firstBaseUpdate=re:k.next=re,pe.lastBaseUpdate=z))}if(y!==null){var _e=m.baseState;w=0,pe=re=z=null,k=y;do{var de=k.lane,Le=k.eventTime;if((f&de)===de){pe!==null&&(pe=pe.next={eventTime:Le,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var Ie=n,Fe=k;switch(de=r,Le=l,Fe.tag){case 1:if(Ie=Fe.payload,typeof Ie=="function"){_e=Ie.call(Le,_e,de);break e}_e=Ie;break e;case 3:Ie.flags=Ie.flags&-65537|128;case 0:if(Ie=Fe.payload,de=typeof Ie=="function"?Ie.call(Le,_e,de):Ie,de==null)break e;_e=X({},_e,de);break e;case 2:Dr=!0}}k.callback!==null&&k.lane!==0&&(n.flags|=64,de=m.effects,de===null?m.effects=[k]:de.push(k))}else Le={eventTime:Le,lane:de,tag:k.tag,payload:k.payload,callback:k.callback,next:null},pe===null?(re=pe=Le,z=_e):pe=pe.next=Le,w|=de;if(k=k.next,k===null){if(k=m.shared.pending,k===null)break;de=k,k=de.next,de.next=null,m.lastBaseUpdate=de,m.shared.pending=null}}while(!0);if(pe===null&&(z=_e),m.baseState=z,m.firstBaseUpdate=re,m.lastBaseUpdate=pe,r=m.shared.interleaved,r!==null){m=r;do w|=m.lane,m=m.next;while(m!==r)}else y===null&&(m.shared.lanes=0);ys|=w,n.lanes=w,n.memoizedState=_e}}function Fp(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var f=n[r],m=f.callback;if(m!==null){if(f.callback=null,f=l,typeof m!="function")throw Error(t(191,m));m.call(f)}}}var Ea={},Hi=Lr(Ea),wa=Lr(Ea),Ta=Lr(Ea);function vs(n){if(n===Ea)throw Error(t(174));return n}function rf(n,r){switch(Nt(Ta,r),Nt(wa,n),Nt(Hi,Ea),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ue(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=Ue(r,n)}Ut(Hi),Nt(Hi,r)}function fo(){Ut(Hi),Ut(wa),Ut(Ta)}function kp(n){vs(Ta.current);var r=vs(Hi.current),l=Ue(r,n.type);r!==l&&(Nt(wa,n),Nt(Hi,l))}function sf(n){wa.current===n&&(Ut(Hi),Ut(wa))}var zt=Lr(0);function Xl(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var of=[];function af(){for(var n=0;n<of.length;n++)of[n]._workInProgressVersionPrimary=null;of.length=0}var Yl=L.ReactCurrentDispatcher,lf=L.ReactCurrentBatchConfig,xs=0,Bt=null,nn=null,un=null,ql=!1,Ca=!1,Aa=0,Dv=0;function Sn(){throw Error(t(321))}function uf(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!Ai(n[l],r[l]))return!1;return!0}function cf(n,r,l,f,m,y){if(xs=y,Bt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Yl.current=n===null||n.memoizedState===null?Fv:kv,n=l(f,m),Ca){y=0;do{if(Ca=!1,Aa=0,25<=y)throw Error(t(301));y+=1,un=nn=null,r.updateQueue=null,Yl.current=zv,n=l(f,m)}while(Ca)}if(Yl.current=Kl,r=nn!==null&&nn.next!==null,xs=0,un=nn=Bt=null,ql=!1,r)throw Error(t(300));return n}function ff(){var n=Aa!==0;return Aa=0,n}function Vi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?Bt.memoizedState=un=n:un=un.next=n,un}function _i(){if(nn===null){var n=Bt.alternate;n=n!==null?n.memoizedState:null}else n=nn.next;var r=un===null?Bt.memoizedState:un.next;if(r!==null)un=r,nn=n;else{if(n===null)throw Error(t(310));nn=n,n={memoizedState:nn.memoizedState,baseState:nn.baseState,baseQueue:nn.baseQueue,queue:nn.queue,next:null},un===null?Bt.memoizedState=un=n:un=un.next=n}return un}function Ra(n,r){return typeof r=="function"?r(n):r}function hf(n){var r=_i(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=nn,m=f.baseQueue,y=l.pending;if(y!==null){if(m!==null){var w=m.next;m.next=y.next,y.next=w}f.baseQueue=m=y,l.pending=null}if(m!==null){y=m.next,f=f.baseState;var k=w=null,z=null,re=y;do{var pe=re.lane;if((xs&pe)===pe)z!==null&&(z=z.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),f=re.hasEagerState?re.eagerState:n(f,re.action);else{var _e={lane:pe,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};z===null?(k=z=_e,w=f):z=z.next=_e,Bt.lanes|=pe,ys|=pe}re=re.next}while(re!==null&&re!==y);z===null?w=f:z.next=k,Ai(f,r.memoizedState)||(Bn=!0),r.memoizedState=f,r.baseState=w,r.baseQueue=z,l.lastRenderedState=f}if(n=l.interleaved,n!==null){m=n;do y=m.lane,Bt.lanes|=y,ys|=y,m=m.next;while(m!==n)}else m===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function df(n){var r=_i(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=l.dispatch,m=l.pending,y=r.memoizedState;if(m!==null){l.pending=null;var w=m=m.next;do y=n(y,w.action),w=w.next;while(w!==m);Ai(y,r.memoizedState)||(Bn=!0),r.memoizedState=y,r.baseQueue===null&&(r.baseState=y),l.lastRenderedState=y}return[y,f]}function zp(){}function Bp(n,r){var l=Bt,f=_i(),m=r(),y=!Ai(f.memoizedState,m);if(y&&(f.memoizedState=m,Bn=!0),f=f.queue,pf(Gp.bind(null,l,f,n),[n]),f.getSnapshot!==r||y||un!==null&&un.memoizedState.tag&1){if(l.flags|=2048,ba(9,Vp.bind(null,l,f,m,r),void 0,null),cn===null)throw Error(t(349));(xs&30)!==0||Hp(l,r,m)}return m}function Hp(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=Bt.updateQueue,r===null?(r={lastEffect:null,stores:null},Bt.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function Vp(n,r,l,f){r.value=l,r.getSnapshot=f,Wp(r)&&jp(n)}function Gp(n,r,l){return l(function(){Wp(r)&&jp(n)})}function Wp(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!Ai(n,l)}catch{return!0}}function jp(n){var r=rr(n,1);r!==null&&Ni(r,n,1,-1)}function Xp(n){var r=Vi();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:n},r.queue=n,n=n.dispatch=Ov.bind(null,Bt,n),[r.memoizedState,n]}function ba(n,r,l,f){return n={tag:n,create:r,destroy:l,deps:f,next:null},r=Bt.updateQueue,r===null?(r={lastEffect:null,stores:null},Bt.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(f=l.next,l.next=n,n.next=f,r.lastEffect=n)),n}function Yp(){return _i().memoizedState}function $l(n,r,l,f){var m=Vi();Bt.flags|=n,m.memoizedState=ba(1|r,l,void 0,f===void 0?null:f)}function Zl(n,r,l,f){var m=_i();f=f===void 0?null:f;var y=void 0;if(nn!==null){var w=nn.memoizedState;if(y=w.destroy,f!==null&&uf(f,w.deps)){m.memoizedState=ba(r,l,y,f);return}}Bt.flags|=n,m.memoizedState=ba(1|r,l,y,f)}function qp(n,r){return $l(8390656,8,n,r)}function pf(n,r){return Zl(2048,8,n,r)}function $p(n,r){return Zl(4,2,n,r)}function Zp(n,r){return Zl(4,4,n,r)}function Kp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Qp(n,r,l){return l=l!=null?l.concat([n]):null,Zl(4,4,Kp.bind(null,r,n),l)}function mf(){}function Jp(n,r){var l=_i();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&uf(r,f[1])?f[0]:(l.memoizedState=[n,r],n)}function em(n,r){var l=_i();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&uf(r,f[1])?f[0]:(n=n(),l.memoizedState=[n,r],n)}function tm(n,r,l){return(xs&21)===0?(n.baseState&&(n.baseState=!1,Bn=!0),n.memoizedState=l):(Ai(l,r)||(l=vl(),Bt.lanes|=l,ys|=l,n.baseState=!0),r)}function Uv(n,r){var l=Et;Et=l!==0&&4>l?l:4,n(!0);var f=lf.transition;lf.transition={};try{n(!1),r()}finally{Et=l,lf.transition=f}}function nm(){return _i().memoizedState}function Iv(n,r,l){var f=kr(n);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},im(n))rm(r,l);else if(l=Up(n,r,l,f),l!==null){var m=Pn();Ni(l,n,f,m),sm(l,r,f)}}function Ov(n,r,l){var f=kr(n),m={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(im(n))rm(r,m);else{var y=n.alternate;if(n.lanes===0&&(y===null||y.lanes===0)&&(y=r.lastRenderedReducer,y!==null))try{var w=r.lastRenderedState,k=y(w,l);if(m.hasEagerState=!0,m.eagerState=k,Ai(k,w)){var z=r.interleaved;z===null?(m.next=m,tf(r)):(m.next=z.next,z.next=m),r.interleaved=m;return}}catch{}finally{}l=Up(n,r,m,f),l!==null&&(m=Pn(),Ni(l,n,f,m),sm(l,r,f))}}function im(n){var r=n.alternate;return n===Bt||r!==null&&r===Bt}function rm(n,r){Ca=ql=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function sm(n,r,l){if((l&4194240)!==0){var f=r.lanes;f&=n.pendingLanes,l|=f,r.lanes=l,gc(n,l)}}var Kl={readContext:gi,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useInsertionEffect:Sn,useLayoutEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useMutableSource:Sn,useSyncExternalStore:Sn,useId:Sn,unstable_isNewReconciler:!1},Fv={readContext:gi,useCallback:function(n,r){return Vi().memoizedState=[n,r===void 0?null:r],n},useContext:gi,useEffect:qp,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,$l(4194308,4,Kp.bind(null,r,n),l)},useLayoutEffect:function(n,r){return $l(4194308,4,n,r)},useInsertionEffect:function(n,r){return $l(4,2,n,r)},useMemo:function(n,r){var l=Vi();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var f=Vi();return r=l!==void 0?l(r):r,f.memoizedState=f.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},f.queue=n,n=n.dispatch=Iv.bind(null,Bt,n),[f.memoizedState,n]},useRef:function(n){var r=Vi();return n={current:n},r.memoizedState=n},useState:Xp,useDebugValue:mf,useDeferredValue:function(n){return Vi().memoizedState=n},useTransition:function(){var n=Xp(!1),r=n[0];return n=Uv.bind(null,n[1]),Vi().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var f=Bt,m=Vi();if(Ft){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),cn===null)throw Error(t(349));(xs&30)!==0||Hp(f,r,l)}m.memoizedState=l;var y={value:l,getSnapshot:r};return m.queue=y,qp(Gp.bind(null,f,y,n),[n]),f.flags|=2048,ba(9,Vp.bind(null,f,y,l,r),void 0,null),l},useId:function(){var n=Vi(),r=cn.identifierPrefix;if(Ft){var l=ir,f=nr;l=(f&~(1<<32-bn(f)-1)).toString(32)+l,r=":"+r+"R"+l,l=Aa++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=Dv++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},kv={readContext:gi,useCallback:Jp,useContext:gi,useEffect:pf,useImperativeHandle:Qp,useInsertionEffect:$p,useLayoutEffect:Zp,useMemo:em,useReducer:hf,useRef:Yp,useState:function(){return hf(Ra)},useDebugValue:mf,useDeferredValue:function(n){var r=_i();return tm(r,nn.memoizedState,n)},useTransition:function(){var n=hf(Ra)[0],r=_i().memoizedState;return[n,r]},useMutableSource:zp,useSyncExternalStore:Bp,useId:nm,unstable_isNewReconciler:!1},zv={readContext:gi,useCallback:Jp,useContext:gi,useEffect:pf,useImperativeHandle:Qp,useInsertionEffect:$p,useLayoutEffect:Zp,useMemo:em,useReducer:df,useRef:Yp,useState:function(){return df(Ra)},useDebugValue:mf,useDeferredValue:function(n){var r=_i();return nn===null?r.memoizedState=n:tm(r,nn.memoizedState,n)},useTransition:function(){var n=df(Ra)[0],r=_i().memoizedState;return[n,r]},useMutableSource:zp,useSyncExternalStore:Bp,useId:nm,unstable_isNewReconciler:!1};function bi(n,r){if(n&&n.defaultProps){r=X({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function gf(n,r,l,f){r=n.memoizedState,l=l(f,r),l=l==null?r:X({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Ql={isMounted:function(n){return(n=n._reactInternals)?Qi(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var f=Pn(),m=kr(n),y=sr(f,m);y.payload=r,l!=null&&(y.callback=l),r=Ur(n,y,m),r!==null&&(Ni(r,n,m,f),Wl(r,n,m))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var f=Pn(),m=kr(n),y=sr(f,m);y.tag=1,y.payload=r,l!=null&&(y.callback=l),r=Ur(n,y,m),r!==null&&(Ni(r,n,m,f),Wl(r,n,m))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=Pn(),f=kr(n),m=sr(l,f);m.tag=2,r!=null&&(m.callback=r),r=Ur(n,m,f),r!==null&&(Ni(r,n,f,l),Wl(r,n,f))}};function om(n,r,l,f,m,y,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(f,y,w):r.prototype&&r.prototype.isPureReactComponent?!ma(l,f)||!ma(m,y):!0}function am(n,r,l){var f=!1,m=Pr,y=r.contextType;return typeof y=="object"&&y!==null?y=gi(y):(m=zn(r)?ps:yn.current,f=r.contextTypes,y=(f=f!=null)?ro(n,m):Pr),r=new r(l,y),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ql,n.stateNode=r,r._reactInternals=n,f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=m,n.__reactInternalMemoizedMaskedChildContext=y),r}function lm(n,r,l,f){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,f),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,f),r.state!==n&&Ql.enqueueReplaceState(r,r.state,null)}function _f(n,r,l,f){var m=n.stateNode;m.props=l,m.state=n.memoizedState,m.refs={},nf(n);var y=r.contextType;typeof y=="object"&&y!==null?m.context=gi(y):(y=zn(r)?ps:yn.current,m.context=ro(n,y)),m.state=n.memoizedState,y=r.getDerivedStateFromProps,typeof y=="function"&&(gf(n,r,y,l),m.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(r=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),r!==m.state&&Ql.enqueueReplaceState(m,m.state,null),jl(n,l,m,f),m.state=n.memoizedState),typeof m.componentDidMount=="function"&&(n.flags|=4194308)}function ho(n,r){try{var l="",f=r;do l+=he(f),f=f.return;while(f);var m=l}catch(y){m=`
Error generating stack: `+y.message+`
`+y.stack}return{value:n,source:r,stack:m,digest:null}}function vf(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function xf(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var Bv=typeof WeakMap=="function"?WeakMap:Map;function um(n,r,l){l=sr(-1,l),l.tag=3,l.payload={element:null};var f=r.value;return l.callback=function(){su||(su=!0,Uf=f),xf(n,r)},l}function cm(n,r,l){l=sr(-1,l),l.tag=3;var f=n.type.getDerivedStateFromError;if(typeof f=="function"){var m=r.value;l.payload=function(){return f(m)},l.callback=function(){xf(n,r)}}var y=n.stateNode;return y!==null&&typeof y.componentDidCatch=="function"&&(l.callback=function(){xf(n,r),typeof f!="function"&&(Or===null?Or=new Set([this]):Or.add(this));var w=r.stack;this.componentDidCatch(r.value,{componentStack:w!==null?w:""})}),l}function fm(n,r,l){var f=n.pingCache;if(f===null){f=n.pingCache=new Bv;var m=new Set;f.set(r,m)}else m=f.get(r),m===void 0&&(m=new Set,f.set(r,m));m.has(l)||(m.add(l),n=ex.bind(null,n,r,l),r.then(n,n))}function hm(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function dm(n,r,l,f,m){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=sr(-1,1),r.tag=2,Ur(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=m,n)}var Hv=L.ReactCurrentOwner,Bn=!1;function Ln(n,r,l,f){r.child=n===null?Dp(r,null,l,f):lo(r,n.child,l,f)}function pm(n,r,l,f,m){l=l.render;var y=r.ref;return co(r,m),f=cf(n,r,l,f,y,m),l=ff(),n!==null&&!Bn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~m,or(n,r,m)):(Ft&&l&&Xc(r),r.flags|=1,Ln(n,r,f,m),r.child)}function mm(n,r,l,f,m){if(n===null){var y=l.type;return typeof y=="function"&&!Hf(y)&&y.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=y,gm(n,r,y,f,m)):(n=fu(l.type,null,f,r,r.mode,m),n.ref=r.ref,n.return=r,r.child=n)}if(y=n.child,(n.lanes&m)===0){var w=y.memoizedProps;if(l=l.compare,l=l!==null?l:ma,l(w,f)&&n.ref===r.ref)return or(n,r,m)}return r.flags|=1,n=Br(y,f),n.ref=r.ref,n.return=r,r.child=n}function gm(n,r,l,f,m){if(n!==null){var y=n.memoizedProps;if(ma(y,f)&&n.ref===r.ref)if(Bn=!1,r.pendingProps=f=y,(n.lanes&m)!==0)(n.flags&131072)!==0&&(Bn=!0);else return r.lanes=n.lanes,or(n,r,m)}return yf(n,r,l,f,m)}function _m(n,r,l){var f=r.pendingProps,m=f.children,y=n!==null?n.memoizedState:null;if(f.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Nt(mo,ni),ni|=l;else{if((l&1073741824)===0)return n=y!==null?y.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Nt(mo,ni),ni|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=y!==null?y.baseLanes:l,Nt(mo,ni),ni|=f}else y!==null?(f=y.baseLanes|l,r.memoizedState=null):f=l,Nt(mo,ni),ni|=f;return Ln(n,r,m,l),r.child}function vm(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function yf(n,r,l,f,m){var y=zn(l)?ps:yn.current;return y=ro(r,y),co(r,m),l=cf(n,r,l,f,y,m),f=ff(),n!==null&&!Bn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~m,or(n,r,m)):(Ft&&f&&Xc(r),r.flags|=1,Ln(n,r,l,m),r.child)}function xm(n,r,l,f,m){if(zn(l)){var y=!0;Ol(r)}else y=!1;if(co(r,m),r.stateNode===null)eu(n,r),am(r,l,f),_f(r,l,f,m),f=!0;else if(n===null){var w=r.stateNode,k=r.memoizedProps;w.props=k;var z=w.context,re=l.contextType;typeof re=="object"&&re!==null?re=gi(re):(re=zn(l)?ps:yn.current,re=ro(r,re));var pe=l.getDerivedStateFromProps,_e=typeof pe=="function"||typeof w.getSnapshotBeforeUpdate=="function";_e||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(k!==f||z!==re)&&lm(r,w,f,re),Dr=!1;var de=r.memoizedState;w.state=de,jl(r,f,w,m),z=r.memoizedState,k!==f||de!==z||kn.current||Dr?(typeof pe=="function"&&(gf(r,l,pe,f),z=r.memoizedState),(k=Dr||om(r,l,k,f,de,z,re))?(_e||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(r.flags|=4194308)):(typeof w.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=f,r.memoizedState=z),w.props=f,w.state=z,w.context=re,f=k):(typeof w.componentDidMount=="function"&&(r.flags|=4194308),f=!1)}else{w=r.stateNode,Ip(n,r),k=r.memoizedProps,re=r.type===r.elementType?k:bi(r.type,k),w.props=re,_e=r.pendingProps,de=w.context,z=l.contextType,typeof z=="object"&&z!==null?z=gi(z):(z=zn(l)?ps:yn.current,z=ro(r,z));var Le=l.getDerivedStateFromProps;(pe=typeof Le=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(k!==_e||de!==z)&&lm(r,w,f,z),Dr=!1,de=r.memoizedState,w.state=de,jl(r,f,w,m);var Ie=r.memoizedState;k!==_e||de!==Ie||kn.current||Dr?(typeof Le=="function"&&(gf(r,l,Le,f),Ie=r.memoizedState),(re=Dr||om(r,l,re,f,de,Ie,z)||!1)?(pe||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(f,Ie,z),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(f,Ie,z)),typeof w.componentDidUpdate=="function"&&(r.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof w.componentDidUpdate!="function"||k===n.memoizedProps&&de===n.memoizedState||(r.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&de===n.memoizedState||(r.flags|=1024),r.memoizedProps=f,r.memoizedState=Ie),w.props=f,w.state=Ie,w.context=z,f=re):(typeof w.componentDidUpdate!="function"||k===n.memoizedProps&&de===n.memoizedState||(r.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&de===n.memoizedState||(r.flags|=1024),f=!1)}return Sf(n,r,l,f,y,m)}function Sf(n,r,l,f,m,y){vm(n,r);var w=(r.flags&128)!==0;if(!f&&!w)return m&&wp(r,l,!1),or(n,r,y);f=r.stateNode,Hv.current=r;var k=w&&typeof l.getDerivedStateFromError!="function"?null:f.render();return r.flags|=1,n!==null&&w?(r.child=lo(r,n.child,null,y),r.child=lo(r,null,k,y)):Ln(n,r,k,y),r.memoizedState=f.state,m&&wp(r,l,!0),r.child}function ym(n){var r=n.stateNode;r.pendingContext?Mp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Mp(n,r.context,!1),rf(n,r.containerInfo)}function Sm(n,r,l,f,m){return ao(),Zc(m),r.flags|=256,Ln(n,r,l,f),r.child}var Mf={dehydrated:null,treeContext:null,retryLane:0};function Ef(n){return{baseLanes:n,cachePool:null,transitions:null}}function Mm(n,r,l){var f=r.pendingProps,m=zt.current,y=!1,w=(r.flags&128)!==0,k;if((k=w)||(k=n!==null&&n.memoizedState===null?!1:(m&2)!==0),k?(y=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(m|=1),Nt(zt,m&1),n===null)return $c(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(w=f.children,n=f.fallback,y?(f=r.mode,y=r.child,w={mode:"hidden",children:w},(f&1)===0&&y!==null?(y.childLanes=0,y.pendingProps=w):y=hu(w,f,0,null),n=ws(n,f,l,null),y.return=r,n.return=r,y.sibling=n,r.child=y,r.child.memoizedState=Ef(l),r.memoizedState=Mf,n):wf(r,w));if(m=n.memoizedState,m!==null&&(k=m.dehydrated,k!==null))return Vv(n,r,w,f,k,m,l);if(y){y=f.fallback,w=r.mode,m=n.child,k=m.sibling;var z={mode:"hidden",children:f.children};return(w&1)===0&&r.child!==m?(f=r.child,f.childLanes=0,f.pendingProps=z,r.deletions=null):(f=Br(m,z),f.subtreeFlags=m.subtreeFlags&14680064),k!==null?y=Br(k,y):(y=ws(y,w,l,null),y.flags|=2),y.return=r,f.return=r,f.sibling=y,r.child=f,f=y,y=r.child,w=n.child.memoizedState,w=w===null?Ef(l):{baseLanes:w.baseLanes|l,cachePool:null,transitions:w.transitions},y.memoizedState=w,y.childLanes=n.childLanes&~l,r.memoizedState=Mf,f}return y=n.child,n=y.sibling,f=Br(y,{mode:"visible",children:f.children}),(r.mode&1)===0&&(f.lanes=l),f.return=r,f.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=f,r.memoizedState=null,f}function wf(n,r){return r=hu({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Jl(n,r,l,f){return f!==null&&Zc(f),lo(r,n.child,null,l),n=wf(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Vv(n,r,l,f,m,y,w){if(l)return r.flags&256?(r.flags&=-257,f=vf(Error(t(422))),Jl(n,r,w,f)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(y=f.fallback,m=r.mode,f=hu({mode:"visible",children:f.children},m,0,null),y=ws(y,m,w,null),y.flags|=2,f.return=r,y.return=r,f.sibling=y,r.child=f,(r.mode&1)!==0&&lo(r,n.child,null,w),r.child.memoizedState=Ef(w),r.memoizedState=Mf,y);if((r.mode&1)===0)return Jl(n,r,w,null);if(m.data==="$!"){if(f=m.nextSibling&&m.nextSibling.dataset,f)var k=f.dgst;return f=k,y=Error(t(419)),f=vf(y,f,void 0),Jl(n,r,w,f)}if(k=(w&n.childLanes)!==0,Bn||k){if(f=cn,f!==null){switch(w&-w){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(f.suspendedLanes|w))!==0?0:m,m!==0&&m!==y.retryLane&&(y.retryLane=m,rr(n,m),Ni(f,n,m,-1))}return Bf(),f=vf(Error(t(421))),Jl(n,r,w,f)}return m.data==="$?"?(r.flags|=128,r.child=n.child,r=tx.bind(null,n),m._reactRetry=r,null):(n=y.treeContext,ti=br(m.nextSibling),ei=r,Ft=!0,Ri=null,n!==null&&(pi[mi++]=nr,pi[mi++]=ir,pi[mi++]=ms,nr=n.id,ir=n.overflow,ms=r),r=wf(r,f.children),r.flags|=4096,r)}function Em(n,r,l){n.lanes|=r;var f=n.alternate;f!==null&&(f.lanes|=r),ef(n.return,r,l)}function Tf(n,r,l,f,m){var y=n.memoizedState;y===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:m}:(y.isBackwards=r,y.rendering=null,y.renderingStartTime=0,y.last=f,y.tail=l,y.tailMode=m)}function wm(n,r,l){var f=r.pendingProps,m=f.revealOrder,y=f.tail;if(Ln(n,r,f.children,l),f=zt.current,(f&2)!==0)f=f&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Em(n,l,r);else if(n.tag===19)Em(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}f&=1}if(Nt(zt,f),(r.mode&1)===0)r.memoizedState=null;else switch(m){case"forwards":for(l=r.child,m=null;l!==null;)n=l.alternate,n!==null&&Xl(n)===null&&(m=l),l=l.sibling;l=m,l===null?(m=r.child,r.child=null):(m=l.sibling,l.sibling=null),Tf(r,!1,m,l,y);break;case"backwards":for(l=null,m=r.child,r.child=null;m!==null;){if(n=m.alternate,n!==null&&Xl(n)===null){r.child=m;break}n=m.sibling,m.sibling=l,l=m,m=n}Tf(r,!0,l,null,y);break;case"together":Tf(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function eu(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function or(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),ys|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=Br(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=Br(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function Gv(n,r,l){switch(r.tag){case 3:ym(r),ao();break;case 5:kp(r);break;case 1:zn(r.type)&&Ol(r);break;case 4:rf(r,r.stateNode.containerInfo);break;case 10:var f=r.type._context,m=r.memoizedProps.value;Nt(Vl,f._currentValue),f._currentValue=m;break;case 13:if(f=r.memoizedState,f!==null)return f.dehydrated!==null?(Nt(zt,zt.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?Mm(n,r,l):(Nt(zt,zt.current&1),n=or(n,r,l),n!==null?n.sibling:null);Nt(zt,zt.current&1);break;case 19:if(f=(l&r.childLanes)!==0,(n.flags&128)!==0){if(f)return wm(n,r,l);r.flags|=128}if(m=r.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Nt(zt,zt.current),f)break;return null;case 22:case 23:return r.lanes=0,_m(n,r,l)}return or(n,r,l)}var Tm,Cf,Cm,Am;Tm=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Cf=function(){},Cm=function(n,r,l,f){var m=n.memoizedProps;if(m!==f){n=r.stateNode,vs(Hi.current);var y=null;switch(l){case"input":m=je(n,m),f=je(n,f),y=[];break;case"select":m=X({},m,{value:void 0}),f=X({},f,{value:void 0}),y=[];break;case"textarea":m=ve(n,m),f=ve(n,f),y=[];break;default:typeof m.onClick!="function"&&typeof f.onClick=="function"&&(n.onclick=Dl)}nt(l,f);var w;l=null;for(re in m)if(!f.hasOwnProperty(re)&&m.hasOwnProperty(re)&&m[re]!=null)if(re==="style"){var k=m[re];for(w in k)k.hasOwnProperty(w)&&(l||(l={}),l[w]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(s.hasOwnProperty(re)?y||(y=[]):(y=y||[]).push(re,null));for(re in f){var z=f[re];if(k=m!=null?m[re]:void 0,f.hasOwnProperty(re)&&z!==k&&(z!=null||k!=null))if(re==="style")if(k){for(w in k)!k.hasOwnProperty(w)||z&&z.hasOwnProperty(w)||(l||(l={}),l[w]="");for(w in z)z.hasOwnProperty(w)&&k[w]!==z[w]&&(l||(l={}),l[w]=z[w])}else l||(y||(y=[]),y.push(re,l)),l=z;else re==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,k=k?k.__html:void 0,z!=null&&k!==z&&(y=y||[]).push(re,z)):re==="children"?typeof z!="string"&&typeof z!="number"||(y=y||[]).push(re,""+z):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(s.hasOwnProperty(re)?(z!=null&&re==="onScroll"&&Dt("scroll",n),y||k===z||(y=[])):(y=y||[]).push(re,z))}l&&(y=y||[]).push("style",l);var re=y;(r.updateQueue=re)&&(r.flags|=4)}},Am=function(n,r,l,f){l!==f&&(r.flags|=4)};function La(n,r){if(!Ft)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:f.sibling=null}}function Mn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,f=0;if(r)for(var m=n.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags&14680064,f|=m.flags&14680064,m.return=n,m=m.sibling;else for(m=n.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags,f|=m.flags,m.return=n,m=m.sibling;return n.subtreeFlags|=f,n.childLanes=l,r}function Wv(n,r,l){var f=r.pendingProps;switch(Yc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mn(r),null;case 1:return zn(r.type)&&Il(),Mn(r),null;case 3:return f=r.stateNode,fo(),Ut(kn),Ut(yn),af(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(n===null||n.child===null)&&(Bl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Ri!==null&&(Ff(Ri),Ri=null))),Cf(n,r),Mn(r),null;case 5:sf(r);var m=vs(Ta.current);if(l=r.type,n!==null&&r.stateNode!=null)Cm(n,r,l,f,m),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!f){if(r.stateNode===null)throw Error(t(166));return Mn(r),null}if(n=vs(Hi.current),Bl(r)){f=r.stateNode,l=r.type;var y=r.memoizedProps;switch(f[Bi]=r,f[ya]=y,n=(r.mode&1)!==0,l){case"dialog":Dt("cancel",f),Dt("close",f);break;case"iframe":case"object":case"embed":Dt("load",f);break;case"video":case"audio":for(m=0;m<_a.length;m++)Dt(_a[m],f);break;case"source":Dt("error",f);break;case"img":case"image":case"link":Dt("error",f),Dt("load",f);break;case"details":Dt("toggle",f);break;case"input":tt(f,y),Dt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!y.multiple},Dt("invalid",f);break;case"textarea":ge(f,y),Dt("invalid",f)}nt(l,y),m=null;for(var w in y)if(y.hasOwnProperty(w)){var k=y[w];w==="children"?typeof k=="string"?f.textContent!==k&&(y.suppressHydrationWarning!==!0&&Nl(f.textContent,k,n),m=["children",k]):typeof k=="number"&&f.textContent!==""+k&&(y.suppressHydrationWarning!==!0&&Nl(f.textContent,k,n),m=["children",""+k]):s.hasOwnProperty(w)&&k!=null&&w==="onScroll"&&Dt("scroll",f)}switch(l){case"input":ft(f),rt(f,y,!0);break;case"textarea":ft(f),Ve(f);break;case"select":case"option":break;default:typeof y.onClick=="function"&&(f.onclick=Dl)}f=m,r.updateQueue=f,f!==null&&(r.flags|=4)}else{w=m.nodeType===9?m:m.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Ae(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof f.is=="string"?n=w.createElement(l,{is:f.is}):(n=w.createElement(l),l==="select"&&(w=n,f.multiple?w.multiple=!0:f.size&&(w.size=f.size))):n=w.createElementNS(n,l),n[Bi]=r,n[ya]=f,Tm(n,r,!1,!1),r.stateNode=n;e:{switch(w=_t(l,f),l){case"dialog":Dt("cancel",n),Dt("close",n),m=f;break;case"iframe":case"object":case"embed":Dt("load",n),m=f;break;case"video":case"audio":for(m=0;m<_a.length;m++)Dt(_a[m],n);m=f;break;case"source":Dt("error",n),m=f;break;case"img":case"image":case"link":Dt("error",n),Dt("load",n),m=f;break;case"details":Dt("toggle",n),m=f;break;case"input":tt(n,f),m=je(n,f),Dt("invalid",n);break;case"option":m=f;break;case"select":n._wrapperState={wasMultiple:!!f.multiple},m=X({},f,{value:void 0}),Dt("invalid",n);break;case"textarea":ge(n,f),m=ve(n,f),Dt("invalid",n);break;default:m=f}nt(l,m),k=m;for(y in k)if(k.hasOwnProperty(y)){var z=k[y];y==="style"?We(n,z):y==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&st(n,z)):y==="children"?typeof z=="string"?(l!=="textarea"||z!=="")&&me(n,z):typeof z=="number"&&me(n,""+z):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(s.hasOwnProperty(y)?z!=null&&y==="onScroll"&&Dt("scroll",n):z!=null&&T(n,y,z,w))}switch(l){case"input":ft(n),rt(n,f,!1);break;case"textarea":ft(n),Ve(n);break;case"option":f.value!=null&&n.setAttribute("value",""+Re(f.value));break;case"select":n.multiple=!!f.multiple,y=f.value,y!=null?ie(n,!!f.multiple,y,!1):f.defaultValue!=null&&ie(n,!!f.multiple,f.defaultValue,!0);break;default:typeof m.onClick=="function"&&(n.onclick=Dl)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Mn(r),null;case 6:if(n&&r.stateNode!=null)Am(n,r,n.memoizedProps,f);else{if(typeof f!="string"&&r.stateNode===null)throw Error(t(166));if(l=vs(Ta.current),vs(Hi.current),Bl(r)){if(f=r.stateNode,l=r.memoizedProps,f[Bi]=r,(y=f.nodeValue!==l)&&(n=ei,n!==null))switch(n.tag){case 3:Nl(f.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Nl(f.nodeValue,l,(n.mode&1)!==0)}y&&(r.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[Bi]=r,r.stateNode=f}return Mn(r),null;case 13:if(Ut(zt),f=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ft&&ti!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Lp(),ao(),r.flags|=98560,y=!1;else if(y=Bl(r),f!==null&&f.dehydrated!==null){if(n===null){if(!y)throw Error(t(318));if(y=r.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(t(317));y[Bi]=r}else ao(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Mn(r),y=!1}else Ri!==null&&(Ff(Ri),Ri=null),y=!0;if(!y)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(f=f!==null,f!==(n!==null&&n.memoizedState!==null)&&f&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(zt.current&1)!==0?rn===0&&(rn=3):Bf())),r.updateQueue!==null&&(r.flags|=4),Mn(r),null);case 4:return fo(),Cf(n,r),n===null&&va(r.stateNode.containerInfo),Mn(r),null;case 10:return Jc(r.type._context),Mn(r),null;case 17:return zn(r.type)&&Il(),Mn(r),null;case 19:if(Ut(zt),y=r.memoizedState,y===null)return Mn(r),null;if(f=(r.flags&128)!==0,w=y.rendering,w===null)if(f)La(y,!1);else{if(rn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(w=Xl(n),w!==null){for(r.flags|=128,La(y,!1),f=w.updateQueue,f!==null&&(r.updateQueue=f,r.flags|=4),r.subtreeFlags=0,f=l,l=r.child;l!==null;)y=l,n=f,y.flags&=14680066,w=y.alternate,w===null?(y.childLanes=0,y.lanes=n,y.child=null,y.subtreeFlags=0,y.memoizedProps=null,y.memoizedState=null,y.updateQueue=null,y.dependencies=null,y.stateNode=null):(y.childLanes=w.childLanes,y.lanes=w.lanes,y.child=w.child,y.subtreeFlags=0,y.deletions=null,y.memoizedProps=w.memoizedProps,y.memoizedState=w.memoizedState,y.updateQueue=w.updateQueue,y.type=w.type,n=w.dependencies,y.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Nt(zt,zt.current&1|2),r.child}n=n.sibling}y.tail!==null&&Pe()>go&&(r.flags|=128,f=!0,La(y,!1),r.lanes=4194304)}else{if(!f)if(n=Xl(w),n!==null){if(r.flags|=128,f=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),La(y,!0),y.tail===null&&y.tailMode==="hidden"&&!w.alternate&&!Ft)return Mn(r),null}else 2*Pe()-y.renderingStartTime>go&&l!==1073741824&&(r.flags|=128,f=!0,La(y,!1),r.lanes=4194304);y.isBackwards?(w.sibling=r.child,r.child=w):(l=y.last,l!==null?l.sibling=w:r.child=w,y.last=w)}return y.tail!==null?(r=y.tail,y.rendering=r,y.tail=r.sibling,y.renderingStartTime=Pe(),r.sibling=null,l=zt.current,Nt(zt,f?l&1|2:l&1),r):(Mn(r),null);case 22:case 23:return zf(),f=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==f&&(r.flags|=8192),f&&(r.mode&1)!==0?(ni&1073741824)!==0&&(Mn(r),r.subtreeFlags&6&&(r.flags|=8192)):Mn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function jv(n,r){switch(Yc(r),r.tag){case 1:return zn(r.type)&&Il(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return fo(),Ut(kn),Ut(yn),af(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return sf(r),null;case 13:if(Ut(zt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));ao()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Ut(zt),null;case 4:return fo(),null;case 10:return Jc(r.type._context),null;case 22:case 23:return zf(),null;case 24:return null;default:return null}}var tu=!1,En=!1,Xv=typeof WeakSet=="function"?WeakSet:Set,Ne=null;function po(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){Xt(n,r,f)}else l.current=null}function Af(n,r,l){try{l()}catch(f){Xt(n,r,f)}}var Rm=!1;function Yv(n,r){if(kc=Sl,n=op(),Lc(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var m=f.anchorOffset,y=f.focusNode;f=f.focusOffset;try{l.nodeType,y.nodeType}catch{l=null;break e}var w=0,k=-1,z=-1,re=0,pe=0,_e=n,de=null;t:for(;;){for(var Le;_e!==l||m!==0&&_e.nodeType!==3||(k=w+m),_e!==y||f!==0&&_e.nodeType!==3||(z=w+f),_e.nodeType===3&&(w+=_e.nodeValue.length),(Le=_e.firstChild)!==null;)de=_e,_e=Le;for(;;){if(_e===n)break t;if(de===l&&++re===m&&(k=w),de===y&&++pe===f&&(z=w),(Le=_e.nextSibling)!==null)break;_e=de,de=_e.parentNode}_e=Le}l=k===-1||z===-1?null:{start:k,end:z}}else l=null}l=l||{start:0,end:0}}else l=null;for(zc={focusedElem:n,selectionRange:l},Sl=!1,Ne=r;Ne!==null;)if(r=Ne,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Ne=n;else for(;Ne!==null;){r=Ne;try{var Ie=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Ie!==null){var Fe=Ie.memoizedProps,$t=Ie.memoizedState,Z=r.stateNode,W=Z.getSnapshotBeforeUpdate(r.elementType===r.type?Fe:bi(r.type,Fe),$t);Z.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var ee=r.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ye){Xt(r,r.return,ye)}if(n=r.sibling,n!==null){n.return=r.return,Ne=n;break}Ne=r.return}return Ie=Rm,Rm=!1,Ie}function Pa(n,r,l){var f=r.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var m=f=f.next;do{if((m.tag&n)===n){var y=m.destroy;m.destroy=void 0,y!==void 0&&Af(r,l,y)}m=m.next}while(m!==f)}}function nu(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var f=l.create;l.destroy=f()}l=l.next}while(l!==r)}}function Rf(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function bm(n){var r=n.alternate;r!==null&&(n.alternate=null,bm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Bi],delete r[ya],delete r[Gc],delete r[bv],delete r[Lv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Lm(n){return n.tag===5||n.tag===3||n.tag===4}function Pm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Lm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function bf(n,r,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=Dl));else if(f!==4&&(n=n.child,n!==null))for(bf(n,r,l),n=n.sibling;n!==null;)bf(n,r,l),n=n.sibling}function Lf(n,r,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(f!==4&&(n=n.child,n!==null))for(Lf(n,r,l),n=n.sibling;n!==null;)Lf(n,r,l),n=n.sibling}var pn=null,Li=!1;function Ir(n,r,l){for(l=l.child;l!==null;)Nm(n,r,l),l=l.sibling}function Nm(n,r,l){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(On,l)}catch{}switch(l.tag){case 5:En||po(l,r);case 6:var f=pn,m=Li;pn=null,Ir(n,r,l),pn=f,Li=m,pn!==null&&(Li?(n=pn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):pn.removeChild(l.stateNode));break;case 18:pn!==null&&(Li?(n=pn,l=l.stateNode,n.nodeType===8?Vc(n.parentNode,l):n.nodeType===1&&Vc(n,l),ua(n)):Vc(pn,l.stateNode));break;case 4:f=pn,m=Li,pn=l.stateNode.containerInfo,Li=!0,Ir(n,r,l),pn=f,Li=m;break;case 0:case 11:case 14:case 15:if(!En&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){m=f=f.next;do{var y=m,w=y.destroy;y=y.tag,w!==void 0&&((y&2)!==0||(y&4)!==0)&&Af(l,r,w),m=m.next}while(m!==f)}Ir(n,r,l);break;case 1:if(!En&&(po(l,r),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(k){Xt(l,r,k)}Ir(n,r,l);break;case 21:Ir(n,r,l);break;case 22:l.mode&1?(En=(f=En)||l.memoizedState!==null,Ir(n,r,l),En=f):Ir(n,r,l);break;default:Ir(n,r,l)}}function Dm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new Xv),r.forEach(function(f){var m=nx.bind(null,n,f);l.has(f)||(l.add(f),f.then(m,m))})}}function Pi(n,r){var l=r.deletions;if(l!==null)for(var f=0;f<l.length;f++){var m=l[f];try{var y=n,w=r,k=w;e:for(;k!==null;){switch(k.tag){case 5:pn=k.stateNode,Li=!1;break e;case 3:pn=k.stateNode.containerInfo,Li=!0;break e;case 4:pn=k.stateNode.containerInfo,Li=!0;break e}k=k.return}if(pn===null)throw Error(t(160));Nm(y,w,m),pn=null,Li=!1;var z=m.alternate;z!==null&&(z.return=null),m.return=null}catch(re){Xt(m,r,re)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Um(r,n),r=r.sibling}function Um(n,r){var l=n.alternate,f=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Pi(r,n),Gi(n),f&4){try{Pa(3,n,n.return),nu(3,n)}catch(Fe){Xt(n,n.return,Fe)}try{Pa(5,n,n.return)}catch(Fe){Xt(n,n.return,Fe)}}break;case 1:Pi(r,n),Gi(n),f&512&&l!==null&&po(l,l.return);break;case 5:if(Pi(r,n),Gi(n),f&512&&l!==null&&po(l,l.return),n.flags&32){var m=n.stateNode;try{me(m,"")}catch(Fe){Xt(n,n.return,Fe)}}if(f&4&&(m=n.stateNode,m!=null)){var y=n.memoizedProps,w=l!==null?l.memoizedProps:y,k=n.type,z=n.updateQueue;if(n.updateQueue=null,z!==null)try{k==="input"&&y.type==="radio"&&y.name!=null&&He(m,y),_t(k,w);var re=_t(k,y);for(w=0;w<z.length;w+=2){var pe=z[w],_e=z[w+1];pe==="style"?We(m,_e):pe==="dangerouslySetInnerHTML"?st(m,_e):pe==="children"?me(m,_e):T(m,pe,_e,re)}switch(k){case"input":At(m,y);break;case"textarea":xe(m,y);break;case"select":var de=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!y.multiple;var Le=y.value;Le!=null?ie(m,!!y.multiple,Le,!1):de!==!!y.multiple&&(y.defaultValue!=null?ie(m,!!y.multiple,y.defaultValue,!0):ie(m,!!y.multiple,y.multiple?[]:"",!1))}m[ya]=y}catch(Fe){Xt(n,n.return,Fe)}}break;case 6:if(Pi(r,n),Gi(n),f&4){if(n.stateNode===null)throw Error(t(162));m=n.stateNode,y=n.memoizedProps;try{m.nodeValue=y}catch(Fe){Xt(n,n.return,Fe)}}break;case 3:if(Pi(r,n),Gi(n),f&4&&l!==null&&l.memoizedState.isDehydrated)try{ua(r.containerInfo)}catch(Fe){Xt(n,n.return,Fe)}break;case 4:Pi(r,n),Gi(n);break;case 13:Pi(r,n),Gi(n),m=n.child,m.flags&8192&&(y=m.memoizedState!==null,m.stateNode.isHidden=y,!y||m.alternate!==null&&m.alternate.memoizedState!==null||(Df=Pe())),f&4&&Dm(n);break;case 22:if(pe=l!==null&&l.memoizedState!==null,n.mode&1?(En=(re=En)||pe,Pi(r,n),En=re):Pi(r,n),Gi(n),f&8192){if(re=n.memoizedState!==null,(n.stateNode.isHidden=re)&&!pe&&(n.mode&1)!==0)for(Ne=n,pe=n.child;pe!==null;){for(_e=Ne=pe;Ne!==null;){switch(de=Ne,Le=de.child,de.tag){case 0:case 11:case 14:case 15:Pa(4,de,de.return);break;case 1:po(de,de.return);var Ie=de.stateNode;if(typeof Ie.componentWillUnmount=="function"){f=de,l=de.return;try{r=f,Ie.props=r.memoizedProps,Ie.state=r.memoizedState,Ie.componentWillUnmount()}catch(Fe){Xt(f,l,Fe)}}break;case 5:po(de,de.return);break;case 22:if(de.memoizedState!==null){Fm(_e);continue}}Le!==null?(Le.return=de,Ne=Le):Fm(_e)}pe=pe.sibling}e:for(pe=null,_e=n;;){if(_e.tag===5){if(pe===null){pe=_e;try{m=_e.stateNode,re?(y=m.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none"):(k=_e.stateNode,z=_e.memoizedProps.style,w=z!=null&&z.hasOwnProperty("display")?z.display:null,k.style.display=Je("display",w))}catch(Fe){Xt(n,n.return,Fe)}}}else if(_e.tag===6){if(pe===null)try{_e.stateNode.nodeValue=re?"":_e.memoizedProps}catch(Fe){Xt(n,n.return,Fe)}}else if((_e.tag!==22&&_e.tag!==23||_e.memoizedState===null||_e===n)&&_e.child!==null){_e.child.return=_e,_e=_e.child;continue}if(_e===n)break e;for(;_e.sibling===null;){if(_e.return===null||_e.return===n)break e;pe===_e&&(pe=null),_e=_e.return}pe===_e&&(pe=null),_e.sibling.return=_e.return,_e=_e.sibling}}break;case 19:Pi(r,n),Gi(n),f&4&&Dm(n);break;case 21:break;default:Pi(r,n),Gi(n)}}function Gi(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(Lm(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var m=f.stateNode;f.flags&32&&(me(m,""),f.flags&=-33);var y=Pm(n);Lf(n,y,m);break;case 3:case 4:var w=f.stateNode.containerInfo,k=Pm(n);bf(n,k,w);break;default:throw Error(t(161))}}catch(z){Xt(n,n.return,z)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function qv(n,r,l){Ne=n,Im(n)}function Im(n,r,l){for(var f=(n.mode&1)!==0;Ne!==null;){var m=Ne,y=m.child;if(m.tag===22&&f){var w=m.memoizedState!==null||tu;if(!w){var k=m.alternate,z=k!==null&&k.memoizedState!==null||En;k=tu;var re=En;if(tu=w,(En=z)&&!re)for(Ne=m;Ne!==null;)w=Ne,z=w.child,w.tag===22&&w.memoizedState!==null?km(m):z!==null?(z.return=w,Ne=z):km(m);for(;y!==null;)Ne=y,Im(y),y=y.sibling;Ne=m,tu=k,En=re}Om(n)}else(m.subtreeFlags&8772)!==0&&y!==null?(y.return=m,Ne=y):Om(n)}}function Om(n){for(;Ne!==null;){var r=Ne;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:En||nu(5,r);break;case 1:var f=r.stateNode;if(r.flags&4&&!En)if(l===null)f.componentDidMount();else{var m=r.elementType===r.type?l.memoizedProps:bi(r.type,l.memoizedProps);f.componentDidUpdate(m,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var y=r.updateQueue;y!==null&&Fp(r,y,f);break;case 3:var w=r.updateQueue;if(w!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}Fp(r,w,l)}break;case 5:var k=r.stateNode;if(l===null&&r.flags&4){l=k;var z=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&l.focus();break;case"img":z.src&&(l.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var re=r.alternate;if(re!==null){var pe=re.memoizedState;if(pe!==null){var _e=pe.dehydrated;_e!==null&&ua(_e)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}En||r.flags&512&&Rf(r)}catch(de){Xt(r,r.return,de)}}if(r===n){Ne=null;break}if(l=r.sibling,l!==null){l.return=r.return,Ne=l;break}Ne=r.return}}function Fm(n){for(;Ne!==null;){var r=Ne;if(r===n){Ne=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Ne=l;break}Ne=r.return}}function km(n){for(;Ne!==null;){var r=Ne;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{nu(4,r)}catch(z){Xt(r,l,z)}break;case 1:var f=r.stateNode;if(typeof f.componentDidMount=="function"){var m=r.return;try{f.componentDidMount()}catch(z){Xt(r,m,z)}}var y=r.return;try{Rf(r)}catch(z){Xt(r,y,z)}break;case 5:var w=r.return;try{Rf(r)}catch(z){Xt(r,w,z)}}}catch(z){Xt(r,r.return,z)}if(r===n){Ne=null;break}var k=r.sibling;if(k!==null){k.return=r.return,Ne=k;break}Ne=r.return}}var $v=Math.ceil,iu=L.ReactCurrentDispatcher,Pf=L.ReactCurrentOwner,vi=L.ReactCurrentBatchConfig,vt=0,cn=null,Qt=null,mn=0,ni=0,mo=Lr(0),rn=0,Na=null,ys=0,ru=0,Nf=0,Da=null,Hn=null,Df=0,go=1/0,ar=null,su=!1,Uf=null,Or=null,ou=!1,Fr=null,au=0,Ua=0,If=null,lu=-1,uu=0;function Pn(){return(vt&6)!==0?Pe():lu!==-1?lu:lu=Pe()}function kr(n){return(n.mode&1)===0?1:(vt&2)!==0&&mn!==0?mn&-mn:Nv.transition!==null?(uu===0&&(uu=vl()),uu):(n=Et,n!==0||(n=window.event,n=n===void 0?16:Bd(n.type)),n)}function Ni(n,r,l,f){if(50<Ua)throw Ua=0,If=null,Error(t(185));ra(n,l,f),((vt&2)===0||n!==cn)&&(n===cn&&((vt&2)===0&&(ru|=l),rn===4&&zr(n,mn)),Vn(n,f),l===1&&vt===0&&(r.mode&1)===0&&(go=Pe()+500,Fl&&Nr()))}function Vn(n,r){var l=n.callbackNode;Fn(n,r);var f=di(n,n===cn?mn:0);if(f===0)l!==null&&be(l),n.callbackNode=null,n.callbackPriority=0;else if(r=f&-f,n.callbackPriority!==r){if(l!=null&&be(l),r===1)n.tag===0?Pv(Bm.bind(null,n)):Tp(Bm.bind(null,n)),Av(function(){(vt&6)===0&&Nr()}),l=null;else{switch(Nd(f)){case 1:l=et;break;case 4:l=it;break;case 16:l=Pt;break;case 536870912:l=qt;break;default:l=Pt}l=qm(l,zm.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function zm(n,r){if(lu=-1,uu=0,(vt&6)!==0)throw Error(t(327));var l=n.callbackNode;if(_o()&&n.callbackNode!==l)return null;var f=di(n,n===cn?mn:0);if(f===0)return null;if((f&30)!==0||(f&n.expiredLanes)!==0||r)r=cu(n,f);else{r=f;var m=vt;vt|=2;var y=Vm();(cn!==n||mn!==r)&&(ar=null,go=Pe()+500,Ms(n,r));do try{Qv();break}catch(k){Hm(n,k)}while(!0);Qc(),iu.current=y,vt=m,Qt!==null?r=0:(cn=null,mn=0,r=rn)}if(r!==0){if(r===2&&(m=hs(n),m!==0&&(f=m,r=Of(n,m))),r===1)throw l=Na,Ms(n,0),zr(n,f),Vn(n,Pe()),l;if(r===6)zr(n,f);else{if(m=n.current.alternate,(f&30)===0&&!Zv(m)&&(r=cu(n,f),r===2&&(y=hs(n),y!==0&&(f=y,r=Of(n,y))),r===1))throw l=Na,Ms(n,0),zr(n,f),Vn(n,Pe()),l;switch(n.finishedWork=m,n.finishedLanes=f,r){case 0:case 1:throw Error(t(345));case 2:Es(n,Hn,ar);break;case 3:if(zr(n,f),(f&130023424)===f&&(r=Df+500-Pe(),10<r)){if(di(n,0)!==0)break;if(m=n.suspendedLanes,(m&f)!==f){Pn(),n.pingedLanes|=n.suspendedLanes&m;break}n.timeoutHandle=Hc(Es.bind(null,n,Hn,ar),r);break}Es(n,Hn,ar);break;case 4:if(zr(n,f),(f&4194240)===f)break;for(r=n.eventTimes,m=-1;0<f;){var w=31-bn(f);y=1<<w,w=r[w],w>m&&(m=w),f&=~y}if(f=m,f=Pe()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*$v(f/1960))-f,10<f){n.timeoutHandle=Hc(Es.bind(null,n,Hn,ar),f);break}Es(n,Hn,ar);break;case 5:Es(n,Hn,ar);break;default:throw Error(t(329))}}}return Vn(n,Pe()),n.callbackNode===l?zm.bind(null,n):null}function Of(n,r){var l=Da;return n.current.memoizedState.isDehydrated&&(Ms(n,r).flags|=256),n=cu(n,r),n!==2&&(r=Hn,Hn=l,r!==null&&Ff(r)),n}function Ff(n){Hn===null?Hn=n:Hn.push.apply(Hn,n)}function Zv(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var m=l[f],y=m.getSnapshot;m=m.value;try{if(!Ai(y(),m))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function zr(n,r){for(r&=~Nf,r&=~ru,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-bn(r),f=1<<l;n[l]=-1,r&=~f}}function Bm(n){if((vt&6)!==0)throw Error(t(327));_o();var r=di(n,0);if((r&1)===0)return Vn(n,Pe()),null;var l=cu(n,r);if(n.tag!==0&&l===2){var f=hs(n);f!==0&&(r=f,l=Of(n,f))}if(l===1)throw l=Na,Ms(n,0),zr(n,r),Vn(n,Pe()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Es(n,Hn,ar),Vn(n,Pe()),null}function kf(n,r){var l=vt;vt|=1;try{return n(r)}finally{vt=l,vt===0&&(go=Pe()+500,Fl&&Nr())}}function Ss(n){Fr!==null&&Fr.tag===0&&(vt&6)===0&&_o();var r=vt;vt|=1;var l=vi.transition,f=Et;try{if(vi.transition=null,Et=1,n)return n()}finally{Et=f,vi.transition=l,vt=r,(vt&6)===0&&Nr()}}function zf(){ni=mo.current,Ut(mo)}function Ms(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,Cv(l)),Qt!==null)for(l=Qt.return;l!==null;){var f=l;switch(Yc(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&Il();break;case 3:fo(),Ut(kn),Ut(yn),af();break;case 5:sf(f);break;case 4:fo();break;case 13:Ut(zt);break;case 19:Ut(zt);break;case 10:Jc(f.type._context);break;case 22:case 23:zf()}l=l.return}if(cn=n,Qt=n=Br(n.current,null),mn=ni=r,rn=0,Na=null,Nf=ru=ys=0,Hn=Da=null,_s!==null){for(r=0;r<_s.length;r++)if(l=_s[r],f=l.interleaved,f!==null){l.interleaved=null;var m=f.next,y=l.pending;if(y!==null){var w=y.next;y.next=m,f.next=w}l.pending=f}_s=null}return n}function Hm(n,r){do{var l=Qt;try{if(Qc(),Yl.current=Kl,ql){for(var f=Bt.memoizedState;f!==null;){var m=f.queue;m!==null&&(m.pending=null),f=f.next}ql=!1}if(xs=0,un=nn=Bt=null,Ca=!1,Aa=0,Pf.current=null,l===null||l.return===null){rn=1,Na=r,Qt=null;break}e:{var y=n,w=l.return,k=l,z=r;if(r=mn,k.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var re=z,pe=k,_e=pe.tag;if((pe.mode&1)===0&&(_e===0||_e===11||_e===15)){var de=pe.alternate;de?(pe.updateQueue=de.updateQueue,pe.memoizedState=de.memoizedState,pe.lanes=de.lanes):(pe.updateQueue=null,pe.memoizedState=null)}var Le=hm(w);if(Le!==null){Le.flags&=-257,dm(Le,w,k,y,r),Le.mode&1&&fm(y,re,r),r=Le,z=re;var Ie=r.updateQueue;if(Ie===null){var Fe=new Set;Fe.add(z),r.updateQueue=Fe}else Ie.add(z);break e}else{if((r&1)===0){fm(y,re,r),Bf();break e}z=Error(t(426))}}else if(Ft&&k.mode&1){var $t=hm(w);if($t!==null){($t.flags&65536)===0&&($t.flags|=256),dm($t,w,k,y,r),Zc(ho(z,k));break e}}y=z=ho(z,k),rn!==4&&(rn=2),Da===null?Da=[y]:Da.push(y),y=w;do{switch(y.tag){case 3:y.flags|=65536,r&=-r,y.lanes|=r;var Z=um(y,z,r);Op(y,Z);break e;case 1:k=z;var W=y.type,ee=y.stateNode;if((y.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(Or===null||!Or.has(ee)))){y.flags|=65536,r&=-r,y.lanes|=r;var ye=cm(y,k,r);Op(y,ye);break e}}y=y.return}while(y!==null)}Wm(l)}catch(ze){r=ze,Qt===l&&l!==null&&(Qt=l=l.return);continue}break}while(!0)}function Vm(){var n=iu.current;return iu.current=Kl,n===null?Kl:n}function Bf(){(rn===0||rn===3||rn===2)&&(rn=4),cn===null||(ys&268435455)===0&&(ru&268435455)===0||zr(cn,mn)}function cu(n,r){var l=vt;vt|=2;var f=Vm();(cn!==n||mn!==r)&&(ar=null,Ms(n,r));do try{Kv();break}catch(m){Hm(n,m)}while(!0);if(Qc(),vt=l,iu.current=f,Qt!==null)throw Error(t(261));return cn=null,mn=0,rn}function Kv(){for(;Qt!==null;)Gm(Qt)}function Qv(){for(;Qt!==null&&!Ge();)Gm(Qt)}function Gm(n){var r=Ym(n.alternate,n,ni);n.memoizedProps=n.pendingProps,r===null?Wm(n):Qt=r,Pf.current=null}function Wm(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=Wv(l,r,ni),l!==null){Qt=l;return}}else{if(l=jv(l,r),l!==null){l.flags&=32767,Qt=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{rn=6,Qt=null;return}}if(r=r.sibling,r!==null){Qt=r;return}Qt=r=n}while(r!==null);rn===0&&(rn=5)}function Es(n,r,l){var f=Et,m=vi.transition;try{vi.transition=null,Et=1,Jv(n,r,l,f)}finally{vi.transition=m,Et=f}return null}function Jv(n,r,l,f){do _o();while(Fr!==null);if((vt&6)!==0)throw Error(t(327));l=n.finishedWork;var m=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var y=l.lanes|l.childLanes;if(D_(n,y),n===cn&&(Qt=cn=null,mn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||ou||(ou=!0,qm(Pt,function(){return _o(),null})),y=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||y){y=vi.transition,vi.transition=null;var w=Et;Et=1;var k=vt;vt|=4,Pf.current=null,Yv(n,l),Um(l,n),xv(zc),Sl=!!kc,zc=kc=null,n.current=l,qv(l),Ze(),vt=k,Et=w,vi.transition=y}else n.current=l;if(ou&&(ou=!1,Fr=n,au=m),y=n.pendingLanes,y===0&&(Or=null),lt(l.stateNode),Vn(n,Pe()),r!==null)for(f=n.onRecoverableError,l=0;l<r.length;l++)m=r[l],f(m.value,{componentStack:m.stack,digest:m.digest});if(su)throw su=!1,n=Uf,Uf=null,n;return(au&1)!==0&&n.tag!==0&&_o(),y=n.pendingLanes,(y&1)!==0?n===If?Ua++:(Ua=0,If=n):Ua=0,Nr(),null}function _o(){if(Fr!==null){var n=Nd(au),r=vi.transition,l=Et;try{if(vi.transition=null,Et=16>n?16:n,Fr===null)var f=!1;else{if(n=Fr,Fr=null,au=0,(vt&6)!==0)throw Error(t(331));var m=vt;for(vt|=4,Ne=n.current;Ne!==null;){var y=Ne,w=y.child;if((Ne.flags&16)!==0){var k=y.deletions;if(k!==null){for(var z=0;z<k.length;z++){var re=k[z];for(Ne=re;Ne!==null;){var pe=Ne;switch(pe.tag){case 0:case 11:case 15:Pa(8,pe,y)}var _e=pe.child;if(_e!==null)_e.return=pe,Ne=_e;else for(;Ne!==null;){pe=Ne;var de=pe.sibling,Le=pe.return;if(bm(pe),pe===re){Ne=null;break}if(de!==null){de.return=Le,Ne=de;break}Ne=Le}}}var Ie=y.alternate;if(Ie!==null){var Fe=Ie.child;if(Fe!==null){Ie.child=null;do{var $t=Fe.sibling;Fe.sibling=null,Fe=$t}while(Fe!==null)}}Ne=y}}if((y.subtreeFlags&2064)!==0&&w!==null)w.return=y,Ne=w;else e:for(;Ne!==null;){if(y=Ne,(y.flags&2048)!==0)switch(y.tag){case 0:case 11:case 15:Pa(9,y,y.return)}var Z=y.sibling;if(Z!==null){Z.return=y.return,Ne=Z;break e}Ne=y.return}}var W=n.current;for(Ne=W;Ne!==null;){w=Ne;var ee=w.child;if((w.subtreeFlags&2064)!==0&&ee!==null)ee.return=w,Ne=ee;else e:for(w=W;Ne!==null;){if(k=Ne,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:nu(9,k)}}catch(ze){Xt(k,k.return,ze)}if(k===w){Ne=null;break e}var ye=k.sibling;if(ye!==null){ye.return=k.return,Ne=ye;break e}Ne=k.return}}if(vt=m,Nr(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(On,n)}catch{}f=!0}return f}finally{Et=l,vi.transition=r}}return!1}function jm(n,r,l){r=ho(l,r),r=um(n,r,1),n=Ur(n,r,1),r=Pn(),n!==null&&(ra(n,1,r),Vn(n,r))}function Xt(n,r,l){if(n.tag===3)jm(n,n,l);else for(;r!==null;){if(r.tag===3){jm(r,n,l);break}else if(r.tag===1){var f=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Or===null||!Or.has(f))){n=ho(l,n),n=cm(r,n,1),r=Ur(r,n,1),n=Pn(),r!==null&&(ra(r,1,n),Vn(r,n));break}}r=r.return}}function ex(n,r,l){var f=n.pingCache;f!==null&&f.delete(r),r=Pn(),n.pingedLanes|=n.suspendedLanes&l,cn===n&&(mn&l)===l&&(rn===4||rn===3&&(mn&130023424)===mn&&500>Pe()-Df?Ms(n,0):Nf|=l),Vn(n,r)}function Xm(n,r){r===0&&((n.mode&1)===0?r=1:(r=Mr,Mr<<=1,(Mr&130023424)===0&&(Mr=4194304)));var l=Pn();n=rr(n,r),n!==null&&(ra(n,r,l),Vn(n,l))}function tx(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),Xm(n,l)}function nx(n,r){var l=0;switch(n.tag){case 13:var f=n.stateNode,m=n.memoizedState;m!==null&&(l=m.retryLane);break;case 19:f=n.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(r),Xm(n,l)}var Ym;Ym=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||kn.current)Bn=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return Bn=!1,Gv(n,r,l);Bn=(n.flags&131072)!==0}else Bn=!1,Ft&&(r.flags&1048576)!==0&&Cp(r,zl,r.index);switch(r.lanes=0,r.tag){case 2:var f=r.type;eu(n,r),n=r.pendingProps;var m=ro(r,yn.current);co(r,l),m=cf(null,r,f,n,m,l);var y=ff();return r.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,zn(f)?(y=!0,Ol(r)):y=!1,r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,nf(r),m.updater=Ql,r.stateNode=m,m._reactInternals=r,_f(r,f,n,l),r=Sf(null,r,f,!0,y,l)):(r.tag=0,Ft&&y&&Xc(r),Ln(null,r,m,l),r=r.child),r;case 16:f=r.elementType;e:{switch(eu(n,r),n=r.pendingProps,m=f._init,f=m(f._payload),r.type=f,m=r.tag=rx(f),n=bi(f,n),m){case 0:r=yf(null,r,f,n,l);break e;case 1:r=xm(null,r,f,n,l);break e;case 11:r=pm(null,r,f,n,l);break e;case 14:r=mm(null,r,f,bi(f.type,n),l);break e}throw Error(t(306,f,""))}return r;case 0:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:bi(f,m),yf(n,r,f,m,l);case 1:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:bi(f,m),xm(n,r,f,m,l);case 3:e:{if(ym(r),n===null)throw Error(t(387));f=r.pendingProps,y=r.memoizedState,m=y.element,Ip(n,r),jl(r,f,null,l);var w=r.memoizedState;if(f=w.element,y.isDehydrated)if(y={element:f,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},r.updateQueue.baseState=y,r.memoizedState=y,r.flags&256){m=ho(Error(t(423)),r),r=Sm(n,r,f,l,m);break e}else if(f!==m){m=ho(Error(t(424)),r),r=Sm(n,r,f,l,m);break e}else for(ti=br(r.stateNode.containerInfo.firstChild),ei=r,Ft=!0,Ri=null,l=Dp(r,null,f,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(ao(),f===m){r=or(n,r,l);break e}Ln(n,r,f,l)}r=r.child}return r;case 5:return kp(r),n===null&&$c(r),f=r.type,m=r.pendingProps,y=n!==null?n.memoizedProps:null,w=m.children,Bc(f,m)?w=null:y!==null&&Bc(f,y)&&(r.flags|=32),vm(n,r),Ln(n,r,w,l),r.child;case 6:return n===null&&$c(r),null;case 13:return Mm(n,r,l);case 4:return rf(r,r.stateNode.containerInfo),f=r.pendingProps,n===null?r.child=lo(r,null,f,l):Ln(n,r,f,l),r.child;case 11:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:bi(f,m),pm(n,r,f,m,l);case 7:return Ln(n,r,r.pendingProps,l),r.child;case 8:return Ln(n,r,r.pendingProps.children,l),r.child;case 12:return Ln(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(f=r.type._context,m=r.pendingProps,y=r.memoizedProps,w=m.value,Nt(Vl,f._currentValue),f._currentValue=w,y!==null)if(Ai(y.value,w)){if(y.children===m.children&&!kn.current){r=or(n,r,l);break e}}else for(y=r.child,y!==null&&(y.return=r);y!==null;){var k=y.dependencies;if(k!==null){w=y.child;for(var z=k.firstContext;z!==null;){if(z.context===f){if(y.tag===1){z=sr(-1,l&-l),z.tag=2;var re=y.updateQueue;if(re!==null){re=re.shared;var pe=re.pending;pe===null?z.next=z:(z.next=pe.next,pe.next=z),re.pending=z}}y.lanes|=l,z=y.alternate,z!==null&&(z.lanes|=l),ef(y.return,l,r),k.lanes|=l;break}z=z.next}}else if(y.tag===10)w=y.type===r.type?null:y.child;else if(y.tag===18){if(w=y.return,w===null)throw Error(t(341));w.lanes|=l,k=w.alternate,k!==null&&(k.lanes|=l),ef(w,l,r),w=y.sibling}else w=y.child;if(w!==null)w.return=y;else for(w=y;w!==null;){if(w===r){w=null;break}if(y=w.sibling,y!==null){y.return=w.return,w=y;break}w=w.return}y=w}Ln(n,r,m.children,l),r=r.child}return r;case 9:return m=r.type,f=r.pendingProps.children,co(r,l),m=gi(m),f=f(m),r.flags|=1,Ln(n,r,f,l),r.child;case 14:return f=r.type,m=bi(f,r.pendingProps),m=bi(f.type,m),mm(n,r,f,m,l);case 15:return gm(n,r,r.type,r.pendingProps,l);case 17:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:bi(f,m),eu(n,r),r.tag=1,zn(f)?(n=!0,Ol(r)):n=!1,co(r,l),am(r,f,m),_f(r,f,m,l),Sf(null,r,f,!0,n,l);case 19:return wm(n,r,l);case 22:return _m(n,r,l)}throw Error(t(156,r.tag))};function qm(n,r){return oe(n,r)}function ix(n,r,l,f){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xi(n,r,l,f){return new ix(n,r,l,f)}function Hf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function rx(n){if(typeof n=="function")return Hf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===le)return 11;if(n===$)return 14}return 2}function Br(n,r){var l=n.alternate;return l===null?(l=xi(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function fu(n,r,l,f,m,y){var w=2;if(f=n,typeof n=="function")Hf(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case N:return ws(l.children,m,y,r);case Y:w=8,m|=8;break;case C:return n=xi(12,l,r,m|2),n.elementType=C,n.lanes=y,n;case fe:return n=xi(13,l,r,m),n.elementType=fe,n.lanes=y,n;case B:return n=xi(19,l,r,m),n.elementType=B,n.lanes=y,n;case K:return hu(l,m,y,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:w=10;break e;case ne:w=9;break e;case le:w=11;break e;case $:w=14;break e;case te:w=16,f=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=xi(w,l,r,m),r.elementType=n,r.type=f,r.lanes=y,r}function ws(n,r,l,f){return n=xi(7,n,f,r),n.lanes=l,n}function hu(n,r,l,f){return n=xi(22,n,f,r),n.elementType=K,n.lanes=l,n.stateNode={isHidden:!1},n}function Vf(n,r,l){return n=xi(6,n,null,r),n.lanes=l,n}function Gf(n,r,l){return r=xi(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function sx(n,r,l,f,m){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qs(0),this.expirationTimes=qs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qs(0),this.identifierPrefix=f,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function Wf(n,r,l,f,m,y,w,k,z){return n=new sx(n,r,l,k,z),r===1?(r=1,y===!0&&(r|=8)):r=0,y=xi(3,null,null,r),n.current=y,y.stateNode=n,y.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},nf(y),n}function ox(n,r,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:f==null?null:""+f,children:n,containerInfo:r,implementation:l}}function $m(n){if(!n)return Pr;n=n._reactInternals;e:{if(Qi(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(zn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(zn(l))return Ep(n,l,r)}return r}function Zm(n,r,l,f,m,y,w,k,z){return n=Wf(l,f,!0,n,m,y,w,k,z),n.context=$m(null),l=n.current,f=Pn(),m=kr(l),y=sr(f,m),y.callback=r??null,Ur(l,y,m),n.current.lanes=m,ra(n,m,f),Vn(n,f),n}function du(n,r,l,f){var m=r.current,y=Pn(),w=kr(m);return l=$m(l),r.context===null?r.context=l:r.pendingContext=l,r=sr(y,w),r.payload={element:n},f=f===void 0?null:f,f!==null&&(r.callback=f),n=Ur(m,r,w),n!==null&&(Ni(n,m,w,y),Wl(n,m,w)),w}function pu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Km(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function jf(n,r){Km(n,r),(n=n.alternate)&&Km(n,r)}function ax(){return null}var Qm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Xf(n){this._internalRoot=n}mu.prototype.render=Xf.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));du(n,r,null,null)},mu.prototype.unmount=Xf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Ss(function(){du(null,n,null,null)}),r[er]=null}};function mu(n){this._internalRoot=n}mu.prototype.unstable_scheduleHydration=function(n){if(n){var r=Id();n={blockedOn:null,target:n,priority:r};for(var l=0;l<Cr.length&&r!==0&&r<Cr[l].priority;l++);Cr.splice(l,0,n),l===0&&kd(n)}};function Yf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function gu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Jm(){}function lx(n,r,l,f,m){if(m){if(typeof f=="function"){var y=f;f=function(){var re=pu(w);y.call(re)}}var w=Zm(r,f,n,0,null,!1,!1,"",Jm);return n._reactRootContainer=w,n[er]=w.current,va(n.nodeType===8?n.parentNode:n),Ss(),w}for(;m=n.lastChild;)n.removeChild(m);if(typeof f=="function"){var k=f;f=function(){var re=pu(z);k.call(re)}}var z=Wf(n,0,!1,null,null,!1,!1,"",Jm);return n._reactRootContainer=z,n[er]=z.current,va(n.nodeType===8?n.parentNode:n),Ss(function(){du(r,z,l,f)}),z}function _u(n,r,l,f,m){var y=l._reactRootContainer;if(y){var w=y;if(typeof m=="function"){var k=m;m=function(){var z=pu(w);k.call(z)}}du(r,w,n,m)}else w=lx(l,r,n,m,f);return pu(w)}Dd=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=jt(r.pendingLanes);l!==0&&(gc(r,l|1),Vn(r,Pe()),(vt&6)===0&&(go=Pe()+500,Nr()))}break;case 13:Ss(function(){var f=rr(n,1);if(f!==null){var m=Pn();Ni(f,n,1,m)}}),jf(n,1)}},_c=function(n){if(n.tag===13){var r=rr(n,134217728);if(r!==null){var l=Pn();Ni(r,n,134217728,l)}jf(n,134217728)}},Ud=function(n){if(n.tag===13){var r=kr(n),l=rr(n,r);if(l!==null){var f=Pn();Ni(l,n,r,f)}jf(n,r)}},Id=function(){return Et},Od=function(n,r){var l=Et;try{return Et=n,r()}finally{Et=l}},Me=function(n,r,l){switch(r){case"input":if(At(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var f=l[r];if(f!==n&&f.form===n.form){var m=Ul(f);if(!m)throw Error(t(90));se(f),At(f,m)}}}break;case"textarea":xe(n,l);break;case"select":r=l.value,r!=null&&ie(n,!!l.multiple,r,!1)}},St=kf,Mt=Ss;var ux={usingClientEntryPoint:!1,Events:[Sa,no,Ul,Ke,Ye,kf]},Ia={findFiberByHostInstance:ds,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cx={bundleType:Ia.bundleType,version:Ia.version,rendererPackageName:Ia.rendererPackageName,rendererConfig:Ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ae(n),n===null?null:n.stateNode},findFiberByHostInstance:Ia.findFiberByHostInstance||ax,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vu.isDisabled&&vu.supportsFiber)try{On=vu.inject(cx),gt=vu}catch{}}return Gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ux,Gn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yf(r))throw Error(t(200));return ox(n,r,null,l)},Gn.createRoot=function(n,r){if(!Yf(n))throw Error(t(299));var l=!1,f="",m=Qm;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onRecoverableError!==void 0&&(m=r.onRecoverableError)),r=Wf(n,1,!1,null,null,l,!1,f,m),n[er]=r.current,va(n.nodeType===8?n.parentNode:n),new Xf(r)},Gn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ae(r),n=n===null?null:n.stateNode,n},Gn.flushSync=function(n){return Ss(n)},Gn.hydrate=function(n,r,l){if(!gu(r))throw Error(t(200));return _u(null,n,r,!0,l)},Gn.hydrateRoot=function(n,r,l){if(!Yf(n))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,m=!1,y="",w=Qm;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(y=l.identifierPrefix),l.onRecoverableError!==void 0&&(w=l.onRecoverableError)),r=Zm(r,null,n,1,l??null,m,!1,y,w),n[er]=r.current,va(n),f)for(n=0;n<f.length;n++)l=f[n],m=l._getVersion,m=m(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,m]:r.mutableSourceEagerHydrationData.push(l,m);return new mu(r)},Gn.render=function(n,r,l){if(!gu(r))throw Error(t(200));return _u(null,n,r,!1,l)},Gn.unmountComponentAtNode=function(n){if(!gu(n))throw Error(t(40));return n._reactRootContainer?(Ss(function(){_u(null,null,n,!1,function(){n._reactRootContainer=null,n[er]=null})}),!0):!1},Gn.unstable_batchedUpdates=kf,Gn.unstable_renderSubtreeIntoContainer=function(n,r,l,f){if(!gu(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return _u(n,r,l,!1,f)},Gn.version="18.3.1-next-f1338f8080-20240426",Gn}var a0;function Sx(){if(a0)return Zf.exports;a0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Zf.exports=yx(),Zf.exports}var l0;function Mx(){if(l0)return xu;l0=1;var o=Sx();return xu.createRoot=o.createRoot,xu.hydrateRoot=o.hydrateRoot,xu}var Ex=Mx();const wx=Q1(Ex);var u0="1.3.27";function J1(o,e,t){return Math.max(o,Math.min(e,t))}function Tx(o,e,t){return(1-t)*o+t*e}function Cx(o,e,t,i){return Tx(o,e,1-Math.exp(-t*i))}function Ax(o,e){return(o%e+e)%e}var Rx=class{constructor(){Be(this,"isRunning",!1);Be(this,"value",0);Be(this,"from",0);Be(this,"to",0);Be(this,"currentTime",0);Be(this,"lerp");Be(this,"duration");Be(this,"easing");Be(this,"onUpdate")}advance(o){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=o;const i=J1(0,this.currentTime/this.duration,1);e=i>=1;const s=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*s}else this.lerp?(this.value=Cx(this.value,this.to,this.lerp*60,o),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(o,e,{lerp:t,duration:i,easing:s,onStart:a,onUpdate:c}){this.from=this.value=o,this.to=e,this.lerp=t,this.duration=i,this.easing=s,this.currentTime=0,this.isRunning=!0,a==null||a(),this.onUpdate=c}};function bx(o,e){let t;return function(...i){clearTimeout(t),t=setTimeout(()=>{t=void 0,o.apply(this,i)},e)}}var Lx=class{constructor(o,e,{autoResize:t=!0,debounce:i=250}={}){Be(this,"width",0);Be(this,"height",0);Be(this,"scrollHeight",0);Be(this,"scrollWidth",0);Be(this,"debouncedResize");Be(this,"wrapperResizeObserver");Be(this,"contentResizeObserver");Be(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Be(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Be(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=o,this.content=e,t&&(this.debouncedResize=bx(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var o,e;(o=this.wrapperResizeObserver)==null||o.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},eg=class{constructor(){Be(this,"events",{})}emit(o,...e){var i;const t=this.events[o]||[];for(let s=0,a=t.length;s<a;s++)(i=t[s])==null||i.call(t,...e)}on(o,e){return this.events[o]?this.events[o].push(e):this.events[o]=[e],()=>{var t;this.events[o]=(t=this.events[o])==null?void 0:t.filter(i=>e!==i)}}off(o,e){var t;this.events[o]=(t=this.events[o])==null?void 0:t.filter(i=>e!==i)}destroy(){this.events={}}};const Px=100/6,Vr={passive:!1};function c0(o,e){return o===1?Px:o===2?e:1}var Nx=class{constructor(o,e={wheelMultiplier:1,touchMultiplier:1}){Be(this,"touchStart",{x:0,y:0});Be(this,"lastDelta",{x:0,y:0});Be(this,"window",{width:0,height:0});Be(this,"emitter",new eg);Be(this,"onTouchStart",o=>{const{clientX:e,clientY:t}=o.targetTouches?o.targetTouches[0]:o;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:o})});Be(this,"onTouchMove",o=>{const{clientX:e,clientY:t}=o.targetTouches?o.targetTouches[0]:o,i=-(e-this.touchStart.x)*this.options.touchMultiplier,s=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:i,y:s},this.emitter.emit("scroll",{deltaX:i,deltaY:s,event:o})});Be(this,"onTouchEnd",o=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:o})});Be(this,"onWheel",o=>{let{deltaX:e,deltaY:t,deltaMode:i}=o;const s=c0(i,this.window.width),a=c0(i,this.window.height);e*=s,t*=a,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:o})});Be(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=o,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Vr),this.element.addEventListener("touchstart",this.onTouchStart,Vr),this.element.addEventListener("touchmove",this.onTouchMove,Vr),this.element.addEventListener("touchend",this.onTouchEnd,Vr)}on(o,e){return this.emitter.on(o,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Vr),this.element.removeEventListener("touchstart",this.onTouchStart,Vr),this.element.removeEventListener("touchmove",this.onTouchMove,Vr),this.element.removeEventListener("touchend",this.onTouchEnd,Vr)}};const f0=o=>Math.min(1,1.001-2**(-10*o));var Dx=class{constructor({wrapper:o=window,content:e=document.documentElement,eventsTarget:t=o,smoothWheel:i=!0,syncTouch:s=!1,syncTouchLerp:a=.075,touchInertiaExponent:c=1.7,duration:u,easing:h,lerp:d=.1,infinite:p=!1,orientation:g="vertical",gestureOrientation:_=g==="horizontal"?"both":"vertical",touchMultiplier:S=1,wheelMultiplier:E=1,autoResize:M=!0,prevent:v,virtualScroll:x,overscroll:A=!0,autoRaf:T=!1,anchors:L=!1,autoToggle:O=!1,allowNestedScroll:I=!1,__experimental__naiveDimensions:N=!1,naiveDimensions:Y=N,stopInertiaOnNavigate:C=!1,respectReducedMotion:P=!0}={}){Be(this,"_isScrolling",!1);Be(this,"_isStopped",!1);Be(this,"_isLocked",!1);Be(this,"_preventNextNativeScrollEvent",!1);Be(this,"_resetVelocityTimeout",null);Be(this,"_rafId",null);Be(this,"_isDraggingSelection",!1);Be(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Be(this,"isTouching");Be(this,"isIos");Be(this,"time",0);Be(this,"userData",{});Be(this,"lastVelocity",0);Be(this,"velocity",0);Be(this,"direction",0);Be(this,"options");Be(this,"targetScroll");Be(this,"animatedScroll");Be(this,"animate",new Rx);Be(this,"emitter",new eg);Be(this,"dimensions");Be(this,"virtualScroll");Be(this,"onScrollEnd",o=>{o instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&o.stopPropagation()});Be(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Be(this,"onTransitionEnd",o=>{var e;(e=o.propertyName)!=null&&e.includes("overflow")&&o.target===this.rootElement&&this.checkOverflow()});Be(this,"onClick",o=>{const e=o.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),t=new URL(window.location.href);if(this.options.anchors){const i=e.find(s=>t.host===s.host&&t.pathname===s.pathname&&s.hash);if(i){const s=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,a=decodeURIComponent(i.hash);this.scrollTo(a,s);return}}if(this.options.stopInertiaOnNavigate&&e.some(i=>t.host===i.host&&t.pathname!==i.pathname)){this.reset();return}});Be(this,"onPointerDown",o=>{o.button===1&&this.reset()});Be(this,"onVirtualScroll",o=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(o)===!1)return;const{deltaX:e,deltaY:t,event:i}=o;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const s=i.type.includes("touch"),a=i.type.includes("wheel");if(s&&this.isIos&&(i.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(i)),this._isDraggingSelection)){i.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=i.type==="touchstart"||i.type==="touchmove";const c=e===0&&t===0;if(this.options.syncTouch&&s&&i.type==="touchstart"&&c&&!this.isStopped&&!this.isLocked){this.reset();return}const u=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(c||u)return;let h=i.composedPath();h=h.slice(0,h.indexOf(this.rootElement));const d=this.options.prevent,p=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(h.find(E=>{var M,v,x,A,T;return E instanceof HTMLElement&&(typeof d=="function"&&(d==null?void 0:d(E))||((M=E.hasAttribute)==null?void 0:M.call(E,"data-lenis-prevent"))||p==="vertical"&&((v=E.hasAttribute)==null?void 0:v.call(E,"data-lenis-prevent-vertical"))||p==="horizontal"&&((x=E.hasAttribute)==null?void 0:x.call(E,"data-lenis-prevent-horizontal"))||s&&((A=E.hasAttribute)==null?void 0:A.call(E,"data-lenis-prevent-touch"))||a&&((T=E.hasAttribute)==null?void 0:T.call(E,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(E,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&s||this.options.smoothWheel&&a)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let g=t;this.options.gestureOrientation==="both"?g=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(g=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const _=s&&this.options.syncTouch,S=s&&i.type==="touchend";S&&(g=Math.sign(g)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+g,{programmatic:!1,..._?{lerp:S?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Be(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const o=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-o,this.direction=Math.sign(this.animatedScroll-o),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Be(this,"raf",o=>{const e=o-(this.time||o);this.time=o,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=u0,window.lenis||(window.lenis={}),window.lenis.version=u0,g==="horizontal"&&(window.lenis.horizontal=!0),s===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!o||o===document.documentElement)&&(o=window),typeof u=="number"&&typeof h!="function"?h=f0:typeof h=="function"&&typeof u!="number"&&(u=1),this.options={wrapper:o,content:e,eventsTarget:t,smoothWheel:i,syncTouch:s,syncTouchLerp:a,touchInertiaExponent:c,duration:u,easing:h,lerp:d,infinite:p,gestureOrientation:_,orientation:g,touchMultiplier:S,wheelMultiplier:E,autoResize:M,prevent:v,virtualScroll:x,overscroll:A,autoRaf:T,anchors:L,autoToggle:O,allowNestedScroll:I,naiveDimensions:Y,stopInertiaOnNavigate:C,respectReducedMotion:P},this.dimensions=new Lx(o,e,{autoResize:M}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Nx(t,{touchMultiplier:S,wheelMultiplier:E}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(o,e){return this.emitter.on(o,e)}off(o,e){return this.emitter.off(o,e)}get overflow(){const o=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[o]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(o){this.isHorizontal?this.options.wrapper.scrollTo({left:o,behavior:"instant"}):this.options.wrapper.scrollTo({top:o,behavior:"instant"})}isTouchOnSelectionHandle(o){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=o.targetTouches[0]??o.changedTouches[0];if(!t)return!1;const i=e.getRangeAt(0).getClientRects();if(i.length===0)return!1;const s=i[0],a=i[i.length-1],c=40,u=Math.hypot(t.clientX-s.left,t.clientY-s.top)<=c,h=Math.hypot(t.clientX-a.right,t.clientY-a.bottom)<=c;return u||h}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(o,{offset:e=0,immediate:t=!1,lock:i=!1,programmatic:s=!0,lerp:a=s?this.options.lerp:void 0,duration:c=s?this.options.duration:void 0,easing:u=s?this.options.easing:void 0,onStart:h,onComplete:d,force:p=!1,userData:g}={}){if(this.prefersReducedMotion&&(s?t=!0:(a=1,c=void 0,u=void 0)),(this.isStopped||this.isLocked)&&!p)return;let _=o,S=e;if(typeof _=="string"&&["top","left","start","#"].includes(_))_=0;else if(typeof _=="string"&&["bottom","right","end"].includes(_))_=this.limit;else{let E=null;if(typeof _=="string"?(E=_.startsWith("#")?document.getElementById(_.slice(1)):document.querySelector(_),E||(_==="#top"?_=0:console.warn("Lenis: Target not found",_))):_ instanceof Element&&(E=_),E){if(this.options.wrapper!==window){const L=this.rootElement.getBoundingClientRect();S-=this.isHorizontal?L.left:L.top}const M=E.getBoundingClientRect(),v=getComputedStyle(E),x=this.isHorizontal?Number.parseFloat(v.scrollMarginLeft):Number.parseFloat(v.scrollMarginTop),A=getComputedStyle(this.rootElement),T=this.isHorizontal?Number.parseFloat(A.scrollPaddingLeft):Number.parseFloat(A.scrollPaddingTop);_=(this.isHorizontal?M.left:M.top)+this.animatedScroll-(Number.isNaN(x)?0:x)-(Number.isNaN(T)?0:T)}}if(typeof _=="number"){if(_+=S,this.options.infinite){if(s){this.targetScroll=this.animatedScroll=this.scroll;const E=_-this.animatedScroll;E>this.limit/2?_-=this.limit:E<-this.limit/2&&(_+=this.limit)}}else _=J1(0,_,this.limit);if(_===this.targetScroll){h==null||h(this),d==null||d(this);return}if(this.userData=g??{},t){this.animatedScroll=this.targetScroll=_,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),d==null||d(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}s||(this.targetScroll=_),typeof c=="number"&&typeof u!="function"?u=f0:typeof u=="function"&&typeof c!="number"&&(c=1),this.animate.fromTo(this.animatedScroll,_,{duration:c,easing:u,lerp:a,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",h==null||h(this)},onUpdate:(E,M)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=E-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=E,this.setScroll(this.scroll),s&&(this.targetScroll=E),M||this.emit(),M&&(this.reset(),this.emit(),d==null||d(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(o,{deltaX:e,deltaY:t}){const i=Date.now();o._lenis||(o._lenis={});const s=o._lenis;let a,c,u,h,d,p,g,_,S,E;if(i-(s.time??0)>2e3){s.time=Date.now();const I=window.getComputedStyle(o);if(s.computedStyle=I,a=["auto","overlay","scroll"].includes(I.overflowX),c=["auto","overlay","scroll"].includes(I.overflowY),d=["auto"].includes(I.overscrollBehaviorX),p=["auto"].includes(I.overscrollBehaviorY),s.hasOverflowX=a,s.hasOverflowY=c,!(a||c))return!1;g=o.scrollWidth,_=o.scrollHeight,S=o.clientWidth,E=o.clientHeight,u=g>S,h=_>E,s.isScrollableX=u,s.isScrollableY=h,s.scrollWidth=g,s.scrollHeight=_,s.clientWidth=S,s.clientHeight=E,s.hasOverscrollBehaviorX=d,s.hasOverscrollBehaviorY=p}else u=s.isScrollableX,h=s.isScrollableY,a=s.hasOverflowX,c=s.hasOverflowY,g=s.scrollWidth,_=s.scrollHeight,S=s.clientWidth,E=s.clientHeight,d=s.hasOverscrollBehaviorX,p=s.hasOverscrollBehaviorY;if(!(a&&u||c&&h))return!1;const M=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let v,x,A,T,L,O;if(M==="horizontal")v=Math.round(o.scrollLeft),x=g-S,A=e,T=a,L=u,O=d;else if(M==="vertical")v=Math.round(o.scrollTop),x=_-E,A=t,T=c,L=h,O=p;else return!1;return!O&&(v>=x||v<=0)?!0:(A>0?v<x:v>0)&&T&&L}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const o=this.options.wrapper;return this.isHorizontal?o.scrollX??o.scrollLeft:o.scrollY??o.scrollTop}get scroll(){return this.options.infinite?Ax(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(o){this._isScrolling!==o&&(this._isScrolling=o,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(o){this._isStopped!==o&&(this._isStopped=o,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(o){this._isLocked!==o&&(this._isLocked=o,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let o="lenis";return this.options.autoToggle&&(o+=" lenis-autoToggle"),this.isStopped&&(o+=" lenis-stopped"),this.isLocked&&(o+=" lenis-locked"),this.isScrolling&&(o+=" lenis-scrolling"),this.isScrolling==="smooth"&&(o+=" lenis-smooth"),o}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(o=>{this.rootElement.classList.add(o)})}cleanUpClassName(){for(const o of Array.from(this.rootElement.classList))(o==="lenis"||o.startsWith("lenis-"))&&this.rootElement.classList.remove(o)}};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),tg=(...o)=>o.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ix={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=jn.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:s="",children:a,iconNode:c,...u},h)=>jn.createElement("svg",{ref:h,...Ix,width:e,height:e,stroke:o,strokeWidth:i?Number(t)*24/Number(e):t,className:tg("lucide",s),...u},[...c.map(([d,p])=>jn.createElement(d,p)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=(o,e)=>{const t=jn.forwardRef(({className:i,...s},a)=>jn.createElement(Ox,{ref:a,iconNode:e,className:tg(`lucide-${Ux(o)}`,i),...s}));return t.displayName=`${o}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=od("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=od("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=od("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Bx=()=>{const[o,e]=jn.useState(!1);return R.jsxs("header",{className:"fixed top-0 left-0 right-0 z-50 px-6 sm:px-12 py-5 bg-[#fdf9f9]/90 backdrop-blur-md transition-all duration-300",children:[R.jsxs("div",{className:"max-w-[1720px] mx-auto flex items-center justify-between",children:[R.jsx("a",{href:"/",className:"text-[#111111] hover:opacity-85 transition-opacity","aria-label":"Weichie.com",children:R.jsxs("svg",{className:"h-[26px] w-auto",viewBox:"0 0 133 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[R.jsx("path",{d:"M39.893 0.863371V0.563103H33.7468L33.7086 0.863371L35.0066 2.70251L30.2729 17.9036C29.9675 18.8795 29.713 19.7427 29.5094 20.4934C29.3058 21.2441 29.1149 22.0698 28.9367 22.9706C28.7077 22.0698 28.4977 21.2441 28.3069 20.4934C28.116 19.7427 27.8678 18.8795 27.5624 17.9036L22.7142 2.77758L23.974 0.863371V0.563103H17.217V0.863371L18.6676 2.85265L18.7058 2.81511L14.0866 17.8661C13.8067 18.8169 13.5713 19.6802 13.3804 20.4559C13.1895 21.2316 12.9923 22.0573 12.7887 22.9331C12.5851 22.0573 12.3815 21.2378 12.1779 20.4746C11.9743 19.7115 11.7198 18.8544 11.4144 17.9036L6.52795 2.77758L7.78772 0.863371L7.74955 0.563103H0L0.0381751 0.863371L2.02328 2.85265L10.3836 27.6248H13.5903L18.5913 12.161C18.9221 11.1601 19.1894 10.2905 19.393 9.55238C19.5966 8.81422 19.8129 8.00725 20.0419 7.13147C20.2455 8.00725 20.4491 8.81422 20.6527 9.55238C20.8563 10.2905 21.0981 11.1601 21.3781 12.161L26.4554 27.6248H29.6621L38.0988 2.74005L39.893 0.863371Z",fill:"currentColor"}),R.jsx("path",{d:"M52.2427 23.0455C51.6955 23.6961 51.0465 24.1903 50.2957 24.5281C49.5449 24.8659 48.7115 25.0348 47.7953 25.0348C46.5737 25.0348 45.4729 24.7345 44.4931 24.134C43.5133 23.5335 42.7434 22.6577 42.1835 21.5067C41.6406 20.3932 41.3649 19.0649 41.3479 17.5281H55.5448C55.5957 16.5522 55.5321 15.5951 55.3539 14.6568C55.1758 13.7184 54.8767 12.8302 54.4568 11.9919C54.0369 11.1537 53.4706 10.4218 52.758 9.7962C52.0454 9.17064 51.1928 8.67645 50.2003 8.31362C49.2077 7.9508 48.037 7.76939 46.6882 7.76939C45.2121 7.76939 43.895 8.03212 42.737 8.55759C41.5791 9.08306 40.5992 9.80245 39.7976 10.7158C38.9959 11.6291 38.3851 12.705 37.9652 13.9436C37.5452 15.1823 37.3353 16.4897 37.3353 17.8659C37.3353 19.2421 37.558 20.5871 38.0033 21.8257C38.4487 23.0643 39.0977 24.1403 39.9503 25.0536C40.8028 25.9669 41.8272 26.6863 43.0234 27.2117C44.2195 27.7372 45.5429 27.9999 46.9936 27.9999C48.5715 27.9999 49.9521 27.7184 51.1356 27.1554C52.319 26.5924 53.2988 25.8105 54.0751 24.8096C54.8513 23.8087 55.3921 22.6327 55.6975 21.2814L53.5215 20.6809C53.2161 21.6067 52.7898 22.3949 52.2427 23.0455ZM42.718 12.0294C43.1506 11.3163 43.7042 10.7596 44.3786 10.3592C45.053 9.95884 45.8229 9.75866 46.6882 9.75866C47.4262 9.75866 48.0816 9.9088 48.6542 10.2091C49.2268 10.5093 49.7167 10.9347 50.1239 11.4852C50.5311 12.0357 50.8429 12.6613 51.0592 13.3619C51.2756 14.0625 51.4219 14.8257 51.4982 15.6514H41.4709C41.5303 15.249 41.6045 14.8528 41.7063 14.4691C41.9481 13.5558 42.2853 12.7426 42.718 12.0294Z",fill:"currentColor"}),R.jsx("path",{d:"M60.6221 5.29221C61.3347 5.29221 61.9519 5.0545 62.4736 4.57907C62.9953 4.10365 63.2562 3.51562 63.2562 2.815C63.2562 2.11437 63.0017 1.56388 62.4927 1.08846C61.9837 0.613031 61.3729 0.375318 60.6603 0.375318C59.9477 0.375318 59.3432 0.613031 58.847 1.08846C58.3507 1.56388 58.1025 2.13939 58.1025 2.815C58.1025 3.4906 58.3443 4.10365 58.8279 4.57907C59.3114 5.0545 59.9095 5.29221 60.6221 5.29221Z",fill:"currentColor"}),R.jsx("path",{d:"M62.6454 7.95717L57.4154 8.89551V9.19578L58.7515 11.11V25.5604L57.4154 27.3245V27.6247H63.9815V27.3245L62.6454 25.5604V7.95717Z",fill:"currentColor"}),R.jsx("path",{d:"M79.5188 23.8713C78.5262 24.6219 77.381 24.9973 76.083 24.9973C75.2941 24.9973 74.5179 24.8409 73.7543 24.5281C72.9908 24.2153 72.3037 23.7461 71.6929 23.1206C71.0821 22.495 70.6049 21.7068 70.2613 20.756C69.9177 19.8051 69.746 18.6916 69.746 17.4155C69.746 16.2895 69.8859 15.2636 70.1659 14.3378C70.4458 13.4119 70.8403 12.6175 71.3493 11.9544C71.8583 11.2913 72.4691 10.7846 73.1817 10.4343C73.8943 10.084 74.696 9.9088 75.5868 9.9088C76.2485 9.9088 76.8465 10.0214 77.381 10.2466C77.9154 10.4718 78.4054 10.7908 78.8507 11.2037C79.2961 11.6166 79.6651 12.1108 79.9578 12.6863C80.2505 13.2618 80.4986 13.8999 80.7022 14.6005L81.0076 14.6756L83.5272 12.4986C83.1963 11.5978 82.6555 10.7846 81.9047 10.0589C81.154 9.33328 80.2378 8.77028 79.1561 8.36992C78.0745 7.96956 76.8593 7.76939 75.5104 7.76939C74.1616 7.76939 72.8127 8.01335 71.6165 8.50129C70.4204 8.98923 69.3706 9.67734 68.4671 10.5656C67.5636 11.4539 66.8574 12.5174 66.3484 13.756C65.8394 14.9946 65.5849 16.3646 65.5849 17.8659C65.5849 19.8176 65.9984 21.5567 66.8256 23.0831C67.6527 24.6094 68.7916 25.8105 70.2422 26.6863C71.6929 27.5621 73.3726 27.9999 75.2813 27.9999C76.8338 27.9999 78.2017 27.7059 79.3852 27.1179C80.5686 26.5299 81.5484 25.6916 82.3247 24.6032C83.1009 23.5147 83.6163 22.2448 83.8708 20.7935L81.7711 20.3806C81.2621 21.9571 80.5113 23.1206 79.5188 23.8713Z",fill:"currentColor"}),R.jsx("path",{d:"M103.302 14.4504C103.302 13.0241 103.009 11.8105 102.424 10.8096C101.839 9.80875 101.043 9.05183 100.038 8.53887C99.0326 8.02591 97.8683 7.76943 96.5449 7.76943C95.6541 7.76943 94.8143 7.94459 94.0253 8.2949C93.2364 8.64521 92.5365 9.12064 91.9257 9.72117C91.3149 10.3217 90.8186 11.0223 90.4369 11.8231V-4.60065e-06L85.2069 0.938333V1.2386L86.543 3.15281V25.5603L85.2069 27.3244V27.6247H91.773V27.3244L90.4369 25.5603V15.5013C90.6659 14.5004 91.0159 13.6434 91.4867 12.9303C91.9575 12.2172 92.5365 11.6604 93.2237 11.26C93.9108 10.8597 94.6489 10.6595 95.4378 10.6595C96.2268 10.6595 96.9521 10.8222 97.5374 11.1474C98.1228 11.4727 98.5745 11.9482 98.8927 12.5737C99.2108 13.1993 99.3698 13.9875 99.3698 14.9383V25.5603L98.0337 27.3244V27.6247H104.676V27.3244L103.302 25.5603V14.4504Z",fill:"currentColor"}),R.jsx("path",{d:"M109.639 5.29221C110.352 5.29221 110.969 5.0545 111.49 4.57907C112.012 4.10365 112.273 3.51562 112.273 2.815C112.273 2.11437 112.019 1.56388 111.51 1.08846C111.001 0.613031 110.39 0.375318 109.677 0.375318C108.965 0.375318 108.36 0.613031 107.864 1.08846C107.368 1.56388 107.119 2.13939 107.119 2.815C107.119 3.4906 107.361 4.10365 107.845 4.57907C108.328 5.0545 108.926 5.29221 109.639 5.29221Z",fill:"currentColor"}),R.jsx("path",{d:"M111.662 7.95717L106.432 8.89551V9.19578L107.768 11.11V25.5604L106.432 27.3245V27.6247H112.998V27.3245L111.662 25.5604V7.95717Z",fill:"currentColor"}),R.jsx("path",{d:"M130.824 20.6809C130.519 21.6067 130.092 22.3949 129.545 23.0455C128.998 23.6961 128.349 24.1903 127.598 24.5281C126.847 24.8659 126.014 25.0348 125.098 25.0348C123.876 25.0348 122.775 24.7345 121.796 24.134C120.816 23.5335 120.046 22.6577 119.486 21.5067C118.943 20.3932 118.667 19.0649 118.65 17.5281H132.847C132.898 16.5522 132.835 15.5951 132.656 14.6568C132.478 13.7184 132.179 12.8302 131.759 11.9919C131.339 11.1537 130.773 10.4218 130.061 9.7962C129.348 9.17064 128.495 8.67645 127.503 8.31362C126.51 7.9508 125.34 7.76939 123.991 7.76939C122.515 7.76939 121.198 8.03212 120.04 8.55759C118.882 9.08306 117.902 9.80245 117.1 10.7158C116.298 11.6291 115.688 12.705 115.268 13.9436C114.848 15.1823 114.638 16.4897 114.638 17.8659C114.638 19.2421 114.86 20.5871 115.306 21.8257C115.751 23.0643 116.4 24.1403 117.253 25.0536C118.105 25.9669 119.13 26.6863 120.326 27.2117C121.522 27.7372 122.845 27.9999 124.296 27.9999C125.874 27.9999 127.255 27.7184 128.438 27.1554C129.622 26.5924 130.601 25.8105 131.378 24.8096C132.154 23.8087 132.695 22.6327 133 21.2814L130.824 20.6809ZM120.02 12.0294C120.453 11.3163 121.007 10.7596 121.681 10.3592C122.356 9.95884 123.125 9.75866 123.991 9.75866C124.729 9.75866 125.384 9.9088 125.957 10.2091C126.529 10.5093 127.019 10.9347 127.426 11.4852C127.834 12.0357 128.145 12.6613 128.362 13.3619C128.578 14.0625 128.724 14.8257 128.801 15.6514H118.773C118.833 15.249 118.907 14.8528 119.009 14.4691C119.251 13.5558 119.588 12.7426 120.02 12.0294Z",fill:"currentColor"})]})}),R.jsxs("div",{className:"hidden lg:flex items-center gap-9",children:[R.jsxs("nav",{className:"flex items-center gap-8",children:[R.jsx("a",{href:"#work",className:"text-sm font-medium text-[#111111]/80 hover:text-[#111111] transition-colors",children:"Work"}),R.jsx("a",{href:"#services",className:"text-sm font-medium text-[#111111]/80 hover:text-[#111111] transition-colors",children:"Services"}),R.jsx("a",{href:"#about",className:"text-sm font-medium text-[#111111]/80 hover:text-[#111111] transition-colors",children:"About"}),R.jsx("a",{href:"#insights",className:"text-sm font-medium text-[#111111]/80 hover:text-[#111111] transition-colors",children:"Insights"})]}),R.jsxs("a",{href:"#contact",className:"inline-flex items-center gap-3 pl-4 pr-1.5 py-1.5 rounded-full border border-black/15 bg-white text-[#111111] text-xs font-semibold hover:border-black/35 hover:shadow-sm transition-all group",children:[R.jsx("span",{children:"Get in touch"}),R.jsx("span",{className:"w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center transition-transform group-hover:scale-105",children:R.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[R.jsx("path",{d:"M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"}),R.jsx("path",{d:"M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"}),R.jsx("path",{d:"M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"}),R.jsx("path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"})]})})]}),R.jsx("button",{type:"button",className:"w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-[#111111] hover:bg-black/5 transition-colors","aria-label":"Switch theme",children:R.jsx(kx,{className:"w-4 h-4"})}),R.jsx("button",{type:"button",className:"h-8 px-3 rounded-full border border-black/10 text-xs font-semibold text-[#111111] hover:bg-black/5 transition-colors",children:"EN"})]}),R.jsxs("div",{className:"lg:hidden flex items-center gap-3",children:[R.jsxs("a",{href:"#contact",className:"inline-flex items-center gap-2 pl-3 pr-1 py-1 rounded-full border border-black/15 bg-white text-xs font-semibold",children:[R.jsx("span",{children:"Contact"}),R.jsx("span",{className:"w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-[10px]",children:"→"})]}),R.jsx("button",{onClick:()=>e(!o),className:"p-2 text-[#111111]","aria-label":"Toggle menu",children:o?R.jsx(zx,{className:"w-6 h-6"}):R.jsx(Fx,{className:"w-6 h-6"})})]})]}),o&&R.jsxs("div",{className:"fixed inset-0 top-[68px] bg-[#fdf9f9] z-40 p-8 flex flex-col justify-between border-t border-black/10 animate-in fade-in duration-200",children:[R.jsxs("div",{className:"flex flex-col gap-6 text-2xl font-display font-medium text-[#111111]",children:[R.jsx("a",{href:"#work",onClick:()=>e(!1),children:"Work"}),R.jsx("a",{href:"#services",onClick:()=>e(!1),children:"Services"}),R.jsx("a",{href:"#about",onClick:()=>e(!1),children:"About"}),R.jsx("a",{href:"#insights",onClick:()=>e(!1),children:"Insights"}),R.jsx("a",{href:"#contact",onClick:()=>e(!1),className:"text-primary",children:"Get in touch →"})]}),R.jsx("div",{className:"text-xs text-muted",children:"Brussels • New York"})]})]})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ad="160",Hx=0,h0=1,Vx=2,ng=1,Gx=2,dr=3,rs=0,Xn=1,Xi=2,Jr=0,Bo=1,d0=2,p0=3,m0=4,Wx=5,Us=100,jx=101,Xx=102,g0=103,_0=104,Yx=200,qx=201,$x=202,Zx=203,Oh=204,Fh=205,Kx=206,Qx=207,Jx=208,e2=209,t2=210,n2=211,i2=212,r2=213,s2=214,o2=0,a2=1,l2=2,Yu=3,u2=4,c2=5,f2=6,h2=7,ig=0,d2=1,p2=2,es=0,m2=1,g2=2,_2=3,v2=4,x2=5,y2=6,rg=300,jo=301,Xo=302,kh=303,zh=304,oc=306,Bh=1e3,Fi=1001,Hh=1002,Un=1003,v0=1004,Jf=1005,Mi=1006,S2=1007,Ka=1008,ts=1009,M2=1010,E2=1011,ld=1012,sg=1013,qr=1014,$r=1015,Qa=1016,og=1017,ag=1018,Fs=1020,w2=1021,ki=1023,T2=1024,C2=1025,ks=1026,Yo=1027,A2=1028,lg=1029,R2=1030,ug=1031,cg=1033,eh=33776,th=33777,nh=33778,ih=33779,x0=35840,y0=35841,S0=35842,M0=35843,fg=36196,E0=37492,w0=37496,T0=37808,C0=37809,A0=37810,R0=37811,b0=37812,L0=37813,P0=37814,N0=37815,D0=37816,U0=37817,I0=37818,O0=37819,F0=37820,k0=37821,rh=36492,z0=36494,B0=36495,b2=36283,H0=36284,V0=36285,G0=36286,hg=3e3,zs=3001,L2=3200,P2=3201,N2=0,D2=1,wi="",sn="srgb",vr="srgb-linear",ud="display-p3",ac="display-p3-linear",qu="linear",It="srgb",$u="rec709",Zu="p3",vo=7680,W0=519,U2=512,I2=513,O2=514,dg=515,F2=516,k2=517,z2=518,B2=519,j0=35044,X0="300 es",Vh=1035,gr=2e3,Ku=2001;class ea{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let a=0,c=s.length;a<c;a++)s[a].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Y0=1234567;const ja=Math.PI/180,Ja=180/Math.PI;function ta(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wn[o&255]+wn[o>>8&255]+wn[o>>16&255]+wn[o>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]).toLowerCase()}function In(o,e,t){return Math.max(e,Math.min(t,o))}function cd(o,e){return(o%e+e)%e}function H2(o,e,t,i,s){return i+(o-e)*(s-i)/(t-e)}function V2(o,e,t){return o!==e?(t-o)/(e-o):0}function Xa(o,e,t){return(1-t)*o+t*e}function G2(o,e,t,i){return Xa(o,e,1-Math.exp(-t*i))}function W2(o,e=1){return e-Math.abs(cd(o,e*2)-e)}function j2(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function X2(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function Y2(o,e){return o+Math.floor(Math.random()*(e-o+1))}function q2(o,e){return o+Math.random()*(e-o)}function $2(o){return o*(.5-Math.random())}function Z2(o){o!==void 0&&(Y0=o);let e=Y0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function K2(o){return o*ja}function Q2(o){return o*Ja}function Gh(o){return(o&o-1)===0&&o!==0}function J2(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Qu(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function ey(o,e,t,i,s){const a=Math.cos,c=Math.sin,u=a(t/2),h=c(t/2),d=a((e+i)/2),p=c((e+i)/2),g=a((e-i)/2),_=c((e-i)/2),S=a((i-e)/2),E=c((i-e)/2);switch(s){case"XYX":o.set(u*p,h*g,h*_,u*d);break;case"YZY":o.set(h*_,u*p,h*g,u*d);break;case"ZXZ":o.set(h*g,h*_,u*p,u*d);break;case"XZX":o.set(u*p,h*E,h*S,u*d);break;case"YXY":o.set(h*S,u*p,h*E,u*d);break;case"ZYZ":o.set(h*E,h*S,u*p,u*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Io(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Nn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const q0={DEG2RAD:ja,RAD2DEG:Ja,generateUUID:ta,clamp:In,euclideanModulo:cd,mapLinear:H2,inverseLerp:V2,lerp:Xa,damp:G2,pingpong:W2,smoothstep:j2,smootherstep:X2,randInt:Y2,randFloat:q2,randFloatSpread:$2,seededRandom:Z2,degToRad:K2,radToDeg:Q2,isPowerOfTwo:Gh,ceilPowerOfTwo:J2,floorPowerOfTwo:Qu,setQuaternionFromProperEuler:ey,normalize:Nn,denormalize:Io};class Tt{constructor(e=0,t=0){Tt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(In(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*i-c*s+e.x,this.y=a*s+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(e,t,i,s,a,c,u,h,d){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,u,h,d)}set(e,t,i,s,a,c,u,h,d){const p=this.elements;return p[0]=e,p[1]=s,p[2]=u,p[3]=t,p[4]=a,p[5]=h,p[6]=i,p[7]=c,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],u=i[3],h=i[6],d=i[1],p=i[4],g=i[7],_=i[2],S=i[5],E=i[8],M=s[0],v=s[3],x=s[6],A=s[1],T=s[4],L=s[7],O=s[2],I=s[5],N=s[8];return a[0]=c*M+u*A+h*O,a[3]=c*v+u*T+h*I,a[6]=c*x+u*L+h*N,a[1]=d*M+p*A+g*O,a[4]=d*v+p*T+g*I,a[7]=d*x+p*L+g*N,a[2]=_*M+S*A+E*O,a[5]=_*v+S*T+E*I,a[8]=_*x+S*L+E*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],h=e[6],d=e[7],p=e[8];return t*c*p-t*u*d-i*a*p+i*u*h+s*a*d-s*c*h}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],h=e[6],d=e[7],p=e[8],g=p*c-u*d,_=u*h-p*a,S=d*a-c*h,E=t*g+i*_+s*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=g*M,e[1]=(s*d-p*i)*M,e[2]=(u*i-s*c)*M,e[3]=_*M,e[4]=(p*t-s*h)*M,e[5]=(s*a-u*t)*M,e[6]=S*M,e[7]=(i*h-d*t)*M,e[8]=(c*t-i*a)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,c,u){const h=Math.cos(a),d=Math.sin(a);return this.set(i*h,i*d,-i*(h*c+d*u)+c+e,-s*d,s*h,-s*(-d*c+h*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(sh.makeScale(e,t)),this}rotate(e){return this.premultiply(sh.makeRotation(-e)),this}translate(e,t){return this.premultiply(sh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sh=new dt;function pg(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function el(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ty(){const o=el("canvas");return o.style.display="block",o}const $0={};function Ya(o){o in $0||($0[o]=!0,console.warn(o))}const Z0=new dt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),K0=new dt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),yu={[vr]:{transfer:qu,primaries:$u,toReference:o=>o,fromReference:o=>o},[sn]:{transfer:It,primaries:$u,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[ac]:{transfer:qu,primaries:Zu,toReference:o=>o.applyMatrix3(K0),fromReference:o=>o.applyMatrix3(Z0)},[ud]:{transfer:It,primaries:Zu,toReference:o=>o.convertSRGBToLinear().applyMatrix3(K0),fromReference:o=>o.applyMatrix3(Z0).convertLinearToSRGB()}},ny=new Set([vr,ac]),Ct={enabled:!0,_workingColorSpace:vr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!ny.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,t){if(this.enabled===!1||e===t||!e||!t)return o;const i=yu[e].toReference,s=yu[t].fromReference;return s(i(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return yu[o].primaries},getTransfer:function(o){return o===wi?qu:yu[o].transfer}};function Ho(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function oh(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let xo;class mg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xo===void 0&&(xo=el("canvas")),xo.width=e.width,xo.height=e.height;const i=xo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=xo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=el("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let c=0;c<a.length;c++)a[c]=Ho(a[c]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ho(t[i]/255)*255):t[i]=Ho(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let iy=0;class gg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iy++}),this.uuid=ta(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let c=0,u=s.length;c<u;c++)s[c].isDataTexture?a.push(ah(s[c].image)):a.push(ah(s[c]))}else a=ah(s);i.url=a}return t||(e.images[this.uuid]=i),i}}function ah(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?mg.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ry=0;class Yn extends ea{constructor(e=Yn.DEFAULT_IMAGE,t=Yn.DEFAULT_MAPPING,i=Fi,s=Fi,a=Mi,c=Ka,u=ki,h=ts,d=Yn.DEFAULT_ANISOTROPY,p=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ry++}),this.uuid=ta(),this.name="",this.source=new gg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=c,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=h,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof p=="string"?this.colorSpace=p:(Ya("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=p===zs?sn:wi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bh:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case Hh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bh:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case Hh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ya("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===sn?zs:hg}set encoding(e){Ya("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===zs?sn:wi}}Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=rg;Yn.DEFAULT_ANISOTROPY=1;class gn{constructor(e=0,t=0,i=0,s=1){gn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*s+c[12]*a,this.y=c[1]*t+c[5]*i+c[9]*s+c[13]*a,this.z=c[2]*t+c[6]*i+c[10]*s+c[14]*a,this.w=c[3]*t+c[7]*i+c[11]*s+c[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a;const h=e.elements,d=h[0],p=h[4],g=h[8],_=h[1],S=h[5],E=h[9],M=h[2],v=h[6],x=h[10];if(Math.abs(p-_)<.01&&Math.abs(g-M)<.01&&Math.abs(E-v)<.01){if(Math.abs(p+_)<.1&&Math.abs(g+M)<.1&&Math.abs(E+v)<.1&&Math.abs(d+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(d+1)/2,L=(S+1)/2,O=(x+1)/2,I=(p+_)/4,N=(g+M)/4,Y=(E+v)/4;return T>L&&T>O?T<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(T),s=I/i,a=N/i):L>O?L<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(L),i=I/s,a=Y/s):O<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(O),i=N/a,s=Y/a),this.set(i,s,a,t),this}let A=Math.sqrt((v-E)*(v-E)+(g-M)*(g-M)+(_-p)*(_-p));return Math.abs(A)<.001&&(A=1),this.x=(v-E)/A,this.y=(g-M)/A,this.z=(_-p)/A,this.w=Math.acos((d+S+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sy extends ea{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gn(0,0,e,t),this.scissorTest=!1,this.viewport=new gn(0,0,e,t);const s={width:e,height:t,depth:1};i.encoding!==void 0&&(Ya("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===zs?sn:wi),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Yn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new gg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class js extends sy{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class _g extends Yn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Un,this.minFilter=Un,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oy extends Yn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Un,this.minFilter=Un,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ul{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,c,u){let h=i[s+0],d=i[s+1],p=i[s+2],g=i[s+3];const _=a[c+0],S=a[c+1],E=a[c+2],M=a[c+3];if(u===0){e[t+0]=h,e[t+1]=d,e[t+2]=p,e[t+3]=g;return}if(u===1){e[t+0]=_,e[t+1]=S,e[t+2]=E,e[t+3]=M;return}if(g!==M||h!==_||d!==S||p!==E){let v=1-u;const x=h*_+d*S+p*E+g*M,A=x>=0?1:-1,T=1-x*x;if(T>Number.EPSILON){const O=Math.sqrt(T),I=Math.atan2(O,x*A);v=Math.sin(v*I)/O,u=Math.sin(u*I)/O}const L=u*A;if(h=h*v+_*L,d=d*v+S*L,p=p*v+E*L,g=g*v+M*L,v===1-u){const O=1/Math.sqrt(h*h+d*d+p*p+g*g);h*=O,d*=O,p*=O,g*=O}}e[t]=h,e[t+1]=d,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,s,a,c){const u=i[s],h=i[s+1],d=i[s+2],p=i[s+3],g=a[c],_=a[c+1],S=a[c+2],E=a[c+3];return e[t]=u*E+p*g+h*S-d*_,e[t+1]=h*E+p*_+d*g-u*S,e[t+2]=d*E+p*S+u*_-h*g,e[t+3]=p*E-u*g-h*_-d*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,a=e._z,c=e._order,u=Math.cos,h=Math.sin,d=u(i/2),p=u(s/2),g=u(a/2),_=h(i/2),S=h(s/2),E=h(a/2);switch(c){case"XYZ":this._x=_*p*g+d*S*E,this._y=d*S*g-_*p*E,this._z=d*p*E+_*S*g,this._w=d*p*g-_*S*E;break;case"YXZ":this._x=_*p*g+d*S*E,this._y=d*S*g-_*p*E,this._z=d*p*E-_*S*g,this._w=d*p*g+_*S*E;break;case"ZXY":this._x=_*p*g-d*S*E,this._y=d*S*g+_*p*E,this._z=d*p*E+_*S*g,this._w=d*p*g-_*S*E;break;case"ZYX":this._x=_*p*g-d*S*E,this._y=d*S*g+_*p*E,this._z=d*p*E-_*S*g,this._w=d*p*g+_*S*E;break;case"YZX":this._x=_*p*g+d*S*E,this._y=d*S*g+_*p*E,this._z=d*p*E-_*S*g,this._w=d*p*g-_*S*E;break;case"XZY":this._x=_*p*g-d*S*E,this._y=d*S*g-_*p*E,this._z=d*p*E+_*S*g,this._w=d*p*g+_*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],a=t[8],c=t[1],u=t[5],h=t[9],d=t[2],p=t[6],g=t[10],_=i+u+g;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(p-h)*S,this._y=(a-d)*S,this._z=(c-s)*S}else if(i>u&&i>g){const S=2*Math.sqrt(1+i-u-g);this._w=(p-h)/S,this._x=.25*S,this._y=(s+c)/S,this._z=(a+d)/S}else if(u>g){const S=2*Math.sqrt(1+u-i-g);this._w=(a-d)/S,this._x=(s+c)/S,this._y=.25*S,this._z=(h+p)/S}else{const S=2*Math.sqrt(1+g-i-u);this._w=(c-s)/S,this._x=(a+d)/S,this._y=(h+p)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(In(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,a=e._z,c=e._w,u=t._x,h=t._y,d=t._z,p=t._w;return this._x=i*p+c*u+s*d-a*h,this._y=s*p+c*h+a*u-i*d,this._z=a*p+c*d+i*h-s*u,this._w=c*p-i*u-s*h-a*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,a=this._z,c=this._w;let u=c*e._w+i*e._x+s*e._y+a*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=i,this._y=s,this._z=a,this;const h=1-u*u;if(h<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*i+t*this._x,this._y=S*s+t*this._y,this._z=S*a+t*this._z,this.normalize(),this}const d=Math.sqrt(h),p=Math.atan2(d,u),g=Math.sin((1-t)*p)/d,_=Math.sin(t*p)/d;return this._w=c*g+this._w*_,this._x=i*g+this._x*_,this._y=s*g+this._y*_,this._z=a*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(a),i*Math.cos(a),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ce{constructor(e=0,t=0,i=0){ce.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Q0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Q0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=e.elements,c=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*c,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*c,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,a=e.x,c=e.y,u=e.z,h=e.w,d=2*(c*s-u*i),p=2*(u*t-a*s),g=2*(a*i-c*t);return this.x=t+h*d+c*g-u*p,this.y=i+h*p+u*d-a*g,this.z=s+h*g+a*p-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,a=e.z,c=t.x,u=t.y,h=t.z;return this.x=s*h-a*u,this.y=a*c-i*h,this.z=i*u-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return lh.copy(this).projectOnVector(e),this.sub(lh)}reflect(e){return this.sub(lh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(In(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lh=new ce,Q0=new ul;class cl{constructor(e=new ce(1/0,1/0,1/0),t=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Di):Di.fromBufferAttribute(a,c),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Su.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Su.copy(i.boundingBox)),Su.applyMatrix4(e.matrixWorld),this.union(Su)}const s=e.children;for(let a=0,c=s.length;a<c;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fa),Mu.subVectors(this.max,Fa),yo.subVectors(e.a,Fa),So.subVectors(e.b,Fa),Mo.subVectors(e.c,Fa),Gr.subVectors(So,yo),Wr.subVectors(Mo,So),Ts.subVectors(yo,Mo);let t=[0,-Gr.z,Gr.y,0,-Wr.z,Wr.y,0,-Ts.z,Ts.y,Gr.z,0,-Gr.x,Wr.z,0,-Wr.x,Ts.z,0,-Ts.x,-Gr.y,Gr.x,0,-Wr.y,Wr.x,0,-Ts.y,Ts.x,0];return!uh(t,yo,So,Mo,Mu)||(t=[1,0,0,0,1,0,0,0,1],!uh(t,yo,So,Mo,Mu))?!1:(Eu.crossVectors(Gr,Wr),t=[Eu.x,Eu.y,Eu.z],uh(t,yo,So,Mo,Mu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(lr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),lr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),lr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),lr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),lr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),lr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),lr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),lr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(lr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const lr=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],Di=new ce,Su=new cl,yo=new ce,So=new ce,Mo=new ce,Gr=new ce,Wr=new ce,Ts=new ce,Fa=new ce,Mu=new ce,Eu=new ce,Cs=new ce;function uh(o,e,t,i,s){for(let a=0,c=o.length-3;a<=c;a+=3){Cs.fromArray(o,a);const u=s.x*Math.abs(Cs.x)+s.y*Math.abs(Cs.y)+s.z*Math.abs(Cs.z),h=e.dot(Cs),d=t.dot(Cs),p=i.dot(Cs);if(Math.max(-Math.max(h,d,p),Math.min(h,d,p))>u)return!1}return!0}const ay=new cl,ka=new ce,ch=new ce;class fd{constructor(e=new ce,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ay.setFromPoints(e).getCenter(i);let s=0;for(let a=0,c=e.length;a<c;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ka.subVectors(e,this.center);const t=ka.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ka,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ch.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ka.copy(e.center).add(ch)),this.expandByPoint(ka.copy(e.center).sub(ch))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ur=new ce,fh=new ce,wu=new ce,jr=new ce,hh=new ce,Tu=new ce,dh=new ce;class ly{constructor(e=new ce,t=new ce(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ur)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ur.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ur.copy(this.origin).addScaledVector(this.direction,t),ur.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){fh.copy(e).add(t).multiplyScalar(.5),wu.copy(t).sub(e).normalize(),jr.copy(this.origin).sub(fh);const a=e.distanceTo(t)*.5,c=-this.direction.dot(wu),u=jr.dot(this.direction),h=-jr.dot(wu),d=jr.lengthSq(),p=Math.abs(1-c*c);let g,_,S,E;if(p>0)if(g=c*h-u,_=c*u-h,E=a*p,g>=0)if(_>=-E)if(_<=E){const M=1/p;g*=M,_*=M,S=g*(g+c*_+2*u)+_*(c*g+_+2*h)+d}else _=a,g=Math.max(0,-(c*_+u)),S=-g*g+_*(_+2*h)+d;else _=-a,g=Math.max(0,-(c*_+u)),S=-g*g+_*(_+2*h)+d;else _<=-E?(g=Math.max(0,-(-c*a+u)),_=g>0?-a:Math.min(Math.max(-a,-h),a),S=-g*g+_*(_+2*h)+d):_<=E?(g=0,_=Math.min(Math.max(-a,-h),a),S=_*(_+2*h)+d):(g=Math.max(0,-(c*a+u)),_=g>0?a:Math.min(Math.max(-a,-h),a),S=-g*g+_*(_+2*h)+d);else _=c>0?-a:a,g=Math.max(0,-(c*_+u)),S=-g*g+_*(_+2*h)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(fh).addScaledVector(wu,_),S}intersectSphere(e,t){ur.subVectors(e.center,this.origin);const i=ur.dot(this.direction),s=ur.dot(ur)-i*i,a=e.radius*e.radius;if(s>a)return null;const c=Math.sqrt(a-s),u=i-c,h=i+c;return h<0?null:u<0?this.at(h,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,c,u,h;const d=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,_=this.origin;return d>=0?(i=(e.min.x-_.x)*d,s=(e.max.x-_.x)*d):(i=(e.max.x-_.x)*d,s=(e.min.x-_.x)*d),p>=0?(a=(e.min.y-_.y)*p,c=(e.max.y-_.y)*p):(a=(e.max.y-_.y)*p,c=(e.min.y-_.y)*p),i>c||a>s||((a>i||isNaN(i))&&(i=a),(c<s||isNaN(s))&&(s=c),g>=0?(u=(e.min.z-_.z)*g,h=(e.max.z-_.z)*g):(u=(e.max.z-_.z)*g,h=(e.min.z-_.z)*g),i>h||u>s)||((u>i||i!==i)&&(i=u),(h<s||s!==s)&&(s=h),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ur)!==null}intersectTriangle(e,t,i,s,a){hh.subVectors(t,e),Tu.subVectors(i,e),dh.crossVectors(hh,Tu);let c=this.direction.dot(dh),u;if(c>0){if(s)return null;u=1}else if(c<0)u=-1,c=-c;else return null;jr.subVectors(this.origin,e);const h=u*this.direction.dot(Tu.crossVectors(jr,Tu));if(h<0)return null;const d=u*this.direction.dot(hh.cross(jr));if(d<0||h+d>c)return null;const p=-u*jr.dot(dh);return p<0?null:this.at(p/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _n{constructor(e,t,i,s,a,c,u,h,d,p,g,_,S,E,M,v){_n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,u,h,d,p,g,_,S,E,M,v)}set(e,t,i,s,a,c,u,h,d,p,g,_,S,E,M,v){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=s,x[1]=a,x[5]=c,x[9]=u,x[13]=h,x[2]=d,x[6]=p,x[10]=g,x[14]=_,x[3]=S,x[7]=E,x[11]=M,x[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _n().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Eo.setFromMatrixColumn(e,0).length(),a=1/Eo.setFromMatrixColumn(e,1).length(),c=1/Eo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,a=e.z,c=Math.cos(i),u=Math.sin(i),h=Math.cos(s),d=Math.sin(s),p=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const _=c*p,S=c*g,E=u*p,M=u*g;t[0]=h*p,t[4]=-h*g,t[8]=d,t[1]=S+E*d,t[5]=_-M*d,t[9]=-u*h,t[2]=M-_*d,t[6]=E+S*d,t[10]=c*h}else if(e.order==="YXZ"){const _=h*p,S=h*g,E=d*p,M=d*g;t[0]=_+M*u,t[4]=E*u-S,t[8]=c*d,t[1]=c*g,t[5]=c*p,t[9]=-u,t[2]=S*u-E,t[6]=M+_*u,t[10]=c*h}else if(e.order==="ZXY"){const _=h*p,S=h*g,E=d*p,M=d*g;t[0]=_-M*u,t[4]=-c*g,t[8]=E+S*u,t[1]=S+E*u,t[5]=c*p,t[9]=M-_*u,t[2]=-c*d,t[6]=u,t[10]=c*h}else if(e.order==="ZYX"){const _=c*p,S=c*g,E=u*p,M=u*g;t[0]=h*p,t[4]=E*d-S,t[8]=_*d+M,t[1]=h*g,t[5]=M*d+_,t[9]=S*d-E,t[2]=-d,t[6]=u*h,t[10]=c*h}else if(e.order==="YZX"){const _=c*h,S=c*d,E=u*h,M=u*d;t[0]=h*p,t[4]=M-_*g,t[8]=E*g+S,t[1]=g,t[5]=c*p,t[9]=-u*p,t[2]=-d*p,t[6]=S*g+E,t[10]=_-M*g}else if(e.order==="XZY"){const _=c*h,S=c*d,E=u*h,M=u*d;t[0]=h*p,t[4]=-g,t[8]=d*p,t[1]=_*g+M,t[5]=c*p,t[9]=S*g-E,t[2]=E*g-S,t[6]=u*p,t[10]=M*g+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uy,e,cy)}lookAt(e,t,i){const s=this.elements;return ii.subVectors(e,t),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Xr.crossVectors(i,ii),Xr.lengthSq()===0&&(Math.abs(i.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Xr.crossVectors(i,ii)),Xr.normalize(),Cu.crossVectors(ii,Xr),s[0]=Xr.x,s[4]=Cu.x,s[8]=ii.x,s[1]=Xr.y,s[5]=Cu.y,s[9]=ii.y,s[2]=Xr.z,s[6]=Cu.z,s[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],u=i[4],h=i[8],d=i[12],p=i[1],g=i[5],_=i[9],S=i[13],E=i[2],M=i[6],v=i[10],x=i[14],A=i[3],T=i[7],L=i[11],O=i[15],I=s[0],N=s[4],Y=s[8],C=s[12],P=s[1],ne=s[5],le=s[9],fe=s[13],B=s[2],$=s[6],te=s[10],K=s[14],H=s[3],j=s[7],X=s[11],F=s[15];return a[0]=c*I+u*P+h*B+d*H,a[4]=c*N+u*ne+h*$+d*j,a[8]=c*Y+u*le+h*te+d*X,a[12]=c*C+u*fe+h*K+d*F,a[1]=p*I+g*P+_*B+S*H,a[5]=p*N+g*ne+_*$+S*j,a[9]=p*Y+g*le+_*te+S*X,a[13]=p*C+g*fe+_*K+S*F,a[2]=E*I+M*P+v*B+x*H,a[6]=E*N+M*ne+v*$+x*j,a[10]=E*Y+M*le+v*te+x*X,a[14]=E*C+M*fe+v*K+x*F,a[3]=A*I+T*P+L*B+O*H,a[7]=A*N+T*ne+L*$+O*j,a[11]=A*Y+T*le+L*te+O*X,a[15]=A*C+T*fe+L*K+O*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],c=e[1],u=e[5],h=e[9],d=e[13],p=e[2],g=e[6],_=e[10],S=e[14],E=e[3],M=e[7],v=e[11],x=e[15];return E*(+a*h*g-s*d*g-a*u*_+i*d*_+s*u*S-i*h*S)+M*(+t*h*S-t*d*_+a*c*_-s*c*S+s*d*p-a*h*p)+v*(+t*d*g-t*u*S-a*c*g+i*c*S+a*u*p-i*d*p)+x*(-s*u*p-t*h*g+t*u*_+s*c*g-i*c*_+i*h*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],h=e[6],d=e[7],p=e[8],g=e[9],_=e[10],S=e[11],E=e[12],M=e[13],v=e[14],x=e[15],A=g*v*d-M*_*d+M*h*S-u*v*S-g*h*x+u*_*x,T=E*_*d-p*v*d-E*h*S+c*v*S+p*h*x-c*_*x,L=p*M*d-E*g*d+E*u*S-c*M*S-p*u*x+c*g*x,O=E*g*h-p*M*h-E*u*_+c*M*_+p*u*v-c*g*v,I=t*A+i*T+s*L+a*O;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/I;return e[0]=A*N,e[1]=(M*_*a-g*v*a-M*s*S+i*v*S+g*s*x-i*_*x)*N,e[2]=(u*v*a-M*h*a+M*s*d-i*v*d-u*s*x+i*h*x)*N,e[3]=(g*h*a-u*_*a-g*s*d+i*_*d+u*s*S-i*h*S)*N,e[4]=T*N,e[5]=(p*v*a-E*_*a+E*s*S-t*v*S-p*s*x+t*_*x)*N,e[6]=(E*h*a-c*v*a-E*s*d+t*v*d+c*s*x-t*h*x)*N,e[7]=(c*_*a-p*h*a+p*s*d-t*_*d-c*s*S+t*h*S)*N,e[8]=L*N,e[9]=(E*g*a-p*M*a-E*i*S+t*M*S+p*i*x-t*g*x)*N,e[10]=(c*M*a-E*u*a+E*i*d-t*M*d-c*i*x+t*u*x)*N,e[11]=(p*u*a-c*g*a-p*i*d+t*g*d+c*i*S-t*u*S)*N,e[12]=O*N,e[13]=(p*M*s-E*g*s+E*i*_-t*M*_-p*i*v+t*g*v)*N,e[14]=(E*u*s-c*M*s-E*i*h+t*M*h+c*i*v-t*u*v)*N,e[15]=(c*g*s-p*u*s+p*i*h-t*g*h-c*i*_+t*u*_)*N,this}scale(e){const t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),a=1-i,c=e.x,u=e.y,h=e.z,d=a*c,p=a*u;return this.set(d*c+i,d*u-s*h,d*h+s*u,0,d*u+s*h,p*u+i,p*h-s*c,0,d*h-s*u,p*h+s*c,a*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,c){return this.set(1,i,a,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,a=t._x,c=t._y,u=t._z,h=t._w,d=a+a,p=c+c,g=u+u,_=a*d,S=a*p,E=a*g,M=c*p,v=c*g,x=u*g,A=h*d,T=h*p,L=h*g,O=i.x,I=i.y,N=i.z;return s[0]=(1-(M+x))*O,s[1]=(S+L)*O,s[2]=(E-T)*O,s[3]=0,s[4]=(S-L)*I,s[5]=(1-(_+x))*I,s[6]=(v+A)*I,s[7]=0,s[8]=(E+T)*N,s[9]=(v-A)*N,s[10]=(1-(_+M))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let a=Eo.set(s[0],s[1],s[2]).length();const c=Eo.set(s[4],s[5],s[6]).length(),u=Eo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],Ui.copy(this);const d=1/a,p=1/c,g=1/u;return Ui.elements[0]*=d,Ui.elements[1]*=d,Ui.elements[2]*=d,Ui.elements[4]*=p,Ui.elements[5]*=p,Ui.elements[6]*=p,Ui.elements[8]*=g,Ui.elements[9]*=g,Ui.elements[10]*=g,t.setFromRotationMatrix(Ui),i.x=a,i.y=c,i.z=u,this}makePerspective(e,t,i,s,a,c,u=gr){const h=this.elements,d=2*a/(t-e),p=2*a/(i-s),g=(t+e)/(t-e),_=(i+s)/(i-s);let S,E;if(u===gr)S=-(c+a)/(c-a),E=-2*c*a/(c-a);else if(u===Ku)S=-c/(c-a),E=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=d,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=p,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,s,a,c,u=gr){const h=this.elements,d=1/(t-e),p=1/(i-s),g=1/(c-a),_=(t+e)*d,S=(i+s)*p;let E,M;if(u===gr)E=(c+a)*g,M=-2*g;else if(u===Ku)E=a*g,M=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=2*d,h[4]=0,h[8]=0,h[12]=-_,h[1]=0,h[5]=2*p,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=M,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Eo=new ce,Ui=new _n,uy=new ce(0,0,0),cy=new ce(1,1,1),Xr=new ce,Cu=new ce,ii=new ce,J0=new _n,e1=new ul;class lc{constructor(e=0,t=0,i=0,s=lc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,a=s[0],c=s[4],u=s[8],h=s[1],d=s[5],p=s[9],g=s[2],_=s[6],S=s[10];switch(t){case"XYZ":this._y=Math.asin(In(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,S),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-In(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,S),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(In(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-In(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(In(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(u,S));break;case"XZY":this._z=Math.asin(-In(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-p,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return J0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(J0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return e1.setFromEuler(this),this.setFromQuaternion(e1,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}lc.DEFAULT_ORDER="XYZ";class vg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fy=0;const t1=new ce,wo=new ul,cr=new _n,Au=new ce,za=new ce,hy=new ce,dy=new ul,n1=new ce(1,0,0),i1=new ce(0,1,0),r1=new ce(0,0,1),py={type:"added"},my={type:"removed"};class ui extends ea{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fy++}),this.uuid=ta(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ui.DEFAULT_UP.clone();const e=new ce,t=new lc,i=new ul,s=new ce(1,1,1);function a(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _n},normalMatrix:{value:new dt}}),this.matrix=new _n,this.matrixWorld=new _n,this.matrixAutoUpdate=ui.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wo.setFromAxisAngle(e,t),this.quaternion.multiply(wo),this}rotateOnWorldAxis(e,t){return wo.setFromAxisAngle(e,t),this.quaternion.premultiply(wo),this}rotateX(e){return this.rotateOnAxis(n1,e)}rotateY(e){return this.rotateOnAxis(i1,e)}rotateZ(e){return this.rotateOnAxis(r1,e)}translateOnAxis(e,t){return t1.copy(e).applyQuaternion(this.quaternion),this.position.add(t1.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(n1,e)}translateY(e){return this.translateOnAxis(i1,e)}translateZ(e){return this.translateOnAxis(r1,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Au.copy(e):Au.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),za.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cr.lookAt(za,Au,this.up):cr.lookAt(Au,za,this.up),this.quaternion.setFromRotationMatrix(cr),s&&(cr.extractRotation(s.matrixWorld),wo.setFromRotationMatrix(cr),this.quaternion.premultiply(wo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(py)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(my)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cr.multiply(e.parent.matrixWorld)),e.applyMatrix4(cr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,e,hy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,dy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let a=0,c=s.length;a<c;a++){const u=s[a];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(u,h){return u[h.uuid]===void 0&&(u[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const h=u.shapes;if(Array.isArray(h))for(let d=0,p=h.length;d<p;d++){const g=h[d];a(e.shapes,g)}else a(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let h=0,d=this.material.length;h<d;h++)u.push(a(e.materials,this.material[h]));s.material=u}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const h=this.animations[u];s.animations.push(a(e.animations,h))}}if(t){const u=c(e.geometries),h=c(e.materials),d=c(e.textures),p=c(e.images),g=c(e.shapes),_=c(e.skeletons),S=c(e.animations),E=c(e.nodes);u.length>0&&(i.geometries=u),h.length>0&&(i.materials=h),d.length>0&&(i.textures=d),p.length>0&&(i.images=p),g.length>0&&(i.shapes=g),_.length>0&&(i.skeletons=_),S.length>0&&(i.animations=S),E.length>0&&(i.nodes=E)}return i.object=s,i;function c(u){const h=[];for(const d in u){const p=u[d];delete p.metadata,h.push(p)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}ui.DEFAULT_UP=new ce(0,1,0);ui.DEFAULT_MATRIX_AUTO_UPDATE=!0;ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ii=new ce,fr=new ce,ph=new ce,hr=new ce,To=new ce,Co=new ce,s1=new ce,mh=new ce,gh=new ce,_h=new ce;let Ru=!1;class Oi{constructor(e=new ce,t=new ce,i=new ce){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Ii.subVectors(e,t),s.cross(Ii);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){Ii.subVectors(s,t),fr.subVectors(i,t),ph.subVectors(e,t);const c=Ii.dot(Ii),u=Ii.dot(fr),h=Ii.dot(ph),d=fr.dot(fr),p=fr.dot(ph),g=c*d-u*u;if(g===0)return a.set(0,0,0),null;const _=1/g,S=(d*h-u*p)*_,E=(c*p-u*h)*_;return a.set(1-S-E,E,S)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,hr)===null?!1:hr.x>=0&&hr.y>=0&&hr.x+hr.y<=1}static getUV(e,t,i,s,a,c,u,h){return Ru===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ru=!0),this.getInterpolation(e,t,i,s,a,c,u,h)}static getInterpolation(e,t,i,s,a,c,u,h){return this.getBarycoord(e,t,i,s,hr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,hr.x),h.addScaledVector(c,hr.y),h.addScaledVector(u,hr.z),h)}static isFrontFacing(e,t,i,s){return Ii.subVectors(i,t),fr.subVectors(e,t),Ii.cross(fr).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ii.subVectors(this.c,this.b),fr.subVectors(this.a,this.b),Ii.cross(fr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Oi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,a){return Ru===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ru=!0),Oi.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}getInterpolation(e,t,i,s,a){return Oi.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,a=this.c;let c,u;To.subVectors(s,i),Co.subVectors(a,i),mh.subVectors(e,i);const h=To.dot(mh),d=Co.dot(mh);if(h<=0&&d<=0)return t.copy(i);gh.subVectors(e,s);const p=To.dot(gh),g=Co.dot(gh);if(p>=0&&g<=p)return t.copy(s);const _=h*g-p*d;if(_<=0&&h>=0&&p<=0)return c=h/(h-p),t.copy(i).addScaledVector(To,c);_h.subVectors(e,a);const S=To.dot(_h),E=Co.dot(_h);if(E>=0&&S<=E)return t.copy(a);const M=S*d-h*E;if(M<=0&&d>=0&&E<=0)return u=d/(d-E),t.copy(i).addScaledVector(Co,u);const v=p*E-S*g;if(v<=0&&g-p>=0&&S-E>=0)return s1.subVectors(a,s),u=(g-p)/(g-p+(S-E)),t.copy(s).addScaledVector(s1,u);const x=1/(v+M+_);return c=M*x,u=_*x,t.copy(i).addScaledVector(To,c).addScaledVector(Co,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yr={h:0,s:0,l:0},bu={h:0,s:0,l:0};function vh(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class wt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ct.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Ct.workingColorSpace){if(e=cd(e,1),t=In(t,0,1),i=In(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,c=2*i-a;this.r=vh(c,a,e+1/3),this.g=vh(c,a,e),this.b=vh(c,a,e-1/3)}return Ct.toWorkingColorSpace(this,s),this}setStyle(e,t=sn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=s[1],u=s[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){const i=xg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ho(e.r),this.g=Ho(e.g),this.b=Ho(e.b),this}copyLinearToSRGB(e){return this.r=oh(e.r),this.g=oh(e.g),this.b=oh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return Ct.fromWorkingColorSpace(Tn.copy(this),e),Math.round(In(Tn.r*255,0,255))*65536+Math.round(In(Tn.g*255,0,255))*256+Math.round(In(Tn.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(Tn.copy(this),t);const i=Tn.r,s=Tn.g,a=Tn.b,c=Math.max(i,s,a),u=Math.min(i,s,a);let h,d;const p=(u+c)/2;if(u===c)h=0,d=0;else{const g=c-u;switch(d=p<=.5?g/(c+u):g/(2-c-u),c){case i:h=(s-a)/g+(s<a?6:0);break;case s:h=(a-i)/g+2;break;case a:h=(i-s)/g+4;break}h/=6}return e.h=h,e.s=d,e.l=p,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=sn){Ct.fromWorkingColorSpace(Tn.copy(this),e);const t=Tn.r,i=Tn.g,s=Tn.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Yr),this.setHSL(Yr.h+e,Yr.s+t,Yr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Yr),e.getHSL(bu);const i=Xa(Yr.h,bu.h,t),s=Xa(Yr.s,bu.s,t),a=Xa(Yr.l,bu.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new wt;wt.NAMES=xg;let gy=0;class uc extends ea{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gy++}),this.uuid=ta(),this.name="",this.type="Material",this.blending=Bo,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oh,this.blendDst=Fh,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Yu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=W0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vo,this.stencilZFail=vo,this.stencilZPass=vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bo&&(i.blending=this.blending),this.side!==rs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Oh&&(i.blendSrc=this.blendSrc),this.blendDst!==Fh&&(i.blendDst=this.blendDst),this.blendEquation!==Us&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Yu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==W0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const c=[];for(const u in a){const h=a[u];delete h.metadata,c.push(h)}return c}if(t){const a=s(e.textures),c=s(e.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yg extends uc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ig,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jt=new ce,Lu=new Tt;class $i{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=j0,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=$r,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Lu.fromBufferAttribute(this,t),Lu.applyMatrix3(e),this.setXY(t,Lu.x,Lu.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Io(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Io(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Io(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Io(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Io(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),i=Nn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),i=Nn(i,this.array),s=Nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),i=Nn(i,this.array),s=Nn(s,this.array),a=Nn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==j0&&(e.usage=this.usage),e}}class Sg extends $i{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Mg extends $i{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Bs extends $i{constructor(e,t,i){super(new Float32Array(e),t,i)}}let _y=0;const yi=new _n,xh=new ui,Ao=new ce,ri=new cl,Ba=new cl,hn=new ce;class Xs extends ea{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_y++}),this.uuid=ta(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pg(e)?Mg:Sg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new dt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yi.makeRotationFromQuaternion(e),this.applyMatrix4(yi),this}rotateX(e){return yi.makeRotationX(e),this.applyMatrix4(yi),this}rotateY(e){return yi.makeRotationY(e),this.applyMatrix4(yi),this}rotateZ(e){return yi.makeRotationZ(e),this.applyMatrix4(yi),this}translate(e,t,i){return yi.makeTranslation(e,t,i),this.applyMatrix4(yi),this}scale(e,t,i){return yi.makeScale(e,t,i),this.applyMatrix4(yi),this}lookAt(e){return xh.lookAt(e),xh.updateMatrix(),this.applyMatrix4(xh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ao).negate(),this.translate(Ao.x,Ao.y,Ao.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Bs(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const a=t[i];ri.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new ce,1/0);return}if(e){const i=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];Ba.setFromBufferAttribute(u),this.morphTargetsRelative?(hn.addVectors(ri.min,Ba.min),ri.expandByPoint(hn),hn.addVectors(ri.max,Ba.max),ri.expandByPoint(hn)):(ri.expandByPoint(Ba.min),ri.expandByPoint(Ba.max))}ri.getCenter(i);let s=0;for(let a=0,c=e.count;a<c;a++)hn.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(hn));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],h=this.morphTargetsRelative;for(let d=0,p=u.count;d<p;d++)hn.fromBufferAttribute(u,d),h&&(Ao.fromBufferAttribute(e,d),hn.add(Ao)),s=Math.max(s,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,a=t.normal.array,c=t.uv.array,u=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $i(new Float32Array(4*u),4));const h=this.getAttribute("tangent").array,d=[],p=[];for(let P=0;P<u;P++)d[P]=new ce,p[P]=new ce;const g=new ce,_=new ce,S=new ce,E=new Tt,M=new Tt,v=new Tt,x=new ce,A=new ce;function T(P,ne,le){g.fromArray(s,P*3),_.fromArray(s,ne*3),S.fromArray(s,le*3),E.fromArray(c,P*2),M.fromArray(c,ne*2),v.fromArray(c,le*2),_.sub(g),S.sub(g),M.sub(E),v.sub(E);const fe=1/(M.x*v.y-v.x*M.y);isFinite(fe)&&(x.copy(_).multiplyScalar(v.y).addScaledVector(S,-M.y).multiplyScalar(fe),A.copy(S).multiplyScalar(M.x).addScaledVector(_,-v.x).multiplyScalar(fe),d[P].add(x),d[ne].add(x),d[le].add(x),p[P].add(A),p[ne].add(A),p[le].add(A))}let L=this.groups;L.length===0&&(L=[{start:0,count:i.length}]);for(let P=0,ne=L.length;P<ne;++P){const le=L[P],fe=le.start,B=le.count;for(let $=fe,te=fe+B;$<te;$+=3)T(i[$+0],i[$+1],i[$+2])}const O=new ce,I=new ce,N=new ce,Y=new ce;function C(P){N.fromArray(a,P*3),Y.copy(N);const ne=d[P];O.copy(ne),O.sub(N.multiplyScalar(N.dot(ne))).normalize(),I.crossVectors(Y,ne);const fe=I.dot(p[P])<0?-1:1;h[P*4]=O.x,h[P*4+1]=O.y,h[P*4+2]=O.z,h[P*4+3]=fe}for(let P=0,ne=L.length;P<ne;++P){const le=L[P],fe=le.start,B=le.count;for(let $=fe,te=fe+B;$<te;$+=3)C(i[$+0]),C(i[$+1]),C(i[$+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $i(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let _=0,S=i.count;_<S;_++)i.setXYZ(_,0,0,0);const s=new ce,a=new ce,c=new ce,u=new ce,h=new ce,d=new ce,p=new ce,g=new ce;if(e)for(let _=0,S=e.count;_<S;_+=3){const E=e.getX(_+0),M=e.getX(_+1),v=e.getX(_+2);s.fromBufferAttribute(t,E),a.fromBufferAttribute(t,M),c.fromBufferAttribute(t,v),p.subVectors(c,a),g.subVectors(s,a),p.cross(g),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,M),d.fromBufferAttribute(i,v),u.add(p),h.add(p),d.add(p),i.setXYZ(E,u.x,u.y,u.z),i.setXYZ(M,h.x,h.y,h.z),i.setXYZ(v,d.x,d.y,d.z)}else for(let _=0,S=t.count;_<S;_+=3)s.fromBufferAttribute(t,_+0),a.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),p.subVectors(c,a),g.subVectors(s,a),p.cross(g),i.setXYZ(_+0,p.x,p.y,p.z),i.setXYZ(_+1,p.x,p.y,p.z),i.setXYZ(_+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(u,h){const d=u.array,p=u.itemSize,g=u.normalized,_=new d.constructor(h.length*p);let S=0,E=0;for(let M=0,v=h.length;M<v;M++){u.isInterleavedBufferAttribute?S=h[M]*u.data.stride+u.offset:S=h[M]*p;for(let x=0;x<p;x++)_[E++]=d[S++]}return new $i(_,p,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xs,i=this.index.array,s=this.attributes;for(const u in s){const h=s[u],d=e(h,i);t.setAttribute(u,d)}const a=this.morphAttributes;for(const u in a){const h=[],d=a[u];for(let p=0,g=d.length;p<g;p++){const _=d[p],S=e(_,i);h.push(S)}t.morphAttributes[u]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,h=c.length;u<h;u++){const d=c[u];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const h in i){const d=i[h];e.data.attributes[h]=d.toJSON(e.data)}const s={};let a=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],p=[];for(let g=0,_=d.length;g<_;g++){const S=d[g];p.push(S.toJSON(e.data))}p.length>0&&(s[h]=p,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const d in s){const p=s[d];this.setAttribute(d,p.clone(t))}const a=e.morphAttributes;for(const d in a){const p=[],g=a[d];for(let _=0,S=g.length;_<S;_++)p.push(g[_].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,p=c.length;d<p;d++){const g=c[d];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const o1=new _n,As=new ly,Pu=new fd,a1=new ce,Ro=new ce,bo=new ce,Lo=new ce,yh=new ce,Nu=new ce,Du=new Tt,Uu=new Tt,Iu=new Tt,l1=new ce,u1=new ce,c1=new ce,Ou=new ce,Fu=new ce;class _r extends ui{constructor(e=new Xs,t=new yg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(a&&u){Nu.set(0,0,0);for(let h=0,d=a.length;h<d;h++){const p=u[h],g=a[h];p!==0&&(yh.fromBufferAttribute(g,e),c?Nu.addScaledVector(yh,p):Nu.addScaledVector(yh.sub(t),p))}t.add(Nu)}return t}raycast(e,t){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Pu.copy(i.boundingSphere),Pu.applyMatrix4(a),As.copy(e.ray).recast(e.near),!(Pu.containsPoint(As.origin)===!1&&(As.intersectSphere(Pu,a1)===null||As.origin.distanceToSquared(a1)>(e.far-e.near)**2))&&(o1.copy(a).invert(),As.copy(e.ray).applyMatrix4(o1),!(i.boundingBox!==null&&As.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,As)))}_computeIntersections(e,t,i){let s;const a=this.geometry,c=this.material,u=a.index,h=a.attributes.position,d=a.attributes.uv,p=a.attributes.uv1,g=a.attributes.normal,_=a.groups,S=a.drawRange;if(u!==null)if(Array.isArray(c))for(let E=0,M=_.length;E<M;E++){const v=_[E],x=c[v.materialIndex],A=Math.max(v.start,S.start),T=Math.min(u.count,Math.min(v.start+v.count,S.start+S.count));for(let L=A,O=T;L<O;L+=3){const I=u.getX(L),N=u.getX(L+1),Y=u.getX(L+2);s=ku(this,x,e,i,d,p,g,I,N,Y),s&&(s.faceIndex=Math.floor(L/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{const E=Math.max(0,S.start),M=Math.min(u.count,S.start+S.count);for(let v=E,x=M;v<x;v+=3){const A=u.getX(v),T=u.getX(v+1),L=u.getX(v+2);s=ku(this,c,e,i,d,p,g,A,T,L),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(c))for(let E=0,M=_.length;E<M;E++){const v=_[E],x=c[v.materialIndex],A=Math.max(v.start,S.start),T=Math.min(h.count,Math.min(v.start+v.count,S.start+S.count));for(let L=A,O=T;L<O;L+=3){const I=L,N=L+1,Y=L+2;s=ku(this,x,e,i,d,p,g,I,N,Y),s&&(s.faceIndex=Math.floor(L/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{const E=Math.max(0,S.start),M=Math.min(h.count,S.start+S.count);for(let v=E,x=M;v<x;v+=3){const A=v,T=v+1,L=v+2;s=ku(this,c,e,i,d,p,g,A,T,L),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}}}function vy(o,e,t,i,s,a,c,u){let h;if(e.side===Xn?h=i.intersectTriangle(c,a,s,!0,u):h=i.intersectTriangle(s,a,c,e.side===rs,u),h===null)return null;Fu.copy(u),Fu.applyMatrix4(o.matrixWorld);const d=t.ray.origin.distanceTo(Fu);return d<t.near||d>t.far?null:{distance:d,point:Fu.clone(),object:o}}function ku(o,e,t,i,s,a,c,u,h,d){o.getVertexPosition(u,Ro),o.getVertexPosition(h,bo),o.getVertexPosition(d,Lo);const p=vy(o,e,t,i,Ro,bo,Lo,Ou);if(p){s&&(Du.fromBufferAttribute(s,u),Uu.fromBufferAttribute(s,h),Iu.fromBufferAttribute(s,d),p.uv=Oi.getInterpolation(Ou,Ro,bo,Lo,Du,Uu,Iu,new Tt)),a&&(Du.fromBufferAttribute(a,u),Uu.fromBufferAttribute(a,h),Iu.fromBufferAttribute(a,d),p.uv1=Oi.getInterpolation(Ou,Ro,bo,Lo,Du,Uu,Iu,new Tt),p.uv2=p.uv1),c&&(l1.fromBufferAttribute(c,u),u1.fromBufferAttribute(c,h),c1.fromBufferAttribute(c,d),p.normal=Oi.getInterpolation(Ou,Ro,bo,Lo,l1,u1,c1,new ce),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const g={a:u,b:h,c:d,normal:new ce,materialIndex:0};Oi.getNormal(Ro,bo,Lo,g.normal),p.face=g}return p}class fl extends Xs{constructor(e=1,t=1,i=1,s=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:c};const u=this;s=Math.floor(s),a=Math.floor(a),c=Math.floor(c);const h=[],d=[],p=[],g=[];let _=0,S=0;E("z","y","x",-1,-1,i,t,e,c,a,0),E("z","y","x",1,-1,i,t,-e,c,a,1),E("x","z","y",1,1,e,i,t,s,c,2),E("x","z","y",1,-1,e,i,-t,s,c,3),E("x","y","z",1,-1,e,t,i,s,a,4),E("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(h),this.setAttribute("position",new Bs(d,3)),this.setAttribute("normal",new Bs(p,3)),this.setAttribute("uv",new Bs(g,2));function E(M,v,x,A,T,L,O,I,N,Y,C){const P=L/N,ne=O/Y,le=L/2,fe=O/2,B=I/2,$=N+1,te=Y+1;let K=0,H=0;const j=new ce;for(let X=0;X<te;X++){const F=X*ne-fe;for(let V=0;V<$;V++){const q=V*P-le;j[M]=q*A,j[v]=F*T,j[x]=B,d.push(j.x,j.y,j.z),j[M]=0,j[v]=0,j[x]=I>0?1:-1,p.push(j.x,j.y,j.z),g.push(V/N),g.push(1-X/Y),K+=1}}for(let X=0;X<Y;X++)for(let F=0;F<N;F++){const V=_+F+$*X,q=_+F+$*(X+1),J=_+(F+1)+$*(X+1),he=_+(F+1)+$*X;h.push(V,q,he),h.push(q,J,he),H+=6}u.addGroup(S,H,C),S+=H,_+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qo(o){const e={};for(const t in o){e[t]={};for(const i in o[t]){const s=o[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Dn(o){const e={};for(let t=0;t<o.length;t++){const i=qo(o[t]);for(const s in i)e[s]=i[s]}return e}function xy(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function Eg(o){return o.getRenderTarget()===null?o.outputColorSpace:Ct.workingColorSpace}const yy={clone:qo,merge:Dn};var Sy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,My=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ss extends uc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sy,this.fragmentShader=My,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qo(e.uniforms),this.uniformsGroups=xy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class wg extends ui{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _n,this.projectionMatrix=new _n,this.projectionMatrixInverse=new _n,this.coordinateSystem=gr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ei extends wg{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ja*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ja*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ja*2*Math.atan(Math.tan(ja*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ja*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,d=c.fullHeight;a+=c.offsetX*s/h,t-=c.offsetY*i/d,s*=c.width/h,i*=c.height/d}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Po=-90,No=1;class Ey extends ui{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ei(Po,No,e,t);s.layers=this.layers,this.add(s);const a=new Ei(Po,No,e,t);a.layers=this.layers,this.add(a);const c=new Ei(Po,No,e,t);c.layers=this.layers,this.add(c);const u=new Ei(Po,No,e,t);u.layers=this.layers,this.add(u);const h=new Ei(Po,No,e,t);h.layers=this.layers,this.add(h);const d=new Ei(Po,No,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,a,c,u,h]=t;for(const d of t)this.remove(d);if(e===gr)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Ku)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,h,d,p]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,a),e.setRenderTarget(i,1,s),e.render(t,c),e.setRenderTarget(i,2,s),e.render(t,u),e.setRenderTarget(i,3,s),e.render(t,h),e.setRenderTarget(i,4,s),e.render(t,d),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,s),e.render(t,p),e.setRenderTarget(g,_,S),e.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class Tg extends Yn{constructor(e,t,i,s,a,c,u,h,d,p){e=e!==void 0?e:[],t=t!==void 0?t:jo,super(e,t,i,s,a,c,u,h,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wy extends js{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Ya("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===zs?sn:wi),this.texture=new Tg(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new fl(5,5,5),a=new ss({name:"CubemapFromEquirect",uniforms:qo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xn,blending:Jr});a.uniforms.tEquirect.value=t;const c=new _r(s,a),u=t.minFilter;return t.minFilter===Ka&&(t.minFilter=Mi),new Ey(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,i,s){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,s);e.setRenderTarget(a)}}const Sh=new ce,Ty=new ce,Cy=new dt;class Ps{constructor(e=new ce(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Sh.subVectors(i,t).cross(Ty.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Sh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Cy.getNormalMatrix(e),s=this.coplanarPoint(Sh).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rs=new fd,zu=new ce;class Cg{constructor(e=new Ps,t=new Ps,i=new Ps,s=new Ps,a=new Ps,c=new Ps){this.planes=[e,t,i,s,a,c]}set(e,t,i,s,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(s),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=gr){const i=this.planes,s=e.elements,a=s[0],c=s[1],u=s[2],h=s[3],d=s[4],p=s[5],g=s[6],_=s[7],S=s[8],E=s[9],M=s[10],v=s[11],x=s[12],A=s[13],T=s[14],L=s[15];if(i[0].setComponents(h-a,_-d,v-S,L-x).normalize(),i[1].setComponents(h+a,_+d,v+S,L+x).normalize(),i[2].setComponents(h+c,_+p,v+E,L+A).normalize(),i[3].setComponents(h-c,_-p,v-E,L-A).normalize(),i[4].setComponents(h-u,_-g,v-M,L-T).normalize(),t===gr)i[5].setComponents(h+u,_+g,v+M,L+T).normalize();else if(t===Ku)i[5].setComponents(u,g,M,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(e){return Rs.center.set(0,0,0),Rs.radius=.7071067811865476,Rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(zu.x=s.normal.x>0?e.max.x:e.min.x,zu.y=s.normal.y>0?e.max.y:e.min.y,zu.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(zu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ag(){let o=null,e=!1,t=null,i=null;function s(a,c){t(a,c),i=o.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=o.requestAnimationFrame(s),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){o=a}}}function Ay(o,e){const t=e.isWebGL2,i=new WeakMap;function s(d,p){const g=d.array,_=d.usage,S=g.byteLength,E=o.createBuffer();o.bindBuffer(p,E),o.bufferData(p,g,_),d.onUploadCallback();let M;if(g instanceof Float32Array)M=o.FLOAT;else if(g instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(t)M=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=o.UNSIGNED_SHORT;else if(g instanceof Int16Array)M=o.SHORT;else if(g instanceof Uint32Array)M=o.UNSIGNED_INT;else if(g instanceof Int32Array)M=o.INT;else if(g instanceof Int8Array)M=o.BYTE;else if(g instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:E,type:M,bytesPerElement:g.BYTES_PER_ELEMENT,version:d.version,size:S}}function a(d,p,g){const _=p.array,S=p._updateRange,E=p.updateRanges;if(o.bindBuffer(g,d),S.count===-1&&E.length===0&&o.bufferSubData(g,0,_),E.length!==0){for(let M=0,v=E.length;M<v;M++){const x=E[M];t?o.bufferSubData(g,x.start*_.BYTES_PER_ELEMENT,_,x.start,x.count):o.bufferSubData(g,x.start*_.BYTES_PER_ELEMENT,_.subarray(x.start,x.start+x.count))}p.clearUpdateRanges()}S.count!==-1&&(t?o.bufferSubData(g,S.offset*_.BYTES_PER_ELEMENT,_,S.offset,S.count):o.bufferSubData(g,S.offset*_.BYTES_PER_ELEMENT,_.subarray(S.offset,S.offset+S.count)),S.count=-1),p.onUploadCallback()}function c(d){return d.isInterleavedBufferAttribute&&(d=d.data),i.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=i.get(d);p&&(o.deleteBuffer(p.buffer),i.delete(d))}function h(d,p){if(d.isGLBufferAttribute){const _=i.get(d);(!_||_.version<d.version)&&i.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const g=i.get(d);if(g===void 0)i.set(d,s(d,p));else if(g.version<d.version){if(g.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(g.buffer,d,p),g.version=d.version}}return{get:c,remove:u,update:h}}class cc extends Xs{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const a=e/2,c=t/2,u=Math.floor(i),h=Math.floor(s),d=u+1,p=h+1,g=e/u,_=t/h,S=[],E=[],M=[],v=[];for(let x=0;x<p;x++){const A=x*_-c;for(let T=0;T<d;T++){const L=T*g-a;E.push(L,-A,0),M.push(0,0,1),v.push(T/u),v.push(1-x/h)}}for(let x=0;x<h;x++)for(let A=0;A<u;A++){const T=A+d*x,L=A+d*(x+1),O=A+1+d*(x+1),I=A+1+d*x;S.push(T,L,I),S.push(L,O,I)}this.setIndex(S),this.setAttribute("position",new Bs(E,3)),this.setAttribute("normal",new Bs(M,3)),this.setAttribute("uv",new Bs(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cc(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ry=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,by=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ly=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Py=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ny=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Dy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Iy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Oy=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ky=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,By=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Wy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$y=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Zy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ky=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Qy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,eS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rS="gl_FragColor = linearToOutputTexel( gl_FragColor );",sS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,oS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,aS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,uS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,_S=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,SS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,MS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ES=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,TS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,AS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,RS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,LS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,PS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,NS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,US=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,IS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,FS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,BS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,VS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,GS=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,WS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,jS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,XS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,YS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$S=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ZS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,KS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,e3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,i3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,s3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,u3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,c3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,f3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,h3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,d3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,m3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,v3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,x3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,y3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,S3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,M3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,E3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,w3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,T3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,C3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const A3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,U3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,I3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,O3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,F3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,k3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,B3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,H3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,V3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,X3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,q3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Q3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,nM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:Ry,alphahash_pars_fragment:by,alphamap_fragment:Ly,alphamap_pars_fragment:Py,alphatest_fragment:Ny,alphatest_pars_fragment:Dy,aomap_fragment:Uy,aomap_pars_fragment:Iy,batching_pars_vertex:Oy,batching_vertex:Fy,begin_vertex:ky,beginnormal_vertex:zy,bsdfs:By,iridescence_fragment:Hy,bumpmap_pars_fragment:Vy,clipping_planes_fragment:Gy,clipping_planes_pars_fragment:Wy,clipping_planes_pars_vertex:jy,clipping_planes_vertex:Xy,color_fragment:Yy,color_pars_fragment:qy,color_pars_vertex:$y,color_vertex:Zy,common:Ky,cube_uv_reflection_fragment:Qy,defaultnormal_vertex:Jy,displacementmap_pars_vertex:eS,displacementmap_vertex:tS,emissivemap_fragment:nS,emissivemap_pars_fragment:iS,colorspace_fragment:rS,colorspace_pars_fragment:sS,envmap_fragment:oS,envmap_common_pars_fragment:aS,envmap_pars_fragment:lS,envmap_pars_vertex:uS,envmap_physical_pars_fragment:SS,envmap_vertex:cS,fog_vertex:fS,fog_pars_vertex:hS,fog_fragment:dS,fog_pars_fragment:pS,gradientmap_pars_fragment:mS,lightmap_fragment:gS,lightmap_pars_fragment:_S,lights_lambert_fragment:vS,lights_lambert_pars_fragment:xS,lights_pars_begin:yS,lights_toon_fragment:MS,lights_toon_pars_fragment:ES,lights_phong_fragment:wS,lights_phong_pars_fragment:TS,lights_physical_fragment:CS,lights_physical_pars_fragment:AS,lights_fragment_begin:RS,lights_fragment_maps:bS,lights_fragment_end:LS,logdepthbuf_fragment:PS,logdepthbuf_pars_fragment:NS,logdepthbuf_pars_vertex:DS,logdepthbuf_vertex:US,map_fragment:IS,map_pars_fragment:OS,map_particle_fragment:FS,map_particle_pars_fragment:kS,metalnessmap_fragment:zS,metalnessmap_pars_fragment:BS,morphcolor_vertex:HS,morphnormal_vertex:VS,morphtarget_pars_vertex:GS,morphtarget_vertex:WS,normal_fragment_begin:jS,normal_fragment_maps:XS,normal_pars_fragment:YS,normal_pars_vertex:qS,normal_vertex:$S,normalmap_pars_fragment:ZS,clearcoat_normal_fragment_begin:KS,clearcoat_normal_fragment_maps:QS,clearcoat_pars_fragment:JS,iridescence_pars_fragment:e3,opaque_fragment:t3,packing:n3,premultiplied_alpha_fragment:i3,project_vertex:r3,dithering_fragment:s3,dithering_pars_fragment:o3,roughnessmap_fragment:a3,roughnessmap_pars_fragment:l3,shadowmap_pars_fragment:u3,shadowmap_pars_vertex:c3,shadowmap_vertex:f3,shadowmask_pars_fragment:h3,skinbase_vertex:d3,skinning_pars_vertex:p3,skinning_vertex:m3,skinnormal_vertex:g3,specularmap_fragment:_3,specularmap_pars_fragment:v3,tonemapping_fragment:x3,tonemapping_pars_fragment:y3,transmission_fragment:S3,transmission_pars_fragment:M3,uv_pars_fragment:E3,uv_pars_vertex:w3,uv_vertex:T3,worldpos_vertex:C3,background_vert:A3,background_frag:R3,backgroundCube_vert:b3,backgroundCube_frag:L3,cube_vert:P3,cube_frag:N3,depth_vert:D3,depth_frag:U3,distanceRGBA_vert:I3,distanceRGBA_frag:O3,equirect_vert:F3,equirect_frag:k3,linedashed_vert:z3,linedashed_frag:B3,meshbasic_vert:H3,meshbasic_frag:V3,meshlambert_vert:G3,meshlambert_frag:W3,meshmatcap_vert:j3,meshmatcap_frag:X3,meshnormal_vert:Y3,meshnormal_frag:q3,meshphong_vert:$3,meshphong_frag:Z3,meshphysical_vert:K3,meshphysical_frag:Q3,meshtoon_vert:J3,meshtoon_frag:eM,points_vert:tM,points_frag:nM,shadow_vert:iM,shadow_frag:rM,sprite_vert:sM,sprite_frag:oM},Te={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},ji={basic:{uniforms:Dn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:Dn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new wt(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:Dn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:Dn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:Dn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new wt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:Dn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:Dn([Te.points,Te.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:Dn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:Dn([Te.common,Te.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:Dn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:Dn([Te.sprite,Te.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:Dn([Te.common,Te.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:Dn([Te.lights,Te.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};ji.physical={uniforms:Dn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Bu={r:0,b:0,g:0};function aM(o,e,t,i,s,a,c){const u=new wt(0);let h=a===!0?0:1,d,p,g=null,_=0,S=null;function E(v,x){let A=!1,T=x.isScene===!0?x.background:null;T&&T.isTexture&&(T=(x.backgroundBlurriness>0?t:e).get(T)),T===null?M(u,h):T&&T.isColor&&(M(T,1),A=!0);const L=o.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,c):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||A)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),T&&(T.isCubeTexture||T.mapping===oc)?(p===void 0&&(p=new _r(new fl(1,1,1),new ss({name:"BackgroundCubeMaterial",uniforms:qo(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(O,I,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=T,p.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,p.material.toneMapped=Ct.getTransfer(T.colorSpace)!==It,(g!==T||_!==T.version||S!==o.toneMapping)&&(p.material.needsUpdate=!0,g=T,_=T.version,S=o.toneMapping),p.layers.enableAll(),v.unshift(p,p.geometry,p.material,0,0,null)):T&&T.isTexture&&(d===void 0&&(d=new _r(new cc(2,2),new ss({name:"BackgroundMaterial",uniforms:qo(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=T,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.toneMapped=Ct.getTransfer(T.colorSpace)!==It,T.matrixAutoUpdate===!0&&T.updateMatrix(),d.material.uniforms.uvTransform.value.copy(T.matrix),(g!==T||_!==T.version||S!==o.toneMapping)&&(d.material.needsUpdate=!0,g=T,_=T.version,S=o.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null))}function M(v,x){v.getRGB(Bu,Eg(o)),i.buffers.color.setClear(Bu.r,Bu.g,Bu.b,x,c)}return{getClearColor:function(){return u},setClearColor:function(v,x=1){u.set(v),h=x,M(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(v){h=v,M(u,h)},render:E}}function lM(o,e,t,i){const s=o.getParameter(o.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),c=i.isWebGL2||a!==null,u={},h=v(null);let d=h,p=!1;function g(B,$,te,K,H){let j=!1;if(c){const X=M(K,te,$);d!==X&&(d=X,S(d.object)),j=x(B,K,te,H),j&&A(B,K,te,H)}else{const X=$.wireframe===!0;(d.geometry!==K.id||d.program!==te.id||d.wireframe!==X)&&(d.geometry=K.id,d.program=te.id,d.wireframe=X,j=!0)}H!==null&&t.update(H,o.ELEMENT_ARRAY_BUFFER),(j||p)&&(p=!1,Y(B,$,te,K),H!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function _(){return i.isWebGL2?o.createVertexArray():a.createVertexArrayOES()}function S(B){return i.isWebGL2?o.bindVertexArray(B):a.bindVertexArrayOES(B)}function E(B){return i.isWebGL2?o.deleteVertexArray(B):a.deleteVertexArrayOES(B)}function M(B,$,te){const K=te.wireframe===!0;let H=u[B.id];H===void 0&&(H={},u[B.id]=H);let j=H[$.id];j===void 0&&(j={},H[$.id]=j);let X=j[K];return X===void 0&&(X=v(_()),j[K]=X),X}function v(B){const $=[],te=[],K=[];for(let H=0;H<s;H++)$[H]=0,te[H]=0,K[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:te,attributeDivisors:K,object:B,attributes:{},index:null}}function x(B,$,te,K){const H=d.attributes,j=$.attributes;let X=0;const F=te.getAttributes();for(const V in F)if(F[V].location>=0){const J=H[V];let he=j[V];if(he===void 0&&(V==="instanceMatrix"&&B.instanceMatrix&&(he=B.instanceMatrix),V==="instanceColor"&&B.instanceColor&&(he=B.instanceColor)),J===void 0||J.attribute!==he||he&&J.data!==he.data)return!0;X++}return d.attributesNum!==X||d.index!==K}function A(B,$,te,K){const H={},j=$.attributes;let X=0;const F=te.getAttributes();for(const V in F)if(F[V].location>=0){let J=j[V];J===void 0&&(V==="instanceMatrix"&&B.instanceMatrix&&(J=B.instanceMatrix),V==="instanceColor"&&B.instanceColor&&(J=B.instanceColor));const he={};he.attribute=J,J&&J.data&&(he.data=J.data),H[V]=he,X++}d.attributes=H,d.attributesNum=X,d.index=K}function T(){const B=d.newAttributes;for(let $=0,te=B.length;$<te;$++)B[$]=0}function L(B){O(B,0)}function O(B,$){const te=d.newAttributes,K=d.enabledAttributes,H=d.attributeDivisors;te[B]=1,K[B]===0&&(o.enableVertexAttribArray(B),K[B]=1),H[B]!==$&&((i.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,$),H[B]=$)}function I(){const B=d.newAttributes,$=d.enabledAttributes;for(let te=0,K=$.length;te<K;te++)$[te]!==B[te]&&(o.disableVertexAttribArray(te),$[te]=0)}function N(B,$,te,K,H,j,X){X===!0?o.vertexAttribIPointer(B,$,te,H,j):o.vertexAttribPointer(B,$,te,K,H,j)}function Y(B,$,te,K){if(i.isWebGL2===!1&&(B.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;T();const H=K.attributes,j=te.getAttributes(),X=$.defaultAttributeValues;for(const F in j){const V=j[F];if(V.location>=0){let q=H[F];if(q===void 0&&(F==="instanceMatrix"&&B.instanceMatrix&&(q=B.instanceMatrix),F==="instanceColor"&&B.instanceColor&&(q=B.instanceColor)),q!==void 0){const J=q.normalized,he=q.itemSize,Se=t.get(q);if(Se===void 0)continue;const Ee=Se.buffer,Re=Se.type,De=Se.bytesPerElement,ke=i.isWebGL2===!0&&(Re===o.INT||Re===o.UNSIGNED_INT||q.gpuType===sg);if(q.isInterleavedBufferAttribute){const ft=q.data,se=ft.stride,Kt=q.offset;if(ft.isInstancedInterleavedBuffer){for(let je=0;je<V.locationSize;je++)O(V.location+je,ft.meshPerAttribute);B.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let je=0;je<V.locationSize;je++)L(V.location+je);o.bindBuffer(o.ARRAY_BUFFER,Ee);for(let je=0;je<V.locationSize;je++)N(V.location+je,he/V.locationSize,Re,J,se*De,(Kt+he/V.locationSize*je)*De,ke)}else{if(q.isInstancedBufferAttribute){for(let ft=0;ft<V.locationSize;ft++)O(V.location+ft,q.meshPerAttribute);B.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ft=0;ft<V.locationSize;ft++)L(V.location+ft);o.bindBuffer(o.ARRAY_BUFFER,Ee);for(let ft=0;ft<V.locationSize;ft++)N(V.location+ft,he/V.locationSize,Re,J,he*De,he/V.locationSize*ft*De,ke)}}else if(X!==void 0){const J=X[F];if(J!==void 0)switch(J.length){case 2:o.vertexAttrib2fv(V.location,J);break;case 3:o.vertexAttrib3fv(V.location,J);break;case 4:o.vertexAttrib4fv(V.location,J);break;default:o.vertexAttrib1fv(V.location,J)}}}}I()}function C(){le();for(const B in u){const $=u[B];for(const te in $){const K=$[te];for(const H in K)E(K[H].object),delete K[H];delete $[te]}delete u[B]}}function P(B){if(u[B.id]===void 0)return;const $=u[B.id];for(const te in $){const K=$[te];for(const H in K)E(K[H].object),delete K[H];delete $[te]}delete u[B.id]}function ne(B){for(const $ in u){const te=u[$];if(te[B.id]===void 0)continue;const K=te[B.id];for(const H in K)E(K[H].object),delete K[H];delete te[B.id]}}function le(){fe(),p=!0,d!==h&&(d=h,S(d.object))}function fe(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:g,reset:le,resetDefaultState:fe,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfProgram:ne,initAttributes:T,enableAttribute:L,disableUnusedAttributes:I}}function uM(o,e,t,i){const s=i.isWebGL2;let a;function c(p){a=p}function u(p,g){o.drawArrays(a,p,g),t.update(g,a,1)}function h(p,g,_){if(_===0)return;let S,E;if(s)S=o,E="drawArraysInstanced";else if(S=e.get("ANGLE_instanced_arrays"),E="drawArraysInstancedANGLE",S===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[E](a,p,g,_),t.update(g,a,_)}function d(p,g,_){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<_;E++)this.render(p[E],g[E]);else{S.multiDrawArraysWEBGL(a,p,0,g,0,_);let E=0;for(let M=0;M<_;M++)E+=g[M];t.update(E,a,1)}}this.setMode=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function cM(o,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");i=o.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(N){if(N==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const c=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let u=t.precision!==void 0?t.precision:"highp";const h=a(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const d=c||e.has("WEBGL_draw_buffers"),p=t.logarithmicDepthBuffer===!0,g=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),_=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=o.getParameter(o.MAX_TEXTURE_SIZE),E=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),M=o.getParameter(o.MAX_VERTEX_ATTRIBS),v=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),x=o.getParameter(o.MAX_VARYING_VECTORS),A=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),T=_>0,L=c||e.has("OES_texture_float"),O=T&&L,I=c?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:c,drawBuffers:d,getMaxAnisotropy:s,getMaxPrecision:a,precision:u,logarithmicDepthBuffer:p,maxTextures:g,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:E,maxAttributes:M,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:A,vertexTextures:T,floatFragmentTextures:L,floatVertexTextures:O,maxSamples:I}}function fM(o){const e=this;let t=null,i=0,s=!1,a=!1;const c=new Ps,u=new dt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const S=g.length!==0||_||i!==0||s;return s=_,i=g.length,S},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,_){t=p(g,_,0)},this.setState=function(g,_,S){const E=g.clippingPlanes,M=g.clipIntersection,v=g.clipShadows,x=o.get(g);if(!s||E===null||E.length===0||a&&!v)a?p(null):d();else{const A=a?0:i,T=A*4;let L=x.clippingState||null;h.value=L,L=p(E,_,T,S);for(let O=0;O!==T;++O)L[O]=t[O];x.clippingState=L,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=A}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(g,_,S,E){const M=g!==null?g.length:0;let v=null;if(M!==0){if(v=h.value,E!==!0||v===null){const x=S+M*4,A=_.matrixWorldInverse;u.getNormalMatrix(A),(v===null||v.length<x)&&(v=new Float32Array(x));for(let T=0,L=S;T!==M;++T,L+=4)c.copy(g[T]).applyMatrix4(A,u),c.normal.toArray(v,L),v[L+3]=c.constant}h.value=v,h.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,v}}function hM(o){let e=new WeakMap;function t(c,u){return u===kh?c.mapping=jo:u===zh&&(c.mapping=Xo),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===kh||u===zh)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const d=new wy(h.height/2);return d.fromEquirectangularTexture(o,c),e.set(c,d),c.addEventListener("dispose",s),t(d.texture,c.mapping)}else return null}}return c}function s(c){const u=c.target;u.removeEventListener("dispose",s);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class dM extends wg{constructor(e=-1,t=1,i=1,s=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-e,c=i+e,u=s+t,h=s-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,c=a+d*this.view.width,u-=p*this.view.offsetY,h=u-p*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Oo=4,f1=[.125,.215,.35,.446,.526,.582],Is=20,Mh=new dM,h1=new wt;let Eh=null,wh=0,Th=0;const Ns=(1+Math.sqrt(5))/2,Do=1/Ns,d1=[new ce(1,1,1),new ce(-1,1,1),new ce(1,1,-1),new ce(-1,1,-1),new ce(0,Ns,Do),new ce(0,Ns,-Do),new ce(Do,0,Ns),new ce(-Do,0,Ns),new ce(Ns,Do,0),new ce(-Ns,Do,0)];class p1{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Eh=this._renderer.getRenderTarget(),wh=this._renderer.getActiveCubeFace(),Th=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=g1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Eh,wh,Th),e.scissorTest=!1,Hu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===jo||e.mapping===Xo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Eh=this._renderer.getRenderTarget(),wh=this._renderer.getActiveCubeFace(),Th=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Mi,minFilter:Mi,generateMipmaps:!1,type:Qa,format:ki,colorSpace:vr,depthBuffer:!1},s=m1(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=m1(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pM(a)),this._blurMaterial=mM(a,e,t)}return s}_compileMaterial(e){const t=new _r(this._lodPlanes[0],e);this._renderer.compile(t,Mh)}_sceneToCubeUV(e,t,i,s){const u=new Ei(90,1,t,i),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,_=p.toneMapping;p.getClearColor(h1),p.toneMapping=es,p.autoClear=!1;const S=new yg({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),E=new _r(new fl,S);let M=!1;const v=e.background;v?v.isColor&&(S.color.copy(v),e.background=null,M=!0):(S.color.copy(h1),M=!0);for(let x=0;x<6;x++){const A=x%3;A===0?(u.up.set(0,h[x],0),u.lookAt(d[x],0,0)):A===1?(u.up.set(0,0,h[x]),u.lookAt(0,d[x],0)):(u.up.set(0,h[x],0),u.lookAt(0,0,d[x]));const T=this._cubeSize;Hu(s,A*T,x>2?T:0,T,T),p.setRenderTarget(s),M&&p.render(E,u),p.render(e,u)}E.geometry.dispose(),E.material.dispose(),p.toneMapping=_,p.autoClear=g,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===jo||e.mapping===Xo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_1()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=g1());const a=s?this._cubemapMaterial:this._equirectMaterial,c=new _r(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=e;const h=this._cubeSize;Hu(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(c,Mh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),c=d1[(s-1)%d1.length];this._blur(e,s-1,s,a,c)}t.autoClear=i}_blur(e,t,i,s,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,s,"latitudinal",a),this._halfBlur(c,e,i,i,s,"longitudinal",a)}_halfBlur(e,t,i,s,a,c,u){const h=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,g=new _r(this._lodPlanes[s],d),_=d.uniforms,S=this._sizeLods[i]-1,E=isFinite(a)?Math.PI/(2*S):2*Math.PI/(2*Is-1),M=a/E,v=isFinite(a)?1+Math.floor(p*M):Is;v>Is&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Is}`);const x=[];let A=0;for(let N=0;N<Is;++N){const Y=N/M,C=Math.exp(-Y*Y/2);x.push(C),N===0?A+=C:N<v&&(A+=2*C)}for(let N=0;N<x.length;N++)x[N]=x[N]/A;_.envMap.value=e.texture,_.samples.value=v,_.weights.value=x,_.latitudinal.value=c==="latitudinal",u&&(_.poleAxis.value=u);const{_lodMax:T}=this;_.dTheta.value=E,_.mipInt.value=T-i;const L=this._sizeLods[s],O=3*L*(s>T-Oo?s-T+Oo:0),I=4*(this._cubeSize-L);Hu(t,O,I,3*L,2*L),h.setRenderTarget(t),h.render(g,Mh)}}function pM(o){const e=[],t=[],i=[];let s=o;const a=o-Oo+1+f1.length;for(let c=0;c<a;c++){const u=Math.pow(2,s);t.push(u);let h=1/u;c>o-Oo?h=f1[c-o+Oo-1]:c===0&&(h=0),i.push(h);const d=1/(u-2),p=-d,g=1+d,_=[p,p,g,p,g,g,p,p,g,g,p,g],S=6,E=6,M=3,v=2,x=1,A=new Float32Array(M*E*S),T=new Float32Array(v*E*S),L=new Float32Array(x*E*S);for(let I=0;I<S;I++){const N=I%3*2/3-1,Y=I>2?0:-1,C=[N,Y,0,N+2/3,Y,0,N+2/3,Y+1,0,N,Y,0,N+2/3,Y+1,0,N,Y+1,0];A.set(C,M*E*I),T.set(_,v*E*I);const P=[I,I,I,I,I,I];L.set(P,x*E*I)}const O=new Xs;O.setAttribute("position",new $i(A,M)),O.setAttribute("uv",new $i(T,v)),O.setAttribute("faceIndex",new $i(L,x)),e.push(O),s>Oo&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function m1(o,e,t){const i=new js(o,e,t);return i.texture.mapping=oc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hu(o,e,t,i,s){o.viewport.set(e,t,i,s),o.scissor.set(e,t,i,s)}function mM(o,e,t){const i=new Float32Array(Is),s=new ce(0,1,0);return new ss({name:"SphericalGaussianBlur",defines:{n:Is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:hd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Jr,depthTest:!1,depthWrite:!1})}function g1(){return new ss({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Jr,depthTest:!1,depthWrite:!1})}function _1(){return new ss({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jr,depthTest:!1,depthWrite:!1})}function hd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gM(o){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const h=u.mapping,d=h===kh||h===zh,p=h===jo||h===Xo;if(d||p)if(u.isRenderTargetTexture&&u.needsPMREMUpdate===!0){u.needsPMREMUpdate=!1;let g=e.get(u);return t===null&&(t=new p1(o)),g=d?t.fromEquirectangular(u,g):t.fromCubemap(u,g),e.set(u,g),g.texture}else{if(e.has(u))return e.get(u).texture;{const g=u.image;if(d&&g&&g.height>0||p&&g&&s(g)){t===null&&(t=new p1(o));const _=d?t.fromEquirectangular(u):t.fromCubemap(u);return e.set(u,_),u.addEventListener("dispose",a),_.texture}else return null}}}return u}function s(u){let h=0;const d=6;for(let p=0;p<d;p++)u[p]!==void 0&&h++;return h===d}function a(u){const h=u.target;h.removeEventListener("dispose",a);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function _M(o){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=o.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function vM(o,e,t,i){const s={},a=new WeakMap;function c(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);for(const E in _.morphAttributes){const M=_.morphAttributes[E];for(let v=0,x=M.length;v<x;v++)e.remove(M[v])}_.removeEventListener("dispose",c),delete s[_.id];const S=a.get(_);S&&(e.remove(S),a.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function u(g,_){return s[_.id]===!0||(_.addEventListener("dispose",c),s[_.id]=!0,t.memory.geometries++),_}function h(g){const _=g.attributes;for(const E in _)e.update(_[E],o.ARRAY_BUFFER);const S=g.morphAttributes;for(const E in S){const M=S[E];for(let v=0,x=M.length;v<x;v++)e.update(M[v],o.ARRAY_BUFFER)}}function d(g){const _=[],S=g.index,E=g.attributes.position;let M=0;if(S!==null){const A=S.array;M=S.version;for(let T=0,L=A.length;T<L;T+=3){const O=A[T+0],I=A[T+1],N=A[T+2];_.push(O,I,I,N,N,O)}}else if(E!==void 0){const A=E.array;M=E.version;for(let T=0,L=A.length/3-1;T<L;T+=3){const O=T+0,I=T+1,N=T+2;_.push(O,I,I,N,N,O)}}else return;const v=new(pg(_)?Mg:Sg)(_,1);v.version=M;const x=a.get(g);x&&e.remove(x),a.set(g,v)}function p(g){const _=a.get(g);if(_){const S=g.index;S!==null&&_.version<S.version&&d(g)}else d(g);return a.get(g)}return{get:u,update:h,getWireframeAttribute:p}}function xM(o,e,t,i){const s=i.isWebGL2;let a;function c(S){a=S}let u,h;function d(S){u=S.type,h=S.bytesPerElement}function p(S,E){o.drawElements(a,E,u,S*h),t.update(E,a,1)}function g(S,E,M){if(M===0)return;let v,x;if(s)v=o,x="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[x](a,E,u,S*h,M),t.update(E,a,M)}function _(S,E,M){if(M===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let x=0;x<M;x++)this.render(S[x]/h,E[x]);else{v.multiDrawElementsWEBGL(a,E,0,u,S,0,M);let x=0;for(let A=0;A<M;A++)x+=E[A];t.update(x,a,1)}}this.setMode=c,this.setIndex=d,this.render=p,this.renderInstances=g,this.renderMultiDraw=_}function yM(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,u){switch(t.calls++,c){case o.TRIANGLES:t.triangles+=u*(a/3);break;case o.LINES:t.lines+=u*(a/2);break;case o.LINE_STRIP:t.lines+=u*(a-1);break;case o.LINE_LOOP:t.lines+=u*a;break;case o.POINTS:t.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function SM(o,e){return o[0]-e[0]}function MM(o,e){return Math.abs(e[1])-Math.abs(o[1])}function EM(o,e,t){const i={},s=new Float32Array(8),a=new WeakMap,c=new gn,u=[];for(let d=0;d<8;d++)u[d]=[d,0];function h(d,p,g){const _=d.morphTargetInfluences;if(e.isWebGL2===!0){const E=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,M=E!==void 0?E.length:0;let v=a.get(p);if(v===void 0||v.count!==M){let $=function(){fe.dispose(),a.delete(p),p.removeEventListener("dispose",$)};var S=$;v!==void 0&&v.texture.dispose();const T=p.morphAttributes.position!==void 0,L=p.morphAttributes.normal!==void 0,O=p.morphAttributes.color!==void 0,I=p.morphAttributes.position||[],N=p.morphAttributes.normal||[],Y=p.morphAttributes.color||[];let C=0;T===!0&&(C=1),L===!0&&(C=2),O===!0&&(C=3);let P=p.attributes.position.count*C,ne=1;P>e.maxTextureSize&&(ne=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const le=new Float32Array(P*ne*4*M),fe=new _g(le,P,ne,M);fe.type=$r,fe.needsUpdate=!0;const B=C*4;for(let te=0;te<M;te++){const K=I[te],H=N[te],j=Y[te],X=P*ne*4*te;for(let F=0;F<K.count;F++){const V=F*B;T===!0&&(c.fromBufferAttribute(K,F),le[X+V+0]=c.x,le[X+V+1]=c.y,le[X+V+2]=c.z,le[X+V+3]=0),L===!0&&(c.fromBufferAttribute(H,F),le[X+V+4]=c.x,le[X+V+5]=c.y,le[X+V+6]=c.z,le[X+V+7]=0),O===!0&&(c.fromBufferAttribute(j,F),le[X+V+8]=c.x,le[X+V+9]=c.y,le[X+V+10]=c.z,le[X+V+11]=j.itemSize===4?c.w:1)}}v={count:M,texture:fe,size:new Tt(P,ne)},a.set(p,v),p.addEventListener("dispose",$)}let x=0;for(let T=0;T<_.length;T++)x+=_[T];const A=p.morphTargetsRelative?1:1-x;g.getUniforms().setValue(o,"morphTargetBaseInfluence",A),g.getUniforms().setValue(o,"morphTargetInfluences",_),g.getUniforms().setValue(o,"morphTargetsTexture",v.texture,t),g.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}else{const E=_===void 0?0:_.length;let M=i[p.id];if(M===void 0||M.length!==E){M=[];for(let L=0;L<E;L++)M[L]=[L,0];i[p.id]=M}for(let L=0;L<E;L++){const O=M[L];O[0]=L,O[1]=_[L]}M.sort(MM);for(let L=0;L<8;L++)L<E&&M[L][1]?(u[L][0]=M[L][0],u[L][1]=M[L][1]):(u[L][0]=Number.MAX_SAFE_INTEGER,u[L][1]=0);u.sort(SM);const v=p.morphAttributes.position,x=p.morphAttributes.normal;let A=0;for(let L=0;L<8;L++){const O=u[L],I=O[0],N=O[1];I!==Number.MAX_SAFE_INTEGER&&N?(v&&p.getAttribute("morphTarget"+L)!==v[I]&&p.setAttribute("morphTarget"+L,v[I]),x&&p.getAttribute("morphNormal"+L)!==x[I]&&p.setAttribute("morphNormal"+L,x[I]),s[L]=N,A+=N):(v&&p.hasAttribute("morphTarget"+L)===!0&&p.deleteAttribute("morphTarget"+L),x&&p.hasAttribute("morphNormal"+L)===!0&&p.deleteAttribute("morphNormal"+L),s[L]=0)}const T=p.morphTargetsRelative?1:1-A;g.getUniforms().setValue(o,"morphTargetBaseInfluence",T),g.getUniforms().setValue(o,"morphTargetInfluences",s)}}return{update:h}}function wM(o,e,t,i){let s=new WeakMap;function a(h){const d=i.render.frame,p=h.geometry,g=e.get(h,p);if(s.get(g)!==d&&(e.update(g),s.set(g,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),s.get(h)!==d&&(t.update(h.instanceMatrix,o.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,o.ARRAY_BUFFER),s.set(h,d))),h.isSkinnedMesh){const _=h.skeleton;s.get(_)!==d&&(_.update(),s.set(_,d))}return g}function c(){s=new WeakMap}function u(h){const d=h.target;d.removeEventListener("dispose",u),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:c}}class Rg extends Yn{constructor(e,t,i,s,a,c,u,h,d,p){if(p=p!==void 0?p:ks,p!==ks&&p!==Yo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===ks&&(i=qr),i===void 0&&p===Yo&&(i=Fs),super(null,s,a,c,u,h,p,i,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:Un,this.minFilter=h!==void 0?h:Un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const bg=new Yn,Lg=new Rg(1,1);Lg.compareFunction=dg;const Pg=new _g,Ng=new oy,Dg=new Tg,v1=[],x1=[],y1=new Float32Array(16),S1=new Float32Array(9),M1=new Float32Array(4);function na(o,e,t){const i=o[0];if(i<=0||i>0)return o;const s=e*t;let a=v1[s];if(a===void 0&&(a=new Float32Array(s),v1[s]=a),e!==0){i.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,o[c].toArray(a,u)}return a}function on(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function an(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function fc(o,e){let t=x1[e];t===void 0&&(t=new Int32Array(e),x1[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function TM(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function CM(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;o.uniform2fv(this.addr,e),an(t,e)}}function AM(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;o.uniform3fv(this.addr,e),an(t,e)}}function RM(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;o.uniform4fv(this.addr,e),an(t,e)}}function bM(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;M1.set(i),o.uniformMatrix2fv(this.addr,!1,M1),an(t,i)}}function LM(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;S1.set(i),o.uniformMatrix3fv(this.addr,!1,S1),an(t,i)}}function PM(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;y1.set(i),o.uniformMatrix4fv(this.addr,!1,y1),an(t,i)}}function NM(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function DM(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;o.uniform2iv(this.addr,e),an(t,e)}}function UM(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;o.uniform3iv(this.addr,e),an(t,e)}}function IM(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;o.uniform4iv(this.addr,e),an(t,e)}}function OM(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function FM(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;o.uniform2uiv(this.addr,e),an(t,e)}}function kM(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;o.uniform3uiv(this.addr,e),an(t,e)}}function zM(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;o.uniform4uiv(this.addr,e),an(t,e)}}function BM(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s);const a=this.type===o.SAMPLER_2D_SHADOW?Lg:bg;t.setTexture2D(e||a,s)}function HM(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Ng,s)}function VM(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Dg,s)}function GM(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Pg,s)}function WM(o){switch(o){case 5126:return TM;case 35664:return CM;case 35665:return AM;case 35666:return RM;case 35674:return bM;case 35675:return LM;case 35676:return PM;case 5124:case 35670:return NM;case 35667:case 35671:return DM;case 35668:case 35672:return UM;case 35669:case 35673:return IM;case 5125:return OM;case 36294:return FM;case 36295:return kM;case 36296:return zM;case 35678:case 36198:case 36298:case 36306:case 35682:return BM;case 35679:case 36299:case 36307:return HM;case 35680:case 36300:case 36308:case 36293:return VM;case 36289:case 36303:case 36311:case 36292:return GM}}function jM(o,e){o.uniform1fv(this.addr,e)}function XM(o,e){const t=na(e,this.size,2);o.uniform2fv(this.addr,t)}function YM(o,e){const t=na(e,this.size,3);o.uniform3fv(this.addr,t)}function qM(o,e){const t=na(e,this.size,4);o.uniform4fv(this.addr,t)}function $M(o,e){const t=na(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function ZM(o,e){const t=na(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function KM(o,e){const t=na(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function QM(o,e){o.uniform1iv(this.addr,e)}function JM(o,e){o.uniform2iv(this.addr,e)}function eE(o,e){o.uniform3iv(this.addr,e)}function tE(o,e){o.uniform4iv(this.addr,e)}function nE(o,e){o.uniform1uiv(this.addr,e)}function iE(o,e){o.uniform2uiv(this.addr,e)}function rE(o,e){o.uniform3uiv(this.addr,e)}function sE(o,e){o.uniform4uiv(this.addr,e)}function oE(o,e,t){const i=this.cache,s=e.length,a=fc(t,s);on(i,a)||(o.uniform1iv(this.addr,a),an(i,a));for(let c=0;c!==s;++c)t.setTexture2D(e[c]||bg,a[c])}function aE(o,e,t){const i=this.cache,s=e.length,a=fc(t,s);on(i,a)||(o.uniform1iv(this.addr,a),an(i,a));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||Ng,a[c])}function lE(o,e,t){const i=this.cache,s=e.length,a=fc(t,s);on(i,a)||(o.uniform1iv(this.addr,a),an(i,a));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||Dg,a[c])}function uE(o,e,t){const i=this.cache,s=e.length,a=fc(t,s);on(i,a)||(o.uniform1iv(this.addr,a),an(i,a));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||Pg,a[c])}function cE(o){switch(o){case 5126:return jM;case 35664:return XM;case 35665:return YM;case 35666:return qM;case 35674:return $M;case 35675:return ZM;case 35676:return KM;case 5124:case 35670:return QM;case 35667:case 35671:return JM;case 35668:case 35672:return eE;case 35669:case 35673:return tE;case 5125:return nE;case 36294:return iE;case 36295:return rE;case 36296:return sE;case 35678:case 36198:case 36298:case 36306:case 35682:return oE;case 35679:case 36299:case 36307:return aE;case 35680:case 36300:case 36308:case 36293:return lE;case 36289:case 36303:case 36311:case 36292:return uE}}class fE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=WM(t.type)}}class hE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cE(t.type)}}class dE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let a=0,c=s.length;a!==c;++a){const u=s[a];u.setValue(e,t[u.id],i)}}}const Ch=/(\w+)(\])?(\[|\.)?/g;function E1(o,e){o.seq.push(e),o.map[e.id]=e}function pE(o,e,t){const i=o.name,s=i.length;for(Ch.lastIndex=0;;){const a=Ch.exec(i),c=Ch.lastIndex;let u=a[1];const h=a[2]==="]",d=a[3];if(h&&(u=u|0),d===void 0||d==="["&&c+2===s){E1(t,d===void 0?new fE(u,o,e):new hE(u,o,e));break}else{let g=t.map[u];g===void 0&&(g=new dE(u),E1(t,g)),t=g}}}class Gu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=e.getActiveUniform(t,s),c=e.getUniformLocation(t,a.name);pE(a,c,this)}}setValue(e,t,i,s){const a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,c=t.length;a!==c;++a){const u=t[a],h=i[u.id];h.needsUpdate!==!1&&u.setValue(e,h.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,a=e.length;s!==a;++s){const c=e[s];c.id in t&&i.push(c)}return i}}function w1(o,e,t){const i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}const mE=37297;let gE=0;function _E(o,e){const t=o.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=s;c<a;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}function vE(o){const e=Ct.getPrimaries(Ct.workingColorSpace),t=Ct.getPrimaries(o);let i;switch(e===t?i="":e===Zu&&t===$u?i="LinearDisplayP3ToLinearSRGB":e===$u&&t===Zu&&(i="LinearSRGBToLinearDisplayP3"),o){case vr:case ac:return[i,"LinearTransferOETF"];case sn:case ud:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[i,"LinearTransferOETF"]}}function T1(o,e,t){const i=o.getShaderParameter(e,o.COMPILE_STATUS),s=o.getShaderInfoLog(e).trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+_E(o.getShaderSource(e),c)}else return s}function xE(o,e){const t=vE(e);return`vec4 ${o}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function yE(o,e){let t;switch(e){case m2:t="Linear";break;case g2:t="Reinhard";break;case _2:t="OptimizedCineon";break;case v2:t="ACESFilmic";break;case y2:t="AgX";break;case x2:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function SE(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Fo).join(`
`)}function ME(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Fo).join(`
`)}function EE(o){const e=[];for(const t in o){const i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function wE(o,e){const t={},i=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=o.getActiveAttrib(e,s),c=a.name;let u=1;a.type===o.FLOAT_MAT2&&(u=2),a.type===o.FLOAT_MAT3&&(u=3),a.type===o.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:o.getAttribLocation(e,c),locationSize:u}}return t}function Fo(o){return o!==""}function C1(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function A1(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const TE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wh(o){return o.replace(TE,AE)}const CE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function AE(o,e){let t=ut[e];if(t===void 0){const i=CE.get(e);if(i!==void 0)t=ut[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wh(t)}const RE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function R1(o){return o.replace(RE,bE)}function bE(o,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function b1(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function LE(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===ng?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Gx?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===dr&&(e="SHADOWMAP_TYPE_VSM"),e}function PE(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case jo:case Xo:e="ENVMAP_TYPE_CUBE";break;case oc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function NE(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Xo:e="ENVMAP_MODE_REFRACTION";break}return e}function DE(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case ig:e="ENVMAP_BLENDING_MULTIPLY";break;case d2:e="ENVMAP_BLENDING_MIX";break;case p2:e="ENVMAP_BLENDING_ADD";break}return e}function UE(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function IE(o,e,t,i){const s=o.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const h=LE(t),d=PE(t),p=NE(t),g=DE(t),_=UE(t),S=t.isWebGL2?"":SE(t),E=ME(t),M=EE(a),v=s.createProgram();let x,A,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Fo).join(`
`),x.length>0&&(x+=`
`),A=[S,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Fo).join(`
`),A.length>0&&(A+=`
`)):(x=[b1(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fo).join(`
`),A=[S,b1(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==es?"#define TONE_MAPPING":"",t.toneMapping!==es?ut.tonemapping_pars_fragment:"",t.toneMapping!==es?yE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,xE("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fo).join(`
`)),c=Wh(c),c=C1(c,t),c=A1(c,t),u=Wh(u),u=C1(u,t),u=A1(u,t),c=R1(c),u=R1(u),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,x=[E,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,A=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===X0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===X0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+A);const L=T+x+c,O=T+A+u,I=w1(s,s.VERTEX_SHADER,L),N=w1(s,s.FRAGMENT_SHADER,O);s.attachShader(v,I),s.attachShader(v,N),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function Y(le){if(o.debug.checkShaderErrors){const fe=s.getProgramInfoLog(v).trim(),B=s.getShaderInfoLog(I).trim(),$=s.getShaderInfoLog(N).trim();let te=!0,K=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(te=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,v,I,N);else{const H=T1(s,I,"vertex"),j=T1(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Program Info Log: `+fe+`
`+H+`
`+j)}else fe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",fe):(B===""||$==="")&&(K=!1);K&&(le.diagnostics={runnable:te,programLog:fe,vertexShader:{log:B,prefix:x},fragmentShader:{log:$,prefix:A}})}s.deleteShader(I),s.deleteShader(N),C=new Gu(s,v),P=wE(s,v)}let C;this.getUniforms=function(){return C===void 0&&Y(this),C};let P;this.getAttributes=function(){return P===void 0&&Y(this),P};let ne=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ne===!1&&(ne=s.getProgramParameter(v,mE)),ne},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gE++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=N,this}let OE=0;class FE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new kE(e),t.set(e,i)),i}}class kE{constructor(e){this.id=OE++,this.code=e,this.usedTimes=0}}function zE(o,e,t,i,s,a,c){const u=new vg,h=new FE,d=[],p=s.isWebGL2,g=s.logarithmicDepthBuffer,_=s.vertexTextures;let S=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(C){return C===0?"uv":`uv${C}`}function v(C,P,ne,le,fe){const B=le.fog,$=fe.geometry,te=C.isMeshStandardMaterial?le.environment:null,K=(C.isMeshStandardMaterial?t:e).get(C.envMap||te),H=K&&K.mapping===oc?K.image.height:null,j=E[C.type];C.precision!==null&&(S=s.getMaxPrecision(C.precision),S!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",S,"instead."));const X=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,F=X!==void 0?X.length:0;let V=0;$.morphAttributes.position!==void 0&&(V=1),$.morphAttributes.normal!==void 0&&(V=2),$.morphAttributes.color!==void 0&&(V=3);let q,J,he,Se;if(j){const ln=ji[j];q=ln.vertexShader,J=ln.fragmentShader}else q=C.vertexShader,J=C.fragmentShader,h.update(C),he=h.getVertexShaderID(C),Se=h.getFragmentShaderID(C);const Ee=o.getRenderTarget(),Re=fe.isInstancedMesh===!0,De=fe.isBatchedMesh===!0,ke=!!C.map,ft=!!C.matcap,se=!!K,Kt=!!C.aoMap,je=!!C.lightMap,tt=!!C.bumpMap,He=!!C.normalMap,At=!!C.displacementMap,rt=!!C.emissiveMap,U=!!C.metalnessMap,b=!!C.roughnessMap,ie=C.anisotropy>0,ve=C.clearcoat>0,ge=C.iridescence>0,xe=C.sheen>0,Ve=C.transmission>0,Ae=ie&&!!C.anisotropyMap,Ue=ve&&!!C.clearcoatMap,Xe=ve&&!!C.clearcoatNormalMap,st=ve&&!!C.clearcoatRoughnessMap,me=ge&&!!C.iridescenceMap,mt=ge&&!!C.iridescenceThicknessMap,ct=xe&&!!C.sheenColorMap,Je=xe&&!!C.sheenRoughnessMap,We=!!C.specularMap,Oe=!!C.specularColorMap,nt=!!C.specularIntensityMap,_t=Ve&&!!C.transmissionMap,Lt=Ve&&!!C.thicknessMap,ot=!!C.gradientMap,Me=!!C.alphaMap,G=C.alphaTest>0,we=!!C.alphaHash,Ce=!!C.extensions,Ke=!!$.attributes.uv1,Ye=!!$.attributes.uv2,St=!!$.attributes.uv3;let Mt=es;return C.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Mt=o.toneMapping),{isWebGL2:p,shaderID:j,shaderType:C.type,shaderName:C.name,vertexShader:q,fragmentShader:J,defines:C.defines,customVertexShaderID:he,customFragmentShaderID:Se,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:S,batching:De,instancing:Re,instancingColor:Re&&fe.instanceColor!==null,supportsVertexTextures:_,outputColorSpace:Ee===null?o.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:vr,map:ke,matcap:ft,envMap:se,envMapMode:se&&K.mapping,envMapCubeUVHeight:H,aoMap:Kt,lightMap:je,bumpMap:tt,normalMap:He,displacementMap:_&&At,emissiveMap:rt,normalMapObjectSpace:He&&C.normalMapType===D2,normalMapTangentSpace:He&&C.normalMapType===N2,metalnessMap:U,roughnessMap:b,anisotropy:ie,anisotropyMap:Ae,clearcoat:ve,clearcoatMap:Ue,clearcoatNormalMap:Xe,clearcoatRoughnessMap:st,iridescence:ge,iridescenceMap:me,iridescenceThicknessMap:mt,sheen:xe,sheenColorMap:ct,sheenRoughnessMap:Je,specularMap:We,specularColorMap:Oe,specularIntensityMap:nt,transmission:Ve,transmissionMap:_t,thicknessMap:Lt,gradientMap:ot,opaque:C.transparent===!1&&C.blending===Bo,alphaMap:Me,alphaTest:G,alphaHash:we,combine:C.combine,mapUv:ke&&M(C.map.channel),aoMapUv:Kt&&M(C.aoMap.channel),lightMapUv:je&&M(C.lightMap.channel),bumpMapUv:tt&&M(C.bumpMap.channel),normalMapUv:He&&M(C.normalMap.channel),displacementMapUv:At&&M(C.displacementMap.channel),emissiveMapUv:rt&&M(C.emissiveMap.channel),metalnessMapUv:U&&M(C.metalnessMap.channel),roughnessMapUv:b&&M(C.roughnessMap.channel),anisotropyMapUv:Ae&&M(C.anisotropyMap.channel),clearcoatMapUv:Ue&&M(C.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&M(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&M(C.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&M(C.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&M(C.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&M(C.sheenColorMap.channel),sheenRoughnessMapUv:Je&&M(C.sheenRoughnessMap.channel),specularMapUv:We&&M(C.specularMap.channel),specularColorMapUv:Oe&&M(C.specularColorMap.channel),specularIntensityMapUv:nt&&M(C.specularIntensityMap.channel),transmissionMapUv:_t&&M(C.transmissionMap.channel),thicknessMapUv:Lt&&M(C.thicknessMap.channel),alphaMapUv:Me&&M(C.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(He||ie),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,vertexUv1s:Ke,vertexUv2s:Ye,vertexUv3s:St,pointsUvs:fe.isPoints===!0&&!!$.attributes.uv&&(ke||Me),fog:!!B,useFog:C.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:g,skinning:fe.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:V,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&ne.length>0,shadowMapType:o.shadowMap.type,toneMapping:Mt,useLegacyLights:o._useLegacyLights,decodeVideoTexture:ke&&C.map.isVideoTexture===!0&&Ct.getTransfer(C.map.colorSpace)===It,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Xi,flipSided:C.side===Xn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionDerivatives:Ce&&C.extensions.derivatives===!0,extensionFragDepth:Ce&&C.extensions.fragDepth===!0,extensionDrawBuffers:Ce&&C.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ce&&C.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ce&&C.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:p||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()}}function x(C){const P=[];if(C.shaderID?P.push(C.shaderID):(P.push(C.customVertexShaderID),P.push(C.customFragmentShaderID)),C.defines!==void 0)for(const ne in C.defines)P.push(ne),P.push(C.defines[ne]);return C.isRawShaderMaterial===!1&&(A(P,C),T(P,C),P.push(o.outputColorSpace)),P.push(C.customProgramCacheKey),P.join()}function A(C,P){C.push(P.precision),C.push(P.outputColorSpace),C.push(P.envMapMode),C.push(P.envMapCubeUVHeight),C.push(P.mapUv),C.push(P.alphaMapUv),C.push(P.lightMapUv),C.push(P.aoMapUv),C.push(P.bumpMapUv),C.push(P.normalMapUv),C.push(P.displacementMapUv),C.push(P.emissiveMapUv),C.push(P.metalnessMapUv),C.push(P.roughnessMapUv),C.push(P.anisotropyMapUv),C.push(P.clearcoatMapUv),C.push(P.clearcoatNormalMapUv),C.push(P.clearcoatRoughnessMapUv),C.push(P.iridescenceMapUv),C.push(P.iridescenceThicknessMapUv),C.push(P.sheenColorMapUv),C.push(P.sheenRoughnessMapUv),C.push(P.specularMapUv),C.push(P.specularColorMapUv),C.push(P.specularIntensityMapUv),C.push(P.transmissionMapUv),C.push(P.thicknessMapUv),C.push(P.combine),C.push(P.fogExp2),C.push(P.sizeAttenuation),C.push(P.morphTargetsCount),C.push(P.morphAttributeCount),C.push(P.numDirLights),C.push(P.numPointLights),C.push(P.numSpotLights),C.push(P.numSpotLightMaps),C.push(P.numHemiLights),C.push(P.numRectAreaLights),C.push(P.numDirLightShadows),C.push(P.numPointLightShadows),C.push(P.numSpotLightShadows),C.push(P.numSpotLightShadowsWithMaps),C.push(P.numLightProbes),C.push(P.shadowMapType),C.push(P.toneMapping),C.push(P.numClippingPlanes),C.push(P.numClipIntersection),C.push(P.depthPacking)}function T(C,P){u.disableAll(),P.isWebGL2&&u.enable(0),P.supportsVertexTextures&&u.enable(1),P.instancing&&u.enable(2),P.instancingColor&&u.enable(3),P.matcap&&u.enable(4),P.envMap&&u.enable(5),P.normalMapObjectSpace&&u.enable(6),P.normalMapTangentSpace&&u.enable(7),P.clearcoat&&u.enable(8),P.iridescence&&u.enable(9),P.alphaTest&&u.enable(10),P.vertexColors&&u.enable(11),P.vertexAlphas&&u.enable(12),P.vertexUv1s&&u.enable(13),P.vertexUv2s&&u.enable(14),P.vertexUv3s&&u.enable(15),P.vertexTangents&&u.enable(16),P.anisotropy&&u.enable(17),P.alphaHash&&u.enable(18),P.batching&&u.enable(19),C.push(u.mask),u.disableAll(),P.fog&&u.enable(0),P.useFog&&u.enable(1),P.flatShading&&u.enable(2),P.logarithmicDepthBuffer&&u.enable(3),P.skinning&&u.enable(4),P.morphTargets&&u.enable(5),P.morphNormals&&u.enable(6),P.morphColors&&u.enable(7),P.premultipliedAlpha&&u.enable(8),P.shadowMapEnabled&&u.enable(9),P.useLegacyLights&&u.enable(10),P.doubleSided&&u.enable(11),P.flipSided&&u.enable(12),P.useDepthPacking&&u.enable(13),P.dithering&&u.enable(14),P.transmission&&u.enable(15),P.sheen&&u.enable(16),P.opaque&&u.enable(17),P.pointsUvs&&u.enable(18),P.decodeVideoTexture&&u.enable(19),C.push(u.mask)}function L(C){const P=E[C.type];let ne;if(P){const le=ji[P];ne=yy.clone(le.uniforms)}else ne=C.uniforms;return ne}function O(C,P){let ne;for(let le=0,fe=d.length;le<fe;le++){const B=d[le];if(B.cacheKey===P){ne=B,++ne.usedTimes;break}}return ne===void 0&&(ne=new IE(o,P,C,a),d.push(ne)),ne}function I(C){if(--C.usedTimes===0){const P=d.indexOf(C);d[P]=d[d.length-1],d.pop(),C.destroy()}}function N(C){h.remove(C)}function Y(){h.dispose()}return{getParameters:v,getProgramCacheKey:x,getUniforms:L,acquireProgram:O,releaseProgram:I,releaseShaderCache:N,programs:d,dispose:Y}}function BE(){let o=new WeakMap;function e(a){let c=o.get(a);return c===void 0&&(c={},o.set(a,c)),c}function t(a){o.delete(a)}function i(a,c,u){o.get(a)[c]=u}function s(){o=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function HE(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function L1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function P1(){const o=[];let e=0;const t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function c(g,_,S,E,M,v){let x=o[e];return x===void 0?(x={id:g.id,object:g,geometry:_,material:S,groupOrder:E,renderOrder:g.renderOrder,z:M,group:v},o[e]=x):(x.id=g.id,x.object=g,x.geometry=_,x.material=S,x.groupOrder=E,x.renderOrder=g.renderOrder,x.z=M,x.group=v),e++,x}function u(g,_,S,E,M,v){const x=c(g,_,S,E,M,v);S.transmission>0?i.push(x):S.transparent===!0?s.push(x):t.push(x)}function h(g,_,S,E,M,v){const x=c(g,_,S,E,M,v);S.transmission>0?i.unshift(x):S.transparent===!0?s.unshift(x):t.unshift(x)}function d(g,_){t.length>1&&t.sort(g||HE),i.length>1&&i.sort(_||L1),s.length>1&&s.sort(_||L1)}function p(){for(let g=e,_=o.length;g<_;g++){const S=o[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:u,unshift:h,finish:p,sort:d}}function VE(){let o=new WeakMap;function e(i,s){const a=o.get(i);let c;return a===void 0?(c=new P1,o.set(i,[c])):s>=a.length?(c=new P1,a.push(c)):c=a[s],c}function t(){o=new WeakMap}return{get:e,dispose:t}}function GE(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ce,color:new wt};break;case"SpotLight":t={position:new ce,direction:new ce,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ce,color:new wt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ce,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":t={color:new wt,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return o[e.id]=t,t}}}function WE(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let jE=0;function XE(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function YE(o,e){const t=new GE,i=WE(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ce);const a=new ce,c=new _n,u=new _n;function h(p,g){let _=0,S=0,E=0;for(let le=0;le<9;le++)s.probe[le].set(0,0,0);let M=0,v=0,x=0,A=0,T=0,L=0,O=0,I=0,N=0,Y=0,C=0;p.sort(XE);const P=g===!0?Math.PI:1;for(let le=0,fe=p.length;le<fe;le++){const B=p[le],$=B.color,te=B.intensity,K=B.distance,H=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)_+=$.r*te*P,S+=$.g*te*P,E+=$.b*te*P;else if(B.isLightProbe){for(let j=0;j<9;j++)s.probe[j].addScaledVector(B.sh.coefficients[j],te);C++}else if(B.isDirectionalLight){const j=t.get(B);if(j.color.copy(B.color).multiplyScalar(B.intensity*P),B.castShadow){const X=B.shadow,F=i.get(B);F.shadowBias=X.bias,F.shadowNormalBias=X.normalBias,F.shadowRadius=X.radius,F.shadowMapSize=X.mapSize,s.directionalShadow[M]=F,s.directionalShadowMap[M]=H,s.directionalShadowMatrix[M]=B.shadow.matrix,L++}s.directional[M]=j,M++}else if(B.isSpotLight){const j=t.get(B);j.position.setFromMatrixPosition(B.matrixWorld),j.color.copy($).multiplyScalar(te*P),j.distance=K,j.coneCos=Math.cos(B.angle),j.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),j.decay=B.decay,s.spot[x]=j;const X=B.shadow;if(B.map&&(s.spotLightMap[N]=B.map,N++,X.updateMatrices(B),B.castShadow&&Y++),s.spotLightMatrix[x]=X.matrix,B.castShadow){const F=i.get(B);F.shadowBias=X.bias,F.shadowNormalBias=X.normalBias,F.shadowRadius=X.radius,F.shadowMapSize=X.mapSize,s.spotShadow[x]=F,s.spotShadowMap[x]=H,I++}x++}else if(B.isRectAreaLight){const j=t.get(B);j.color.copy($).multiplyScalar(te),j.halfWidth.set(B.width*.5,0,0),j.halfHeight.set(0,B.height*.5,0),s.rectArea[A]=j,A++}else if(B.isPointLight){const j=t.get(B);if(j.color.copy(B.color).multiplyScalar(B.intensity*P),j.distance=B.distance,j.decay=B.decay,B.castShadow){const X=B.shadow,F=i.get(B);F.shadowBias=X.bias,F.shadowNormalBias=X.normalBias,F.shadowRadius=X.radius,F.shadowMapSize=X.mapSize,F.shadowCameraNear=X.camera.near,F.shadowCameraFar=X.camera.far,s.pointShadow[v]=F,s.pointShadowMap[v]=H,s.pointShadowMatrix[v]=B.shadow.matrix,O++}s.point[v]=j,v++}else if(B.isHemisphereLight){const j=t.get(B);j.skyColor.copy(B.color).multiplyScalar(te*P),j.groundColor.copy(B.groundColor).multiplyScalar(te*P),s.hemi[T]=j,T++}}A>0&&(e.isWebGL2?o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Te.LTC_FLOAT_1,s.rectAreaLTC2=Te.LTC_FLOAT_2):(s.rectAreaLTC1=Te.LTC_HALF_1,s.rectAreaLTC2=Te.LTC_HALF_2):o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Te.LTC_FLOAT_1,s.rectAreaLTC2=Te.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Te.LTC_HALF_1,s.rectAreaLTC2=Te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=_,s.ambient[1]=S,s.ambient[2]=E;const ne=s.hash;(ne.directionalLength!==M||ne.pointLength!==v||ne.spotLength!==x||ne.rectAreaLength!==A||ne.hemiLength!==T||ne.numDirectionalShadows!==L||ne.numPointShadows!==O||ne.numSpotShadows!==I||ne.numSpotMaps!==N||ne.numLightProbes!==C)&&(s.directional.length=M,s.spot.length=x,s.rectArea.length=A,s.point.length=v,s.hemi.length=T,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=I,s.spotShadowMap.length=I,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=I+N-Y,s.spotLightMap.length=N,s.numSpotLightShadowsWithMaps=Y,s.numLightProbes=C,ne.directionalLength=M,ne.pointLength=v,ne.spotLength=x,ne.rectAreaLength=A,ne.hemiLength=T,ne.numDirectionalShadows=L,ne.numPointShadows=O,ne.numSpotShadows=I,ne.numSpotMaps=N,ne.numLightProbes=C,s.version=jE++)}function d(p,g){let _=0,S=0,E=0,M=0,v=0;const x=g.matrixWorldInverse;for(let A=0,T=p.length;A<T;A++){const L=p[A];if(L.isDirectionalLight){const O=s.directional[_];O.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),O.direction.sub(a),O.direction.transformDirection(x),_++}else if(L.isSpotLight){const O=s.spot[E];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(x),O.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),O.direction.sub(a),O.direction.transformDirection(x),E++}else if(L.isRectAreaLight){const O=s.rectArea[M];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(x),u.identity(),c.copy(L.matrixWorld),c.premultiply(x),u.extractRotation(c),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),O.halfWidth.applyMatrix4(u),O.halfHeight.applyMatrix4(u),M++}else if(L.isPointLight){const O=s.point[S];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(x),S++}else if(L.isHemisphereLight){const O=s.hemi[v];O.direction.setFromMatrixPosition(L.matrixWorld),O.direction.transformDirection(x),v++}}}return{setup:h,setupView:d,state:s}}function N1(o,e){const t=new YE(o,e),i=[],s=[];function a(){i.length=0,s.length=0}function c(g){i.push(g)}function u(g){s.push(g)}function h(g){t.setup(i,g)}function d(g){t.setupView(i,g)}return{init:a,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:h,setupLightsView:d,pushLight:c,pushShadow:u}}function qE(o,e){let t=new WeakMap;function i(a,c=0){const u=t.get(a);let h;return u===void 0?(h=new N1(o,e),t.set(a,[h])):c>=u.length?(h=new N1(o,e),u.push(h)):h=u[c],h}function s(){t=new WeakMap}return{get:i,dispose:s}}class $E extends uc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=L2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ZE extends uc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const KE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function JE(o,e,t){let i=new Cg;const s=new Tt,a=new Tt,c=new gn,u=new $E({depthPacking:P2}),h=new ZE,d={},p=t.maxTextureSize,g={[rs]:Xn,[Xn]:rs,[Xi]:Xi},_=new ss({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:KE,fragmentShader:QE}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const E=new Xs;E.setAttribute("position",new $i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new _r(E,_),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ng;let x=this.type;this.render=function(I,N,Y){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||I.length===0)return;const C=o.getRenderTarget(),P=o.getActiveCubeFace(),ne=o.getActiveMipmapLevel(),le=o.state;le.setBlending(Jr),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const fe=x!==dr&&this.type===dr,B=x===dr&&this.type!==dr;for(let $=0,te=I.length;$<te;$++){const K=I[$],H=K.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const j=H.getFrameExtents();if(s.multiply(j),a.copy(H.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(a.x=Math.floor(p/j.x),s.x=a.x*j.x,H.mapSize.x=a.x),s.y>p&&(a.y=Math.floor(p/j.y),s.y=a.y*j.y,H.mapSize.y=a.y)),H.map===null||fe===!0||B===!0){const F=this.type!==dr?{minFilter:Un,magFilter:Un}:{};H.map!==null&&H.map.dispose(),H.map=new js(s.x,s.y,F),H.map.texture.name=K.name+".shadowMap",H.camera.updateProjectionMatrix()}o.setRenderTarget(H.map),o.clear();const X=H.getViewportCount();for(let F=0;F<X;F++){const V=H.getViewport(F);c.set(a.x*V.x,a.y*V.y,a.x*V.z,a.y*V.w),le.viewport(c),H.updateMatrices(K,F),i=H.getFrustum(),L(N,Y,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===dr&&A(H,Y),H.needsUpdate=!1}x=this.type,v.needsUpdate=!1,o.setRenderTarget(C,P,ne)};function A(I,N){const Y=e.update(M);_.defines.VSM_SAMPLES!==I.blurSamples&&(_.defines.VSM_SAMPLES=I.blurSamples,S.defines.VSM_SAMPLES=I.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new js(s.x,s.y)),_.uniforms.shadow_pass.value=I.map.texture,_.uniforms.resolution.value=I.mapSize,_.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(N,null,Y,_,M,null),S.uniforms.shadow_pass.value=I.mapPass.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(N,null,Y,S,M,null)}function T(I,N,Y,C){let P=null;const ne=Y.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(ne!==void 0)P=ne;else if(P=Y.isPointLight===!0?h:u,o.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const le=P.uuid,fe=N.uuid;let B=d[le];B===void 0&&(B={},d[le]=B);let $=B[fe];$===void 0&&($=P.clone(),B[fe]=$,N.addEventListener("dispose",O)),P=$}if(P.visible=N.visible,P.wireframe=N.wireframe,C===dr?P.side=N.shadowSide!==null?N.shadowSide:N.side:P.side=N.shadowSide!==null?N.shadowSide:g[N.side],P.alphaMap=N.alphaMap,P.alphaTest=N.alphaTest,P.map=N.map,P.clipShadows=N.clipShadows,P.clippingPlanes=N.clippingPlanes,P.clipIntersection=N.clipIntersection,P.displacementMap=N.displacementMap,P.displacementScale=N.displacementScale,P.displacementBias=N.displacementBias,P.wireframeLinewidth=N.wireframeLinewidth,P.linewidth=N.linewidth,Y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const le=o.properties.get(P);le.light=Y}return P}function L(I,N,Y,C,P){if(I.visible===!1)return;if(I.layers.test(N.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&P===dr)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,I.matrixWorld);const fe=e.update(I),B=I.material;if(Array.isArray(B)){const $=fe.groups;for(let te=0,K=$.length;te<K;te++){const H=$[te],j=B[H.materialIndex];if(j&&j.visible){const X=T(I,j,C,P);I.onBeforeShadow(o,I,N,Y,fe,X,H),o.renderBufferDirect(Y,null,fe,X,I,H),I.onAfterShadow(o,I,N,Y,fe,X,H)}}}else if(B.visible){const $=T(I,B,C,P);I.onBeforeShadow(o,I,N,Y,fe,$,null),o.renderBufferDirect(Y,null,fe,$,I,null),I.onAfterShadow(o,I,N,Y,fe,$,null)}}const le=I.children;for(let fe=0,B=le.length;fe<B;fe++)L(le[fe],N,Y,C,P)}function O(I){I.target.removeEventListener("dispose",O);for(const Y in d){const C=d[Y],P=I.target.uuid;P in C&&(C[P].dispose(),delete C[P])}}}function ew(o,e,t){const i=t.isWebGL2;function s(){let G=!1;const we=new gn;let Ce=null;const Ke=new gn(0,0,0,0);return{setMask:function(Ye){Ce!==Ye&&!G&&(o.colorMask(Ye,Ye,Ye,Ye),Ce=Ye)},setLocked:function(Ye){G=Ye},setClear:function(Ye,St,Mt,Wt,ln){ln===!0&&(Ye*=Wt,St*=Wt,Mt*=Wt),we.set(Ye,St,Mt,Wt),Ke.equals(we)===!1&&(o.clearColor(Ye,St,Mt,Wt),Ke.copy(we))},reset:function(){G=!1,Ce=null,Ke.set(-1,0,0,0)}}}function a(){let G=!1,we=null,Ce=null,Ke=null;return{setTest:function(Ye){Ye?De(o.DEPTH_TEST):ke(o.DEPTH_TEST)},setMask:function(Ye){we!==Ye&&!G&&(o.depthMask(Ye),we=Ye)},setFunc:function(Ye){if(Ce!==Ye){switch(Ye){case o2:o.depthFunc(o.NEVER);break;case a2:o.depthFunc(o.ALWAYS);break;case l2:o.depthFunc(o.LESS);break;case Yu:o.depthFunc(o.LEQUAL);break;case u2:o.depthFunc(o.EQUAL);break;case c2:o.depthFunc(o.GEQUAL);break;case f2:o.depthFunc(o.GREATER);break;case h2:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ce=Ye}},setLocked:function(Ye){G=Ye},setClear:function(Ye){Ke!==Ye&&(o.clearDepth(Ye),Ke=Ye)},reset:function(){G=!1,we=null,Ce=null,Ke=null}}}function c(){let G=!1,we=null,Ce=null,Ke=null,Ye=null,St=null,Mt=null,Wt=null,ln=null;return{setTest:function(xt){G||(xt?De(o.STENCIL_TEST):ke(o.STENCIL_TEST))},setMask:function(xt){we!==xt&&!G&&(o.stencilMask(xt),we=xt)},setFunc:function(xt,tn,xn){(Ce!==xt||Ke!==tn||Ye!==xn)&&(o.stencilFunc(xt,tn,xn),Ce=xt,Ke=tn,Ye=xn)},setOp:function(xt,tn,xn){(St!==xt||Mt!==tn||Wt!==xn)&&(o.stencilOp(xt,tn,xn),St=xt,Mt=tn,Wt=xn)},setLocked:function(xt){G=xt},setClear:function(xt){ln!==xt&&(o.clearStencil(xt),ln=xt)},reset:function(){G=!1,we=null,Ce=null,Ke=null,Ye=null,St=null,Mt=null,Wt=null,ln=null}}}const u=new s,h=new a,d=new c,p=new WeakMap,g=new WeakMap;let _={},S={},E=new WeakMap,M=[],v=null,x=!1,A=null,T=null,L=null,O=null,I=null,N=null,Y=null,C=new wt(0,0,0),P=0,ne=!1,le=null,fe=null,B=null,$=null,te=null;const K=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,j=0;const X=o.getParameter(o.VERSION);X.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=j>=1):X.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=j>=2);let F=null,V={};const q=o.getParameter(o.SCISSOR_BOX),J=o.getParameter(o.VIEWPORT),he=new gn().fromArray(q),Se=new gn().fromArray(J);function Ee(G,we,Ce,Ke){const Ye=new Uint8Array(4),St=o.createTexture();o.bindTexture(G,St),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Mt=0;Mt<Ce;Mt++)i&&(G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY)?o.texImage3D(we,0,o.RGBA,1,1,Ke,0,o.RGBA,o.UNSIGNED_BYTE,Ye):o.texImage2D(we+Mt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ye);return St}const Re={};Re[o.TEXTURE_2D]=Ee(o.TEXTURE_2D,o.TEXTURE_2D,1),Re[o.TEXTURE_CUBE_MAP]=Ee(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Re[o.TEXTURE_2D_ARRAY]=Ee(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Re[o.TEXTURE_3D]=Ee(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),De(o.DEPTH_TEST),h.setFunc(Yu),rt(!1),U(h0),De(o.CULL_FACE),He(Jr);function De(G){_[G]!==!0&&(o.enable(G),_[G]=!0)}function ke(G){_[G]!==!1&&(o.disable(G),_[G]=!1)}function ft(G,we){return S[G]!==we?(o.bindFramebuffer(G,we),S[G]=we,i&&(G===o.DRAW_FRAMEBUFFER&&(S[o.FRAMEBUFFER]=we),G===o.FRAMEBUFFER&&(S[o.DRAW_FRAMEBUFFER]=we)),!0):!1}function se(G,we){let Ce=M,Ke=!1;if(G)if(Ce=E.get(we),Ce===void 0&&(Ce=[],E.set(we,Ce)),G.isWebGLMultipleRenderTargets){const Ye=G.texture;if(Ce.length!==Ye.length||Ce[0]!==o.COLOR_ATTACHMENT0){for(let St=0,Mt=Ye.length;St<Mt;St++)Ce[St]=o.COLOR_ATTACHMENT0+St;Ce.length=Ye.length,Ke=!0}}else Ce[0]!==o.COLOR_ATTACHMENT0&&(Ce[0]=o.COLOR_ATTACHMENT0,Ke=!0);else Ce[0]!==o.BACK&&(Ce[0]=o.BACK,Ke=!0);Ke&&(t.isWebGL2?o.drawBuffers(Ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ce))}function Kt(G){return v!==G?(o.useProgram(G),v=G,!0):!1}const je={[Us]:o.FUNC_ADD,[jx]:o.FUNC_SUBTRACT,[Xx]:o.FUNC_REVERSE_SUBTRACT};if(i)je[g0]=o.MIN,je[_0]=o.MAX;else{const G=e.get("EXT_blend_minmax");G!==null&&(je[g0]=G.MIN_EXT,je[_0]=G.MAX_EXT)}const tt={[Yx]:o.ZERO,[qx]:o.ONE,[$x]:o.SRC_COLOR,[Oh]:o.SRC_ALPHA,[t2]:o.SRC_ALPHA_SATURATE,[Jx]:o.DST_COLOR,[Kx]:o.DST_ALPHA,[Zx]:o.ONE_MINUS_SRC_COLOR,[Fh]:o.ONE_MINUS_SRC_ALPHA,[e2]:o.ONE_MINUS_DST_COLOR,[Qx]:o.ONE_MINUS_DST_ALPHA,[n2]:o.CONSTANT_COLOR,[i2]:o.ONE_MINUS_CONSTANT_COLOR,[r2]:o.CONSTANT_ALPHA,[s2]:o.ONE_MINUS_CONSTANT_ALPHA};function He(G,we,Ce,Ke,Ye,St,Mt,Wt,ln,xt){if(G===Jr){x===!0&&(ke(o.BLEND),x=!1);return}if(x===!1&&(De(o.BLEND),x=!0),G!==Wx){if(G!==A||xt!==ne){if((T!==Us||I!==Us)&&(o.blendEquation(o.FUNC_ADD),T=Us,I=Us),xt)switch(G){case Bo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case d0:o.blendFunc(o.ONE,o.ONE);break;case p0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case m0:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Bo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case d0:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case p0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case m0:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}L=null,O=null,N=null,Y=null,C.set(0,0,0),P=0,A=G,ne=xt}return}Ye=Ye||we,St=St||Ce,Mt=Mt||Ke,(we!==T||Ye!==I)&&(o.blendEquationSeparate(je[we],je[Ye]),T=we,I=Ye),(Ce!==L||Ke!==O||St!==N||Mt!==Y)&&(o.blendFuncSeparate(tt[Ce],tt[Ke],tt[St],tt[Mt]),L=Ce,O=Ke,N=St,Y=Mt),(Wt.equals(C)===!1||ln!==P)&&(o.blendColor(Wt.r,Wt.g,Wt.b,ln),C.copy(Wt),P=ln),A=G,ne=!1}function At(G,we){G.side===Xi?ke(o.CULL_FACE):De(o.CULL_FACE);let Ce=G.side===Xn;we&&(Ce=!Ce),rt(Ce),G.blending===Bo&&G.transparent===!1?He(Jr):He(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),h.setFunc(G.depthFunc),h.setTest(G.depthTest),h.setMask(G.depthWrite),u.setMask(G.colorWrite);const Ke=G.stencilWrite;d.setTest(Ke),Ke&&(d.setMask(G.stencilWriteMask),d.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),d.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ie(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?De(o.SAMPLE_ALPHA_TO_COVERAGE):ke(o.SAMPLE_ALPHA_TO_COVERAGE)}function rt(G){le!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),le=G)}function U(G){G!==Hx?(De(o.CULL_FACE),G!==fe&&(G===h0?o.cullFace(o.BACK):G===Vx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):ke(o.CULL_FACE),fe=G}function b(G){G!==B&&(H&&o.lineWidth(G),B=G)}function ie(G,we,Ce){G?(De(o.POLYGON_OFFSET_FILL),($!==we||te!==Ce)&&(o.polygonOffset(we,Ce),$=we,te=Ce)):ke(o.POLYGON_OFFSET_FILL)}function ve(G){G?De(o.SCISSOR_TEST):ke(o.SCISSOR_TEST)}function ge(G){G===void 0&&(G=o.TEXTURE0+K-1),F!==G&&(o.activeTexture(G),F=G)}function xe(G,we,Ce){Ce===void 0&&(F===null?Ce=o.TEXTURE0+K-1:Ce=F);let Ke=V[Ce];Ke===void 0&&(Ke={type:void 0,texture:void 0},V[Ce]=Ke),(Ke.type!==G||Ke.texture!==we)&&(F!==Ce&&(o.activeTexture(Ce),F=Ce),o.bindTexture(G,we||Re[G]),Ke.type=G,Ke.texture=we)}function Ve(){const G=V[F];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Ae(){try{o.compressedTexImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ue(){try{o.compressedTexImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Xe(){try{o.texSubImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function st(){try{o.texSubImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function me(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function mt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ct(){try{o.texStorage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Je(){try{o.texStorage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function We(){try{o.texImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Oe(){try{o.texImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function nt(G){he.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),he.copy(G))}function _t(G){Se.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),Se.copy(G))}function Lt(G,we){let Ce=g.get(we);Ce===void 0&&(Ce=new WeakMap,g.set(we,Ce));let Ke=Ce.get(G);Ke===void 0&&(Ke=o.getUniformBlockIndex(we,G.name),Ce.set(G,Ke))}function ot(G,we){const Ke=g.get(we).get(G);p.get(we)!==Ke&&(o.uniformBlockBinding(we,Ke,G.__bindingPointIndex),p.set(we,Ke))}function Me(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),i===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},F=null,V={},S={},E=new WeakMap,M=[],v=null,x=!1,A=null,T=null,L=null,O=null,I=null,N=null,Y=null,C=new wt(0,0,0),P=0,ne=!1,le=null,fe=null,B=null,$=null,te=null,he.set(0,0,o.canvas.width,o.canvas.height),Se.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:De,disable:ke,bindFramebuffer:ft,drawBuffers:se,useProgram:Kt,setBlending:He,setMaterial:At,setFlipSided:rt,setCullFace:U,setLineWidth:b,setPolygonOffset:ie,setScissorTest:ve,activeTexture:ge,bindTexture:xe,unbindTexture:Ve,compressedTexImage2D:Ae,compressedTexImage3D:Ue,texImage2D:We,texImage3D:Oe,updateUBOMapping:Lt,uniformBlockBinding:ot,texStorage2D:ct,texStorage3D:Je,texSubImage2D:Xe,texSubImage3D:st,compressedTexSubImage2D:me,compressedTexSubImage3D:mt,scissor:nt,viewport:_t,reset:Me}}function tw(o,e,t,i,s,a,c){const u=s.isWebGL2,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new WeakMap;let g;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,b){return S?new OffscreenCanvas(U,b):el("canvas")}function M(U,b,ie,ve){let ge=1;if((U.width>ve||U.height>ve)&&(ge=ve/Math.max(U.width,U.height)),ge<1||b===!0)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap){const xe=b?Qu:Math.floor,Ve=xe(ge*U.width),Ae=xe(ge*U.height);g===void 0&&(g=E(Ve,Ae));const Ue=ie?E(Ve,Ae):g;return Ue.width=Ve,Ue.height=Ae,Ue.getContext("2d").drawImage(U,0,0,Ve,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+Ve+"x"+Ae+")."),Ue}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),U;return U}function v(U){return Gh(U.width)&&Gh(U.height)}function x(U){return u?!1:U.wrapS!==Fi||U.wrapT!==Fi||U.minFilter!==Un&&U.minFilter!==Mi}function A(U,b){return U.generateMipmaps&&b&&U.minFilter!==Un&&U.minFilter!==Mi}function T(U){o.generateMipmap(U)}function L(U,b,ie,ve,ge=!1){if(u===!1)return b;if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let xe=b;if(b===o.RED&&(ie===o.FLOAT&&(xe=o.R32F),ie===o.HALF_FLOAT&&(xe=o.R16F),ie===o.UNSIGNED_BYTE&&(xe=o.R8)),b===o.RED_INTEGER&&(ie===o.UNSIGNED_BYTE&&(xe=o.R8UI),ie===o.UNSIGNED_SHORT&&(xe=o.R16UI),ie===o.UNSIGNED_INT&&(xe=o.R32UI),ie===o.BYTE&&(xe=o.R8I),ie===o.SHORT&&(xe=o.R16I),ie===o.INT&&(xe=o.R32I)),b===o.RG&&(ie===o.FLOAT&&(xe=o.RG32F),ie===o.HALF_FLOAT&&(xe=o.RG16F),ie===o.UNSIGNED_BYTE&&(xe=o.RG8)),b===o.RGBA){const Ve=ge?qu:Ct.getTransfer(ve);ie===o.FLOAT&&(xe=o.RGBA32F),ie===o.HALF_FLOAT&&(xe=o.RGBA16F),ie===o.UNSIGNED_BYTE&&(xe=Ve===It?o.SRGB8_ALPHA8:o.RGBA8),ie===o.UNSIGNED_SHORT_4_4_4_4&&(xe=o.RGBA4),ie===o.UNSIGNED_SHORT_5_5_5_1&&(xe=o.RGB5_A1)}return(xe===o.R16F||xe===o.R32F||xe===o.RG16F||xe===o.RG32F||xe===o.RGBA16F||xe===o.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function O(U,b,ie){return A(U,ie)===!0||U.isFramebufferTexture&&U.minFilter!==Un&&U.minFilter!==Mi?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function I(U){return U===Un||U===v0||U===Jf?o.NEAREST:o.LINEAR}function N(U){const b=U.target;b.removeEventListener("dispose",N),C(b),b.isVideoTexture&&p.delete(b)}function Y(U){const b=U.target;b.removeEventListener("dispose",Y),ne(b)}function C(U){const b=i.get(U);if(b.__webglInit===void 0)return;const ie=U.source,ve=_.get(ie);if(ve){const ge=ve[b.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&P(U),Object.keys(ve).length===0&&_.delete(ie)}i.remove(U)}function P(U){const b=i.get(U);o.deleteTexture(b.__webglTexture);const ie=U.source,ve=_.get(ie);delete ve[b.__cacheKey],c.memory.textures--}function ne(U){const b=U.texture,ie=i.get(U),ve=i.get(b);if(ve.__webglTexture!==void 0&&(o.deleteTexture(ve.__webglTexture),c.memory.textures--),U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(ie.__webglFramebuffer[ge]))for(let xe=0;xe<ie.__webglFramebuffer[ge].length;xe++)o.deleteFramebuffer(ie.__webglFramebuffer[ge][xe]);else o.deleteFramebuffer(ie.__webglFramebuffer[ge]);ie.__webglDepthbuffer&&o.deleteRenderbuffer(ie.__webglDepthbuffer[ge])}else{if(Array.isArray(ie.__webglFramebuffer))for(let ge=0;ge<ie.__webglFramebuffer.length;ge++)o.deleteFramebuffer(ie.__webglFramebuffer[ge]);else o.deleteFramebuffer(ie.__webglFramebuffer);if(ie.__webglDepthbuffer&&o.deleteRenderbuffer(ie.__webglDepthbuffer),ie.__webglMultisampledFramebuffer&&o.deleteFramebuffer(ie.__webglMultisampledFramebuffer),ie.__webglColorRenderbuffer)for(let ge=0;ge<ie.__webglColorRenderbuffer.length;ge++)ie.__webglColorRenderbuffer[ge]&&o.deleteRenderbuffer(ie.__webglColorRenderbuffer[ge]);ie.__webglDepthRenderbuffer&&o.deleteRenderbuffer(ie.__webglDepthRenderbuffer)}if(U.isWebGLMultipleRenderTargets)for(let ge=0,xe=b.length;ge<xe;ge++){const Ve=i.get(b[ge]);Ve.__webglTexture&&(o.deleteTexture(Ve.__webglTexture),c.memory.textures--),i.remove(b[ge])}i.remove(b),i.remove(U)}let le=0;function fe(){le=0}function B(){const U=le;return U>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),le+=1,U}function $(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function te(U,b){const ie=i.get(U);if(U.isVideoTexture&&At(U),U.isRenderTargetTexture===!1&&U.version>0&&ie.__version!==U.version){const ve=U.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(ie,U,b);return}}t.bindTexture(o.TEXTURE_2D,ie.__webglTexture,o.TEXTURE0+b)}function K(U,b){const ie=i.get(U);if(U.version>0&&ie.__version!==U.version){he(ie,U,b);return}t.bindTexture(o.TEXTURE_2D_ARRAY,ie.__webglTexture,o.TEXTURE0+b)}function H(U,b){const ie=i.get(U);if(U.version>0&&ie.__version!==U.version){he(ie,U,b);return}t.bindTexture(o.TEXTURE_3D,ie.__webglTexture,o.TEXTURE0+b)}function j(U,b){const ie=i.get(U);if(U.version>0&&ie.__version!==U.version){Se(ie,U,b);return}t.bindTexture(o.TEXTURE_CUBE_MAP,ie.__webglTexture,o.TEXTURE0+b)}const X={[Bh]:o.REPEAT,[Fi]:o.CLAMP_TO_EDGE,[Hh]:o.MIRRORED_REPEAT},F={[Un]:o.NEAREST,[v0]:o.NEAREST_MIPMAP_NEAREST,[Jf]:o.NEAREST_MIPMAP_LINEAR,[Mi]:o.LINEAR,[S2]:o.LINEAR_MIPMAP_NEAREST,[Ka]:o.LINEAR_MIPMAP_LINEAR},V={[U2]:o.NEVER,[B2]:o.ALWAYS,[I2]:o.LESS,[dg]:o.LEQUAL,[O2]:o.EQUAL,[z2]:o.GEQUAL,[F2]:o.GREATER,[k2]:o.NOTEQUAL};function q(U,b,ie){if(ie?(o.texParameteri(U,o.TEXTURE_WRAP_S,X[b.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,X[b.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,X[b.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,F[b.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,F[b.minFilter])):(o.texParameteri(U,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(U,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(b.wrapS!==Fi||b.wrapT!==Fi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(U,o.TEXTURE_MAG_FILTER,I(b.magFilter)),o.texParameteri(U,o.TEXTURE_MIN_FILTER,I(b.minFilter)),b.minFilter!==Un&&b.minFilter!==Mi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,V[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ve=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Un||b.minFilter!==Jf&&b.minFilter!==Ka||b.type===$r&&e.has("OES_texture_float_linear")===!1||u===!1&&b.type===Qa&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(o.texParameterf(U,ve.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function J(U,b){let ie=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",N));const ve=b.source;let ge=_.get(ve);ge===void 0&&(ge={},_.set(ve,ge));const xe=$(b);if(xe!==U.__cacheKey){ge[xe]===void 0&&(ge[xe]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,ie=!0),ge[xe].usedTimes++;const Ve=ge[U.__cacheKey];Ve!==void 0&&(ge[U.__cacheKey].usedTimes--,Ve.usedTimes===0&&P(b)),U.__cacheKey=xe,U.__webglTexture=ge[xe].texture}return ie}function he(U,b,ie){let ve=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ve=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ve=o.TEXTURE_3D);const ge=J(U,b),xe=b.source;t.bindTexture(ve,U.__webglTexture,o.TEXTURE0+ie);const Ve=i.get(xe);if(xe.version!==Ve.__version||ge===!0){t.activeTexture(o.TEXTURE0+ie);const Ae=Ct.getPrimaries(Ct.workingColorSpace),Ue=b.colorSpace===wi?null:Ct.getPrimaries(b.colorSpace),Xe=b.colorSpace===wi||Ae===Ue?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);const st=x(b)&&v(b.image)===!1;let me=M(b.image,st,!1,s.maxTextureSize);me=rt(b,me);const mt=v(me)||u,ct=a.convert(b.format,b.colorSpace);let Je=a.convert(b.type),We=L(b.internalFormat,ct,Je,b.colorSpace,b.isVideoTexture);q(ve,b,mt);let Oe;const nt=b.mipmaps,_t=u&&b.isVideoTexture!==!0&&We!==fg,Lt=Ve.__version===void 0||ge===!0,ot=O(b,me,mt);if(b.isDepthTexture)We=o.DEPTH_COMPONENT,u?b.type===$r?We=o.DEPTH_COMPONENT32F:b.type===qr?We=o.DEPTH_COMPONENT24:b.type===Fs?We=o.DEPTH24_STENCIL8:We=o.DEPTH_COMPONENT16:b.type===$r&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===ks&&We===o.DEPTH_COMPONENT&&b.type!==ld&&b.type!==qr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=qr,Je=a.convert(b.type)),b.format===Yo&&We===o.DEPTH_COMPONENT&&(We=o.DEPTH_STENCIL,b.type!==Fs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Fs,Je=a.convert(b.type))),Lt&&(_t?t.texStorage2D(o.TEXTURE_2D,1,We,me.width,me.height):t.texImage2D(o.TEXTURE_2D,0,We,me.width,me.height,0,ct,Je,null));else if(b.isDataTexture)if(nt.length>0&&mt){_t&&Lt&&t.texStorage2D(o.TEXTURE_2D,ot,We,nt[0].width,nt[0].height);for(let Me=0,G=nt.length;Me<G;Me++)Oe=nt[Me],_t?t.texSubImage2D(o.TEXTURE_2D,Me,0,0,Oe.width,Oe.height,ct,Je,Oe.data):t.texImage2D(o.TEXTURE_2D,Me,We,Oe.width,Oe.height,0,ct,Je,Oe.data);b.generateMipmaps=!1}else _t?(Lt&&t.texStorage2D(o.TEXTURE_2D,ot,We,me.width,me.height),t.texSubImage2D(o.TEXTURE_2D,0,0,0,me.width,me.height,ct,Je,me.data)):t.texImage2D(o.TEXTURE_2D,0,We,me.width,me.height,0,ct,Je,me.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){_t&&Lt&&t.texStorage3D(o.TEXTURE_2D_ARRAY,ot,We,nt[0].width,nt[0].height,me.depth);for(let Me=0,G=nt.length;Me<G;Me++)Oe=nt[Me],b.format!==ki?ct!==null?_t?t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,0,Oe.width,Oe.height,me.depth,ct,Oe.data,0,0):t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Me,We,Oe.width,Oe.height,me.depth,0,Oe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?t.texSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,0,Oe.width,Oe.height,me.depth,ct,Je,Oe.data):t.texImage3D(o.TEXTURE_2D_ARRAY,Me,We,Oe.width,Oe.height,me.depth,0,ct,Je,Oe.data)}else{_t&&Lt&&t.texStorage2D(o.TEXTURE_2D,ot,We,nt[0].width,nt[0].height);for(let Me=0,G=nt.length;Me<G;Me++)Oe=nt[Me],b.format!==ki?ct!==null?_t?t.compressedTexSubImage2D(o.TEXTURE_2D,Me,0,0,Oe.width,Oe.height,ct,Oe.data):t.compressedTexImage2D(o.TEXTURE_2D,Me,We,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?t.texSubImage2D(o.TEXTURE_2D,Me,0,0,Oe.width,Oe.height,ct,Je,Oe.data):t.texImage2D(o.TEXTURE_2D,Me,We,Oe.width,Oe.height,0,ct,Je,Oe.data)}else if(b.isDataArrayTexture)_t?(Lt&&t.texStorage3D(o.TEXTURE_2D_ARRAY,ot,We,me.width,me.height,me.depth),t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,ct,Je,me.data)):t.texImage3D(o.TEXTURE_2D_ARRAY,0,We,me.width,me.height,me.depth,0,ct,Je,me.data);else if(b.isData3DTexture)_t?(Lt&&t.texStorage3D(o.TEXTURE_3D,ot,We,me.width,me.height,me.depth),t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,ct,Je,me.data)):t.texImage3D(o.TEXTURE_3D,0,We,me.width,me.height,me.depth,0,ct,Je,me.data);else if(b.isFramebufferTexture){if(Lt)if(_t)t.texStorage2D(o.TEXTURE_2D,ot,We,me.width,me.height);else{let Me=me.width,G=me.height;for(let we=0;we<ot;we++)t.texImage2D(o.TEXTURE_2D,we,We,Me,G,0,ct,Je,null),Me>>=1,G>>=1}}else if(nt.length>0&&mt){_t&&Lt&&t.texStorage2D(o.TEXTURE_2D,ot,We,nt[0].width,nt[0].height);for(let Me=0,G=nt.length;Me<G;Me++)Oe=nt[Me],_t?t.texSubImage2D(o.TEXTURE_2D,Me,0,0,ct,Je,Oe):t.texImage2D(o.TEXTURE_2D,Me,We,ct,Je,Oe);b.generateMipmaps=!1}else _t?(Lt&&t.texStorage2D(o.TEXTURE_2D,ot,We,me.width,me.height),t.texSubImage2D(o.TEXTURE_2D,0,0,0,ct,Je,me)):t.texImage2D(o.TEXTURE_2D,0,We,ct,Je,me);A(b,mt)&&T(ve),Ve.__version=xe.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function Se(U,b,ie){if(b.image.length!==6)return;const ve=J(U,b),ge=b.source;t.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+ie);const xe=i.get(ge);if(ge.version!==xe.__version||ve===!0){t.activeTexture(o.TEXTURE0+ie);const Ve=Ct.getPrimaries(Ct.workingColorSpace),Ae=b.colorSpace===wi?null:Ct.getPrimaries(b.colorSpace),Ue=b.colorSpace===wi||Ve===Ae?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const Xe=b.isCompressedTexture||b.image[0].isCompressedTexture,st=b.image[0]&&b.image[0].isDataTexture,me=[];for(let Me=0;Me<6;Me++)!Xe&&!st?me[Me]=M(b.image[Me],!1,!0,s.maxCubemapSize):me[Me]=st?b.image[Me].image:b.image[Me],me[Me]=rt(b,me[Me]);const mt=me[0],ct=v(mt)||u,Je=a.convert(b.format,b.colorSpace),We=a.convert(b.type),Oe=L(b.internalFormat,Je,We,b.colorSpace),nt=u&&b.isVideoTexture!==!0,_t=xe.__version===void 0||ve===!0;let Lt=O(b,mt,ct);q(o.TEXTURE_CUBE_MAP,b,ct);let ot;if(Xe){nt&&_t&&t.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,Oe,mt.width,mt.height);for(let Me=0;Me<6;Me++){ot=me[Me].mipmaps;for(let G=0;G<ot.length;G++){const we=ot[G];b.format!==ki?Je!==null?nt?t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,G,0,0,we.width,we.height,Je,we.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,G,Oe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,G,0,0,we.width,we.height,Je,We,we.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,G,Oe,we.width,we.height,0,Je,We,we.data)}}}else{ot=b.mipmaps,nt&&_t&&(ot.length>0&&Lt++,t.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,Oe,me[0].width,me[0].height));for(let Me=0;Me<6;Me++)if(st){nt?t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,me[Me].width,me[Me].height,Je,We,me[Me].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Oe,me[Me].width,me[Me].height,0,Je,We,me[Me].data);for(let G=0;G<ot.length;G++){const Ce=ot[G].image[Me].image;nt?t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,G+1,0,0,Ce.width,Ce.height,Je,We,Ce.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,G+1,Oe,Ce.width,Ce.height,0,Je,We,Ce.data)}}else{nt?t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Je,We,me[Me]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Oe,Je,We,me[Me]);for(let G=0;G<ot.length;G++){const we=ot[G];nt?t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,G+1,0,0,Je,We,we.image[Me]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,G+1,Oe,Je,We,we.image[Me])}}}A(b,ct)&&T(o.TEXTURE_CUBE_MAP),xe.__version=ge.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function Ee(U,b,ie,ve,ge,xe){const Ve=a.convert(ie.format,ie.colorSpace),Ae=a.convert(ie.type),Ue=L(ie.internalFormat,Ve,Ae,ie.colorSpace);if(!i.get(b).__hasExternalTextures){const st=Math.max(1,b.width>>xe),me=Math.max(1,b.height>>xe);ge===o.TEXTURE_3D||ge===o.TEXTURE_2D_ARRAY?t.texImage3D(ge,xe,Ue,st,me,b.depth,0,Ve,Ae,null):t.texImage2D(ge,xe,Ue,st,me,0,Ve,Ae,null)}t.bindFramebuffer(o.FRAMEBUFFER,U),He(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ve,ge,i.get(ie).__webglTexture,0,tt(b)):(ge===o.TEXTURE_2D||ge>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ve,ge,i.get(ie).__webglTexture,xe),t.bindFramebuffer(o.FRAMEBUFFER,null)}function Re(U,b,ie){if(o.bindRenderbuffer(o.RENDERBUFFER,U),b.depthBuffer&&!b.stencilBuffer){let ve=u===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if(ie||He(b)){const ge=b.depthTexture;ge&&ge.isDepthTexture&&(ge.type===$r?ve=o.DEPTH_COMPONENT32F:ge.type===qr&&(ve=o.DEPTH_COMPONENT24));const xe=tt(b);He(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,xe,ve,b.width,b.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,xe,ve,b.width,b.height)}else o.renderbufferStorage(o.RENDERBUFFER,ve,b.width,b.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,U)}else if(b.depthBuffer&&b.stencilBuffer){const ve=tt(b);ie&&He(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ve,o.DEPTH24_STENCIL8,b.width,b.height):He(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ve,o.DEPTH24_STENCIL8,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,U)}else{const ve=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ge=0;ge<ve.length;ge++){const xe=ve[ge],Ve=a.convert(xe.format,xe.colorSpace),Ae=a.convert(xe.type),Ue=L(xe.internalFormat,Ve,Ae,xe.colorSpace),Xe=tt(b);ie&&He(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Xe,Ue,b.width,b.height):He(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Xe,Ue,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Ue,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function De(U,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),te(b.depthTexture,0);const ve=i.get(b.depthTexture).__webglTexture,ge=tt(b);if(b.depthTexture.format===ks)He(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ve,0,ge):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ve,0);else if(b.depthTexture.format===Yo)He(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ve,0,ge):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function ke(U){const b=i.get(U),ie=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!b.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");De(b.__webglFramebuffer,U)}else if(ie){b.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)t.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[ve]),b.__webglDepthbuffer[ve]=o.createRenderbuffer(),Re(b.__webglDepthbuffer[ve],U,!1)}else t.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=o.createRenderbuffer(),Re(b.__webglDepthbuffer,U,!1);t.bindFramebuffer(o.FRAMEBUFFER,null)}function ft(U,b,ie){const ve=i.get(U);b!==void 0&&Ee(ve.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ie!==void 0&&ke(U)}function se(U){const b=U.texture,ie=i.get(U),ve=i.get(b);U.addEventListener("dispose",Y),U.isWebGLMultipleRenderTargets!==!0&&(ve.__webglTexture===void 0&&(ve.__webglTexture=o.createTexture()),ve.__version=b.version,c.memory.textures++);const ge=U.isWebGLCubeRenderTarget===!0,xe=U.isWebGLMultipleRenderTargets===!0,Ve=v(U)||u;if(ge){ie.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(u&&b.mipmaps&&b.mipmaps.length>0){ie.__webglFramebuffer[Ae]=[];for(let Ue=0;Ue<b.mipmaps.length;Ue++)ie.__webglFramebuffer[Ae][Ue]=o.createFramebuffer()}else ie.__webglFramebuffer[Ae]=o.createFramebuffer()}else{if(u&&b.mipmaps&&b.mipmaps.length>0){ie.__webglFramebuffer=[];for(let Ae=0;Ae<b.mipmaps.length;Ae++)ie.__webglFramebuffer[Ae]=o.createFramebuffer()}else ie.__webglFramebuffer=o.createFramebuffer();if(xe)if(s.drawBuffers){const Ae=U.texture;for(let Ue=0,Xe=Ae.length;Ue<Xe;Ue++){const st=i.get(Ae[Ue]);st.__webglTexture===void 0&&(st.__webglTexture=o.createTexture(),c.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(u&&U.samples>0&&He(U)===!1){const Ae=xe?b:[b];ie.__webglMultisampledFramebuffer=o.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let Ue=0;Ue<Ae.length;Ue++){const Xe=Ae[Ue];ie.__webglColorRenderbuffer[Ue]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ie.__webglColorRenderbuffer[Ue]);const st=a.convert(Xe.format,Xe.colorSpace),me=a.convert(Xe.type),mt=L(Xe.internalFormat,st,me,Xe.colorSpace,U.isXRRenderTarget===!0),ct=tt(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,ct,mt,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.RENDERBUFFER,ie.__webglColorRenderbuffer[Ue])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(ie.__webglDepthRenderbuffer=o.createRenderbuffer(),Re(ie.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ge){t.bindTexture(o.TEXTURE_CUBE_MAP,ve.__webglTexture),q(o.TEXTURE_CUBE_MAP,b,Ve);for(let Ae=0;Ae<6;Ae++)if(u&&b.mipmaps&&b.mipmaps.length>0)for(let Ue=0;Ue<b.mipmaps.length;Ue++)Ee(ie.__webglFramebuffer[Ae][Ue],U,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ue);else Ee(ie.__webglFramebuffer[Ae],U,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);A(b,Ve)&&T(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){const Ae=U.texture;for(let Ue=0,Xe=Ae.length;Ue<Xe;Ue++){const st=Ae[Ue],me=i.get(st);t.bindTexture(o.TEXTURE_2D,me.__webglTexture),q(o.TEXTURE_2D,st,Ve),Ee(ie.__webglFramebuffer,U,st,o.COLOR_ATTACHMENT0+Ue,o.TEXTURE_2D,0),A(st,Ve)&&T(o.TEXTURE_2D)}t.unbindTexture()}else{let Ae=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(u?Ae=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ae,ve.__webglTexture),q(Ae,b,Ve),u&&b.mipmaps&&b.mipmaps.length>0)for(let Ue=0;Ue<b.mipmaps.length;Ue++)Ee(ie.__webglFramebuffer[Ue],U,b,o.COLOR_ATTACHMENT0,Ae,Ue);else Ee(ie.__webglFramebuffer,U,b,o.COLOR_ATTACHMENT0,Ae,0);A(b,Ve)&&T(Ae),t.unbindTexture()}U.depthBuffer&&ke(U)}function Kt(U){const b=v(U)||u,ie=U.isWebGLMultipleRenderTargets===!0?U.texture:[U.texture];for(let ve=0,ge=ie.length;ve<ge;ve++){const xe=ie[ve];if(A(xe,b)){const Ve=U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,Ae=i.get(xe).__webglTexture;t.bindTexture(Ve,Ae),T(Ve),t.unbindTexture()}}}function je(U){if(u&&U.samples>0&&He(U)===!1){const b=U.isWebGLMultipleRenderTargets?U.texture:[U.texture],ie=U.width,ve=U.height;let ge=o.COLOR_BUFFER_BIT;const xe=[],Ve=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ae=i.get(U),Ue=U.isWebGLMultipleRenderTargets===!0;if(Ue)for(let Xe=0;Xe<b.length;Xe++)t.bindFramebuffer(o.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xe,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,Ae.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xe,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Xe=0;Xe<b.length;Xe++){xe.push(o.COLOR_ATTACHMENT0+Xe),U.depthBuffer&&xe.push(Ve);const st=Ae.__ignoreDepthValues!==void 0?Ae.__ignoreDepthValues:!1;if(st===!1&&(U.depthBuffer&&(ge|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&(ge|=o.STENCIL_BUFFER_BIT)),Ue&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ae.__webglColorRenderbuffer[Xe]),st===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[Ve]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[Ve])),Ue){const me=i.get(b[Xe]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,me,0)}o.blitFramebuffer(0,0,ie,ve,0,0,ie,ve,ge,o.NEAREST),d&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,xe)}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ue)for(let Xe=0;Xe<b.length;Xe++){t.bindFramebuffer(o.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xe,o.RENDERBUFFER,Ae.__webglColorRenderbuffer[Xe]);const st=i.get(b[Xe]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,Ae.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xe,o.TEXTURE_2D,st,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}}function tt(U){return Math.min(s.maxSamples,U.samples)}function He(U){const b=i.get(U);return u&&U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function At(U){const b=c.render.frame;p.get(U)!==b&&(p.set(U,b),U.update())}function rt(U,b){const ie=U.colorSpace,ve=U.format,ge=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||U.format===Vh||ie!==vr&&ie!==wi&&(Ct.getTransfer(ie)===It?u===!1?e.has("EXT_sRGB")===!0&&ve===ki?(U.format=Vh,U.minFilter=Mi,U.generateMipmaps=!1):b=mg.sRGBToLinear(b):(ve!==ki||ge!==ts)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ie)),b}this.allocateTextureUnit=B,this.resetTextureUnits=fe,this.setTexture2D=te,this.setTexture2DArray=K,this.setTexture3D=H,this.setTextureCube=j,this.rebindTextures=ft,this.setupRenderTarget=se,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=He}function nw(o,e,t){const i=t.isWebGL2;function s(a,c=wi){let u;const h=Ct.getTransfer(c);if(a===ts)return o.UNSIGNED_BYTE;if(a===og)return o.UNSIGNED_SHORT_4_4_4_4;if(a===ag)return o.UNSIGNED_SHORT_5_5_5_1;if(a===M2)return o.BYTE;if(a===E2)return o.SHORT;if(a===ld)return o.UNSIGNED_SHORT;if(a===sg)return o.INT;if(a===qr)return o.UNSIGNED_INT;if(a===$r)return o.FLOAT;if(a===Qa)return i?o.HALF_FLOAT:(u=e.get("OES_texture_half_float"),u!==null?u.HALF_FLOAT_OES:null);if(a===w2)return o.ALPHA;if(a===ki)return o.RGBA;if(a===T2)return o.LUMINANCE;if(a===C2)return o.LUMINANCE_ALPHA;if(a===ks)return o.DEPTH_COMPONENT;if(a===Yo)return o.DEPTH_STENCIL;if(a===Vh)return u=e.get("EXT_sRGB"),u!==null?u.SRGB_ALPHA_EXT:null;if(a===A2)return o.RED;if(a===lg)return o.RED_INTEGER;if(a===R2)return o.RG;if(a===ug)return o.RG_INTEGER;if(a===cg)return o.RGBA_INTEGER;if(a===eh||a===th||a===nh||a===ih)if(h===It)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(a===eh)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===th)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===nh)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===ih)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(a===eh)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===th)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===nh)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===ih)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===x0||a===y0||a===S0||a===M0)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(a===x0)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===y0)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===S0)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===M0)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===fg)return u=e.get("WEBGL_compressed_texture_etc1"),u!==null?u.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===E0||a===w0)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(a===E0)return h===It?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(a===w0)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===T0||a===C0||a===A0||a===R0||a===b0||a===L0||a===P0||a===N0||a===D0||a===U0||a===I0||a===O0||a===F0||a===k0)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(a===T0)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===C0)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===A0)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===R0)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===b0)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===L0)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===P0)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===N0)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===D0)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===U0)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===I0)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===O0)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===F0)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===k0)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===rh||a===z0||a===B0)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(a===rh)return h===It?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===z0)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===B0)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===b2||a===H0||a===V0||a===G0)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(a===rh)return u.COMPRESSED_RED_RGTC1_EXT;if(a===H0)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===V0)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===G0)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Fs?i?o.UNSIGNED_INT_24_8:(u=e.get("WEBGL_depth_texture"),u!==null?u.UNSIGNED_INT_24_8_WEBGL:null):o[a]!==void 0?o[a]:null}return{convert:s}}class iw extends Ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Va extends ui{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rw={type:"move"};class Ah{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Va,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Va,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Va,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,c=null;const u=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const M of e.hand.values()){const v=t.getJointPose(M,i),x=this._getHandJoint(d,M);v!==null&&(x.matrix.fromArray(v.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=v.radius),x.visible=v!==null}const p=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],_=p.position.distanceTo(g.position),S=.02,E=.005;d.inputState.pinching&&_>S+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&_<=S-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1));u!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(rw)))}return u!==null&&(u.visible=s!==null),h!==null&&(h.visible=a!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Va;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class sw extends ea{constructor(e,t){super();const i=this;let s=null,a=1,c=null,u="local-floor",h=1,d=null,p=null,g=null,_=null,S=null,E=null;const M=t.getContextAttributes();let v=null,x=null;const A=[],T=[],L=new Tt;let O=null;const I=new Ei;I.layers.enable(1),I.viewport=new gn;const N=new Ei;N.layers.enable(2),N.viewport=new gn;const Y=[I,N],C=new iw;C.layers.enable(1),C.layers.enable(2);let P=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let J=A[q];return J===void 0&&(J=new Ah,A[q]=J),J.getTargetRaySpace()},this.getControllerGrip=function(q){let J=A[q];return J===void 0&&(J=new Ah,A[q]=J),J.getGripSpace()},this.getHand=function(q){let J=A[q];return J===void 0&&(J=new Ah,A[q]=J),J.getHandSpace()};function le(q){const J=T.indexOf(q.inputSource);if(J===-1)return;const he=A[J];he!==void 0&&(he.update(q.inputSource,q.frame,d||c),he.dispatchEvent({type:q.type,data:q.inputSource}))}function fe(){s.removeEventListener("select",le),s.removeEventListener("selectstart",le),s.removeEventListener("selectend",le),s.removeEventListener("squeeze",le),s.removeEventListener("squeezestart",le),s.removeEventListener("squeezeend",le),s.removeEventListener("end",fe),s.removeEventListener("inputsourceschange",B);for(let q=0;q<A.length;q++){const J=T[q];J!==null&&(T[q]=null,A[q].disconnect(J))}P=null,ne=null,e.setRenderTarget(v),S=null,_=null,g=null,s=null,x=null,V.stop(),i.isPresenting=!1,e.setPixelRatio(O),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){u=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(q){d=q},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",le),s.addEventListener("selectstart",le),s.addEventListener("selectend",le),s.addEventListener("squeeze",le),s.addEventListener("squeezestart",le),s.addEventListener("squeezeend",le),s.addEventListener("end",fe),s.addEventListener("inputsourceschange",B),M.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:s.renderState.layers===void 0?M.antialias:!0,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:a};S=new XRWebGLLayer(s,t,J),s.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),x=new js(S.framebufferWidth,S.framebufferHeight,{format:ki,type:ts,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil})}else{let J=null,he=null,Se=null;M.depth&&(Se=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=M.stencil?Yo:ks,he=M.stencil?Fs:qr);const Ee={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:a};g=new XRWebGLBinding(s,t),_=g.createProjectionLayer(Ee),s.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),x=new js(_.textureWidth,_.textureHeight,{format:ki,type:ts,depthTexture:new Rg(_.textureWidth,_.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0});const Re=e.properties.get(x);Re.__ignoreDepthValues=_.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(h),d=null,c=await s.requestReferenceSpace(u),V.setContext(s),V.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function B(q){for(let J=0;J<q.removed.length;J++){const he=q.removed[J],Se=T.indexOf(he);Se>=0&&(T[Se]=null,A[Se].disconnect(he))}for(let J=0;J<q.added.length;J++){const he=q.added[J];let Se=T.indexOf(he);if(Se===-1){for(let Re=0;Re<A.length;Re++)if(Re>=T.length){T.push(he),Se=Re;break}else if(T[Re]===null){T[Re]=he,Se=Re;break}if(Se===-1)break}const Ee=A[Se];Ee&&Ee.connect(he)}}const $=new ce,te=new ce;function K(q,J,he){$.setFromMatrixPosition(J.matrixWorld),te.setFromMatrixPosition(he.matrixWorld);const Se=$.distanceTo(te),Ee=J.projectionMatrix.elements,Re=he.projectionMatrix.elements,De=Ee[14]/(Ee[10]-1),ke=Ee[14]/(Ee[10]+1),ft=(Ee[9]+1)/Ee[5],se=(Ee[9]-1)/Ee[5],Kt=(Ee[8]-1)/Ee[0],je=(Re[8]+1)/Re[0],tt=De*Kt,He=De*je,At=Se/(-Kt+je),rt=At*-Kt;J.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(rt),q.translateZ(At),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const U=De+At,b=ke+At,ie=tt-rt,ve=He+(Se-rt),ge=ft*ke/b*U,xe=se*ke/b*U;q.projectionMatrix.makePerspective(ie,ve,ge,xe,U,b),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function H(q,J){J===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(J.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;C.near=N.near=I.near=q.near,C.far=N.far=I.far=q.far,(P!==C.near||ne!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),P=C.near,ne=C.far);const J=q.parent,he=C.cameras;H(C,J);for(let Se=0;Se<he.length;Se++)H(he[Se],J);he.length===2?K(C,I,N):C.projectionMatrix.copy(I.projectionMatrix),j(q,C,J)};function j(q,J,he){he===null?q.matrix.copy(J.matrixWorld):(q.matrix.copy(he.matrixWorld),q.matrix.invert(),q.matrix.multiply(J.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ja*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(_===null&&S===null))return h},this.setFoveation=function(q){h=q,_!==null&&(_.fixedFoveation=q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=q)};let X=null;function F(q,J){if(p=J.getViewerPose(d||c),E=J,p!==null){const he=p.views;S!==null&&(e.setRenderTargetFramebuffer(x,S.framebuffer),e.setRenderTarget(x));let Se=!1;he.length!==C.cameras.length&&(C.cameras.length=0,Se=!0);for(let Ee=0;Ee<he.length;Ee++){const Re=he[Ee];let De=null;if(S!==null)De=S.getViewport(Re);else{const ft=g.getViewSubImage(_,Re);De=ft.viewport,Ee===0&&(e.setRenderTargetTextures(x,ft.colorTexture,_.ignoreDepthValues?void 0:ft.depthStencilTexture),e.setRenderTarget(x))}let ke=Y[Ee];ke===void 0&&(ke=new Ei,ke.layers.enable(Ee),ke.viewport=new gn,Y[Ee]=ke),ke.matrix.fromArray(Re.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Re.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(De.x,De.y,De.width,De.height),Ee===0&&(C.matrix.copy(ke.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Se===!0&&C.cameras.push(ke)}}for(let he=0;he<A.length;he++){const Se=T[he],Ee=A[he];Se!==null&&Ee!==void 0&&Ee.update(Se,J,d||c)}X&&X(q,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),E=null}const V=new Ag;V.setAnimationLoop(F),this.setAnimationLoop=function(q){X=q},this.dispose=function(){}}}function ow(o,e){function t(v,x){v.matrixAutoUpdate===!0&&v.updateMatrix(),x.value.copy(v.matrix)}function i(v,x){x.color.getRGB(v.fogColor.value,Eg(o)),x.isFog?(v.fogNear.value=x.near,v.fogFar.value=x.far):x.isFogExp2&&(v.fogDensity.value=x.density)}function s(v,x,A,T,L){x.isMeshBasicMaterial||x.isMeshLambertMaterial?a(v,x):x.isMeshToonMaterial?(a(v,x),g(v,x)):x.isMeshPhongMaterial?(a(v,x),p(v,x)):x.isMeshStandardMaterial?(a(v,x),_(v,x),x.isMeshPhysicalMaterial&&S(v,x,L)):x.isMeshMatcapMaterial?(a(v,x),E(v,x)):x.isMeshDepthMaterial?a(v,x):x.isMeshDistanceMaterial?(a(v,x),M(v,x)):x.isMeshNormalMaterial?a(v,x):x.isLineBasicMaterial?(c(v,x),x.isLineDashedMaterial&&u(v,x)):x.isPointsMaterial?h(v,x,A,T):x.isSpriteMaterial?d(v,x):x.isShadowMaterial?(v.color.value.copy(x.color),v.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function a(v,x){v.opacity.value=x.opacity,x.color&&v.diffuse.value.copy(x.color),x.emissive&&v.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(v.map.value=x.map,t(x.map,v.mapTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,t(x.alphaMap,v.alphaMapTransform)),x.bumpMap&&(v.bumpMap.value=x.bumpMap,t(x.bumpMap,v.bumpMapTransform),v.bumpScale.value=x.bumpScale,x.side===Xn&&(v.bumpScale.value*=-1)),x.normalMap&&(v.normalMap.value=x.normalMap,t(x.normalMap,v.normalMapTransform),v.normalScale.value.copy(x.normalScale),x.side===Xn&&v.normalScale.value.negate()),x.displacementMap&&(v.displacementMap.value=x.displacementMap,t(x.displacementMap,v.displacementMapTransform),v.displacementScale.value=x.displacementScale,v.displacementBias.value=x.displacementBias),x.emissiveMap&&(v.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,v.emissiveMapTransform)),x.specularMap&&(v.specularMap.value=x.specularMap,t(x.specularMap,v.specularMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest);const A=e.get(x).envMap;if(A&&(v.envMap.value=A,v.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=x.reflectivity,v.ior.value=x.ior,v.refractionRatio.value=x.refractionRatio),x.lightMap){v.lightMap.value=x.lightMap;const T=o._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=x.lightMapIntensity*T,t(x.lightMap,v.lightMapTransform)}x.aoMap&&(v.aoMap.value=x.aoMap,v.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,v.aoMapTransform))}function c(v,x){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,x.map&&(v.map.value=x.map,t(x.map,v.mapTransform))}function u(v,x){v.dashSize.value=x.dashSize,v.totalSize.value=x.dashSize+x.gapSize,v.scale.value=x.scale}function h(v,x,A,T){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,v.size.value=x.size*A,v.scale.value=T*.5,x.map&&(v.map.value=x.map,t(x.map,v.uvTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,t(x.alphaMap,v.alphaMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest)}function d(v,x){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,v.rotation.value=x.rotation,x.map&&(v.map.value=x.map,t(x.map,v.mapTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,t(x.alphaMap,v.alphaMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest)}function p(v,x){v.specular.value.copy(x.specular),v.shininess.value=Math.max(x.shininess,1e-4)}function g(v,x){x.gradientMap&&(v.gradientMap.value=x.gradientMap)}function _(v,x){v.metalness.value=x.metalness,x.metalnessMap&&(v.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,v.metalnessMapTransform)),v.roughness.value=x.roughness,x.roughnessMap&&(v.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,v.roughnessMapTransform)),e.get(x).envMap&&(v.envMapIntensity.value=x.envMapIntensity)}function S(v,x,A){v.ior.value=x.ior,x.sheen>0&&(v.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),v.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(v.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,v.sheenColorMapTransform)),x.sheenRoughnessMap&&(v.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,v.sheenRoughnessMapTransform))),x.clearcoat>0&&(v.clearcoat.value=x.clearcoat,v.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(v.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,v.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(v.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Xn&&v.clearcoatNormalScale.value.negate())),x.iridescence>0&&(v.iridescence.value=x.iridescence,v.iridescenceIOR.value=x.iridescenceIOR,v.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(v.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,v.iridescenceMapTransform)),x.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),x.transmission>0&&(v.transmission.value=x.transmission,v.transmissionSamplerMap.value=A.texture,v.transmissionSamplerSize.value.set(A.width,A.height),x.transmissionMap&&(v.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,v.transmissionMapTransform)),v.thickness.value=x.thickness,x.thicknessMap&&(v.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=x.attenuationDistance,v.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(v.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(v.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=x.specularIntensity,v.specularColor.value.copy(x.specularColor),x.specularColorMap&&(v.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,v.specularColorMapTransform)),x.specularIntensityMap&&(v.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,v.specularIntensityMapTransform))}function E(v,x){x.matcap&&(v.matcap.value=x.matcap)}function M(v,x){const A=e.get(x).light;v.referencePosition.value.setFromMatrixPosition(A.matrixWorld),v.nearDistance.value=A.shadow.camera.near,v.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function aw(o,e,t,i){let s={},a={},c=[];const u=t.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(A,T){const L=T.program;i.uniformBlockBinding(A,L)}function d(A,T){let L=s[A.id];L===void 0&&(E(A),L=p(A),s[A.id]=L,A.addEventListener("dispose",v));const O=T.program;i.updateUBOMapping(A,O);const I=e.render.frame;a[A.id]!==I&&(_(A),a[A.id]=I)}function p(A){const T=g();A.__bindingPointIndex=T;const L=o.createBuffer(),O=A.__size,I=A.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,O,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,T,L),L}function g(){for(let A=0;A<u;A++)if(c.indexOf(A)===-1)return c.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(A){const T=s[A.id],L=A.uniforms,O=A.__cache;o.bindBuffer(o.UNIFORM_BUFFER,T);for(let I=0,N=L.length;I<N;I++){const Y=Array.isArray(L[I])?L[I]:[L[I]];for(let C=0,P=Y.length;C<P;C++){const ne=Y[C];if(S(ne,I,C,O)===!0){const le=ne.__offset,fe=Array.isArray(ne.value)?ne.value:[ne.value];let B=0;for(let $=0;$<fe.length;$++){const te=fe[$],K=M(te);typeof te=="number"||typeof te=="boolean"?(ne.__data[0]=te,o.bufferSubData(o.UNIFORM_BUFFER,le+B,ne.__data)):te.isMatrix3?(ne.__data[0]=te.elements[0],ne.__data[1]=te.elements[1],ne.__data[2]=te.elements[2],ne.__data[3]=0,ne.__data[4]=te.elements[3],ne.__data[5]=te.elements[4],ne.__data[6]=te.elements[5],ne.__data[7]=0,ne.__data[8]=te.elements[6],ne.__data[9]=te.elements[7],ne.__data[10]=te.elements[8],ne.__data[11]=0):(te.toArray(ne.__data,B),B+=K.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,le,ne.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(A,T,L,O){const I=A.value,N=T+"_"+L;if(O[N]===void 0)return typeof I=="number"||typeof I=="boolean"?O[N]=I:O[N]=I.clone(),!0;{const Y=O[N];if(typeof I=="number"||typeof I=="boolean"){if(Y!==I)return O[N]=I,!0}else if(Y.equals(I)===!1)return Y.copy(I),!0}return!1}function E(A){const T=A.uniforms;let L=0;const O=16;for(let N=0,Y=T.length;N<Y;N++){const C=Array.isArray(T[N])?T[N]:[T[N]];for(let P=0,ne=C.length;P<ne;P++){const le=C[P],fe=Array.isArray(le.value)?le.value:[le.value];for(let B=0,$=fe.length;B<$;B++){const te=fe[B],K=M(te),H=L%O;H!==0&&O-H<K.boundary&&(L+=O-H),le.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=L,L+=K.storage}}}const I=L%O;return I>0&&(L+=O-I),A.__size=L,A.__cache={},this}function M(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function v(A){const T=A.target;T.removeEventListener("dispose",v);const L=c.indexOf(T.__bindingPointIndex);c.splice(L,1),o.deleteBuffer(s[T.id]),delete s[T.id],delete a[T.id]}function x(){for(const A in s)o.deleteBuffer(s[A]);c=[],s={},a={}}return{bind:h,update:d,dispose:x}}class Ug{constructor(e={}){const{canvas:t=ty(),context:i=null,depth:s=!0,stencil:a=!0,alpha:c=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1}=e;this.isWebGLRenderer=!0;let _;i!==null?_=i.getContextAttributes().alpha:_=c;const S=new Uint32Array(4),E=new Int32Array(4);let M=null,v=null;const x=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=sn,this._useLegacyLights=!1,this.toneMapping=es,this.toneMappingExposure=1;const T=this;let L=!1,O=0,I=0,N=null,Y=-1,C=null;const P=new gn,ne=new gn;let le=null;const fe=new wt(0);let B=0,$=t.width,te=t.height,K=1,H=null,j=null;const X=new gn(0,0,$,te),F=new gn(0,0,$,te);let V=!1;const q=new Cg;let J=!1,he=!1,Se=null;const Ee=new _n,Re=new Tt,De=new ce,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ft(){return N===null?K:1}let se=i;function Kt(D,Q){for(let ae=0;ae<D.length;ae++){const ue=D[ae],oe=t.getContext(ue,Q);if(oe!==null)return oe}return null}try{const D={alpha:!0,depth:s,stencil:a,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ad}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",G,!1),t.addEventListener("webglcontextcreationerror",we,!1),se===null){const Q=["webgl2","webgl","experimental-webgl"];if(T.isWebGL1Renderer===!0&&Q.shift(),se=Kt(Q,D),se===null)throw Kt(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&se instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),se.getShaderPrecisionFormat===void 0&&(se.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let je,tt,He,At,rt,U,b,ie,ve,ge,xe,Ve,Ae,Ue,Xe,st,me,mt,ct,Je,We,Oe,nt,_t;function Lt(){je=new _M(se),tt=new cM(se,je,e),je.init(tt),Oe=new nw(se,je,tt),He=new ew(se,je,tt),At=new yM(se),rt=new BE,U=new tw(se,je,He,rt,tt,Oe,At),b=new hM(T),ie=new gM(T),ve=new Ay(se,tt),nt=new lM(se,je,ve,tt),ge=new vM(se,ve,At,nt),xe=new wM(se,ge,ve,At),ct=new EM(se,tt,U),st=new fM(rt),Ve=new zE(T,b,ie,je,tt,nt,st),Ae=new ow(T,rt),Ue=new VE,Xe=new qE(je,tt),mt=new aM(T,b,ie,He,xe,_,h),me=new JE(T,xe,tt),_t=new aw(se,At,tt,He),Je=new uM(se,je,At,tt),We=new xM(se,je,At,tt),At.programs=Ve.programs,T.capabilities=tt,T.extensions=je,T.properties=rt,T.renderLists=Ue,T.shadowMap=me,T.state=He,T.info=At}Lt();const ot=new sw(T,se);this.xr=ot,this.getContext=function(){return se},this.getContextAttributes=function(){return se.getContextAttributes()},this.forceContextLoss=function(){const D=je.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=je.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(D){D!==void 0&&(K=D,this.setSize($,te,!1))},this.getSize=function(D){return D.set($,te)},this.setSize=function(D,Q,ae=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=D,te=Q,t.width=Math.floor(D*K),t.height=Math.floor(Q*K),ae===!0&&(t.style.width=D+"px",t.style.height=Q+"px"),this.setViewport(0,0,D,Q)},this.getDrawingBufferSize=function(D){return D.set($*K,te*K).floor()},this.setDrawingBufferSize=function(D,Q,ae){$=D,te=Q,K=ae,t.width=Math.floor(D*ae),t.height=Math.floor(Q*ae),this.setViewport(0,0,D,Q)},this.getCurrentViewport=function(D){return D.copy(P)},this.getViewport=function(D){return D.copy(X)},this.setViewport=function(D,Q,ae,ue){D.isVector4?X.set(D.x,D.y,D.z,D.w):X.set(D,Q,ae,ue),He.viewport(P.copy(X).multiplyScalar(K).floor())},this.getScissor=function(D){return D.copy(F)},this.setScissor=function(D,Q,ae,ue){D.isVector4?F.set(D.x,D.y,D.z,D.w):F.set(D,Q,ae,ue),He.scissor(ne.copy(F).multiplyScalar(K).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(D){He.setScissorTest(V=D)},this.setOpaqueSort=function(D){H=D},this.setTransparentSort=function(D){j=D},this.getClearColor=function(D){return D.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor.apply(mt,arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha.apply(mt,arguments)},this.clear=function(D=!0,Q=!0,ae=!0){let ue=0;if(D){let oe=!1;if(N!==null){const be=N.texture.format;oe=be===cg||be===ug||be===lg}if(oe){const be=N.texture.type,Ge=be===ts||be===qr||be===ld||be===Fs||be===og||be===ag,Ze=mt.getClearColor(),Pe=mt.getClearAlpha(),at=Ze.r,et=Ze.g,it=Ze.b;Ge?(S[0]=at,S[1]=et,S[2]=it,S[3]=Pe,se.clearBufferuiv(se.COLOR,0,S)):(E[0]=at,E[1]=et,E[2]=it,E[3]=Pe,se.clearBufferiv(se.COLOR,0,E))}else ue|=se.COLOR_BUFFER_BIT}Q&&(ue|=se.DEPTH_BUFFER_BIT),ae&&(ue|=se.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",G,!1),t.removeEventListener("webglcontextcreationerror",we,!1),Ue.dispose(),Xe.dispose(),rt.dispose(),b.dispose(),ie.dispose(),xe.dispose(),nt.dispose(),_t.dispose(),Ve.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",ln),ot.removeEventListener("sessionend",xt),Se&&(Se.dispose(),Se=null),tn.stop()};function Me(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const D=At.autoReset,Q=me.enabled,ae=me.autoUpdate,ue=me.needsUpdate,oe=me.type;Lt(),At.autoReset=D,me.enabled=Q,me.autoUpdate=ae,me.needsUpdate=ue,me.type=oe}function we(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Ce(D){const Q=D.target;Q.removeEventListener("dispose",Ce),Ke(Q)}function Ke(D){Ye(D),rt.remove(D)}function Ye(D){const Q=rt.get(D).programs;Q!==void 0&&(Q.forEach(function(ae){Ve.releaseProgram(ae)}),D.isShaderMaterial&&Ve.releaseShaderCache(D))}this.renderBufferDirect=function(D,Q,ae,ue,oe,be){Q===null&&(Q=ke);const Ge=oe.isMesh&&oe.matrixWorld.determinant()<0,Ze=mc(D,Q,ae,ue,oe);He.setMaterial(ue,Ge);let Pe=ae.index,at=1;if(ue.wireframe===!0){if(Pe=ge.getWireframeAttribute(ae),Pe===void 0)return;at=2}const et=ae.drawRange,it=ae.attributes.position;let Pt=et.start*at,Rn=(et.start+et.count)*at;be!==null&&(Pt=Math.max(Pt,be.start*at),Rn=Math.min(Rn,(be.start+be.count)*at)),Pe!==null?(Pt=Math.max(Pt,0),Rn=Math.min(Rn,Pe.count)):it!=null&&(Pt=Math.max(Pt,0),Rn=Math.min(Rn,it.count));const qt=Rn-Pt;if(qt<0||qt===1/0)return;nt.setup(oe,ue,Ze,ae,Pe);let On,gt=Je;if(Pe!==null&&(On=ve.get(Pe),gt=We,gt.setIndex(On)),oe.isMesh)ue.wireframe===!0?(He.setLineWidth(ue.wireframeLinewidth*ft()),gt.setMode(se.LINES)):gt.setMode(se.TRIANGLES);else if(oe.isLine){let lt=ue.linewidth;lt===void 0&&(lt=1),He.setLineWidth(lt*ft()),oe.isLineSegments?gt.setMode(se.LINES):oe.isLineLoop?gt.setMode(se.LINE_LOOP):gt.setMode(se.LINE_STRIP)}else oe.isPoints?gt.setMode(se.POINTS):oe.isSprite&&gt.setMode(se.TRIANGLES);if(oe.isBatchedMesh)gt.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else if(oe.isInstancedMesh)gt.renderInstances(Pt,qt,oe.count);else if(ae.isInstancedBufferGeometry){const lt=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,bn=Math.min(ae.instanceCount,lt);gt.renderInstances(Pt,qt,bn)}else gt.render(Pt,qt)};function St(D,Q,ae){D.transparent===!0&&D.side===Xi&&D.forceSinglePass===!1?(D.side=Xn,D.needsUpdate=!0,Sr(D,Q,ae),D.side=rs,D.needsUpdate=!0,Sr(D,Q,ae),D.side=Xi):Sr(D,Q,ae)}this.compile=function(D,Q,ae=null){ae===null&&(ae=D),v=Xe.get(ae),v.init(),A.push(v),ae.traverseVisible(function(oe){oe.isLight&&oe.layers.test(Q.layers)&&(v.pushLight(oe),oe.castShadow&&v.pushShadow(oe))}),D!==ae&&D.traverseVisible(function(oe){oe.isLight&&oe.layers.test(Q.layers)&&(v.pushLight(oe),oe.castShadow&&v.pushShadow(oe))}),v.setupLights(T._useLegacyLights);const ue=new Set;return D.traverse(function(oe){const be=oe.material;if(be)if(Array.isArray(be))for(let Ge=0;Ge<be.length;Ge++){const Ze=be[Ge];St(Ze,ae,oe),ue.add(Ze)}else St(be,ae,oe),ue.add(be)}),A.pop(),v=null,ue},this.compileAsync=function(D,Q,ae=null){const ue=this.compile(D,Q,ae);return new Promise(oe=>{function be(){if(ue.forEach(function(Ge){rt.get(Ge).currentProgram.isReady()&&ue.delete(Ge)}),ue.size===0){oe(D);return}setTimeout(be,10)}je.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Mt=null;function Wt(D){Mt&&Mt(D)}function ln(){tn.stop()}function xt(){tn.start()}const tn=new Ag;tn.setAnimationLoop(Wt),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(D){Mt=D,ot.setAnimationLoop(D),D===null?tn.stop():tn.start()},ot.addEventListener("sessionstart",ln),ot.addEventListener("sessionend",xt),this.render=function(D,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(Q),Q=ot.getCamera()),D.isScene===!0&&D.onBeforeRender(T,D,Q,N),v=Xe.get(D,A.length),v.init(),A.push(v),Ee.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),q.setFromProjectionMatrix(Ee),he=this.localClippingEnabled,J=st.init(this.clippingPlanes,he),M=Ue.get(D,x.length),M.init(),x.push(M),xn(D,Q,0,T.sortObjects),M.finish(),T.sortObjects===!0&&M.sort(H,j),this.info.render.frame++,J===!0&&st.beginShadows();const ae=v.state.shadowsArray;if(me.render(ae,D,Q),J===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset(),mt.render(M,D),v.setupLights(T._useLegacyLights),Q.isArrayCamera){const ue=Q.cameras;for(let oe=0,be=ue.length;oe<be;oe++){const Ge=ue[oe];dl(M,D,Ge,Ge.viewport)}}else dl(M,D,Q);N!==null&&(U.updateMultisampleRenderTarget(N),U.updateRenderTargetMipmap(N)),D.isScene===!0&&D.onAfterRender(T,D,Q),nt.resetDefaultState(),Y=-1,C=null,A.pop(),A.length>0?v=A[A.length-1]:v=null,x.pop(),x.length>0?M=x[x.length-1]:M=null};function xn(D,Q,ae,ue){if(D.visible===!1)return;if(D.layers.test(Q.layers)){if(D.isGroup)ae=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Q);else if(D.isLight)v.pushLight(D),D.castShadow&&v.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||q.intersectsSprite(D)){ue&&De.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Ee);const Ge=xe.update(D),Ze=D.material;Ze.visible&&M.push(D,Ge,Ze,ae,De.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||q.intersectsObject(D))){const Ge=xe.update(D),Ze=D.material;if(ue&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),De.copy(D.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),De.copy(Ge.boundingSphere.center)),De.applyMatrix4(D.matrixWorld).applyMatrix4(Ee)),Array.isArray(Ze)){const Pe=Ge.groups;for(let at=0,et=Pe.length;at<et;at++){const it=Pe[at],Pt=Ze[it.materialIndex];Pt&&Pt.visible&&M.push(D,Ge,Pt,ae,De.z,it)}}else Ze.visible&&M.push(D,Ge,Ze,ae,De.z,null)}}const be=D.children;for(let Ge=0,Ze=be.length;Ge<Ze;Ge++)xn(be[Ge],Q,ae,ue)}function dl(D,Q,ae,ue){const oe=D.opaque,be=D.transmissive,Ge=D.transparent;v.setupLightsView(ae),J===!0&&st.setGlobalState(T.clippingPlanes,ae),be.length>0&&cs(oe,be,Q,ae),ue&&He.viewport(P.copy(ue)),oe.length>0&&Ki(oe,Q,ae),be.length>0&&Ki(be,Q,ae),Ge.length>0&&Ki(Ge,Q,ae),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function cs(D,Q,ae,ue){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;const be=tt.isWebGL2;Se===null&&(Se=new js(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")?Qa:ts,minFilter:Ka,samples:be?4:0})),T.getDrawingBufferSize(Re),be?Se.setSize(Re.x,Re.y):Se.setSize(Qu(Re.x),Qu(Re.y));const Ge=T.getRenderTarget();T.setRenderTarget(Se),T.getClearColor(fe),B=T.getClearAlpha(),B<1&&T.setClearColor(16777215,.5),T.clear();const Ze=T.toneMapping;T.toneMapping=es,Ki(D,ae,ue),U.updateMultisampleRenderTarget(Se),U.updateRenderTargetMipmap(Se);let Pe=!1;for(let at=0,et=Q.length;at<et;at++){const it=Q[at],Pt=it.object,Rn=it.geometry,qt=it.material,On=it.group;if(qt.side===Xi&&Pt.layers.test(ue.layers)){const gt=qt.side;qt.side=Xn,qt.needsUpdate=!0,fs(Pt,ae,ue,Rn,qt,On),qt.side=gt,qt.needsUpdate=!0,Pe=!0}}Pe===!0&&(U.updateMultisampleRenderTarget(Se),U.updateRenderTargetMipmap(Se)),T.setRenderTarget(Ge),T.setClearColor(fe,B),T.toneMapping=Ze}function Ki(D,Q,ae){const ue=Q.isScene===!0?Q.overrideMaterial:null;for(let oe=0,be=D.length;oe<be;oe++){const Ge=D[oe],Ze=Ge.object,Pe=Ge.geometry,at=ue===null?Ge.material:ue,et=Ge.group;Ze.layers.test(ae.layers)&&fs(Ze,Q,ae,Pe,at,et)}}function fs(D,Q,ae,ue,oe,be){D.onBeforeRender(T,Q,ae,ue,oe,be),D.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),oe.onBeforeRender(T,Q,ae,ue,D,be),oe.transparent===!0&&oe.side===Xi&&oe.forceSinglePass===!1?(oe.side=Xn,oe.needsUpdate=!0,T.renderBufferDirect(ae,Q,ue,oe,D,be),oe.side=rs,oe.needsUpdate=!0,T.renderBufferDirect(ae,Q,ue,oe,D,be),oe.side=Xi):T.renderBufferDirect(ae,Q,ue,oe,D,be),D.onAfterRender(T,Q,ae,ue,oe,be)}function Sr(D,Q,ae){Q.isScene!==!0&&(Q=ke);const ue=rt.get(D),oe=v.state.lights,be=v.state.shadowsArray,Ge=oe.state.version,Ze=Ve.getParameters(D,oe.state,be,Q,ae),Pe=Ve.getProgramCacheKey(Ze);let at=ue.programs;ue.environment=D.isMeshStandardMaterial?Q.environment:null,ue.fog=Q.fog,ue.envMap=(D.isMeshStandardMaterial?ie:b).get(D.envMap||ue.environment),at===void 0&&(D.addEventListener("dispose",Ce),at=new Map,ue.programs=at);let et=at.get(Pe);if(et!==void 0){if(ue.currentProgram===et&&ue.lightsStateVersion===Ge)return ml(D,Ze),et}else Ze.uniforms=Ve.getUniforms(D),D.onBuild(ae,Ze,T),D.onBeforeCompile(Ze,T),et=Ve.acquireProgram(Ze,Pe),at.set(Pe,et),ue.uniforms=Ze.uniforms;const it=ue.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(it.clippingPlanes=st.uniform),ml(D,Ze),ue.needsLights=gl(D),ue.lightsStateVersion=Ge,ue.needsLights&&(it.ambientLightColor.value=oe.state.ambient,it.lightProbe.value=oe.state.probe,it.directionalLights.value=oe.state.directional,it.directionalLightShadows.value=oe.state.directionalShadow,it.spotLights.value=oe.state.spot,it.spotLightShadows.value=oe.state.spotShadow,it.rectAreaLights.value=oe.state.rectArea,it.ltc_1.value=oe.state.rectAreaLTC1,it.ltc_2.value=oe.state.rectAreaLTC2,it.pointLights.value=oe.state.point,it.pointLightShadows.value=oe.state.pointShadow,it.hemisphereLights.value=oe.state.hemi,it.directionalShadowMap.value=oe.state.directionalShadowMap,it.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,it.spotShadowMap.value=oe.state.spotShadowMap,it.spotLightMatrix.value=oe.state.spotLightMatrix,it.spotLightMap.value=oe.state.spotLightMap,it.pointShadowMap.value=oe.state.pointShadowMap,it.pointShadowMatrix.value=oe.state.pointShadowMatrix),ue.currentProgram=et,ue.uniformsList=null,et}function pl(D){if(D.uniformsList===null){const Q=D.currentProgram.getUniforms();D.uniformsList=Gu.seqWithValue(Q.seq,D.uniforms)}return D.uniformsList}function ml(D,Q){const ae=rt.get(D);ae.outputColorSpace=Q.outputColorSpace,ae.batching=Q.batching,ae.instancing=Q.instancing,ae.instancingColor=Q.instancingColor,ae.skinning=Q.skinning,ae.morphTargets=Q.morphTargets,ae.morphNormals=Q.morphNormals,ae.morphColors=Q.morphColors,ae.morphTargetsCount=Q.morphTargetsCount,ae.numClippingPlanes=Q.numClippingPlanes,ae.numIntersection=Q.numClipIntersection,ae.vertexAlphas=Q.vertexAlphas,ae.vertexTangents=Q.vertexTangents,ae.toneMapping=Q.toneMapping}function mc(D,Q,ae,ue,oe){Q.isScene!==!0&&(Q=ke),U.resetTextureUnits();const be=Q.fog,Ge=ue.isMeshStandardMaterial?Q.environment:null,Ze=N===null?T.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:vr,Pe=(ue.isMeshStandardMaterial?ie:b).get(ue.envMap||Ge),at=ue.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,et=!!ae.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),it=!!ae.morphAttributes.position,Pt=!!ae.morphAttributes.normal,Rn=!!ae.morphAttributes.color;let qt=es;ue.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(qt=T.toneMapping);const On=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,gt=On!==void 0?On.length:0,lt=rt.get(ue),bn=v.state.lights;if(J===!0&&(he===!0||D!==C)){const Fn=D===C&&ue.id===Y;st.setState(ue,D,Fn)}let Ot=!1;ue.version===lt.__version?(lt.needsLights&&lt.lightsStateVersion!==bn.state.version||lt.outputColorSpace!==Ze||oe.isBatchedMesh&&lt.batching===!1||!oe.isBatchedMesh&&lt.batching===!0||oe.isInstancedMesh&&lt.instancing===!1||!oe.isInstancedMesh&&lt.instancing===!0||oe.isSkinnedMesh&&lt.skinning===!1||!oe.isSkinnedMesh&&lt.skinning===!0||oe.isInstancedMesh&&lt.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&lt.instancingColor===!1&&oe.instanceColor!==null||lt.envMap!==Pe||ue.fog===!0&&lt.fog!==be||lt.numClippingPlanes!==void 0&&(lt.numClippingPlanes!==st.numPlanes||lt.numIntersection!==st.numIntersection)||lt.vertexAlphas!==at||lt.vertexTangents!==et||lt.morphTargets!==it||lt.morphNormals!==Pt||lt.morphColors!==Rn||lt.toneMapping!==qt||tt.isWebGL2===!0&&lt.morphTargetsCount!==gt)&&(Ot=!0):(Ot=!0,lt.__version=ue.version);let Ji=lt.currentProgram;Ot===!0&&(Ji=Sr(ue,Q,oe));let _l=!1,zi=!1,Mr=!1;const jt=Ji.getUniforms(),di=lt.uniforms;if(He.useProgram(Ji.program)&&(_l=!0,zi=!0,Mr=!0),ue.id!==Y&&(Y=ue.id,zi=!0),_l||C!==D){jt.setValue(se,"projectionMatrix",D.projectionMatrix),jt.setValue(se,"viewMatrix",D.matrixWorldInverse);const Fn=jt.map.cameraPosition;Fn!==void 0&&Fn.setValue(se,De.setFromMatrixPosition(D.matrixWorld)),tt.logarithmicDepthBuffer&&jt.setValue(se,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&jt.setValue(se,"isOrthographic",D.isOrthographicCamera===!0),C!==D&&(C=D,zi=!0,Mr=!0)}if(oe.isSkinnedMesh){jt.setOptional(se,oe,"bindMatrix"),jt.setOptional(se,oe,"bindMatrixInverse");const Fn=oe.skeleton;Fn&&(tt.floatVertexTextures?(Fn.boneTexture===null&&Fn.computeBoneTexture(),jt.setValue(se,"boneTexture",Fn.boneTexture,U)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}oe.isBatchedMesh&&(jt.setOptional(se,oe,"batchingTexture"),jt.setValue(se,"batchingTexture",oe._matricesTexture,U));const ia=ae.morphAttributes;if((ia.position!==void 0||ia.normal!==void 0||ia.color!==void 0&&tt.isWebGL2===!0)&&ct.update(oe,ae,Ji),(zi||lt.receiveShadow!==oe.receiveShadow)&&(lt.receiveShadow=oe.receiveShadow,jt.setValue(se,"receiveShadow",oe.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(di.envMap.value=Pe,di.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),zi&&(jt.setValue(se,"toneMappingExposure",T.toneMappingExposure),lt.needsLights&&Qi(di,Mr),be&&ue.fog===!0&&Ae.refreshFogUniforms(di,be),Ae.refreshMaterialUniforms(di,ue,K,te,Se),Gu.upload(se,pl(lt),di,U)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Gu.upload(se,pl(lt),di,U),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&jt.setValue(se,"center",oe.center),jt.setValue(se,"modelViewMatrix",oe.modelViewMatrix),jt.setValue(se,"normalMatrix",oe.normalMatrix),jt.setValue(se,"modelMatrix",oe.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const Fn=ue.uniformsGroups;for(let hs=0,vl=Fn.length;hs<vl;hs++)if(tt.isWebGL2){const qs=Fn[hs];_t.update(qs,Ji),_t.bind(qs,Ji)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ji}function Qi(D,Q){D.ambientLightColor.needsUpdate=Q,D.lightProbe.needsUpdate=Q,D.directionalLights.needsUpdate=Q,D.directionalLightShadows.needsUpdate=Q,D.pointLights.needsUpdate=Q,D.pointLightShadows.needsUpdate=Q,D.spotLights.needsUpdate=Q,D.spotLightShadows.needsUpdate=Q,D.rectAreaLights.needsUpdate=Q,D.hemisphereLights.needsUpdate=Q}function gl(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(D,Q,ae){rt.get(D.texture).__webglTexture=Q,rt.get(D.depthTexture).__webglTexture=ae;const ue=rt.get(D);ue.__hasExternalTextures=!0,ue.__hasExternalTextures&&(ue.__autoAllocateDepthBuffer=ae===void 0,ue.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ue.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(D,Q){const ae=rt.get(D);ae.__webglFramebuffer=Q,ae.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(D,Q=0,ae=0){N=D,O=Q,I=ae;let ue=!0,oe=null,be=!1,Ge=!1;if(D){const Pe=rt.get(D);Pe.__useDefaultFramebuffer!==void 0?(He.bindFramebuffer(se.FRAMEBUFFER,null),ue=!1):Pe.__webglFramebuffer===void 0?U.setupRenderTarget(D):Pe.__hasExternalTextures&&U.rebindTextures(D,rt.get(D.texture).__webglTexture,rt.get(D.depthTexture).__webglTexture);const at=D.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Ge=!0);const et=rt.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(et[Q])?oe=et[Q][ae]:oe=et[Q],be=!0):tt.isWebGL2&&D.samples>0&&U.useMultisampledRTT(D)===!1?oe=rt.get(D).__webglMultisampledFramebuffer:Array.isArray(et)?oe=et[ae]:oe=et,P.copy(D.viewport),ne.copy(D.scissor),le=D.scissorTest}else P.copy(X).multiplyScalar(K).floor(),ne.copy(F).multiplyScalar(K).floor(),le=V;if(He.bindFramebuffer(se.FRAMEBUFFER,oe)&&tt.drawBuffers&&ue&&He.drawBuffers(D,oe),He.viewport(P),He.scissor(ne),He.setScissorTest(le),be){const Pe=rt.get(D.texture);se.framebufferTexture2D(se.FRAMEBUFFER,se.COLOR_ATTACHMENT0,se.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Pe.__webglTexture,ae)}else if(Ge){const Pe=rt.get(D.texture),at=Q||0;se.framebufferTextureLayer(se.FRAMEBUFFER,se.COLOR_ATTACHMENT0,Pe.__webglTexture,ae||0,at)}Y=-1},this.readRenderTargetPixels=function(D,Q,ae,ue,oe,be,Ge){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=rt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ze=Ze[Ge]),Ze){He.bindFramebuffer(se.FRAMEBUFFER,Ze);try{const Pe=D.texture,at=Pe.format,et=Pe.type;if(at!==ki&&Oe.convert(at)!==se.getParameter(se.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const it=et===Qa&&(je.has("EXT_color_buffer_half_float")||tt.isWebGL2&&je.has("EXT_color_buffer_float"));if(et!==ts&&Oe.convert(et)!==se.getParameter(se.IMPLEMENTATION_COLOR_READ_TYPE)&&!(et===$r&&(tt.isWebGL2||je.has("OES_texture_float")||je.has("WEBGL_color_buffer_float")))&&!it){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=D.width-ue&&ae>=0&&ae<=D.height-oe&&se.readPixels(Q,ae,ue,oe,Oe.convert(at),Oe.convert(et),be)}finally{const Pe=N!==null?rt.get(N).__webglFramebuffer:null;He.bindFramebuffer(se.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(D,Q,ae=0){const ue=Math.pow(2,-ae),oe=Math.floor(Q.image.width*ue),be=Math.floor(Q.image.height*ue);U.setTexture2D(Q,0),se.copyTexSubImage2D(se.TEXTURE_2D,ae,0,0,D.x,D.y,oe,be),He.unbindTexture()},this.copyTextureToTexture=function(D,Q,ae,ue=0){const oe=Q.image.width,be=Q.image.height,Ge=Oe.convert(ae.format),Ze=Oe.convert(ae.type);U.setTexture2D(ae,0),se.pixelStorei(se.UNPACK_FLIP_Y_WEBGL,ae.flipY),se.pixelStorei(se.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ae.premultiplyAlpha),se.pixelStorei(se.UNPACK_ALIGNMENT,ae.unpackAlignment),Q.isDataTexture?se.texSubImage2D(se.TEXTURE_2D,ue,D.x,D.y,oe,be,Ge,Ze,Q.image.data):Q.isCompressedTexture?se.compressedTexSubImage2D(se.TEXTURE_2D,ue,D.x,D.y,Q.mipmaps[0].width,Q.mipmaps[0].height,Ge,Q.mipmaps[0].data):se.texSubImage2D(se.TEXTURE_2D,ue,D.x,D.y,Ge,Ze,Q.image),ue===0&&ae.generateMipmaps&&se.generateMipmap(se.TEXTURE_2D),He.unbindTexture()},this.copyTextureToTexture3D=function(D,Q,ae,ue,oe=0){if(T.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=D.max.x-D.min.x+1,Ge=D.max.y-D.min.y+1,Ze=D.max.z-D.min.z+1,Pe=Oe.convert(ue.format),at=Oe.convert(ue.type);let et;if(ue.isData3DTexture)U.setTexture3D(ue,0),et=se.TEXTURE_3D;else if(ue.isDataArrayTexture||ue.isCompressedArrayTexture)U.setTexture2DArray(ue,0),et=se.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}se.pixelStorei(se.UNPACK_FLIP_Y_WEBGL,ue.flipY),se.pixelStorei(se.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ue.premultiplyAlpha),se.pixelStorei(se.UNPACK_ALIGNMENT,ue.unpackAlignment);const it=se.getParameter(se.UNPACK_ROW_LENGTH),Pt=se.getParameter(se.UNPACK_IMAGE_HEIGHT),Rn=se.getParameter(se.UNPACK_SKIP_PIXELS),qt=se.getParameter(se.UNPACK_SKIP_ROWS),On=se.getParameter(se.UNPACK_SKIP_IMAGES),gt=ae.isCompressedTexture?ae.mipmaps[oe]:ae.image;se.pixelStorei(se.UNPACK_ROW_LENGTH,gt.width),se.pixelStorei(se.UNPACK_IMAGE_HEIGHT,gt.height),se.pixelStorei(se.UNPACK_SKIP_PIXELS,D.min.x),se.pixelStorei(se.UNPACK_SKIP_ROWS,D.min.y),se.pixelStorei(se.UNPACK_SKIP_IMAGES,D.min.z),ae.isDataTexture||ae.isData3DTexture?se.texSubImage3D(et,oe,Q.x,Q.y,Q.z,be,Ge,Ze,Pe,at,gt.data):ae.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),se.compressedTexSubImage3D(et,oe,Q.x,Q.y,Q.z,be,Ge,Ze,Pe,gt.data)):se.texSubImage3D(et,oe,Q.x,Q.y,Q.z,be,Ge,Ze,Pe,at,gt),se.pixelStorei(se.UNPACK_ROW_LENGTH,it),se.pixelStorei(se.UNPACK_IMAGE_HEIGHT,Pt),se.pixelStorei(se.UNPACK_SKIP_PIXELS,Rn),se.pixelStorei(se.UNPACK_SKIP_ROWS,qt),se.pixelStorei(se.UNPACK_SKIP_IMAGES,On),oe===0&&ue.generateMipmaps&&se.generateMipmap(et),He.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?U.setTextureCube(D,0):D.isData3DTexture?U.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?U.setTexture2DArray(D,0):U.setTexture2D(D,0),He.unbindTexture()},this.resetState=function(){O=0,I=0,N=null,He.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ud?"display-p3":"srgb",t.unpackColorSpace=Ct.workingColorSpace===ac?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===sn?zs:hg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===zs?sn:vr}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class lw extends Ug{}lw.prototype.isWebGL1Renderer=!0;class uw extends ui{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}const D1={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class cw{constructor(e,t,i){const s=this;let a=!1,c=0,u=0,h;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(p){u++,a===!1&&s.onStart!==void 0&&s.onStart(p,c,u),a=!0},this.itemEnd=function(p){c++,s.onProgress!==void 0&&s.onProgress(p,c,u),c===u&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return h?h(p):p},this.setURLModifier=function(p){return h=p,this},this.addHandler=function(p,g){return d.push(p,g),this},this.removeHandler=function(p){const g=d.indexOf(p);return g!==-1&&d.splice(g,2),this},this.getHandler=function(p){for(let g=0,_=d.length;g<_;g+=2){const S=d[g],E=d[g+1];if(S.global&&(S.lastIndex=0),S.test(p))return E}return null}}}const fw=new cw;class dd{constructor(e){this.manager=e!==void 0?e:fw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,a){i.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}dd.DEFAULT_MATERIAL_NAME="__DEFAULT";class hw extends dd{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=D1.get(e);if(c!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c;const u=el("img");function h(){p(),D1.add(e,this),t&&t(this),a.manager.itemEnd(e)}function d(g){p(),s&&s(g),a.manager.itemError(e),a.manager.itemEnd(e)}function p(){u.removeEventListener("load",h,!1),u.removeEventListener("error",d,!1)}return u.addEventListener("load",h,!1),u.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),a.manager.itemStart(e),u.src=e,u}}class dw extends dd{constructor(e){super(e)}load(e,t,i,s){const a=new Yn,c=new hw(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(u){a.image=u,a.needsUpdate=!0,t!==void 0&&t(a)},i,s),a}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ad}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ad);function pr(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Ig(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ci={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},tl={duration:.5,overwrite:!1,delay:0},pd,vn,kt,Ti=1e8,bt=1/Ti,jh=Math.PI*2,pw=jh/4,mw=0,Og=Math.sqrt,gw=Math.cos,_w=Math.sin,dn=function(e){return typeof e=="string"},Yt=function(e){return typeof e=="function"},xr=function(e){return typeof e=="number"},md=function(e){return typeof e>"u"},Zi=function(e){return typeof e=="object"},qn=function(e){return e!==!1},gd=function(){return typeof window<"u"},Vu=function(e){return Yt(e)||dn(e)},Fg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},An=Array.isArray,vw=/random\([^)]+\)/g,xw=/,\s*/g,U1=/(?:-?\.?\d|\.)+/gi,kg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ko=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Rh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,zg=/[+-]=-?[.\d]+/,yw=/[^,'"\[\]\s]+/gi,Sw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Vt,Wi,Xh,_d,fi={},Ju={},Bg,Hg=function(e){return(Ju=$o(e,fi))&&Qn},vd=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},nl=function(e,t){return!t&&console.warn(e)},Vg=function(e,t){return e&&(fi[e]=t)&&Ju&&(Ju[e]=t)||fi},il=function(){return 0},Mw={suppressEvents:!0,isStart:!0,kill:!1},Wu={suppressEvents:!0,kill:!1},Ew={suppressEvents:!0},xd={},ns=[],Yh={},Gg,si={},bh={},I1=30,ju=[],yd="",Sd=function(e){var t=e[0],i,s;if(Zi(t)||Yt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(s=ju.length;s--&&!ju[s].targetTest(t););i=ju[s]}for(s=e.length;s--;)e[s]&&(e[s]._gsap||(e[s]._gsap=new f_(e[s],i)))||e.splice(s,1);return e},Hs=function(e){return e._gsap||Sd(Ci(e))[0]._gsap},Wg=function(e,t,i){return(i=e[t])&&Yt(i)?e[t]():md(i)&&e.getAttribute&&e.getAttribute(t)||i},$n=function(e,t){return(e=e.split(",")).forEach(t)||e},Zt=function(e){return Math.round(e*1e5)/1e5||0},Ht=function(e){return Math.round(e*1e7)/1e7||0},Vo=function(e,t){var i=t.charAt(0),s=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+s:i==="-"?e-s:i==="*"?e*s:e/s},ww=function(e,t){for(var i=t.length,s=0;e.indexOf(t[s])<0&&++s<i;);return s<i},ec=function(){var e=ns.length,t=ns.slice(0),i,s;for(Yh={},ns.length=0,i=0;i<e;i++)s=t[i],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Md=function(e){return!!(e._initted||e._startAt||e.add)},jg=function(e,t,i,s){ns.length&&!vn&&ec(),e.render(t,i,!!(vn&&t<0&&Md(e))),ns.length&&!vn&&ec()},Xg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(yw).length<2?t:dn(e)?e.trim():e},Yg=function(e){return e},hi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Tw=function(e){return function(t,i){for(var s in i)s in t||s==="duration"&&e||s==="ease"||(t[s]=i[s])}},$o=function(e,t){for(var i in t)e[i]=t[i];return e},O1=function o(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Zi(t[i])?o(e[i]||(e[i]={}),t[i]):t[i]);return e},tc=function(e,t){var i={},s;for(s in e)s in t||(i[s]=e[s]);return i},qa=function(e){var t=e.parent||Vt,i=e.keyframes?Tw(An(e.keyframes)):hi;if(qn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},Cw=function(e,t){for(var i=e.length,s=i===t.length;s&&i--&&e[i]===t[i];);return i<0},qg=function(e,t,i,s,a){var c=e[s],u;if(a)for(u=t[a];c&&c[a]>u;)c=c._prev;return c?(t._next=c._next,c._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[s]=t,t._prev=c,t.parent=t._dp=e,t},hc=function(e,t,i,s){i===void 0&&(i="_first"),s===void 0&&(s="_last");var a=t._prev,c=t._next;a?a._next=c:e[i]===t&&(e[i]=c),c?c._prev=a:e[s]===t&&(e[s]=a),t._next=t._prev=t.parent=null},os=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Vs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},Aw=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},qh=function(e,t,i,s){return e._startAt&&(vn?e._startAt.revert(Wu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,s))},Rw=function o(e){return!e||e._ts&&o(e.parent)},F1=function(e){return e._repeat?Zo(e._tTime,e=e.duration()+e._rDelay)*e:0},Zo=function(e,t){var i=Math.floor(e=Ht(e/t));return e&&i===e?i-1:i},nc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},dc=function(e){return e._end=Ht(e._start+(e._tDur/Math.abs(e._ts||e._rts||bt)||0))},pc=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Ht(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),dc(e),i._dirty||Vs(i,e)),e},$g=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=nc(e.rawTime(),t),(!t._dur||hl(0,t.totalDuration(),i)-t._tTime>bt)&&t.render(i,!0)),Vs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-bt}},Yi=function(e,t,i,s){return t.parent&&os(t),t._start=Ht((xr(i)?i:i||e!==Vt?Si(e,i,t):e._time)+t._delay),t._end=Ht(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),qg(e,t,"_first","_last",e._sort?"_start":0),$h(t)||(e._recent=t),s||$g(e,t),e._ts<0&&pc(e,e._tTime),e},Zg=function(e,t){return(fi.ScrollTrigger||vd("scrollTrigger",t))&&fi.ScrollTrigger.create(t,e)},Kg=function(e,t,i,s,a){if(wd(e,t,a),!e._initted)return 1;if(!i&&e._pt&&!vn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Gg!==oi.frame)return ns.push(e),e._lazy=[a,s],1},bw=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},$h=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Lw=function(e,t,i,s){var a=e.ratio,c=t<0||!t&&(!e._start&&bw(e)&&!(!e._initted&&$h(e))||(e._ts<0||e._dp._ts<0)&&!$h(e))?0:1,u=e._rDelay,h=0,d,p,g;if(u&&e._repeat&&(h=hl(0,e._tDur,t),p=Zo(h,u),e._yoyo&&p&1&&(c=1-c),p!==Zo(e._tTime,u)&&(a=1-c,e.vars.repeatRefresh&&e._initted&&e.invalidate())),c!==a||vn||s||e._zTime===bt||!t&&e._zTime){if(!e._initted&&Kg(e,t,s,i,h))return;for(g=e._zTime,e._zTime=t||(i?bt:0),i||(i=t&&!g),e.ratio=c,e._from&&(c=1-c),e._time=0,e._tTime=h,d=e._pt;d;)d.r(c,d.d),d=d._next;t<0&&qh(e,t,i,!0),e._onUpdate&&!i&&ai(e,"onUpdate"),h&&e._repeat&&!i&&e.parent&&ai(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===c&&(c&&os(e,1),!i&&!vn&&(ai(e,c?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Pw=function(e,t,i){var s;if(i>t)for(s=e._first;s&&s._start<=i;){if(s.data==="isPause"&&s._start>t)return s;s=s._next}else for(s=e._last;s&&s._start>=i;){if(s.data==="isPause"&&s._start<t)return s;s=s._prev}},Ko=function(e,t,i,s){var a=e._repeat,c=Ht(t)||0,u=e._tTime/e._tDur;return u&&!s&&(e._time*=c/e._dur),e._dur=c,e._tDur=a?a<0?1e10:Ht(c*(a+1)+e._rDelay*a):c,u>0&&!s&&pc(e,e._tTime=e._tDur*u),e.parent&&dc(e),i||Vs(e.parent,e),e},k1=function(e){return e instanceof Wn?Vs(e):Ko(e,e._dur)},Nw={_start:0,endTime:il,totalDuration:il},Si=function o(e,t,i){var s=e.labels,a=e._recent||Nw,c=e.duration()>=Ti?a.endTime(!1):e._dur,u,h,d;return dn(t)&&(isNaN(t)||t in s)?(h=t.charAt(0),d=t.substr(-1)==="%",u=t.indexOf("="),h==="<"||h===">"?(u>=0&&(t=t.replace(/=/,"")),(h==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(d?(u<0?a:i).totalDuration()/100:1)):u<0?(t in s||(s[t]=c),s[t]):(h=parseFloat(t.charAt(u-1)+t.substr(u+1)),d&&i&&(h=h/100*(An(i)?i[0]:i).totalDuration()),u>1?o(e,t.substr(0,u-1),i)+h:c+h)):t==null?c:+t},$a=function(e,t,i){var s=xr(t[1]),a=(s?2:1)+(e<2?0:1),c=t[a],u,h;if(s&&(c.duration=t[1]),c.parent=i,e){for(u=c,h=i;h&&!("immediateRender"in u);)u=h.vars.defaults||{},h=qn(h.vars.inherit)&&h.parent;c.immediateRender=qn(u.immediateRender),e<2?c.runBackwards=1:c.startAt=t[a-1]}return new en(t[0],c,t[a+1])},us=function(e,t){return e||e===0?t(e):t},hl=function(e,t,i){return i<e?e:i>t?t:i},Cn=function(e,t){return!dn(e)||!(t=Sw.exec(e))?"":t[1]},Dw=function(e,t,i){return us(i,function(s){return hl(e,t,s)})},Zh=[].slice,Qg=function(e,t){return e&&Zi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Zi(e[0]))&&!e.nodeType&&e!==Wi},Uw=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(s){var a;return dn(s)&&!t||Qg(s,1)?(a=i).push.apply(a,Ci(s)):i.push(s)})||i},Ci=function(e,t,i){return kt&&!t&&kt.selector?kt.selector(e):dn(e)&&!i&&(Xh||!Qo())?Zh.call((t||_d).querySelectorAll(e),0):An(e)?Uw(e,i):Qg(e)?Zh.call(e,0):e?[e]:[]},Kh=function(e){return e=Ci(e)[0]||nl("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Ci(t,i.querySelectorAll?i:i===e?nl("Invalid scope")||_d.createElement("div"):e)}},Jg=function(e){return e.sort(function(){return .5-Math.random()})},e_=function(e){if(Yt(e))return e;var t=Zi(e)?e:{each:e},i=Gs(t.ease),s=t.from||0,a=parseFloat(t.base)||0,c={},u=s>0&&s<1,h=isNaN(s)||u,d=t.axis,p=s,g=s;return dn(s)?p=g={center:.5,edges:.5,end:1}[s]||0:!u&&h&&(p=s[0],g=s[1]),function(_,S,E){var M=(E||t).length,v=c[M],x,A,T,L,O,I,N,Y,C;if(!v){if(C=t.grid==="auto"?0:(t.grid||[1,Ti])[1],!C){for(N=-Ti;N<(N=E[C++].getBoundingClientRect().left)&&C<M;);C<M&&C--}for(v=c[M]=[],x=h?Math.min(C,M)*p-.5:s%C,A=C===Ti?0:h?M*g/C-.5:s/C|0,N=0,Y=Ti,I=0;I<M;I++)T=I%C-x,L=A-(I/C|0),v[I]=O=d?Math.abs(d==="y"?L:T):Og(T*T+L*L),O>N&&(N=O),O<Y&&(Y=O);s==="random"&&Jg(v),v.max=N-Y,v.min=Y,v.v=M=(parseFloat(t.amount)||parseFloat(t.each)*(C>M?M-1:d?d==="y"?M/C:C:Math.max(C,M/C))||0)*(s==="edges"?-1:1),v.b=M<0?a-M:a,v.u=Cn(t.amount||t.each)||0,i=i&&M<0?Yw(i):i}return M=(v[_]-v.min)/v.max||0,Ht(v.b+(i?i(M):M)*v.v)+v.u}},Qh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var s=Ht(Math.round(parseFloat(i)/e)*e*t);return(s-s%1)/t+(xr(i)?0:Cn(i))}},t_=function(e,t){var i=An(e),s,a;return!i&&Zi(e)&&(s=i=e.radius||Ti,e.values?(e=Ci(e.values),(a=!xr(e[0]))&&(s*=s)):e=Qh(e.increment)),us(t,i?Yt(e)?function(c){return a=e(c),Math.abs(a-c)<=s?a:c}:function(c){for(var u=parseFloat(a?c.x:c),h=parseFloat(a?c.y:0),d=Ti,p=0,g=e.length,_,S;g--;)a?(_=e[g].x-u,S=e[g].y-h,_=_*_+S*S):_=Math.abs(e[g]-u),_<d&&(d=_,p=g);return p=!s||d<=s?e[p]:c,a||p===c||xr(c)?p:p+Cn(c)}:Qh(e))},n_=function(e,t,i,s){return us(An(e)?!t:i===!0?!!(i=0):!s,function(){return An(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(s=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*s)/s})},Iw=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(s){return t.reduce(function(a,c){return c(a)},s)}},Ow=function(e,t){return function(i){return e(parseFloat(i))+(t||Cn(i))}},Fw=function(e,t,i){return r_(e,t,0,1,i)},i_=function(e,t,i){return us(i,function(s){return e[~~t(s)]})},kw=function o(e,t,i){var s=t-e;return An(e)?i_(e,o(0,e.length),t):us(i,function(a){return(s+(a-e)%s)%s+e})},zw=function o(e,t,i){var s=t-e,a=s*2;return An(e)?i_(e,o(0,e.length-1),t):us(i,function(c){return c=(a+(c-e)%a)%a||0,e+(c>s?a-c:c)})},rl=function(e){return e.replace(vw,function(t){var i=t.indexOf("[")+1,s=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(xw);return n_(i?s:+s[0],i?0:+s[1],+s[2]||1e-5)})},r_=function(e,t,i,s,a){var c=t-e,u=s-i;return us(a,function(h){return i+((h-e)/c*u||0)})},Bw=function o(e,t,i,s){var a=isNaN(e+t)?0:function(S){return(1-S)*e+S*t};if(!a){var c=dn(e),u={},h,d,p,g,_;if(i===!0&&(s=1)&&(i=null),c)e={p:e},t={p:t};else if(An(e)&&!An(t)){for(p=[],g=e.length,_=g-2,d=1;d<g;d++)p.push(o(e[d-1],e[d]));g--,a=function(E){E*=g;var M=Math.min(_,~~E);return p[M](E-M)},i=t}else s||(e=$o(An(e)?[]:{},e));if(!p){for(h in t)Ed.call(u,e,h,"get",t[h]);a=function(E){return Ad(E,u)||(c?e.p:e)}}}return us(i,a)},z1=function(e,t,i){var s=e.labels,a=Ti,c,u,h;for(c in s)u=s[c]-t,u<0==!!i&&u&&a>(u=Math.abs(u))&&(h=c,a=u);return h},ai=function(e,t,i){var s=e.vars,a=s[t],c=kt,u=e._ctx,h,d,p;if(a)return h=s[t+"Params"],d=s.callbackScope||e,i&&ns.length&&ec(),u&&(kt=u),p=h?a.apply(d,h):a.call(d),kt=c,p},Ga=function(e){return os(e),e.scrollTrigger&&e.scrollTrigger.kill(!!vn),e.progress()<1&&ai(e,"onInterrupt"),e},zo,s_=[],o_=function(e){if(e)if(e=!e.name&&e.default||e,gd()||e.headless){var t=e.name,i=Yt(e),s=t&&!i&&e.init?function(){this._props=[]}:e,a={init:il,render:Ad,add:Ed,kill:iT,modifier:nT,rawVars:0},c={targetTest:0,get:0,getSetter:Cd,aliases:{},register:0};if(Qo(),e!==s){if(si[t])return;hi(s,hi(tc(e,a),c)),$o(s.prototype,$o(a,tc(e,c))),si[s.prop=t]=s,e.targetTest&&(ju.push(s),xd[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Vg(t,s),e.register&&e.register(Qn,s,Zn)}else s_.push(e)},Rt=255,Wa={aqua:[0,Rt,Rt],lime:[0,Rt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Rt],navy:[0,0,128],white:[Rt,Rt,Rt],olive:[128,128,0],yellow:[Rt,Rt,0],orange:[Rt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Rt,0,0],pink:[Rt,192,203],cyan:[0,Rt,Rt],transparent:[Rt,Rt,Rt,0]},Lh=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Rt+.5|0},a_=function(e,t,i){var s=e?xr(e)?[e>>16,e>>8&Rt,e&Rt]:0:Wa.black,a,c,u,h,d,p,g,_,S,E;if(!s){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Wa[e])s=Wa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),c=e.charAt(2),u=e.charAt(3),e="#"+a+a+c+c+u+u+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return s=parseInt(e.substr(1,6),16),[s>>16,s>>8&Rt,s&Rt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),s=[e>>16,e>>8&Rt,e&Rt]}else if(e.substr(0,3)==="hsl"){if(s=E=e.match(U1),!t)h=+s[0]%360/360,d=+s[1]/100,p=+s[2]/100,c=p<=.5?p*(d+1):p+d-p*d,a=p*2-c,s.length>3&&(s[3]*=1),s[0]=Lh(h+1/3,a,c),s[1]=Lh(h,a,c),s[2]=Lh(h-1/3,a,c);else if(~e.indexOf("="))return s=e.match(kg),i&&s.length<4&&(s[3]=1),s}else s=e.match(U1)||Wa.transparent;s=s.map(Number)}return t&&!E&&(a=s[0]/Rt,c=s[1]/Rt,u=s[2]/Rt,g=Math.max(a,c,u),_=Math.min(a,c,u),p=(g+_)/2,g===_?h=d=0:(S=g-_,d=p>.5?S/(2-g-_):S/(g+_),h=g===a?(c-u)/S+(c<u?6:0):g===c?(u-a)/S+2:(a-c)/S+4,h*=60),s[0]=~~(h+.5),s[1]=~~(d*100+.5),s[2]=~~(p*100+.5)),i&&s.length<4&&(s[3]=1),s},l_=function(e){var t=[],i=[],s=-1;return e.split(is).forEach(function(a){var c=a.match(ko)||[];t.push.apply(t,c),i.push(s+=c.length+1)}),t.c=i,t},B1=function(e,t,i){var s="",a=(e+s).match(is),c=t?"hsla(":"rgba(",u=0,h,d,p,g;if(!a)return e;if(a=a.map(function(_){return(_=a_(_,t,1))&&c+(t?_[0]+","+_[1]+"%,"+_[2]+"%,"+_[3]:_.join(","))+")"}),i&&(p=l_(e),h=i.c,h.join(s)!==p.c.join(s)))for(d=e.replace(is,"1").split(ko),g=d.length-1;u<g;u++)s+=d[u]+(~h.indexOf(u)?a.shift()||c+"0,0,0,0)":(p.length?p:a.length?a:i).shift());if(!d)for(d=e.split(is),g=d.length-1;u<g;u++)s+=d[u]+a[u];return s+d[g]},is=(function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Wa)o+="|"+e+"\\b";return new RegExp(o+")","gi")})(),Hw=/hsl[a]?\(/,u_=function(e){var t=e.join(" "),i;if(is.lastIndex=0,is.test(t))return i=Hw.test(t),e[1]=B1(e[1],i),e[0]=B1(e[0],i,l_(e[1])),!0},sl,oi=(function(){var o=Date.now,e=500,t=33,i=o(),s=i,a=1e3/240,c=a,u=[],h,d,p,g,_,S,E=function M(v){var x=o()-s,A=v===!0,T,L,O,I;if((x>e||x<0)&&(i+=x-t),s+=x,O=s-i,T=O-c,(T>0||A)&&(I=++g.frame,_=O-g.time*1e3,g.time=O=O/1e3,c+=T+(T>=a?4:a-T),L=1),A||(h=d(M)),L)for(S=0;S<u.length;S++)u[S](O,_,I,v)};return g={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(v){return _/(1e3/(v||60))},wake:function(){Bg&&(!Xh&&gd()&&(Wi=Xh=window,_d=Wi.document||{},fi.gsap=Qn,(Wi.gsapVersions||(Wi.gsapVersions=[])).push(Qn.version),Hg(Ju||Wi.GreenSockGlobals||!Wi.gsap&&Wi||{}),s_.forEach(o_)),p=typeof requestAnimationFrame<"u"&&requestAnimationFrame,h&&g.sleep(),d=p||function(v){return setTimeout(v,c-g.time*1e3+1|0)},sl=1,E(2))},sleep:function(){(p?cancelAnimationFrame:clearTimeout)(h),sl=0,d=il},lagSmoothing:function(v,x){e=v||1/0,t=Math.min(x||33,e)},fps:function(v){a=1e3/(v||240),c=g.time*1e3+a},add:function(v,x,A){var T=x?function(L,O,I,N){v(L,O,I,N),g.remove(T)}:v;return g.remove(v),u[A?"unshift":"push"](T),Qo(),T},remove:function(v,x){~(x=u.indexOf(v))&&u.splice(x,1)&&S>=x&&S--},_listeners:u},g})(),Qo=function(){return!sl&&oi.wake()},pt={},Vw=/^[\d.\-M][\d.\-,\s]/,Gw=/["']/g,Ww=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),s=i[0],a=1,c=i.length,u,h,d;a<c;a++)h=i[a],u=a!==c-1?h.lastIndexOf(","):h.length,d=h.substr(0,u),t[s]=isNaN(d)?d.replace(Gw,"").trim():+d,s=h.substr(u+1).trim();return t},jw=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),s=e.indexOf("(",t);return e.substring(t,~s&&s<i?e.indexOf(")",i+1):i)},Xw=function(e){var t=(e+"").split("("),i=pt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[Ww(t[1])]:jw(e).split(",").map(Xg)):pt._CE&&Vw.test(e)?pt._CE("",e):i},Yw=function(e){return function(t){return 1-e(1-t)}},Gs=function(e,t){return e&&(Yt(e)?e:pt[e]||Xw(e))||t},Ys=function(e,t,i,s){i===void 0&&(i=function(h){return 1-t(1-h)}),s===void 0&&(s=function(h){return h<.5?t(h*2)/2:1-t((1-h)*2)/2});var a={easeIn:t,easeOut:i,easeInOut:s},c;return $n(e,function(u){pt[u]=fi[u]=a,pt[c=u.toLowerCase()]=i;for(var h in a)pt[c+(h==="easeIn"?".in":h==="easeOut"?".out":".inOut")]=pt[u+"."+h]=a[h]}),a},c_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ph=function o(e,t,i){var s=t>=1?t:1,a=(i||(e?.3:.45))/(t<1?t:1),c=a/jh*(Math.asin(1/s)||0),u=function(p){return p===1?1:s*Math.pow(2,-10*p)*_w((p-c)*a)+1},h=e==="out"?u:e==="in"?function(d){return 1-u(1-d)}:c_(u);return a=jh/a,h.config=function(d,p){return o(e,d,p)},h},Nh=function o(e,t){t===void 0&&(t=1.70158);var i=function(c){return c?--c*c*((t+1)*c+t)+1:0},s=e==="out"?i:e==="in"?function(a){return 1-i(1-a)}:c_(i);return s.config=function(a){return o(e,a)},s};$n("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;Ys(o+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});pt.Linear.easeNone=pt.none=pt.Linear.easeIn;Ys("Elastic",Ph("in"),Ph("out"),Ph());(function(o,e){var t=1/e,i=2*t,s=2.5*t,a=function(u){return u<t?o*u*u:u<i?o*Math.pow(u-1.5/e,2)+.75:u<s?o*(u-=2.25/e)*u+.9375:o*Math.pow(u-2.625/e,2)+.984375};Ys("Bounce",function(c){return 1-a(1-c)},a)})(7.5625,2.75);Ys("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});Ys("Circ",function(o){return-(Og(1-o*o)-1)});Ys("Sine",function(o){return o===1?1:-gw(o*pw)+1});Ys("Back",Nh("in"),Nh("out"),Nh());pt.SteppedEase=pt.steps=fi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,s=e+(t?0:1),a=t?1:0,c=1-bt;return function(u){return((s*hl(0,c,u)|0)+a)*i}}};tl.ease=pt["quad.out"];$n("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return yd+=o+","+o+"Params,"});var f_=function(e,t){this.id=mw++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Wg,this.set=t?t.getSetter:Cd},ol=(function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ko(this,+t.duration,1,1),this.data=t.data,kt&&(this._ctx=kt,kt.data.push(this)),sl||oi.wake()}var e=o.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ko(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,s){if(Qo(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(pc(this,i),!a._dp||a.parent||$g(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Yi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===bt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),jg(this,i,s)),this},e.time=function(i,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+F1(this))%(this._dur+this._rDelay)||(i?this._dur:0),s):this._time},e.totalProgress=function(i,s){return arguments.length?this.totalTime(this.totalDuration()*i,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+F1(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,s){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*a,s):this._repeat?Zo(this._tTime,a)+1:1},e.timeScale=function(i,s){if(!arguments.length)return this._rts===-bt?0:this._rts;if(this._rts===i)return this;var a=this.parent&&this._ts?nc(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-bt?0:this._rts,this.totalTime(hl(-Math.abs(this._delay),this.totalDuration(),a),s!==!1),dc(this),Aw(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Qo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==bt&&(this._tTime-=bt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Ht(i);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&Yi(s,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(qn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var s=this.parent||this._dp;return s?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?nc(s.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=Ew);var s=vn;return vn=i,Md(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),vn=s,this},e.globalTime=function(i){for(var s=this,a=arguments.length?i:s.rawTime();s;)a=s._start+a/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(i):a},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,k1(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var s=this._time;return this._rDelay=i,k1(this),s?this.time(s):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,s){return this.totalTime(Si(this,i),qn(s))},e.restart=function(i,s){return this.play().totalTime(i?-this._delay:0,qn(s)),this._dur||(this._zTime=-bt),this},e.play=function(i,s){return i!=null&&this.seek(i,s),this.reversed(!1).paused(!1)},e.reverse=function(i,s){return i!=null&&this.seek(i||this.totalDuration(),s),this.reversed(!0).paused(!1)},e.pause=function(i,s){return i!=null&&this.seek(i,s),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-bt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-bt,this},e.isActive=function(){var i=this.parent||this._dp,s=this._start,a;return!!(!i||this._ts&&this._initted&&i.isActive()&&(a=i.rawTime(!0))>=s&&a<this.endTime(!0)-bt)},e.eventCallback=function(i,s,a){var c=this.vars;return arguments.length>1?(s?(c[i]=s,a&&(c[i+"Params"]=a),i==="onUpdate"&&(this._onUpdate=s)):delete c[i],this):c[i]},e.then=function(i){var s=this,a=s._prom;return new Promise(function(c){var u=Yt(i)?i:Yg,h=function(){var p=s.then;s.then=null,a&&a(),Yt(u)&&(u=u(s))&&(u.then||u===s)&&(s.then=p),c(u),s.then=p};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?h():s._prom=h})},e.kill=function(){Ga(this)},o})();hi(ol.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-bt,_prom:0,_ps:!1,_rts:1});var Wn=(function(o){Ig(e,o);function e(i,s){var a;return i===void 0&&(i={}),a=o.call(this,i)||this,a.labels={},a.smoothChildTiming=!!i.smoothChildTiming,a.autoRemoveChildren=!!i.autoRemoveChildren,a._sort=qn(i.sortChildren),Vt&&Yi(i.parent||Vt,pr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),i.scrollTrigger&&Zg(pr(a),i.scrollTrigger),a}var t=e.prototype;return t.to=function(s,a,c){return $a(0,arguments,this),this},t.from=function(s,a,c){return $a(1,arguments,this),this},t.fromTo=function(s,a,c,u){return $a(2,arguments,this),this},t.set=function(s,a,c){return a.duration=0,a.parent=this,qa(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new en(s,a,Si(this,c),1),this},t.call=function(s,a,c){return Yi(this,en.delayedCall(0,s,a),c)},t.staggerTo=function(s,a,c,u,h,d,p){return c.duration=a,c.stagger=c.stagger||u,c.onComplete=d,c.onCompleteParams=p,c.parent=this,new en(s,c,Si(this,h)),this},t.staggerFrom=function(s,a,c,u,h,d,p){return c.runBackwards=1,qa(c).immediateRender=qn(c.immediateRender),this.staggerTo(s,a,c,u,h,d,p)},t.staggerFromTo=function(s,a,c,u,h,d,p,g){return u.startAt=c,qa(u).immediateRender=qn(u.immediateRender),this.staggerTo(s,a,u,h,d,p,g)},t.render=function(s,a,c){var u=this._time,h=this._dirty?this.totalDuration():this._tDur,d=this._dur,p=s<=0?0:Ht(s),g=this._zTime<0!=s<0&&(this._initted||!d),_,S,E,M,v,x,A,T,L,O,I,N;if(this!==Vt&&p>h&&s>=0&&(p=h),p!==this._tTime||c||g){if(u!==this._time&&d&&(p+=this._time-u,s+=this._time-u),_=p,L=this._start,T=this._ts,x=!T,g&&(d||(u=this._zTime),(s||!a)&&(this._zTime=s)),this._repeat){if(I=this._yoyo,v=d+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(v*100+s,a,c);if(_=Ht(p%v),p===h?(M=this._repeat,_=d):(O=Ht(p/v),M=~~O,M&&M===O&&(_=d,M--),_>d&&(_=d)),O=Zo(this._tTime,v),!u&&this._tTime&&O!==M&&this._tTime-O*v-this._dur<=0&&(O=M),I&&M&1&&(_=d-_,N=1),M!==O&&!this._lock){var Y=I&&O&1,C=Y===(I&&M&1);if(M<O&&(Y=!Y),u=Y?0:p%d?d:p,this._lock=1,this.render(u||(N?0:Ht(M*v)),a,!d)._lock=0,this._tTime=p,!a&&this.parent&&ai(this,"onRepeat"),this.vars.repeatRefresh&&!N&&(this.invalidate()._lock=1,O=M),u&&u!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,h=this._tDur,C&&(this._lock=2,u=Y?d:-1e-4,this.render(u,!0),this.vars.repeatRefresh&&!N&&this.invalidate()),this._lock=0,!this._ts&&!x)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(A=Pw(this,Ht(u),Ht(_)),A&&(p-=_-(_=A._start))),this._tTime=p,this._time=_,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,u=0),!u&&p&&d&&!a&&!O&&(ai(this,"onStart"),this._tTime!==p))return this;if(_>=u&&s>=0)for(S=this._first;S;){if(E=S._next,(S._act||_>=S._start)&&S._ts&&A!==S){if(S.parent!==this)return this.render(s,a,c);if(S.render(S._ts>0?(_-S._start)*S._ts:(S._dirty?S.totalDuration():S._tDur)+(_-S._start)*S._ts,a,c),_!==this._time||!this._ts&&!x){A=0,E&&(p+=this._zTime=-bt);break}}S=E}else{S=this._last;for(var P=s<0?s:_;S;){if(E=S._prev,(S._act||P<=S._end)&&S._ts&&A!==S){if(S.parent!==this)return this.render(s,a,c);if(S.render(S._ts>0?(P-S._start)*S._ts:(S._dirty?S.totalDuration():S._tDur)+(P-S._start)*S._ts,a,c||vn&&Md(S)),_!==this._time||!this._ts&&!x){A=0,E&&(p+=this._zTime=P?-bt:bt);break}}S=E}}if(A&&!a&&(this.pause(),A.render(_>=u?0:-bt)._zTime=_>=u?1:-1,this._ts))return this._start=L,dc(this),this.render(s,a,c);this._onUpdate&&!a&&ai(this,"onUpdate",!0),(p===h&&this._tTime>=this.totalDuration()||!p&&u)&&(L===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((s||!d)&&(p===h&&this._ts>0||!p&&this._ts<0)&&os(this,1),!a&&!(s<0&&!u)&&(p||u||!h)&&(ai(this,p===h&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(p<h&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(s,a){var c=this;if(xr(a)||(a=Si(this,a,s)),!(s instanceof ol)){if(An(s))return s.forEach(function(u){return c.add(u,a)}),this;if(dn(s))return this.addLabel(s,a);if(Yt(s))s=en.delayedCall(0,s);else return this}return this!==s?Yi(this,s,a):this},t.getChildren=function(s,a,c,u){s===void 0&&(s=!0),a===void 0&&(a=!0),c===void 0&&(c=!0),u===void 0&&(u=-Ti);for(var h=[],d=this._first;d;)d._start>=u&&(d instanceof en?a&&h.push(d):(c&&h.push(d),s&&h.push.apply(h,d.getChildren(!0,a,c)))),d=d._next;return h},t.getById=function(s){for(var a=this.getChildren(1,1,1),c=a.length;c--;)if(a[c].vars.id===s)return a[c]},t.remove=function(s){return dn(s)?this.removeLabel(s):Yt(s)?this.killTweensOf(s):(s.parent===this&&hc(this,s),s===this._recent&&(this._recent=this._last),Vs(this))},t.totalTime=function(s,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ht(oi.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),o.prototype.totalTime.call(this,s,a),this._forcing=0,this):this._tTime},t.addLabel=function(s,a){return this.labels[s]=Si(this,a),this},t.removeLabel=function(s){return delete this.labels[s],this},t.addPause=function(s,a,c){var u=en.delayedCall(0,a||il,c);return u.data="isPause",this._hasPause=1,Yi(this,u,Si(this,s))},t.removePause=function(s){var a=this._first;for(s=Si(this,s);a;)a._start===s&&a.data==="isPause"&&os(a),a=a._next},t.killTweensOf=function(s,a,c){for(var u=this.getTweensOf(s,c),h=u.length;h--;)Zr!==u[h]&&u[h].kill(s,a);return this},t.getTweensOf=function(s,a){for(var c=[],u=Ci(s),h=this._first,d=xr(a),p;h;)h instanceof en?ww(h._targets,u)&&(d?(!Zr||h._initted&&h._ts)&&h.globalTime(0)<=a&&h.globalTime(h.totalDuration())>a:!a||h.isActive())&&c.push(h):(p=h.getTweensOf(u,a)).length&&c.push.apply(c,p),h=h._next;return c},t.tweenTo=function(s,a){a=a||{};var c=this,u=Si(c,s),h=a,d=h.startAt,p=h.onStart,g=h.onStartParams,_=h.immediateRender,S,E=en.to(c,hi({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:u,overwrite:"auto",duration:a.duration||Math.abs((u-(d&&"time"in d?d.time:c._time))/c.timeScale())||bt,onStart:function(){if(c.pause(),!S){var v=a.duration||Math.abs((u-(d&&"time"in d?d.time:c._time))/c.timeScale());E._dur!==v&&Ko(E,v,0,1).render(E._time,!0,!0),S=1}p&&p.apply(E,g||[])}},a));return _?E.render(0):E},t.tweenFromTo=function(s,a,c){return this.tweenTo(a,hi({startAt:{time:Si(this,s)}},c))},t.recent=function(){return this._recent},t.nextLabel=function(s){return s===void 0&&(s=this._time),z1(this,Si(this,s))},t.previousLabel=function(s){return s===void 0&&(s=this._time),z1(this,Si(this,s),1)},t.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+bt)},t.shiftChildren=function(s,a,c){c===void 0&&(c=0);var u=this._first,h=this.labels,d;for(s=Ht(s);u;)u._start>=c&&(u._start+=s,u._end+=s),u=u._next;if(a)for(d in h)h[d]>=c&&(h[d]+=s);return Vs(this)},t.invalidate=function(s){var a=this._first;for(this._lock=0;a;)a.invalidate(s),a=a._next;return o.prototype.invalidate.call(this,s)},t.clear=function(s){s===void 0&&(s=!0);for(var a=this._first,c;a;)c=a._next,this.remove(a),a=c;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),Vs(this)},t.totalDuration=function(s){var a=0,c=this,u=c._last,h=Ti,d,p,g;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-s:s));if(c._dirty){for(g=c.parent;u;)d=u._prev,u._dirty&&u.totalDuration(),p=u._start,p>h&&c._sort&&u._ts&&!c._lock?(c._lock=1,Yi(c,u,p-u._delay,1)._lock=0):h=p,p<0&&u._ts&&(a-=p,(!g&&!c._dp||g&&g.smoothChildTiming)&&(c._start+=Ht(p/c._ts),c._time-=p,c._tTime-=p),c.shiftChildren(-p,!1,-1/0),h=0),u._end>a&&u._ts&&(a=u._end),u=d;Ko(c,c===Vt&&c._time>a?c._time:a,1,1),c._dirty=0}return c._tDur},e.updateRoot=function(s){if(Vt._ts&&(jg(Vt,nc(s,Vt)),Gg=oi.frame),oi.frame>=I1){I1+=ci.autoSleep||120;var a=Vt._first;if((!a||!a._ts)&&ci.autoSleep&&oi._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||oi.sleep()}}},e})(ol);hi(Wn.prototype,{_lock:0,_hasPause:0,_forcing:0});var qw=function(e,t,i,s,a,c,u){var h=new Zn(this._pt,e,t,0,1,__,null,a),d=0,p=0,g,_,S,E,M,v,x,A;for(h.b=i,h.e=s,i+="",s+="",(x=~s.indexOf("random("))&&(s=rl(s)),c&&(A=[i,s],c(A,e,t),i=A[0],s=A[1]),_=i.match(Rh)||[];g=Rh.exec(s);)E=g[0],M=s.substring(d,g.index),S?S=(S+1)%5:M.substr(-5)==="rgba("&&(S=1),E!==_[p++]&&(v=parseFloat(_[p-1])||0,h._pt={_next:h._pt,p:M||p===1?M:",",s:v,c:E.charAt(1)==="="?Vo(v,E)-v:parseFloat(E)-v,m:S&&S<4?Math.round:0},d=Rh.lastIndex);return h.c=d<s.length?s.substring(d,s.length):"",h.fp=u,(zg.test(s)||x)&&(h.e=0),this._pt=h,h},Ed=function(e,t,i,s,a,c,u,h,d,p){Yt(s)&&(s=s(a||0,e,c));var g=e[t],_=i!=="get"?i:Yt(g)?d?e[t.indexOf("set")||!Yt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](d):e[t]():g,S=Yt(g)?d?Jw:m_:Td,E;if(dn(s)&&(~s.indexOf("random(")&&(s=rl(s)),s.charAt(1)==="="&&(E=Vo(_,s)+(Cn(_)||0),(E||E===0)&&(s=E))),!p||_!==s||Jh)return!isNaN(_*s)&&s!==""?(E=new Zn(this._pt,e,t,+_||0,s-(_||0),typeof g=="boolean"?tT:g_,0,S),d&&(E.fp=d),u&&E.modifier(u,this,e),this._pt=E):(!g&&!(t in e)&&vd(t,s),qw.call(this,e,t,_,s,S,h||ci.stringFilter,d))},$w=function(e,t,i,s,a){if(Yt(e)&&(e=Za(e,a,t,i,s)),!Zi(e)||e.style&&e.nodeType||An(e)||Fg(e))return dn(e)?Za(e,a,t,i,s):e;var c={},u;for(u in e)c[u]=Za(e[u],a,t,i,s);return c},h_=function(e,t,i,s,a,c){var u,h,d,p;if(si[e]&&(u=new si[e]).init(a,u.rawVars?t[e]:$w(t[e],s,a,c,i),i,s,c)!==!1&&(i._pt=h=new Zn(i._pt,a,e,0,1,u.render,u,0,u.priority),i!==zo))for(d=i._ptLookup[i._targets.indexOf(a)],p=u._props.length;p--;)d[u._props[p]]=h;return u},Zr,Jh,wd=function o(e,t,i){var s=e.vars,a=s.ease,c=s.startAt,u=s.immediateRender,h=s.lazy,d=s.onUpdate,p=s.runBackwards,g=s.yoyoEase,_=s.keyframes,S=s.autoRevert,E=e._dur,M=e._startAt,v=e._targets,x=e.parent,A=x&&x.data==="nested"?x.vars.targets:v,T=e._overwrite==="auto"&&!pd,L=e.timeline,O=s.easeReverse||g,I,N,Y,C,P,ne,le,fe,B,$,te,K,H;if(L&&(!_||!a)&&(a="none"),e._ease=Gs(a,tl.ease),e._rEase=O&&(Gs(O)||e._ease),e._from=!L&&!!s.runBackwards,e._from&&(e.ratio=1),!L||_&&!s.stagger){if(fe=v[0]?Hs(v[0]).harness:0,K=fe&&s[fe.prop],I=tc(s,xd),M&&(M._zTime<0&&M.progress(1),t<0&&p&&u&&!S?M.render(-1,!0):M.revert(p&&E?Wu:Mw),M._lazy=0),c){if(os(e._startAt=en.set(v,hi({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!M&&qn(h),startAt:null,delay:0,onUpdate:d&&function(){return ai(e,"onUpdate")},stagger:0},c))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(vn||!u&&!S)&&e._startAt.revert(Wu),u&&E&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(p&&E&&!M){if(t&&(u=!1),Y=hi({overwrite:!1,data:"isFromStart",lazy:u&&!M&&qn(h),immediateRender:u,stagger:0,parent:x},I),K&&(Y[fe.prop]=K),os(e._startAt=en.set(v,Y)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(vn?e._startAt.revert(Wu):e._startAt.render(-1,!0)),e._zTime=t,!u)o(e._startAt,bt,bt);else if(!t)return}for(e._pt=e._ptCache=0,h=E&&qn(h)||h&&!E,N=0;N<v.length;N++){if(P=v[N],le=P._gsap||Sd(v)[N]._gsap,e._ptLookup[N]=$={},Yh[le.id]&&ns.length&&ec(),te=A===v?N:A.indexOf(P),fe&&(B=new fe).init(P,K||I,e,te,A)!==!1&&(e._pt=C=new Zn(e._pt,P,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(j){$[j]=C}),B.priority&&(ne=1)),!fe||K)for(Y in I)si[Y]&&(B=h_(Y,I,e,te,P,A))?B.priority&&(ne=1):$[Y]=C=Ed.call(e,P,Y,"get",I[Y],te,A,0,s.stringFilter);e._op&&e._op[N]&&e.kill(P,e._op[N]),T&&e._pt&&(Zr=e,Vt.killTweensOf(P,$,e.globalTime(t)),H=!e.parent,Zr=0),e._pt&&h&&(Yh[le.id]=1)}ne&&v_(e),e._onInit&&e._onInit(e)}e._onUpdate=d,e._initted=(!e._op||e._pt)&&!H,_&&t<=0&&L.render(Ti,!0,!0)},Zw=function(e,t,i,s,a,c,u,h){var d=(e._pt&&e._ptCache||(e._ptCache={}))[t],p,g,_,S;if(!d)for(d=e._ptCache[t]=[],_=e._ptLookup,S=e._targets.length;S--;){if(p=_[S][t],p&&p.d&&p.d._pt)for(p=p.d._pt;p&&p.p!==t&&p.fp!==t;)p=p._next;if(!p)return Jh=1,e.vars[t]="+=0",wd(e,u),Jh=0,h?nl(t+" not eligible for reset. Try splitting into individual properties"):1;d.push(p)}for(S=d.length;S--;)g=d[S],p=g._pt||g,p.s=(s||s===0)&&!a?s:p.s+(s||0)+c*p.c,p.c=i-p.s,g.e&&(g.e=Zt(i)+Cn(g.e)),g.b&&(g.b=p.s+Cn(g.b))},Kw=function(e,t){var i=e[0]?Hs(e[0]).harness:0,s=i&&i.aliases,a,c,u,h;if(!s)return t;a=$o({},t);for(c in s)if(c in a)for(h=s[c].split(","),u=h.length;u--;)a[h[u]]=a[c];return a},Qw=function(e,t,i,s){var a=t.ease||s||"power1.inOut",c,u;if(An(t))u=i[e]||(i[e]=[]),t.forEach(function(h,d){return u.push({t:d/(t.length-1)*100,v:h,e:a})});else for(c in t)u=i[c]||(i[c]=[]),c==="ease"||u.push({t:parseFloat(e),v:t[c],e:a})},Za=function(e,t,i,s,a){return Yt(e)?e.call(t,i,s,a):dn(e)&&~e.indexOf("random(")?rl(e):e},d_=yd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",p_={};$n(d_+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return p_[o]=1});var en=(function(o){Ig(e,o);function e(i,s,a,c){var u;typeof s=="number"&&(a.duration=s,s=a,a=null),u=o.call(this,c?s:qa(s))||this;var h=u.vars,d=h.duration,p=h.delay,g=h.immediateRender,_=h.stagger,S=h.overwrite,E=h.keyframes,M=h.defaults,v=h.scrollTrigger,x=s.parent||Vt,A=(An(i)||Fg(i)?xr(i[0]):"length"in s)?[i]:Ci(i),T,L,O,I,N,Y,C,P;if(u._targets=A.length?Sd(A):nl("GSAP target "+i+" not found. https://gsap.com",!ci.nullTargetWarn)||[],u._ptLookup=[],u._overwrite=S,E||_||Vu(d)||Vu(p)){s=u.vars;var ne=s.easeReverse||s.yoyoEase;if(T=u.timeline=new Wn({data:"nested",defaults:M||{},targets:x&&x.data==="nested"?x.vars.targets:A}),T.kill(),T.parent=T._dp=pr(u),T._start=0,_||Vu(d)||Vu(p)){if(I=A.length,C=_&&e_(_),Zi(_))for(N in _)~d_.indexOf(N)&&(P||(P={}),P[N]=_[N]);for(L=0;L<I;L++)O=tc(s,p_),O.stagger=0,ne&&(O.easeReverse=ne),P&&$o(O,P),Y=A[L],O.duration=+Za(d,pr(u),L,Y,A),O.delay=(+Za(p,pr(u),L,Y,A)||0)-u._delay,!_&&I===1&&O.delay&&(u._delay=p=O.delay,u._start+=p,O.delay=0),T.to(Y,O,C?C(L,Y,A):0),T._ease=pt.none;T.duration()?d=p=0:u.timeline=0}else if(E){qa(hi(T.vars.defaults,{ease:"none"})),T._ease=Gs(E.ease||s.ease||"none");var le=0,fe,B,$;if(An(E))E.forEach(function(te){return T.to(A,te,">")}),T.duration();else{O={};for(N in E)N==="ease"||N==="easeEach"||Qw(N,E[N],O,E.easeEach);for(N in O)for(fe=O[N].sort(function(te,K){return te.t-K.t}),le=0,L=0;L<fe.length;L++)B=fe[L],$={ease:B.e,duration:(B.t-(L?fe[L-1].t:0))/100*d},$[N]=B.v,T.to(A,$,le),le+=$.duration;T.duration()<d&&T.to({},{duration:d-T.duration()})}}d||u.duration(d=T.duration())}else u.timeline=0;return S===!0&&!pd&&(Zr=pr(u),Vt.killTweensOf(A),Zr=0),Yi(x,pr(u),a),s.reversed&&u.reverse(),s.paused&&u.paused(!0),(g||!d&&!E&&u._start===Ht(x._time)&&qn(g)&&Rw(pr(u))&&x.data!=="nested")&&(u._tTime=-bt,u.render(Math.max(0,-p)||0)),v&&Zg(pr(u),v),u}var t=e.prototype;return t.render=function(s,a,c){var u=this._time,h=this._tDur,d=this._dur,p=s<0,g=s>h-bt&&!p?h:s<bt?0:s,_,S,E,M,v,x,A,T;if(!d)Lw(this,s,a,c);else if(g!==this._tTime||!s||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==p||this._lazy){if(_=g,T=this.timeline,this._repeat){if(M=d+this._rDelay,this._repeat<-1&&p)return this.totalTime(M*100+s,a,c);if(_=Ht(g%M),g===h?(E=this._repeat,_=d):(v=Ht(g/M),E=~~v,E&&E===v?(_=d,E--):_>d&&(_=d)),x=this._yoyo&&E&1,x&&(_=d-_),v=Zo(this._tTime,M),_===u&&!c&&this._initted&&E===v)return this._tTime=g,this;E!==v&&this.vars.repeatRefresh&&!x&&!this._lock&&_!==M&&this._initted&&(this._lock=c=1,this.render(Ht(M*E),!0).invalidate()._lock=0)}if(!this._initted){if(Kg(this,p?s:_,c,a,g))return this._tTime=0,this;if(u!==this._time&&!(c&&this.vars.repeatRefresh&&E!==v))return this;if(d!==this._dur)return this.render(s,a,c)}if(this._rEase){var L=_<u;if(L!==this._inv){var O=L?u:d-u;this._inv=L,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=u,this._invRecip=O?(L?-1:1)/O:0,this._invScale=L?-this.ratio:1-this.ratio,this._invEase=L?this._rEase:this._ease}this.ratio=A=this._invRatio+this._invScale*this._invEase((_-this._invTime)*this._invRecip)}else this.ratio=A=this._ease(_/d);if(this._from&&(this.ratio=A=1-A),this._tTime=g,this._time=_,!this._act&&this._ts&&(this._act=1,this._lazy=0),!u&&g&&!a&&!v&&(ai(this,"onStart"),this._tTime!==g))return this;for(S=this._pt;S;)S.r(A,S.d),S=S._next;T&&T.render(s<0?s:T._dur*T._ease(_/this._dur),a,c)||this._startAt&&(this._zTime=s),this._onUpdate&&!a&&(p&&qh(this,s,a,c),ai(this,"onUpdate")),this._repeat&&E!==v&&this.vars.onRepeat&&!a&&this.parent&&ai(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(p&&!this._onUpdate&&qh(this,s,!0,!0),(s||!d)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&os(this,1),!a&&!(p&&!u)&&(g||u||x)&&(ai(this,g===h?"onComplete":"onReverseComplete",!0),this._prom&&!(g<h&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),o.prototype.invalidate.call(this,s)},t.resetTo=function(s,a,c,u,h){sl||oi.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),p;return this._initted||wd(this,d),p=this._ease(d/this._dur),Zw(this,s,a,c,u,p,d,h)?this.resetTo(s,a,c,u,1):(pc(this,0),this.parent||qg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(s,a){if(a===void 0&&(a="all"),!s&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?Ga(this):this.scrollTrigger&&this.scrollTrigger.kill(!!vn),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(s,a,Zr&&Zr.vars.overwrite!==!0)._first||Ga(this),this.parent&&c!==this.timeline.totalDuration()&&Ko(this,this._dur*this.timeline._tDur/c,0,1),this}var u=this._targets,h=s?Ci(s):u,d=this._ptLookup,p=this._pt,g,_,S,E,M,v,x;if((!a||a==="all")&&Cw(u,h))return a==="all"&&(this._pt=0),Ga(this);for(g=this._op=this._op||[],a!=="all"&&(dn(a)&&(M={},$n(a,function(A){return M[A]=1}),a=M),a=Kw(u,a)),x=u.length;x--;)if(~h.indexOf(u[x])){_=d[x],a==="all"?(g[x]=a,E=_,S={}):(S=g[x]=g[x]||{},E=a);for(M in E)v=_&&_[M],v&&((!("kill"in v.d)||v.d.kill(M)===!0)&&hc(this,v,"_pt"),delete _[M]),S!=="all"&&(S[M]=1)}return this._initted&&!this._pt&&p&&Ga(this),this},e.to=function(s,a){return new e(s,a,arguments[2])},e.from=function(s,a){return $a(1,arguments)},e.delayedCall=function(s,a,c,u){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:a,onReverseComplete:a,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:u})},e.fromTo=function(s,a,c){return $a(2,arguments)},e.set=function(s,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(s,a)},e.killTweensOf=function(s,a,c){return Vt.killTweensOf(s,a,c)},e})(ol);hi(en.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});$n("staggerTo,staggerFrom,staggerFromTo",function(o){en[o]=function(){var e=new Wn,t=Zh.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var Td=function(e,t,i){return e[t]=i},m_=function(e,t,i){return e[t](i)},Jw=function(e,t,i,s){return e[t](s.fp,i)},eT=function(e,t,i){return e.setAttribute(t,i)},Cd=function(e,t){return Yt(e[t])?m_:md(e[t])&&e.setAttribute?eT:Td},g_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},tT=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},__=function(e,t){var i=t._pt,s="";if(!e&&t.b)s=t.b;else if(e===1&&t.e)s=t.e;else{for(;i;)s=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+s,i=i._next;s+=t.c}t.set(t.t,t.p,s,t)},Ad=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},nT=function(e,t,i,s){for(var a=this._pt,c;a;)c=a._next,a.p===s&&a.modifier(e,t,i),a=c},iT=function(e){for(var t=this._pt,i,s;t;)s=t._next,t.p===e&&!t.op||t.op===e?hc(this,t,"_pt"):t.dep||(i=1),t=s;return!i},rT=function(e,t,i,s){s.mSet(e,t,s.m.call(s.tween,i,s.mt),s)},v_=function(e){for(var t=e._pt,i,s,a,c;t;){for(i=t._next,s=a;s&&s.pr>t.pr;)s=s._next;(t._prev=s?s._prev:c)?t._prev._next=t:a=t,(t._next=s)?s._prev=t:c=t,t=i}e._pt=a},Zn=(function(){function o(t,i,s,a,c,u,h,d,p){this.t=i,this.s=a,this.c=c,this.p=s,this.r=u||g_,this.d=h||this,this.set=d||Td,this.pr=p||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(i,s,a){this.mSet=this.mSet||this.set,this.set=rT,this.m=i,this.mt=a,this.tween=s},o})();$n(yd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(o){return xd[o]=1});fi.TweenMax=fi.TweenLite=en;fi.TimelineLite=fi.TimelineMax=Wn;Vt=new Wn({sortChildren:!1,defaults:tl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ci.stringFilter=u_;var Ws=[],Xu={},sT=[],H1=0,oT=0,Dh=function(e){return(Xu[e]||sT).map(function(t){return t()})},ed=function(){var e=Date.now(),t=[];e-H1>2&&(Dh("matchMediaInit"),Ws.forEach(function(i){var s=i.queries,a=i.conditions,c,u,h,d;for(u in s)c=Wi.matchMedia(s[u]).matches,c&&(h=1),c!==a[u]&&(a[u]=c,d=1);d&&(i.revert(),h&&t.push(i))}),Dh("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(s){return i.add(null,s)})}),H1=e,Dh("matchMedia"))},x_=(function(){function o(t,i){this.selector=i&&Kh(i),this.data=[],this._r=[],this.isReverted=!1,this.id=oT++,t&&this.add(t)}var e=o.prototype;return e.add=function(i,s,a){Yt(i)&&(a=s,s=i,i=Yt);var c=this,u=function(){var d=kt,p=c.selector,g;return d&&d!==c&&d.data.push(c),a&&(c.selector=Kh(a)),kt=c,g=s.apply(c,arguments),Yt(g)&&c._r.push(g),kt=d,c.selector=p,c.isReverted=!1,g};return c.last=u,i===Yt?u(c,function(h){return c.add(null,h)}):i?c[i]=u:u},e.ignore=function(i){var s=kt;kt=null,i(this),kt=s},e.getTweens=function(){var i=[];return this.data.forEach(function(s){return s instanceof o?i.push.apply(i,s.getTweens()):s instanceof en&&!(s.parent&&s.parent.data==="nested")&&i.push(s)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,s){var a=this;if(i?(function(){for(var u=a.getTweens(),h=a.data.length,d;h--;)d=a.data[h],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(p){return u.splice(u.indexOf(p),1)}));for(u.map(function(p){return{g:p._dur||p._delay||p._sat&&!p._sat.vars.immediateRender?p.globalTime(0):-1/0,t:p}}).sort(function(p,g){return g.g-p.g||-1/0}).forEach(function(p){return p.t.revert(i)}),h=a.data.length;h--;)d=a.data[h],d instanceof Wn?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof en)&&d.revert&&d.revert(i);a._r.forEach(function(p){return p(i,a)}),a.isReverted=!0})():this.data.forEach(function(u){return u.kill&&u.kill()}),this.clear(),s)for(var c=Ws.length;c--;)Ws[c].id===this.id&&Ws.splice(c,1)},e.revert=function(i){this.kill(i||{})},o})(),aT=(function(){function o(t){this.contexts=[],this.scope=t,kt&&kt.data.push(this)}var e=o.prototype;return e.add=function(i,s,a){Zi(i)||(i={matches:i});var c=new x_(0,a||this.scope),u=c.conditions={},h,d,p;kt&&!c.selector&&(c.selector=kt.selector),this.contexts.push(c),s=c.add("onMatch",s),c.queries=i;for(d in i)d==="all"?p=1:(h=Wi.matchMedia(i[d]),h&&(Ws.indexOf(c)<0&&Ws.push(c),(u[d]=h.matches)&&(p=1),h.addListener?h.addListener(ed):h.addEventListener("change",ed)));return p&&s(c,function(g){return c.add(null,g)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(s){return s.kill(i,!0)})},o})(),ic={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(s){return o_(s)})},timeline:function(e){return new Wn(e)},getTweensOf:function(e,t){return Vt.getTweensOf(e,t)},getProperty:function(e,t,i,s){dn(e)&&(e=Ci(e)[0]);var a=Hs(e||{}).get,c=i?Yg:Xg;return i==="native"&&(i=""),e&&(t?c((si[t]&&si[t].get||a)(e,t,i,s)):function(u,h,d){return c((si[u]&&si[u].get||a)(e,u,h,d))})},quickSetter:function(e,t,i){if(e=Ci(e),e.length>1){var s=e.map(function(p){return Qn.quickSetter(p,t,i)}),a=s.length;return function(p){for(var g=a;g--;)s[g](p)}}e=e[0]||{};var c=si[t],u=Hs(e),h=u.harness&&(u.harness.aliases||{})[t]||t,d=c?function(p){var g=new c;zo._pt=0,g.init(e,i?p+i:p,zo,0,[e]),g.render(1,g),zo._pt&&Ad(1,zo)}:u.set(e,h);return c?d:function(p){return d(e,h,i?p+i:p,u,1)}},quickTo:function(e,t,i){var s,a=Qn.to(e,hi((s={},s[t]="+=0.1",s.paused=!0,s.stagger=0,s),i||{})),c=function(h,d,p){return a.resetTo(t,h,d,p)};return c.tween=a,c},isTweening:function(e){return Vt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Gs(e.ease,tl.ease)),O1(tl,e||{})},config:function(e){return O1(ci,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,s=e.plugins,a=e.defaults,c=e.extendTimeline;(s||"").split(",").forEach(function(u){return u&&!si[u]&&!fi[u]&&nl(t+" effect requires "+u+" plugin.")}),bh[t]=function(u,h,d){return i(Ci(u),hi(h||{},a),d)},c&&(Wn.prototype[t]=function(u,h,d){return this.add(bh[t](u,Zi(h)?h:(d=h)&&{},this),d)})},registerEase:function(e,t){pt[e]=Gs(t)},parseEase:function(e,t){return arguments.length?Gs(e,t):pt},getById:function(e){return Vt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Wn(e),s,a;for(i.smoothChildTiming=qn(e.smoothChildTiming),Vt.remove(i),i._dp=0,i._time=i._tTime=Vt._time,s=Vt._first;s;)a=s._next,(t||!(!s._dur&&s instanceof en&&s.vars.onComplete===s._targets[0]))&&Yi(i,s,s._start-s._delay),s=a;return Yi(Vt,i,0),i},context:function(e,t){return e?new x_(e,t):kt},matchMedia:function(e){return new aT(e)},matchMediaRefresh:function(){return Ws.forEach(function(e){var t=e.conditions,i,s;for(s in t)t[s]&&(t[s]=!1,i=1);i&&e.revert()})||ed()},addEventListener:function(e,t){var i=Xu[e]||(Xu[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Xu[e],s=i&&i.indexOf(t);s>=0&&i.splice(s,1)},utils:{wrap:kw,wrapYoyo:zw,distribute:e_,random:n_,snap:t_,normalize:Fw,getUnit:Cn,clamp:Dw,splitColor:a_,toArray:Ci,selector:Kh,mapRange:r_,pipe:Iw,unitize:Ow,interpolate:Bw,shuffle:Jg},install:Hg,effects:bh,ticker:oi,updateRoot:Wn.updateRoot,plugins:si,globalTimeline:Vt,core:{PropTween:Zn,globals:Vg,Tween:en,Timeline:Wn,Animation:ol,getCache:Hs,_removeLinkedListItem:hc,reverting:function(){return vn},context:function(e){return e&&kt&&(kt.data.push(e),e._ctx=kt),kt},suppressOverwrites:function(e){return pd=e}}};$n("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return ic[o]=en[o]});oi.add(Wn.updateRoot);zo=ic.to({},{duration:0});var lT=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},uT=function(e,t){var i=e._targets,s,a,c;for(s in t)for(a=i.length;a--;)c=e._ptLookup[a][s],c&&(c=c.d)&&(c._pt&&(c=lT(c,s)),c&&c.modifier&&c.modifier(t[s],e,i[a],s))},Uh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(s,a,c){c._onInit=function(u){var h,d;if(dn(a)&&(h={},$n(a,function(p){return h[p]=1}),a=h),t){h={};for(d in a)h[d]=t(a[d]);a=h}uT(u,a)}}}},Qn=ic.registerPlugin({name:"attr",init:function(e,t,i,s,a){var c,u,h;this.tween=i;for(c in t)h=e.getAttribute(c)||"",u=this.add(e,"setAttribute",(h||0)+"",t[c],s,a,0,0,c),u.op=c,u.b=h,this._props.push(c)},render:function(e,t){for(var i=t._pt;i;)vn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Uh("roundProps",Qh),Uh("modifiers"),Uh("snap",t_))||ic;en.version=Wn.version=Qn.version="3.15.0";Bg=1;gd()&&Qo();pt.Power0;pt.Power1;pt.Power2;pt.Power3;pt.Power4;pt.Linear;pt.Quad;pt.Cubic;pt.Quart;pt.Quint;pt.Strong;pt.Elastic;pt.Back;pt.SteppedEase;pt.Bounce;pt.Sine;pt.Expo;pt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var V1,Kr,Go,Rd,Os,G1,bd,cT=function(){return typeof window<"u"},yr={},Ds=180/Math.PI,Wo=Math.PI/180,Uo=Math.atan2,W1=1e8,Ld=/([A-Z])/g,fT=/(left|right|width|margin|padding|x)/i,hT=/[\s,\(]\S/,qi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},td=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},dT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},pT=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},mT=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},gT=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},y_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},S_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},_T=function(e,t,i){return e.style[t]=i},vT=function(e,t,i){return e.style.setProperty(t,i)},xT=function(e,t,i){return e._gsap[t]=i},yT=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},ST=function(e,t,i,s,a){var c=e._gsap;c.scaleX=c.scaleY=i,c.renderTransform(a,c)},MT=function(e,t,i,s,a){var c=e._gsap;c[t]=i,c.renderTransform(a,c)},Gt="transform",Kn=Gt+"Origin",ET=function o(e,t){var i=this,s=this.target,a=s.style,c=s._gsap;if(e in yr&&a){if(this.tfm=this.tfm||{},e!=="transform")e=qi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(u){return i.tfm[u]=mr(s,u)}):this.tfm[e]=c.x?c[e]:mr(s,e),e===Kn&&(this.tfm.zOrigin=c.zOrigin);else return qi.transform.split(",").forEach(function(u){return o.call(i,u,t)});if(this.props.indexOf(Gt)>=0)return;c.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(Kn,t,"")),e=Gt}(a||t)&&this.props.push(e,t,a[e])},M_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},wT=function(){var e=this.props,t=this.target,i=t.style,s=t._gsap,a,c;for(a=0;a<e.length;a+=3)e[a+1]?e[a+1]===2?t[e[a]](e[a+2]):t[e[a]]=e[a+2]:e[a+2]?i[e[a]]=e[a+2]:i.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(Ld,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)s[c]=this.tfm[c];s.svg&&(s.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),a=bd(),(!a||!a.isStart)&&!i[Gt]&&(M_(i),s.zOrigin&&i[Kn]&&(i[Kn]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},E_=function(e,t){var i={target:e,props:[],revert:wT,save:ET};return e._gsap||Qn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(s){return i.save(s)}),i},w_,nd=function(e,t){var i=Kr.createElementNS?Kr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Kr.createElement(e);return i&&i.style?i:Kr.createElement(e)},li=function o(e,t,i){var s=getComputedStyle(e);return s[t]||s.getPropertyValue(t.replace(Ld,"-$1").toLowerCase())||s.getPropertyValue(t)||!i&&o(e,Jo(t)||t,1)||""},j1="O,Moz,ms,Ms,Webkit".split(","),Jo=function(e,t,i){var s=t||Os,a=s.style,c=5;if(e in a&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);c--&&!(j1[c]+e in a););return c<0?null:(c===3?"ms":c>=0?j1[c]:"")+e},id=function(){cT()&&window.document&&(V1=window,Kr=V1.document,Go=Kr.documentElement,Os=nd("div")||{style:{}},nd("div"),Gt=Jo(Gt),Kn=Gt+"Origin",Os.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",w_=!!Jo("perspective"),bd=Qn.core.reverting,Rd=1)},X1=function(e){var t=e.ownerSVGElement,i=nd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=e.cloneNode(!0),a;s.style.display="block",i.appendChild(s),Go.appendChild(i);try{a=s.getBBox()}catch{}return i.removeChild(s),Go.removeChild(i),a},Y1=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},T_=function(e){var t,i;try{t=e.getBBox()}catch{t=X1(e),i=1}return t&&(t.width||t.height)||i||(t=X1(e)),t&&!t.width&&!t.x&&!t.y?{x:+Y1(e,["x","cx","x1"])||0,y:+Y1(e,["y","cy","y1"])||0,width:0,height:0}:t},C_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&T_(e))},as=function(e,t){if(t){var i=e.style,s;t in yr&&t!==Kn&&(t=Gt),i.removeProperty?(s=t.substr(0,2),(s==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(s==="--"?t:t.replace(Ld,"-$1").toLowerCase())):i.removeAttribute(t)}},Qr=function(e,t,i,s,a,c){var u=new Zn(e._pt,t,i,0,1,c?S_:y_);return e._pt=u,u.b=s,u.e=a,e._props.push(i),u},q1={deg:1,rad:1,turn:1},TT={grid:1,flex:1},ls=function o(e,t,i,s){var a=parseFloat(i)||0,c=(i+"").trim().substr((a+"").length)||"px",u=Os.style,h=fT.test(t),d=e.tagName.toLowerCase()==="svg",p=(d?"client":"offset")+(h?"Width":"Height"),g=100,_=s==="px",S=s==="%",E,M,v,x;if(s===c||!a||q1[s]||q1[c])return a;if(c!=="px"&&!_&&(a=o(e,t,i,"px")),x=e.getCTM&&C_(e),(S||c==="%")&&(yr[t]||~t.indexOf("adius")))return E=x?e.getBBox()[h?"width":"height"]:e[p],Zt(S?a/E*g:a/100*E);if(u[h?"width":"height"]=g+(_?c:s),M=s!=="rem"&&~t.indexOf("adius")||s==="em"&&e.appendChild&&!d?e:e.parentNode,x&&(M=(e.ownerSVGElement||{}).parentNode),(!M||M===Kr||!M.appendChild)&&(M=Kr.body),v=M._gsap,v&&S&&v.width&&h&&v.time===oi.time&&!v.uncache)return Zt(a/v.width*g);if(S&&(t==="height"||t==="width")){var A=e.style[t];e.style[t]=g+s,E=e[p],A?e.style[t]=A:as(e,t)}else(S||c==="%")&&!TT[li(M,"display")]&&(u.position=li(e,"position")),M===e&&(u.position="static"),M.appendChild(Os),E=Os[p],M.removeChild(Os),u.position="absolute";return h&&S&&(v=Hs(M),v.time=oi.time,v.width=M[p]),Zt(_?E*a/g:E&&a?g/E*a:0)},mr=function(e,t,i,s){var a;return Rd||id(),t in qi&&t!=="transform"&&(t=qi[t],~t.indexOf(",")&&(t=t.split(",")[0])),yr[t]&&t!=="transform"?(a=ll(e,s),a=t!=="transformOrigin"?a[t]:a.svg?a.origin:sc(li(e,Kn))+" "+a.zOrigin+"px"):(a=e.style[t],(!a||a==="auto"||s||~(a+"").indexOf("calc("))&&(a=rc[t]&&rc[t](e,t,i)||li(e,t)||Wg(e,t)||(t==="opacity"?1:0))),i&&!~(a+"").trim().indexOf(" ")?ls(e,t,a,i)+i:a},CT=function(e,t,i,s){if(!i||i==="none"){var a=Jo(t,e,1),c=a&&li(e,a,1);c&&c!==i?(t=a,i=c):t==="borderColor"&&(i=li(e,"borderTopColor"))}var u=new Zn(this._pt,e.style,t,0,1,__),h=0,d=0,p,g,_,S,E,M,v,x,A,T,L,O;if(u.b=i,u.e=s,i+="",s+="",s.substring(0,6)==="var(--"&&(s=li(e,s.substring(4,s.indexOf(")")))),s==="auto"&&(M=e.style[t],e.style[t]=s,s=li(e,t)||s,M?e.style[t]=M:as(e,t)),p=[i,s],u_(p),i=p[0],s=p[1],_=i.match(ko)||[],O=s.match(ko)||[],O.length){for(;g=ko.exec(s);)v=g[0],A=s.substring(h,g.index),E?E=(E+1)%5:(A.substr(-5)==="rgba("||A.substr(-5)==="hsla(")&&(E=1),v!==(M=_[d++]||"")&&(S=parseFloat(M)||0,L=M.substr((S+"").length),v.charAt(1)==="="&&(v=Vo(S,v)+L),x=parseFloat(v),T=v.substr((x+"").length),h=ko.lastIndex-T.length,T||(T=T||ci.units[t]||L,h===s.length&&(s+=T,u.e+=T)),L!==T&&(S=ls(e,t,M,T)||0),u._pt={_next:u._pt,p:A||d===1?A:",",s:S,c:x-S,m:E&&E<4||t==="zIndex"?Math.round:0});u.c=h<s.length?s.substring(h,s.length):""}else u.r=t==="display"&&s==="none"?S_:y_;return zg.test(s)&&(u.e=0),this._pt=u,u},$1={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},AT=function(e){var t=e.split(" "),i=t[0],s=t[1]||"50%";return(i==="top"||i==="bottom"||s==="left"||s==="right")&&(e=i,i=s,s=e),t[0]=$1[i]||i,t[1]=$1[s]||s,t.join(" ")},RT=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,s=i.style,a=t.u,c=i._gsap,u,h,d;if(a==="all"||a===!0)s.cssText="",h=1;else for(a=a.split(","),d=a.length;--d>-1;)u=a[d],yr[u]&&(h=1,u=u==="transformOrigin"?Kn:Gt),as(i,u);h&&(as(i,Gt),c&&(c.svg&&i.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",ll(i,1),c.uncache=1,M_(s)))}},rc={clearProps:function(e,t,i,s,a){if(a.data!=="isFromStart"){var c=e._pt=new Zn(e._pt,t,i,0,0,RT);return c.u=s,c.pr=-10,c.tween=a,e._props.push(i),1}}},al=[1,0,0,1,0,0],A_={},R_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Z1=function(e){var t=li(e,Gt);return R_(t)?al:t.substr(7).match(kg).map(Zt)},Pd=function(e,t){var i=e._gsap||Hs(e),s=e.style,a=Z1(e),c,u,h,d;return i.svg&&e.getAttribute("transform")?(h=e.transform.baseVal.consolidate().matrix,a=[h.a,h.b,h.c,h.d,h.e,h.f],a.join(",")==="1,0,0,1,0,0"?al:a):(a===al&&!e.offsetParent&&e!==Go&&!i.svg&&(h=s.display,s.display="block",c=e.parentNode,(!c||!e.offsetParent&&!e.getBoundingClientRect().width)&&(d=1,u=e.nextElementSibling,Go.appendChild(e)),a=Z1(e),h?s.display=h:as(e,"display"),d&&(u?c.insertBefore(e,u):c?c.appendChild(e):Go.removeChild(e))),t&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},rd=function(e,t,i,s,a,c){var u=e._gsap,h=a||Pd(e,!0),d=u.xOrigin||0,p=u.yOrigin||0,g=u.xOffset||0,_=u.yOffset||0,S=h[0],E=h[1],M=h[2],v=h[3],x=h[4],A=h[5],T=t.split(" "),L=parseFloat(T[0])||0,O=parseFloat(T[1])||0,I,N,Y,C;i?h!==al&&(N=S*v-E*M)&&(Y=L*(v/N)+O*(-M/N)+(M*A-v*x)/N,C=L*(-E/N)+O*(S/N)-(S*A-E*x)/N,L=Y,O=C):(I=T_(e),L=I.x+(~T[0].indexOf("%")?L/100*I.width:L),O=I.y+(~(T[1]||T[0]).indexOf("%")?O/100*I.height:O)),s||s!==!1&&u.smooth?(x=L-d,A=O-p,u.xOffset=g+(x*S+A*M)-x,u.yOffset=_+(x*E+A*v)-A):u.xOffset=u.yOffset=0,u.xOrigin=L,u.yOrigin=O,u.smooth=!!s,u.origin=t,u.originIsAbsolute=!!i,e.style[Kn]="0px 0px",c&&(Qr(c,u,"xOrigin",d,L),Qr(c,u,"yOrigin",p,O),Qr(c,u,"xOffset",g,u.xOffset),Qr(c,u,"yOffset",_,u.yOffset)),e.setAttribute("data-svg-origin",L+" "+O)},ll=function(e,t){var i=e._gsap||new f_(e);if("x"in i&&!t&&!i.uncache)return i;var s=e.style,a=i.scaleX<0,c="px",u="deg",h=getComputedStyle(e),d=li(e,Kn)||"0",p,g,_,S,E,M,v,x,A,T,L,O,I,N,Y,C,P,ne,le,fe,B,$,te,K,H,j,X,F,V,q,J,he;return p=g=_=M=v=x=A=T=L=0,S=E=1,i.svg=!!(e.getCTM&&C_(e)),h.translate&&((h.translate!=="none"||h.scale!=="none"||h.rotate!=="none")&&(s[Gt]=(h.translate!=="none"?"translate3d("+(h.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(h.rotate!=="none"?"rotate("+h.rotate+") ":"")+(h.scale!=="none"?"scale("+h.scale.split(" ").join(",")+") ":"")+(h[Gt]!=="none"?h[Gt]:"")),s.scale=s.rotate=s.translate="none"),N=Pd(e,i.svg),i.svg&&(i.uncache?(H=e.getBBox(),d=i.xOrigin-H.x+"px "+(i.yOrigin-H.y)+"px",K=""):K=!t&&e.getAttribute("data-svg-origin"),rd(e,K||d,!!K||i.originIsAbsolute,i.smooth!==!1,N)),O=i.xOrigin||0,I=i.yOrigin||0,N!==al&&(ne=N[0],le=N[1],fe=N[2],B=N[3],p=$=N[4],g=te=N[5],N.length===6?(S=Math.sqrt(ne*ne+le*le),E=Math.sqrt(B*B+fe*fe),M=ne||le?Uo(le,ne)*Ds:0,A=fe||B?Uo(fe,B)*Ds+M:0,A&&(E*=Math.abs(Math.cos(A*Wo))),i.svg&&(p-=O-(O*ne+I*fe),g-=I-(O*le+I*B))):(he=N[6],q=N[7],X=N[8],F=N[9],V=N[10],J=N[11],p=N[12],g=N[13],_=N[14],Y=Uo(he,V),v=Y*Ds,Y&&(C=Math.cos(-Y),P=Math.sin(-Y),K=$*C+X*P,H=te*C+F*P,j=he*C+V*P,X=$*-P+X*C,F=te*-P+F*C,V=he*-P+V*C,J=q*-P+J*C,$=K,te=H,he=j),Y=Uo(-fe,V),x=Y*Ds,Y&&(C=Math.cos(-Y),P=Math.sin(-Y),K=ne*C-X*P,H=le*C-F*P,j=fe*C-V*P,J=B*P+J*C,ne=K,le=H,fe=j),Y=Uo(le,ne),M=Y*Ds,Y&&(C=Math.cos(Y),P=Math.sin(Y),K=ne*C+le*P,H=$*C+te*P,le=le*C-ne*P,te=te*C-$*P,ne=K,$=H),v&&Math.abs(v)+Math.abs(M)>359.9&&(v=M=0,x=180-x),S=Zt(Math.sqrt(ne*ne+le*le+fe*fe)),E=Zt(Math.sqrt(te*te+he*he)),Y=Uo($,te),A=Math.abs(Y)>2e-4?Y*Ds:0,L=J?1/(J<0?-J:J):0),i.svg&&(K=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!R_(li(e,Gt)),K&&e.setAttribute("transform",K))),Math.abs(A)>90&&Math.abs(A)<270&&(a?(S*=-1,A+=M<=0?180:-180,M+=M<=0?180:-180):(E*=-1,A+=A<=0?180:-180)),t=t||i.uncache,i.x=p-((i.xPercent=p&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-p)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+c,i.y=g-((i.yPercent=g&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-g)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+c,i.z=_+c,i.scaleX=Zt(S),i.scaleY=Zt(E),i.rotation=Zt(M)+u,i.rotationX=Zt(v)+u,i.rotationY=Zt(x)+u,i.skewX=A+u,i.skewY=T+u,i.transformPerspective=L+c,(i.zOrigin=parseFloat(d.split(" ")[2])||!t&&i.zOrigin||0)&&(s[Kn]=sc(d)),i.xOffset=i.yOffset=0,i.force3D=ci.force3D,i.renderTransform=i.svg?LT:w_?b_:bT,i.uncache=0,i},sc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ih=function(e,t,i){var s=Cn(t);return Zt(parseFloat(t)+parseFloat(ls(e,"x",i+"px",s)))+s},bT=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,b_(e,t)},bs="0deg",Ha="0px",Ls=") ",b_=function(e,t){var i=t||this,s=i.xPercent,a=i.yPercent,c=i.x,u=i.y,h=i.z,d=i.rotation,p=i.rotationY,g=i.rotationX,_=i.skewX,S=i.skewY,E=i.scaleX,M=i.scaleY,v=i.transformPerspective,x=i.force3D,A=i.target,T=i.zOrigin,L="",O=x==="auto"&&e&&e!==1||x===!0;if(T&&(g!==bs||p!==bs)){var I=parseFloat(p)*Wo,N=Math.sin(I),Y=Math.cos(I),C;I=parseFloat(g)*Wo,C=Math.cos(I),c=Ih(A,c,N*C*-T),u=Ih(A,u,-Math.sin(I)*-T),h=Ih(A,h,Y*C*-T+T)}v!==Ha&&(L+="perspective("+v+Ls),(s||a)&&(L+="translate("+s+"%, "+a+"%) "),(O||c!==Ha||u!==Ha||h!==Ha)&&(L+=h!==Ha||O?"translate3d("+c+", "+u+", "+h+") ":"translate("+c+", "+u+Ls),d!==bs&&(L+="rotate("+d+Ls),p!==bs&&(L+="rotateY("+p+Ls),g!==bs&&(L+="rotateX("+g+Ls),(_!==bs||S!==bs)&&(L+="skew("+_+", "+S+Ls),(E!==1||M!==1)&&(L+="scale("+E+", "+M+Ls),A.style[Gt]=L||"translate(0, 0)"},LT=function(e,t){var i=t||this,s=i.xPercent,a=i.yPercent,c=i.x,u=i.y,h=i.rotation,d=i.skewX,p=i.skewY,g=i.scaleX,_=i.scaleY,S=i.target,E=i.xOrigin,M=i.yOrigin,v=i.xOffset,x=i.yOffset,A=i.forceCSS,T=parseFloat(c),L=parseFloat(u),O,I,N,Y,C;h=parseFloat(h),d=parseFloat(d),p=parseFloat(p),p&&(p=parseFloat(p),d+=p,h+=p),h||d?(h*=Wo,d*=Wo,O=Math.cos(h)*g,I=Math.sin(h)*g,N=Math.sin(h-d)*-_,Y=Math.cos(h-d)*_,d&&(p*=Wo,C=Math.tan(d-p),C=Math.sqrt(1+C*C),N*=C,Y*=C,p&&(C=Math.tan(p),C=Math.sqrt(1+C*C),O*=C,I*=C)),O=Zt(O),I=Zt(I),N=Zt(N),Y=Zt(Y)):(O=g,Y=_,I=N=0),(T&&!~(c+"").indexOf("px")||L&&!~(u+"").indexOf("px"))&&(T=ls(S,"x",c,"px"),L=ls(S,"y",u,"px")),(E||M||v||x)&&(T=Zt(T+E-(E*O+M*N)+v),L=Zt(L+M-(E*I+M*Y)+x)),(s||a)&&(C=S.getBBox(),T=Zt(T+s/100*C.width),L=Zt(L+a/100*C.height)),C="matrix("+O+","+I+","+N+","+Y+","+T+","+L+")",S.setAttribute("transform",C),A&&(S.style[Gt]=C)},PT=function(e,t,i,s,a){var c=360,u=dn(a),h=parseFloat(a)*(u&&~a.indexOf("rad")?Ds:1),d=h-s,p=s+d+"deg",g,_;return u&&(g=a.split("_")[1],g==="short"&&(d%=c,d!==d%(c/2)&&(d+=d<0?c:-c)),g==="cw"&&d<0?d=(d+c*W1)%c-~~(d/c)*c:g==="ccw"&&d>0&&(d=(d-c*W1)%c-~~(d/c)*c)),e._pt=_=new Zn(e._pt,t,i,s,d,dT),_.e=p,_.u="deg",e._props.push(i),_},K1=function(e,t){for(var i in t)e[i]=t[i];return e},NT=function(e,t,i){var s=K1({},i._gsap),a="perspective,force3D,transformOrigin,svgOrigin",c=i.style,u,h,d,p,g,_,S,E;s.svg?(d=i.getAttribute("transform"),i.setAttribute("transform",""),c[Gt]=t,u=ll(i,1),as(i,Gt),i.setAttribute("transform",d)):(d=getComputedStyle(i)[Gt],c[Gt]=t,u=ll(i,1),c[Gt]=d);for(h in yr)d=s[h],p=u[h],d!==p&&a.indexOf(h)<0&&(S=Cn(d),E=Cn(p),g=S!==E?ls(i,h,d,E):parseFloat(d),_=parseFloat(p),e._pt=new Zn(e._pt,u,h,g,_-g,td),e._pt.u=E||0,e._props.push(h));K1(u,s)};$n("padding,margin,Width,Radius",function(o,e){var t="Top",i="Right",s="Bottom",a="Left",c=(e<3?[t,i,s,a]:[t+a,t+i,s+i,s+a]).map(function(u){return e<2?o+u:"border"+u+o});rc[e>1?"border"+o:o]=function(u,h,d,p,g){var _,S;if(arguments.length<4)return _=c.map(function(E){return mr(u,E,d)}),S=_.join(" "),S.split(_[0]).length===5?_[0]:S;_=(p+"").split(" "),S={},c.forEach(function(E,M){return S[E]=_[M]=_[M]||_[(M-1)/2|0]}),u.init(h,S,g)}});var L_={name:"css",register:id,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,s,a){var c=this._props,u=e.style,h=i.vars.startAt,d,p,g,_,S,E,M,v,x,A,T,L,O,I,N,Y,C;Rd||id(),this.styles=this.styles||E_(e),Y=this.styles.props,this.tween=i;for(M in t)if(M!=="autoRound"&&(p=t[M],!(si[M]&&h_(M,t,i,s,e,a)))){if(S=typeof p,E=rc[M],S==="function"&&(p=p.call(i,s,e,a),S=typeof p),S==="string"&&~p.indexOf("random(")&&(p=rl(p)),E)E(this,e,M,p,i)&&(N=1);else if(M.substr(0,2)==="--")d=(getComputedStyle(e).getPropertyValue(M)+"").trim(),p+="",is.lastIndex=0,is.test(d)||(v=Cn(d),x=Cn(p),x?v!==x&&(d=ls(e,M,d,x)+x):v&&(p+=v)),this.add(u,"setProperty",d,p,s,a,0,0,M),c.push(M),Y.push(M,0,u[M]);else if(S!=="undefined"){if(h&&M in h?(d=typeof h[M]=="function"?h[M].call(i,s,e,a):h[M],dn(d)&&~d.indexOf("random(")&&(d=rl(d)),Cn(d+"")||d==="auto"||(d+=ci.units[M]||Cn(mr(e,M))||""),(d+"").charAt(1)==="="&&(d=mr(e,M))):d=mr(e,M),_=parseFloat(d),A=S==="string"&&p.charAt(1)==="="&&p.substr(0,2),A&&(p=p.substr(2)),g=parseFloat(p),M in qi&&(M==="autoAlpha"&&(_===1&&mr(e,"visibility")==="hidden"&&g&&(_=0),Y.push("visibility",0,u.visibility),Qr(this,u,"visibility",_?"inherit":"hidden",g?"inherit":"hidden",!g)),M!=="scale"&&M!=="transform"&&(M=qi[M],~M.indexOf(",")&&(M=M.split(",")[0]))),T=M in yr,T){if(this.styles.save(M),C=p,S==="string"&&p.substring(0,6)==="var(--"){if(p=li(e,p.substring(4,p.indexOf(")"))),p.substring(0,5)==="calc("){var P=e.style.perspective;e.style.perspective=p,p=li(e,"perspective"),P?e.style.perspective=P:as(e,"perspective")}g=parseFloat(p)}if(L||(O=e._gsap,O.renderTransform&&!t.parseTransform||ll(e,t.parseTransform),I=t.smoothOrigin!==!1&&O.smooth,L=this._pt=new Zn(this._pt,u,Gt,0,1,O.renderTransform,O,0,-1),L.dep=1),M==="scale")this._pt=new Zn(this._pt,O,"scaleY",O.scaleY,(A?Vo(O.scaleY,A+g):g)-O.scaleY||0,td),this._pt.u=0,c.push("scaleY",M),M+="X";else if(M==="transformOrigin"){Y.push(Kn,0,u[Kn]),p=AT(p),O.svg?rd(e,p,0,I,0,this):(x=parseFloat(p.split(" ")[2])||0,x!==O.zOrigin&&Qr(this,O,"zOrigin",O.zOrigin,x),Qr(this,u,M,sc(d),sc(p)));continue}else if(M==="svgOrigin"){rd(e,p,1,I,0,this);continue}else if(M in A_){PT(this,O,M,_,A?Vo(_,A+p):p);continue}else if(M==="smoothOrigin"){Qr(this,O,"smooth",O.smooth,p);continue}else if(M==="force3D"){O[M]=p;continue}else if(M==="transform"){NT(this,p,e);continue}}else M in u||(M=Jo(M)||M);if(T||(g||g===0)&&(_||_===0)&&!hT.test(p)&&M in u)v=(d+"").substr((_+"").length),g||(g=0),x=Cn(p)||(M in ci.units?ci.units[M]:v),v!==x&&(_=ls(e,M,d,x)),this._pt=new Zn(this._pt,T?O:u,M,_,(A?Vo(_,A+g):g)-_,!T&&(x==="px"||M==="zIndex")&&t.autoRound!==!1?gT:td),this._pt.u=x||0,T&&C!==p?(this._pt.b=d,this._pt.e=C,this._pt.r=mT):v!==x&&x!=="%"&&(this._pt.b=d,this._pt.r=pT);else if(M in u)CT.call(this,e,M,d,A?A+p:p);else if(M in e)this.add(e,M,d||e[M],A?A+p:p,s,a);else if(M!=="parseTransform"){vd(M,p);continue}T||(M in u?Y.push(M,0,u[M]):typeof e[M]=="function"?Y.push(M,2,e[M]()):Y.push(M,1,d||e[M])),c.push(M)}}N&&v_(this)},render:function(e,t){if(t.tween._time||!bd())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:mr,aliases:qi,getSetter:function(e,t,i){var s=qi[t];return s&&s.indexOf(",")<0&&(t=s),t in yr&&t!==Kn&&(e._gsap.x||mr(e,"x"))?i&&G1===i?t==="scale"?yT:xT:(G1=i||{})&&(t==="scale"?ST:MT):e.style&&!md(e.style[t])?_T:~t.indexOf("-")?vT:Cd(e,t)},core:{_removeProperty:as,_getMatrix:Pd}};Qn.utils.checkPrefix=Jo;Qn.core.getStyleSaver=E_;(function(o,e,t,i){var s=$n(o+","+e+","+t,function(a){yr[a]=1});$n(e,function(a){ci.units[a]="deg",A_[a]=1}),qi[s[13]]=o+","+e,$n(i,function(a){var c=a.split(":");qi[c[1]]=s[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");$n("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){ci.units[o]="px"});Qn.registerPlugin(L_);var P_=Qn.registerPlugin(L_)||Qn;P_.core.Tween;const N_=[{id:60,name:"Web development",slug:"web-development",image:"/textures/website-service-cover.jpg",imageAlt:"website service cover"},{id:63,name:"eCommerce",slug:"ecommerce",image:"/textures/ecommerce-service-cover.jpg",imageAlt:"ecommerce service cover"},{id:61,name:"Application development",slug:"applications",image:"/textures/application-service-cover-1024x1024.jpg",imageAlt:"Application service cover"},{id:64,name:"Artificial intelligence",slug:"artificial-intelligence",image:"/textures/ai-service-cover-1024x1024.jpg",imageAlt:"ai service cover"},{id:62,name:"Blockchain",slug:"blockchain",image:"/textures/blockchain-service-cover-1024x1024.jpg",imageAlt:"blockchain service cover"}],DT=`
uniform float uBend;
uniform vec2 uSize;
varying vec2 vUv;

void main() {
  vUv = uv;
  vec3 p = position;
  float halfW = uSize.x * 0.5;
  float distX = clamp(abs(p.x) / halfW, 0.0, 1.0); 
  p.z -= uBend * distX * distX;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
`,UT=`
precision highp float;

uniform sampler2D uMap;
uniform float uHasMap;
uniform vec3 uColor;
uniform vec2 uSize;        
uniform float uRadius;     
uniform float uOpacity;
uniform float uImageAspect; 
varying vec2 vUv;

vec3 linearToSRGB(vec3 c) {
  return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
}

float sdRoundedBox(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + vec2(r);
  return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;
}

vec2 coverUv(vec2 uv, float imgAspect, float planeAspect) {
  vec2 scale = vec2(1.0);
  if (imgAspect > planeAspect) {
    scale.x = planeAspect / imgAspect;
  } else {
    scale.y = imgAspect / planeAspect;
  }
  return (uv - 0.5) * scale + 0.5;
}

void main() {
  vec2 uv = coverUv(vUv, uImageAspect, uSize.x / uSize.y);
  vec3 col = uHasMap > 0.5 ? texture2D(uMap, uv).rgb : uColor;
  vec2 p = (vUv - 0.5) * uSize;
  float d = sdRoundedBox(p, uSize * 0.5, uRadius);
  float aa = fwidth(d);
  float maskAlpha = 1.0 - smoothstep(-aa, aa, d);
  float alpha = maskAlpha * uOpacity;
  if (alpha <= 0.001) discard;
  gl_FragColor = vec4(linearToSRGB(col), alpha);
}
`,IT=({activeSlug:o,onActiveChange:e})=>{const t=jn.useRef(null),i=jn.useRef({rotation:0,targetRotation:0,spinVelocity:-.003,autoRotateSpeed:-.003,dragInfluence:.005,isDragging:!1,lastPointerX:0,pointerDownX:0,lastPointerTime:0,planes:[],carousel:null,isAnimatingScroll:!1,resumeTimer:null});return jn.useEffect(()=>{const s=t.current;if(!s)return;const a=s.clientWidth||window.innerWidth,c=s.clientHeight||720,u=new uw,h=new Ei(24,a/c,.1,100);h.position.set(0,0,8.6);const d=new Ug({antialias:!0,alpha:!0});d.setSize(a,c),d.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.outputColorSpace=sn,s.appendChild(d.domElement);const p=new Va;u.add(p),i.current.carousel=p;const g=4.3,S=q0.degToRad(-13);p.rotation.x=S,p.position.y=g*Math.sin(S);const E=new dw;E.crossOrigin="anonymous";const M=3,v=[];for(let K=0;K<M;K++)N_.forEach(H=>v.push(H));const x=v.length,A=1.6,T=1.6,L=.08,O=.12;v.forEach((K,H)=>{const j=H/x*Math.PI*2,X=new cc(A,T,24,1),F={uMap:{value:null},uHasMap:{value:0},uColor:{value:new wt(15658734)},uSize:{value:new Tt(A,T)},uRadius:{value:L},uBend:{value:O},uOpacity:{value:1},uImageAspect:{value:1}},V=new ss({vertexShader:DT,fragmentShader:UT,uniforms:F,transparent:!0,side:Xi});K.image&&E.load(K.image,J=>{J.colorSpace=sn,V.uniforms.uMap.value=J,V.uniforms.uHasMap.value=1,J.image&&J.image.width&&J.image.height&&(V.uniforms.uImageAspect.value=J.image.width/J.image.height),V.needsUpdate=!0});const q=new _r(X,V);q.position.set(Math.sin(j)*g,0,Math.cos(j)*g),q.rotation.y=j,q.userData={baseAngle:j,service:K,material:V},p.add(q),i.current.planes.push(q)});const I=.35,N=6,Y=K=>{i.current.isDragging=!0,i.current.lastPointerX=K.clientX,i.current.pointerDownX=K.clientX,i.current.lastPointerTime=performance.now(),i.current.spinVelocity=0,i.current.resumeTimer&&(clearTimeout(i.current.resumeTimer),i.current.resumeTimer=null)},C=K=>{if(!i.current.isDragging)return;const H=K.clientX-i.current.lastPointerX;i.current.lastPointerX=K.clientX;const j=i.current.dragInfluence;i.current.rotation+=H*j,i.current.targetRotation=i.current.rotation;const X=performance.now(),F=Math.max(X-i.current.lastPointerTime,1)/1e3;i.current.lastPointerTime=X;const V=H*j/F;i.current.spinVelocity=i.current.spinVelocity*(1-I)+V*I},P=()=>{i.current.isDragging&&(i.current.isDragging=!1,i.current.spinVelocity=q0.clamp(i.current.spinVelocity,-N,N),i.current.resumeTimer=setTimeout(()=>{i.current.resumeTimer=null},1500))},ne=d.domElement;ne.addEventListener("pointerdown",Y),window.addEventListener("pointermove",C),window.addEventListener("pointerup",P);let le,fe=performance.now();const B=Math.cos(Math.PI/3),$=()=>{le=requestAnimationFrame($);const K=performance.now(),H=Math.min((K-fe)/1e3,.1);fe=K;const j=i.current;if(!j.isDragging&&!j.isAnimatingScroll)if(j.resumeTimer)j.spinVelocity*=.95,j.rotation+=j.spinVelocity*(H*60);else{const V=j.autoRotateSpeed;j.spinVelocity+=(V-j.spinVelocity)*(H*1.5),j.rotation+=j.spinVelocity*(H*60)}p.rotation.y=j.rotation;let X=-1/0,F="";j.planes.forEach(V=>{const q=V.userData.baseAngle+j.rotation,J=Math.cos(q);J>X&&(X=J,F=V.userData.service.slug);let he;if(J>=B)he=1;else{const Se=(J+1)/(B+1);he=Math.max(0,Se)}V.userData.material.uniforms.uOpacity.value=he}),!j.isAnimatingScroll&&F&&F!==o&&e(F),d.render(u,h)};$();const te=()=>{if(!s)return;const K=s.clientWidth||window.innerWidth,H=s.clientHeight||720;h.aspect=K/H,h.updateProjectionMatrix(),d.setSize(K,H)};return window.addEventListener("resize",te),()=>{cancelAnimationFrame(le),ne.removeEventListener("pointerdown",Y),window.removeEventListener("pointermove",C),window.removeEventListener("pointerup",P),window.removeEventListener("resize",te),d.dispose(),ne.parentNode&&ne.parentNode.removeChild(ne)}},[]),jn.useEffect(()=>{if(!i.current.carousel||i.current.isDragging)return;const s=i.current.planes.filter(d=>d.userData.service.slug===o);if(!s.length)return;let a=s[0],c=1/0;const u=Math.PI*2;s.forEach(d=>{let p=-d.userData.baseAngle;for(;p-i.current.rotation>Math.PI;)p-=u;for(;p-i.current.rotation<-Math.PI;)p+=u;const g=Math.abs(p-i.current.rotation);g<c&&(c=g,a=d)});let h=-a.userData.baseAngle;for(;h-i.current.rotation>Math.PI;)h-=u;for(;h-i.current.rotation<-Math.PI;)h+=u;i.current.isAnimatingScroll=!0,P_.to(i.current,{rotation:h,duration:1.2,ease:"power2.inOut",onComplete:()=>{i.current.isAnimatingScroll=!1}})},[o]),R.jsx("div",{ref:t,className:"w-full h-[540px] sm:h-[640px] md:h-[720px] relative cursor-grab active:cursor-grabbing select-none"})},OT={"web-development":R.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 60 60",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:R.jsx("path",{d:"M49.44 19.57V17.95H46.47V14.97H43.49V12H17.77V14.97H14.8V17.95H11.82V20.92H7.5V37.83H10.49V42.03H13.47V45.02H16.46V48H42.32V45.02H45.31V42.03H48.3V37.83H52.5V22.26H49.52V19.57H49.44ZM37.26 34.59H31.58V31.62H37.26V34.59ZM22.65 34.58H28.34V31.61H22.65V34.58ZM28.32 25.53V28.37H22.65V25.53H28.32ZM37.26 28.37H31.58V25.53H37.26V28.37Z",fill:"currentColor"})}),ecommerce:R.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 60 60",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:R.jsx("path",{d:"M49.5 22.5V19.5H46.5V16.5H43.5V13.5H16.5V16.5H13.5V19.5H10.5V22.5H7.5V46.5H52.5V22.5H49.5ZM24 21H36V24H24V21ZM45 42H15V27H45V42Z",fill:"currentColor"})}),applications:R.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 60 60",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:R.jsx("path",{d:"M48 12H12V48H48V12ZM43.5 43.5H16.5V19.5H43.5V43.5Z",fill:"currentColor"})}),"artificial-intelligence":R.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 60 60",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:R.jsx("path",{d:"M30 6L33 21L48 24L33 27L30 42L27 27L12 24L27 21L30 6Z",fill:"currentColor"})}),blockchain:R.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 60 60",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:R.jsx("path",{d:"M30 10L42 17V31L30 38L18 31V17L30 10ZM30 20L24 23.5V30.5L30 34L36 30.5V23.5L30 20Z",fill:"currentColor"})})},FT=()=>{const[o,e]=jn.useState("blockchain");return R.jsxs("section",{className:"relative pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-[#fdf9f9]",children:[R.jsx("div",{className:"w-full relative",children:R.jsx(IT,{activeSlug:o,onActiveChange:t=>e(t)})}),R.jsx("div",{className:"max-w-6xl mx-auto px-4 mt-6",children:R.jsx("ul",{className:"flex flex-wrap items-center justify-center gap-x-7 sm:gap-x-10 gap-y-3",children:N_.map(t=>{const i=t.slug===o;return R.jsx("li",{children:R.jsxs("button",{type:"button",onClick:()=>e(t.slug),className:`inline-flex items-center gap-2 text-xs sm:text-sm font-medium transition-colors ${i?"text-[#ff4f31]":"text-[#555555] hover:text-[#111111]"}`,children:[R.jsx("span",{className:`inline-block transition-transform duration-300 ${i?"scale-110":""}`,children:OT[t.slug]}),R.jsx("span",{children:t.name})]})},t.slug)})})})]})};function kT(){return R.jsx("section",{className:"simple-text py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto",children:R.jsx("div",{className:"simple-text__body max-w-4xl",children:R.jsxs("div",{className:"simple-text__content",children:[R.jsx("h2",{className:"text-[clamp(2.5rem,5vw,4.5rem)] font-serif font-normal leading-[1.1] tracking-tight mb-8 text-[#111111]",children:"Development partner"}),R.jsx("p",{className:"text-[clamp(1.15rem,2vw,1.4rem)] leading-[1.6] text-[#333333] max-w-2xl font-normal",children:"We craft innovative, digital solutions for your business that will help you communicate with your clients through the digital world."})]})})})}const zT=[{title:"De Druglijn",subtitle:"Web development",description:"De Druglijn helps with all your questions about alcohol, drugs, pills, gaming and gambling. Anonymously, objectively and without judging or…",image:"/textures/Druglijnbrochures-1024x1024.webp",link:"https://weichie.com/case/druglijn/"},{title:"Adaptive Green",subtitle:"Web development",description:"Leaders in Green Infrastructure, Carbon Negative Designs & Climate Positive Solutions.",image:"/textures/adaptivegreen-1-750x1024.webp",link:"https://weichie.com/case/adaptive-green/"},{title:"Spantech",subtitle:"Web development",description:"Spantech is one of the fastest growing manufacturers of modular structures in Europe. Developping modular solutions for various industries. Contributing…",image:"/textures/spantech-cover-2-1024x904.webp",link:"https://weichie.com/case/spantech/"}];function BT(){return R.jsxs("section",{className:"latest-work py-20 px-6 md:px-12 max-w-[1440px] mx-auto",children:[R.jsx("h2",{className:"text-[clamp(2.5rem,5.5vw,4.5rem)] font-serif font-normal leading-[1.1] tracking-tight mb-16 text-[#111111]",children:"Some of our latest work"}),R.jsxs("div",{className:"latest-work__inner",children:[R.jsxs("div",{className:"callout mb-12 flex items-center gap-3 text-xs md:text-sm font-mono tracking-wider uppercase text-[#111111]",children:[R.jsx("span",{className:"w-6 h-6 flex items-center justify-center text-[#ff4f31]",children:R.jsx("svg",{width:"24",height:"24",viewBox:"0 0 60 60",fill:"currentColor",children:R.jsx("path",{d:"M54.0727 26.1954V25.7768C54.0727 25.0902 53.5114 24.5328 52.8198 24.5328H40.6817C39.9902 24.5328 39.4289 23.9755 39.4289 23.2888V22.8703C39.4289 22.1836 38.8675 21.6263 38.176 21.6263H37.7544C37.0628 21.6263 36.5015 21.0689 36.5015 20.3823V19.9637C36.5015 19.277 35.9402 18.7197 35.2486 18.7197H34.8271C34.1355 18.7197 33.5742 18.1624 33.5742 17.4757V17.0571C33.5742 16.3705 33.0129 15.8131 32.3213 15.8131H31.8997C31.2082 15.8131 30.6468 15.2558 30.6468 14.5691V14.1506C30.6468 13.4639 30.0855 12.9066 29.394 12.9066H28.9724C28.2808 12.9066 27.7195 12.3492 27.7195 11.6626V11.244C27.7195 10.5573 27.1582 10 26.4666 10H22.8217C22.1301 10 21.5688 10.5573 21.5688 11.244V17.772C21.5688 18.4587 22.1301 19.016 22.8217 19.016H23.2432C23.9348 19.016 24.4961 19.5733 24.4961 20.26V23.2936C24.4961 23.9802 23.9348 24.5375 23.2432 24.5375H17.2583C16.5667 24.5375 16.0054 23.9802 16.0054 23.2936V22.875C16.0054 22.1883 15.4441 21.631 14.7525 21.631H14.3309C13.6394 21.631 13.0781 21.0736 13.0781 20.387V19.9684C13.0781 19.2817 12.5168 18.7244 11.8252 18.7244H11.4036C10.712 18.7244 10.1507 18.1671 10.1507 17.4804V17.0618C10.1507 16.3752 9.58942 15.8178 8.89785 15.8178H5.25288C4.56131 15.8178 4 16.3752 4 17.0618V32.3143C4 33.0009 4.56131 33.5582 5.25288 33.5582H5.67446C6.36603 33.5582 6.92734 34.1156 6.92734 34.8022V35.2208C6.92734 35.9075 7.48865 36.4648 8.18022 36.4648H23.2456C23.9372 36.4648 24.4985 37.0221 24.4985 37.7088V40.7424C24.4985 41.429 23.9372 41.9864 23.2456 41.9864H22.824C22.1325 41.9864 21.5711 42.5437 21.5711 43.2303V46.8494C21.5711 47.5361 22.1325 48.0934 22.824 48.0934H23.2456C23.9372 48.0934 24.4985 48.6508 24.4985 49.3374V49.756C24.4985 50.4427 25.0598 51 25.7514 51H26.4666C27.1582 51 27.7195 50.4427 27.7195 49.756V49.3374C27.7195 48.6508 28.2808 48.0934 28.9724 48.0934H29.394C30.0855 48.0934 30.6468 47.5361 30.6468 46.8494V46.4309C30.6468 45.7442 31.2082 45.1869 31.8997 45.1869H32.3213C33.0129 45.1869 33.5742 44.6295 33.5742 43.9429V43.5243C33.5742 42.8376 34.1355 42.2803 34.8271 42.2803H35.2486C35.9402 42.2803 36.5015 41.723 36.5015 41.0363V40.6177C36.5015 39.9311 37.0628 39.3737 37.7544 39.3737H38.176C38.8675 39.3737 39.4289 38.8164 39.4289 38.1297V37.7112C39.4289 37.0245 39.9902 36.4672 40.6817 36.4672H52.8198C53.5114 36.4672 54.0727 35.9098 54.0727 35.2232V34.8046C54.0727 34.1179 54.634 33.5606 55.3255 33.5606H55.7471C56.4387 33.5606 57 33.0033 57 32.3166V28.6975C57 28.0108 56.4387 27.4535 55.7471 27.4535H55.3255C54.634 27.4535 54.0727 26.8962 54.0727 26.2095V26.1954Z"})})}),R.jsx("span",{children:"Making sure your business always stays one step ahead."})]}),R.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-16",children:zT.map((o,e)=>R.jsxs("a",{href:o.link,target:"_blank",rel:"noopener noreferrer",className:"group block overflow-hidden rounded-[20px] bg-[#f5f0f0] p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1",children:[R.jsx("div",{className:"relative aspect-square w-full overflow-hidden rounded-[16px] bg-[#e5dfdf] mb-6",children:R.jsx("img",{src:o.image,alt:o.title,loading:"lazy",className:"h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"})}),R.jsxs("div",{className:"px-2 pb-2",children:[R.jsx("h3",{className:"text-2xl font-serif font-medium text-[#111111] mb-1 group-hover:text-[#ff4f31] transition-colors",children:o.title}),R.jsx("span",{className:"block text-xs uppercase tracking-wider text-[#666666] mb-3 font-mono",children:o.subtitle}),R.jsx("p",{className:"text-sm leading-relaxed text-[#555555]",children:o.description})]})]},e))}),R.jsxs("div",{className:"callout mb-12 flex items-center gap-3 text-xs md:text-sm font-mono tracking-wider uppercase text-[#111111]",children:[R.jsx("span",{className:"w-6 h-6 flex items-center justify-center text-[#ff4f31]",children:R.jsx("svg",{width:"24",height:"24",viewBox:"0 0 60 60",fill:"currentColor",children:R.jsx("path",{d:"M54.9191 22.1549H40.7831C40.082 22.1549 39.5147 21.5968 39.5147 20.907V20.3718C39.5147 19.6821 38.9474 19.1239 38.2462 19.1239H37.7022C37.0011 19.1239 36.4338 18.5658 36.4338 17.8761V14.3099C36.4338 13.6201 35.8665 13.062 35.1654 13.062H34.6213C33.9202 13.062 33.3529 12.5039 33.3529 11.8141V8.24788C33.3529 7.55811 32.7856 7 32.0845 7H27.9155C27.2144 7 26.6471 7.55811 26.6471 8.24788V11.8141C26.6471 12.5039 26.0798 13.062 25.3787 13.062H24.8346C24.1335 13.062 23.5662 13.6201 23.5662 14.3099V17.8761C23.5662 18.5658 22.9989 19.1239 22.2978 19.1239H21.7537C21.0526 19.1239 20.4853 19.6821 20.4853 20.3718V20.907C20.4853 21.5968 19.918 22.1549 19.2169 22.1549H3.26843C2.5673 22.1549 2 22.713 2 23.4028V24.4732C2 25.163 2.5673 25.7211 3.26843 25.7211H3.81245C4.51358 25.7211 5.08088 26.2792 5.08088 26.969V27.5042C5.08088 28.194 5.64819 28.7521 6.34932 28.7521H9.97423C10.6754 28.7521 11.2427 29.3102 11.2427 30V30.5352C11.2427 31.225 11.81 31.7831 12.5111 31.7831H16.136C16.8371 31.7831 17.4044 32.3412 17.4044 33.031V39.093C17.4044 39.7827 16.8371 40.3408 16.136 40.3408H15.592C14.8908 40.3408 14.3235 40.899 14.3235 41.5887V51.7521C14.3235 52.4419 14.8908 53 15.592 53H19.7609C20.462 53 21.0293 52.4419 21.0293 51.7521V51.2169C21.0293 50.5271 21.5966 49.969 22.2978 49.969H22.8418C23.5429 49.969 24.1102 49.4109 24.1102 48.7211V48.1859C24.1102 47.4961 24.6775 46.938 25.3787 46.938H25.9227C26.6238 46.938 27.1911 46.3799 27.1911 45.6901V45.1549C27.1911 44.4652 27.7584 43.907 28.4596 43.907H31.5404C32.2416 43.907 32.8089 44.4652 32.8089 45.1549V45.6901C32.8089 46.3799 33.3762 46.938 34.0773 46.938H34.6213C35.3225 46.938 35.8898 47.4961 35.8898 48.1859V48.7211C35.8898 49.4109 36.4571 49.969 37.1582 49.969H37.7022C38.4033 49.969 38.9706 50.5271 38.9706 51.2169V51.7521C38.9706 52.4419 39.538 53 40.2391 53H44.408C45.1091 53 45.6765 52.4419 45.6765 51.7521V41.5887C45.6765 40.899 45.1091 40.3408 44.408 40.3408H43.864C43.1629 40.3408 42.5956 39.7827 42.5956 39.093V33.031C42.5956 32.3412 43.1629 31.7831 43.864 31.7831H47.4889C48.19 31.7831 48.7573 31.225 48.7573 30.5352V30C48.7573 29.3102 49.3246 28.7521 50.0258 28.7521H53.6507C54.3518 28.7521 54.9191 28.194 54.9191 27.5042V26.969C54.9191 26.2792 55.4864 25.7211 56.1875 25.7211H56.7316C57.4327 25.7211 58 25.163 58 24.4732V23.4028C58 22.713 57.4327 22.1549 56.7316 22.1549H54.9191Z"})})}),R.jsx("span",{children:"Technology shaping future-proof digital experiences."})]}),R.jsx("div",{children:R.jsxs("a",{href:"https://weichie.com/cases/",className:"inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#111111] text-[#111111] font-medium hover:bg-[#111111] hover:text-white transition-all duration-300",children:[R.jsx("span",{children:"View all work"}),R.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:R.jsx("path",{d:"M4 10h12m0 0-4.5-4.5M16 10l-4.5 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})})]})]})}function HT(){return R.jsx("section",{className:"text-sticky py-24 md:py-36 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-[#eee]",children:R.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start",children:[R.jsxs("div",{className:"lg:col-span-5 lg:sticky lg:top-32",children:[R.jsx("p",{className:"text-sm font-mono uppercase tracking-wider text-[#666] mb-4",children:"Digital Development Studio in Brussels & New York."}),R.jsx("h2",{className:"text-[clamp(2.5rem,4.5vw,3.75rem)] font-serif font-normal leading-[1.15] tracking-tight text-[#111111]",children:"We build systems your business runs on."})]}),R.jsxs("div",{className:"lg:col-span-7 space-y-20",children:[R.jsxs("div",{className:"border-b border-[#e5dfdf] pb-16 last:border-b-0",children:[R.jsx("h3",{className:"text-2xl md:text-3xl font-serif font-medium text-[#111111] mb-6",children:"Run on systems that work"}),R.jsx("p",{className:"text-lg leading-relaxed text-[#444] mb-8 font-normal",children:"Your website, shop, or application is not a brochure. It is the operational core of your business, and we build it that way."}),R.jsxs("ul",{className:"space-y-4 text-base text-[#333]",children:[R.jsxs("li",{className:"flex items-start gap-3",children:[R.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#ff4f31] mt-2.5 flex-shrink-0"}),R.jsxs("span",{children:[R.jsx("strong",{className:"font-semibold text-[#111]",children:"Web platforms"}),": High-end websites built as infrastructure"]})]}),R.jsxs("li",{className:"flex items-start gap-3",children:[R.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#ff4f31] mt-2.5 flex-shrink-0"}),R.jsxs("span",{children:[R.jsx("strong",{className:"font-semibold text-[#111]",children:"eCommerce"}),": Shop systems connected to your CRM, ERP and fulfillment"]})]}),R.jsxs("li",{className:"flex items-start gap-3",children:[R.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#ff4f31] mt-2.5 flex-shrink-0"}),R.jsxs("span",{children:[R.jsx("strong",{className:"font-semibold text-[#111]",children:"Applications"}),": Custom tools and SaaS products that replace manual work"]})]})]})]}),R.jsxs("div",{className:"border-b border-[#e5dfdf] pb-16 last:border-b-0",children:[R.jsx("h3",{className:"text-2xl md:text-3xl font-serif font-medium text-[#111111] mb-6",children:"Connect what you already use"}),R.jsx("p",{className:"text-lg leading-relaxed text-[#444] mb-8 font-normal",children:"Most companies run on more tools than they can count, and few of them talk to each other. We build the connections: APIs, integrations, and data flows that turn separate systems into one operation."}),R.jsxs("ul",{className:"space-y-4 text-base text-[#333]",children:[R.jsxs("li",{className:"flex items-start gap-3",children:[R.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#ff4f31] mt-2.5 flex-shrink-0"}),R.jsxs("span",{children:[R.jsx("strong",{className:"font-semibold text-[#111]",children:"Integrations"}),": Your CRM, ERP, invoicing and marketing tools working as one"]})]}),R.jsxs("li",{className:"flex items-start gap-3",children:[R.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#ff4f31] mt-2.5 flex-shrink-0"}),R.jsxs("span",{children:[R.jsx("strong",{className:"font-semibold text-[#111]",children:"APIs and data flows"}),": Reliable connections between every system"]})]}),R.jsxs("li",{className:"flex items-start gap-3",children:[R.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#ff4f31] mt-2.5 flex-shrink-0"}),R.jsxs("span",{children:[R.jsx("strong",{className:"font-semibold text-[#111]",children:"MCP for AI"}),": Give AI controlled, secure access to your existing software"]})]})]})]}),R.jsxs("div",{className:"pb-8",children:[R.jsx("h3",{className:"text-2xl md:text-3xl font-serif font-medium text-[#111111] mb-6",children:"Automate the work that slows you down"}),R.jsx("p",{className:"text-lg leading-relaxed text-[#444] mb-8 font-normal",children:"Not everything needs AI. But the repetitive, multi-step work in your operation usually has a faster answer. We start with discovery, map where automation actually helps, and build from there."}),R.jsxs("ul",{className:"space-y-4 text-base text-[#333]",children:[R.jsxs("li",{className:"flex items-start gap-3",children:[R.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#ff4f31] mt-2.5 flex-shrink-0"}),R.jsxs("span",{children:[R.jsx("strong",{className:"font-semibold text-[#111]",children:"AI agents"}),": Multi-hour tasks handled in minutes"]})]}),R.jsxs("li",{className:"flex items-start gap-3",children:[R.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#ff4f31] mt-2.5 flex-shrink-0"}),R.jsxs("span",{children:[R.jsx("strong",{className:"font-semibold text-[#111]",children:"Workflow automation"}),": Manual steps replaced by processes"]})]}),R.jsxs("li",{className:"flex items-start gap-3",children:[R.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#ff4f31] mt-2.5 flex-shrink-0"}),R.jsxs("span",{children:[R.jsx("strong",{className:"font-semibold text-[#111]",children:"AI discovery"}),": We map where AI adds value"]})]})]})]})]})]})})}function VT(){return R.jsx("section",{className:"simple-text py-24 md:py-36 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-[#eee]",children:R.jsxs("div",{className:"max-w-4xl",children:[R.jsx("h2",{className:"text-[clamp(2.5rem,5.5vw,4.5rem)] font-serif font-normal leading-[1.1] tracking-tight mb-8 text-[#111111]",children:"The partner you call"}),R.jsx("p",{className:"text-[clamp(1.15rem,2vw,1.4rem)] leading-[1.6] text-[#333333] max-w-3xl mb-12 font-normal",children:"We work with organizations whose business depends on software working properly: SMEs with complex operations, scale-ups, and international brands. From Brussels and New York, we build for the long term."}),R.jsx("div",{children:R.jsxs("a",{href:"https://weichie.com/contact/",className:"inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#111111] text-white font-medium hover:bg-[#ff4f31] transition-colors duration-300 shadow-sm",children:[R.jsx("span",{children:"Let's talk"}),R.jsx("span",{className:"w-5 h-5 flex items-center justify-center",children:R.jsxs("svg",{width:"17",height:"24",viewBox:"0 0 16.3384 23.6096",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[R.jsx("path",{d:"M3.98877 11.1797L4.01535 10.3889C4.01535 9.031 3.94424 7.67379 3.80203 6.32313L3.72402 5.58309C3.63152 4.70463 4.2404 3.90624 5.11196 3.763L5.27764 3.73573C6.22721 3.57971 7.11119 4.25763 7.20715 5.21513L7.29171 6.05873C7.42046 7.34484 7.48501 8.63682 7.48501 9.92948L7.54058 10.499C7.53955 10.5253 7.57821 10.5277 7.58062 10.5018L7.61169 10.4697C7.79808 8.22365 7.82017 5.96692 7.67762 3.71744L7.60375 2.55283C7.53748 1.5073 8.31687 0.599849 9.36033 0.507688C10.448 0.411386 11.3989 1.23531 11.4583 2.32571L11.4849 2.81378C11.6336 5.53649 11.5418 8.26748 11.2101 10.974L11.5415 9.69891C11.8276 8.29682 11.9719 6.8692 11.9719 5.43812C11.9719 4.53998 12.6833 3.80304 13.5811 3.77163C14.4927 3.73953 15.261 4.44644 15.3049 5.35769L15.348 6.24996C15.4288 7.923 14.8551 10.8504 14.5431 12.4962L14.3798 13.3204",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),R.jsx("path",{d:"M0.99855 15.9141C0.377242 16.4319 0.335821 17.4118 0.876704 18.0839L3.393 21.2121C3.9791 21.9411 5.06122 22.0185 5.74535 21.3806L5.79643 21.333C6.42119 20.7503 6.48194 19.7814 5.93519 19.1252L3.13896 16.1216C3.13896 16.1216 2.08653 15.008 0.998895 15.9145L0.99855 15.9141Z",stroke:"currentColor",strokeMiterlimit:"10"}),R.jsx("path",{d:"M12.1808 15.4665L8.94001 16.1803C8.04084 16.3785 7.16514 15.7648 7.04399 14.8521C6.93905 14.0603 7.44473 13.3158 8.21964 13.1214L10.5699 12.5319C14.0731 11.6531 17.0198 15.3133 15.3612 18.5216C15.2901 18.6594 15.2121 18.7954 15.1279 18.9289L14.3499 20.1609C13.4134 21.6434 11.9068 22.6744 10.1857 23.0099C8.92586 23.2557 7.61973 23.0437 6.50241 22.4124L5.25669 21.7089",stroke:"currentColor",strokeMiterlimit:"10",strokeLinecap:"round"}),R.jsx("path",{d:"M11.0161 15.7229C11.0161 15.7229 8.92544 15.9583 7.40151 19.6596",stroke:"currentColor",strokeMiterlimit:"10",strokeLinecap:"round"}),R.jsx("path",{d:"M7.07933 14.7494L4.18714 11.4403C3.49404 10.6471 2.26454 10.6343 1.55487 11.4126L1.46512 11.511C0.850374 12.1851 0.851064 13.2169 1.46685 13.8903L5.44219 18.2377C6.15117 19.0133 7.37687 19.0009 8.06998 18.2111C8.51318 17.7065 8.62052 17.012 8.39202 16.4156L8.25292 16.1015",stroke:"currentColor",strokeMiterlimit:"10"})]})})]})})]})})}const GT=[{name:"Mathias Greenhalgh",role:"Webdeveloper",avatar:"/textures/mathias-greengalgh-scaled-1-150x150.jpg",location:"BE",isOpen:!0},{name:"Sam Ghyselinck",role:"Webdeveloper",avatar:"/textures/sam-ghyselinck-150x150.jpg",location:"BE",isOpen:!0},{name:"Sven Vandendael",role:"Treasurer",avatar:"/textures/sven-vandendael-headshot-150x150.jpg",location:"BE",isOpen:!0},{name:"Yannick Van Meerbeeck",role:"Co-founder, Head of Tech",avatar:"/textures/yannick-van-meerbeeck-headshot-150x150.jpg",location:"BE",isOpen:!0},{name:"Bob Weichler",role:"Co-founder & Chief Executive Officer",avatar:"/textures/bob-weichler-headshot-150x150.jpg",location:"BE",isOpen:!0},{name:"Edward Park",role:"UX/UI Designer",avatar:"/textures/edward-park-headshot-150x150.jpg",location:"US",isOpen:!1}];function WT(){return R.jsx("section",{className:"meet-the-team py-24 md:py-36 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-[#eee]",children:R.jsxs("div",{className:"meet-the-team__inner",children:[R.jsxs("div",{className:"callout mb-8 flex items-center gap-3 text-xs md:text-sm font-mono tracking-wider uppercase text-[#111111]",children:[R.jsx("span",{className:"w-6 h-6 flex items-center justify-center text-[#ff4f31]",children:R.jsx("svg",{width:"24",height:"24",viewBox:"0 0 60 60",fill:"currentColor",children:R.jsx("path",{d:"M50.6505 13.2649V12.7815C50.6505 11.9904 50.0138 11.3488 49.2288 11.3488H48.749C47.964 11.3488 47.3272 10.7072 47.3272 9.9161V9.43268C47.3272 8.64163 46.6905 8 45.9055 8H34.9907C34.2056 8 33.5689 8.64163 33.5689 9.43268V9.9161C33.5689 10.7072 32.9321 11.3488 32.1471 11.3488H28.8267C28.0417 11.3488 27.405 10.7072 27.405 9.9161V9.43268C27.405 8.64163 26.7682 8 25.9832 8H15.0684C14.2833 8 13.6466 8.64163 13.6466 9.43268V9.9161C13.6466 10.7072 13.0098 11.3488 12.2248 11.3488H11.7451C10.96 11.3488 10.3233 11.9904 10.3233 12.7815V13.2649C10.3233 14.0559 9.68654 14.6976 8.90151 14.6976H8.42176C7.63673 14.6976 7 15.3392 7 16.1302V30.4746C7 31.2657 7.63673 31.9073 8.42176 31.9073H8.90151C9.68654 31.9073 10.3233 32.5489 10.3233 33.34V33.8234C10.3233 34.6145 10.96 35.2561 11.7451 35.2561H12.2248C13.0098 35.2561 13.6466 35.8977 13.6466 36.6888V37.1722C13.6466 37.9632 14.2833 38.6049 15.0684 38.6049H15.5481C16.3331 38.6049 16.9699 39.2465 16.9699 40.0376V40.521C16.9699 41.312 17.6066 41.9537 18.3916 41.9537H18.8714C19.6564 41.9537 20.2932 42.5953 20.2932 43.3863V43.8698C20.2932 44.6608 20.9299 45.3024 21.7149 45.3024H22.1947C22.9797 45.3024 23.6164 45.9441 23.6164 46.7351V47.2185C23.6164 48.0096 24.2532 48.6512 25.0382 48.6512H25.518C26.303 48.6512 26.9397 49.2928 26.9397 50.0839V50.5673C26.9397 51.3584 27.5765 52 28.3615 52H32.6385C33.4235 52 34.0602 51.3584 34.0602 50.5673V50.0839C34.0602 49.2928 34.697 48.6512 35.482 48.6512H35.9618C36.7468 48.6512 37.3836 48.0096 37.3836 47.2185V46.7351C37.3836 45.9441 38.0203 45.3024 38.8053 45.3024H39.2851C40.0701 45.3024 40.7068 44.6608 40.7068 43.8698V43.3863C40.7068 42.5953 41.3436 41.9537 42.1286 41.9537H42.6084C43.3934 41.9537 44.0301 41.312 44.0301 40.521V40.0376C44.0301 39.2465 44.6669 38.6049 45.4519 38.6049H45.9316C46.7167 38.6049 47.3534 37.9632 47.3534 37.1722V36.6888C47.3534 35.8977 47.9902 35.2561 48.7752 35.2561H49.2549C50.04 35.2561 50.6767 34.6145 50.6767 33.8234V33.34C50.6767 32.5489 51.3135 31.9073 52.0985 31.9073H52.5782C53.3633 31.9073 54 31.2657 54 30.4746V16.1302C54 15.3392 53.3633 14.6976 52.5782 14.6976H52.0985C51.3135 14.6976 50.6767 14.0559 50.6767 13.2649H50.6505Z"})})}),R.jsx("span",{children:"Ready to meet the team behind the genius?"})]}),R.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16",children:[R.jsx("h2",{className:"text-[clamp(2.5rem,5.5vw,4.5rem)] font-serif font-normal leading-[1.1] tracking-tight text-[#111111]",children:"Meet the team"}),R.jsxs("a",{href:"https://weichie.com/about/",className:"inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#ff4f31] text-white font-medium hover:bg-[#e03d20] transition-colors duration-300 w-fit",children:[R.jsx("span",{children:"Meet the team"}),R.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:R.jsx("path",{d:"M4 10h12m0 0-4.5-4.5M16 10l-4.5 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]}),R.jsx("div",{className:"relative w-full aspect-[16/9] md:aspect-[21/9] max-h-[520px] overflow-hidden rounded-[24px] mb-16 shadow-lg bg-[#f0eae8]",children:R.jsx("img",{src:"/textures/weichie-team.jpg",alt:"Weichie Team",loading:"eager",className:"w-full h-full object-cover object-center"})}),R.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:GT.map((o,e)=>R.jsxs("div",{className:"flex items-center gap-4 p-4 rounded-2xl bg-[#f5f0f0] border border-[#ece4e4] transition-all hover:shadow-md",children:[R.jsx("img",{src:o.avatar,alt:o.name,loading:"eager",className:"w-16 h-16 rounded-full object-cover flex-shrink-0 border-2 border-white shadow-sm"}),R.jsxs("div",{className:"min-w-0",children:[R.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[R.jsx("span",{className:`w-2 h-2 rounded-full ${o.isOpen?"bg-emerald-500":"bg-amber-500"}`,title:o.isOpen?"Office Open":"Office Closed"}),R.jsx("h4",{className:"font-semibold text-[#111111] text-base truncate",children:o.name})]}),R.jsx("p",{className:"text-xs text-[#666666] font-mono tracking-wide truncate",children:o.role})]})]},e))})]})})}const jT=["Website","Artificial Intelligence","Branding","Applications (web & mobile)","SEO/GEO","Shopify","API Integration","Website Migration","Blockchain","Maintenance","Second Opinion"];function XT(){const[o,e]=jn.useState(["Website"]),t=i=>{e(s=>s.includes(i)?s.filter(a=>a!==i):[...s,i])};return R.jsx("section",{className:"technology py-24 md:py-36 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-[#eee]",children:R.jsxs("div",{className:"technology__inner",children:[R.jsx("h2",{className:"text-[clamp(2.5rem,5.5vw,4.5rem)] font-serif font-normal leading-[1.1] tracking-tight mb-12 text-[#111111]",children:"Tell us what you need."}),R.jsxs("div",{className:"flex flex-wrap items-center gap-3 p-4 md:p-6 rounded-2xl bg-[#f5f0f0] border border-[#ece4e4] mb-12",children:[R.jsx("span",{className:"text-xl md:text-2xl font-serif text-[#111111]",children:"I need a"}),o.map(i=>R.jsxs("button",{onClick:()=>t(i),className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111111] text-white text-sm font-medium hover:bg-[#ff4f31] transition-colors",children:[R.jsx("span",{children:i}),R.jsx("span",{className:"text-xs opacity-75",children:"✕"})]},i)),o.length===0&&R.jsx("span",{className:"text-sm font-mono text-[#888888] italic",children:"(select one or more below)"}),R.jsxs("a",{href:"https://weichie.com/contact/",className:"ml-auto inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#ff4f31] text-white text-sm font-medium hover:bg-[#e03d20] transition-colors",children:[R.jsx("span",{children:"Next"}),R.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"none",children:R.jsx("path",{d:"M4 10h12m0 0-4.5-4.5M16 10l-4.5 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]}),R.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:jT.map(i=>{const s=o.includes(i);return R.jsxs("button",{type:"button",onClick:()=>t(i),className:`flex items-center justify-between p-4 rounded-xl border text-left transition-all ${s?"border-[#ff4f31] bg-white shadow-sm":"border-[#e5dfdf] bg-transparent hover:border-[#111111]"}`,children:[R.jsxs("div",{className:"flex items-center gap-3",children:[R.jsx("span",{className:"text-[#ff4f31]",children:R.jsx("svg",{width:"11",height:"20",viewBox:"0 0 11 20",fill:"currentColor",children:R.jsx("path",{d:"M-3.90187e-05 15.7711V5.82933e-05H1.49096V14.2801H6.53096C5.87996 13.5451 5.18696 12.4111 4.51496 10.9411H5.71196C7.18196 12.6421 8.73596 13.9231 10.332 14.7211V15.3301C8.73596 16.1281 7.18196 17.3881 5.71196 19.1101H4.51496C5.18696 17.6401 5.87996 16.5061 6.53096 15.7711H-3.90187e-05Z"})})}),R.jsx("span",{className:"font-medium text-base text-[#111111]",children:i})]}),R.jsx("span",{className:`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${s?"bg-[#ff4f31] text-white":"bg-[#ece4e4] text-[#111111]"}`,children:s?"✓":"+"})]},i)})})]})})}function YT(){return R.jsx("footer",{className:"footer bg-[#fdf9f9] text-[#111111] pt-24 pb-16 px-6 md:px-12 border-t border-[#eee]",children:R.jsxs("div",{className:"max-w-[1440px] mx-auto",children:[R.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-24",children:[R.jsxs("div",{className:"flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-[#f5f0f0] border border-[#ece4e4]",children:[R.jsx("img",{src:"/textures/weichie-office-new-york-200x300.webp",alt:"New York, USA",loading:"eager",className:"w-full sm:w-44 h-56 object-cover rounded-xl"}),R.jsxs("div",{className:"flex flex-col justify-between py-1",children:[R.jsxs("div",{children:[R.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[R.jsx("span",{className:"w-2 h-2 rounded-full bg-amber-500"}),R.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-[#666]",children:"We are closed"})]}),R.jsx("h3",{className:"text-2xl font-serif font-medium text-[#111111] mb-2",children:"New York, USA"}),R.jsx("p",{className:"text-sm text-[#555] mb-4",children:"Monday to Friday 9am to 5pm"}),R.jsxs("a",{href:"tel:+19298225127",className:"inline-flex items-center gap-2 text-sm font-medium text-[#111111] hover:text-[#ff4f31] transition-colors",children:[R.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:R.jsx("path",{d:"M5 0C5.53043 0 6.03899 0.210865 6.41406 0.585938L6.54688 0.732422C6.83855 1.08833 7 1.53581 7 2V5C7 5.31049 6.92792 5.61682 6.78906 5.89453L6.67285 6.0957C6.54602 6.28934 6.38629 6.45998 6.2002 6.59961L5.73242 6.95117C5.54884 7.09135 5.41944 7.29086 5.36621 7.51562C5.31305 7.74028 5.3393 7.97606 5.44043 8.18359C6.80711 10.9595 9.05446 13.2052 11.832 14.5684C11.9868 14.6394 12.1563 14.6689 12.3242 14.6562L12.4912 14.6299C12.7117 14.5748 12.9073 14.4455 13.0449 14.2646L13.4004 13.7998C13.5867 13.5516 13.8279 13.3497 14.1055 13.2109C14.3832 13.0721 14.6895 13 15 13H18C18.5304 13 19.039 13.2109 19.4141 13.5859L19.5469 13.7324C19.8385 14.0883 20 14.5358 20 15V18C20 18.5304 19.7891 19.039 19.4141 19.4141C19.039 19.7891 18.5304 20 18 20C13.2261 20 8.64812 18.1032 5.27246 14.7275C1.89681 11.3519 0 6.7739 0 2C0 1.53581 0.161455 1.08833 0.453125 0.732422L0.585938 0.585938C0.96101 0.210865 1.46957 0 2 0H5Z"})}),R.jsx("span",{children:"+1 (929) 822-5127"})]})]}),R.jsx("a",{href:"https://weichie.com/contact/",className:"inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#111111] text-[#111111] text-sm font-medium hover:bg-[#111111] hover:text-white transition-colors w-fit mt-4",children:R.jsx("span",{children:"Contact"})})]})]}),R.jsxs("div",{className:"flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-[#f5f0f0] border border-[#ece4e4]",children:[R.jsx("img",{src:"/textures/brussels-dev-studio-225x300.jpg",alt:"Brussels, Belgium",loading:"eager",className:"w-full sm:w-44 h-56 object-cover rounded-xl"}),R.jsxs("div",{className:"flex flex-col justify-between py-1",children:[R.jsxs("div",{children:[R.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[R.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500"}),R.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-[#666]",children:"We are open"})]}),R.jsx("h3",{className:"text-2xl font-serif font-medium text-[#111111] mb-2",children:"Brussels, Belgium"}),R.jsx("p",{className:"text-sm text-[#555] mb-4",children:"Monday to Friday 9h to 17h"}),R.jsxs("a",{href:"tel:+32469129449",className:"inline-flex items-center gap-2 text-sm font-medium text-[#111111] hover:text-[#ff4f31] transition-colors",children:[R.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:R.jsx("path",{d:"M5 0C5.53043 0 6.03899 0.210865 6.41406 0.585938L6.54688 0.732422C6.83855 1.08833 7 1.53581 7 2V5C7 5.31049 6.92792 5.61682 6.78906 5.89453L6.67285 6.0957C6.54602 6.28934 6.38629 6.45998 6.2002 6.59961L5.73242 6.95117C5.54884 7.09135 5.41944 7.29086 5.36621 7.51562C5.31305 7.74028 5.3393 7.97606 5.44043 8.18359C6.80711 10.9595 9.05446 13.2052 11.832 14.5684C11.9868 14.6394 12.1563 14.6689 12.3242 14.6562L12.4912 14.6299C12.7117 14.5748 12.9073 14.4455 13.0449 14.2646L13.4004 13.7998C13.5867 13.5516 13.8279 13.3497 14.1055 13.2109C14.3832 13.0721 14.6895 13 15 13H18C18.5304 13 19.039 13.2109 19.4141 13.5859L19.5469 13.7324C19.8385 14.0883 20 14.5358 20 15V18C20 18.5304 19.7891 19.039 19.4141 19.4141C19.039 19.7891 18.5304 20 18 20C13.2261 20 8.64812 18.1032 5.27246 14.7275C1.89681 11.3519 0 6.7739 0 2C0 1.53581 0.161455 1.08833 0.453125 0.732422L0.585938 0.585938C0.96101 0.210865 1.46957 0 2 0H5Z"})}),R.jsx("span",{children:"+32 469 129 449"})]})]}),R.jsx("a",{href:"https://weichie.com/contact/",className:"inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#111111] text-[#111111] text-sm font-medium hover:bg-[#111111] hover:text-white transition-colors w-fit mt-4",children:R.jsx("span",{children:"Contact"})})]})]})]}),R.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-20 border-b border-[#e5dfdf]",children:[R.jsx("div",{className:"lg:col-span-1",children:R.jsxs("p",{className:"text-sm leading-relaxed text-[#555]",children:["Weichie is a web design and development studio based in"," ",R.jsx("a",{href:"https://weichie.com/webdesign-brussels/",className:"text-[#111] underline hover:text-[#ff4f31]",children:"Brussels"})," ","and"," ",R.jsx("a",{href:"https://weichie.com/webdesign-new-york/",className:"text-[#111] underline hover:text-[#ff4f31]",children:"New York"}),". We build digital solutions to make your business shine online."]})}),R.jsxs("div",{children:[R.jsx("h4",{className:"text-xs uppercase tracking-wider font-mono text-[#888] mb-4",children:"Studio"}),R.jsxs("ul",{className:"space-y-2.5 text-sm text-[#333]",children:[R.jsx("li",{children:R.jsx("a",{href:"https://weichie.com/cases/",className:"hover:text-[#ff4f31] transition-colors",children:"Projects"})}),R.jsx("li",{children:R.jsx("a",{href:"https://weichie.com/about/",className:"hover:text-[#ff4f31] transition-colors",children:"About"})}),R.jsx("li",{children:R.jsx("a",{href:"https://weichie.com/blog/",className:"hover:text-[#ff4f31] transition-colors",children:"Insights"})}),R.jsx("li",{children:R.jsx("a",{href:"https://weichie.com/network/",className:"hover:text-[#ff4f31] transition-colors",children:"Network"})}),R.jsx("li",{children:R.jsx("a",{href:"https://weichie.com/careers/",className:"hover:text-[#ff4f31] transition-colors",children:"Careers"})})]})]}),R.jsxs("div",{children:[R.jsx("h4",{className:"text-xs uppercase tracking-wider font-mono text-[#888] mb-4",children:"Expertises"}),R.jsxs("ul",{className:"space-y-2.5 text-sm text-[#333]",children:[R.jsx("li",{children:R.jsx("a",{href:"https://weichie.com/service/web-development/",className:"hover:text-[#ff4f31] transition-colors",children:"Web development"})}),R.jsx("li",{children:R.jsx("a",{href:"https://weichie.com/service/ecommerce/",className:"hover:text-[#ff4f31] transition-colors",children:"eCommerce"})}),R.jsx("li",{children:R.jsx("a",{href:"https://weichie.com/service/applications/",className:"hover:text-[#ff4f31] transition-colors",children:"Application development"})}),R.jsx("li",{children:R.jsx("a",{href:"https://weichie.com/service/artificial-intelligence/",className:"hover:text-[#ff4f31] transition-colors",children:"Artificial intelligence"})}),R.jsx("li",{children:R.jsx("a",{href:"https://weichie.com/service/blockchain/",className:"hover:text-[#ff4f31] transition-colors",children:"Blockchain"})})]})]}),R.jsxs("div",{children:[R.jsx("h4",{className:"text-xs uppercase tracking-wider font-mono text-[#888] mb-4",children:"Legal"}),R.jsxs("ul",{className:"space-y-2.5 text-sm text-[#333]",children:[R.jsx("li",{children:R.jsx("a",{href:"https://weichie.com/imprint/",className:"hover:text-[#ff4f31] transition-colors",children:"Legal Notice"})}),R.jsx("li",{children:R.jsx("a",{href:"https://weichie.com/terms-of-service/",className:"hover:text-[#ff4f31] transition-colors",children:"Terms of Service"})}),R.jsx("li",{children:R.jsx("a",{href:"#",className:"hover:text-[#ff4f31] transition-colors",children:"Cookie Preference"})}),R.jsx("li",{children:R.jsx("a",{href:"https://weichie.com/ai-charter/",className:"hover:text-[#ff4f31] transition-colors",children:"AI Charter"})}),R.jsx("li",{children:R.jsx("a",{href:"#!",className:"hover:text-[#ff4f31] transition-colors",children:"AI Mode"})})]})]}),R.jsxs("div",{children:[R.jsx("h4",{className:"text-xs uppercase tracking-wider font-mono text-[#888] mb-4",children:"Business Inquiries"}),R.jsxs("ul",{className:"space-y-2.5 text-sm text-[#333]",children:[R.jsx("li",{children:R.jsx("a",{href:"tel:+19298225127",className:"hover:text-[#ff4f31] transition-colors",children:"+1 (929) 822-5127"})}),R.jsx("li",{children:R.jsx("a",{href:"tel:+32469129449",className:"hover:text-[#ff4f31] transition-colors",children:"+32 469 129 449"})}),R.jsx("li",{children:R.jsx("a",{href:"mailto:hello@weichie.com",className:"hover:text-[#ff4f31] transition-colors",children:"hello@weichie.com"})}),R.jsx("li",{children:R.jsx("a",{href:"https://weichie.com/contact/",className:"hover:text-[#ff4f31] transition-colors underline font-medium",children:"Request proposals"})})]})]})]}),R.jsxs("div",{className:"pt-12 flex flex-col md:flex-row items-center justify-between gap-6",children:[R.jsxs("div",{className:"flex items-center gap-6 text-sm text-[#555]",children:[R.jsx("a",{href:"https://www.linkedin.com/company/weichie/",target:"_blank",rel:"noopener noreferrer",className:"hover:text-[#111]",children:"LinkedIn"}),R.jsx("a",{href:"https://www.instagram.com/weichiecom/",target:"_blank",rel:"noopener noreferrer",className:"hover:text-[#111]",children:"Instagram"}),R.jsx("a",{href:"https://www.facebook.com/weichiecom/",target:"_blank",rel:"noopener noreferrer",className:"hover:text-[#111]",children:"Facebook"})]}),R.jsx("div",{className:"text-[#111111]",children:R.jsxs("svg",{width:"133",height:"28",viewBox:"0 0 133 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[R.jsx("path",{d:"M39.893 0.863371V0.563103H33.7468L33.7086 0.863371L35.0066 2.70251L30.2729 17.9036C29.9675 18.8795 29.713 19.7427 29.5094 20.4934C29.3058 21.2441 29.1149 22.0698 28.9367 22.9706C28.7077 22.0698 28.4977 21.2441 28.3069 20.4934C28.116 19.7427 27.8678 18.8795 27.5624 17.9036L22.7142 2.77758L23.974 0.863371V0.563103H17.217V0.863371L18.6676 2.85265L18.7058 2.81511L14.0866 17.8661C13.8067 18.8169 13.5713 19.6802 13.3804 20.4559C13.1895 21.2316 12.9923 22.0573 12.7887 22.9331C12.5851 22.0573 12.3815 21.2378 12.1779 20.4746C11.9743 19.7115 11.7198 18.8544 11.4144 17.9036L6.52795 2.77758L7.78772 0.863371L7.74955 0.563103H0L0.0381751 0.863371L2.02328 2.85265L10.3836 27.6248H13.5903L18.5913 12.161C18.9221 11.1601 19.1894 10.2905 19.393 9.55238C19.5966 8.81422 19.8129 8.00725 20.0419 7.13147C20.2455 8.00725 20.4491 8.81422 20.6527 9.55238C20.8563 10.2905 21.0981 11.1601 21.3781 12.161L26.4554 27.6248H29.6621L38.0988 2.74005L39.893 0.863371Z",fill:"currentColor"}),R.jsx("path",{d:"M52.2427 23.0455C51.6955 23.6961 51.0465 24.1903 50.2957 24.5281C49.5449 24.8659 48.7115 25.0348 47.7953 25.0348C46.5737 25.0348 45.4729 24.7345 44.4931 24.134C43.5133 23.5335 42.7434 22.6577 42.1835 21.5067C41.6406 20.3932 41.3649 19.0649 41.3479 17.5281H55.5448C55.5957 16.5522 55.5321 15.5951 55.3539 14.6568C55.1758 13.7184 54.8767 12.8302 54.4568 11.9919C54.0369 11.1537 53.4706 10.4218 52.758 9.7962C52.0454 9.17064 51.1928 8.67645 50.2003 8.31362C49.2077 7.9508 48.037 7.76939 46.6882 7.76939C45.2121 7.76939 43.895 8.03212 42.737 8.55759C41.5791 9.08306 40.5992 9.80245 39.7976 10.7158C38.9959 11.6291 38.3851 12.705 37.9652 13.9436C37.5452 15.1823 37.3353 16.4897 37.3353 17.8659C37.3353 19.2421 37.558 20.5871 38.0033 21.8257C38.4487 23.0643 39.0977 24.1403 39.9503 25.0536C40.8028 25.9669 41.8272 26.6863 43.0234 27.2117C44.2195 27.7372 45.5429 27.9999 46.9936 27.9999C48.5715 27.9999 49.9521 27.7184 51.1356 27.1554C52.319 26.5924 53.2988 25.8105 54.0751 24.8096C54.8513 23.8087 55.3921 22.6327 55.6975 21.2814L53.5215 20.6809C53.2161 21.6067 52.7898 22.3949 52.2427 23.0455ZM42.718 12.0294C43.1506 11.3163 43.7042 10.7596 44.3786 10.3592C45.053 9.95884 45.8229 9.75866 46.6882 9.75866C47.4262 9.75866 48.0816 9.9088 48.6542 10.2091C49.2268 10.5093 49.7167 10.9347 50.1239 11.4852C50.5311 12.0357 50.8429 12.6613 51.0592 13.3619C51.2756 14.0625 51.4219 14.8257 51.4982 15.6514H41.4709C41.5303 15.249 41.6045 14.8528 41.7063 14.4691C41.9481 13.5558 42.2853 12.7426 42.718 12.0294Z",fill:"currentColor"}),R.jsx("path",{d:"M60.6221 5.29221C61.3347 5.29221 61.9519 5.0545 62.4736 4.57907C62.9953 4.10365 63.2562 3.51562 63.2562 2.815C63.2562 2.11437 63.0017 1.56388 62.4927 1.08846C61.9837 0.613031 61.3729 0.375318 60.6603 0.375318C59.9477 0.375318 59.3432 0.613031 58.847 1.08846C58.3507 1.56388 58.1025 2.13939 58.1025 2.815C58.1025 3.4906 58.3443 4.10365 58.8279 4.57907C59.3114 5.0545 59.9095 5.29221 60.6221 5.29221Z",fill:"currentColor"}),R.jsx("path",{d:"M62.6454 7.95717L57.4154 8.89551V9.19578L58.7515 11.11V25.5604L57.4154 27.3245V27.6247H63.9815V27.3245L62.6454 25.5604V7.95717Z",fill:"currentColor"}),R.jsx("path",{d:"M79.5188 23.8713C78.5262 24.6219 77.381 24.9973 76.083 24.9973C75.2941 24.9973 74.5179 24.8409 73.7543 24.5281C72.9908 24.2153 72.3037 23.7461 71.6929 23.1206C71.0821 22.495 70.6049 21.7068 70.2613 20.756C69.9177 19.8051 69.746 18.6916 69.746 17.4155C69.746 16.2895 69.8859 15.2636 70.1659 14.3378C70.4458 13.4119 70.8403 12.6175 71.3493 11.9544C71.8583 11.2913 72.4691 10.7846 73.1817 10.4343C73.8943 10.084 74.696 9.9088 75.5868 9.9088C76.2485 9.9088 76.8465 10.0214 77.381 10.2466C77.9154 10.4718 78.4054 10.7908 78.8507 11.2037C79.2961 11.6166 79.6651 12.1108 79.9578 12.6863C80.2505 13.2618 80.4986 13.8999 80.7022 14.6005L81.0076 14.6756L83.5272 12.4986C83.1963 11.5978 82.6555 10.7846 81.9047 10.0589C81.154 9.33328 80.2378 8.77028 79.1561 8.36992C78.0745 7.96956 76.8593 7.76939 75.5104 7.76939C74.1616 7.76939 72.8127 8.01335 71.6165 8.50129C70.4204 8.98923 69.3706 9.67734 68.4671 10.5656C67.5636 11.4539 66.8574 12.5174 66.3484 13.756C65.8394 14.9946 65.5849 16.3646 65.5849 17.8659C65.5849 19.8176 65.9984 21.5567 66.8256 23.0831C67.6527 24.6094 68.7916 25.8105 70.2422 26.6863C71.6929 27.5621 73.3726 27.9999 75.2813 27.9999C76.8338 27.9999 78.2017 27.7059 79.3852 27.1179C80.5686 26.5299 81.5484 25.6916 82.3247 24.6032C83.1009 23.5147 83.6163 22.2448 83.8708 20.7935L81.7711 20.3806C81.2621 21.9571 80.5113 23.1206 79.5188 23.8713Z",fill:"currentColor"}),R.jsx("path",{d:"M103.302 14.4504C103.302 13.0241 103.009 11.8105 102.424 10.8096C101.839 9.80875 101.043 9.05183 100.038 8.53887C99.0326 8.02591 97.8683 7.76943 96.5449 7.76943C95.6541 7.76943 94.8143 7.94459 94.0253 8.2949C93.2364 8.64521 92.5365 9.12064 91.9257 9.72117C91.3149 10.3217 90.8186 11.0223 90.4369 11.8231V-4.60065e-06L85.2069 0.938333V1.2386L86.543 3.15281V25.5603L85.2069 27.3244V27.6247H91.773V27.3244L90.4369 25.5603V15.5013C90.6659 14.5004 91.0159 13.6434 91.4867 12.9303C91.9575 12.2172 92.5365 11.6604 93.2237 11.26C93.9108 10.8597 94.6489 10.6595 95.4378 10.6595C96.2268 10.6595 96.9521 10.8222 97.5374 11.1474C98.1228 11.4727 98.5745 11.9482 98.8927 12.5737C99.2108 13.1993 99.3698 13.9875 99.3698 14.9383V25.5603L98.0337 27.3244V27.6247H104.676V27.3244L103.302 25.5603V14.4504Z",fill:"currentColor"}),R.jsx("path",{d:"M109.639 5.29221C110.352 5.29221 110.969 5.0545 111.49 4.57907C112.012 4.10365 112.273 3.51562 112.273 2.815C112.273 2.11437 112.019 1.56388 111.51 1.08846C111.001 0.613031 110.39 0.375318 109.677 0.375318C108.965 0.375318 108.36 0.613031 107.864 1.08846C107.368 1.56388 107.119 2.13939 107.119 2.815C107.119 3.4906 107.361 4.10365 107.845 4.57907C108.328 5.0545 108.926 5.29221 109.639 5.29221Z",fill:"currentColor"}),R.jsx("path",{d:"M111.662 7.95717L106.432 8.89551V9.19578L107.768 11.11V25.5604L106.432 27.3245V27.6247H112.998V27.3245L111.662 25.5604V7.95717Z",fill:"currentColor"}),R.jsx("path",{d:"M130.824 20.6809C130.519 21.6067 130.092 22.3949 129.545 23.0455C128.998 23.6961 128.349 24.1903 127.598 24.5281C126.847 24.8659 126.014 25.0348 125.098 25.0348C123.876 25.0348 122.775 24.7345 121.796 24.134C120.816 23.5335 120.046 22.6577 119.486 21.5067C118.943 20.3932 118.667 19.0649 118.65 17.5281H132.847C132.898 16.5522 132.835 15.5951 132.656 14.6568C132.478 13.7184 132.179 12.8302 131.759 11.9919C131.339 11.1537 130.773 10.4218 130.061 9.7962C129.348 9.17064 128.495 8.67645 127.503 8.31362C126.51 7.9508 125.34 7.76939 123.991 7.76939C122.515 7.76939 121.198 8.03212 120.04 8.55759C118.882 9.08306 117.902 9.80245 117.1 10.7158C116.298 11.6291 115.688 12.705 115.268 13.9436C114.848 15.1823 114.638 16.4897 114.638 17.8659C114.638 19.2421 114.86 20.5871 115.306 21.8257C115.751 23.0643 116.4 24.1403 117.253 25.0536C118.105 25.9669 119.13 26.6863 120.326 27.2117C121.522 27.7372 122.845 27.9999 124.296 27.9999C125.874 27.9999 127.255 27.7184 128.438 27.1554C129.622 26.5924 130.601 25.8105 131.378 24.8096C132.154 23.8087 132.695 22.6327 133 21.2814L130.824 20.6809ZM120.02 12.0294C120.453 11.3163 121.007 10.7596 121.681 10.3592C122.356 9.95884 123.125 9.75866 123.991 9.75866C124.729 9.75866 125.384 9.9088 125.957 10.2091C126.529 10.5093 127.019 10.9347 127.426 11.4852C127.834 12.0357 128.145 12.6613 128.362 13.3619C128.578 14.0625 128.724 14.8257 128.801 15.6514H118.773C118.833 15.249 118.907 14.8528 119.009 14.4691C119.251 13.5558 119.588 12.7426 120.02 12.0294Z",fill:"currentColor"})]})}),R.jsx("p",{className:"text-sm text-[#888888] font-mono",children:"Weichie © 2026"})]})]})})}function qT(){return jn.useEffect(()=>{const o=new Dx({lerp:.08,duration:1.2,smoothWheel:!0,wheelMultiplier:1,touchMultiplier:1.8});let e;function t(i){o.raf(i),e=requestAnimationFrame(t)}return e=requestAnimationFrame(t),()=>{cancelAnimationFrame(e),o.destroy()}},[]),R.jsxs("div",{className:"min-h-screen bg-[#fdf9f9] text-[#111111] selection:bg-[#ff4f31] selection:text-white font-sans antialiased",children:[R.jsx(Bx,{}),R.jsxs("main",{children:[R.jsx(FT,{}),R.jsx(kT,{}),R.jsx(BT,{}),R.jsx(HT,{}),R.jsx(VT,{}),R.jsx(WT,{}),R.jsx(XT,{})]}),R.jsx(YT,{})]})}wx.createRoot(document.getElementById("root")).render(R.jsx(_x.StrictMode,{children:R.jsx(qT,{})}));
