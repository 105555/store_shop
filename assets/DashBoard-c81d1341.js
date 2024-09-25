import{o as ee,a as te}from"./firebase-1713f494.js";import{p as T,i as B,Z as G,e as t,W as y,$ as ae,Y as $,n as v,X as U,V as le,j as se,l as ne,q as ie,k as u,m as oe,a as de,_ as H,o as _,Q as z,f as a,g as c,t as x,d as m,c as I,b as S,P as ce}from"./index-9e565168.js";import{V as D}from"./VContainer-87c0ea69.js";import{m as F,u as w,R as ue,f as O,j as Q,V as g,d as re,e as pe,b as me,h as fe,i as xe,n as V,x as ve,o as he}from"./VCard-6769d99c.js";import{V as _e,a as q,b as A}from"./VList-e4428d98.js";import{V as R}from"./VRow-e33d4956.js";import{V as h}from"./VCol-deb3865b.js";import{V as ge}from"./index-714d60d8.js";import{b as ye,d as be,m as Ve,c as Ce,e as Pe,a as ke}from"./lazy-43f8a239.js";import{V as Ee,a as Ie}from"./VApp-aa23cb46.js";/* empty css              */import"./ssrBoot-bc93a1f9.js";import"./layout-bb4e9123.js";const k=Symbol.for("vuetify:v-expansion-panel"),W=T({...F(),...ye()},"VExpansionPanelText"),M=B()({name:"VExpansionPanelText",props:W(),setup(e,n){let{slots:s}=n;const l=G(k);if(!l)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:i,onAfterLeave:d}=be(e,l.isSelected);return w(()=>t(ge,{onAfterLeave:d},{default:()=>{var o;return[y(t("div",{class:["v-expansion-panel-text",e.class],style:e.style},[s.default&&i.value&&t("div",{class:"v-expansion-panel-text__wrapper"},[(o=s.default)==null?void 0:o.call(s)])]),[[ae,l.isSelected.value]])]}})),{}}}),X=T({color:String,expandIcon:{type:$,default:"$expand"},collapseIcon:{type:$,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...F()},"VExpansionPanelTitle"),N=B()({name:"VExpansionPanelTitle",directives:{Ripple:ue},props:X(),setup(e,n){let{slots:s}=n;const l=G(k);if(!l)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:i,backgroundColorStyles:d}=O(e,"color"),o=v(()=>({collapseIcon:e.collapseIcon,disabled:l.disabled.value,expanded:l.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly})),p=v(()=>l.isSelected.value?e.collapseIcon:e.expandIcon);return w(()=>{var E;return y(t("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":l.isSelected.value,"v-expansion-panel-title--focusable":e.focusable,"v-expansion-panel-title--static":e.static},i.value,e.class],style:[d.value,e.style],type:"button",tabindex:l.disabled.value?-1:void 0,disabled:l.disabled.value,"aria-expanded":l.isSelected.value,onClick:e.readonly?void 0:l.toggle},[t("span",{class:"v-expansion-panel-title__overlay"},null),(E=s.default)==null?void 0:E.call(s,o.value),!e.hideActions&&t(Q,{defaults:{VIcon:{icon:p.value}}},{default:()=>{var b;return[t("span",{class:"v-expansion-panel-title__icon"},[((b=s.actions)==null?void 0:b.call(s,o.value))??t(g,null,null)])]}})]),[[U("ripple"),e.ripple]])}),{}}}),Y=T({title:String,text:String,bgColor:String,...re(),...Ve(),...pe(),...me(),...X(),...W()},"VExpansionPanel"),C=B()({name:"VExpansionPanel",props:Y(),emits:{"group:selected":e=>!0},setup(e,n){let{slots:s}=n;const l=Ce(e,k),{backgroundColorClasses:i,backgroundColorStyles:d}=O(e,"bgColor"),{elevationClasses:o}=fe(e),{roundedClasses:p}=xe(e),E=v(()=>(l==null?void 0:l.disabled.value)||e.disabled),b=v(()=>l.group.items.value.reduce((f,r,L)=>(l.group.selected.value.includes(r.id)&&f.push(L),f),[])),Z=v(()=>{const f=l.group.items.value.findIndex(r=>r.id===l.id);return!l.isSelected.value&&b.value.some(r=>r-f===1)}),J=v(()=>{const f=l.group.items.value.findIndex(r=>r.id===l.id);return!l.isSelected.value&&b.value.some(r=>r-f===-1)});return le(k,l),w(()=>{const f=!!(s.text||e.text),r=!!(s.title||e.title),L=N.filterProps(e),K=M.filterProps(e);return t(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":l.isSelected.value,"v-expansion-panel--before-active":Z.value,"v-expansion-panel--after-active":J.value,"v-expansion-panel--disabled":E.value},p.value,i.value,e.class],style:[d.value,e.style]},{default:()=>[t("div",{class:["v-expansion-panel__shadow",...o.value]},null),t(Q,{defaults:{VExpansionPanelTitle:{...L},VExpansionPanelText:{...K}}},{default:()=>{var j;return[r&&t(N,{key:"title"},{default:()=>[s.title?s.title():e.title]}),f&&t(M,{key:"text"},{default:()=>[s.text?s.text():e.text]}),(j=s.default)==null?void 0:j.call(s)]}})]})}),{groupItem:l}}}),Se=["default","accordion","inset","popout"],Te=T({flat:Boolean,...Pe(),...Y(),...se(),variant:{type:String,default:"default",validator:e=>Se.includes(e)}},"VExpansionPanels"),P=B()({name:"VExpansionPanels",props:Te(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:s}=n;const{next:l,prev:i}=ke(e,k),{themeClasses:d}=ne(e),o=v(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return ie({VExpansionPanel:{bgColor:u(e,"bgColor"),collapseIcon:u(e,"collapseIcon"),color:u(e,"color"),eager:u(e,"eager"),elevation:u(e,"elevation"),expandIcon:u(e,"expandIcon"),focusable:u(e,"focusable"),hideActions:u(e,"hideActions"),readonly:u(e,"readonly"),ripple:u(e,"ripple"),rounded:u(e,"rounded"),static:u(e,"static")}}),w(()=>t(e.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":e.flat,"v-expansion-panels--tile":e.tile},d.value,o.value,e.class],style:e.style},{default:()=>{var p;return[(p=s.default)==null?void 0:p.call(s,{prev:i,next:l})]}})),{next:l,prev:i}}}),Be={name:"DashBoardMain",data(){return{user:{},isCollapsed:{payments:!1,shipments:!1,receipts:!1,list:!1},itemText:{one:"您還沒有商品 購物去",two:"目前無商品待出貨",three:"目前無商品待收貨",four:"查無歷史購物清單"}}},methods:{checkUserAuth(){ee(te,e=>{if(e!==null){const s=new Date(e.metadata.creationTime).toLocaleDateString();this.user={name:e.displayName,email:e.email,uid:e.uid,created:s},this.setUser(this.user),this.setLoginState(!0)}else this.user={},this.setLoginState(!1)})},toggleCollapse(e){for(let n in this.isCollapsed)n!==e&&(this.isCollapsed[n]=!1);this.isCollapsed[e]=!this.isCollapsed[e]},...oe("user",["setUser","setLoginState"])},mounted(){this.$nextTick(()=>{this.checkUserAuth()})},computed:{dynamicHeight(){switch(this.$vuetify.display.name){case"xs":return 200;default:return 250}},...de("user",["userInfo","loginState"])}},we={key:0,class:""},Le={key:1},De={key:2},qe={key:3},Ae=m("hr",null,null,-1),je=m("br",{class:"mb-12"},null,-1),$e={class:"text-h6 mb-2 d-flex align-center",style:{color:"#000"}},Re=m("p",{class:"text-h6 mb-2 d-flex align-center",style:{color:"#000"}},"訂購與運送",-1),Me=m("p",{class:"text-h6 d-flex align-center",style:{color:"#000"}},"服務項目",-1);function Ne(e,n,s,l,i,d){const o=U("expand-transition");return _(),z(Ie,{style:{background:"linear-gradient(to right, #e2e2e2, #d7f0e5)"}},{default:a(()=>[t(Ee,{class:"pb-16 pt-16"},{default:a(()=>[t(D,null,{default:a(()=>[t(V,{class:"mb-4",height:d.dynamicHeight},{default:a(()=>[t(ve,null,{default:a(()=>[c("用戶信息")]),_:1}),t(he,null,{default:a(()=>[t(_e,null,{default:a(()=>[t(q,null,{default:a(()=>[t(A,null,{default:a(()=>[c("用戶名 : "+x(e.userInfo.name),1)]),_:1})]),_:1}),t(q,null,{default:a(()=>[t(A,null,{default:a(()=>[c("電子郵件 : "+x(e.userInfo.email),1)]),_:1})]),_:1}),t(q,null,{default:a(()=>[t(A,null,{default:a(()=>[c("建立日期 : "+x(e.userInfo.created),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["height"]),t(R,{block:"",class:"mb-5 mt-5"},{default:a(()=>[t(h,{cols:"6"},{default:a(()=>[m("div",{class:"side text-center",onClick:n[0]||(n[0]=p=>d.toggleCollapse("payments"))},"待付款")]),_:1}),t(h,{cols:"6"},{default:a(()=>[m("div",{class:"side text-center",onClick:n[1]||(n[1]=p=>d.toggleCollapse("shipments"))}," 待出貨 ")]),_:1}),t(h,{cols:"6"},{default:a(()=>[m("div",{class:"side text-center",onClick:n[2]||(n[2]=p=>d.toggleCollapse("receipts"))},"待收貨")]),_:1}),t(h,{cols:"6"},{default:a(()=>[m("div",{class:"side text-center",onClick:n[3]||(n[3]=p=>d.toggleCollapse("list"))},"歷史清單")]),_:1}),t(D,null,{default:a(()=>[i.isCollapsed.payments?y((_(),I("div",we,[t(V,{cols:"12",class:"mt-2 d-flex justify-center align-center text-h7",height:"250px",style:{color:"gray"}},{default:a(()=>[t(g,null,{default:a(()=>[c("mdi-shopping-outline")]),_:1}),c(x(i.itemText.one),1)]),_:1})])),[[o]]):S("",!0),i.isCollapsed.shipments?y((_(),I("div",Le,[t(V,{cols:"12",class:"mt-2 d-flex justify-center align-center text-h7",height:"250px",style:{color:"gray"}},{default:a(()=>[t(g,null,{default:a(()=>[c("mdi-truck-delivery")]),_:1}),c(" "+x(i.itemText.two),1)]),_:1})])),[[o]]):S("",!0),i.isCollapsed.receipts?y((_(),I("div",De,[t(V,{cols:"12",class:"mt-2 d-flex justify-center align-center text-h7",height:"250px",style:{color:"gray"}},{default:a(()=>[t(g,null,{default:a(()=>[c("mdi-truck-delivery")]),_:1}),c(x(i.itemText.three),1)]),_:1})])),[[o]]):S("",!0),i.isCollapsed.list?y((_(),I("div",qe,[t(V,{cols:"12",class:"mt-2 d-flex justify-center align-center text-h7",height:"250px",style:{color:"gray"}},{default:a(()=>[t(g,null,{default:a(()=>[c("mdi-account-search")]),_:1}),c(x(i.itemText.four),1)]),_:1})])),[[o]]):S("",!0)]),_:1})]),_:1})]),_:1}),t(D,{class:"mb-12 pl-12 pr-12"},{default:a(()=>[Ae,je,t(R,{cols:"12"},{default:a(()=>[t(h,{md:"5",cols:"12"},{default:a(()=>[m("p",$e,[t(g,{class:"text-h6 pr-2",style:{color:"#808836"}},{default:a(()=>[c("mdi-watch-export")]),_:1}),c("Henlex's 手錶保養方式 ")]),Re,Me]),_:1}),t(h,{md:"7",cols:"12"},{default:a(()=>[t(P,{variant:"Item"},{default:a(()=>[t(C,{title:"注意事項",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"})]),_:1}),t(P,{variant:"Item"},{default:a(()=>[t(C,{title:"優惠券使用方法",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"})]),_:1}),t(P,{variant:"Item"},{default:a(()=>[t(C,{title:"會員制度相關說明",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"})]),_:1}),t(P,{variant:"Item"},{default:a(()=>[t(C,{title:"產品保養與維修",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"})]),_:1}),t(P,{variant:"Item"},{default:a(()=>[t(C,{title:"售後服務",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const Ge=H(Be,[["render",Ne]]),Ue={name:"DashBoard",components:{DashBoardMain:Ge}};function He(e,n,s,l,i,d){const o=ce("DashBoard-Main");return _(),z(o)}const lt=H(Ue,[["render",He]]);export{lt as default};
