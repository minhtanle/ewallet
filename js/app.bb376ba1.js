(function(){var e={352:function(e,t,n){"use strict";n.d(t,{H1:function(){return i},QK:function(){return a}});var r=n(866);n(673),n(952);const o={apiKey:"AIzaSyC_B6KCRhZ6NGQxZzFnEr0wM8ktfzJl_yg",authDomain:"ewallet-save-money.firebaseapp.com",projectId:"ewallet-save-money",storageBucket:"ewallet-save-money.appspot.com",messagingSenderId:"586089419891",appId:"1:586089419891:web:422ef0d0c70344bba6c606",measurementId:"G-04G4BL773B"};r.Z.initializeApp(o);const a=r.Z.auth(),i=r.Z.firestore();r.Z.firestore.FieldValue.serverTimestamp},973:function(e,t,n){var r={"./en.json":790,"./vi.json":245};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=973},144:function(e,t,n){"use strict";var r=n(963),o=n(252);function a(e,t,n,r,a,i){const u=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)((0,o.LL)(r.layout),null,{default:(0,o.w5)((()=>[(0,o.Wm)(u)])),_:1})}var i=n(201);const u="default",c="vi";var l={setup(){const e=(0,i.yj)();return{layout:(0,o.Fl)((()=>(e.meta.layout||u)+"-layout"))}}},s=n(744);const f=(0,s.Z)(l,[["render",a]]);var d=f,m=n(352);const p=(e,t,n)=>{const r=m.QK.currentUser;r?n():n({name:"Login"})},h=[{path:"/login",name:"Login",meta:{layout:"auth"},component:()=>n.e(447).then(n.bind(n,447))},{path:"/register",name:"Register",meta:{layout:"auth"},component:()=>Promise.all([n.e(945),n.e(536)]).then(n.bind(n,536))},{path:"/logout",name:"Logout",component:()=>n.e(932).then(n.bind(n,932))},{path:"/",name:"Home",component:()=>n.e(177).then(n.bind(n,154)),beforeEnter:p},{path:"/transaction",name:"Transaction",component:()=>n.e(177).then(n.bind(n,154)),beforeEnter:p,children:[{path:"new",name:"NewTransaction",component:()=>n.e(177).then(n.bind(n,154))}]},{path:"/profile",name:"Profile",component:()=>n.e(413).then(n.bind(n,413)),beforeEnter:p,children:[{path:"wallet",name:"Profile.Wallet",meta:{isChild:!0},component:()=>Promise.all([n.e(945),n.e(36)]).then(n.bind(n,36))},{path:"wallet/:id/update",name:"Profile.Wallet.Update",meta:{isChild:!0},component:()=>Promise.all([n.e(945),n.e(278)]).then(n.bind(n,278))}]},{path:"/wallet",name:"Wallet",component:()=>Promise.all([n.e(945),n.e(36)]).then(n.bind(n,36)),beforeEnter:p},{path:"/budget",name:"Budget",component:()=>n.e(177).then(n.bind(n,154)),beforeEnter:p},{path:"/:pathMatch(.*)*",name:"Error404",component:()=>n.e(901).then(n.bind(n,901))}];h.map((e=>{e.children&&e.children.map((e=>e.meta={isChild:!0}))}));const v=(0,i.p7)({history:(0,i.PO)("/"),routes:h});var b=v,g=n(150);function y(){const e=n(973),t={};return e.keys().forEach((n=>{const r=n.match(/([A-Za-z0-9-_]+)\./i);if(r&&r.length>1){const o=r[1];t[o]=e(n)}})),t}var w=(0,g.o)({locale:c,fallbackLocale:c,messages:y()}),k={beforeMount:(e,t)=>{e.clickOutsideEvent=n=>{e==n.target||e.contains(n.target)||t.value()},document.addEventListener("click",e.clickOutsideEvent)},unmounted:e=>{document.removeEventListener("click",e.clickOutsideEvent)}},E=n(636),C=n(810),O=n(417),N=n(24),j=n(288);function P(e){e.component("default-layout",(0,o.RC)((()=>n.e(170).then(n.bind(n,170))))),e.component("system-layout",(0,o.RC)((()=>n.e(710).then(n.bind(n,710))))),e.component("auth-layout",(0,o.RC)((()=>n.e(197).then(n.bind(n,197))))),e.component("font-awesome-icon",C.GN),e.directive("click-outside",k)}function L(e){e.config.globalProperties.$filters={toCurrency(e){if("number"!==typeof e)return e;var t=new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"});return t.format(e)}}}let S;E.vI.add(O.mRB,j.NCV,N.vnX),m.QK.onAuthStateChanged((()=>{S||(S=(0,r.ri)(d),P(S),L(S),S.use(b),S.use(w),S.mount("#app"))}))},790:function(e){"use strict";e.exports={}},245:function(e){"use strict";e.exports=JSON.parse('{"my-wallet":"Ví của tôi","group":"Nhóm","logout":"Đăng xuất"}')}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],a=e[s][2];for(var u=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(u=!1,a<i&&(i=a));if(u){e.splice(s--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[r,o,a]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(177===e?"home":e)+"."+{36:"c3fa7cdb",170:"ccc9b13e",177:"374f98bc",197:"5365773a",278:"5ed9ad79",413:"c792a811",447:"cfee93f4",536:"e91c31a2",710:"7f94ed6c",901:"5a924231",932:"10095b0c",945:"4a722b7b"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".10a98b64.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="ewallet:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+a){u=f;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=r),e[r]=[o];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=u,a.parentNode&&a.parentNode.removeChild(a),o(c)}};return a.onerror=a.onload=i,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),u=n.p+i;if(t(i,u))return o();e(r,u,null,o,a)}))},o={143:0};n.f.miniCss=function(e,t){var n={170:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),u=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],u=r[1],c=r[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var s=c(n)}for(t&&t(r);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(s)},r=self["webpackChunkewallet"]=self["webpackChunkewallet"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(144)}));r=n.O(r)})();
//# sourceMappingURL=app.bb376ba1.js.map