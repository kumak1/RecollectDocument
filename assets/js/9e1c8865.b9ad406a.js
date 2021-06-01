(self.webpackChunkuser_manual=self.webpackChunkuser_manual||[]).push([[9952],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(r),f=a,g=s["".concat(c,".").concat(f)]||s[f]||m[f]||o;return r?n.createElement(g,l(l({ref:t},p),{},{components:r})):n.createElement(g,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},2588:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),l=["components"],i={title:"Recollect 0.2.12",author:"kumak1",author_title:"Director, Chief Engineer",author_url:"https://github.com/kumak1",author_image_url:"https://pbs.twimg.com/profile_images/1049275686823710721/qmZPvZ5J_400x400.jpg",tags:["LevelDesign"]},c={permalink:"/RecollectDocument/blog/2021/02/01/0.2.12",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2021-02-01-0.2.12.md",source:"@site/blog/2021-02-01-0.2.12.md",title:"Recollect 0.2.12",description:"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",date:"2021-02-01T00:00:00.000Z",formattedDate:"February 1, 2021",tags:[{label:"LevelDesign",permalink:"/RecollectDocument/blog/tags/level-design"}],readingTime:.445,truncated:!0,prevItem:{title:"Recollect 0.2.13",permalink:"/RecollectDocument/blog/2021/02/13/0.2.13"},nextItem:{title:"Recollect 0.2.11",permalink:"/RecollectDocument/blog/2021/01/28/0.2.11"}},u=[{value:"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",id:"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",children:[]},{value:"\u5909\u66f4\u7b87\u6240",id:"\u5909\u66f4\u7b87\u6240",children:[]}],p={toc:u};function m(e){var t=e.components,i=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"},"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"),(0,o.kt)("h2",{id:"\u5909\u66f4\u7b87\u6240"},"\u5909\u66f4\u7b87\u6240"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Level Design",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u30ab\u30e1\u30e9\u30a4\u30d9\u30f3\u30c8\u7528\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8 ",(0,o.kt)("inlineCode",{parentName:"li"},"CameraCraneZone")," \u3092\u8ffd\u52a0\u3057\u307e\u3057\u305f",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u7a7a\u306eGameObject\u306bCollider\u3092\u8ffd\u52a0\uff08\u8907\u6570\u53ef\uff09\u3057 ",(0,o.kt)("inlineCode",{parentName:"li"},"Is Trigger")," \u3092\u30c1\u30a7\u30c3\u30af\u3057\u3001CameraCraneZone\u3092\u8ffd\u52a0\u3057\u307e\u3059"),(0,o.kt)("li",{parentName:"ul"},"Collider \u306b Actor \u304c\u4fb5\u5165\u3057\u305f\u3089\u3001",(0,o.kt)("inlineCode",{parentName:"li"},"CameraCraneZone")," \u306b\u30bb\u30c3\u30c8\u3055\u308c\u305f ",(0,o.kt)("inlineCode",{parentName:"li"},"CameraPosition")," \u306b\u7f6e\u304d\u63db\u308f\u308a\u307e\u3059"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{alt:"img",src:r(6810).Z}))))))}m.isMDXComponent=!0},6810:function(e,t,r){"use strict";t.Z=r.p+"assets/images/02-01-001-a63a2467cafb0bae46c3a398da89436c.png"}}]);