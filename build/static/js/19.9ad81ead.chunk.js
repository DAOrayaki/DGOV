(this.webpackJsonpDGV2=this.webpackJsonpDGV2||[]).push([[19],{3150:function(e,t,n){"use strict";e.exports=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.mustBeMetaMask,n=void 0!==t&&t,r=e.silent,a=void 0!==r&&r,c=e.timeout,i=void 0===c?3e3:c;s();var o=!1;return new Promise((function(e){function t(){if(!o){o=!0,window.removeEventListener("ethereum#initialized",t);var r=window.ethereum;if(!r||n&&!r.isMetaMask){var c=n&&r?"Non-MetaMask window.ethereum detected.":"Unable to detect window.ethereum.";!a&&console.error("@metamask/detect-provider:",c),e(null)}else e(r)}}window.ethereum?t():(window.addEventListener("ethereum#initialized",t,{once:!0}),setTimeout((function(){t()}),i))}));function s(){if("boolean"!==typeof n)throw new Error("@metamask/detect-provider: Expected option 'mustBeMetaMask' to be a boolean.");if("boolean"!==typeof a)throw new Error("@metamask/detect-provider: Expected option 'silent' to be a boolean.");if("number"!==typeof i)throw new Error("@metamask/detect-provider: Expected option 'timeout' to be a number.")}}},3379:function(e,t,n){"use strict";n.r(t);var r=n(15),a=n.n(r),c=n(26),i=n(4),o=n(3150),s=n.n(o),u=n(741),f=n(974),p=n(954),d=n(848),l=n(31),b=n(208),h=n(110),v=n.n(h),m=n(1129),w=n(981),j=n(978),k=n(955),O=n(13),x=["title","children","bsPrefix","rootCloseEvent","variant","size","menuRole","renderMenuOnMount","disabled","href","id","menuVariant"],y={id:v.a.string,href:v.a.string,onClick:v.a.func,title:v.a.node.isRequired,disabled:v.a.bool,align:k.a,menuRole:v.a.string,renderMenuOnMount:v.a.bool,rootCloseEvent:v.a.string,menuVariant:v.a.oneOf(["dark"]),bsPrefix:v.a.string,variant:v.a.string,size:v.a.string},g=i.forwardRef((function(e,t){var n=e.title,r=e.children,a=e.bsPrefix,c=e.rootCloseEvent,i=e.variant,o=e.size,s=e.menuRole,u=e.renderMenuOnMount,f=e.disabled,p=e.href,d=e.id,h=e.menuVariant,v=Object(b.a)(e,x);return Object(O.jsxs)(m.a,Object(l.a)(Object(l.a)({ref:t},v),{},{children:[Object(O.jsx)(w.a,{id:d,href:p,size:o,variant:i,disabled:f,childBsPrefix:a,children:n}),Object(O.jsx)(j.a,{role:s,renderOnMount:u,rootCloseEvent:c,variant:h,children:r})]}))}));g.displayName="DropdownButton",g.propTypes=y;var M,E=g,P=n(867),T=n(32),B=n(24),C=n(967),D=n(157),N=n.n(D),z=function(e){var t=e.web3,n=e.account,r=e.yakiAddress,o=Object(i.useState)(!1),s=Object(T.a)(o,2),u=s[0],f=s[1],p=Object(i.useState)(void 0),d=Object(T.a)(p,2),l=d[0],b=d[1],h=Object(B.f)();console.log(r),Object(i.useEffect)((function(){(function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(C.a)(t,r,n);case 3:return M=e.sent,e.next=6,v();case 6:f(!0),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),f(!1),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var v=function(){var e=Object(c.a)(a.a.mark((function e(){var t,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.decimals();case 2:return t=e.sent,e.next=5,M.pointBanlanceOf(n);case 5:r=e.sent,c=N.a.utils.toBN(r).div(N.a.utils.toBN(Math.pow(10,t))).toString(),console.log(c),b({balance:c});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();u&&console.log(l.balance);return Object(O.jsx)(O.Fragment,{children:u&&t?Object(O.jsx)(P.a,{variant:"outline-dark",className:"pl-2 ms-4",onClick:function(){h.push("/wallet")},children:"".concat(l.balance," YakID")}):Object(O.jsx)(P.a,{variant:"outline-dark",className:"pl-2 ms-4",children:"Loading"})})},A=!1;t.default=function(e){var t=e.web3,n=e.account1,r=e.setProviderData,o=function(e){return r(e)},l=Object(u.g)(),b=(l.account,l.connect),h=l.reset;l.status;Object(i.useEffect)((function(){A||(A=!0)}));var v=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h(),r();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(),e.next=3,s()();case 3:(t=e.sent)&&o(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n?Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(f.a,{children:Object(O.jsxs)(p.a,{children:[Object(O.jsx)(d.a,{md:4,children:Object(O.jsx)(E,{id:"dropdown-item-button",title:n.slice(0,4)+"..."+n.slice(-4),variant:"secondary",className:"me-5",children:Object(O.jsx)(m.a.Item,{as:"button",onClick:function(){return v()},children:"Disconnect  "})})}),Object(O.jsx)(d.a,{md:7,children:Object(O.jsx)(z,{web3:t,account:n,yakiAddress:"0xa56338D2362d662424B56A89A98d0f7B82790390"})})]})})}):Object(O.jsx)(P.a,{variant:"secondary",onClick:w,children:"Connect"})}},955:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(110),a=n.n(r),c=a.a.oneOf(["start","end"]),i=a.a.oneOfType([c,a.a.shape({sm:c}),a.a.shape({md:c}),a.a.shape({lg:c}),a.a.shape({xl:c}),a.a.shape({xxl:c})])},967:function(e,t,n){"use strict";var r,a,c,i=n(15),o=n.n(i),s=n(26),u=n(6),f=n(23),p=function e(t){var n=this;Object(u.a)(this,e),this.yakiToken=void 0,this.symbol=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.yakiToken.symbol());case 1:case"end":return e.stop()}}),e)}))),this.decimals=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.yakiToken.decimals());case 1:case"end":return e.stop()}}),e)}))),this.name=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.yakiToken.name());case 1:case"end":return e.stop()}}),e)}))),this.getAddress=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.yakiToken.address);case 1:case"end":return e.stop()}}),e)}))),this.approvePoint=function(){var e=Object(s.a)(o.a.mark((function e(t,r,a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.yakiToken.approvePoint(t,r,{from:a}));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),this.pointBanlanceOf=function(){var e=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.yakiToken.pointBalanceOf(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.transferPoint=function(){var e=Object(s.a)(o.a.mark((function e(t,r,a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.yakiToken.transferPoint(t,r,{from:a}));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),this.transferPointFrom=function(){var e=Object(s.a)(o.a.mark((function e(t,r,a,c){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.yakiToken.tranferPointFrom(t,r,a,{from:c}));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),f(t,'"contracts" is required'),this.yakiToken=t},d=n(810),l=n(840),b=function(){var e=Object(s.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=l(d)).setProvider(t.currentProvider),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(s.a)(o.a.mark((function e(t,n,i){var s,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,(i&&i!==c||n&&n!==a)&&(r=void 0),r){e.next=12;break}return a=n,c=i,e.next=7,b(t);case 7:return s=e.sent,e.next=10,s.at(n);case 10:u=e.sent,r=new p(u);case 12:return e.abrupt("return",r);case 15:return e.prev=15,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",null);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t,n,r){return e.apply(this,arguments)}}();t.a=h}}]);
//# sourceMappingURL=19.9ad81ead.chunk.js.map