const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/error-DwkMBbVk.js","assets/index-3aPu6kFZ.js","assets/index-Cl2OsHdY.css","assets/RenderTopNavBar-RMh88Acv.js","assets/index-BlLpnqnT.js"])))=>i.map(i=>d[i]);
import{g as e,r,j as t,u as n,a,b as o,_ as s,V as c}from"./index-3aPu6kFZ.js";import{g as l,c as i,a as d,R as u,b as m}from"./RenderTopNavBar-RMh88Acv.js";import{r as p,a as h,b as f,M as g,c as E,d as x}from"./Mdtoui-BNcffb9G.js";import"./index-D4GheFr1.js";const _={fetch_fail:{EN:"Didn't fetch text correctly.",ES_LA:"No se obtuvo el texto correctamente.",PT_BR:"Não buscou o texto corretamente.",DE:"Text nicht korrekt abgerufen."},download:{EN:"Download",ES_LA:"Descargar",PT_BR:"Baixar",DE:"Herunterladen"},explore:{EN:"Explore",ES_LA:"Explorar",PT_BR:"Explorar",DE:"Erkunden"},error:{EN:"An error occurred fetching package contents.",ES_LA:"Ocurrió un error al obtener el contenido del paquete.",PT_BR:"Ocorreu um erro ao buscar o conteúdo do pacote.",DE:"Beim Abrufen des Paketinhalts ist ein Fehler aufgetreten."}},b={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APP_VERSION:"5.0.3+1730407790"};function j(e,r){const t=["Google Cloud Platform","Amazon Web Services","Instructure"],n=e=>{const r=e.toLocaleUpperCase(),n=t.findIndex((e=>r.startsWith(e.toLocaleUpperCase())));return-1!==n?n:t.length},a=n(e.path),o=n(r.path);return a!==o?o-a:e.path.localeCompare(r.path)}async function y(r,t,n){const a=n,o=e.owner,s=e.repo,c=[...t.classList].filter((e=>~e.indexOf(r))).toString();if(c){const r=await async function(r,t,n){const a=`${e.api}/repos/${r}/${t}/git/trees/${n}?recursive=1`;try{const e=await fetch(a,{method:"GET",headers:{Accept:"application/vnd.github.v3+json",Authorization:b?.GITHUB_TOKEN?"token undefined":"","X-GitHub-Api-Version":"2022-11-28"}}),r=await e.json();return r?{...r,tree:r.tree.sort(j)}:null}catch(o){o instanceof Error?console.error(`Error: ${o.message}`):console.error(`An unexpected error occurred: ${o}`)}}(o,s,c);if(r){const t=function(r,t,n,a,o){const s=l(_,o),c=r.tree.filter((e=>"tree"===e.type)),i=r.tree.filter((e=>"blob"===e.type)).filter((e=>".gitignore"!==e.path));let d=`<details>\n    <summary>🕵️ ${s.explore}</summary>\r\n\r\n`;for(const[l,u]of c.entries()){d+=`| ${u.path} |\r\n| ---------------- |`;for(const r of i)u?.path&&r?.path?.startsWith(u.path)&&(d+=`\r\n| [${r.path.replace(`${u.path}/`,"")}](${encodeURI(`${e.raw}/${t}/${n}/${a}/${r.path}`)}) |`);l<c.length-1&&(d+="\r\n\r\n")}return d+="</details>",d}(r,o,s,c,a);return t}}return null}const S=e=>{const n=i.c(9),{brand:a,branch:o,l:s}=e,[c,l]=r.useState(null);let d,u,m,_,b;return n[0]!==a||n[1]!==o||n[2]!==s?(d=()=>{y(a.toLowerCase().replace(/\s/g,"-"),o,s).then((e=>l(e))).catch((e=>console.error(e)))},u=[a,o,s],n[0]=a,n[1]=o,n[2]=s,n[3]=d,n[4]=u):(d=n[3],u=n[4]),r.useEffect(d,u),n[5]===Symbol.for("react.memo_cache_sentinel")?(m=[p,h],_=[f],n[5]=m,n[6]=_):(m=n[5],_=n[6]),n[7]!==c?(b=t.jsx(g,{remarkPlugins:m,rehypePlugins:_,allowedElements:E,components:x,children:c}),n[7]=c,n[8]=b):b=n[8],b};function $(){const e=i.c(39),{readme:s,brand:b}=n(),j=a().language;let y,$,P;e[0]!==j?(P=d(j),$=l(_,P),y=P.toUpperCase(),e[0]=j,e[1]=y,e[2]=$,e[3]=P):(y=e[1],$=e[2],P=e[3]);const k=`.markdown .lang { display: none; } .markdown .lang.${y} { display: inherit; }`,w=s,[A,R]=r.useState("Loading..."),[L,N]=r.useState(!1);let B;e[4]===Symbol.for("react.memo_cache_sentinel")?(B=[],e[4]=B):B=e[4];const[D,T]=r.useState(B);let C,v,O,I,U,V;e[5]!==b||e[6]!==w||e[7]!==$.fetch_fail?(C=()=>{document.title=`${b} Compliance Packages`,fetch(w).then((e=>e.ok?e.text():Promise.reject($.fetch_fail))).then((e=>{R(e)})).catch((e=>console.error(e)))},e[5]=b,e[6]=w,e[7]=$.fetch_fail,e[8]=C):C=e[8],r.useEffect(C),e[9]!==A?(v=()=>{A&&(T(Array.from(document.querySelectorAll(".contents"))),N(!0))},O=[A],e[9]=A,e[10]=v,e[11]=O):(v=e[10],O=e[11]),r.useEffect(v,O),e[12]!==L||e[13]!==D||e[14]!==b||e[15]!==P?(I=L&&D?.map((e=>o.createPortal(t.jsx(S,{brand:b,branch:e,l:P}),e))),e[12]=L,e[13]=D,e[14]=b,e[15]=P,e[16]=I):I=e[16],e[17]!==b||e[18]!==P?(U=t.jsx(u,{brand:b,language:P}),e[17]=b,e[18]=P,e[19]=U):U=e[19],e[20]!==k?(V=t.jsx("style",{children:k}),e[20]=k,e[21]=V):V=e[21];const M=`${b.toLowerCase().replace(/\s/g,"-")} markdown`;let W,G,z,H,q,F,K;return e[22]===Symbol.for("react.memo_cache_sentinel")?(W=[p,h],G=[f],e[22]=W,e[23]=G):(W=e[22],G=e[23]),e[24]!==A?(z=t.jsx(g,{remarkPlugins:W,rehypePlugins:G,allowedElements:E,components:x,children:A}),e[24]=A,e[25]=z):z=e[25],e[26]!==M||e[27]!==z?(H=t.jsx(c,{as:"div",className:M,children:z}),e[26]=M,e[27]=z,e[28]=H):H=e[28],e[29]!==V||e[30]!==H?(q=t.jsxs(c,{id:"main",as:"div",padding:"medium medium xx-large",minWidth:"20rem",maxWidth:"59.25rem",margin:"0 auto",children:[V,H]}),e[29]=V,e[30]=H,e[31]=q):q=e[31],e[32]!==P?(F=t.jsx(m,{language:P}),e[32]=P,e[33]=F):F=e[33],e[34]!==I||e[35]!==U||e[36]!==q||e[37]!==F?(K=t.jsxs(t.Fragment,{children:[I,U,q,F]}),e[34]=I,e[35]=U,e[36]=q,e[37]=F,e[38]=K):K=e[38],K}function P(){const e=r.lazy((()=>s((()=>import("./error-DwkMBbVk.js")),__vite__mapDeps([0,1,2,3,4])).then((e=>({default:e.Component})))));return t.jsx(r.Suspense,{fallback:t.jsx("h1",{children:"Error."}),children:t.jsx(e,{})})}$.displayName="Route.MarkdownBrand",P.displayName="Error.MarkdownBrand";export{$ as Component,P as ErrorBoundary};
