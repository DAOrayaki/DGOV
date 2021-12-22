(this.webpackJsonpDGV2=this.webpackJsonpDGV2||[]).push([[17],{3357:function(e,a,t){"use strict";var c=t(31),r=t(208),n=t(209),s=t.n(n),o=t(4),i=t(210),d=t(783),l=t(865),b=t(13),j=["bsPrefix","className","variant","as"],m=o.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,o=e.variant,d=e.as,l=void 0===d?"img":d,m=Object(r.a)(e,j),u=Object(i.a)(t,"card-img");return Object(b.jsx)(l,Object(c.a)({ref:a,className:s()(o?"".concat(u,"-").concat(o):u,n)},m))}));m.displayName="CardImg";var u=m,f=t(839),O=["bsPrefix","className","as"],x=o.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,d=e.as,l=void 0===d?"div":d,j=Object(r.a)(e,O),m=Object(i.a)(t,"card-header"),u=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:m}}),[m]);return Object(b.jsx)(f.a.Provider,{value:u,children:Object(b.jsx)(l,Object(c.a)(Object(c.a)({ref:a},j),{},{className:s()(n,m)}))})}));x.displayName="CardHeader";var p=x,h=["bsPrefix","className","bg","text","border","body","children","as"],v=Object(l.a)("h5"),g=Object(l.a)("h6"),N=Object(d.a)("card-body"),y=Object(d.a)("card-title",{Component:v}),k=Object(d.a)("card-subtitle",{Component:g}),P=Object(d.a)("card-link",{Component:"a"}),w=Object(d.a)("card-text",{Component:"p"}),C=Object(d.a)("card-footer"),T=Object(d.a)("card-img-overlay"),q=o.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,o=e.bg,d=e.text,l=e.border,j=e.body,m=e.children,u=e.as,f=void 0===u?"div":u,O=Object(r.a)(e,h),x=Object(i.a)(t,"card");return Object(b.jsx)(f,Object(c.a)(Object(c.a)({ref:a},O),{},{className:s()(n,x,o&&"bg-".concat(o),d&&"text-".concat(d),l&&"border-".concat(l)),children:j?Object(b.jsx)(N,{children:m}):m}))}));q.displayName="Card",q.defaultProps={body:!1};a.a=Object.assign(q,{Img:u,Title:y,Subtitle:k,Body:N,Link:P,Text:w,Header:p,Footer:C,ImgOverlay:T})},3372:function(e,a,t){"use strict";t.r(a);var c,r=t(806),n=(t(4),t(24)),s=t(213),o=t(3373),i=t(3380),d=t(3357),l=t(954),b=t(848),j=t(974),m=t(156),u=t.n(m),f=t(13);a.default=function(e){e.web3,e.account,Object(n.h)();var a=Object(o.a)(c||(c=Object(r.a)(["\n    query lsmrMarkets($id: String) {\n        lmsrmarketMakers(orderBy: creationTimestamp, orderDirection: desc, first:10, where:{questionType: 1}) {\n          id\n          creator\n          creationTimestamp\n          collateralToken\n          conditions {\n            id\n            oracle\n            questionId\n            outcomeSlotCount\n          }\n          funding\n          fee\n          condition {\n            id\n          }\n          oracle\n          questionId\n          outcomeSlotCount\n          questionTitle\n        }\n   }\n  "]))),t=Object(i.a)(a,{fetchPolicy:"no-cache"}),m=t.loading,O=t.error,x=t.data;t.refetch;if(m)return Object(f.jsx)("p",{children:"Loading..."});if(O)return Object(f.jsx)("p",{children:"Error :"});console.log(x.lmsrmarketMakers);var p=function(e){var a=new Date(1e3*parseInt(e));return a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate()},h=x.lmsrmarketMakers.map((function(e){return Object(f.jsx)(d.a,{bg:"light",text:"dark",className:"mb-8 bg-transparent border border-primary",children:Object(f.jsx)(d.a.Body,{children:Object(f.jsxs)(l.a,{className:"justify-content-center",children:[Object(f.jsx)(b.a,{md:2,children:(a=e.questionTitle,a.match(/\d+\-?\d+\-?\d+/g))}),Object(f.jsx)(b.a,{md:6,children:Object(f.jsx)(s.b,{to:"/markets/hottrendmarkets/markets/".concat(e.id),children:Object(f.jsx)("p",{children:e.questionTitle})},e.id)}),Object(f.jsxs)(b.a,{md:2,children:[Object(f.jsxs)("p",{children:[parseInt(e.funding)/Math.pow(10,18)," YakID-Liquidity"]}),Object(f.jsxs)("p",{children:["Open time: ",p(e.creationTimestamp)," "]})]})]})})},e.id);var a}));return console.log(h),Object(f.jsxs)(j.a,{className:[u.a.conditon,"mt-5","bg-transparent"].join(" "),children:[Object(f.jsx)("h1",{className:"text-center",children:"Market Lists"}),h]})}},839:function(e,a,t){"use strict";var c=t(4),r=c.createContext(null);r.displayName="CardHeaderContext",a.a=r},848:function(e,a,t){"use strict";var c=t(32),r=t(31),n=t(208),s=t(209),o=t.n(s),i=t(4),d=t(210),l=t(13),b=["as","bsPrefix","className"],j=["className"],m=["xxl","xl","lg","md","sm","xs"];var u=i.forwardRef((function(e,a){var t=function(e){var a=e.as,t=e.bsPrefix,c=e.className,s=Object(n.a)(e,b);t=Object(d.a)(t,"col");var i=[],l=[];return m.forEach((function(e){var a,c,r,n=s[e];delete s[e],"object"===typeof n&&null!=n?(a=n.span,c=n.offset,r=n.order):a=n;var o="xs"!==e?"-".concat(e):"";a&&i.push(!0===a?"".concat(t).concat(o):"".concat(t).concat(o,"-").concat(a)),null!=r&&l.push("order".concat(o,"-").concat(r)),null!=c&&l.push("offset".concat(o,"-").concat(c))})),[Object(r.a)(Object(r.a)({},s),{},{className:o.a.apply(void 0,[c].concat(i,l))}),{as:a,bsPrefix:t,spans:i}]}(e),s=Object(c.a)(t,2),i=s[0],u=i.className,f=Object(n.a)(i,j),O=s[1],x=O.as,p=void 0===x?"div":x,h=O.bsPrefix,v=O.spans;return Object(l.jsx)(p,Object(r.a)(Object(r.a)({},f),{},{ref:a,className:o()(u,!v.length&&h)}))}));u.displayName="Col",a.a=u},954:function(e,a,t){"use strict";var c=t(31),r=t(208),n=t(209),s=t.n(n),o=t(4),i=t(210),d=t(13),l=["bsPrefix","className","as"],b=["xxl","xl","lg","md","sm","xs"],j=o.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,o=e.as,j=void 0===o?"div":o,m=Object(r.a)(e,l),u=Object(i.a)(t,"row"),f="".concat(u,"-cols"),O=[];return b.forEach((function(e){var a,t=m[e];delete m[e],a=null!=t&&"object"===typeof t?t.cols:t;var c="xs"!==e?"-".concat(e):"";null!=a&&O.push("".concat(f).concat(c,"-").concat(a))})),Object(d.jsx)(j,Object(c.a)(Object(c.a)({ref:a},m),{},{className:s.a.apply(void 0,[n,u].concat(O))}))}));j.displayName="Row",a.a=j}}]);
//# sourceMappingURL=17.50688c3f.chunk.js.map