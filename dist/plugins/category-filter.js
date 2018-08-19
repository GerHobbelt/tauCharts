/*!
 * /*
 * taucharts@2.5.1 (2018-08-19)
 * Copyright 2018 Targetprocess, Inc.
 * Licensed under Apache License 2.0
 * * /
 * 
 */
!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("taucharts"));else if("function"==typeof define&&define.amd)define([],e);else{var r="object"==typeof exports?e(require("taucharts")):e(t.Taucharts);for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}(window,function(t){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=17)}({0:function(e,r){e.exports=t},17:function(t,e,r){"use strict";r.r(e),r.d(e,"default",function(){return y});var n=r(0),i=r.n(n),o=i.a.api.utils,a=i.a.api.pluginsSDK,u="tau-chart__category-filter",c=u+"__value",l=c+"_checked",s=c+"__toggle",f=function(t){return t.join("\n")},d=function(t){var e=t.label,r=t.values;return'\n    <div class="'+u+'__category">\n        <div class="'+u+'__category__label">'+e+'</div>\n        <div class="'+u+'__category__values">\n            '+f(r.map(function(t){return _(t)}))+"\n    </div>\n\n"},_=function(t){var e=t.key,r=t.label,n=t.checked;return'\n    <div class="'+c+(n?" "+l:"")+'" data-key="'+e+'">\n        '+h()+'\n        <span class="'+c+'__label">'+r+"</span>\n    </div>\n"},h=function(){return['<span class="'+s+'">','<span class="'+s+'__icon"></span>',"</span>"].join("")},p=function(t,e,r,n){t.addEventListener(e,function(t){for(var e=t.target;e!==t.currentTarget&&null!==e;)e.matches(r)&&n(t,e),e=e.parentNode})},g=function(t,e){var r=function(t){return JSON.stringify(function(t){return null==t||""===t}(t)?null:t)},n=r(e);return function(e){var i=e[t],o=r(i);return n===o}},v=function(){function t(t){this.settings=o.defaults(t||{},{formatters:{},fields:null,skipColorDim:!0}),this._filters={},this.onRender=this._createRenderHandler()}return t.prototype.init=function(t){var e=this;this._chart=t;var r=function(e){var r=t.getSpec().scales;return Object.keys(r).map(function(t){return{name:t,config:r[t]}}).filter(e)},n=r(function(t){var e=t.config;t.name;return"ordinal"===e.type&&e.dim}),i=o.unique(n.map(function(t){return t.config.dim}));if(this.settings.fields&&(i=i.filter(function(t){return e.settings.fields.indexOf(t)>=0})),this.settings.skipColorDim){var a=r(function(t){var e=t.config;t.name;return"color"===e.type&&e.dim}).map(function(t){return t.config.dim});i=i.filter(function(t){return a.indexOf(t)<0})}n=n.filter(function(t){return i.indexOf(t.config.dim)>=0}),this._categoryScales=n,this._render()},t.prototype.destroy=function(){var t=this._filters,e=this._chart;Object.keys(t).forEach(function(r){return e.removeFilter(t[r])});!function(t){t&&t.parentElement&&t.parentElement.removeChild(t)}(this._node)},t.prototype._createRenderHandler=function(){return function(){if(this._lastClickedScrollInfo){var t=this._lastClickedScrollInfo.key,e=this._node.querySelector('[data-key="'+t+'"]');if(e){var r=this._lastClickedScrollInfo.top,n=e.getBoundingClientRect().top,i=this._getScrollContainer(),o=i.getBoundingClientRect().top;i.scrollTop=i.scrollTop-r-o+n}this._lastClickedScrollInfo=null}}},t.prototype._getContent=function(t){return function(t){var e=t.categories;return'\n    <div class="'+u+'">\n        '+f(e.map(function(t){return d(t)}))+"\n    </div>\n"}({categories:t})},t.prototype._getCategoriesInfo=function(){var t=this;return this._categoryScales.map(function(e){var r=e.name;return t._chart.getScaleInfo(r)}).map(function(e){var r=e.dim,n=t._getFieldLabel(r),i=t._getFieldFormat(r),a=t._chart.getDataSources({excludeFilter:["category-filter"]}),u=o.unique(a[e.source].data.map(function(t){return t[r]})).map(function(e){var n=i(e),o=t._getFilterKey(r,e);return{label:n,checked:!t._filters[o],key:o,value:e}});return{dim:r,label:n,values:u}})},t.prototype._render=function(){this._clear(),this._formatters=a.getFieldFormatters(this._chart.getSpec(),this.settings.formatters);var t=this._getCategoriesInfo(),e=function(t){var e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}(this._getContent(t));this._node=e,this._chart.insertToRightSidebar(e),this._subscribeToEvents(),this._filterKeys=t.reduce(function(t,e){var r=e.dim;return e.values.forEach(function(e){var n=e.key,i=e.value;t[n]={dim:r,value:i}}),t},{})},t.prototype._subscribeToEvents=function(){var t=this,e=this._node;p(e,"click","."+c,function(e,r){var n=r.getAttribute("data-key"),i=e.target.matches("."+s);t._toggleCategory(n,i?"toggle":"focus")}),p(e,"mouseover","."+c,function(e,r){var n=r.getAttribute("data-key");t._toggleHighlight(n,!0)}),p(e,"mouseout","."+c,function(e,r){var n=r.getAttribute("data-key");t._toggleHighlight(n,!1)})},t.prototype._isFilteredOut=function(t){return t in this._filters},t.prototype._toggleCategory=function(t,e){var r=this,n=Array.from(this._node.querySelectorAll("."+c)).reduce(function(t,e){return t[e.getAttribute("data-key")]=e,t},{}),i=Object.keys(this._filterKeys).map(function(t){var e=r._filterKeys[t],i=e.dim,o=e.value;return{node:n[t],key:t,dim:i,value:o,isChecked:!r._isFilteredOut(t)}}),o=i.reduce(function(t,e){return t[e.key]=e,t},{})[t],a=i.filter(function(t){return t.dim===o.dim}),u=function(t,e){e?t.classList.add(l):t.classList.remove(l)};switch(e){case"toggle":o.isChecked?(this._addFilter(t),u(o.node,!1)):(this._removeFilter(t),u(o.node,!0));break;case"focus":o.isChecked&&a.every(function(t){return t===o||!t.isChecked})?a.forEach(function(t){t.isChecked||(u(t.node,!0),r._removeFilter(t.key))}):(a.forEach(function(t){t!==o&&t.isChecked&&(u(t.node,!1),r._addFilter(t.key))}),o.isChecked||(u(o.node,!0),this._removeFilter(o.key)))}this._lastClickedScrollInfo={key:t,top:o.node.getBoundingClientRect().top-this._getScrollContainer().getBoundingClientRect().top},this._chart.refresh()},t.prototype._toggleHighlight=function(t,e){if(!this._isFilteredOut(t)){var r=this._filterKeys[t],n=r.dim,i=r.value,o=e?g(n,i):function(t){return null};this._chart.select(function(t){return!0}).forEach(function(t){return t.fire("highlight",o)})}},t.prototype._clear=function(){var t=this._node;t&&t.parentElement&&t.parentElement.removeChild(t)},t.prototype._getScrollContainer=function(){return this._node.parentElement.parentElement},t.prototype._getFilterKey=function(t,e){return t+"__"+e},t.prototype._addFilter=function(t){var e=this._filterKeys[t],r=e.dim,n=e.value,i=g(r,n);this._filters[t]=this._chart.addFilter({tag:"category-filter",predicate:function(t){return!i(t)}})},t.prototype._removeFilter=function(t){var e=this._filters[t];delete this._filters[t],this._chart.removeFilter(e)},t.prototype._getFieldLabel=function(t){return this._formatters[t]?this._formatters[t].label:t},t.prototype._getFieldFormat=function(t){return this._formatters[t]?this._formatters[t].format:function(t){return String(t)}},t}();function y(t){return new v(t)}i.a.api.plugins.add("category-filter",y)}})});