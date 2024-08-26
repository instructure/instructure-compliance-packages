import{P as t,T as re,w as D,t as E,r as y,h as ae,p as de,R as $,S as I,s as H,o as W,i as h,n as oe,Y as ce}from"./index-Co1on5ja.js";import{b as ue,F as A}from"./index-DUk1PrHv.js";import{w as ge,k as pe,B as he,i as L,p as fe,l as ie,m as ve,s as be,A as me,a3 as ye}from"./RenderTopNavBar-BjY6S8Vl.js";const Se={children:t.node,type:t.oneOf(["button","submit","reset"]),size:t.oneOf(["small","medium","large"]),elementRef:t.func,as:t.elementType,interaction:t.oneOf(["enabled","disabled","readonly"]),color:t.oneOf(["primary","primary-inverse","secondary","success","danger"]),focusColor:t.oneOf(["info","inverse"]),display:t.oneOf(["inline-block","block"]),textAlign:t.oneOf(["start","center"]),withBackground:t.bool,margin:re.spacing,cursor:t.string,href:t.string,renderIcon:t.oneOfType([t.node,t.func]),onClick:t.func},xe=["as","children","color","cursor","display","elementRef","focusColor","href","interaction","margin","renderIcon","size","textAlign","type","withBackground","onClick"],_e=["children","type","size","as","color","focusColor","display","textAlign","withBackground","margin","cursor","href","renderIcon"];var V,N,F,S;let Ce=(V=D(null,ge),N=E(),V(F=N(F=(S=class extends y.Component{constructor(...e){super(...e),this._buttonComponent=null,this.ref=null,this.handleElementRef=i=>{const l=this.props.elementRef;this.ref=i,typeof l=="function"&&l(i)},this.handleButtonRef=i=>{this._buttonComponent=i}}get focused(){return this._buttonComponent&&this._buttonComponent.focused}focus(){this._buttonComponent&&this._buttonComponent.focus()}render(){const e=this.props,i=e.children,l=e.type,n=e.size,a=e.as,d=e.color,s=e.focusColor,r=e.display,c=e.textAlign,f=e.withBackground,v=e.margin,b=e.cursor,p=e.href,u=e.renderIcon,m=ae(e,_e),w=pe({props:m}),g=this.props.themeOverride,M={...de(m),type:l,size:n,elementRef:this.handleElementRef,ref:this.handleButtonRef,as:a,color:d,interaction:w,focusColor:s,display:r,textAlign:c,withBackground:f,margin:v,cursor:b,href:p,renderIcon:u,themeOverride:g};return $.createElement(he,M,i)}},S.displayName="Button",S.componentId="Button",S.propTypes=Se,S.allowedProps=xe,S.defaultProps={type:"button",size:"medium",as:"button",interaction:void 0,color:"secondary",display:"inline-block",textAlign:"center",withBackground:!0,margin:"0",cursor:"pointer"},S))||F)||F);var j;class B extends y.Component{constructor(...e){super(...e),this.ref=null,this.handleRef=i=>{const l=this.props.elementRef;this.ref=i,typeof l=="function"&&l(i)}}render(){return $.createElement(I,Object.assign({},this.props,{name:"IconCopy",viewBox:"0 0 1920 1920",elementRef:this.handleRef}),j||(j=$.createElement("path",{d:"M0 1919.887h1467.88V452.008H0v1467.88ZM1354.965 564.922v1242.051H112.914V564.922h1242.051ZM1920 0v1467.992h-338.741v-113.027h225.827V112.914H565.035V338.74H452.008V0H1920ZM338.741 1016.93h790.397V904.016H338.74v112.914Zm0 451.062h790.397v-113.027H338.74v113.027Zm0-225.588h564.57v-112.913H338.74v112.913Z",fillRule:"evenodd"})))}}B.glyphName="copy";B.variant="Line";B.displayName="IconCopyLine";B.propTypes={...I.propTypes};B.allowedProps=[...I.allowedProps];var G;class R extends y.Component{constructor(...e){super(...e),this.ref=null,this.handleRef=i=>{const l=this.props.elementRef;this.ref=i,typeof l=="function"&&l(i)}}render(){return $.createElement(I,Object.assign({},this.props,{name:"IconX",viewBox:"0 0 1920 1920",elementRef:this.handleRef}),G||(G=$.createElement("path",{d:"M797.32 985.882 344.772 1438.43l188.561 188.562 452.549-452.549 452.548 452.549 188.562-188.562-452.549-452.548 452.549-452.549-188.562-188.561L985.882 797.32 533.333 344.772 344.772 533.333z"})))}}R.glyphName="x";R.variant="Solid";R.displayName="IconXSolid";R.propTypes={...I.propTypes};R.allowedProps=[...I.allowedProps];const ke={expanded:L(t.bool,"onToggle","defaultExpanded"),defaultExpanded:t.bool,onToggle:t.func,children:t.func,render:t.func},ze=["expanded","defaultExpanded","onToggle","children","render"];var Z,q,k;const $e=({expanded:o})=>({expanded:!o});let X=(Z=H(),Z(q=(k=class extends y.Component{constructor(e){super(e),this._contentId=void 0,this.handleToggle=i=>{this.isControlled()||this.setState($e),this.props.onToggle(i,!this.expanded)},this.state={expanded:this.isControlled(e)?e.expanded:e.defaultExpanded},this._contentId=e.deterministicId()}get expanded(){return this.isControlled()?this.props.expanded:this.state.expanded}isControlled(e=this.props){return typeof e.expanded=="boolean"}static getDerivedStateFromProps(e,i){return typeof e.expanded=="boolean"&&e.expanded!==i.expanded?{expanded:e.expanded}:null}render(){const e=this.props,i=e.children,l=e.render,n=l===void 0?i:l;return typeof n=="function"?n({expanded:this.expanded,getToggleProps:(a={})=>({"aria-controls":this._contentId,"aria-expanded":this.expanded,onClick:fe(this.handleToggle,a.onClick),...a}),getDetailsProps:()=>({id:this._contentId})}):null}},k.displayName="Expandable",k.propTypes=ke,k.allowedProps=ze,k.defaultProps={defaultExpanded:!1,onToggle:function(){},children:null},k))||q);const Ie=(o,e)=>{const i=e.disabled,l=e.variant,n=e.context,a=e.size,d=e.inline,s=p=>`[class$=-radioInput__input]:${p} + [class$=-radioInput__control] &`,r={success:{backgroundColor:o.toggleBackgroundSuccess},danger:{backgroundColor:o.toggleBackgroundDanger},warning:{backgroundColor:o.toggleBackgroundWarning},off:{backgroundColor:o.toggleBackgroundOff}},c={simple:{base:{boxSizing:"border-box",display:"block",position:"relative",marginInlineEnd:o.simpleFacadeMarginEnd,marginInlineStart:"0",flexShrink:0,minWidth:"1rem",transition:"all 0.2s ease-out",borderRadius:"100%",border:`${o.borderWidth} solid ${o.borderColor}`,background:o.background,"&::before":{content:'""',position:"absolute",top:"-0.375rem",left:"-0.375rem",width:"calc(100% + 0.75rem)",height:"calc(100% + 0.75rem)",boxSizing:"border-box",borderRadius:"100%",border:`${o.focusBorderWidth} ${o.focusBorderStyle} ${o.focusBorderColor}`,transition:"all 0.2s",transform:"scale(0.75)",opacity:0,pointerEvents:"none"},[s("hover")]:{borderColor:o.hoverBorderColor},[s("focus")]:{background:o.background,"&::before":{transform:"scale(1)",opacity:1}}},small:{width:o.simpleFacadeSmallSize,height:o.simpleFacadeSmallSize,[s("checked")]:{background:o.background,boxShadow:`inset 0 0 0 ${o.simpleCheckedInsetSmall} ${o.hoverBorderColor}`,borderColor:o.hoverBorderColor}},medium:{width:o.simpleFacadeMediumSize,height:o.simpleFacadeMediumSize,[s("checked")]:{background:o.background,boxShadow:`inset 0 0 0 ${o.simpleCheckedInsetMedium} ${o.hoverBorderColor}`,borderColor:o.hoverBorderColor}},large:{width:o.simpleFacadeLargeSize,height:o.simpleFacadeLargeSize,[s("checked")]:{background:o.background,boxShadow:`inset 0 0 0 ${o.simpleCheckedInsetLarge} ${o.hoverBorderColor}`,borderColor:o.hoverBorderColor}}},toggle:{base:{boxSizing:"border-box",visibility:"hidden",display:"block",position:"absolute",zIndex:1,top:"0",left:"0",width:"100%",height:"100%",boxShadow:o.toggleShadow,borderRadius:o.toggleBorderRadius,...r[n],"&::before":{content:'""',position:"absolute",top:"-0.25rem",left:"-0.25rem",width:"calc(100% + 0.5rem)",height:"calc(100% + 0.5rem)",boxSizing:"border-box",borderRadius:`calc(${o.toggleBorderRadius} + 0.0625rem)`,border:`${o.focusBorderWidth} ${o.focusBorderStyle} ${o.focusBorderColor}`,transition:"all 0.2s",transform:"scale(0.75)",opacity:0},[s("checked")]:{visibility:"visible"},[s("focus")]:{"&::before":{opacity:1,transform:"scale(1)"}}},small:{},medium:{},large:{}}},f={simple:{base:{display:"flex",alignItems:"flex-start"},small:{},medium:{},large:{}},toggle:{base:{display:"block",userSelect:"none",boxSizing:"border-box",position:"relative"},small:{padding:"0 0.5rem",height:o.toggleSmallHeight},medium:{padding:"0 0.875rem",height:o.toggleMediumHeight},large:{padding:"0 1rem",height:o.toggleLargeHeight}}},v={simple:{base:{},small:{fontSize:o.simpleFontSizeSmall},medium:{fontSize:o.simpleFontSizeMedium},large:{fontSize:o.simpleFontSizeLarge}},toggle:{base:{position:"relative",zIndex:1,textTransform:"uppercase",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",lineHeight:1,display:"flex",alignItems:"center",minWidth:"0.0625rem",[s("checked")]:{color:o.toggleHandleText},[s("focus")]:{textDecoration:"underline"}},small:{fontSize:o.toggleSmallFontSize,height:o.toggleSmallHeight,svg:{fontSize:`calc(${o.toggleSmallFontSize} + 0.375rem)`}},medium:{fontSize:o.toggleMediumFontSize,height:o.toggleMediumHeight,svg:{fontSize:`calc(${o.toggleMediumFontSize} + 0.375rem)`}},large:{fontSize:o.toggleLargeFontSize,height:o.toggleLargeHeight,svg:{fontSize:`calc(${o.toggleLargeFontSize} + 0.375rem)`}}}},b={padding:"0",margin:"0",fontSize:"inherit",lineHeight:"inherit",width:"auto",position:"absolute",top:"0",left:"0",opacity:1e-4};return{radioInput:{label:"radioInput",position:"relative",width:"100%",...i&&{opacity:.5},...d&&{display:"inline-block",verticalAlign:"middle",width:"auto"},"&:hover":{cursor:"default",...i&&{cursor:"not-allowed"}}},input:{label:"radioInput__input",...b,'&:is(input)[type="radio"]':b,'&:-webkit-any(input)[type="radio"]':b},control:{label:"radioInput__control",all:"initial",display:"block",direction:"inherit",textAlign:"start",...f[l].base,...f[l][a]},facade:{label:"radioInput__facade",...c[l].base,...c[l][a]},label:{label:"radioInput__label",flex:"1 1 auto",color:o.labelColor,fontFamily:o.labelFontFamily,fontWeight:o.labelFontWeight,lineHeight:o.labelLineHeight,...v[l].base,...v[l][a],cursor:"default"}}},we=o=>{var e,i,l,n,a,d,s,r,c,f,v;const b=o.spacing,p=o.borders,u=o.colors,m=o.forms,w=o.shadows,g=o.typography,M=o.key,ne={canvas:{focusBorderColor:o["ic-brand-primary"],hoverBorderColor:o["ic-brand-font-color-dark"],labelColor:o["ic-brand-font-color-dark"]},"canvas-high-contrast":{toggleBackgroundOff:u==null||(e=u.contrasts)===null||e===void 0?void 0:e.grey125125}};return{...{labelColor:u==null||(i=u.contrasts)===null||i===void 0?void 0:i.grey125125,labelFontFamily:g==null?void 0:g.fontFamily,labelFontWeight:g==null?void 0:g.fontWeightNormal,labelLineHeight:g==null?void 0:g.lineHeightCondensed,background:u==null||(l=u.contrasts)===null||l===void 0?void 0:l.white1010,borderWidth:p==null?void 0:p.widthSmall,borderColor:u==null||(n=u.contrasts)===null||n===void 0?void 0:n.grey1214,hoverBorderColor:u==null||(a=u.contrasts)===null||a===void 0?void 0:a.grey125125,controlSize:"0.1875rem",focusBorderColor:u==null||(d=u.contrasts)===null||d===void 0?void 0:d.blue4570,focusBorderWidth:p==null?void 0:p.widthMedium,focusBorderStyle:p==null?void 0:p.style,simpleFacadeSmallSize:"1rem",simpleFacadeMediumSize:"1.25rem",simpleFacadeLargeSize:"1.75rem",simpleCheckedInsetSmall:"0.1875rem",simpleCheckedInsetMedium:"0.25rem",simpleCheckedInsetLarge:"0.375rem",simpleFontSizeSmall:g==null?void 0:g.fontSizeSmall,simpleFontSizeMedium:g==null?void 0:g.fontSizeMedium,simpleFontSizeLarge:g==null?void 0:g.fontSizeLarge,simpleFacadeMarginEnd:b==null?void 0:b.xSmall,toggleBorderRadius:p==null?void 0:p.radiusSmall,toggleBorderWidth:p==null?void 0:p.widthLarge,toggleBackgroundSuccess:u==null||(s=u.contrasts)===null||s===void 0?void 0:s.green4570,toggleBackgroundOff:u==null||(r=u.contrasts)===null||r===void 0?void 0:r.green4570,toggleBackgroundDanger:u==null||(c=u.contrasts)===null||c===void 0?void 0:c.orange4570,toggleBackgroundWarning:u==null||(f=u.contrasts)===null||f===void 0?void 0:f.orange4570,toggleHandleText:u==null||(v=u.contrasts)===null||v===void 0?void 0:v.white1010,toggleSmallHeight:m==null?void 0:m.inputHeightSmall,toggleMediumHeight:m==null?void 0:m.inputHeightMedium,toggleLargeHeight:m==null?void 0:m.inputHeightLarge,toggleShadow:w==null?void 0:w.depth1,toggleSmallFontSize:g==null?void 0:g.fontSizeXSmall,toggleMediumFontSize:g==null?void 0:g.fontSizeSmall,toggleLargeFontSize:g==null?void 0:g.fontSizeMedium},...ne[M]}},Be={label:t.node.isRequired,value:t.oneOfType([t.string,t.number]),id:t.string,name:t.string,checked:t.bool,disabled:t.bool,readOnly:t.bool,variant:t.oneOf(["simple","toggle"]),size:t.oneOf(["small","medium","large"]),context:t.oneOf(["success","warning","danger","off"]),inline:t.bool,onClick:t.func,onChange:t.func},Re=["label","value","id","name","checked","disabled","readOnly","variant","size","context","inline","onClick","onChange"];var U,Y,J,z,x;let Fe=(U=H(),Y=D(Ie,we),J=E(),U(z=Y(z=J(z=(x=class te extends y.Component{constructor(e){super(e),this.ref=null,this._defaultId=void 0,this._input=null,this.handleClick=i=>{if(this.props.disabled||this.props.readOnly){i.preventDefault();return}typeof this.props.onClick=="function"&&this.props.onClick(i)},this.handleChange=i=>{if(this.props.disabled||this.props.readOnly){i.preventDefault();return}typeof this.props.checked>"u"&&this.setState({checked:!this.state.checked}),typeof this.props.onChange=="function"&&this.props.onChange(i)},typeof e.checked>"u"&&(this.state={checked:!1}),this._defaultId=e.deterministicId()}componentDidMount(){var e,i;(e=(i=this.props).makeStyles)===null||e===void 0||e.call(i)}componentDidUpdate(){var e,i;(e=(i=this.props).makeStyles)===null||e===void 0||e.call(i)}focus(){var e;(e=this._input)===null||e===void 0||e.focus()}get id(){return this.props.id||this._defaultId}get focused(){return ie(this._input)}get checked(){return typeof this.props.checked>"u"?this.state.checked:this.props.checked}render(){const e=this.props,i=e.disabled,l=e.readOnly,n=e.label,a=e.value,d=e.name,s=e.styles,r=W(this.props,te.allowedProps);return h("div",{css:s==null?void 0:s.radioInput,ref:c=>{this.ref=c}},h("input",Object.assign({},r,{id:this.id,ref:c=>{this._input=c},value:a,name:d,checked:this.checked,type:"radio",css:s==null?void 0:s.input,disabled:i||l,"aria-disabled":i||l?"true":void 0,onChange:this.handleChange,onClick:this.handleClick})),h("label",{css:s==null?void 0:s.control,htmlFor:this.id},h("span",{css:s==null?void 0:s.facade,"aria-hidden":"true"}),h("span",{css:s==null?void 0:s.label},n)))}},x.displayName="RadioInput",x.componentId="RadioInput",x.allowedProps=Re,x.propTypes=Be,x.defaultProps={variant:"simple",size:"medium",disabled:!1,inline:!1,context:"success",readOnly:!1},x))||z)||z)||z);const Oe={name:t.string.isRequired,description:t.node.isRequired,defaultValue:t.oneOfType([t.string,t.number]),value:L(t.oneOfType([t.string,t.number])),onChange:t.func,disabled:t.bool,readOnly:t.bool,messages:t.arrayOf(ue.message),children:t.node,variant:t.oneOf(["simple","toggle"]),size:t.oneOf(["small","medium","large"]),layout:t.oneOf(["stacked","columns","inline"])},Pe=["name","description","defaultValue","value","onChange","disabled","readOnly","messages","children","variant","size","layout"];var K,Q,O,_;let Ze=(K=H(),Q=E(),K(O=Q(O=(_=class le extends y.Component{constructor(e){super(e),this.ref=null,this._messagesId=void 0,this.handleRef=i=>{this.ref=i},this.handleChange=i=>{const l=i.target.value;if(this.props.disabled||this.props.readOnly){i.preventDefault();return}typeof this.props.value>"u"&&this.setState({value:l}),typeof this.props.onChange=="function"&&this.props.onChange(i,l)},typeof e.value>"u"&&(this.state={value:e.defaultValue}),this._messagesId=e.deterministicId("RadioInputGroup-messages")}get hasMessages(){return!!this.props.messages&&this.props.messages.length>0}get value(){return typeof this.props.value>"u"?this.state.value:this.props.value}renderChildren(){const e=this.props,i=e.children,l=e.name,n=e.variant,a=e.size,d=e.disabled,s=e.readOnly;return y.Children.map(i,(r,c)=>{if(ve(r,[Fe])){const f=this.value===r.props.value,v=!this.value&&c===0;return be(r,{name:l,disabled:d||r.props.disabled,variant:n,size:a,checked:f,onChange:this.handleChange,readOnly:s||r.props.readOnly,width:r.props.width||"auto","aria-describedby":this.hasMessages?this._messagesId:void 0,tabIndex:f||v?0:-1,label:r.props.label})}else return r})}render(){const e=this.props,i=e.variant,l=e.layout,n=e.description;return $.createElement(A,Object.assign({},W(this.props,le.allowedProps),oe(this.props,A.allowedProps),{description:n,layout:l==="columns"&&i==="toggle"?"stacked":l,vAlign:i==="toggle"?"middle":"top",rowSpacing:"small",colSpacing:i==="toggle"?"none":"small",startAt:i==="toggle"?"small":void 0,messagesId:this._messagesId,elementRef:this.handleRef}),this.renderChildren())}},_.displayName="RadioInputGroup",_.componentId="RadioInputGroup",_.allowedProps=Pe,_.propTypes=Oe,_.defaultProps={disabled:!1,variant:"simple",size:"medium",layout:"stacked",readOnly:!1},_))||O)||O);const Ee=ce`
  to {
    opacity: 1;
  }`,Me=(o,e,i)=>{const l=e.fluidWidth,n=e.iconPosition,a=e.size,d=e.variant,s=i.animate,r=n==="end"&&(d==="filled"||l),c=l?{display:"block",width:"100%"}:{},f={start:{marginInlineEnd:o.iconMargin,marginInlineStart:0},end:{marginInlineStart:o.iconMargin,marginInlineEnd:0}},v={small:{fontSize:o.fontSizeSmall},medium:{fontSize:o.fontSizeMedium},large:{fontSize:o.fontSizeLarge}},b={small:{fontSize:o.smallIconSize},medium:{fontSize:o.mediumIconSize},large:{fontSize:o.largeIconSize}},p=n==="start"&&!l?{small:{paddingInlineStart:`calc(${o.smallIconSize} + ${o.togglePadding})`,paddingInlineEnd:"0"},medium:{paddingInlineStart:`calc(${o.mediumIconSize} + ${o.togglePadding})`,paddingInlineEnd:"0"},large:{paddingInlineStart:`calc(${o.largeIconSize} + ${o.togglePadding})`,paddingInlineEnd:"0"}}:{small:{},medium:{},large:{}};return{toggleDetails:{label:"toggleDetails",fontFamily:o.fontFamily,fontWeight:o.fontWeight,lineHeight:o.lineHeight},summary:{label:"toggleDetails__summary",position:"relative",display:"flex",alignItems:"center",boxSizing:"border-box",textAlign:"start"},summaryText:{label:"toggleDetails__summaryText",minWidth:"0.0625rem",flexGrow:1,...r?{flex:1}:{}},toggle:{label:"toggleDetails__toggle",fontFamily:o.fontFamily,appearance:"none",cursor:"pointer",userSelect:"none",touchAction:"manipulation",position:"relative",overflow:"visible",boxSizing:"border-box",padding:"0",margin:"0",outline:"none",border:"none",background:"transparent",color:o.textColor,"&::-moz-focus-inner":{padding:"0",margin:"0"},"&::before":{content:'""',position:"absolute",top:"-0.375rem",left:"-0.375rem",right:"-0.375rem",bottom:"-0.375rem",border:`${o.toggleBorderWidth} ${o.toggleBorderStyle} ${o.toggleFocusBorderColor}`,borderRadius:`calc(${o.toggleBorderRadius} * 1.5)`,opacity:0,pointerEvents:"none"},"&:focus":{"&::before":{opacity:1}},"&:focus, &:hover,  &:active":{textDecoration:"none",color:o.textColor},textDecoration:"none",...c,...v[a]},icon:{label:"toggleDetails__icon","& > svg":{display:"block"},...f[n],...b[a]},details:{label:"toggleDetails__details",boxSizing:"border-box",paddingTop:o.togglePadding,color:o.textColor,...v[a],...p[a]},content:s?{label:"toggleDetails__content",opacity:.01,animationName:Ee,animationFillMode:"forwards",animationDuration:".3s"}:{}}},De=o=>{var e,i,l,n,a;const d=o.colors,s=o.spacing,r=o.borders,c=o.typography,f=o.key,v={canvas:{toggleFocusBorderColor:o["ic-brand-primary"],iconColor:o["ic-brand-font-color-dark"],textColor:o["ic-brand-font-color-dark"]}};return{...{fontFamily:c==null?void 0:c.fontFamily,fontWeight:c==null?void 0:c.fontWeightNormal,lineHeight:c==null?void 0:c.lineHeight,textColor:d==null||(e=d.contrasts)===null||e===void 0?void 0:e.grey125125,fontSizeSmall:c==null?void 0:c.fontSizeSmall,fontSizeMedium:c==null?void 0:c.fontSizeMedium,fontSizeLarge:c==null?void 0:c.fontSizeLarge,smallIconSize:"0.5rem",mediumIconSize:"0.75rem",largeIconSize:"1rem",iconMargin:s==null?void 0:s.xxSmall,iconColor:d==null||(i=d.contrasts)===null||i===void 0?void 0:i.grey125125,togglePadding:s==null?void 0:s.xxSmall,toggleBorderRadius:r==null?void 0:r.radiusMedium,toggleBorderWidth:r==null?void 0:r.widthMedium,toggleBorderStyle:r==null?void 0:r.style,toggleFocusBorderColor:d==null||(l=d.contrasts)===null||l===void 0?void 0:l.blue4570,filledBackgroundColor:d==null||(n=d.contrasts)===null||n===void 0?void 0:n.grey1111,filledBorderWidth:r==null?void 0:r.widthSmall,filledBorderStyle:r==null?void 0:r.style,filledBorderColor:d==null||(a=d.contrasts)===null||a===void 0?void 0:a.grey1214,filledBorderRadius:r==null?void 0:r.radiusMedium,filledPadding:s==null?void 0:s.small},...v[f]}},He={variant:t.oneOf(["default","filled"]),summary:t.node.isRequired,expanded:L(t.bool,"onToggle","defaultExpanded"),defaultExpanded:t.bool,onToggle:t.func,icon:t.func,iconExpanded:t.func,iconPosition:t.oneOf(["start","end"]),fluidWidth:t.bool,children:t.node,size:t.oneOf(["small","medium","large"])},We=["variant","summary","expanded","defaultExpanded","onToggle","icon","iconExpanded","iconPosition","fluidWidth","children","size"];var T,ee,P,C;let qe=(T=D(Me,De),ee=E(),T(P=ee(P=(C=class se extends y.Component{constructor(...e){super(...e),this.ref=null,this._button=null,this.getButtonRef=i=>this._button=i,this.handleToggle=(i,l)=>{var n,a;typeof this.props.onToggle=="function"&&this.props.onToggle(i,l),(n=(a=this.props).makeStyles)===null||n===void 0||n.call(a,{animate:!0})}}get focused(){return ie(this._button)}focus(){var e;(e=this._button)===null||e===void 0||e.focus()}componentDidMount(){var e,i;(e=(i=this.props).makeStyles)===null||e===void 0||e.call(i,{animate:!1})}componentDidUpdate(){var e,i;(e=(i=this.props).makeStyles)===null||e===void 0||e.call(i,{animate:!0})}renderSummary(e){var i,l;const n=this.props,a=n.summary,d=n.iconPosition;return h("span",{css:(i=this.props.styles)===null||i===void 0?void 0:i.summary},d==="start"&&this.renderIcon(e),h("span",{css:(l=this.props.styles)===null||l===void 0?void 0:l.summaryText},a),d==="end"&&this.renderIcon(e))}renderToggle(e,i){const l=this.props.variant,n={...W(this.props,se.allowedProps),...e,children:this.renderSummary(i)},a=this.renderSummary(i);if(l==="filled")return h(Ce,Object.assign({},n,{display:"block",textAlign:"start",elementRef:this.getButtonRef}),a);if(n.href){var d;return h("a",Object.assign({},n,{css:(d=this.props.styles)===null||d===void 0?void 0:d.toggle,ref:this.getButtonRef}),a)}else{var s;return h("button",Object.assign({},n,{type:"button",css:(s=this.props.styles)===null||s===void 0?void 0:s.toggle,ref:this.getButtonRef}),a)}}renderIcon(e){var i;const l=e?this.props.iconExpanded:this.props.icon;return this.props.children&&l?h("span",{css:(i=this.props.styles)===null||i===void 0?void 0:i.icon},h(l,null)):null}renderDetails(e,i){var l;const n=this.props.children,a=e?{display:"block"}:{display:"none"};return h("div",Object.assign({},i,{css:[(l=this.props.styles)===null||l===void 0?void 0:l.details,a]}),n&&e&&this.renderContent())}renderContent(){var e;return h("div",{css:(e=this.props.styles)===null||e===void 0?void 0:e.content},this.props.children)}render(){return h(X,Object.assign({},oe(this.props,X.allowedProps),{onToggle:this.handleToggle}),({expanded:e,getToggleProps:i,getDetailsProps:l})=>{var n;return h("div",{css:(n=this.props.styles)===null||n===void 0?void 0:n.toggleDetails,ref:a=>{this.ref=a}},this.renderToggle(i(),e),this.renderDetails(e,l()))})}},C.displayName="ToggleDetails",C.componentId="ToggleDetails",C.allowedProps=We,C.propTypes=He,C.defaultProps={variant:"default",size:"medium",fluidWidth:!1,icon:me,iconExpanded:ye,iconPosition:"start",defaultExpanded:!1,children:null},C))||P)||P);export{Ce as B,X as E,R as I,Ze as R,qe as T,Fe as a,B as b};
