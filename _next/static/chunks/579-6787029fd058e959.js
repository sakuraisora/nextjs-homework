"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[579],{8877:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(2115);let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>!!e&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim()};var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let u=(0,r.forwardRef)((e,t)=>{let{color:n="currentColor",size:o=24,strokeWidth:u=2,absoluteStrokeWidth:l,className:c="",children:s,iconNode:d,...f}=e;return(0,r.createElement)("svg",{ref:t,...i,width:o,height:o,stroke:n,strokeWidth:l?24*Number(u)/Number(o):u,className:a("lucide",c),...f},[...d.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...Array.isArray(s)?s:[s]])}),l=((e,t)=>{let n=(0,r.forwardRef)((n,i)=>{let{className:l,...c}=n;return(0,r.createElement)(u,{ref:i,iconNode:t,className:a("lucide-".concat(o(e)),l),...c})});return n.displayName="".concat(e),n})("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},6046:(e,t,n)=>{var r=n(6658);n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}})},6566:(e,t,n)=>{n.d(t,{bm:()=>to,UC:()=>tt,VY:()=>tr,hJ:()=>te,ZL:()=>e9,bL:()=>e3,hE:()=>tn,l9:()=>e7});var r,o,a,i=n(2115),u=n(3610),l=n(8068),c=n(8166),s=n(7668),d=n(1488),f=n(3360),v=n(1524),p=n(5155),m="dismissableLayer.update",h=i.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),g=i.forwardRef((e,t)=>{var n,r;let{disableOutsidePointerEvents:a=!1,onEscapeKeyDown:c,onPointerDownOutside:s,onFocusOutside:d,onInteractOutside:g,onDismiss:E,...w}=e,C=i.useContext(h),[x,R]=i.useState(null),D=null!==(r=null==x?void 0:x.ownerDocument)&&void 0!==r?r:null===(n=globalThis)||void 0===n?void 0:n.document,[,S]=i.useState({}),k=(0,l.s)(t,e=>R(e)),N=Array.from(C.layers),[L]=[...C.layersWithOutsidePointerEventsDisabled].slice(-1),A=N.indexOf(L),O=x?N.indexOf(x):-1,P=C.layersWithOutsidePointerEventsDisabled.size>0,j=O>=A,T=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,v.c)(e),o=i.useRef(!1),a=i.useRef(()=>{});return i.useEffect(()=>{let e=e=>{if(e.target&&!o.current){let t=function(){b("dismissableLayer.pointerDownOutside",r,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(n.removeEventListener("click",a.current),a.current=t,n.addEventListener("click",a.current,{once:!0})):t()}else n.removeEventListener("click",a.current);o.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",a.current)}},[n,r]),{onPointerDownCapture:()=>o.current=!0}}(e=>{let t=e.target,n=[...C.branches].some(e=>e.contains(t));!j||n||(null==s||s(e),null==g||g(e),e.defaultPrevented||null==E||E())},D),M=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,v.c)(e),o=i.useRef(!1);return i.useEffect(()=>{let e=e=>{e.target&&!o.current&&b("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,r]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}(e=>{let t=e.target;[...C.branches].some(e=>e.contains(t))||(null==d||d(e),null==g||g(e),e.defaultPrevented||null==E||E())},D);return!function(e,t=globalThis?.document){let n=(0,v.c)(e);i.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{O!==C.layers.size-1||(null==c||c(e),!e.defaultPrevented&&E&&(e.preventDefault(),E()))},D),i.useEffect(()=>{if(x)return a&&(0===C.layersWithOutsidePointerEventsDisabled.size&&(o=D.body.style.pointerEvents,D.body.style.pointerEvents="none"),C.layersWithOutsidePointerEventsDisabled.add(x)),C.layers.add(x),y(),()=>{a&&1===C.layersWithOutsidePointerEventsDisabled.size&&(D.body.style.pointerEvents=o)}},[x,D,a,C]),i.useEffect(()=>()=>{x&&(C.layers.delete(x),C.layersWithOutsidePointerEventsDisabled.delete(x),y())},[x,C]),i.useEffect(()=>{let e=()=>S({});return document.addEventListener(m,e),()=>document.removeEventListener(m,e)},[]),(0,p.jsx)(f.sG.div,{...w,ref:k,style:{pointerEvents:P?j?"auto":"none":void 0,...e.style},onFocusCapture:(0,u.m)(e.onFocusCapture,M.onFocusCapture),onBlurCapture:(0,u.m)(e.onBlurCapture,M.onBlurCapture),onPointerDownCapture:(0,u.m)(e.onPointerDownCapture,T.onPointerDownCapture)})});function y(){let e=new CustomEvent(m);document.dispatchEvent(e)}function b(e,t,n,r){let{discrete:o}=r,a=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&a.addEventListener(e,t,{once:!0}),o?(0,f.hO)(a,i):a.dispatchEvent(i)}g.displayName="DismissableLayer",i.forwardRef((e,t)=>{let n=i.useContext(h),r=i.useRef(null),o=(0,l.s)(t,r);return i.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,p.jsx)(f.sG.div,{...e,ref:o})}).displayName="DismissableLayerBranch";var E="focusScope.autoFocusOnMount",w="focusScope.autoFocusOnUnmount",C={bubbles:!1,cancelable:!0},x=i.forwardRef((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:a,...u}=e,[c,s]=i.useState(null),d=(0,v.c)(o),m=(0,v.c)(a),h=i.useRef(null),g=(0,l.s)(t,e=>s(e)),y=i.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;i.useEffect(()=>{if(r){let e=function(e){if(y.paused||!c)return;let t=e.target;c.contains(t)?h.current=t:S(h.current,{select:!0})},t=function(e){if(y.paused||!c)return;let t=e.relatedTarget;null===t||c.contains(t)||S(h.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&S(c)});return c&&n.observe(c,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,c,y.paused]),i.useEffect(()=>{if(c){k.add(y);let e=document.activeElement;if(!c.contains(e)){let t=new CustomEvent(E,C);c.addEventListener(E,d),c.dispatchEvent(t),t.defaultPrevented||(function(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.activeElement;for(let r of e)if(S(r,{select:t}),document.activeElement!==n)return}(R(c).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&S(c))}return()=>{c.removeEventListener(E,d),setTimeout(()=>{let t=new CustomEvent(w,C);c.addEventListener(w,m),c.dispatchEvent(t),t.defaultPrevented||S(null!=e?e:document.body,{select:!0}),c.removeEventListener(w,m),k.remove(y)},0)}}},[c,d,m,y]);let b=i.useCallback(e=>{if(!n&&!r||y.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,a]=function(e){let t=R(e);return[D(t,e),D(t.reverse(),e)]}(t);r&&a?e.shiftKey||o!==a?e.shiftKey&&o===r&&(e.preventDefault(),n&&S(a,{select:!0})):(e.preventDefault(),n&&S(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,y.paused]);return(0,p.jsx)(f.sG.div,{tabIndex:-1,...u,ref:g,onKeyDown:b})});function R(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function D(e,t){for(let n of e)if(!function(e,t){let{upTo:n}=t;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===n||e!==n);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function S(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}x.displayName="FocusScope";var k=function(){let e=[];return{add(t){let n=e[0];t!==n&&(null==n||n.pause()),(e=N(e,t)).unshift(t)},remove(t){var n;null===(n=(e=N(e,t))[0])||void 0===n||n.resume()}}}();function N(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}var L=n(7650),A=n(6611),O=i.forwardRef((e,t)=>{var n,r;let{container:o,...a}=e,[u,l]=i.useState(!1);(0,A.N)(()=>l(!0),[]);let c=o||u&&(null===(r=globalThis)||void 0===r?void 0:null===(n=r.document)||void 0===n?void 0:n.body);return c?L.createPortal((0,p.jsx)(f.sG.div,{...a,ref:t}),c):null});O.displayName="Portal";var P=n(7028),j=0;function T(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var M=function(){return(M=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function I(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}Object.create,Object.create;var F=("function"==typeof SuppressedError&&SuppressedError,"right-scroll-bar-position"),W="width-before-scroll-bar";function B(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var _="undefined"!=typeof window?i.useLayoutEffect:i.useEffect,G=new WeakMap;function K(e){return e}var X=function(e){void 0===e&&(e={});var t,n,r,o=(void 0===t&&(t=K),n=[],r=!1,{read:function(){if(r)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:null},useMedium:function(e){var o=t(e,r);return n.push(o),function(){n=n.filter(function(e){return e!==o})}},assignSyncMedium:function(e){for(r=!0;n.length;){var t=n;n=[],t.forEach(e)}n={push:function(t){return e(t)},filter:function(){return n}}},assignMedium:function(e){r=!0;var t=[];if(n.length){var o=n;n=[],o.forEach(e),t=n}var a=function(){var n=t;t=[],n.forEach(e)},i=function(){return Promise.resolve().then(a)};i(),n={push:function(e){t.push(e),i()},filter:function(e){return t=t.filter(e),n}}}});return o.options=M({async:!0,ssr:!1},e),o}(),Y=function(){},z=i.forwardRef(function(e,t){var n,r,o,a,u=i.useRef(null),l=i.useState({onScrollCapture:Y,onWheelCapture:Y,onTouchMoveCapture:Y}),c=l[0],s=l[1],d=e.forwardProps,f=e.children,v=e.className,p=e.removeScrollBar,m=e.enabled,h=e.shards,g=e.sideCar,y=e.noIsolation,b=e.inert,E=e.allowPinchZoom,w=e.as,C=e.gapMode,x=I(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),R=(n=[u,t],r=function(e){return n.forEach(function(t){return B(t,e)})},(o=(0,i.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,a=o.facade,_(function(){var e=G.get(a);if(e){var t=new Set(e),r=new Set(n),o=a.current;t.forEach(function(e){r.has(e)||B(e,null)}),r.forEach(function(e){t.has(e)||B(e,o)})}G.set(a,n)},[n]),a),D=M(M({},x),c);return i.createElement(i.Fragment,null,m&&i.createElement(g,{sideCar:X,removeScrollBar:p,shards:h,noIsolation:y,inert:b,setCallbacks:s,allowPinchZoom:!!E,lockRef:u,gapMode:C}),d?i.cloneElement(i.Children.only(f),M(M({},D),{ref:R})):i.createElement(void 0===w?"div":w,M({},D,{className:v,ref:R}),f))});z.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},z.classNames={fullWidth:W,zeroRight:F};var Z=function(e){var t=e.sideCar,n=I(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return i.createElement(r,M({},n))};Z.isSideCarExport=!0;var q=function(){var e=0,t=null;return{add:function(r){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=a||n.nc;return t&&e.setAttribute("nonce",t),e}())){var o,i;(o=t).styleSheet?o.styleSheet.cssText=r:o.appendChild(document.createTextNode(r)),i=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(i)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},H=function(){var e=q();return function(t,n){i.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},U=function(){var e=H();return function(t){return e(t.styles,t.dynamic),null}},V={left:0,top:0,right:0,gap:0},$=function(e){return parseInt(e||"",10)||0},J=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[$(n),$(r),$(o)]},Q=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return V;var t=J(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},ee=U(),et="data-scroll-locked",en=function(e,t,n,r){var o=e.left,a=e.top,i=e.right,u=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(u,"px ").concat(r,";\n  }\n  body[").concat(et,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(u,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(F," {\n    right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(W," {\n    margin-right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(F," .").concat(F," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(W," .").concat(W," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(et,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(u,"px;\n  }\n")},er=function(){var e=parseInt(document.body.getAttribute(et)||"0",10);return isFinite(e)?e:0},eo=function(){i.useEffect(function(){return document.body.setAttribute(et,(er()+1).toString()),function(){var e=er()-1;e<=0?document.body.removeAttribute(et):document.body.setAttribute(et,e.toString())}},[])},ea=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r;eo();var a=i.useMemo(function(){return Q(o)},[o]);return i.createElement(ee,{styles:en(a,!t,o,n?"":"!important")})},ei=!1;if("undefined"!=typeof window)try{var eu=Object.defineProperty({},"passive",{get:function(){return ei=!0,!0}});window.addEventListener("test",eu,eu),window.removeEventListener("test",eu,eu)}catch(e){ei=!1}var el=!!ei&&{passive:!1},ec=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},es=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),ed(e,r)){var o=ef(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},ed=function(e,t){return"v"===e?ec(t,"overflowY"):ec(t,"overflowX")},ef=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},ev=function(e,t,n,r,o){var a,i=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),u=i*r,l=n.target,c=t.contains(l),s=!1,d=u>0,f=0,v=0;do{var p=ef(e,l),m=p[0],h=p[1]-p[2]-i*m;(m||h)&&ed(e,l)&&(f+=h,v+=m),l instanceof ShadowRoot?l=l.host:l=l.parentNode}while(!c&&l!==document.body||c&&(t.contains(l)||t===l));return d&&(o&&1>Math.abs(f)||!o&&u>f)?s=!0:!d&&(o&&1>Math.abs(v)||!o&&-u>v)&&(s=!0),s},ep=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},em=function(e){return[e.deltaX,e.deltaY]},eh=function(e){return e&&"current"in e?e.current:e},eg=0,ey=[];let eb=(r=function(e){var t=i.useRef([]),n=i.useRef([0,0]),r=i.useRef(),o=i.useState(eg++)[0],a=i.useState(U)[0],u=i.useRef(e);i.useEffect(function(){u.current=e},[e]),i.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(eh),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var l=i.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!u.current.allowPinchZoom;var o,a=ep(e),i=n.current,l="deltaX"in e?e.deltaX:i[0]-a[0],c="deltaY"in e?e.deltaY:i[1]-a[1],s=e.target,d=Math.abs(l)>Math.abs(c)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=es(d,s);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=es(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(l||c)&&(r.current=o),!o)return!0;var v=r.current||o;return ev(v,t,e,"h"===v?l:c,!0)},[]),c=i.useCallback(function(e){if(ey.length&&ey[ey.length-1]===a){var n="deltaY"in e?em(e):ep(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(u.current.shards||[]).map(eh).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?l(e,o[0]):!u.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),s=i.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),d=i.useCallback(function(e){n.current=ep(e),r.current=void 0},[]),f=i.useCallback(function(t){s(t.type,em(t),t.target,l(t,e.lockRef.current))},[]),v=i.useCallback(function(t){s(t.type,ep(t),t.target,l(t,e.lockRef.current))},[]);i.useEffect(function(){return ey.push(a),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:v}),document.addEventListener("wheel",c,el),document.addEventListener("touchmove",c,el),document.addEventListener("touchstart",d,el),function(){ey=ey.filter(function(e){return e!==a}),document.removeEventListener("wheel",c,el),document.removeEventListener("touchmove",c,el),document.removeEventListener("touchstart",d,el)}},[]);var p=e.removeScrollBar,m=e.inert;return i.createElement(i.Fragment,null,m?i.createElement(a,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,p?i.createElement(ea,{gapMode:e.gapMode}):null)},X.useMedium(r),Z);var eE=i.forwardRef(function(e,t){return i.createElement(z,M({},e,{ref:t,sideCar:eb}))});eE.classNames=z.classNames;var ew=new WeakMap,eC=new WeakMap,ex={},eR=0,eD=function(e){return e&&(e.host||eD(e.parentNode))},eS=function(e,t,n,r){var o=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=eD(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});ex[n]||(ex[n]=new WeakMap);var a=ex[n],i=[],u=new Set,l=new Set(o),c=function(e){!e||u.has(e)||(u.add(e),c(e.parentNode))};o.forEach(c);var s=function(e){!e||l.has(e)||Array.prototype.forEach.call(e.children,function(e){if(u.has(e))s(e);else try{var t=e.getAttribute(r),o=null!==t&&"false"!==t,l=(ew.get(e)||0)+1,c=(a.get(e)||0)+1;ew.set(e,l),a.set(e,c),i.push(e),1===l&&o&&eC.set(e,!0),1===c&&e.setAttribute(n,"true"),o||e.setAttribute(r,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return s(t),u.clear(),eR++,function(){i.forEach(function(e){var t=ew.get(e)-1,o=a.get(e)-1;ew.set(e,t),a.set(e,o),t||(eC.has(e)||e.removeAttribute(r),eC.delete(e)),o||e.removeAttribute(n)}),--eR||(ew=new WeakMap,ew=new WeakMap,eC=new WeakMap,ex={})}},ek=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r,o=Array.from(Array.isArray(e)?e:[e]),a=t||(r=e,"undefined"==typeof document?null:(Array.isArray(r)?r[0]:r).ownerDocument.body);return a?(o.push.apply(o,Array.from(a.querySelectorAll("[aria-live]"))),eS(o,a,n,"aria-hidden")):function(){return null}},eN=n(2317),eL="Dialog",[eA,eO]=(0,c.A)(eL),[eP,ej]=eA(eL),eT=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:a,modal:u=!0}=e,l=i.useRef(null),c=i.useRef(null),[f=!1,v]=(0,d.i)({prop:r,defaultProp:o,onChange:a});return(0,p.jsx)(eP,{scope:t,triggerRef:l,contentRef:c,contentId:(0,s.B)(),titleId:(0,s.B)(),descriptionId:(0,s.B)(),open:f,onOpenChange:v,onOpenToggle:i.useCallback(()=>v(e=>!e),[v]),modal:u,children:n})};eT.displayName=eL;var eM="DialogTrigger",eI=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=ej(eM,n),a=(0,l.s)(t,o.triggerRef);return(0,p.jsx)(f.sG.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":e1(o.open),...r,ref:a,onClick:(0,u.m)(e.onClick,o.onOpenToggle)})});eI.displayName=eM;var eF="DialogPortal",[eW,eB]=eA(eF,{forceMount:void 0}),e_=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:o}=e,a=ej(eF,t);return(0,p.jsx)(eW,{scope:t,forceMount:n,children:i.Children.map(r,e=>(0,p.jsx)(P.C,{present:n||a.open,children:(0,p.jsx)(O,{asChild:!0,container:o,children:e})}))})};e_.displayName=eF;var eG="DialogOverlay",eK=i.forwardRef((e,t)=>{let n=eB(eG,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=ej(eG,e.__scopeDialog);return a.modal?(0,p.jsx)(P.C,{present:r||a.open,children:(0,p.jsx)(eX,{...o,ref:t})}):null});eK.displayName=eG;var eX=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=ej(eG,n);return(0,p.jsx)(eE,{as:eN.DX,allowPinchZoom:!0,shards:[o.contentRef],children:(0,p.jsx)(f.sG.div,{"data-state":e1(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),eY="DialogContent",ez=i.forwardRef((e,t)=>{let n=eB(eY,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=ej(eY,e.__scopeDialog);return(0,p.jsx)(P.C,{present:r||a.open,children:a.modal?(0,p.jsx)(eZ,{...o,ref:t}):(0,p.jsx)(eq,{...o,ref:t})})});ez.displayName=eY;var eZ=i.forwardRef((e,t)=>{let n=ej(eY,e.__scopeDialog),r=i.useRef(null),o=(0,l.s)(t,n.contentRef,r);return i.useEffect(()=>{let e=r.current;if(e)return ek(e)},[]),(0,p.jsx)(eH,{...e,ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,u.m)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,u.m)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:(0,u.m)(e.onFocusOutside,e=>e.preventDefault())})}),eq=i.forwardRef((e,t)=>{let n=ej(eY,e.__scopeDialog),r=i.useRef(!1),o=i.useRef(!1);return(0,p.jsx)(eH,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var a,i;null===(a=e.onCloseAutoFocus)||void 0===a||a.call(e,t),t.defaultPrevented||(r.current||null===(i=n.triggerRef.current)||void 0===i||i.focus(),t.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:t=>{var a,i;null===(a=e.onInteractOutside)||void 0===a||a.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(o.current=!0));let u=t.target;(null===(i=n.triggerRef.current)||void 0===i?void 0:i.contains(u))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&o.current&&t.preventDefault()}})}),eH=i.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:a,...u}=e,c=ej(eY,n),s=i.useRef(null),d=(0,l.s)(t,s);return i.useEffect(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:T()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:T()),j++,()=>{1===j&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),j--}},[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(x,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:a,children:(0,p.jsx)(g,{role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":e1(c.open),...u,ref:d,onDismiss:()=>c.onOpenChange(!1)})}),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(e8,{titleId:c.titleId}),(0,p.jsx)(e4,{contentRef:s,descriptionId:c.descriptionId})]})]})}),eU="DialogTitle",eV=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=ej(eU,n);return(0,p.jsx)(f.sG.h2,{id:o.titleId,...r,ref:t})});eV.displayName=eU;var e$="DialogDescription",eJ=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=ej(e$,n);return(0,p.jsx)(f.sG.p,{id:o.descriptionId,...r,ref:t})});eJ.displayName=e$;var eQ="DialogClose",e0=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=ej(eQ,n);return(0,p.jsx)(f.sG.button,{type:"button",...r,ref:t,onClick:(0,u.m)(e.onClick,()=>o.onOpenChange(!1))})});function e1(e){return e?"open":"closed"}e0.displayName=eQ;var e2="DialogTitleWarning",[e6,e5]=(0,c.q)(e2,{contentName:eY,titleName:eU,docsSlug:"dialog"}),e8=e=>{let{titleId:t}=e,n=e5(e2),r="`".concat(n.contentName,"` requires a `").concat(n.titleName,"` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(n.titleName,"`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(n.docsSlug);return i.useEffect(()=>{t&&!document.getElementById(t)&&console.error(r)},[r,t]),null},e4=e=>{let{contentRef:t,descriptionId:n}=e,r=e5("DialogDescriptionWarning"),o="Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(r.contentName,"}.");return i.useEffect(()=>{var e;let r=null===(e=t.current)||void 0===e?void 0:e.getAttribute("aria-describedby");n&&r&&!document.getElementById(n)&&console.warn(o)},[o,t,n]),null},e3=eT,e7=eI,e9=e_,te=eK,tt=ez,tn=eV,tr=eJ,to=e0},6195:(e,t,n)=>{n.d(t,{b:()=>u});var r=n(2115),o=n(3360),a=n(5155),i=r.forwardRef((e,t)=>(0,a.jsx)(o.sG.label,{...e,ref:t,onMouseDown:t=>{var n;t.target.closest("button, input, select, textarea")||(null===(n=e.onMouseDown)||void 0===n||n.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));i.displayName="Label";var u=i}}]);