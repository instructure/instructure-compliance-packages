const __vite__fileDeps=["assets/error-dq4lNFqK.js","assets/index-CGw_h4gI.js","assets/index-Bg_ngmgK.css","assets/RenderTopNavBar-pCVVBdkL.js","assets/index-C1k2Agka.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{a as Q,r as o,d as g,e as C,L as k,j as e,V as f,_ as Z,g as G}from"./index-CGw_h4gI.js";import{a as J,g as X,R as Y,H as A,T as b,d as ee,L as ae,e as re,b as le,f as v}from"./RenderTopNavBar-pCVVBdkL.js";import{B as ne,T as se,R as y,a as d,I as oe,b as te}from"./index-CEDUO8n9.js";import{F as ie,T as ce,a as t}from"./index-DsLJMqvX.js";import{I as de,a as w}from"./index-CFtOXthK.js";const ue={header:{EN:"Redirect Links",ES_LA:"Enlaces de Redirección",PT_BR:"Links de Redirecionamento",DE:"Weiterleitungslinks"},description:{EN:"This page provides a collection of shortened URLs for use in RFP responses. Each row has a short URL and the original URL. Click on the copy icon and the short URL will be added to your clipboard.",ES_LA:"Esta página proporciona una colección de URL abreviadas para usar en las respuestas a RFP. Cada fila tiene una URL corta y la URL original. Haga clic en la copia y la URL corta se agregará a su portapapeles.",PT_BR:"Esta página fornece uma coleção de URLs abreviados para uso em respostas de RFP. Cada linha possui um URL curto e o URL original. Clique na cópia ícone e o URL curto serão adicionados à sua área de transferência.",DE:"Diese Seite bietet eine Sammlung verkürzter URLs zur Verwendung in RFP-Antworten. Jede Zeile enthält eine Kurz-URL und die Original-URL. Klicken Sie auf die Kopie-Symbol und die Kurz-URL wird Ihrer Zwischenablage hinzugefügt."},filters:{EN:"Filters",ES_LA:"Filtros",PT_BR:"Filtros",DE:"filter"},toggleShow:{EN:"Show filters",ES_LA:"Mostrar filtros",PT_BR:"Mostrar filtros",DE:"Filter anzeigen"},toggleHide:{EN:"Hide filters",ES_LA:"Ocultar filtros",PT_BR:"Ocultar filtros",DE:"Filter ausblenden"},search:{EN:"Search",ES_LA:"Buscar",PT_BR:"Procurar",DE:"Suche"},clearSearch:{EN:"Clear search",ES_LA:"Borrar búsqueda",PT_BR:"Limpar pesquisa",DE:"Suche löschen"},placeholder:{EN:"community",ES_LA:"comunidad",PT_BR:"comunidade",DE:"Gemeinschaft"},brands:{EN:"Brands",ES_LA:"Marcas",PT_BR:"Marcas",DE:"Marken"},products:{EN:"Products",ES_LA:"Productos",PT_BR:"Produtos",DE:"Produkte"},language:{EN:"Language",ES_LA:"Idioma",PT_BR:"Idioma",DE:"Sprache"},title:{EN:"Title",ES_LA:"Título",PT_BR:"Título",DE:"Titel"},link:{EN:"Link",ES_LA:"Enlace",PT_BR:"Link",DE:"Link"},copy:{EN:"Copy",ES_LA:"Copiar",PT_BR:"Copiar",DE:"Kopieren"},copy_url:{EN:"Copy URL to clipboard",ES_LA:"Copiar URL al portapapeles",PT_BR:"Copiar URL para a área de transferência",DE:"Kopieren Sie die URL in die Zwischenablage"},copy_error:{EN:"Error copying to clipboard",ES_LA:"Error al copiar al portapapeles",PT_BR:"Erro ao copiar para a área de transferência",DE:"Fehler beim Kopieren in die Zwischenablage"}};function pe(){const i=J(Q().language),n=X(ue,i),m=G.url.replace("https://",""),[p,U]=o.useState({expanded:!1,text:n.toggleShow}),B=()=>{const a=p.expanded?n.toggleShow:n.toggleHide;U({expanded:!p.expanded,text:a})},[u,_]=o.useState(""),P=(a,r)=>{_(r),h(x,r,j,L)},D=a=>{a.stopPropagation(),P(a,"")},N=()=>u.search.length?e.jsx(w,{type:"button",size:"small",withBackground:!1,withBorder:!1,screenReaderLabel:n.clearSearch,onClick:D,children:e.jsx(te,{})}):null,[x,F]=o.useState([i]),I=(a,r)=>{const l=[];r==="all"?(l.push(...v),R(a,"all")):l.push(...v.filter(c=>c.toUpperCase().includes(r.toUpperCase()))),F(l),h(l,u,j,L)},[L,$]=o.useState("all"),[E,z]=o.useState(g),R=(a,r)=>{r==="all"||g.includes(r)?$(r):console.error(`Invalid value for setActiveProduct: ${r}`),h(x,u,j,r)},[T,H]=o.useState("all"),[j,K]=o.useState(C),V=(a,r)=>{const l=[];r==="all"?l.push("AWS",...C):l.push(...["AWS",...C].filter(c=>c.toLowerCase().includes(r.toLowerCase()))),H(r),K(l),R(a,"all"),z(l),h(x,u,l,"all")},[W,M]=o.useState({list:k.map(a=>({...a,links:a.links.filter(r=>r.lang.toUpperCase()===i)}))}),h=(a,r,l,c)=>{const O=k.map(s=>({...s,links:s.links.filter(S=>`${`${s.brand} ${S.title}`}`.toLowerCase().includes(r.toLowerCase())).filter(S=>a.includes(S.lang.toUpperCase()))})).filter(s=>s.links.length>0).filter(s=>l.includes(s.brand)).filter(s=>c!=="all"?s.brand===E[0]||s.brand===c:!0);M({list:O})};async function q(a){try{await navigator.clipboard.writeText(a)}catch(r){let l=n.copy_error;r instanceof Error?l=r.message:typeof r=="string"&&(l=r),console.error(l)}}return e.jsxs(e.Fragment,{children:[e.jsx(Y,{language:i}),e.jsxs(f,{id:"main",as:"div",padding:"medium medium xx-large",minWidth:"20rem",maxWidth:"59.25rem",margin:"0 auto",children:[e.jsxs(f,{as:"div",margin:"none none x-large",children:[e.jsx(A,{level:"h1",children:n.header}),e.jsx(b,{as:"p",children:n.description}),e.jsx(ne,{onClick:B,children:p.text}),e.jsx(se,{id:"toggleFilters",summary:n.filters,onToggle:B,expanded:p.expanded,children:e.jsx(f,{as:"div",margin:"large none none",children:e.jsx("form",{name:"searchFilters",autoComplete:"off",children:e.jsxs(ie,{label:"",description:"",layout:"stacked",children:[e.jsx(ce,{type:"search",renderLabel:n.search,placeholder:n.placeholder,onChange:P,renderBeforeInput:e.jsx(de,{inline:!1}),renderAfterInput:N,value:u}),e.jsxs(y,{name:"brand",description:n.brands,defaultValue:"all",layout:"columns",variant:"toggle",onChange:V,children:[e.jsx(d,{value:"all",label:"All",context:"off"},"all"),["AWS",...g].map(a=>e.jsx(d,{value:a,label:a,context:"off"},a))]}),T!=="all"&&E.length>1&&e.jsxs(y,{name:"product",description:n.products,defaultValue:"all",layout:"columns",variant:"toggle",onChange:R,children:[e.jsx(d,{value:"all",label:"All",context:"off",id:"allProducts",checked:L==="all"},"all"),E.filter(a=>a!==T).map(a=>e.jsx(d,{value:a,label:a,context:"off"},a))]}),e.jsxs(y,{name:"language",description:n.language,defaultValue:i,layout:"columns",variant:"toggle",onChange:I,children:[e.jsx(d,{value:"all",label:"All",context:"off"},"all"),ee.map(a=>e.jsx(d,{value:a.code,label:a.local,context:"off"},a.code))]})]})})})})]}),W.list.map(a=>{if(a.links.length){const r=a.brand;return e.jsxs(f,{as:"div",margin:"none none xx-large",children:[e.jsx(A,{level:g.includes(r)?"h2":"h3",id:r,children:r}),e.jsxs(t,{hover:!0,caption:r,children:[e.jsx(t.Head,{children:e.jsxs(t.Row,{children:[e.jsx(t.ColHeader,{id:"Title",width:"25%",children:n.title}),e.jsx(t.ColHeader,{id:"URLs",children:n.link})]})}),e.jsx(t.Body,{children:a.links.map(l=>e.jsxs(t.Row,{children:[e.jsx(t.Cell,{children:e.jsx(b,{children:l.title})}),e.jsxs(t.Cell,{children:[e.jsx(ae,{href:`https://${m}${l.from}`,children:`${m}${l.from}`}),"  ",e.jsx(re,{renderTip:n.copy,on:["hover","focus"],placement:"top",color:"primary-inverse",children:e.jsx(w,{withBackground:!1,withBorder:!1,screenReaderLabel:n.copy_url,onClick:()=>{q(`https://${m}${l.from}`)},children:e.jsx(oe,{})})}),e.jsx("br",{}),e.jsx(b,{size:"small",color:"secondary",children:l.to.split("?")[0]})]})]},l.title))})]})]},r)}return null})]}),e.jsx(le,{language:i})]})}pe.displayName="Route.Links";function he(){const i=o.lazy(()=>Z(()=>import("./error-dq4lNFqK.js"),__vite__mapDeps([0,1,2,3,4])).then(n=>({default:n.Component})));return e.jsx(o.Suspense,{fallback:e.jsx("h1",{children:"Error."}),children:e.jsx(i,{})})}he.displayName="Error.Links";export{pe as Component,he as ErrorBoundary};
