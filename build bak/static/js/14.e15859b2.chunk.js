(this.webpackJsonpDGV2=this.webpackJsonpDGV2||[]).push([[14],{3359:function(e,a,t){"use strict";var c=t(31),i=t(208),s=t(209),r=t.n(s),n=t(110),l=t.n(n),o=t(4),d=t(10),b=["as","className","type","tooltip"],f={type:l.a.string,tooltip:l.a.bool,as:l.a.elementType},j=o.forwardRef((function(e,a){var t=e.as,s=void 0===t?"div":t,n=e.className,l=e.type,o=void 0===l?"valid":l,f=e.tooltip,j=void 0!==f&&f,u=Object(i.a)(e,b);return Object(d.jsx)(s,Object(c.a)(Object(c.a)({},u),{},{ref:a,className:r()(n,"".concat(o,"-").concat(j?"tooltip":"feedback"))}))}));j.displayName="Feedback",j.propTypes=f;var u=j,v=t(890),m=t(775),O=t(210),p=["bsPrefix","className","htmlFor"],x=o.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,n=e.htmlFor,l=Object(i.a)(e,p),b=Object(o.useContext)(m.a).controlId;return t=Object(O.a)(t,"form-check-label"),Object(d.jsx)("label",Object(c.a)(Object(c.a)({},l),{},{ref:a,htmlFor:n||b,className:r()(s,t)}))}));x.displayName="FormCheckLabel";var N=x,y=["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],h=o.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,n=e.bsSwitchPrefix,l=e.inline,b=void 0!==l&&l,f=e.disabled,j=void 0!==f&&f,p=e.isValid,x=void 0!==p&&p,h=e.isInvalid,P=void 0!==h&&h,g=e.feedbackTooltip,w=void 0!==g&&g,I=e.feedback,k=e.feedbackType,F=e.className,C=e.style,R=e.title,z=void 0===R?"":R,V=e.type,S=void 0===V?"checkbox":V,T=e.label,L=e.children,D=e.as,G=void 0===D?"input":D,H=Object(i.a)(e,y);s=Object(O.a)(s,"form-check"),n=Object(O.a)(n,"form-switch");var B=Object(o.useContext)(m.a).controlId,J=Object(o.useMemo)((function(){return{controlId:t||B}}),[B,t]),M=null!=T&&!1!==T&&!L,U=Object(d.jsx)(v.a,Object(c.a)(Object(c.a)({},H),{},{type:"switch"===S?"checkbox":S,ref:a,isValid:x,isInvalid:P,disabled:j,as:G}));return Object(d.jsx)(m.a.Provider,{value:J,children:Object(d.jsx)("div",{style:C,className:r()(F,T&&s,b&&"".concat(s,"-inline"),"switch"===S&&n),children:L||Object(d.jsxs)(d.Fragment,{children:[U,M&&Object(d.jsx)(N,{title:z,children:T}),I&&Object(d.jsx)(u,{type:k,tooltip:w,children:I})]})})})}));h.displayName="FormCheck";var P=Object.assign(h,{Input:v.a,Label:N}),g=t(108),w=(t(803),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),I=o.forwardRef((function(e,a){var t,s,n=e.bsPrefix,l=e.type,b=e.size,f=e.htmlSize,j=e.id,u=e.className,v=e.isValid,p=void 0!==v&&v,x=e.isInvalid,N=void 0!==x&&x,y=e.plaintext,h=e.readOnly,P=e.as,I=void 0===P?"input":P,k=Object(i.a)(e,w),F=Object(o.useContext)(m.a).controlId;(n=Object(O.a)(n,"form-control"),y)?t=Object(g.a)({},"".concat(n,"-plaintext"),!0):(s={},Object(g.a)(s,n,!0),Object(g.a)(s,"".concat(n,"-").concat(b),b),t=s);return Object(d.jsx)(I,Object(c.a)(Object(c.a)({},k),{},{type:l,size:f,ref:a,readOnly:h,id:j||F,className:r()(u,t,p&&"is-valid",N&&"is-invalid","color"===l&&"".concat(n,"-color"))}))}));I.displayName="FormControl";var k=Object.assign(I,{Feedback:u}),F=t(781),C=Object(F.a)("form-floating"),R=["controlId","as"],z=o.forwardRef((function(e,a){var t=e.controlId,s=e.as,r=void 0===s?"div":s,n=Object(i.a)(e,R),l=Object(o.useMemo)((function(){return{controlId:t}}),[t]);return Object(d.jsx)(m.a.Provider,{value:l,children:Object(d.jsx)(r,Object(c.a)(Object(c.a)({},n),{},{ref:a}))})}));z.displayName="FormGroup";var V=z,S=t(848),T=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],L=o.forwardRef((function(e,a){var t=e.as,s=void 0===t?"label":t,n=e.bsPrefix,l=e.column,b=e.visuallyHidden,f=e.className,j=e.htmlFor,u=Object(i.a)(e,T),v=Object(o.useContext)(m.a).controlId;n=Object(O.a)(n,"form-label");var p="col-form-label";"string"===typeof l&&(p="".concat(p," ").concat(p,"-").concat(l));var x=r()(f,n,b&&"visually-hidden",l&&p);return j=j||v,l?Object(d.jsx)(S.a,Object(c.a)({ref:a,as:"label",className:x,htmlFor:j},u)):Object(d.jsx)(s,Object(c.a)({ref:a,className:x,htmlFor:j},u))}));L.displayName="FormLabel",L.defaultProps={column:!1,visuallyHidden:!1};var D=L,G=["bsPrefix","className","id"],H=o.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,n=e.id,l=Object(i.a)(e,G),b=Object(o.useContext)(m.a).controlId;return t=Object(O.a)(t,"form-range"),Object(d.jsx)("input",Object(c.a)(Object(c.a)({},l),{},{type:"range",ref:a,className:r()(s,t),id:n||b}))}));H.displayName="FormRange";var B=H,J=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],M=o.forwardRef((function(e,a){var t=e.bsPrefix,s=e.size,n=e.htmlSize,l=e.className,b=e.isValid,f=void 0!==b&&b,j=e.isInvalid,u=void 0!==j&&j,v=e.id,p=Object(i.a)(e,J),x=Object(o.useContext)(m.a).controlId;return t=Object(O.a)(t,"form-select"),Object(d.jsx)("select",Object(c.a)(Object(c.a)({},p),{},{size:n,ref:a,className:r()(l,t,s&&"".concat(t,"-").concat(s),f&&"is-valid",u&&"is-invalid"),id:v||x}))}));M.displayName="FormSelect";var U=M,K=["bsPrefix","className","as","muted"],_=o.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,n=e.as,l=void 0===n?"small":n,o=e.muted,b=Object(i.a)(e,K);return t=Object(O.a)(t,"form-text"),Object(d.jsx)(l,Object(c.a)(Object(c.a)({},b),{},{ref:a,className:r()(s,t,o&&"text-muted")}))}));_.displayName="FormText";var q=_,A=o.forwardRef((function(e,a){return Object(d.jsx)(P,Object(c.a)(Object(c.a)({},e),{},{ref:a,type:"switch"}))}));A.displayName="Switch";var E=Object.assign(A,{Input:P.Input,Label:P.Label}),Q=["bsPrefix","className","children","controlId","label"],W=o.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,n=e.children,l=e.controlId,o=e.label,b=Object(i.a)(e,Q);return t=Object(O.a)(t,"form-floating"),Object(d.jsxs)(V,Object(c.a)(Object(c.a)({ref:a,className:r()(s,t),controlId:l},b),{},{children:[n,Object(d.jsx)("label",{htmlFor:l,children:o})]}))}));W.displayName="FloatingLabel";var X=W,Y=["className","validated","as"],Z={_ref:l.a.any,validated:l.a.bool,as:l.a.elementType},$=o.forwardRef((function(e,a){var t=e.className,s=e.validated,n=e.as,l=void 0===n?"form":n,o=Object(i.a)(e,Y);return Object(d.jsx)(l,Object(c.a)(Object(c.a)({},o),{},{ref:a,className:r()(t,s&&"was-validated")}))}));$.displayName="Form",$.propTypes=Z;a.a=Object.assign($,{Group:V,Control:k,Floating:C,Check:P,Switch:E,Label:D,Text:q,Range:B,Select:U,FloatingLabel:X})},775:function(e,a,t){"use strict";var c=t(4),i=c.createContext({});a.a=i},781:function(e,a,t){"use strict";t.d(a,"a",(function(){return j}));var c=t(31),i=t(208),s=t(209),r=t.n(s),n=/-(.)/g;var l=t(4),o=t(210),d=t(10),b=["className","bsPrefix","as"],f=function(e){return e[0].toUpperCase()+(a=e,a.replace(n,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function j(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.displayName,s=void 0===t?f(e):t,n=a.Component,j=a.defaultProps,u=l.forwardRef((function(a,t){var s=a.className,l=a.bsPrefix,f=a.as,j=void 0===f?n||"div":f,u=Object(i.a)(a,b),v=Object(o.a)(l,e);return Object(d.jsx)(j,Object(c.a)({ref:t,className:r()(s,v)},u))}));return u.defaultProps=j,u.displayName=s,u}},792:function(e,a,t){"use strict";t.d(a,"b",(function(){return n}));var c=t(32),i=t(4),s=t(10),r=["as","disabled"];function n(e){var a=e.tagName,t=e.disabled,c=e.href,i=e.target,s=e.rel,r=e.onClick,n=e.tabIndex,l=void 0===n?0:n,o=e.type;a||(a=null!=c||null!=i||null!=s?"a":"button");var d={tagName:a};if("button"===a)return[{type:o||"button",disabled:t},d];var b=function(e){(t||"a"===a&&function(e){return!e||"#"===e.trim()}(c))&&e.preventDefault(),t?e.stopPropagation():null==r||r(e)};return[{role:"button",disabled:void 0,tabIndex:t?void 0:l,href:"a"===a&&t?void 0:c,target:"a"===a?i:void 0,"aria-disabled":t||void 0,rel:"a"===a?s:void 0,onClick:b,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),b(e))}},d]}var l=i.forwardRef((function(e,a){var t=e.as,i=e.disabled,l=function(e,a){if(null==e)return{};var t,c,i={},s=Object.keys(e);for(c=0;c<s.length;c++)t=s[c],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r),o=n(Object.assign({tagName:t,disabled:i},l)),d=Object(c.a)(o,2),b=d[0],f=d[1].tagName;return Object(s.jsx)(f,Object.assign({},l,b,{ref:a}))}));l.displayName="Button",a.a=l},803:function(e,a,t){"use strict";var c=function(){};e.exports=c},868:function(e,a,t){"use strict";var c=t(31),i=t(32),s=t(208),r=t(209),n=t.n(r),l=t(4),o=t(792),d=t(210),b=t(10),f=["as","bsPrefix","variant","size","active","className"],j=l.forwardRef((function(e,a){var t=e.as,r=e.bsPrefix,l=e.variant,j=e.size,u=e.active,v=e.className,m=Object(s.a)(e,f),O=Object(d.a)(r,"btn"),p=Object(o.b)(Object(c.a)({tagName:t},m)),x=Object(i.a)(p,2),N=x[0],y=x[1].tagName;return Object(b.jsx)(y,Object(c.a)(Object(c.a)(Object(c.a)({},m),N),{},{ref:a,className:n()(v,O,u&&"active",l&&"".concat(O,"-").concat(l),j&&"".concat(O,"-").concat(j),m.href&&m.disabled&&"disabled")}))}));j.displayName="Button",j.defaultProps={variant:"primary",active:!1,disabled:!1},a.a=j},890:function(e,a,t){"use strict";var c=t(31),i=t(208),s=t(209),r=t.n(s),n=t(4),l=t(775),o=t(210),d=t(10),b=["id","bsPrefix","className","type","isValid","isInvalid","as"],f=n.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,f=e.className,j=e.type,u=void 0===j?"checkbox":j,v=e.isValid,m=void 0!==v&&v,O=e.isInvalid,p=void 0!==O&&O,x=e.as,N=void 0===x?"input":x,y=Object(i.a)(e,b),h=Object(n.useContext)(l.a).controlId;return s=Object(o.a)(s,"form-check-input"),Object(d.jsx)(N,Object(c.a)(Object(c.a)({},y),{},{ref:a,type:u,id:t||h,className:r()(f,s,m&&"is-valid",p&&"is-invalid")}))}));f.displayName="FormCheckInput",a.a=f},975:function(e,a,t){"use strict";var c=t(31),i=t(208),s=t(209),r=t.n(s),n=t(4),l=t(210),o=t(10),d=["bsPrefix","fluid","as","className"],b=n.forwardRef((function(e,a){var t=e.bsPrefix,s=e.fluid,n=e.as,b=void 0===n?"div":n,f=e.className,j=Object(i.a)(e,d),u=Object(l.a)(t,"container"),v="string"===typeof s?"-".concat(s):"-fluid";return Object(o.jsx)(b,Object(c.a)(Object(c.a)({ref:a},j),{},{className:r()(f,s?"".concat(u).concat(v):u)}))}));b.displayName="Container",b.defaultProps={fluid:!1},a.a=b}}]);
//# sourceMappingURL=14.e15859b2.chunk.js.map