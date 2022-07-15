(this["webpackJsonpberry-material-react"]=this["webpackJsonpberry-material-react"]||[]).push([[170],{1912:function(e,t,n){"use strict";n.r(t);var a=n(12),c=n(5),i=n(0),r=n(37),l=n(848),s=n(800),o=n(795),j=n(743),d=n(825),u=n(160),b=n(72),h=n(685),x=n(1788),O=n(683),m=n(402),f=n(222),g=n(691),p=n(681),v=n(798),S=n(799),y=n(801),C=n(1245),w=n(1929),k=n(660),P=n(836),z=n(997),A=n(859),R=n(746),W=n(918),D=n(686),I=n(51),E=n(224),T=n(1),B=[{value:"1",label:"Published"},{value:"2",label:"Pending"},{value:"3",label:"confirm"}],J=function(e){var t=e.open,n=e.handleCloseDialog,c=Object(i.useState)("1"),r=Object(a.a)(c,2),l=r[0],s=r[1],o=Object(i.useState)(2),j=Object(a.a)(o,2),d=j[0],u=j[1];return Object(T.jsx)(P.a,{open:t,onClose:n,sx:{"&>div:nth-of-type(3)":{"&>div":{maxWidth:400}}},children:t&&Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(z.a,{children:"Edit Review"}),Object(T.jsx)(A.a,{children:Object(T.jsxs)(f.a,{container:!0,spacing:I.c,sx:{my:0},children:[Object(T.jsx)(f.a,{item:!0,xs:12,children:Object(T.jsx)(g.a,{id:"outlined-basic-review-product",fullWidth:!0,label:"Product ",defaultValue:"Apple Watch Series 4"})}),Object(T.jsx)(f.a,{item:!0,xs:12,children:Object(T.jsx)(g.a,{id:"outlined-basic-review-author",fullWidth:!0,label:"Author ",defaultValue:"Joseph William"})}),Object(T.jsx)(f.a,{item:!0,xs:12,children:Object(T.jsx)(g.a,{id:"outlined-basic-review",fullWidth:!0,multiline:!0,rows:4,label:"Text of review",defaultValue:"If you're coming from a Series 3, the choice is more difficult. The Series 4 is undoubtedly the better device. And if you care about fall detection, the ECG app, or a larger screen then upgrading makes sense. But I think most people will remain satisfied with their Series 3s."})}),Object(T.jsxs)(f.a,{item:!0,xs:12,children:[Object(T.jsx)(b.a,{align:"left",variant:"body2",children:"Rating"}),Object(T.jsx)(C.a,{name:"simple-controlled",value:d,precision:.5,onChange:function(e,t){u(t)}})]}),Object(T.jsx)(f.a,{item:!0,xs:12,children:Object(T.jsx)(g.a,{id:"standard-select-currency",select:!0,label:"Status",value:l,fullWidth:!0,onChange:function(e){s(e.target.value)},children:B.map((function(e){return Object(T.jsx)(R.a,{value:e.value,children:e.label},e.value)}))})})]})}),Object(T.jsxs)(W.a,{children:[Object(T.jsx)(E.a,{children:Object(T.jsx)(D.a,{variant:"contained",children:"Create"})}),Object(T.jsx)(D.a,{variant:"text",onClick:n,children:"Close"})]})]})})},V=n(135),q=n(279),F=n(6),G=n(287),L=n(718),N=n.n(L),M=n(748),H=n.n(M),K=n(732),Q=n.n(K),U=n(731),X=n.n(U),Y=n(730),Z=n.n(Y),$=n(834),_=n.n($),ee=n(749),te=n.n(ee);function ne(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}var ae=function(e,t){return"desc"===e?function(e,n){return ne(e,n,t)}:function(e,n){return-ne(e,n,t)}};function ce(e,t){var n=e.map((function(e,t){return[e,t]}));return n.sort((function(e,n){var a=t(e[0],n[0]);return 0!==a?a:e[1]-n[1]})),n.map((function(e){return e[0]}))}var ie=[{id:"name",numeric:!1,label:"Product Name",align:"left"},{id:"author",numeric:!0,label:"Author",align:"left"},{id:"review",numeric:!0,label:"Review",align:"left"},{id:"rating",numeric:!0,label:"Rating",align:"center"},{id:"date",numeric:!0,label:"Date",align:"center"},{id:"status",numeric:!1,label:"Status",align:"center"}];function re(e){var t=e.onSelectAllClick,n=e.order,a=e.orderBy,c=e.numSelected,i=e.rowCount,r=e.onRequestSort,h=e.theme,x=e.selected;return Object(T.jsx)(l.a,{children:Object(T.jsxs)(s.a,{children:[Object(T.jsx)(o.a,{padding:"checkbox",sx:{pl:3},children:Object(T.jsx)(j.a,{color:"primary",indeterminate:c>0&&c<i,checked:i>0&&c===i,onChange:t,inputProps:{"aria-label":"select all desserts"}})}),c>0&&Object(T.jsx)(o.a,{padding:"none",colSpan:7,children:Object(T.jsx)(le,{numSelected:x.length})}),c<=0&&ie.map((function(e){return Object(T.jsx)(o.a,{align:e.align,padding:e.disablePadding?"none":"normal",sortDirection:a===e.id&&n,children:Object(T.jsxs)(d.a,{active:a===e.id,direction:a===e.id?n:"asc",onClick:(t=e.id,function(e){r(e,t)}),children:[e.label,a===e.id?Object(T.jsx)(u.a,{component:"span",sx:k.a,children:"desc"===n?"sorted descending":"sorted ascending"}):null]})},e.id);var t})),c<=0&&Object(T.jsx)(o.a,{sortDirection:!1,align:"center",sx:{pr:3},children:Object(T.jsx)(b.a,{variant:"subtitle1",sx:{color:"dark"===h.palette.mode?"grey.600":"grey.900"},children:"Action"})})]})})}var le=function(e){var t=e.numSelected;return Object(T.jsxs)(h.a,{sx:Object(c.a)({p:0,pl:1,pr:1},t>0&&{color:function(e){return e.palette.secondary.main}}),children:[t>0?Object(T.jsxs)(b.a,{color:"inherit",variant:"h4",children:[t," Selected"]}):Object(T.jsx)(b.a,{variant:"h6",id:"tableTitle",children:"Nutrition"}),Object(T.jsx)(u.a,{sx:{flexGrow:1}}),t>0&&Object(T.jsx)(x.a,{title:"Delete",children:Object(T.jsx)(O.a,{size:"large",children:Object(T.jsx)(N.a,{fontSize:"small"})})})]})};t.default=function(){var e=Object(r.a)(),t=Object(F.d)(),n=i.useState(!1),c=Object(a.a)(n,2),l=c[0],d=c[1],u=function(){d(!0)},h=i.useState("asc"),k=Object(a.a)(h,2),P=k[0],z=k[1],A=i.useState("calories"),R=Object(a.a)(A,2),W=R[0],D=R[1],I=i.useState([]),E=Object(a.a)(I,2),B=E[0],L=E[1],N=i.useState(0),M=Object(a.a)(N,2),K=M[0],U=M[1],Y=i.useState(5),$=Object(a.a)(Y,2),ee=$[0],ne=$[1],ie=i.useState(""),le=Object(a.a)(ie,2),se=le[0],oe=le[1],je=i.useState([]),de=Object(a.a)(je,2),ue=de[0],be=de[1],he=Object(F.e)((function(e){return e.customer})).productreviews;i.useEffect((function(){t(Object(G.d)())}),[t]),i.useEffect((function(){be(he)}),[he]);var xe=function(e,t){var n=B.indexOf(t),a=[];-1===n?a=a.concat(B,t):0===n?a=a.concat(B.slice(1)):n===B.length-1?a=a.concat(B.slice(0,-1)):n>0&&(a=a.concat(B.slice(0,n),B.slice(n+1))),L(a)},Oe=K>0?Math.max(0,(1+K)*ee-ue.length):0;return Object(T.jsxs)(V.a,{title:"Product Review",content:!1,children:[Object(T.jsx)(m.a,{children:Object(T.jsxs)(f.a,{container:!0,justifyContent:"space-between",alignItems:"center",spacing:2,children:[Object(T.jsx)(f.a,{item:!0,xs:12,sm:6,children:Object(T.jsx)(g.a,{InputProps:{startAdornment:Object(T.jsx)(p.a,{position:"start",children:Object(T.jsx)(Z.a,{fontSize:"small"})})},onChange:function(e){var t=null===e||void 0===e?void 0:e.target.value;if(oe(t||""),t){var n=ue.filter((function(e){var n=!0,a=!1;return["name","author","review"].forEach((function(n){e[n].toString().toLowerCase().includes(t.toString().toLowerCase())&&(a=!0)})),a||(n=!1),n}));be(n)}else be(he)},placeholder:"Search Product",value:se,size:"small"})}),Object(T.jsxs)(f.a,{item:!0,xs:12,sm:6,sx:{textAlign:"right"},children:[Object(T.jsx)(x.a,{title:"Copy",children:Object(T.jsx)(O.a,{size:"large",children:Object(T.jsx)(X.a,{})})}),Object(T.jsx)(x.a,{title:"Print",children:Object(T.jsx)(O.a,{size:"large",children:Object(T.jsx)(Q.a,{})})}),Object(T.jsx)(x.a,{title:"Filter",children:Object(T.jsx)(O.a,{size:"large",children:Object(T.jsx)(H.a,{})})})]})]})}),Object(T.jsxs)(v.a,{children:[Object(T.jsxs)(S.a,{sx:{minWidth:750},"aria-labelledby":"tableTitle",children:[Object(T.jsx)(re,{numSelected:B.length,order:P,orderBy:W,onSelectAllClick:function(e){if(e.target.checked){var t=ue.map((function(e){return e.name}));L(t)}else L([])},onRequestSort:function(e,t){z(W===t&&"asc"===P?"desc":"asc"),D(t)},rowCount:ue.length,theme:e,selected:B}),Object(T.jsxs)(y.a,{children:[ce(ue,ae(P,W)).slice(K*ee,K*ee+ee).map((function(t,n){if("number"===typeof t)return null;var a,c=(a=t.name,-1!==B.indexOf(a)),i="enhanced-table-checkbox-".concat(n);return Object(T.jsxs)(s.a,{hover:!0,role:"checkbox","aria-checked":c,tabIndex:-1,selected:c,children:[Object(T.jsx)(o.a,{padding:"checkbox",onClick:function(e){return xe(0,t.name)},sx:{pl:3},children:Object(T.jsx)(j.a,{color:"primary",checked:c,inputProps:{"aria-labelledby":i}})}),Object(T.jsx)(o.a,{component:"th",id:i,scope:"row",onClick:function(e){return xe(0,t.name)},sx:{cursor:"pointer"},children:Object(T.jsxs)(b.a,{variant:"body2",sx:{color:"dark"===e.palette.mode?"grey.600":"grey.900"},children:[" ",t.name," "]})}),Object(T.jsx)(o.a,{children:t.author}),Object(T.jsx)(o.a,{children:t.review}),Object(T.jsx)(o.a,{align:"center",children:Object(T.jsx)(C.a,{name:"read-only",value:t.rating,precision:.5,readOnly:!0})}),Object(T.jsx)(o.a,{align:"center",children:t.date}),Object(T.jsxs)(o.a,{align:"center",children:[1===t.status&&Object(T.jsx)(q.a,{label:"Complete",chipcolor:"success",size:"small"}),2===t.status&&Object(T.jsx)(q.a,{label:"Processing",chipcolor:"orange",size:"small"}),3===t.status&&Object(T.jsx)(q.a,{label:"Confirm",chipcolor:"primary",size:"small"})]}),Object(T.jsxs)(o.a,{align:"center",sx:{pr:3},children:[Object(T.jsx)(O.a,{color:"primary",size:"large",children:Object(T.jsx)(_.a,{sx:{fontSize:"1.3rem"}})}),Object(T.jsx)(O.a,{color:"secondary",onClick:u,size:"large",children:Object(T.jsx)(te.a,{sx:{fontSize:"1.3rem"}})})]})]},n)})),Oe>0&&Object(T.jsx)(s.a,{style:{height:53*Oe},children:Object(T.jsx)(o.a,{colSpan:6})})]})]}),Object(T.jsx)(J,{open:l,handleCloseDialog:function(){d(!1)}})]}),Object(T.jsx)(w.a,{rowsPerPageOptions:[5,10,25],component:"div",count:ue.length,rowsPerPage:ee,page:K,onPageChange:function(e,t){U(t)},onRowsPerPageChange:function(e){ne(parseInt(null===e||void 0===e?void 0:e.target.value,10)),U(0)}})]})}}}]);
//# sourceMappingURL=170.281b1731.chunk.js.map