(this.webpackJsonpDGV2=this.webpackJsonpDGV2||[]).push([[21],{3380:function(e,t,n){"use strict";n.r(t);var r,a=n(14),c=n.n(a),s=n(26),o=n(31),u=n(4),i=n(964),l=n(1073),p=n(3354),f=n(939),b=n(840),d=n(3140),j=n(17),m=function(e){e.account;var t=e.tokenSymbol,n=e.tokenAmount,r=e.setSelectedAmount,a=(e.selectedAmount,e.transform),c=e.isYakiTokenLoaded,s=e.setRecipient;return Object(j.jsx)(j.Fragment,{children:c?Object(j.jsx)(l.a,{children:Object(j.jsxs)(p.a,{children:[Object(j.jsxs)(p.a.Group,{as:f.a,className:"mb-3",controlId:"yakiSymbol",children:[Object(j.jsx)(p.a.Label,{column:!0,sm:"2",children:"Token Name"}),Object(j.jsx)(b.a,{sm:"10",children:Object(j.jsx)(p.a.Control,{plaintext:!0,readOnly:!0,defaultValue:t})})]}),Object(j.jsxs)(p.a.Group,{as:f.a,className:"mb-3",controlId:"yakiBalance",children:[Object(j.jsx)(p.a.Label,{column:!0,sm:"2",children:"Balance"}),Object(j.jsx)(b.a,{sm:"10",children:Object(j.jsx)(p.a.Control,{plaintext:!0,readOnly:!0,defaultValue:n})})]}),Object(j.jsxs)(p.a.Group,{as:f.a,className:"mb-3",controlId:"yakiAmount",children:[Object(j.jsx)(p.a.Label,{column:!0,sm:"2",children:"Amount"}),Object(j.jsx)(b.a,{sm:"10",children:Object(j.jsx)(p.a.Control,{type:"string",onChange:function(e){return r(e.target.value)}})})]}),Object(j.jsxs)(p.a.Group,{as:f.a,className:"mb-3",controlId:"tradeAccount",children:[Object(j.jsx)(p.a.Label,{column:!0,sm:"2",children:"Account address"}),Object(j.jsx)(b.a,{sm:"10",children:Object(j.jsx)(p.a.Control,{type:"string",onChange:function(e){return s(e.target.value)}})})]}),Object(j.jsx)(d.a,{onClick:function(e){return a()},children:"Submit"})]})}):Object(j.jsx)("div",{children:"Loading..."})})},h=n(157),O=n.n(h);t.default=function(e){var t=e.web3,n=e.account,a=e.yakiAddress,l=Object(u.useState)(!1),p=Object(o.a)(l,2),f=p[0],b=p[1],d=Object(u.useState)(""),h=Object(o.a)(d,2),x=h[0],k=h[1],v=Object(u.useState)(void 0),y=Object(o.a)(v,2),w=y[0],g=y[1],T=Object(u.useState)(""),A=Object(o.a)(T,2),S=A[0],B=A[1];console.log(a),Object(u.useEffect)((function(){(function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(i.a)(t,a,n);case 3:return r=e.sent,e.next=6,N();case 6:b(!0),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),b(!1),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var N=function(){var e=Object(s.a)(c.a.mark((function e(){var t,a,s,o,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.decimals();case 2:return t=e.sent,e.next=5,r.pointBanlanceOf(n);case 5:return a=e.sent,s=O.a.utils.toBN(a).div(O.a.utils.toBN(Math.pow(10,t))),e.next=9,r.symbol();case 9:return o=e.sent,e.next=12,r.name();case 12:u=e.sent,g({balance:s,symbol:o,name:u,decimals:t});case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(s.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=O.a.utils.toBN(x).mul(O.a.utils.toBN(Math.pow(10,w.decimals))),e.next=3,r.transferPoint(S,t,n);case 3:return a=e.sent,console.log({tx:a}),e.next=7,N();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsx)(j.Fragment,{children:f?Object(j.jsx)(m,{account:n,tokenSymbol:w.symbol,tokenAmount:w.balance,setSelectedAmount:k,selectedAmount:x,setRecipient:B,transform:P,isYakiTokenLoaded:f}):Object(j.jsx)("div",{children:"Loading..."})})}},964:function(e,t,n){"use strict";var r,a,c,s=n(14),o=n.n(s),u=n(26),i=n(6),l=n(23),p=function e(t){var n=this;Object(i.a)(this,e),this.yakiToken=void 0,this.symbol=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.yakiToken.symbol());case 1:case"end":return e.stop()}}),e)}))),this.decimals=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.yakiToken.decimals());case 1:case"end":return e.stop()}}),e)}))),this.name=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.yakiToken.name());case 1:case"end":return e.stop()}}),e)}))),this.getAddress=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.yakiToken.address);case 1:case"end":return e.stop()}}),e)}))),this.approvePoint=function(){var e=Object(u.a)(o.a.mark((function e(t,r,a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.yakiToken.approvePoint(t,r,{from:a}));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),this.pointBanlanceOf=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.yakiToken.pointBalanceOf(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.transferPoint=function(){var e=Object(u.a)(o.a.mark((function e(t,r,a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.yakiToken.transferPoint(t,r,{from:a}));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),this.transferPointFrom=function(){var e=Object(u.a)(o.a.mark((function e(t,r,a,c){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.yakiToken.tranferPointFrom(t,r,a,{from:c}));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),l(t,'"contracts" is required'),this.yakiToken=t},f=n(798),b=n(832),d=function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=b(f)).setProvider(t.currentProvider),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(u.a)(o.a.mark((function e(t,n,s){var u,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,(s&&s!==c||n&&n!==a)&&(r=void 0),r){e.next=12;break}return a=n,c=s,e.next=7,d(t);case 7:return u=e.sent,e.next=10,u.at(n);case 10:i=e.sent,r=new p(i);case 12:return e.abrupt("return",r);case 15:return e.prev=15,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",null);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t,n,r){return e.apply(this,arguments)}}();t.a=j}}]);
//# sourceMappingURL=21.748c582f.chunk.js.map