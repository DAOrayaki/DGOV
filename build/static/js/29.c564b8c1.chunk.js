(this.webpackJsonpDGV2=this.webpackJsonpDGV2||[]).push([[29],{3383:function(e,t,n){"use strict";n.r(t);var a,c=n(15),r=n.n(c),s=n(26),o=n(32),l=n(4),u=n(1130),i=n(973),j=n(3357),b=n(954),d=n(846),m=n(866),O=n(13),x=function(e){e.account;var t=e.tokenInfo,n=e.setSelectedAmount,a=(e.selectedAmount,e.transform),c=e.isYakiTokenLoaded,r=e.setRecipient;return Object(O.jsx)(O.Fragment,{children:c?Object(O.jsx)(i.a,{children:Object(O.jsxs)(j.a,{children:[Object(O.jsxs)(j.a.Group,{as:b.a,className:"mb-3",controlId:"yakiSymbol",children:[Object(O.jsx)(j.a.Label,{column:!0,sm:"2",children:"Token Name"}),Object(O.jsx)(d.a,{sm:"10",children:Object(O.jsx)(j.a.Control,{plaintext:!0,readOnly:!0,defaultValue:t.symbol})})]}),Object(O.jsxs)(j.a.Group,{as:b.a,className:"mb-3",controlId:"yakiBalance",children:[Object(O.jsx)(j.a.Label,{column:!0,sm:"2",children:"Balance"}),Object(O.jsx)(d.a,{sm:"10",children:Object(O.jsx)(j.a.Control,{plaintext:!0,readOnly:!0,value:t.balance||""})})]}),Object(O.jsxs)(j.a.Group,{as:b.a,className:"mb-3",controlId:"yakiAmount",children:[Object(O.jsx)(j.a.Label,{column:!0,sm:"2",children:"Amount"}),Object(O.jsx)(d.a,{sm:"10",children:Object(O.jsx)(j.a.Control,{type:"string",onChange:function(e){return n(e.target.value)}})})]}),Object(O.jsxs)(j.a.Group,{as:b.a,className:"mb-3",controlId:"tradeAccount",children:[Object(O.jsx)(j.a.Label,{column:!0,sm:"2",children:"Account address"}),Object(O.jsx)(d.a,{sm:"10",children:Object(O.jsx)(j.a.Control,{type:"string",onChange:function(e){return r(e.target.value)}})})]}),Object(O.jsx)(m.a,{onClick:function(e){return a()},children:"Submit"})]})}):Object(O.jsx)("div",{children:"Loading..."})})},p=n(157),h=n.n(p);t.default=function(e){var t=e.web3,n=e.account,c=e.yakiAddress,i=Object(l.useState)(!1),j=Object(o.a)(i,2),b=j[0],d=j[1],m=Object(l.useState)(""),p=Object(o.a)(m,2),f=p[0],v=p[1],k=Object(l.useState)(void 0),y=Object(o.a)(k,2),g=y[0],w=y[1],A=Object(l.useState)(""),N=Object(o.a)(A,2),L=N[0],S=N[1];console.log(c),Object(l.useEffect)((function(){(function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(u.a)(t,c,n);case 3:return a=e.sent,e.next=6,B();case 6:d(!0),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),d(!1),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var B=function(){var e=Object(s.a)(r.a.mark((function e(){var t,c,s,o,l,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.decimals();case 2:return t=e.sent,e.next=5,a.pointBanlanceOf(n);case 5:return c=e.sent,s=h.a.utils.toBN(c).div(h.a.utils.toBN(Math.pow(10,t))),e.next=9,a.symbol();case 9:return o=e.sent,e.next=12,a.name();case 12:l=e.sent,u={balance:s,symbol:o,name:l,decimals:t},console.log(u.balance),w(u);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(s.a)(r.a.mark((function e(){var t,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=h.a.utils.toBN(f).mul(h.a.utils.toBN(Math.pow(10,g.decimals))),e.next=3,a.transferPoint(L,t,n);case 3:return c=e.sent,console.log({tx:c}),e.next=7,B();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)(O.Fragment,{children:b?Object(O.jsx)(x,{account:n,tokenInfo:g,setSelectedAmount:v,selectedAmount:f,setRecipient:S,transform:C,isYakiTokenLoaded:b}):Object(O.jsx)("div",{children:"Loading..."})})}}}]);
//# sourceMappingURL=29.c564b8c1.chunk.js.map