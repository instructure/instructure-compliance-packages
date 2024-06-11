const __vite__fileDeps=["assets/error-DsOB9h1c.js","assets/index-Fea7eiiE.js","assets/index-DhWXBJXR.css","assets/RenderTopNavBar-CukS4u8D.js","assets/index-BZ9CQ3_D.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{g as C,r as g,j as u,u as F,a as H,b as q,_ as K,V as D}from"./index-Fea7eiiE.js";import{g as N,c as v,a as J,R as Q,b as X}from"./RenderTopNavBar-CukS4u8D.js";import{r as I,a as O,b as U,M as G,c as V,m as M}from"./mdtoui-Gka2MYeA.js";import"./index-D71xoTrg.js";const W={fetch_fail:{EN:"Didn't fetch text correctly.",ES_LA:"No se obtuvo el texto correctamente.",PT_BR:"Não buscou o texto corretamente.",DE:"Text nicht korrekt abgerufen."},download:{EN:"Download",ES_LA:"Descargar",PT_BR:"Baixar",DE:"Herunterladen"},explore:{EN:"Explore",ES_LA:"Explorar",PT_BR:"Explorar",DE:"Erkunden"},error:{EN:"An error occurred fetching package contents.",ES_LA:"Ocurrió un error al obtener el contenido del paquete.",PT_BR:"Ocorreu um erro ao buscar o conteúdo do pacote.",DE:"Beim Abrufen des Paketinhalts ist ein Fehler aufgetreten."}};var T={VITE_APP_VERSION:"4.1.0+1718118865",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};async function Y(e,t,r){const c=`${C.api}/repos/${e}/${t}/git/trees/${r}?recursive=1`;try{const s=await(await fetch(c,{method:"GET",headers:{Accept:"application/vnd.github.v3+json",Authorization:T!=null&&T.GITHUB_TOKEN?`token ${T.GITHUB_TOKEN}`:""}})).json();return{...s,tree:s.tree.sort(Z)}}catch(n){n instanceof Error?console.error(`Error: ${n.message}`):console.error(`An unexpected error occurred: ${n}`)}}function Z(e,t){const r=o=>{const l=o.toLocaleUpperCase(),m=c.findIndex(a=>l.startsWith(a.toLocaleUpperCase()));return m!==-1?m:c.length},c=["Amazon Web Services","Instructure"],n=r(e.path),s=r(t.path);return n!==s?s-n:e.path.localeCompare(t.path)}function ee(e,t,r,c,n){var p;const o=N(W,n),l=e.tree.filter(i=>i.type==="tree"),m=e.tree.filter(i=>i.type==="blob").filter(i=>i.path!==".gitignore");let a=`<details>
    <summary>🕵️ ${o.explore}</summary>\r
\r
`;for(const[i,f]of l.entries()){a+=`| ${f.path} |\r
| ---------------- |`;for(const d of m)f!=null&&f.path&&((p=d==null?void 0:d.path)!=null&&p.startsWith(f.path))&&(a+=`\r
| [${d.path.replace(`${f.path}/`,"")}](${encodeURI(`${C.raw}/${t}/${r}/${c}/${d.path}`)}) |`);i<l.length-1&&(a+=`\r
\r
`)}return a+="</details>",a}async function te(e,t,r){const c=r,n=C.owner,s=C.repo,o=[...t.classList].filter(l=>~l.indexOf(e)).toString();if(o){const l=await Y(n,s,o);if(l)return ee(l,n,s,o,c)}return null}const re=e=>{const t=v.c(9),{brand:r,branch:c,l:n}=e,[s,o]=g.useState(null);let l,m;t[0]!==r||t[1]!==c||t[2]!==n?(l=()=>{te(r.toLowerCase(),c,n).then(f=>o(f)).catch(f=>console.error(f))},m=[r,c,n],t[0]=r,t[1]=c,t[2]=n,t[3]=l,t[4]=m):(l=t[3],m=t[4]),g.useEffect(l,m);let a;t[5]===Symbol.for("react.memo_cache_sentinel")?(a=[I,O],t[5]=a):a=t[5];let p;t[6]===Symbol.for("react.memo_cache_sentinel")?(p=[U],t[6]=p):p=t[6];let i;return t[7]!==s?(i=u.jsx(G,{remarkPlugins:a,rehypePlugins:p,allowedElements:V,components:M,children:s}),t[7]=s,t[8]=i):i=t[8],i};function oe(){const e=v.c(39),{readme:t,brand:r}=F(),c=H().language;let n,s,o;e[0]!==c?(o=J(c),s=N(W,o),n=o.toUpperCase(),e[0]=c,e[1]=n,e[2]=s,e[3]=o):(n=e[1],s=e[2],o=e[3]);const l=`.markdown .lang { display: none; } .markdown .lang.${n} { display: inherit; }`,m=t,[a,p]=g.useState("Loading..."),[i,f]=g.useState(!1);let d;e[4]===Symbol.for("react.memo_cache_sentinel")?(d=[],e[4]=d):d=e[4];const[$,z]=g.useState(d);let R;e[5]!==r||e[6]!==m||e[7]!==s.fetch_fail?(R=()=>{document.title=`${r} Compliance Packages`,fetch(m).then(h=>h.ok?h.text():Promise.reject(s.fetch_fail)).then(h=>{p(h)}).catch(h=>console.error(h))},e[5]=r,e[6]=m,e[7]=s.fetch_fail,e[8]=R):R=e[8],g.useEffect(R);let k,w;e[9]!==a?(k=()=>{a&&(z(Array.from(document.querySelectorAll(".contents"))),f(!0))},w=[a],e[9]=a,e[10]=k,e[11]=w):(k=e[10],w=e[11]),g.useEffect(k,w);let E;e[12]!==i||e[13]!==$||e[14]!==r||e[15]!==o?(E=i&&($==null?void 0:$.map(h=>q.createPortal(u.jsx(re,{brand:r,branch:h,l:o}),h))),e[12]=i,e[13]=$,e[14]=r,e[15]=o,e[16]=E):E=e[16];let x;e[17]!==r||e[18]!==o?(x=u.jsx(Q,{brand:r,language:o}),e[17]=r,e[18]=o,e[19]=x):x=e[19];let _;e[20]!==l?(_=u.jsx("style",{children:l}),e[20]=l,e[21]=_):_=e[21];const L=`${r.toLowerCase()} markdown`;let j;e[22]===Symbol.for("react.memo_cache_sentinel")?(j=[I,O],e[22]=j):j=e[22];let A;e[23]===Symbol.for("react.memo_cache_sentinel")?(A=[U],e[23]=A):A=e[23];let y;e[24]!==a?(y=u.jsx(G,{remarkPlugins:j,rehypePlugins:A,allowedElements:V,components:M,children:a}),e[24]=a,e[25]=y):y=e[25];let b;e[26]!==L||e[27]!==y?(b=u.jsx(D,{as:"div",className:L,children:y}),e[26]=L,e[27]=y,e[28]=b):b=e[28];let S;e[29]!==_||e[30]!==b?(S=u.jsxs(D,{id:"main",as:"div",padding:"medium medium xx-large",minWidth:"20rem",maxWidth:"59.25rem",margin:"0 auto",children:[_,b]}),e[29]=_,e[30]=b,e[31]=S):S=e[31];let P;e[32]!==o?(P=u.jsx(X,{language:o}),e[32]=o,e[33]=P):P=e[33];let B;return e[34]!==E||e[35]!==x||e[36]!==S||e[37]!==P?(B=u.jsxs(u.Fragment,{children:[E,x,S,P]}),e[34]=E,e[35]=x,e[36]=S,e[37]=P,e[38]=B):B=e[38],B}oe.displayName="Route.MarkdownBrand";function ne(){const e=g.lazy(()=>K(()=>import("./error-DsOB9h1c.js"),__vite__mapDeps([0,1,2,3,4])).then(t=>({default:t.Component})));return u.jsx(g.Suspense,{fallback:u.jsx("h1",{children:"Error."}),children:u.jsx(e,{})})}ne.displayName="Error.MarkdownBrand";export{oe as Component,ne as ErrorBoundary};