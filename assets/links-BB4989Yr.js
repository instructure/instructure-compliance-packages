const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/error-LDYVdH-U.js","assets/index-Co1on5ja.js","assets/index-TCIaF8cn.css","assets/RenderTopNavBar-BjY6S8Vl.js","assets/index-Dh55QiP4.js"])))=>i.map(i=>d[i]);
import{a as ve,r as d,d as ee,e as ue,L as ge,j as t,_ as Ue,g as De,V as le}from"./index-Co1on5ja.js";import{c as Ne,a as Fe,g as Ie,H as fe,T as pe,d as He,e as me,R as $e,L as ze,f as Ke,b as Ve}from"./RenderTopNavBar-BjY6S8Vl.js";import{B as We,R as he,a as k,I as Me,T as qe,b as Oe}from"./index-DyahzNCb.js";import{T as Qe,F as Ze,a as p}from"./index-DUk1PrHv.js";import{I as xe,a as Ge}from"./index-BAR0q47n.js";const Je={header:{EN:"Redirect Links",ES_LA:"Enlaces de Redirección",PT_BR:"Links de Redirecionamento",DE:"Weiterleitungslinks"},description:{EN:"This page provides a collection of shortened URLs for use in RFP responses. Each row has a short URL and the original URL. Click on the copy icon and the short URL will be added to your clipboard.",ES_LA:"Esta página proporciona una colección de URL abreviadas para usar en las respuestas a RFP. Cada fila tiene una URL corta y la URL original. Haga clic en la copia y la URL corta se agregará a su portapapeles.",PT_BR:"Esta página fornece uma coleção de URLs abreviados para uso em respostas de RFP. Cada linha possui um URL curto e o URL original. Clique na cópia ícone e o URL curto serão adicionados à sua área de transferência.",DE:"Diese Seite bietet eine Sammlung verkürzter URLs zur Verwendung in RFP-Antworten. Jede Zeile enthält eine Kurz-URL und die Original-URL. Klicken Sie auf die Kopie-Symbol und die Kurz-URL wird Ihrer Zwischenablage hinzugefügt."},filters:{EN:"Filters",ES_LA:"Filtros",PT_BR:"Filtros",DE:"filter"},toggleShow:{EN:"Show filters",ES_LA:"Mostrar filtros",PT_BR:"Mostrar filtros",DE:"Filter anzeigen"},toggleHide:{EN:"Hide filters",ES_LA:"Ocultar filtros",PT_BR:"Ocultar filtros",DE:"Filter ausblenden"},search:{EN:"Search",ES_LA:"Buscar",PT_BR:"Procurar",DE:"Suche"},clearSearch:{EN:"Clear search",ES_LA:"Borrar búsqueda",PT_BR:"Limpar pesquisa",DE:"Suche löschen"},placeholder:{EN:"community",ES_LA:"comunidad",PT_BR:"comunidade",DE:"Gemeinschaft"},brands:{EN:"Brands",ES_LA:"Marcas",PT_BR:"Marcas",DE:"Marken"},products:{EN:"Products",ES_LA:"Productos",PT_BR:"Produtos",DE:"Produkte"},language:{EN:"Language",ES_LA:"Idioma",PT_BR:"Idioma",DE:"Sprache"},title:{EN:"Title",ES_LA:"Título",PT_BR:"Título",DE:"Titel"},link:{EN:"Link",ES_LA:"Enlace",PT_BR:"Link",DE:"Link"},copy:{EN:"Copy",ES_LA:"Copiar",PT_BR:"Copiar",DE:"Kopieren"},copy_url:{EN:"Copy URL to clipboard",ES_LA:"Copiar URL al portapapeles",PT_BR:"Copiar URL para a área de transferência",DE:"Kopieren Sie die URL in die Zwischenablage"},copy_error:{EN:"Error copying to clipboard",ES_LA:"Error al copiar al portapapeles",PT_BR:"Erro ao copiar para a área de transferência",DE:"Fehler beim Kopieren in die Zwischenablage"}};function Xe(){const e=Ne.c(94),w=ve().language;let F,o;e[0]!==w?(o=Fe(w),F=Ie(Je,o),e[0]=w,e[1]=F,e[2]=o):(F=e[1],o=e[2]);const l=F;let I;e[3]===Symbol.for("react.memo_cache_sentinel")?(I=De.url.replace("https://",""),e[3]=I):I=e[3];const te=I;let H;e[4]!==l.toggleShow?(H={expanded:!1,text:l.toggleShow},e[4]=l.toggleShow,e[5]=H):H=e[5];const[i,Ee]=d.useState(H);let $;e[6]!==i.expanded||e[7]!==l.toggleShow||e[8]!==l.toggleHide?($=()=>{const r=i.expanded?l.toggleShow:l.toggleHide;Ee({expanded:!i.expanded,text:r})},e[6]=i.expanded,e[7]=l.toggleShow,e[8]=l.toggleHide,e[9]=$):$=e[9];const h=$,[u,Le]=d.useState(""),g=(r,a)=>{Le(a),q(se,a,ne,A)};let z;e[10]!==g?(z=r=>{r.stopPropagation(),g(r,"")},e[10]=g,e[11]=z):z=e[11];const ae=z;let K;e[12]!==u.search.length||e[13]!==l.clearSearch||e[14]!==ae?(K=()=>u.search.length?t.jsx(xe,{type:"button",size:"small",withBackground:!1,withBorder:!1,screenReaderLabel:l.clearSearch,onClick:ae,children:t.jsx(Me,{})}):null,e[12]=u.search.length,e[13]=l.clearSearch,e[14]=ae,e[15]=K):K=e[15];const re=K;let V;e[16]!==o?(V=[o],e[16]=o,e[17]=V):V=e[17];const[Re,Se]=d.useState(V),se=Re,oe=(r,a)=>{const s=[];a==="all"?(s.push(...me),U(r,"all")):s.push(...me.filter(n=>n.toUpperCase().includes(a.toUpperCase()))),Se(s),q(s,u,ne,A)},[ye,je]=d.useState("all"),A=ye,[v,be]=d.useState(ee),U=(r,a)=>{a==="all"||ee.includes(a)?je(a):console.error(`Invalid value for setActiveProduct: ${a}`),q(se,u,ne,a)},[W,Ce]=d.useState("all"),[_e,Be]=d.useState(ue),ne=_e,ie=(r,a)=>{const s=[];a==="all"?s.push("AWS",...ue):s.push(...["AWS",...ue].filter(n=>n.toLowerCase().includes(a.toLowerCase()))),Ce(a),Be(s),U(r,"all"),be(s),q(se,u,s,"all")};let f;e[18]!==o?(f=ge.map(r=>({...r,links:r.links.filter(a=>a.lang.toUpperCase()===o)})),e[18]=o,e[19]=f):f=e[19];let M;e[20]!==f?(M={list:f},e[20]=f,e[21]=M):M=e[21];const[ce,Pe]=d.useState(M),q=(r,a,s,n)=>{const N=ge.map(c=>({...c,links:c.links.filter(de=>`${`${c.brand} ${de.title}`}`.toLowerCase().includes(a.toLowerCase())).filter(de=>r.includes(de.lang.toUpperCase()))})).filter(c=>c.links.length>0).filter(c=>s.includes(c.brand)).filter(c=>n!=="all"?c.brand===v[0]||c.brand===n:!0);Pe({list:N})};let O;e[22]!==l.copy_error?(O=async function(a){try{await navigator.clipboard.writeText(a)}catch(s){const n=s;let N=l.copy_error;n instanceof Error?N=n.message:typeof n=="string"&&(N=n),console.error(N)}},e[22]=l.copy_error,e[23]=O):O=e[23];const D=O;let m;e[24]!==o?(m=t.jsx($e,{language:o}),e[24]=o,e[25]=m):m=e[25];let x;e[26]!==l.header?(x=t.jsx(fe,{level:"h1",children:l.header}),e[26]=l.header,e[27]=x):x=e[27];let E;e[28]!==l.description?(E=t.jsx(pe,{as:"p",children:l.description}),e[28]=l.description,e[29]=E):E=e[29];let L;e[30]!==h||e[31]!==i.text?(L=t.jsx(We,{onClick:h,children:i.text}),e[30]=h,e[31]=i.text,e[32]=L):L=e[32];const Te=l.filters,ke=i.expanded;let Q;e[33]===Symbol.for("react.memo_cache_sentinel")?(Q=t.jsx(Ge,{inline:!1}),e[33]=Q):Q=e[33];let R;e[34]!==l.search||e[35]!==l.placeholder||e[36]!==g||e[37]!==re||e[38]!==u?(R=t.jsx(Qe,{type:"search",renderLabel:l.search,placeholder:l.placeholder,onChange:g,renderBeforeInput:Q,renderAfterInput:re,value:u}),e[34]=l.search,e[35]=l.placeholder,e[36]=g,e[37]=re,e[38]=u,e[39]=R):R=e[39];const we=l.brands;let Z,G;e[40]===Symbol.for("react.memo_cache_sentinel")?(Z=t.jsx(k,{value:"all",label:"All",context:"off"},"all"),G=["AWS",...ee].map(ll),e[40]=Z,e[41]=G):(Z=e[40],G=e[41]);let S;e[42]!==l.brands||e[43]!==ie?(S=t.jsxs(he,{name:"brand",description:we,defaultValue:"all",layout:"columns",variant:"toggle",onChange:ie,children:[Z,G]}),e[42]=l.brands,e[43]=ie,e[44]=S):S=e[44];let y;e[45]!==W||e[46]!==v||e[47]!==U||e[48]!==A||e[49]!==l?(y=W!=="all"&&v.length>1&&t.jsxs(he,{name:"product",description:l.products,defaultValue:"all",layout:"columns",variant:"toggle",onChange:U,children:[t.jsx(k,{value:"all",label:"All",context:"off",id:"allProducts",checked:A==="all"},"all"),v.filter(r=>r!==W).map(el)]}),e[45]=W,e[46]=v,e[47]=U,e[48]=A,e[49]=l,e[50]=y):y=e[50];const Ae=l.language;let J,X;e[51]===Symbol.for("react.memo_cache_sentinel")?(J=t.jsx(k,{value:"all",label:"All",context:"off"},"all"),X=He.map(Ye),e[51]=J,e[52]=X):(J=e[51],X=e[52]);let j;e[53]!==l.language||e[54]!==o||e[55]!==oe?(j=t.jsxs(he,{name:"language",description:Ae,defaultValue:o,layout:"columns",variant:"toggle",onChange:oe,children:[J,X]}),e[53]=l.language,e[54]=o,e[55]=oe,e[56]=j):j=e[56];let b;e[57]!==R||e[58]!==S||e[59]!==y||e[60]!==j?(b=t.jsx(le,{as:"div",margin:"large none none",children:t.jsx("form",{name:"searchFilters",autoComplete:"off",children:t.jsxs(Ze,{label:"",description:"",layout:"stacked",children:[R,S,y,j]})})}),e[57]=R,e[58]=S,e[59]=y,e[60]=j,e[61]=b):b=e[61];let C;e[62]!==l.filters||e[63]!==h||e[64]!==i.expanded||e[65]!==b?(C=t.jsx(qe,{id:"toggleFilters",summary:Te,onToggle:h,expanded:ke,children:b}),e[62]=l.filters,e[63]=h,e[64]=i.expanded,e[65]=b,e[66]=C):C=e[66];let _;e[67]!==x||e[68]!==E||e[69]!==L||e[70]!==C?(_=t.jsxs(le,{as:"div",margin:"none none x-large",children:[x,E,L,C]}),e[67]=x,e[68]=E,e[69]=L,e[70]=C,e[71]=_):_=e[71];let B;if(e[72]!==l.title||e[73]!==l.link||e[74]!==l.copy||e[75]!==l.copy_url||e[76]!==D||e[77]!==ce.list){let r;e[79]!==l.title||e[80]!==l.link||e[81]!==l.copy||e[82]!==l.copy_url||e[83]!==D?(r=a=>{if(a.links.length){const s=a.brand;return t.jsxs(le,{as:"div",margin:"none none xx-large",children:[t.jsx(fe,{level:ee.includes(s)?"h2":"h3",id:s,children:s}),t.jsxs(p,{hover:!0,caption:s,children:[t.jsx(p.Head,{children:t.jsxs(p.Row,{children:[t.jsx(p.ColHeader,{id:"Title",width:"25%",children:l.title}),t.jsx(p.ColHeader,{id:"URLs",children:l.link})]})}),t.jsx(p.Body,{children:a.links.map(n=>t.jsxs(p.Row,{children:[t.jsx(p.Cell,{children:t.jsx(pe,{children:n.title})}),t.jsxs(p.Cell,{children:[t.jsx(ze,{href:`https://${te}${n.from}`,children:`${te}${n.from}`}),"  ",t.jsx(Ke,{renderTip:l.copy,on:["hover","focus"],placement:"top",color:"primary-inverse",children:t.jsx(xe,{withBackground:!1,withBorder:!1,screenReaderLabel:l.copy_url,onClick:()=>{D(`https://${te}${n.from}`)},children:t.jsx(Oe,{})})}),t.jsx("br",{}),t.jsx(pe,{size:"small",color:"secondary",children:n.to.split("?")[0]})]})]},n.title))})]})]},s)}return null},e[79]=l.title,e[80]=l.link,e[81]=l.copy,e[82]=l.copy_url,e[83]=D,e[84]=r):r=e[84],B=ce.list.map(r),e[72]=l.title,e[73]=l.link,e[74]=l.copy,e[75]=l.copy_url,e[76]=D,e[77]=ce.list,e[78]=B}else B=e[78];let P;e[85]!==_||e[86]!==B?(P=t.jsxs(le,{id:"main",as:"div",padding:"medium medium xx-large",minWidth:"20rem",maxWidth:"59.25rem",margin:"0 auto",children:[_,B]}),e[85]=_,e[86]=B,e[87]=P):P=e[87];let T;e[88]!==o?(T=t.jsx(Ve,{language:o}),e[88]=o,e[89]=T):T=e[89];let Y;return e[90]!==m||e[91]!==P||e[92]!==T?(Y=t.jsxs(t.Fragment,{children:[m,P,T]}),e[90]=m,e[91]=P,e[92]=T,e[93]=Y):Y=e[93],Y}function Ye(e){return t.jsx(k,{value:e.code,label:e.local,context:"off"},e.code)}function el(e){return t.jsx(k,{value:e,label:e,context:"off"},e)}function ll(e){return t.jsx(k,{value:e,label:e,context:"off"},e)}Xe.displayName="Route.Links";function tl(){const e=d.lazy(()=>Ue(()=>import("./error-LDYVdH-U.js"),__vite__mapDeps([0,1,2,3,4])).then(w=>({default:w.Component})));return t.jsx(d.Suspense,{fallback:t.jsx("h1",{children:"Error."}),children:t.jsx(e,{})})}tl.displayName="Error.Links";export{Xe as Component,tl as ErrorBoundary};