(this["webpackJsonpberry-material-react"]=this["webpackJsonpberry-material-react"]||[]).push([[74],{1123:function(e,t,r){"use strict";var o=r(94);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(113)),a=r(1),i=(0,n.default)([(0,a.jsx)("path",{d:"M8 7h11v14H8z",opacity:".3"},"0"),(0,a.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"},"1")],"ContentCopyTwoTone");t.default=i},1216:function(e,t,r){"use strict";var o=r(1217).CopyToClipboard;o.CopyToClipboard=o,e.exports=o},1217:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var o=a(r(0)),n=a(r(1218));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?f(e):t}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var j=function(e){function t(){var e,r;s(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return h(f(r=u(this,(e=d(t)).call.apply(e,[this].concat(i)))),"onClick",(function(e){var t=r.props,a=t.text,i=t.onCopy,c=t.children,l=t.options,s=o.default.Children.only(c),p=(0,n.default)(a,l);i&&i(a,p),s&&s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e)})),r}var r,a,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),r=t,a=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),r=l(e,["text","onCopy","options","children"]),n=o.default.Children.only(t);return o.default.cloneElement(n,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(r,!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r,{onClick:this.onClick}))}}],a&&p(r.prototype,a),i&&p(r,i),t}(o.default.PureComponent);t.CopyToClipboard=j,h(j,"defaultProps",{onCopy:void 0,options:void 0})},1218:function(e,t,r){"use strict";var o=r(1219),n={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,a,i,c,l,s,p=!1;t||(t={}),r=t.debug||!1;try{if(i=o(),c=document.createRange(),l=document.getSelection(),(s=document.createElement("span")).textContent=e,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),"undefined"===typeof o.clipboardData){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=n[t.format]||n.default;window.clipboardData.setData(a,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))})),document.body.appendChild(s),c.selectNodeContents(s),l.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");p=!0}catch(u){r&&console.error("unable to copy using execCommand: ",u),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),p=!0}catch(u){r&&console.error("unable to copy using clipboardData: ",u),r&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(c):l.removeAllRanges()),s&&document.body.removeChild(s),i()}return p}},1219:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],o=0;o<e.rangeCount;o++)r.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},1572:function(e,t,r){"use strict";var o=r(94);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(113)),a=r(1),i=(0,n.default)((0,a.jsx)("path",{d:"m19 3-6 6 2 2 7-7V3zm-9 3c0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64c.23-.5.36-1.05.36-1.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-8.5c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5z"}),"ContentCutTwoTone");t.default=i},1805:function(e,t,r){"use strict";r.r(t);var o=r(12),n=r(0),a=r(6),i=r(222),c=r(691),l=r(681),s=r(1788),p=r(683),u=r(686),d=r(402),f=r(1216),b=r(135),h=r(704),j=r(75),m=r(184),y=r(51),g=r(1123),O=r.n(g),x=r(1572),v=r.n(x),C=r(843),w=r.n(C),z=r(1);t.default=function(){var e=Object(a.d)(),t=Object(n.useState)("https://berrydashboard.io/"),r=Object(o.a)(t,2),g=r[0],x=r[1],C=Object(n.useState)("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),k=Object(o.a)(C,2),S=k[0],P=k[1],L=Object(n.useState)("Lorem ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra l\xe1 , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. M\xe9 faiz elementum girarzis, nisi eros vermeio, in elementis m\xe9 pra quem \xe9 amistosis quis leo. Manduma pindureta quium dia nois paga."),T=Object(o.a)(L,1)[0];return Object(z.jsx)(b.a,{title:"Clipboard",secondary:Object(z.jsx)(h.a,{icon:Object(z.jsx)(w.a,{fontSize:"small"}),link:"https://www.npmjs.com/package/react-copy-to-clipboard"}),children:Object(z.jsxs)(i.a,{container:!0,spacing:y.c,children:[Object(z.jsx)(i.a,{item:!0,xs:12,children:Object(z.jsx)(j.a,{title:"Copy from TextField",children:Object(z.jsx)(c.a,{fullWidth:!0,label:"Website",type:"text",value:g,onChange:function(e){x(e.target.value)},InputProps:{endAdornment:Object(z.jsx)(l.a,{position:"end",children:Object(z.jsx)(f.CopyToClipboard,{text:g,onCopy:function(){return e(Object(m.c)({open:!0,message:"Text Copied",variant:"alert",alert:{color:"success"},close:!1,anchorOrigin:{vertical:"top",horizontal:"right"},transition:"SlideLeft"}))},children:Object(z.jsx)(s.a,{title:"Copy",children:Object(z.jsx)(p.a,{"aria-label":"Copy from another element",edge:"end",size:"large",children:Object(z.jsx)(O.a,{sx:{fontSize:"1.1rem"}})})})})})}})})}),Object(z.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(z.jsxs)(j.a,{title:"Copy from TextArea",children:[Object(z.jsx)(c.a,{multiline:!0,rows:4,fullWidth:!0,label:"Copy text",onChange:function(e){return P(e.target.value)},value:S,sx:{mb:y.c}}),Object(z.jsx)(f.CopyToClipboard,{text:S,onCopy:function(){return e(Object(m.c)({open:!0,message:"Text Copied",variant:"alert",alert:{color:"success"},close:!1,anchorOrigin:{vertical:"top",horizontal:"right"},transition:"SlideLeft"}))},children:Object(z.jsxs)(u.a,{variant:"contained",size:"small",sx:{mr:1.5},children:[Object(z.jsx)(O.a,{sx:{fontSize:"1rem",mr:1}})," Copy"]})}),Object(z.jsx)(f.CopyToClipboard,{text:S,onCopy:function(){P(""),e(Object(m.c)({open:!0,message:"Text Cut",variant:"alert",alert:{color:"success"},close:!1,anchorOrigin:{vertical:"top",horizontal:"right"},transition:"SlideLeft"}))},children:Object(z.jsxs)(u.a,{variant:"contained",size:"small",color:"secondary",children:[Object(z.jsx)(v.a,{sx:{fontSize:"1rem",mr:1}})," Cut"]})})]})}),Object(z.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(z.jsx)(j.a,{title:"Copy from Container",secondary:Object(z.jsx)(f.CopyToClipboard,{text:T,onCopy:function(){return e(Object(m.c)({open:!0,message:"Text Copied",variant:"alert",alert:{color:"success"},close:!1,anchorOrigin:{vertical:"top",horizontal:"right"},transition:"SlideLeft"}))},children:Object(z.jsx)(s.a,{title:"Copy",children:Object(z.jsx)(u.a,{variant:"contained",sx:{mr:1.5,px:1,minWidth:"auto"},children:Object(z.jsx)(O.a,{sx:{fontSize:"1rem"}})})})}),children:Object(z.jsx)(d.a,{sx:{p:0,pb:2.5},children:T})})})]})})}},702:function(e,t,r){"use strict";var o=r(5),n=r(74),a=r(37),i=r(680),c=r(1),l=["color","outline","size","sx"];t.a=function(e){var t=e.color,r=e.outline,s=e.size,p=e.sx,u=Object(n.a)(e,l),d=Object(a.a)(),f=t&&!r&&{color:d.palette.background.paper,bgcolor:"".concat(t,".main")},b=r&&{color:t?"".concat(t,".main"):"primary.main",bgcolor:d.palette.background.paper,border:"2px solid",borderColor:t?"".concat(t,".main"):"primary.main"},h={};switch(s){case"badge":h={width:d.spacing(3.5),height:d.spacing(3.5)};break;case"xs":h={width:d.spacing(4.25),height:d.spacing(4.25)};break;case"sm":h={width:d.spacing(5),height:d.spacing(5)};break;case"lg":h={width:d.spacing(9),height:d.spacing(9)};break;case"xl":h={width:d.spacing(10.25),height:d.spacing(10.25)};break;case"md":h={width:d.spacing(7.5),height:d.spacing(7.5)};break;default:h={}}return Object(c.jsx)(i.a,Object(o.a)({sx:Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)({},f),b),h),p)},u))}},704:function(e,t,r){"use strict";var o=r(37),n=r(1788),a=r(605),i=r(678),c=r(702),l=r(1);t.a=function(e){var t=e.title,r=e.link,s=e.icon,p=Object(o.a)();return Object(l.jsx)(n.a,{title:t||"Reference",placement:"left",children:Object(l.jsxs)(a.a,{disableRipple:!0,children:[!s&&Object(l.jsx)(c.a,{component:i.a,href:r,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,children:Object(l.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(l.jsxs)("g",{clipPath:"url(#clip0)",children:[Object(l.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:p.palette.primary[800]}),Object(l.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:p.palette.primary.main}),Object(l.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:p.palette.primary[800]}),Object(l.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:p.palette.primary.main})]}),Object(l.jsx)("defs",{children:Object(l.jsx)("clipPath",{id:"clip0",children:Object(l.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),s&&Object(l.jsx)(c.a,{component:i.a,href:r,target:"_blank",size:"badge",color:"primary",outline:!0,children:s})]})})}},843:function(e,t,r){"use strict";var o=r(94);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(113)),a=r(1),i=(0,n.default)((0,a.jsx)("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"}),"Link");t.default=i}}]);
//# sourceMappingURL=74.4096f966.chunk.js.map