/*!
 * /*
 * taucharts@2.7.1 (2019-03-14)
 * Copyright 2019 Targetprocess, Inc.
 * Licensed under Apache License 2.0
 * * /
 * 
 */
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("taucharts"));else if("function"==typeof define&&define.amd)define(["taucharts"],t);else{var n="object"==typeof exports?t(require("taucharts")):t(e.Taucharts);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=32)}({0:function(t,n){t.exports=e},32:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=o.a.api.utils;function s(e){var t=i.defaults(e||{},{show:!0,modes:["normal","entire-view","fit-width","fit-height","minimal"]});return{init:function(e){t.show&&(t.selectedMode=e.getSpec().settings.fitModel,e.insertToHeader(this.template({modes:t.modes.map(function(e){return"<option "+(t.selectedMode===e?"selected":"")+' value="'+e+'">'+e+"</option>"})})).addEventListener("change",function(n){var r=n.target;r.classList.contains("i-role-fit-model")&&(t.selectedMode=r.value,e.getSpec().settings.fitModel=t.selectedMode,e.refresh())},!1))},template:i.template(['<div class="tau-chart__chartsettingspanel">',"    <div>","        <span>View Mode:&nbsp;</span>",'        <select class="i-role-fit-model tau-chart__select">',"        <%= modes %> />","        </select>","    </div>","</div>"].join(""))}}o.a.api.plugins.add("settings",s),t.default=s}})});