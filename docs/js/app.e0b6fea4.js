(function(t){function n(n){for(var r,i,s=n[0],u=n[1],c=n[2],d=0,f=[];d<s.length;d++)i=s[d],a[i]&&f.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(n);while(f.length)f.shift()();return o.push.apply(o,c||[]),e()}function e(){for(var t,n=0;n<o.length;n++){for(var e=o[n],r=!0,s=1;s<e.length;s++){var u=e[s];0!==a[u]&&(r=!1)}r&&(o.splice(n--,1),t=i(i.s=e[0]))}return t}var r={},a={app:0},o=[];function i(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=r,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)i.d(e,r,function(n){return t[n]}.bind(null,r));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="/moving-lines/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=n,s=s.slice();for(var c=0;c<s.length;c++)n(s[c]);var l=u;o.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var r=e("a026"),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"row mt-3"},[e("div",{staticClass:"col-3 text-center"},[e("button",{on:{click:t.doAnimation}},[t._v(t._s(t.play?"Stop":"Start"))])]),e("div",{staticClass:"col-6 text-center"},[t._v("\n\t\t\tDay "+t._s(t.day)+"\n\t\t")]),e("div",{staticClass:"col-3 text-center"},[t._v("\n\t\t\tTotal: "+t._s(t.getTotal)+"\n\t\t")])]),e("div",{staticClass:"lines-wrapper"},t._l(t.getCountries,function(n){return e("div",{key:n.name,staticClass:"mb-2"},[n.start<t.day?e("div",{class:t.getClass(n.current)},[e("div",{staticClass:"text-right col-3"},[e("small",[t._v(t._s(n.name))])]),e("div",{staticClass:"text-right col-6 pl-0 pr-0 border-left"},[e("div",{staticClass:"bg-primary line h-100",style:t.getWidth(n.current)})]),e("div",{staticClass:"col-3"},[e("small",[t._v(t._s(t.formatNumber(n.current)))])])]):t._e()])}),0)])},o=[],i=(e("6b54"),e("a481"),e("ac6a"),e("55dd"),e("f499")),s=e.n(i),u={name:"app",data:function(){return{day:0,end:100,play:!1,countries:[{name:"US",start:80,end:100,total:530830},{name:"UK",start:80,end:100,total:85173},{name:"Italy",start:60,end:100,total:152271},{name:"Spain",start:60,end:100,total:166019},{name:"China",start:1,end:60,total:83134},{name:"France",start:70,end:100,total:130730},{name:"Germany",start:75,end:100,total:125834},{name:"Iran",start:60,end:100,total:71686},{name:"Turkey",start:80,end:100,total:52167},{name:"Belgium",start:75,end:100,total:29647},{name:"Netherlands",start:75,end:100,total:25746},{name:"Switzerland",start:75,end:100,total:25328},{name:"Canada",start:85,end:100,total:23717}]}},methods:{getWidth:function(t){return t<=this.getMaxCurrent?"width:"+100*t/this.getMaxCurrent+"%":""},getClass:function(t){var n=JSON.parse(s()(this.getCountries));n.sort(function(t,n){return t.current>n.current?-1:t.current<n.current?1:0});var e=1;return n.forEach(function(n,r){t==n.current&&(e=r+1)}),"row count position-".concat(e)},formatNumber:function(t){return Math.round(t).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")},doAnimation:function(){this.day==this.end&&(this.day=0),this.play=!this.play}},computed:{getMaxCurrent:function(){var t=JSON.parse(s()(this.getCountries));return t.sort(function(t,n){return t.current-n.current})[t.length-1].current},getCountries:function(){var t=this;return this.countries.map(function(n){return n.current=n.start<t.day?n.total/(n.end-n.start)*(t.day-n.start):0,t.day>n.end&&(n.current=n.total),n})},getTotal:function(){return this.formatNumber(this.getCountries.reduce(function(t,n){return{current:t.current+n.current}}).current)}},mounted:function(){var t=this;setInterval(function(){t.play&&t.day++},500)},watch:{day:function(){this.day>=this.end&&(this.play=!1)}}},c=u,l=(e("c35c"),e("2877")),d=Object(l["a"])(c,a,o,!1,null,"fe508834",null),f=d.exports;new r["a"]({render:function(t){return t(f)}}).$mount("#app")},c35c:function(t,n,e){"use strict";var r=e("cb00"),a=e.n(r);a.a},cb00:function(t,n,e){}});