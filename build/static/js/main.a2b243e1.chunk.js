(this.webpackJsonpDGV2=this.webpackJsonpDGV2||[]).push([[8],{155:function(e,t,n){e.exports={firstText:"style_firstText__2igjI",circleRed:"style_circleRed__2Om2e",circleGray:"style_circleGray__1KCar",navbarcollapse:"style_navbarcollapse__2BVf_",miniBlankDiv:"style_miniBlankDiv__2ywgT",mainBar:"style_mainBar__IJfZy",mainContent:"style_mainContent__18q9j",actions:"style_actions__1MFAd",dropdownMenu:"style_dropdownMenu__AWNke",blankDiv:"style_blankDiv__3LlyJ",imgStyle:"style_imgStyle__2kovx",headerNav:"style_headerNav__qftW2",web3Button:"style_web3Button__1cHpj",headerBar:"style_headerBar__17Nne",subNav:"style_subNav__2AZIh",mainContainer:"style_mainContainer__zyHkE",container:"style_container__wYJgR",header:"style_header__1gcJd",card:"style_card__2LFl1",condition:"style_condition__3CVUg",inputContainer:"style_inputContainer__2sEZG",outcome:"style_outcome__ixUuY",outcomeInfo:"style_outcomeInfo__4dvji",rightOutcome:"style_rightOutcome__hnF3c",wrongOutcome:"style_wrongOutcome__3XzkB",bold:"style_bold__1gTwf",bar:"style_bar__3FWUm","progress-bar-custom":"style_progress-bar-custom__2kxnT"}},156:function(e,t,n){"use strict";n(4);var c=n(736),a=n(10);t.a=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("h1",{className:"text-center",children:Object(a.jsx)(c.a,{animation:"border",as:"span"})})})}},379:function(e,t){},381:function(e,t){},385:function(e,t){},410:function(e,t){},412:function(e,t){},421:function(e,t){},423:function(e,t){},432:function(e,t){},434:function(e,t){},481:function(e,t){},500:function(e,t){},567:function(e,t){},608:function(e,t){},610:function(e,t){},617:function(e,t){},618:function(e,t){},640:function(e,t){},647:function(e,t){},694:function(e,t){},735:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n(217),r=n.n(a),i=n(15),o=n.n(i),s=n(26),u=n(32),l=n(158),_=n.n(l),b=function(){var e=Object(s.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:if(null!=t.defaultAccount){e.next=9;break}return e.next=5,t.eth.getAccounts();case 5:return n=e.sent,e.abrupt("return",n[0]||null);case 9:return e.abrupt("return",t.defaultAccount);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=n(213),j=n(24),h=n(155),f=n.n(h),m=n(156),y=n(10),x=Object(c.lazy)((function(){return Promise.all([n.e(4),n.e(11),n.e(22)]).then(n.bind(null,3386))})),O=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(14),n.e(6),n.e(29)]).then(n.bind(null,3387))})),p=Object(c.lazy)((function(){return n.e(15).then(n.bind(null,3388))})),v=Object(c.lazy)((function(){return Promise.all([n.e(4),n.e(28)]).then(n.bind(null,3382))})),w=Object(c.lazy)((function(){return Promise.all([n.e(4),n.e(25)]).then(n.bind(null,3383))})),g=function(e){var t=e.web3,n=e.account,a=e.setProviderData;return Object(y.jsxs)(d.a,{children:[Object(y.jsx)("div",{className:f.a.headerBar,children:Object(y.jsx)(c.Suspense,{fallback:m.a,children:Object(y.jsx)(x,{web3:t,account:n,setProviderData:a,children:" "})})}),Object(y.jsx)("div",{className:f.a.mainContent,children:Object(y.jsx)(c.Suspense,{fallback:m.a,children:Object(y.jsxs)(j.c,{children:[Object(y.jsx)(j.a,{path:"/markets/research",children:Object(y.jsx)(v,{web3:t,account:n})}),Object(y.jsx)(j.a,{path:"/markets/hottrend",children:Object(y.jsx)(w,{web3:t,account:n})}),Object(y.jsx)(j.a,{path:"/wallet",children:n&&t?Object(y.jsx)(O,{web3:t,account:n,yakiAddress:"0xf42FF460BAEfBd932606cD56328d9dcf33240230"}):Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("h1",{className:"text-center",children:"Connect your account first"})})}),Object(y.jsx)(j.a,{path:"/",children:Object(y.jsx)(p,{})})]})})})]})},k=n.p+"static/media/bg.00bc97ba.svg",B={backgroundImage:"url(".concat(k,")"),backgroundSize:"100% 100%"},C=function(){var e=Object(c.useState)(void 0),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),i=Object(u.a)(r,2),l=i[0],d=i[1],j=function(){var e=Object(s.a)(o.a.mark((function e(t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}return n=new _.a(t),e.next=4,b(n);case 4:c=e.sent,e.next=9;break;case 7:n=new _.a,c=null;case 9:a(n),d(c);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("div",{style:B,children:Object(y.jsx)(g,{web3:n,account:l,setProviderData:j})})})},D=n(759),N=n(760),F=n(758),z=new D.a({uri:"https://api.thegraph.com/subgraphs/name/will-holden/dgov2subgraph",cache:new N.a}),A=function(){return Object(y.jsx)(F.a,{client:z,children:Object(y.jsx)(C,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=n(741);n(734);r.a.render(Object(y.jsx)(I.a,{autoConnect:!0,children:Object(y.jsx)(A,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[735,9,10]]]);
//# sourceMappingURL=main.a2b243e1.chunk.js.map