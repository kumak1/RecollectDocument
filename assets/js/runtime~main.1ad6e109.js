!function(){"use strict";var e,c,f,a,t,d={},n={};function r(e){var c=n[e];if(void 0!==c)return c.exports;var f=n[e]={id:e,loaded:!1,exports:{}};return d[e].call(f.exports,f,f.exports,r),f.loaded=!0,f.exports}r.m=d,r.c=n,e=[],r.O=function(c,f,a,t){if(!f){var d=1/0;for(o=0;o<e.length;o++){f=e[o][0],a=e[o][1],t=e[o][2];for(var n=!0,b=0;b<f.length;b++)(!1&t||d>=t)&&Object.keys(r.O).every((function(e){return r.O[e](f[b])}))?f.splice(b--,1):(n=!1,t<d&&(d=t));n&&(e.splice(o--,1),c=a())}return c}t=t||0;for(var o=e.length;o>0&&e[o-1][2]>t;o--)e[o]=e[o-1];e[o]=[f,a,t]},r.n=function(e){var c=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(c,{a:c}),c},f=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var t=Object.create(null);r.r(t);var d={};c=c||[null,f({}),f([]),f(f)];for(var n=2&a&&e;"object"==typeof n&&!~c.indexOf(n);n=f(n))Object.getOwnPropertyNames(n).forEach((function(c){d[c]=function(){return e[c]}}));return d.default=function(){return e},r.d(t,d),t},r.d=function(e,c){for(var f in c)r.o(c,f)&&!r.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:c[f]})},r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(c,f){return r.f[f](e,c),c}),[]))},r.u=function(e){return"assets/js/"+({53:"935f2afb",63:"7e6eff75",167:"89e1afcb",195:"bc182da2",257:"9c768954",390:"abef8cc4",561:"531188f8",707:"d1900b7b",874:"88dfe3f2",914:"de43f2bd",1026:"eb0888e3",1080:"59a3f46e",1216:"bb038295",1266:"8ee78d1c",1270:"6a86a734",1440:"05792f6e",1720:"eee85c3b",1919:"69bf1975",1972:"19711c5f",1986:"2524b0c4",2121:"43c35d16",2263:"8dec1def",2286:"245d2c11",2527:"2c2e1f30",2535:"814f3328",2664:"fcef1db5",2674:"233119f0",2786:"07977142",2958:"dcf0f26b",3063:"b3cf1282",3075:"9641a4eb",3089:"a6aa9e1f",3785:"ae6b61bc",4013:"01a85c17",4128:"a09c2993",4151:"396ad358",4195:"c4f5d8e4",4295:"92335627",4418:"58c46f43",4874:"47f9498b",5036:"4397b8f1",5085:"7ba31afa",5496:"e6923e86",5953:"853a0c8a",6103:"ccc49370",6212:"5c9596ee",6379:"c679e869",6383:"c044dbbe",6396:"d437c476",6448:"299ea798",6549:"3c5ed2f5",6718:"17cfc11f",6889:"0e56d3a2",6901:"69f0c057",7141:"775d5bbc",7414:"987a4fb4",7451:"428eb33b",7520:"95313658",7643:"7b976c64",7703:"2c859c1d",7725:"7875500d",7732:"4e5430d7",7818:"885b354e",7918:"17896441",8016:"0cdaeb1a",8178:"360a4724",8324:"85de4661",8472:"f08b29db",8610:"6875c492",8656:"26f95962",8768:"42398607",8956:"39e335b1",9e3:"1a84f6bd",9283:"a853a286",9417:"36622678",9486:"f76917ff",9514:"1be78505",9683:"e5288fc4",9694:"f286e71b",9786:"3eb74064",9838:"f3372f42",9898:"25848b1e",9952:"9e1c8865",9992:"9010ec77"}[e]||e)+"."+{53:"d4ac65f2",63:"ab3762fd",167:"64a48951",195:"831efd17",257:"cad837ce",390:"04737148",561:"a18d7a61",707:"7d463a43",874:"019fe484",914:"9dc58c21",1026:"92a9fdf1",1080:"81d99b6c",1216:"79ee233f",1266:"575eba8e",1270:"66aa4eaa",1440:"4d48f203",1720:"9b4d6375",1919:"0e8696c1",1972:"3103b6c8",1986:"9f76c66f",2121:"cae7d9d5",2263:"7a943d30",2286:"0096e8dc",2527:"b9f4592a",2535:"58f745f0",2664:"b9e4efc6",2674:"884f2e52",2786:"eb98babb",2958:"5587c459",3063:"d30c31eb",3075:"66cb57fd",3089:"374b4352",3785:"68ce8b7f",4013:"47897137",4128:"b552b96f",4151:"27da53d5",4195:"5ca47154",4295:"a2cf9d77",4418:"1d7395bc",4608:"401122ae",4874:"f4eb33f5",5036:"da9dae1f",5085:"93103bc3",5486:"270248c6",5496:"c599ed2c",5953:"da08a3c8",6016:"1d4babdd",6103:"6af8c2c8",6212:"9233c0ea",6379:"adef947e",6383:"a5bcfd68",6396:"300a183d",6448:"1ae98132",6549:"2757aa23",6718:"8ac50715",6889:"2ca787a0",6901:"a9625126",7141:"c05f3877",7414:"885a9b7e",7451:"75a5d45e",7520:"918961b7",7643:"094486dc",7703:"72fab39e",7725:"7e1042c9",7732:"fbe7b623",7818:"9d257b05",7918:"4dc0b6f1",8016:"dbd65585",8111:"20002a83",8178:"d88a46ff",8324:"ec9b86b6",8472:"c0790b91",8610:"cffdc0b2",8656:"eb210f43",8768:"71525301",8956:"bcb7af81",9e3:"d7440da8",9283:"12d58232",9417:"a061d0ad",9486:"c47b870f",9514:"a5551a09",9683:"5e7cfd08",9694:"0864a863",9786:"930662c4",9838:"a1d5a463",9898:"ad79bca7",9952:"5ad51dc7",9992:"30f2993b"}[e]+".js"},r.miniCssF=function(e){return"assets/css/styles.cfa2ef5b.css"},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},a={},t="user-manual:",r.l=function(e,c,f,d){if(a[e])a[e].push(c);else{var n,b;if(void 0!==f)for(var o=document.getElementsByTagName("script"),u=0;u<o.length;u++){var i=o[u];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==t+f){n=i;break}}n||(b=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,r.nc&&n.setAttribute("nonce",r.nc),n.setAttribute("data-webpack",t+f),n.src=e),a[e]=[c];var l=function(c,f){n.onerror=n.onload=null,clearTimeout(s);var t=a[e];if(delete a[e],n.parentNode&&n.parentNode.removeChild(n),t&&t.forEach((function(e){return e(f)})),c)return c(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=l.bind(null,n.onerror),n.onload=l.bind(null,n.onload),b&&document.head.appendChild(n)}},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/RecollectDocument/",r.gca=function(e){return e={17896441:"7918",36622678:"9417",42398607:"8768",92335627:"4295",95313658:"7520","935f2afb":"53","7e6eff75":"63","89e1afcb":"167",bc182da2:"195","9c768954":"257",abef8cc4:"390","531188f8":"561",d1900b7b:"707","88dfe3f2":"874",de43f2bd:"914",eb0888e3:"1026","59a3f46e":"1080",bb038295:"1216","8ee78d1c":"1266","6a86a734":"1270","05792f6e":"1440",eee85c3b:"1720","69bf1975":"1919","19711c5f":"1972","2524b0c4":"1986","43c35d16":"2121","8dec1def":"2263","245d2c11":"2286","2c2e1f30":"2527","814f3328":"2535",fcef1db5:"2664","233119f0":"2674","07977142":"2786",dcf0f26b:"2958",b3cf1282:"3063","9641a4eb":"3075",a6aa9e1f:"3089",ae6b61bc:"3785","01a85c17":"4013",a09c2993:"4128","396ad358":"4151",c4f5d8e4:"4195","58c46f43":"4418","47f9498b":"4874","4397b8f1":"5036","7ba31afa":"5085",e6923e86:"5496","853a0c8a":"5953",ccc49370:"6103","5c9596ee":"6212",c679e869:"6379",c044dbbe:"6383",d437c476:"6396","299ea798":"6448","3c5ed2f5":"6549","17cfc11f":"6718","0e56d3a2":"6889","69f0c057":"6901","775d5bbc":"7141","987a4fb4":"7414","428eb33b":"7451","7b976c64":"7643","2c859c1d":"7703","7875500d":"7725","4e5430d7":"7732","885b354e":"7818","0cdaeb1a":"8016","360a4724":"8178","85de4661":"8324",f08b29db:"8472","6875c492":"8610","26f95962":"8656","39e335b1":"8956","1a84f6bd":"9000",a853a286:"9283",f76917ff:"9486","1be78505":"9514",e5288fc4:"9683",f286e71b:"9694","3eb74064":"9786",f3372f42:"9838","25848b1e":"9898","9e1c8865":"9952","9010ec77":"9992"}[e]||e,r.p+r.u(e)},function(){var e={1303:0,532:0};r.f.j=function(c,f){var a=r.o(e,c)?e[c]:void 0;if(0!==a)if(a)f.push(a[2]);else if(/^(1303|532)$/.test(c))e[c]=0;else{var t=new Promise((function(f,t){a=e[c]=[f,t]}));f.push(a[2]=t);var d=r.p+r.u(c),n=new Error;r.l(d,(function(f){if(r.o(e,c)&&(0!==(a=e[c])&&(e[c]=void 0),a)){var t=f&&("load"===f.type?"missing":f.type),d=f&&f.target&&f.target.src;n.message="Loading chunk "+c+" failed.\n("+t+": "+d+")",n.name="ChunkLoadError",n.type=t,n.request=d,a[1](n)}}),"chunk-"+c,c)}},r.O.j=function(c){return 0===e[c]};var c=function(c,f){var a,t,d=f[0],n=f[1],b=f[2],o=0;for(a in n)r.o(n,a)&&(r.m[a]=n[a]);if(b)var u=b(r);for(c&&c(f);o<d.length;o++)t=d[o],r.o(e,t)&&e[t]&&e[t][0](),e[d[o]]=0;return r.O(u)},f=self.webpackChunkuser_manual=self.webpackChunkuser_manual||[];f.forEach(c.bind(null,0)),f.push=c.bind(null,f.push.bind(f))}()}();