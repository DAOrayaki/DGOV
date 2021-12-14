(this.webpackJsonpDGV2=this.webpackJsonpDGV2||[]).push([[3],{384:function(e,n){},386:function(e,n){},390:function(e,n){},415:function(e,n){},417:function(e,n){},426:function(e,n){},428:function(e,n){},437:function(e,n){},439:function(e,n){},486:function(e,n){},505:function(e,n){},572:function(e,n){},613:function(e,n){},615:function(e,n){},622:function(e,n){},623:function(e,n){},645:function(e,n){},652:function(e,n){},699:function(e,n){},740:function(e,n,t){"use strict";t.r(n);var c,r=t(2),a=t(216),i=t.n(a),s=t(226),o=t(15),u=t.n(o),l=t(28),j=t(27),b=t(168),d=t.n(b),h=function(){var e=Object(l.a)(u.a.mark((function e(n){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return",null);case 2:if(null!=n.defaultAccount){e.next=9;break}return e.next=5,n.eth.getAccounts();case 5:return t=e.sent,e.abrupt("return",t[0]||null);case 9:return e.abrupt("return",n.defaultAccount);case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),O=t(208),f=t(25),x=t(761),p=t(762),m=t(763),g=t(765),k=t(767),v=t(764),w=t(766),y=t(768),S=t(7),P=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(13)]).then(t.bind(null,3452))})),M=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(14)]).then(t.bind(null,3469))})),D=Object(r.lazy)((function(){return Promise.all([t.e(7),t.e(12)]).then(t.bind(null,3470))})),z=Object(r.lazy)((function(){return Promise.all([t.e(1),t.e(5),t.e(8)]).then(t.bind(null,3454))})),A=function(e){var n=e.web3,t=e.account,a=Object(f.h)(),i=Object(w.a)(c||(c=Object(s.a)(["\n    query lsmrMarkets($id: String) {\n        lmsrmarketMakers(orderBy: creationTimestamp, orderDirection: desc, first:5) {\n          id\n          creator\n          creationTimestamp\n          collateralToken\n          conditions {\n            id\n            oracle\n            questionId\n            outcomeSlotCount\n          }\n          funding\n          fee\n          condition {\n            id\n          }\n          oracle\n          questionId\n          outcomeSlotCount\n        }\n   }\n  "]))),o=Object(y.a)(i,{fetchPolicy:"no-cache"}),u=o.loading,l=o.error,j=o.data;o.refetch;if(u)return Object(S.jsx)("p",{children:"Loading..."});if(l)return Object(S.jsx)("p",{children:"Error :"});console.log(j.lmsrmarketMakers);var b=j.lmsrmarketMakers.map((function(e){return Object(S.jsx)("li",{children:Object(S.jsx)(O.b,{to:"".concat(a.url,"/").concat(e.id),children:e.id},e.id)},e.id)}));return console.log(b),Object(S.jsxs)("div",{children:[Object(S.jsx)("h2",{children:"Most Recently Created Markets"}),Object(S.jsx)("ul",{children:b}),Object(S.jsx)(r.Suspense,{fallback:Object(S.jsx)("div",{children:"Loading..."}),children:Object(S.jsxs)(f.d,{children:[Object(S.jsx)(f.b,{path:"".concat(a.path,"/:address"),children:Object(S.jsx)(z,{web3:n,account:t})}),Object(S.jsx)(f.b,{path:a.path,children:Object(S.jsx)("h3",{children:"Please select a markets."})})]})})]})},C=function(){var e=Object(r.useState)(void 0),n=Object(j.a)(e,2),t=n[0],c=n[1],a=Object(r.useState)(""),i=Object(j.a)(a,2),s=i[0],o=i[1],b=function(){var e=Object(l.a)(u.a.mark((function e(n){var t,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=7;break}return t=new d.a(n),e.next=4,h(t);case 4:r=e.sent,e.next=9;break;case 7:t=new d.a,r=null;case 9:c(t),o(r);case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),w=new g.a({uri:"https://api.thegraph.com/subgraphs/name/unhappydog/dgovsubgraph",cache:new k.a});return Object(S.jsxs)(O.a,{children:[Object(S.jsx)(r.Suspense,{fallback:Object(S.jsx)("div",{children:"Loading..."}),children:Object(S.jsx)(D,{account:s,setProviderData:b,children:" "})}),Object(S.jsx)("br",{}),Object(S.jsxs)(x.a,{children:[Object(S.jsx)(p.a,{className:"align-items-center",children:Object(S.jsx)(m.a,{className:"text-center",children:Object(S.jsx)("h1",{children:"DAOrayaki Governance 2.0: Futarchy based governance tool"})})}),Object(S.jsx)("br",{}),Object(S.jsx)(p.a,{}),Object(S.jsx)("br",{}),Object(S.jsx)(p.a,{children:Object(S.jsx)(m.a,{className:"text-center",children:Object(S.jsx)(r.Suspense,{fallback:Object(S.jsx)("div",{children:"Loading..."}),children:Object(S.jsxs)(f.d,{children:[Object(S.jsx)(f.b,{path:"/about",children:Object(S.jsx)(P,{})}),Object(S.jsx)(f.b,{path:"/markets",children:s&&t?Object(S.jsx)(v.a,{client:w,children:Object(S.jsx)(A,{web3:t,account:s})}):Object(S.jsx)("div",{children:" Connect your account first "})}),Object(S.jsx)(f.b,{path:"/home",children:Object(S.jsx)(M,{})}),Object(S.jsx)(f.b,{path:"/",children:Object(S.jsx)(f.a,{to:"/markets"})})]})})})})]})]})},L=new g.a({uri:"https://api.thegraph.com/subgraphs/name/unhappydog/dgovsubgraph",cache:new k.a}),q=function(){return Object(S.jsx)(v.a,{client:L,children:Object(S.jsx)(C,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=t(743);t(739);i.a.render(Object(S.jsx)(B.a,{children:Object(S.jsx)(q,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[740,4,6]]]);
//# sourceMappingURL=main.9a93bfd6.chunk.js.map