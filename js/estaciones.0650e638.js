(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["estaciones"],{"418d":function(t,e,c){"use strict";c("42bf")},"42bf":function(t,e,c){},ca8d:function(t,e,c){"use strict";c.r(e);var a=c("7a23"),n={class:"container"},r=Object(a["g"])("h1",{class:"text-center"}," Estaciones ",-1),s=Object(a["g"])("hr",null,null,-1),o={class:"row"};function i(t,e,c,i,d,l){var b=Object(a["y"])("Loading"),u=Object(a["y"])("CardEstacion");return Object(a["r"])(),Object(a["f"])("div",n,[r,s,t.load?(Object(a["r"])(),Object(a["d"])(b,{key:0})):Object(a["e"])("",!0),Object(a["g"])("div",o,[(Object(a["r"])(!0),Object(a["f"])(a["a"],null,Object(a["x"])(t.estaciones,(function(t){return Object(a["r"])(),Object(a["f"])("div",{class:"col-12 col-lg-4 col-md-6",key:t.id},[Object(a["i"])(u,{data:t,class:"m-3"},null,8,["data"])])})),128))])])}var d=c("1da1"),l=(c("96cf"),{class:"card w-100"}),b=["src","alt"],u={class:"card-body"},j={class:"card-title"},O=Object(a["h"])(" Nombre de la estacion: ");function f(t,e,c,n,r,s){return Object(a["r"])(),Object(a["f"])("div",l,[Object(a["g"])("img",{loader:"lazy",src:c.data.picture_big,class:"card-img-top",alt:c.data.title},null,8,b),Object(a["g"])("div",u,[Object(a["g"])("h5",j,[O,Object(a["g"])("span",null,Object(a["A"])(c.data.title),1)])])])}var g={props:{data:Object}},p=(c("418d"),c("d959")),h=c.n(p);const m=h()(g,[["render",f]]);var v=m,w=c("3a5e"),y={components:{CardEstacion:v,Loading:w["a"]},data:function(){return{estaciones:{},load:!1}},created:function(){this.getEstacion()},methods:{getEstacion:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var c,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return c="https://cors-anywhere.herokuapp.com/",t.load=!0,e.next=4,t.axios.get("".concat(c,"https://api.deezer.com/radio&index=0&limit=10"));case 4:a=e.sent,n=a.data,console.log(n),t.estaciones=n.data,t.load=!1;case 9:case"end":return e.stop()}}),e)})))()}}};const k=h()(y,[["render",i]]);e["default"]=k}}]);
//# sourceMappingURL=estaciones.0650e638.js.map