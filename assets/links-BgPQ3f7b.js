const __vite__fileDeps=["assets/error-pmzUJ_SX.js","assets/index-DT1C1ZDw.js","assets/index-DXft5ptw.css","assets/RenderTopNavBar-BKjAQtrP.js","assets/index-BIsQGgQp.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as h,R as U,P as n,w as fe,o as ae,d as w,p as ve,a as be,e as z,f as O,L as Z,j as r,V as I,_ as me,g as Se}from"./index-DT1C1ZDw.js";import{S as V,w as ie,t as le,i as ye,d as xe,m as ke,s as Ce,a as Le,g as Re,R as Ee,H as G,T as A,e as we,L as Be,f as ze,b as Ie,h as q}from"./RenderTopNavBar-BKjAQtrP.js";import{F as _e,a as N,B as Fe,T as Pe,b as je,I as $e,c as b,d as K,e as De}from"./index-3znfDf88.js";var Q;class R extends h.Component{constructor(...a){super(...a),this.ref=null,this.handleRef=l=>{const i=this.props.elementRef;this.ref=l,typeof i=="function"&&i(l)}}render(){return U.createElement(V,Object.assign({},this.props,{name:"IconCopy",viewBox:"0 0 1920 1920",elementRef:this.handleRef}),Q||(Q=U.createElement("path",{d:"M0 1919.887h1467.88V452.008H0v1467.88ZM1354.965 564.922v1242.051H112.914V564.922h1242.051ZM1920 0v1467.992h-338.741v-113.027h225.827V112.914H565.035V338.74H452.008V0H1920ZM338.741 1016.93h790.397V904.016H338.74v112.914Zm0 451.062h790.397v-113.027H338.74v113.027Zm0-225.588h564.57v-112.913H338.74v112.913Z",fillRule:"evenodd"})))}}R.glyphName="copy";R.variant="Line";R.displayName="IconCopyLine";R.propTypes={...V.propTypes};R.allowedProps=[...V.allowedProps];const He=(e,a)=>{const l=a.disabled,i=a.variant,u=a.context,p=a.size,o=a.inline,s=F=>`[class$=-radioInput__input]:${F} + [class$=-radioInput__control] &`,g={success:{backgroundColor:e.toggleBackgroundSuccess},danger:{backgroundColor:e.toggleBackgroundDanger},warning:{backgroundColor:e.toggleBackgroundWarning},off:{backgroundColor:e.toggleBackgroundOff}},f={simple:{base:{boxSizing:"border-box",display:"block",position:"relative",marginInlineEnd:e.simpleFacadeMarginEnd,marginInlineStart:"0",flexShrink:0,minWidth:"1rem",transition:"all 0.2s ease-out",borderRadius:"100%",border:`${e.borderWidth} solid ${e.borderColor}`,background:e.background,"&::before":{content:'""',position:"absolute",top:"-0.375rem",left:"-0.375rem",width:"calc(100% + 0.75rem)",height:"calc(100% + 0.75rem)",boxSizing:"border-box",borderRadius:"100%",border:`${e.focusBorderWidth} ${e.focusBorderStyle} ${e.focusBorderColor}`,transition:"all 0.2s",transform:"scale(0.75)",opacity:0,pointerEvents:"none"},[s("hover")]:{borderColor:e.hoverBorderColor},[s("focus")]:{background:e.background,"&::before":{transform:"scale(1)",opacity:1}}},small:{width:e.simpleFacadeSmallSize,height:e.simpleFacadeSmallSize,[s("checked")]:{background:e.background,boxShadow:`inset 0 0 0 ${e.simpleCheckedInsetSmall} ${e.hoverBorderColor}`,borderColor:e.hoverBorderColor}},medium:{width:e.simpleFacadeMediumSize,height:e.simpleFacadeMediumSize,[s("checked")]:{background:e.background,boxShadow:`inset 0 0 0 ${e.simpleCheckedInsetMedium} ${e.hoverBorderColor}`,borderColor:e.hoverBorderColor}},large:{width:e.simpleFacadeLargeSize,height:e.simpleFacadeLargeSize,[s("checked")]:{background:e.background,boxShadow:`inset 0 0 0 ${e.simpleCheckedInsetLarge} ${e.hoverBorderColor}`,borderColor:e.hoverBorderColor}}},toggle:{base:{boxSizing:"border-box",visibility:"hidden",display:"block",position:"absolute",zIndex:1,top:"0",left:"0",width:"100%",height:"100%",boxShadow:e.toggleShadow,borderRadius:e.toggleBorderRadius,...g[u],"&::before":{content:'""',position:"absolute",top:"-0.25rem",left:"-0.25rem",width:"calc(100% + 0.5rem)",height:"calc(100% + 0.5rem)",boxSizing:"border-box",borderRadius:`calc(${e.toggleBorderRadius} + 0.0625rem)`,border:`${e.focusBorderWidth} ${e.focusBorderStyle} ${e.focusBorderColor}`,transition:"all 0.2s",transform:"scale(0.75)",opacity:0},[s("checked")]:{visibility:"visible"},[s("focus")]:{"&::before":{opacity:1,transform:"scale(1)"}}},small:{},medium:{},large:{}}},S={simple:{base:{display:"flex",alignItems:"flex-start"},small:{},medium:{},large:{}},toggle:{base:{display:"block",userSelect:"none",boxSizing:"border-box",position:"relative"},small:{padding:"0 0.5rem",height:e.toggleSmallHeight},medium:{padding:"0 0.875rem",height:e.toggleMediumHeight},large:{padding:"0 1rem",height:e.toggleLargeHeight}}},m={simple:{base:{},small:{fontSize:e.simpleFontSizeSmall},medium:{fontSize:e.simpleFontSizeMedium},large:{fontSize:e.simpleFontSizeLarge}},toggle:{base:{position:"relative",zIndex:1,textTransform:"uppercase",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",lineHeight:1,display:"flex",alignItems:"center",minWidth:"0.0625rem",[s("checked")]:{color:e.toggleHandleText},[s("focus")]:{textDecoration:"underline"}},small:{fontSize:e.toggleSmallFontSize,height:e.toggleSmallHeight,svg:{fontSize:`calc(${e.toggleSmallFontSize} + 0.375rem)`}},medium:{fontSize:e.toggleMediumFontSize,height:e.toggleMediumHeight,svg:{fontSize:`calc(${e.toggleMediumFontSize} + 0.375rem)`}},large:{fontSize:e.toggleLargeFontSize,height:e.toggleLargeHeight,svg:{fontSize:`calc(${e.toggleLargeFontSize} + 0.375rem)`}}}},E={padding:"0",margin:"0",fontSize:"inherit",lineHeight:"inherit",width:"auto",position:"absolute",top:"0",left:"0",opacity:1e-4};return{radioInput:{label:"radioInput",position:"relative",width:"100%",...l&&{opacity:.5},...o&&{display:"inline-block",verticalAlign:"middle",width:"auto"},"&:hover":{cursor:"default",...l&&{cursor:"not-allowed"}}},input:{label:"radioInput__input",...E,'&:is(input)[type="radio"]':E,'&:-webkit-any(input)[type="radio"]':E},control:{label:"radioInput__control",all:"initial",display:"block",direction:"inherit",textAlign:"start",...S[i].base,...S[i][p]},facade:{label:"radioInput__facade",...f[i].base,...f[i][p]},label:{label:"radioInput__label",flex:"1 1 auto",color:e.labelColor,fontFamily:e.labelFontFamily,fontWeight:e.labelFontWeight,lineHeight:e.labelLineHeight,...m[i].base,...m[i][p],cursor:"default"}}},Oe=e=>{const a=e.spacing,l=e.borders,i=e.colors,u=e.forms,p=e.shadows,o=e.typography,s=e.key,g={canvas:{focusBorderColor:e["ic-brand-primary"],hoverBorderColor:e["ic-brand-font-color-dark"],labelColor:e["ic-brand-font-color-dark"]},"canvas-high-contrast":{toggleBackgroundOff:i==null?void 0:i.backgroundDarkest}};return{...{labelColor:i==null?void 0:i.textDarkest,labelFontFamily:o==null?void 0:o.fontFamily,labelFontWeight:o==null?void 0:o.fontWeightNormal,labelLineHeight:o==null?void 0:o.lineHeightCondensed,background:i==null?void 0:i.backgroundLightest,borderWidth:l==null?void 0:l.widthSmall,borderColor:i==null?void 0:i.borderMedium,hoverBorderColor:i==null?void 0:i.borderDarkest,controlSize:"0.1875rem",focusBorderColor:i==null?void 0:i.borderBrand,focusBorderWidth:l==null?void 0:l.widthMedium,focusBorderStyle:l==null?void 0:l.style,simpleFacadeSmallSize:"1rem",simpleFacadeMediumSize:"1.25rem",simpleFacadeLargeSize:"1.75rem",simpleCheckedInsetSmall:"0.1875rem",simpleCheckedInsetMedium:"0.25rem",simpleCheckedInsetLarge:"0.375rem",simpleFontSizeSmall:o==null?void 0:o.fontSizeSmall,simpleFontSizeMedium:o==null?void 0:o.fontSizeMedium,simpleFontSizeLarge:o==null?void 0:o.fontSizeLarge,simpleFacadeMarginEnd:a==null?void 0:a.xSmall,toggleBorderRadius:l==null?void 0:l.radiusSmall,toggleBorderWidth:l==null?void 0:l.widthLarge,toggleBackgroundSuccess:i==null?void 0:i.backgroundSuccess,toggleBackgroundOff:i==null?void 0:i.backgroundDark,toggleBackgroundDanger:i==null?void 0:i.backgroundDanger,toggleBackgroundWarning:i==null?void 0:i.backgroundWarning,toggleHandleText:i==null?void 0:i.textLightest,toggleSmallHeight:u==null?void 0:u.inputHeightSmall,toggleMediumHeight:u==null?void 0:u.inputHeightMedium,toggleLargeHeight:u==null?void 0:u.inputHeightLarge,toggleShadow:p==null?void 0:p.depth1,toggleSmallFontSize:o==null?void 0:o.fontSizeXSmall,toggleMediumFontSize:o==null?void 0:o.fontSizeSmall,toggleLargeFontSize:o==null?void 0:o.fontSizeMedium},...g[s]}},Ae={label:n.node.isRequired,value:n.oneOfType([n.string,n.number]),id:n.string,name:n.string,checked:n.bool,disabled:n.bool,readOnly:n.bool,variant:n.oneOf(["simple","toggle"]),size:n.oneOf(["small","medium","large"]),context:n.oneOf(["success","warning","danger","off"]),inline:n.bool,onClick:n.func,onChange:n.func},Me=["label","value","id","name","checked","disabled","readOnly","variant","size","context","inline","onClick","onChange"];var X,J,Y,L,y;let k=(X=ie(),J=fe(He,Oe),Y=le(),X(L=J(L=Y(L=(y=class re extends h.Component{constructor(a){super(a),this.ref=null,this._defaultId=void 0,this._input=null,this.handleClick=l=>{if(this.props.disabled||this.props.readOnly){l.preventDefault();return}typeof this.props.onClick=="function"&&this.props.onClick(l)},this.handleChange=l=>{if(this.props.disabled||this.props.readOnly){l.preventDefault();return}typeof this.props.checked>"u"&&this.setState({checked:!this.state.checked}),typeof this.props.onChange=="function"&&this.props.onChange(l)},typeof a.checked>"u"&&(this.state={checked:!1}),this._defaultId=a.deterministicId()}componentDidMount(){var a,l;(a=(l=this.props).makeStyles)===null||a===void 0||a.call(l)}componentDidUpdate(){var a,l;(a=(l=this.props).makeStyles)===null||a===void 0||a.call(l)}focus(){var a;(a=this._input)===null||a===void 0||a.focus()}get id(){return this.props.id||this._defaultId}get focused(){return ye(this._input)}get checked(){return typeof this.props.checked>"u"?this.state.checked:this.props.checked}render(){const a=this.props,l=a.disabled,i=a.readOnly,u=a.label,p=a.value,o=a.name,s=a.styles,g=ae(this.props,re.allowedProps);return w("div",{css:s==null?void 0:s.radioInput,ref:f=>{this.ref=f}},w("input",Object.assign({},g,{id:this.id,ref:f=>{this._input=f},value:p,name:o,checked:this.checked,type:"radio",css:s==null?void 0:s.input,disabled:l||i,"aria-disabled":l||i?"true":void 0,onChange:this.handleChange,onClick:this.handleClick})),w("label",{css:s==null?void 0:s.control,htmlFor:this.id},w("span",{css:s==null?void 0:s.facade,"aria-hidden":"true"}),w("span",{css:s==null?void 0:s.label},u)))}},y.displayName="RadioInput",y.componentId="RadioInput",y.allowedProps=Me,y.propTypes=Ae,y.defaultProps={variant:"simple",size:"medium",disabled:!1,inline:!1,context:"success",readOnly:!1},y))||L)||L)||L);const Ue={name:n.string.isRequired,description:n.node.isRequired,defaultValue:n.oneOfType([n.string,n.number]),value:xe(n.oneOfType([n.string,n.number])),onChange:n.func,disabled:n.bool,readOnly:n.bool,messages:n.arrayOf(_e.message),children:n.node,variant:n.oneOf(["simple","toggle"]),size:n.oneOf(["small","medium","large"]),layout:n.oneOf(["stacked","columns","inline"])},Ne=["name","description","defaultValue","value","onChange","disabled","readOnly","messages","children","variant","size","layout"];var T,ee,_,x;let M=(T=ie(),ee=le(),T(_=ee(_=(x=class oe extends h.Component{constructor(a){super(a),this.ref=null,this._messagesId=void 0,this.handleRef=l=>{this.ref=l},this.handleChange=l=>{const i=l.target.value;if(this.props.disabled||this.props.readOnly){l.preventDefault();return}typeof this.props.value>"u"&&this.setState({value:i}),typeof this.props.onChange=="function"&&this.props.onChange(l,i)},typeof a.value>"u"&&(this.state={value:a.defaultValue}),this._messagesId=a.deterministicId("RadioInputGroup-messages")}get hasMessages(){return!!this.props.messages&&this.props.messages.length>0}get value(){return typeof this.props.value>"u"?this.state.value:this.props.value}renderChildren(){const a=this.props,l=a.children,i=a.name,u=a.variant,p=a.size,o=a.disabled,s=a.readOnly;return h.Children.map(l,(g,f)=>{if(ke(g,[k])){const S=this.value===g.props.value,m=!this.value&&f===0;return Ce(g,{name:i,disabled:o||g.props.disabled,variant:u,size:p,checked:S,onChange:this.handleChange,readOnly:s||g.props.readOnly,width:g.props.width||"auto","aria-describedby":this.hasMessages?this._messagesId:void 0,tabIndex:S||m?0:-1,label:g.props.label})}else return g})}render(){const a=this.props,l=a.variant,i=a.layout,u=a.description;return U.createElement(N,Object.assign({},ae(this.props,oe.allowedProps),ve(this.props,N.allowedProps),{description:u,layout:i==="columns"&&l==="toggle"?"stacked":i,vAlign:l==="toggle"?"middle":"top",rowSpacing:"small",colSpacing:l==="toggle"?"none":"small",startAt:l==="toggle"?"small":void 0,messagesId:this._messagesId,elementRef:this.handleRef}),this.renderChildren())}},x.displayName="RadioInputGroup",x.componentId="RadioInputGroup",x.allowedProps=Ne,x.propTypes=Ue,x.defaultProps={disabled:!1,variant:"simple",size:"medium",layout:"stacked",readOnly:!1},x))||_)||_);const Ve={header:{EN:"Redirect Links",ES_LA:"Enlaces de Redirección",PT_BR:"Links de Redirecionamento",DE:"Weiterleitungslinks"},description:{EN:"This page provides a collection of shortened URLs for use in RFP responses. Each row has a short URL and the original URL. Click on the copy icon and the short URL will be added to your clipboard.",ES_LA:"Esta página proporciona una colección de URL abreviadas para usar en las respuestas a RFP. Cada fila tiene una URL corta y la URL original. Haga clic en la copia y la URL corta se agregará a su portapapeles.",PT_BR:"Esta página fornece uma coleção de URLs abreviados para uso em respostas de RFP. Cada linha possui um URL curto e o URL original. Clique na cópia ícone e o URL curto serão adicionados à sua área de transferência.",DE:"Diese Seite bietet eine Sammlung verkürzter URLs zur Verwendung in RFP-Antworten. Jede Zeile enthält eine Kurz-URL und die Original-URL. Klicken Sie auf die Kopie-Symbol und die Kurz-URL wird Ihrer Zwischenablage hinzugefügt."},filters:{EN:"Filters",ES_LA:"Filtros",PT_BR:"Filtros",DE:"filter"},toggleShow:{EN:"Show filters",ES_LA:"Mostrar filtros",PT_BR:"Mostrar filtros",DE:"Filter anzeigen"},toggleHide:{EN:"Hide filters",ES_LA:"Ocultar filtros",PT_BR:"Ocultar filtros",DE:"Filter ausblenden"},search:{EN:"Search",ES_LA:"Buscar",PT_BR:"Procurar",DE:"Suche"},clearSearch:{EN:"Clear search",ES_LA:"Borrar búsqueda",PT_BR:"Limpar pesquisa",DE:"Suche löschen"},placeholder:{EN:"community",ES_LA:"comunidad",PT_BR:"comunidade",DE:"Gemeinschaft"},brands:{EN:"Brands",ES_LA:"Marcas",PT_BR:"Marcas",DE:"Marken"},products:{EN:"Products",ES_LA:"Productos",PT_BR:"Produtos",DE:"Produkte"},language:{EN:"Language",ES_LA:"Idioma",PT_BR:"Idioma",DE:"Sprache"},title:{EN:"Title",ES_LA:"Título",PT_BR:"Título",DE:"Titel"},link:{EN:"Link",ES_LA:"Enlace",PT_BR:"Link",DE:"Link"},copy:{EN:"Copy",ES_LA:"Copiar",PT_BR:"Copiar",DE:"Kopieren"},copy_url:{EN:"Copy URL to clipboard",ES_LA:"Copiar URL al portapapeles",PT_BR:"Copiar URL para a área de transferência",DE:"Kopieren Sie die URL in die Zwischenablage"},copy_error:{EN:"Error copying to clipboard",ES_LA:"Error al copiar al portapapeles",PT_BR:"Erro ao copiar para a área de transferência",DE:"Fehler beim Kopieren in die Zwischenablage"}};function We(){const e=Le(be().language),a=Re(Ve,e),l=Se.url.replace("https://",""),[i,u]=h.useState({expanded:!1,text:a.toggleShow}),p=()=>{const t=i.expanded?a.toggleShow:a.toggleHide;u({expanded:!i.expanded,text:t})},[o,s]=h.useState(""),g=(t,d)=>{t.preventDefault(),s(d),B(m,d,D,P)},f=t=>{t.stopPropagation(),g(t,"")},S=()=>o.search.length?r.jsx(K,{type:"button",size:"small",withBackground:!1,withBorder:!1,screenReaderLabel:a.clearSearch,onClick:f,children:r.jsx(De,{})}):null,[m,E]=h.useState([e]),F=(t,d)=>{t.preventDefault();const c=[];d==="all"?(c.push(...q),$(t,"all")):c.push(...q.filter(C=>C.toUpperCase().includes(d.toUpperCase()))),E(c),B(c,o,D,P)},[P,te]=h.useState("all"),[j,se]=h.useState(z),$=(t,d)=>{t.preventDefault(),d==="all"||z.includes(d)?te(d):console.error(`Invalid value for setActiveProduct: ${d}`),B(m,o,D,d)},[W,ne]=h.useState("all"),[D,de]=h.useState(O),ce=(t,d)=>{t.preventDefault();const c=[];d==="all"?c.push("AWS",...O):c.push(...["AWS",...O].filter(C=>C.toLowerCase().includes(d.toLowerCase()))),ne(d),de(c),$(t,"all"),se(c),B(m,o,c,"all")},[ue,ge]=h.useState({list:Z.map(t=>({...t,links:t.links.filter(d=>d.lang.toUpperCase()===e)}))}),B=(t,d,c,C)=>{const he=Z.map(v=>({...v,links:v.links.filter(H=>`${`${v.brand} ${H.title}`}`.toLowerCase().includes(d.toLowerCase())).filter(H=>t.includes(H.lang.toUpperCase()))})).filter(v=>v.links.length>0).filter(v=>c.includes(v.brand)).filter(v=>C!=="all"?v.brand===j[0]||v.brand===C:!0);ge({list:he})};async function pe(t){try{await navigator.clipboard.writeText(t)}catch(d){let c=a.copy_error;d instanceof Error?c=d.message:typeof d=="string"&&(c=d),console.error(c)}}return r.jsxs(r.Fragment,{children:[r.jsx(Ee,{language:e}),r.jsxs(I,{id:"main",as:"div",padding:"medium medium xx-large",minWidth:"20rem",maxWidth:"59.25rem",margin:"0 auto",children:[r.jsxs(I,{as:"div",margin:"none none x-large",children:[r.jsx(G,{level:"h1",children:a.header}),r.jsx(A,{as:"p",children:a.description}),r.jsx(Fe,{onClick:p,children:i.text}),r.jsx(Pe,{id:"toggleFilters",summary:a.filters,onToggle:p,expanded:i.expanded,children:r.jsx(I,{as:"div",margin:"large none none",children:r.jsx("form",{name:"searchFilters",autoComplete:"off",children:r.jsxs(N,{label:"",description:"",layout:"stacked",children:[r.jsx(je,{type:"search",renderLabel:a.search,placeholder:a.placeholder,onChange:g,renderBeforeInput:r.jsx($e,{inline:!1}),renderAfterInput:S,value:o}),r.jsxs(M,{name:"brand",description:a.brands,defaultValue:"all",layout:"columns",variant:"toggle",onChange:ce,children:[r.jsx(k,{value:"all",label:"All",context:"off"},"all"),["AWS",...z].map(t=>r.jsx(k,{value:t,label:t,context:"off"},t))]}),W!=="all"&&j.length>1&&r.jsxs(M,{name:"product",description:a.products,defaultValue:"all",layout:"columns",variant:"toggle",onChange:$,children:[r.jsx(k,{value:"all",label:"All",context:"off",id:"allProducts",checked:P==="all"},"all"),j.filter(t=>t!==W).map(t=>r.jsx(k,{value:t,label:t,context:"off"},t))]}),r.jsxs(M,{name:"language",description:a.language,defaultValue:e,layout:"columns",variant:"toggle",onChange:F,children:[r.jsx(k,{value:"all",label:"All",context:"off"},"all"),we.map(t=>r.jsx(k,{value:t.code,label:t.local,context:"off"},t.code))]})]})})})})]}),ue.list.map(t=>{if(t.links.length){const d=t.brand;return r.jsxs(I,{as:"div",margin:"none none xx-large",children:[r.jsx(G,{level:z.includes(d)?"h2":"h3",id:d,children:d}),r.jsxs(b,{hover:!0,caption:d,children:[r.jsx(b.Head,{children:r.jsxs(b.Row,{children:[r.jsx(b.ColHeader,{id:"Title",width:"25%",children:a.title}),r.jsx(b.ColHeader,{id:"URLs",children:a.link})]})}),r.jsx(b.Body,{children:t.links.map(c=>r.jsxs(b.Row,{children:[r.jsx(b.Cell,{children:r.jsx(A,{children:c.title})}),r.jsxs(b.Cell,{children:[r.jsx(Be,{href:`https://${l}${c.from}`,children:`${l}${c.from}`}),"  ",r.jsx(ze,{renderTip:a.copy,on:["hover","focus"],placement:"top",color:"primary-inverse",children:r.jsx(K,{withBackground:!1,withBorder:!1,screenReaderLabel:a.copy_url,onClick:()=>{pe(`https://${l}${c.from}`)},children:r.jsx(R,{})})}),r.jsx("br",{}),r.jsx(A,{size:"small",color:"secondary",children:c.to.split("?")[0]})]})]},c.title))})]})]},d)}return null})]}),r.jsx(Ie,{language:e})]})}We.displayName="Route.Links";function Ze(){const e=h.lazy(()=>me(()=>import("./error-pmzUJ_SX.js"),__vite__mapDeps([0,1,2,3,4])).then(a=>({default:a.Component})));return r.jsx(h.Suspense,{fallback:r.jsx("h1",{children:"Error."}),children:r.jsx(e,{})})}Ze.displayName="Error.Links";export{We as Component,Ze as ErrorBoundary};
