var t=Object.defineProperty,e=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,r=(e,o,n)=>o in e?t(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,p=(t,p)=>{for(var a in p||(p={}))o.call(p,a)&&r(t,a,p[a]);if(e)for(var a of e(p))n.call(p,a)&&r(t,a,p[a]);return t};import{_ as a,d as i,L as s,k as c,v as m,n as S,x as d,N as l,o as f}from"./index.8f5c5dfd.js";var g=a(i({name:"Empty",props:{componentSetting:{type:Object,required:!0}},setup:t=>({positionCSS:s((()=>l(t.componentSetting.position)))})}),[["render",function(t,e,o,n,r,a){return t.componentSetting.customText?(f(),c("div",{key:0,class:"wrapper",style:S(p({fontSize:t.componentSetting.textFontSize+"px",color:t.componentSetting.textColor,textShadow:t.componentSetting.textShadow,padding:t.componentSetting.padding+"px",fontFamily:t.componentSetting.fontFamily},t.positionCSS))},m(t.componentSetting.customText),5)):d("",!0)}],["__scopeId","data-v-6fe90e02"]]);export{g as default};
