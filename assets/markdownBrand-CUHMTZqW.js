const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/error-Q-c7IIrg.js","assets/react-BV2cBUoD.js","assets/modules-CNyw1_Ie.js","assets/instructure-ui-BKmH9FUF.js","assets/instructure-utils-Cd2k0YRs.js","assets/RenderTopNavBar-CjIOLupG.js","assets/index-D4AHZi62.js","assets/index-TCIaF8cn.css"])))=>i.map(i=>d[i]);
import{_ as e,V as r}from"./instructure-ui-BKmH9FUF.js";import{s as t,r as n,n as o,M as a,u as s,t as c,v as l}from"./react-BV2cBUoD.js";import{g as i}from"./index-D4AHZi62.js";import{g as u,a as d,R as m,b as p}from"./RenderTopNavBar-CjIOLupG.js";import{a as h,M as f}from"./Mdtoui-CCbmePE7.js";import{a$ as g,b0 as E,b1 as x}from"./modules-CNyw1_Ie.js";import"./instructure-utils-Cd2k0YRs.js";const _={fetch_fail:{EN:"Didn't fetch text correctly.",ES_LA:"No se obtuvo el texto correctamente.",PT_BR:"Não buscou o texto corretamente.",DE:"Text nicht korrekt abgerufen."},download:{EN:"Download",ES_LA:"Descargar",PT_BR:"Baixar",DE:"Herunterladen"},explore:{EN:"Explore",ES_LA:"Explorar",PT_BR:"Explorar",DE:"Erkunden"},error:{EN:"An error occurred fetching package contents.",ES_LA:"Ocurrió un error al obtener el contenido del paquete.",PT_BR:"Ocorreu um erro ao buscar o conteúdo do pacote.",DE:"Beim Abrufen des Paketinhalts ist ein Fehler aufgetreten."}},b={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APP_VERSION:"5.0.2+1726001035"};function j(e,r){const t=e=>{const r=e.toLocaleUpperCase(),t=n.findIndex((e=>r.startsWith(e.toLocaleUpperCase())));return-1!==t?t:n.length},n=["Google Cloud Platform","Amazon Web Services","Instructure"],o=t(e.path),a=t(r.path);return o!==a?a-o:e.path.localeCompare(r.path)}async function y(e,r,t){const n=t,o=i.owner,a=i.repo,s=[...r.classList].filter((r=>~r.indexOf(e))).toString();if(s){const e=await async function(e,r,t){const n=`${i.api}/repos/${e}/${r}/git/trees/${t}?recursive=1`;try{const e=await fetch(n,{method:"GET",headers:{Accept:"application/vnd.github.v3+json",Authorization:b?.GITHUB_TOKEN?"token undefined":"","X-GitHub-Api-Version":"2022-11-28"}}),r=await e.json();return r?{...r,tree:r.tree.sort(j)}:null}catch(o){o instanceof Error?console.error(`Error: ${o.message}`):console.error(`An unexpected error occurred: ${o}`)}}(o,a,s);if(e){const r=function(e,r,t,n,o){const a=u(_,o),s=e.tree.filter((e=>"tree"===e.type)),c=e.tree.filter((e=>"blob"===e.type)).filter((e=>".gitignore"!==e.path));let l=`<details>\n    <summary>🕵️ ${a.explore}</summary>\r\n\r\n`;for(const[u,d]of s.entries()){l+=`| ${d.path} |\r\n| ---------------- |`;for(const e of c)d?.path&&e?.path?.startsWith(d.path)&&(l+=`\r\n| [${e.path.replace(`${d.path}/`,"")}](${encodeURI(`${i.raw}/${r}/${t}/${n}/${e.path}`)}) |`);u<s.length-1&&(l+="\r\n\r\n")}return l+="</details>",l}(e,o,a,s,n);return r}}return null}const $=e=>{const r=t.c(9),{brand:s,branch:c,l:l}=e,[i,u]=n.useState(null);let d,m,p,_,b;return r[0]!==s||r[1]!==c||r[2]!==l?(d=()=>{y(s.toLowerCase().replace(/\s/g,"-"),c,l).then((e=>u(e))).catch((e=>console.error(e)))},m=[s,c,l],r[0]=s,r[1]=c,r[2]=l,r[3]=d,r[4]=m):(d=r[3],m=r[4]),n.useEffect(d,m),r[5]===Symbol.for("react.memo_cache_sentinel")?(p=[g,E],_=[x],r[5]=p,r[6]=_):(p=r[5],_=r[6]),r[7]!==i?(b=o.jsx(a,{remarkPlugins:p,rehypePlugins:_,allowedElements:h,components:f,children:i}),r[7]=i,r[8]=b):b=r[8],b};function S(){const e=t.c(39),{readme:i,brand:b}=s(),j=c().language;let y,S,P;e[0]!==j?(P=d(j),S=u(_,P),y=P.toUpperCase(),e[0]=j,e[1]=y,e[2]=S,e[3]=P):(y=e[1],S=e[2],P=e[3]);const k=`.markdown .lang { display: none; } .markdown .lang.${y} { display: inherit; }`,w=i,[A,R]=n.useState("Loading..."),[L,N]=n.useState(!1);let B;e[4]===Symbol.for("react.memo_cache_sentinel")?(B=[],e[4]=B):B=e[4];const[D,T]=n.useState(B);let v,C,O,I,M,U;e[5]!==b||e[6]!==w||e[7]!==S.fetch_fail?(v=()=>{document.title=`${b} Compliance Packages`,fetch(w).then((e=>e.ok?e.text():Promise.reject(S.fetch_fail))).then((e=>{R(e)})).catch((e=>console.error(e)))},e[5]=b,e[6]=w,e[7]=S.fetch_fail,e[8]=v):v=e[8],n.useEffect(v),e[9]!==A?(C=()=>{A&&(T(Array.from(document.querySelectorAll(".contents"))),N(!0))},O=[A],e[9]=A,e[10]=C,e[11]=O):(C=e[10],O=e[11]),n.useEffect(C,O),e[12]!==L||e[13]!==D||e[14]!==b||e[15]!==P?(I=L&&D?.map((e=>l.createPortal(o.jsx($,{brand:b,branch:e,l:P}),e))),e[12]=L,e[13]=D,e[14]=b,e[15]=P,e[16]=I):I=e[16],e[17]!==b||e[18]!==P?(M=o.jsx(m,{brand:b,language:P}),e[17]=b,e[18]=P,e[19]=M):M=e[19],e[20]!==k?(U=o.jsx("style",{children:k}),e[20]=k,e[21]=U):U=e[21];const V=`${b.toLowerCase().replace(/\s/g,"-")} markdown`;let W,G,z,H,q,F,K;return e[22]===Symbol.for("react.memo_cache_sentinel")?(W=[g,E],G=[x],e[22]=W,e[23]=G):(W=e[22],G=e[23]),e[24]!==A?(z=o.jsx(a,{remarkPlugins:W,rehypePlugins:G,allowedElements:h,components:f,children:A}),e[24]=A,e[25]=z):z=e[25],e[26]!==V||e[27]!==z?(H=o.jsx(r,{as:"div",className:V,children:z}),e[26]=V,e[27]=z,e[28]=H):H=e[28],e[29]!==U||e[30]!==H?(q=o.jsxs(r,{id:"main",as:"div",padding:"medium medium xx-large",minWidth:"20rem",maxWidth:"59.25rem",margin:"0 auto",children:[U,H]}),e[29]=U,e[30]=H,e[31]=q):q=e[31],e[32]!==P?(F=o.jsx(p,{language:P}),e[32]=P,e[33]=F):F=e[33],e[34]!==I||e[35]!==M||e[36]!==q||e[37]!==F?(K=o.jsxs(o.Fragment,{children:[I,M,q,F]}),e[34]=I,e[35]=M,e[36]=q,e[37]=F,e[38]=K):K=e[38],K}function P(){const r=n.lazy((()=>e((()=>import("./error-Q-c7IIrg.js")),__vite__mapDeps([0,1,2,3,4,5,6,7])).then((e=>({default:e.Component})))));return o.jsx(n.Suspense,{fallback:o.jsx("h1",{children:"Error."}),children:o.jsx(r,{})})}S.displayName="Route.MarkdownBrand",P.displayName="Error.MarkdownBrand";export{S as Component,P as ErrorBoundary};