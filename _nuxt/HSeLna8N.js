import{_ as x}from"./Co0jhwt8.js";import{_ as A}from"./Bk9fHmtM.js";import{_ as E}from"./B-ectB69.js";import{u as N}from"./DeTspD7U.js";import{u as R,q as T}from"./CWDbyWVO.js";import{d as V,a as $,m as G,c as C,o,q as a,Q as m,R as p,u as d,U as I,F as s,y as D,D as w,G as u,L}from"./jt78mTRn.js";import{_ as M}from"./B8c8ttej.js";import"./DoNO5XI9.js";import"./D2eDiRN5.js";const Q={class:"layout"},S={class:"pagination-layout"},F={class:"pagination"},H={class:"pages-nums"},z={class:"page-num"},U=["onClick"],g=5,X=V({__name:"dev",async setup(Y){var f,k;let c,y;const t=$(1);N({title:"Develop - RHYME.Q",description:"Github + Hackerone + Behance ÷ Researchgate"});const{data:r}=([c,y]=G(()=>R("equal",()=>T("dev/").find())),c=await c,y(),c);(f=r.value)==null||f.sort((l,n)=>{const i=new Date(l.release_date).getTime();return new Date(n.release_date).getTime()-i});const v=Math.ceil(((k=r.value)==null?void 0:k.length)/g),_=l=>{t.value=l,window.scrollTo({top:0,behavior:"smooth"})},P=C(()=>{var i;const l=(t.value-1)*g,n=t.value*g;return((i=r.value)==null?void 0:i.slice(l,n))||[]}),B=C(()=>r.value||[]);return(l,n)=>{const i=x,h=A,b=E,q=x;return o(),a("main",Q,[(o(!0),a(m,null,p(B.value,e=>(o(),a("div",{key:e.id,style:{display:"none"}},[u(i,{to:e._path},null,8,["to"])]))),128)),d(r)?(o(!0),a(m,{key:0},p(P.value,e=>(o(),a("div",{class:"content",key:e.id},[u(q,{to:e._path},{default:L(()=>[u(h,{img:e.img,info:e.info,type:e.types},null,8,["img","info","type"]),u(b,{class:"title",title:e.title,time:e.time,client:e.client},null,8,["title","time","client"])]),_:2},1032,["to"])]))),128)):I("",!0),s("div",S,[s("div",F,[s("p",{class:"pages-nums",onClick:n[0]||(n[0]=e=>_(t.value-1)),style:D({display:t.value===1?"none":"inline-block"})}," PREV ",4),s("p",{onClick:n[1]||(n[1]=e=>_(t.value+1)),class:"pages-nums",style:D([{color:"blue"},{display:t.value===d(v)?"none":"inline-block"}])}," NEXT ",4),s("p",H,"PAGE: "+w(t.value),1)]),s("div",z,[(o(!0),a(m,null,p(d(v),e=>(o(),a("div",{key:e},[s("p",{class:"page-numcolor",onClick:j=>_(e)},w(e),9,U)]))),128))])])])}}}),ae=M(X,[["__scopeId","data-v-1c54155e"]]);export{ae as default};