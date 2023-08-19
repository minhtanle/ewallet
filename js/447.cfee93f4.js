"use strict";(self["webpackChunkewallet"]=self["webpackChunkewallet"]||[]).push([[447],{447:function(e,n,r){r.r(n),r.d(n,{default:function(){return M}});var l=r(252),t=r(963),i=r(577);const a={class:"mt-8"},s={class:"container mx-auto p-4"},o={class:"row mt-4"},u=(0,l._)("label",{for:"email"},"Email",-1),d={class:"row mt-4"},c=(0,l._)("label",{for:"password"},"Password",-1),w={class:"row mt-10"},m={class:"rounded-full bg-indigo-600 font-bold text-center py-2 text-white w-full h-12"},p={key:0},v={key:1,class:"text-center"},f=(0,l._)("div",{role:"status"},[(0,l._)("svg",{"aria-hidden":"true",class:"inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,l._)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,l._)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]),(0,l._)("span",{class:"sr-only"},"Loading...")],-1),g=[f],C={key:0},_={class:"text-red-600"},h={class:"row mt-2 text-center"};function b(e,n,r,f,b,y){const x=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("div",a,[(0,l._)("div",s,[(0,l._)("form",{onSubmit:n[2]||(n[2]=(0,t.iM)(((...e)=>f.onSubmit&&f.onSubmit(...e)),["prevent"]))},[(0,l._)("div",o,[u,(0,l._)("div",null,[(0,l.wy)((0,l._)("input",{id:"email",class:"rounded-md border-2 w-full mt-2 px-2 h-10",type:"email",placeholder:"Input email",required:"","onUpdate:modelValue":n[0]||(n[0]=e=>f.email=e)},null,512),[[t.nr,f.email]])])]),(0,l._)("div",d,[c,(0,l._)("div",null,[(0,l.wy)((0,l._)("input",{id:"password",class:"rounded-md border-2 w-full mt-2 px-2 h-10",type:"password",placeholder:"Input password",required:"","onUpdate:modelValue":n[1]||(n[1]=e=>f.password=e)},null,512),[[t.nr,f.password]])])]),(0,l._)("div",w,[(0,l._)("button",m,[f.isPending?((0,l.wg)(),(0,l.iD)("div",v,g)):((0,l.wg)(),(0,l.iD)("span",p,"Sign In"))])])],32),f.error?((0,l.wg)(),(0,l.iD)("div",C,[(0,l._)("span",_,(0,i.zw)(f.renderError),1)])):(0,l.kq)("",!0),(0,l._)("div",h,[(0,l.Uk)(" I not a member, "),(0,l.Wm)(x,{to:{name:"Register"},class:"text-blue-500 font-bold hover:underline"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Sign Up ")])),_:1})])])])}var y=r(262),x=r(352);const k=(0,y.iH)(null),P=(0,y.iH)(!1);async function S(e,n){k.value=null,P.value=!0;try{const r=await x.QK.signInWithEmailAndPassword(e,n);if(!r)throw new Error("Could not login");return r}catch(r){console.log(r),k.value=r.message}finally{P.value=!1}}function E(){return{error:k,isPending:P,signin:S}}var H=r(201),I={setup(){const{error:e,isPending:n,signin:r}=E(),t=(0,H.tv)(),i=(0,y.iH)(""),a=(0,y.iH)("");async function s(){await r(i.value,a.value),e.value||t.push({name:"Home"})}const o=(0,l.Fl)((()=>e.value.substr(10)));return{onSubmit:s,email:i,password:a,error:e,isPending:n,renderError:o}}},U=r(744);const D=(0,U.Z)(I,[["render",b]]);var M=D}}]);
//# sourceMappingURL=447.cfee93f4.js.map