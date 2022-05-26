"use strict";(self.webpackChunkuser_manual=self.webpackChunkuser_manual||[]).push([[7972],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return g}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),k=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=k(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=k(n),g=r,N=d["".concat(p,".").concat(g)]||d[g]||u[g]||l;return n?a.createElement(N,i(i({ref:e},m),{},{components:n})):a.createElement(N,i({ref:e},m))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var k=2;k<l;k++)i[k]=n[k];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2483:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return o},metadata:function(){return k},toc:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={},p=void 0,k={unversionedId:"manual/component/ui/event",id:"manual/component/ui/event",title:"event",description:"---",source:"@site/docs/manual/component/ui/event.md",sourceDirName:"manual/component/ui",slug:"/manual/component/ui/event",permalink:"/RecollectDocument/docs/manual/component/ui/event",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/manual/component/ui/event.md",tags:[],version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"RecollectUiEquipSetList",permalink:"/RecollectDocument/docs/manual/component/ui/equip_set_list"},next:{title:"RecollectUiFader",permalink:"/RecollectDocument/docs/manual/component/ui/fade"}},m={},u=[{value:"title: RecollectUiEvent",id:"title-recollectuievent",level:2},{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"Mode \u6bce\u306e\u8a2d\u5b9a\u5024\u306b\u3064\u3044\u3066",id:"mode-\u6bce\u306e\u8a2d\u5b9a\u5024\u306b\u3064\u3044\u3066",level:2},{value:"Situation",id:"situation",level:3},{value:"Spawn",id:"spawn",level:3},{value:"Player",id:"player",level:3},{value:"UI",id:"ui",level:3}],d={toc:u};function g(t){var e=t.components,o=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("hr",null),(0,l.kt)("p",null,"id: event"),(0,l.kt)("h2",{id:"title-recollectuievent"},"title: RecollectUiEvent"),(0,l.kt)("h2",{id:"\u6982\u8981"},"\u6982\u8981"),(0,l.kt)("p",null,"GUI \u306e\u30af\u30ea\u30c3\u30af\u30a4\u30d9\u30f3\u30c8\u306b\u3001Recollect\u72ec\u81ea\u306e\u30a4\u30d9\u30f3\u30c8\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img.png",src:n(9231).Z,width:"609",height:"153"})),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property:"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mode"),(0,l.kt)("td",{parentName:"tr",align:null},"\u52d5\u4f5c\u3059\u308b\u30a4\u30d9\u30f3\u30c8\u306e\u7a2e\u985e\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")))),(0,l.kt)("h2",{id:"mode-\u6bce\u306e\u8a2d\u5b9a\u5024\u306b\u3064\u3044\u3066"},"Mode \u6bce\u306e\u8a2d\u5b9a\u5024\u306b\u3064\u3044\u3066"),(0,l.kt)("h3",{id:"situation"},"Situation"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img.png",src:n(9231).Z,width:"609",height:"153"})),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property:"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Director"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5207\u66ff\u65b9\u6cd5\u3092 Slider, String \u304b\u3089\u9078\u629e\u3057\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Situation Index"),(0,l.kt)("td",{parentName:"tr",align:null},"Situation \u3092\u6570\u5024\u3067\u6307\u5b9a\u3057\u307e\u3059\u3002(Director: Slider\u306e\u307f)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Shot Index"),(0,l.kt)("td",{parentName:"tr",align:null},"Shot \u3092\u6570\u5024\u3067\u6307\u5b9a\u3057\u307e\u3059\u3002(Director: Slider\u306e\u307f)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Shot Name"),(0,l.kt)("td",{parentName:"tr",align:null},"Shot \u3092\u6587\u5b57\u5217\u3067\u6307\u5b9a\u3057\u307e\u3059\u3002(Director: String\u306e\u307f)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Control"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enable Rotate"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30af\u30ea\u30c3\u30af\u5f8c\u306b\u30ab\u30e1\u30e9\u3092\u56de\u8ee2\u3067\u304d\u308b\u304b\u6307\u5b9a\u3057\u307e\u3059\u3002")))),(0,l.kt)("h3",{id:"spawn"},"Spawn"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img.png",src:n(7680).Z,width:"611",height:"334"})),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property:"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Director"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SpawnActor"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5207\u308a\u66ff\u3048\u308b SpawnParam \u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Player"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Profile"),(0,l.kt)("td",{parentName:"tr",align:null},"Spawn \u3059\u308b Player \u3092\u4e0a\u66f8\u304d\u3057\u305f\u3044\u5834\u5408\u3001\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Motion"),(0,l.kt)("td",{parentName:"tr",align:null},"Player \u306e Motion \u3092\u4e0a\u66f8\u304d\u3057\u305f\u3044\u5834\u5408\u3001\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CameraAdjust"),(0,l.kt)("td",{parentName:"tr",align:null},"Player \u306b\u7d10\u3065\u304f CameraAdjust \u3092\u4e0a\u66f8\u304d\u3057\u305f\u3044\u5834\u5408\u3001\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EquipSet"),(0,l.kt)("td",{parentName:"tr",align:null},"Player \u306e EquipSet \u3092\u4e0a\u66f8\u304d\u3059\u308b\u65b9\u6cd5\u3092\u3001None, Toggle, Specify, Optional \u304b\u3089\u9078\u629e\u3057\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"KeepOptional"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")," \u306e\u5834\u5408\u3001 ",(0,l.kt)("inlineCode",{parentName:"td"},"is Optional")," \u306e\u8868\u793a\u30fb\u975e\u8868\u793a\u306f\u7dad\u6301\u3055\u308c\u307e\u3059\u3002",(0,l.kt)("inlineCode",{parentName:"td"},"false")," \u306e\u5834\u5408\u306f ",(0,l.kt)("inlineCode",{parentName:"td"},"is Optional")," \u304c\u5168\u3066\u975e\u8868\u793a\u306b\u306a\u308a\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Prefix"),(0,l.kt)("td",{parentName:"tr",align:null},"EquipSet\u306e ",(0,l.kt)("inlineCode",{parentName:"td"},"1_0_0")," \u306e ",(0,l.kt)("inlineCode",{parentName:"td"},"1")," \u304c\u5171\u901a\u3068\u3057\u305f\u306e\u5225 EquipSet \u306b\u5207\u308a\u66ff\u3048\u307e\u3059\u3002\u3053\u306e ",(0,l.kt)("inlineCode",{parentName:"td"},"1")," \u3092\u5207\u308a\u66ff\u3048\u308b ",(0,l.kt)("inlineCode",{parentName:"td"},"8")," \u306a\u3069\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,l.kt)("br",null),"\u7a7a\u6b04\u306e\u5834\u5408\u306f\u73fe\u5728\u306e EquipSet \u306e\u5de6\u306e\u6587\u5b57\u3092\u5171\u901a\u3068\u3057\u305f\u5225\u306eEquipSet\u306b\u5207\u308a\u66ff\u3048\u307e\u3059\u3002(EquipSet: Toggle \u306e\u307f)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Names"),(0,l.kt)("td",{parentName:"tr",align:null},"Player \u3067\u4e0a\u66f8\u304d\u3059\u308b\u8a2d\u5b9a\u3092\u6587\u5b57\u5217\u3067\u6307\u5b9a\u3057\u307e\u3059\u3002 (EquipSet: Specify \u306e\u307f)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OptionalMode"),(0,l.kt)("td",{parentName:"tr",align:null},"EquipSet \u306e\u3046\u3061 Optional \u3060\u3051\u306e\u64cd\u4f5c\u3092\u884c\u3044\u307e\u3059\u3002Toggle, Show, Hide \u304b\u3089\u9078\u629e\u3057\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EquipSetName"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional \u306e\u64cd\u4f5c\u3059\u308b EquipSet \u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AfterAction"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30af\u30ea\u30c3\u30af\u5f8c\u306b Player \u3067\u5b9f\u884c\u3059\u308b Motion \u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Control"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enable Rotate"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30af\u30ea\u30c3\u30af\u5f8c\u306b\u30ab\u30e1\u30e9\u3092\u56de\u8ee2\u3067\u304d\u308b\u304b\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UI"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TextRefresh"),(0,l.kt)("td",{parentName:"tr",align:null},"RecollectUiTextInjector \u3092\u4e0a\u66f8\u304d\u3059\u308b\u65b9\u6cd5\u3092\u3001None, Toggle, Specify \u304b\u3089\u9078\u629e\u3057\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Targets"),(0,l.kt)("td",{parentName:"tr",align:null},"RecollectUiTextInjector \u3092\u6587\u5b57\u5217\u3067\u6307\u5b9a\u3057\u307e\u3059\u3002(TextRefresh: Specify \u306e\u307f)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Modal"),(0,l.kt)("td",{parentName:"tr",align:null},"Modal \u306e\u65b9\u6cd5\u3092\u3001None, Open, Close \u304b\u3089\u9078\u629e\u3057\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Name"),(0,l.kt)("td",{parentName:"tr",align:null},"\u958b\u304f Modal \u306e Path \u3092\u6587\u5b57\u5217\u3067\u6307\u5b9a\u3057\u307e\u3059\u3002(Modal: Open \u306e\u307f)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Animation"),(0,l.kt)("td",{parentName:"tr",align:null},"Modal \u3092 Open/Close \u3059\u308b\u969b\u306b Animation \u3092\u6709\u52b9\u306b\u3059\u308b\u304b\u6307\u5b9a\u3057\u307e\u3059\u3002")))),(0,l.kt)("h3",{id:"player"},"Player"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img.png",src:n(5187).Z,width:"457",height:"294"})),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property:"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Player"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Profile"),(0,l.kt)("td",{parentName:"tr",align:null},"Spawn \u3059\u308b Player \u3092\u4e0a\u66f8\u304d\u3057\u305f\u3044\u5834\u5408\u3001\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Motion"),(0,l.kt)("td",{parentName:"tr",align:null},"Player \u306e Motion \u3092\u4e0a\u66f8\u304d\u3057\u305f\u3044\u5834\u5408\u3001\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CameraAdjust"),(0,l.kt)("td",{parentName:"tr",align:null},"Player \u306b\u7d10\u3065\u304f CameraAdjust \u3092\u4e0a\u66f8\u304d\u3057\u305f\u3044\u5834\u5408\u3001\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EquipSet"),(0,l.kt)("td",{parentName:"tr",align:null},"Player \u306e EquipSet \u3092\u4e0a\u66f8\u304d\u3059\u308b\u65b9\u6cd5\u3092\u3001None, Toggle, Specify \u304b\u3089\u9078\u629e\u3057\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Prefix"),(0,l.kt)("td",{parentName:"tr",align:null},"EquipSet\u306e ",(0,l.kt)("inlineCode",{parentName:"td"},"1_0_0")," \u306e ",(0,l.kt)("inlineCode",{parentName:"td"},"1")," \u304c\u5171\u901a\u3068\u3057\u305f\u306e\u5225 EquipSet \u306b\u5207\u308a\u66ff\u3048\u307e\u3059\u3002\u3053\u306e ",(0,l.kt)("inlineCode",{parentName:"td"},"1")," \u3092\u5207\u308a\u66ff\u3048\u308b ",(0,l.kt)("inlineCode",{parentName:"td"},"8")," \u306a\u3069\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,l.kt)("br",null),"\u7a7a\u6b04\u306e\u5834\u5408\u306f\u73fe\u5728\u306e EquipSet \u306e\u5de6\u306e\u6587\u5b57\u3092\u5171\u901a\u3068\u3057\u305f\u5225\u306eEquipSet\u306b\u5207\u308a\u66ff\u3048\u307e\u3059\u3002(EquipSet: Toggle \u306e\u307f)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Names"),(0,l.kt)("td",{parentName:"tr",align:null},"Player \u3067\u4e0a\u66f8\u304d\u3059\u308b\u8a2d\u5b9a\u3092\u6587\u5b57\u5217\u3067\u6307\u5b9a\u3057\u307e\u3059\u3002 (EquipSet: Specify \u306e\u307f)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AfterAction"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30af\u30ea\u30c3\u30af\u5f8c\u306b Player \u3067\u5b9f\u884c\u3059\u308b Motion \u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Control"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enable Rotate"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30af\u30ea\u30c3\u30af\u5f8c\u306b\u30ab\u30e1\u30e9\u3092\u56de\u8ee2\u3067\u304d\u308b\u304b\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UI"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TextRefresh"),(0,l.kt)("td",{parentName:"tr",align:null},"RecollectUiTextInjector \u3092\u4e0a\u66f8\u304d\u3059\u308b\u65b9\u6cd5\u3092\u3001None, Toggle, Specify \u304b\u3089\u9078\u629e\u3057\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Targets"),(0,l.kt)("td",{parentName:"tr",align:null},"RecollectUiTextInjector \u3092\u6587\u5b57\u5217\u3067\u6307\u5b9a\u3057\u307e\u3059\u3002(TextRefresh: Specify \u306e\u307f)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Modal"),(0,l.kt)("td",{parentName:"tr",align:null},"Modal \u306e\u65b9\u6cd5\u3092\u3001None, Open, Close \u304b\u3089\u9078\u629e\u3057\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Name"),(0,l.kt)("td",{parentName:"tr",align:null},"\u958b\u304f Modal \u306e Path \u3092\u6587\u5b57\u5217\u3067\u6307\u5b9a\u3057\u307e\u3059\u3002(Modal: Open \u306e\u307f)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Animation"),(0,l.kt)("td",{parentName:"tr",align:null},"Modal \u3092 Open/Close \u3059\u308b\u969b\u306b Animation \u3092\u6709\u52b9\u306b\u3059\u308b\u304b\u6307\u5b9a\u3057\u307e\u3059\u3002")))),(0,l.kt)("h3",{id:"ui"},"UI"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img.png",src:n(1955).Z,width:"456",height:"114"})),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property:"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UI"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TextRefresh"),(0,l.kt)("td",{parentName:"tr",align:null},"RecollectUiTextInjector \u3092\u4e0a\u66f8\u304d\u3059\u308b\u65b9\u6cd5\u3092\u3001None, Toggle, Specify \u304b\u3089\u9078\u629e\u3057\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Targets"),(0,l.kt)("td",{parentName:"tr",align:null},"RecollectUiTextInjector \u3092\u6587\u5b57\u5217\u3067\u6307\u5b9a\u3057\u307e\u3059\u3002(TextRefresh: Specify \u306e\u307f)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Modal"),(0,l.kt)("td",{parentName:"tr",align:null},"Modal \u306e\u65b9\u6cd5\u3092\u3001None, Open, Close \u304b\u3089\u9078\u629e\u3057\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Name"),(0,l.kt)("td",{parentName:"tr",align:null},"\u958b\u304f Modal \u306e Path \u3092\u6587\u5b57\u5217\u3067\u6307\u5b9a\u3057\u307e\u3059\u3002(Modal: Open \u306e\u307f)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Animation"),(0,l.kt)("td",{parentName:"tr",align:null},"Modal \u3092 Open/Close \u3059\u308b\u969b\u306b Animation \u3092\u6709\u52b9\u306b\u3059\u308b\u304b\u6307\u5b9a\u3057\u307e\u3059\u3002")))))}g.isMDXComponent=!0},9231:function(t,e,n){e.Z=n.p+"assets/images/0_0_0-ed8cb250bd71c194817959f15c1c04d2.png"},7680:function(t,e,n){e.Z=n.p+"assets/images/0_1_0-321bff1cc0c227855910c6a31af3f449.png"},5187:function(t,e,n){e.Z=n.p+"assets/images/0_2_0-95eafcd2418071650ee42dc449b8a407.png"},1955:function(t,e){e.Z="data:image/png;base64,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"}}]);