(this["webpackJsonpberry-material-react"]=this["webpackJsonpberry-material-react"]||[]).push([[135],{1917:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return N}));var i=t(222),r=t(798),c=t(799),n=t(848),s=t(800),l=t(795),o=t(801),d=t(37),h=t(160),j=t(1670),g=t(1),b=[{field:"id",headerName:"ID",width:70},{field:"fullName",headerName:"Full name",description:"This column has a value getter and is not sortable.",sortable:!1,width:160,valueGetter:function(e){return"".concat(e.row.firstName||""," ").concat(e.row.lastName||"")}},{field:"firstName",headerName:"First name",width:130},{field:"lastName",headerName:"Last name",width:130},{field:"age",headerName:"Age",type:"number",width:90}],m=[{id:1,lastName:"Snow",firstName:"Jon",age:35},{id:2,lastName:"Lancaster",firstName:"Cersei",age:42},{id:3,lastName:"Lancaster",firstName:"Jaime",age:45},{id:4,lastName:"Stark",firstName:"Arya",age:16},{id:5,lastName:"Targaryen",firstName:"Daenerys",age:null},{id:6,lastName:"Melisandre",firstName:null,age:150},{id:7,lastName:"Clifford",firstName:"Ferrara",age:44},{id:8,lastName:"Frances",firstName:"Rossini",age:36},{id:9,lastName:"Roxie",firstName:"Harvey",age:65}];function p(){var e=Object(d.a)();return Object(g.jsx)(h.a,{sx:{height:400,width:"100%","& .MuiDataGrid-root":{border:"none","& .MuiDataGrid-cell":{borderColor:"dark"===e.palette.mode?e.palette.text.primary+15:"grey.200"},"& .MuiDataGrid-columnsContainer":{color:"dark"===e.palette.mode?"grey.600":"grey.900",borderColor:"dark"===e.palette.mode?e.palette.text.primary+15:"grey.200"},"& .MuiDataGrid-columnSeparator":{color:"dark"===e.palette.mode?e.palette.text.primary+15:"grey.200"}}},children:Object(g.jsx)(j.a,{rows:m,columns:b,pageSize:5,rowsPerPageOptions:[5],checkboxSelection:!0})})}var x=t(135),O=t(704),u=t(51);function f(e,a,t,i,r){return{name:e,calories:a,fat:t,carbs:i,protein:r}}var w=[f("Frozen yoghurt",159,6,24,4),f("Ice cream sandwich",237,9,37,4.3),f("Eclair",262,16,24,6),f("Cupcake",305,3.7,67,4.3),f("Gingerbread",356,16,49,3.9)];function N(){return Object(g.jsxs)(i.a,{container:!0,spacing:u.c,children:[Object(g.jsx)(i.a,{item:!0,xs:12,children:Object(g.jsx)(x.a,{content:!1,title:"Basic Table",secondary:Object(g.jsx)(O.a,{link:"https://next.material-ui.com/components/tables/"}),children:Object(g.jsx)(r.a,{children:Object(g.jsxs)(c.a,{sx:{minWidth:350},"aria-label":"simple table",children:[Object(g.jsx)(n.a,{children:Object(g.jsxs)(s.a,{children:[Object(g.jsx)(l.a,{sx:{pl:3},children:"Dessert (100g serving)"}),Object(g.jsx)(l.a,{align:"right",children:"Calories"}),Object(g.jsx)(l.a,{align:"right",children:"Fat\xa0(g)"}),Object(g.jsx)(l.a,{align:"right",children:"Carbs\xa0(g)"}),Object(g.jsx)(l.a,{align:"right",children:"Protein\xa0(g)"}),Object(g.jsx)(l.a,{align:"right",children:"Protein\xa0(g)"}),Object(g.jsx)(l.a,{align:"right",children:"Protein\xa0(g)"}),Object(g.jsx)(l.a,{align:"right",sx:{pr:3},children:"Protein\xa0(g)"})]})}),Object(g.jsx)(o.a,{children:w.map((function(e){return Object(g.jsxs)(s.a,{hover:!0,children:[Object(g.jsx)(l.a,{sx:{pl:3},component:"th",scope:"row",children:e.name}),Object(g.jsx)(l.a,{align:"right",children:e.calories}),Object(g.jsx)(l.a,{align:"right",children:e.fat}),Object(g.jsx)(l.a,{align:"right",children:e.carbs}),Object(g.jsx)(l.a,{align:"right",children:e.protein}),Object(g.jsx)(l.a,{align:"right",children:e.protein}),Object(g.jsx)(l.a,{align:"right",children:e.protein}),Object(g.jsx)(l.a,{sx:{pr:3},align:"right",children:e.protein})]},e.name)}))})]})})})}),Object(g.jsx)(i.a,{item:!0,xs:12,children:Object(g.jsx)(x.a,{content:!1,title:"Data Grid",secondary:Object(g.jsx)(O.a,{link:"https://material-ui.com/components/data-grid/"}),children:Object(g.jsx)(p,{})})})]})}},702:function(e,a,t){"use strict";var i=t(5),r=t(74),c=t(37),n=t(680),s=t(1),l=["color","outline","size","sx"];a.a=function(e){var a=e.color,t=e.outline,o=e.size,d=e.sx,h=Object(r.a)(e,l),j=Object(c.a)(),g=a&&!t&&{color:j.palette.background.paper,bgcolor:"".concat(a,".main")},b=t&&{color:a?"".concat(a,".main"):"primary.main",bgcolor:j.palette.background.paper,border:"2px solid",borderColor:a?"".concat(a,".main"):"primary.main"},m={};switch(o){case"badge":m={width:j.spacing(3.5),height:j.spacing(3.5)};break;case"xs":m={width:j.spacing(4.25),height:j.spacing(4.25)};break;case"sm":m={width:j.spacing(5),height:j.spacing(5)};break;case"lg":m={width:j.spacing(9),height:j.spacing(9)};break;case"xl":m={width:j.spacing(10.25),height:j.spacing(10.25)};break;case"md":m={width:j.spacing(7.5),height:j.spacing(7.5)};break;default:m={}}return Object(s.jsx)(n.a,Object(i.a)({sx:Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)({},g),b),m),d)},h))}},704:function(e,a,t){"use strict";var i=t(37),r=t(1788),c=t(605),n=t(678),s=t(702),l=t(1);a.a=function(e){var a=e.title,t=e.link,o=e.icon,d=Object(i.a)();return Object(l.jsx)(r.a,{title:a||"Reference",placement:"left",children:Object(l.jsxs)(c.a,{disableRipple:!0,children:[!o&&Object(l.jsx)(s.a,{component:n.a,href:t,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,children:Object(l.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(l.jsxs)("g",{clipPath:"url(#clip0)",children:[Object(l.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:d.palette.primary[800]}),Object(l.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:d.palette.primary.main}),Object(l.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:d.palette.primary[800]}),Object(l.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:d.palette.primary.main})]}),Object(l.jsx)("defs",{children:Object(l.jsx)("clipPath",{id:"clip0",children:Object(l.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),o&&Object(l.jsx)(s.a,{component:n.a,href:t,target:"_blank",size:"badge",color:"primary",outline:!0,children:o})]})})}}}]);
//# sourceMappingURL=135.9b2666da.chunk.js.map