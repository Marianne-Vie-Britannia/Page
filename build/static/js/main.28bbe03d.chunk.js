(this.webpackJsonpreact_test=this.webpackJsonpreact_test||[]).push([[0],{14:function(e,t,a){e.exports={App_footer:"Footer_App_footer__1975Q",App_info:"Footer_App_info__k_fAK"}},140:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(35),o=a.n(r),l=(a(49),a(141)),i=a(5),p=a(36),s=a.n(p),u=a(7),_=a(3),m=a.n(_);var f=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(l.d)(),i=Object(l.e)();return c.a.useEffect((function(){r(i.pathname)}),[i.pathname]),c.a.createElement("header",{className:m.a.App_header},c.a.createElement((function(e){function t(){o.push("/")}return"/"===e.cur?c.a.createElement("div",{className:m.a.App_header_div,onClick:t},"EcmaScript"):c.a.createElement("div",{className:m.a.App_header_div_off,onClick:t},"EcmaScript")}),{cur:a}),c.a.createElement((function(e){function t(){o.push("/Blockchain")}return"/Blockchain"===e.cur?c.a.createElement("section",{className:m.a.App_header_sections,onClick:t},"Blockchain"):c.a.createElement("section",{className:m.a.App_header_sections_off,onClick:t},"Blockchain")}),{cur:a}),c.a.createElement((function(e){function t(){o.push("/Music")}return"/Music"===e.cur?c.a.createElement("section",{className:m.a.App_header_sections,onClick:t},"Music"):c.a.createElement("section",{className:m.a.App_header_sections_off,onClick:t},"Music")}),{cur:a}),c.a.createElement((function(e){function t(){o.push("/Memos")}return"/Memos"===e.cur?c.a.createElement("section",{className:m.a.App_header_sections,onClick:t},"Memos"):c.a.createElement("section",{className:m.a.App_header_sections_off,onClick:t},"Memos")}),{cur:a}),c.a.createElement((function(e){function t(){o.push("/Colors")}return"/Colors"===e.cur?c.a.createElement("section",{className:m.a.App_header_sections,onClick:t},"Colors"):c.a.createElement("section",{className:m.a.App_header_sections_off,onClick:t},"Colors")}),{cur:a}))},h=a(14),d=a.n(h);var E=function(){return c.a.createElement("footer",{className:d.a.App_footer},c.a.createElement("div",{className:d.a.App_info},"This is a personal site, and has nothing to do with any other groups or people"),c.a.createElement("div",{className:d.a.App_info},"\u6d59ICP\u590719043965\u53f7"))},A=a(39),v=a.n(A),b=a(40),k=a.n(b),x=a(9),N=a.n(x);function g(e){var t=Object(l.f)().id,a=Object(n.useState)("loading..."),r=Object(u.a)(a,2),o=r[0],i=r[1];return Object(n.useEffect)((function(){fetch("http://rukafan.club:3000/".concat(t,".md"),{mode:"cors"}).then((function(e){return e.text()})).then((function(e){i(c.a.createElement(N.a,{source:e}))}))}),[t]),c.a.createElement("div",{className:k.a.App},o)}var C=a(41),j=a.n(C);function M(e){var t=Object(l.f)().id,a=Object(n.useState)("loading..."),r=Object(u.a)(a,2),o=r[0],i=r[1];return Object(n.useEffect)((function(){fetch("http://rukafan.club:3000/".concat(t,".md"),{mode:"cors"}).then((function(e){return e.text()})).then((function(e){i(c.a.createElement(N.a,{source:e}))}))}),[t]),c.a.createElement("div",{className:j.a.App},o)}a(42);var O=function(){return c.a.createElement("h3",null,"NoMatch")},w=a(43),B=a.n(w),S=function(){return c.a.createElement("div",null,"loading")},H=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:S;return B()({loader:e,loading:t})},R=H((function(){return a.e(4).then(a.bind(null,146))})),y=H((function(){return a.e(3).then(a.bind(null,150))})),T=H((function(){return a.e(7).then(a.bind(null,147))})),D=H((function(){return a.e(5).then(a.bind(null,148))})),F=H((function(){return a.e(6).then(a.bind(null,149))}));var I=function(){return c.a.createElement("div",{className:v.a.App},c.a.createElement(l.c,null,c.a.createElement(l.a,{exact:!0,path:"/"},c.a.createElement(R,null)),c.a.createElement(l.a,{path:"/Blockchain"},c.a.createElement(F,null)),c.a.createElement(l.a,{exact:!0,path:"/Music"},c.a.createElement(T,null)),c.a.createElement(l.a,{exact:!0,path:"/Memos"},c.a.createElement(D,null)),c.a.createElement(l.a,{exact:!0,path:"/Colors"},c.a.createElement(y,null)),c.a.createElement(l.a,{exact:!0,path:"/AboutThisSite"},c.a.createElement(y,null)),c.a.createElement(l.a,{exact:!0,path:"/AsyncComponents"},c.a.createElement(y,null)),c.a.createElement(l.a,{path:"/Memos/:id",children:c.a.createElement(g,null)}),c.a.createElement(l.a,{path:"/ES/:id",children:c.a.createElement(M,null)}),c.a.createElement(l.a,{path:"*"},c.a.createElement(O,null))))};var L=function(){var e=Object(i.a)();return c.a.createElement(l.b,{history:e},c.a.createElement("div",{className:s.a.App},c.a.createElement(f,null),c.a.createElement(I,null),c.a.createElement(E,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},3:function(e,t,a){e.exports={App:"Header_App__2TSD1",App_header:"Header_App_header__3a4zR",App_header_div:"Header_App_header_div__3DK9c",App_header_div_off:"Header_App_header_div_off__3ol0g",App_header_sections:"Header_App_header_sections__3xXsP",App_header_sections_off:"Header_App_header_sections_off__zq3ZS"}},36:function(e,t,a){e.exports={App:"App_App__16ZpL",App_logo:"App_App_logo__1XrvG",App_content:"App_App_content__1u_Gd"}},39:function(e,t,a){e.exports={App:"Router_App__vgLUa",pic1:"Router_pic1__1BLsl",img:"Router_img__HfIUi",as:"Router_as__2FVij",a1:"Router_a1__2MqZA"}},40:function(e,t,a){e.exports={App:"text_App__1SABf"}},41:function(e,t,a){e.exports={App:"text_App__3md0T"}},42:function(e,t,a){e.exports={App:"text_App__21BDw"}},44:function(e,t,a){e.exports=a(140)},49:function(e,t,a){}},[[44,1,2]]]);
//# sourceMappingURL=main.28bbe03d.chunk.js.map