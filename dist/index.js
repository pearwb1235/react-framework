!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("@mui/material"),require("react"));else if("function"==typeof define&&define.amd)define(["@mui/material","React"],t);else{var r="object"==typeof exports?t(require("@mui/material"),require("react")):t(e["@mui/material"],e.React);for(var o in r)("object"==typeof exports?exports:e)[o]=r[o]}}(global,((e,t)=>(()=>{var r={901:t=>{"use strict";t.exports=e},639:e=>{"use strict";e.exports=t},897:e=>{e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o},e.exports.__esModule=!0,e.exports.default=e.exports},372:e=>{e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},405:(e,t,r)=>{var o=r(897);e.exports=function(e){if(Array.isArray(e))return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},416:(e,t,r)=>{var o=r(62);e.exports=function(e,t,r){return(t=o(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},434:e=>{function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},498:e=>{e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},872:e=>{e.exports=function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o,n,l,i,a=[],u=!0,s=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(o=l.call(r)).done)&&(a.push(o.value),a.length!==t);u=!0);}catch(e){s=!0,n=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw n}}return a}},e.exports.__esModule=!0,e.exports.default=e.exports},218:e=>{e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},281:e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},215:(e,t,r)=>{var o=r(71);e.exports=function(e,t){if(null==e)return{};var r,n,l=o(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l},e.exports.__esModule=!0,e.exports.default=e.exports},71:e=>{e.exports=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n},e.exports.__esModule=!0,e.exports.default=e.exports},424:(e,t,r)=>{var o=r(372),n=r(872),l=r(116),i=r(218);e.exports=function(e,t){return o(e)||n(e,t)||l(e,t)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},861:(e,t,r)=>{var o=r(405),n=r(498),l=r(116),i=r(281);e.exports=function(e){return o(e)||n(e)||l(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},36:(e,t,r)=>{var o=r(698).default;e.exports=function(e,t){if("object"!==o(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},62:(e,t,r)=>{var o=r(698).default,n=r(36);e.exports=function(e){var t=n(e,"string");return"symbol"===o(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},698:e=>{function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},116:(e,t,r)=>{var o=r(897);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}},o={};function n(e){var t=o[e];if(void 0!==t)return t.exports;var l=o[e]={exports:{}};return r[e](l,l.exports,n),l.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var l={};return(()=>{"use strict";n.r(l),n.d(l,{Actions:()=>p,AlertContext:()=>d,AlertModal:()=>f,AlertProvider:()=>m,useAlert:()=>M});var e=n(434),t=n.n(e),r=n(215),o=n.n(r),i=n(901),a=n(639),u=n.n(a),s=["actions"],c=["text","component"];function p(e){var r=e.actions,n=o()(e,s);return u().createElement(u().Fragment,null,Object.keys(r).map((function(e,l,a){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r[e],p=s.text,f=s.component,d=o()(s,c);return u().createElement(i.Button,t()({key:e},n,d),f||p||e)})))}function f(e){var r=e.data,o=e.onClose;return u().createElement(i.Dialog,{open:Boolean(r),fullWidth:!0,maxWidth:"xs"},u().createElement(i.DialogTitle,null,null==r?void 0:r.title),u().createElement(i.DialogContent,null,u().createElement(i.DialogContentText,null,null==r?void 0:r.content)),u().createElement(i.DialogActions,null,null!=r&&r.actions?u().createElement(p,t()({actions:r.actions,onClick:o},r.buttonProps)):null))}var d=u().createContext(void 0),x=n(861),v=n.n(x),y=n(424),b=n.n(y);function m(e){var t=e.defualtAlertData,r=e.children,o=u().useState([]),n=b()(o,2),l=n[0],i=n[1],a=u().useCallback((function(e){var t=!1,r=function(){t||(t=!0,i((function(t){return t.filter((function(t){return t.data!==e}))})))};return i((function(t){return[].concat(v()(t),[{onClose:r,data:e}])})),r}),[]),s=0===l.length?void 0:l[l.length-1];return u().createElement(d.Provider,{value:u().useMemo((function(){return{defualtAlertData:t?{title:t.title?t.title:"Notification",actions:t.actions?t.actions:{Confirm:{variant:"contained"}},buttonProps:t.buttonProps}:{title:"Notification",actions:{Confirm:{variant:"contained"}}},alertDispatch:a}}),[t,a])},r,u().createElement(f,{data:null==s?void 0:s.data,onClose:null==s?void 0:s.onClose}))}var g=n(416),h=n.n(g),_=n(698),O=n.n(_);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){h()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function M(){var e=u().useContext(d);if(!e)throw new Error("[useAlert] Must be used within a AlertProvider.");var t=e.alertDispatch,r=e.defualtAlertData;return u().useCallback((function(){try{if(1===arguments.length&&"object"===O()(arguments.length<=0?void 0:arguments[0]))return t(arguments.length<=0?void 0:arguments[0]);if(1===arguments.length&&"string"==typeof(arguments.length<=0?void 0:arguments[0]))return t(w(w({},r),{},{content:arguments.length<=0?void 0:arguments[0]}));if(2===arguments.length&&"object"===O()(arguments.length<=1?void 0:arguments[1]))return t(w(w({},r),{},{content:arguments.length<=0?void 0:arguments[0],actions:arguments.length<=1?void 0:arguments[1]}));if(2===arguments.length&&"string"==typeof(arguments.length<=1?void 0:arguments[1]))return t(w(w({},r),{},{title:arguments.length<=0?void 0:arguments[0],content:arguments.length<=1?void 0:arguments[1]}));if(3===arguments.length)return t(w(w({},r),{},{title:arguments.length<=0?void 0:arguments[0],content:arguments.length<=1?void 0:arguments[1],actions:arguments.length<=2?void 0:arguments[2]}));throw new Error("[useAlert] Invalid call with mismatched number or types of arguments.")}catch(e){console.error(e)}throw new Error("[useAlert] An internal error occurred while handling the exception.")}),[t])}})(),l})()));