(this.webpackJsonpwidgets=this.webpackJsonpwidgets||[]).push([[0],{41:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),s=n(16),i=n.n(s),l=n(2),o=n(4),u=n.n(o),j=n(5),d=n(6),b=n.n(d),h=function(){var e=Object(a.useState)("programming"),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)([]),i=Object(l.a)(s,2),o=i[0],d=i[1];console.log(o),Object(a.useEffect)((function(){var e=function(){var e=Object(j.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://en.wikipedia.org/w/api.php",{params:{action:"query",list:"search",origin:"*",format:"json",srsearch:n}});case 2:t=e.sent,c=t.data,d(c.query.search);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(!n||o.length){var t=setTimeout((function(){n&&e()}),500);return function(){clearTimeout(t)}}e()}),[n,o.length]);var h=o.map((function(e){return Object(c.jsxs)("div",{className:"item",children:[Object(c.jsx)("div",{className:"right floated content",children:Object(c.jsx)("a",{className:"ui button",href:"https://en.wikipedia.org?curid=".concat(e.pageid),children:"Go"})}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("div",{className:"header",children:e.title}),Object(c.jsx)("span",{dangerouslySetInnerHTML:{__html:e.snippet}})]})]},e.pageid)}));return Object(c.jsxs)("div",{className:"ui container",children:[Object(c.jsx)("div",{className:"ui form",children:Object(c.jsxs)("div",{className:"ui field",children:[Object(c.jsx)("label",{children:"Enter Search Term"}),Object(c.jsx)("input",{value:n,onChange:function(e){return r(e.target.value)},className:"input"})]})}),Object(c.jsx)("div",{className:"ui celled list",children:h})]})},O=function(e){var t=e.items,n=Object(a.useState)(null),s=Object(l.a)(n,2),i=s[0],o=s[1],u=t.map((function(e,t){var n=t===i?"active":"";return Object(c.jsxs)(r.a.Fragment,{children:[Object(c.jsxs)("div",{className:"title ".concat(n),onClick:function(){return function(e){o(e)}(t)},children:[Object(c.jsx)("i",{className:"dropdown icon"}),e.title]}),Object(c.jsx)("div",{className:"content ".concat(n),children:Object(c.jsx)("p",{children:e.content})})]},e.title)}));return Object(c.jsx)("div",{className:"ui styled accordion",children:u})},v=function(e){var t=e.label,n=e.options,r=e.selected,s=e.onSelectedChange,i=Object(a.useState)(!1),o=Object(l.a)(i,2),u=o[0],j=o[1],d=Object(a.useRef)();Object(a.useEffect)((function(){var e=function(e){d.current&&d.current.contains(e.target)||j(!1)};return document.body.addEventListener("click",e),function(){document.body.removeEventListener("click",e)}}),[]);var b=n.map((function(e){return e.value===r.value?null:Object(c.jsx)("div",{className:"item",onClick:function(){return s(e)},children:e.label},e.value)}));return Object(c.jsx)("div",{ref:d,className:"ui form",children:Object(c.jsxs)("div",{className:"field",children:[Object(c.jsx)("label",{className:"label",children:t}),Object(c.jsxs)("div",{onClick:function(){return j(!u)},className:"ui selection dropdown ".concat(u?"visible active":""),children:[Object(c.jsx)("i",{className:"dropdown icon"}),Object(c.jsx)("div",{className:"text",children:r.label}),Object(c.jsx)("div",{className:"menu ".concat(u?"visible transition":""),children:b})]})]})})},f=function(e){var t=e.language,n=e.text,r=Object(a.useState)(""),s=Object(l.a)(r,2),i=s[0],o=s[1],d=Object(a.useState)(n),h=Object(l.a)(d,2),O=h[0],v=h[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){v(n)}),1e3);return function(){clearTimeout(e)}}),[n]),Object(a.useEffect)((function(){(function(){var e=Object(j.a)(u.a.mark((function e(){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("https://translation.googleapis.com/language/translate/v2",{},{params:{q:O,target:t.value,key:"AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"}});case 2:n=e.sent,c=n.data,o(c.data.translations[0].translatedText);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,O]),Object(c.jsx)("div",{children:i})},m=[{label:"Afrikaans",value:"af"},{label:"Arabic",value:"ar"},{label:"Hindi",value:"hi"},{label:"Dutch",value:"nl"}],p=function(){var e=Object(a.useState)(m[0]),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(""),i=Object(l.a)(s,2),o=i[0],u=i[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"ui form",children:Object(c.jsxs)("div",{className:"field",children:[Object(c.jsx)("label",{children:"Enter Text"}),Object(c.jsx)("input",{value:o,onChange:function(e){return u(e.target.value)}})]})}),Object(c.jsx)(v,{label:"Select a Language",selected:n,onSelectedChange:r,options:m}),Object(c.jsx)("hr",{}),Object(c.jsx)("h3",{className:"ui header",children:"Output"}),Object(c.jsx)(f,{language:n,text:o})]})},x=function(e){var t=e.path,n=e.children,c=Object(a.useState)(window.location.pathname),r=Object(l.a)(c,2),s=r[0],i=r[1];return Object(a.useEffect)((function(){var e=function(){i(window.location.pathname)};return window.addEventListener("popstate",e),function(){window.removeEventListener("popstate",e)}}),[]),s===t?n:null},g=function(e){var t=e.className,n=e.href,a=e.children;return Object(c.jsx)("a",{onClick:function(e){e.preventDefault(),window.history.pushState({},"",n);var t=new PopStateEvent("popstate");window.dispatchEvent(t)},className:t,href:n,children:a})},w=function(){return Object(c.jsxs)("div",{className:"ui secondary pointing menu",children:[Object(c.jsx)(g,{href:"/",className:"item",children:"Accordion"}),Object(c.jsx)(g,{href:"/list",className:"item",children:"Search"}),Object(c.jsx)(g,{href:"/dropdown",className:"item",children:"DropDown"}),Object(c.jsx)(g,{href:"/translate",className:"item",children:"Translate"})]})},N=[{title:"what is react?",content:"React is a front end javascript framework"},{title:"why use react?",content:"React is a favorite js library among engineers"},{title:"how do you use react?",content:"You use react by creating components"}],S=[{label:"the color red",value:"red"},{label:"the color green",value:"green"},{label:"the color blue",value:"blue"}];var y=function(){var e=Object(a.useState)(S[0]),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)(w,{}),Object(c.jsx)(x,{path:"/",children:Object(c.jsx)(O,{items:N})}),Object(c.jsx)(x,{path:"/list",children:Object(c.jsx)(h,{})}),Object(c.jsx)(x,{path:"/dropdown",children:Object(c.jsx)(v,{label:"Select a color",options:S,selected:n,onSelectedChange:r})}),Object(c.jsx)(x,{path:"/translate",children:Object(c.jsx)(p,{})})]})};i.a.render(Object(c.jsx)(y,{}),document.querySelector("#root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.bd4cf479.chunk.js.map