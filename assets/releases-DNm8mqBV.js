const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/error-LDYVdH-U.js","assets/index-Co1on5ja.js","assets/index-TCIaF8cn.css","assets/RenderTopNavBar-BjY6S8Vl.js","assets/index-Dh55QiP4.js"])))=>i.map(i=>d[i]);
import{g as f,a as k,r as x,j as t,_ as A,V as w}from"./index-Co1on5ja.js";import{c as L,a as T,g as V,H as D,R as N,L as I,b as v}from"./RenderTopNavBar-BjY6S8Vl.js";import{r as B,a as G,b as C,M as O,c as H,d as M}from"./Mdtoui-BnFmcABV.js";import{I as U}from"./IconRssLine-CYM7kQpO.js";import"./index-DUk1PrHv.js";const W={releases:{EN:"Releases",ES_LA:"Versiones",PT_BR:"Lançamentos",DE:"Veröffentlichungen"},loading:{EN:"Loading...",ES_LA:"Cargando...",PT_BR:"Carregando...",DE:"Wird geladen..."},subscribe:{EN:"Subscribe",ES_LA:"Suscríbete",PT_BR:"Inscreva-se",DE:"Abonnieren Sie"}},$={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APP_VERSION:"5.0.1+1724690382"};async function z(e,r){const a=`${f.api}/repos/${e}/${r}/releases`;try{const n=await(await fetch(a,{method:"GET",headers:{Accept:"application/vnd.github.v3+json",Authorization:$!=null&&$.VITE_GITHUB_TOKEN?"token undefined":"","X-GitHub-Api-Version":"2022-11-28"}})).json();return n.length>3?`${n.slice(0,3).map(S).join(`\r
\r
`).slice(0,-3)}---\r
\r
[Older Releases](https://github.com/thedannywahl/instructure-security-package/releases)`:n.map(S).join(`\r
\r
`).slice(0,-3)||null}catch(s){return s instanceof Error?console.error(`Error: ${s.message}`):console.error(`An unexpected error occurred: ${s}`),null}}function S(e){var a;let r=((a=e==null?void 0:e.author)==null?void 0:a.login)||"";return r==="gdenne"?r=" -- Gary Denne":r==="thedannywahl"&&(r=" -- Danny Wahl"),`
## ${e.name}\r

> ${e.tag_name}${r}\r


${e.body}\r

---`}async function F(){const e=f.owner,r=f.repo;return z(e,r)}function K(){const e=L.c(32),r=k().language;let a,s,n,l;e[0]!==r?(n=T(r),s=V(W,n),l=`https://github.com/${f.owner}/${f.repo}/releases.atom`,a=n.toUpperCase(),e[0]=r,e[1]=a,e[2]=s,e[3]=n,e[4]=l):(a=e[1],s=e[2],n=e[3],l=e[4]);const j=`.markdown .lang { display: none; } .markdown .lang.${a} { display: inherit; }`,[y,P]=x.useState(`${s.loading}`);let p;e[5]===Symbol.for("react.memo_cache_sentinel")?(p=()=>{F().then(_=>{P(_)}).catch(_=>console.error(_))},e[5]=p):p=e[5],x.useEffect(p);let o;e[6]!==n?(o=t.jsx(N,{language:n}),e[6]=n,e[7]=o):o=e[7];let i;e[8]!==s.subscribe?(i=t.jsx(U,{size:"small",color:"warning",title:s.subscribe}),e[8]=s.subscribe,e[9]=i):i=e[9];let c;e[10]!==l||e[11]!==i?(c=t.jsx(I,{href:l,children:i}),e[10]=l,e[11]=i,e[12]=c):c=e[12];let d;e[13]!==c||e[14]!==s.releases?(d=t.jsxs(D,{level:"h1",children:[c," ",s.releases]}),e[13]=c,e[14]=s.releases,e[15]=d):d=e[15];let m;e[16]!==j?(m=t.jsx("style",{children:j}),e[16]=j,e[17]=m):m=e[17];let E,b;e[18]===Symbol.for("react.memo_cache_sentinel")?(E=[B,G],b=[C],e[18]=E,e[19]=b):(E=e[18],b=e[19]);let u;e[20]!==y?(u=t.jsx(w,{as:"div",className:"markdown",children:t.jsx(O,{remarkPlugins:E,rehypePlugins:b,allowedElements:H,components:M,children:y})}),e[20]=y,e[21]=u):u=e[21];let g;e[22]!==d||e[23]!==m||e[24]!==u?(g=t.jsxs(w,{id:"main",as:"div",padding:"medium medium xx-large",minWidth:"20rem",maxWidth:"59.25rem",margin:"0 auto",children:[d,m,u]}),e[22]=d,e[23]=m,e[24]=u,e[25]=g):g=e[25];let h;e[26]!==n?(h=t.jsx(v,{language:n}),e[26]=n,e[27]=h):h=e[27];let R;return e[28]!==o||e[29]!==g||e[30]!==h?(R=t.jsxs(t.Fragment,{children:[o,g,h]}),e[28]=o,e[29]=g,e[30]=h,e[31]=R):R=e[31],R}K.displayName="Route.Releases";function X(){const e=x.lazy(()=>A(()=>import("./error-LDYVdH-U.js"),__vite__mapDeps([0,1,2,3,4])).then(r=>({default:r.Component})));return t.jsx(x.Suspense,{fallback:t.jsx("h1",{children:"Error."}),children:t.jsx(e,{})})}X.displayName="Error.Releases";export{K as Component,X as ErrorBoundary};
