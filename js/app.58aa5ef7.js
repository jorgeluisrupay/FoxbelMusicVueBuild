(function(e){function t(t){for(var a,c,s=t[0],i=t[1],u=t[2],l=0,b=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&b.push(r[c][0]),r[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);d&&d(t);while(b.length)b.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},c={app:0},r={app:0},o=[];function s(e){return i.p+"js/"+({albums:"albums",artistas:"artistas",baladas:"baladas",canciones:"canciones",estaciones:"estaciones",metal:"metal",parabailar:"parabailar",rock90:"rock90"}[e]||e)+"."+{albums:"0c953f12",artistas:"688d1856",baladas:"b0ff2ad1",canciones:"2590d405",estaciones:"5250fc50",metal:"30b85fa1",parabailar:"33d7b7ad",rock90:"0a742a4b"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={artistas:1,canciones:1,estaciones:1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var a="css/"+({albums:"albums",artistas:"artistas",baladas:"baladas",canciones:"canciones",estaciones:"estaciones",metal:"metal",parabailar:"parabailar",rock90:"rock90"}[e]||e)+"."+{albums:"31d6cfe0",artistas:"0f8add62",baladas:"31d6cfe0",canciones:"6d861522",estaciones:"edd30a30",metal:"31d6cfe0",parabailar:"31d6cfe0",rock90:"31d6cfe0"}[e]+".css",r=i.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===r))return t()}var b=document.getElementsByTagName("style");for(s=0;s<b.length;s++){u=b[s],l=u.getAttribute("data-href");if(l===a||l===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete c[e],d.parentNode.removeChild(d),n(o)},d.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){c[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var b=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",b.name="ChunkLoadError",b.type=a,b.request=c,n[1](b)}r[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var b=0;b<u.length;b++)t(u[b]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0aa8":function(e,t,n){},1110:function(e,t,n){},"133f":function(e,t,n){e.exports=n.p+"img/foxbel-music.31e36a1e.png"},"308d":function(e,t,n){"use strict";n("b630")},"35c3":function(e,t,n){"use strict";n("0aa8")},"3a5e":function(e,t,n){"use strict";var a=n("7a23"),c={class:"d-flex justify-content-center"},r=Object(a["g"])("div",{class:"spinner-grow text-danger",role:"status"},[Object(a["g"])("span",{class:"visually-hidden"},"Loading...")],-1),o=[r];function s(e,t){return Object(a["r"])(),Object(a["f"])("div",c,o)}var i=n("6b0d"),u=n.n(i);const l={},b=u()(l,[["render",s]]);t["a"]=b},"40f6":function(e,t,n){},"4dce":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),c={class:"contenedor"};function r(e,t,n,r,o,s){var i=Object(a["y"])("NavBar"),u=Object(a["y"])("router-view");return Object(a["r"])(),Object(a["f"])("div",c,[Object(a["i"])(i),Object(a["i"])(u,{class:"main"})])}var o=n("133f"),s=n.n(o),i={class:"nav"},u={class:"navegador"},l=Object(a["g"])("img",{src:s.a,alt:"foxbel"},null,-1),b=Object(a["g"])("h3",null,"Mi Libreria",-1),d=Object(a["h"])("Reciente"),f=Object(a["h"])("Artistas"),j=Object(a["h"])("Albums"),p=Object(a["h"])("Canciones"),O=Object(a["h"])("Estaciones"),m=Object(a["g"])("br",null,null,-1),g=Object(a["g"])("h3",null,"Playlisst",-1),h=Object(a["h"])("Metal"),v=Object(a["h"])("Para Bailar"),y=Object(a["h"])("Rock 90s"),k=Object(a["h"])("Baladas");function _(e,t,n,c,r,o){var s=Object(a["y"])("router-link");return Object(a["r"])(),Object(a["f"])("div",i,[Object(a["g"])("div",u,[Object(a["i"])(s,{to:"/",class:"nav-link active"},{default:Object(a["E"])((function(){return[l]})),_:1}),b,Object(a["i"])(s,{to:"/",class:"nav-link"},{default:Object(a["E"])((function(){return[d]})),_:1}),Object(a["i"])(s,{to:"/artistas",class:"nav-link"},{default:Object(a["E"])((function(){return[f]})),_:1}),Object(a["i"])(s,{to:"/albums",class:"nav-link"},{default:Object(a["E"])((function(){return[j]})),_:1}),Object(a["i"])(s,{to:"/canciones",class:"nav-link"},{default:Object(a["E"])((function(){return[p]})),_:1}),Object(a["i"])(s,{to:"/estaciones",class:"nav-link"},{default:Object(a["E"])((function(){return[O]})),_:1}),m,g,Object(a["i"])(s,{to:"/metal",class:"nav-link"},{default:Object(a["E"])((function(){return[h]})),_:1}),Object(a["i"])(s,{to:"/parabailar",class:"nav-link"},{default:Object(a["E"])((function(){return[v]})),_:1}),Object(a["i"])(s,{to:"/rock90",class:"nav-link"},{default:Object(a["E"])((function(){return[y]})),_:1}),Object(a["i"])(s,{to:"/baladas",class:"nav-link"},{default:Object(a["E"])((function(){return[k]})),_:1})])])}var w={},A=(n("9f3d"),n("6b0d")),E=n.n(A);const x=E()(w,[["render",_]]);var P=x,C={components:{NavBar:P}};n("bcbe");const S=E()(C,[["render",r]]);var L=S,B=n("9483");Object(B["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var N=n("6c02"),R=function(e){return Object(a["u"])("data-v-417695b5"),e=e(),Object(a["s"])(),e},q={class:"container"},M=R((function(){return Object(a["g"])("br",null,null,-1)})),T=R((function(){return Object(a["g"])("h3",null,"Resultados",-1)})),F={class:"row"};function I(e,t,n,c,r,o){var s=Object(a["y"])("search"),i=Object(a["y"])("CardReciente"),u=Object(a["y"])("Loading"),l=Object(a["y"])("Card");return Object(a["r"])(),Object(a["f"])("div",q,[Object(a["i"])(s,{onAccion:o.getArtista},null,8,["onAccion"]),Object(a["i"])(i,{data:e.artistas[0]},null,8,["data"]),M,T,e.load?(Object(a["r"])(),Object(a["d"])(u,{key:0})):Object(a["e"])("",!0),Object(a["g"])("div",F,[(Object(a["r"])(!0),Object(a["f"])(a["a"],null,Object(a["x"])(e.artistas,(function(e){return Object(a["r"])(),Object(a["f"])("div",{class:"col-12 col-lg-3 col-sm-4",key:e.id},[Object(a["i"])(l,{data:e,class:"w-75"},null,8,["data"])])})),128))])])}var J=n("1da1"),z=(n("99af"),n("96cf"),n("ae8d")),D=(n("b0c0"),function(e){return Object(a["u"])("data-v-185248f4"),e=e(),Object(a["s"])(),e}),U={class:"banner"},G={class:"portada"},H=["src","alt"],K={class:"info"},V={class:"title"},$={class:"datos"},Q={class:"info__sm"},W={class:"seguidores"},X={class:"desc"},Y=D((function(){return Object(a["g"])("div",{class:"botones"},[Object(a["g"])("button",{class:"btn1"},"Reproducir"),Object(a["g"])("button",{class:"btn2"},"Seguir"),Object(a["g"])("i",{class:"uil uil-ellipsis-h"})],-1)}));function Z(e,t,n,c,r,o){return Object(a["r"])(),Object(a["f"])("div",U,[Object(a["g"])("div",G,[Object(a["g"])("img",{src:n.data.picture_big,alt:n.data.name},null,8,H)]),Object(a["g"])("div",K,[Object(a["g"])("h3",V,Object(a["A"])(n.data.name),1),Object(a["g"])("div",$,[Object(a["g"])("p",Q,"Lo mejor de "+Object(a["A"])(n.data.name),1),Object(a["g"])("p",W,Object(a["A"])(n.data.nb_fan)+" seguidores",1)]),Object(a["g"])("p",X," El artista "+Object(a["A"])(n.data.name)+" tiene "+Object(a["A"])(n.data.nb_album)+" albumns y una cantidad de "+Object(a["A"])(n.data.nb_fan)+" seguidores Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores magnam animi culpa quo inventore, quod a accusantium libero rerum eveniet perspiciatis vero molestiae maxime labore amet itaque rem reiciendis aperiam! ",1),Y])])}var ee={props:{data:Object}};n("308d");const te=E()(ee,[["render",Z],["__scopeId","data-v-185248f4"]]);var ne=te,ae=n("c106"),ce=n("3a5e"),re={components:{Card:z["a"],Search:ae["a"],Loading:ce["a"],CardReciente:ne},data:function(){return{artistas:{},load:!1}},created:function(){this.getArtista()},methods:{getArtista:function(){var e=arguments,t=this;return Object(J["a"])(regeneratorRuntime.mark((function n(){var a,c,r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.length>0&&void 0!==e[0]?e[0]:"adele",c="https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/",t.load=!0,n.next=5,t.axios.get("".concat(c,"artist/?q=").concat(a,"&index=0&limit=10"));case 5:r=n.sent,o=r.data,console.log(o),t.artistas=o.data,t.load=!1;case 10:case"end":return n.stop()}}),n)})))()}}};n("6938");const oe=E()(re,[["render",I],["__scopeId","data-v-417695b5"]]);var se=oe,ie=[{path:"/",name:"Reciente",component:se},{path:"/artistas",name:"Artistas",component:function(){return n.e("artistas").then(n.bind(null,"9242"))}},{path:"/albums",name:"Albums",component:function(){return n.e("albums").then(n.bind(null,"be55"))}},{path:"/canciones",name:"Canciones",component:function(){return n.e("canciones").then(n.bind(null,"b555"))}},{path:"/estaciones",name:"Estaciones",component:function(){return n.e("estaciones").then(n.bind(null,"ca8d"))}},{path:"/metal",name:"Metal",component:function(){return n.e("metal").then(n.bind(null,"576c"))}},{path:"/parabailar",name:"ParaBailar",component:function(){return n.e("parabailar").then(n.bind(null,"4f41"))}},{path:"/rock90",name:"Rock90",component:function(){return n.e("rock90").then(n.bind(null,"0d38"))}},{path:"/baladas",name:"Baladas",component:function(){return n.e("baladas").then(n.bind(null,"d368"))}}],ue=Object(N["a"])({history:Object(N["b"])("/"),routes:ie}),le=ue,be=n("bc3a"),de=n.n(be),fe=n("130e");Object(a["c"])(L).use(le).use(fe["a"],de.a).mount("#app")},"63c1":function(e,t,n){},6938:function(e,t,n){"use strict";n("1110")},"9f3d":function(e,t,n){"use strict";n("40f6")},ae8d:function(e,t,n){"use strict";n("b0c0");var a=n("7a23"),c={class:"card w-100"},r=["src","alt"],o={class:"card-body"},s={class:"card-title"},i=Object(a["h"])(" Nombre: "),u={class:"card-title"},l=Object(a["h"])(" # Albums: "),b={class:"card-title"},d=Object(a["h"])(" # Fan: ");function f(e,t,n,f,j,p){return Object(a["r"])(),Object(a["f"])("div",c,[Object(a["g"])("img",{loader:"lazy",src:n.data.picture_big,class:"card-img-top",alt:n.data.name},null,8,r),Object(a["g"])("div",o,[Object(a["g"])("h5",s,[i,Object(a["g"])("span",null,Object(a["A"])(n.data.name),1)]),Object(a["g"])("h5",u,[l,Object(a["g"])("span",null,Object(a["A"])(n.data.nb_album),1)]),Object(a["g"])("h5",b,[d,Object(a["g"])("span",null,Object(a["A"])(n.data.nb_fan),1)])])])}var j={props:{data:Object}},p=(n("35c3"),n("6b0d")),O=n.n(p);const m=O()(j,[["render",f]]);t["a"]=m},b630:function(e,t,n){},bb68:function(e,t,n){"use strict";n("63c1")},bcbe:function(e,t,n){"use strict";n("4dce")},c106:function(e,t,n){"use strict";n("ac1f"),n("841c");var a=n("7a23"),c=function(e){return Object(a["u"])("data-v-618f3e94"),e=e(),Object(a["s"])(),e},r={class:"mb-3 px-3 buscador"},o=c((function(){return Object(a["g"])("div",{class:"usuario"},[Object(a["g"])("i",{class:"fas fa-user"},[Object(a["h"])("  "),Object(a["g"])("b",null,"Jorge Luis")])],-1)}));function s(e,t,n,c,s,i){return Object(a["r"])(),Object(a["f"])("form",{onSubmit:t[1]||(t[1]=Object(a["G"])((function(){return i.ejecutarPeticion&&i.ejecutarPeticion.apply(i,arguments)}),["prevent"]))},[Object(a["g"])("div",r,[Object(a["F"])(Object(a["g"])("input",{placeholder:"Buscar",type:"text",class:"form-control w-50","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.search=t}),autocomplete:"off"},null,512),[[a["C"],e.search]]),o])],32)}var i={data:function(){return{search:""}},methods:{ejecutarPeticion:function(){this.$emit("accion",this.search),this.search=""}}},u=(n("bb68"),n("6b0d")),l=n.n(u);const b=l()(i,[["render",s],["__scopeId","data-v-618f3e94"]]);t["a"]=b}});
//# sourceMappingURL=app.58aa5ef7.js.map