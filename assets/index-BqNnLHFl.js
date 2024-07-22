import{P as a,T as _,w as z,r as $,i as b,q as B,V as m,o as x}from"./index-CmkGQNo4.js";import{H,n as w}from"./RenderTopNavBar-B8fCCBPQ.js";const O=(e,o)=>{const i=o.size,s=o.href,d=o.onClick,r=o.disabled,c=o.hero,u=o.heading,h=s||d,v={small:{billboard:{padding:e.paddingSmall},hero:{fontSize:"3rem"},message:{fontSize:e.messageFontSizeSmall},heading:{...c&&{margin:`${e.mediumMargin} 0 0`}}},medium:{billboard:{padding:e.paddingMedium},hero:{fontSize:"5rem"},message:{fontSize:e.messageFontSizeMedium},heading:{}},large:{billboard:{padding:e.paddingLarge},hero:{fontSize:"10rem"},message:{fontSize:e.messageFontSizeLarge},heading:{}}},g=h?{appearance:"none",boxSizing:"border-box",cursor:"pointer",userSelect:"none",touchAction:"manipulation",width:"100%",margin:"0",border:`${e.buttonBorderWidth} ${e.buttonBorderStyle} transparent`,borderRadius:e.buttonBorderRadius,background:e.backgroundColor,textDecoration:"none","&:hover":{borderStyle:e.buttonHoverBorderStyle},"&:hover, &:focus":{textDecoration:"none",outline:"none",borderColor:e.iconHoverColor,"& [class$=-billboard__hero]":{color:e.iconHoverColor}},"&:active":{background:e.clickableActiveBg,borderColor:e.iconHoverColor,"& [class$=-billboard__hero], & [class$=-billboard__message]":{color:e.clickableActiveText}}}:{backgroundColor:e.backgroundColor};return{billboard:{label:"billboard",boxSizing:"border-box",position:"relative",fontFamily:e.fontFamily,marginLeft:"auto",marginRight:"auto",textAlign:"center",display:"block",...v[i].billboard,...g,...r&&{cursor:"not-allowed",pointerEvents:"none",opacity:.5}},content:{label:"billboard__content",display:"block"},hero:{label:"billboard__hero",display:"block",color:e.iconColor,...v[i].hero,"& > img, & > svg":{maxWidth:"100%",display:"block",margin:"0 auto"},"& > img":{height:"auto"}},heading:{label:"billboard__heading",display:"block",...c&&{margin:`${e.largeMargin} 0 0`},...v[i].heading},message:{label:"billboard__message",display:"block",color:h?e.messageColorClickable:e.messageColor,...(c||u)&&{margin:`${e.mediumMargin} 0 0`},...v[i].message}}},R=e=>{var o,i,s,d,r,c,u,h,v;const g=e.borders,l=e.colors,n=e.spacing,t=e.typography,k=e.key,C={canvas:{iconHoverColor:e["ic-link-color"],messageColorClickable:e["ic-link-color"],clickableActiveBg:e["ic-brand-primary"]}};return{...{fontFamily:t==null?void 0:t.fontFamily,paddingSmall:n==null?void 0:n.small,paddingMedium:n==null?void 0:n.medium,paddingLarge:n==null?void 0:n.medium,iconColor:l==null||(o=l.contrasts)===null||o===void 0?void 0:o.grey4570,mediumMargin:n==null?void 0:n.small,largeMargin:n==null?void 0:n.medium,iconHoverColor:l==null||(i=l.contrasts)===null||i===void 0?void 0:i.blue4570,backgroundColor:l==null||(s=l.contrasts)===null||s===void 0?void 0:s.white1010,iconHoverColorInverse:l==null||(d=l.contrasts)===null||d===void 0?void 0:d.white1010,buttonBorderWidth:g==null?void 0:g.widthMedium,buttonBorderRadius:g==null?void 0:g.radiusLarge,messageColor:l==null||(r=l.contrasts)===null||r===void 0?void 0:r.blue4570,messageColorClickable:l==null||(c=l.contrasts)===null||c===void 0?void 0:c.blue4570,messageColorInverse:l==null||(u=l.contrasts)===null||u===void 0?void 0:u.grey1111,messageFontSizeSmall:t==null?void 0:t.fontSizeSmall,messageFontSizeMedium:t==null?void 0:t.fontSizeMedium,messageFontSizeLarge:t==null?void 0:t.fontSizeLarge,clickableActiveBg:l==null||(h=l.contrasts)===null||h===void 0?void 0:h.blue4570,clickableActiveText:l==null||(v=l.contrasts)===null||v===void 0?void 0:v.white1010,buttonBorderStyle:g==null?void 0:g.style,buttonHoverBorderStyle:"dashed"},...C[k]}},A={hero:a.oneOfType([a.element,a.func]),size:a.oneOf(["small","medium","large"]),as:a.elementType,elementRef:a.func,heading:a.string,headingAs:a.oneOf(["h1","h2","h3","span"]),headingLevel:a.oneOf(["h1","h2","h3","h4"]),message:a.oneOfType([a.node,a.func]),onClick:a.func,href:a.string,disabled:a.bool,readOnly:a.bool,margin:_.spacing},L=["hero","size","as","elementRef","heading","headingAs","headingLevel","message","onClick","href","disabled","readOnly","margin"];var y,S,p;let V=(y=z(O,R),y(S=(p=class f extends $.Component{constructor(...o){super(...o),this.ref=null,this.handleRef=i=>{const s=this.props.elementRef;this.ref=i,typeof s=="function"&&s(i)},this.handleClick=i=>{const s=this.props,d=s.readOnly,r=s.onClick;d?(i.preventDefault(),i.stopPropagation()):typeof r=="function"&&r(i)}}componentDidMount(){var o,i;(o=(i=this.props).makeStyles)===null||o===void 0||o.call(i)}componentDidUpdate(){var o,i;(o=(i=this.props).makeStyles)===null||o===void 0||o.call(i)}renderHeading(){const o=this.props,i=o.headingLevel,s=o.headingAs,d=o.heading,r=o.styles;return b("span",{css:r==null?void 0:r.heading},b(H,{level:i,as:s,color:"primary"},d))}get SVGIconSize(){const o=this.props.size;return o==="small"?"medium":o==="large"?"x-large":"large"}renderHero(){return typeof this.props.hero=="function"?this.props.hero(this.SVGIconSize):this.props.hero}renderContent(){const o=this.props,i=o.heading,s=o.message,d=o.hero,r=o.styles;return b("span",{css:r==null?void 0:r.content},d&&b("span",{css:r==null?void 0:r.hero},this.renderHero()),i&&this.renderHeading(),s&&b("span",{css:r==null?void 0:r.message},w(s)))}render(){const o=this.props,i=o.href,s=o.disabled,d=o.readOnly,r=o.margin,c=o.styles,u=B(f,this.props);return b(m,{as:"div",margin:r},b(m,Object.assign({},x(this.props,[...f.allowedProps,...m.allowedProps]),{type:u==="button"?"button":void 0,as:u,elementRef:this.handleRef,css:c==null?void 0:c.billboard,href:i,onClick:this.handleClick,disabled:s,"aria-disabled":s||d?"true":void 0}),this.renderContent()))}},p.displayName="Billboard",p.componentId="Billboard",p.propTypes=A,p.allowedProps=L,p.defaultProps={disabled:!1,readOnly:!1,size:"medium",headingAs:"span",headingLevel:"h1",as:"span",elementRef:()=>{}},p))||S);export{V as B};
