const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/error-C4KIZUWP.js","assets/index-BFtRLxMJ.js","assets/index-TCIaF8cn.css","assets/RenderTopNavBar-B72A53vW.js","assets/index-CmawvCql.js"])))=>i.map(i=>d[i]);
import{a as T,b as _,r as m,j as n,V as C,_ as v}from"./index-BFtRLxMJ.js";import{M as S,a as A,b as R,r as N}from"./Mdtoui-DcH41RKb.js";import{a as M,g as I,G as k,R as L,b as P}from"./RenderTopNavBar-B72A53vW.js";import{S as B}from"./index-CxjekQoV.js";import{r as H,a as G}from"./index-B_0wpPHz.js";import"./index-9PRCIXpA.js";import"./index-CVD30CQF.js";const D={loading:{EN:"Loading...",ES_LA:"Cargando...",PT_BR:"Carregando...",DE:"Wird geladen..."},markdown_source:{EN:"Markdown Source",ES_LA:"Fuente de Markdown",PT_BR:"Fonte de Markdown",DE:"Markdown-Quelle"},try_editor:{EN:"Try editing the markdown below.",ES_LA:"Intenta editar el markdown abajo.",PT_BR:"Tente editar o markdown abaixo.",DE:"Versuche den Markdown unten zu bearbeiten."},close:{EN:"Close",ES_LA:"Cerrar",PT_BR:"Fechar",DE:"Schließen"}},x=`# Markdown to Instructure UI

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

Shank spare ribs sausage landjaeger strip steak jerky, fatback salami tenderloin ball tip pastrami pork. Meatball tri-tip ham tongue, beef ribs chuck boudin short ribs pork burgdoggen spare ribs shankle bacon picanha. Burgdoggen pork meatball boudin venison tenderloin tail pork loin short loin chicken. Salami pork loin shankle bresaola, ground round pork pork belly beef ribs flank tongue biltong pastrami cow. Hamburger cupim sausage tri-tip. Ham rump shoulder, ground round sausage flank hamburger spare ribs picanha bacon chuck strip steak.`;function U(){const e=T.c(24),d=_().language;let u,t;e[0]!==d?(t=M(d),u=I(D,t),e[0]=d,e[1]=u,e[2]=t):(u=e[1],t=e[2]);const y=u;m.useEffect(F);const[a,j]=m.useState(`${y.loading}`);let c,g;e[3]===Symbol.for("react.memo_cache_sentinel")?(c=()=>{j(x)},g=[x],e[3]=c,e[4]=g):(c=e[3],g=e[4]),m.useEffect(c,g);let r;e[5]!==t?(r=n.jsx(L,{language:t}),e[5]=t,e[6]=r):r=e[6];let h,p;e[7]===Symbol.for("react.memo_cache_sentinel")?(h=[H,G],p=[N],e[7]=h,e[8]=p):(h=e[7],p=e[8]);let o;e[9]!==a?(o=n.jsx(k.Col,{children:n.jsx(S,{remarkPlugins:h,rehypePlugins:p,allowedElements:A,components:R,children:a})}),e[9]=a,e[10]=o):o=e[10];const w=`${y.markdown_source}`;let b;e[11]===Symbol.for("react.memo_cache_sentinel")?(b=E=>{j(E)},e[11]=b):b=e[11];let i;e[12]!==w||e[13]!==a?(i=n.jsx(k.Col,{children:n.jsx(B,{label:w,language:"markdown",readOnly:!1,editable:!0,lineNumbers:!0,foldGutter:!0,highlightActiveLineGutter:!0,highlightActiveLine:!0,lineWrapping:!0,value:a,onChange:b})}),e[12]=w,e[13]=a,e[14]=i):i=e[14];let s;e[15]!==o||e[16]!==i?(s=n.jsx(C,{id:"main",className:"mdui",as:"div",padding:"medium medium xx-large",minWidth:"20rem",maxWidth:"100vw",margin:"0 auto",children:n.jsx(k,{startAt:"large",children:n.jsxs(k.Row,{children:[o,i]})})}),e[15]=o,e[16]=i,e[17]=s):s=e[17];let l;e[18]!==t?(l=n.jsx(P,{language:t}),e[18]=t,e[19]=l):l=e[19];let f;return e[20]!==r||e[21]!==s||e[22]!==l?(f=n.jsxs(n.Fragment,{children:[r,s,l]}),e[20]=r,e[21]=s,e[22]=l,e[23]=f):f=e[23],f}function F(){document.title="Markdown to Instructure UI"}U.displayName="Route.MDUI";function O(){const e=m.lazy(()=>v(()=>import("./error-C4KIZUWP.js"),__vite__mapDeps([0,1,2,3,4])).then(d=>({default:d.Component})));return n.jsx(m.Suspense,{fallback:n.jsx("h1",{children:"Error."}),children:n.jsx(e,{})})}O.displayName="Error.Releases";export{U as Component,O as ErrorBoundary};
