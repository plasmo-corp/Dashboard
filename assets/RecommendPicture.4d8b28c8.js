import{_ as a,a as e}from"./index.244dccde.js";import{z as l,C as s,X as t,a1 as r,a6 as i,S as n,$ as o,H as c,M as u,I as v,J as p,U as d,A as m,B as h}from"./element-plus.bd20adc7.js";const g=a=>(m("data-v-f9c156ea"),a=a(),h(),a),y={key:0,class:"wrapper"},k={class:"box"},f=g((()=>i("div",{class:"title-wrapper clear"},[i("span",{class:"title fl"},"必应壁纸")],-1))),b={key:0,class:"text"},w={key:1,class:"text"},x={key:2,class:"bing item-wrapper"},C=["onClick"],j={class:"img-wrapper"},$=["src"],_={class:"box"},z={class:"title-wrapper clear"},A=g((()=>i("span",{class:"title fl"},"Unsplash",-1))),E={key:0,class:"date fr"},I={key:0,class:"text"},S={key:1,class:"text"},B={key:2,class:"unsplash item-wrapper"},H=["onClick"],L={class:"img-wrapper"},U=["src"];var M=a(l({emits:["submit"],setup(a,{emit:l}){const m=s(!1),h=s(),g=s([]),M=s(!1),O=s(!1),W=s([]),D=s(""),J=s(!1),N=s(!1),P=()=>{h.value.open(),m.value||(m.value=!0),(N.value||0===W.value.length)&&(async()=>{try{J.value=!0,N.value=!1;const a=await fetch(`${e}/photos`),{errCode:l,data:s}=await a.json();if(200!==l)throw new Error("Api server error");W.value=s.list,D.value=s.date}catch(a){N.value=!0,console.error(a)}finally{J.value=!1}})(),(O.value||0===g.value.length)&&(async()=>{try{M.value=!0,O.value=!1;const a=encodeURIComponent("https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=8&mkt=zh-CN"),l=await fetch(`${e}/api/transfer?target=${a}&noHeaders=1`,{headers:{"content-type":"application/json; charset=utf-8"}}),{images:s}=await l.json();if(!(s&&s.length>0))throw new Error("Api server error");g.value=s.map((a=>({url:`https://cn.bing.com/${a.url}`,thumb:`https://cn.bing.com/${a.urlbase}_320x240.jpg&rf=LaDigue_1920x1080.jpg&pid=hp`})))}catch(a){O.value=!0,console.error(a)}finally{M.value=!1}})()},R=()=>{},T=a=>{l("submit",a),h.value.close()};return(a,e)=>{const l=t("animation-dialog");return u(),r(c,null,[i("button",{type:"button",class:"btn btn-small btn-primary",style:{margin:"0","margin-right":"5px"},onClick:P},"今日壁纸推荐"),n(l,{ref:(a,e)=>{e.dialog=a,h.value=a},animationMode:"",customWrapperClass:"backdrop-blur",title:"今日壁纸推荐",width:"min(760px, 94vw)",height:"min(480px, 80vh)",appendToBody:"",closeOnClickOutside:!1,listenWindowSizeChange:!0,onBeforeClose:R},{default:o((()=>[m.value?(u(),r("div",y,[i("div",k,[f,M.value?(u(),r("div",b,"Loading...")):O.value?(u(),r("div",w,"Something Error...")):(u(),r("div",x,[(u(!0),r(c,null,v(g.value,(a=>(u(),r("div",{class:"item",key:a.url,onClick:e=>T(a.url)},[i("div",j,[a.url?(u(),r("img",{key:0,src:a.thumb,loading:"lazy"},null,8,$)):p("",!0)])],8,C)))),128)),(u(),r(c,null,v(4,(a=>i("div",{class:"item-fake",key:a}))),64))]))]),i("div",_,[i("div",z,[A,D.value?(u(),r("span",E,d(D.value),1)):p("",!0)]),J.value?(u(),r("div",I,"Loading...")):N.value?(u(),r("div",S,"Something Error...")):(u(),r("div",B,[(u(!0),r(c,null,v(W.value,(a=>(u(),r("div",{class:"item",key:a.id,onClick:e=>T(a.urls.raw)},[i("div",L,[a.urls.thumb?(u(),r("img",{key:0,src:a.urls.thumb,loading:"lazy"},null,8,U)):p("",!0)])],8,H)))),128)),(u(),r(c,null,v(4,(a=>i("div",{class:"item-fake",key:a}))),64))]))])])):p("",!0)])),_:1},512)],64)}}}),[["__scopeId","data-v-f9c156ea"]]);export{M as default};
