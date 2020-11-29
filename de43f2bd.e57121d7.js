(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return O}));var a=n(3),b=n(7),r=(n(0),n(122)),l={id:"fbx",title:"FBX Importer"},c={unversionedId:"manual/editor_extension/fbx",id:"manual/editor_extension/fbx",isDocsHomePage:!1,title:"FBX Importer",description:"\u6982\u8981",source:"@site/docs/manual/editor_extension/fbx.md",slug:"/manual/editor_extension/fbx",permalink:"/RecollectDocument/docs/manual/editor_extension/fbx",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/manual/editor_extension/fbx.md",version:"current",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/RecollectDocument/docs/manual/shader/top"},next:{title:"Screen Shot",permalink:"/RecollectDocument/docs/manual/editor_extension/screen_shot"}},o=[{value:"\u6982\u8981",id:"\u6982\u8981",children:[{value:"JSON\u30d5\u30a1\u30a4\u30eb\u306e\u914d\u7f6e\u65b9\u6cd5",id:"json\u30d5\u30a1\u30a4\u30eb\u306e\u914d\u7f6e\u65b9\u6cd5",children:[]},{value:"JSON\u30d5\u30a1\u30a4\u30eb\u306e\u4f5c\u6210",id:"json\u30d5\u30a1\u30a4\u30eb\u306e\u4f5c\u6210",children:[]}]},{value:"FbxAnimationClips \u306e\u8a73\u7d30",id:"fbxanimationclips-\u306e\u8a73\u7d30",children:[]},{value:"FbxAnimationEvents \u306e\u8a73\u7d30",id:"fbxanimationevents-\u306e\u8a73\u7d30",children:[{value:"\u5171\u901a\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u5171\u901a\u30d1\u30e9\u30e1\u30fc\u30bf",children:[]},{value:"EventMove",id:"eventmove",children:[]},{value:"EventStep",id:"eventstep",children:[]},{value:"EventAbsorb",id:"eventabsorb",children:[]},{value:"EventRotate",id:"eventrotate",children:[]},{value:"EventRotateLinear",id:"eventrotatelinear",children:[]},{value:"EventAttack",id:"eventattack",children:[]},{value:"EventSuperArmorOn",id:"eventsuperarmoron",children:[]},{value:"EventSuperArmorOff",id:"eventsuperarmoroff",children:[]},{value:"EventCounterOn",id:"eventcounteron",children:[]},{value:"EventCounterOff",id:"eventcounteroff",children:[]},{value:"EventAttackBreakOn",id:"eventattackbreakon",children:[]},{value:"EventAttackBreakOff",id:"eventattackbreakoff",children:[]},{value:"EventLockOnBreak",id:"eventlockonbreak",children:[]}]}],i={rightToc:o};function O(e){var t=e.components,l=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,l,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"\u6982\u8981"},"\u6982\u8981"),Object(r.b)("p",null,"Unity\u3067\u306fFBX\u30d5\u30a1\u30a4\u30eb\u3092 Inspector \u3067\u78ba\u8a8d\u3059\u308b\u3068 ",Object(r.b)("inlineCode",{parentName:"p"},"Animation")," \u30bf\u30d6\u3067\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u30a4\u30f3\u30dd\u30fc\u30c8\u8a2d\u5b9a\u3092\u5909\u66f4\u3067\u304d\u305f\u308a\u3001\n",Object(r.b)("inlineCode",{parentName:"p"},"Clips")," \u306b\u3066\u6307\u5b9a\u7bc4\u56f2\u3067\u5207\u308a\u51fa\u3057\u3066\u5229\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),Object(r.b)("p",null,Object(r.b)("img",{alt:"img",src:n(170).default})),Object(r.b)("p",null,"\u4e00\u898b\u4fbf\u5229\u306a\u306e\u3067\u3059\u304c\u3001\u8a2d\u5b9a\u5024\u306fFBX\u306emeta\u30d5\u30a1\u30a4\u30eb\u306b\u4fdd\u5b58\u3055\u308c\u3066\u304a\u308a\u3001\u30d5\u30a1\u30a4\u30eb\u306e\u66f4\u65b0\u30fb\u540d\u79f0\u5909\u66f4\u306a\u3069\u306b\u5f31\u3044\u7ba1\u7406\u65b9\u6cd5\u3068\u306a\u3063\u3066\u3044\u307e\u3059\u3002\n\u3053\u308c\u3092\u89e3\u6c7a\u3059\u308b\u305f\u3081\u306b FBX Importer \u3092\u958b\u767a\u30fb\u7528\u610f\u3057\u3066\u3044\u307e\u3059\u3002"),Object(r.b)("h3",{id:"json\u30d5\u30a1\u30a4\u30eb\u306e\u914d\u7f6e\u65b9\u6cd5"},"JSON\u30d5\u30a1\u30a4\u30eb\u306e\u914d\u7f6e\u65b9\u6cd5"),Object(r.b)("p",null,"FBX Importer \u306f FBX\u30d5\u30a1\u30a4\u30eb\u306eImport\u6642\u306b\u81ea\u52d5\u7684\u306b\u9069\u7528\u3055\u308c\u307e\u3059\u3002\nFBX\u30d5\u30a1\u30a4\u30eb\u3068\u540c\u540d\u306eJSON\u30d5\u30a1\u30a4\u30eb\u3092\u7528\u610f\u3059\u308b\u3053\u3068\u3067\u3001JSON\u3067\u6307\u5b9a\u3057\u305f\u8a2d\u5b9a\u3092\u81ea\u52d5\u7684\u306bFBX\u30d5\u30a1\u30a4\u30eb\u306b\u9069\u7528\u3057\u307e\u3059\u3002"),Object(r.b)("p",null,Object(r.b)("img",{alt:"img",src:n(171).default})),Object(r.b)("h3",{id:"json\u30d5\u30a1\u30a4\u30eb\u306e\u4f5c\u6210"},"JSON\u30d5\u30a1\u30a4\u30eb\u306e\u4f5c\u6210"),Object(r.b)("p",null,"JSON \u30d5\u30a1\u30a4\u30eb\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u8a18\u8ff0\u3057\u307e\u3059\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "FbxAnimationCompression" : "Reduction",\n    "FbxAnimationResampleCurves" : true,\n    "FbxAnimationRotationError" : 0.5,\n    "FbxAnimationPositionError" : 0.5,\n    "FbxAnimationScaleError" : 0.5,\n    "FbxAnimationClips": [\n        {\n            "name": "Striker_Combine_DoublePunch",\n            "firstFrame": 3,\n            "lastFrame": 33,\n            "loop": "",\n            "FbxAnimationEvents": [\n              { "functionName": "EventMove", "frame": 3, "MoveDistance": 0.0 }\n            ]\n        }\n    ]\n}\n')),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property:"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Function:"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"FbxAnimationCompression"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Anim. Compression")," \u306e\u8a2d\u5b9a\u3092\u884c\u3044\u307e\u3059\u3002",Object(r.b)("inlineCode",{parentName:"td"},"reduction")," ",Object(r.b)("inlineCode",{parentName:"td"},"optimal")," ",Object(r.b)("inlineCode",{parentName:"td"},"off")," \u3092\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"FbxAnimationResampleCurves"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Resample Curves")," \u306e\u8a2d\u5b9a\u3092\u884c\u3044\u307e\u3059\u3002 ",Object(r.b)("inlineCode",{parentName:"td"},"true")," ",Object(r.b)("inlineCode",{parentName:"td"},"false")," \u3092\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"FbxAnimationRotationError"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Rotation Error"),"  \u306e\u8a2d\u5b9a\u3092\u884c\u3044\u307e\u3059\u3002 float \u3067\u5024\u3092\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"FbxAnimationPositionError"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Position Error"),"  \u306e\u8a2d\u5b9a\u3092\u884c\u3044\u307e\u3059\u3002 float \u3067\u5024\u3092\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"FbxAnimationScaleError"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Scale Error"),"  \u306e\u8a2d\u5b9a\u3092\u884c\u3044\u307e\u3059\u3002 float \u3067\u5024\u3092\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"FbxAnimationClips"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Clips")," \u306e\u5206\u5272\u6307\u5b9a\u3092\u884c\u3044\u307e\u3059\u3002 ",Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"#fbxanimationclips-%E3%81%AE%E8%A9%B3%E7%B4%B0"}),"\u5225\u9014\u8a73\u7d30\u3092\u8a18\u8ff0"),"\u3057\u3066\u3044\u307e\u3059\u3002")))),Object(r.b)("h2",{id:"fbxanimationclips-\u306e\u8a73\u7d30"},"FbxAnimationClips \u306e\u8a73\u7d30"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    // \u4e2d\u7565\n\n    "FbxAnimationClips": [\n        {\n            "name": "Striker_Combine_DoublePunch",\n            "firstFrame": 3,\n            "lastFrame": 33,\n            "loop": "",\n            "FbxAnimationEvents": [\n              { "functionName": "EventMove", "frame": 3, "MoveDistance": 0.0 }\n            ]\n        }\n    ]\n}\n')),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property:"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Function:"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"name"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"firstFrame"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"lastFrame"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"loop"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"FbxAnimationEvents"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))),Object(r.b)("h2",{id:"fbxanimationevents-\u306e\u8a73\u7d30"},"FbxAnimationEvents \u306e\u8a73\u7d30"),Object(r.b)("p",null,"RecollectActor \u306b\u306f\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u3092\u64cd\u4f5c\u3059\u308b\u69d8\u3005\u306a public function \u304c\u7528\u610f\u3055\u308c\u3066\u304a\u308a\u3001\nAnimation Clip \u306e Events \u306b\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3067\u5229\u7528\u3067\u304d\u307e\u3059\u3002\n",Object(r.b)("inlineCode",{parentName:"p"},"FbxAnimationEvents")," \u306b\u8a2d\u5b9a\u3092\u66f8\u304d\u52a0\u3048\u308b\u3053\u3068\u3067\u3001"),Object(r.b)("h3",{id:"\u5171\u901a\u30d1\u30e9\u30e1\u30fc\u30bf"},"\u5171\u901a\u30d1\u30e9\u30e1\u30fc\u30bf"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property:"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Function:"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"functionName"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u52d5\u4f5c\u3055\u305b\u305f\u3044\u95a2\u6570\u540d\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"frame"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"FbxAnimationClips \u306e firstFrame/lastFrame \u3067\u5207\u308a\u51fa\u3057\u305f\u5f8c\u306e\u30d5\u30ec\u30fc\u30e0\u6570\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5168\u4f53\u304b\u3089\u5272\u308a\u51fa\u3057\u305f\u30d5\u30ec\u30fc\u30e0\u6570\u3067\u306f\u306a\u3044\u306e\u3067\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))),Object(r.b)("h3",{id:"eventmove"},"EventMove"),Object(r.b)("p",null,"\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u3092\u6307\u5b9a\u65b9\u5411\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "functionName": "EventMove",\n  "frame": 3,\n  "MoveDistance": 0.0\n}\n')),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property:"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Function:"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"MoveDistance"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u79fb\u52d5\u3059\u308b\u8ddd\u96e2\u3092 float \u3067\u6307\u5b9a\u3057\u307e\u3059\u3002")))),Object(r.b)("h3",{id:"eventstep"},"EventStep"),Object(r.b)("p",null,"\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u3092\u6307\u5b9a\u65b9\u5411\u306b\u77ac\u9593\u7684\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "functionName": "EventStep",\n  "frame": 3,\n  "MoveDistance": 0.0\n}\n')),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property:"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Function:"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"MoveDistance"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u79fb\u52d5\u3059\u308b\u8ddd\u96e2\u3092 float \u3067\u6307\u5b9a\u3057\u307e\u3059\u3002")))),Object(r.b)("h3",{id:"eventabsorb"},"EventAbsorb"),Object(r.b)("p",null,"\u5468\u8fba\u306e\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u3092\u6307\u5b9a\u5ea7\u6a19\u306b\u96c6\u3081\u307e\u3059\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "functionName": "EventAbsorb",\n  "frame": 3,\n  "AbsorbOffset": {"x": 0.0,"y": 0.0,"z": 0.0},\n  "AbsorbRange": 3.0,\n  "AbsorbAmount": 1.0\n}\n')),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property:"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Function:"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"AbsorbOffset"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5468\u8fba\u30ad\u30e3\u30e9\u3092\u96c6\u3081\u308b\u5ea7\u6a19\u3092 Vector3 \u3067\u6307\u5b9a\u3057\u307e\u3059\u3002(0,0,0) \u3067\u30ad\u30e3\u30e9\u306e\u539f\u70b9\u3067\u3059\u3002")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"AbsorbRange"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5468\u8fba\u30ad\u30e3\u30e9\u3092\u96c6\u3081\u308b\u5186\u306e\u5927\u304d\u3055\u3092 float \u3067\u6307\u5b9a\u3057\u307e\u3059\u3002")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"AbsorbAmount"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5468\u8fba\u30ad\u30e3\u30e9\u3092\u96c6\u3081\u308b\u5f37\u3055\u3092 float \u3067\u6307\u5b9a\u3057\u307e\u3059\u3002")))),Object(r.b)("h3",{id:"eventrotate"},"EventRotate"),Object(r.b)("p",null,"\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u3092\u6307\u5b9a\u65b9\u5411\u306b\u77ac\u9593\u7684\u306b\u56de\u8ee2\u3057\u307e\u3059\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "functionName": "EventRotate",\n  "frame": 3,\n  "RotateRight": 15,\n  "RotateLeft": 0\n}\n')),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property:"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Function:"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"RotateRight"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u56de\u8ee2\u3059\u308b\u89d2\u5ea6\uff08degree\uff09\u3092 float \u3067\u6307\u5b9a\u3057\u307e\u3059\u3002")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"RotateLeft"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u56de\u8ee2\u3059\u308b\u89d2\u5ea6\uff08degree\uff09\u3092 float \u3067\u6307\u5b9a\u3057\u307e\u3059\u3002")))),Object(r.b)("h3",{id:"eventrotatelinear"},"EventRotateLinear"),Object(r.b)("p",null,"\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u3092\u6307\u5b9a\u65b9\u5411\u306b\u6307\u5b9a\u30d5\u30ec\u30fc\u30e0\u3064\u304b\u3063\u3066\u56de\u8ee2\u3057\u307e\u3059\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "functionName": "EventRotateLinear",\n  "frame": 3,\n  "RotateRight": 15,\n  "RotateLeft": 0,\n  "RotateFrame": 10\n}\n')),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property:"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Function:"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"RotateRight"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u56de\u8ee2\u3059\u308b\u89d2\u5ea6\uff08degree\uff09\u3092 float \u3067\u6307\u5b9a\u3057\u307e\u3059\u3002")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"RotateLeft"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u56de\u8ee2\u3059\u308b\u89d2\u5ea6\uff08degree\uff09\u3092 float \u3067\u6307\u5b9a\u3057\u307e\u3059\u3002")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"RotateFrame"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u56de\u8ee2\u3059\u308b\u30d5\u30ec\u30fc\u30e0\u6570\u3092 int \u3067\u6307\u5b9a\u3057\u307e\u3059\u3002")))),Object(r.b)("h3",{id:"eventattack"},"EventAttack"),Object(r.b)("p",null,"\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u3092\u6307\u5b9a\u65b9\u5411\u306b\u77ac\u9593\u7684\u306b\u56de\u8ee2\u3057\u307e\u3059\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "functionName": "EventAttack",\n  "frame": 4.5,\n  "AttackColliderOffset": {"x": 0.0, "y": 0.0, "z": 0.0},\n  "AttackColliderRadius": 0.0,\n  "BlowDirection": "Front",\n  "BlowDistance": 0.05,\n  "DamageMotionType": "LightFrontLeft"\n}\n')),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property:"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Function:"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"AttackColliderOffset"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u653b\u6483\u30d2\u30c3\u30c8\u5224\u5b9a\u7528\u30b3\u30e9\u30a4\u30c0\u30fc\u306e\u5ea7\u6a19\u3092 Vector3 \u3067\u6307\u5b9a\u3057\u307e\u3059\u3002(0,0,0) \u3067\u30ad\u30e3\u30e9\u306e\u539f\u70b9\u3067\u3059\u3002")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"AttackColliderRadius"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u653b\u6483\u30d2\u30c3\u30c8\u5224\u5b9a\u7528\u30b3\u30e9\u30a4\u30c0\u30fc\u306e\u534a\u5f84\u3092 float \u3067\u6307\u5b9a\u3057\u307e\u3059\u3002")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"BlowDirection"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u653b\u6483\u30d2\u30c3\u30c8\u6642\u306b\u5439\u304d\u98db\u3070\u3059\u65b9\u5411\u3092 ",Object(r.b)("inlineCode",{parentName:"td"},"Front")," ",Object(r.b)("inlineCode",{parentName:"td"},"Back")," ",Object(r.b)("inlineCode",{parentName:"td"},"Right")," ",Object(r.b)("inlineCode",{parentName:"td"},"Left")," \u304b\u3089\u6307\u5b9a\u3057\u307e\u3059\u3002")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"BlowDistance"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u653b\u6483\u30d2\u30c3\u30c8\u6642\u306b\u5439\u304d\u98db\u3070\u3059\u8ddd\u96e2\u3092 float \u3067\u6307\u5b9a\u3057\u307e\u3059\u3002")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DamageMotionType"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u653b\u6483\u304c\u30d2\u30c3\u30c8\u3057\u305f\u969b\u306e\u30c0\u30e1\u30fc\u30b8\u30e2\u30fc\u30b7\u30e7\u30f3\u3092\u6587\u5b57\u5217\u3067\u6307\u5b9a\u3057\u307e\u3059\u3002")))),Object(r.b)("h4",{id:"damagemotiontype-\u306b\u6307\u5b9a\u3059\u308b\u6587\u5b57\u5217"},"DamageMotionType \u306b\u6307\u5b9a\u3059\u308b\u6587\u5b57\u5217"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Light\nLightFrontLeft\nLightFrontRight\nMedium\nMediumFrontLeft\nMediumFrontRight\nHeavy\nHeavyFrontLeft\nHeavyFrontRight\nPanic\nBlow\nBlowDodge\nFatal\nFatalBlow\nFatalBlowDodge\nFatalFly\nFatalFlyDodge\nRetire\n")),Object(r.b)("h3",{id:"eventsuperarmoron"},"EventSuperArmorOn"),Object(r.b)("p",null,"\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u306e\u30b9\u30fc\u30d1\u30fc\u30a2\u30fc\u30de\u30fc\u3092\u6307\u5b9a\u306e\u5f37\u3055\u3067On\u306b\u3059\u308b\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "functionName": "EventSuperArmorOn",\n  "frame": 4.5,\n  "Tier": 0\n}\n')),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property:"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Function:"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Tier"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u30b9\u30fc\u30d1\u30fc\u30a2\u30fc\u30de\u30fc\u306e\u5f37\u3055\u3092 0 ~ 3 \u3067\u6307\u5b9a\u3057\u307e\u3059\u3002")))),Object(r.b)("h3",{id:"eventsuperarmoroff"},"EventSuperArmorOff"),Object(r.b)("p",null,"\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u306e\u30b9\u30fc\u30d1\u30fc\u30a2\u30fc\u30de\u30fc\u3092\u89e3\u9664\u3057\u307e\u3059\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "functionName": "EventSuperArmorOff",\n  "frame": 4.5\n}\n')),Object(r.b)("h3",{id:"eventcounteron"},"EventCounterOn"),Object(r.b)("p",null,"\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u306e\u30ab\u30a6\u30f3\u30bf\u30fc\u3092\u6307\u5b9a\u306e\u5f37\u3055\u3067On\u306b\u3059\u308b\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "functionName": "EventCounterOn",\n  "frame": 4.5,\n  "Tier": 0\n}\n')),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property:"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Function:"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Tier"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u30ab\u30a6\u30f3\u30bf\u30fc\u306e\u5f37\u3055\u3092 0 ~ 3 \u3067\u6307\u5b9a\u3057\u307e\u3059\u3002")))),Object(r.b)("h3",{id:"eventcounteroff"},"EventCounterOff"),Object(r.b)("p",null,"\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u306e\u30ab\u30a6\u30f3\u30bf\u30fc\u3092\u89e3\u9664\u3057\u307e\u3059\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "functionName": "EventCounterOff",\n  "frame": 4.5\n}\n')),Object(r.b)("h3",{id:"eventattackbreakon"},"EventAttackBreakOn"),Object(r.b)("p",null,"\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u306e\u653b\u6483\u3092\u76f8\u6bba\uff08or \u30d1\u30ea\u30a3\uff09\u3057\u307e\u3059\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "functionName": "EventAttackBreakOff",\n  "frame": 4.5,\n  "Tier": 0\n}\n')),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property:"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Function:"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Tier"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u76f8\u6bba\u306e\u5f37\u3055\u3092 0 ~ 3 \u3067\u6307\u5b9a\u3057\u307e\u3059\u3002")))),Object(r.b)("h3",{id:"eventattackbreakoff"},"EventAttackBreakOff"),Object(r.b)("p",null,"\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u306e\u653b\u6483\u3092\u76f8\u6bba\uff08or \u30d1\u30ea\u30a3\uff09\u3057\u307e\u3059\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "functionName": "EventAttackBreakOff",\n  "frame": 4.5\n}\n')),Object(r.b)("h3",{id:"eventlockonbreak"},"EventLockOnBreak"),Object(r.b)("p",null,"\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u306e\u30ed\u30c3\u30af\u30aa\u30f3\u72b6\u614b\u3092\u89e3\u9664\u3057\u307e\u3059\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "functionName": "EventLockOnBreak",\n  "frame": 4.5\n}\n')))}O.isMDXComponent=!0},122:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return u}));var a=n(0),b=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,b=function(e,t){if(null==e)return{};var n,a,b={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var i=b.a.createContext({}),O=function(e){var t=b.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},j=function(e){var t=O(e.components);return b.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},p=b.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),j=O(n),p=a,u=j["".concat(l,".").concat(p)]||j[p]||m[p]||r;return n?b.a.createElement(u,c(c({ref:t},i),{},{components:n})):b.a.createElement(u,c({ref:t},i))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=p;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<r;i++)l[i]=n[i];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},170:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/fbx-0_0-b25dea8d8527ab9c4fed633ef8dd4be3.png"},171:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/fbx-1_0-132df755418d8b90e8035e07e1be1a22.png"}}]);