var t=Object.defineProperty,e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,a=(e,n,o)=>n in e?t(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,r=(t,r)=>{for(var i in r||(r={}))n.call(r,i)&&a(t,i,r[i]);if(e)for(var i of e(r))o.call(r,i)&&a(t,i,r[i]);return t};import{_ as i,m as s}from"./index.244dccde.js";import{z as c,C as p,Z as l,F as d,D as m,a1 as S,U as f,a2 as u,M as v}from"./element-plus.bd20adc7.js";var y=i(c({name:"Verse",props:{componentSetting:{type:Object,required:!0}},setup(t){var e;const n=p("");async function o(){try{const t=await fetch("https://v1.jinrishici.com/all.json"),{content:e}=await t.json();n.value=e}catch{}}const a=60*((null==(e=t.componentSetting)?void 0:e.duration)||5)*1e3;let r;l((()=>{o(),r=window.setInterval(o,a)})),d((()=>{window.clearInterval(r)}));const i=m((()=>s(t.componentSetting.position)));return{verse:n,positionCSS:i}}}),[["render",function(t,e,n,o,a,i){return v(),S("div",{class:"wrapper",style:u(r({fontSize:t.componentSetting.textFontSize+"px",color:t.componentSetting.textColor,textShadow:t.componentSetting.textShadow,padding:t.componentSetting.padding+"px",fontFamily:t.componentSetting.fontFamily},t.positionCSS))},f(t.verse),5)}],["__scopeId","data-v-f90c812e"]]);export{y as default};
