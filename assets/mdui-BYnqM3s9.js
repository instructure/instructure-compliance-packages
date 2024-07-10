const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/error-B5hQzbeZ.js","assets/index-DVuP2ZA1.js","assets/index-TCIaF8cn.css","assets/RenderTopNavBar-DdduE_mK.js","assets/index-BCoP-QCi.js"])))=>i.map(i=>d[i]);
import{a as T,r as m,j as n,V as C,_ as v}from"./index-DVuP2ZA1.js";import{c as S,a as A,g as R,R as N,b as M}from"./RenderTopNavBar-DdduE_mK.js";import{M as I,c as L,d as P,r as B,a as H,b as G}from"./Mdtoui-D2iN30Jx.js";import{G as w}from"./index-BgSjnQS9.js";import{S as D}from"./index-ALzVjZWx.js";import"./index-CvvVU94y.js";const U={loading:{EN:"Loading...",ES_LA:"Cargando...",PT_BR:"Carregando...",DE:"Wird geladen..."},markdown_source:{EN:"Markdown Source",ES_LA:"Fuente de Markdown",PT_BR:"Fonte de Markdown",DE:"Markdown-Quelle"},try_editor:{EN:"Try editing the markdown below.",ES_LA:"Intenta editar el markdown abajo.",PT_BR:"Tente editar o markdown abaixo.",DE:"Versuche den Markdown unten zu bearbeiten."},close:{EN:"Close",ES_LA:"Cerrar",PT_BR:"Fechar",DE:"Schließen"}},x=`# Markdown to Instructure UI

> [!NOTE]
> Try editing the markdown on this page.

This page is rendered from [github-flavored markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) and passing the content through [react-markdown](https://github.com/remarkjs/react-markdown) to [Instructure UI](https://instructure.design/).  The result is accessible, well styled, and modular content created simply with markdown.

:arrow_right: [Github](https://github.com/thedannywahl/instructure-security-package/blob/gh-pages/isp-site/src/components/mdtoui.jsx)

<hr />

## Tables

### Normal table

| First Header     | Second Header    |
| ---------------- | ---------------- |
| Content Cell A1  | Content Cell B1  |
| Content Cell A2  | Content Cell B2  |

### Table with fancy formatting

| Command | Description |
| --- | --- |
| \`git status\` | List all *new or modified* files |
| \`git diff\` | Show file differences that **haven't been** staged |

### Table with columnar alignment

| Left-aligned | Center-aligned | Right-aligned |
| :---         |     :---:      |          ---: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |

## Details

<details><summary>CLICK ME</summary>

#### We can hide anything

Hello world!

</details>

## Quotes

> Text that is a quote -- Author Name

> Long quote w/ no attribution, and linebreaks in MD. Bacon ipsum dolor amet biltong pastrami shankle venison jowl meatloaf.
> Ham jowl leberkas salami fatback sausage chuck pancetta short loin meatball, filet mignon chislic. 
> Tri-tip ham hock ball tip, frankfurter bacon buffalo hamburger chuck turkey filet mignon andouille rump ground round doner short ribs. 
> Fatback short ribs bresaola, turducken ball tip drumstick meatloaf t-bone venison pork belly pig landjaeger chicken salami hamburger. 
> Jowl pork shank t-bone short loin.

### Alerts

> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.

## Code

Use \`git status\` to list all new or modified files that haven't yet been committed.

Some basic Git commands are:
\`\`\`
git status
git add
git commit
\`\`\`

\`\`\`javascript
const msg = \`you need to know about \${err}.\`
alert(msg)
console.warn("User alerted:", msg)
\`\`\`

<pre>This is some preformatted text, but it is NOT code</pre>

## Lists

1. James Madison
2. James Monroe
3. John Quincy Adams

* George Washington
* John Adams
* Thomas Jefferson

- [x] #739
- [ ] https://github.com/octo-org/octo-repo/issues/740
- [ ] Add delight to the experience when all tasks are complete :tada:

## Text

Emoji: @octocat :+1: This PR looks great - it's ready to merge!

Text style: *italic* **bold** ~struck~

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

**Bacon** ipsum dolor amet beef ribs porchetta shank prosciutto burgdoggen sirloin pork belly pancetta picanha drumstick shoulder meatloaf. Sausage ground round flank shank venison, turducken frankfurter sirloin landjaeger jerky bresaola swine picanha. Buffalo shank short ribs rump swine tail, meatloaf capicola venison pork loin cupim. Buffalo spare ribs ribeye sausage. Ground round porchetta cow, landjaeger pork belly jowl picanha salami. Pork belly pancetta spare ribs swine t-bone, meatloaf bresaola kielbasa pastrami burgdoggen turkey sausage ham hock. Ribeye shank tenderloin beef ribs tail venison drumstick tongue pastrami.

Shank spare ribs sausage landjaeger strip steak jerky, fatback salami tenderloin ball tip pastrami pork. Meatball tri-tip ham tongue, beef ribs chuck boudin short ribs pork burgdoggen spare ribs shankle bacon picanha. Burgdoggen pork meatball boudin venison tenderloin tail pork loin short loin chicken. Salami pork loin shankle bresaola, ground round pork pork belly beef ribs flank tongue biltong pastrami cow. Hamburger cupim sausage tri-tip. Ham rump shoulder, ground round sausage flank hamburger spare ribs picanha bacon chuck strip steak.`;function F(){const e=S.c(25),d=T().language;let c,t;e[0]!==d?(t=A(d),c=R(U,t),e[0]=d,e[1]=c,e[2]=t):(c=e[1],t=e[2]);const _=c;let u;e[3]===Symbol.for("react.memo_cache_sentinel")?(u=()=>{document.title="Markdown to Instructure UI"},e[3]=u):u=e[3],m.useEffect(u);const[a,j]=m.useState(`${_.loading}`);let g;e[4]===Symbol.for("react.memo_cache_sentinel")?(g=()=>{j(x)},e[4]=g):g=e[4];let h;e[5]===Symbol.for("react.memo_cache_sentinel")?(h=[x],e[5]=h):h=e[5],m.useEffect(g,h);let r;e[6]!==t?(r=n.jsx(N,{language:t}),e[6]=t,e[7]=r):r=e[7];let b;e[8]===Symbol.for("react.memo_cache_sentinel")?(b=[B,H],e[8]=b):b=e[8];let p;e[9]===Symbol.for("react.memo_cache_sentinel")?(p=[G],e[9]=p):p=e[9];let o;e[10]!==a?(o=n.jsx(w.Col,{children:n.jsx(I,{remarkPlugins:b,rehypePlugins:p,allowedElements:L,components:P,children:a})}),e[10]=a,e[11]=o):o=e[11];const y=`${_.markdown_source}`;let f;e[12]===Symbol.for("react.memo_cache_sentinel")?(f=E=>{j(E)},e[12]=f):f=e[12];let i;e[13]!==y||e[14]!==a?(i=n.jsx(w.Col,{children:n.jsx(D,{label:y,language:"markdown",readOnly:!1,editable:!0,lineNumbers:!0,foldGutter:!0,highlightActiveLineGutter:!0,highlightActiveLine:!0,lineWrapping:!0,value:a,onChange:f})}),e[13]=y,e[14]=a,e[15]=i):i=e[15];let s;e[16]!==o||e[17]!==i?(s=n.jsx(C,{id:"main",className:"mdui",as:"div",padding:"medium medium xx-large",minWidth:"20rem",maxWidth:"100vw",margin:"0 auto",children:n.jsx(w,{startAt:"large",children:n.jsxs(w.Row,{children:[o,i]})})}),e[16]=o,e[17]=i,e[18]=s):s=e[18];let l;e[19]!==t?(l=n.jsx(M,{language:t}),e[19]=t,e[20]=l):l=e[20];let k;return e[21]!==r||e[22]!==s||e[23]!==l?(k=n.jsxs(n.Fragment,{children:[r,s,l]}),e[21]=r,e[22]=s,e[23]=l,e[24]=k):k=e[24],k}F.displayName="Route.MDUI";function O(){const e=m.lazy(()=>v(()=>import("./error-B5hQzbeZ.js"),__vite__mapDeps([0,1,2,3,4])).then(d=>({default:d.Component})));return n.jsx(m.Suspense,{fallback:n.jsx("h1",{children:"Error."}),children:n.jsx(e,{})})}O.displayName="Error.Releases";export{F as Component,O as ErrorBoundary};
