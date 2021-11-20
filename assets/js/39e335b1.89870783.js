"use strict";(self.webpackChunkuser_manual=self.webpackChunkuser_manual||[]).push([[3450],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=u(n),f=i,s=m["".concat(c,".").concat(f)]||m[f]||d[f]||o;return n?r.createElement(s,l(l({ref:t},p),{},{components:n})):r.createElement(s,l({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4107:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),l=["components"],a={id:"profile",title:"Profile"},c=void 0,u={unversionedId:"manual/component/actor/profile",id:"manual/component/actor/profile",isDocsHomePage:!1,title:"Profile",description:"Introduction",source:"@site/docs/manual/component/actor/profile.md",sourceDirName:"manual/component/actor",slug:"/manual/component/actor/profile",permalink:"/RecollectDocument/docs/manual/component/actor/profile",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/manual/component/actor/profile.md",tags:[],version:"current",frontMatter:{id:"profile",title:"Profile"},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/RecollectDocument/docs/manual/component/actor/overview"},next:{title:"Equip Items",permalink:"/RecollectDocument/docs/manual/component/actor/equip_items"}},p=[{value:"Introduction",id:"introduction",children:[{value:"FBX",id:"fbx",children:[],level:3},{value:"Description",id:"description",children:[],level:3}],level:2},{value:"AI",id:"ai",children:[{value:"Actor Type",id:"actor-type",children:[],level:3},{value:"Behavior Tree",id:"behavior-tree",children:[],level:3},{value:"Recollect \u62e1\u5f35\u30ce\u30fc\u30c9",id:"recollect-\u62e1\u5f35\u30ce\u30fc\u30c9",children:[],level:3},{value:"Actions",id:"actions",children:[],level:3},{value:"Conditionals",id:"conditionals",children:[],level:3}],level:2},{value:"3D GameKit",id:"3d-gamekit",children:[],level:2}],d={toc:p};function m(e){var t=e.components,a=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img.png",src:n(3408).Z})),(0,o.kt)("h3",{id:"fbx"},"FBX"),(0,o.kt)("p",null,"\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u306e\u30e1\u30c3\u30b7\u30e5\u304c\u8a18\u9332\u3055\u308c\u3066\u3044\u308bFBX\u30d5\u30a1\u30a4\u30eb\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 "),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"DescriptionParam")," \u3067\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u306e\u8a73\u7d30\u60c5\u5831\u3092\u30e1\u30e2\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Character Name",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u306e\u540d\u524d\u3092\u6587\u5b57\u5217\u3067\u30e1\u30e2\u3057\u307e\u3059 ")))),(0,o.kt)("h2",{id:"ai"},"AI"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:n(4392).Z})),(0,o.kt)("h3",{id:"actor-type"},"Actor Type"),(0,o.kt)("p",null,"\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u306e\u30bf\u30a4\u30d7\uff08\u4ed6\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u306eAI\u306b\u3069\u3046\u8a8d\u8b58\u3055\u308c\u308b\u304b\uff09\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Playable",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u30ad\u30e3\u30e9\u30af\u30bf\u30fc"))),(0,o.kt)("li",{parentName:"ul"},"NpcTalker",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u558b\u308b\u3053\u3068\u304c\u3067\u304d\u308bNPC"))),(0,o.kt)("li",{parentName:"ul"},"NpcStore",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u30a4\u30d9\u30f3\u30c8\uff08\u30b7\u30e7\u30c3\u30d7\uff09\u306e\u3042\u308bNPC"))),(0,o.kt)("li",{parentName:"ul"},"NpcEnemy",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u6575\u3068\u306a\u308bNPC")))),(0,o.kt)("h3",{id:"behavior-tree"},"Behavior Tree"),(0,o.kt)("p",null,"BehaviorDesigner \u306e ",(0,o.kt)("a",{parentName:"p",href:"../../other_library/behavior_designer"},"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\uff08External Behavior Tree\uff09")," \u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,o.kt)("h3",{id:"recollect-\u62e1\u5f35\u30ce\u30fc\u30c9"},"Recollect \u62e1\u5f35\u30ce\u30fc\u30c9"),(0,o.kt)("p",null,"BehaviorDesigner \u306e\u57fa\u672c\u6a5f\u80fd\u306b\u3064\u3044\u3066\u306f ",(0,o.kt)("a",{parentName:"p",href:"../../other_library/behavior_designer"},"\u3053\u3061\u3089")," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("h3",{id:"actions"},"Actions"),(0,o.kt)("h3",{id:"conditionals"},"Conditionals"),(0,o.kt)("h2",{id:"3d-gamekit"},"3D GameKit"))}m.isMDXComponent=!0},3408:function(e,t,n){t.Z=n.p+"assets/images/0_0_0-7c0d7d74a39148691bfd9ff50bf3dc79.png"},4392:function(e,t){t.Z="data:image/png;base64,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"}}]);