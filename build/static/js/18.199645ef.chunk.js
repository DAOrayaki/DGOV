(this.webpackJsonpDGV2=this.webpackJsonpDGV2||[]).push([[18],{3360:function(e,t,a){"use strict";var c=a(31),n=a(208),r=a(209),s=a.n(r),o=a(4),i=a(210),l=a(781),d=a(866),b=a(10),j=["bsPrefix","className","variant","as"],m=o.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,o=e.variant,l=e.as,d=void 0===l?"img":l,m=Object(n.a)(e,j),u=Object(i.a)(a,"card-img");return Object(b.jsx)(d,Object(c.a)({ref:t,className:s()(o?"".concat(u,"-").concat(o):u,r)},m))}));m.displayName="CardImg";var u=m,f=a(839),x=["bsPrefix","className","as"],O=o.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,l=e.as,d=void 0===l?"div":l,j=Object(n.a)(e,x),m=Object(i.a)(a,"card-header"),u=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:m}}),[m]);return Object(b.jsx)(f.a.Provider,{value:u,children:Object(b.jsx)(d,Object(c.a)(Object(c.a)({ref:t},j),{},{className:s()(r,m)}))})}));O.displayName="CardHeader";var p=O,h=["bsPrefix","className","bg","text","border","body","children","as"],v=Object(d.a)("h5"),N=Object(d.a)("h6"),g=Object(l.a)("card-body"),y=Object(l.a)("card-title",{Component:v}),k=Object(l.a)("card-subtitle",{Component:N}),P=Object(l.a)("card-link",{Component:"a"}),w=Object(l.a)("card-text",{Component:"p"}),T=Object(l.a)("card-footer"),C=Object(l.a)("card-img-overlay"),M=o.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,o=e.bg,l=e.text,d=e.border,j=e.body,m=e.children,u=e.as,f=void 0===u?"div":u,x=Object(n.a)(e,h),O=Object(i.a)(a,"card");return Object(b.jsx)(f,Object(c.a)(Object(c.a)({ref:t},x),{},{className:s()(r,O,o&&"bg-".concat(o),l&&"text-".concat(l),d&&"border-".concat(d)),children:j?Object(b.jsx)(g,{children:m}):m}))}));M.displayName="Card",M.defaultProps={body:!1};t.a=Object.assign(M,{Img:u,Title:y,Subtitle:k,Body:g,Link:P,Text:w,Header:p,Footer:T,ImgOverlay:C})},3375:function(e,t,a){"use strict";a.r(t);var c,n=a(807),r=(a(4),a(24)),s=a(213),o=a(3378),i=a(3385),l=a(3360),d=a(956),b=a(848),j=a(975),m=a(155),u=a.n(m),f=a(156),x=a(10);t.default=function(e){e.web3,e.account,Object(r.h)();var t=Object(o.a)(c||(c=Object(n.a)(["\n    query lsmrMarkets($id: String) {\n        lmsrmarketMakers(orderBy: creationTimestamp, orderDirection: desc, first:10, where:{questionType: 0}) {\n          id\n          creator\n          creationTimestamp\n          collateralToken\n          funding\n          fee\n          condition {\n            id\n            payouts\n            resolutionTimestamp\n          }\n          oracle\n          questionId\n          outcomeSlotCount\n          questionTitle\n          closeTimeStamp\n        }\n   }\n  "]))),a=Object(i.a)(t,{fetchPolicy:"no-cache"}),m=a.loading,O=a.error,p=a.data;a.refetch;if(m)return Object(x.jsx)(f.a,{});if(O)return Object(x.jsx)("p",{children:"Error :"});console.log(p.lmsrmarketMakers);var h=function(e){for(var t=new Array,a=0;a<e.length;a++)"0"!=e[a]&&(t.push(a.toString()),console.log(e[a]));return t.join(",")},v=function(e){if("0"==e)return"--";var t=new Date(1e3*parseInt(e));return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()},N=p.lmsrmarketMakers.map((function(e){return Object(x.jsx)(l.a,{bg:"light",text:"dark",className:"mb-8 bg-transparent border border-primary",children:Object(x.jsx)(l.a.Body,{children:Object(x.jsxs)(d.a,{className:"justify-content-center",children:[Object(x.jsx)(b.a,{md:2,children:(a=e.questionTitle,a.match(/\d+\-?\d+\-?\d+/g))}),Object(x.jsxs)(b.a,{md:6,children:[Object(x.jsx)(s.b,{to:"/markets/research/markets/".concat(e.id),className:"text-muted text-decoration-none",children:Object(x.jsx)("p",{children:Object(x.jsx)("h5",{children:(t=e.questionTitle,"the"==(t=t.replace("pass and be finished in time","be passed and finished on time")).slice(3,6)?t.slice(0,3)+t.slice(6):t)})})},e.id),Object(x.jsx)("p",{className:"text-muted",children:e.condition.payouts?"Winners: "+h(e.condition.payouts):"Winners: Not Decided Yet"})]}),Object(x.jsxs)(b.a,{md:3,children:[Object(x.jsxs)("p",{className:"mb-0 text-muted",children:[parseInt(e.funding)/Math.pow(10,18)," YakID-Liquidity"]}),Object(x.jsxs)("p",{className:"mb-0 text-muted",children:["Open time: ",v(e.creationTimestamp)," "]}),Object(x.jsxs)("p",{className:"mb-0 text-muted",children:["Close time: ",v(e.closeTimeStamp)]}),Object(x.jsxs)("p",{className:"mb-0 text-muted",children:["Resolve time: ",v(e.condition.resolutionTimestamp)]})]})]})})},e.id);var t,a}));return console.log(N),Object(x.jsx)(j.a,{className:[u.a.conditon,"mt-5","justify-content-center"].join(" "),children:0==N.length?Object(x.jsx)("h1",{className:"text-center",children:"No data found"}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h1",{className:"text-center",children:"Markets List"}),Object(x.jsx)(b.a,{xs:!0,sm:!0,lg:"12",children:N})]})})}},839:function(e,t,a){"use strict";var c=a(4),n=c.createContext(null);n.displayName="CardHeaderContext",t.a=n},848:function(e,t,a){"use strict";var c=a(32),n=a(31),r=a(208),s=a(209),o=a.n(s),i=a(4),l=a(210),d=a(10),b=["as","bsPrefix","className"],j=["className"],m=["xxl","xl","lg","md","sm","xs"];var u=i.forwardRef((function(e,t){var a=function(e){var t=e.as,a=e.bsPrefix,c=e.className,s=Object(r.a)(e,b);a=Object(l.a)(a,"col");var i=[],d=[];return m.forEach((function(e){var t,c,n,r=s[e];delete s[e],"object"===typeof r&&null!=r?(t=r.span,c=r.offset,n=r.order):t=r;var o="xs"!==e?"-".concat(e):"";t&&i.push(!0===t?"".concat(a).concat(o):"".concat(a).concat(o,"-").concat(t)),null!=n&&d.push("order".concat(o,"-").concat(n)),null!=c&&d.push("offset".concat(o,"-").concat(c))})),[Object(n.a)(Object(n.a)({},s),{},{className:o.a.apply(void 0,[c].concat(i,d))}),{as:t,bsPrefix:a,spans:i}]}(e),s=Object(c.a)(a,2),i=s[0],u=i.className,f=Object(r.a)(i,j),x=s[1],O=x.as,p=void 0===O?"div":O,h=x.bsPrefix,v=x.spans;return Object(d.jsx)(p,Object(n.a)(Object(n.a)({},f),{},{ref:t,className:o()(u,!v.length&&h)}))}));u.displayName="Col",t.a=u},956:function(e,t,a){"use strict";var c=a(31),n=a(208),r=a(209),s=a.n(r),o=a(4),i=a(210),l=a(10),d=["bsPrefix","className","as"],b=["xxl","xl","lg","md","sm","xs"],j=o.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,o=e.as,j=void 0===o?"div":o,m=Object(n.a)(e,d),u=Object(i.a)(a,"row"),f="".concat(u,"-cols"),x=[];return b.forEach((function(e){var t,a=m[e];delete m[e],t=null!=a&&"object"===typeof a?a.cols:a;var c="xs"!==e?"-".concat(e):"";null!=t&&x.push("".concat(f).concat(c,"-").concat(t))})),Object(l.jsx)(j,Object(c.a)(Object(c.a)({ref:t},m),{},{className:s.a.apply(void 0,[r,u].concat(x))}))}));j.displayName="Row",t.a=j}}]);
//# sourceMappingURL=18.199645ef.chunk.js.map