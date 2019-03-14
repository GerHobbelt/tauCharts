/*!
 * /*
 * taucharts@2.7.1 (2019-03-14)
 * Copyright 2019 Targetprocess, Inc.
 * Licensed under Apache License 2.0
 * * /
 * 
 */
!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("taucharts"),require("d3-selection"),require("d3-array"),require("d3-brush"),require("d3-scale"),require("d3-time-format"));else if("function"==typeof define&&define.amd)define(["taucharts","d3-selection","d3-array","d3-brush","d3-scale","d3-time-format"],e);else{var r="object"==typeof exports?e(require("taucharts"),require("d3-selection"),require("d3-array"),require("d3-brush"),require("d3-scale"),require("d3-time-format")):e(t.Taucharts,t.d3,t.d3,t.d3,t.d3,t.d3);for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}(window,function(t,e,r,n,i,a){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=31)}({0:function(e,r){e.exports=t},1:function(t,r){t.exports=e},10:function(t,e){t.exports=n},11:function(t,e){t.exports=i},12:function(t,e){t.exports=a},31:function(t,e,r){"use strict";r.r(e);var n=r(0),i=r.n(n),a=r(4),s=r(10),o=r(11),l=r(1),u=r(12),c=function(){return(c=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},f=c({},a,s,o,l,u),d=i.a.api.utils,h=0;function p(t){void 0===t&&(t={});return{init:function(e){this._chart=e,this._currentFilters={},this._data={},this._bounds={},this._filter={},this._container={},this._layout=this._chart.getLayout().layout;var r=this,n=this._chart.getSpec(),i=n.sources["/"],a=t.fields||t;this._fields=Array.isArray(a)&&a.length>0?a:Object.keys(i.dims),this._fieldBounds=t.fieldBounds||{},this._applyImmediately=Boolean(t.applyImmediately);var s=r._chart.getChartModelData();this._filtersContainer=r._chart.insertToRightSidebar(r._filtersContainer),this._filtersContainer.style.maxHeight="0px",r._fields.filter(function(t){var e="measure"===i.dims[t].type;return e||n.settings.log("The ["+t+"] isn't measure so Quick Filter plugin skipped it"),e}).forEach(function(t){r._data[t]=s.map(function(e){return e[t]});var e=r._fieldBounds[t];r._bounds[t]=e?[e.min,e.max]:f.extent(r._data[t]),r._filter[t]=r._bounds[t],r._filtersContainer.insertAdjacentHTML("beforeend",r._filterWrapper({name:t})),r._container[t]=r._filtersContainer.lastChild,r._drawFilter(t)})},onRender:function(){this._filtersContainer.style.maxHeight="none"},_filtersContainer:'<div class="tau-chart__filter"></div>',_filterWrapper:d.template('<div class="tau-chart__filter__wrap"><div class="tau-chart__legend__title"><%=name%></div></div>'),_drawFilter:function(t){var e=this._data[t],r=this._bounds[t],n=this._filter[t],i=d.isDate(r[0])||d.isDate(r[1]),a=this,s=0,o=24,u=21,c=12,h=180-c-o,p=41-s-u-8,m=f.scaleLinear().domain(r).range([0,h]),_=f.brushX().extent([[0,0],[h,20]]).on("start",function(){a._layout.style["overflow-y"]="hidden"}).on("brush",this._applyImmediately?F:q).on("end",function(){a._layout.style["overflow-y"]="",F()}),y=f.select(this._container[t]).append("svg").attr("width",h+c+o).attr("height",p+s+u+4).append("g").attr("transform","translate("+c+","+s+")"),v=(y.append("g").selectAll("rect").data(e).enter().append("rect").attr("transform",function(t){return"translate("+m(t)+","+(s+4)+")"}).attr("height",p).attr("width",1),y.append("g").attr("class","brush").call(_));v.append("g").attr("class","resize e").attr("cursor","ew-resize").attr("pointer-events","none"),v.append("g").attr("class","resize w").attr("cursor","ew-resize").attr("pointer-events","none"),v.selectAll(".resize").append("line").attr("transform","translate(0, 0)").attr("x1",0).attr("x2",0).attr("y1",0).attr("y2",p+8),v.selectAll(".resize").append("text").attr("x",0).attr("y",2*(p+4)),v.selectAll("rect").attr("height",p+8);var g=y.append("text").attr("x",h/2).attr("y",2*(p+4)).attr("class","date-label"),b=function(t){return Math.log(t)/Math.LN10}(a._filter[t][1]-a._filter[t][0]),x=Math.round(3-b),w=Math.pow(10,x);if(i){var j=function(t){var e=t.findIndex(function(t){var e=f.timeFormat(t);return e(new Date(r[0]))!==e(new Date(r[1]))});return e=e<0?t.length:e,{comm:t.slice(0,e),diff:t.slice(e)}}(["’%y","&thinsp;%b","%d","%H",":%M",":%S"]);j.comm.length<3?(j.diff.splice(-3),j.diff.reverse(),j.comm.reverse()):(j.comm.length<5&&j.diff.pop(),j.diff=j.comm.splice(3,j.comm.length-3).concat(j.diff),j.comm.reverse())}function q(){var e=l.event;if(e&&Array.isArray(e.selection)){var r=e.selection.map(m.invert);n=r,a._filter[t]=r}else n=a._filter[t];var s=i?new Date(n[0]).getTime():n[0],o=i?new Date(n[1]).getTime():n[1],u=Math.round(parseFloat(s)*w)/w,c=Math.round(parseFloat(o)*w)/w;v.select(".handle--w"),v.select(".handle--e");v.select(".resize.w").attr("transform","translate("+m(n[0])+",0)"),v.select(".resize.e").attr("transform","translate("+m(n[1])+",0)");var d=v.selectAll(".w text"),h=v.selectAll(".e text");if(i){var p=f.timeFormat(j.comm.join("")),_=f.timeFormat(j.diff.join(""));g.html(_(new Date(u))+"&thinsp;..&thinsp;"+_(new Date(c))+' <tspan class="common">'+p(new Date(c))+"</tspan>")}else d.text(u),h.text(c)}function F(){q(),a._applyFilter(t)}F(),_.move(v,n.map(m))},destroy:function(){var t=this._currentFilters,e=this._chart;Object.keys(t).forEach(function(r){return e.removeFilter(t[r])});var r;(r=this._filtersContainer)&&r.parentElement&&r.parentElement.removeChild(r)},_applyFilter:function(t){var e=this._currentFilters,r=function(t,e,r){return function(n){var i=n[t];return i<e||i>r}}(t,this._filter[t][0],this._filter[t][1]),n=e[t];delete e[t],this._chart.removeFilter(n),e[t]=this._chart.addFilter({tag:"quick-filter",predicate:function(t){return!r(t)}}),h<0?this._chart.refresh():(this._refreshRequestId&&clearTimeout(this._refreshRequestId),this._refreshRequestId=setTimeout(function(){this._refreshRequestId=null,this._chart.refresh()}.bind(this),h))}}}i.a.api.plugins.add("quick-filter",p),e.default=p},4:function(t,e){t.exports=r}})});