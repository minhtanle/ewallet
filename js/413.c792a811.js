"use strict";(self["webpackChunkewallet"]=self["webpackChunkewallet"]||[]).push([[413],{413:function(e,t,l){l.r(t),l.d(t,{default:function(){return y}});var n=l(252),s=l(577);const r={key:0,class:""},a={class:"container mx-auto p-4 flex flex-col items-center"},o=(0,n._)("div",{class:"w-24 h-24"},[(0,n._)("img",{class:"w-full h-24 object-cover",src:"https://cdn-icons-png.flaticon.com/128/3135/3135715.png",alt:""})],-1),i={class:"font-bold text-2xl text-primary mt-2 text-blue-600"},u=(0,n._)("hr",null,null,-1),c={class:"grid grid-cols-1"},f={class:"col-span-1"},m={class:"grow w-full"},p={class:"flex items-center text-left"},w={class:"pl-4"},d={class:"text-right"};function g(e,t,l,g,h,v){const x=(0,n.up)("font-awesome-icon"),_=(0,n.up)("router-link"),k=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[g.route.meta.isChild?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",r,[(0,n._)("div",a,[o,(0,n._)("h3",i,(0,s.zw)(g.user.displayName),1),(0,n._)("span",null,(0,s.zw)(g.user.email),1)]),u,(0,n._)("div",c,[(0,n._)("div",f,[(0,n._)("ul",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(g.profileOptions,(t=>((0,n.wg)(),(0,n.iD)("li",{key:t.name,class:"flex h-14 py-2 px-4 bg-white hover:bg-slate-50 shadow last:text-red-600"},[(0,n.Wm)(_,{to:{name:t.route.name},class:"flex items-center w-full"},{default:(0,n.w5)((()=>[(0,n._)("div",m,[(0,n._)("div",p,[(0,n.Wm)(x,{icon:t.icon,size:"lg"},null,8,["icon"]),(0,n._)("h5",w,(0,s.zw)(e.$t(t.name)),1)])]),(0,n._)("div",d,[(0,n.Wm)(x,{icon:["fas","chevron-right"]})])])),_:2},1032,["to"])])))),128))])])])])),(0,n.Wm)(k)],64)}var h=l(262),v=l(101),x=l(201),_={setup(){const{getUser:e}=(0,v.a)(),{user:t}=e(),l=(0,x.yj)(),n=(0,h.qj)([{name:"my-wallet",icon:["fas","wallet"],route:{name:"Profile.Wallet"}},{name:"logout",icon:["fas","right-from-bracket"],route:{name:"Logout",params:{}}}]);return{route:l,user:t,profileOptions:n}}},k=l(744);const b=(0,k.Z)(_,[["render",g]]);var y=b},101:function(e,t,l){l.d(t,{a:function(){return o}});var n=l(262),s=l(352);const r=(0,n.iH)(s.QK.currentUser);function a(){return{user:r}}function o(){return{getUser:a}}s.QK.onAuthStateChanged((function(e){e&&(r.value=e)}))}}]);
//# sourceMappingURL=413.c792a811.js.map