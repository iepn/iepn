import{z as m,_ as f}from"./CaYtzpzZ.js";import{d as I,ad as d,c as a,o as x,l as v,O as _}from"./CuneEKG8.js";import{r as S}from"./CvPl5tTm.js";const z=I({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(u){d(e=>({77575554:p.value}));const t=m(),o=u,l=a(()=>{var e,n;return(n=(e=t.nuxtIcon)==null?void 0:e.aliases)!=null&&n[o.name]?t.nuxtIcon.aliases[o.name]:o.name}),c=a(()=>S(l.value)),p=a(()=>{var s,r;const e=(r=(s=t.nuxtIcon)==null?void 0:s.iconifyApiOptions)==null?void 0:r.url;if(e)try{new URL(e)}catch{console.warn("Nuxt IconCSS: Invalid custom Iconify API URL");return}return`url('${e||"https://api.iconify.design"}/${c.value.prefix}/${c.value.name}.svg')`}),i=a(()=>{var n,s,r;if(!o.size&&typeof((n=t.nuxtIcon)==null?void 0:n.size)=="boolean"&&!((s=t.nuxtIcon)!=null&&s.size))return;const e=o.size||((r=t.nuxtIcon)==null?void 0:r.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,n)=>(x(),v("span",{style:_({width:i.value,height:i.value})},null,4))}}),U=f(z,[["__scopeId","data-v-6e4545fa"]]);export{U as default};
