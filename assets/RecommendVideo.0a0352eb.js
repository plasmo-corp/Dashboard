import{_ as s,d as e,r as a,b as t,k as i,f as l,g as n,w as o,F as d,o as r,l as c,x as p,C as u,z as m,A as v}from"./index.1ee3e23f.js";const g=(s=>(m("data-v-026e91de"),s=s(),v(),s))((()=>l("div",{class:"tips"},"以下提供部分推荐动态壁纸选择，来源于网络CDN，有可能出现无法访问问题，你也可以手动输入自定义的网络https视频路径。",-1))),b={key:0,class:"video-wrapper"},h=["onClick"],k={class:"img-wrapper"},C=["src"];var f=s(e({emits:["submit"],setup(s,{emit:e}){const m=a(!1),v=a(),f=()=>{v.value.open(),m.value||(m.value=!0)},y=()=>{},w=[4,5,6,10,11,14,15,16,17,18,19,21,22,23,24,25,26,27,28,30,31,32,33,34,35,37,39,41,42,43,44,47,49].map((s=>({img:`https://cdn.jsdelivr.net/gh/dsource/static/assets/${s}-test.jpg`,video:`https://cdn.jsdelivr.net/gh/dsource/static/assets/${s}-test.webm`})));return(s,a)=>{const x=t("animation-dialog");return r(),i(d,null,[l("button",{type:"button",class:"btn btn-small btn-primary",style:{margin:"0","margin-right":"5px"},onClick:f},"动态壁纸推荐"),n(x,{ref:(s,e)=>{e.dialog=s,v.value=s},animationMode:"",customWrapperClass:"backdrop-blur",title:"动态壁纸推荐",width:"min(760px, 94vw)",height:"min(480px, 80vh)",appendToBody:"",closeOnClickOutside:!1,listenWindowSizeChange:!0,onBeforeClose:y},{default:o((()=>[g,m.value?(r(),i("div",b,[(r(!0),i(d,null,c(u(w),(s=>(r(),i("div",{class:"video",key:s.img,onClick:a=>(s=>{e("submit",s.video),v.value.close()})(s)},[l("div",k,[s.img?(r(),i("img",{key:0,src:s.img},null,8,C)):p("",!0)])],8,h)))),128)),(r(),i(d,null,c(4,(s=>l("div",{class:"video-fake",key:s}))),64))])):p("",!0)])),_:1},512)],64)}}}),[["__scopeId","data-v-026e91de"]]);export{f as default};