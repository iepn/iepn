import{_ as f}from"./DAXIHay0.js";import{_ as p,u as _,p as u}from"./Bg2Bbrsw.js";import{o as r,q as d,W as v,x as g,y as b,L as m,P as k,J as e,D as y,X as w,U as x,V as I,m as B,c as D,u as A,C,Y as S}from"./BRw8ksqf.js";import{u as $,q}from"./MvOvHNJr.js";import{u as V}from"./DFtIOxM4.js";import"./BYT4g-ne.js";import"./BiDfpeFW.js";const h=t=>(x("data-v-04130847"),t=t(),I(),t),M={class:"note-book-box-desc"},N=h(()=>e("span",null,"in reading",-1)),T=h(()=>e("div",{class:"note-book-state"},null,-1)),z={__name:"skBookImg",props:{sortedData:{type:Array,default:()=>[]}},setup(t){return _(),(o,i)=>{const a=f;return r(!0),d(w,null,v(t.sortedData,(s,n)=>(r(),d("div",{class:g(["note-book-box",{"scale-effect":n%3!==1}]),style:b({"background-image":`url('/img/book/${s.img}.png')`,"background-repeat":"no-repeat"})},[m(a,{to:s._path},{default:k(()=>[e("div",M,[N,e("p",null,y(s.title),1)]),T]),_:2},1032,["to"])],6))),256)}}},H=p(z,[["__scopeId","data-v-04130847"]]),L=u("/icon/logo.svg"),R=u("/icon/info-tip.svg"),E={class:"note-layout"},Q=S('<div class="note-des" data-v-3c437bf3><a href="/" data-v-3c437bf3><img src="'+L+'" alt="logo" class="logo" data-v-3c437bf3></a><p class="title" data-v-3c437bf3> the My note<br data-v-3c437bf3> Collector </p><div class="title-hr" data-v-3c437bf3></div><div class="title-desc-about" data-v-3c437bf3><p data-v-3c437bf3> A few years ago, I was very passionate about applied technology. However, now I want to delve into the underlying principles and fundamentals as they form the foundation upon which new technologies are built. These principles remain relevant and enduring despite the rapid advancements in technology. </p><div class="title-desc-tip" data-v-3c437bf3><img src="'+R+'" data-v-3c437bf3> After reading this information, I will organize my knowledge into shorthand notes, indicating their purpose and even their application scenarios. In the future, when needed, I will conduct in-depth learning. </div></div></div>',1),U={class:"note-book"},Y={__name:"book",async setup(t){let o,i;const{data:a}=([o,i]=B(()=>$("equalBook",()=>q("book/").find())),o=await o,i(),o);_(),V({title:"Bookshelf - RHYME.Q",description:"Github + Hackerone + Behance ÷ Researchgate"}),a.value&&a.value.sort((n,l)=>{const c=new Date(n.time).getTime();return new Date(l.time).getTime()-c});const s=D(()=>a.value);return(n,l)=>{const c=H;return r(),d("main",null,[e("div",E,[Q,e("div",U,[m(c,{"sorted-data":A(s)},null,8,["sorted-data"]),C('"')])])])}}},O=p(Y,[["__scopeId","data-v-3c437bf3"]]);export{O as default};