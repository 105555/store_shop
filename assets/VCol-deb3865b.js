/* empty css              */import{m as y,b as S}from"./VCard-6769d99c.js";import{aK as a,aL as f,p as C,i as k,n as N,aM as h}from"./index-9e565168.js";const i=(()=>a.reduce((e,r)=>(e[r]={type:[Boolean,String,Number],default:!1},e),{}))(),d=(()=>a.reduce((e,r)=>{const t="offset"+f(r);return e[t]={type:[String,Number],default:null},e},{}))(),m=(()=>a.reduce((e,r)=>{const t="order"+f(r);return e[t]={type:[String,Number],default:null},e},{}))(),u={col:Object.keys(i),offset:Object.keys(d),order:Object.keys(m)};function L(e,r,t){let o=e;if(!(t==null||t===!1)){if(r){const s=r.replace(e,"");o+=`-${s}`}return e==="col"&&(o="v-"+o),e==="col"&&(t===""||t===!0)||(o+=`-${t}`),o.toLowerCase()}}const P=["auto","start","end","center","baseline","stretch"],V=C({cols:{type:[Boolean,String,Number],default:!1},...i,offset:{type:[String,Number],default:null},...d,order:{type:[String,Number],default:null},...m,alignSelf:{type:String,default:null,validator:e=>P.includes(e)},...y(),...S()},"VCol"),E=k()({name:"VCol",props:V(),setup(e,r){let{slots:t}=r;const o=N(()=>{const s=[];let l;for(l in u)u[l].forEach(n=>{const g=e[n],c=L(l,n,g);c&&s.push(c)});const b=s.some(n=>n.startsWith("v-col-"));return s.push({"v-col":!b||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),s});return()=>{var s;return h(e.tag,{class:[o.value,e.class],style:e.style},(s=t.default)==null?void 0:s.call(t))}}});export{E as V};
