import{d,c as u,o as _,q as f,F as s,D as c,u as h,O as y,P as g}from"./d9yBg8CO.js";import{_ as b}from"./BhqHW6Yw.js";const S=e=>(y("data-v-8392badd"),e=e(),g(),e),v={class:"title"},x={class:"time"},D={class:"client"},N=S(()=>s("span",null,"clientele",-1)),I=d({__name:"pageTitle",props:{title:{type:String},time:{type:String},client:{type:String}},setup(e){const r=["January","February","March","April","May","June","July","August","September","October","November","December"],i=e,l=u(()=>{if(i.time){const n=i.time.split(".").map(Number),o=new Date(n[0],n[1]-1,n[2]),p=r[o.getMonth()],m=o.getFullYear(),t=o.getDate();let a="th";return t===1||t===21||t===31?a="st":t===2||t===22?a="nd":(t===3||t===23)&&(a="rd"),`${p} ${t}${a} ${m}`}return""});return(n,o)=>(_(),f("main",null,[s("div",v,[s("p",null,c(e.title),1),s("span",x,c(h(l)),1)]),s("div",D,[N,s("p",null,c(e.client),1)])]))}}),B=b(I,[["__scopeId","data-v-8392badd"]]);export{B as _};
