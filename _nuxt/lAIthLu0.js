import{a as y,b as g,w as C}from"./5sniLaF8.js";import{u as v}from"./WRire_82.js";import{u as d,w as D,n as H,d as b,_ as x,f as u}from"./C41Zsln6.js";import S from"./CA7L1K0N.js";import q from"./CS7srpOr.js";import"./LNozfWWS.js";import"./BsYmvPZw.js";import"./C1X5nOZI.js";import"./CTFzr-Ly.js";const a=(p,s=y())=>{const e=d(p),f=g();D(()=>d(p),(n=e)=>{if(!s.path||!n)return;const t=Object.assign({},(n==null?void 0:n.head)||{});t.meta=[...t.meta||[]],t.link=[...t.link||[]];const r=t.title||(n==null?void 0:n.title);r&&(t.title=r),f.public.content.host;const c=(t==null?void 0:t.description)||(n==null?void 0:n.description);c&&t.meta.filter(l=>l.name==="description").length===0&&t.meta.push({name:"description",content:c}),t!=null&&t.image||(n==null||n.image),H(()=>v(t))},{immediate:!0})},$=b({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:void 0}},render(p){const{contentHead:s}=g().public.content,e=x(),{tag:f,excerpt:m,path:n,query:t,head:r}=p,c=r===void 0?s:r,l={...t||{},path:n||(t==null?void 0:t.path)||C(y().path),find:"one"},_=(o,i)=>u("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:o,data:i},null,2));return u(q,l,{default:e!=null&&e.default?({data:o,refresh:i,isPartial:w})=>{var h;return c&&a(o),(h=e.default)==null?void 0:h.call(e,{doc:o,refresh:i,isPartial:w,excerpt:m,...this.$attrs})}:({data:o})=>(c&&a(o),u(S,{value:o,excerpt:m,tag:f,...this.$attrs},{empty:i=>e!=null&&e.empty?e.empty(i):_("default",o)})),empty:o=>{var i;return((i=e==null?void 0:e.empty)==null?void 0:i.call(e,o))||u("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":o=>{var i;return((i=e==null?void 0:e["not-found"])==null?void 0:i.call(e,o))||u("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),j=$,Q=j;export{Q as default};