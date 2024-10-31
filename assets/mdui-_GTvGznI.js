const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/error-DwkMBbVk.js","assets/index-3aPu6kFZ.js","assets/index-Cl2OsHdY.css","assets/RenderTopNavBar-RMh88Acv.js","assets/index-BlLpnqnT.js"])))=>i.map(i=>d[i]);
import{a as n,r as e,j as a,V as t,_ as o}from"./index-3aPu6kFZ.js";import{c as r,a as i,g as s,R as l,b as d}from"./RenderTopNavBar-RMh88Acv.js";import{M as m,c as u,d as c,r as g,a as h,b}from"./Mdtoui-BNcffb9G.js";import{G as p}from"./index-D4GheFr1.js";import{S as k}from"./index-6y74GvbK.js";import"./index-DW4lX3uK.js";const f={loading:{EN:"Loading...",ES_LA:"Cargando...",PT_BR:"Carregando...",DE:"Wird geladen..."},markdown_source:{EN:"Markdown Source",ES_LA:"Fuente de Markdown",PT_BR:"Fonte de Markdown",DE:"Markdown-Quelle"},try_editor:{EN:"Try editing the markdown below.",ES_LA:"Intenta editar el markdown abajo.",PT_BR:"Tente editar o markdown abaixo.",DE:"Versuche den Markdown unten zu bearbeiten."},close:{EN:"Close",ES_LA:"Cerrar",PT_BR:"Fechar",DE:"Schließen"}},w="# Markdown to Instructure UI\n\n> [!NOTE]\n> Try editing the markdown on this page.\n\nThis page is rendered from [github-flavored markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) and passing the content through [react-markdown](https://github.com/remarkjs/react-markdown) to [Instructure UI](https://instructure.design/).  The result is accessible, well styled, and modular content created simply with markdown.\n\n:arrow_right: [Github](https://github.com/thedannywahl/instructure-security-package/blob/gh-pages/isp-site/src/components/mdtoui.jsx)\n\n<hr />\n\n## Tables\n\n### Normal table\n\n| First Header     | Second Header    |\n| ---------------- | ---------------- |\n| Content Cell A1  | Content Cell B1  |\n| Content Cell A2  | Content Cell B2  |\n\n### Table with fancy formatting\n\n| Command | Description |\n| --- | --- |\n| `git status` | List all *new or modified* files |\n| `git diff` | Show file differences that **haven't been** staged |\n\n### Table with columnar alignment\n\n| Left-aligned | Center-aligned | Right-aligned |\n| :---         |     :---:      |          ---: |\n| git status   | git status     | git status    |\n| git diff     | git diff       | git diff      |\n\n## Details\n\n<details><summary>CLICK ME</summary>\n\n#### We can hide anything\n\nHello world!\n\n</details>\n\n## Quotes\n\n> Text that is a quote -- Author Name\n\n> Long quote w/ no attribution, and linebreaks in MD. Bacon ipsum dolor amet biltong pastrami shankle venison jowl meatloaf.\n> Ham jowl leberkas salami fatback sausage chuck pancetta short loin meatball, filet mignon chislic. \n> Tri-tip ham hock ball tip, frankfurter bacon buffalo hamburger chuck turkey filet mignon andouille rump ground round doner short ribs. \n> Fatback short ribs bresaola, turducken ball tip drumstick meatloaf t-bone venison pork belly pig landjaeger chicken salami hamburger. \n> Jowl pork shank t-bone short loin.\n\n### Alerts\n\n> [!NOTE]\n> Useful information that users should know, even when skimming content.\n\n> [!TIP]\n> Helpful advice for doing things better or more easily.\n\n> [!IMPORTANT]\n> Key information users need to know to achieve their goal.\n\n> [!WARNING]\n> Urgent info that needs immediate user attention to avoid problems.\n\n> [!CAUTION]\n> Advises about risks or negative outcomes of certain actions.\n\n## Code\n\nUse `git status` to list all new or modified files that haven't yet been committed.\n\nSome basic Git commands are:\n```\ngit status\ngit add\ngit commit\n```\n\n```javascript\nconst msg = `you need to know about ${err}.`\nalert(msg)\nconsole.warn(\"User alerted:\", msg)\n```\n\n<pre>This is some preformatted text, but it is NOT code</pre>\n\n## Lists\n\n1. James Madison\n2. James Monroe\n3. John Quincy Adams\n\n* George Washington\n* John Adams\n* Thomas Jefferson\n\n- [x] #739\n- [ ] https://github.com/octo-org/octo-repo/issues/740\n- [ ] Add delight to the experience when all tasks are complete :tada:\n\n## Text\n\nEmoji: @octocat :+1: This PR looks great - it's ready to merge!\n\nText style: *italic* **bold** ~struck~\n\n# Heading 1\n## Heading 2\n### Heading 3\n#### Heading 4\n##### Heading 5\n###### Heading 6\n\n**Bacon** ipsum dolor amet beef ribs porchetta shank prosciutto burgdoggen sirloin pork belly pancetta picanha drumstick shoulder meatloaf. Sausage ground round flank shank venison, turducken frankfurter sirloin landjaeger jerky bresaola swine picanha. Buffalo shank short ribs rump swine tail, meatloaf capicola venison pork loin cupim. Buffalo spare ribs ribeye sausage. Ground round porchetta cow, landjaeger pork belly jowl picanha salami. Pork belly pancetta spare ribs swine t-bone, meatloaf bresaola kielbasa pastrami burgdoggen turkey sausage ham hock. Ribeye shank tenderloin beef ribs tail venison drumstick tongue pastrami.\n\nShank spare ribs sausage landjaeger strip steak jerky, fatback salami tenderloin ball tip pastrami pork. Meatball tri-tip ham tongue, beef ribs chuck boudin short ribs pork burgdoggen spare ribs shankle bacon picanha. Burgdoggen pork meatball boudin venison tenderloin tail pork loin short loin chicken. Salami pork loin shankle bresaola, ground round pork pork belly beef ribs flank tongue biltong pastrami cow. Hamburger cupim sausage tri-tip. Ham rump shoulder, ground round sausage flank hamburger spare ribs picanha bacon chuck strip steak.";function y(){const o=r.c(24),y=n().language;let x,T;o[0]!==y?(T=i(y),x=s(f,T),o[0]=y,o[1]=x,o[2]=T):(x=o[1],T=o[2]);const _=x;e.useEffect(j);const[E,v]=e.useState(`${_.loading}`);let C,A,N,S,M,R;o[3]===Symbol.for("react.memo_cache_sentinel")?(C=()=>{v(w)},A=[w],o[3]=C,o[4]=A):(C=o[3],A=o[4]),e.useEffect(C,A),o[5]!==T?(N=a.jsx(l,{language:T}),o[5]=T,o[6]=N):N=o[6],o[7]===Symbol.for("react.memo_cache_sentinel")?(S=[g,h],M=[b],o[7]=S,o[8]=M):(S=o[7],M=o[8]),o[9]!==E?(R=a.jsx(p.Col,{children:a.jsx(m,{remarkPlugins:S,rehypePlugins:M,allowedElements:u,components:c,children:E})}),o[9]=E,o[10]=R):R=o[10];const I=`${_.markdown_source}`;let H,L,B,P,D;return o[11]===Symbol.for("react.memo_cache_sentinel")?(H=n=>{v(n)},o[11]=H):H=o[11],o[12]!==I||o[13]!==E?(L=a.jsx(p.Col,{children:a.jsx(k,{label:I,language:"markdown",readOnly:!1,editable:!0,lineNumbers:!0,foldGutter:!0,highlightActiveLineGutter:!0,highlightActiveLine:!0,lineWrapping:!0,value:E,onChange:H})}),o[12]=I,o[13]=E,o[14]=L):L=o[14],o[15]!==R||o[16]!==L?(B=a.jsx(t,{id:"main",className:"mdui",as:"div",padding:"medium medium xx-large",minWidth:"20rem",maxWidth:"100vw",margin:"0 auto",children:a.jsx(p,{startAt:"large",children:a.jsxs(p.Row,{children:[R,L]})})}),o[15]=R,o[16]=L,o[17]=B):B=o[17],o[18]!==T?(P=a.jsx(d,{language:T}),o[18]=T,o[19]=P):P=o[19],o[20]!==N||o[21]!==B||o[22]!==P?(D=a.jsxs(a.Fragment,{children:[N,B,P]}),o[20]=N,o[21]=B,o[22]=P,o[23]=D):D=o[23],D}function j(){document.title="Markdown to Instructure UI"}function x(){const n=e.lazy((()=>o((()=>import("./error-DwkMBbVk.js")),__vite__mapDeps([0,1,2,3,4])).then((n=>({default:n.Component})))));return a.jsx(e.Suspense,{fallback:a.jsx("h1",{children:"Error."}),children:a.jsx(n,{})})}y.displayName="Route.MDUI",x.displayName="Error.Releases";export{y as Component,x as ErrorBoundary};
