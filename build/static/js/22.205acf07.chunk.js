(this["webpackJsonpberry-material-react"]=this["webpackJsonpberry-material-react"]||[]).push([[22],{1028:function(e,t,n){"use strict";var a=n(5),r=n(15),i=n(7),c=n.n(i),s=n(37),l=n(692),o=n(693),d=n(679),j=n(695),b=n(160),u=n(686),m=n(6),h=n(25),x=n(714),O=n(715),p=n(224),f=n(76),g=n(722),v=n(184),y=n(1);t.a=function(e){var t=Object.assign({},e),n=Object(s.a)(),i=Object(g.a)(),w=Object(m.d)(),k=Object(h.e)(),C=Object(f.a)().resetPassword;return Object(y.jsx)(O.b,{initialValues:{email:"",password:"",submit:null},validationSchema:x.d().shape({email:x.f().email("Must be a valid email").max(255).required("Email is required")}),onSubmit:function(){var e=Object(r.a)(c.a.mark((function e(t,n){var a,r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.setErrors,r=n.setStatus,s=n.setSubmitting,e.prev=1,e.next=4,C(t.email);case 4:i.current&&(r({success:!0}),s(!1),w(Object(v.c)({open:!0,message:"Check mail for reset password link",variant:"alert",alert:{color:"success"},close:!1})),setTimeout((function(){k("/login",{replace:!0})}),1500)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0),i.current&&(r({success:!1}),a({submit:e.t0.message}),s(!1));case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var r=e.errors,i=e.handleBlur,c=e.handleChange,s=e.handleSubmit,m=e.isSubmitting,h=e.touched,x=e.values;return Object(y.jsxs)("form",Object(a.a)(Object(a.a)({noValidate:!0,onSubmit:s},t),{},{children:[Object(y.jsxs)(l.a,{fullWidth:!0,error:Boolean(h.email&&r.email),sx:Object(a.a)({},n.typography.customInput),children:[Object(y.jsx)(o.a,{htmlFor:"outlined-adornment-email-forgot",children:"Email Address / Username"}),Object(y.jsx)(d.a,{id:"outlined-adornment-email-forgot",type:"email",value:x.email,name:"email",onBlur:i,onChange:c,label:"Email Address / Username",inputProps:{}}),h.email&&r.email&&Object(y.jsx)(j.a,{error:!0,id:"standard-weight-helper-text-email-forgot",children:r.email})]}),r.submit&&Object(y.jsx)(b.a,{sx:{mt:3},children:Object(y.jsx)(j.a,{error:!0,children:r.submit})}),Object(y.jsx)(b.a,{sx:{mt:2},children:Object(y.jsx)(p.a,{children:Object(y.jsx)(u.a,{disableElevation:!0,disabled:m,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Send Mail"})})})]}))}})}},1844:function(e,t,n){"use strict";n.r(t);var a=n(27),r=n(37),i=n(649),c=n(222),s=n(72),l=n(271),o=n(740),d=n(713),j=n(277),b=n(1028),u=n(741),m=n(76),h=n(1);t.default=function(){var e=Object(r.a)(),t=Object(m.a)().isLoggedIn,n=Object(i.a)(e.breakpoints.down("md"));return Object(h.jsx)(o.a,{children:Object(h.jsxs)(c.a,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[Object(h.jsx)(c.a,{item:!0,xs:12,children:Object(h.jsx)(c.a,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:Object(h.jsx)(c.a,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:Object(h.jsx)(d.a,{children:Object(h.jsxs)(c.a,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[Object(h.jsx)(c.a,{item:!0,sx:{mb:3},children:Object(h.jsx)(a.b,{to:"#",children:Object(h.jsx)(j.a,{})})}),Object(h.jsx)(c.a,{item:!0,xs:12,children:Object(h.jsxs)(c.a,{container:!0,alignItems:"center",justifyContent:"center",textAlign:"center",spacing:2,children:[Object(h.jsx)(c.a,{item:!0,xs:12,children:Object(h.jsx)(s.a,{color:e.palette.secondary.main,gutterBottom:!0,variant:n?"h3":"h2",children:"Forgot password?"})}),Object(h.jsx)(c.a,{item:!0,xs:12,children:Object(h.jsx)(s.a,{variant:"caption",fontSize:"16px",textAlign:"center",children:"Enter your email address below and we'll send you password reset OTP."})})]})}),Object(h.jsx)(c.a,{item:!0,xs:12,children:Object(h.jsx)(b.a,{})}),Object(h.jsx)(c.a,{item:!0,xs:12,children:Object(h.jsx)(l.a,{})}),Object(h.jsx)(c.a,{item:!0,xs:12,children:Object(h.jsx)(c.a,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:Object(h.jsx)(s.a,{component:a.b,to:t?"/pages/login/login3":"/login",variant:"subtitle1",sx:{textDecoration:"none"},children:"Already have an account?"})})})]})})})})}),Object(h.jsx)(c.a,{item:!0,xs:12,sx:{m:3,mt:1},children:Object(h.jsx)(u.a,{})})]})})}},713:function(e,t,n){"use strict";var a=n(5),r=n(74),i=n(160),c=n(135),s=n(1),l=["children"];t.a=function(e){var t=e.children,n=Object(r.a)(e,l);return Object(s.jsx)(c.a,Object(a.a)(Object(a.a)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},n),{},{children:Object(s.jsx)(i.a,{sx:{p:{xs:2,sm:3,xl:5}},children:t})}))}},722:function(e,t,n){"use strict";var a=n(0);t.a=function(){var e=Object(a.useRef)(!0);return Object(a.useEffect)((function(){return function(){e.current=!1}}),[]),e}},740:function(e,t,n){"use strict";var a=n(8),r=Object(a.a)("div")((function(e){var t=e.theme;return{backgroundColor:"dark"===t.palette.mode?t.palette.background.default:t.palette.primary.light,minHeight:"100vh"}}));t.a=r},741:function(e,t,n){"use strict";var a=n(653),r=n(72),i=n(678),c=n(1);t.a=function(){return Object(c.jsxs)(a.a,{direction:"row",justifyContent:"space-between",children:[Object(c.jsx)(r.a,{variant:"subtitle2",component:i.a,href:"https://berrydashboard.io",target:"_blank",underline:"hover",children:"berrydashboard.io"}),Object(c.jsx)(r.a,{variant:"subtitle2",component:i.a,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"\xa9 codedthemes.com"})]})}}}]);
//# sourceMappingURL=22.205acf07.chunk.js.map