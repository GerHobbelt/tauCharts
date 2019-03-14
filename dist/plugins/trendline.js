/*!
 * /*
 * taucharts@2.7.1 (2019-03-14)
 * Copyright 2019 Targetprocess, Inc.
 * Licensed under Apache License 2.0
 * * /
 * 
 */
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("taucharts"),require("d3-selection"));else if("function"==typeof define&&define.amd)define(["taucharts","d3-selection"],t);else{var n="object"==typeof exports?t(require("taucharts"),require("d3-selection")):t(e.Taucharts,e.d3);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,function(e,t){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=34)}({0:function(t,n){t.exports=e},1:function(e,n){e.exports=t},34:function(e,t,n){"use strict";n.r(t);var r,a=n(0),i=n.n(a),o=n(1),s=(r={linear:function(e){for(var t=[0,0,0,0,0],n=0,r=[];n<e.length;n++)e[n][1]&&(t[0]+=e[n][0],t[1]+=e[n][1],t[2]+=e[n][0]*e[n][0],t[3]+=e[n][0]*e[n][1],t[4]+=e[n][1]*e[n][1]);var a=(n*t[3]-t[0]*t[1])/(n*t[2]-t[0]*t[0]);a=isNaN(a)?0:a;for(var i=t[1]/n-a*t[0]/n,o=0,s=e.length;o<s;o++){var l=[e[o][0],e[o][0]*a+i];r.push(l)}return{equation:[a,i],points:r,string:"y = "+Math.round(100*a)/100+"x + "+Math.round(100*i)/100}},exponential:function(e){var t=[0,0,0,0,0,0],n=0,r=[];for(l=e.length;n<l;n++)e[n][1]&&(t[0]+=e[n][0],t[1]+=e[n][1],t[2]+=e[n][0]*e[n][0]*e[n][1],t[3]+=e[n][1]*Math.log(e[n][1]),t[4]+=e[n][0]*e[n][1]*Math.log(e[n][1]),t[5]+=e[n][0]*e[n][1]);for(var a=t[1]*t[2]-t[5]*t[5],i=Math.pow(Math.E,(t[2]*t[3]-t[5]*t[4])/a),o=(t[1]*t[4]-t[5]*t[3])/a,s=0,l=e.length;s<l;s++){var u=[e[s][0],i*Math.pow(Math.E,o*e[s][0])];r.push(u)}return{equation:[i,o],points:r,string:"y = "+Math.round(100*i)/100+"e^("+Math.round(100*o)/100+"x)"}},logarithmic:function(e){var t=[0,0,0,0],n=0,r=[];for(s=e.length;n<s;n++)e[n][1]&&(t[0]+=Math.log(e[n][0]),t[1]+=e[n][1]*Math.log(e[n][0]),t[2]+=e[n][1],t[3]+=Math.pow(Math.log(e[n][0]),2));for(var a=(n*t[1]-t[2]*t[0])/(n*t[3]-t[0]*t[0]),i=(t[2]-a*t[0])/n,o=0,s=e.length;o<s;o++){var l=[e[o][0],i+a*Math.log(e[o][0])];r.push(l)}return{equation:[i,a],points:r,string:"y = "+Math.round(100*i)/100+" + "+Math.round(100*a)/100+" ln(x)"}},power:function(e){var t=[0,0,0,0],n=0,r=[];for(s=e.length;n<s;n++)e[n][1]&&(t[0]+=Math.log(e[n][0]),t[1]+=Math.log(e[n][1])*Math.log(e[n][0]),t[2]+=Math.log(e[n][1]),t[3]+=Math.pow(Math.log(e[n][0]),2));for(var a=(n*t[1]-t[2]*t[0])/(n*t[3]-t[0]*t[0]),i=Math.pow(Math.E,(t[2]-a*t[0])/n),o=0,s=e.length;o<s;o++){var l=[e[o][0],i*Math.pow(e[o][0],a)];r.push(l)}return{equation:[i,a],points:r,string:"y = "+Math.round(100*i)/100+"x^"+Math.round(100*a)/100}},polynomial:function(e,t){void 0===t&&(t=2);for(var n=[],r=[],a=[],i=0,o=0,s=0,l=t+1;s<l;s++){for(var u=0,c=e.length;u<c;u++)e[u][1]&&(i+=Math.pow(e[u][0],s)*e[u][1]);n.push(i),i=0;for(var h=[],p=0;p<l;p++){for(u=0,c=e.length;u<c;u++)e[u][1]&&(o+=Math.pow(e[u][0],s+p));h.push(o),o=0}r.push(h)}r.push(n);var f=function(e,t){var n=0,r=0,a=0,i=0,o=0,s=e.length-1,l=new Array(t);for(n=0;n<s;n++){for(i=n,r=n+1;r<s;r++)Math.abs(e[n][r])>Math.abs(e[n][i])&&(i=r);for(a=n;a<s+1;a++)o=e[a][n],e[a][n]=e[a][i],e[a][i]=o;for(r=n+1;r<s;r++)for(a=s;a>=n;a--)e[a][r]-=e[a][n]*e[n][r]/e[n][n]}for(r=s-1;r>=0;r--){for(o=0,a=r+1;a<s;a++)o+=e[a][r]*l[a];l[r]=(e[s][r]-o)/e[r][r]}return l}(r,l);for(s=0,c=e.length;s<c;s++){for(var d=0,g=0;g<f.length;g++)d+=f[g]*Math.pow(e[s][0],g);a.push([e[s][0],d])}var v="y = ";for(s=f.length-1;s>=0;s--)v+=s>1?Math.round(100*f[s])/100+"x^"+s+" + ":1==s?Math.round(100*f[s])/100+"x + ":Math.round(100*f[s])/100;return{equation:f,points:a,string:v}},lastvalue:function(e){for(var t=[],n=null,r=0;r<e.length;r++)e[r][1]?(n=e[r][1],t.push([e[r][0],e[r][1]])):t.push([e[r][0],n]);return{equation:[n],points:t,string:""+n}},loess:function(e){return{equation:"loess",points:(t=e,n=.5,r=t.map(function(e){return e[0]}),a=function(e,t,n){function r(e){var t=1-e*e*e;return t*t*t}for(var a=[],i=0,o=Math.floor(n*e.length)-1,s=0;s<e.length;s++){var l,u=e[s];s>0&&o<e.length-1&&e[o+1]-e[s]<e[s]-e[i]&&(i++,o++),l=e[s]-e[i]>e[o]-e[s]?i:o;for(var c=Math.abs(1/(e[l]-u)),h=0,p=0,f=0,d=0,g=0,v=i;v<=o;){var _=e[v],m=t[v],y=r((v<s?u-_:_-u)*c),M=_*y;h+=y,p+=M,f+=_*M,d+=m*y,g+=m*M,v++}var b,x=p/h,E=d/h,w=g/h,T=f/h,j=E-(b=T==x*x?0:(w-x*E)/(T-x*x))*x;a[s]=b*u+j}return a}(r,t.map(function(e){return e[1]}),n),r.map(function(e,t){return[e,a[t]]})),string:"loess"};var t,n,r,a}},function(e,t,n){if("string"==typeof e)return r[e](t,n)}),l=i.a.api.utils;function u(e){var t=l.defaults(e||{},{type:"linear",hideError:!1,showPanel:!0,showTrend:!0,models:["linear","exponential","logarithmic"]});return{init:function(e){if(this._chart=e,this._applicableElements=["ELEMENT.POINT","ELEMENT.LINE","ELEMENT.AREA","ELEMENT.INTERVAL"],this._isApplicable=this.checkIfApplicable(e),t.showPanel){this._container=e.insertToRightSidebar(this.containerTemplate);var n="applicable-true";this._isApplicable||(n="applicable-false",this._error=["Trend line can't be computed for categorical data.","Each axis should be either a measure or a date."].join(" ")),this._container.classList.add(n),t.hideError&&this._container.classList.add("hide-trendline-error"),this.uiChangeEventsDispatcher=function(e){var n=e.target,r=n.classList;r.contains("i-role-show-trend")&&(t.showTrend=n.checked),r.contains("i-role-change-model")&&(t.type=n.value),this._chart.refresh()}.bind(this),this._container.addEventListener("change",this.uiChangeEventsDispatcher,!1)}},checkIfApplicable:function(e){var t=this,n=e.getSpec(),r=!1;return e.traverseSpec(n,function(e,a){t.predicateIsApplicable(n,e,a)&&(r=!0)}),r},predicateIsApplicable:function(e,t,n){if(n&&"COORDS.RECT"!==n.type)return!1;if(n&&!n.units)return!1;if(-1===this._applicableElements.indexOf(t.type)||t.stack||"chart"!==t.namespace)return!1;var r=e.scales[t.x],a=e.scales[t.y];return!("ordinal"===r.type||"ordinal"===a.type)},onSpecReady:function(e,n){var r=this;if(t.showTrend){var a=i.a.api.tickPeriod,o=function(e){var t=a.get(e,{utc:n.settings.utcTime});return function(e){return t.cast(new Date(e))}};n.transformations=n.transformations||{},n.transformations.regression=function(e,t){var n=t.x.dim,r=t.y.dim,a=t.g.dim,i=Boolean(t.x.period),u=Boolean(t.y.period),c=i?o(t.x.period):function(e){return e},h=u?o(t.y.period):function(e){return e},p=e.map(function(e){return[l.isDate(e[n])?e[n].getTime():e[n],l.isDate(e[r])?e[r].getTime():e[r],e[a]]}),f=l.groupBy(p,function(e){return e[2]});return Object.keys(f).reduce(function(e,o){var l=f[o],p=s(t.type,l).points.filter(function(e){return null!==e[0]&&null!==e[1]}).sort(function(e,t){return e[0]-t[0]}).map(function(e){var t={};return t[n]=c(e[0]),t[r]=h(e[1]),a&&(t[a]=o),t});return p.length>1&&(i||u)&&(p=[p[0],p[p.length-1]]),e.concat(p.length>1?p:[])},[])},e.traverseSpec(n,function(e,a){if(r.predicateIsApplicable(n,e,a)){var i=n.scales[e.x],o=n.scales[e.y],s=n.scales[e.color]||{},u=JSON.parse(JSON.stringify(e));u.type="ELEMENT.LINE",u.size="size_null",u.namespace="trendline",u.transformation=u.transformation||[],u.transformation.push({type:"regression",args:{type:t.type,x:i,y:o,g:s}});u.guide=l.defaults({},u.guide||{}),u.guide.interpolate="linear",u.guide.showAnchors="never",u.guide.cssClass="tau-chart__trendline",u.guide.widthCssClass="tau-chart__line-width-1",u.guide.x=u.guide.x||{},u.guide.x.fillGaps=!1,delete u.guide.label,delete u.label,a.units.push(u)}})}},containerTemplate:'<div class="tau-chart__trendlinepanel"></div>',template:l.template(['<label class="tau-chart__trendlinepanel__title tau-chart__checkbox">','<input type="checkbox" class="tau-chart__checkbox__input i-role-show-trend" <%= showTrend %> />','<span class="tau-chart__checkbox__icon"></span>','<span class="tau-chart__checkbox__text">',"<%= title %>","</span>","</label>","<div>",'<select class="i-role-change-model tau-chart__select tau-chart__trendlinepanel__control">',"<%= models %>","</select>","</div>",'<div class="tau-chart__trendlinepanel__error-message"><%= error %></div>'].join("")),onRender:function(e){if(this._container){this._container.innerHTML=this.template({title:"Trend line",error:this._error,showTrend:t.showTrend&&this._isApplicable?"checked":"",models:t.models.map(function(e){return"<option "+(t.type===e?"selected":"")+' value="'+e+'">'+e+"</option>"})});var n=function(e){return function(){o.select(this).classed({active:e,"tau-chart__line-width-1":!e,"tau-chart__line-width-3":e})}};o.select(e.getSVG()).selectAll(".tau-chart__trendline").on("mouseenter",n(!0)).on("mouseleave",n(!1))}}}}i.a.api.plugins.add("trendline",u),t.default=u}})});