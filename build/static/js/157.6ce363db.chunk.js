(this["webpackJsonpberry-material-react"]=this["webpackJsonpberry-material-react"]||[]).push([[157],{1866:function(e,t,a){"use strict";a.r(t);var c=a(222),i=a(12),s=a(0),n=a.n(s),r=a(836),o=a(997),l=a(274),j=a(402),d=a(682),u=a(651),b=a(690),m=a(680),x=a(652),O=a(271),h=a(686),p=a(806),g=a.n(p),v=a(1),f=a(727),C=[{email:"username@company.com",avatar:"user-1.png"},{email:"user02@company.com",avatar:"user-2.png"}];function y(e){var t=e.onClose,a=e.selectedValue,c=e.open,i=function(e){t(e)};return Object(v.jsx)(r.a,{onClose:function(){t(a)},"aria-labelledby":"simple-dialog-title",open:c,children:c&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(o.a,{style:{cursor:"move"},id:"draggable-dialog-title",children:"User Account"}),Object(v.jsx)(l.a,{children:Object(v.jsx)(j.a,{sx:{pt:0},children:Object(v.jsxs)(d.a,{children:[C.map((function(e,t){return Object(v.jsxs)(n.a.Fragment,{children:[Object(v.jsxs)(u.a,{onClick:function(){return i(e.email)},children:[Object(v.jsx)(b.a,{children:Object(v.jsx)(m.a,{alt:"User 1",src:f("./".concat(e.avatar)).default})}),Object(v.jsx)(x.a,{primary:e.email})]}),Object(v.jsx)(O.a,{})]},t)})),Object(v.jsxs)(u.a,{autoFocus:!0,onClick:function(){return i("addAccount")},children:[Object(v.jsx)(b.a,{children:Object(v.jsx)(m.a,{sx:{width:32,height:32,border:"2px solid",color:"grey.500",borderColor:"grey.500",bgcolor:"transparent"},children:Object(v.jsx)(g.a,{})})}),Object(v.jsx)(x.a,{primary:"Add New Account"})]})]})})})]})})}function k(){var e=n.a.useState(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],s=n.a.useState(C[0].email),r=Object(i.a)(s,2),o=r[0],l=r[1];return Object(v.jsxs)("div",{children:[Object(v.jsx)(h.a,{variant:"contained",onClick:function(){c(!0)},children:"Open simple dialog"}),Object(v.jsx)(y,{selectedValue:o,open:a,onClose:function(e){c(!1),l(e)}})]})}var S=a(37),q=a(859),w=a(1248),F=a(72),M=a(918);function P(){var e=Object(S.a)(),t=n.a.useState(!1),a=Object(i.a)(t,2),c=a[0],s=a[1],l=function(){s(!1)};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(h.a,{variant:"outlined",onClick:function(){s(!0)},children:"Open alert dialog"}),Object(v.jsx)(r.a,{open:c,onClose:l,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{p:3},children:c&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(o.a,{id:"alert-dialog-title",children:"Use Google's location service?"}),Object(v.jsx)(q.a,{children:Object(v.jsx)(w.a,{id:"alert-dialog-description",children:Object(v.jsx)(F.a,{variant:"body2",component:"span",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})})}),Object(v.jsxs)(M.a,{sx:{pr:2.5},children:[Object(v.jsx)(h.a,{sx:{color:e.palette.error.dark,borderColor:e.palette.error.dark},onClick:l,color:"secondary",children:"Disagree"}),Object(v.jsx)(h.a,{variant:"contained",size:"small",onClick:l,autoFocus:!0,children:"Agree"})]})]})})]})}var D=a(5),L=a(599),V=n.a.forwardRef((function(e,t){return Object(v.jsx)(L.a,Object(D.a)({direction:"up",ref:t},e))}));function z(){var e=Object(S.a)(),t=n.a.useState(!1),a=Object(i.a)(t,2),c=a[0],s=a[1],l=function(){s(!1)};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(h.a,{variant:"outlined",onClick:function(){s(!0)},children:"Slide in alert dialog"}),Object(v.jsx)(r.a,{open:c,TransitionComponent:V,keepMounted:!0,onClose:l,"aria-labelledby":"alert-dialog-slide-title1","aria-describedby":"alert-dialog-slide-description1",children:c&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(o.a,{id:"alert-dialog-slide-title1",children:"Use Google's location service?"}),Object(v.jsx)(q.a,{children:Object(v.jsx)(w.a,{id:"alert-dialog-slide-description1",children:Object(v.jsx)(F.a,{variant:"body2",component:"span",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})})}),Object(v.jsxs)(M.a,{sx:{pr:2.5},children:[Object(v.jsx)(h.a,{sx:{color:e.palette.error.dark,borderColor:e.palette.error.dark},onClick:l,color:"secondary",children:"Disagree"}),Object(v.jsx)(h.a,{variant:"contained",size:"small",onClick:l,children:"Agree"})]})]})})]})}var T=a(653),A=a(691);function R(){var e=Object(S.a)(),t=n.a.useState(!1),a=Object(i.a)(t,2),c=a[0],s=a[1],l=function(){s(!1)};return Object(v.jsxs)("div",{children:[Object(v.jsx)(h.a,{variant:"outlined",onClick:function(){s(!0)},children:"Open form dialog"}),Object(v.jsx)(r.a,{open:c,onClose:l,"aria-labelledby":"form-dialog-title",children:c&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(o.a,{id:"form-dialog-title",children:"Subscribe"}),Object(v.jsx)(q.a,{children:Object(v.jsxs)(T.a,{spacing:3,children:[Object(v.jsx)(w.a,{children:Object(v.jsx)(F.a,{variant:"body2",component:"span",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),Object(v.jsx)(A.a,{autoFocus:!0,size:"small",id:"name",label:"Email Address",type:"email",fullWidth:!0})]})}),Object(v.jsxs)(M.a,{sx:{pr:2.5},children:[Object(v.jsx)(h.a,{sx:{color:e.palette.error.dark},onClick:l,color:"secondary",children:"Cancel"}),Object(v.jsx)(h.a,{variant:"contained",size:"small",onClick:l,children:"Subscribe"})]})]})})]})}var G=a(74),U=a(8),W=a(683),B=a(228),E=a.n(B),N=["children","onClose"],Z=Object(U.a)(r.a)((function(e){var t=e.theme;return{"& .MuDialogContent-root":{padding:t.spacing(2)},"& .MuDialogActions-root":{padding:t.spacing(1)}}})),_=function(e){var t=e.children,a=e.onClose,c=Object(G.a)(e,N);return Object(v.jsxs)(o.a,Object(D.a)(Object(D.a)({sx:{m:0,p:2}},c),{},{children:[t,a?Object(v.jsx)(W.a,{"aria-label":"close",onClick:a,sx:{position:"absolute",right:10,top:10,color:function(e){return e.palette.grey[500]}},children:Object(v.jsx)(E.a,{})}):null]}))};function H(){var e=n.a.useState(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],s=function(){c(!1)};return Object(v.jsxs)("div",{children:[Object(v.jsx)(h.a,{variant:"outlined",onClick:function(){c(!0)},children:"Open dialog"}),Object(v.jsxs)(Z,{onClose:s,"aria-labelledby":"customized-dialog-title",open:a,children:[Object(v.jsx)(_,{id:"customized-dialog-title",onClose:s,children:"Modal title"}),Object(v.jsxs)(q.a,{dividers:!0,children:[Object(v.jsx)(F.a,{gutterBottom:!0,children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}),Object(v.jsx)(F.a,{gutterBottom:!0,children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}),Object(v.jsx)(F.a,{gutterBottom:!0,children:"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."})]}),Object(v.jsx)(M.a,{children:Object(v.jsx)(h.a,{autoFocus:!0,onClick:s,children:"Save changes"})})]})]})}var I=a(684),J=a(685),Y=n.a.forwardRef((function(e,t){return Object(v.jsx)(L.a,Object(D.a)({direction:"up",ref:t},e))}));function K(){var e=n.a.useState(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],s=function(){c(!1)};return Object(v.jsxs)("div",{children:[Object(v.jsx)(h.a,{variant:"outlined",onClick:function(){c(!0)},children:"Open full-screen dialog"}),Object(v.jsx)(r.a,{fullScreen:!0,open:a,onClose:s,TransitionComponent:Y,children:a&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(I.a,{sx:{position:"relative"},children:Object(v.jsxs)(J.a,{children:[Object(v.jsx)(W.a,{edge:"start",color:"inherit",onClick:s,"aria-label":"close",size:"large",children:Object(v.jsx)(E.a,{})}),Object(v.jsx)(F.a,{variant:"h3",color:"inherit",sx:{ml:2,flex:1},children:"Sound"}),Object(v.jsx)(h.a,{autoFocus:!0,color:"inherit",onClick:s,children:"SAVE"})]})}),Object(v.jsxs)(d.a,{children:[Object(v.jsx)(u.a,{children:Object(v.jsx)(x.a,{primary:Object(v.jsx)(F.a,{variant:"subtitle1",children:"Phone Ringtone"}),secondary:Object(v.jsx)(F.a,{variant:"caption",children:"Titania"})})}),Object(v.jsx)(O.a,{}),Object(v.jsx)(u.a,{children:Object(v.jsx)(x.a,{primary:Object(v.jsx)(F.a,{variant:"subtitle1",children:"Default Notification Ringtone"}),secondary:Object(v.jsx)(F.a,{variant:"caption",children:"Tethys"})})}),Object(v.jsx)(u.a,{children:Object(v.jsx)(x.a,{primary:Object(v.jsx)(F.a,{variant:"subtitle1",children:"Phone Ringtone"}),secondary:Object(v.jsx)(F.a,{variant:"caption",children:"Titania"})})}),Object(v.jsx)(O.a,{}),Object(v.jsx)(u.a,{children:Object(v.jsx)(x.a,{primary:Object(v.jsx)(F.a,{variant:"subtitle1",children:"Default Notification Ringtone"}),secondary:Object(v.jsx)(F.a,{variant:"caption",children:"Tethys"})})})]})]})})]})}var Q=a(160),X=a(692),$=a(693),ee=a(670),te=a(746),ae=a(698),ce=a(662);function ie(){var e=s.useState(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],n=s.useState(!0),l=Object(i.a)(n,2),j=l[0],d=l[1],u=s.useState("sm"),b=Object(i.a)(u,2),m=b[0],x=b[1],O=function(){c(!1)};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(h.a,{variant:"outlined",onClick:function(){c(!0)},children:"Open max-width dialog"}),Object(v.jsx)(r.a,{fullWidth:j,maxWidth:m,open:a,onClose:O,children:a&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(o.a,{children:"Optional sizes"}),Object(v.jsxs)(q.a,{children:[Object(v.jsx)(w.a,{children:"You can set my maximum width and whether to adapt or not."}),Object(v.jsxs)(Q.a,{noValidate:!0,component:"form",sx:{display:"flex",flexDirection:"column",m:"auto",width:"fit-content"},children:[Object(v.jsxs)(X.a,{sx:{mt:2,minWidth:120},children:[Object(v.jsx)($.a,{htmlFor:"max-width",children:"maxWidth"}),Object(v.jsxs)(ee.a,{autoFocus:!0,value:m,onChange:function(e){x(e.target.value)},label:"maxWidth",inputProps:{name:"max-width",id:"max-width"},children:[Object(v.jsx)(te.a,{value:!1,children:"false"}),Object(v.jsx)(te.a,{value:"xs",children:"xs"}),Object(v.jsx)(te.a,{value:"sm",children:"sm"}),Object(v.jsx)(te.a,{value:"md",children:"md"}),Object(v.jsx)(te.a,{value:"lg",children:"lg"}),Object(v.jsx)(te.a,{value:"xl",children:"xl"})]})]}),Object(v.jsx)(ae.a,{sx:{mt:1},control:Object(v.jsx)(ce.a,{checked:j,onChange:function(e){d(e.target.checked)}}),label:"Full width"})]})]}),Object(v.jsx)(M.a,{children:Object(v.jsx)(h.a,{onClick:O,children:"Close"})})]})})]})}var se=a(649);function ne(){var e=Object(S.a)(),t=Object(se.a)(e.breakpoints.down("md")),a=n.a.useState(!1),c=Object(i.a)(a,2),s=c[0],l=c[1],j=function(){l(!1)};return Object(v.jsxs)("div",{children:[Object(v.jsx)(h.a,{variant:"outlined",onClick:function(){l(!0)},children:"Open responsive dialog"}),Object(v.jsx)(r.a,{fullScreen:t,open:s,onClose:j,"aria-labelledby":"responsive-dialog-title",children:s&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(o.a,{id:"responsive-dialog-title",children:"Use Google's location service?"}),Object(v.jsx)(q.a,{children:Object(v.jsx)(w.a,{children:Object(v.jsx)(F.a,{variant:"body2",component:"span",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})})}),Object(v.jsxs)(M.a,{sx:{pr:2.5},children:[Object(v.jsx)(h.a,{sx:{color:e.palette.error.dark},autoFocus:!0,onClick:j,color:"secondary",children:"Disagree"}),Object(v.jsx)(h.a,{variant:"contained",size:"small",onClick:j,autoFocus:!0,children:"Agree"})]})]})})]})}var re=a(677),oe=a(1686),le=a.n(oe);function je(e){return Object(v.jsx)(le.a,{handle:"#draggable-dialog-title",cancel:'[class*="MuiDialogContent-root"]',children:Object(v.jsx)(re.a,Object(D.a)({},e))})}function de(){var e=Object(S.a)(),t=n.a.useState(!1),a=Object(i.a)(t,2),c=a[0],s=a[1],l=function(){s(!1)};return Object(v.jsxs)("div",{children:[Object(v.jsx)(h.a,{variant:"outlined",onClick:function(){s(!0)},children:"Open Draggable Dialog"}),Object(v.jsx)(r.a,{open:c,onClose:l,PaperComponent:je,"aria-labelledby":"draggable-dialog-title",children:c&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(o.a,{style:{cursor:"move"},id:"draggable-dialog-title",children:"Subscribe"}),Object(v.jsx)(q.a,{children:Object(v.jsx)(w.a,{children:Object(v.jsx)(F.a,{variant:"body2",component:"span",children:"To subscribe to this website, please enter your email address here. We will send updates occasionally."})})}),Object(v.jsxs)(M.a,{children:[Object(v.jsx)(h.a,{sx:{color:e.palette.error.dark},autoFocus:!0,onClick:l,color:"secondary",children:"Cancel"}),Object(v.jsx)(h.a,{variant:"contained",size:"small",onClick:l,children:"Subscribe"})]})]})})]})}function ue(){var e=Object(S.a)(),t=n.a.useState(!1),a=Object(i.a)(t,2),s=a[0],l=a[1],j=n.a.useState("paper"),d=Object(i.a)(j,2),u=d[0],b=d[1],m=function(e){return function(){l(!0),b(e)}},x=function(){l(!1)},O=n.a.useRef(null);return n.a.useEffect((function(){if(s){var e=O.current;null!==e&&(null===e||void 0===e||e.focus())}}),[s]),Object(v.jsxs)("div",{children:[Object(v.jsx)(h.a,{onClick:m("paper"),children:"Content Scroll"}),Object(v.jsx)(h.a,{onClick:m("body"),children:"Body Scroll"}),Object(v.jsx)(r.a,{open:s,onClose:x,scroll:u,"aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",children:s&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(o.a,{id:"scroll-dialog-title",children:"Subscribe"}),Object(v.jsx)(q.a,{dividers:"paper"===u,children:Object(v.jsxs)(c.a,{container:!0,spacing:3,children:[Object(v.jsx)(c.a,{item:!0,children:Object(v.jsx)(F.a,{variant:"body2",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."})}),Object(v.jsx)(c.a,{item:!0,children:Object(v.jsx)(F.a,{variant:"body2",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."})}),Object(v.jsx)(c.a,{item:!0,children:Object(v.jsx)(F.a,{variant:"body2",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."})}),Object(v.jsx)(c.a,{item:!0,children:Object(v.jsx)(F.a,{variant:"body2",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."})}),Object(v.jsx)(c.a,{item:!0,children:Object(v.jsx)(F.a,{variant:"body2",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."})}),Object(v.jsx)(c.a,{item:!0,children:Object(v.jsx)(F.a,{variant:"body2",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."})}),Object(v.jsx)(c.a,{item:!0,children:Object(v.jsx)(F.a,{variant:"body2",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."})}),Object(v.jsx)(c.a,{item:!0,children:Object(v.jsx)(F.a,{variant:"body2",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."})}),Object(v.jsx)(c.a,{item:!0,children:Object(v.jsx)(F.a,{variant:"body2",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."})}),Object(v.jsx)(c.a,{item:!0,children:Object(v.jsx)(F.a,{variant:"body2",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."})}),Object(v.jsx)(c.a,{item:!0,children:Object(v.jsx)(F.a,{variant:"body2",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."})}),Object(v.jsx)(c.a,{item:!0,children:Object(v.jsx)(F.a,{variant:"body2",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."})}),Object(v.jsx)(c.a,{item:!0,children:Object(v.jsx)(F.a,{variant:"body2",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."})}),Object(v.jsx)(c.a,{item:!0,children:Object(v.jsx)(F.a,{variant:"body2",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."})}),Object(v.jsx)(c.a,{item:!0,children:Object(v.jsx)(F.a,{variant:"body2",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."})}),Object(v.jsx)(c.a,{item:!0,children:Object(v.jsx)(F.a,{variant:"body2",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."})})]})}),Object(v.jsxs)(M.a,{sx:{pr:2.5,pt:2.5},children:[Object(v.jsx)(h.a,{sx:{color:e.palette.error.dark},onClick:x,color:"secondary",children:"Cancel"}),Object(v.jsx)(h.a,{variant:"contained",size:"small",onClick:x,children:"Subscribe"})]})]})})]})}var be=a(661),me=a(667),xe=["_onClose","value","open"],Oe=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"];function he(e){var t=e._onClose,a=e.value,c=e.open,n=Object(G.a)(e,xe),l=Object(S.a)(),j=s.useState(a),d=Object(i.a)(j,2),u=d[0],b=d[1],m=s.useRef(null);s.useEffect((function(){c||b(a)}),[a,c]);return Object(v.jsx)(r.a,Object(D.a)(Object(D.a)({TransitionProps:{onEntering:function(){var e;null!=m.current&&(null===(e=m.current)||void 0===e||e.focus())}},"aria-labelledby":"confirmation-dialog-title",open:c},n),{},{children:c&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(o.a,{id:"confirmation-dialog-title",children:"Phone Ringtone"}),Object(v.jsx)(q.a,{dividers:!0,children:Object(v.jsx)(be.a,{ref:m,"aria-label":"ringtone",name:"ringtone",value:u,onChange:function(e){b(e.target.value)},children:Oe.map((function(e){return Object(v.jsx)(ae.a,{value:e,control:Object(v.jsx)(me.a,{}),label:e},e)}))})}),Object(v.jsxs)(M.a,{sx:{pr:2.5,pt:2.5},children:[Object(v.jsx)(h.a,{sx:{color:l.palette.error.dark},autoFocus:!0,color:"secondary",onClick:function(){t()},children:"Cancel"}),Object(v.jsx)(h.a,{variant:"contained",size:"small",onClick:function(){t(u)},children:"Done"})]})]})}))}function pe(){var e=s.useState(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],n=s.useState("Hangouts Call"),r=Object(i.a)(n,2),o=r[0],l=r[1];return Object(v.jsx)("div",{children:Object(v.jsxs)(d.a,{component:"div",role:"group",children:[Object(v.jsx)(u.a,{divider:!0,disabled:!0,children:Object(v.jsx)(x.a,{primary:Object(v.jsx)(F.a,{variant:"subtitle1",children:"Interruptions"})})}),Object(v.jsx)(u.a,{divider:!0,"aria-haspopup":"true","aria-controls":"ringtone-menu","aria-label":"phone ringtone",onClick:function(){c(!0)},children:Object(v.jsx)(x.a,{primary:Object(v.jsx)(F.a,{variant:"subtitle1",children:"Phone Ringtone"}),secondary:Object(v.jsx)(F.a,{variant:"caption",children:o})})}),Object(v.jsx)(u.a,{divider:!0,disabled:!0,children:Object(v.jsx)(x.a,{primary:Object(v.jsx)(F.a,{variant:"subtitle1",children:"Default Notification Ringtone"}),secondary:Object(v.jsx)(F.a,{variant:"caption",children:"Tethys"})})}),Object(v.jsx)(he,{id:"ringtone-menu",keepMounted:!0,open:a,_onClose:function(e){c(!1),e&&l(e)},value:o})]})})}var ge=a(135),ve=a(75),fe=a(704),Ce=a(51);t.default=function(){return Object(v.jsx)(ge.a,{title:"Dialog",secondary:Object(v.jsx)(fe.a,{link:"https://next.material-ui.com/components/dialogs/"}),children:Object(v.jsxs)(c.a,{container:!0,spacing:Ce.c,children:[Object(v.jsx)(c.a,{item:!0,xs:12,sm:6,md:4,children:Object(v.jsx)(ve.a,{title:"Simple Dialog",children:Object(v.jsx)(c.a,{container:!0,justifyContent:"center",children:Object(v.jsx)(k,{})})})}),Object(v.jsx)(c.a,{item:!0,xs:12,sm:6,md:4,children:Object(v.jsx)(ve.a,{title:"Sweet Alert",children:Object(v.jsx)(c.a,{container:!0,justifyContent:"center",children:Object(v.jsx)(P,{})})})}),Object(v.jsx)(c.a,{item:!0,xs:12,sm:6,md:4,children:Object(v.jsx)(ve.a,{title:"Dialog Animation",children:Object(v.jsx)(c.a,{container:!0,justifyContent:"center",children:Object(v.jsx)(z,{})})})}),Object(v.jsx)(c.a,{item:!0,xs:12,sm:6,md:4,children:Object(v.jsx)(ve.a,{title:"Form Dialogs",children:Object(v.jsx)(c.a,{container:!0,justifyContent:"center",children:Object(v.jsx)(R,{})})})}),Object(v.jsx)(c.a,{item:!0,xs:12,sm:6,md:4,children:Object(v.jsx)(ve.a,{title:"Customized Dialogs",children:Object(v.jsx)(c.a,{container:!0,justifyContent:"center",children:Object(v.jsx)(H,{})})})}),Object(v.jsx)(c.a,{item:!0,xs:12,sm:6,md:4,children:Object(v.jsx)(ve.a,{title:"Full Screen Dialogs",children:Object(v.jsx)(c.a,{container:!0,justifyContent:"center",children:Object(v.jsx)(K,{})})})}),Object(v.jsx)(c.a,{item:!0,xs:12,sm:6,md:4,children:Object(v.jsx)(ve.a,{title:"Dialogs Size",children:Object(v.jsx)(c.a,{container:!0,justifyContent:"center",children:Object(v.jsx)(ie,{})})})}),Object(v.jsx)(c.a,{item:!0,xs:12,sm:6,md:4,children:Object(v.jsx)(ve.a,{title:"Responsive Fullscreen Dialogs",children:Object(v.jsx)(c.a,{container:!0,justifyContent:"center",children:Object(v.jsx)(ne,{})})})}),Object(v.jsx)(c.a,{item:!0,xs:12,sm:6,md:4,children:Object(v.jsx)(ve.a,{title:"Draggable Dialogs",children:Object(v.jsx)(c.a,{container:!0,justifyContent:"center",children:Object(v.jsx)(de,{})})})}),Object(v.jsx)(c.a,{item:!0,xs:12,sm:6,md:4,children:Object(v.jsx)(ve.a,{title:"Scrolling Dialogs",children:Object(v.jsx)(c.a,{container:!0,justifyContent:"center",children:Object(v.jsx)(ue,{})})})}),Object(v.jsx)(c.a,{item:!0,xs:12,sm:6,md:4,children:Object(v.jsx)(ve.a,{title:"Confirmation Dialogs",children:Object(v.jsx)(c.a,{container:!0,justifyContent:"center",children:Object(v.jsx)(pe,{})})})})]})})}},704:function(e,t,a){"use strict";var c=a(37),i=a(1788),s=a(605),n=a(678),r=a(702),o=a(1);t.a=function(e){var t=e.title,a=e.link,l=e.icon,j=Object(c.a)();return Object(o.jsx)(i.a,{title:t||"Reference",placement:"left",children:Object(o.jsxs)(s.a,{disableRipple:!0,children:[!l&&Object(o.jsx)(r.a,{component:n.a,href:a,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,children:Object(o.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(o.jsxs)("g",{clipPath:"url(#clip0)",children:[Object(o.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:j.palette.primary[800]}),Object(o.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:j.palette.primary.main}),Object(o.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:j.palette.primary[800]}),Object(o.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:j.palette.primary.main})]}),Object(o.jsx)("defs",{children:Object(o.jsx)("clipPath",{id:"clip0",children:Object(o.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),l&&Object(o.jsx)(r.a,{component:n.a,href:a,target:"_blank",size:"badge",color:"primary",outline:!0,children:l})]})})}}}]);
//# sourceMappingURL=157.6ce363db.chunk.js.map