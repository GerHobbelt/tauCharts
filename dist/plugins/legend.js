/*!
 * /*
 * taucharts@2.7.0 (2019-03-08)
 * Copyright 2019 Targetprocess, Inc.
 * Licensed under Apache License 2.0
 * * /
 * 
 */
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("taucharts"),require("d3-format"));else if("function"==typeof define&&define.amd)define(["taucharts","d3-format"],t);else{var r="object"==typeof exports?t(require("taucharts"),require("d3-format")):t(e.Taucharts,e.d3);for(var a in r)("object"==typeof exports?exports:e)[a]=r[a]}}(window,function(e,t){return function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=28)}({0:function(t,r){t.exports=e},28:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),l=r(9);const i=n.a.api.utils,o=n.a.api.pluginsSDK,s=".tau-chart__legend__reset",c=".tau-chart__legend__item-color",d=".tau-chart__legend__guide--color__overlay",h=4,_=13;let u=0;const g=()=>++u,m=n.a.api.utils.xml,p=(e,t)=>{const r=e[0],a=e[1],n=(a-r)/(t-1),l=i.range(t-2).map(e=>r+n*(e+1));return[r].concat(l).concat(a)},f=(e,t,r)=>{if(e.length<3)return e.slice(0);if(t<3)return[e[0],e[e.length-1]];const a=e[0]<0?Math.abs(e[0]):0,n=e=>e,l="sqrt"===r?e=>Math.sqrt(e+a):n,o="sqrt"===r?e=>e**2-a:n;let s=[(e=e.map(l))[0]];const c=e[e.length-1]-e[0],d=.5*c/(t-1),h=i.range(1,t-1).map(e=>{const r=c*e/(t-1);return{min:r-d,mid:r,max:r+d,diff:Number.MAX_VALUE,closest:null}});let _,u=0;const g=()=>{if(u===h.length)return;const e=_;(_=h[u++]).min=Math.max(_.min,(e&&null!==e.closest?e.closest:s[0])+d)};return g(),e.forEach(e=>{if(e<_.min)return;e>_.max&&g();const t=Math.abs(e-_.mid);t<_.diff&&t<d?(_.diff=t,_.closest=e):g(),0===t&&g()}),h.forEach(e=>{null!==e.closest&&s.push(e.closest)}),s.push(e[e.length-1]),s=s.map(o)},b=e=>Math.log(e)/Math.LN10,y=e=>0===e?0:Math.floor(b(Math.abs(e))),v=(()=>{const e=/\.0+([^\d].*)?$/,t=/(\.\d+?)0+([^\d].*)?$/;return r=>r.replace(e,"$1").replace(t,"$1$2")})(),x=l.format(".3s"),S=e=>v(x(e)),T=(e,t)=>{const r=Math.max(Math.abs(e),Math.abs(t)),a=y(r),n=e*t>0?Math.abs(t-e):r,l=y(n),i=Math.abs(a-l);return Math.abs(a)>3&&i<=3?S:e=>{const t=y(r-e),a=Math.min((l<0?Math.abs(l):0)+(t<l?1:0),20);return v(e.toFixed(a))}};function w(e){let t=!0;const r=i.defaults(e||{},{formatters:{},onSelect:()=>{}}),a=e=>null===e||""===e||void 0===e,n=e=>e.every(e=>i.isDate(e)),l=(e,t)=>r=>{const n=r[e],l=JSON.stringify(a(n)?null:n);return t===l},u=(e,t,r,a)=>{e.addEventListener(t,e=>{let t=e.target;for(;t!==e.currentTarget&&null!==t;)t.matches(r)&&a(e,t),t=t.parentNode})};return{init(e){this.instanceId=g(),this._chart=e,this._currentFilters={},this._legendColorByScaleId={},this._legendOrderState={};const t=this._chart.getSpec(),a=e=>(r,a)=>{const n=t.scales[a];return n.type===e&&n.dim&&r.push(a),r};this._color=Object.keys(t.scales).reduce(a("color"),[]).filter(t=>e.getScaleInfo(t).discrete),this._fill=Object.keys(t.scales).reduce(a("color"),[]).filter(t=>!e.getScaleInfo(t).discrete),this._size=Object.keys(t.scales).reduce(a("size"),[]);const n=this._color.length>0,l=this._fill.length>0,i=this._size.length>0;if(this._assignStaticBrewersOrEx(),n||l||i){switch(r.position){case"left":this._container=this._chart.insertToLeftSidebar(this._containerTemplate);break;case"right":this._container=this._chart.insertToRightSidebar(this._containerTemplate);break;case"top":this._container=this._chart.insertToHeader(this._containerTemplate);break;case"bottom":this._container=this._chart.insertToFooter(this._containerTemplate);break;default:this._container=this._chart.insertToRightSidebar(this._containerTemplate)}n&&(u(this._container,"click",s,(e,t)=>{this._toggleLegendItem(t,"reset")}),u(this._container,"click",c,(e,t)=>{const r=e.ctrlKey||e.target.matches(d)?"leave-others":"focus-single";this._toggleLegendItem(t,r)}),u(this._container,"mouseover",c,(e,t)=>{this._highlightToggle(t,!0)}),u(this._container,"mouseout",c,(e,t)=>{this._highlightToggle(t,!1)}))}},destroy(){const e=this._currentFilters,t=this._chart;Object.keys(e).forEach(r=>t.removeFilter(e[r])),this._container&&this._container.parentElement&&(this._clearPanel(),this._container.parentElement.removeChild(this._container))},onSpecReady(e,t){this._formatters=o.getFieldFormatters(t,r.formatters)},_getFormat(e){return this._formatters[e]?this._formatters[e].format:e=>String(e)},onRender(){if(t&&r.selectedCategories&&0!==r.selectedCategories.length){let e=this._getLegendColorByScales();return Object.keys(e).forEach(t=>{e[t].legendColorItems.forEach(({value:e,dim:t})=>{if(-1===r.selectedCategories.indexOf(JSON.parse(e))){const r=t+e,a=l(t,e);this._currentFilters[r]=this._chart.addFilter({tag:"legend",predicate:e=>!a(e)})}})}),t=!1,void this._chart.refresh()}this._clearPanel(),this._drawColorLegend(),this._drawFillLegend(),this._drawSizeLegend()},_containerTemplate:'<div class="tau-chart__legend"></div>',_template:i.template(['<div class="tau-chart__legend__wrap">',"<%=top%>",'<div class="tau-chart__legend__title"><%=name%></div>',"<%=items%>","</div>"].join("")),_itemTemplate:i.template(["<div data-scale-id='<%= scaleId %>' data-dim='<%= dim %>' data-value='<%= value %>' class=\"tau-chart__legend__item tau-chart__legend__item-color <%=classDisabled%>\">",'   <div class="tau-chart__legend__guide__wrap">','   <div class="tau-chart__legend__guide tau-chart__legend__guide--color <%=cssClass%>"','        style="background-color: <%=cssColor%>; border-color: <%=borderColor%>;">','       <div class="tau-chart__legend__guide--color__overlay">',"       </div>","   </div>","   </div>",'   <span class="tau-chart__legend__guide__label"><%=label%></span>',"</div>"].join("")),_resetTemplate:i.template(['<div class="tau-chart__legend__reset <%=classDisabled%>">','    <div role="button" class="tau-chart__button">Reset</div>',"</div>"].join("")),_clearPanel(){this._container&&(clearTimeout(this._scrollTimeout),this._getScrollContainer().removeEventListener("scroll",this._scrollListener),this._container.innerHTML="")},_drawFillLegend(){const e=this;e._fill.forEach(t=>{const r=e._chart.select(e=>e.config.color===t)[0];if(r){const t=r.config.guide||{},a=r.getScale("color"),l=a.domain().sort((e,t)=>e-t),s=n(l),c=s?l.map(Number):l,d=T(c[0],c[c.length-1]),h=(()=>{const t=e._chart.getSpec();let r=o.extractFieldsFormatInfo(t)[a.dim].format;return r||(r=(e=>new Date(e))),e=>String(r(e))})(),u=s?h:d,g=a.brewer.length,f=((t.color||{}).label||{}).text||a.dim,b=e=>e.length*_*.618,y=a.isInteger?(c[1]-c[0])%3==0?4:(c[1]-c[0])%2==0?3:2:3,v=p(c,y);let x=(s?v.map(e=>new Date(e)):v).map(u);x[0]===x[x.length-1]&&(x=[x[0]]),e._container.insertAdjacentHTML("beforeend",e._template({name:i.escape(f),top:null,items:'<div class="tau-chart__legend__gradient-wrapper"></div>'}));const S=e._container.lastElementChild.querySelector(".tau-chart__legend__gradient-wrapper"),w=S.getBoundingClientRect().width;let M=!1;x.reduce((e,t)=>e+b(t),0)>w&&(x.length>1&&b(x[0])+b(x[x.length-1])>w?M=!0:x=[x[0],x[x.length-1]]);const C=20,L=M?(()=>{const e=-.382*_/2;return{width:w,height:120,barX:0,barY:0,barWidth:C,barHeight:120,textAnchor:"start",textX:i.range(y).map(()=>25),textY:1===x.length?60+.618*_:x.map((t,r)=>{const a=(x.length-1-r)/(x.length-1);return _*(1-a)+120*a+e})}})():(()=>{const e=b(x[0])/2,t=b(x[x.length-1])/2;return{width:w,height:C+8+_,barX:0,barY:0,barWidth:w,barHeight:C,textAnchor:"middle",textX:1===x.length?[w/2]:x.map((r,a)=>{const n=a/(x.length-1);return e*(1-n)+(w-t)*n}),textY:i.range(y).map(()=>C+8+_)}})(),j=p(c,g).map((e,t)=>{return m("stop",{offset:`${t/(g-1)*100}%`,style:`stop-color:${a(e)};stop-opacity:1"`})}),F=`legend-gradient-${e.instanceId}`,A=m("svg",{class:"tau-chart__legend__gradient",width:L.width,height:L.height},m("defs",m("linearGradient",{id:F,x1:"0%",y1:M?"100%":"0%",x2:M?"0%":"100%",y2:"0%"},...j)),m("rect",{class:"tau-chart__legend__gradient__bar",x:L.barX,y:L.barY,width:L.barWidth,height:L.barHeight,fill:`url(#${F})`}),...x.map((e,t)=>m("text",{x:L.textX[t],y:L.textY[t],"text-anchor":L.textAnchor},e)));S.insertAdjacentHTML("beforeend",A)}})},_drawSizeLegend(){const e=this;e._size.forEach(t=>{const r=e._chart.select(e=>e.config.size===t)[0];if(r){const t=r.config.guide||{},a=r.getScale("size"),n=a.domain().sort((e,t)=>e-t);if(!Array.isArray(n)||!n.every(isFinite))return;const l=((t.size||{}).label||{}).text||a.dim,o=n[0],s=n[n.length-1];let c=[o];if(s-o){const t=b(s-o),r=10**Math.round(4-t),n=i.unique(e._chart.getDataSources({excludeFilter:["legend"]})[a.source].data.map(e=>e[a.dim]).filter(e=>e>=o&&e<=s)).sort((e,t)=>e-t),l=f(n,h,a.funcType);c=i.unique(l.map(e=>Math.round(e*r)/r))}const d=T(c[0],c[c.length-1]),u=e=>e.length*_*.618;c.reverse();const g=c.map(a),p=Math.max.apply(null,g),y=c.map(d);e._container.insertAdjacentHTML("beforeend",e._template({name:i.escape(l),top:null,items:'<div class="tau-chart__legend__size-wrapper"></div>'}));const v=e._container.lastElementChild.querySelector(".tau-chart__legend__size-wrapper"),x=v.getBoundingClientRect().width;let S=!1;(Math.max.apply(null,y.map(u))>x/4||1===y.length)&&(S=!0);const w=S?(()=>{const e=_,t=g[0]/2,r=g[g.length-1]/2,a=[t];for(let t,r,n=1;n<g.length;n++)r=g[n-1]/2,t=g[n]/2,a.push(a[n-1]+Math.max(1.618*_,r+e+t));const n=.618*_/2;return{width:x,height:a[a.length-1]+Math.max(r,_/2),circleX:i.range(g.length).map(()=>p/2),circleY:a,textAnchor:"start",textX:i.range(y.length).map(()=>p+8),textY:a.map(e=>e+n)}})():(()=>{const e=Math.max(u(y[0])/2,g[0]/2),t=Math.max(u(y[y.length-1])/2,g[g.length-1]/2),r=(x-g.reduce((e,t,r)=>e+(0===r||r===g.length-1?t/2:t),0)-e-t)/(h-1),a=[e];for(let e,t,n=1;n<g.length;n++)t=g[n-1]/2,e=g[n]/2,a.push(a[n-1]+t+r+e);const n=g.map(e=>p-e/2);return{width:x,height:p+8+_,circleX:a,circleY:n,textAnchor:"middle",textX:a,textY:i.range(y.length).map(()=>p+8+_)}})(),M=m("svg",{class:"tau-chart__legend__size",width:w.width,height:w.height},...g.map((e,t)=>m("circle",{class:`tau-chart__legend__size__item__circle ${r.config.color?"color-definite":"color-default-size"}`,cx:w.circleX[t],cy:w.circleY[t],r:e/2})),...y.map((e,t)=>m("text",{class:"tau-chart__legend__size__item__label",x:w.textX[t],y:w.textY[t],"text-anchor":w.textAnchor},e)));v.insertAdjacentHTML("beforeend",M)}})},_getLegendColorByScales(){const e=this;return e._color.reduce((t,r)=>{const l=e._chart.select(e=>e.config.color===r)[0];if(l){const o=l.config.guide||{},s=l.getScale("color"),c=e._chart.getDataSources({excludeFilter:["legend"]});let d=i.unique(c[s.source].data.map(e=>e[s.dim]));const h=e._chart.getSpec().scales[r],_=n(d);if(h.order)d=i.union(i.intersection(h.order,d),d);else if("order"===h.dimType&&_)d=d.sort((e,t)=>new Date(e)-new Date(t));else{const t=e._legendOrderState[r];d=d.sort((e,r)=>{const a=t[e]-t[r];return a&&a/Math.abs(a)})}const u=((o.color||{}).label||{}).text||s.dim,g=(o.color||{}).tickFormatNullAlias||`No ${u}`,m=e._getFormat(s.dim);let p=d.map(t=>{const n=JSON.stringify(a(t)?null:t),l=s.dim+n;return{scaleId:r,dim:s.dim,color:s(t),disabled:e._currentFilters.hasOwnProperty(l),label:m(t),value:n}});t[r]={legendColorItems:p,title:u,colorScale:s,noVal:g}}return t},{})},_drawColorLegend(){const e=this,t=this._getLegendColorByScales();Object.keys(t).forEach(r=>{const{legendColorItems:n,title:l,colorScale:o,noVal:s}=t[r];e._container.insertAdjacentHTML("beforeend",e._template({name:i.escape(l),top:e._resetTemplate({classDisabled:n.some(function(e){return e.disabled})?"":"disabled"}),items:n.map(function(t){return e._itemTemplate({scaleId:t.scaleId,dim:i.escape(t.dim),color:t.color,cssClass:o.toClass(t.color),cssColor:t.disabled?"transparent":o.toColor(t.color),borderColor:o.toColor(t.color),classDisabled:t.disabled?"disabled":"",label:i.escape(a(t.label)?s:t.label),value:i.escape(t.value)})}).join("")}))}),e._color.length>0&&(e._updateResetButtonPosition(),e._scrollTimeout=null,e._scrollListener=(()=>{const t=e._container.querySelector(s);t.style.display="none",e._scrollTimeout&&clearTimeout(e._scrollTimeout),e._scrollTimeout=setTimeout(()=>{e._updateResetButtonPosition(),t.style.display="",e._scrollTimeout=null},250)}),e._getScrollContainer().addEventListener("scroll",e._scrollListener))},_toggleLegendItem(e,t){const a=this._currentFilters,n=e?Array.prototype.filter.call(e.parentNode.childNodes,e=>e.matches(c)):null,i=e=>{const t=e.getAttribute("data-dim"),r=e.getAttribute("data-value");return{sid:e.getAttribute("data-scale-id"),dim:t,val:r,key:t+r}},o=e=>e in a,s=(e,t)=>{const r=i(e);if(o(r.key)===t)if(t){const t=a[r.key];delete a[r.key],e.classList.remove("disabled"),this._chart.removeFilter(t)}else{e.classList.add("disabled");const t=l(r.dim,r.val);a[r.key]=this._chart.addFilter({tag:"legend",predicate:e=>!t(e)})}},d=t=>t===e,h=!!e&&o(i(e).key),_=(e,t)=>{e.querySelector(".tau-chart__legend__guide").style.backgroundColor=t?"":"transparent"};if("reset"===t)n.forEach(e=>{s(e,!0),_(e,!0)});else if("leave-others"===t)n.forEach(e=>{d(e)&&s(e,h)}),_(e,h);else if("focus-single"===t){const t=!h&&n.every(e=>d(e)||o(i(e).key));n.forEach(e=>{const r=d(e)||t;s(e,r)}),h&&_(e,!0)}const u=n.filter(e=>!o(i(e).key)).map(e=>JSON.parse(i(e).val));r.onSelect({type:t,selectedCategories:u}),this._chart.refresh()},_highlightToggle(e,t){if(e.matches(".disabled"))return;const r=e.getAttribute("data-dim"),a=e.getAttribute("data-value"),n=t?l(r,a):e=>null;this._chart.select(e=>!0).forEach(e=>{e.fire("highlight",n)})},_getScrollContainer(){return this._container.parentNode.parentNode},_updateResetButtonPosition(){this._container.querySelector(s).style.top=`${this._getScrollContainer().scrollTop}px`},_generateColorMap(e,t){const r=t.length;return e.reduce((e,a,n)=>(e[a]=t[n%r],e),{})},_assignStaticBrewersOrEx(){const e=this;e._color.forEach(t=>{const r=e._chart.getSpec().scales[t],a=e._chart.getDataSources({excludeFilter:["legend"]}),n=e._chart.getScaleFactory(a).createScaleInfoByName(t).domain();if(!r.brewer||Array.isArray(r.brewer)){const t=r.brewer||i.range(20).map(e=>`color20-${1+e}`);r.brewer=e._generateColorMap(n,t)}e._legendOrderState[t]=n.reduce((e,t,r)=>(e[t]=r,e),{})})}}}n.a.api.plugins.add("legend",w),t.default=w},9:function(e,r){e.exports=t}})});