(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["albums"],{be55:function(e,t,a){"use strict";a.r(t);var c=a("7a23"),n={class:"container"},r=Object(c["g"])("h1",{class:"text-center"}," Albums ",-1),s=Object(c["g"])("hr",null,null,-1),o={class:"row"};function l(e,t,a,l,d,i){var u=Object(c["y"])("Loading"),b=Object(c["y"])("Card");return Object(c["r"])(),Object(c["f"])("div",n,[r,s,e.load?(Object(c["r"])(),Object(c["d"])(u,{key:0})):Object(c["e"])("",!0),Object(c["g"])("div",o,[(Object(c["r"])(!0),Object(c["f"])(c["a"],null,Object(c["x"])(e.metals,(function(e){return Object(c["r"])(),Object(c["f"])("div",{class:"col-12 col-lg-4 col-md-6",key:e.id},[Object(c["i"])(b,{data:e,class:"m-3"},null,8,["data"])])})),128))])])}var d=a("1da1"),i=(a("96cf"),a("ae8d")),u=a("3a5e"),b={components:{Card:i["a"],Loading:u["a"]},data:function(){return{metals:{},load:!1}},created:function(){this.getMetal()},methods:{getMetal:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var a,c,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a="https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/",e.load=!0,t.next=4,e.axios.get("".concat(a,"artist/?q=albums&index=0&limit=10"));case 4:c=t.sent,n=c.data,e.metals=n.data,e.load=!1;case 8:case"end":return t.stop()}}),t)})))()}}},j=a("d959"),O=a.n(j);const m=O()(b,[["render",l]]);t["default"]=m}}]);
//# sourceMappingURL=albums.4bf5c66f.js.map