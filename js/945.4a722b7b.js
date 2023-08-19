"use strict";(self["webpackChunkewallet"]=self["webpackChunkewallet"]||[]).push([[945],{945:function(t,e,n){n.d(e,{Am:function(){return bt}});var o=n(262),a=n(252),i=n(963);const r={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},s={LIGHT:"light",DARK:"dark",COLORED:"colored",AUTO:"auto"},l={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},c={BOUNCE:"bounce",SLIDE:"slide",FLIP:"flip",ZOOM:"zoom"},u={dangerouslyHTMLString:!1,multiple:!0,position:r.TOP_RIGHT,autoClose:5e3,transition:"bounce",hideProgressBar:!1,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,className:"",bodyClassName:"",style:{},progressClassName:"",progressStyle:{},role:"alert",theme:"light"},d={rtl:!1,newestOnTop:!1,toastClassName:""},p={...u,...d};l.DEFAULT;var m=(t=>(t[t.COLLAPSE_DURATION=300]="COLLAPSE_DURATION",t[t.DEBOUNCE_DURATION=50]="DEBOUNCE_DURATION",t.CSS_NAMESPACE="Toastify",t))(m||{}),f=(t=>(t.ENTRANCE_ANIMATION_END="d",t))(f||{});const y={enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0},v={enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0},g={enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"},E={enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"};function S(t){let e=y;if(t&&"string"!=typeof t)e=t;else switch(t){case"flip":e=E;break;case"zoom":e=g;break;case"slide":e=v;break}return e}function C(t){return t.containerId||String(t.position)}const A="will-unmount";function h(t=r.TOP_RIGHT){return!!document.querySelector(".".concat(m.CSS_NAMESPACE,"__toast-container--").concat(t))}function _(t=r.TOP_RIGHT){return"".concat(m.CSS_NAMESPACE,"__toast-container--").concat(t)}function T(t,e,n=!1){const o=["".concat(m.CSS_NAMESPACE,"__toast-container"),"".concat(m.CSS_NAMESPACE,"__toast-container--").concat(t),n?"".concat(m.CSS_NAMESPACE,"__toast-container--rtl"):null].filter(Boolean).join(" ");return J(e)?e({position:t,rtl:n,defaultClassName:o}):"".concat(o," ").concat(e||"")}function I(t){var e;const{position:n,containerClassName:o,rtl:a=!1,style:i={}}=t,r=m.CSS_NAMESPACE,s=_(n),l=document.querySelector(".".concat(r)),c=document.querySelector(".".concat(s)),u=!!c&&!(null!=(e=c.className)&&e.includes(A)),d=l||document.createElement("div"),p=document.createElement("div");p.className=T(n,o,a),p.dataset.testid="".concat(m.CSS_NAMESPACE,"__toast-container--").concat(n),p.id=C(t);for(const m in i)if(Object.prototype.hasOwnProperty.call(i,m)){const t=i[m];p.style[m]=t}return l||(d.className=m.CSS_NAMESPACE,document.body.appendChild(d)),u||d.appendChild(p),p}function N(t){var e,n,o;const a="string"==typeof t?t:(null==(e=t.currentTarget)?void 0:e.id)||(null==(n=t.target)?void 0:n.id),i=document.getElementById(a);i&&i.removeEventListener("animationend",N,!1);try{L[a].unmount(),null==(o=document.getElementById(a))||o.remove(),delete L[a],delete H[a]}catch{}}const L=(0,o.qj)({});function O(t,e){const n=document.getElementById(String(e));n&&(L[n.id]=t)}function b(t,e=!0){const n=String(t);if(!L[n])return;const o=document.getElementById(n);o&&o.classList.add(A),e?(F(t),o&&o.addEventListener("animationend",N,!1)):N(n),k.items=k.items.filter((e=>e.containerId!==t))}function P(t){for(const e in L)b(e,t);k.items=[]}function q(t,e){const n=document.getElementById(t.toastId);if(n){let o=t;o={...o,...S(o.transition)};const a=o.appendPosition?"".concat(o.exit,"--").concat(o.position):o.exit;n.className+=" ".concat(a),e&&e(n)}}function F(t){for(const e in H)if(e===t)for(const t of H[e]||[])q(t)}function w(t){const e=j().find((e=>e.toastId===t));return null==e?void 0:e.containerId}function B(t){return document.getElementById(t)}function M(t){const e=B(t.containerId);return e&&e.classList.contains(A)}function U(t){var e;const n=(0,a.lA)(t.content)?(0,o.IU)(t.content.props):null;return null!=n?n:(0,o.IU)(null!=(e=t.data)?e:{})}function R(t){return t?k.items.filter((e=>e.containerId===t)).length>0:k.items.length>0}function D(){if(k.items.length>0){const t=k.items.shift();x(null==t?void 0:t.toastContent,null==t?void 0:t.toastProps)}}const H=(0,o.qj)({}),k=(0,o.qj)({items:[]});function j(){const t=(0,o.IU)(H);return Object.values(t).reduce(((t,e)=>[...t,...e]),[])}function W(t){return j().find((e=>e.toastId===t))}function x(t,e={}){if(M(e)){const n=B(e.containerId);n&&n.addEventListener("animationend",z.bind(null,t,e),!1)}else z(t,e)}function z(t,e={}){const n=B(e.containerId);n&&n.removeEventListener("animationend",z.bind(null,t,e),!1);const o=H[e.containerId]||[],r=o.length>0;if(!r&&!h(e.position)){const t=I(e),n=(0,i.ri)(_t,e);n.mount(t),O(n,t.id)}r&&(e.position=o[0].position),(0,a.Y3)((()=>{e.updateId?G.update(e):G.add(t,e)}))}const G={add(t,e){const{containerId:n=""}=e;n&&(H[n]=H[n]||[],H[n].find((t=>t.toastId===e.toastId))||setTimeout((()=>{var t,o;e.newestOnTop?null==(t=H[n])||t.unshift(e):null==(o=H[n])||o.push(e),e.onOpen&&e.onOpen(U(e))}),e.delay||0))},remove(t){if(t){const e=w(t);if(e){const n=H[e];let o=n.find((e=>e.toastId===t));H[e]=n.filter((e=>e.toastId!==t)),!H[e].length&&!R(e)&&b(e,!1),D(),(0,a.Y3)((()=>{null!=o&&o.onClose&&(o.onClose(U(o)),o=void 0)}))}}},update(t={}){const{containerId:e=""}=t;if(e&&t.updateId){H[e]=H[e]||[];const n=H[e].find((e=>e.toastId===t.toastId));n&&setTimeout((()=>{for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)){const o=t[e];n[e]=o}}),t.delay||0)}},clear(t,e=!0){t?b(t,e):P(e)},dismissCallback(t){var e;const n=null==(e=t.currentTarget)?void 0:e.id,o=document.getElementById(n);o&&(o.removeEventListener("animationend",G.dismissCallback,!1),setTimeout((()=>{G.remove(n)})))},dismiss(t){if(t){const e=j();for(const n of e)if(n.toastId===t){q(n,(t=>{t.addEventListener("animationend",G.dismissCallback,!1)}));break}}}},Z=(0,o.qj)({}),Y=(0,o.qj)({});function K(){return Math.random().toString(36).substring(2,9)}function V(t){return"number"==typeof t&&!isNaN(t)}function X(t){return"string"==typeof t}function J(t){return"function"==typeof t}function Q(...t){return(0,a.dG)(...t)}function $(t){return"object"==typeof t&&(!(null==t||!t.render)||!(null==t||!t.setup)||"object"==typeof(null==t?void 0:t.type))}function tt(t={}){Z["".concat(m.CSS_NAMESPACE,"-default-options")]=t}function et(){return Z["".concat(m.CSS_NAMESPACE,"-default-options")]||p}function nt(){return document.documentElement.classList.contains("dark")?"dark":"light"}var ot=(t=>(t[t.Enter=0]="Enter",t[t.Exit=1]="Exit",t))(ot||{});const at={containerId:{type:[String,Number],required:!1,default:""},clearOnUrlChange:{type:Boolean,required:!1,default:!0},dangerouslyHTMLString:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!0},limit:{type:Number,required:!1,default:void 0},position:{type:String,required:!1,default:r.TOP_LEFT},bodyClassName:{type:String,required:!1,default:""},autoClose:{type:[Number,Boolean],required:!1,default:!1},closeButton:{type:[Boolean,Function,Object],required:!1,default:void 0},transition:{type:[String,Object],required:!1,default:"bounce"},hideProgressBar:{type:Boolean,required:!1,default:!1},pauseOnHover:{type:Boolean,required:!1,default:!0},pauseOnFocusLoss:{type:Boolean,required:!1,default:!0},closeOnClick:{type:Boolean,required:!1,default:!0},progress:{type:Number,required:!1,default:void 0},progressClassName:{type:String,required:!1,default:""},toastStyle:{type:Object,required:!1,default(){return{}}},progressStyle:{type:Object,required:!1,default(){return{}}},role:{type:String,required:!1,default:"alert"},theme:{type:String,required:!1,default:s.AUTO},content:{type:[String,Object,Function],required:!1,default:""},toastId:{type:[String,Number],required:!1,default:""},data:{type:[Object,String],required:!1,default(){return{}}},type:{type:String,required:!1,default:l.DEFAULT},icon:{type:[Boolean,String,Number,Object,Function],required:!1,default:void 0},delay:{type:Number,required:!1,default:void 0},onOpen:{type:Function,required:!1,default:void 0},onClose:{type:Function,required:!1,default:void 0},onClick:{type:Function,required:!1,default:void 0},isLoading:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},toastClassName:{type:String,required:!1,default:""},updateId:{type:[String,Number],required:!1,default:""}},it={autoClose:{type:[Number,Boolean],required:!0},isRunning:{type:Boolean,required:!1,default:void 0},type:{type:String,required:!1,default:l.DEFAULT},theme:{type:String,required:!1,default:s.AUTO},hide:{type:Boolean,required:!1,default:void 0},className:{type:[String,Function],required:!1,default:""},controlledProgress:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:void 0},isIn:{type:Boolean,required:!1,default:void 0},progress:{type:Number,required:!1,default:void 0},closeToast:{type:Function,required:!1,default:void 0}},rt=(0,a.aZ)({name:"ProgressBar",props:it,setup(t,{attrs:e}){const n=(0,o.iH)(),i=(0,a.Fl)((()=>t.hide?"true":"false")),r=(0,a.Fl)((()=>({...e.style||{},animationDuration:"".concat(!0===t.autoClose?5e3:t.autoClose,"ms"),animationPlayState:t.isRunning?"running":"paused",opacity:t.hide?0:1,transform:t.controlledProgress?"scaleX(".concat(t.progress,")"):"none"}))),s=(0,a.Fl)((()=>["".concat(m.CSS_NAMESPACE,"__progress-bar"),t.controlledProgress?"".concat(m.CSS_NAMESPACE,"__progress-bar--controlled"):"".concat(m.CSS_NAMESPACE,"__progress-bar--animated"),"".concat(m.CSS_NAMESPACE,"__progress-bar-theme--").concat(t.theme),"".concat(m.CSS_NAMESPACE,"__progress-bar--").concat(t.type),t.rtl?"".concat(m.CSS_NAMESPACE,"__progress-bar--rtl"):null].filter(Boolean).join(" "))),l=(0,a.Fl)((()=>"".concat(s.value," ").concat((null==e?void 0:e.class)||""))),c=()=>{n.value&&(n.value.onanimationend=null,n.value.ontransitionend=null)},u=()=>{t.isIn&&t.closeToast&&!1!==t.autoClose&&(t.closeToast(),c())},d=(0,a.Fl)((()=>t.controlledProgress?null:u)),p=(0,a.Fl)((()=>t.controlledProgress?u:null));return(0,a.m0)((()=>{n.value&&(c(),n.value.onanimationend=d.value,n.value.ontransitionend=p.value)})),()=>(0,a.Wm)("div",{ref:n,role:"progressbar","aria-hidden":i.value,"aria-label":"notification timer",class:l.value,style:r.value},null)}}),st=(0,a.aZ)({name:"CloseButton",inheritAttrs:!1,props:{theme:{type:String,required:!1,default:s.AUTO},type:{type:String,required:!1,default:s.LIGHT},ariaLabel:{type:String,required:!1,default:"close"},closeToast:{type:Function,required:!1,default:void 0}},setup(t){return()=>(0,a.Wm)("button",{class:"".concat(m.CSS_NAMESPACE,"__close-button ").concat(m.CSS_NAMESPACE,"__close-button--").concat(t.theme),type:"button",onClick:e=>{e.stopPropagation(),t.closeToast&&t.closeToast(e)},"aria-label":t.ariaLabel},[(0,a.Wm)("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},[(0,a.Wm)("path",{"fill-rule":"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"},null)])])}}),lt=({theme:t,type:e,path:n,...o})=>(0,a.Wm)("svg",(0,a.dG)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(e,")")},o),[(0,a.Wm)("path",{d:n},null)]);function ct(t){return(0,a.Wm)(lt,(0,a.dG)(t,{path:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}),null)}function ut(t){return(0,a.Wm)(lt,(0,a.dG)(t,{path:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}),null)}function dt(t){return(0,a.Wm)(lt,(0,a.dG)(t,{path:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}),null)}function pt(t){return(0,a.Wm)(lt,(0,a.dG)(t,{path:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}),null)}function mt(){return(0,a.Wm)("div",{class:"".concat(m.CSS_NAMESPACE,"__spinner")},null)}const ft={info:ut,warning:ct,success:dt,error:pt,spinner:mt},yt=t=>t in ft;function vt({theme:t,type:e,isLoading:n,icon:i}){let r;const s={theme:t,type:e};return n?r=ft.spinner():!1===i?r=void 0:$(i)?r=(0,o.IU)(i):J(i)?r=i(s):(0,a.lA)(i)?r=(0,a.Ho)(i,s):X(i)||V(i)?r=i:yt(e)&&(r=ft[e](s)),r}const gt=()=>{};function Et(t,e,n=m.COLLAPSE_DURATION){const{scrollHeight:o,style:a}=t,i=n;requestAnimationFrame((()=>{a.minHeight="initial",a.height=o+"px",a.transition="all ".concat(i,"ms"),requestAnimationFrame((()=>{a.height="0",a.padding="0",a.margin="0",setTimeout(e,i)}))}))}function St(t){const e=(0,o.iH)(!1),n=(0,o.iH)(!1),i=(0,o.iH)(!1),r=(0,o.iH)(ot.Enter),s=(0,o.qj)({...t,appendPosition:t.appendPosition||!1,collapse:typeof t.collapse>"u"||t.collapse,collapseDuration:t.collapseDuration||m.COLLAPSE_DURATION}),l=s.done||gt,c=(0,a.Fl)((()=>s.appendPosition?"".concat(s.enter,"--").concat(s.position):s.enter)),u=(0,a.Fl)((()=>s.appendPosition?"".concat(s.exit,"--").concat(s.position):s.exit)),d=(0,a.Fl)((()=>t.pauseOnHover?{onMouseenter:C,onMouseleave:S}:{}));function p(){const e=c.value.split(" ");v().addEventListener(f.ENTRANCE_ANIMATION_END,S,{once:!0});const n=t=>{const o=v();t.target===o&&(o.dispatchEvent(new Event(f.ENTRANCE_ANIMATION_END)),o.removeEventListener("animationend",n),o.removeEventListener("animationcancel",n),r.value===ot.Enter&&"animationcancel"!==t.type&&o.classList.remove(...e))},o=()=>{const t=v();t.classList.add(...e),t.addEventListener("animationend",n),t.addEventListener("animationcancel",n)};t.pauseOnFocusLoss&&g(),o()}function y(){if(!v())return;const t=()=>{const e=v();e.removeEventListener("animationend",t),s.collapse?Et(e,l,s.collapseDuration):l()},e=()=>{const e=v();r.value=ot.Exit,e&&(e.className+=" ".concat(u.value),e.addEventListener("animationend",t))};n.value||(i.value?t():setTimeout(e))}function v(){return t.toastRef.value}function g(){document.hasFocus()||C(),window.addEventListener("focus",S),window.addEventListener("blur",C)}function E(){window.removeEventListener("focus",S),window.removeEventListener("blur",C)}function S(){(!t.loading.value||void 0===t.isLoading)&&(e.value=!0)}function C(){e.value=!1}function A(t){t&&(t.stopPropagation(),t.preventDefault()),n.value=!1}return(0,a.m0)(y),(0,a.m0)((()=>{const t=j();n.value=t.findIndex((t=>t.toastId===s.toastId))>-1})),(0,a.m0)((()=>{void 0!==t.isLoading&&(t.loading.value?C():S())})),(0,a.bv)(p),(0,a.Ah)((()=>{t.pauseOnFocusLoss&&E()})),{isIn:n,isRunning:e,hideToast:A,eventHandlers:d}}const Ct=(0,a.aZ)({name:"ToastItem",inheritAttrs:!1,props:at,setup(t){const e=(0,o.iH)(),n=(0,a.Fl)((()=>!!t.isLoading)),i=(0,a.Fl)((()=>void 0!==t.progress&&null!==t.progress)),r=(0,a.Fl)((()=>vt(t))),s=(0,a.Fl)((()=>["".concat(m.CSS_NAMESPACE,"__toast"),"".concat(m.CSS_NAMESPACE,"__toast-theme--").concat(t.theme),"".concat(m.CSS_NAMESPACE,"__toast--").concat(t.type),t.rtl?"".concat(m.CSS_NAMESPACE,"__toast--rtl"):void 0,t.toastClassName||""].filter(Boolean).join(" "))),{isRunning:l,isIn:c,hideToast:u,eventHandlers:d}=St({toastRef:e,loading:n,done:()=>{G.remove(t.toastId)},...S(t.transition),...t});return()=>(0,a.Wm)("div",(0,a.dG)({id:t.toastId,class:s.value,style:t.toastStyle||{},ref:e,"data-testid":"toast-item-".concat(t.toastId),onClick:e=>{t.closeOnClick&&u(),t.onClick&&t.onClick(e)}},d.value),[(0,a.Wm)("div",{role:t.role,"data-testid":"toast-body",class:"".concat(m.CSS_NAMESPACE,"__toast-body ").concat(t.bodyClassName||"")},[null!=r.value&&(0,a.Wm)("div",{"data-testid":"toast-icon-".concat(t.type),class:["".concat(m.CSS_NAMESPACE,"__toast-icon"),t.isLoading?"":"".concat(m.CSS_NAMESPACE,"--animate-icon ").concat(m.CSS_NAMESPACE,"__zoom-enter")].join(" ")},[$(r.value)?(0,a.h)((0,o.IU)(r.value),{theme:t.theme,type:t.type}):J(r.value)?r.value({theme:t.theme,type:t.type}):r.value]),(0,a.Wm)("div",{"data-testid":"toast-content"},[$(t.content)?(0,a.h)((0,o.IU)(t.content),{toastProps:(0,o.IU)(t),closeToast:u,data:t.data}):J(t.content)?t.content({toastProps:(0,o.IU)(t),closeToast:u,data:t.data}):t.dangerouslyHTMLString?(0,a.h)("div",{innerHTML:t.content}):t.content])]),(void 0===t.closeButton||!0===t.closeButton)&&(0,a.Wm)(st,{theme:t.theme,closeToast:t=>{t.stopPropagation(),t.preventDefault(),u()}},null),$(t.closeButton)?(0,a.h)((0,o.IU)(t.closeButton),{closeToast:u,type:t.type,theme:t.theme}):J(t.closeButton)?t.closeButton({closeToast:u,type:t.type,theme:t.theme}):null,(0,a.Wm)(rt,{className:t.progressClassName,style:t.progressStyle,rtl:t.rtl,theme:t.theme,isIn:c.value,type:t.type,hide:t.hideProgressBar,isRunning:l.value,autoClose:t.autoClose,controlledProgress:i.value,progress:t.progress,closeToast:t.isLoading?void 0:u},null)])}});let At=0;function ht(){typeof window>"u"||(At&&window.cancelAnimationFrame(At),At=window.requestAnimationFrame(ht),Y.lastUrl!==window.location.href&&(Y.lastUrl=window.location.href,G.clear()))}const _t=(0,a.aZ)({name:"ToastifyContainer",inheritAttrs:!1,props:at,setup(t){const e=(0,a.Fl)((()=>t.containerId)),n=(0,a.Fl)((()=>H[e.value]||[])),o=(0,a.Fl)((()=>n.value.filter((e=>e.position===t.position))));return(0,a.bv)((()=>{typeof window<"u"&&t.clearOnUrlChange&&window.requestAnimationFrame(ht)})),(0,a.Ah)((()=>{typeof window<"u"&&At&&(window.cancelAnimationFrame(At),Y.lastUrl="")})),()=>(0,a.Wm)(a.HY,null,[o.value.map((t=>{const{toastId:e=""}=t;return(0,a.Wm)(Ct,(0,a.dG)({key:e},t),null)}))])}});let Tt=!1;function It(){const t=[];return j().forEach((e=>{const n=document.getElementById(e.containerId);n&&!n.classList.contains(A)&&t.push(e)})),t}function Nt(t){const e=It().length,n=null!=t?t:0;return n>0&&e+k.items.length>=n}function Lt(t){Nt(t.limit)&&!t.updateId&&k.items.push({toastId:t.toastId,containerId:t.containerId,toastContent:t.content,toastProps:t})}function Ot(t,e,n={}){if(Tt)return;n=Q(et(),{type:e},(0,o.IU)(n)),(!n.toastId||"string"!=typeof n.toastId&&"number"!=typeof n.toastId)&&(n.toastId=K()),n={...n,content:t,containerId:n.containerId||String(n.position)};const a=Number(null==n?void 0:n.progress);return a<0&&(n.progress=0),a>1&&(n.progress=1),"auto"===n.theme&&(n.theme=nt()),Lt(n),Y.lastUrl=window.location.href,n.multiple?k.items.length?n.updateId&&x(t,n):x(t,n):(Tt=!0,bt.clearAll(void 0,!1),setTimeout((()=>{x(t,n)}),0),setTimeout((()=>{Tt=!1}),390)),n.toastId}const bt=(t,e)=>Ot(t,l.DEFAULT,e);function Pt(t,{pending:e,error:n,success:o},a){let i;e&&(i=X(e)?bt.loading(e,a):bt.loading(e.render,{...a,...e}));const r={isLoading:void 0,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},s=(t,e,n)=>{if(null==e)return void bt.remove(i);const o={type:t,...r,...a,data:n},s=X(e)?{render:e}:e;return i?bt.update(i,{...o,...s,isLoading:!1,autoClose:!0}):bt(s.render,{...o,...s,isLoading:!1,autoClose:!0}),n},l=J(t)?t():t;return l.then((t=>{s("success",o,t)})).catch((t=>{s("error",n,t)})),l}bt.info=(t,e)=>Ot(t,l.DEFAULT,{...e,type:l.INFO}),bt.error=(t,e)=>Ot(t,l.DEFAULT,{...e,type:l.ERROR}),bt.warning=(t,e)=>Ot(t,l.DEFAULT,{...e,type:l.WARNING}),bt.warn=bt.warning,bt.success=(t,e)=>Ot(t,l.DEFAULT,{...e,type:l.SUCCESS}),bt.loading=(t,e)=>Ot(t,l.DEFAULT,Q(e,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1})),bt.dark=(t,e)=>Ot(t,l.DEFAULT,Q(e,{theme:s.DARK})),bt.remove=t=>{t?G.dismiss(t):G.clear()},bt.clearAll=(t,e)=>{G.clear(t,e)},bt.isActive=t=>{let e=!1;return e=It().findIndex((e=>e.toastId===t))>-1,e},bt.update=(t,e={})=>{setTimeout((()=>{const n=W(t);if(n){const a=(0,o.IU)(n),{content:i}=a,r={...a,...e,toastId:e.toastId||t,updateId:K()},s=r.render||i;delete r.render,Ot(s,r.type,r)}}),0)},bt.done=t=>{bt.update(t,{isLoading:!1,progress:1})},bt.promise=Pt,bt.POSITION=r,bt.THEME=s,bt.TYPE=l,bt.TRANSITIONS=c;const qt={install(t,e={}){Ft(e)}};function Ft(t={}){const e=Q(p,t);tt(e)}typeof window<"u"&&(window.Vue3Toastify=qt)}}]);
//# sourceMappingURL=945.4a722b7b.js.map