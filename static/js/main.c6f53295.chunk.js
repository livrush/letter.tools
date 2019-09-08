(window["webpackJsonpletter-tools"]=window["webpackJsonpletter-tools"]||[]).push([[0],{34:function(e,t,a){e.exports=a(48)},39:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=(a(39),a(18)),o=a(8),i=a(9),s=a(10),m=function(){return r.a.createElement("div",{className:"actionBar-container"},r.a.createElement(f,{config:[{icon:s.b},{icon:s.d}]}),r.a.createElement(f,{config:[{icon:s.f},{icon:s.a},{icon:s.e},{icon:s.c}]}))},u=a(17),p=a(1),E=a.n(p),d=a(26),v=function(e){var t=e.icon,a=e.text,n=Object(u.a)(e,["icon","text"]),l=t?r.a.createElement(d.a,{className:"button-icon",icon:t}):null,c=a?r.a.createElement("span",{className:"button-text"},a):null;return r.a.createElement("button",Object.assign({className:"button"},n),l,c)};v.protoTypes={icon:E.a.node,text:E.a.string},v.defaultProps={icon:null,text:""};var f=function(e){var t=e.config;return r.a.createElement("div",{className:"button-group"},t.map(function(e,t){var a=e.icon,n=e.text,l=Object(u.a)(e,["icon","text"]);return r.a.createElement(v,Object.assign({key:a.iconName+n,icon:a,text:n},l))}))},h=function(){return r.a.createElement("nav",{className:"nav"},r.a.createElement("div",{className:"container header"},r.a.createElement(o.b,{to:"/"},r.a.createElement("div",{className:"logo title"},"letter.tools")),r.a.createElement("div",{className:"links"},r.a.createElement(o.b,{to:"letter"},"Letter"),r.a.createElement(o.b,{to:"list"},"List"))))},b=function(e){var t=e.user;return r.a.createElement("div",{className:"home-letter"},r.a.createElement("div",{className:"home-letter-top"},r.a.createElement("p",{className:"home-letter-prefix-container title"},r.a.createElement("span",{className:"home-letter-prefix t-black"},"any"),r.a.createElement("span",{className:"home-letter-prefix t-green"},"thank you"),r.a.createElement("span",{className:"home-letter-prefix t-red"},"rejection"),r.a.createElement("span",{className:"home-letter-prefix t-yellow"},"follow up"),r.a.createElement("span",{className:"home-letter-prefix t-blue"},"cover")),r.a.createElement("h1",{className:"home-letter-title title"},"letter.tools")),r.a.createElement("div",{className:"home-letter-links"},r.a.createElement(o.b,{className:"home-letter-link",to:"letter"},"Start fresh"),t?r.a.createElement(o.b,{className:"home-letter-link",to:"list"},"Continue"):r.a.createElement(v,{className:"home-letter-link",text:"Continue",disabled:!0})))},y=function(e){var t,a=e.config,n=[];for(t in a){var l=a[t];n.push(r.a.createElement(N,{key:t,variable:{name:t,value:l}}))}return r.a.createElement("div",{className:"injections-container"},r.a.createElement("h2",{className:"injections-title"},"Injections"),n)},N=function(e){var t=e.variable;return r.a.createElement("div",{className:"input-container"},r.a.createElement("label",{className:"input-label"},t.name),r.a.createElement("input",{className:"input",placeholder:t.name,type:"text",name:t.name,id:t.name}))},g=a(28),O=a(29),w=a(32),j=a(30),x=a(33),T=function(e){function t(){return Object(g.a)(this,t),Object(w.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementsByClassName("letter-textarea")[0];e&&e.addEventListener("keyup",function(e){e.target.style.height=e.target.scrollHeight+"px"},!1)}},{key:"render",value:function(){var e=this.props,t=e.edit,a=e.letterText,n=r.a.createElement("textarea",{className:"letter-textarea"}),l=r.a.createElement("div",{className:"letter-text"},a.split("\n").map(function(e,t){return r.a.createElement("p",{key:e.slice(0,5)||"Empty-".concat(t)},e)}));return r.a.createElement("div",{className:"letter-container"},t?n:l)}}]),t}(r.a.Component);T.defaultProps={edit:!0};var k=function(){return r.a.createElement("div",{className:"homePage-container"},r.a.createElement(b,null))},P=function(e){var t=e.letter;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4"},r.a.createElement("h2",{className:"letter-title"},t.title),r.a.createElement(y,{config:{Salutation:"",Company:"",Position:"",Skill:""}})),r.a.createElement("div",{className:"col-8"},r.a.createElement(m,null),r.a.createElement(T,{edit:t.edit,letterText:t.content}))))},L=function(){return r.a.createElement("div",null,"List")};function _(e){return console.log(e),{letter:e.letter,variables:e.variables}}var C=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,component:null}),r.a.createElement(i.a,{component:h})),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,component:k}),r.a.createElement(i.a,{path:"/letter",component:Object(c.b)(_)(P)}),r.a.createElement(i.a,{path:"/list",component:L}))),r.a.createElement("footer",{className:"footer"},"Built by\xa0",r.a.createElement("a",{href:"http://pafiu.me",target:"_blank",rel:"noopener noreferrer"},"Olivia Sabo-Rush")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(12),A=a(31),B=a(14),I="UPDATE_VARIABLE",R="UPDATE_LETTER_TITLE",S="UPDATE_LETTER_CONTENT",U="EDIT_LETTER_CONTENT",W="VIEW_LETTER_CONTENT",V="{{salutation}}\n\nWelcome to letter.tools! This site is dedicated to simplifying writing multiple letters with similar, but varying, content.\n\nAll you need to do is write up the letter you want, and set anything you want to be injected you should wrap in double curly braces, like this: {{variable}}\n\nOnce you set your variables they should show up in the left side column, and you can use the accompanying inputs to specify the value of each variable.\n\n{{regards}}";function J(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function H(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?J(a,!0).forEach(function(t){Object(A.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):J(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var M=Object(D.b)({variables:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return t.payload.newVariableNames.reduce(function(t,a){return t[a]=e[a]||null,t},{});case I:return[].concat(Object(B.a)(e),Object(B.a)(t.payload));default:return e}},letter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{edit:!0,title:"Untitled Letter",content:V},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return H({},e,{title:t.payload.newTitle});case S:return H({},e,{content:t.payload.newContent});case U:return H({},e,{edit:!0});case W:return H({},e,{edit:!1});default:return e}}}),$=Object(D.c)(M);Object(l.render)(r.a.createElement(c.a,{store:$},r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.c6f53295.chunk.js.map