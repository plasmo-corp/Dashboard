var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(t,n,o)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,a=(e,a)=>{for(var i in a||(a={}))n.call(a,i)&&r(e,i,a[i]);if(t)for(var i of t(a))o.call(a,i)&&r(e,i,a[i]);return e};"undefined"!=typeof require&&require;import{m as i}from"./index.27683ae0.js";import{d as s,b as p,B as c,o as l,c as d,e as m,E as u,u as f,H as S}from"./element-plus.abf3c969.js";var v=s({name:"Verse",props:{componentSetting:{type:Object,required:!0}},setup(e){var t;const n=p("");async function o(){try{const e=await fetch("https://v1.jinrishici.com/all.json"),{content:t}=await e.json();n.value=t}catch{}}const r=60*((null==(t=e.componentSetting)?void 0:t.duration)||5)*1e3;let a;c((()=>{o(),a=window.setInterval(o,r)})),l((()=>{window.clearInterval(a)}));const s=d((()=>i(e.componentSetting.position)));return{verse:n,positionCSS:s}}});v.render=function(e,t,n,o,r,i){return m(),u("div",{class:"wrapper",style:S(a({fontSize:e.componentSetting.textFontSize+"px",color:e.componentSetting.textColor,textShadow:e.componentSetting.textShadow,padding:e.componentSetting.padding+"px",fontFamily:e.componentSetting.fontFamily},e.positionCSS))},f(e.verse),5)},v.__scopeId="data-v-f90c812e";export default v;
