(this["webpackJsonpberry-material-react"]=this["webpackJsonpberry-material-react"]||[]).push([[91],{1837:function(e,t,c){"use strict";c.r(t);var n=c(12),a=c(5),r=c(0),i=c(37),o=c(848),l=c(800),s=c(795),d=c(825),u=c(160),j=c(685),b=c(72),h=c(1788),v=c(683),f=c(402),O=c(222),x=c(691),p=c(681),g=c(798),m=c(799),S=c(801),y=c(1929),z=c(660),M=c(279),w=c(135),C=c(6),P=c(287),H=c(299),L=c(718),T=c.n(L),_=c(748),k=c.n(_),I=c(732),V=c.n(I),D=c(731),A=c.n(D),R=c(730),B=c.n(R),N=c(749),E=c.n(N),F=c(1);function q(e,t,c){return t[c]<e[c]?-1:t[c]>e[c]?1:0}var J=function(e,t){return"desc"===e?function(e,c){return q(e,c,t)}:function(e,c){return-q(e,c,t)}};function G(e,t){var c=e.map((function(e,t){return[e,t]}));return c.sort((function(e,c){var n=t(e[0],c[0]);return 0!==n?n:e[1]-c[1]})),c.map((function(e){return e[0]}))}var K=[{id:"title",numeric:!1,label:"Title",align:"left"},{id:"category",numeric:!0,label:"Category",align:"left"},{id:"size",numeric:!0,label:"Size",align:"right"},{id:"pages",numeric:!0,label:"Pages",align:"right"},{id:"price",numeric:!0,label:"Price",align:"right"},{id:"created",numeric:!0,label:"Created",align:"center"},{id:"active",numeric:!1,label:"Active",align:"center"}];function W(e){e.onSelectAllClick;var t=e.order,c=e.orderBy,n=e.numSelected,a=(e.rowCount,e.onRequestSort),r=e.selected;return Object(F.jsx)(o.a,{children:Object(F.jsxs)(l.a,{children:[n>0&&Object(F.jsx)(s.a,{padding:"none",colSpan:6,children:Object(F.jsx)(Q,{numSelected:r.length})}),n<=0&&K.map((function(e){return Object(F.jsx)(s.a,{align:e.align,padding:e.disablePadding?"none":"normal",sortDirection:c===e.id&&t,children:Object(F.jsxs)(d.a,{active:c===e.id,direction:c===e.id?t:"asc",onClick:(n=e.id,function(e){a(e,n)}),children:[e.label,c===e.id?Object(F.jsx)(u.a,{component:"span",sx:z.a,children:"desc"===t?"sorted descending":"sorted ascending"}):null]})},e.id);var n})),n<=0&&Object(F.jsx)(s.a,{sortDirection:!1,align:"center",sx:{pr:3},children:"Action"})]})})}var Q=function(e){var t=e.numSelected;return Object(F.jsxs)(j.a,{sx:Object(a.a)({p:0,pl:1,pr:1},t>0&&{color:function(e){return e.palette.secondary.main}}),children:[t>0?Object(F.jsxs)(b.a,{color:"inherit",variant:"h4",children:[t," Selected"]}):Object(F.jsx)(b.a,{variant:"h6",id:"tableTitle",children:"Nutrition"}),Object(F.jsx)(u.a,{sx:{flexGrow:1}}),t>0&&Object(F.jsx)(h.a,{title:"Delete",children:Object(F.jsx)(v.a,{size:"large",children:Object(F.jsx)(T.a,{fontSize:"small"})})})]})};t.default=function(){var e=Object(i.a)(),t=Object(C.d)(),c=r.useState("asc"),a=Object(n.a)(c,2),o=a[0],d=a[1],u=r.useState("calories"),j=Object(n.a)(u,2),z=j[0],L=j[1],T=r.useState([]),_=Object(n.a)(T,2),I=_[0],D=_[1],R=r.useState(0),N=Object(n.a)(R,2),q=N[0],K=N[1],Q=r.useState(5),U=Object(n.a)(Q,2),X=U[0],Y=U[1],Z=r.useState(""),$=Object(n.a)(Z,2),ee=$[0],te=$[1],ce=r.useState([]),ne=Object(n.a)(ce,2),ae=ne[0],re=ne[1],ie=Object(C.e)((function(e){return e.customer})).customers,oe=Object(C.e)((function(e){return e.book})).books;r.useEffect((function(){t(Object(P.b)()),t(Object(H.b)())}),[t]),r.useEffect((function(){re(oe)}),[oe]),console.log("BOOKS",oe);var le=q>0?Math.max(0,(1+q)*X-ae.length):0;return Object(F.jsxs)(w.a,{title:"Book List",content:!1,children:[Object(F.jsx)(f.a,{children:Object(F.jsxs)(O.a,{container:!0,justifyContent:"space-between",alignItems:"center",spacing:2,children:[Object(F.jsx)(O.a,{item:!0,xs:12,sm:6,children:Object(F.jsx)(x.a,{InputProps:{startAdornment:Object(F.jsx)(p.a,{position:"start",children:Object(F.jsx)(B.a,{fontSize:"small"})})},onChange:function(e){var t=null===e||void 0===e?void 0:e.target.value;if(te(t||""),t){var c=ae.filter((function(e){var c=!0,n=!1;return["title","category","is_active","created_at","size","pages","price"].forEach((function(c){e[c].toString().toLowerCase().includes(t.toString().toLowerCase())&&(n=!0)})),n||(c=!1),c}));re(c)}else re(ie)},placeholder:"Search Books",value:ee,size:"small"})}),Object(F.jsxs)(O.a,{item:!0,xs:12,sm:6,sx:{textAlign:"right"},children:[Object(F.jsx)(h.a,{title:"Copy",children:Object(F.jsx)(v.a,{size:"large",children:Object(F.jsx)(A.a,{})})}),Object(F.jsx)(h.a,{title:"Print",children:Object(F.jsx)(v.a,{size:"large",children:Object(F.jsx)(V.a,{})})}),Object(F.jsx)(h.a,{title:"Filter",children:Object(F.jsx)(v.a,{size:"large",children:Object(F.jsx)(k.a,{})})})]})]})}),Object(F.jsx)(g.a,{children:Object(F.jsxs)(m.a,{sx:{minWidth:750},"aria-labelledby":"tableTitle",children:[Object(F.jsx)(W,{theme:e,numSelected:I.length,order:o,orderBy:z,onSelectAllClick:function(e){if(e.target.checked){var t=ae.map((function(e){return e.title}));D(t)}else D([])},onRequestSort:function(e,t){d(z===t&&"asc"===o?"desc":"asc"),L(t)},rowCount:ae.length,selected:I}),Object(F.jsxs)(S.a,{children:[G(ae,J(o,z)).slice(q*X,q*X+X).map((function(t,c){if("number"===typeof t)return null;n=t.title,I.indexOf(n);var n,a="enhanced-table-checkbox-".concat(c);return Object(F.jsxs)(l.a,{children:[Object(F.jsx)(s.a,{component:"th",id:a,scope:"row",onClick:function(e){return function(e,t){var c=I.indexOf(t),n=[];-1===c?n=n.concat(I,t):0===c?n=n.concat(I.slice(1)):c===I.length-1?n=n.concat(I.slice(0,-1)):c>0&&(n=n.concat(I.slice(0,c),I.slice(c+1))),D(n)}(0,t.title)},sx:{cursor:"pointer"},children:Object(F.jsxs)(b.a,{variant:"subtitle1",sx:{color:"dark"===e.palette.mode?"grey.600":"grey.900"},children:[" ",t.title," "]})}),Object(F.jsx)(s.a,{children:t.category}),Object(F.jsx)(s.a,{align:"right",children:t.size}),Object(F.jsx)(s.a,{align:"right",children:t.pages}),Object(F.jsx)(s.a,{align:"right",children:t.price}),Object(F.jsx)(s.a,{align:"center",children:t.created_at}),Object(F.jsx)(s.a,{align:"center",children:t.is_active?Object(F.jsx)(M.a,{label:"Active",size:"small",chipcolor:"success"}):Object(F.jsx)(M.a,{label:"InActive",size:"small",chipcolor:"orange"})}),Object(F.jsx)(s.a,{align:"center",sx:{pr:3},children:Object(F.jsx)(v.a,{color:"secondary",size:"large",children:Object(F.jsx)(E.a,{sx:{fontSize:"1.3rem"}})})})]})})),le>0&&Object(F.jsx)(l.a,{style:{height:53*le},children:Object(F.jsx)(s.a,{colSpan:6})})]})]})}),Object(F.jsx)(y.a,{rowsPerPageOptions:[5,10,25],component:"div",count:ae.length,rowsPerPage:X,page:q,onPageChange:function(e,t){K(t)},onRowsPerPageChange:function(e){Y(parseInt(null===e||void 0===e?void 0:e.target.value,10)),K(0)}})]})}},718:function(e,t,c){"use strict";var n=c(94);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(c(113)),r=c(1),i=(0,a.default)((0,r.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=i},730:function(e,t,c){"use strict";var n=c(94);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(c(113)),r=c(1),i=(0,a.default)((0,r.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.default=i},731:function(e,t,c){"use strict";var n=c(94);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(c(113)),r=c(1),i=(0,a.default)([(0,r.jsx)("path",{d:"M14 7H8v14h11v-9h-5z",opacity:".3"},"0"),(0,r.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z"},"1")],"FileCopyTwoTone");t.default=i},732:function(e,t,c){"use strict";var n=c(94);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(c(113)),r=c(1),i=(0,a.default)([(0,r.jsx)("path",{d:"M8 5h8v3H8z",opacity:".3"},"0"),(0,r.jsx)("circle",{cx:"18",cy:"11.5",r:"1"},"1"),(0,r.jsx)("path",{d:"M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 14H8v-4h8v4zm4-4h-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4z"},"2"),(0,r.jsx)("path",{d:"M6 13h12v2h2v-4c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4h2v-2zm12-2.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z",opacity:".3"},"3")],"PrintTwoTone");t.default=i},748:function(e,t,c){"use strict";var n=c(94);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(c(113)),r=c(1),i=(0,a.default)((0,r.jsx)("path",{d:"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"}),"FilterListTwoTone");t.default=i},749:function(e,t,c){"use strict";var n=c(94);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(c(113)),r=c(1),i=(0,a.default)([(0,r.jsx)("path",{d:"M5 18.08V19h.92l9.06-9.06-.92-.92z",opacity:".3"},"0"),(0,r.jsx)("path",{d:"M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19z"},"1")],"EditTwoTone");t.default=i},825:function(e,t,c){"use strict";var n=c(4),a=c(9),r=c(2),i=c(103),o=c(11),l=c(0),s=c(605),d=c(39),u=c(1),j=Object(d.a)(Object(u.jsx)("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward"),b=c(8),h=c(13),v=c(10),f=c(71),O=c(84);function x(e){return Object(f.a)("MuiTableSortLabel",e)}var p=Object(O.a)("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc"]),g=["active","children","className","direction","hideSortIcon","IconComponent"],m=Object(b.a)(s.a,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:function(e,t){var c=e.ownerState;return[t.root,c.active&&t.active]}})((function(e){var t=e.theme;return Object(n.a)({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:t.palette.text.secondary},"&:hover":Object(n.a)({color:t.palette.text.secondary},"& .".concat(p.icon),{opacity:.5})},"&.".concat(p.active),Object(n.a)({color:t.palette.text.primary},"& .".concat(p.icon),{opacity:1,color:t.palette.text.secondary}))})),S=Object(b.a)("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:function(e,t){var c=e.ownerState;return[t.icon,t["iconDirection".concat(Object(v.a)(c.direction))]]}})((function(e){var t=e.theme,c=e.ownerState;return Object(r.a)({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:t.transitions.create(["opacity","transform"],{duration:t.transitions.duration.shorter}),userSelect:"none"},"desc"===c.direction&&{transform:"rotate(0deg)"},"asc"===c.direction&&{transform:"rotate(180deg)"})})),y=l.forwardRef((function(e,t){var c=Object(h.a)({props:e,name:"MuiTableSortLabel"}),n=c.active,l=void 0!==n&&n,s=c.children,d=c.className,b=c.direction,f=void 0===b?"asc":b,O=c.hideSortIcon,p=void 0!==O&&O,y=c.IconComponent,z=void 0===y?j:y,M=Object(a.a)(c,g),w=Object(r.a)({},c,{active:l,direction:f,hideSortIcon:p,IconComponent:z}),C=function(e){var t=e.classes,c=e.direction,n={root:["root",e.active&&"active"],icon:["icon","iconDirection".concat(Object(v.a)(c))]};return Object(i.a)(n,x,t)}(w);return Object(u.jsxs)(m,Object(r.a)({className:Object(o.default)(C.root,d),component:"span",disableRipple:!0,ownerState:w,ref:t},M,{children:[s,p&&!l?null:Object(u.jsx)(S,{as:z,className:Object(o.default)(C.icon),ownerState:w})]}))}));t.a=y}}]);
//# sourceMappingURL=91.f8ae11aa.chunk.js.map