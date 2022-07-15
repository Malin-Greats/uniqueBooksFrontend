(this["webpackJsonpberry-material-react"]=this["webpackJsonpberry-material-react"]||[]).push([[73],{1026:function(e,t,n){"use strict";var a=n(5),c=n(15),r=n(12),i=n(74),o=n(7),s=n.n(o),l=n(0),d=n.n(l),u=n(27),j=n(37),b=n(692),m=n(693),p=n(679),h=n(681),x=n(683),O=n(695),f=n(222),g=n(698),v=n(743),w=n(72),y=n(160),k=n(686),C=n(714),S=n(715),z=n(224),P=n(76),I=n(722),B=n(757),M=n.n(B),D=n(764),H=n.n(D),V=n(1),R=["loginProp"];t.a=function(e){var t=e.loginProp,n=Object(i.a)(e,R),o=Object(j.a)(),l=Object(P.a)().login,B=Object(I.a)(),D=d.a.useState(!0),W=Object(r.a)(D,2),E=W[0],F=W[1],L=d.a.useState(!1),_=Object(r.a)(L,2),A=_[0],q=_[1],J=function(){q(!A)},T=function(e){e.preventDefault()};return Object(V.jsx)(S.b,{initialValues:{email:"",password:"",submit:null},validationSchema:C.d().shape({password:C.f().max(255).required("Password is required")}),onSubmit:function(){var e=Object(c.a)(s.a.mark((function e(t,n){var a,c,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.setErrors,c=n.setStatus,r=n.setSubmitting,e.prev=1,e.next=4,l(t.email,t.password);case 4:alert(t.email),B.current&&(c({success:!0}),r(!1)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0),B.current&&(c({success:!1}),a({submit:e.t0.message}),r(!1));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var c=e.errors,r=e.handleBlur,i=e.handleChange,s=e.handleSubmit,l=e.isSubmitting,d=e.touched,j=e.values;return Object(V.jsxs)("form",Object(a.a)(Object(a.a)({noValidate:!0,onSubmit:s},n),{},{children:[Object(V.jsxs)(b.a,{fullWidth:!0,sx:Object(a.a)({},o.typography.customInput),children:[Object(V.jsx)(m.a,{htmlFor:"outlined-adornment-email-login",children:"Username"}),Object(V.jsx)(p.a,{id:"outlined-adornment-email-login",type:"text",value:j.email,name:"email",fullWidth:!0,onBlur:r,onChange:i,inputProps:{}})]}),Object(V.jsxs)(b.a,{fullWidth:!0,error:Boolean(d.password&&c.password),sx:Object(a.a)({},o.typography.customInput),children:[Object(V.jsx)(m.a,{htmlFor:"outlined-adornment-password-login",children:"Password"}),Object(V.jsx)(p.a,{id:"outlined-adornment-password-login",type:A?"text":"password",value:j.password,name:"password",onBlur:r,onChange:i,endAdornment:Object(V.jsx)(h.a,{position:"end",children:Object(V.jsx)(x.a,{"aria-label":"toggle password visibility",onClick:J,onMouseDown:T,edge:"end",size:"large",children:A?Object(V.jsx)(M.a,{}):Object(V.jsx)(H.a,{})})}),inputProps:{},label:"Password"}),d.password&&c.password&&Object(V.jsx)(O.a,{error:!0,id:"standard-weight-helper-text-password-login",children:c.password})]}),Object(V.jsxs)(f.a,{container:!0,alignItems:"center",justifyContent:"space-between",children:[Object(V.jsx)(f.a,{item:!0,children:Object(V.jsx)(g.a,{control:Object(V.jsx)(v.a,{checked:E,onChange:function(e){return F(e.target.checked)},name:"checked",color:"primary"}),label:"Keep me logged in"})}),Object(V.jsx)(f.a,{item:!0,children:Object(V.jsx)(w.a,{variant:"subtitle1",component:u.b,to:t?"/pages/forgot-password/forgot-password".concat(t):"/pages/forgot-password/forgot-password3",color:"secondary",sx:{textDecoration:"none"},children:"Forgot Password?"})})]}),c.submit&&Object(V.jsx)(y.a,{sx:{mt:3},children:Object(V.jsx)(O.a,{error:!0,children:c.submit})}),Object(V.jsx)(y.a,{sx:{mt:2},children:Object(V.jsx)(z.a,{children:Object(V.jsx)(k.a,{color:"secondary",disabled:l,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Sign In"})})})]}))}})}},1906:function(e,t,n){"use strict";n.r(t);var a=n(27),c=n(8),r=n(37),i=n(649),o=n(222),s=n(653),l=n(72),d=n(271),u=n(740),j=n(713),b=n(1026),m=n(277),p=n(846),h=n(742),x=n.p+"static/media/auth-blue-card.21877993.svg",O=n.p+"static/media/auth-purple-card.f8fb8b2f.svg",f=n(1),g=Object(c.a)("span")({"&:after":{content:'""',position:"absolute",top:"32%",left:"40%",width:313,backgroundSize:380,height:280,backgroundImage:"url(".concat(O,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",animation:"15s wings ease-in-out infinite"},"&:before":{content:'""',position:"absolute",top:"23%",left:"37%",width:243,height:210,backgroundSize:380,backgroundImage:"url(".concat(x,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",animation:"15s wings ease-in-out infinite",animationDelay:"1s"}}),v=[{title:"Components Based Design System",description:"Powerful and easy to use multipurpose theme"},{title:"Components Based Design System",description:"Powerful and easy to use multipurpose theme"},{title:"Components Based Design System",description:"Powerful and easy to use multipurpose theme"}];t.default=function(){var e=Object(r.a)(),t=Object(i.a)(e.breakpoints.down("md"));return Object(f.jsx)(u.a,{children:Object(f.jsxs)(o.a,{container:!0,justifyContent:"space-between",alignItems:"center",sx:{minHeight:"100vh"},children:[Object(f.jsx)(o.a,{item:!0,container:!0,justifyContent:"center",md:6,lg:7,sx:{my:3},children:Object(f.jsx)(j.a,{children:Object(f.jsxs)(o.a,{container:!0,spacing:2,justifyContent:"center",children:[Object(f.jsx)(o.a,{item:!0,xs:12,children:Object(f.jsxs)(o.a,{container:!0,direction:t?"column-reverse":"row",alignItems:t?"center":"inherit",justifyContent:t?"center":"space-between",children:[Object(f.jsx)(o.a,{item:!0,children:Object(f.jsxs)(s.a,{justifyContent:t?"center":"flex-start",textAlign:t?"center":"inherit",children:[Object(f.jsx)(l.a,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Hi, Welcome Back"}),Object(f.jsx)(l.a,{color:"textPrimary",gutterBottom:!0,variant:"h4",children:"Login in to your account"})]})}),Object(f.jsx)(o.a,{item:!0,sx:{mb:{xs:3,sm:0}},children:Object(f.jsx)(a.b,{to:"#",children:Object(f.jsx)(m.a,{})})})]})}),Object(f.jsx)(o.a,{item:!0,xs:12,children:Object(f.jsx)(b.a,{loginProp:1})}),Object(f.jsx)(o.a,{item:!0,xs:12,children:Object(f.jsx)(d.a,{})}),Object(f.jsx)(o.a,{item:!0,xs:12,children:Object(f.jsx)(o.a,{item:!0,container:!0,direction:"column",alignItems:"flex-end",xs:12,children:Object(f.jsx)(l.a,{component:a.b,to:"/pages/register/register1",variant:"subtitle1",sx:{textDecoration:"none"},children:"Don't have an account?"})})})]})})}),Object(f.jsx)(o.a,{item:!0,md:6,lg:5,sx:{position:"relative",alignSelf:"stretch",display:{xs:"none",md:"block"}},children:Object(f.jsx)(p.a,{children:Object(f.jsxs)(o.a,{item:!0,container:!0,alignItems:"flex-end",justifyContent:"center",spacing:3,children:[Object(f.jsxs)(o.a,{item:!0,xs:12,children:[Object(f.jsx)("span",{}),Object(f.jsx)(g,{})]}),Object(f.jsx)(o.a,{item:!0,xs:12,children:Object(f.jsx)(o.a,{item:!0,container:!0,justifyContent:"center",sx:{pb:8},children:Object(f.jsx)(o.a,{item:!0,xs:10,lg:8,sx:{"& .slick-list":{pb:2}},children:Object(f.jsx)(h.a,{items:v})})})})]})})})]})})}},713:function(e,t,n){"use strict";var a=n(5),c=n(74),r=n(160),i=n(135),o=n(1),s=["children"];t.a=function(e){var t=e.children,n=Object(c.a)(e,s);return Object(o.jsx)(i.a,Object(a.a)(Object(a.a)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},n),{},{children:Object(o.jsx)(r.a,{sx:{p:{xs:2,sm:3,xl:5}},children:t})}))}},722:function(e,t,n){"use strict";var a=n(0);t.a=function(){var e=Object(a.useRef)(!0);return Object(a.useEffect)((function(){return function(){e.current=!1}}),[]),e}},740:function(e,t,n){"use strict";var a=n(8),c=Object(a.a)("div")((function(e){var t=e.theme;return{backgroundColor:"dark"===t.palette.mode?t.palette.background.default:t.palette.primary.light,minHeight:"100vh"}}));t.a=c},742:function(e,t,n){"use strict";var a=n(5),c=n(222),r=n(72),i=n(760),o=n.n(i),s=n(1);t.a=function(e){var t=e.items;return Object(s.jsx)(o.a,Object(a.a)(Object(a.a)({},{autoplay:!0,arrows:!1,dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),{},{children:t.map((function(e,t){return Object(s.jsxs)(c.a,{container:!0,direction:"column",alignItems:"center",spacing:3,textAlign:"center",children:[Object(s.jsx)(c.a,{item:!0,children:Object(s.jsx)(r.a,{variant:"h1",children:e.title})}),Object(s.jsx)(c.a,{item:!0,children:Object(s.jsx)(r.a,{variant:"subtitle2",children:e.description})})]},t)}))}))}},743:function(e,t,n){"use strict";var a=n(4),c=n(9),r=n(2),i=n(0),o=n(103),s=n(86),l=n(185),d=n(39),u=n(1),j=Object(d.a)(Object(u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),b=Object(d.a)(Object(u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=Object(d.a)(Object(u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=n(10),h=n(13),x=n(8),O=n(71),f=n(84);function g(e){return Object(O.a)("MuiCheckbox",e)}var v=Object(f.a)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),w=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],y=Object(x.a)(l.a,{shouldForwardProp:function(e){return Object(x.b)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.indeterminate&&t.indeterminate,"default"!==n.color&&t["color".concat(Object(p.a)(n.color))]]}})((function(e){var t,n=e.theme,c=e.ownerState;return Object(r.a)({color:n.palette.text.secondary},!c.disableRipple&&{"&:hover":{backgroundColor:Object(s.a)("default"===c.color?n.palette.action.active:n.palette[c.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==c.color&&(t={},Object(a.a)(t,"&.".concat(v.checked,", &.").concat(v.indeterminate),{color:n.palette[c.color].main}),Object(a.a)(t,"&.".concat(v.disabled),{color:n.palette.action.disabled}),t))})),k=Object(u.jsx)(b,{}),C=Object(u.jsx)(j,{}),S=Object(u.jsx)(m,{}),z=i.forwardRef((function(e,t){var n,a,s=Object(h.a)({props:e,name:"MuiCheckbox"}),l=s.checkedIcon,d=void 0===l?k:l,j=s.color,b=void 0===j?"primary":j,m=s.icon,x=void 0===m?C:m,O=s.indeterminate,f=void 0!==O&&O,v=s.indeterminateIcon,z=void 0===v?S:v,P=s.inputProps,I=s.size,B=void 0===I?"medium":I,M=Object(c.a)(s,w),D=f?z:x,H=f?z:d,V=Object(r.a)({},s,{color:b,indeterminate:f,size:B}),R=function(e){var t=e.classes,n=e.indeterminate,a=e.color,c={root:["root",n&&"indeterminate","color".concat(Object(p.a)(a))]},i=Object(o.a)(c,g,t);return Object(r.a)({},t,i)}(V);return Object(u.jsx)(y,Object(r.a)({type:"checkbox",inputProps:Object(r.a)({"data-indeterminate":f},P),icon:i.cloneElement(D,{fontSize:null!=(n=D.props.fontSize)?n:B}),checkedIcon:i.cloneElement(H,{fontSize:null!=(a=H.props.fontSize)?a:B}),ownerState:V,ref:t},M,{classes:R}))}));t.a=z},757:function(e,t,n){"use strict";var a=n(94);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a(n(113)),r=n(1),i=(0,c.default)((0,r.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.default=i},764:function(e,t,n){"use strict";var a=n(94);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a(n(113)),r=n(1),i=(0,c.default)((0,r.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");t.default=i},846:function(e,t,n){"use strict";var a=n(37),c=n(160),r=n.p+"static/media/auth-pattern.d80b0e94.svg",i=n.p+"static/media/auth-pattern-dark.df61463d.svg",o=n(1);t.a=function(e){var t=e.children,n=Object(a.a)();return Object(o.jsx)(c.a,{component:"span",sx:{display:"flex",minHeight:"100vh",bgcolor:"dark"===n.palette.mode?n.palette.dark.dark:"#fff",backgroundImage:"dark"===n.palette.mode?"url(".concat(i,")"):"url(".concat(r,")"),position:"absolute",backgroundPosition:"0 0",overflow:"hidden",m:"0 0 0 auto",top:0,left:0,right:0,bottom:0,opacity:"dark"===n.palette.mode?.85:.9},children:t})}}}]);
//# sourceMappingURL=73.78e7b812.chunk.js.map