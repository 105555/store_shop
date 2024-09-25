import{r as Re,m as De,a as ee,_ as ie,o as T,c as O,w as te,b as re,d as u,t as S,e as a,f as r,g as V,F as Z,h as ue,p as F,i as U,j as ce,k as Y,l as de,u as ze,s as L,n as d,q as Oe,v as q,x as ve,y as tt,z as D,A as me,B as he,C as Ye,D as J,E as G,G as Fe,H as at,I as lt,J as ot,K as nt,T as st,L as rt,M as Ee,N as it,O as ut,P as Ue,Q as N,R as ct}from"./index-9e565168.js";import{s as dt,o as vt,a as He}from"./firebase-1713f494.js";import{V as R,a as fe,m as oe,b as ne,u as W,c as ge,d as ye,e as be,f as le,g as _e,h as pe,i as we,j as ae,k as mt,t as ht,l as ft,n as Le,o as gt,p as yt}from"./VCard-6769d99c.js";import{V as I,m as bt}from"./VBtn-acc3bfeb.js";import{V as _t}from"./VSnackbar-efed215d.js";import{V as We}from"./VRow-e33d4956.js";import{V as $e}from"./VMenu-7f1a49e2.js";import{V as Pe,a as Q,b as pt}from"./VList-e4428d98.js";import{V as wt}from"./VDialog-8e304d23.js";import{V as kt}from"./index-714d60d8.js";import{m as ke,u as Se}from"./layout-bb4e9123.js";import{u as Xe}from"./ssrBoot-bc93a1f9.js";import{m as St,u as xt,a as Ct}from"./forwardRefs-612f8129.js";import{V as Vt,a as Tt}from"./VApp-aa23cb46.js";import{V as se}from"./VCol-deb3865b.js";import{u as Bt}from"./lazy-43f8a239.js";/* empty css              */import"./dialog-transition-82485eed.js";const It={name:"Cart",data(){return{isCartOpen:!1,discount:this.$t("Free"),snackbar:!1,snackbarText:""}},expose:["showCart"],methods:{decrease(e){e.count>1&&e.count--},increase(e){e.count++},handledelete(e){this.cartItem.splice(e,1),this.showSnackbar(`${this.$t("Remove")}`)},showSnackbar(e){this.snackbarText=e,this.snackbar=!0},hideCart(){let e=document.querySelector(".cartContainer");e.style.right="-1000px",this.isCartOpen=!1,document.querySelector("html").classList.remove("no-scroll")},backToShop(){this.hideCart(),Re.push({name:"Shop"}),document.querySelector("html").classList.remove("no-scroll")},showCart(){let e=document.querySelector(".cartContainer");document.querySelector("html").classList.add("no-scroll"),e.style.right="0px",this.isCartOpen=!0},...De("cart",["removeItem"])},computed:{totalCount(){return this.cartItem.reduce((e,n)=>e+n.count,0)},totalAmount(){return this.cartItem.reduce((n,l)=>n+l.prices*l.count,0).toLocaleString()},...ee("cart",["itemList","cartItem"])}},Et={class:"cartContainer"},Ht={class:"mt-3 d-flex justify-space-between align-center"},Lt={class:"text-h4 ml-3"},$t={class:"mx-auto text-center pt-6",style:{height:"auto",width:"100%"}},Pt={class:"d-flex justify-space-between mb-3 item_title",style:{background:"#fff"}},Nt={class:"item"},Mt={class:"count d-flex justify-center align-center"},At=["onClick"],Rt=["onClick"],Dt=["onClick"],zt={key:0,class:"d-flex justify-center align-end",style:{color:"#666"}},Ot={class:"text-center"},Yt={class:"d-md-flex justify-space-between line"},Ft={class:"mb-6"},Ut={class:"fw-4"},Wt={class:"text-caption ml-1",style:{color:"red"}},Xt={class:"button-group"};function jt(e,n,l,g,t,o){return T(),O(Z,null,[t.isCartOpen?(T(),O("div",{key:0,class:"overlay",onClick:n[0]||(n[0]=te((...s)=>o.hideCart&&o.hideCart(...s),["prevent"]))})):re("",!0),u("div",Et,[u("section",null,[u("div",Ht,[u("span",Lt,S(e.$t("Cart")),1),a(I,{onClick:o.hideCart},{default:r(()=>[a(R,null,{default:r(()=>[V("mdi-close")]),_:1})]),_:1},8,["onClick"])]),u("div",$t,[u("div",Pt,[u("span",null,S(e.$t("Item")),1),u("span",null,S(e.$t("SinglePrice")),1),u("span",null,S(e.$t("Count")),1),u("span",null,S(e.$t("Total")),1),u("span",null,S(e.$t("Operate")),1)]),(T(!0),O(Z,null,ue(this.cartItem,(s,i)=>(T(),O("div",{key:i,class:"d-flex justify-space-between align-center item_border mb-2 text-caption",style:{background:"#fff"}},[u("div",Nt,[a(fe,{src:s.img,class:"imgBox"},null,8,["src"]),u("span",null,S(s.title),1)]),u("div",null,[u("span",null,"$"+S(s.prices),1)]),u("div",Mt,[u("button",{onClick:y=>o.decrease(s)},"–",8,At),u("span",null,S(s.count),1),u("button",{onClick:y=>o.increase(s)},"＋",8,Rt)]),u("span",null,[u("span",null,S(s.prices*s.count),1)]),u("span",{onClick:y=>o.handledelete(i)},[a(R,{color:"error",style:{cursor:"pointer"}},{default:r(()=>[V("mdi-delete")]),_:1})],8,Dt)]))),128)),this.cartItem.length===0?(T(),O("div",zt,[a(R,null,{default:r(()=>[V("mdi-shopping-outline")]),_:1}),V(" "+S(e.$t("EmptyCart")),1)])):re("",!0)])]),a(_t,{modelValue:t.snackbar,"onUpdate:modelValue":n[1]||(n[1]=s=>t.snackbar=s),timeout:1500,color:"red-darken-2"},{default:r(()=>[u("div",Ot,S(t.snackbarText),1)]),_:1},8,["modelValue"]),u("section",Yt,[u("div",Ft,[u("span",Ut,"( "+S(o.totalCount)+"項商品 )",1),u("span",Wt,S(t.discount),1)]),u("div",Xt,[a(I,{class:"mr-1 fw-4 l-space",color:"#fff",style:{background:"red"},onClick:o.backToShop},{default:r(()=>[a(R,null,{default:r(()=>[V("mdi-arrow-left")]),_:1}),V(S(e.$t("Back")),1)]),_:1},8,["onClick"]),a(I,{class:"fw-4 l-space",color:"#fff",style:{background:"#000"}},{default:r(()=>[V(S(`${e.$t("Checkout")} .NT $${o.totalAmount}`),1),a(R,null,{default:r(()=>[V(" mdi-chevron-right")]),_:1})]),_:1})])])])],64)}const qt=ie(It,[["render",jt]]);const je=F({text:String,...oe(),...ne()},"VToolbarTitle"),qe=U()({name:"VToolbarTitle",props:je(),setup(e,n){let{slots:l}=n;return W(()=>{const g=!!(l.default||l.text||e.text);return a(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var t;return[g&&a("div",{class:"v-toolbar-title__placeholder"},[l.text?l.text():e.text,(t=l.default)==null?void 0:t.call(l)])]}})}),{}}}),Zt=[null,"prominent","default","comfortable","compact"],Ze=F({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Zt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...ge(),...oe(),...ye(),...be(),...ne({tag:"header"}),...ce()},"VToolbar"),Ne=U()({name:"VToolbar",props:Ze(),setup(e,n){var _;let{slots:l}=n;const{backgroundColorClasses:g,backgroundColorStyles:t}=le(Y(e,"color")),{borderClasses:o}=_e(e),{elevationClasses:s}=pe(e),{roundedClasses:i}=we(e),{themeClasses:y}=de(e),{rtlClasses:w}=ze(),v=L(!!(e.extended||(_=l.extension)!=null&&_.call(l))),m=d(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),b=d(()=>v.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Oe({VBtn:{variant:"text"}}),W(()=>{var A;const c=!!(e.title||l.title),x=!!(l.image||e.image),$=(A=l.extension)==null?void 0:A.call(l);return v.value=!!(e.extended||$),a(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},g.value,o.value,s.value,i.value,y.value,w.value,e.class],style:[t.value,e.style]},{default:()=>[x&&a("div",{key:"image",class:"v-toolbar__image"},[l.image?a(ae,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},l.image):a(fe,{key:"image-img",cover:!0,src:e.image},null)]),a(ae,{defaults:{VTabs:{height:q(m.value)}}},{default:()=>{var M,f,P;return[a("div",{class:"v-toolbar__content",style:{height:q(m.value)}},[l.prepend&&a("div",{class:"v-toolbar__prepend"},[(M=l.prepend)==null?void 0:M.call(l)]),c&&a(qe,{key:"title",text:e.title},{text:l.title}),(f=l.default)==null?void 0:f.call(l),l.append&&a("div",{class:"v-toolbar__append"},[(P=l.append)==null?void 0:P.call(l)])])]}}),a(ae,{defaults:{VTabs:{height:q(b.value)}}},{default:()=>[a(kt,null,{default:()=>[v.value&&a("div",{class:"v-toolbar__extension",style:{height:q(b.value)}},[$])]})]})]})}),{contentHeight:m,extensionHeight:b}}}),Gt=F({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Jt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:l}=n;let g=0,t=0;const o=ve(null),s=L(0),i=L(0),y=L(0),w=L(!1),v=L(!1),m=d(()=>Number(e.scrollThreshold)),b=d(()=>tt((m.value-s.value)/m.value||0)),_=()=>{const c=o.value;if(!c||l&&!l.value)return;g=s.value,s.value="window"in c?c.pageYOffset:c.scrollTop;const x=c instanceof Window?document.documentElement.scrollHeight:c.scrollHeight;if(t!==x){t=x;return}v.value=s.value<g,y.value=Math.abs(s.value-m.value)};return D(v,()=>{i.value=i.value||s.value}),D(w,()=>{i.value=0}),me(()=>{D(()=>e.scrollTarget,c=>{var $;const x=c?document.querySelector(c):window;x&&x!==o.value&&(($=o.value)==null||$.removeEventListener("scroll",_),o.value=x,o.value.addEventListener("scroll",_,{passive:!0}))},{immediate:!0})}),he(()=>{var c;(c=o.value)==null||c.removeEventListener("scroll",_)}),l&&D(l,_,{immediate:!0}),{scrollThreshold:m,currentScroll:s,currentThreshold:y,isScrollActive:w,scrollRatio:b,isScrollingUp:v,savedScroll:i}}const Kt=F({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Ze(),...ke(),...Gt(),height:{type:[Number,String],default:64}},"VAppBar"),Qt=U()({name:"VAppBar",props:Kt(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:l}=n;const g=ve(),t=Ye(e,"modelValue"),o=d(()=>{var P;const f=new Set(((P=e.scrollBehavior)==null?void 0:P.split(" "))??[]);return{hide:f.has("hide"),fullyHide:f.has("fully-hide"),inverted:f.has("inverted"),collapse:f.has("collapse"),elevate:f.has("elevate"),fadeImage:f.has("fade-image")}}),s=d(()=>{const f=o.value;return f.hide||f.fullyHide||f.inverted||f.collapse||f.elevate||f.fadeImage||!t.value}),{currentScroll:i,scrollThreshold:y,isScrollingUp:w,scrollRatio:v}=Jt(e,{canScroll:s}),m=d(()=>o.value.hide||o.value.fullyHide),b=d(()=>e.collapse||o.value.collapse&&(o.value.inverted?v.value>0:v.value===0)),_=d(()=>e.flat||o.value.fullyHide&&!t.value||o.value.elevate&&(o.value.inverted?i.value>0:i.value===0)),c=d(()=>o.value.fadeImage?o.value.inverted?1-v.value:v.value:void 0),x=d(()=>{var z,h;const f=Number(((z=g.value)==null?void 0:z.contentHeight)??e.height),P=Number(((h=g.value)==null?void 0:h.extensionHeight)??0);return m.value?i.value<y.value||o.value.fullyHide?f+P:f:f+P});J(d(()=>!!e.scrollBehavior),()=>{Fe(()=>{m.value?o.value.inverted?t.value=i.value>y.value:t.value=w.value||i.value<y.value:t.value=!0})});const{ssrBootStyles:$}=Xe(),{layoutItemStyles:A,layoutIsReady:M}=Se({id:e.name,order:d(()=>parseInt(e.order,10)),position:Y(e,"location"),layoutSize:x,elementSize:L(void 0),active:t,absolute:Y(e,"absolute")});return W(()=>{const f=Ne.filterProps(e);return a(Ne,G({ref:g,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...A.value,"--v-toolbar-image-opacity":c.value,height:void 0,...$.value},e.style]},f,{collapse:b.value,flat:_.value}),l)}),M}}),ea=F({...bt({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),ta=U()({name:"VAppBarNavIcon",props:ea(),setup(e,n){let{slots:l}=n;return W(()=>a(I,G(e,{class:["v-app-bar-nav-icon"]}),l)),{}}}),aa=U()({name:"VAppBarTitle",props:je(),setup(e,n){let{slots:l}=n;return W(()=>a(qe,G(e,{class:"v-app-bar-title"}),l)),{}}});function la(e){let{rootEl:n,isSticky:l,layoutItemStyles:g}=e;const t=L(!1),o=L(0),s=d(()=>{const w=typeof t.value=="boolean"?"top":t.value;return[l.value?{top:"auto",bottom:"auto",height:void 0}:void 0,t.value?{[w]:q(o.value)}:{top:g.value.top}]});me(()=>{D(l,w=>{w?window.addEventListener("scroll",y,{passive:!0}):window.removeEventListener("scroll",y)},{immediate:!0})}),he(()=>{window.removeEventListener("scroll",y)});let i=0;function y(){const w=i>window.scrollY?"up":"down",v=n.value.getBoundingClientRect(),m=parseFloat(g.value.top??0),b=window.scrollY-Math.max(0,o.value-m),_=v.height+Math.max(o.value,m)-window.scrollY-window.innerHeight,c=parseFloat(getComputedStyle(n.value).getPropertyValue("--v-body-scroll-y"))||0;v.height<window.innerHeight-m?(t.value="top",o.value=m):w==="up"&&t.value==="bottom"||w==="down"&&t.value==="top"?(o.value=window.scrollY+v.top-c,t.value=!0):w==="down"&&_<=0?(o.value=0,t.value="bottom"):w==="up"&&b<=0&&(c?t.value!=="top"&&(o.value=-b+c+m,t.value="top"):(o.value=v.top+b,t.value="top")),i=window.scrollY}return{isStuck:t,stickyStyles:s}}const oa=100,na=20;function Me(e){const n=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*n}function Ae(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let n=0;for(let l=e.length-1;l>0;l--){if(e[l].t===e[l-1].t)continue;const g=Me(n),t=(e[l].d-e[l-1].d)/(e[l].t-e[l-1].t);n+=(t-g)*Math.abs(t),l===e.length-1&&(n*=.5)}return Me(n)*1e3}function sa(){const e={};function n(t){Array.from(t.changedTouches).forEach(o=>{(e[o.identifier]??(e[o.identifier]=new at(na))).push([t.timeStamp,o])})}function l(t){Array.from(t.changedTouches).forEach(o=>{delete e[o.identifier]})}function g(t){var w;const o=(w=e[t])==null?void 0:w.values().reverse();if(!o)throw new Error(`No samples for touch id ${t}`);const s=o[0],i=[],y=[];for(const v of o){if(s[0]-v[0]>oa)break;i.push({t:v[0],d:v[1].clientX}),y.push({t:v[0],d:v[1].clientY})}return{x:Ae(i),y:Ae(y),get direction(){const{x:v,y:m}=this,[b,_]=[Math.abs(v),Math.abs(m)];return b>_&&v>=0?"right":b>_&&v<=0?"left":_>b&&m>=0?"down":_>b&&m<=0?"up":ra()}}}return{addMovement:n,endTouch:l,getVelocity:g}}function ra(){throw new Error}function ia(e){let{el:n,isActive:l,isTemporary:g,width:t,touchless:o,position:s}=e;me(()=>{window.addEventListener("touchstart",M,{passive:!0}),window.addEventListener("touchmove",f,{passive:!1}),window.addEventListener("touchend",P,{passive:!0})}),he(()=>{window.removeEventListener("touchstart",M),window.removeEventListener("touchmove",f),window.removeEventListener("touchend",P)});const i=d(()=>["left","right"].includes(s.value)),{addMovement:y,endTouch:w,getVelocity:v}=sa();let m=!1;const b=L(!1),_=L(0),c=L(0);let x;function $(h,p){return(s.value==="left"?h:s.value==="right"?document.documentElement.clientWidth-h:s.value==="top"?h:s.value==="bottom"?document.documentElement.clientHeight-h:j())-(p?t.value:0)}function A(h){let p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const k=s.value==="left"?(h-c.value)/t.value:s.value==="right"?(document.documentElement.clientWidth-h-c.value)/t.value:s.value==="top"?(h-c.value)/t.value:s.value==="bottom"?(document.documentElement.clientHeight-h-c.value)/t.value:j();return p?Math.max(0,Math.min(1,k)):k}function M(h){if(o.value)return;const p=h.changedTouches[0].clientX,k=h.changedTouches[0].clientY,C=25,E=s.value==="left"?p<C:s.value==="right"?p>document.documentElement.clientWidth-C:s.value==="top"?k<C:s.value==="bottom"?k>document.documentElement.clientHeight-C:j(),B=l.value&&(s.value==="left"?p<t.value:s.value==="right"?p>document.documentElement.clientWidth-t.value:s.value==="top"?k<t.value:s.value==="bottom"?k>document.documentElement.clientHeight-t.value:j());(E||B||l.value&&g.value)&&(x=[p,k],c.value=$(i.value?p:k,l.value),_.value=A(i.value?p:k),m=c.value>-20&&c.value<80,w(h),y(h))}function f(h){const p=h.changedTouches[0].clientX,k=h.changedTouches[0].clientY;if(m){if(!h.cancelable){m=!1;return}const E=Math.abs(p-x[0]),B=Math.abs(k-x[1]);(i.value?E>B&&E>3:B>E&&B>3)?(b.value=!0,m=!1):(i.value?B:E)>3&&(m=!1)}if(!b.value)return;h.preventDefault(),y(h);const C=A(i.value?p:k,!1);_.value=Math.max(0,Math.min(1,C)),C>1?c.value=$(i.value?p:k,!0):C<0&&(c.value=$(i.value?p:k,!1))}function P(h){if(m=!1,!b.value)return;y(h),b.value=!1;const p=v(h.changedTouches[0].identifier),k=Math.abs(p.x),C=Math.abs(p.y);(i.value?k>C&&k>400:C>k&&C>3)?l.value=p.direction===({left:"right",right:"left",top:"down",bottom:"up"}[s.value]||j()):l.value=_.value>.5}const z=d(()=>b.value?{transform:s.value==="left"?`translateX(calc(-100% + ${_.value*t.value}px))`:s.value==="right"?`translateX(calc(100% - ${_.value*t.value}px))`:s.value==="top"?`translateY(calc(-100% + ${_.value*t.value}px))`:s.value==="bottom"?`translateY(calc(100% - ${_.value*t.value}px))`:j(),transition:"none"}:void 0);return J(b,()=>{var k,C;const h=((k=n.value)==null?void 0:k.style.transform)??null,p=((C=n.value)==null?void 0:C.style.transition)??null;Fe(()=>{var E,B,X,K;(B=n.value)==null||B.style.setProperty("transform",((E=z.value)==null?void 0:E.transform)||"none"),(K=n.value)==null||K.style.setProperty("transition",((X=z.value)==null?void 0:X.transition)||null)}),lt(()=>{var E,B;(E=n.value)==null||E.style.setProperty("transform",h),(B=n.value)==null||B.style.setProperty("transition",p)})}),{isDragging:b,dragProgress:_,dragStyles:z}}function j(){throw new Error}const ua=["start","end","left","right","top","bottom"],ca=F({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,persistent:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>ua.includes(e)},sticky:Boolean,...ge(),...oe(),...St(),...ot({mobile:null}),...ye(),...ke(),...be(),...ne({tag:"nav"}),...ce()},"VNavigationDrawer"),da=U()({name:"VNavigationDrawer",props:ca(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,n){let{attrs:l,emit:g,slots:t}=n;const{isRtl:o}=ze(),{themeClasses:s}=de(e),{borderClasses:i}=_e(e),{backgroundColorClasses:y,backgroundColorStyles:w}=le(Y(e,"color")),{elevationClasses:v}=pe(e),{displayClasses:m,mobile:b}=nt(e),{roundedClasses:_}=we(e),c=mt(),x=Ye(e,"modelValue",null,H=>!!H),{ssrBootStyles:$}=Xe(),{scopeId:A}=xt(),M=ve(),f=L(!1),{runOpenDelay:P,runCloseDelay:z}=Ct(e,H=>{f.value=H}),h=d(()=>e.rail&&e.expandOnHover&&f.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),p=d(()=>ht(e.location,o.value)),k=d(()=>e.persistent),C=d(()=>!e.permanent&&(b.value||e.temporary)),E=d(()=>e.sticky&&!C.value&&p.value!=="bottom");J(()=>e.expandOnHover&&e.rail!=null,()=>{D(f,H=>g("update:rail",!H))}),J(()=>!e.disableResizeWatcher,()=>{D(C,H=>!e.permanent&&rt(()=>x.value=!H))}),J(()=>!e.disableRouteWatcher&&!!c,()=>{D(c.currentRoute,()=>C.value&&(x.value=!1))}),D(()=>e.permanent,H=>{H&&(x.value=!0)}),e.modelValue==null&&!C.value&&(x.value=e.permanent||!b.value);const{isDragging:B,dragProgress:X}=ia({el:M,isActive:x,isTemporary:C,width:h,touchless:Y(e,"touchless"),position:p}),K=d(()=>{const H=C.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):h.value;return B.value?H*X.value:H}),Ge=d(()=>["top","bottom"].includes(e.location)?0:h.value),{layoutItemStyles:xe,layoutItemScrimStyles:Je,layoutIsReady:Ke}=Se({id:e.name,order:d(()=>parseInt(e.order,10)),position:p,layoutSize:K,elementSize:Ge,active:d(()=>x.value||B.value),disableTransitions:d(()=>B.value),absolute:d(()=>e.absolute||E.value&&typeof Ce.value!="string")}),{isStuck:Ce,stickyStyles:Qe}=la({rootEl:M,isSticky:E,layoutItemStyles:xe}),Ve=le(d(()=>typeof e.scrim=="string"?e.scrim:null)),et=d(()=>({...B.value?{opacity:X.value*.2,transition:"none"}:void 0,...Je.value}));return Oe({VList:{bgColor:"transparent"}}),W(()=>{const H=t.image||e.image;return a(Z,null,[a(e.tag,G({ref:M,onMouseenter:P,onMouseleave:z,class:["v-navigation-drawer",`v-navigation-drawer--${p.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":f.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":C.value,"v-navigation-drawer--persistent":k.value,"v-navigation-drawer--active":x.value,"v-navigation-drawer--sticky":E.value},s.value,y.value,i.value,m.value,v.value,_.value,e.class],style:[w.value,xe.value,$.value,Qe.value,e.style,["top","bottom"].includes(p.value)?{height:"auto"}:{}]},A,l),{default:()=>{var Te,Be,Ie;return[H&&a("div",{key:"image",class:"v-navigation-drawer__img"},[t.image?a(ae,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{alt:"",cover:!0,height:"inherit",src:e.image}}},t.image):a(fe,{key:"image-img",alt:"",cover:!0,height:"inherit",src:e.image},null)]),t.prepend&&a("div",{class:"v-navigation-drawer__prepend"},[(Te=t.prepend)==null?void 0:Te.call(t)]),a("div",{class:"v-navigation-drawer__content"},[(Be=t.default)==null?void 0:Be.call(t)]),t.append&&a("div",{class:"v-navigation-drawer__append"},[(Ie=t.append)==null?void 0:Ie.call(t)])]}}),a(st,{name:"fade-transition"},{default:()=>[C.value&&(B.value||x.value)&&!!e.scrim&&a("div",G({class:["v-navigation-drawer__scrim",Ve.backgroundColorClasses.value],style:[et.value,Ve.backgroundColorStyles.value],onClick:()=>{k.value||(x.value=!1)}},A),null)]})])}),Ke.then(()=>({isStuck:Ce}))}}),va={name:"AppBar",components:{Cart:qt},emits:["showCart"],data(){return{isShow:!1,dialogtext:"",count:1,status:!0,itemCount:0,drawer:!1,droup:null,items:[{title:"Foo",value:"foo"},{title:"Bar",value:"bar"},{title:"Fizz",value:"fizz"},{title:"Buzz",value:"buzz"}],languageItems:[{title:"繁體中文",value:"zh"},{title:"English",value:"en"}]}},methods:{showDialog(){this.isShow=!0,this.dialogtext="是否登出？"},logout(){dt(He).then(()=>{this.isShow=!1,this.setUser(null),this.setLoginState(!1),Ee("false"),Re.push({name:"Home"})})},checkUserAuth(){vt(He,e=>{e!==null?Ee("true"):(this.user={},this.setLoginState(!1))})},toggleCart(){this.$nextTick(()=>{this.$refs.cartComponentRef.showCart()})},...it("i18n",["changeLanguage"]),...De("user",["setUser","setLoginState"])},computed:{loginState(){return ut()},totalCount(){return this.cartItem.reduce((e,n)=>e+n.count,0)},currentLanguageText(){var e;return(e=this.languageItems.find(n=>n.value===this.language))==null?void 0:e.title},...ee("user",["loginState"]),...ee("cart",["cartItem"]),...ee("i18n",["language"])},mounted(){this.checkUserAuth()},watch:{group(){this.drawer=!1}}},ma=u("a",{href:"#",to:"/Home",style:{color:"#eee","text-decoration-line":"none"}},"Henlex's",-1),ha={class:"cartBox"},fa={class:"cartCount fw-400"},ga={class:"mx-auto text-center d-flex flex-column"},ya=u("hr",{class:"mt-2 mb-2"},null,-1),ba={class:"text-center"},_a={class:"mt-7 mb-5"};function pa(e,n,l,g,t,o){const s=Ue("Cart");return T(),O(Z,null,[a(Qt,{class:"px-1",style:{background:"linear-gradient(to right, #1a6040, #197149)",color:"#eee"}},{default:r(()=>[a(ta,{class:"d-md-none",variant:"text",onClick:n[0]||(n[0]=te(i=>t.drawer=!t.drawer,["stop"]))}),a(aa,{class:"mr-10"},{default:r(()=>[ma]),_:1}),a(We,{class:"d-none d-md-flex justify-xl-center align-center flex-grow-1"},{default:r(()=>[a(I,{color:"block",variant:"text",class:"mx-2",rounded:"xl",to:"/shop"},{default:r(()=>[V(S(e.$t("Shop")),1)]),_:1}),a(I,{color:"block",variant:"text",class:"mx-2",rounded:"xl",to:"/storeInfo"},{default:r(()=>[V(S(e.$t("StoreInfomation")),1)]),_:1}),a(I,{color:"block",variant:"text",class:"mx-2",rounded:"xl",to:"/contactInfo"},{default:r(()=>[V(S(e.$t("Contact")),1)]),_:1})]),_:1}),a(s,{ref:"cartComponentRef"},null,512),u("div",ha,[u("span",fa,S(o.totalCount),1),a(I,{class:"mx-2",icon:"mdi-cart-outline",onClick:o.toggleCart},null,8,["onClick"])]),u("div",null,[a(I,{id:"menu-activator"},{default:r(()=>[a(R,null,{default:r(()=>[V("mdi-earth")]),_:1}),V(S(o.currentLanguageText),1)]),_:1}),a($e,{activator:"#menu-activator"},{default:r(()=>[a(Pe,null,{default:r(()=>[(T(!0),O(Z,null,ue(t.languageItems,(i,y)=>(T(),N(Q,{key:y,value:y,onClick:w=>e.changeLanguage(i.value)},{default:r(()=>[a(pt,null,{default:r(()=>[V(S(i.title),1)]),_:2},1024)]),_:2},1032,["value","onClick"]))),128))]),_:1})]),_:1})]),a($e,{"min-width":"200px",rounded:""},{activator:r(({props:i})=>[a(I,G({icon:""},i),{default:r(()=>[a(ft,{color:"#2E7D32",size:"large"},{default:r(()=>[o.loginState===!0?(T(),N(R,{key:0},{default:r(()=>[V("mdi-account-circle")]),_:1})):(T(),N(R,{key:1},{default:r(()=>[V("mdi-login")]),_:1}))]),_:1})]),_:2},1040)]),default:r(()=>[a(Le,null,{default:r(()=>[a(gt,null,{default:r(()=>[u("div",ga,[o.loginState===!1?(T(),N(I,{key:0,rounded:"",variant:"text",to:"/Register"},{default:r(()=>[V(S(e.$t("Register")),1)]),_:1})):(T(),N(I,{key:1,rounded:"",variant:"text",to:"/Dashboard"},{default:r(()=>[V(" 我的帳戶 ")]),_:1})),ya,o.loginState===!1?(T(),N(I,{key:2,rounded:"",variant:"text",to:"/login"},{default:r(()=>[V(S(e.$t("Login")),1)]),_:1})):(T(),N(I,{key:3,rounded:"",variant:"text",onClick:te(o.showDialog,["stop"])},{default:r(()=>[V(" 登出 ")]),_:1},8,["onClick"]))])]),_:1})]),_:1}),a(wt,{modelValue:t.isShow,"onUpdate:modelValue":n[2]||(n[2]=i=>t.isShow=i),"max-width":"350px",transition:"dialog-top-transition",class:"mt-n16"},{default:r(()=>[u("div",ba,[a(Le,null,{default:r(()=>[u("div",_a,[u("div",null,S(t.dialogtext),1)]),a(yt,{class:"mb-3 d-flex justify-center tonal"},{default:r(()=>[a(I,{text:"確認",onClick:te(o.logout,["stop"]),color:"#5865f2",variant:"flat"},null,8,["onClick"]),a(I,{text:"取消",onClick:n[1]||(n[1]=i=>t.isShow=!1),color:"#5865f2",variant:"flat"})]),_:1})]),_:1})])]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(da,{modelValue:t.drawer,"onUpdate:modelValue":n[3]||(n[3]=i=>t.drawer=i),temporary:""},{default:r(()=>[a(Pe,null,{default:r(()=>[a(Q,{to:"/shop",title:"購物"}),a(Q,{to:"/storeInfo",title:"店面資訊"}),a(Q,{to:"/contactInfo",title:"聯絡我們"})]),_:1})]),_:1},8,["modelValue"])],64)}const wa=ie(va,[["render",pa]]),ka={__name:"View",setup(e){return(n,l)=>{const g=Ue("router-view");return T(),N(Vt,null,{default:r(()=>[a(g)]),_:1})}}};const Sa=F({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...ge(),...oe(),...ye(),...ke(),...be(),...ne({tag:"footer"}),...ce()},"VFooter"),xa=U()({name:"VFooter",props:Sa(),setup(e,n){let{slots:l}=n;const{themeClasses:g}=de(e),{backgroundColorClasses:t,backgroundColorStyles:o}=le(Y(e,"color")),{borderClasses:s}=_e(e),{elevationClasses:i}=pe(e),{roundedClasses:y}=we(e),w=L(32),{resizeRef:v}=Bt(c=>{c.length&&(w.value=c[0].target.clientHeight)}),m=d(()=>e.height==="auto"?w.value:parseInt(e.height,10)),{layoutItemStyles:b,layoutIsReady:_}=Se({id:e.name,order:d(()=>parseInt(e.order,10)),position:d(()=>"bottom"),layoutSize:m,elementSize:d(()=>e.height==="auto"?void 0:m.value),active:d(()=>e.app),absolute:Y(e,"absolute")});return W(()=>a(e.tag,{ref:v,class:["v-footer",g.value,t.value,s.value,i.value,y.value,e.class],style:[o.value,e.app?b.value:{height:q(e.height)},e.style]},l)),e.app?_:{}}}),Ca=u("strong",null,"TEL : (03)362-3344",-1),Va=u("strong",null,"@2024 Henlex's . XXX版股份有限公司版權所有",-1),Ta={__name:"Footer",setup(e){const n=ct([{icon:"mdi-facebook",link:"https://www.facebook.com/"},{icon:"mdi-shopping",link:"https://shopee.tw/"},{icon:"mdi-instagram",link:"https://www.instagram.com/"},{icon:"mdi-youtube",link:"https://www.youtube.com/"}]);return(l,g)=>(T(),N(xa,{rounded:"",style:{background:"linear-gradient(to left, #e2e2e2, #f7f5f5ce)"}},{default:r(()=>[a(We,{class:"pb-6 pt-6","no-gutters":""},{default:r(()=>[a(se,{class:"text-center mt-4",cols:"12"},{default:r(()=>[(T(!0),O(Z,null,ue(n,t=>(T(),N(I,{key:t,class:"mx-4",icon:t.icon,href:t.link,variant:"text",target:"_blank"},null,8,["icon","href"]))),128))]),_:1}),a(se,{class:"text-center text-caption mt-1",cols:"12"},{default:r(()=>[Ca]),_:1}),a(se,{class:"text-center text-caption mt-2 mb-5",cols:"12"},{default:r(()=>[Va]),_:1})]),_:1})]),_:1}))}};const Ba={name:"ScrollTop",data(){return{top:0,isShow:!1}},mounted(){window.addEventListener("scroll",this.scrolling)},beforeUnmount(){window.removeEventListener("scroll",this.scrolling)},methods:{scrollTop(){window.scrollTo({top:0,behavior:"smooth"})},scrolling(){const e=window.pageYOffset,n=e-this.top;this.top=e,n<30&&this.top<400?this.isShow=!1:this.isShow=!0}}};function Ia(e,n,l,g,t,o){return t.isShow?(T(),N(I,{key:0,onClick:o.scrollTop,class:"scrollBtn"},{default:r(()=>[a(R,{class:"icon"},{default:r(()=>[V("mdi-arrow-up")]),_:1})]),_:1},8,["onClick"])):re("",!0)}const Ea=ie(Ba,[["render",Ia]]),Za={__name:"Default",setup(e){return(n,l)=>(T(),N(Tt,null,{default:r(()=>[a(wa),a(ka),a(Ea),a(Ta)]),_:1}))}};export{Za as default};
