import{_ as a}from"./index.244dccde.js";import{z as t,C as e,X as o,a1 as s,a6 as l,S as n,$ as i,H as c,A as r,B as d,M as p,Y as u}from"./element-plus.bd20adc7.js";const b=t({name:"CleanCache",setup(){const a=e();return{dialog:a,show:()=>a.value.open(),close:()=>a.value.close(),submit:()=>{localStorage.removeItem("config"),localStorage.removeItem("global"),window.location.reload()}}}}),m=a=>(r("data-v-33554e8e"),a=a(),d(),a),g={class:"wrapper"},v=m((()=>l("p",{class:"tips"},[u("所有配置后的数据会保存到浏览器中，你可以点击下方按钮清除所有数据并恢复为初始状态，但注意数据删除后是"),l("b",null,"不可恢复"),u("的，请谨慎操作!")],-1))),f={class:"button-wrapper"},w=m((()=>l("p",{class:"warn-text"},"❗ 数据删除后不可恢复，是否继续?",-1))),h={class:"footer",style:{"text-align":"right",padding:"12px"}};var x=a(b,[["render",function(a,t,e,r,d,u){const b=o("animation-dialog");return p(),s(c,null,[l("div",g,[v,l("div",f,[l("button",{class:"btn btn-danger",onClick:t[0]||(t[0]=(...t)=>a.show&&a.show(...t))},"删除所有数据")])]),n(b,{ref:"dialog",animationMode:"",title:"提示",width:"300px",height:"160px",closeOnClickOutside:!1,appendToBody:""},{footer:i((()=>[l("div",h,[l("button",{type:"button",class:"btn",onClick:t[1]||(t[1]=(...t)=>a.close&&a.close(...t))},"取消"),l("button",{type:"button",class:"btn btn-primary",onClick:t[2]||(t[2]=(...t)=>a.submit&&a.submit(...t))},"确认")])])),default:i((()=>[w])),_:1},512)],64)}],["__scopeId","data-v-33554e8e"]]);export{x as default};
