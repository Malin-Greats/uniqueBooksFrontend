(this["webpackJsonpberry-material-react"]=this["webpackJsonpberry-material-react"]||[]).push([[174],{1874:function(e,t,a){"use strict";a.r(t);var r=a(222),s=a(135),o=a(51),i=a(5),l=a(12),c=a(0),n=a.n(c),d=a(37),b=a(755),p=a.n(b),h=a(35),j=a(40),u=a.n(j),m=a(1),y={chart:{height:350,type:"area"},colors:[u.a.secondaryMain,u.a.primaryMain],dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00.000Z","2018-09-19T01:30:00.000Z","2018-09-19T02:30:00.000Z","2018-09-19T03:30:00.000Z","2018-09-19T04:30:00.000Z","2018-09-19T05:30:00.000Z","2018-09-19T06:30:00.000Z"]},tooltip:{x:{format:"dd/MM/yy HH:mm"}},legend:{show:!0,fontFamily:"'Roboto', sans-serif",position:"bottom",offsetX:10,offsetY:10,labels:{useSeriesColors:!1},markers:{width:16,height:16,radius:5},itemMargin:{horizontal:15,vertical:8}}},x=function(){var e=Object(d.a)(),t=Object(h.a)().navType,a=e.palette.text.primary,r=e.palette.dark.light,s=e.palette.grey[200],o=Object(c.useState)([{name:"Series 1",data:[31,40,28,51,42,109,100]},{name:"Series 2",data:[11,32,45,32,34,52,41]}]),b=Object(l.a)(o,1)[0],j=Object(c.useState)(y),u=Object(l.a)(j,2),x=u[0],O=u[1];return n.a.useEffect((function(){O((function(o){return Object(i.a)(Object(i.a)({},o),{},{colors:[e.palette.secondary.main,e.palette.primary.main],xaxis:{labels:{style:{colors:[a,a,a,a,a,a,a]}}},yaxis:{labels:{style:{colors:[a]}}},grid:{borderColor:"dark"===t?r+20:s},tooltip:{theme:"dark"===t?"dark":"light"},legend:{labels:{colors:"grey.500"}}})}))}),[t,a,r,s,e]),Object(m.jsx)("div",{id:"chart",children:Object(m.jsx)(p.a,{options:x,series:b,type:"area",height:350})})},O={chart:{type:"bar",height:350},plotOptions:{bar:{borderRadius:4,horizontal:!0}},dataLabels:{enabled:!1},xaxis:{categories:["South Korea","Canada","United Kingdom","Netherlands","Italy","France","Japan","United States","China","Germany"]}},g=function(){var e=Object(d.a)(),t=Object(h.a)().navType,a=e.palette.text.primary,r=e.palette.dark.light,s=e.palette.grey[200],o=e.palette.success.dark,b=Object(c.useState)([{data:[400,430,448,470,540,580,690,1100,1200,1380]}]),j=Object(l.a)(b,1)[0],u=Object(c.useState)(O),y=Object(l.a)(u,2),x=y[0],g=y[1];return n.a.useEffect((function(){g((function(e){return Object(i.a)(Object(i.a)({},e),{},{colors:[o],xaxis:{labels:{style:{colors:[a,a,a,a,a,a]}}},yaxis:{labels:{style:{colors:[a,a,a,a,a,a,a,a,a,a]}}},grid:{borderColor:"dark"===t?r+20:s},tooltip:{theme:"dark"===t?"dark":"light"}})}))}),[t,a,r,s,o]),Object(m.jsx)("div",{id:"chart",children:Object(m.jsx)(p.a,{options:x,series:j,type:"bar",height:350})})},f={chart:{type:"bar",height:350},plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},yaxis:{title:{text:"$ (thousands)"}},fill:{opacity:1},tooltip:{y:{formatter:function(e){return"$ ".concat(e," thousands")}}},legend:{show:!0,fontFamily:"'Roboto', sans-serif",position:"bottom",offsetX:10,offsetY:10,labels:{useSeriesColors:!1},markers:{width:16,height:16,radius:5},itemMargin:{horizontal:15,vertical:8}},responsive:[{breakpoint:600,options:{yaxis:{show:!1}}}]},k=function(){var e=Object(d.a)(),t=Object(h.a)().navType,a=e.palette.text.primary,r=e.palette.dark.light,s=e.palette.grey[200],o=e.palette.secondary.main,b=e.palette.primary.main,j=e.palette.success.dark,u=Object(c.useState)([{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]},{name:"Revenue",data:[76,85,101,98,87,105,91,114,94]},{name:"Free Cash Flow",data:[35,41,36,26,45,48,52,53,41]}]),y=Object(l.a)(u,1)[0],x=Object(c.useState)(f),O=Object(l.a)(x,2),g=O[0],k=O[1];return n.a.useEffect((function(){k((function(e){return Object(i.a)(Object(i.a)({},e),{},{colors:[o,b,j],xaxis:{labels:{style:{colors:[a,a,a,a,a,a,a,a,a]}}},yaxis:{labels:{style:{colors:[a]}}},grid:{borderColor:"dark"===t?r+20:s},tooltip:{theme:"dark"===t?"dark":"light"},legend:{labels:{colors:"grey.500"}}})}))}),[t,a,r,s,o,b,j]),Object(m.jsx)("div",{id:"chart",children:Object(m.jsx)(p.a,{options:g,series:y,type:"bar",height:350})})},v={chart:{height:350,type:"line",zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"straight"},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}},w=function(){var e=Object(d.a)(),t=Object(h.a)().navType,a=e.palette.text.primary,r=e.palette.dark.light,s=e.palette.grey[200],o=e.palette.secondary.main,b=Object(c.useState)([{name:"Desktops",data:[10,41,35,51,49,62,69,91,148]}]),j=Object(l.a)(b,1)[0],u=Object(c.useState)(v),y=Object(l.a)(u,2),x=y[0],O=y[1];return n.a.useEffect((function(){O((function(e){return Object(i.a)(Object(i.a)({},e),{},{colors:[o],xaxis:{labels:{style:{colors:[a,a,a,a,a,a,a,a,a]}}},yaxis:{labels:{style:{colors:[a]}}},grid:{borderColor:"dark"===t?r+20:s},tooltip:{theme:"dark"===t?"dark":"light"}})}))}),[t,a,r,s,o]),Object(m.jsx)("div",{id:"chart",children:Object(m.jsx)(p.a,{options:x,series:j,type:"line",height:350})})},C={chart:{type:"line",stacked:!1,height:450},dataLabels:{enabled:!1},stroke:{width:[1,1,4]},xaxis:{categories:[2009,2010,2011,2012,2013,2014,2015,2016]},legend:{show:!0,fontFamily:"'Roboto', sans-serif",position:"bottom",offsetX:10,offsetY:10,labels:{useSeriesColors:!1},markers:{width:16,height:16,radius:5},itemMargin:{horizontal:15,vertical:8}},yaxis:[{axisTicks:{show:!0},axisBorder:{show:!0,color:"#008FFB"},labels:{style:{colors:"#008FFB"}},title:{text:"Income (thousand crores)",style:{color:"#008FFB"}},tooltip:{enabled:!0}},{seriesName:"Income",opposite:!0,axisTicks:{show:!0},axisBorder:{show:!0,color:"#00E396"},labels:{style:{colors:"#00E396"}},title:{text:"Operating Cashflow (thousand crores)",style:{color:"#00E396"}}},{seriesName:"Revenue",opposite:!0,axisTicks:{show:!0},axisBorder:{show:!0,color:"#FEB019"},labels:{style:{colors:"#FEB019"}},title:{text:"Revenue (thousand crores)",style:{color:"#FEB019"}}}],tooltip:{fixed:{enabled:!0,position:"topLeft",offsetY:30,offsetX:60}}},S=function(){var e=Object(d.a)(),t=Object(h.a)().navType,a=e.palette.text.primary,r=e.palette.dark.light,s=e.palette.grey[200],o=e.palette.secondary.main,b=e.palette.primary.main,j=e.palette.success.dark,u=Object(c.useState)([{name:"Income",type:"column",data:[14,2,25,15,25,28,38,46]},{name:"Cashflow",type:"column",data:[11,3,31,4,41,49,65,85]},{name:"Revenue",type:"line",data:[20,29,37,36,44,45,50,58]}]),y=Object(l.a)(u,1)[0],x=Object(c.useState)(C),O=Object(l.a)(x,2),g=O[0],f=O[1];return n.a.useEffect((function(){f((function(e){return Object(i.a)(Object(i.a)({},e),{},{colors:[o,b,j],xaxis:{labels:{style:{colors:[a,a,a,a,a,a,a,a]}}},yaxis:{labels:{style:{colors:[a]}}},grid:{borderColor:"dark"===t?r+20:s},tooltip:{theme:"dark"===t?"dark":"light"},legend:{labels:{colors:"grey.500"}}})}))}),[t,a,r,s,o,b,j]),Object(m.jsx)("div",{id:"chart",children:Object(m.jsx)(p.a,{options:g,series:y,type:"line"})})},T={chart:{type:"pie",width:450,height:450},labels:["Team A","Team B","Team C","Team D","Team E"],legend:{show:!0,fontFamily:"'Roboto', sans-serif",offsetX:10,offsetY:10,labels:{useSeriesColors:!1},markers:{width:12,height:12,radius:5},itemMargin:{horizontal:25,vertical:4}},responsive:[{breakpoint:450,chart:{width:280,height:280},options:{legend:{show:!1,position:"bottom"}}}]},F=function(){var e=Object(d.a)(),t=Object(h.a)().navType,a=e.palette.text.primary,r=e.palette.dark.light,s=e.palette.grey[200],o=e.palette.background.paper,b=Object(c.useState)([44,55,13,43,22]),j=Object(l.a)(b,1)[0],u=Object(c.useState)(T),y=Object(l.a)(u,2),x=y[0],O=y[1],g=e.palette.secondary.main,f=e.palette.primary.main,k=e.palette.success.dark,v=e.palette.error.main,w=e.palette.warning.dark,C=e.palette.orange.dark;return n.a.useEffect((function(){O((function(e){return Object(i.a)(Object(i.a)({},e),{},{colors:[g,f,k,v,w,C],xaxis:{labels:{style:{colors:[a,a,a,a,a,a,a]}}},yaxis:{labels:{style:{colors:[a]}}},grid:{borderColor:"dark"===t?r+20:s},legend:{labels:{colors:"grey.500"}},stroke:{colors:[o]}})}))}),[t,a,r,s,o,g,f,k,v,w,C]),Object(m.jsx)("div",{id:"chart",children:Object(m.jsx)(p.a,{options:x,series:j,type:"pie"})})},M={chart:{width:450,height:450,type:"polarArea"},fill:{opacity:1},legend:{show:!0,fontFamily:"'Roboto', sans-serif",offsetX:10,offsetY:10,labels:{useSeriesColors:!1},markers:{width:12,height:12,radius:5},itemMargin:{horizontal:25,vertical:4}},responsive:[{breakpoint:450,chart:{width:280,height:280},options:{legend:{show:!1,position:"bottom"}}}]},B=function(){var e=Object(d.a)(),t=Object(h.a)().navType,a=e.palette.text.primary,r=e.palette.dark.light,s=e.palette.grey[200],o=e.palette.background.paper,b=Object(c.useState)([14,23,21,17,15,10,12,17,21]),j=Object(l.a)(b,1)[0],u=Object(c.useState)(M),y=Object(l.a)(u,2),x=y[0],O=y[1],g=e.palette.secondary.main,f=e.palette.primary.main,k=e.palette.success.dark,v=e.palette.error.main,w=e.palette.warning.dark,C=e.palette.orange.dark;return n.a.useEffect((function(){O((function(e){return Object(i.a)(Object(i.a)({},e),{},{colors:[g,f,k,v,w,C,v],xaxis:{labels:{style:{colors:[a,a,a,a,a,a,a]}}},yaxis:{labels:{style:{colors:[a]}}},grid:{borderColor:"dark"===t?r+20:s},legend:{labels:{colors:"grey.500"}},stroke:{colors:[o]},plotOptions:{polarArea:{rings:{strokeColor:"dark"===t?r+20:s},spokes:{connectorColors:"dark"===t?r+20:s}}}})}))}),[t,a,r,s,o,g,f,k,v,w,C]),Object(m.jsx)("div",{id:"chart",children:Object(m.jsx)(p.a,{options:x,series:j,type:"polarArea"})})},E={chart:{type:"radialBar",width:450,height:450},plotOptions:{radialBar:{offsetY:0,startAngle:0,endAngle:270,hollow:{margin:5,size:"30%",background:"transparent",image:void 0},dataLabels:{name:{show:!1},value:{show:!1}}}},labels:["Vimeo","Messenger","Facebook","LinkedIn"],legend:{show:!0,floating:!0,fontSize:"16px",position:"left",offsetX:0,offsetY:15,labels:{useSeriesColors:!0},markers:{size:0},formatter:function(e,t){return"".concat(e,":  ").concat(t.w.globals.series[t.seriesIndex])},itemMargin:{vertical:3}},responsive:[{breakpoint:450,chart:{width:280,height:280},options:{legend:{show:!1,position:"bottom"}}}]},z=function(){var e=Object(d.a)(),t=Object(h.a)().navType,a=e.palette.text.primary,r=e.palette.dark.light,s=e.palette.grey[200],o=Object(c.useState)([76,67,61,90]),b=Object(l.a)(o,1)[0],j=Object(c.useState)(E),u=Object(l.a)(j,2),y=u[0],x=u[1],O=e.palette.secondary.main,g=e.palette.primary.main,f=e.palette.success.dark,k=e.palette.error.main;return n.a.useEffect((function(){x((function(e){return Object(i.a)(Object(i.a)({},e),{},{colors:[O,g,f,k],xaxis:{labels:{style:{colors:[a,a,a,a,a,a,a]}}},yaxis:{labels:{style:{colors:[a]}}},grid:{borderColor:"dark"===t?r+20:s},plotOptions:{radialBar:{track:{background:"dark"===t?r+20:s}}}})}))}),[t,a,r,s,O,g,f,k]),Object(m.jsx)("div",{id:"chart",children:Object(m.jsx)(p.a,{options:y,series:b,type:"radialBar"})})};t.default=function(){return Object(m.jsxs)(r.a,{container:!0,spacing:o.c,children:[Object(m.jsx)(r.a,{item:!0,xs:12,md:6,lg:6,children:Object(m.jsx)(s.a,{title:"Column Chart",children:Object(m.jsx)(k,{})})}),Object(m.jsx)(r.a,{item:!0,xs:12,md:6,lg:6,children:Object(m.jsx)(s.a,{title:"Bar Chart",children:Object(m.jsx)(g,{})})}),Object(m.jsx)(r.a,{item:!0,xs:12,md:6,lg:4,children:Object(m.jsx)(s.a,{title:"Line Chart",children:Object(m.jsx)(w,{})})}),Object(m.jsx)(r.a,{item:!0,xs:12,md:6,lg:4,children:Object(m.jsx)(s.a,{title:"Area Chart",children:Object(m.jsx)(x,{})})}),Object(m.jsx)(r.a,{item:!0,xs:12,md:6,lg:4,children:Object(m.jsx)(s.a,{title:"Mixed Chart",children:Object(m.jsx)(S,{})})}),Object(m.jsx)(r.a,{item:!0,xs:12,md:6,xl:4,children:Object(m.jsx)(s.a,{title:"Redial Chart",children:Object(m.jsx)(z,{})})}),Object(m.jsx)(r.a,{item:!0,xs:12,md:6,xl:4,children:Object(m.jsx)(s.a,{title:"Polar Chart",children:Object(m.jsx)(B,{})})}),Object(m.jsx)(r.a,{item:!0,xs:12,md:6,xl:4,children:Object(m.jsx)(s.a,{title:"Pie Chart",children:Object(m.jsx)(F,{})})})]})}}}]);
//# sourceMappingURL=174.f5b339ea.chunk.js.map