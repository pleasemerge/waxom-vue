(function(e){function t(t){for(var r,o,s=t[0],a=t[1],l=t[2],u=0,b=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&b.push(i[o][0]),i[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);d&&d(t);while(b.length)b.shift()();return n.push.apply(n,l||[]),c()}function c(){for(var e,t=0;t<n.length;t++){for(var c=n[t],r=!0,o=1;o<c.length;o++){var a=c[o];0!==i[a]&&(r=!1)}r&&(n.splice(t--,1),e=s(s.s=c[0]))}return e}var r={},i={app:0},n=[];function o(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"a1deed88"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var c=r[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,s),c.l=!0,c.exports}s.e=function(e){var t=[],c=i[e];if(0!==c)if(c)t.push(c[2]);else{var r=new Promise((function(t,r){c=i[e]=[t,r]}));t.push(c[2]=r);var n,a=document.createElement("script");a.charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.src=o(e);var l=new Error;n=function(t){a.onerror=a.onload=null,clearTimeout(u);var c=i[e];if(0!==c){if(c){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",l.name="ChunkLoadError",l.type=r,l.request=n,c[1](l)}i[e]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:a})}),12e4);a.onerror=a.onload=n,document.head.appendChild(a)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,c){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(s.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(c,r,function(t){return e[t]}.bind(null,r));return c},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/waxom-vue/",s.oe=function(e){throw console.error(e),e};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var d=l;n.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"4d56":function(e,t,c){},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var r=c("7a23");function i(e,t,c,i,n,o){var s=Object(r["C"])("app-navbar"),a=Object(r["C"])("router-view");return Object(r["v"])(),Object(r["g"])(r["a"],null,[Object(r["k"])(s),Object(r["k"])(a)],64)}var n={class:Object(r["q"])(["app-container flex items-center justify-between"])},o={href:"javascript:;"},s=["src"],a=Object(r["h"])("span",{class:"align-middle text-3xl"},"Waxom",-1),l={class:"relative"};function u(e,t,c,i,u,d){var b=Object(r["C"])("desktop-menu"),m=Object(r["C"])("font-awesome-icon"),p=Object(r["C"])("mobile-menu"),g=Object(r["D"])("scroll-to");return Object(r["v"])(),Object(r["g"])(r["a"],null,[Object(r["h"])("div",{id:"navbar",class:Object(r["q"])(["fixed z-50 top-0 w-full h-20 flex items-center text-white transition-colors duration-700",u.pageScrolled?"bg-black":"bg-transparent"])},[Object(r["h"])("div",n,[Object(r["h"])("div",null,[Object(r["J"])(Object(r["h"])("a",o,[Object(r["h"])("img",{src:"".concat(e.$publicPath,"img/logo.png"),width:"50",class:"inline-block py-2 mx-2 md:mx-0"},null,8,s),a],512),[[g,"#navbar"]])]),Object(r["h"])("div",l,[Object(r["h"])("nav",null,[Object(r["k"])(b,{links:u.links},null,8,["links"]),Object(r["h"])("a",{href:"javascript:;",class:"inline-block px-2 sm:hidden text-2xl",onClick:t[0]||(t[0]=function(e){return d.toggleNavMenu()})},[Object(r["k"])(m,{icon:"bars",class:"text-2xl"})]),u.showNavMenu?(Object(r["v"])(),Object(r["e"])(p,{key:0,links:u.links,onHideMenu:t[1]||(t[1]=function(e){return u.showNavMenu=!1})},null,8,["links"])):Object(r["f"])("",!0)])])])],2),u.showNavMenu?(Object(r["v"])(),Object(r["g"])("div",{key:0,class:"block sm:hidden fixed top-0 w-screen h-screen min-h-full bg-gray-900 opacity-40 -z-10",onClick:t[2]||(t[2]=function(){return d.toggleNavMenu&&d.toggleNavMenu.apply(d,arguments)})})):Object(r["f"])("",!0)],64)}var d={class:"hidden sm:flex gap-4"},b={href:"javascript:;",class:"opacity-90"};function m(e,t,c,i,n,o){var s=Object(r["D"])("scroll-to");return Object(r["v"])(),Object(r["g"])("ul",d,[(Object(r["v"])(!0),Object(r["g"])(r["a"],null,Object(r["B"])(c.links,(function(e,t){return Object(r["v"])(),Object(r["g"])("li",{key:t},[Object(r["J"])(Object(r["h"])("a",b,[Object(r["j"])(Object(r["F"])(e.text),1)],512),[[s,e.scrollTo||""]])])})),128))])}var p={props:{links:{type:Array,required:!1}}},g=c("6b0d"),j=c.n(g);const v=j()(p,[["render",m]]);var O=v,h={class:"absolute block sm:hidden top-0 right-0 py-3 bg-white text-black border rounded flex flex-wrap"},f={href:"javascript:;"};function y(e,t,c,i,n,o){var s=Object(r["D"])("scroll-to");return Object(r["v"])(),Object(r["g"])("ul",h,[(Object(r["v"])(!0),Object(r["g"])(r["a"],null,Object(r["B"])(c.links,(function(e,c){return Object(r["J"])((Object(r["v"])(),Object(r["g"])("li",{key:c,class:"mx-4 hover:text-gray-500 w-full transition-colors duration-200",onClick:t[0]||(t[0]=Object(r["K"])((function(){return o.hideMenu&&o.hideMenu.apply(o,arguments)}),["prevent"]))},[Object(r["h"])("a",f,Object(r["F"])(e.text),1)],512)),[[s,e.scrollTo||""]])})),128))])}var x={emits:["hideMenu"],props:{links:{type:Array,required:!1}},methods:{hideMenu:function(){var e=this;setTimeout((function(){e.$emit("hideMenu")}),100)}}};const w=j()(x,[["render",y]]);var k=w,C={components:{DesktopMenu:O,MobileMenu:k},data:function(){return{showNavMenu:!1,links:[{text:"Home",to:"Home",scrollTo:"#navbar"},{text:"Projects",to:"Projects",scrollTo:"#latest-projects"},{text:"Presentation",to:"Presentation",scrollTo:"#presentation"},{text:"Stats",to:"Stats",scrollTo:"#stats"},{text:"Customers",to:"Customers",scrollTo:"#customers"}],pageScrolled:!1}},methods:{toggleNavMenu:function(){this.showNavMenu=!this.showNavMenu},handleScroll:function(){this.pageScrolled=window.scrollY>0}},created:function(){window.addEventListener("scroll",this.handleScroll)},unmounted:function(){window.removeEventListener("scroll",this.handleScroll)}};const S=j()(C,[["render",u]]);var P=S,A={components:{AppNavbar:P}};c("c07b");const I=j()(A,[["render",i]]);var q=I,M=(c("d3b7"),c("3ca3"),c("ddb0"),c("6c02")),T={id:"our-skills-wrapper",class:"app-container my-4 md:my-16"},B={class:"bg-secondary"},D={class:"app-container my-2"},E={class:"app-container",id:"latest-projects"},F={class:"mt-0 md:mt-4",id:"presentation"},N={id:"stats"},$={id:"customers"},V={id:"footer",class:"bg-black"};function L(e,t,c,i,n,o){var s=Object(r["C"])("app-header"),a=Object(r["C"])("our-skills"),l=Object(r["C"])("app-promo"),u=Object(r["C"])("latest-projects"),d=Object(r["C"])("app-video"),b=Object(r["C"])("app-stats"),m=Object(r["C"])("our-customers"),p=Object(r["C"])("app-footer");return Object(r["v"])(),Object(r["g"])(r["a"],null,[Object(r["h"])("div",null,[Object(r["k"])(s)]),Object(r["h"])("div",T,[Object(r["k"])(a)]),Object(r["h"])("div",B,[Object(r["h"])("div",D,[Object(r["k"])(l)])]),Object(r["h"])("div",E,[Object(r["k"])(u)]),Object(r["h"])("div",F,[Object(r["k"])(d,{videoSrc:"".concat(e.$publicPath,"video/placeholder.webm")},null,8,["videoSrc"])]),Object(r["h"])("div",N,[Object(r["k"])(b)]),Object(r["h"])("div",$,[Object(r["k"])(m)]),Object(r["h"])("footer",V,[Object(r["k"])(p,{class:"app-container"})])],64)}var _={class:"text-center"},z={class:"py-6"},W=Object(r["h"])("br",null,null,-1),H={href:"javascript:;",class:"px-4 py-3 rounded text-white bg-primary border-b-2 border-primary-darkest hover:border-primary transition-colors duration-300 hover:text-amber-100"},J=Object(r["j"])(" Learn more "),U=[J],K={class:"absolute bottom-10 flex items-center gap-2"},Q=["onClick"];function R(e,t,c,i,n,o){var s=Object(r["D"])("scroll-to");return Object(r["v"])(),Object(r["g"])("div",{class:"relative header home h-screen flex items-center justify-center text-white bg-cover transition-all duration-500",style:Object(r["r"])({backgroundImage:"url('".concat(n.currentItem.img,"')")})},[Object(r["h"])("div",_,[Object(r["h"])("h1",null,Object(r["F"])(n.currentItem.title),1),Object(r["h"])("h2",null,Object(r["F"])(n.currentItem.subtitle),1),Object(r["h"])("p",z,Object(r["F"])(n.currentItem.text),1),W,Object(r["J"])(Object(r["h"])("a",H,U,512),[[s,n.currentItem.scrollTo||""]])]),Object(r["h"])("div",K,[(Object(r["v"])(!0),Object(r["g"])(r["a"],null,Object(r["B"])(n.items,(function(e,t){return Object(r["v"])(),Object(r["g"])("a",{href:"javascript:;",key:e,class:Object(r["q"])(["rounded-full h-4 w-4 border border-white",o.isActive({index:t})?"bg-white":""]),onClick:function(e){return o.setItemIndex({index:t})}},null,10,Q)})),128))])],4)}var Y=c("b85c"),G="Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.",X="/waxom-vue/",Z={data:function(){return{items:[{img:"".concat(X,"img/img1.jpg"),title:"Unique and modern design",subtitle:"Content goes there",text:G,scrollTo:"#our-skills-wrapper"},{img:"".concat(X,"img/img2.jpg"),title:"Title",subtitle:"Content goes there",text:G,scrollTo:"#presentation"},{img:"".concat(X,"img/img3.jpg"),title:"Title",subtitle:"Content goes there",text:G,scrollTo:"#presentation"},{img:"".concat(X,"img/img4.jpg"),title:"Title",subtitle:"Content goes there",text:G,scrollTo:"#presentation"}],currentItem:{},currentItemIndex:0}},methods:{setItemIndex:function(e){var t=e.index;this.currentItemIndex=t},isActive:function(e){var t=e.index;return this.currentItemIndex===t}},watch:{currentItemIndex:function(e){this.currentItem=this.items[e]}},created:function(){this.currentItem=this.items[0];var e,t=Object(Y["a"])(this.items);try{for(t.s();!(e=t.n()).done;){var c=e.value,r=new Image;r.src=c.img}}catch(i){t.e(i)}finally{t.f()}}};const ee=j()(Z,[["render",R]]);var te=ee,ce={class:"grid grid-cols-1 md:grid-cols-4 grid-rows-1 gap-4"};function re(e,t,c,i,n,o){var s=Object(r["C"])("the-item");return Object(r["v"])(),Object(r["g"])("div",ce,[(Object(r["v"])(!0),Object(r["g"])(r["a"],null,Object(r["B"])(n.items,(function(e,t){return Object(r["v"])(),Object(r["e"])(s,{key:t,imgSrc:e.imgSrc,title:e.title,text:e.text},null,8,["imgSrc","title","text"])})),128))])}var ie="/waxom-vue/",ne={class:"grid grid-cols-1 grid-rows-1 text-center gap-2"},oe=["src"],se={class:"text-gray-600"};function ae(e,t,c,i,n,o){var s=Object(r["C"])("animated-svg");return Object(r["v"])(),Object(r["g"])("div",ne,[Object(r["h"])("img",{src:c.imgSrc,class:"mx-auto"},null,8,oe),Object(r["h"])("h1",null,Object(r["F"])(c.title),1),Object(r["h"])("p",se,Object(r["F"])(c.text),1),Object(r["k"])(s,{wrapperClass:"our-skills-square-wrapper",width:"w-1/3",imgSrc:"".concat(e.$publicPath,"img/rect-blue.svg")},null,8,["imgSrc"])])}c("159b"),c("99af");var le=["src"];function ue(e,t,c,i,n,o){return Object(r["v"])(),Object(r["g"])("div",{class:Object(r["q"])([c.wrapperClass,"h-8"])},[Object(r["h"])("img",{src:"".concat(c.imgSrc,"?q=").concat((new Date).getMilliseconds()),class:Object(r["q"])(["mx-auto",c.width,n.isIntersecting?"visible":"hidden"])},null,10,le)],2)}var de={props:{wrapperClass:{type:String,required:!0},imgSrc:{type:String,required:!0},width:{type:String,default:"w-2/3",required:!1}},data:function(){return{isIntersecting:!1}},mounted:function(){var e=this,t=document.querySelector(".".concat(this.wrapperClass));if(t){var c=function(t,c){t.forEach((function(t){t.isIntersecting?e.isIntersecting=!0:e.isIntersecting=!1}))},r=new IntersectionObserver(c,{rootMargin:"0px",threshold:0});r.observe(t)}}};const be=j()(de,[["render",ue]]);var me=be,pe={components:{AnimatedSvg:me},props:{imgSrc:{type:String,required:!0},title:{type:String,required:!0},text:{type:String,required:!0}},data:function(){return{isIntersecting:!1}},mounted:function(){var e=this,t=document.querySelector(".our-skills-square-wrapper");if(t){var c=function(t,c){t.forEach((function(t){t.isIntersecting?e.isIntersecting=!0:e.isIntersecting=!1}))},r=new IntersectionObserver(c,{rootMargin:"0px",threshold:0});r.observe(t)}}};const ge=j()(pe,[["render",ae]]);var je=ge,ve="Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.",Oe={components:{TheItem:je},data:function(){return{items:[{imgSrc:"".concat(ie,"img/skills/1.png"),title:"Web & App Design",text:ve},{imgSrc:"".concat(ie,"img/skills/2.png"),title:"Development",text:ve},{imgSrc:"".concat(ie,"img/skills/3.png"),title:"Customization",text:ve},{imgSrc:"".concat(ie,"img/skills/4.png"),title:"Marketing",text:ve}]}}};const he=j()(Oe,[["render",re]]);var fe=he,ye=Object(r["h"])("div",{class:"flex flex-wrap items-center justify-center"},[Object(r["h"])("div",{class:"w-full text-center pt-8"},[Object(r["h"])("h1",null,"Waxom is Realization of your Ideas.")]),Object(r["h"])("p",{class:"w-1/2 text-center py-4 text-gray-600"}," Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium. ")],-1),xe={class:"relative flex"},we={class:"my-20 hidden md:block border"},ke=["src"],Ce={class:"my-20 hidden md:block"},Se=["src"],Pe={class:"relative md:absolute absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 w-full md:w-1/2"},Ae=["src"];function Ie(e,t){return Object(r["v"])(),Object(r["g"])("div",null,[ye,Object(r["h"])("div",xe,[Object(r["h"])("div",we,[Object(r["h"])("img",{src:"".concat(e.$publicPath,"img/realization/2.png")},null,8,ke)]),Object(r["h"])("div",Ce,[Object(r["h"])("img",{src:"".concat(e.$publicPath,"/img/realization/3.png")},null,8,Se)]),Object(r["h"])("div",Pe,[Object(r["h"])("img",{src:"".concat(e.$publicPath,"/img/realization/1.png")},null,8,Ae)])])])}const qe={},Me=j()(qe,[["render",Ie]]);var Te=Me,Be=(c("b0c0"),c("4de4"),c("caad"),c("2532"),Object(r["h"])("div",{class:"text-center"},[Object(r["h"])("h1",null,"Latest projects"),Object(r["h"])("p",{class:"py-2"}," Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium. ")],-1)),De={class:"flex flex-wrap justify-center gap-2 text-gray-700 py-4"},Ee=["onClick"],Fe={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-2"};function Ne(e,t,c,i,n,o){var s=Object(r["C"])("project-item");return Object(r["v"])(),Object(r["g"])("div",null,[Be,Object(r["h"])("div",De,[(Object(r["v"])(!0),Object(r["g"])(r["a"],null,Object(r["B"])(n.categories,(function(e,t){return Object(r["v"])(),Object(r["g"])("a",{key:t,href:"javascript:;",class:Object(r["q"])({"px-2 py-1 border rounded":!0,"bg-primary text-white":n.activeCategoryID===e.id}),onClick:function(t){return o.showCategory({id:e.id})}},Object(r["F"])(e.name),11,Ee)})),128))]),Object(r["h"])("div",Fe,[Object(r["k"])(r["b"],{name:"fade"},{default:Object(r["I"])((function(){return[(Object(r["v"])(!0),Object(r["g"])(r["a"],null,Object(r["B"])(n.projects.filter((function(e){return 1===n.activeCategoryID?n.projects:e.categories.includes(n.activeCategoryID)})),(function(e,t){return Object(r["v"])(),Object(r["e"])(s,{key:t,class:Object(r["q"])(["flex flex-wrap transition-colors duration-200",o.isActive({id:e.id})?"bg-gray-700":"bg-secondary"]),isActive:o.isActive({id:e.id}),categories:n.categories,project:e,onSetActiveProject:o.setActiveProject},null,8,["class","isActive","categories","project","onSetActiveProject"])})),128))]})),_:1})])])}var $e={class:"w-full"},Ve={class:"p-4"};function Le(e,t,c,i,n,o){var s=Object(r["C"])("project-image"),a=Object(r["C"])("project-title"),l=Object(r["C"])("project-categories");return Object(r["v"])(),Object(r["g"])("div",null,[Object(r["h"])("figure",$e,[Object(r["k"])(s,{imgSrc:c.project.img,onSetActiveProject:o.setActiveProject},null,8,["imgSrc","onSetActiveProject"])]),Object(r["h"])("div",Ve,[Object(r["k"])(a,{isActive:c.isActive,title:c.project.title,onSetActiveProject:o.setActiveProject},null,8,["isActive","title","onSetActiveProject"]),Object(r["k"])(l,{categories:c.categories,projectCategories:c.project.categories,isActive:c.isActive},null,8,["categories","projectCategories","isActive"])])])}var _e={href:"javascript:;"},ze=["src"];function We(e,t,c,i,n,o){return Object(r["v"])(),Object(r["g"])("a",_e,[Object(r["h"])("img",{src:c.imgSrc,class:"object-cover w-full",onClick:t[0]||(t[0]=function(e){return o.setActiveProject()})},null,8,ze)])}var He={emits:["setActiveProject"],props:{imgSrc:{type:String,required:!0}},methods:{setActiveProject:function(){this.$emit("setActiveProject")}}};c("9d40");const Je=j()(He,[["render",We],["__scopeId","data-v-c85ccc0c"]]);var Ue=Je;function Ke(e,t,c,i,n,o){return Object(r["v"])(),Object(r["g"])("span",{class:Object(r["q"])(["block text-lg font-medium",c.isActive?"text-white":"text-primary-dark"])},[Object(r["h"])("a",{href:"javascript:;",onClick:t[0]||(t[0]=function(e){return o.setActiveProject()})},Object(r["F"])(c.title),1)],2)}var Qe={emits:["setActiveProject"],props:{title:{type:String,required:!0},isActive:{type:Boolean,required:!0}},methods:{setActiveProject:function(){this.$emit("setActiveProject")}}};const Re=j()(Qe,[["render",Ke]]);var Ye=Re,Ge=(c("7db0"),{key:0});function Xe(e,t,c,i,n,o){return Object(r["v"])(!0),Object(r["g"])(r["a"],null,Object(r["B"])(c.projectCategories,(function(e,t){return Object(r["v"])(),Object(r["g"])("span",{key:t,class:Object(r["q"])(["text-sm",c.isActive?"text-gray-300":"text-gray-600"])},[Object(r["j"])(Object(r["F"])(c.categories.find((function(t){return t.id===e})).name),1),t+1<c.projectCategories.length?(Object(r["v"])(),Object(r["g"])("span",Ge,", ")):Object(r["f"])("",!0)],2)})),128)}var Ze={props:{projectCategories:{type:Array,required:!1},categories:{type:Array,required:!1},isActive:{type:Boolean,required:!0}}};const et=j()(Ze,[["render",Xe]]);var tt=et,ct={emits:["setActiveProject"],components:{projectImage:Ue,projectTitle:Ye,projectCategories:tt},props:{project:{type:Object,required:!0},categories:{type:Array,required:!1},isActive:{type:Boolean}},methods:{setActiveProject:function(){this.$emit("setActiveProject",{id:this.project.id})}}};const rt=j()(ct,[["render",Le]]);var it=rt,nt={components:{ProjectItem:it},data:function(){return{categories:[{id:1,name:"All"},{id:2,name:"Web Design"},{id:3,name:"Mobile App"},{id:4,name:"Illustration"},{id:5,name:"Photography"}],projects:[{id:1,title:"Claritas Etiam Processum",categories:[5,2],img:"".concat(ie,"img/projects/1.png")},{id:2,title:"Quam Nutamus Farum",categories:[5],img:"".concat(ie,"img/projects/2.png")},{id:3,title:"Usus Legentis Videntur",categories:[3,4],img:"".concat(ie,"img/projects/3.png")},{id:4,title:"Claritas Etiam Processum",categories:[1,5],img:"".concat(ie,"img/projects/4.png")},{id:5,title:"Claritas Etiam Processum",categories:[2,3],img:"".concat(ie,"img/projects/5.png")},{id:6,title:"Claritas Etiam Processum",categories:[1,2,3],img:"".concat(ie,"img/projects/6.png")}],activeCategoryID:1,activeProjectID:1}},methods:{showCategory:function(e){var t=e.id;this.activeCategoryID=t,this.activeProjectID=-10},setActiveProject:function(e){var t=e.id;this.activeProjectID=t},isActive:function(e){var t=e.id;return this.activeProjectID===t}}};const ot=j()(nt,[["render",Ne]]);var st=ot,at={class:"relative h-100 min-h-full bg-cover flex items-center justify-center text-white"},lt=Object(r["h"])("img",{src:"/img/video_play.png",class:"block mx-auto"},null,-1),ut=[lt],dt={class:"text-center"},bt=Object(r["h"])("p",{class:"py-4"}," Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius, qui sequitur mutationem consuetudium. ",-1),mt={class:"absolute left-0 bottom-0 w-full h-full"},pt={controls:"controls",class:"w-full h-full object-fill",id:"placeholder-video"},gt=["src"];function jt(e,t,c,i,n,o){return Object(r["v"])(),Object(r["g"])("div",at,[n.showVideoBg?(Object(r["v"])(),Object(r["g"])("div",{key:0,class:"absolute flex items-center justify-center bottom-0 left-0 w-full h-full z-10",style:Object(r["r"])({backgroundImage:"url('/img/video-bg.png')"})},[Object(r["h"])("div",null,[Object(r["h"])("a",{href:"javascript:;",onClick:t[0]||(t[0]=function(){return o.playVideo&&o.playVideo.apply(o,arguments)})},ut),Object(r["h"])("div",dt,[Object(r["h"])("h1",null,[Object(r["h"])("a",{href:"javascript:;",onClick:t[1]||(t[1]=function(){return o.playVideo&&o.playVideo.apply(o,arguments)})},"Waxom Video Presentation")]),bt])])],4)):Object(r["f"])("",!0),Object(r["h"])("div",mt,[Object(r["h"])("video",pt,[Object(r["h"])("source",{src:c.videoSrc,type:"video/webm"},null,8,gt)])])])}var vt={props:{videoSrc:{type:String,required:!0}},data:function(){return{video:null,videoStopped:!0,showVideoBg:!0}},methods:{playVideo:function(){this.showVideoBg=!1,this.video.play()}},mounted:function(){var e=this;this.video=document.getElementById("placeholder-video"),this.video.addEventListener("play",(function(t){e.showVideoBg=!1})),this.video.addEventListener("pause",(function(t){4===e.video.readyState&&(e.showVideoBg=!0,e.video.currentTime=0)}))}};const Ot=j()(vt,[["render",jt]]);var ht=Ot,ft={class:"bg-gradient-to-r from-primary-dark to-primary-darkest"},yt={class:"app-container py-4 md:py-10 grid grid-cols-1 md:grid-cols-4 grid-rows-1"},xt={class:"w-full"},wt=["src"],kt={class:"w-full text-center py-2"},Ct={class:"w-full text-center text-amber-100"},St={class:"text-white"};function Pt(e,t,c,i,n,o){var s=Object(r["C"])("animated-svg");return Object(r["v"])(),Object(r["g"])("div",ft,[Object(r["h"])("div",yt,[(Object(r["v"])(!0),Object(r["g"])(r["a"],null,Object(r["B"])(n.stats,(function(t,c){return Object(r["v"])(),Object(r["g"])("div",{key:c,class:"py-4 flex flex-wrap items-center justify-center text-white"},[Object(r["h"])("div",xt,[Object(r["h"])("img",{src:t.imgSrc,class:"mx-auto"},null,8,wt)]),Object(r["h"])("div",kt,[Object(r["h"])("h1",null,Object(r["F"])(t.value),1)]),Object(r["h"])("div",Ct,Object(r["F"])(t.text),1),Object(r["h"])("div",St,[Object(r["k"])(s,{imgSrc:"".concat(e.$publicPath,"img/rect-white.svg"),wrapperClass:"stats-rect",width:"w-1/3"},null,8,["imgSrc"])])])})),128))])])}var At={components:{AnimatedSvg:me},data:function(){return{stats:[{value:3587,text:"Satisfied clients",imgSrc:"".concat(ie,"img/stats/1.png")},{value:207,text:"Cups of coffee",imgSrc:"".concat(ie,"img/stats/2.png")},{value:2500,text:"Blog posts",imgSrc:"".concat(ie,"img/stats/3.png")},{value:873,text:"Likes",imgSrc:"".concat(ie,"img/stats/4.png")}]}}};const It=j()(At,[["render",Pt]]);var qt=It,Mt=["src"];function Tt(e,t,c,i,n,o){return Object(r["v"])(),Object(r["g"])("div",{class:"h-94 py-10 w-full flex justify-center items-center flex-wrap bg-cover",style:Object(r["r"])({backgroundImage:"url('".concat(e.$publicPath,"img/customers_bg.png')")})},[(Object(r["v"])(!0),Object(r["g"])(r["a"],null,Object(r["B"])(n.customers,(function(e,t){return Object(r["v"])(),Object(r["g"])("img",{key:t,src:e.img,class:"mx-8"},null,8,Mt)})),128))],4)}var Bt={data:function(){return{customers:[{img:"".concat(ie,"img/customers/1.png")},{img:"".concat(ie,"img/customers/2.png")},{img:"".concat(ie,"img/customers/3.png")},{img:"".concat(ie,"img/customers/4.png")}]}}};const Dt=j()(Bt,[["render",Tt]]);var Et=Dt,Ft={class:"grid grid-cols-1 md:grid-cols-2 grid-rows-1 bg-black text-white py-8"},Nt={class:"flex items-center"},$t=["src"],Vt=Object(r["h"])("h2",null,"Waxom",-1),Lt=Object(r["h"])("div",{class:"text-gray-400 py-4 w-full md:w-8/12"}," Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci suscipit lobortis claritatem. ",-1),_t=Object(r["i"])('<div class="p-2"><h2 class="align-middle block">Our twitter</h2><div class="text-gray-400 py-4"><span class="text-blue-500">@Waxom</span> Cum soluta nobis eleifend option congue nihil imperdiet doming </div><div class="text-gray-400"> Mirum est #envato notare <span class="text-blue-500">#quam</span> littera gothica, quam nunc putamus parum anteposuerit litterarum </div></div>',1);function zt(e,t){return Object(r["v"])(),Object(r["g"])("div",Ft,[Object(r["h"])("div",null,[Object(r["h"])("div",Nt,[Object(r["h"])("img",{src:"".concat(e.$publicPath,"img/logo.png")},null,8,$t),Vt]),Lt]),_t])}const Wt={},Ht=j()(Wt,[["render",zt]]);var Jt=Ht,Ut={name:"Home",components:{AppHeader:te,OurSkills:fe,AppPromo:Te,LatestProjects:st,AppVideo:ht,AppStats:qt,OurCustomers:Et,AppFooter:Jt}};const Kt=j()(Ut,[["render",L]]);var Qt=Kt,Rt=[{path:"/",name:"Home",component:Qt},{path:"/about",name:"About",component:function(){return c.e("about").then(c.bind(null,"f820"))}}],Yt=Object(M["a"])({history:Object(M["b"])(),routes:Rt}),Gt=Yt,Xt=c("5502"),Zt={namespaced:!0,state:function(){return{items:[]}},getters:{},actions:{},mutations:{}},ec=Object(Xt["a"])({modules:{someModule:Zt}}),tc=(c("a2f0"),c("ecee")),cc=c("c074"),rc=c("ad3d"),ic=c("f13c");tc["c"].add(cc["a"],cc["c"],cc["d"],cc["b"]);var nc=Object(r["d"])(q);nc.config.globalProperties.$publicPath="/waxom-vue/",nc.use(ec),nc.use(Gt),nc.use(ic,{offset:-100}),nc.component("font-awesome-icon",rc["a"]),nc.mount("#app")},"9d40":function(e,t,c){"use strict";c("b3f0")},a2f0:function(e,t,c){},b3f0:function(e,t,c){},c07b:function(e,t,c){"use strict";c("4d56")}});
//# sourceMappingURL=app.a8b95d5d.js.map